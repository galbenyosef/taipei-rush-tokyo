// tokyo/assets/region-tokyo-A7LxHjud 307 — col
// Lines 111656-111896 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* dDe(e, t) {
  let n = e.sub(-cK.x1, 0, -cK.z0, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = t.c(`doors`),
    o = e.coarse ? 3 : 1,
    s = t.season ?? `green`;
  (e.push().col(fK).mat(0.2, 0.35, 0.25, G),
    e.wall(cK.x0, X.z0, cK.x0, uK.z0, -9, X.y0, r, 3.4 * o, 4),
    e.wall(cK.x0, uK.z1, cK.x0, cK.z1, -9, X.y0, r, 3.4 * o, 4),
    e.wall(cK.x0, uK.z0, cK.x0, uK.z1, 9, X.y0, r, 3.4 * o, 4),
    e.wall(cK.x0, cK.z1, cK.x1, cK.z1, -9, X.y0, r, 3.4 * o, 4),
    e.wall(cK.x1, cK.z1, cK.x1, X.z0, -9, X.y0, r, 3.4 * o, 4),
    e.col(dK).mat(0.75, 0, 0.2, 1));
  for (let t of [4, 8])
    (e.box(cK.x0 - 0.8, t, X.z0, cK.x0, t + 0.45, cK.z1),
      e.box(cK.x0 - 0.8, t, cK.z1, cK.x1, t + 0.45, cK.z1 + 0.8));
  if ((e.pop(), yield, !e.coarse)) {
    let t = cK.x0 + uK.d;
    (e.push().col(2894376).mat(0.5, 0, 0, 0),
      e.panel(t, uK.z1, cK.x0, uK.z1, -1, 9),
      e.panel(cK.x0, uK.z0, t, uK.z0, -1, 9),
      e.col(15979170).mat(0.6, 0, 0.55, 1),
      e.flat(cK.x0 - 0.02, uK.z0, t, uK.z1, 9, e.white, 0, 0, !1),
      e.col(16773852).mat(0.3, 0.2, 0.45, G),
      e.wall(t, uK.z0, t, uK.z1, -1, 9, a, 2.4, 9),
      e.col(16052196).mat(0.5, 0, 0.6, 1),
      WB(e, `WISH HARAJUKU`, cK.x0 - 0.85, 9.6, (uK.z0 + uK.z1) / 2, VB, 0.9, {
        px: 18,
        align: 0.5,
        maxW: 9,
        raw: !0,
      }),
      e.pop());
  }
  (e.push().col(10848874).mat(0.85, 0, 0, 0),
    e.flat(cK.x0, X.z0, X.x0, cK.z1, X.y0),
    e.flat(cK.x0, cK.z1 - 0.01, cK.x1, cK.z1, X.y0),
    e.col(pK).mat(0.95, 0, 0, 0),
    e.box(cK.x0, X.y0, X.z0 + 1, cK.x0 + 1.2, X.y0 + 0.9, cK.z1 - 1),
    e.col(13820644).mat(0.2, 0.3, 0.05, 1),
    e.panel(cK.x0 - 0.01, X.z0, cK.x0 - 0.01, cK.z1, X.y0 + 0.9, X.y0 + 2),
    e.pop());
  let c = HV(9521),
    l = e.coarse ? [925, 950] : [918, 926, 934, 942, 950, 957];
  for (let t of l)
    GV(
      e,
      c.next() < 0.5 ? `keyaki` : `maple`,
      cK.x0 + 2,
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
      .col(fK)
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
      mK(e, X.x0, X.zTop, X.x0, X.z1, VB, X.y0, X.y1 - 0.4, X.fl, 3.4),
      mK(e, X.x0, X.z0, X.x0, X.zTop, VB, X.y0, X.top - 0.4, X.fl, 3.4),
      mK(e, X.x1, X.z0, X.x0, X.z0, RB, X.y0, X.top - 0.4, X.fl, 3.4),
      mK(e, X.x0, X.z1, X.x1, X.z1, [0, 1], X.y0, X.y1 - 0.4, X.fl, 3.4),
      e.pop());
  else {
    e.push().col(dK).mat(0.75, 0, 0.1, 1);
    for (let t = X.y0; t < X.y1 - 1; t += X.fl)
      e.box(X.x0 - 1.3, t, X.z0 - 1.3, X.x1, t + 0.4, X.z1 + 1.3);
    e.pop();
  }
  (yield,
    e.push().col(10466488).mat(0.15, 0.4, 0.3, G),
    e.wall(cK.x0, cK.z0, cK.x0, X.z0, -9, lK.h, r, 6 * o, 5.1),
    e.wall(cK.x1, cK.z0, cK.x0, cK.z0, -9, lK.h, r, 6 * o, 5.1),
    e.wall(cK.x1, X.z0, cK.x1, cK.z0, -9, lK.h, r, 6 * o, 5.1),
    e.col(lDe).mat(0.6, 0.2, 0.05, 1),
    e.box(cK.x0 - 0.4, lK.h, cK.z0 - 0.4, cK.x1 + 0.4, lK.h + 0.6, X.z0),
    e.box(cK.x0 - 0.4, lK.h, X.z0, X.x0, X.y0, X.z0 + 0.4),
    e.col(pK).mat(0.95, 0, 0, 0),
    e.flat(cK.x0, cK.z0, cK.x1, X.z0, lK.h + 0.61),
    e.coarse ||
      (e.col(16184558).mat(0.5, 0, 0.6, 1),
      WB(
        e,
        `WISH HARAJUKU`,
        (cK.x0 + cK.x1) / 2,
        lK.h - 1.6,
        cK.z0 - 0.42,
        RB,
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
    GV(
      e,
      `keyaki`,
      t,
      n,
      c.range(4, 5.5),
      Math.floor(c.next() * 1e6),
      s,
      lK.h + 0.6,
    );
  (e.push().col(9079946).mat(0.9, 0, 0, 0),
    e.flat(X.x1, X.z0, cK.x1, cK.z1, X.y0),
    e.pop(),
    e.solid(cK.x0, cK.z0, cK.x1, X.z0, -9, lK.h + 0.6),
    e.solid(cK.x0, X.z0, cK.x1, uK.z0, -9, X.y0),
    e.solid(cK.x0 + uK.d, uK.z0, cK.x1, uK.z1, -9, X.y0),
    e.solid(cK.x0, uK.z1, cK.x1, cK.z1, -9, X.y0),
    e.solid(cK.x0, uK.z0, cK.x0 + uK.d, uK.z1, 9, X.y0),
    e.solid(X.x0, X.z0, X.x1, X.z1, X.y0, X.y1),
    e.leave(n));
}
function fDe(e) {
  let t = e.sub(-cK.x1, 0, -cK.z0, 0);
  (e.push().col(8021590).mat(0.8, 0, 0, 0),
    e.box(cK.x0, -6, cK.z0, cK.x1, X.y0, cK.z1),
    e.box(X.x0 - 1.3, X.y0, X.z0 - 1.3, X.x1, X.y1, X.z1 + 1.3),
    e.pop(),
    e.leave(t));
}
var pDe = {
  id: `with-harajuku`,
  site: uDe,
  name: { ja: `ウィッシュ原宿`, zh: `WISH 原宿`, en: `WISH HARAJUKU` },
  near: 200,
  build: dDe,
  far: fDe,
  bounds: () => [cK.x0 - 2, cK.z0, cK.x1, cK.z1 + 2],
  farBoxes: () => [
    {
      x0: cK.x0,
      x1: cK.x1,
      z0: cK.z0,
      z1: cK.z1,
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
var hK = [
    { x0: -1363.8, z0: 856.3, x1: -1300, z1: 887.3 },
    { x0: -1300, z0: 777.3, x1: -1244.8, z1: 887.3 },
    { x0: -1235.3, z0: 852.8, x1: -1180, z1: 919.3 },
    { x0: -1300, z0: 896.8, x1: -1244.8, z1: 919.3 },
    { x0: -1255.3, z0: 960.8, x1: -1180, z1: 1048.3 },
  ],
  gK = [
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
  _K = { x: -1272, z: 913 },
  vK = { x0: -1363.8, z0: 777.3, x1: -1180, z1: 1048.3 };
function yK(e, t) {
  let n = !1;
  for (let r = 0, i = gK.length - 1; r < gK.length; i = r++) {
    let [a, o] = gK[r],
      [s, c] = gK[i];
    o > t != c > t && e < ((s - a) * (t - o)) / (c - o) + a && (n = !n);
  }
  return n;
}
var bK = (e, t, n = 0) =>
    hK.some(
      (r) => e > r.x0 + n && e < r.x1 - n && t > r.z0 + n && t < r.z1 - n,
    ),
  xK = {
    n: { x: -1240, z0: 779, z1: 922 },
    s: { x: -1260, z0: 958, z1: 1047 },
  },
  mDe = [-1338, -1316, -1284, -1262, -1218, -1200],
  hDe = (e) => ({
    x: _K.x,
    z: _K.z,
    gy: e.groundHeight(_K.x, _K.z),
    facing: 0,
  }),
  SK = [9277326, 10132376, 8159104, 11118754, 7238003, 11776168];
