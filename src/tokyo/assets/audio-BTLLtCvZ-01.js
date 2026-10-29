// tokyo/assets/audio-BTLLtCvZ 01 — math
// Lines 1-346 of readable/tokyo/assets/audio-BTLLtCvZ.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import { n } from "./ja-anaGONx4.js";
import { or as r } from "./three-C4coU-vx.js";
import { yn as i } from "./engine-14d5lda2.js";
import { o as a } from "./tokyo-CqLdAwml.js";
var o = class {
    s;
    constructor(e) {
      this.s = e >>> 0 || 2654435769;
      for (let e = 0; e < 4; e++) this.next();
    }
    next() {
      let e = this.s;
      return (
        (e ^= e << 13),
        (e ^= e >>> 17),
        (e ^= e << 5),
        (this.s = e >>> 0),
        this.s / 4294967296
      );
    }
    range(e, t) {
      return e + (t - e) * this.next();
    }
    bi() {
      return this.next() * 2 - 1;
    }
    int(e) {
      return Math.floor(this.next() * e);
    }
    chance(e) {
      return this.next() < e;
    }
    pick(e) {
      return e[Math.floor(this.next() * e.length)];
    }
    gauss() {
      let e = Math.max(1e-9, this.next()),
        t = this.next();
      return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * t);
    }
  },
  s = Math.PI * 2,
  c = (e) => 440 * 2 ** ((e - 69) / 12),
  l = (e) => 2 ** (e / 1200),
  u = (e, t) => (typeof e == `number` ? e : e(t));
function d(e, t) {
  return new Float32Array(Math.max(1, Math.round(e * t)));
}
function f(e, t) {
  return { sr: t, ch: [e] };
}
function p(e, t) {
  let n = new Float32Array(e);
  for (let r = 0; r < e; r++) n[r] = t.bi();
  return n;
}
function m(e, t) {
  let n = new Float32Array(e),
    r = 0,
    i = 0,
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l = 0;
  for (let u = 0; u < e; u++) {
    let e = t.bi();
    ((r = 0.99886 * r + e * 0.0555179),
      (i = 0.99332 * i + e * 0.0750759),
      (a = 0.969 * a + e * 0.153852),
      (o = 0.8665 * o + e * 0.3104856),
      (s = 0.55 * s + e * 0.5329522),
      (c = -0.7616 * c - e * 0.016898),
      (n[u] = (r + i + a + o + s + c + l + e * 0.5362) * 0.11),
      (l = e * 0.115926));
  }
  return n;
}
function h(e, t) {
  let n = new Float32Array(e),
    r = 0;
  for (let i = 0; i < e; i++)
    ((r = (r + 0.02 * t.bi()) / 1.02), (n[i] = r * 3.5));
  return n;
}
function g(e, t) {
  return e < t
    ? ((e /= t), e + e - e * e - 1)
    : e > 1 - t
      ? ((e = (e - 1) / t), e * e + e + e + 1)
      : 0;
}
function _(e, t, n, r = `sine`, i = 0, a = 0.5) {
  let o = new Float32Array(e),
    c = i % 1,
    l = typeof n == `number`,
    d = l ? n / t : 0,
    f = 0;
  for (let i = 0; i < e; i++) {
    l || (d = u(n, i / t) / t);
    let e;
    switch (r) {
      case `sine`:
        e = Math.sin(s * c);
        break;
      case `saw`:
        e = 2 * c - 1 - g(c, d);
        break;
      case `square`:
        e = (c < 0.5 ? 1 : -1) + g(c, d) - g((c + 0.5) % 1, d);
        break;
      case `pulse`:
        e = (c < a ? 1 : -1) + g(c, d) - g((c + 1 - a) % 1, d);
        break;
      default: {
        let t = (c < 0.5 ? 1 : -1) + g(c, d) - g((c + 0.5) % 1, d);
        ((f = f * 0.999 + t * 4 * d), (e = f));
      }
    }
    ((o[i] = e), (c += d), c >= 1 && --c);
  }
  return o;
}
function v(e, t, n, r, i = 0, a) {
  let o = new Float32Array(e);
  for (let [c, u, d] of r) {
    let r = n * c * l(i ? (a ? a.bi() : 1) * i : 0);
    if (r >= t * 0.47) continue;
    let f = (s * r) / t,
      p = 2 * Math.cos(f),
      m = a ? a.next() * s : 0,
      h = Math.sin(m - f),
      g = Math.sin(m - 2 * f),
      _ = d > 0 ? Math.exp(-1 / (d * t)) : 1,
      v = u,
      y = d > 0 ? Math.min(e, Math.ceil(d * t * 9)) : e;
    for (let e = 0; e < y; e++) {
      let t = p * h - g;
      ((g = h), (h = t), (o[e] += t * v), (v *= _));
    }
  }
  return o;
}
function y(e, t, n, r, i, a = 0) {
  let o = new Float32Array(e),
    c = 0,
    l = 0,
    d = 0;
  for (let f = 0; f < e; f++) {
    let e = f / t,
      p = u(n, e),
      m = Math.sin(s * l + a * d);
    ((d = m),
      (o[f] = Math.sin(s * c + u(i, e) * m)),
      (c += p / t),
      (l += (p * r) / t),
      c > 1 && --c,
      l > 1 && --l);
  }
  return o;
}
function b(e, t, n, r, i = 0.707, a = 0) {
  let o = 0,
    c = 0,
    l = 0,
    d = 0,
    f = 0,
    p = (e, r) => {
      e = Math.min(Math.max(e, 10), t * 0.49);
      let i = (s * e) / t,
        u = Math.cos(i),
        p = Math.sin(i) / (2 * Math.max(0.05, r)),
        m = 10 ** (a / 40),
        h = 1;
      switch (n) {
        case `lp`:
          ((o = (1 - u) / 2),
            (c = 1 - u),
            (l = o),
            (h = 1 + p),
            (d = -2 * u),
            (f = 1 - p));
          break;
        case `hp`:
          ((o = (1 + u) / 2),
            (c = -(1 + u)),
            (l = o),
            (h = 1 + p),
            (d = -2 * u),
            (f = 1 - p));
          break;
        case `bp`:
          ((o = p), (c = 0), (l = -p), (h = 1 + p), (d = -2 * u), (f = 1 - p));
          break;
        case `notch`:
          ((o = 1),
            (c = -2 * u),
            (l = 1),
            (h = 1 + p),
            (d = -2 * u),
            (f = 1 - p));
          break;
        case `ap`:
          ((o = 1 - p),
            (c = -2 * u),
            (l = 1 + p),
            (h = 1 + p),
            (d = -2 * u),
            (f = 1 - p));
          break;
        case `peak`:
          ((o = 1 + p * m),
            (c = -2 * u),
            (l = 1 - p * m),
            (h = 1 + p / m),
            (d = -2 * u),
            (f = 1 - p / m));
          break;
        case `ls`: {
          let e = 2 * Math.sqrt(m) * p;
          ((o = m * (m + 1 - (m - 1) * u + e)),
            (c = 2 * m * (m - 1 - (m + 1) * u)),
            (l = m * (m + 1 - (m - 1) * u - e)),
            (h = m + 1 + (m - 1) * u + e),
            (d = -2 * (m - 1 + (m + 1) * u)),
            (f = m + 1 + (m - 1) * u - e));
          break;
        }
        case `hs`: {
          let e = 2 * Math.sqrt(m) * p;
          ((o = m * (m + 1 + (m - 1) * u + e)),
            (c = -2 * m * (m - 1 + (m + 1) * u)),
            (l = m * (m + 1 + (m - 1) * u - e)),
            (h = m + 1 - (m - 1) * u + e),
            (d = 2 * (m - 1 - (m + 1) * u)),
            (f = m + 1 - (m - 1) * u - e));
          break;
        }
      }
      ((o /= h), (c /= h), (l /= h), (d /= h), (f /= h));
    },
    m = typeof r != `number` || typeof i != `number`;
  p(u(r, 0), u(i, 0));
  let h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = e.length;
  for (let n = 0; n < y; n++) {
    m && !(n & 15) && p(u(r, n / t), u(i, n / t));
    let a = e[n],
      s = o * a + c * h + l * g - d * _ - f * v;
    ((g = h), (h = a), (v = _), (_ = s), (e[n] = s));
  }
  return e;
}
var x = (e, t, n, r = 0.707) => b(e, t, `lp`, n, r),
  S = (e, t, n, r = 0.707) => b(e, t, `hp`, n, r),
  C = (e, t, n, r = 1) => b(e, t, `bp`, n, r),
  w = (e, t, n, r, i) => b(e, t, `peak`, n, r, i);
