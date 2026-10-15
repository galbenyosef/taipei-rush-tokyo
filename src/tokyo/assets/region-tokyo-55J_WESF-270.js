// tokyo/assets/region-tokyo-55J_WESF 270 — col
// Lines 100281-100627 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* twe(e, t) {
  let n = Yz(t);
  for (let r = 0; r < PB.length; r++) {
    let [i, a, o, s, c] = PB[r],
      l = o > 0 ? Hz(-i, -a, i, a, o) : Vz(-i, -a, i, a);
    (r === 0
      ? (e.col(16777215).mat(0.3, 0.35, 0.3, G),
        zk(e, l, s, 8, Xz(t), 3.2, 11),
        Jz(e, IB),
        zk(e, l, 8, c, n, 6.4, 22))
      : (e.col(IB).mat(0.7, 0.04, 0.2, 1),
        zk(e, l, s, c, n, 6.4, r === 1 ? 15 : 10)),
      e.col(11774876).mat(0.8, 0, 0.12, 1),
      o > 0 ? Uz(e, -i, -a, i, a, o, c) : e.flat(-i, -a, i, a, c),
      e.solid(-i, -a, i, a, Math.max(-3, s), c));
  }
  Jz(e, 7304055, 0.14);
  let [r, i] = PB[0];
  (Wz(e, 2, -i, -2, -i, 0.4, 8, 146, n, 6.4, 22),
    Wz(e, -2, i, 2, i, 0.4, 8, 146, n, 6.4, 22));
  for (let t of [-9, 9])
    (Wz(e, -r, t - 2, -r, t + 2, 0.4, 8, 146, n, 6.4, 22),
      Wz(e, r, t + 2, r, t - 2, 0.4, 8, 146, n, 6.4, 22));
  yield;
  let [a, o] = [PB[1][0], PB[1][1]];
  (e.col(16777215).mat(0.4, 0, 0.55, G),
    Qz(e, t, 0, FB.dialY, -o - 0.06, 0, -1, FB.dialR),
    Qz(e, t, 0, FB.dialY, o + 0.06, 0, 1, FB.dialR),
    Qz(e, t, -a - 0.06, FB.dialY, 0, -1, 0, FB.dialR),
    Qz(e, t, a + 0.06, FB.dialY, 0, 1, 0, FB.dialR),
    e.col(9341570).mat(0.5, 0.4, 0.15, 1),
    Gz(e, -4, -5.5, 4, 5.5, 232, FB.pyr),
    e.col(13685460).mat(0.4, 0.6, 0.05, 1),
    e.rod(0, FB.pyr - 1, 0, 0, FB.mast, 0, 0.7, 6, 0.12),
    Wk(e, 0, FB.mast, 0, 0.5),
    Wk(e, 0, FB.pyr + 6, 0, 0.45));
  for (let t of [PB[0], PB[2]]) {
    let [n, r, i, , a] = t;
    (Wk(e, -(n - i - 0.8), a, -(r - 0.8), 0.4),
      Wk(e, n - i - 0.8, a, r - 0.8, 0.4));
  }
}
function nwe(e, t) {
  (Jz(e, IB, 0.05, 0.82),
    qz(e, -PB[0][0], -3, -PB[0][1], PB[0][0], 150, PB[0][1], !1),
    e.col(IB, 0.85).mat(0.7, 0.04, 0.2, 1),
    qz(e, -PB[1][0], 150, -PB[1][1], PB[1][0], 200, PB[1][1], !1),
    Gz(e, -PB[3][0], -PB[3][1], PB[3][0], PB[3][1], 200, FB.pyr),
    e.col(16777215).mat(0.4, 0, 0.55, G),
    Qz(e, t, 0, FB.dialY, -PB[1][1] - 0.06, 0, -1, FB.dialR),
    Qz(e, t, 0, FB.dialY, PB[1][1] + 0.06, 0, 1, FB.dialR),
    e.col(13685460).mat(0.4, 0.6, 0.05, 1),
    e.rod(0, FB.pyr - 1, 0, 0, FB.mast, 0, 0.9, 3, 0.25));
}
var rwe = [
    { lx: 0, ly: FB.dialY, lz: -PB[1][1] - 0.14, turn: 0 },
    { lx: PB[1][0] + 0.14, ly: FB.dialY, lz: 0, turn: zz / 2 },
    { lx: 0, ly: FB.dialY, lz: PB[1][1] + 0.14, turn: zz },
    { lx: -PB[1][0] - 0.14, ly: FB.dialY, lz: 0, turn: -zz / 2 },
  ],
  iwe = [
    HCe,
    GCe,
    JCe,
    ZCe,
    ewe,
    {
      id: `docomo-yoyogi`,
      site: Zz(NB.x, NB.z),
      name: {
        ja: `ドコデモ代々木ビル`,
        zh: `dokodemo 代代木大樓`,
        en: `Dokodemo Yoyogi Building`,
      },
      near: 260,
      build: twe,
      far: nwe,
      bounds: () => [-2035, 430, -2003, 500],
      farBoxes: (e, t) => [
        {
          x0: NB.x - 13,
          x1: NB.x + 13,
          z0: NB.z - 24,
          z1: NB.z + 24,
          y0: t.gy,
          y1: t.gy + 150,
          rgb: [0.6, 0.56, 0.5],
          lit: !0,
        },
        {
          x0: NB.x - 11,
          x1: NB.x + 11,
          z0: NB.z - 19,
          z1: NB.z + 19,
          y0: t.gy + 150,
          y1: t.gy + 180,
          rgb: [0.62, 0.58, 0.52],
          glow: 0.3,
        },
        {
          x0: NB.x - 7,
          x1: NB.x + 7,
          z0: NB.z - 11,
          z1: NB.z + 11,
          y0: t.gy + 180,
          y1: t.gy + 218,
          rgb: [0.62, 0.58, 0.52],
          glow: 0.3,
        },
        {
          x0: NB.x - 1,
          x1: NB.x + 1,
          z0: NB.z - 1,
          z1: NB.z + 1,
          y0: t.gy + 218,
          y1: t.gy + FB.mast,
          rgb: [0.6, 0.6, 0.6],
        },
      ],
      clock: { faces: rwe, r: FB.dialR, melody: `none` },
      blip: !0,
    },
  ],
  LB = [0, -1],
  RB = [0, 1],
  zB = [1, 0],
  BB = [-1, 0];
