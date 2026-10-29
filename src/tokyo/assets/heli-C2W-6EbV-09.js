// tokyo/assets/heli-C2W-6EbV 09 — math
// Lines 3355-3371 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
var $ = { y: 0, water: !1 },
  Ct = new Set([`tree`, `pole`, `lamp`, `sign`]);
function wt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function Tt(e, t, n, r, i, a, o) {
  let s = e - n,
    c = t - r,
    l = Math.cos(i),
    u = Math.sin(i),
    d = s * l + c * u,
    f = -s * u + c * l;
  return Math.hypot(Math.max(Math.abs(d) - a, 0), Math.max(Math.abs(f) - o, 0));
}
