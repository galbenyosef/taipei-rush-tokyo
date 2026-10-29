// tokyo/assets/region-tokyo-A7LxHjud 285 — math
// Lines 105048-105388 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* hTe(e, t) {
  let n = t.c(`gravel`);
  (e.push().col(EH).mat(0.95, 0, 0, 0),
    e.flat(
      pH.x0 - 6,
      gH.z0 - 6,
      pH.x1 + 6,
      pH.z0 + pH.d,
      zV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      pH.x0 - 6,
      pH.z0 + pH.d,
      pH.x0,
      pH.z1 + 6,
      zV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      pH.x1,
      pH.z0 + pH.d,
      pH.x1 + 6,
      pH.z1 + 6,
      zV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      pH.x0,
      pH.z1,
      pH.x1,
      pH.z1 + 6,
      zV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.col(13223615).mat(0.85, 0, 0, 0),
    e.flat(
      pH.x0,
      pH.z0 + pH.d,
      pH.x1,
      pH.z1,
      zV.PAVE,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 2.4,
      e.coarse ? 0 : 2.4,
    ),
    e.pop(),
    yield);
  let r = pH.d,
    i = (n, r, i, a) => {
      let o = e.sub(n, 0, r, i);
      (aTe(e, t, a), e.leave(o));
    },
    a = 9.5,
    o = 7.5;
  (i((pH.x0 + dH - a) / 2, pH.z1 - r / 2, Math.PI, -2141.5 - pH.x0),
    i((-2122.5 + pH.x1) / 2, pH.z1 - r / 2, Math.PI, pH.x1 - dH - a),
    i((pH.x0 + mH.x0) / 2, pH.z0 + r / 2, 0, mH.x0 - pH.x0),
    i((mH.x1 + pH.x1) / 2, pH.z0 + r / 2, 0, pH.x1 - mH.x1),
    yield);
  for (let [e, t] of [
    [pH.x1 - r / 2, Math.PI / 2],
    [pH.x0 + r / 2, -Math.PI / 2],
  ])
    (i(e, (pH.z0 + r + 733 - o) / 2, t, 725.5 - pH.z0 - r),
      i(e, (740.5 + pH.z1 - r) / 2, t, pH.z1 - r - 733 - o));
  yield;
  {
    let n = e.sub(dH, 0, pH.z1 - r / 2, Math.PI);
    (HH(e, t, 6.6, 3.4, !0), e.leave(n));
  }
  for (let [n, i] of [
    [pH.x1 - r / 2, Math.PI / 2],
    [pH.x0 + r / 2, -Math.PI / 2],
  ]) {
    let r = e.sub(n, 0, 733, i);
    (HH(e, t, 5, 2.8, !1), e.leave(r));
  }
  yield;
  {
    let n = e.sub(dH, 0, (mH.z0 + mH.z1) / 2, Math.PI);
    (rTe(e, t, (mH.x1 - mH.x0) / 2, -(mH.z1 - mH.z0) / 2, (mH.z1 - mH.z0) / 2),
      e.leave(n));
  }
  yield;
  {
    e.push().col(CH).mat(0.85, 0, 0.08, 1);
    let n = gH,
      r = 2.6,
      i = [
        [n.x1, n.z0, n.x0, n.z0],
        [n.x0, n.z0, n.x0, pH.z0],
        [n.x1, pH.z0, n.x1, n.z0],
      ];
    for (let [t, n, a, o] of i)
      (e.panel(t, n, a, o, 0, r),
        e.panel(a, o, t, n, 0, r),
        e.solidRot(
          (t + a) / 2,
          (n + o) / 2,
          Math.hypot(a - t, o - n) / 2,
          0.2,
          Math.atan2(o - n, a - t),
          0,
          r,
        ));
    (e.col(5204576).mat(0.55, 0.3, 0, 0),
      e.box(n.x0 - 0.25, r, n.z0 - 0.25, n.x1 + 0.25, 2.85, n.z0 + 0.25),
      e.box(n.x0 - 0.25, r, n.z0, n.x0 + 0.25, 2.85, pH.z0),
      e.box(n.x1 - 0.25, r, n.z0, n.x1 + 0.25, 2.85, pH.z0),
      e.pop(),
      e.col(EH).mat(0.95, 0, 0, 0));
    let a = e.sub(dH, 0, (hH.z0 + hH.z1) / 2, Math.PI);
    (iTe(e, t, (hH.x1 - hH.x0) / 2, -(hH.z1 - hH.z0) / 2, (hH.z1 - hH.z0) / 2),
      e.leave(a));
  }
  yield;
  for (let [t, n, r] of [
    [pH.x0 + 13, pH.z0 + 26, 61],
    [pH.x0 + 13, pH.z0 + 41, 62],
  ])
    if (
      (e.push().mat(0.95),
      e.coarse || e.col(5326396).rod(t, 0, n, t + 0.3, 7, n, 0.6, 6, 0.4),
      UV(
        e,
        t,
        n,
        e.coarse
          ? [
              [0, 4.5],
              [7.5, 10],
              [0, 17],
            ]
          : [
              [0, 4.2],
              [6.8, 6.5],
              [8.2, 10.5],
              [6.6, 14.5],
              [3.2, 16.6],
              [0, 17.2],
            ],
        e.coarse ? 6 : 10,
        4155955,
        1,
        r,
      ),
      e.pop(),
      e.pole(t, n, 0.7, 0, 3),
      !e.coarse)
    ) {
      (e.push().col(15656914).mat(0.9, 0, 0, 0),
        e.lathe(t, n, [0.78, 1.55, 0.82, 1.6, 0.78, 1.7], 10),
        e.pop(),
        e.push().col(CH).mat(0.85, 0, 0, 0));
      for (let [r, i, a, o] of [
        [-2.6, -2.6, 2.6, -2.6],
        [2.6, -2.6, 2.6, 2.6],
        [2.6, 2.6, -2.6, 2.6],
        [-2.6, 2.6, -2.6, -2.6],
      ])
        (e.panel(t + r, n + i, t + a, n + o, 0, 0.8),
          e.panel(t + a, n + o, t + r, n + i, 0, 0.8));
      (e.pop(), e.solid(t - 2.6, n - 2.6, t + 2.6, n + 2.6, 0, 0.9, `fence`));
    }
}
function* gTe(e, t) {
  if (
    (zH(e, yH.x, yH.z, 0, 8.2, 11, !0, Ywe),
    zH(e, _H.x, _H.z, Math.PI / 2, 9.1, 12, !0, TH),
    zH(e, vH.x, vH.z, 0, 6.4, 8.2, !0, Xwe),
    yield,
    !e.coarse)
  ) {
    let t = yH.x - 9,
      n = yH.z + 4;
    (e.push().col(5915699).mat(0.85),
      e.box(t - 1.6, 0, n - 0.15, t - 1.4, 2.6, n + 0.15),
      e.box(t + 1.4, 0, n - 0.15, t + 1.6, 2.6, n + 0.15),
      e.col(15921126).mat(0.8),
      e.panel(t - 1.4, n + 0.05, t + 1.4, n + 0.05, 0.8, 2.3),
      e.col(5597535).mat(0.55, 0.4),
      e.box(t - 1.9, 2.6, n - 0.6, t + 1.9, 2.75, n + 0.6),
      e.pop(),
      e.solid(t - 1.6, n - 0.2, t + 1.6, n + 0.2, 0, 2.6));
  }
  oTe(e, t, bH.x, bH.z);
  let n = Math.atan2(-AH.ux, AH.uz);
  for (let [r, i] of [
    [1, MH],
    [-1, 22],
  ]) {
    let [a, o] = $we(jH, r * 9.2),
      s = e.sub(
        a,
        t.plan.groundHeight(a, o) - t.site.gy,
        o,
        n + (r > 0 ? Math.PI / 2 : -Math.PI / 2),
      );
    (r > 0 ? sTe(e, t, i) : cTe(e, t, i), e.leave(s));
  }
}
function* _Te(e, t) {
  let n = e.sub(-iH.x, 0, -iH.z, 0);
  (yield* fTe(e, t),
    mTe(e, t),
    yield,
    yield* gTe(e, t),
    yield,
    yield* hTe(e, t),
    e.leave(n));
}
function vTe(e, t) {
  let n = e.sub(-iH.x, 0, -iH.z, 0);
  (e
    .col(13223615)
    .mat(0.95, 0, 0, 0)
    .flat(pH.x0 - 6, gH.z0 - 6, pH.x1 + 6, pH.z1 + 6, zV.PATH),
    e.col(7109749).mat(0.6, 0.2, 0, 0));
  let r = pH.d + 2;
  (e.box(pH.x0 - 1, 0, pH.z0 - 1, pH.x1 + 1, 5.6, pH.z0 - 1 + r),
    e.box(pH.x0 - 1, 0, pH.z1 + 1 - r, pH.x1 + 1, 5.6, pH.z1 + 1),
    e.box(pH.x0 - 1, 0, pH.z0 - 1 + r, pH.x0 - 1 + r, 5.6, pH.z1 + 1 - r),
    e.box(pH.x1 + 1 - r, 0, pH.z0 - 1 + r, pH.x1 + 1, 5.6, pH.z1 + 1 - r),
    e.extrudeX(
      [mH.z1 + 4, 5.4, mH.z0 - 2, 7.6, mH.z1 - 6, 13.2],
      mH.x0 - 2.6,
      mH.x1 + 2.6,
      !0,
      !0,
    ),
    e.extrudeX(
      [hH.z1 + 4, 5.6, hH.z0 - 2, 7.4, hH.z1 - 10, 14.5],
      hH.x0 - 2.2,
      hH.x1 + 2.2,
      !0,
      !0,
    ),
    e.col(EH).flat(dH - uH / 2, sH.z - uH / 2, sH.x, sH.z + uH / 2, zV.PATH),
    e.col(TH).box(_H.x - 1, 10.5, _H.z - 8.5, _H.x + 1, 12, _H.z + 8.5),
    e.leave(n));
}
var yTe = {
  id: `meiji-jingu`,
  lot: `meiji-jingu`,
  site: LH,
  name: { ja: `明治神宮`, zh: `明治神宮`, en: `Meiji Jingu` },
  near: 240,
  build: _Te,
  far: vTe,
  bounds: () => [rH.x0, rH.z0, rH.x1, 1031],
  farBoxes: () => [
    {
      x0: pH.x0,
      x1: pH.x1,
      z0: pH.z0,
      z1: pH.z1,
      y0: 9,
      y1: 15,
      rgb: [0.3, 0.4, 0.34],
    },
    {
      x0: mH.x0,
      x1: mH.x1,
      z0: mH.z0,
      z1: mH.z1,
      y0: 9,
      y1: 22,
      rgb: [0.3, 0.42, 0.36],
    },
  ],
  anchors: [
    {
      key: `meiji-otorii`,
      lx: _H.x + 30 - iH.x,
      lz: _H.z - iH.z,
      turn: Math.PI / 2,
      name: { zh: `明治神宮 大鳥居`, en: `Meiji Jingu Great Torii` },
    },
    {
      key: `meiji-ichi-torii`,
      lx: yH.x - iH.x,
      lz: yH.z + 14 - iH.z,
      turn: 0,
      name: { zh: `明治神宮 南參道入口`, en: `Meiji Jingu South Approach` },
    },
  ],
  blip: !0,
};
r.add({ 國立代代木競技場: `国立代々木競技場` });
var bTe = 33,
  YH = 21,
  xTe = YH,
  XH = 12,
  ZH = 21,
  QH = Math.PI / 4,
  $H = 27,
  STe = 8,
  eU = 5.5,
  tU = 7765120,
  CTe = 12894132,
  wTe = 11841186,
  nU = (e) => $H - STe * (1 - Math.min(1, (e / ZH) ** 2)),
  TTe = (e) => nU(e) - 1.6 - 1.2 * Math.min(1, (e / ZH) ** 4);
function rU(e) {
  let t = -e * XH,
    n = (n) => {
      let r = Math.PI * (-0.3 + 1.3 * n),
        i = 1 - 0.4 * Math.max(0, -r / (0.3 * Math.PI)),
        a = t - e * bTe * i * Math.cos(r),
        o = e * YH * i * Math.sin(r),
        s = Math.max(0, (0.38 - n) / 0.38),
        c = Math.max(0, (n - 0.88) / 0.12);
      return [a, eU + 7.5 * s ** 1.6 + 6 * c ** 2, o];
    };
  return {
    rim: n,
    spine: (e) => {
      let t = Math.max(-21, Math.min(ZH, n(e)[0]));
      return [t, TTe(t), 0];
    },
  };
}
function iU(e, t, n) {
  let r = e.spine(t),
    i = e.rim(t),
    a = n,
    o =
      r[1] +
      (i[1] - r[1]) * a -
      (r[1] - i[1]) * 0.34 * a * (1 - a) * (1 - Math.max(0, (0.25 - t) / 0.25));
  return [r[0] + (i[0] - r[0]) * a, o, r[2] + (i[2] - r[2]) * a];
}
