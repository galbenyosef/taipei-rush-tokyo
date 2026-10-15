// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 28 — math
// Lines 14273-14597 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function pi(e, t, n) {
  let r = di(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = ui(t, 0),
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
      H(s - (i.eyeT - 0.03), 0.27) *
      H(n - (i.browD + 0.012), 0.032)),
    (r += e.browRidge * 0.6 * H(o, 0.1) * H(n - 0.462, 0.03)),
    (r += e.frontal * H(s - 0.34, 0.24) * H(n - 0.27, 0.08)),
    (r -= e.temple * H(s - 1.18, 0.22) * H(n - 0.38, 0.09)),
    (r += e.cheekBone * H(s - 0.74, 0.22) * H(n - 0.6, 0.05)),
    (r += e.cheekBone * 0.35 * H(s - 1.15, 0.2) * H(n - 0.58, 0.035)),
    (r -= e.buccal * H(s - 0.9, 0.22) * H(n - 0.765, 0.07)),
    (r += e.cheekFat * H(s - 0.55, 0.28) * H(n - 0.72, 0.075)),
    (r += e.muzzle * H(o, 0.42) * H(n - 0.785, 0.075)),
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
      h = ni(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = V(-0.05, 0.1, h) * (1 - V(0.85, 1.15, h));
    ((r -= e.naso * H(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * H(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += fi(e, o, n)),
    (r += e.chin * H(o, 0.27) * H(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * H(s - 0.13, 0.085) * H(n - 0.95, 0.03)),
    (r += e.jawAngle * H(s - 1.22, 0.2) * H(n - 0.885, 0.05)),
    r
  );
}
function mi(e, t) {
  return e.cz + li(e.keys, 4, t);
}
function hi(e, t) {
  let n = e.lay,
    r = ui(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function gi(e, t, n) {
  let r = e.lay,
    i = ni(t, -1, 1),
    a = ri(r, i),
    o = ii(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * V(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        H(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - V(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * V(0, 0.03, r) +
      e.aegyo * H(r - 0.009, 0.007) * (1 - V(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function _i(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - V(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
const vi = new N(),
  yi = new N();
function bi(e, t, n, r, i) {
  let a = di(e, n, r);
  return (
    yi.set(Math.sin(n) * a, e.crownY - r * e.hh, mi(e, r) - Math.cos(n) * a),
    i.subVectors(yi, t.c).normalize()
  );
}
function xi(e, t, n, r, i, a) {
  return (bi(e, t, n, r, vi), a.copy(t.c).addScaledVector(vi, t.r + i));
}
const Si = new N(),
  Ci = new N();
function wi(e, t, n, r) {
  let i = pi(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (Si.set(Math.sin(t) * i, a, mi(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = hi(e, t),
      s = _i(e, o, n);
    if (s > 0) {
      xi(e, a, t, n, gi(e, o, n), Ci);
      let c = mi(e, n),
        l = Math.hypot(Ci.x, Ci.z - c) >= i ? s : s * V(0.55, 1, s);
      r.lerpVectors(Si, Ci, l);
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
  return r.copy(Si);
}
function Ti(e, t, n, r = !0) {
  return r ? (wi(e, t, n, Ei), Math.hypot(Ei.x, Ei.z - mi(e, n))) : di(e, t, n);
}
const Ei = new N();
function U(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = di(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      mi(e, n) - Math.cos(t) * a,
    );
  }
  return (
    wi(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function Di(e, t, n, r) {
  ((r[0] = 0.5 + ui(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
const Oi = new N(),
  ki = new N(),
  Ai = new N(),
  ji = new N();
function Mi(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (U(e, t - a, n, 0, Oi), U(e, t + a, n, 0, ki), ki.sub(Oi));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (U(e, t, s, 0, ji),
    U(e, t, c, 0, Ai),
    Ai.sub(ji),
    r.crossVectors(Ai, ki).normalize(),
    U(e, t, n, 0, Oi));
  let l = Oi.x,
    u = Oi.z - mi(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function Ni(e) {
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
function Pi(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
const Fi = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  Ii = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  Li = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  Ri = 1.95;
function zi(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = Fi.slice();
  i[16] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - V(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = ni(a, -1, 1),
      r = ri(n, t),
      o = ii(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[6] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[7 + e] = ti(i[7 + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - V(1, 1.75, l);
  if (u > 0) {
    let e = ni(c, -1, 1),
      t = ai(n, e),
      r = oi(n, e),
      a = si(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = ti(i[16], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[17 + e] = ti(i[17 + e], o[e], u);
    i[17] = Math.max(i[17], i[16] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function Bi(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (Ri - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
const Vi = new N(),
  W = new N(),
  Hi = new F();
function Ui(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = ai(o, Math.min(1, c)),
    u = V(l - 0.004, l + 0.05, n) * V(0.1, 0.5, s) * (1 - V(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - V(0.9, 1.4, c))),
    a && (u = 0),
    Zr(r, R.head, R.jaw, u));
}
function Wi(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(ui(n, 0)),
    o =
      H(a - 0.6, 0.3) * H(r - 0.66, 0.08) * 0.1 +
      H(a, 0.12) * H(r - 0.66, 0.05) * 0.08 +
      H(a, 0.25) * H(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = V(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * H(a - (t.eyeT - t.eyeW * 0.95), 0.06) * H(r - t.eyeD, 0.03)),
      (s += 0.08 * H(a - t.eyeT, 0.2) * H(r - (ri(t, 0) - 0.03), 0.014)),
      (s += 0.1 * H(a, 0.09) * H(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * H(n - 1.03, 0.14) * H(r - ai(t, 1), 0.012)),
      (s += 0.08 * H(a, 0.25) * H(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * H(a - 1.55, 0.18) * H(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        V(0.7, 0.8, r) * H(a, 1) * (1 - H(n, 0.9) * H(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function Gi(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * H(i, 0.45) * H(n - 0.33, 0.12)),
    (a -= 0.12 * H(i, 0.12) * H(n - 0.62, 0.08)),
    (a -= 0.05 * H(i, 0.3) * H(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = ai(r, Math.min(1, o));
  return (
    (1 - V(0.85, 1.1, o)) *
      (n > s - oi(r, o) - 0.003 && n < s + si(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function* Ki(e) {
  e.lod === 0 ? yield* qi(e) : ea(e);
}
