// tokyo/assets/region-tokyo-55J_WESF 174 — box
// Lines 71195-71489 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var jhe = {
    id: `tokyo-station-yaesu`,
    site: (e) => ({
      x: pT.x,
      z: pT.z,
      gy: e.groundHeight(pT.x, pT.z),
      facing: 0,
    }),
    name: {
      ja: `東京駅八重洲口`,
      zh: `東京車站八重洲口`,
      en: `Tokyo Station Yaesu Exit`,
    },
    near: 230,
    build: khe,
    far: Ahe,
    bounds: () => [19, -60, wT, 74],
    farBoxes: (e, t) => [
      {
        x0: vT,
        x1: She,
        z0: gT,
        z1: _T,
        y0: t.gy + xT,
        y1: t.gy + xT + 4,
        rgb: [0.85, 0.85, 0.83],
      },
    ],
    anchors: [
      {
        key: `tokyo-station-yaesu`,
        lx: mT(30),
        lz: hT(-10),
        turn: 0,
        name: {
          zh: `東京車站 八重洲中央口`,
          en: `Tokyo Station Yaesu Central Exit`,
        },
      },
      {
        key: `tokyo-station-yaesu-bus`,
        lx: mT(DT.x0 - 1),
        lz: hT(30),
        turn: 0,
        name: {
          zh: `東京車站 八重洲口 巴士總站`,
          en: `Tokyo Station Yaesu bus terminal`,
        },
      },
    ],
  },
  NT = 31,
  PT = 3,
  Mhe = [
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
function Nhe(e) {
  let t = (e.x0 + e.x1) / 2,
    n = (e.z0 + e.z1) / 2,
    r = (e.x1 - e.x0) / 2,
    i = (e.z1 - e.z0) / 2,
    a = r - PT,
    o = i - PT;
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
        t.box(-r, 6, -i, r, NT, i, s, 12.8, 12.6, t.white),
        t.col(15790316).mat(0.5, 0.2, 0.15, 1),
        t.box(-r - 0.4, NT, -i - 0.4, r + 0.4, 32.4, i + 0.4),
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
        t.solid(-a, -o, a, o, NT, e.h + 7));
    },
    far: (t, n) => {
      (t.col(16777215).mat(0.25, 0.4, 0.22, G | 32),
        t.box(-r, 0, -i, r, NT, i, n.c(`gtGlass`), 25.6, 25.2),
        t.box(-a, NT, -o, a, e.h, o, n.c(`gtGlass`), 25.6, 25.2),
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
        y1: n.gy + NT,
        rgb: [0.4, 0.47, 0.53],
        lit: !0,
      },
      {
        x0: n.x - a,
        x1: n.x + a,
        z0: n.z - o,
        z1: n.z + o,
        y0: n.gy + NT,
        y1: n.gy + e.h,
        rgb: [0.3, 0.4, 0.5],
        lit: !0,
      },
    ],
  };
}
var Phe = Mhe.map(Nhe),
  FT = 18.05,
  IT = 17.75,
  LT = 0.15,
  RT = -1.5,
  zT = -1.75,
  BT = 7,
  VT = 3.95,
  HT = 4.62,
  UT = -4.97,
  WT = -0.05,
  GT = 0.32,
  KT = 1.3,
  qT = 1.35,
  Fhe = 1.05,
  Ihe = 1.05,
  JT = 1.85,
  YT = 8.75,
  XT = 10.55,
  Lhe = -0.85,
  Rhe = 0.95,
  ZT = 2.7,
  QT = 14473163,
  $T = 13025717,
  eE = 8815482,
  zhe = 5402719,
  Bhe = 7639935,
  Vhe = 16180926,
  tE = 0.019,
  nE = (e, t = !1) => e.col(t ? Bhe : zhe).mat(0.62, 0.12, 0.035, 1),
  Hhe = (e) => 6.8 + (4.2 * (e - 60)) / 260;
function rE(e) {
  for (let t of [-3.95, VT]) {
    let n = e - t;
    if (Math.abs(n) < HT) {
      let e = UT + Math.sqrt(HT * HT - n * n);
      if (e > zT) return e;
    }
  }
  return null;
}
function iE(e, t, n, r, i = 0, a = 0, o = 1, s = 1) {
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
function aE(e, t, n, r) {
  (e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2]),
    e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]));
}
function oE(e, t, n, r, i, a) {
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
function sE(e, t, n, r, i, a, o, s = 0) {
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
function cE(e, t, n, r, i) {
  let a = r.map((e, t) => (t % 2 ? e : e * Math.SQRT2));
  e.lathe(t, n, a, 4, Math.PI / 4, i);
}
