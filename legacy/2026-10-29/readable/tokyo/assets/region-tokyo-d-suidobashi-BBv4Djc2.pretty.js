import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-DY7SMsVw.js";
import { d as n, g as r, h as i, j as a } from "./three-x0mFGRTI.js";
import {
  B as o,
  V as s,
  fn as c,
  ln as l,
  on as u,
  un as d,
  wr as f,
  wt as p,
  z as m,
} from "./engine-wUBYs8Z3.js";
import {
  Dn as h,
  On as g,
  an as _,
  fn as v,
  hn as y,
  in as b,
  pn as x,
  wn as S,
} from "./region-tokyo-55J_WESF.js";
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
        [n, r] = c(e, t);
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
      let a = l(n, { mipmaps: !0, anisotropy: 4 });
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
function ae(e, t, n, r, i, a, o, s, c, l = !1, u = 0.6, d, f = !0) {
  ((t -= u),
    (r += u),
    (n -= u),
    (i += u),
    f && O(e, t, n, r, i, a - 0.02, d ?? c, !0));
  let p = (t + r) / 2,
    m = (n + i) / 2,
    h = a + o;
  if (s === `x`) {
    let o = l ? Math.min((i - n) / 2, (r - t) / 2 - 0.1) : 0,
      s = t + o,
      f = r - o;
    (e.quad(t, a, i, r, a, i, f, h, m, s, h, m, c.u0, c.v0, c.u1, c.v1),
      e.quad(r, a, n, t, a, n, s, h, m, f, h, m, c.u0, c.v0, c.u1, c.v1),
      l
        ? (N(e, t, a, n, t, a, i, s, h, m, c),
          N(e, r, a, i, r, a, n, f, h, m, c))
        : d &&
          (N(e, t + u, a, n + u, t + u, a, i - u, t + u, h, m, d),
          N(e, r - u, a, i - u, r - u, a, n + u, r - u, h, m, d)));
  } else {
    let o = l ? Math.min((r - t) / 2, (i - n) / 2 - 0.1) : 0,
      s = n + o,
      f = i - o;
    (e.quad(r, a, i, r, a, n, p, h, s, p, h, f, c.u0, c.v0, c.u1, c.v1),
      e.quad(t, a, n, t, a, i, p, h, f, p, h, s, c.u0, c.v0, c.u1, c.v1),
      l
        ? (N(e, r, a, n, t, a, n, p, h, s, c),
          N(e, t, a, i, r, a, i, p, h, f, c))
        : d &&
          (N(e, r - u, a, n + u, t + u, a, n + u, p, h, n + u, d),
          N(e, t + u, a, i - u, r - u, a, i - u, p, h, i - u, d)));
  }
}
function N(e, t, n, r, i, a, o, s, c, l, u) {
  let d = i - t,
    f = a - n,
    p = o - r,
    m = s - t,
    h = c - n,
    g = l - r,
    _ = f * g - p * h,
    v = p * m - d * g,
    y = d * h - f * m,
    b = Math.hypot(_, v, y) || 1;
  ((_ /= b), (v /= b), (y /= b));
  let x = e.vertex(t, n, r, _, v, y, u.u0, u.v0),
    S = e.vertex(i, a, o, _, v, y, u.u1, u.v0),
    C = e.vertex(s, c, l, _, v, y, (u.u0 + u.u1) / 2, u.v1);
  e.tri(x, S, C);
}
var oe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] };
function P(e, t) {
  let [n, r] = oe[t],
    i = r,
    a = -n;
  return {
    ox: n ? (n > 0 ? e.x1 : e.x0) : i > 0 ? e.x0 : e.x1,
    oz: r ? (r > 0 ? e.z1 : e.z0) : a > 0 ? e.z0 : e.z1,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: n ? e.z1 - e.z0 : e.x1 - e.x0,
  };
}
function F(e, t, n) {
  return [e.ox + e.tx * t + e.nx * n, e.oz + e.tz * t + e.nz * n];
}
function I(e, t, n, r, i, a, o, s) {
  let [c, l] = F(t, n, o),
    [u, d] = F(t, r, o);
  D(e, c, l, u, d, i, a, s);
}
function se(e, t, n, r, i, a, o = 1) {
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
var L = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  R = (e) => b(e),
  ce = (e, t) => _(e, t);
function z(e, t, n, r, i, a, o = 1) {
  ((e.globalAlpha = o),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1));
}
function B(e, t, n, r, i, a, o) {
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
function le(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function V(e, t, n, r, i, a, o, s = `900`, c = v()) {
  let l = le(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function H(e, t, n, r, i, a, o, s = v(), c = `900`) {
  ((e.globalAlpha = 1), y(e, t, n, r, i, a, o, s, c));
}
var ue = (...e) => new o(s(`street-paint`, ...e)),
  U = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.style ?? `lit`}`;
function de(e) {
  return (t, n, r, i, a) => {
    let o = e.style ?? `lit`,
      s = e.serif || o === `wood` ? x() : v(),
      c = e.floor === void 0 ? R(e.main) : ce(e.main, { n: e.floor });
    (o === `wood`
      ? (ve(t, n, r, i, a, e.bg, `h`),
        (t.strokeStyle = `#1a120a`),
        (t.lineWidth = a * 0.06),
        t.strokeRect(n + a * 0.06, r + a * 0.06, i - a * 0.12, a - a * 0.12))
      : o === `enamel`
        ? z(t, n, r, i, a, e.bg)
        : B(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o === `lit`
          ? B(t, n, r + a * 0.86, i, a * 0.14, e.acc, 0.6)
          : z(t, n, r + a * 0.86, i, a * 0.14, e.acc)),
      e.sub
        ? (V(
            t,
            c,
            n + i * 0.36,
            r + a * 0.45,
            i * 0.64,
            a * 0.7,
            e.fg,
            `900`,
            s,
          ),
          V(
            t,
            R(e.sub),
            n + i * 0.84,
            r + a * 0.45,
            i * 0.28,
            a * 0.36,
            e.fg,
            `700`,
            s,
          ))
        : V(t, c, n + i / 2, r + a * 0.45, i * 0.9, a * 0.72, e.fg, `900`, s));
  };
}
var fe = (e) =>
  `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}|${e.style ?? `lit`}`;
