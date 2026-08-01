$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$address = [System.Net.IPAddress]::Parse("127.0.0.1")
$server = [System.Net.Sockets.TcpListener]::new($address, 8788)
$server.Start()

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".avif" = "image/avif"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"
}

while ($true) {
  $client = $server.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()

    while (($line = $reader.ReadLine()) -ne $null -and $line -ne "") {}

    $requestPath = "/"
    if ($requestLine -match "^[A-Z]+\s+([^\s]+)") {
      $requestPath = $Matches[1].Split("?")[0]
    }

    $path = [System.Uri]::UnescapeDataString($requestPath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = "index.html"
    }

    $fullPath = Join-Path $root $path
    $resolved = Resolve-Path -LiteralPath $fullPath -ErrorAction SilentlyContinue

    if ($resolved -and $resolved.Path.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $resolved.Path -PathType Leaf)) {
      $body = [System.IO.File]::ReadAllBytes($resolved.Path)
      $extension = [System.IO.Path]::GetExtension($resolved.Path).ToLowerInvariant()
      $contentType = $types[$extension]
      if (-not $contentType) {
        $contentType = "application/octet-stream"
      }
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    }

    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($body, 0, $body.Length)
  } finally {
    $client.Close()
  }
}
