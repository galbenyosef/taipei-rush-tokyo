// tokyo/assets/region-tokyo-A7LxHjud 300 — col
// Lines 109410-109731 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function eG(e, t, n, r, i, a, o, s = 0.12) {
  KB(
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
function tG(e, t, n, r, i, a, o = 0.14) {
  KB(e, t + a[0] * 0.1, n + a[1] * 0.1, a, o, o, r, i);
}
function PEe(e, t, n, r, i, a, o, s, c, l) {
  let u = HB(i),
    d = XB(s),
    f = e.coarse ? Math.max(2, Math.ceil(c / 3)) : c,
    p = e.coarse ? Math.max(2, Math.ceil(l / 3)) : l,
    m = [3808456, QW, XW, 16734858, ZW, 10155263],
    h = d.range(0, 6),
    g = (e, t, n) => {
      let r = (r) =>
        Math.round(((e >> r) & 255) * (1 - n) + ((t >> r) & 255) * n);
      return (r(16) << 16) | (r(8) << 8) | r(0);
    };
  (e.push().col(1315352).mat(0.6, 0.3, 0, 0),
    KB(
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
function nG(e, t, n, r, i, a, o, s, c, l = 0.16) {
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
function* FEe(e, t) {
  let n = t.c(`glass`),
    r = t.c(`doors`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  e.col(2367530).mat(0.45, 0.2, 0, 0);
  let [o, s, c, l] = NEe(Y.x1, Y.z0, Y.z1);
  (e.panel(o, s, Y.x1, JW.z1, -0.3, Y.gf),
    e.panel(Y.x1, JW.z0, c, l, -0.3, Y.gf));
  let u = Y.x1 - JW.depth;
  (e.panel(Y.x1, JW.z1, u, JW.z1, -0.3, Y.gf),
    e.panel(u, JW.z0, Y.x1, JW.z0, -0.3, Y.gf),
    e.col(16773366).mat(0.4, 0, 0.6, 1),
    e.flat(u, JW.z0, Y.x1, JW.z1, Y.gf - 0.02, e.white, 0, 0, !1),
    e.col(16770802).mat(0.3, 0.2, 0.45, G),
    e.wall(u, JW.z1, u, JW.z0, -0.3, Y.gf - 0.02, r, 2.4 * a, Y.gf + 0.3),
    e.col(3814464).mat(0.3, 0.3, 0, 0),
    e.flat(u, JW.z0, Y.x1, JW.z1, 0.04),
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
    e.solid(u, Y.z0, Y.x1, JW.z0, 0, Y.par),
    e.solid(u, JW.z1, Y.x1, Y.z1, 0, Y.par),
    e.solid(u, JW.z0, Y.x1, JW.z1, Y.gf, Y.par),
    yield);
  let d = JW.z0 - 2.5,
    f = JW.z1 + 2.5,
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
      (e.col($W).mat(0.3, 0, 0.95, 1),
      nG(e, Y.x1 + p, f, Y.x1 + p, d, Y.gf + 0.35, BB, 24, 0.02),
      nG(e, Y.x1, f, Y.x1 + p, f, Y.gf + 0.35, zB, 6, 0.02),
      nG(e, Y.x1 + p, d, Y.x1, d, Y.gf + 0.35, RB, 6, 0.02)),
    e.coarse ||
      (e.col(XW).mat(0.4, 0, 0.85, 1),
      WB(
        e,
        `ENTERTAINMENT`,
        Y.x1 + p + 0.04,
        Y.gf + 0.12,
        (d + f) / 2,
        BB,
        0.46,
        { px: 16, align: 0.5, maxW: 7 },
      )),
    e.col(XW).mat(0.4, 0, 0.9, 1),
    tG(e, Y.x1, Y.z1 - 0.2, 0.4, Y.par, BB),
    tG(e, Y.x1, Y.z0 + 0.6, Y.gf + 0.7, Y.par, BB),
    e.col(ZW).mat(0.4, 0, 0.85, 1),
    eG(e, Y.x1, Y.z1 - 0.5, Y.x1, 20.8, 9, BB),
    eG(e, Y.x1, 10.2, Y.x1, Y.z0 + 2.7, 9, BB),
    eG(e, Y.x1, Y.z1 - 0.5, Y.x1, Y.z0 + 2.7, 13, BB),
    e.col(QW).mat(0.4, 0, 0.85, 5),
    eG(e, Y.x1, Y.z1 - 0.2, Y.x1, Y.z0 + 0.6, Y.par - 0.2, BB),
    e.col(XW).mat(0.4, 0, 0.9, 1),
    tG(e, Y.x1 - 0.3, Y.z1, 7.5, Y.par, zB),
    yield,
    GB(
      e,
      Y.x1,
      13.5,
      (Y.z0 + Y.z1) / 2 + 0.6,
      BB,
      21,
      3.4,
      0.35,
      1511966,
      `VOD LAND`,
      XW,
      { px: 24, lit: 0.7, weight: 900 },
    ),
    PEe(e, Y.x1, 6.2, 15.5, BB, 9.5, 6.2, 9101, 10, 6),
    JB(
      e,
      Y.x1,
      Y.z0 + 2.2,
      BB,
      Y.gf + 1.2,
      11,
      2,
      16723862,
      `VOD LAND`,
      16777215,
      { lit: 0.6, px: 16 },
    ),
    [`LOUNGE`, `BAR`, `飲食`].forEach((t, n) => {
      GB(
        e,
        Y.x1,
        6.2 + n * 0.8,
        5.2,
        BB,
        3.6,
        0.66,
        0.12,
        2760506,
        t,
        n % 2 ? ZW : 16777215,
        { px: 12, lit: 0.6, flat: !0 },
      );
    }));
  let m = Y.z1 - 2.2;
  e.col(2763310).mat(0.5, 0.6, 0, 0);
  for (let t of [-7, 0, 7])
    e.box(t - 0.12, Y.h, m - 0.12, t + 0.12, Y.par + 1, m + 0.12);
  if (
    (GB(e, 0, Y.par + 1, m + 0.2, zB, 17, 3.6, 0.3, 1511966, `VOD LAND`, XW, {
      px: 24,
      lit: 0.7,
      weight: 900,
    }),
    e.col(ZW).mat(0.4, 0, 0.85, 1),
    eG(e, -8.5, m + 0.5, 8.5, m + 0.5, Y.par + 0.85, zB),
    eG(e, -8.5, m + 0.5, 8.5, m + 0.5, Y.par + 4.75, zB),
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
      rV(e, Y.x0, n, t, VB);
  }
  if (
    (yield,
    e.col(16773856).mat(0.35, 0.1, 0.32, G),
    e.wall(
      YW.x1,
      YW.z1 - 1,
      YW.x1,
      YW.z0 + 1,
      -0.3,
      YW.gf,
      r,
      2.6 * a,
      YW.gf + 0.3,
    ),
    e.wall(
      YW.x1 - 1,
      YW.z0,
      YW.x0 + 1,
      YW.z0,
      -0.3,
      YW.gf,
      r,
      2.6 * a,
      YW.gf + 0.3,
    ),
    e.col(7235166).mat(0.6, 0.1, 0, 0),
    e.panel(YW.x1, YW.z1, YW.x1, YW.z1 - 1, -0.3, YW.gf),
    e.panel(YW.x1, YW.z0 + 1, YW.x1, YW.z0, -0.3, YW.gf),
    e.panel(YW.x1, YW.z0, YW.x1 - 1, YW.z0, -0.3, YW.gf),
    e.panel(YW.x0 + 1, YW.z0, YW.x0, YW.z0, -0.3, YW.gf),
    e.col(13221806).mat(0.7, 0.05, 0.08, G | 32),
    e.wall(YW.x1, YW.z1, YW.x1, YW.z0, YW.gf, YW.h, i, 4 * a, 3.4),
    e.wall(YW.x1, YW.z0, YW.x0, YW.z0, YW.gf, YW.h, i, 4 * a, 3.4),
    e.wall(YW.x0, YW.z0, YW.x0, YW.z1, -0.3, YW.h, i, 4 * a, 3.4),
    e.wall(YW.x0, YW.z1, YW.x1, YW.z1, Y.h, YW.h, i, 4 * a, 3.4),
    e.col(7235166).mat(0.6, 0.1, 0, 0),
    e.panel(Y.x1, YW.z1, YW.x1, YW.z1, -0.3, Y.h),
    e.col(9077884).mat(0.85, 0, 0, 0),
    e.flat(YW.x0, YW.z0, YW.x1, YW.z1, YW.h),
    e.col(2894382).mat(0.5, 0.2, 0, 0),
    e.box(YW.x1, YW.gf, YW.z0, YW.x1 + 0.3, YW.gf + 0.9, YW.z1),
    e.box(YW.x0, YW.gf, YW.z0 - 0.3, YW.x1 + 0.3, YW.gf + 0.9, YW.z0),
    e.solid(YW.x0, YW.z0, YW.x1, YW.z1, 0, YW.h),
    GB(
      e,
      YW.x1 + 0.3,
      YW.gf + 0.12,
      (YW.z0 + YW.z1) / 2,
      BB,
      16,
      0.66,
      0.06,
      2894382,
      `GAME`,
      $W,
      { px: 14, lit: 0.6, flat: !0 },
    ),
    JB(
      e,
      YW.x1,
      YW.z0 + 2.4,
      BB,
      YW.gf + 1.4,
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
      rV(e, YW.x0, n, t, VB);
}
function IEe(e, t) {
  let n = t.c(`office`);
  (e.col(3813446).mat(0.4, 0.3, 0.2, G | 32),
    Oj(e, Y.x0, Y.z0, Y.x1, Y.z1, 0, Y.par, n, 12, 9, 7828346),
    e.col(13221806).mat(0.7, 0.05, 0.08, G | 32),
    Oj(e, YW.x0, YW.z0, YW.x1, YW.z1, 0, YW.h, n, 12, 14, 9077884),
    e.col(XW).mat(0.4, 0, 0.8, 1),
    e.panel(Y.x1 + 0.4, Y.z1 - 2, Y.x1 + 0.4, Y.z0 + 2, 13.5, 16.9));
}
