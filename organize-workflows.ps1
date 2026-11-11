$ErrorActionPreference = "Stop"
$rootWorkflows = Join-Path $PSScriptRoot "cortex_workflows"
$canonicalFiles = @(
    "01_cortex_inbound_saisine.json",
    "02_cortex_analyse_rag_pdf.json",
    "03_cortex_desk_telegram_hitl.json",
    "04_cortex_delivrance_client.json",
    "05_cortex_dispatch_expert_sla.json"
)
$obsoleteFolders = @("ai_rag", "archives", "core", "finance", "outreach", "utilities")

foreach ($fileName in $canonicalFiles) {
    $filePath = Join-Path $rootWorkflows $fileName
    if (!(Test-Path -LiteralPath $filePath -PathType Leaf)) {
        throw "Workflow canonique manquant : $filePath"
    }
}

$unexpectedJson = Get-ChildItem -LiteralPath $rootWorkflows -Recurse -File -Filter "*.json" |
    Where-Object { $_.Name -notin $canonicalFiles -or $_.DirectoryName -ne $rootWorkflows }
if ($unexpectedJson) {
    $paths = ($unexpectedJson | ForEach-Object { $_.FullName }) -join [Environment]::NewLine
    throw "Fichiers JSON hors canon détectés ; aucun déplacement automatique effectué :$([Environment]::NewLine)$paths"
}

foreach ($folder in $obsoleteFolders) {
    $path = Join-Path $rootWorkflows $folder
    if (Test-Path -LiteralPath $path -PathType Container) {
        if (Get-ChildItem -LiteralPath $path -Force -Recurse) {
            throw "Le dossier obsolète n'est pas vide et nécessite une revue avant suppression : $path"
        }
        Remove-Item -LiteralPath $path -Force
    }
}

Write-Host "`n[SUCCES] Les cinq workflows canoniques sont conservés à la racine de cortex_workflows." -ForegroundColor Green