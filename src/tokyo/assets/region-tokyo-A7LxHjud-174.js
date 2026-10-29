// tokyo/assets/region-tokyo-A7LxHjud 174 — box
// Lines 71286-71580 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Uhe = {
    id: `tokyo-station-yaesu`,
    site: (e) => ({
      x: gT.x,
      z: gT.z,
      gy: e.groundHeight(gT.x, gT.z),
      facing: 0,
    }),
    name: {
      ja: `東京駅八重洲口`,
      zh: `東京車站八重洲口`,
      en: `Tokyo Station Yaesu Exit`,
    },
    near: 230,
    build: Vhe,
    far: Hhe,
    bounds: () => [19, -60, DT, 74],
    farBoxes: (e, t) => [
      {
        x0: xT,
        x1: Phe,
        z0: yT,
        z1: bT,
        y0: t.gy + wT,
        y1: t.gy + wT + 4,
        rgb: [0.85, 0.85, 0.83],
      },
    ],
    anchors: [
      {
        key: `tokyo-station-yaesu`,
        lx: _T(30),
        lz: vT(-10),
        turn: 0,
        name: {
          zh: `東京車站 八重洲中央口`,
          en: `Tokyo Station Yaesu Central Exit`,
        },
      },
      {
        key: `tokyo-station-yaesu-bus`,
        lx: _T(AT.x0 - 1),
        lz: vT(30),
        turn: 0,
        name: {
          zh: `東京車站 八重洲口 巴士總站`,
          en: `Tokyo Station Yaesu bus terminal`,
        },
      },
    ],
  },
  IT = 31,
  LT = 3,
  Whe = [
    {
      id: `yaesu-tower-north`,
      name: {
        ja: `八重洲口 北タワー`,
        zh: `八重洲口 北塔`,
        en: `Yaesu North Tower`,
      },
      x0: 24,
      x1: 60,
      z0: -92,
      z1: -61,
      h: 172,
    },
    {
      id: `yaesu-tower-south`,
      name: {
        ja: `八重洲口 南タワー`,
        zh: `八重洲口 南塔`,
        en: `Yaesu South Tower`,
      },
      x0: 24,
      x1: 60,
      z0: 75,
      z1: 108,
      h: 168,
    },
  ];
function Ghe(e) {
  let t = (e.x0 + e.x1) / 2,
    n = (e.z0 + e.z1) / 2,
    r = (e.x1 - e.x0) / 2,
    i = (e.z1 - e.z0) / 2,
    a = r - LT,
    o = i - LT;
  return {
    id: e.id,
    site: (e) => ({ x: t, z: n, gy: e.groundHeight(t, n), facing: 0 }),
    name: e.name,
    near: 260,
    build: (t, n) => {
      let s = n.c(`gtGlass`);
      if (
        (t.col(16777215).mat(0.3, 0.2, 0.25, G),
        t.box(-r, 0, -i, r, 6, i, n.c(`doors`), 2.4, 6, t.white),
        t.col(14673900).mat(0.25, 0.4, 0.2, G | 32),
        t.box(-r, 6, -i, r, IT, i, s, 12.8, 12.6, t.white),
        t.col(15790316).mat(0.5, 0.2, 0.15, 1),
        t.box(-r - 0.4, IT, -i - 0.4, r + 0.4, 32.4, i + 0.4),
        t.col(16777215).mat(0.2, 0.5, 0.22, G | 32),
        t.box(-a, 32.4, -o, a, e.h, o, s, 12.8, 12.6, t.white),
        !t.coarse)
      ) {
        t.col(15265006).mat(0.5, 0.3, 0.08, 1);
        for (let n = -o; n <= o + 0.001; n += 6.4)
          (t.box(-a - 0.6, 32.4, n - 0.12, -a, e.h, n + 0.12),
            t.box(a, 32.4, n - 0.12, a + 0.6, e.h, n + 0.12));
        for (let [n, r] of [
          [-a, -o],
          [a, -o],
          [a, o],
          [-a, o],
        ])
          t.box(n - 0.35, 32.4, r - 0.35, n + 0.35, e.h, r + 0.35);
      }
      (t.col(16185074).mat(0.4, 0.1, 0.7, 1),
        t.box(-a - 0.5, e.h, -o - 0.5, a + 0.5, e.h + 1, o + 0.5),
        t.col(14080990).mat(0.5, 0.4, 0.05, 0),
        t.box(-a + 2.5, e.h + 1, -o + 2.5, a - 2.5, e.h + 7, o - 2.5),
        t.col(16722450).mat(0.5, 0, 0.9, 1));
      for (let n of [-1, 1])
        t.box(
          n * (a - 4) - 0.3,
          e.h + 7,
          -0.3,
          n * (a - 4) + 0.3,
          e.h + 7.6,
          0.3,
        );
      (t.mat(0.85, 0, 0, 0).col(16777215),
        t.solid(-r, -i, r, i, 0, 32.4),
        t.solid(-a, -o, a, o, IT, e.h + 7));
    },
    far: (t, n) => {
      (t.col(16777215).mat(0.25, 0.4, 0.22, G | 32),
        t.box(-r, 0, -i, r, IT, i, n.c(`gtGlass`), 25.6, 25.2),
        t.box(-a, IT, -o, a, e.h, o, n.c(`gtGlass`), 25.6, 25.2),
        t
          .col(16185074)
          .mat(0.4, 0.1, 0.7, 1)
          .box(-a, e.h, -o, a, e.h + 1, o));
    },
    farBoxes: (t, n) => [
      {
        x0: n.x - r,
        x1: n.x + r,
        z0: n.z - i,
        z1: n.z + i,
        y0: n.gy,
        y1: n.gy + IT,
        rgb: [0.4, 0.47, 0.53],
        lit: !0,
      },
      {
        x0: n.x - a,
        x1: n.x + a,
        z0: n.z - o,
        z1: n.z + o,
        y0: n.gy + IT,
        y1: n.gy + e.h,
        rgb: [0.3, 0.4, 0.5],
        lit: !0,
      },
    ],
  };
}
var Khe = Whe.map(Ghe),
  RT = 18.05,
  zT = 17.75,
  BT = 0.15,
  VT = -1.5,
  HT = -1.75,
  UT = 7,
  WT = 3.95,
  GT = 4.62,
  KT = -4.97,
  qT = -0.05,
  JT = 0.32,
  YT = 1.3,
  XT = 1.35,
  qhe = 1.05,
  Jhe = 1.05,
  ZT = 1.85,
  QT = 8.75,
  $T = 10.55,
  Yhe = -0.85,
  Xhe = 0.95,
  eE = 2.7,
  tE = 14473163,
  nE = 13025717,
  rE = 8815482,
  Zhe = 5402719,
  Qhe = 7639935,
  $he = 16180926,
  iE = 0.019,
  aE = (e, t = !1) => e.col(t ? Qhe : Zhe).mat(0.62, 0.12, 0.035, 1),
  ege = (e) => 6.8 + (4.2 * (e - 60)) / 260;
