// tokyo__assets__region-tokyo-d-nihonbashi-DhEI_3CD 03 — math
// Lines 1369-1566 of readable/tokyo__assets__region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
function P(e, t = 1) {
  let n = st.get(e);
  if (!n) throw Error(`[nihonbashi] no atlas cell '${e}'`);
  let [r, i, a, o] = n;
  return {
    u0: (r + t) / T,
    u1: (r + a - t) / T,
    v1: 1 - (i + t) / ct,
    v0: 1 - (i + o - t) / ct,
  };
}
function lt(e) {
  let t = et.findIndex(([t]) => t === e);
  if (t < 0) throw Error(`[nihonbashi] no swatch '${e}'`);
  let [n, r, i, a] = st.get(`swatches`),
    o = i / et.length;
  return { u: (n + (t + 0.5) * o) / T, v: 1 - (r + a / 2) / ct };
}
function* ut(e, t, n) {
  (b(e, t),
    t.save(),
    t.setTransform(n, 0, 0, n, 0, 0),
    g(t, 0, 0, T, ct, `#202020`),
    t.restore());
  for (let e of at) {
    let [i, a, o, s] = st.get(e.id);
    (t.save(),
      t.setTransform(n, 0, 0, n, i * n, a * n),
      t.beginPath(),
      t.rect(0, 0, o, s),
      t.clip());
    let c = e.dw ? o / e.dw : 1;
    (t.scale(c, c),
      e.paint(t, o / c, s / c, new r(dt(e.id))),
      t.restore(),
      yield);
  }
}
function dt(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function ft(e = 8192) {
  let t = new o(e, e * 1.5);
  return ((t.remap = s.SIGN), { body: new o(e, e * 1.5), sign: t });
}
function F(e, t) {
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
function I(e, t, n, r) {
  let i = Math.sin(n),
    a = -Math.cos(n),
    o = a,
    s = -i;
  return {
    px: e - (r / 2) * o,
    pz: t - (r / 2) * s,
    tx: o,
    tz: s,
    nx: i,
    nz: a,
    L: r,
  };
}
var L = (e, t, n) => [e.px + e.tx * t + e.nx * n, e.pz + e.tz * t + e.nz * n],
  R = (e, t, n, r, i, a) => e.setInfo(t, (n & 15) | (r << 4), i & 255, a & 255);
function z(e, t, n, r, i, a, o, s, c, l, u) {
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
function pt(e, t, n, r, i, a, o, s, c, l) {
  i - r < 0.05 ||
    o - a < 0.05 ||
    z(
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
function B(e, t, n, r, i, a, o, s) {
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
function V(e, t, n, r, i, a, o, s) {
  let c = lt(s);
  e.solidBox(t, n, r, i, a, o, c.u, c.v);
}
function H(e, t, n, r, i, a, o, s, c) {
  let [l, u] = L(t, n, r),
    d = Math.abs(t.tx) * i + Math.abs(t.nx) * a,
    f = Math.abs(t.tz) * i + Math.abs(t.nz) * a;
  V(e, l - d, o, u - f, l + d, s, u + f, c);
}
function mt(e) {
  let t = lt(e);
  return { u0: t.u, u1: t.u, v0: t.v, v1: t.v };
}
function ht(e, t, n, r, i, a, o, s) {
  let c = lt(s);
  e.cylinder(t, n, r, i, a, o, 1, !1, c.u, c.v);
}
var gt = (e, t) => {
    let n =
      Math.imul(e ^ 2654435769, 2246822507) ^
      Math.imul(t + 2135587861, 3266489909);
    return ((n ^= n >>> 13), (Math.imul(n, 668265261) >>> 0) / 4294967296);
  },
  _t = {
    mitsu: 0.42,
    honkan: 0.3,
    taka: 0.4,
    finglass: 0.45,
    louvre: 0.6,
    stonegrid: 0.4,
    sheet: 0.25,
    darkstone: 0.5,
  };
