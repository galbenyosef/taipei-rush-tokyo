Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win {
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int cx, int cy, uint flags);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
}
"@
$chrome = Get-Process chrome -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowHandle -ne 0 }
foreach ($p in $chrome) {
  Write-Output ("pid=" + $p.Id + " | title=" + $p.MainWindowTitle + " | hwnd=" + $p.MainWindowHandle)
  if ($args[0] -eq "top") {
    [Win]::ShowWindow($p.MainWindowHandle, 9) | Out-Null   # SW_RESTORE
    [Win]::SetWindowPos($p.MainWindowHandle, [IntPtr](-1), 0, 0, 0, 0, 0x0003) | Out-Null  # HWND_TOPMOST, NOMOVE|NOSIZE
    [Win]::SetForegroundWindow($p.MainWindowHandle) | Out-Null
    Write-Output "  -> made topmost"
  }
  if ($args[0] -eq "untop") {
    [Win]::SetWindowPos($p.MainWindowHandle, [IntPtr](-2), 0, 0, 0, 0, 0x0003) | Out-Null  # HWND_NOTOPMOST
    Write-Output "  -> removed topmost"
  }
}
