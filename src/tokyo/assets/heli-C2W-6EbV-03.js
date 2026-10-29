// tokyo/assets/heli-C2W-6EbV 03 — math
// Lines 467-744 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function Le(e, t) {
  let n = t.zs.length,
    r = t.ring,
    i = new Float64Array(n * r * 3),
    a = new Float64Array(n * r * 3),
    o = [0, 0, 0],
    s = [0, 0, 0];
  for (let e = 0; e < n; e++) {
    let n = t.zs[e];
    t.sec(n, o);
    for (let a = 0; a < r; a++) {
      Ie(s, n, o[0], o[1], o[2], (a / r) * Math.PI * 2, t.nUp, t.nDn);
      let c = (e * r + a) * 3;
      ((i[c] = s[0]), (i[c + 1] = s[1]), (i[c + 2] = s[2]));
    }
  }
  for (let e = 0; e < n; e++)
    for (let s = 0; s < r; s++) {
      let c = Math.max(0, e - 1),
        l = Math.min(n - 1, e + 1),
        u = (s - 1 + r) % r,
        d = (s + 1) % r,
        f = [
          i[(l * r + s) * 3] - i[(c * r + s) * 3],
          i[(l * r + s) * 3 + 1] - i[(c * r + s) * 3 + 1],
          i[(l * r + s) * 3 + 2] - i[(c * r + s) * 3 + 2],
        ],
        p = [
          i[(e * r + d) * 3] - i[(e * r + u) * 3],
          i[(e * r + d) * 3 + 1] - i[(e * r + u) * 3 + 1],
          i[(e * r + d) * 3 + 2] - i[(e * r + u) * 3 + 2],
        ],
        m = p[1] * f[2] - p[2] * f[1],
        h = p[2] * f[0] - p[0] * f[2],
        g = p[0] * f[1] - p[1] * f[0],
        _ = Math.hypot(m, h, g) || 1;
      ((m /= _), (h /= _), (g /= _));
      let v = (e * r + s) * 3;
      t.sec(t.zs[e], o);
      let y = (o[1] + o[2]) / 2;
      (m * i[v] + h * (i[v + 1] - y) < 0 && ((m = -m), (h = -h), (g = -g)),
        (a[v] = m),
        (a[v + 1] = h),
        (a[v + 2] = g));
    }
  let c = (e, t, n) =>
      K(e, i[(t * r + n) * 3], i[(t * r + n) * 3 + 1], i[(t * r + n) * 3 + 2]),
    l = (e, t, n) =>
      K(e, a[(t * r + n) * 3], a[(t * r + n) * 3 + 1], a[(t * r + n) * 3 + 2]);
  for (let i = 0; i < n - 1; i++)
    for (let n = 0; n < r; n++) {
      let a = (n + 1) % r;
      (c(R, i, n),
        c(z, i, a),
        c(B, i + 1, a),
        c(V, i + 1, n),
        l(H, i, n),
        l(U, i, a),
        l(W, i + 1, a),
        l(G, i + 1, n));
      let o = (R[0] + z[0] + B[0] + V[0]) / 4,
        s = (R[1] + z[1] + B[1] + V[1]) / 4,
        u = (R[2] + z[2] + B[2] + V[2]) / 4,
        d = (H[0] + U[0] + W[0] + G[0]) / 4,
        f = (H[1] + U[1] + W[1] + G[1]) / 4,
        p = (H[2] + U[2] + W[2] + G[2]) / 4;
      e.style(t.style(o, s, u, d, f, p));
      let m = t.uv
        ? t.uv(
            R[0],
            R[1],
            R[2],
            z[0],
            z[1],
            z[2],
            B[0],
            B[1],
            B[2],
            V[0],
            V[1],
            V[2],
            d,
          )
        : !1;
      e.smoothQuadUV(R, z, B, V, H, U, W, G, m ? Ee : void 0);
    }
  let u = (n, i, a) => {
    for (let o = 0; o < r; o++) {
      let s = (o + 1) % r;
      (c(R, n, o), c(z, n, s));
      let l = (R[0] + z[0] + i[0]) / 3,
        u = (R[1] + z[1] + i[1]) / 3,
        d = (R[2] + z[2] + i[2]) / 3;
      (e.style(t.style(l, u, d, 0, 0, a)), K(H, 0, 0, a), e.tri(R, z, i, H));
    }
  };
  (t.capFront && u(0, t.capFront, -1), t.capBack && u(n - 1, t.capBack, 1));
}
function Re(e, t, n, r) {
  let i = [],
    a = Math.max(1, Math.ceil((t - e) / n));
  for (let n = 0; n <= a; n++) i.push(e + ((t - e) * n) / a);
  for (let n of r) n > e && n < t && i.push(n);
  return (
    i.sort((e, t) => e - t),
    i.filter((e, t) => t === 0 || e - i[t - 1] > 0.02)
  );
}
function q(e, t, n, r, i, a, o, s, c = s, l = 8, u = !1) {
  let d = i - t,
    f = a - n,
    p = o - r,
    m = Math.hypot(d, f, p) || 1;
  ((d /= m), (f /= m), (p /= m));
  let h = -p,
    g = 0,
    _ = d;
  Math.abs(f) > 0.9 && ((h = 1), (g = 0), (_ = 0));
  let v = Math.hypot(h, g, _);
  ((h /= v), (g /= v), (_ /= v));
  let y = f * _ - p * g,
    b = p * h - d * _,
    x = d * g - f * h;
  ((v = Math.hypot(y, b, x)), (y /= v), (b /= v), (x /= v));
  for (let m = 0; m < l; m++) {
    let v = (m / l) * Math.PI * 2,
      S = ((m + 1) / l) * Math.PI * 2,
      C = Math.cos(v),
      w = Math.sin(v),
      T = Math.cos(S),
      ee = Math.sin(S),
      te = h * C + y * w,
      ne = g * C + b * w,
      re = _ * C + x * w,
      ie = h * T + y * ee,
      E = g * T + b * ee,
      D = _ * T + x * ee;
    (K(R, t + te * s, n + ne * s, r + re * s),
      K(z, t + ie * s, n + E * s, r + D * s),
      K(B, i + ie * c, a + E * c, o + D * c),
      K(V, i + te * c, a + ne * c, o + re * c),
      K(H, te, ne, re),
      K(U, ie, E, D),
      K(W, ie, E, D),
      K(G, te, ne, re),
      e.smoothQuadUV(R, z, B, V, H, U, W, G),
      u &&
        (K(W, -d, -f, -p),
        e.tri(K(B, t, n, r), R, z, W),
        K(W, d, f, p),
        e.tri(
          K(B, i, a, o),
          K(R, i + te * c, a + ne * c, o + re * c),
          K(z, i + ie * c, a + E * c, o + D * c),
          W,
        )));
  }
}
function ze(e, t, n, r, i, a = 8, o = 5, s = 1) {
  for (let c = 0; c < o; c++) {
    let l = (c / o) * Math.PI,
      u = ((c + 1) / o) * Math.PI;
    for (let o = 0; o < a; o++) {
      let c = (o / a) * Math.PI * 2,
        d = ((o + 1) / a) * Math.PI * 2,
        f = [
          [l, c],
          [l, d],
          [u, d],
          [u, c],
        ],
        p = [R, z, B, V],
        m = [H, U, W, G];
      for (let e = 0; e < 4; e++) {
        let [a, o] = f[e],
          c = Math.sin(a) * Math.cos(o),
          l = Math.cos(a),
          u = Math.sin(a) * Math.sin(o);
        (K(p[e], t + c * i, n + l * i * s, r + u * i), K(m[e], c, l, u));
      }
      e.smoothQuadUV(R, z, B, V, H, U, W, G);
    }
  }
}
function Be(e, t, r, i, a) {
  let s = t.length,
    c = t.map(([e, t]) => new d(e, t)),
    l = o.triangulateShape(c, []),
    u = (e, t, r) => {
      let i = n.clamp((e - N.z0) / (N.z1 - N.z0), 0, 1);
      return [
        r ? N.u1 - i * (N.u1 - N.u0) : N.u0 + i * (N.u1 - N.u0),
        N.v0 + n.clamp((t - N.y0) / (N.y1 - N.y0), 0, 1) * (N.v1 - N.v0),
      ];
    };
  for (let n of [-1, 1]) {
    let o = n < 0 ? r : i;
    for (let r of l) {
      let [i, s] = t[r[0]],
        [c, l] = t[r[1]],
        [d, f] = t[r[2]];
      (K(H, n, 0, 0),
        a
          ? e.tri(
              K(R, o, s, i),
              K(z, o, l, c),
              K(B, o, f, d),
              H,
              u(i, s, n > 0),
              u(c, l, n > 0),
              u(d, f, n > 0),
            )
          : e.tri(K(R, o, s, i), K(z, o, l, c), K(B, o, f, d), H));
    }
  }
  for (let n = 0; n < s; n++) {
    let [a, o] = t[n],
      [c, l] = t[(n + 1) % s],
      u = l - o,
      d = -(c - a),
      f = Math.hypot(u, d) || 1;
    ((u /= f), (d /= f));
    let p = 0,
      m = 0;
    for (let [e, n] of t) ((p += e / s), (m += n / s));
    (u * ((a + c) / 2 - p) + d * ((o + l) / 2 - m) < 0 && ((u = -u), (d = -d)),
      e.quad(
        K(R, r, o, a),
        K(z, i, o, a),
        K(B, i, l, c),
        K(V, r, l, c),
        K(H, 0, d, u),
      ));
  }
}
var Ve = [
    [-3.98, 0.05, 1.04, 1.14],
    [-3.9, 0.36, 0.88, 1.36],
    [-3.72, 0.6, 0.74, 1.6],
    [-3.42, 0.77, 0.65, 1.83],
    [-3, 0.88, 0.6, 2.01],
    [-2.45, 0.93, 0.575, 2.13],
    [-1.8, 0.95, 0.565, 2.18],
    [-1, 0.95, 0.565, 2.2],
    [-0.2, 0.94, 0.575, 2.2],
    [0.5, 0.91, 0.605, 2.18],
    [1.1, 0.84, 0.675, 2.12],
    [1.6, 0.71, 0.8, 2.05],
    [2.1, 0.53, 0.98, 1.98],
    [2.55, 0.39, 1.19, 1.92],
    [2.9, 0.31, 1.35, 1.89],
  ],
  He = 2.9,
  Ue = 7.05,
  J = (e) => 0.31 + -0.16 * ((e - He) / 4.15),
  We = (e) => 1.62 + (1.8 - 1.62) * ((e - He) / 4.15);
function Y(e, t, r, i, a, o, s, c, l, u, d, f, p) {
  if (Math.abs(p) < 0.28) return !1;
  let m = p > 0,
    h = (e, t, r) => {
      let i = n.clamp((t - A.z0) / (A.z1 - A.z0), 0, 1);
      ((Ee[e * 2] = m ? A.u1 - i * (A.u1 - A.u0) : A.u0 + i * (A.u1 - A.u0)),
        (Ee[e * 2 + 1] =
          A.v0 + n.clamp((r - A.y0) / (A.y1 - A.y0), 0, 1) * (A.v1 - A.v0)));
    };
  return (h(0, r, t), h(1, o, a), h(2, l, c), h(3, f, d), !0);
}
function Ge(e, t, n, r, i) {
  let a = Math.abs(r);
  return (n < -2.42 && t > 1 && t < Fe(Ve, 3, n) - 0.06) ||
    (n < -2.9 && t > 0.68 && t <= 1 && i > -0.75) ||
    (a > 0.55 &&
      t > 1.14 &&
      t < 1.98 &&
      ((n > -2.32 && n < -1.3) || (n > -1.06 && n < 0.24)))
    ? Oe
    : De;
}