function pe(e) {
  return (t, n, r, i, a) => {
    let o = e.style === `wood`;
    (o ? ve(t, n, r, i, a, e.bg, `v`) : B(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o
          ? (z(t, n, r, i, a * 0.03, e.acc),
            z(t, n, r + a * 0.97, i, a * 0.03, e.acc))
          : (B(t, n, r, i, a * 0.03, e.acc, 0.6),
            B(t, n, r + a * 0.97, i, a * 0.03, e.acc, 0.6))));
    let s = r + a * 0.05;
    (e.top &&
      (V(t, R(e.top), n + i / 2, r + a * 0.07, i * 0.86, a * 0.06, e.fg, `800`),
      (s = r + a * 0.13)),
      H(
        t,
        R(e.main),
        n + i / 2,
        s,
        r + a * 0.95,
        i * 0.74,
        e.fg,
        o ? x() : v(),
      ));
  };
}
function me(e, t, n, r = `#ffffff`) {
  return (i, a, o, s, c) => {
    (z(i, a, o, s, c, t), z(i, a, o, s, c * 0.06, r));
    for (let e = 0; e < 6; e++)
      z(i, a + s * 0.06 + (e * s) / 6, o + c * 0.015, s * 0.06, c * 0.03, t);
    H(i, R(e), a + s / 2, o + c * 0.1, o + c * 0.95, s * 0.72, n);
  };
}
function he(e, t = `#d8281e`) {
  return (n, r, i, a, o) => {
    (B(n, r, i, a, o, `#1a1410`, 0.5),
      B(n, r + a * 0.05, i + o * 0.1, a * 0.9, o * 0.8, t, 0.62));
    for (let e = 1; e < 9; e++)
      z(
        n,
        r + a * 0.05,
        i + o * 0.1 + (e * o * 0.8) / 9,
        a * 0.9,
        o * 0.008,
        `rgba(60,0,0,0.5)`,
      );
    (z(n, r + a * 0.18, i, a * 0.64, o * 0.1, `#141414`),
      z(n, r + a * 0.18, i + o * 0.9, a * 0.64, o * 0.1, `#141414`));
    let s = R(e);
    s.length <= 1
      ? V(
          n,
          s,
          r + a / 2,
          i + o * 0.5,
          a * 0.7,
          o * 0.56,
          `#121010`,
          `900`,
          x(),
        )
      : H(n, s, r + a / 2, i + o * 0.16, i + o * 0.84, a * 0.5, `#121010`, x());
  };
}
function ge(e, t, n, r = 3) {
  return (i, a, o, s, c) => {
    let l = s / r;
    for (let e = 0; e < r; e++)
      (z(i, a + e * l + 1, o, l - 2, c, t),
        z(i, a + e * l + 1, o, l - 2, c * 0.08, `rgba(0,0,0,0.25)`));
    let u = R(e),
      d = [...u];
    d.length <= r + 1
      ? d.forEach((e, t) =>
          V(
            i,
            e,
            a + (t + 0.5) * (s / d.length),
            o + c * 0.5,
            (s / d.length) * 0.8,
            c * 0.62,
            n,
            `900`,
            x(),
          ),
        )
      : V(i, u, a + s / 2, o + c * 0.5, s * 0.9, c * 0.5, n, `900`, x());
  };
}
function _e(e, t = !0) {
  return (n, r, i, a, o) => {
    (z(n, r, i, a, o, `#6a4a2a`),
      z(
        n,
        r + a * 0.06,
        i + o * 0.05,
        a * 0.88,
        o * 0.9,
        t ? `#1e2a24` : `#f4f2ec`,
      ));
    let s = e.length;
    e.forEach((e, c) => {
      let l = t
        ? [`#ffffff`, `#ffe066`, `#ff9a9a`, `#9adfff`][c % 4]
        : [`#c01818`, `#1a1a1a`, `#1a4aa8`][c % 3];
      V(
        n,
        R(e),
        r + a / 2,
        i + o * (0.14 + (0.78 * (c + 0.5)) / s),
        a * 0.8,
        (o * 0.7) / s,
        l,
        `800`,
      );
    });
  };
}
function ve(e, t, n, r, i, a, o) {
  z(e, t, n, r, i, a);
  let s = ue(`wood`, a, Math.round(r), Math.round(i));
  e.globalAlpha = 0.18;
  for (let a = 0; a < 40; a++)
    ((e.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
      o === `h`
        ? e.fillRect(t, n + s.next() * i, r, 1 + s.next() * 1.5)
        : e.fillRect(t + s.next() * r, n, 1 + s.next() * 1.5, i));
  e.globalAlpha = 1;
}
function ye(e) {
  return (t, n, r, i, a) => {
    ve(t, n, r, i, a, e, `v`);
    for (let e = n; e < n + i; e += i / 8) z(t, e, r, 2, a, `rgba(0,0,0,0.45)`);
  };
}
function be(e, t = `#a87e4a`, n = 24) {
  return (r, i, a, o, s) => {
    B(r, i, a, o, s, t, 1);
    let c = r.createLinearGradient(0, a, 0, a + s);
    (c.addColorStop(0, `rgba(255,230,180,0.25)`),
      c.addColorStop(1, `rgba(60,30,10,0.45)`),
      (r.fillStyle = c),
      r.fillRect(i, a, o, s));
    let l = o / n;
    for (let t = 0; t < n; t++) B(r, i + t * l, a, l * 0.58, s, e, 0);
    (B(r, i, a, o, s * 0.05, e, 0),
      B(r, i, a + s * 0.48, o, s * 0.03, e, 0),
      B(r, i, a + s * 0.95, o, s * 0.05, e, 0));
  };
}
function xe(e = `#5c6064`) {
  return (t, n, r, i, a) => {
    z(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 8)
      z(t, n, e, i, a * 0.02, `rgba(0,0,0,0.35)`);
    for (let e = n; e < n + i; e += i / 12)
      (z(t, e, r, i / 24, a, `rgba(255,255,255,0.08)`),
        z(t, e + i / 24, r, 1.5, a, `rgba(0,0,0,0.3)`));
  };
}
function Se(e, t) {
  return (n, r, i, a, o) => {
    let s = ue(`wall`, e, t);
    if ((z(n, r, i, a, o, t), e === `tile`)) {
      for (let e = i; e < i + o; e += 5) z(n, r, e, a, 1, `rgba(0,0,0,0.10)`);
      for (let e = i, t = 0; e < i + o; e += 5, t++)
        for (let i = r + (t % 2) * 6; i < r + a; i += 12)
          z(n, i, e, 1, 5, `rgba(0,0,0,0.07)`);
    } else if (e === `alc`)
      for (let e = i; e < i + o; e += o / 6)
        z(n, r, e, a, 1.5, `rgba(0,0,0,0.12)`);
    else if (e === `ivy`) {
      for (let e = i, t = 0; e < i + o; e += 6, t++)
        z(n, r, e + 5, a, 1, `rgba(200,180,160,0.6)`);
      Me(n, r, i, a, o, s, 0.86);
    } else if (e === `boards`) {
      for (let e = i; e < i + o; e += 5)
        (z(n, r, e, a, 1.2, `rgba(0,0,0,0.32)`),
          z(n, r, e + 1.2, a, 0.8, `rgba(255,255,255,0.06)`));
      for (let e = r + 20; e < r + a; e += 21)
        z(n, e, i, 1.5, o, `rgba(0,0,0,0.25)`);
    } else if (e === `mortar`) {
      n.globalAlpha = 0.08;
      for (let e = 0; e < 120; e++)
        ((n.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
          n.fillRect(
            r + s.next() * a,
            i + s.next() * o,
            1 + s.next() * 3,
            1 + s.next() * 3,
          ));
      n.globalAlpha = 1;
    } else if (e === `brick`)
      for (let e = i, t = 0; e < i + o; e += 6, t++) {
        z(n, r, e + 5, a, 1, `rgba(220,210,190,0.8)`);
        for (let i = r + (t % 2 ? 0 : 7); i < r + a; i += 14)
          z(n, i, e, 1, 5, `rgba(220,210,190,0.8)`);
      }
    n.globalAlpha = 0.06;
    for (let e = 0; e < 18; e++)
      ((n.fillStyle = `#000000`),
        n.fillRect(
          r + s.next() * a,
          i + s.next() * o * 0.6,
          1 + s.next() * 2,
          o * (0.1 + s.next() * 0.4),
        ));
    n.globalAlpha = 1;
  };
}
function Ce(e, t, n = `#ffffff`) {
  return (r, i, a, o, s) => {
    let c = o / 4;
    z(r, i, a, o, s, `#2a2c30`);
    for (let t = 0; t < 4; t++) {
      let n = i + t * c + c * 0.07,
        o = a + s * 0.07,
        l = c * 0.86,
        u = s * 0.86,
        d =
          e === `dark`
            ? `#55606c`
            : e === `office`
              ? `#9aa6b0`
              : e === `warm`
                ? `#e8d4a8`
                : `#c4c8c4`,
        f =
          e === `dark`
            ? `#1c242c`
            : e === `office`
              ? `#4a545c`
              : e === `warm`
                ? `#a07848`
                : `#80847f`,
        p = r.createLinearGradient(0, o, 0, o + u);
      if (
        (p.addColorStop(0, d),
        p.addColorStop(1, f),
        (r.globalAlpha = 1),
        (r.fillStyle = p),
        r.fillRect(n, o, l, u),
        e === `office`)
      )
        for (let e = o; e < o + u; e += u / 10)
          z(r, n, e, l, u * 0.02, `rgba(0,0,0,0.22)`);
      z(r, n + l * 0.1, o, l * 0.1, u, `rgba(255,255,255,0.14)`);
    }
    t && V(r, t, i + o / 2, a + s * 0.48, o * 0.48, s * 0.3, n, `900`);
  };
}
function we(e, t = 0) {
  return (n, r, i, a, o) => {
    let s = ue(`shop`, e, t);
    z(
      n,
      r,
      i,
      a,
      o,
      {
        guitar: `#3a2a20`,
        acoustic: `#5a4030`,
        drum: `#2a2a30`,
        wind: `#2a2018`,
        records: `#e8e0d0`,
        artsupply: `#f2f0ea`,
        kissa: `#3a2618`,
        ski: `#e8ecf0`,
        golf: `#e4ece4`,
        outdoor: `#e8e4dc`,
        books: `#5a4630`,
        curry: `#f0dca0`,
        izakaya: `#5a3a20`,
        tachinomi: `#6a4a28`,
        yakitori: `#4a3020`,
        soba: `#e8dcc0`,
        kanmi: `#e8dcc4`,
        nabe: `#d8c8a0`,
        lobby: `#c8ccd0`,
        cafe: `#e0d0b8`,
        shutter: `#9ca0a4`,
        ramen: `#e8d8b0`,
        teishoku: `#ece0c4`,
        ticket: `#f4f4f0`,
        sportsbar: `#2a2420`,
        copyshop: `#eef0f2`,
        bigbooks: `#f2efe6`,
        goods: `#e8eaee`,
        stationery: `#f2f0ea`,
        fruit: `#f6f0e0`,
        drug: `#f8f8f4`,
        konbini: `#f6f8f8`,
        gyudon: `#f0e2c0`,
        chinese: `#f0dcc0`,
        taiyaki: `#d8b888`,
        senbei: `#c8a878`,
        sakaya: `#b89a70`,
        realestate: `#f2f2ee`,
        beerhall: `#4a2e1a`,
        ukiyoe: `#3a2a1c`,
        pawn: `#d8d0c0`,
        gates: `#e8eaec`,
      }[e] ?? `#c0c0c0`,
    );
    let c = n.createLinearGradient(0, i, 0, i + o * 0.35);
    (c.addColorStop(0, `rgba(255,248,225,0.55)`),
      c.addColorStop(1, `rgba(255,248,225,0)`),
      (n.fillStyle = c),
      n.fillRect(r, i, a, o * 0.35));
    let l = i + o * 0.84;
    z(
      n,
      r,
      l,
      a,
      o - (l - i),
      e === `izakaya` ||
        e === `yakitori` ||
        e === `tachinomi` ||
        e === `kissa` ||
        e === `sportsbar` ||
        e === `beerhall` ||
        e === `ukiyoe`
        ? `#2a1a10`
        : `#8a8480`,
    );
    let u = [
      `#c01818`,
      `#f0f0f0`,
      `#101010`,
      `#e0a020`,
      `#2050c0`,
      `#f0d0a0`,
      `#60a0d0`,
      `#a03070`,
      `#40a050`,
      `#d06020`,
    ];
    switch (e) {
      case `guitar`:
      case `acoustic`: {
        z(
          n,
          r,
          i + o * 0.06,
          a,
          o * 0.78,
          e === `guitar` ? `#3e2e22` : `#5e4632`,
        );
        for (let e = i + o * 0.08; e < i + o * 0.84; e += o * 0.045)
          z(n, r, e, a, 1, `rgba(0,0,0,0.25)`);
        let t =
          e === `acoustic`
            ? [`#d8a860`, `#c08840`, `#8a5a2a`, `#e8c890`, `#6a3a1a`]
            : [
                `#c01818`,
                `#f2f2ee`,
                `#101010`,
                `#e0a020`,
                `#2050c0`,
                `#d07030`,
                `#60a0d0`,
                `#7a1a2a`,
                `#3a8a5a`,
                `#c8a050`,
              ];
        for (let c = 0; c < 2; c++)
          for (let l = 0; l < 13; l++) {
            let u = r + a * (0.04 + (0.92 / 12) * l) + (c ? a * 0.018 : 0),
              d = i + o * (0.08 + c * 0.38),
              f = o * 0.21,
              p = a * 0.021,
              m = t[s.int(0, t.length - 1)];
            (z(n, u - p * 0.25, d, p * 0.5, o * 0.035, `#1a1410`),
              z(n, u - p * 0.14, d + o * 0.03, p * 0.28, o * 0.12, `#6a4a2a`));
            let h = d + o * 0.15;
            ((n.fillStyle = `#0c0a08`),
              n.beginPath(),
              n.ellipse(u, h + f * 0.62, p * 1.12, f * 0.42, 0, 0, Math.PI * 2),
              n.ellipse(u, h + f * 0.22, p * 0.86, f * 0.3, 0, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = m),
              n.beginPath(),
              n.ellipse(u, h + f * 0.62, p, f * 0.38, 0, 0, Math.PI * 2),
              n.ellipse(u, h + f * 0.22, p * 0.76, f * 0.26, 0, 0, Math.PI * 2),
              n.fill(),
              e === `acoustic`
                ? ((n.fillStyle = `#140a04`),
                  n.beginPath(),
                  n.arc(u, h + f * 0.4, p * 0.3, 0, Math.PI * 2),
                  n.fill())
                : (z(
                    n,
                    u - p * 0.5,
                    h + f * 0.45,
                    p * 0.55,
                    f * 0.3,
                    m === `#f2f2ee` ? `#202020` : `#f0f0ea`,
                  ),
                  z(n, u - p * 0.3, h + f * 0.5, p * 0.6, f * 0.04, `#d0d0d0`)),
              z(n, u + p * 0.6, h + f * 0.9, p * 0.9, o * 0.035, `#ffe040`));
          }
        for (let e = 0; e < 6; e++)
          (z(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.7,
            a * 0.11,
            o * 0.14,
            `#141414`,
          ),
            z(
              n,
              r + a * (0.06 + e * 0.16),
              i + o * 0.715,
              a * 0.09,
              o * 0.025,
              `#c8b07a`,
            ));
        break;
      }
      case `drum`:
        for (let e = 0; e < 4; e++) {
          let i = r + a * (0.14 + e * 0.24),
            s = l;
          ((n.fillStyle = u[(e * 3 + t) % 10]),
            n.beginPath(),
            n.ellipse(i, s - o * 0.14, a * 0.06, o * 0.13, 0, 0, Math.PI * 2),
            n.fill(),
            z(n, i - a * 0.09, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            z(n, i + a * 0.05, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            z(n, i - a * 0.11, s - o * 0.46, a * 0.07, o * 0.015, `#e0b040`),
            z(n, i + a * 0.06, s - o * 0.5, a * 0.07, o * 0.015, `#e0b040`));
        }
        for (let e = 0; e < 14; e++)
          z(
            n,
            r + a * (0.03 + e * 0.07),
            i + o * 0.12,
            a * 0.04,
            o * 0.18,
            `#b8b0a0`,
          );
        break;
      case `wind`:
        z(n, r, i + o * 0.1, a, o * 0.7, `#1a1410`);
        for (let e = 0; e < 9; e++) {
          let t = r + a * (0.07 + e * 0.105),
            s = i + o * (0.3 + (e % 2) * 0.25);
          ((n.fillStyle = e % 3 == 2 ? `#c0c0c8` : `#e0b040`),
            n.beginPath(),
            n.arc(t, s, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            z(n, t - 1.5, s - o * 0.2, 3, o * 0.2, n.fillStyle));
        }
        for (let e = 0; e < 9; e++)
          z(
            n,
            r + a * (0.05 + e * 0.105),
            i + o * 0.62,
            a * 0.08,
            o * 0.14,
            `#3a3028`,
          );
        break;
      case `records`:
        for (let e = 0; e < 6; e++)
          z(
            n,
            r + a * (0.03 + e * 0.16),
            i + o * 0.56,
            a * 0.14,
            o * 0.28,
            `#6a5a48`,
          );
        for (let e = 0; e < 24; e++)
          z(
            n,
            r + a * (0.03 + (e % 12) * 0.08),
            i + o * (0.12 + Math.floor(e / 12) * 0.2),
            a * 0.065,
            o * 0.16,
            u[s.int(0, 9)],
          );
        break;
      case `artsupply`:
        for (let e = 0; e < 4; e++)
          for (let t = 0; t < 24; t++)
            z(
              n,
              r + a * (0.02 + t * 0.04),
              i + o * (0.12 + e * 0.16),
              a * 0.03,
              o * 0.12,
              u[s.int(0, 9)],
            );
        z(n, r + a * 0.1, i + o * 0.72, a * 0.8, o * 0.12, `#c0a880`);
        break;
      case `kissa`:
      case `cafe`:
        for (let e = 0; e < 4; e++) {
          let t = r + a * (0.14 + e * 0.24);
          ((n.fillStyle = `rgba(255,200,120,0.9)`),
            n.beginPath(),
            n.arc(t, i + o * 0.2, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            z(n, t - a * 0.06, i + o * 0.62, a * 0.12, o * 0.04, `#5a3a20`),
            z(n, t - a * 0.09, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`),
            z(n, t + a * 0.06, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`));
        }
        break;
      case `ski`:
      case `outdoor`:
      case `golf`: {
        let t = e === `golf` ? 18 : 22;
        for (let c = 0; c < t; c++) {
          let l = r + a * (0.03 + (0.94 / t) * c),
            d = e === `golf` ? (c % 2 ? `#202020` : `#e0e0e0`) : u[s.int(0, 9)];
          z(
            n,
            l,
            i + o * (e === `golf` ? 0.42 : 0.14),
            a * (e === `golf` ? 0.025 : 0.022),
            o * (e === `golf` ? 0.42 : 0.66),
            d,
          );
        }
        for (let e = 0; e < 3; e++) {
          let t = r + a * (0.2 + e * 0.3);
          (z(
            n,
            t - a * 0.035,
            i + o * 0.3,
            a * 0.07,
            o * 0.3,
            u[(e * 4 + 1) % 10],
          ),
            z(n, t - a * 0.015, i + o * 0.2, a * 0.03, o * 0.09, `#e8d0b0`),
            z(n, t - a * 0.03, i + o * 0.6, a * 0.025, o * 0.24, `#202830`),
            z(n, t + a * 0.005, i + o * 0.6, a * 0.025, o * 0.24, `#202830`));
        }
        break;
      }
      case `books`:
        for (let e = 0; e < 5; e++) {
          let t = r + a * 0.02;
          for (; t < r + a * 0.98;) {
            let r = a * (0.008 + s.next() * 0.014);
            (z(
              n,
              t,
              i + o * (0.08 + e * 0.15),
              r - 0.6,
              o * (0.12 + s.next() * 0.02),
              [
                `#6a4a2a`,
                `#8a6a40`,
                `#3a2a1a`,
                `#a08050`,
                `#5a3020`,
                `#2a3a4a`,
                `#c0a070`,
                `#7a2a1a`,
              ][s.int(0, 7)],
            ),
              (t += r));
          }
          z(n, r, i + o * (0.205 + e * 0.15), a, o * 0.012, `#2a1a0a`);
        }
        z(n, r + a * 0.4, i + o * 0.66, a * 0.2, o * 0.18, `#3a2410`);
        break;
      case `curry`:
        (z(n, r, i + o * 0.56, a, o * 0.06, `#c08040`),
          z(n, r, i + o * 0.62, a, o * 0.22, `#7a4a20`));
        for (let e = 0; e < 7; e++)
          z(
            n,
            r + a * (0.06 + e * 0.13),
            i + o * 0.46,
            a * 0.03,
            o * 0.38,
            `#3a2a1a`,
          );
        for (let e = 0; e < 6; e++)
          z(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.12,
            a * 0.12,
            o * 0.1,
            `#fff8e0`,
          );
        break;
      case `izakaya`:
      case `yakitori`:
      case `tachinomi`:
        for (let e = 0; e < 16; e++)
          z(
            n,
            r + a * (0.03 + e * 0.06),
            i + o * 0.1,
            a * 0.04,
            o * 0.18,
            `#f4ecd8`,
          );
        for (let e = 0; e < 16; e++)
          z(
            n,
            r + a * (0.035 + e * 0.06),
            i + o * 0.12,
            a * 0.03,
            o * 0.008,
            `#202020`,
          );
        for (let e = 0; e < 26; e++)
          z(
            n,
            r + a * (0.03 + e * 0.036),
            i + o * 0.34,
            a * 0.016,
            o * 0.12,
            [`#2a6a2a`, `#8a5a1a`, `#f0f0e0`, `#1a1a1a`, `#5a1a1a`][
              s.int(0, 4)
            ],
          );
        if (
          (z(n, r, i + o * 0.48, a, o * 0.04, `#3a2410`),
          z(
            n,
            r,
            i + o * 0.58,
            a,
            o * 0.06,
            e === `tachinomi` ? `#c09060` : `#8a5a30`,
          ),
          e === `yakitori`)
        ) {
          (z(n, r + a * 0.3, i + o * 0.5, a * 0.4, o * 0.08, `#2a2a2a`),
            (n.globalAlpha = 0.35),
            (n.fillStyle = `#e8e8e8`));
          for (let e = 0; e < 6; e++)
            (n.beginPath(),
              n.arc(
                r + a * (0.35 + e * 0.06),
                i + o * (0.38 - (e % 2) * 0.06),
                a * 0.05,
                0,
                Math.PI * 2,
              ),
              n.fill());
          n.globalAlpha = 1;
        }
        for (let e = 0; e < 4; e++) {
          let t = r + a * (0.15 + e * 0.22 + s.next() * 0.05);
          (z(
            n,
            t - a * 0.035,
            i + o * 0.56,
            a * 0.07,
            o * 0.28,
            [`#2a2e38`, `#3a3a3a`, `#1e2430`, `#4a4a50`][e],
          ),
            (n.fillStyle = `#1a1410`),
            n.beginPath(),
            n.arc(t, i + o * 0.52, a * 0.025, 0, Math.PI * 2),
            n.fill());
        }
        break;
      case `soba`:
      case `kanmi`:
      case `nabe`:
        for (let e = 0; e < 6; e++)
          z(
            n,
            r + a * (0.04 + e * 0.16),
            i + o * 0.1,
            a * 0.12,
            o * 0.16,
            `#2a1a0a`,
          );
        for (let e = 0; e < 6; e++)
          z(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.12,
            a * 0.1,
            o * 0.12,
            `#f0e6cc`,
          );
        z(n, r, i + o * 0.66, a * 0.45, o * 0.18, `#c8b878`);
        for (let e = 0; e < 3; e++)
          z(
            n,
            r + a * (0.52 + e * 0.16),
            i + o * 0.58,
            a * 0.12,
            o * 0.05,
            `#5a3a1a`,
          );
        break;
      case `lobby`:
        (z(n, r, i + o * 0.84, a, o * 0.16, `#b8b4ac`),
          z(n, r + a * 0.38, i + o * 0.24, a * 0.2, o * 0.6, `#9aa0a8`),
          z(n, r + a * 0.475, i + o * 0.24, a * 0.01, o * 0.6, `#6a7078`),
          z(n, r + a * 0.44, i + o * 0.16, a * 0.08, o * 0.05, `#2a2a2a`),
          z(n, r + a * 0.455, i + o * 0.175, a * 0.05, o * 0.02, `#ff8a3a`));
        for (let e = 0; e < 5; e++)
          for (let t = 0; t < 6; t++)
            z(
              n,
              r + a * (0.05 + t * 0.045),
              i + o * (0.3 + e * 0.08),
              a * 0.04,
              o * 0.07,
              `#c8ccd0`,
            );
        (z(n, r + a * 0.66, i + o * 0.42, a * 0.05, o * 0.1, `#3a3a3a`),
          z(n, r + a * 0.85, i + o * 0.6, a * 0.06, o * 0.24, `#6a4a2a`),
          (n.fillStyle = `#3a6a30`),
          n.beginPath(),
          n.arc(r + a * 0.88, i + o * 0.52, a * 0.05, 0, Math.PI * 2),
          n.fill());
        break;
      case `shutter`:
        for (let e = i; e < i + o; e += o / 24)
          z(n, r, e, a, o * 0.012, `rgba(0,0,0,0.25)`);
        break;
      default:
        Ae(n, e, r, i, a, o, l, s, u);
    }
    ((n.globalAlpha = 0.1),
      (n.fillStyle = `#ffffff`),
      n.beginPath(),
      n.moveTo(r + a * 0.1, i),
      n.lineTo(r + a * 0.22, i),
      n.lineTo(r + a * 0.12, i + o),
      n.lineTo(r, i + o),
      n.fill(),
      (n.globalAlpha = 1));
  };
}
function Te(e = `#a8acb0`) {
  return (t, n, r, i, a) => {
    z(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 16)
      z(t, n, e, i, a * 0.02, `rgba(0,0,0,0.25)`);
    z(t, n, r + a * 0.94, i, a * 0.06, `#606468`);
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    let o = ue(`wagon`, e);
    z(t, n, r, i, a, `#5a3a1a`);
    for (let e = 0; e < 3; e++) {
      let s = n + 2;
      for (; s < n + i - 2;) {
        let n = 2 + o.next() * 4;
        (z(
          t,
          s,
          r + 3 + (a / 3) * e,
          n - 0.6,
          a / 3 - 5,
          [
            `#d8c8a0`,
            `#a06030`,
            `#304060`,
            `#e8e0d0`,
            `#6a2a1a`,
            `#c09050`,
            `#f0f0f0`,
          ][o.int(0, 6)],
        ),
          (s += n));
      }
    }
  };
}
function De(e) {
  return (t, n, r, i, a) => {
    (z(t, n, r, i, a, `#fffef6`),
      (t.strokeStyle = `#c01818`),
      (t.lineWidth = 2),
      t.strokeRect(n + 2, r + 2, i - 4, a - 4),
      V(t, R(e), n + i / 2, r + a / 2, i * 0.88, a * 0.6, `#c01818`, `900`));
  };
}
function Oe(e, t = `#3e6a34`) {
  return (n, r, i, a, o) => {
    let s = ue(`leaves`, e);
    z(n, r, i, a, o, t);
    for (let e = 0; e < 260; e++)
      ((n.fillStyle = [`#2a4a24`, `#4e7e3e`, `#5e8e48`, `#345a2c`, `#6a9a50`][
        s.int(0, 4)
      ]),
        n.beginPath(),
        n.arc(
          r + s.next() * a,
          i + s.next() * o,
          2 + s.next() * 5,
          0,
          Math.PI * 2,
        ),
        n.fill());
  };
}
function ke(e, t, n, r, i = !1) {
  return (a, o, s, c, l) => {
    (z(a, o, s, c, l, t),
      (a.strokeStyle = n),
      (a.lineWidth = Math.max(1.5, l * 0.05)),
      a.strokeRect(o + l * 0.08, s + l * 0.08, c - l * 0.16, l - l * 0.16),
      r
        ? (V(
            a,
            R(e),
            o + c / 2,
            s + l * 0.4,
            c * 0.84,
            l * 0.42,
            n,
            `900`,
            i ? x() : v(),
          ),
          V(a, R(r), o + c / 2, s + l * 0.74, c * 0.8, l * 0.2, n, `700`))
        : V(
            a,
            R(e),
            o + c / 2,
            s + l * 0.5,
            c * 0.84,
            l * 0.56,
            n,
            `900`,
            i ? x() : v(),
          ));
  };
}
function Ae(e, t, n, r, i, a, o, s, c) {
  let l = (t, n, r) => {
    (z(e, t - i * 0.03, n, i * 0.06, o - n, r),
      (e.fillStyle = `#1a1410`),
      e.beginPath(),
      e.arc(t, n - a * 0.04, i * 0.022, 0, Math.PI * 2),
      e.fill());
  };
  switch (t) {
    case `ramen`:
    case `gyudon`:
    case `chinese`:
      for (let t = 0; t < 9; t++)
        z(
          e,
          n + i * (0.04 + t * 0.105),
          r + a * 0.1,
          i * 0.09,
          a * 0.12,
          t % 3 == 0 ? `#c01818` : `#f6eed8`,
        );
      for (let t = 0; t < 9; t++)
        z(
          e,
          n + i * (0.05 + t * 0.105),
          r + a * 0.13,
          i * 0.07,
          a * 0.06,
          [`#c8742a`, `#e0b060`, `#9a5a20`][t % 3],
        );
      (z(
        e,
        n,
        r + a * 0.5,
        i,
        a * 0.05,
        t === `chinese` ? `#a02018` : `#5a3a1a`,
      ),
        z(
          e,
          n,
          r + a * 0.55,
          i,
          a * 0.12,
          t === `gyudon` ? `#e8a020` : `#c8b088`,
        ));
      for (let t = 0; t < 7; t++)
        z(
          e,
          n + i * (0.12 + t * 0.12),
          r + a * 0.7,
          i * 0.04,
          a * 0.14,
          `#2a2a2a`,
        );
      for (let e = 0; e < 3; e++)
        l(
          n + i * (0.2 + e * 0.25 + s.next() * 0.05),
          r + a * 0.42,
          [`#2a2e38`, `#3a3a3a`, `#1e2430`][e],
        );
      z(e, n + i * 0.88, r + a * 0.28, i * 0.09, a * 0.56, `#d8dcdc`);
      for (let t = 0; t < 12; t++)
        z(
          e,
          n + i * (0.895 + (t % 3) * 0.025),
          r + a * (0.33 + Math.floor(t / 3) * 0.06),
          i * 0.02,
          a * 0.04,
          [`#ffe066`, `#ff8a6a`, `#9adfff`][t % 3],
        );
      ((e.globalAlpha = 0.3), (e.fillStyle = `#ffffff`));
      for (let t = 0; t < 5; t++)
        (e.beginPath(),
          e.arc(
            n + i * (0.4 + t * 0.05),
            r + a * (0.32 - (t % 2) * 0.05),
            i * 0.04,
            0,
            Math.PI * 2,
          ),
          e.fill());
      e.globalAlpha = 1;
      break;
    case `teishoku`:
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.03 + t * 0.068),
          r + a * 0.1,
          i * 0.05,
          a * 0.2,
          `#fffbe8`,
        );
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.045 + t * 0.068),
          r + a * 0.13,
          i * 0.02,
          a * 0.13,
          `#202020`,
        );
      (z(e, n + i * 0.82, r + a * 0.08, i * 0.14, a * 0.12, `#1a1a1a`),
        z(e, n + i * 0.83, r + a * 0.09, i * 0.12, a * 0.1, `#5a8ac0`));
      for (let t = 0; t < 4; t++)
        (z(
          e,
          n + i * (0.08 + t * 0.23),
          r + a * 0.6,
          i * 0.16,
          a * 0.04,
          `#8a5a30`,
        ),
          z(
            e,
            n + i * (0.1 + t * 0.23),
            r + a * 0.64,
            i * 0.02,
            a * 0.2,
            `#4a3020`,
          ),
          z(
            e,
            n + i * (0.2 + t * 0.23),
            r + a * 0.64,
            i * 0.02,
            a * 0.2,
            `#4a3020`,
          ));
      (l(n + i * 0.3, r + a * 0.48, `#3a4a6a`),
        l(n + i * 0.62, r + a * 0.5, `#5a3a3a`));
      break;
    case `ticket`:
      z(e, n, r, i, a, `#f6f6f2`);
      for (let t = 0; t < 6; t++) {
        let o = r + a * (0.06 + t * 0.085);
        z(e, n + i * 0.02, o + a * 0.072, i * 0.96, a * 0.006, `#c8c8c4`);
        for (let r = 0; r < 22; r++) {
          let s = n + i * (0.025 + r * 0.043);
          (z(e, s, o, i * 0.036, a * 0.066, `#ffffff`),
            z(
              e,
              s,
              o,
              i * 0.036,
              a * 0.016,
              [`#d01818`, `#1a4aa8`, `#1a8a3a`, `#e07a10`][(t + (r >> 2)) % 4],
            ),
            z(e, s + i * 0.004, o + a * 0.03, i * 0.026, a * 0.008, `#303030`),
            z(
              e,
              s + i * 0.004,
              o + a * 0.046,
              i * 0.018,
              a * 0.008,
              `#c01818`,
            ));
        }
      }
      z(e, n + i * 0.05, r + a * 0.62, i * 0.9, a * 0.22, `#d8e4e8`);
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.07 + t * 0.062),
          r + a * 0.66,
          i * 0.05,
          a * 0.1,
          [`#f0d0d0`, `#d0e0f0`, `#f4ecc0`][t % 3],
        );
      (z(e, n + i * 0.05, r + a * 0.61, i * 0.9, a * 0.015, `#9aa0a4`),
        l(n + i * 0.62, r + a * 0.42, `#2a3a5a`));
      break;
    case `sportsbar`:
      for (let t = 0; t < 3; t++) {
        let o = n + i * (0.06 + t * 0.32);
        (z(e, o, r + a * 0.08, i * 0.26, a * 0.26, `#101010`),
          z(e, o + i * 0.01, r + a * 0.095, i * 0.24, a * 0.23, `#2e8a3a`),
          (e.fillStyle = `#c8a070`),
          e.beginPath(),
          e.moveTo(o + i * 0.13, r + a * 0.15),
          e.lineTo(o + i * 0.19, r + a * 0.22),
          e.lineTo(o + i * 0.13, r + a * 0.3),
          e.lineTo(o + i * 0.07, r + a * 0.22),
          e.fill(),
          z(e, o + i * 0.02, r + a * 0.1, i * 0.07, a * 0.03, `#ffffff`));
      }
      for (let t = 0; t < 22; t++)
        z(
          e,
          n + i * (0.04 + t * 0.042),
          r + a * 0.38,
          i * 0.016,
          a * 0.1,
          [`#2a6a2a`, `#8a5a1a`, `#f0f0e0`, `#c01818`][s.int(0, 3)],
        );
      z(e, n, r + a * 0.56, i, a * 0.06, `#6a4424`);
      for (let e = 0; e < 5; e++)
        l(
          n + i * (0.12 + e * 0.18 + s.next() * 0.04),
          r + a * 0.5,
          [`#f0f0f0`, `#1a2a6a`, `#e86a10`, `#f0f0f0`, `#c01818`][e],
        );
      break;
    case `copyshop`:
      for (let t = 0; t < 5; t++)
        (z(
          e,
          n + i * (0.05 + t * 0.18),
          r + a * 0.5,
          i * 0.13,
          a * 0.34,
          `#e4e6e8`,
        ),
          z(
            e,
            n + i * (0.05 + t * 0.18),
            r + a * 0.46,
            i * 0.13,
            a * 0.05,
            `#9aa0a8`,
          ),
          z(
            e,
            n + i * (0.08 + t * 0.18),
            r + a * 0.52,
            i * 0.05,
            a * 0.03,
            `#40a0ff`,
          ));
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.04 + t * 0.16),
          r + a * 0.12,
          i * 0.12,
          a * 0.18,
          [`#ffe14a`, `#ffffff`, `#7ad0ff`][t % 3],
        );
      l(n + i * 0.3, r + a * 0.44, `#4a4a6a`);
      break;
    case `bigbooks`:
      for (let t = 0; t < 4; t++) {
        let o = n + i * 0.02;
        for (; o < n + i * 0.98;) {
          let n = i * (0.006 + s.next() * 0.01);
          (z(e, o, r + a * (0.1 + t * 0.12), n - 0.5, a * 0.1, c[s.int(0, 9)]),
            (o += n));
        }
        z(e, n, r + a * (0.2 + t * 0.12), i, a * 0.01, `#d8d0c0`);
      }
      for (let t = 0; t < 5; t++) {
        z(
          e,
          n + i * (0.05 + t * 0.19),
          r + a * 0.66,
          i * 0.15,
          a * 0.06,
          `#c8b898`,
        );
        for (let o = 0; o < 4; o++)
          z(
            e,
            n + i * (0.055 + t * 0.19 + o * 0.037),
            r + a * 0.6,
            i * 0.032,
            a * 0.06,
            c[s.int(0, 9)],
          );
      }
      (l(n + i * 0.42, r + a * 0.48, `#3a3a50`),
        l(n + i * 0.7, r + a * 0.5, `#6a4a3a`));
      break;
    case `goods`:
      (z(e, n, r, i, a, `#eceeef`),
        z(e, n, r + a * 0.1, i, a * 0.01, `#8a8e92`));
      for (let t = 0; t < 11; t++) {
        let o = n + i * (0.03 + t * 0.088),
          s = [
            `#f4f4f4`,
            `#1a2a6a`,
            `#e86a10`,
            `#101010`,
            `#c01818`,
            `#f4f4f4`,
            `#2a7a3a`,
          ][t % 7];
        ((e.fillStyle = s),
          e.beginPath(),
          e.moveTo(o, r + a * 0.13),
          e.lineTo(o + i * 0.072, r + a * 0.13),
          e.lineTo(o + i * 0.08, r + a * 0.2),
          e.lineTo(o + i * 0.066, r + a * 0.2),
          e.lineTo(o + i * 0.066, r + a * 0.38),
          e.lineTo(o + i * 0.006, r + a * 0.38),
          e.lineTo(o + i * 0.006, r + a * 0.2),
          e.lineTo(o - i * 0.008, r + a * 0.2),
          e.closePath(),
          e.fill(),
          V(
            e,
            String((t * 7 + 1) % 60),
            o + i * 0.036,
            r + a * 0.28,
            i * 0.04,
            a * 0.08,
            s === `#f4f4f4` ? `#1a2a6a` : `#ffffff`,
            `900`,
          ));
      }
      z(e, n + i * 0.02, r + a * 0.44, i * 0.5, a * 0.2, `#d8cbb0`);
      for (let t = 0; t < 2; t++)
        for (let o = 0; o < 9; o++)
          ((e.fillStyle = c[(o * 3 + t) % 10]),
            e.beginPath(),
            e.ellipse(
              n + i * (0.05 + o * 0.054),
              r + a * (0.5 + t * 0.08),
              i * 0.02,
              a * 0.025,
              0,
              Math.PI,
              0,
            ),
            e.fill());
      z(e, n + i * 0.58, r + a * 0.66, i * 0.12, a * 0.18, `#5a3a20`);
      for (let t = 0; t < 7; t++)
        je(
          e,
          n + i * (0.59 + t * 0.016),
          r + a * 0.68,
          n + i * (0.6 + t * 0.012),
          r + a * 0.36,
          i * 0.006,
          t % 2 ? `#d8b070` : `#202020`,
        );
      z(e, n + i * 0.74, r + a * 0.62, i * 0.24, a * 0.02, `#6a4a2a`);
      for (let t = 0; t < 5; t++)
        ((e.fillStyle = [`#a0582a`, `#3a2a1a`, `#c08040`][t % 3]),
          e.beginPath(),
          e.arc(
            n + i * (0.77 + t * 0.045),
            r + a * 0.58,
            i * 0.018,
            0,
            Math.PI * 2,
          ),
          e.fill());
      break;
    case `stationery`:
    case `drug`:
    case `konbini`: {
      z(e, n, r, i, a, t === `konbini` ? `#f6f8f8` : `#f8f6f0`);
      let o = t === `konbini` ? 4 : 5,
        c =
          t === `drug`
            ? [
                `#f4f4f4`,
                `#e8a0b8`,
                `#a0c8e8`,
                `#ffe080`,
                `#d0e8c0`,
                `#ffffff`,
                `#c8d0f0`,
                `#f0c0a0`,
              ]
            : t === `stationery`
              ? [
                  `#2a4a8a`,
                  `#b83a30`,
                  `#e8e0c8`,
                  `#3a7a4a`,
                  `#2a2a2a`,
                  `#d8b060`,
                  `#f0f0f0`,
                  `#8a5a9a`,
                ]
              : [
                  `#d8402a`,
                  `#f4f0e0`,
                  `#3a6ab0`,
                  `#e8c040`,
                  `#4a8a4a`,
                  `#f0f0f0`,
                  `#a0522d`,
                  `#202020`,
                ];
      for (let t = 0; t < o; t++) {
        let l = r + a * (0.1 + (0.56 / o) * t),
          u = n + i * 0.02;
        for (; u < n + i * 0.6;) {
          let t = i * (0.03 + s.next() * 0.05),
            n = c[s.int(0, c.length - 1)];
          for (let r = u; r < u + t - i * 0.006; r += i * 0.012)
            z(e, r, l, i * 0.0095, a * (0.06 + s.next() * 0.025), n);
          u += t;
        }
        (z(e, n + i * 0.02, l + a * 0.088, i * 0.58, a * 0.012, `#e0e0dc`),
          z(e, n + i * 0.02, l + a * 0.1, i * 0.58, a * 0.006, `#e86a4a`));
      }
      (z(
        e,
        n + i * 0.63,
        r + a * 0.16,
        i * 0.08,
        a * 0.6,
        t === `drug` ? `#ffe14a` : `#e8f0f8`,
      ),
        z(e, n + i * 0.64, r + a * 0.2, i * 0.06, a * 0.1, `#e60012`),
        z(
          e,
          n + i * 0.74,
          r + a * 0.62,
          i * 0.24,
          a * 0.22,
          t === `konbini` ? `#e8e8e8` : `#d0c8b8`,
        ),
        z(e, n + i * 0.76, r + a * 0.56, i * 0.05, a * 0.06, `#2a2a2a`),
        l(
          n + i * 0.86,
          r + a * 0.46,
          t === `drug` ? `#ffffff` : t === `konbini` ? `#3a6aa0` : `#5a4a3a`,
        ));
      break;
    }
    case `gates`:
      (z(e, n, r + a * 0.12, i, a * 0.03, `#ffd400`),
        z(e, n + i * 0.3, r + a * 0.18, i * 0.4, a * 0.1, `#101010`));
      for (let t = 0; t < 3; t++)
        z(
          e,
          n + i * (0.32 + t * 0.13),
          r + a * 0.2,
          i * 0.1,
          a * 0.025,
          t === 1 ? `#ff8a3a` : `#7af07a`,
        );
      for (let t = 0; t < 6; t++) {
        let o = n + i * (0.3 + t * 0.075);
        (z(e, o, r + a * 0.54, i * 0.035, a * 0.3, `#b8bcc0`),
          z(
            e,
            o,
            r + a * 0.52,
            i * 0.035,
            a * 0.03,
            t % 3 == 0 ? `#1a6ac0` : `#4a4e52`,
          ),
          z(e, o + i * 0.006, r + a * 0.53, i * 0.02, a * 0.012, `#9adfff`));
      }
      for (let t = 0; t < 4; t++)
        (z(
          e,
          n + i * (0.03 + t * 0.06),
          r + a * 0.36,
          i * 0.05,
          a * 0.48,
          `#3a6a4a`,
        ),
          z(
            e,
            n + i * (0.035 + t * 0.06),
            r + a * 0.42,
            i * 0.04,
            a * 0.1,
            `#9adfff`,
          ));
      for (let e = 0; e < 3; e++)
        l(
          n + i * (0.4 + e * 0.12 + s.next() * 0.04),
          r + a * 0.5,
          [`#2a2e38`, `#5a3a3a`, `#1e3040`][e],
        );
      z(e, n + i * 0.8, r + a * 0.3, i * 0.16, a * 0.14, `#1a3a6a`);
      break;
    case `fruit`:
      z(e, n + i * 0.04, r + a * 0.5, i * 0.4, a * 0.2, `#e8f4f0`);
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = [`#a8d070`, `#e83a3a`, `#f0c020`, `#f08a3a`][t % 4]),
          e.beginPath(),
          e.arc(
            n + i * (0.08 + t * 0.045),
            r + a * 0.6,
            i * 0.018,
            0,
            Math.PI * 2,
          ),
          e.fill());
      for (let t = 0; t < 3; t++)
        z(
          e,
          n + i * (0.52 + t * 0.15),
          r + a * 0.6,
          i * 0.1,
          a * 0.03,
          `#ffffff`,
        );
      (z(e, n + i * 0.6, r + a * 0.1, i * 0.2, a * 0.3, `#fff0f4`),
        z(e, n + i * 0.66, r + a * 0.14, i * 0.08, a * 0.22, `#e85a8a`));
      break;
    case `taiyaki`:
    case `senbei`:
      if ((z(e, n, r + a * 0.5, i, a * 0.34, `#6a4a2a`), t === `taiyaki`))
        for (let t = 0; t < 10; t++)
          ((e.fillStyle = `#b8742a`),
            e.beginPath(),
            e.ellipse(
              n + i * (0.08 + t * 0.09),
              r + a * 0.45,
              i * 0.035,
              a * 0.04,
              0,
              0,
              Math.PI * 2,
            ),
            e.fill());
      else
        for (let t = 0; t < 8; t++)
          (z(
            e,
            n + i * (0.05 + t * 0.115),
            r + a * 0.3,
            i * 0.09,
            a * 0.2,
            `rgba(220,235,240,0.8)`,
          ),
            (e.fillStyle = `#a06a30`),
            e.beginPath(),
            e.arc(
              n + i * (0.095 + t * 0.115),
              r + a * 0.42,
              i * 0.03,
              0,
              Math.PI * 2,
            ),
            e.fill());
      l(n + i * 0.55, r + a * 0.22, `#e8e0d0`);
      break;
    case `sakaya`:
      for (let t = 0; t < 3; t++)
        for (let o = 0; o < 20; o++)
          z(
            e,
            n + i * (0.03 + o * 0.048),
            r + a * (0.08 + t * 0.18),
            i * 0.02,
            a * 0.15,
            [`#2a5a2a`, `#5a2a1a`, `#e8e8e0`, `#1a1a1a`, `#8a6a2a`][
              s.int(0, 4)
            ],
          );
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.15),
          r + a * 0.66,
          i * 0.12,
          a * 0.18,
          t % 2 ? `#f0c000` : `#c81818`,
        );
      break;
    case `realestate`:
      for (let t = 0; t < 4; t++)
        for (let o = 0; o < 10; o++) {
          let s = n + i * (0.03 + o * 0.096),
            c = r + a * (0.06 + t * 0.19);
          (z(e, s, c, i * 0.085, a * 0.17, `#ffffff`),
            z(
              e,
              s + i * 0.008,
              c + a * 0.02,
              i * 0.07,
              a * 0.03,
              o % 3 ? `#1a6ac0` : `#e60012`,
            ),
            (e.strokeStyle = `#606060`),
            (e.lineWidth = 1),
            e.strokeRect(s + i * 0.015, c + a * 0.07, i * 0.05, a * 0.07));
        }
      break;
    case `beerhall`:
      for (let t = 0; t < 6; t++)
        (z(
          e,
          n + i * (0.06 + t * 0.16),
          r + a * 0.6,
          i * 0.12,
          a * 0.04,
          `#f4f0e6`,
        ),
          (e.fillStyle = `rgba(255,210,140,0.9)`),
          e.beginPath(),
          e.arc(
            n + i * (0.12 + t * 0.16),
            r + a * 0.18,
            i * 0.02,
            0,
            Math.PI * 2,
          ),
          e.fill());
      for (let t = 0; t < 8; t++)
        z(
          e,
          n + i * (0.3 + t * 0.05),
          r + a * 0.36,
          i * 0.012,
          a * 0.1,
          `#d8b060`,
        );
      (l(n + i * 0.25, r + a * 0.5, `#2a2a2a`),
        l(n + i * 0.7, r + a * 0.48, `#4a3a2a`));
      break;
    case `ukiyoe`:
      for (let t = 0; t < 7; t++) {
        let o = n + i * (0.04 + t * 0.137);
        (z(e, o, r + a * 0.1, i * 0.11, a * 0.3, `#1a120a`),
          z(
            e,
            o + i * 0.008,
            r + a * 0.115,
            i * 0.094,
            a * 0.27,
            [`#e8d8b0`, `#d8e0e8`, `#f0d8c0`][t % 3],
          ),
          z(
            e,
            o + i * 0.02,
            r + a * 0.25,
            i * 0.07,
            a * 0.08,
            [`#2a4a8a`, `#c04030`, `#3a6a3a`][t % 3],
          ));
      }
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.16),
          r + a * 0.56,
          i * 0.14,
          a * 0.28,
          `#5a3a20`,
        );
      break;
    case `pawn`:
      z(e, n, r + a * 0.5, i, a * 0.34, `#4a3020`);
      for (let t = 0; t < 16; t++)
        z(
          e,
          n + i * (0.05 + t * 0.058),
          r + a * 0.08,
          i * 0.02,
          a * 0.4,
          `#2a1a10`,
        );
      z(e, n + i * 0.4, r + a * 0.1, i * 0.2, a * 0.4, `#e8e4d8`);
      break;
    default:
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.16),
          r + a * 0.3,
          i * 0.12,
          a * 0.5,
          c[s.int(0, 9)],
        );
  }
}
function je(e, t, n, r, i, a, o) {
  ((e.strokeStyle = o),
    (e.lineWidth = a),
    e.beginPath(),
    e.moveTo(t, n),
    e.lineTo(r, i),
    e.stroke());
}
function Me(e, t, n, r, i, a, o = 0.9) {
  let s = Math.round(((r * i) / 18) * o);
  for (let o = 0; o < s; o++) {
    e.fillStyle = [
      `#2e4a22`,
      `#3e5e2a`,
      `#4e7a34`,
      `#28401c`,
      `#5a8a3a`,
      `#6a8a30`,
    ][a.int(0, 5)];
    let o = t + a.next() * r,
      s = n + a.next() * i,
      c = 2 + a.next() * 3.5;
    (e.beginPath(),
      e.moveTo(o, s - c),
      e.lineTo(o + c, s),
      e.lineTo(o, s + c * 0.8),
      e.lineTo(o - c, s),
      e.closePath(),
      e.fill());
  }
}
function Ne(e) {
  return (t, n, r, i, a) => {
    let o = ue(`ivy`, e);
    (z(t, n, r, i, a, `#2a4220`), Me(t, n, r, i, a, o, 1.6));
    let s = t.createLinearGradient(0, r, 0, r + a);
    (s.addColorStop(0, `rgba(0,0,0,0)`),
      s.addColorStop(1, `rgba(0,0,0,0.35)`),
      (t.fillStyle = s),
      t.fillRect(n, r, i, a));
  };
}
function Pe(e, t, n) {
  return (r, i, a, o, s) => {
    (z(r, i, a, o, s, `#4a3220`),
      z(r, i + o * 0.03, a + s * 0.05, o * 0.94, s * 0.9, `#f2ecd8`),
      V(
        r,
        R(e),
        i + o / 2,
        a + s * 0.16,
        o * 0.86,
        s * 0.14,
        `#2a1a0e`,
        `900`,
        x(),
      ),
      z(r, i + o * 0.08, a + s * 0.26, o * 0.84, s * 0.01, `#8a6a4a`),
      t.forEach((e, t) => {
        let n = R(e);
        ((r.font = `600 ${s * 0.085}px ${x()}`),
          (r.fillStyle = `#2a2018`),
          (r.textAlign = `left`),
          (r.textBaseline = `middle`),
          r.fillText(n, i + o * 0.08, a + s * (0.36 + t * 0.12), o * 0.84));
      }),
      V(
        r,
        R(n),
        i + o * 0.74,
        a + s * 0.88,
        o * 0.4,
        s * 0.07,
        `#4a3a2a`,
        `700`,
      ));
  };
}
function Fe(e, t) {
  return (n, r, i, a, o) => {
    (z(n, r, i, a, o, `#1d3f9a`),
      (n.strokeStyle = `#ffffff`),
      (n.lineWidth = Math.max(1.5, o * 0.05)),
      n.strokeRect(r + o * 0.06, i + o * 0.06, a - o * 0.12, o - o * 0.12),
      V(n, R(e), r + a / 2, i + o * 0.4, a * 0.84, o * 0.46, `#ffffff`, `800`),
      V(n, R(t), r + a / 2, i + o * 0.78, a * 0.7, o * 0.18, `#ffffff`, `600`));
  };
}
var Ie = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8,
  Le = 35,
  Re = 3,
  ze = (e) => `#` + (e & 16777215).toString(16).padStart(6, `0`),
  Be = (e) => `wall:${e.wallKind ?? `tile`}:${ze(e.wall)}`,
  Ve = (e, t, n) => `win:${e}:${t ?? ``}:${n ?? ``}`,
  He = [`#ffffff`, `#ffe14a`, `#ff6a8a`, `#7ad0ff`],
  Ue = new Set([
    `guitar`,
    `acoustic`,
    `books`,
    `ramen`,
    `teishoku`,
    `bigbooks`,
    `curry`,
    `ticket`,
  ]),
  We = (e) => (Ue.has(e.shop) ? s(`street-shopvar`, e.id) % 3 : 0),
  Ge = (e) => `shop:${e.shop}:${We(e)}`;
