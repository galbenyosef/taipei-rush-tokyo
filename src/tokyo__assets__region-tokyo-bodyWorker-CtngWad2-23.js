// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 23 — math
// Lines 8795-9142 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function jr(e) {
  let { m: t, h: n, lod: r } = e;
  if (e.earsHidden) return;
  let i = n.s,
    a = 0.058 * i,
    o = 0.032 * i,
    s = br
      .setHex(e.skin)
      .multiply(new N(1.03, 0.92, 0.88))
      .getHex(),
    c = br
      .setHex(e.skin)
      .multiply(new N(0.78, 0.66, 0.64))
      .getHex(),
    l = br
      .setHex(e.skin)
      .multiply(new N(1.04, 0.9, 0.86))
      .getHex();
  for (let e of [-1, 1]) {
    let u = G(n, e * 1.6, 0.585, -0.001, new M(), !1),
      d = new M(e, 0, 0.12).normalize(),
      f = new M(0, 1, 0),
      p = new M();
    (f.applyAxisAngle(d, e * 0.2),
      p.crossVectors(d, f).multiplyScalar(-e),
      p.z > 0 && p.negate());
    let m = r === 0 ? 8 : 5,
      h =
        r === 0
          ? [
              [1, 0.45],
              [1.03, 1],
              [0.84, 0.9],
              [0.62, 0.72],
              [0.3, 0.15],
            ]
          : [
              [1, 0.5],
              [0.9, 0.9],
              [0.2, 0.1],
            ],
      g = h.length - 1,
      _ = (e, t) => {
        let n = e * Mn,
          r = Math.max(0, Math.cos(n));
        ((t[0] = Math.sin(n) * o * (0.5 + 0.12 * r) + o * 0.18),
          (t[1] =
            Math.cos(n) *
            a *
            0.5 *
            (n > Math.PI * 0.8 && n < Math.PI * 1.2 ? 0.95 : 1)));
      },
      v = [0, 0];
    (t.grid(
      {
        nu: m,
        nv: g,
        closed: !0,
        point: (e, t, n) => {
          let r = Math.round(t * g),
            [a, s] = h[r];
          _(e, v);
          let c = v[0] < 0 ? 0.7 : 1,
            l = v[0] * a * (r >= 3 ? c : 1),
            m = v[1] * a,
            y = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * s;
          return (
            n
              .copy(u)
              .addScaledVector(p, -l)
              .addScaledVector(f, m)
              .addScaledVector(d, y),
            n
          );
        },
        invert: e < 0,
        cap1: !0,
      },
      {
        color: (e, t, n, r, i, a) => {
          let o = Math.round(i * g);
          return a.setHex(o >= g - 1 ? c : o === 1 ? l : s);
        },
        skin: z.head,
        kind: V.skin,
        rough: 0.55,
        bump: 0.5,
      },
    ),
      t.grid(
        {
          nu: m,
          nv: 1,
          closed: !0,
          point: (e, t, n) => {
            _(e, v);
            let r = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * 0.45,
              a = t < 0.5 ? 1 : 0.7;
            return (
              n
                .copy(u)
                .addScaledVector(p, -v[0] * a)
                .addScaledVector(f, v[1] * a)
                .addScaledVector(d, t < 0.5 ? r : -0.004 * i),
              n
            );
          },
          invert: e > 0,
        },
        {
          color: br.setHex(s).multiplyScalar(0.85).getHex(),
          skin: z.head,
          kind: V.skin,
          rough: 0.6,
        },
      ));
  }
}
function Mr(e) {
  let { m: t, h: n, lod: r } = e,
    i = dr(r),
    a = fr(r),
    o = i.length - 1,
    s = a.length - 1,
    c = i.slice();
  c[o] = i[0] + Mn;
  let l = (e) => c[Math.round(e * o)],
    u = (e) => a[Math.round(e * s)],
    d = {
      color: (t, r, i, a, o, s) => Sr(n, e.skin, l(a), u(o), s),
      skin: (e, t, r, i, a, o) => xr(n, l(i), u(a), o),
      kind: V.skin,
      rough: 0.58,
    },
    f = t.grid(
      { nu: o, nv: s, closed: !1, point: (e, t, r) => G(n, l(e), u(t), 0, r) },
      d,
    ),
    p = t.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= o; t++) {
      let r = (f + e * (o + 1) + t) * 3,
        i = a[e];
      (i < 0.03
        ? K.set(0, 1, 0)
        : (ur(n, c[t], Math.min(0.995, i), K),
          i > 0.97 &&
            K.lerp(yr.set(0, -1, 0.3).normalize(), U(0.97, 1, i)).normalize()),
        (p[r] = K.x),
        (p[r + 1] = K.y),
        (p[r + 2] = K.z));
    }
  (Ar(e), Nr(e), Pr(e));
}
function Nr(e) {
  let { m: t, h: n } = e,
    r = n.lay,
    i = n.face,
    a = (e, r, i, a, o, s, c) =>
      t.grid(
        {
          nu: 2,
          nv: 1,
          closed: !1,
          point: (t, s, c) =>
            G(
              n,
              Nn(e, r, t),
              Nn(i, a, s) + (t === 0.5 ? (s < 0.5 ? -0.006 : 0.004) : 0),
              o,
              c,
            ),
        },
        { color: s, skin: c, kind: V.skin, rough: 0.6 },
      ),
    o = e.b.elder ? 10130572 : 2760215;
  for (let e of [-1, 1]) {
    let t = e * r.eyeT,
      n = t - e * r.eyeW * 0.85,
      s = t + e * r.eyeW * 0.9;
    a(
      Math.min(n, s),
      Math.max(n, s),
      r.eyeD - r.eyeH * 0.9,
      r.eyeD + r.eyeH * 0.5,
      0.0022,
      2102799,
      z.head,
    );
    let c = e * 0.12,
      l = e * 0.52;
    a(
      Math.min(c, l),
      Math.max(c, l),
      r.browD - 0.012 * (0.6 + i.brow),
      r.browD + 0.008,
      0.0024,
      o,
      z.head,
    );
  }
  let s =
    i.lipColor ||
    br
      .setHex(e.skin)
      .multiply(new N(0.92, 0.62, 0.6))
      .getHex();
  a(-r.mouthW, r.mouthW, r.mouthD - 0.012, r.mouthD + 0.016, 0.0025, s, z.jaw);
}
function Pr(e) {
  let { m: t, h: n, b: r, lod: i } = e,
    a = i === 0 ? 10 : 6,
    o = r.H * 0.808,
    s = n.crownY - 0.8 * n.hh,
    c = Kn(n, 0.8) + 0.035 * n.hh,
    l = r.neckBase.z,
    u = r.neckR,
    d = i === 0 ? [0, 0.22, 0.48, 0.74, 1] : [0, 0.5, 1],
    f = d.length - 1,
    p = !r.female,
    m = new M(),
    h = (e) => Nn(0.8, 0.7, U(0, 0.8, -Math.cos(e)));
  t.grid(
    {
      nu: a,
      nv: f,
      closed: !0,
      point: (e, t, i) => {
        let a = d[Math.round(t * f)],
          s = e * Mn,
          g = n.crownY - h(s) * n.hh,
          _ = Nn(o, g, a),
          v = Nn(l, c, a * a),
          y = Math.sin(s),
          b = Math.cos(s),
          x = u * (1 - 0.1 * a) * (1 + 0.16 * (1 - a) * (1 - a)),
          S = u * (0.9 + 0.08 * (1 - a)),
          C = u * (1.02 + 0.08 * (1 - a)),
          w = b > 0 ? S : C,
          T = 1 / Math.sqrt((y / x) ** 2 + (b / w) ** 2),
          E = Nn(0.95, 0.55, a);
        ((T +=
          (p ? 0.0035 : 0.002) *
          r.s *
          (W(Hn(s, E), 0.3) + W(Hn(s, -E), 0.3)) *
          Math.sin(a * Math.PI)),
          (T -= 0.002 * r.s * W(Hn(s, 0), 0.22) * (1 - a) * 0.6));
        let D =
          p && !r.student
            ? 0.0042 * r.s * W(y, 0.25) * Math.max(0, b) * W(a - 0.58, 0.18)
            : 0;
        ((T += D), i.set(y * T, _, v - b * T));
        let O = U(0, 0.6, -b) * U(0.45, 1, a);
        return (O > 0 && i.lerp(G(n, s, h(s), -0.0015 * n.s, m, !1), O), i);
      },
      invert: !0,
    },
    {
      color: (t, n, r, i, a, o) => {
        o.setHex(e.skin);
        let c = i * Mn;
        return (
          o.multiplyScalar(
            1 - 0.12 * U(s - 0.06, s, n) * Math.max(0, Math.cos(c)),
          ),
          o
        );
      },
      skin: (e, t, n, r, i, a) =>
        H(a, z.neck, z.head, U(Nn(o, s, 0.45), Nn(o, s, 0.95), t)),
      kind: V.skin,
      rough: 0.56,
      bump: 0.6,
    },
  );
}
const Fr = Math.PI * 2;
function Ir(e, t, n) {
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
function Lr(e, t, n, r, i, a = 2) {
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
const Rr = (e, t) => Math.exp(-(e * e) / (t * t)),
  zr = (e, t) => {
    let n = (e - t) % Fr;
    return (n > Math.PI && (n -= Fr), n < -Math.PI && (n += Fr), n);
  };
(new M(), new M(), new M());
const Br = new M(),
  Vr = new M(),
  Hr = new M(),
  Ur = new M(),
  Wr = new M(0, 0, -1);
function Gr(e, t, n, r, i, a) {
  (Br.subVectors(e.b, e.a),
    Vr.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(Br, t)
      : n.copy(e.b).addScaledVector(Vr, t - 1));
  let o = Hr.copy(Br).normalize(),
    s = Ur.copy(Vr).normalize(),
    c = U(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(Wr).addScaledVector(r, -Wr.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Kr(e, t, n, r = 0) {
  return Lr(
    t,
    Ir(e.keys, 1, n) + r,
    Ir(e.keys, 2, n) + r,
    Ir(e.keys, 3, n) + r,
    Ir(e.keys, 4, n) + r,
  );
}
