// tokyo/assets/region-tokyo-55J_WESF 269 — col
// Lines 99952-100280 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* KCe(e, t) {
  let n = e.coarse ? 14 : 28,
    r = (e) => FA(0, 0, _B.rx * yB(e), _B.rz * yB(e), n);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    NA(e, r, -3, 7, Xz(t), 3.2, 10),
    e.col(7311284).mat(0.2, 0.35, 0.1, Bz),
    NA(
      e,
      r,
      7,
      _B.dome,
      t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
      e.coarse ? 12.8 : 6.4,
      e.coarse ? 25.2 : 12.6,
    ),
    e.col(5795980).mat(0.2, 0.4, 0.05, 1));
  let i = [_B.dome, _B.dome + 3, _B.dome + 5.5, _B.dome + 7.2, _B.H];
  for (let t = 0; t + 1 < i.length; t++)
    NA(e, r, i[t], i[t + 1], e.white, 50, i[t + 1] - i[t]);
  yield;
  let a = e.coarse ? 12 : 32,
    o = 1.1,
    s = 0.45;
  e.col(16053748).mat(0.45, 0.1, 0.2, 1);
  for (let t of [1, -1])
    for (let n = 0; n < 6; n++) {
      let r = (n / 6) * zz * 2 + (t > 0 ? 0 : zz / 6),
        i = null;
      for (let n = 0; n <= a; n++) {
        let c = 4 + ((_B.H - 6) * n) / a,
          l = r + t * 1.15 * Math.sin((zz * c) / _B.H),
          u = yB(c),
          d = _B.rx * u,
          f = _B.rz * u,
          p = Math.cos(l),
          m = Math.sin(l),
          h = p / d,
          g = m / f,
          _ = Math.hypot(h, g) || 1;
        ((h /= _), (g /= _));
        let v = -d * m,
          y = f * p,
          b = Math.hypot(v, y) || 1;
        ((v /= b), (y /= b));
        let x = d * p + h * s,
          S = f * m + g * s,
          C = [
            x + (v * o) / 2,
            S + (y * o) / 2,
            x - (v * o) / 2,
            S - (y * o) / 2,
            c,
            0,
          ];
        (i &&
          e.quad(
            i[0],
            i[4],
            i[1],
            i[2],
            i[4],
            i[3],
            C[2],
            C[4],
            C[3],
            C[0],
            C[4],
            C[1],
          ),
          (i = C));
      }
    }
  (Wk(e, 0, _B.H, 0, 0.6),
    Wk(e, _B.rx * yB(120) + 0.4, 120, 0, 0.4),
    Wk(e, -_B.rx * yB(120) - 0.4, 120, 0, 0.4),
    e.solid(-_B.rx * 0.7, -_B.rz * 0.7, _B.rx * 0.7, _B.rz * 0.7, -3, _B.H),
    e.solid(-_B.rx * 0.95, -_B.rz * 0.95, _B.rx * 0.95, _B.rz * 0.95, 30, 150),
    yield);
}
function qCe(e, t) {
  let n = (e) => FA(0, 0, _B.rx * yB(e), _B.rz * yB(e), 6);
  (e.col(7311284).mat(0.2, 0.35, 0.04, Bz),
    NA(e, n, -3, 70, e.white, 100, 73),
    NA(e, n, 70, _B.H - 2, e.white, 100, _B.H - 72));
}
var JCe = {
    id: `mode-cocoon`,
    site: Zz(gB.x, gB.z),
    name: {
      ja: `モード学院コクーンタワー`,
      zh: `模式學院繭大樓`,
      en: `Mode Gakuin Cocoon Tower`,
    },
    near: 260,
    build: KCe,
    far: qCe,
    bounds: () => [-2255, 263, -2224, 325],
    farBoxes: (e, t) => [
      {
        x0: gB.x - 11,
        x1: gB.x + 11,
        z0: gB.z - 20,
        z1: gB.z + 20,
        y0: t.gy,
        y1: t.gy + 150,
        rgb: [0.3, 0.38, 0.48],
        lit: !0,
      },
      {
        x0: gB.x - 8,
        x1: gB.x + 8,
        z0: gB.z - 14,
        z1: gB.z + 14,
        y0: t.gy + 150,
        y1: t.gy + _B.H,
        rgb: [0.36, 0.44, 0.54],
        lit: !0,
      },
    ],
    blip: !0,
  },
  bB = { x: -2279.5, z: 301.5 },
  xB = (e) => e - bB.x,
  SB = (e) => e - bB.z,
  CB = {
    x0: xB(-2291),
    x1: xB(-2268),
    z0: SB(267),
    z1: SB(336),
    base: 14,
    band: 170,
    top: 178,
    fin: 2,
    depth: 0.9,
  },
  wB = { x0: xB(-2296), x1: xB(-2263), z0: SB(264), z1: SB(339) };
