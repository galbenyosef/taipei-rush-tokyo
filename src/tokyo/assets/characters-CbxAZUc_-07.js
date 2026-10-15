// tokyo/assets/characters-CbxAZUc_ 07 — math
// Lines 1976-2305 of readable/tokyo/assets/characters-CbxAZUc_.pretty.js (statement-aligned).
function zt(e) {
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
  for (let e = 0; e < 27; e++) v.push(new k());
  let y = n / (o ? 7 : a ? 7.15 : t ? 7.25 : 7.4),
    b = 0.185 * r * d,
    x = (t ? 0.093 : 0.09) * r * (1 + 0.08 * c),
    S = -0.05 * s * r;
  (v[R.hips].set(0, 0.555 * n, 0),
    v[R.spine].set(0, 0.625 * n, 0),
    v[R.chest].set(0, 0.73 * n, S * 0.3),
    v[R.neck].set(0, 0.848 * n, 0.012 * r + S),
    v[R.head].set(0, n - y * 0.93, -0.004 * r + S * 1.4),
    v[R.shoulderL].set(-0.03 * r, 0.83 * n, -0.02 * r + S * 0.6),
    v[R.shoulderR].set(0.03 * r, 0.83 * n, -0.02 * r + S * 0.6));
  let C = 0.792 * n,
    w = 0.643 * n,
    T = 0.5 * n;
  for (let e of [-1, 1]) {
    let i = e < 0 ? R.armL : R.armR,
      a = e < 0 ? R.foreL : R.foreR,
      o = e < 0 ? R.handL : R.handR;
    (v[i].set(e * b, C, S * 0.6),
      v[a].set(e * (b + 0.024 * r + 0.01 * c * r), w, 0.012 * r + S * 0.4),
      v[o].set(e * (b + 0.04 * r + 0.018 * c * r), T, -0.012 * r),
      v[e < 0 ? R.fingersL : R.fingersR]
        .copy(v[o])
        .add(new k(e * 0.004 * r, -0.098 * r * (t ? 0.93 : 1), -0.004 * r)));
    let s = e < 0 ? R.thighL : R.thighR,
      l = e < 0 ? R.shinL : R.shinR,
      u = e < 0 ? R.footL : R.footR;
    (v[s].set(e * x, 0.53 * n, 0),
      v[l].set(e * x * 0.97, 0.287 * n, -0.006 * r),
      v[u].set(e * x * 0.95, 0.05 * n, 0.012 * r));
  }
  let E = new k(0, n - y * 0.455, -0.008 * r + S * 1.5),
    D = y * (t ? 0.315 : 0.325) * (1 + 0.03 * c),
    O = new k(D, y * 0.455, y * 0.39);
  (v[R.hair].set(0, E.y + O.y * 0.2, E.z + O.z * 0.9),
    v[R.jaw].set(0, E.y - O.y * 0.25, E.z + O.z * 0.1),
    v[R.lidL].set(-D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[R.lidR].set(D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[R.eyeL].set(-D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75),
    v[R.eyeR].set(D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75));
  let A = (e) => e * n,
    j = (e) => e * r,
    M = [
      [A(0.468), j(0.022) * f, j(0.018) * u, j(0.028) * u, j(0.01)],
      [A(0.492), j(0.082) * f, j(0.042) * u, j(0.078) * u, j(0.008)],
      [A(0.515), j(0.152) * f, j(0.062) * u, j(0.1) * u, j(0.005)],
      [A(0.54), j(0.166) * f, j(0.072) * u, j(0.103) * u, j(0.002)],
      [A(0.56), j(0.163) * f, j(0.09) * u, j(0.093) * u, 0],
      [
        A(0.6),
        j(0.15) * (f * 0.5 + p * 0.5),
        j(0.092) * u,
        j(0.083) * u,
        j(-0.003),
      ],
      [A(0.625), j(0.143) * p, j(0.094) * u, j(0.08) * u, j(-0.004)],
      [
        A(0.665),
        j(0.148) * (p * 0.4 + d * 0.6),
        j(0.1) * u,
        j(0.085) * u,
        j(-0.004),
      ],
      [
        A(0.72),
        j(0.16) * d * u,
        j(0.108) * u,
        j(0.093) * u,
        j(-0.008) + S * 0.4,
      ],
      [A(0.77), j(0.168) * d * u, j(0.102) * u, j(0.1) * u, j(-0.01) + S * 0.6],
      [A(0.8), j(0.17) * d * u, j(0.09) * u, j(0.1) * u, j(-0.006) + S * 0.8],
      [A(0.818), j(0.162) * d, j(0.076) * u, j(0.09) * u, j(0) + S * 0.9],
      [A(0.836), j(0.132) * d, j(0.061), j(0.075), j(0.006) + S],
      [A(0.848), j(0.095), j(0.052), j(0.06), j(0.011) + S],
      [A(0.855), j(0.064), j(0.047), j(0.052), j(0.014) + S],
    ];
  if (t) for (let e of M) e[0] > A(0.64) && e[0] < A(0.82) && (e[2] *= 0.95);
  let N =
      (1 + 0.14 * c - 0.08 * l) *
      (t ? 0.86 : 1) *
      (o ? 0.92 : 1) *
      (a ? 0.94 : 1),
    P = (e) => e * r * N,
    ee = [];
  for (let e of [-1, 1]) {
    let t = e < 0 ? R.armL : R.armR,
      n = e < 0 ? R.foreL : R.foreR,
      r = e < 0 ? R.handL : R.handR,
      i = (t, n) => (e > 0 ? [t, n] : [n, t]),
      a = (e, t, n, r, a) => [e, ...i(P(t), P(n)), P(r), P(a)];
    ee.push({
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
      bones: [e < 0 ? R.shoulderL : R.shoulderR, t, n, r],
    });
  }
  let te =
      (1 + 0.15 * c - 0.08 * l) *
      (t ? 0.97 : 1) *
      (o ? 0.93 : 1) *
      (a ? 0.92 : 1),
    ne = (e) => e * r * te,
    re = [];
  for (let e of [-1, 1]) {
    let n = e < 0 ? R.thighL : R.thighR,
      r = e < 0 ? R.shinL : R.shinR,
      i = e < 0 ? R.footL : R.footR,
      a = (t, n) => (e > 0 ? [t, n] : [n, t]),
      o = (e, t, n, r, i) => [e, ...a(ne(t), ne(n)), ne(r), ne(i)],
      s = t ? 1.06 : 1;
    re.push({
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
      bones: [R.hips, n, r, i],
    });
  }
  let ie = (t ? 0.047 : 0.056) * r * (1 + 0.1 * c),
    ae = new k(0, 0.815 * n, 0.012 * r + S * 0.9),
    oe = new k(0, E.y - O.y * 0.35, E.z + O.z * 0.28);
  return {
    H: n,
    s: r,
    female: t,
    mass: i,
    elder: a,
    student: o,
    stoop: s,
    joints: { p: v, height: n, headC: E, headR: O },
    torsoKeys: M,
    torsoBottom: M[0][0],
    torsoTop: M[M.length - 1][0],
    bust: h,
    belly: m,
    glutes: _,
    pecs: g,
    arms: [ee[0], ee[1]],
    legs: [re[0], re[1]],
    neckBase: ae,
    neckTop: oe,
    neckR: ie,
    headC: E,
    headR: O,
    headH: y,
    handLen: 0.19 * r * (t ? 0.92 : 1),
    handW: 0.085 * r * (t ? 0.9 : 1) * (1 + 0.05 * c),
    footLen: 0.255 * r * (t ? 0.92 : 1),
    footW: 0.095 * r * (t ? 0.92 : 1),
  };
}
function U(e, t) {
  return wt(e.torsoKeys, 4, t);
}
function Bt(e, t, n, r = !1) {
  let i = e.torsoKeys,
    a = wt(i, 1, n),
    o = Tt(
      t,
      a,
      a,
      wt(i, 2, n),
      wt(i, 3, n),
      2 + 0.45 * H(e.H * 0.5, e.H * 0.6, n) * (1 - H(e.H * 0.8, e.H * 0.84, n)),
    ),
    s = e.H,
    c = Math.cos(t);
  if (e.bust > 0 || e.pecs > 0) {
    let i = n - s * (e.female ? 0.735 : 0.76),
      a = i > 0 ? Et(i, s * 0.045) : Et(i, s * (e.female ? 0.022 : 0.03)),
      c = e.female ? 0.44 : 0.5,
      l = Et(Dt(t, c), 0.34) + Et(Dt(t, -c), 0.34);
    (r && Math.abs(Dt(t, 0)) < c && (l = Math.max(l, Et(0, 1) * 0.98)),
      (o += (e.bust + e.pecs) * a * l));
  }
  if (e.belly > 0) {
    let t = Et(n - s * 0.6, s * 0.06);
    o += e.belly * t * Math.max(0, c) ** 1.5;
  }
  {
    let r = n - s * 0.49,
      i = r > 0 ? Et(r, s * 0.035) : Et(r, s * 0.02),
      a = Et(Dt(t, Math.PI - 0.5), 0.45) + Et(Dt(t, Math.PI + 0.5), 0.45);
    o += e.glutes * i * a;
  }
  r ||
    (o -= 0.005 * e.s * Et(Dt(t, Math.PI), 0.12) * Et(n - s * 0.68, s * 0.1));
  {
    let r = Et(n - s * 0.775, s * 0.04),
      i = Et(Dt(t, Math.PI - 0.55), 0.3) + Et(Dt(t, Math.PI + 0.55), 0.3);
    o += 0.008 * e.s * r * i;
  }
  if (r && n < s * 0.61) {
    let r = Vt(e, t, n) + 0.006 * e.s;
    o += Math.max(0, r - o) * H(s * 0.61, s * 0.545, n);
  }
  return o;
}
function Vt(e, t, n) {
  let r = Math.sin(t),
    i = -Math.cos(t),
    a = U(e, n),
    o = 0;
  for (let t of e.legs) {
    let e = t.a.y - t.b.y,
      s = (t.a.y - n) / e;
    if (s < -0.2 || s > 1.1) continue;
    let c = wt(t.keys, t.side > 0 ? 1 : 2, s),
      l = wt(t.keys, 3, s),
      u = wt(t.keys, 4, s),
      d =
        Math.abs(r) * c +
        Math.max(0, -i) * l * 0 +
        (i < 0 ? l : u) * Math.abs(i),
      f = Math.max(0.01, d / Math.max(0.7, Math.abs(r) + Math.abs(i))),
      p = t.a.x + (t.b.x - t.a.x) * Math.max(0, s),
      m = t.a.z + (t.b.z - t.a.z) * Math.max(0, s) - a,
      h = p * r + m * i,
      g = p - h * r,
      _ = m - h * i,
      v = f * f - (g * g + _ * _);
    v <= 0 || (o = Math.max(o, h + Math.sqrt(v)));
  }
  return o;
}
function Ht(e, t, n, r) {
  let i = e.joints.p,
    a = (i[R.hips].y + i[R.spine].y) * 0.5 + 0.02 * e.s,
    o = (i[R.spine].y + i[R.chest].y) * 0.5,
    s = e.neckBase.y + 0.02 * e.s;
  xt(r, [R.neck, R.chest, R.spine, R.hips], [s, o, a], 0.06 * e.s, n);
  let c = Math.sin(t),
    l = H(0.3, 0.95, Math.abs(c)) * H(e.H * 0.72, e.H * 0.81, n);
  l > 0 && St(r, c > 0 ? R.shoulderR : R.shoulderL, l * 0.55);
  let u = H(e.H * 0.54, e.H * 0.47, n) * (0.25 + 0.2 * Math.abs(Math.cos(t)));
  u > 0 &&
    St(r, c > 0 ? R.thighR : R.thighL, u * H(0.05, 0.4, Math.abs(c) + 0.2));
}
function Ut(e, t, n) {
  let [r, i, a, o] = e.bones;
  t < 0.4
    ? V(n, r, i, H(-0.2, 0.12, t))
    : t < 1.6
      ? V(n, i, a, H(0.88, 1.12, t))
      : V(n, a, o, H(1.9, 2.05, t));
}
var Wt = Math.PI * 2,
  W = (e, t) => Math.exp(-(e * e) / (t * t)),
  Gt = (e, t, n) => e + (t - e) * n,
  Kt = (e, t, n) => (e < t ? t : e > n ? n : e);
function qt(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD - e.eyeH * n ** 0.62 * (1 - 0.14 * t) - e.tilt * t;
}
function Jt(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD + e.eyeH * 0.62 * n ** 0.9 * (1 + 0.12 * t) - e.tilt * t;
}
function Yt(e, t) {
  return e.mouthD - e.smile * 0.011 * t * t + 0.0015 * W(t, 0.35);
}
function Xt(e, t) {
  let n = Math.min(1, Math.abs(t));
  return (
    e.full *
    (0.02 * (1 - n * n) ** 0.55 +
      0.0042 * W(n - 0.3, 0.16) -
      0.0034 * W(t, 0.09)) *
    (1 - H(0.92, 1, n) * 0)
  );
}
function Zt(e, t) {
  let n = Math.min(1, Math.abs(t));
  return e.full * 0.029 * (1 - n * n) ** 0.62;
}
