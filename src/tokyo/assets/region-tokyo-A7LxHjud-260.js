// tokyo/assets/region-tokyo-A7LxHjud 260 — col
// Lines 97076-97424 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var xR = {
  id: `shibuya-scramble-square`,
  site: (e) => ({
    x: rR.x,
    z: rR.z,
    gy: e.groundHeight(rR.x, rR.z),
    facing: 0,
  }),
  name: {
    ja: `渋谷スクランブルタワー`,
    zh: `澀谷十字塔`,
    en: `Shibuya Scramble Tower`,
  },
  near: 270,
  build: iCe,
  far: oCe,
  glass: aCe,
  bounds: () => [
    rR.x + iR.x0,
    rR.z + iR.z0,
    rR.x + aR.sky.x1,
    rR.z + aR.stair.z1,
  ],
  farBoxes: (e, t) => [
    {
      x0: rR.x + K.x0,
      x1: rR.x + K.x1,
      z0: rR.z + K.z0,
      z1: rR.z + K.z1,
      y0: t.gy,
      y1: t.gy + q.waist0,
      rgb: [0.6, 0.66, 0.7],
      lit: !0,
    },
    {
      x0: rR.x + K.x0,
      x1: rR.x + K.x1,
      z0: rR.z + K.z0,
      z1: rR.z + K.z1,
      y0: t.gy + q.waist0,
      y1: t.gy + q.gal,
      rgb: [0.42, 0.55, 0.66],
      lit: !0,
    },
    {
      x0: rR.x + K.x0,
      x1: rR.x + K.x1,
      z0: rR.z + K.z0,
      z1: rR.z + K.z1,
      y0: t.gy + q.gal,
      y1: t.gy + q.roof,
      rgb: [0.62, 0.68, 0.72],
      lit: !0,
      glow: 0.35,
    },
  ],
  roofs: [
    { lx0: K.x0, lz0: K.z0, lx1: K.x1, lz1: K.z1, y: q.ceil },
    {
      lx0: aR.sky.x0,
      lz0: aR.sky.z0,
      lx1: aR.sky.x1,
      lz1: aR.sky.z1,
      y: q.deck + 3.6,
    },
    {
      lx0: aR.east.x0,
      lz0: aR.east.z0,
      lx1: aR.east.x1,
      lz1: aR.east.z1,
      y: q.deck - 0.9,
    },
    { lx0: J.x0, lz0: J.z0, lx1: J.x1, lz1: J.z1, y: J.top },
  ],
  anchors: [
    {
      key: `shibuya-scramble-tower-sky-lift`,
      lx: K.x1 + 4.6,
      lz: 12,
      turn: -Math.PI / 2,
      name: {
        zh: `澀谷十字塔 SHIBUYA SKYE 電梯`,
        en: `Shibuya Scramble Tower, SHIBUYA SKYE lift`,
      },
    },
    {
      key: `shibuya-scramble-tower-urban-core`,
      lx: K.x1 + 3,
      lz: -6,
      turn: -Math.PI / 2,
      name: {
        zh: `澀谷十字塔 都市核`,
        en: `Shibuya Scramble Tower, urban core`,
      },
    },
  ],
  blip: !0,
};
function SR(e, t, n, r, i, a) {
  (e.col(2763824).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n, n + 0.85, 0.13, 5),
    e.col(a).mat(0.8, 0, 0, 0),
    e.cylY(t, r, n + 0.85, n + 1.42, 0.2, 6, 0.17),
    e.col(14858644).mat(0.7, 0, 0, 0),
    e.cylY(t, r, n + 1.45, n + i, 0.11, 6, 0.09));
}
function* sCe(e, t) {
  let n = q.roof,
    r = q.gal;
  e.col(15856110).mat(0.9, 0, 0.1, 1);
  for (let t = 0; t < 3; t++) {
    let r = sR[t],
      i = sR[t + 1],
      a = K.x1 - r + 0.2,
      o = K.x1 - i - 0.2,
      s = K.z1 - r + 0.5,
      c = K.z1 - 0.6,
      l = n + cR * (t + 1),
      u = l + cR;
    rM(
      e,
      [a, l + 0.05, s],
      [o, u - 0.25, s],
      [o, u - 0.25, c],
      [a, l + 0.05, c],
      [0, 1, 0],
    );
  }
  {
    let t = sR[3],
      r = K.x1 - t / 2,
      i = K.z1 - t / 2,
      a = n + cR * 4 + 0.03;
    (e.col(14277852).mat(0.4, 0.5, 0.1, 1),
      e.disc(r, a, i, t / 2 - 0.3, 20),
      e.col(2961976).mat(0.4, 0.6, 0.05, 0),
      e.flat(r - 0.08, i - (t / 2 - 0.5), r + 0.08, i, a + 0.02));
  }
  e.col(2830131).mat(0.4, 0.7, 0, 0);
  for (let [t, r] of [
    [-12, -17.6],
    [0, -17.6],
    [12, -17.6],
    [-17.6, 0],
    [-17.6, 12],
    [18.9, 0],
    [18.9, 12],
    [0, 24.1],
    [-10, 24.1],
  ]) {
    let i = t < K.x0 ? K.x0 + 0.5 : t > K.x1 ? K.x1 - 0.5 : t,
      a = r < K.z0 ? K.z0 + 0.5 : r > K.z1 ? K.z1 - 0.5 : r,
      o = n + mR(i, a);
    (e.box(i - 0.25, o, a - 0.25, i + 0.25, o + 0.4, a + 0.25),
      e.push().col(16317439).mat(0.2, 0, 1, 1),
      e.disc(i, o + 0.42, a, 0.2, 8),
      e.pop());
  }
  e.col(10123864).mat(0.75, 0, 0.03, 0);
  for (let t = -2; t < 10; t += 4) e.box(t, n, -14.6, t + 2.6, n + 0.45, -13.8);
  let i = new le(2291),
    a = [3095893, 9056044, 14275784, 4151866, 2040101, 12094026, 7040885];
  for (let [t, r] of [
    [-15.6, -15.6],
    [-14.2, -15.8],
    [-15.8, -13],
    [-9, -16],
    [-4, -16.1],
    [4.5, -16],
    [16.8, -6],
    [16.9, 2],
    [-15.9, 4],
    [-15.9, 9],
    [-6, 22.4],
    [2, 22.5],
    [10, 22.3],
    [-2, 3],
    [3, 8],
    [12, 18],
    [15, 20],
  ])
    SR(
      e,
      t + i.range(-0.3, 0.3),
      n + mR(t, r),
      r,
      i.range(1.62, 1.8),
      a[i.int(0, a.length - 1)],
    );
  (yield, e.col(3027510).mat(0.4, 0.6, 0.05, 0));
  for (let t = 0; t < 4; t++) {
    let n = gR[t],
      i = gR[(t + 1) % 4],
      a = Math.hypot(i[0] - n[0], i[1] - n[1]),
      o = (i[0] - n[0]) / a,
      s = (i[1] - n[1]) / a,
      c = s * 0.15,
      l = -o * 0.15;
    for (let t = 3; t < a - 0.5; t += 3) {
      let i = n[0] + o * t + c,
        a = n[1] + s * t + l;
      e.box(i - 0.06, r, a - 0.06, i + 0.06, q.ceil, a + 0.06);
    }
  }
  e.col(16773332).mat(0.4, 0, 0.9, 1);
  for (let t = 0; t < 4; t++) {
    let n = gR[t],
      r = gR[(t + 1) % 4],
      i = Math.hypot(r[0] - n[0], r[1] - n[1]),
      a = ((r[1] - n[1]) / i) * 0.5,
      o = (-(r[0] - n[0]) / i) * 0.5;
    rM(
      e,
      [n[0] + a, q.ceil - 0.02, n[1] + o],
      [r[0] + a, q.ceil - 0.02, r[1] + o],
      [r[0] + a * 2, q.ceil - 0.02, r[1] + o * 2],
      [n[0] + a * 2, q.ceil - 0.02, n[1] + o * 2],
      [0, -1, 0],
    );
  }
  e.col(7297604).mat(0.7, 0, 0.02, 0);
  for (let t = -12; t < 20; t += 6)
    e.box(K.x0 + 2.2, r, t, K.x0 + 3, r + 0.45, t + 3);
  for (let t = -12; t < 0; t += 6)
    e.box(t, r, K.z0 + 2.2, t + 3, r + 0.45, K.z0 + 3);
  for (let [t, n] of [
    [-15.6, -6],
    [-15.7, 8],
    [-8, -15.6],
    [6, 22.4],
    [-3, 10],
  ])
    SR(e, t, r, n, i.range(1.62, 1.8), a[i.int(0, a.length - 1)]);
}
var cCe = [
  xR,
  {
    id: `shibuya-sky-stage`,
    site: xR.site,
    name: {
      ja: `SHIBUYA SKYE`,
      zh: `SHIBUYA SKYE 展望台`,
      en: `SHIBUYA SKYE observation deck`,
    },
    near: 70,
    interior: !0,
    build: sCe,
    far(e) {
      (e.col(6265406).mat(1, 0, 0, 0), e.flat(-1, -1, 1, 1, q.roof + 0.02));
    },
    bounds: () => [rR.x + K.x0, rR.z + K.z0, rR.x + K.x1, rR.z + K.z1],
    farBoxes: () => [],
  },
];
r.add({ 忠犬八公廣場: `ハチ公前広場`, 澀谷中心街: `渋谷センター街` });
var CR = Math.PI,
  lCe = 0.05,
  wR = 2,
  TR = (e, t) => (n) => ({ x: e, z: t, gy: n.groundHeight(e, t), facing: 0 }),
  ER = (e, t) => dS(e.c(`sbyArt`), t),
  DR = (e, t) => Xpe(e.c(`sbyArt2`), t);
