import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-Ci9Qv_M-.js";
import {
  B as n,
  St as r,
  V as i,
  en as a,
  in as o,
  on as s,
  rn as c,
  sr as l,
} from "./engine-BuS5QxN0.js";
import {
  A as u,
  At as d,
  C as f,
  Ct as p,
  D as m,
  Dt as h,
  E as g,
  It as _,
  Lt as v,
  O as y,
  Ot as b,
  S as x,
  T as S,
  Tt as C,
  Xt as w,
  Zt as T,
  b as E,
  j as ee,
  k as D,
  kt as O,
  qt as te,
  v as ne,
  vt as re,
  w as k,
  x as ie,
  y as A,
  zt as j,
} from "./region-tokyo-BcM3fReU.js";
var M = 2048,
  ae = 3072,
  oe = `white`,
  se = 4,
  ce = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    packed = !1;
    constructor() {
      this.need(oe, 32, 32, (e, t, n, r, i) => {
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
        w: Math.min(M, Math.ceil(t)),
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
          (t + a.w + se > 2048 && ((t = 0), (n += r + se), (r = 0)),
          n + a.h > 3072)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + se),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(oe));
      let n = 1.5;
      return {
        u0: (t.x + n) / M,
        v0: 1 - (t.y + t.h - n) / ae,
        u1: (t.x + t.w - n) / M,
        v1: 1 - (t.y + n) / ae,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(oe),
        t = (e.x + e.w / 2) / M,
        n = 1 - (e.y + e.h / 2) / ae;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * ae) / M),
        [n, r] = s(e, t);
      te(n, r);
      let i = e / M;
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
      let a = c(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `shimbashi-atlas`), (this.size = e), a);
    }
  };
