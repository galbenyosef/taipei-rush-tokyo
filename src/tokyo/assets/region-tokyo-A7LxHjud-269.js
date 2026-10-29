// tokyo/assets/region-tokyo-A7LxHjud 269 — col
// Lines 100043-100371 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* owe(e, t) {
  let n = e.coarse ? 14 : 28,
    r = (e) => LA(0, 0, vB.rx * bB(e), vB.rz * bB(e), n);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    FA(e, r, -3, 7, Qz(t), 3.2, 10),
    e.col(7311284).mat(0.2, 0.35, 0.1, Hz),
    FA(
      e,
      r,
      7,
      vB.dome,
      t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
      e.coarse ? 12.8 : 6.4,
      e.coarse ? 25.2 : 12.6,
    ),
    e.col(5795980).mat(0.2, 0.4, 0.05, 1));
  let i = [vB.dome, vB.dome + 3, vB.dome + 5.5, vB.dome + 7.2, vB.H];
  for (let t = 0; t + 1 < i.length; t++)
    FA(e, r, i[t], i[t + 1], e.white, 50, i[t + 1] - i[t]);
  yield;
  let a = e.coarse ? 12 : 32,
    o = 1.1,
    s = 0.45;
  e.col(16053748).mat(0.45, 0.1, 0.2, 1);
  for (let t of [1, -1])
    for (let n = 0; n < 6; n++) {
      let r = (n / 6) * Vz * 2 + (t > 0 ? 0 : Vz / 6),
        i = null;
      for (let n = 0; n <= a; n++) {
        let c = 4 + ((vB.H - 6) * n) / a,
          l = r + t * 1.15 * Math.sin((Vz * c) / vB.H),
          u = bB(c),
          d = vB.rx * u,
          f = vB.rz * u,
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
  (Kk(e, 0, vB.H, 0, 0.6),
    Kk(e, vB.rx * bB(120) + 0.4, 120, 0, 0.4),
    Kk(e, -vB.rx * bB(120) - 0.4, 120, 0, 0.4),
    e.solid(-vB.rx * 0.7, -vB.rz * 0.7, vB.rx * 0.7, vB.rz * 0.7, -3, vB.H),
    e.solid(-vB.rx * 0.95, -vB.rz * 0.95, vB.rx * 0.95, vB.rz * 0.95, 30, 150),
    yield);
}
function swe(e, t) {
  let n = (e) => LA(0, 0, vB.rx * bB(e), vB.rz * bB(e), 6);
  (e.col(7311284).mat(0.2, 0.35, 0.04, Hz),
    FA(e, n, -3, 70, e.white, 100, 73),
    FA(e, n, 70, vB.H - 2, e.white, 100, vB.H - 72));
}
var cwe = {
    id: `mode-cocoon`,
    site: $z(_B.x, _B.z),
    name: {
      ja: `モード学院コクーンタワー`,
      zh: `模式學院繭大樓`,
      en: `Mode Gakuin Cocoon Tower`,
    },
    near: 260,
    build: owe,
    far: swe,
    bounds: () => [-2255, 263, -2224, 325],
    farBoxes: (e, t) => [
      {
        x0: _B.x - 11,
        x1: _B.x + 11,
        z0: _B.z - 20,
        z1: _B.z + 20,
        y0: t.gy,
        y1: t.gy + 150,
        rgb: [0.3, 0.38, 0.48],
        lit: !0,
      },
      {
        x0: _B.x - 8,
        x1: _B.x + 8,
        z0: _B.z - 14,
        z1: _B.z + 14,
        y0: t.gy + 150,
        y1: t.gy + vB.H,
        rgb: [0.36, 0.44, 0.54],
        lit: !0,
      },
    ],
    blip: !0,
  },
  xB = { x: -2279.5, z: 301.5 },
  SB = (e) => e - xB.x,
  CB = (e) => e - xB.z,
  wB = {
    x0: SB(-2291),
    x1: SB(-2268),
    z0: CB(267),
    z1: CB(336),
    base: 14,
    band: 170,
    top: 178,
    fin: 2,
    depth: 0.9,
  },
  TB = { x0: SB(-2296), x1: SB(-2263), z0: CB(264), z1: CB(339) };
function* lwe(e, t) {
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
  } = wB;
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    Vk(e, Uz(TB.x0, TB.z0, TB.x1, TB.z1), -3, 6, Qz(t), 3.2, 9),
    Xz(e, 14735819, 0.1),
    Vk(e, Uz(TB.x0, TB.z0, TB.x1, TB.z1), 6, o, Zz(t), 6.4, 8),
    e.col(9409173).mat(0.85, 0, 0.04, 1),
    e.flat(TB.x0, TB.z0, TB.x1, TB.z1, o),
    e.solid(TB.x0, TB.z0, TB.x1, TB.z1, -3, o),
    e.col(7109254).mat(0.2, 0.3, 0.12, Hz),
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
    Vk(e, Uz(n, i, r, a), s, c, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 8),
    e.col(9211794).mat(0.85, 0, 0, 0),
    e.flat(n, i, r, a, c),
    e.coarse ||
      (e.col(10790826).mat(0.8, 0.2, 0, 0),
      e.box(n + 4, c, i + 12, r - 4, c + 4, a - 12)),
    Kk(e, n + 1, c, i + 1, 0.45),
    Kk(e, r - 1, c, a - 1, 0.45),
    Kk(e, n + 1, c, a - 1, 0.45),
    Kk(e, r - 1, c, i + 1, 0.45),
    e.solid(n, i, r, a, o, c));
}
function uwe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, top: o } = wB;
  (e.col(14605526, 0.85).mat(0.4, 0.1, 0.05, Hz), Yz(e, n, -3, i, r, o, a, !0));
}
var dwe = {
    id: `keio-plaza`,
    site: $z(xB.x, xB.z),
    name: {
      ja: `京玉プラザホテル`,
      zh: `京玉廣場飯店`,
      en: `Keigyoku Plaza Hotel`,
    },
    near: 250,
    build: lwe,
    far: uwe,
    bounds: () => [-2297, 263, -2262, 340],
    farBoxes: (e, t) => [
      {
        x0: xB.x + wB.x0,
        x1: xB.x + wB.x1,
        z0: xB.z + wB.z0,
        z1: xB.z + wB.z1,
        y0: t.gy,
        y1: t.gy + wB.top,
        rgb: [0.78, 0.78, 0.76],
        lit: !0,
      },
    ],
    blip: !0,
  },
  EB = { x: -2183.5, z: 283 },
  DB = (e) => e - EB.x,
  OB = (e) => e - EB.z;
