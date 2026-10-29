// tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S 04 — math
// Lines 1037-1218 of readable/tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S.pretty.js (statement-aligned).
function H(e, t = 1) {
  let n = et.get(e);
  if (!n) throw Error(`[ginza] no atlas cell '${e}'`);
  let [r, i, a, o] = n;
  return {
    u0: (r + t) / P,
    u1: (r + a - t) / P,
    v1: 1 - (i + t) / F,
    v0: 1 - (i + o - t) / F,
  };
}
function U(e) {
  let t = B.findIndex(([t]) => t === e),
    [n, r, i, a] = et.get(`swatches`),
    o = i / B.length;
  return { u: (n + (Math.max(0, t) + 0.5) * o) / P, v: 1 - (r + a / 2) / F };
}
function* tt(e, t, n) {
  (ne(e, t),
    t.save(),
    t.setTransform(n, 0, 0, n, 0, 0),
    A(t, 0, 0, P, F, `#202020`),
    t.restore());
  for (let e of $e) {
    let [r, a, o, s] = et.get(e.id);
    (t.save(),
      t.setTransform(n, 0, 0, n, r * n, a * n),
      t.beginPath(),
      t.rect(0, 0, o, s),
      t.clip());
    let c = e.dw ? o / e.dw : 1;
    (t.scale(c, c),
      e.paint(t, o / c, s / c, new i(nt(e.id))),
      t.restore(),
      yield);
  }
}
function nt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function rt(e = 8192) {
  let t = new d(e, e * 1.5);
  t.remap = u.SIGN;
  let n = new d(256, 512);
  return (
    (n.remap = u.SCREEN),
    { body: new d(e, e * 1.5), sign: t, screen: n }
  );
}
function it(e, t) {
  switch (t) {
    case 0:
      return {
        px: e.x1,
        pz: e.z0,
        tx: -1,
        tz: 0,
        nx: 0,
        nz: -1,
        L: e.x1 - e.x0,
      };
    case 1:
      return {
        px: e.x1,
        pz: e.z1,
        tx: 0,
        tz: -1,
        nx: 1,
        nz: 0,
        L: e.z1 - e.z0,
      };
    case 2:
      return { px: e.x0, pz: e.z1, tx: 1, tz: 0, nx: 0, nz: 1, L: e.x1 - e.x0 };
    default:
      return {
        px: e.x0,
        pz: e.z0,
        tx: 0,
        tz: 1,
        nx: -1,
        nz: 0,
        L: e.z1 - e.z0,
      };
  }
}
var W = (e, t, n, r, i, a) =>
  e.setInfo(t, (n & 15) | (r << 4), i & 255, a & 255);
function G(e, t, n, r, i, a, o, s, c, l, u) {
  e.wall(
    t.px + t.tx * r + t.nx * n,
    t.pz + t.tz * r + t.nz * n,
    t.tx,
    t.tz,
    i - r,
    a,
    o,
    s,
    c,
    l,
    u,
  );
}
function K(e, t, n, r, i, a, o, s, c, l) {
  i - r < 0.05 ||
    o - a < 0.05 ||
    G(
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      0,
      Math.max(1, Math.round((i - r) / s)),
      (a - l) / c,
      (o - l) / c,
    );
}
function q(e, t, n, r, i, a, o, s) {
  let c = t.px + t.tx * r + t.nx * n,
    l = t.pz + t.tz * r + t.nz * n,
    u = t.px + t.tx * i + t.nx * n,
    d = t.pz + t.tz * i + t.nz * n;
  e.quad4(
    c,
    a,
    l,
    u,
    a,
    d,
    u,
    o,
    d,
    c,
    o,
    l,
    t.nx,
    0,
    t.nz,
    s.u0,
    s.v0,
    s.u1,
    s.v0,
    s.u1,
    s.v1,
    s.u0,
    s.v1,
  );
}
function J(e, t, n, r, i, a, o, s) {
  let c = U(s);
  e.solidBox(t, n, r, i, a, o, c.u, c.v);
}
var Y = (e, t) => {
    let n =
      Math.imul(e ^ 2654435769, 2246822507) ^
      Math.imul(t + 2135587861, 3266489909);
    return ((n ^= n >>> 13), (Math.imul(n, 668265261) >>> 0) / 4294967296);
  },
  at = {
    glassblock: 0.42,
    ledmesh: 0.85,
    pearl: 0.36,
    lattice: 0.4,
    goldfin: 0.7,
    wave: 0.3,
    aqua: 0.4,
    gridwhite: 0.26,
    whitebox: 0.26,
    brickwash: 0.5,
    stonewash: 0.42,
    glassfloors: 0.38,
    eaves: 0.5,
    cylinder: 0.45,
    depato: 0.4,
    seigaiha: 0.36,
    sheet: 0.25,
  };
