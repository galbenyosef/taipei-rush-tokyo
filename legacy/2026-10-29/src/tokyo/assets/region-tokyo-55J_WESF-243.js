// tokyo/assets/region-tokyo-55J_WESF 243 — panel
// Lines 91942-92272 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Uxe(e) {
  e.col(3428398).mat(0.95, 0, 0, 0);
  for (let [t, n, r, i] of [
    [-55, -92, 55, -78],
    [-55, 54, 55, 66],
    [-55, -78, -44, 54],
    [44, -78, 55, 54],
  ])
    e.box(t, 0, n, r, 13, i);
  e.col(15986920).mat(0.85, 0, 0, 0);
  let t = cI.x + 0.3,
    n = cI.z0 - 0.3,
    r = cI.z1 + 0.3;
  (e.panel(t, n, -t, n, 0, cI.h),
    e.panel(-t, n, -t, r, 0, cI.h),
    e.panel(-t, r, t, r, 0, cI.h),
    e.panel(t, r, t, n, 0, cI.h));
}
var Wxe = {
  id: `koishikawa-korakuen`,
  site: (e) => ({
    x: aI.x,
    z: aI.z,
    gy: e.groundHeight(aI.x, aI.z),
    facing: 0,
  }),
  name: {
    ja: `小石川後楽園`,
    zh: `小石川後樂園`,
    en: `Koishikawa Korakuen Gardens`,
  },
  near: 240,
  build: Hxe,
  far: Uxe,
  bounds: () => [-1123, -813, -1010, -651],
  farBoxes: (e, t) => [
    {
      x0: aI.x - 55,
      x1: aI.x + 55,
      z0: aI.z - 92,
      z1: aI.z - 78,
      y0: t.gy,
      y1: t.gy + 13,
      rgb: [0.12, 0.2, 0.1],
    },
    {
      x0: aI.x - 55,
      x1: aI.x + 55,
      z0: aI.z + 54,
      z1: aI.z + 66,
      y0: t.gy,
      y1: t.gy + 13,
      rgb: [0.12, 0.2, 0.1],
    },
    {
      x0: aI.x + 44,
      x1: aI.x + 55,
      z0: aI.z - 78,
      z1: aI.z + 54,
      y0: t.gy,
      y1: t.gy + 13,
      rgb: [0.12, 0.2, 0.1],
    },
  ],
  anchors: [
    {
      key: `korakuen-engetsukyo`,
      lx: -40,
      lz: 8,
      turn: 0.9,
      name: {
        zh: `小石川後樂園 圓月橋`,
        en: `Koishikawa Korakuen, Engetsu-kyo bridge`,
      },
    },
    {
      key: `korakuen-nishimon`,
      lx: -63,
      lz: 25.5,
      turn: Math.PI / 2,
      name: { zh: `小石川後樂園 西門`, en: `Koishikawa Korakuen, West Gate` },
    },
  ],
  blip: !0,
};
r.add({ "東京大學 本鄉校區": `東京大学 本郷キャンパス` });
var SI = { x: -605.5, z: -1007 },
  CI = { x0: -707, z0: -1167, x1: -504, z1: -847 },
  wI = { x0: -662, x1: -630, z0: -972, z1: -948 },
  TI = { x: (wI.x0 + wI.x1) / 2, z: (wI.z0 + wI.z1) / 2 },
  EI = -880,
  DI = -1e3,
  Gxe = -707.05,
  OI = { x: -614, z: -1e3 },
  kI = 0.02,
  AI = 0.04,
  jI = 0.06,
  MI = 0.08,
  NI = 0.1,
  PI = 0.12,
  FI = 14075042,
  Kxe = 10130568,
  II = 6117458,
  LI = 11875883,
  qxe = 6053732,
  RI = 15789023,
  Jxe = 5592922,
  Yxe = 8215104,
  zI = { green: 7117380, bloom: 9420374, autumn: 15121702, bare: 0 },
  BI = { green: 6130240, bloom: 8170576, autumn: 12088364, bare: 0 },
  Xxe = { green: 6262334, bloom: 8827984, autumn: 12728870, bare: 0 },
  VI = 4087091;
