Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WinDlg {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int cx, int cy, uint flags);
}
"@
[WinDlg]::SetForegroundWindow([IntPtr]54135476) | Out-Null
[WinDlg]::SetWindowPos([IntPtr]54135476, [IntPtr](-1), 0, 0, 0, 0, 0x0003) | Out-Null
Start-Sleep -Milliseconds 400
$sh = New-Object -ComObject WScript.Shell
$sh.SendKeys('{ESC}')
Start-Sleep -Milliseconds 400
Write-Output "escape sent to Leave-site dialog"
