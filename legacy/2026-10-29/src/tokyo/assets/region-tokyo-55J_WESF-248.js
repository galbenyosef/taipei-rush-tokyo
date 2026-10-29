// tokyo/assets/region-tokyo-55J_WESF 248 — math
// Lines 93375-93716 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* sSe(e, t) {
  let n = t.season ?? `green`,
    r = e.sub(-SI.x, 0, -SI.z, 0);
  (yield* aSe(e, t, n), yield);
  {
    let n = e.sub(OI.x, 0, OI.z, -Math.PI / 2);
    (yield* eSe(e, t), e.leave(n));
  }
  yield;
  {
    let n = e.sub(-688.5, 0, -955, 0);
    (tSe(e, t), e.leave(n), nSe(e, -688.5, -962));
  }
  yield;
  let i = (n, r, i, a) => {
      let o = e.sub(n, 0, r, i);
      (Zxe(e, t, a), e.leave(o));
    },
    a = G | 32;
  (i(-685, -981, 0, {
    L: 26,
    D: 14,
    floors: 4,
    arcade: { depth: 3.6, bays: 7, passage: 3 },
    pier: 3.6,
    e0: 0.22,
    e1: 0.12,
    flags: a,
  }),
    i(-654, -1020, Math.PI, {
      L: 42,
      D: 20,
      floors: 4,
      arcade: { depth: 3.6, bays: 11 },
      pier: 3.8,
      e0: 0.22,
      e1: 0.12,
      flags: a,
    }),
    yield,
    i(-692, -1020, Math.PI, {
      L: 15,
      D: 14,
      floors: 2,
      portal: !0,
      pier: 3.75,
      e0: 0.16,
      e1: 0.08,
      flags: a,
    }),
    i(-677, -1060, Math.PI, {
      L: 46,
      D: 30,
      floors: 4,
      portal: !0,
      pier: 4.6,
      e0: 0.12,
      e1: 0.06,
      flags: a,
      bg: !0,
    }),
    i(-595, -1060, Math.PI, {
      L: 34,
      D: 32,
      floors: 5,
      portal: !0,
      pier: 4.5,
      e0: 0.1,
      e1: 0.05,
      flags: a,
      bg: !0,
    }),
    yield,
    i(-672, -1112, Math.PI, {
      L: 54,
      D: 26,
      floors: 4,
      portal: !0,
      pier: 4.5,
      e0: 0.08,
      e1: 0.04,
      flags: a,
      bg: !0,
    }),
    yield,
    i(-594, -885, -Math.PI / 2, {
      L: 38,
      D: 22,
      floors: 4,
      portal: !0,
      pier: 3.8,
      e0: 0.14,
      e1: 0.07,
      flags: a,
    }),
    i(-664, -868, 0, {
      L: 50,
      D: 18,
      floors: 3,
      portal: !0,
      pier: 5,
      e0: 0.08,
      e1: 0.04,
      flags: a,
      bg: !0,
    }),
    yield,
    rL(e, t, -556, -1092, -520, -1060, 66),
    rL(e, t, -556, -1046, -520, -1014, 56),
    rL(e, t, -556, -990, -512, -948, 30),
    yield);
  {
    let n = e.sub(-706.4499999999999, 0, EI, -Math.PI / 2);
    (rSe(e, t), e.leave(n));
  }
  yield;
  {
    let t = e.sub(-706.4499999999999, 0, DI, -Math.PI / 2);
    (iSe(e), e.leave(t));
  }
  (yield,
    YI(e, t, -1166.5, -1008),
    YI(e, t, -992, -893),
    YI(e, t, -867, -847.5),
    XI(e, -706.5, -1167, -627, -1166),
    XI(e, -617, -1167, -504.5, -1166),
    XI(e, -706.5, -848, -627, -847),
    XI(e, -617, -848, -504.5, -847),
    XI(e, -505.5, -1166, -504.5, -1105),
    XI(e, -505.5, -1095, -504.5, -1004),
    XI(e, -505.5, -996, -504.5, -944),
    XI(e, -505.5, -938, -504.5, -848),
    yield);
  let o = new ie(7232);
  for (let t = -699; t < -636; t += 10.4) {
    for (let r of [-1007.8, -992.2])
      ZI(e, t + o.range(-0.3, 0.3), r, o.range(16, 19), n, o.int(1, 1e6));
    ZI(e, t + 5.2, -1015.6, o.range(15, 18.5), n, o.int(1, 1e6));
    let r = o.range(15, 18.5),
      i = o.int(1, 1e6);
    t + 5.2 < -674 && ZI(e, t + 5.2, -984.6, r, n, i);
  }
  yield;
  let s = [
    [-698, -896],
    [-680, -890],
    [-640, -890],
    [-610, -872],
    [-575, -1040],
    [-575, -930],
    [-640, -1150],
    [-640, -1088],
    [-596, -1124],
    [-584, -1146],
    [-548, -1104],
    [-530, -862],
    [-690, -1046],
  ];
  for (let t = 0; t < s.length; t++) {
    let [r, i] = s[t],
      a = o.range(13, 18),
      c = o.int(1, 1e6);
    t % 3 == 1 ? QI(e, r, i, a, n, BI, c) : ZI(e, r, i, a, n, c);
  }
  for (let t of [-1160, -1148, -1124, -1092, -1074, -1046, -918, -905, -858]) {
    let r = o.range(12, 16),
      i = o.int(1, 1e6);
    QI(e, -703.6, t, r, n, t > -930 ? null : BI, i);
  }
  if ((yield, yield* oSe(e, t, n), yield, !e.coarse))
    for (let t = -696; t < -636; t += 20)
      (WC(e, t, MI, -1010.8, 4.4),
        WC(e, t + 7.5, MI, -989.2, 4.4),
        e.pole(t, -1010.8, 0.15, 0, 4),
        e.pole(t + 7.5, -989.2, 0.15, 0, 4));
  if (!e.coarse)
    for (let [t, n] of [
      [-631, -1029],
      [-631, -971],
      [-617, -1029],
      [-617, -971],
      [-627.5, -945],
      [-627.5, -915],
      [-660, -886],
      [-690, -886],
      [-571.5, -1080],
      [-571.5, -1030],
      [-571.5, -930],
      [-571.5, -880],
      [-690, -969],
      [-674, -969],
      [-669.5, -960],
      [-646, -937.5],
      [-646, -982.5],
    ])
      (WC(e, t, 0, n, 4.4), e.pole(t, n, 0.15, 0, 4));
  if (!e.coarse) {
    e.col(16115392).mat(0.4, 0, 0.8, 1);
    for (let t of [-1022, -1012, -988, -978])
      e.box(-619.4, MI, t - 0.3, -618.8, 0.43, t + 0.3);
    e.col(16777215).mat(0.85, 0, 0, 0).emis(0, 0);
  }
  let c = new ie(45511);
  (eL(e, -704, -966, 10, 1, c),
    eL(e, -652, -1043.5, 10, -1, c),
    eL(e, -700, -872, 7, -1, c),
    e.leave(r));
}
function cSe(e, t) {
  let n = t.season ?? `green`,
    r = e.sub(-SI.x, 0, -SI.z, 0),
    i = t.c(`todaiBay`),
    a = t.c(`office`);
  e.col(16777215).emis(0.14, G);
  let o = (t, n, r, a, o, s = i, c = 10.8) =>
    e.box(t, 0, n, r, o, a, s, c, o / Math.max(1, Math.round(o / 9.6)));
  (o(-614, -1007, -597, -993, 38, i, 7),
    o(-611.5, -1024, -597, -976, 20.5),
    o(-597, -1020, -577, -980, 24.6),
    o(-705, -955, -672, -927, 24),
    o(-698, -981, -672, -967, 20),
    o(-675, -1040, -633, -1020, 20),
    o(-700, -1090, -578, -1060, 22, i, 14.4),
    o(-699, -1138, -645, -1112, 20, i, 14.4),
    o(-689, -886, -572, -868, 16, i, 14.4),
    e.col(15986922).emis(0.18, G),
    o(-556, -1092, -520, -1060, 66, a, 14.4),
    o(-556, -1046, -520, -1014, 56, a, 14.4),
    o(-556, -990, -512, -948, 30, a, 14.4),
    e.emis(0, 0),
    n !== `bare` &&
      (e.col(zI[n]).mat(0.9, 0, 0, 0),
      e.box(-702, 4, -1012, -634, 17, -1004),
      e.box(-702, 4, -996, -634, 17, -988)),
    e
      .col(VI)
      .mat(0.9, 0, 0, 0)
      .box(-670, 3, -986, -622, 14, -973)
      .box(-670, 3, -947, -622, 14, -904),
    e.col(16777215).mat(0.85, 0, 0, 0),
    e.leave(r));
}
function lSe(e) {
  return { x: SI.x, z: SI.z, gy: e.groundHeight(SI.x, SI.z), facing: 0 };
}
function uSe(e, t) {
  let n = t.gy,
    r = [0.3, 0.16, 0.09],
    i = [0.72, 0.7, 0.66];
  return [
    {
      x0: -614,
      x1: -597,
      z0: -1007,
      z1: -993,
      y0: n,
      y1: n + 38,
      rgb: r,
      lit: !1,
    },
    {
      x0: -611.5,
      x1: -577,
      z0: -1024,
      z1: -976,
      y0: n,
      y1: n + 22,
      rgb: r,
      lit: !0,
    },
    {
      x0: -705,
      x1: -672,
      z0: -955,
      z1: -927,
      y0: n,
      y1: n + 24,
      rgb: r,
      lit: !0,
    },
    {
      x0: -698,
      x1: -633,
      z0: -1040,
      z1: -967,
      y0: n,
      y1: n + 18,
      rgb: r,
      lit: !0,
    },
    {
      x0: -700,
      x1: -578,
      z0: -1092,
      z1: -1060,
      y0: n,
      y1: n + 22,
      rgb: r,
      lit: !0,
    },
    {
      x0: -699,
      x1: -645,
      z0: -1138,
      z1: -1112,
      y0: n,
      y1: n + 20,
      rgb: r,
      lit: !0,
    },
    {
      x0: -556,
      x1: -520,
      z0: -1092,
      z1: -1060,
      y0: n,
      y1: n + 66,
      rgb: i,
      lit: !0,
    },
    {
      x0: -556,
      x1: -520,
      z0: -1046,
      z1: -1014,
      y0: n,
      y1: n + 56,
      rgb: i,
      lit: !0,
    },
    {
      x0: -556,
      x1: -512,
      z0: -990,
      z1: -948,
      y0: n,
      y1: n + 30,
      rgb: i,
      lit: !0,
    },
  ];
}
