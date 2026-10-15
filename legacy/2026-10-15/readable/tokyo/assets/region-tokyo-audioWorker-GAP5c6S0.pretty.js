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
function S(e, t, n = 1, r = 0) {
  let i = Math.round(r),
    a = Math.min(t.length, e.length - i);
  for (let r = Math.max(0, -i); r < a; r++) e[i + r] += t[r] * n;
  return e;
}
function te(e) {
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
  for (let e of n) r = Math.max(r, te(e));
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
function E(e, t, n = {}) {
  let r = n.size ?? 0.7,
    i = n.damp ?? 0.4,
    a = n.wet ?? 0.3,
    o = n.dry ?? 1,
    s = n.tail ?? 1.5,
    c = Math.round((n.predelay ?? 0.01) * t),
    l = n.width ?? 1,
    u = e.length + Math.round(s * t),
    d = new Float32Array(u),
    f = new Float32Array(u),
    p = t / 44100,
    m = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617],
    h = [556, 441, 341, 225],
    g = 0.28 + 0.7 * r,
    _ = i * 0.4,
    v = 1 - _,
    y = (t, n) => {
      let r = m.map((e) => ({
          buf: new Float32Array(Math.round((e + t) * p)),
          i: 0,
          f: 0,
        })),
        i = h.map((e) => ({
          buf: new Float32Array(Math.round((e + t) * p)),
          i: 0,
        }));
      for (let t = 0; t < u; t++) {
        let a = t - c,
          o = a >= 0 && a < e.length ? e[a] * 0.015 : 0,
          s = 0;
        for (let e of r) {
          let t = e.buf[e.i];
          ((e.f = t * v + e.f * _),
            (e.buf[e.i] = o + e.f * g),
            ++e.i >= e.buf.length && (e.i = 0),
            (s += t));
        }
        for (let e of i) {
          let t = e.buf[e.i],
            n = -s + t;
          ((e.buf[e.i] = s + t * 0.5),
            ++e.i >= e.buf.length && (e.i = 0),
            (s = n));
        }
        n[t] = s;
      }
    };
  (y(0, d), y(23, f));
  let b = a * (l / 2 + 0.5),
    x = a * ((1 - l) / 2);
  for (let t = 0; t < u; t++) {
    let n = d[t],
      r = f[t],
      i = t < e.length ? e[t] * o : 0;
    ((d[t] = n * b + r * x + i), (f[t] = r * b + n * x + i));
  }
  return [d, f];
}
function D(e, t, n) {
  let r = Math.round(n * t),
    i = e.length - r,
    a = e.slice(0, i);
  for (let t = 0; t < r; t++) {
    let n = t / r,
      o = Math.sin((n * Math.PI) / 2),
      s = Math.cos((n * Math.PI) / 2);
    a[t] = e[t] * o + e[i + t] * s;
  }
  return a;
}
function ne(e, t, n) {
  if (n >= t) return e;
  let r = e.slice();
  (m(r, t, `lp`, n * 0.45, 0.54), m(r, t, `lp`, n * 0.45, 1.31));
  let i = Math.max(1, Math.floor((e.length * n) / t)),
    a = new Float32Array(i),
    o = t / n;
  for (let e = 0; e < i; e++) {
    let t = e * o,
      n = Math.floor(t),
      i = t - n;
    a[e] = r[n] * (1 - i) + (r[n + 1] ?? r[n]) * i;
  }
  return a;
}
function re(e, t, n) {
  let r = e.ch;
  if (n && r.length > 1) {
    let e = new Float32Array(r[0].length);
    for (let t = 0; t < e.length; t++) e[t] = (r[0][t] + r[1][t]) * 0.5;
    r = [e];
  }
  return e.sr <= t
    ? { sr: e.sr, ch: r }
    : { sr: t, ch: r.map((n) => ne(n, e.sr, t)) };
}
function ie(e, t, n, r, i = {}) {
  let a = new Float32Array(e),
    o = t / n - 0.5,
    c = Math.max(2, Math.floor(o)),
    l = o - c,
    u = (1 - l) / (1 + l),
    d = new Float32Array(c + 2),
    f = i.bright ?? 0.5,
    p = i.excite ?? s(c, r),
    m = 0,
    h = 0.1 + 0.9 * f;
  for (let e = 0; e < c; e++) ((m += h * (p[e % p.length] - m)), (d[e] = m));
  let g = Math.max(1, Math.round(c * (i.pick ?? 0.18)));
  for (let e = c - 1; e >= g; e--) d[e] -= d[e - g] * 0.9;
  let _ = (i.decay ?? 0.996) ** (440 / n / 2 + 0.5),
    v = 0,
    y = 0,
    b = 0,
    x = 0.5 * (1 - f * 0.4);
  for (let t = 0; t < e; t++) {
    let e = d[v],
      n = d[(v + 1) % c],
      r = (e * (1 - x) + n * x) * _,
      i = u * r + y - u * b;
    ((y = r), (b = i), (r = i), (d[v] = r), (a[t] = e), (v = (v + 1) % c));
  }
  return a;
}
const ae = {
  a: [800, 1200, 2600, 3400],
  e: [480, 1900, 2550, 3500],
  i: [300, 2300, 3e3, 3700],
  o: [520, 880, 2500, 3300],
  u: [330, 800, 2300, 3300],
  ə: [520, 1450, 2500, 3400],
  æ: [700, 1650, 2500, 3500],
};
function oe(e, t, n, r, a, o = {}) {
  let s = o.breath ?? 0.08,
    c = o.jitter ?? 0.01,
    l = o.scale ?? 1,
    u = o.rough ?? 0,
    d = new Float32Array(e),
    f = 0,
    p = 0,
    h = 0;
  for (let r = 0; r < e; r++) {
    let e = r / t;
    r & 63 || (p = p * 0.7 + a.bi() * c * 0.3);
    let o = i(n, e) * (1 + p);
    u > 0 && (o *= h ? 1 + u * 0.09 : 1 - u * 0.09);
    let l = o / t,
      m = 0.6,
      g =
        f < m
          ? 0.5 * (1 - Math.cos((Math.PI * f) / m))
          : f < 0.6799999999999999
            ? Math.cos((Math.PI / 2) * ((f - m) / 0.08))
            : 0;
    ((g -= 0.35),
      (d[r] = g * (1 + (u > 0 ? u * a.bi() * 0.3 : 0)) + a.bi() * s),
      (f += l),
      f >= 1 && (--f, (h ^= 1)));
  }
  for (let t = e - 1; t > 0; t--) d[t] = d[t] - 0.95 * d[t - 1];
  let g = new Float32Array(e),
    _ = [90, 110, 150, 200],
    v = [1, 0.6, 0.28, 0.12];
  for (let e = 0; e < 4; e++) {
    let n = d.slice();
    (m(
      n,
      t,
      `bp`,
      (t) => r(t)[e] * l,
      (t) => (r(t)[e] * l) / _[e],
    ),
      S(g, n, v[e] * (e === 0 ? 1 : 1.4)));
  }
  if (o.amp) for (let n = 0; n < e; n++) g[n] *= o.amp(n / t);
  return g;
}
function se(e) {
  let t = [0, 0, 0, 0];
  return (n) => {
    let r = 0;
    for (; r + 1 < e.length && n >= e[r + 1][0];) r++;
    let i = ae[e[r][1]],
      a = ae[e[Math.min(e.length - 1, r + 1)][1]],
      o = e[r][0],
      s = e[Math.min(e.length - 1, r + 1)][0],
      c = s > o ? Math.min(1, Math.max(0, (n - o) / (s - o))) : 0,
      l = c * c * (3 - 2 * c);
    for (let e = 0; e < 4; e++) t[e] = i[e] + (a[e] - i[e]) * l;
    return t;
  };
}
const ce = {
    piano: {
      roots: [36, 48, 60, 72, 84],
      dur: 2.6,
      sr: 32e3,
      release: 0.12,
      sustain: !1,
    },
    epiano: {
      roots: [42, 54, 66, 78],
      dur: 2.2,
      sr: 32e3,
      release: 0.15,
      sustain: !1,
    },
    nylon: {
      roots: [45, 57, 69, 81],
      dur: 1.8,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    bass: {
      roots: [28, 40, 52],
      dur: 1.5,
      sr: 22050,
      release: 0.05,
      sustain: !1,
    },
    synthbass: {
      roots: [28, 40, 52],
      dur: 1.2,
      sr: 22050,
      release: 0.04,
      sustain: !0,
    },
    pad: {
      roots: [48, 60, 72],
      dur: 3.8,
      sr: 22050,
      release: 0.5,
      sustain: !0,
    },
    strings: {
      roots: [43, 55, 67, 79],
      dur: 3.6,
      sr: 22050,
      release: 0.35,
      sustain: !0,
    },
    supersaw: {
      roots: [54, 66, 78],
      dur: 1.3,
      sr: 32e3,
      release: 0.12,
      sustain: !0,
    },
    lead: {
      roots: [60, 72, 84],
      dur: 1.3,
      sr: 32e3,
      release: 0.08,
      sustain: !0,
    },
    suona: {
      roots: [66, 72, 78, 84],
      dur: 1.7,
      sr: 22050,
      release: 0.08,
      sustain: !0,
    },
    erhu: {
      roots: [60, 66, 72, 78],
      dur: 2.2,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    vox: {
      roots: [60, 66, 72, 78],
      dur: 2.2,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    power: {
      roots: [40, 46, 52],
      dur: 1.7,
      sr: 32e3,
      release: 0.06,
      sustain: !0,
    },
    chug: {
      roots: [40, 46, 52],
      dur: 0.4,
      sr: 32e3,
      release: 0.03,
      sustain: !1,
    },
    distlead: {
      roots: [60, 66, 72, 78],
      dur: 1.8,
      sr: 32e3,
      release: 0.1,
      sustain: !0,
    },
    organ: {
      roots: [48, 60, 72],
      dur: 2.2,
      sr: 22050,
      release: 0.06,
      sustain: !0,
    },
    harpsi: {
      roots: [48, 60, 72, 84],
      dur: 1.6,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    musicbox: { roots: [72, 84], dur: 2, sr: 32e3, release: 0.2, sustain: !1 },
    marimba: {
      roots: [60, 72, 84],
      dur: 1.2,
      sr: 32e3,
      release: 0.1,
      sustain: !1,
    },
    flute: {
      roots: [72, 78, 84],
      dur: 2,
      sr: 22050,
      release: 0.1,
      sustain: !0,
    },
  },
  le = {
    tk_piyo: 2,
    tk_kakko: 2,
    tk_door: 1,
    tk_pa: 1,
    tk_konbini: 2,
    tk_bell: 2,
    tk_bikestart: 1,
    tk_kankan: 1,
    tk_suzu: 2,
    tk_crow: 3,
    tk_siren_far: 2,
    tk_atc: 1,
    tk_atcb: 1,
    tk_buzz: 1,
    tk_yuyake: 1,
    tk_hotaru: 1,
    tk_hyoshigi: 1,
    tk_mel0: 2,
    tk_mel1: 2,
    tk_mel2: 2,
    tk_mel3: 2,
    tk_mel4: 2,
    tk_mel5: 2,
    tk_mel6: 2,
    tk_mel7: 2,
  },
  ue = {
    tk_koto: {
      roots: [55, 67, 79],
      dur: 2.4,
      sr: 32e3,
      release: 0.2,
      sustain: !1,
    },
    tk_shaku: {
      roots: [62, 69, 76],
      dur: 2.4,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    tk_brass: {
      roots: [55, 62, 69, 76],
      dur: 1.4,
      sr: 32e3,
      release: 0.08,
      sustain: !0,
    },
    tk_slap: {
      roots: [28, 40, 52],
      dur: 1.3,
      sr: 22050,
      release: 0.05,
      sustain: !1,
    },
    tk_glock: {
      roots: [72, 84, 96],
      dur: 1.6,
      sr: 32e3,
      release: 0.2,
      sustain: !1,
    },
  },
  O = [0, 4, 7],
  de = [2, 5, 9],
  fe = [4, 7, 11],
  k = [5, 9, 12],
  A = [7, 11, 14],
  pe = [9, 12, 16],
  me = [5, 9, 12, 16],
  he = [7, 11, 14, 17],
  ge = [0, 4, 7, 11],
  _e = [9, 12, 16, 19],
  ve = [2, 5, 9, 12],
  ye = [
    {
      bpm: 126,
      tonic: 72,
      voice: `vibes`,
      beats: 16,
      tail: 12,
      lead: [
        [0, 7, 0.5],
        [0.5, 12, 0.5],
        [1, 16, 0.5],
        [1.5, 14, 0.5],
        [2, 12, 1],
        [3, 9, 0.5],
        [3.5, 7, 0.5],
        [4, 9, 0.5],
        [4.5, 12, 0.5],
        [5, 14, 1],
        [6, 16, 0.5],
        [6.5, 14, 0.5],
        [7, 12, 1],
        [8, 4, 0.5],
        [8.5, 7, 0.5],
        [9, 12, 0.5],
        [9.5, 16, 0.5],
        [10, 19, 1],
        [11, 17, 0.5],
        [11.5, 16, 0.5],
        [12, 14, 1],
        [13, 11, 0.5],
        [13.5, 14, 0.5],
        [14, 12, 2],
      ],
      chords: [
        [0, O, 4],
        [4, pe, 4],
        [8, k, 4],
        [12, A, 2],
        [14, O, 2],
      ],
    },
    {
      bpm: 120,
      tonic: 74,
      voice: `glock`,
      beats: 14,
      tail: 10,
      lead: [
        [0, 4, 0.5],
        [0.5, 7, 0.5],
        [1, 9, 0.5],
        [1.5, 12, 0.5],
        [2, 9, 0.5],
        [2.5, 7, 0.5],
        [3, 4, 1],
        [4, 2, 0.5],
        [4.5, 4, 0.5],
        [5, 7, 0.5],
        [5.5, 9, 0.5],
        [6, 7, 1.5],
        [8, 9, 0.5],
        [8.5, 12, 0.5],
        [9, 14, 0.5],
        [9.5, 16, 0.5],
        [10, 14, 0.5],
        [10.5, 12, 0.5],
        [11, 9, 0.5],
        [11.5, 7, 0.5],
        [12, 9, 0.5],
        [12.5, 4, 0.5],
        [13, 7, 1],
      ],
      chords: [
        [0, O, 4],
        [4, ve, 4],
        [8, k, 4],
        [12, A, 2],
      ],
    },
    {
      bpm: 112,
      tonic: 70,
      voice: `epiano`,
      beats: 12,
      tail: 9,
      lead: [
        [0, 7, 1],
        [1, 12, 0.5],
        [1.5, 11, 0.5],
        [2, 9, 1],
        [3, 5, 1],
        [4, 9, 0.5],
        [4.5, 7, 0.5],
        [5, 4, 1],
        [6, 2, 1],
        [7, 5, 0.5],
        [7.5, 9, 0.5],
        [8, 12, 1],
        [9, 11, 1],
        [10, 7, 1],
        [11, 14, 1],
      ],
      chords: [
        [0, ge, 3],
        [3, me, 3],
        [6, ve, 3],
        [9, he, 3],
      ],
    },
    {
      bpm: 132,
      tonic: 72,
      voice: `marimba`,
      beats: 16,
      tail: 12,
      lead: [
        [0, 0, 0.5],
        [0.5, 4, 0.5],
        [1, 7, 0.5],
        [1.5, 4, 0.5],
        [2, 9, 1],
        [3, 7, 1],
        [4, 2, 0.5],
        [4.5, 5, 0.5],
        [5, 9, 0.5],
        [5.5, 5, 0.5],
        [6, 11, 1],
        [7, 9, 1],
        [8, 4, 0.5],
        [8.5, 7, 0.5],
        [9, 12, 0.5],
        [9.5, 7, 0.5],
        [10, 14, 1],
        [11, 12, 1],
        [12, 11, 0.5],
        [12.5, 12, 0.5],
        [13, 14, 0.5],
        [13.5, 16, 0.5],
        [14, 19, 2],
      ],
      chords: [
        [0, O, 4],
        [4, de, 4],
        [8, fe, 2],
        [10, pe, 2],
        [12, k, 2],
        [14, A, 2],
      ],
    },
    {
      bpm: 100,
      tonic: 77,
      voice: `celesta`,
      beats: 12,
      tail: 8,
      lead: [
        [0, 12, 1.5],
        [1.5, 11, 0.5],
        [2, 7, 1],
        [3, 9, 1],
        [4, 5, 1.5],
        [5.5, 7, 0.5],
        [6, 9, 2],
        [8, 7, 1],
        [9, 4, 1],
        [10, 2, 1],
        [11, 7, 1],
      ],
      chords: [
        [0, O, 4],
        [4, k, 4],
        [8, ve, 2],
        [10, A, 2],
      ],
    },
    {
      bpm: 116,
      tonic: 69,
      voice: `vibes`,
      beats: 14,
      tail: 10,
      lead: [
        [0, 12, 0.5],
        [0.5, 10, 0.5],
        [1, 7, 0.5],
        [1.5, 10, 0.5],
        [2, 12, 1],
        [3, 14, 1],
        [4, 16, 0.5],
        [4.5, 14, 0.5],
        [5, 12, 0.5],
        [5.5, 10, 0.5],
        [6, 7, 1.5],
        [8, 5, 0.5],
        [8.5, 7, 0.5],
        [9, 10, 0.5],
        [9.5, 12, 0.5],
        [10, 14, 1],
        [11, 12, 1],
        [12, 7, 0.5],
        [12.5, 9, 0.5],
        [13, 12, 1],
      ],
      chords: [
        [0, O, 4],
        [4, [10, 14, 17], 4],
        [8, k, 4],
        [12, O, 2],
      ],
    },
    {
      bpm: 140,
      tonic: 76,
      voice: `glock`,
      beats: 16,
      tail: 12,
      lead: [
        [0, 0, 0.5],
        [0.5, 4, 0.5],
        [1, 7, 0.5],
        [1.5, 12, 0.5],
        [2, 7, 0.5],
        [2.5, 4, 0.5],
        [3, 7, 1],
        [4, -3, 0.5],
        [4.5, 0, 0.5],
        [5, 4, 0.5],
        [5.5, 9, 0.5],
        [6, 4, 0.5],
        [6.5, 0, 0.5],
        [7, 4, 1],
        [8, -7, 0.5],
        [8.5, -3, 0.5],
        [9, 0, 0.5],
        [9.5, 5, 0.5],
        [10, 9, 0.5],
        [10.5, 12, 0.5],
        [11, 9, 1],
        [12, 7, 0.5],
        [12.5, 11, 0.5],
        [13, 14, 0.5],
        [13.5, 11, 0.5],
        [14, 12, 2],
      ],
      chords: [
        [0, O, 4],
        [4, pe, 4],
        [8, k, 4],
        [12, A, 4],
      ],
    },
    {
      bpm: 104,
      tonic: 74,
      voice: `epiano`,
      beats: 12,
      tail: 8,
      lead: [
        [0, 16, 1],
        [1, 14, 0.5],
        [1.5, 12, 0.5],
        [2, 11, 1],
        [3, 7, 1],
        [4, 9, 1],
        [5, 12, 0.5],
        [5.5, 9, 0.5],
        [6, 7, 2],
        [8, 5, 0.5],
        [8.5, 7, 0.5],
        [9, 9, 0.5],
        [9.5, 12, 0.5],
        [10, 14, 2],
      ],
      chords: [
        [0, ge, 2],
        [2, fe, 2],
        [4, _e, 4],
        [8, me, 2],
        [10, he, 2],
      ],
    },
  ],
  be = { 1: 0, 2: 2, 3: 4, 5: 7, 6: 9, "1'": 12, "2'": 14 },
  xe = [
    [`5`, 0.5],
    [`5`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`5`, 0.5],
    [`5`, 0.5],
    [`3`, 0.5],
    [`1`, 0.5],
    [`1`, 0.5],
    [`2`, 0.5],
    [`3`, 0.5],
    [`2`, 1],
    [`r`, 1],
    [`3`, 1],
    [`3`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`1'`, 0.5],
    [`1'`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`1'`, 1.5],
    [`r`, 0.5],
    [`1'`, 0.75],
    [`2'`, 0.25],
    [`1'`, 0.5],
    [`6`, 0.5],
    [`1'`, 0.5],
    [`1'`, 0.5],
    [`5`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`3`, 1.5],
    [`r`, 0.5],
    [`5`, 0.5],
    [`3`, 0.5],
    [`2`, 0.5],
    [`1`, 0.5],
    [`2`, 0.5],
    [`2`, 0.5],
    [`1`, 0.5],
    [`2`, 0.5],
    [`3`, 0.5],
    [`5`, 0.5],
    [`6`, 0.5],
    [`5`, 0.5],
    [`1'`, 1.5],
    [`r`, 0.5],
  ],
  Se = (() => {
    let e = [],
      t = 0;
    for (let [n, r] of xe) (n !== `r` && e.push([t, be[n], r]), (t += r));
    return { bpm: 69, tonic: 74, notes: e, beats: t };
  })(),
  Ce = { ...be, "5,": -5, "6,": -3 },
  we = [
    [`5,`, 1],
    [`1`, 1.5],
    [`1`, 0.5],
    [`1`, 1],
    [`3`, 1],
    [`2`, 1.5],
    [`1`, 0.5],
    [`2`, 1],
    [`3`, 1],
    [`1`, 1.5],
    [`1`, 0.5],
    [`3`, 1],
    [`5`, 1],
    [`6`, 3],
    [`6`, 1],
    [`5`, 1.5],
    [`3`, 0.5],
    [`3`, 1],
    [`1`, 1],
    [`2`, 1.5],
    [`1`, 0.5],
    [`2`, 1],
    [`3`, 1],
    [`1`, 1.5],
    [`6,`, 0.5],
    [`6,`, 1],
    [`5,`, 1],
    [`1`, 3],
    [`6`, 1],
    [`5`, 1.5],
    [`3`, 0.5],
    [`3`, 1],
    [`1`, 1],
    [`2`, 1.5],
    [`1`, 0.5],
    [`2`, 1],
    [`6`, 1],
    [`5`, 1.5],
    [`3`, 0.5],
    [`3`, 1],
    [`5`, 1],
    [`6`, 3],
    [`1'`, 1],
    [`5`, 1.5],
    [`3`, 0.5],
    [`3`, 1],
    [`1`, 1],
    [`2`, 1.5],
    [`1`, 0.5],
    [`2`, 1],
    [`3`, 1],
    [`1`, 1.5],
    [`6,`, 0.5],
    [`6,`, 1],
    [`5,`, 1],
    [`1`, 4],
  ],
  Te = `I V I IV I V IV-V I I V I IV I V IV-V I`.split(` `),
  Ee = { I: [0, 4, 7], IV: [5, 9, 12], V: [7, 11, 14] },
  j = (() => {
    let e = [],
      t = 0;
    for (let [n, r] of we) (e.push([t, Ce[n], r]), (t += r));
    let n = [];
    return (
      Te.forEach((e, t) => {
        let r = 1 + t * 4,
          [i, a] = e.split(`-`);
        a ? n.push([r, Ee[i], 2], [r + 2, Ee[a], 2]) : n.push([r, Ee[i], 4]);
      }),
      { bpm: 80, tonic: 72, notes: e, chords: n, beats: t }
    );
  })(),
  M = 32e3,
  N = 22050;
function P(e, t, n, r) {
  let i = f(Math.round(n * e), e, t, r),
    a = Math.round(0.002 * e);
  for (let e = 0; e < a && e < i.length; e++) i[e] *= e / a;
  return i;
}
const F = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [4, 0.2, r * 0.18],
      [10.1, 0.04, r * 0.05],
    ]),
  De = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [2.71, 0.32, r * 0.3],
      [5.06, 0.12, r * 0.12],
      [8.9, 0.05, r * 0.05],
    ]),
  Oe = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r * 0.5],
      [3.93, 0.26, r * 0.12],
      [9.2, 0.05, r * 0.04],
    ]),
  ke = (e, t, n, r) =>
    P(e, t, n, [
      [1, 1, r],
      [2, 0.22, r * 0.4],
      [3, 0.08, r * 0.2],
      [4.1, 0.05, r * 0.1],
    ]);
