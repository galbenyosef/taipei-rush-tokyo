// tokyo/assets/region-tokyo-A7LxHjud 182 — mat
// Lines 73872-74201 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Dge(e, t) {
  let n = kD(t);
  if (
    (e.col(Tge, 0.92).mat(0.75, 0, 0.04, G),
    e.flat(gD, vD + 0.05, _D, hD, OD, t.c(`paving`), 4, 4),
    e.flat(gD, bD, _D, xD, OD, t.c(`paving`), 4, 4),
    !e.coarse)
  ) {
    for (let t of [-8.5, 1.5, 10]) AD(e, n, t, vD + 1);
    for (let t of [-6, 8]) AD(e, n, t, xD - 0.9);
    for (let t = 0; t < 4; t++) jD(e, _D - 0.5, vD + 1.2 + t * 1.5);
    for (let t = 0; t < 3; t++) jD(e, _D - 0.5, bD + 1 + t * 1.4);
    yield;
    for (let t of [-9, -1, 7]) {
      let r = bD + 2.2;
      (e.col(3816768).mat(0.6, 0.4, 0, 0),
        e.cylY(t, r, OD, 0.4, 0.5, 10, 0.5),
        e.col(16777215).mat(0.4, 0, 0.35, G),
        e.lathe(t, r, [0.44, 0.4, 0.44, 3], e.seg(12), 0, n.posters, !1, !0),
        e.col(3816768).mat(0.6, 0.4, 0, 0),
        e.cylY(t, r, 3, 3.25, 0.5, 10, 0.46),
        e.pole(t, r, 0.5, 0, 3.25));
    }
    for (let t of [-5, 3, 11]) {
      let n = bD + 2.2;
      (e.col(6965808).mat(0.85, 0, 0, 0),
        e.cylY(t, n, OD, 0.65, 0.55, 10, 0.6, !1),
        e.col(4155950).mat(0.9, 0, 0, 0),
        e.lathe(t, n, [0.55, 0.65, 0.5, 0.9, 0.05, 1], 8));
      let r = [15913530, 15227530, 16777215, 11557592];
      for (let i = 0; i < 6; i++) {
        e.col(r[(i + Math.round(t)) % 4]).mat(0.8, 0, 0, 0);
        let a = (i / 6) * Math.PI * 2;
        e.box(
          t + Math.cos(a) * 0.3 - 0.06,
          0.9,
          n + Math.sin(a) * 0.3 - 0.06,
          t + Math.cos(a) * 0.3 + 0.06,
          1.02,
          n + Math.sin(a) * 0.3 + 0.06,
        );
      }
      e.pole(t, n, 0.6, 0, 0.7);
    }
  }
}
function MD(e, t) {
  let n = $E,
    r = eD + e,
    i = yD - e,
    a = bD + e,
    o = TD + e,
    s = [n, i];
  for (let e = 0; e <= t; e++) {
    let n = -Math.PI / 2 + (e / t) * (Math.PI / 2);
    s.push(r - o + Math.cos(n) * o, i + o + Math.sin(n) * o);
  }
  for (let e = 0; e <= t; e++) {
    let n = (e / t) * (Math.PI / 2);
    s.push(r - o + Math.cos(n) * o, a - o + Math.sin(n) * o);
  }
  return (s.push(n, a), s);
}
function ND(e, t) {
  let n = e.length / 2;
  for (let r = 0; r < n; r++) {
    let i = (r + 1) % n,
      a = e[r * 2],
      o = e[r * 2 + 1],
      s = e[i * 2],
      c = e[i * 2 + 1];
    (Math.abs(a - $E) < 0.001 && Math.abs(s - $E) < 0.001) || t(s, c, a, o);
  }
}
function* Oge(e, t) {
  let n = kD(t),
    r = e.coarse ? 2 : 4,
    i = MD(0, r);
  (e.col(16777215).mat(0.25, 0.1, 0.5, G),
    ND(i, (n, r, i, a) => e.wall(n, r, i, a, 0, 4.3, t.c(`doors`), 3, 4.3)),
    e.col(2763824).mat(0.5, 0.3, 0.04, G),
    ND(i, (n, r, i, a) => e.wall(n, r, i, a, 4.3, SD, t.c(`white`), 60, 1)),
    yield);
  for (let n = 0; n < wge; n++) {
    let i = SD + n * CD,
      a = i + CD,
      o = n % 2 ? 0.45 : 0.1,
      s = MD(o, r);
    if (
      (e.col(16777215).mat(0.12, 0.25, 0.3, G),
      ND(s, (n, r, o, s) =>
        e.wall(n, r, o, s, i + 0.55, a - 0.2, t.c(`glass`), 3, 3.25),
      ),
      e.col(16053747).mat(0.35, 0.2, 0.1, G),
      e.sweep(s, [0, i, 0.18, i + 0.05, 0.18, i + 0.5, 0, i + 0.55], !1),
      e.coarse ||
        e.sweep(s, [0, a - 0.2, 0.1, a - 0.18, 0.1, a - 0.02, 0, a], !1),
      e.col(11843254).mat(0.6, 0.2, 0.05, G),
      e.flat(
        $E,
        yD - o + 0.2,
        7.5,
        bD + o - 0.2,
        i + 0.02,
        t.c(`white`),
        0,
        0,
        !1,
      ),
      !e.coarse)
    ) {
      e.col(16053747).mat(0.35, 0.2, 0.08, G);
      let t = n % 2 ? 4 : 0;
      for (let n of [-7 + t, 1 + t])
        e.box(
          n - 0.18,
          i + 0.5,
          bD + o - 0.05,
          n + 0.18,
          a - 0.15,
          bD + o + 0.22,
        );
      for (let n of [yD + 9 + t, yD + 18 + t])
        e.box(
          eD + o - 0.05,
          i + 0.5,
          n - 0.18,
          eD + o + 0.22,
          a - 0.15,
          n + 0.18,
        );
    }
    if (n < 8 && !e.coarse) {
      let t = [
          2976318, 12593706, 8014372, 3811872, 14196768, 15921384, 14707242,
          9051951,
        ][n],
        r = yD + 12.5 + (n % 2 ? 1.2 : 0);
      (e.col(t).mat(0.4, 0, 0.55, G),
        e.box(eD + o + 0.02, i + 1, r - 1.15, eD + o + 0.14, i + 3.3, r + 1.15),
        e.col(16777215).mat(0.4, 0, 0.7, G),
        e.box(
          eD + o + 0.14,
          i + 1.7,
          r - 0.6,
          eD + o + 0.17,
          i + 2.6,
          r + 0.6,
        ));
    }
  }
  yield;
  let a = MD(0.1, r);
  (e.col(16053747).mat(0.35, 0.2, 0.1, G),
    ND(a, (n, r, i, a) => e.wall(n, r, i, a, 45, 46.4, t.c(`white`), 60, 2)),
    e.col(8027262).mat(0.85, 0, 0, 0),
    e.flat($E, yD, 11.5, bD, 46.2),
    e.col(14869472).mat(0.7, 0.1, 0.05, G),
    e.wall($E, yD, $E, bD, 0, 46.4, t.c(`plaster`), 8, 8.4));
  {
    let t = yD + TD + 0.8,
      r = t + 1.6,
      i = 12.6,
      a = 5.6,
      o = 19.6;
    (e.col(16777215).mat(0.4, 0, 0.6, G),
      e.panel(i, t, i, r, a, o, n.tenant),
      e.col(2763824).mat(0.5, 0.4, 0.05, 0),
      e.panel(i, r, 12.1, r, a, o),
      e.panel(12.1, t, i, t, a, o),
      e.flat(12.1, t, i, r, o));
  }
  (e.solid($E, yD + TD, eD, bD - TD, 0, 45), e.solid($E, yD, 7.5, bD, 0, 45));
}
function* kge(e, t) {
  (yield* Ege(e, t), yield, yield* Dge(e, t), yield, yield* Oge(e, t));
}
function Age(e, t) {
  let n = kD(t);
  (e.col(15659246).mat(0.6, 0.1, 0.12, G),
    e.box($E, 0, 0, eD, uD, tD, t.c(`plaster`), 12, 12),
    e.col(16777215).mat(0.2, 0.1, 0.4, G),
    e.panel(
      eD,
      -0.1,
      nD,
      -0.1,
      oD,
      lD,
      t.A.sub(`akibaGlass`, 0, 0, 256 / 320, 1),
    ),
    e.mat(0.45, 0.1, 0.5, G),
    e.panel(eD, -0.2, pD, -0.2, iD, aD, n.band),
    e.col(16777215).mat(0.15, 0.2, 0.35, G),
    e.box($E, 0, yD, eD, wD, bD, t.c(`glass`), 6, 8.4));
}
function jge(e) {
  return { x: QE.x, z: QE.z, gy: e.groundHeight(QE.x, QE.z), facing: 0 };
}
function Mge(e, t) {
  return [
    {
      x0: QE.x + $E,
      x1: QE.x + eD,
      z0: QE.z,
      z1: QE.z + tD,
      y0: t.gy,
      y1: t.gy + dD,
      rgb: [0.85, 0.83, 0.62],
      lit: !0,
    },
    {
      x0: QE.x + $E,
      x1: QE.x + eD,
      z0: QE.z + yD,
      z1: QE.z + bD,
      y0: t.gy,
      y1: t.gy + wD + 1.2,
      rgb: [0.32, 0.38, 0.44],
      lit: !0,
    },
  ];
}
var Nge = {
    id: `akiba-gateways`,
    site: jge,
    name: {
      ja: `世界のテレビ会館`,
      zh: `世界的電視會館`,
      en: `TV Kaikan (Akihabara)`,
    },
    near: 230,
    build: kge,
    far: Age,
    farBoxes: Mge,
    blip: !0,
    anchors: [
      {
        key: `akiba-tvkaikan-front`,
        lx: 3,
        lz: -5.2,
        turn: Math.PI,
        name: {
          zh: `電器街口 電視會館前`,
          en: `In front of TV Kaikan, Electric Town Exit`,
        },
      },
      {
        key: `akiba-denkigai-exit`,
        lx: -60 - QE.x,
        lz: -642 - QE.z,
        turn: -Math.PI / 2,
        name: {
          zh: `秋葉原車站 電器街口`,
          en: `Akihabara Station, Electric Town Exit`,
        },
      },
    ],
  },
  PD = 23.5,
  Pge = -21.4,
  FD = 4.6,
  ID = -23.2,
  LD = -9.7,
  RD = -6.8,
  zD = 1.4,
  BD = 12.4,
  Fge = 19.4,
  VD = 14173727,
  HD = 11020318,
  UD = 14265157,
  WD = 1841431,
  GD = 13288890,
  KD = 7972755,
  qD = 6989202,
  Ige = 3107404;
