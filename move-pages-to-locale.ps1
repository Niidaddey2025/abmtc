# PowerShell script to move all page folders to [locale] directory

$appDir = "app"
$localeDir = "app\[locale]"

# List of folders to move (exclude special folders)
$foldersToMove = @(
    "about",
    "admissions",
    "alumni",
    "apply",
    "blog",
    "contact",
    "faq",
    "financial-aid",
    "give",
    "impact",
    "media",
    "ministry-training",
    "news",
    "online",
    "privacy",
    "programs",
    "resources",
    "student-life",
    "terms"
)

Write-Host "Moving page folders to [locale] directory..." -ForegroundColor Green

foreach ($folder in $foldersToMove) {
    $source = Join-Path $appDir $folder
    $destination = Join-Path $localeDir $folder
    
    if (Test-Path $source) {
        Write-Host "Moving $folder..." -ForegroundColor Yellow
        Move-Item -Path $source -Destination $destination -Force
        Write-Host "  ✓ Moved $folder" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ $folder not found, skipping" -ForegroundColor Gray
    }
}

Write-Host "`nAll pages moved successfully!" -ForegroundColor Green
Write-Host "Note: The api folder was not moved as it should remain at the root level." -ForegroundColor Cyan