function Ae(e, t, n, r) {
  let i = Math.round(n * e),
    a = p(i, e, t, 1, (e) => 1.6 * Math.exp(-e / 0.25) + 0.25);
  return (
    S(
      a,
      p(i, e, t, 14, (e) => 0.9 * Math.exp(-e / 0.02)),
      0.1,
    ),
    x(a, e, 0.002, r)
  );
}
function I(e, t, n, r, i, a, o, c) {
  let l = s(Math.round(t * e), n);
  return (
    r === `lp` ? h(l, e, i, a) : r === `hp` ? g(l, e, i, a) : _(l, e, i, a),
    x(l, e, o, c)
  );
}
function je(e, t, n, r) {
  let i = new Float32Array(Math.round(t * e));
  return (S(i, I(e, 0.004, n, `hp`, 3e3, 0.7, 2e-4, 8e-4), 1), y(i, e, r));
}
function L(e, t, n, r, i, a) {
  return x(
    d(Math.round(t * e), e, (e) => r + (n - r) * Math.exp(-e / i), `sine`),
    e,
    8e-4,
    a,
  );
}
function Me(e, t, n, r, i = 1500) {
  let a = Math.round(n * e),
    o = new Float32Array(a);
  for (let n of t)
    for (let i = 0; i < 2; i++)
      S(
        o,
        d(a, e, n * (1 + (i ? 0.004 : -0.004)), `saw`, r.next()),
        0.5 / t.length,
      );
  return (
    h(o, e, i, 0.6),
    b(o, e, [0, 0, 0.12, 1, Math.max(0.2, n - 0.25), 0.8, n, 0])
  );
}
function Ne(e, t, n, r = 1) {
  let i = e.length;
  for (let a = 0; a < t.length; a++) e[(n + a) % i] += t[a] * r;
}
function Pe(e, t, n, r, i) {
  let a = Math.min(1.4, 0.35 + r * i * 0.6),
    o = Math.min(2.6, r * i + 1.2);
  switch (e.voice) {
    case `glock`:
      return De(t, n, o, a * 0.8);
    case `marimba`:
      return Oe(t, n, o, a);
    case `celesta`:
      return ke(t, n, o, a);
    case `epiano`:
      return Ae(t, n, o, a);
    default:
      return F(t, n, o, a);
  }
}
function Fe(e, t, r) {
  let i = 24e3,
    s = 60 / e.bpm,
    c = (e.beats - r) * s + 1.4,
    l = a(c, i),
    u = (e) => Math.round((e - r) * s * i);
  for (let [t, a, o] of e.lead) {
    if (t < r) continue;
    let c = n(e.tonic + a);
    (S(l, Pe(e, i, c, o, s), 0.55, u(t)),
      S(l, Pe(e, i, c / 2, o, s), 0.12, u(t)));
  }
  for (let [a, o, c] of e.chords) {
    if (a + c <= r) continue;
    let d = Math.max(a, r);
    S(
      l,
      Me(
        i,
        o.map((t) => n(e.tonic - 12 + t)),
        (a + c - d) * s + 0.2,
        t,
      ),
      0.11,
      u(d),
    );
  }
  for (let n = Math.ceil(r); n < e.beats; n++)
    S(l, I(i, 0.08, t, `hp`, 6500, 0.7, 0.004, 0.025), 0.05, u(n + 0.5));
  b(l, i, [0, 1, c - 1, 1, c - 0.2, 0]);
  let [d] = E(l, i, {
    size: 0.45,
    damp: 0.5,
    wet: 0.16,
    dry: 1,
    tail: 0.6,
    predelay: 0.012,
  });
  return o(C(d, 0.8), i);
}
function Ie(e) {
  let t = 11025,
    r = 60 / Se.bpm,
    i = a(Se.beats * r + 5, t);
  for (let [e, a, o] of Se.notes) {
    let s = n(Se.tonic + a),
      c = P(t, s, Math.min(3, o * r + 1.4), [
        [1, 1, 0.9 + o * 0.5],
        [2, 0.35, 0.5],
        [3.01, 0.18, 0.25],
        [4.2, 0.08, 0.12],
        [5.43, 0.05, 0.08],
      ]),
      l = d(c.length, t, s, `tri`);
    (b(l, t, [0, 0, 0.04, 1, o * r * 0.9, 0.8, o * r + 0.25, 0]),
      S(c, l, 0.22),
      S(i, c, 0.5, Math.round(e * r * t)));
  }
  (g(i, t, 320, 0.8), h(i, t, 3400, 0.9), v(i, t, 1400, 1.2, 4), w(i, 1.6));
  let s = new Float32Array(i);
  for (let [e, n, r] of [
    [0.33, 0.55, 2400],
    [0.9, 0.38, 1700],
    [1.55, 0.24, 1200],
  ]) {
    let a = new Float32Array(i);
    (h(a, t, r, 0.7), S(s, a, n, Math.round(e * t)));
  }
  h(s, t, 2600, 0.7);
  let [l] = E(s, t, {
      size: 0.85,
      damp: 0.55,
      wet: 0.45,
      dry: 0.75,
      tail: 3.2,
      predelay: 0.05,
    }),
    u = c(l.length, e);
  return (
    _(u, t, 500, 0.5),
    S(l, u, 0.004),
    b(l, t, [0, 0, 0.3, 1, l.length / t - 1.5, 1, l.length / t, 0]),
    o(C(l, 0.8), t)
  );
}
function Le(e) {
  let t = 11025,
    r = 60 / j.bpm,
    i = a(j.beats * r + 3, t),
    s = (e) => Math.round(e * r * t);
  for (let [e, a, o] of j.notes) {
    let c = n(j.tonic + a),
      l = Math.min(3.2, o * r + 1.3),
      u = 0.45 + o * r * 0.45;
    (S(i, ke(t, c, l, u), 0.5, s(e)), S(i, ke(t, c / 2, l, u), 0.14, s(e)));
  }
  for (let [a, o, c] of j.chords)
    S(
      i,
      Me(
        t,
        o.map((e) => n(j.tonic - 12 + e)),
        c * r + 0.25,
        e,
        1100,
      ),
      0.13,
      s(a),
    );
  (g(i, t, 250, 0.7), h(i, t, 4e3, 0.7), v(i, t, 1800, 1, 3));
  let [c] = E(i, t, {
    size: 0.75,
    damp: 0.5,
    wet: 0.35,
    dry: 0.8,
    tail: 2.2,
    predelay: 0.02,
  });
  return (
    b(c, t, [0, 0, 0.05, 1, c.length / t - 1.2, 1, c.length / t, 0]),
    o(C(c, 0.8), t)
  );
}
function Re(e, n, r, i) {
  let a = new Float32Array(e),
    o = i.map(() => r.next() * t);
  for (let r = 0; r < e; r++) {
    let e = 0;
    for (let a = 0; a < i.length; a++) e += Math.sin((t * i[a] * r) / n + o[a]);
    a[r] = 0.5 + (0.5 * e) / i.length;
  }
  return a;
}
function R(e, t, n, r, i = 0.003) {
  return b(
    d(Math.round(t * e), e, (e) => n + (r - n) * (e / t), `sine`),
    e,
    [0, 0, i, 1, t * 0.6, 0.7, t, 0],
  );
}
function ze(e, t, n, r, i, a) {
  let o = e.length;
  for (let s of [e, t]) {
    let e = c(o, r);
    (g(e, n, 1800), h(e, n, 6500));
    let t = Re(o, n, r, [0.09, 0.21]),
      u = l(o, r);
    h(u, n, 190);
    for (let n = 0; n < o; n++) s[n] += e[n] * i * t[n] + u[n] * a;
  }
}
const Be = {
  tk_piyo: (e, t) => {
    let n = M,
      r = a(0.42, n),
      i = t ? 0.94 : 1,
      s = (e) => {
        let t = d(1088, n, (e) => i * (2900 + (e / 0.034) * 400), `sine`);
        b(t, n, [0, 0, 0.004, 1, 0.028, 0.9, 0.034, 0]);
        let a = 0.082,
          o = (e) => i * (3200 - 900 * (e / a) ** 0.8),
          s = d(2624, n, o, `sine`);
        (S(
          s,
          d(s.length, n, (e) => 2 * o(e), `sine`),
          0.1,
        ),
          b(s, n, [0, 0, 0.006, 1, 0.057, 0.85, a, 0]),
          S(r, t, 1, Math.round(e * n)),
          S(r, s, 1, Math.round((e + 0.048) * n)));
      };
    return (s(0.01), t && s(0.2), w(r, 1.3), o(C(r, 0.75), n));
  },
  tk_kakko: (e, t) => {
    let n = M,
      r = a(t ? 0.62 : 0.5, n),
      i = t ? 1.04 : 1,
      s = (e, t, a, o, s = 1) => {
        let c = d(
          Math.round(a * n),
          n,
          (n) => i * (e + (t - e) * (n / a)),
          `sine`,
        );
        (S(
          c,
          d(c.length, n, (n) => 3 * i * (e + (t - e) * (n / a)), `sine`),
          0.06,
        ),
          b(c, n, [0, 0, 0.012, 1, a * 0.75, 0.75, a, 0]),
          S(r, c, s, Math.round(o * n)));
      },
      c = 0.01;
    return (
      t && (s(1e3, 990, 0.045, c, 0.8), (c += 0.085)),
      s(1005, 995, 0.06, c),
      s(805, 780, 0.26, c + 0.11),
      o(C(r, 0.75), n)
    );
  },
  tk_door: (e) => {
    let t = M,
      r = a(2.1, t);
    for (let e = 0; e < 3; e++) {
      let i = 0.02 + e * 0.5;
      (S(r, F(t, n(88), 0.9, 0.35), 0.6, Math.round(i * t)),
        S(r, F(t, n(85), 1, 0.4), 0.6, Math.round((i + 0.2) * t)));
    }
    let [i] = E(r, t, { size: 0.4, wet: 0.12, tail: 0.3 });
    return o(C(i, 0.8), t);
  },
  tk_atc: () => Ge(!1),
  tk_atcb: () => Ge(!0),
  tk_buzz: (e) => {
    let t = N,
      n = a(0.75, t);
    for (let [e, r] of [
      [0.01, 0.12],
      [0.22, 0.3],
    ]) {
      let i = d(Math.round(r * t), t, 420, `square`);
      (S(i, d(Math.round(r * t), t, 840, `saw`), 0.15),
        h(i, t, 1800, 0.7),
        S(
          n,
          b(i, t, [0, 0, 0.01, 1, r - 0.02, 1, r, 0]),
          0.6,
          Math.round(e * t),
        ));
    }
    return o(C(n, 0.6), t);
  },
  tk_pa: (e) => {
    let t = M,
      r = a(2.2, t);
    [77, 81, 84, 89].forEach((e, i) =>
      S(
        r,
        F(t, n(e), 1.6, i === 3 ? 0.9 : 0.5),
        0.5,
        Math.round((0.02 + i * 0.22) * t),
      ),
    );
    let [i] = E(r, t, { size: 0.55, wet: 0.2, tail: 0.5 });
    return o(C(i, 0.75), t);
  },
  tk_konbini: (e, t) => {
    let r = M,
      i = a(t ? 1.7 : 1.3, r),
      s = t
        ? [
            [79, 0],
            [84, 0.13],
            [88, 0.26],
            [86, 0.39],
            [83, 0.6],
            [84, 0.73],
          ]
        : [
            [81, 0],
            [78, 0.3],
          ];
    for (let [e, a] of s)
      S(i, F(r, n(e), 1, t ? 0.45 : 0.8), 0.6, Math.round((a + 0.01) * r));
    return o(C(i, 0.75), r);
  },
  tk_bell: (e, t) => {
    let n = 44100,
      r = a(t ? 1.25 : 0.9, n),
      i = (t, i) => {
        S(
          r,
          je(n, 0.85, e, [
            [2410, 1, 0.42],
            [3920, 0.7, 0.3],
            [5830, 0.45, 0.18],
            [7380, 0.25, 0.1],
          ]),
          i,
          Math.round(t * n),
        );
        for (let a = 1; a <= 3; a++)
          S(
            r,
            je(n, 0.25, e, [
              [2410, 1, 0.2],
              [5830, 0.5, 0.1],
            ]),
            (i * 0.35) / a,
            Math.round((t + 0.035 * a) * n),
          );
      };
    return (i(0.005, 1), t && i(0.3, 0.9), o(C(r, 0.8), n));
  },
  tk_bikestart: (e) => {
    let t = M,
      n = a(0.75, t);
    (S(n, L(t, 0.12, 420, 180, 0.01, 0.03), 0.6, 0),
      S(n, I(t, 0.05, e, `bp`, 1800, 1.4, 5e-4, 0.012), 0.8, 0),
      S(
        n,
        je(t, 0.3, e, [
          [1240, 1, 0.12],
          [3110, 0.5, 0.06],
        ]),
        0.5,
        0,
      ));
    for (let e of [0.35, 0.48]) {
      let r = d(2240, t, 2050, `square`);
      (h(r, t, 3800),
        b(r, t, [0, 0, 0.003, 1, 0.06, 1, 0.07, 0]),
        S(n, r, 0.18, Math.round(e * t)));
    }
    return o(C(n, 0.75), t);
  },
  tk_kankan: (e) => {
    let t = M,
      n = a(0.95, t);
    return (
      S(n, Ve(t, 730, e), 1, 0),
      S(n, Ve(t, 742, e), 0.92, 13440),
      o(C(n, 0.8), t)
    );
  },
  tk_suzu: (e, t) => {
    let n = M,
      r = a(t ? 1.6 : 2.6, n);
    for (let t = 0; t < 46; t++) {
      let i = 0.02 + (t / 46) * 1.1 + e.range(-0.01, 0.01);
      S(
        r,
        P(n, e.range(3e3, 6800), 0.35, [
          [1, 1, 0.12],
          [1.51, 0.4, 0.06],
        ]),
        (0.25 + 0.3 * Math.sin((Math.PI * t) / 46)) * e.range(0.6, 1),
        Math.round(i * n),
      );
    }
    if (!t)
      for (let t of [1.75, 2.25]) {
        let i = I(n, 0.09, e, `bp`, 1300, 0.9, 4e-4, 0.016);
        (S(i, L(n, 0.06, 300, 160, 0.005, 0.012), 0.3),
          S(r, i, 1.4, Math.round(t * n)));
      }
    let [i] = E(r, n, { size: 0.6, wet: 0.18, tail: 0.6 });
    return o(C(i, 0.8), n);
  },
  tk_crow: (e, t) => {
    let n = N,
      r = 2 + (t % 2),
      i = a(0.55 * r + 0.3, n);
    for (let a = 0; a < r; a++) {
      let r = e.range(0.28, 0.4),
        o = e.range(480, 560),
        s = oe(
          Math.round(r * n),
          n,
          (e) => o * (1 - (e / r) * 0.18),
          se([
            [0, `a`],
            [r * 0.7, `a`],
            [r, `o`],
          ]),
          e,
          { rough: 0.9, breath: 0.25, jitter: 0.05, scale: 1.25 },
        );
      (b(s, n, [0, 0, 0.02, 1, r * 0.6, 0.85, r, 0]),
        S(i, s, 1, Math.round((0.02 + a * (0.5 + 0.05 * t)) * n)));
    }
    return (g(i, n, 300), w(i, 1.8), o(C(i, 0.7), n));
  },
  tk_siren_far: (e, n) => {
    let r = 8e3,
      i = 52e3,
      a = n
        ? (e) => 450 + 800 * (0.5 - 0.5 * Math.cos((t * e) / 4))
        : (e) => (Math.floor(e / 0.65) % 2 ? 770 : 960),
      o = d(i, r, a, `square`);
    (S(
      o,
      d(i, r, (e) => a(e) * 1.003, `saw`),
      0.5,
    ),
      h(o, r, 1500, 0.7),
      b(o, r, [0, 0, 1.5, 0.7, 3.8, 1, 5.3, 0.5, 6.5, 0]));
    let [s, c] = E(o, r, {
      size: 0.8,
      damp: 0.6,
      wet: 0.5,
      dry: 0.5,
      tail: 1.2,
    });
    return (h(s, r, 1800), h(c, r, 1800), C({ sr: r, ch: [s, c] }, 0.6));
  },
  tk_yuyake: (e) => Ie(e),
  tk_hotaru: (e) => Le(e),
  tk_hyoshigi: (e) => {
    let t = N,
      n = a(1, t);
    for (let [r, i, a] of [
      [0.02, 1, 1],
      [0.44, 0.85, 0.97],
    ]) {
      let o = je(t, 0.22, e, [
        [1480 * a, 1, 0.032],
        [2410 * a, 0.6, 0.02],
        [3920 * a, 0.32, 0.011],
        [5650 * a, 0.16, 0.007],
      ]);
      (S(o, I(t, 0.012, e, `bp`, 2600, 1.2, 2e-4, 0.003), 0.6),
        S(n, o, i, Math.round(r * t)));
    }
    let [r] = E(n, t, {
      size: 0.75,
      damp: 0.45,
      wet: 0.32,
      dry: 1,
      tail: 0.9,
      predelay: 0.03,
    });
    return o(C(r, 0.8), t);
  },
};
ye.forEach((e, t) => {
  Be[`tk_mel${t}`] = (t, n) => Fe(e, t, n ? e.tail : 0);
});
function Ve(e, t, n) {
  let r = P(e, t, 0.5, [
    [1, 1, 0.3],
    [2.32, 0.45, 0.16],
    [3.89, 0.25, 0.09],
    [5.4, 0.12, 0.05],
  ]);
  return (S(r, I(e, 0.01, n, `hp`, 2500, 0.7, 2e-4, 0.002), 0.3), w(r, 1.4), r);
}
const He = {
    tk_mushi: (e) => {
      let n = N,
        r = 286650,
        i = new Float32Array(r),
        a = new Float32Array(r),
        o = (e, r, i) => {
          let a = d(
            Math.round(r * n),
            n,
            (t) => e * (1 - (t / r) * 0.025),
            `sine`,
          );
          for (let e = 0; e < a.length; e++)
            a[e] *= (0.5 + 0.5 * Math.sin((t * i * e) / n)) ** 2;
          return b(a, n, [0, 0, 0.02, 1, r - 0.04, 0.85, r, 0]);
        };
      for (let t = 0; t < 3; t++) {
        let t = e.range(4100, 4650),
          r = e.bi() * 0.85,
          s = e.range(0.35, 0.6),
          c = e.range(38, 50);
        for (let l = e.next() * 1.5; l < 12.2; l += e.range(0.9, 2.6)) {
          let u = 2 + e.int(5);
          for (let d = 0; d < u && l < 12.4; d++) {
            let u = e.range(0.22, 0.4);
            (T(i, a, o(t * e.range(0.995, 1.005), u, c), r, s, l * n),
              (l += u + e.range(0.12, 0.3)));
          }
        }
      }
      for (let t = 0; t < 2; t++) {
        let t = e.range(4350, 4900),
          r = e.bi() * 0.9,
          o = e.range(0.25, 0.42);
        for (let s = e.next() * 2; s < 11.8; s += e.range(1.7, 3.4)) {
          let c = s,
            l = 2 + e.int(2);
          for (let e = 0; e < l; e++, c += 0.14)
            for (let e = 0; e < 4; e++)
              T(
                i,
                a,
                R(n, 0.014, t, t * 0.99),
                r,
                o * 0.8,
                (c + e * 0.022) * n,
              );
          for (let e = 0; e < 10; e++)
            T(i, a, R(n, 0.014, t * 0.98, t * 0.97), r, o, (c + e * 0.02) * n);
        }
      }
      {
        let t = e.range(3800, 4e3),
          r = e.bi() * 0.7;
        for (let o = e.next() * 2; o < 12; o += e.range(2.2, 3.8)) {
          T(i, a, R(n, 0.06, t, t * 1.02, 0.004), r, 0.22, o * n);
          for (let e = 0; e < 3; e++)
            T(
              i,
              a,
              R(n, 0.045, t * (1 + 0.03 * e), t * (1.01 + 0.03 * e), 0.004),
              r,
              0.2,
              (o + 0.17 + e * 0.06) * n,
            );
        }
      }
      for (let t = e.next(); t < 12.5; t += e.range(0.9, 2.2)) {
        let r = e.bi() * 0.9;
        for (let o = 0; o < 2 + e.int(3); o++)
          T(i, a, R(n, 0.02, 6400, 6300, 0.001), r, 0.08, (t + o * 0.3) * n);
      }
      for (let o of [i, a]) {
        let i = s(r, e);
        _(i, n, 4400, 3);
        let a = Re(r, n, e, [0.05, 0.13]);
        for (let e = 0; e < r; e++)
          o[e] += i[e] * 0.07 * (0.6 + 0.4 * Math.sin((t * 42 * e) / n)) * a[e];
      }
      return (
        ze(i, a, n, e, 0.015, 0.22),
        C({ sr: n, ch: [D(i, n, 1.5), D(a, n, 1.5)] }, 0.7)
      );
    },
    tk_park_day: (e) => {
      let n = N,
        r = 286650,
        i = new Float32Array(r),
        a = new Float32Array(r);
      for (let r = 0; r < 3; r++) {
        let r = e.range(0.3, 11.5),
          o = e.bi() * 0.9,
          s = e.range(0.3, 0.5),
          c = 1 + e.int(2);
        for (let l = 0; l < c; l++) {
          let c = R(n, 0.2, e.range(2500, 2800), e.range(3500, 3800), 0.01),
            u = d(
              5733,
              n,
              (e) => 3600 - (e / 0.26) * 1300 + 90 * Math.sin(t * 32 * e),
              `sine`,
            );
          (b(u, n, [0, 0, 0.01, 1, 0.18, 0.7, 0.26, 0]),
            w(c, 1.3),
            w(u, 1.3),
            T(i, a, c, o, s, (r + l * 0.65) * n),
            T(i, a, u, o, s * 0.9, (r + l * 0.65 + 0.21) * n));
        }
      }
      for (let t = 0; t < 9; t++) {
        let t = e.next() * 12.2,
          r = e.bi() * 0.9,
          o = e.range(0.08, 0.2);
        for (let s = 0; s < 2 + e.int(3); s++)
          T(
            i,
            a,
            R(n, 0.05, e.range(4300, 5e3), e.range(3200, 3700)),
            r,
            o,
            (t + s * e.range(0.1, 0.16)) * n,
          );
      }
      for (let t = 0; t < 2; t++) {
        let t = e.range(0.5, 10.5),
          r = e.bi() * 0.8,
          o = e.range(5e3, 5500);
        for (let e = 0; e < 3; e++) {
          let s = t + e * 0.55;
          (T(i, a, R(n, 0.05, o, o * 0.95), r, 0.18, s * n),
            T(i, a, R(n, 0.05, o, o * 0.95), r, 0.18, (s + 0.09) * n),
            T(
              i,
              a,
              R(n, 0.2, o * 0.8, o * 0.78, 0.01),
              r,
              0.2,
              (s + 0.19) * n,
            ));
        }
      }
      return (
        ze(i, a, n, e, 0.07, 0.25),
        C({ sr: n, ch: [D(i, n, 1.5), D(a, n, 1.5)] }, 0.7)
      );
    },
    tk_shrine: (e) => {
      let n = 16e3,
        r = 224e3,
        i = new Float32Array(r),
        a = c(r, e);
      _(a, n, 700, 0.5);
      let u = new Float32Array(r),
        d = [e.next() * t, e.next() * t];
      for (let e = 0; e < r; e++) {
        let r = e / n;
        u[e] =
          0.55 +
          0.3 * Math.sin((t * r) / 7 + d[0]) +
          0.15 * Math.sin((t * r) / 3.1 + d[1]);
      }
      for (let e = 0; e < r; e++) i[e] = a[e] * u[e] * 0.6;
      let f = s(r, e);
      g(f, n, 3200);
      for (let e = 0; e < r; e++)
        f[e] *=
          Math.max(0, u[e] - 0.5) * (0.5 + 0.5 * Math.sin(e * 7e-4 + d[1]));
      S(i, f, 0.12);
      let p = l(r, e);
      return (h(p, n, 200), S(i, p, 0.5), o(C(D(i, n, 2), 0.7), n));
    },
    tk_packer: (e) => {
      let t = 8e3,
        n = 84e3,
        r = new Float32Array(n),
        i = d(n, t, 28, `pulse`, 0, 0.12);
      (h(i, t, 380, 0.9), S(r, i, 0.5));
      let a = (e) => {
          let t = (e % 5.25) / 5.25;
          return t < 0.7 ? 260 + 140 * Math.sin((t / 0.7) * Math.PI) : 0;
        },
        s = d(n, t, (e) => Math.max(60, a(e)), `saw`);
      h(s, t, 1400);
      for (let e = 0; e < n; e++) s[e] *= a(e / t) > 0 ? 0.25 : 0;
      S(r, s, 0.35);
      for (let n of [3.7, 8.95])
        (S(r, L(t, 0.4, 90, 45, 0.04, 0.15), 0.7, Math.round(n * t)),
          S(
            r,
            I(t, 0.35, e, `bp`, 600, 2, 0.05, 0.12),
            0.3,
            Math.round((n - 0.3) * t),
          ));
      let c = l(n, e);
      return (
        h(c, t, 150),
        S(r, c, 0.4),
        g(r, t, 22, 0.7),
        o(C(D(r, t, 0.5), 0.75), t)
      );
    },
    tk_crossing: (e) => {
      let t = N,
        n = /* @__PURE__ */ new Float32Array(39690);
      for (let r = 0; r < 4; r++)
        Ne(
          n,
          Ve(t, r % 2 ? 742 : 730, e),
          Math.round(r * 0.45 * t),
          r % 2 ? 0.92 : 1,
        );
      return o(C(n, 0.8), t);
    },
  },
  Ue = {
    tk_koto: (e, t, r, i) => {
      let a = ie(Math.round(i * r), r, n(t), e, {
        decay: 0.9975,
        bright: 0.88,
        pick: 0.11,
      });
      return (
        S(a, I(r, 0.006, e, `hp`, 4200, 0.7, 1e-4, 0.0012), 0.35),
        v(a, r, 380, 1.1, 3),
        v(a, r, 1600, 1.4, 2.5),
        x(a, r, 0.001, t > 72 ? 0.9 : 1.4),
        o(C(a, 0.85), r)
      );
    },
    tk_shaku: (e, r, i, a) => {
      let c = Math.round(a * i),
        l = n(r),
        u = (e) =>
          l *
          (1 +
            (e > 0.35
              ? 0.0075 * Math.min(1, (e - 0.35) / 0.4) * Math.sin(t * 5.2 * e)
              : 0)),
        f = d(c, i, u, `sine`);
      (S(
        f,
        d(c, i, (e) => 2 * u(e), `sine`),
        0.22,
      ),
        S(
          f,
          d(c, i, (e) => 3 * u(e), `sine`),
          0.07,
        ));
      let p = s(c, e);
      (_(p, i, l * 1.02, 6), S(f, p, 1.6));
      let m = s(c, e);
      return (
        _(m, i, 2200, 0.8),
        b(m, i, [0, 0, 0.02, 1, 0.15, 0.25, a, 0.15]),
        S(f, m, 0.25),
        b(f, i, [0, 0, 0.07, 1, 0.3, 0.85, a - 0.1, 0.8, a, 0]),
        o(C(f, 0.8), i)
      );
    },
    tk_brass: (e, r, i, a) => {
      let s = Math.round(a * i),
        c = n(r),
        l = new Float32Array(s);
      for (let n = 0; n < 4; n++) {
        let r = 1 + (n - 1.5) * 0.0035 + e.bi() * 0.001;
        S(
          l,
          d(
            s,
            i,
            (e) => c * r * (1 + 0.003 * Math.sin(t * 5.4 * e + n)),
            `saw`,
            e.next(),
          ),
          0.25,
        );
      }
      return (
        h(
          l,
          i,
          (e) => 500 + 4200 * Math.min(1, e / 0.035) * Math.exp(-e / 0.5) + 900,
          1.1,
        ),
        w(l, 1.5),
        b(l, i, [0, 0, 0.025, 1, 0.12, 0.75, a - 0.1, 0.65, a, 0]),
        o(C(l, 0.85), i)
      );
    },
    tk_slap: (e, t, r, i) => {
      let a = Math.round(i * r),
        s = n(t),
        c = ie(a, r, s, e, { decay: 0.994, bright: 0.95, pick: 0.06 });
      return (
        S(c, d(a, r, s, `sine`), 0.25),
        S(c, I(r, 0.012, e, `bp`, 2600, 1, 2e-4, 0.003), 0.4),
        w(c, 2),
        h(c, r, 5e3),
        x(c, r, 0.001, 0.45),
        o(C(c, 0.9), r)
      );
    },
    tk_glock: (e, t, r, i) => {
      let a = De(r, n(t), i, 0.7);
      return (
        S(a, I(r, 0.004, e, `hp`, 5e3, 0.7, 1e-4, 8e-4), 0.15),
        o(C(a, 0.8), r)
      );
    },
  },
  We = {
    tk_taiko: (e) => {
      let t = M,
        n = L(t, 1.3, 92, 52, 0.06, 0.45);
      return (
        S(n, I(t, 0.05, e, `bp`, 900, 1, 5e-4, 0.012), 0.35),
        S(n, L(t, 0.4, 180, 120, 0.02, 0.08), 0.3),
        w(n, 1.6),
        o(C(n, 0.95), t)
      );
    },
    tk_tamb: (e) => {
      let t = M,
        n = a(0.4, t);
      for (let r = 0; r < 8; r++)
        S(
          n,
          P(t, e.range(5200, 9800), 0.3, [
            [1, 1, 0.07],
            [1.42, 0.5, 0.04],
          ]),
          0.3,
          Math.round(e.range(0, 0.02) * t),
        );
      return (
        S(n, I(t, 0.05, e, `bp`, 700, 1, 5e-4, 0.012), 0.4),
        o(C(n, 0.85), t)
      );
    },
  };
