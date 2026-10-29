// tokyo/assets/region-tokyo-A7LxHjud 262 — col
// Lines 97760-98043 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function yCe(e, t, n, r, i) {
  let a = i >>> 0 || 1,
    o = () => (a = (Math.imul(a, 1664525) + 1013904223) >>> 0) / 4294967296;
  e.push().col(7036754).mat(0.95);
  let s = r * 0.38;
  e.rod(t, 0, n, t, s, n, r * 0.034, 6, r * 0.026);
  let c = [];
  for (let i = 0; i < 3; i++) {
    let a = (i / 3) * CR * 2 + o() * 0.8,
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
        jR(
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
function bCe(e, t, n, r, i, a) {
  (e.push().col(11052188).mat(0.7, 0, 0.04, G),
    e.lathe(t, n, [r, 0, r, 0.45, r - 0.45, 0.45, r - 0.45, 0.3], e.seg(16)),
    e.col(4930860).mat(0.95),
    e.disc(t, 0.3, n, r - 0.45, e.seg(16)),
    e.pop(),
    yCe(e, t, n, i, a),
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
function* xCe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 12 : 3;
  if (
    (e.push().col(13814978).mat(0.85, 0, 0, 0),
    e.flat(-17, BR, 17, zR.z0, 0.03, n, r, r),
    e.flat(-17, zR.z0, zR.x0, 24, 0.03, n, r, r),
    e.flat(zR.x1, zR.z0, 17, 24, 0.03, n, r, r),
    e.pop(),
    e.push().col(10130570).mat(0.8, 0, 0, 0),
    e.lathe(RR.x, RR.z, [3.2, 0.03, 3.2, 0.055, 2, 0.055], e.seg(20)),
    e.pop(),
    vCe(e, t),
    yield,
    !e.coarse)
  ) {
    let t = 3.6;
    for (let n = 0; n < 12; n++) {
      let r = CR * 0.5 + ((n + 0.5) / 12) * CR,
        i = RR.x + Math.cos(r) * t,
        a = RR.z + Math.sin(r) * t;
      (e.push().col(10130570).mat(0.8),
        e.obox(i, 0.16, a, 0.5, 0.14, 0.52, r + CR / 2),
        e.col(5209406, 0.9 + (n % 3) * 0.08).mat(0.95),
        e.obox(i, 0.55, a, 0.42, 0.26, 0.5, r + CR / 2),
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
    ].forEach(([t, n, r, i], a) => bCe(e, t, n, r, i, 4100 + a * 37)),
    !e.coarse)
  ) {
    (FR(e, -7, -20.5, !1),
      FR(e, -8, 1, !1),
      FR(e, 6, -11, !0),
      FR(e, 6, 18, !0));
    for (let [t, n] of [
      [-4, -7],
      [6, -22.5],
      [-16, 7],
      [8.5, 1],
      [8.5, 22],
      [-16, -22.5],
    ])
      qC(e, t, 0.03, n, 4.6);
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
    for (let t = BR + 1.5; t < zR.z0 - 1; t += 2.6)
      e.cylY(-16.5, t, 0.03, 0.9, 0.09, 6, 0.08);
    e.pop();
  }
  yield;
  let i = UR,
    a = WR,
    o = KR - qR,
    s = KR + qR;
  (e.push().col(5593438).mat(0.55, 0.35, 0.05, G),
    e
      .panel(VR, i, VR, o, 0, GR)
      .panel(VR, s, VR, a, 0, GR)
      .panel(VR, o, VR, s, JR, GR),
    e.panel(HR, i, VR, i, 0, GR).panel(VR, a, HR, a, 0, GR),
    e.flat(VR, i, HR, a, GR),
    e.col(16777215).mat(0.2, 0.3, 0.3, G));
  let c = t.c(`glass`);
  for (let t = i + 1.2; t + 4.2 <= a - 1; t += 5.4)
    (t + 4.2 < o - 0.6 || t > s + 0.6) &&
      e.panel(VR - 0.02, t, VR - 0.02, t + 4.2, 0.03, 3.4, c);
  for (let t = VR + 1.2; t + 4.2 <= HR - 1.5; t += 5.4)
    (e.panel(t + 4.2, i - 0.02, t, i - 0.02, 0.03, 3.4, c),
      e.panel(t, a + 0.02, t + 4.2, a + 0.02, 0.03, 3.4, c));
  if (
    (e.col(16777215).mat(0.3, 0.2, 0.25, G),
    e.panel(VR - 0.02, i + 1, VR - 0.02, a - 1, 4.2, 6.2, c),
    e.col(15526628).mat(0.6),
    e.panel(VR, o, VR + YR, o, 0, JR).panel(VR + YR, s, VR, s, 0, JR),
    e.col(16447728).mat(0.4, 0, 0.25, 1),
    e.flat(VR, o, VR + YR, s, JR, e.white, 0, 0, !1),
    e.col(16777215).mat(0.25, 0.2, 0.3, G),
    e.panel(VR + YR, o, VR + YR, s, 0, JR, c),
    !e.coarse)
  )
    for (let t = 0; t < 7; t++) {
      let n = o + 0.5 + ((s - o - 1) * t) / 6;
      (e.col(4168274).mat(0.45, 0.2),
        e.obox(VR + YR - 0.75, 0.5, n, 0.6, 0.5, 0.12),
        e.col(15265e3).mat(0.4, 0.2),
        e.obox(VR + YR - 0.75, 1.03, n, 0.6, 0.03, 0.14));
    }
  if (
    (e.col(14211804).mat(0.4, 0.4, 0.05, G),
    e.box(VR - 3.2, 3.6, KR - 7.5, VR, 3.85, KR + 7.5),
    e.col(16184036).mat(0.4, 0, 0.45, 1),
    e.flat(VR - 3.1, KR - 7.4, VR, KR + 7.4, 3.59, e.white, 0, 0, !1),
    e.col(16777215).mat(0.35, 0, 0.45, G),
    e.panel(
      VR - 0.08,
      KR - 3.5,
      VR - 0.08,
      KR + 3.5,
      4.3,
      6.05,
      ER(t, `hachiExit`),
    ),
    e.pop(),
    e.solid(VR, i, HR, o, 0, GR),
    e.solid(VR, s, HR, a, 0, GR),
    e.solid(VR + YR - 1.4, o, HR, s, 0, GR),
    !e.coarse)
  )
    for (let t of [KR - 7.2, KR + 7.2])
      (e.push().col(12106944).mat(0.4, 0.5),
        e.cylY(VR - 3, t, 0.03, 3.6, 0.1, 6, 0.1, !1),
        e.pop(),
        e.pole(VR - 3, t, 0.12, 0, 3.6));
}
var SCe = {
    id: `hachiko-square`,
    site: TR(LR.x, LR.z),
    name: { ja: `ハチ公前広場`, zh: `忠犬八公廣場`, en: `Hachiko Square` },
    near: 220,
    build: xCe,
    far() {},
    farBoxes: (e, t) => [
      {
        x0: t.x + VR,
        x1: t.x + HR,
        z0: t.z + UR,
        z1: t.z + WR,
        y0: t.gy,
        y1: t.gy + GR,
        rgb: [0.33, 0.35, 0.37],
      },
    ],
    bounds: (e, t) => [t.x - 17, t.z - 24, t.x + HR, t.z + 24],
    blip: !0,
    anchors: [
      {
        key: `hachiko`,
        lx: RR.x + 4.5,
        lz: RR.z + 1.5,
        turn: 0,
        name: { zh: `忠犬八公像`, en: `Hachiko statue` },
      },
    ],
  },
  ZR = { x: -1805, z: 1283.5 },
  QR = (e, t) => [e - ZR.x, t - ZR.z],
  $R = [
    ...QR(-1800, 1268),
    ...QR(-1820, 1268),
    ...QR(-1820, 1289),
    ...QR(-1804, 1305),
    ...QR(-1800, 1305),
  ],
  ez = 41.7,
  tz = QR(-1820, 1289),
  nz = QR(-1804, 1305),
  rz = { x: -1891.5, z: 1290.5, facing: -CR / 2 },
  CCe = (e, t, n, r) => ({
    x0: rz.x + t,
    x1: rz.x + r,
    z0: rz.z - n,
    z1: rz.z - e,
  }),
  iz = {
    x0: -1798 - ZR.x,
    z0: 1270 - ZR.z,
    x1: -1790 - ZR.x,
    z1: 1304.5 - ZR.z,
    top: 29.4,
  },
  az = {
    x0: -1820 - ZR.x,
    z0: 1262.5 - ZR.z,
    x1: -1800 - ZR.x,
    z1: 1266.5 - ZR.z,
    top: 22,
  };
function wCe(e, t, n, r) {
  let [i, a] = tz,
    [o, s] = nz,
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
      let [S, C] = PR(i, a, o, s, d + f * c, r),
        [w, T] = PR(i, a, o, s, d + f * (c + 1), r);
      e.panel(S, C, w, T, t + p * n + 0.06, t + p * (n + 1) - 0.06);
    }
}
