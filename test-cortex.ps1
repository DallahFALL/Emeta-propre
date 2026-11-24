param(
    [string]$NocoDbToken = $env:NOCODB_TOKEN
)

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# ==================================================================
#   e-META LABS | BANC DE TEST GLOBAL CORTEX (END-TO-END 2026)
# ==================================================================
$InboundUrl     = "https://automation.e-metalabs.com/webhook/reception-saisine"
$TrackerApiUrl  = "https://automation.e-metalabs.com/webhook/statut-mission"
$TrackerWebBase = "https://e-metalabs.com/tracker.html"
$NocoDbBaseUrl  = "https://base.e-metalabs.com/api/v3/data/pch2k3ljr1ut4if/mv1cb6xm00g6rf5/records"

$SimulatedRef   = "MIS-2026-" + (Get-Random -Minimum 1000 -Maximum 9999)
$TimestampT0    = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
$Contexte       = "AUDIT-TEST-2026 : Demande d'investigation stratégique approfondie concernant la sécurisation d'une unité agro-industrielle de transformation et de stockage frigorifique dans la vallée du fleuve Sénégal. Nous observons des pertes post-récolte de 22% liées à des ruptures de chaîne du froid et sollicitons une Option B avec arbitrage terrain contradictoire par un expert senior afin de valider les contraintes hydrauliques, thermiques et topographiques avant déblocage des investissements."

$Payload = [ordered]@{
    reference           = $SimulatedRef
    mission_ref         = $SimulatedRef
    mission_nom         = "AUDIT-TEST-2026 — Complexe Agro-Industriel du Fleuve"
    entreprise          = "AUDIT-TEST-2026 — Complexe Agro-Industriel du Fleuve"
    secteur_selectionne = "agro"
    secteur_nom         = "Agro-industrie & Souveraineté Alimentaire"
    palier              = "MANDAT CERTIFIÉ"
    montant_eur         = 280
    devise              = "EUR"
    mission_contexte    = $Contexte
    contexte            = $Contexte
    email               = "contact@e-metalabs.com"
    telephone           = "221770000000"
    whatsapp            = "221770000000"
    langue              = "fr"
    option_b_detectee   = $true
    source              = "test-cortex.ps1"
    timestamp_t0        = $TimestampT0
}

Write-Host ""
Write-Host "==================================================================" -ForegroundColor Yellow
Write-Host "   e-META LABS | BANC DE TEST GLOBAL CORTEX (END-TO-END 2026)     " -ForegroundColor Yellow
Write-Host "==================================================================" -ForegroundColor Yellow
Write-Host ""

Write-Host "[1/4] Paramètres de la saisine simulée :" -ForegroundColor Cyan
Write-Host "- Référence locale    : $SimulatedRef (remplacée par la séquence serveur)"
Write-Host "- Longueur contexte   : $($Contexte.Length) caractères (Seuil min : 150)"
Write-Host "- Déclencheur SLA     : Option B + arbitrage terrain inclus"
Write-Host "- Canal WhatsApp      : $($Payload.whatsapp) (Format E.164 sans '+')"
Write-Host "- Cible Inbound       : $InboundUrl"
Write-Host ""

# ------------------------------------------------------------------
# [2/4] EXPÉDITION VERS CORTEX 01 & LECTURE DE LA RÉFÉRENCE CANONIQUE
# ------------------------------------------------------------------
Write-Host "[2/4] Expédition de la saisine vers CORTEX 01..." -ForegroundColor Cyan

$CanonicalRef = $null
$ExpectedHash = $null
$TrackerUrl   = $null

$JsonBody  = $Payload | ConvertTo-Json -Depth 5 -Compress
$Utf8Bytes = [System.Text.Encoding]::UTF8.GetBytes($JsonBody)
$Watch     = [System.Diagnostics.Stopwatch]::StartNew()

