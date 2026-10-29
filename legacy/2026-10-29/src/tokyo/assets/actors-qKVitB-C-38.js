// tokyo/assets/actors-qKVitB-C 38 — math
// Lines 16751-17048 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function uf(e, t, n, r) {
  let i;
  try {
    i = sf(t);
  } catch (e) {
    return (
      console.warn(
        `[vehicles] crowd rider unavailable, using the procedural rider`,
        e,
      ),
      !1
    );
  }
  let a = i.attributes.position.array,
    o = i.attributes.normal.array,
    s = i.attributes.color.array,
    c = i.attributes.key.array,
    l = i.index.array;
  e.style({ rough: 0.82, variant: n });
  for (let t = 0; t < l.length; t += 3) {
    let i = c[l[t]];
    (c[l[t + 1]] !== i || c[l[t + 2]] !== i) && (i = 0);
    let u = i === 2 || i === 3 || i === 5 ? i : 0,
      d = i === 6 ? r : n,
      f = i === 3 ? 0.28 : i === 6 ? 0.95 : 0.82;
    for (let n = 0; n < 3; n++) {
      let r = l[t + n],
        p = i === 0 && c[r] !== 0 ? 0.06 : -1;
      e.rawVertex(
        a[r * 3],
        a[r * 3 + 1],
        a[r * 3 + 2],
        o[r * 3],
        o[r * 3 + 1],
        o[r * 3 + 2],
        p >= 0 ? p : s[r * 3],
        p >= 0 ? p : s[r * 3 + 1],
        p >= 0 ? p : s[r * 3 + 2],
        u,
        d,
        f,
      );
    }
  }
  let u = i.userData.helmet;
  for (let r = 0; r < (t.bareHead ? 0 : u.kind.length); r++) {
    let t = u.kind[r];
    e.style(
      t === 0
        ? { rough: 0.25, metal: 0.1, variant: n }
        : { rough: 0.08, metal: 0.5, variant: n },
    );
    let i = t === 0 ? 1 : t === 1 ? 0.035 : 0.05;
    for (let a = 0; a < 3; a++) {
      let o = (r * 3 + a) * 3;
      e.rawVertex(
        u.P[o],
        u.P[o + 1],
        u.P[o + 2],
        u.N[o],
        u.N[o + 1],
        u.N[o + 2],
        i,
        i,
        i * 1.1,
        t === 0 ? 3 : 0,
        n,
        t === 0 ? 0.25 : 0.08,
      );
    }
  }
  return !0;
}
function df(e, t, n, r, i, a) {
  let o = (e) => {
      let t = Math.abs(Math.atan2(Math.sin(e), Math.cos(e))) / Math.PI;
      return n
        ? 2.35 - 0.2 * Math.max(0, 1 - t * 3)
        : t < 0.22
          ? 1.2
          : t < 0.45
            ? 1.2 + ((t - 0.22) / 0.23) * 0.72
            : 1.92;
    },
    s = (n, r, i, o) => {
      let s = Math.sin(r) * Math.sin(n),
        c = Math.cos(r),
        l = -Math.sin(r) * Math.cos(n);
      (i.set(e.x + s * t.x, e.y + c * t.y, e.z + l * t.z),
        o.set(s / t.x, c / t.y, l / t.z).normalize(),
        a(i, o));
    },
    c = [],
    l = [],
    u = [],
    d = [new L(), new L(), new L(), new L()],
    f = [new L(), new L(), new L(), new L()],
    p = (e, t) => {
      for (let t of e)
        (c.push(d[t].x, d[t].y, d[t].z), l.push(f[t].x, f[t].y, f[t].z));
      u.push(t);
    };
  for (let e = 0; e < r; e++) {
    let t = (e / r) * Math.PI * 2,
      a = ((e + 1) / r) * Math.PI * 2,
      c = o(t),
      l = o(a);
    for (let e = 0; e < i; e++) {
      let r = e / i,
        o = (e + 1) / i;
      (s(t, c * r, d[0], f[0]),
        s(a, l * r, d[1], f[1]),
        s(a, l * o, d[2], f[2]),
        s(t, c * o, d[3], f[3]));
      let u =
          Math.abs(Math.atan2(Math.sin((t + a) / 2), Math.cos((t + a) / 2))) <
          1,
        m = n && u && (e === 2 || e === 3) ? 1 : 0;
      (e > 0 && p([0, 1, 2], m), p([0, 2, 3], m));
    }
  }
  if (!n)
    for (let e = 0; e < 6; e++) {
      let t = -0.9 + (e / 6) * 1.8,
        n = -0.9 + ((e + 1) / 6) * 1.8,
        r = o(t),
        i = o(n);
      (s(t, r, d[0], f[0]),
        s(n, i, d[1], f[1]),
        s(t, r + 0.3, d[3], f[3]),
        s(n, i + 0.3, d[2], f[2]));
      for (let e of [2, 3])
        (d[e]
          .sub(d[+(e === 2)])
          .setLength(0.02)
          .add(d[+(e === 2)]),
          d[e].addScaledVector(f[+(e === 2)], 0.045),
          f[e].copy(f[+(e === 2)]));
      (p([0, 1, 2], 2), p([0, 2, 3], 2));
    }
  return {
    P: new Float32Array(c),
    N: new Float32Array(l),
    kind: new Uint8Array(u),
  };
}
var ff = { color: 2503227, rough: 0.06, metal: 0.35 },
  pf = { color: 1513498, rough: 0.78 },
  mf = { color: 13225168, rough: 0.22, metal: 0.95 },
  hf = { color: 1381653, rough: 0.95 },
  gf = { color: 657930, rough: 1 },
  _f = { color: 16777215, paint: 1, rough: 0.26, metal: 0.35 },
  vf = { color: 16777215, paint: 4, rough: 0.45, metal: 0.2 },
  yf = { color: 15921904, rough: 0.35, metal: 0.15 },
  bf = { color: 16774882, light: id.HEAD, rough: 0.1, metal: 0.3 },
  xf = { color: 13637149, light: id.TAIL, rough: 0.15 },
  Sf = { color: 14685725, light: id.BRAKE, rough: 0.15 },
  Cf = { color: 16753178, light: id.IND_L, rough: 0.2 },
  wf = { color: 16753178, light: id.IND_R, rough: 0.2 },
  Tf = { color: 15921906, light: id.REVERSE, rough: 0.2 },
  Ef = { color: 16777215, light: id.PLATE, rough: 0.5 },
  Df = { color: 14067847, rough: 0.8 },
  Of = (e, t, n) => (e < t ? t : e > n ? n : e);