function HI(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  (e.emis(u, f), e.wall(t, n, r, i, a, o, s, c, l, d), e.emis(0, 0));
}
function UI(e, t, n, r, i) {
  let a = (e - t) / 2,
    o = (e + t) / 2,
    s = 2 * a * r,
    c = Math.acos((s - a) / s),
    l = [];
  for (let e = 0; e <= i; e++) {
    let t = (c * e) / i;
    l.push([o + a - s + s * Math.cos(t), n + s * Math.sin(t)]);
  }
  for (let e = i - 1; e >= 0; e--) {
    let t = (c * e) / i;
    l.push([o - (a - s + s * Math.cos(t)), n + s * Math.sin(t)]);
  }
  return l;
}
function WI(e, t, n, r, i, a, o, s, c, l, u) {
  let d = UI(t, n, a, s, e.coarse ? 2 : 3),
    f = t - n;
  for (let n = 0; n + 1 < d.length; n++) {
    let [s, p] = d[n],
      [m, h] = d[n + 1],
      g = (t - s) / f,
      _ = (t - m) / f;
    (e.quad(s, p, r, m, h, r, m, o, r, s, o, r, c, g, (p - a) / (o - a), _, 1),
      e.quad(s, p, r, s, p, r + i, m, h, r + i, m, h, r, u),
      l !== null &&
        !e.coarse &&
        e.quad(m, h, r + i, s, p, r + i, s, l, r + i, m, l, r + i, c));
  }
}
function GI(e, t, n, r, i, a, o, s) {
  let c = t + a / 2,
    l = t - a / 2,
    u = n - o;
  (e.wall(c, u, l, u, r, i, s, 2, 10),
    e.coarse ||
      (e.panel(l, u, l, n, r, i, s, 0, 0, Math.min(1, o / 2), 1),
      e.panel(c, n, c, u, r, i, s, 0, 0, Math.min(1, o / 2), 1)),
    e.quad(c, i, u, l, i, u, l, i + o * 1.2, n, c, i + o * 1.2, n));
}
var KI = 4.8,
  qI = 2.7;
