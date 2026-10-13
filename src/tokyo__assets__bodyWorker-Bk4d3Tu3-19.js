// tokyo__assets__bodyWorker-Bk4d3Tu3 19 — math
// Lines 7516-7863 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function En(e) {
  let t = new Et();
  (t.setAttribute(`position`, new I(e.pos, 3)),
    t.setAttribute(`normal`, new I(e.nor, 3)),
    t.setAttribute(`color`, new I(e.col, 3)),
    t.setAttribute(`uv`, new I(e.uv, 2)),
    t.setAttribute(`uvRect`, new I(e.rect, 4)),
    t.setAttribute(`surf`, new I(e.surf, 4)),
    t.setAttribute(`skinIndex`, new I(e.si, 4)),
    t.setAttribute(`skinWeight`, new I(e.sw, 4)),
    t.setIndex(new I(e.idx, 1)),
    t.addGroup(0, e.n0, 0),
    e.idx.length > e.n0 && t.addGroup(e.n0, e.idx.length - e.n0, 1));
  let n = e.bounds;
  return (
    n && n.length >= 10
      ? ((t.boundingSphere = new yt(new M(n[0], n[1], n[2]), n[3])),
        (t.boundingBox = new Ze(
          new M(n[4], n[5], n[6]),
          new M(n[7], n[8], n[9]),
        )))
      : (t.computeBoundingSphere(), t.computeBoundingBox()),
    t
  );
}
function U(e, t, n, r) {
  ((e.i[0] = t),
    (e.i[1] = n),
    (e.w[0] = 1 - r),
    (e.w[1] = r),
    (e.i[2] = e.i[3] = 0),
    (e.w[2] = e.w[3] = 0));
}
function W(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function Dn(e, t, n, r, i) {
  let a = 0;
  for (; a < n.length && i < n[a];) a++;
  let o = -1,
    s = 1 / 0;
  if (a - 1 >= 0) {
    let e = Math.abs(i - n[a - 1]);
    e < s && ((s = e), (o = a - 1));
  }
  if (a < n.length) {
    let e = Math.abs(i - n[a]);
    e < s && ((s = e), (o = a));
  }
  if (o < 0 || s > r) {
    U(e, t[a], t[a], 0);
    return;
  }
  let c = (n[o] + r - i) / (2 * r),
    l = c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c);
  U(e, t[o], t[o + 1], l);
}
function On(e, t, n) {
  if (n <= 0) return;
  for (let t = 0; t < 4; t++) e.w[t] *= 1 - n;
  for (let r = 0; r < 4; r++)
    if (e.i[r] === t && e.w[r] > 0) {
      e.w[r] += n;
      return;
    }
  let r = 0;
  for (let t = 1; t < 4; t++) e.w[t] < e.w[r] && (r = t);
  ((e.i[r] = t), (e.w[r] = n));
}
const kn = Math.PI * 2;
function An(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
function jn(e, t, n, r, i, a = 2) {
  let o = Math.sin(e),
    s = Math.cos(e),
    c = o >= 0 ? t : n,
    l = s >= 0 ? r : i,
    u = Math.abs(o) / c,
    d = Math.abs(s) / l;
  return a === 2
    ? 1 / Math.sqrt(u * u + d * d)
    : 1 / (u ** +a + d ** +a) ** (1 / a);
}
const Mn = (e, t) => Math.exp(-(e * e) / (t * t)),
  Nn = (e, t) => {
    let n = (e - t) % kn;
    return (n > Math.PI && (n -= kn), n < -Math.PI && (n += kn), n);
  };
(new M(), new M(), new M());
const Pn = new M(),
  Fn = new M(),
  In = new M(),
  Ln = new M(),
  Rn = new M(0, 0, -1);
function zn(e, t, n, r, i, a) {
  (Pn.subVectors(e.b, e.a),
    Fn.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(Pn, t)
      : n.copy(e.b).addScaledVector(Fn, t - 1));
  let o = In.copy(Pn).normalize(),
    s = Ln.copy(Fn).normalize(),
    c = W(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(Rn).addScaledVector(r, -Rn.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Bn(e, t, n, r = 0) {
  return jn(
    t,
    An(e.keys, 1, n) + r,
    An(e.keys, 2, n) + r,
    An(e.keys, 3, n) + r,
    An(e.keys, 4, n) + r,
  );
}
function Vn(e) {
  let t = e.sex === `f`,
    n = e.height,
    r = n / 1.72,
    i = e.build === `slim` ? 0 : e.build === `avg` ? 1 : 2,
    a = e.age === `elder`,
    o = e.age === `student`,
    s = e.stoop ?? (a ? 0.45 : 0),
    c = Math.max(0, i - 1),
    l = Math.max(0, 1 - i),
    u = 1 + 0.16 * c - 0.07 * l - (o ? 0.04 : 0),
    d =
      (t ? 0.88 : 1) *
      (1 + 0.05 * c - 0.03 * l) *
      (o ? 0.95 : 1) *
      (a ? 0.96 : 1),
    f = (t ? 1.07 : 1) * (1 + 0.1 * c - 0.04 * l),
    p = (t ? 0.86 : 1) * (1 + 0.3 * c - 0.06 * l) * (a ? 1.1 : 1),
    m = (0.045 * c + (a && !t ? 0.03 : 0) + (a && t ? 0.02 : 0)) * r,
    h = t ? (o ? 0.022 : a ? 0.026 : 0.032) * r * (1 + 0.3 * c) : 0,
    g = t ? 0 : (0.01 + 0.004 * c) * r,
    _ = (t ? 0.03 : 0.02) * r * (1 + 0.3 * c),
    v = [];
  for (let e = 0; e < 27; e++) v.push(new M());
  let y = n / (o ? 7 : a ? 7.15 : t ? 7.25 : 7.4),
    b = 0.185 * r * d,
    x = (t ? 0.093 : 0.09) * r * (1 + 0.08 * c),
    S = -0.05 * s * r;
  (v[B.hips].set(0, 0.555 * n, 0),
    v[B.spine].set(0, 0.625 * n, 0),
    v[B.chest].set(0, 0.73 * n, S * 0.3),
    v[B.neck].set(0, 0.848 * n, 0.012 * r + S),
    v[B.head].set(0, n - y * 0.93, -0.004 * r + S * 1.4),
    v[B.shoulderL].set(-0.03 * r, 0.83 * n, -0.02 * r + S * 0.6),
    v[B.shoulderR].set(0.03 * r, 0.83 * n, -0.02 * r + S * 0.6));
  let C = 0.792 * n,
    w = 0.643 * n,
    T = 0.5 * n;
  for (let e of [-1, 1]) {
    let i = e < 0 ? B.armL : B.armR,
      a = e < 0 ? B.foreL : B.foreR,
      o = e < 0 ? B.handL : B.handR;
    (v[i].set(e * b, C, S * 0.6),
      v[a].set(e * (b + 0.024 * r + 0.01 * c * r), w, 0.012 * r + S * 0.4),
      v[o].set(e * (b + 0.04 * r + 0.018 * c * r), T, -0.012 * r),
      v[e < 0 ? B.fingersL : B.fingersR]
        .copy(v[o])
        .add(new M(e * 0.004 * r, -0.098 * r * (t ? 0.93 : 1), -0.004 * r)));
    let s = e < 0 ? B.thighL : B.thighR,
      l = e < 0 ? B.shinL : B.shinR,
      u = e < 0 ? B.footL : B.footR;
    (v[s].set(e * x, 0.53 * n, 0),
      v[l].set(e * x * 0.97, 0.287 * n, -0.006 * r),
      v[u].set(e * x * 0.95, 0.05 * n, 0.012 * r));
  }
  let E = new M(0, n - y * 0.455, -0.008 * r + S * 1.5),
    D = y * (t ? 0.315 : 0.325) * (1 + 0.03 * c),
    O = new M(D, y * 0.455, y * 0.39);
  (v[B.hair].set(0, E.y + O.y * 0.2, E.z + O.z * 0.9),
    v[B.jaw].set(0, E.y - O.y * 0.25, E.z + O.z * 0.1),
    v[B.lidL].set(-D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[B.lidR].set(D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[B.eyeL].set(-D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75),
    v[B.eyeR].set(D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75));
  let k = (e) => e * n,
    A = (e) => e * r,
    j = [
      [k(0.468), A(0.022) * f, A(0.018) * u, A(0.028) * u, A(0.01)],
      [k(0.492), A(0.082) * f, A(0.042) * u, A(0.078) * u, A(0.008)],
      [k(0.515), A(0.152) * f, A(0.062) * u, A(0.1) * u, A(0.005)],
      [k(0.54), A(0.166) * f, A(0.072) * u, A(0.103) * u, A(0.002)],
      [k(0.56), A(0.163) * f, A(0.09) * u, A(0.093) * u, 0],
      [
        k(0.6),
        A(0.15) * (f * 0.5 + p * 0.5),
        A(0.092) * u,
        A(0.083) * u,
        A(-0.003),
      ],
      [k(0.625), A(0.143) * p, A(0.094) * u, A(0.08) * u, A(-0.004)],
      [
        k(0.665),
        A(0.148) * (p * 0.4 + d * 0.6),
        A(0.1) * u,
        A(0.085) * u,
        A(-0.004),
      ],
      [
        k(0.72),
        A(0.16) * d * u,
        A(0.108) * u,
        A(0.093) * u,
        A(-0.008) + S * 0.4,
      ],
      [k(0.77), A(0.168) * d * u, A(0.102) * u, A(0.1) * u, A(-0.01) + S * 0.6],
      [k(0.8), A(0.17) * d * u, A(0.09) * u, A(0.1) * u, A(-0.006) + S * 0.8],
      [k(0.818), A(0.162) * d, A(0.076) * u, A(0.09) * u, A(0) + S * 0.9],
      [k(0.836), A(0.132) * d, A(0.061), A(0.075), A(0.006) + S],
      [k(0.848), A(0.095), A(0.052), A(0.06), A(0.011) + S],
      [k(0.855), A(0.064), A(0.047), A(0.052), A(0.014) + S],
    ];
  if (t) for (let e of j) e[0] > k(0.64) && e[0] < k(0.82) && (e[2] *= 0.95);
  let ee =
      (1 + 0.14 * c - 0.08 * l) *
      (t ? 0.86 : 1) *
      (o ? 0.92 : 1) *
      (a ? 0.94 : 1),
    te = (e) => e * r * ee,
    ne = [];
  for (let e of [-1, 1]) {
    let t = e < 0 ? B.armL : B.armR,
      n = e < 0 ? B.foreL : B.foreR,
      r = e < 0 ? B.handL : B.handR,
      i = (t, n) => (e > 0 ? [t, n] : [n, t]),
      a = (e, t, n, r, a) => [e, ...i(te(t), te(n)), te(r), te(a)];
    ne.push({
      side: e,
      a: v[t].clone(),
      b: v[n].clone(),
      c: v[r].clone(),
      tMin: -0.2,
      keys: [
        a(-0.2, 0.03, 0.03, 0.035, 0.035),
        a(-0.1, 0.04, 0.032, 0.044, 0.045),
        a(0.02, 0.046, 0.037, 0.048, 0.05),
        a(0.25, 0.048, 0.04, 0.046, 0.05),
        a(0.55, 0.04, 0.039, 0.046, 0.043),
        a(0.85, 0.036, 0.035, 0.036, 0.038),
        a(1, 0.035, 0.034, 0.034, 0.038),
        a(1.18, 0.039, 0.037, 0.038, 0.036),
        a(1.5, 0.032, 0.031, 0.031, 0.029),
        a(1.85, 0.021, 0.021, 0.028, 0.027),
        a(2, 0.019, 0.019, 0.027, 0.026),
      ],
      bones: [e < 0 ? B.shoulderL : B.shoulderR, t, n, r],
    });
  }
  let re =
      (1 + 0.15 * c - 0.08 * l) *
      (t ? 0.97 : 1) *
      (o ? 0.93 : 1) *
      (a ? 0.92 : 1),
    ie = (e) => e * r * re,
    ae = [];
  for (let e of [-1, 1]) {
    let n = e < 0 ? B.thighL : B.thighR,
      r = e < 0 ? B.shinL : B.shinR,
      i = e < 0 ? B.footL : B.footR,
      a = (t, n) => (e > 0 ? [t, n] : [n, t]),
      o = (e, t, n, r, i) => [e, ...a(ie(t), ie(n)), ie(r), ie(i)],
      s = t ? 1.06 : 1;
    ae.push({
      side: e,
      a: v[n].clone(),
      b: v[r].clone(),
      c: v[i].clone(),
      tMin: -0.16,
      keys: [
        o(-0.16, 0.078 * s, 0.05, 0.082, 0.088),
        o(0, 0.086 * s, 0.058, 0.084, 0.088 * s),
        o(0.15, 0.083 * s, 0.064 * s, 0.08, 0.082),
        o(0.45, 0.07, 0.064, 0.07, 0.068),
        o(0.78, 0.054, 0.053, 0.058, 0.052),
        o(0.98, 0.048, 0.047, 0.056, 0.046),
        o(1.12, 0.047, 0.045, 0.048, 0.05),
        o(1.3, 0.05, 0.047, 0.044, 0.064),
        o(1.55, 0.042, 0.039, 0.036, 0.048),
        o(1.8, 0.031, 0.03, 0.03, 0.033),
        o(2, 0.03, 0.028, 0.03, 0.032),
      ],
      bones: [B.hips, n, r, i],
    });
  }
  let oe = (t ? 0.047 : 0.056) * r * (1 + 0.1 * c),
    se = new M(0, 0.815 * n, 0.012 * r + S * 0.9),
    ce = new M(0, E.y - O.y * 0.35, E.z + O.z * 0.28);
  return {
    H: n,
    s: r,
    female: t,
    mass: i,
    elder: a,
    student: o,
    stoop: s,
    joints: { p: v, height: n, headC: E, headR: O },
    torsoKeys: j,
    torsoBottom: j[0][0],
    torsoTop: j[j.length - 1][0],
    bust: h,
    belly: m,
    glutes: _,
    pecs: g,
    arms: [ne[0], ne[1]],
    legs: [ae[0], ae[1]],
    neckBase: se,
    neckTop: ce,
    neckR: oe,
    headC: E,
    headR: O,
    headH: y,
    handLen: 0.19 * r * (t ? 0.92 : 1),
    handW: 0.085 * r * (t ? 0.9 : 1) * (1 + 0.05 * c),
    footLen: 0.255 * r * (t ? 0.92 : 1),
    footW: 0.095 * r * (t ? 0.92 : 1),
  };
}
