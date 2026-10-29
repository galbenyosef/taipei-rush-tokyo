// tokyo/assets/region-tokyo-55J_WESF 274 — col
// Lines 101603-101919 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function gwe(e) {
  let t = 6975076;
  (e.push().mat(0.75, 0.05, 0.05, 1),
    bV(
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
    (bV(
      e,
      [
        { c: [i, 0.75, 0], rx: 0.3, ry: 0.28 },
        { c: [a * 1.1, 0.55, -0.9], rx: 0.26, ry: 0.24 },
        { c: [a * 1.2, -0.45, -1.35], rx: 0.22, ry: 0.22 },
      ],
      e.coarse ? 4 : 6,
      QB(t, 1.05),
      22 + n * 10,
      !1,
      !1,
    ),
      e.push().col(14867652).mat(0.5, 0, 0, 0));
    let o = a * 1.2,
      s = -0.45,
      c = -1.35;
    (xV(e, [o - 0.2, s, c], [o + 0.2, s, c], [o * 1.02, -1.3, -1]),
      xV(e, [o, s, -1.55], [o, s, -1.1500000000000001], [o * 1.02, -1.3, -1]),
      e.pop());
  }
  e.pop();
}
function* _we(e, t) {
  let n = t.c(`gtGlass`),
    r = t.c(`office`),
    i = e.coarse ? 3 : 1;
  if (
    (e.col(16777215).mat(0.3, 0.2, 0.35, G),
    e.wall(_V.x0, _V.z0, _V.x0, _V.z1, -0.3, 5.5, t.c(`doors`), 2.4 * i, 5.8),
    e.wall(_V.x0, _V.z1, _V.x1, _V.z1, -0.3, 5.5, t.c(`doors`), 2.4 * i, 5.8),
    e.col(13620180).mat(0.6, 0.2, 0, 0),
    e.wall(_V.x1, _V.z1, _V.x1, _V.z0, -0.3, 5.5, e.white, 4, 6),
    e.wall(_V.x1, _V.z0, _V.x0, _V.z0, -0.3, 5.5, e.white, 4, 6),
    e.col(12567234).mat(0.55, 0.25, 0, 0),
    Ej(e, _V.x0, _V.z0, _V.x1, _V.z1, 5.5, _V.h, e.white, 6, 6),
    !e.coarse)
  ) {
    e.col(14215926).mat(0.3, 0, 0.5, 1);
    for (let t = _V.x0 + 3; t < _V.x1 - 1; t += 5.2)
      e.panel(
        t - 0.25,
        _V.z1 + 0.03,
        t + 0.25,
        _V.z1 + 0.03,
        8,
        _V.h - 3,
      ).panel(t + 0.25, _V.z0 - 0.03, t - 0.25, _V.z0 - 0.03, 8, _V.h - 3);
    for (let t = _V.z0 + 3; t < _V.z1 - 1; t += 5.2)
      e.panel(_V.x0 - 0.03, t - 0.25, _V.x0 - 0.03, t + 0.25, 8, _V.h - 3);
  }
  (e.col(16777215).mat(0.25, 0.3, 0.12, G),
    e.wall(_V.x0 - 0.05, _V.z0, _V.x0 - 0.05, _V.z1, 5.5, 8, n, 3.2 * i, 2.5),
    e.wall(_V.x0, _V.z1 + 0.05, _V.x1, _V.z1 + 0.05, 5.5, 8, n, 3.2 * i, 2.5),
    e.col(3816768).mat(0.5, 0.5, 0, 0),
    e.box(_V.x0 - 2.2, 5.5, _V.z0 + 2, _V.x0, 6, _V.z1 - 2),
    e.solid(_V.x0, _V.z0, _V.x1, _V.z1, 0, _V.h),
    e.col(9407106).mat(0.85, 0, 0, 0),
    e.flat(_V.x0, _V.z0, vV.x0, _V.z1, _V.h),
    e.flat(vV.x0, _V.z0, _V.x1, vV.z0, _V.h),
    e.flat(vV.x0, vV.z1, _V.x1, _V.z1, _V.h),
    e.col(12044236).mat(0.15, 0.4, 0.06, 1));
  let a = 1.3;
  for (let [t, n, r, i] of [
    [_V.x0, _V.z0, _V.x0, _V.z1],
    [_V.x0, _V.z1, _V.x1, _V.z1],
    [_V.x1, _V.z0, _V.x0, _V.z0],
  ])
    (e.panel(t, n, r, i, _V.h, _V.h + a), e.panel(r, i, t, n, _V.h, _V.h + a));
  if (
    (e.col(14212316).mat(0.4, 0.6, 0, 0),
    e.box(_V.x0 - 0.1, _V.h + a, _V.z0, _V.x0 + 0.15, _V.h + a + 0.1, _V.z1),
    yield,
    e.col(15394008).mat(0.6, 0.05, 0.08, G | 32),
    Ej(
      e,
      vV.x0,
      vV.z0,
      vV.x1,
      vV.z1,
      _V.h,
      vV.h - 6,
      r,
      2 * i,
      3.4 * i,
      void 0,
    ),
    e.col(14999250).mat(0.7, 0, 0, 0),
    Ej(e, vV.x0, vV.z0, vV.x1, vV.z1, vV.h - 6, vV.h, e.white, 8, 6, 10132118),
    e.col(14078148),
    Dj(e, dV(vV), _V.h, vV.h - 6, e.coarse ? 10 : 4, 0.35, 0.5),
    e.solid(vV.x0, vV.z0, vV.x1, vV.z1, _V.h, vV.h),
    Wk(e, vV.x0 + 1, vV.h, vV.z0 + 1, 0.4),
    Wk(e, vV.x1 - 1, vV.h, vV.z1 - 1, 0.4),
    !e.coarse)
  ) {
    (e.push().col(16184040).mat(0.4, 0, 0.75, 1),
      UB(e, `HOTEL`, vV.x0 - 0.04, vV.h - 4.8, (vV.z0 + vV.z1) / 2, BB, 3.2, {
        align: 0.5,
        px: 18,
      }),
      UB(e, `HOTEL`, (vV.x0 + vV.x1) / 2, vV.h - 4.8, vV.z1 + 0.04, RB, 3.2, {
        align: 0.5,
        px: 18,
      }),
      e.pop(),
      WB(e, _V.x0, 27, 0, BB, 26, 4.2, 0.4, 1711136, `TOHO CINEMAS`, 16185074, {
        px: 22,
        lit: 0.25,
      }),
      qB(
        e,
        _V.x0,
        _V.z1 - 1.5,
        BB,
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
        GB(e, _V.x0 - 0.12, n, BB, 5.6, 0.2, 11, 19));
      let s = _V.x0 - 0.25;
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
  let o = e.sub(-14, _V.h, 16.5, -2.3);
  if ((iV(e, 1.45, () => hwe(e)), e.leave(o), !e.coarse)) {
    let t = e.sub(-12.2, _V.h + a + 0.1, 21.4, Math.PI);
    (iV(e, 1.35, () => gwe(e)), e.leave(t));
  }
}
function vwe(e, t) {
  (e.col(12895942).mat(0.6, 0.2, 0.05, 0),
    Ej(e, _V.x0, _V.z0, _V.x1, _V.z1, 0, _V.h, e.white, 12, 12, 9407106),
    e.col(15394008).mat(0.6, 0.05, 0.08, G | 32),
    Ej(
      e,
      vV.x0,
      vV.z0,
      vV.x1,
      vV.z1,
      _V.h,
      vV.h,
      t.c(`office`),
      8,
      13.6,
      10132118,
    ),
    e.col(5593423).mat(0.8, 0, 0, 0),
    e.box(-16, _V.h, 9, -9, _V.h + 13, 18));
}
var ywe = {
    id: `kabukicho-toho`,
    site: aV(gV.x, gV.z),
    name: {
      ja: `新宿東峰ビル`,
      zh: `新宿東峰大樓`,
      en: `Shinjuku Toho-mine Building`,
    },
    near: 250,
    build: _we,
    far: vwe,
    bounds: () => [
      gV.x + _V.x0 - 3,
      gV.z + _V.z0,
      gV.x + _V.x1,
      gV.z + _V.z1 + 2,
    ],
    farBoxes: (e, t) => [
      {
        x0: gV.x + _V.x0,
        x1: gV.x + _V.x1,
        z0: gV.z + _V.z0,
        z1: gV.z + _V.z1,
        y0: t.gy,
        y1: t.gy + _V.h,
        rgb: [0.55, 0.56, 0.56],
        lit: !0,
      },
      {
        x0: gV.x + vV.x0,
        x1: gV.x + vV.x1,
        z0: gV.z + vV.z0,
        z1: gV.z + vV.z1,
        y0: t.gy + _V.h,
        y1: t.gy + vV.h,
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
  SV = { x: -2085, z: 135.9 };
function bwe(e) {
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
    UB(e, `歌舞伎町一番街`, 0, 4.5, 0.25, RB, 1.05, {
      raw: !0,
      px: 26,
      align: 0.5,
      maxW: 2 * t - 1.4,
      weight: 800,
    }),
    UB(e, `歌舞伎町一番街`, 0, 4.5, -0.25, LB, 1.05, {
      raw: !0,
      px: 26,
      align: 0.5,
      maxW: 2 * t - 1.4,
      weight: 800,
    })),
    e.pop());
}