function oE(e) {
  for (let t of [-3.95, WT]) {
    let n = e - t;
    if (Math.abs(n) < GT) {
      let e = KT + Math.sqrt(GT * GT - n * n);
      if (e > HT) return e;
    }
  }
  return null;
}
function sE(e, t, n, r, i = 0, a = 0, o = 1, s = 1) {
  let c = t[0],
    l = t[1],
    u = t[3],
    d = l[0] - c[0],
    f = l[1] - c[1],
    p = l[2] - c[2],
    m = u[0] - c[0],
    h = u[1] - c[1],
    g = u[2] - c[2],
    _ =
      (f * g - p * h) * n[0] +
        (p * m - d * g) * n[1] +
        (d * h - f * m) * n[2] >=
      0
        ? t
        : [t[0], t[3], t[2], t[1]];
  e.quad(
    _[0][0],
    _[0][1],
    _[0][2],
    _[1][0],
    _[1][1],
    _[1][2],
    _[2][0],
    _[2][1],
    _[2][2],
    _[3][0],
    _[3][1],
    _[3][2],
    r,
    i,
    a,
    o,
    s,
  );
}
function cE(e, t, n, r) {
  (e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2]),
    e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]));
}
function lE(e, t, n, r, i, a) {
  for (let o = 0; o < a; o++) {
    let s = (o / a) * Math.PI * 2,
      c = ((o + 1) / a) * Math.PI * 2;
    e.triFace(
      t,
      n,
      r,
      t + Math.cos(c) * i,
      n + Math.sin(c) * i,
      r,
      t + Math.cos(s) * i,
      n + Math.sin(s) * i,
      r,
    );
  }
}
function uE(e, t, n, r, i, a, o, s = 0) {
  e.lathe(
    t,
    r,
    [
      0.001,
      n - a,
      i * 0.72,
      n - a * 0.7,
      i,
      n,
      i * 0.72,
      n + a * 0.7,
      0.001,
      n + a,
    ],
    e.seg(o),
    s,
    void 0,
    !1,
    !0,
  );
}
function dE(e, t, n, r, i) {
  let a = r.map((e, t) => (t % 2 ? e : e * Math.SQRT2));
  e.lathe(t, n, a, 4, Math.PI / 4, i);
}
