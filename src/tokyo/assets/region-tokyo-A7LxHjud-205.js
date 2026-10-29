// tokyo/assets/region-tokyo-A7LxHjud 205 — top
// Lines 80966-81303 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Lve = {
    id: `toranomon-hills`,
    site: (e) => ({
      x: WA.x,
      z: WA.z,
      gy: e.groundHeight(WA.x, WA.z),
      facing: 0,
    }),
    name: { ja: `虎ノ門ヒルズ`, zh: `虎之門之丘`, en: `Toranomon Hills` },
    near: 260,
    build: Fve,
    far: Ive,
    bounds: () => [-592, 586, -515, 760],
    farBoxes: (e, t) => [
      {
        x0: WA.x - 21,
        x1: WA.x + 21,
        z0: WA.z - 20,
        z1: WA.z + 20,
        y0: t.gy,
        y1: t.gy + 150,
        rgb: [0.34, 0.42, 0.5],
        lit: !0,
      },
      {
        x0: WA.x - 17,
        x1: WA.x + 17,
        z0: WA.z - 19,
        z1: WA.z + 19,
        y0: t.gy + 150,
        y1: t.gy + qA.top,
        rgb: [0.36, 0.44, 0.52],
        lit: !0,
      },
      {
        x0: WA.x + QA.x0,
        x1: WA.x + QA.x1,
        z0: WA.z + QA.z0,
        z1: WA.z + QA.z1,
        y0: t.gy,
        y1: t.gy + QA.h,
        rgb: [0.33, 0.41, 0.49],
        lit: !0,
      },
      {
        x0: WA.x + $A.x0,
        x1: WA.x + $A.x1,
        z0: WA.z + $A.z0,
        z1: WA.z + $A.z1,
        y0: t.gy,
        y1: t.gy + $A.h,
        rgb: [0.55, 0.53, 0.5],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `toranomon-hills-portal`,
        lx: GA(-511),
        lz: KA(703),
        turn: -Math.PI / 2,
        name: {
          zh: `虎之門之丘 環狀二號線隧道口`,
          en: `Toranomon Hills, Loop Road No. 2 tunnel portal`,
        },
      },
      {
        key: `toranomon-hills-oval-plaza`,
        lx: GA(-579),
        lz: KA(635.5),
        turn: Math.PI,
        name: {
          zh: `虎之門之丘 橢圓廣場階梯`,
          en: `Toranomon Hills, Oval Plaza steps`,
        },
      },
    ],
    blip: !0,
  },
  tj = { x: -553, z: 571 },
  nj = { top: 266, nodeY0: 222, nodeY1: 250, hx: 21, hz: 19, funnel: 16 };
