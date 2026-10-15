// tokyo/assets/characters-CbxAZUc_ 08 — math
// Lines 2306-2638 of readable/tokyo/assets/characters-CbxAZUc_.pretty.js (statement-aligned).
function Qt(e, t) {
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
      [0.75, 0.286 * Gt(1, l, 0.5), 0.404, 0.17, 0.002],
      [0.83, 0.25 * l, 0.396, 0.1, 0.006],
      [0.9, 0.206 * l, u + 0.008, 0.055, 0.013],
      [0.95, 0.156 * Gt(0.92, 1.12, a), u - 0.012, 0.035, 0.019],
      [0.985, 0.092 * Gt(0.92, 1.15, a), u - 0.058, 0.025, 0.025],
      [1, 0.035, u - 0.12, 0.018, 0.03],
    ],
    f = +!!r + 0.5 * o,
    p = d.map((e) => {
      let n = H(0.55, 0.95, e[0]),
        r = 1 - f * (0.045 * n + 0.06 * H(0.82, 0.97, e[0]));
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
      e[0] > 0.6 && (e[1] *= 1 + 0.06 * (t.mass - 1) * H(0.6, 0.9, e[0]));
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
    _ = 1 - Kt((n.lid - 0.2) / 0.5, 0, 1),
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
        { c: new k(), r: 0.0122 * s * (0.94 + 0.06 * m), side: -1 },
        { c: new k(), r: 0.0122 * s * (0.94 + 0.06 * m), side: 1 },
      ],
    };
  for (let e of v.eyes) {
    let t = e.side * g.eyeT,
      n = g.eyeD + 0.003,
      r = tn(v, t, n) - 0.0011 * s,
      a = v.crownY - n * i;
    e.c.set(Math.sin(t) * r, a, an(v, n) - Math.cos(t) * r + e.r);
  }
  return v;
}
function $t(e, t, n) {
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
var en = (e, t) => {
  let n = (e - t) % Wt;
  return (n > Math.PI && (n -= Wt), n < -Math.PI && (n += Wt), n);
};
function tn(e, t, n) {
  let r = e.keys,
    i = $t(r, 1, n),
    a = $t(r, 2, n),
    o = $t(r, 3, n),
    s = Math.sin(t),
    c = Math.cos(t),
    l = c >= 0 ? a : o;
  if (i < 1e-5 || l < 1e-5) return 0;
  let u = c >= 0 ? e.nF - 0.2 * H(0.35, 0.62, n) - 0.33 * H(0.62, 0.9, n) : 2,
    d = Math.abs(s) / i,
    f = Math.abs(c) / l;
  return 1 / (d ** +u + f ** +u) ** (1 / u);
}
function nn(e, t, n) {
  let r = e.lay,
    i = t / r.mouthW,
    a = Math.abs(i);
  if (a > 1.8) return 0;
  let o = Yt(r, Math.min(1.2, a)),
    s = n - o,
    c = 1 - H(0.8, 1.22, a),
    l = 0;
  if (s < 0) {
    let t = Math.max(0.004, Xt(r, i)),
      n = -s / t,
      a;
    ((a =
      n <= 1
        ? 0.32 +
          0.68 *
            Math.sin(Math.min(1, n / 0.78) * Math.PI * 0.5) ** 0.8 *
            (n > 0.78 ? 1 - (0.1 * (n - 0.78)) / 0.22 : 1)
        : 0.9 * (1 - H(1, 2.3, n)) - 0.18 * W(n - 1.9, 0.5)),
      (l += e.lipUp * a * c));
  } else {
    let t = s / Math.max(0.005, Zt(r, i)),
      n;
    ((n =
      t <= 1
        ? 0.3 +
          0.7 *
            Math.sin(Math.min(1, t / 0.5) * Math.PI * 0.5) *
            (t > 0.5 ? 1 - 0.42 * H(0.5, 1, t) : 1)
        : 0.58 * (1 - H(1, 1.75, t)) - 0.55 * W(t - 2, 0.55)),
      (l += e.lipLo * n * c));
  }
  ((l -= e.crease * W(s, 0.0022) * (1 - H(0.75, 1.1, a))),
    (l -= 0.0011 * e.s * W(a - 1.02, 0.14) * W(s, 0.012)));
  let u = r.noseBaseD + 0.006,
    d = o - Xt(r, i);
  if (n > u - 0.01 && n < d + 0.004) {
    let r = H(u - 0.01, u + 0.012, n) * (1 - H(d - 0.002, d + 0.004, n));
    l +=
      r * e.s * (-55e-5 * W(t, 0.024) + 35e-5 * W(Math.abs(t) - 0.052, 0.02));
  }
  return l;
}
function rn(e, t, n) {
  let r = tn(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = en(t, 0),
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
      h = Kt(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = H(-0.05, 0.1, h) * (1 - H(0.85, 1.15, h));
    ((r -= e.naso * W(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * W(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += nn(e, o, n)),
    (r += e.chin * W(o, 0.27) * W(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * W(s - 0.13, 0.085) * W(n - 0.95, 0.03)),
    (r += e.jawAngle * W(s - 1.22, 0.2) * W(n - 0.885, 0.05)),
    r
  );
}
function an(e, t) {
  return e.cz + $t(e.keys, 4, t);
}
function on(e, t) {
  let n = e.lay,
    r = en(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function sn(e, t, n) {
  let r = e.lay,
    i = Kt(t, -1, 1),
    a = qt(r, i),
    o = Jt(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * H(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        W(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - H(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * H(0, 0.03, r) +
      e.aegyo * W(r - 0.009, 0.007) * (1 - H(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function cn(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - H(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
var ln = new k(),
  un = new k();
function dn(e, t, n, r, i) {
  let a = tn(e, n, r);
  return (
    un.set(Math.sin(n) * a, e.crownY - r * e.hh, an(e, r) - Math.cos(n) * a),
    i.subVectors(un, t.c).normalize()
  );
}
function fn(e, t, n, r, i, a) {
  return (dn(e, t, n, r, ln), a.copy(t.c).addScaledVector(ln, t.r + i));
}
var pn = new k(),
  mn = new k();
