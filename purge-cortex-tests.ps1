<#
.SYNOPSIS
    Purge sécurisée des données de test CORTEX (NocoDB v3 + génération/exécution SQL PostgreSQL).
.EXAMPLE
    # 1. Simulation sans modification (recommandé en premier)
    $env:NOCODB_TOKEN = "VOTRE_NOUVEAU_TOKEN_NOCODB"
    .\purge-cortex-tests.ps1

    # 2. Exécution réelle sur les dossiers de test (marqueur AUDIT-TEST-2026 ou références ciblées)
    .\purge-cortex-tests.ps1 -Execute

    # 3. Purge totale pré-production (toutes les missions de Registre_Missions) + exécution SSH Postgres
    .\purge-cortex-tests.ps1 -Execute -PurgeAllMissions -ResetSequence -SshTarget "ubuntu@VOTRE_IP_VPS"
#>

[CmdletBinding()]
param(
    [string]$NocoDbBaseUrl    = "https://base.e-metalabs.com/api/v3/data/pch2k3ljr1ut4if",
    [string]$MissionsTableId  = "mv1cb6xm00g6rf5", # Registre_Missions
    [string]$ExpertsTableId   = "m4705kfa0sqavqb", # Experts_Desk
    [string]$LogsTableId      = "",                # Optionnel : ID table Logs_Communications
    [string]$NocoDbToken      = "",

    # Ciblage des missions à purger
    [string]$TestMarker       = "AUDIT-TEST-2026",
    [string[]]$MissionRefs    = @(),               # Ex: @("MIS-2026-0027","MIS-2026-0031")
    [switch]$PurgeAllMissions,                     # Purge 100% de Registre_Missions (pré-ouverture)

    # Experts à remettre sur "Disponible" (Samba Racine #107749, Expert #114655)
    [int[]]$ExpertIdsToReset  = @(107749, 114655),

    # Exécution réelle (sans ce switch = DryRun)
    [switch]$Execute,

    # Export / exécution PostgreSQL (optionnel)
    [string]$SqlOutputPath    = ".\purge-cortex-generated.sql",
    [switch]$ResetSequence,
    [string]$SshTarget        = "",                # Ex: "ubuntu@51.x.x.x"
    [string]$PgContainer      = "postgres-1",
    [string]$PgUser           = "postgres",
    [string]$PgDatabase       = "postgres"
)

$ErrorActionPreference = "Stop"

# --- Helpers compatibles Windows PowerShell 5.1 ---
function ConvertTo-JsonArrayUtf8Bytes {
    param([Parameter(Mandatory = $true)][array]$Items)
    if ($Items.Count -eq 1) {
        $json = "[" + ($Items[0] | ConvertTo-Json -Depth 10 -Compress) + "]"
    } else {
        $json = $Items | ConvertTo-Json -Depth 10 -Compress
    }
    return [System.Text.Encoding]::UTF8.GetBytes($json)
}

function Invoke-NocoDb {
    param(
        [string]$Method,
        [string]$Uri,
        [array]$BodyItems = $null,
        [int]$BatchSize = 10
    )
    $headers = @{
        "xc-token" = $NocoDbToken
        "Accept"   = "application/json"
    }
    if ($null -eq $BodyItems -or $BodyItems.Count -eq 0) {
        return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $headers
    }
    $results = @()
    for ($i = 0; $i -lt $BodyItems.Count; $i += $BatchSize) {
        $end = [Math]::Min($i + $BatchSize - 1, $BodyItems.Count - 1)
        $chunk = @($BodyItems[$i..$end])
        if ($chunk.Count -eq 1) {
            $jsonPayload = "[" + ($chunk[0] | ConvertTo-Json -Depth 10 -Compress) + "]"
        } else {
            $jsonPayload = ConvertTo-Json -InputObject @($chunk) -Depth 10 -Compress
        }
        $params = @{
            Method      = $Method
            Uri         = $Uri
            Headers     = $headers
            ContentType = "application/json; charset=utf-8"
            Body        = [System.Text.Encoding]::UTF8.GetBytes($jsonPayload)
        }
        try {
            $results += Invoke-RestMethod @params
        } catch {
            $statusCode = "N/A"
            $respBody = $_.Exception.Message
            if ($_.Exception.Response) {
                try { $statusCode = [int]$_.Exception.Response.StatusCode } catch {}
                try {
                    $sr = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
                    $respBody = $sr.ReadToEnd()
                    $sr.Close()
                } catch {}
            }
            Write-Host "  [ERREUR HTTP $statusCode] $Method $Uri (lot $($i + 1)-$($end + 1))" -ForegroundColor Red
            Write-Host "  Réponse : $respBody" -ForegroundColor Red
            throw
        }
    }
    return $results
}