function le(e, t, n, r, i, a, o = 0.55, s) {
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
function N(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function ue(e, t, n, r, i, a, o = 0.5) {
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
var de = new Uint8Array(256);
for (let e = 0; e < 256; e++) de[e] = Math.round(255 * (e / 255) ** 2.2);
var fe = (e) => de[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function P(e, t, n = 1) {
  return (
    e.setColor(
      fe(((t >> 16) & 255) * n),
      fe(((t >> 8) & 255) * n),
      fe((t & 255) * n),
    ),
    e
  );
}
function F(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function I(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function L(e, t, n, r, i, a, o, s, c = !1) {
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
function R(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (F(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    F(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    F(e, b[0], b[1], S[0], S[1], r, i, l),
    F(e, x[0], x[1], y[0], y[1], r, i, l),
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
function z(e, t, n, r, i, a, o, s = 6) {
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
function pe(e, t, n, r, i, a, o = 1) {
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
var me = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
function V(e, t, n, r, i, a, o, s, c, l = 12, u = !0, d = c) {
  let f = -a,
    p = i,
    m = o / 2,
    h = e.n;
  for (let o = 0; o <= l; o++) {
    let u = (o / l) * Math.PI * 2,
      d = Math.cos(u),
      h = Math.sin(u),
      g = d * f,
      _ = h,
      v = d * p,
      y = c.u0 + ((c.u1 - c.u0) * o) / l;
    (e.vertex(
      t - i * m + g * s,
      n + _ * s,
      r - a * m + v * s,
      g,
      _,
      v,
      y,
      c.v0,
    ),
      e.vertex(
        t + i * m + g * s,
        n + _ * s,
        r + a * m + v * s,
        g,
        _,
        v,
        y,
        c.v1,
      ));
  }
  for (let t = 0; t < l; t++) {
    let n = h + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
  if (u)
    for (let o of [-1, 1]) {
      let c = e.vertex(
          t + i * m * o,
          n,
          r + a * m * o,
          i * o,
          0,
          a * o,
          (d.u0 + d.u1) / 2,
          (d.v0 + d.v1) / 2,
        ),
        u = e.n;
      for (let c = 0; c <= l; c++) {
        let u = (c / l) * Math.PI * 2,
          h = Math.cos(u),
          g = Math.sin(u);
        e.vertex(
          t + i * m * o + h * f * s,
          n + g * s,
          r + a * m * o + h * p * s,
          i * o,
          0,
          a * o,
          d.u0 + (d.u1 - d.u0) * (0.5 - 0.5 * h * o),
          d.v0 + (d.v1 - d.v0) * (0.5 + 0.5 * g),
        );
      }
      for (let t = 0; t < l; t++)
        o > 0 ? e.tri(c, u + t + 1, u + t) : e.tri(c, u + t, u + t + 1);
    }
}
var he = class {
    pieces = [];
    obbs = [];
    circles = [];
    w = new r(16384, 24576);
    tris = 0;
    begin() {
      return this.w.reset();
    }
    end(e, t, n, r, i = `always`, a) {
      this.w.n &&
        ((this.tris += this.w.ni / 3),
        this.pieces.push({
          name: e,
          geo: T(this.w, `shim-${e}`),
          x: t,
          z: n,
          range: r,
          group: i,
          matrix: a,
        }));
    }
    box(e, t, n, r, i, a) {
      this.obbs.push({
        x: (e + n) / 2,
        z: (t + r) / 2,
        hx: (n - e) / 2,
        hz: (r - t) / 2,
        rot: 0,
        y0: i,
        y1: a,
      });
    }
  },
  H = (e) => (O(e) ? d(e) : e);
function ge(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function U(e, t, n, r, i, a, o, s = `900`, c = _()) {
  let l = ge(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function _e(e, t, n, r, i, a, o, s = `700`, c = _()) {
  let l = ge(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r));
}
var W = (e, t, n, r, i) => {
    ((e.fillStyle = i),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.fill());
  },
  ve = (e, t, n, r, i, a) => {
    ((e.strokeStyle = i),
      (e.lineWidth = a),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.stroke());
  };
function ye(e, t, n, r, i) {
  (N(e, t, n, r, i, `#b8902e`),
    N(e, t + i * 0.08, n + i * 0.08, r - i * 0.16, i * 0.84, `#111111`),
    U(
      e,
      H(`shim.sl.plate`),
      t + r / 2,
      n + i / 2,
      r * 0.86,
      i * 0.7,
      `#d9b44a`,
      `800`,
      v(),
    ));
}
function be(e, t, n, r, i) {
  N(e, t, n, r, i, `#151515`);
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.46;
  (W(e, a, o, s, `#1d1d1e`),
    ve(e, a, o, s * 0.98, `#2c2c2e`, r * 0.03),
    ve(e, a, o, s * 0.8, `#262628`, r * 0.015));
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2;
    W(
      e,
      a + Math.cos(n) * s * 0.88,
      o + Math.sin(n) * s * 0.88,
      r * 0.025,
      `#3a3a3c`,
    );
  }
  ve(e, a, o + s * 0.1, s * 0.18, `#c9a23e`, r * 0.022);
  for (let t = 0; t < 4; t++) {
    let n = (t / 4) * Math.PI * 2 + 0.4;
    (e.beginPath(),
      e.moveTo(a, o + s * 0.1),
      e.lineTo(
        a + Math.cos(n) * s * 0.18,
        o + s * 0.1 + Math.sin(n) * s * 0.18,
      ),
      e.stroke());
  }
  let c = r * 0.56,
    l = i * 0.15;
  ye(e, a - c / 2, o - s * 0.55 - l / 2, c, l);
}
function xe(e, t, n, r, i) {
  (N(e, t, n, r, i, `#141414`),
    N(e, t + r * 0.12, n + i * 0.1, r * 0.36, i * 0.34, `#3a3e40`),
    N(e, t + r * 0.14, n + i * 0.12, r * 0.32, i * 0.3, `#1d2a30`),
    N(e, t + r * 0.56, n + i * 0.08, r * 0.3, i * 0.5, `#0b0b0b`),
    (e.fillStyle = `#262626`));
  for (let a = 0; a < 12; a++)
    e.fillRect(t + r * (0.05 + a * 0.08), n + i * 0.66, 2, 2);
  ye(e, t + r * 0.12, n + i * 0.5, r * 0.34, i * 0.13);
}
function Se(e, t, n, r, i) {
  (N(e, t, n, r, i, `#141414`), (e.fillStyle = `#242424`));
  for (let a = 0; a < 18; a++)
    (e.fillRect(t + r * (0.03 + a * 0.055), n + i * 0.08, 2, 2),
      e.fillRect(t + r * (0.03 + a * 0.055), n + i * 0.9, 2, 2));
  ye(e, t + r * 0.38, n + i * 0.4, r * 0.24, i * 0.22);
}
function Ce(e, t, n, r, i) {
  (N(e, t, n, r, i, `#22402e`),
    N(e, t + r * 0.03, n + i * 0.05, r * 0.94, i * 0.9, `#f1ecdf`),
    U(
      e,
      H(`shim.sl.board.title`),
      t + r / 2,
      n + i * 0.17,
      r * 0.86,
      i * 0.16,
      `#1c2a22`,
      `900`,
    ),
    N(e, t + r * 0.07, n + i * 0.29, r * 0.86, 2, `#22402e`),
    _e(
      e,
      H(`shim.sl.board.1`),
      t + r * 0.07,
      n + i * 0.42,
      r * 0.86,
      i * 0.1,
      `#2a2a2a`,
    ),
    _e(
      e,
      H(`shim.sl.board.2`),
      t + r * 0.07,
      n + i * 0.58,
      r * 0.86,
      i * 0.09,
      `#2a2a2a`,
    ),
    _e(
      e,
      H(`shim.sl.board.3`),
      t + r * 0.07,
      n + i * 0.76,
      r * 0.86,
      i * 0.1,
      `#8a1a12`,
      `900`,
    ));
}
function we(e, t, r, a, o) {
  N(e, t, r, a, o, `#5e5f5c`);
  let s = new n(i(`shim-stones`, 1)),
    c = o * 0.42;
  (e.save(), e.beginPath(), e.rect(t, r, a, o), e.clip());
  for (let n = -2; n < 5; n++)
    for (let i = -2; i < a / c + 3; i++) {
      let a = t + i * c + (n % 2) * c * 0.5,
        o = r + n * c * 0.5,
        l = 0.78 + s.next() * 0.3;
      ((e.fillStyle = `rgb(${(122 * l) | 0},${(123 * l) | 0},${(118 * l) | 0})`),
        e.beginPath(),
        e.moveTo(a, o - c * 0.46),
        e.lineTo(a + c * 0.46, o),
        e.lineTo(a, o + c * 0.46),
        e.lineTo(a - c * 0.46, o),
        e.closePath(),
        e.fill(),
        s.next() < 0.12 &&
          U(
            e,
            String(10 + Math.floor(s.next() * 290)),
            a,
            o,
            c * 0.4,
            c * 0.18,
            `#e8e6dc`,
            `700`,
          ));
    }
  e.restore();
}
function Te(e, t, n, r, i) {
  (N(e, t, n, r, i, `#3a3c3e`),
    N(e, t + 3, n + 3, r - 6, i - 6, `#52555a`),
    U(
      e,
      H(`shim.sl.stone.title`),
      t + r / 2,
      n + i * 0.38,
      r * 0.86,
      i * 0.34,
      `#f0ede4`,
      `800`,
      v(),
    ),
    U(
      e,
      H(`shim.sl.stone.sub`),
      t + r / 2,
      n + i * 0.75,
      r * 0.8,
      i * 0.18,
      `#d8d4c8`,
      `600`,
    ));
}
function Ee(e, t, r, a, o) {
  (N(e, t, r, a, o, `#a5532e`), N(e, t, r, a, o * 0.45, `#2f6a2c`));
  let s = new n(i(`shim-petunia`, 1));
  for (let n = 0; n < 40; n++)
    W(
      e,
      t + s.next() * a,
      r + s.next() * o * 0.42,
      o * 0.07,
      [`#d23a8a`, `#f2f2f2`, `#8a3ac8`, `#e85a5a`][n % 4],
    );
}
function De(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.3, `#0d3c8c`),
    U(
      e,
      H(`shim.tv.latin`),
      t + r / 2,
      n + i * 0.15,
      r * 0.8,
      i * 0.22,
      `#ffffff`,
      `900`,
    ),
    U(
      e,
      H(`shim.tv.name`),
      t + r / 2,
      n + i * 0.62,
      r * 0.9,
      i * 0.3,
      `#0d3c8c`,
      `900`,
    ));
}
function Oe(e, t, n, r, i) {
  (N(e, t, n, r, i, `#2a2b2e`),
    N(e, t + r * 0.04, n + i * 0.18, r * 0.5, i * 0.64, `#0d3c8c`),
    U(
      e,
      H(`shim.tv.name`),
      t + r * 0.29,
      n + i / 2,
      r * 0.46,
      i * 0.5,
      `#ffffff`,
      `900`,
    ),
    U(
      e,
      H(`shim.tv.news`),
      t + r * 0.78,
      n + i / 2,
      r * 0.36,
      i * 0.4,
      `#ffcc00`,
      `800`,
    ));
}
function ke(e, t, n, r, i) {
  N(e, t, n, r, i, `#151515`);
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.48;
  (W(e, a, o, s, `#c8ccd0`),
    W(e, a, o, s * 0.88, `#1a1a1a`),
    (e.fillStyle = `#0c0c0c`),
    e.beginPath(),
    e.arc(a, o, s * 0.84, Math.PI * 0.15, Math.PI * 0.85),
    e.closePath(),
    e.fill());
  for (let t = 0; t < 6; t++) {
    let n = -Math.PI * 0.15 - (t / 6) * Math.PI * 0.75;
    W(
      e,
      a + Math.cos(n) * s * 0.55,
      o + Math.sin(n) * s * 0.55,
      s * 0.12,
      `#3a3a3a`,
    );
  }
  (W(e, a, o, s * 0.2, `#c8ccd0`), W(e, a, o, s * 0.1, `#808488`));
}
function Ae(e, t, n, r, i) {
  (N(e, t, n, r, i, `#4a4c4e`),
    N(e, t + 2, n + 2, r - 4, i - 4, `#2c2e30`),
    U(
      e,
      H(`shim.d51.plate`),
      t + r / 2,
      n + i / 2,
      r * 0.9,
      i * 0.5,
      `#e6e2d6`,
      `700`,
    ));
}
function je(e, t, n, r, i) {
  (N(e, t, n, r, i, `#6e6c66`),
    N(e, t + r * 0.06, n + i * 0.04, r * 0.88, i * 0.92, `#55534e`),
    j(
      e,
      H(`shim.shoka.title`),
      t + r * 0.78,
      n + i * 0.1,
      n + i * 0.9,
      r * 0.18,
      `#e9e4d8`,
      v(),
      `800`,
    ),
    H(`shim.shoka.verse`)
      .split(` `)
      .forEach((a, o) =>
        j(
          e,
          a,
          t + r * (0.5 - o * 0.24),
          n + i * 0.16,
          n + i * 0.84,
          r * 0.14,
          `#dcd6c6`,
          v(),
          `700`,
        ),
      ));
}
function Me(e, t, n, r, i) {
  (N(e, t, n, r, i, `#cfc8b6`), (e.fillStyle = `#b9b2a0`));
  for (let a = 0; a < 14; a++) e.fillRect(t, n + (i * a) / 14, r, 1.5);
  (N(e, t, n + i * 0.8, r, i * 0.2, `#9d968a`), (e.fillStyle = `#867f74`));
  for (let a = 0; a < 3; a++) e.fillRect(t, n + i * (0.8 + a * 0.066), r, 2);
  (N(e, t, n + i * 0.43, r, i * 0.035, `#ece8de`),
    N(e, t, n, r, i * 0.06, `#f2efe7`));
  for (let a = 0; a < 26; a++)
    e.fillRect(t + (r * a) / 26, n + i * 0.06, r / 60, i * 0.02);
  let a = (t, n, i, a) => {
    let o = r * 0.16;
    (N(e, t - o / 2 - 3, n - 3, o + 6, i + 6, `#ece8de`),
      N(e, t - o / 2, n, o, i, `#2a3238`),
      (e.fillStyle = `#e9e5da`),
      e.fillRect(t - 1, n, 2, i));
    for (let r = 1; r < 3; r++) e.fillRect(t - o / 2, n + (i * r) / 3, o, 2);
    a &&
      ((e.fillStyle = `#ece8de`),
      e.beginPath(),
      e.moveTo(t - o / 2 - 6, n - 4),
      e.lineTo(t, n - i * 0.22),
      e.lineTo(t + o / 2 + 6, n - 4),
      e.closePath(),
      e.fill());
  };
  for (let e of [0.28, 0.72])
    (a(t + r * e, n + i * 0.16, i * 0.22, !0),
      a(t + r * e, n + i * 0.53, i * 0.22, !1));
}
function Ne(e, t, n, r, i) {
  (N(e, t, n, r, i, `#d3ccba`), N(e, t, n + i * 0.82, r, i * 0.18, `#a39c8f`));
  for (let a = 0; a < 3; a++) {
    let o = t + r * (0.2 + a * 0.3),
      s = r * 0.2,
      c = n + i * 0.28;
    ((e.fillStyle = `#ece8de`),
      e.beginPath(),
      e.arc(o, c + s / 2, s / 2 + 4, Math.PI, 0),
      e.lineTo(o + s / 2 + 4, n + i),
      e.lineTo(o - s / 2 - 4, n + i),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `#2d343a`),
      e.beginPath(),
      e.arc(o, c + s / 2, s / 2, Math.PI, 0),
      e.lineTo(o + s / 2, n + i),
      e.lineTo(o - s / 2, n + i),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `#c9b98a`),
      e.fillRect(o - 1, c + s / 2, 2, n + i - c - s / 2));
  }
  N(e, t, n, r, i * 0.1, `#f0ece2`);
}
function Pe(e, t, n, r, i) {
  (N(e, t, n, r, i, `#2d2a26`),
    U(
      e,
      H(`shim.kyu.name`),
      t + r * 0.36,
      n + i / 2,
      r * 0.6,
      i * 0.66,
      `#e8dcb8`,
      `700`,
      v(),
    ),
    U(
      e,
      H(`shim.kyu.museum`),
      t + r * 0.82,
      n + i / 2,
      r * 0.3,
      i * 0.36,
      `#d8ccaa`,
      `600`,
    ));
}
function Fe(e, t, n, r, i) {
  (N(e, t, n, r, i, `#f3efe4`),
    N(e, t, n, r, i * 0.32, `#2d2a26`),
    U(
      e,
      H(`shim.kyu.museum`),
      t + r / 2,
      n + i * 0.16,
      r * 0.86,
      i * 0.24,
      `#f3efe4`,
      `800`,
    ),
    U(
      e,
      H(`shim.kyu.hours`),
      t + r / 2,
      n + i * 0.66,
      r * 0.92,
      i * 0.24,
      `#2d2a26`,
      `700`,
    ));
}
function Ie(e, t, n, r, i) {
  (N(e, t, n, r, i, `#f4f2ea`),
    j(
      e,
      H(`shim.kyu.zero.post`),
      t + r / 2,
      n + i * 0.1,
      n + i * 0.7,
      r * 0.7,
      `#1a1a1a`,
      v(),
      `900`,
    ));
}
function Le(e, t, n, r, i) {
  (N(e, t, n, r, i, `#7a776f`),
    N(e, t + 4, n + 4, r - 8, i - 8, `#8a877e`),
    j(
      e,
      H(`shim.kyu.site`),
      t + r / 2,
      n + i * 0.08,
      n + i * 0.92,
      r * 0.5,
      `#f0ece2`,
      v(),
      `800`,
    ));
}
var Re = [
  [`#1a1410`, `#f4e3b0`],
  [`#b5121b`, `#ffffff`],
  [`#f2ead8`, `#1a1a1a`],
  [`#2b1a12`, `#ffd36a`],
  [`#0d2242`, `#ffffff`],
  [`#ffcc00`, `#1a1a1a`],
  [`#1a1a1a`, `#f4f4f4`],
  [`#5a1c10`, `#ffe9c0`],
  [`#f6f0e2`, `#b5121b`],
  [`#14301e`, `#f4e3b0`],
  [`#e8e2d2`, `#0d2242`],
  [`#3c1810`, `#ffffff`],
  [`#0f1a2a`, `#9fd8ff`],
];
function ze(e) {
  return (t, n, r, i, a) => {
    let [o, s] = Re[e % Re.length];
    (le(t, n, r, i, a, o, 0.6),
      (t.globalAlpha = 1),
      U(
        t,
        H(`shim.gado.bar.${e + 1}`),
        n + i / 2,
        r + a / 2,
        i * 0.9,
        a * 0.72,
        s,
        `900`,
        e % 3 == 1 ? v() : _(),
      ));
  };
}
function Be(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-gado-front`, e));
    ue(t, r, a, o, s, `#2a1e16`, 0.5);
    let l = r + o * 0.03,
      u = a + s * 0.08,
      d = o * 0.94,
      f = s * 0.88;
    ((t.globalAlpha = 1), (t.fillStyle = `#e9b46e`), t.fillRect(l, u, d, f));
    let p = [
      `beer`,
      `hoppy`,
      `lemon`,
      `hiball`,
      `sake`,
      `yakiton`,
      `kashira`,
      `nikomi`,
      `potesara`,
      `tomato`,
    ];
    for (let n = 0; n < 9; n++) {
      let r = l + d * (0.04 + (n * 0.92) / 9),
        i = (d * 0.85) / 9;
      ((t.fillStyle = n % 4 == 0 ? `#ffe9a8` : `#fffaf0`),
        t.fillRect(r, u + f * 0.04, i, f * 0.36),
        j(
          t,
          H(`shim.gado.menu.${p[(n + e) % p.length]}`).split(` `)[0],
          r + i / 2,
          u + f * 0.06,
          u + f * 0.38,
          i * 0.7,
          `#1a1a1a`,
          _(),
          `800`,
        ));
    }
    for (let n = 0; n < 22; n++)
      ((t.fillStyle = [`#3b5a2a`, `#6a3a1a`, `#d8d0b8`, `#1a2a4a`][
        (n + e) % 4
      ]),
        t.fillRect(
          l + d * (0.05 + n * 0.04),
          u + f * 0.44,
          d * 0.018,
          f * 0.08,
        ));
    ((t.fillStyle = `#8a5a30`),
      t.fillRect(l, u + f * 0.64, d, f * 0.1),
      (t.fillStyle = `#5c3a1e`),
      t.fillRect(l, u + f * 0.74, d, f * 0.26));
    let m = 2 + Math.floor(c.next() * 3);
    for (let e = 0; e < m; e++) {
      let e = l + d * (0.12 + c.next() * 0.76);
      ((t.fillStyle = [`#1e2430`, `#2a2a2a`, `#3a3e4a`, `#e8e8e8`][
        Math.floor(c.next() * 4)
      ]),
        t.fillRect(e - d * 0.035, u + f * 0.52, d * 0.07, f * 0.4),
        W(t, e, u + f * 0.48, d * 0.026, `#1a1410`));
    }
    for (let e = 1; e < 4; e++)
      ue(t, l + (d * e) / 4 - 2, u, 4, f, `#2a1e16`, 0.5);
    let h = l + d * 0.27,
      g = d * 0.46;
    ((t.globalAlpha = 1),
      (t.fillStyle = e % 2 ? `#1d2b5a` : `#5a1a14`),
      t.fillRect(h, u, g, f * 0.3));
    for (let e = 1; e < 4; e++)
      ue(t, h + (g * e) / 4 - 1, u + f * 0.12, 2, f * 0.18, `#0a0a0a`, 0.6);
    U(
      t,
      H(e % 2 ? `shim.gado.noren.yakitori` : `shim.gado.noren.taishu`),
      h + g / 2,
      u + f * 0.1,
      g * 0.86,
      f * 0.14,
      `#ffffff`,
      `900`,
    );
  };
}
function Ve(e) {
  return (t, n, r, i, a) => {
    (N(t, n, r, i, a, `#8d9092`), (t.fillStyle = `#7a7d80`));
    for (let e = 0; e < 26; e++) t.fillRect(n, r + (a * e) / 26, i, a / 70);
    let [o, s] = Re[e % Re.length];
    (e % 2 == 0 &&
      (N(t, n + i * 0.18, r + a * 0.3, i * 0.64, a * 0.22, o),
      U(
        t,
        H(`shim.gado.bar.${e + 1}`),
        n + i / 2,
        r + a * 0.41,
        i * 0.6,
        a * 0.16,
        s,
        `900`,
      )),
      (t.fillStyle = `rgba(40,36,30,0.25)`),
      t.fillRect(n, r + a * 0.86, i, a * 0.14));
  };
}
function He(e, t, n, r, i) {
  (N(e, t, n, r, i, `#1c1c1c`),
    N(e, t + 3, n + 3, r - 6, i - 6, `#26301f`),
    U(
      e,
      H(`shim.gado.menu.osusume`),
      t + r / 2,
      n + i * 0.12,
      r * 0.86,
      i * 0.1,
      `#ffe14a`,
      `900`,
    ),
    [
      `shim.gado.menu.senbero`,
      `shim.gado.menu.yakiton`,
      `shim.gado.menu.nikomi`,
      `shim.gado.menu.hoppy`,
      `shim.gado.hiruzake`,
    ].forEach((a, o) =>
      U(
        e,
        H(a),
        t + r / 2,
        n + i * (0.3 + o * 0.15),
        r * 0.86,
        i * 0.09,
        o === 0 ? `#ff8a6a` : `#f4f4f4`,
        `700`,
      ),
    ));
}
function Ue(e) {
  return (t, n, r, i, a) => {
    (le(t, n, r, i, a, `#d01c14`, 0.8),
      (t.globalAlpha = 1),
      (t.fillStyle = `rgba(0,0,0,0.25)`));
    for (let e = 1; e < 8; e++) t.fillRect(n, r + (a * e) / 8, i, 1);
    j(
      t,
      H(e),
      n + i / 2,
      r + a * 0.14,
      r + a * 0.86,
      i * 0.42,
      `#1a0a08`,
      _(),
      `900`,
    );
  };
}
var We = [
    {
      id: `fish`,
      names: [
        `shim.mkt.fish.1`,
        `shim.mkt.fish.2`,
        `shim.mkt.fish.3`,
        `shim.mkt.fish.4`,
      ],
      cat: `shim.mkt.cat.fish`,
      awn: [`#1d4f9a`, `#ffffff`],
      board: [`#ffffff`, `#0d2a6a`],
      weight: 5,
    },
    {
      id: `maguro`,
      names: [`shim.mkt.maguro.1`, `shim.mkt.maguro.2`, `shim.mkt.maguro.3`],
      cat: `shim.mkt.cat.maguro`,
      awn: [`#c8161c`, `#ffffff`],
      board: [`#c8161c`, `#ffffff`],
      weight: 3,
    },
    {
      id: `kanbutsu`,
      names: [
        `shim.mkt.kanbutsu.1`,
        `shim.mkt.kanbutsu.2`,
        `shim.mkt.kanbutsu.3`,
      ],
      cat: `shim.mkt.cat.kanbutsu`,
      awn: [`#c98a2a`, `#4a2a10`],
      board: [`#f2e4c4`, `#4a2a10`],
      weight: 3,
    },
    {
      id: `knife`,
      names: [`shim.mkt.knife.1`, `shim.mkt.knife.2`],
      cat: `shim.mkt.cat.knife`,
      awn: [`#2a2a2a`, `#d8d0b8`],
      board: [`#1a1a1a`, `#f0e6c8`],
      weight: 2,
    },
    {
      id: `nori`,
      names: [`shim.mkt.nori.1`, `shim.mkt.nori.2`],
      cat: `shim.mkt.cat.nori`,
      awn: [`#1f3a22`, `#e8e0c8`],
      board: [`#1f3a22`, `#f4ecd4`],
      weight: 2,
    },
    {
      id: `tea`,
      names: [`shim.mkt.tea`],
      cat: `shim.mkt.cat.tea`,
      awn: [`#4a6a2a`, `#f0f0e0`],
      board: [`#f4f0e0`, `#2f4a1a`],
      weight: 1,
    },
    {
      id: `katsuo`,
      names: [`shim.mkt.katsuo`],
      cat: `shim.mkt.cat.katsuo`,
      awn: [`#7a3a12`, `#f0e0c0`],
      board: [`#f6ead0`, `#5a2a0a`],
      weight: 1.5,
    },
    {
      id: `tsukemono`,
      names: [`shim.mkt.tsukemono`],
      cat: `shim.mkt.cat.tsukemono`,
      awn: [`#8a6a1a`, `#ffffff`],
      board: [`#ffffff`, `#5a3a0a`],
      weight: 1,
    },
    {
      id: `kitchen`,
      names: [`shim.mkt.kitchen.1`, `shim.mkt.kitchen.2`],
      cat: `shim.mkt.cat.kitchen`,
      awn: [`#e08a1a`, `#ffffff`],
      board: [`#ffcc00`, `#1a1a1a`],
      weight: 2,
    },
    {
      id: `utsuwa`,
      names: [`shim.mkt.utsuwa`],
      cat: `shim.mkt.cat.utsuwa`,
      awn: [`#3a4a5a`, `#e8e8e0`],
      board: [`#e8e4da`, `#2a3440`],
      weight: 1,
    },
    {
      id: `don`,
      names: [`shim.mkt.don.1`, `shim.mkt.don.2`, `shim.mkt.don.3`],
      cat: `shim.mkt.cat.don`,
      awn: [`#0d3c8c`, `#ffffff`],
      board: [`#0d3c8c`, `#ffffff`],
      weight: 4,
      eat: !0,
    },
    {
      id: `sushi`,
      names: [`shim.mkt.sushi2`],
      cat: `shim.mkt.cat.sushi`,
      awn: [`#1a1a1a`, `#ffffff`],
      board: [`#1a1a1a`, `#e8d8a8`],
      weight: 1.5,
      eat: !0,
    },
    {
      id: `tamago`,
      names: [`shim.mkt.tamago`],
      cat: `shim.mkt.cat.tamago`,
      awn: [`#f2b81a`, `#5a2a0a`],
      board: [`#ffffff`, `#c8161c`],
      weight: 1,
    },
    {
      id: `ramen`,
      names: [`shim.mkt.ramen`],
      cat: `shim.mkt.cat.ramen`,
      awn: [`#b5121b`, `#ffffff`],
      board: [`#f4e0b0`, `#b5121b`],
      weight: 0.7,
      eat: !0,
    },
    {
      id: `coffee`,
      names: [`shim.mkt.coffee`],
      cat: `shim.mkt.cat.coffee`,
      awn: [`#5a3a1e`, `#f0e4cc`],
      board: [`#3a2a1a`, `#f0e0c0`],
      weight: 0.7,
      eat: !0,
    },
    {
      id: `taiyaki`,
      names: [`shim.mkt.taiyaki`],
      cat: `shim.mkt.cat.taiyaki`,
      awn: [`#c8161c`, `#ffe060`],
      board: [`#ffe060`, `#c8161c`],
      weight: 0.6,
    },
    {
      id: `yasai`,
      names: [`shim.mkt.yasai`],
      cat: `shim.mkt.cat.yasai`,
      awn: [`#2a7a2a`, `#ffffff`],
      board: [`#ffffff`, `#1a5a1a`],
      weight: 1,
    },
    {
      id: `kai`,
      names: [`shim.mkt.kai`],
      cat: `shim.mkt.cat.kai`,
      awn: [`#1a6a8a`, `#ffffff`],
      board: [`#e8f4f8`, `#0a4a6a`],
      weight: 1,
    },
  ],
  Ge = (e) => We.find((t) => t.id === e) ?? We[0];
function Ke(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    (N(n, r, i, a, o, s),
      (n.strokeStyle = c),
      (n.globalAlpha = 0.6),
      (n.lineWidth = 2),
      n.strokeRect(r + 3, i + 3, a - 6, o - 6),
      (n.globalAlpha = 1));
    let l = o * 0.95;
    (N(n, r + a - l - 4, i + 4, l, o - 8, c),
      j(
        n,
        H(e.cat),
        r + a - l / 2 - 4,
        i + o * 0.1,
        i + o * 0.9,
        l * 0.55,
        s,
        _(),
        `900`,
      ),
      U(
        n,
        H(t),
        r + (a - l) / 2,
        i + o / 2,
        a - l - 18,
        o * 0.66,
        c,
        `900`,
        /classic|knife|nori|tea|katsuo|kanbutsu|tsukemono|utsuwa|sushi/.test(
          e.id,
        )
          ? v()
          : _(),
      ));
  };
}
function qe(e, t, n) {
  return (r, i, a, o, s) => {
    if ((N(r, i, a, o, s, e), n))
      for (let e = 0; e < 8; e += 2) N(r, i + (o * e) / 8, a, o / 8, s, t);
    ((r.fillStyle = `rgba(0,0,0,0.12)`),
      r.fillRect(i, a + s * 0.9, o, s * 0.1));
  };
}
function Je(e, t) {
  return (n, r, i, a, o) => {
    (N(n, r, i, a, o, e.awn[0]),
      U(n, H(t), r + a / 2, i + o / 2, a * 0.86, o * 0.7, e.awn[1], `900`));
  };
}
function Ye(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-goods`, e)),
      l = (e, n, r) => {
        (N(t, e - o * 0.11, n - s * 0.08, o * 0.22, s * 0.16, `#ffffff`),
          U(t, H(r), e, n, o * 0.2, s * 0.12, `#c8161c`, `800`));
      },
      u = (e, n, r, i) => {
        (N(t, e, n, r, i, `#f4f4f2`),
          N(t, e + 3, n + 3, r - 6, i - 6, `#dfe8ec`));
      };
    switch (e) {
      case `fish`:
      case `kai`:
        N(t, r, a, o, s, `#d6dde0`);
        for (let n = 0; n < 6; n++) {
          let i = r + (n % 3) * (o / 3) + 3,
            c = a + Math.floor(n / 3) * (s / 2) + 3;
          u(i, c, o / 3 - 6, s / 2 - 6);
          for (let r = 0; r < 4; r++)
            ((t.fillStyle =
              e === `kai`
                ? [`#8a6a4a`, `#e8d8c0`, `#5a4a3a`][r % 3]
                : [`#8aa0b0`, `#c04030`, `#b0b8c0`, `#e08a50`][(n + r) % 4]),
              t.beginPath(),
              t.ellipse(
                i + (o / 3 - 6) * (0.25 + (r % 2) * 0.5),
                c + (s / 2 - 6) * (0.3 + 0.4 * Math.floor(r / 2)),
                o * (e === `kai` ? 0.03 : 0.06),
                s * (e === `kai` ? 0.05 : 0.04),
                0.3,
                0,
                Math.PI * 2,
              ),
              t.fill());
        }
        (l(
          r + o * 0.2,
          a + s * 0.88,
          e === `kai` ? `shim.mkt.card.hotate` : `shim.mkt.card.sake`,
        ),
          l(
            r + o * 0.75,
            a + s * 0.88,
            e === `kai` ? `shim.mkt.card.uni` : `shim.mkt.card.himono`,
          ));
        break;
      case `maguro`:
        N(t, r, a, o, s, `#e8eef0`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + 4,
            i = a + Math.floor(e / 4) * (s / 2) + 6;
          (N(t, n, i, o / 4 - 8, s / 2 - 14, `#ffffff`),
            N(
              t,
              n + 6,
              i + 6,
              o / 4 - 20,
              s / 2 - 26,
              e % 3 == 0 ? `#e7a0a0` : `#b0202a`,
            ));
        }
        (l(r + o * 0.25, a + s * 0.9, `shim.mkt.card.chutoro`),
          l(r + o * 0.72, a + s * 0.9, `shim.mkt.card.akami`));
        break;
      case `kanbutsu`:
      case `katsuo`:
        N(t, r, a, o, s, `#7a5a3a`);
        for (let n = 0; n < 8; n++) {
          let i = r + (n % 4) * (o / 4) + o / 8,
            c = a + Math.floor(n / 4) * (s / 2) + s / 4;
          (W(t, i, c, o * 0.1, `#c8a060`),
            W(
              t,
              i,
              c,
              o * 0.085,
              e === `katsuo`
                ? [`#8a5a2a`, `#c09060`][n % 2]
                : [`#2a3a1a`, `#d8c8a0`, `#6a4a2a`, `#e8e0c8`][n % 4],
            ));
        }
        l(
          r + o * 0.5,
          a + s * 0.9,
          e === `katsuo` ? `shim.mkt.cat.katsuo` : `shim.mkt.card.kombu`,
        );
        break;
      case `knife`:
        (N(t, r, a, o, s, `#2a2a2c`),
          N(t, r + 4, a + 4, o - 8, s - 8, `#3a4048`));
        for (let e = 0; e < 10; e++) {
          let n = r + o * (0.08 + e * 0.088);
          (N(t, n, a + s * 0.12, o * 0.03, s * 0.48, `#d8dde2`),
            N(t, n, a + s * 0.6, o * 0.03, s * 0.22, `#5a3a1e`));
        }
        l(r + o * 0.5, a + s * 0.9, `shim.mkt.card.togi`);
        break;
      case `nori`:
      case `tea`:
        N(t, r, a, o, s, `#e8e2d2`);
        for (let n = 0; n < 12; n++) {
          let i = r + (n % 6) * (o / 6) + 3,
            c = a + Math.floor(n / 6) * (s / 2) + 4;
          (N(
            t,
            i,
            c,
            o / 6 - 6,
            s / 2 - 12,
            e === `nori`
              ? [`#1a2a1a`, `#2a3a2a`, `#c8161c`][n % 3]
              : [`#4a6a2a`, `#c8b07a`, `#2a4a1a`][n % 3],
          ),
            N(t, i + 4, c + 6, o / 6 - 14, s * 0.08, `#f4ecd4`));
        }
        break;
      case `tamago`:
        N(t, r, a, o, s, `#f4f0e6`);
        for (let e = 0; e < 10; e++) {
          let n = r + (e % 5) * (o / 5) + 6,
            i = a + Math.floor(e / 5) * (s / 2.4) + 8;
          (N(t, n, i, o / 5 - 12, s / 3 - 6, `#f2c73a`),
            N(t, n, i + s / 3 - 12, o / 5 - 12, 5, `#c89020`));
        }
        l(r + o * 0.5, a + s * 0.9, `shim.mkt.card.tamago`);
        break;
      case `tsukemono`:
        N(t, r, a, o, s, `#6a4a2a`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + o / 8,
            i = a + Math.floor(e / 4) * (s / 2) + s / 4;
          (W(t, n, i, o * 0.1, `#e8e0d0`),
            W(
              t,
              n,
              i,
              o * 0.085,
              [`#e8c840`, `#8a2040`, `#6a8a2a`, `#c86a2a`][e % 4],
            ));
        }
        break;
      case `kitchen`:
      case `utsuwa`:
        N(t, r, a, o, s, `#d8d4cc`);
        for (let n = 0; n < 14; n++) {
          let i = r + c.next() * o,
            l = a + c.next() * s * 0.8;
          e === `kitchen`
            ? (W(t, i, l, o * 0.05, [`#b0b4b8`, `#c88a3a`, `#2a2a2a`][n % 3]),
              W(t, i, l, o * 0.035, `#8a8e92`))
            : (W(
                t,
                i,
                l,
                o * 0.045,
                [`#f4f0e8`, `#2a3a5a`, `#8a5a3a`, `#c8c0a8`][n % 4],
              ),
              ve(t, i, l, o * 0.03, `#6a7a8a`, 1.5));
        }
        l(
          r + o * 0.5,
          a + s * 0.9,
          e === `kitchen` ? `shim.mkt.card.naire` : `shim.mkt.card.taxfree`,
        );
        break;
      case `yasai`:
        N(t, r, a, o, s, `#4a3a2a`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + 4,
            i = a + Math.floor(e / 4) * (s / 2) + 4;
          N(t, n, i, o / 4 - 8, s / 2 - 8, `#3a7ad0`);
          for (let r = 0; r < 6; r++)
            W(
              t,
              n + (o / 4 - 8) * ((r % 3) / 3 + 0.17),
              i + (s / 2 - 8) * (Math.floor(r / 3) * 0.5 + 0.25),
              o * 0.025,
              [`#e84a2a`, `#f2c040`, `#4a9a2a`, `#f08a2a`][e % 4],
            );
        }
        break;
      case `taiyaki`:
        N(t, r, a, o, s, `#3a3a3a`);
        for (let e = 0; e < 10; e++)
          ((t.fillStyle = `#c88a3a`),
            t.beginPath(),
            t.ellipse(
              r + (e % 5) * (o / 5) + o / 10,
              a + Math.floor(e / 5) * (s / 2) + s / 4,
              o * 0.075,
              s * 0.14,
              0,
              0,
              Math.PI * 2,
            ),
            t.fill());
        break;
      default:
        N(t, r, a, o, s, `#f6f4ee`);
        for (let n = 0; n < 8; n++) {
          let i = r + (n % 4) * (o / 4) + o / 8,
            c = a + Math.floor(n / 4) * (s / 2) + s / 4;
          if (
            (W(t, i, c, o * 0.09, e === `coffee` ? `#f4f0e8` : `#1a1a1a`),
            e === `ramen`)
          )
            W(t, i, c, o * 0.07, `#d8a050`);
          else if (e === `coffee`) W(t, i, c, o * 0.05, `#5a3a1e`);
          else {
            W(t, i, c, o * 0.07, `#f4f0e8`);
            for (let e = 0; e < 5; e++)
              W(
                t,
                i + Math.cos(e * 1.3) * o * 0.035,
                c + Math.sin(e * 1.3) * o * 0.035,
                o * 0.022,
                [`#c8202a`, `#f08a2a`, `#f2c73a`, `#e8a0a0`, `#3a6a2a`][e],
              );
          }
          N(t, i - o * 0.06, c + s * 0.17, o * 0.12, s * 0.06, `#ffffff`);
        }
        (e === `don` || e === `sushi`) &&
          l(r + o * 0.5, a + s * 0.92, `shim.mkt.card.don`);
    }
  };
}
function Xe(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-interior`, e.id));
    if ((N(t, r, a, o, s, e.eat ? `#e2cfa8` : `#d4ccbc`), e.eat)) {
      for (let e = 0; e < 8; e++)
        (N(
          t,
          r + o * (0.06 + e * 0.11),
          a + s * 0.06,
          o * 0.09,
          s * 0.32,
          `#fffaf0`,
        ),
          N(
            t,
            r + o * (0.07 + e * 0.11),
            a + s * 0.1,
            o * 0.07,
            s * 0.04,
            `#1a1a1a`,
          ));
      (N(t, r, a + s * 0.58, o, s * 0.08, `#c8a070`),
        N(t, r, a + s * 0.66, o, s * 0.34, `#7a5030`));
      for (let e = 0; e < 6; e++)
        W(t, r + o * (0.1 + e * 0.16), a + s * 0.78, o * 0.035, `#b5121b`);
      return;
    }
    let l = {
      fish: [`#f4f4f2`, `#dfe8ec`, `#8aa0b0`, `#c04030`],
      maguro: [`#f4f4f2`, `#b0202a`, `#e7a0a0`, `#ffffff`],
      kai: [`#f4f4f2`, `#8a6a4a`, `#e8d8c0`, `#3a7ad0`],
      kanbutsu: [`#c8a060`, `#2a3a1a`, `#e8e0c8`, `#6a4a2a`],
      katsuo: [`#8a5a2a`, `#c09060`, `#f6ead0`, `#5a2a0a`],
      nori: [`#1a2a1a`, `#c8161c`, `#f4ecd4`, `#2a3a2a`],
      tea: [`#4a6a2a`, `#c8b07a`, `#2a4a1a`, `#f4f0e0`],
      knife: [`#d8dde2`, `#5a3a1e`, `#2a2a2c`, `#c8ccd0`],
      kitchen: [`#b0b4b8`, `#c88a3a`, `#2a2a2a`, `#ffcc00`],
      utsuwa: [`#f4f0e8`, `#2a3a5a`, `#8a5a3a`, `#c8c0a8`],
      tsukemono: [`#e8c840`, `#8a2040`, `#6a8a2a`, `#c86a2a`],
      yasai: [`#e84a2a`, `#f2c040`, `#4a9a2a`, `#3a7ad0`],
    }[e.id] ?? [
      `#f4f4f2`,
      `#3a5a8a`,
      `#c8161c`,
      `#e8d8b0`,
      `#2a4a2a`,
      `#d8a050`,
    ];
    for (let e = 0; e < 4; e++) {
      N(t, r, a + s * (0.2 + e * 0.19), o, s * 0.025, `#5a5048`);
      for (let n = 0; n < 12; n++)
        N(
          t,
          r + o * (0.01 + n * 0.083),
          a + s * (0.03 + e * 0.19),
          o * 0.075,
          s * 0.17,
          l[Math.floor(c.next() * l.length)],
        );
    }
    (N(t, r + o * 0.04, a + s * 0.04, o * 0.14, s * 0.12, `#ffffff`),
      N(t, r + o * 0.84, a + s * 0.03, o * 0.12, s * 0.15, `#ffffff`),
      N(t, r + o * 0.84, a + s * 0.03, o * 0.12, s * 0.04, `#c8161c`));
    for (let e = 0; e < 6; e++)
      N(
        t,
        r + o * (0.05 + e * 0.15),
        a + s * 0.78,
        o * 0.13,
        s * 0.2,
        `#f4f4f2`,
      );
    N(t, r + o * 0.62, a + s * 0.62, o * 0.3, s * 0.16, `#8a8e92`);
  };
}
function Ze(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-mkt-fac`, e)),
      l = [
        `#d8d2c4`,
        `#c9c2b2`,
        `#b9b8b0`,
        `#d6cdb8`,
        `#a8a49a`,
        `#cfc8bc`,
        `#e0dccf`,
        `#b0a690`,
        `#9aa0a0`,
        `#a89c8a`,
      ],
      u = l[e % l.length];
    if ((N(t, r, a, o, s, u), e >= 8)) {
      for (let n = 0; n < 28; n++)
        N(t, r + (o * n) / 28, a, o / 56, s, e === 8 ? `#8a9090` : `#968a78`);
      t.fillStyle = `rgba(120,60,30,0.22)`;
      for (let e = 0; e < 9; e++)
        t.fillRect(
          r + c.next() * o,
          a + c.next() * s * 0.4,
          3,
          s * (0.2 + c.next() * 0.4),
        );
    }
    if (e % 3 == 1) {
      t.fillStyle = `rgba(0,0,0,0.07)`;
      for (let e = 0; e < 24; e++) t.fillRect(r, a + (s * e) / 24, o, 1);
      for (let e = 0; e < 20; e++) t.fillRect(r + (o * e) / 20, a, 1, s);
    }
    let d = r + o * (0.12 + c.next() * 0.1),
      f = o * (0.48 + c.next() * 0.14),
      p = a + s * 0.22,
      m = s * 0.5;
    if (
      (N(t, d - 3, p - 3, f + 6, m + 6, `#9aa0a4`),
      N(t, d, p, f, m, e % 2 ? `#c8d0d4` : `#6f7c84`),
      N(t, d + f / 2 - 1.5, p, 3, m, `#9aa0a4`),
      e % 4 == 0)
    )
      for (let e = 0; e < 6; e++)
        N(t, d + (f * e) / 6, p, f / 14, m, `#e8e0cc`);
    let h = r + o * 0.72,
      g = a + s * 0.56;
    (N(t, h, g, o * 0.2, s * 0.28, `#e8e8e4`),
      W(t, h + o * 0.1, g + s * 0.14, o * 0.06, `#9a9c9e`),
      N(t, h + o * 0.18, a, 3, g - a, `#c8c8c4`),
      (t.fillStyle = `rgba(40,36,30,0.12)`));
    for (let e = 0; e < 6; e++)
      t.fillRect(d + c.next() * f, p + m + 3, 2, s * (0.1 + c.next() * 0.18));
    e % 5 == 2 &&
      (N(t, r + o * 0.06, a + s * 0.04, o * 0.4, s * 0.13, `#f4f0e4`),
      U(
        t,
        H(`shim.mkt.pro`),
        r + o * 0.26,
        a + s * 0.105,
        o * 0.36,
        s * 0.1,
        `#7a3a2a`,
        `800`,
      ));
  };
}
function Qe(e) {
  return (t, n, r, i, a) => {
    (N(t, n, r, i, a, [`#9a9d9f`, `#8a8e90`, `#a8a49a`][e % 3]),
      (t.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < 24; e++) t.fillRect(n, r + (a * e) / 24, i, a / 64);
    e === 1
      ? (N(t, n + i * 0.36, r + a * 0.36, i * 0.28, a * 0.2, `#ffffff`),
        U(
          t,
          H(`shim.mkt.kyushi`),
          n + i * 0.5,
          r + a * 0.46,
          i * 0.24,
          a * 0.12,
          `#c8161c`,
          `800`,
        ))
      : e === 2 &&
        (N(t, n + i * 0.4, r + a * 0.38, i * 0.2, a * 0.16, `#ffffff`),
        U(
          t,
          H(`shim.mkt.kyugyo`),
          n + i * 0.5,
          r + a * 0.46,
          i * 0.18,
          a * 0.1,
          `#1a1a1a`,
          `800`,
        ));
  };
}
function $e(e, t, n, r, i) {
  (le(e, t, n, r, i, `#ffffff`, 0.62),
    (e.globalAlpha = 1),
    N(e, t, n + i * 0.84, r, i * 0.16, `#c8161c`),
    U(
      e,
      H(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.42,
      r * 0.9,
      i * 0.6,
      `#c8161c`,
      `900`,
    ),
    U(
      e,
      H(`shim.mkt.latin`),
      t + r / 2,
      n + i * 0.92,
      r * 0.6,
      i * 0.12,
      `#ffffff`,
      `800`,
    ));
}
function et(e, t, n, r, i) {
  (N(e, t, n, r, i, `#0d3c8c`),
    N(e, t, n + i * 0.88, r, i * 0.12, `#c8161c`),
    j(
      e,
      H(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.84,
      r * 0.6,
      `#ffffff`,
      _(),
      `900`,
    ));
}
function tt(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.2, `#e8780a`),
    U(
      e,
      H(`shim.mkt.name`),
      t + r / 2,
      n + i * 0.1,
      r * 0.84,
      i * 0.13,
      `#ffffff`,
      `900`,
    ),
    ve(e, t + r / 2, n + i * 0.48, r * 0.22, `#c8161c`, r * 0.05),
    N(e, t + r * 0.42, n + i * 0.4, r * 0.16, i * 0.16, `#3a3a3a`),
    (e.strokeStyle = `#c8161c`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.moveTo(t + r * 0.35, n + i * 0.62),
    e.lineTo(t + r * 0.65, n + i * 0.34),
    e.stroke(),
    U(
      e,
      H(`shim.mkt.manners`),
      t + r / 2,
      n + i * 0.84,
      r * 0.92,
      i * 0.11,
      `#1a1a1a`,
      `800`,
    ));
}
function nt(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.22, `#0d3c8c`),
    U(
      e,
      H(`shim.mkt.calendar`),
      t + r / 2,
      n + i * 0.11,
      r * 0.9,
      i * 0.14,
      `#ffffff`,
      `800`,
    ));
  for (let a = 0; a < 5; a++)
    for (let o = 0; o < 7; o++) {
      let s = t + r * (0.08 + o * 0.13),
        c = n + i * (0.32 + a * 0.14),
        l = o === 0 || (o === 3 && (a === 1 || a === 3));
      (l && W(e, s + r * 0.04, c + i * 0.05, i * 0.05, `#c8161c`),
        U(
          e,
          String(a * 7 + o + 1 > 31 ? `` : a * 7 + o + 1),
          s + r * 0.04,
          c + i * 0.05,
          r * 0.1,
          i * 0.08,
          l ? `#ffffff` : `#1a1a1a`,
          `700`,
        ));
    }
}
function rt(e, t, n, r, i) {
  (le(e, t, n, r, i, `#c8161c`, 0.66),
    (e.globalAlpha = 1),
    N(e, t, n + i * 0.78, r, i * 0.22, `#ffcc00`),
    U(
      e,
      H(`shim.mkt.sushi.short`),
      t + r * 0.5,
      n + i * 0.4,
      r * 0.8,
      i * 0.58,
      `#ffffff`,
      `900`,
    ),
    U(
      e,
      H(`shim.mkt.sushi.24h`),
      t + r * 0.5,
      n + i * 0.89,
      r * 0.6,
      i * 0.16,
      `#c8161c`,
      `900`,
    ));
}
function it(e, t, n, r, i) {
  (le(e, t, n, r, i, `#c8161c`, 0.62), (e.globalAlpha = 1));
  let a = t + r / 2;
  ((e.strokeStyle = `#ffffff`),
    (e.lineCap = `round`),
    (e.lineWidth = r * 0.11),
    e.beginPath(),
    e.moveTo(a - r * 0.12, n + i * 0.42),
    e.lineTo(a - r * 0.42, n + i * 0.24),
    e.moveTo(a + r * 0.12, n + i * 0.42),
    e.lineTo(a + r * 0.42, n + i * 0.24),
    e.stroke(),
    W(e, a - r * 0.43, n + i * 0.23, r * 0.06, `#f2c8a0`),
    W(e, a + r * 0.43, n + i * 0.23, r * 0.06, `#f2c8a0`),
    N(e, a - r * 0.17, n + i * 0.38, r * 0.34, i * 0.46, `#ffffff`),
    N(e, a - r * 0.17, n + i * 0.84, r * 0.34, i * 0.12, `#1a1a1a`),
    W(e, a, n + i * 0.3, r * 0.13, `#f2c8a0`),
    N(e, a - r * 0.14, n + i * 0.2, r * 0.28, i * 0.04, `#ffffff`),
    (e.strokeStyle = `#5a2a1a`),
    (e.lineWidth = r * 0.02),
    e.beginPath(),
    e.arc(a, n + i * 0.31, r * 0.06, 0.2, Math.PI - 0.2),
    e.stroke(),
    W(e, a - r * 0.045, n + i * 0.28, r * 0.012, `#1a1a1a`),
    W(e, a + r * 0.045, n + i * 0.28, r * 0.012, `#1a1a1a`));
}
function at(e, t, n, r, i) {
  (N(e, t, n, r, i, `#f4ead4`),
    N(e, t, n, r, i * 0.12, `#5a2a0a`),
    U(
      e,
      H(`shim.mkt.horumon`),
      t + r * 0.42,
      n + i * 0.56,
      r * 0.78,
      i * 0.6,
      `#5a2a0a`,
      `900`,
    ),
    N(e, t + r * 0.84, n + i * 0.18, r * 0.13, i * 0.76, `#c8161c`),
    j(
      e,
      H(`shim.mkt.horumon.niko`),
      t + r * 0.905,
      n + i * 0.22,
      n + i * 0.9,
      r * 0.08,
      `#ffffff`,
      _(),
      `900`,
    ));
}
function ot(e, t, n, r, i) {
  (N(e, t, n, r, i, `#2a2c30`),
    U(
      e,
      H(`shim.uogashi.name`),
      t + r * 0.4,
      n + i / 2,
      r * 0.6,
      i * 0.66,
      `#f2f0ea`,
      `700`,
      v(),
    ),
    U(
      e,
      H(`shim.uogashi.wing`),
      t + r * 0.84,
      n + i / 2,
      r * 0.24,
      i * 0.36,
      `#c8c4b8`,
      `600`,
    ));
}
function st(e, t, n, r, i) {
  (N(e, t, n, r, i, `#8a8e90`), N(e, t, n, r, i, `#3a4248`));
  for (let a = 0; a < 24; a++) N(e, t + (r * a) / 24, n, r / 48, i, `#c8ccce`);
  N(e, t, n + i * 0.48, r, i * 0.04, `#d8dcde`);
}
function ct(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.3, `#2a2c30`),
    U(
      e,
      H(`shim.uogashi.shokudo`),
      t + r / 2,
      n + i * 0.15,
      r * 0.86,
      i * 0.2,
      `#ffffff`,
      `800`,
    ),
    U(
      e,
      H(`shim.uogashi.hours`),
      t + r / 2,
      n + i * 0.65,
      r * 0.92,
      i * 0.2,
      `#1a1a1a`,
      `700`,
    ));
}
function lt(e) {
  return (t, n, r, i, a) => {
    (N(t, n, r, i, a, `#7a6a4a`),
      N(t, n + 3, r + 3, i - 6, a - 6, `#4a3e2a`),
      U(
        t,
        H(e),
        n + i / 2,
        r + a / 2,
        i * 0.86,
        a * 0.66,
        `#e8d8a8`,
        `700`,
        v(),
      ));
  };
}
function ut(e) {
  return (t, n, r, i, a) => {
    let [o, s] = e.board,
      c = o === `#ffffff` || o.startsWith(`#f`) ? e.awn[0] : o;
    (N(t, n, r, i, a, c),
      N(t, n, r, i * 0.12, a, `#ffffff`),
      j(
        t,
        H(e.cat),
        n + i * 0.56,
        r + a * 0.06,
        r + a * 0.94,
        i * 0.7,
        c === s || s === o ? `#ffffff` : o === c ? s : `#ffffff`,
        _(),
        `900`,
      ));
  };
}
function dt(e, t, n, r, i) {
  (N(e, t, n, r, i, `#ffffff`),
    N(e, t, n, r, i * 0.16, `#1d5a2a`),
    N(e, t, n + i * 0.84, r, i * 0.16, `#1d5a2a`),
    U(
      e,
      H(`shim.kosho.name`),
      t + r * 0.4,
      n + i * 0.5,
      r * 0.62,
      i * 0.5,
      `#1d5a2a`,
      `900`,
      v(),
    ),
    U(
      e,
      H(`shim.kosho.sub`),
      t + r * 0.84,
      n + i * 0.5,
      r * 0.28,
      i * 0.26,
      `#3a3a3a`,
      `700`,
    ));
}
function ft(e, t, r, a, o) {
  N(e, t, r, a, o, `#8a6a44`);
  let s = new n(i(`shim-books`, 1));
  for (let n = 0; n < 2; n++)
    for (let i = 0; i < 40; i++) {
      let c = [
        `#e8dcc0`,
        `#7a2a1a`,
        `#2a3a5a`,
        `#c8b080`,
        `#3a5a3a`,
        `#f0ece0`,
        `#5a4030`,
      ][Math.floor(s.next() * 7)];
      N(
        e,
        t + (i / 40) * a + 1,
        r + o * (0.04 + n * 0.5),
        a / 40 - 2,
        o * 0.42,
        c,
      );
    }
  (N(e, t + a * 0.4, r + o * 0.38, a * 0.2, o * 0.24, `#ffffff`),
    U(
      e,
      H(`shim.kosho.price`),
      t + a * 0.5,
      r + o * 0.5,
      a * 0.18,
      o * 0.16,
      `#c8161c`,
      `800`,
    ));
}
function pt(e) {
  (e.need(`sl:plate`, 160, 48, ye),
    e.need(`sl:smokebox`, 192, 192, be),
    e.need(`sl:cab`, 256, 160, xe),
    e.need(`sl:tank`, 384, 128, Se),
    e.need(`sl:wheel`, 128, 128, mt),
    e.need(`sl:board`, 320, 200, Ce),
    e.need(`sl:stones`, 384, 64, we),
    e.need(`sl:stoneplaque`, 224, 96, Te),
    e.need(`sl:flowers`, 128, 48, Ee),
    e.need(`tv:flag`, 64, 64, De),
    e.need(`tv:cam`, 96, 32, Oe),
    e.need(`d51:wheel`, 160, 160, ke),
    e.need(`d51:plate`, 256, 48, Ae),
    e.need(`shoka`, 128, 224, je),
    e.need(`kosho:banner`, 384, 64, dt),
    e.need(`kosho:books`, 256, 64, ft));
}
function mt(e, t, n, r, i) {
  ((e.globalAlpha = 1), (e.fillStyle = `#121212`), e.fillRect(t, n, r, i));
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.48;
  ((e.fillStyle = `#e8e8e4`),
    e.beginPath(),
    e.arc(a, o, s, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#161616`),
    e.beginPath(),
    e.arc(a, o, s * 0.9, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#2a2a2c`),
    e.beginPath(),
    e.arc(a, o, s * 0.84, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#141414`),
    (e.lineWidth = r * 0.045));
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2;
    (e.beginPath(),
      e.moveTo(a, o),
      e.lineTo(a + Math.cos(n) * s * 0.84, o + Math.sin(n) * s * 0.84),
      e.stroke());
  }
  ((e.fillStyle = `#101010`),
    e.beginPath(),
    e.arc(a, o, s * 0.82, Math.PI * 0.2, Math.PI * 0.8),
    e.closePath(),
    e.fill(),
    (e.fillStyle = `#1c1c1c`),
    e.beginPath(),
    e.arc(a, o, s * 0.22, 0, Math.PI * 2),
    e.fill());
}
var G = 1776412,
  ht = 11015695,
  gt = 9212052,
  _t = 15526886;
function vt(e, t, n, r, i, a) {
  let o = t.white(),
    s = (t, a, s, c, l, u, d = o) =>
      L(e, n + t, r + a, i + s, n + c, r + l, i + u, d),
    c = a >= 2 ? 16 : a >= 1 ? 12 : 10;
  (e.setMaterial(0.45, 0.3, 0, 0),
    P(e, G),
    s(-0.55, 0.42, -6, 0.55, 1.16, 6),
    s(-1.36, 1.16, -1.62, 1.36, 1.24, 6.02),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, _t));
  for (let t of [-1, 1])
    F(
      e,
      n + t * 1.365,
      i + (t > 0 ? 6.02 : -1.62),
      n + t * 1.365,
      i + (t > 0 ? -1.62 : 6.02),
      r + 1.17,
      r + 1.235,
      o,
    );
  (e.setMaterial(0.5, 0.1, 0, 0),
    P(e, ht),
    s(-1.36, 0.74, 5.94, 1.36, 1.2, 6.2),
    s(-1.36, 0.74, -6.2, 1.36, 1.2, -5.94),
    e.setMaterial(0.4, 0.5, 0, 0),
    P(e, G),
    s(-0.2, 0.82, 6.2, 0.2, 1.06, 6.36),
    s(-0.2, 0.82, -6.36, 0.2, 1.06, -6.2));
  for (let t of [-1, 1])
    (V(e, n + t * 1, r + 0.95, i + 4.62, 0, 1, 1.05, 0.33, o, c, !0),
      s(t * 0.84 - 0.18, 1.24, 4.2, t * 0.84 + 0.18, 1.62, 5));
  let l = t.uv(`sl:wheel`),
    u = (t, a) => {
      for (let s of [-1, 1])
        (e.setMaterial(0.5, 0.35, 0, 0),
          P(e, 16777215),
          V(e, n + s * 0.63, r + a, i + t, 1, 0, 0.13, a, o, c, !0, l));
      (e.setMaterial(0.5, 0.5, 0, 0),
        P(e, 2763306),
        V(e, n, r + a, i + t, 1, 0, 1.12, 0.08, o, 6, !1));
    };
  for (let e of [2.85, 1.25, -0.35]) u(e, 0.76);
  for (let e of [4.75, -3.7, -5.1]) u(e, 0.43);
  (e.setMaterial(0.35, 0.8, 0, 0), P(e, gt));
  for (let t of [-1, 1]) {
    let a = n + t * 0.75;
    (B(e, a, r + 0.98, i - 0.35, a, r + 0.98, i + 2.85, 0.05, o),
      B(
        e,
        a + t * 0.06,
        r + 0.95,
        i + 4.05,
        a + t * 0.06,
        r + 0.6,
        i + 1.25,
        0.045,
        o,
      ),
      B(
        e,
        a + t * 0.06,
        r + 1.02,
        i + 4.1,
        a + t * 0.06,
        r + 1.02,
        i + 3.2,
        0.03,
        o,
      ),
      B(
        e,
        a + t * 0.12,
        r + 1.5,
        i + 2.2,
        a + t * 0.12,
        r + 1.1,
        i + 3.9,
        0.025,
        o,
      ));
  }
  (e.setMaterial(0.25, 0.35, 0, 0),
    P(e, G),
    V(e, n, r + 2.45, i + 1.3, 0, 1, 5.8, 0.78, o, c + 4, !1),
    P(e, 2763307));
  for (let t of [-0.9, 0.8, 2.6])
    V(e, n, r + 2.45, i + t, 0, 1, 0.07, 0.795, o, c + 4, !1);
  (P(e, 16777215),
    V(
      e,
      n,
      r + 2.45,
      i + 4.98,
      0,
      1,
      1.56,
      0.86,
      o,
      c + 4,
      !0,
      t.uv(`sl:smokebox`),
    ),
    P(e, G),
    s(-0.62, 1.2, 4.3, 0.62, 1.95, 5.6),
    z(e, n, i + 5.05, r + 3.2, r + 3.78, 0.27, o, c),
    z(e, n, i + 5.05, r + 3.72, r + 3.86, 0.33, o, c),
    e.setMaterial(0.3, 0.3, 0, 0),
    s(-0.36, 3.05, 2.85, 0.36, 3.55, 3.65),
    s(-0.33, 3.5, 2.9, 0.33, 3.62, 3.6),
    s(-0.4, 3.05, 1.15, 0.4, 3.62, 2.05),
    s(-0.36, 3.6, 1.2, 0.36, 3.7, 2),
    z(e, n, i + 0.35, r + 3.1, r + 3.45, 0.09, o, 6),
    e.setMaterial(0.3, 0.8, 0, 0),
    P(e, 13214270),
    z(e, n + 0.18, i + 0.05, r + 3.1, r + 3.55, 0.05, o, 6),
    e.setMaterial(0.3, 0.3, 0, 0),
    P(e, G),
    s(-0.2, 3.28, 5.62, 0.2, 3.66, 5.98),
    e.setMaterial(0.2, 0, 0.55, 1),
    P(e, 16773836),
    F(e, n - 0.13, i + 5.985, n + 0.13, i + 5.985, r + 3.34, r + 3.6, o),
    e.setMaterial(0.35, 0.3, 0, 0),
    P(e, G));
  for (let e of [-1, 1])
    s(e * 1.27 - 0.02, 1.6, 4.4, e * 1.27 + 0.02, 3.25, 5.9);
  let d = t.uv(`sl:tank`),
    f = t.uv(`sl:cab`);
  e.setMaterial(0.25, 0.3, 0, 0);
  for (let t of [-1, 1])
    (P(e, G),
      s(t > 0 ? 0.8 : -1.34, 1.24, -1.5, t > 0 ? 1.34 : -0.8, 2.72, 3.55),
      P(e, 16777215),
      t > 0
        ? F(e, n + 1.345, i + 3.55, n + 1.345, i - 1.5, r + 1.26, r + 2.7, d)
        : F(e, n - 1.345, i - 1.5, n - 1.345, i + 3.55, r + 1.26, r + 2.7, d));
  (P(e, G),
    s(-1.38, 1.24, -4.05, 1.38, 3.55, -1.5),
    P(e, 16777215),
    F(e, n + 1.385, i - 1.5, n + 1.385, i - 4.05, r + 1.26, r + 3.5, f),
    F(e, n - 1.385, i - 4.05, n - 1.385, i - 1.5, r + 1.26, r + 3.5, f),
    P(e, 1315860),
    s(-1.5, 3.55, -4.22, 1.5, 3.66, -1.33),
    s(-1.1, 3.66, -4.22, 1.1, 3.76, -1.33),
    P(e, G),
    s(-1.3, 1.24, -6, 1.3, 3.05, -4.05),
    P(e, 2500136),
    s(-1.12, 3.05, -5.85, 1.12, 3.2, -4.2),
    P(e, 2765368));
  for (let t of [-1, 1])
    F(
      e,
      n + t * 0.95 - 0.22,
      i - 1.495,
      n + t * 0.95 + 0.22,
      i - 1.495,
      r + 2.95,
      r + 3.3,
      o,
    );
  if ((e.setMaterial(0.35, 0.8, 0, 0), P(e, gt), a >= 1))
    for (let t of [-1, 1])
      B(
        e,
        n + t * 0.84,
        r + 2.95,
        i - 1.4,
        n + t * 0.84,
        r + 2.95,
        i + 4.2,
        0.02,
        o,
      );
}
function yt(e, t, n, r) {
  let i = t.white(),
    { x0: a, z0: o, x1: s, z1: c } = m,
    l = t.uv(`sl:stones`);
  (e.setMaterial(0.95, 0, 0, 0), P(e, 16777215));
  let d = n + y - 0.12,
    f = (t, r, i, a) => {
      let o = Math.hypot(i - t, a - r),
        s = Math.max(1, Math.round(o / 4));
      for (let o = 0; o < s; o++) {
        let c = o / s,
          u = (o + 1) / s;
        F(
          e,
          t + (i - t) * c,
          r + (a - r) * c,
          t + (i - t) * u,
          r + (a - r) * u,
          n,
          d,
          l,
        );
      }
    };
  (f(a, c, s, c),
    f(s, o, a, o),
    f(s, c, s, o),
    f(a, o, a, c),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, 12171442),
    L(e, a - 0.08, d, o - 0.08, s + 0.08, n + y, c + 0.08, i),
    P(e, 16777215),
    F(
      e,
      a - 0.02,
      (o + c) / 2 - 1.1,
      a - 0.02,
      (o + c) / 2 + 1.1,
      n + 0.12,
      n + 0.62,
      t.uv(`sl:stoneplaque`),
    ));
  let p = t.uv(`sl:flowers`);
  for (let t = o + 0.8; t < c - 0.8; t += 2.3)
    for (let r of [a + 0.25, s - 0.25])
      (e.setMaterial(0.85, 0, 0, 0),
        P(e, 16777215),
        R(e, r, t + 0.45, n + y, n + y + 0.3, 0.17, 0.45, 0, 1, p, p, p));
  let h = u.x,
    g = n + y;
  (e.setMaterial(0.95, 0, 0, 0),
    P(e, 6973024),
    L(e, h - 1.35, g, o + 0.6, h + 1.35, g + 0.12, c - 0.6, i),
    P(e, 4864556));
  for (let t = o + 0.9; t < c - 0.7; t += 0.62)
    L(e, h - 1.05, g + 0.12, t, h + 1.05, g + 0.2, t + 0.22, i);
  (e.setMaterial(0.4, 0.7, 0, 0), P(e, 8025196));
  for (let t of [-1, 1])
    L(
      e,
      h + t * 0.533 - 0.035,
      g + 0.2,
      o + 0.7,
      h + t * 0.533 + 0.035,
      g + 0.34,
      c - 0.7,
      i,
    );
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 1974049));
  let _ = a + 0.42,
    v = s - 0.42,
    b = o + 0.42,
    x = c - 0.42,
    S = n + y,
    C = [
      [_, b],
      [v, b],
      [v, x],
      [_, x],
      [_, b],
    ];
  for (let t = 0; t + 1 < C.length; t++) {
    let [n, a] = C[t],
      [o, s] = C[t + 1];
    for (let t of [0.5, 0.92]) B(e, n, S + t, a, o, S + t, s, 0.018, i);
    let c = Math.hypot(o - n, s - a),
      l = Math.max(1, Math.round(c / (r >= 1 ? 1.4 : 2.8)));
    for (let t = 0; t < l; t++) {
      let r = t / l;
      z(e, n + (o - n) * r, a + (s - a) * r, S, S + 0.95, 0.025, i, 4);
    }
  }
}
function bt(e, t, n, r) {
  let i = t.white(),
    a = m.x0 - x,
    o = m.x1 + x,
    s = m.z0 - x,
    c = m.z1 + x;
  (e.setMaterial(0.95, 0, 0, 0),
    P(e, 13615776),
    I(e, a, s, m.x0, c, n + 0.025, i),
    I(e, m.x1, s, o, c, n + 0.025, i),
    I(e, m.x0, s, m.x1, m.z0, n + 0.025, i),
    I(e, m.x0, m.z1, m.x1, c, n + 0.025, i),
    e.setMaterial(0.5, 0.5, 0, 0),
    P(e, 1842206));
  let l = [
      [a + 0.1, s + 0.1],
      [o - 0.1, s + 0.1],
      [o - 0.1, c - 0.1],
      [a + 0.1, c - 0.1],
      [a + 0.1, s + 0.1],
    ],
    u = null;
  for (let t = 0; t + 1 < l.length; t++) {
    let [a, o] = l[t],
      [s, c] = l[t + 1],
      d = Math.hypot(s - a, c - o),
      f = Math.max(1, Math.round(d / 1.9));
    for (let t = 0; t < f; t++) {
      let l = t / f,
        d = a + (s - a) * l,
        p = o + (c - o) * l;
      if (
        (z(e, d, p, n, n + 0.62, 0.065, i, 8),
        L(e, d - 0.07, n + 0.62, p - 0.07, d + 0.07, n + 0.68, p + 0.07, i),
        u && r >= 1)
      ) {
        let t = (u[0] + d) / 2,
          r = (u[1] + p) / 2;
        (B(e, u[0], n + 0.56, u[1], t, n + 0.44, r, 0.012, i),
          B(e, t, n + 0.44, r, d, n + 0.56, p, 0.012, i));
      }
      u = [d, p];
    }
  }
  let d = m.x1 + 0.5,
    f = m.z1 + 0.55;
  (e.setMaterial(0.5, 0.2, 0, 0),
    P(e, 15790058),
    z(e, d, f, n, n + 3.6, 0.075, i, 8),
    e.setMaterial(0.3, 0, 0.7, 1),
    P(e, 16774360),
    L(e, d - 0.16, n + 3.6, f - 0.16, d + 0.16, n + 3.95, f + 0.16, i),
    e.setMaterial(0.5, 0.2, 0, 0),
    P(e, 15790058),
    L(e, d - 0.2, n + 3.95, f - 0.2, d + 0.2, n + 4.02, f + 0.2, i));
  let p = m.x0 - x - 0.6,
    h = m.z1 - 2.6;
  (e.setMaterial(0.6, 0.4, 0, 0), P(e, 2244654));
  for (let t of [-0.62, 0.62]) z(e, p, h + t, n, n + 1.75, 0.04, i, 6);
  (e.setMaterial(0.7, 0, 0, 0),
    P(e, 16777215),
    R(
      e,
      p,
      h,
      n + 0.9,
      n + 1.78,
      0.75,
      0.04,
      -1,
      0,
      i,
      t.uv(`sl:board`),
      t.uv(`sl:board`),
    ));
  let { x: g, z: _ } = ne;
  (e.setMaterial(0.6, 0, 0, 0),
    P(e, 9407364),
    L(e, g - 0.42, n, _ - 0.42, g + 0.42, n + 0.85, _ + 0.42, i),
    e.setMaterial(0.4, 0.8, 0, 0),
    P(e, 6968626));
  let v = n + 0.85,
    y = g,
    b = _ - 0.12;
  for (let [t, n, r] of [
    [0, 0.8, 0.2],
    [0.8, 1.25, 0.15],
    [1.25, 1.36, 0.06],
  ])
    z(e, y, b, v + t, v + n, r, i, 8);
  z(e, y, b, v + 1.36, v + 1.58, 0.1, i, 8);
  let S = g + 0.05,
    C = _ + 0.24;
  (z(e, S, C, v, v + 0.5, 0.1, i, 8),
    z(e, S, C, v + 0.5, v + 0.66, 0.07, i, 8),
    B(e, y + 0.05, v + 1.12, b + 0.12, S, v + 0.5, C - 0.05, 0.035, i));
}
function xt(e, t, n) {
  let r = t.white(),
    i = A.camera,
    a = A.subject,
    o = a.x - i.x,
    s = a.z - i.z,
    c = Math.hypot(o, s),
    l = o / c,
    u = s / c;
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 2763566));
  for (let t = 0; t < 3; t++) {
    let a = (t / 3) * Math.PI * 2;
    B(
      e,
      i.x,
      n + 1.25,
      i.z,
      i.x + Math.cos(a) * 0.45,
      n,
      i.z + Math.sin(a) * 0.45,
      0.018,
      r,
    );
  }
  (e.setMaterial(0.45, 0.3, 0, 0),
    P(e, 16777215),
    R(e, i.x, i.z, n + 1.28, n + 1.56, 0.11, 0.26, l, u, t.uv(`tv:cam`), r, r),
    P(e, 1710618),
    R(e, i.x + l * 0.36, i.z + u * 0.36, n + 1.33, n + 1.5, 0.07, 0.1, l, u, r),
    R(
      e,
      i.x - l * 0.05 + u * 0.12,
      i.z - u * 0.05 - l * 0.12,
      n + 1.56,
      n + 1.64,
      0.04,
      0.08,
      l,
      u,
      r,
    ));
  let d = A.light,
    f = a.x - d.x,
    p = a.z - d.z,
    m = Math.hypot(f, p),
    h = f / m,
    g = p / m;
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 2763566));
  for (let t = 0; t < 3; t++) {
    let i = (t / 3) * Math.PI * 2 + 0.5;
    B(
      e,
      d.x,
      n + 0.6,
      d.z,
      d.x + Math.cos(i) * 0.4,
      n,
      d.z + Math.sin(i) * 0.4,
      0.015,
      r,
    );
  }
  (z(e, d.x, d.z, n + 0.6, n + 2, 0.018, r, 4),
    P(e, 1710618),
    R(e, d.x, d.z, n + 1.85, n + 2.3, 0.3, 0.05, h, g, r),
    e.setMaterial(0.2, 0, 1, 0),
    P(e, 16774888),
    R(
      e,
      d.x + h * 0.055,
      d.z + g * 0.055,
      n + 1.88,
      n + 2.27,
      0.27,
      0.005,
      h,
      g,
      r,
    ),
    e.setMaterial(0.35, 0.7, 0, 0),
    P(e, 12106944),
    R(e, i.x + 0.9, i.z + 0.4, n, n + 0.32, 0.32, 0.22, l, u, r),
    e.setMaterial(0.6, 0, 0, 0),
    P(e, 1052688),
    B(e, i.x, n + 0.02, i.z, d.x, n + 0.02, d.z, 0.012, r),
    P(e, 16777215),
    R(
      e,
      i.x + 0.9,
      i.z + 0.4,
      n + 0.32,
      n + 0.42,
      0.05,
      0.05,
      l,
      u,
      t.uv(`tv:flag`),
      t.uv(`tv:flag`),
      t.uv(`tv:flag`),
    ));
}
function St(e, t, n) {
  let r = t.white(),
    i = n.plan.groundHeight(E.x, E.z),
    { x: a, z: o } = E;
  (e.setMaterial(0.55, 0, 0, 0),
    P(e, 9276036),
    L(e, a - 1.2, i, o - 1.3, a + 1, i + 0.42, o + 1.3, r),
    P(e, 12614216),
    L(e, a - 1.55, i, o - 1.9, a - 1.35, i + 2.8, o + 1.9, r),
    e.setMaterial(0.4, 0.6, 0, 0),
    P(e, 5921370));
  for (let t of [-1, 1])
    L(
      e,
      a - 1,
      i + 0.42,
      o + t * 0.6 - 0.05,
      a + 0.9,
      i + 0.52,
      o + t * 0.6 + 0.05,
      r,
    );
  let s = t.uv(`d51:wheel`);
  (e.setMaterial(0.45, 0.4, 0, 0),
    P(e, 16777215),
    V(e, a - 0.55, i + 0.52 + 0.7, o, 1, 0, 0.16, 0.7, r, 18, !0, s),
    V(e, a + 0.45, i + 0.52 + 0.7, o, 1, 0, 0.16, 0.7, r, 18, !0, s),
    e.setMaterial(0.4, 0.7, 0, 0),
    P(e, 13159632),
    V(e, a - 0.05, i + 0.52 + 0.7, o, 1, 0, 1.4, 0.1, r, 8, !0),
    P(e, 16777215),
    F(
      e,
      a + 1.005,
      o + 0.9,
      a + 1.005,
      o - 0.9,
      i + 0.08,
      i + 0.36,
      t.uv(`d51:plate`),
    ));
  let c = D,
    l = n.plan.groundHeight(c.x, c.z);
  (e.setMaterial(0.5, 0, 0, 0),
    P(e, 7236710),
    L(e, c.x - 0.35, l, c.z - 0.65, c.x + 0.35, l + 0.3, c.z + 0.65, r),
    P(e, 16777215),
    R(e, c.x, c.z, l + 0.3, l + 1.95, 0.48, 0.14, 1, 0, r, t.uv(`shoka`)));
}
function Ct(e, t, n) {
  let r = t.white(),
    i = t.uv(`kosho:books`),
    { x0: a, x1: o, z0: s, z1: c } = k,
    l = Math.floor((c - s) / 3.4);
  for (let t = 0; t < l; t++) {
    let c = s + t * 3.4 + 0.2,
      l = c + 3;
    (e.setMaterial(0.6, 0.4, 0, 0), P(e, 13159632));
    for (let [t, i] of [
      [a, c],
      [o, c],
      [o, l],
      [a, l],
    ])
      z(e, t, i, n, n + 2.3, 0.025, r, 4);
    (e.setMaterial(0.9, 0, 0, 0),
      P(e, 16053490),
      L(e, a - 0.1, n + 2.3, c - 0.1, o + 0.1, n + 2.42, l + 0.1, r),
      e.setMaterial(0.8, 0, 0, 0),
      P(e, 8022608),
      L(e, o - 1, n, c + 0.2, o - 0.1, n + 0.7, l - 0.2, r),
      P(e, 16777215),
      e.quad(
        o - 1,
        n + 0.86,
        c + 0.2,
        o - 1,
        n + 0.86,
        l - 0.2,
        o - 0.1,
        n + 0.72,
        l - 0.2,
        o - 0.1,
        n + 0.72,
        c + 0.2,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      P(e, 6969920),
      L(e, a + 0.2, n, c + 0.2, a + 1, n + 1.3, l - 0.2, r));
  }
  (e.setMaterial(0.8, 0, 0, 0),
    P(e, 16777215),
    F(
      e,
      o + 0.12,
      s + 6.2,
      o + 0.12,
      s + 0.6,
      n + 2.45,
      n + 3.2,
      t.uv(`kosho:banner`),
    ));
}
function wt(e, t, n, r) {
  let i = n.plan.groundHeight(u.x, u.z);
  (vt(e.begin(), t, u.x, i + y + 0.34, u.z, r),
    e.end(`c11`, u.x, u.z, 520),
    yt(e.begin(), t, i, r),
    e.end(`sl-plinth`, u.x, u.z, 420),
    bt(e.begin(), t, i, r),
    e.end(`sl-surrounds`, u.x, u.z, 220),
    xt(e.begin(), t, n.plan.groundHeight(A.camera.x, A.camera.z)),
    e.end(`tv-crew`, A.camera.x, A.camera.z, 160, `crew`),
    Ct(e.begin(), t, n.plan.groundHeight((k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2)),
    e.end(`kosho`, (k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2, 180, `kosho`),
    St(e.begin(), t, n),
    e.end(`shiodome-guchi`, E.x, E.z, 200),
    e.box(m.x0, m.z0, m.x1, m.z1, i, i + y + 4.3),
    e.circles.push({
      x: m.x1 + 0.5,
      z: m.z1 + 0.55,
      r: 0.12,
      y0: i,
      y1: i + 4,
    }),
    e.circles.push({ x: ne.x, z: ne.z, r: 0.6, y0: i, y1: i + 2.6 }),
    e.box(m.x0 - x - 0.7, m.z1 - 3.4, m.x0 - x - 0.5, m.z1 - 1.8, i, i + 1.8),
    e.box(E.x - 1.2, E.z - 1.3, E.x + 1, E.z + 1.3, i, i + 2),
    e.box(D.x - 0.35, D.z - 0.65, D.x + 0.35, D.z + 0.65, i, i + 2));
}
var Tt = [`yakitori`, `sake`, `yakiton`, `oden`];
function Et(e) {
  for (let t = 0; t < 13; t++)
    (e.need(`gado:board:${t}`, 320, 56, ze(t)),
      e.need(`gado:front:${t}`, 320, 128, Be(t)),
      e.need(`gado:shutter:${t}`, 128, 96, Ve(t)));
  e.need(`gado:aboard`, 96, 144, He);
  for (let t of Tt)
    e.need(`lantern:${t}`, 64, 96, Ue(`shim.gado.lantern.${t}`));
}
function Dt(e, t, n, r, i, a, o = 0.2, s = 0.52) {
  (e.setMaterial(0.7, 0, 0.55, 3), P(e, 16777215));
  for (let a = 0; a < 8; a++) {
    let c = (a / 8) * Math.PI * 2,
      l = ((a + 1) / 8) * Math.PI * 2,
      u = (a % 4) / 4,
      d = ((a % 4) + 1) / 4,
      f = i.u1 - i.u0;
    e.quad(
      t + Math.cos(l) * o,
      n,
      r + Math.sin(l) * o,
      t + Math.cos(c) * o,
      n,
      r + Math.sin(c) * o,
      t + Math.cos(c) * o,
      n + s,
      r + Math.sin(c) * o,
      t + Math.cos(l) * o,
      n + s,
      r + Math.sin(l) * o,
      i.u0 + f * (1 - d),
      i.v0,
      i.u0 + f * (1 - u),
      i.v1,
    );
  }
  (e.setMaterial(0.6, 0, 0, 0),
    P(e, 1315860),
    L(
      e,
      t - o * 0.75,
      n - 0.05,
      r - o * 0.75,
      t + o * 0.75,
      n + 0.02,
      r + o * 0.75,
      a,
    ),
    L(
      e,
      t - o * 0.75,
      n + s - 0.02,
      r - o * 0.75,
      t + o * 0.75,
      n + s + 0.05,
      r + o * 0.75,
      a,
    ));
}
var K = { x: 0, z: 0 };
function Ot(e, t, n, r) {
  let i = h(n.plan)?.byId.get(`jr-main`) ?? null;
  if (!i) return 0;
  let a = t.white(),
    o = n.plan,
    s = 0;
  for (let n = 0; n < ie.length; n++) {
    let [c, l] = ie[n];
    if (!i.brick.some(([e, t]) => c >= e && c + 8 <= t)) continue;
    let u = n % 13,
      d = c + 1.6,
      f = c + 8,
      p = (e) => (l < 0 ? i.edge0.at(e) : i.edge1.at(e)),
      m = (e, t) => (i.path.pos(e, p(e) - l * C + l * t, K), [K.x, K.z]),
      h = (e, t, n, r, i, a, o) => {
        let [s, c] = m(l < 0 ? n : t, r),
          [u, d] = m(l < 0 ? t : n, r);
        F(e, s, c, u, d, i, a, o);
      },
      g = (d + f) / 2,
      [_, v] = m(g, 0),
      y = o.groundHeight(_, v);
    i.path.pos(g, p(g) + l, K);
    let b = K.x - m(g, C)[0],
      x = K.z - m(g, C)[1],
      S = Math.hypot(b, x) || 1,
      w = b / S,
      T = x / S,
      E = e.begin();
    (E.setMaterial(0.6, 0, 0, 0),
      P(E, 1709072),
      h(E, d + 0.2, f - 0.2, 0.1, y + 2.4, y + 3.04, a),
      E.setMaterial(0.6, 0, 0.32, 3),
      P(E, 16777215),
      h(E, d + 0.25, f - 0.25, 0.2, y + 2.44, y + 3, t.uv(`gado:board:${u}`)));
    for (let e of [d + 0.55, f - 0.55]) {
      let [n, r] = m(e, C + 0.3);
      Dt(
        E,
        n,
        y + 2.32,
        r,
        t.uv(`lantern:${Tt[(u + +(e > g)) % Tt.length]}`),
        a,
      );
    }
    if (
      (e.end(`gado-${c}${l < 0 ? `w` : `e`}`, _, v, 220),
      (E = e.begin()),
      E.setMaterial(0.35, 0.1, 0.42, 3),
      P(E, 16777215),
      h(E, d, f, 0.04, y, y + 2.4, t.uv(`gado:front:${u}`)),
      u % 3 != 2)
    ) {
      let [e, t] = m(d + 0.15, 0.05),
        [n, r] = m(d + 1.35, 0.6);
      (E.setMaterial(0.4, 0.7, 0, 0),
        P(E, 10133154),
        L(
          E,
          Math.min(e, n),
          y,
          Math.min(t, r),
          Math.max(e, n),
          y + 0.92,
          Math.max(t, r),
          a,
        ),
        E.setMaterial(0.9, 0, 0.9, 0),
        P(E, 16734746),
        L(
          E,
          Math.min(e, n) + 0.06,
          y + 0.92,
          Math.min(t, r) + 0.06,
          Math.max(e, n) - 0.06,
          y + 0.97,
          Math.max(t, r) - 0.06,
          a,
        ),
        E.setMaterial(0.4, 0.7, 0, 0),
        P(E, 6975090),
        L(
          E,
          Math.min(e, n),
          y + 1.85,
          Math.min(t, r),
          Math.max(e, n),
          y + 2.05,
          Math.max(t, r),
          a,
        ));
    }
    let [ee, D] = m(g + 0.6, C + 1.15),
      O = o.surfaceAt(ee, D);
    if (O !== `road` && O !== `crosswalk` && O !== `water`) {
      for (let e of r >= 1 ? [-1.5, 1.5] : [0]) {
        let [t, r] = m(g + e, C + 1.15);
        (E.setMaterial(0.7, 0, 0, 0),
          P(E, (n + e) % 2 ? 14197783 : 2775728),
          L(E, t - 0.24, y, r - 0.18, t + 0.24, y + 0.33, r + 0.18, a),
          L(E, t - 0.24, y + 0.33, r - 0.18, t + 0.24, y + 0.66, r + 0.18, a),
          P(E, 12094040),
          L(E, t - 0.48, y + 0.66, r - 0.34, t + 0.48, y + 0.69, r + 0.34, a),
          P(E, 13112860));
        for (let e of [-1, 1]) {
          let n = t + T * e * 0.75 + w * 0.55,
            i = r - w * e * 0.75 + T * 0.55;
          L(E, n - 0.18, y, i - 0.14, n + 0.18, y + 0.34, i + 0.14, a);
        }
      }
      if (u % 2 == 0) {
        let [e, n] = m(d - 0.6, C + 0.5),
          r = t.uv(`gado:aboard`);
        (E.setMaterial(0.7, 0, 0.08, 1), P(E, 16777215));
        let i = T * 0.3,
          a = -w * 0.3;
        E.quad(
          e - i + w * 0.18,
          y,
          n - a + T * 0.18,
          e + i + w * 0.18,
          y,
          n + a + T * 0.18,
          e + i + w * 0.02,
          y + 1,
          n + a + T * 0.02,
          e - i + w * 0.02,
          y + 1,
          n - a + T * 0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        );
      }
    }
    (e.end(`gado-${c}${l < 0 ? `w` : `e`}-open`, _, v, 160, `gadoOpen`),
      (E = e.begin()),
      E.setMaterial(0.6, 0.3, 0, 0),
      P(E, 16777215),
      h(E, d, f, 0.04, y, y + 2.4, t.uv(`gado:shutter:${u}`)),
      e.end(`gado-${c}${l < 0 ? `w` : `e`}-shut`, _, v, 160, `gadoClosed`),
      s++);
  }
  return s;
}
function kt(e) {
  let t = h(e.plan)?.byId.get(`jr-main`) ?? null;
  if (!t) return [];
  let n = [];
  for (let [r, i] of ie) {
    let a = r + 1.6 + 6.4 / 2 + 0.6,
      o = i < 0 ? t.edge0.at(a) : t.edge1.at(a);
    t.path.pos(a, o + i * 1.6, K);
    let s = K.x,
      c = K.z;
    t.path.pos(a, o, K);
    let l = s - K.x,
      u = c - K.z,
      d = Math.hypot(l, u) || 1,
      f = e.plan.surfaceAt(s, c);
    f !== `road` &&
      f !== `crosswalk` &&
      n.push({ x: s, z: c, fx: l / d, fz: u / d });
  }
  return n;
}
var q = 3.3,
  At = 2.9,
  jt = 0.6,
  Mt = 10,
  Nt = (e) => q + (e - 1) * At + jt;
function Pt(e, t) {
  for (let n = 0; n < 8; n++) {
    let r = e.weighted(We.map((e) => [e, e.weight])),
      i = r.names[Math.floor(e.next() * r.names.length)];
    if (!(t.includes(i) && n < 7))
      return (t.push(i), t.length > 9 && t.shift(), { trade: r, name: i });
  }
  let n = We[0];
  return { trade: n, name: n.names[0] };
}
function J(e, t, n, r, i, a, o, s, c = {}) {
  let l = [],
    u = [],
    d = n;
  for (let [e, t] of (c.gaps ?? []).slice().sort((e, t) => e[0] - t[0]))
    (e > d && u.push([d, e]), (d = Math.max(d, t)));
  r > d && u.push([d, r]);
  let [f, p] = c.floors ?? [1, 3];
  for (let [e, n] of u) {
    let r = e;
    for (; r < n - 0.5;) {
      let u = o.range(3.8, 7.2);
      n - (r + u) < 3.2 && (u = n - r);
      let d = Pt(o, s),
        m = Math.max(
          f,
          Math.min(
            p,
            o.weighted([
              [1, 0.22],
              [2, 0.5],
              [3, 0.22],
              [4, 0.04],
              [5, 0.02],
            ]),
          ),
        ),
        h = t === `W` ? [i, i + a] : t === `E` ? [i - a, i] : null,
        g = t === `N` ? [i, i + a] : t === `S` ? [i - a, i] : null,
        _ = {
          x0: h ? h[0] : r,
          x1: h ? h[1] : r + u,
          z0: g ? g[0] : r,
          z1: g ? g[1] : r + u,
          face: t,
          trade: d.trade,
          name: d.name,
          floors: m,
          h: Nt(m),
          fac: Math.floor(o.next() * Mt),
          striped: o.next() < 0.45,
          shut: Math.floor(o.next() * 3),
          lane: !!c.lane,
          vacant: o.next() < 0.07,
          endMin: r === e,
          endMax: !1,
        };
      (l.push(_), (r += u));
    }
    l.length && (l[l.length - 1].endMax = !0);
  }
  return { id: e, units: l };
}
function Ft() {
  let e = [],
    t = g;
  {
    let r = t.west,
      a = t.monzeki,
      o = new n(i(`shim-mkt`, `west`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      J(`w-harumi`, `N`, r.x0 + 9.8, r.x1, r.z0, c, o, s, {
        floors: [3, 6],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(
          `w-shinohashi`,
          `W`,
          r.z0 + c,
          r.z1 - l,
          r.x0,
          a.x0 - r.x0 - 8,
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        J(`w-monzeki-w`, `E`, r.z0 + c, r.z1 - l, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`w-monzeki-e`, `W`, r.z0 + c, r.z1 - l, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`w-naka`, `E`, r.z0 + c, r.z1 - l, r.x1, r.x1 - (a.x1 + 10), o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        J(`w-namiyoke`, `S`, r.x0, r.x1, r.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let r = t.east,
      a = t.higashi,
      o = new n(i(`shim-mkt`, `east`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      J(`e-harumi`, `N`, r.x0, r.x1, r.z0, c, o, s, {
        floors: [3, 5],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(`e-naka`, `W`, r.z0 + c, r.z1 - l, r.x0, a.x0 - r.x0 - 11.5, o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        J(`e-higashi-w`, `E`, r.z0 + c, r.z1 - l, a.x0, 11.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`e-higashi-e`, `W`, r.z0 + c, r.z1 - l, a.x1, 12.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(
          `e-shijo`,
          `E`,
          r.z0 + c,
          r.z1 - l,
          r.x1,
          r.x1 - (a.x1 + 12.5),
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        J(`e-namiyoke`, `S`, r.x0, r.x1, r.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let r = t.south,
      a = t.monzeki,
      o = new n(i(`shim-mkt`, `south`)),
      s = [];
    (e.push(
      J(`s-namiyoke`, `N`, r.x0, r.x1 - 10, r.z0, 8, o, s, {
        floors: [1, 3],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(`s-shinohashi`, `W`, r.z0 + 8, r.z1, r.x0, a.x0 - r.x0 - 8, o, s, {
          floors: [2, 3],
        }),
      ),
      e.push(
        J(`s-monzeki-w`, `E`, r.z0 + 8, r.z1, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`s-monzeki-e`, `W`, r.z0 + 8, r.z1, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ));
    let c = J(`s-naka`, `E`, r.z0, r.z1, r.x1, r.x1 - (a.x1 + 10), o, s, {
      floors: [1, 3],
    });
    e.push(c);
    let l = c.units[0];
    ((l.trade = Ge(`don`)),
      (l.name = `shim.mkt.horumon`),
      (l.special = `horumon`),
      (l.vacant = !1),
      (l.floors = 2),
      (l.h = Nt(2)));
  }
  {
    let r = t.strip,
      a = new n(i(`shim-mkt`, `strip`));
    e.push(
      J(`strip-naka`, `W`, r.z0, r.z1, r.x0, r.x1 - r.x0, a, [], {
        floors: [1, 3],
      }),
    );
  }
  let r = e[0],
    a = r.units;
  (a.length > 2 && a[0].x1 - a[0].x0 < 8 && (a[0].x1 = a.splice(1, 1)[0].x1),
    a.length > 2 &&
      a[a.length - 1].x1 - a[a.length - 1].x0 < 8 &&
      (a[a.length - 1].x0 = a.splice(a.length - 2, 1)[0].x0),
    (a[a.length - 1].endMax = !0));
  let o = r.units[r.units.length - 1];
  ((o.trade = Ge(`sushi`)),
    (o.name = `shim.mkt.sushi`),
    (o.special = `sushi`),
    (o.vacant = !1),
    (o.floors = Math.max(o.floors, 4)),
    (o.h = Nt(o.floors)));
  let s = r.units[0];
  return ((s.special = `gate`), (s.vacant = !1), e);
}
function It(e, t) {
  let n = new Set();
  for (let r of t)
    for (let t of r.units) {
      if (t.special === `sushi` || t.special === `horumon`) continue;
      let r = `mkt:board:${t.name}`;
      n.has(r) ||
        (n.add(r),
        e.need(r, 320, 64, Ke(t.trade, t.name)),
        e.need(`mkt:val:${t.name}`, 256, 32, Je(t.trade, t.name)));
    }
  for (let t of We)
    (e.need(`mkt:goods:${t.id}`, 256, 128, Ye(t.id)),
      e.need(`mkt:int:${t.id}`, 256, 144, Xe(t)),
      e.need(`mkt:awn:${t.id}:s`, 64, 64, qe(t.awn[0], t.awn[1], !0)),
      e.need(`mkt:awn:${t.id}:p`, 32, 32, qe(t.awn[0], t.awn[1], !1)),
      e.need(`mkt:nobori:${t.id}`, 48, 160, ut(t)));
  for (let t = 0; t < Mt; t++) e.need(`mkt:fac:${t}`, 224, 160, Ze(t));
  for (let t = 0; t < 3; t++) e.need(`mkt:shut:${t}`, 160, 128, Qe(t));
  (e.need(`mkt:sign`, 512, 128, $e),
    e.need(`mkt:flag`, 64, 192, et),
    e.need(`mkt:manners`, 96, 128, tt),
    e.need(`mkt:cal`, 128, 96, nt),
    e.need(`sushi:board`, 512, 112, rt),
    e.need(`sushi:man`, 128, 192, it),
    e.need(`horumon:board`, 320, 72, at),
    e.need(`uogashi:sign`, 512, 80, ot),
    e.need(`uogashi:fac`, 256, 192, st),
    e.need(`uogashi:note`, 192, 96, ct));
}
function Lt(e) {
  switch (e.face) {
    case `W`:
      return {
        lx: e.x0,
        lz: e.z0,
        rx: e.x0,
        rz: e.z1,
        nx: -1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `E`:
      return {
        lx: e.x1,
        lz: e.z1,
        rx: e.x1,
        rz: e.z0,
        nx: 1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `N`:
      return {
        lx: e.x1,
        lz: e.z0,
        rx: e.x0,
        rz: e.z0,
        nx: 0,
        nz: -1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
    default:
      return {
        lx: e.x0,
        lz: e.z1,
        rx: e.x1,
        rz: e.z1,
        nx: 0,
        nz: 1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
  }
}
var Y = (e, t, n) => [
  e.lx + (e.rx - e.lx) * t + e.nx * n,
  e.lz + (e.rz - e.lz) * t + e.nz * n,
];
function X(e, t, n, r, i, a, o, s) {
  let [c, l] = Y(t, n, i),
    [u, d] = Y(t, r, i);
  F(e, c, l, u, d, a, o, s);
}
function Z(e, t, n, r, i, a, o, s, c, l = !1) {
  let [u, d] = Y(t, n, i),
    [f, p] = Y(t, r, i),
    [m, h] = Y(t, r, o),
    [g, _] = Y(t, n, o);
  l
    ? e.quad(u, a, d, f, a, p, m, s, h, g, s, _, c.u0, c.v0, c.u1, c.v1)
    : e.quad(g, s, _, m, s, h, f, a, p, u, a, d, c.u0, c.v0, c.u1, c.v1);
}
var Rt = [
  14209732, 13222578, 12171440, 14077368, 11052186, 13617340, 14736591,
  11576976, 10133664, 11050122,
];
function zt(e, t, n, r) {
  let i = t.white(),
    a = Lt(n),
    o = r + n.h,
    s = Rt[n.fac % Rt.length];
  (e.setMaterial(0.9, 0, 0, 0),
    P(e, 9078656),
    I(e, n.x0, n.z0, n.x1, n.z1, o, i),
    P(e, s, 0.82));
  let [c, l] = Y(a, 0, -a.depth),
    [u, d] = Y(a, 1, -a.depth);
  F(e, u, d, c, l, r, o, i);
  let [f, p] = Y(a, 0, 0),
    [m, h] = Y(a, 1, 0);
  (F(e, c, l, f, p, r, o, i), F(e, m, h, u, d, r, o, i));
  let g = n.face === `W` || n.face === `S`,
    _ = [
      [g ? n.endMin : n.endMax, c, l, f, p],
      [g ? n.endMax : n.endMin, m, h, u, d],
    ],
    v = t.uv(`mkt:fac:${(n.fac + 3) % Mt}`);
  for (let [i, a, o, c, l] of _) {
    if (!i) continue;
    let u = -(l - o),
      d = c - a,
      f = Math.hypot(u, d) || 1,
      p = (u / f) * 0.03,
      m = (d / f) * 0.03,
      h = Math.hypot(c - a, l - o),
      g = Math.max(1, Math.round(h / 6));
    P(e, 16777215);
    for (let t = 1; t < n.floors; t++) {
      let n = r + q + (t - 1) * At;
      for (let t = 0; t < g; t++)
        F(
          e,
          a + ((c - a) * t) / g + p,
          o + ((l - o) * t) / g + m,
          a + ((c - a) * (t + 1)) / g + p,
          o + ((l - o) * (t + 1)) / g + m,
          n,
          n + At,
          v,
        );
    }
    if (n.special !== `sushi` && n.special !== `horumon` && h > 4) {
      let i = 0.08,
        s = Math.min(0.92, i + 5 / h);
      (e.setMaterial(0.6, 0, 0, 0),
        F(
          e,
          a + (c - a) * i + p * 3,
          o + (l - o) * i + m * 3,
          a + (c - a) * s + p * 3,
          o + (l - o) * s + m * 3,
          r + 2.66,
          r + 3.24,
          t.uv(`mkt:board:${n.name}`),
        ),
        e.setMaterial(0.9, 0, 0, 0));
    }
    P(e, s, 0.82);
  }
  P(e, 16777215);
  let y = t.uv(`mkt:fac:${n.fac}`),
    b = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + q + (t - 1) * At;
    for (let t = 0; t < b; t++) X(e, a, t / b, (t + 1) / b, 0, n, n + At, y);
  }
  (P(e, s),
    X(e, a, 0, 1, 0, o - jt, o, i),
    X(e, a, 0, 0.04, 0, r, r + q, i),
    X(e, a, 0.96, 1, 0, r, r + q, i));
  let x =
    n.special === `horumon`
      ? t.uv(`horumon:board`)
      : n.special === `sushi`
        ? t.uv(`sushi:board`)
        : t.uv(`mkt:board:${n.name}`);
  (e.setMaterial(0.7, 0, 0, 0),
    P(e, 2762274),
    X(e, a, 0.02, 0.98, 0.06, r + 2.62, r + q, i),
    Z(e, a, 0.02, 0.98, 0, r + q, 0.13, r + q, i),
    e.setMaterial(
      0.6,
      0,
      n.special === `sushi` ? 0.35 : 0,
      n.special === `sushi` ? 3 : 0,
    ),
    P(e, 16777215),
    X(e, a, 0.03, 0.97, 0.13, r + 2.66, r + q - 0.04, x),
    n.vacant &&
      (e.setMaterial(0.6, 0.3, 0, 0),
      P(e, 16777215),
      X(e, a, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`mkt:shut:${n.shut}`))));
  let S = ((n.x0 * 5 + n.z0 * 11) | 0) % 6;
  if (S < 2 && a.wid > 4.5) {
    let [t, n] = Y(a, 0.6, -a.depth * 0.55);
    if (
      (e.setMaterial(0.6, 0.4, 0, 0),
      P(e, S === 0 ? 14211282 : 10132638),
      S === 0)
    ) {
      for (let [r, a] of [
        [-0.45, -0.45],
        [0.45, -0.45],
        [0.45, 0.45],
        [-0.45, 0.45],
      ])
        B(e, t + r, o, n + a, t + r, o + 0.9, n + a, 0.04, i);
      z(e, t, n, o + 0.9, o + 2.2, 0.62, i, 10);
    } else
      for (let r = 0; r < 3; r++)
        L(
          e,
          t - 1.2 + r * 0.85,
          o,
          n - 0.3,
          t - 0.5 + r * 0.85,
          o + 0.62,
          n + 0.3,
          i,
        );
  }
  if (
    n.floors >= 2 &&
    !n.vacant &&
    !n.special &&
    ((n.x0 * 13 + n.z0 * 7) | 0) % 5 < 2
  ) {
    let s = (a.rx - a.lx) / a.wid,
      c = (a.rz - a.lz) / a.wid,
      [l, u] = Y(a, 0.1, 0.5),
      d = r + q + 0.3,
      f = Math.min(o - jt - 0.2, d + 3.4),
      p = t.uv(`mkt:nobori:${n.trade.id}`);
    (e.setMaterial(0.6, 0, 0.18, 3),
      P(e, 16777215),
      R(e, l, u, d, f, 0.42, 0.07, s, c, i, p, p),
      e.setMaterial(0.5, 0.6, 0, 0),
      P(e, 6975090),
      B(
        e,
        l - a.nx * 0.45,
        d + 0.2,
        u - a.nz * 0.45,
        l + a.nx * 0.05,
        d + 0.2,
        u + a.nz * 0.05,
        0.03,
        i,
      ),
      B(
        e,
        l - a.nx * 0.45,
        f - 0.2,
        u - a.nz * 0.45,
        l + a.nx * 0.05,
        f - 0.2,
        u + a.nz * 0.05,
        0.03,
        i,
      ),
      e.setMaterial(0.9, 0, 0, 0));
  }
  (n.special === `sushi` && Bt(e, t, n, a, r),
    n.special === `gate` && Vt(e, t, n, r));
}
function Bt(e, t, n, r, i) {
  (t.white(),
    Ht(e, t, n, r, i),
    e.setMaterial(0.15, 0.2, 0.1, 1),
    P(e, 12243160),
    e.setMaterial(0.6, 0, 0.3, 3),
    P(e, 16777215));
  let a = t.uv(`sushi:man`),
    o = n.x1 + 0.08,
    s = n.z0 - 0.08;
  (F(e, o, s, o - 2.2, s, i + 3.5, i + 6.8, a),
    F(e, o, s + 2.2, o, s, i + 3.5, i + 6.8, a));
  let c = t.uv(`sushi:board`);
  (e.setMaterial(0.6, 0, 0.3, 3),
    F(e, n.x1 + 0.1, n.z0 + 9.5, n.x1 + 0.1, n.z0 + 3, i + 3.4, i + 4.6, c));
}
function Vt(e, t, n, r) {
  let i = t.white(),
    a = r + n.h,
    o = t.uv(`mkt:sign`);
  (e.setMaterial(0.5, 0.6, 0, 0), P(e, 5922402));
  for (let t of [n.x0 + 1, n.x0 + 6])
    B(e, t, a, n.z0 + 0.6, t, a + 2.6, n.z0 + 0.6, 0.06, i);
  for (let t of [n.z0 + 1.6, n.z0 + 6.6])
    B(e, n.x0 + 0.5, a, t, n.x0 + 0.5, a + 2.6, t, 0.06, i);
  (e.setMaterial(0.6, 0, 0.35, 3),
    P(e, 16777215),
    F(e, n.x0 + 7, n.z0 + 0.5, n.x0 + 0.3, n.z0 + 0.5, a + 0.9, a + 2.6, o),
    F(e, n.x0 + 0.4, n.z0 + 0.6, n.x0 + 0.4, n.z0 + 7.4, a + 0.9, a + 2.6, o),
    e.setMaterial(0.8, 0, 0, 0),
    P(e, 4869198),
    F(e, n.x0 + 0.3, n.z0 + 0.62, n.x0 + 7, n.z0 + 0.62, a + 0.9, a + 2.6, i),
    F(
      e,
      n.x0 + 0.52,
      n.z0 + 7.4,
      n.x0 + 0.52,
      n.z0 + 0.6,
      a + 0.9,
      a + 2.6,
      i,
    ));
}
function Ht(e, t, n, r, i) {
  let a = t.white(),
    o = Math.min(r.depth - 0.3, n.lane ? 2.2 : 2.6);
  (e.setMaterial(0.8, 0, 0.2, 0),
    P(e, 16777215),
    X(e, r, 0.04, 0.96, -o, i, i + 2.62, t.uv(`mkt:int:${n.trade.id}`)),
    P(e, 4867648),
    Z(e, r, 0.04, 0.96, -o, i + 2.62, 0, i + 2.62, a, !0),
    P(e, 15262940));
  let s = t.uv(`mkt:int:${n.trade.id}`),
    [c, l] = Y(r, 0.04, -o),
    [u, d] = Y(r, 0.04, 0),
    [f, p] = Y(r, 0.96, -o),
    [m, h] = Y(r, 0.96, 0);
  (F(e, u, d, c, l, i, i + 2.62, s),
    F(e, f, p, m, h, i, i + 2.62, s),
    P(e, 6974054),
    I(
      e,
      Math.min(c, u, f, m),
      Math.min(l, d, p, h),
      Math.max(c, u, f, m),
      Math.max(l, d, p, h),
      i + 0.02,
      a,
    ));
}
function Ut(e, t, n, r, i) {
  if (n.vacant || n.special === `sushi`) return;
  let a = t.white(),
    o = Lt(n),
    s = n.trade;
  Ht(e, t, n, o, r);
  let c = n.lane ? 0.62 : 1.45,
    l = n.lane ? 1.05 : 2.3;
  if (s.eat) {
    (e.setMaterial(0.9, 0, 0, 0), P(e, parseInt(s.awn[0].slice(1), 16)));
    for (let t = 0; t < 3; t++)
      X(
        e,
        o,
        0.3 + t * 0.135,
        0.3 + (t + 1) * 0.135 - 0.01,
        0.05,
        r + 1.75,
        r + 2.6,
        a,
      );
    (e.setMaterial(0.2, 0.1, 0.1, 1), P(e, 16777215));
    let n = t.uv(`mkt:goods:${s.id}`),
      [i, c] = Y(o, 0.72, 0.08),
      [l, u] = Y(o, 0.94, 0.55);
    (e.setMaterial(0.5, 0.2, 0, 0),
      P(e, 5913124),
      L(
        e,
        Math.min(i, l),
        r,
        Math.min(c, u),
        Math.max(i, l),
        r + 0.85,
        Math.max(c, u),
        a,
      ),
      e.setMaterial(0.2, 0.1, 0.1, 0),
      P(e, 16777215),
      Z(e, o, 0.72, 0.94, 0.08, r + 1.35, 0.55, r + 0.86, n));
  } else {
    (e.setMaterial(0.85, 0, 0, 0), P(e, 15658730));
    let [n, l] = Y(o, 0.07, 0.12),
      [u, d] = Y(o, 0.93, c);
    if (
      (L(
        e,
        Math.min(n, u),
        r,
        Math.min(l, d),
        Math.max(n, u),
        r + 0.74,
        Math.max(l, d),
        a,
      ),
      e.setMaterial(0.5, 0, 0.05, 0),
      P(e, 16777215),
      Z(
        e,
        o,
        0.07,
        0.93,
        0.12,
        r + 0.98,
        c,
        r + 0.76,
        t.uv(`mkt:goods:${s.id}`),
      ),
      i >= 1 && (s.id === `fish` || s.id === `maguro` || s.id === `kai`))
    ) {
      (e.setMaterial(0.85, 0, 0, 0), P(e, 16053490));
      let [t, n] = Y(o, 0.97, c * 0.5 + 0.1);
      for (let i = 0; i < 3; i++)
        L(
          e,
          t - 0.3,
          r + i * 0.22,
          n - 0.22,
          t + 0.3,
          r + i * 0.22 + 0.2,
          n + 0.22,
          a,
        );
    }
  }
  let u = t.uv(`mkt:awn:${s.id}:${n.striped ? `s` : `p`}`);
  (e.setMaterial(0.9, 0, 0, 0),
    P(e, 16777215),
    Z(e, o, 0, 1, 0, r + 2.7, l, r + 2.3, u),
    P(e, 16777215, 0.55),
    Z(e, o, 0, 1, 0, r + 2.69, l, r + 2.29, u, !0),
    n.special !== `horumon` &&
      (P(e, 16777215),
      X(e, o, 0, 1, l, r + 2.02, r + 2.3, t.uv(`mkt:val:${n.name}`))));
  let d = ((n.x0 * 3 + n.z0 * 17) | 0) % 5;
  if (i >= 1 && !n.lane && d < 2) {
    let [t, n] = Y(o, 0.02, (s.eat ? 0.8 : c) + 0.45);
    if ((e.setMaterial(0.7, 0, 0, 0), d === 0))
      for (let i = 0; i < 3; i++)
        (P(e, i % 2 ? 14197783 : 2775728),
          L(
            e,
            t - 0.27,
            r + i * 0.3,
            n - 0.2,
            t + 0.27,
            r + i * 0.3 + 0.29,
            n + 0.2,
            a,
          ));
    else {
      (P(e, 8027778),
        L(e, t - 0.35, r + 0.12, n - 0.5, t + 0.35, r + 0.18, n + 0.5, a),
        P(e, 1710618));
      for (let [i, o] of [
        [-0.3, -0.45],
        [0.3, -0.45],
        [0.3, 0.45],
        [-0.3, 0.45],
      ])
        L(
          e,
          t + i - 0.04,
          r,
          n + o - 0.04,
          t + i + 0.04,
          r + 0.12,
          n + o + 0.04,
          a,
        );
      (P(e, 16053490),
        L(e, t - 0.3, r + 0.18, n - 0.4, t + 0.3, r + 0.42, n + 0.1, a));
    }
  }
  if (i >= 1 && (s.eat || ((n.x0 * 7 + n.z0 * 3) | 0) % 3 == 0)) {
    let [n, i] = Y(o, 0.06, (s.eat ? 0.6 : c) + 0.25);
    (e.setMaterial(0.6, 0.4, 0, 0),
      P(e, 12106944),
      z(e, n, i, r, r + 2.55, 0.02, a, 4),
      e.setMaterial(0.9, 0, 0, 0),
      P(e, 16777215));
    let l = (o.rx - o.lx) / o.wid,
      u = (o.rz - o.lz) / o.wid,
      d = t.uv(`mkt:nobori:${s.id}`);
    (F(
      e,
      n + o.nx * 0.01,
      i + o.nz * 0.01,
      n + l * 0.46 + o.nx * 0.01,
      i + u * 0.46 + o.nz * 0.01,
      r + 0.85,
      r + 2.45,
      d,
    ),
      F(
        e,
        n + l * 0.46 - o.nx * 0.01,
        i + u * 0.46 - o.nz * 0.01,
        n - o.nx * 0.01,
        i - o.nz * 0.01,
        r + 0.85,
        r + 2.45,
        d,
      ));
  }
  (e.setMaterial(0.3, 0, 1, 0), P(e, 16773316));
  for (let t of [0.3, 0.7]) {
    let [n, i] = Y(o, t, l * 0.55);
    L(e, n - 0.05, r + 2.08, i - 0.05, n + 0.05, r + 2.2, i + 0.05, a);
  }
}
function Wt(e, t, n, r) {
  if (n.vacant || n.special === `sushi`) return;
  let i = t.white(),
    a = Lt(n);
  (e.setMaterial(0.6, 0.3, 0, 0),
    P(e, 16777215),
    X(e, a, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`mkt:shut:${n.shut}`)),
    e.setMaterial(0.9, 0, 0, 0),
    P(e, parseInt(n.trade.awn[0].slice(1), 16)));
  let [o, s] = Y(a, 0.02, 0),
    [c, l] = Y(a, 0.98, 0.22);
  L(
    e,
    Math.min(o, c),
    r + 2.58,
    Math.min(s, l),
    Math.max(o, c),
    r + 2.72,
    Math.max(s, l),
    i,
  );
}
function Gt(e, t, n) {
  let r = t.white(),
    i = { x0: 409, z0: 497, x1: 443.2, z1: 575 },
    a = n.plan.groundHeight((i.x0 + i.x1) / 2, i.z0),
    o = 15.2,
    s = e.begin();
  (s.setMaterial(0.7, 0.1, 0, 0),
    P(s, 10133152),
    L(s, i.x0, a + 5.2, i.z0, i.x1, a + o, i.z1, r, !0),
    L(s, i.x0, a, i.z0 + 4.2, i.x1, a + 5.2, i.z1, r));
  for (let e of [i.x0, i.x1])
    L(s, e - 0.3, a, i.z0, e + 0.3, a + 5.2, i.z0 + 4.2, r);
  P(s, 16777215);
  let c = t.uv(`uogashi:fac`),
    l = Math.round((i.x1 - i.x0) / 6);
  for (let e = 0; e < l; e++) {
    let t = i.x1 - ((i.x1 - i.x0) * e) / l,
      n = i.x1 - ((i.x1 - i.x0) * (e + 1)) / l;
    F(s, t, i.z0 - 0.02, n, i.z0 - 0.02, a + 6.6, a + o - 0.6, c);
  }
  let u = Math.round((i.z1 - i.z0) / 6);
  for (let e = 0; e < u; e++) {
    let t = i.z1 - ((i.z1 - i.z0) * e) / u,
      n = i.z1 - ((i.z1 - i.z0) * (e + 1)) / u;
    F(s, i.x1 + 0.02, t, i.x1 + 0.02, n, a + 6.6, a + o - 0.6, c);
  }
  (s.setMaterial(0.6, 0, 0.25, 3),
    F(
      s,
      i.x1 - 4,
      i.z0 - 0.06,
      i.x1 - 22,
      i.z0 - 0.06,
      a + 5.4,
      a + 6.4,
      t.uv(`uogashi:sign`),
    ),
    s.setMaterial(0.7, 0, 0, 0),
    F(
      s,
      i.x0 + 5.2,
      i.z0 - 0.06,
      i.x0 + 3.2,
      i.z0 - 0.06,
      a + 1.2,
      a + 2.2,
      t.uv(`uogashi:note`),
    ),
    P(s, 11843252));
  for (let e = i.x0; e <= i.x1 + 0.01; e += (i.x1 - i.x0) / 5)
    L(s, e - 0.3, a, i.z0 - 0.3, e + 0.3, a + 5.2, i.z0 + 0.1, r);
  (P(s, 8027776),
    L(s, i.x0, a + 5, i.z0 - 2.4, i.x1, a + 5.25, i.z0, r),
    s.setMaterial(0.5, 0.6, 0, 0),
    P(s, 9080466));
  for (let [e, t, n, c] of [
    [i.x0, i.z0, i.x1, i.z0],
    [i.x1, i.z0, i.x1, i.z1],
    [i.x1, i.z1, i.x0, i.z1],
    [i.x0, i.z1, i.x0, i.z0],
  ])
    B(s, e, a + o + 1.1, t, n, a + o + 1.1, c, 0.03, r);
  (e.end(`uogashi`, (i.x0 + i.x1) / 2, (i.z0 + i.z1) / 2, 520),
    (s = e.begin()),
    s.setMaterial(0.6, 0, 0.15, 0),
    P(s, 16777215));
  let d = t.uv(`mkt:int:fish`);
  for (let e = 0; e < 5; e++) {
    let t = i.x1 - ((i.x1 - i.x0) * e) / 5 - 0.3,
      n = i.x1 - ((i.x1 - i.x0) * (e + 1)) / 5 + 0.3;
    F(s, t, i.z0 + 4.15, n, i.z0 + 4.15, a, a + 3.6, d);
  }
  (P(s, 3815992),
    I(s, i.x0, i.z0, i.x1, i.z0 + 4, a + 4.6, r, !0),
    e.end(`uogashi-open`, (i.x0 + i.x1) / 2, i.z0, 200, `mktOpen`),
    (s = e.begin()),
    s.setMaterial(0.6, 0.3, 0, 0),
    P(s, 16777215));
  for (let e = 0; e < 5; e++) {
    let n = i.x1 - ((i.x1 - i.x0) * e) / 5 - 0.3,
      r = i.x1 - ((i.x1 - i.x0) * (e + 1)) / 5 + 0.3;
    F(s, n, i.z0 + 0.12, r, i.z0 + 0.12, a, a + 4.4, t.uv(`mkt:shut:${e % 3}`));
  }
  (e.end(`uogashi-shut`, (i.x0 + i.x1) / 2, i.z0, 200, `mktClosed`),
    e.box(i.x0, i.z0 + 0.1, i.x1, i.z1, a, a + o + 1.2));
  let f = g.yard;
  ((s = e.begin()), s.setMaterial(0.6, 0.5, 0, 0), P(s, 6978154));
  for (let [e, t, n, i] of [
    [f.x0, f.z1, f.x1, f.z1],
    [f.x1, f.z0, f.x1, f.z1],
  ])
    (B(s, e, a + 1.8, t, n, a + 1.8, i, 0.03, r),
      B(s, e, a + 0.9, t, n, a + 0.9, i, 0.02, r));
  e.end(`uogashi-yard`, (f.x0 + f.x1) / 2, (f.z0 + f.z1) / 2, 160);
}
function Kt(e, t) {
  let n = t.white();
  for (let [t, r] of [
    [`tare-a`, 3108776],
    [`tare-b`, 4885066],
    [`tare-c`, 13157560],
  ]) {
    let i = e.begin();
    (i.setMaterial(0.6, 0.4, 0, 0),
      P(i, 9080466),
      L(i, -0.55, 0.3, -1.15, 0.55, 0.52, 0.55, n),
      P(i, 5922402),
      L(i, -0.57, 0.52, -1.15, 0.57, 0.62, -1.1, n),
      i.setMaterial(0.45, 0.3, 0, 0),
      P(i, r),
      z(i, 0, 0.95, 0.22, 1.12, 0.42, n, 12),
      P(i, 1710618),
      z(i, 0, 0.95, 1.12, 1.17, 0.3, n, 12),
      z(i, 0, 0.95, 1.17, 1.32, 0.04, n, 6),
      i.setMaterial(0.8, 0, 0, 0),
      P(i, 1315860),
      V(i, 0, 0.17, 1, 1, 0, 0.16, 0.17, n, 8, !0));
    for (let e of [-1, 1])
      V(i, e * 0.48, 0.17, -0.8, 1, 0, 0.12, 0.17, n, 8, !0);
    (i.setMaterial(0.85, 0, 0, 0),
      P(i, 16053490),
      L(i, -0.4, 0.52, -0.95, 0.1, 0.74, -0.55, n),
      L(i, -0.4, 0.74, -0.95, 0.1, 0.96, -0.55, n),
      e.w,
      e.end(`kit:${t}`, 0, 0, 0));
  }
  {
    let r = e.begin(),
      i = t.uv(`mkt:flag`);
    (r.setMaterial(0.6, 0.5, 0, 0), P(r, 9080466));
    for (let e of [1, -1])
      (B(r, 0, 6.05, 0, 0, 6.05, e * 0.85, 0.022, n),
        B(r, 0, 4.05, 0, 0, 4.05, e * 0.85, 0.022, n));
    (r.setMaterial(0.8, 0, 0.12, 1), P(r, 16777215));
    for (let e of [1, -1]) {
      let t = e > 0 ? 0.16 : -0.82,
        n = e > 0 ? 0.82 : -0.16;
      (F(r, 0.012, n, 0.012, t, 4, 6, i), F(r, -0.012, t, -0.012, n, 4, 6, i));
    }
    e.end(`kit:mkt-flag`, 0, 0, 0);
  }
  for (let r of [`manners`, `cal`]) {
    let i = e.begin();
    (i.setMaterial(0.6, 0.4, 0, 0),
      P(i, 9080466),
      z(i, 0, 0, 0, 1.9, 0.035, n, 6),
      i.setMaterial(0.7, 0, 0.05, 1),
      P(i, 16777215),
      R(
        i,
        0,
        0.05,
        1.1,
        1.9,
        0.32,
        0.02,
        0,
        1,
        n,
        t.uv(`mkt:${r}`),
        t.uv(`mkt:${r}`),
      ),
      e.end(`kit:poster-${r}`, 0, 0, 0));
  }
}
function qt(e) {
  let t = [],
    r = e.plan,
    a = g,
    o = new n(i(`shim-mkt-kit`, 1)),
    s = [
      [389.4, 400, 0, 1],
      [380.4, 452, 0, -1],
      [389.2, 530, 0, 1],
      [a.monzeki.x0 + 1.5, 420, 0, -1],
      [a.higashi.x0 + 1.5, 446, 0, 1],
      [360, 492.4, 1, 0],
      [420, 483.6, -1, 0],
    ];
  for (let [e, n, i, a] of s)
    t.push({
      model: `tare-${`abc`[Math.floor(o.next() * 3)]}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: i,
      fz: a,
      range: 140,
      group: `mktOpen`,
    });
  for (let [e, n] of [
    [431.5, 580.2],
    [435.6, 580.2],
    [439.7, 580.2],
  ])
    t.push({
      model: `tare-${`abc`[Math.floor(o.next() * 3)]}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: 0,
      fz: -1,
      range: 120,
    });
  let c = p(r);
  for (let [e, n, i, a] of [
    [`shin-ohashi-tsukiji`, 1, 372, 560],
    [`harumi`, 1, 332, 444],
  ]) {
    let o = r.roads.find((t) => t.id === e);
    if (!o) continue;
    let s = c.nodesOf(o);
    for (let e = 0; e + 1 < s.length; e++) {
      let l = c.primaryLights(o, s[e], s[e + 1], n);
      if (l && l.kind === `tall`)
        for (let e of l.ts) {
          if (e < i || e > a) continue;
          let s = n * (o.halfWidth + 0.55),
            c = o.axis === `z` ? o.at + s : e,
            l = o.axis === `z` ? e : o.at + s;
          t.push({
            model: `mkt-flag`,
            x: c,
            y: r.groundHeight(c, l),
            z: l,
            fx: o.axis === `z` ? -n : 0,
            fz: o.axis === `z` ? 0 : -n,
            range: 260,
          });
        }
    }
  }
  for (let [e, n, i, o] of [
    [a.monzeki.x0 - 0.3, a.west.z0 + 0.4, `manners`, -1],
    [a.higashi.x1 + 0.3, a.east.z0 + 0.4, `manners`, -1],
    [a.monzeki.x1 + 0.3, a.west.z1 - 0.4, `cal`, 1],
    [a.monzeki.x0 - 0.3, a.south.z0 + 0.4, `manners`, -1],
  ])
    t.push({
      model: `poster-${i}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: 0,
      fz: o,
      range: 90,
    });
  return t;
}
async function Jt(e, t, n, r, i, a) {
  let o = 0;
  for (let s of r) {
    if (!s.units.length) continue;
    let r = 1 / 0,
      c = 1 / 0,
      l = -1 / 0,
      u = -1 / 0,
      d = 0;
    for (let e of s.units)
      ((r = Math.min(r, e.x0)),
        (c = Math.min(c, e.z0)),
        (l = Math.max(l, e.x1)),
        (u = Math.max(u, e.z1)),
        (d = Math.max(d, e.h)));
    let f = (r + l) / 2,
      p = (c + u) / 2,
      m = n.plan.groundHeight(f, p),
      h = e.begin();
    for (let e of s.units) zt(h, t, e, m);
    (e.end(`mkt-${s.id}`, f, p, 480), (h = e.begin()));
    for (let e of s.units) Ut(h, t, e, m, i);
    (e.end(`mkt-${s.id}-open`, f, p, 190, `mktOpen`), (h = e.begin()));
    for (let e of s.units) Wt(h, t, e, m);
    e.end(`mkt-${s.id}-shut`, f, p, 190, `mktClosed`);
    let g = null,
      _ = 0,
      v = 0,
      y = 0,
      b = 0,
      x = 0;
    for (let t of s.units)
      g && Math.min(Math.abs(t.x0 - y), Math.abs(t.z0 - b)) < 0.05
        ? ((y = Math.max(y, t.x1)),
          (b = Math.max(b, t.z1)),
          (x = Math.max(x, t.h)))
        : (g && e.box(_, v, y, b, m, m + x),
          (g = t),
          (_ = t.x0),
          (v = t.z0),
          (y = t.x1),
          (b = t.z1),
          (x = t.h));
    (g && e.box(_, v, y, b, m, m + x), (o += s.units.length), await a());
  }
  return (Gt(e, t, n), o);
}
function Yt(e) {
  (e.need(`kyu:pav`, 192, 240, Me),
    e.need(`kyu:arcade`, 256, 160, Ne),
    e.need(`kyu:sign`, 288, 48, Pe),
    e.need(`kyu:hours`, 192, 64, Fe),
    e.need(`kyu:zero`, 40, 128, Ie),
    e.need(`kyu:site`, 64, 160, Le));
}
function Xt(e, t, n, r, i, a, o, s) {
  (e.setMaterial(0.5, 0.5, 0, 0),
    P(e, 9418146),
    L(e, n - 0.35, o, r - 0.35, i + 0.35, o + 0.32, a + 0.35, t),
    e.setMaterial(0.75, 0.2, 0, 0),
    P(e, 4080198));
  let c = n - 0.3,
    l = r - 0.3,
    u = i + 0.3,
    d = a + 0.3,
    f = o + 0.32,
    p = f + s,
    m = u - c >= d - l,
    h = (m ? d - l : u - c) / 2;
  if (m) {
    let n = c + h,
      r = u - h,
      i = (l + d) / 2;
    (e.quad(c, f, l, n, p, i, r, p, i, u, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, d, r, p, i, n, p, i, c, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, l, r, p, i, r, p, i, u, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, d, n, p, i, n, p, i, c, f, l, t.u0, t.v0, t.u1, t.v1));
  } else {
    let n = l + h,
      r = d - h,
      i = (c + u) / 2;
    (e.quad(u, f, l, i, p, n, i, p, r, u, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, d, i, p, r, i, p, n, c, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, l, i, p, n, i, p, n, u, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, d, i, p, r, i, p, r, c, f, d, t.u0, t.v0, t.u1, t.v1));
  }
}
function Zt(e, t, n) {
  let r = t.white(),
    i = S.block,
    a = n.plan.groundHeight(S.x, S.front),
    o = S.front,
    s = e.begin();
  (s.setMaterial(0.85, 0, 0, 0),
    P(s, 12104356),
    I(s, i.x0, i.z0, i.x1, i.z1, a + 0.03, r));
  let c = t.uv(`kyu:pav`),
    l = 9.2;
  for (let [e, t] of [
    [1.75, 8.75],
    [16.75, 23.75],
  ]) {
    (s.setMaterial(0.85, 0, 0, 0),
      P(s, 13617334),
      L(s, e, a, o, t, a + l, o + 12, r),
      P(s, 16777215),
      F(s, t, o - 0.02, e, o - 0.02, a, a + l, c));
    let n = e < 10 ? e - 0.02 : t + 0.02;
    for (let t = 0; t < 2; t++) {
      let r = o + (12 * t) / 2,
        i = o + (12 * (t + 1)) / 2;
      e < 10 ? F(s, n, r, n, i, a, a + l, c) : F(s, n, i, n, r, a, a + l, c);
    }
    (F(s, e, o + 12 + 0.02, t, o + 12 + 0.02, a, a + l, c),
      Xt(s, r, e, o, t, o + 12, a + l, 2.2));
  }
  let u = 8.75,
    d = 16.75,
    f = 5.2;
  (s.setMaterial(0.85, 0, 0, 0),
    P(s, 13880506),
    L(s, u, a, o, d, a + f, o + 10, r),
    P(s, 16777215),
    F(s, d, o - 0.02, u, o - 0.02, a, a + f, t.uv(`kyu:arcade`)),
    P(s, 15526110),
    L(s, 8.6, a + f, o - 0.25, 16.9, a + f + 0.3, o + 10, r),
    s.quad(
      15.75,
      a + f + 0.3,
      o - 0.2,
      9.75,
      a + f + 0.3,
      o - 0.2,
      25.5 / 2,
      a + f + 1.55,
      o - 0.2,
      25.5 / 2,
      a + f + 1.55,
      o - 0.2,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    s.setMaterial(0.75, 0.2, 0, 0),
    P(s, 4080198),
    I(s, u, o, d, o + 10, a + f + 0.31, r),
    s.setMaterial(0.7, 0, 0, 0),
    P(s, 16777215),
    F(s, 15.85, o - 0.05, 9.65, o - 0.05, a + 4.25, a + 4.95, t.uv(`kyu:sign`)),
    R(s, 17.95, o - 2.2, a, a + 1.3, 0.6, 0.05, 0, -1, r, t.uv(`kyu:hours`), r),
    s.setMaterial(0.6, 0, 0, 0),
    P(s, 16777215),
    R(
      s,
      i.x0 + 1.2,
      i.z0 + 1.6,
      a,
      a + 1.5,
      0.22,
      0.15,
      0,
      -1,
      r,
      t.uv(`kyu:site`),
      r,
    ));
  let p = o + 12 + 2.5,
    m = p + 14,
    h = 22.5,
    g = 0.92;
  (s.setMaterial(0.9, 0, 0, 0),
    P(s, 10262154),
    L(s, 3, a, p, h, a + g, m, r),
    P(s, 12169890),
    I(s, 3, p, h, m, a + g + 0.01, r),
    P(s, 8156780),
    L(s, 3, a + g - 0.18, m - 0.02, h, a + g + 0.02, m + 0.35, r),
    P(s, 10262154),
    s.quad(
      -0.20000000000000018,
      a + 0.02,
      p + 2,
      -0.20000000000000018,
      a + 0.02,
      p + 5,
      3,
      a + g,
      p + 5,
      3,
      a + g,
      p + 2,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ));
  let _ = m + 1.6;
  (P(s, 6973024),
    L(s, 1.5, a, _ - 1.4, 24, a + 0.18, _ + 1.4, r),
    P(s, 4864556));
  for (let e = 2; e < 23.5; e += 0.62)
    L(s, e, a + 0.18, _ - 1.05, e + 0.22, a + 0.26, _ + 1.05, r);
  (s.setMaterial(0.4, 0.7, 0, 0), P(s, 8025196));
  for (let e of [-1, 1])
    L(
      s,
      1.8,
      a + 0.26,
      _ + e * 0.533 - 0.035,
      23.7,
      a + 0.4,
      _ + e * 0.533 + 0.035,
      r,
    );
  (s.setMaterial(0.5, 0.4, 0, 0), P(s, 15921902));
  for (let e = 4.5; e < h; e += 4.6) {
    let t = p - 0.2,
      n = _ + 1.8,
      i = a + g,
      o = a,
      c = a + 6.6;
    (B(s, e, i, t, e, c - 1.2, t, 0.09, r),
      B(s, e, o, n, e, c - 1.2, n, 0.09, r));
    let l = t,
      u = c - 1.2;
    for (let i = 1; i <= 8; i++) {
      let a = i / 8,
        o = t + (n - t) * a,
        d = c - 1.2 + Math.sin(a * Math.PI) * 1.2;
      (B(s, e, u, l, e, d, o, 0.08, r), (l = o), (u = d));
    }
  }
  let v = S.x;
  (s.setMaterial(0.7, 0, 0, 0),
    P(s, 9078398),
    L(s, v - 0.4, a, _ + 1.5, v + 0.4, a + 0.12, _ + 2.3, r),
    P(s, 16777215),
    R(
      s,
      v,
      _ + 1.9,
      a + 0.12,
      a + 0.95,
      0.09,
      0.09,
      0,
      -1,
      r,
      t.uv(`kyu:zero`),
      t.uv(`kyu:zero`),
    ));
  for (let [e, t] of [
    [i.x0 + 1.4, i.z1 - 4],
    [i.x1 - 1.4, i.z1 - 4],
  ])
    (s.setMaterial(0.9, 0, 0, 0),
      P(s, 4864554),
      z(s, e, t, a, a + 2.6, 0.14, r, 6),
      P(s, 4090418),
      L(s, e - 1.3, a + 2.4, t - 1.3, e + 1.3, a + 3.9, t + 1.3, r),
      P(s, 4880954),
      L(s, e - 0.9, a + 3.9, t - 0.9, e + 0.9, a + 4.8, t + 0.9, r));
  return (
    e.end(`kyu-shimbashi`, S.x, (i.z0 + i.z1) / 2, 520),
    e.box(1.75, o, 8.75, o + 12, a, a + l + 2.5),
    e.box(16.75, o, 23.75, o + 12, a, a + l + 2.5),
    e.box(u, o, d, o + 10, a, a + f + 1.6),
    e.box(3, p, h, m + 0.35, a, a + g),
    e.circles.push({
      x: i.x0 + 1.2,
      z: i.z0 + 1.6,
      r: 0.3,
      y0: a,
      y1: a + 1.5,
    }),
    {
      floors: [
        {
          cx: 25.5 / 2,
          cz: (p + m) / 2,
          hx: 19.5 / 2,
          hz: (m - p) / 2,
          y0: a + g,
          y1: a + g,
        },
        { cx: 1.4, cz: p + 3.5, hx: 1.6, hz: 1.5, y0: a, y1: a + g, ramp: !0 },
      ],
    }
  );
}
var Q = 12239558;
function Qt(e) {
  (e.need(`kachi:plate`, 160, 48, lt(`shim.kachi.name`)),
    e.need(`kachi:kana`, 160, 48, lt(`shim.kachi.kana`)));
}
function $t(e, t, n, r, i, a) {
  let o = f,
    s = r - n,
    c = a >= 1 ? 16 : 10,
    l = Math.round(s / 5.4),
    u = (e) => {
      let t = ((e - n) / s) * 2 - 1;
      return i + 1.5 + o.rise * (1 - t * t);
    };
  for (let a of [-1, 1]) {
    let d = o.z + a * o.ribZ;
    (e.setMaterial(0.45, 0.55, 0, 0),
      P(e, Q, 0.92),
      L(e, n, i, d - 0.45, r, i + 1.5, d + 0.45, t),
      e.setMaterial(0.42, 0.55, 0.1, 1),
      P(e, Q));
    let f = n,
      p = i + 1.5;
    for (let r = 1; r <= c; r++) {
      let i = n + (s * r) / c,
        a = u(i);
      (B(e, f, p, d, i, a, d, 0.55, t), (f = i), (p = a));
    }
    (e.setMaterial(0.45, 0.55, 0, 0), P(e, Q, 0.95));
    for (let r = 1; r < l; r++) {
      let a = n + (s * r) / l;
      B(e, a, i + 1.5, d, a, u(a) - 0.4, d, 0.09, t);
    }
  }
  (e.setMaterial(0.45, 0.55, 0, 0), P(e, Q, 0.9));
  let d = o.z - o.ribZ,
    p = o.z + o.ribZ,
    m = [];
  for (let r = 2; r < l - 1; r += 2) {
    let a = n + (s * r) / l;
    u(a) - i < 7.5 || (m.push(a), B(e, a, u(a), d, a, u(a), p, 0.22, t));
  }
  if (a >= 1)
    for (let n = 0; n + 1 < m.length; n++) {
      let r = m[n],
        i = m[n + 1];
      (B(e, r, u(r), d, i, u(i), p, 0.12, t),
        B(e, r, u(r), p, i, u(i), d, 0.12, t));
    }
}
function en(e, t, n, r) {
  let i = f,
    a = t.white(),
    o = n.plan.groundHeight(i.x0 - 6, i.z),
    s = e.begin(),
    c = i.x0,
    l = c + i.arch,
    u = l,
    d = u + i.pier,
    p = d + 2 * i.leaf,
    m = p + i.pier,
    h = m + i.arch;
  ($t(s, a, c, l, o, r),
    $t(s, a, m, h, o, r),
    s.setMaterial(0.9, 0, 0, 0),
    P(s, 4868942),
    L(
      s,
      650,
      o - 0.25,
      i.z - i.ribZ + 0.45,
      h,
      o + 0.02,
      i.z + i.ribZ - 0.45,
      a,
    ),
    P(s, 10131600));
  for (let e of [-1, 1])
    L(
      s,
      650,
      o - 0.25,
      e < 0 ? i.z - i.ribZ - 3.6 : i.z + i.ribZ + 0.45,
      h,
      o + 0.18,
      e < 0 ? i.z - i.ribZ - 0.45 : i.z + i.ribZ + 3.6,
      a,
    );
  P(s, Q, 0.8);
  for (let e of [-1, 1])
    L(
      s,
      c,
      o - 2.2,
      i.z + e * (i.ribZ + 3.6) - 0.2,
      h,
      o - 0.25,
      i.z + e * (i.ribZ + 3.6) + 0.2,
      a,
    );
  (P(s, Q, 0.75),
    L(s, d, o - 2.6, i.z - i.ribZ - 0.4, p, o - 0.25, i.z + i.ribZ + 0.4, a),
    s.setMaterial(0.6, 0, 0, 0),
    P(s, 2236962),
    L(
      s,
      d + i.leaf - 0.06,
      o - 0.01,
      i.z - i.ribZ,
      d + i.leaf + 0.06,
      o + 0.03,
      i.z + i.ribZ,
      a,
    ));
  for (let [e, t] of [
    [u, d],
    [p, m],
  ]) {
    (s.setMaterial(0.85, 0, 0, 0),
      P(s, 11840928),
      L(s, e, o - 6, i.z - i.ribZ - 5.2, t, o - 0.25, i.z + i.ribZ + 5.2, a));
    for (let n of [-1, 1]) {
      let r = i.z + n * (i.ribZ + 5.6);
      (P(s, 12893616),
        L(s, e + 0.4, o - 0.25, r - 2, t - 0.4, o + 4.4, r + 2, a),
        P(s, 2765368));
      for (let i of [e + 1.4, t - 2.4])
        F(
          s,
          n < 0 ? i + 1 : i,
          r + n * 2.01,
          n < 0 ? i : i + 1,
          r + n * 2.01,
          o + 1.6,
          o + 3.4,
          a,
        );
      (s.setMaterial(0.7, 0.2, 0, 0),
        P(s, 5922916),
        L(s, e + 0.1, o + 4.4, r - 2.3, t - 0.1, o + 4.75, r + 2.3, a),
        s.setMaterial(0.85, 0, 0, 0));
    }
  }
  (s.setMaterial(0.5, 0.5, 0, 0), P(s, Q, 0.9));
  for (let e of [-1, 1]) {
    let t = i.z + e * (i.ribZ + 3.55);
    (B(s, c, o + 1.15, t, h, o + 1.15, t, 0.05, a),
      B(s, c, o + 0.55, t, h, o + 0.55, t, 0.03, a));
    for (let e = c; e <= h; e += r >= 1 ? 2.5 : 5)
      B(s, e, o + 0.18, t, e, o + 1.15, t, 0.03, a);
  }
  for (let e of [-1, 1]) {
    let n = i.z + e * (i.ribZ + 4.2);
    (s.setMaterial(0.8, 0, 0, 0),
      P(s, 11840928),
      L(s, c - 2.2, o, n - 0.6, c - 1, o + 2.2, n + 0.6, a),
      P(s, 16777215),
      F(
        s,
        c - 2.21,
        n - 0.5,
        c - 2.21,
        n + 0.5,
        o + 1.25,
        o + 1.6,
        t.uv(e < 0 ? `kachi:plate` : `kachi:kana`),
      ));
  }
  (e.end(`kachidoki`, (c + h) / 2, i.z, 1200),
    e.box(c - 2.2, i.z - i.ribZ - 4.8, c - 1, i.z - i.ribZ - 3.6, o, o + 2.2),
    e.box(c - 2.2, i.z + i.ribZ + 3.6, c - 1, i.z + i.ribZ + 4.8, o, o + 2.2));
  for (let t of [-1, 1])
    e.box(c, i.z + t * i.ribZ - 0.45, 640, i.z + t * i.ribZ + 0.45, o, o + 3);
}
var tn = e({
    init: () => ln,
    keepResident: () => gn,
    start: () => pn,
    unload: () => hn,
    update: () => mn,
  }),
  $ = null,
  nn = !1,
  rn = !1,
  an = -1,
  on = -1,
  sn = Error(`shimbashi: dropped while building`),
  cn = [];
async function ln(e) {
  if (nn || $) return;
  ((nn = !0), (rn = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    s = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), rn)) throw sn;
        i = performance.now();
      }
    };
  try {
    let c =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      u = new ce(),
      d = Ft();
    if (
      (pt(u),
      Et(u),
      It(u, d),
      Yt(u),
      Qt(u),
      await s(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      rn)
    )
      throw sn;
    i = performance.now();
    let f = l(2048, e.quality),
      p = u.paint(f),
      m = p.next();
    for (; !m.done;) (await s(!1, `paint`), (m = p.next()));
    let h = m.value,
      g = new he();
    (wt(g, u, e, c), await s(!1, `sl`));
    let _ = Ot(g, u, e, c);
    await s(!1, `gado`);
    let v = await Jt(g, u, e, d, c, () => s(!1, `market`));
    await s(!1, `market`);
    let y = Zt(g, u, e);
    (await s(!1, `kyu`), en(g, u, e, c), await s(!1, `kachidoki`), Kt(g, u));
    let b = qt(e);
    await s(!1, `kit`);
    let x = g.pieces.map((e) => ({ name: e.name, geo: e.geo })),
      S = o(`opaque`, {
        policy: e.quality.materials,
        map: h,
        batched: !0,
        name: `shimbashi`,
      }),
      C = new w(
        `shimbashi`,
        S,
        x,
        g.pieces.length + b.length + 16,
        !!e.quality.shadows,
      );
    ((C.mesh.userData.owner = `shimbashi`), C.enableCulling(e.camera));
    let T = new Map(),
      E = (e, t) => {
        let n = T.get(e);
        (n || T.set(e, (n = [])), n.push(t));
      };
    for (let e of g.pieces) {
      if (e.name.startsWith(`kit:`)) continue;
      let t = C.add(
        C.models.get(e.name),
        e.matrix ?? me,
        e.x,
        e.z,
        e.range,
        e.group === `always`,
      );
      e.group !== `always` && E(e.group, t);
    }
    let ee = new Float32Array(16);
    for (let e of b) {
      pe(ee, e.x, e.y, e.z, e.fx, e.fz);
      let t = C.add(
        C.models.get(`kit:${e.model}`),
        ee,
        e.x,
        e.z,
        e.range,
        !e.group,
      );
      e.group && E(e.group, t);
    }
    await s(!1, `batch`);
    let D = 0;
    for (let t of g.obbs)
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, t.rot, t.y0, t.y1, `building`),
        D++);
    for (let t of g.circles)
      (e.statics.addCircle(t.x, t.z, t.r, t.y0, t.y1, `pole`), D++);
    for (let t of [...b.filter((e) => e.model.startsWith(`tare`) && !e.group)])
      (e.statics.addOBB(t.x, t.z, 0.6, 1.2, 0, t.y, t.y + 1.3, `prop`), D++);
    for (let t of y.floors)
      `ramp` in t && t.ramp
        ? e.statics.addFloor(
            t.cx,
            t.cz,
            t.hz,
            t.hx,
            t.y0,
            t.y1,
            -Math.PI / 2,
            `floor`,
          )
        : e.statics.addFloor(t.cx, t.cz, t.hx, t.hz, t.y0, t.y1, 0, `floor`);
    if (rn) throw sn;
    e.scene.add(C.mesh);
    let O = e.params.has(`shimatlas`);
    (O || a(h),
      ($ = {
        batch: C,
        tex: h,
        groups: T,
        state: new Map(),
        stats: {
          pieces: g.pieces.length,
          instances: C.count,
          tris: Math.round(g.tris),
          units: v,
          bays: _,
          atlas: f,
          atlasUsed: u.used,
          overflow: u.overflow,
          colliders: D,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${u.slowKey} ${u.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of x) e.geo.dispose();
    (dn(e, d),
      (e.params.has(`debug`) || e.params.has(`shimtest`)) &&
        (window.__shim = {
          stats: () => $?.stats,
          batch: () =>
            $ && {
              count: $.batch.count,
              shown: $.batch.shown,
              tris: $.batch.shownTris,
            },
          state: () => $ && Object.fromEntries($.state),
          atlas: () => (O ? h.image.toDataURL(`image/png`) : null),
        }),
      console.info(
        `[init] districts:shimbashi ${g.pieces.length} pieces, ${v} market shops, ${_} ガード下 bays, ${$.stats.tris} tris, atlas ${f} (${u.used}/3072 used, ${u.overflow} overflow), ${D} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== sn) throw e;
  } finally {
    nn = !1;
  }
}
function un(e, t, n, r, i, a, o) {
  try {
    let s = e.peds.crowd(t, n, r, i, a, o);
    return typeof s == `function` ? s : null;
  } catch {
    return null;
  }
}
function dn(e, t) {
  cn = [];
  let n = (e, t, n, r) =>
    cn.push({ x: e, z: t, on: !1, release: null, want: n, spawn: r });
  for (let [e, t] of [
    [385, 420],
    [385, 520],
    [g.monzeki.x0 + 1.5, 430],
    [g.higashi.x0 + 1.5, 420],
    [400, 488],
  ])
    n(
      e,
      t,
      (e, t) => t.mkt,
      (n) =>
        un(
          n,
          e,
          t,
          9,
          8,
          [`tourist`, `tourist`, `auntie`, `vendor`, `elder`, `office`],
          { mode: `mill` },
        ),
    );
  let r = t.flatMap((e) => e.units).find((e) => e.special === `horumon`);
  if (r) {
    let e = (r.z0 + r.z1) / 2,
      t = r.x1 + 2;
    n(
      t,
      e + 5,
      (e, t) => t.mkt && e >= 6.5 && e < 13.5,
      (n) =>
        un(n, t, e + 5, 1.2, 7, [`office`, `tourist`, `uncle`, `vendor`], {
          mode: `queue`,
          lookX: r.x1 + 0.9,
          lookZ: e,
        }),
    );
  }
  n(
    g.sushi.x - 2,
    g.sushi.z - 2.2,
    () => !0,
    (e) =>
      un(
        e,
        g.sushi.x - 3,
        g.sushi.z - 2.4,
        1,
        4,
        [`tourist`, `tourist`, `office`],
        { mode: `queue`, lookX: g.sushi.x - 2, lookZ: g.sushi.z + 0.4 },
      ),
  );
  let i = kt(e);
  for (let e = 0; e < i.length; e += 2) {
    let t = i[e];
    n(
      t.x,
      t.z,
      (e, t) => t.gado && (e >= 17.5 || e < 0.5),
      (e) =>
        un(e, t.x, t.z, 0.9, 3, [`office`, `office`, `uncle`], {
          mode: `watch`,
          lookX: t.x - t.fx * 2,
          lookZ: t.z - t.fz * 2,
          poses: [`chat`, `idle`, `phone`],
        }),
    );
  }
  (n(
    k.x1 + 1.2,
    (k.z0 + k.z1) / 2,
    (e, t) => t.kosho,
    (e) =>
      un(
        e,
        k.x1 + 1.3,
        (k.z0 + k.z1) / 2,
        2.5,
        7,
        [`elder`, `office`, `uncle`, `student`],
        {
          mode: `watch`,
          lookX: k.x0,
          lookZ: (k.z0 + k.z1) / 2,
          poses: [`idle`, `look_up`],
        },
      ),
  ),
    n(
      A.subject.x,
      A.subject.z,
      (e, t) => t.crew,
      (e) => fn(e),
    ));
}
function fn(e) {
  let t = e.peds.spawnScripted;
  if (!t) return null;
  let n = (e, t, n, r) => Math.atan2(n - e, -(r - t)),
    r = A.subject,
    i = A.reporter,
    a = A.camera,
    o = [];
  try {
    (o.push(
      t.call(e.peds, r.x, r.z, {
        kind: `office`,
        pose: `chat`,
        heading: n(r.x, r.z, i.x, i.z),
      }),
    ),
      o.push(
        t.call(e.peds, i.x, i.z, {
          kind: `office`,
          pose: `chat`,
          heading: n(i.x, i.z, r.x, r.z),
        }),
      ),
      o.push(
        t.call(e.peds, a.x - 0.55, a.z + 0.35, {
          kind: `delivery`,
          pose: `film`,
          heading: n(a.x, a.z, r.x, r.z),
        }),
      ),
      o.push(
        t.call(e.peds, r.x + 1.3, r.z - 0.6, {
          kind: `office`,
          pose: `idle`,
          heading: n(r.x + 1.3, r.z - 0.6, a.x, a.z),
        }),
      ),
      o.push(
        t.call(e.peds, r.x + 1.9, r.z + 0.5, {
          kind: `office`,
          pose: `phone`,
          heading: n(r.x + 1.9, r.z + 0.5, a.x, a.z),
        }),
      ));
  } catch {}
  return () => {
    for (let e of o)
      try {
        e?.release();
      } catch {}
  };
}
function pn(e) {
  ((an = -1), (on = -1));
}
function mn(e, n) {
  let r = $;
  if (!r) return;
  let i = n.camera.position;
  r.batch.regather(i.x, i.z, 1, 8);
  let a = n.time.elapsed;
  if (a - an < 1) return;
  an = a;
  let o = n.env?.hour ?? 12,
    s = ee(n);
  s.tick();
  let c = s.shop(`seafood-don`, `shimbashi`),
    l = s.shop(`yakitori`, `shimbashi`),
    d = {
      mkt: c === re.OPEN || c === re.PREP,
      gado: l === re.OPEN,
      crew: !s.state.day.off && o >= A.hours[0] && o < A.hours[1],
      kosho:
        o >= k.hours[0] &&
        o < k.hours[1] &&
        k.runs.some(
          ([e, t, n]) =>
            s.state.day.m === e && s.state.day.d >= t && s.state.day.d <= n,
        ),
    },
    f = [
      [`mktOpen`, d.mkt],
      [`mktClosed`, !d.mkt],
      [`gadoOpen`, d.gado],
      [`gadoClosed`, !d.gado],
      [`crew`, d.crew],
      [`kosho`, d.kosho],
    ];
  for (let [e, t] of f)
    if (r.state.get(e) !== t) {
      r.state.set(e, t);
      for (let n of r.groups.get(e) ?? []) r.batch.setOn(n, t);
    }
  let p = n.player.position;
  for (let e of cn) {
    let t = Math.hypot(p.x - e.x, p.z - e.z) < 130 && e.want(o, d);
    if (t && !e.on) ((e.release = e.spawn(n)), (e.on = !0));
    else if (!t && e.on) {
      try {
        e.release?.();
      } catch {}
      ((e.release = null), (e.on = !1));
    }
  }
  if (!d.mkt && (o >= 19.5 || o < 5) && Math.hypot(p.x - 385, p.z - 470) < 220)
    try {
      (n.peds.thin?.(385, 432, 34, 3), n.peds.thin?.(385, 520, 26, 3));
    } catch {}
  let m = Math.floor(o);
  if (
    on >= 0 &&
    m !== on &&
    (m === 12 || m === 15 || m === 18) &&
    Math.hypot(p.x - u.x, p.z - u.z) < 160
  ) {
    let e = b(`shim.sl.whistle`);
    n.events.emit(`subtitle`, {
      text: {
        zh: t.on
          ? t.t(`（SL汽笛）${e.zh ?? ``}`, `（SLの汽笛）${t.jz(e.zh ?? ``)}`)
          : `（SL汽笛）${e.zh ?? ``}`,
        en: `(SL whistle) ${e.en ?? ``}`,
      },
      duration: 3,
    });
  }
  on = m;
}
function hn(e) {
  rn = !0;
  for (let e of cn)
    try {
      e.release?.();
    } catch {}
  cn = [];
  let t = $;
  (($ = null),
    (an = -1),
    (on = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
function gn() {
  return !1;
}
export { tn as t };
