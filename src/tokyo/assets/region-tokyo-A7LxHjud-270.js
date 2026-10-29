// tokyo/assets/region-tokyo-A7LxHjud 270 — col
// Lines 100372-100718 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* hwe(e, t) {
  let n = Zz(t);
  for (let r = 0; r < FB.length; r++) {
    let [i, a, o, s, c] = FB[r],
      l = o > 0 ? Wz(-i, -a, i, a, o) : Uz(-i, -a, i, a);
    (r === 0
      ? (e.col(16777215).mat(0.3, 0.35, 0.3, G),
        Vk(e, l, s, 8, Qz(t), 3.2, 11),
        Xz(e, LB),
        Vk(e, l, 8, c, n, 6.4, 22))
      : (e.col(LB).mat(0.7, 0.04, 0.2, 1),
        Vk(e, l, s, c, n, 6.4, r === 1 ? 15 : 10)),
      e.col(11774876).mat(0.8, 0, 0.12, 1),
      o > 0 ? Gz(e, -i, -a, i, a, o, c) : e.flat(-i, -a, i, a, c),
      e.solid(-i, -a, i, a, Math.max(-3, s), c));
  }
  Xz(e, 7304055, 0.14);
  let [r, i] = FB[0];
  (Kz(e, 2, -i, -2, -i, 0.4, 8, 146, n, 6.4, 22),
    Kz(e, -2, i, 2, i, 0.4, 8, 146, n, 6.4, 22));
  for (let t of [-9, 9])
    (Kz(e, -r, t - 2, -r, t + 2, 0.4, 8, 146, n, 6.4, 22),
      Kz(e, r, t + 2, r, t - 2, 0.4, 8, 146, n, 6.4, 22));
  yield;
  let [a, o] = [FB[1][0], FB[1][1]];
  (e.col(16777215).mat(0.4, 0, 0.55, G),
    eB(e, t, 0, IB.dialY, -o - 0.06, 0, -1, IB.dialR),
    eB(e, t, 0, IB.dialY, o + 0.06, 0, 1, IB.dialR),
    eB(e, t, -a - 0.06, IB.dialY, 0, -1, 0, IB.dialR),
    eB(e, t, a + 0.06, IB.dialY, 0, 1, 0, IB.dialR),
    e.col(9341570).mat(0.5, 0.4, 0.15, 1),
    qz(e, -4, -5.5, 4, 5.5, 232, IB.pyr),
    e.col(13685460).mat(0.4, 0.6, 0.05, 1),
    e.rod(0, IB.pyr - 1, 0, 0, IB.mast, 0, 0.7, 6, 0.12),
    Kk(e, 0, IB.mast, 0, 0.5),
    Kk(e, 0, IB.pyr + 6, 0, 0.45));
  for (let t of [FB[0], FB[2]]) {
    let [n, r, i, , a] = t;
    (Kk(e, -(n - i - 0.8), a, -(r - 0.8), 0.4),
      Kk(e, n - i - 0.8, a, r - 0.8, 0.4));
  }
}
function gwe(e, t) {
  (Xz(e, LB, 0.05, 0.82),
    Yz(e, -FB[0][0], -3, -FB[0][1], FB[0][0], 150, FB[0][1], !1),
    e.col(LB, 0.85).mat(0.7, 0.04, 0.2, 1),
    Yz(e, -FB[1][0], 150, -FB[1][1], FB[1][0], 200, FB[1][1], !1),
    qz(e, -FB[3][0], -FB[3][1], FB[3][0], FB[3][1], 200, IB.pyr),
    e.col(16777215).mat(0.4, 0, 0.55, G),
    eB(e, t, 0, IB.dialY, -FB[1][1] - 0.06, 0, -1, IB.dialR),
    eB(e, t, 0, IB.dialY, FB[1][1] + 0.06, 0, 1, IB.dialR),
    e.col(13685460).mat(0.4, 0.6, 0.05, 1),
    e.rod(0, IB.pyr - 1, 0, 0, IB.mast, 0, 0.9, 3, 0.25));
}
var _we = [
    { lx: 0, ly: IB.dialY, lz: -FB[1][1] - 0.14, turn: 0 },
    { lx: FB[1][0] + 0.14, ly: IB.dialY, lz: 0, turn: Vz / 2 },
    { lx: 0, ly: IB.dialY, lz: FB[1][1] + 0.14, turn: Vz },
    { lx: -FB[1][0] - 0.14, ly: IB.dialY, lz: 0, turn: -Vz / 2 },
  ],
  vwe = [
    twe,
    awe,
    cwe,
    dwe,
    mwe,
    {
      id: `docomo-yoyogi`,
      site: $z(PB.x, PB.z),
      name: {
        ja: `ドコデモ代々木ビル`,
        zh: `dokodemo 代代木大樓`,
        en: `Dokodemo Yoyogi Building`,
      },
      near: 260,
      build: hwe,
      far: gwe,
      bounds: () => [-2035, 430, -2003, 500],
      farBoxes: (e, t) => [
        {
          x0: PB.x - 13,
          x1: PB.x + 13,
          z0: PB.z - 24,
          z1: PB.z + 24,
          y0: t.gy,
          y1: t.gy + 150,
          rgb: [0.6, 0.56, 0.5],
          lit: !0,
        },
        {
          x0: PB.x - 11,
          x1: PB.x + 11,
          z0: PB.z - 19,
          z1: PB.z + 19,
          y0: t.gy + 150,
          y1: t.gy + 180,
          rgb: [0.62, 0.58, 0.52],
          glow: 0.3,
        },
        {
          x0: PB.x - 7,
          x1: PB.x + 7,
          z0: PB.z - 11,
          z1: PB.z + 11,
          y0: t.gy + 180,
          y1: t.gy + 218,
          rgb: [0.62, 0.58, 0.52],
          glow: 0.3,
        },
        {
          x0: PB.x - 1,
          x1: PB.x + 1,
          z0: PB.z - 1,
          z1: PB.z + 1,
          y0: t.gy + 218,
          y1: t.gy + IB.mast,
          rgb: [0.6, 0.6, 0.6],
        },
      ],
      clock: { faces: _we, r: IB.dialR, melody: `none` },
      blip: !0,
    },
  ],
  RB = [0, -1],
  zB = [0, 1],
  BB = [1, 0],
  VB = [-1, 0];
