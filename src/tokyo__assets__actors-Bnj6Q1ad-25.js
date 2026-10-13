// tokyo__assets__actors-Bnj6Q1ad 25 — math
// Lines 12629-12928 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function El(e) {
  let t = hl.get(e);
  if (t) return t;
  let n = vl(e),
    r = yl(e),
    i = gl.get(r);
  i || ((i = Wt(ml(e, n))), _l && gl.set(r, i));
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
    Math.round(c.getX(e)) === nl && (h = Math.max(h, a.getY(e)));
  let g = 1 / 0,
    _ = -1 / 0,
    v = 1 / 0,
    b = -1 / 0;
  for (let e = 0; e < l; e++) {
    if (Math.round(c.getX(e)) !== nl) continue;
    let t = a.getY(e);
    t < h - 0.13 ||
      t > h - 0.03 ||
      ((g = Math.min(g, a.getX(e))),
      (_ = Math.max(_, a.getX(e))),
      (v = Math.min(v, a.getZ(e))),
      (b = Math.max(b, a.getZ(e))));
  }
  let x = e.passenger ? 0.95 : 1,
    S = new R(0, e.hipY + 0.05 - Wc * x, e.hipZ),
    C = Math.asin(Math.min(0.92, e.lean / 0.46)),
    w = new y().setFromAxisAngle(new R(1, 0, 0), -C),
    T = new y().setFromAxisAngle(new R(1, 0, 0), C * 0.78).premultiply(w),
    E = new R(0, Qc * x, 0).add(S),
    D = new R(0, Zc * x, 0),
    O = D.clone()
      .sub(new R(0, Qc * x, 0))
      .applyQuaternion(w)
      .add(E),
    k = (e, t) =>
      t
        .copy(e)
        .sub(new R(0, Qc * x, 0))
        .applyQuaternion(w)
        .add(E),
    A = (e, t, n, r, i, a) => {
      let o = t.distanceTo(e),
        s = n.distanceTo(t),
        c = new R(),
        l = new R();
      Tl(r, i, o, s, a, c, l);
      let u = new y().setFromUnitVectors(
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
        q1: new y()
          .setFromUnitVectors(d, l.clone().sub(c).normalize())
          .multiply(u),
      };
    },
    j = x,
    M = [],
    N = [];
  for (let t of [-1, 1]) {
    let n = new R(t * Kc * j, qc * j, 0),
      r = new R(t * Jc * j, Yc * j, 0),
      i = new R(t * 0.217 * j, Xc * j, 0),
      a = k(n, new R()),
      o = new R(t * e.hand[0], e.hand[1] + 0.02, e.hand[2] + 0.07);
    M.push(A(n, r, i, a, o, new R(t * 0.7, -0.75, 0.25)));
    let s = new R(t * Uc * j, Wc * j, 0),
      c = new R(t * Uc * j, Gc * j, 0),
      l = new R(t * Uc * j, $c * j, 0),
      u = s.clone().add(S),
      d = new R(t * e.foot[0], e.foot[1] + 0.07, e.foot[2] + 0.07);
    N.push(A(s, c, l, u, d, new R(t * 0.35, 0.45, -1)));
  }
  let P = new y().setFromAxisAngle(new R(1, 0, 0), -0.18),
    F = new R(),
    ee = new R();
  for (let e = 0; e < l; e++) {
    (F.set(a.getX(e) * j, a.getY(e) * j, a.getZ(e) * j),
      ee.set(o.getX(e), o.getY(e), o.getZ(e)));
    let t = Math.round(c.getX(e));
    switch ((F.x, (m[e] = +(t === nl)), t)) {
      case tl:
        (k(F, F), ee.applyQuaternion(w));
        break;
      case nl:
        (F.sub(D).applyQuaternion(T).add(O), ee.applyQuaternion(T));
        break;
      case rl:
      case al: {
        let e = M[t === rl ? 0 : 1];
        (F.sub(e.r0).applyQuaternion(e.q0).add(e.w0), ee.applyQuaternion(e.q0));
        break;
      }
      case il:
      case ol: {
        let e = M[t === il ? 0 : 1];
        (F.sub(e.r1).applyQuaternion(e.q1).add(e.w1), ee.applyQuaternion(e.q1));
        break;
      }
      case sl:
      case ll: {
        let e = N[t === sl ? 0 : 1];
        (F.sub(e.r0).applyQuaternion(e.q0).add(e.w0), ee.applyQuaternion(e.q0));
        break;
      }
      case cl:
      case ul: {
        let e = N[t === cl ? 0 : 1];
        F.y < $c * j + 0.035
          ? (F.sub(e.r2).applyQuaternion(P).add(e.w2), ee.applyQuaternion(P))
          : (F.sub(e.r1).applyQuaternion(e.q1).add(e.w1),
            ee.applyQuaternion(e.q1));
        break;
      }
      case el:
      default:
        F.add(S);
    }
    ((u[e * 3] = F.x),
      (u[e * 3 + 1] = F.y),
      (u[e * 3 + 2] = F.z),
      ee.normalize(),
      (d[e * 3] = ee.x),
      (d[e * 3 + 1] = ee.y),
      (d[e * 3 + 2] = ee.z));
    let n = s.getX(e),
      r = s.getY(e),
      i = s.getZ(e),
      l = Sl(n, r, i);
    if (((f[e] = l), l)) {
      let t = Math.min(1, Math.max(n, r, i) * 1.05);
      ((p[e * 3] =
        p[e * 3 + 1] =
        p[e * 3 + 2] =
          l === 6 ? Math.min(1, t * 0.93) : t),
        l === 6 && (p[e * 3 + 2] = Math.min(1, t)));
    } else ((p[e * 3] = n), (p[e * 3 + 1] = r), (p[e * 3 + 2] = i));
  }
  t = Dl(u, d, p, f, m, i.index.array, e.passenger ? 0.068 : 0.036);
  let te = new R(((g + _) / 2) * j, (h - 0.1) * j, ((v + b) / 2 + 0.008) * j),
    ne = new R(((_ - g) / 2 + 0.034) * j, 0.128 * j, ((b - v) / 2 + 0.03) * j);
  return (
    (t.userData.helmet = Al(
      te,
      ne,
      !!e.fullFace,
      e.passenger ? 10 : 14,
      e.passenger ? 4 : 5,
      (e, t) => {
        (e.sub(D).applyQuaternion(T).add(O), t.applyQuaternion(T));
      },
    )),
    hl.set(e, t),
    t
  );
}
function Dl(e, t, n, r, i, a, o) {
  let s = r.length,
    c = new Int32Array(s),
    l = Ol(s * 2),
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
  let v = Ol((a.length / 3) * 2),
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
  let w = new fe();
  (w.setAttribute(`position`, new I(m, 3)),
    w.setAttribute(`normal`, new I(h, 3)),
    w.setAttribute(`color`, new I(g, 3)),
    w.setAttribute(`key`, new I(_, 1)));
  let T = C >= 65535 ? new Uint32Array(S) : new Uint16Array(S);
  for (let e = 0; e < S; e++) T[e] = x[e];
  return (w.setIndex(new I(T, 1)), w);
}
var Ol = (e) => {
  let t = 16;
  for (; t < e;) t *= 2;
  return t;
};
