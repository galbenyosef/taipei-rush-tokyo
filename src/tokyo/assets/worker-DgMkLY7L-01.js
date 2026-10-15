// tokyo/assets/worker-DgMkLY7L 01 — math
// Lines 1-349 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
var e = class {
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
};
const t = Math.PI * 2,
  n = (e) => 440 * 2 ** ((e - 69) / 12),
  r = (e) => 2 ** (e / 1200),
  i = (e, t) => (typeof e == `number` ? e : e(t));
function a(e, t) {
  return new Float32Array(Math.max(1, Math.round(e * t)));
}
function o(e, t) {
  return { sr: t, ch: [e] };
}
function s(e, t) {
  let n = new Float32Array(e);
  for (let r = 0; r < e; r++) n[r] = t.bi();
  return n;
}
function c(e, t) {
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
function l(e, t) {
  let n = new Float32Array(e),
    r = 0;
  for (let i = 0; i < e; i++)
    ((r = (r + 0.02 * t.bi()) / 1.02), (n[i] = r * 3.5));
  return n;
}
function u(e, t) {
  return e < t
    ? ((e /= t), e + e - e * e - 1)
    : e > 1 - t
      ? ((e = (e - 1) / t), e * e + e + e + 1)
      : 0;
}
function d(e, n, r, a = `sine`, o = 0, s = 0.5) {
  let c = new Float32Array(e),
    l = o % 1,
    d = typeof r == `number`,
    f = d ? r / n : 0,
    p = 0;
  for (let o = 0; o < e; o++) {
    d || (f = i(r, o / n) / n);
    let e;
    switch (a) {
      case `sine`:
        e = Math.sin(t * l);
        break;
      case `saw`:
        e = 2 * l - 1 - u(l, f);
        break;
      case `square`:
        e = (l < 0.5 ? 1 : -1) + u(l, f) - u((l + 0.5) % 1, f);
        break;
      case `pulse`:
        e = (l < s ? 1 : -1) + u(l, f) - u((l + 1 - s) % 1, f);
        break;
      default: {
        let t = (l < 0.5 ? 1 : -1) + u(l, f) - u((l + 0.5) % 1, f);
        ((p = p * 0.999 + t * 4 * f), (e = p));
      }
    }
    ((c[o] = e), (l += f), l >= 1 && --l);
  }
  return c;
}
function f(e, n, i, a, o = 0, s) {
  let c = new Float32Array(e);
  for (let [l, u, d] of a) {
    let a = i * l * r(o ? (s ? s.bi() : 1) * o : 0);
    if (a >= n * 0.47) continue;
    let f = (t * a) / n,
      p = 2 * Math.cos(f),
      m = s ? s.next() * t : 0,
      h = Math.sin(m - f),
      g = Math.sin(m - 2 * f),
      _ = d > 0 ? Math.exp(-1 / (d * n)) : 1,
      v = u,
      y = d > 0 ? Math.min(e, Math.ceil(d * n * 9)) : e;
    for (let e = 0; e < y; e++) {
      let t = p * h - g;
      ((g = h), (h = t), (c[e] += t * v), (v *= _));
    }
  }
  return c;
}
function p(e, n, r, a, o, s = 0) {
  let c = new Float32Array(e),
    l = 0,
    u = 0,
    d = 0;
  for (let f = 0; f < e; f++) {
    let e = f / n,
      p = i(r, e),
      m = Math.sin(t * u + s * d);
    ((d = m),
      (c[f] = Math.sin(t * l + i(o, e) * m)),
      (l += p / n),
      (u += (p * a) / n),
      l > 1 && --l,
      u > 1 && --u);
  }
  return c;
}
function m(e, n, r, a, o = 0.707, s = 0) {
  let c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = 0,
    p = (e, i) => {
      e = Math.min(Math.max(e, 10), n * 0.49);
      let a = (t * e) / n,
        o = Math.cos(a),
        p = Math.sin(a) / (2 * Math.max(0.05, i)),
        m = 10 ** (s / 40),
        h = 1;
      switch (r) {
        case `lp`:
          ((c = (1 - o) / 2),
            (l = 1 - o),
            (u = c),
            (h = 1 + p),
            (d = -2 * o),
            (f = 1 - p));
          break;
        case `hp`:
          ((c = (1 + o) / 2),
            (l = -(1 + o)),
            (u = c),
            (h = 1 + p),
            (d = -2 * o),
            (f = 1 - p));
          break;
        case `bp`:
          ((c = p), (l = 0), (u = -p), (h = 1 + p), (d = -2 * o), (f = 1 - p));
          break;
        case `notch`:
          ((c = 1),
            (l = -2 * o),
            (u = 1),
            (h = 1 + p),
            (d = -2 * o),
            (f = 1 - p));
          break;
        case `ap`:
          ((c = 1 - p),
            (l = -2 * o),
            (u = 1 + p),
            (h = 1 + p),
            (d = -2 * o),
            (f = 1 - p));
          break;
        case `peak`:
          ((c = 1 + p * m),
            (l = -2 * o),
            (u = 1 - p * m),
            (h = 1 + p / m),
            (d = -2 * o),
            (f = 1 - p / m));
          break;
        case `ls`: {
          let e = 2 * Math.sqrt(m) * p;
          ((c = m * (m + 1 - (m - 1) * o + e)),
            (l = 2 * m * (m - 1 - (m + 1) * o)),
            (u = m * (m + 1 - (m - 1) * o - e)),
            (h = m + 1 + (m - 1) * o + e),
            (d = -2 * (m - 1 + (m + 1) * o)),
            (f = m + 1 + (m - 1) * o - e));
          break;
        }
        case `hs`: {
          let e = 2 * Math.sqrt(m) * p;
          ((c = m * (m + 1 + (m - 1) * o + e)),
            (l = -2 * m * (m - 1 + (m + 1) * o)),
            (u = m * (m + 1 + (m - 1) * o - e)),
            (h = m + 1 - (m - 1) * o + e),
            (d = 2 * (m - 1 - (m + 1) * o)),
            (f = m + 1 - (m - 1) * o - e));
          break;
        }
      }
      ((c /= h), (l /= h), (u /= h), (d /= h), (f /= h));
    },
    m = typeof a != `number` || typeof o != `number`;
  p(i(a, 0), i(o, 0));
  let h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = e.length;
  for (let t = 0; t < y; t++) {
    m && !(t & 15) && p(i(a, t / n), i(o, t / n));
    let r = e[t],
      s = c * r + l * h + u * g - d * _ - f * v;
    ((g = h), (h = r), (v = _), (_ = s), (e[t] = s));
  }
  return e;
}
const h = (e, t, n, r = 0.707) => m(e, t, `lp`, n, r),
  g = (e, t, n, r = 0.707) => m(e, t, `hp`, n, r),
  _ = (e, t, n, r = 1) => m(e, t, `bp`, n, r),
  v = (e, t, n, r, i) => m(e, t, `peak`, n, r, i);
function y(e, n, r) {
  let i = new Float32Array(e.length);
  for (let [a, o, s] of r) {
    if (a >= n * 0.47) continue;
    let r = Math.exp(-1 / (s * n)),
      c = (t * a) / n,
      l = -2 * r * Math.cos(c),
      u = r * r,
      d = o * (1 - r),
      f = 0,
      p = 0;
    for (let t = 0; t < e.length; t++) {
      let n = d * e[t] - l * f - u * p;
      ((p = f), (f = n), (i[t] += n));
    }
  }
  return i;
}
function b(e, t, n) {
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
function x(e, t, n, r, i = 0) {
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
function S(e, t, n = 1, r = 0) {
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
function C(e, t = 0.9) {
  let n = e instanceof Float32Array ? [e] : e.ch,
    r = 0;
  for (let e of n) r = Math.max(r, ne(e));
  if (r > 1e-9) for (let e of n) ee(e, t / r);
  return e;
}
function w(e, t) {
  let n = 1 / Math.tanh(t);
  for (let r = 0; r < e.length; r++) e[r] = Math.tanh(e[r] * t) * n;
  return e;
}
function T(e, t, n, r, i = 1, a = 0) {
  let o = ((r + 1) * Math.PI) / 4;
  (S(e, n, Math.cos(o) * i, a), S(t, n, Math.sin(o) * i, a));
}
