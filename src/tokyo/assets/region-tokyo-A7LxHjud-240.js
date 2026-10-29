// tokyo/assets/region-tokyo-A7LxHjud 240 — col
// Lines 91093-91435 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Bxe(e) {
  let { pts: t, F: n } = e.coarse ? nI(6) : nI(2.5),
    r = t.length,
    i = (e) => {
      let n = t[e],
        i = t[(e + 1) % r];
      return (
        eI(n[0] + VF.x, n[2] + VF.z, 1.2) && eI(i[0] + VF.x, i[2] + VF.z, 1.2)
      );
    },
    a = (e) => !i(e);
  if ((e.col(15856367).mat(0.4, 0.5, 0.04, 1), e.coarse))
    dM(e, t, n, 0, -0.5, 0.65, 0.45, a);
  else {
    (oI(e, t, n, -0.55, a),
      oI(e, t, n, 0.55, a),
      e.col(15001315).mat(0.45, 0.5, 0.03, 1),
      dM(e, t, n, 0, -0.78, 0.3, 0.3, a),
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
      (rM(
        e,
        s(-0.6, -0.12, -0.12),
        s(0.6, -0.12, -0.12),
        s(0.6, -0.12, 0.12),
        s(-0.6, -0.12, 0.12),
        [-o.u[0], -o.u[1], -o.u[2]],
      ),
        rM(
          e,
          s(-0.6, -0.12, -0.12),
          s(0.6, -0.12, -0.12),
          s(0.15, -0.6, -0.12),
          s(-0.15, -0.6, -0.12),
          [-o.t[0], -o.t[1], -o.t[2]],
        ),
        rM(
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
      a = r[0] + VF.x,
      o = r[2] + VF.z;
    if (
      eI(a, o, -1.5) ||
      (a > $F.x0 - 1 && a < -809 && o > $F.z0 - 1 && o < $F.z1 + 1) ||
      (a > -842 &&
        a < -823 &&
        ((o > -743 && o < -731) || (o > -708 && o < -695)))
    )
      continue;
    let s = [a - JP.x, o - JP.z];
    if (aF(s[0], s[1], 1.2)) continue;
    let c = Fxe(a, o, 0.5) ? JF.h + 0.4 : aF(s[0], s[1], 7) ? 8.4 : 0,
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
  let s = $F;
  if (
    (e.col(14078924).mat(0.85, 0, 0.05, 1),
    e.box(HF(s.x0), 0, UF(s.z0), HF(s.x1), s.y, UF(s.z1)),
    e.col(15790316).mat(0.5, 0.3, 0.05, 1),
    e.box(HF(s.x0) - 0.4, 11.2, UF(s.z0) - 1, HF(-810), 11.7, UF(s.z1) + 1),
    !e.coarse)
  ) {
    (e.col(16774109).mat(0.4, 0, 0.7, 1),
      e.flat(HF(s.x0), UF(s.z0), HF(-811), UF(s.z1), 11.18, e.white, 0, 0, !1),
      e.col(14277334).mat(0.5, 0.4, 0, 0));
    for (let t of [s.z0, (s.z0 + s.z1) / 2, s.z1])
      (e.cylY(HF(s.x0) + 0.3, UF(t), s.y, 11.2, 0.18, 6, 0.18, !1),
        e.cylY(HF(-810.5), UF(t), 0, 11.2, 0.2, 6, 0.2, !1));
  }
  (e.col(13618373).mat(0.85, 0, 0, 0),
    e.box(HF(-814.1), 0, UF(s.z0), HF(-811.9), 6.3, UF(s.z1)),
    e.solid(HF(s.x0), UF(s.z0), HF(s.x1), UF(s.z1), 0, s.y),
    e.solid(HF(-814.1), UF(s.z0), HF(-811.9), UF(s.z1), 0, 6.3),
    e.pole(HF(-810.5), UF(s.z0), 0.3, 0, 11),
    e.pole(HF(-810.5), UF(s.z1), 0.3, 0, 11));
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
        (rM(e, f(-1, 0, -1), f(-1, 0, 1), f(-1, 1, 1), f(-1, 1, -1), [
          -u.s[0],
          -u.s[1],
          -u.s[2],
        ]),
          rM(e, f(1, 0, -1), f(1, 0, 1), f(1, 1, 1), f(1, 1, -1), u.s),
          rM(e, f(-1, 0, 1), f(1, 0, 1), f(1, 1, 1), f(-1, 1, 1), u.t),
          rM(e, f(-1, 0, -1), f(1, 0, -1), f(1, 1, -1), f(-1, 1, -1), [
            -u.t[0],
            -u.t[1],
            -u.t[2],
          ]),
          e.col(2830134).mat(0.6, 0.1, 0, 0),
          rM(e, f(-1, 1, -1), f(1, 1, -1), f(1, 1, 1), f(-1, 1, 1), u.u));
      }
    },
    l = 0,
    u = 0;
  for (let e = 0; e < r; e++) {
    let n = t[e][2] + VF.z,
      r = t[e][0] + VF.x;
    (!l && n < -714 && r > -815 && (l = e),
      !u && r < -872 && n > -806 && n < -803 && (u = e));
  }
  (c(l, 15755944, 16249588), c(u, 16172579, 16250088));
}
function* Vxe(e, t) {
  (yield* Lxe(e, t),
    yield,
    yield* Rxe(e, t),
    yield,
    yield* zxe(e),
    yield,
    yield* Bxe(e));
}
function Hxe(e, t) {
  let n = t.c(`office`);
  (e.col(16250867).mat(0.45, 0.08, 0.1, G | 32),
    Vk(e, WF(KF.x0, KF.z0, KF.x1, KF.z1), 0, 128, n, 14.4, 14.4),
    Vk(e, WF(KF.x0 + 5.4, KF.z0, KF.x1 - 5.4, KF.z1), 128, 146, n, 14.4, 14.4),
    e.col(16053488).mat(0.55, 0.05, 0.05, 1),
    Uk(e, WF(KF.x0, KF.z0, KF.x1, KF.z1), 128),
    Uk(e, WF(KF.x0 + 5.4, KF.z0, KF.x1 - 5.4, KF.z1), 146),
    e.col(15134707).mat(0.2, 0.45, 0.16, G),
    Vk(e, WF(qF.x0, qF.z0, qF.x1, qF.z1), 0, qF.h, t.c(`gtGlass`), 25.6, 25.2),
    Uk(e, WF(qF.x0, qF.z0, qF.x1, qF.z1), qF.h),
    e.col(15330284).mat(0.4, 0.4, 0.4, 1));
  for (let t = 0; t < 16; t++) {
    let n = (t / 16) * Math.PI * 2,
      r = ((t + 1) / 16) * Math.PI * 2;
    for (let t of [-1, 1])
      rM(
        e,
        aI(n, 28.8, t * 1.5),
        aI(r, 28.8, t * 1.5),
        aI(r, 31.2, t * 1.5),
        aI(n, 31.2, t * 1.5),
        [t, 0, 0],
      );
  }
}
var Uxe = {
  id: `tokyo-dome-city-laqua`,
  site: (e) => ({
    x: VF.x,
    z: VF.z,
    gy: e.groundHeight(VF.x, VF.z),
    facing: 0,
  }),
  name: { ja: `東京ドームシティ`, zh: `東京巨蛋城`, en: `Tokyo Dome City` },
  near: 280,
  build: Vxe,
  far: Hxe,
  bounds: () => [-932, -813, -807, -650],
  farBoxes: (e, t) => [
    {
      x0: GF.x0,
      x1: GF.x1,
      z0: GF.z0,
      z1: GF.z1,
      y0: t.gy,
      y1: t.gy + GF.h,
      rgb: [0.8, 0.8, 0.78],
      lit: !0,
    },
    {
      x0: KF.x0,
      x1: KF.x1,
      z0: KF.z0,
      z1: KF.z1,
      y0: t.gy + GF.h,
      y1: t.gy + 128,
      rgb: [0.86, 0.86, 0.84],
      lit: !0,
    },
    {
      x0: KF.x0 + 5.4,
      x1: KF.x1 - 5.4,
      z0: KF.z0,
      z1: KF.z1,
      y0: t.gy + 128,
      y1: t.gy + 152,
      rgb: [0.86, 0.86, 0.84],
      lit: !0,
    },
    {
      x0: qF.x0,
      x1: qF.x1,
      z0: qF.z0,
      z1: qF.z1,
      y0: t.gy,
      y1: t.gy + qF.h,
      rgb: [0.55, 0.62, 0.66],
      lit: !0,
    },
    {
      x0: JF.x0,
      x1: JF.x1,
      z0: JF.z0,
      z1: JF.z1,
      y0: t.gy,
      y1: t.gy + JF.h,
      rgb: [0.6, 0.66, 0.7],
      lit: !0,
    },
  ],
  anchors: [
    {
      key: `laqua-hakusan`,
      lx: HF(-803),
      lz: UF(-760),
      turn: -Math.PI / 2,
      name: {
        zh: `東京巨蛋城 LaQua（白山通）`,
        en: `Tokyo Dome City LaQua (Hakusan-dori)`,
      },
    },
    {
      key: `tokyo-dome-hotel`,
      lx: HF(-818),
      lz: UF(-697),
      turn: Math.PI + 0.3,
      name: { zh: `東京巨蛋飯店`, en: `Tokyo Dome Hotel` },
    },
  ],
};
r.add({ 小石川後樂園: `小石川後楽園` });
var sI = { x: -1066.5, z: -719 },
  cI = { x0: -33.5, x1: 26.5, z0: -29, z1: 19 },
  lI = { x0: -11.5, x1: 2.5, z0: -11, z1: 1 },
  Wxe = -0.65,
  uI = { x: 55.7, z0: -93.2, z1: 67, t: 0.5, h: 2.4 },
  dI = { z0: 23, z1: 28 },
  fI = { z0: 47.5, z1: 52.5 },
  pI = { x0: -25.5, x1: -21.5, top: 0.25 },
  mI = { zc: -5, r: 3.4, rr: 3.95, deck: 4.15, x0: -25.1, x1: -21.9 },
  hI = { x: -18, z: 45, r: 10, h: 3.2 },
  gI = [
    [-42, -37, 35, -34],
    [-42, 24, 35, 27],
    [-42, -34, -39, 24],
    [32, -34, 35, 24],
    [32, 27, 35, 51.5],
    [35, 48.5, 55.2, 51.5],
    [-55.2, 24, -42, 27],
    [pI.x0, -34, pI.x1, cI.z0],
    [pI.x0, cI.z1, pI.x1, 24],
    [-39, -60, -36, -37],
    [-36, -63, 10, -60],
  ],
  Gxe = (e, t, n, r = 0) =>
    e > n[0] - r && e < n[2] + r && t > n[1] - r && t < n[3] + r,
  Kxe = (e, t, n) => gI.some((r) => Gxe(e, t, r, n)),
  qxe = (e, t, n) =>
    e > cI.x0 - n && e < cI.x1 + n && t > cI.z0 - n && t < cI.z1 + n;
function _I(e, t, n, r, i, a) {
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
function Jxe(e, t, n, r, i) {
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