function T(e, t, n) {
  let r = new Float32Array(e.length);
  for (let [i, a, o] of n) {
    if (i >= t * 0.47) continue;
    let n = Math.exp(-1 / (o * t)),
      c = (s * i) / t,
      l = -2 * n * Math.cos(c),
      u = n * n,
      d = a * (1 - n),
      f = 0,
      p = 0;
    for (let t = 0; t < e.length; t++) {
      let n = d * e[t] - l * f - u * p;
      ((p = f), (f = n), (r[t] += n));
    }
  }
  return r;
}
function E(e, t, n) {
  let r = 0,
    i = e.length;
  for (let a = 0; a < i; a++) {
    let i = a / t;
    for (; r + 2 < n.length && i >= n[r + 2];) r += 2;
    let o;
    if (i <= n[0]) o = n[1];
    else if (r + 2 >= n.length) o = n[n.length - 1];
    else {
      let e = n[r],
        t = n[r + 2];
      o = n[r + 1] + ((n[r + 3] - n[r + 1]) * (i - e)) / Math.max(1e-9, t - e);
    }
    e[a] *= o;
  }
  return e;
}
function D(e, t, n, r, i = 0) {
  let a = Math.max(1, n * t),
    o = Math.round(i * t),
    s = Math.exp(-1 / (r * t)),
    c = 1;
  for (let t = 0; t < e.length; t++) {
    if (t < o) {
      e[t] = 0;
      continue;
    }
    let n = t - o;
    n < a ? (e[t] *= n / a) : ((e[t] *= c), (c *= s));
  }
  return e;
}
function ee(e, t) {
  for (let n = 0; n < e.length; n++) e[n] *= t;
  return e;
}
function te(e, t, n, r) {
  let i = Math.round(n * t),
    a = Math.round(r * t),
    o = e.length;
  for (let t = 0; t < i && t < o; t++) e[t] *= t / i;
  for (let t = 0; t < a && t < o; t++) e[o - 1 - t] *= t / a;
  return e;
}
function O(e, t, n = 1, r = 0) {
  let i = Math.round(r),
    a = Math.min(t.length, e.length - i);
  for (let r = Math.max(0, -i); r < a; r++) e[i + r] += t[r] * n;
  return e;
}
function ne(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = Math.abs(e[n]);
    r > t && (t = r);
  }
  return t;
}
function k(e, t = 0.9) {
  let n = e instanceof Float32Array ? [e] : e.ch,
    r = 0;
  for (let e of n) r = Math.max(r, ne(e));
  if (r > 1e-9) for (let e of n) ee(e, t / r);
  return e;
}
