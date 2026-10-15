// tokyo/assets/region-tokyo-BcM3fReU 230 — style
// Lines 93636-93984 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function IZ(e) {
  let t = { ...Mt, variant: 5 },
    n = [0, 0.3, 0.2],
    r = [0, 0.74, 0.28];
  (e.style(FZ(5)), e.cbox(0, 0.3, 0.22, 0.3, 0.14, 0.26, 0.05, !1));
  for (let t of [-1, 1])
    (Ct(e, [t * 0.1, 0.31, 0.14], [t * 0.14, 0.44, -0.22], 0.075, 0.06, 6, !0),
      Ct(
        e,
        [t * 0.14, 0.44, -0.22],
        [t * 0.15, 0.2, -0.66],
        0.056,
        0.045,
        6,
        !0,
      ));
  e.style({ color: 1776413, rough: 0.8, variant: 5 });
  for (let t of [-1, 1])
    e.cbox(t * 0.15, 0.16, -0.72, 0.1, 0.09, 0.22, 0.03, !1);
  (e.style(FZ(5)),
    e.extrude(
      [
        [n[2] + 0.12, n[1]],
        [n[2] - 0.12, n[1]],
        [r[2] - 0.12, r[1] - 0.02],
        [r[2] + 0.1, r[1] + 0.02],
      ],
      (e, t) => (t > 0.6 ? 0.2 : 0.17),
      0.045,
    ));
  for (let t of [-1, 1])
    (Ct(
      e,
      [t * 0.2, r[1] - 0.06, r[2]],
      [t * 0.21, 0.56, 0.02],
      0.055,
      0.05,
      6,
      !0,
    ),
      Ct(
        e,
        [t * 0.21, 0.56, 0.02],
        [t * 0.15, 0.53, -0.24],
        0.048,
        0.04,
        6,
        !0,
      ));
  e.style(t);
  for (let t of [-1, 1])
    e.cbox(t * 0.15, 0.53, -0.27, 0.07, 0.07, 0.08, 0.02, !1);
  let i = r[1] + 0.21,
    a = r[2] + 0.01;
  (e.box(0, i - 0.11, a, 0.08, 0.08, 0.08, ``),
    e.cbox(0, i + 0.02, a, 0.16, 0.2, 0.19, 0.05),
    e.style({ color: 1381653, rough: 0.6, variant: 5 }));
  for (let t of [-1, 1])
    e.box(t * 0.036, i + 0.045, a - 0.097, 0.026, 0.014, 0.006, ``);
  for (let t of [1, 2]) {
    (e.style(FZ(t)), e.cbox(0, i + 0.05, a + 0.035, 0.2, 0.25, 0.19, 0.06));
    for (let n of [-1, 1])
      t === 1
        ? (e.cylZ(n * 0.085, i + 0.17, a + 0.03, 0.05, 0.04, 8),
          e.style({ color: 15918808, rough: 0.9, variant: t }),
          e.discZ(n * 0.085, i + 0.17, a + 0.009, 0.028, -1, 8),
          e.style(FZ(t)))
        : (e.tri(
            [n * 0.03, i + 0.15, a + 0.02],
            [n * 0.1, i + 0.15, a + 0.02],
            [n * 0.075, i + 0.27, a + 0.03],
          ),
          e.tri(
            [n * 0.1, i + 0.15, a + 0.06],
            [n * 0.03, i + 0.15, a + 0.06],
            [n * 0.075, i + 0.27, a + 0.03],
          ));
  }
  (e.style({ color: 1118740, rough: 0.5, variant: 3 }),
    e.box(0, i + 0.045, a - 0.1, 0.17, 0.045, 0.012, ``),
    e.style({ color: 16777215, paint: 4, rough: 0.8, variant: 3 }),
    e.quad(
      [-0.2, r[1], r[2] + 0.1],
      [0.2, r[1], r[2] + 0.1],
      [0.26, 0.32, 0.56],
      [-0.26, 0.32, 0.56],
      [0, 0.3, 1],
    ),
    e.quad(
      [0.2, r[1], r[2] + 0.1],
      [-0.2, r[1], r[2] + 0.1],
      [-0.26, 0.32, 0.56],
      [0.26, 0.32, 0.56],
      [0, -0.3, -1],
    ),
    e.style({ color: 15250730, rough: 0.35, metal: 0.6, variant: 3 }));
  let o = r[2] - 0.135,
    s = r[1] - 0.16;
  (e.quad(
    [-0.07, s + 0.06, o],
    [0, s, o - 0.004],
    [0, s + 0.04, o - 0.004],
    [-0.07, s + 0.1, o],
    [0, 0, -1],
  ),
    e.quad(
      [0, s, o - 0.004],
      [0.07, s + 0.06, o],
      [0.07, s + 0.1, o],
      [0, s + 0.04, o - 0.004],
      [0, 0, -1],
    ),
    e.box(0, n[1] + 0.06, n[2] - 0.02, 0.3, 0.04, 0.27, `b`),
    e.style({ color: 1909811, rough: 0.8, variant: 4 }),
    e.extrude(
      [
        [n[2] + 0.135, n[1] - 0.01],
        [n[2] - 0.135, n[1] - 0.01],
        [r[2] - 0.135, r[1] - 0.01],
        [r[2] + 0.115, r[1] + 0.03],
      ],
      (e, t) => (t > 0.6 ? 0.215 : 0.185),
      0.045,
    ));
  for (let t of [-1, 1])
    (Ct(
      e,
      [t * 0.2, r[1] - 0.06, r[2]],
      [t * 0.21, 0.56, 0.02],
      0.064,
      0.058,
      6,
      !0,
    ),
      Ct(
        e,
        [t * 0.21, 0.56, 0.02],
        [t * 0.15, 0.53, -0.21],
        0.056,
        0.048,
        6,
        !0,
      ),
      Ct(
        e,
        [t * 0.1, 0.31, 0.14],
        [t * 0.14, 0.44, -0.22],
        0.084,
        0.068,
        6,
        !0,
      ),
      Ct(
        e,
        [t * 0.14, 0.44, -0.22],
        [t * 0.15, 0.21, -0.64],
        0.064,
        0.052,
        6,
        !0,
      ));
  e.style({ color: 15856110, rough: 0.7, variant: 4 });
  let c = r[2] - 0.148;
  (e.quad(
    [-0.06, r[1] - 0.02, c],
    [0.06, r[1] - 0.02, c],
    [0, r[1] - 0.2, c + 0.012],
    [0, r[1] - 0.2, c + 0.012],
    [0, 0.2, -1],
  ),
    e.style({ color: 16777215, paint: 1, rough: 0.5, variant: 4 }),
    e.quad(
      [-0.018, r[1] - 0.03, c - 0.004],
      [0.018, r[1] - 0.03, c - 0.004],
      [0.012, r[1] - 0.19, c + 0.008],
      [-0.012, r[1] - 0.19, c + 0.008],
      [0, 0.2, -1],
    ),
    e.style({ color: 1709072, rough: 0.6, variant: 4 }),
    e.cbox(0, i + 0.12, a + 0.02, 0.17, 0.05, 0.19, 0.03));
}
function LZ(e) {
  let t = dt.kart;
  (e.style(MZ), e.box(0, 0.07, -0.05, 0.62, 0.03, 1.5, ``));
  for (let t of [-1, 1])
    (Ct(e, [t * 0.32, 0.09, -0.82], [t * 0.34, 0.09, 0.72], 0.018, 0.018, 4),
      Ct(e, [t * 0.34, 0.09, 0.72], [t * 0.2, 0.12, 0.86], 0.018, 0.018, 4),
      Ct(e, [t * 0.32, 0.09, -0.82], [t * 0.18, 0.1, -0.92], 0.018, 0.018, 4));
  (e.style({ color: 9277589, rough: 0.35, metal: 0.8 }),
    e.cylX(0, t.wheelR, t.rearAxle, 0.022, t.track * 2 - 0.1, 8, !1));
  for (let n of [-1, 1])
    Ct(
      e,
      [n * 0.3, t.wheelR, t.frontAxle],
      [n * (t.track - 0.06), t.wheelR, t.frontAxle],
      0.02,
      0.02,
      6,
    );
  (e.style({ ...sn, rough: 0.3, metal: 0.25 }),
    e.extrude(
      [
        [-1, 0.1],
        [-0.46, 0.1],
        [-0.46, 0.38],
        [-0.6, 0.39],
        [-0.92, 0.3],
        [-1, 0.2],
      ],
      (e, t) => 0.39 - (t - 0.1) * 0.25 - Math.max(0, -0.7 - e) * 0.3,
      0.035,
      [0],
    ));
  for (let t of [-1, 1])
    (e.style({ ...sn, rough: 0.3, metal: 0.25 }),
      e.cbox(t * 0.5, 0.21, -0.06, 0.16, 0.16, 0.74, 0.04, !1),
      e.style(NZ),
      e.box(t * 0.5, 0.1, -0.06, 0.17, 0.06, 0.76, `b`));
  (e.style(NZ),
    e.cbox(0, 0.15, -1.02, 0.82, 0.1, 0.07, 0.03, !1),
    e.cbox(0, 0.2, 0.93, 1.3, 0.2, 0.14, 0.05, !1),
    e.style(PZ),
    e.cbox(0, 0.2, 0.18, 0.42, 0.12, 0.4, 0.05, !1),
    e.extrude(
      [
        [0.3, 0.2],
        [0.44, 0.2],
        [0.5, 0.78],
        [0.4, 0.8],
        [0.34, 0.3],
      ],
      () => 0.21,
      0.04,
      [],
    ));
  for (let t of [-1, 1]) e.box(t * 0.22, 0.32, 0.22, 0.04, 0.22, 0.38, ``);
  (e.style({ color: 3816512, rough: 0.4, metal: 0.6 }),
    Ct(e, [0, 0.33, -0.6], [0, 0.5, -0.29], 0.016, 0.016, 6));
  let n = [0, 0.51, -0.27];
  e.style({ color: 1381655, rough: 0.6 });
  for (let t = 0; t < 8; t++) {
    let r = (t / 8) * Math.PI * 2,
      i = ((t + 1) / 8) * Math.PI * 2,
      a = 0.15,
      o = 0.55,
      s = (e) => [
        n[0] + Math.cos(e) * a,
        n[1] + Math.sin(e) * a * Math.cos(o),
        n[2] - Math.sin(e) * a * Math.sin(o) * 0.6,
      ];
    Ct(e, s(r), s(i), 0.016, 0.016, 3);
  }
  (e.style({ ...sn, rough: 0.4 }),
    e.cbox(n[0], n[1], n[2], 0.08, 0.06, 0.04, 0.015, !1),
    e.style({ color: 5593182, rough: 0.5, metal: 0.5 }),
    e.cbox(0.22, 0.3, 0.68, 0.26, 0.28, 0.26, 0.04, !1),
    e.style({ color: 2829617, rough: 0.6 }),
    e.cbox(0.22, 0.47, 0.66, 0.2, 0.08, 0.2, 0.03),
    e.style({ color: 12172738, rough: 0.3, metal: 0.85 }),
    Ct(e, [0.32, 0.3, 0.74], [0.3, 0.32, 1.02], 0.025, 0.025, 6, !0));
  for (let t of [-1, 1]) uZ(e, t * 0.2, 0.27, -0.965, 0.045, gn);
  (xt(e, vn, 0.38, 0.25, 1.005, 0.1, 0.05, 0.02),
    xt(e, fn, 0.38, 0.2, 1.005, 0.1, 0.03, 0.02),
    e.style(Bt),
    e.box(-0.56, 0.22, 1.005, 0.06, 0.04, 0.02, ``),
    e.style(Ut),
    e.box(0.56, 0.22, 1.005, 0.06, 0.04, 0.02, ``),
    cZ(e, 1.006, 0.33, RX.moped, !1, 0.2, 0.1),
    e.style(MZ));
  for (let t of [-1, 1])
    (Ct(e, [t * 0.26, 0.38, -0.52], [t * 0.36, 0.58, -0.46], 0.01, 0.01, 4),
      e.style(NZ),
      e.cbox(t * 0.38, 0.6, -0.46, 0.1, 0.07, 0.04, 0.015, !1),
      e.style($t),
      e.box(t * 0.38, 0.6, -0.436, 0.08, 0.055, 0.008, ``),
      e.style(MZ));
  IZ(e);
}
function RZ(e, t, n) {
  let r = n.side ?? -1;
  switch (e) {
    case `kei`:
      hZ(t, r);
      break;
    case `truck`:
      gZ(t, r);
      break;
    case `taxi`:
      bZ(t, r);
      break;
    case `cab`:
      xZ(t, `cab`, r);
      break;
    case `police`:
      xZ(t, `police`, r);
      break;
    case `ambulance`:
      CZ(t, !0, r);
      break;
    case `van`:
      CZ(t, !1, r);
      break;
    case `garbage`:
      wZ(t, r);
      break;
    case `mamachari`:
      return (OZ(t, n), !0);
    case `swan`:
      return (jZ(t), !0);
    case `kart`:
      LZ(t);
      break;
    case `bus`:
      (cn(t, r), zZ(t, 0));
      break;
    default:
      return !1;
  }
  return (n.wheels && kt(t, e), !0);
}
function zZ(e, t) {
  let n = e.vertexCount,
    r = e.P,
    i = e.D,
    a = e.UV,
    o = zX.busInterior;
  for (let e = t; e + 2 < n; e += 3) {
    if (
      i[e * 4 + 1] !== et.CABIN ||
      i[(e + 1) * 4 + 1] !== et.CABIN ||
      i[(e + 2) * 4 + 1] !== et.CABIN
    )
      continue;
    let t = 1 / 0,
      n = -1 / 0,
      s = 1 / 0,
      c = -1 / 0;
    for (let i = e; i < e + 3; i++)
      ((t = Math.min(t, r[i * 3 + 2])),
        (n = Math.max(n, r[i * 3 + 2])),
        (s = Math.min(s, r[i * 3 + 1])),
        (c = Math.max(c, r[i * 3 + 1])));
    if (!(n - t < 0.05 || c - s < 0.05))
      for (let i = e; i < e + 3; i++)
        ((a[i * 2] = o.u0 + ((r[i * 3 + 2] - t) / (n - t)) * (o.u1 - o.u0)),
          (a[i * 2 + 1] =
            o.v0 + ((r[i * 3 + 1] - s) / (c - s)) * (o.v1 - o.v0)));
  }
}
