// tokyo/assets/region-tokyo-55J_WESF 222 — mat
// Lines 86111-86399 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ibe(e, t, n, r, i, a, o) {
  let s = o.curve ?? 1.4,
    c = o.sori ?? 0.5,
    l = o.thick ?? 0.35,
    u = o.eave ?? 1.8,
    d = o.cell ?? e.white,
    f = e.coarse ? 2 : 5,
    p = (e) => r + i * e ** +s,
    m = (e, t) => c * Math.min(1, e) ** 3 * (1 - t) ** 1.5,
    h = (t, n) => {
      for (let r = 0; r < f; r++)
        for (let i = 0; i < n; i++) {
          let o = (a * r) / f,
            s = (a * (r + 1)) / f,
            c = t(i / n, o),
            l = t((i + 1) / n, o),
            u = t((i + 1) / n, s),
            p = t(i / n, s);
          e.quad(
            l[0],
            l[1],
            l[2],
            c[0],
            c[1],
            c[2],
            p[0],
            p[1],
            p[2],
            u[0],
            u[1],
            u[2],
            d,
          );
        }
    };
  e.push()
    .col(o.color ?? zN)
    .mat(0.85, 0.05, 0.02, 1);
  for (let r of [-1, 1])
    (h(
      (e, i) => {
        let a = t - n * i,
          o = (e * 2 - 1) * a;
        return [o * -r, p(i) + m(Math.abs(o) / t, i), r * n * (1 - i)];
      },
      Math.max(1, Math.ceil((2 * t) / (e.coarse ? 4 : 2))),
    ),
      h(
        (e, i) => {
          let a = (e * 2 - 1) * n * (1 - i);
          return [r * (t - n * i), p(i) + m(Math.abs(a) / n, i), a * r];
        },
        Math.max(1, Math.ceil((2 * n) / (e.coarse ? 4 : 2))),
      ));
  e.pop();
  let g = (e) => r + c * Math.abs(e * 2 - 1) ** 3,
    _ = e.coarse ? 2 : 8,
    v = [
      [t, -n, -t, -n, 0, 1],
      [-t, -n, -t, n, 1, 0],
      [-t, n, t, n, 0, -1],
      [t, n, t, -n, -1, 0],
    ];
  for (let [t, n, r, i, a, s] of v) {
    e.push()
      .col(o.band ?? IN)
      .mat(0.7, 0, 0.08, 1);
    for (let a = 0; a < _; a++) {
      let o = a / _,
        s = (a + 1) / _,
        c = t + (r - t) * o,
        u = n + (i - n) * o,
        d = t + (r - t) * s,
        f = n + (i - n) * s;
      e.quad(c, g(o) - l, u, d, g(s) - l, f, d, g(s), f, c, g(o), u);
    }
    if ((e.pop(), !e.coarse)) {
      e.push()
        .col(o.soffit ?? FN)
        .mat(0.85, 0, 0.12, 1);
      for (let o = 0; o < _; o++) {
        let c = o / _,
          d = (o + 1) / _,
          f = t + (r - t) * c,
          p = n + (i - n) * c,
          m = t + (r - t) * d,
          h = n + (i - n) * d,
          v = g(c) - l,
          y = g(d) - l,
          b = u * 0.3;
        e.quad(
          m,
          y,
          h,
          f,
          v,
          p,
          f + a * u,
          v + b,
          p + s * u,
          m + a * u,
          y + b,
          h + s * u,
        );
      }
      e.pop();
    }
  }
}
function abe(e, t, n, r = 1) {
  (e.push().col(11117721).mat(0.9, 0, 0.04, 1),
    e.box(t - 0.5 * r, 0.04, n - 0.5 * r, t + 0.5 * r, 0.35 * r, n + 0.5 * r),
    e.cylY(t, n, 0.35 * r, 1.35 * r, 0.17 * r, 6, 0.15 * r, !1),
    e.box(
      t - 0.42 * r,
      1.35 * r,
      n - 0.42 * r,
      t + 0.42 * r,
      1.55 * r,
      n + 0.42 * r,
    ),
    e.col(15983288).mat(0.6, 0, 0.6, 1),
    e.box(
      t - 0.28 * r,
      1.55 * r,
      n - 0.28 * r,
      t + 0.28 * r,
      2.05 * r,
      n + 0.28 * r,
    ),
    e.col(11117721).mat(0.9, 0, 0.04, 1),
    e.lathe(
      t,
      n,
      [0.62 * r, 2.05 * r, 0.6 * r, 2.15 * r, 0.1 * r, 2.55 * r],
      4,
      Math.PI / 4,
    ),
    e.lathe(t, n, [0.1 * r, 2.55 * r, 0.13 * r, 2.7 * r, 0.01, 2.85 * r], 5),
    e.pop(),
    e.pole(t, n, 0.5 * r, 0, 2.6 * r));
}
function $N(e, t, n) {
  (e.push().col(RN).mat(0.85, 0, 0.04, 1),
    e.box(t - 0.9, 0.04, n - 0.9, t + 0.9, 0.9, n + 0.9),
    e.col(4938316).mat(0.45, 0.7, 0, 0),
    e.cylY(t, n, 0.9, 3, 0.22, 8, 0.18, !1),
    e.lathe(t, n, [0.5, 3, 0.62, 3.25, 0.4, 3.35], 6),
    e.col(16179108).mat(0.5, 0.2, 0.7, 1),
    e.lathe(t, n, [0.4, 3.35, 0.46, 3.6, 0.46, 4.1, 0.38, 4.25], 6),
    e.col(4938316).mat(0.45, 0.7, 0, 0),
    e.lathe(t, n, [0.9, 4.25, 0.8, 4.4, 0.15, 4.95, 0.12, 5.2, 0.02, 5.45], 6),
    e.pop(),
    e.pole(t, n, 0.9, 0, 4.4));
}
function* obe(e, t, n) {
  let r = e.sub(0, 0, BN, 0),
    i = YN(n),
    a = [-9.75, -5.85, -1.95, 1.95, 5.85, 9.75],
    o = [-4.5, 0, 4.5],
    s = 0.6;
  (e.col(RN).mat(0.88, 0, 0.05, 1),
    e.box(-11.2, 0, -6, 11.2, s, 6, n.granite, 2, s));
  for (let t of [-1, 1])
    e.box(
      -6.2,
      0,
      t < 0 ? -6.9 : 6,
      6.2,
      0.3,
      t < 0 ? -6 : 6.9,
      n.granite,
      2,
      0.3,
    );
  e.floor(-11.2, -6.9, 11.2, 6.9, s);
  for (let t of a)
    for (let n of o)
      (XN(e, 0.16),
        e.cylY(t, n, s, 7, 0.38, 10, 0.35, !1),
        e.coarse ||
          e
            .col(2827810)
            .mat(0.8, 0, 0, 0)
            .cylY(t, n, s, 0.95, 0.5, 8, 0.48, !1),
        e.pole(t, n, 0.42, 0, 7));
  for (let t of [-1, 1]) {
    let r = t > 0 ? 5.85 : -9.75,
      i = t > 0 ? 9.75 : -5.85;
    (XN(e, 0.18),
      e.box(r, s, -4.35, i, 7, 4.35),
      e.col(16777215).mat(0.7, 0, 0.26, G),
      e.panel(i - 0.45, -4.38, r + 0.45, -4.38, 2.6, 5.4, n.shoji),
      e.panel(r + 0.45, 4.38, i - 0.45, 4.38, 2.6, 5.4, n.shoji),
      e.col(15855076).mat(0.85, 0, 0.1, 1),
      e.panel(i - 0.3, -4.38, r + 0.3, -4.38, 5.7, 6.6, n.plaster),
      e.panel(r + 0.3, 4.38, i - 0.3, 4.38, 5.7, 6.6, n.plaster),
      e.solid(r, -4.5, i, 4.5, 0, 7, `temple`));
  }
  if (!e.coarse)
    for (let t of [-3.9, 0, 3.9]) {
      (e
        .col(3811872)
        .mat(0.8, 0, 0, 0)
        .box(t - 1.9, s, -0.12, t + 1.9, 0.85, 0.12),
        XN(e, 0.12, IN));
      for (let n of [-1, 1])
        e.box(t + n * 1.75 - 0.08, 0.85, 0.2, t + n * 1.75 + 0.08, 5.6, 1.85);
    }
  (yield,
    XN(e, 0.12),
    e.box(-10.1, 6.4, -4.85, 10.1, 7.3, 4.85, e.white, 0, 0, null, !0),
    ZN(e, n, -10.1, -4.85, 10.1, 4.85, 7.3, 8.1, 0.9),
    ibe(e, 13.3, 8.1, 8.1, 5.6, 0.5, {
      ...i,
      sori: 0.55,
      eave: 2.2,
      thick: 0.38,
    }),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    e.flat(-12.9, -7.7, 12.9, 7.7, 8.12, n.rafters, 3.6, 1.2, !1));
  let c = 8.1 + 5.6 * 0.5 ** 1.4;
  (XN(e, 0.1),
    e.box(-9.25, c - 0.5, -4.05, 9.25, 10.8, 4.05),
    ZN(e, n, -9.25, -4.05, 9.25, 4.05, 10.15, 10.75, 1.2, 2),
    XN(e, 0.08, IN),
    e.box(-10.9, 10.75, -5.5, 10.9, 11.05, 5.5, e.white, 0, 0, null, !0),
    QN(
      e,
      [-10.75, -5.35, 10.75, -5.35, 10.75, 5.35, -10.75, 5.35, -10.75, -5.35],
      11.05,
    ),
    yield);
  let l = [-9, -5.4, -1.8, 1.8, 5.4, 9],
    u = 3.8;
  (XN(e, 0.12), e.box(-9, 11.05, -3.8, 9, 15, u));
  for (let t of l)
    for (let n of [-3.8 - 0.05, 3.8499999999999996])
      e.cylY(t, n, 11.05, 15, 0.3, 8, 0.28, !1);
  for (let t of [-1, 1]) {
    let r = t * 3.8299999999999996,
      i = (n, i, a, o, s) =>
        t < 0 ? e.panel(i, r, n, r, a, o, s) : e.panel(n, r, i, r, a, o, s);
    (e.col(16777215).mat(0.5, 0.3, 0.3, G),
      i(-1.5, 1.5, 11.3, 14, n.door),
      e.col(16777215).mat(0.7, 0, 0.28, G));
    for (let [e, t] of [
      [-8.6, -5.8],
      [-5, -2.2],
      [2.2, 5],
      [5.8, 8.6],
    ])
      i(e + 0.3, t - 0.3, 12, 14, n.shoji);
  }
  e.col(16777215).mat(0.7, 0, 0.28, G);
  for (let t of [-1, 1]) {
    let r = t * 9.03;
    t < 0
      ? e.panel(r, -2.4, r, 2.4, 12, 14, n.shoji)
      : e.panel(r, 2.4, r, -2.4, 12, 14, n.shoji);
  }
  if (
    (e.col(16777215).mat(0.6, 0, 0.25, G),
    rbe(e, n.frieze, -9, -3.8, 9, u, 14.3, 14.9, 2.4, 0.06),
    ZN(e, n, -9, -3.8, 9, u, 15, 16.5, 1.5),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    e.flat(-11.6, -6.4, 11.6, 6.4, 16.48, n.rafters, 3.6, 1.2, !1),
    e.mat(0.85, 0.05, 0.02, 1),
    oC(e, 0, 0, 16.6, 13.6, 8.6, {
      ...i,
      rise: 4.3,
      curve: 1.35,
      sori: 0.85,
      thick: 0.45,
      eave: 2.6,
      ridgeH: 1,
      tg: 0.46,
      gableColor: FN,
      rows: 7,
    }),
    !e.coarse)
  ) {
    e.col(LN).mat(0.3, 0.85, 0.1, 1);
    let t = 10.4782;
    for (let n of [-1, 1])
      e.box(n * t - 0.08, 18.4, -0.6, n * t + 0.08, 19.6, 0.6);
  }
  (e.leave(r), yield);
}