function HB(e) {
  return [e[1], -e[0]];
}
var UB = new Map();
function ywe(e, t, n, r, i) {
  let a = `${e}|${t}|${+!!n}|${+!!r}|${i}`;
  if (UB.has(a)) return UB.get(a);
  if (typeof document > `u`) return (UB.set(a, null), null);
  let o = [...e],
    s = Math.ceil(t * 0.15),
    c = Math.ceil(n ? t * 1.3 : t * 1.15 * o.length + t * 0.4),
    l = Math.ceil(n ? t * 1.08 * o.length : t * 1.3),
    u = document.createElement(`canvas`);
  ((u.width = c + s * 2), (u.height = l + s * 2));
  let d = u.getContext(`2d`, { willReadFrequently: !0 });
  if (!d) return (UB.set(a, null), null);
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
  if (((u.width = u.height = 1), _ < 0)) return (UB.set(a, null), null);
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
  return (UB.set(a, C), C);
}
function WB(e, t, n, r, i, a, o, s = {}) {
  let c = s.raw ? t : Mne(t),
    l = ywe(c, s.px ?? 18, !!s.vertical, !!s.serif, s.weight ?? 700),
    u = HB(a),
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
function GB(e, t, n, r, i, a, o, s, c, l, u, d = {}) {
  HB(i);
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
    let c = HB(i),
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
  } else KB(e, g, _, i, a, s, n, n + o);
  if (l && !e.coarse) {
    e.col(u).mat(0.5, 0, m(u) < 0.35 ? 0 : Math.min(0.8, f * 1.3), p);
    let c = t + i[0] * (s + 0.02),
      h = r + i[1] * (s + 0.02);
    d.vertical
      ? WB(e, l, c, n + o * 0.06, h, i, o * 0.88, {
          ...d,
          align: 0.5,
          maxW: a * 0.84,
        })
      : WB(e, l, c, n + o * 0.18, h, i, o * 0.64, {
          ...d,
          align: 0.5,
          maxW: a * 0.9,
        });
  }
  e.pop();
}
function KB(e, t, n, r, i, a, o, s, c) {
  e.obox(t, (o + s) / 2, n, i / 2, (s - o) / 2, a / 2, qB(r), c ?? null);
}
function qB(e) {
  return Math.atan2(e[0], -e[1]);
}
function JB(e, t, n, r, i, a, o, s, c, l, u = {}) {
  let d = HB(r),
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
    e.obox(f, i + a / 2, p, 0.28 / 2, a / 2, o / 2, qB(r)),
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
      WB(e, c, f + n[0] * 0.16, i + a * 0.05, p + n[1] * 0.16, n, a * 0.9, {
        vertical: !0,
        align: 0.5,
        maxW: o * 0.82,
        px: u.px ?? 14,
      });
    }
  }
  e.pop();
}
function YB(e, t, n, r, i, a = 14166044, o = 0.32) {
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
var XB = (e) => new le(e),
  ZB = {};
function QB(e) {
  ((ZB.shoji = e.c(`shoji`)), (ZB.doors = e.c(`doors`)));
}
function $B(e, t) {
  let n = (e) => Math.max(0, Math.min(255, Math.round(e * t)));
  return (n((e >> 16) & 255) << 16) | (n((e >> 8) & 255) << 8) | n(e & 255);
}
