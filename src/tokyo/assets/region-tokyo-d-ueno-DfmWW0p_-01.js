// tokyo/assets/region-tokyo-d-ueno-DfmWW0p_ 01 — math
// Lines 1-350 of readable/tokyo/assets/region-tokyo-d-ueno-DfmWW0p_.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { M as t, d as n, g as r, h as i } from "./three-C4coU-vx.js";
import {
  F as a,
  I as o,
  Lr as s,
  _n as c,
  dn as l,
  hn as u,
  kt as d,
  mn as f,
} from "./engine-14d5lda2.js";
import {
  Dn as p,
  On as m,
  Xt as h,
  fn as g,
  hn as _,
  in as v,
  pn as y,
  rn as b,
  wn as x,
} from "./region-tokyo-A7LxHjud.js";
var S = 2048,
  C = `white`,
  w = 4,
  T = class {
    name;
    pageH;
    cells = new Map();
    order = [];
    packed = !1;
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    constructor(e, t) {
      ((this.name = e),
        (this.pageH = t),
        this.need(C, 32, 32, (e, t, n, r, i) => {
          ((e.fillStyle = `#ffffff`), e.fillRect(t, n, r, i));
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
        w: Math.min(S, Math.ceil(t)),
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
          (t + a.w + w > 2048 && ((t = 0), (n += r + w), (r = 0)),
          n + a.h > this.pageH)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + w),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(C));
      let n = 1.5;
      return {
        u0: (t.x + n) / S,
        v0: 1 - (t.y + t.h - n) / this.pageH,
        u1: (t.x + t.w - n) / S,
        v1: 1 - (t.y + n) / this.pageH,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(C),
        t = (e.x + e.w / 2) / S,
        n = 1 - (e.y + e.h / 2) / this.pageH;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * this.pageH) / S),
        [n, r] = c(e, t);
      x(n, r);
      let i = e / S;
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
      let a = f(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `${this.name}-atlas`), (this.size = e), a);
    }
  },
  ee = new Uint8Array(256);
for (let e = 0; e < 256; e++) ee[e] = Math.round(255 * (e / 255) ** 2.2);
var te = (e) => ee[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function E(e, t, n = 1) {
  return (
    e.setColor(
      te(((t >> 16) & 255) * n),
      te(((t >> 8) & 255) * n),
      te((t & 255) * n),
    ),
    e
  );
}
function D(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function ne(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function O(e, t, n, r, i, a, o, s, c = !1) {
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
function A(e, t, n, r, i, a, o, s = 6, c = !1) {
  let l = e.n;
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    (e.vertex(
      t + u * a,
      r,
      n + d * a,
      u,
      0,
      d,
      o.u0 + ((o.u1 - o.u0) * c) / s,
      o.v0,
    ),
      e.vertex(
        t + u * a,
        i,
        n + d * a,
        u,
        0,
        d,
        o.u0 + ((o.u1 - o.u0) * c) / s,
        o.v1,
      ));
  }
  for (let t = 0; t < s; t++) {
    let n = l + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
  c && re(e, t, i, n, a, o, s);
}
function re(e, t, n, r, i, a, o = 8, s = !1) {
  let c = e.vertex(
    t,
    n,
    r,
    0,
    s ? -1 : 1,
    0,
    (a.u0 + a.u1) / 2,
    (a.v0 + a.v1) / 2,
  );
  for (let c = 0; c <= o; c++) {
    let l = (c / o) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    e.vertex(
      t + u * i,
      n,
      r + d * i,
      0,
      s ? -1 : 1,
      0,
      a.u0 + (a.u1 - a.u0) * (0.5 + u * 0.5),
      a.v0 + (a.v1 - a.v0) * (0.5 - d * 0.5),
    );
  }
  for (let t = 0; t < o; t++)
    s ? e.tri(c, c + 1 + t, c + 2 + t) : e.tri(c, c + 2 + t, c + 1 + t);
}
function j(e, t, n, r, i, a, o, s, c = 4, l = 6) {
  let u = e.n;
  for (let u = 0; u <= c; u++) {
    let d = (u / c) * Math.PI,
      f = Math.cos(d),
      p = Math.sin(d);
    for (let d = 0; d <= l; d++) {
      let m = (d / l) * Math.PI * 2,
        h = Math.cos(m),
        g = Math.sin(m);
      e.vertex(
        t + h * p * i,
        n + f * a,
        r + g * p * o,
        h * p,
        f,
        g * p,
        s.u0 + ((s.u1 - s.u0) * d) / l,
        s.v1 - ((s.v1 - s.v0) * u) / c,
      );
    }
  }
  for (let t = 0; t < c; t++)
    for (let n = 0; n < l; n++) {
      let r = u + t * (l + 1) + n,
        i = r + l + 1;
      e.tri(r, r + 1, i).tri(r + 1, i + 1, i);
    }
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
