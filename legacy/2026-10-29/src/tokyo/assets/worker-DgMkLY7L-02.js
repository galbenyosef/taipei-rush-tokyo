// tokyo/assets/worker-DgMkLY7L 02 — math
// Lines 350-695 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
function re(e, n, r, i, a, o = 3e3) {
  let s = Math.max(1, Math.round(r * n)),
    c = new Float32Array(s),
    l = 0,
    u = 0,
    d = 1 - Math.exp((-t * o) / n);
  for (let t = 0; t < e.length; t++) {
    let n = c[l];
    ((u += d * (n - u)),
      (c[l] = e[t] + u * i),
      (e[t] += n * a),
      (l = (l + 1) % s));
  }
  return e;
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
function D(e, t = {}) {
  let [n, r] = e.ch.length > 1 ? e.ch : [e.ch[0], e.ch[0]],
    i = new Float32Array(n.length);
  for (let e = 0; e < i.length; e++) i[e] = (n[e] + r[e]) * 0.5;
  let [a, o] = E(i, e.sr, { ...t, dry: 0 }),
    s = t.dry ?? 1;
  return (S(a, n, s), S(o, r, s), { sr: e.sr, ch: [a, o] });
}
function ie(e, t, n) {
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
function ae(e, t, n, r = []) {
  let i = Math.max(1, Math.round(t * e)),
    a = Math.exp(((n / 3) * Math.log(0.001)) / i),
    o = Math.round(0.004 * e),
    s = [];
  for (let t = 0; t < 2; t++) {
    let n = new Float32Array(i),
      c = 0,
      l = 1,
      u = 0.25,
      d = 1.2 / e,
      f = 12345 + t * 777;
    for (let e = 0; e < i; e++) {
      f = (f * 1664525 + 1013904223) >>> 0;
      let t = (f / 4294967296) * 2 - 1;
      (u < 0.97 && (u += d),
        (c = c * u + t * (1 - u)),
        (n[e] = c * l * (e < o ? e / o : 1)),
        (l *= a));
    }
    for (let o of r) {
      let r = Math.round((o + t * 0.007) * e);
      r < i && (n[r] += 0.6 * a ** +r);
    }
    s.push(n);
  }
  return { sr: e, ch: s };
}
function oe(e, t, n) {
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
function se(e, t, n) {
  let r = e.ch;
  if (n && r.length > 1) {
    let e = new Float32Array(r[0].length);
    for (let t = 0; t < e.length; t++) e[t] = (r[0][t] + r[1][t]) * 0.5;
    r = [e];
  }
  return e.sr <= t
    ? { sr: e.sr, ch: r }
    : { sr: t, ch: r.map((n) => oe(n, e.sr, t)) };
}
function ce(e, t, n, r, i = {}) {
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
const le = {
  a: [800, 1200, 2600, 3400],
  e: [480, 1900, 2550, 3500],
  i: [300, 2300, 3e3, 3700],
  o: [520, 880, 2500, 3300],
  u: [330, 800, 2300, 3300],
  ə: [520, 1450, 2500, 3400],
  æ: [700, 1650, 2500, 3500],
};
function O(e, t, n, r, a, o = {}) {
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
function k(e) {
  let t = [0, 0, 0, 0];
  return (n) => {
    let r = 0;
    for (; r + 1 < e.length && n >= e[r + 1][0];) r++;
    let i = le[e[r][1]],
      a = le[e[Math.min(e.length - 1, r + 1)][1]],
      o = e[r][0],
      s = e[Math.min(e.length - 1, r + 1)][0],
      c = s > o ? Math.min(1, Math.max(0, (n - o) / (s - o))) : 0,
      l = c * c * (3 - 2 * c);
    for (let e = 0; e < 4; e++) t[e] = i[e] + (a[e] - i[e]) * l;
    return t;
  };
}
function ue(e, t, n = 1, r) {
  let i = [205.3, 304.4, 369.6, 522.7, 540, 800],
    a = new Float32Array(e);
  for (let o of i)
    S(
      a,
      d(e, t, o * n * (r ? 1 + r.bi() * 0.01 : 1), `square`, r ? r.next() : 0),
      1 / 6,
    );
  return a;
}
const de = {
  room: [0.55, 3.6, [0.011, 0.019]],
  store: [0.5, 3.8, [0.009, 0.017, 0.026]],
  hall: [2.1, 2.6, [0.028, 0.05, 0.08]],
  temple: [2.6, 2.4, [0.035, 0.064]],
  station: [1.7, 2.8, [0.045, 0.09, 0.14]],
};
function fe(e, t) {
  let n = t === `low`;
  if (e === `world`) return [n ? 0.9 : 1.6, 3.2, [0.045, 0.09, 0.14]];
  if (e === `radio`) return [n ? 1.4 : 2.4, 2.6, [0.03, 0.061]];
  let r = de[e] ?? de.room;
  return [n ? Math.min(r[0], 1.2) : r[0], r[1], r[2]];
}
const pe = [48e3, 44100],
  A = 44100,
  j = 32e3,
  M = 22050;
function N(e, t, n, r, i, a, o = 0.001) {
  return x(
    d(Math.round(t * e), e, (e) => r + (n - r) * Math.exp(-e / i), `sine`),
    e,
    o,
    a,
  );
}
function P(e, t, n, r, i, a, o, c, l = 0) {
  let u = s(Math.round(t * e), n);
  return (m(u, e, r, i, a), x(u, e, o, c, l));
}
function F(e, t, n, r, i = 1) {
  return f(Math.round(t * e), e, n, [[1, i, r]]);
}
function me(e, t, n = 0.6, r = 0.25) {
  let i = f(Math.round(n * e), e, t, [
      [1, 1, r],
      [3.93, 0.28, r * 0.25],
      [9.2, 0.06, r * 0.08],
    ]),
    a = Math.round(0.002 * e);
  for (let e = 0; e < a; e++) i[e] *= e / a;
  return i;
}
function I(e, t, n = 1.5, r = 1) {
  let i = f(Math.round(n * e), e, t, [
      [1, 1, r],
      [4, 0.22, r * 0.18],
      [10.1, 0.05, r * 0.05],
    ]),
    a = Math.round(0.002 * e);
  for (let e = 0; e < a; e++) i[e] *= e / a;
  return i;
}
function he(e, t, n = 2, r = 1.2) {
  return f(Math.round(n * e), e, t, [
    [1, 1, r],
    [2, 0.5, r * 0.6],
    [2.76, 0.35, r * 0.4],
    [5.4, 0.18, r * 0.2],
    [8.93, 0.08, r * 0.1],
  ]);
}
function L(e, n, i, a, o = 1) {
  let s = Math.round(i * e),
    c = new Float32Array(s);
  for (let i = 0; i < 3; i++) {
    let o = r((i - 1) * 7 + a.bi() * 2);
    S(
      c,
      d(
        s,
        e,
        (e) => n * o * (1 + 0.004 * Math.sin(t * 5.2 * e + i)),
        `saw`,
        a.next(),
      ),
      0.33,
    );
  }
  return (
    h(
      c,
      e,
      (e) => 300 + 3200 * o * Math.min(1, e / 0.08) * Math.exp(-e / 1.2) + 500,
      0.9,
    ),
    b(c, e, [0, 0, 0.03, 1, 0.15, 0.8, i - 0.12, 0.7, i, 0]),
    c
  );
}
