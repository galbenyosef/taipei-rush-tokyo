// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 06 — math
// Lines 1490-1717 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function G(e, r, i, a, o, s, c, l = {}) {
  let u = new t(n(`asa-row`, e)),
    d = [],
    f = [],
    [p, m] = l.floors ?? [2, 4],
    h = l.kinds ?? [0, 1, 2, 3],
    [g, _] = l.width ?? [4.6, 7.6],
    v = [...(l.fixed ?? [])],
    y = [...(l.tail ?? [])],
    b = y.reduce((e, t) => e + t[0], 0),
    x = i,
    S = (e, t, n, i, a) => {
      let c = r === `W` ? [o, o + s] : r === `E` ? [o - s, o] : null,
        d = r === `N` ? [o, o + s] : r === `S` ? [o - s, o] : null,
        p = h[Math.floor(u.next() * h.length)],
        m = p === 0 ? Math.min(a, 3) : a;
      f.push({
        x0: c ? c[0] : e,
        x1: c ? c[1] : t,
        z0: d ? d[0] : e,
        z1: d ? d[1] : t,
        face: r,
        trade: n,
        name: i,
        floors: m,
        h: ot(m),
        fac: p * 3 + Math.floor(u.next() * 3),
        shut: Math.floor(u.next() * 6),
        sode: m >= 2 && u.next() < 0.55,
        lanterns: !!n.lantern && u.next() < 0.8,
        arcade: !!l.arcade,
        endMin: !1,
        endMax: !1,
      });
    },
    C = () => Math.max(p, Math.min(m, p + Math.floor(u.next() * (m - p + 1))));
  for (let [e, t, n, r] of v) {
    let i = c(t);
    (S(x, x + e, i, n ?? i.names[0], r ?? C()), (x += e));
  }
  let w = a - b;
  for (; x < w - 0.5;) {
    let e = u.range(g, _);
    w - (x + e) < g * 0.8 && (e = w - x);
    let t = st(u, d);
    (S(x, x + e, t.trade, t.name, C()), (x += e));
  }
  x = w;
  for (let [e, t, n, r] of y.reverse()) {
    let i = c(t);
    (S(x, x + e, i, n ?? i.names[0], r ?? C()), (x += e));
  }
  return (
    f.length && ((f[0].endMin = !0), (f[f.length - 1].endMax = !0)),
    { id: e, units: f }
  );
}
function ct(e, t) {
  for (let n of t)
    for (let t of n.units)
      (e.need(`shop:board:${t.name}`, 320, 64, Ie(t.trade, t.name)),
        t.sode && e.need(`shop:sode:${t.name}`, 48, 176, Le(t.trade, t.name)),
        e.need(`shop:int:${t.trade.id}`, 256, 144, Re(t.trade)),
        e.need(`shop:goods:${t.trade.id}`, 256, 96, ze(t.trade)),
        t.trade.front === `noren` &&
          e.need(
            `shop:noren:${t.trade.id}`,
            128,
            64,
            Be(t.trade, t.trade.sub ?? t.name),
          ),
        t.trade.lantern &&
          e.need(`lantern:${t.trade.lantern}`, 64, 96, Ue(t.trade.lantern)),
        t.trade.id === `tokiwakado` &&
          e.need(
            `lantern:asa.shop.tokiwakado.lantern`,
            96,
            144,
            Ue(`asa.shop.tokiwakado.lantern`),
          ));
  for (let t = 0; t < 12; t++) e.need(`fac:${t}`, 224, 160, He(t));
  for (let t = 0; t < 6; t++) e.need(`shop:shut:${t}`, 160, 128, Ve(t));
  (e.need(
    `aboard:kimono`,
    96,
    144,
    Ge(`asa.shop.kimono.price`, `asa.shop.kimono.walk`, `#f6f0f2`, `#8a1a4a`),
  ),
    e.need(
      `aboard:ningyo`,
      96,
      144,
      Ge(`asa.shop.ningyoyaki.price`, `asa.shop.ningyoyaki.fresh`),
    ),
    e.need(`aboard:matcha`, 96, 144, Ge(`asa.shop.matcha.sub`, ``, `#2f4a2a`)),
    e.need(
      `panel:kimono`,
      256,
      64,
      qe(
        `asa.shop.kimono.price`,
        `asa.shop.kimono.walk`,
        `#8a1a4a`,
        `#ffffff`,
        `#ffe0ec`,
      ),
    ));
}
function lt(e) {
  switch (e.face) {
    case `W`:
      return {
        lx: e.x0,
        lz: e.z0,
        rx: e.x0,
        rz: e.z1,
        nx: -1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `E`:
      return {
        lx: e.x1,
        lz: e.z1,
        rx: e.x1,
        rz: e.z0,
        nx: 1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `N`:
      return {
        lx: e.x1,
        lz: e.z0,
        rx: e.x0,
        rz: e.z0,
        nx: 0,
        nz: -1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
    default:
      return {
        lx: e.x0,
        lz: e.z1,
        rx: e.x1,
        rz: e.z1,
        nx: 0,
        nz: 1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
  }
}
var K = (e, t, n) => [
  e.lx + (e.rx - e.lx) * t + e.nx * n,
  e.lz + (e.rz - e.lz) * t + e.nz * n,
];
function q(e, t, n, r, i, a, o, s) {
  let [c, l] = K(t, n, i),
    [u, d] = K(t, r, i);
  R(e, c, l, u, d, a, o, s);
}
function J(e, t, n, r, i, a, o, s, c, l = !1) {
  let [u, d] = K(t, n, i),
    [f, p] = K(t, r, i),
    [m, h] = K(t, r, o),
    [g, _] = K(t, n, o);
  l
    ? e.quad(u, a, d, f, a, p, m, s, h, g, s, _, c.u0, c.v0, c.u1, c.v1)
    : e.quad(g, s, _, m, s, h, f, a, p, u, a, d, c.u0, c.v0, c.u1, c.v1);
}
var ut = [
  14209732, 13222578, 12171440, 14077368, 11052186, 13617340, 14736591,
  11576976, 10133664, 11050122,
];
function dt(e, t, n, r, i, a, o = 0.2, s = 0.52) {
  (e.setMaterial(0.7, 0, 0.55, 3), L(e, 16777215));
  let c = i.u1 - i.u0;
  for (let a = 0; a < 8; a++) {
    let l = (a / 8) * Math.PI * 2,
      u = ((a + 1) / 8) * Math.PI * 2,
      d = (a % 4) / 4,
      f = ((a % 4) + 1) / 4;
    e.quad(
      t + Math.cos(u) * o,
      n,
      r + Math.sin(u) * o,
      t + Math.cos(l) * o,
      n,
      r + Math.sin(l) * o,
      t + Math.cos(l) * o,
      n + s,
      r + Math.sin(l) * o,
      t + Math.cos(u) * o,
      n + s,
      r + Math.sin(u) * o,
      i.u0 + c * (1 - f),
      i.v0,
      i.u0 + c * (1 - d),
      i.v1,
    );
  }
  (e.setMaterial(0.6, 0, 0, 0),
    L(e, 1315860),
    z(
      e,
      t - o * 0.75,
      n - 0.05,
      r - o * 0.75,
      t + o * 0.75,
      n + 0.02,
      r + o * 0.75,
      a,
    ),
    z(
      e,
      t - o * 0.75,
      n + s - 0.02,
      r - o * 0.75,
      t + o * 0.75,
      n + s + 0.05,
      r + o * 0.75,
      a,
    ));
}
