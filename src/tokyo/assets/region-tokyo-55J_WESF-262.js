// tokyo/assets/region-tokyo-55J_WESF 262 — col
// Lines 97669-97952 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function oCe(e, t, n, r, i) {
  let a = i >>> 0 || 1,
    o = () => (a = (Math.imul(a, 1664525) + 1013904223) >>> 0) / 4294967296;
  e.push().col(7036754).mat(0.95);
  let s = r * 0.38;
  e.rod(t, 0, n, t, s, n, r * 0.034, 6, r * 0.026);
  let c = [];
  for (let i = 0; i < 3; i++) {
    let a = (i / 3) * xR * 2 + o() * 0.8,
      l = t + Math.cos(a) * r * 0.2,
      u = n + Math.sin(a) * r * 0.2,
      d = r * (0.62 + o() * 0.08);
    (e.rod(t, s, n, l, d, u, r * 0.02, 5, r * 0.012), c.push([l, d, u]));
  }
  c.push([t, r * 0.78, n]);
  let l = e.coarse ? 1 : 2;
  for (let [t, n, i] of c)
    for (let a = 0; a < l; a++) {
      let s = (o() - 0.5) * r * 0.14,
        c = (o() - 0.5) * r * 0.14;
      (e.col(4880952, 0.82 + o() * 0.3),
        kR(
          e,
          t + s,
          n + a * r * 0.06,
          i + c,
          r * (0.15 + o() * 0.05),
          r * (0.11 + o() * 0.04),
          7,
          4,
        ));
    }
  e.pop();
}
function sCe(e, t, n, r, i, a) {
  (e.push().col(11052188).mat(0.7, 0, 0.04, G),
    e.lathe(t, n, [r, 0, r, 0.45, r - 0.45, 0.45, r - 0.45, 0.3], e.seg(16)),
    e.col(4930860).mat(0.95),
    e.disc(t, 0.3, n, r - 0.45, e.seg(16)),
    e.pop(),
    oCe(e, t, n, i, a),
    e.solid(
      t - r * 0.7,
      n - r * 0.7,
      t + r * 0.7,
      n + r * 0.7,
      0,
      0.45,
      `planter`,
    ),
    e.pole(t, n, 0.35, 0, 4));
}
function* cCe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 12 : 3;
  if (
    (e.push().col(13814978).mat(0.85, 0, 0, 0),
    e.flat(-17, RR, 17, LR.z0, 0.03, n, r, r),
    e.flat(-17, LR.z0, LR.x0, 24, 0.03, n, r, r),
    e.flat(LR.x1, LR.z0, 17, 24, 0.03, n, r, r),
    e.pop(),
    e.push().col(10130570).mat(0.8, 0, 0, 0),
    e.lathe(IR.x, IR.z, [3.2, 0.03, 3.2, 0.055, 2, 0.055], e.seg(20)),
    e.pop(),
    aCe(e, t),
    yield,
    !e.coarse)
  ) {
    let t = 3.6;
    for (let n = 0; n < 12; n++) {
      let r = xR * 0.5 + ((n + 0.5) / 12) * xR,
        i = IR.x + Math.cos(r) * t,
        a = IR.z + Math.sin(r) * t;
      (e.push().col(10130570).mat(0.8),
        e.obox(i, 0.16, a, 0.5, 0.14, 0.52, r + xR / 2),
        e.col(5209406, 0.9 + (n % 3) * 0.08).mat(0.95),
        e.obox(i, 0.55, a, 0.42, 0.26, 0.5, r + xR / 2),
        e.pop());
    }
  }
  if (
    ([
      [-14, -19, 1.8, 12],
      [-13.5, 1, 2, 13],
      [0.5, -19.5, 1.8, 12],
      [1, -3, 2.2, 14],
      [8, 9, 1.8, 12],
      [0.5, 19, 1.8, 12],
    ].forEach(([t, n, r, i], a) => sCe(e, t, n, r, i, 4100 + a * 37)),
    !e.coarse)
  ) {
    (NR(e, -7, -20.5, !1),
      NR(e, -8, 1, !1),
      NR(e, 6, -11, !0),
      NR(e, 6, 18, !0));
    for (let [t, n] of [
      [-4, -7],
      [6, -22.5],
      [-16, 7],
      [8.5, 1],
      [8.5, 22],
      [-16, -22.5],
    ])
      WC(e, t, 0.03, n, 4.6);
    for (let [t, n] of [
      [-4, -7],
      [6, -22.5],
      [-16, 7],
      [8.5, 1],
      [8.5, 22],
      [-16, -22.5],
    ])
      e.pole(t, n, 0.12, 0, 5);
    e.push().col(5593180).mat(0.5, 0.5);
    for (let t = RR + 1.5; t < LR.z0 - 1; t += 2.6)
      e.cylY(-16.5, t, 0.03, 0.9, 0.09, 6, 0.08);
    e.pop();
  }
  yield;
  let i = VR,
    a = HR,
    o = WR - GR,
    s = WR + GR;
  (e.push().col(5593438).mat(0.55, 0.35, 0.05, G),
    e
      .panel(zR, i, zR, o, 0, UR)
      .panel(zR, s, zR, a, 0, UR)
      .panel(zR, o, zR, s, KR, UR),
    e.panel(BR, i, zR, i, 0, UR).panel(zR, a, BR, a, 0, UR),
    e.flat(zR, i, BR, a, UR),
    e.col(16777215).mat(0.2, 0.3, 0.3, G));
  let c = t.c(`glass`);
  for (let t = i + 1.2; t + 4.2 <= a - 1; t += 5.4)
    (t + 4.2 < o - 0.6 || t > s + 0.6) &&
      e.panel(zR - 0.02, t, zR - 0.02, t + 4.2, 0.03, 3.4, c);
  for (let t = zR + 1.2; t + 4.2 <= BR - 1.5; t += 5.4)
    (e.panel(t + 4.2, i - 0.02, t, i - 0.02, 0.03, 3.4, c),
      e.panel(t, a + 0.02, t + 4.2, a + 0.02, 0.03, 3.4, c));
  if (
    (e.col(16777215).mat(0.3, 0.2, 0.25, G),
    e.panel(zR - 0.02, i + 1, zR - 0.02, a - 1, 4.2, 6.2, c),
    e.col(15526628).mat(0.6),
    e.panel(zR, o, zR + qR, o, 0, KR).panel(zR + qR, s, zR, s, 0, KR),
    e.col(16447728).mat(0.4, 0, 0.25, 1),
    e.flat(zR, o, zR + qR, s, KR, e.white, 0, 0, !1),
    e.col(16777215).mat(0.25, 0.2, 0.3, G),
    e.panel(zR + qR, o, zR + qR, s, 0, KR, c),
    !e.coarse)
  )
    for (let t = 0; t < 7; t++) {
      let n = o + 0.5 + ((s - o - 1) * t) / 6;
      (e.col(4168274).mat(0.45, 0.2),
        e.obox(zR + qR - 0.75, 0.5, n, 0.6, 0.5, 0.12),
        e.col(15265e3).mat(0.4, 0.2),
        e.obox(zR + qR - 0.75, 1.03, n, 0.6, 0.03, 0.14));
    }
  if (
    (e.col(14211804).mat(0.4, 0.4, 0.05, G),
    e.box(zR - 3.2, 3.6, WR - 7.5, zR, 3.85, WR + 7.5),
    e.col(16184036).mat(0.4, 0, 0.45, 1),
    e.flat(zR - 3.1, WR - 7.4, zR, WR + 7.4, 3.59, e.white, 0, 0, !1),
    e.col(16777215).mat(0.35, 0, 0.45, G),
    e.panel(
      zR - 0.08,
      WR - 3.5,
      zR - 0.08,
      WR + 3.5,
      4.3,
      6.05,
      wR(t, `hachiExit`),
    ),
    e.pop(),
    e.solid(zR, i, BR, o, 0, UR),
    e.solid(zR, s, BR, a, 0, UR),
    e.solid(zR + qR - 1.4, o, BR, s, 0, UR),
    !e.coarse)
  )
    for (let t of [WR - 7.2, WR + 7.2])
      (e.push().col(12106944).mat(0.4, 0.5),
        e.cylY(zR - 3, t, 0.03, 3.6, 0.1, 6, 0.1, !1),
        e.pop(),
        e.pole(zR - 3, t, 0.12, 0, 3.6));
}
var lCe = {
    id: `hachiko-square`,
    site: CR(FR.x, FR.z),
    name: { ja: `ハチ公前広場`, zh: `忠犬八公廣場`, en: `Hachiko Square` },
    near: 220,
    build: cCe,
    far() {},
    farBoxes: (e, t) => [
      {
        x0: t.x + zR,
        x1: t.x + BR,
        z0: t.z + VR,
        z1: t.z + HR,
        y0: t.gy,
        y1: t.gy + UR,
        rgb: [0.33, 0.35, 0.37],
      },
    ],
    bounds: (e, t) => [t.x - 17, t.z - 24, t.x + BR, t.z + 24],
    blip: !0,
    anchors: [
      {
        key: `hachiko`,
        lx: IR.x + 4.5,
        lz: IR.z + 1.5,
        turn: 0,
        name: { zh: `忠犬八公像`, en: `Hachiko statue` },
      },
    ],
  },
  YR = { x: -1805, z: 1283.5 },
  XR = (e, t) => [e - YR.x, t - YR.z],
  ZR = [
    ...XR(-1800, 1268),
    ...XR(-1820, 1268),
    ...XR(-1820, 1289),
    ...XR(-1804, 1305),
    ...XR(-1800, 1305),
  ],
  QR = 41.7,
  $R = XR(-1820, 1289),
  ez = XR(-1804, 1305),
  tz = { x: -1891.5, z: 1290.5, facing: -xR / 2 },
  uCe = (e, t, n, r) => ({
    x0: tz.x + t,
    x1: tz.x + r,
    z0: tz.z - n,
    z1: tz.z - e,
  }),
  nz = {
    x0: -1798 - YR.x,
    z0: 1270 - YR.z,
    x1: -1790 - YR.x,
    z1: 1304.5 - YR.z,
    top: 29.4,
  },
  rz = {
    x0: -1820 - YR.x,
    z0: 1262.5 - YR.z,
    x1: -1800 - YR.x,
    z1: 1266.5 - YR.z,
    top: 22,
  };
