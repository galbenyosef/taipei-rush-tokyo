// tokyo/assets/region-tokyo-55J_WESF 181 — col
// Lines 73448-73780 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function cge(e, t) {
  (e.col(13129802).mat(0.85, 0, 0.18, G),
    e.lathe(0, hE, [_E, 0, _E, xE], 8, HE, t.c(`benWall`)),
    e.lathe(0, hE, [vE, xE, vE, TE], 8, HE, t.c(`benWall`)),
    e.col(7106936).mat(0.8, 0, 0, 0),
    e.lathe(0, hE, [8.6, SE, vE, CE], 8, HE),
    e.col(5612947).mat(0.6, 0.2, 0, 0),
    e.lathe(0, hE, [7.6, TE, 0.5, 15.600000000000001], 8, HE),
    e.col(zE).mat(0.4, 0.8, 0.2, 1),
    e.lathe(0, hE, [0.6, 15.600000000000001, 0.45, 16.9, 0.02, 18.1], 4),
    e.col(13129802).mat(0.85, 0, 0.18, G),
    e.box(-8.2, 0, DE, EE, xE, 0, t.c(`benWall`), 4, xE),
    e.col(7106936).mat(0.8, 0, 0, 0),
    e.extrudeX([3, 6.4, -9.8, 6.4, -3.4, 10.3], -10, 10, !0, !0));
}
function lge(e, t) {
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
var uge = {
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
    build: sge,
    far: cge,
    farBoxes: lge,
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
  YE = { x: -98.5, z: -631.5 },
  XE = -12,
  ZE = 12,
  QE = 12.75,
  $E = -6.5,
  eD = 18.5,
  tD = 4.6,
  nD = 9.6,
  rD = 9.6,
  iD = 4.2,
  aD = 8,
  oD = 43.2,
  sD = 44.6,
  cD = 46.5,
  lD = 0.8,
  dge = 0.28,
  uD = -1.6,
  dD = 5.5,
  fD = 0.9,
  pD = -110.75 - YE.x,
  mD = -86.25 - YE.x,
  hD = -638 - YE.z,
  gD = -684.5 - YE.z,
  _D = -655 - YE.z,
  vD = -650.2 - YE.z,
  yD = 5,
  bD = 4,
  fge = 10,
  xD = 45,
  SD = 4.5,
  CD = 15527660,
  wD = 15922161,
  pge = 16777215,
  TD = 0.05;
function ED(e) {
  let t = (t, n, r, i, a) => e.A.sub(t, n, r, i, a),
    n = 256 / 320,
    r = (e) => ((ZE - e) / eD) * n,
    i = 1 - 80 / 144;
  return {
    glass: (e, n, i) => t(`akibaGlass`, r(n), e / 8, r(i), (e + 1) / 8),
    billboard: t(`akibaGlass`, r(dD), 0, r($E), 2 / 8),
    side: t(`akibaGlass`, n, 1 - 275 / 352, 1, 1),
    band: t(`akibaFront`, 0, i, 376 / 512, 1),
    led: t(`akibaFront`, 376 / 512, i, 1, 1),
    shop: t(`akibaFront`, 0, 0, 1, i),
    tenant: t(`akibaSigns`, 0, 0, 24 / 128, 1),
    lantern: t(`akibaSigns`, 24 / 128, 1 - 40 / 64, 40 / 128, 1),
    posters: t(`akibaSigns`, 40 / 128, 0, 1, 1),
  };
}
function* mge(e, t) {
  let n = ED(t);
  for (let r = 0; r < aD; r++) {
    let i = rD + r * iD,
      a = i + lD,
      o = i + iD;
    (e.col(16777215).mat(0.18, 0.1, 0.3, G),
      r < 2
        ? e.panel(ZE, 0, dD, 0, a, o, n.glass(r, ZE, dD))
        : e.panel(ZE, 0, $E, 0, a, o, n.glass(r, ZE, $E)),
      e.col(CD).mat(0.45, 0.25, 0.1, G),
      e.panel(ZE, -0.28, $E, -0.28, i, a, t.c(`white`)),
      e.flat($E, -0.28, ZE, 0, a),
      e.col(CD, 0.8).flat($E, -0.28, ZE, 0, i, t.c(`white`), 0, 0, !1));
  }
  if (
    (e.col(CD).mat(0.45, 0.25, 0.1, G),
    e.panel(ZE, -0.28, $E, -0.28, oD, sD, t.c(`white`)),
    e.flat($E, -0.28, ZE, 0.3, sD),
    !e.coarse)
  ) {
    e.col(14672612).mat(0.4, 0.5, 0.05, G);
    let n = Math.round(eD / 1.42);
    for (let r = 0; r <= n; r++) {
      let i = ZE - (eD * r) / n;
      for (let a = 0; a < aD; a++) {
        if (a < 2 && i < 5.4) continue;
        let o = rD + a * iD + lD,
          s = rD + (a + 1) * iD,
          c = r === 0 || r === n ? 0.14 : 0.05,
          l = r === 0 || r === n ? dge : 0.14;
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
      (e.col(16777215).mat(0.5, 0, 0.32, G),
      e.panel(dD, -0.55, -6.35, -0.55, r, i, n.billboard),
      e.col(9343638).mat(0.5, 0.6, 0, 0),
      e.flat(-6.35, -0.55, dD, 0, i),
      e.flat(-6.35, -0.55, dD, 0, r, t.c(`white`), 0, 0, !1),
      e.panel(dD, 0, dD, -0.55, r, i),
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
  (e.col(16777215).mat(0.45, 0.1, 0.5, G),
    e.panel(ZE, -0.7, uD, -0.7, tD, nD, n.band),
    e.col(14263040).mat(0.5, 0.3, 0.2, G),
    e.panel(ZE, 0, ZE, -0.7, tD, nD, t.c(`white`)),
    e.flat(uD, -0.7, ZE, 0, nD),
    e.col(16053488).mat(0.6, 0, 0.35, 1),
    e.flat(XE, -0.7, ZE, fD, tD, t.c(`white`), 0, 0, !1),
    e.col(16053490).mat(0.4, 0.2, 0.08, G),
    e.box(-6.45, 4.85, -0.95, -1.6500000000000001, 9.45, 0),
    e.col(16777215).mat(0.3, 0, 0.38, 2),
    e.panel(-1.87, -0.97, -6.23, -0.97, 5.1, 9.2, n.led),
    e.col(CD).mat(0.45, 0.25, 0.1, G),
    e.panel(uD, -0.7, uD, 0, tD, nD),
    yield,
    e.col(16777215).mat(0.25, 0.1, 0.55, G),
    e.panel(ZE, fD, XE, fD, 0, tD, n.shop),
    e.col(CD).mat(0.45, 0.2, 0.06, G));
  for (let [t, n] of [
    [11.3, ZE],
    [3.4, 2.9],
    [-1, -1.5],
    [-6.3, -6.8],
    [XE, -11.4],
  ])
    (e.box(Math.min(t, n), 0, -0.05, Math.max(t, n), tD, fD),
      e.solid(Math.min(t, n), -0.05, Math.max(t, n), fD, 0, tD));
  if (!e.coarse) {
    (e.col(5921888).mat(0.9, 0, 0, 0),
      e.flat(-1, -0.6, 2.9, fD, 0.03),
      e.col(12109004).mat(0.15, 0.3, 0.12, 1),
      e.flat(XE, -1.6, $E, 0, 4.05),
      e.flat(XE, -1.6, $E, 0, 3.98, t.c(`white`), 0, 0, !1),
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
    e.col(15264746).mat(0.6, 0, 0.3, G),
    e.panel($E, -0.02, XE, -0.02, tD, cD, t.c(`white`)),
    !e.coarse)
  ) {
    e.col(wD).mat(0.45, 0.3, 0.02, G);
    for (let n = 0; n <= 11; n++) {
      let r = $E - (5.5 * n) / 11,
        i = n === 0 || n === 11 ? 0.12 : 0.07,
        a = Math.min(ZE, r + i),
        o = Math.max(XE, r - i);
      (e.panel(a, -0.42, o, -0.42, tD, cD, t.c(`white`)),
        e.panel(a, -0.02, a, -0.42, tD, cD, t.c(`white`)),
        e.panel(o, -0.42, o, -0.02, tD, cD, t.c(`white`)));
    }
    for (let t = 4.8; t < cD; t += iD * 2)
      e.box(XE, t, -0.5, $E, t + 0.18, -0.02);
  }
  (e.col(wD).mat(0.5, 0.2, 0.08, G),
    e.flat(XE, -0.45, $E, QE, cD),
    e.col(16185332).mat(0.5, 0.15, 0.08, G),
    e.wall(ZE, QE, ZE, -0.28, 0, sD, t.c(`plaster`), 8.5, 8.4),
    e.wall(XE, -0.45, XE, QE, 0, cD, t.c(`plaster`), 8.5, 8.4),
    e.wall(XE, QE, ZE, QE, 0, sD, t.c(`plaster`), 8, 8.4),
    e.col(10465466).mat(0.2, 0.2, 0.35, G | 32));
  for (let n = 0; n < aD; n++) {
    let r = rD + n * iD + 1.3;
    e.panel(-5, 12.78, 10, 12.78, r, r + 1.6, t.c(`office`));
  }
  if (
    (e.col(16777215).mat(0.25, 0.1, 0.5, G),
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
    e.col(3816770).mat(0.5, 0.3, 0.05, G),
    e.wall(12.05, 9.7, 12.05, 1, 3.9999999999999996, 4.5, t.c(`white`), 20, 1),
    e.solid(11.8, 0, 12.1, QE, 0, tD),
    e.col(16777215).mat(0.5, 0, 0.3, G),
    e.panel(12.04, 10.4, 12.04, 2.6, 13.2, 41.2, n.side),
    e.col(9079950).mat(0.85, 0, 0, 0),
    e.flat($E, 0.3, ZE, QE, 43.25),
    e.col(15659246).mat(0.55, 0.15, 0.06, G),
    e.box($E, oD, 12.45, ZE, sD, QE),
    e.box(11.7, oD, 0.3, ZE, sD, QE),
    !e.coarse)
  ) {
    e.col(7238520).mat(0.5, 0.6, 0, 0);
    for (let t of [-5.5, -0.5, 4.5, 9.5])
      for (let n of [4.5, 10.5])
        e.box(t - 0.15, oD, n - 0.15, t + 0.15, 46.400000000000006, n + 0.15);
    (e.box(-5.6, 46.400000000000006, 4.3, 9.6, 46.7, 10.7),
      e.col(14211803).mat(0.6, 0.2, 0, 0));
    for (let t = 0; t < 6; t++)
      e.box(-5 + t * 2.4, 46.7, 5, -3.2 + t * 2.4, 48.1, 6.4);
    for (let t = 0; t < 5; t++)
      e.box(-4.5 + t * 2.8, 43.25, 7, -2.6 + t * 2.8, 45.300000000000004, 9.6);
  }
  (e.solid(XE, fD, ZE, QE, 0, tD),
    e.solid(XE, -0.7, ZE, QE, tD, cD),
    e.solid(XE, -0.05, $E, fD, 0, tD));
}
function DD(e, t, n, r) {
  let i = 5.4,
    a = 0.22;
  (e.col(4540492).mat(0.55, 0.5, 0, 0),
    e.box(n - 0.11, TD, r - 0.11, n + 0.11, i, r + 0.11),
    e.box(n - 0.2, TD, r - 0.2, n + 0.2, 0.55, r + 0.2),
    e.col(16777215).mat(0.3, 0, 0.9, G),
    e.box(n - a, i, r - a, n + a, 6.9, r + a, t.lantern),
    e.col(4540492).mat(0.55, 0.5, 0, 0),
    e.box(n - 0.3, 6.9, r - 0.3, n + 0.3, 6.9 + 0.12, r + 0.3),
    e.box(n - 0.26, 5.32, r - 0.26, n + 0.26, 5.42, r + 0.26),
    e.pole(n, r, 0.16, 0, i));
}
function OD(e, t, n) {
  (e.col(3948355).mat(0.6, 0.4, 0, 0),
    e.cylY(t, n, TD, 0.85, 0.07, 6, 0.06),
    e.col(15258170).mat(0.5, 0, 0.3, 1),
    e.cylY(t, n, 0.62, 0.7, 0.075, 6, 0.075, !1),
    e.pole(t, n, 0.09, 0, 0.85));
}