function* YCe(e, t) {
  let {
    x0: n,
    x1: r,
    z0: i,
    z1: a,
    base: o,
    band: s,
    top: c,
    fin: l,
    depth: u,
  } = CB;
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    zk(e, Vz(wB.x0, wB.z0, wB.x1, wB.z1), -3, 6, Xz(t), 3.2, 9),
    Jz(e, 14735819, 0.1),
    zk(e, Vz(wB.x0, wB.z0, wB.x1, wB.z1), 6, o, Yz(t), 6.4, 8),
    e.col(9409173).mat(0.85, 0, 0.04, 1),
    e.flat(wB.x0, wB.z0, wB.x1, wB.z1, o),
    e.solid(wB.x0, wB.z0, wB.x1, wB.z1, -3, o),
    e.col(7109254).mat(0.2, 0.3, 0.12, Bz),
    e.wall(n + u, i, n + u, a, o, s, t.c(`glass`), l * 4, 6.6),
    e.wall(r - u, a, r - u, i, o, s, t.c(`glass`), l * 4, 6.6),
    e.col(15855593).mat(0.6, 0.02, 0.06, 1),
    e.panel(r, i, n, i, o, s),
    e.panel(n, a, r, a, o, s),
    yield);
  let d = Math.round((a - i) / l);
  for (let t = 0; t <= d; t++) {
    let c = i + Math.min(a - i - 0.35, Math.max(0.35, t * l)),
      d = c - 0.3,
      f = c + 0.3;
    (e.panel(n, f, n, d, o, s),
      e.panel(r, d, r, f, o, s),
      e.coarse ||
        (e.panel(n, d, n + u, d, o, s),
        e.panel(n + u, f, n, f, o, s),
        e.panel(r - u, d, r, d, o, s),
        e.panel(r, f, r - u, f, o, s)));
  }
  (yield,
    e.col(15526628).mat(0.6, 0.02, 0.12, 1),
    zk(e, Vz(n, i, r, a), s, c, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 8),
    e.col(9211794).mat(0.85, 0, 0, 0),
    e.flat(n, i, r, a, c),
    e.coarse ||
      (e.col(10790826).mat(0.8, 0.2, 0, 0),
      e.box(n + 4, c, i + 12, r - 4, c + 4, a - 12)),
    Wk(e, n + 1, c, i + 1, 0.45),
    Wk(e, r - 1, c, a - 1, 0.45),
    Wk(e, n + 1, c, a - 1, 0.45),
    Wk(e, r - 1, c, i + 1, 0.45),
    e.solid(n, i, r, a, o, c));
}
function XCe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, top: o } = CB;
  (e.col(14605526, 0.85).mat(0.4, 0.1, 0.05, Bz), qz(e, n, -3, i, r, o, a, !0));
}
var ZCe = {
    id: `keio-plaza`,
    site: Zz(bB.x, bB.z),
    name: {
      ja: `京玉プラザホテル`,
      zh: `京玉廣場飯店`,
      en: `Keigyoku Plaza Hotel`,
    },
    near: 250,
    build: YCe,
    far: XCe,
    bounds: () => [-2297, 263, -2262, 340],
    farBoxes: (e, t) => [
      {
        x0: bB.x + CB.x0,
        x1: bB.x + CB.x1,
        z0: bB.z + CB.z0,
        z1: bB.z + CB.z1,
        y0: t.gy,
        y1: t.gy + CB.top,
        rgb: [0.78, 0.78, 0.76],
        lit: !0,
      },
    ],
    blip: !0,
  },
  TB = { x: -2183.5, z: 283 },
  EB = (e) => e - TB.x,
  DB = (e) => e - TB.z;
