# Move page folders to [locale] directory

$folders = @("about", "admissions", "alumni", "apply", "blog", "contact", "faq", "financial-aid", "give", "impact", "media", "ministry-training", "news", "online", "privacy", "programs", "resources", "student-life", "terms")

foreach ($folder in $folders) {
    $src = "app\$folder"
    $dst = "app\[locale]\$folder"
    
    if (Test-Path $src) {
        Write-Host "Moving $folder"
        Move-Item -Path $src -Destination $dst -Force
    }
}

Write-Host "Done!"
