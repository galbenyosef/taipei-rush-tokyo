// tokyo__assets__region-tokyo-BcM3fReU 151 — col
// Lines 64742-65090 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function _I(e, t, n) {
  (e.push().col(6050376).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, 9, n, 0.55, 8, 0.35));
  for (let [r, i, a] of [
    [0.4, 5.5, 3.2],
    [2.3, 6.5, 3],
    [4.1, 7.2, 2.8],
    [5.5, 8.5, 2.4],
  ])
    e.rod(
      t,
      i,
      n,
      t + Math.cos(r) * a,
      i + 2.2,
      n + Math.sin(r) * a,
      0.2,
      5,
      0.1,
    );
  let r = [
      [t, 12, n, 4.4, 8],
      [t + 2.6, 9.5, n - 1.4, 2.8, 4.5],
      [t - 2.8, 10, n + 0.6, 2.9, 4.5],
      [t + 1.2, 15.5, n - 0.8, 3.2, 5.5],
      [t - 1.4, 15, n + 1.2, 3, 5],
      [t + 0.3, 19, n + 0.2, 2.2, 4],
      [t + 3, 13, n + 1.5, 2.4, 4],
      [t - 3, 13.5, n - 1.4, 2.3, 4],
    ],
    i = 0;
  for (let [t, n, a, o, s] of r) {
    if (e.coarse && i++ > 3) break;
    (e.col(7310654, 0.9 + (i % 3) * 0.07).emis(n < 13 ? 0.05 : 0, 1),
      e.lathe(
        t,
        a,
        [
          0.05,
          n - s * 0.5,
          o * 0.62,
          n - s * 0.4,
          o * 0.93,
          n - s * 0.18,
          o,
          n,
          o * 0.92,
          n + s * 0.2,
          o * 0.62,
          n + s * 0.4,
          0.05,
          n + s * 0.5,
        ],
        e.coarse ? 7 : 11,
        t * 1.7,
        e.white,
        !1,
        !0,
      ));
  }
  (e.pop(), e.pole(t, n, 0.7, 0, 6));
}
function* vI(e, t) {
  let n = t.c(`granite`);
  (e.col(12169893).mat(0.9, 0, 0.1, Y),
    e.box(-4.6, 0, -4.1, KF, JF, qF, n, 1.9, 1),
    e.col(14275786).flat(-4.6, -4.1, KF, qF, 0.424, t.c(`paving`), 1.6, 1.6),
    e
      .col(12893874)
      .box(-2.2, 0, -4.1 - 0.55, 2.2, JF / 2, -4.1, n, 1.9, 1, t.c(`paving`)),
    e.floor(-4.6, -4.1, KF, qF, JF, JF, `platform`),
    e.floor(-2.2, -4.1 - 0.55, 2.2, -4.1, JF / 2, JF / 2, `platform`));
  let r = JF;
  (e.col(14142905).mat(0.85, 0, 0.14, Y),
    e.box(-1.53, r, -1.28, 1.53, 0.6699999999999999, 1.28, n, 1.8, 1.8),
    e
      .emis(0.05, Y)
      .sweep(
        [-1.25, -1, YF, -1, YF, XF, -1.25, XF],
        [0.26, 0.6699999999999999, 0.2, 0.76, 0.09, 0.84, 0.05, 0.94, 0, 0.98],
        !0,
      ),
    e
      .emis(0.16, Y)
      .wall(YF, -1, -1.25, -1, 0.6699999999999999, QF, n, 1.9, 1.8, 0.1),
    e.wall(-1.25, XF, YF, XF, 0.6699999999999999, QF, n, 1.9, 1.8, 0.1),
    e
      .emis(0.18, Y)
      .wall(-1.25, -1, -1.25, XF, 0.6699999999999999, QF, n, 1.9, 1.8, 0.1),
    e
      .emis(0.18, Y)
      .wall(YF, XF, YF, -1, 0.6699999999999999, QF, n, 1.9, 1.8, 0.1),
    e.emis(0.05, Y),
    e.sweep([-1.25, -1, YF, -1, YF, XF, -1.25, XF], VD(QF, 0.28, 0.36), !0),
    e.box(-1.58, 2.86, -1.33, 1.58, ZF, 1.33, n, 1.8, 0.2),
    e.col(16777215).mat(0.45, 0.6, 0.1, Y),
    e.panel(0.66, -1.03, -0.66, -1.03, 1.14, 2.24, t.c(`saigoPlaque`)),
    e.solid(-1.53, -1.28, 1.53, 1.28, 0, 3.42, `wall`),
    e.col(4872784).mat(0.55, 0.35, 0.2, 1),
    e.box(-1.05, ZF, -0.88, 1.4, 3.36, 0.78),
    e.col(5662812).box(-1, 3.36, -0.83, 1.35, 3.44, 0.73),
    yield);
  let i = e.sub(0, $F, 0, 0);
  if ((yield* gI(e), e.leave(i), yield, _I(e, -1.6, 9.5), !e.coarse)) {
    (e.col(3889711).mat(0.95, 0, 0, 0),
      e.box(-4.8, 0, 4.5, 4.8, 0.95, 5.3999999999999995));
    for (let t of [1, -1])
      e.box(
        t > 0 ? 5.1 : -6,
        0,
        -1,
        t > 0 ? 6 : -5.1,
        0.95,
        5.3999999999999995,
      );
    e.col(1974048).mat(0.5, 0.6, 0, 0);
    for (let t of [1, -1]) {
      let n = t * 4.949999999999999;
      e.box(n - 0.03, 0.62, -1, n + 0.03, 0.68, 4.3999999999999995);
      for (let t = -1; t <= 4.409999999999999; t += 1.3)
        e.box(n - 0.03, 0, t - 0.03, n + 0.03, 0.68, t + 0.03);
    }
    (e.col(11907240).mat(0.85, 0, 0.06, Y),
      e.box(5.5, 0, -0.82, 7.1, 2.25, -0.38, n, 1.6, 1.6),
      e.col(2039583).mat(0.35, 0.2, 0.05, Y),
      e.panel(6.95, -0.83, 5.6499999999999995, -0.83, 0.45, 1.95),
      PD(e, 6.3, -0.6, 2.25, 1.05, 0.5, {
        rise: 0.3,
        color: 11117982,
        band: 10657431,
        soffit: 9407364,
        ridgeH: 0.1,
        ridgeColor: 10328466,
        eave: 0.18,
        thick: 0.1,
        wallY: 2.25,
        wallInset: 0.18,
        wallColor: 11907240,
        rows: 2,
      }),
      e.solid(
        5.45,
        -0.8999999999999999,
        7.1499999999999995,
        -0.3,
        0,
        2.6,
        `wall`,
      ));
    for (let t of [1, -1])
      (e
        .col(2763306)
        .mat(0.5, 0.5, 0, 0)
        .box(t * 1.9 - 0.18, JF, -3.4, t * 1.9 + 0.18, 0.64, -3),
        e
          .col(16773840)
          .mat(0.3, 0, 0.9, 1)
          .box(
            t * 1.9 - 0.13,
            0.64,
            -3.35,
            t * 1.9 + 0.13,
            0.6599999999999999,
            -3.05,
          ));
  }
  e.solid(-4.8, 4.5, 4.8, 5.3999999999999995, 0, 0.95, `wall`);
}
function yI(e, t) {
  (e.col(14142905).mat(0.85, 0, 0.18, Y),
    e.box(-1.53, 0, -1.28, 1.53, ZF, 1.28, t.c(`granite`), 3.4, 3.4),
    e.col(5597276).mat(0.6, 0.3, 0.2, 1),
    e.lathe(
      0,
      0,
      [
        0.62,
        $F,
        0.6,
        5.34,
        0.6,
        6.34,
        0.22,
        6.49,
        0.25,
        7.04,
        0.05,
        7.140000000000001,
      ],
      6,
    ),
    e.col(7311168).mat(0.95, 0, 0, 0),
    e.lathe(-1.6, 9.5, [0.3, 0, 4.6, 9, 3.4, 15, 0.2, 21], 5));
}
function bI(e) {
  return { x: GF.x, z: GF.z, gy: e.groundHeight(GF.x, GF.z), facing: Math.PI };
}
function xI(e, t) {
  return [
    {
      x0: t.x - YF,
      x1: t.x + YF,
      z0: t.z - XF,
      z1: t.z + XF,
      y0: t.gy,
      y1: t.gy + $F + 3.7,
      rgb: [0.55, 0.52, 0.46],
    },
  ];
}
var SI = {
    id: `saigo`,
    site: bI,
    name: {
      ja: `西郷隆盛像`,
      zh: `西鄉隆盛像`,
      en: `Statue of Saigo Takamori`,
    },
    near: 200,
    build: vI,
    far: yI,
    farBoxes: xI,
    bounds: (e, t) => [t.x - 22, t.z - 22, t.x + 22, t.z + 22],
    blip: !0,
    anchors: [
      {
        key: `saigo-front`,
        lx: 0,
        lz: -8.5,
        turn: Math.PI,
        name: { zh: `西鄉隆盛像 正面`, en: `Statue of Saigo Takamori, front` },
      },
    ],
  },
  CI = Zc.west,
  wI = Zc.hall,
  TI = Zc.central,
  EI = Zc.east,
  DI = Zc.deck,
  OI = Zc.lotZ,
  kI = 13812148,
  AI = 12291968,
  jI = 12764094,
  MI = 6973542,
  NI = 15131869,
  PI = 11848794,
  FI = 15392978,
  II = 15526370,
  LI = 8365775,
  RI = 4013633,
  zI = 13136940,
  BI = 5.6,
  VI = 9.3,
  HI = 10.6,
  UI = 12.6,
  WI = 13.4,
  GI = 20.3,
  KI = 24.5,
  qI = 25.6,
  JI = 26.4,
  yte = 22.4,
  YI = 16,
  XI = 16.8,
  ZI = 18.4,
  QI = -118.6,
  $I = 8,
  eL = 1.9,
  bte = 2.9,
  tL = (TI.x0 + TI.x1) / 2,
  nL = (e) => tL + (e - 7 / 2) * bte,
  xte = (e) => TI.x0 + ((TI.x1 - TI.x0) * (e + 1)) / 6,
  rL = -1204.5,
  iL = { z0: -1197, z1: -1190.5, x0: -101, x1: -49 },
  aL = [-101, -95.5],
  oL = [-54.5, -49],
  sL = -1158.2,
  Ste = [-1184.2, -1160.3],
  cL = { x0: DI.x1, x1: DI.x1 + 11.2, z0: -1160.4, z1: -1158.2 },
  lL = { x0: DI.x0 - 11.2, x1: DI.x0, z0: -1185.6, z1: -1183.4 },
  uL = {
    o0: -116.5,
    o1: -108.5,
    open: 4.6,
    can0: -119.2,
    can1: -102.5,
    canZ: -1195,
    bay0: -117,
    bay1: -106.5,
  },
  Cte = { x: -109.6, z: -1187.6, r: 3, h: 0.55, turn: Math.PI + 0.35 },
  wte = { x0: -106.5, x1: -101.3, z0: -1194.5, z1: -1189.6, h: 4.2 },
  Tte = Zc.vision,
  dL = {
    x0: tL - 12.6,
    x1: tL + 10,
    y0: 26.65,
    h: 2.8,
    zf: TI.zf - 0.8,
    d: 0.22,
  },
  Ete = 260;
