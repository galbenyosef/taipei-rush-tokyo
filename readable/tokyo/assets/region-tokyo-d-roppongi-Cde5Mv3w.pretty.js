import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-anaGONx4.js";
import {
  F as n,
  I as r,
  Lr as i,
  P as a,
  _n as o,
  dn as s,
  hn as c,
  kt as l,
  mn as u,
} from "./engine-14d5lda2.js";
import {
  Dn as d,
  On as f,
  Zt as p,
  _n as m,
  cn as h,
  fn as g,
  hn as _,
  in as v,
  pn as y,
  rn as b,
  sn as x,
  wn as S,
} from "./region-tokyo-A7LxHjud.js";
var C = 2048,
  w = 2816,
  T = `white`,
  E = 4,
  ee = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    tex = null;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    constructor() {
      this.need(T, 32, 32, (e, t, n, r, i) => {
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
      let e = this.order
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
          (t + a.w + E > 2048 && ((t = 0), (n += r + E), (r = 0)),
          n + a.h > 2816)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + E),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(T));
      let n = 1.5;
      return {
        u0: (t.x + n) / C,
        v0: 1 - (t.y + t.h - n) / w,
        u1: (t.x + t.w - n) / C,
        v1: 1 - (t.y + n) / w,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(T),
        t = (e.x + e.w / 2) / C,
        n = 1 - (e.y + e.h / 2) / w;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * w) / C),
        [n, r] = o(e, t);
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
          console.warn(`[roppongi] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let a = u(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `roppongi-atlas`), (this.tex = a), (this.size = e), a);
    }
  };
function D(e, t, n, r, i, a, o = 0.55, s) {
  ((e.globalAlpha = 1),
    (e.fillStyle = a),
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
function O(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function te(e, t, n, r, i, a, o = 0.5) {
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
var ne = new Uint8Array(256);
for (let e = 0; e < 256; e++) ne[e] = Math.round(255 * (e / 255) ** 2.2);
var k = (e) => ne[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function A(e, t, n = 1) {
  return (
    e.setColor(
      k(((t >> 16) & 255) * n),
      k(((t >> 8) & 255) * n),
      k((t & 255) * n),
    ),
    e
  );
}
function j(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
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
function M(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function N(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (j(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    j(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    j(e, b[0], b[1], S[0], S[1], r, i, l),
    j(e, x[0], x[1], y[0], y[1], r, i, l),
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
function ie(e, t, n, r, i, a, o, s = 6) {
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
function ae(e, t, n, r, i, a, o = 1) {
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
var oe = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  P = (e) => (b(e) ? v(e) : (x[e]?.ja ?? e)),
  se = (e, t) => m(P(e), t);
function F(e) {
  let t = h(e)?.colors ?? [`#e60012`, `#ffffff`, `#1d2088`];
  return [t[0], t[1], t[2]];
}
function ce(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function I(e, t, n, r, i, a, o, s = `900`, c = g()) {
  let l = ce(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function le(e, t, n, r, i, a, o, s = `800`, c = g()) {
  let l = ce(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.save(),
    (e.shadowColor = o),
    (e.shadowBlur = Math.max(3, l * 0.35)),
    (e.fillStyle = o),
    e.fillText(t, n, r + a * 0.04),
    e.restore(),
    (e.fillStyle = de(o, `#ffffff`, 0.55)),
    e.fillText(t, n, r + a * 0.04));
}
function ue(e, t, n, r, i, a, o, s, c = `900`) {
  let l = g(),
    u = ce(e, t, i, a, l, c);
  ((e.font = `${c} ${Math.min(u, a)}px ${l}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    (e.lineJoin = `round`),
    (e.lineWidth = Math.max(2, u * 0.14)),
    (e.strokeStyle = s),
    e.strokeText(t, n, r + a * 0.04),
    (e.fillStyle = o),
    e.fillText(t, n, r + a * 0.04));
}
function de(e, t, n) {
  let r = (e) => [
      parseInt(e.slice(1, 3), 16),
      parseInt(e.slice(3, 5), 16),
      parseInt(e.slice(5, 7), 16),
    ],
    i = r(e),
    a = r(t);
  return (
    `#` +
    i
      .map((e, t) =>
        Math.round(e + (a[t] - e) * n)
          .toString(16)
          .padStart(2, `0`),
      )
      .join(``)
  );
}
var fe = [
  { bg: `#ffffff`, fg: `#c8102e` },
  { bg: `#ffffff`, fg: `#1d2088` },
  { bg: `#ffffff`, fg: `#111111` },
  { bg: `#101014`, fg: `#ff4fa3`, neon: !0 },
  { bg: `#101014`, fg: `#3fe0ff`, neon: !0 },
  { bg: `#140c1c`, fg: `#c77dff`, neon: !0 },
  { bg: `#101014`, fg: `#ffd84a`, neon: !0 },
  { bg: `#e60073`, fg: `#ffffff` },
  { bg: `#5b1a8a`, fg: `#ffffff` },
  { bg: `#0b2a5a`, fg: `#ffe9a8` },
  { bg: `#ffe100`, fg: `#111111` },
  { bg: `#101014`, fg: `#ffffff`, neon: !0 },
];
function pe(e, t, n, r, i, a) {
  (a.neon
    ? (te(e, t, n, r, i, a.bg, 0.5),
      (e.globalAlpha = 1),
      (e.strokeStyle = a.fg),
      (e.lineWidth = Math.max(1.5, i * 0.05)),
      e.save(),
      (e.shadowColor = a.fg),
      (e.shadowBlur = i * 0.15),
      e.strokeRect(t + i * 0.08, n + i * 0.08, r - i * 0.16, i - i * 0.16),
      e.restore(),
      le(e, P(a.key), t + r / 2, n + i / 2, r * 0.82, i * 0.5, a.fg))
    : (D(e, t, n, r, i, a.bg, 0.6),
      I(e, P(a.key), t + r / 2, n + i / 2, r * 0.84, i * 0.56, a.fg, `900`)),
    a.floor &&
      (O(e, t + r * 0.03, n + i * 0.06, i * 0.42, i * 0.3, (a.neon, a.fg)),
      I(
        e,
        `${a.floor}F`,
        t + r * 0.03 + i * 0.21,
        n + i * 0.21,
        i * 0.38,
        i * 0.24,
        a.neon ? `#101014` : a.bg,
        `900`,
      )));
}
function me(e, t) {
  return (n, r, i, a, o) => {
    O(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) =>
      pe(n, r + a * 0.05, i + t * s + s * 0.06, a * 0.9, s * 0.88, e),
    );
  };
}
function he(e, t) {
  return (n, r, i, a, o) => {
    O(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) => {
      let o = a / e.length;
      e.forEach((e, a) =>
        pe(
          n,
          r + a * o + o * 0.04,
          i + t * s + s * 0.08,
          o * 0.92,
          s * 0.84,
          e,
        ),
      );
    });
  };
}
function ge(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        (O(t, n, r, i, a * 0.014, e.acc),
        O(t, n, r + a - a * 0.014, i, a * 0.014, e.acc),
        te(t, n + i * 0.06, r, i * 0.05, a, e.acc, 0.7),
        te(t, n + i * 0.89, r, i * 0.05, a, e.acc, 0.7)));
    let o = r + a * 0.04;
    (e.top &&
      (O(t, n + i * 0.1, o, i * 0.8, a * 0.07, e.fg),
      I(
        t,
        P(e.top),
        n + i / 2,
        o + a * 0.035,
        i * 0.74,
        a * 0.055,
        e.bg,
        `900`,
      ),
      (o += a * 0.09)),
      _(t, P(e.main), n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, g(), `900`));
  };
}
function _e(e) {
  return (t, n, r, i, a) => {
    (e.neon ? te(t, n, r, i, a, e.bg, 0.5) : D(t, n, r, i, a, e.bg, 0.58),
      e.acc &&
        (O(t, n, r, i, a * 0.08, e.acc),
        O(t, n, r + a * 0.92, i, a * 0.08, e.acc)));
    let o = n + a * 0.25,
      s = /\{n\}/.test(P(e.main));
    e.floor &&
      !s &&
      (O(t, o, r + a * 0.14, a * 1.1, a * 0.72, e.fg),
      I(t, `${e.floor}F`, o + a * 0.55, r + a / 2, a * 0.95, a * 0.6, e.bg),
      (o += a * 1.35));
    let c = n + i - a * 0.25,
      l = s ? se(e.main, { n: e.floor ?? 2 }) : P(e.main),
      u = e.serif ? y() : g();
    if (e.neon) {
      le(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.62, e.fg, `800`, u);
      return;
    }
    e.sub
      ? (I(t, l, (o + c) / 2, r + a * 0.38, c - o, a * 0.5, e.fg, `900`, u),
        I(t, P(e.sub), (o + c) / 2, r + a * 0.78, c - o, a * 0.24, e.fg, `700`))
      : I(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.66, e.fg, `900`, u);
  };
}
function ve(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        ((t.globalAlpha = 1),
        (t.fillStyle = e.acc),
        t.beginPath(),
        t.moveTo(n, r + a),
        t.lineTo(n + i * 0.3, r + a),
        t.lineTo(n + i * 0.18, r),
        t.lineTo(n, r),
        t.fill()),
      ue(
        t,
        P(e.main),
        n + i * 0.56,
        r + a * (e.sub ? 0.4 : 0.5),
        i * 0.8,
        a * (e.sub ? 0.56 : 0.72),
        e.fg,
        e.bg,
      ),
      e.sub &&
        I(
          t,
          P(e.sub),
          n + i * 0.56,
          r + a * 0.82,
          i * 0.8,
          a * 0.2,
          e.fg,
          `700`,
        ));
  };
}
function ye(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-led`, t)),
      u = [
        [`#120a3a`, `#c2185b`],
        [`#03203a`, `#00a6c8`],
        [`#2a0a2a`, `#ff7a00`],
        [`#0a1a10`, `#2ec27e`],
      ],
      [d, f] = u[t % u.length],
      p = i.createLinearGradient(a, o, a + s, o + c);
    if (
      (p.addColorStop(0, d),
      p.addColorStop(1, f),
      (i.globalAlpha = 1),
      (i.fillStyle = p),
      i.fillRect(a, o, s, c),
      t % 2 == 0)
    ) {
      i.fillStyle = `rgba(0,0,0,0.55)`;
      let e = a;
      for (; e < a + s;) {
        let t = s * (0.04 + l.next() * 0.06),
          n = c * (0.15 + l.next() * 0.4);
        (i.fillRect(e, o + c - n, t, n), (e += t + s * 0.005));
      }
      ((i.fillStyle = `#ff6a2a`),
        i.beginPath(),
        i.moveTo(a + s * 0.7, o + c),
        i.lineTo(a + s * 0.74, o + c * 0.25),
        i.lineTo(a + s * 0.78, o + c),
        i.fill());
    } else {
      (O(i, a + s * 0.72, o + c * 0.22, s * 0.07, c * 0.66, `#d8a040`),
        O(i, a + s * 0.74, o + c * 0.1, s * 0.03, c * 0.14, `#d8a040`),
        O(
          i,
          a + s * 0.83,
          o + c * 0.5,
          s * 0.08,
          c * 0.38,
          `rgba(255,255,255,0.65)`,
        ));
      for (let e = 0; e < 18; e++)
        ((i.fillStyle = `rgba(255,255,255,0.8)`),
          i.fillRect(a + l.next() * s, o + l.next() * c, 2, 2));
    }
    ue(
      i,
      P(e),
      a + s * 0.38,
      o + c * 0.42,
      s * 0.68,
      c * 0.28,
      `#ffffff`,
      `#000000`,
    );
  };
}
function be(e, t, n, r, i) {
  D(e, t, n, r, i, `#ffe100`, 0.62);
  let a = t + r / 2,
    o = n + i * 0.42,
    s = Math.min(r, i) * 0.3;
  ((e.globalAlpha = 1),
    (e.fillStyle = `#1d4fb8`),
    e.beginPath(),
    e.ellipse(a, o + s * 0.25, s * 0.95, s * 1.15, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.ellipse(a, o + s * 0.45, s * 0.62, s * 0.82, 0, 0, Math.PI * 2),
    e.fill());
  for (let t of [-1, 1])
    ((e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.ellipse(
        a + t * s * 0.32,
        o - s * 0.35,
        s * 0.22,
        s * 0.26,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill(),
      (e.fillStyle = `#101010`),
      e.beginPath(),
      e.arc(a + t * s * 0.28, o - s * 0.32, s * 0.1, 0, Math.PI * 2),
      e.fill());
  ((e.fillStyle = `#ffb000`),
    e.beginPath(),
    e.moveTo(a - s * 0.2, o - s * 0.08),
    e.lineTo(a + s * 0.2, o - s * 0.08),
    e.lineTo(a, o + s * 0.16),
    e.fill(),
    (e.fillStyle = `#e60012`),
    e.beginPath(),
    e.ellipse(
      a + s * 0.1,
      o - s * 0.92,
      s * 0.78,
      s * 0.3,
      -0.15,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(a + s * 0.2, o - s * 1.18, s * 0.14, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#1d4fb8`),
    e.beginPath(),
    e.ellipse(a + s * 1, o - s * 0.05, s * 0.2, s * 0.55, -0.7, 0, Math.PI * 2),
    e.fill(),
    I(
      e,
      P(`roppongi.donco.mascot`),
      a,
      n + i * 0.9,
      r * 0.8,
      i * 0.13,
      `#e60012`,
      `900`,
    ));
}
function xe(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-shop`, e, t));
    i.globalAlpha = 1;
    let u = (e, t, n, r, i) => {
        let c = s / e,
          l = (r - n) / t;
        for (let r = 0; r < t; r++)
          for (let t = 0; t < e; t++)
            i(a + t * c, o + n + r * l, c, l, r * e + t);
      },
      d = (e, t) => {
        for (let n = 0; n < e; n++) {
          let e = a + s * (0.12 + l.next() * 0.76),
            r = c * (0.38 + l.next() * 0.1);
          ((i.fillStyle = t[n % t.length]),
            i.beginPath(),
            i.arc(e, o + c - r - c * 0.03, s * 0.022, 0, Math.PI * 2),
            i.fill(),
            i.fillRect(e - s * 0.026, o + c - r, s * 0.052, r * 0.62));
        }
      };
    switch (e) {
      case `bar`:
      case `club`: {
        O(i, a, o, s, c, e === `club` ? `#14081e` : `#1c120c`);
        let n = e === `club` ? `#3a1458` : `#3a2416`;
        O(i, a, o + c * 0.12, s, c * 0.42, n);
        for (let e = 0; e < 3; e++)
          for (let n = 0; n < 26; n++) {
            let r = a + s * (0.03 + n * 0.037),
              l = o + c * (0.16 + e * 0.12);
            ((i.fillStyle = [
              `#d8a040`,
              `#8acf6a`,
              `#e8e0c8`,
              `#c84a2a`,
              `#5aa0d8`,
            ][(n + e * 3 + t) % 5]),
              i.fillRect(r, l + c * 0.02, s * 0.012, c * 0.08));
          }
        for (let t = 0; t < 3; t++)
          O(
            i,
            a,
            o + c * (0.27 + t * 0.12),
            s,
            c * 0.008,
            e === `club` ? `#ff5ad0` : `#ffd890`,
          );
        (O(i, a, o + c * 0.6, s, c * 0.06, `#5a3a22`),
          O(i, a, o + c * 0.66, s, c * 0.22, `#2a1a10`));
        for (let e = 0; e < 7; e++)
          O(
            i,
            a + s * (0.06 + e * 0.14),
            o + c * 0.74,
            s * 0.015,
            c * 0.18,
            `#202020`,
          );
        if (e === `club`) {
          i.globalAlpha = 0.35;
          for (let e = 0; e < 5; e++)
            ((i.fillStyle = [`#ff2fd0`, `#3fe0ff`, `#7a3cff`][e % 3]),
              i.beginPath(),
              i.moveTo(a + s * (0.1 + e * 0.2), o),
              i.lineTo(a + s * (0.02 + e * 0.2), o + c),
              i.lineTo(a + s * (0.2 + e * 0.2), o + c),
              i.fill());
          ((i.globalAlpha = 1),
            (i.fillStyle = `#d8d8e8`),
            i.beginPath(),
            i.arc(a + s * 0.5, o + c * 0.08, s * 0.03, 0, Math.PI * 2),
            i.fill());
        }
        d(3, [`#0c0c10`, `#2a1a30`, `#101820`]);
        return;
      }
      case `izakaya`:
      case `yakiniku`:
      case `kappo`:
        (O(i, a, o, s, c, e === `kappo` ? `#2a2018` : `#6a4426`),
          O(
            i,
            a,
            o + c * 0.1,
            s,
            c * 0.34,
            e === `kappo` ? `#d8c8a8` : `#e8d4a8`,
          ));
        for (let e = 0; e < 16; e++)
          (O(
            i,
            a + s * (0.03 + e * 0.06),
            o + c * 0.13,
            s * 0.045,
            c * 0.26,
            `#fffaf0`,
          ),
            I(
              i,
              [`生`, `刺`, `焼`, `串`, `鍋`, `酒`, `肉`, `魚`][(e + t) % 8],
              a + s * (0.052 + e * 0.06),
              o + c * 0.24,
              s * 0.04,
              c * 0.1,
              `#202020`,
              `800`,
              y(),
            ));
        for (let e = 0; e < 5; e++)
          ((i.fillStyle = `#ffc870`),
            i.beginPath(),
            i.arc(
              a + s * (0.1 + e * 0.2),
              o + c * 0.06,
              s * 0.025,
              0,
              Math.PI * 2,
            ),
            i.fill());
        if (
          (O(i, a, o + c * 0.56, s, c * 0.08, `#8a5a30`),
          O(i, a, o + c * 0.64, s, c * 0.36, `#4a2e18`),
          e === `yakiniku`)
        )
          for (let e = 0; e < 4; e++)
            (O(
              i,
              a + s * (0.08 + e * 0.24),
              o + c * 0.42,
              s * 0.08,
              c * 0.12,
              `#888888`,
            ),
              (i.fillStyle = `#ff6020`),
              i.beginPath(),
              i.arc(
                a + s * (0.12 + e * 0.24),
                o + c * 0.6,
                s * 0.035,
                0,
                Math.PI * 2,
              ),
              i.fill());
        ((i.globalAlpha = 0.18), (i.fillStyle = `#ffffff`));
        for (let e = 0; e < 6; e++)
          i.fillRect(a + l.next() * s, o + c * 0.3, s * 0.12, c * 0.25);
        ((i.globalAlpha = 1), d(3, [`#2a2a34`, `#3a3028`, `#203040`]));
        return;
      case `ramen`:
      case `gyudon`:
        (O(i, a, o, s, c, e === `gyudon` ? `#f4e8d0` : `#ece0c8`),
          O(i, a, o, s, c * 0.08, `#ffffff`),
          O(
            i,
            a,
            o + c * 0.12,
            s,
            c * 0.22,
            e === `gyudon` ? `#f08300` : `#c8102e`,
          ));
        for (let e = 0; e < 4; e++)
          O(
            i,
            a + s * (0.05 + e * 0.24),
            o + c * 0.15,
            s * 0.18,
            c * 0.16,
            `#fff4d8`,
          );
        O(i, a, o + c * 0.5, s, c * 0.1, `#a87040`);
        for (let e = 0; e < 8; e++)
          O(
            i,
            a + s * (0.05 + e * 0.12),
            o + c * 0.66,
            s * 0.05,
            c * 0.24,
            `#c03020`,
          );
        (O(i, a + s * 0.02, o + c * 0.38, s * 0.12, c * 0.4, `#d0d0d8`),
          d(2, [`#2a2a34`, `#304a5a`]));
        return;
      case `konbini`:
        (O(i, a, o, s, c, `#f4f6f8`),
          u(8, 3, c * 0.2, c * 0.86, (e, t, n, r, a) => {
            for (let o = 0; o < 5; o++)
              O(
                i,
                e + n * (0.04 + o * 0.19),
                t + r * 0.2,
                n * 0.16,
                r * 0.6,
                [`#e8e8e8`, `#e04040`, `#40a0e0`, `#f0d040`, `#60c060`][
                  (o + a) % 5
                ],
              );
          }),
          O(i, a, o + c * 0.1, s, c * 0.06, `#1e5aa8`),
          d(2, [`#2a2a34`, `#40303a`]));
        return;
      case `drug`:
      case `donco`:
        if (
          (O(i, a, o, s, c, `#f6ecb0`),
          u(14, 6, c * 0.08, c * 0.88, (e, n, r, a, o) => {
            for (let t = 0; t < 4; t++)
              O(
                i,
                e + r * (0.05 + t * 0.23),
                n + a * 0.15,
                r * 0.2,
                a * 0.6,
                [
                  `#e04040`,
                  `#4080e0`,
                  `#f0f0f0`,
                  `#40b060`,
                  `#f0c020`,
                  `#e080c0`,
                ][(t + o) % 6],
              );
            (o + t) % 3 == 0 &&
              (O(i, e + r * 0.1, n + a * 0.62, r * 0.8, a * 0.34, `#ffec00`),
              I(
                i,
                (o % 2 ? `¥` : ``) + (l.int(1, 30) * 100 - 2),
                e + r / 2,
                n + a * 0.79,
                r * 0.74,
                a * 0.24,
                `#e60012`,
                `900`,
              ));
          }),
          e === `donco`)
        )
          for (let e = 0; e < 5; e++)
            (O(
              i,
              a + s * (0.04 + e * 0.2),
              o + c * 0.02,
              s * 0.14,
              c * 0.07,
              `#e60012`,
            ),
              I(
                i,
                P(`roppongi.donco.pop`),
                a + s * (0.11 + e * 0.2),
                o + c * 0.055,
                s * 0.12,
                c * 0.06,
                `#ffe100`,
                `900`,
              ));
        d(3, [`#2a2a34`, `#4a3a30`, `#30404a`]);
        return;
      case `karaoke`:
        (O(i, a, o, s, c, `#2a0a14`),
          O(i, a, o + c * 0.1, s, c * 0.35, `#5a1428`));
        for (let e = 0; e < 12; e++)
          (O(
            i,
            a + s * (0.05 + (e % 6) * 0.15),
            o + c * (0.14 + Math.floor(e / 6) * 0.14),
            s * 0.12,
            c * 0.1,
            e % 3 ? `#ffe100` : `#ff5a8a`,
          ),
            I(
              i,
              `${101 + e}`,
              a + s * (0.11 + (e % 6) * 0.15),
              o + c * (0.19 + Math.floor(e / 6) * 0.14),
              s * 0.1,
              c * 0.07,
              `#2a0a14`,
              `900`,
            ));
        (O(i, a + s * 0.1, o + c * 0.55, s * 0.8, c * 0.14, `#f0e0c0`),
          O(i, a, o + c * 0.86, s, c * 0.14, `#a01020`),
          d(3, [`#202028`, `#3a2a40`, `#203040`]));
        return;
      case `restaurant`:
      case `sushi`:
        (O(i, a, o, s, c, e === `sushi` ? `#e8dcc0` : `#3a2a20`),
          O(
            i,
            a,
            o + c * 0.08,
            s,
            c * 0.4,
            e === `sushi` ? `#f4ecd8` : `#5a4030`,
          ));
        for (let e = 0; e < 5; e++)
          (O(
            i,
            a + s * (0.04 + e * 0.2),
            o + c * 0.6,
            s * 0.14,
            c * 0.05,
            `#f8f4ec`,
          ),
            O(
              i,
              a + s * (0.1 + e * 0.2),
              o + c * 0.65,
              s * 0.02,
              c * 0.25,
              `#2a2018`,
            ),
            (i.fillStyle = `#ffd890`),
            i.beginPath(),
            i.arc(
              a + s * (0.11 + e * 0.2),
              o + c * 0.57,
              s * 0.01,
              0,
              Math.PI * 2,
            ),
            i.fill());
        for (let e = 0; e < 4; e++)
          ((i.fillStyle = `#ffcf80`),
            i.beginPath(),
            i.arc(
              a + s * (0.12 + e * 0.25),
              o + c * 0.12,
              s * 0.03,
              0,
              Math.PI * 2,
            ),
            i.fill());
        (e === `sushi` && O(i, a, o + c * 0.5, s, c * 0.06, `#c8a878`),
          d(3, [`#202028`, `#3a3028`, `#2a3a48`]));
        return;
      case `kebab`:
        (O(i, a, o, s, c, `#2a2018`),
          O(i, a, o + c * 0.55, s, c * 0.45, `#c8c0b0`),
          (i.fillStyle = `#a86030`),
          i.beginPath(),
          i.moveTo(a + s * 0.24, o + c * 0.2),
          i.lineTo(a + s * 0.36, o + c * 0.2),
          i.lineTo(a + s * 0.34, o + c * 0.56),
          i.lineTo(a + s * 0.26, o + c * 0.56),
          i.fill(),
          O(i, a + s * 0.48, o + c * 0.1, s * 0.48, c * 0.4, `#f8f0d8`),
          I(
            i,
            P(`roppongi.food.kebab`),
            a + s * 0.72,
            o + c * 0.18,
            s * 0.42,
            c * 0.1,
            `#c01818`,
          ),
          I(
            i,
            P(`roppongi.food.halal`),
            a + s * 0.72,
            o + c * 0.42,
            s * 0.3,
            c * 0.07,
            `#008a4a`,
          ));
        for (let e = 0; e < 3; e++)
          O(
            i,
            a + s * (0.52 + e * 0.14),
            o + c * 0.25,
            s * 0.12,
            c * 0.12,
            `#d8a050`,
          );
        return;
      case `hotel`:
      case `lobby`:
      case `office`:
        (O(i, a, o, s, c, e === `hotel` ? `#d8ccb4` : `#cfd4d8`),
          O(i, a, o, s, c * 0.06, `#f4f0e8`));
        for (let e = 0; e < 3; e++)
          O(
            i,
            a + s * (0.55 + e * 0.14),
            o + c * 0.2,
            s * 0.1,
            c * 0.62,
            `#9aa0a4`,
          );
        (O(
          i,
          a + s * 0.08,
          o + c * 0.5,
          s * 0.36,
          c * 0.2,
          e === `hotel` ? `#5a3a24` : `#8a8a8a`,
        ),
          (i.fillStyle = `#3a7a3a`),
          i.beginPath(),
          i.arc(a + s * 0.94, o + c * 0.62, s * 0.04, 0, Math.PI * 2),
          i.fill(),
          O(i, a, o + c * 0.88, s, c * 0.12, `#a8a098`),
          d(2, [`#202028`, `#2a3a48`]));
        return;
      case `cafe`:
        (O(i, a, o, s, c, `#5a3a28`),
          O(i, a + s * 0.05, o + c * 0.15, s * 0.9, c * 0.3, `#d8b890`));
        for (let e = 0; e < 4; e++)
          O(
            i,
            a + s * (0.08 + e * 0.23),
            o + c * 0.6,
            s * 0.12,
            c * 0.05,
            `#e8d8c0`,
          );
        d(2, [`#2a2a34`, `#40303a`]);
        return;
      case `arcade`:
        (O(i, a, o, s, c, `#14141c`),
          u(4, 1, c * 0.04, c * 0.98, (e, n, r, a, o) => {
            let s = [`#ff2d87`, `#1e90ff`, `#ffd400`, `#30d0a0`][(o + t) % 4];
            (O(i, e + r * 0.04, n, r * 0.92, a, s),
              O(i, e + r * 0.1, n + a * 0.12, r * 0.8, a * 0.56, `#f4fbff`));
            for (let t = 0; t < 12; t++)
              ((i.fillStyle = [
                `#ffb0c8`,
                `#ffe080`,
                `#a0d8ff`,
                `#c8a0ff`,
                `#ffffff`,
                `#ff8060`,
              ][(t + o * 3) % 6]),
                i.beginPath(),
                i.arc(
                  e + r * (0.18 + l.next() * 0.64),
                  n + a * (0.5 + l.next() * 0.16),
                  r * (0.06 + l.next() * 0.05),
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (O(i, e + r * 0.1, n + a * 0.7, r * 0.8, a * 0.12, `#30303a`),
              I(
                i,
                `1PLAY ¥100`,
                e + r / 2,
                n + a * 0.76,
                r * 0.7,
                a * 0.07,
                `#ffffff`,
                `900`,
              ));
          }));
        return;
    }
  };
}
function Se(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-win`, e, t));
    i.clearRect(a, o, s, c);
    let u = s / 4;
    for (let n = 0; n < 4; n++) {
      let r = a + n * u + u * 0.06,
        s = o + c * 0.06,
        d = u * 0.88,
        f = c * 0.88,
        p =
          e === `dark`
            ? `#4a5a68`
            : e === `office`
              ? `#8a96a0`
              : e === `mirror`
                ? `#7c8ea0`
                : `#c8ccc8`,
        m =
          e === `dark`
            ? `#1a2028`
            : e === `office`
              ? `#3a444c`
              : e === `mirror`
                ? `#2a3848`
                : `#8a8e8c`,
        h = i.createLinearGradient(0, s, 0, s + f);
      if (
        (h.addColorStop(0, p),
        h.addColorStop(1, m),
        (i.globalAlpha = 1),
        (i.fillStyle = h),
        i.fillRect(r, s, d, f),
        e === `blind` || e === `tenant`)
      )
        for (let e = s; e < s + f; e += f / 9)
          O(i, r, e, d, f * 0.02, `rgba(0,0,0,0.25)`);
      (e === `tenant` &&
        l.next() < 0.5 &&
        O(
          i,
          r + d * 0.1,
          s + f * 0.35,
          d * 0.8,
          f * 0.24,
          [`#ff4fa3`, `#ffd400`, `#3fe0ff`, `#ffffff`, `#c77dff`][(n + t) % 5],
        ),
        (i.globalAlpha = 0.16),
        (i.fillStyle = `#ffffff`),
        i.fillRect(r + d * 0.1, s, d * 0.12, f),
        (i.globalAlpha = 1));
    }
  };
}
function Ce(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-wall`, e, t));
    if ((O(i, a, o, s, c, t), e === `tile`))
      for (let e = o; e < o + c; e += 6) O(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
    if (e === `panel`)
      for (let e = a; e < a + s; e += s / 4)
        O(i, e, o, 2, c, `rgba(0,0,0,0.12)`);
    if (e === `board`)
      for (let e = a; e < a + s; e += 5)
        O(i, e, o, 1, c, `rgba(255,255,255,0.08)`);
    if (e === `stone`)
      for (let e = o, t = 0; e < o + c; e += 12, t++) {
        O(i, a, e + 11, s, 1, `rgba(0,0,0,0.22)`);
        for (let n = a + (t % 2 ? 0 : 10); n < a + s; n += 20)
          O(i, n, e, 1, 11, `rgba(0,0,0,0.22)`);
      }
    for (let e = 0; e < 6; e++)
      ((i.globalAlpha = 0.05 + l.next() * 0.06),
        (i.fillStyle = `#302820`),
        i.fillRect(a + l.next() * s, o, s * 0.03, c * (0.3 + l.next() * 0.7)));
    i.globalAlpha = 1;
  };
}
function we(e, t, n, r, i) {
  (O(e, t, n, r, i, `#ffffff`),
    O(e, t + r * 0.04, n + i * 0.04, r * 0.92, i * 0.24, `#d7000f`),
    I(
      e,
      P(`roppongi.plate.kyakuhiki`),
      t + r / 2,
      n + i * 0.16,
      r * 0.86,
      i * 0.16,
      `#ffffff`,
      `900`,
    ),
    I(
      e,
      P(`roppongi.plate.bottakuri`),
      t + r / 2,
      n + i * 0.4,
      r * 0.88,
      i * 0.1,
      `#111111`,
      `800`,
    ),
    O(e, t + r * 0.04, n + i * 0.5, r * 0.92, i * 0.2, `#1d2088`),
    I(
      e,
      P(`roppongi.plate.latin`),
      t + r / 2,
      n + i * 0.6,
      r * 0.86,
      i * 0.1,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#d7000f`),
    (e.lineWidth = r * 0.035),
    e.beginPath(),
    e.arc(t + r * 0.16, n + i * 0.84, i * 0.1, 0, Math.PI * 2),
    e.moveTo(t + r * 0.09, n + i * 0.9),
    e.lineTo(t + r * 0.23, n + i * 0.78),
    e.stroke(),
    I(
      e,
      P(`roppongi.plate.ward`),
      t + r * 0.6,
      n + i * 0.84,
      r * 0.66,
      i * 0.1,
      `#111111`,
      `800`,
    ));
}
function Te(e) {
  return (t, n, r, i, a) => {
    (O(t, n, r, i, a, `#4a3220`),
      O(t, n + i * 0.06, r + a * 0.05, i * 0.88, a * 0.9, `#141814`));
    let o = [
      `roppongi.bar.luna`,
      `roppongi.bar.shot7`,
      `roppongi.bar.bull`,
      `roppongi.bar.goal`,
    ][e % 4];
    (le(
      t,
      P(o),
      n + i / 2,
      r + a * 0.16,
      i * 0.8,
      a * 0.11,
      [`#ff4fa3`, `#3fe0ff`, `#ffd84a`, `#8aff7a`][e % 4],
      `800`,
    ),
      I(
        t,
        P(`roppongi.aboard.nomihodai`),
        n + i / 2,
        r + a * 0.38,
        i * 0.82,
        a * 0.1,
        `#ffffff`,
        `800`,
      ),
      I(
        t,
        P(`roppongi.aboard.latin`),
        n + i / 2,
        r + a * 0.5,
        i * 0.8,
        a * 0.08,
        `#ffd84a`,
        `900`,
      ),
      I(
        t,
        P(e % 2 ? `roppongi.aboard.happy` : `roppongi.aboard.darts`),
        n + i / 2,
        r + a * 0.64,
        i * 0.82,
        a * 0.07,
        `#ffffff`,
        `700`,
      ),
      I(
        t,
        P(`roppongi.aboard.nocharge`),
        n + i / 2,
        r + a * 0.76,
        i * 0.7,
        a * 0.07,
        `#ff8a8a`,
        `800`,
      ),
      I(
        t,
        P(`roppongi.aboard.welcome`),
        n + i / 2,
        r + a * 0.88,
        i * 0.84,
        a * 0.06,
        `#c8f0ff`,
        `700`,
      ));
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    O(t, n, r, i, a, `#e9e4d6`);
    for (let e = 0; e < 4; e++)
      O(t, n, r + a * (0.2 + e * 0.2), i, 1, `rgba(0,0,0,0.06)`);
    if (e === 0)
      (_(
        t,
        P(`roppongi.saka.name`),
        n + i / 2,
        r + a * 0.06,
        r + a * 0.62,
        i * 0.62,
        `#1a1a1a`,
        y(),
        `900`,
      ),
        I(
          t,
          P(`roppongi.saka.kana`),
          n + i / 2,
          r + a * 0.7,
          i * 0.86,
          a * 0.06,
          `#333333`,
          `700`,
        ));
    else {
      let e = P(`roppongi.saka.text`),
        o = Math.ceil(e.length / 4);
      for (let s = 0; s < 4; s++)
        _(
          t,
          e.slice(s * o, (s + 1) * o),
          n + i * (0.8 - s * 0.2),
          r + a * 0.05,
          r + a * 0.82,
          i * 0.16,
          `#2a2a2a`,
          y(),
          `700`,
        );
    }
    I(
      t,
      P(`roppongi.saka.ward`),
      n + i / 2,
      r + a * 0.92,
      i * 0.6,
      a * 0.05,
      `#2a2a2a`,
      `800`,
    );
  };
}
function De(e, t, n, r, i) {
  (D(e, t, n, r, i, `#1f4fa8`, 0.62),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#ffffff`),
    (e.lineWidth = Math.max(2, i * 0.04)),
    e.strokeRect(t + i * 0.06, n + i * 0.06, r - i * 0.12, i - i * 0.12),
    I(
      e,
      P(`roppongi.crossing.name`),
      t + r / 2,
      n + i * 0.4,
      r * 0.7,
      i * 0.48,
      `#ffffff`,
      `800`,
    ),
    I(
      e,
      P(`roppongi.crossing.latin`),
      t + r / 2,
      n + i * 0.78,
      r * 0.5,
      i * 0.2,
      `#ffffff`,
      `700`,
    ));
}
function Oe(e, t, n, r, i) {
  (O(e, t, n, r, i, `#ffffff`),
    O(e, t, n, r, i * 0.5, `#00804a`),
    I(e, `TAXI`, t + r / 2, n + i * 0.25, r * 0.7, i * 0.32, `#ffffff`, `900`),
    I(
      e,
      P(`roppongi.plate.taxi`),
      t + r / 2,
      n + i * 0.74,
      r * 0.86,
      i * 0.26,
      `#00804a`,
      `900`,
    ));
}
function ke(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, [`#5b1a8a`, `#c8102e`, `#0b2a5a`][e % 3], 0.62),
      O(t, n, r, i, a * 0.05, `#ffd84a`),
      O(t, n, r + a * 0.95, i, a * 0.05, `#ffd84a`),
      _(
        t,
        P(`roppongi.lane.flag`),
        n + i / 2,
        r + a * 0.09,
        r + a * 0.91,
        i * 0.62,
        `#ffffff`,
        g(),
        `900`,
      ));
  };
}
function Ae(e, t = `#d42a1a`) {
  return (n, r, i, a, o) => {
    D(n, r, i, a, o, t, 0.7);
    for (let e = 1; e < 7; e++)
      O(n, r, i + (o * e) / 7, a, 1.5, `rgba(0,0,0,0.18)`);
    (O(n, r, i, a, o * 0.08, `#141414`),
      O(n, r, i + o * 0.92, a, o * 0.08, `#141414`),
      _(
        n,
        P(e),
        r + a / 2,
        i + o * 0.14,
        i + o * 0.86,
        a * 0.64,
        `#141414`,
        y(),
        `900`,
      ));
  };
}
function je(e) {
  return (t, n, r, i, a) => {
    (O(t, n, r, i, a, `#c9a24a`),
      O(t, n + i * 0.08, r + a * 0.05, i * 0.84, a * 0.9, `#14140f`),
      _(
        t,
        P(e),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#e8c870`,
        y(),
        `900`,
      ));
  };
}
function Me(e, t, n, r, i) {
  (O(e, t, n, r, i, `#f4efe2`),
    O(e, t, n, r, i * 0.22, `#5a3a20`),
    I(
      e,
      P(`roppongi.hie.name`),
      t + r / 2,
      n + i * 0.11,
      r * 0.7,
      i * 0.15,
      `#ffffff`,
      `900`,
      y(),
    ),
    I(
      e,
      P(`roppongi.hie.hours`),
      t + r / 2,
      n + i * 0.36,
      r * 0.8,
      i * 0.1,
      `#2a2a2a`,
      `800`,
    ),
    I(
      e,
      P(`roppongi.hie.escalator-note`),
      t + r / 2,
      n + i * 0.52,
      r * 0.86,
      i * 0.08,
      `#2a2a2a`,
      `700`,
    ),
    I(
      e,
      P(`roppongi.hie.matsuri`),
      t + r / 2,
      n + i * 0.68,
      r * 0.5,
      i * 0.09,
      `#c8102e`,
      `900`,
      y(),
    ),
    I(
      e,
      P(`roppongi.hie.kinen`),
      t + r / 2,
      n + i * 0.86,
      r * 0.6,
      i * 0.08,
      `#2a2a2a`,
      `800`,
    ));
}
function Ne(e, t, n, r) {
  return (i, a, o, s, c) => {
    (D(i, a, o, s, c, t, 0.5),
      r
        ? (I(i, P(e), a + s / 2, o + c * 0.4, s * 0.86, c * 0.46, n, `900`),
          I(i, P(r), a + s / 2, o + c * 0.8, s * 0.86, c * 0.2, n, `700`))
        : I(i, P(e), a + s / 2, o + c / 2, s * 0.86, c * 0.6, n, `900`));
  };
}
var Pe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] },
  Fe = 4.2,
  Ie = 3.3,
  Le = (e) => Fe + (e.floors - 1) * Ie + 0.9,
  Re =
    `roppongi.bar.luna,roppongi.bar.shot7,roppongi.bar.mirage,roppongi.bar.bull,roppongi.bar.goal,roppongi.bar.oasis,roppongi.bar.vino,roppongi.bar.star,roppongi.bar.shamrock,roppongi.bar.gemini,roppongi.bar.velvet,roppongi.bar.noir,roppongi.bar.orchid,roppongi.bar.harbor,roppongi.bar.eclipse,roppongi.bar.hideout,roppongi.bar.azur,roppongi.bar.mojito,roppongi.bar.kyoko,roppongi.bar.aoi,roppongi.bar.darts,roppongi.bar.girls,roppongi.bar.shotbar,roppongi.bar.karaokebar,roppongi.bar.shisha,roppongi.word.massage,roppongi.word.yakiniku,roppongi.word.korean,roppongi.word.izakaya,roppongi.word.eikaiwa,roppongi.word.clinic,roppongi.word.sushi`.split(
      `,`,
    ),
  ze = [
    `roppongi.word.korean`,
    `roppongi.food.samgyeop`,
    `roppongi.word.yakiniku`,
    `roppongi.bar.kyoko`,
    `roppongi.bar.aoi`,
    `roppongi.akasaka.club`,
    `roppongi.word.izakaya`,
    `roppongi.word.sushi`,
    `roppongi.bar.orchid`,
    `roppongi.word.massage`,
    `roppongi.bar.vino`,
    `roppongi.akasaka.koreatown`,
    `roppongi.word.clinic`,
    `roppongi.bar.shotbar`,
    `roppongi.food.shabu`,
  ],
  Be = [16727968, 4186367, 11824127, 16767050, 16734778, 5832602];