Write-Host "==================================================================" -ForegroundColor Cyan
Write-Host "   e-META LABS | PURGE DONNÉES DE TEST CORTEX (NOCODB + PGSQL)    " -ForegroundColor Cyan
Write-Host "==================================================================" -ForegroundColor Cyan
if (-not $Execute) {
    Write-Host "[MODE SIMULATION] Aucune suppression ne sera appliquée (ajoutez -Execute pour valider)." -ForegroundColor Yellow
} else {
    Write-Host "[MODE EXÉCUTION] Les suppressions et réinitialisations seront appliquées !" -ForegroundColor Red
}

if ([string]::IsNullOrWhiteSpace($NocoDbToken)) {
    $secToken = Read-Host "Jeton API NocoDB (saisie masquée)" -AsSecureString
    $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secToken)
    try {
        $NocoDbToken = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    } finally {
        [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
}
if ([string]::IsNullOrWhiteSpace($NocoDbToken)) {
    throw "Aucun jeton NocoDB saisi. Opération annulée."
}

# ==================================================================
# [1/4] LECTURE & FILTRAGE DE Registre_Missions (NocoDB v3)
# ==================================================================
Write-Host "`n[1/4] Lecture de Registre_Missions ($MissionsTableId)..." -ForegroundColor White

$allMissions = @()
$page = 1
do {
    $uri = "$NocoDbBaseUrl/$MissionsTableId/records?page=$page&pageSize=100"
    $resp = Invoke-NocoDb -Method "GET" -Uri $uri
    $batch = @()
    if ($resp.records) { $batch = @($resp.records) }
    elseif ($resp.list) { $batch = @($resp.list) }

    $allMissions += $batch
    $hasMore = ($batch.Count -eq 100) -and ($resp.next -or $resp.pageInfo.isLastPage -eq $false)
    $page++
} while ($hasMore -and $page -le 20)

Write-Host "  -> $($allMissions.Count) enregistrement(s) total(aux) trouvé(s)."

$targets = @()
foreach ($row in $allMissions) {
    $f = if ($row.fields) { $row.fields } else { $row }
    $id = if ($row.id) { [int]$row.id } else { [int]$f.Id }
    $ref = [string]($f.Mission_Ref)
    $ctx = [string]($f.Contexte_Extrait)

    $isMatch = $false
    if ($PurgeAllMissions) {
        $isMatch = $true
    } elseif ($MissionRefs.Count -gt 0 -and ($MissionRefs -contains $ref)) {
        $isMatch = $true
    } elseif (-not [string]::IsNullOrWhiteSpace($TestMarker) -and $ctx -like "*$TestMarker*") {
        $isMatch = $true
    }

    if ($isMatch) {
        $targets += [PSCustomObject]@{
            Id         = $id
            MissionRef = $ref
            Statut     = [string]($f.Statut_Mandat)
        }
    }
}

Write-Host "  -> $($targets.Count) mission(s) ciblée(s) pour suppression :" -ForegroundColor Yellow
$targets | Format-Table -AutoSize

if ($Execute -and $targets.Count -gt 0) {
    $confirm = Read-Host "Confirmez-vous la suppression de $($targets.Count) mission(s) dans NocoDB ? Tapez 'PURGER'"
    if ($confirm -ne "PURGER") {
        Write-Host "Opération annulée par l'utilisateur." -ForegroundColor Yellow
        exit 0
    }

    $deletePayload = @()
    foreach ($t in $targets) {
        $deletePayload += @{ id = $t.Id }
    }
    $delUri = "$NocoDbBaseUrl/$MissionsTableId/records"
    Invoke-NocoDb -Method "DELETE" -Uri $delUri -BodyItems $deletePayload | Out-Null
    Write-Host "  [OK] $($targets.Count) mission(s) supprimée(s) de Registre_Missions." -ForegroundColor Green
}

# ==================================================================
# [2/4] RÉINITIALISATION DES EXPERTS DE TEST (Experts_Desk)
# ==================================================================
Write-Host "`n[2/4] Réinitialisation des experts dans Experts_Desk ($ExpertsTableId)..." -ForegroundColor White

$expertPatches = @()
foreach ($expId in $ExpertIdsToReset) {
    $expertPatches += @{
        id     = $expId
        fields = @{ Statut = "Disponible" }
    }
    Write-Host "  -> Expert #$expId : Statut => Disponible"
}

if ($Execute -and $expertPatches.Count -gt 0) {
    $expUri = "$NocoDbBaseUrl/$ExpertsTableId/records"
    Invoke-NocoDb -Method "PATCH" -Uri $expUri -BodyItems $expertPatches | Out-Null
    Write-Host "  [OK] $($expertPatches.Count) expert(s) remis sur 'Disponible'." -ForegroundColor Green
}

# ==================================================================
# [3/4] PURGE OPTIONNELLE DE Logs_Communications
# ==================================================================
if (-not [string]::IsNullOrWhiteSpace($LogsTableId)) {
    Write-Host "`n[3/4] Contrôle de Logs_Communications ($LogsTableId)..." -ForegroundColor White
    $logsResp = Invoke-NocoDb -Method "GET" -Uri "$NocoDbBaseUrl/$LogsTableId/records?page=1&pageSize=100"
    $logsBatch = if ($logsResp.records) { @($logsResp.records) } elseif ($logsResp.list) { @($logsResp.list) } else { @() }
    $refsToClean = @($targets | ForEach-Object { $_.MissionRef } | Where-Object { $_ })

    $logsToDelete = @()
    foreach ($logRow in $logsBatch) {
        $rawText = ($logRow | ConvertTo-Json -Depth 5 -Compress)
        $hit = $PurgeAllMissions.IsPresent
        if (-not $hit) {
            foreach ($r in $refsToClean) {
                if ($rawText -like "*$r*") { $hit = $true; break }
            }
        }
        if ($hit) {
            $lid = if ($logRow.id) { [int]$logRow.id } else { [int]$logRow.fields.Id }
            $logsToDelete += @{ id = $lid }
        }
    }

    Write-Host "  -> $($logsToDelete.Count) entrée(s) trouvée(s) dans Logs_Communications."
    if ($Execute -and $logsToDelete.Count -gt 0) {
        Invoke-NocoDb -Method "DELETE" -Uri "$NocoDbBaseUrl/$LogsTableId/records" -BodyItems $logsToDelete | Out-Null
        Write-Host "  [OK] $($logsToDelete.Count) log(s) supprimé(s)." -ForegroundColor Green
    }
} else {
    Write-Host "`n[3/4] Logs_Communications ignoré (ajoutez -LogsTableId '<id>' si vous souhaitez le purger)." -ForegroundColor DarkGray
}

# ==================================================================
# [4/4] GÉNÉRATION (ET EXÉCUTION OPTIONNELLE) DU SQL POSTGRESQL
# ==================================================================
Write-Host "`n[4/4] Génération du script SQL PostgreSQL ($SqlOutputPath)..." -ForegroundColor White

$sqlLines = @()
$sqlLines += "-- Purge PostgreSQL générée le $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
$sqlLines += "BEGIN;"

if ($PurgeAllMissions) {
    $sqlLines += "DELETE FROM cortex_mission_claims;"
} else {
    $validRefs = @($targets | ForEach-Object { $_.MissionRef } | Where-Object { $_ -match '^MIS-\d{4}-\d+$' } | Sort-Object -Unique)
    if ($validRefs.Count -gt 0) {
        $inClause = ($validRefs | ForEach-Object { "'$_'" }) -join ", "
        $sqlLines += "DELETE FROM cortex_mission_claims WHERE mission_ref IN ($inClause);"
    } else {
        $sqlLines += "-- Aucune référence MIS-XXXX-XXXX ciblée à supprimer."
    }
}

if ($ResetSequence) {
    $sqlLines += @"
DO `$`$
DECLARE
    seq_name text;
BEGIN
    SELECT schemaname || '.' || sequencename INTO seq_name
    FROM pg_sequences
    WHERE sequencename ILIKE '%mission%' OR sequencename ILIKE '%cortex%'
    ORDER BY sequencename
    LIMIT 1;

    IF seq_name IS NOT NULL THEN
        EXECUTE 'ALTER SEQUENCE ' || seq_name || ' RESTART WITH 1';
        RAISE NOTICE 'Séquence réinitialisée à 1 : %', seq_name;
    ELSE
        RAISE NOTICE 'Aucune séquence mission/cortex détectée automatiquement.';
    END IF;
END `$`$;
"@
}

$sqlLines += "SELECT COUNT(*) AS claims_restants FROM cortex_mission_claims;"
$sqlLines += "COMMIT;"

$sqlContent = $sqlLines -join "`n"
[System.IO.File]::WriteAllText($SqlOutputPath, $sqlContent, [System.Text.UTF8Encoding]::new($false))
Write-Host "  [OK] Script SQL écrit dans : $SqlOutputPath" -ForegroundColor Green

if ($Execute -and -not [string]::IsNullOrWhiteSpace($SshTarget)) {
    Write-Host "  -> Exécution du SQL via SSH sur $SshTarget (conteneur $PgContainer)..." -ForegroundColor Yellow
    $sqlContent | ssh $SshTarget "docker exec -i $PgContainer psql -v ON_ERROR_STOP=1 -U $PgUser -d $PgDatabase"
    Write-Host "  [OK] Purge PostgreSQL exécutée sur le VPS." -ForegroundColor Green
} else {
    Write-Host "`nCommande manuelle pour exécuter le SQL sur votre VPS :" -ForegroundColor Cyan
    Write-Host "  Get-Content $SqlOutputPath -Raw | ssh ubuntu@VOTRE_IP_VPS `"docker exec -i $PgContainer psql -v ON_ERROR_STOP=1 -U $PgUser -d $PgDatabase`"" -ForegroundColor Gray
}

Write-Host "`n==================================================================" -ForegroundColor Cyan
Write-Host "   OPÉRATION TERMINÉE - PENSEZ À CLIQUER 'Stop all' DANS n8n 05   " -ForegroundColor Cyan
Write-Host "==================================================================" -ForegroundColor Cyan