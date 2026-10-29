// tokyo/assets/region-tokyo-A7LxHjud 42 — math
// Lines 21805-22152 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function wie(e, t) {
  for (let n of Cie)
    if (e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1) return !0;
  return !1;
}
var Tie = [
    {
      id: `midtown-nihonbashi-podium`,
      x0: 268.2,
      z0: -144.8,
      x1: 279.6,
      z1: -126.4,
    },
    {
      id: `midtown-nihonbashi-riverside`,
      x0: 279.8,
      z0: -158.6,
      x1: 288,
      z1: -148.6,
    },
    { id: `tokyo-beacon-east`, x0: 35.25, z0: -158.75, x1: 62.75, z1: -125.75 },
    { id: `tokyo-beacon-west`, x0: -9.75, z0: -158.75, x1: 24.75, z1: -125.75 },
  ],
  Eie = (() => {
    let e = [
        { id: `hj-station-wedge`, x0: -1850, z0: 878, x1: ms - 6.5, z1: 975 },
      ],
      t = (e) => {
        let t = ys(e);
        return vs(e) - 6 / Math.max(0.5, t.tz);
      },
      n = 0;
    for (let r = 615; r < 975; r += 20) {
      let i = Math.min(975, r + 20);
      e.push({
        id: `hj-forest-${n++}`,
        x0: -2040,
        z0: r,
        x1: Math.min(t(r), t(i)),
        z1: i,
      });
    }
    return (
      e.push({
        id: `hj-forest-${n++}`,
        x0: -1990,
        z0: 975,
        x1: Math.min(-1862, t(975)),
        z1: 1005,
      }),
      e.push({
        id: `hj-forest-${n++}`,
        x0: -1990,
        z0: 1005,
        x1: Math.min(-1867, t(1005)),
        z1: 1105,
      }),
      e
    );
  })(),
  Die = [
    { id: `tokyo-gym-arena`, x0: -1692.8, z0: 546.8, x1: -1652.3, z1: 601.8 },
    { id: `tokyo-gym-south`, x0: -1692.8, z0: 614.3, x1: -1652.3, z1: 669.3 },
    { id: `with-harajuku`, x0: -1815.8, z0: 895.3, x1: -1779, z1: 963 },
    { id: `aoyama-cemetery-0`, x0: -1363.8, z0: 856.3, x1: -1300, z1: 887.3 },
    { id: `aoyama-cemetery-1`, x0: -1300, z0: 777.3, x1: -1244.8, z1: 887.3 },
    { id: `aoyama-cemetery-2`, x0: -1235.3, z0: 852.8, x1: -1180, z1: 919.3 },
    { id: `aoyama-cemetery-3`, x0: -1300, z0: 896.8, x1: -1244.8, z1: 919.3 },
    { id: `aoyama-cemetery-4`, x0: -1255.3, z0: 960.8, x1: -1180, z1: 1048.3 },
    { id: `jhk-center`, x0: -2030, z0: 1183, x1: -1906, z1: 1240 },
    {
      id: `shibuya-streamline`,
      x0: -1692.8,
      z0: 1465.8,
      x1: -1661.8,
      z1: 1520,
    },
    {
      id: `shibuya-qflat`,
      x0: -1910.75,
      z0: 1285.25,
      x1: -1869.25,
      z1: 1305.75,
    },
    { id: `shibuya-taisei`, x0: -1882, z0: 1256, x1: -1869.25, z1: 1274.75 },
  ],
  Oie = [Nc, ...bie, ...xie, ...Tie, ...Eie, ...Die];
