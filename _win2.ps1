Add-Type @"
using System;
using System.Text;
using System.Runtime.InteropServices;
public class WinEnum {
  public delegate bool EnumProc(IntPtr hWnd, IntPtr lParam);
  [DllImport("user32.dll")] public static extern bool EnumWindows(EnumProc cb, IntPtr lParam);
  [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
  [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetWindowTextW(IntPtr hWnd, StringBuilder sb, int max);
  [DllImport("user32.dll", CharSet=CharSet.Unicode)] public static extern int GetClassNameW(IntPtr hWnd, StringBuilder sb, int max);
  [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int cx, int cy, uint flags);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int cmd);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
}
"@
$chromePids = @(Get-Process chrome -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Id)
$global:rows = New-Object System.Collections.ArrayList
$cb = [WinEnum+EnumProc]{
  param($h, $l)
  $pid2 = 0
  [WinEnum]::GetWindowThreadProcessId($h, [ref]$pid2) | Out-Null
  if ($chromePids -contains $pid2) {
    $cls = New-Object System.Text.StringBuilder 256
    [WinEnum]::GetClassNameW($h, $cls, 256) | Out-Null
    if ($cls.ToString() -eq "Chrome_WidgetWin_1") {
      $sb = New-Object System.Text.StringBuilder 512
      [WinEnum]::GetWindowTextW($h, $sb, 512) | Out-Null
      $vis = [WinEnum]::IsWindowVisible($h)
      [void]$global:rows.Add(("hwnd={0} pid={1} vis={2} title={3}" -f $h, $pid2, $vis, $sb.ToString()))
      if ($script:mode -eq "top" -and $sb.ToString() -ne "" -and $vis) {
        [WinEnum]::ShowWindow($h, 9) | Out-Null
        [WinEnum]::SetWindowPos($h, [IntPtr](-1), 0, 0, 0, 0, 0x0003) | Out-Null
        [WinEnum]::SetForegroundWindow($h) | Out-Null
        [void]$global:rows.Add(("  -> topmost applied hwnd={0}" -f $h))
      }
      if ($script:mode -eq "untop") {
        [WinEnum]::SetWindowPos($h, [IntPtr](-2), 0, 0, 0, 0, 0x0003) | Out-Null
      }
    }
  }
  return $true
}
[WinEnum]::EnumWindows($cb, [IntPtr]::Zero) | Out-Null
$global:rows | ForEach-Object { Write-Output $_ }
