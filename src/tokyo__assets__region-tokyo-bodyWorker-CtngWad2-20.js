// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 20 — math
// Lines 7980-8307 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function Gn(e, t, n) {
  let r = Un(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = Hn(t, 0),
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
      W(s - (i.eyeT - 0.03), 0.27) *
      W(n - (i.browD + 0.012), 0.032)),
    (r += e.browRidge * 0.6 * W(o, 0.1) * W(n - 0.462, 0.03)),
    (r += e.frontal * W(s - 0.34, 0.24) * W(n - 0.27, 0.08)),
    (r -= e.temple * W(s - 1.18, 0.22) * W(n - 0.38, 0.09)),
    (r += e.cheekBone * W(s - 0.74, 0.22) * W(n - 0.6, 0.05)),
    (r += e.cheekBone * 0.35 * W(s - 1.15, 0.2) * W(n - 0.58, 0.035)),
    (r -= e.buccal * W(s - 0.9, 0.22) * W(n - 0.765, 0.07)),
    (r += e.cheekFat * W(s - 0.55, 0.28) * W(n - 0.72, 0.075)),
    (r += e.muzzle * W(o, 0.42) * W(n - 0.785, 0.075)),
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
      h = Pn(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = U(-0.05, 0.1, h) * (1 - U(0.85, 1.15, h));
    ((r -= e.naso * W(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * W(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += Wn(e, o, n)),
    (r += e.chin * W(o, 0.27) * W(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * W(s - 0.13, 0.085) * W(n - 0.95, 0.03)),
    (r += e.jawAngle * W(s - 1.22, 0.2) * W(n - 0.885, 0.05)),
    r
  );
}
function Kn(e, t) {
  return e.cz + Vn(e.keys, 4, t);
}
function qn(e, t) {
  let n = e.lay,
    r = Hn(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function Jn(e, t, n) {
  let r = e.lay,
    i = Pn(t, -1, 1),
    a = Fn(r, i),
    o = In(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * U(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        W(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - U(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * U(0, 0.03, r) +
      e.aegyo * W(r - 0.009, 0.007) * (1 - U(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function Yn(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - U(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
const Xn = new M(),
  Zn = new M();
function Qn(e, t, n, r, i) {
  let a = Un(e, n, r);
  return (
    Zn.set(Math.sin(n) * a, e.crownY - r * e.hh, Kn(e, r) - Math.cos(n) * a),
    i.subVectors(Zn, t.c).normalize()
  );
}
function $n(e, t, n, r, i, a) {
  return (Qn(e, t, n, r, Xn), a.copy(t.c).addScaledVector(Xn, t.r + i));
}
const er = new M(),
  tr = new M();
function nr(e, t, n, r) {
  let i = Gn(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (er.set(Math.sin(t) * i, a, Kn(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = qn(e, t),
      s = Yn(e, o, n);
    if (s > 0) {
      $n(e, a, t, n, Jn(e, o, n), tr);
      let c = Kn(e, n),
        l = Math.hypot(tr.x, tr.z - c) >= i ? s : s * U(0.55, 1, s);
      r.lerpVectors(er, tr, l);
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
  return r.copy(er);
}
function rr(e, t, n, r = !0) {
  return r ? (nr(e, t, n, ir), Math.hypot(ir.x, ir.z - Kn(e, n))) : Un(e, t, n);
}
const ir = new M();
function G(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = Un(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      Kn(e, n) - Math.cos(t) * a,
    );
  }
  return (
    nr(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function ar(e, t, n, r) {
  ((r[0] = 0.5 + Hn(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
const or = new M(),
  sr = new M(),
  cr = new M(),
  lr = new M();
function ur(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (G(e, t - a, n, 0, or), G(e, t + a, n, 0, sr), sr.sub(or));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (G(e, t, s, 0, lr),
    G(e, t, c, 0, cr),
    cr.sub(lr),
    r.crossVectors(cr, sr).normalize(),
    G(e, t, n, 0, or));
  let l = or.x,
    u = or.z - Kn(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function dr(e) {
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
function fr(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
const pr = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  mr = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  hr = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  gr = 1.95;
function _r(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = pr.slice();
  i[16] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - U(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = Pn(a, -1, 1),
      r = Fn(n, t),
      o = In(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[6] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[7 + e] = Nn(i[7 + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - U(1, 1.75, l);
  if (u > 0) {
    let e = Pn(c, -1, 1),
      t = Ln(n, e),
      r = Rn(n, e),
      a = zn(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = Nn(i[16], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[17 + e] = Nn(i[17 + e], o[e], u);
    i[17] = Math.max(i[17], i[16] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function vr(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (gr - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
const yr = new M(),
  K = new M(),
  br = new N();
function xr(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = Ln(o, Math.min(1, c)),
    u = U(l - 0.004, l + 0.05, n) * U(0.1, 0.5, s) * (1 - U(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - U(0.9, 1.4, c))),
    a && (u = 0),
    H(r, z.head, z.jaw, u));
}
function Sr(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(Hn(n, 0)),
    o =
      W(a - 0.6, 0.3) * W(r - 0.66, 0.08) * 0.1 +
      W(a, 0.12) * W(r - 0.66, 0.05) * 0.08 +
      W(a, 0.25) * W(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = U(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * W(a - (t.eyeT - t.eyeW * 0.95), 0.06) * W(r - t.eyeD, 0.03)),
      (s += 0.08 * W(a - t.eyeT, 0.2) * W(r - (Fn(t, 0) - 0.03), 0.014)),
      (s += 0.1 * W(a, 0.09) * W(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * W(n - 1.03, 0.14) * W(r - Ln(t, 1), 0.012)),
      (s += 0.08 * W(a, 0.25) * W(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * W(a - 1.55, 0.18) * W(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        U(0.7, 0.8, r) * W(a, 1) * (1 - W(n, 0.9) * W(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function Cr(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * W(i, 0.45) * W(n - 0.33, 0.12)),
    (a -= 0.12 * W(i, 0.12) * W(n - 0.62, 0.08)),
    (a -= 0.05 * W(i, 0.3) * W(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = Ln(r, Math.min(1, o));
  return (
    (1 - U(0.85, 1.1, o)) *
      (n > s - Rn(r, o) - 0.003 && n < s + zn(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function wr(e) {
  if (e.lod === 0) {
    let t = Tr(e);
    for (; !t.next().done;);
  } else Mr(e);
}
