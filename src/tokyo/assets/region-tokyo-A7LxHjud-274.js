// tokyo/assets/region-tokyo-A7LxHjud 274 — col
// Lines 101694-102010 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Awe(e) {
  let t = 6975076;
  (e.push().mat(0.75, 0.05, 0.05, 1),
    xV(
      e,
      [
        { c: [0, -2.5, 4.2], rx: 1.1, ry: 1 },
        { c: [0, 0.3, 1.8], rx: 1, ry: 0.8 },
        { c: [0, 0.75, 0.2], rx: 1.05, ry: 0.55 },
      ],
      e.coarse ? 5 : 8,
      t,
      21,
      !1,
      !0,
    ));
  for (let [n, r] of [
    [-0.75, -0.25],
    [0, 0],
    [0.75, 0.25],
  ]) {
    let i = n,
      a = n + Math.sin(r) * 1.1;
    (xV(
      e,
      [
        { c: [i, 0.75, 0], rx: 0.3, ry: 0.28 },
        { c: [a * 1.1, 0.55, -0.9], rx: 0.26, ry: 0.24 },
        { c: [a * 1.2, -0.45, -1.35], rx: 0.22, ry: 0.22 },
      ],
      e.coarse ? 4 : 6,
      $B(t, 1.05),
      22 + n * 10,
      !1,
      !1,
    ),
      e.push().col(14867652).mat(0.5, 0, 0, 0));
    let o = a * 1.2,
      s = -0.45,
      c = -1.35;
    (SV(e, [o - 0.2, s, c], [o + 0.2, s, c], [o * 1.02, -1.3, -1]),
      SV(e, [o, s, -1.55], [o, s, -1.1500000000000001], [o * 1.02, -1.3, -1]),
      e.pop());
  }
  e.pop();
}
function* jwe(e, t) {
  let n = t.c(`gtGlass`),
    r = t.c(`office`),
    i = e.coarse ? 3 : 1;
  if (
    (e.col(16777215).mat(0.3, 0.2, 0.35, G),
    e.wall(vV.x0, vV.z0, vV.x0, vV.z1, -0.3, 5.5, t.c(`doors`), 2.4 * i, 5.8),
    e.wall(vV.x0, vV.z1, vV.x1, vV.z1, -0.3, 5.5, t.c(`doors`), 2.4 * i, 5.8),
    e.col(13620180).mat(0.6, 0.2, 0, 0),
    e.wall(vV.x1, vV.z1, vV.x1, vV.z0, -0.3, 5.5, e.white, 4, 6),
    e.wall(vV.x1, vV.z0, vV.x0, vV.z0, -0.3, 5.5, e.white, 4, 6),
    e.col(12567234).mat(0.55, 0.25, 0, 0),
    Oj(e, vV.x0, vV.z0, vV.x1, vV.z1, 5.5, vV.h, e.white, 6, 6),
    !e.coarse)
  ) {
    e.col(14215926).mat(0.3, 0, 0.5, 1);
    for (let t = vV.x0 + 3; t < vV.x1 - 1; t += 5.2)
      e.panel(
        t - 0.25,
        vV.z1 + 0.03,
        t + 0.25,
        vV.z1 + 0.03,
        8,
        vV.h - 3,
      ).panel(t + 0.25, vV.z0 - 0.03, t - 0.25, vV.z0 - 0.03, 8, vV.h - 3);
    for (let t = vV.z0 + 3; t < vV.z1 - 1; t += 5.2)
      e.panel(vV.x0 - 0.03, t - 0.25, vV.x0 - 0.03, t + 0.25, 8, vV.h - 3);
  }
  (e.col(16777215).mat(0.25, 0.3, 0.12, G),
    e.wall(vV.x0 - 0.05, vV.z0, vV.x0 - 0.05, vV.z1, 5.5, 8, n, 3.2 * i, 2.5),
    e.wall(vV.x0, vV.z1 + 0.05, vV.x1, vV.z1 + 0.05, 5.5, 8, n, 3.2 * i, 2.5),
    e.col(3816768).mat(0.5, 0.5, 0, 0),
    e.box(vV.x0 - 2.2, 5.5, vV.z0 + 2, vV.x0, 6, vV.z1 - 2),
    e.solid(vV.x0, vV.z0, vV.x1, vV.z1, 0, vV.h),
    e.col(9407106).mat(0.85, 0, 0, 0),
    e.flat(vV.x0, vV.z0, yV.x0, vV.z1, vV.h),
    e.flat(yV.x0, vV.z0, vV.x1, yV.z0, vV.h),
    e.flat(yV.x0, yV.z1, vV.x1, vV.z1, vV.h),
    e.col(12044236).mat(0.15, 0.4, 0.06, 1));
  let a = 1.3;
  for (let [t, n, r, i] of [
    [vV.x0, vV.z0, vV.x0, vV.z1],
    [vV.x0, vV.z1, vV.x1, vV.z1],
    [vV.x1, vV.z0, vV.x0, vV.z0],
  ])
    (e.panel(t, n, r, i, vV.h, vV.h + a), e.panel(r, i, t, n, vV.h, vV.h + a));
  if (
    (e.col(14212316).mat(0.4, 0.6, 0, 0),
    e.box(vV.x0 - 0.1, vV.h + a, vV.z0, vV.x0 + 0.15, vV.h + a + 0.1, vV.z1),
    yield,
    e.col(15394008).mat(0.6, 0.05, 0.08, G | 32),
    Oj(
      e,
      yV.x0,
      yV.z0,
      yV.x1,
      yV.z1,
      vV.h,
      yV.h - 6,
      r,
      2 * i,
      3.4 * i,
      void 0,
    ),
    e.col(14999250).mat(0.7, 0, 0, 0),
    Oj(e, yV.x0, yV.z0, yV.x1, yV.z1, yV.h - 6, yV.h, e.white, 8, 6, 10132118),
    e.col(14078148),
    kj(e, fV(yV), vV.h, yV.h - 6, e.coarse ? 10 : 4, 0.35, 0.5),
    e.solid(yV.x0, yV.z0, yV.x1, yV.z1, vV.h, yV.h),
    Kk(e, yV.x0 + 1, yV.h, yV.z0 + 1, 0.4),
    Kk(e, yV.x1 - 1, yV.h, yV.z1 - 1, 0.4),
    !e.coarse)
  ) {
    (e.push().col(16184040).mat(0.4, 0, 0.75, 1),
      WB(e, `HOTEL`, yV.x0 - 0.04, yV.h - 4.8, (yV.z0 + yV.z1) / 2, VB, 3.2, {
        align: 0.5,
        px: 18,
      }),
      WB(e, `HOTEL`, (yV.x0 + yV.x1) / 2, yV.h - 4.8, yV.z1 + 0.04, zB, 3.2, {
        align: 0.5,
        px: 18,
      }),
      e.pop(),
      GB(e, vV.x0, 27, 0, VB, 26, 4.2, 0.4, 1711136, `TOHO CINEMAS`, 16185074, {
        px: 22,
        lit: 0.25,
      }),
      JB(
        e,
        vV.x0,
        vV.z1 - 1.5,
        VB,
        9,
        16,
        1.6,
        13116444,
        `東宝シネマズ`,
        16777215,
        { lit: 0.45, px: 20 },
      ));
    let t = [
      [1981018, 14191162, 15920352],
      [5905962, 2763312, 16177248],
      [2112042, 8040648, 16777215],
      [3811930, 15231626, 15920352],
    ];
    [-12, -4, 4, 12].forEach((n, r) => {
      let [i, a, o] = t[r];
      (e.push().col(1710620).mat(0.5, 0.3, 0, 0),
        KB(e, vV.x0 - 0.12, n, VB, 5.6, 0.2, 11, 19));
      let s = vV.x0 - 0.25;
      (e.col(i).mat(0.5, 0, 0.18, 1),
        e.panel(s, n - 2.5, s, n + 2.5, 13.6, 18.6),
        e.col(a).mat(0.5, 0, 0.18, 1),
        e.panel(s, n - 2.5, s, n + 2.5, 12.4, 13.6),
        e.col(o).mat(0.5, 0, 0.25, 1),
        e.panel(s, n - 2.5, s, n + 2.5, 11.4, 12.4),
        e.pop());
    });
  }
  yield;
  let o = e.sub(-14, vV.h, 16.5, -2.3);
  if ((aV(e, 1.45, () => kwe(e)), e.leave(o), !e.coarse)) {
    let t = e.sub(-12.2, vV.h + a + 0.1, 21.4, Math.PI);
    (aV(e, 1.35, () => Awe(e)), e.leave(t));
  }
}
function Mwe(e, t) {
  (e.col(12895942).mat(0.6, 0.2, 0.05, 0),
    Oj(e, vV.x0, vV.z0, vV.x1, vV.z1, 0, vV.h, e.white, 12, 12, 9407106),
    e.col(15394008).mat(0.6, 0.05, 0.08, G | 32),
    Oj(
      e,
      yV.x0,
      yV.z0,
      yV.x1,
      yV.z1,
      vV.h,
      yV.h,
      t.c(`office`),
      8,
      13.6,
      10132118,
    ),
    e.col(5593423).mat(0.8, 0, 0, 0),
    e.box(-16, vV.h, 9, -9, vV.h + 13, 18));
}
var Nwe = {
    id: `kabukicho-toho`,
    site: oV(_V.x, _V.z),
    name: {
      ja: `新宿東峰ビル`,
      zh: `新宿東峰大樓`,
      en: `Shinjuku Toho-mine Building`,
    },
    near: 250,
    build: jwe,
    far: Mwe,
    bounds: () => [
      _V.x + vV.x0 - 3,
      _V.z + vV.z0,
      _V.x + vV.x1,
      _V.z + vV.z1 + 2,
    ],
    farBoxes: (e, t) => [
      {
        x0: _V.x + vV.x0,
        x1: _V.x + vV.x1,
        z0: _V.z + vV.z0,
        z1: _V.z + vV.z1,
        y0: t.gy,
        y1: t.gy + vV.h,
        rgb: [0.55, 0.56, 0.56],
        lit: !0,
      },
      {
        x0: _V.x + yV.x0,
        x1: _V.x + yV.x1,
        z0: _V.z + yV.z0,
        z1: _V.z + yV.z1,
        y0: t.gy + vV.h,
        y1: t.gy + yV.h,
        rgb: [0.8, 0.77, 0.7],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `kabukicho-monster`,
        lx: -45,
        lz: 40,
        turn: 0.93,
        name: {
          zh: `東峰大樓的怪獸頭`,
          en: `The monster head, Toho-mine Building`,
        },
      },
    ],
    blip: !0,
  },
  CV = { x: -2085, z: 135.9 };
