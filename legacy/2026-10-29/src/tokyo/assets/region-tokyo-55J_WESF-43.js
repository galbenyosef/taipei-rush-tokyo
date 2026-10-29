// tokyo/assets/region-tokyo-55J_WESF 43 — path
// Lines 22143-22465 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function rl(e, t, n, r, i, a, o, s, c = !0, l) {
  t.path.pos(n, i, B);
  let u = B.x,
    d = B.z;
  t.path.pos(n, a, B);
  let f = B.x,
    p = B.z;
  t.path.pos(r, i, B);
  let m = B.x,
    h = B.z;
  t.path.pos(r, a, B);
  let g = B.x,
    _ = B.z,
    v = (l ?? Qc).u0,
    y = (l ?? Qc).u1,
    b = (l ?? Qc).v0,
    x = (l ?? Qc).v1;
  c
    ? e.quad(u, o, d, f, o, p, g, s, _, m, s, h, v, b, y, x)
    : e.quad(m, s, h, g, s, _, f, o, p, u, o, d, v, b, y, x);
}
function il(e, t, n, r, i, a, o, s, c) {
  t.path.pos(n, r, B);
  let l = B.x,
    u = B.z;
  t.path.pos(n, i, B);
  let d = B.x,
    f = B.z,
    p = (c ?? Qc).u0,
    m = (c ?? Qc).u1,
    h = (c ?? Qc).v0,
    g = (c ?? Qc).v1;
  s > 0
    ? e.quad(d, a, f, l, a, u, l, o, u, d, o, f, p, h, m, g)
    : e.quad(l, a, u, d, a, f, d, o, f, l, o, u, p, h, m, g);
}
function al(e, t, n, r, i, a, o, s, c) {
  t.path.at(n, Xc);
  let l = Xc.tx,
    u = Xc.tz,
    d = -u,
    f = l;
  t.path.pos(n, r, B);
  let p = B.x,
    m = B.z,
    h = (c ?? Qc).u0,
    g = (c ?? Qc).u1,
    _ = (c ?? Qc).v0,
    v = (c ?? Qc).v1,
    y = (e, t) => p + d * e + l * t,
    b = (e, t) => m + f * e + u * t;
  (e.quad(
    y(i, -s),
    a,
    b(i, -s),
    y(i, s),
    a,
    b(i, s),
    y(i, s),
    o,
    b(i, s),
    y(i, -s),
    o,
    b(i, -s),
    h,
    _,
    g,
    v,
  ),
    e.quad(
      y(-i, s),
      a,
      b(-i, s),
      y(-i, -s),
      a,
      b(-i, -s),
      y(-i, -s),
      o,
      b(-i, -s),
      y(-i, s),
      o,
      b(-i, s),
      h,
      _,
      g,
      v,
    ),
    e.quad(
      y(i, s),
      a,
      b(i, s),
      y(-i, s),
      a,
      b(-i, s),
      y(-i, s),
      o,
      b(-i, s),
      y(i, s),
      o,
      b(i, s),
      h,
      _,
      g,
      v,
    ),
    e.quad(
      y(-i, -s),
      a,
      b(-i, -s),
      y(i, -s),
      a,
      b(i, -s),
      y(i, -s),
      o,
      b(i, -s),
      y(-i, -s),
      o,
      b(-i, -s),
      h,
      _,
      g,
      v,
    ),
    e.quad(
      y(-i, -s),
      o,
      b(-i, -s),
      y(i, -s),
      o,
      b(i, -s),
      y(i, s),
      o,
      b(i, s),
      y(-i, s),
      o,
      b(-i, s),
      h,
      _,
      g,
      v,
    ));
}
function ol(e, t, n, r, i, a, o, s, c) {
  let l = a / 2;
  (t.path.at(n, Xc), t.path.pos(n, r, B));
  let u = Xc.tx,
    d = Xc.tz,
    f = B.x - u * l,
    p = B.z - d * l,
    m = B.x + u * l,
    h = B.z + d * l,
    g = o + s;
  i > 0
    ? e.quad(f, o, p, m, o, h, m, g, h, f, g, p, c.u0, c.v0, c.u1, c.v1)
    : e.quad(m, o, h, f, o, p, f, g, p, m, g, h, c.u0, c.v0, c.u1, c.v1);
}
function sl(e, t, n, r, i, a, o, s, c) {
  (t.path.at(n, Xc), t.path.pos(n, r, B));
  let l = -Xc.tz,
    u = Xc.tx,
    d = a / 2,
    f = o + s;
  i > 0
    ? e.quad(
        B.x + l * d,
        o,
        B.z + u * d,
        B.x - l * d,
        o,
        B.z - u * d,
        B.x - l * d,
        f,
        B.z - u * d,
        B.x + l * d,
        f,
        B.z + u * d,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      )
    : e.quad(
        B.x - l * d,
        o,
        B.z - u * d,
        B.x + l * d,
        o,
        B.z + u * d,
        B.x + l * d,
        f,
        B.z + u * d,
        B.x - l * d,
        f,
        B.z - u * d,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      );
}
var cl = (e, t) =>
    e.kinds[Math.max(0, Math.min(e.kinds.length - 1, Math.floor(t)))],
  ll = (e, t, n) => Math.max(0, e.groundHeight(t, n)),
  ul = (e, t, n) => {
    let r = e.surfaceAt(t, n);
    return (
      r !== `road` && r !== `crosswalk` && r !== `sidewalk` && r !== `water`
    );
  };
