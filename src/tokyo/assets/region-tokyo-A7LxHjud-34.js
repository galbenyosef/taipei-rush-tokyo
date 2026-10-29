// tokyo/assets/region-tokyo-A7LxHjud 34 — path
// Lines 18443-18788 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function jre() {
  let e = Ho(),
    t = [];
  for (let n = 0; n < e.n - 1; n++) {
    if (Uo(e, n) !== `deck`) continue;
    let r = e.s[n + 1] - e.s[n],
      i = Math.max(1, Math.ceil(r / 6));
    for (let r = 0; r < i; r++) {
      let a = r / i;
      t.push(
        e.x[n] + (e.x[n + 1] - e.x[n]) * a,
        e.z[n] + (e.z[n + 1] - e.z[n]) * a,
        Ro.half + 2,
      );
    }
  }
  return t;
}
function Mre() {
  let e = Ho(),
    t = [],
    n = [];
  for (let r = 0; r < e.n; r++)
    (t.push([Math.round(e.x[r] * 100) / 100, Math.round(e.z[r] * 100) / 100]),
      n.push(Math.round(e.y[r] * 100) / 100));
  return { path: t, levels: n };
}
r.add({
  首都高速5號池袋線: `首都高速5号池袋線`,
  首都高速3號澀谷線: `首都高速3号渋谷線`,
});
var ns = Mre(),
  rs = [
    [25, 1160],
    [25, 965],
    [-125, 850],
    [-125, 511],
    [-58, 361],
    [-58, 190],
    [0, 105],
    [0, -105],
    [-35, -205],
    [-35, -700],
    [-125, -840],
    [-125, -1250],
    [-190, -1440],
    [-215, -1520],
  ],
  is = [-261.5, 1576],
  as = [
    is,
    [-207, 1373],
    ...rs,
    [-582, -1616],
    [-746, -1713],
    [-978, -1865],
    [-1340, -1687],
    [-1519, -1514],
    [-1795, -1361],
    [-2140, -1430],
    [-2258, -1300],
    [-2262, -1e3],
    [-2286, -809],
    [-2271, -500],
    [-2210, -250],
    [-2150, -40],
    [-2150, 378],
    [-1846, 780],
    [-1846, 1e3],
    [-1770, 1270],
    [-1770, 1540],
    [-1372, 1675],
    [-1074, 2056],
    [-775, 2247],
    [-540, 2421],
    [-286, 2034],
    [-316, 1779],
    is,
  ],
  Nre = as.length - 1,
  os = [...as, ...as.slice(1)];
function ss(e, t) {
  let n = 0;
  for (let r = 0; r + 1 < e.length; r++) {
    let [i, a] = e[r],
      [o, s] = e[r + 1],
      c = Math.hypot(o - i, s - a);
    if ((t - a) * (t - s) <= 0 && a !== s) return n + (c * (t - a)) / (s - a);
    n += c;
  }
  return n;
}
var cs = (e, t) => [ss(os, e), ss(os, t)].sort((e, t) => e - t),
  [Pre, Fre] = cs(560, 190),
  [Ire, Lre] = cs(-200, -400),
  ls = [
    [-1200, -636],
    [-250, -636],
    [-200, -566],
    [-150, -566],
    [-42, -430],
  ],
  us = (e, t) =>
    e
      .slice(0, t)
      .reduce(
        (t, n, r) => t + Math.hypot(e[r + 1][0] - n[0], e[r + 1][1] - n[1]),
        0,
      ),
  Rre = [
    {
      id: `jr-main`,
      name: z(
        `JR線高架橋（山手線・京浜東北線・東海道線・新幹線）`,
        `JR高架橋（山手線・京濱東北線・東海道線・新幹線）`,
        `JR Viaduct (Yamanote / Keihin-Tohoku / Tokaido / Shinkansen)`,
      ),
      path: os,
      closedAt: Nre,
      halfWidth: 14,
      structure: `viaduct`,
      deck: 8,
      lines: [`JY`, `JK`, `JT`, `JU`, `SK`],
      arches: [
        { from: Pre, to: Fre, style: `brick` },
        { from: Ire, to: Lre, style: `brick` },
      ],
    },
    {
      id: `jr-chuo`,
      name: z(`中央線高架橋`, `中央線高架橋`, `Chuo Line Viaduct`),
      path: ls,
      halfWidth: 7,
      structure: `viaduct`,
      deck: 9,
      lines: [`JC`],
      arches: [{ from: us(ls, 2), to: us(ls, 3) + 40, style: `brick` }],
    },
    {
      id: `jr-sobu`,
      name: z(`総武線高架橋`, `總武線高架橋`, `Sobu Line Viaduct`),
      path: [
        [-1200, -644],
        [700, -644],
      ],
      halfWidth: 6,
      structure: `viaduct`,
      deck: 15,
      lines: [`JB`],
    },
  ],
  zre = [
    {
      id: `shuto-c1`,
      name: z(
        `首都高速都心環状線`,
        `首都高速都心環狀線`,
        `Shuto Expressway Inner Circular Route`,
      ),
      route: `C1`,
      halfWidth: 9,
      path: ns.path,
      levels: ns.levels,
      loop: !0,
    },
    {
      id: `shuto-1`,
      name: z(
        `首都高速1号上野線`,
        `首都高速1號上野線`,
        `Shuto Expressway Route 1 (Ueno)`,
      ),
      route: `1`,
      halfWidth: 9,
      overRoads: [`showa-edobashi`, `showa-ueno`],
      path: [
        [320, -180],
        [320, -510],
        [75, -510],
        [75, -1600],
      ],
      levels: [11, 10, 10, 10],
    },
    {
      id: `shuto-6`,
      name: z(
        `首都高速6号向島線`,
        `首都高速6號向島線`,
        `Shuto Expressway Route 6 (Mukojima)`,
      ),
      route: `6`,
      halfWidth: 8,
      path: [
        [340, -180],
        [558, -180],
        [558, -620],
        [620, -720],
        [760, -960],
      ],
      levels: [11, 10, 10, 10, 10],
    },
    {
      id: `shuto-5`,
      name: z(
        `首都高速5号池袋線`,
        `首都高速5號池袋線`,
        `Shuto Expressway Route 5 (Ikebukuro)`,
      ),
      route: `5`,
      halfWidth: 8,
      path: [
        [-584, -200],
        [-692, -262],
        [-692, -560],
        [-720, -596],
        [-1220, -596],
      ],
      levels: [11, 11, 11, 11, 11],
    },
    {
      id: `shuto-3`,
      name: z(
        `首都高速3号渋谷線`,
        `首都高速3號澀谷線`,
        `Shuto Expressway Route 3 (Shibuya)`,
      ),
      route: `3`,
      halfWidth: 9,
      overRoads: [`w-roppongi-w`],
      path: [
        [-757.6, 940],
        [-1220, 940],
      ],
      levels: [12, 12],
    },
    {
      id: `shuto-kk`,
      name: z(
        `東京高速道路（KK線）`,
        `東京高速道路（KK線）`,
        `Tokyo Expressway (KK Line)`,
      ),
      route: `KK`,
      halfWidth: 7,
      path: [
        [-36, 218],
        [-36, 600],
        [-15, 608],
        [262, 608],
      ],
      levels: [9, 9, 9, 9],
    },
  ],
  ds = { H: 9, DECK: 3, TK: 2 },
  fs = [650, 8, 846, ds.DECK, 1004, ds.DECK, 1170, 8];
