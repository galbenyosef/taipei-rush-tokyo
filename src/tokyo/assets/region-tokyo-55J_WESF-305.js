// tokyo/assets/region-tokyo-55J_WESF 305 — math
// Lines 110959-111284 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var UG = {
    arena: { x0: -1692.8, z0: 546.8, x1: -1652.3, z1: 601.8 },
    south: { x0: -1692.8, z0: 614.3, x1: -1652.3, z1: 669.3 },
  },
  WG = { x: -1672.55, z: 608 },
  GG = { x: -1672.55, z: 579.6, rx: 19.6, rz: 21.6, eave: 7.6, top: 14.5 },
  KG = {
    x: Math.sin((27 * Math.PI) / 180),
    z: -Math.cos((27 * Math.PI) / 180),
  },
  qG = { x: -KG.z, z: KG.x },
  JG = { x0: -1691.2, x1: -1673.2, z0: 617, z1: 666.5, wall: 6, crown: 11.2 },
  YG = { x: -1660.6, z: 633.5, h: 8.2, wall: 4.6 },
  XG = 12172735,
  REe = 10593961,
  ZG = 14078664,
  QG = 4082258,
  $G = 13623528,
  zEe = 3104668,
  BEe = (e) => ({
    x: WG.x,
    z: WG.z,
    gy: e.groundHeight(WG.x, WG.z),
    facing: 0,
  }),
  eK = (e, t, n = 1) => [GG.x + e * GG.rx * n, GG.z + t * GG.rz * n],
  tK = 1.15;
