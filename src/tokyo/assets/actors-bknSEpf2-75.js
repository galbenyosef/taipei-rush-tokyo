// tokyo/assets/actors-bknSEpf2 75 — math
// Lines 31598-31608 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function lb(e, t, n, r, i, a, o) {
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