function Ke(e, t) {
  e.need(`shutter`, 64, 64, Te());
  for (let n of t) {
    if (
      (e.need(Be(n), 64, 64, Se(n.wallKind ?? `tile`, ze(n.wall))),
      e.need(Ve(n.win), 160, 60, Ce(n.win)),
      (n.winWords ?? []).forEach((t, r) => {
        if (!t) return;
        let i = He[s(n.id, r) % He.length],
          a = qe(t, r + 2);
        e.need(Ve(n.win, a, i), 160, 60, Ce(n.win, a, i));
      }),
      e.need(Ge(n), 320, 128, we(n.shop, We(n))),
      n.front === `lattice` && e.need(`lattice`, 128, 96, be(`#2a1a10`)),
      n.ivy)
    )
      for (let t of [0, 1]) e.need(`ivy:${t}`, 128, 128, Ne(t));
    e.need(U(n.fascia), 384, 48, de(n.fascia));
    for (let t of n.bands ?? []) e.need(U(t), 384, 48, de(t));
    (n.roofBoard && e.need(U(n.roofBoard), 384, 96, de(n.roofBoard)),
      n.vsign && e.need(fe(n.vsign), 52, 364, pe(n.vsign)),
      n.vsign2 && e.need(fe(n.vsign2), 52, 364, pe(n.vsign2)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          ge(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? []) e.need(`chochin:${t}`, 64, 96, he(t));
  }
}
function qe(e, t) {
  return _(e, { n: t });
}
var W = (e, t) => P(e, t);
function Je(e, t, n, r) {
  let i = new o(s(`street-shop`, t.id)),
    a = t.gh ?? 4,
    c = t.fh ?? 3.3,
    l = Ie(t),
    u = n.white(),
    d = n.uv(Be(t)),
    f = W(t, t.dir),
    p = (e) => {
      if (e === t.dir || e === t.corner) return 0;
      let n = W(t, e);
      return n.nx === -f.nx && n.nz === -f.nz
        ? (t.coverB ?? 0)
        : ((n.nx === f.tx && n.nz === f.tz ? t.coverR : t.coverL) ?? 0);
    };
  for (let o of [`N`, `E`, `S`, `W`]) {
    let f = W(t, o);
    if (o !== t.dir && o !== t.corner) {
      let n = p(o);
      if (n >= l - 0.05) continue;
      (e.setMaterial(0.92, 0, 0, 0),
        E(e, t.wall, 0.9),
        I(e, f, 0, f.L, Math.max(0, n), l, 0, d));
      continue;
    }
    Ye(e, t, f, n, o === t.dir, i);
    for (let i = 1; i < t.floors; i++) {
      let l = a + (i - 1) * c,
        p = l + c;
      (e.setMaterial(0.88, 0, 0, 0),
        E(e, t.wall),
        I(e, f, 0, f.L, l, l + 0.9, 0, d));
      let m = Math.max(1, Math.round(f.L / 3.4)),
        h = o === t.dir ? t.winWords?.[i - 1] : void 0,
        g = Math.floor((m - 1) / 2);
      for (let r = 0; r < m; r++) {
        let a = Ve(t.win);
        (h &&
          r === g &&
          (a = Ve(t.win, qe(h, i + 1), He[s(t.id, i - 1) % He.length])),
          e.setMaterial(0.2, 0.3, 0.2, Le),
          E(e, 16777215),
          I(
            e,
            f,
            (f.L * r) / m + 0.14,
            (f.L * (r + 1)) / m - 0.14,
            l + 0.9,
            p,
            0,
            n.uv(a),
          ));
      }
      (e.setMaterial(0.88, 0, 0, 0), E(e, t.wall, 0.96));
      for (let t = 0; t <= m; t++) {
        let n = (f.L * t) / m;
        I(
          e,
          f,
          Math.max(0, n - 0.14),
          Math.min(f.L, n + 0.14),
          l + 0.9,
          p,
          0,
          d,
        );
      }
      if (r > 0) {
        E(e, t.wall, 0.75);
        let [n, r] = F(f, 0, 0),
          [i, a] = F(f, f.L, 0.12);
        O(
          e,
          Math.min(n, i),
          Math.min(r, a),
          Math.max(n, i),
          Math.max(r, a),
          l + 0.9,
          u,
        );
      }
    }
    if (
      (e.setMaterial(0.88, 0, 0, 0),
      E(e, t.wall, 0.92),
      I(e, f, 0, f.L, l - 0.8, l, 0, d),
      E(e, 9079430),
      I(e, f, 0, f.L, l - 0.08, l + 0.05, 0.06, u),
      o === t.dir)
    )
      for (let r of t.bands ?? []) {
        let i = r.floor ?? 2;
        if (i < 2 || i > t.floors) continue;
        let o = a + (i - 2) * c + 0.05,
          s = 0.8,
          l = Math.min(f.L - 0.4, s * 8);
        (e.setMaterial(0.5, 0, 0.3, r.style === `lit` || !r.style ? Re : 0),
          E(e, 16777215),
          I(e, f, (f.L - l) / 2, (f.L + l) / 2, o, o + s, 0.1, n.uv(U(r))));
      }
  }
  if (
    (e.setMaterial(0.92, 0, 0, 0),
    E(e, 9211016),
    O(e, t.x0, t.z0, t.x1, t.z1, l - 0.5, u),
    r > 0 &&
      i.next() < 0.55 &&
      !t.roofBoard &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      E(e, i.next() < 0.5 ? 14212312 : 10133668),
      k(
        e,
        (t.x0 + t.x1) / 2 + (i.next() - 0.5) * 1.5,
        (t.z0 + t.z1) / 2 + (i.next() - 0.5) * 1.5,
        l - 0.5,
        l + 1.3,
        0.8,
        0.8,
        0,
        1,
        u,
      )),
    t.ivy)
  ) {
    (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
    for (let r of [t.dir, t.corner].filter(Boolean)) {
      let a = W(t, r),
        o = (t, r, i, o, s, c) => {
          let [l, u] = F(a, (t + r) / 2, s / 2);
          k(e, l, u, i, o, (r - t) / 2, s / 2, a.nx, a.nz, n.uv(`ivy:${c}`));
        },
        s = t.gh ?? 4;
      (o(-0.15, 0.9 + i.next() * 0.6, 0.6, l + 0.3, 0.32, 0),
        o(a.L - 0.9 - i.next() * 0.6, a.L + 0.15, s - 0.6, l + 0.4, 0.3, 1),
        o(-0.1, a.L + 0.1, l - 0.6, l + 0.55, 0.36, 0));
      for (let e = 0; e < 3 + Math.floor(a.L / 3); e++) {
        let t = i.next() * (a.L - 1.4),
          n = 0.6 + i.next() * 1.8,
          r = s + i.next() * Math.max(0.5, l - s - n - 0.6);
        o(t, t + 0.8 + i.next() * 1.4, r, r + n, 0.18 + i.next() * 0.12, e % 2);
      }
      for (let e = 0; e < Math.floor(a.L / 1.6); e++) {
        let t = 0.2 + e * 1.6 + i.next() * 0.5;
        o(
          t,
          t + 0.7 + i.next() * 0.6,
          s - 0.55 - i.next() * 0.4,
          s + 0.25,
          0.42,
          (e + 1) % 2,
        );
      }
    }
  }
  let m = (t, r, i, a, o) => {
      let [s, c] = F(f, r, 0.35 + o / 2);
      (e.setMaterial(
        0.5,
        0,
        t.style === `wood` ? 0 : 0.3,
        t.style === `wood` ? 0 : Re,
      ),
        E(e, 16777215));
      let l = n.uv(fe(t));
      (k(e, s, c, i, a, o / 2, 0.18, f.tx, f.tz, u, l, l),
        e.setMaterial(0.6, 0.4, 0, 0),
        E(e, 5264472));
      let [d, p] = F(f, r, 0.18);
      k(e, d, p, i + 0.3, a - 0.3, 0.16, 0.05, f.tx, f.tz, u);
    },
    h = l - 0.4;
  if (t.vsign && t.floors >= 2) {
    let e = Math.min(h - (a + 0.2), t.floors >= 5 ? 14 : 7.5);
    m(t.vsign, 0.8, h - e, h, t.floors >= 6 ? 1.3 : 1);
  }
  if (t.vsign2 && t.floors >= 3) {
    let e = Math.min(h - (a + 0.2), 9);
    m(t.vsign2, f.L - 0.8, h - e, h, 0.9);
  }
  if (t.roofBoard) {
    let r = 2.4,
      i = Math.min(f.L - 0.6, r * 4);
    (e.setMaterial(0.7, 0.5, 0, 0), E(e, 6317160));
    for (let t of [f.L / 2 - i / 2 + 0.3, f.L / 2 + i / 2 - 0.3]) {
      let [n, r] = F(f, t, -1);
      k(e, n, r, l - 0.5, l + 0.6, 0.06, 0.5, f.nx, f.nz, u);
    }
    (e.setMaterial(0.5, 0, 0.3, Re), E(e, 16777215));
    let [a, o] = F(f, f.L / 2, -0.5),
      s = n.uv(U(t.roofBoard));
    k(e, a, o, l + 0.2, l + 0.2 + r, i / 2, 0.15, f.nx, f.nz, u, s, s);
  }
  return l;
}
function Ye(e, t, n, r, i, a) {
  let o = r.white(),
    s = t.gh ?? 4,
    c = s - 0.95,
    l = t.front ?? `glass`,
    u = r.uv(Ge(t)),
    d = Math.max(1, Math.round(n.L / 3)),
    f = l === `open` ? 0.9 : 0.35;
  (e.setMaterial(0.3, 0.1, 0.17, 17), E(e, 16053492));
  for (let t = 0; t < d; t++) {
    let r = (n.L * t) / d,
      a = (n.L * (t + 1)) / d,
      [o, s] = F(n, r + 0.08, -f),
      [l, p] = F(n, a - 0.08, -f),
      m = ((t + +!i) % 2) / 2;
    re(e, o, s, l, p, 0, c, u, m, m + 0.5, 0, 1);
  }
  if (l === `lattice`) {
    (e.setMaterial(0.7, 0, 0.22, Re | 16), E(e, 16777215));
    let t = r.uv(`lattice`);
    for (let r = 0; r < d; r++) {
      let i = (n.L * r) / d,
        a = (n.L * (r + 1)) / d;
      I(e, n, i + 0.06, a - 0.06, 0, c, -0.12, t);
    }
  }
  (e.setMaterial(0.85, 0, 0, 0), E(e, t.wall, 0.8));
  {
    let [t, r] = F(n, 0, 0),
      [i, a] = F(n, 0, -f);
    D(e, t, r, i, a, 0, c, o);
    let [s, l] = F(n, n.L, 0),
      [u, d] = F(n, n.L, -f);
    D(e, u, d, s, l, 0, c, o);
  }
  if (l !== `open`) {
    (e.setMaterial(0.6, 0.3, 0, 0), E(e, l === `lattice` ? 2759184 : 3816512));
    for (let t = 0; t <= d; t++) {
      let r = (n.L * t) / d;
      I(e, n, Math.max(0, r - 0.08), Math.min(n.L, r + 0.08), 0, c, 0, o);
    }
  } else {
    (e.setMaterial(0.6, 0, 0, 16), E(e, 6964260));
    let [t, r] = F(n, 0.3, -0.45),
      [i, a] = F(n, n.L - 0.3, 0.05);
    O(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      1.05,
      o,
    );
  }
  (e.setMaterial(0.85, 0, 0, 0), E(e, 14211284));
  {
    let [t, r] = F(n, 0, -f),
      [i, a] = F(n, n.L, 0);
    O(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      c,
      o,
      !0,
    );
  }
  let p = t.fascia;
  if (
    (e.setMaterial(
      0.5,
      0,
      p.style === `wood` || p.style === `enamel` ? 0 : 0.3,
      p.style === `wood` || p.style === `enamel` ? 0 : Re,
    ),
    E(e, 16777215),
    I(e, n, 0, n.L, c, s, 0.05, r.uv(U(p))),
    t.awning !== void 0 && i)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), E(e, t.awning));
    let [r, i] = F(n, 0.1, 0),
      [a, s] = F(n, n.L - 0.1, 0),
      [l, u] = F(n, 0.1, 1.1),
      [d, f] = F(n, n.L - 0.1, 1.1);
    e.quad(
      l,
      c - 0.5,
      u,
      d,
      c - 0.5,
      f,
      a,
      c - 0.02,
      s,
      r,
      c - 0.02,
      i,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
    let [p, m] = F(n, 0.1, 1.1),
      [h, g] = F(n, n.L - 0.1, 1.1);
    D(e, p, m, h, g, c - 0.75, c - 0.5, o);
  }
  if (i && t.lanterns?.length) {
    let i = t.lanterns;
    for (let t = 0; t < i.length; t++) {
      let [a, o] = F(n, (n.L * (t + 0.5)) / i.length, 0.45);
      (e.setMaterial(0.6, 0, 0.42, Re), E(e, 16777215));
      let s = r.uv(`chochin:${i[t]}`);
      ie(e, a, o, c - 1.05, c - 0.1, 0.25, s);
    }
  }
}
function Xe(e, t, n) {
  if (!t.hours) return !1;
  let r = W(t, t.dir),
    i = (t.gh ?? 4) - 0.95;
  if (
    (e.setMaterial(0.7, 0.4, 0, 0),
    E(e, 16777215),
    I(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`)),
    t.corner)
  ) {
    let r = W(t, t.corner);
    I(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`));
  }
  return !0;
}
function Ze(e, t, n) {
  if (!t.noren) return !1;
  let r = W(t, t.dir),
    i = (t.gh ?? 4) - 0.95,
    a = Math.min(2.4, r.L * 0.45);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    E(e, 16777215),
    I(
      e,
      r,
      r.L / 2 - a / 2,
      r.L / 2 + a / 2,
      i - 1.15,
      i - 0.05,
      0.12,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ),
    !0
  );
}
var Qe = 3.4,
  $e = 2.9,
  et = (e) => Qe + (e.floors - 1) * $e,
  tt = 3;
