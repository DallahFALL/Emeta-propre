param(
    [string]$MissionRef = "MIS-2026-5468",
    [string]$HandoffKey = [Environment]::GetEnvironmentVariable("CORTEX_04_HANDOFF_KEY")
)

# ==========================================
# SCRIPT DE TEST SYNCHRONISE - CORTEX 02 & 04
# ==========================================

$ErrorActionPreference = "Stop"
$failures = [System.Collections.Generic.List[string]]::new()

if ($missionRef -notmatch '^MIS-2026-\d{4}$') {
    throw "La reference doit respecter le format MIS-2026-XXXX."
}
if ([string]::IsNullOrWhiteSpace($HandoffKey)) {
    throw "Le credential Handoff Auth doit être fourni explicitement pour exécuter ce test."
}

Write-Host "--------------------------------------------------" -ForegroundColor Cyan
Write-Host "ETAPE 1 : Simulation message entrant (CORTEX_02)..." -ForegroundColor Yellow
Write-Host "--------------------------------------------------" -ForegroundColor Cyan

$body02 = @{
    object = "whatsapp_business_account"
    entry = @(
        @{
            id = "123456789"
            changes = @(
                @{
                    value = @{
                        messaging_product = "whatsapp"
                        metadata = @{ display_phone_number = "221770000000"; phone_number_id = "111" }
                        contacts = @(
                            @{ 
                                profile = @{ name = "Partenaire Test e-META" }
                                wa_id = "221777777777" 
                            }
                        )
                        messages = @(
                            @{
                                from = "221777777777"
                                id = "wamid.TestID.Sync"
                                timestamp = "1710000000"
                                text = @{ body = "$missionRef - Test de synchronisation automatique" }
                                type = "text"
                            }
                        )
                    }
                    field = "messages"
                }
            )
        }
    )
} | ConvertTo-Json -Depth 10

try {
    $response02 = Invoke-RestMethod -Uri "https://automation.e-metalabs.com/webhook/reception-emeta" -Method Post -ContentType "application/json" -Body $body02
    Write-Host "[SUCCES] Webhook CORTEX_02 atteint avec succes." -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Echec de l'appel CORTEX_02 : $_" -ForegroundColor Red
    $failures.Add("CORTEX_02 POST : $_")
}

Start-Sleep -Seconds 3

Write-Host "`n--------------------------------------------------" -ForegroundColor Cyan
Write-Host "ETAPE 2 : Interrogation du statut (CORTEX_04 GET)..." -ForegroundColor Yellow
Write-Host "--------------------------------------------------" -ForegroundColor Cyan

try {
    $urlGet = "https://automation.e-metalabs.com/webhook/statut-mission?ref=$missionRef"
    $response04Get = Invoke-RestMethod -Uri $urlGet -Method Get
    if (-not $response04Get.success -or -not $response04Get.found) {
        throw "Le registre ne retourne pas la mission $missionRef."
    }
    Write-Host "[SUCCES] Donnees recues du registre :" -ForegroundColor Green
    $response04Get | ConvertTo-Json -Depth 5
} catch {
    Write-Host "[ERREUR] Echec de la recuperation du statut : $_" -ForegroundColor Red
    $failures.Add("CORTEX_04 GET : $_")
}

if ($failures.Count -gt 0) {
    Write-Host "`nTEST EN ECHEC :" -ForegroundColor Red
    $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
    exit 1
}

Start-Sleep -Seconds 2

Write-Host "`n--------------------------------------------------" -ForegroundColor Cyan
Write-Host "ETAPE 3 : Declenchement Option B (CORTEX_04 POST)..." -ForegroundColor Yellow
Write-Host "--------------------------------------------------" -ForegroundColor Cyan

$body04Post = @{
    reference  = $missionRef
    action     = "solliciter_arbitrage_terrain"
    expediteur = "221777777777"
    texte_message = "Test de synchronisation automatique : demande d'arbitrage terrain."
} | ConvertTo-Json

try {
    $response04Post = Invoke-RestMethod -Uri "https://automation.e-metalabs.com/webhook/cortex-04-handoff-option-b" -Method Post -ContentType "application/json" -Headers @{ "x-handoff-key" = $HandoffKey } -Body $body04Post
    $handoffConfirmed = $false
    for ($attempt = 0; $attempt -lt 5; $attempt++) {
        Start-Sleep -Seconds 2
        $response04Get = Invoke-RestMethod -Uri $urlGet -Method Get
        if ($response04Get.found -and $response04Get.statut -ceq ("Arbitrage Demand" + [char]0xE9)) {
            $handoffConfirmed = $true
            break
        }
    }
    if (-not $handoffConfirmed) {
        throw "Le statut NocoDB n'a pas ete actualise apres le handoff."
    }
    Write-Host "[SUCCES] Signal d'arbitrage transmis au Desk." -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Echec du handoff Option B : $_" -ForegroundColor Red
    $failures.Add("CORTEX_04 POST : $_")
}

if ($failures.Count -gt 0) {
    Write-Host "`nTEST EN ECHEC :" -ForegroundColor Red
    $failures | ForEach-Object { Write-Host "- $_" -ForegroundColor Red }
    exit 1
}

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host " TEST TERMINE AVEC SUCCES." -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan