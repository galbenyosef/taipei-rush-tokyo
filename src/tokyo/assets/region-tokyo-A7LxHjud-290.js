// tokyo/assets/region-tokyo-A7LxHjud 290 — math
// Lines 106565-106863 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var UTe = {
  id: `geihinkan`,
  site: BTe,
  name: {
    ja: `迎賓館赤坂離宮`,
    zh: `迎賓館赤坂離宮`,
    en: `State Guest House, Akasaka Palace`,
  },
  near: 250,
  build: VTe,
  far: HTe,
  bounds: () => [xU.x0, xU.z0, xU.x1, xU.z1],
  farBoxes: () => [
    {
      x0: CU.x0,
      x1: CU.x1,
      z0: CU.z0,
      z1: CU.z1,
      y0: 0.15,
      y1: 24,
      rgb: [0.85, 0.83, 0.78],
      lit: !0,
    },
    {
      x0: TU.x0,
      x1: CU.x0,
      z0: CU.z0,
      z1: CU.z0 + TU.w,
      y0: 0.15,
      y1: 20,
      rgb: [0.85, 0.83, 0.78],
    },
    {
      x0: TU.x0,
      x1: CU.x0,
      z0: CU.z1 - TU.w,
      z1: CU.z1,
      y0: 0.15,
      y1: 20,
      rgb: [0.85, 0.83, 0.78],
    },
  ],
  anchors: [
    {
      key: `geihinkan-gate`,
      lx: xU.x0 - 14 - SU.x,
      lz: EU.z - SU.z,
      turn: 0,
      name: { zh: `迎賓館 正門`, en: `Akasaka Palace Main Gate` },
    },
  ],
  blip: !0,
};
r.add({ 代代木公園: `代々木公園` });
var NU = (e, t, n, r = 0) =>
  e > n.x0 - r && e < n.x1 + r && t > n.z0 - r && t < n.z1 + r;
function WTe(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = o * o + s * s || 1,
    l = Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c));
  return Math.hypot(e - n - o * l, t - r - s * l);
}
function PU(e, t, n, r = !1) {
  let i = 1 / 0,
    a = n.length;
  for (let o = 0; o + 1 < a + +!!r; o++) {
    let r = n[o],
      s = n[(o + 1) % a];
    i = Math.min(i, WTe(e, t, r[0], r[1], s[0], s[1]));
  }
  return i;
}
var FU = (e) => (t) => {
  let n = (e.x0 + e.x1) / 2,
    r = (e.z0 + e.z1) / 2;
  return { x: n, z: r, gy: t.groundHeight(n, r), facing: 0 };
};
function IU(e, t) {
  return e.sub(-(t.x0 + t.x1) / 2, 0, -(t.z0 + t.z1) / 2, 0);
}
function LU(e, t, n = 3) {
  let r = [],
    i = [
      [e.x1 - t, e.z0 + t, -Math.PI / 2],
      [e.x1 - t, e.z1 - t, 0],
      [e.x0 + t, e.z1 - t, Math.PI / 2],
      [e.x0 + t, e.z0 + t, Math.PI],
    ];
  for (let [e, a, o] of i)
    for (let i = 0; i <= n; i++) {
      let s = o + (i / n) * (Math.PI / 2);
      r.push([e + Math.cos(s) * t, a + Math.sin(s) * t]);
    }
  return r;
}
function RU(e, t, n, r, i, a, o, s, c, l = 6) {
  let u = HV(t),
    d = [];
  for (let t = 0, f = 0; t < r && f < r * 10; f++) {
    let r = u.range(n.x0, n.x1),
      f = u.range(n.z0, n.z1),
      p = i[Math.floor(u.next() * i.length)],
      m = u.range(a, o),
      h = Math.floor(u.next() * 1e6);
    s(r, f) ||
      d.some(([e, t]) => (e - r) ** 2 + (t - f) ** 2 < l * l) ||
      (d.push([r, f]), t++, !(e.coarse && t % 2) && GV(e, p, r, f, m, h, c));
  }
}
function zU(e, t, n, r, i, a, o = 10, s = 16) {
  (JV(e, t.x0, t.z0, t.x1, t.z0, n, 0, r, i, o, s, a),
    JV(e, t.x1, t.z0, t.x1, t.z1, n, 0, r + 1, i, o, s, a),
    JV(e, t.x1, t.z1, t.x0, t.z1, n, 0, r + 2, i, o, s, a),
    JV(e, t.x0, t.z1, t.x0, t.z0, n, 0, r + 3, i, o, s, a));
}
function BU(e, t, n, r, i) {
  (e.push().col(15922936).mat(0.3, 0, 0.35, 1),
    UV(
      e,
      t,
      n,
      e.coarse
        ? [
            [i, zV.WATER],
            [i * 0.3, r * 0.8],
            [0, r],
          ]
        : [
            [i, zV.WATER],
            [i * 0.55, r * 0.4],
            [i * 0.3, r * 0.8],
            [i * 0.6, r * 0.9],
            [0, r],
          ],
      e.coarse ? 4 : 7,
      15660022,
      1,
    ),
    e.pop());
}
var VU = { x0: -2297, z0: 1010, x1: -1925, z1: 1180 },
  HU = { x: -2125, z: 1140, rx: 34, rz: 15 },
  GTe = { x0: -2215, z0: 1030, x1: -2030, z1: 1112 },
  UU = LU(
    { x0: VU.x0 + 70, z0: VU.z0 + 14, x1: VU.x1 - 14, z1: VU.z1 - 12 },
    18,
  ),
  WU = LU(
    { x0: VU.x0 + 10, z0: VU.z0 + 14, x1: VU.x0 + 58, z1: VU.z1 - 14 },
    14,
  ),
  GU = { z: 1045 },
  KU = [
    [VU.x1, GU.z],
    [VU.x1 - 14, GU.z],
  ],
  qU = [
    [
      [VU.x1 - 14, 1100],
      [-2040, 1120],
      [HU.x + HU.rx + 6, HU.z - 4],
    ],
    [
      [VU.x0 + 70, 1060],
      [VU.x0 + 58, 1060],
    ],
    [
      [-2110, VU.z1 - 12],
      [-2110, VU.z1],
    ],
  ];
