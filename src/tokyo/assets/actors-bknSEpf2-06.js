// tokyo/assets/actors-bknSEpf2 06 — math
// Lines 1370-1379 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function va(e, t, n, r) {
  let i, a, o;
  e === `batFore`
    ? ((i = K(t, Cr, Wi)), (a = K(t, Cr, Gi)), (o = 1))
    : e === `batBack`
      ? ((i = K(t, wr, Ki)), (a = K(t, wr, qi)), (o = 1))
      : ((i = U(2.55, 2.1, n)), (a = U(0.9, 1.15, n)), (o = n));
  let s = Math.cos(a);
  return (r.set(Math.sin(i) * s, Math.sin(a), -Math.cos(i) * s), o);
}
