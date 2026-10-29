// tokyo/assets/region-tokyo-55J_WESF 205 — top
// Lines 80875-81212 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var wve = {
    id: `toranomon-hills`,
    site: (e) => ({
      x: HA.x,
      z: HA.z,
      gy: e.groundHeight(HA.x, HA.z),
      facing: 0,
    }),
    name: { ja: `虎ノ門ヒルズ`, zh: `虎之門之丘`, en: `Toranomon Hills` },
    near: 260,
    build: Sve,
    far: Cve,
    bounds: () => [-592, 586, -515, 760],
    farBoxes: (e, t) => [
      {
        x0: HA.x - 21,
        x1: HA.x + 21,
        z0: HA.z - 20,
        z1: HA.z + 20,
        y0: t.gy,
        y1: t.gy + 150,
        rgb: [0.34, 0.42, 0.5],
        lit: !0,
      },
      {
        x0: HA.x - 17,
        x1: HA.x + 17,
        z0: HA.z - 19,
        z1: HA.z + 19,
        y0: t.gy + 150,
        y1: t.gy + GA.top,
        rgb: [0.36, 0.44, 0.52],
        lit: !0,
      },
      {
        x0: HA.x + XA.x0,
        x1: HA.x + XA.x1,
        z0: HA.z + XA.z0,
        z1: HA.z + XA.z1,
        y0: t.gy,
        y1: t.gy + XA.h,
        rgb: [0.33, 0.41, 0.49],
        lit: !0,
      },
      {
        x0: HA.x + ZA.x0,
        x1: HA.x + ZA.x1,
        z0: HA.z + ZA.z0,
        z1: HA.z + ZA.z1,
        y0: t.gy,
        y1: t.gy + ZA.h,
        rgb: [0.55, 0.53, 0.5],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `toranomon-hills-portal`,
        lx: UA(-511),
        lz: WA(703),
        turn: -Math.PI / 2,
        name: {
          zh: `虎之門之丘 環狀二號線隧道口`,
          en: `Toranomon Hills, Loop Road No. 2 tunnel portal`,
        },
      },
      {
        key: `toranomon-hills-oval-plaza`,
        lx: UA(-579),
        lz: WA(635.5),
        turn: Math.PI,
        name: {
          zh: `虎之門之丘 橢圓廣場階梯`,
          en: `Toranomon Hills, Oval Plaza steps`,
        },
      },
    ],
    blip: !0,
  },
  $A = { x: -553, z: 571 },
  ej = { top: 266, nodeY0: 222, nodeY1: 250, hx: 21, hz: 19, funnel: 16 };
