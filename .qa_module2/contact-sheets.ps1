Add-Type -AssemblyName System.Drawing
$qaRoot = $PSScriptRoot
$report = Get-Content -Raw -Encoding utf8 -LiteralPath (Join-Path $qaRoot 'browser-results.json') | ConvertFrom-Json
$desktop = $report.viewports | Where-Object { $_.name -eq 'desktop' }
$slidesToShow = @($desktop.heights)
$contactDir = Join-Path $qaRoot 'beginner/contact-sheets'
New-Item -ItemType Directory -Force -Path $contactDir | Out-Null
for ($group = 0; $group -lt [Math]::Ceiling($slidesToShow.Count / 9); $group++) {
    $canvas = New-Object System.Drawing.Bitmap 1800, 1395
    $drawing = [System.Drawing.Graphics]::FromImage($canvas)
    $drawing.Clear([System.Drawing.Color]::White)
    $drawing.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $font = New-Object System.Drawing.Font 'Arial', 12
    for ($slot = 0; $slot -lt 9; $slot++) {
        $slideIndex = $group * 9 + $slot
        if ($slideIndex -ge $slidesToShow.Count) { break }
        $slide = $slidesToShow[$slideIndex]
        $source = [System.Drawing.Image]::FromFile((Join-Path $qaRoot ('beginner/desktop/' + $slide.id + '.png')))
        $left = ($slot % 3) * 600
        $top = [Math]::Floor($slot / 3) * 465
        $drawing.DrawString(($slideIndex + 1).ToString() + '  ' + $slide.id, $font, [System.Drawing.Brushes]::Black, $left + 12, $top + 4)
        $sourceRect = New-Object System.Drawing.RectangleF 170, 104, 1100, $slide.height
        $destRect = New-Object System.Drawing.RectangleF $left, ($top + 30), 600, ($slide.height * 600 / 1100)
        $drawing.DrawImage($source, $destRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
        $source.Dispose()
    }
    $canvas.Save((Join-Path $contactDir ('sheet-' + ($group + 1) + '.png')), [System.Drawing.Imaging.ImageFormat]::Png)
    $font.Dispose()
    $drawing.Dispose()
    $canvas.Dispose()
}
Write-Output ('Created ' + [Math]::Ceiling($slidesToShow.Count / 9) + ' contact sheets.')
