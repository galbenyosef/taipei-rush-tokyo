// tokyo/assets/actors-qKVitB-C 04 — math
// Lines 829-838 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Wi(e, t, n, r) {
  let i, a, o;
  e === `batFore`
    ? ((i = W(t, Yn, gi)), (a = W(t, Yn, _i)), (o = 1))
    : e === `batBack`
      ? ((i = W(t, Xn, vi)), (a = W(t, Xn, yi)), (o = 1))
      : ((i = B(2.55, 2.1, n)), (a = B(0.9, 1.15, n)), (o = n));
  let s = Math.cos(a);
  return (r.set(Math.sin(i) * s, Math.sin(a), -Math.cos(i) * s), o);
}
