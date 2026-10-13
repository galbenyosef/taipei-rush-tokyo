// tokyo__assets__characters-BvEb7Acx 09 — math
// Lines 2639-2871 of readable/tokyo__assets__characters-BvEb7Acx.pretty.js (statement-aligned).
function hn(e, t, n, r) {
  let i = rn(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (pn.set(Math.sin(t) * i, a, an(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = on(e, t),
      s = cn(e, o, n);
    if (s > 0) {
      fn(e, a, t, n, sn(e, o, n), mn);
      let c = an(e, n),
        l = Math.hypot(mn.x, mn.z - c) >= i ? s : s * H(0.55, 1, s);
      r.lerpVectors(pn, mn, l);
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
  return r.copy(pn);
}
function gn(e, t, n, r = !0) {
  return r ? (hn(e, t, n, _n), Math.hypot(_n.x, _n.z - an(e, n))) : tn(e, t, n);
}
var _n = new k();
function G(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = tn(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      an(e, n) - Math.cos(t) * a,
    );
  }
  return (
    hn(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function vn(e, t, n, r) {
  ((r[0] = 0.5 + en(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
var yn = new k(),
  bn = new k(),
  xn = new k(),
  Sn = new k();
function Cn(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (G(e, t - a, n, 0, yn), G(e, t + a, n, 0, bn), bn.sub(yn));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (G(e, t, s, 0, Sn),
    G(e, t, c, 0, xn),
    xn.sub(Sn),
    r.crossVectors(xn, bn).normalize(),
    G(e, t, n, 0, yn));
  let l = yn.x,
    u = yn.z - an(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function wn(e) {
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
function Tn(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
var En = 6,
  Dn = 7,
  On = 9,
  kn = 10,
  An = 11,
  jn = 12,
  Mn = 16,
  Nn = 17,
  Pn = 18,
  Fn = 19,
  In = 20,
  Ln = 22,
  Rn = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  zn = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  Bn = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  Vn = 1.95;
function Hn(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = Rn.slice();
  i[Mn] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - H(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = Kt(a, -1, 1),
      r = qt(n, t),
      o = Jt(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[En] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[Dn + e] = Gt(i[Dn + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - H(1, 1.75, l);
  if (u > 0) {
    let e = Kt(c, -1, 1),
      t = Yt(n, e),
      r = Xt(n, e),
      a = Zt(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = Gt(i[Mn], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[Nn + e] = Gt(i[Nn + e], o[e], u);
    i[Nn] = Math.max(i[Nn], i[Mn] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function Un(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (Vn - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
var Wn = new k(),
  K = new k(),
  Gn = new M();
function Kn(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = Yt(o, Math.min(1, c)),
    u = H(l - 0.004, l + 0.05, n) * H(0.1, 0.5, s) * (1 - H(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - H(0.9, 1.4, c))),
    a && (u = 0),
    V(r, R.head, R.jaw, u));
}
function qn(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(en(n, 0)),
    o =
      W(a - 0.6, 0.3) * W(r - 0.66, 0.08) * 0.1 +
      W(a, 0.12) * W(r - 0.66, 0.05) * 0.08 +
      W(a, 0.25) * W(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = H(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * W(a - (t.eyeT - t.eyeW * 0.95), 0.06) * W(r - t.eyeD, 0.03)),
      (s += 0.08 * W(a - t.eyeT, 0.2) * W(r - (qt(t, 0) - 0.03), 0.014)),
      (s += 0.1 * W(a, 0.09) * W(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * W(n - 1.03, 0.14) * W(r - Yt(t, 1), 0.012)),
      (s += 0.08 * W(a, 0.25) * W(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * W(a - 1.55, 0.18) * W(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        H(0.7, 0.8, r) * W(a, 1) * (1 - W(n, 0.9) * W(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function Jn(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * W(i, 0.45) * W(n - 0.33, 0.12)),
    (a -= 0.12 * W(i, 0.12) * W(n - 0.62, 0.08)),
    (a -= 0.05 * W(i, 0.3) * W(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = Yt(r, Math.min(1, o));
  return (
    (1 - H(0.85, 1.1, o)) *
      (n > s - Xt(r, o) - 0.003 && n < s + Zt(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function Yn(e) {
  if (e.lod === 0) {
    let t = Zn(e);
    for (; !t.next().done;);
  } else ir(e);
}
function* Xn(e) {
  e.lod === 0 ? yield* Zn(e) : ir(e);
}
