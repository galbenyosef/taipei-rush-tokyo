// tokyo__assets__region-tokyo-BcM3fReU 21 — path
// Lines 15339-15659 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ll(e, t, n) {
  for (let r of cl)
    if (
      e > r.x0 &&
      e < r.x1 &&
      Math.min(t, n) >= r.z0 &&
      Math.max(t, n) <= r.z1
    )
      return !0;
  return !1;
}
function ul(e, t, n, r) {
  for (let i of al) if (n > i.x0 && e < i.x1 && r > i.z0 && t < i.z1) return !0;
  return !1;
}
var dl = [
  { id: `tnm`, x0: -287.1, z0: -1406, x1: -204.9, z1: -1353 },
  { id: `saigo`, x0: -175.5, z0: -1231, x1: -160.5, z1: -1214.8 },
];
function fl(e, t, n = 0) {
  for (let r of dl)
    if (e > r.x0 - n && e < r.x1 + n && t > r.z0 - n && t < r.z1 + n) return !0;
  return !1;
}
var pl = { n: 3, w: 0.92, d: 0.62, h: 1.72, gap: 0.55 },
  ml = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  hl = 1.2,
  gl = 0.55,
  _l = 1.55,
  vl = 1.15,
  yl = 9,
  bl = 1.3;
function bee(e, t) {
  let n = Tc[t.id];
  if (!n) return [t.sc - 40, t.sc + 40];
  e.path.pos(t.sc, 0, H);
  let r = e.path.project(H.x, n[0]).s,
    i = e.path.project(H.x, n[1]).s;
  return [Math.min(r, i, t.sc - 40), Math.max(r, i, t.sc + 40)];
}
var xee = `tokyo-arch`;
function xl(e, t, n) {
  return new ne(P(xee, e.id, Math.round(t), n));
}
function Sl(e, t) {
  return e.platforms.some(
    (e) => e.rideable && t + 8 > e.sc - 40 && t < e.sc + 40,
  );
}
function Cl(e, t, n) {
  return Sl(e, t) || xl(e, t, n).next() < 0.45;
}
var wl = 14.3,
  Tl = {
    conc: [176, 172, 164],
    concDark: [138, 135, 128],
    concUnder: [120, 117, 110],
    parapet: [186, 183, 175],
    girder: [118, 136, 146],
    girderDark: [86, 100, 108],
    ballast: [104, 96, 86],
    slabTrack: [150, 148, 142],
    sleeper: [92, 90, 86],
    rail: [118, 112, 104],
    railTop: [186, 186, 190],
    brick: [255, 255, 255],
    brickDark: [150, 110, 96],
    mast: [92, 98, 102],
    platform: [168, 166, 160],
    platEdge: [236, 236, 230],
    tactile: [228, 196, 40],
    canopy: [220, 222, 222],
    canopyUnder: [196, 198, 198],
    canopyCol: [126, 132, 136],
    psd: [222, 224, 226],
    psdGate: [196, 202, 206],
    psdTop: [150, 156, 160],
    stationWall: [206, 202, 194],
    glass: [58, 72, 84],
    hood: [168, 166, 160],
    shutter: [120, 122, 124],
  },
  El = (e, t, n = 1) => e.setColor(V(t[0] * n), V(t[1] * n), V(t[2] * n)),
  Dl = { x: 0, z: 0, tx: 0, tz: 1 },
  Ol = { u0: 0, v0: 0, u1: 0, v1: 0 },
  kl = Ol,
  H = { x: 0, z: 0 };
