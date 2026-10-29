// tokyo/assets/region-tokyo-55J_WESF 232 — math
// Lines 88944-89279 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Bbe(e, t) {
  let n = OP(t);
  (e.col(cP).mat(0.6, 0, 0.3, sP),
    e.box(-17.2, 0, TP, 17.2, bbe, EP),
    e.box(-10.5, 0, -33.1, 10.5, 15, -25.9),
    e.col(hP).mat(0.8, 0.05, 0, 0),
    e.extrudeX(
      [28, 11.6, -3.3999999999999986, 11.6, 24.6 / 2, 28.8],
      -21.4,
      21.4,
      !0,
      !0,
      n.kawara,
    ),
    e.extrudeX([-22.4, 15.2, -36.6, 15.2, wP, 22.4], -12, 12, !0, !0, n.kawara),
    e.col(gP).mat(0.5, 0, 0.1, sP).box(-46.2, 0, 6, -33.8, 9, 21));
}
var Vbe = {
  id: `sensoji`,
  site: (e) => ({
    x: vP.x,
    z: vP.z,
    gy: e.groundHeight(vP.x, vP.z),
    facing: oP,
  }),
  name: { ja: `浅草寺`, zh: `淺草寺`, en: `Senso-ji` },
  near: 250,
  build: Lbe,
  far: Bbe,
  farBoxes: (e, t) => {
    let n = WP(t, t.gy);
    return [
      n(-17.2, TP, 17.2, EP, 18, [0.58, 0.16, 0.09]),
      n(-12, 4.6, 12, 20, 29, [0.3, 0.32, 0.35]),
      n(-10.5, -33.1, 10.5, -25.9, 22.5, [0.58, 0.16, 0.09]),
      n(-46, 6, -34, 21, 10, [0.15, 0.12, 0.1]),
    ];
  },
  bounds: (e, t) => [
    t.x - 50 - 15,
    t.z - 35.5 - 15,
    t.x + 70 + 15,
    t.z + 35.5 + 15,
  ],
  anchors: [
    {
      key: `sensoji-hondo`,
      lx: 0,
      lz: -11,
      turn: oP,
      name: { zh: `淺草寺 本堂`, en: `Senso-ji Main Hall` },
    },
    {
      key: `sensoji-hozomon`,
      lx: 0,
      lz: -38.5,
      turn: oP,
      name: { zh: `淺草寺 寶藏門`, en: `Senso-ji Hozomon` },
    },
  ],
  roofs: [
    { lx0: -3.5, lz0: -33.1, lx1: 3.5, lz1: -25.9, y: 6.8 },
    { lx0: -8, lz0: -7, lx1: 8, lz1: TP, y: 8.4 },
  ],
  blip: !1,
};
function* Hbe(e, t) {
  let n = OP(t),
    r = 2.6;
  (e
    .col(fP)
    .mat(0.9, 0, 0.06, sP)
    .box(-7.6, 0, -7.6, 7.6, r, 7.6, n.granite, 2, r),
    e.col(8024680).box(-8.2, 0, -8.2, 8.2, 0.3, 8.2),
    e.solid(-8.2, -8.2, 8.2, 8.2, 0, r));
  let i = [4.3, 3.95, 3.6, 3.3, 3],
    a = [6.6, 4.2, 4, 3.8, 3.6],
    o = [7.9, 7.4, 6.9, 6.4, 6],
    s = r;
  for (let t = 0; t < 5; t++) {
    let r = i[t],
      c = a[t];
    (jP(e, 0.2, 0.96), e.box(-r + 0.1, s, -r + 0.1, r - 0.1, s + c, r - 0.1));
    for (let t of [-r, -r / 3, r / 3, r])
      for (let n of [-r, r])
        (LP(e, t, n, s, s + c, 0.22, 0.22),
          Math.abs(t) < r - 1e-6 && LP(e, n, t, s, s + c, 0.22, 0.22));
    if (!e.coarse) {
      for (let t = 0; t < 4; t++) {
        let i = e.sub(0, 0, 0, (t * oP) / 2),
          a = -r + 0.08;
        (e
          .col(2759188)
          .mat(0.5, 0.2, 0.2, sP)
          .panel(r / 3 - 0.2, a, -r / 3 + 0.2, a, s + 0.2, s + c - 0.7),
          e.col(6989962).mat(0.7, 0, 0.25, G));
        for (let t of [-1, 1]) {
          let i = t * (r / 3 + 0.25),
            o = t * (r - 0.3);
          e.wall(
            Math.max(i, o),
            a,
            Math.min(i, o),
            a,
            s + c * 0.35,
            s + c - 0.8,
            n.shoji,
            0.7,
            0.75,
          );
        }
        e.leave(i);
      }
      t > 0 && PP(e, -r - 0.7, -r - 0.7, r + 0.7, r + 0.7, s - 0.1);
    }
    (IP(e, -r - 0.1, -r - 0.1, r + 0.1, r + 0.1, s + c, s + c + 1.3, 1),
      FP(
        e,
        -o[t] + 1.5,
        -o[t] + 1.5,
        o[t] - 1.5,
        o[t] - 1.5,
        s + c + 1.25,
        0.45,
      ));
    let l = s + c + 1.15,
      u = t === 4 ? 1 : 1 - (i[t + 1] + 0.15) / o[t];
    (AP(e),
      (s =
        uC(e, 0, 0, l, o[t] * Math.SQRT2, {
          sides: 4,
          rot: oP / 4,
          rise: o[t] * 0.55,
          curve: 1.45,
          sori: 0.9,
          thick: 0.4,
          eave: 2.4,
          tTop: u,
          cell: n.kawara,
          color: hP,
          band: 14208936,
          soffit: lP,
          ridgeColor: 4014406,
          ridgeH: 0.5,
          tile: 2,
          rows: 5,
          hips: 3,
          curl: 0.45,
        }) - 0.15),
      yield);
  }
  let c = s + 0.15;
  (e.col(13214282).mat(0.35, 0.8, 0.12, sP),
    e.box(-0.85, c - 0.2, -0.85, 0.85, c + 0.6, 0.85),
    e.lathe(
      0,
      0,
      [0.75, c + 0.6, 0.78, c + 1.1, 0.4, c + 1.5],
      e.seg(10),
      0,
      e.white,
      !1,
      !0,
    ),
    e.lathe(
      0,
      0,
      [0.3, c + 1.5, 0.6, c + 1.9, 0.25, c + 2],
      e.seg(10),
      0,
      e.white,
      !1,
      !0,
    ),
    e.cylY(0, 0, c + 2, 52.699999999999996, 0.16, 8, 0.12, !1));
  let l = c + 2.4;
  for (let t = 0; t < 9; t++) {
    let n = l + ((47.8 - l) * t) / 8,
      r = 0.62 - t * 0.025;
    (e.lathe(0, 0, [r, n - 0.09, r, n + 0.09], e.seg(10), 0, e.white, !1, !0),
      e.coarse || e.disc(0, n + 0.09, 0, r, e.seg(10)));
  }
  if (!e.coarse)
    for (let t = 0; t < 2; t++) {
      let n = (t * oP) / 2,
        r = Math.cos(n) * 0.65,
        i = Math.sin(n) * 0.65;
      (e.quad(
        -r,
        48.4,
        -i,
        r,
        48.4,
        i,
        r * 1.1,
        50.4,
        i * 1.1,
        -r * 1.1,
        50.4,
        -i * 1.1,
      ),
        e.quad(
          r,
          48.4,
          i,
          -r,
          48.4,
          -i,
          -r * 1.1,
          50.4,
          -i * 1.1,
          r * 1.1,
          50.4,
          i * 1.1,
        ));
    }
  (e.lathe(
    0,
    0,
    [0.1, 50.699999999999996, 0.35, 51, 0.1, 51.3],
    e.seg(8),
    0,
    e.white,
    !1,
    !0,
  ),
    e.lathe(
      0,
      0,
      [0.05, 52.099999999999994, 0.3, 52.4, 0.28, 52.9, 0.02, 53.3],
      e.seg(8),
      0,
      e.white,
      !1,
      !0,
    ),
    e.solid(-i[0], -i[0], i[0], i[0], r, c));
}
function Ube(e, t) {
  let n = OP(t);
  (e.col(cP).mat(0.6, 0, 0.3, sP),
    e.box(-4.3, 0, -4.3, 4.3, 37, 4.3),
    e.col(hP).mat(0.8, 0.05, 0, 0));
  for (let [t, r] of [
    [10.3, 7.9],
    [17, 7.4],
    [23.4, 6.9],
    [29.6, 6.4],
  ])
    e.box(-r, t, -r, r, t + 0.8, r, n.kawara, 4, 1);
  (e.extrudeX([6, 35.7, -6, 35.7, 0, 39], -6, 6, !0, !0, n.kawara),
    e
      .col(13214282)
      .mat(0.4, 0.7, 0.1, sP)
      .box(-0.35, 39, -0.35, 0.35, 53.3, 0.35));
}
var Wbe = {
    id: `sensoji-pagoda`,
    site: (e) => ({
      x: yP.x,
      z: yP.z,
      gy: e.groundHeight(yP.x, yP.z),
      facing: oP,
    }),
    name: {
      ja: `浅草寺 五重塔`,
      zh: `淺草寺 五重塔`,
      en: `Senso-ji Five-storey Pagoda`,
    },
    near: 260,
    build: Hbe,
    far: Ube,
    farBoxes: (e, t) => [
      {
        x0: t.x - 7.9,
        x1: t.x + 7.9,
        z0: t.z - 7.9,
        z1: t.z + 7.9,
        y0: t.gy,
        y1: t.gy + 38,
        rgb: [0.55, 0.16, 0.09],
      },
      {
        x0: t.x - 0.6,
        x1: t.x + 0.6,
        z0: t.z - 0.6,
        z1: t.z + 0.6,
        y0: t.gy + 38,
        y1: t.gy + 53.3,
        rgb: [0.6, 0.48, 0.2],
      },
    ],
    blip: !1,
  },
  KP = { x: -918, z: -731 },
  qP = 20.4,
  JP = 8.4,
  YP = -3,
  Gbe = 5.4,
  Kbe = 0.159,
  qbe = 5.3,
  XP = (e) => 1 - Kbe * Math.abs(e) ** +qbe,
  ZP = { x0: -1e3 - KP.x, x1: -807 - KP.x, z0: -813 - KP.z, z1: -625 - KP.z },
  QP = 15855851,
  $P = 15329248,
  Jbe = 16184816,
  Ybe = 13223872,
  Xbe = 14210510,
  eF = 2047884;