function tj(e) {
  let t = Math.min(1, Math.max(0, e) / ej.top),
    n = e < ej.funnel ? 6.5 * (1 - Math.max(0, e) / ej.funnel) ** 1.4 : 0;
  return fve(-ej.hx + n, -ej.hz + n, ej.hx - n, ej.hz - n, [
    2.5,
    13 * t,
    2.5 + 5 * t,
    13 * (1 - t),
  ]);
}
function* Tve(e, t) {
  let n = e.coarse ? 16 : 4;
  if (
    (e.col(14867924).mat(0.85, 0, 0, 0),
    e.flat(
      -592 - $A.x,
      541 - $A.z,
      -515 - $A.x,
      602 - $A.z,
      0.04,
      t.c(`paving`),
      n,
      n,
    ),
    !e.coarse)
  ) {
    let t = 101;
    for (let n of [-588, -581, -526, -519])
      LA(e, n - $A.x, 0.04, 598 - $A.z, 9, t++);
    for (let n of [548, 560, 584]) LA(e, -519 - $A.x, 0.04, n - $A.z, 8.5, t++);
  }
  (yield,
    e.col(16777215).mat(0.3, 0.35, 0.32, G),
    NA(e, tj, 0, ej.funnel, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 8),
    e.col(16777215).mat(0.3, 0.15, 0.1, G | 32),
    NA(
      e,
      tj,
      ej.funnel,
      ej.nodeY0,
      t.c(`gtGlass`),
      e.coarse ? 25.6 : 12.8,
      e.coarse ? 25.2 : 12.6,
    ),
    yield);
  let r = (e) => Rk(tj(e), 1.8);
  (e.col(16054522).mat(0.25, 0.2, 0.3, G),
    NA(e, r, ej.nodeY0, ej.nodeY1, t.c(`glass`), 6.4, 9.33),
    e.col(15527662).mat(0.5, 0.4, 0.3, 1),
    BA(e, tj(ej.nodeY0), r(ej.nodeY0), ej.nodeY0, !1),
    BA(e, tj(ej.nodeY1), r(ej.nodeY1), ej.nodeY1));
  let i = tj(ej.nodeY1);
  (e.col(9343638).mat(0.85, 0, 0, 0), Vk(e, i, ej.nodeY1));
  let a = ej.nodeY1;
  if (
    (e.col(5933637).mat(0.95, 0, 0, 0),
    e.flat(-15, -12, 1, 12, a + 0.04, t.c(`lawn`), 4, 4),
    e.col(4038607).mat(0.05, 0.3, 0.35, 1),
    e.flat(4, -11, 15, 6, a + 0.04),
    !e.coarse)
  ) {
    (e.col(14275786).mat(0.85, 0, 0, 0),
      e.box(3.4, a, -11.6, 15.6, a + 0.3, -11),
      e.box(3.4, a, 6, 15.6, a + 0.3, 6.6));
    let n = 121;
    for (let [t, r] of [
      [-12, -9],
      [-6, 8],
      [-2, -6],
      [-12, 6],
    ])
      LA(e, t, a + 0.04, r, 5.5, n++);
    (e.col(16777215).mat(0.2, 0.4, 0.4, G),
      e.box(4, a, 8, 14, a + 4.5, 14, t.c(`glass`), 3.2, 4.5, e.white));
  }
  (yield, e.col(15790834).mat(0.5, 0.3, 0.35, 1));
  let o = i.length,
    s = ej.top - 1.6;
  for (let t = 0; t < o; t++) {
    let n = i[t],
      r = i[(t + 1) % o],
      c = Math.hypot(r[0] - n[0], r[1] - n[1]);
    if (c < 0.001) continue;
    let l = e.coarse ? 8 : 3.2,
      u = Math.max(1, Math.round(c / l));
    for (let t = 0; t < u; t++) {
      let i = (t + 0.5) / u,
        o = n[0] + (r[0] - n[0]) * i,
        c = n[1] + (r[1] - n[1]) * i,
        l = Math.atan2(r[1] - n[1], r[0] - n[0]);
      e.obox(o, (a + s) / 2, c, 0.25, (s - a) / 2, 0.55, l);
    }
  }
  let c = Rk(i, 0.4),
    l = Rk(i, -0.6);
  (zk(e, c, s, ej.top, e.white, 60, 2),
    zk(e, PA(l), s, ej.top, e.white, 60, 2),
    BA(e, l, c, ej.top),
    BA(e, l, c, s, !1));
  for (let t of [0, 2, 4, 6]) {
    let n = Rk(i, 0.5)[t];
    Wk(e, n[0], ej.top, n[1], 0.7);
  }
  for (let t of [1, 5]) {
    let n = Rk(tj(130), 0.2)[t];
    Wk(e, n[0], 129.5, n[1], 0.4);
  }
  (e.solid(-ej.hx + 6.5, -ej.hz + 6.5, ej.hx - 6.5, ej.hz - 6.5, 0, ej.funnel),
    e.solid(-ej.hx, -ej.hz, ej.hx, ej.hz, 5, ej.top));
}
function Eve(e, t) {
  (e.col(16777215).mat(0.3, 0.15, 0.1, G | 32),
    NA(e, tj, 0, ej.nodeY0, t.c(`gtGlass`), 25.6, 50.4),
    e.col(16054522).mat(0.15, 0.4, 0.38, G),
    NA(e, (e) => Rk(tj(e), 1.8), ej.nodeY0, ej.nodeY1, t.c(`glass`), 12.8, 28),
    e.col(15790834).mat(0.5, 0.3, 0.35, 1),
    zk(
      e,
      tj(ej.nodeY1),
      ej.nodeY1,
      ej.top,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      12.8,
      16,
    ),
    e.col(9343638).mat(0.85, 0, 0, 0),
    Vk(e, tj(ej.top), ej.top - 0.5),
    Wk(e, 0, ej.top, 0, 0.8));
}
var Dve = {
  id: `toranomon-hills-station`,
  site: (e) => ({
    x: $A.x,
    z: $A.z,
    gy: e.groundHeight($A.x, $A.z),
    facing: 0,
  }),
  name: {
    ja: `虎ノ門ヒルズ ステーションタワー`,
    zh: `虎之門之丘 車站大樓`,
    en: `Toranomon Hills Station Tower`,
  },
  near: 260,
  build: Tve,
  far: Eve,
  bounds: () => [-592, 541, -515, 602],
  farBoxes: (e, t) => [
    {
      x0: $A.x - ej.hx,
      x1: $A.x + ej.hx,
      z0: $A.z - ej.hz,
      z1: $A.z + ej.hz,
      y0: t.gy,
      y1: t.gy + ej.nodeY0,
      rgb: [0.5, 0.56, 0.6],
      lit: !0,
    },
    {
      x0: $A.x - ej.hx - 1.8,
      x1: $A.x + ej.hx + 1.8,
      z0: $A.z - ej.hz - 1.8,
      z1: $A.z + ej.hz + 1.8,
      y0: t.gy + ej.nodeY0,
      y1: t.gy + ej.nodeY1,
      rgb: [0.7, 0.74, 0.76],
      lit: !0,
    },
    {
      x0: $A.x - ej.hx,
      x1: $A.x + ej.hx,
      z0: $A.z - ej.hz,
      z1: $A.z + ej.hz,
      y0: t.gy + ej.nodeY1,
      y1: t.gy + ej.top,
      rgb: [0.85, 0.86, 0.86],
    },
  ],
  anchors: [
    {
      key: `toranomon-hills-station-tower`,
      lx: 0,
      lz: 31,
      turn: 0,
      name: { zh: `虎之門之丘 車站大樓`, en: `Toranomon Hills Station Tower` },
    },
  ],
  blip: !0,
};
r.add({ "麻布台之丘 森JP大樓": `麻布台ヒルズ 森JPタワー` });
var nj = { x: -660, z: 925 },
  rj = (e) => e - nj.x,
  ij = (e) => e - nj.z,
  aj = { top: 325.2, crown: 296, res: 262, lobby: 10 },
  oj = { x0: rj(-711), z0: ij(848), x1: rj(-692), z1: ij(988) },
  sj = { x0: rj(-686), z0: ij(960), x1: rj(-608), z1: ij(988) },
  Ove = (e, t) =>
    13 + 5.5 * Math.sin(t / 16 + 0.5) + 2 * Math.sin(e / 7 + t / 30),
  kve = (e, t) =>
    12 + 4.5 * Math.sin(e / 14 + 1.2) + 2 * Math.sin(t / 6 + e / 25),
  Ave = { x0: rj(-688), z0: ij(848), x1: rj(-609), z1: ij(894) },
  cj = 4.5;
