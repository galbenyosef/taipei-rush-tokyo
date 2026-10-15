// tokyo/assets/region-tokyo-d-marunouchi-I3NX4HcD 11 — need
// Lines 3077-3132 of readable/tokyo/assets/region-tokyo-d-marunouchi-I3NX4HcD.pretty.js (statement-aligned).
function At(e) {
  let r = y.b102,
    i = e.w,
    a = e.base,
    o = e.A,
    s = D,
    c = u;
  (Q(e, {
    x0: s.x0,
    z0: r.minZ + 1,
    x1: r.maxX - 1,
    z1: s.z0,
    pod: 18,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { S: `shop:lobby`, W: `shop:lobby`, E: `shop:cafe` },
    t: { x0: s.x0 + 1, z0: r.minZ + 1.6, x1: r.maxX - 1.6, z1: s.z0 - 1 },
    top: 158,
    cw: `ote`,
  }),
    i.setMaterial(0.85, 0, 0, 0),
    g(i, 16777215),
    J(i, s.x0, s.z0, s.x1, s.z1, a + 0.02, o.uv(`pave:gyoko`), 4),
    J(i, c.x0, c.z0, c.x1, c.z1, a + 0.03, o.uv(`forest`), 3),
    J(i, c.x0 + 9, c.z0, c.x0 + 11, c.z1, a + 0.05, o.uv(`stone:inada`), 2));
  let l = new t(n(`maru-forest-trees`)),
    d = e.detail > 0 ? 26 : 16;
  for (let t = 0; t < d; t++) {
    let n = c.x0 + 1.2 + l.next() * (c.x1 - c.x0 - 2.4),
      r = c.z0 + 1.2 + l.next() * (c.z1 - c.z0 - 2.4);
    (n > c.x0 + 8.2 && n < c.x0 + 11.8) || Ot(e, n, r, 2.4 + l.next() * 2.2, t);
  }
  (i.setMaterial(0.8, 0, 0, 0),
    g(i, 16777215),
    X(e, c.x0 + 6, c.z1 - 0.9, c.x0 + 8.4, c.z1 - 0.4, a, a + 0.7, 9210500),
    Z(
      i,
      c.x0 + 7.2,
      a + 0.38,
      c.z1 - 0.4,
      0,
      1,
      2.2,
      0.6,
      o.uv(`sign:forest`),
      0.01,
    ));
}
var jt = [`green`, `autumn`, `bloom`, `bare`];
function Mt(e) {
  (e.need(`pave:naka`, 256, 256, rt), e.need(`run:sign`, 128, 192, Ke));
  for (let t = 1; t <= 6; t++) e.need(`plaque:${t}`, 128, 40, qe(t));
  e.need(`terrace:sign`, 192, 80, Je);
  for (let t = 1; t <= 4; t++) e.need(`truck:${t}`, 256, 112, Ze(t));
  e.need(`queue`, 64, 32, Qe);
}
