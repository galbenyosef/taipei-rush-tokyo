// tokyo/assets/region-tokyo-A7LxHjud 223 — mat
// Lines 86491-86792 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* bbe(e, t, n) {
  let r = ZN(n, 8202780),
    { x: i, z0: a, z1: o, h: s } = UN;
  if (
    (e.col(BN).mat(0.88, 0, 0.08, 1),
    e.wall(-WN.x, a, -i, a, 0, s, n.granite, 4, s),
    e.wall(i, a, WN.x, a, 0, s, n.granite, 4, s),
    e.wall(i, o, i, a, 0, s, n.granite, 4, s),
    e.wall(-i, o, i, o, 0, s, n.granite, 4, s),
    e.wall(-i, a, -i, o, 0, s, n.granite, 4, s),
    e.wall(WN.x, WN.z0, -WN.x, WN.z0, 0, s, n.granite, 4, s),
    e.wall(-WN.x, WN.z0, -WN.x, a, 0, s, n.granite, 4, s),
    e.wall(WN.x, a, WN.x, WN.z0, 0, s, n.granite, 4, s),
    e.col(14078406).mat(0.85, 0, 0.06, 1),
    e.flat(-i, a, i, 5, s, n.granite, 4, 4),
    e.flat(-i, 28.5, i, o, s, n.granite, 4, 4),
    e.flat(-i, 5, -20.5, 28.5, s, n.granite, 4, 4),
    e.flat(20.5, 5, i, 28.5, s, n.granite, 4, 4),
    e.flat(-WN.x, WN.z0, WN.x, a, s, n.granite, 4, 4),
    !e.coarse)
  ) {
    e.col(16777215).mat(0.4, 0.2, 0.3, G);
    for (let n of [-18.5, 18.5])
      e.panel(n + 2.2, a - 0.03, n - 2.2, a - 0.03, 0, 3.4, t.c(`doors`));
  }
  let c = (WN.z0 - GN.z0) / 22,
    l = s / 22;
  e.col(14275786).mat(0.85, 0, 0.05, 1);
  for (let t = 0; t < 22; t++) {
    let n = GN.z0 + t * c,
      r = t * l;
    (e.panel(GN.x, n, -GN.x, n, r, r + l),
      e.flat(-GN.x, n, GN.x, n + c, r + l));
  }
  for (let t of [-1, 1])
    (e.col(BN).mat(0.88, 0, 0.06, 1),
      e.extrudeX(
        [WN.z0, 0, GN.z0 - 0.6, 0, GN.z0 - 0.6, 1, WN.z0, s + 1],
        t < 0 ? -GN.x - 1 : GN.x,
        t < 0 ? -GN.x : GN.x + 1,
        !0,
        !0,
      ));
  (e.floor(-GN.x, GN.z0, GN.x, WN.z0, 0, s, `stairs`),
    e.floor(-WN.x, WN.z0, WN.x, a, s),
    e.floor(-i, a, i, o, s),
    e.solid(-i, a, i, o, 0, s - 0.05, `temple`),
    e.solid(-WN.x, WN.z0, WN.x, a, 0, s - 0.05, `temple`));
  for (let t of [-1, 1])
    e.solid(
      t < 0 ? -GN.x - 1 : GN.x,
      GN.z0 - 0.6,
      t < 0 ? -GN.x : GN.x + 1,
      WN.z0,
      0,
      s + 1,
    );
  yield;
  let u = 19.5,
    d = 15.6,
    f = [
      [u, KN, -19.5, KN, !0],
      [u, qN, u, KN, !1],
      [-19.5, qN, u, qN, !1],
      [-19.5, KN, -19.5, qN, !1],
    ];
  for (let [t, r, i, a, o] of f)
    (o
      ? (e.col(14203026).mat(0.75, 0, 0.3, G),
        e.wall(t, r, i, a, s, 11.4, n.shoji, 2.4375, 5.8))
      : (QN(e, 0.16, RN), e.wall(t, r, i, a, s, 11.4, e.white, 4, 5.8, 0.06)),
      e.col(15855076).mat(0.85, 0, 0.16, 1),
      e.wall(t, r, i, a, 11.4, 14.6, n.plaster, 4, 3.2, 0.08),
      QN(e, 0.12),
      e.wall(t, r, i, a, 14.6, d, e.white, 4, 1));
  if (!e.coarse) {
    e.col(16777215).mat(0.7, 0, 0.26, G);
    for (let t of [10, 14.5, 19, 23.5])
      (e.panel(19.53, t + 1.6, 19.53, t - 1.6, 7, 10.4, n.shoji),
        e.panel(-19.53, t - 1.6, -19.53, t + 1.6, 7, 10.4, n.shoji));
    (QN(e, 0.12), e.box(-19.8, 11.2, 5.25, 19.8, 11.6, 5.75));
  }
  QN(e, 0.18);
  for (let t = 0; t <= 8; t++) {
    let n = -19.5 + (2 * u * t) / 8;
    (e.cylY(n, 5.5, s, d, 0.45, 10, 0.42, !1),
      e.cylY(n, 28, s, d, 0.45, 8, 0.42, !1));
  }
  for (let t of [11.4, 16.75, 22.1])
    for (let n of [-20, 20]) e.cylY(n, t, s, d, 0.45, 8, 0.42, !1);
  if (
    (e.solid(-20.5, 5, 20.5, 28.5, s, 30, `temple`),
    eP(
      e,
      [
        -WN.x - 0.2,
        a + 0.3,
        -i + 0.3,
        a + 0.3,
        -i + 0.3,
        o - 0.3,
        i - 0.3,
        o - 0.3,
        i - 0.3,
        a + 0.3,
        WN.x + 0.2,
        a + 0.3,
      ],
      s,
    ),
    eP(
      e,
      [-WN.x + 0.3, a, -WN.x + 0.3, WN.z0 + 0.3, -GN.x - 0.4, WN.z0 + 0.3],
      s,
    ),
    eP(e, [WN.x - 0.3, a, WN.x - 0.3, WN.z0 + 0.3, GN.x + 0.4, WN.z0 + 0.3], s),
    yield,
    $N(e, n, -19.5, 5.5, u, 28, d, 17.4, 1.8),
    e.col(16777215).mat(0.6, 0, 0.3, G),
    e.flat(
      -23.7,
      2.3499999999999996,
      23.7,
      31.15,
      17.38,
      n.rafters,
      3.6,
      1.2,
      !1,
    ),
    e.mat(0.85, 0.05, 0.02, 1),
    lC(e, 0, 16.75, 17.6, 26.4, 15, {
      ...r,
      rise: 10.4,
      curve: 1.45,
      sori: 1.1,
      thick: 0.55,
      eave: 3.4,
      ridgeH: 1.5,
      tg: 0.45,
      gableColor: LN,
      rows: 8,
    }),
    !e.coarse)
  ) {
    e.col(zN).mat(0.3, 0.85, 0.12, 1);
    let t = 20.5125;
    for (let n of [-1, 1])
      (e.box(n * t - 0.1, 23.6, 15.85, n * t + 0.1, 26, 17.65),
        e.box(
          n * 21.1125 - 0.35,
          28.4,
          16.35,
          n * 21.1125 + 0.35,
          30.6,
          17.15,
        ));
  }
  (yield, QN(e, 0.18));
  let p = WN.z0 + 0.5;
  for (let t of [-5.2, 5.2])
    for (let n of [p, 5.2])
      (e.cylY(t, n, s, 12.6, 0.4, 10, 0.38, !1), e.pole(t, n, 0.45, s, 12.6));
  if (
    (e.box(-5.8, 11.9, p - 0.45, 5.8, 12.7, p + 0.45),
    e.coarse || $N(e, n, -5.4, p - 0.4, 5.4, 5.4, 12.7, 13.3, 0.4, 2),
    e.mat(0.85, 0.05, 0.02, 1),
    uC(e, 0, 0, 13.3, 7.2, p - 2.1, 5.9, 2.4, {
      ...r,
      rise: 0,
      tile: 2,
      thick: 0.5,
      boardColor: RN,
      gilt: zN,
    }),
    !e.coarse)
  )
    for (let t of [-2.6, 2.6]) JC(e, t, 11.8, p + 0.9, 2.3, n.lantern);
  (tP(e, -14.5, GN.z0 - 1.6), tP(e, 14.5, GN.z0 - 1.6));
}
function xbe(e, t) {
  let n = e.sub(JN.x, 0, JN.z, 0);
  (e.col(BN).mat(0.88, 0, 0.05, 1),
    e.box(-4.4, 0, -4.4, 4.4, 1.4, 4.4, t.granite, 2, 1.4),
    e.floor(-4.4, -4.4, 4.4, 4.4, 1.4),
    QN(e, 0.16));
  for (let [t, n] of [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ])
    (e.rod(t * 3.3, 1.4, n * 3.3, t * 3.05, 7.2, n * 3.05, 0.32, 8, 0.28),
      e.pole(t * 3.3, n * 3.3, 0.38, 1.4, 7.2));
  if (
    (e.box(-3.4, 6.6, -3.4, 3.4, 7.3, 3.4, e.white, 0, 0, null, !0), !e.coarse)
  )
    for (let t of [2.6])
      (e.box(-3.2, t, -3.25, 3.2, t + 0.25, -2.9),
        e.box(-3.2, t, 2.9, 3.2, t + 0.25, 3.25));
  ($N(e, t, -3.4, -3.4, 3.4, 3.4, 7.3, 7.9, 0.5, 2),
    e.col(5326907).mat(0.45, 0.65, 0.05, 1),
    e.lathe(
      0,
      0,
      [1.3, 2.4, 1.18, 3, 1, 5.4, 0.8, 5.95, 0.2, 6.2, 0.01, 6.25],
      e.seg(12),
      0,
      e.white,
      !1,
      !0,
    ),
    e.coarse ||
      e.lathe(
        0,
        0,
        [1.32, 2.4, 1.32, 2.55, 1.2, 2.55],
        e.seg(12),
        0,
        e.white,
        !1,
        !0,
      ),
    e.box(-0.25, 6.2, -0.25, 0.25, 6.6, 0.25),
    e.coarse ||
      (e.col(11967090).mat(0.8, 0, 0, 0),
      e.rod(1.6, 3.6, -0, 3.4, 3.6, 0, 0.16, 6),
      e.col(15261900),
      e.rod(2.1, 3.6, 0, 2.1, 6.6, 0, 0.03, 3),
      e.rod(3, 3.6, 0, 3, 6.6, 0, 0.03, 3)),
    e.mat(0.85, 0.05, 0.02, 1),
    lC(e, 0, 0, 7.9, 5.4, 5.4, {
      ...ZN(t),
      rise: 3.6,
      curve: 1.4,
      sori: 0.6,
      eave: 1.6,
      ridgeH: 0.7,
      tg: 0.46,
      gableColor: LN,
      rows: 5,
    }),
    e.leave(n));
}
var nP = { x: 40, z0: 4.5, z1: 17, hx: 8.5 };
function Sbe(e, t) {
  let { x: n, z0: r, z1: i, hx: a } = nP,
    o = 1.2,
    s = 7.6,
    c = ZN(t);
  (e.col(BN).mat(0.88, 0, 0.06, 1),
    e.box(n - a, 0, r, n + a, o, i, t.granite, 4, o),
    e.box(n - 3.2, 0, r - 1.6, n + 3.2, o / 2, r),
    e.floor(n - a, r - 1.6, n + a, i, o),
    e.solid(n - a + 1, r + 1, n + a - 1, i - 1, o, 16, `temple`));
  let l = n - a + 1,
    u = n + a - 1,
    d = r + 1,
    f = i - 1;
  (e.col(14203026).mat(0.75, 0, 0.3, G),
    e.wall(u, d, l, d, o, 5.4, t.shoji, 2.5, 4.2),
    QN(e, 0.08, RN),
    e.wall(u, f, u, d, o, 5.4, e.white, 4, 4.2),
    e.wall(l, f, u, f, o, 5.4, e.white, 4, 4.2),
    e.wall(l, d, l, f, o, 5.4, e.white, 4, 4.2),
    e.col(15855076).mat(0.85, 0, 0.08, 1));
  for (let [n, r, i, a] of [
    [u, d, l, d],
    [u, f, u, d],
    [l, f, u, f],
    [l, d, l, f],
  ])
    e.wall(n, r, i, a, 5.4, 7, t.plaster, 4, 1.5999999999999996);
  QN(e, 0.08);
  for (let [t, n, r, i] of [
    [u, d, l, d],
    [u, f, u, d],
    [l, f, u, f],
    [l, d, l, f],
  ])
    e.wall(t, n, r, i, 7, s, e.white, 4, 0.6);
  for (let t = 0; t <= 4; t++)
    e.cylY(l + ((u - l) * t) / 4, d - 0.4, o, s, 0.32, 8, 0.3, !1);
  if (
    ($N(e, t, l, d - 0.4, u, f, s, 8.4, 0.9, 2),
    e.mat(0.85, 0.05, 0.02, 1),
    lC(e, n, (r + i) / 2, 8.5, a + 2.6, (i - r) / 2 + 1.6, {
      ...c,
      rise: 5.4,
      curve: 1.4,
      sori: 0.7,
      eave: 2,
      ridgeH: 0.8,
      tg: 0.46,
      gableColor: LN,
      rows: 6,
    }),
    !e.coarse)
  )
    for (let r of [n - 2.2, n + 2.2])
      JC(e, r, 7.3999999999999995, d - 0.9, 1.4, t.lantern);
}
