// tokyo/assets/bodyWorker-Bk4d3Tu3 24 — math
// Lines 9026-9350 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function Gr(e) {
  let { m: t, h: n, lod: r } = e;
  if (e.earsHidden) return;
  let i = n.s,
    a = 0.058 * i,
    o = 0.032 * i,
    s = Pr.setHex(e.skin)
      .multiply(new N(1.03, 0.92, 0.88))
      .getHex(),
    c = Pr.setHex(e.skin)
      .multiply(new N(0.78, 0.66, 0.64))
      .getHex(),
    l = Pr.setHex(e.skin)
      .multiply(new N(1.04, 0.9, 0.86))
      .getHex();
  for (let e of [-1, 1]) {
    let u = q(n, e * 1.6, 0.585, -0.001, new M(), !1),
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
        let n = e * Kn,
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
        skin: B.head,
        kind: H.skin,
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
          color: Pr.setHex(s).multiplyScalar(0.85).getHex(),
          skin: B.head,
          kind: H.skin,
          rough: 0.6,
        },
      ));
  }
}
function Kr(e) {
  let { m: t, h: n, lod: r } = e,
    i = Tr(r),
    a = Er(r),
    o = i.length - 1,
    s = a.length - 1,
    c = i.slice();
  c[o] = i[0] + Kn;
  let l = (e) => c[Math.round(e * o)],
    u = (e) => a[Math.round(e * s)],
    d = {
      color: (t, r, i, a, o, s) => Ir(n, e.skin, l(a), u(o), s),
      skin: (e, t, r, i, a, o) => Fr(n, l(i), u(a), o),
      kind: H.skin,
      rough: 0.58,
    },
    f = t.grid(
      { nu: o, nv: s, closed: !1, point: (e, t, r) => q(n, l(e), u(t), 0, r) },
      d,
    ),
    p = t.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= o; t++) {
      let r = (f + e * (o + 1) + t) * 3,
        i = a[e];
      (i < 0.03
        ? J.set(0, 1, 0)
        : (wr(n, c[t], Math.min(0.995, i), J),
          i > 0.97 &&
            J.lerp(Nr.set(0, -1, 0.3).normalize(), W(0.97, 1, i)).normalize()),
        (p[r] = J.x),
        (p[r + 1] = J.y),
        (p[r + 2] = J.z));
    }
  (Wr(e), qr(e), Jr(e));
}
function qr(e) {
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
            q(
              n,
              qn(e, r, t),
              qn(i, a, s) + (t === 0.5 ? (s < 0.5 ? -0.006 : 0.004) : 0),
              o,
              c,
            ),
        },
        { color: s, skin: c, kind: H.skin, rough: 0.6 },
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
      B.head,
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
      B.head,
    );
  }
  let s =
    i.lipColor ||
    Pr.setHex(e.skin)
      .multiply(new N(0.92, 0.62, 0.6))
      .getHex();
  a(-r.mouthW, r.mouthW, r.mouthD - 0.012, r.mouthD + 0.016, 0.0025, s, B.jaw);
}
function Jr(e) {
  let { m: t, h: n, b: r, lod: i } = e,
    a = i === 0 ? 10 : 6,
    o = r.H * 0.808,
    s = n.crownY - 0.8 * n.hh,
    c = or(n, 0.8) + 0.035 * n.hh,
    l = r.neckBase.z,
    u = r.neckR,
    d = i === 0 ? [0, 0.22, 0.48, 0.74, 1] : [0, 0.5, 1],
    f = d.length - 1,
    p = !r.female,
    m = new M(),
    h = (e) => qn(0.8, 0.7, W(0, 0.8, -Math.cos(e)));
  t.grid(
    {
      nu: a,
      nv: f,
      closed: !0,
      point: (e, t, i) => {
        let a = d[Math.round(t * f)],
          s = e * Kn,
          g = n.crownY - h(s) * n.hh,
          _ = qn(o, g, a),
          v = qn(l, c, a * a),
          y = Math.sin(s),
          b = Math.cos(s),
          x = u * (1 - 0.1 * a) * (1 + 0.16 * (1 - a) * (1 - a)),
          S = u * (0.9 + 0.08 * (1 - a)),
          C = u * (1.02 + 0.08 * (1 - a)),
          w = b > 0 ? S : C,
          T = 1 / Math.sqrt((y / x) ** 2 + (b / w) ** 2),
          E = qn(0.95, 0.55, a);
        ((T +=
          (p ? 0.0035 : 0.002) *
          r.s *
          (K(nr(s, E), 0.3) + K(nr(s, -E), 0.3)) *
          Math.sin(a * Math.PI)),
          (T -= 0.002 * r.s * K(nr(s, 0), 0.22) * (1 - a) * 0.6));
        let D =
          p && !r.student
            ? 0.0042 * r.s * K(y, 0.25) * Math.max(0, b) * K(a - 0.58, 0.18)
            : 0;
        ((T += D), i.set(y * T, _, v - b * T));
        let O = W(0, 0.6, -b) * W(0.45, 1, a);
        return (O > 0 && i.lerp(q(n, s, h(s), -0.0015 * n.s, m, !1), O), i);
      },
      invert: !0,
    },
    {
      color: (t, n, r, i, a, o) => {
        o.setHex(e.skin);
        let c = i * Kn;
        return (
          o.multiplyScalar(
            1 - 0.12 * W(s - 0.06, s, n) * Math.max(0, Math.cos(c)),
          ),
          o
        );
      },
      skin: (e, t, n, r, i, a) =>
        U(a, B.neck, B.head, W(qn(o, s, 0.45), qn(o, s, 0.95), t)),
      kind: H.skin,
      rough: 0.56,
      bump: 0.6,
    },
  );
}
(new M(0.4, 0.8, 0.3).normalize(), new ve(0, 0, 0, 0));
const Yr = {};
(typeof window < `u` && (window.__materialLint = () => Yr), new A());
const Xr = /* @__PURE__ */ new Map(),
  Y = (e, t = 1) => {
    let n = t >= 1 ? 1e3 : t <= 0 ? 0 : Math.round(t * 1e3),
      r = (e & 16777215) * 1001 + n,
      i = Xr.get(r);
    if (i === void 0) {
      let n = (e >> 16) & 255,
        a = (e >> 8) & 255,
        o = e & 255;
      ((i =
        t >= 1
          ? `rgb(${n},${a},${o})`
          : `rgba(${n},${a},${o},${t.toFixed(3)})`),
        Xr.size >= 4096 && Xr.clear(),
        Xr.set(r, i));
    }
    return i;
  };
function Zr(e, t, n) {
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
function Qr(e, t) {
  return t >= 1
    ? Zr(e, 16777215, Math.min(1, t - 1))
    : Zr(0, e, Math.max(0, t));
}
function $r(e) {
  let t = e >>> 0 || 1;
  return () => {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function ei(e, t, n) {
  for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) n(i * e, r * t);
}
