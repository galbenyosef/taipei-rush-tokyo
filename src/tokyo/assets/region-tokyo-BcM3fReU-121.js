// tokyo/assets/region-tokyo-BcM3fReU 121 — math
// Lines 55196-55511 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function VD(e, t, n) {
  return [
    0,
    e,
    t * 0.15,
    e + n * 0.12,
    t * 0.35,
    e + n * 0.3,
    t * 0.6,
    e + n * 0.45,
    t,
    e + n * 0.62,
    t,
    e + n * 0.88,
    t * 0.85,
    e + n,
    0,
    e + n,
  ];
}
function HD(e, t, n) {
  return [0, e, t, e + 0.02, t, e + n - 0.02, 0, e + n];
}
var UD = { x: -24, z: 0 },
  WD = 14933455,
  GD = 16777215,
  KD = 7229750,
  qD = -8.5,
  JD = 5.1,
  YD = [12, 62],
  XD = [-62, -12],
  ZD = [-12, 12],
  QD = [12.2, 20],
  $D = 10.5,
  eO = { lx: 71, lz: -5.5 },
  tO = { lx: -71, lz: -5.5 },
  nO = [79, 92],
  rO = [-98, -79],
  iO = 5.4,
  aO = 10.4,
  oO = 14.4,
  sO = 15.4,
  cO = 18.6,
  lO = (e) => (e > -82 ? JD : 2.8);
