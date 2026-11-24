$url = "https://automation.e-metalabs.com/webhook/cortex-dispatch-expert"
$headers = @{ "Accept" = "application/json" }
$ref = "MIS-2026-" + (Get-Random -Minimum 1000 -Maximum 9999)
$body = @{
  Mission_Ref    = $ref
  Secteur_Code   = "AGRO"
  Langue_Dossier = "FR"
  Palier_Mandat  = "Audit Stratégique"
} | ConvertTo-Json -Depth 5

Write-Host "Envoi du tir vers $url avec Mission_Ref = $ref" -ForegroundColor Cyan
Invoke-RestMethod -Uri $url -Method POST -Headers $headers -ContentType "application/json" -Body $body