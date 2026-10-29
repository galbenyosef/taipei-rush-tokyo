// tokyo/assets/region-tokyo-A7LxHjud 166 — mat
// Lines 68844-69155 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ime(e, t, n, r, i) {
  let a = 5.5,
    o = 5.8,
    s = 5.2,
    c = 4.1,
    l = 4.6,
    u = t.c(`plaster`);
  if (
    (e.col(ow).mat(0.85, 0, 0.1, G),
    e.box(n - 7, i, r - a, n + 7, i + o, r + a, u, 2, 2),
    e.mat(0.88, 0, 0, 0),
    sC(e, n, r, i + o + 0.1, 8.4, 6.9, {
      rise: 2,
      R: 6,
      cell: t.c(`kawara`),
      color: sw,
      band: 15263454,
      soffit: 15263454,
      ridgeH: 0,
      eave: 1.3,
      sori: 0.4,
      curve: 1.3,
      rows: 4,
    }),
    e.col(ow).mat(0.85, 0, 0.1, G),
    e.box(n - s, i + o, r - c, n + s, i + o + 1.8 + l, r + c, u, 2, 2),
    e.mat(0.88, 0, 0, 0),
    lC(e, n, r, i + o + 1.8 + l + 0.1, 6.7, 5.6, {
      rise: 3.6,
      cell: t.c(`kawara`),
      color: sw,
      band: 15263454,
      soffit: 15263454,
      gableColor: ow,
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
    e.col(ow).mat(0.85, 0, 0.1, G);
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
function dw(e, t, n, r, i, a) {
  let o = 3.2,
    s = 4.2;
  if (
    (e.col(ow).mat(0.85, 0, 0.08, G),
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
    lC(e, (n + r) / 2, i, a + s + 0.1, Math.abs(r - n) / 2 + 1.1, 4.4, {
      rise: 2.4,
      cell: t.c(`kawara`),
      color: sw,
      band: 15263454,
      soffit: 15263454,
      gableColor: ow,
      ridgeH: 0.45,
      ridgeColor: 5001302,
      eave: 1.1,
      sori: 0.25,
      tg: 0.5,
    }));
}
function Lme(e, t) {
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
    for (let [t, r, i] of n.slice(0, 8)) GC(e, t, r, i, (t * 31 + r * 17) | 0);
  else for (let [t, r, i] of n) GC(e, t, r, i, (t * 31 + r * 17) | 0);
}
function Rme(e, t) {
  e.col(16777215).mat(0.9, 0, 0, 0);
  for (let [n, r] of [
    [-80, -6.4],
    [ew, 80],
  ])
    e.wall(n, XC, r, XC, -2.25, 0.15, t.c(`ishigaki`), 4, 4);
}
function zme(e, t) {
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
          f = QC - 4.5 * (1 - c) * (1 - c) - 0.15,
          p = QC - 4.5 * (1 - l) * (1 - l) - 0.15;
        e.grid(o, u, f, t, u, f, t, d, p, o, d, p, i, a / 4, 1);
      }
  }
}
function* Bme(e, t) {
  (zme(e, t),
    yield,
    Rme(e, t),
    Nme(e, t),
    yield,
    Pme(e, t),
    yield,
    Fme(e, t),
    yield,
    Ime(e, t, iw.lx, iw.lz, $C),
    yield,
    dw(e, t, iw.lx - 8, iw.lx - 34, iw.lz + 1, $C),
    dw(e, t, iw.lx + 8, iw.lx + 22, iw.lz + 1, $C),
    yield,
    Lme(e, t));
}
function Vme(e, t) {
  (e.col(aw).mat(0.85, 0, 0, 0),
    e.box(-6.4, ZC, -12, ew, 3.5, QC, t.c(`granite`), 2, 2),
    e.col(ow).mat(0.85, 0, 0.08, G),
    e.box(
      iw.lx - 7,
      $C,
      iw.lz - 5.5,
      iw.lx + 7,
      24.85,
      iw.lz + 5.5,
      t.c(`plaster`),
      2,
      2,
    ),
    e.col(sw).mat(0.6, 0.1, 0, 0),
    e.extrudeX(
      [iw.lz + 7, 24.85, iw.lz - 7, 24.85, iw.lz, 28.85],
      iw.lx - 8,
      iw.lx + 8,
      !0,
      !0,
      t.c(`kawara`),
    ),
    e.col(ow).mat(0.85, 0, 0.08, G),
    e.box(
      iw.lx - 34,
      $C,
      iw.lz - 2,
      iw.lx + 22,
      16.85,
      iw.lz + 4,
      t.c(`plaster`),
      2,
      2,
    ),
    e.col(3949632).mat(0.5, 0.6, 0, 0),
    e.box(rw.lx - rw.w, rw.deck - 1.4, XC, rw.lx + rw.w, rw.deck + 1, QC),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function Hme(e) {
  return {
    x: YC.x,
    z: YC.z,
    gy: Math.max(0, e.groundHeight(-470, YC.z)),
    facing: Math.PI / 2,
  };
}
function Ume(e, t) {
  let n = (e) => YC.x - e,
    r = (e) => YC.z + e;
  return [
    {
      x0: n(iw.lz + 6),
      x1: n(iw.lz - 6),
      z0: r(iw.lx - 7),
      z1: r(iw.lx + 7),
      y0: t.gy + $C,
      y1: t.gy + $C + 15,
      rgb: [0.82, 0.82, 0.8],
    },
    {
      x0: n(iw.lz + 4),
      x1: n(iw.lz - 2),
      z0: r(iw.lx - 34),
      z1: r(iw.lx + 22),
      y0: t.gy + $C,
      y1: t.gy + $C + 6,
      rgb: [0.8, 0.8, 0.78],
    },
  ];
}
var Wme = {
    id: `nijubashi`,
    site: Hme,
    name: { ja: `二重橋`, zh: `二重橋`, en: `Nijubashi Bridge` },
    near: 260,
    build: Bme,
    far: Vme,
    farBoxes: Ume,
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
  fw = { x: -135, z: 185 },
  pw = { cz: -23, L: 44, W: 11, H: 57.5 },
  mw = (e) => pw.W * Math.max(0, 1 - (e / pw.L) * (e / pw.L)),
  hw = [-7.5, 7],
  gw = [
    { lx0: 11, lx1: 45, h: 42 },
    { lx0: -18, lx1: 5, h: 34 },
    { lx0: -45, lx1: -24, h: 29 },
  ],
  _w = [7, 40],
  vw = 15132904;
function yw(e) {
  let t = [];
  for (let n = 0; n <= e; n++) {
    let r = (-1 + (2 * n) / e) * pw.L * 0.9999;
    t.push([r, pw.cz - mw(r)]);
  }
  for (let n = e; n >= 0; n--) {
    let r = (-1 + (2 * n) / e) * pw.L * 0.9999;
    t.push([r, pw.cz + mw(r)]);
  }
  return t;
}