function Ve(e, t) {
  let [n, r, i] = F(e);
  return { main: `brand.${e}`, top: t, bg: n, fg: r, acc: i };
}
function He(e, t) {
  let i = new n(r(`rop-look`, e.id, e.v ?? 0)),
    a = (e) => e[Math.floor(i.next() * e.length)],
    o = t ? ze : Re,
    s = (e, t) => {
      let n = [],
        r = Math.floor(i.next() * o.length),
        a = 1 + Math.floor(i.next() * 3) * 2;
      for (let s = 0; s < e; s++) {
        let e = fe[(Math.floor(i.next() * fe.length) + s) % fe.length];
        n.push({
          key: o[(r + s * a) % o.length],
          bg: e.bg,
          fg: e.fg,
          neon: e.neon,
          floor: t - s,
        });
      }
      return n;
    },
    c = [
      14868182, 13618374, 12104876, 9078400, 5920854, 3815998, 13945016,
      13159632,
    ],
    l = (e) => Array.from({ length: e }, () => a(Be)),
    u = { wall: a(c), win: a([`dark`, `blind`, `tenant`]) },
    d = e.floors - 1;
  switch (e.kind) {
    case `pencil`:
      return {
        ...u,
        tower: s(Math.min(10, d), e.floors),
        neon: i.next() < 0.6 ? l(1) : void 0,
        fascia:
          e.shop === `bar` || e.shop === `club`
            ? {
                main: o[Math.floor(i.next() * 18) % o.length],
                bg: `#101014`,
                fg: `#` + a(Be).toString(16).padStart(6, `0`),
                neon: !0,
              }
            : void 0,
      };
    case `signbldg`: {
      let t = [],
        n = Math.min(9, d);
      for (let r = 0; r < n; r++) {
        let n = s(2, e.floors - r);
        t.push(
          n.map((t, n) => ({ ...t, floor: n === 0 ? e.floors - r : void 0 })),
        );
      }
      let r = s(1, e.floors)[0];
      return {
        ...u,
        wall: 2763310,
        win: `dark`,
        grid: t,
        tower: s(Math.min(10, d), e.floors),
        led: a([
          `roppongi.led.night`,
          `roppongi.led.event`,
          `roppongi.led.drink`,
        ]),
        neon: l(2),
        roof: {
          main: r.key,
          bg: `#101014`,
          fg: a([`#ff4fa3`, `#3fe0ff`, `#ffd84a`, `#c77dff`]),
          acc: `#2a2a30`,
        },
      };
    }
    case `karaoke`: {
      let [e, t, n] = F(`karaokejo`);
      return {
        wall: 15921128,
        win: `tenant`,
        vsign: Ve(`karaokejo`),
        bands: [
          {
            main: `brand.karaokejo`,
            sub: `roppongi.karaoke.honten`,
            bg: e,
            fg: t,
            acc: n,
          },
          { main: `roppongi.karaoke.price`, bg: `#ffe100`, fg: `#e60012` },
          { main: `roppongi.karaoke.rooms`, bg: `#ffffff`, fg: `#e60012` },
        ],
        roof: { main: `brand.karaokejo`, bg: e, fg: t, acc: n },
        neon: [16767050],
      };
    }
    case `donco`: {
      let [e, t] = F(`doncoyote`),
        n = [
          `roppongi.donco.pop`,
          `roppongi.donco.food`,
          `roppongi.donco.sake`,
          `roppongi.donco.cosme`,
          `roppongi.donco.kusuri`,
          `roppongi.donco.party`,
          `common.door.tax-free`,
          `roppongi.donco.late`,
        ],
        r = [
          [`#e60012`, `#ffe100`],
          [`#ffe100`, `#e60012`],
          [`#1d2088`, `#ffffff`],
          [`#ffffff`, `#e60012`],
        ],
        i = [];
      for (let e = 0; e < Math.min(7, d); e++)
        i.push(
          [0, 1, 2, 3].map((t) => {
            let [i, a] = r[(e + t * 3) % r.length];
            return {
              key:
                e === 1 && t === 1
                  ? `brand.doncoyote`
                  : n[(e * 3 + t * 5) % n.length],
              bg: i,
              fg: a,
            };
          }),
        );
      return {
        wall: 16769280,
        win: `dark`,
        closedFront: 16765952,
        frontGlow: 0.22,
        grid: i,
        vsign: Ve(`doncoyote`),
        bands: [
          {
            main: `brand.doncoyote`,
            sub: `roppongi.donco.store`,
            bg: e,
            fg: t,
            acc: `#1d2088`,
          },
          { main: `brand.doncoyote.tagline`, bg: `#e60012`, fg: `#ffe100` },
          {
            main: `roppongi.donco.floor`,
            bg: `#ffffff`,
            fg: `#e60012`,
            floor: 2,
          },
          { main: `roppongi.donco.late`, bg: `#1d2088`, fg: `#ffffff` },
        ],
        roof: { main: `brand.doncoyote`, bg: e, fg: t, acc: `#1d2088` },
        neon: [16726554, 16777215],
      };
    }
    case `club`:
      return {
        wall: 1315864,
        win: `dark`,
        closedFront: 1184278,
        bands: [
          { main: `roppongi.club.big`, bg: `#0a0a10`, fg: `#c77dff`, neon: !0 },
          { main: `roppongi.club.dj`, bg: `#0a0a10`, fg: `#3fe0ff`, neon: !0 },
          {
            main: `roppongi.club.ladies`,
            bg: `#0a0a10`,
            fg: `#ff4fa3`,
            neon: !0,
          },
        ],
        led: `roppongi.led.night`,
        neon: [11824127, 4186367, 16727968],
        tower: s(Math.min(6, d), e.floors),
      };
    case `office`:
      return { wall: 12107976, win: `office` };
    case `glass`:
      return { wall: 8161942, win: `mirror` };
    case `hotel`: {
      let [e, t, n] = F(`abahotel`);
      return {
        wall: 15262424,
        win: `blind`,
        vsign: Ve(`abahotel`),
        bands: [
          {
            main: `brand.abahotel`,
            sub: `roppongi.akasaka.hotel-sub`,
            bg: e,
            fg: t,
            acc: n,
          },
        ],
        roof: { main: `brand.abahotel`, bg: e, fg: t, acc: n },
      };
    }
    case `restaurant`:
      return {
        ...u,
        win: `tenant`,
        tower: s(Math.min(8, d), e.floors),
        awning: a([8002074, 1718826, 2763306]),
      };
    case `yakiniku`:
    case `korean`:
      return {
        ...u,
        win: `tenant`,
        tower: s(Math.min(8, d), e.floors),
        lanterns:
          e.kind === `korean`
            ? `roppongi.word.korean`
            : `roppongi.word.yakiniku`,
        neon: i.next() < 0.5 ? l(1) : void 0,
      };
    case `izakaya`:
      return {
        ...u,
        wall: a([5913122, 3811870, 14208180]),
        win: `blind`,
        lanterns: `roppongi.word.izakaya`,
        tower: d >= 3 ? s(Math.min(6, d), e.floors) : void 0,
      };
    case `kappo`:
      return {
        wall: 1973274,
        win: `blind`,
        lanterns: `roppongi.food.kappo`,
        fascia: { main: e.name, bg: `#1e1c1a`, fg: `#e8dcc0`, serif: !0 },
      };
    case `konbini`:
    case `drug`:
      return { ...u, tower: d >= 3 ? s(Math.min(8, d), e.floors) : void 0 };
    case `ramen`:
    case `gyudon`:
      return {
        ...u,
        tower: d >= 3 ? s(Math.min(8, d), e.floors) : void 0,
        neon: i.next() < 0.4 ? l(1) : void 0,
      };
    case `arcade`: {
      let [e, t, n] = F(`titlestation`);
      return {
        wall: 1710628,
        win: `dark`,
        closedFront: 1447454,
        vsign: Ve(`titlestation`),
        bands: [{ main: `brand.titlestation`, bg: e, fg: t, acc: n }],
        led: `roppongi.led.event`,
        neon: [4186367],
      };
    }
  }
  return u;
}
function Ue(e, t) {
  let [n, r] = Pe[t],
    i = r,
    a = -n,
    o = [
      [e.x0, e.z0],
      [e.x1, e.z0],
      [e.x1, e.z1],
      [e.x0, e.z1],
    ].filter(([t, i]) =>
      n ? (n > 0 ? t === e.x1 : t === e.x0) : r > 0 ? i === e.z1 : i === e.z0,
    );
  o.sort((e, t) => e[0] * i + e[1] * a - (t[0] * i + t[1] * a));
  let [s, c] = o[0];
  return {
    ox: s,
    oz: c,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: Math.abs(n ? e.z1 - e.z0 : e.x1 - e.x0),
  };
}
var L = (e, t, n = 0) => [
  e.ox + e.tx * t + e.nx * n,
  e.oz + e.tz * t + e.nz * n,
];
function R(e, t, n, r, i, a, o, s) {
  let [c, l] = L(t, n, o),
    [u, d] = L(t, r, o);
  j(e, c, l, u, d, i, a, s);
}
var We = (e) => `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}`,
  Ge = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.neon ? `n` : ``}`;
function Ke(e, t) {
  if (t.fascia) return t.fascia;
  if (t.bands?.length) return t.bands[0];
  if (e.name.startsWith(`brand.`) || /^[a-z0-9]+$/.test(e.name)) {
    let t = e.name.replace(/^brand\./, ``),
      [n, r, i] = F(t);
    return { main: `brand.${t}`, bg: n, fg: r, acc: i };
  }
  return { main: e.name, bg: `#1d1d22`, fg: `#ffffff` };
}
function qe(e, t, n) {
  let i = new Map();
  for (let a of t) {
    let t = He(a, n(a));
    (i.set(a.id, t), t.vsign && e.need(We(t.vsign), 52, 364, ge(t.vsign)));
    for (let n of t.bands ?? []) e.need(Ge(n), 384, 48, _e(n));
    (t.tower &&
      e.need(`tower:${a.id}`, 72, 50 * t.tower.length, me(t.tower, `#2a2a30`)),
      t.grid &&
        e.need(
          `grid:${a.id}`,
          104 * t.grid[0].length,
          46 * t.grid.length,
          he(t.grid, a.kind === `donco` ? `#ffd400` : `#1a1a1e`),
        ),
      t.roof && e.need(`roof:${Ge(t.roof)}`, 288, 100, ve(t.roof)),
      t.led &&
        e.need(`led:${t.led}|${r(a.id) % 4}`, 224, 112, ye(t.led, r(a.id) % 4)),
      t.lanterns &&
        e.need(
          `lantern:${t.lanterns}`,
          48,
          80,
          Ae(t.lanterns, a.kind === `kappo` ? `#f4ead0` : `#d42a1a`),
        ),
      e.need(`win:${t.win}`, 160, 60, Se(t.win, 1)),
      e.need(`shop:${a.shop}`, 288, 144, xe(a.shop, 1)),
      a.poi && e.need(`shop:${a.poi.kind}`, 288, 144, xe(a.poi.kind, 2)));
    let o = Ke(a, t);
    (e.need(Ge(o), 384, 48, _e(o)),
      a.kind === `donco` && e.need(`mascot`, 192, 224, be));
  }
  return (e.need(`wall:concrete`, 64, 64, Ce(`concrete`, `#c8c4bc`)), i);
}
var Je = 35,
  Ye = 3;
