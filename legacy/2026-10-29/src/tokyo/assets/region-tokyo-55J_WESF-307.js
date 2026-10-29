// tokyo/assets/region-tokyo-55J_WESF 307 — col
// Lines 111565-111805 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* ZEe(e, t) {
  let n = e.sub(-sK.x1, 0, -sK.z0, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = t.c(`doors`),
    o = e.coarse ? 3 : 1,
    s = t.season ?? `green`;
  (e.push().col(dK).mat(0.2, 0.35, 0.25, G),
    e.wall(sK.x0, X.z0, sK.x0, lK.z0, -9, X.y0, r, 3.4 * o, 4),
    e.wall(sK.x0, lK.z1, sK.x0, sK.z1, -9, X.y0, r, 3.4 * o, 4),
    e.wall(sK.x0, lK.z0, sK.x0, lK.z1, 9, X.y0, r, 3.4 * o, 4),
    e.wall(sK.x0, sK.z1, sK.x1, sK.z1, -9, X.y0, r, 3.4 * o, 4),
    e.wall(sK.x1, sK.z1, sK.x1, X.z0, -9, X.y0, r, 3.4 * o, 4),
    e.col(uK).mat(0.75, 0, 0.2, 1));
  for (let t of [4, 8])
    (e.box(sK.x0 - 0.8, t, X.z0, sK.x0, t + 0.45, sK.z1),
      e.box(sK.x0 - 0.8, t, sK.z1, sK.x1, t + 0.45, sK.z1 + 0.8));
  if ((e.pop(), yield, !e.coarse)) {
    let t = sK.x0 + lK.d;
    (e.push().col(2894376).mat(0.5, 0, 0, 0),
      e.panel(t, lK.z1, sK.x0, lK.z1, -1, 9),
      e.panel(sK.x0, lK.z0, t, lK.z0, -1, 9),
      e.col(15979170).mat(0.6, 0, 0.55, 1),
      e.flat(sK.x0 - 0.02, lK.z0, t, lK.z1, 9, e.white, 0, 0, !1),
      e.col(16773852).mat(0.3, 0.2, 0.45, G),
      e.wall(t, lK.z0, t, lK.z1, -1, 9, a, 2.4, 9),
      e.col(16052196).mat(0.5, 0, 0.6, 1),
      UB(e, `WISH HARAJUKU`, sK.x0 - 0.85, 9.6, (lK.z0 + lK.z1) / 2, BB, 0.9, {
        px: 18,
        align: 0.5,
        maxW: 9,
        raw: !0,
      }),
      e.pop());
  }
  (e.push().col(10848874).mat(0.85, 0, 0, 0),
    e.flat(sK.x0, X.z0, X.x0, sK.z1, X.y0),
    e.flat(sK.x0, sK.z1 - 0.01, sK.x1, sK.z1, X.y0),
    e.col(fK).mat(0.95, 0, 0, 0),
    e.box(sK.x0, X.y0, X.z0 + 1, sK.x0 + 1.2, X.y0 + 0.9, sK.z1 - 1),
    e.col(13820644).mat(0.2, 0.3, 0.05, 1),
    e.panel(sK.x0 - 0.01, X.z0, sK.x0 - 0.01, sK.z1, X.y0 + 0.9, X.y0 + 2),
    e.pop());
  let c = VV(9521),
    l = e.coarse ? [925, 950] : [918, 926, 934, 942, 950, 957];
  for (let t of l)
    WV(
      e,
      c.next() < 0.5 ? `keyaki` : `maple`,
      sK.x0 + 2,
      t,
      c.range(4.5, 6.5),
      Math.floor(c.next() * 1e6),
      s,
      X.y0,
    );
  if (
    (yield,
    e
      .push()
      .col(dK)
      .mat(0.25, 0.35, 0.2, G | 32),
    e.wall(X.x0, X.zTop, X.x0, X.z1, X.y0, X.y1, r, 3.4 * o, X.fl),
    e.wall(X.x0, X.z0, X.x0, X.zTop, X.y0, X.top, r, 3.4 * o, X.fl),
    e.wall(X.x1, X.z0, X.x0, X.z0, X.y0, X.top, r, 3.4 * o, X.fl),
    e.wall(X.x1, X.zTop, X.x0, X.zTop, X.top, X.y1, r, 3.4 * o, X.fl),
    e.wall(X.x0, X.z1, X.x1, X.z1, X.y0, X.y1, r, 3.4 * o, X.fl),
    e.col(10264220).mat(0.7, 0.1, 0.12, G | 32),
    e.wall(X.x1, X.z1, X.x1, X.zTop, X.y0, X.y1, i, 4 * o, X.fl),
    e.wall(X.x1, X.zTop, X.x1, X.z0, X.y0, X.top, i, 4 * o, X.fl),
    e.col(9079946).mat(0.9, 0, 0, 0),
    e.flat(X.x0, X.zTop, X.x1, X.z1, X.y1),
    e.flat(X.x0, X.z0, X.x1, X.zTop, X.top),
    e.pop(),
    yield,
    !e.coarse)
  )
    (e.push(),
      pK(e, X.x0, X.zTop, X.x0, X.z1, BB, X.y0, X.y1 - 0.4, X.fl, 3.4),
      pK(e, X.x0, X.z0, X.x0, X.zTop, BB, X.y0, X.top - 0.4, X.fl, 3.4),
      pK(e, X.x1, X.z0, X.x0, X.z0, LB, X.y0, X.top - 0.4, X.fl, 3.4),
      pK(e, X.x0, X.z1, X.x1, X.z1, [0, 1], X.y0, X.y1 - 0.4, X.fl, 3.4),
      e.pop());
  else {
    e.push().col(uK).mat(0.75, 0, 0.1, 1);
    for (let t = X.y0; t < X.y1 - 1; t += X.fl)
      e.box(X.x0 - 1.3, t, X.z0 - 1.3, X.x1, t + 0.4, X.z1 + 1.3);
    e.pop();
  }
  (yield,
    e.push().col(10466488).mat(0.15, 0.4, 0.3, G),
    e.wall(sK.x0, sK.z0, sK.x0, X.z0, -9, cK.h, r, 6 * o, 5.1),
    e.wall(sK.x1, sK.z0, sK.x0, sK.z0, -9, cK.h, r, 6 * o, 5.1),
    e.wall(sK.x1, X.z0, sK.x1, sK.z0, -9, cK.h, r, 6 * o, 5.1),
    e.col(YEe).mat(0.6, 0.2, 0.05, 1),
    e.box(sK.x0 - 0.4, cK.h, sK.z0 - 0.4, sK.x1 + 0.4, cK.h + 0.6, X.z0),
    e.box(sK.x0 - 0.4, cK.h, X.z0, X.x0, X.y0, X.z0 + 0.4),
    e.col(fK).mat(0.95, 0, 0, 0),
    e.flat(sK.x0, sK.z0, sK.x1, X.z0, cK.h + 0.61),
    e.coarse ||
      (e.col(16184558).mat(0.5, 0, 0.6, 1),
      UB(
        e,
        `WISH HARAJUKU`,
        (sK.x0 + sK.x1) / 2,
        cK.h - 1.6,
        sK.z0 - 0.42,
        LB,
        1.1,
        { px: 18, align: 0.5, maxW: 16, raw: !0 },
      )),
    e.pop());
  for (let [t, n] of e.coarse
    ? [[-1797, 904]]
    : [
        [-1808, 903],
        [-1797, 905],
        [-1787, 902],
      ])
    WV(
      e,
      `keyaki`,
      t,
      n,
      c.range(4, 5.5),
      Math.floor(c.next() * 1e6),
      s,
      cK.h + 0.6,
    );
  (e.push().col(9079946).mat(0.9, 0, 0, 0),
    e.flat(X.x1, X.z0, sK.x1, sK.z1, X.y0),
    e.pop(),
    e.solid(sK.x0, sK.z0, sK.x1, X.z0, -9, cK.h + 0.6),
    e.solid(sK.x0, X.z0, sK.x1, lK.z0, -9, X.y0),
    e.solid(sK.x0 + lK.d, lK.z0, sK.x1, lK.z1, -9, X.y0),
    e.solid(sK.x0, lK.z1, sK.x1, sK.z1, -9, X.y0),
    e.solid(sK.x0, lK.z0, sK.x0 + lK.d, lK.z1, 9, X.y0),
    e.solid(X.x0, X.z0, X.x1, X.z1, X.y0, X.y1),
    e.leave(n));
}
function QEe(e) {
  let t = e.sub(-sK.x1, 0, -sK.z0, 0);
  (e.push().col(8021590).mat(0.8, 0, 0, 0),
    e.box(sK.x0, -6, sK.z0, sK.x1, X.y0, sK.z1),
    e.box(X.x0 - 1.3, X.y0, X.z0 - 1.3, X.x1, X.y1, X.z1 + 1.3),
    e.pop(),
    e.leave(t));
}
var $Ee = {
  id: `with-harajuku`,
  site: XEe,
  name: { ja: `ウィッシュ原宿`, zh: `WISH 原宿`, en: `WISH HARAJUKU` },
  near: 200,
  build: ZEe,
  far: QEe,
  bounds: () => [sK.x0 - 2, sK.z0, sK.x1, sK.z1 + 2],
  farBoxes: () => [
    {
      x0: sK.x0,
      x1: sK.x1,
      z0: sK.z0,
      z1: sK.z1,
      y0: 0.15,
      y1: X.y0 + 2,
      rgb: [0.42, 0.44, 0.45],
      lit: !0,
    },
    {
      x0: X.x0,
      x1: X.x1,
      z0: X.z0,
      z1: X.z1,
      y0: 0.15,
      y1: X.y1 + 2,
      rgb: [0.55, 0.42, 0.3],
      lit: !0,
    },
  ],
};
r.add({ 青山靈園: `青山霊園` });
var mK = [
    { x0: -1363.8, z0: 856.3, x1: -1300, z1: 887.3 },
    { x0: -1300, z0: 777.3, x1: -1244.8, z1: 887.3 },
    { x0: -1235.3, z0: 852.8, x1: -1180, z1: 919.3 },
    { x0: -1300, z0: 896.8, x1: -1244.8, z1: 919.3 },
    { x0: -1255.3, z0: 960.8, x1: -1180, z1: 1048.3 },
  ],
  hK = [
    [-1253, 780],
    [-1207, 862],
    [-1183, 905],
    [-1174, 929],
    [-1176, 975],
    [-1178, 994],
    [-1172, 1020],
    [-1186, 1046],
    [-1203, 1053],
    [-1233, 1043],
    [-1253, 1019],
    [-1271, 993],
    [-1281, 953],
    [-1290, 928],
    [-1305, 909],
    [-1325, 892],
    [-1342, 886],
    [-1364, 882],
    [-1383, 856],
    [-1354, 834],
    [-1341, 851],
    [-1298, 818],
    [-1291, 829],
    [-1261, 807],
    [-1271, 795],
  ],
  gK = { x: -1272, z: 913 },
  _K = { x0: -1363.8, z0: 777.3, x1: -1180, z1: 1048.3 };
function vK(e, t) {
  let n = !1;
  for (let r = 0, i = hK.length - 1; r < hK.length; i = r++) {
    let [a, o] = hK[r],
      [s, c] = hK[i];
    o > t != c > t && e < ((s - a) * (t - o)) / (c - o) + a && (n = !n);
  }
  return n;
}
var yK = (e, t, n = 0) =>
    mK.some(
      (r) => e > r.x0 + n && e < r.x1 - n && t > r.z0 + n && t < r.z1 - n,
    ),
  bK = {
    n: { x: -1240, z0: 779, z1: 922 },
    s: { x: -1260, z0: 958, z1: 1047 },
  },
  eDe = [-1338, -1316, -1284, -1262, -1218, -1200],
  tDe = (e) => ({
    x: gK.x,
    z: gK.z,
    gy: e.groundHeight(gK.x, gK.z),
    facing: 0,
  }),
  xK = [9277326, 10132376, 8159104, 11118754, 7238003, 11776168];