function* KTe(e, t) {
  let n = IU(e, VU),
    r = t.season ?? `green`,
    i = r === `bare` ? 9144924 : r === `autumn` ? 7309894 : 6262595,
    a = r === `bare` ? 10130534 : 7906130;
  XV(e, VU.x0, VU.z0, VU.x1, VU.z1, zV.LAWN, e.coarse ? 60 : 20, i, a, 61);
  let o = t.c(`paving`);
  (ZV(e, [...UU, UU[0]], 7, zV.PATH, 12169891, o, 8),
    ZV(e, KU, 10, zV.PAVE, 12761769, o, 4));
  for (let t of qU) ZV(e, t, 5, zV.PAVE, 12433063, o, 4);
  (ZV(e, [...WU, WU[0]], 5, zV.PATH, 6119523, e.white, 6),
    e.coarse || ZV(e, [...WU, WU[0]], 0.15, zV.MARK, 15790312, e.white, 6),
    yield,
    QV(e, HU.x, HU.z, HU.rx, HU.rz, 6201),
    BU(e, HU.x, HU.z, 14, 1.3));
  for (let t = 0; t < (e.coarse ? 4 : 8); t++) {
    let n = (t / (e.coarse ? 4 : 8)) * Math.PI * 2;
    BU(e, HU.x + Math.cos(n) * 16, HU.z + Math.sin(n) * 7, 5.5, 0.6);
  }
  yield;
  let s = (e, t, n) =>
    PU(e, t, UU, !0) < 3.5 + n ||
    PU(e, t, WU, !0) < 2.5 + n ||
    PU(e, t, KU) < 5 + n ||
    qU.some((r) => PU(e, t, r) < 2.5 + n) ||
    NU(e, t, GTe, n) ||
    ((e - HU.x) / (HU.rx + 6 + n)) ** 2 + ((t - HU.z) / (HU.rz + 6 + n)) ** 2 <
      1;
  (yield* qV(e, {
    x0: VU.x0,
    z0: VU.z0,
    x1: VU.x1,
    z1: VU.z1,
    step: e.coarse ? 14 : 9,
    inside: (e, t) =>
      !s(e, t, 3) &&
      NU(e, t, {
        x0: VU.x0 + 6,
        z0: VU.z0 + 6,
        x1: VU.x1 - 6,
        z1: VU.z1 - 6,
      }) &&
      (e < VU.x0 + 9 ||
        e > VU.x1 - 12 ||
        t < VU.z0 + 12 ||
        t > VU.z1 - 11 ||
        (e > VU.x0 + 62 && e < VU.x0 + 72) ||
        (e > -2010 && t > 1060)),
    height: (e, t) => 12 + 3 * Math.sin(e * 0.05) + 2 * Math.cos(t * 0.07),
    dark: 4153396,
    light: 6130238,
    salt: 63,
    lump: 4,
    baseY: 3.2,
    inset: 3.5,
    trunks: () => !0,
  }),
    zU(
      e,
      { x0: VU.x0 + 3.5, z0: VU.z0 + 3.5, x1: VU.x1 - 3.5, z1: VU.z1 - 3.5 },
      10,
      6401,
      4022323,
      (e, t) =>
        (Math.abs(t - GU.z) < 9 && e > VU.x1 - 20) ||
        (Math.abs(e + 2110) < 8 && t > VU.z1 - 15) ||
        (Math.abs(e + 2015) < 8 && t < VU.z0 + 15) ||
        s(e, t, 0),
      9,
      15,
    ),
    yield);
  for (let t = VU.x1 - 3; t > VU.x1 - 15; t -= 6)
    for (let n of [-7, 7])
      GV(e, `ginkgo`, t, GU.z + n, 13, Math.round(t * 7 + n), r);
  RU(
    e,
    6301,
    { x0: VU.x0 + 60, z0: VU.z0 + 14, x1: VU.x1 - 14, z1: VU.z1 - 12 },
    e.coarse ? 16 : 28,
    [`keyaki`, `ever`, `sakura`, `ginkgo`, `keyaki`],
    9,
    17,
    (e, t) =>
      s(e, t, 1.5) ||
      t < VU.z0 + 12 ||
      t > VU.z1 - 11 ||
      e < VU.x0 + 9 ||
      e > VU.x1 - 12,
    r,
    7,
  );
  for (let [t, n] of [
    [-2160, 1060],
    [-2080, 1085],
    [-2130, 1095],
  ])
    GV(e, `keyaki`, t, n, 18, t * 3 + n, r);
  if ((yield, !e.coarse))
    for (let t = 0; t < UU.length; t += 2) {
      let [n, r] = UU[t],
        [i, a] = UU[(t + 1) % UU.length],
        o = i - n,
        s = a - r,
        c = Math.hypot(o, s) || 1,
        l = (-s / c) * 5,
        u = (o / c) * 5;
      (tH(e, n + l, r + u, 4, !0),
        eH(
          e,
          n + (o / c) * 4 + l * 0.95,
          r + (s / c) * 4 + u * 0.95,
          Math.atan2(s, o),
        ));
    }
  ($V(e, VU.x1 - 0.6, VU.z0 + 0.6, VU.x1 - 0.6, VU.z1 - 0.6, 1.4, [
    [GU.z - 6 - VU.z0, GU.z + 6 - VU.z0],
  ]),
    $V(e, VU.x0 + 0.6, VU.z1 - 0.6, VU.x1 - 0.6, VU.z1 - 0.6, 1.4, [
      [-2114 - VU.x0, -2106 - VU.x0],
    ]),
    $V(e, VU.x0 + 0.6, VU.z0 + 0.6, VU.x0 + 0.6, VU.z1 - 0.6, 1.4),
    $V(e, VU.x0 + 0.6, VU.z0 + 0.6, VU.x1 - 0.6, VU.z0 + 0.6, 1.4, [
      [-2020 - VU.x0, -2010 - VU.x0],
    ]),
    e.leave(n));
}