function kf(e, t, n, r, i, a, o, s, c = !0, l) {
  e.style(s);
  let u = (e, n) => (l ? l(e, n) : t);
  (e.quadUV(
    [u(r, i), i, r],
    [u(n, i), i, n],
    [u(n, a), a, n],
    [u(r, a), a, r],
    o.u0,
    o.v0,
    o.u1,
    o.v1,
  ),
    c &&
      e.quadUV(
        [-u(n, i), i, n],
        [-u(r, i), i, r],
        [-u(r, a), a, r],
        [-u(n, a), a, n],
        o.u0,
        o.v0,
        o.u1,
        o.v1,
      ));
}
function Af(e, t, n, r, i, a, o, s, c) {
  (e.style(s),
    c
      ? e.quadUV(
          [r, i, t],
          [n, i, t],
          [n, a, t],
          [r, a, t],
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        )
      : e.quadUV(
          [n, i, t],
          [r, i, t],
          [r, a, t],
          [n, a, t],
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        ));
}
function jf(e, t, n, r, i, a = 0.34, o = 0.15) {
  Af(e, t, -a / 2, a / 2, n - o / 2, n + o / 2, ed.plate(r), Ef, i);
}
function Mf(e, t, n, r, i, a, o, s, c) {
  (e.style(t),
    e.box(-n, r, i, a, o, s, ``),
    c && e.style(c),
    e.box(n, r, i, a, o, s, ``));
}
function Nf(e, t, n, r) {
  let i = n[0] - t[0],
    a = n[1] - t[1],
    o = n[2] - t[2],
    s = Math.hypot(i, a, o) || 1,
    c = new L(i / s, a / s, o / s),
    l = Math.abs(c.y) > 0.9 ? new L(1, 0, 0) : new L(0, 1, 0),
    u = new L().crossVectors(c, l).normalize().multiplyScalar(r),
    d = new L().crossVectors(u, c).normalize().multiplyScalar(r),
    f = (e, t, n) => [
      e[0] + u.x * t + d.x * n,
      e[1] + u.y * t + d.y * n,
      e[2] + u.z * t + d.z * n,
    ],
    p = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
  for (let r = 0; r < 4; r++) {
    let [i, a] = p[r],
      [o, s] = p[(r + 1) % 4],
      c = [
        (u.x * (i + o) + d.x * (a + s)) / 2,
        (u.y * (i + o) + d.y * (a + s)) / 2,
        (u.z * (i + o) + d.z * (a + s)) / 2,
      ];
    e.quad(f(t, i, a), f(n, i, a), f(n, o, s), f(t, o, s), c);
  }
}
var Pf = new L(),
  Ff = new L(),
  If = new L(),
  Lf = new L();
function Rf(e, t, n, r, i = r, a = 8, o = !1) {
  Pf.set(n[0] - t[0], n[1] - t[1], n[2] - t[2]);
  let s = Pf.length();
  if (s < 1e-5) return;
  (Pf.multiplyScalar(1 / s),
    Lf.set(0, 1, 0),
    Math.abs(Pf.y) > 0.9 && Lf.set(1, 0, 0),
    Ff.crossVectors(Pf, Lf).normalize(),
    If.crossVectors(Ff, Pf).normalize());
  let c = Ff.x,
    l = Ff.y,
    u = Ff.z,
    d = If.x,
    f = If.y,
    p = If.z,
    m = Pf.x,
    h = Pf.y,
    g = Pf.z;
  for (let s = 0; s < a; s++) {
    let _ = (s / a) * Math.PI * 2,
      v = ((s + 1) / a) * Math.PI * 2,
      y = Math.cos(_),
      b = Math.sin(_),
      x = Math.cos(v),
      S = Math.sin(v),
      C = [c * y + d * b, l * y + f * b, u * y + p * b],
      w = [c * x + d * S, l * x + f * S, u * x + p * S],
      T = [t[0] + C[0] * r, t[1] + C[1] * r, t[2] + C[2] * r],
      E = [n[0] + C[0] * i, n[1] + C[1] * i, n[2] + C[2] * i],
      D = [n[0] + w[0] * i, n[1] + w[1] * i, n[2] + w[2] * i],
      O = [t[0] + w[0] * r, t[1] + w[1] * r, t[2] + w[2] * r];
    (e.smoothQuad(T, E, D, O, C, C, w, w),
      o && (e.tri(t, O, T, [-m, -h, -g]), e.tri(n, E, D, [m, h, g])));
  }
}
var zf = !0;
function Bf(e) {
  zf = e;
}
function Vf(e, t, n, r) {
  (zf && uf(e, t, n, r)) || Hf(e, t, n, r);
}
