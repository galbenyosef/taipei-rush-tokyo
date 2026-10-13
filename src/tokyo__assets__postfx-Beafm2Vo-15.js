// tokyo__assets__postfx-Beafm2Vo 15 — uint8array
// Lines 8955-9260 of readable/tokyo__assets__postfx-Beafm2Vo.pretty.js (statement-aligned).
function ci(e, t, n, r, i, a) {
  let o = n * (t - 1),
    s = r * (t - 1),
    c = i * (t - 1),
    l = Math.floor(o),
    u = Math.floor(s),
    d = Math.floor(c),
    f = Math.ceil(o),
    p = Math.ceil(s),
    m = Math.ceil(c),
    h = o - l,
    g = s - u,
    _ = c - d;
  if (l === o && u === s && d === c) si(e, t, o, s, c, a);
  else {
    let n;
    h >= g && g >= _
      ? (n = ai[0])
      : h >= _ && _ >= g
        ? (n = ai[1])
        : _ >= h && h >= g
          ? (n = ai[2])
          : g >= h && h >= _
            ? (n = ai[3])
            : g >= _ && _ >= h
              ? (n = ai[4])
              : _ >= g && g >= h && (n = ai[5]);
    let [r, i, o, s] = n,
      c = ii[0];
    ((c[0] = h), (c[1] = g), (c[2] = _));
    let v = ii[1],
      y = f - l,
      b = p - u,
      x = m - d;
    ((v[0] = y * r[0] + l),
      (v[1] = b * r[1] + u),
      (v[2] = x * r[2] + d),
      si(e, t, v[0], v[1], v[2], Y[0]),
      (v[0] = y * i[0] + l),
      (v[1] = b * i[1] + u),
      (v[2] = x * i[2] + d),
      si(e, t, v[0], v[1], v[2], Y[1]),
      (v[0] = y * o[0] + l),
      (v[1] = b * o[1] + u),
      (v[2] = x * o[2] + d),
      si(e, t, v[0], v[1], v[2], Y[2]),
      (v[0] = y * s[0] + l),
      (v[1] = b * s[1] + u),
      (v[2] = x * s[2] + d),
      si(e, t, v[0], v[1], v[2], Y[3]));
    let ee = oi(i, o, s, c) * 6,
      S = oi(r, o, s, c) * 6,
      te = oi(r, i, s, c) * 6,
      C = oi(r, i, o, c) * 6;
    ((Y[0][0] *= ee),
      (Y[0][1] *= ee),
      (Y[0][2] *= ee),
      (Y[1][0] *= S),
      (Y[1][1] *= S),
      (Y[1][2] *= S),
      (Y[2][0] *= te),
      (Y[2][1] *= te),
      (Y[2][2] *= te),
      (Y[3][0] *= C),
      (Y[3][1] *= C),
      (Y[3][2] *= C),
      (a[0] = Y[0][0] + Y[1][0] + Y[2][0] + Y[3][0]),
      (a[1] = Y[0][1] + Y[1][1] + Y[2][1] + Y[3][1]),
      (a[2] = Y[0][2] + Y[1][2] + Y[2][2] + Y[3][2]));
  }
}
var li = class {
    static expand(e, t) {
      let n = Math.cbrt(e.length / 4),
        r = new Float32Array(3),
        i = new e.constructor(t ** 3 * 4),
        a = e instanceof Uint8Array ? 255 : 1,
        o = t ** 2,
        s = 1 / (t - 1);
      for (let c = 0; c < t; ++c)
        for (let l = 0; l < t; ++l)
          for (let u = 0; u < t; ++u) {
            let d = u * s,
              f = l * s,
              p = c * s,
              m = Math.round(u + l * t + c * o) * 4;
            (ci(e, n, d, f, p, r),
              (i[m + 0] = r[0]),
              (i[m + 1] = r[1]),
              (i[m + 2] = r[2]),
              (i[m + 3] = a));
          }
      return i;
    }
  },
  X = [new Float32Array(2), new Float32Array(2)],
  ui = 16,
  di = 20,
  fi = 30,
  pi = 32,
  mi = new Float32Array([0, -0.25, 0.25, -0.125, 0.125, -0.375, 0.375]),
  hi = [
    new Float32Array([0, 0]),
    new Float32Array([0.25, -0.25]),
    new Float32Array([-0.25, 0.25]),
    new Float32Array([0.125, -0.125]),
    new Float32Array([-0.125, 0.125]),
  ],
  gi = [
    new Uint8Array([0, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([0, 3]),
    new Uint8Array([3, 3]),
    new Uint8Array([1, 0]),
    new Uint8Array([4, 0]),
    new Uint8Array([1, 3]),
    new Uint8Array([4, 3]),
    new Uint8Array([0, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([0, 4]),
    new Uint8Array([3, 4]),
    new Uint8Array([1, 1]),
    new Uint8Array([4, 1]),
    new Uint8Array([1, 4]),
    new Uint8Array([4, 4]),
  ],
  _i = [
    new Uint8Array([0, 0]),
    new Uint8Array([1, 0]),
    new Uint8Array([0, 2]),
    new Uint8Array([1, 2]),
    new Uint8Array([2, 0]),
    new Uint8Array([3, 0]),
    new Uint8Array([2, 2]),
    new Uint8Array([3, 2]),
    new Uint8Array([0, 1]),
    new Uint8Array([1, 1]),
    new Uint8Array([0, 3]),
    new Uint8Array([1, 3]),
    new Uint8Array([2, 1]),
    new Uint8Array([3, 1]),
    new Uint8Array([2, 3]),
    new Uint8Array([3, 3]),
  ];
function vi(e, t, n) {
  return e + (t - e) * n;
}
function yi(e) {
  return Math.min(Math.max(e, 0), 1);
}
function bi(e) {
  let t = X[0],
    n = X[1],
    r = Math.sqrt(t[0] * 2) * 0.5,
    i = Math.sqrt(t[1] * 2) * 0.5,
    a = Math.sqrt(n[0] * 2) * 0.5,
    o = Math.sqrt(n[1] * 2) * 0.5,
    s = yi(e / pi);
  ((t[0] = vi(r, t[0], s)),
    (t[1] = vi(i, t[1], s)),
    (n[0] = vi(a, n[0], s)),
    (n[1] = vi(o, n[1], s)));
}
function Z(e, t, n, r, i, a) {
  let o = n - e,
    s = r - t,
    c = i,
    l = i + 1,
    u = t + (s * (c - e)) / o,
    d = t + (s * (l - e)) / o;
  if ((c >= e && c < n) || (l > e && l <= n)) {
    if (
      Math.sign(u) === Math.sign(d) ||
      Math.abs(u) < 1e-4 ||
      Math.abs(d) < 1e-4
    ) {
      let e = (u + d) / 2;
      e < 0
        ? ((a[0] = Math.abs(e)), (a[1] = 0))
        : ((a[0] = 0), (a[1] = Math.abs(e)));
    } else {
      let r = (-t * o) / s + e,
        i = Math.trunc(r),
        c = r > e ? (u * (r - i)) / 2 : 0,
        l = r < n ? (d * (1 - (r - i))) / 2 : 0;
      (Math.abs(c) > Math.abs(l) ? c : -l) < 0
        ? ((a[0] = Math.abs(c)), (a[1] = Math.abs(l)))
        : ((a[0] = Math.abs(l)), (a[1] = Math.abs(c)));
    }
  } else ((a[0] = 0), (a[1] = 0));
  return a;
}
function xi(e, t, n, r, i) {
  let a = X[0],
    o = X[1],
    s = 0.5 + r,
    c = 0.5 + r - 1,
    l = t + n + 1;
  switch (e) {
    case 0:
      ((i[0] = 0), (i[1] = 0));
      break;
    case 1:
      t <= n ? Z(0, c, l / 2, 0, t, i) : ((i[0] = 0), (i[1] = 0));
      break;
    case 2:
      t >= n ? Z(l / 2, 0, l, c, t, i) : ((i[0] = 0), (i[1] = 0));
      break;
    case 3:
      (Z(0, c, l / 2, 0, t, a),
        Z(l / 2, 0, l, c, t, o),
        bi(l, X),
        (i[0] = a[0] + o[0]),
        (i[1] = a[1] + o[1]));
      break;
    case 4:
      t <= n ? Z(0, s, l / 2, 0, t, i) : ((i[0] = 0), (i[1] = 0));
      break;
    case 5:
      ((i[0] = 0), (i[1] = 0));
      break;
    case 6:
      Math.abs(r) > 0
        ? (Z(0, s, l, c, t, a),
          Z(0, s, l / 2, 0, t, o),
          Z(l / 2, 0, l, c, t, i),
          (o[0] += i[0]),
          (o[1] += i[1]),
          (i[0] = (a[0] + o[0]) / 2),
          (i[1] = (a[1] + o[1]) / 2))
        : Z(0, s, l, c, t, i);
      break;
    case 7:
      Z(0, s, l, c, t, i);
      break;
    case 8:
      t >= n ? Z(l / 2, 0, l, s, t, i) : ((i[0] = 0), (i[1] = 0));
      break;
    case 9:
      Math.abs(r) > 0
        ? (Z(0, c, l, s, t, a),
          Z(0, c, l / 2, 0, t, o),
          Z(l / 2, 0, l, s, t, i),
          (o[0] += i[0]),
          (o[1] += i[1]),
          (i[0] = (a[0] + o[0]) / 2),
          (i[1] = (a[1] + o[1]) / 2))
        : Z(0, c, l, s, t, i);
      break;
    case 10:
      ((i[0] = 0), (i[1] = 0));
      break;
    case 11:
      Z(0, c, l, s, t, i);
      break;
    case 12:
      (Z(0, s, l / 2, 0, t, a),
        Z(l / 2, 0, l, s, t, o),
        bi(l, X),
        (i[0] = a[0] + o[0]),
        (i[1] = a[1] + o[1]));
      break;
    case 13:
      Z(0, c, l, s, t, i);
      break;
    case 14:
      Z(0, s, l, c, t, i);
      break;
    case 15:
      ((i[0] = 0), (i[1] = 0));
  }
  return i;
}
function Si(e, t, n, r, i, a) {
  let o = e === n && t === r;
  if (!o) {
    let s = (e + n) / 2,
      c = (t + r) / 2,
      l = r - t,
      u = e - n;
    o = l * (i - s) + u * (a - c) > 0;
  }
  return o;
}
function Ci(e, t, n, r, i, a) {
  let o = 0;
  for (let s = 0; s < fi; ++s)
    for (let c = 0; c < fi; ++c) {
      let l = c / (fi - 1),
        u = s / (fi - 1);
      Si(e, t, n, r, i + l, a + u) && ++o;
    }
  return o / (fi * fi);
}
function Q(e, t, n, r, i, a, o, s) {
  let c = _i[e],
    l = c[0],
    u = c[1];
  return (
    l > 0 && ((t += o[0]), (n += o[1])),
    u > 0 && ((r += o[0]), (i += o[1])),
    (s[0] = 1 - Ci(t, n, r, i, 1 + a, 0 + a)),
    (s[1] = Ci(t, n, r, i, 1 + a, 1 + a)),
    s
  );
}