function Ge(e) {
  let t = M,
    n = a(e ? 1.3 : 1, t),
    r = () =>
      P(t, 1880, 0.95, [
        [1, 1, 0.42],
        [2.76, 0.35, 0.14],
        [5.4, 0.12, 0.05],
        [0.5, 0.08, 0.3],
      ]);
  return (S(n, r(), 0.8, 160), e && S(n, r(), 0.75, 7680), o(C(n, 0.7), t));
}
function Ke(e, t) {
  let [n, r, i] = e.split(`/`);
  if (n === `sfx`) {
    let e = Be[r];
    if (!e) throw Error(`no tokyo sfx ` + r);
    return e(t, Number(i ?? 0));
  }
  if (n === `amb`) {
    let e = He[r];
    if (!e) throw Error(`no tokyo amb ` + r);
    return e(t);
  }
  if (n === `drum`) {
    let e = We[r];
    if (!e) throw Error(`no tokyo drum ` + r);
    return e(t);
  }
  throw Error(`bad tokyo id ` + e);
}
const z = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    pentaMaj: [0, 2, 4, 7, 9],
    pentaMin: [0, 3, 5, 7, 10],
    blues: [0, 3, 5, 6, 7, 10],
  },
  qe = { I: 0, II: 2, III: 4, IV: 5, V: 7, VI: 9, VII: 11 };
