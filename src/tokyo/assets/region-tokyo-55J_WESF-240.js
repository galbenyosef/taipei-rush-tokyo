// tokyo/assets/region-tokyo-55J_WESF 240 — col
// Lines 91002-91344 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Dxe(e) {
  let { pts: t, F: n } = e.coarse ? eI(6) : eI(2.5),
    r = t.length,
    i = (e) => {
      let n = t[e],
        i = t[(e + 1) % r];
      return (
        QF(n[0] + zF.x, n[2] + zF.z, 1.2) && QF(i[0] + zF.x, i[2] + zF.z, 1.2)
      );
    },
    a = (e) => !i(e);
  if ((e.col(15856367).mat(0.4, 0.5, 0.04, 1), e.coarse))
    lM(e, t, n, 0, -0.5, 0.65, 0.45, a);
  else {
    (iI(e, t, n, -0.55, a),
      iI(e, t, n, 0.55, a),
      e.col(15001315).mat(0.45, 0.5, 0.03, 1),
      lM(e, t, n, 0, -0.78, 0.3, 0.3, a),
      yield,
      e.col(14080213).mat(0.5, 0.5, 0, 0));
    for (let a = 0; a < r; a += 3) {
      if (i(a)) continue;
      let r = t[a],
        o = n[a],
        s = (e, t, n) => [
          r[0] + o.s[0] * e + o.u[0] * t + o.t[0] * n,
          r[1] + o.s[1] * e + o.u[1] * t + o.t[1] * n,
          r[2] + o.s[2] * e + o.u[2] * t + o.t[2] * n,
        ];
      (tM(
        e,
        s(-0.6, -0.12, -0.12),
        s(0.6, -0.12, -0.12),
        s(0.6, -0.12, 0.12),
        s(-0.6, -0.12, 0.12),
        [-o.u[0], -o.u[1], -o.u[2]],
      ),
        tM(
          e,
          s(-0.6, -0.12, -0.12),
          s(0.6, -0.12, -0.12),
          s(0.15, -0.6, -0.12),
          s(-0.15, -0.6, -0.12),
          [-o.t[0], -o.t[1], -o.t[2]],
        ),
        tM(
          e,
          s(-0.6, -0.12, 0.12),
          s(0.6, -0.12, 0.12),
          s(0.15, -0.6, 0.12),
          s(-0.15, -0.6, 0.12),
          o.t,
        ));
    }
  }
  (yield, e.col(15330023).mat(0.5, 0.4, 0.03, 1));
  let o = e.coarse ? 2 : 4;
  for (let i = 0; i < r; i += o) {
    let r = t[i],
      a = r[0] + zF.x,
      o = r[2] + zF.z;
    if (
      QF(a, o, -1.5) ||
      (a > ZF.x0 - 1 && a < -809 && o > ZF.z0 - 1 && o < ZF.z1 + 1) ||
      (a > -842 &&
        a < -823 &&
        ((o > -743 && o < -731) || (o > -708 && o < -695)))
    )
      continue;
    let s = [a - KP.x, o - KP.z];
    if (rF(s[0], s[1], 1.2)) continue;
    let c = Sxe(a, o, 0.5) ? KF.h + 0.4 : rF(s[0], s[1], 7) ? 8.4 : 0,
      l = r[1] - 1.1;
    if (l - c < 2.5) continue;
    let u = l - c > 40 ? 0.75 : 0.5;
    if ((e.cylY(r[0], r[2], c, l, u, 6, u * 0.8, !1), !e.coarse)) {
      let t = n[i];
      e.obox(r[0], l + 0.1, r[2], 0.5, 0.35, 0.5, Math.atan2(t.t[2], t.t[0]));
    }
    c === 0 && e.pole(r[0], r[2], u + 0.1, 0, Math.min(l, 6));
  }
  yield;
  let s = ZF;
  if (
    (e.col(14078924).mat(0.85, 0, 0.05, 1),
    e.box(BF(s.x0), 0, VF(s.z0), BF(s.x1), s.y, VF(s.z1)),
    e.col(15790316).mat(0.5, 0.3, 0.05, 1),
    e.box(BF(s.x0) - 0.4, 11.2, VF(s.z0) - 1, BF(-810), 11.7, VF(s.z1) + 1),
    !e.coarse)
  ) {
    (e.col(16774109).mat(0.4, 0, 0.7, 1),
      e.flat(BF(s.x0), VF(s.z0), BF(-811), VF(s.z1), 11.18, e.white, 0, 0, !1),
      e.col(14277334).mat(0.5, 0.4, 0, 0));
    for (let t of [s.z0, (s.z0 + s.z1) / 2, s.z1])
      (e.cylY(BF(s.x0) + 0.3, VF(t), s.y, 11.2, 0.18, 6, 0.18, !1),
        e.cylY(BF(-810.5), VF(t), 0, 11.2, 0.2, 6, 0.2, !1));
  }
  (e.col(13618373).mat(0.85, 0, 0, 0),
    e.box(BF(-814.1), 0, VF(s.z0), BF(-811.9), 6.3, VF(s.z1)),
    e.solid(BF(s.x0), VF(s.z0), BF(s.x1), VF(s.z1), 0, s.y),
    e.solid(BF(-814.1), VF(s.z0), BF(-811.9), VF(s.z1), 0, 6.3),
    e.pole(BF(-810.5), VF(s.z0), 0.3, 0, 11),
    e.pole(BF(-810.5), VF(s.z1), 0.3, 0, 11));
  let c = (i, a, o) => {
      for (let s = 0; s < 5; s++) {
        let c = (i + s + r) % r,
          l = t[c],
          u = n[c];
        e.col(s % 2 ? o : a).mat(0.35, 0.3, 0.2, 1);
        let d = (e, t, n) => [
            l[0] + u.s[0] * e + u.u[0] * t + u.t[0] * n,
            l[1] + u.s[1] * e + u.u[1] * t + u.t[1] * n,
            l[2] + u.s[2] * e + u.u[2] * t + u.t[2] * n,
          ],
          f = (e, t, n) => d(e * 0.85, 0.15 + t * 0.9, n * 1.1);
        (tM(e, f(-1, 0, -1), f(-1, 0, 1), f(-1, 1, 1), f(-1, 1, -1), [
          -u.s[0],
          -u.s[1],
          -u.s[2],
        ]),
          tM(e, f(1, 0, -1), f(1, 0, 1), f(1, 1, 1), f(1, 1, -1), u.s),
          tM(e, f(-1, 0, 1), f(1, 0, 1), f(1, 1, 1), f(-1, 1, 1), u.t),
          tM(e, f(-1, 0, -1), f(1, 0, -1), f(1, 1, -1), f(-1, 1, -1), [
            -u.t[0],
            -u.t[1],
            -u.t[2],
          ]),
          e.col(2830134).mat(0.6, 0.1, 0, 0),
          tM(e, f(-1, 1, -1), f(1, 1, -1), f(1, 1, 1), f(-1, 1, 1), u.u));
      }
    },
    l = 0,
    u = 0;
  for (let e = 0; e < r; e++) {
    let n = t[e][2] + zF.z,
      r = t[e][0] + zF.x;
    (!l && n < -714 && r > -815 && (l = e),
      !u && r < -872 && n > -806 && n < -803 && (u = e));
  }
  (c(l, 15755944, 16249588), c(u, 16172579, 16250088));
}
function* Oxe(e, t) {
  (yield* wxe(e, t),
    yield,
    yield* Txe(e, t),
    yield,
    yield* Exe(e),
    yield,
    yield* Dxe(e));
}
function kxe(e, t) {
  let n = t.c(`office`);
  (e.col(16250867).mat(0.45, 0.08, 0.1, G | 32),
    zk(e, HF(WF.x0, WF.z0, WF.x1, WF.z1), 0, 128, n, 14.4, 14.4),
    zk(e, HF(WF.x0 + 5.4, WF.z0, WF.x1 - 5.4, WF.z1), 128, 146, n, 14.4, 14.4),
    e.col(16053488).mat(0.55, 0.05, 0.05, 1),
    Vk(e, HF(WF.x0, WF.z0, WF.x1, WF.z1), 128),
    Vk(e, HF(WF.x0 + 5.4, WF.z0, WF.x1 - 5.4, WF.z1), 146),
    e.col(15134707).mat(0.2, 0.45, 0.16, G),
    zk(e, HF(GF.x0, GF.z0, GF.x1, GF.z1), 0, GF.h, t.c(`gtGlass`), 25.6, 25.2),
    Vk(e, HF(GF.x0, GF.z0, GF.x1, GF.z1), GF.h),
    e.col(15330284).mat(0.4, 0.4, 0.4, 1));
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2,
      r = ((t + 1) / 16) * Math.PI * 2;
    for (let t of [-1, 1])
      tM(
        e,
        rI(n, 28.8, t * 1.5),
        rI(r, 28.8, t * 1.5),
        rI(r, 31.2, t * 1.5),
        rI(n, 31.2, t * 1.5),
        [t, 0, 0],
      );
  }
}
var Axe = {
  id: `tokyo-dome-city-laqua`,
  site: (e) => ({
    x: zF.x,
    z: zF.z,
    gy: e.groundHeight(zF.x, zF.z),
    facing: 0,
  }),
  name: { ja: `東京ドームシティ`, zh: `東京巨蛋城`, en: `Tokyo Dome City` },
  near: 280,
  build: Oxe,
  far: kxe,
  bounds: () => [-932, -813, -807, -650],
  farBoxes: (e, t) => [
    {
      x0: UF.x0,
      x1: UF.x1,
      z0: UF.z0,
      z1: UF.z1,
      y0: t.gy,
      y1: t.gy + UF.h,
      rgb: [0.8, 0.8, 0.78],
      lit: !0,
    },
    {
      x0: WF.x0,
      x1: WF.x1,
      z0: WF.z0,
      z1: WF.z1,
      y0: t.gy + UF.h,
      y1: t.gy + 128,
      rgb: [0.86, 0.86, 0.84],
      lit: !0,
    },
    {
      x0: WF.x0 + 5.4,
      x1: WF.x1 - 5.4,
      z0: WF.z0,
      z1: WF.z1,
      y0: t.gy + 128,
      y1: t.gy + 152,
      rgb: [0.86, 0.86, 0.84],
      lit: !0,
    },
    {
      x0: GF.x0,
      x1: GF.x1,
      z0: GF.z0,
      z1: GF.z1,
      y0: t.gy,
      y1: t.gy + GF.h,
      rgb: [0.55, 0.62, 0.66],
      lit: !0,
    },
    {
      x0: KF.x0,
      x1: KF.x1,
      z0: KF.z0,
      z1: KF.z1,
      y0: t.gy,
      y1: t.gy + KF.h,
      rgb: [0.6, 0.66, 0.7],
      lit: !0,
    },
  ],
  anchors: [
    {
      key: `laqua-hakusan`,
      lx: BF(-803),
      lz: VF(-760),
      turn: -Math.PI / 2,
      name: {
        zh: `東京巨蛋城 LaQua（白山通）`,
        en: `Tokyo Dome City LaQua (Hakusan-dori)`,
      },
    },
    {
      key: `tokyo-dome-hotel`,
      lx: BF(-818),
      lz: VF(-697),
      turn: Math.PI + 0.3,
      name: { zh: `東京巨蛋飯店`, en: `Tokyo Dome Hotel` },
    },
  ],
};
r.add({ 小石川後樂園: `小石川後楽園` });
var aI = { x: -1066.5, z: -719 },
  oI = { x0: -33.5, x1: 26.5, z0: -29, z1: 19 },
  sI = { x0: -11.5, x1: 2.5, z0: -11, z1: 1 },
  jxe = -0.65,
  cI = { x: 55.7, z0: -93.2, z1: 67, t: 0.5, h: 2.4 },
  lI = { z0: 23, z1: 28 },
  uI = { z0: 47.5, z1: 52.5 },
  dI = { x0: -25.5, x1: -21.5, top: 0.25 },
  fI = { zc: -5, r: 3.4, rr: 3.95, deck: 4.15, x0: -25.1, x1: -21.9 },
  pI = { x: -18, z: 45, r: 10, h: 3.2 },
  mI = [
    [-42, -37, 35, -34],
    [-42, 24, 35, 27],
    [-42, -34, -39, 24],
    [32, -34, 35, 24],
    [32, 27, 35, 51.5],
    [35, 48.5, 55.2, 51.5],
    [-55.2, 24, -42, 27],
    [dI.x0, -34, dI.x1, oI.z0],
    [dI.x0, oI.z1, dI.x1, 24],
    [-39, -60, -36, -37],
    [-36, -63, 10, -60],
  ],
  Mxe = (e, t, n, r = 0) =>
    e > n[0] - r && e < n[2] + r && t > n[1] - r && t < n[3] + r,
  Nxe = (e, t, n) => mI.some((r) => Mxe(e, t, r, n)),
  Pxe = (e, t, n) =>
    e > oI.x0 - n && e < oI.x1 + n && t > oI.z0 - n && t < oI.z1 + n;