function rj(e) {
  let t = Math.min(1, Math.max(0, e) / nj.top),
    n = e < nj.funnel ? 6.5 * (1 - Math.max(0, e) / nj.funnel) ** 1.4 : 0;
  return Tve(-nj.hx + n, -nj.hz + n, nj.hx - n, nj.hz - n, [
    2.5,
    13 * t,
    2.5 + 5 * t,
    13 * (1 - t),
  ]);
}
function* Rve(e, t) {
  let n = e.coarse ? 16 : 4;
  if (
    (e.col(14867924).mat(0.85, 0, 0, 0),
    e.flat(
      -592 - tj.x,
      541 - tj.z,
      -515 - tj.x,
      602 - tj.z,
      0.04,
      t.c(`paving`),
      n,
      n,
    ),
    !e.coarse)
  ) {
    let t = 101;
    for (let n of [-588, -581, -526, -519])
      zA(e, n - tj.x, 0.04, 598 - tj.z, 9, t++);
    for (let n of [548, 560, 584]) zA(e, -519 - tj.x, 0.04, n - tj.z, 8.5, t++);
  }
  (yield,
    e.col(16777215).mat(0.3, 0.35, 0.32, G),
    FA(e, rj, 0, nj.funnel, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 8),
    e.col(16777215).mat(0.3, 0.15, 0.1, G | 32),
    FA(
      e,
      rj,
      nj.funnel,
      nj.nodeY0,
      t.c(`gtGlass`),
      e.coarse ? 25.6 : 12.8,
      e.coarse ? 25.2 : 12.6,
    ),
    yield);
  let r = (e) => Bk(rj(e), 1.8);
  (e.col(16054522).mat(0.25, 0.2, 0.3, G),
    FA(e, r, nj.nodeY0, nj.nodeY1, t.c(`glass`), 6.4, 9.33),
    e.col(15527662).mat(0.5, 0.4, 0.3, 1),
    HA(e, rj(nj.nodeY0), r(nj.nodeY0), nj.nodeY0, !1),
    HA(e, rj(nj.nodeY1), r(nj.nodeY1), nj.nodeY1));
  let i = rj(nj.nodeY1);
  (e.col(9343638).mat(0.85, 0, 0, 0), Uk(e, i, nj.nodeY1));
  let a = nj.nodeY1;
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
      zA(e, t, a + 0.04, r, 5.5, n++);
    (e.col(16777215).mat(0.2, 0.4, 0.4, G),
      e.box(4, a, 8, 14, a + 4.5, 14, t.c(`glass`), 3.2, 4.5, e.white));
  }
  (yield, e.col(15790834).mat(0.5, 0.3, 0.35, 1));
  let o = i.length,
    s = nj.top - 1.6;
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
  let c = Bk(i, 0.4),
    l = Bk(i, -0.6);
  (Vk(e, c, s, nj.top, e.white, 60, 2),
    Vk(e, IA(l), s, nj.top, e.white, 60, 2),
    HA(e, l, c, nj.top),
    HA(e, l, c, s, !1));
  for (let t of [0, 2, 4, 6]) {
    let n = Bk(i, 0.5)[t];
    Kk(e, n[0], nj.top, n[1], 0.7);
  }
  for (let t of [1, 5]) {
    let n = Bk(rj(130), 0.2)[t];
    Kk(e, n[0], 129.5, n[1], 0.4);
  }
  (e.solid(-nj.hx + 6.5, -nj.hz + 6.5, nj.hx - 6.5, nj.hz - 6.5, 0, nj.funnel),
    e.solid(-nj.hx, -nj.hz, nj.hx, nj.hz, 5, nj.top));
}
function zve(e, t) {
  (e.col(16777215).mat(0.3, 0.15, 0.1, G | 32),
    FA(e, rj, 0, nj.nodeY0, t.c(`gtGlass`), 25.6, 50.4),
    e.col(16054522).mat(0.15, 0.4, 0.38, G),
    FA(e, (e) => Bk(rj(e), 1.8), nj.nodeY0, nj.nodeY1, t.c(`glass`), 12.8, 28),
    e.col(15790834).mat(0.5, 0.3, 0.35, 1),
    Vk(
      e,
      rj(nj.nodeY1),
      nj.nodeY1,
      nj.top,
      t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1),
      12.8,
      16,
    ),
    e.col(9343638).mat(0.85, 0, 0, 0),
    Uk(e, rj(nj.top), nj.top - 0.5),
    Kk(e, 0, nj.top, 0, 0.8));
}
var Bve = {
  id: `toranomon-hills-station`,
  site: (e) => ({
    x: tj.x,
    z: tj.z,
    gy: e.groundHeight(tj.x, tj.z),
    facing: 0,
  }),
  name: {
    ja: `虎ノ門ヒルズ ステーションタワー`,
    zh: `虎之門之丘 車站大樓`,
    en: `Toranomon Hills Station Tower`,
  },
  near: 260,
  build: Rve,
  far: zve,
  bounds: () => [-592, 541, -515, 602],
  farBoxes: (e, t) => [
    {
      x0: tj.x - nj.hx,
      x1: tj.x + nj.hx,
      z0: tj.z - nj.hz,
      z1: tj.z + nj.hz,
      y0: t.gy,
      y1: t.gy + nj.nodeY0,
      rgb: [0.5, 0.56, 0.6],
      lit: !0,
    },
    {
      x0: tj.x - nj.hx - 1.8,
      x1: tj.x + nj.hx + 1.8,
      z0: tj.z - nj.hz - 1.8,
      z1: tj.z + nj.hz + 1.8,
      y0: t.gy + nj.nodeY0,
      y1: t.gy + nj.nodeY1,
      rgb: [0.7, 0.74, 0.76],
      lit: !0,
    },
    {
      x0: tj.x - nj.hx,
      x1: tj.x + nj.hx,
      z0: tj.z - nj.hz,
      z1: tj.z + nj.hz,
      y0: t.gy + nj.nodeY1,
      y1: t.gy + nj.top,
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
var ij = { x: -660, z: 925 },
  aj = (e) => e - ij.x,
  oj = (e) => e - ij.z,
  sj = { top: 325.2, crown: 296, res: 262, lobby: 10 },
  cj = { x0: aj(-711), z0: oj(848), x1: aj(-692), z1: oj(988) },
  lj = { x0: aj(-686), z0: oj(960), x1: aj(-608), z1: oj(988) },
  Vve = (e, t) =>
    13 + 5.5 * Math.sin(t / 16 + 0.5) + 2 * Math.sin(e / 7 + t / 30),
  Hve = (e, t) =>
    12 + 4.5 * Math.sin(e / 14 + 1.2) + 2 * Math.sin(t / 6 + e / 25),
  Uve = { x0: aj(-688), z0: oj(848), x1: aj(-609), z1: oj(894) },
  uj = 4.5;
function dj(e, t) {
  let n = Math.min(1, Math.max(0, e) / sj.top),
    r = 22 + 4.5 * Math.exp(-Math.max(0, e) / 14) - 2.5 * n * n,
    i = 7;
  if (e > sj.crown) {
    let t = Math.min(1, (e - sj.crown) / (sj.top - sj.crown));
    ((r -= 9 * t ** 1.25), (i += 1.5 * t));
  }
  return Eve(r, r, Math.min(i, r - 0.5), 1.6, t);
}
function* Wve(e, t) {
  let n = e.coarse ? 2 : 4,
    r = (e) => dj(e, n),
    i = t.c(`glass`);
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    FA(e, r, 0, sj.lobby, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, sj.lobby),
    e.col(15922680).mat(0.3, 0.2, 0.08, G | 32));
  let a = FA(
    e,
    r,
    sj.lobby,
    sj.res,
    i,
    e.coarse ? 12.8 : 6.4,
    e.coarse ? 16.8 : 8.4,
  );
  (yield,
    e.col(16315112).mat(0.3, 0.2, 0.12, G | 32),
    FA(e, r, sj.res + 1.2, sj.crown, i, 6.4, 8.4, { cols: a }),
    e.col(15659250).mat(0.5, 0.4, 0.12, 1),
    FA(e, r, sj.res, sj.res + 1.2, e.white, 50, 1.2, { cols: a }),
    e.col(16054008).mat(0.35, 0.5, 0.3, 1),
    FA(e, r, sj.crown, sj.top, t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1), 6.4, 14.6, {
      cols: a,
    }),
    e.col(9080724).mat(0.85, 0, 0, 0));
  let o = r(sj.top);
  (Uk(e, o, sj.top),
    e.coarse ||
      (e.col(10396583).mat(0.8, 0.2, 0, 0),
      e.box(-5, sj.top, -6, 5, sj.top + 2.8, 6),
      e.col(15264492).mat(0.5, 0.4, 0.2, 1),
      Vk(e, Bk(o, -0.4), sj.top, sj.top + 1, e.white, 60, 1),
      Vk(e, IA(Bk(o, -0.8)), sj.top, sj.top + 1, e.white, 60, 1),
      HA(e, Bk(o, -0.8), Bk(o, -0.4), sj.top + 1)));
  for (let t of [sj.top + 1, 162]) {
    let i = Bk(r(t), 0.25);
    for (let r = 0; r < 4; r++) {
      let a = i[r * (n + 2) + Math.floor(n / 2)];
      Kk(e, a[0], t, a[1], t > 300 ? 0.7 : 0.5);
    }
  }
  (e.solid(-27, -27, 27, 27, 0, 12),
    e.solid(-24, -24, 24, 24, 12, sj.top + 3),
    yield);
}
