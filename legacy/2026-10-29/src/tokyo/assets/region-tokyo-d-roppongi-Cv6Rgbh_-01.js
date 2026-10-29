// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 01 — math
// Lines 1-337 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-DY7SMsVw.js";
import {
  B as n,
  V as r,
  fn as i,
  ln as a,
  on as o,
  un as s,
  wr as c,
  wt as l,
  z as u,
} from "./engine-wUBYs8Z3.js";
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
} from "./region-tokyo-55J_WESF.js";
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
        [n, r] = i(e, t);
      S(n, r);
      let o = e / C;
      yield;
      for (let e of this.order) {
        let t = performance.now();
        (r.save(),
          r.setTransform(o, 0, 0, o, 0, 0),
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
      let s = a(n, { mipmaps: !0, anisotropy: 4 });
      return ((s.name = `roppongi-atlas`), (this.tex = s), (this.size = e), s);
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