function nt(e, t, n, r, i) {
  z(e, t, n, r, i, `#efe6d0`);
  let a = e.createLinearGradient(0, n, 0, n + i);
  (a.addColorStop(0, `rgba(255,230,180,0.0)`),
    a.addColorStop(1, `rgba(180,120,60,0.25)`),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.fillStyle = `rgba(0,0,0,0)`));
  for (let a = 0; a <= 8; a++) e.fillRect(t + (a * r) / 8 - 1.5, n, 3, i);
  for (let a = 0; a <= 4; a++) e.fillRect(t, n + (a * i) / 4 - 1.5, r, 3);
  e.restore();
}
function rt(e, t, n, r, i) {
  z(e, t, n, r, i, `#d8dcd8`);
  let a = e.createLinearGradient(0, n, 0, n + i);
  (a.addColorStop(0, `#eef0ea`),
    a.addColorStop(1, `#b8bcb4`),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.fillStyle = `rgba(120,124,128,0)`),
    e.fillRect(t, n, r, 3),
    e.fillRect(t, n + i - 3, r, 3),
    e.fillRect(t + r / 2 - 2, n, 4, i),
    e.fillRect(t, n, 3, i),
    e.fillRect(t + r - 3, n, 3, i));
  for (let a = 1; a < 4; a++) e.fillRect(t, n + (a * i) / 4 - 1, r, 2);
  e.restore();
}
function it(e, t) {
  (e.need(`old:kawara`, 128, 64, xe(`#4c5054`)),
    e.need(`old:kawara2`, 128, 64, xe(`#3e4246`)),
    e.need(`old:shoji`, 128, 64, nt),
    e.need(`old:glass`, 128, 96, rt),
    e.need(`old:lattice`, 128, 96, be(`#2a1a10`, `#b88a52`, 18)),
    e.need(`old:leaves`, 64, 64, Oe(7, `#3a6a30`)));
  for (let n of t) {
    (e.need(`old:boards:${n.wood}`, 128, 128, ye(n.wood)),
      n.skin === `mortar` &&
        e.need(
          `old:mortar:${n.mortar ?? `#c8c0b0`}`,
          64,
          64,
          Se(`mortar`, n.mortar ?? `#c8c0b0`),
        ),
      n.board && e.need(U(n.board), 384, 96, de(n.board)),
      n.plate &&
        e.need(`plate:${n.plate}`, 128, 48, ke(n.plate, `#e8e2d0`, `#3a3020`)),
      n.kind !== `house` && e.need(`shop:${n.kind}:0`, 320, 128, we(n.kind)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          ge(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? [])
      e.need(`chochinw:${t.key}:${t.body}`, 64, 96, he(t.key, t.body));
  }
}
function at(e, t, n, r) {
  let i = { x0: t.x0, x1: t.x1, z0: t.z0, z1: t.z1 },
    a = P(i, t.dir),
    c = new o(s(`street-old`, t.id)),
    l = n.white(),
    u = n.uv(`old:boards:${t.wood}`),
    d = t.skin === `mortar` ? n.uv(`old:mortar:${t.mortar ?? `#c8c0b0`}`) : u,
    f = n.uv(c.next() < 0.5 ? `old:kawara` : `old:kawara2`),
    p = et(t),
    m = parseInt(t.wood.slice(1), 16),
    h = t.kind === `house`;
  (e.setMaterial(0.9, 0, 0, 0), E(e, 16777215, 0.85));
  for (let n of [`N`, `E`, `S`, `W`]) {
    if (n === t.dir || n === t.corner) continue;
    let r = P(i, n),
      o = r.nx === a.tx && r.nz === a.tz,
      s = r.nx === -a.tx && r.nz === -a.tz,
      c = o ? (t.coverR ?? 0) : s ? (t.coverL ?? 0) : 0;
    c >= p - 0.05 || I(e, r, 0, r.L, Math.max(0, c), p, 0, d);
  }
  ((t.corner ? [a, P(i, t.corner)] : [a]).forEach((i, a) => {
    let o = a === 0;
    if (h) {
      (e.setMaterial(0.9, 0, 0, 0), E(e, 16777215));
      let t = Math.min(1.8, i.L * 0.4),
        r = o ? i.L * (0.25 + c.next() * 0.2) : -10;
      (I(e, i, 0, i.L, 0, 3.05, 0, d),
        e.setMaterial(0.35, 0.1, 0.12, tt | 48),
        E(e, 16777215),
        o && I(e, i, r, r + t, 0.12, 2.15, 0.02, n.uv(`old:glass`)));
      let a = o ? (r + t + 0.5 < i.L - 1.4 ? r + t + 0.5 : 0.4) : 0.5;
      if (
        (I(
          e,
          i,
          a,
          Math.min(i.L - 0.3, a + 1.4),
          1,
          2,
          0.02,
          n.uv(`old:glass`),
        ),
        e.setMaterial(0.8, 0, 0, 0),
        E(e, 6974052),
        o)
      ) {
        let [n, a] = F(i, r + t / 2, 0.35);
        (k(e, n, a, 2.3, 2.38, t / 2 + 0.25, 0.35, i.nx, i.nz, l),
          E(e, 15262416),
          I(e, i, r + t + 0.08, r + t + 0.3, 1.45, 1.75, 0.03, l),
          E(e, 10133664));
        let [o, s] = F(i, Math.max(0.3, r - 0.6), 0.1);
        (k(e, o, s, 0.9, 1.35, 0.2, 0.1, i.nx, i.nz, l),
          e.setMaterial(0.4, 0, 0.75, tt),
          E(e, 16773328));
        let [c, u] = F(i, r + t + 0.2, 0.09);
        k(e, c, u, 1.95, 2.18, 0.07, 0.07, i.nx, i.nz, l);
      }
    } else {
      (e.setMaterial(0.35, 0, 0.18, 17),
        E(e, 16777215),
        I(e, i, 0.25, i.L - 0.25, 0, 3.05, -0.5, n.uv(`shop:${t.kind}:0`)),
        e.setMaterial(0.7, 0, 0.25, tt | 16));
      let r = n.uv(`old:lattice`),
        a = o ? [i.L / 2 - 1, i.L / 2 + 1] : [-1, -1],
        s = Math.max(2, Math.round(i.L / 1.8));
      for (let t = 0; t < s; t++) {
        let n = (i.L * t) / s + 0.25 * (t === 0),
          o = (i.L * (t + 1)) / s - 0.25 * (t === s - 1),
          c = (n + o) / 2;
        (c > a[0] && c < a[1]) || I(e, i, n, o, 0, 3.05, -0.15, r);
      }
      (e.setMaterial(0.8, 0, 0, 0), E(e, m, 0.8));
      for (let t of [0, i.L]) {
        let [n, r] = F(i, t, 0),
          [a, o] = F(i, t, -0.5);
        t === 0
          ? e.quad(
              n,
              0,
              r,
              a,
              0,
              o,
              a,
              3.05,
              o,
              n,
              3.05,
              r,
              l.u0,
              l.v0,
              l.u1,
              l.v1,
            )
          : e.quad(
              a,
              0,
              o,
              n,
              0,
              r,
              n,
              3.05,
              r,
              a,
              3.05,
              o,
              l.u0,
              l.v0,
              l.u1,
              l.v1,
            );
      }
    }
    (E(e, 16777215, 0.9),
      e.setMaterial(0.9, 0, 0, 0),
      I(e, i, 0, i.L, 3.05, 3.4499999999999997, 0, d),
      E(e, m, 0.7));
    for (let t of [0.12, i.L - 0.12]) {
      let [n, r] = F(i, t, 0.08);
      k(e, n, r, 0, p, 0.12, 0.12, i.nx, i.nz, l);
    }
    for (let n = 0; n < t.floors - 1; n++) {
      let t = Qe + n * $e,
        r = h ? 0.6 : 1;
      (e.setMaterial(0.75, 0, 0, 0), E(e, 16777215));
      let [a, o] = F(i, -0.2, 0),
        [s, c] = F(i, i.L + 0.2, 0),
        [u, d] = F(i, i.L + 0.2, r),
        [p, g] = F(i, -0.2, r);
      (e.quad(
        p,
        t - 0.35,
        g,
        u,
        t - 0.35,
        d,
        s,
        t + 0.05,
        c,
        a,
        t + 0.05,
        o,
        f.u0,
        f.v0,
        f.u1,
        f.v1,
      ),
        E(e, m, 0.6),
        e.quad(
          a,
          t + 0.03,
          o,
          s,
          t + 0.03,
          c,
          u,
          t - 0.37,
          d,
          p,
          t - 0.37,
          g,
          l.u0,
          l.v0,
          l.u1,
          l.v1,
        ),
        E(e, 2762274));
      let [_, v] = F(i, -0.2, r),
        [y, b] = F(i, i.L + 0.2, r);
      e.quad(
        _,
        t - 0.47,
        v,
        y,
        t - 0.47,
        b,
        y,
        t - 0.33,
        b,
        _,
        t - 0.33,
        v,
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      );
    }
    for (let a = 1; a < t.floors; a++) {
      let o = Qe + (a - 1) * $e,
        s = o + $e;
      (e.setMaterial(0.9, 0, 0, 0),
        E(e, 16777215),
        I(e, i, 0, i.L, o, o + 0.75, 0, d),
        I(e, i, 0, i.L, s - 0.45, s, 0, d),
        e.setMaterial(0.5, 0, 0.2, tt | 16 | (h ? 32 : 0)),
        E(e, 16777215),
        I(
          e,
          i,
          0.3,
          i.L - 0.3,
          o + 0.75,
          s - 0.45,
          -0.25,
          n.uv(h ? `old:glass` : `old:shoji`),
        ),
        e.setMaterial(0.9, 0, 0, 0),
        E(e, m, 0.85),
        I(e, i, 0, 0.3, o + 0.75, s - 0.45, 0, d),
        I(e, i, i.L - 0.3, i.L, o + 0.75, s - 0.45, 0, d));
      let c = t.rail ?? `bars`;
      if (c === `none`) continue;
      let u = h ? 0.25 : 0.4,
        f = o + 0.05,
        p = o + 0.8;
      E(e, h ? 5921368 : m, 0.75);
      let [g, _] = F(i, 0.3, u),
        [v, y] = F(i, i.L - 0.3, u);
      (M(e, g, p, _, v, p, y, 0.04, l),
        M(e, g, f + 0.12, _, v, f + 0.12, y, 0.03, l));
      let b = i.L - 0.6;
      if (c === `diamond` && r > 0) {
        let t = p - (f + 0.12);
        for (let n = -t; n < b; n += 0.32) {
          let r = Math.max(0, n),
            a = Math.min(b, n + t),
            o = f + 0.12 + (r - n),
            s = f + 0.12 + (a - n),
            [c, d] = F(i, 0.3 + r, u),
            [p, m] = F(i, 0.3 + a, u);
          M(e, c, o, d, p, s, m, 0.018, l);
          let [h, g] = F(i, 0.3 + b - r, u),
            [_, v] = F(i, 0.3 + b - a, u);
          M(e, h, o, g, _, s, v, 0.018, l);
        }
      } else {
        let t = Math.max(4, Math.round(b / (r > 0 ? 0.14 : 0.3)));
        for (let n = 0; n <= t; n++) {
          let [r, a] = F(i, 0.3 + (b * n) / t, u);
          M(e, r, f + 0.12, a, r, p, a, 0.016, l);
        }
      }
      for (let t of [0.3, i.L - 0.3]) {
        let [n, r] = F(i, t, u);
        M(e, n, f - 0.1, r, n, p + 0.02, r, 0.05, l);
      }
    }
    if (h && o && r > 0) {
      let t = 2 + Math.floor(c.next() * 4);
      for (let r = 0; r < t; r++) {
        let [t, a] = F(i, 0.3 + c.next() * (i.L - 0.6), 0.28),
          o = c.next() < 0.4;
        (e.setMaterial(0.8, 0, 0, 0),
          E(e, [10508346, 6974058, 3824250, 11563088][r % 4]),
          A(
            e,
            t,
            a,
            0,
            o ? 0.42 : 0.26,
            o ? 0.2 : 0.14,
            l,
            6,
            !1,
            o ? 0.24 : 0.17,
          ),
          E(e, 16777215),
          e.setMaterial(0.9, 0, 0, 0),
          k(
            e,
            t,
            a,
            o ? 0.4 : 0.24,
            o ? 1.05 : 0.6,
            o ? 0.24 : 0.16,
            o ? 0.22 : 0.15,
            i.nx,
            i.nz,
            n.uv(`old:leaves`),
          ));
      }
    }
  }),
    e.setMaterial(0.7, 0, 0, 0),
    E(e, 16777215));
  let g = a.nz === 0 ? `z` : `x`,
    _ = t.floors === 3 ? 2 : 2.3;
  if (t.roofKind === `gable`) {
    let t = g === `x` ? `z` : `x`;
    ae(e, i.x0, i.z0, i.x1, i.z1, p, _, t, f, !1, 0.55, u);
  } else ae(e, i.x0, i.z0, i.x1, i.z1, p, _, g, f, !0, 0.75);
  if (t.board) {
    let r = n.uv(U(t.board));
    if (
      (e.setMaterial(0.6, 0, 0, 0),
      E(e, 16777215),
      t.boardAt === `eave` && t.floors > 1)
    ) {
      let t = Math.min(a.L - 0.6, 4.6),
        n = t / 4,
        [i, o] = F(a, a.L / 2, 0.55);
      (k(
        e,
        i,
        o,
        3.4499999999999997,
        3.4499999999999997 + n,
        t / 2,
        0.06,
        a.nx,
        a.nz,
        l,
        r,
        r,
      ),
        E(e, 2762274),
        k(
          e,
          i,
          o,
          3.4499999999999997 + n,
          3.6 + n,
          t / 2 + 0.15,
          0.22,
          a.nx,
          a.nz,
          l,
        ));
    } else {
      let t = Math.min(a.L - 1, 3),
        n = t / 4;
      I(e, a, a.L / 2 - t / 2, a.L / 2 + t / 2, 3.03 - n, 3.03, 0.14, r);
    }
  }
  return (
    t.plate &&
      (e.setMaterial(0.6, 0.3, 0, 0),
      E(e, 16777215),
      I(e, a, 0.28, 0.78, 1.35, 1.55, 0.14, n.uv(`plate:${t.plate}`))),
    (t.lanterns ?? []).forEach((t, r, i) => {
      let o = i.length === 1 ? a.L - 0.9 : r === 0 ? 0.9 : a.L - 0.9,
        [s, c] = F(a, o, 0.6);
      (e.setMaterial(0.6, 0, 0.4, tt),
        E(e, 16777215),
        ie(
          e,
          s,
          c,
          2.2,
          2.9499999999999997,
          0.22,
          n.uv(`chochinw:${t.key}:${t.body}`),
        ));
    }),
    p
  );
}
function ot(e, t, n) {
  if (!t.noren) return !1;
  let r = P(t, t.dir);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    E(e, 16777215),
    I(
      e,
      r,
      r.L / 2 - 1,
      r.L / 2 + 1,
      1.95,
      3.04,
      0.06,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ),
    !0
  );
}
function st(e, t, n) {
  if (!t.hours || t.kind === `house`) return !1;
  let r = t.corner ? [P(t, t.dir), P(t, t.corner)] : [P(t, t.dir)];
  (e.setMaterial(0.85, 0, 0, 16), E(e, 16777215, 0.7));
  for (let i of r)
    I(e, i, 0.24, i.L - 0.24, 0, 3.04, -0.06, n.uv(`old:boards:${t.wood}`));
  return !0;
}
var G = (e, t) => (n) => (t > 24 ? n >= e || n < t - 24 : n >= e && n < t);
function ct(e, t) {
  for (let [n, [r, i, a]] of Object.entries(t.nobori ?? {}))
    e.need(`nobori:${n}`, 48, 192, me(r, i, a));
  for (let [n, [r, i]] of Object.entries(t.aboard ?? {}))
    e.need(`aboard:${n}`, 96, 128, _e(r, i));
  for (let n of Object.values(t.stand ?? {})) e.need(fe(n), 52, 364, pe(n));
  for (let [n, [r, i, a, o]] of Object.entries(t.plate ?? {}))
    e.need(`kplate:${n}`, 128, 48, ke(r, i, a, o));
  for (let [n, [r, i]] of Object.entries(t.crossing ?? {}))
    e.need(`crossing:${n}`, 192, 48, Fe(r, i));
  for (let [n, [r, i, a]] of Object.entries(t.explain ?? {}))
    e.need(`explain:${n}`, 256, 160, Pe(r, i, a));
  if (t.wagons || t.shelf) {
    for (let t of [0, 1, 2]) e.need(`wagon:${t}`, 128, 64, Ee(t));
    let [n, r] = t.price ?? [`common.promo.sale`, `common.promo.sale`];
    (e.need(`price:3`, 96, 40, De(n)), e.need(`price:1`, 96, 40, De(r)));
  }
  (t.shelf && e.need(`shelf:spines`, 128, 96, lt),
    t.trees &&
      (e.need(`leaves:0`, 128, 128, Oe(0)),
      e.need(`leaves:1`, 128, 128, Oe(1, `#4a7040`))),
    e.need(`wood`, 32, 32, (e, t, n, r, i) => z(e, t, n, r, i, `#7a5530`)));
}
function lt(e, t, n, r, i) {
  z(e, t, n, r, i, `#6a4a2a`);
  let a = 7,
    o = () => (a = (a * 16807) % 2147483647) / 2147483647;
  for (let a = 0; a < 3; a++) {
    let s = n + (i / 3) * a + 3;
    z(e, t + 2, s, r - 4, i / 3 - 6, `#b89060`);
    let c = t + 4;
    for (; c < t + r - 4;) {
      let t = 2 + o() * 3;
      (z(
        e,
        c,
        s + 2,
        t - 0.5,
        i / 3 - 10,
        [
          `#e8e0d0`,
          `#c0a070`,
          `#304060`,
          `#a03020`,
          `#f4f4f0`,
          `#5a7a3a`,
          `#d8c090`,
        ][Math.floor(o() * 7)],
      ),
        (c += t));
    }
  }
}
var ut = (e) => ({ u0: e.u1, v0: e.v0, u1: e.u0, v1: e.v1 });
function dt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 15263976),
    M(e, 0, 0, 0, 0, 2.75, 0, 0.022, r),
    M(e, 0, 2.62, 0, 0.62, 2.62, 0, 0.012, r),
    e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215));
  let i = t.uv(`nobori:${n}`);
  (D(e, 0.02, 0, 0.62, 0, 0.75, 2.6, i),
    D(e, 0.62, 0, 0.02, 0, 0.75, 2.6, ut(i)),
    E(e, 2763306),
    A(e, 0, 0, 0, 0.12, 0.2, r, 6));
}
function ft(e, t, n) {
  let r = t.white(),
    i = t.uv(`aboard:${n}`);
  (e.setMaterial(0.7, 0, 0.08, 1),
    E(e, 16777215),
    e.quad(
      -0.3,
      0,
      0.22,
      0.3,
      0,
      0.22,
      0.3,
      0.95,
      0.02,
      -0.3,
      0.95,
      0.02,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.quad(
      0.3,
      0,
      -0.22,
      -0.3,
      0,
      -0.22,
      -0.3,
      0.95,
      -0.02,
      0.3,
      0.95,
      -0.02,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.setMaterial(0.8, 0, 0, 0),
    E(e, 5913114),
    k(e, 0, 0, 0.93, 1, 0.31, 0.05, 0, 1, r));
}
function pt(e, t, n) {
  let r = t.white(),
    i = t.uv(fe(n));
  (e.setMaterial(0.5, 0, 0.35, 3),
    E(e, 16777215),
    k(e, 0, 0, 0.12, 1.32, 0.2, 0.2, 1, 0, r, i, i, !1),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 1710618),
    k(e, 0, 0, 0, 0.12, 0.23, 0.23, 1, 0, r),
    k(e, 0, 0, 1.32, 1.36, 0.21, 0.21, 1, 0, r));
}
function mt(e, t, n) {
  let r = t.white(),
    i = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215),
    k(e, 0, 0, 0.12, 0.68, 0.75, 0.35, 0, 1, i));
  let a = t.uv(`wagon:${n}`);
  (e.quad(
    -0.72,
    0.7,
    0.36,
    0.72,
    0.7,
    0.36,
    0.72,
    0.86,
    -0.3,
    -0.72,
    0.86,
    -0.3,
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  ),
    E(e, 2763306));
  for (let t of [-0.6, 0.6]) A(e, t, 0.28, 0, 0.12, 0.07, r, 6);
  E(e, 16777215);
  let o = t.uv(n === 2 ? `price:1` : `price:3`);
  (M(e, 0.6, 0.86, -0.25, 0.6, 1.25, -0.25, 0.01, r),
    D(e, 0.38, -0.24, 0.82, -0.24, 1.08, 1.27, o));
}
function ht(e, t) {
  t.white();
  let n = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215),
    k(e, -0.88, 0, 0, 1.1, 0.03, 0.22, 0, 1, n),
    k(e, 0.88, 0, 0, 1.1, 0.03, 0.22, 0, 1, n),
    k(e, 0, -0.2, 0, 1.12, 0.9, 0.02, 0, 1, n));
  let r = t.uv(`shelf:spines`);
  e.quad(
    -0.86,
    0.05,
    0.2,
    0.86,
    0.05,
    0.2,
    0.86,
    1.05,
    0.1,
    -0.86,
    1.05,
    0.1,
    r.u0,
    r.v0,
    r.u1,
    r.v1,
  );
  let i = t.uv(`wagon:1`);
  (e.quad(
    -0.86,
    1.06,
    0.12,
    0.86,
    1.06,
    0.12,
    0.86,
    1.12,
    -0.18,
    -0.86,
    1.12,
    -0.18,
    i.u0,
    i.v0,
    i.u1,
    i.v1,
  ),
    E(e, 16777215),
    D(e, 0.3, 0.21, 0.8, 0.21, 0.82, 1.02, t.uv(`price:1`)));
}
function gt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    E(e, 5916212),
    A(e, 0, 0, 0, 3.4, 0.22, r, 6, !1, 0.14),
    e.setMaterial(0.85, 0, 0, 0),
    E(e, 16777215));
  let i = t.uv(`leaves:${n}`);
  (j(
    e,
    0,
    0,
    [0.4, 2.6, 2.3, 3.4, 2.7, 4.8, 2.2, 6.2, 1.2, 7.1, 0.05, 7.4],
    8,
    i,
  ),
    j(e, 0.9, 0.6, [0.3, 4.6, 1.5, 5.4, 1.7, 6.4, 1, 7.4, 0.05, 7.8], 6, i));
}
function _t(e, t, n, r = 2.9) {
  let i = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 9080466),
    M(e, 0, 0, 0, 0, r, 0, 0.04, i),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 16777215));
  let a = t.uv(n),
    o = n.startsWith(`crossing:`) ? 1.5 : 1,
    s = n.startsWith(`crossing:`) ? 0.4 : 0.37;
  (D(e, -o / 2, 0.05, o / 2, 0.05, r - 0.55, r - 0.55 + s, a),
    D(e, o / 2, -0.05, -o / 2, -0.05, r - 0.55, r - 0.55 + s, ut(a)),
    E(e, 4869714),
    k(e, 0, 0, r - 0.57, r - 0.53 + s, o / 2 + 0.03, 0.035, 0, 1, i));
}
function vt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.7, 0.2, 0, 0), E(e, 3811868));
  for (let t of [-0.62, 0.62]) k(e, t, 0, 0, 1.95, 0.05, 0.05, 0, 1, r);
  (k(e, 0, 0, 1.9, 1.98, 0.72, 0.14, 0, 1, r),
    k(e, 0, -0.02, 1.08, 1.85, 0.64, 0.035, 0, 1, r),
    e.setMaterial(0.6, 0, 0, 0),
    E(e, 16777215),
    D(e, -0.6, 0.02, 0.6, 0.02, 1.1, 1.83, t.uv(`explain:${n}`)));
}
function yt(e, t) {
  let n = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    E(e, 10131600),
    k(e, 0, 0, 0, 0.35, 0.55, 0.55, 0, 1, n),
    E(e, 9078912),
    k(e, 0, 0.75, 0, 0.32, 0.45, 0.3, 0, 1, n),
    e.setMaterial(0.45, 0.6, 0, 0),
    E(e, 2306090),
    A(e, 0, 0, 0.35, 1.25, 0.09, n, 8),
    j(e, 0, 0, [0.12, 1.25, 0.13, 1.33, 0.06, 1.42, 0.01, 1.44], 8, n),
    M(e, 0, 1, 0.06, 0, 0.92, 0.42, 0.035, n),
    M(e, 0, 1.36, -0.02, 0, 1.55, -0.58, 0.025, n),
    M(e, 0, 1.55, -0.58, 0, 1.18, -0.92, 0.02, n),
    e.setMaterial(0.6, 0.3, 0, 0),
    E(e, 4876954),
    A(e, 0.28, 0.72, 0.32, 0.6, 0.13, n, 8, !1, 0.15));
}
function bt(e, t, n) {
  let r = [],
    i = new p(2048, 3072),
    a = new Map(),
    o = (e, t) => {
      (i.reset(),
        t(),
        a.set(e, i.ni / 3),
        r.push({ name: e, geo: g(i, `${n}-${e}`) }));
    };
  for (let n of Object.keys(t.nobori ?? {}))
    o(`nobori:${n}`, () => dt(i, e, n));
  for (let n of Object.keys(t.aboard ?? {}))
    o(`aboard:${n}`, () => ft(i, e, n));
  for (let [n, r] of Object.entries(t.stand ?? {}))
    o(`stand:${n}`, () => pt(i, e, r));
  if (t.wagons) for (let t of [0, 1, 2]) o(`wagon:${t}`, () => mt(i, e, t));
  if ((t.shelf && o(`shelf`, () => ht(i, e)), t.trees))
    for (let t of [0, 1]) o(`tree:${t}`, () => gt(i, e, t));
  for (let n of Object.keys(t.plate ?? {}))
    o(`plate:${n}`, () => _t(i, e, `kplate:${n}`));
  for (let n of Object.keys(t.crossing ?? {}))
    o(`crossing:${n}`, () => _t(i, e, `crossing:${n}`, 4.2));
  for (let n of Object.keys(t.explain ?? {}))
    o(`explain:${n}`, () => vt(i, e, n));
  return (t.pump && o(`pump`, () => yt(i, e)), { models: r, tris: a });
}
var xt = (e, [t, n]) => (n > 24 ? e >= t || e < n - 24 : e >= t && e < n);
function St(e) {
  let t = null,
    n = !1,
    r = !1,
    i = -1,
    a = Error(`${e.name}: dropped while building`),
    o = `[${e.name}]`;
  function s(t) {
    for (let [n, r] of Object.entries(e.blocks))
      t.plan.blocks.find(
        (e) =>
          Math.abs(e.minX - r.minX) < 0.6 &&
          Math.abs(e.minZ - r.minZ) < 0.6 &&
          Math.abs(e.maxX - r.maxX) < 0.6 &&
          Math.abs(e.maxZ - r.maxZ) < 0.6,
      ) ||
        console.warn(
          `${o} block ${n} no longer matches the plan (layout.ts BLOCKS)`,
        );
  }
  async function c(i) {
    if (n || t) return;
    ((n = !0), (r = !1));
    let c = performance.now(),
      l = 0,
      m = ``,
      _ = performance.now(),
      v = async (e = !1, t = ``) => {
        let n = performance.now() - _;
        if (e || n > 1.2) {
          if ((n > l && ((l = n), (m = t)), await i.yieldFrame(), r)) throw a;
          _ = performance.now();
        }
      };
    try {
      s(i);
      let n =
          i.quality.mobile || i.quality.level === `low`
            ? 0
            : i.quality.level === `medium`
              ? 1
              : 2,
        y = e.shops(),
        b = e.old?.() ?? [],
        x = e.pieces?.() ?? [],
        S = new te(e.name, e.pageH ?? 2048);
      (Ke(S, y), it(S, b));
      for (let e of x) e.request(S);
      if (
        (ct(S, e.kit),
        await v(!0, `cells`),
        await i.region.signage.fontsReady?.catch(() => !1),
        r)
      )
        throw a;
      _ = performance.now();
      let w = f(C, i.quality),
        ee = S.paint(w),
        ne = ee.next();
      for (; !ne.done;) (await v(!1, `paint`), (ne = ee.next()));
      let T = ne.value,
        E = [],
        D = new p(8192, 12288),
        re = 0,
        O = 0,
        k = (t) => {
          if (!D.n) return !1;
          let n = g(D, `${e.name}-${t}`);
          (E.push({ name: t, geo: n }), (re += D.ni / 3));
          for (let e of Object.values(n.attributes)) O += e.array.byteLength;
          return ((O += n.index?.array.byteLength ?? 0), !0);
        },
        A = new Map();
      for (let e of y)
        (D.reset(),
          A.set(e.id, Je(D, e, S, n)),
          k(`shop:${e.id}`),
          D.reset(),
          Xe(D, e, S) && k(`shut:${e.id}`),
          D.reset(),
          Ze(D, e, S) && k(`open:${e.id}`),
          await v(!1, `shop`));
      for (let e of b)
        (D.reset(),
          A.set(`old:${e.id}`, at(D, e, S, n)),
          k(`old:${e.id}`),
          D.reset(),
          ot(D, e, S) && k(`oldopen:${e.id}`),
          D.reset(),
          st(D, e, S) && k(`oldshut:${e.id}`),
          await v(!1, `old`));
      let j = [],
        ie = [];
      for (let e of x)
        (D.reset(),
          j.push(...e.write(D, S, n)),
          k(`piece:${e.name}`) && ie.push(e),
          await v(!1, `piece:${e.name}`));
      let M = bt(S, e.kit, e.name);
      for (let e of M.models) {
        E.push(e);
        for (let t of Object.values(e.geo.attributes)) O += t.array.byteLength;
        O += e.geo.index?.array.byteLength ?? 0;
      }
      let ae = e.place(i);
      await v(!1, `kit`);
      let N = d(`opaque`, {
          policy: i.quality.materials,
          map: T,
          batched: !0,
          name: e.name,
        }),
        oe = y.length * 3 + b.length * 3 + ie.length + ae.instances.length + 16,
        P = new h(e.name, N, E, oe, !!i.quality.shadows);
      ((P.mesh.userData.owner = e.name), P.enableCulling(i.camera));
      let F = [],
        I = (e) => P.models.get(e),
        R = (e) => [(e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2];
      for (let e of y) {
        let [t, n] = R(e),
          r = (A.get(e.id) ?? 20) > 22 ? 520 : 420;
        P.add(I(`shop:${e.id}`), L, t, n, r);
        let i = e.hours;
        (i &&
          I(`shut:${e.id}`) !== void 0 &&
          F.push({
            id: P.add(I(`shut:${e.id}`), L, t, n, 300, !1),
            on: (e) => !xt(e, i),
            state: !1,
          }),
          I(`open:${e.id}`) !== void 0 &&
            F.push({
              id: P.add(I(`open:${e.id}`), L, t, n, 220, !1),
              on: (e) => !i || xt(e, i),
              state: !1,
            }));
      }
      for (let e of b) {
        let [t, n] = R(e);
        P.add(I(`old:${e.id}`), L, t, n, 420);
        let r = e.hours;
        (I(`oldopen:${e.id}`) !== void 0 &&
          F.push({
            id: P.add(I(`oldopen:${e.id}`), L, t, n, 220, !1),
            on: (e) => !r || xt(e, r),
            state: !1,
          }),
          r &&
            I(`oldshut:${e.id}`) !== void 0 &&
            F.push({
              id: P.add(I(`oldshut:${e.id}`), L, t, n, 260, !1),
              on: (e) => !xt(e, r),
              state: !1,
            }));
      }
      for (let e of ie) {
        let t = P.add(I(`piece:${e.name}`), L, e.x, e.z, e.range, !e.when);
        e.when && F.push({ id: t, on: e.when, state: !1 });
      }
      let ce = new Float32Array(16),
        z = 0;
      for (let e of ae.instances) {
        let t = I(e.model);
        if (t === void 0) {
          console.warn(`${o} kit model ${e.model} missing`);
          continue;
        }
        let n = e.y ?? i.plan.groundHeight(e.x, e.z),
          r = e.world ? L : se(ce, e.x, n, e.z, e.fx, e.fz, e.s ?? 1),
          a = P.add(t, r, e.x, e.z, e.range, !e.when);
        (e.when && F.push({ id: a, on: e.when, state: !1 }),
          (z += M.tris.get(e.model) ?? 0));
      }
      await v(!1, `batch`);
      let B = 0;
      for (let e of y) {
        let [t, n] = R(e);
        (i.statics.addOBB(
          t,
          n,
          (e.x1 - e.x0) / 2,
          (e.z1 - e.z0) / 2,
          0,
          0,
          A.get(e.id) ?? Ie(e),
          `building`,
        ),
          B++);
      }
      for (let e of b) {
        let [t, n] = R(e);
        (i.statics.addOBB(
          t,
          n,
          (e.x1 - e.x0) / 2,
          (e.z1 - e.z0) / 2,
          0,
          0,
          A.get(`old:${e.id}`) ?? et(e),
          `building`,
        ),
          B++);
      }
      for (let e of j)
        (i.statics.addOBB(e.cx, e.cz, e.hx, e.hz, 0, 0, e.h, `building`), B++);
      for (let e of ae.circles)
        (i.statics.addCircle(e.x, e.z, e.r, 0, e.h, `pole`), B++);
      if (r) throw a;
      i.scene.add(P.mesh);
      let le = i.params.has(`${e.name}atlas`);
      le || u(T);
      let V = Math.round((w * S.pageH) / C);
      t = {
        batch: P,
        tex: T,
        timed: F,
        stats: {
          shops: y.length,
          old: b.length,
          tris: Math.round(re + z),
          models: E.length,
          instances: P.count,
          atlas: w,
          atlasUsed: S.used,
          overflow: S.overflow,
          texMB: +((w * V * 4 * 4) / 3 / 1048576).toFixed(1),
          geoMB: +(O / 1048576).toFixed(2),
          colliders: B,
          buildMs: Math.round(performance.now() - c),
          maxSliceMs: +l.toFixed(1),
          maxSliceAt: m,
          slowCell: `${S.slowKey} ${S.slowMs.toFixed(1)}`,
        },
      };
      for (let e of E) e.geo.dispose();
      if (i.params.has(`debug`) || i.params.has(`${e.name}test`)) {
        let n = window;
        n[`__${e.name}`] = {
          stats: () => t?.stats,
          batch: () =>
            t && {
              count: t.batch.count,
              shown: t.batch.shown,
              tris: t.batch.shownTris,
            },
          atlas: () => (le ? T.image.toDataURL(`image/png`) : null),
        };
      }
      let H = t.stats;
      console.info(
        `[init] districts:${e.name} ${H.shops} buildings + ${H.old} wooden houses, ${H.tris} tris (${H.geoMB} MB geometry), atlas ${w} (${S.used}/${S.pageH} used, ${S.overflow} overflow, ${H.texMB} MB), ${B} colliders, ${H.buildMs} ms (slice max ${H.maxSliceMs} ms at ${m})`,
      );
    } catch (e) {
      if (e !== a) throw e;
    } finally {
      n = !1;
    }
  }
  function l(e) {
    i = -1;
  }
  function m(e, n) {
    let r = t;
    if (!r) return;
    let a = n.camera.position;
    r.batch.regather(a.x, a.z, n.quality.mobile ? 0.8 : 1, 8);
    let o = n.time.elapsed;
    if (o - i < 1) return;
    i = o;
    let s = n.env?.hour ?? 12,
      c = n.time.weekday ?? 1;
    for (let e of r.timed) {
      let t = e.on(s, c);
      t !== e.state && ((e.state = t), r.batch.setOn(e.id, t));
    }
  }
  function _(e) {
    r = !0;
    let n = t;
    ((t = null),
      (i = -1),
      n &&
        (n.batch.mesh.parent?.remove(n.batch.mesh),
        n.batch.mesh.dispose(),
        n.batch.mesh.material.dispose(),
        n.tex.dispose()));
  }
  return {
    init: c,
    start: l,
    update: m,
    unload: _,
    stats: () => t?.stats ?? null,
  };
}
var Ct = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8;
function K(e, t, n) {
  let r = n.map(({ a: n, b: r, ...i }) => {
    let a = e === `N` || e === `S`;
    return {
      ...i,
      dir: e,
      x0: a ? n : t[0],
      x1: a ? r : t[1],
      z0: a ? t[0] : n,
      z1: a ? t[1] : r,
    };
  });
  for (let t = 0; t < r.length; t++) {
    let n = r[t - 1],
      i = r[t + 1],
      a = e === `S` || e === `W`,
      o = n ? Ct(n) : 0,
      s = i ? Ct(i) : 0;
    ((r[t].coverL ??= a ? o : s), (r[t].coverR ??= a ? s : o));
  }
  return r;
}
var q = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, sub: i }),
  J = (e, t, n, r) => ({ main: e, floor: t, bg: n, fg: r }),
  Y = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, top: i }),
  X = (e, t = `#2a1a0e`, n = `#f0dca8`, r) => ({
    main: e,
    sub: r,
    bg: t,
    fg: n,
    style: `wood`,
    serif: !0,
  }),
  wt = (e, t, n, r) => ({
    main: e,
    sub: r,
    bg: t,
    fg: n,
    style: `enamel`,
    serif: !0,
  });