function dl(e, t, n, r) {
  return ml(
    e,
    t,
    pl(e, `p${n}`, () => {
      let t = [],
        r = e.draw1,
        i = e.draw0;
      for (; i < r - 1e-6;) {
        let a = cl(e, i),
          o = Math.min(r, i + n);
        for (let t = Math.floor(i) + 1; t < o; t++)
          if (cl(e, t) !== a) {
            o = t;
            break;
          }
        (o - i < 0.05 && (o = Math.min(r, i + 1)), t.push(i, o), (i = o));
      }
      return t;
    }),
    r,
  );
}
var fl = new WeakMap();
function pl(e, t, n) {
  let r = fl.get(e);
  r || fl.set(e, (r = new Map()));
  let i = r.get(t);
  if (!i) {
    let a = n(),
      o = new Int32Array(a.length / 2);
    for (let t = 0; t < a.length; t += 2)
      (e.path.pos((a[t] + a[t + 1]) / 2, 0, B), (o[t / 2] = dc(B.x, B.z)));
    r.set(t, (i = { se: new Float32Array(a), key: o }));
  }
  return i;
}
function ml(e, t, n, r) {
  r.length = 0;
  for (let e = 0; e < n.key.length; e++)
    n.key[e] === t.key && r.push(n.se[e * 2], n.se[e * 2 + 1]);
  return r;
}
var hl = [],
  gl = [];
function jie(e, t, n, r, i) {
  return ml(
    e,
    t,
    pl(e, `t${n}:${r}`, () => Mie(e, n, r)),
    i,
  );
}
function Mie(e, t, n) {
  let r = [],
    i = e.draw1,
    a = e.draw0,
    o = { x: 0, z: 0, tx: 0, tz: 1 };
  for (; a < i - 1e-6;) {
    e.path.at(a, o);
    let s = o.tx,
      c = o.tz,
      l = Math.min(i, a + t);
    for (let t = a + 2; t < l; t += 2) {
      e.path.at(t, Xc);
      let r =
        Math.abs(Math.atan2(s * Xc.tz - c * Xc.tx, s * Xc.tx + c * Xc.tz)) > n;
      if (!r)
        for (let n of e.tracks) {
          let e = n.off.at(a),
            i = n.off.at(t),
            o = n.off.at((a + t) / 2);
          if (Math.abs(o - (e + i) / 2) > 0.04) {
            r = !0;
            break;
          }
        }
      if (r) {
        l = Math.max(a + 2, t - 2);
        break;
      }
    }
    (r.push(a, l), (a = l));
  }
  return r;
}
function _l(e, t) {
  for (let n = e.draw0; n <= e.draw1; n += 32)
    if (
      (e.path.pos(n, 0, B),
      B.x > t.minX - 40 &&
        B.x < t.maxX + 40 &&
        B.z > t.minZ - 40 &&
        B.z < t.maxZ + 40)
    )
      return !0;
  return !1;
}
function* vl(e, t, n) {
  Qc = Zc;
  for (let r of t.m.corridors)
    if (_l(r, n)) {
      dl(r, n, 12, hl);
      for (let n = 0; n < hl.length; n += 2)
        (Nie(e, t, r, hl[n], hl[n + 1]), t.due() && (yield));
      for (let i of r.platforms)
        (r.path.pos(i.sc, 0, B),
          zc(n, B.x, B.z) && (Fie(e, r, i), jl(e, t, r, i, null)));
      r.hood &&
        (r.path.pos((r.hood[0] + r.hood[1]) / 2, 0, B),
        zc(n, B.x, B.z) && yl(e, r, !1));
    }
  for (let r of t.entrances) !r.bare && zc(n, r.cx, r.cz) && Iie(e, r);
}
