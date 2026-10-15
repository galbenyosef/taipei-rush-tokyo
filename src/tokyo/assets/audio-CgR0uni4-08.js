// tokyo/assets/audio-CgR0uni4 08 — math
// Lines 3762-3962 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function Ue(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = _(
      a,
      n,
      (e) =>
        i *
        l(-140 * Math.exp(-e / 0.06)) *
        (1 +
          (e > 0.2
            ? 0.019 * Math.min(1, (e - 0.2) / 0.3) * Math.sin(s * 5.3 * e)
            : 0)),
      `saw`,
      e.next(),
    );
  (w(o, n, 520, 2, 6),
    w(o, n, 1600, 2, 4),
    w(o, n, 3200, 3, 5),
    x(o, n, 6500),
    S(o, n, 180));
  let u = p(a, e);
  S(u, n, 2500);
  for (let e = 0; e < a; e++) u[e] *= 0.5 + 0.5 * Math.sin((s * 11 * e) / n);
  return (
    O(o, u, 0.035),
    E(o, n, [0, 0, 0.08, 1, r - 0.15, 0.8, r, 0.5]),
    B(k(o, 0.85), n)
  );
}
function We(e, t, n, r) {
  let i = c(t),
    a = fe(
      V(r, n),
      n,
      (e) =>
        i *
        l(-45 * Math.exp(-e / 0.05)) *
        (1 +
          (e > 0.25
            ? 0.014 * Math.min(1, (e - 0.25) / 0.3) * Math.sin(s * 5.2 * e)
            : 0)),
      pe([
        [0, `a`],
        [r * 0.7, `a`],
        [r, `o`],
      ]),
      e,
      { breath: 0.06, scale: t > 64 ? 1.15 : 1.05, jitter: 0.004 },
    );
  return (
    S(a, n, 150),
    E(a, n, [0, 0, 0.05, 1, r - 0.2, 0.85, r, 0.5]),
    B(k(a, 0.8), n)
  );
}
function Ge(e, t) {
  (S(e, t, 90),
    w(e, t, 1700, 1.2, 5),
    w(e, t, 400, 1, -3),
    x(e, t, 4800, 0.8),
    x(e, t, 6e3, 0.7));
}
function Ke(e, t, n, r) {
  let i = V(r, n),
    a = new Float32Array(i);
  return (
    [0, 7, 12].forEach((r, o) =>
      O(
        a,
        ue(i, n, c(t + r), e, { decay: 0.999, bright: 0.7, pick: 0.13 }),
        1,
        o * 0.006 * n,
      ),
    ),
    S(a, n, 80),
    k(a, 1),
    A(a, 9),
    Ge(a, n),
    E(a, n, [0, 1, r - 0.3, 0.8, r, 0]),
    B(k(a, 0.85), n)
  );
}
function qe(e, t, n, r) {
  let i = V(r, n),
    a = new Float32Array(i);
  return (
    [0, 7].forEach((r, o) =>
      O(
        a,
        ue(i, n, c(t + r), e, { decay: 0.99, bright: 0.5, pick: 0.13 }),
        1,
        o * 0.004 * n,
      ),
    ),
    D(a, n, 0.001, 0.09),
    k(a, 1),
    A(a, 7),
    Ge(a, n),
    x(a, n, 2600),
    B(k(a, 0.85), n)
  );
}
function Je(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = ue(a, n, i, e, { decay: 0.9995, bright: 0.7, pick: 0.15 }),
    l = _(
      a,
      n,
      (e) => i * (1 + (e > 0.35 ? 0.012 * Math.sin(s * 5.5 * e) : 0)),
      `saw`,
    );
  return (
    E(l, n, [0, 0, 0.3, 0.5, r, 0.6]),
    O(o, l, 0.4),
    k(o, 1),
    A(o, 6),
    Ge(o, n),
    E(o, n, [0, 1, r - 0.2, 0.85, r, 0.6]),
    B(k(o, 0.85), n)
  );
}
function Ye(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = new Float32Array(a);
  for (let [t, r] of [
    [0.5, 0.55],
    [1, 1],
    [1.5, 0.45],
    [2, 0.6],
    [3, 0.3],
    [4, 0.25],
  ])
    i * t < n * 0.45 && O(o, _(a, n, i * t, `sine`, e.next()), r);
  for (let e = 0; e < a; e++) o[e] *= 1 + 0.12 * Math.sin((s * 6.2 * e) / n);
  return (
    O(o, I(n, 0.02, e, `hp`, 2e3, 0.7, 2e-4, 0.002), 0.3),
    E(o, n, [0, 0, 0.006, 1, r, 0.9]),
    B(k(o, 0.8), n)
  );
}
function Xe(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = ue(a, n, i, e, { decay: 0.997, bright: 0.9, pick: 0.08 });
  return (
    O(o, ue(a, n, i * 2, e, { decay: 0.996, bright: 0.9, pick: 0.1 }), 0.35),
    S(o, n, 120),
    D(o, n, 5e-4, 1),
    B(k(o, 0.85), n)
  );
}
function Ze(e, t, n, r) {
  let i = c(t),
    a = v(V(r, n), n, i, [
      [1, 1, 1.3],
      [3, 0.07, 0.35],
      [6.27, 0.14, 0.12],
    ]);
  return (
    O(a, I(n, 0.01, e, `hp`, 4e3, 0.7, 1e-4, 8e-4), 0.2),
    B(k(a, 0.8), n)
  );
}
function Qe(e, t, n, r) {
  let i = c(t),
    a = v(V(r, n), n, i, [
      [1, 1, 0.42],
      [3.93, 0.25, 0.09],
      [9.2, 0.05, 0.03],
    ]);
  return (
    O(a, I(n, 0.01, e, `lp`, 3e3, 0.7, 2e-4, 0.002), 0.15),
    B(k(a, 0.85), n)
  );
}
function $e(e, t, n, r) {
  let i = c(t),
    a = V(r, n),
    o = (e) => i * (1 + (e > 0.25 ? 0.008 * Math.sin(s * 5 * e) : 0)),
    l = _(a, n, o, `sine`);
  (O(
    l,
    _(a, n, (e) => o(e) * 2, `sine`),
    0.2,
  ),
    O(
      l,
      _(a, n, (e) => o(e) * 3, `sine`),
      0.06,
    ));
  let u = p(a, e);
  return (
    C(u, n, i * 2, 3),
    O(l, u, 0.25),
    E(l, n, [0, 0, 0.06, 1, r - 0.2, 0.85, r, 0.5]),
    B(k(l, 0.8), n)
  );
}
