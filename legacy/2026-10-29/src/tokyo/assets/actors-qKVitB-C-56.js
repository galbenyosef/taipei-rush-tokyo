// tokyo/assets/actors-qKVitB-C 56 — math
// Lines 24654-24664 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function rg(e, t, n, r, i, a, o) {
  let s = e - n,
    c = t - r,
    l = Math.cos(i),
    u = Math.sin(i),
    d = s * l + c * u,
    f = -s * u + c * l,
    p = Math.max(Math.abs(d) - a, 0),
    m = Math.max(Math.abs(f) - o, 0);
  return Math.hypot(p, m);
}
