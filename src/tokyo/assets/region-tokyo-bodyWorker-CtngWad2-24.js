// tokyo/assets/region-tokyo-bodyWorker-CtngWad2 24 — math
// Lines 9143-9482 of readable/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function qr(e) {
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
  (v[z.hips].set(0, 0.555 * n, 0),
    v[z.spine].set(0, 0.625 * n, 0),
    v[z.chest].set(0, 0.73 * n, S * 0.3),
    v[z.neck].set(0, 0.848 * n, 0.012 * r + S),
    v[z.head].set(0, n - y * 0.93, -0.004 * r + S * 1.4),
    v[z.shoulderL].set(-0.03 * r, 0.83 * n, -0.02 * r + S * 0.6),
    v[z.shoulderR].set(0.03 * r, 0.83 * n, -0.02 * r + S * 0.6));
  let C = 0.792 * n,
    w = 0.643 * n,
    T = 0.5 * n;
  for (let e of [-1, 1]) {
    let i = e < 0 ? z.armL : z.armR,
      a = e < 0 ? z.foreL : z.foreR,
      o = e < 0 ? z.handL : z.handR;
    (v[i].set(e * b, C, S * 0.6),
      v[a].set(e * (b + 0.024 * r + 0.01 * c * r), w, 0.012 * r + S * 0.4),
      v[o].set(e * (b + 0.04 * r + 0.018 * c * r), T, -0.012 * r),
      v[e < 0 ? z.fingersL : z.fingersR]
        .copy(v[o])
        .add(new M(e * 0.004 * r, -0.098 * r * (t ? 0.93 : 1), -0.004 * r)));
    let s = e < 0 ? z.thighL : z.thighR,
      l = e < 0 ? z.shinL : z.shinR,
      u = e < 0 ? z.footL : z.footR;
    (v[s].set(e * x, 0.53 * n, 0),
      v[l].set(e * x * 0.97, 0.287 * n, -0.006 * r),
      v[u].set(e * x * 0.95, 0.05 * n, 0.012 * r));
  }
  let E = new M(0, n - y * 0.455, -0.008 * r + S * 1.5),
    D = y * (t ? 0.315 : 0.325) * (1 + 0.03 * c),
    O = new M(D, y * 0.455, y * 0.39);
  (v[z.hair].set(0, E.y + O.y * 0.2, E.z + O.z * 0.9),
    v[z.jaw].set(0, E.y - O.y * 0.25, E.z + O.z * 0.1),
    v[z.lidL].set(-D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[z.lidR].set(D * 0.4, E.y - y * 0.05, E.z - O.z * 0.9),
    v[z.eyeL].set(-D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75),
    v[z.eyeR].set(D * 0.4, E.y - y * 0.06, E.z - O.z * 0.75));
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
    let t = e < 0 ? z.armL : z.armR,
      n = e < 0 ? z.foreL : z.foreR,
      r = e < 0 ? z.handL : z.handR,
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
      bones: [e < 0 ? z.shoulderL : z.shoulderR, t, n, r],
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
    let n = e < 0 ? z.thighL : z.thighR,
      r = e < 0 ? z.shinL : z.shinR,
      i = e < 0 ? z.footL : z.footR,
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
      bones: [z.hips, n, r, i],
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
function q(e, t) {
  return Ir(e.torsoKeys, 4, t);
}
function J(e, t, n, r = !1) {
  let i = e.torsoKeys,
    a = Ir(i, 1, n),
    o = Lr(
      t,
      a,
      a,
      Ir(i, 2, n),
      Ir(i, 3, n),
      2 + 0.45 * U(e.H * 0.5, e.H * 0.6, n) * (1 - U(e.H * 0.8, e.H * 0.84, n)),
    ),
    s = e.H,
    c = Math.cos(t);
  if (e.bust > 0 || e.pecs > 0) {
    let i = n - s * (e.female ? 0.735 : 0.76),
      a = i > 0 ? Rr(i, s * 0.045) : Rr(i, s * (e.female ? 0.022 : 0.03)),
      c = e.female ? 0.44 : 0.5,
      l = Rr(zr(t, c), 0.34) + Rr(zr(t, -c), 0.34);
    (r && Math.abs(zr(t, 0)) < c && (l = Math.max(l, Rr(0, 1) * 0.98)),
      (o += (e.bust + e.pecs) * a * l));
  }
  if (e.belly > 0) {
    let t = Rr(n - s * 0.6, s * 0.06);
    o += e.belly * t * Math.max(0, c) ** 1.5;
  }
  {
    let r = n - s * 0.49,
      i = r > 0 ? Rr(r, s * 0.035) : Rr(r, s * 0.02),
      a = Rr(zr(t, Math.PI - 0.5), 0.45) + Rr(zr(t, Math.PI + 0.5), 0.45);
    o += e.glutes * i * a;
  }
  r ||
    (o -= 0.005 * e.s * Rr(zr(t, Math.PI), 0.12) * Rr(n - s * 0.68, s * 0.1));
  {
    let r = Rr(n - s * 0.775, s * 0.04),
      i = Rr(zr(t, Math.PI - 0.55), 0.3) + Rr(zr(t, Math.PI + 0.55), 0.3);
    o += 0.008 * e.s * r * i;
  }
  if (r && n < s * 0.61) {
    let r = Jr(e, t, n) + 0.006 * e.s;
    o += Math.max(0, r - o) * U(s * 0.61, s * 0.545, n);
  }
  return o;
}
function Jr(e, t, n) {
  let r = Math.sin(t),
    i = -Math.cos(t),
    a = q(e, n),
    o = 0;
  for (let t of e.legs) {
    let e = t.a.y - t.b.y,
      s = (t.a.y - n) / e;
    if (s < -0.2 || s > 1.1) continue;
    let c = Ir(t.keys, t.side > 0 ? 1 : 2, s),
      l = Ir(t.keys, 3, s),
      u = Ir(t.keys, 4, s),
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
function Yr(e, t, n, r) {
  let i = e.joints.p,
    a = (i[z.hips].y + i[z.spine].y) * 0.5 + 0.02 * e.s,
    o = (i[z.spine].y + i[z.chest].y) * 0.5,
    s = e.neckBase.y + 0.02 * e.s;
  An(r, [z.neck, z.chest, z.spine, z.hips], [s, o, a], 0.06 * e.s, n);
  let c = Math.sin(t),
    l = U(0.3, 0.95, Math.abs(c)) * U(e.H * 0.72, e.H * 0.81, n);
  l > 0 && jn(r, c > 0 ? z.shoulderR : z.shoulderL, l * 0.55);
  let u = U(e.H * 0.54, e.H * 0.47, n) * (0.25 + 0.2 * Math.abs(Math.cos(t)));
  u > 0 &&
    jn(r, c > 0 ? z.thighR : z.thighL, u * U(0.05, 0.4, Math.abs(c) + 0.2));
}
function Xr(e, t, n) {
  let [r, i, a, o] = e.bones;
  t < 0.4
    ? H(n, r, i, U(-0.2, 0.12, t))
    : t < 1.6
      ? H(n, i, a, U(0.88, 1.12, t))
      : H(n, a, o, U(1.9, 2.05, t));
}
(new M(0.4, 0.8, 0.3).normalize(), new ve(0, 0, 0, 0));
const Zr = {};
(typeof window < `u` && (window.__materialLint = () => Zr), new A());
const Qr = /* @__PURE__ */ new Map(),
  Y = (e, t = 1) => {
    let n = t >= 1 ? 1e3 : t <= 0 ? 0 : Math.round(t * 1e3),
      r = (e & 16777215) * 1001 + n,
      i = Qr.get(r);
    if (i === void 0) {
      let n = (e >> 16) & 255,
        a = (e >> 8) & 255,
        o = e & 255;
      ((i =
        t >= 1
          ? `rgb(${n},${a},${o})`
          : `rgba(${n},${a},${o},${t.toFixed(3)})`),
        Qr.size >= 4096 && Qr.clear(),
        Qr.set(r, i));
    }
    return i;
  };
function $r(e, t, n) {
  let r = (e >> 16) & 255,
    i = (e >> 8) & 255,
    a = e & 255,
    o = (t >> 16) & 255,
    s = (t >> 8) & 255,
    c = t & 255;
  return (
    (Math.round(r + (o - r) * n) << 16) |
    (Math.round(i + (s - i) * n) << 8) |
    Math.round(a + (c - a) * n)
  );
}
function ei(e, t) {
  return t >= 1
    ? $r(e, 16777215, Math.min(1, t - 1))
    : $r(0, e, Math.max(0, t));
}