function dCe(e, t, n, r) {
  let [i, a] = $R,
    [o, s] = ez,
    c = Math.hypot(o - i, s - a),
    l = e.coarse ? 8 : 16,
    u = e.coarse ? 10 : 20,
    d = (c - 19) / 2 / c,
    f = (1 - d - d) / l,
    p = (n - t) / u,
    m = 7,
    h = () => (m = (Math.imul(m, 1664525) + 1013904223) >>> 0) / 4294967296;
  for (let n = 0; n < u; n++)
    for (let c = 0; c < l; c++) {
      let m = (c + 0.5) / l,
        g = (n + 0.5) / u,
        _ =
          Math.max(
            0,
            1 - Math.abs((((m - 0.5) * 3.2 + (1 - g) * 0.6) % 1) - 0.5) * 6,
          ) *
          (1 - g),
        v =
          Math.max(0, 1 - Math.hypot(m - 0.22, g - 0.2) * 3.5) +
          Math.max(0, 1 - Math.hypot(m - 0.8, g - 0.62) * 3.2),
        y = Math.min(255, 30 + 60 * g + v * 200 + _ * 120 + h() * 30),
        b = Math.min(255, 40 + 70 * (1 - g) + _ * 170 + v * 60 + h() * 20),
        x = Math.min(255, 140 + 100 * (1 - g) + _ * 80 + h() * 20);
      e.col(((y & 255) << 16) | ((b & 255) << 8) | (x & 255)).mat(
        0.35,
        0,
        0.32,
        0,
      );
      let [S, C] = MR(i, a, o, s, d + f * c, r),
        [w, T] = MR(i, a, o, s, d + f * (c + 1), r);
      e.panel(S, C, w, T, t + p * n + 0.06, t + p * (n + 1) - 0.06);
    }
}
