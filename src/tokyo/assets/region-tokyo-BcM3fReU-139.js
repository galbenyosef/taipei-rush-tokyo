// tokyo/assets/region-tokyo-BcM3fReU 139 — col
// Lines 60907-61239 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function yN(e, t) {
  (e.col(13129802).mat(0.85, 0, 0.18, Y),
    e.lathe(0, FM, [LM, 0, LM, VM], 8, dN, t.c(`benWall`)),
    e.lathe(0, FM, [RM, VM, RM, GM], 8, dN, t.c(`benWall`)),
    e.col(7106936).mat(0.8, 0, 0, 0),
    e.lathe(0, FM, [8.6, HM, RM, UM], 8, dN),
    e.col(5612947).mat(0.6, 0.2, 0, 0),
    e.lathe(0, FM, [7.6, GM, 0.5, 15.600000000000001], 8, dN),
    e.col(sN).mat(0.4, 0.8, 0.2, 1),
    e.lathe(0, FM, [0.6, 15.600000000000001, 0.45, 16.9, 0.02, 18.1], 4),
    e.col(13129802).mat(0.85, 0, 0.18, Y),
    e.box(-8.2, 0, qM, KM, VM, 0, t.c(`benWall`), 4, VM),
    e.col(7106936).mat(0.8, 0, 0, 0),
    e.extrudeX([3, 6.4, -9.8, 6.4, -3.4, 10.3], -10, 10, !0, !0));
}
function bN(e, t) {
  return [
    {
      x0: t.x - 13,
      x1: t.x + 9.8,
      z0: t.z - 9.4,
      z1: t.z + 9.4,
      y0: t.gy,
      y1: t.gy + 7,
      rgb: [0.55, 0.16, 0.1],
      lit: !0,
    },
    {
      x0: t.x - 10.5,
      x1: t.x + 0.1,
      z0: t.z - 4.8,
      z1: t.z + 4.8,
      y0: t.gy + 7,
      y1: t.gy + 16,
      rgb: [0.2, 0.42, 0.36],
    },
  ];
}
var xN = {
    id: `bentendo`,
    name: {
      ja: `不忍池弁天堂`,
      zh: `不忍池辯天堂`,
      en: `Shinobazunoike Bentendo`,
    },
    site: (e) => {
      let t = e.landmark(`bentendo`),
        n = t ? t.x : -354,
        r = t ? t.z : -1079;
      return { x: n, z: r, gy: e.groundHeight(n, r), facing: Math.PI / 2 };
    },
    near: 220,
    build: vN,
    far: yN,
    farBoxes: bN,
    blip: !0,
    anchors: [
      {
        key: `bentendo-front`,
        lx: 0,
        lz: -22,
        turn: Math.PI,
        name: { zh: `不忍池辯天堂 參道`, en: `Bentendo approach` },
      },
      {
        key: `bentendo-bank`,
        lx: 0,
        lz: -120,
        turn: Math.PI,
        name: { zh: `不忍池辯天堂 參道入口`, en: `Bentendo approach entrance` },
      },
    ],
  },
  SN = { x: -98.5, z: -631.5 },
  CN = -12,
  wN = 12,
  TN = 12.75,
  EN = -6.5,
  DN = 18.5,
  ON = 4.6,
  kN = 9.6,
  AN = 9.6,
  jN = 4.2,
  MN = 8,
  NN = 43.2,
  PN = 44.6,
  FN = 46.5,
  IN = 0.8,
  LN = 0.28,
  RN = -1.6,
  zN = 5.5,
  BN = 0.9,
  VN = -110.75 - SN.x,
  HN = -86.25 - SN.x,
  UN = -638 - SN.z,
  WN = -684.5 - SN.z,
  GN = -655 - SN.z,
  KN = -650.2 - SN.z,
  qN = 5,
  JN = 4,
  YN = 10,
  XN = 45,
  ZN = 4.5,
  QN = 15527660,
  $N = 15922161,
  eP = 16777215,
  tP = 0.05;