(EB(-2196),
  EB(-2166),
  DB(240),
  DB(281),
  EB(-2196),
  EB(-2166),
  DB(284),
  DB(326),
  TB.x,
  TB.z);
var OB = { x: -2030, z: 395 },
  kB = (e) => e - OB.x,
  AB = (e) => e - OB.z,
  jB = {
    x0: kB(-2055),
    x1: kB(-2005),
    z0: AB(366),
    z1: AB(426),
    roof: 64,
    crown: 76,
  },
  MB = 13481883;
function* QCe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, roof: o, crown: s } = jB,
    c = Yz(t),
    l = Vz(n, i, r, a);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    zk(e, l, -3, 7, Xz(t), 3.2, 10),
    Jz(e, MB, 0.1),
    zk(e, l, 7, o, c, 6.4, 14.25),
    e.col(9210502).mat(0.85, 0, 0.04, 1),
    e.flat(n, i, r, a, o));
  let u = kB(-2046),
    d = kB(-2018);
  (e.col(13161174).mat(0.2, 0.4, 0.3, G),
    Wz(e, d, i, u, i, 0.8, 7, o - 6, t.c(`glass`), 3, 6),
    e.col(12034692).mat(0.7, 0.04, 0.08, 1),
    e.box(
      u - 0.8,
      o - 6,
      i - 1.6,
      d + 0.8,
      o - 4.5,
      i + 0.2,
      e.white,
      0,
      0,
      null,
      !0,
    ),
    yield,
    Jz(e, 14074790, 0.08),
    zk(e, Vz(n + 6, i + 6, r - 6, a - 6), o, s - 1.5, c, 6.4, 10.5),
    e.col(12034692).mat(0.7, 0.04, 0.1, 1),
    zk(e, Vz(n + 6, i + 6, r - 6, a - 6), s - 1.5, s, e.white, 80, 1.5),
    zk(e, Vz(n, i, r, a), o, o + 1.2, e.white, 80, 1.2),
    e.col(9210502).mat(0.85, 0, 0, 0),
    e.flat(n + 6, i + 6, r - 6, a - 6, s),
    e.coarse ||
      (e.col(10132896).mat(0.8, 0.2, 0, 0),
      e.box(n + 14, s, i + 12, r - 22, s + 4, a - 14)),
    e.solid(n + 6, i + 6, r - 6, a - 6, o, s),
    Kz(e, t, `takayamaya`, r - 6, i, 0, -1, 3.4, o - 18, o - 6),
    Kz(e, t, `takayamaya`, r, i + 6, 1, 0, 3.4, o - 18, o - 6),
    Wk(e, n + 2, s, i + 2, 0.4),
    Wk(e, r - 2, s, a - 2, 0.4),
    e.solid(n, i, r, a, -3, o));
}
function $Ce(e, t) {
  (Jz(e, MB, 0.05, 0.82), qz(e, jB.x0, -3, jB.z0, jB.x1, jB.roof, jB.z1, !0));
}
var ewe = {
    id: `takashimaya-ts`,
    site: Zz(OB.x, OB.z),
    name: {
      ja: `高山屋 タイムズスクエア`,
      zh: `高山屋時代廣場`,
      en: `Takayamaya Times Square`,
    },
    near: 230,
    build: QCe,
    far: $Ce,
    bounds: () => [-2057, 362, -2003, 428],
    farBoxes: (e, t) => [
      {
        x0: OB.x + jB.x0,
        x1: OB.x + jB.x1,
        z0: OB.z + jB.z0,
        z1: OB.z + jB.z1,
        y0: t.gy,
        y1: t.gy + jB.crown,
        rgb: [0.62, 0.55, 0.46],
        lit: !0,
      },
    ],
    blip: !0,
  },
  NB = { x: -2019, z: 465 },
  PB = [
    [13, 24, 3, -3, 150],
    [11, 19, 3, 150, 180],
    [8.5, 14, 2.5, 180, 200],
    [6, 9.5, 2, 200, 218],
    [4, 5.5, 0, 218, 232],
  ],
  FB = { pyr: 240, mast: 272, dialY: 165, dialR: 7.4 },
  IB = 13616562;
