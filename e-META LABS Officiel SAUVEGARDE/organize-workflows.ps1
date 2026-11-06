$rootWorkflows = Join-Path $PSScriptRoot "cortex_workflows"

# Création des sous-dossiers s'ils n'existent pas
$subfolders = @("core", "ai_rag", "finance", "outreach", "utilities", "archives")
foreach ($folder in $subfolders) {
    $path = Join-Path $rootWorkflows $folder
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
    }
}

# Recherche des fichiers JSON hors des dossiers déjà rangés
$jsonFiles = Get-ChildItem -Path $PSScriptRoot -Recurse -Filter "*.json" | Where-Object { 
    $_.FullName -notmatch '\\\.git\\' -and $_.FullName -notmatch '\\cortex_workflows\\(core|ai_rag|finance|outreach|utilities|archives)\\' 
}

foreach ($file in $jsonFiles) {
    $fileName = $file.Name.ToLower()
    $destinationFolder = "utilities"

    if ($fileName -match "01_|02_|04_|inbound|whatsapp|sla|dispatcher") { $destinationFolder = "core" }
    elseif ($fileName -match "rag|semantic|ingestion") { $destinationFolder = "ai_rag" }
    elseif ($fileName -match "billing|escrow|paytech") { $destinationFolder = "finance" }
    elseif ($fileName -match "abm|outreach") { $destinationFolder = "outreach" }
    elseif ($fileName -match "archive|poc|obsolet") { $destinationFolder = "archives" }
    elseif ($fileName -match "erreur|error|mcp") { $destinationFolder = "utilities" }

    $destPath = Join-Path $rootWorkflows $destinationFolder
    if ($file.DirectoryName -ne $destPath) {
        Move-Item -Path $file.FullName -Destination $destPath -Force
        Write-Host "[->] Déplacement de '$($file.Name)' vers [$destinationFolder]" -ForegroundColor Cyan
    }
}

Write-Host "`n[SUCCES] Rangement de tous les workflows terminé !" -ForegroundColor Green