function Zxe(e, t, n) {
  let { L: r, D: i } = n,
    a = n.floors * KI,
    o = a + 1.3,
    s = n.bg && e.coarse ? 2 * KI : KI,
    c = t.c(`todaiBay`),
    l = t.A.sub(`todaiMisc`, 0.75, 0, 1, 1),
    u = t.A.sub(`todaiMisc`, 0, 0, 0.5, 1),
    d = n.bg && e.coarse ? 7.2 : 3.6,
    f = r / Math.max(1, Math.round(r / d)),
    p = i / Math.max(1, Math.round(i / d)),
    m = (e) => n.e0 + ((n.e1 - n.e0) * e) / o,
    h = n.flags,
    g = n.arcade;
  if ((e.col(16777215).mat(0.85, 0, 0, 0), g))
    (HI(e, r / 2, 0, -r / 2, 0, KI, a, c, f, s, m(KI), m(a), h),
      $xe(e, t, n, g, m));
  else if (n.portal) {
    let t = 2.2;
    (HI(e, r / 2, 0, t, 0, 0, a, c, f, s, m(0), m(a), h),
      HI(e, -2.2, 0, -r / 2, 0, 0, a, c, f, s, m(0), m(a), h),
      HI(e, t, 0, -2.2, 0, KI, a, c, f, s, m(KI), m(a), h),
      e
        .emis(Math.max(0.2, m(0)), h)
        .panel(t, 0, -2.2, 0, 0, KI, u)
        .emis(0, 0));
  } else HI(e, r / 2, 0, -r / 2, 0, 0, a, c, f, s, m(0), m(a), h);
  if ((HI(e, r / 2, 0, -r / 2, 0, a, o, l, 4, 5, m(a), m(o), h), !n.skipBack)) {
    let t = g?.passage;
    if (g && t !== void 0) {
      let [o, u] = JI(n, g, t);
      (HI(e, -r / 2, i, u, i, 0, a, c, f, s, m(0) * 0.6, m(a) * 0.6, h),
        HI(e, o, i, r / 2, i, 0, a, c, f, s, m(0) * 0.6, m(a) * 0.6, h),
        HI(e, u, i, o, i, KI, a, c, o - u, KI, m(KI) * 0.6, m(a) * 0.6, h),
        Qxe(e, o, u, i, KI, l));
    } else HI(e, -r / 2, i, r / 2, i, 0, a, c, f, s, m(0) * 0.6, m(a) * 0.6, h);
    HI(e, -r / 2, i, r / 2, i, a, o, l, 4, 5, 0, 0, 0);
  }
  (HI(e, r / 2, i, r / 2, 0, 0, a, c, p, s, m(0) * 0.8, m(a) * 0.8, h),
    HI(e, -r / 2, 0, -r / 2, i, 0, a, c, p, s, m(0) * 0.8, m(a) * 0.8, h),
    HI(e, r / 2, i, r / 2, 0, a, o, l, 4, 5, 0, 0, 0),
    HI(e, -r / 2, 0, -r / 2, i, a, o, l, 4, 5, 0, 0, 0),
    e.col(FI).mat(0.8, 0, n.e1 * 0.5, 1));
  let _ = [r / 2, 0, -r / 2, 0, -r / 2, i, r / 2, i];
  if (
    (e.coarse || e.sweep(_, mC(4.7, 0.12, 0.32), !0),
    e.sweep(_, pC(a - 0.2, 0.4, 0.7), !0),
    e.coarse || e.sweep(_, mC(o - 0.12, 0.1, 0.16), !0),
    e.coarse ||
      (e.col(Kxe).mat(0.85, 0, 0, 0),
      g
        ? e.sweep(
            [r / 2, 0, r / 2, i, -r / 2, i, -r / 2, 0],
            mC(0, 0.1, 0.7),
            !1,
          )
        : e.sweep(_, mC(0, 0.1, 0.7), !0)),
    e.col(II).mat(0.9, 0, 0, 0),
    e.flat(-r / 2, 0, r / 2, i, a + 0.6),
    e.coarse ||
      (e.col(Yxe).mat(0.9, 0, 0, 0),
      e.panel(-r / 2, 0, r / 2, 0, a + 0.6, o),
      e.panel(r / 2, i, -r / 2, i, a + 0.6, o),
      e.panel(-r / 2, i, -r / 2, 0, a + 0.6, o),
      e.panel(r / 2, 0, r / 2, i, a + 0.6, o),
      e
        .col(9077112)
        .mat(0.85, 0, 0, 0)
        .box(
          r * 0.18,
          a + 0.6,
          i * 0.35,
          r * 0.18 + 3.4,
          a + 3.4,
          i * 0.35 + 3.2,
        )),
    n.pier)
  ) {
    e.col(16777215).mat(0.85, 0, n.e0 * 0.6, 1);
    let t = Math.max(1, Math.round(r / n.pier));
    for (let n = 1; n < t; n++)
      GI(e, r / 2 - (r * n) / t, 0, g ? KI : 0, o + 0.5, 0.6, 0.35, l);
    (GI(e, r / 2 - 0.3, 0, 0, o + 0.9, 0.6, 0.45, l),
      GI(e, -r / 2 + 0.3, 0, 0, o + 0.9, 0.6, 0.45, l));
  }
  e.mat(0.85, 0, 0, 0).col(16777215).emis(0, 0);
  let v = g?.depth ?? 0;
  if (g && g.passage !== void 0) {
    let [t, a] = JI(n, g, g.passage);
    (e.solid(t, v, r / 2, i, 0, o),
      e.solid(-r / 2, v, a, i, 0, o),
      e.solid(a, v, t, i, 4.6, o));
  } else e.solid(-r / 2, v, r / 2, i, 0, o);
  g && e.solid(-r / 2, 0, r / 2, v, 4.6, o);
}
function JI(e, t, n) {
  let r = 0.9,
    i = (e.L - r) / t.bays,
    a = e.L / 2 - r / 2 - n * i;
  return [a - r / 2, a - i + r / 2];
}
function Qxe(e, t, n, r, i, a) {
  let o = UI(t, n, qI, 0.62, e.coarse ? 2 : 4);
  for (let t = 0; t + 1 < o.length; t++) {
    let [n, s] = o[t],
      [c, l] = o[t + 1];
    e.quad(c, l, r, n, s, r, n, i, r, c, i, r, a);
  }
}
function $xe(e, t, n, r, i) {
  let { L: a, D: o } = n,
    s = 0.7,
    c = qI,
    l = 4.5,
    u = t.A.sub(`todaiMisc`, 0.75, 0, 1, 1),
    d = t.A.sub(`todaiMisc`, 0, 0, 0.5, 1),
    f = t.c(`todaiBay`),
    p = 0.9,
    m = (a - p) / r.bays;
  e.col(16777215).mat(0.85, 0, 0, 0);
  for (let t = 0; t <= r.bays; t++) {
    let h = a / 2 - p / 2 - t * m,
      g = h + p / 2,
      _ = h - p / 2;
    if (
      (HI(e, g, 0, _, 0, 0, KI, u, 2, 5, i(0), i(KI), n.flags),
      t > 0 && e.panel(g, s, g, 0, 0, c, u, 0, 0, 0.35, c / 5),
      t < r.bays && e.panel(_, 0, _, s, 0, c, u, 0, 0, 0.35, c / 5),
      !e.coarse &&
        t > 0 &&
        t < r.bays &&
        e.panel(_, s, g, s, 0, l, u, 0, 0, 0.45, l / 5),
      e.solid(_, 0, g, s, 0, KI),
      t === r.bays)
    )
      break;
    let v = _,
      y = h - m + p / 2;
    (e.emis(i(c), n.flags),
      WI(e, v, y, 0, s, c, KI, 0.62, u, l, u),
      e.emis(0, 0));
    let b = t === 0 ? a / 2 : v + p / 2,
      x = t === r.bays - 1 ? -a / 2 : y - p / 2;
    t === r.passage
      ? (e.panel(b, r.depth, v, r.depth, 0, l, u, 0, 0, 0.2, l / 5),
        e.panel(y, r.depth, x, r.depth, 0, l, u, 0, 0, 0.2, l / 5),
        e.wall(v, r.depth, v, o, 0, l, u, 2, 5),
        e.wall(y, o, y, r.depth, 0, l, u, 2, 5),
        e
          .col(14209216)
          .emis(0.3, 1)
          .flat(y, r.depth, v, o, l, e.white, 0, 0, !1)
          .emis(0, 0)
          .col(16777215))
      : (e.emis(0.18, G),
        e.panel(b, r.depth, x, r.depth, 0, l, t % 2 ? d : f, 0, 0, 1, l / KI),
        e.emis(0, 0));
  }
  (e.col(14209216).emis(0.32, 1),
    e.flat(-a / 2, s, a / 2, r.depth, l, e.white, 0, 0, !1),
    e.emis(0, 0).col(12170152).mat(0.9, 0, 0, 0),
    e.flat(
      -a / 2,
      0,
      a / 2,
      r.depth,
      MI,
      t.c(`paving`),
      e.coarse ? 0 : 4,
      e.coarse ? 0 : 4,
    ),
    e.col(16777215));
}