function Xe(e, t, i, a, o) {
  let s = new n(r(`rop-hero`, t.id)),
    c = Le(t),
    l = a.white(),
    u = Ue(t, t.dir),
    d = (e) => {
      if (e === t.dir || e === t.corner || e === t.lane) return 0;
      let n = Ue(t, e);
      return n.nx === -u.nx && n.nz === -u.nz
        ? (t.coverB ?? 0)
        : ((n.nx === u.tx && n.nz === u.tz ? t.coverR : t.coverL) ?? 0);
    },
    f = a.uv(`win:${i.win}`);
  for (let n of [`N`, `E`, `S`, `W`]) {
    let u = Ue(t, n),
      p = d(n);
    if (n !== t.dir && n !== t.corner && n !== t.lane) {
      if (p >= c - 0.05) continue;
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, i.wall, 0.85),
        R(e, u, 0, u.L, Math.max(0, p), c, 0, l));
      continue;
    }
    Ze(e, t, i, u, a, n === t.dir, s);
    for (let n = 1; n < t.floors; n++) {
      let t = Fe + (n - 1) * Ie,
        r = t + Ie;
      if (i.closedFront !== void 0) {
        (e.setMaterial(0.7, 0, i.frontGlow ?? 0, +!!i.frontGlow),
          A(e, i.closedFront),
          R(e, u, 0, u.L, t, r, 0, l));
        continue;
      }
      (e.setMaterial(0.85, 0, 0, 0),
        A(e, i.wall),
        R(e, u, 0, u.L, t, t + 0.9, 0, l));
      let a = Math.max(1, Math.round(u.L / 3.4));
      (e.setMaterial(0.2, 0.3, 0.22, Je), A(e, 16777215));
      for (let n = 0; n < a; n++)
        R(
          e,
          u,
          (u.L * n) / a + 0.12,
          (u.L * (n + 1)) / a - 0.12,
          t + 0.9,
          r,
          0,
          f,
        );
      (e.setMaterial(0.85, 0, 0, 0), A(e, i.wall, 0.96));
      for (let n = 0; n <= a; n++) {
        let i = (u.L * n) / a;
        R(
          e,
          u,
          Math.max(0, i - 0.12),
          Math.min(u.L, i + 0.12),
          t + 0.9,
          r,
          0,
          l,
        );
      }
    }
    (e.setMaterial(0.85, 0, 0, 0),
      A(e, i.wall, 0.9),
      R(e, u, 0, u.L, c - 0.9, c, 0, l));
    let m = n === t.dir;
    if (m && i.grid) {
      let n = i.grid.length,
        r = Math.min(c - 1, Fe + n * Ie);
      (e.setMaterial(0.5, 0, 0.32, Ye),
        A(e, 16777215),
        R(
          e,
          u,
          0.25,
          u.L - (i.tower ? 1.6 : 0.25),
          4.4,
          r,
          0.15,
          a.uv(`grid:${t.id}`),
        ));
    }
    if (m && i.bands?.length && !i.grid) {
      let n = new Map(),
        r = 0,
        o = i.led && t.floors >= 6 ? 2 : -1;
      for (let s = 1; s < t.floors - 1; s++) {
        if (s === o || s === o + 1) continue;
        let t = i.bands.find((e) => e.floor === s + 1) ?? null;
        if (!t) {
          if ((s - 1) % 2) continue;
          t = i.bands[r++ % i.bands.length];
        }
        let c = Ge(t);
        if ((n.get(c) ?? 0) >= 2) continue;
        n.set(c, (n.get(c) ?? 0) + 1);
        let l = Fe + (s - 1) * Ie + 0.15,
          d = i.closedFront === void 0 ? 1.1 : Math.min(Ie * 0.7, u.L / 6);
        (e.setMaterial(0.5, 0, 0.3, Ye), A(e, 16777215));
        let f = Math.min(u.L - 0.4 - (i.tower ? 1.4 : 0), d * 8),
          p = (u.L - f) / 2;
        R(e, u, p, p + f, l, l + d, 0.12, a.uv(c));
      }
    }
    if (i.led && t.floors >= 5 && (t.ledOnCorner ? n === t.corner : m)) {
      let n = t.floors >= 6 ? 7.75 : 4.8,
        o = Math.min(u.L * 0.7, 8, (Ie * 2 - 0.4) * 2),
        s = o / 2;
      (e.setMaterial(0.3, 0, 0.34, 6),
        A(e, 16777215),
        R(
          e,
          u,
          (u.L - o) / 2,
          (u.L + o) / 2,
          n,
          n + s,
          i.grid ? 0.3 : 0.16,
          a.uv(`led:${i.led}|${r(t.id) % 4}`),
        ));
    }
    if (i.neon?.length && o >= 0) {
      let n = i.neon[0],
        r = i.neon[1] ?? n;
      (e.setMaterial(0.3, 0, 0.9, 1 | (s.next() < 0.25 ? 4 : 0)), A(e, n));
      let a = 0.18,
        d = 0.09;
      (R(e, u, 0.06, 0.15, Fe, c - 1, a, l),
        R(e, u, u.L - 0.06 - d, u.L - 0.06, Fe, c - 1, a, l),
        A(e, r),
        R(e, u, 0.06, u.L - 0.06, c - 1.12, c - 1.12 + d, a, l),
        o >= 1 && t.floors >= 4 && R(e, u, 0.06, u.L - 0.06, 4.25, 4.34, a, l));
    }
  }
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 9079430),
    M(e, t.x0, t.z0, t.x1, t.z1, c - 0.6, l));
  let p = (t, n, r, i, o, s) => {
      let [c, d] = L(u, r, 0.3 + s / 2);
      (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
      let f = a.uv(n);
      (N(e, c, d, i, o, s / 2, 0.22, u.tx, u.tz, l, f, f),
        e.setMaterial(0.6, 0.4, 0, 0),
        A(e, 3816512));
      let [p, m] = L(u, r, 0.15);
      (N(e, p, m, i + 0.2, o - 0.2, 0.15, 0.05, u.tx, u.tz, l),
        N(e, c, d, o, o + 0.25, s / 2 + 0.06, 0.26, u.tx, u.tz, l));
    },
    m = c - (i.roof ? 1 : 0.3);
  if (i.tower && t.floors >= 3) {
    let e = i.tower.length,
      n = Math.min(m, Fe + e * Ie),
      r = u.L < 7 ? 1.25 : 1.5,
      a = i.grid ? u.L - 0.85 : s.next() < 0.5 || !i.vsign ? u.L - 0.75 : 0.75;
    p(i.tower, `tower:${t.id}`, a, 4.45, n, r);
  }
  if (i.vsign && t.floors >= 3) {
    let t = Math.min(m - 4.5, 24),
      [n, r] = L(u, 0.9, 1);
    (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
    let o = a.uv(We(i.vsign));
    (N(e, n, r, m - t, m, 0.65, 0.2, u.tx, u.tz, l, o, o),
      e.setMaterial(0.6, 0.4, 0, 0),
      A(e, 5264472));
    let [s, c] = L(u, 0.9, 0.18);
    N(e, s, c, m - t + 0.3, m - 0.3, 0.17, 0.05, u.tx, u.tz, l);
  }
  if (i.roof) {
    let n = t.kind === `donco` ? 4.6 : 3.2,
      r = Math.min(u.L - 0.6, n * 2.86);
    (e.setMaterial(0.7, 0.5, 0, 0), A(e, 6317160));
    for (let t of [0.7, u.L - 0.7]) {
      let [r, i] = L(u, t, -1.2);
      N(e, r, i, c - 0.6, c + n * 0.4, 0.08, 0.6, u.nx, u.nz, l);
    }
    (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
    let [o, s] = L(u, u.L / 2, -0.6),
      d = a.uv(`roof:${Ge(i.roof)}`);
    N(e, o, s, c + 0.1, c + 0.1 + n, r / 2, 0.2, u.nx, u.nz, l, d, d);
  }
  if (t.kind === `donco`) {
    let n = t.corner ? Ue(t, t.corner) : u,
      r = Math.min(n.L * 0.6, 7),
      i = r * 1.17,
      o = t.corner ? n.L - r - 1.2 : 1.2;
    (e.setMaterial(0.5, 0, 0.34, Ye),
      A(e, 16777215),
      R(e, n, o, o + r, c - 2 - i, c - 2, 0.2, a.uv(`mascot`)));
  }
  return (
    !i.roof &&
      o > 0 &&
      s.next() < 0.5 &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      A(e, 14212312),
      N(
        e,
        (t.x0 + t.x1) / 2 + (s.next() - 0.5) * 2,
        (t.z0 + t.z1) / 2,
        c - 0.6,
        c + 1.6,
        0.9,
        0.9,
        0,
        1,
        l,
      )),
    { id: t.id, h: c }
  );
}
function Ze(e, t, n, r, i, a, o) {
  let s = i.white(),
    c = a ? t.dir : r.nx > 0 ? `E` : r.nx < 0 ? `W` : r.nz > 0 ? `S` : `N`,
    l = t.poi && t.poi.dir === c ? t.poi : null,
    u = 3.1;
  (e.setMaterial(0.25, 0.2, 0.18, 17), A(e, 16053492));
  let d = Math.max(1, Math.round(r.L / 3.2));
  for (let n = 0; n < d; n++) {
    let o = (r.L * n) / d,
      s = (r.L * (n + 1)) / d,
      c = (o + s) / 2,
      f = l && Math.abs(c - l.at) <= l.width / 2 + 0.2 ? l.kind : t.shop,
      [p, m] = L(r, o + 0.1, -0.35),
      [h, g] = L(r, s - 0.1, -0.35),
      _ = ((n + +!a) % 2) / 2,
      v = _ + 1 / 2;
    re(e, p, m, h, g, 0, u, i.uv(`shop:${f}`), _, v, 0, 1);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, n.wall, 0.8));
  {
    let [t, n] = L(r, 0, 0),
      [i, a] = L(r, 0, -0.35);
    j(e, i, a, t, n, 0, u, s);
    let [o, c] = L(r, r.L, 0),
      [l, d] = L(r, r.L, -0.35);
    j(e, o, c, l, d, 0, u, s);
  }
  (e.setMaterial(0.6, 0.4, 0, 0),
    A(e, t.kind === `kappo` || t.kind === `izakaya` ? 3810324 : 2763824));
  for (let t = 0; t <= d; t++) {
    let n = (r.L * t) / d;
    R(e, r, Math.max(0, n - 0.1), Math.min(r.L, n + 0.1), 0, u, 0, s);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, 14211284));
  let [f, p] = L(r, 0, -0.35),
    [m, h] = L(r, r.L, 0);
  (M(
    e,
    Math.min(f, m),
    Math.min(p, h),
    Math.max(f, m),
    Math.max(p, h),
    u,
    s,
    !0,
  ),
    e.setMaterial(0.5, 0, 0.3, Ye),
    A(e, 16777215));
  let g = l ? null : Ke(t, n);
  if (
    (R(
      e,
      r,
      0,
      r.L,
      u,
      Fe,
      0.05,
      i.uv(
        g
          ? `b:${g.main}|${g.sub ?? ``}|${g.bg}|${g.fg}|${g.floor ?? ``}|${g.neon ? `n` : ``}`
          : Qe(t),
      ),
    ),
    n.awning !== void 0 && r.L < 14)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), A(e, n.awning));
    let [t, i] = L(r, 0.1, 0),
      [a, o] = L(r, r.L - 0.1, 0),
      [c, l] = L(r, 0.1, 1.2),
      [u, d] = L(r, r.L - 0.1, 1.2);
    e.quad(
      c,
      2.55,
      l,
      u,
      2.55,
      d,
      a,
      3.0500000000000003,
      o,
      t,
      3.0500000000000003,
      i,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    );
  }
  if (n.lanterns && a) {
    let t = i.uv(`lantern:${n.lanterns}`);
    (e.setMaterial(0.6, 0, 0.5, 3), A(e, 16777215));
    for (let n of [Math.min(1, r.L * 0.2), Math.max(r.L - 1, r.L * 0.8)]) {
      let [i, a] = L(r, n, 0.45);
      N(e, i, a, 1.9500000000000002, 2.85, 0.27, 0.27, r.nx, r.nz, t, t, t, !1);
    }
  }
}
function Qe(e) {
  let t = e.poi.name,
    [n, r, i] = F(t);
  return `b:brand.${t}||${n}|${r}||`;
}
function $e(e, t) {
  for (let n of t) {
    if (!n.poi) continue;
    let t = n.poi.name,
      [r, i, a] = F(t);
    e.need(
      `b:brand.${t}||${r}|${i}||`,
      384,
      48,
      _e({ main: `brand.${t}`, bg: r, fg: i, acc: a }),
    );
  }
}
var z = {
    ne: { minX: -942.75, minZ: 786.25, maxX: -878.25, maxZ: 919.25 },
    se: { minX: -942.75, minZ: 960.75, maxX: -878.25, maxZ: 996.75 },
    iikura: { minX: -942.75, minZ: 1009.25, maxX: -878.25, maxZ: 1052.75 },
    hie: { minX: -938.25, minZ: 447.25, maxX: -878.25, maxZ: 607.75 },
    akasaka: { minX: -1123.75, minZ: 276.25, maxX: -971.75, maxZ: 742.75 },
  },
  et = -923.4,
  tt = 899.55,
  B = { x0: -933, x1: -927, z0: 960.75, z1: 1052.75 },
  nt = { x0: -995.75, x1: -971.75, z0: 433.3, z1: 616.45 },
  V = { x0: -938.25, x1: -878.25, z0: 494.9, z1: 607.75 },
  rt = { x0: -896.3, x1: -878.25, z0: 478.9, z1: 494.9 },
  it = [
    {
      box: { minX: z.ne.minX, minZ: z.ne.minZ, maxX: et, maxZ: z.ne.maxZ },
      label: `roppongi-gaien-north (外苑東通り east row)`,
    },
    {
      box: { minX: et, minZ: tt, maxX: z.ne.maxX, maxZ: z.ne.maxZ },
      label: `roppongi-dori-north (六本木通り, east of the crossing)`,
    },
    {
      box: { ...z.se },
      label: `roppongi-southeast (crossing SE quadrant, 芋洗坂 lane)`,
    },
    {
      box: { ...z.iikura },
      label: `roppongi-iikura (芋洗坂 lane → 飯倉, embassy corner)`,
    },
    {
      box: { minX: nt.x0, minZ: nt.z0, maxX: nt.x1, maxZ: nt.z1 },
      label: `akasaka-sotobori-west (赤坂三丁目 frontage)`,
    },
    {
      box: { minX: V.x0, minZ: V.z0, maxX: V.x1, maxZ: V.z1 },
      label: `akasaka-hie-jinja (日枝神社)`,
    },
    {
      box: { minX: rt.x0, minZ: rt.z0, maxX: rt.x1, maxZ: rt.z1 },
      label: `akasaka-hie-jinja-ne (日枝神社, the hill's shoulder)`,
    },
  ],
  at = [
    { minX: -1e3, minZ: 780, maxX: -870, maxZ: 1060 },
    { minX: -1e3, minZ: 428, maxX: -876, maxZ: 622 },
  ],
  H = { x: -955, z: 940, deckTop: 12, deckHalf: 9, fascia: 1.9 },
  U = 0.12,
  W = z,
  ot = [
    {
      id: `gn`,
      along: `z`,
      span: [W.ne.minX + U, et - 0.1],
      dir: `W`,
      specs: [
        [
          W.ne.minZ + U,
          798,
          `restaurant`,
          7,
          `restaurant`,
          `roppongi.food.italian`,
          { corner: `N` },
        ],
        [798, 806, `pencil`, 9, `bar`, `roppongi.bar.luna`],
        [806, 815, `signbldg`, 10, `bar`, `roppongi.bar.velvet`],
        [815, 822, `pencil`, 8, `kebab`, `roppongi.food.turkish`],
        [822, 838, `karaoke`, 9, `karaoke`, `karaokejo`],
        [838, 845, `pencil`, 7, `bar`, `roppongi.bar.shamrock`, { v: 1 }],
        [845, 853, `pencil`, 10, `cafe`, `roppongi.bar.vino`],
        [853, 866, `club`, 8, `club`, `roppongi.club.big`],
        [866, 873, `pencil`, 9, `bar`, `roppongi.bar.gemini`, { v: 2 }],
        [
          873,
          882,
          `signbldg`,
          11,
          `restaurant`,
          `roppongi.food.sushi`,
          { v: 1 },
        ],
        [882, 890, `ramen`, 8, `ramen`, `tenkanihin`],
        [890, tt, `pencil`, 9, `bar`, `roppongi.bar.hideout`, { v: 3 }],
        [
          tt,
          W.ne.maxZ - U,
          `signbldg`,
          10,
          `bar`,
          `roppongi.bar.azur`,
          { corner: `S`, v: 2, ledOnCorner: !0 },
        ],
      ],
    },
    {
      id: `rn`,
      along: `x`,
      span: [tt + 0.1, W.ne.maxZ - U],
      dir: `S`,
      specs: [
        [et + 0.1, -915, `pencil`, 8, `bar`, `roppongi.bar.mirage`, { v: 4 }],
        [-915, -906, `gyudon`, 7, `gyudon`, `yoshidaya`],
        [-906, -897, `pencil`, 9, `club`, `roppongi.bar.eclipse`, { v: 5 }],
        [-897, -889, `pencil`, 6, `bar`, `roppongi.bar.goal`, { v: 6 }],
        [
          -889,
          W.ne.maxX - U,
          `konbini`,
          8,
          `konbini`,
          `dailyyamasaki`,
          {
            corner: `E`,
            poi: {
              id: `convenience-379`,
              dir: `S`,
              at: 5.75,
              width: 6,
              kind: `konbini`,
              name: `dailyyamasaki`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
      ],
    },
    {
      id: `sw`,
      along: `z`,
      span: [W.se.minX + U, B.x0 - 0.1],
      dir: `W`,
      specs: [
        [
          W.se.minZ + U,
          970.5,
          `konbini`,
          6,
          `konbini`,
          `lawsan`,
          {
            corner: `N`,
            lane: `E`,
            poi: {
              id: `convenience-384`,
              dir: `W`,
              at: 4.88,
              width: 6,
              kind: `konbini`,
              name: `lawsan`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
        [
          970.5,
          978.5,
          `pencil`,
          10,
          `bar`,
          `roppongi.bar.star`,
          { lane: `E`, v: 7 },
        ],
        [
          978.5,
          985,
          `pencil`,
          8,
          `bar`,
          `roppongi.bar.oasis`,
          { lane: `E`, v: 8 },
        ],
        [
          985,
          W.se.maxZ - U,
          `drug`,
          7,
          `drug`,
          `moondrug`,
          {
            corner: `S`,
            lane: `E`,
            poi: {
              id: `pharmacy-385`,
              dir: `W`,
              at: 4.67,
              width: 6,
              kind: `drug`,
              name: `moondrug`,
              category: `trade.drugstore.name`,
              hours: `10:00-23:00`,
            },
          },
        ],
      ],
    },
    {
      id: `sn`,
      along: `x`,
      span: [W.se.minZ + U, 984],
      dir: `N`,
      specs: [
        [B.x1 + 0.1, -895, `donco`, 9, `donco`, `doncoyote`, { corner: `W` }],
        [
          -895,
          W.se.maxX - U,
          `signbldg`,
          9,
          `bar`,
          `roppongi.bar.noir`,
          { corner: `E`, v: 3 },
        ],
      ],
    },
    {
      id: `ss`,
      along: `x`,
      span: [984, W.se.maxZ - U],
      dir: `S`,
      specs: [
        [
          B.x1 + 0.1,
          -912,
          `izakaya`,
          4,
          `izakaya`,
          `roppongi.food.izakaya`,
          { corner: `W` },
        ],
        [
          -912,
          -895,
          `restaurant`,
          6,
          `restaurant`,
          `roppongi.food.indian`,
          { v: 1 },
        ],
        [-895, W.se.maxX - U, `ramen`, 5, `ramen`, `niran`, { corner: `E` }],
      ],
    },
    {
      id: `iw`,
      along: `z`,
      span: [W.iikura.minX + U, B.x0 - 0.1],
      dir: `W`,
      specs: [
        [
          W.iikura.minZ + U,
          1018,
          `izakaya`,
          5,
          `izakaya`,
          `roppongi.food.yakitori`,
          { corner: `N`, lane: `E`, v: 1 },
        ],
        [
          1018,
          1026,
          `pencil`,
          8,
          `kebab`,
          `roppongi.food.kebab`,
          { lane: `E`, v: 9 },
        ],
        [
          1026,
          1034,
          `pencil`,
          6,
          `restaurant`,
          `roppongi.food.mexican`,
          { lane: `E`, v: 10 },
        ],
        [
          1034,
          W.iikura.maxZ - U,
          `konbini`,
          8,
          `konbini`,
          `lawsan`,
          {
            corner: `S`,
            lane: `E`,
            v: 1,
            poi: {
              id: `convenience-386`,
              dir: `W`,
              at: 13.75,
              width: 6,
              kind: `konbini`,
              name: `lawsan`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
      ],
    },
    {
      id: `in`,
      along: `x`,
      span: [W.iikura.minZ + U, 1026],
      dir: `N`,
      specs: [
        [
          -912,
          W.iikura.maxX - U,
          `arcade`,
          6,
          `arcade`,
          `titlestation`,
          {
            corner: `E`,
            poi: {
              id: `claw-388`,
              dir: `N`,
              at: 19.19,
              width: 7,
              kind: `arcade`,
              name: `titlestation`,
              category: `trade.arcade.name`,
              hours: `10:00-24:00`,
            },
          },
        ],
      ],
    },
    {
      id: `il`,
      along: `x`,
      span: [W.iikura.minZ + U, 1028],
      dir: `N`,
      specs: [
        [
          B.x1 + 0.1,
          -912,
          `restaurant`,
          5,
          `restaurant`,
          `roppongi.food.italian`,
          { corner: `W`, v: 2 },
        ],
      ],
    },
    {
      id: `is`,
      along: `x`,
      span: [1028, W.iikura.maxZ - U],
      dir: `S`,
      specs: [
        [
          B.x1 + 0.1,
          -905,
          `drug`,
          7,
          `drug`,
          `moondrug`,
          {
            corner: `W`,
            v: 1,
            poi: {
              id: `pharmacy-387`,
              dir: `S`,
              at: 3.96,
              width: 6,
              kind: `drug`,
              name: `moondrug`,
              category: `trade.drugstore.name`,
              hours: `10:00-23:00`,
            },
          },
        ],
      ],
    },
    {
      id: `ak`,
      along: `z`,
      span: [nt.x0 + 0.1, nt.x1 - U],
      dir: `E`,
      akasaka: !0,
      specs: [
        [nt.z0 + 0.1, 446, `hotel`, 12, `hotel`, `abahotel`],
        [446, 455, `korean`, 6, `yakiniku`, `roppongi.food.korean`],
        [455, 462, `pencil`, 8, `bar`, `roppongi.bar.aoi`, { v: 11 }],
        [462, 474, `yakiniku`, 7, `yakiniku`, `roppongi.food.yakiniku`],
        [
          474,
          481,
          `pencil`,
          9,
          `restaurant`,
          `roppongi.food.chinese`,
          { v: 12 },
        ],
        [481, 490, `izakaya`, 6, `izakaya`, `toriouzoku`],
        [490, 498, `konbini`, 8, `konbini`, `familymark`],
        [498, 506, `pencil`, 7, `bar`, `roppongi.bar.kyoko`, { v: 13 }],
        [506, 520, `glass`, 14, `lobby`, `roppongi.word.hotel`],
        [520, 528, `kappo`, 3, `kappo`, `roppongi.food.kappo`],
        [528, 536, `ramen`, 7, `ramen`, `niran`, { v: 1 }],
        [536, 545, `korean`, 8, `yakiniku`, `roppongi.food.samgyeop`, { v: 1 }],
        [545, 556, `signbldg`, 9, `bar`, `roppongi.akasaka.club`, { v: 4 }],
        [556, 564, `pencil`, 8, `izakaya`, `roppongi.word.izakaya`, { v: 14 }],
        [
          564,
          575,
          `restaurant`,
          7,
          `restaurant`,
          `roppongi.food.shabu`,
          { v: 3 },
        ],
        [575, 584, `pencil`, 9, `bar`, `roppongi.bar.orchid`, { v: 15 }],
        [584, 598, `office`, 12, `office`, `roppongi.word.hotel`, { v: 1 }],
        [598, 606, `drug`, 6, `drug`, `matsukiyoji`],
        [
          606,
          nt.z1 - 0.1,
          `glass`,
          10,
          `office`,
          `roppongi.word.hotel`,
          { v: 2 },
        ],
      ],
    },
  ],
  st = new Set();
function ct() {
  st.clear();
  let e = [],
    t = ot.map((t) =>
      t.specs.map(([n, r, i, a, o, s, c]) => {
        let l =
            t.along === `z`
              ? { x0: t.span[0], x1: t.span[1], z0: n, z1: r }
              : { x0: n, x1: r, z0: t.span[0], z1: t.span[1] },
          u = {
            id: `${t.id}-${e.length}`,
            ...l,
            dir: t.dir,
            floors: a,
            kind: i,
            shop: o,
            name: s,
            ...c,
          };
        return (e.push(u), t.akasaka && st.add(u.id), u);
      }),
    ),
    n = (e) => Le(e),
    r = t.flat();
  for (let e of r) {
    let t = (t) => {
        let i = 0;
        for (let a of r) {
          if (a === e) continue;
          let r = Math.min(a.z1, e.z1) - Math.max(a.z0, e.z0),
            o = Math.min(a.x1, e.x1) - Math.max(a.x0, e.x0);
          ((t === `E` &&
            Math.abs(a.x0 - e.x1) < 0.5 &&
            r > (e.z1 - e.z0) * 0.9) ||
            (t === `W` &&
              Math.abs(a.x1 - e.x0) < 0.5 &&
              r > (e.z1 - e.z0) * 0.9) ||
            (t === `S` &&
              Math.abs(a.z0 - e.z1) < 0.5 &&
              o > (e.x1 - e.x0) * 0.9) ||
            (t === `N` &&
              Math.abs(a.z1 - e.z0) < 0.5 &&
              o > (e.x1 - e.x0) * 0.9)) &&
            (i = Math.max(i, n(a)));
        }
        return i;
      },
      [i, a, o] = {
        W: [`N`, `S`, `E`],
        E: [`S`, `N`, `W`],
        N: [`E`, `W`, `S`],
        S: [`W`, `E`, `N`],
      }[e.dir];
    ((e.coverL = t(i)), (e.coverR = t(a)), (e.coverB = t(o)));
  }
  return e;
}
var G = 0.15,
  lt = (e) => e >= 18 || e < 5,
  ut = [
    [B.z0, 996.75],
    [1009.25, B.z1],
  ];
function dt() {
  let e = [],
    t = 0;
  for (let [n, r] of ut)
    for (let i = n + 5; i < r - 3; i += 12)
      (e.push([t & 1 ? B.x1 - 0.35 : B.x0 + 0.35, i, t]), t++);
  return e;
}
function ft(e) {
  return (t, n, r, i, a) => {
    let [o, s] = ut[e];
    (te(t, n, r, i, a, `#4c4c50`, 0.45),
      t.save(),
      t.beginPath(),
      t.rect(n, r, i, a),
      t.clip());
    for (let [e, c] of dt()) {
      if (c < o || c > s) continue;
      let l = n + ((e - B.x0) / (B.x1 - B.x0)) * i,
        u = r + ((c - o) / (s - o)) * a,
        d = (4.2 / (B.x1 - B.x0)) * i,
        f = (4.2 / (s - o)) * a;
      (t.save(), t.translate(l, u), t.scale(1, f / d));
      let p = t.createRadialGradient(0, 0, 0, 0, 0, d);
      (p.addColorStop(0, `rgba(140,128,108,0.95)`),
        p.addColorStop(0.55, `rgba(110,104,96,0.45)`),
        p.addColorStop(1, `rgba(76,76,80,0)`),
        (t.globalAlpha = 1),
        (t.fillStyle = p),
        t.beginPath(),
        t.arc(0, 0, d, 0, Math.PI * 2),
        t.fill(),
        t.restore());
    }
    t.restore();
  };
}
function pt(e) {
  e.need(`plate`, 120, 150, we);
  for (let t of [0, 1, 2, 3]) e.need(`aboard:${t}`, 96, 140, Te(t));
  (e.need(`saka:0`, 64, 256, Ee(0)), e.need(`saka:1`, 64, 256, Ee(1)));
  for (let t of [0, 1, 2]) e.need(`laneflag:${t}`, 48, 150, ke(t));
  (e.need(`taxi`, 96, 96, Oe),
    e.need(`girder`, 320, 100, De),
    e.need(
      `embassy-plate`,
      192,
      48,
      Ne(`roppongi.embassy.notice`, `#e8e4da`, `#202020`),
    ),
    e.need(
      `keibi`,
      128,
      40,
      Ne(`roppongi.embassy.keibi`, `#1d2a6b`, `#ffffff`),
    ),
    e.need(`wall:stone`, 64, 64, Ce(`stone`, `#cfc8b8`)),
    e.need(`lanepave:0`, 64, 384, ft(0)),
    e.need(`lanepave:1`, 64, 448, ft(1)),
    e.need(`win:blind`, 160, 60, Se(`blind`, 1)));
}
function mt(e) {
  let t = [],
    n = new l(1024, 1536),
    r = e.white(),
    i = (e, r) => {
      (n.reset(), r(n), t.push({ name: `kit:${e}`, geo: f(n, `rop-${e}`) }));
    };
  i(`plate`, (t) => {
    (t.setMaterial(0.6, 0.4, 0, 0),
      A(t, 9080982),
      N(t, 0, 0.13, 2.05, 2.6, 0.03, 0.02, 0, 1, r),
      t.setMaterial(0.7, 0, 0.05, 1),
      A(t, 16777215),
      N(
        t,
        0,
        0.17,
        1.98,
        2.62,
        0.25,
        0.012,
        0,
        1,
        r,
        e.uv(`plate`),
        e.uv(`wall:concrete`),
      ));
  });
  for (let t of [0, 1, 2, 3])
    i(`aboard:${t}`, (n) => {
      let r = e.uv(`aboard:${t}`);
      (n.setMaterial(0.7, 0, 0.14, 1), A(n, 16777215));
      let i = 0.2;
      (n.quad(
        -0.32,
        0,
        i,
        0.32,
        0,
        i,
        0.32,
        1.05,
        0.02,
        -0.32,
        1.05,
        0.02,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
        n.quad(
          0.32,
          0,
          -0.2,
          -0.32,
          0,
          -0.2,
          -0.32,
          1.05,
          -0.02,
          0.32,
          1.05,
          -0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ));
    });
  for (let t of [0, 1, 2])
    i(`lane-lamp:${t}`, (n) => {
      (n.setMaterial(0.6, 0.5, 0, 0),
        A(n, 2763824),
        ie(n, 0, 0, 0, 4.4, 0.06, r, 6),
        N(n, 0, 0.35, 4.3, 4.38, 0.03, 0.38, 0, 1, r),
        n.setMaterial(0.3, 0, 0.6, 1),
        A(n, 16773328),
        N(n, 0, 0.7, 4, 4.32, 0.16, 0.16, 0, 1, r),
        n.setMaterial(0.7, 0, 0.16, 3),
        A(n, 16777215));
      let i = e.uv(`laneflag:${t}`);
      N(n, 0, 0.3, 2.3, 3.7, 0.22, 0.012, 1, 0, i, i, i);
    });
  (i(`saka`, (t) => {
    (t.setMaterial(0.85, 0, 0, 0),
      A(t, 16777215),
      N(
        t,
        0,
        0,
        0,
        1.5,
        0.12,
        0.12,
        0,
        1,
        e.uv(`saka:1`),
        e.uv(`saka:0`),
        e.uv(`saka:1`),
        !1,
      ),
      A(t, 10130568));
    let n = 1.5,
      i = 0.13;
    (t.quad(
      -0.13,
      n,
      i,
      i,
      n,
      i,
      0,
      1.66,
      0,
      0,
      1.66,
      0,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
      t.quad(
        i,
        n,
        -0.13,
        -0.13,
        n,
        -0.13,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
      t.quad(
        i,
        n,
        i,
        i,
        n,
        -0.13,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
      t.quad(
        -0.13,
        n,
        -0.13,
        -0.13,
        n,
        i,
        0,
        1.66,
        0,
        0,
        1.66,
        0,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ));
  }),
    i(`taxi`, (t) => {
      (t.setMaterial(0.6, 0.4, 0, 0),
        A(t, 10133668),
        ie(t, 0, 0, 0, 2.9, 0.045, r, 6),
        t.setMaterial(0.6, 0, 0.18, 3),
        A(t, 16777215),
        N(
          t,
          0,
          0.05,
          2.15,
          2.85,
          0.35,
          0.02,
          0,
          1,
          r,
          e.uv(`taxi`),
          e.uv(`taxi`),
        ));
    }));
  for (let e of [0, 1])
    i(`tree:${e}`, (t) => {
      (t.setMaterial(0.9, 0, 0, 0),
        A(t, 5916214),
        ie(t, 0, 0, 0, 3.4, 0.18, r, 5));
      let n = e ? 4090420 : 3103280;
      for (let [e, i, a, o] of [
        [0, 4.4, 0, 2.6],
        [0.9, 5.6, 0.5, 2],
        [-0.7, 6.2, -0.4, 1.7],
      ])
        (A(t, n, 0.9 + (e + a) * 0.08),
          N(
            t,
            e,
            a,
            i - o * 0.75,
            i + o * 0.75,
            o,
            o * 0.92,
            0.7071,
            0.7071,
            r,
          ),
          A(t, n, 1.08),
          N(t, e, a, i - o * 0.55, i + o * 0.9, o * 0.8, o * 0.8, 0, 1, r));
    });
  return (
    i(`toro`, (e) => {
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, 11052186),
        N(e, 0, 0, 0, 0.3, 0.38, 0.38, 0, 1, r),
        N(e, 0, 0, 0.3, 1.2, 0.13, 0.13, 0, 1, r),
        N(e, 0, 0, 1.2, 1.32, 0.3, 0.3, 0, 1, r),
        e.setMaterial(0.6, 0, 0.55, 1),
        A(e, 16769184),
        N(e, 0, 0, 1.32, 1.7, 0.2, 0.2, 0, 1, r),
        e.setMaterial(0.9, 0, 0, 0),
        A(e, 10131084),
        N(e, 0, 0, 1.7, 1.86, 0.42, 0.42, 0, 1, r),
        N(e, 0, 0, 1.86, 2.02, 0.12, 0.12, 0, 1, r));
    }),
    t
  );
}
function ht(e, t, i) {
  let o = e.plan,
    s = [],
    c = [],
    l = [],
    u = new n(r(`rop-kit`, 1)),
    d = o.dataset.sidewalkHeight ?? 0.15,
    f = p(o);
  for (let e of [
    { id: `w-gaien-higashi`, t0: 780, t1: 1062 },
    { id: `w-roppongi-w`, t0: -1e3, t1: -880 },
    { id: `w-sotobori-akasaka`, t0: 430, t1: 618 },
  ]) {
    let t = o.roads.find((t) => t.id === e.id);
    if (!t) continue;
    let n = f.nodesOf(t),
      r = 0;
    for (let a = 0; a + 1 < n.length; a++)
      for (let o of [-1, 1]) {
        let c = f.primaryLights(t, n[a], n[a + 1], o);
        if (c && c.kind === `tall`)
          for (let n of c.ts) {
            if (n < e.t0 || n > e.t1 || ((r++ & 1) == 1 && i < 1)) continue;
            let a = o * (t.halfWidth + 0.55),
              c = t.axis === `z` ? t.at + a : n,
              l = t.axis === `z` ? n : t.at + a;
            s.push({
              model: `plate`,
              x: c,
              y: d,
              z: l,
              fx: t.axis === `z` ? o : 0,
              fz: t.axis === `z` ? 0 : o,
              range: 90,
            });
          }
      }
  }
  for (let e of t)
    if (e.shop === `bar` || e.shop === `club`)
      for (let t of [e.dir, e.lane].filter(Boolean)) {
        let n = Ue(e, t),
          [r, i] = L(n, n.L * (0.3 + u.next() * 0.4), 0.75),
          o = t === e.lane;
        s.push({
          model: `aboard:${Math.floor(u.next() * 4)}`,
          x: r,
          y: o ? G + a.GROUND : d,
          z: i,
          fx: n.nx,
          fz: n.nz,
          range: 110,
          when: lt,
        });
      }
  for (let [e, t, n] of dt())
    (s.push({
      model: `lane-lamp:${n % 3}`,
      x: e,
      y: G + a.GROUND,
      z: t,
      fx: n & 1 ? -1 : 1,
      fz: 0,
      range: 160,
    }),
      c.push({ x: e, z: t, r: 0.08, h: 4.4 }));
  (s.push({
    model: `saka`,
    x: B.x0 + 0.5,
    y: G + a.GROUND,
    z: B.z0 + 1.6,
    fx: 0,
    fz: -1,
    range: 90,
  }),
    s.push({
      model: `saka`,
      x: B.x1 - 0.5,
      y: G + a.GROUND,
      z: B.z1 - 1.6,
      fx: 0,
      fz: 1,
      range: 90,
    }),
    c.push(
      { x: B.x0 + 0.5, z: B.z0 + 1.6, r: 0.15, h: 1.7 },
      { x: B.x1 - 0.5, z: B.z1 - 1.6, r: 0.15, h: 1.7 },
    ));
  let m = o.roads.find((e) => e.id === `w-roppongi-w`);
  if (m) {
    let e = m.at + m.halfWidth + 0.75;
    (s.push({ model: `taxi`, x: -919, y: d, z: e, fx: 0, fz: -1, range: 140 }),
      c.push({ x: -919, z: e, r: 0.06, h: 2.9 }));
  }
  for (let [e, t] of [
    [-901.5, 1030],
    [-901.5, 1049],
    [-882, 1029.5],
    [-892, 1049.2],
  ])
    s.push({
      model: `tree:${(e + t) & 1}`,
      x: e,
      y: G,
      z: t,
      fx: 0,
      fz: 1,
      range: 260,
    });
  return { instances: s, circles: c, obbs: l };
}
function gt(e, t) {
  let n = t.white(),
    r = G + a.GROUND;
  (ut.forEach(([i, o], s) => {
    (e.setMaterial(0.92, 0, 0.5, 3),
      A(e, 16774890),
      M(e, B.x0, i, B.x1, o, r, t.uv(`lanepave:${s}`)),
      e.setMaterial(0.92, 0, 0, 0),
      A(e, 12104874),
      M(e, B.x0, i, B.x0 + 0.45, o, r + a.PAINT, n),
      M(e, B.x1 - 0.45, i, B.x1, o, r + a.PAINT, n),
      A(e, 15263970),
      M(e, B.x0 + 0.6, i + 0.6, B.x0 + 0.72, o - 0.6, r + a.PAINT, n),
      M(e, B.x1 - 0.72, i + 0.6, B.x1 - 0.6, o - 0.6, r + a.PAINT, n));
  }),
    A(e, 15790314),
    M(e, B.x0 + 0.8, 995.9, B.x1 - 0.8, 996.35, r + a.PAINT, n),
    M(e, B.x0 + 0.8, 1051.9, B.x1 - 0.8, 1052.35, r + a.PAINT, n));
}
function _t(e, t) {
  let n = t.uv(`girder`),
    r = 6.4,
    i = H.deckTop - 0.25,
    a = i - 2;
  (e.setMaterial(0.5, 0, 0.3, 3), A(e, 16777215));
  let o = H.z - H.deckHalf - 0.14,
    s = H.z + H.deckHalf + 0.14;
  (j(e, H.x + r / 2, o, H.x - r / 2, o, a, i, n),
    j(e, H.x - r / 2, s, H.x + r / 2, s, a, i, n),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 3817544));
  let c = t.white();
  for (let t of [o, s])
    N(
      e,
      H.x,
      t < H.z ? t + 0.07 : t - 0.07,
      a - 0.05,
      i + 0.05,
      3.25,
      0.045,
      0,
      1,
      c,
    );
}
function vt(e, t) {
  let n = t.white(),
    r = t.uv(`wall:stone`),
    i = { x0: -905, x1: -878.37, z0: 1026, z1: 1052.63 },
    o = 0.35,
    s = 1035,
    c = 1042.5,
    l = 4.2,
    u = [];
  (e.setMaterial(0.9, 0, 0, 0), A(e, 16777215));
  let d = (t, n, i, a) => {
    (N(
      e,
      (t + i) / 2,
      (n + a) / 2,
      0.04999999999999999,
      2.9499999999999997,
      (i - t) / 2,
      (a - n) / 2,
      0,
      1,
      r,
    ),
      u.push({
        x: (t + i) / 2,
        z: (n + a) / 2,
        hx: (i - t) / 2,
        hz: (a - n) / 2,
        y0: 0,
        y1: 2.9499999999999997,
      }));
  };
  (d(i.x0, i.z1 - o, i.x1, i.z1),
    d(i.x0, i.z0, i.x0 + o, i.z1),
    d(i.x0, i.z0, i.x1, i.z0 + o),
    d(i.x1 - o, i.z0, i.x1, s),
    d(i.x1 - o, c, i.x1, i.z1),
    d(i.x1 - l, 1034.65, i.x1, s),
    d(i.x1 - l, c, i.x1, 1042.85),
    A(e, 9077880));
  for (let [t, r, a, l] of [
    [i.x0, i.z1 - o, i.x1, i.z1],
    [i.x1 - o, i.z0, i.x1, s],
    [i.x1 - o, c, i.x1, i.z1],
  ])
    M(e, t - 0.05, r - 0.05, a + 0.05, l + 0.05, 2.9599999999999995, n);
  (e.setMaterial(0.5, 0.7, 0, 0), A(e, 2764340));
  let f = i.x1 - l - o / 2;
  for (let t = 1035.2; t < 1042.4; t += 0.22)
    N(e, f, t, G, 2.35, 0.025, 0.025, 0, 1, n);
  (N(e, f, 2077.5 / 2, 2.25, 2.4, 7.5 / 2, 0.05, 0, 1, n),
    N(e, f, 2077.5 / 2, 0.25, 0.37, 7.5 / 2, 0.05, 0, 1, n),
    u.push({ x: f, z: 2077.5 / 2, hx: 0.08, hz: 7.5 / 2, y0: 0, y1: 2.4 }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215),
    j(
      e,
      i.x1 - 3.1,
      1035.025,
      i.x1 - 0.5,
      1035.025,
      1.45,
      2.1,
      t.uv(`embassy-plate`),
    ));
  let p = i.x1 - 1.9;
  (e.setMaterial(0.6, 0.1, 0, 0),
    A(e, 15921902),
    N(e, p + 0.6, 1041.15, G, 2.4499999999999997, 0.6, 0.65, 0, 1, n),
    e.setMaterial(0.6, 0, 0.2, 1),
    A(e, 16777215),
    j(e, p + 1.225, 1041.8, p + 1.225, 1040.5, 2, 2.35, t.uv(`keibi`)),
    e.setMaterial(0.2, 0.2, 0.35, 1),
    A(e, 14215408),
    j(e, p + 1.225, 1041.6, p + 1.225, 1040.7, 1.15, 1.8499999999999999, n),
    e.setMaterial(0.6, 0.3, 0, 0),
    A(e, 3816e3),
    M(e, p - 0.05, 1040.45, p + 1.25, 1041.85, 2.46, n),
    u.push({
      x: p + 0.6,
      z: 1041.15,
      hx: 0.6,
      hz: 0.65,
      y0: 0,
      y1: 2.4499999999999997,
    }));
  let m = { x0: -899, x1: -886.5, z0: 1032.5, z1: 1046 };
  (e.setMaterial(0.8, 0, 0, 0),
    A(e, 15789284),
    N(
      e,
      (m.x0 + m.x1) / 2,
      (m.z0 + m.z1) / 2,
      G,
      11.35,
      (m.x1 - m.x0) / 2,
      (m.z1 - m.z0) / 2,
      0,
      1,
      n,
    ),
    e.setMaterial(0.2, 0.3, 0.2, 35),
    A(e, 16777215));
  let h = t.uv(`win:blind`);
  for (let t = 0; t < 3; t++) {
    let n = 1.15 + t * 3.4;
    for (let t = m.z0 + 1.2; t < m.z1 - 1.5; t += 3.1)
      j(e, m.x1 + 0.02, t + 2, m.x1 + 0.02, t, n, n + 2.1, h);
    for (let t = m.x0 + 1.2; t < m.x1 - 1.5; t += 3.1)
      j(e, t, m.z1 + 0.02, t + 2, m.z1 + 0.02, n, n + 2.1, h);
  }
  return (
    u.push({
      x: (m.x0 + m.x1) / 2,
      z: (m.z0 + m.z1) / 2,
      hx: (m.x1 - m.x0) / 2,
      hz: (m.z1 - m.z0) / 2,
      y0: 0,
      y1: 11.35,
    }),
    e.setMaterial(0.95, 0, 0, 16),
    A(e, 6261322),
    M(e, i.x0 + o, i.z0 + o, i.x1 - l - o, i.z1 - o, G + a.GROUND, n),
    e.setMaterial(0.4, 0.8, 0, 0),
    A(e, 14211292),
    ie(e, -884, 1048.5, G, 9.65, 0.06, n, 6),
    u
  );
}
var K = G + 7.45,
  q = { x0: -931, x1: -879.2, z0: 499, z1: 600 },
  yt = [
    [q.x0, q.z0, q.x1, q.z1],
    [-896, 480, q.x1, q.z0],
  ],
  J = { xb: -936.8, xt: -925, z0: 542, z1: 548 },
  Y = { xb: -936.6, xt: -925, z0: 508, z1: 510.8 },
  X = { xb: -878.6, xt: -891, z0: 516, z1: 520 },
  Z = { x0: -916, x1: -908, zb: 607.3, zt: 594 },
  bt = [
    [q.x0, J.z0, J.xt, J.z1],
    [q.x0, Y.z0, Y.xt, Y.z1],
    [X.xt, X.z0, q.x1, X.z1],
    [Z.x0, Z.zt, Z.x1, q.z1],
  ],
  Q = 14173482,
  xt = 6197114;
function St(e) {
  (e.need(`gaku:hie`, 48, 128, je(`roppongi.hie.name`)),
    e.need(`gaku:inari`, 40, 128, je(`roppongi.hie.inari`)),
    e.need(`gaku:sannobashi`, 48, 96, je(`roppongi.hie.sannobashi`)),
    e.need(`hieboard`, 160, 120, Me),
    e.need(
      `otokozaka`,
      160,
      48,
      Ne(`roppongi.hie.otokozaka`, `#4a2e18`, `#ffffff`),
    ),
    e.need(`shagohyo`, 40, 200, Tt),
    e.need(`lantern:sanno`, 48, 80, Ae(`roppongi.hie.sanno`, `#f4ead0`)),
    e.need(`hono`, 24, 96, Et),
    e.need(`wall:ishigaki`, 64, 64, Ce(`stone`, `#9e9a90`)));
  for (let t of [0, 1, 2]) e.need(`ishigaki:${t}`, 96, 96, Ct(t));
  e.need(`gravel`, 96, 96, wt);
}
function Ct(e) {
  return (t, i, a, o, s) => {
    let c = new n(r(`rop-ishigaki`, e)),
      l = [
        [158, 154, 144],
        [148, 146, 138],
        [166, 160, 148],
      ][e % 3];
    O(t, i, a, o, s, `#5a5852`);
    let u = s / 5;
    for (let e = 0; e < 5; e++) {
      let n = i - c.next() * o * 0.3;
      for (; n < i + o;) {
        let r = o * (0.22 + c.next() * 0.22),
          i = 0.86 + c.next() * 0.22;
        ((t.globalAlpha = 1),
          (t.fillStyle = `rgb(${(l[0] * i) | 0},${(l[1] * i) | 0},${(l[2] * i) | 0})`),
          t.fillRect(n + 1.5, a + e * u + 1.5, r - 3, u - 3),
          (t.fillStyle = `rgba(255,255,255,0.12)`),
          t.fillRect(n + 1.5, a + e * u + 1.5, r - 3, 2),
          (t.fillStyle = `rgba(0,0,0,0.14)`),
          t.fillRect(n + 1.5, a + e * u + u - 4, r - 3, 2.5),
          (n += r));
      }
    }
    for (let e = 0; e < 7; e++)
      ((t.globalAlpha = 0.08 + c.next() * 0.1),
        (t.fillStyle = `#2a2820`),
        t.fillRect(
          i + c.next() * o,
          a,
          o * (0.02 + c.next() * 0.03),
          s * (0.4 + c.next() * 0.6),
        ));
    for (let e = 0; e < 10; e++)
      ((t.globalAlpha = 0.18 + c.next() * 0.2),
        (t.fillStyle = `#4a6a34`),
        t.beginPath(),
        t.ellipse(
          i + c.next() * o,
          a + s * (0.7 + c.next() * 0.3),
          o * (0.04 + c.next() * 0.08),
          s * (0.03 + c.next() * 0.05),
          0,
          0,
          Math.PI * 2,
        ),
        t.fill());
    t.globalAlpha = 1;
  };
}
function wt(e, t, i, a, o) {
  let s = new n(r(`rop-gravel`, 1));
  O(e, t, i, a, o, `#cdc8ba`);
  for (let n = 0; n < 900; n++) {
    let n = s.next();
    ((e.fillStyle = n < 0.4 ? `#b6b0a2` : n < 0.75 ? `#e2ddd0` : `#a29c8e`),
      e.fillRect(
        t + s.next() * a,
        i + s.next() * o,
        1.5 + s.next() * 1.5,
        1.5 + s.next(),
      ));
  }
}
function Tt(e, t, n, r, i) {
  (O(e, t, n, r, i, `#b4b0a6`),
    _(
      e,
      P(`roppongi.hie.name`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.94,
      r * 0.7,
      `#1a1a1a`,
      y(),
      `900`,
    ));
}
function Et(e, t, n, r, i) {
  (O(e, t, n, r, i, `#d8452a`),
    _(
      e,
      P(`roppongi.hie.hono`),
      t + r / 2,
      n + i * 0.1,
      n + i * 0.6,
      r * 0.7,
      `#141414`,
      y(),
      `900`,
    ));
}
function Dt(e, t, n, r, i, a) {
  let o = t[1][0] - t[0][0],
    s = t[1][1] - t[0][1],
    c = t[1][2] - t[0][2],
    l = t[3][0] - t[0][0],
    u = t[3][1] - t[0][1],
    d = t[3][2] - t[0][2],
    f =
      (s * d - c * u) * n + (c * l - o * d) * r + (o * u - s * l) * i >= 0
        ? t
        : [t[0], t[3], t[2], t[1]];
  e.quad(
    f[0][0],
    f[0][1],
    f[0][2],
    f[1][0],
    f[1][1],
    f[1][2],
    f[2][0],
    f[2][1],
    f[2][2],
    f[3][0],
    f[3][1],
    f[3][2],
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  );
}
function Ot(e, t, n, r, i, a, o, s, c, l) {
  let u = t.white(),
    d = Math.max(2, Math.round((s - o) / 0.17)),
    f = (r - n) / d,
    p = (s - o) / d,
    m = Math.sign(r - n);
  e.setMaterial(0.9, 0, 0, 0);
  for (let t = 0; t < d; t++) {
    let r = n + t * f,
      s = o + t * p;
    (A(e, 12104358),
      Dt(
        e,
        [
          [r, s, i],
          [r, s, a],
          [r, s + p, a],
          [r, s + p, i],
        ],
        -m,
        0,
        0,
        u,
      ),
      A(e, 13288632),
      Dt(
        e,
        [
          [r, s + p, i],
          [r + f, s + p, i],
          [r + f, s + p, a],
          [r, s + p, a],
        ],
        0,
        1,
        0,
        u,
      ));
  }
  let h = t.uv(`wall:ishigaki`),
    g = o + ((s - o) * (l - n)) / (r - n);
  for (let [t, d, f] of [
    [i, i - 0.4, 1],
    [a, a + 0.4, -1],
  ])
    (A(e, 11052186),
      Dt(
        e,
        [
          [n, o, t],
          [r, s, t],
          [r, s + c, t],
          [n, o + c, t],
        ],
        0,
        0,
        f,
        u,
      ),
      A(e, 9341568),
      Dt(
        e,
        [
          [n, o + c, t],
          [r, s + c, t],
          [r, s + c, d],
          [n, o + c, d],
        ],
        0,
        1,
        0,
        u,
      ),
      A(e, 16777215),
      Dt(
        e,
        [
          [n, G - 0.05, d],
          [l, G - 0.05, d],
          [l, g + c, d],
          [n, o + c, d],
        ],
        0,
        0,
        -f,
        h,
      ),
      A(e, 10131084),
      Dt(
        e,
        [
          [n, G - 0.05, Math.min(t, d)],
          [n, G - 0.05, Math.max(t, d)],
          [n, o + c, Math.max(t, d)],
          [n, o + c, Math.min(t, d)],
        ],
        -m,
        0,
        0,
        u,
      ));
}
function kt(e, t, n, r, i, a, o, s, c) {
  let l = t.white(),
    u = (e) => (s ? [n + e, r] : [n, r + e]),
    d = Math.max(0.22, a * 0.05);
  for (let t of [-i, i]) {
    let [n, r] = u(t);
    (e.setMaterial(0.7, 0, 0, 0),
      A(e, Q),
      ie(e, n, r, o, o + a, d, l, 10),
      A(e, 1710618),
      ie(e, n, r, o, o + 0.5, d * 1.12, l, 10));
  }
  let f = +!!s,
    p = +!s,
    m = (t, a, o, s, c) => {
      (A(e, c), N(e, n, r, t, a, i + o, s, -p, f, l));
    };
  (e.setMaterial(0.7, 0, 0, 0),
    m(o + a * 0.72, o + a * 0.72 + d * 1.1, d * 2.2, d * 0.55, Q),
    m(o + a, o + a + d * 1, d * 3.2, d * 0.8, Q),
    m(o + a + d * 1, o + a + d * 1.7, d * 4.2, d * 0.95, 1710618));
  let h = o + a * 0.72 + d * 1.1;
  (A(e, Q),
    N(e, n, r, h, o + a, d * 0.6, d * 0.5, -p, f, l),
    e.setMaterial(0.6, 0, 0.12, 1),
    A(e, 16777215));
  let g = Math.min(i * 0.55, 1),
    _ = (o + a - h) * 0.85,
    v = t.uv(c);
  (N(
    e,
    n,
    r,
    h + (o + a - h - _) / 2,
    h + (o + a - h + _) / 2,
    g / 2,
    d * 0.62,
    -p,
    f,
    l,
    v,
    v,
  ),
    e.setMaterial(0.7, 0, 0, 0),
    A(e, Q));
  let y = o + a + d * 1.7,
    b = y + i * 0.42,
    x = d * 0.5;
  for (let t of [-1, 1]) {
    let [n, r] = u(t * i * 0.92),
      [a, o] = u(0);
    for (let t of [-x, x]) {
      let i = s ? 0 : t,
        c = s ? t : 0;
      (e.quad(
        n + i,
        y,
        r + c,
        a + i,
        b,
        o + c,
        a + i,
        b + d * 0.9,
        o + c,
        n + i,
        y + d * 0.9,
        r + c,
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ),
        e.quad(
          n + i,
          y + d * 0.9,
          r + c,
          a + i,
          b + d * 0.9,
          o + c,
          a + i,
          b,
          o + c,
          n + i,
          y,
          r + c,
          l.u0,
          l.v0,
          l.u1,
          l.v1,
        ));
    }
    A(e, 1710618);
    let c = [n - (s ? 0 : x), y + d * 0.9, r - (s ? x : 0)],
      f = [a - (s ? 0 : x), b + d * 0.9, o - (s ? x : 0)],
      p = [a + (s ? 0 : x), b + d * 0.9, o + (s ? x : 0)],
      m = [n + (s ? 0 : x), y + d * 0.9, r + (s ? x : 0)];
    (e.quad(
      c[0],
      c[1],
      c[2],
      f[0],
      f[1],
      f[2],
      p[0],
      p[1],
      p[2],
      m[0],
      m[1],
      m[2],
      l.u0,
      l.v0,
      l.u1,
      l.v1,
    ),
      e.quad(
        m[0],
        m[1],
        m[2],
        p[0],
        p[1],
        p[2],
        f[0],
        f[1],
        f[2],
        c[0],
        c[1],
        c[2],
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ),
      A(e, Q));
  }
  N(e, n, r, y, b, d * 0.35, d * 0.4, -p, f, l);
}
function At(e, t, n, r, i, o, s, c) {
  let l = t.white();
  (e.setMaterial(0.7, 0, 0, 0), A(e, Q));
  for (let t of [-i, i]) N(e, n, r + t, s, s + o, 0.09, 0.09, 1, 0, l);
  if (
    (N(e, n, r, s + o * 0.78, s + o * 0.78 + 0.1, 0.07, i + 0.18, 1, 0, l),
    N(e, n, r, s + o, s + o + 0.12, 0.09, i + 0.3, 1, 0, l),
    A(e, 1710618),
    N(e, n, r, s + o + 0.12, s + o + 0.2, 0.11, i + 0.38, 1, 0, l),
    c)
  ) {
    (e.setMaterial(0.7, 0, 0, 0), A(e, 16777215));
    let o = t.uv(`hono`);
    for (let t of [-i, i])
      j(
        e,
        n - 0.1 - a.DETAIL,
        r + t + 0.08,
        n - 0.1 - a.DETAIL,
        r + t - 0.08,
        s + 0.5,
        s + 1.6,
        o,
      );
  }
}
function jt(e, t, n, r, i, a, o, s, c, l, u) {
  let d = t.white();
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 10131084),
    N(
      e,
      (n + i) / 2,
      (r + a) / 2,
      o - 0.05,
      o + 0.6,
      (i - n) / 2 + 0.5,
      (a - r) / 2 + 0.5,
      0,
      1,
      d,
    ));
  let f = o + 0.6;
  (e.setMaterial(0.85, 0, 0, 0), A(e, 15920868));
  let p = u ? 1.6 : 0;
  (N(
    e,
    (n + p + i) / 2,
    (r + a) / 2,
    f,
    f + s,
    (i - n - p) / 2,
    (a - r) / 2,
    0,
    1,
    d,
    void 0,
    void 0,
    !1,
  ),
    e.setMaterial(0.7, 0, 0, 0),
    A(e, Q));
  for (
    let t = r;
    t <= a + 0.01;
    t += (a - r) / Math.max(1, Math.round((a - r) / 3))
  )
    (N(e, n + 0.02, t, f, f + s, 0.2, 0.2, 0, 1, d),
      N(e, i - 0.02, t, f, f + s, 0.2, 0.2, 0, 1, d));
  for (
    let t = n;
    t <= i + 0.01;
    t += (i - n) / Math.max(1, Math.round((i - n) / 3))
  )
    (N(e, t, r + 0.02, f, f + s, 0.2, 0.2, 0, 1, d),
      N(e, t, a - 0.02, f, f + s, 0.2, 0.2, 0, 1, d));
  (N(
    e,
    (n + i) / 2,
    (r + a) / 2,
    f + s - 0.5,
    f + s,
    (i - n) / 2 + 0.22,
    (a - r) / 2 + 0.22,
    0,
    1,
    d,
    void 0,
    void 0,
    !1,
  ),
    u &&
      (e.setMaterial(0.6, 0, 0.35, 1),
      A(e, 16767130),
      j(e, n + p - 0.02, r + 0.6, n + p - 0.02, a - 0.6, f, f + s - 0.6, d)),
    e.setMaterial(0.6, 0.3, 0, 0),
    A(e, xt));
  let m = n - c,
    h = i + c,
    g = r - c,
    _ = a + c,
    v = f + s,
    y = v + l,
    b = a - r >= i - n,
    x = (b ? i - n : a - r) / 2 + c,
    S = b ? (m + h) / 2 : m + x,
    C = b ? (m + h) / 2 : h - x,
    w = b ? g + x : (g + _) / 2,
    T = b ? _ - x : (g + _) / 2,
    E = d;
  (e.quad(m, v, g, m, v, _, S, y, T, S, y, w, E.u0, E.v0, E.u1, E.v1),
    e.quad(h, v, _, h, v, g, C, y, w, C, y, T, E.u0, E.v0, E.u1, E.v1),
    e.quad(h, v, g, m, v, g, S, y, w, C, y, w, E.u0, E.v0, E.u1, E.v1),
    e.quad(m, v, _, h, v, _, C, y, T, S, y, T, E.u0, E.v0, E.u1, E.v1),
    e.setMaterial(0.9, 0, 0, 0),
    A(e, 4864554),
    M(e, m, g, h, _, v - 0.02, d, !0),
    A(e, 4091484),
    N(
      e,
      (S + C) / 2,
      (w + T) / 2,
      y - 0.1,
      y + 0.35,
      Math.abs(C - S) / 2 + 0.3,
      Math.abs(T - w) / 2 + 0.3,
      0,
      1,
      d,
    ));
}
function Mt(e, t, n) {
  let i = t.white(),
    o = { obbs: [], circles: [], floors: [], instances: [] },
    s = [0, 1, 2].map((e) => t.uv(`ishigaki:${e}`)),
    c = t.uv(`gravel`),
    l = [...new Set([...yt, ...bt].flatMap((e) => [e[0], e[2]]))].sort(
      (e, t) => e - t,
    ),
    u = [...new Set([...yt, ...bt].flatMap((e) => [e[1], e[3]]))].sort(
      (e, t) => e - t,
    ),
    d = (e, t, n) =>
      e.some((e) => t > e[0] && t < e[2] && n > e[1] && n < e[3]),
    f = (e, t) => d(yt, e, t) && !d(bt, e, t);
  (e.setMaterial(0.95, 0, 0, 0), A(e, 13947076));
  for (let t = 0; t + 1 < l.length; t++) {
    let n = l[t],
      r = l[t + 1],
      i = (n + r) / 2,
      a = -1;
    for (let t = 0; t + 1 <= u.length; t++) {
      let s = t + 1 < u.length && f(i, (u[t] + u[t + 1]) / 2);
      if ((s && a < 0 && (a = t), !s && a >= 0)) {
        let s = u[a],
          l = u[t],
          d = Math.max(1, Math.round((r - n) / 5)),
          f = Math.max(1, Math.round((l - s) / 5));
        A(e, 16777215);
        for (let t = 0; t < d; t++)
          for (let i = 0; i < f; i++)
            M(
              e,
              n + ((r - n) * t) / d,
              s + ((l - s) * i) / f,
              n + ((r - n) * (t + 1)) / d,
              s + ((l - s) * (i + 1)) / f,
              K,
              c,
            );
        (o.obbs.push({
          x: i,
          z: (s + l) / 2,
          hx: (r - n) / 2,
          hz: (l - s) / 2,
          y0: 0,
          y1: K,
        }),
          (a = -1));
      }
    }
  }
  for (let [e, t, n, r] of yt)
    o.floors.push({
      cx: (e + n) / 2,
      cz: (t + r) / 2,
      hx: (n - e) / 2,
      hz: (r - t) / 2,
      y0: K,
      y1: K,
      heading: 0,
    });
  (A(e, 15262938),
    M(e, J.xt, 542.5, -914, 547.5, K + a.GROUND, i),
    M(e, Z.x0 + 1, 568, Z.x1 - 1, Z.zt, K + a.GROUND, i),
    M(e, -896.5, X.z0 + 0.5, X.xt, X.z1 - 0.5, K + a.GROUND, i),
    e.setMaterial(0.92, 0, 0, 0));
  let p = [],
    m = [];
  for (let t = 0; t + 1 < l.length; t++)
    for (let n = 0; n + 1 < u.length; n++) {
      let i = l[t],
        a = l[t + 1],
        o = u[n],
        c = u[n + 1],
        h = (i + a) / 2,
        g = (o + c) / 2;
      if (!f(h, g)) continue;
      let _ = [
        [f(i - 0.01, g), -1, 0, i, o, i, c, i - 0.01, g],
        [f(a + 0.01, g), 1, 0, a, o, a, c, a + 0.01, g],
        [f(h, o - 0.01), 0, -1, i, o, a, o, h, o - 0.01],
        [f(h, c + 0.01), 0, 1, i, c, a, c, h, c + 0.01],
      ];
      for (let [t, n, i, a, o, c, l, u, f] of _) {
        if (t) continue;
        let h = Math.hypot(c - a, l - o),
          g = Math.max(1, Math.round(h / 3));
        A(e, 16777215);
        for (let t = 0; t < g; t++) {
          let u = t / g,
            d = (t + 1) / g,
            f = [a + (c - a) * u, o + (l - o) * u],
            p = [a + (c - a) * d, o + (l - o) * d];
          for (let [t, a] of [
            [G - 0.05, (G + K) / 2],
            [(G + K) / 2, K],
          ])
            Dt(
              e,
              [
                [f[0], t, f[1]],
                [p[0], t, p[1]],
                [p[0], a, p[1]],
                [f[0], a, f[1]],
              ],
              n,
              0,
              i,
              s[
                r(
                  `ishi`,
                  Math.round(f[0] * 3),
                  Math.round(f[1] * 3),
                  +(t > 2),
                ) % 3
              ],
            );
        }
        (d(bt, u, f) || m.push([a, o, c, l, n, i]),
          d(bt, u, f) || p.push([a, o, c, l]));
      }
    }
  e.setMaterial(0.95, 0, 0, 0);
  let h = [J, Y, X].map((e) => [e.z0 - 1, e.z1 + 1]);
  for (let [t, n, a, s, c, l] of m) {
    let u = c === 0 ? `x` : `z`,
      d = u === `z` ? Math.min(n, s) : Math.min(t, a),
      f = u === `z` ? Math.max(n, s) : Math.max(t, a),
      p = u === `z` ? h : [[Z.x0 - 1, Z.x1 + 1]],
      m = d,
      g = p.filter(([e, t]) => t > d && e < f).sort((e, t) => e[0] - t[0]),
      _ = [];
    for (let [e, t] of g) (e > m && _.push([m, e]), (m = Math.max(m, t)));
    m < f && _.push([m, f]);
    for (let [a, s] of _) {
      if (s - a < 1) continue;
      let d = u === `z` ? t + c * 0.4 : (a + s) / 2,
        f = u === `z` ? (a + s) / 2 : n + l * 0.4;
      (A(e, 3432494, 0.9 + (r(`hedge`, Math.round(a)) % 20) / 100),
        N(
          e,
          d,
          f,
          G - 0.02,
          G + 0.95,
          u === `z` ? 0.38 : (s - a) / 2,
          u === `z` ? (s - a) / 2 : 0.38,
          0,
          1,
          i,
        ),
        o.obbs.push({
          x: d,
          z: f,
          hx: u === `z` ? 0.38 : (s - a) / 2,
          hz: u === `z` ? (s - a) / 2 : 0.38,
          y0: 0,
          y1: G + 0.95,
        }));
    }
  }
  (e.setMaterial(0.92, 0, 0, 0), A(e, 9341568));
  for (let [t, n, r, a] of p) {
    let o = Math.min(t, r),
      s = Math.max(t, r),
      c = Math.min(n, a),
      l = Math.max(n, a),
      u = o === s;
    N(
      e,
      u ? o : (o + s) / 2,
      u ? (c + l) / 2 : c,
      K,
      K + 0.75,
      u ? 0.2 : (s - o) / 2,
      u ? (l - c) / 2 : 0.2,
      0,
      1,
      i,
    );
  }
  (Ot(e, t, J.xb, J.xt, J.z0, J.z1, G, K, 0.85, q.x0),
    Ot(e, t, Y.xb, Y.xt, Y.z0, Y.z1, G, K, 0.6, q.x0),
    Ot(e, t, X.xb, X.xt, X.z0, X.z1, G, K, 0.7, q.x1));
  for (let [e, t] of [
    [J, q.x0],
    [Y, q.x0],
    [X, q.x1],
  ]) {
    let n = Math.min(e.xb, e.xt),
      r = Math.max(e.xb, e.xt);
    o.floors.push({
      cx: (n + r) / 2,
      cz: (e.z0 + e.z1) / 2,
      hx: (e.z1 - e.z0) / 2,
      hz: (r - n) / 2,
      y0: e.xb < e.xt ? G : K,
      y1: e.xb < e.xt ? K : G,
      heading: -Math.PI / 2,
    });
    let i = Math.min(e.xb, t),
      a = Math.max(e.xb, t);
    for (let t of [e.z0 - 0.2, e.z1 + 0.2])
      o.obbs.push({
        x: (i + a) / 2,
        z: t,
        hx: (a - i) / 2,
        hz: 0.2,
        y0: 0,
        y1: K * 0.5,
      });
  }
  let g = Z.x0 + 0.2,
    _ = Z.x0 + 3.6,
    v = _ + 0.4,
    y = Z.x1 - 0.2,
    b = (e) => G + ((K - G) * (Z.zb - e)) / (Z.zb - Z.zt);
  (e.setMaterial(0.5, 0.5, 0, 0),
    A(e, 3816512),
    e.quad(
      g,
      b(Z.zb),
      Z.zb,
      _,
      b(Z.zb),
      Z.zb,
      _,
      b(Z.zt),
      Z.zt,
      g,
      b(Z.zt),
      Z.zt,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
    e.setMaterial(0.15, 0.3, 0.12, 0),
    A(e, 12113116));
  for (let t of [g, _]) {
    let n = b(Z.zb),
      r = b(Z.zt);
    (e.quad(
      t,
      n,
      Z.zb,
      t,
      r,
      Z.zt,
      t,
      r + 1,
      Z.zt,
      t,
      n + 1,
      Z.zb,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    ),
      e.quad(
        t,
        r,
        Z.zt,
        t,
        n,
        Z.zb,
        t,
        n + 1,
        Z.zb,
        t,
        r + 1,
        Z.zt,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      o.obbs.push({
        x: t,
        z: (Z.zb + Z.zt) / 2,
        hx: 0.08,
        hz: (Z.zb - Z.zt) / 2,
        y0: 0,
        y1: K + 1,
      }));
  }
  (e.setMaterial(0.4, 0.3, 0, 0), A(e, 1315860));
  for (let t of [g, _])
    e.quad(
      t - 0.06,
      b(Z.zb) + 1.02,
      Z.zb,
      t + 0.06,
      b(Z.zb) + 1.02,
      Z.zb,
      t + 0.06,
      b(Z.zt) + 1.02,
      Z.zt,
      t - 0.06,
      b(Z.zt) + 1.02,
      Z.zt,
      i.u0,
      i.v0,
      i.u1,
      i.v1,
    );
  {
    let t = Math.round((K - G) / 0.17),
      n = (Z.zb - Z.zt) / t,
      r = (K - G) / t;
    e.setMaterial(0.9, 0, 0, 0);
    for (let a = 0; a < t; a++) {
      let t = Z.zb - a * n,
        o = G + a * r;
      (A(e, 12104358),
        j(e, v, t, y, t, o, o + r, i),
        A(e, 13288632),
        M(e, v, t - n, y, t, o + r, i));
    }
  }
  (o.floors.push({
    cx: (Z.x0 + Z.x1) / 2,
    cz: (Z.zb + Z.zt) / 2,
    hx: (Z.x1 - Z.x0) / 2,
    hz: (Z.zb - Z.zt) / 2,
    y0: K,
    y1: G,
    heading: 0,
  }),
    e.setMaterial(0.5, 0.6, 0, 0),
    A(e, 6975092));
  let x = Z.x0 - 0.15,
    S = Z.x1 + 0.15;
  for (let t = Z.zb; t >= Z.zt - 0.01; t -= (Z.zb - Z.zt) / 4) {
    for (let n of [x, S])
      (N(e, n, t, t > q.z1 ? G : K - 0.2, b(t) + 2.9, 0.08, 0.08, 0, 1, i),
        t > q.z1 && o.circles.push({ x: n, z: t, r: 0.1, h: b(t) + 2.9 }));
    N(e, (x + S) / 2, t, b(t) + 2.8, b(t) + 2.95, (S - x) / 2, 0.08, 0, 1, i);
  }
  (e.setMaterial(0.12, 0.4, 0.18, 1), A(e, 13164004));
  let C = Z.zb + 0.6,
    w = Z.zt - 0.4;
  for (let t of [0, 1]) {
    let n = (e) => b(Math.max(Z.zt, Math.min(Z.zb, e))) + 2.95 + t * 0.02;
    t === 0
      ? e.quad(
          x,
          n(C),
          C,
          S,
          n(C),
          C,
          S,
          n(w),
          w,
          x,
          n(w),
          w,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        )
      : e.quad(
          x,
          n(w) - 0.03,
          w,
          S,
          n(w) - 0.03,
          w,
          S,
          n(C) - 0.03,
          C,
          x,
          n(C) - 0.03,
          C,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        );
  }
  (kt(e, t, V.x0 + 0.9, (J.z0 + J.z1) / 2, 4.3, 7.2, G, !1, `gaku:hie`),
    o.circles.push(
      { x: V.x0 + 0.9, z: (J.z0 + J.z1) / 2 - 4.3, r: 0.4, h: 8 },
      { x: V.x0 + 0.9, z: (J.z0 + J.z1) / 2 + 4.3, r: 0.4, h: 8 },
    ),
    kt(e, t, (Z.x0 + Z.x1) / 2, V.z1 - 0.7, 4.6, 5.6, G, !0, `gaku:sannobashi`),
    kt(e, t, V.x1 - 0.65, (X.z0 + X.z1) / 2, 2.8, 4.6, G, !1, `gaku:hie`),
    o.circles.push(
      { x: V.x1 - 0.65, z: (X.z0 + X.z1) / 2 - 2.8, r: 0.3, h: 5.2 },
      { x: V.x1 - 0.65, z: (X.z0 + X.z1) / 2 + 2.8, r: 0.3, h: 5.2 },
    ),
    o.circles.push(
      { x: (Z.x0 + Z.x1) / 2 - 4.6, z: V.z1 - 0.7, r: 0.35, h: 6.4 },
      { x: (Z.x0 + Z.x1) / 2 + 4.6, z: V.z1 - 0.7, r: 0.35, h: 6.4 },
    ),
    e.setMaterial(0.85, 0, 0.05, 1),
    A(e, 16777215),
    N(
      e,
      V.x0 + 0.7,
      554.5,
      G,
      G + 2.6,
      0.3,
      0.3,
      -1,
      0,
      t.uv(`wall:ishigaki`),
      t.uv(`shagohyo`),
    ),
    o.obbs.push({
      x: V.x0 + 0.7,
      z: 554.5,
      hx: 0.3,
      hz: 0.3,
      y0: 0,
      y1: G + 2.6,
    }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215),
    N(
      e,
      V.x0 + 0.6,
      539.6,
      G + 1.2,
      G + 1.68,
      0.8,
      0.03,
      -1,
      0,
      i,
      t.uv(`otokozaka`),
      t.uv(`otokozaka`),
    ),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 4861464),
    N(e, V.x0 + 0.6, 539.6, G, G + 1.2, 0.05, 0.05, -1, 0, i));
  {
    let r = n > 0 ? 16 : 9,
      i = (Y.z0 + Y.z1) / 2;
    for (let a = 0; a < r; a++) {
      let o = Y.xb + 0.4 + ((Y.xt - Y.xb - 0.6) * a) / (r - 1);
      At(
        e,
        t,
        o,
        i,
        1.12,
        2.5,
        G + ((K - G) * (o - Y.xb)) / (Y.xt - Y.xb),
        a % 3 == 0 && n > 0,
      );
    }
    for (let n = 0; n < 4; n++)
      At(e, t, Y.xt + 0.8 + n * 0.9, i, 1.12, 2.5, K, !1);
    (jt(e, t, -918.6, 506.2, -914.8, 512.6, K, 2.4, 0.7, 1.4, !0),
      o.obbs.push({
        x: -916.7,
        z: 509.4,
        hx: 2.4,
        hz: 3.7,
        y0: 0,
        y1: K + 4.5,
      }));
  }
  {
    let n = -923.6,
      r = -919.6;
    e.setMaterial(0.8, 0, 0, 0);
    for (let [t, a] of [
      [536.5, 541.6],
      [548.4, 553.5],
    ]) {
      (A(e, 15920868),
        N(e, -1843.2 / 2, (t + a) / 2, K, K + 4.6, 2, (a - t) / 2, 0, 1, i),
        o.obbs.push({
          x: -1843.2 / 2,
          z: (t + a) / 2,
          hx: 2,
          hz: (a - t) / 2,
          y0: 0,
          y1: K + 4.6,
        }),
        A(e, Q));
      for (let o of [t, a])
        for (let t of [n, r]) N(e, t, o, K, K + 4.6, 0.24, 0.24, 0, 1, i);
    }
    (A(e, Q),
      N(e, -1843.2 / 2, 545, K + 4.1, K + 4.7, 2.2, 8.7, 0, 1, i),
      Nt(e, t, n, 536.5, r, 553.5, K + 4.7, 1.4, 2.2),
      e.setMaterial(0.6, 0, 0.5, 3),
      A(e, 16777215));
    let a = t.uv(`lantern:sanno`);
    for (let t of [542.3000000000001, 547.6999999999999])
      N(
        e,
        -924.3000000000001,
        t,
        K + 2.6,
        K + 3.5,
        0.28,
        0.28,
        -1,
        0,
        a,
        a,
        a,
        !1,
      );
  }
  for (let [n, r, a, s] of [
    [-921, -899, 522.6, 524.6],
    [-921, -916.5, 565.4, 567.4],
    [-907.5, -899, 565.4, 567.4],
  ]) {
    let c = (n + r) / 2,
      l = (r - n) / 2;
    (e.setMaterial(0.85, 0, 0, 0),
      A(e, 15920868),
      N(
        e,
        c,
        (a + s) / 2,
        K,
        K + 3,
        l,
        (s - a) / 2,
        0,
        1,
        i,
        void 0,
        void 0,
        !1,
      ),
      e.setMaterial(0.7, 0, 0, 0),
      A(e, Q));
    for (
      let t = n;
      t <= r + 0.01;
      t += (r - n) / Math.max(1, Math.round((r - n) / 2.75))
    )
      for (let n of [a - 0.05, s + 0.05])
        N(e, t, n, K, K + 3, 0.16, 0.16, 0, 1, i);
    (N(
      e,
      c,
      (a + s) / 2,
      K + 2.55,
      K + 3,
      l + 0.05,
      (s - a) / 2 + 0.1,
      0,
      1,
      i,
      void 0,
      void 0,
      !1,
    ),
      Nt(e, t, n, a, r, s, K + 3, 0.7, 1),
      o.obbs.push({
        x: c,
        z: (a + s) / 2,
        hx: l,
        hz: (s - a) / 2,
        y0: 0,
        y1: K + 4,
      }));
  }
  (jt(e, t, -914, 533.5, -905, 556.5, K, 4.8, 1.8, 3.8, !0),
    o.obbs.push({ x: -909.5, z: 545, hx: 4.5, hz: 11.5, y0: 0, y1: K + 9 }),
    jt(e, t, -903.6, 537.5, -898.4, 552.5, K + 0.4, 4.2, 1.2, 3, !1),
    o.obbs.push({ x: -901, z: 545, hx: 2.6, hz: 7.5, y0: 0, y1: K + 8 }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215));
  {
    let n = t.uv(`gaku:hie`);
    (j(e, -914.24, 543.8, -914.24, 546.2, K + 4.1, K + 5.3, n),
      e.setMaterial(0.8, 0, 0, 0),
      A(e, 5913120),
      N(e, -913.2, 545, K + 0.6, K + 1.4, 0.45, 1.4, -1, 0, i));
  }
  (e.setMaterial(0.7, 0, 0.08, 1),
    A(e, 16777215),
    N(
      e,
      -905.5,
      592.5,
      K + 0.7,
      K + 2,
      0.85,
      0.05,
      0,
      1,
      i,
      t.uv(`hieboard`),
      t.uv(`wall:concrete`),
    ),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 4861464));
  for (let t of [-906.2, -904.8])
    N(e, t, 592.5, K, K + 0.7, 0.05, 0.05, 0, 1, i);
  let T = [];
  for (let [e, t] of [
    [-927.5, 503],
    [-922.5, 501.5],
    [-913, 502],
    [-905, 503.5],
    [-900, 509],
    [-900.5, 518],
    [-927.5, 517],
    [-927.5, 527],
    [-927.5, 534],
    [-927.5, 556],
    [-927.5, 565],
    [-927.5, 575],
    [-924, 584],
    [-920, 591],
    [-925, 597],
    [-901, 572],
    [-900, 581],
    [-902, 592],
    [-888, 486],
    [-883, 492],
    [-892, 500],
    [-884, 507],
    [-885, 530],
    [-889, 541],
    [-884, 553],
    [-890, 563],
    [-884, 575],
    [-891, 586],
    [-884, 596],
  ])
    T.push([e, K, t]);
  for (let [e, t] of [
    [-935.2, 515],
    [-935.6, 528],
    [-935.2, 562],
    [-935.4, 576],
    [-935, 590],
    [-935.6, 600],
  ])
    T.push([e, G, t]);
  for (let e = 503; e < 597; e += 6.5)
    Math.abs(e - 545) < 9 ||
      Math.abs(e - 509.4) < 4 ||
      T.push([q.x0 + 1.6 + ((e * 7) % 3) * 0.4, K, e]);
  for (let e = q.x0 + 4; e < q.x1 - 2; e += 6.2)
    (e > Z.x0 - 2 && e < Z.x1 + 2) ||
      (T.push([e, K, q.z1 - 1.8 - ((e * 3) % 2) * 0.6]),
      e < -900 && T.push([e + 2.5, K, q.z0 + 1.8 + ((e * 5) % 2) * 0.5]));
  for (let [e, t, n] of T)
    o.instances.push({
      model: `tree:${Math.round(e * 3 + n) & 1}`,
      x: e,
      y: t,
      z: n,
      fx: 0,
      fz: 1,
      s: 1.15,
      range: 320,
    });
  for (let [e, t] of [
    [-918.2, 538.8],
    [-918.2, 551.2],
    [-916, 538.8],
    [-916, 551.2],
  ])
    (o.instances.push({
      model: `toro`,
      x: e,
      y: K,
      z: t,
      fx: 1,
      fz: 0,
      range: 120,
    }),
      o.circles.push({ x: e, z: t, r: 0.35, h: K + 2 }));
  return o;
}
function Nt(e, t, n, r, i, a, o, s, c) {
  let l = t.white();
  (e.setMaterial(0.6, 0.3, 0, 0), A(e, xt));
  let u = n - s,
    d = i + s,
    f = r - s,
    p = a + s,
    m = a - r >= i - n,
    h = (m ? i - n : a - r) / 2 + s,
    g = m ? (u + d) / 2 : u + h,
    _ = m ? (u + d) / 2 : d - h,
    v = m ? f + h : (f + p) / 2,
    y = m ? p - h : (f + p) / 2,
    b = o + c,
    x = l;
  (e.quad(u, o, f, u, o, p, g, b, y, g, b, v, x.u0, x.v0, x.u1, x.v1),
    e.quad(d, o, p, d, o, f, _, b, v, _, b, y, x.u0, x.v0, x.u1, x.v1),
    e.quad(d, o, f, u, o, f, g, b, v, _, b, v, x.u0, x.v0, x.u1, x.v1),
    e.quad(u, o, p, d, o, p, _, b, y, g, b, y, x.u0, x.v0, x.u1, x.v1),
    e.setMaterial(0.9, 0, 0, 0),
    A(e, 4864554),
    M(e, u, f, d, p, o - 0.02, l, !0));
}
var Pt = e({
    init: () => Ht,
    start: () => Ut,
    storefront: () => Gt,
    unload: () => Kt,
    update: () => Wt,
  }),
  $ = null,
  Ft = !1,
  It = !1,
  Lt = -1,
  Rt = new Map(),
  zt = Error(`roppongi: dropped while building`);
function Bt(e) {
  for (let [t, n] of Object.entries(z))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[roppongi] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
var Vt = (e) => {
  let t = 0;
  for (let n of Object.values(e.attributes)) t += n.array.byteLength;
  return t + (e.index?.array.byteLength ?? 0);
};
async function Ht(e) {
  if (Ft || $) return;
  ((Ft = !0), (It = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    a = performance.now(),
    o = async (t = !1, i = ``) => {
      let o = performance.now() - a;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = i)), await e.yieldFrame(), It)) throw zt;
        a = performance.now();
      }
    };
  try {
    Bt(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      p = ct(),
      m = new ee(),
      h = qe(m, p, (e) => st.has(e.id));
    if (
      ($e(m, p),
      pt(m),
      St(m),
      await o(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      It)
    )
      throw zt;
    a = performance.now();
    let g = i(2048, e.quality),
      _ = m.paint(g),
      v = _.next();
    for (; !v.done;) (await o(!1, `paint`), (v = _.next()));
    let y = v.value,
      b = [],
      x = new l(8192, 12288),
      S = [],
      C = 0,
      w = 0,
      T = (e) => {
        if (!x.n) return !1;
        let t = f(x, `rop-${e}`);
        return ((C += x.ni / 3), (w += Vt(t)), b.push({ name: e, geo: t }), !0);
      };
    for (let e of p) {
      x.reset();
      let t = Xe(x, e, h.get(e.id), m, u);
      (T(`hero:${e.id}`),
        S.push({ hero: e, h: t.h, name: `hero:${e.id}` }),
        await o(!1, `hero`));
    }
    (x.reset(),
      gt(x, m),
      _t(x, m),
      T(`street`),
      await o(!1, `street`),
      x.reset());
    let E = vt(x, m);
    (T(`embassy`), await o(!1, `embassy`), x.reset());
    let D = Mt(x, m, u);
    (T(`hie`), await o(!1, `hie`));
    for (let e of mt(m)) (b.push(e), (w += Vt(e.geo)));
    await o(!1, `kit`);
    let O = ht(e, p, u),
      te = [...O.instances, ...D.instances],
      ne = c(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `roppongi`,
      }),
      k = new d(
        `roppongi`,
        ne,
        b,
        p.length + 8 + te.length + 16,
        !!e.quality.shadows,
      );
    ((k.mesh.userData.owner = `roppongi`), k.enableCulling(e.camera));
    for (let e of S) {
      let t = e.hero;
      k.add(
        k.models.get(e.name),
        oe,
        (t.x0 + t.x1) / 2,
        (t.z0 + t.z1) / 2,
        900,
      );
    }
    (k.models.has(`street`) &&
      k.add(k.models.get(`street`), oe, -940, 990, 700),
      k.models.has(`embassy`) &&
        k.add(k.models.get(`embassy`), oe, -892, 1039, 500),
      k.models.has(`hie`) && k.add(k.models.get(`hie`), oe, -915, 551, 800));
    let A = [],
      j = new Float32Array(16);
    for (let e of te) {
      let t = k.models.get(`kit:${e.model}`);
      if (t === void 0) continue;
      ae(j, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1);
      let n = k.add(t, j, e.x, e.z, e.range, !e.when);
      e.when && A.push({ id: n, on: e.when, state: !1 });
    }
    await o(!1, `batch`);
    let re = 0;
    for (let t of S) {
      let n = t.hero;
      (e.statics.addOBB(
        (n.x0 + n.x1) / 2,
        (n.z0 + n.z1) / 2,
        (n.x1 - n.x0) / 2,
        (n.z1 - n.z0) / 2,
        0,
        0,
        t.h,
        `building`,
      ),
        re++);
    }
    for (let t of [...O.circles, ...D.circles])
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), re++);
    for (let t of [...O.obbs, ...E, ...D.obbs])
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, 0, t.y0, t.y1, `building`), re++);
    for (let t of D.floors)
      e.statics.addFloor(
        t.cx,
        t.cz,
        t.hx,
        t.hz,
        t.y0,
        t.y1,
        t.heading,
        `floor`,
      );
    Rt.clear();
    let M = [...e.plan.pois, ...(e.plan.claimedPois ?? [])];
    for (let e of S) {
      let t = e.hero.poi;
      if (!t) continue;
      let n = M.find((e) => e.id === t.id),
        r = Ue(e.hero, t.dir),
        i = r.ox + r.tx * t.at + r.nx * 0.6,
        a = r.oz + r.tz * t.at + r.nz * 0.6;
      Rt.set(t.id, {
        x: i,
        z: a,
        facing: Math.atan2(r.nx, -r.nz),
        width: t.width,
        height: 3.1,
        poiId: t.id,
        kind: n?.kind ?? t.kind,
        brand: n?.brand,
        name: n?.brand ?? t.name,
        category: t.category,
        hours: t.hours,
      });
    }
    if (It) throw zt;
    e.scene.add(k.mesh);
    let N = e.params.has(`ropatlas`);
    (N || s(y),
      ($ = {
        batch: k,
        tex: y,
        timed: A,
        stats: {
          heroes: p.length,
          tris: Math.round(C),
          models: b.length,
          instances: k.count,
          atlas: g,
          atlasUsed: m.used,
          overflow: m.overflow,
          colliders: re,
          floors: D.floors.length,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${m.slowKey} ${m.slowMs.toFixed(1)}`,
          geoBytes: w,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`roptest`)) &&
      (window.__roppongi = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        storefronts: () => [...Rt.values()],
        atlas: () => (N ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:roppongi ${$.stats.heroes} buildings, ${$.stats.tris} tris, ${(w / 1048576).toFixed(2)} MB geometry, atlas ${g} (${m.used}/2816 used, ${m.overflow} overflow), ${re} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== zt) throw e;
  } finally {
    Ft = !1;
  }
}
function Ut(e) {
  Lt = -1;
}
function Wt(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, 1, 8);
  let i = t.time.elapsed;
  if (i - Lt < 1) return;
  Lt = i;
  let a = t.env?.hour ?? 12;
  for (let e of n.timed) {
    let t = e.on(a);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function Gt(e) {
  return Rt.get(e) ?? null;
}
function Kt(e) {
  It = !0;
  let t = $;
  (($ = null),
    Rt.clear(),
    (Lt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
t.add({
  六本木十字路口: `六本木交差点`,
  "外苑東通（六本木路口北側）": `外苑東通り（六本木交差点北）`,
  "唐吉郊狼 六本木店": `ドン・コヨーテ 六本木店`,
  "卡拉OK城 六本木總店": `カラオケ城 六本木本店`,
  "芋洗坂（坡頂）": `芋洗坂（坂上）`,
  "六本木通 計程車招呼站": `六本木通り タクシー乗り場`,
  "大使館前（警衛亭）": `大使館前（警備ボックス）`,
  六本木夜路: `六本木の夜道`,
  "赤坂三丁目（外堀通）": `赤坂三丁目（外堀通り）`,
  "ABA飯店 赤坂見附站前": `ABAホテル 赤坂見附駅前`,
  "日枝神社 山王橋（手扶梯）": `日枝神社 山王橋（エスカレーター）`,
  "日枝神社 拜殿": `日枝神社 拝殿`,
});
var qt = Math.PI / 2,
  Jt = -Math.PI / 2,
  Yt = 0,
  Xt = Math.PI,
  Zt = [
    {
      id: `tokyo:roppongi:crossing`,
      kind: `spot`,
      x: -945,
      z: 925,
      heading: -Math.PI * 0.75,
      radius: 260,
      label: {
        ja: `六本木交差点`,
        zh: `六本木十字路口`,
        en: `Roppongi Crossing`,
      },
      copyKey: `roppongi.crossing.full`,
      note: `the north-east corner under 首都高 3号 (the girder name sign), looking at the pink café and the Hills; the meeting point`,
    },
    {
      id: `tokyo:roppongi:gaien-bars`,
      kind: `area`,
      x: -950,
      z: 852,
      radius: 240,
      hours: [19, 29],
      points: [
        [-952, 790],
        [-938, 790],
        [-938, 918],
        [-952, 918],
      ],
      label: {
        ja: `外苑東通り（六本木交差点北）`,
        zh: `外苑東通（六本木路口北側）`,
        en: `Gaien-higashi-dori bar strip`,
      },
      note: `the east sidewalk of the bar towers north of the crossing: touts, A-boards, the 港区 plates (19:00–5:00)`,
    },
    {
      id: `tokyo:roppongi:donco`,
      kind: `entrance`,
      x: -911,
      z: 960.27,
      heading: Yt,
      radius: 180,
      label: {
        ja: `ドン・コヨーテ 六本木店`,
        zh: `唐吉郊狼 六本木店`,
        en: `Don Coyote Roppongi`,
      },
      copyKey: `brand.doncoyote`,
      note: `the discount store on 六本木通り (parody); the penguin board on the 芋洗坂 corner`,
    },
    {
      id: `tokyo:roppongi:karaoke`,
      kind: `entrance`,
      x: -943.23,
      z: 830,
      heading: Jt,
      radius: 160,
      hours: [11, 29],
      label: {
        ja: `カラオケ城 六本木本店`,
        zh: `卡拉OK城 六本木總店`,
        en: `Karaoke Castle Roppongi`,
      },
      copyKey: `brand.karaokejo`,
    },
    {
      id: `tokyo:roppongi:club`,
      kind: `entrance`,
      x: -943.23,
      z: 859.5,
      heading: Jt,
      radius: 160,
      hours: [22, 29],
      label: { ja: `CLUB ZENITH`, zh: `CLUB ZENITH`, en: `Club Zenith` },
      copyKey: `roppongi.club.big`,
      note: `the big night club (invented): doors open 22:00`,
    },
    {
      id: `tokyo:roppongi:imoarai-top`,
      kind: `spot`,
      x: -930,
      z: 962.5,
      heading: Xt,
      radius: 160,
      label: {
        ja: `芋洗坂（坂上）`,
        zh: `芋洗坂（坡頂）`,
        en: `Imoarai-zaka, top`,
      },
      copyKey: `roppongi.saka.name`,
      note: `the lane down from the crossing (the 港区 坂 post at its head)`,
    },
    {
      id: `tokyo:roppongi:imoarai`,
      kind: `route`,
      x: -930,
      z: 1006,
      radius: 220,
      points: [
        [-930, 961],
        [-930, 996],
        [-930, 1009],
        [-930, 1052],
      ],
      label: { ja: `芋洗坂`, zh: `芋洗坂`, en: `Imoarai-zaka lane` },
      copyKey: `roppongi.saka.name`,
      note: `pedestrian lane (pack-built), bars and restaurants both sides; crosses the z 1003 street, ends on 外苑東通り (飯倉)`,
    },
    {
      id: `tokyo:roppongi:taxi-stand`,
      kind: `spot`,
      x: -919,
      z: 956.5,
      heading: Yt,
      radius: 180,
      label: {
        ja: `六本木通り タクシー乗り場`,
        zh: `六本木通 計程車招呼站`,
        en: `Roppongi-dori taxi stand`,
      },
      copyKey: `roppongi.plate.taxi`,
    },
    {
      id: `tokyo:roppongi:embassy`,
      kind: `spot`,
      x: -877.6,
      z: 1038.8,
      heading: qt,
      radius: 160,
      label: {
        ja: `大使館前（警備ボックス）`,
        zh: `大使館前（警衛亭）`,
        en: `Embassy gate (police guard box)`,
      },
      note: `the quiet street east of 芋洗坂: the guard box in the gate bay. No country is named. Missions keep away from it (police)`,
    },
    {
      id: `tokyo:roppongi:night-run`,
      kind: `route`,
      x: -935,
      z: 900,
      radius: 320,
      points: [
        [-945, 790],
        [-945, 918],
        [-930, 961],
        [-930, 1052],
        [-875, 1060],
        [-872, 970],
        [-900, 955],
      ],
      label: { ja: `六本木の夜道`, zh: `六本木夜路`, en: `Roppongi night run` },
      note: `外苑東通り south past the bars → the crossing → down 芋洗坂 → 飯倉 → the embassy street north → back to 六本木通り`,
    },
    {
      id: `tokyo:roppongi:akasaka-row`,
      kind: `area`,
      x: -968,
      z: 525,
      radius: 240,
      hours: [11, 26],
      points: [
        [-971, 434],
        [-962, 434],
        [-962, 616],
        [-971, 616],
      ],
      label: {
        ja: `赤坂三丁目（外堀通り）`,
        zh: `赤坂三丁目（外堀通）`,
        en: `Akasaka 3-chome on Sotobori-dori`,
      },
      note: `restaurants, Korean barbecue, bars, hotels: 赤坂見附 → 溜池山王 west side`,
    },
    {
      id: `tokyo:roppongi:akasaka-hotel`,
      kind: `entrance`,
      x: -971.3,
      z: 440,
      heading: qt,
      radius: 160,
      label: {
        ja: `ABAホテル 赤坂見附駅前`,
        zh: `ABA飯店 赤坂見附站前`,
        en: `ABA Hotel Akasaka-mitsuke`,
      },
      copyKey: `brand.abahotel`,
    },
    {
      id: `tokyo:roppongi:hie-sannoshita`,
      kind: `entrance`,
      x: -938.8,
      z: 545,
      heading: Jt,
      radius: 200,
      hours: [6, 17],
      label: {
        ja: `日枝神社 山王男坂`,
        zh: `日枝神社 山王男坂`,
        en: `Hie Shrine, Sanno Otokozaka stairs`,
      },
      copyKey: `roppongi.hie.otokozaka`,
      note: `the 山王鳥居 at the foot of the stair on 外堀通り. Sacred ground: no violence, no chases through the precinct`,
    },
    {
      id: `tokyo:roppongi:hie-sannobashi`,
      kind: `entrance`,
      x: -912,
      z: 608.3,
      heading: Xt,
      radius: 200,
      hours: [6, 17],
      label: {
        ja: `日枝神社 山王橋（エスカレーター）`,
        zh: `日枝神社 山王橋（手扶梯）`,
        en: `Hie Shrine, Sannobashi escalator`,
      },
      copyKey: `roppongi.hie.sannobashi`,
    },
    {
      id: `tokyo:roppongi:hie-haiden`,
      kind: `spot`,
      x: -916.5,
      z: 545,
      heading: qt,
      radius: 200,
      hours: [6, 17],
      label: {
        ja: `日枝神社 拝殿`,
        zh: `日枝神社 拜殿`,
        en: `Hie Shrine, hall of worship`,
      },
      copyKey: `roppongi.hie.name`,
      note: `on the hill (y ≈ 7.6): pray, take a photo, meet someone. Sacred ground (§3.10)`,
    },
  ];
export { at as i, Pt as n, it as r, Zt as t };