function tF(e, t) {
  return [e * 70 * XP(t), t * 70 * XP(e)];
}
function Zbe(e) {
  let t = [];
  for (let n = 0; n < e; n++) t.push([1 - (2 * n) / e, -1]);
  for (let n = 0; n < e; n++) t.push([-1, -1 + (2 * n) / e]);
  for (let n = 0; n < e; n++) t.push([-1 + (2 * n) / e, 1]);
  for (let n = 0; n < e; n++) t.push([1, 1 - (2 * n) / e]);
  return t;
}
function nF(e, t = 0) {
  let n = Zbe(e).map(([e, t]) => tF(e, t));
  return t ? Rk(n, t) : n;
}
function rF(e, t, n) {
  let r = 70 + n;
  return (Math.abs(e) / r) ** 4 + (Math.abs(t) / r) ** 4 <= 1;
}
function iF(e, t, n) {
  let [r, i] = tF(e, t),
    a = Math.max(0, 1 - e * e) ** 0.62 * Math.max(0, 1 - t * t) ** 0.62,
    o = (((e + 1) / 2) * 16) % 1,
    s = (((t + 1) / 2) * 16) % 1,
    c = n * Math.sin(Math.PI * o) * Math.sin(Math.PI * s) * Math.min(1, a * 6);
  return [r, 34.6 + qP * a + c, i];
}
