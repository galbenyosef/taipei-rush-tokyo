// tokyo/assets/region-tokyo-55J_WESF 223 — mat
// Lines 86400-86701 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* sbe(e, t, n) {
  let r = YN(n, 8202780),
    { x: i, z0: a, z1: o, h: s } = VN;
  if (
    (e.col(RN).mat(0.88, 0, 0.08, 1),
    e.wall(-HN.x, a, -i, a, 0, s, n.granite, 4, s),
    e.wall(i, a, HN.x, a, 0, s, n.granite, 4, s),
    e.wall(i, o, i, a, 0, s, n.granite, 4, s),
    e.wall(-i, o, i, o, 0, s, n.granite, 4, s),
    e.wall(-i, a, -i, o, 0, s, n.granite, 4, s),
    e.wall(HN.x, HN.z0, -HN.x, HN.z0, 0, s, n.granite, 4, s),
    e.wall(-HN.x, HN.z0, -HN.x, a, 0, s, n.granite, 4, s),
    e.wall(HN.x, a, HN.x, HN.z0, 0, s, n.granite, 4, s),
    e.col(14078406).mat(0.85, 0, 0.06, 1),
    e.flat(-i, a, i, 5, s, n.granite, 4, 4),
    e.flat(-i, 28.5, i, o, s, n.granite, 4, 4),
    e.flat(-i, 5, -20.5, 28.5, s, n.granite, 4, 4),
    e.flat(20.5, 5, i, 28.5, s, n.granite, 4, 4),
    e.flat(-HN.x, HN.z0, HN.x, a, s, n.granite, 4, 4),
    !e.coarse)
  ) {
    e.col(16777215).mat(0.4, 0.2, 0.3, G);
    for (let n of [-18.5, 18.5])
      e.panel(n + 2.2, a - 0.03, n - 2.2, a - 0.03, 0, 3.4, t.c(`doors`));
  }
  let c = (HN.z0 - UN.z0) / 22,
    l = s / 22;
  e.col(14275786).mat(0.85, 0, 0.05, 1);
  for (let t = 0; t < 22; t++) {
    let n = UN.z0 + t * c,
      r = t * l;
    (e.panel(UN.x, n, -UN.x, n, r, r + l),
      e.flat(-UN.x, n, UN.x, n + c, r + l));
  }
  for (let t of [-1, 1])
    (e.col(RN).mat(0.88, 0, 0.06, 1),
      e.extrudeX(
        [HN.z0, 0, UN.z0 - 0.6, 0, UN.z0 - 0.6, 1, HN.z0, s + 1],
        t < 0 ? -UN.x - 1 : UN.x,
        t < 0 ? -UN.x : UN.x + 1,
        !0,
        !0,
      ));
  (e.floor(-UN.x, UN.z0, UN.x, HN.z0, 0, s, `stairs`),
    e.floor(-HN.x, HN.z0, HN.x, a, s),
    e.floor(-i, a, i, o, s),
    e.solid(-i, a, i, o, 0, s - 0.05, `temple`),
    e.solid(-HN.x, HN.z0, HN.x, a, 0, s - 0.05, `temple`));
  for (let t of [-1, 1])
    e.solid(
      t < 0 ? -UN.x - 1 : UN.x,
      UN.z0 - 0.6,
      t < 0 ? -UN.x : UN.x + 1,
      HN.z0,
      0,
      s + 1,
    );
  yield;
  let u = 19.5,
    d = 15.6,
    f = [
      [u, WN, -19.5, WN, !0],
      [u, GN, u, WN, !1],
      [-19.5, GN, u, GN, !1],
      [-19.5, WN, -19.5, GN, !1],
    ];
  for (let [t, r, i, a, o] of f)
    (o
      ? (e.col(14203026).mat(0.75, 0, 0.3, G),
        e.wall(t, r, i, a, s, 11.4, n.shoji, 2.4375, 5.8))
      : (XN(e, 0.16, IN), e.wall(t, r, i, a, s, 11.4, e.white, 4, 5.8, 0.06)),
      e.col(15855076).mat(0.85, 0, 0.16, 1),
      e.wall(t, r, i, a, 11.4, 14.6, n.plaster, 4, 3.2, 0.08),
      XN(e, 0.12),
      e.wall(t, r, i, a, 14.6, d, e.white, 4, 1));
  if (!e.coarse) {
    e.col(16777215).mat(0.7, 0, 0.26, G);
    for (let t of [10, 14.5, 19, 23.5])
      (e.panel(19.53, t + 1.6, 19.53, t - 1.6, 7, 10.4, n.shoji),
        e.panel(-19.53, t - 1.6, -19.53, t + 1.6, 7, 10.4, n.shoji));
    (XN(e, 0.12), e.box(-19.8, 11.2, 5.25, 19.8, 11.6, 5.75));
  }
  XN(e, 0.18);
  for (let t = 0; t <= 8; t++) {
    let n = -19.5 + (2 * u * t) / 8;
    (e.cylY(n, 5.5, s, d, 0.45, 10, 0.42, !1),
      e.cylY(n, 28, s, d, 0.45, 8, 0.42, !1));
  }
  for (let t of [11.4, 16.75, 22.1])
    for (let n of [-20, 20]) e.cylY(n, t, s, d, 0.45, 8, 0.42, !1);
  if (
    (e.solid(-20.5, 5, 20.5, 28.5, s, 30, `temple`),
    QN(
      e,
      [
        -HN.x - 0.2,
        a + 0.3,
        -i + 0.3,
        a + 0.3,
        -i + 0.3,
        o - 0.3,
        i - 0.3,
        o - 0.3,
        i - 0.3,
        a + 0.3,
        HN.x + 0.2,
        a + 0.3,
      ],
      s,
    ),
    QN(
      e,
      [-HN.x + 0.3, a, -HN.x + 0.3, HN.z0 + 0.3, -UN.x - 0.4, HN.z0 + 0.3],
      s,
    ),
    QN(e, [HN.x - 0.3, a, HN.x - 0.3, HN.z0 + 0.3, UN.x + 0.4, HN.z0 + 0.3], s),
    yield,
    ZN(e, n, -19.5, 5.5, u, 28, d, 17.4, 1.8),
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
    oC(e, 0, 16.75, 17.6, 26.4, 15, {
      ...r,
      rise: 10.4,
      curve: 1.45,
      sori: 1.1,
      thick: 0.55,
      eave: 3.4,
      ridgeH: 1.5,
      tg: 0.45,
      gableColor: FN,
      rows: 8,
    }),
    !e.coarse)
  ) {
    e.col(LN).mat(0.3, 0.85, 0.12, 1);
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
  (yield, XN(e, 0.18));
  let p = HN.z0 + 0.5;
  for (let t of [-5.2, 5.2])
    for (let n of [p, 5.2])
      (e.cylY(t, n, s, 12.6, 0.4, 10, 0.38, !1), e.pole(t, n, 0.45, s, 12.6));
  if (
    (e.box(-5.8, 11.9, p - 0.45, 5.8, 12.7, p + 0.45),
    e.coarse || ZN(e, n, -5.4, p - 0.4, 5.4, 5.4, 12.7, 13.3, 0.4, 2),
    e.mat(0.85, 0.05, 0.02, 1),
    sC(e, 0, 0, 13.3, 7.2, p - 2.1, 5.9, 2.4, {
      ...r,
      rise: 0,
      tile: 2,
      thick: 0.5,
      boardColor: IN,
      gilt: LN,
    }),
    !e.coarse)
  )
    for (let t of [-2.6, 2.6]) GC(e, t, 11.8, p + 0.9, 2.3, n.lantern);
  ($N(e, -14.5, UN.z0 - 1.6), $N(e, 14.5, UN.z0 - 1.6));
}
function cbe(e, t) {
  let n = e.sub(KN.x, 0, KN.z, 0);
  (e.col(RN).mat(0.88, 0, 0.05, 1),
    e.box(-4.4, 0, -4.4, 4.4, 1.4, 4.4, t.granite, 2, 1.4),
    e.floor(-4.4, -4.4, 4.4, 4.4, 1.4),
    XN(e, 0.16));
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
  (ZN(e, t, -3.4, -3.4, 3.4, 3.4, 7.3, 7.9, 0.5, 2),
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
    oC(e, 0, 0, 7.9, 5.4, 5.4, {
      ...YN(t),
      rise: 3.6,
      curve: 1.4,
      sori: 0.6,
      eave: 1.6,
      ridgeH: 0.7,
      tg: 0.46,
      gableColor: FN,
      rows: 5,
    }),
    e.leave(n));
}
var eP = { x: 40, z0: 4.5, z1: 17, hx: 8.5 };
function lbe(e, t) {
  let { x: n, z0: r, z1: i, hx: a } = eP,
    o = 1.2,
    s = 7.6,
    c = YN(t);
  (e.col(RN).mat(0.88, 0, 0.06, 1),
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
    XN(e, 0.08, IN),
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
  XN(e, 0.08);
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
    (ZN(e, t, l, d - 0.4, u, f, s, 8.4, 0.9, 2),
    e.mat(0.85, 0.05, 0.02, 1),
    oC(e, n, (r + i) / 2, 8.5, a + 2.6, (i - r) / 2 + 1.6, {
      ...c,
      rise: 5.4,
      curve: 1.4,
      sori: 0.7,
      eave: 2,
      ridgeH: 0.8,
      tg: 0.46,
      gableColor: FN,
      rows: 6,
    }),
    !e.coarse)
  )
    for (let r of [n - 2.2, n + 2.2])
      GC(e, r, 7.3999999999999995, d - 0.9, 1.4, t.lantern);
}
