// tokyo/assets/actors-qKVitB-C 37 — math
// Lines 16448-16750 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function sf(e) {
  let t = Yd.get(e);
  if (t) return t;
  let n = Qd(e),
    r = $d(e),
    i = Xd.get(r);
  i || ((i = nn(Jd(e, n))), Zd && Xd.set(r, i));
  let a = i.attributes.position,
    o = i.attributes.normal,
    s = i.attributes.color,
    c = i.attributes.part,
    l = a.count,
    u = new Float32Array(l * 3),
    d = new Float32Array(l * 3),
    f = new Float32Array(l),
    p = new Float32Array(l * 3),
    m = new Uint8Array(l),
    h = -1 / 0;
  for (let e = 0; e < l; e++)
    Math.round(c.getX(e)) === Id && (h = Math.max(h, a.getY(e)));
  let g = 1 / 0,
    _ = -1 / 0,
    v = 1 / 0,
    y = -1 / 0;
  for (let e = 0; e < l; e++) {
    if (Math.round(c.getX(e)) !== Id) continue;
    let t = a.getY(e);
    t < h - 0.13 ||
      t > h - 0.03 ||
      ((g = Math.min(g, a.getX(e))),
      (_ = Math.max(_, a.getX(e))),
      (v = Math.min(v, a.getZ(e))),
      (y = Math.max(y, a.getZ(e))));
  }
  let b = e.passenger ? 0.95 : 1,
    x = new L(0, e.hipY + 0.05 - wd * b, e.hipZ),
    S = Math.asin(Math.min(0.92, e.lean / 0.46)),
    C = new I().setFromAxisAngle(new L(1, 0, 0), -S),
    w = new I().setFromAxisAngle(new L(1, 0, 0), S * 0.78).premultiply(C),
    T = new L(0, Md * b, 0).add(x),
    E = new L(0, jd * b, 0),
    D = E.clone()
      .sub(new L(0, Md * b, 0))
      .applyQuaternion(C)
      .add(T),
    O = (e, t) =>
      t
        .copy(e)
        .sub(new L(0, Md * b, 0))
        .applyQuaternion(C)
        .add(T),
    k = (e, t, n, r, i, a) => {
      let o = t.distanceTo(e),
        s = n.distanceTo(t),
        c = new L(),
        l = new L();
      of(r, i, o, s, a, c, l);
      let u = new I().setFromUnitVectors(
          t.clone().sub(e).normalize(),
          c.clone().sub(r).normalize(),
        ),
        d = n.clone().sub(t).normalize().applyQuaternion(u);
      return {
        r0: e,
        r1: t,
        r2: n,
        w0: r,
        w1: c,
        w2: l,
        q0: u,
        q1: new I()
          .setFromUnitVectors(d, l.clone().sub(c).normalize())
          .multiply(u),
      };
    },
    A = b,
    j = [],
    M = [];
  for (let t of [-1, 1]) {
    let n = new L(t * Ed * A, Dd * A, 0),
      r = new L(t * Od * A, kd * A, 0),
      i = new L(t * 0.217 * A, Ad * A, 0),
      a = O(n, new L()),
      o = new L(t * e.hand[0], e.hand[1] + 0.02, e.hand[2] + 0.07);
    j.push(k(n, r, i, a, o, new L(t * 0.7, -0.75, 0.25)));
    let s = new L(t * Cd * A, wd * A, 0),
      c = new L(t * Cd * A, Td * A, 0),
      l = new L(t * Cd * A, Nd * A, 0),
      u = s.clone().add(x),
      d = new L(t * e.foot[0], e.foot[1] + 0.07, e.foot[2] + 0.07);
    M.push(k(s, c, l, u, d, new L(t * 0.35, 0.45, -1)));
  }
  let ee = new I().setFromAxisAngle(new L(1, 0, 0), -0.18),
    te = new L(),
    ne = new L();
  for (let e = 0; e < l; e++) {
    (te.set(a.getX(e) * A, a.getY(e) * A, a.getZ(e) * A),
      ne.set(o.getX(e), o.getY(e), o.getZ(e)));
    let t = Math.round(c.getX(e));
    switch ((te.x, (m[e] = +(t === Id)), t)) {
      case Fd:
        (O(te, te), ne.applyQuaternion(C));
        break;
      case Id:
        (te.sub(E).applyQuaternion(w).add(D), ne.applyQuaternion(w));
        break;
      case Ld:
      case zd: {
        let e = j[t === Ld ? 0 : 1];
        (te.sub(e.r0).applyQuaternion(e.q0).add(e.w0),
          ne.applyQuaternion(e.q0));
        break;
      }
      case Rd:
      case Bd: {
        let e = j[t === Rd ? 0 : 1];
        (te.sub(e.r1).applyQuaternion(e.q1).add(e.w1),
          ne.applyQuaternion(e.q1));
        break;
      }
      case Vd:
      case Ud: {
        let e = M[t === Vd ? 0 : 1];
        (te.sub(e.r0).applyQuaternion(e.q0).add(e.w0),
          ne.applyQuaternion(e.q0));
        break;
      }
      case Hd:
      case Wd: {
        let e = M[t === Hd ? 0 : 1];
        te.y < Nd * A + 0.035
          ? (te.sub(e.r2).applyQuaternion(ee).add(e.w2), ne.applyQuaternion(ee))
          : (te.sub(e.r1).applyQuaternion(e.q1).add(e.w1),
            ne.applyQuaternion(e.q1));
        break;
      }
      case Pd:
      default:
        te.add(x);
    }
    ((u[e * 3] = te.x),
      (u[e * 3 + 1] = te.y),
      (u[e * 3 + 2] = te.z),
      ne.normalize(),
      (d[e * 3] = ne.x),
      (d[e * 3 + 1] = ne.y),
      (d[e * 3 + 2] = ne.z));
    let n = s.getX(e),
      r = s.getY(e),
      i = s.getZ(e),
      l = nf(n, r, i);
    if (((f[e] = l), l)) {
      let t = Math.min(1, Math.max(n, r, i) * 1.05);
      ((p[e * 3] =
        p[e * 3 + 1] =
        p[e * 3 + 2] =
          l === 6 ? Math.min(1, t * 0.93) : t),
        l === 6 && (p[e * 3 + 2] = Math.min(1, t)));
    } else ((p[e * 3] = n), (p[e * 3 + 1] = r), (p[e * 3 + 2] = i));
  }
  t = cf(u, d, p, f, m, i.index.array, e.passenger ? 0.068 : 0.036);
  let N = new L(((g + _) / 2) * A, (h - 0.1) * A, ((v + y) / 2 + 0.008) * A),
    re = new L(((_ - g) / 2 + 0.034) * A, 0.128 * A, ((y - v) / 2 + 0.03) * A);
  return (
    (t.userData.helmet = df(
      N,
      re,
      !!e.fullFace,
      e.passenger ? 10 : 14,
      e.passenger ? 4 : 5,
      (e, t) => {
        (e.sub(E).applyQuaternion(w).add(D), t.applyQuaternion(w));
      },
    )),
    Yd.set(e, t),
    t
  );
}
function cf(e, t, n, r, i, a, o) {
  let s = r.length,
    c = new Int32Array(s),
    l = lf(s * 2),
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
  let v = lf((a.length / 3) * 2),
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
  let w = new pe();
  (w.setAttribute(`position`, new P(m, 3)),
    w.setAttribute(`normal`, new P(h, 3)),
    w.setAttribute(`color`, new P(g, 3)),
    w.setAttribute(`key`, new P(_, 1)));
  let T = C >= 65535 ? new Uint32Array(S) : new Uint16Array(S);
  for (let e = 0; e < S; e++) T[e] = x[e];
  return (w.setIndex(new P(T, 1)), w);
}
var lf = (e) => {
  let t = 16;
  for (; t < e;) t *= 2;
  return t;
};