function Tt(e, t) {
  let n = (e, t) =>
      t === `N`
        ? { at: e.z0, lo: e.x0, hi: e.x1, axis: `z`, sgn: -1 }
        : t === `S`
          ? { at: e.z1, lo: e.x0, hi: e.x1, axis: `z`, sgn: 1 }
          : t === `W`
            ? { at: e.x0, lo: e.z0, hi: e.z1, axis: `x`, sgn: -1 }
            : { at: e.x1, lo: e.z0, hi: e.z1, axis: `x`, sgn: 1 },
    r = { N: `S`, S: `N`, E: `W`, W: `E` },
    i = { N: `W`, S: `E`, E: `N`, W: `S` };
  for (let a of e)
    for (let o of [`N`, `E`, `S`, `W`]) {
      if (o === a.dir || o === a.corner) continue;
      let s = n(a, o),
        c = [];
      for (let i of e) {
        if (i === a) continue;
        let e = n(i, r[o]);
        if (e.axis !== s.axis || Math.abs(e.at - s.at) > 0.6) continue;
        let l = Math.max(s.lo, e.lo),
          u = Math.min(s.hi, e.hi);
        u - l > 0.05 && c.push([l, u, t(i)]);
      }
      if (!c.length) continue;
      c.sort((e, t) => e[0] - t[0]);
      let l = s.lo,
        u = 1 / 0;
      for (let [e, t, n] of c) {
        if (e > l + 0.35) break;
        ((l = Math.max(l, t)), (u = Math.min(u, n)));
      }
      let d = l >= s.hi - 0.35 ? u : 0;
      o === r[a.dir]
        ? (a.coverB = d)
        : o === i[a.dir]
          ? (a.coverR = d)
          : (a.coverL = d);
    }
  return e;
}
var Et = {
    b20092: { minX: -583.25, minZ: -384.25, maxX: -503.25, maxZ: -303.25 },
    b20091: { minX: -583.25, minZ: -483.75, maxX: -503.25, maxZ: -415.75 },
    b20049: { minX: -790, minZ: -551.25, maxX: -726.25, maxZ: -490.25 },
    b20048: { minX: -773.25, minZ: -714.75, maxX: -726.25, maxZ: -624.25 },
    b20064: { minX: -713.75, minZ: -714.75, maxX: -666.25, maxZ: -624.25 },
  },
  Dt = { z0: -363.3, z1: -357.3, x0: -583.25, x1: -503.25 },
  Ot = [
    {
      box: { ...Et.b20092 },
      label: `suidobashi-jimbocho-south (神保町古書店街 south row, すずらん通り)`,
    },
    {
      box: { minX: -583.25, minZ: -436.2, maxX: -503.25, maxZ: -415.75 },
      label: `suidobashi-jimbocho-north (靖国通り north side: books, curry, sports)`,
    },
    {
      box: { ...Et.b20049 },
      label: `suidobashi-misakicho (三崎町: the Dome crowd shops on 白山通り)`,
    },
    {
      box: { minX: -773.25, minZ: -636.5, maxX: -726.25, maxZ: -624.25 },
      label: `suidobashi-ekimae-w (水道橋駅 東口 front)`,
    },
    {
      box: { minX: -713.75, minZ: -636.5, maxX: -666.25, maxZ: -624.25 },
      label: `suidobashi-ekimae-e (水道橋駅 東口 front, east)`,
    },
  ],
  kt = [
    { minX: -590, minZ: -442, maxX: -495, maxZ: -298 },
    { minX: -795, minZ: -642, maxX: -660, maxZ: -485 },
  ],
  At = [10, 18.5],
  jt = [11, 20],
  Mt = [10, 21],
  Nt = K(
    `N`,
    [-384.1, -363.5],
    [
      {
        a: -583.1,
        b: -574.4,
        id: `lawsan`,
        floors: 8,
        corner: `W`,
        wall: 14211284,
        wallKind: `tile`,
        win: `tenant`,
        shop: `konbini`,
        fascia: q(`brand.lawsan`, `#0068b7`, `#ffffff`, `#7fb2e5`),
        winWords: [`trade.juku.sign.kobetsu`, ``, `suido.books.f-kosho`],
      },
      {
        a: -574.4,
        b: -567.6,
        id: `seiundo`,
        floors: 4,
        corner: `S`,
        wall: 12102292,
        wallKind: `tile`,
        win: `warm`,
        shop: `books`,
        hours: At,
        awning: 2771498,
        fascia: X(
          `suido.books.seiundo`,
          `#2a1a0e`,
          `#f0dca8`,
          `suido.books.yama`,
        ),
        vsign: {
          ...Y(`suido.books.kosho`, `#2a1a0e`, `#f0dca8`),
          style: `wood`,
        },
      },
      {
        a: -567.6,
        b: -559,
        id: `komatsuyama`,
        floors: 5,
        wall: 13156528,
        wallKind: `tile`,
        win: `tenant`,
        shop: `books`,
        hours: At,
        fascia: wt(
          `suido.books.komatsuyama`,
          `#f4ecd8`,
          `#2a1a0e`,
          `suido.books.shashin`,
        ),
        vsign: Y(`suido.books.komatsuyama`, `#f4ecd8`, `#3a2010`, `#3a2010`),
        winWords: [`suido.books.f-gallery`, `suido.books.f-shashin`],
      },
      {
        a: -559,
        b: -553,
        id: `nishikie`,
        floors: 3,
        wall: 6965808,
        wallKind: `tile`,
        win: `warm`,
        shop: `ukiyoe`,
        hours: [10.5, 18.5],
        front: `lattice`,
        fascia: X(
          `suido.books.nishikie`,
          `#24180e`,
          `#e8d8a8`,
          `suido.books.ukiyoe`,
        ),
        vsign: {
          ...Y(`suido.books.nishikie-v`, `#24180e`, `#e8d8a8`),
          style: `wood`,
        },
      },
      {
        a: -553,
        b: -546.4,
        id: `sawada`,
        floors: 4,
        corner: `S`,
        wall: 11050120,
        wallKind: `tile`,
        win: `warm`,
        shop: `books`,
        hours: At,
        fascia: X(
          `suido.books.sawada`,
          `#1a2a3a`,
          `#e8e0c8`,
          `suido.books.bunko`,
        ),
      },
      {
        a: -546.4,
        b: -539.4,
        id: `mall`,
        floors: 8,
        wall: 12894392,
        wallKind: `tile`,
        win: `tenant`,
        shop: `books`,
        hours: At,
        fascia: q(`suido.books.mall`, `#f6e6b0`, `#5a2a10`, `#7a3a10`),
        vsign: Y(`suido.books.mall`, `#5a2a10`, `#f6e6b0`, `#f6e6b0`),
        bands: [
          J(`suido.books.f-kosho`, 2, `#f6e6b0`, `#5a2a10`),
          J(`suido.books.f-manga`, 4, `#5a2a10`, `#f6e6b0`),
        ],
        winWords: [
          ``,
          ``,
          ``,
          `suido.books.f-kotenseki`,
          ``,
          `trade.juku.sign.kobetsu`,
        ],
      },
      {
        a: -539.4,
        b: -531,
        id: `naigai`,
        floors: 4,
        corner: `S`,
        wall: 9080468,
        wallKind: `alc`,
        win: `warm`,
        shop: `books`,
        hours: At,
        awning: 5904912,
        fascia: wt(
          `suido.books.naigai`,
          `#5a1a10`,
          `#f4ecd8`,
          `suido.books.yosho`,
        ),
      },
      {
        a: -531,
        b: -503.4,
        id: `sanseido`,
        floors: 9,
        corner: `E`,
        wall: 15526110,
        wallKind: `tile`,
        win: `office`,
        shop: `bigbooks`,
        hours: Mt,
        fascia: q(
          `suido.books.sanseido`,
          `#ffffff`,
          `#1a1a6a`,
          `#c01818`,
          `suido.books.honten`,
        ),
        vsign: Y(`suido.books.sanseido`, `#1a1a6a`, `#ffffff`, `#c01818`),
        vsign2: Y(`suido.books.shoten`, `#ffffff`, `#1a1a6a`, `#c01818`),
        roofBoard: q(`suido.books.sanseido`, `#1a1a6a`, `#ffffff`, `#c01818`),
        bands: [
          J(`suido.books.f-bungei`, 2, `#1a1a6a`, `#ffffff`),
          J(`suido.books.f-jinbun`, 4, `#ffffff`, `#1a1a6a`),
          J(`suido.books.f-riko`, 6, `#1a1a6a`, `#ffffff`),
          J(`suido.books.f-yosho`, 8, `#ffffff`, `#1a1a6a`),
        ],
      },
    ],
  ),
  Pt = K(
    `N`,
    [-357.1, -333.2],
    [
      {
        a: -563,
        b: -553.4,
        id: `tokyokan`,
        floors: 6,
        wall: 2763824,
        wallKind: `alc`,
        win: `warm`,
        shop: `bigbooks`,
        hours: Mt,
        fascia: q(`suido.suzu.tokyokan`, `#141414`, `#e8c86a`, `#e8c86a`),
        vsign: Y(`suido.suzu.tokyokan`, `#141414`, `#e8c86a`, `#e8c86a`),
      },
      {
        a: -553.4,
        b: -546,
        id: `tsutakazura`,
        floors: 3,
        wall: 8014386,
        wallKind: `ivy`,
        win: `warm`,
        shop: `kissa`,
        hours: [9, 22],
        ivy: !0,
        front: `lattice`,
        fascia: X(
          `suido.suzu.tsutakazura`,
          `#3a1a0a`,
          `#f4e2b8`,
          `suido.suzu.kissa`,
        ),
        vsign: {
          ...Y(`suido.suzu.tsutakazura`, `#7a1a10`, `#f4e2b8`),
          style: `wood`,
        },
      },
      {
        a: -546,
        b: -540,
        id: `choko`,
        floors: 4,
        wall: 14207152,
        wallKind: `tile`,
        win: `warm`,
        shop: `chinese`,
        hours: [11, 21.5],
        fascia: q(
          `suido.suzu.choko`,
          `#c01818`,
          `#ffe14a`,
          `#ffe14a`,
          `suido.suzu.hiyashi`,
        ),
        vsign: Y(`suido.suzu.choko`, `#c01818`, `#ffe14a`),
      },
      {
        a: -540,
        b: -533.4,
        id: `grill`,
        floors: 3,
        wall: 10119754,
        wallKind: `brick`,
        win: `warm`,
        shop: `beerhall`,
        hours: [11, 22],
        awning: 3810324,
        fascia: wt(`suido.suzu.grill`, `#f4ecd8`, `#3a2414`, `suido.suzu.beer`),
      },
      {
        a: -533.4,
        b: -523,
        id: `bunseido`,
        floors: 4,
        wall: 15260864,
        wallKind: `stucco`,
        win: `warm`,
        shop: `artsupply`,
        hours: [10, 19],
        fascia: wt(
          `suido.suzu.bunseido`,
          `#1a3a2a`,
          `#e8dcb0`,
          `suido.suzu.gazai`,
        ),
        vsign: Y(`suido.suzu.bunseido`, `#1a3a2a`, `#e8dcb0`),
      },
    ],
  ),
  Ft = K(
    `W`,
    [-583.1, -563],
    [
      {
        a: -357.1,
        b: -345,
        id: `saburoku`,
        floors: 3,
        corner: `N`,
        wall: 13156528,
        wallKind: `tile`,
        win: `warm`,
        shop: `ramen`,
        hours: [11, 22],
        fascia: q(`suido.food.saburoku`, `#f4ecd8`, `#c01818`, `#c01818`),
        noren: { key: `suido.food.ramen`, bg: `#c01818`, fg: `#ffffff` },
      },
      {
        a: -345,
        b: -333,
        id: `kitchen-taro`,
        floors: 4,
        wall: 14733488,
        wallKind: `tile`,
        win: `warm`,
        shop: `teishoku`,
        hours: [11, 21],
        awning: 12610080,
        fascia: q(
          `suido.food.taro`,
          `#ffffff`,
          `#c06a20`,
          `#c06a20`,
          `suido.food.yoshoku`,
        ),
      },
      {
        a: -333,
        b: -318,
        id: `haku-office`,
        floors: 8,
        wall: 13159632,
        wallKind: `alc`,
        win: `tenant`,
        shop: `lobby`,
        fascia: q(`suido.street.chiyoda`, `#ffffff`, `#2a3a5a`),
        winWords: [
          `trade.juku.sign.kobetsu`,
          ``,
          `suido.street.f-eikaiwa`,
          ``,
          ``,
          ``,
        ],
      },
      {
        a: -318,
        b: -303.4,
        id: `haku-mansion`,
        floors: 9,
        corner: `S`,
        wall: 14209220,
        wallKind: `tile`,
        win: `office`,
        shop: `drug`,
        hours: [9, 22],
        fascia: q(`brand.matsukiyoji`, `#ffe100`, `#1d2088`, `#e4007f`),
      },
    ],
  ),
  It = K(
    `E`,
    [-523, -503.4],
    [
      {
        a: -357.1,
        b: -345,
        id: `sakaba-suzuran`,
        floors: 2,
        corner: `N`,
        wall: 9075306,
        wallKind: `concrete`,
        win: `warm`,
        shop: `izakaya`,
        front: `lattice`,
        hours: [16, 23.5],
        fascia: X(`suido.food.sakaba`, `#2a1a0e`, `#f0dca8`),
        noren: { key: `suido.food.noren-sake`, bg: `#1a2a5a`, fg: `#ffffff` },
        lanterns: [`suido.food.chochin`, `suido.food.chochin`],
      },
      {
        a: -345,
        b: -318,
        id: `seam-mansion`,
        floors: 10,
        wall: 14473424,
        wallKind: `tile`,
        win: `office`,
        shop: `lobby`,
        fascia: q(`suido.street.mansion`, `#ffffff`, `#3a3a3a`),
      },
      {
        a: -318,
        b: -303.4,
        id: `seam-corner`,
        floors: 6,
        corner: `S`,
        wall: 12896460,
        wallKind: `alc`,
        win: `tenant`,
        shop: `copyshop`,
        hours: [9, 21],
        fascia: q(`suido.street.copy`, `#ffffff`, `#1a6ac0`, `#1a6ac0`),
        winWords: [``, `suido.street.f-eikaiwa`],
      },
    ],
  ),
  Lt = K(
    `S`,
    [-333, -303.4],
    [
      {
        a: -563,
        b: -543,
        id: `back-1`,
        floors: 9,
        wall: 13682876,
        wallKind: `tile`,
        win: `office`,
        shop: `lobby`,
        fascia: q(`suido.street.mansion`, `#ffffff`, `#3a3a3a`),
      },
      {
        a: -543,
        b: -523,
        id: `back-2`,
        floors: 7,
        wall: 12370116,
        wallKind: `alc`,
        win: `tenant`,
        shop: `lobby`,
        fascia: q(`suido.street.chiyoda`, `#ffffff`, `#2a3a5a`),
      },
    ],
  ),
  Rt = K(
    `S`,
    [-436.1, -415.9],
    [
      {
        a: -583.1,
        b: -572,
        id: `shosen`,
        floors: 8,
        corner: `W`,
        wall: 15131870,
        wallKind: `tile`,
        win: `office`,
        shop: `bigbooks`,
        hours: Mt,
        fascia: q(`suido.books.shosen`, `#e60012`, `#ffffff`, `#ffffff`),
        vsign: Y(`suido.books.shosen`, `#e60012`, `#ffffff`),
        bands: [
          J(`suido.books.f-tetsudo`, 3, `#ffffff`, `#e60012`),
          J(`suido.books.f-pro`, 5, `#e60012`, `#ffffff`),
          J(`suido.books.f-idol`, 6, `#ffffff`, `#e60012`),
          J(`suido.books.f-sugaku`, 7, `#e60012`, `#ffffff`),
        ],
      },
      {
        a: -572,
        b: -566,
        id: `mangetsu`,
        floors: 2,
        wall: 14209216,
        wallKind: `concrete`,
        win: `warm`,
        shop: `curry`,
        hours: [11, 20],
        awning: 15253536,
        fascia: q(`suido.curry.mangetsu`, `#ffe14a`, `#c01818`, `#c01818`),
      },
      {
        a: -566,
        b: -559,
        id: `sonata`,
        floors: 3,
        wall: 8018498,
        wallKind: `brick`,
        win: `warm`,
        shop: `kissa`,
        hours: [11, 22],
        awning: 3873802,
        fascia: X(
          `suido.kissa.sonata`,
          `#2a1a0e`,
          `#f0dca8`,
          `suido.kissa.meikyoku`,
        ),
        vsign: {
          ...Y(`suido.kissa.sonata`, `#2a1a0e`, `#f0dca8`),
          style: `wood`,
        },
      },
      {
        a: -559,
        b: -551,
        id: `diamond-jimbo`,
        floors: 5,
        wall: 13683908,
        wallKind: `tile`,
        win: `tenant`,
        shop: `ticket`,
        hours: [10, 20],
        fascia: q(
          `suido.ticket.diamond`,
          `#ffffff`,
          `#1a3a9a`,
          `#c01818`,
          `suido.ticket.kaitori`,
        ),
        vsign: Y(`suido.ticket.kinken`, `#1a3a9a`, `#ffffff`, `#ffd400`),
        bands: [J(`suido.curry.abyssinia-2f`, 2, `#2a5a2a`, `#ffe14a`)],
      },
      {
        a: -551,
        b: -543,
        id: `bunkendo`,
        floors: 4,
        wall: 11577496,
        wallKind: `tile`,
        win: `warm`,
        shop: `books`,
        hours: At,
        fascia: X(
          `suido.books.bunkendo`,
          `#2a1a0e`,
          `#f0dca8`,
          `suido.books.kotenseki`,
        ),
      },
      {
        a: -543,
        b: -533,
        id: `victory-jimbo`,
        floors: 7,
        wall: 15132906,
        wallKind: `alc`,
        win: `office`,
        shop: `ski`,
        hours: jt,
        fascia: q(
          `suido.sports.victory`,
          `#0a3a8a`,
          `#ffffff`,
          `#e60012`,
          `suido.sports.jimbo`,
        ),
        vsign: Y(`suido.sports.victory`, `#0a3a8a`, `#ffffff`, `#e60012`),
        bands: [
          J(`suido.sports.f-ski`, 2, `#0a3a8a`, `#ffffff`),
          J(`suido.sports.f-board`, 3, `#e60012`, `#ffffff`),
        ],
      },
      {
        a: -533,
        b: -522,
        id: `golf-jimbo`,
        floors: 6,
        wall: 14474975,
        wallKind: `alc`,
        win: `office`,
        shop: `golf`,
        hours: jt,
        fascia: q(`suido.sports.golf`, `#0a5a2a`, `#ffffff`, `#ffffff`),
        vsign: Y(`suido.sports.golf`, `#0a5a2a`, `#ffffff`),
      },
      {
        a: -522,
        b: -503.4,
        id: `ishida-jimbo`,
        floors: 8,
        corner: `E`,
        wall: 15263456,
        wallKind: `tile`,
        win: `office`,
        shop: `outdoor`,
        hours: jt,
        fascia: q(
          `suido.sports.ishida`,
          `#ffffff`,
          `#0a5a2a`,
          `#0a5a2a`,
          `suido.sports.yama`,
        ),
        vsign: Y(`suido.sports.ishida`, `#0a5a2a`, `#ffffff`),
        bands: [
          J(`suido.sports.f-yama`, 2, `#0a5a2a`, `#ffffff`),
          J(`suido.sports.f-ski`, 4, `#ffffff`, `#0a5a2a`),
        ],
      },
    ],
  ),
  zt = K(
    `N`,
    [-551.1, -531],
    [
      {
        a: -789.6,
        b: -781,
        id: `daikichi`,
        floors: 3,
        wall: 14210252,
        wallKind: `tile`,
        win: `tenant`,
        shop: `ticket`,
        hours: [10, 20.5],
        fascia: q(
          `suido.ticket.daikichi`,
          `#ffd400`,
          `#c01818`,
          `#c01818`,
          `suido.ticket.yakyu`,
        ),
        vsign: Y(`suido.ticket.kinken`, `#c01818`, `#ffffff`, `#ffd400`),
      },
      {
        a: -781,
        b: -773.5,
        id: `misakiya`,
        floors: 3,
        wall: 13156528,
        wallKind: `tile`,
        win: `warm`,
        shop: `ramen`,
        hours: [11, 26],
        awning: 16765952,
        fascia: q(
          `suido.food.misakiya`,
          `#ffd400`,
          `#1a1a1a`,
          `#c01818`,
          `suido.food.iekei`,
        ),
        noren: { key: `suido.food.ramen`, bg: `#1a1a1a`, fg: `#ffd400` },
      },
      {
        a: -773.5,
        b: -764,
        id: `sportsbar`,
        floors: 2,
        wall: 2763824,
        wallKind: `alc`,
        win: `dark`,
        shop: `sportsbar`,
        hours: [12, 26],
        front: `open`,
        fascia: q(
          `suido.bar.diamond`,
          `#101010`,
          `#ffd400`,
          `#e86a10`,
          `suido.bar.live`,
        ),
      },
      {
        a: -764,
        b: -757,
        id: `kyujomae`,
        floors: 3,
        wall: 15263972,
        wallKind: `tile`,
        win: `tenant`,
        shop: `goods`,
        hours: [10, 21],
        fascia: q(
          `suido.goods.kyujomae`,
          `#1a2a6a`,
          `#ffffff`,
          `#e86a10`,
          `suido.goods.baseball`,
        ),
        vsign: Y(`suido.goods.yakyu`, `#1a2a6a`, `#ffffff`, `#e86a10`),
      },
      {
        a: -757,
        b: -750,
        id: `yoshidaya`,
        floors: 4,
        wall: 14210252,
        wallKind: `tile`,
        win: `office`,
        shop: `gyudon`,
        fascia: q(`brand.yoshidaya`, `#f08300`, `#ffffff`, `#7d4a1f`),
      },
      {
        a: -750,
        b: -742,
        id: `kyukaiura`,
        floors: 4,
        wall: 12103840,
        wallKind: `tile`,
        win: `warm`,
        shop: `izakaya`,
        front: `lattice`,
        hours: [16, 24],
        fascia: X(`suido.food.kyukaiura`, `#2a1a0e`, `#f0dca8`),
        noren: { key: `suido.food.noren-sake`, bg: `#5a1a10`, fg: `#ffffff` },
        lanterns: [`suido.food.chochin`, `suido.food.chochin-2`],
        vsign: Y(`suido.food.kyukaiura`, `#ffffff`, `#c01818`),
      },
      {
        a: -742,
        b: -734,
        id: `tsukuba-misaki`,
        floors: 5,
        wall: 13157564,
        wallKind: `tile`,
        win: `office`,
        shop: `soba`,
        fascia: q(`brand.tsukubasoba`, `#ffcc00`, `#1d2088`, `#e60012`),
      },
      {
        a: -734,
        b: -726.4,
        id: `7twelve-misaki`,
        floors: 8,
        corner: `E`,
        wall: 14474456,
        wallKind: `tile`,
        win: `tenant`,
        shop: `konbini`,
        fascia: q(`brand.7twelve`, `#ffffff`, `#008c4a`, `#f58220`),
        winWords: [``, `trade.juku.sign.kobetsu`, ``, ``],
      },
    ],
  ),
  Bt = K(
    `E`,
    [-746, -726.4],
    [
      {
        a: -531,
        b: -515,
        id: `taisho-misaki`,
        floors: 4,
        wall: 14207152,
        wallKind: `tile`,
        win: `warm`,
        shop: `chinese`,
        hours: [11, 23],
        fascia: q(`brand.gyozanotaisho`, `#e60012`, `#ffd400`, `#ffd400`),
      },
      {
        a: -515,
        b: -490.4,
        id: `college`,
        floors: 9,
        corner: `S`,
        wall: 13159632,
        wallKind: `alc`,
        win: `tenant`,
        shop: `lobby`,
        fascia: q(`suido.street.college`, `#ffffff`, `#1a3a6a`, `#1a3a6a`),
        winWords: [
          `suido.street.f-kogi`,
          `suido.street.f-kogi`,
          ``,
          `suido.street.f-kogi`,
          ``,
          ``,
          ``,
        ],
      },
    ],
  ),
  Vt = K(
    `S`,
    [-531, -490.4],
    [
      {
        a: -789.6,
        b: -768,
        id: `misaki-mansion`,
        floors: 10,
        wall: 13946048,
        wallKind: `tile`,
        win: `office`,
        shop: `lobby`,
        fascia: q(`suido.street.mansion`, `#ffffff`, `#3a3a3a`),
      },
      {
        a: -768,
        b: -746,
        id: `misaki-office`,
        floors: 7,
        wall: 12633288,
        wallKind: `alc`,
        win: `tenant`,
        shop: `realestate`,
        hours: [10, 19],
        fascia: q(`suido.street.fudosan`, `#ffffff`, `#0a6a3a`, `#0a6a3a`),
      },
    ],
  ),
  Ht = K(
    `S`,
    [-635.8, -624.4],
    [
      {
        a: -772.9,
        b: -766,
        id: `eki-ticket`,
        floors: 2,
        corner: `W`,
        wall: 14210252,
        wallKind: `tile`,
        win: `tenant`,
        shop: `ticket`,
        hours: [9, 21],
        gh: 3.8,
        fascia: q(
          `suido.ticket.ekimae`,
          `#c01818`,
          `#ffffff`,
          `#ffd400`,
          `suido.ticket.yakyu`,
        ),
      },
      {
        a: -766,
        b: -760.5,
        id: `eki-soba`,
        floors: 2,
        wall: 13157564,
        wallKind: `tile`,
        win: `warm`,
        shop: `soba`,
        hours: [6.5, 23],
        gh: 3.8,
        fascia: q(`suido.food.ekisoba`, `#1a2a5a`, `#ffffff`, `#ffd400`),
      },
      {
        a: -760.5,
        b: -752,
        id: `eki-gate`,
        floors: 2,
        wall: 15263972,
        wallKind: `alc`,
        win: `office`,
        shop: `gates`,
        gh: 3.8,
        fascia: q(
          `suido.station.east`,
          `#ffffff`,
          `#1a1a1a`,
          `#ffd400`,
          `suido.station.exit`,
        ),
      },
      {
        a: -752,
        b: -744,
        id: `eki-ramen`,
        floors: 2,
        wall: 13156528,
        wallKind: `tile`,
        win: `warm`,
        shop: `ramen`,
        hours: [11, 24],
        gh: 3.8,
        fascia: q(`suido.food.domeken`, `#f4ecd8`, `#c01818`, `#c01818`),
        noren: { key: `suido.food.ramen`, bg: `#c01818`, fg: `#ffffff` },
      },
      {
        a: -744,
        b: -735,
        id: `eki-dotore`,
        floors: 2,
        wall: 14210252,
        wallKind: `tile`,
        win: `warm`,
        shop: `cafe`,
        hours: [7, 23],
        gh: 3.8,
        fascia: q(`brand.dotore`, `#ffd400`, `#3b1c0a`, `#3b1c0a`),
      },
      {
        a: -735,
        b: -727.5,
        id: `eki-newnights`,
        floors: 2,
        corner: `E`,
        wall: 14474456,
        wallKind: `tile`,
        win: `office`,
        shop: `konbini`,
        gh: 3.8,
        fascia: q(`brand.newnights`, `#ffffff`, `#009a3e`, `#f08300`),
      },
    ],
  ),
  Ut = K(
    `S`,
    [-635.8, -624.4],
    [
      {
        a: -713.5,
        b: -705,
        id: `yakiton-misaki`,
        floors: 2,
        corner: `W`,
        wall: 9075306,
        wallKind: `concrete`,
        win: `warm`,
        shop: `yakitori`,
        front: `open`,
        hours: [16, 24],
        gh: 3.8,
        fascia: q(`suido.food.yakiton`, `#c01818`, `#ffffff`, `#ffffff`),
        lanterns: [
          `suido.food.chochin-2`,
          `suido.food.chochin-2`,
          `suido.food.chochin-2`,
        ],
      },
      {
        a: -705,
        b: -698,
        id: `shokudo`,
        floors: 2,
        wall: 14209216,
        wallKind: `tile`,
        win: `warm`,
        shop: `teishoku`,
        hours: [11, 22],
        gh: 3.8,
        fascia: q(`suido.food.shokudo`, `#ffffff`, `#1a1a1a`, `#c01818`),
        noren: {
          key: `suido.food.noren-teishoku`,
          bg: `#1a3a6a`,
          fg: `#ffffff`,
        },
      },
      {
        a: -698,
        b: -688,
        id: `marufuku`,
        floors: 2,
        wall: 13947080,
        wallKind: `tile`,
        win: `tenant`,
        shop: `ticket`,
        hours: [10, 20],
        gh: 3.8,
        fascia: q(
          `suido.ticket.marufuku`,
          `#1a6a3a`,
          `#ffffff`,
          `#ffd400`,
          `suido.ticket.kaitori`,
        ),
      },
      {
        a: -688,
        b: -680,
        id: `sumiya`,
        floors: 2,
        wall: 14210252,
        wallKind: `tile`,
        win: `office`,
        shop: `gyudon`,
        gh: 3.8,
        fascia: q(`brand.sumiya`, `#e60012`, `#ffffff`, `#ffd200`),
      },
      {
        a: -680,
        b: -666.5,
        id: `daikon`,
        floors: 2,
        corner: `E`,
        wall: 14474456,
        wallKind: `tile`,
        win: `office`,
        shop: `drug`,
        hours: [9, 22.5],
        gh: 3.8,
        fascia: q(`brand.daikon`, `#e60012`, `#ffe100`, `#ffffff`),
      },
    ],
  );
