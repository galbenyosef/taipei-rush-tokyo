// tokyo/assets/region-tokyo-55J_WESF 300 — col
// Lines 109319-109640 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function $W(e, t, n, r, i, a, o, s = 0.12) {
  GB(
    e,
    (t + r) / 2 + o[0] * 0.1,
    (n + i) / 2 + o[1] * 0.1,
    o,
    Math.hypot(r - t, i - n),
    s,
    a - s / 2,
    a + s / 2,
  );
}
function eG(e, t, n, r, i, a, o = 0.14) {
  GB(e, t + a[0] * 0.1, n + a[1] * 0.1, a, o, o, r, i);
}
function bEe(e, t, n, r, i, a, o, s, c, l) {
  let u = VB(i),
    d = YB(s),
    f = e.coarse ? Math.max(2, Math.ceil(c / 3)) : c,
    p = e.coarse ? Math.max(2, Math.ceil(l / 3)) : l,
    m = [3808456, ZW, YW, 16734858, XW, 10155263],
    h = d.range(0, 6),
    g = (e, t, n) => {
      let r = (r) =>
        Math.round(((e >> r) & 255) * (1 - n) + ((t >> r) & 255) * n);
      return (r(16) << 16) | (r(8) << 8) | r(0);
    };
  (e.push().col(1315352).mat(0.6, 0.3, 0, 0),
    GB(
      e,
      t + i[0] * 0.15,
      r + i[1] * 0.15,
      i,
      a + 0.5,
      0.3,
      n - 0.25,
      n + o + 0.25,
    ));
  let _ = t + i[0] * 0.34,
    v = r + i[1] * 0.34;
  for (let t = 0; t < p; t++)
    for (let r = 0; r < f; r++) {
      let i = r / f - 0.5,
        s = (r + 1) / f - 0.5,
        c = r / f,
        l = t / p,
        y = Math.exp(-(((l - 0.5 - 0.3 * Math.sin(c * 4.2 + h)) * 4) ** 2)),
        b = Math.min(0.999, Math.max(0, l * 0.7 + c * 0.3)) * (m.length - 2),
        x = Math.floor(b),
        S = g(g(m[x], m[x + 1], b - x), m[m.length - 1], y * 0.45);
      (e.col(S, 0.9 + d.range(0, 0.1)).mat(0.4, 0, 0.38, 1),
        e.panel(
          _ + u[0] * a * i,
          v + u[1] * a * i,
          _ + u[0] * a * s,
          v + u[1] * a * s,
          n + (o * t) / p,
          n + (o * (t + 1)) / p,
        ));
    }
  e.pop();
}
function tG(e, t, n, r, i, a, o, s, c, l = 0.16) {
  let u = Math.hypot(r - t, i - n),
    d = (r - t) / u,
    f = (i - n) / u;
  for (let u = 0; u < s; u++) {
    let p = (u + 0.5) / s,
      m = t + (r - t) * p + o[0] * c,
      h = n + (i - n) * p + o[1] * c;
    e.panel(
      m - (d * l) / 2,
      h - (f * l) / 2,
      m + (d * l) / 2,
      h + (f * l) / 2,
      a - l / 2,
      a + l / 2,
    );
  }
}
function* xEe(e, t) {
  let n = t.c(`glass`),
    r = t.c(`doors`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  e.col(2367530).mat(0.45, 0.2, 0, 0);
  let [o, s, c, l] = yEe(Y.x1, Y.z0, Y.z1);
  (e.panel(o, s, Y.x1, qW.z1, -0.3, Y.gf),
    e.panel(Y.x1, qW.z0, c, l, -0.3, Y.gf));
  let u = Y.x1 - qW.depth;
  (e.panel(Y.x1, qW.z1, u, qW.z1, -0.3, Y.gf),
    e.panel(u, qW.z0, Y.x1, qW.z0, -0.3, Y.gf),
    e.col(16773366).mat(0.4, 0, 0.6, 1),
    e.flat(u, qW.z0, Y.x1, qW.z1, Y.gf - 0.02, e.white, 0, 0, !1),
    e.col(16770802).mat(0.3, 0.2, 0.45, G),
    e.wall(u, qW.z1, u, qW.z0, -0.3, Y.gf - 0.02, r, 2.4 * a, Y.gf + 0.3),
    e.col(3814464).mat(0.3, 0.3, 0, 0),
    e.flat(u, qW.z0, Y.x1, qW.z1, 0.04),
    e.col(3813446).mat(0.18, 0.45, 0.12, G | 32),
    e.wall(o, s, c, l, Y.gf, Y.h, n, 3.3 * a, 4),
    e.col(4865106).mat(0.5, 0.2, 0.06, G | 32),
    e.wall(Y.x0, Y.z1, Y.x1, Y.z1, -0.3, Y.par, i, 4 * a, 4.2),
    e.wall(Y.x0, Y.z0, Y.x0, Y.z1, -0.3, Y.par, i, 4 * a, 4.2),
    e.col(1841186).mat(0.5, 0.3, 0, 0),
    e.panel(o, s, c, l, Y.h, Y.par),
    e.col(5920096).mat(0.85, 0, 0, 0),
    e.panel(Y.x1 - 0.3, Y.z0, Y.x1 - 0.3, Y.z1, Y.h, Y.par),
    e.panel(Y.x1, Y.z1 - 0.3, Y.x0, Y.z1 - 0.3, Y.h, Y.par),
    e.panel(Y.x0 + 0.3, Y.z1, Y.x0 + 0.3, Y.z0, Y.h, Y.par),
    e.flat(Y.x1 - 0.3, Y.z0, Y.x1, Y.z1, Y.par),
    e.flat(Y.x0, Y.z1 - 0.3, Y.x1 - 0.3, Y.z1, Y.par),
    e.flat(Y.x0, Y.z0, Y.x0 + 0.3, Y.z1 - 0.3, Y.par),
    e.col(7828346).mat(0.9, 0, 0, 0),
    e.flat(Y.x0 + 0.3, Y.z0, Y.x1 - 0.3, Y.z1 - 0.3, Y.h),
    e.solid(Y.x0, Y.z0, u, Y.z1, 0, Y.par),
    e.solid(u, Y.z0, Y.x1, qW.z0, 0, Y.par),
    e.solid(u, qW.z1, Y.x1, Y.z1, 0, Y.par),
    e.solid(u, qW.z0, Y.x1, qW.z1, Y.gf, Y.par),
    yield);
  let d = qW.z0 - 2.5,
    f = qW.z1 + 2.5,
    p = 2.6;
  (e.col(1446682).mat(0.4, 0.4, 0, 0),
    e.box(Y.x1, Y.gf, d, Y.x1 + p, Y.gf + 0.7, f),
    e.col(16771528).mat(0.4, 0, 0.7, 1),
    e.flat(
      Y.x1 + 0.05,
      d + 0.1,
      Y.x1 + p - 0.1,
      f - 0.1,
      Y.gf - 0.02,
      e.white,
      0,
      0,
      !1,
    ),
    e.coarse ||
      (e.col(QW).mat(0.3, 0, 0.95, 1),
      tG(e, Y.x1 + p, f, Y.x1 + p, d, Y.gf + 0.35, zB, 24, 0.02),
      tG(e, Y.x1, f, Y.x1 + p, f, Y.gf + 0.35, RB, 6, 0.02),
      tG(e, Y.x1 + p, d, Y.x1, d, Y.gf + 0.35, LB, 6, 0.02)),
    e.coarse ||
      (e.col(YW).mat(0.4, 0, 0.85, 1),
      UB(
        e,
        `ENTERTAINMENT`,
        Y.x1 + p + 0.04,
        Y.gf + 0.12,
        (d + f) / 2,
        zB,
        0.46,
        { px: 16, align: 0.5, maxW: 7 },
      )),
    e.col(YW).mat(0.4, 0, 0.9, 1),
    eG(e, Y.x1, Y.z1 - 0.2, 0.4, Y.par, zB),
    eG(e, Y.x1, Y.z0 + 0.6, Y.gf + 0.7, Y.par, zB),
    e.col(XW).mat(0.4, 0, 0.85, 1),
    $W(e, Y.x1, Y.z1 - 0.5, Y.x1, 20.8, 9, zB),
    $W(e, Y.x1, 10.2, Y.x1, Y.z0 + 2.7, 9, zB),
    $W(e, Y.x1, Y.z1 - 0.5, Y.x1, Y.z0 + 2.7, 13, zB),
    e.col(ZW).mat(0.4, 0, 0.85, 5),
    $W(e, Y.x1, Y.z1 - 0.2, Y.x1, Y.z0 + 0.6, Y.par - 0.2, zB),
    e.col(YW).mat(0.4, 0, 0.9, 1),
    eG(e, Y.x1 - 0.3, Y.z1, 7.5, Y.par, RB),
    yield,
    WB(
      e,
      Y.x1,
      13.5,
      (Y.z0 + Y.z1) / 2 + 0.6,
      zB,
      21,
      3.4,
      0.35,
      1511966,
      `VOD LAND`,
      YW,
      { px: 24, lit: 0.7, weight: 900 },
    ),
    bEe(e, Y.x1, 6.2, 15.5, zB, 9.5, 6.2, 9101, 10, 6),
    qB(
      e,
      Y.x1,
      Y.z0 + 2.2,
      zB,
      Y.gf + 1.2,
      11,
      2,
      16723862,
      `VOD LAND`,
      16777215,
      { lit: 0.6, px: 16 },
    ),
    [`LOUNGE`, `BAR`, `飲食`].forEach((t, n) => {
      WB(
        e,
        Y.x1,
        6.2 + n * 0.8,
        5.2,
        zB,
        3.6,
        0.66,
        0.12,
        2760506,
        t,
        n % 2 ? XW : 16777215,
        { px: 12, lit: 0.6, flat: !0 },
      );
    }));
  let m = Y.z1 - 2.2;
  e.col(2763310).mat(0.5, 0.6, 0, 0);
  for (let t of [-7, 0, 7])
    e.box(t - 0.12, Y.h, m - 0.12, t + 0.12, Y.par + 1, m + 0.12);
  if (
    (WB(e, 0, Y.par + 1, m + 0.2, RB, 17, 3.6, 0.3, 1511966, `VOD LAND`, YW, {
      px: 24,
      lit: 0.7,
      weight: 900,
    }),
    e.col(XW).mat(0.4, 0, 0.85, 1),
    $W(e, -8.5, m + 0.5, 8.5, m + 0.5, Y.par + 0.85, RB),
    $W(e, -8.5, m + 0.5, 8.5, m + 0.5, Y.par + 4.75, RB),
    !e.coarse)
  ) {
    (e.col(9341574).mat(0.8, 0.2, 0, 0),
      e.box(-9, Y.h, 2, -4, Y.h + 1.6, 6),
      e.box(-2, Y.h, 4, 1.5, Y.h + 1.2, 7));
    for (let [t, n] of [
      [4, 6],
      [12, 9.5],
      [20, 6],
    ])
      nV(e, Y.x0, n, t, BB);
  }
  if (
    (yield,
    e.col(16773856).mat(0.35, 0.1, 0.32, G),
    e.wall(
      JW.x1,
      JW.z1 - 1,
      JW.x1,
      JW.z0 + 1,
      -0.3,
      JW.gf,
      r,
      2.6 * a,
      JW.gf + 0.3,
    ),
    e.wall(
      JW.x1 - 1,
      JW.z0,
      JW.x0 + 1,
      JW.z0,
      -0.3,
      JW.gf,
      r,
      2.6 * a,
      JW.gf + 0.3,
    ),
    e.col(7235166).mat(0.6, 0.1, 0, 0),
    e.panel(JW.x1, JW.z1, JW.x1, JW.z1 - 1, -0.3, JW.gf),
    e.panel(JW.x1, JW.z0 + 1, JW.x1, JW.z0, -0.3, JW.gf),
    e.panel(JW.x1, JW.z0, JW.x1 - 1, JW.z0, -0.3, JW.gf),
    e.panel(JW.x0 + 1, JW.z0, JW.x0, JW.z0, -0.3, JW.gf),
    e.col(13221806).mat(0.7, 0.05, 0.08, G | 32),
    e.wall(JW.x1, JW.z1, JW.x1, JW.z0, JW.gf, JW.h, i, 4 * a, 3.4),
    e.wall(JW.x1, JW.z0, JW.x0, JW.z0, JW.gf, JW.h, i, 4 * a, 3.4),
    e.wall(JW.x0, JW.z0, JW.x0, JW.z1, -0.3, JW.h, i, 4 * a, 3.4),
    e.wall(JW.x0, JW.z1, JW.x1, JW.z1, Y.h, JW.h, i, 4 * a, 3.4),
    e.col(7235166).mat(0.6, 0.1, 0, 0),
    e.panel(Y.x1, JW.z1, JW.x1, JW.z1, -0.3, Y.h),
    e.col(9077884).mat(0.85, 0, 0, 0),
    e.flat(JW.x0, JW.z0, JW.x1, JW.z1, JW.h),
    e.col(2894382).mat(0.5, 0.2, 0, 0),
    e.box(JW.x1, JW.gf, JW.z0, JW.x1 + 0.3, JW.gf + 0.9, JW.z1),
    e.box(JW.x0, JW.gf, JW.z0 - 0.3, JW.x1 + 0.3, JW.gf + 0.9, JW.z0),
    e.solid(JW.x0, JW.z0, JW.x1, JW.z1, 0, JW.h),
    WB(
      e,
      JW.x1 + 0.3,
      JW.gf + 0.12,
      (JW.z0 + JW.z1) / 2,
      zB,
      16,
      0.66,
      0.06,
      2894382,
      `GAME`,
      QW,
      { px: 14, lit: 0.6, flat: !0 },
    ),
    qB(
      e,
      JW.x1,
      JW.z0 + 2.4,
      zB,
      JW.gf + 1.4,
      12,
      1.6,
      16765498,
      `カラオケ`,
      14163486,
      { lit: 0.5, px: 16 },
    ),
    !e.coarse)
  )
    for (let [t, n] of [
      [-20, 8],
      [-10, 14],
      [-5, 20],
    ])
      nV(e, JW.x0, n, t, BB);
}
function SEe(e, t) {
  let n = t.c(`office`);
  (e.col(3813446).mat(0.4, 0.3, 0.2, G | 32),
    Ej(e, Y.x0, Y.z0, Y.x1, Y.z1, 0, Y.par, n, 12, 9, 7828346),
    e.col(13221806).mat(0.7, 0.05, 0.08, G | 32),
    Ej(e, JW.x0, JW.z0, JW.x1, JW.z1, 0, JW.h, n, 12, 14, 9077884),
    e.col(YW).mat(0.4, 0, 0.8, 1),
    e.panel(Y.x1 + 0.4, Y.z1 - 2, Y.x1 + 0.4, Y.z0 + 2, 13.5, 16.9));
}
