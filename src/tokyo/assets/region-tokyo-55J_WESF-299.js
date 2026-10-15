// tokyo/assets/region-tokyo-55J_WESF 299 — math
// Lines 108977-109318 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var UW = {
    x: -1631.5,
    z: 990,
    clear: 4.95,
    girder: 0.9,
    hw: 1.5,
    wall: 0.22,
    para: 1.2,
    zIn: 11.25,
    zEnd: 13.45,
    rise: 0.16,
    tread: 0.3,
    landing: 1.4,
    col: 10.35,
  },
  WW = 6182220,
  GW = 12894650;
function mEe(e, t) {
  let n = UW.clear + UW.girder,
    r = (t * (UW.zIn + UW.zEnd)) / 2,
    i = (t) => fW(e, t, r),
    a = 10,
    o = UW.rise,
    s = 0;
  for (
    ;
    a < 60 &&
    ((s = UW.hw + a * UW.tread + UW.landing),
    (o = (n - i(s)) / a),
    !(o <= UW.rise + 0.005));
    a++
  );
  let c = Math.ceil(a / 2),
    l = UW.hw + c * UW.tread,
    u = n - c * o;
  return { n: a, n1: c, r: o, xa: l, yL: u, xe: s, ye: n - a * o, yd: n };
}
function* hEe(e, t) {
  let { clear: n, girder: r, hw: i, wall: a, para: o, zIn: s, zEnd: c } = UW,
    l = n + r,
    u = () => e.col(WW).mat(0.55, 0.35, 0, 0);
  (u(),
    e.panel(-i, -c, -i, c, n, l),
    e.panel(i, c, i, -c, n, l),
    e.panel(i, -c, -i, -c, n, l),
    e.panel(-i, c, i, c, n, l),
    e.flat(-i, -c, i, c, n, e.white, 0, 0, !1),
    e.col(8093047).mat(0.9, 0, 0, 0),
    e.flat(-i + a, -c + a, i, c - a, l + 0.01));
  let d = (t, n, r, i) => {
    (u(),
      e.box(t, l, n, r, l + o, i),
      e.col(GW).mat(0.35, 0.6, 0.05, 1),
      Math.abs(i - n) > Math.abs(r - t)
        ? e.box(t - 0.05, l + o, n, r + 0.05, l + o + 0.08, i)
        : e.box(t, l + o, n - 0.05, r, l + o + 0.08, i + 0.05));
  };
  (d(-i, -c, -i + a, c), d(i - a, -s, i, s));
  for (let e of [-1, 1]) d(-i + a, e > 0 ? c - a : -c, i, e > 0 ? c : -c + a);
  if (!e.coarse) {
    (WB(
      e,
      -i,
      n + 0.14,
      0,
      [-1, 0],
      4.4,
      0.62,
      0.06,
      16053488,
      `神宮前歩道橋`,
      1912666,
      { lit: 0.5, raw: !0 },
    ),
      WB(
        e,
        i,
        n + 0.14,
        0,
        [1, 0],
        4.4,
        0.62,
        0.06,
        16053488,
        `神宮前歩道橋`,
        1912666,
        { lit: 0.5, raw: !0 },
      ),
      e.col(16773846).mat(0.3, 0, 0.9, 1),
      e.panel(
        -i + a + 0.01,
        c - a,
        -i + a + 0.01,
        -c + a,
        l + o - 0.12,
        l + o - 0.04,
      ),
      e.panel(i - a - 0.01, -s, i - a - 0.01, s, l + o - 0.12, l + o - 0.04));
    for (let t = -c + 2.2; t < c - 1; t += 4.2)
      e.flat(-0.25, t, 0.25, t + 0.7, n - 0.02, e.white, 0, 0, !1);
  }
  u();
  for (let t of [-1, 1])
    (e.cylY(0, t * UW.col, -0.5, n, 0.38, e.coarse ? 6 : 10, 0.38, !1),
      e.pole(0, t * UW.col, 0.42, 0, n));
  yield;
  for (let n of [-1, 1]) {
    let r = mEe(t, n),
      o = n * (s + a),
      l = n * (c - a),
      d = Math.min(o, l),
      f = Math.max(o, l),
      p = r.n,
      m = (e) => UW.hw + (e - 1) * UW.tread + (e > r.n1 ? UW.landing : 0);
    e.col(9079942).mat(0.85, 0, 0, 0);
    for (let t = 1; t <= p; t++) {
      let n = m(t),
        i = t === r.n1 ? UW.tread + UW.landing : UW.tread,
        a = r.yd - t * r.r;
      ((!e.coarse || t % 3 == 0) && e.panel(n, f, n, d, a, a + r.r),
        t < p && e.flat(n, d, n + i, f, a));
    }
    let h = [
      [UW.hw, r.yd],
      [r.xa, r.yL],
      [r.xa + UW.landing, r.yL],
      [r.xe, r.ye],
    ];
    for (let t = 0; t < h.length - 1; t++) {
      let [r, i] = h[t],
        [s, c] = h[t + 1];
      u();
      for (let [t, n] of [
        [o, o + Math.sign(o) * a * -1],
        [l, l + Math.sign(l) * a],
      ]) {
        let a = Math.min(t, n),
          o = Math.max(t, n);
        (e.quad(s, c - 0.5, a, r, i - 0.5, a, r, i + 1.1, a, s, c + 1.1, a),
          e.quad(r, i - 0.5, o, s, c - 0.5, o, s, c + 1.1, o, r, i + 1.1, o),
          e.push().col(GW).mat(0.35, 0.6, 0.05, 1),
          e.quad(r, i + 1.1, a, r, i + 1.1, o, s, c + 1.1, o, s, c + 1.1, a),
          e.pop());
      }
      (u(),
        e.quad(
          r,
          i - 0.5,
          n > 0 ? o : l,
          s,
          c - 0.5,
          n > 0 ? o : l,
          s,
          c - 0.5,
          n > 0 ? l : o,
          r,
          i - 0.5,
          n > 0 ? l : o,
        ));
    }
    if (
      (e.cylY(
        r.xa + UW.landing / 2,
        (n * (s + c)) / 2,
        -0.5,
        r.yL - 0.5,
        0.2,
        e.coarse ? 5 : 8,
        0.2,
        !1,
      ),
      !e.coarse)
    ) {
      e.col(16773846).mat(0.3, 0, 0.9, 1);
      for (let [t, n] of [
        [UW.hw + 0.8, r.yd],
        [r.xa + 0.7, r.yL],
      ])
        e.box(
          t - 0.2,
          n + 0.75,
          o - 0.03 * Math.sign(o) - 0.06,
          t + 0.2,
          n + 0.95,
          o - 0.03 * Math.sign(o) + 0.06,
        );
    }
    let g = e.sub(0, 0, 0, -Math.PI / 2),
      _ = -f,
      v = -d;
    (e.floor(_, i - a, v, r.xa, r.yd, r.yL, `stairs`),
      e.floor(_, r.xa, v, r.xa + UW.landing, r.yL, r.yL),
      e.floor(_, r.xa + UW.landing, v, r.xe, r.yL, r.ye, `stairs`),
      e.leave(g),
      e.solid(
        i,
        Math.min(o, o - Math.sign(o) * a),
        r.xe,
        Math.max(o, o - Math.sign(o) * a),
        0,
        r.yd + 1.1,
      ),
      e.solid(
        i,
        Math.min(l, l + Math.sign(l) * a),
        r.xe,
        Math.max(l, l + Math.sign(l) * a),
        0,
        r.yd + 1.1,
      ),
      e.pole(r.xa + UW.landing / 2, (n * (s + c)) / 2, 0.25, 0, r.yL - 0.5),
      e.solid(i, d, i + 0.25, f, 0, r.yd - 0.7));
  }
  (e.floor(-i + a, -c + a, i, c - a, l, l),
    e.solid(-i, -c, -i + a, c, n, l + o),
    e.solid(i - a, -s, i, s, n, l + o),
    e.solid(-i, -c, i, -c + a, n, l + o),
    e.solid(-i, c - a, i, c, n, l + o));
}
var gEe = {
    id: `omote-footbridge`,
    site: (e) => ({
      x: UW.x,
      z: UW.z,
      gy: e.groundHeight(UW.x, UW.z),
      facing: 0,
    }),
    name: { ja: `神宮前歩道橋`, zh: `神宮前天橋`, en: `Jingumae Footbridge` },
    near: 180,
    build: hEe,
    far(e) {
      (e.col(WW).mat(0.6, 0.3, 0, 0),
        e.box(
          -UW.hw,
          UW.clear,
          -UW.zEnd,
          UW.hw,
          UW.clear + UW.girder + UW.para,
          UW.zEnd,
        ));
    },
    farBoxes: () => [],
    bounds: (e, t) => [t.x - 4, t.z - UW.zEnd - 2, t.x + 16, t.z + UW.zEnd + 2],
    anchors: [
      {
        key: `jingumae-footbridge`,
        lx: 12,
        lz: 9,
        turn: Math.PI / 2,
        name: { zh: `神宮前天橋`, en: `Jingumae Footbridge` },
      },
    ],
    blip: !0,
  },
  _Ee = [
    xW(`omote-lafora`, SW.dh, [0.55, 0.56, 0.57], UTe, WTe),
    xW(`omote-omokaku`, CW.top, [0.3, 0.3, 0.31], JTe, XTe, {
      site: mW(`omote-omokaku`, [oW.omokakuBack]),
      farBoxes: cW([
        [[-1691.5, 943.3, -1652.6, 974], CW.top, [0.3, 0.3, 0.31]],
        [oW.omokakuBack, 24, [0.55, 0.58, 0.6]],
      ]),
      blip: !0,
      anchors: [
        {
          key: `omotesando-omokaku`,
          lx: 22,
          lz: -19,
          turn: Math.PI * 1.25,
          name: {
            zh: `東吉廣場表參道「OMOKAKU」萬花筒入口`,
            en: `Tokichi Plaza "Omokaku", the kaleidoscope entrance`,
          },
        },
      ],
    }),
    xW(`omote-terrace`, 23.3, [0.5, 0.53, 0.54], ZTe, QTe, {
      site: mW(`omote-terrace`, [oW.terraceBack]),
      farBoxes: cW([
        [[-1627.4, 945, -1561.5, 974], 23.3, [0.5, 0.53, 0.54]],
        [oW.terraceBack, 18, [0.55, 0.54, 0.5]],
      ]),
      blip: !0,
      anchors: [
        {
          key: `omotesando-terrace`,
          lx: 0,
          lz: -22,
          turn: Math.PI,
          name: { zh: `表參道露臺前`, en: `Omotesando Terrace, the avenue` },
        },
      ],
    }),
    xW(`omote-harakaku`, kW.top, [0.42, 0.5, 0.56], $Te, eEe, {
      site: mW(`omote-harakaku`, [oW.harakakuBack]),
      farBoxes: cW([
        [[-1738.4, 1006, -1717.6, 1029.8], kW.top, [0.42, 0.5, 0.56]],
        [oW.harakakuBack, kW.top, [0.42, 0.5, 0.56]],
      ]),
      blip: !0,
      anchors: [
        {
          key: `omotesando-harakaku`,
          lx: 4,
          lz: -39,
          turn: Math.PI,
          name: {
            zh: `東吉廣場原宿「HARAKAKU」`,
            en: `Tokichi Plaza Harajuku "Harakaku"`,
          },
        },
      ],
    }),
    xW(`omote-kiddo`, PW.h, [0.85, 0.84, 0.82], tEe, nEe),
    xW(`omote-gyro`, FW.n * FW.st + 0.8, [0.22, 0.24, 0.26], rEe, iEe),
    xW(`omote-fendo`, LW.h, [0.76, 0.7, 0.6], aEe, oEe),
    xW(`omote-diar`, 30.25, [0.88, 0.88, 0.86], sEe, cEe),
    xW(`omote-luis`, 31.9, [0.56, 0.45, 0.3], lEe, uEe, {
      site: mW(`omote-luis`, [oW.luis]),
      farBoxes: cW([[oW.luis, 31.9, [0.56, 0.45, 0.3]]]),
    }),
    xW(`omote-toads`, HW.h + 0.4, [0.45, 0.44, 0.41], fEe, pEe, {
      site: mW(`omote-toads`, [oW.toads]),
      farBoxes: cW([[oW.toads, HW.h + 0.4, [0.45, 0.44, 0.41]]]),
    }),
    gEe,
  ],
  KW = { x: -2117.55, z: 47.95 },
  vEe = (e) => ({
    x: KW.x,
    z: KW.z,
    gy: e.groundHeight(KW.x, KW.z),
    facing: 0,
  }),
  Y = { x0: -11.8, x1: 11.2, z0: -1.2, z1: 25.2, gf: 5, h: 17, par: 18 },
  qW = { z0: 7, z1: 19, depth: 1.6 },
  JW = { x0: -11.8, x1: 11.6, z0: -25.2, z1: -1.2, gf: 4.4, h: 28 },
  YW = 16726694,
  XW = 3728639,
  ZW = 10116351,
  QW = 16765562,
  yEe = (e, t, n) => [e, n, e, t];