try {
    $InboundResp = Invoke-WebRequest `
        -Uri $InboundUrl `
        -Method POST `
        -ContentType "application/json; charset=utf-8" `
        -Body $Utf8Bytes `
        -UseBasicParsing `
        -ErrorAction Stop

    $Watch.Stop()
    Write-Host "  [SUCCÈS] Réponse HTTP $($InboundResp.StatusCode) reçue en $($Watch.ElapsedMilliseconds) ms." -ForegroundColor Green
    Write-Host "- Payload retour : $($InboundResp.Content)"

    if ($InboundResp.Content) {
        $ParsedInbound = $InboundResp.Content | ConvertFrom-Json
        if ($ParsedInbound.reference_mission) {
            $CanonicalRef = [string]$ParsedInbound.reference_mission
            $ExpectedHash = [string]$ParsedInbound.empreinte_sha256
            if ($ParsedInbound.tracker_url) {
                $TrackerUrl = [string]$ParsedInbound.tracker_url
            }
            Write-Host "  [CANONIQUE] Référence allouée par PostgreSQL : $CanonicalRef" -ForegroundColor Green
        }
    }
}
catch {
    $Watch.Stop()
    Write-Host "  [ERREUR] Échec de l'expédition vers CORTEX 01 ($($Watch.ElapsedMilliseconds) ms) : $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

if ([string]::IsNullOrWhiteSpace($CanonicalRef)) {
    Write-Host "  [ALERTE] Aucune clé 'reference_mission' dans la réponse CORTEX 01 — repli sur $SimulatedRef." -ForegroundColor Yellow
    $CanonicalRef = $SimulatedRef
}

if ([string]::IsNullOrWhiteSpace($TrackerUrl)) {
    $TrackerUrl = "${TrackerWebBase}?ref=$([uri]::EscapeDataString($CanonicalRef))"
}

Write-Host ""

# ------------------------------------------------------------------
# [3/4] VÉRIFICATION DANS NOCODB v3 (Registre_Missions)
# ------------------------------------------------------------------
Write-Host "[3/4] Vérification de l'enregistrement dans NocoDB v3..." -ForegroundColor Cyan

if ([string]::IsNullOrWhiteSpace($NocoDbToken)) {
    Write-Host "  [INFO] Variable `$NocoDbToken / `$env:NOCODB_TOKEN non renseignée — contrôle API NocoDB ignoré." -ForegroundColor DarkGray
    Write-Host "  -> Vérifiez manuellement la ligne $CanonicalRef dans Registre_Missions (mv1cb6xm00g6rf5)."
}
else {
    try {
        $WhereFilter = [uri]::EscapeDataString("(Mission_Ref,eq,$CanonicalRef)")
        $NocoHeaders = @{ "xc-token" = $NocoDbToken }
        $NocoResp    = Invoke-RestMethod `
            -Uri "${NocoDbBaseUrl}?where=$WhereFilter" `
            -Method GET `
            -Headers $NocoHeaders `
            -ErrorAction Stop

        $Records = @()
        if ($NocoResp.records) { $Records = @($NocoResp.records) }
        elseif ($NocoResp.list) { $Records = @($NocoResp.list) }

        if ($Records.Count -gt 0) {
            $Fields = if ($Records[0].fields) { $Records[0].fields } else { $Records[0] }
            Write-Host "  [SUCCÈS] Enregistrement confirmé dans Registre_Missions (Id=$($Records[0].id))." -ForegroundColor Green
            Write-Host "- Mission_Ref   : $($Fields.Mission_Ref)"
            Write-Host "- Statut_Mandat : $($Fields.Statut_Mandat)"
            Write-Host "- Palier_Mandat : $($Fields.Palier_Mandat)"
            Write-Host "- Secteur_Code  : $($Fields.Secteur_Code)"
        }
        else {
            Write-Host "  [ALERTE] Ligne $CanonicalRef introuvable dans Registre_Missions." -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "  [ERREUR] Lecture NocoDB impossible : $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""

# ------------------------------------------------------------------
# [4/4] VÉRIFICATION DE L'ENDPOINT PUBLIC GET TRACKER (CORTEX 06)
# ------------------------------------------------------------------
Write-Host "[4/4] Vérification de l'endpoint public GET Tracker ($CanonicalRef)..." -ForegroundColor Cyan

try {
    $TrackerQueryUrl = "${TrackerApiUrl}?ref=$([uri]::EscapeDataString($CanonicalRef))"
    $TrackerResp     = Invoke-WebRequest -Uri $TrackerQueryUrl -Method GET -UseBasicParsing -ErrorAction Stop
    $CorsHeader      = ($TrackerResp.Headers["Access-Control-Allow-Origin"] -join ", ")
    $Dto             = $TrackerResp.Content | ConvertFrom-Json

    Write-Host "  [SUCCÈS] Endpoint Tracker joignable (HTTP $($TrackerResp.StatusCode))." -ForegroundColor Green
    Write-Host "- CORS           : $CorsHeader"
    Write-Host "- Référence DTO  : $($Dto.reference)"
    Write-Host "- Statut affiché : $($Dto.statut) ($($Dto.statut_brut))"
    Write-Host "- Étape          : $($Dto.etape_courante)/$($Dto.etape_totale) — $($Dto.libelle_etape)"
    Write-Host "- Secteur/Palier : $($Dto.secteur) | $($Dto.palier)"
    Write-Host "- Empreinte      : $($Dto.hash)"

    if (-not [string]::IsNullOrWhiteSpace($ExpectedHash)) {
        if ($Dto.hash -eq $ExpectedHash) {
            Write-Host "  [INTÉGRITÉ] Empreinte SHA-256 strictement identique entre CORTEX 01 et CORTEX 06." -ForegroundColor Green
        }
        else {
            Write-Host "  [ALERTE] Divergence d'empreinte SHA-256 entre CORTEX 01 et CORTEX 06." -ForegroundColor Yellow
        }
    }
}
catch {
    Write-Host "  [ERREUR] Endpoint Tracker en échec sur $CanonicalRef : $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================================================" -ForegroundColor Yellow
Write-Host "   TIR GLOBAL TERMINÉ — CHECKLIST DE VALIDATION EN DIRECT        " -ForegroundColor Yellow
Write-Host "==================================================================" -ForegroundColor Yellow
Write-Host "1. n8n Executions : Vérifiez les flux 01 -> 02 -> 03 et 05 pour $CanonicalRef."
Write-Host "2. Telegram HITL  : Sur le chat Desk Exécutif, testez 'Demander révision',"
Write-Host "                    puis cliquez sur 'Valider & Expédier' pour déclencher le flux 04."
Write-Host "3. WhatsApp Cloud : Confirmez la réception du modèle 'cortex_diagnostic' sur $($Payload.whatsapp)."
Write-Host "4. Tracker Client : Ouvrez $TrackerUrl"
Write-Host "5. Nettoyage Post-Test :"
Write-Host "   - Remettre le nœud Wait du workflow 05 sur 2 heures."
Write-Host "   - PostgreSQL : DELETE FROM cortex_mission_claims WHERE mission_ref = '$CanonicalRef';"
Write-Host "==================================================================" -ForegroundColor Yellow
Write-Host ""