function JD(e, t, n, r, i, a) {
  return e.A.sub(t, n / 256, 1 - a / 256, i / 256, 1 - r / 256);
}
function Lge(e) {
  return {
    frieze: JD(e, `myojinOrn`, 0, 0, 256, 40),
    rafters: JD(e, `myojinOrn`, 0, 40, 256, 60),
    dragon: JD(e, `myojinOrn`, 0, 60, 128, 124),
    phoenix: JD(e, `myojinOrn`, 128, 60, 256, 124),
    curtain: JD(e, `myojinOrn`, 0, 124, 256, 164),
    door: JD(e, `myojinOrn`, 96, 164, 176, 256),
    ema: JD(e, `myojinOrn`, 176, 164, 256, 256),
    gaku: JD(e, `myojinSign`, 0, 0, 96, 160),
    shago: JD(e, `myojinSign`, 96, 0, 160, 160),
    amazake: JD(e, `myojinSign`, 160, 0, 208, 160),
    hono: JD(e, `myojinSign`, 208, 0, 256, 160),
    chochin: JD(e, `myojinSign`, 0, 160, 128, 256),
    board: JD(e, `myojinSign`, 128, 160, 256, 208),
    noren: JD(e, `myojinSign`, 128, 208, 256, 256),
    bay: JD(e, `myojinShop`, 0, 0, 256, 96),
    oldShop: JD(e, `myojinShop`, 0, 128, 128, 256),
    newShop: JD(e, `myojinShop`, 128, 128, 256, 256),
  };
}
function YD(e, t = VD) {
  return {
    cell: JD(e, `myojinShop`, 0, 96, 256, 128),
    color: 16777215,
    band: qD,
    ridgeColor: 5212786,
    soffit: t,
    tile: 2,
  };
}
var XD = (e) => e.mat(0.55, 0.25, 0, 0);
function ZD(e, t, n, r, i, a, o) {
  let s = e.seg(o),
    c = i / 2,
    l = (e) => n + a * Math.abs(e) ** 2.6;
  for (let n = 0; n < s; n++) {
    let i = -1 + (2 * n) / s,
      a = -1 + (2 * (n + 1)) / s,
      o = i * t,
      u = a * t,
      d = l(i),
      f = l(a);
    (e.quad(u, f, -c, o, d, -c, o, d + r, -c, u, f + r, -c),
      e.quad(o, d, c, u, f, c, u, f + r, c, o, d + r, c),
      e.quad(o, d + r, c, u, f + r, c, u, f + r, -c, o, d + r, -c),
      e.quad(o, d, -c, u, f, -c, u, f, c, o, d, c),
      n === 0 && e.quad(o, d, -c, o, d, c, o, d + r, c, o, d + r, -c),
      n === s - 1 && e.quad(u, f, c, u, f, -c, u, f + r, -c, u, f + r, c));
  }
}
