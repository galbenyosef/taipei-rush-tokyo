// tokyo__assets__worker-DuEI-Qg4 03 — math
// Lines 696-734 of readable/tokyo__assets__worker-DuEI-Qg4.pretty.js (statement-aligned).
function ge(e, t, n, i, a = 1800, o = 0.25) {
  let s = Math.round(n * e),
    c = new Float32Array(s),
    l = new Float32Array(s);
  for (let n of t)
    for (let t = 0; t < 4; t++)
      T(
        c,
        l,
        d(s, e, n * r(i.bi() * 12), `saw`, i.next()),
        t % 2 ? 0.6 : -0.6,
        0.18,
      );
  (h(c, e, a, 0.6), h(l, e, a, 0.6));
  let u = [0, 0, o, 1, n - 0.4, 0.8, n, 0];
  return (b(c, e, u), b(l, e, u), { sr: e, ch: [c, l] });
}
function _e(e, t, n, r) {
  let i = f(Math.round(n * e), e, t, [
    [1, 1, 0.9],
    [1.5, 0.5, 0.6],
    [1.99, 0.3, 0.4],
    [2.44, 0.15, 0.3],
  ]);
  return (S(i, P(e, n, r, `lp`, 600, 0.7, 0.001, 0.03), 0.5), i);
}
function ve(e, t, n) {
  let r = Math.round(t * e),
    i = ue(r, e, 1.9, n);
  return (
    S(i, s(r, n), 0.6),
    g(i, e, 4e3, 0.7),
    h(i, e, 12e3, 0.7),
    x(i, e, 0.002, t * 0.35)
  );
}
function ye(e, t) {
  return [a(t, e), a(t, e)];
}