function nK(e, t) {
  let n = e / tK,
    r = GG.eave + (GG.top - GG.eave) * (1 - 0.55 * n * n);
  return GG.eave + (r - GG.eave) * (1 - Math.abs(t) ** 1.2);
}
var rK = (e, t) => {
  let n = t * Math.max(0, 1 - (e / tK) * (e / tK));
  return eK(e * KG.x + n * qG.x, e * KG.z + n * qG.z);
};
function iK(e, t, n, r, i, a, o = n) {
  for (let s = 0; s < t; s++) {
    let c = (s / t) * Math.PI * 2,
      l = ((s + 1) / t) * Math.PI * 2,
      [u, d] = eK(Math.cos(c), Math.sin(c), n),
      [f, p] = eK(Math.cos(l), Math.sin(l), n),
      [m, h] = eK(Math.cos(l), Math.sin(l), o),
      [g, _] = eK(Math.cos(c), Math.sin(c), o),
      [v, y] = a(s);
    (e.col(v, y), e.quad(f, r, p, u, r, d, g, i, _, m, i, h));
  }
}
function aK(e, t, n, r, i, a) {
  for (let o = 0; o < t; o++) {
    let s = (o / t) * Math.PI * 2,
      c = ((o + 1) / t) * Math.PI * 2,
      [l, u] = eK(Math.cos(s), Math.sin(s), n),
      [d, f] = eK(Math.cos(c), Math.sin(c), n),
      [p, m] = eK(Math.cos(c), Math.sin(c), r),
      [h, g] = eK(Math.cos(s), Math.sin(s), r);
    a
      ? e.quad(l, i, u, d, i, f, p, i, m, h, i, g)
      : e.quad(l, i, u, h, i, g, p, i, m, d, i, f);
  }
}
function oK(e, t, n, r) {
  let i = 0.07,
    a = Array.from({ length: t + 1 }, (e, n) => tK * (-1 + (2 * n) / t));
  for (let o of [-1, 1]) {
    let s = Array.from(
      { length: n + 1 },
      (e, t) => o * (i + (0.9299999999999999 * t) / n),
    );
    for (let i = 0; i < t; i++) {
      e.col(i % 2 ? XG : REe, o < 0 ? 0.97 : 1.02);
      for (let t = 0; t < n; t++) {
        let n = (e, t) => {
            let [n, i] = rK(e, t);
            return [
              n,
              nK(e, t) + (r && Math.abs(t) <= 0.07000100000000001 ? 0.55 : 0),
              i,
            ];
          },
          c = n(a[i], s[t]),
          l = n(a[i + 1], s[t]),
          u = n(a[i + 1], s[t + 1]),
          d = n(a[i], s[t + 1]);
        if (
          (o < 0
            ? e.quad(
                c[0],
                c[1],
                c[2],
                l[0],
                l[1],
                l[2],
                u[0],
                u[1],
                u[2],
                d[0],
                d[1],
                d[2],
              )
            : e.quad(
                c[0],
                c[1],
                c[2],
                d[0],
                d[1],
                d[2],
                u[0],
                u[1],
                u[2],
                l[0],
                l[1],
                l[2],
              ),
          r)
        ) {
          e.push().col(7106675);
          let t = 0.15;
          (o < 0
            ? e.quad(
                c[0],
                c[1] - t,
                c[2],
                d[0],
                d[1] - t,
                d[2],
                u[0],
                u[1] - t,
                u[2],
                l[0],
                l[1] - t,
                l[2],
              )
            : e.quad(
                c[0],
                c[1] - t,
                c[2],
                l[0],
                l[1] - t,
                l[2],
                u[0],
                u[1] - t,
                u[2],
                d[0],
                d[1] - t,
                d[2],
              ),
            e.pop());
        }
      }
    }
  }
  e.push().col($G).mat(0.25, 0.3, 0.3, 1);
  for (let n = 0; n < t; n++) {
    let t = (e) => nK(e, 0) + (r ? 0.25 : 0),
      [o, s] = rK(a[n], -0.07),
      [c, l] = rK(a[n + 1], -0.07),
      [u, d] = rK(a[n + 1], i),
      [f, p] = rK(a[n], i);
    e.quad(o, t(a[n]), s, f, t(a[n]), p, u, t(a[n + 1]), d, c, t(a[n + 1]), l);
  }
  e.pop();
}
function* VEe(e, t) {
  let n = e.coarse ? 20 : 48,
    r = t.c(`glass`);
  if (
    (e.push().mat(0.25, 0.3, 0.22, G),
    iK(e, n, 0.86, 0, 3.4, () => [QG, 1]),
    iK(e, n, 0.82, 4.2, GG.eave - 0.6, () => [QG, 0.92]),
    e.pop(),
    e.push().col(ZG).mat(0.8, 0, 0.08, 1),
    iK(e, n, 0.95, 3.4, 4.2, () => [ZG, 1]),
    aK(e, n, 0.82, 0.95, 4.2, !0),
    aK(e, n, 0.86, 0.95, 3.4, !1),
    !e.coarse)
  )
    for (let t = 0; t < n; t += 2) {
      let r = (t / n) * Math.PI * 2,
        [i, a] = eK(Math.cos(r), Math.sin(r), 0.88);
      e.cylY(i, a, 0, 3.4, 0.35, 6, 0.35, !1);
    }
  if (
    (e.pop(),
    yield,
    e.push().col(XG).mat(0.45, 0.55, 0, 0),
    iK(e, n, 0.93, GG.eave - 0.6, GG.eave - 0.05, (e) => [
      XG,
      e % 2 ? 0.98 : 1.02,
    ]),
    e.col(9343637).mat(0.7, 0.2, 0.18, 1),
    aK(e, n, 0.82, 0.93, GG.eave - 0.6, !1),
    e.mat(0.4, 0.6, 0, 0),
    oK(e, e.coarse ? 8 : 18, e.coarse ? 3 : 8, !e.coarse),
    !e.coarse)
  ) {
    e.col(10133410);
    for (let t of [-0.07, 0.07])
      for (let n = 0; n < 18; n++) {
        let r = tK * (-1 + (2 * n) / 18),
          i = tK * (-1 + (2 * (n + 1)) / 18),
          [a, o] = rK(r, t),
          [s, c] = rK(i, t);
        e.rod(a, nK(r, t) + 0.6, o, s, nK(i, t) + 0.6, c, 0.32, 5);
      }
  }
  (e.pop(), yield);
  let i = GG.x,
    a = GG.z - GG.rz * 0.84;
  if (
    (e.push().col(QG).mat(0.2, 0.35, 0.3, G),
    e.box(i - 7, 0, a - 3.5, i + 7, 6.2, a + 2, r, 3, 3.1),
    e.col(ZG).mat(0.8, 0, 0.08, 1),
    e.box(i - 7.6, 6.2, a - 4, i + 7.6, 6.8, a + 2),
    e.coarse ||
      (e.col(16052972).mat(0.5, 0, 0.6, 1),
      UB(e, `東京体育館 メインアリーナ`, i, 4.9, a - 3.53, LB, 0.62, {
        px: 18,
        align: 0.5,
        maxW: 9,
        raw: !0,
      }),
      UB(e, `TOKYO METROPOLITAN GYMNASIUM`, i, 4.3, a - 3.53, LB, 0.36, {
        px: 16,
        align: 0.5,
        maxW: 7,
        raw: !0,
      })),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(12896201).mat(0.5, 0.5, 0, 0);
    for (let t of [-0.32, 0.18])
      for (let n = 0; n < 4; n++) {
        let r = t + n * 0.045,
          [i, a] = eK(Math.cos(r), Math.sin(r), 0.92);
        (e.cylY(i, a, 0, 6.1, 0.55, 8),
          e.rod(
            i,
            6.1,
            a,
            i - Math.cos(r) * 1.4,
            6.1,
            a - Math.sin(r) * 1.4,
            0.45,
            6,
          ));
      }
    e.pop();
  }
  if (e.colliders)
    for (let t = 0; t < 8; t++) {
      let n = -1 + (2 * t) / 8,
        r = n + 2 / 8,
        i = (n + r) / 2,
        a = Math.sqrt(1 - i * i) * GG.rx * 0.9;
      e.solid(
        GG.x - a,
        GG.z + n * GG.rz * 0.9,
        GG.x + a,
        GG.z + r * GG.rz * 0.9,
        0,
        GG.top,
      );
    }
}
function* HEe(e, t) {
  let n = JG,
    r = (n.x0 + n.x1) / 2,
    i = (n.x1 - n.x0) / 2,
    a = e.coarse ? 4 : 10;
  (e.push().col(ZG).mat(0.85, 0, 0.06, 1),
    e.box(n.x0, 0, n.z0, n.x1, 1.6, n.z1),
    e.col(QG).mat(0.25, 0.3, 0.22, G),
    e.box(
      n.x0 + 0.3,
      1.6,
      n.z0 + 0.3,
      n.x1 - 0.3,
      n.wall - 1,
      n.z1 - 0.3,
      t.c(`glass`),
      3,
      2.2,
    ),
    e.col(ZG).mat(0.85, 0, 0.06, 1),
    e.box(n.x0, n.wall - 1, n.z0, n.x1, n.wall, n.z1),
    e.pop());
  let o = (e) => {
    let t = (e / a) * Math.PI;
    return [
      r - Math.cos(t) * (i + 0.6),
      n.wall + Math.sin(t) * (n.crown - n.wall),
    ];
  };
  e.push().mat(0.45, 0.5, 0, 0);
  for (let t = 0; t < a; t++) {
    let [r, i] = o(t),
      [s, c] = o(t + 1);
    ((t === a / 2 - 1 || t === a / 2) && !e.coarse
      ? e.col($G).mat(0.25, 0.3, 0.28, 1)
      : e.col(t % 2 ? XG : 13027785).mat(0.45, 0.5, 0, 0),
      e.quad(
        r,
        i,
        n.z1 + 0.6,
        s,
        c,
        n.z1 + 0.6,
        s,
        c,
        n.z0 - 0.6,
        r,
        i,
        n.z0 - 0.6,
      ));
  }
  e.col(11054254).mat(0.6, 0.3, 0, 0);
  for (let t = 0; t < a; t++) {
    let [i, a] = o(t),
      [s, c] = o(t + 1);
    (e.triFace(r, n.wall, n.z0, i, a, n.z0, s, c, n.z0),
      e.triFace(r, n.wall, n.z1, s, c, n.z1, i, a, n.z1));
  }
  (e.pop(), e.solid(n.x0, n.z0, n.x1, n.z1, 0, n.crown));
}