function nP(e) {
  let t = (t, n, r, i, a) => e.A.sub(t, n, r, i, a),
    n = 256 / 320,
    r = (e) => ((wN - e) / DN) * n,
    i = 1 - 80 / 144;
  return {
    glass: (e, n, i) => t(`akibaGlass`, r(n), e / 8, r(i), (e + 1) / 8),
    billboard: t(`akibaGlass`, r(zN), 0, r(EN), 2 / 8),
    side: t(`akibaGlass`, n, 1 - 275 / 352, 1, 1),
    band: t(`akibaFront`, 0, i, 376 / 512, 1),
    led: t(`akibaFront`, 376 / 512, i, 1, 1),
    shop: t(`akibaFront`, 0, 0, 1, i),
    tenant: t(`akibaSigns`, 0, 0, 24 / 128, 1),
    lantern: t(`akibaSigns`, 24 / 128, 1 - 40 / 64, 40 / 128, 1),
    posters: t(`akibaSigns`, 40 / 128, 0, 1, 1),
  };
}
function* rP(e, t) {
  let n = nP(t);
  for (let r = 0; r < MN; r++) {
    let i = AN + r * jN,
      a = i + IN,
      o = i + jN;
    (e.col(16777215).mat(0.18, 0.1, 0.3, Y),
      r < 2
        ? e.panel(wN, 0, zN, 0, a, o, n.glass(r, wN, zN))
        : e.panel(wN, 0, EN, 0, a, o, n.glass(r, wN, EN)),
      e.col(QN).mat(0.45, 0.25, 0.1, Y),
      e.panel(wN, -0.28, EN, -0.28, i, a, t.c(`white`)),
      e.flat(EN, -0.28, wN, 0, a),
      e.col(QN, 0.8).flat(EN, -0.28, wN, 0, i, t.c(`white`), 0, 0, !1));
  }
  if (
    (e.col(QN).mat(0.45, 0.25, 0.1, Y),
    e.panel(wN, -0.28, EN, -0.28, NN, PN, t.c(`white`)),
    e.flat(EN, -0.28, wN, 0.3, PN),
    !e.coarse)
  ) {
    e.col(14672612).mat(0.4, 0.5, 0.05, Y);
    let n = Math.round(DN / 1.42);
    for (let r = 0; r <= n; r++) {
      let i = wN - (DN * r) / n;
      for (let a = 0; a < MN; a++) {
        if (a < 2 && i < 5.4) continue;
        let o = AN + a * jN + IN,
          s = AN + (a + 1) * jN,
          c = r === 0 || r === n ? 0.14 : 0.05,
          l = r === 0 || r === n ? LN : 0.14;
        (e.panel(i + c, -l, i - c, -l, o, s, t.c(`white`)),
          e.panel(i + c, 0, i + c, -l, o, s, t.c(`white`)),
          e.panel(i - c, -l, i - c, 0, o, s, t.c(`white`)));
      }
    }
  }
  yield;
  {
    let r = 9.85,
      i = 17.85;
    if (
      (e.col(16777215).mat(0.5, 0, 0.32, Y),
      e.panel(zN, -0.55, -6.35, -0.55, r, i, n.billboard),
      e.col(9343638).mat(0.5, 0.6, 0, 0),
      e.flat(-6.35, -0.55, zN, 0, i),
      e.flat(-6.35, -0.55, zN, 0, r, t.c(`white`), 0, 0, !1),
      e.panel(zN, 0, zN, -0.55, r, i),
      e.panel(-6.35, -0.55, -6.35, 0, r, i),
      !e.coarse)
    ) {
      e.col(5593438).mat(0.5, 0.6, 0, 0);
      for (let t = 0; t < 5; t++) {
        let n = 4.5 - (10 / 4) * t;
        (e.box(
          n - 0.04,
          17.900000000000002,
          -0.55 - 0.9,
          n + 0.04,
          17.970000000000002,
          -0.55,
        ),
          e.col(16052448).mat(0.3, 0, 0.9, 1),
          e.box(n - 0.18, 17.8, -1.6, n + 0.18, 17.970000000000002, -1.4),
          e.col(5593438).mat(0.5, 0.6, 0, 0));
      }
    }
  }
  (e.col(16777215).mat(0.45, 0.1, 0.5, Y),
    e.panel(wN, -0.7, RN, -0.7, ON, kN, n.band),
    e.col(14263040).mat(0.5, 0.3, 0.2, Y),
    e.panel(wN, 0, wN, -0.7, ON, kN, t.c(`white`)),
    e.flat(RN, -0.7, wN, 0, kN),
    e.col(16053488).mat(0.6, 0, 0.35, 1),
    e.flat(CN, -0.7, wN, BN, ON, t.c(`white`), 0, 0, !1),
    e.col(16053490).mat(0.4, 0.2, 0.08, Y),
    e.box(-6.45, 4.85, -0.95, -1.6500000000000001, 9.45, 0),
    e.col(16777215).mat(0.3, 0, 0.38, 2),
    e.panel(-1.87, -0.97, -6.23, -0.97, 5.1, 9.2, n.led),
    e.col(QN).mat(0.45, 0.25, 0.1, Y),
    e.panel(RN, -0.7, RN, 0, ON, kN),
    yield,
    e.col(16777215).mat(0.25, 0.1, 0.55, Y),
    e.panel(wN, BN, CN, BN, 0, ON, n.shop),
    e.col(QN).mat(0.45, 0.2, 0.06, Y));
  for (let [t, n] of [
    [11.3, wN],
    [3.4, 2.9],
    [-1, -1.5],
    [-6.3, -6.8],
    [CN, -11.4],
  ])
    (e.box(Math.min(t, n), 0, -0.05, Math.max(t, n), ON, BN),
      e.solid(Math.min(t, n), -0.05, Math.max(t, n), BN, 0, ON));
  if (!e.coarse) {
    (e.col(5921888).mat(0.9, 0, 0, 0),
      e.flat(-1, -0.6, 2.9, BN, 0.03),
      e.col(12109004).mat(0.15, 0.3, 0.12, 1),
      e.flat(CN, -1.6, EN, 0, 4.05),
      e.flat(CN, -1.6, EN, 0, 3.98, t.c(`white`), 0, 0, !1),
      e.col(9343638).mat(0.5, 0.6, 0, 0),
      e.rod(-11.6, 4, -1.5, -11.6, 4.6, 0, 0.03, 4),
      e.rod(-6.9, 4, -1.5, -6.9, 4.6, 0, 0.03, 4));
    for (let t of [8.6, 10.4]) {
      (e.col(15921386).mat(0.7, 0, 0.1, 1),
        e.box(t - 0.7, 0, -0.2, t + 0.7, 1.4, 0.5));
      for (let n = 0; n < 4; n++)
        (e.col([15224922, 3832536, 15909424, 5943386][n]).mat(0.6, 0, 0.1, 1),
          e.box(
            t - 0.65 + n * 0.33,
            0.5,
            -0.24,
            t - 0.38 + n * 0.33,
            1.3,
            -0.2,
          ));
      e.solid(t - 0.7, -0.2, t + 0.7, 0.5, 0, 1.4);
    }
  }
  if (
    (yield,
    e.col(15264746).mat(0.6, 0, 0.3, Y),
    e.panel(EN, -0.02, CN, -0.02, ON, FN, t.c(`white`)),
    !e.coarse)
  ) {
    e.col($N).mat(0.45, 0.3, 0.02, Y);
    for (let n = 0; n <= 11; n++) {
      let r = EN - (5.5 * n) / 11,
        i = n === 0 || n === 11 ? 0.12 : 0.07,
        a = Math.min(wN, r + i),
        o = Math.max(CN, r - i);
      (e.panel(a, -0.42, o, -0.42, ON, FN, t.c(`white`)),
        e.panel(a, -0.02, a, -0.42, ON, FN, t.c(`white`)),
        e.panel(o, -0.42, o, -0.02, ON, FN, t.c(`white`)));
    }
    for (let t = 4.8; t < FN; t += jN * 2)
      e.box(CN, t, -0.5, EN, t + 0.18, -0.02);
  }
  (e.col($N).mat(0.5, 0.2, 0.08, Y),
    e.flat(CN, -0.45, EN, TN, FN),
    e.col(16185332).mat(0.5, 0.15, 0.08, Y),
    e.wall(wN, TN, wN, -0.28, 0, PN, t.c(`plaster`), 8.5, 8.4),
    e.wall(CN, -0.45, CN, TN, 0, FN, t.c(`plaster`), 8.5, 8.4),
    e.wall(CN, TN, wN, TN, 0, PN, t.c(`plaster`), 8, 8.4),
    e.col(10465466).mat(0.2, 0.2, 0.35, Y | 32));
  for (let n = 0; n < MN; n++) {
    let r = AN + n * jN + 1.3;
    e.panel(-5, 12.78, 10, 12.78, r, r + 1.6, t.c(`office`));
  }
  if (
    (e.col(16777215).mat(0.25, 0.1, 0.5, Y),
    e.wall(
      12.03,
      9.5,
      12.03,
      1.2,
      0,
      3.9999999999999996,
      t.c(`doors`),
      2.75,
      3.9999999999999996,
    ),
    e.col(3816770).mat(0.5, 0.3, 0.05, Y),
    e.wall(12.05, 9.7, 12.05, 1, 3.9999999999999996, 4.5, t.c(`white`), 20, 1),
    e.solid(11.8, 0, 12.1, TN, 0, ON),
    e.col(16777215).mat(0.5, 0, 0.3, Y),
    e.panel(12.04, 10.4, 12.04, 2.6, 13.2, 41.2, n.side),
    e.col(9079950).mat(0.85, 0, 0, 0),
    e.flat(EN, 0.3, wN, TN, 43.25),
    e.col(15659246).mat(0.55, 0.15, 0.06, Y),
    e.box(EN, NN, 12.45, wN, PN, TN),
    e.box(11.7, NN, 0.3, wN, PN, TN),
    !e.coarse)
  ) {
    e.col(7238520).mat(0.5, 0.6, 0, 0);
    for (let t of [-5.5, -0.5, 4.5, 9.5])
      for (let n of [4.5, 10.5])
        e.box(t - 0.15, NN, n - 0.15, t + 0.15, 46.400000000000006, n + 0.15);
    (e.box(-5.6, 46.400000000000006, 4.3, 9.6, 46.7, 10.7),
      e.col(14211803).mat(0.6, 0.2, 0, 0));
    for (let t = 0; t < 6; t++)
      e.box(-5 + t * 2.4, 46.7, 5, -3.2 + t * 2.4, 48.1, 6.4);
    for (let t = 0; t < 5; t++)
      e.box(-4.5 + t * 2.8, 43.25, 7, -2.6 + t * 2.8, 45.300000000000004, 9.6);
  }
  (e.solid(CN, BN, wN, TN, 0, ON),
    e.solid(CN, -0.7, wN, TN, ON, FN),
    e.solid(CN, -0.05, EN, BN, 0, ON));
}
function iP(e, t, n, r) {
  let i = 5.4,
    a = 0.22;
  (e.col(4540492).mat(0.55, 0.5, 0, 0),
    e.box(n - 0.11, tP, r - 0.11, n + 0.11, i, r + 0.11),
    e.box(n - 0.2, tP, r - 0.2, n + 0.2, 0.55, r + 0.2),
    e.col(16777215).mat(0.3, 0, 0.9, Y),
    e.box(n - a, i, r - a, n + a, 6.9, r + a, t.lantern),
    e.col(4540492).mat(0.55, 0.5, 0, 0),
    e.box(n - 0.3, 6.9, r - 0.3, n + 0.3, 6.9 + 0.12, r + 0.3),
    e.box(n - 0.26, 5.32, r - 0.26, n + 0.26, 5.42, r + 0.26),
    e.pole(n, r, 0.16, 0, i));
}
function aP(e, t, n) {
  (e.col(3948355).mat(0.6, 0.4, 0, 0),
    e.cylY(t, n, tP, 0.85, 0.07, 6, 0.06),
    e.col(15258170).mat(0.5, 0, 0.3, 1),
    e.cylY(t, n, 0.62, 0.7, 0.075, 6, 0.075, !1),
    e.pole(t, n, 0.09, 0, 0.85));
}