function uCe(e) {
  let t = 0,
    n = e.length / 2;
  for (let r = 0; r < n; r++) {
    let i = (r + 1) % n;
    t += e[r * 2] * e[i * 2 + 1] - e[i * 2] * e[r * 2 + 1];
  }
  return t / 2;
}
function OR(e) {
  if (uCe(e) < 0) return [...e];
  let t = [];
  for (let n = e.length / 2 - 1; n >= 0; n--) t.push(e[n * 2], e[n * 2 + 1]);
  return t;
}
function kR(e, t, n, r, i, a = 0, o = 0, s) {
  let c = OR(t),
    l = c.length / 2;
  for (let t = 0; t < l; t++) {
    if (s?.(t)) continue;
    let u = (t + 1) % l;
    i && a > 0
      ? e.wall(c[t * 2], c[t * 2 + 1], c[u * 2], c[u * 2 + 1], n, r, i, a, o)
      : e.panel(c[t * 2], c[t * 2 + 1], c[u * 2], c[u * 2 + 1], n, r, i);
  }
}
function AR(e, t, n, r = !1) {
  let i = OR(t),
    a = e.white,
    o = i.length / 2,
    s = e.w.n;
  for (let t = 0; t < o; t++)
    e.v(i[t * 2], n, i[t * 2 + 1], 0, r ? -1 : 1, 0, a.u0, a.v0);
  for (let t = 1; t + 1 < o; t++)
    r ? e.tri(s, s + t + 1, s + t) : e.tri(s, s + t, s + t + 1);
}
function jR(e, t, n, r, i, a, o = 8, s = 5) {
  let c = [];
  for (let e = 0; e <= s; e++) {
    let t = -CR / 2 + (e / s) * CR;
    c.push(Math.max(0.001, i * Math.cos(t)), n + a * Math.sin(t));
  }
  e.lathe(t, r, c, e.seg(o), 0, e.white, !1, !0);
}
function MR(e, t, n, r, i, a, o, s, c, l) {
  for (let u = 0; u < l; u++) {
    let d = i + ((a - i) * u) / l,
      f = i + ((a - i) * (u + 1)) / l,
      p = (a - f) / (a - i),
      m = (a - d) / (a - i);
    e.panel(
      t + Math.cos(f) * r,
      n + Math.sin(f) * r,
      t + Math.cos(d) * r,
      n + Math.sin(d) * r,
      o,
      s,
      c,
      p,
      0,
      m,
      1,
    );
  }
}
function NR(e, t, n, r, i, a, o, s, c) {
  let l = Math.hypot(r - t, i - n) || 1,
    u = -(i - n) / l,
    d = (r - t) / l;
  e.panel(t + u * a, n + d * a, r + u * a, i + d * a, o, s, c);
}
function PR(e, t, n, r, i, a = 0) {
  let o = Math.hypot(n - e, r - t) || 1;
  return [
    e + (n - e) * i - ((r - t) / o) * a,
    t + (r - t) * i + ((n - e) / o) * a,
  ];
}
function FR(e, t, n, r = !1, i = 1.8) {
  e.push().col(9071176).mat(0.85);
  let [a, o] = r ? [0.23, i / 2] : [i / 2, 0.23];
  (e.box(t - a, 0.4, n - o, t + a, 0.46, n + o), e.col(3948354).mat(0.55, 0.5));
  for (let a of [-1, 1]) {
    let [o, s] = r ? [t, n + a * (i / 2 - 0.15)] : [t + a * (i / 2 - 0.15), n];
    e.box(o - 0.04, 0, s - 0.2, o + 0.04, 0.4, s + 0.2);
  }
  e.pop();
}
