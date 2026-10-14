// tokyo/assets/worker-DuEI-Qg4 08 — math
// Lines 3705-3905 of readable/tokyo/assets/worker-DuEI-Qg4.pretty.js (statement-aligned).
function Le(e, i, a, o) {
  let c = n(i),
    l = V(o, a),
    u = d(
      l,
      a,
      (e) =>
        c *
        r(-140 * Math.exp(-e / 0.06)) *
        (1 +
          (e > 0.2
            ? 0.019 * Math.min(1, (e - 0.2) / 0.3) * Math.sin(t * 5.3 * e)
            : 0)),
      `saw`,
      e.next(),
    );
  (v(u, a, 520, 2, 6),
    v(u, a, 1600, 2, 4),
    v(u, a, 3200, 3, 5),
    h(u, a, 6500),
    g(u, a, 180));
  let f = s(l, e);
  g(f, a, 2500);
  for (let e = 0; e < l; e++) f[e] *= 0.5 + 0.5 * Math.sin((t * 11 * e) / a);
  return (
    S(u, f, 0.035),
    b(u, a, [0, 0, 0.08, 1, o - 0.15, 0.8, o, 0.5]),
    B(C(u, 0.85), a)
  );
}
function Re(e, i, a, o) {
  let s = n(i),
    c = O(
      V(o, a),
      a,
      (e) =>
        s *
        r(-45 * Math.exp(-e / 0.05)) *
        (1 +
          (e > 0.25
            ? 0.014 * Math.min(1, (e - 0.25) / 0.3) * Math.sin(t * 5.2 * e)
            : 0)),
      k([
        [0, `a`],
        [o * 0.7, `a`],
        [o, `o`],
      ]),
      e,
      { breath: 0.06, scale: i > 64 ? 1.15 : 1.05, jitter: 0.004 },
    );
  return (
    g(c, a, 150),
    b(c, a, [0, 0, 0.05, 1, o - 0.2, 0.85, o, 0.5]),
    B(C(c, 0.8), a)
  );
}
function ze(e, t) {
  (g(e, t, 90),
    v(e, t, 1700, 1.2, 5),
    v(e, t, 400, 1, -3),
    h(e, t, 4800, 0.8),
    h(e, t, 6e3, 0.7));
}
function Be(e, t, r, i) {
  let a = V(i, r),
    o = new Float32Array(a);
  return (
    [0, 7, 12].forEach((i, s) =>
      S(
        o,
        ce(a, r, n(t + i), e, { decay: 0.999, bright: 0.7, pick: 0.13 }),
        1,
        s * 0.006 * r,
      ),
    ),
    g(o, r, 80),
    C(o, 1),
    w(o, 9),
    ze(o, r),
    b(o, r, [0, 1, i - 0.3, 0.8, i, 0]),
    B(C(o, 0.85), r)
  );
}
function Ve(e, t, r, i) {
  let a = V(i, r),
    o = new Float32Array(a);
  return (
    [0, 7].forEach((i, s) =>
      S(
        o,
        ce(a, r, n(t + i), e, { decay: 0.99, bright: 0.5, pick: 0.13 }),
        1,
        s * 0.004 * r,
      ),
    ),
    x(o, r, 0.001, 0.09),
    C(o, 1),
    w(o, 7),
    ze(o, r),
    h(o, r, 2600),
    B(C(o, 0.85), r)
  );
}
function He(e, r, i, a) {
  let o = n(r),
    s = V(a, i),
    c = ce(s, i, o, e, { decay: 0.9995, bright: 0.7, pick: 0.15 }),
    l = d(
      s,
      i,
      (e) => o * (1 + (e > 0.35 ? 0.012 * Math.sin(t * 5.5 * e) : 0)),
      `saw`,
    );
  return (
    b(l, i, [0, 0, 0.3, 0.5, a, 0.6]),
    S(c, l, 0.4),
    C(c, 1),
    w(c, 6),
    ze(c, i),
    b(c, i, [0, 1, a - 0.2, 0.85, a, 0.6]),
    B(C(c, 0.85), i)
  );
}
function Ue(e, r, i, a) {
  let o = n(r),
    s = V(a, i),
    c = new Float32Array(s);
  for (let [t, n] of [
    [0.5, 0.55],
    [1, 1],
    [1.5, 0.45],
    [2, 0.6],
    [3, 0.3],
    [4, 0.25],
  ])
    o * t < i * 0.45 && S(c, d(s, i, o * t, `sine`, e.next()), n);
  for (let e = 0; e < s; e++) c[e] *= 1 + 0.12 * Math.sin((t * 6.2 * e) / i);
  return (
    S(c, P(i, 0.02, e, `hp`, 2e3, 0.7, 2e-4, 0.002), 0.3),
    b(c, i, [0, 0, 0.006, 1, a, 0.9]),
    B(C(c, 0.8), i)
  );
}
function We(e, t, r, i) {
  let a = n(t),
    o = V(i, r),
    s = ce(o, r, a, e, { decay: 0.997, bright: 0.9, pick: 0.08 });
  return (
    S(s, ce(o, r, a * 2, e, { decay: 0.996, bright: 0.9, pick: 0.1 }), 0.35),
    g(s, r, 120),
    x(s, r, 5e-4, 1),
    B(C(s, 0.85), r)
  );
}
function Ge(e, t, r, i) {
  let a = n(t),
    o = f(V(i, r), r, a, [
      [1, 1, 1.3],
      [3, 0.07, 0.35],
      [6.27, 0.14, 0.12],
    ]);
  return (
    S(o, P(r, 0.01, e, `hp`, 4e3, 0.7, 1e-4, 8e-4), 0.2),
    B(C(o, 0.8), r)
  );
}
function Ke(e, t, r, i) {
  let a = n(t),
    o = f(V(i, r), r, a, [
      [1, 1, 0.42],
      [3.93, 0.25, 0.09],
      [9.2, 0.05, 0.03],
    ]);
  return (
    S(o, P(r, 0.01, e, `lp`, 3e3, 0.7, 2e-4, 0.002), 0.15),
    B(C(o, 0.85), r)
  );
}
function qe(e, r, i, a) {
  let o = n(r),
    c = V(a, i),
    l = (e) => o * (1 + (e > 0.25 ? 0.008 * Math.sin(t * 5 * e) : 0)),
    u = d(c, i, l, `sine`);
  (S(
    u,
    d(c, i, (e) => l(e) * 2, `sine`),
    0.2,
  ),
    S(
      u,
      d(c, i, (e) => l(e) * 3, `sine`),
      0.06,
    ));
  let f = s(c, e);
  return (
    _(f, i, o * 2, 3),
    S(u, f, 0.25),
    b(u, i, [0, 0, 0.06, 1, a - 0.2, 0.85, a, 0.5]),
    B(C(u, 0.8), i)
  );
}
