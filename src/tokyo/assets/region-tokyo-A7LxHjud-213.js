// tokyo/assets/region-tokyo-A7LxHjud 213 — col
// Lines 83387-83734 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Tye(e, t) {
  (e.col(14736336).mat(0.8, 0, 0.03, G),
    e.flat(
      -1006,
      tM.z1,
      -973,
      892,
      Yj,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ),
    e.flat(
      -1050,
      892,
      -1006,
      917,
      Yj,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ));
  let n = -1005,
    r = -985;
  if (
    (e.col(13623528).mat(0.08, 0.5, 0.07, 1),
    e.box(n, 12, 848, r, 12.35, 882, e.white, 0, 0, null, !0),
    !e.coarse)
  ) {
    e.col(15265006).mat(0.4, 0.6, 0, 0);
    for (let t = 852; t < 882; t += 4)
      e.box(n, 12.35, t - 0.1, r, 12.6, t + 0.1);
    for (let t of [-1002, -987])
      for (let n = 851; n < 882; n += 9.5)
        (e.cylY(t, n, 0, 12, 0.22, 8, 0.16, !1), e.pole(t, n, 0.25, 0, 12));
  }
  yield;
  let i = 91;
  for (let t = 842; t < 890; t += e.coarse ? 16 : 8)
    (KC(e, -977, t, 8.5, i++), e.pole(-977, t, 0.3, 0, 3));
  for (let t = -1046; t < -1008; t += 9)
    (KC(e, t, 913, 8, i++), e.pole(t, 913, 0.3, 0, 3));
  if (!e.coarse)
    for (let [t, n] of [
      [-981, 846],
      [-981, 870],
      [-981, 888],
      [-1030, 908],
      [-1012, 908],
    ])
      (qC(e, t, Yj, n, 4.8), e.pole(t, n, 0.12, 0, 4.8));
}
function* Eye(e, t) {
  let { x0: n, x1: r, z0: i, z1: a, h: o, ridge: s, s0: c, s1: l } = $j;
  (e.col(15655628).mat(0.35, 0.3, 0.4, G),
    Oj(e, n, i, r, a, 0, 6, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 6),
    e.col(14077116).mat(0.7, 0, 0.05, 1),
    e.box(n - 0.4, 6, i - 0.4, r + 0.4, 6.8, a + 0.4),
    e.col(16777215).mat(0.7, 0, 0.16, G),
    Oj(e, n, i, r, a, 6.8, o, t.c(`forumWood`), 3, 3.8, 10394774),
    e.col(14736078).mat(0.7, 0, 0, 0),
    e.coarse ||
      Wk(
        e,
        [
          [r, i],
          [n, i],
          [n, a],
          [r, a],
        ],
        0.3,
        o - 0.1,
        o + 0.6,
      ),
    yield);
  let u = e.coarse ? o : o + 0.6,
    d = (c + l) / 2;
  e.col(14214894).mat(0.08, 0.45, 0.5, G);
  let f = t.c(`glass`),
    p = e.coarse ? 2 : 8;
  for (let t = 0; t < p; t++) {
    let i = n + 2 + ((r - n - 4) * t) / p,
      a = n + 2 + ((r - n - 4) * (t + 1)) / p;
    (e.quad(a, u, c, i, u, c, i, s, d, a, s, d, f),
      e.quad(i, u, l, a, u, l, a, s, d, i, s, d, f));
  }
  if (
    (e.triFace(n + 2, u, l, n + 2, s, d, n + 2, u, c),
    e.triFace(r - 2, u, c, r - 2, s, d, r - 2, u, l),
    !e.coarse)
  ) {
    (e.col(15790834).mat(0.4, 0.6, 0, 0),
      e.rod(n + 2, s + 0.1, d, r - 2, s + 0.1, d, 0.14, 4));
    for (let t = 0; t <= p; t++) {
      let i = n + 2 + ((r - n - 4) * t) / p;
      (e.rod(i, u, c, i, s + 0.05, d, 0.08, 4),
        e.rod(i, u, l, i, s + 0.05, d, 0.08, 4));
    }
  }
  e.solid(n, i, r, a, 0, o + 1);
}
function* Dye(e, t) {
  {
    let { x0: n, x1: r, z0: i, z1: a, h: o } = Cye;
    (e.col(14998733).mat(0.35, 0.3, 0.42, G),
      Oj(e, n, i, r, a, 0, 5.5, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 5.5),
      e.col(14674156).mat(0.12, 0.4, 0.35, G),
      Oj(e, n, i, r, a, 5.5, o, t.c(`glass`), 3, 4.75, 10131604),
      e.col(15131354).mat(0.6, 0.1, 0, 0),
      e.coarse ||
        Wk(
          e,
          [
            [r, i],
            [n, i],
            [n, a],
            [r, a],
          ],
          0.3,
          o - 0.2,
          o + 0.5,
        ),
      e.solid(n, i, r, a, 0, o));
  }
  {
    let { x0: n, x1: r, z0: i, z1: a, h: o } = eM;
    (e.col(14080732).mat(0.35, 0.3, 0.3, G),
      Oj(e, n, i, r, a, 0, 6, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 6),
      e.col(15264490).mat(0.4, 0.4, 0.14, G | 32),
      Oj(
        e,
        n,
        i,
        r,
        a,
        6,
        o,
        t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
        e.coarse ? 12.8 : 6.4,
        e.coarse ? 28 : 14,
        9343636,
      ),
      e.col(13685456).mat(0.6, 0.2, 0, 0),
      e.coarse ||
        (Wk(
          e,
          [
            [r, i],
            [n, i],
            [n, a],
            [r, a],
          ],
          0.4,
          o - 0.3,
          o + 0.8,
        ),
        e.box(n + 3, o, i + 12, r - 3, o + 3.5, a - 12)),
      e.solid(n, i, r, a, 0, o),
      Kk(e, n + 1.5, o + 0.8, i + 1.5, 0.3));
  }
  yield;
  let { x0: n, x1: r, z0: i, z1: a } = tM;
  (e.col(15266016).mat(0.95, 0, 0, 0),
    e.flat(n, i, r, a, Yj, t.c(`lawn`), e.coarse ? 12 : 6, e.coarse ? 12 : 6),
    e.col(14209732).mat(0.85, 0, 0.03, G),
    e.flat(
      n,
      a,
      -1006,
      a + 10,
      Yj,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 10 : 4,
    ),
    e.flat(-1048, i + 2, -1042, a, 0.05, t.c(`paving`), 3, 4));
  let o = 121;
  for (let t = n + 4; t < r - 2; t += e.coarse ? 20 : 10)
    (KC(e, t, i + 3, 9, o++), e.pole(t, i + 3, 0.3, 0, 3));
  for (let [t, n, r] of [
    [-1036, 820, 8],
    [-1020, 826, 7.5],
    [-1004, 812, 8.5],
    [-990, 824, 7.5],
    [-1108, 828, 8],
  ])
    (KC(e, t, n, r, o++), e.pole(t, n, 0.3, 0, 3));
  let s = { x0: -1094, x1: -1060, z0: 808, z1: 824 };
  (e.col(13622756).mat(0.1, 0.4, 0.4, G),
    Oj(
      e,
      s.x0 + 5,
      s.z0 + 3,
      s.x1 - 3,
      s.z1 - 3,
      Yj,
      2.8,
      t.c(`glass`),
      3,
      2.8,
    ));
  let c = [s.x0, 0.4, s.z1],
    l = [s.x1, 3.6, s.z1 + 1],
    u = [s.x1 + 1, 5.6, s.z0],
    d = [s.x0 + 2, 3.2, s.z0 - 1];
  e.col(6185574).mat(0.5, 0.6, 0.04, 1);
  for (let [t, n, r] of [
    [c, l, u],
    [c, u, d],
  ])
    (e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]),
      e.triFace(
        t[0],
        t[1] - 0.15,
        t[2],
        n[0],
        n[1] - 0.15,
        n[2],
        r[0],
        r[1] - 0.15,
        r[2],
      ));
  e.solid(s.x0 + 5, s.z0 + 3, s.x1 - 3, s.z1 - 3, 0, 3);
}
function* Oye(e, t) {
  let n = Tj(e, Jj.x, Jj.z);
  (yield* wye(e, t),
    yield,
    yield* Tye(e, t),
    yield,
    yield* Eye(e, t),
    yield,
    yield* Dye(e, t),
    e.leave(n));
}
function kye(e, t) {
  let n = Tj(e, Jj.x, Jj.z),
    r = 0;
  for (let n of Xj) {
    let i = nM(n, !0);
    (e.col(15920354).mat(0.3, 0.2, 0.05, G | 32),
      Vk(e, i, r, n.y, t.c(`glass`), 48, 33.6),
      (r = n.y));
  }
  let i = nM(Xj[2], !0);
  (e.col(15791350).mat(0.4, 0.4, 0.22, 1),
    Vk(e, i, r, Zj, e.white, 20, 10),
    e.col(8159364).mat(0.85, 0, 0, 0),
    Uk(e, i, Zj),
    Kk(e, Xj[2].x0 + 1.5, Zj, Xj[2].z0 + 1.5, 0.8),
    e.col(15261128).mat(0.6, 0, 0.16, G),
    Oj(
      e,
      $j.x0,
      $j.z0,
      $j.x1,
      $j.z1,
      0,
      $j.h,
      t.c(`forumWood`),
      24,
      22,
      10394774,
    ),
    e.col(15264490).mat(0.4, 0.4, 0.14, G | 32),
    Oj(
      e,
      eM.x0,
      eM.z0,
      eM.x1,
      eM.z1,
      0,
      eM.h,
      t.A.sub(`lcTkGrid`, 0, 0, 0.5, 1),
      25.6,
      28,
      9343636,
    ),
    e.leave(n));
}
var Aye = {
  id: `tokyo-nakamachi`,
  lot: `tokyo-midtown`,
  site: Sye,
  name: { ja: `東京ナカマチ`, zh: `東京中町`, en: `Tokyo Nakamachi` },
  near: 260,
  build: Oye,
  far: kye,
  bounds: () => [-1121, 798, -973, 917],
  farBoxes: (e, t) => [
    ...Xj.map((e, n) => ({
      x0: e.x0,
      x1: e.x1,
      z0: e.z0,
      z1: e.z1,
      y0: t.gy + (n ? Xj[n - 1].y : 0),
      y1: t.gy + (n === 2 ? Zj : e.y),
      rgb: [0.5, 0.56, 0.6],
      lit: !0,
    })),
    {
      x0: $j.x0,
      x1: $j.x1,
      z0: $j.z0,
      z1: $j.z1,
      y0: t.gy,
      y1: t.gy + $j.h,
      rgb: [0.55, 0.46, 0.36],
      lit: !0,
    },
    {
      x0: eM.x0,
      x1: eM.x1,
      z0: eM.z0,
      z1: eM.z1,
      y0: t.gy,
      y1: t.gy + eM.h,
      rgb: [0.52, 0.54, 0.55],
      lit: !0,
    },
  ],
  anchors: [
    {
      key: `tokyo-nakamachi-plaza`,
      lx: -980 - Jj.x,
      lz: 864 - Jj.z,
      turn: -Math.PI / 2,
      name: { zh: `東京中町 廣場`, en: `Tokyo Nakamachi Plaza` },
    },
    {
      key: `tokyo-nakamachi-garden`,
      lx: -1040 - Jj.x,
      lz: 832 - Jj.z,
      turn: Math.PI,
      name: { zh: `東京中町 花園`, en: `Tokyo Nakamachi Garden` },
    },
  ],
  roofs: [
    {
      lx0: -1005 - Jj.x,
      lz0: 848 - Jj.z,
      lx1: -985 - Jj.x,
      lz1: 882 - Jj.z,
      y: 12,
    },
  ],
  blip: !0,
};
