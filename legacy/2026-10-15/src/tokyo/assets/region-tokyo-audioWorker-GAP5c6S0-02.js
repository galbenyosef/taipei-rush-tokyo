// tokyo/assets/region-tokyo-audioWorker-GAP5c6S0 02 — math
// Lines 342-535 of readable/tokyo/assets/region-tokyo-audioWorker-GAP5c6S0.pretty.js (statement-aligned).
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
