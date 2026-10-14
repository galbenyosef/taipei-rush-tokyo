// tokyo/assets/region-tokyo-BcM3fReU 140 — mat
// Lines 61240-61569 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* oP(e, t) {
  let n = nP(t);
  if (
    (e.col(eP, 0.92).mat(0.75, 0, 0.04, Y),
    e.flat(VN, UN + 0.05, HN, BN, tP, t.c(`paving`), 4, 4),
    e.flat(VN, GN, HN, KN, tP, t.c(`paving`), 4, 4),
    !e.coarse)
  ) {
    for (let t of [-8.5, 1.5, 10]) iP(e, n, t, UN + 1);
    for (let t of [-6, 8]) iP(e, n, t, KN - 0.9);
    for (let t = 0; t < 4; t++) aP(e, HN - 0.5, UN + 1.2 + t * 1.5);
    for (let t = 0; t < 3; t++) aP(e, HN - 0.5, GN + 1 + t * 1.4);
    yield;
    for (let t of [-9, -1, 7]) {
      let r = GN + 2.2;
      (e.col(3816768).mat(0.6, 0.4, 0, 0),
        e.cylY(t, r, tP, 0.4, 0.5, 10, 0.5),
        e.col(16777215).mat(0.4, 0, 0.35, Y),
        e.lathe(t, r, [0.44, 0.4, 0.44, 3], e.seg(12), 0, n.posters, !1, !0),
        e.col(3816768).mat(0.6, 0.4, 0, 0),
        e.cylY(t, r, 3, 3.25, 0.5, 10, 0.46),
        e.pole(t, r, 0.5, 0, 3.25));
    }
    for (let t of [-5, 3, 11]) {
      let n = GN + 2.2;
      (e.col(6965808).mat(0.85, 0, 0, 0),
        e.cylY(t, n, tP, 0.65, 0.55, 10, 0.6, !1),
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
function sP(e, t) {
  let n = CN,
    r = wN + e,
    i = WN - e,
    a = GN + e,
    o = ZN + e,
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
function cP(e, t) {
  let n = e.length / 2;
  for (let r = 0; r < n; r++) {
    let i = (r + 1) % n,
      a = e[r * 2],
      o = e[r * 2 + 1],
      s = e[i * 2],
      c = e[i * 2 + 1];
    (Math.abs(a - CN) < 0.001 && Math.abs(s - CN) < 0.001) || t(s, c, a, o);
  }
}
function* lP(e, t) {
  let n = nP(t),
    r = e.coarse ? 2 : 4,
    i = sP(0, r);
  (e.col(16777215).mat(0.25, 0.1, 0.5, Y),
    cP(i, (n, r, i, a) => e.wall(n, r, i, a, 0, 4.3, t.c(`doors`), 3, 4.3)),
    e.col(2763824).mat(0.5, 0.3, 0.04, Y),
    cP(i, (n, r, i, a) => e.wall(n, r, i, a, 4.3, qN, t.c(`white`), 60, 1)),
    yield);
  for (let n = 0; n < YN; n++) {
    let i = qN + n * JN,
      a = i + JN,
      o = n % 2 ? 0.45 : 0.1,
      s = sP(o, r);
    if (
      (e.col(16777215).mat(0.12, 0.25, 0.3, Y),
      cP(s, (n, r, o, s) =>
        e.wall(n, r, o, s, i + 0.55, a - 0.2, t.c(`glass`), 3, 3.25),
      ),
      e.col(16053747).mat(0.35, 0.2, 0.1, Y),
      e.sweep(s, [0, i, 0.18, i + 0.05, 0.18, i + 0.5, 0, i + 0.55], !1),
      e.coarse ||
        e.sweep(s, [0, a - 0.2, 0.1, a - 0.18, 0.1, a - 0.02, 0, a], !1),
      e.col(11843254).mat(0.6, 0.2, 0.05, Y),
      e.flat(
        CN,
        WN - o + 0.2,
        7.5,
        GN + o - 0.2,
        i + 0.02,
        t.c(`white`),
        0,
        0,
        !1,
      ),
      !e.coarse)
    ) {
      e.col(16053747).mat(0.35, 0.2, 0.08, Y);
      let t = n % 2 ? 4 : 0;
      for (let n of [-7 + t, 1 + t])
        e.box(
          n - 0.18,
          i + 0.5,
          GN + o - 0.05,
          n + 0.18,
          a - 0.15,
          GN + o + 0.22,
        );
      for (let n of [WN + 9 + t, WN + 18 + t])
        e.box(
          wN + o - 0.05,
          i + 0.5,
          n - 0.18,
          wN + o + 0.22,
          a - 0.15,
          n + 0.18,
        );
    }
    if (n < 8 && !e.coarse) {
      let t = [
          2976318, 12593706, 8014372, 3811872, 14196768, 15921384, 14707242,
          9051951,
        ][n],
        r = WN + 12.5 + (n % 2 ? 1.2 : 0);
      (e.col(t).mat(0.4, 0, 0.55, Y),
        e.box(wN + o + 0.02, i + 1, r - 1.15, wN + o + 0.14, i + 3.3, r + 1.15),
        e.col(16777215).mat(0.4, 0, 0.7, Y),
        e.box(
          wN + o + 0.14,
          i + 1.7,
          r - 0.6,
          wN + o + 0.17,
          i + 2.6,
          r + 0.6,
        ));
    }
  }
  yield;
  let a = sP(0.1, r);
  (e.col(16053747).mat(0.35, 0.2, 0.1, Y),
    cP(a, (n, r, i, a) => e.wall(n, r, i, a, 45, 46.4, t.c(`white`), 60, 2)),
    e.col(8027262).mat(0.85, 0, 0, 0),
    e.flat(CN, WN, 11.5, GN, 46.2),
    e.col(14869472).mat(0.7, 0.1, 0.05, Y),
    e.wall(CN, WN, CN, GN, 0, 46.4, t.c(`plaster`), 8, 8.4));
  {
    let t = WN + ZN + 0.8,
      r = t + 1.6,
      i = 12.6,
      a = 5.6,
      o = 19.6;
    (e.col(16777215).mat(0.4, 0, 0.6, Y),
      e.panel(i, t, i, r, a, o, n.tenant),
      e.col(2763824).mat(0.5, 0.4, 0.05, 0),
      e.panel(i, r, 12.1, r, a, o),
      e.panel(12.1, t, i, t, a, o),
      e.flat(12.1, t, i, r, o));
  }
  (e.solid(CN, WN + ZN, wN, GN - ZN, 0, 45), e.solid(CN, WN, 7.5, GN, 0, 45));
}
function* uP(e, t) {
  (yield* rP(e, t), yield, yield* oP(e, t), yield, yield* lP(e, t));
}
function dP(e, t) {
  let n = nP(t);
  (e.col(15659246).mat(0.6, 0.1, 0.12, Y),
    e.box(CN, 0, 0, wN, PN, TN, t.c(`plaster`), 12, 12),
    e.col(16777215).mat(0.2, 0.1, 0.4, Y),
    e.panel(
      wN,
      -0.1,
      EN,
      -0.1,
      AN,
      NN,
      t.A.sub(`akibaGlass`, 0, 0, 256 / 320, 1),
    ),
    e.mat(0.45, 0.1, 0.5, Y),
    e.panel(wN, -0.2, RN, -0.2, ON, kN, n.band),
    e.col(16777215).mat(0.15, 0.2, 0.35, Y),
    e.box(CN, 0, WN, wN, XN, GN, t.c(`glass`), 6, 8.4));
}
function fP(e) {
  return { x: SN.x, z: SN.z, gy: e.groundHeight(SN.x, SN.z), facing: 0 };
}
function pP(e, t) {
  return [
    {
      x0: SN.x + CN,
      x1: SN.x + wN,
      z0: SN.z,
      z1: SN.z + TN,
      y0: t.gy,
      y1: t.gy + FN,
      rgb: [0.85, 0.83, 0.62],
      lit: !0,
    },
    {
      x0: SN.x + CN,
      x1: SN.x + wN,
      z0: SN.z + WN,
      z1: SN.z + GN,
      y0: t.gy,
      y1: t.gy + XN + 1.2,
      rgb: [0.32, 0.38, 0.44],
      lit: !0,
    },
  ];
}
var mP = {
    id: `akiba-gateways`,
    site: fP,
    name: {
      ja: `世界のテレビ会館`,
      zh: `世界的電視會館`,
      en: `TV Kaikan (Akihabara)`,
    },
    near: 230,
    build: uP,
    far: dP,
    farBoxes: pP,
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
        lx: -60 - SN.x,
        lz: -642 - SN.z,
        turn: -Math.PI / 2,
        name: {
          zh: `秋葉原車站 電器街口`,
          en: `Akihabara Station, Electric Town Exit`,
        },
      },
    ],
  },
  hP = 23.5,
  gP = -21.4,
  _P = 4.6,
  vP = -23.2,
  yP = -9.7,
  bP = -6.8,
  xP = 1.4,
  SP = 12.4,
  CP = 19.4,
  wP = 14173727,
  TP = 11020318,
  EP = 14265157,
  DP = 1841431,
  OP = 13288890,
  kP = 7972755,
  AP = 6989202,
  jP = 3107404;
function MP(e, t, n, r, i, a) {
  return e.A.sub(t, n / 256, 1 - a / 256, i / 256, 1 - r / 256);
}
function NP(e) {
  return {
    frieze: MP(e, `myojinOrn`, 0, 0, 256, 40),
    rafters: MP(e, `myojinOrn`, 0, 40, 256, 60),
    dragon: MP(e, `myojinOrn`, 0, 60, 128, 124),
    phoenix: MP(e, `myojinOrn`, 128, 60, 256, 124),
    curtain: MP(e, `myojinOrn`, 0, 124, 256, 164),
    door: MP(e, `myojinOrn`, 96, 164, 176, 256),
    ema: MP(e, `myojinOrn`, 176, 164, 256, 256),
    gaku: MP(e, `myojinSign`, 0, 0, 96, 160),
    shago: MP(e, `myojinSign`, 96, 0, 160, 160),
    amazake: MP(e, `myojinSign`, 160, 0, 208, 160),
    hono: MP(e, `myojinSign`, 208, 0, 256, 160),
    chochin: MP(e, `myojinSign`, 0, 160, 128, 256),
    board: MP(e, `myojinSign`, 128, 160, 256, 208),
    noren: MP(e, `myojinSign`, 128, 208, 256, 256),
    bay: MP(e, `myojinShop`, 0, 0, 256, 96),
    oldShop: MP(e, `myojinShop`, 0, 128, 128, 256),
    newShop: MP(e, `myojinShop`, 128, 128, 256, 256),
  };
}
function PP(e, t = wP) {
  return {
    cell: MP(e, `myojinShop`, 0, 96, 256, 128),
    color: 16777215,
    band: AP,
    ridgeColor: 5212786,
    soffit: t,
    tile: 2,
  };
}
var FP = (e) => e.mat(0.55, 0.25, 0, 0);
function IP(e, t, n, r, i, a, o) {
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