function Wt() {
  return Tt(
    [
      ...Nt,
      ...Pt,
      ...Ft,
      ...It,
      ...Lt,
      ...Rt,
      ...zt,
      ...Bt,
      ...Vt,
      ...Ht,
      ...Ut,
    ].map((e) => ({ ...e })),
    Ie,
  );
}
[...Ht, ...Ut];
var Gt = 0.15,
  Kt = 3;
function qt(e, t, n, r, i) {
  z(e, t, n, r, i, `#8e8a84`);
  let a = 11,
    o = () => (a = (a * 16807) % 2147483647) / 2147483647,
    s = r / 8,
    c = i / 8;
  for (let r = 0; r < 8; r++)
    for (let i = 0; i < 8; i++) {
      let a = 0.85 + o() * 0.25;
      ((e.fillStyle = `rgb(${Math.round(150 * a)},${Math.round(144 * a)},${Math.round(136 * a)})`),
        e.fillRect(
          t + i * s + ((r % 2) * s) / 2 + 1,
          n + r * c + 1,
          s - 2,
          c - 2,
        ));
    }
}
var Jt = {
  main: `suido.suzu.gate`,
  bg: `#1a3a2a`,
  fg: `#ffffff`,
  acc: `#e8d070`,
};
function Yt() {
  let e = Dt;
  return [
    {
      name: `suzuran-lane`,
      x: (e.x0 + e.x1) / 2,
      z: (e.z0 + e.z1) / 2,
      range: 240,
      request(e) {
        e.need(`suido:setts`, 128, 128, qt);
      },
      write(t, n) {
        let r = n.uv(`suido:setts`);
        (t.setMaterial(0.85, 0, 0, 0), E(t, 16777215));
        let i = Gt + m.GROUND,
          a = Math.round((e.x1 - e.x0 - 0.5) / 3),
          o = e.x0 + 0.25,
          s = e.x1 - 0.25,
          c = e.z0 + 0.1,
          l = e.z1 - 0.1;
        for (let e = 0; e < a; e++)
          for (let n = 0; n < 2; n++)
            O(
              t,
              o + ((s - o) * e) / a,
              c + ((l - c) * n) / 2,
              o + ((s - o) * (e + 1)) / a,
              c + ((l - c) * (n + 1)) / 2,
              i,
              r,
            );
        E(t, 5921366);
        let u = n.white(),
          d = (e.z0 + e.z1) / 2;
        return (O(t, o, d - 0.11, s, d + 0.11, i + m.PAINT, u), []);
      },
    },
    {
      name: `suzuran-lamps`,
      x: (e.x0 + e.x1) / 2,
      z: (e.z0 + e.z1) / 2,
      range: 300,
      request(e) {
        e.need(U(Jt), 384, 48, de(Jt));
      },
      write(t, n, r) {
        let i = n.white(),
          a = [];
        [-575, -565, -555, -545, -535, -525, -515, -508].forEach((n, o) => {
          let s = o % 2 ? e.z1 - 0.55 : e.z0 + 0.55,
            c = o % 2 ? -1 : 1;
          (t.setMaterial(0.45, 0.6, 0, 0),
            E(t, 1976868),
            M(t, n, Gt, s, n, 4.05, s, 0.055, i),
            k(t, n, s, Gt, 0.5, 0.12, 0.12, 0, 1, i),
            M(t, n, 4.05, s, n, 4.300000000000001, s + c * 0.35, 0.03, i),
            M(
              t,
              n - 0.45,
              4.1000000000000005,
              s + c * 0.35,
              n + 0.45,
              4.1000000000000005,
              s + c * 0.35,
              0.025,
              i,
            ),
            t.setMaterial(0.25, 0, 0.75, Kt),
            E(t, 16774880));
          for (let e of [-0.4, 0, 0.4]) {
            let a = Gt + (e === 0 ? 3.55 : 3.62);
            j(
              t,
              n + e,
              s + c * 0.35,
              [
                0.17,
                a,
                0.16,
                a + 0.06,
                0.11,
                a + 0.2,
                0.06,
                a + 0.29,
                0.012,
                a + 0.33,
              ],
              r > 0 ? 8 : 6,
              i,
            );
          }
          a.push({ cx: n, cz: s, hx: 0.12, hz: 0.12, h: 3.9 });
        });
        let o = n.uv(U(Jt));
        for (let n of [e.x0 + 0.55, e.x1 - 0.55]) {
          (t.setMaterial(0.45, 0.6, 0, 0), E(t, 1976868));
          for (let r of [e.z0 + 0.25, e.z1 - 0.25])
            (k(t, n, r, Gt, 5.45, 0.1, 0.1, 0, 1, i),
              a.push({ cx: n, cz: r, hx: 0.1, hz: 0.1, h: 5.3 }));
          (k(
            t,
            n,
            (e.z0 + e.z1) / 2,
            4.5,
            4.6000000000000005,
            0.08,
            (e.z1 - e.z0) / 2,
            1,
            0,
            i,
          ),
            t.setMaterial(0.5, 0, 0.35, Kt),
            E(t, 16777215));
          let r = e.z0 + 0.45,
            s = e.z1 - 0.45;
          (D(
            t,
            n - 0.07,
            s,
            n - 0.07,
            r,
            4.6000000000000005,
            5.300000000000001,
            o,
          ),
            D(
              t,
              n + 0.07,
              r,
              n + 0.07,
              s,
              4.6000000000000005,
              5.300000000000001,
              o,
            ),
            t.setMaterial(0.25, 0, 0.75, Kt),
            E(t, 16774880));
          for (let e = 0; e < 4; e++)
            j(
              t,
              n,
              r + ((s - r) * (e + 0.5)) / 4,
              [
                0.1, 4.2700000000000005, 0.09, 4.3100000000000005, 0.05,
                4.430000000000001, 0.01, 4.48,
              ],
              6,
              i,
            );
        }
        return a;
      },
    },
    {
      name: `ekimae-canopy`,
      x: -756,
      z: -622,
      range: 260,
      request() {},
      write(e, t) {
        let n = t.white(),
          r = 3.65;
        (e.setMaterial(0.5, 0.6, 0, 0),
          E(e, 12106944),
          k(
            e,
            -1512.5 / 2,
            -1245.8 / 2,
            r,
            3.87,
            8.099999999999909 / 2,
            3 / 2,
            0,
            1,
            n,
          ),
          E(e, 6975090));
        for (let t of [-760, -752.5])
          k(e, t, -621.65, Gt, r, 0.08, 0.08, 0, 1, n);
        return (
          e.setMaterial(0.5, 0, 0.3, Kt),
          E(e, 16765952),
          D(e, -760.3, -621.39, -752.2, -621.39, 3.67, 3.85, n),
          e.setMaterial(0.5, 0, 0.6, Kt),
          E(e, 16053488),
          O(e, -759.9, -624, -752.6, -621.8, 3.64, n, !0),
          [
            { cx: -760, cz: -621.65, hx: 0.08, hz: 0.08, h: r },
            { cx: -752.5, cz: -621.65, hx: 0.08, hz: 0.08, h: r },
          ]
        );
      },
    },
  ];
}
var Xt = {
    nobori: {
      kosho: [`suido.books.kaitori`, `#2a1a0e`, `#f0dca8`],
      festival: [`suido.books.festival`, `#c01818`, `#ffffff`],
      curry: [`suido.curry.word`, `#ffd400`, `#c01818`],
      capital: [`suido.curry.capital`, `#c01818`, `#ffe14a`],
      ski: [`suido.sports.ski`, `#0a3a8a`, `#ffffff`],
      board: [`suido.sports.board`, `#e60012`, `#ffffff`],
      new: [`suido.sports.new`, `#ffffff`, `#0a3a8a`],
      kinken: [`suido.ticket.kaitori`, `#1a3a9a`, `#ffd400`],
      ramen: [`suido.food.iekei`, `#1a1a1a`, `#ffd400`],
      rice: [`suido.food.rice`, `#ffd400`, `#c01818`],
      yakyu: [`suido.goods.yakyu`, `#1a2a6a`, `#ffffff`],
      soba: [`suido.food.tachigui`, `#1a2a5a`, `#ffffff`],
    },
    aboard: {
      books: [
        [
          `suido.books.kinitsu`,
          `suido.books.kinitsu-100`,
          `suido.books.kaitori`,
        ],
        !1,
      ],
      garage: [
        [
          `suido.books.garage`,
          `suido.books.shashin`,
          `suido.books.kinitsu-100`,
        ],
        !1,
      ],
      sanseido: [[`suido.books.shinkan`, `suido.books.best`], !1],
      mangetsu: [
        [
          `suido.curry.mangetsu`,
          `suido.curry.mangetsu-menu`,
          `suido.food.oomori`,
        ],
        !0,
      ],
      abyssinia: [
        [`suido.curry.abyssinia-2f`, `suido.curry.abyssinia-menu`],
        !0,
      ],
      kinken: [
        [`suido.ticket.shinkansen`, `suido.ticket.kitte`, `suido.ticket.yakyu`],
        !1,
      ],
      tsuta: [
        [
          `suido.suzu.tsutakazura`,
          `suido.suzu.naporitan`,
          `suido.suzu.creamsoda`,
        ],
        !0,
      ],
      lunch: [
        [`suido.food.lunch`, `suido.food.oomori`, `suido.food.yoshoku`],
        !0,
      ],
      hanchan: [[`suido.food.saburoku`, `suido.food.hanchan`], !0],
      iekei: [
        [`suido.food.misakiya`, `suido.food.kosa`, `suido.food.rice`],
        !0,
      ],
      tonight: [[`suido.bar.tonight`, `suido.bar.beer`, `suido.bar.happy`], !0],
      today: [
        [`suido.ticket.today`, `suido.ticket.yakyu`, `suido.ticket.kaitori`],
        !1,
      ],
      megaphone: [[`suido.goods.megaphone`, `suido.goods.baseball`], !1],
      izakaya: [
        [`suido.food.hoplee`, `suido.food.sour`, `suido.bar.tonight`],
        !0,
      ],
      soba: [[`suido.food.ekisoba`, `suido.food.tachigui`], !1],
    },
    stand: {
      choko: { main: `suido.suzu.choko`, bg: `#c01818`, fg: `#ffe14a` },
      grill: { main: `suido.suzu.grill`, bg: `#f4ecd8`, fg: `#3a2414` },
      sakaba: { main: `suido.food.sakaba`, bg: `#ffffff`, fg: `#c01818` },
      yakiton: { main: `suido.food.yakiton`, bg: `#ffffff`, fg: `#c01818` },
      kyukaiura: { main: `suido.food.kyukaiura`, bg: `#c01818`, fg: `#ffffff` },
      sonata: { main: `suido.kissa.sonata`, bg: `#2a1a0e`, fg: `#f0dca8` },
    },
    plate: {
      suzuran: [
        `suido.suzu.name`,
        `#1a3a2a`,
        `#ffffff`,
        `suido.street.chiyoda`,
      ],
    },
    wagons: !0,
    shelf: !0,
    price: [`suido.books.kinitsu`, `suido.books.kinitsu-100`],
  },
  Z = { fx: 0, fz: -1 },
  Q = { fx: 0, fz: 1 },
  Zt = { fx: -1, fz: 0 };