function Bre(e, t) {
  if (t <= e[0]) return e[1];
  for (let n = 0; n + 3 < e.length; n += 2) {
    let r = e[n],
      i = e[n + 2];
    if (t <= i) {
      let a = (t - r) / (i - r),
        o = a * a * (3 - 2 * a);
      return e[n + 1] + (e[n + 3] - e[n + 1]) * o;
    }
  }
  return e[e.length - 1];
}
var Vre = (e) => Bre(fs, e),
  ps = { x: -1833, z: 910 },
  ms = -1822,
  hs = as.findIndex((e) => e[0] === -1846 && e[1] === 780),
  gs = [as[hs - 1], as[hs], as[hs + 1], as[hs + 2]];
function _s(e) {
  let t = gs;
  return e < t[1][1] ? [t[0], t[1]] : e < t[2][1] ? [t[1], t[2]] : [t[2], t[3]];
}
function vs(e) {
  let [t, n] = _s(e);
  return t[0] + ((e - t[1]) / (n[1] - t[1])) * (n[0] - t[0]);
}
function ys(e) {
  let [t, n] = _s(e),
    r = n[0] - t[0],
    i = n[1] - t[1],
    a = Math.hypot(r, i);
  return { tx: r / a, tz: i / a };
}
var Hre = [
    { key: `e`, exit: `E`, sigma: 57, e: 17.7, out: 1, y: ds.H + 0.15 },
    { key: `w`, exit: `W`, sigma: 55, e: -11.6, out: -1, y: ds.H + 0.15 },
    { key: `tk`, exit: `N`, sigma: -20, e: 17.7, out: 1, y: ds.TK + 0.15 },
  ],
  bs = { B1: -6, DIP: -3, OG: 3, DECK: 0, BR: 7, T3: 13, T4: 19, ROOF: 25 },
  xs = -2150,
  Ss = [-1846, 780],
  Cs = { x: -2140, z: 281 },
  Ure = [-20, 8, 100, bs.OG, 172, bs.OG, 206, bs.DECK, 398, bs.DECK, 486, 8];
function Wre(e, t) {
  if (t <= e[0]) return e[1];
  for (let n = 0; n + 3 < e.length; n += 2) {
    let r = e[n],
      i = e[n + 2];
    if (t <= i) {
      let a = (t - r) / (i - r),
        o = a * a * (3 - 2 * a);
      return e[n + 1] + (e[n + 3] - e[n + 1]) * o;
    }
  }
  return e[e.length - 1];
}
var ws = (() => {
  let e = Ss[0] - xs,
    t = Ss[1] - 378,
    n = Math.hypot(e, t);
  return { tx: e / n, tz: t / n };
})();
function Gre(e) {
  return e <= 378 ? xs : xs + ((e - 378) * ws.tx) / ws.tz;
}
var Ts = { out: -2150.3, in: -2141.4, island: [-2148.65, -2143.05] },
  Es = 4.2,
  Kre = 8.5,
  Ds = 1.65,
  Os = Ts.in - xs,
  ks = (() => {
    let e = [],
      t = Os + Es;
    for (let n = 0; n < 3; n++) (e.push(t, t + Kre + 2 * Ds), (t += 16));
    return e;
  })(),
  As = [1, 2, 3, 4, 5].map((e) => Os + Es * e),
  js = [1, 2, 3, 4, 5, 6].map((e) => Os + 2.4 + Es * e),
  qre = 364,
  Jre = 436,
  Ms = { e1: [234, 340], e2: [264, 340], e3: [284, 362] };
function Ns(e, t, n, r, i, a, o) {
  let s = ks[n];
  return {
    id: e,
    line: t,
    s0: i,
    s1: 450,
    keys: [i, r, a, r, o, s, qre, s, Jre, js[n], 450, js[n]],
  };
}