function hI(e, t, n, r, i, a) {
  e.push().col(5916214).mat(0.95, 0, 0, 0);
  let o = t + i.range(-0.5, 0.5),
    s = n + i.range(-0.5, 0.5);
  e.rod(t, 0, n, o, r * 0.45, s, r * 0.045, 5, r * 0.03);
  let c =
      a === `green` || a === `bloom`
        ? [6261306, 7313988, 5208628]
        : [12730410, 14181931, 11022890, 14717242, 9083454, 12143148],
    l = e.coarse || r < 6 ? 1 : 2;
  for (let t = 0; t < l; t++) {
    let n = i.next() * Math.PI * 2,
      a = t ? r * 0.18 : 0,
      l = r * (t ? 0.26 : 0.34),
      u = o + Math.cos(n) * a,
      d = s + Math.sin(n) * a,
      f = r * (t ? 0.62 : 0.7);
    (e.col(i.pick(c), i.range(0.9, 1.08)).mat(0.9, 0, 0, 0),
      e.lathe(
        u,
        d,
        [
          0.05,
          f - l * 0.55,
          l * 0.8,
          f - l * 0.35,
          l,
          f + l * 0.05,
          l * 0.75,
          f + l * 0.5,
          0.05,
          f + l * 0.72,
        ],
        5,
        i.next(),
      ));
  }
  e.pop();
}
function Fxe(e, t, n, r, i) {
  (e.push().col(5062192).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, r * 0.4, n, r * 0.04, 5, r * 0.03),
    e.col(3033642, i.range(0.85, 1.1)).mat(0.95, 0, 0, 0));
  let a = r * 0.36;
  (e.lathe(
    t,
    n,
    [0.05, r * 0.3, a * 0.9, r * 0.38, a, r * 0.6, a * 0.75, r * 0.85, 0.05, r],
    e.coarse ? 5 : 6,
    i.next(),
  ),
    e.pop());
}