(DB(-2196),
  DB(-2166),
  OB(240),
  OB(281),
  DB(-2196),
  DB(-2166),
  OB(284),
  OB(326),
  EB.x,
  EB.z);
var kB = { x: -2030, z: 395 },
  AB = (e) => e - kB.x,
  jB = (e) => e - kB.z,
  MB = {
    x0: AB(-2055),
    x1: AB(-2005),
    z0: jB(366),
    z1: jB(426),
    roof: 64,
    crown: 76,
  },
  NB = 13481883;
function* fwe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, roof: o, crown: s } = MB,
    c = Zz(t),
    l = Uz(n, i, r, a);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    Vk(e, l, -3, 7, Qz(t), 3.2, 10),
    Xz(e, NB, 0.1),
    Vk(e, l, 7, o, c, 6.4, 14.25),
    e.col(9210502).mat(0.85, 0, 0.04, 1),
    e.flat(n, i, r, a, o));
  let u = AB(-2046),
    d = AB(-2018);
  (e.col(13161174).mat(0.2, 0.4, 0.3, G),
    Kz(e, d, i, u, i, 0.8, 7, o - 6, t.c(`glass`), 3, 6),
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
    Xz(e, 14074790, 0.08),
    Vk(e, Uz(n + 6, i + 6, r - 6, a - 6), o, s - 1.5, c, 6.4, 10.5),
    e.col(12034692).mat(0.7, 0.04, 0.1, 1),
    Vk(e, Uz(n + 6, i + 6, r - 6, a - 6), s - 1.5, s, e.white, 80, 1.5),
    Vk(e, Uz(n, i, r, a), o, o + 1.2, e.white, 80, 1.2),
    e.col(9210502).mat(0.85, 0, 0, 0),
    e.flat(n + 6, i + 6, r - 6, a - 6, s),
    e.coarse ||
      (e.col(10132896).mat(0.8, 0.2, 0, 0),
      e.box(n + 14, s, i + 12, r - 22, s + 4, a - 14)),
    e.solid(n + 6, i + 6, r - 6, a - 6, o, s),
    Jz(e, t, `takayamaya`, r - 6, i, 0, -1, 3.4, o - 18, o - 6),
    Jz(e, t, `takayamaya`, r, i + 6, 1, 0, 3.4, o - 18, o - 6),
    Kk(e, n + 2, s, i + 2, 0.4),
    Kk(e, r - 2, s, a - 2, 0.4),
    e.solid(n, i, r, a, -3, o));
}
function pwe(e, t) {
  (Xz(e, NB, 0.05, 0.82), Yz(e, MB.x0, -3, MB.z0, MB.x1, MB.roof, MB.z1, !0));
}
var mwe = {
    id: `takashimaya-ts`,
    site: $z(kB.x, kB.z),
    name: {
      ja: `高山屋 タイムズスクエア`,
      zh: `高山屋時代廣場`,
      en: `Takayamaya Times Square`,
    },
    near: 230,
    build: fwe,
    far: pwe,
    bounds: () => [-2057, 362, -2003, 428],
    farBoxes: (e, t) => [
      {
        x0: kB.x + MB.x0,
        x1: kB.x + MB.x1,
        z0: kB.z + MB.z0,
        z1: kB.z + MB.z1,
        y0: t.gy,
        y1: t.gy + MB.crown,
        rgb: [0.62, 0.55, 0.46],
        lit: !0,
      },
    ],
    blip: !0,
  },
  PB = { x: -2019, z: 465 },
  FB = [
    [13, 24, 3, -3, 150],
    [11, 19, 3, 150, 180],
    [8.5, 14, 2.5, 180, 200],
    [6, 9.5, 2, 200, 218],
    [4, 5.5, 0, 218, 232],
  ],
  IB = { pyr: 240, mast: 272, dialY: 165, dialR: 7.4 },
  LB = 13616562;
