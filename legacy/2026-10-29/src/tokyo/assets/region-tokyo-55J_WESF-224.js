// tokyo/assets/region-tokyo-55J_WESF 224 — box
// Lines 86702-87050 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ube(e) {
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
function* dbe(e, t, n) {
  let r = t.c(`gravel`),
    i = t.c(`paving`),
    a = e.coarse ? 16 : 8,
    o = -18.1;
  (e.col(14209991).mat(0.95, 0, 0, 0),
    e.flat(-62, -31.8, -11.2, -19, 0.04, r, a, a),
    e.flat(11.2, -31.8, 62, -19, 0.04, r, a, a),
    e.flat(-62, -19, -6.2, o, 0.04, r, a, a),
    e.flat(6.2, -19, 62, o, 0.04, r, a, a),
    e.flat(-62, o, 62, UN.z0 - 0.6, 0.04, r, a, a),
    e.flat(-62, UN.z0 - 0.6, -UN.x - 1, HN.z0, 0.04, r, a, a),
    e.flat(UN.x + 1, UN.z0 - 0.6, 62, HN.z0, 0.04, r, a, a),
    e.flat(-62, HN.z0, -HN.x, VN.z0, 0.04, r, a, a),
    e.flat(HN.x, HN.z0, 62, VN.z0, 0.04, r, a, a),
    e.flat(-62, VN.z0, -VN.x, 31.5, 0.04, r, a, a));
  let s = eP.x - eP.hx,
    c = eP.x + eP.hx;
  if (
    (e.flat(VN.x, VN.z0, s, 31.5, 0.04, r, a, a),
    e.flat(c, VN.z0, 62, 31.5, 0.04, r, a, a),
    e.flat(s, VN.z0, c, eP.z0 - 1.6, 0.04, r, a, a),
    e.flat(s, eP.z1, c, 31.5, 0.04, r, a, a),
    e.flat(-VN.x, VN.z1, VN.x, 31.5, 0.04, r, a, a),
    e.col(13617596).mat(0.85, 0, 0, 0),
    e.flat(-3.2, o, 3.2, UN.z0 - 0.6, 0.07, i, 3.2, 3.2),
    !e.coarse)
  ) {
    for (let t of [-16, -12.9]) for (let n of [-4.7, 4.7]) abe(e, n, t, 1);
    (HC(e, -20, -13.5, 8.5, 41), HC(e, 20, -13.5, 8, 42), HC(e, -30, 8, 9, 43));
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
      (UC(e, t, n, 12 + (r % 3) * 1.5, 4100 + r), e.pole(t, n, 0.4, 0, 5));
    for (let [t, n] of [
      [-20, -13.5],
      [20, -13.5],
      [-30, 8],
    ])
      e.pole(t, n, 0.35, 0, 4);
  }
  (yield, cbe(e, n), lbe(e, n), ube(e), yield);
}
function* fbe(e, t) {
  let n = JN(t);
  (yield* obe(e, t, n), yield* sbe(e, t, n), yield* dbe(e, t, n));
}
function pbe(e, t) {
  (XN(e, 0.25),
    e.box(-10, 0, -29.8, 10, 16.5, -20.2),
    e.col(zN).mat(0.85, 0.05, 0.02, 1),
    e.extrudeX(
      [-16.4, 16.6, -33.6, 16.6, BN, 21.2],
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
    e.col(RN).mat(0.88, 0, 0.08, 1),
    e.box(-VN.x, 0, VN.z0, VN.x, VN.h, VN.z1, t.c(`granite`), 4, 4),
    e.box(-UN.x, 0, UN.z0, UN.x, 2.8, HN.z0),
    XN(e, 0.25, IN),
    e.box(-19.5, VN.h, WN, 19.5, 17.4, GN),
    e.col(zN).mat(0.85, 0.05, 0.02, 1),
    e.extrudeX(
      [31.75, 17.6, 1.75, 17.6, 15.25, 28, 18.25, 28],
      -26.4,
      26.4,
      !0,
      !0,
      t.c(`kawara`),
    ),
    XN(e, 0.2),
    e.box(eP.x - eP.hx + 1, 0, eP.z0 + 1, eP.x + eP.hx - 1, 8.5, eP.z1 - 1),
    e.box(KN.x - 3.3, 0, KN.z - 3.3, KN.x + 3.3, 7.9, KN.z + 3.3),
    e.col(zN).mat(0.85, 0.05, 0, 0),
    e.extrudeX(
      [eP.z1 + 1.6, 8.5, eP.z0 - 1.6, 8.5, (eP.z0 + eP.z1) / 2, 13.9],
      eP.x - eP.hx - 2.6,
      eP.x + eP.hx + 2.6,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.extrudeX(
      [KN.z + 5.4, 7.9, KN.z - 5.4, 7.9, KN.z, 11.5],
      KN.x - 5.4,
      KN.x + 5.4,
      !0,
      !0,
      t.c(`kawara`),
    ));
}
function tP(e, t, n, r, i, a, o, s, c) {
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
var nP = [0.5, 0.06, 0.03],
  rP = [0.22, 0.24, 0.26];
function mbe(e, t) {
  return [
    tP(t, -10, -29.8, 10, -20.2, 0, 16.5, nP, 0.25),
    tP(t, -12.5, -32, 12.5, -18, 16.5, 20.5, rP),
    tP(t, -VN.x, VN.z0, VN.x, VN.z1, 0, VN.h, [0.6, 0.58, 0.54]),
    tP(t, -19.5, WN, 19.5, GN, VN.h, 17.4, nP, 0.2),
    tP(t, -25, 2.5, 25, 31, 17.4, 24, rP),
    tP(t, -16, 10.5, 16, 23, 24, 28.5, rP),
  ];
}
var hbe = {
    id: `zojoji`,
    name: { ja: `増上寺`, zh: `增上寺`, en: `Zojo-ji` },
    near: 260,
    build: fbe,
    far: pbe,
    farBoxes: mbe,
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
        lz: UN.z0 - 4,
        turn: Math.PI,
        name: { zh: `增上寺 大殿`, en: `Zojo-ji Daiden (main hall)` },
      },
    ],
    roofs: [
      { lx0: -10.9, lz0: -30.5, lx1: 10.9, lz1: -19.5, y: 6.4 },
      { lx0: -5.8, lz0: HN.z0 - 1.6, lx1: 5.8, lz1: WN, y: 13.3 },
    ],
  },
  iP = { x: -215, z: 915 },
  aP = 4.75;
function* gbe(e, t) {
  let n = YN(JN(t));
  for (let t of [-1, 1]) {
    let r = t * aP;
    (e.col(7105126).mat(0.9, 0, 0, 0),
      e.box(r - 0.68, 0, -0.68, r + 0.68, 0.45, 0.68),
      XN(e, 0.2),
      e.box(r - 0.55, 0.45, -0.55, r + 0.55, 7.4, 0.55),
      e.solid(r - 0.68, -0.68, r + 0.68, 0.68, 0, 7.4, `gate`),
      e.col(7105126).mat(0.9, 0, 0, 0),
      e.box(r - 0.42, 0, 2.18, r + 0.42, 0.35, 3.02),
      XN(e, 0.18),
      e.box(r - 0.3, 0.35, 2.3, r + 0.3, 4.6, 2.9),
      e.pole(r, 2.6, 0.45, 0, 4.6),
      e.box(r - 0.22, 3.6, 0.55, r + 0.22, 4.05, 2.3),
      e.box(r - 0.22, 1.2, 0.55, r + 0.22, 1.5, 2.3),
      e.mat(0.85, 0.05, 0.02, 1),
      aC(
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
          wallColor: FN,
          rows: 3,
        },
        Math.PI / 2,
      ));
  }
  if (
    (XN(e, 0.18),
    e.box(-6.4, 6.55, -0.5, 6.4, 7.4, 0.5, e.white, 0, 0, null, !0),
    XN(e, 0.12, IN),
    e.box(-6, 7.4, -0.65, 6, 8.05, 0.65),
    !e.coarse)
  ) {
    for (let t of [-1, 1]) {
      let n = t * 0.53;
      (e.col(LN).mat(0.35, 0.8, 0.1, 1),
        t < 0
          ? e.panel(1.05, n, -1.05, n, 6.62, 7.33)
          : e.panel(-1.05, n, 1.05, n, 6.62, 7.33),
        e.col(1841431).mat(0.5, 0.2, 0, 0),
        t < 0
          ? e.panel(0.92, n - 0.02, -0.92, n - 0.02, 6.7, 7.25)
          : e.panel(-0.92, n + 0.02, 0.92, n + 0.02, 6.7, 7.25));
    }
    e.col(LN).mat(0.3, 0.85, 0.12, 1);
    for (let t of [-1, 1])
      for (let n of [5.2, 6.2])
        e.box(t * aP - 0.58, n, -0.58, t * aP + 0.58, n + 0.12, 0.58);
  }
  (e.mat(0.85, 0.05, 0.02, 1),
    aC(e, 0, 0, 8, 7.6, 2.1, {
      ...n,
      rise: 1.7,
      eave: 0.9,
      thick: 0.3,
      ridgeH: 0.6,
      sori: 0.3,
      wallY: 8.05,
      wallInset: 1.1,
      wallColor: FN,
      rows: 5,
    }),
    yield);
}
function _be(e) {
  XN(e, 0.25);
  for (let t of [-1, 1])
    e.box(t * aP - 0.55, 0, -0.55, t * aP + 0.55, 7.4, 0.55);
  (e.box(-6.4, 6.55, -0.5, 6.4, 8.05, 0.5),
    e.col(zN).mat(0.85, 0.05, 0, 0),
    e.extrudeX([2.1, 8, -2.1, 8, 0, 9.7], -7.6, 7.6, !0, !0));
}
var vbe = {
  id: `zojoji-daimon`,
  site: (e) => ({
    x: iP.x,
    z: iP.z,
    gy: e.groundHeight(iP.x, iP.z),
    facing: Math.PI / 2,
  }),
  name: { ja: `増上寺 大門`, zh: `增上寺 大門`, en: `Zojo-ji Daimon Gate` },
  near: 230,
  build: gbe,
  far: _be,
  farBoxes: (e, t) => [tP(t, -5.35, -0.6, 5.35, 0.6, 0, 9.5, nP, 0.2)],
  bounds: (e, t) => [t.x - 12, t.z - 12, t.x + 12, t.z + 12],
  blip: !1,
  roofs: [{ lx0: -7, lz0: -1.6, lx1: 7, lz1: 1.6, y: 6.55 }],
};
r.add({ "淺草寺 五重塔": `浅草寺 五重塔` });
var oP = Math.PI,
  sP = 1,
  cP = 13581599,
  lP = 10693143,
  uP = 15789024,
  dP = 14265157,
  fP = 13025460,
  pP = 7038544,
  mP = 5264474,
  hP = 6120299,
  gP = 2300181,
  ybe = 13217140,
  _P = { x: 662, z: -1315 },
  vP = { x: 662, z: -1391.5 },
  yP = { x: 632, z: -1372 },
  bP = -34.5,
  xP = 5.45,
  SP = 11.45,
  CP = 21.6,
  wP = -29.5,
  TP = 0.6,
  EP = 24,
  DP = 2.4,
  bbe = 11.6;