function fL(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  (e.quad(t, n, r, i, a, o, s, c, l, u, d, f),
    e.quad(u, d, f, s, c, l, i, a, o, t, n, r));
}
function pL(e, t, n, r, i, a, o, s) {
  e.flat(t, n, r, i, a, o, s, s);
}
function* Dte(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 12 : 3;
  if (
    (e.col(14867922).mat(0.85, 0, 0.03, Y),
    pL(e, TI.x0, TI.base, EI.x1, iL.z0, 0.06, n, r),
    pL(e, EI.x0, EI.zf, EI.x1, TI.base, 0.06, n, r),
    pL(e, EI.x1, EI.zf, -47, iL.z0, 0.06, n, r),
    pL(e, iL.x1, iL.z0, -47, OI, 0.06, n, r),
    pL(e, aL[1], iL.z1, oL[0], OI, 0.06, n, r),
    e.col(15326408),
    pL(e, CI.x0, CI.zf, CI.x1, OI, 0.06, n, e.coarse ? 12 : 2.4),
    e.col(RI).mat(0.92, 0, 0, 0),
    pL(e, iL.x0, iL.z0, iL.x1, iL.z1, 0.04, e.white, 0),
    pL(e, aL[0], iL.z1, aL[1], OI, 0.04, e.white, 0),
    pL(e, oL[0], iL.z1, oL[1], OI, 0.04, e.white, 0),
    !e.coarse)
  ) {
    (e.col(15658730).mat(0.7, 0, 0.04, Y),
      e.flat(iL.x0 + 6, iL.z0 + 0.25, iL.x1 - 6, iL.z0 + 0.4, 0.05),
      e.flat(aL[1], iL.z1 - 0.4, oL[0], iL.z1 - 0.25, 0.05));
    for (let t = -88; t < -56; t += 5.5)
      e.flat(t, iL.z0 + 0.4, t + 0.15, iL.z0 + 2.4, 0.05);
    for (let [t, n] of [aL, oL])
      for (let r = iL.z1 + 0.8; r < OI - 0.5; r += 1.2)
        e.flat(t + 0.6, r, n - 0.6, r + 0.45, 0.05);
    for (let t = -83.5; t < -79; t += 0.9)
      e.flat(t, iL.z0 + 0.3, t + 0.45, iL.z1 - 0.3, 0.05);
    (e.col(12433582).mat(0.85, 0, 0, 0),
      e.box(iL.x0, 0, iL.z0 - 0.2, iL.x1, 0.14, iL.z0),
      e.box(aL[1], 0, iL.z1, oL[0], 0.14, iL.z1 + 0.2),
      e.box(aL[1] - 0.2, 0, iL.z1, aL[1], 0.14, OI),
      e.box(oL[0], 0, iL.z1, oL[0] + 0.2, 0.14, OI),
      yield);
    for (let [t, n] of [
      [aL[1] + 0.6, -84.2],
      [-78.4, oL[0] - 0.6],
    ])
      Ote(e, t, n, iL.z1 + 0.45);
  }
}
