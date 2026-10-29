// tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6 01 — math
// Lines 1-339 of readable/tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-anaGONx4.js";
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
  $t as u,
  A as d,
  C as f,
  D as p,
  Dn as m,
  E as h,
  O as g,
  On as _,
  S as v,
  T as y,
  Zt as b,
  b as x,
  fn as S,
  hn as C,
  in as w,
  j as T,
  k as E,
  nn as ee,
  pn as D,
  rn as O,
  tn as te,
  v as ne,
  vt as re,
  w as k,
  wn as ie,
  x as ae,
  y as A,
} from "./region-tokyo-A7LxHjud.js";
var j = 2048,
  oe = 3072,
  se = `white`,
  ce = 4,
  le = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    packed = !1;
    constructor() {
      this.need(se, 32, 32, (e, t, n, r, i) => {
        ((e.fillStyle = `#ffffff`), e.fillRect(t, n, r, i));
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
        w: Math.min(j, Math.ceil(t)),
        h: Math.ceil(n),
        paint: r,
      };
      return (this.cells.set(e, i), this.order.push(i), (this.packed = !1), e);
    }
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
          (t + a.w + ce > 2048 && ((t = 0), (n += r + ce), (r = 0)),
          n + a.h > 3072)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + ce),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(se));
      let n = 1.5;
      return {
        u0: (t.x + n) / j,
        v0: 1 - (t.y + t.h - n) / oe,
        u1: (t.x + t.w - n) / j,
        v1: 1 - (t.y + n) / oe,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(se),
        t = (e.x + e.w / 2) / j,
        n = 1 - (e.y + e.h / 2) / oe;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * oe) / j),
        [n, r] = a(e, t);
      ie(n, r);
      let i = e / j;
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
          console.warn(`[shimbashi] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let o = l(n, { mipmaps: !0, anisotropy: 4 });
      return ((o.name = `shimbashi-atlas`), (this.size = e), o);
    }
  };
function ue(e, t, n, r, i, a, o = 0.55, s) {
  ((e.fillStyle = a),
    (e.globalAlpha = o),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1),
    s &&
      ((e.strokeStyle = s),
      (e.lineWidth = Math.max(2, Math.min(r, i) * 0.05)),
      e.strokeRect(
        t + e.lineWidth,
        n + e.lineWidth,
        r - e.lineWidth * 2,
        i - e.lineWidth * 2,
      )));
}
function M(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function de(e, t, n, r, i, a, o = 0.5) {
  (e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.globalAlpha = o),
    (e.fillStyle = a),
    e.beginPath(),
    e.rect(t, n, r, i),
    e.clip(),
    e.fillRect(t, n, r, i),
    e.restore());
}
var fe = new Uint8Array(256);
for (let e = 0; e < 256; e++) fe[e] = Math.round(255 * (e / 255) ** 2.2);
var pe = (e) => fe[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function N(e, t, n = 1) {
  return (
    e.setColor(
      pe(((t >> 16) & 255) * n),
      pe(((t >> 8) & 255) * n),
      pe((t & 255) * n),
    ),
    e
  );
}
function P(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function F(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function I(e, t, n, r, i, a, o, s, c = !1) {
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
function L(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (P(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    P(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    P(e, b[0], b[1], S[0], S[1], r, i, l),
    P(e, x[0], x[1], y[0], y[1], r, i, l),
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
function R(e, t, n, r, i, a, o, s = 6) {
  let c = e.n;
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    (e.vertex(t + u * a, r, n + d * a, u, 0, d, o.u0, o.v0),
      e.vertex(t + u * a, i, n + d * a, u, 0, d, o.u0, o.v1));
  }
  for (let t = 0; t < s; t++) {
    let n = c + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
}
function z(e, t, n, r, i, a, o, s, c) {
  let l = i - t,
    u = a - n,
    d = o - r,
    f = Math.hypot(l, u, d) || 1,
    p = l / f,
    m = u / f,
    h = d / f,
    g = -h,
    _ = 0,
    v = p;
  Math.abs(m) > 0.9 && ((g = 1), (_ = 0), (v = 0));
  let y = Math.hypot(g, _, v) || 1;
  ((g = (g / y) * s), (_ = (_ / y) * s), (v = (v / y) * s));
  let b = m * v - h * _,
    x = h * g - p * v,
    S = p * _ - m * g,
    C = [
      [g + b, _ + x, v + S],
      [-g + b, -_ + x, -v + S],
      [-g - b, -_ - x, -v - S],
      [g - b, _ - x, v - S],
    ];
  for (let s = 0; s < 4; s++) {
    let l = C[s],
      u = C[(s + 1) % 4];
    e.quad(
      t + l[0],
      n + l[1],
      r + l[2],
      t + u[0],
      n + u[1],
      r + u[2],
      i + u[0],
      a + u[1],
      o + u[2],
      i + l[0],
      a + l[1],
      o + l[2],
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    );
  }
}
function me(e, t, n, r, i, a, o = 1) {
  return (
    (e[0] = a * o),
    (e[1] = 0),
    (e[2] = -i * o),
    (e[3] = 0),
    (e[4] = 0),
    (e[5] = o),
    (e[6] = 0),
    (e[7] = 0),
    (e[8] = i * o),
    (e[9] = 0),
    (e[10] = a * o),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = r),
    (e[15] = 1),
    e
  );
}
var he = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
