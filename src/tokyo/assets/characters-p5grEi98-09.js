// tokyo/assets/characters-p5grEi98 09 — math
// Lines 2639-2871 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function gn(e, t, n, r) {
  let i = an(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (mn.set(Math.sin(t) * i, a, on(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = sn(e, t),
      s = ln(e, o, n);
    if (s > 0) {
      pn(e, a, t, n, cn(e, o, n), hn);
      let c = on(e, n),
        l = Math.hypot(hn.x, hn.z - c) >= i ? s : s * V(0.55, 1, s);
      r.lerpVectors(mn, hn, l);
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
  return r.copy(mn);
}
function _n(e, t, n, r = !0) {
  return r ? (gn(e, t, n, vn), Math.hypot(vn.x, vn.z - on(e, n))) : nn(e, t, n);
}
var vn = new D();
function W(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = nn(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      on(e, n) - Math.cos(t) * a,
    );
  }
  return (
    gn(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function yn(e, t, n, r) {
  ((r[0] = 0.5 + tn(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
var bn = new D(),
  xn = new D(),
  Sn = new D(),
  Cn = new D();
function wn(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (W(e, t - a, n, 0, bn), W(e, t + a, n, 0, xn), xn.sub(bn));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (W(e, t, s, 0, Cn),
    W(e, t, c, 0, Sn),
    Sn.sub(Cn),
    r.crossVectors(Sn, xn).normalize(),
    W(e, t, n, 0, bn));
  let l = bn.x,
    u = bn.z - on(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function Tn(e) {
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
function En(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
var Dn = 6,
  On = 7,
  kn = 9,
  An = 10,
  jn = 11,
  Mn = 12,
  Nn = 16,
  Pn = 17,
  Fn = 18,
  In = 19,
  Ln = 20,
  Rn = 22,
  zn = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  Bn = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  Vn = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  Hn = 1.95;
function Un(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = zn.slice();
  i[Nn] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - V(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = qt(a, -1, 1),
      r = Jt(n, t),
      o = Yt(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[Dn] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[On + e] = Kt(i[On + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - V(1, 1.75, l);
  if (u > 0) {
    let e = qt(c, -1, 1),
      t = Xt(n, e),
      r = Zt(n, e),
      a = Qt(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = Kt(i[Nn], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[Pn + e] = Kt(i[Pn + e], o[e], u);
    i[Pn] = Math.max(i[Pn], i[Nn] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function Wn(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (Hn - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
var Gn = new D(),
  G = new D(),
  Kn = new u();
function qn(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = Xt(o, Math.min(1, c)),
    u = V(l - 0.004, l + 0.05, n) * V(0.1, 0.5, s) * (1 - V(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - V(0.9, 1.4, c))),
    a && (u = 0),
    B(r, L.head, L.jaw, u));
}
function Jn(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(tn(n, 0)),
    o =
      U(a - 0.6, 0.3) * U(r - 0.66, 0.08) * 0.1 +
      U(a, 0.12) * U(r - 0.66, 0.05) * 0.08 +
      U(a, 0.25) * U(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = V(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * U(a - (t.eyeT - t.eyeW * 0.95), 0.06) * U(r - t.eyeD, 0.03)),
      (s += 0.08 * U(a - t.eyeT, 0.2) * U(r - (Jt(t, 0) - 0.03), 0.014)),
      (s += 0.1 * U(a, 0.09) * U(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * U(n - 1.03, 0.14) * U(r - Xt(t, 1), 0.012)),
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
function Yn(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * U(i, 0.45) * U(n - 0.33, 0.12)),
    (a -= 0.12 * U(i, 0.12) * U(n - 0.62, 0.08)),
    (a -= 0.05 * U(i, 0.3) * U(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = Xt(r, Math.min(1, o));
  return (
    (1 - V(0.85, 1.1, o)) *
      (n > s - Zt(r, o) - 0.003 && n < s + Qt(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function Xn(e) {
  if (e.lod === 0) {
    let t = Qn(e);
    for (; !t.next().done;);
  } else ar(e);
}
function* Zn(e) {
  e.lod === 0 ? yield* Qn(e) : ar(e);
}