function lj(e, t) {
  let n = Math.min(1, Math.max(0, e) / aj.top),
    r = 22 + 4.5 * Math.exp(-Math.max(0, e) / 14) - 2.5 * n * n,
    i = 7;
  if (e > aj.crown) {
    let t = Math.min(1, (e - aj.crown) / (aj.top - aj.crown));
    ((r -= 9 * t ** 1.25), (i += 1.5 * t));
  }
  return pve(r, r, Math.min(i, r - 0.5), 1.6, t);
}
function* jve(e, t) {
  let n = e.coarse ? 2 : 4,
    r = (e) => lj(e, n),
    i = t.c(`glass`);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    NA(e, r, 0, aj.lobby, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, aj.lobby),
    e.col(15922680).mat(0.3, 0.2, 0.08, G | 32));
  let a = NA(
    e,
    r,
    aj.lobby,
    aj.res,
    i,
    e.coarse ? 12.8 : 6.4,
    e.coarse ? 16.8 : 8.4,
  );
  (yield,
    e.col(16315112).mat(0.3, 0.2, 0.12, G | 32),
    NA(e, r, aj.res + 1.2, aj.crown, i, 6.4, 8.4, { cols: a }),
    e.col(15659250).mat(0.5, 0.4, 0.12, 1),
    NA(e, r, aj.res, aj.res + 1.2, e.white, 50, 1.2, { cols: a }),
    e.col(16054008).mat(0.35, 0.5, 0.3, 1),
    NA(e, r, aj.crown, aj.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 14.6, {
      cols: a,
    }),
    e.col(9080724).mat(0.85, 0, 0, 0));
  let o = r(aj.top);
  (Vk(e, o, aj.top),
    e.coarse ||
      (e.col(10396583).mat(0.8, 0.2, 0, 0),
      e.box(-5, aj.top, -6, 5, aj.top + 2.8, 6),
      e.col(15264492).mat(0.5, 0.4, 0.2, 1),
      zk(e, Rk(o, -0.4), aj.top, aj.top + 1, e.white, 60, 1),
      zk(e, PA(Rk(o, -0.8)), aj.top, aj.top + 1, e.white, 60, 1),
      BA(e, Rk(o, -0.8), Rk(o, -0.4), aj.top + 1)));
  for (let t of [aj.top + 1, 162]) {
    let i = Rk(r(t), 0.25);
    for (let r = 0; r < 4; r++) {
      let a = i[r * (n + 2) + Math.floor(n / 2)];
      Wk(e, a[0], t, a[1], t > 300 ? 0.7 : 0.5);
    }
  }
  (e.solid(-27, -27, 27, 27, 0, 12),
    e.solid(-24, -24, 24, 24, 12, aj.top + 3),
    yield);
}
