// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 01 — math
// Lines 1-350 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import {
  B as t,
  V as n,
  fn as r,
  ln as i,
  on as a,
  un as o,
  wr as s,
  wt as c,
  z as l,
} from "./engine-wUBYs8Z3.js";
import {
  At as u,
  Bt as d,
  Ct as f,
  Dn as p,
  Dt as m,
  Et as h,
  Ft as g,
  Gt as _,
  Ht as v,
  It as y,
  Jt as b,
  Kt as x,
  Lt as S,
  Mt as C,
  Nt as w,
  On as ee,
  Ot as T,
  Pt as E,
  Rt as D,
  St as O,
  Tt as k,
  Ut as A,
  Vt as te,
  Wt as j,
  Yt as ne,
  Zt as re,
  fn as M,
  hn as ie,
  in as ae,
  jt as oe,
  kt as se,
  on as ce,
  pn as N,
  qt as le,
  rn as ue,
  wn as de,
  wt as fe,
  zt as pe,
} from "./region-tokyo-55J_WESF.js";
var me = 2048,
  he = 2816,
  ge = `white`,
  _e = 4,
  ve = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    packed = !1;
    constructor() {
      this.need(ge, 32, 32, (e, t, n, r, i) => {
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
        w: Math.min(me, Math.ceil(t)),
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
          (t + a.w + _e > 2048 && ((t = 0), (n += r + _e), (r = 0)),
          n + a.h > 2816)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + _e),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(ge));
      let n = 1.5;
      return {
        u0: (t.x + n) / me,
        v0: 1 - (t.y + t.h - n) / he,
        u1: (t.x + t.w - n) / me,
        v1: 1 - (t.y + n) / he,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(ge),
        t = (e.x + e.w / 2) / me,
        n = 1 - (e.y + e.h / 2) / he;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * he) / me),
        [n, a] = r(e, t);
      de(n, a);
      let o = e / me;
      yield;
      for (let e of this.order) {
        let t = performance.now();
        (a.save(),
          a.setTransform(o, 0, 0, o, 0, 0),
          a.beginPath(),
          a.rect(e.x, e.y, e.w, e.h),
          a.clip());
        try {
          e.paint(a, e.x, e.y, e.w, e.h);
        } catch (t) {
          console.warn(`[asakusa] atlas cell ${e.key} failed`, t);
        }
        a.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let s = i(n, { mipmaps: !0, anisotropy: 4 });
      return ((s.name = `asakusa-atlas`), (this.size = e), s);
    }
  };
function P(e, t, n, r, i, a, o = 0.55, s) {
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
function F(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function I(e, t, n, r, i, a, o = 0.5) {
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
var ye = new Uint8Array(256);
for (let e = 0; e < 256; e++) ye[e] = Math.round(255 * (e / 255) ** 2.2);
var be = (e) => ye[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function L(e, t, n = 1) {
  return (
    e.setColor(
      be(((t >> 16) & 255) * n),
      be(((t >> 8) & 255) * n),
      be((t & 255) * n),
    ),
    e
  );
}
function R(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function xe(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function z(e, t, n, r, i, a, o, s, c = !1) {
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
function Se(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (R(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    R(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    R(e, b[0], b[1], S[0], S[1], r, i, l),
    R(e, x[0], x[1], y[0], y[1], r, i, l),
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
function Ce(e, t, n, r, i, a, o, s = 6) {
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
function B(e, t, n, r, i, a, o, s, c) {
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
function we(e, t, n, r, i, a, o = 1) {
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
var Te = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
