// tokyo/assets/region-tokyo-A7LxHjud 279 — math
// Lines 103191-103525 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* qV(e, t) {
  let n = t.step,
    r = t.salt ?? 11,
    i = t.jitter ?? n * 0.3,
    a = t.lump ?? n * 0.55,
    o = t.baseY ?? 0,
    s = t.inset ?? (o > 0 ? n * 0.45 : 0),
    c = Math.ceil((t.x1 - t.x0) / n),
    l = Math.ceil((t.z1 - t.z0) / n),
    u = new Uint8Array((c + 2) * (l + 2)),
    d = (e, t) =>
      e < 0 || t < 0 || e >= c || t >= l ? 0 : u[(t + 1) * (c + 2) + e + 1];
  for (let e = 0; e < l; e++)
    for (let r = 0; r < c; r++)
      u[(e + 1) * (c + 2) + r + 1] = +!!t.inside(
        t.x0 + (r + 0.5) * n,
        t.z0 + (e + 0.5) * n,
      );
  let f = (e, t) => d(e - 1, t - 1) + d(e, t - 1) + d(e - 1, t) + d(e, t),
    p = (c + 1) * (l + 1),
    m = new Float32Array(p),
    h = new Float32Array(p),
    g = new Float32Array(p),
    _ = new Float32Array(p),
    v = new Uint8Array(p),
    y = new Int32Array(p).fill(-1),
    b = (e, t) => t * (c + 1) + e;
  for (let e = 0; e <= l; e++)
    for (let o = 0; o <= c; o++) {
      let s = f(o, e);
      if (!s) continue;
      let c = b(o, e),
        l = t.x0 + o * n,
        u = t.z0 + e * n,
        d = BV(o, e, r),
        p = t.height(l, u) + a * (d - 0.35);
      (s < 4 &&
        ((l += (BV(o, e, r + 1) - 0.5) * 2 * i),
        (u += (BV(o, e, r + 2) - 0.5) * 2 * i),
        (p *= 0.8 + 0.1 * BV(o, e, r + 3))),
        t.ground && (p += t.ground(l, u)),
        (m[c] = l),
        (h[c] = u),
        (g[c] = p),
        (_[c] = d),
        (v[c] = 1));
    }
  let x = (e, t, n) =>
      e < 0 || t < 0 || e > c || t > l || !v[b(e, t)] ? n : g[b(e, t)],
    S = e.white;
  e.push().mat(0.97, 0, 0, 0);
  let C = (i, a) => {
    let o = b(i, a);
    if (y[o] >= 0) return y[o];
    let s = m[o],
      c = h[o],
      l = g[o],
      u = -(x(i + 1, a, l) - x(i - 1, a, l)) / (2 * n),
      d = 1,
      f = -(x(i, a + 1, l) - x(i, a - 1, l)) / (2 * n),
      p = Math.hypot(u, d, f);
    ((u /= p), (d /= p), (f /= p));
    let v =
        Math.min(1, Math.max(0, (VV(s, c, 40, r) - 0.4) * 2.4)) *
        (0.45 + 0.55 * VV(s, c, 13, r + 5)),
      C = (0.6 + 0.55 * _[o]) * (0.94 + 0.12 * BV(i, a, r + 7));
    return (
      e.col(YV(t.dark, t.light, v), C),
      (y[o] = e.v(s, l, c, u, d, f, S.u0, S.v0)),
      y[o]
    );
  };
  for (let t = 0; t < l; t++) {
    t % 12 == 11 && (yield);
    for (let n = 0; n < c; n++) {
      if (!d(n, t)) continue;
      let r = C(n, t),
        i = C(n + 1, t),
        a = C(n + 1, t + 1),
        o = C(n, t + 1);
      g[b(n, t)] + g[b(n + 1, t + 1)] < g[b(n + 1, t)] + g[b(n, t + 1)]
        ? (e.tri(r, o, a), e.tri(r, a, i))
        : (e.tri(i, r, o), e.tri(i, o, a));
    }
  }
  yield;
  let w = (n, i, a, c, l, u) => {
    let d = b(n, i),
      f = b(a, c),
      p = m[d],
      _ = h[d],
      v = g[d],
      y = m[f],
      x = h[f],
      S = g[f],
      C = 0.86 + 0.14 * BV(n + a, i + c, r + 9),
      w = p - l * s,
      T = _ - u * s,
      E = y - l * s,
      D = x - u * s,
      O = t.ground ? t.ground(w, T) : 0,
      k = t.ground ? t.ground(E, D) : 0,
      A = O + (o > 0 ? o + 1.5 * BV(n, i, r + 4) : 0),
      j = k + (o > 0 ? o + 1.5 * BV(a, c, r + 4) : 0);
    if (
      (e.col(t.underside ?? t.dark, (o > 0 ? 0.8 : 0.85) * C),
      e.quad(w, A, T, E, j, D, y, S, x, p, v, _),
      o > 0 &&
        (e.col(t.understory ?? 4939832, C),
        e.quad(w, O, T, E, k, D, E, j, D, w, A, T),
        t.trunks && !e.coarse))
    ) {
      let o = (w + E) / 2 + l * 0.5,
        s = (T + D) / 2 + u * 0.5;
      if (t.trunks(o, s)) {
        let d = 0.2 + 0.16 * BV(n, c, r + 13);
        (e.col(5129274, 0.85 + 0.3 * BV(a, i, r + 14)),
          e.rod(
            o,
            t.ground ? (O + k) / 2 - 0.3 : 0,
            s,
            o - l * 0.4,
            (A + j) / 2 + 2,
            s - u * 0.4,
            d,
            5,
            d * 0.75,
          ));
      }
    }
  };
  for (let e = 0; e < l; e++)
    for (let t = 0; t < c; t++)
      d(t, e) &&
        (d(t, e - 1) || w(t + 1, e, t, e, 0, -1),
        d(t, e + 1) || w(t, e + 1, t + 1, e + 1, 0, 1),
        d(t - 1, e) || w(t, e, t, e + 1, -1, 0),
        d(t + 1, e) || w(t + 1, e + 1, t + 1, e, 1, 0));
  e.pop();
}
function JV(e, t, n, r, i, a, o, s, c, l = 9, u = 15, d) {
  let f = Math.hypot(r - t, i - n),
    p = Math.max(1, Math.round(f / a)),
    m = (r - t) / f,
    h = -((i - n) / f),
    g = m,
    _ = HV(s);
  for (let a = 0; a <= p; a++) {
    if (e.coarse && a % 3) continue;
    let s = (a + _.range(-0.3, 0.3)) / p,
      f = _.range(l, u),
      m = f * _.range(0.34, 0.46),
      v = o * _.range(0.6, 1.2),
      y = t + (r - t) * s + h * v,
      b = n + (i - n) * s + g * v;
    if (d && d(y, b)) continue;
    let x = f * 0.6;
    (e.coarse ||
      e
        .push()
        .col(5326396)
        .mat(0.95, 0, 0, 0)
        .rod(y, 0, b, y, x, b, f * 0.026, 4, f * 0.015)
        .pop(),
      UV(
        e,
        y,
        b,
        e.coarse
          ? [
              [0, x - m * 0.7],
              [m, x],
              [0, x + m],
            ]
          : [
              [0, x - m * 0.75],
              [m, x - m * 0.1],
              [m * 0.66, x + m * 0.55],
              [0, x + m * 0.95],
            ],
        e.coarse ? 4 : 5,
        c,
        _.range(0.85, 1.12),
        _.next() * 3,
      ));
  }
}
function YV(e, t, n) {
  let r = (r) => Math.round(((e >> r) & 255) * (1 - n) + ((t >> r) & 255) * n);
  return (r(16) << 16) | (r(8) << 8) | r(0);
}
function XV(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = Math.max(1, Math.round((r - t) / o)),
    p = Math.max(1, Math.round((i - n) / o)),
    m = (r - t) / f,
    h = (i - n) / p,
    g = e.white;
  e.push().mat(0.97, 0, 0, 0);
  let _ = new Int32Array((f + 1) * (p + 1)).fill(-1),
    v = (r, i) => {
      let o = i * (f + 1) + r;
      if (_[o] >= 0) return _[o];
      let u = t + r * m,
        p = n + i * h,
        v = VV(u, p, 23, l) * 0.75 + BV(r, i, l) * 0.25;
      return (
        e.col(YV(s, c, v)),
        (_[o] = e.v(u, a + (d ? d(u, p) : 0), p, 0, 1, 0, g.u0, g.v0)),
        _[o]
      );
    };
  for (let r = 0; r < p; r++)
    for (let i = 0; i < f; i++) {
      if (u && u(t + (i + 0.5) * m, n + (r + 0.5) * h)) continue;
      let a = v(i, r),
        o = v(i + 1, r),
        s = v(i + 1, r + 1),
        c = v(i, r + 1);
      (e.tri(a, c, s), e.tri(a, s, o));
    }
  e.pop();
}
function ZV(e, t, n, r, i, a, o = 4) {
  let s = t.length;
  if (s < 2) return;
  let c = n / 2,
    l = [],
    u = [],
    d =
      s > 3 && Math.hypot(t[0][0] - t[s - 1][0], t[0][1] - t[s - 1][1]) < 1e-6;
  for (let e = 0; e < s; e++) {
    let n = t[e],
      r = d && e === 0 ? t[s - 2] : t[Math.max(0, e - 1)],
      i = d && e === s - 1 ? t[1] : t[Math.min(s - 1, e + 1)],
      a = n[0] - r[0],
      o = n[1] - r[1],
      f = i[0] - n[0],
      p = i[1] - n[1];
    (e === 0 && !d && ((a = f), (o = p)),
      e === s - 1 && !d && ((f = a), (p = o)));
    let m = Math.hypot(a, o) || 1,
      h = Math.hypot(f, p) || 1,
      g = o / m,
      _ = -a / m,
      v = p / h,
      y = -f / h,
      b = g + v,
      x = _ + y,
      S = Math.hypot(b, x) || 1;
    ((b /= S), (x /= S));
    let C = c / Math.max(0.35, b * g + x * _);
    (l.push([n[0] + b * C, n[1] + x * C]),
      u.push([n[0] - b * C, n[1] - x * C]));
  }
  e.push().col(i).mat(0.95, 0, 0, 0);
  let f = e.coarse ? e.white : a;
  for (let n = 0; n + 1 < s; n++) {
    let i = Math.hypot(t[n + 1][0] - t[n][0], t[n + 1][1] - t[n][1]),
      a = e.coarse ? 1 : Math.max(1, Math.round(i / o));
    for (let t = 0; t < a; t++) {
      let i = t / a,
        o = (t + 1) / a,
        s = (e, t) => [
          e[n][0] + (e[n + 1][0] - e[n][0]) * t,
          e[n][1] + (e[n + 1][1] - e[n][1]) * t,
        ],
        [c, d] = s(l, i),
        [p, m] = s(l, o),
        [h, g] = s(u, i),
        [_, v] = s(u, o);
      qwe(e, c, d, h, g, _, v, p, m, r, f);
    }
  }
  e.pop();
}
function qwe(e, t, n, r, i, a, o, s, c, l, u = e.white) {
  (r - t) * (o - n) - (i - n) * (a - t) > 0
    ? e.quad(t, l, n, s, l, c, a, l, o, r, l, i, u)
    : e.quad(t, l, n, r, l, i, a, l, o, s, l, c, u);
}
function Jwe(e, t, n, r, i) {
  let a = e.white,
    o = e.v(t, i, n, 0, 1, 0, a.u0, a.v0);
  for (let [t, n] of r) e.v(t, i, n, 0, 1, 0, a.u0, a.v0);
  let s = r.length,
    c = 0;
  for (let e = 0; e < s; e++) {
    let [t, n] = r[e],
      [i, a] = r[(e + 1) % s];
    c += t * a - i * n;
  }
  for (let t = 0; t < s; t++) {
    let n = o + 1 + t,
      r = o + 1 + ((t + 1) % s);
    c > 0 ? e.tri(o, r, n) : e.tri(o, n, r);
  }
}
function QV(e, t, n, r, i, a, o = 0, s = !0) {
  let c = e.coarse ? 10 : 14,
    l = HV(a),
    u = [],
    d = Math.cos(o),
    f = Math.sin(o);
  for (let e = 0; e < c; e++) {
    let a = (e / c) * Math.PI * 2,
      o = 0.84 + 0.26 * l.next(),
      s = Math.cos(a) * r * o,
      p = Math.sin(a) * i * o;
    u.push([t + s * d - p * f, n + s * f + p * d]);
  }
  if (
    (e.push().col(3229258).mat(0.1, 0.15, 0, 0),
    Jwe(e, t, n, u, zV.WATER),
    s && !e.coarse)
  ) {
    e.col(9077624).mat(0.92, 0, 0, 0);
    for (let t = 0; t < c; t++) {
      let [n, r] = u[t],
        [i, a] = u[(t + 1) % c],
        o = (n + i) / 2,
        s = (r + a) / 2,
        d = 0.45 + l.next() * 0.45;
      t % 2 ||
        e.box(
          o - d,
          -0.05,
          s - d * 0.8,
          o + d,
          0.25 + l.next() * 0.25,
          s + d * 0.8,
        );
    }
  } else e.col(7301728);
  return (e.pop(), u);
}