function kie(e, t, n, r) {
  for (let i of Oie)
    if (n > i.x0 && e < i.x1 && r > i.z0 && t < i.z1) return !0;
  return !1;
}
var Aie = [
    { id: `tokyo-station-marunouchi-n`, x0: -37, z0: -99, x1: -13, z1: -20.2 },
    { id: `tokyo-station-marunouchi-s`, x0: -37, z0: -12, x1: -13, z1: 99 },
    { id: `tokyo-station-dome-n`, x0: -40.5, z0: -82, x1: -37, z1: -60 },
    { id: `tokyo-station-dome-s`, x0: -40.5, z0: 60, x1: -37, z1: 82 },
    { id: `yaesu-deck-columns`, x0: 29.8, z0: -58, x1: 33.6, z1: 72 },
    { id: `yaesu-tower-north`, x0: 24, z0: -92, x1: 60, z1: -61 },
    { id: `yaesu-tower-south`, x0: 24, z0: 75, x1: 60, z1: 108 },
    {
      id: `nihonbashi-oyabashira-nw`,
      x0: 231.1,
      z0: -190.7,
      x1: 233.2,
      z1: -188.6,
    },
    {
      id: `nihonbashi-oyabashira-ne`,
      x0: 266.8,
      z0: -190.7,
      x1: 268.9,
      z1: -188.6,
    },
    {
      id: `nihonbashi-oyabashira-sw`,
      x0: 231.1,
      z0: -171.4,
      x1: 233.2,
      z1: -169.3,
    },
    {
      id: `nihonbashi-oyabashira-se`,
      x0: 266.8,
      z0: -171.4,
      x1: 268.9,
      z1: -169.3,
    },
    { id: `nihonbashi-genpyo`, x0: 228.5, z0: -188.8, x1: 231.1, z1: -187.8 },
    { id: `nihonbashi-otohime`, x0: 269.5, z0: -188.8, x1: 271.4, z1: -187.8 },
    {
      id: `nihonbashi-pier-gate`,
      x0: 270.4,
      z0: -172.9,
      x1: 270.8,
      z1: -171.1,
    },
    { id: `akiba-tvkaikan`, x0: -110.5, z0: -632.2, x1: -86.5, z1: -618.75 },
    { id: `akiba-north-glass`, x0: -110.5, z0: -684.5, x1: -86.5, z1: -655 },
    ...Sie,
    {
      id: `midtown-nihonbashi-podium`,
      x0: 268.2,
      z0: -144.8,
      x1: 279.6,
      z1: -126.4,
    },
    {
      id: `midtown-nihonbashi-riverside`,
      x0: 279.8,
      z0: -158.6,
      x1: 288,
      z1: -148.6,
    },
    { id: `tokiwabashi-beacon`, x0: 46.4, z0: -157, x1: 62.6, z1: -126.8 },
    { id: `beacon-tower-site`, x0: 3.4, z0: -158.8, x1: 24.9, z1: -125.8 },
    { id: `shibuya-hachiko-block`, x0: jc.x0, z0: jc.z0, x1: jc.x1, z1: jc.z1 },
  ],
  jie = [
    {
      id: `tokyo-station-central-passage`,
      x0: -34,
      z0: -20,
      x1: -13,
      z1: -12.2,
    },
    {
      id: `akiba-denshi-center-aisle`,
      x0: -106.2,
      z0: -645.3,
      x1: -85.5,
      z1: -642.7,
    },
  ];
function Fc(e, t) {
  for (let n of jie)
    if (e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1) return !0;
  return !1;
}
var Mie = [
  { id: `nihonbashi-deck-sides`, x0: 231, z0: -188, x1: 269, z1: -172 },
];
function Nie(e, t, n) {
  for (let r of Mie)
    if (
      e > r.x0 &&
      e < r.x1 &&
      Math.min(t, n) >= r.z0 &&
      Math.max(t, n) <= r.z1
    )
      return !0;
  return !1;
}
function Ic(e, t, n, r) {
  for (let i of Aie)
    if (n > i.x0 && e < i.x1 && r > i.z0 && t < i.z1) return !0;
  return !1;
}
var Pie = [
  { id: `tnm`, x0: -287.1, z0: -1406, x1: -204.9, z1: -1353 },
  { id: `saigo`, x0: -175.5, z0: -1231, x1: -160.5, z1: -1214.8 },
];
function Lc(e, t, n = 0) {
  for (let r of Pie)
    if (e > r.x0 - n && e < r.x1 + n && t > r.z0 - n && t < r.z1 + n) return !0;
  return !1;
}
var Rc = { n: 3, w: 0.92, d: 0.62, h: 1.72, gap: 0.55 },
  zc = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  Bc = 1.2,
  Vc = 0.55,
  Hc = 1.55,
  Uc = 1.15,
  Wc = 9,
  Gc = 1.3;
