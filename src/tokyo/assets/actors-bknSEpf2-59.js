// tokyo/assets/actors-bknSEpf2 59 — math
// Lines 24590-24935 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Yg(e, t, n, r, i, a, o) {
  let s = r.length,
    c = new Int32Array(s),
    l = Xg(s * 2),
    u = l - 1,
    d = new Int32Array(l * 6);
  for (let e = 0; e < l; e++) d[e * 6 + 5] = -1;
  let f = new Float64Array(s * 11),
    p = 0;
  for (let a = 0; a < s; a++) {
    let s = i[a],
      l = r[a] | 0,
      m = s ? o * 0.5 : o,
      h = Math.round(e[a * 3] / m),
      g = Math.round(e[a * 3 + 1] / m),
      _ = Math.round(e[a * 3 + 2] / m),
      v =
        ((Math.imul(h, 73856093) ^
          Math.imul(g, 19349663) ^
          Math.imul(_, 83492791) ^
          Math.imul(l * 2 + s, 668265263)) >>>
          0) &
        u,
      y = -1;
    for (;;) {
      let e = v * 6,
        t = d[e + 5];
      if (t < 0) {
        ((y = p++),
          (d[e] = h),
          (d[e + 1] = g),
          (d[e + 2] = _),
          (d[e + 3] = l),
          (d[e + 4] = s),
          (d[e + 5] = y),
          (f[y * 11 + 10] = r[a]));
        break;
      }
      if (
        d[e] === h &&
        d[e + 1] === g &&
        d[e + 2] === _ &&
        d[e + 3] === l &&
        d[e + 4] === s
      ) {
        y = t;
        break;
      }
      v = (v + 1) & u;
    }
    c[a] = y;
    let b = y * 11;
    for (let r = 0; r < 3; r++)
      ((f[b + r] += e[a * 3 + r]),
        (f[b + 3 + r] += t[a * 3 + r]),
        (f[b + 6 + r] += n[a * 3 + r]));
    f[b + 9]++;
  }
  let m = new Float32Array(p * 3),
    h = new Float32Array(p * 3),
    g = new Float32Array(p * 3),
    _ = new Float32Array(p);
  for (let e = 0; e < p; e++) {
    let t = e * 11,
      n = f[t + 9],
      r = Math.hypot(f[t + 3], f[t + 4], f[t + 5]) || 1;
    for (let i = 0; i < 3; i++)
      ((m[e * 3 + i] = f[t + i] / n),
        (h[e * 3 + i] = f[t + 3 + i] / r),
        (g[e * 3 + i] = f[t + 6 + i] / n));
    _[e] = f[t + 10];
  }
  let v = Xg((a.length / 3) * 2),
    y = v - 1,
    b = new Int32Array(v * 3).fill(-1),
    x = new Int32Array(a.length),
    S = 0,
    C = 0;
  for (let e = 0; e < a.length; e += 3) {
    let t = c[a[e]],
      n = c[a[e + 1]],
      r = c[a[e + 2]];
    if (t === n || n === r || t === r) continue;
    let i = t,
      o = n,
      s = r,
      l;
    (i > o && ((l = i), (i = o), (o = l)),
      o > s && ((l = o), (o = s), (s = l)),
      i > o && ((l = i), (i = o), (o = l)));
    let u =
        ((Math.imul(i, 2654435761) ^
          Math.imul(o, 2246822519) ^
          Math.imul(s, 3266489917)) >>>
          0) &
        y,
      d = !1;
    for (;;) {
      let e = u * 3;
      if (b[e] < 0) {
        ((b[e] = i), (b[e + 1] = o), (b[e + 2] = s));
        break;
      }
      if (b[e] === i && b[e + 1] === o && b[e + 2] === s) {
        d = !0;
        break;
      }
      u = (u + 1) & y;
    }
    d || ((x[S++] = t), (x[S++] = n), (x[S++] = r), (C = Math.max(C, t, n, r)));
  }
  let w = new le();
  (w.setAttribute(`position`, new z(m, 3)),
    w.setAttribute(`normal`, new z(h, 3)),
    w.setAttribute(`color`, new z(g, 3)),
    w.setAttribute(`key`, new z(_, 1)));
  let T = C >= 65535 ? new Uint32Array(S) : new Uint16Array(S);
  for (let e = 0; e < S; e++) T[e] = x[e];
  return (w.setIndex(new z(T, 1)), w);
}
var Xg = (e) => {
  let t = 16;
  for (; t < e;) t *= 2;
  return t;
};
function Zg(e, t, n, r) {
  let i;
  try {
    i = Jg(t);
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
function Qg(e, t, n, r, i, a) {
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
    d = [new V(), new V(), new V(), new V()],
    f = [new V(), new V(), new V(), new V()],
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
var $g = { color: 2503227, rough: 0.06, metal: 0.35 },
  e_ = { color: 1513498, rough: 0.78 },
  t_ = { color: 13225168, rough: 0.22, metal: 0.95 },
  n_ = { color: 1381653, rough: 0.95 },
  r_ = { color: 657930, rough: 1 },
  i_ = { color: 16777215, paint: 1, rough: 0.26, metal: 0.35 },
  a_ = { color: 16777215, paint: 4, rough: 0.45, metal: 0.2 },
  o_ = { color: 15921904, rough: 0.35, metal: 0.15 },
  s_ = { color: 16774882, light: $d.HEAD, rough: 0.1, metal: 0.3 },
  c_ = { color: 13637149, light: $d.TAIL, rough: 0.15 },
  l_ = { color: 14685725, light: $d.BRAKE, rough: 0.15 },
  u_ = { color: 16753178, light: $d.IND_L, rough: 0.2 },
  d_ = { color: 16753178, light: $d.IND_R, rough: 0.2 },
  f_ = { color: 15921906, light: $d.REVERSE, rough: 0.2 },
  p_ = { color: 16777215, light: $d.PLATE, rough: 0.5 },
  m_ = { color: 14067847, rough: 0.8 },
  h_ = (e, t, n) => (e < t ? t : e > n ? n : e);
function g_(e, t, n, r, i, a, o, s, c = !0, l) {
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
function __(e, t, n, r, i, a, o, s, c) {
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
function v_(e, t, n, r, i, a = 0.34, o = 0.15) {
  __(e, t, -a / 2, a / 2, n - o / 2, n + o / 2, Yd.plate(r), p_, i);
}
function y_(e, t, n, r, i, a, o, s, c) {
  (e.style(t),
    e.box(-n, r, i, a, o, s, ``),
    c && e.style(c),
    e.box(n, r, i, a, o, s, ``));
}
