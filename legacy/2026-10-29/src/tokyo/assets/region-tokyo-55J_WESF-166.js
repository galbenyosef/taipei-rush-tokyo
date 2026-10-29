// tokyo/assets/region-tokyo-55J_WESF 166 — mat
// Lines 68753-69064 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function wme(e, t, n, r, i) {
  let a = 5.5,
    o = 5.8,
    s = 5.2,
    c = 4.1,
    l = 4.6,
    u = t.c(`plaster`);
  if (
    (e.col(rw).mat(0.85, 0, 0.1, G),
    e.box(n - 7, i, r - a, n + 7, i + o, r + a, u, 2, 2),
    e.mat(0.88, 0, 0, 0),
    iC(e, n, r, i + o + 0.1, 8.4, 6.9, {
      rise: 2,
      R: 6,
      cell: t.c(`kawara`),
      color: iw,
      band: 15263454,
      soffit: 15263454,
      ridgeH: 0,
      eave: 1.3,
      sori: 0.4,
      curve: 1.3,
      rows: 4,
    }),
    e.col(rw).mat(0.85, 0, 0.1, G),
    e.box(n - s, i + o, r - c, n + s, i + o + 1.8 + l, r + c, u, 2, 2),
    e.mat(0.88, 0, 0, 0),
    oC(e, n, r, i + o + 1.8 + l + 0.1, 6.7, 5.6, {
      rise: 3.6,
      cell: t.c(`kawara`),
      color: iw,
      band: 15263454,
      soffit: 15263454,
      gableColor: rw,
      ridgeH: 0.6,
      ridgeColor: 5001302,
      eave: 1.3,
      sori: 0.45,
      tg: 0.48,
    }),
    !e.coarse)
  ) {
    e.col(2762790).mat(0.8, 0, 0, 0);
    for (let t of [-4.5, -1.5, 1.5, 4.5])
      e.box(
        n + t - 0.6,
        i + 2.6,
        r - a - 0.05,
        n + t + 0.6,
        i + 3.6,
        r - a + 0.02,
      );
    for (let t of [-2.6, 0, 2.6])
      e.box(
        n + t - 0.5,
        i + o + 3.3,
        r - c - 0.05,
        n + t + 0.5,
        i + o + 4.2,
        r - c + 0.02,
      );
    e.col(rw).mat(0.85, 0, 0.1, G);
    for (let t of [-1, 1])
      e.box(
        n + t * 5.6 - 1,
        i + 0.8,
        r - a - 0.8,
        n + t * 5.6 + 1,
        i + 3.2,
        r - a,
      );
  }
}
function cw(e, t, n, r, i, a) {
  let o = 3.2,
    s = 4.2;
  if (
    (e.col(rw).mat(0.85, 0, 0.08, G),
    e.box(
      Math.min(n, r),
      a,
      i - o,
      Math.max(n, r),
      a + s,
      i + o,
      t.c(`plaster`),
      2,
      2,
    ),
    !e.coarse)
  ) {
    e.col(2762790).mat(0.8, 0, 0, 0);
    for (let t = Math.min(n, r) + 2.5; t < Math.max(n, r) - 1.5; t += 4)
      e.box(t - 0.5, a + 2.2, i - o - 0.05, t + 0.5, a + 3, i - o + 0.02);
  }
  (e.mat(0.88, 0, 0, 0),
    oC(e, (n + r) / 2, i, a + s + 0.1, Math.abs(r - n) / 2 + 1.1, 4.4, {
      rise: 2.4,
      cell: t.c(`kawara`),
      color: iw,
      band: 15263454,
      soffit: 15263454,
      gableColor: rw,
      ridgeH: 0.45,
      ridgeColor: 5001302,
      eave: 1.1,
      sori: 0.25,
      tg: 0.5,
    }));
}
function Tme(e, t) {
  if (
    (e.col(16777215).mat(0.95, 0, 0, 0),
    e.flat(-11, -70, 11, -16, 0.06, t.c(`gravel`), 4, 4),
    e.flat(11, -40, 60, -16, 0.06, t.c(`gravel`), 4, 4),
    e.col(11906719).mat(0.85, 0, 0, 0),
    e.box(-60, 0, -12.1, 60, 0.35, -11.5),
    !e.coarse)
  ) {
    e.col(3815992).mat(0.6, 0.5, 0, 0);
    for (let t = -58; t <= 58; t += 4)
      Math.abs(t) > 8 && e.cylY(t, -11.8, 0.35, 1, 0.06, 5);
  }
  let n = [
    [-30, -24, 8],
    [-22, -38, 7],
    [-44, -30, 9],
    [-58, -46, 8],
    [20, -40, 8.5],
    [62, -58, 7],
    [56, -80, 9],
    [26, -82, 7.5],
    [-34, -62, 8],
    [-16, -84, 9],
    [60, -30, 8],
    [74, -48, 7.5],
    [-70, -20, 8.5],
    [-80, -58, 7],
    [12, -96, 8],
    [-48, -92, 9],
  ];
  if (e.coarse)
    for (let [t, r, i] of n.slice(0, 8)) HC(e, t, r, i, (t * 31 + r * 17) | 0);
  else for (let [t, r, i] of n) HC(e, t, r, i, (t * 31 + r * 17) | 0);
}
function Eme(e, t) {
  e.col(16777215).mat(0.9, 0, 0, 0);
  for (let [n, r] of [
    [-80, -6.4],
    [ZC, 80],
  ])
    e.wall(n, qC, r, qC, -2.25, 0.15, t.c(`ishigaki`), 4, 4);
}
function Dme(e, t) {
  let n = -1.75,
    r = e.coarse ? 3 : 6,
    i = t.c(`ishigaki`),
    a = e.coarse ? 16 : 8;
  e.col(14209734).mat(0.95, 0, 0, 0);
  for (let t = -225; t < 63; t += a) {
    let o = Math.min(63, t + a);
    if (!(o > -14 && t < 14))
      for (let s = 0; s < r; s++) {
        let c = s / r,
          l = (s + 1) / r,
          u = n + 14.75 * c,
          d = n + 14.75 * l,
          f = YC - 4.5 * (1 - c) * (1 - c) - 0.15,
          p = YC - 4.5 * (1 - l) * (1 - l) - 0.15;
        e.grid(o, u, f, t, u, f, t, d, p, o, d, p, i, a / 4, 1);
      }
  }
}
function* Ome(e, t) {
  (Dme(e, t),
    yield,
    Eme(e, t),
    xme(e, t),
    yield,
    Sme(e, t),
    yield,
    Cme(e, t),
    yield,
    wme(e, t, tw.lx, tw.lz, XC),
    yield,
    cw(e, t, tw.lx - 8, tw.lx - 34, tw.lz + 1, XC),
    cw(e, t, tw.lx + 8, tw.lx + 22, tw.lz + 1, XC),
    yield,
    Tme(e, t));
}
function kme(e, t) {
  (e.col(nw).mat(0.85, 0, 0, 0),
    e.box(-6.4, JC, -12, ZC, 3.5, YC, t.c(`granite`), 2, 2),
    e.col(rw).mat(0.85, 0, 0.08, G),
    e.box(
      tw.lx - 7,
      XC,
      tw.lz - 5.5,
      tw.lx + 7,
      24.85,
      tw.lz + 5.5,
      t.c(`plaster`),
      2,
      2,
    ),
    e.col(iw).mat(0.6, 0.1, 0, 0),
    e.extrudeX(
      [tw.lz + 7, 24.85, tw.lz - 7, 24.85, tw.lz, 28.85],
      tw.lx - 8,
      tw.lx + 8,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.col(rw).mat(0.85, 0, 0.08, G),
    e.box(
      tw.lx - 34,
      XC,
      tw.lz - 2,
      tw.lx + 22,
      16.85,
      tw.lz + 4,
      t.c(`plaster`),
      2,
      2,
    ),
    e.col(3949632).mat(0.5, 0.6, 0, 0),
    e.box(ew.lx - ew.w, ew.deck - 1.4, qC, ew.lx + ew.w, ew.deck + 1, YC),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function Ame(e) {
  return {
    x: KC.x,
    z: KC.z,
    gy: Math.max(0, e.groundHeight(-470, KC.z)),
    facing: Math.PI / 2,
  };
}
function jme(e, t) {
  let n = (e) => KC.x - e,
    r = (e) => KC.z + e;
  return [
    {
      x0: n(tw.lz + 6),
      x1: n(tw.lz - 6),
      z0: r(tw.lx - 7),
      z1: r(tw.lx + 7),
      y0: t.gy + XC,
      y1: t.gy + XC + 15,
      rgb: [0.82, 0.82, 0.8],
    },
    {
      x0: n(tw.lz + 4),
      x1: n(tw.lz - 2),
      z0: r(tw.lx - 34),
      z1: r(tw.lx + 22),
      y0: t.gy + XC,
      y1: t.gy + XC + 6,
      rgb: [0.8, 0.8, 0.78],
    },
  ];
}
var Mme = {
    id: `nijubashi`,
    site: Ame,
    name: { ja: `二重橋`, zh: `二重橋`, en: `Nijubashi Bridge` },
    near: 260,
    build: Ome,
    far: kme,
    farBoxes: jme,
    bounds: () => [-560, -65, -395, 305],
    blip: !0,
    anchors: [
      {
        key: `nijubashi-view`,
        lx: 26,
        lz: -40,
        turn: Math.PI - 0.5,
        name: { zh: `二重橋 觀景點`, en: `Nijubashi viewpoint` },
      },
      {
        key: `nijubashi-hibiya`,
        lx: 0,
        lz: -162,
        turn: Math.PI,
        name: { zh: `日比谷通 皇居外苑側`, en: `Hibiya-dori, palace side` },
      },
    ],
  },
  lw = { x: -135, z: 185 },
  uw = { cz: -23, L: 44, W: 11, H: 57.5 },
  dw = (e) => uw.W * Math.max(0, 1 - (e / uw.L) * (e / uw.L)),
  fw = [-7.5, 7],
  pw = [
    { lx0: 11, lx1: 45, h: 42 },
    { lx0: -18, lx1: 5, h: 34 },
    { lx0: -45, lx1: -24, h: 29 },
  ],
  mw = [7, 40],
  hw = 15132904;
function gw(e) {
  let t = [];
  for (let n = 0; n <= e; n++) {
    let r = (-1 + (2 * n) / e) * uw.L * 0.9999;
    t.push([r, uw.cz - dw(r)]);
  }
  for (let n = e; n >= 0; n--) {
    let r = (-1 + (2 * n) / e) * uw.L * 0.9999;
    t.push([r, uw.cz + dw(r)]);
  }
  return t;
}