function Al(e, t, n) {
  return (e.path.pos(t, n, H), H);
}
function jl(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 1, m = 0, h = 1) {
  t.path.pos(n, i, H);
  let g = H.x,
    _ = H.z;
  t.path.pos(r, a, H);
  let v = H.x,
    y = H.z,
    b = d ?? kl,
    x = b.u0 + (b.u1 - b.u0) * f,
    S = b.u0 + (b.u1 - b.u0) * p,
    C = b.v0 + (b.v1 - b.v0) * m,
    w = b.v0 + (b.v1 - b.v0) * h;
  u > 0
    ? e.quad(g, o, _, v, c, y, v, l, y, g, s, _, x, C, S, w)
    : e.quad(v, c, y, g, o, _, g, s, _, v, l, y, S, C, x, w);
}
function Ml(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
  let h = n;
  for (; h < r - 1e-4;) {
    let g = Math.floor(h / f + 1e-6) * f,
      _ = Math.min(r, g + f),
      v = (h - n) / (r - n),
      y = (_ - n) / (r - n);
    (jl(
      e,
      t,
      h,
      _,
      i + (a - i) * v,
      i + (a - i) * y,
      o + (c - o) * v,
      s + (l - s) * v,
      o + (c - o) * y,
      s + (l - s) * y,
      u,
      d,
      (h - g) / f,
      (_ - g) / f,
      p,
      m,
    ),
      (h = _));
  }
}
function Nl(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = n;
  for (; f < r - 1e-4;) {
    let p = Math.floor(f / d + 1e-6) * d,
      m = Math.min(r, p + d),
      h = (f - n) / (r - n),
      g = (m - n) / (r - n);
    t.path.pos(f, i + (a - i) * h, H);
    let _ = H.x,
      v = H.z;
    t.path.pos(f, o + (s - o) * h, H);
    let y = H.x,
      b = H.z;
    t.path.pos(m, i + (a - i) * g, H);
    let x = H.x,
      S = H.z;
    t.path.pos(m, o + (s - o) * g, H);
    let C = H.x,
      w = H.z,
      T = c + (l - c) * h,
      E = c + (l - c) * g,
      D = u.v0 + (u.v1 - u.v0) * ((f - p) / d),
      O = u.v0 + (u.v1 - u.v0) * ((m - p) / d);
    (e.vertex(_, T, v, 0, 1, 0, u.u0, D),
      e.vertex(y, T, b, 0, 1, 0, u.u1, D),
      e.vertex(C, E, w, 0, 1, 0, u.u1, O),
      e.vertex(x, E, S, 0, 1, 0, u.u0, O));
    let k = e.n - 4;
    (e.tri(k, k + 1, k + 2).tri(k, k + 2, k + 3), (f = m));
  }
}
function Pl(e, t, n, r, i, a, o, s, c = !0, l) {
  t.path.pos(n, i, H);
  let u = H.x,
    d = H.z;
  t.path.pos(n, a, H);
  let f = H.x,
    p = H.z;
  t.path.pos(r, i, H);
  let m = H.x,
    h = H.z;
  t.path.pos(r, a, H);
  let g = H.x,
    _ = H.z,
    v = (l ?? kl).u0,
    y = (l ?? kl).u1,
    b = (l ?? kl).v0,
    x = (l ?? kl).v1;
  c
    ? e.quad(u, o, d, f, o, p, g, s, _, m, s, h, v, b, y, x)
    : e.quad(m, s, h, g, s, _, f, o, p, u, o, d, v, b, y, x);
}
function Fl(e, t, n, r, i, a, o, s, c) {
  t.path.pos(n, r, H);
  let l = H.x,
    u = H.z;
  t.path.pos(n, i, H);
  let d = H.x,
    f = H.z,
    p = (c ?? kl).u0,
    m = (c ?? kl).u1,
    h = (c ?? kl).v0,
    g = (c ?? kl).v1;
  s > 0
    ? e.quad(d, a, f, l, a, u, l, o, u, d, o, f, p, h, m, g)
    : e.quad(l, a, u, d, a, f, d, o, f, l, o, u, p, h, m, g);
}
function Il(e, t, n, r, i, a, o, s, c) {
  t.path.at(n, Dl);
  let l = Dl.tx,
    u = Dl.tz,
    d = -u,
    f = l;
  t.path.pos(n, r, H);
  let p = H.x,
    m = H.z,
    h = (c ?? kl).u0,
    g = (c ?? kl).u1,
    _ = (c ?? kl).v0,
    v = (c ?? kl).v1,
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
function Ll(e, t, n, r, i, a, o, s, c) {
  let l = a / 2;
  (t.path.at(n, Dl), t.path.pos(n, r, H));
  let u = Dl.tx,
    d = Dl.tz,
    f = H.x - u * l,
    p = H.z - d * l,
    m = H.x + u * l,
    h = H.z + d * l,
    g = o + s;
  i > 0
    ? e.quad(f, o, p, m, o, h, m, g, h, f, g, p, c.u0, c.v0, c.u1, c.v1)
    : e.quad(m, o, h, f, o, p, f, g, p, m, g, h, c.u0, c.v0, c.u1, c.v1);
}
