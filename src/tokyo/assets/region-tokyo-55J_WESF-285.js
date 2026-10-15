// tokyo/assets/region-tokyo-55J_WESF 285 — math
// Lines 104957-105297 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* tTe(e, t) {
  let n = t.c(`gravel`);
  (e.push().col(TH).mat(0.95, 0, 0, 0),
    e.flat(
      fH.x0 - 6,
      hH.z0 - 6,
      fH.x1 + 6,
      fH.z0 + fH.d,
      RV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      fH.x0 - 6,
      fH.z0 + fH.d,
      fH.x0,
      fH.z1 + 6,
      RV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      fH.x1,
      fH.z0 + fH.d,
      fH.x1 + 6,
      fH.z1 + 6,
      RV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.flat(
      fH.x0,
      fH.z1,
      fH.x1,
      fH.z1 + 6,
      RV.PATH,
      e.coarse ? e.white : n,
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.col(13223615).mat(0.85, 0, 0, 0),
    e.flat(
      fH.x0,
      fH.z0 + fH.d,
      fH.x1,
      fH.z1,
      RV.PAVE,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 2.4,
      e.coarse ? 0 : 2.4,
    ),
    e.pop(),
    yield);
  let r = fH.d,
    i = (n, r, i, a) => {
      let o = e.sub(n, 0, r, i);
      (Gwe(e, t, a), e.leave(o));
    },
    a = 9.5,
    o = 7.5;
  (i((fH.x0 + uH - a) / 2, fH.z1 - r / 2, Math.PI, -2141.5 - fH.x0),
    i((-2122.5 + fH.x1) / 2, fH.z1 - r / 2, Math.PI, fH.x1 - uH - a),
    i((fH.x0 + pH.x0) / 2, fH.z0 + r / 2, 0, pH.x0 - fH.x0),
    i((pH.x1 + fH.x1) / 2, fH.z0 + r / 2, 0, fH.x1 - pH.x1),
    yield);
  for (let [e, t] of [
    [fH.x1 - r / 2, Math.PI / 2],
    [fH.x0 + r / 2, -Math.PI / 2],
  ])
    (i(e, (fH.z0 + r + 733 - o) / 2, t, 725.5 - fH.z0 - r),
      i(e, (740.5 + fH.z1 - r) / 2, t, fH.z1 - r - 733 - o));
  yield;
  {
    let n = e.sub(uH, 0, fH.z1 - r / 2, Math.PI);
    (VH(e, t, 6.6, 3.4, !0), e.leave(n));
  }
  for (let [n, i] of [
    [fH.x1 - r / 2, Math.PI / 2],
    [fH.x0 + r / 2, -Math.PI / 2],
  ]) {
    let r = e.sub(n, 0, 733, i);
    (VH(e, t, 5, 2.8, !1), e.leave(r));
  }
  yield;
  {
    let n = e.sub(uH, 0, (pH.z0 + pH.z1) / 2, Math.PI);
    (Uwe(e, t, (pH.x1 - pH.x0) / 2, -(pH.z1 - pH.z0) / 2, (pH.z1 - pH.z0) / 2),
      e.leave(n));
  }
  yield;
  {
    e.push().col(SH).mat(0.85, 0, 0.08, 1);
    let n = hH,
      r = 2.6,
      i = [
        [n.x1, n.z0, n.x0, n.z0],
        [n.x0, n.z0, n.x0, fH.z0],
        [n.x1, fH.z0, n.x1, n.z0],
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
      e.box(n.x0 - 0.25, r, n.z0, n.x0 + 0.25, 2.85, fH.z0),
      e.box(n.x1 - 0.25, r, n.z0, n.x1 + 0.25, 2.85, fH.z0),
      e.pop(),
      e.col(TH).mat(0.95, 0, 0, 0));
    let a = e.sub(uH, 0, (mH.z0 + mH.z1) / 2, Math.PI);
    (Wwe(e, t, (mH.x1 - mH.x0) / 2, -(mH.z1 - mH.z0) / 2, (mH.z1 - mH.z0) / 2),
      e.leave(a));
  }
  yield;
  for (let [t, n, r] of [
    [fH.x0 + 13, fH.z0 + 26, 61],
    [fH.x0 + 13, fH.z0 + 41, 62],
  ])
    if (
      (e.push().mat(0.95),
      e.coarse || e.col(5326396).rod(t, 0, n, t + 0.3, 7, n, 0.6, 6, 0.4),
      HV(
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
        e.push().col(SH).mat(0.85, 0, 0, 0));
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
function* nTe(e, t) {
  if (
    (RH(e, vH.x, vH.z, 0, 8.2, 11, !0, Fwe),
    RH(e, gH.x, gH.z, Math.PI / 2, 9.1, 12, !0, wH),
    RH(e, _H.x, _H.z, 0, 6.4, 8.2, !0, Iwe),
    yield,
    !e.coarse)
  ) {
    let t = vH.x - 9,
      n = vH.z + 4;
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
  Kwe(e, t, yH.x, yH.z);
  let n = Math.atan2(-kH.ux, kH.uz);
  for (let [r, i] of [
    [1, jH],
    [-1, 22],
  ]) {
    let [a, o] = zwe(AH, r * 9.2),
      s = e.sub(
        a,
        t.plan.groundHeight(a, o) - t.site.gy,
        o,
        n + (r > 0 ? Math.PI / 2 : -Math.PI / 2),
      );
    (r > 0 ? qwe(e, t, i) : Jwe(e, t, i), e.leave(s));
  }
}
function* rTe(e, t) {
  let n = e.sub(-rH.x, 0, -rH.z, 0);
  (yield* Qwe(e, t),
    eTe(e, t),
    yield,
    yield* nTe(e, t),
    yield,
    yield* tTe(e, t),
    e.leave(n));
}
function iTe(e, t) {
  let n = e.sub(-rH.x, 0, -rH.z, 0);
  (e
    .col(13223615)
    .mat(0.95, 0, 0, 0)
    .flat(fH.x0 - 6, hH.z0 - 6, fH.x1 + 6, fH.z1 + 6, RV.PATH),
    e.col(7109749).mat(0.6, 0.2, 0, 0));
  let r = fH.d + 2;
  (e.box(fH.x0 - 1, 0, fH.z0 - 1, fH.x1 + 1, 5.6, fH.z0 - 1 + r),
    e.box(fH.x0 - 1, 0, fH.z1 + 1 - r, fH.x1 + 1, 5.6, fH.z1 + 1),
    e.box(fH.x0 - 1, 0, fH.z0 - 1 + r, fH.x0 - 1 + r, 5.6, fH.z1 + 1 - r),
    e.box(fH.x1 + 1 - r, 0, fH.z0 - 1 + r, fH.x1 + 1, 5.6, fH.z1 + 1 - r),
    e.extrudeX(
      [pH.z1 + 4, 5.4, pH.z0 - 2, 7.6, pH.z1 - 6, 13.2],
      pH.x0 - 2.6,
      pH.x1 + 2.6,
      !0,
      !0,
    ),
    e.extrudeX(
      [mH.z1 + 4, 5.6, mH.z0 - 2, 7.4, mH.z1 - 10, 14.5],
      mH.x0 - 2.2,
      mH.x1 + 2.2,
      !0,
      !0,
    ),
    e.col(TH).flat(uH - lH / 2, oH.z - lH / 2, oH.x, oH.z + lH / 2, RV.PATH),
    e.col(wH).box(gH.x - 1, 10.5, gH.z - 8.5, gH.x + 1, 12, gH.z + 8.5),
    e.leave(n));
}
var aTe = {
  id: `meiji-jingu`,
  lot: `meiji-jingu`,
  site: IH,
  name: { ja: `明治神宮`, zh: `明治神宮`, en: `Meiji Jingu` },
  near: 240,
  build: rTe,
  far: iTe,
  bounds: () => [nH.x0, nH.z0, nH.x1, 1031],
  farBoxes: () => [
    {
      x0: fH.x0,
      x1: fH.x1,
      z0: fH.z0,
      z1: fH.z1,
      y0: 9,
      y1: 15,
      rgb: [0.3, 0.4, 0.34],
    },
    {
      x0: pH.x0,
      x1: pH.x1,
      z0: pH.z0,
      z1: pH.z1,
      y0: 9,
      y1: 22,
      rgb: [0.3, 0.42, 0.36],
    },
  ],
  anchors: [
    {
      key: `meiji-otorii`,
      lx: gH.x + 30 - rH.x,
      lz: gH.z - rH.z,
      turn: Math.PI / 2,
      name: { zh: `明治神宮 大鳥居`, en: `Meiji Jingu Great Torii` },
    },
    {
      key: `meiji-ichi-torii`,
      lx: vH.x - rH.x,
      lz: vH.z + 14 - rH.z,
      turn: 0,
      name: { zh: `明治神宮 南參道入口`, en: `Meiji Jingu South Approach` },
    },
  ],
  blip: !0,
};
r.add({ 國立代代木競技場: `国立代々木競技場` });
var oTe = 33,
  JH = 21,
  sTe = JH,
  YH = 12,
  XH = 21,
  ZH = Math.PI / 4,
  QH = 27,
  cTe = 8,
  $H = 5.5,
  eU = 7765120,
  lTe = 12894132,
  uTe = 11841186,
  tU = (e) => QH - cTe * (1 - Math.min(1, (e / XH) ** 2)),
  dTe = (e) => tU(e) - 1.6 - 1.2 * Math.min(1, (e / XH) ** 4);
function nU(e) {
  let t = -e * YH,
    n = (n) => {
      let r = Math.PI * (-0.3 + 1.3 * n),
        i = 1 - 0.4 * Math.max(0, -r / (0.3 * Math.PI)),
        a = t - e * oTe * i * Math.cos(r),
        o = e * JH * i * Math.sin(r),
        s = Math.max(0, (0.38 - n) / 0.38),
        c = Math.max(0, (n - 0.88) / 0.12);
      return [a, $H + 7.5 * s ** 1.6 + 6 * c ** 2, o];
    };
  return {
    rim: n,
    spine: (e) => {
      let t = Math.max(-21, Math.min(XH, n(e)[0]));
      return [t, dTe(t), 0];
    },
  };
}
function rU(e, t, n) {
  let r = e.spine(t),
    i = e.rim(t),
    a = n,
    o =
      r[1] +
      (i[1] - r[1]) * a -
      (r[1] - i[1]) * 0.34 * a * (1 - a) * (1 - Math.max(0, (0.25 - t) / 0.25));
  return [r[0] + (i[0] - r[0]) * a, o, r[2] + (i[2] - r[2]) * a];
}
