// tokyo/assets/region-tokyo-d-kanda-DcnnktoK 01 — math
// Lines 1-349 of readable/tokyo/assets/region-tokyo-d-kanda-DcnnktoK.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { Tt as t } from "./three-C4coU-vx.js";
import {
  F as n,
  I as r,
  Lr as i,
  _n as a,
  dn as o,
  hn as s,
  kt as c,
  mn as l,
} from "./engine-14d5lda2.js";
import {
  Dn as u,
  On as d,
  an as f,
  at as p,
  et as m,
  fn as h,
  hn as g,
  in as _,
  it as v,
  nt as y,
  ot as b,
  pn as x,
  rt as S,
  tt as C,
  wn as ee,
} from "./region-tokyo-A7LxHjud.js";
var te = 2048,
  ne = 2816,
  w = `white`,
  re = 4,
  ie = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    constructor() {
      this.need(w, 32, 32, (e, t, n, r, i) => {
        ((e.globalAlpha = 1),
          (e.fillStyle = `#ffffff`),
          e.fillRect(t, n, r, i));
      });
    }
    has(e) {
      return this.cells.has(e);
    }
    need(e, t, n, r) {
      if (this.cells.has(e)) return e;
      let i = {
        key: e,
        x: -1,
        y: -1,
        w: Math.min(te, Math.ceil(t)),
        h: Math.ceil(n),
        paint: r,
      };
      return (this.cells.set(e, i), this.order.push(i), (this.packed = !1), e);
    }
    packed = !1;
    pack() {
      if (this.packed) return;
      this.packed = !0;
      let e = [...this.cells.values()]
          .map((e, t) => ({ c: e, i: t }))
          .sort((e, t) =>
            e.c.key === `white`
              ? -1
              : t.c.key === `white`
                ? 1
                : t.c.h - e.c.h || e.i - t.i,
          ),
        t = 0,
        n = 0,
        r = 0;
      this.overflow = 0;
      let i = [];
      for (let { c: a } of e) {
        if (
          (t + a.w + re > 2048 && ((t = 0), (n += r + re), (r = 0)),
          n + a.h > 2816)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + re),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(w));
      let n = 1.5;
      return {
        u0: (t.x + n) / te,
        v0: 1 - (t.y + t.h - n) / ne,
        u1: (t.x + t.w - n) / te,
        v1: 1 - (t.y + n) / ne,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(w),
        t = (e.x + e.w / 2) / te,
        n = 1 - (e.y + e.h / 2) / ne;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * ne) / te),
        [n, r] = a(e, t);
      ee(n, r);
      let i = e / te;
      yield;
      for (let e of this.order) {
        let t = performance.now();
        (r.save(),
          r.setTransform(i, 0, 0, i, 0, 0),
          r.beginPath(),
          r.rect(e.x, e.y, e.w, e.h),
          r.clip());
        try {
          e.paint(r, e.x, e.y, e.w, e.h);
        } catch (t) {
          console.warn(`[kanda] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let o = l(n, { mipmaps: !0, anisotropy: 4 });
      return ((o.name = `kanda-atlas`), o);
    }
  },
  ae = {
    b4: { minX: -480, minZ: -573.75, maxX: -392.25, maxZ: -525.75 },
    b5: { minX: -480, minZ: -494.25, maxX: -392.25, maxZ: -426.25 },
    b16: { minX: -367.75, minZ: -573.75, maxX: -321.25, maxZ: -525.75 },
    b30: { minX: -308.75, minZ: -693.75, maxX: -258.25, maxZ: -624.25 },
    b67: { minX: -183.75, minZ: -573.75, maxX: -161.75, maxZ: -525.75 },
    b128: { minX: -9.75, minZ: -403.25, maxX: 24.75, maxZ: -313.25 },
    b129: { minX: -9.75, minZ: -300.75, maxX: 24.75, maxZ: -201.25 },
  },
  oe = { minX: -308.75, minZ: -693.75, maxX: -258.25, maxZ: -659.6 },
  se = { ...ae.b16 },
  T = [
    {
      box: { ...ae.b4 },
      label: `kanda-gakkigai-yasukuni (お茶の水 楽器街 + 靖国通り north side)`,
    },
    {
      box: { minX: -480, minZ: -494.25, maxX: -392.25, maxZ: -473.9 },
      label: `kanda-jimbocho-edge (靖国通り south side: books, curry, sports)`,
    },
    { box: { ...se }, label: `kanda-nikolai-do (東京復活大聖堂)` },
    {
      box: { minX: oe.minX, minZ: oe.minZ, maxX: oe.maxX, maxZ: -659.5 },
      label: `kanda-yushima-seido (湯島聖堂)`,
    },
    {
      box: { minX: -183.75, minZ: -559.2, maxX: -161.75, maxZ: -525.75 },
      label: `kanda-sudacho (須田町 old shops)`,
    },
    {
      box: { minX: -9, minZ: -358.1, maxX: 7.95, maxZ: -314.3 },
      label: `kanda-gado-east-s (鍛冶町 lane izakaya row, south of 神田駅)`,
    },
    {
      box: { minX: -9, minZ: -299.7, maxX: 23.7, maxZ: -256.8 },
      label: `kanda-gado-east-n (鍛冶町 lane izakaya row)`,
    },
  ],
  ce = [
    { minX: -485, minZ: -745, maxX: -255, maxZ: -470 },
    { minX: -190, minZ: -562, maxX: -155, maxZ: -520 },
    { minX: -22, minZ: -362, maxX: 26, maxZ: -252 },
  ],
  E = [
    { x: -270.5, z: -736.7, w: 2.6 },
    { x: -297.3, z: -737.9, w: 2.2 },
  ],
  le = new Uint8Array(256);
for (let e = 0; e < 256; e++) le[e] = Math.round(255 * (e / 255) ** 2.2);
var ue = (e) => le[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function D(e, t, n = 1) {
  return (
    e.setColor(
      ue(((t >> 16) & 255) * n),
      ue(((t >> 8) & 255) * n),
      ue((t & 255) * n),
    ),
    e
  );
}
function O(e, t, n, r, i, a, o, s) {
  e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1);
}
function de(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = s.u1 - s.u0,
    p = s.v1 - s.v0;
  e.quad(
    t,
    a,
    n,
    r,
    a,
    i,
    r,
    o,
    i,
    t,
    o,
    n,
    s.u0 + f * c,
    s.v0 + p * u,
    s.u0 + f * l,
    s.v0 + p * d,
  );
}
function k(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function A(e, t, n, r, i, a, o, s, c = !1) {
  e.box(
    (t + i) / 2,
    (n + a) / 2,
    (r + o) / 2,
    (i - t) / 2,
    (a - n) / 2,
    (o - r) / 2,
    s.u0,
    s.v0,
    s.u1,
    s.v1,
    c,
  );
}
function j(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
  let p = c,
    m = -s,
    h = p * a,
    g = m * a,
    _ = s * o,
    v = c * o,
    y = [t - h + _, n - g + v],
    b = [t + h + _, n + g + v],
    x = [t - h - _, n - g - v],
    S = [t + h - _, n + g - v];
  (O(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    O(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    O(e, b[0], b[1], S[0], S[1], r, i, l),
    O(e, x[0], x[1], y[0], y[1], r, i, l),
    f &&
      e.quad(
        y[0],
        i,
        y[1],
        b[0],
        i,
        b[1],
        S[0],
        i,
        S[1],
        x[0],
        i,
        x[1],
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ));
}
function M(e, t, n, r, i, a, o, s = 6, c = !1, l = a) {
  let u = e.n;
  for (let u = 0; u <= s; u++) {
    let d = (u / s) * Math.PI * 2,
      f = Math.cos(d),
      p = Math.sin(d),
      m = c ? o.u0 + ((o.u1 - o.u0) * u) / s : o.u0;
    (e.vertex(t + f * a, r, n + p * a, f, 0, p, m, o.v0),
      e.vertex(t + f * l, i, n + p * l, f, 0, p, m, o.v1));
  }
  for (let t = 0; t < s; t++) {
    let n = u + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
}
function N(e, t, n, r, i, a, o = 0, s = Math.PI * 2) {
  let c = r.length / 2,
    l = e.n;
  for (let l = 0; l <= i; l++) {
    let u = o + ((s - o) * l) / i,
      d = Math.cos(u),
      f = Math.sin(u);
    for (let o = 0; o < c; o++) {
      let s = r[o * 2],
        u = r[o * 2 + 1],
        p = Math.max(0, o - 1),
        m = Math.min(c - 1, o + 1),
        h = r[m * 2] - r[p * 2],
        g = r[m * 2 + 1] - r[p * 2 + 1],
        _ = Math.hypot(h, g) || 1,
        v = g / _,
        y = -h / _;
      e.vertex(
        t + d * s,
        u,
        n + f * s,
        d * v,
        y,
        f * v,
        a.u0 + ((a.u1 - a.u0) * l) / i,
        a.v0 + ((a.v1 - a.v0) * o) / Math.max(1, c - 1),
      );
    }
  }
  for (let t = 0; t < i; t++)
    for (let n = 0; n < c - 1; n++) {
      let r = l + t * c + n,
        i = r + c;
      e.tri(r, r + 1, i).tri(r + 1, i + 1, i);
    }
}
function fe(e, t, n, r, i, a, o) {
  let s = i - r,
    c = [
      a * 0.62,
      r,
      a * 0.92,
      r + s * 0.16,
      a,
      r + s * 0.5,
      a * 0.92,
      r + s * 0.84,
      a * 0.62,
      i,
    ];
  (N(e, t, n, c, 6, o, 0, Math.PI), N(e, t, n, c, 6, o, Math.PI, Math.PI * 2));
}