function Qt(e) {
  let t = [],
    n = [],
    r = G(10, 18.5),
    i = G(11, 21),
    a = G(11, 20),
    o = G(9, 22),
    s = G(16, 24),
    c = G(11, 26),
    l = G(10, 20.5);
  for (let [e, i] of [
    [-570.8, 0],
    [-564.9, 2],
    [-549.7, 1],
    [-542.6, 0],
  ])
    (t.push({
      model: `wagon:${i}`,
      x: e,
      z: -384.6,
      ...Z,
      range: 120,
      when: r,
    }),
      n.push({ x: e, z: -384.6, r: 0.6, h: 0.9 }));
  for (let e of [-573, -561, -551.8, -545, -537, -533])
    (t.push({
      model: `shelf`,
      x: e,
      z: -384.34000000000003,
      ...Z,
      range: 110,
      when: r,
    }),
      n.push({ x: e, z: -384.34000000000003, r: 0.5, h: 1.1 }));
  (t.push({
    model: `aboard:books`,
    x: -568.6,
    z: -384.90000000000003,
    ...Z,
    range: 100,
    when: r,
  }),
    t.push({
      model: `aboard:garage`,
      x: -559.6,
      z: -384.90000000000003,
      ...Z,
      range: 100,
      when: (e, t) => r(e) && (t === 0 || t === 6),
    }),
    t.push({
      model: `aboard:sanseido`,
      x: -527,
      z: -384.90000000000003,
      ...Z,
      range: 110,
      when: G(10, 21),
    }));
  for (let [e, n] of [
    [-575.2, `kosho`],
    [-566.5, `festival`],
    [-547.2, `kosho`],
    [-540, `festival`],
    [-529.5, `festival`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      z: -384.45000000000005,
      ...Z,
      range: 160,
      when: r,
    });
  (t.push({
    model: `aboard:mangetsu`,
    x: -568.9,
    z: -415.09999999999997,
    ...Q,
    range: 100,
    when: i,
  }),
    t.push({
      model: `aboard:abyssinia`,
      x: -552,
      z: -415.09999999999997,
      ...Q,
      range: 100,
      when: i,
    }),
    t.push({
      model: `aboard:kinken`,
      x: -557.4,
      z: -415.09999999999997,
      ...Q,
      range: 100,
      when: l,
    }),
    t.push({
      model: `stand:sonata`,
      x: -560,
      z: -415.45,
      ...Q,
      range: 100,
      when: o,
    }));
  for (let [e, n] of [
    [-571.6, `curry`],
    [-566.4, `capital`],
    [-553.6, `curry`],
    [-541.8, `ski`],
    [-537.5, `new`],
    [-534, `board`],
    [-520.6, `ski`],
    [-512, `new`],
    [-505, `board`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      z: -415.54999999999995,
      ...Q,
      range: 170,
      when: n === `curry` || n === `capital` ? i : a,
    });
  (t.push({
    model: `aboard:tsuta`,
    x: -551.6,
    z: -357.9,
    ...Z,
    range: 90,
    when: o,
  }),
    t.push({
      model: `stand:choko`,
      x: -540.6,
      z: -357.55,
      ...Z,
      range: 90,
      when: G(11, 21.5),
    }),
    t.push({
      model: `stand:grill`,
      x: -534,
      z: -357.55,
      ...Z,
      range: 90,
      when: G(11, 22),
    }),
    t.push({
      model: `stand:sakaba`,
      x: -522.3,
      z: -357.55,
      ...Z,
      range: 90,
      when: s,
    }),
    t.push({
      model: `aboard:hanchan`,
      x: -583.9,
      z: -351,
      ...Zt,
      range: 90,
      when: G(11, 22),
    }),
    t.push({
      model: `aboard:lunch`,
      x: -583.9,
      z: -339,
      ...Zt,
      range: 90,
      when: G(11, 15),
    }),
    t.push({
      model: `plate:suzuran`,
      x: -584.4,
      z: -364.4,
      fx: -0.7071,
      fz: -0.7071,
      range: 120,
    }),
    n.push({ x: -584.4, z: -364.4, r: 0.1, h: 2.9 }),
    t.push({
      model: `aboard:today`,
      x: -785.3,
      z: -551.9,
      ...Z,
      range: 100,
      when: l,
    }));
  for (let [e, n] of [
    [-781.6, `kinken`],
    [-779.6, `ramen`],
    [-775.2, `rice`],
    [-761, `yakyu`],
    [-758, `yakyu`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      z: -551.45,
      ...Z,
      range: 160,
      when: n === `kinken` ? l : c,
    });
  return (
    t.push({
      model: `aboard:iekei`,
      x: -777.2,
      z: -551.9,
      ...Z,
      range: 100,
      when: c,
    }),
    t.push({
      model: `aboard:tonight`,
      x: -768.6,
      z: -551.9,
      ...Z,
      range: 100,
      when: G(12, 26),
    }),
    t.push({
      model: `aboard:megaphone`,
      x: -760.4,
      z: -551.9,
      ...Z,
      range: 100,
      when: G(10, 21),
    }),
    t.push({
      model: `stand:kyukaiura`,
      x: -743,
      z: -551.6,
      ...Z,
      range: 100,
      when: s,
    }),
    t.push({
      model: `aboard:izakaya`,
      x: -748.6,
      z: -551.9,
      ...Z,
      range: 100,
      when: s,
    }),
    t.push({
      model: `aboard:today`,
      x: -769.5,
      z: -623.6,
      ...Q,
      range: 100,
      when: G(9, 21),
    }),
    t.push({
      model: `aboard:soba`,
      x: -763.2,
      z: -623.6,
      ...Q,
      range: 100,
      when: G(6.5, 23),
    }),
    t.push({
      model: `nobori:soba`,
      x: -765.4,
      z: -624.05,
      ...Q,
      range: 150,
      when: G(6.5, 23),
    }),
    t.push({
      model: `stand:yakiton`,
      x: -706,
      z: -623.9499999999999,
      ...Q,
      range: 100,
      when: s,
    }),
    t.push({
      model: `aboard:kinken`,
      x: -693,
      z: -623.6,
      ...Q,
      range: 100,
      when: G(10, 20),
    }),
    t.push({
      model: `aboard:lunch`,
      x: -701.4,
      z: -623.6,
      ...Q,
      range: 100,
      when: G(11, 15),
    }),
    { instances: t, circles: n }
  );
}
var $t = e({
    init: () => tn,
    start: () => nn,
    stats: () => on,
    unload: () => an,
    update: () => rn,
  }),
  en = St({
    name: `suidobashi`,
    blocks: Et,
    shops: Wt,
    pieces: Yt,
    kit: Xt,
    place: Qt,
    pageH: 2560,
  }),
  tn = en.init,
  nn = en.start,
  rn = en.update,
  an = en.unload,
  on = en.stats,
  sn = null,
  cn = new Map();
function ln(e, t) {
  let o = `${t}|${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    s = cn.get(o);
  if (s) return s;
  sn ||
    ((sn = new a(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (sn.needsUpdate = !0),
    (sn.name = `street-pack-proto`));
  let c = new r();
  (c.setAttribute(
    `position`,
    new i(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    c.setAttribute(
      `normal`,
      new i(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    c.setAttribute(`uv`, new i(new Float32Array(6), 2)),
    c.setAttribute(`color`, new i(new Uint8Array(12).fill(255), 4, !0)),
    c.setAttribute(`aCity`, new i(new Uint8Array(12), 4, !0)),
    c.setIndex(new i(new Uint32Array([0, 1, 2]), 1)));
  let l = d(`opaque`, {
      policy: e.quality.materials,
      map: sn,
      batched: !0,
      name: t,
    }),
    u = new n(2, 3, 3, l);
  u.name = `${t}:prewarm`;
  let f = u.addGeometry(c);
  return (
    u.addInstance(f),
    (u.castShadow = !!e.quality.shadows),
    (u.receiveShadow = !0),
    (u.frustumCulled = !1),
    (s = [u]),
    cn.set(o, s),
    s
  );
}
t.add({
  "三醒堂書店 神保町總店": `三醒堂書店 神保町本店`,
  神保町十字路口: `神保町交差点`,
  鈴蘭通: `すずらん通り`,
  "喫茶 常春藤": `喫茶 つたかずら`,
  "咖哩店 滿月": `カレーの店 まんげつ`,
  書泉Granda: `書泉グランダ`,
  "水道橋站 東口": `水道橋駅 東口`,
  "票券 大吉": `金券 大吉`,
  從水道橋走到東京巨蛋: `水道橋から東京ドームへ`,
  逛舊書店: `古書店めぐり`,
});
var $ = 0,
  un = Math.PI,
  dn = [
    {
      id: `tokyo:suidobashi:jimbocho-books`,
      kind: `area`,
      x: -543,
      z: -386.5,
      radius: 220,
      hours: [10, 18.5],
      points: [
        [-583, -389],
        [-503.5, -389],
        [-503.5, -384.3],
        [-583, -384.3],
      ],
      label: {
        ja: `神保町古書店街`,
        zh: `神保町古書店街`,
        en: `Jimbocho Book Town`,
      },
      copyKey: `suido.books.mall`,
      note: `靖国通り's south sidewalk: the bookshops face north (the spines out of the sun), ¥100 / 3冊500円 wagons and 均一棚 out 10:00–18:30`,
    },
    {
      id: `tokyo:suidobashi:sanseido`,
      kind: `entrance`,
      x: -517.2,
      z: -384.7,
      heading: $,
      radius: 180,
      hours: [10, 21],
      label: {
        ja: `三醒堂書店 神保町本店`,
        zh: `三醒堂書店 神保町總店`,
        en: `Sanseido Shoten (Jimbocho main store)`,
      },
      copyKey: `suido.books.sanseido`,
      note: `the big bookshop at the east end of the row (parody), its floor guide bands; a bookshop walk-in candidate`,
    },
    {
      id: `tokyo:suidobashi:komatsuyama`,
      kind: `entrance`,
      x: -563.3,
      z: -384.7,
      heading: $,
      radius: 150,
      hours: [10, 18.5],
      label: { ja: `小松山書店`, zh: `小松山書店`, en: `Komatsuyama Shoten` },
      copyKey: `suido.books.komatsuyama`,
      note: `photo and art books, the weekend ガレージセール board out on Saturdays and Sundays`,
    },
    {
      id: `tokyo:suidobashi:jimbocho-crossing`,
      kind: `spot`,
      x: -585.5,
      z: -386.5,
      heading: $,
      radius: 220,
      label: {
        ja: `神保町交差点`,
        zh: `神保町十字路口`,
        en: `Jimbocho crossing`,
      },
      note: `the SE corner of 白山通り × 靖国通り (LAWSAN on the corner): the book row runs east from here`,
    },
    {
      id: `tokyo:suidobashi:suzuran`,
      kind: `route`,
      x: -543,
      z: -360.3,
      radius: 200,
      points: [
        [-583, -360.3],
        [-543, -360.3],
        [-503.5, -360.3],
      ],
      label: { ja: `すずらん通り`, zh: `鈴蘭通`, en: `Suzuran-dori` },
      copyKey: `suido.suzu.name`,
      note: `the lane behind the south row (pedestrians only): bell-shaped lamps lit at night, 東京館書店, the ivy 喫茶, the 冷やし中華 house, the beer hall`,
    },
    {
      id: `tokyo:suidobashi:tsutakazura`,
      kind: `entrance`,
      x: -549.7,
      z: -357.7,
      heading: $,
      radius: 140,
      hours: [9, 22],
      label: {
        ja: `喫茶 つたかずら`,
        zh: `喫茶 常春藤`,
        en: `Kissa Tsutakazura`,
      },
      copyKey: `suido.suzu.tsutakazura`,
      note: `the ivy-covered 喫茶 on すずらん通り (parody): ナポリタン and cream soda; a 純喫茶 walk-in candidate`,
    },
    {
      id: `tokyo:suidobashi:mangetsu`,
      kind: `entrance`,
      x: -569,
      z: -415.3,
      heading: un,
      radius: 140,
      hours: [11, 20],
      label: {
        ja: `カレーの店 まんげつ`,
        zh: `咖哩店 滿月`,
        en: `Curry Mangetsu`,
      },
      copyKey: `suido.curry.mangetsu`,
      note: `the カツカレー counter on 靖国通り's north side: the lunch queue stands west of the door, 神保町 = the curry town`,
    },
    {
      id: `tokyo:suidobashi:shosen`,
      kind: `entrance`,
      x: -577.5,
      z: -415.3,
      heading: un,
      radius: 160,
      hours: [10, 21],
      label: { ja: `書泉グランダ`, zh: `書泉Granda`, en: `Shosen Granda` },
      copyKey: `suido.books.shosen`,
      note: `the bookshop of the railway / pro-wrestling / idol / maths floors (parody), the NE corner of 神保町交差点`,
    },
    {
      id: `tokyo:suidobashi:ekimae`,
      kind: `spot`,
      x: -756.2,
      z: -622.6,
      heading: un,
      radius: 220,
      label: {
        ja: `水道橋駅 東口`,
        zh: `水道橋站 東口`,
        en: `Suidobashi Station east exit`,
      },
      copyKey: `suido.station.east`,
      note: `under the station canopy on 外堀通り: the meeting point before a game or a show at the Dome (crowds from 17:00 on game days)`,
    },
    {
      id: `tokyo:suidobashi:misakiya`,
      kind: `entrance`,
      x: -777.2,
      z: -551.7,
      heading: $,
      radius: 140,
      hours: [11, 26],
      label: { ja: `三崎家`, zh: `三崎家`, en: `Misakiya (iekei ramen)` },
      copyKey: `suido.food.misakiya`,
      note: `the 家系ラーメン on 白山通り's jog in 三崎町, open till 2:00 for the Dome crowd`,
    },
    {
      id: `tokyo:suidobashi:sportsbar`,
      kind: `entrance`,
      x: -768.7,
      z: -551.7,
      heading: $,
      radius: 150,
      hours: [12, 26],
      label: {
        ja: `SPORTS BAR DIAMOND`,
        zh: `SPORTS BAR DIAMOND`,
        en: `Sports Bar Diamond`,
      },
      copyKey: `suido.bar.diamond`,
      note: `the open-front sports bar: night games on the screens (generic, no team marks)`,
    },
    {
      id: `tokyo:suidobashi:kinken`,
      kind: `entrance`,
      x: -785.3,
      z: -551.7,
      heading: $,
      radius: 140,
      hours: [10, 20.5],
      label: { ja: `金券 大吉`, zh: `票券 大吉`, en: `Kinken Daikichi` },
      copyKey: `suido.ticket.daikichi`,
      note: `the 金券 shop selling and buying today's tickets (野球・公演): a ticket-run start`,
    },
    {
      id: `tokyo:suidobashi:dome-walk`,
      kind: `route`,
      x: -786,
      z: -590,
      radius: 300,
      points: [
        [-760, -553],
        [-786, -557],
        [-786, -600],
        [-786, -622],
        [-756, -623],
        [-806, -640],
      ],
      label: {
        ja: `水道橋から東京ドームへ`,
        zh: `從水道橋走到東京巨蛋`,
        en: `Suidobashi to the Dome`,
      },
      note: `三崎町's shops → over the 神田川 on 白山通り (the 水道橋 itself) → the station front → across to the Dome's side: the game-day crowd's walk`,
    },
    {
      id: `tokyo:suidobashi:book-crawl`,
      kind: `route`,
      x: -543,
      z: -400,
      radius: 260,
      points: [
        [-583, -386.5],
        [-503.5, -386.5],
        [-503.5, -413.5],
        [-583, -413.5],
        [-583, -360.3],
        [-503.5, -360.3],
      ],
      label: { ja: `古書店めぐり`, zh: `逛舊書店`, en: `Bookshop crawl` },
      note: `east along the south row, back west along the north side (curry and sports), then through すずらん通り`,
    },
  ];
export {
  k as C,
  ie as S,
  D as T,
  xe as _,
  kt as a,
  E as b,
  q as c,
  X as d,
  St as f,
  he as g,
  Ie as h,
  Ot as i,
  K as l,
  et as m,
  ln as n,
  Tt as o,
  G as p,
  $t as r,
  wt as s,
  dn as t,
  Y as u,
  me as v,
  ae as w,
  O as x,
  z as y,
};
