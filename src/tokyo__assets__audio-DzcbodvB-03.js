// tokyo__assets__audio-DzcbodvB 03 — math
// Lines 701-739 of readable/tokyo__assets__audio-DzcbodvB.pretty.js (statement-aligned).
function Se(e, t, n, r, i = 1800, a = 0.25) {
  let o = Math.round(n * e),
    s = new Float32Array(o),
    c = new Float32Array(o);
  for (let n of t)
    for (let t = 0; t < 4; t++)
      j(
        s,
        c,
        _(o, e, n * l(r.bi() * 12), `saw`, r.next()),
        t % 2 ? 0.6 : -0.6,
        0.18,
      );
  (x(s, e, i, 0.6), x(c, e, i, 0.6));
  let u = [0, 0, a, 1, n - 0.4, 0.8, n, 0];
  return (E(s, e, u), E(c, e, u), { sr: e, ch: [s, c] });
}
function Ce(e, t, n, r) {
  let i = v(Math.round(n * e), e, t, [
    [1, 1, 0.9],
    [1.5, 0.5, 0.6],
    [1.99, 0.3, 0.4],
    [2.44, 0.15, 0.3],
  ]);
  return (O(i, I(e, n, r, `lp`, 600, 0.7, 0.001, 0.03), 0.5), i);
}
function we(e, t, n) {
  let r = Math.round(t * e),
    i = me(r, e, 1.9, n);
  return (
    O(i, p(r, n), 0.6),
    S(i, e, 4e3, 0.7),
    x(i, e, 12e3, 0.7),
    D(i, e, 0.002, t * 0.35)
  );
}
function Te(e, t) {
  return [d(t, e), d(t, e)];
}