function Je(e, t) {
  let n = e,
    r = 0;
  for (; n[0] === `b`;) (r--, (n = n.slice(1)));
  n[0] === `#` && (r++, (n = n.slice(1)));
  let i = /^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/.exec(n);
  if (!i) return { sym: e, root: t, iv: [0, 4, 7], bass: t };
  let a = i[1],
    o = i[2],
    s = ``,
    c = o.indexOf(`/`);
  c >= 0 && ((s = o.slice(c + 1)), (o = o.slice(0, c)));
  let l = a === a.toLowerCase(),
    u = (t + qe[a.toUpperCase()] + r + 120) % 12,
    d = l ? [0, 3, 7] : [0, 4, 7];
  ((o.includes(`°`) || o.includes(`dim`)) && (d = [0, 3, 6]),
    o.includes(`sus4`) && (d = [0, 5, 7]),
    o.includes(`sus2`) && (d = [0, 2, 7]),
    o.includes(`maj7`) || o.includes(`maj9`)
      ? (d = [...d, 11])
      : (o.includes(`7`) || o.includes(`9`) || o.includes(`11`)) &&
        (d = [...d, o.includes(`°`) ? 9 : 10]),
    (o.includes(`9`) || o.includes(`add9`)) && (d = [...d, 14]),
    o.includes(`11`) && (d = [...d, 17]),
    o.includes(`6`) && !o.includes(`/6`) && (d = [...d, 9]));
  let f = u;
  return (
    s === `3` ? (f = (u + d[1]) % 12) : s === `5` && (f = (u + 7) % 12),
    { sym: e, root: u, iv: d, bass: f }
  );
}
function Ye(e, t) {
  return e.map((e) => Je(e, t));
}
function B(e, t, n = 0, r = 127) {
  let i = e,
    a = 1e9;
  for (let o = Math.max(n, e - 12); o <= Math.min(r, e + 12); o++) {
    let n = ((o % 12) + 12) % 12;
    if (!t.includes(n)) continue;
    let r = Math.abs(o - e);
    r < a && ((a = r), (i = o));
  }
  return i;
}
function Xe(e) {
  return e.iv.map((t) => (e.root + t) % 12);
}
function Ze(e, t, n, r) {
  let i = e.iv.map((e) => e % 12);
  (i.length >= 4 && n <= i.length && (i = i.filter((e) => e !== 0)),
    (i = [...new Set(i)].sort((e, t) => e - t)));
  let a = i.map((t) => (e.root + t) % 12),
    o = [];
  for (let e = 0; e < a.length; e++) {
    let r = [],
      i = B(t - 5, [a[e]]);
    r.push(i);
    let s = e;
    for (; r.length < n;) {
      s = (s + 1) % a.length;
      let e = i + 1;
      for (; ((e % 12) + 12) % 12 !== a[s];) e++;
      (r.push(e), (i = e));
    }
    o.push(r);
  }
  let s = o[0],
    c = 1e9;
  for (let e of o) {
    let n = 0;
    if (r && r.length)
      for (let t = 0; t < e.length; t++)
        n += Math.abs(e[t] - (r[t] ?? r[r.length - 1]));
    else n = Math.abs(e[0] + e[e.length - 1] - 2 * t);
    ((n += Math.abs((e[0] + e[e.length - 1]) / 2 - t) * 0.6),
      n < c && ((c = n), (s = e)));
  }
  return s;
}
function Qe(e, t, n, r) {
  let i = [];
  for (let a = n; a <= r; a++)
    t.includes((((a - e) % 12) + 12) % 12) && i.push(a);
  return i;
}
function $e(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== `x`) continue;
    let r = 1;
    for (; n + r < e.length && e[n + r] === `-`;) r++;
    t.push([n, r]);
  }
  return t;
}
function V(e, t, n, r = `drums`, i = 0.25, a = 1) {
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === `.` || s === ` `) continue;
    let c = s === `x` ? 1 : s === `o` ? 0.65 : s === `g` ? 0.32 : 0.8;
    n.push({ t: o * i, m: 60, d: i, v: c * a, inst: `drum:` + t, ch: r });
  }
}
function H(e, t) {
  let n = t.chords.length,
    r = t.beatsPerBar ?? 4,
    i = Qe(t.key, t.scale, t.lo, t.hi),
    a = (e) => {
      let t = 0,
        n = 1e9;
      for (let r = 0; r < i.length; r++) {
        let a = Math.abs(i[r] - e);
        a < n && ((n = a), (t = r));
      }
      return t;
    },
    o = [],
    s = t.start ?? Math.round((t.lo + t.hi) / 2),
    c = e.pick(t.rhythms),
    l = e.pick(t.rhythms),
    u = null,
    d = e.chance(0.5) ? 1 : -1;
  for (let f = 0; f < n; f++) {
    let p = f % 4,
      m = p === 3 || f === n - 1,
      h = m ? e.pick(t.cadence) : p === 1 ? l : c,
      g = t.chords[f],
      _ = [],
      v = (e) => Xe(t.halfChords ? t.halfChords[f * 2 + +(e >= 8)] : g),
      y = p === 2 && u && u.length === h.length,
      b = [],
      x = a(s);
    for (let n = 0; n < h.length; n++) {
      let [o, c] = h[n],
        l,
        f = o % 8 == 0 || (o % 4 == 0 && c >= 3);
      if (y && n > 0)
        ((x = Math.max(0, Math.min(i.length - 1, x + u[n]))),
          (l = i[x]),
          f && (l = B(l, v(o), t.lo, t.hi)));
      else if (f || n === 0) {
        p >= 2 && e.chance(0.5) && (d = -1);
        let r = n === 0 && p === 0 ? e.pick([2, 3, 4]) : e.pick([1, 2, 3]);
        l = B(
          s + d * r,
          v(o).filter((t) => t !== ((s % 12) + 12) % 12 || e.chance(0.3)),
          t.lo,
          t.hi,
        );
      } else {
        let t = e.chance(0.1) ? 0 : d * (e.chance(0.72) ? 1 : 2);
        ((x = Math.max(0, Math.min(i.length - 1, a(s) + t))), (l = i[x]));
      }
      (l >= t.hi - 1
        ? (d = -1)
        : l <= t.lo + 1
          ? (d = 1)
          : e.chance(0.22) && (d = -d),
        m &&
          n === h.length - 1 &&
          (l = B(l, [g.root, (g.root + g.iv[1]) % 12], t.lo, t.hi)),
        b.push(a(l) - a(s)),
        (x = a(l)),
        (s = l));
      let ee = (o / 16) * r;
      _.push({
        t: ee,
        m: l,
        d: (c / 16) * r,
        v: (t.vel ?? 0.85) * (f ? 1 : 0.85),
        inst: t.inst,
        ch: `lead`,
      });
    }
    (p === 0 && (u = b), o.push(_));
  }
  return o;
}
function U(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function et(e, t) {
  let n = 0;
  return e.map(([e, r, i, a]) => {
    let o = Ye(i, t),
      s = [];
    for (let e = 0; e < r; e++) s.push(o[e % o.length]);
    let c = { kind: e, bars: r, start: n, prog: s, tr: a ?? 0 };
    return ((n += r), c);
  });
}
function W(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t < r.start + r.bars) return [r, t - r.start, e[n + 1]];
  }
  let n = e[e.length - 1];
  return [n, n.bars - 1, void 0];
}
const G = (e) => e.reduce((e, t) => e + t.bars, 0),
  K = (e) => (e <= 6 ? e : e - 12),
  q = (...e) => e.map($e),
  J = (e, t = 0, n = 1) => e.map((e) => ({ ...e, m: e.m + t, v: e.v * n }));