function VB(e) {
  return [e[1], -e[0]];
}
var HB = new Map();
function awe(e, t, n, r, i) {
  let a = `${e}|${t}|${+!!n}|${+!!r}|${i}`;
  if (HB.has(a)) return HB.get(a);
  if (typeof document > `u`) return (HB.set(a, null), null);
  let o = [...e],
    s = Math.ceil(t * 0.15),
    c = Math.ceil(n ? t * 1.3 : t * 1.15 * o.length + t * 0.4),
    l = Math.ceil(n ? t * 1.08 * o.length : t * 1.3),
    u = document.createElement(`canvas`);
  ((u.width = c + s * 2), (u.height = l + s * 2));
  let d = u.getContext(`2d`, { willReadFrequently: !0 });
  if (!d) return (HB.set(a, null), null);
  (br(u, d),
    (d.fillStyle = `#fff`),
    (d.textBaseline = `middle`),
    (d.font = `${i} ${t}px ${r ? yr : vr}`),
    n
      ? ((d.textAlign = `center`),
        o.forEach((e, n) => d.fillText(e, s + c / 2, s + t * 1.08 * (n + 0.5))))
      : ((d.textAlign = `left`), d.fillText(e, s, s + l / 2)));
  let f = u.width,
    p = u.height,
    m = d.getImageData(0, 0, f, p).data,
    h = f,
    g = p,
    _ = -1,
    v = -1;
  for (let e = 0; e < p; e++)
    for (let t = 0; t < f; t++)
      m[(e * f + t) * 4 + 3] > 110 &&
        (t < h && (h = t),
        t > _ && (_ = t),
        e < g && (g = e),
        e > v && (v = e));
  if (((u.width = u.height = 1), _ < 0)) return (HB.set(a, null), null);
  let y = _ - h + 1,
    b = v - g + 1,
    x = [],
    S = new Map();
  for (let e = g; e <= v; e++) {
    let t = new Map(),
      n = h;
    for (; n <= _;) {
      if (m[(e * f + n) * 4 + 3] <= 110) {
        n++;
        continue;
      }
      let r = n;
      for (; r + 1 <= _ && m[(e * f + r + 1) * 4 + 3] > 110;) r++;
      let i = `${n},${r}`,
        a = S.get(i);
      (a === void 0
        ? (x.push([(n - h) / y, (e - g) / b, (r + 1 - h) / y, (e + 1 - g) / b]),
          t.set(i, x.length - 1))
        : ((x[a][3] = (e + 1 - g) / b), t.set(i, a)),
        (n = r + 1));
    }
    S = t;
  }
  let C = { aspect: y / b, rects: x };
  return (HB.set(a, C), C);
}
function UB(e, t, n, r, i, a, o, s = {}) {
  let c = s.raw ? t : wne(t),
    l = awe(c, s.px ?? 18, !!s.vertical, !!s.serif, s.weight ?? 700),
    u = VB(a),
    d = [...c].length,
    f = o,
    p;
  ((p = l ? f * l.aspect : s.vertical ? f / Math.max(1, d) : f * d * 0.95),
    s.maxW && p > s.maxW && (p = s.maxW));
  let m = s.align ?? 0,
    h = n - u[0] * p * m,
    g = i - u[1] * p * m,
    _ = (t, n, i, a) => {
      let o = h + u[0] * p * t,
        s = g + u[1] * p * t,
        c = h + u[0] * p * i,
        l = g + u[1] * p * i,
        d = r + f * (1 - a),
        m = r + f * (1 - n);
      e.panel(o, s, c, l, d, m);
    };
  if (l) for (let e of l.rects) _(e[0], e[1], e[2], e[3]);
  else
    for (let e = 0; e < d * 11; e++) {
      let t = (e % 11) / 11,
        n = Math.floor(e / 11);
      _((n + t * 0.8) / d, 0.1, (n + t * 0.8 + 0.05) / d, 0.9);
    }
  return p;
}
function WB(e, t, n, r, i, a, o, s, c, l, u, d = {}) {
  VB(i);
  let f = d.lit ?? 0.35,
    p = d.flags ?? 1,
    m = (e) =>
      (0.3 * ((e >> 16) & 255) + 0.59 * ((e >> 8) & 255) + 0.11 * (e & 255)) /
      255,
    h = m(c) > 0.6;
  e.push()
    .col(c)
    .mat(0.5, 0, h ? f * 0.45 : f * 0.6, p);
  let g = t + (i[0] * s) / 2,
    _ = r + (i[1] * s) / 2;
  if (d.flat) {
    let c = VB(i),
      l = t + i[0] * s,
      u = r + i[1] * s;
    e.panel(
      l - (c[0] * a) / 2,
      u - (c[1] * a) / 2,
      l + (c[0] * a) / 2,
      u + (c[1] * a) / 2,
      n,
      n + o,
    );
  } else GB(e, g, _, i, a, s, n, n + o);
  if (l && !e.coarse) {
    e.col(u).mat(0.5, 0, m(u) < 0.35 ? 0 : Math.min(0.8, f * 1.3), p);
    let c = t + i[0] * (s + 0.02),
      h = r + i[1] * (s + 0.02);
    d.vertical
      ? UB(e, l, c, n + o * 0.06, h, i, o * 0.88, {
          ...d,
          align: 0.5,
          maxW: a * 0.84,
        })
      : UB(e, l, c, n + o * 0.18, h, i, o * 0.64, {
          ...d,
          align: 0.5,
          maxW: a * 0.9,
        });
  }
  e.pop();
}
function GB(e, t, n, r, i, a, o, s, c) {
  e.obox(t, (o + s) / 2, n, i / 2, (s - o) / 2, a / 2, KB(r), c ?? null);
}
function KB(e) {
  return Math.atan2(e[0], -e[1]);
}
function qB(e, t, n, r, i, a, o, s, c, l, u = {}) {
  let d = VB(r),
    f = t + r[0] * (0.15 + o / 2),
    p = n + r[1] * (0.15 + o / 2),
    m = 1 | (u.flicker ? 4 : 0),
    h = (e) =>
      (0.3 * ((e >> 16) & 255) + 0.59 * ((e >> 8) & 255) + 0.11 * (e & 255)) /
      255;
  if (
    (e
      .push()
      .col(s)
      .mat(0.5, 0, (u.lit ?? 0.4) * (h(s) > 0.6 ? 0.45 : 0.6), m),
    e.obox(f, i + a / 2, p, 0.28 / 2, a / 2, o / 2, KB(r)),
    c && !e.coarse)
  ) {
    e.col(l).mat(
      0.5,
      0,
      h(l) < 0.35 ? 0 : Math.min(0.8, (u.lit ?? 0.4) * 1.3),
      m,
    );
    for (let t of [1, -1]) {
      let n = [d[0] * t, d[1] * t];
      UB(e, c, f + n[0] * 0.16, i + a * 0.05, p + n[1] * 0.16, n, a * 0.9, {
        vertical: !0,
        align: 0.5,
        maxW: o * 0.82,
        px: u.px ?? 14,
      });
    }
  }
  e.pop();
}
function JB(e, t, n, r, i, a = 14166044, o = 0.32) {
  let s = i * 0.36;
  (e.push().col(a).mat(0.6, 0, o, 1),
    i < 0.9
      ? e.lathe(
          t,
          r,
          [s * 0.55, n - i, s, n - i * 0.5, s * 0.55, n],
          e.coarse ? 4 : 5,
          0.3,
          e.white,
          !1,
          !0,
        )
      : e.lathe(
          t,
          r,
          [s * 0.55, n - i, s, n - i * 0.68, s, n - i * 0.32, s * 0.55, n],
          e.coarse ? 4 : 6,
          0.3,
          e.white,
          !1,
          !0,
        ),
    e.col(1775122).mat(0.6, 0, 0, 0),
    !e.coarse &&
      i >= 0.9 &&
      (e.lathe(t, r, [s * 0.58, n - i - 0.06, s * 0.58, n - i + 0.02], 6),
      e.lathe(t, r, [s * 0.58, n - 0.02, s * 0.58, n + 0.06], 6)),
    e.pop());
}
var YB = (e) => new ie(e),
  XB = {};
function ZB(e) {
  ((XB.shoji = e.c(`shoji`)), (XB.doors = e.c(`doors`)));
}
function QB(e, t) {
  let n = (e) => Math.max(0, Math.min(255, Math.round(e * t)));
  return (n((e >> 16) & 255) << 16) | (n((e >> 8) & 255) << 8) | n(e & 255);
}