function Fie(e, t) {
  let n = Js[t.id];
  if (!n) return [t.sc - 40, t.sc + 40];
  e.path.pos(t.sc, 0, B);
  let r = e.path.project(B.x, n[0]).s,
    i = e.path.project(B.x, n[1]).s;
  return [Math.min(r, i, t.sc - 40), Math.max(r, i, t.sc + 40)];
}
var Iie = `tokyo-arch`;
function Kc(e, t, n) {
  return new le(de(Iie, e.id, Math.round(t), n));
}
function qc(e, t) {
  return e.platforms.some(
    (e) => e.rideable && t + 8 > e.sc - 40 && t < e.sc + 40,
  );
}
function Lie(e, t, n) {
  return qc(e, t) || Kc(e, t, n).next() < 0.45;
}
var Rie = 14.3,
  Jc = {
    conc: [176, 172, 164],
    concDark: [138, 135, 128],
    concUnder: [120, 117, 110],
    parapet: [186, 183, 175],
    girder: [118, 136, 146],
    girderDark: [86, 100, 108],
    ballast: [104, 96, 86],
    slabTrack: [150, 148, 142],
    sleeper: [92, 90, 86],
    rail: [118, 112, 104],
    railTop: [186, 186, 190],
    brick: [255, 255, 255],
    brickDark: [150, 110, 96],
    mast: [92, 98, 102],
    platform: [168, 166, 160],
    platEdge: [236, 236, 230],
    tactile: [228, 196, 40],
    canopy: [220, 222, 222],
    canopyUnder: [196, 198, 198],
    canopyCol: [126, 132, 136],
    psd: [222, 224, 226],
    psdGate: [196, 202, 206],
    psdTop: [150, 156, 160],
    stationWall: [206, 202, 194],
    glass: [58, 72, 84],
    hood: [168, 166, 160],
    shutter: [120, 122, 124],
  },
  Yc = (e, t, n = 1) => e.setColor(R(t[0] * n), R(t[1] * n), R(t[2] * n)),
  Xc = { x: 0, z: 0, tx: 0, tz: 1 },
  Zc = { u0: 0, v0: 0, u1: 0, v1: 0 },
  Qc = Zc,
  B = { x: 0, z: 0 };
function $c(e, t, n) {
  return (e.path.pos(t, n, B), B);
}
function el(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 1, m = 0, h = 1) {
  t.path.pos(n, i, B);
  let g = B.x,
    _ = B.z;
  t.path.pos(r, a, B);
  let v = B.x,
    y = B.z,
    b = d ?? Qc,
    x = b.u0 + (b.u1 - b.u0) * f,
    S = b.u0 + (b.u1 - b.u0) * p,
    C = b.v0 + (b.v1 - b.v0) * m,
    w = b.v0 + (b.v1 - b.v0) * h;
  u > 0
    ? e.quad(g, o, _, v, c, y, v, l, y, g, s, _, x, C, S, w)
    : e.quad(v, c, y, g, o, _, g, s, _, v, l, y, S, C, x, w);
}
function tl(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
  let h = n;
  for (; h < r - 1e-4;) {
    let g = Math.floor(h / f + 1e-6) * f,
      _ = Math.min(r, g + f),
      v = (h - n) / (r - n),
      y = (_ - n) / (r - n);
    (el(
      e,
      t,
      h,
      _,
      i + (a - i) * v,
      i + (a - i) * y,
      o + (c - o) * v,
      s + (l - s) * v,
      o + (c - o) * y,
      s + (l - s) * y,
      u,
      d,
      (h - g) / f,
      (_ - g) / f,
      p,
      m,
    ),
      (h = _));
  }
}
function nl(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = n;
  for (; f < r - 1e-4;) {
    let p = Math.floor(f / d + 1e-6) * d,
      m = Math.min(r, p + d),
      h = (f - n) / (r - n),
      g = (m - n) / (r - n);
    t.path.pos(f, i + (a - i) * h, B);
    let _ = B.x,
      v = B.z;
    t.path.pos(f, o + (s - o) * h, B);
    let y = B.x,
      b = B.z;
    t.path.pos(m, i + (a - i) * g, B);
    let x = B.x,
      S = B.z;
    t.path.pos(m, o + (s - o) * g, B);
    let C = B.x,
      w = B.z,
      T = c + (l - c) * h,
      E = c + (l - c) * g,
      D = u.v0 + (u.v1 - u.v0) * ((f - p) / d),
      O = u.v0 + (u.v1 - u.v0) * ((m - p) / d);
    (e.vertex(_, T, v, 0, 1, 0, u.u0, D),
      e.vertex(y, T, b, 0, 1, 0, u.u1, D),
      e.vertex(C, E, w, 0, 1, 0, u.u1, O),
      e.vertex(x, E, S, 0, 1, 0, u.u0, O));
    let k = e.n - 4;
    (e.tri(k, k + 1, k + 2).tri(k, k + 2, k + 3), (f = m));
  }
}
