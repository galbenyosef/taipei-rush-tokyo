// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 01 — math
// Lines 1-331 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-anaGONx4.js";
import { M as n, d as r, g as i, h as a } from "./three-C4coU-vx.js";
import {
  F as o,
  I as s,
  Lr as c,
  P as l,
  _n as u,
  dn as d,
  hn as f,
  kt as p,
  mn as m,
} from "./engine-14d5lda2.js";
import {
  Dn as h,
  On as g,
  an as _,
  fn as v,
  hn as y,
  in as b,
  pn as x,
  wn as S,
} from "./region-tokyo-A7LxHjud.js";
var C = 2048,
  w = `white`,
  ee = 4,
  te = class {
    name;
    pageH;
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    constructor(e, t = 2048) {
      ((this.name = e),
        (this.pageH = t),
        this.need(w, 32, 32, (e, t, n, r, i) => {
          ((e.globalAlpha = 1),
            (e.fillStyle = `#ffffff`),
            e.fillRect(t, n, r, i));
        }));
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
        w: Math.min(C, Math.ceil(t)),
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
          (t + a.w + ee > 2048 && ((t = 0), (n += r + ee), (r = 0)),
          n + a.h > this.pageH)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + ee),
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
        u0: (t.x + n) / C,
        v0: 1 - (t.y + t.h - n) / this.pageH,
        u1: (t.x + t.w - n) / C,
        v1: 1 - (t.y + n) / this.pageH,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(w),
        t = (e.x + e.w / 2) / C,
        n = 1 - (e.y + e.h / 2) / this.pageH;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * this.pageH) / C),
        [n, r] = u(e, t);
      S(n, r);
      let i = e / C;
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
          console.warn(`[${this.name}] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let a = m(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `${this.name}-atlas`), a);
    }
  },
  ne = new Uint8Array(256);
for (let e = 0; e < 256; e++) ne[e] = Math.round(255 * (e / 255) ** 2.2);
var T = (e) => ne[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function E(e, t, n = 1) {
  return (
    e.setColor(
      T(((t >> 16) & 255) * n),
      T(((t >> 8) & 255) * n),
      T((t & 255) * n),
    ),
    e
  );
}
function D(e, t, n, r, i, a, o, s) {
  e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1);
}
function re(e, t, n, r, i, a, o, s, c, l, u, d) {
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
function O(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function k(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (D(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    D(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    D(e, b[0], b[1], S[0], S[1], r, i, l),
    D(e, x[0], x[1], y[0], y[1], r, i, l),
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
function A(e, t, n, r, i, a, o, s = 6, c = !1, l = a) {
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
function j(e, t, n, r, i, a, o = 0, s = Math.PI * 2) {
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
function ie(e, t, n, r, i, a, o) {
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
  (j(e, t, n, c, 6, o, 0, Math.PI), j(e, t, n, c, 6, o, Math.PI, Math.PI * 2));
}
function M(e, t, n, r, i, a, o, s, c) {
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
