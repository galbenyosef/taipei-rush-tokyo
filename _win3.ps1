Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WinFix {
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int cx, int cy, uint flags);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
}
"@
# restore the user window (was made topmost by mistake), then raise the game window
[WinFix]::SetWindowPos([IntPtr]9046548, [IntPtr](-2), 0, 0, 0, 0, 0x0003) | Out-Null   # not-topmost
[WinFix]::ShowWindow([IntPtr]8717714, 9) | Out-Null                                     # SW_RESTORE
[WinFix]::SetWindowPos([IntPtr]8717714, [IntPtr](-1), 0, 0, 0, 0, 0x0003) | Out-Null    # topmost
[WinFix]::SetForegroundWindow([IntPtr]8717714) | Out-Null
Write-Output "game window raised+topmost; user window not-topmost restored"
