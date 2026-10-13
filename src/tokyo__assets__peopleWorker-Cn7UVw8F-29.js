// tokyo__assets__peopleWorker-Cn7UVw8F 29 — math
// Lines 14504-14828 of readable/tokyo__assets__peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function Oi(e, t, n) {
  let r = Ei(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = Ti(t, 0),
    s = Math.abs(o),
    c = i.mPerRad;
  {
    let t = ((s - i.eyeT) * c) / (i.eyeW * c * 1.45),
      o =
        ((n - (i.eyeD - 0.004)) * e.hh) / (n < i.eyeD ? 0.017 * a : 0.013 * a);
    r -= e.sock * Math.exp(-(t * t + o * o));
  }
  if (
    ((r +=
      e.browRidge *
      U(s - (i.eyeT - 0.03), 0.27) *
      U(n - (i.browD + 0.012), 0.032)),
    (r += e.browRidge * 0.6 * U(o, 0.1) * U(n - 0.462, 0.03)),
    (r += e.frontal * U(s - 0.34, 0.24) * U(n - 0.27, 0.08)),
    (r -= e.temple * U(s - 1.18, 0.22) * U(n - 0.38, 0.09)),
    (r += e.cheekBone * U(s - 0.74, 0.22) * U(n - 0.6, 0.05)),
    (r += e.cheekBone * 0.35 * U(s - 1.15, 0.2) * U(n - 0.58, 0.035)),
    (r -= e.buccal * U(s - 0.9, 0.22) * U(n - 0.765, 0.07)),
    (r += e.cheekFat * U(s - 0.55, 0.28) * U(n - 0.72, 0.075)),
    (r += e.muzzle * U(o, 0.42) * U(n - 0.785, 0.075)),
    s < 0.6 && n > 0.62 && n < 0.9)
  ) {
    let t = i.noseW * 1.18 * c,
      o = (i.noseBaseD - 0.012) * e.hh,
      l = i.mouthW * 1.32 * c,
      u = (i.mouthD + 0.04) * e.hh,
      d = s * c,
      f = n * e.hh,
      p = l - t,
      m = u - o,
      h = _i(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = V(-0.05, 0.1, h) * (1 - V(0.85, 1.15, h));
    ((r -= e.naso * U(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * U(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += Di(e, o, n)),
    (r += e.chin * U(o, 0.27) * U(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * U(s - 0.13, 0.085) * U(n - 0.95, 0.03)),
    (r += e.jawAngle * U(s - 1.22, 0.2) * U(n - 0.885, 0.05)),
    r
  );
}
function ki(e, t) {
  return e.cz + wi(e.keys, 4, t);
}
function Ai(e, t) {
  let n = e.lay,
    r = Ti(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function ji(e, t, n) {
  let r = e.lay,
    i = _i(t, -1, 1),
    a = vi(r, i),
    o = yi(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * V(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        U(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - V(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * V(0, 0.03, r) +
      e.aegyo * U(r - 0.009, 0.007) * (1 - V(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function Mi(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - V(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
const Ni = new N(),
  Pi = new N();
function Fi(e, t, n, r, i) {
  let a = Ei(e, n, r);
  return (
    Pi.set(Math.sin(n) * a, e.crownY - r * e.hh, ki(e, r) - Math.cos(n) * a),
    i.subVectors(Pi, t.c).normalize()
  );
}
function Ii(e, t, n, r, i, a) {
  return (Fi(e, t, n, r, Ni), a.copy(t.c).addScaledVector(Ni, t.r + i));
}
const Li = new N(),
  Ri = new N();
function zi(e, t, n, r) {
  let i = Oi(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (Li.set(Math.sin(t) * i, a, ki(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = Ai(e, t),
      s = Mi(e, o, n);
    if (s > 0) {
      Ii(e, a, t, n, ji(e, o, n), Ri);
      let c = ki(e, n),
        l = Math.hypot(Ri.x, Ri.z - c) >= i ? s : s * V(0.55, 1, s);
      r.lerpVectors(Li, Ri, l);
      let u = a.r + e.lidTm * 0.85,
        d = r.x - a.c.x,
        f = r.y - a.c.y,
        p = r.z - a.c.z,
        m = Math.hypot(d, f, p);
      return (
        m < u &&
          p < 0 &&
          r.set(a.c.x + (d / m) * u, a.c.y + (f / m) * u, a.c.z + (p / m) * u),
        r
      );
    }
  }
  return r.copy(Li);
}
function Bi(e, t, n, r = !0) {
  return r ? (zi(e, t, n, Vi), Math.hypot(Vi.x, Vi.z - ki(e, n))) : Ei(e, t, n);
}
const Vi = new N();
function W(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = Ei(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      ki(e, n) - Math.cos(t) * a,
    );
  }
  return (
    zi(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function Hi(e, t, n, r) {
  ((r[0] = 0.5 + Ti(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
const Ui = new N(),
  Wi = new N(),
  Gi = new N(),
  Ki = new N();
function qi(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (W(e, t - a, n, 0, Ui), W(e, t + a, n, 0, Wi), Wi.sub(Ui));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (W(e, t, s, 0, Ki),
    W(e, t, c, 0, Gi),
    Gi.sub(Ki),
    r.crossVectors(Gi, Wi).normalize(),
    W(e, t, n, 0, Ui));
  let l = Ui.x,
    u = Ui.z - ki(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function Ji(e) {
  let t = [];
  if (e === 0) {
    for (let e = 0; e < 3; e++) t.push(-Math.PI + (e / 3) * (Math.PI - 1.2));
    for (let e = -1.2; e < 1.199999; e += 0.1715) t.push(e);
    for (let e = 0; e <= 3; e++) t.push(1.2 + (e / 3) * (Math.PI - 1.2));
  } else {
    for (let e = 0; e < 2; e++) t.push(-Math.PI + (e / 2) * (Math.PI - 1));
    for (let e = -1; e < 1 - 1e-6; e += 0.4) t.push(e);
    for (let e = 0; e <= 2; e++) t.push(1 + (e / 2) * (Math.PI - 1));
  }
  return t;
}
function Yi(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
const Xi = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  Zi = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  Qi = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  $i = 1.95;
function ea(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = Xi.slice();
  i[16] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - V(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = _i(a, -1, 1),
      r = vi(n, t),
      o = yi(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[6] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[7 + e] = gi(i[7 + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - V(1, 1.75, l);
  if (u > 0) {
    let e = _i(c, -1, 1),
      t = bi(n, e),
      r = xi(n, e),
      a = Si(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = gi(i[16], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[17 + e] = gi(i[17 + e], o[e], u);
    i[17] = Math.max(i[17], i[16] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function ta(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + ($i - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
const na = new N(),
  G = new N(),
  ra = new F();
function ia(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = bi(o, Math.min(1, c)),
    u = V(l - 0.004, l + 0.05, n) * V(0.1, 0.5, s) * (1 - V(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - V(0.9, 1.4, c))),
    a && (u = 0),
    Yr(r, R.head, R.jaw, u));
}
function aa(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(Ti(n, 0)),
    o =
      U(a - 0.6, 0.3) * U(r - 0.66, 0.08) * 0.1 +
      U(a, 0.12) * U(r - 0.66, 0.05) * 0.08 +
      U(a, 0.25) * U(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = V(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * U(a - (t.eyeT - t.eyeW * 0.95), 0.06) * U(r - t.eyeD, 0.03)),
      (s += 0.08 * U(a - t.eyeT, 0.2) * U(r - (vi(t, 0) - 0.03), 0.014)),
      (s += 0.1 * U(a, 0.09) * U(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * U(n - 1.03, 0.14) * U(r - bi(t, 1), 0.012)),
      (s += 0.08 * U(a, 0.25) * U(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * U(a - 1.55, 0.18) * U(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        V(0.7, 0.8, r) * U(a, 1) * (1 - U(n, 0.9) * U(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function oa(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * U(i, 0.45) * U(n - 0.33, 0.12)),
    (a -= 0.12 * U(i, 0.12) * U(n - 0.62, 0.08)),
    (a -= 0.05 * U(i, 0.3) * U(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = bi(r, Math.min(1, o));
  return (
    (1 - V(0.85, 1.1, o)) *
      (n > s - xi(r, o) - 0.003 && n < s + Si(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function* sa(e) {
  e.lod === 0 ? yield* ca(e) : ha(e);
}
