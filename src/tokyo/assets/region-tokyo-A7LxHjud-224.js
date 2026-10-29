// tokyo/assets/region-tokyo-A7LxHjud 224 — box
// Lines 86793-87141 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Cbe(e) {
  if (
    (e.col(10657429).mat(0.9, 0, 0.04, 1),
    e.box(30, 0.04, 24, 60, 0.45, 26),
    e.box(30, 0.04, 26, 60, 0.95, 28),
    e.coarse)
  ) {
    e.col(11545120).mat(0.8, 0, 0, 0).box(31, 0.45, 24.7, 59, 1, 25.1);
    return;
  }
  let t = [15913530, 3833808, 15225738, 4764762],
    n = 0;
  for (let [r, i] of [
    [25, 0.45],
    [27, 0.95],
  ])
    for (let a = 31 + (i > 0.5 ? 0.85 : 0); a <= 59.001; a += 1.7, n++) {
      (e.col(10262671).mat(0.92, 0, 0.03, 1),
        e.lathe(
          a,
          r,
          [
            0.17,
            i,
            0.15,
            i + 0.5,
            0.09,
            i + 0.56,
            0.12,
            i + 0.66,
            0.01,
            i + 0.77,
          ],
          4,
          Math.PI / 4,
          e.white,
          !1,
          !0,
        ),
        e.col(13116188).mat(0.75, 0, 0.05, 1),
        e.lathe(a, r, [0.135, i + 0.68, 0.01, i + 0.86], 4, Math.PI / 4),
        e.box(a - 0.14, i + 0.3, r - 0.2, a + 0.14, i + 0.52, r - 0.13));
      let o = a + 0.3,
        s = r - 0.34,
        c = i + 0.95,
        l = 0.13;
      (e
        .col(2894892)
        .mat(0.8, 0, 0, 0)
        .rod(o, i, s + 0.02, o, c, s + 0.02, 0.012, 3),
        e.col(t[n % 4]).mat(0.6, 0, 0.05, 1),
        e.quad(o, c - l, s, o - l, c, s, o, c + l, s, o + l, c, s));
    }
}
function* wbe(e, t, n) {
  let r = t.c(`gravel`),
    i = t.c(`paving`),
    a = e.coarse ? 16 : 8,
    o = -18.1;
  (e.col(14209991).mat(0.95, 0, 0, 0),
    e.flat(-62, -31.8, -11.2, -19, 0.04, r, a, a),
    e.flat(11.2, -31.8, 62, -19, 0.04, r, a, a),
    e.flat(-62, -19, -6.2, o, 0.04, r, a, a),
    e.flat(6.2, -19, 62, o, 0.04, r, a, a),
    e.flat(-62, o, 62, GN.z0 - 0.6, 0.04, r, a, a),
    e.flat(-62, GN.z0 - 0.6, -GN.x - 1, WN.z0, 0.04, r, a, a),
    e.flat(GN.x + 1, GN.z0 - 0.6, 62, WN.z0, 0.04, r, a, a),
    e.flat(-62, WN.z0, -WN.x, UN.z0, 0.04, r, a, a),
    e.flat(WN.x, WN.z0, 62, UN.z0, 0.04, r, a, a),
    e.flat(-62, UN.z0, -UN.x, 31.5, 0.04, r, a, a));
  let s = nP.x - nP.hx,
    c = nP.x + nP.hx;
  if (
    (e.flat(UN.x, UN.z0, s, 31.5, 0.04, r, a, a),
    e.flat(c, UN.z0, 62, 31.5, 0.04, r, a, a),
    e.flat(s, UN.z0, c, nP.z0 - 1.6, 0.04, r, a, a),
    e.flat(s, nP.z1, c, 31.5, 0.04, r, a, a),
    e.flat(-UN.x, UN.z1, UN.x, 31.5, 0.04, r, a, a),
    e.col(13617596).mat(0.85, 0, 0, 0),
    e.flat(-3.2, o, 3.2, GN.z0 - 0.6, 0.07, i, 3.2, 3.2),
    !e.coarse)
  ) {
    for (let t of [-16, -12.9]) for (let n of [-4.7, 4.7]) vbe(e, n, t, 1);
    (GC(e, -20, -13.5, 8.5, 41), GC(e, 20, -13.5, 8, 42), GC(e, -30, 8, 9, 43));
    for (let [t, n, r] of [
      [-56, -24, 1],
      [-58, 4, 2],
      [-55, 24, 3],
      [-34, 24, 4],
      [58, -24, 5],
      [58, 8, 6],
      [-44, 30.5, 7],
      [42, -27, 8],
      [30, -20, 9],
      [50, -12, 10],
      [-36, -27, 11],
    ])
      (KC(e, t, n, 12 + (r % 3) * 1.5, 4100 + r), e.pole(t, n, 0.4, 0, 5));
    for (let [t, n] of [
      [-20, -13.5],
      [20, -13.5],
      [-30, 8],
    ])
      e.pole(t, n, 0.35, 0, 4);
  }
  (yield, xbe(e, n), Sbe(e, n), Cbe(e), yield);
}
function* Tbe(e, t) {
  let n = XN(t);
  (yield* ybe(e, t, n), yield* bbe(e, t, n), yield* wbe(e, t, n));
}
function Ebe(e, t) {
  (QN(e, 0.25),
    e.box(-10, 0, -29.8, 10, 16.5, -20.2),
    e.col(VN).mat(0.85, 0.05, 0.02, 1),
    e.extrudeX(
      [-16.4, 16.6, -33.6, 16.6, HN, 21.2],
      -13.6,
      13.6,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.extrudeX(
      [-16.9, 8.1, -33.1, 8.1, -29, 10.2, -21, 10.2],
      -13.3,
      13.3,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.col(BN).mat(0.88, 0, 0.08, 1),
    e.box(-UN.x, 0, UN.z0, UN.x, UN.h, UN.z1, t.c(`granite`), 4, 4),
    e.box(-GN.x, 0, GN.z0, GN.x, 2.8, WN.z0),
    QN(e, 0.25, RN),
    e.box(-19.5, UN.h, KN, 19.5, 17.4, qN),
    e.col(VN).mat(0.85, 0.05, 0.02, 1),
    e.extrudeX(
      [31.75, 17.6, 1.75, 17.6, 15.25, 28, 18.25, 28],
      -26.4,
      26.4,
      !0,
      !0,
      t.c(`kawara`),
    ),
    QN(e, 0.2),
    e.box(nP.x - nP.hx + 1, 0, nP.z0 + 1, nP.x + nP.hx - 1, 8.5, nP.z1 - 1),
    e.box(JN.x - 3.3, 0, JN.z - 3.3, JN.x + 3.3, 7.9, JN.z + 3.3),
    e.col(VN).mat(0.85, 0.05, 0, 0),
    e.extrudeX(
      [nP.z1 + 1.6, 8.5, nP.z0 - 1.6, 8.5, (nP.z0 + nP.z1) / 2, 13.9],
      nP.x - nP.hx - 2.6,
      nP.x + nP.hx + 2.6,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.extrudeX(
      [JN.z + 5.4, 7.9, JN.z - 5.4, 7.9, JN.z, 11.5],
      JN.x - 5.4,
      JN.x + 5.4,
      !0,
      !0,
      t.c(`kawara`),
    ));
}
function rP(e, t, n, r, i, a, o, s, c) {
  return {
    x0: e.x - i,
    x1: e.x - n,
    z0: e.z + t,
    z1: e.z + r,
    y0: e.gy + a,
    y1: e.gy + o,
    rgb: s,
    glow: c,
  };
}
var iP = [0.5, 0.06, 0.03],
  aP = [0.22, 0.24, 0.26];
function Dbe(e, t) {
  return [
    rP(t, -10, -29.8, 10, -20.2, 0, 16.5, iP, 0.25),
    rP(t, -12.5, -32, 12.5, -18, 16.5, 20.5, aP),
    rP(t, -UN.x, UN.z0, UN.x, UN.z1, 0, UN.h, [0.6, 0.58, 0.54]),
    rP(t, -19.5, KN, 19.5, qN, UN.h, 17.4, iP, 0.2),
    rP(t, -25, 2.5, 25, 31, 17.4, 24, aP),
    rP(t, -16, 10.5, 16, 23, 24, 28.5, aP),
  ];
}
var Obe = {
    id: `zojoji`,
    name: { ja: `増上寺`, zh: `增上寺`, en: `Zojo-ji` },
    near: 260,
    build: Tbe,
    far: Ebe,
    farBoxes: Dbe,
    bounds: (e, t) => [t.x - 34, t.z - 66, t.x + 34, t.z + 66],
    blip: !1,
    anchors: [
      {
        key: `zojoji-gate`,
        lx: 0,
        lz: -34,
        turn: Math.PI,
        name: { zh: `增上寺 三解脫門`, en: `Zojo-ji Sangedatsumon gate` },
      },
      {
        key: `zojoji-court`,
        lx: 0,
        lz: GN.z0 - 4,
        turn: Math.PI,
        name: { zh: `增上寺 大殿`, en: `Zojo-ji Daiden (main hall)` },
      },
    ],
    roofs: [
      { lx0: -10.9, lz0: -30.5, lx1: 10.9, lz1: -19.5, y: 6.4 },
      { lx0: -5.8, lz0: WN.z0 - 1.6, lx1: 5.8, lz1: KN, y: 13.3 },
    ],
  },
  oP = { x: -215, z: 915 },
  sP = 4.75;
function* kbe(e, t) {
  let n = ZN(XN(t));
  for (let t of [-1, 1]) {
    let r = t * sP;
    (e.col(7105126).mat(0.9, 0, 0, 0),
      e.box(r - 0.68, 0, -0.68, r + 0.68, 0.45, 0.68),
      QN(e, 0.2),
      e.box(r - 0.55, 0.45, -0.55, r + 0.55, 7.4, 0.55),
      e.solid(r - 0.68, -0.68, r + 0.68, 0.68, 0, 7.4, `gate`),
      e.col(7105126).mat(0.9, 0, 0, 0),
      e.box(r - 0.42, 0, 2.18, r + 0.42, 0.35, 3.02),
      QN(e, 0.18),
      e.box(r - 0.3, 0.35, 2.3, r + 0.3, 4.6, 2.9),
      e.pole(r, 2.6, 0.45, 0, 4.6),
      e.box(r - 0.22, 3.6, 0.55, r + 0.22, 4.05, 2.3),
      e.box(r - 0.22, 1.2, 0.55, r + 0.22, 1.5, 2.3),
      e.mat(0.85, 0.05, 0.02, 1),
      cC(
        e,
        r,
        1.45,
        4.75,
        1.85,
        0.95,
        {
          ...n,
          rise: 0.75,
          eave: 0.5,
          thick: 0.18,
          ridgeH: 0.3,
          sori: 0.1,
          wallY: 4.6,
          wallInset: 0.3,
          wallColor: LN,
          rows: 3,
        },
        Math.PI / 2,
      ));
  }
  if (
    (QN(e, 0.18),
    e.box(-6.4, 6.55, -0.5, 6.4, 7.4, 0.5, e.white, 0, 0, null, !0),
    QN(e, 0.12, RN),
    e.box(-6, 7.4, -0.65, 6, 8.05, 0.65),
    !e.coarse)
  ) {
    for (let t of [-1, 1]) {
      let n = t * 0.53;
      (e.col(zN).mat(0.35, 0.8, 0.1, 1),
        t < 0
          ? e.panel(1.05, n, -1.05, n, 6.62, 7.33)
          : e.panel(-1.05, n, 1.05, n, 6.62, 7.33),
        e.col(1841431).mat(0.5, 0.2, 0, 0),
        t < 0
          ? e.panel(0.92, n - 0.02, -0.92, n - 0.02, 6.7, 7.25)
          : e.panel(-0.92, n + 0.02, 0.92, n + 0.02, 6.7, 7.25));
    }
    e.col(zN).mat(0.3, 0.85, 0.12, 1);
    for (let t of [-1, 1])
      for (let n of [5.2, 6.2])
        e.box(t * sP - 0.58, n, -0.58, t * sP + 0.58, n + 0.12, 0.58);
  }
  (e.mat(0.85, 0.05, 0.02, 1),
    cC(e, 0, 0, 8, 7.6, 2.1, {
      ...n,
      rise: 1.7,
      eave: 0.9,
      thick: 0.3,
      ridgeH: 0.6,
      sori: 0.3,
      wallY: 8.05,
      wallInset: 1.1,
      wallColor: LN,
      rows: 5,
    }),
    yield);
}
function Abe(e) {
  QN(e, 0.25);
  for (let t of [-1, 1])
    e.box(t * sP - 0.55, 0, -0.55, t * sP + 0.55, 7.4, 0.55);
  (e.box(-6.4, 6.55, -0.5, 6.4, 8.05, 0.5),
    e.col(VN).mat(0.85, 0.05, 0, 0),
    e.extrudeX([2.1, 8, -2.1, 8, 0, 9.7], -7.6, 7.6, !0, !0));
}
var jbe = {
  id: `zojoji-daimon`,
  site: (e) => ({
    x: oP.x,
    z: oP.z,
    gy: e.groundHeight(oP.x, oP.z),
    facing: Math.PI / 2,
  }),
  name: { ja: `増上寺 大門`, zh: `增上寺 大門`, en: `Zojo-ji Daimon Gate` },
  near: 230,
  build: kbe,
  far: Abe,
  farBoxes: (e, t) => [rP(t, -5.35, -0.6, 5.35, 0.6, 0, 9.5, iP, 0.2)],
  bounds: (e, t) => [t.x - 12, t.z - 12, t.x + 12, t.z + 12],
  blip: !1,
  roofs: [{ lx0: -7, lz0: -1.6, lx1: 7, lz1: 1.6, y: 6.55 }],
};
r.add({ "淺草寺 五重塔": `浅草寺 五重塔` });
var cP = Math.PI,
  lP = 1,
  uP = 13581599,
  dP = 10693143,
  fP = 15789024,
  pP = 14265157,
  mP = 13025460,
  hP = 7038544,
  gP = 5264474,
  _P = 6120299,
  vP = 2300181,
  Mbe = 13217140,
  yP = { x: 662, z: -1315 },
  bP = { x: 662, z: -1391.5 },
  xP = { x: 632, z: -1372 },
  SP = -34.5,
  CP = 5.45,
  wP = 11.45,
  TP = 21.6,
  EP = -29.5,
  DP = 0.6,
  OP = 24,
  kP = 2.4,
  Nbe = 11.6;
