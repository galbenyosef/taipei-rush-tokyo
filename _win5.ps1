Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WinAll {
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int cx, int cy, uint flags);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
  [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
}
"@
$ids = @(8717714, 9046548)
foreach ($h in $ids) {
  $p = [IntPtr]$h
  $iconic = [WinAll]::IsIconic($p)
  Write-Output ("hwnd={0} iconic={1}" -f $h, $iconic)
  [WinAll]::ShowWindow($p, 9) | Out-Null
  [WinAll]::SetWindowPos($p, [IntPtr](-1), 0, 0, 0, 0, 0x0003) | Out-Null
}
# foreground the game window itself
[WinAll]::SetForegroundWindow([IntPtr]8717714) | Out-Null
Write-Output "both game windows restored+topmost"
