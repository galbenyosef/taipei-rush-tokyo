// tokyo/assets/bodyWorker-Bk4d3Tu3 20 — math
// Lines 7864-8210 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function G(e, t) {
  return An(e.torsoKeys, 4, t);
}
function Hn(e, t, n, r = !1) {
  let i = e.torsoKeys,
    a = An(i, 1, n),
    o = jn(
      t,
      a,
      a,
      An(i, 2, n),
      An(i, 3, n),
      2 + 0.45 * W(e.H * 0.5, e.H * 0.6, n) * (1 - W(e.H * 0.8, e.H * 0.84, n)),
    ),
    s = e.H,
    c = Math.cos(t);
  if (e.bust > 0 || e.pecs > 0) {
    let i = n - s * (e.female ? 0.735 : 0.76),
      a = i > 0 ? Mn(i, s * 0.045) : Mn(i, s * (e.female ? 0.022 : 0.03)),
      c = e.female ? 0.44 : 0.5,
      l = Mn(Nn(t, c), 0.34) + Mn(Nn(t, -c), 0.34);
    (r && Math.abs(Nn(t, 0)) < c && (l = Math.max(l, Mn(0, 1) * 0.98)),
      (o += (e.bust + e.pecs) * a * l));
  }
  if (e.belly > 0) {
    let t = Mn(n - s * 0.6, s * 0.06);
    o += e.belly * t * Math.max(0, c) ** 1.5;
  }
  {
    let r = n - s * 0.49,
      i = r > 0 ? Mn(r, s * 0.035) : Mn(r, s * 0.02),
      a = Mn(Nn(t, Math.PI - 0.5), 0.45) + Mn(Nn(t, Math.PI + 0.5), 0.45);
    o += e.glutes * i * a;
  }
  r ||
    (o -= 0.005 * e.s * Mn(Nn(t, Math.PI), 0.12) * Mn(n - s * 0.68, s * 0.1));
  {
    let r = Mn(n - s * 0.775, s * 0.04),
      i = Mn(Nn(t, Math.PI - 0.55), 0.3) + Mn(Nn(t, Math.PI + 0.55), 0.3);
    o += 0.008 * e.s * r * i;
  }
  if (r && n < s * 0.61) {
    let r = Un(e, t, n) + 0.006 * e.s;
    o += Math.max(0, r - o) * W(s * 0.61, s * 0.545, n);
  }
  return o;
}
function Un(e, t, n) {
  let r = Math.sin(t),
    i = -Math.cos(t),
    a = G(e, n),
    o = 0;
  for (let t of e.legs) {
    let e = t.a.y - t.b.y,
      s = (t.a.y - n) / e;
    if (s < -0.2 || s > 1.1) continue;
    let c = An(t.keys, t.side > 0 ? 1 : 2, s),
      l = An(t.keys, 3, s),
      u = An(t.keys, 4, s),
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
function Wn(e, t, n, r) {
  let i = e.joints.p,
    a = (i[B.hips].y + i[B.spine].y) * 0.5 + 0.02 * e.s,
    o = (i[B.spine].y + i[B.chest].y) * 0.5,
    s = e.neckBase.y + 0.02 * e.s;
  Dn(r, [B.neck, B.chest, B.spine, B.hips], [s, o, a], 0.06 * e.s, n);
  let c = Math.sin(t),
    l = W(0.3, 0.95, Math.abs(c)) * W(e.H * 0.72, e.H * 0.81, n);
  l > 0 && On(r, c > 0 ? B.shoulderR : B.shoulderL, l * 0.55);
  let u = W(e.H * 0.54, e.H * 0.47, n) * (0.25 + 0.2 * Math.abs(Math.cos(t)));
  u > 0 &&
    On(r, c > 0 ? B.thighR : B.thighL, u * W(0.05, 0.4, Math.abs(c) + 0.2));
}
function Gn(e, t, n) {
  let [r, i, a, o] = e.bones;
  t < 0.4
    ? U(n, r, i, W(-0.2, 0.12, t))
    : t < 1.6
      ? U(n, i, a, W(0.88, 1.12, t))
      : U(n, a, o, W(1.9, 2.05, t));
}
const Kn = Math.PI * 2,
  K = (e, t) => Math.exp(-(e * e) / (t * t)),
  qn = (e, t, n) => e + (t - e) * n,
  Jn = (e, t, n) => (e < t ? t : e > n ? n : e);
function Yn(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD - e.eyeH * n ** 0.62 * (1 - 0.14 * t) - e.tilt * t;
}
function Xn(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD + e.eyeH * 0.62 * n ** 0.9 * (1 + 0.12 * t) - e.tilt * t;
}
function Zn(e, t) {
  return e.mouthD - e.smile * 0.011 * t * t + 0.0015 * K(t, 0.35);
}
function Qn(e, t) {
  let n = Math.min(1, Math.abs(t));
  return (
    e.full *
    (0.02 * (1 - n * n) ** 0.55 +
      0.0042 * K(n - 0.3, 0.16) -
      0.0034 * K(t, 0.09)) *
    (1 - W(0.92, 1, n) * 0)
  );
}
function $n(e, t) {
  let n = Math.min(1, Math.abs(t));
  return e.full * 0.029 * (1 - n * n) ** 0.62;
}
function er(e, t) {
  let n = e.face,
    r = t.female,
    i = t.headH * (0.975 + 0.05 * n.length),
    a = n.jaw,
    o = +!!t.student,
    s = i / 0.23,
    c = !r,
    l = (r ? 0.86 : 0.93) + 0.16 * a,
    u = 0.37 + 0.012 * a,
    d = [
      [0, 0, 0, 0, 0],
      [0.02, 0.13, 0.12, 0.15, 0.006],
      [0.06, 0.225, 0.212, 0.27, 0.006],
      [0.13, 0.292, 0.296, 0.36, 0.005],
      [0.22, 0.322, 0.345, 0.41, 0.003],
      [0.31, 0.333, 0.377, 0.43, 0.001],
      [0.4, 0.33, 0.399, 0.425, 0],
      [0.47, 0.327, 0.406, 0.4, 0],
      [0.53, 0.33, 0.399, 0.372, 0],
      [0.6, 0.326 + 0.012 * (n.cheek - 0.5), 0.396, 0.325, 0],
      [0.67, 0.312 - 0.008 * (1 - a), 0.4, 0.255, 0],
      [0.75, 0.286 * qn(1, l, 0.5), 0.404, 0.17, 0.002],
      [0.83, 0.25 * l, 0.396, 0.1, 0.006],
      [0.9, 0.206 * l, u + 0.008, 0.055, 0.013],
      [0.95, 0.156 * qn(0.92, 1.12, a), u - 0.012, 0.035, 0.019],
      [0.985, 0.092 * qn(0.92, 1.15, a), u - 0.058, 0.025, 0.025],
      [1, 0.035, u - 0.12, 0.018, 0.03],
    ],
    f = +!!r + 0.5 * o,
    p = d.map((e) => {
      let n = W(0.55, 0.95, e[0]),
        r = 1 - f * (0.045 * n + 0.06 * W(0.82, 0.97, e[0]));
      return [
        e[0],
        e[1] * i * (1 + 0.02 * (t.mass - 1)) * r,
        e[2] * i,
        e[3] * i,
        e[4] * i,
      ];
    });
  if (t.mass > 1)
    for (let e of p)
      e[0] > 0.6 && (e[1] *= 1 + 0.06 * (t.mass - 1) * W(0.6, 0.9, e[0]));
  let m = n.eyeSize,
    h = 0.7 + 0.6 * n.lips,
    g = {
      eyeT: 0.355 * n.eyeGap,
      eyeD: 0.52 + 0.01 * (n.length - 0.5),
      eyeW: 0.158 * m * (r ? 1.04 : 1),
      eyeH:
        0.0235 *
        m *
        (0.82 + 0.34 * n.lid) *
        (t.elder ? 0.85 : 1) *
        (r ? 1.06 : 1),
      tilt: n.eyeTilt * 0.05,
      irisR: 0.0058 * s * (0.95 + 0.1 * m),
      irisDrop: 0.004,
      browD: 0.448 - 0.012 * n.browArch,
      browIn: 0.1,
      browOut: 0.56,
      noseTipD: 0.665 + 0.03 * n.noseL,
      noseBaseD: 0.695 + 0.025 * n.noseL,
      noseW: 0.135 * (0.85 + 0.35 * n.noseW),
      mouthD: 0.782 + 0.012 * n.noseL,
      mouthW: 0.232 * n.mouthW * (r ? 0.96 : 1),
      chinD: 0.975,
      Theta: 1.15,
      d0: 0.1,
      d1: 1.06,
      mPerRad: 0.4 * i,
      mPerD: i,
      full: h,
      smile: n.smile,
    },
    _ = 1 - Jn((n.lid - 0.2) / 0.5, 0, 1),
    v = {
      crownY: t.H,
      cz: t.headC.z,
      hh: i,
      s,
      keys: p,
      nF: 2.25,
      lay: g,
      face: n,
      female: r,
      male: c,
      elder: t.elder,
      sock: 0.0034 * s,
      browRidge:
        (r ? 0.0012 : 0.0026) * s * (t.elder ? 1.25 : 1) * (o ? 0.7 : 1),
      frontal: (8e-4 + 8e-4 * o + (r ? 6e-4 : 0)) * s,
      temple: 0.0026 * s * (t.mass > 1.5 ? 0.4 : 1),
      cheekBone: (0.0028 + 0.0036 * n.cheek) * s,
      cheekFat:
        (0.0015 +
          0.003 * o +
          (r ? 0.0012 : 0) +
          0.0022 * Math.max(0, t.mass - 1)) *
        s,
      buccal:
        (t.mass > 1.4 || o
          ? 3e-4
          : 0.0014 + (t.elder ? 0.001 : 0) + (t.mass < 0.5 ? 6e-4 : 0)) * s,
      muzzle: 0.0036 * s,
      naso:
        (35e-5 +
          0.0012 * n.wrinkles +
          (t.elder ? 6e-4 : 0) +
          4e-4 * Math.max(0, n.smile)) *
        s,
      lipUp: (0.0014 + 0.0016 * n.lips) * s,
      lipLo: (0.0019 + 0.0022 * n.lips) * s,
      crease: 9e-4 * s,
      chin: (r ? 0.0024 : 0.0034) * s,
      chinSq: c ? 8e-4 * s * (0.5 + a) : 0,
      jawAngle: (c ? 0.0022 * (0.5 + a) : 6e-4) * s,
      lidTm: 0.00105 * s,
      lidUpMax: (0.0024 + 0.0014 * _ + (t.elder ? 8e-4 : 0)) * s,
      lidLoMax: 0.0017 * s,
      lidCrease: (1 - _) * 55e-5 * s,
      lidCreaseD: 0.009 + 0.008 * n.lid,
      aegyo: r && !t.elder ? 6e-4 * s : 2e-4 * s,
      eyes: [
        { c: new M(), r: 0.0122 * s * (0.94 + 0.06 * m), side: -1 },
        { c: new M(), r: 0.0122 * s * (0.94 + 0.06 * m), side: 1 },
      ],
    };
  for (let e of v.eyes) {
    let t = e.side * g.eyeT,
      n = g.eyeD + 0.003,
      r = rr(v, t, n) - 0.0011 * s,
      a = v.crownY - n * i;
    e.c.set(Math.sin(t) * r, a, or(v, n) - Math.cos(t) * r + e.r);
  }
  return v;
}
function tr(e, t, n) {
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
const nr = (e, t) => {
  let n = (e - t) % Kn;
  return (n > Math.PI && (n -= Kn), n < -Math.PI && (n += Kn), n);
};
function rr(e, t, n) {
  let r = e.keys,
    i = tr(r, 1, n),
    a = tr(r, 2, n),
    o = tr(r, 3, n),
    s = Math.sin(t),
    c = Math.cos(t),
    l = c >= 0 ? a : o;
  if (i < 1e-5 || l < 1e-5) return 0;
  let u = c >= 0 ? e.nF - 0.2 * W(0.35, 0.62, n) - 0.33 * W(0.62, 0.9, n) : 2,
    d = Math.abs(s) / i,
    f = Math.abs(c) / l;
  return 1 / (d ** +u + f ** +u) ** (1 / u);
}
function ir(e, t, n) {
  let r = e.lay,
    i = t / r.mouthW,
    a = Math.abs(i);
  if (a > 1.8) return 0;
  let o = Zn(r, Math.min(1.2, a)),
    s = n - o,
    c = 1 - W(0.8, 1.22, a),
    l = 0;
  if (s < 0) {
    let t = Math.max(0.004, Qn(r, i)),
      n = -s / t,
      a;
    ((a =
      n <= 1
        ? 0.32 +
          0.68 *
            Math.sin(Math.min(1, n / 0.78) * Math.PI * 0.5) ** 0.8 *
            (n > 0.78 ? 1 - (0.1 * (n - 0.78)) / 0.22 : 1)
        : 0.9 * (1 - W(1, 2.3, n)) - 0.18 * K(n - 1.9, 0.5)),
      (l += e.lipUp * a * c));
  } else {
    let t = s / Math.max(0.005, $n(r, i)),
      n;
    ((n =
      t <= 1
        ? 0.3 +
          0.7 *
            Math.sin(Math.min(1, t / 0.5) * Math.PI * 0.5) *
            (t > 0.5 ? 1 - 0.42 * W(0.5, 1, t) : 1)
        : 0.58 * (1 - W(1, 1.75, t)) - 0.55 * K(t - 2, 0.55)),
      (l += e.lipLo * n * c));
  }
  ((l -= e.crease * K(s, 0.0022) * (1 - W(0.75, 1.1, a))),
    (l -= 0.0011 * e.s * K(a - 1.02, 0.14) * K(s, 0.012)));
  let u = r.noseBaseD + 0.006,
    d = o - Qn(r, i);
  if (n > u - 0.01 && n < d + 0.004) {
    let r = W(u - 0.01, u + 0.012, n) * (1 - W(d - 0.002, d + 0.004, n));
    l +=
      r * e.s * (-55e-5 * K(t, 0.024) + 35e-5 * K(Math.abs(t) - 0.052, 0.02));
  }
  return l;
}