function Pwe(e) {
  let t = 4.75,
    n = 5.2,
    r = 13114910;
  for (let i of [-1, 1]) {
    let a = i * t;
    (e.push().col(14605010).mat(0.6, 0, 0, 0),
      e.box(a - 0.32, -0.2, -0.32, a + 0.32, 0.6, 0.32),
      e.col(r).mat(0.45, 0.2, 0.12, 1),
      e.box(a - 0.22, 0.6, -0.22, a + 0.22, 5.5, 0.22),
      e.pop(),
      e.pole(a, 0, 0.32, 0, n));
  }
  let i = e.coarse ? 8 : 20,
    a = (e) => n + 3.3999999999999995 * Math.sin(e * Math.PI),
    o = (e) => -4.75 + 2 * t * e;
  e.push().col(r).mat(0.45, 0.2, 0.35, 1);
  for (let t = 0; t < i; t++) {
    let n = t / i,
      r = (t + 1) / i,
      s = o(n),
      c = o(r),
      l = a(n),
      u = a(r),
      d = 0.25,
      f = 0.55;
    (e.quad(c, u - f, -0.25, s, l - f, -0.25, s, l + f, -0.25, c, u + f, -0.25),
      e.quad(s, l - f, d, c, u - f, d, c, u + f, d, s, l + f, d),
      e.quad(s, l + f, -0.25, s, l + f, d, c, u + f, d, c, u + f, -0.25),
      e.quad(s, l - f, d, s, l - f, -0.25, c, u - f, -0.25, c, u - f, d));
  }
  if ((e.pop(), !e.coarse)) {
    e.push().col(16773824).mat(0.3, 0, 0.9, 1);
    for (let t = 0; t <= 26; t++) {
      let n = t / 26,
        r = o(n),
        i = a(n) + 0.38;
      (e.box(r - 0.07, i - 0.07, -0.33, r + 0.07, i + 0.07, -0.25),
        e.box(r - 0.07, i - 0.07, 0.25, r + 0.07, i + 0.07, 0.33));
    }
    e.pop();
  }
  let s = 4.3,
    c = 5.75;
  (e.push().col(r).mat(0.45, 0.2, 0.3, 1),
    e.box(-4.55, 4.1499999999999995, -0.2, 4.55, 5.9, 0.2),
    e.col(16775920).mat(0.4, 0, 0.55, 1),
    e.panel(4.3, -0.22, -4.3, -0.22, s, c),
    e.panel(-4.3, 0.22, 4.3, 0.22, s, c),
    e.col(r).mat(0.45, 0.2, 0.2, 1));
  for (let n of [-2.4, 0, 2.4])
    e.box(n - 0.06, 5.9, -0.06, n + 0.06, a((n + t) / (2 * t)) - 0.5, 0.06);
  (e.coarse ||
    (e.col(14160922).mat(0.4, 0, 0.8, 1),
    WB(e, `歌舞伎町一番街`, 0, 4.5, 0.25, zB, 1.05, {
      raw: !0,
      px: 26,
      align: 0.5,
      maxW: 2 * t - 1.4,
      weight: 800,
    }),
    WB(e, `歌舞伎町一番街`, 0, 4.5, -0.25, RB, 1.05, {
      raw: !0,
      px: 26,
      align: 0.5,
      maxW: 2 * t - 1.4,
      weight: 800,
    })),
    e.pop());
}
