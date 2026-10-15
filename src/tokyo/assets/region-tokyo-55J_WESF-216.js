// tokyo/assets/region-tokyo-55J_WESF 216 — col
// Lines 84249-84596 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* kye(e, t) {
  let n = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1),
    r = t.c(`glass`),
    i = dM(-17.5, DM.z0, 17.5, DM.z1);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    zk(e, i, 0, 5.5, n, 3.2, 5.5),
    e.col(16052456).mat(0.35, 0.2, 0.12, G | 32),
    zk(
      e,
      i,
      5.5,
      DM.top - 4,
      t.c(`office`),
      e.coarse ? 7.2 : 3.6,
      e.coarse ? 8 : 4,
    ),
    e.col(15921902).mat(0.45, 0.35, 0.2, 1),
    zk(e, i, DM.top - 4, DM.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 4));
  let a = Rk(i, -0.3);
  (zk(e, PA(a), DM.top - 0.4, DM.top, e.white, 60, 1),
    BA(e, a, i, DM.top),
    e.col(8751500).mat(0.85, 0, 0, 0),
    Vk(e, a, DM.top - 0.4),
    e.coarse ||
      (e.col(16185074).mat(0.45, 0.3, 0.06, 1),
      Dj(e, i, 5.5, DM.top - 4, 3.6, 0.5, 0.3)),
    Wk(e, -16.8, DM.top, DM.z0 + 0.7, 0.4),
    Wk(e, 16.8, DM.top, DM.z1 - 0.7, 0.4),
    e.solid(-17.5, DM.z0, 17.5, DM.z1, 0, DM.top),
    yield,
    e.col(16777215).mat(0.3, 0.35, 0.3, G));
  for (let t = 0; t < AM.length - 1; t++) {
    let r = AM[t],
      i = AM[t + 1];
    e.wall(r[0], r[1], i[0], i[1], 0, 5.5, n, 3.2, 5.5);
  }
  e.col(14870762).mat(0.25, 0.3, 0.12, G);
  for (let t = 0; t < AM.length - 1; t++) {
    let n = AM[t],
      i = AM[t + 1];
    e.wall(n[0], n[1], i[0], i[1], 5.5, EM, r, 3, 3);
  }
  for (let t of [5.5, 11.5, 16.7]) {
    let n = t + 0.8;
    e.col(15987696).mat(0.5, 0.3, 0.12, 1);
    for (let r = 0; r < AM.length - 1; r++) {
      let i = AM[r],
        a = AM[r + 1],
        o = Math.hypot(a[0] - i[0], a[1] - i[1]),
        s = -(a[1] - i[1]) / o,
        c = (a[0] - i[0]) / o,
        l = [i[0] + s * 0.7, i[1] + c * 0.7],
        u = [a[0] + s * 0.7, a[1] + c * 0.7];
      if (
        (e.panel(l[0], l[1], u[0], u[1], t, n),
        Tj(e, [i, a, u, l], n),
        Tj(e, [i, a, u, l], t, !1),
        !e.coarse && t < 16.5)
      ) {
        e.push().col(6986318).mat(0.95, 0, 0, 0);
        let t = [i[0] + s * 0.15, i[1] + c * 0.15],
          r = [a[0] + s * 0.15, a[1] + c * 0.15];
        (e.panel(l[0], l[1], u[0], u[1], n, n + 0.55),
          Tj(e, [t, r, u, l], n + 0.55),
          e.pop());
      }
    }
  }
  if (!e.coarse) {
    e.col(16185074).mat(0.45, 0.3, 0.06, 1);
    for (let [t, n, r, i] of [
      [17.5, 40, 17.5, DM.z1],
      [-17.5, DM.z1, -17.5, 71],
    ])
      Dj(
        e,
        [
          [t, n],
          [r, i],
        ],
        6.3,
        16.7,
        4.2,
        0.55,
        0.28,
        (e) => e === 1,
      );
  }
  (e.solid(OM.x0, OM.z0, OM.x1, OM.z1, 0, EM),
    e.solid(kM.x0, kM.z0, kM.x1, kM.z1, 0, EM),
    yield);
  let { x0: o, x1: s, z0: c, z1: l } = Oye,
    u = e.coarse ? 10 : 40,
    d = (l - c) / u,
    f = EM / u;
  e.col(14209734).mat(0.85, 0, 0.04, 1);
  for (let t = 0; t < u; t++) {
    let n = l - t * d;
    (e.panel(o, n, s, n, t * f, (t + 1) * f),
      e.flat(o, n - d, s, n, (t + 1) * f));
  }
  e.col(15658730).mat(0.6, 0.2, 0.06, 1);
  let p = (t, n, r) => {
    let i = r > 0 ? n : t;
    tM(e, [i, 0, l], [i, 0, c], [i, 18.4, c], [i, 0.9, l], [r, 0, 0]);
  };
  (p(8.5, o, 1), p(s, 17.5, -1));
  {
    let n = 17.5,
      r = e.coarse ? 4 : 11,
      i = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1);
    e.push().col(16777215).mat(0.3, 0.35, 0.3, G);
    for (let t = 0; t < r; t++) {
      let a = l - ((l - c) * t) / r,
        o = l - ((l - c) * (t + 1)) / r,
        s = (EM * (l - a)) / (l - c),
        u = (EM * (l - o)) / (l - c);
      u > 0.6 &&
        e.quad(
          n,
          0,
          a,
          n,
          0,
          o,
          n,
          Math.max(0, u - 0.3),
          o,
          n,
          Math.max(0, s - 0.3),
          a,
          i,
          0,
          0,
          1,
          Math.min(1, u / 8.8),
        );
    }
    (e.pop(),
      tM(e, [n, 0.9, l], [n, 0, l], [n, 17.2, c], [n, 18.4, c], [1, 0, 0]));
  }
  for (let [t, n] of [
    [8.5, o],
    [s, 17.5],
  ])
    (tM(e, [t, 0.9, l], [n, 0.9, l], [n, 18.4, c], [t, 18.4, c], [0, 1, 1]),
      e.panel(t, l, n, l, 0, 0.9),
      e.solid(t, c, n, l, 0, 18.4));
  e.floor(o, c, s, l, EM, 0, `stairs`);
}
function* Aye(e, t) {
  let n = EM;
  e.col(14275786).mat(0.85, 0, 0, 0);
  let r = e.coarse ? 16 : 4;
  (e.flat(-17.5, DM.z1, 17.5, 40, n, t.c(`paving`), r, r),
    e.flat(-17.5, 40, 8.5, 71, n, t.c(`paving`), r, r));
  let i = 17.54;
  if (
    (e.col(6262599).mat(0.95, 0, 0, 0),
    e.flat(-13, -57, 13, -24, i, t.c(`lawn`), 4, 4),
    e.col(14206107).mat(0.95, 0, 0, 0),
    e.flat(-13, -13, 13, 12, i),
    e.col(11448492).mat(0.8, 0, 0, 0),
    e.flat(-13, 13, 13, 37, i),
    e.flat(-13, 43, 6, 68, i),
    yield,
    e.col(15659760).mat(0.2, 0.3, 0.35, G),
    e.box(-15, n, -21, -4, 21.1, -15.5, t.c(`glass`), 3, 3.6, e.white),
    e.col(16053488).mat(0.5, 0.2, 0.1, 1),
    e.box(-15.8, 21.1, -21.8, -3.2, 21.45, -14.7),
    e.solid(-15, -21, -4, -15.5, n, 21.4),
    !e.coarse)
  ) {
    e.col(16184558).mat(0.6, 0, 0.05, 0);
    for (let [t, r] of [
      [-11, -1],
      [1, 11],
    ])
      (e.flat(-9, t, 9, t + 0.08, 17.57),
        e.flat(-9, r - 0.08, 9, r, 17.57),
        e.flat(-9, t, -8.92, r, 17.57),
        e.flat(8.92, t, 9, r, 17.57),
        e.col(3027510).mat(0.7, 0.2, 0, 0),
        e.rod(0, n, t - 0.6, 0, 19.95, t - 0.6, 0.05, 4),
        e.rod(0, n, r + 0.6, 0, 19.95, r + 0.6, 0.05, 4),
        e.panel(0, t - 0.6, 0, r + 0.6, 19.1, 19.93),
        e.panel(0, r + 0.6, 0, t - 0.6, 19.1, 19.93),
        e.col(16184558).mat(0.6, 0, 0.05, 0));
    e.col(3820092).mat(0.6, 0.4, 0, 0);
    for (let t = -13; t <= 13.01; t += 4.333)
      (e.rod(t, n, -13, t, 21.5, -13, 0.06, 4),
        e.rod(t, n, 12.5, t, 21.5, 12.5, 0.06, 4));
    (e.rod(-13, 21.5, -13, 13, 21.5, -13, 0.05, 4),
      e.rod(-13, 21.5, 12.5, 13, 21.5, 12.5, 0.05, 4),
      e.rod(-13, 21.5, -13, -13, 21.5, 12.5, 0.05, 4),
      e.rod(13, 21.5, -13, 13, 21.5, 12.5, 0.05, 4));
  }
  (yield, e.col(12171957).mat(0.75, 0, 0, 0));
  let a = (t, r) => {
    let a = e.coarse ? 3 : 6,
      o = t - r * 1.2,
      s = [];
    for (let e = 0; e <= a; e++) {
      let n = (e / a) * (Math.PI / 2);
      s.push([t + r * 3 * (1 - Math.sin(n)), i + 2.2 * (1 - Math.cos(n))]);
    }
    for (let t = 0; t < a; t++) {
      let [n, i] = s[t],
        [a, o] = s[t + 1];
      tM(e, [-12, i, n], [12, i, n], [12, o, a], [-12, o, a], [0, 1, r]);
    }
    (tM(
      e,
      [-12, 19.74, t],
      [12, 19.74, t],
      [12, 19.74, o],
      [-12, 19.74, o],
      [0, 1, 0],
    ),
      tM(
        e,
        [-12, n, o],
        [12, n, o],
        [12, 19.74, o],
        [-12, 19.74, o],
        [0, 0, -r],
      ));
    for (let r of [-12, 12]) {
      let i = [r < 0 ? -1 : 1, 0, 0];
      for (let t = 0; t < a; t++) {
        let [a, o] = s[t],
          [c, l] = s[t + 1];
        tM(e, [r, n, a], [r, n, c], [r, l, c], [r, o, a], i);
      }
      tM(e, [r, n, t], [r, n, o], [r, 19.74, o], [r, 19.74, t], i);
    }
    (e.coarse ||
      (e.push().col(9409688).mat(0.3, 0.8, 0, 0),
      e.rod(-12, 19.79, t, 12, 19.79, t, 0.06, 5),
      e.pop()),
      e.solid(-12, Math.min(t, o), 12, Math.max(t, o), n, 19.74));
  };
  (a(17, 1), a(33, -1));
  let o = { x0: -4, x1: 4, z0: 22.8, z1: 26.8, h: 0.9 };
  (e.box(o.x0, n, o.z0, o.x1, i + o.h, o.z1),
    tM(
      e,
      [o.x0, i, o.z0 - 2.4],
      [o.x1, i, o.z0 - 2.4],
      [o.x1, i + o.h, o.z0],
      [o.x0, i + o.h, o.z0],
      [0, 1, -1],
    ),
    tM(
      e,
      [o.x0, i, o.z1 + 2.4],
      [o.x1, i, o.z1 + 2.4],
      [o.x1, i + o.h, o.z1],
      [o.x0, i + o.h, o.z1],
      [0, 1, 1],
    ));
  for (let t of [o.x0, o.x1]) {
    let n = [t < 0 ? -1 : 1, 0, 0];
    (tM(
      e,
      [t, i, o.z0 - 2.4],
      [t, i, o.z0],
      [t, i + o.h, o.z0],
      [t, i + o.h, o.z0],
      n,
    ),
      tM(
        e,
        [t, i, o.z1 + 2.4],
        [t, i, o.z1],
        [t, i + o.h, o.z1],
        [t, i + o.h, o.z1],
        n,
      ));
  }
  if (!e.coarse) {
    (e.col(9409688).mat(0.3, 0.8, 0, 0),
      e.rod(7, 18.09, 20.5, 7, 18.09, 29.5, 0.05, 5));
    for (let t of [21, 25, 29]) e.rod(7, i, t, 7, 18.09, t, 0.04, 4);
  }
  if (
    (yield,
    e.col(7304312).mat(0.8, 0, 0, 0),
    e.box(-13, n, 60, 2, 22.1, 61.2),
    e.solid(-13, 60, 2, 61.2, n, 22.1),
    !e.coarse)
  ) {
    let t = new ie(7731),
      r = [15222060, 15909424, 3116512, 3650125, 14834344, 16052970];
    for (let i = 0; i < 36; i++) {
      e.col(r[t.int(0, r.length - 1)]).mat(0.7, 0, 0.05, 0);
      let i = t.range(-12.6, 1.6),
        a = n + t.range(0.4, 4.3),
        o = t.range(0.12, 0.26);
      e.obox(i, a, 60 - o * 0.6, o, o * 0.8, o * 0.6, t.range(0, 1.5));
    }
    (e.col(2964050).mat(0.95, 0, 0, 0),
      e.box(-12.5, n, 57.1, 1.5, 17.89, 59.9));
  }
  if (!e.coarse) {
    let t = 911;
    for (let r = -55; r < 68; r += 9) {
      if (r > -23 && r < -13) continue;
      let i = -15.7;
      (e.col(13617596).mat(0.85, 0, 0, 0),
        e.cylY(i, r, n, 18.1, 1.1, 8),
        LA(e, i, 18.1, r, 7 + (t % 3), t++));
    }
    for (let r = -50; r < 38; r += 12)
      (e.col(13617596).mat(0.85, 0, 0, 0),
        e.cylY(15.6, r, n, 18.1, 1, 8),
        LA(e, 15.6, 18.1, r, 6.5 + (t % 2), t++));
    for (let t = -52; t < 66; t += 11)
      for (let r of t + 4 > 40 ? [-14.2, 7.4] : [-13.9, 14.2])
        (r < 0 && t > -24 && t < -12) ||
          (e.col(3816768).mat(0.5, 0.6, 0, 0),
          e.cylY(r, t + 4, n, 21.5, 0.07, 5),
          e.push().col(16773328).mat(0.3, 0, 0.95, 1),
          e.cylY(r, t + 4, 21.5, 21.95, 0.22, 6),
          e.pop(),
          e.pole(r, t + 4, 0.12, n, 21.95));
    for (let t = -14; t < 15; t += 2.6) RA(e, t, n, DM.z1 + 1.4, 1);
  }
  (pM(e, 17.35, 40, 17.35, DM.z1, n),
    pM(e, -17.35, DM.z1, -17.35, 71, n),
    pM(e, -17.5, 70.85, 8.5, 70.85, n),
    pM(e, 8.35, 71, 8.35, 40.2, n),
    e.floor(-17.5, DM.z1, 17.5, 40, n, n),
    e.floor(-17.5, 40, 8.5, 71, n, n),
    e.solid(17.2, DM.z1, 17.5, 40, n, 18.6, `prop`),
    e.solid(-17.5, DM.z1, -17.2, 71, n, 18.6, `prop`),
    e.solid(-17.5, 70.7, 8.5, 71, n, 18.6, `prop`),
    e.solid(8.2, 40.2, 8.5, 71, n, 18.6, `prop`));
}
function* jye(e, t) {
  (yield* kye(e, t), yield* Aye(e, t));
}
function Mye(e, t) {
  (e.col(16052456).mat(0.35, 0.2, 0.12, G | 32),
    e.box(-17.5, 0, DM.z0, 17.5, DM.top, DM.z1, t.c(`glass`)),
    e.col(14870762).mat(0.25, 0.3, 0.12, G),
    e.box(-17.5, 0, DM.z1, 17.5, EM, 71, t.c(`glass`)));
}