function tt(e, t) {
  if (t) for (let n of e) n.inst.startsWith(`drum:`) || (n.m += t);
  return e;
}
function Y(e, t, n, r) {
  let i = Ze(e, t, n, r.v);
  return ((r.v = i), i);
}
function X(e, t) {
  return B(t + 6, [e.bass], t, t + 11);
}
const Z = {
  walk: [`IVmaj7`, `III7`, `vi7`, `v7`, `I7`],
  twofive: [`ii9`, `V9`, `Imaj9`, `vi9`],
  four: [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
  royal: [`IVmaj7`, `V7`, `iii7`, `vi7`],
};
function nt(t, n) {
  let r = new e(U(`tk-citypop/` + t)),
    i = r.pick([96, 100, 104, 108, 112]),
    a = r.pick([0, 2, 3, 5, 7, 8, 10]),
    o = K(a),
    s = r.pick([Z.twofive, Z.four, Z.royal]),
    c = r.pick([Z.walk, Z.royal, Z.four].filter((e) => e !== s)),
    l = et(
      [
        [`intro`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, c],
        [`inter`, 4, s],
        [`verse`, 8, s],
        [`pre`, 4, [`ii7`, `iii7`, `IVmaj7`, `V7sus4`]],
        [`chorus`, 8, c],
        [`solo`, 8, s],
        [`chorus2`, 8, c, 1],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: z.major,
      lo: 62 + o,
      hi: 76 + o,
      inst: `vox`,
      vel: 0.72,
      rhythms: q(
        `..x-x-x-x---x-..`,
        `x-x-x---..x-x---`,
        `....x-x-x-x-x---`,
        `x---x-x-..x-x-x-`,
      ),
      cadence: q(`x---x---x-------`, `x-x-x-----------`),
    }),
    d = H(r, {
      chords: l[3].prog,
      key: a,
      scale: z.major,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.9,
      rhythms: q(`x-x-x---x-x-x---`, `x---x-x-x---x-x-`, `..x-x-x-x---x---`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    f = H(r, {
      chords: l[8].prog,
      key: a,
      scale: z.major,
      lo: 60 + o,
      hi: 79 + o,
      inst: `tk_brass`,
      vel: 0.62,
      rhythms: q(`x-x-xx-.x-x-x---`, `x.xx-x-.x---x-x-`, `xx-x-x--x-x-----`),
      cadence: q(`x-x-x-----------`),
    }),
    p = { v: null },
    m = { v: null },
    h = { v: null },
    g = n(`audio.song.citypop.${1 + r.int(8)}`),
    _ = n(`audio.artist.${1 + r.int(3)}`),
    v = r.chance(0.4)
      ? n(r.chance(0.5) ? `audio.radio.dj.next` : `audio.radio.dj.next2`, {
          name: g.ja,
        })
      : void 0;
  return {
    title: { zh: g.zh, en: g.en },
    artist: _.ja && `${_.ja} ${_.en}`,
    bpm: i,
    swing: 0.54,
    beatsPerBar: 4,
    bars: G(l),
    dj: v,
    bar(n) {
      let [r, i, a] = W(l, n),
        s = r.prog[i],
        c = new e(U(`tk-citypop/${t}/${n}`)),
        g = [],
        _ = r.kind,
        v = i === r.bars - 1,
        y = _.startsWith(`chorus`) || _ === `solo`;
      if (
        ((_ !== `intro` || i >= 2) &&
          (V(
            y ? `x.....x...x.....` : `x.......x.x.....`,
            `kick`,
            g,
            `drums`,
            0.25,
            0.9,
          ),
          V(`....x.......x...`, `snare`, g, `drums`, 0.25, 0.85),
          V(
            y ? `xgxgxgxoxgxgxgxo` : `xgxgxgxgxgxgxgxg`,
            `hat_c`,
            g,
            `drums`,
            0.25,
            0.5,
          ),
          y && i % 4 == 0 && V(`x`, `crash`, g, `drums`, 0.25, 0.5),
          (_ === `verse` || _ === `pre`) &&
            V(`..g...g...g...g.`, `tk_tamb`, g, `perc`, 0.25, 0.5)),
        v &&
          a &&
          a.kind !== _ &&
          _ !== `outro` &&
          V(`..........x.x.xx`, `tom_h`, g, `drums`, 0.25, 0.7),
        _ !== `intro` || i >= 2)
      ) {
        let e = X(s, 33 + o),
          t = c.pick([
            `x..xo.x.x..xo.x.`,
            `x.ox..x.x.ox..xo`,
            `x..x..xox..x.ox.`,
          ]);
        for (let n = 0; n < 16; n++) {
          let r = t[n];
          r !== `.` &&
            g.push({
              t: n * 0.25,
              m: r === `o` ? e + 12 : e,
              d: 0.22,
              v: r === `o` ? 0.75 : 0.9,
              inst: `tk_slap`,
              ch: `bass`,
            });
        }
      }
      let b = Y(s, 64 + o, 4, p);
      if (_ === `intro` || _ === `outro`)
        for (let e of b)
          g.push({ t: 0, m: e, d: 3.8, v: 0.5, inst: `epiano`, ch: `keys` });
      else
        for (let e of c.pick([
          [0, 1.5, 2.5, 3.75],
          [0.75, 1.5, 3, 3.5],
          [0, 0.75, 2, 2.75],
        ]))
          for (let t of b)
            g.push({ t: e, m: t, d: 0.6, v: 0.55, inst: `epiano`, ch: `keys` });
      if (_ === `pre` || y)
        for (let e of Y(s, 72 + o, 3, m))
          g.push({ t: 0, m: e, d: 3.9, v: 0.38, inst: `strings`, ch: `pad` });
      if (y && i % 2 == 1)
        for (let e of Y(s, 69 + o, 3, h))
          g.push({
            t: 3.5,
            m: e,
            d: 0.4,
            v: 0.6,
            inst: `tk_brass`,
            ch: `lead`,
          });
      if (
        (_ === `verse` && g.push(...J(u[i % u.length])),
        _.startsWith(`chorus`) && g.push(...J(d[i % d.length])),
        _ === `solo` && g.push(...J(f[i % f.length])),
        _ === `intro`)
      )
        for (let e of d[i % d.length])
          g.push({ ...e, inst: `tk_brass`, v: e.v * 0.55, ch: `lead` });
      return tt(g, r.tr);
    },
    filter(e) {
      let [t, n] = W(l, e);
      return t.kind === `intro`
        ? n < 2
          ? [1800, 1800]
          : [1800, 16e3]
        : t.kind === `outro`
          ? [16e3 - n * 3e3, 13e3 - n * 3e3]
          : null;
    },
    sidechain: () => 0.1,
  };
}
const rt = [
  [`IV`, `V`, `iii`, `vi`],
  [`vi`, `IV`, `V`, `I`],
  [`I`, `V`, `vi`, `IV`],
  [`IV`, `V`, `vi`, `vi`],
  [`vi`, `V`, `IV`, `V`],
];
function it(t, n) {
  let r = new e(U(`tk-jrock/` + t)),
    i = r.pick([150, 160, 168, 176, 184]),
    a = r.pick([4, 9, 2, 11, 7]),
    o = 40 + ((a - 4 + 12) % 12),
    s = K(a),
    c = r.pick(rt),
    l = rt[0],
    u = et(
      [
        [`intro`, 4, l],
        [`verse`, 8, c],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, l],
        [`verse`, 8, c],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, l],
        [`solo`, 8, c],
        [`break`, 4, [`vi`, `IV`, `V`, `V`]],
        [`chorus2`, 8, l, 1],
        [`outro`, 4, l],
      ],
      a,
    ),
    d = H(r, {
      chords: u[1].prog,
      key: a,
      scale: z.major,
      lo: 62 + s,
      hi: 76 + s,
      inst: `vox`,
      vel: 0.8,
      rhythms: q(`x-x-x-x-x---x---`, `x-x-x---x-x-x---`, `..x-x-x-x-x-x---`),
      cadence: q(`x---x---x-------`),
    }),
    f = H(r, {
      chords: u[3].prog,
      key: a,
      scale: z.pentaMaj,
      lo: 66 + s,
      hi: 81 + s,
      inst: `distlead`,
      vel: 0.85,
      rhythms: q(`x-x-x---x-x-x-x-`, `x---x-x-x---x-x-`, `x-x-x-x-x-------`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    p = H(r, {
      chords: u[7].prog,
      key: a,
      scale: z.major,
      lo: 64 + s,
      hi: 86 + s,
      inst: `distlead`,
      vel: 0.9,
      rhythms: q(`xxxxx-x-x-x-xxxx`, `x.xxx.x-x-xxxx--`, `xxxx-x-xxxx-x---`),
      cadence: q(`x-x-x-----------`),
    }),
    m = { v: null },
    h = n(`audio.song.jrock.${1 + r.int(6)}`),
    g = n(`audio.artist.${4 + r.int(3)}`),
    _ = r.chance(0.4)
      ? n(`audio.radio.dj.next-casual`, { name: h.ja })
      : void 0;
  return {
    title: { zh: h.zh, en: h.en },
    artist: g.ja && `${g.ja} ${g.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(u),
    dj: _,
    bar(n) {
      let [r, i, a] = W(u, n),
        c = r.prog[i];
      new e(U(`tk-jrock/${t}/${n}`));
      let l = [],
        h = r.kind,
        g = i === r.bars - 1,
        _ = B(o + 5, [c.root], o, o + 11),
        v = (e, t, n, r) =>
          l.push({ t: e, m: _, d: n, v: r, inst: t, ch: `keys` }),
        y = () => {
          let e = X(c, o - 12);
          for (let t = 0; t < 8; t++)
            l.push({
              t: t * 0.5,
              m: e,
              d: 0.45,
              v: t % 2 ? 0.75 : 0.9,
              inst: `bass`,
              ch: `bass`,
            });
        };
      if (h === `intro`) {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, e % 4 == 0 ? `power` : `chug`, 0.45, 0.85);
        i >= 2 &&
          (V(`x.x...x.x.x...x.`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `hat_c`, l, `drums`, 0.25, 0.6),
          y());
        for (let e of f[i % f.length]) l.push({ ...e, v: e.v * 0.9 });
      } else if (h === `verse`) {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, `chug`, 0.45, e % 2 ? 0.7 : 0.85);
        (V(`x.....x.x.......`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `hat_c`, l, `drums`, 0.25, 0.55),
          y(),
          l.push(...J(d[i % d.length])));
      } else if (h === `pre` || h === `break`) {
        (v(0, `power`, 1.9, 0.9),
          v(2, `power`, 1.9, 0.85),
          V(`x.x.x.x.x.x.x.x.`, `kick`, l, `drums`, 0.25, 0.8),
          V(g ? `....x...x.x.xxxx` : `....x.......x...`, `snare`, l),
          i === 0 && V(`x`, `crash`, l),
          y());
        for (let e of Y(c, 74 + s, 3, m))
          l.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
        h === `pre` && l.push(...J(d[(i + 4) % d.length], 0, 0.9));
      } else {
        for (let e = 0; e < 8; e++)
          v(e * 0.5, `power`, 0.48, e % 2 ? 0.78 : 0.95);
        if (
          (V(`x.x...x.x.x...x.`, `kick`, l),
          V(`....x.......x...`, `snare`, l),
          V(`x.x.x.x.x.x.x.x.`, `ride`, l, `drums`, 0.25, 0.5),
          i % 4 == 0 && V(`x`, `crash`, l, `drums`, 0.25, 0.8),
          y(),
          h.startsWith(`chorus`))
        ) {
          l.push(
            ...J(f[i % f.length]).map((e) => ({
              ...e,
              inst: `vox`,
              v: e.v * 0.95,
            })),
          );
          for (let e of Y(c, 74 + s, 3, m))
            l.push({ t: 0, m: e, d: 3.9, v: 0.3, inst: `strings`, ch: `pad` });
        }
        (h === `solo` && l.push(...J(p[i % p.length])),
          h === `outro` &&
            g &&
            ((l.length = 0),
            v(0, `power`, 3.9, 1),
            V(`x`, `crash`, l),
            V(`x`, `kick`, l)));
      }
      return (
        g &&
          a &&
          a.kind !== h &&
          h !== `pre` &&
          h !== `outro` &&
          V(`........xxxxxxxx`, `tom_l`, l, `drums`, 0.25, 0.8),
        tt(l, r.tr)
      );
    },
    sidechain: () => 0,
  };
}
const Q = [0, 2, 3, 7, 8],
  at = [
    [`i`, `iv`, `V7`, `i`],
    [`i`, `bVI`, `iv`, `V7`],
    [`iv`, `i`, `V7`, `i`],
    [`i`, `i`, `iv`, `V7`],
  ];
function ot(t, n) {
  let r = new e(U(`tk-enka/` + t)),
    i = r.pick([66, 70, 72, 76, 80]),
    a = r.pick([9, 4, 2, 7, 0]),
    o = K(a),
    s = r.pick(at),
    c = r.pick(at.filter((e) => e !== s)),
    l = et(
      [
        [`intro`, 4, s],
        [`verse`, 8, s],
        [`chorus`, 8, c],
        [`inter`, 4, s],
        [`verse`, 8, s],
        [`chorus`, 8, c],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: Q,
      lo: 62 + o,
      hi: 77 + o,
      inst: `vox`,
      vel: 0.82,
      rhythms: q(
        `x-------x---x-x-`,
        `x---x-x-x-------`,
        `x-x-x-----------`,
        `....x---x-x-x---`,
      ),
      cadence: q(`x---------------`, `x-------x-------`),
    }),
    d = H(r, {
      chords: l[2].prog,
      key: a,
      scale: Q,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.92,
      rhythms: q(`x-----------x-x-`, `x---x---x-------`, `x-x-x-x-x-------`),
      cadence: q(`x---------------`),
    }),
    f = H(r, {
      chords: l[0].prog,
      key: a,
      scale: Q,
      lo: 69 + o,
      hi: 84 + o,
      inst: `tk_shaku`,
      vel: 0.7,
      rhythms: q(`x-----------x---`, `x-------x-------`, `........x-------`),
      cadence: q(`x---------------`),
    }),
    p = { v: null },
    m = n(`audio.song.enka.${1 + r.int(6)}`),
    h = n(`audio.artist.${7 + r.int(3)}`),
    g = r.chance(0.5) ? n(`audio.radio.dj.next2`, { name: m.ja }) : void 0;
  return {
    title: { zh: m.zh, en: m.en },
    artist: h.ja && `${h.ja} ${h.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(l),
    dj: g,
    bar(n) {
      let [r, i] = W(l, n),
        s = r.prog[i];
      new e(U(`tk-enka/${t}/${n}`));
      let c = [],
        m = r.kind,
        h = X(s, 31 + o);
      (c.push(
        { t: 0, m: h, d: 1.8, v: 0.85, inst: `bass`, ch: `bass` },
        { t: 2, m: h + 7, d: 1.8, v: 0.7, inst: `bass`, ch: `bass` },
      ),
        m !== `intro` &&
          (V(`x.......x.......`, `kick`, c, `drums`, 0.25, 0.7),
          V(`....x.......x...`, `rim`, c, `drums`, 0.25, 0.6),
          V(`x...x...x...x...`, `ride`, c, `drums`, 0.25, 0.3)),
        m === `chorus` &&
          i % 2 == 0 &&
          V(`x`, `tk_taiko`, c, `perc`, 0.25, 0.8));
      let g = Xe(s),
        _ = [B(55 + o, g, 50, 62), B(60 + o, g, 56, 66), B(64 + o, g, 60, 70)];
      for (let e = 0; e < 16; e++)
        c.push({
          t: e * 0.25,
          m: _[[0, 1, 2, 1][e % 4]],
          d: 0.3,
          v: e % 4 == 0 ? 0.55 : 0.38,
          inst: `nylon`,
          ch: `keys`,
        });
      for (let e of Y(s, 67 + o, 3, p))
        c.push({
          t: 0,
          m: e,
          d: 3.9,
          v: m === `chorus` ? 0.5 : 0.38,
          inst: `strings`,
          ch: `pad`,
        });
      if (
        ((m === `intro` || m === `inter` || m === `outro`) &&
          c.push(...J(f[i % f.length])),
        i === r.bars - 1 && m === `verse`)
      ) {
        let e = B(57, [a], 52, 63);
        [0, 2, 3, 7, 8, 12, 14, 15].forEach((t, n) =>
          c.push({
            t: 2 + n * 0.25,
            m: e + 12 + t,
            d: 0.6,
            v: 0.5,
            inst: `tk_koto`,
            ch: `fx`,
          }),
        );
      }
      return (
        m === `verse` && c.push(...J(u[i % u.length])),
        m === `chorus` && c.push(...J(d[i % d.length])),
        c
      );
    },
    sidechain: () => 0,
  };
}
const st = [
  [`IV`, `V`, `iii`, `vi`],
  [`I`, `V`, `vi`, `IV`],
  [`vi`, `IV`, `V`, `I`],
  [`IV`, `V`, `I`, `vi`],
];
function ct(t, n) {
  let r = new e(U(`tk-idol/` + t)),
    i = r.pick([160, 164, 168, 172, 176]),
    a = r.pick([0, 2, 4, 5, 7, 9]),
    o = K(a),
    s = r.pick(st),
    c = st[0],
    l = et(
      [
        [`intro`, 8, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`inter`, 4, c],
        [`verse`, 8, s],
        [`pre`, 4, [`ii`, `iii`, `IV`, `V`]],
        [`chorus`, 8, c],
        [`chorus2`, 8, c, 1],
        [`outro`, 4, c],
      ],
      a,
    ),
    u = H(r, {
      chords: l[1].prog,
      key: a,
      scale: z.major,
      lo: 67 + o,
      hi: 81 + o,
      inst: `vox`,
      vel: 0.8,
      rhythms: q(`x-x-x-x-x-x-x---`, `x-x-x---x-x-x-x-`, `..x-x-x-x-x-x---`),
      cadence: q(`x-x-x-----------`),
    }),
    d = H(r, {
      chords: l[3].prog,
      key: a,
      scale: z.pentaMaj,
      lo: 71 + o,
      hi: 86 + o,
      inst: `vox`,
      vel: 0.92,
      rhythms: q(`x-x-x-x-x---x-x-`, `x---x-x-x-x-x---`, `x-x-x---x-x-x---`),
      cadence: q(`x---x-----------`, `x-x-x-----------`),
    }),
    f = { v: null },
    p = { v: null },
    m = n(`audio.song.idol.${1 + r.int(6)}`),
    h = n(`audio.artist.${10 + r.int(3)}`),
    g = r.chance(0.5) ? n(`audio.radio.dj.next-cute`, { name: m.ja }) : void 0;
  return {
    title: { zh: m.zh, en: m.en },
    artist: h.ja && `${h.ja} ${h.en}`,
    bpm: i,
    swing: 0.5,
    beatsPerBar: 4,
    bars: G(l),
    dj: g,
    bar(n) {
      let [r, i, a] = W(l, n),
        s = r.prog[i];
      new e(U(`tk-idol/${t}/${n}`));
      let c = [],
        m = r.kind,
        h = i === r.bars - 1,
        g = m.startsWith(`chorus`) || m === `intro`;
      (V(`x...x...x...x...`, `kick`, c),
        V(`....x.......x...`, g ? `clap` : `snare`, c, `drums`, 0.25, 0.85),
        V(`..o...o...o...o.`, `hat_o`, c, `drums`, 0.25, 0.45),
        V(`gggggggggggggggg`, `tk_tamb`, c, `perc`, 0.25, g ? 0.6 : 0.4),
        g && i % 4 == 0 && V(`x`, `crash`, c, `drums`, 0.25, 0.7),
        m.startsWith(`chorus`) &&
          i % 4 == 3 &&
          c.push({
            t: 3,
            m: 60,
            d: 0.5,
            v: 0.9,
            inst: `drum:vox_hey`,
            ch: `fx`,
          }),
        h &&
          a?.kind.startsWith(`chorus`) &&
          V(`....x.x.xxxxxxxx`, `snare`, c, `drums`, 0.25, 0.8));
      let _ = X(s, 33 + o);
      for (let e = 0; e < 8; e++)
        c.push({
          t: e * 0.5,
          m: e % 2 ? _ + 12 : _,
          d: 0.42,
          v: 0.85,
          inst: `synthbass`,
          ch: `bass`,
        });
      let v = Y(s, 66 + o, 4, f);
      for (let e = 0; e < 4; e++)
        for (let t of v)
          c.push({
            t: e + 0.5,
            m: t,
            d: 0.4,
            v: g ? 0.6 : 0.45,
            inst: `supersaw`,
            ch: `keys`,
          });
      if (g || m === `pre`)
        for (let e of Y(s, 76 + o, 3, p))
          c.push({ t: 0, m: e, d: 3.9, v: 0.35, inst: `strings`, ch: `pad` });
      let y =
        m === `verse` || m === `pre`
          ? u[i % u.length]
          : m.startsWith(`chorus`) || m === `intro`
            ? d[i % d.length]
            : null;
      if (y) {
        m !== `intro` && c.push(...J(y));
        for (let e of y)
          c.push({
            ...e,
            m: e.m + 12,
            v: e.v * (m === `intro` ? 0.75 : 0.4),
            inst: `tk_glock`,
            ch: `fx`,
          });
      }
      return tt(c, r.tr);
    },
    filter(e) {
      let [t, n] = W(l, e);
      return t.kind === `intro` && n < 4
        ? [700 + n * 1200, 1900 + n * 1200]
        : null;
    },
    sidechain: (e) => (W(l, e)[0].kind.startsWith(`chorus`) ? 0.35 : 0.15),
  };
}
const lt = [
    `7twelve`,
    `familymark`,
    `lawsan`,
    `matsukiyoji`,
    `yodogawa`,
    `doncoyote`,
    `yoshidaya`,
    `karaoke`,
  ],
  ut = {
    "tk-citypop": `epiano`,
    "tk-jrock": `distlead`,
    "tk-enka": `tk_koto`,
    "tk-idol": `tk_glock`,
  };
function dt(t, n, r, i) {
  let a = new e(U(`tk-spot/${t}/${n}`)),
    o = n % 6 == 4,
    s = o
      ? r(`audio.radio.ad.${lt[Math.floor(n / 6 + U(t)) % lt.length]}`)
      : i[Math.floor(n / 6) % i.length],
    c = t === `tk-enka` ? 9 : a.pick([0, 2, 5, 7]),
    l = [[], [], [], []],
    u = o ? `marimba` : (ut[t] ?? `vox`),
    d = t === `tk-enka` ? Q : z.pentaMaj,
    f = 67 + K(c),
    p = Ye([t === `tk-enka` ? `i` : `I`], c)[0];
  [0, 1, 2, 4, 3, 2, 1, 0].forEach((e, t) =>
    l[t < 4 ? 0 : 1].push({
      t: (t % 4) * 0.5 + 0,
      m: f + d[e % d.length],
      d: 0.45,
      v: 0.7,
      inst: u,
      ch: `lead`,
    }),
  );
  for (let e = 0; e < 4; e++)
    for (let n of Ze(p, 62, 3, null))
      l[e].push({
        t: 0,
        m: n,
        d: 3.9,
        v: e < 2 ? 0.45 : 0.3,
        inst: t === `tk-jrock` ? `strings` : `pad`,
        ch: `pad`,
      });
  return (
    t === `tk-jrock` &&
      l[0].push(
        { t: 0, m: 60, d: 1, v: 0.8, inst: `drum:crash`, ch: `drums` },
        { t: 0, m: 40 + c, d: 1.8, v: 0.9, inst: `power`, ch: `keys` },
      ),
    t === `tk-idol` &&
      l[0].push(
        { t: 0, m: 60, d: 0.5, v: 0.8, inst: `drum:tk_tamb`, ch: `perc` },
        { t: 1.5, m: 60, d: 0.5, v: 0.9, inst: `drum:vox_hey`, ch: `fx` },
      ),
    {
      title: o
        ? { zh: `廣告`, en: `Commercial` }
        : { zh: `電台台呼`, en: `Station ID` },
      artist: ``,
      bpm: 108,
      swing: 0.5,
      beatsPerBar: 4,
      bars: 4,
      bar: (e) => (l[e] ?? []).map((e) => ({ ...e })),
      jingle: !0,
      dj: s,
    }
  );
}
function ft(e) {
  let t = (e, t, n, r, i, a = `lead`) => ({
      t: e,
      m: t,
      d: n,
      v: r,
      inst: i,
      ch: a,
    }),
    n = (e, n, r = 0.9) => t(e, 60, 1, r, `drum:` + n, `drums`);
  switch (e) {
    case `tk-citypop`:
      return [
        t(0, 69, 1.5, 0.55, `epiano`, `keys`),
        t(0, 72, 1.5, 0.5, `epiano`, `keys`),
        t(0, 76, 1.5, 0.5, `epiano`, `keys`),
        t(0, 79, 1.5, 0.5, `epiano`, `keys`),
        t(0.5, 81, 0.3, 0.6, `tk_brass`),
        t(0.75, 84, 1, 0.65, `tk_brass`),
        n(0, `kick`),
        n(0.5, `tk_tamb`, 0.6),
      ];
    case `tk-jrock`:
      return [
        t(0, 40, 0.45, 0.95, `power`, `keys`),
        t(0.5, 40, 0.45, 0.95, `power`, `keys`),
        t(1, 47, 1.6, 1, `power`, `keys`),
        t(1, 76, 1.4, 0.7, `distlead`),
        n(0, `kick`),
        n(1, `crash`, 0.8),
        n(1, `kick`),
      ];
    case `tk-enka`:
      return [
        t(0, 69, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.25, 72, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.5, 76, 0.4, 0.6, `tk_koto`, `keys`),
        t(0.75, 81, 1.5, 0.65, `tk_koto`, `keys`),
        t(0.5, 76, 1.8, 0.5, `tk_shaku`),
        n(0, `tk_taiko`, 0.8),
      ];
    default:
      return [
        t(0, 84, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.25, 88, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.5, 91, 0.25, 0.7, `tk_glock`, `fx`),
        t(0.75, 96, 1, 0.75, `tk_glock`, `fx`),
        n(0, `kick`),
        n(0.75, `crash`, 0.6),
        n(1, `vox_hey`, 0.9),
      ];
  }
}
function pt(e, t, n, r, i, a, o, s, c, l) {
  let u = /* @__PURE__ */ new Map(),
    d = l(`audio.radio.${t}.name`),
    f = [];
  for (let e = 1; e <= c; e++) f.push(l(`audio.radio.${t}.id.${e}`));
  return {
    id: e,
    name: { zh: d.zh, en: d.en },
    genre: r,
    freq: n,
    fx: i,
    trim: a,
    mix: o,
    ids: f,
    ident: ft(e),
    item(t) {
      let n = u.get(t);
      return (
        n ||
          ((n = t % 3 == 1 ? dt(e, t, l, f) : s(Math.floor((t * 2) / 3), l)),
          u.set(t, n),
          u.size > 12 && u.delete(u.keys().next().value)),
        n
      );
    },
  };
}
function mt(e) {
  return [
    pt(
      `tk-citypop`,
      `citypop`,
      `FM 83.8`,
      `city pop`,
      `none`,
      0.55,
      { keys: 1.4, bass: 0.75, lead: 2.2, pad: 1.1 },
      nt,
      3,
      e,
    ),
    pt(
      `tk-jrock`,
      `jrock`,
      `FM 87.2`,
      `J-rock`,
      `none`,
      0.36,
      { keys: 3.2, bass: 0.6, lead: 2.6 },
      it,
      3,
      e,
    ),
    pt(
      `tk-enka`,
      `enka`,
      `AM 1503`,
      `enka`,
      `hall`,
      0.9,
      { keys: 1.6, lead: 2.6, pad: 1.2, fx: 1.4 },
      ot,
      2,
      e,
    ),
    pt(
      `tk-idol`,
      `idol`,
      `FM 77.7`,
      `idol pop`,
      `none`,
      0.5,
      { keys: 2.2, lead: 3.2, pad: 1.1, fx: 1.4 },
      ct,
      3,
      e,
    ),
  ];
}
const ht = { ...ce, ...ue },
  $ = (e, t = []) => self.postMessage(e, t);
function gt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function _t(t, n, r) {
  let i = new e(gt(t) ^ 334462),
    [a, o, s] = t.split(`/`),
    c;
  if (a === `inst`) {
    let e = ue[o],
      t = Ue[o];
    if (!e || !t) throw Error(`no tokyo inst ` + o);
    c = t(i, Number(s), e.sr, e.dur);
  } else c = Ke(t, i);
  return n || r ? re(c, 22050, !1) : c;
}
let vt = null;
const yt = () => ({ ja: ``, zh: ``, en: `` });
function bt(e) {
  if (e.inst.startsWith(`drum:`)) return `drum/` + e.inst.slice(5);
  if (e.inst.startsWith(`sfx:`)) return ``;
  let t = ht[e.inst];
  if (!t) return ``;
  let n = t.roots[0];
  for (let r of t.roots) Math.abs(r - e.m) < Math.abs(n - e.m) && (n = r);
  return `inst/${e.inst}/${n}`;
}
function xt(e, t) {
  vt ??= mt(yt);
  let n = vt[e];
  if (!n) return [];
  let r = /* @__PURE__ */ new Set(),
    i = [],
    a = [],
    o = (e) => {
      let t = bt(e);
      t && !r.has(t) && (r.add(t), (t.startsWith(`drum/`) ? i : a).push(t));
    };
  for (let e of n.ident ?? []) o(e);
  for (let e of t) {
    let t = n.item(e);
    for (let e = 0; e < t.bars; e++) for (let n of t.bar(e)) o(n);
  }
  return [...i, ...a];
}
const St = [];
let Ct = !1;
function wt() {
  if (Ct) return;
  Ct = !0;
  let e = () => {
    let t = St.shift();
    if (!t) {
      Ct = !1;
      return;
    }
    if (t.type === `needs`)
      $({
        type: `needs`,
        station: t.station,
        ks: t.ks,
        ids: xt(t.station, t.ks),
      });
    else
      for (let e of t.ids) {
        let n = e.endsWith(`/*`),
          r = n
            ? Array.from(
                {
                  length: t.low
                    ? Math.min(2, le[e.slice(4, -2)] ?? 0)
                    : (le[e.slice(4, -2)] ?? 0),
                },
                (t, n) => `${e.slice(0, -1)}${n}`,
              )
            : [e];
        for (let e of r)
          try {
            let n = _t(e, !!t.mobile, !!t.low);
            $(
              { type: `buf`, id: e, sr: n.sr, ch: n.ch },
              n.ch.map((e) => e.buffer),
            );
          } catch (t) {
            ($({ type: `err`, id: e, msg: String(t?.message ?? t) }),
              n || $({ type: `done`, id: e }));
          }
        n && $({ type: `done`, id: e });
      }
    setTimeout(e, 0);
  };
  e();
}
self.onmessage = (e) => {
  let t = e.data;
  !t ||
    (t.type !== `render` && t.type !== `needs`) ||
    (t.type === `needs` ? St.unshift(t) : St.push(t), wt());
};