function uO(e, t = !1) {
  let n = [
    { y0: 0, y1: iO, cell: e.c(`ekiBay`), tw: 4 },
    { y0: iO, y1: aO, cell: e.c(`ekiBay`), tw: 4 },
    { y0: aO, y1: oO, cell: e.c(`ekiBay3`), tw: 4 },
  ];
  return (t && n.push({ y0: sO, y1: cO, cell: e.c(`ekiBay3`), tw: 4 }), n);
}
function dO(e, t, n, r, i, a, o = {}) {
  let s = uO(t, o.attic);
  (BD(e, r, i, n, i, s),
    e.coarse
      ? BD(
          e,
          n,
          a,
          r,
          a,
          s.slice(0, 1).map((e) => ({ ...e, y1: s[s.length - 1].y1 })),
          0.08,
          0.04,
        )
      : BD(e, n, a, r, a, s, 0.08, 0.04),
    o.skipN || BD(e, r, a, r, i, s),
    o.skipS || BD(e, n, i, n, a, s),
    e.col(WD).mat(0.8, 0, 0.05, Y),
    e.box(n, oO, i, r, sO, a, t.c(`granite`), 2, 1),
    o.attic &&
      e.box(
        n + 0.3,
        cO,
        i + 0.3,
        r - 0.3,
        19.400000000000002,
        a - 0.3,
        t.c(`granite`),
        2,
        0.8,
      ),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function fO(e, t, n, r, i, a, o = !1, s = !0) {
  e.col(WD).mat(0.75, 0, 0.05, Y);
  let c = [n, i, r, i, r, a, n, a];
  (e.coarse ||
    (e.sweep(c, HD(5.25, 0.18, 0.4), !0),
    e.sweep(c, HD(10.25, 0.15, 0.35), !0),
    s &&
      e
        .col(10130826)
        .mat(0.8, 0, 0.05, Y)
        .sweep(c, HD(0, 0.22, 1.05), !0),
    e.col(WD).mat(0.75, 0, 0.05, Y)),
    e.sweep(c, VD(15.200000000000001, 0.75, 1), !0),
    o && e.sweep(c, VD(19.200000000000003, 0.6, 0.8), !0),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function pO(e, t, n, r, i = 1.2) {
  if (
    (e.col(10504756).mat(0.85, 0, 0.1, Y),
    e.box(t - i / 2, 1.05, n - 0.3, t + i / 2, r, n + 0.05),
    e.coarse)
  )
    return e.mat(0.85, 0, 0, 0).col(16777215);
  e.col(WD).mat(0.75, 0, 0.05, Y);
  for (let a = 1.9; a < r - 0.5; a += 1.25)
    e.box(t - i / 2 - 0.02, a, n - 0.32, t + i / 2 + 0.02, a + 0.3, n + 0.05);
  e.mat(0.85, 0, 0, 0).col(16777215);
}
function mO(e, t, n, r, i, a, o = 8) {
  if (!e.coarse) {
    for (let s = n + o / 2; s < r - 2; s += o)
      (e.col(WD).mat(0.8, 0, 0.08, Y),
        e.box(s - 0.9, a, i, s + 0.9, a + 1.9, i + 1.6),
        e.col(16777215).emis(0.14, Y),
        e.panel(
          s + 0.6,
          i - 0.01,
          s - 0.6,
          i - 0.01,
          a + 0.3,
          a + 1.5,
          t.A.sub(`ekiBay3`, 0.34, 0.2, 0.66, 0.7),
        ),
        e.col(3027512).mat(0.6, 0.1, 0, 0),
        e.extrudeZ(
          [-1.1 + s, a + 1.9, 1.1 + s, a + 1.9, s, a + 2.6],
          i - 0.1,
          i + 1.7,
          !0,
          !0,
        ));
    e.mat(0.85, 0, 0, 0).col(16777215).emis(0, 0);
  }
}
function hO(e, t, n, r, i) {
  let a = $D,
    o = Math.PI / 8,
    s = a * Math.cos(Math.PI / 8);
  for (let s = 0; s < 8; s++) {
    let c = o + (s / 8) * Math.PI * 2,
      l = o + ((s + 1) / 8) * Math.PI * 2,
      u = n + Math.cos(l) * a,
      d = r + Math.sin(l) * a,
      f = n + Math.cos(c) * a,
      p = r + Math.sin(c) * a,
      m = (c + l) / 2,
      h = Math.sin(m),
      g = h < -0.3 ? t.c(`ekiDoor`) : t.c(`ekiArch`),
      _ = Math.hypot(f - u, p - d),
      v = [
        { y0: 0, y1: iO, cell: g, tw: _ / 2 },
        { y0: iO, y1: aO, cell: t.c(`ekiArch`), tw: _ / 2 },
        { y0: aO, y1: oO, cell: t.c(`ekiBay3`), tw: _ / 2 },
      ];
    (Math.cos(m) * (i ? 1 : -1) < -0.6 && Math.abs(h) < 0.5) ||
      BD(e, u, d, f, p, v);
  }
  let c = (e) => {
    let t = [];
    for (let i = 0; i < 8; i++) {
      let a = o + (i / 8) * Math.PI * 2;
      t.push(n + Math.cos(a) * e, r + Math.sin(a) * e);
    }
    return t;
  };
  (e.col(WD).mat(0.75, 0, 0.05, Y),
    e.lathe(n, r, [a, oO, a, sO], 8, o),
    e.sweep(c(a), VD(15.200000000000001, 0.8, 1.1), !0),
    e.coarse || e.sweep(c(a), HD(5.25, 0.18, 0.4), !0),
    e.col(5593180).mat(0.7, 0.2, 0, 0),
    e.lathe(n, r, [10.7, 16.25, a * 0.9, 16.25], 8, o),
    e.col(WD).mat(0.75, 0, 0.05, Y));
  let l = a * 0.9;
  for (let i = 0; i < 8; i++) {
    let a = o + (i / 8) * Math.PI * 2,
      s = o + ((i + 1) / 8) * Math.PI * 2,
      c = n + Math.cos(s) * l,
      u = r + Math.sin(s) * l,
      d = n + Math.cos(a) * l,
      f = r + Math.sin(a) * l;
    BD(
      e,
      c,
      u,
      d,
      f,
      [
        {
          y0: 16.2,
          y1: 21.4,
          cell: t.c(`ekiBay3`),
          tw: Math.hypot(d - c, f - u),
        },
      ],
      0.1,
      0.07,
    );
  }
  (e.col(WD).mat(0.75, 0, 0.05, Y),
    e.sweep(c(l), VD(21.099999999999998, 0.7, 0.9), !0));
  let u = [
    9.950000000000001,
    21.95,
    10.000000000000002,
    23.4,
    l * 0.98,
    25.599999999999998,
    l * 0.88,
    27.799999999999997,
    l * 0.72,
    29.799999999999997,
    l * 0.5,
    31.5,
    l * 0.26,
    32.8,
    1.7,
    33.4,
  ];
  (e.col(GD).mat(0.55, 0.1, 0.04, Y),
    e.lathe(
      n,
      r,
      e.coarse ? [u[0], u[1], u[6], u[7], u[10], u[11], u[14], u[15]] : u,
      8,
      o,
      t.c(`slate`),
    ));
  let d = 33.4;
  if ((e.col(KD).mat(0.45, 0.6, 0.05, 0), !e.coarse))
    for (let t = 0; t < 8; t++) {
      let i = o + (t / 8) * Math.PI * 2;
      for (let t = 0; t + 2 < u.length; t += 2) {
        let a = u[t],
          o = u[t + 1],
          s = u[t + 2],
          c = u[t + 3];
        e.rod(
          n + Math.cos(i) * (a + 0.05),
          o,
          r + Math.sin(i) * (a + 0.05),
          n + Math.cos(i) * (s + 0.05),
          c,
          r + Math.sin(i) * (s + 0.05),
          0.16,
          4,
        );
      }
    }
  if (!e.coarse)
    for (let t = 0; t < 4; t++) {
      let i = o + Math.PI / 8 + (t / 4) * Math.PI * 2,
        a = l * 0.95,
        s = Math.cos(i),
        c = Math.sin(i);
      (e.col(KD).mat(0.5, 0.5, 0.05, 0),
        e.obox(n + s * a, 24, r + c * a, 0.75, 0.75, 0.6, Math.atan2(s, -c)));
    }
  (e.col(KD).mat(0.45, 0.6, 0.12, Y),
    e.lathe(
      n,
      r,
      [
        1.7,
        d,
        1.5,
        33.8,
        1.4,
        36.199999999999996,
        1.6,
        36.4,
        1,
        37.3,
        0.35,
        38,
      ],
      8,
      o,
    ),
    e.lathe(
      n,
      r,
      [0.22, 38, 0.14, 41.599999999999994, 0.02, 42.8],
      e.seg(6),
      0,
    ),
    e.coarse ||
      e
        .col(14202960)
        .mat(0.3, 0.9, 0.1, 0)
        .lathe(n, r, [0.01, 38.6, 0.42, 39, 0.01, 39.4], 6),
    e.mat(0.85, 0, 0, 0).col(16777215));
  let f = s * Math.tan(Math.PI / 8);
  for (let t = 0; t < 4; t++) e.solidRot(n, r, s, f, (t * Math.PI) / 4, 0, d);
}
function gO(e, t) {
  let [n, r] = QD,
    i = 4.8;
  (e.col(WD).mat(0.75, 0, 0.05, Y),
    e.box(n - 0.6, 0, -8.95, n, iO, -8.45),
    e.box(r, 0, -8.95, r + 0.6, iO, -8.45),
    e.box(n - 0.6, i, -8.95, r + 0.6, 5.6000000000000005, -8.45),
    e.coarse ||
      (e.col(16777215).mat(0.85, 0, 0.12, Y | 0),
      e.wall(n, JD, n, qD, 0, i, t.c(`brick`), 2, 2),
      e.wall(r, qD, r, JD, 0, i, t.c(`brick`), 2, 2),
      e.col(14274748).emis(0.3, 1),
      e.flat(n, qD, r, JD, i, e.white, 0, 0, !1),
      e.emis(0, 0).col(13157046),
      e.flat(n, qD, r, JD, 0.03, t.c(`granite`), 2, 2)),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
