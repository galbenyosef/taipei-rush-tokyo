// tokyo/assets/region-tokyo-55J_WESF 313 — coarse
// Lines 113244-113566 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function zDe(e, t) {
  if (e.coarse) return;
  let n = [100, 124, 180, 204, 230, 256, 282];
  e.push().col(9344410).mat(0.5, 0.6, 0, 0);
  for (let r of n) {
    let n = qK(t, r),
      i = xs + iq + 0.4,
      a = xs + rq(t, r) + 0.2,
      o = n + 7;
    e.box(i, o, r - 0.18, a, o + 0.5, r + 0.18);
    let s = [i + 0.2, a - 0.2];
    for (let e of Ls) r > e.z0 + 2 && r < e.z1 - 2 && s.push((e.x0 + e.x1) / 2);
    r > 219 && r < 343 && s.push((Ts.island[0] + Ts.island[1]) / 2);
    for (let t of s) {
      let i = r > 210 && s.indexOf(t) > 1 ? 1.65 : n;
      (e.box(t - 0.16, i, r - 0.16, t + 0.16, o, r + 0.16),
        e.pole(t, r, 0.22, i, o));
    }
    e.coarse || e.box(i, o - 0.6, r - 0.02, a, o - 0.56, r + 0.02);
  }
  e.pop();
}
function BDe(e) {
  let t = [
    [-2106.6, 206, -2106.6, 262],
    [-2106.6, 262, -2089.2, 262],
  ];
  e.push().col(MDe).mat(0.6, 0.5, 0, 0);
  for (let [n, r, i, a] of t) {
    let t = Math.hypot(i - n, a - r),
      o = (i - n) / t,
      s = (a - r) / t;
    e.box(
      Math.min(n, i) - 0.1,
      0.15,
      Math.min(r, a) - 0.1,
      Math.max(n, i) + 0.1,
      0.55,
      Math.max(r, a) + 0.1,
    );
    for (let t of [1.25, 1.95])
      e.box(
        Math.min(n, i) - 0.03,
        t,
        Math.min(r, a) - 0.03,
        Math.max(n, i) + 0.03,
        t + 0.06,
        Math.max(r, a) + 0.03,
      );
    if (!e.coarse)
      for (let i = 0; i <= t; i += 3) {
        let t = n + o * i,
          a = r + s * i;
        e.box(t - 0.04, 0.55, a - 0.04, t + 0.04, 2, a + 0.04);
      }
    e.solid(
      Math.min(n, i) - 0.1,
      Math.min(r, a) - 0.1,
      Math.max(n, i) + 0.1,
      Math.max(r, a) + 0.1,
      0,
      2,
      `fence`,
    );
  }
  e.pop();
}
function* VDe(e, t) {
  let n = xs + iq - 1.7,
    r = -2089.2,
    i = bs.BR - 0.8;
  (e.push().col(QK).mat(0.9, 0.2, 0.03, 1),
    e.flat(n, 300, r, 404, i, e.white, 0, 0, !1),
    e.flat(-2167.6, 362.2, n, 403.6, i, e.white, 0, 0, !1),
    e.col(4145732).mat(0.9, 0.2, 0, 0));
  for (let t = 305; t < 404; t += 10)
    e.box(n, i - 0.7, t - 0.4, r, i, t + 0.4, e.white, 0, 0, null, !0);
  if (!e.coarse) {
    e.col(16184296).mat(0.5, 0, 0.6, 1);
    for (let t of [xs - 6, xs + 10.7, xs + 26.7, xs + 42.7])
      e.flat(t - 0.2, 301, t + 0.2, 403, i - 0.72, e.white, 0, 0, !1);
  }
  (e.pop(), yield);
  let a = [
    n + 0.6,
    (Ts.island[0] + Ts.island[1]) / 2,
    ...Ls.map((e) => (e.x0 + e.x1) / 2),
    -2089.7999999999997,
  ];
  e.push().col(10133668).mat(0.7, 0.2, 0, 0);
  for (let t of a)
    for (let n = 305; n < 404; n += e.coarse ? 20 : 10) {
      let r = t !== a[0] && t !== a[a.length - 1];
      (r && n > 360) ||
        (e.cylY(t, n, r ? 1.65 : 0, i - 0.7, 0.42, e.coarse ? 6 : 8),
        e.pole(t, n, 0.45, r ? 1.65 : 0, i));
    }
  e.pop();
}
function* HDe(e, t) {
  let n = xs + iq - 1.7,
    r = -2089.2,
    i = 328.25,
    a = bs.BR + 0.15,
    o = bs.BR + 10.5;
  (e
    .push()
    .col(14210251)
    .mat(0.8, 0, 0.06, G | 32),
    e.wall(
      r,
      300,
      n,
      300,
      a - 0.95,
      o,
      t.c(`office`),
      6.4 * (e.coarse ? 3 : 1),
      4.2 * (e.coarse ? 3 : 1),
    ),
    e.wall(
      n,
      300,
      n,
      i,
      a - 0.95,
      o,
      t.c(`office`),
      6.4 * (e.coarse ? 3 : 1),
      4.2 * (e.coarse ? 3 : 1),
    ),
    e.col(10263188).mat(0.85, 0, 0, 0),
    e.flat(n, 300, r, i, o),
    e.col(16777215).mat(0.3, 0.3, 0.35, G),
    e.wall(
      n,
      i,
      -2120,
      i,
      a,
      a + 5.2,
      t.c(`glass`),
      3.2 * (e.coarse ? 3 : 1),
      5.2 * (e.coarse ? 3 : 1),
    ),
    e.col(13618372).mat(0.8, 0, 0.05, 1),
    e.wall(
      n,
      i,
      -2120,
      i,
      a + 5.2,
      o,
      e.white,
      8 * (e.coarse ? 3 : 1),
      4 * (e.coarse ? 3 : 1),
    ),
    e.col(14870248).mat(0.3, 0.5, 0.15, 1),
    e.box(n + 2, a + 4.4, i, -2122, a + 4.75, 331.45, e.white, 0, 0, null, !0),
    e.pop(),
    e.solid(n, 300, r, i, a, o),
    e.floor(n, 300, r, i, a),
    e.coarse ||
      (e.push().col(2067002).mat(0.45, 0.2, 0.55, 1),
      UB(e, `JR 新宿駅`, -2141, o - 3.4, 328.6, RB, 2.6, {
        raw: !0,
        px: 30,
        align: 0.5,
      }),
      e.pop()),
    yield);
  let s = -2120;
  (e
    .push()
    .col(14273974)
    .mat(0.8, 0, 0.06, G | 32),
    e.wall(
      r,
      328.24,
      r,
      300,
      a,
      34,
      t.c(`plaster`),
      4 * (e.coarse ? 3 : 1),
      4 * (e.coarse ? 3 : 1),
    ),
    e.wall(
      s,
      300,
      s,
      i,
      o,
      34,
      t.c(`plaster`),
      4 * (e.coarse ? 3 : 1),
      4 * (e.coarse ? 3 : 1),
    ),
    e.wall(
      r,
      300,
      s,
      300,
      o,
      34,
      t.c(`plaster`),
      4 * (e.coarse ? 3 : 1),
      4 * (e.coarse ? 3 : 1),
    ),
    e.wall(
      s,
      i,
      r,
      i,
      a,
      34,
      t.c(`plaster`),
      4 * (e.coarse ? 3 : 1),
      4 * (e.coarse ? 3 : 1),
    ),
    e.col(11839632).mat(0.85, 0, 0, 0),
    e.flat(s, 300, r, i, 34),
    e.col(16777215).mat(0.3, 0.35, 0.4, G));
  let c = -4209.2 / 2,
    l = 5.2,
    u = a + 3;
  e.panel(-2109.7999999999997, 328.3, -2099.4, 328.3, u, 25, t.c(`glass`));
  let d = e.coarse ? 4 : 8;
  for (let t = 0; t < d; t++) {
    let n = VK - (VK * t) / d,
      r = VK - (VK * (t + 1)) / d;
    e.triFace(
      c,
      25,
      328.3,
      c + Math.cos(n) * l,
      25 + Math.sin(n) * l,
      328.3,
      c + Math.cos(r) * l,
      25 + Math.sin(r) * l,
      328.3,
    );
  }
  (e.pop(),
    e.solid(s, 300, r, i, a, 34),
    e.coarse ||
      WB(e, c, 30.8, i, RB, 9, 2, 0.25, 16052714, `LUMINE 2`, 2783850, {
        px: 24,
        lit: 0.4,
      }));
}
function UDe(e) {
  (e.col(13618114).mat(0.8, 0, 0.05, G | 32),
    e.box(xs - 6.5, bs.BR - 1, 300, -2120, bs.BR + 10.5, 328.25),
    e.box(-2120, bs.BR - 1, 300, -2089.2, 34, 328.25),
    e.col(YK).mat(0.9, 0, 0, 0),
    e.box(xs - 4.8, -3, 167, -2116, bs.OG, 210));
}
var WDe = {
  id: `sj-field`,
  site: HK,
  name: { ja: `新宿駅`, zh: `新宿站`, en: `Shinjuku Station` },
  near: 260,
  *build(e, t) {
    let n = yDe(t.plan);
    (yield* IDe(e, n), yield* PDe(e, n));
    for (let t of Ls) (FDe(e, t), yield);
    (yield* LDe(e, t, n),
      yield* RDe(e, n),
      zDe(e, n),
      BDe(e),
      yield,
      yield* VDe(e, n),
      yield* HDe(e, t));
  },
  far: UDe,
  bounds: () => [-2160, 80, -2086, 456],
  farBoxes: () => [
    {
      x0: xs - 6.5,
      x1: -2089.2,
      z0: 300,
      z1: 328.25,
      y0: bs.BR - 1,
      y1: bs.BR + 10.5,
      rgb: [0.78, 0.76, 0.72],
      lit: !0,
    },
    {
      x0: -2120,
      x1: -2089.2,
      z0: 300,
      z1: 328.25,
      y0: bs.BR + 10.5,
      y1: 34,
      rgb: [0.8, 0.75, 0.66],
      lit: !0,
    },
  ],
  roofs: [{ lx0: xs - 6.5, lz0: 300, lx1: -2089.2, lz1: 404, y: bs.BR - 0.8 }],
};
function aq(e, t, n, r, i) {
  let a = 1 / 0;
  for (let o = 0; o <= 3; o++)
    for (let s = 0; s <= 3; s++)
      a = Math.min(
        a,
        e.groundHeight(t + ((r - t) * s) / 3, n + ((i - n) * o) / 3),
      );
  return a;
}
var oq = (e) => (e.coarse ? 3 : 1),
  sq = (e, t, n, r, i, a, o, s = !0) => ({
    x0: e,
    x1: n,
    z0: t,
    z1: r,
    y0: i,
    y1: a,
    rgb: o,
    lit: s,
  }),
  cq = { x0: -2208.2, z0: 167.3, x1: -2187, z1: 204.5, h: 28 };
