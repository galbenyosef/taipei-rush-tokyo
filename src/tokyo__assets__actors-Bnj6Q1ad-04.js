// tokyo__assets__actors-Bnj6Q1ad 04 — math
// Lines 814-823 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Mi(e, t, n, r) {
  let i, a, o;
  e === `batFore`
    ? ((i = W(t, Ln, ii)), (a = W(t, Ln, ai)), (o = 1))
    : e === `batBack`
      ? ((i = W(t, Rn, oi)), (a = W(t, Rn, si)), (o = 1))
      : ((i = B(2.55, 2.1, n)), (a = B(0.9, 1.15, n)), (o = n));
  let s = Math.cos(a);
  return (r.set(Math.sin(i) * s, Math.sin(a), -Math.cos(i) * s), o);
}
