import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { wt as t } from "./three-CC5Mkdpe.js";
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
  At as u,
  It as d,
  Lt as f,
  Xt as p,
  Zt as m,
  at as h,
  et as g,
  it as _,
  jt as v,
  nt as y,
  ot as b,
  qt as x,
  rt as S,
  tt as C,
  zt as ee,
} from "./region-tokyo-BcM3fReU.js";
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
        [n, r] = s(e, t);
      x(n, r);
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
      let a = c(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `kanda-atlas`), a);
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
function P(e, t, n, r, i, a, o, s, c) {
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
function F(e, t, n, r, i, a, o, s, c, l = !1, u = 0.6, d, f = !0) {
  ((t -= u),
    (r += u),
    (n -= u),
    (i += u),
    f && k(e, t, n, r, i, a - 0.02, d ?? c, !0));
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
        ? (pe(e, t, a, n, t, a, i, s, h, m, c),
          pe(e, r, a, i, r, a, n, f, h, m, c))
        : d &&
          (pe(e, t + u, a, n + u, t + u, a, i - u, t + u, h, m, d),
          pe(e, r - u, a, i - u, r - u, a, n + u, r - u, h, m, d)));
  } else {
    let o = l ? Math.min((r - t) / 2, (i - n) / 2 - 0.1) : 0,
      s = n + o,
      f = i - o;
    (e.quad(r, a, i, r, a, n, p, h, s, p, h, f, c.u0, c.v0, c.u1, c.v1),
      e.quad(t, a, n, t, a, i, p, h, f, p, h, s, c.u0, c.v0, c.u1, c.v1),
      l
        ? (pe(e, r, a, n, t, a, n, p, h, s, c),
          pe(e, t, a, i, r, a, i, p, h, f, c))
        : d &&
          (pe(e, r - u, a, n + u, t + u, a, n + u, p, h, n + u, d),
          pe(e, t + u, a, i - u, r - u, a, i - u, p, h, i - u, d)));
  }
}
function pe(e, t, n, r, i, a, o, s, c, l, u) {
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
var me = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] };
function he(e, t) {
  let [n, r] = me[t],
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
function I(e, t, n) {
  return [e.ox + e.tx * t + e.nx * n, e.oz + e.tz * t + e.nz * n];
}
function L(e, t, n, r, i, a, o, s) {
  let [c, l] = I(t, n, o),
    [u, d] = I(t, r, o);
  O(e, c, l, u, d, i, a, s);
}
function ge(e, t, n, r, i, a, o = 1) {
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
var R = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  z = (e) => u(e),
  _e = (e, t) => v(e, t);
function B(e, t, n, r, i, a, o = 1) {
  ((e.globalAlpha = o),
    (e.fillStyle = a),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1));
}
function V(e, t, n, r, i, a, o) {
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
function ve(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function H(e, t, n, r, i, a, o, s = `900`, c = d()) {
  let l = ve(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function ye(e, t, n, r, i, a, o, s = d(), c = `900`) {
  ((e.globalAlpha = 1), ee(e, t, n, r, i, a, o, s, c));
}
var be = (...e) => new n(i(`kanda-paint`, ...e)),
  U = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.style ?? `lit`}`;
function xe(e) {
  return (t, n, r, i, a) => {
    let o = e.style ?? `lit`,
      s = e.serif || o === `wood` ? f() : d(),
      c = e.floor === void 0 ? z(e.main) : _e(e.main, { n: e.floor });
    (o === `wood`
      ? (Oe(t, n, r, i, a, e.bg, `h`),
        (t.strokeStyle = `#1a120a`),
        (t.lineWidth = a * 0.06),
        t.strokeRect(n + a * 0.06, r + a * 0.06, i - a * 0.12, a - a * 0.12))
      : o === `enamel`
        ? B(t, n, r, i, a, e.bg)
        : V(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o === `lit`
          ? V(t, n, r + a * 0.86, i, a * 0.14, e.acc, 0.6)
          : B(t, n, r + a * 0.86, i, a * 0.14, e.acc)),
      e.sub
        ? (H(
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
          H(
            t,
            z(e.sub),
            n + i * 0.84,
            r + a * 0.45,
            i * 0.28,
            a * 0.36,
            e.fg,
            `700`,
            s,
          ))
        : H(t, c, n + i / 2, r + a * 0.45, i * 0.9, a * 0.72, e.fg, `900`, s));
  };
}
var Se = (e) =>
  `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}|${e.style ?? `lit`}`;
function Ce(e) {
  return (t, n, r, i, a) => {
    let o = e.style === `wood`;
    (o ? Oe(t, n, r, i, a, e.bg, `v`) : V(t, n, r, i, a, e.bg, 0.55),
      e.acc &&
        (o
          ? (B(t, n, r, i, a * 0.03, e.acc),
            B(t, n, r + a * 0.97, i, a * 0.03, e.acc))
          : (V(t, n, r, i, a * 0.03, e.acc, 0.6),
            V(t, n, r + a * 0.97, i, a * 0.03, e.acc, 0.6))));
    let s = r + a * 0.05;
    (e.top &&
      (H(t, z(e.top), n + i / 2, r + a * 0.07, i * 0.86, a * 0.06, e.fg, `800`),
      (s = r + a * 0.13)),
      ye(
        t,
        z(e.main),
        n + i / 2,
        s,
        r + a * 0.95,
        i * 0.74,
        e.fg,
        o ? f() : d(),
      ));
  };
}
function we(e, t, n, r = `#ffffff`) {
  return (i, a, o, s, c) => {
    (B(i, a, o, s, c, t), B(i, a, o, s, c * 0.06, r));
    for (let e = 0; e < 6; e++)
      B(i, a + s * 0.06 + (e * s) / 6, o + c * 0.015, s * 0.06, c * 0.03, t);
    ye(i, z(e), a + s / 2, o + c * 0.1, o + c * 0.95, s * 0.72, n);
  };
}
function Te(e, t = `#d8281e`) {
  return (n, r, i, a, o) => {
    (V(n, r, i, a, o, `#1a1410`, 0.5),
      V(n, r + a * 0.05, i + o * 0.1, a * 0.9, o * 0.8, t, 0.62));
    for (let e = 1; e < 9; e++)
      B(
        n,
        r + a * 0.05,
        i + o * 0.1 + (e * o * 0.8) / 9,
        a * 0.9,
        o * 0.008,
        `rgba(60,0,0,0.5)`,
      );
    (B(n, r + a * 0.18, i, a * 0.64, o * 0.1, `#141414`),
      B(n, r + a * 0.18, i + o * 0.9, a * 0.64, o * 0.1, `#141414`));
    let s = z(e);
    s.length <= 1
      ? H(
          n,
          s,
          r + a / 2,
          i + o * 0.5,
          a * 0.7,
          o * 0.56,
          `#121010`,
          `900`,
          f(),
        )
      : ye(
          n,
          s,
          r + a / 2,
          i + o * 0.16,
          i + o * 0.84,
          a * 0.5,
          `#121010`,
          f(),
        );
  };
}
function Ee(e, t, n, r = 3) {
  return (i, a, o, s, c) => {
    let l = s / r;
    for (let e = 0; e < r; e++)
      (B(i, a + e * l + 1, o, l - 2, c, t),
        B(i, a + e * l + 1, o, l - 2, c * 0.08, `rgba(0,0,0,0.25)`));
    let u = z(e),
      d = [...u];
    d.length <= r + 1
      ? d.forEach((e, t) =>
          H(
            i,
            e,
            a + (t + 0.5) * (s / d.length),
            o + c * 0.5,
            (s / d.length) * 0.8,
            c * 0.62,
            n,
            `900`,
            f(),
          ),
        )
      : H(i, u, a + s / 2, o + c * 0.5, s * 0.9, c * 0.5, n, `900`, f());
  };
}
function De(e, t = !0) {
  return (n, r, i, a, o) => {
    (B(n, r, i, a, o, `#6a4a2a`),
      B(
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
      H(
        n,
        z(e),
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
function Oe(e, t, n, r, i, a, o) {
  B(e, t, n, r, i, a);
  let s = be(`wood`, a, Math.round(r), Math.round(i));
  e.globalAlpha = 0.18;
  for (let a = 0; a < 40; a++)
    ((e.fillStyle = s.next() < 0.5 ? `#000000` : `#ffffff`),
      o === `h`
        ? e.fillRect(t, n + s.next() * i, r, 1 + s.next() * 1.5)
        : e.fillRect(t + s.next() * r, n, 1 + s.next() * 1.5, i));
  e.globalAlpha = 1;
}
function ke(e) {
  return (t, n, r, i, a) => {
    Oe(t, n, r, i, a, e, `v`);
    for (let e = n; e < n + i; e += i / 8) B(t, e, r, 2, a, `rgba(0,0,0,0.45)`);
  };
}
function Ae(e, t = `#a87e4a`, n = 24) {
  return (r, i, a, o, s) => {
    V(r, i, a, o, s, t, 1);
    let c = r.createLinearGradient(0, a, 0, a + s);
    (c.addColorStop(0, `rgba(255,230,180,0.25)`),
      c.addColorStop(1, `rgba(60,30,10,0.45)`),
      (r.fillStyle = c),
      r.fillRect(i, a, o, s));
    let l = o / n;
    for (let t = 0; t < n; t++) V(r, i + t * l, a, l * 0.58, s, e, 0);
    (V(r, i, a, o, s * 0.05, e, 0),
      V(r, i, a + s * 0.48, o, s * 0.03, e, 0),
      V(r, i, a + s * 0.95, o, s * 0.05, e, 0));
  };
}
function je(e = `#5c6064`) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 8)
      B(t, n, e, i, a * 0.02, `rgba(0,0,0,0.35)`);
    for (let e = n; e < n + i; e += i / 12)
      (B(t, e, r, i / 24, a, `rgba(255,255,255,0.08)`),
        B(t, e + i / 24, r, 1.5, a, `rgba(0,0,0,0.3)`));
  };
}
function Me(e, t) {
  return (n, r, i, a, o) => {
    let s = be(`wall`, e, t);
    if ((B(n, r, i, a, o, t), e === `tile`)) {
      for (let e = i; e < i + o; e += 5) B(n, r, e, a, 1, `rgba(0,0,0,0.10)`);
      for (let e = i, t = 0; e < i + o; e += 5, t++)
        for (let i = r + (t % 2) * 6; i < r + a; i += 12)
          B(n, i, e, 1, 5, `rgba(0,0,0,0.07)`);
    } else if (e === `alc`)
      for (let e = i; e < i + o; e += o / 6)
        B(n, r, e, a, 1.5, `rgba(0,0,0,0.12)`);
    else if (e === `brick`)
      for (let e = i, t = 0; e < i + o; e += 6, t++) {
        B(n, r, e + 5, a, 1, `rgba(220,210,190,0.8)`);
        for (let i = r + (t % 2 ? 0 : 7); i < r + a; i += 14)
          B(n, i, e, 1, 5, `rgba(220,210,190,0.8)`);
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
function Ne(e, t, n = `#ffffff`) {
  return (r, i, a, o, s) => {
    let c = o / 4;
    B(r, i, a, o, s, `#2a2c30`);
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
          B(r, n, e, l, u * 0.02, `rgba(0,0,0,0.22)`);
      B(r, n + l * 0.1, o, l * 0.1, u, `rgba(255,255,255,0.14)`);
    }
    t && H(r, t, i + o / 2, a + s * 0.48, o * 0.48, s * 0.3, n, `900`);
  };
}
function Pe(e, t = 0) {
  return (n, r, i, a, o) => {
    let s = be(`shop`, e, t);
    B(
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
      }[e] ?? `#c0c0c0`,
    );
    let c = n.createLinearGradient(0, i, 0, i + o * 0.35);
    (c.addColorStop(0, `rgba(255,248,225,0.55)`),
      c.addColorStop(1, `rgba(255,248,225,0)`),
      (n.fillStyle = c),
      n.fillRect(r, i, a, o * 0.35));
    let l = i + o * 0.84;
    B(
      n,
      r,
      l,
      a,
      o - (l - i),
      e === `izakaya` || e === `yakitori` || e === `tachinomi` || e === `kissa`
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
        B(
          n,
          r,
          i + o * 0.06,
          a,
          o * 0.78,
          e === `guitar` ? `#3e2e22` : `#5e4632`,
        );
        for (let e = i + o * 0.08; e < i + o * 0.84; e += o * 0.045)
          B(n, r, e, a, 1, `rgba(0,0,0,0.25)`);
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
            (B(n, u - p * 0.25, d, p * 0.5, o * 0.035, `#1a1410`),
              B(n, u - p * 0.14, d + o * 0.03, p * 0.28, o * 0.12, `#6a4a2a`));
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
                : (B(
                    n,
                    u - p * 0.5,
                    h + f * 0.45,
                    p * 0.55,
                    f * 0.3,
                    m === `#f2f2ee` ? `#202020` : `#f0f0ea`,
                  ),
                  B(n, u - p * 0.3, h + f * 0.5, p * 0.6, f * 0.04, `#d0d0d0`)),
              B(n, u + p * 0.6, h + f * 0.9, p * 0.9, o * 0.035, `#ffe040`));
          }
        for (let e = 0; e < 6; e++)
          (B(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.7,
            a * 0.11,
            o * 0.14,
            `#141414`,
          ),
            B(
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
            B(n, i - a * 0.09, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            B(n, i + a * 0.05, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            B(n, i - a * 0.11, s - o * 0.46, a * 0.07, o * 0.015, `#e0b040`),
            B(n, i + a * 0.06, s - o * 0.5, a * 0.07, o * 0.015, `#e0b040`));
        }
        for (let e = 0; e < 14; e++)
          B(
            n,
            r + a * (0.03 + e * 0.07),
            i + o * 0.12,
            a * 0.04,
            o * 0.18,
            `#b8b0a0`,
          );
        break;
      case `wind`:
        B(n, r, i + o * 0.1, a, o * 0.7, `#1a1410`);
        for (let e = 0; e < 9; e++) {
          let t = r + a * (0.07 + e * 0.105),
            s = i + o * (0.3 + (e % 2) * 0.25);
          ((n.fillStyle = e % 3 == 2 ? `#c0c0c8` : `#e0b040`),
            n.beginPath(),
            n.arc(t, s, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            B(n, t - 1.5, s - o * 0.2, 3, o * 0.2, n.fillStyle));
        }
        for (let e = 0; e < 9; e++)
          B(
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
          B(
            n,
            r + a * (0.03 + e * 0.16),
            i + o * 0.56,
            a * 0.14,
            o * 0.28,
            `#6a5a48`,
          );
        for (let e = 0; e < 24; e++)
          B(
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
            B(
              n,
              r + a * (0.02 + t * 0.04),
              i + o * (0.12 + e * 0.16),
              a * 0.03,
              o * 0.12,
              u[s.int(0, 9)],
            );
        B(n, r + a * 0.1, i + o * 0.72, a * 0.8, o * 0.12, `#c0a880`);
        break;
      case `kissa`:
      case `cafe`:
        for (let e = 0; e < 4; e++) {
          let t = r + a * (0.14 + e * 0.24);
          ((n.fillStyle = `rgba(255,200,120,0.9)`),
            n.beginPath(),
            n.arc(t, i + o * 0.2, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            B(n, t - a * 0.06, i + o * 0.62, a * 0.12, o * 0.04, `#5a3a20`),
            B(n, t - a * 0.09, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`),
            B(n, t + a * 0.06, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`));
        }
        break;
      case `ski`:
      case `outdoor`:
      case `golf`: {
        let t = e === `golf` ? 18 : 22;
        for (let c = 0; c < t; c++) {
          let l = r + a * (0.03 + (0.94 / t) * c),
            d = e === `golf` ? (c % 2 ? `#202020` : `#e0e0e0`) : u[s.int(0, 9)];
          B(
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
          (B(
            n,
            t - a * 0.035,
            i + o * 0.3,
            a * 0.07,
            o * 0.3,
            u[(e * 4 + 1) % 10],
          ),
            B(n, t - a * 0.015, i + o * 0.2, a * 0.03, o * 0.09, `#e8d0b0`),
            B(n, t - a * 0.03, i + o * 0.6, a * 0.025, o * 0.24, `#202830`),
            B(n, t + a * 0.005, i + o * 0.6, a * 0.025, o * 0.24, `#202830`));
        }
        break;
      }
      case `books`:
        for (let e = 0; e < 5; e++) {
          let t = r + a * 0.02;
          for (; t < r + a * 0.98;) {
            let r = a * (0.008 + s.next() * 0.014);
            (B(
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
          B(n, r, i + o * (0.205 + e * 0.15), a, o * 0.012, `#2a1a0a`);
        }
        B(n, r + a * 0.4, i + o * 0.66, a * 0.2, o * 0.18, `#3a2410`);
        break;
      case `curry`:
        (B(n, r, i + o * 0.56, a, o * 0.06, `#c08040`),
          B(n, r, i + o * 0.62, a, o * 0.22, `#7a4a20`));
        for (let e = 0; e < 7; e++)
          B(
            n,
            r + a * (0.06 + e * 0.13),
            i + o * 0.46,
            a * 0.03,
            o * 0.38,
            `#3a2a1a`,
          );
        for (let e = 0; e < 6; e++)
          B(
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
          B(
            n,
            r + a * (0.03 + e * 0.06),
            i + o * 0.1,
            a * 0.04,
            o * 0.18,
            `#f4ecd8`,
          );
        for (let e = 0; e < 16; e++)
          B(
            n,
            r + a * (0.035 + e * 0.06),
            i + o * 0.12,
            a * 0.03,
            o * 0.008,
            `#202020`,
          );
        for (let e = 0; e < 26; e++)
          B(
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
          (B(n, r, i + o * 0.48, a, o * 0.04, `#3a2410`),
          B(
            n,
            r,
            i + o * 0.58,
            a,
            o * 0.06,
            e === `tachinomi` ? `#c09060` : `#8a5a30`,
          ),
          e === `yakitori`)
        ) {
          (B(n, r + a * 0.3, i + o * 0.5, a * 0.4, o * 0.08, `#2a2a2a`),
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
          (B(
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
          B(
            n,
            r + a * (0.04 + e * 0.16),
            i + o * 0.1,
            a * 0.12,
            o * 0.16,
            `#2a1a0a`,
          );
        for (let e = 0; e < 6; e++)
          B(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.12,
            a * 0.1,
            o * 0.12,
            `#f0e6cc`,
          );
        B(n, r, i + o * 0.66, a * 0.45, o * 0.18, `#c8b878`);
        for (let e = 0; e < 3; e++)
          B(
            n,
            r + a * (0.52 + e * 0.16),
            i + o * 0.58,
            a * 0.12,
            o * 0.05,
            `#5a3a1a`,
          );
        break;
      case `lobby`:
        (B(n, r + a * 0.3, i + o * 0.2, a * 0.4, o * 0.64, `#8a9098`),
          B(n, r + a * 0.42, i + o * 0.3, a * 0.16, o * 0.54, `#5a6068`));
        break;
      case `shutter`:
        for (let e = i; e < i + o; e += o / 24)
          B(n, r, e, a, o * 0.012, `rgba(0,0,0,0.25)`);
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
function Fe(e = `#a8acb0`) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 16)
      B(t, n, e, i, a * 0.02, `rgba(0,0,0,0.25)`);
    B(t, n, r + a * 0.94, i, a * 0.06, `#606468`);
  };
}
function Ie(e) {
  return (t, n, r, i, a) => {
    let o = be(`wagon`, e);
    B(t, n, r, i, a, `#5a3a1a`);
    for (let e = 0; e < 3; e++) {
      let s = n + 2;
      for (; s < n + i - 2;) {
        let n = 2 + o.next() * 4;
        (B(
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
function Le(e) {
  return (t, n, r, i, a) => {
    (B(t, n, r, i, a, `#fffef6`),
      (t.strokeStyle = `#c01818`),
      (t.lineWidth = 2),
      t.strokeRect(n + 2, r + 2, i - 4, a - 4),
      H(t, z(e), n + i / 2, r + a / 2, i * 0.88, a * 0.6, `#c01818`, `900`));
  };
}
function Re(e, t) {
  return (n, r, i, a, o) => {
    B(n, r, i, a, o, e);
    for (let e = 0; e < 4; e++)
      B(
        n,
        r + (a * (e + 0.2)) / 4,
        i + o * 0.15,
        a * 0.12,
        o * 0.25,
        `rgba(0,0,0,0.25)`,
      );
    H(n, z(`brand.yuhi`), r + a / 2, i + o * 0.68, a * 0.7, o * 0.36, t, `900`);
  };
}
function ze(e, t = `#3e6a34`) {
  return (n, r, i, a, o) => {
    let s = be(`leaves`, e);
    B(n, r, i, a, o, t);
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
function Be(e, t, n, r, i = !1) {
  return (a, o, s, c, l) => {
    (B(a, o, s, c, l, t),
      (a.strokeStyle = n),
      (a.lineWidth = Math.max(1.5, l * 0.05)),
      a.strokeRect(o + l * 0.08, s + l * 0.08, c - l * 0.16, l - l * 0.16),
      r
        ? (H(
            a,
            z(e),
            o + c / 2,
            s + l * 0.4,
            c * 0.84,
            l * 0.42,
            n,
            `900`,
            i ? f() : d(),
          ),
          H(a, z(r), o + c / 2, s + l * 0.74, c * 0.8, l * 0.2, n, `700`))
        : H(
            a,
            z(e),
            o + c / 2,
            s + l * 0.5,
            c * 0.84,
            l * 0.56,
            n,
            `900`,
            i ? f() : d(),
          ));
  };
}
function Ve(e) {
  return (t, n, r, i, a) => {
    let o = be(`ema`, e);
    B(t, n, r, i, a, `#3a1a10`);
    let s = i / 12,
      c = a / 5,
      l = [
        `#f08a3a`,
        `#e84a6a`,
        `#3a6ae0`,
        `#f4d040`,
        `#a050d0`,
        `#30a070`,
        `#2a2a2a`,
        `#e0e0f0`,
        `#7a4020`,
      ],
      u = [
        `kanda.ema.1`,
        `kanda.ema.2`,
        `kanda.ema.3`,
        `kanda.ema.4`,
        `kanda.ema.5`,
        `kanda.ema.6`,
        `kanda.ema.7`,
        `kanda.ema.8`,
      ];
    for (let e = 0; e < 5; e++)
      for (let i = 0; i < 13; i++) {
        let a = n + i * s - (e % 2) * s * 0.5 + (o.next() - 0.5) * 3,
          f = r + e * c + (o.next() - 0.5) * 3,
          p = s * 1.08,
          m = c * 0.98;
        ((t.fillStyle = [`#e8d2a8`, `#ecd8b0`, `#e0c898`][o.int(0, 2)]),
          t.beginPath(),
          t.moveTo(a, f + m * 0.3),
          t.lineTo(a + p / 2, f),
          t.lineTo(a + p, f + m * 0.3),
          t.lineTo(a + p, f + m),
          t.lineTo(a, f + m),
          t.closePath(),
          t.fill(),
          (t.strokeStyle = `rgba(80,40,10,0.6)`),
          (t.lineWidth = 1),
          t.stroke(),
          B(t, a + p * 0.47, f + m * 0.06, p * 0.06, m * 0.06, `#c01818`));
        let h = o.next();
        if (h < 0.38) {
          let e = a + p / 2,
            n = f + m * 0.62,
            r = Math.min(p, m) * 0.3,
            i = l[o.int(0, l.length - 1)];
          ((t.fillStyle = i),
            t.beginPath(),
            t.ellipse(e, n - r * 0.15, r * 1.15, r * 1.1, 0, 0, Math.PI * 2),
            t.fill(),
            o.next() < 0.5 &&
              (t.beginPath(),
              t.ellipse(
                e - r * 1.25,
                n + r * 0.3,
                r * 0.35,
                r * 0.8,
                0.3,
                0,
                Math.PI * 2,
              ),
              t.ellipse(
                e + r * 1.25,
                n + r * 0.3,
                r * 0.35,
                r * 0.8,
                -0.3,
                0,
                Math.PI * 2,
              ),
              t.fill()),
            (t.fillStyle = `#fbe4d2`),
            t.beginPath(),
            t.ellipse(e, n + r * 0.15, r * 0.8, r * 0.82, 0, 0, Math.PI * 2),
            t.fill(),
            (t.fillStyle = i),
            t.beginPath(),
            t.ellipse(e, n - r * 0.45, r * 0.85, r * 0.42, 0, 0, Math.PI),
            t.fill());
          let s = [`#3a6ae0`, `#30a070`, `#a050d0`, `#c03030`, `#7a4020`][
            o.int(0, 4)
          ];
          for (let i of [-1, 1])
            ((t.fillStyle = s),
              t.beginPath(),
              t.ellipse(
                e + i * r * 0.32,
                n + r * 0.12,
                r * 0.17,
                r * 0.24,
                0,
                0,
                Math.PI * 2,
              ),
              t.fill(),
              (t.fillStyle = `#ffffff`),
              t.beginPath(),
              t.arc(
                e + i * r * 0.32 - r * 0.05,
                n + r * 0.04,
                r * 0.06,
                0,
                Math.PI * 2,
              ),
              t.fill(),
              (t.fillStyle = `rgba(255,120,140,0.5)`),
              t.beginPath(),
              t.ellipse(
                e + i * r * 0.5,
                n + r * 0.42,
                r * 0.14,
                r * 0.07,
                0,
                0,
                Math.PI * 2,
              ),
              t.fill());
          (B(t, e - r * 0.08, n + r * 0.52, r * 0.16, r * 0.04, `#c04050`),
            o.next() < 0.5 &&
              H(
                t,
                o.next() < 0.5 ? `♡` : `☆`,
                a + p * 0.16,
                f + m * 0.4,
                p * 0.2,
                m * 0.2,
                `#e8406a`,
                `900`,
              ));
        } else if (h < 0.85) {
          let e = u[o.int(0, u.length - 1)];
          ye(
            t,
            z(e),
            a + p * 0.5,
            f + m * 0.3,
            f + m * 0.96,
            p * 0.3,
            [`#1a1a1a`, `#1a3aa0`, `#c01818`][o.int(0, 2)],
            d(),
            `700`,
          );
        } else
          ((t.fillStyle = `#8a2a1a`),
            t.beginPath(),
            t.arc(
              a + p / 2,
              f + m * 0.6,
              Math.min(p, m) * 0.22,
              0,
              Math.PI * 2,
            ),
            t.fill());
      }
  };
}
var He = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8,
  Ue = 35,
  We = 3,
  Ge = (e) => `#` + (e & 16777215).toString(16).padStart(6, `0`),
  Ke = (e) => `wall:${e.wallKind ?? `tile`}:${Ge(e.wall)}`,
  qe = (e, t, n) => `win:${e}:${t ?? ``}:${n ?? ``}`,
  Je = [`#ffffff`, `#ffe14a`, `#ff6a8a`, `#7ad0ff`],
  Ye = (e) =>
    e.shop === `guitar` || e.shop === `acoustic`
      ? i(`kanda-shopvar`, e.id) % 3
      : 0,
  Xe = (e) => `shop:${e.shop}:${Ye(e)}`;
function Ze(e, t) {
  e.need(`shutter`, 64, 64, Fe());
  for (let n of t) {
    (e.need(Ke(n), 64, 64, Me(n.wallKind ?? `tile`, Ge(n.wall))),
      e.need(qe(n.win), 160, 60, Ne(n.win)),
      (n.winWords ?? []).forEach((t, r) => {
        if (!t) return;
        let a = Je[i(n.id, r) % Je.length],
          o = Qe(t, r + 2);
        e.need(qe(n.win, o, a), 160, 60, Ne(n.win, o, a));
      }),
      e.need(Xe(n), 400, 160, Pe(n.shop, Ye(n))),
      n.front === `lattice` && e.need(`lattice`, 128, 96, Ae(`#2a1a10`)),
      e.need(U(n.fascia), 384, 48, xe(n.fascia)));
    for (let t of n.bands ?? []) e.need(U(t), 384, 48, xe(t));
    (n.roofBoard && e.need(U(n.roofBoard), 384, 96, xe(n.roofBoard)),
      n.vsign && e.need(Se(n.vsign), 52, 364, Ce(n.vsign)),
      n.vsign2 && e.need(Se(n.vsign2), 52, 364, Ce(n.vsign2)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          Ee(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? []) e.need(`chochin:${t}`, 64, 96, Te(t));
  }
}
function Qe(e, t) {
  return v(e, { n: t });
}
var $e = (e, t) => he(e, t);
function et(e, t, r, a) {
  let o = new n(i(`kanda-shop`, t.id)),
    s = t.gh ?? 4,
    c = t.fh ?? 3.3,
    l = He(t),
    u = r.white(),
    d = r.uv(Ke(t)),
    f = $e(t, t.dir),
    p = (e) => {
      if (e === t.dir || e === t.corner) return 0;
      let n = $e(t, e);
      return n.nx === -f.nx && n.nz === -f.nz
        ? (t.coverB ?? 0)
        : ((n.nx === f.tx && n.nz === f.tz ? t.coverR : t.coverL) ?? 0);
    };
  for (let n of [`N`, `E`, `S`, `W`]) {
    let f = $e(t, n);
    if (n !== t.dir && n !== t.corner) {
      let r = p(n);
      if (r >= l - 0.05) continue;
      (e.setMaterial(0.92, 0, 0, 0),
        D(e, t.wall, 0.9),
        L(e, f, 0, f.L, Math.max(0, r), l, 0, d));
      continue;
    }
    tt(e, t, f, r, n === t.dir, o);
    for (let o = 1; o < t.floors; o++) {
      let l = s + (o - 1) * c,
        p = l + c;
      (e.setMaterial(0.88, 0, 0, 0),
        D(e, t.wall),
        L(e, f, 0, f.L, l, l + 0.9, 0, d));
      let m = Math.max(1, Math.round(f.L / 3.4)),
        h = n === t.dir ? t.winWords?.[o - 1] : void 0,
        g = Math.floor((m - 1) / 2);
      for (let n = 0; n < m; n++) {
        let a = qe(t.win);
        (h &&
          n === g &&
          (a = qe(t.win, Qe(h, o + 1), Je[i(t.id, o - 1) % Je.length])),
          e.setMaterial(0.2, 0.3, 0.2, Ue),
          D(e, 16777215),
          L(
            e,
            f,
            (f.L * n) / m + 0.14,
            (f.L * (n + 1)) / m - 0.14,
            l + 0.9,
            p,
            0,
            r.uv(a),
          ));
      }
      (e.setMaterial(0.88, 0, 0, 0), D(e, t.wall, 0.96));
      for (let t = 0; t <= m; t++) {
        let n = (f.L * t) / m;
        L(
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
      if (a > 0) {
        D(e, t.wall, 0.75);
        let [n, r] = I(f, 0, 0),
          [i, a] = I(f, f.L, 0.12);
        k(
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
      D(e, t.wall, 0.92),
      L(e, f, 0, f.L, l - 0.8, l, 0, d),
      D(e, 9079430),
      L(e, f, 0, f.L, l - 0.08, l + 0.05, 0.06, u),
      n === t.dir)
    )
      for (let n of t.bands ?? []) {
        let i = n.floor ?? 2;
        if (i < 2 || i > t.floors) continue;
        let a = s + (i - 2) * c + 0.05,
          o = 0.8,
          l = Math.min(f.L - 0.4, o * 8);
        (e.setMaterial(0.5, 0, 0.3, n.style === `lit` || !n.style ? We : 0),
          D(e, 16777215),
          L(e, f, (f.L - l) / 2, (f.L + l) / 2, a, a + o, 0.1, r.uv(U(n))));
      }
  }
  (e.setMaterial(0.92, 0, 0, 0),
    D(e, 9211016),
    k(e, t.x0, t.z0, t.x1, t.z1, l - 0.5, u),
    a > 0 &&
      o.next() < 0.55 &&
      !t.roofBoard &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      D(e, o.next() < 0.5 ? 14212312 : 10133668),
      j(
        e,
        (t.x0 + t.x1) / 2 + (o.next() - 0.5) * 1.5,
        (t.z0 + t.z1) / 2 + (o.next() - 0.5) * 1.5,
        l - 0.5,
        l + 1.3,
        0.8,
        0.8,
        0,
        1,
        u,
      )));
  let m = (t, n, i, a, o) => {
      let [s, c] = I(f, n, 0.35 + o / 2);
      (e.setMaterial(
        0.5,
        0,
        t.style === `wood` ? 0 : 0.3,
        t.style === `wood` ? 0 : We,
      ),
        D(e, 16777215));
      let l = r.uv(Se(t));
      (j(e, s, c, i, a, o / 2, 0.18, f.tx, f.tz, u, l, l),
        e.setMaterial(0.6, 0.4, 0, 0),
        D(e, 5264472));
      let [d, p] = I(f, n, 0.18);
      j(e, d, p, i + 0.3, a - 0.3, 0.16, 0.05, f.tx, f.tz, u);
    },
    h = l - 0.4;
  if (t.vsign && t.floors >= 2) {
    let e = Math.min(h - (s + 0.2), t.floors >= 5 ? 14 : 7.5);
    m(t.vsign, 0.8, h - e, h, t.floors >= 6 ? 1.3 : 1);
  }
  if (t.vsign2 && t.floors >= 3) {
    let e = Math.min(h - (s + 0.2), 9);
    m(t.vsign2, f.L - 0.8, h - e, h, 0.9);
  }
  if (t.roofBoard) {
    let n = 2.4,
      i = Math.min(f.L - 0.6, n * 4);
    (e.setMaterial(0.7, 0.5, 0, 0), D(e, 6317160));
    for (let t of [f.L / 2 - i / 2 + 0.3, f.L / 2 + i / 2 - 0.3]) {
      let [n, r] = I(f, t, -1);
      j(e, n, r, l - 0.5, l + 0.6, 0.06, 0.5, f.nx, f.nz, u);
    }
    (e.setMaterial(0.5, 0, 0.3, We), D(e, 16777215));
    let [a, o] = I(f, f.L / 2, -0.5),
      s = r.uv(U(t.roofBoard));
    j(e, a, o, l + 0.2, l + 0.2 + n, i / 2, 0.15, f.nx, f.nz, u, s, s);
  }
  return l;
}
function tt(e, t, n, r, i, a) {
  let o = r.white(),
    s = t.gh ?? 4,
    c = s - 0.95,
    l = t.front ?? `glass`,
    u = r.uv(Xe(t)),
    d = Math.max(1, Math.round(n.L / 3)),
    f = l === `open` ? 0.9 : 0.35;
  (e.setMaterial(0.3, 0.1, 0.17, 17), D(e, 16053492));
  for (let t = 0; t < d; t++) {
    let r = (n.L * t) / d,
      a = (n.L * (t + 1)) / d,
      [o, s] = I(n, r + 0.08, -f),
      [l, p] = I(n, a - 0.08, -f),
      m = ((t + +!i) % 2) / 2;
    de(e, o, s, l, p, 0, c, u, m, m + 0.5, 0, 1);
  }
  if (l === `lattice`) {
    (e.setMaterial(0.7, 0, 0.22, We | 16), D(e, 16777215));
    let t = r.uv(`lattice`);
    for (let r = 0; r < d; r++) {
      let i = (n.L * r) / d,
        a = (n.L * (r + 1)) / d;
      L(e, n, i + 0.06, a - 0.06, 0, c, -0.12, t);
    }
  }
  (e.setMaterial(0.85, 0, 0, 0), D(e, t.wall, 0.8));
  {
    let [t, r] = I(n, 0, 0),
      [i, a] = I(n, 0, -f);
    O(e, t, r, i, a, 0, c, o);
    let [s, l] = I(n, n.L, 0),
      [u, d] = I(n, n.L, -f);
    O(e, u, d, s, l, 0, c, o);
  }
  if (l !== `open`) {
    (e.setMaterial(0.6, 0.3, 0, 0), D(e, l === `lattice` ? 2759184 : 3816512));
    for (let t = 0; t <= d; t++) {
      let r = (n.L * t) / d;
      L(e, n, Math.max(0, r - 0.08), Math.min(n.L, r + 0.08), 0, c, 0, o);
    }
  } else {
    (e.setMaterial(0.6, 0, 0, 16), D(e, 6964260));
    let [t, r] = I(n, 0.3, -0.45),
      [i, a] = I(n, n.L - 0.3, 0.05);
    k(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      1.05,
      o,
    );
  }
  (e.setMaterial(0.85, 0, 0, 0), D(e, 14211284));
  {
    let [t, r] = I(n, 0, -f),
      [i, a] = I(n, n.L, 0);
    k(
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
      p.style === `wood` || p.style === `enamel` ? 0 : We,
    ),
    D(e, 16777215),
    L(e, n, 0, n.L, c, s, 0.05, r.uv(U(p))),
    t.awning !== void 0 && i)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), D(e, t.awning));
    let [r, i] = I(n, 0.1, 0),
      [a, s] = I(n, n.L - 0.1, 0),
      [l, u] = I(n, 0.1, 1.1),
      [d, f] = I(n, n.L - 0.1, 1.1);
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
    let [p, m] = I(n, 0.1, 1.1),
      [h, g] = I(n, n.L - 0.1, 1.1);
    O(e, p, m, h, g, c - 0.75, c - 0.5, o);
  }
  if (i && t.lanterns?.length) {
    let i = t.lanterns;
    for (let t = 0; t < i.length; t++) {
      let [a, o] = I(n, (n.L * (t + 0.5)) / i.length, 0.45);
      (e.setMaterial(0.6, 0, 0.42, We), D(e, 16777215));
      let s = r.uv(`chochin:${i[t]}`);
      fe(e, a, o, c - 1.05, c - 0.1, 0.25, s);
    }
  }
}
function nt(e, t, n) {
  if (!t.hours) return !1;
  let r = $e(t, t.dir),
    i = (t.gh ?? 4) - 0.95;
  if (
    (e.setMaterial(0.7, 0.4, 0, 0),
    D(e, 16777215),
    L(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`)),
    t.corner)
  ) {
    let r = $e(t, t.corner);
    L(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`));
  }
  return !0;
}
function rt(e, t, n) {
  if (!t.noren) return !1;
  let r = $e(t, t.dir),
    i = (t.gh ?? 4) - 0.95,
    a = Math.min(2.4, r.L * 0.45);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    D(e, 16777215),
    L(
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
function it(e, t, n) {
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
    }),
    i = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8;
  for (let t = 0; t < r.length; t++) {
    let n = r[t - 1],
      a = r[t + 1],
      o = e === `S` || e === `W`,
      s = n ? i(n) : 0,
      c = a ? i(a) : 0;
    ((r[t].coverL ??= o ? s : c), (r[t].coverR ??= o ? c : s));
  }
  return r;
}
var W = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, sub: i }),
  G = (e, t, n, r) => ({ main: e, floor: t, bg: n, fg: r }),
  K = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, top: i }),
  q = [11, 20],
  at = [11, 20],
  ot = [10, 18.5],
  st = it(
    `N`,
    [-573.6, -552.8],
    [
      {
        a: -479.6,
        b: -472.4,
        id: `taniyama`,
        floors: 5,
        wall: 14208180,
        wallKind: `tile`,
        win: `tenant`,
        shop: `acoustic`,
        hours: q,
        fascia: W(`kanda.gakki.taniyama`, `#f4ecd8`, `#5a2a10`, `#8a5a2a`),
        vsign: K(`kanda.gakki.taniyama`, `#f4ecd8`, `#5a2a10`),
        winWords: [`kanda.gakki.f-school`, ``, `kanda.gakki.f-repair`],
      },
      {
        a: -472.4,
        b: -465,
        id: `diskuniverse`,
        floors: 6,
        wall: 12104876,
        wallKind: `tile`,
        win: `tenant`,
        shop: `records`,
        hours: [11, 21],
        fascia: W(`kanda.gakki.diskuniverse`, `#5a2a8a`, `#ffffff`, `#ffd400`),
        vsign: K(`kanda.gakki.record`, `#5a2a8a`, `#ffffff`, `#ffd400`),
        bands: [
          G(`kanda.gakki.f-record`, 2, `#ffffff`, `#5a2a8a`),
          G(`kanda.gakki.f-record`, 4, `#ffd400`, `#5a2a8a`),
        ],
      },
      {
        a: -465,
        b: -457.6,
        id: `galaxy`,
        floors: 7,
        wall: 2895414,
        wallKind: `alc`,
        win: `dark`,
        shop: `guitar`,
        hours: q,
        fascia: W(`kanda.gakki.galaxy`, `#1a2a8a`, `#ffe14a`, `#ffe14a`),
        vsign: K(
          `kanda.gakki.galaxy`,
          `#1a2a8a`,
          `#ffe14a`,
          `#ffe14a`,
          `kanda.gakki.galaxy-latin`,
        ),
        bands: [
          G(`kanda.gakki.f-guitar`, 2, `#1a2a8a`, `#ffffff`),
          G(`kanda.gakki.f-vintage`, 4, `#ffe14a`, `#1a2a8a`),
          G(`kanda.gakki.f-effect`, 6, `#1a2a8a`, `#ffffff`),
        ],
      },
      {
        a: -457.6,
        b: -451,
        id: `yarigatake`,
        floors: 3,
        wall: 9067066,
        wallKind: `brick`,
        win: `warm`,
        shop: `kissa`,
        hours: [8, 21],
        awning: 5909016,
        fascia: {
          main: `kanda.gakki.yarigatake`,
          sub: `kanda.gakki.since`,
          bg: `#3a2414`,
          fg: `#f4e2b8`,
          style: `wood`,
          serif: !0,
        },
      },
      {
        a: -451,
        b: -442.6,
        id: `shirosawa`,
        floors: 8,
        wall: 13684940,
        wallKind: `tile`,
        win: `tenant`,
        shop: `guitar`,
        hours: q,
        fascia: W(`kanda.gakki.shirosawa`, `#141414`, `#ffffff`, `#ffd400`),
        vsign: K(`kanda.gakki.shirosawa`, `#141414`, `#ffffff`, `#ffd400`),
        bands: [
          G(`kanda.gakki.f-guitar`, 2, `#141414`, `#ffffff`),
          G(`kanda.gakki.f-bass`, 3, `#ffd400`, `#141414`),
          G(`kanda.gakki.f-amp`, 5, `#141414`, `#ffffff`),
        ],
        winWords: [
          ``,
          ``,
          ``,
          `kanda.gakki.f-kaitori`,
          ``,
          `kanda.gakki.f-repair`,
        ],
      },
      {
        a: -442.6,
        b: -434.4,
        id: `iwabashi`,
        floors: 7,
        wall: 15262940,
        wallKind: `tile`,
        win: `tenant`,
        shop: `guitar`,
        hours: q,
        fascia: W(`kanda.gakki.iwabashi`, `#d0101a`, `#ffffff`),
        vsign: K(`kanda.gakki.iwabashi`, `#d0101a`, `#ffffff`),
        vsign2: K(`kanda.gakki.chuko`, `#ffd400`, `#d0101a`, `#d0101a`),
        bands: [
          G(`kanda.gakki.f-acoustic`, 2, `#ffffff`, `#d0101a`),
          G(`kanda.gakki.f-ukulele`, 4, `#d0101a`, `#ffffff`),
        ],
      },
      {
        a: -434.4,
        b: -424.4,
        id: `kamikura`,
        floors: 9,
        wall: 15789798,
        wallKind: `tile`,
        win: `tenant`,
        shop: `guitar`,
        hours: q,
        fascia: W(`kanda.gakki.kamikura`, `#0a6a3a`, `#ffffff`, `#ffffff`),
        vsign: K(`kanda.gakki.kamikura`, `#0a6a3a`, `#ffffff`, `#ffffff`),
        roofBoard: W(`kanda.gakki.kamikura`, `#0a6a3a`, `#ffffff`),
        bands: [
          G(`kanda.gakki.f-guitar`, 2, `#0a6a3a`, `#ffffff`),
          G(`kanda.gakki.f-bass`, 3, `#ffffff`, `#0a6a3a`),
          G(`kanda.gakki.f-effect`, 4, `#0a6a3a`, `#ffffff`),
          G(`kanda.gakki.f-vintage`, 6, `#ffffff`, `#0a6a3a`),
        ],
        winWords: [
          ``,
          ``,
          ``,
          ``,
          `kanda.gakki.f-school`,
          `kanda.gakki.f-studio`,
          `kanda.gakki.f-studio`,
        ],
      },
      {
        a: -424.4,
        b: -416.6,
        id: `bigchief`,
        floors: 6,
        wall: 1842206,
        wallKind: `alc`,
        win: `dark`,
        shop: `guitar`,
        hours: q,
        fascia: W(`kanda.gakki.bigchief`, `#101010`, `#d8b25a`, `#d8b25a`),
        vsign: K(
          `kanda.gakki.guitar`,
          `#101010`,
          `#d8b25a`,
          `#d8b25a`,
          `kanda.gakki.bigchief`,
        ),
      },
      {
        a: -416.6,
        b: -409,
        id: `drumcity`,
        floors: 5,
        wall: 13156528,
        wallKind: `tile`,
        win: `tenant`,
        shop: `drum`,
        hours: q,
        fascia: W(`kanda.gakki.drumcity`, `#e86a10`, `#ffffff`),
        vsign: K(`kanda.gakki.drum`, `#e86a10`, `#ffffff`),
        winWords: [`kanda.gakki.f-drum`, `kanda.gakki.f-studio`],
      },
      {
        a: -409,
        b: -401.4,
        id: `wind`,
        floors: 6,
        wall: 14605010,
        wallKind: `tile`,
        win: `tenant`,
        shop: `wind`,
        hours: q,
        fascia: W(`kanda.gakki.wind`, `#16264a`, `#e8c86a`, `#e8c86a`),
        vsign: K(`kanda.gakki.wind-word`, `#16264a`, `#e8c86a`),
        bands: [G(`kanda.gakki.f-wind`, 2, `#16264a`, `#e8c86a`)],
        winWords: [``, `kanda.gakki.f-repair`, `kanda.gakki.f-school`],
      },
      {
        a: -401.4,
        b: -392.4,
        id: `gakkicenter`,
        floors: 8,
        corner: `E`,
        wall: 15921386,
        wallKind: `tile`,
        win: `tenant`,
        shop: `guitar`,
        hours: q,
        fascia: W(
          `kanda.gakki.center`,
          `#ffffff`,
          `#d0101a`,
          `#d0101a`,
          `kanda.gakki.kaitori`,
        ),
        vsign: K(`kanda.gakki.guitar`, `#d0101a`, `#ffffff`, `#ffffff`),
        vsign2: K(`kanda.gakki.chuko`, `#ffffff`, `#d0101a`, `#d0101a`),
        bands: [
          G(`kanda.gakki.f-bass`, 2, `#d0101a`, `#ffffff`),
          G(`kanda.gakki.f-kaitori`, 3, `#ffffff`, `#d0101a`),
        ],
        winWords: [
          ``,
          ``,
          ``,
          `kanda.gakki.f-studio`,
          `kanda.gakki.f-studio`,
          `kanda.gakki.f-studio`,
          `kanda.gakki.f-studio`,
        ],
      },
    ],
  ),
  ct = it(
    `S`,
    [-552.6, -525.9],
    [
      {
        a: -479.6,
        b: -466,
        id: `kosho-center`,
        floors: 8,
        wall: 12102292,
        wallKind: `tile`,
        win: `tenant`,
        shop: `books`,
        hours: ot,
        fascia: {
          main: `kanda.books.center`,
          bg: `#2a1a0e`,
          fg: `#f0dca8`,
          style: `wood`,
          serif: !0,
        },
        vsign: K(`kanda.books.center`, `#f4ecd8`, `#3a2010`, `#3a2010`),
        bands: [G(`kanda.curry.bondei-2f`, 2, `#f6e6b0`, `#7a2a10`)],
        winWords: [`kanda.gakki.f-record`, ``, ``, ``, ``, ``],
      },
      {
        a: -466,
        b: -459,
        id: `kyowado`,
        floors: 5,
        wall: 13157564,
        wallKind: `tile`,
        win: `office`,
        shop: `lobby`,
        hours: [11, 20],
        fascia: W(`kanda.curry.kyowado-b1`, `#f0d040`, `#5a2a10`),
        vsign: K(`kanda.curry.kyowado`, `#5a2a10`, `#f0d040`, `#f0d040`),
      },
      {
        a: -459,
        b: -437,
        id: `victory-ski`,
        floors: 8,
        wall: 15132906,
        wallKind: `alc`,
        win: `office`,
        shop: `ski`,
        hours: at,
        fascia: W(
          `kanda.sports.victory-ski`,
          `#0a3a8a`,
          `#ffffff`,
          `#e60012`,
          `kanda.sports.newmodel`,
        ),
        vsign: K(`kanda.sports.victory-ski`, `#0a3a8a`, `#ffffff`, `#e60012`),
        vsign2: K(`kanda.sports.snowboard`, `#e60012`, `#ffffff`),
        roofBoard: W(`kanda.sports.victory`, `#0a3a8a`, `#ffffff`, `#e60012`),
        bands: [
          G(`kanda.sports.f-ski`, 2, `#0a3a8a`, `#ffffff`),
          G(`kanda.sports.f-board`, 3, `#e60012`, `#ffffff`),
          G(`kanda.sports.f-wear`, 4, `#0a3a8a`, `#ffffff`),
          G(`kanda.sports.f-boots`, 5, `#ffffff`, `#0a3a8a`),
        ],
      },
      {
        a: -437,
        b: -429,
        id: `ishida`,
        floors: 7,
        wall: 13947076,
        wallKind: `tile`,
        win: `tenant`,
        shop: `outdoor`,
        hours: at,
        fascia: W(
          `kanda.sports.ishida`,
          `#ffffff`,
          `#0a5a2a`,
          `#0a5a2a`,
          `kanda.sports.yama`,
        ),
        vsign: K(`kanda.sports.ishida`, `#0a5a2a`, `#ffffff`),
        bands: [G(`kanda.sports.f-ski`, 3, `#0a5a2a`, `#ffffff`)],
      },
      {
        a: -429,
        b: -421,
        id: `victory-golf`,
        floors: 5,
        wall: 14738148,
        wallKind: `alc`,
        win: `office`,
        shop: `golf`,
        hours: at,
        fascia: W(`kanda.sports.golf`, `#0a3a8a`, `#ffffff`, `#e60012`),
        vsign: K(
          `kanda.sports.golf`,
          `#0a3a8a`,
          `#ffffff`,
          `#e60012`,
          `kanda.sports.victory`,
        ),
      },
      {
        a: -421,
        b: -406,
        id: `victory-main`,
        floors: 7,
        wall: 15526628,
        wallKind: `tile`,
        win: `office`,
        shop: `ski`,
        hours: at,
        fascia: W(
          `kanda.sports.victory`,
          `#0a3a8a`,
          `#ffffff`,
          `#e60012`,
          `kanda.sports.sakidori`,
        ),
        vsign: K(`kanda.sports.run`, `#e60012`, `#ffffff`),
        bands: [G(`kanda.sports.f-wear`, 2, `#e60012`, `#ffffff`)],
      },
      {
        a: -406,
        b: -392.4,
        id: `lime`,
        floors: 6,
        corner: `E`,
        wall: 15921902,
        wallKind: `tile`,
        win: `office`,
        shop: `artsupply`,
        hours: [10, 20],
        fascia: W(
          `kanda.gakki.lime`,
          `#f4f43a`,
          `#1a6a2a`,
          `#1a6a2a`,
          `kanda.gakki.lime-sub`,
        ),
        vsign: K(`kanda.gakki.lime`, `#1a6a2a`, `#f4f43a`),
      },
    ],
  ),
  lt = it(
    `N`,
    [-494.1, -474.1],
    [
      {
        a: -479.6,
        b: -473,
        id: `issei`,
        floors: 3,
        wall: 10127986,
        wallKind: `tile`,
        win: `warm`,
        shop: `books`,
        hours: ot,
        fascia: {
          main: `kanda.books.shop1`,
          bg: `#2a1a0e`,
          fg: `#f0dca8`,
          style: `wood`,
          serif: !0,
        },
        vsign: {
          ...K(`kanda.books.kosho`, `#2a1a0e`, `#f0dca8`),
          style: `wood`,
        },
      },
      {
        a: -473,
        b: -466,
        id: `bungado`,
        floors: 4,
        wall: 13155492,
        wallKind: `tile`,
        win: `warm`,
        shop: `books`,
        hours: ot,
        awning: 2771498,
        fascia: {
          main: `kanda.books.shop2`,
          bg: `#f4ecd8`,
          fg: `#2a1a0e`,
          style: `enamel`,
          serif: !0,
        },
      },
      {
        a: -466,
        b: -459.4,
        id: `sanyo`,
        floors: 5,
        wall: 11577496,
        wallKind: `tile`,
        win: `tenant`,
        shop: `books`,
        hours: ot,
        fascia: {
          main: `kanda.books.shop3`,
          sub: `kanda.books.bijutsu`,
          bg: `#1a2a3a`,
          fg: `#e8e0c8`,
          style: `enamel`,
          serif: !0,
        },
      },
      {
        a: -459.4,
        b: -452,
        id: `hokkai`,
        floors: 2,
        wall: 14209216,
        wallKind: `concrete`,
        win: `warm`,
        shop: `curry`,
        hours: [11, 21],
        awning: 15253536,
        fascia: W(`kanda.curry.hokkai`, `#ffe14a`, `#1a1a1a`, `#1a1a1a`),
      },
      {
        a: -452,
        b: -444,
        id: `tsukuba`,
        floors: 4,
        wall: 13157564,
        wallKind: `tile`,
        win: `office`,
        shop: `soba`,
        fascia: W(`brand.tsukubasoba`, `#ffcc00`, `#1d2088`, `#e60012`),
        vsign: K(`kanda.old.teuchi`, `#ffcc00`, `#1d2088`),
      },
      {
        a: -444,
        b: -430,
        id: `ishida-yama`,
        floors: 8,
        wall: 15263456,
        wallKind: `alc`,
        win: `office`,
        shop: `outdoor`,
        hours: at,
        fascia: W(
          `kanda.sports.ishida`,
          `#0a5a2a`,
          `#ffffff`,
          `#ffffff`,
          `kanda.sports.yama`,
        ),
        vsign: K(`kanda.sports.yama`, `#0a5a2a`, `#ffffff`),
        bands: [
          G(`kanda.sports.f-ski`, 2, `#ffffff`, `#0a5a2a`),
          G(`kanda.sports.f-boots`, 4, `#0a5a2a`, `#ffffff`),
        ],
      },
      {
        a: -430,
        b: -421,
        id: `rudoar`,
        floors: 5,
        wall: 12098170,
        wallKind: `brick`,
        win: `warm`,
        shop: `kissa`,
        hours: [8, 22],
        awning: 3873802,
        fascia: W(`brand.rudoar`, `#3b1c0a`, `#f5e6c8`, `#c9a063`),
      },
      {
        a: -421,
        b: -406,
        id: `yasukuni-office`,
        floors: 9,
        wall: 12896460,
        wallKind: `alc`,
        win: `tenant`,
        shop: `lobby`,
        fascia: W(
          `kanda.curry.gp`,
          `#ffe14a`,
          `#c01818`,
          `#c01818`,
          `kanda.curry.gp-sub`,
        ),
        winWords: [
          `trade.juku.sign.kobetsu`,
          ``,
          `kanda.gakki.f-school`,
          ``,
          ``,
          ``,
          ``,
        ],
      },
      {
        a: -406,
        b: -392.4,
        id: `board-shop`,
        floors: 6,
        corner: `E`,
        wall: 2763824,
        wallKind: `alc`,
        win: `dark`,
        shop: `ski`,
        hours: at,
        fascia: W(
          `kanda.sports.snowboard`,
          `#141414`,
          `#7af0ff`,
          `#7af0ff`,
          `kanda.sports.newmodel`,
        ),
        vsign: K(`kanda.sports.snowboard`, `#141414`, `#7af0ff`),
        vsign2: K(`kanda.sports.tuneup`, `#7af0ff`, `#141414`),
      },
    ],
  ),
  ut = it(
    `E`,
    [-171, -161.9],
    [
      {
        a: -558.9,
        b: -542,
        id: `suda-office`,
        floors: 8,
        wall: 13159632,
        wallKind: `alc`,
        win: `office`,
        shop: `lobby`,
        fascia: W(`kanda.street.chiyoda`, `#ffffff`, `#2a3a5a`),
      },
      {
        a: -542,
        b: -527,
        id: `suda-curry`,
        floors: 6,
        corner: `S`,
        wall: 14736596,
        wallKind: `tile`,
        win: `tenant`,
        shop: `curry`,
        hours: [10, 23],
        fascia: W(`brand.rokuroku`, `#ffd400`, `#000000`, `#e60012`),
        vsign: K(`kanda.curry.word`, `#ffd400`, `#000000`, `#e60012`),
      },
    ],
  ),
  dt = [16, 24],
  J = [
    `kanda.gado.chochin`,
    `kanda.gado.chochin-2`,
    `kanda.gado.chochin-3`,
    `kanda.gado.chochin-4`,
  ],
  ft = it(
    `W`,
    [-9.6, 7.8],
    [
      {
        a: -358,
        b: -349.5,
        id: `gado-1`,
        floors: 4,
        wall: 12103840,
        wallKind: `tile`,
        win: `warm`,
        shop: `izakaya`,
        front: `lattice`,
        hours: [11.5, 24],
        fascia: {
          main: `kanda.gado.izakaya-1`,
          bg: `#f4ecd8`,
          fg: `#7a1a0a`,
          style: `enamel`,
          serif: !0,
        },
        noren: { key: `kanda.gado.chochin-4`, bg: `#1a2a5a`, fg: `#ffffff` },
        lanterns: [J[3], J[0]],
        vsign: K(`kanda.gado.izakaya-1`, `#ffffff`, `#c01818`),
      },
      {
        a: -349.5,
        b: -341,
        id: `gado-2`,
        floors: 3,
        wall: 9075306,
        wallKind: `concrete`,
        win: `warm`,
        shop: `yakitori`,
        front: `open`,
        hours: dt,
        fascia: W(`kanda.gado.izakaya-2`, `#c01818`, `#ffffff`, `#ffffff`),
        lanterns: [J[2], J[2], J[2]],
      },
      {
        a: -341,
        b: -333,
        id: `gado-3`,
        floors: 2,
        wall: 6969930,
        wallKind: `concrete`,
        win: `warm`,
        shop: `tachinomi`,
        front: `open`,
        hours: [15, 23.5],
        fascia: W(`kanda.gado.izakaya-3`, `#ffe14a`, `#1a1a1a`, `#c01818`),
        lanterns: [J[0], J[0]],
      },
      {
        a: -333,
        b: -323.5,
        id: `gado-4`,
        floors: 5,
        wall: 13682872,
        wallKind: `tile`,
        win: `tenant`,
        shop: `izakaya`,
        front: `lattice`,
        hours: dt,
        fascia: {
          main: `kanda.gado.izakaya-4`,
          bg: `#2a1a0e`,
          fg: `#f0dca8`,
          style: `wood`,
          serif: !0,
        },
        noren: { key: `kanda.gado.chochin`, bg: `#5a1a10`, fg: `#ffffff` },
        lanterns: [J[0], J[3]],
        winWords: [`trade.izakaya.sign.izakaya`, ``, `trade.mahjong.name`],
      },
      {
        a: -323.5,
        b: -314.5,
        id: `gado-5`,
        floors: 3,
        wall: 11049088,
        wallKind: `tile`,
        win: `warm`,
        shop: `yakitori`,
        front: `open`,
        hours: dt,
        fascia: W(`kanda.gado.izakaya-5`, `#ffffff`, `#1a1a1a`, `#c01818`),
        lanterns: [J[1], J[1]],
        vsign: K(`kanda.gado.chochin-2`, `#c01818`, `#ffffff`),
      },
    ],
  ),
  pt = it(
    `W`,
    [-9.6, 4.8],
    [
      {
        a: -299.5,
        b: -291,
        id: `gado-6`,
        floors: 4,
        corner: `N`,
        wall: 12630184,
        wallKind: `tile`,
        win: `warm`,
        shop: `izakaya`,
        front: `lattice`,
        hours: [11.5, 23.5],
        fascia: W(`kanda.gado.izakaya-6`, `#1a2a5a`, `#ffffff`, `#ffffff`),
        noren: { key: `kanda.gado.chochin-4`, bg: `#1a2a5a`, fg: `#ffffff` },
        lanterns: [J[3], J[3]],
        vsign: K(`kanda.gado.izakaya-6`, `#1a2a5a`, `#ffffff`),
      },
      {
        a: -291,
        b: -283,
        id: `gado-7`,
        floors: 3,
        wall: 10127986,
        wallKind: `concrete`,
        win: `warm`,
        shop: `tachinomi`,
        front: `open`,
        hours: dt,
        fascia: W(`kanda.gado.izakaya-7`, `#141414`, `#ffd400`, `#e60012`),
        lanterns: [J[0], J[2]],
      },
      {
        a: -283,
        b: -274.5,
        id: `gado-8`,
        floors: 5,
        wall: 14209732,
        wallKind: `tile`,
        win: `tenant`,
        shop: `izakaya`,
        front: `lattice`,
        hours: dt,
        fascia: W(`kanda.gado.izakaya-8`, `#0a3a6a`, `#ffffff`, `#ffffff`),
        noren: { key: `kanda.gado.chochin`, bg: `#0a3a6a`, fg: `#ffffff` },
        lanterns: [J[0]],
        winWords: [``, `trade.juku.sign.kobetsu`, ``],
      },
      {
        a: -274.5,
        b: -266,
        id: `gado-9`,
        floors: 2,
        wall: 8022618,
        wallKind: `concrete`,
        win: `warm`,
        shop: `yakitori`,
        front: `open`,
        hours: [16, 23],
        fascia: W(`kanda.gado.izakaya-2`, `#c01818`, `#ffffff`),
        lanterns: [J[2], J[2]],
      },
      {
        a: -266,
        b: -257.1,
        id: `gado-10`,
        floors: 4,
        wall: 11840668,
        wallKind: `tile`,
        win: `warm`,
        shop: `izakaya`,
        front: `lattice`,
        hours: dt,
        fascia: {
          main: `kanda.gado.izakaya-1`,
          bg: `#f4ecd8`,
          fg: `#7a1a0a`,
          style: `enamel`,
          serif: !0,
        },
        noren: { key: `kanda.gado.chochin-4`, bg: `#3a2a1a`, fg: `#ffffff` },
        lanterns: [J[3], J[0]],
      },
    ],
  ),
  mt = it(
    `E`,
    [4.8, 23.55],
    [
      {
        a: -299.5,
        b: -257.1,
        id: `gado-back`,
        floors: 8,
        wall: 14210252,
        wallKind: `tile`,
        win: `office`,
        shop: `lobby`,
        fascia: W(`kanda.street.chiyoda`, `#ffffff`, `#3a3a3a`),
        coverB: 30,
      },
    ],
  );
function ht() {
  return [...st, ...ct, ...lt, ...ut, ...ft, ...pt, ...mt];
}
[...ft, ...pt];
var gt = -183.6,
  _t = -171.4,
  vt = [
    {
      id: `isehei`,
      z0: -558.9,
      z1: -551.5,
      floors: 3,
      kind: `nabe`,
      wood: `#4a3020`,
      boardAt: `eave`,
      rail: `diamond`,
      hours: [11.5, 22],
      board: {
        main: `kanda.old.isehei`,
        bg: `#3a2614`,
        fg: `#f2e2b0`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-a`, bg: `#1a2a4a`, fg: `#ffffff` },
      lanterns: [{ key: `kanda.old.isehei-sub`, body: `#f0e6d0` }],
    },
    {
      id: `sasamura`,
      z0: -551.5,
      z1: -544.5,
      floors: 3,
      kind: `kanmi`,
      wood: `#5a3a22`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11, 20],
      board: {
        main: `kanda.old.sasamura`,
        bg: `#2a1a0e`,
        fg: `#f0dca8`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-k`, bg: `#6a1a18`, fg: `#ffffff` },
      lanterns: [
        { key: `kanda.old.sasamura-menu`, body: `#f4ecd8` },
        { key: `kanda.old.sasamura-menu`, body: `#f4ecd8` },
      ],
    },
    {
      id: `shakuyaku`,
      z0: -544.5,
      z1: -537,
      floors: 3,
      kind: `nabe`,
      wood: `#3e2a1c`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11.5, 21],
      board: {
        main: `kanda.old.shakuyaku`,
        bg: `#24180e`,
        fg: `#e8d8a8`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-s`, bg: `#2a2a2a`, fg: `#ffffff` },
    },
    {
      id: `matsuba`,
      z0: -537,
      z1: -527,
      floors: 2,
      kind: `soba`,
      wood: `#4a3222`,
      boardAt: `door`,
      rail: `bars`,
      hours: [11, 20.5],
      cornerS: !0,
      board: {
        main: `kanda.old.matsuba`,
        bg: `#2a1a0e`,
        fg: `#f4e4b4`,
        style: `wood`,
        serif: !0,
      },
      noren: { key: `kanda.old.noren-m`, bg: `#1a2a5a`, fg: `#ffffff` },
      lanterns: [{ key: `kanda.old.teuchi`, body: `#f0e6d0` }],
    },
  ],
  yt = 3.4,
  bt = 2.9,
  xt = (e) => yt + (e.floors - 1) * bt;
function St(e, t, n, r, i) {
  B(e, t, n, r, i, `#efe6d0`);
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
function Ct(e) {
  (e.need(`old:kawara`, 128, 64, je(`#4c5054`)),
    e.need(`old:shoji`, 128, 64, St),
    e.need(`old:lattice`, 128, 96, Ae(`#2a1a10`, `#b88a52`, 18)),
    e.need(
      `old:rekiken`,
      128,
      48,
      Be(`kanda.old.rekiken`, `#e8e2d0`, `#3a3020`),
    ));
  for (let t of vt) {
    (e.need(`old:boards:${t.wood}`, 128, 128, ke(t.wood)),
      e.need(U(t.board), 384, 96, xe(t.board)),
      e.need(`shop:${t.kind}:0`, 400, 160, Pe(t.kind)),
      e.need(
        `noren:${t.noren.key}:${t.noren.bg}`,
        128,
        80,
        Ee(t.noren.key, t.noren.bg, t.noren.fg),
      ));
    for (let n of t.lanterns ?? [])
      e.need(`chochinw:${n.key}:${n.body}`, 64, 96, Te(n.key, n.body));
  }
}
var wt = 3;
function Tt(e, t, n, r) {
  let i = { x0: gt, x1: _t, z0: t.z0, z1: t.z1 },
    a = he(i, `W`),
    o = n.white(),
    s = n.uv(`old:boards:${t.wood}`),
    c = n.uv(`old:kawara`),
    l = xt(t),
    u = parseInt(t.wood.slice(1), 16);
  (e.setMaterial(0.9, 0, 0, 0), D(e, 16777215, 0.85));
  for (let n of [`N`, `S`, `E`]) {
    if (n === `S` && t.cornerS) continue;
    let r = he(i, n);
    L(e, r, 0, r.L, 0, l, 0, s);
  }
  ((t.cornerS ? [a, he(i, `S`)] : [a]).forEach((i, a) => {
    let d = a === 0;
    (e.setMaterial(0.35, 0, 0.18, 17),
      D(e, 16777215),
      L(e, i, 0.25, i.L - 0.25, 0, 3.05, -0.5, n.uv(`shop:${t.kind}:0`)),
      e.setMaterial(0.7, 0, 0.25, wt | 16));
    let f = n.uv(`old:lattice`),
      p = d ? [i.L / 2 - 1, i.L / 2 + 1] : [-1, -1],
      m = Math.max(2, Math.round(i.L / 1.8));
    for (let t = 0; t < m; t++) {
      let n = (i.L * t) / m + 0.25 * (t === 0),
        r = (i.L * (t + 1)) / m - 0.25 * (t === m - 1),
        a = (n + r) / 2;
      (a > p[0] && a < p[1]) || L(e, i, n, r, 0, 3.05, -0.15, f);
    }
    (e.setMaterial(0.8, 0, 0, 0), D(e, u, 0.8));
    for (let t of [0, i.L]) {
      let [n, r] = I(i, t, 0),
        [a, s] = I(i, t, -0.5);
      t === 0
        ? e.quad(
            n,
            0,
            r,
            a,
            0,
            s,
            a,
            3.05,
            s,
            n,
            3.05,
            r,
            o.u0,
            o.v0,
            o.u1,
            o.v1,
          )
        : e.quad(
            a,
            0,
            s,
            n,
            0,
            r,
            n,
            3.05,
            r,
            a,
            3.05,
            s,
            o.u0,
            o.v0,
            o.u1,
            o.v1,
          );
    }
    (D(e, 16777215, 0.9),
      L(e, i, 0, i.L, 3.05, 3.4499999999999997, 0, s),
      D(e, u, 0.7));
    for (let t of [0.12, i.L - 0.12]) {
      let [n, r] = I(i, t, 0.08);
      j(e, n, r, 0, l, 0.12, 0.12, i.nx, i.nz, o);
    }
    for (let n = 0; n < t.floors; n++) {
      let r = n === 0 ? yt : yt + n * bt;
      if (n === t.floors - 1) break;
      (e.setMaterial(0.75, 0, 0, 0), D(e, 16777215));
      let [a, s] = I(i, -0.2, 0),
        [l, d] = I(i, i.L + 0.2, 0),
        [f, p] = I(i, i.L + 0.2, 1),
        [m, h] = I(i, -0.2, 1);
      (e.quad(
        m,
        r - 0.35,
        h,
        f,
        r - 0.35,
        p,
        l,
        r + 0.05,
        d,
        a,
        r + 0.05,
        s,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      ),
        D(e, u, 0.6),
        e.quad(
          a,
          r + 0.03,
          s,
          l,
          r + 0.03,
          d,
          f,
          r - 0.37,
          p,
          m,
          r - 0.37,
          h,
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        ),
        D(e, 2762274));
      let [g, _] = I(i, -0.2, 1),
        [v, y] = I(i, i.L + 0.2, 1);
      e.quad(
        g,
        r - 0.47,
        _,
        v,
        r - 0.47,
        y,
        v,
        r - 0.33,
        y,
        g,
        r - 0.33,
        _,
        o.u0,
        o.v0,
        o.u1,
        o.v1,
      );
    }
    for (let a = 1; a < t.floors; a++) {
      let c = yt + (a - 1) * bt,
        l = c + bt;
      (e.setMaterial(0.9, 0, 0, 0),
        D(e, 16777215),
        L(e, i, 0, i.L, c, c + 0.75, 0, s),
        L(e, i, 0, i.L, l - 0.45, l, 0, s),
        e.setMaterial(0.5, 0, 0.2, wt | 16),
        D(e, 16777215),
        L(e, i, 0.3, i.L - 0.3, c + 0.75, l - 0.45, -0.25, n.uv(`old:shoji`)),
        e.setMaterial(0.9, 0, 0, 0),
        D(e, u, 0.85),
        L(e, i, 0, 0.3, c + 0.75, l - 0.45, 0, s),
        L(e, i, i.L - 0.3, i.L, c + 0.75, l - 0.45, 0, s));
      let d = 0.4,
        f = c + 0.05,
        p = c + 0.8;
      D(e, u, 0.75);
      let [m, h] = I(i, 0.3, d),
        [g, _] = I(i, i.L - 0.3, d);
      (P(e, m, p, h, g, p, _, 0.04, o),
        P(e, m, f + 0.12, h, g, f + 0.12, _, 0.03, o));
      let v = i.L - 0.6;
      if (t.rail === `diamond` && r > 0) {
        let t = p - (f + 0.12);
        for (let n = -t; n < v; n += 0.32) {
          let r = Math.max(0, n),
            a = Math.min(v, n + t),
            s = f + 0.12 + (r - n),
            c = f + 0.12 + (a - n),
            [l, u] = I(i, 0.3 + r, d),
            [p, m] = I(i, 0.3 + a, d);
          P(e, l, s, u, p, c, m, 0.018, o);
          let [h, g] = I(i, 0.3 + v - r, d),
            [_, y] = I(i, 0.3 + v - a, d);
          P(e, h, s, g, _, c, y, 0.018, o);
        }
      } else {
        let t = Math.max(4, Math.round(v / (r > 0 ? 0.14 : 0.3)));
        for (let n = 0; n <= t; n++) {
          let [r, a] = I(i, 0.3 + (v * n) / t, d);
          P(e, r, f + 0.12, a, r, p, a, 0.016, o);
        }
      }
      for (let t of [0.3, i.L - 0.3]) {
        let [n, r] = I(i, t, d);
        P(e, n, f - 0.1, r, n, p + 0.02, r, 0.05, o);
      }
    }
  }),
    e.setMaterial(0.7, 0, 0, 0),
    D(e, 16777215),
    F(e, i.x0, i.z0, i.x1, i.z1, l, t.floors === 3 ? 2 : 2.3, `z`, c, !0, 0.75),
    D(e, 2762790));
  {
    let n = (i.x0 + i.x1) / 2,
      r = t.floors === 3 ? 2 : 2.3,
      a = Math.min((i.x1 - i.x0 + 1.5) / 2, (i.z1 - i.z0 + 1.5) / 2 - 0.1);
    j(
      e,
      n,
      (i.z0 + i.z1) / 2,
      l + r - 0.05,
      l + r + 0.22,
      0.14,
      Math.max(0.2, (i.z1 - i.z0 + 1.5) / 2 - a),
      1,
      0,
      o,
    );
  }
  let d = n.uv(U(t.board));
  if ((e.setMaterial(0.6, 0, 0, 0), D(e, 16777215), t.boardAt === `eave`)) {
    let t = Math.min(a.L - 0.6, 4.6),
      n = t / 4,
      [r, i] = I(a, a.L / 2, 0.55);
    (j(
      e,
      r,
      i,
      3.4499999999999997,
      3.4499999999999997 + n,
      t / 2,
      0.06,
      a.nx,
      a.nz,
      o,
      d,
      d,
    ),
      D(e, 2762274),
      j(
        e,
        r,
        i,
        3.4499999999999997 + n,
        3.6 + n,
        t / 2 + 0.15,
        0.22,
        a.nx,
        a.nz,
        o,
      ));
  } else {
    let t = Math.min(a.L - 1, 3),
      n = t / 4;
    L(e, a, a.L / 2 - t / 2, a.L / 2 + t / 2, 3.03 - n, 3.03, 0.14, d);
  }
  return (
    e.setMaterial(0.6, 0.3, 0, 0),
    D(e, 16777215),
    L(e, a, 0.28, 0.78, 1.35, 1.55, 0.14, n.uv(`old:rekiken`)),
    (t.lanterns ?? []).forEach((t, r, i) => {
      let o = i.length === 1 ? a.L - 0.9 : r === 0 ? 0.9 : a.L - 0.9,
        [s, c] = I(a, o, 0.6);
      (e.setMaterial(0.6, 0, 0.4, wt),
        D(e, 16777215),
        fe(
          e,
          s,
          c,
          2.2,
          2.9499999999999997,
          0.22,
          n.uv(`chochinw:${t.key}:${t.body}`),
        ));
    }),
    l
  );
}
function Et(e, t, n) {
  let r = he({ x0: gt, x1: _t, z0: t.z0, z1: t.z1 }, `W`);
  (e.setMaterial(0.9, 0, 0, 16),
    D(e, 16777215),
    L(
      e,
      r,
      r.L / 2 - 1,
      r.L / 2 + 1,
      1.95,
      3.04,
      0.06,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ));
}
function Dt(e, t, n) {
  let r = { x0: gt, x1: _t, z0: t.z0, z1: t.z1 },
    i = t.cornerS ? [he(r, `W`), he(r, `S`)] : [he(r, `W`)];
  (e.setMaterial(0.85, 0, 0, 16), D(e, 16777215, 0.7));
  for (let r of i)
    L(e, r, 0.24, r.L - 0.24, 0, 3.04, -0.06, n.uv(`old:boards:${t.wood}`));
}
var Ot = { x: -343, z: -551 },
  kt = `#ddd2ba`;
function At(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  for (let a = n + i * 0.82; a < n + i; a += i * 0.03)
    B(e, t, a, r, 1, `rgba(0,0,0,0.12)`);
  (B(e, t, n + i * 0.88, r, i * 0.12, `#8a7c6a`),
    B(e, t, n, r, i * 0.04, `#b8aa90`),
    B(e, t, n + i * 0.46, r, i * 0.025, `#b8aa90`));
  let a = (n, i, a) => {
    let o = t + r / 2,
      s = a / 2;
    ((e.fillStyle = `#a89878`),
      e.beginPath(),
      e.moveTo(o - s - 3, i),
      e.lineTo(o - s - 3, n + s),
      e.arc(o, n + s, s + 3, Math.PI, 0),
      e.lineTo(o + s + 3, i),
      e.fill());
    let c = e.createLinearGradient(0, n, 0, i);
    (c.addColorStop(0, `#3a4450`),
      c.addColorStop(1, `#1a2028`),
      (e.fillStyle = c),
      e.beginPath(),
      e.moveTo(o - s, i),
      e.lineTo(o - s, n + s),
      e.arc(o, n + s, s, Math.PI, 0),
      e.lineTo(o + s, i),
      e.fill(),
      B(e, o - 1, n + s, 2, i - n - s, `#c8bca0`));
  };
  (a(n + i * 0.1, n + i * 0.42, r * 0.42),
    a(n + i * 0.52, n + i * 0.8, r * 0.46));
}
function jt(e, t, n, r, i) {
  (B(e, t, n, r, i, kt),
    B(e, t, n, r, i * 0.1, `#b8aa90`),
    B(e, t, n + i * 0.9, r, i * 0.1, `#b8aa90`));
  for (let a = 0; a < 12; a++) {
    let o = t + ((a + 0.5) * r) / 12,
      s = r / 12 / 4;
    ((e.fillStyle = `#26303a`),
      e.beginPath(),
      e.moveTo(o - s, n + i * 0.82),
      e.lineTo(o - s, n + i * 0.22 + s),
      e.arc(o, n + i * 0.22 + s, s, Math.PI, 0),
      e.lineTo(o + s, n + i * 0.82),
      e.fill(),
      B(e, t + (a * r) / 12, n, 2, i, `rgba(0,0,0,0.12)`));
  }
}
function Mt(e, t, n, r, i) {
  B(e, t, n, r, i, `#6fa894`);
  for (let a = 0; a < 16; a++)
    B(e, t + (a * r) / 16, n, 2, i, `rgba(30,60,50,0.35)`);
  for (let a = 0; a < 10; a++)
    B(e, t, n + (a * i) / 10, r, 1, `rgba(255,255,255,0.12)`);
  e.globalAlpha = 0.12;
  for (let a = 0; a < 30; a++)
    ((e.fillStyle = a % 2 ? `#2a4a3a` : `#a8d8c4`),
      e.fillRect(t + ((a * 37) % r), n + ((a * 53) % i), 6, 14));
  e.globalAlpha = 1;
}
function Nt(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  for (let a of [t + r * 0.3, t + r * 0.7]) {
    let t = r * 0.15;
    ((e.fillStyle = `#141a20`),
      e.beginPath(),
      e.moveTo(a - t, n + i * 0.92),
      e.lineTo(a - t, n + i * 0.15 + t),
      e.arc(a, n + i * 0.15 + t, t, Math.PI, 0),
      e.lineTo(a + t, n + i * 0.92),
      e.fill(),
      (e.fillStyle = `#7a6a3a`),
      e.beginPath(),
      e.arc(a, n + i * 0.45, t * 0.5, 0, Math.PI),
      e.fill());
  }
}
function Pt(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  let a = t + r / 2,
    o = r * 0.32;
  ((e.fillStyle = `#a89878`),
    e.beginPath(),
    e.moveTo(a - o - 4, n + i),
    e.lineTo(a - o - 4, n + i * 0.15 + o),
    e.arc(a, n + i * 0.15 + o, o + 4, Math.PI, 0),
    e.lineTo(a + o + 4, n + i),
    e.fill(),
    (e.fillStyle = `#3a2416`),
    e.beginPath(),
    e.moveTo(a - o, n + i),
    e.lineTo(a - o, n + i * 0.15 + o),
    e.arc(a, n + i * 0.15 + o, o, Math.PI, 0),
    e.lineTo(a + o, n + i),
    e.fill(),
    B(e, a - 1, n + i * 0.4, 2, i * 0.6, `#1a1008`));
}
function Ft(e) {
  (e.need(`nik:bay`, 64, 256, At),
    e.need(`nik:drum`, 256, 64, jt),
    e.need(`nik:copper`, 128, 128, Mt),
    e.need(`nik:belfry`, 64, 128, Nt),
    e.need(`nik:door`, 64, 96, Pt),
    e.need(`nik:stucco`, 32, 32, (e, t, n, r, i) => B(e, t, n, r, i, kt)),
    e.need(`nik:stone`, 64, 32, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#9a968c`);
      for (let a = 0; a < 4; a++)
        B(e, t + (a * r) / 4, n, 1.5, i, `rgba(0,0,0,0.2)`);
    }),
    e.need(`nik:hedge`, 64, 32, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#3a5e30`);
      for (let a = 0; a < 60; a++)
        B(
          e,
          t + ((a * 29) % r),
          n + ((a * 17) % i),
          3,
          3,
          a % 2 ? `#4e7a3e` : `#2c4a26`,
        );
    }),
    e.need(
      `nik:board`,
      192,
      64,
      Be(`kanda.nikolai.name`, `#f4f0e6`, `#2a2a2a`, `kanda.nikolai.hours`),
    ),
    e.need(
      `nik:juyo`,
      128,
      48,
      Be(`kanda.nikolai.juyo`, `#3a3a36`, `#e8e4d8`),
    ));
}
var It = 0.035;
function Lt(e, t, n, r, i, a, o, s = ``) {
  let c = t.uv(`nik:bay`),
    l = [
      [`S`, n, a, i, a],
      [`N`, i, r, n, r],
      [`E`, i, a, i, r],
      [`W`, n, r, n, a],
    ];
  for (let [t, n, r, i, a] of l) {
    if (s.includes(t)) continue;
    let l = Math.hypot(i - n, a - r),
      u = Math.max(1, Math.round(l / 3.2));
    for (let t = 0; t < u; t++) {
      let s = t / u,
        l = (t + 1) / u;
      O(
        e,
        n + (i - n) * s,
        r + (a - r) * s,
        n + (i - n) * l,
        r + (a - r) * l,
        0,
        o,
        c,
      );
    }
  }
}
function Rt(e, t, n) {
  let r = t.white(),
    i = t.uv(`nik:copper`),
    a = t.uv(`nik:stucco`),
    o = [],
    s = n > 1 ? 24 : n > 0 ? 18 : 12,
    { x: c, z: l } = Ot;
  (e.setMaterial(0.85, 0, It, 1), D(e, 16777215));
  let u = { x0: c - 8, x1: c + 10, z0: l - 6, z1: l + 6, h: 12 },
    d = { x0: c - 4.5, x1: c + 4.5, z0: l - 10.5, z1: l + 10.5, h: 11 },
    f = { x0: c - 11, x1: c - 8, z0: l - 4.5, z1: l + 4.5, h: 9 },
    p = { x0: c - 17.5, x1: c - 11, z0: l - 3.25, z1: l + 3.25, h: 15.5 };
  (Lt(e, t, u.x0, u.z0, u.x1, u.z1, u.h),
    Lt(e, t, d.x0, d.z0, d.x1, d.z1, d.h),
    Lt(e, t, f.x0, f.z0, f.x1, f.z1, f.h));
  {
    let n = p,
      s = t.uv(`nik:belfry`),
      c = [
        [n.x0, n.z1, n.x1, n.z1],
        [n.x1, n.z0, n.x0, n.z0],
        [n.x0, n.z0, n.x0, n.z1],
        [n.x1, n.z1, n.x1, n.z0],
      ];
    for (let [r, i, o, l] of c)
      (O(e, r, i, o, l, 0, 10.5, t.uv(`nik:bay`)),
        O(e, r, i, o, l, 10.5, 14.4, s),
        O(e, r, i, o, l, 14.4, n.h, a));
    (e.setMaterial(0.7, 0, 0, 0),
      D(e, 16777215),
      O(
        e,
        n.x0 - 0.06,
        n.z0 + 1.6,
        n.x0 - 0.06,
        n.z1 - 1.6,
        0,
        5.2,
        t.uv(`nik:door`),
      ),
      D(e, 13155488),
      A(e, n.x0 - 0.25, 10.3, n.z0 - 0.25, n.x1 + 0.25, 10.6, n.z1 + 0.25, r),
      A(
        e,
        n.x0 - 0.3,
        n.h - 0.1,
        n.z0 - 0.3,
        n.x1 + 0.3,
        n.h + 0.3,
        n.z1 + 0.3,
        r,
      ),
      e.setMaterial(0.85, 0, It, 1),
      D(e, 16777215));
    let u = (n.x0 + n.x1) / 2;
    (M(e, u, l, n.h + 0.3, n.h + 2, 2, t.uv(`nik:drum`), 8, !0),
      e.setMaterial(0.45, 0.6, 0, 0),
      D(e, 16777215),
      N(
        e,
        u,
        l,
        [
          2.25,
          n.h + 2,
          2.3,
          n.h + 2.35,
          1.9,
          n.h + 3.3,
          1,
          n.h + 4.3,
          0.3,
          n.h + 4.9,
          0.05,
          n.h + 5.1,
        ],
        8,
        i,
      ),
      zt(e, u, l, n.h + 5, 2.2, r),
      o.push({ cx: u, cz: l, hx: 3.25, hz: 3.25, h: n.h }));
  }
  (D(e, 13155488),
    e.setMaterial(0.85, 0, 0, 0),
    A(e, u.x0 - 0.2, u.h - 0.3, u.z0 - 0.2, u.x1 + 0.2, u.h, u.z1 + 0.2, r),
    A(e, d.x0 - 0.2, d.h - 0.3, d.z0 - 0.2, d.x1 + 0.2, d.h, d.z1 + 0.2, r),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    F(e, u.x0, u.z0, u.x1, u.z1, u.h, 2.4, `x`, i, !1, 0.35, a),
    F(e, d.x0, d.z0, d.x1, d.z1, d.h, 2.2, `z`, i, !1, 0.35, a),
    F(e, f.x0, f.z0, f.x1, f.z1, f.h, 1.2, `z`, i, !0, 0.3),
    o.push({
      cx: (u.x0 + u.x1) / 2,
      cz: l,
      hx: (u.x1 - u.x0) / 2,
      hz: 6,
      h: u.h,
    }),
    o.push({ cx: c, cz: l, hx: 4.5, hz: 10.5, h: d.h }),
    o.push({ cx: (f.x0 + f.x1) / 2, cz: l, hx: 1.5, hz: 4.5, h: f.h }),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    N(
      e,
      c + 10,
      l,
      [4.6, 0, 4.6, 9.5],
      s / 2,
      t.uv(`nik:bay`),
      -Math.PI / 2,
      Math.PI / 2,
    ),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    N(
      e,
      c + 10,
      l,
      [4.9, 9.5, 4.6, 10.8, 3.6, 12.3, 2, 13.3, 0.05, 13.6],
      s / 2,
      i,
      -Math.PI / 2,
      Math.PI / 2,
    ),
    o.push({ cx: c + 12.3, cz: l, hx: 2.3, hz: 4.4, h: 9.5 }),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    A(e, c - 6, 12, l - 6, c + 6, 13.4, l + 6, a),
    M(e, c, l, 13.4, 18.4, 5.7, t.uv(`nik:drum`), s, !0),
    D(e, 13155488),
    e.setMaterial(0.85, 0, 0, 0),
    M(e, c, l, 18.4, 18.9, 6.05, r, s),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215));
  let m = [];
  for (let e = 0; e <= 8; e++) {
    let t = (e / 8) * (Math.PI / 2);
    m.push(6.3 * Math.cos(t) + 0.02, 18.9 + 6.6 * Math.sin(t));
  }
  (N(e, c, l, m, s, i),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    M(e, c, l, 25.3, 26.6, 0.95, t.uv(`nik:drum`), 8, !0),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    N(e, c, l, [1.15, 26.6, 1, 27.1, 0.5, 27.6, 0.05, 27.8], 8, i),
    zt(e, c, l, 27.7, 2.6, r));
  let h = se,
    g = t.uv(`nik:stone`),
    _ = t.uv(`nik:hedge`),
    v = { z0: l - 4.5, z1: l + 4.5 },
    y = [
      [h.minX + 0.4, h.minZ + 0.4, h.maxX - 0.4, h.minZ + 1.2],
      [h.minX + 0.4, h.maxZ - 1.2, h.maxX - 0.4, h.maxZ - 0.4],
      [h.maxX - 1.2, h.minZ + 0.4, h.maxX - 0.4, h.maxZ - 0.4],
      [h.minX + 0.4, h.minZ + 0.4, h.minX + 1.2, v.z0],
      [h.minX + 0.4, v.z1, h.minX + 1.2, h.maxZ - 0.4],
    ];
  for (let [t, n, r, i] of y)
    (e.setMaterial(0.9, 0, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, r, 0.65, i, g),
      D(e, 16777215),
      A(e, t + 0.1, 0.65, n + 0.1, r - 0.1, 1.75, i - 0.1, _),
      o.push({
        cx: (t + r) / 2,
        cz: (n + i) / 2,
        hx: (r - t) / 2,
        hz: (i - n) / 2,
        h: 1.75,
      }));
  if (n > 0) {
    (e.setMaterial(0.5, 0.6, 0, 0), D(e, 2105892));
    for (let t of [h.minZ + 0.8, h.maxZ - 0.8]) {
      P(e, h.minX + 0.6, 2.2, t, h.maxX - 0.6, 2.2, t, 0.025, r);
      for (let n = h.minX + 0.6; n <= h.maxX - 0.6; n += 2.4)
        P(e, n, 0.65, t, n, 2.25, t, 0.035, r);
    }
  }
  (e.setMaterial(0.9, 0, 0, 0), D(e, 16777215));
  for (let t of [v.z0 - 0.4, v.z1 + 0.4])
    (A(e, h.minX + 0.2, 0, t - 0.4, h.minX + 1, 2.6, t + 0.4, g),
      o.push({ cx: h.minX + 0.6, cz: t, hx: 0.4, hz: 0.4, h: 2.6 }));
  return (
    e.setMaterial(0.6, 0, 0, 0),
    O(
      e,
      h.minX + 0.15,
      v.z0 - 0.75,
      h.minX + 0.15,
      v.z0 - 0.05,
      1,
      2.2,
      t.uv(`nik:board`),
    ),
    O(
      e,
      h.minX + 0.15,
      v.z1 + 0.05,
      h.minX + 0.15,
      v.z1 + 0.75,
      1.3,
      1.75,
      t.uv(`nik:juyo`),
    ),
    o
  );
}
function zt(e, t, n, r, i, a) {
  (e.setMaterial(0.3, 0.9, 0.05, 0),
    D(e, 14205040),
    P(e, t, r, n, t, r + i, n, 0.06, a),
    P(e, t, r + i * 0.86, n - 0.28, t, r + i * 0.86, n + 0.28, 0.04, a),
    P(e, t, r + i * 0.7, n - 0.48, t, r + i * 0.7, n + 0.48, 0.05, a),
    P(
      e,
      t,
      r + i * 0.4 - 0.12,
      n - 0.32,
      t,
      r + i * 0.4 + 0.12,
      n + 0.32,
      0.04,
      a,
    ));
}
var Y = {
  gateZ: -664,
  court: { x0: -292, x1: -262, z0: -692.5, z1: -669 },
  hall: { x0: -286, x1: -268, z0: -690.5, z1: -680 },
  nittoku: { x: -298.5 },
  kyodan: { x: -277 },
};
function Bt(e, t, n, r, i) {
  B(e, t, n, r, i, `#222226`);
  for (let a = 0; a < 8; a++)
    B(e, t + (a * r) / 8, n, 1.5, i, `rgba(255,255,255,0.05)`);
}
function Vt(e, t, n, r, i) {
  (B(e, t, n, r, i, `#16161a`),
    B(e, t + r * 0.1, n + i * 0.2, r * 0.8, i * 0.5, `#3a2a1a`));
  for (let a = 0; a < 12; a++)
    B(
      e,
      t + r * 0.1 + (a * r * 0.8) / 12,
      n + i * 0.2,
      r * 0.03,
      i * 0.5,
      `#101012`,
    );
  B(e, t, n + i * 0.85, r, i * 0.15, `#2a2a2e`);
}
function Ht(e, t, n, r, i) {
  B(e, t, n, r, i, `#141416`);
  for (let a of [t + r * 0.25, t + r * 0.75]) {
    B(e, a - r * 0.21, n + i * 0.06, r * 0.42, i * 0.5, `#26262a`);
    for (let t = 1; t < 6; t++)
      B(
        e,
        a - r * 0.21 + (t * r * 0.42) / 6,
        n + i * 0.06,
        1.5,
        i * 0.5,
        `#0e0e10`,
      );
    for (let t = 1; t < 8; t++)
      B(
        e,
        a - r * 0.21,
        n + i * 0.06 + (t * i * 0.5) / 8,
        r * 0.42,
        1.5,
        `#0e0e10`,
      );
    B(e, a - r * 0.21, n + i * 0.62, r * 0.42, i * 0.3, `#1c1c20`);
    for (let t of [0.1, 0.5, 0.86])
      B(e, a - r * 0.235, n + i * t, r * 0.05, i * 0.03, `#a88a40`);
  }
}
function Ut(e) {
  return (t, n, r, i, a) => {
    (B(t, n, r, i, a, `#b89a4a`),
      B(t, n + i * 0.08, r + a * 0.05, i * 0.84, a * 0.9, `#121214`),
      ye(
        t,
        z(e),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#d8b860`,
        f(),
      ));
  };
}
function Wt(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, `#8e8c86`);
    for (let e = 0; e < 40; e++)
      B(
        t,
        n + ((e * 23) % i),
        r + ((e * 41) % a),
        2,
        2,
        e % 2 ? `#9e9c96` : `#7e7c76`,
      );
    ye(
      t,
      z(e),
      n + i / 2,
      r + a * 0.06,
      r + a * 0.94,
      i * 0.66,
      `#1a1a1a`,
      f(),
    );
  };
}
function Gt(e) {
  (e.need(`sei:black`, 64, 64, Bt),
    e.need(`sei:renji`, 96, 64, Vt),
    e.need(`sei:door`, 96, 128, Ht),
    e.need(`sei:kawara`, 128, 64, je(`#4a4e52`)),
    e.need(`sei:wall`, 64, 64, (e, t, n, r, i) => {
      (B(e, t, n, r, i, `#4a4a4e`),
        B(e, t, n + i * 0.8, r, i * 0.2, `#3a3a3c`));
      for (let a = 0; a < 6; a++)
        B(e, t + (a * r) / 6, n, 1.5, i * 0.8, `rgba(0,0,0,0.18)`);
    }),
    e.need(`sei:pave`, 64, 64, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#b8b2a4`);
      for (let a = 0; a < 4; a++)
        B(e, t, n + (a * i) / 4, r, 1.5, `rgba(0,0,0,0.18)`);
      for (let a = 0; a < 4; a++)
        for (let o = 0; o < 4; o++)
          B(
            e,
            t + (a * r) / 4 + (o % 2) * r * 0.125,
            n + (o * i) / 4,
            1.5,
            i / 4,
            `rgba(0,0,0,0.15)`,
          );
    }),
    e.need(`sei:gaku-nittoku`, 48, 128, Ut(`kanda.seido.nittokumon`)),
    e.need(`sei:gaku-taisei`, 48, 128, Ut(`kanda.seido.taiseiden`)),
    e.need(`sei:stone`, 48, 192, Wt(`kanda.seido.name`)),
    e.need(
      `sei:hours`,
      192,
      48,
      Be(`kanda.seido.hours`, `#f2efe6`, `#2a2a2a`),
    ));
}
function Kt(e, t, n, r, i, a, o, s, c, l) {
  let u = t.white(),
    d = t.uv(`sei:black`),
    f = t.uv(`sei:kawara`);
  (e.setMaterial(0.35, 0.1, 0, 0), D(e, 16777215));
  let p = i / 2,
    m = a / 2;
  for (let t of [-1, 1])
    for (let i of [-1, 1]) {
      let a = s === `z` ? n + i * m : n + t * p,
        l = s === `z` ? r + t * p : r + i * m;
      (A(e, a - 0.18, 0, l - 0.18, a + 0.18, o, l + 0.18, d),
        c.push({ cx: a, cz: l, hx: 0.2, hz: 0.2, h: o }));
    }
  if (
    (s === `z`
      ? A(e, n - m - 0.2, o - 0.5, r - p - 0.2, n + m + 0.2, o, r + p + 0.2, d)
      : A(e, n - p - 0.2, o - 0.5, r - m - 0.2, n + p + 0.2, o, r + m + 0.2, d),
    e.setMaterial(0.7, 0, 0, 0),
    s === `z`
      ? F(e, n - m, r - p, n + m, r + p, o, 1.6, `z`, f, !1, 0.9, d)
      : F(e, n - p, r - m, n + p, r + m, o, 1.6, `x`, f, !1, 0.9, d),
    l)
  ) {
    let i = t.uv(l);
    (e.setMaterial(0.4, 0.3, 0, 0),
      D(e, 16777215),
      s === `z`
        ? (j(e, n - m - 0.05, r, o - 1.6, o - 0.55, 0.32, 0.04, -1, 0, u, i, i),
          j(e, n + m + 0.05, r, o - 1.6, o - 0.55, 0.32, 0.04, 1, 0, u, i, i))
        : (j(e, n, r + m + 0.05, o - 1.6, o - 0.55, 0.32, 0.04, 0, 1, u, i, i),
          j(
            e,
            n,
            r - m - 0.05,
            o - 1.6,
            o - 0.55,
            0.32,
            0.04,
            0,
            -1,
            u,
            i,
            i,
          )));
  }
}
function qt(e, t, n) {
  let r = [],
    i = t.white(),
    a = t.uv(`sei:black`),
    o = t.uv(`sei:kawara`),
    s = t.uv(`sei:wall`),
    c = oe,
    l = 2.8,
    u = 0.5,
    d = Y.gateZ - 2.4,
    f = Y.gateZ + 2.4,
    p = [
      [c.minX + 0.2, c.minZ + 0.2, c.maxX - 0.2, c.minZ + 0.2 + u],
      [c.maxX - 0.2 - u, c.minZ + 0.2, c.maxX - 0.2, c.maxZ - 0.2],
      [c.minX + 0.2, c.maxZ - 0.2 - u, c.maxX - 0.2, c.maxZ - 0.2],
      [c.minX + 0.2, c.minZ + 0.2, c.minX + 0.2 + u, d],
      [c.minX + 0.2, f, c.minX + 0.2 + u, c.maxZ - 0.2],
    ];
  for (let [t, n, i, c] of p)
    (e.setMaterial(0.85, 0, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, i, l, c, s),
      e.setMaterial(0.7, 0, 0, 0),
      F(e, t, n, i, c, l, 0.45, i - t > c - n ? `x` : `z`, o, !1, 0.3, a),
      r.push({
        cx: (t + i) / 2,
        cz: (n + c) / 2,
        hx: (i - t) / 2,
        hz: (c - n) / 2,
        h: l,
      }));
  (Kt(e, t, c.minX + 0.45, Y.gateZ, 4.8, 1.4, 4.2, `z`, r),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215));
  {
    let n = c.minX - 0.9,
      a = d - 1.4,
      o = t.uv(`sei:stone`);
    (j(e, n, a, 0, 2.3, 0.3, 0.3, -1, 0, i, o, o),
      r.push({ cx: n, cz: a, hx: 0.32, hz: 0.32, h: 2.3 }),
      O(
        e,
        c.minX + 0.18,
        f + 0.3,
        c.minX + 0.18,
        f + 1.9,
        1.1,
        1.5,
        t.uv(`sei:hours`),
      ));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215),
    k(
      e,
      c.minX + 0.8,
      Y.gateZ - 1.6,
      Y.kyodan.x + 3,
      Y.gateZ + 1.6,
      0.03,
      t.uv(`sei:pave`),
    ),
    Kt(e, t, Y.nittoku.x, Y.gateZ, 3.8, 2.4, 4.6, `z`, r, `sei:gaku-nittoku`));
  let m = Y.court,
    h = 3.6,
    g = Y.kyodan.x - 3,
    _ = Y.kyodan.x + 3,
    v = [
      [m.x0, m.z0, m.x1, m.z0 + 0.6],
      [m.x0, m.z0, m.x0 + 0.6, m.z1],
      [m.x1 - 0.6, m.z0, m.x1, m.z1],
      [m.x0, m.z1 - 0.6, g, m.z1],
      [_, m.z1 - 0.6, m.x1, m.z1],
    ],
    y = t.uv(`sei:renji`);
  for (let [t, n, i, s] of v) {
    (e.setMaterial(0.5, 0.1, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, i, 0.6, s, a));
    let c = i - t > s - n,
      l = c ? i - t : s - n,
      u = Math.max(1, Math.round(l / 2.2));
    for (let r = 0; r < u; r++) {
      let a = (c ? t : n) + (l * r) / u,
        o = (c ? t : n) + (l * (r + 1)) / u;
      c
        ? (O(e, a, s, o, s, 0.6, h, y), O(e, o, n, a, n, 0.6, h, y))
        : (O(e, i, o, i, a, 0.6, h, y), O(e, t, a, t, o, 0.6, h, y));
    }
    (e.setMaterial(0.7, 0, 0, 0),
      F(e, t, n, i, s, h, 0.9, c ? `x` : `z`, o, !1, 0.7, a),
      r.push({
        cx: (t + i) / 2,
        cz: (n + s) / 2,
        hx: (i - t) / 2,
        hz: (s - n) / 2,
        h,
      }));
  }
  (Kt(e, t, Y.kyodan.x, m.z1 - 0.3, 6, 2.2, 5.6, `x`, r),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 16777215),
    k(
      e,
      m.x0 + 0.6,
      m.z0 + 0.6,
      m.x1 - 0.6,
      m.z1 - 0.6,
      0.03,
      t.uv(`sei:pave`),
    ),
    k(
      e,
      Y.kyodan.x - 1.6,
      m.z1,
      Y.kyodan.x + 1.6,
      Y.gateZ + 1.6,
      0.03,
      t.uv(`sei:pave`),
    ));
  let b = Y.hall,
    x = 7.6;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 10131086),
    A(e, b.x0 - 1.2, 0, b.z0 - 1.2, b.x1 + 1.2, 1, b.z1 + 1.2, i));
  let S = (b.x0 + b.x1) / 2;
  for (let t = 0; t < 4; t++)
    A(
      e,
      S - 2.5,
      0,
      b.z1 + 1.2,
      S + 2.5,
      1 - t * 0.25,
      b.z1 + 1.2 + (4 - t) * 0.35,
      i,
    );
  (e.setMaterial(0.3, 0.15, 0, 0), D(e, 16777215));
  let C = t.uv(`sei:door`);
  for (let t = 0; t < 5; t++) {
    let r = b.x0 + ((b.x1 - b.x0) * t) / 5,
      i = b.x0 + ((b.x1 - b.x0) * (t + 1)) / 5;
    O(e, r, b.z1, i, b.z1, 1, 6.8, t === 2 || n > 0 ? C : a);
  }
  (O(e, b.x1, b.z0, b.x0, b.z0, 1, 6.8, a),
    O(e, b.x1, b.z1, b.x1, b.z0, 1, 6.8, a),
    O(e, b.x0, b.z0, b.x0, b.z1, 1, 6.8, a),
    A(e, b.x0 - 0.3, 6.8, b.z0 - 0.3, b.x1 + 0.3, x, b.z1 + 0.3, a));
  for (let t = 0; t <= 5; t++) {
    let n = b.x0 + ((b.x1 - b.x0) * t) / 5;
    A(e, n - 0.28, 1, b.z1 - 0.1, n + 0.28, 6.8, b.z1 + 0.5, a);
  }
  (e.setMaterial(0.65, 0.05, 0, 0),
    D(e, 16777215),
    F(e, b.x0, b.z0, b.x1, b.z1, x, 4.2, `x`, o, !0, 1.6),
    e.setMaterial(0.5, 0.3, 0, 0),
    D(e, 1973792));
  {
    let t = (b.z0 + b.z1) / 2,
      n = Math.min((b.z1 - b.z0 + 3.2) / 2, (b.x1 - b.x0 + 3.2) / 2 - 0.1),
      r = b.x0 - 1.6 + n,
      a = b.x1 + 1.6 - n;
    A(e, r, 11.75, t - 0.3, a, 12.3, t + 0.3, i);
    for (let n of [r, a])
      A(e, n - 0.45, 11.8, t - 0.35, n + 0.45, 13.2, t + 0.35, i);
  }
  (e.setMaterial(0.4, 0.3, 0, 0), D(e, 16777215));
  let ee = t.uv(`sei:gaku-taisei`);
  return (
    j(e, S, b.z1 + 0.55, 5.5, 7, 0.42, 0.05, 0, 1, i, ee, ee),
    r.push({
      cx: S,
      cz: (b.z0 + b.z1) / 2,
      hx: (b.x1 - b.x0) / 2 + 1.2,
      hz: (b.z1 - b.z0) / 2 + 1.2,
      h: 1,
    }),
    r.push({
      cx: S,
      cz: (b.z0 + b.z1) / 2,
      hx: (b.x1 - b.x0) / 2,
      hz: (b.z1 - b.z0) / 2,
      h: 11.6,
    }),
    r
  );
}
var Jt = [
    [-305, -688, 1.15],
    [-304, -678, 1],
    [-305, -670, 1.2],
    [-300, -686, 0.9],
    [-296, -676, 1.05],
    [-262, -662.5, 0.9],
    [-268, -663, 1],
    [-288, -662.5, 0.85],
  ],
  Yt = (e, t) => (n) => (t > 24 ? n >= e || n < t - 24 : n >= e && n < t),
  Xt = {
    guitar: [`kanda.gakki.guitar`, `#d0101a`, `#ffffff`],
    chuko: [`kanda.gakki.chuko`, `#ffd400`, `#d0101a`],
    kaitori: [`kanda.gakki.kaitori`, `#141414`, `#ffd400`],
    wind: [`kanda.gakki.wind-word`, `#16264a`, `#e8c86a`],
    drum: [`kanda.gakki.drum`, `#e86a10`, `#ffffff`],
    ski: [`kanda.sports.ski`, `#0a3a8a`, `#ffffff`],
    board: [`kanda.sports.snowboard`, `#e60012`, `#ffffff`],
    new: [`kanda.sports.newmodel`, `#ffffff`, `#0a3a8a`],
    curry: [`kanda.curry.word`, `#ffd400`, `#c01818`],
    gp: [`kanda.curry.gp`, `#c01818`, `#ffe14a`],
    kosho: [`kanda.books.kaitori`, `#2a1a0e`, `#f0dca8`],
  };
function Zt(e) {
  for (let [t, [n, r, i]] of Object.entries(Xt))
    e.need(`nobori:${t}`, 48, 192, we(n, r, i));
  (e.need(
    `aboard:curry`,
    96,
    128,
    De([
      `kanda.curry.word`,
      `kanda.curry.hokkai-menu`,
      `kanda.curry.hiru`,
      `kanda.curry.omori`,
    ]),
  ),
    e.need(
      `aboard:gado`,
      96,
      128,
      De([
        `kanda.gado.senbero`,
        `kanda.gado.hoplee`,
        `kanda.gado.yakiton`,
        `kanda.gado.sour`,
      ]),
    ),
    e.need(
      `aboard:gado2`,
      96,
      128,
      De([`kanda.gado.kanpai`, `kanda.gado.motsu`, `kanda.gado.hiruzake`]),
    ),
    e.need(
      `aboard:soba`,
      96,
      128,
      De([`kanda.old.teuchi`, `kanda.old.noren-m`], !1),
    ),
    e.need(
      `aboard:gakki`,
      96,
      128,
      De(
        [
          `kanda.gakki.sale`,
          `kanda.gakki.price`,
          `kanda.gakki.shiso`,
          `kanda.gakki.menzei`,
        ],
        !1,
      ),
    ));
  for (let t of [0, 1, 2]) e.need(`wagon:${t}`, 128, 64, Ie(t));
  (e.need(`price:3`, 96, 40, Le(`kanda.books.kinitsu`)),
    e.need(`price:1`, 96, 40, Le(`kanda.books.kinitsu-100`)),
    e.need(`crate:y`, 64, 40, Re(`#f0c000`, `#c01818`)),
    e.need(`crate:r`, 64, 40, Re(`#c81818`, `#ffffff`)),
    e.need(`leaves:0`, 128, 128, ze(0)),
    e.need(`leaves:1`, 128, 128, ze(1, `#4a7040`)),
    e.need(
      `plate:meidai`,
      128,
      48,
      Be(`kanda.street.meidai`, `#1e4a9a`, `#ffffff`, `kanda.street.gakkigai`),
    ),
    e.need(`wood`, 32, 32, (e, t, n, r, i) => {
      ((e.fillStyle = `#7a5530`), e.fillRect(t, n, r, i));
    }));
  for (let t of [0, 1, 2, 3]) e.need(`ema:${t}`, 256, 160, Ve(t));
}
function Qt(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    D(e, 15263976),
    P(e, 0, 0, 0, 0, 2.75, 0, 0.022, r),
    P(e, 0, 2.62, 0, 0.62, 2.62, 0, 0.012, r),
    e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215));
  let i = t.uv(`nobori:${n}`);
  (O(e, 0.02, 0, 0.62, 0, 0.75, 2.6, i),
    O(e, 0.62, 0, 0.02, 0, 0.75, 2.6, {
      u0: i.u1,
      v0: i.v0,
      u1: i.u0,
      v1: i.v1,
    }),
    D(e, 2763306),
    M(e, 0, 0, 0, 0.12, 0.2, r, 6));
}
function $t(e, t, n) {
  let r = t.white(),
    i = t.uv(`aboard:${n}`);
  (e.setMaterial(0.7, 0, 0.08, 1),
    D(e, 16777215),
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
    D(e, 5913114),
    j(e, 0, 0, 0.93, 1, 0.31, 0.05, 0, 1, r));
}
function en(e, t, n) {
  let r = t.white(),
    i = t.uv(`wood`);
  (e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215),
    j(e, 0, 0, 0.12, 0.68, 0.75, 0.35, 0, 1, i));
  let a = t.uv(`wagon:${n}`);
  (D(e, 16777215),
    e.quad(
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
    D(e, 2763306));
  for (let t of [-0.6, 0.6]) M(e, t, 0.28, 0, 0.12, 0.07, r, 6);
  D(e, 16777215);
  let o = t.uv(n === 2 ? `price:1` : `price:3`);
  (P(e, 0.6, 0.86, -0.25, 0.6, 1.25, -0.25, 0.01, r),
    O(e, 0.38, -0.24, 0.82, -0.24, 1.08, 1.27, o));
}
function tn(e, t) {
  let n = t.white();
  (e.setMaterial(0.35, 0.8, 0, 0),
    D(e, 13159632),
    M(e, 0, 0, 0, 0.95, 0.26, n, 10),
    e.setMaterial(0.7, 0, 0, 0),
    D(e, 5913114),
    M(e, 0, 0, 0.95, 1, 0.42, n, 10),
    N(e, 0, 0, [0.42, 1, 0.01, 1], 10, n),
    D(e, 16777215));
  let r = t.uv(`crate:y`),
    i = t.uv(`crate:r`);
  (j(e, -0.75, 0.15, 0, 0.42, 0.23, 0.18, 0, 1, r, r, r),
    j(e, 0.75, -0.1, 0, 0.42, 0.23, 0.18, 0, 1, i, i, i),
    j(e, 0.75, -0.1, 0.42, 0.84, 0.23, 0.18, 0, 1, r, r, r));
}
function nn(e, t, n) {
  let r = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 5916212),
    M(e, 0, 0, 0, 3.4, 0.22, r, 6, !1, 0.14),
    e.setMaterial(0.85, 0, 0, 0),
    D(e, 16777215));
  let i = t.uv(`leaves:${n}`);
  (N(
    e,
    0,
    0,
    [0.4, 2.6, 2.3, 3.4, 2.7, 4.8, 2.2, 6.2, 1.2, 7.1, 0.05, 7.4],
    8,
    i,
  ),
    N(e, 0.9, 0.6, [0.3, 4.6, 1.5, 5.4, 1.7, 6.4, 1, 7.4, 0.05, 7.8], 6, i));
}
function rn(e, t) {
  let n = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    D(e, 9080466),
    P(e, 0, 0, 0, 0, 2.9, 0, 0.04, n),
    e.setMaterial(0.6, 0, 0, 0),
    D(e, 16777215));
  let r = t.uv(`plate:meidai`);
  (O(e, -0.5, 0.05, 0.5, 0.05, 2.35, 2.72, r),
    O(e, 0.5, -0.05, -0.5, -0.05, 2.35, 2.72, {
      u0: r.u1,
      v0: r.v0,
      u1: r.u0,
      v1: r.v1,
    }));
}
function an(e, t) {
  (e.setMaterial(0.8, 0, 0.08, 3),
    D(e, 16777215),
    E.forEach((n, r) => {
      let i = n.x - n.w / 2 + 0.12,
        a = n.x + n.w / 2 - 0.12;
      (O(
        e,
        i,
        n.z + 0.12,
        a,
        n.z + 0.12,
        0.72,
        2.28,
        t.uv(`ema:${(r * 2) % 4}`),
      ),
        O(
          e,
          a,
          n.z - 0.12,
          i,
          n.z - 0.12,
          0.72,
          2.28,
          t.uv(`ema:${(r * 2 + 1) % 4}`),
        ));
    }));
}
function on(e) {
  let t = [],
    n = new r(2048, 3072),
    i = (e, r) => {
      (n.reset(), r(), t.push({ name: e, geo: m(n, `kanda-${e}`) }));
    };
  for (let t of Object.keys(Xt)) i(`nobori:${t}`, () => Qt(n, e, t));
  for (let t of [`curry`, `gado`, `gado2`, `soba`, `gakki`])
    i(`aboard:${t}`, () => $t(n, e, t));
  for (let t of [0, 1, 2]) i(`wagon:${t}`, () => en(n, e, t));
  i(`barrel`, () => tn(n, e));
  for (let t of [0, 1]) i(`tree:${t}`, () => nn(n, e, t));
  return (i(`plate`, () => rn(n, e)), i(`ema`, () => an(n, e)), t);
}
function sn(e) {
  let t = [],
    n = [],
    r = { fx: 0, fz: -1 },
    i = { fx: 0, fz: 1 },
    a = { fx: -1, fz: 0 },
    o = Yt(11, 20),
    s = Yt(11, 20),
    c = Yt(10, 18.5),
    l = Yt(11, 21),
    u = Yt(16, 24);
  for (let [e, n] of [
    [-476, `chuko`],
    [-469, `chuko`],
    [-461, `guitar`],
    [-447, `guitar`],
    [-445, `kaitori`],
    [-438.5, `chuko`],
    [-431, `guitar`],
    [-427, `kaitori`],
    [-420.5, `guitar`],
    [-413, `drum`],
    [-405, `wind`],
    [-398, `chuko`],
    [-394, `guitar`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -574.5,
      ...r,
      range: 160,
      when: (e) => o(e),
    });
  (t.push({
    model: `aboard:gakki`,
    x: -437,
    y: 0,
    z: -574.6,
    ...r,
    range: 120,
    when: (e) => o(e),
  }),
    t.push({
      model: `aboard:gakki`,
      x: -429,
      y: 0,
      z: -574.6,
      ...r,
      range: 120,
      when: (e) => o(e),
    }));
  for (let [e, n] of [
    [-457, `ski`],
    [-451, `new`],
    [-445, `board`],
    [-439, `ski`],
    [-433, `board`],
    [-418, `ski`],
    [-410, `new`],
    [-463, `curry`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -525,
      ...i,
      range: 170,
      when: (e) => s(e),
    });
  for (let [e, n] of [
    [-476, `kosho`],
    [-462.5, `kosho`],
    [-456, `curry`],
    [-454, `gp`],
    [-441, `ski`],
    [-435, `board`],
    [-404, `board`],
    [-398, `new`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -494.9,
      ...r,
      range: 170,
      when: (e) =>
        n === `curry` || n === `gp` ? l(e) : n === `kosho` ? c(e) : s(e),
    });
  for (let [e, i] of [
    [-477.8, 0],
    [-475, 2],
    [-469.5, 1],
    [-462.7, 0],
  ])
    (t.push({
      model: `wagon:${i}`,
      x: e,
      y: 0,
      z: -495.6,
      ...r,
      range: 110,
      when: (e) => c(e),
    }),
      n.push({ x: e, z: -495.6, r: 0.6, h: 0.9 }));
  t.push({
    model: `aboard:curry`,
    x: -457.3,
    y: 0,
    z: -495,
    ...r,
    range: 110,
    when: (e) => l(e),
  });
  for (let e of [-345.2, -337, -319, -287, -270.2])
    (t.push({
      model: `barrel`,
      x: -11,
      y: 0,
      z: e,
      ...a,
      range: 120,
      when: (e) => u(e),
    }),
      n.push({ x: -11, z: e, r: 0.45, h: 1 }));
  (t.push({
    model: `aboard:gado`,
    x: -10.3,
    y: 0,
    z: -351.5,
    ...a,
    range: 100,
    when: (e) => u(e) || (e >= 11.5 && e < 14),
  }),
    t.push({
      model: `aboard:gado2`,
      x: -10.3,
      y: 0,
      z: -326,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:gado`,
      x: -10.3,
      y: 0,
      z: -293.5,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:gado2`,
      x: -10.3,
      y: 0,
      z: -279,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:soba`,
      x: -184.5,
      y: 0,
      z: -529,
      ...a,
      range: 90,
      when: (e) => e >= 11 && e < 20.5,
    }),
    [
      [-364.5, -568.5, 1.1],
      [-364.5, -531.5, 1],
      [-350, -568, 0.95],
      [-336, -568.5, 1.05],
      [-325, -569, 1],
      [-325, -531, 1.1],
      [-350, -532, 1],
      [-337, -532.5, 0.9],
    ].forEach(([e, r, a], o) => {
      (t.push({
        model: `tree:${o % 2}`,
        x: e,
        y: 0,
        z: r,
        ...i,
        s: a,
        range: 360,
      }),
        n.push({ x: e, z: r, r: 0.35, h: 3 }));
    }),
    Jt.forEach(([e, r, a], o) => {
      (t.push({
        model: `tree:${(o + 1) % 2}`,
        x: e,
        y: 0,
        z: r,
        ...i,
        s: a,
        range: 360,
      }),
        n.push({ x: e, z: r, r: 0.35, h: 3 }));
    }),
    t.push({
      model: `plate`,
      x: -391.2,
      y: 0,
      z: -574.8,
      fx: -0.7071,
      fz: -0.7071,
      range: 120,
    }),
    n.push({ x: -391.2, z: -574.8, r: 0.1, h: 2.9 }),
    t.push({
      model: `ema`,
      x: -284,
      y: 0,
      z: -737.3,
      fx: 0,
      fz: 1,
      range: 90,
      world: !0,
    }));
  let d = 0,
    f = new Map(
      e.map((e) => [e.name, e.geo.index ? e.geo.index.count / 3 : 0]),
    );
  for (let e of t) d += f.get(e.model) ?? 0;
  return { instances: t, circles: n, models: e, tris: d };
}
var cn = { level: -8.5, top: -599.7, bottom: -586.3 },
  X = cn.level,
  Z = { sx: -322, sz: cn.bottom, nx: -341, nz: cn.top, rail: X + 2.7 },
  ln = Z.nx - Z.sx,
  un = Z.nz - Z.sz,
  dn = Math.hypot(ln, un),
  Q = { x: ln / dn, z: un / dn };
function fn(e, t = 0) {
  return [Z.sx + Q.x * e - Q.z * t, Z.sz + Q.z * e + Q.x * t];
}
var pn = { half: 4.6, y0: Z.rail - 0.45, y1: Z.rail + 4.2 },
  mn = `#d8202c`;
function hn(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, mn);
    let o = (e) => n + ((e + 9) / 18) * i,
      s = (e) => r + a - ((e - 0.95) / 2.5) * a;
    ((t.strokeStyle = `#ffffff`), (t.lineWidth = a * 0.022), t.beginPath());
    for (let e = 0; e <= 180; e++) {
      let n = -9 + (18 * e) / 180,
        r = 3.2 + 0.07 * Math.sin((n / 1.15) * Math.PI);
      e ? t.lineTo(o(n), s(r)) : t.moveTo(o(n), s(r));
    }
    (t.stroke(), (t.lineWidth = a * 0.012));
    for (let e of [3.33, 3.07])
      (t.beginPath(), t.moveTo(n, s(e)), t.lineTo(n + i, s(e)), t.stroke());
    B(t, n, s(1.1), i, s(0.95) - s(1.1), `#9a1420`);
    for (let e of xn) {
      ((t.strokeStyle = `#7a0e18`),
        (t.lineWidth = Math.max(1, i * 0.002)),
        t.strokeRect(o(e - 0.65), s(3), o(e + 0.65) - o(e - 0.65), s(1) - s(3)),
        t.beginPath(),
        t.moveTo(o(e), s(3)),
        t.lineTo(o(e), s(1)),
        t.stroke());
      for (let n of [-1, 1])
        gn(
          t,
          o(e + n * 0.33 - 0.22),
          s(2.75),
          o(e + n * 0.33 + 0.22) - o(e + n * 0.33 - 0.22),
          s(1.75) - s(2.75),
          a * 0.03,
        );
    }
    for (let [n, r] of wn(e))
      gn(t, o(n), s(2.78), o(r) - o(n), s(1.72) - s(2.78), a * 0.06);
  };
}
function gn(e, t, n, r, i, a) {
  ((e.fillStyle = `#4a5560`),
    e.beginPath(),
    e.roundRect(t, n, r, i, a),
    e.fill(),
    (e.fillStyle = `rgba(230,236,240,0.35)`),
    e.fillRect(t + r * 0.04, n + i * 0.06, r * 0.92, i * 0.07),
    (e.fillStyle = `rgba(40,52,70,0.6)`),
    e.fillRect(t, n + i * 0.72, r, i * 0.28));
}
function _n(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, mn);
    let o = (e) => n + ((e + 1.39) / 2.78) * i,
      s = (e) => r + a - ((e - 0.95) / 2.5) * a;
    ((t.fillStyle = `#20262c`),
      t.beginPath(),
      t.roundRect(
        o(-1.12),
        s(3.12),
        o(1.12) - o(-1.12),
        s(1.85) - s(3.12),
        i * 0.08,
      ),
      t.fill(),
      B(t, o(-0.62), s(3), o(0.62) - o(-0.62), s(2.82) - s(3), `#0c0c0c`),
      (t.fillStyle = `#ffb030`));
    for (let e = 0; e < 9; e++)
      (e * 7) % 3 &&
        t.fillRect(o(-0.52 + e * 0.11), s(2.96), i * 0.018, a * 0.035);
    for (let n of [-1, 1])
      (B(
        t,
        o(n * 1.22 - 0.2),
        s(1.62),
        o(n * 1.22 + 0.2) - o(n * 1.22 - 0.2),
        s(1.28) - s(1.62),
        `#141414`,
      ),
        (t.fillStyle = e ? `#ff3020` : `#fff6dc`),
        t.fillRect(o(n * 1.22 - 0.16), s(1.58), i * 0.1, a * 0.03),
        t.fillRect(o(n > 0 ? 1.32 : -1.38), s(1.58), i * 0.022, a * 0.1));
    (B(t, n, s(1.1), i, s(0.95) - s(1.1), `#3a3a3c`),
      B(t, o(-0.25), s(1.25), o(0.25) - o(-0.25), s(1) - s(1.25), `#202022`));
  };
}
function vn(e, t, r, a, o) {
  let s = new n(i(`gorge-stone`));
  B(e, t, r, a, o, `#5c5850`);
  let c = o / 2.2;
  for (let n = -2; n < a / c + 2; n++)
    for (let i = -2; i < o / c + 2; i++) {
      let a = t + (n + (i % 2) * 0.5) * c,
        o = r + i * c * 0.5,
        l = s.next();
      ((e.fillStyle = `rgb(${(118 + l * 40) | 0},${(114 + l * 34) | 0},${(104 + l * 30) | 0})`),
        e.beginPath(),
        e.moveTo(a, o - c * 0.46),
        e.lineTo(a + c * 0.46, o),
        e.lineTo(a, o + c * 0.46),
        e.lineTo(a - c * 0.46, o),
        e.closePath(),
        e.fill(),
        s.chance(0.25) &&
          ((e.fillStyle = `rgba(70,96,58,0.35)`),
          e.fillRect(a - c * 0.2, o - c * 0.1, c * 0.3, c * 0.2)));
    }
  let l = e.createLinearGradient(0, r + o * 0.6, 0, r + o);
  (l.addColorStop(0, `rgba(30,36,28,0)`),
    l.addColorStop(1, `rgba(30,36,28,0.45)`),
    (e.fillStyle = l),
    e.fillRect(t, r, a, o));
}
function yn(e, t, r, a, o) {
  let s = new n(i(`gorge-conc`));
  B(e, t, r, a, o, `#b4b0a6`);
  for (let n = 0; n < 8; n++)
    ((e.fillStyle = `rgba(${s.chance(0.5) ? `90,88,80` : `220,216,206`},0.12)`),
      e.fillRect(t, r + (n * o) / 8, a, o / 8));
  e.fillStyle = `rgba(80,78,72,0.25)`;
  for (let n = 1; n < 4; n++) e.fillRect(t + (n * a) / 4, r, 1, o);
}
function bn(e) {
  (e.need(`gorge:side`, 576, 112, hn(!1)),
    e.need(`gorge:side-cab`, 576, 112, hn(!0)),
    e.need(`gorge:front`, 128, 112, _n(!1)),
    e.need(`gorge:tail`, 128, 112, _n(!0)),
    e.need(`gorge:stone`, 256, 64, vn),
    e.need(`gorge:conc`, 64, 64, yn),
    e.need(`leaves:0`, 128, 128, ze(0)),
    e.need(`leaves:1`, 128, 128, ze(1, `#4a7040`)));
}
var xn = [-5.75, 0, 5.75],
  Sn = 18,
  Cn = 110.5;
function wn(e) {
  let t = [
    [-4.85, -2.95],
    [-2.8, -0.9],
    [0.9, 2.8],
    [2.95, 4.85],
    [-8.55, -6.75],
  ];
  return (t.push(e ? [7.35, 7.95] : [6.75, 8.55]), t);
}
function Tn(e, t, n) {
  let r = t.white(),
    i = 1.39,
    a = Sn / 2,
    o = 0.95,
    s = 3.45,
    c = t.uv(n === `mid` ? `gorge:side` : `gorge:side-cab`);
  (e.setMaterial(0.42, 0.15, 0, 0),
    D(e, 16777215),
    O(e, i, a, i, -9, o, s, { u0: c.u1, v0: c.v0, u1: c.u0, v1: c.v1 }),
    O(e, -1.39, -9, -1.39, a, o, s, c),
    e.setMaterial(0.2, 0, 0.55, 1));
  let l = (e) => (e + 9) / 18,
    u = (e) => (e - 0.95) / 2.5,
    d = [
      ...wn(n !== `mid`),
      ...xn.flatMap((e) => [
        [e - 0.55, e - 0.11],
        [e + 0.11, e + 0.55],
      ]),
    ];
  for (let [t, n] of d) {
    let r = 1.74,
      i = 2.76;
    (de(e, 1.4, n, 1.4, t, r, i, c, l(n), l(t), u(r), u(i)),
      de(e, -1.4, t, -1.4, n, r, i, c, l(t), l(n), u(r), u(i)));
  }
  (e.setMaterial(0.6, 0.2, 0, 0),
    D(e, 11843772),
    e.quad(
      i,
      s,
      a,
      i,
      s,
      -9,
      0.97,
      3.6300000000000003,
      -9,
      0.97,
      3.6300000000000003,
      a,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    e.quad(
      -1.39,
      s,
      -9,
      -1.39,
      s,
      a,
      -0.97,
      3.6300000000000003,
      a,
      -0.97,
      3.6300000000000003,
      -9,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    e.quad(
      0.97,
      3.6300000000000003,
      a,
      0.97,
      3.6300000000000003,
      -9,
      -0.97,
      3.6300000000000003,
      -9,
      -0.97,
      3.6300000000000003,
      a,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    D(e, 9212052));
  for (let t of [-4.5, 4.5])
    j(e, 0, t, 3.6300000000000003, 3.93, 0.8, 1.3, 0, 1, r);
  (e.setMaterial(0.8, 0.2, 0, 0),
    D(e, 2763822),
    j(e, 0, 0, 0.42, o, 1.15, 5.2, 0, 1, r, void 0, void 0, !1));
  for (let t of [-6.4, 6.4])
    j(e, 0, t, 0.12, 0.85, 1.25, 1.25, 0, 1, r, void 0, void 0, !1);
  (e.setMaterial(0.45, 0.15, 0, 0), D(e, 16777215));
  let f = (n, a, c) => {
    if (c) {
      let r = t.uv(c === `head` ? `gorge:front` : `gorge:tail`),
        l = 0.25;
      (a > 0
        ? O(e, -1.39, n + l, i, n + l, o, s, r)
        : O(e, i, n - l, -1.39, n - l, o, s, r),
        D(e, 14164012),
        e.quad(i, o, n, i, s, n, 1.27, s, n + a * l, 1.27, o, n + a * l),
        e.quad(
          -1.39,
          o,
          n,
          -1.27,
          o,
          n + a * l,
          -1.27,
          s,
          n + a * l,
          -1.39,
          s,
          n,
        ),
        D(e, 11843772),
        e.quad(-1.39, s, n, -1.27, s, n + a * l, 1.27, s, n + a * l, i, s, n),
        e.setMaterial(0.3, 0, 0.9, 0),
        D(e, c === `head` ? 16773840 : 16722458));
      for (let t of [-1, 1]) {
        let r = t * 1.22 - 0.16,
          i = t * 1.22 + 0.16;
        a > 0
          ? e.quad(
              r,
              1.36,
              n + l + 0.01,
              i,
              1.36,
              n + l + 0.01,
              i,
              1.5,
              n + l + 0.01,
              r,
              1.5,
              n + l + 0.01,
            )
          : e.quad(
              i,
              1.36,
              n - l - 0.01,
              r,
              1.36,
              n - l - 0.01,
              r,
              1.5,
              n - l - 0.01,
              i,
              1.5,
              n - l - 0.01,
            );
      }
      e.setMaterial(0.45, 0.15, 0, 0);
      return;
    }
    (D(e, 14164012),
      a > 0
        ? e.quad(
            -1.39,
            o,
            n,
            i,
            o,
            n,
            i,
            s,
            n,
            -1.39,
            s,
            n,
            r.u0,
            r.v0,
            r.u1,
            r.v1,
          )
        : e.quad(
            i,
            o,
            n,
            -1.39,
            o,
            n,
            -1.39,
            s,
            n,
            i,
            s,
            n,
            r.u0,
            r.v0,
            r.u1,
            r.v1,
          ),
      D(e, 2764338),
      a > 0
        ? e.quad(
            -0.4,
            1,
            n + 0.01,
            0.4,
            1,
            n + 0.01,
            0.4,
            2.9,
            n + 0.01,
            -0.4,
            2.9,
            n + 0.01,
          )
        : e.quad(
            0.4,
            1,
            n - 0.01,
            -0.4,
            1,
            n - 0.01,
            -0.4,
            2.9,
            n - 0.01,
            0.4,
            2.9,
            n - 0.01,
          ));
  };
  (f(a, 1, n === `mid` ? null : n), f(-9, -1, null));
  for (let t of [-40, 40]) {
    let n = e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0);
    (e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0),
      e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0),
      e.tri(n, n + 1, n + 2));
  }
}
function En(e, t, n, r, i, a, o, s, c = 7, l = 4, u = 0) {
  let d = e.n;
  for (let d = 0; d <= l; d++) {
    let f = d / l,
      p = -Math.PI / 2 + Math.PI * f,
      m = Math.cos(p),
      h = Math.sin(p);
    for (let p = 0; p <= c; p++) {
      let g = (p / c) * Math.PI * 2,
        _ = Math.cos(g),
        v = Math.sin(g),
        y = _ * m,
        b = h,
        x = v * m,
        S =
          Math.sin(((p % c) * 12.9898 + d * 78.233 + u * 37.719) * 1) *
          43758.5453,
        C = d === 0 || d === l ? 1 : 0.78 + 0.4 * (S - Math.floor(S));
      e.vertex(
        t + y * i * C,
        n + b * a * C,
        r + x * o * C,
        y,
        b,
        x,
        s.u0 + (s.u1 - s.u0) * (p / c),
        s.v0 + (s.v1 - s.v0) * f,
      );
    }
  }
  for (let t = 0; t < l; t++)
    for (let n = 0; n < c; n++) {
      let r = d + t * (c + 1) + n,
        i = r + c + 1;
      e.tri(r, i, r + 1).tri(r + 1, i, i + 1);
    }
}
function Dn(e, t, n, r, i, a, o, s, c = !0) {
  let [l, u] = fn((t + n) / 2, (r + i) / 2);
  j(e, l, u, a, o, (i - r) / 2, (n - t) / 2, Q.x, Q.z, s, void 0, void 0, c);
}
var On = (e, t) => (t - (Z.sz + Q.x * e)) / Q.z;
function kn(e, t) {
  let n = t.white(),
    r = Z.rail;
  e.setMaterial(0.55, 0.35, 0, 0);
  for (let t of [-2.15, 2.15]) {
    let i = On(t, Z.sz) - 0.6,
      a = On(t, Z.nz) + 0.6;
    (D(e, 7240824),
      Dn(e, i, a, t - 0.45, t + 0.45, r - 0.8, r + 1.2, n),
      D(e, 6187622));
    let o = t > 0 ? t + 0.45 : t - 0.45 - 0.06;
    for (let t = i + 0.8; t < a - 0.4; t += 1.6)
      Dn(e, t - 0.05, t + 0.05, o, o + 0.06, r - 0.8, r + 1.2, n, !1);
    Dn(e, i, a, t - 0.55, t + 0.55, r + 1.12, r + 1.24, n);
  }
  let i = Math.min(On(-2, Z.sz), On(2, Z.sz)),
    a = Math.max(On(-2, Z.nz), On(2, Z.nz));
  D(e, 5002836);
  for (let t = i + 0.6; t < a - 0.3; t += 1.8)
    Dn(e, t - 0.18, t + 0.18, -1.7, 1.7, r - 0.8, r - 0.35, n);
  D(e, 3812900);
  for (let t = i + 0.3; t < a - 0.2; t += 0.6)
    Dn(e, t - 0.11, t + 0.11, -1.25, 1.25, r - 0.35, r - 0.17, n);
  (e.setMaterial(0.35, 0.8, 0, 0), D(e, 9077880));
  for (let t of [-0.72, 0.72]) Dn(e, i, a, t - 0.04, t + 0.04, r - 0.17, r, n);
  (e.setMaterial(0.7, 0.1, 0, 0),
    D(e, 14209184),
    Dn(e, i, a, 1.45, 1.62, r - 0.1, r + 0.12, n));
}
function An(e, t, n, r, i) {
  let a = t.uv(`gorge:conc`),
    o = t.white(),
    { half: s, y0: c, y1: l } = pn,
    u = r + i * 0.025;
  e.setMaterial(0.95, 0, 0, 0);
  let d = i > 0 ? n - s : n + s,
    f = i > 0 ? n + s : n - s;
  (D(e, 658445),
    O(e, d, u, f, u, c, l - 0.6, o),
    D(e, 1448218),
    O(e, d, u, f, u, l - 0.6, l, o),
    e.setMaterial(0.9, 0, 0, 0),
    D(e, 13947076));
  let p = r + i * 0.13;
  for (let t of [-1, 1])
    j(e, n + t * (s + 0.3), p, X - 0.2, l + 0.6, 0.3, 0.13, 0, i, a);
  j(e, n, p, l, l + 0.6, s + 0.6, 0.13, 0, i, a);
}
function jn(e, t, n) {
  let r = t.uv(`gorge:conc`),
    i = t.white(),
    a = n.minX + 0.35,
    o = n.maxX - 0.35,
    s = C.top,
    c = C.bottom,
    l = (s + c) / 2,
    u = (c - s) / 2,
    d = X + 1.3,
    f = -2.15,
    p = -g,
    m = (e) => f + (d - f) * ((e - l) / u) ** 2,
    h = (e) => 0.7 + 0.65 * ((e - l) / u) ** 2,
    _ = Array.from({ length: 19 }, (e, t) => s + ((c - s) * t) / 18);
  (e.setMaterial(0.9, 0, 0.1, 1), D(e, 13157560));
  for (let t = 0; t < 18; t++) {
    let n = _[t],
      i = _[t + 1],
      s = m(n),
      c = m(i);
    (e.quad(a, s, n, o, s, n, o, c, i, a, c, i, r.u0, r.v0, r.u1, r.v1),
      e.quad(
        a,
        c + h(i),
        i,
        o,
        c + h(i),
        i,
        o,
        s + h(n),
        n,
        a,
        s + h(n),
        n,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ));
  }
  (e.setMaterial(0.88, 0, 0.14, 1), D(e, 14867920));
  for (let t = 0; t < 18; t++) {
    let n = _[t],
      i = _[t + 1],
      s = m(n),
      c = m(i),
      l = s + h(n),
      u = c + h(i);
    (e.quad(a, s, n, a, c, i, a, u, i, a, l, n, r.u0, r.v0, r.u1, r.v1),
      e.quad(o, c, i, o, s, n, o, l, n, o, u, i, r.u0, r.v0, r.u1, r.v1));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 12104872),
    j(
      e,
      (a + o) / 2,
      s + 0.45,
      X - 0.3,
      d + 0.9,
      (o - a) / 2 + 0.2,
      0.45,
      0,
      1,
      r,
    ),
    j(
      e,
      (a + o) / 2,
      c - 0.45,
      X - 0.3,
      d + 0.9,
      (o - a) / 2 + 0.2,
      0.45,
      0,
      1,
      r,
    ),
    D(e, 13683904));
  for (let t of [a + 0.3, (a + o) / 2, o - 0.3])
    for (let n = s + 1.1; n < c - 0.8; n += 1.45) {
      let i = m(n) + h(n);
      p - i < 0.6 ||
        j(e, t, n, i - 0.05, p, 0.24, 0.24, 0, 1, r, void 0, void 0, !1);
    }
  for (let [t, a] of [
    [n.minX, -1],
    [n.maxX, 1],
  ]) {
    (D(e, 14078662),
      j(
        e,
        t - a * 0.1,
        (s + c) / 2,
        -0.12,
        0.2,
        0.28,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ),
      D(e, 13025974),
      j(
        e,
        t - a * 0.18,
        (s + c) / 2,
        0.15,
        1.12,
        0.12,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ),
      D(e, 10262670));
    for (let n = s - 0.9; n < c + 0.6; n += 1.5)
      j(
        e,
        t - a * 0.18 + a * 0.125,
        n + 0.6,
        0.38,
        0.88,
        0.005,
        0.5,
        0,
        1,
        i,
        void 0,
        void 0,
        !1,
      );
    (D(e, 14210248),
      j(
        e,
        t - a * 0.18,
        (s + c) / 2,
        1.12,
        1.2,
        0.16,
        (c - s) / 2 + 1.4,
        0,
        1,
        r,
      ));
    for (let n of [s - 1.6, c + 1.6])
      (D(e, 13157560),
        j(e, t - a * 0.3, n, 0.15, 1.65, 0.32, 0.32, 0, 1, r),
        j(e, t - a * 0.3, n, 1.65, 1.8, 0.38, 0.38, 0, 1, r));
  }
}
function Mn(e, t, n, r, i, a) {
  let o = t.uv(`gorge:conc`);
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 12631216),
    j(e, n - r * 0.15, (i + a) / 2, -0.15, 1.05, 0.15, (a - i) / 2, 0, 1, o),
    D(e, 14078662),
    j(e, n - r * 0.15, (i + a) / 2, 1.05, 1.15, 0.2, (a - i) / 2, 0, 1, o));
}
function Nn(e, t, n, r, i) {
  let a = t.white(),
    o = t.uv(`gorge:stone`);
  if (i - r < 0.5) return;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 11052186),
    j(e, (r + i) / 2, n, S - 0.05, S + 0.35, 0.16, (i - r) / 2, 1, 0, o),
    e.setMaterial(0.5, 0.6, 0, 0),
    D(e, 3424828));
  let s = Math.max(1, Math.round((i - r) / 2));
  for (let t = 0; t <= s; t++) {
    let o = r + ((i - r) * t) / s;
    P(e, o, S + 0.35, n, o, S + 1.1, n, 0.035, a);
  }
  for (let t of [S + 0.55, S + 0.82, S + 1.08])
    P(e, r, t, n, i, t, n, t > 1.15 ? 0.03 : 0.018, a);
}
function Pn(e, t) {
  let n = t.uv(`gorge:conc`),
    r = t.white(),
    i = C.top,
    a = C.top + _.width,
    o = (i + a) / 2,
    s = _.width / 2;
  (e.setMaterial(0.9, 0, 0, 0),
    D(e, 11841700),
    j(
      e,
      (_.x0 + _.xLand) / 2,
      o,
      y - 0.45,
      y,
      (_.xLand - _.x0) / 2,
      s,
      0,
      1,
      n,
    ),
    D(e, 9209980));
  for (let t of [_.x0 + 0.6, _.xLand - 0.6])
    j(e, t, i + 0.5, X - 0.6, y - 0.45, 0.2, 0.5, 0, 1, n);
  let c = Math.ceil((_.top - y) / _.rise),
    l = (_.top - y) / c,
    u = (_.x1 - _.xLand) / c;
  D(e, 12104872);
  for (let t = 1; t <= c; t++) {
    let r = y + t * l;
    j(e, _.xLand + (t - 0.5) * u, o, r - 0.55, r, u / 2, s, 0, 1, n);
  }
  (j(e, _.x1 + 0.8, o, -0.4, _.top, 0.8, s, 0, 1, n),
    e.setMaterial(0.4, 0.7, 0, 0),
    D(e, 10133668));
  let d = a - 0.06,
    f = (e) =>
      e <= _.xLand
        ? y
        : e >= _.x1
          ? _.top
          : y + ((e - _.xLand) / (_.x1 - _.xLand)) * (_.top - y);
  for (let t = _.xLand; t <= _.x1 + 1.6 + 0.01; t += 1.4)
    P(e, t, f(t), d, t, f(t) + 0.95, d, 0.025, r);
  (P(e, _.xLand, y + 0.95, d, _.x1, _.top + 0.95, d, 0.03, r),
    P(e, _.x1, _.top + 0.95, d, _.x1 + 1.6, _.top + 0.95, d, 0.03, r),
    P(e, _.x1 + 1.6, _.top, i, _.x1 + 1.6, _.top + 0.95, i, 0.025, r),
    P(e, _.x1 + 1.6, _.top + 0.95, i, _.x1 + 1.6, _.top + 0.95, d, 0.03, r),
    P(e, _.x0, y, i, _.x0, y + 0.95, i, 0.025, r),
    P(e, _.x0, y + 0.95, i, _.x0, y + 0.95, a, 0.03, r),
    D(e, 3424828));
  let p = C.top - 0.3,
    m = _.x1 + 1.65,
    h = m + 1.5;
  for (let t of [S + 0.12, S + 1.05]) P(e, m, t, p, h, t, p, 0.025, r);
  for (let t of [m, h]) P(e, t, S + 0.12, p, t, S + 1.05, p, 0.025, r);
  for (let t = m + 0.15; t < h; t += 0.15)
    P(e, t, S + 0.12, p, t, S + 1.05, p, 0.01, r);
  let g = h + 1.2,
    v = S + 0.72,
    b = C.top - 0.22,
    x = 0.3;
  e.setMaterial(0.7, 0, 0, 0);
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2,
      i = ((t + 1) / 12) * Math.PI * 2;
    (D(e, t % 3 == 0 ? 15921904 : 15754264),
      P(
        e,
        g + Math.cos(n) * x,
        v + Math.sin(n) * x,
        b,
        g + Math.cos(i) * x,
        v + Math.sin(i) * x,
        b,
        0.06,
        r,
      ));
  }
}
function Fn(e, t, r, a, o, s, c) {
  let l = t.uv(`gorge:stone`),
    u = r > 0 ? C.top : C.bottom,
    d = new n(i(`gorge-green`, r, Math.round(a)));
  if (c > 0) {
    (e.setMaterial(0.88, 0, 0, 0), D(e, 16777215));
    let t = X + 0.42,
      n = X + h,
      i = u + r * 0.012;
    for (let c = a; c < o - 0.1; c += 4) {
      let a = Math.min(o, c + 4);
      if (!s((c + a) / 2, t + 1)) continue;
      let u = (a - c) / 4;
      r > 0
        ? de(e, c, i, a, i, t, n, l, 0, u, 0, 1)
        : de(e, a, i, c, i, t, n, l, 0, u, 0, 1);
    }
  }
  e.setMaterial(0.92, 0, 0, 0);
  let f = [16777215, 14477516, 12899504, 15261888];
  for (
    let n = a + d.range(0.5, 2);
    n < o - 0.5;
    n += d.range(2, 3.4) * (c > 0 ? 1 : 1.6)
  ) {
    let i = d.range(X + h + 0.9, -0.9),
      a = d.range(0.7, 1.6),
      o = d.range(0.5, 1.15),
      l = d.range(0.3, 0.6),
      p = d.pick(f),
      m = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      g = d.next();
    s(n, i) &&
      (D(e, p),
      En(
        e,
        n,
        i,
        u + r * l * 0.35,
        a,
        o,
        l,
        t.uv(m),
        c > 0 ? 8 : 5,
        c > 0 ? 5 : 3,
        g * 100,
      ));
  }
  for (let n = a + d.range(0, 3); n < o - 1; n += d.range(3.5, 6.5)) {
    let i = d.range(1.8, 3.8),
      a = d.range(X + h + 0.4, -2.6),
      o = d.pick(f),
      c = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      l = Array.from({ length: 5 }, (e, t) =>
        t === 0 || t === 4
          ? S - 0.3 - d.range(0.6, 1.4)
          : a + d.range(-0.8, 0.8),
      );
    if (!s(n + i / 2, (a - 0.3) / 2)) continue;
    let p = t.uv(c);
    D(e, o);
    for (let t = 0; t < 4; t++) {
      let a = n + (i * t) / 4,
        o = n + (i * (t + 1)) / 4,
        s = Math.min(-0.6, l[t]),
        c = Math.min(-0.6, l[t + 1]),
        d = u + r * (0.06 + 0.06 * ((t * 7) % 3)),
        f = u + r * (0.06 + 0.06 * (((t + 1) * 7) % 3)),
        m = S - 0.3;
      r > 0
        ? e.quad(
            a,
            s,
            d,
            o,
            c,
            f,
            o,
            m,
            f,
            a,
            m,
            d,
            p.u0 + ((p.u1 - p.u0) * t) / 4,
            p.v0,
            p.u0 + ((p.u1 - p.u0) * (t + 1)) / 4,
            p.v1,
          )
        : e.quad(
            o,
            c,
            f,
            a,
            s,
            d,
            a,
            m,
            d,
            o,
            m,
            f,
            p.u0 + ((p.u1 - p.u0) * t) / 4,
            p.v0,
            p.u0 + ((p.u1 - p.u0) * (t + 1)) / 4,
            p.v1,
          );
    }
  }
  for (let n = a + d.range(1, 4); n < o - 1; n += d.range(5, 8.5)) {
    let i = d.range(1.7, 2.7),
      a = d.range(1, 1.4),
      o = d.range(1.1, 1.5),
      l = d.pick(f),
      p = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      m = d.next();
    if (
      !s(n, -0.6) ||
      !s(n - i * 1.4 - 0.5, -0.6) ||
      !s(n + i * 1.4 + 0.5, -0.6)
    )
      continue;
    let h = Math.min(-0.45, S + 0.95 - a);
    D(e, l);
    let g = c > 0 ? 4 : 2;
    for (let s = 0; s < g; s++) {
      let l = g > 1 ? s / (g - 1) - 0.5 : 0,
        d = m * 6.28 + s * 2.1,
        f = Math.min(i, a) * (0.62 + 0.18 * Math.sin(d));
      En(
        e,
        n + i * 1.3 * l,
        h + 0.35 * Math.sin(d * 1.7),
        u + r * (o * 0.9 + 0.35 * Math.cos(d)),
        f * 1.15,
        f,
        f,
        t.uv(p),
        c > 0 ? 8 : 6,
        c > 0 ? 5 : 4,
        m * 100 + s,
      );
    }
  }
}
function In(e, t, n) {
  let i = [],
    a = new r(8192, 12288),
    o = 0,
    s = (e, t, n, r) => {
      a.n &&
        (i.push({ name: e, geo: m(a, `kanda-${e}`), x: t, z: n, range: r }),
        (o += a.ni / 3),
        a.reset());
    },
    c = b(t),
    l = c.find((e) => e.maxX <= C.east),
    u = c.find((e) => e.maxX > C.east),
    d = u ? u.minX : C.east,
    f = (C.top + C.bottom) / 2;
  (l && (jn(a, e, l), s(`gorge:hijiri`, (l.minX + l.maxX) / 2, f, 520)),
    kn(a, e),
    An(a, e, Z.sx, C.bottom, -1),
    An(a, e, Z.nx, C.top, 1),
    s(`gorge:maru`, (Z.sx + Z.nx) / 2, f, 520));
  let p = t.bounds.minX - 24,
    h = c.map((e) => [e.minX, e.maxX]),
    g = (e) => {
      let t = [...h, ...(e ? [e] : [])].sort((e, t) => e[0] - t[0]),
        n = [],
        r = p;
      for (let [e, i] of t)
        (e > r && n.push([r, Math.min(e, d)]), (r = Math.max(r, i)));
      return (r < d && n.push([r, d]), n);
    };
  for (let [t, n] of g([_.x1, _.x1 + 1.6])) Nn(a, e, C.top - 0.12, t, n);
  s(`gorge:fence-n`, (p + d) / 2, C.top, 300);
  for (let [t, n] of g(null)) Nn(a, e, C.bottom + 0.12, t, n);
  (s(`gorge:fence-s`, (p + d) / 2, C.bottom, 300),
    u &&
      (Mn(a, e, u.minX, -1, u.minZ, u.maxZ),
      Mn(a, e, u.maxX, 1, u.minZ, u.maxZ),
      s(`gorge:shohei`, (u.minX + u.maxX) / 2, f, 420)),
    Pn(a, e),
    s(`gorge:stair`, (_.x0 + _.x1) / 2, C.top, 300));
  let v = (e) => (t, n) => Math.abs(t - e) > pn.half + 1.6 || n > pn.y1 + 1.4,
    y = (e) => c.some((t) => e > t.minX - 1 && e < t.maxX + 1);
  for (let r of [1, -1]) {
    let i = v(r > 0 ? Z.nx : Z.sx),
      o = (e, t) =>
        i(e, t) && !y(e) && !(r > 0 && e > _.x0 - 1.5 && e < _.x1 + 4.5);
    for (let i = t.bounds.minX - 30; i < d - 0.5; i += 64) {
      let t = Math.min(d, i + 64);
      (Fn(a, e, r, i, t, o, n),
        s(
          `gorge:wall-${r > 0 ? `n` : `s`}:${Math.round(i)}`,
          (i + t) / 2,
          r > 0 ? C.top : C.bottom,
          320,
        ));
    }
  }
  return { pieces: i, tris: o };
}
function Ln(e) {
  let t = new r(2048, 3072),
    n = [];
  for (let r of [`head`, `mid`, `tail`])
    (t.reset(),
      Tn(t, e, r),
      n.push({ name: `gorge:car-${r}`, geo: m(t, `kanda-gorge-car-${r}`) }));
  return n;
}
var Rn = 150,
  zn = 8.5,
  Bn = 18,
  Vn = 18.5,
  Hn = 12,
  Un = (2 * (Cn + Hn) + dn) / zn,
  Wn = class {
    batch;
    ids = [[], []];
    shown = [[], []];
    offset = [0, 64];
    m16 = new Float32Array(16);
    visibleCars = 0;
    constructor(e) {
      this.batch = e;
      let t = (t) => e.models.get(t),
        [n, r] = fn(dn / 2);
      for (let i = 0; i < 2; i++)
        for (let a = 0; a < 6; a++) {
          let o =
            a === 0
              ? `gorge:car-head`
              : a === 5
                ? `gorge:car-tail`
                : `gorge:car-mid`;
          (ge(this.m16, n, Z.rail, r, Q.x, Q.z),
            this.ids[i].push(e.add(t(o), this.m16, n, r, 520, !1)),
            this.shown[i].push(!1));
        }
    }
    nose(e, t) {
      return e === 0 ? -(Cn + Hn) + zn * t : dn + Cn + Hn - zn * t;
    }
    update(e) {
      let t = e.time.elapsed,
        n = e.env?.hour ?? 12,
        r = n >= 5 || n < 0.5,
        i = 0;
      for (let e = 0; e < 2; e++) {
        let n = (((t - this.offset[e]) % Rn) + Rn) % Rn,
          a = r && n < Un,
          o = this.nose(e, n),
          s = e === 0 ? 1 : -1;
        for (let t = 0; t < 6; t++) {
          let n = o - s * (t * Vn + Bn / 2),
            r = a && n + Bn / 2 > -0.4 && n - Bn / 2 < dn + 0.4,
            c = this.ids[e][t];
          if (r) {
            let [e, r] = fn(n),
              a = t === 5 ? -s : s;
            (ge(this.m16, e, Z.rail, r, Q.x * a, Q.z * a),
              this.batch.mesh.setMatrixAt(c, Gn.fromArray(this.m16)),
              i++);
          }
          r !== this.shown[e][t] &&
            ((this.shown[e][t] = r), this.batch.setOn(c, r));
        }
      }
      this.visibleCars = i;
    }
    seek(e, t, n) {
      let r = t >= 0 ? 0 : 1,
        i = n * dn,
        a = r === 0 ? i + Cn / 2 : i - Cn / 2,
        o = r === 0 ? (a + Cn + Hn) / zn : (dn + Cn + Hn - a) / zn;
      return ((this.offset[r] = e.time.elapsed - o), !0);
    }
  },
  Gn = new t(),
  Kn = e({
    init: () => $n,
    start: () => er,
    unload: () => nr,
    update: () => tr,
  }),
  $ = null,
  qn = !1,
  Jn = !1,
  Yn = -1,
  Xn = Error(`kanda: dropped while building`),
  Zn = (e, [t, n]) => (n > 24 ? e >= t || e < n - 24 : e >= t && e < n);
function Qn(e) {
  for (let [t, n] of Object.entries(ae))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[kanda] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
async function $n(e) {
  if (qn || $) return;
  ((qn = !0), (Jn = !1));
  let t = performance.now(),
    n = 0,
    i = ``,
    s = performance.now(),
    c = async (t = !1, r = ``) => {
      let a = performance.now() - s;
      if (t || a > 1.2) {
        if ((a > n && ((n = a), (i = r)), await e.yieldFrame(), Jn)) throw Xn;
        s = performance.now();
      }
    };
  try {
    Qn(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      d = ht(),
      f = new ie();
    (Ze(f, d), Ct(f), Ft(f), Gt(f), Zt(f));
    let h = !e.params.has(`gorge`) || e.params.get(`gorge`) !== `0`;
    if (
      (h && bn(f),
      await c(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Jn)
    )
      throw Xn;
    s = performance.now();
    let g = l(2048, e.quality),
      _ = f.paint(g),
      v = _.next();
    for (; !v.done;) (await c(!1, `paint`), (v = _.next()));
    let y = v.value,
      b = [],
      x = new r(8192, 12288),
      S = 0,
      C = (e) =>
        x.n
          ? (b.push({ name: e, geo: m(x, `kanda-${e}`) }), (S += x.ni / 3), !0)
          : !1,
      ee = new Map();
    for (let e of d)
      (x.reset(),
        ee.set(e.id, et(x, e, f, u)),
        C(`shop:${e.id}`),
        x.reset(),
        nt(x, e, f) && C(`shut:${e.id}`),
        x.reset(),
        rt(x, e, f) && C(`open:${e.id}`),
        await c(!1, `shop`));
    for (let e of vt)
      (x.reset(),
        ee.set(`old:${e.id}`, Tt(x, e, f, u)),
        C(`old:${e.id}`),
        x.reset(),
        Et(x, e, f),
        C(`oldopen:${e.id}`),
        x.reset(),
        Dt(x, e, f),
        C(`oldshut:${e.id}`),
        await c(!1, `old`));
    x.reset();
    let te = Rt(x, f, u);
    (C(`nikolai`), await c(!1, `nikolai`), x.reset());
    let ne = qt(x, f, u);
    (C(`seido`), await c(!1, `seido`));
    let w = sn(on(f));
    for (let e of w.models) b.push(e);
    await c(!1, `kit`);
    let re = h ? In(f, e.plan, u) : { pieces: [], tris: 0 };
    for (let e of re.pieces) b.push({ name: e.name, geo: e.geo });
    if (h) for (let e of Ln(f)) b.push(e);
    ((S += re.tris), await c(!1, `gorge`));
    let ae = o(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `kanda`,
      }),
      se =
        d.length * 3 +
        vt.length * 3 +
        4 +
        w.instances.length +
        re.pieces.length +
        12 +
        16,
      T = new p(`kanda`, ae, b, se, !!e.quality.shadows);
    ((T.mesh.userData.owner = `kanda`), T.enableCulling(e.camera));
    let ce = [],
      E = (e) => T.models.get(e),
      le = (e) => [(e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2];
    for (let e of d) {
      let [t, n] = le(e),
        r = (ee.get(e.id) ?? 20) > 22 ? 520 : 420;
      T.add(E(`shop:${e.id}`), R, t, n, r);
      let i = e.hours;
      (i &&
        E(`shut:${e.id}`) !== void 0 &&
        ce.push({
          id: T.add(E(`shut:${e.id}`), R, t, n, 300, !1),
          on: (e) => !Zn(e, i),
          state: !1,
        }),
        E(`open:${e.id}`) !== void 0 &&
          ce.push({
            id: T.add(E(`open:${e.id}`), R, t, n, 220, !1),
            on: (e) => !i || Zn(e, i),
            state: !1,
          }));
    }
    for (let e of vt) {
      let t = (gt + _t) / 2,
        n = (e.z0 + e.z1) / 2;
      (T.add(E(`old:${e.id}`), R, t, n, 420),
        ce.push({
          id: T.add(E(`oldopen:${e.id}`), R, t, n, 220, !1),
          on: (t) => Zn(t, e.hours),
          state: !1,
        }),
        ce.push({
          id: T.add(E(`oldshut:${e.id}`), R, t, n, 260, !1),
          on: (t) => !Zn(t, e.hours),
          state: !1,
        }));
    }
    (E(`nikolai`) !== void 0 && T.add(E(`nikolai`), R, Ot.x, Ot.z, 900),
      E(`seido`) !== void 0 &&
        T.add(
          E(`seido`),
          R,
          (oe.minX + oe.maxX) / 2,
          (oe.minZ + oe.maxZ) / 2,
          600,
        ));
    let ue = new Float32Array(16);
    for (let e of w.instances) {
      let t = e.world ? R : ge(ue, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1),
        n = T.add(E(e.model), t, e.x, e.z, e.range, !e.when);
      e.when && ce.push({ id: n, on: e.when, state: !1 });
    }
    for (let e of re.pieces) T.add(E(e.name), R, e.x, e.z, e.range);
    let D = h ? new Wn(T) : null;
    await c(!1, `batch`);
    let O = 0;
    for (let t of d) {
      let [n, r] = le(t);
      (e.statics.addOBB(
        n,
        r,
        (t.x1 - t.x0) / 2,
        (t.z1 - t.z0) / 2,
        0,
        0,
        ee.get(t.id) ?? 10,
        `building`,
      ),
        O++);
    }
    for (let t of vt)
      (e.statics.addOBB(
        (gt + _t) / 2,
        (t.z0 + t.z1) / 2,
        (_t - gt) / 2,
        (t.z1 - t.z0) / 2,
        0,
        0,
        ee.get(`old:${t.id}`) ?? 8,
        `building`,
      ),
        O++);
    for (let t of [...te, ...ne])
      (e.statics.addOBB(t.cx, t.cz, t.hx, t.hz, 0, 0, t.h, `building`), O++);
    for (let t of w.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), O++);
    if (Jn) throw Xn;
    e.scene.add(T.mesh);
    let de = e.params.has(`kandaatlas`);
    (de || a(y),
      ($ = {
        batch: T,
        tex: y,
        timed: ce,
        train: D,
        stats: {
          shops: d.length + vt.length,
          tris: Math.round(S + w.tris),
          models: b.length,
          instances: T.count,
          atlas: g,
          atlasUsed: f.used,
          overflow: f.overflow,
          colliders: O,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: i,
          slowCell: `${f.slowKey} ${f.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`kandatest`)) &&
      (window.__kanda = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        atlas: () => (de ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:kanda ${$.stats.shops} buildings + ニコライ堂 + 湯島聖堂, ${$.stats.tris} tris, atlas ${g} (${f.used}/2816 used, ${f.overflow} overflow), ${O} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${i})`,
      ));
  } catch (e) {
    if (e !== Xn) throw e;
  } finally {
    qn = !1;
  }
}
function er(e) {
  Yn = -1;
}
function tr(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  if ((n.batch.regather(r.x, r.z, t.quality.mobile ? 0.8 : 1, 8), n.train)) {
    n.train.update(t);
    let e = window;
    if (!e.__kandaGorge) {
      let r = n.train;
      e.__kandaGorge = {
        seek: (e, n) => r.seek(t, e, n),
        cars: () => r.visibleCars,
      };
    }
  }
  let i = t.time.elapsed;
  if (i - Yn < 1) return;
  Yn = i;
  let a = t.env?.hour ?? 12,
    o = t.time.weekday ?? 1;
  for (let e of n.timed) {
    let t = e.on(a, o);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function nr(e) {
  Jn = !0;
  let t = $;
  (($ = null),
    (Yn = -1),
    t &&
      (typeof window < `u` && delete window.__kandaGorge,
      t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
var rr = Math.PI / 2,
  ir = -Math.PI / 2,
  ar = 0,
  or = [
    {
      id: `tokyo:kanda:gakkigai`,
      kind: `area`,
      x: -436,
      z: -576,
      radius: 220,
      hours: [11, 20],
      points: [
        [-480, -579],
        [-392, -579],
        [-392, -573],
        [-480, -573],
      ],
      label: {
        ja: `お茶の水 楽器街`,
        zh: `御茶之水 樂器街`,
        en: `Ochanomizu musical instrument street`,
      },
      copyKey: `kanda.street.gakkigai`,
      note: `the river-side row of block 4 (the real 明大通り slope is stylised into this row): guitar walls behind glass, のぼり, 中古 / 買取 boards; ~11:00–20:00`,
    },
    {
      id: `tokyo:kanda:kamikura`,
      kind: `entrance`,
      x: -429.4,
      z: -574.2,
      heading: ar,
      radius: 160,
      hours: [11, 20],
      label: {
        ja: `上倉楽器 本店`,
        zh: `上倉樂器 總店`,
        en: `Kamikura Gakki (main store)`,
      },
      copyKey: `kanda.gakki.kamikura`,
      note: `the green-board 9F guitar store (parody); a T2-Interiors music-shop walk-in candidate`,
    },
    {
      id: `tokyo:kanda:hijiribashi`,
      kind: `spot`,
      x: -378,
      z: -593,
      heading: rr,
      radius: 250,
      label: { ja: `聖橋`, zh: `聖橋`, en: `Hijiribashi` },
      note: `on the bridge deck looking down the お茶の水 gorge (east): the red 丸ノ内線 crossing the 神田川 8.5 m below between its portals (every ~2½ min each way, 05:00–00:30), the 中央線 and 総武線 decks above on the north bank (T2-G: tokyo/docs/T2-gorge.md)`,
    },
    {
      id: `tokyo:kanda:gorge-landing`,
      kind: `spot`,
      x: -294,
      z: -599,
      heading: -Math.PI / 2,
      radius: 200,
      label: {
        ja: `神田川の階段（水辺）`,
        zh: `神田川的階梯（水邊）`,
        en: `Kanda River steps (waterside)`,
      },
      note: `the maintenance stair down the north wall of the お茶の水 gorge from 外堀通り (the gate by the lifebuoy) to the landing at the water: the 丸ノ内線 bridge 25 m upstream, 聖橋 beyond; the way out for anyone in the water (T2-G)`,
    },
    {
      id: `tokyo:kanda:nikolai-gate`,
      kind: `entrance`,
      x: -368.4,
      z: -551,
      heading: ir,
      radius: 200,
      hours: [13, 15.5],
      label: {
        ja: `ニコライ堂`,
        zh: `尼古拉堂`,
        en: `Nikolai-do (Holy Resurrection Cathedral)`,
      },
      copyKey: `kanda.nikolai.name`,
      note: `the precinct gate on 本郷通り; a working cathedral (visiting 13:00–15:30, closed some days): no mission may disturb the grounds (§3.10)`,
    },
    {
      id: `tokyo:kanda:seido-gate`,
      kind: `entrance`,
      x: -309.4,
      z: -664,
      heading: ir,
      radius: 200,
      hours: [9.5, 17],
      label: {
        ja: `湯島聖堂 仰高門`,
        zh: `湯島聖堂 仰高門`,
        en: `Yushima Seido gate`,
      },
      copyKey: `kanda.seido.name`,
      note: `the street gate on the west street; 入徳門 and 大成殿 inside; hours 9:30–17:00 (winter to 16:00). Sacred / historic: no damage, nothing disrespectful`,
    },
    {
      id: `tokyo:kanda:myojin-ema`,
      kind: `spot`,
      x: -270.5,
      z: -734.6,
      heading: ar,
      radius: 160,
      label: {
        ja: `神田明神 絵馬掛け`,
        zh: `神田明神 繪馬架`,
        en: `Kanda Myojin ema rack`,
      },
      note: `the pilgrims' 絵馬 (anime-style drawings, generic) on the landmark's east rack; the precinct is T2-LB's (神田明神): stand, look, take a photo`,
    },
    {
      id: `tokyo:kanda:jimbocho-books`,
      kind: `spot`,
      x: -470,
      z: -496.8,
      heading: ar,
      radius: 180,
      hours: [10, 18.5],
      label: {
        ja: `神保町寄りの古書店`,
        zh: `神保町旁的舊書店`,
        en: `Second-hand bookshops (Jimbocho edge)`,
      },
      note: `the ¥100 / 3冊500円 wagons on the 靖国通り sidewalk, the shops face north (out of the sun); 駿河台下 at the west end of the box`,
    },
    {
      id: `tokyo:kanda:hokkai-curry`,
      kind: `entrance`,
      x: -455.7,
      z: -494.7,
      heading: ar,
      radius: 150,
      hours: [11, 21],
      label: { ja: `キッチン北海`, zh: `北海廚房`, en: `Kitchen Hokkai` },
      copyKey: `kanda.curry.hokkai`,
      note: `the black カツカレー 定食屋 with the lunch queue (parody); 神田カレーグランプリ のぼり next door`,
    },
    {
      id: `tokyo:kanda:victory-ski`,
      kind: `entrance`,
      x: -448,
      z: -525.3,
      heading: Math.PI,
      radius: 170,
      hours: [11, 20],
      label: {
        ja: `ヴィクトリー スキー館`,
        zh: `勝利 滑雪館`,
        en: `Victory Ski House`,
      },
      copyKey: `kanda.sports.victory-ski`,
      note: `the 小川町 sports street on 靖国通り: October = the new season's skis and boards`,
    },
    {
      id: `tokyo:kanda:sudacho`,
      kind: `area`,
      x: -184.8,
      z: -543,
      radius: 180,
      points: [
        [-187, -559],
        [-183.4, -559],
        [-183.4, -527],
        [-187, -527],
      ],
      label: {
        ja: `神田須田町 老舗通り`,
        zh: `神田須田町 老店街`,
        en: `Kanda Sudacho old shops`,
      },
      note: `the pre-war wooden shops (東京都選定歴史的建造物): いせ平, 笹むら, しゃくやく, まつ葉 (parodies); the queue at まつ葉 at lunch`,
    },
    {
      id: `tokyo:kanda:matsuba`,
      kind: `entrance`,
      x: -184.2,
      z: -532,
      heading: ir,
      radius: 140,
      hours: [11, 20.5],
      label: { ja: `神田 まつ葉`, zh: `神田 松葉`, en: `Kanda Matsuba (soba)` },
      copyKey: `kanda.old.matsuba`,
    },
    {
      id: `tokyo:kanda:gado-kajicho`,
      kind: `entrance`,
      x: -10.2,
      z: -353.75,
      heading: ir,
      radius: 150,
      hours: [11.5, 24],
      label: {
        ja: `大衆酒場 かじ町`,
        zh: `大眾酒場 鍛冶町`,
        en: `Taishu Sakaba Kajicho`,
      },
      copyKey: `kanda.gado.izakaya-1`,
      note: `the east side of the ガード下 lane, facing the arches (T2-S's やきとん 万吉 / 神田屋 / 金星 opposite)`,
    },
    {
      id: `tokyo:kanda:gado-crawl`,
      kind: `route`,
      x: -14,
      z: -310,
      radius: 220,
      hours: [17, 24],
      points: [
        [-12, -360],
        [-12, -320],
        [-17, -312],
        [-12, -300],
        [-12, -256],
      ],
      label: {
        ja: `ガード下はしご酒`,
        zh: `高架橋下續攤`,
        en: `Gado-shita bar crawl`,
      },
      note: `south along the lane from 神田駅: the standing bars and izakaya on both sides (barrel tables from 16:00)`,
    },
    {
      id: `tokyo:kanda:ochanomizu-run`,
      kind: `route`,
      x: -300,
      z: -560,
      radius: 320,
      points: [
        [-310, -664],
        [-315, -612],
        [-380, -612],
        [-380, -578],
        [-380, -510],
        [-190, -510],
        [-190, -545],
      ],
      label: {
        ja: `お茶の水から須田町へ`,
        zh: `從御茶之水到須田町`,
        en: `Ochanomizu to Sudacho`,
      },
      note: `湯島聖堂 → 外堀通り → 聖橋 → 本郷通り past the 楽器街 corner and ニコライ堂 → 靖国通り (sports street) → 須田町`,
    },
  ];
export { ce as i, Kn as n, T as r, or as t };
