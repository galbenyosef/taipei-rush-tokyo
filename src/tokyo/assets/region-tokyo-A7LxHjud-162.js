// tokyo/assets/region-tokyo-A7LxHjud 162 — math
// Lines 67618-67933 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function gC(e, t, n) {
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
function _C(e, t, n) {
  return [0, e, t, e + 0.02, t, e + n - 0.02, 0, e + n];
}
var vC = { x: -24, z: 0 },
  yC = 14933455,
  bC = 16777215,
  xC = 7229750,
  SC = -8.5,
  CC = 5.1,
  wC = [12, 62],
  TC = [-62, -12],
  EC = [-12, 12],
  DC = [12.2, 20],
  OC = 10.5,
  kC = { lx: 71, lz: -5.5 },
  AC = { lx: -71, lz: -5.5 },
  jC = [79, 92],
  MC = [-98, -79],
  NC = 5.4,
  PC = 10.4,
  FC = 14.4,
  IC = 15.4,
  LC = 18.6,
  RC = (e) => (e > -82 ? CC : 2.8);
function zC(e, t = !1) {
  let n = [
    { y0: 0, y1: NC, cell: e.c(`ekiBay`), tw: 4 },
    { y0: NC, y1: PC, cell: e.c(`ekiBay`), tw: 4 },
    { y0: PC, y1: FC, cell: e.c(`ekiBay3`), tw: 4 },
  ];
  return (t && n.push({ y0: IC, y1: LC, cell: e.c(`ekiBay3`), tw: 4 }), n);
}
function BC(e, t, n, r, i, a, o = {}) {
  let s = zC(t, o.attic);
  (mC(e, r, i, n, i, s),
    e.coarse
      ? mC(
          e,
          n,
          a,
          r,
          a,
          s.slice(0, 1).map((e) => ({ ...e, y1: s[s.length - 1].y1 })),
          0.08,
          0.04,
        )
      : mC(e, n, a, r, a, s, 0.08, 0.04),
    o.skipN || mC(e, r, a, r, i, s),
    o.skipS || mC(e, n, i, n, a, s),
    e.col(yC).mat(0.8, 0, 0.05, G),
    e.box(n, FC, i, r, IC, a, t.c(`granite`), 2, 1),
    o.attic &&
      e.box(
        n + 0.3,
        LC,
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
function VC(e, t, n, r, i, a, o = !1, s = !0) {
  e.col(yC).mat(0.75, 0, 0.05, G);
  let c = [n, i, r, i, r, a, n, a];
  (e.coarse ||
    (e.sweep(c, _C(5.25, 0.18, 0.4), !0),
    e.sweep(c, _C(10.25, 0.15, 0.35), !0),
    s &&
      e
        .col(10130826)
        .mat(0.8, 0, 0.05, G)
        .sweep(c, _C(0, 0.22, 1.05), !0),
    e.col(yC).mat(0.75, 0, 0.05, G)),
    e.sweep(c, gC(15.200000000000001, 0.75, 1), !0),
    o && e.sweep(c, gC(19.200000000000003, 0.6, 0.8), !0),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function HC(e, t, n, r, i = 1.2) {
  if (
    (e.col(10504756).mat(0.85, 0, 0.1, G),
    e.box(t - i / 2, 1.05, n - 0.3, t + i / 2, r, n + 0.05),
    e.coarse)
  )
    return e.mat(0.85, 0, 0, 0).col(16777215);
  e.col(yC).mat(0.75, 0, 0.05, G);
  for (let a = 1.9; a < r - 0.5; a += 1.25)
    e.box(t - i / 2 - 0.02, a, n - 0.32, t + i / 2 + 0.02, a + 0.3, n + 0.05);
  e.mat(0.85, 0, 0, 0).col(16777215);
}
function Sme(e, t, n, r, i, a, o = 8) {
  if (!e.coarse) {
    for (let s = n + o / 2; s < r - 2; s += o)
      (e.col(yC).mat(0.8, 0, 0.08, G),
        e.box(s - 0.9, a, i, s + 0.9, a + 1.9, i + 1.6),
        e.col(16777215).emis(0.14, G),
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
function UC(e, t, n, r, i) {
  let a = OC,
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
        { y0: 0, y1: NC, cell: g, tw: _ / 2 },
        { y0: NC, y1: PC, cell: t.c(`ekiArch`), tw: _ / 2 },
        { y0: PC, y1: FC, cell: t.c(`ekiBay3`), tw: _ / 2 },
      ];
    (Math.cos(m) * (i ? 1 : -1) < -0.6 && Math.abs(h) < 0.5) ||
      mC(e, u, d, f, p, v);
  }
  let c = (e) => {
    let t = [];
    for (let i = 0; i < 8; i++) {
      let a = o + (i / 8) * Math.PI * 2;
      t.push(n + Math.cos(a) * e, r + Math.sin(a) * e);
    }
    return t;
  };
  (e.col(yC).mat(0.75, 0, 0.05, G),
    e.lathe(n, r, [a, FC, a, IC], 8, o),
    e.sweep(c(a), gC(15.200000000000001, 0.8, 1.1), !0),
    e.coarse || e.sweep(c(a), _C(5.25, 0.18, 0.4), !0),
    e.col(5593180).mat(0.7, 0.2, 0, 0),
    e.lathe(n, r, [10.7, 16.25, a * 0.9, 16.25], 8, o),
    e.col(yC).mat(0.75, 0, 0.05, G));
  let l = a * 0.9;
  for (let i = 0; i < 8; i++) {
    let a = o + (i / 8) * Math.PI * 2,
      s = o + ((i + 1) / 8) * Math.PI * 2,
      c = n + Math.cos(s) * l,
      u = r + Math.sin(s) * l,
      d = n + Math.cos(a) * l,
      f = r + Math.sin(a) * l;
    mC(
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
  (e.col(yC).mat(0.75, 0, 0.05, G),
    e.sweep(c(l), gC(21.099999999999998, 0.7, 0.9), !0));
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
  (e.col(bC).mat(0.55, 0.1, 0.04, G),
    e.lathe(
      n,
      r,
      e.coarse ? [u[0], u[1], u[6], u[7], u[10], u[11], u[14], u[15]] : u,
      8,
      o,
      t.c(`slate`),
    ));
  let d = 33.4;
  if ((e.col(xC).mat(0.45, 0.6, 0.05, 0), !e.coarse))
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
      (e.col(xC).mat(0.5, 0.5, 0.05, 0),
        e.obox(n + s * a, 24, r + c * a, 0.75, 0.75, 0.6, Math.atan2(s, -c)));
    }
  (e.col(xC).mat(0.45, 0.6, 0.12, G),
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
function Cme(e, t) {
  let [n, r] = DC,
    i = 4.8;
  (e.col(yC).mat(0.75, 0, 0.05, G),
    e.box(n - 0.6, 0, -8.95, n, NC, -8.45),
    e.box(r, 0, -8.95, r + 0.6, NC, -8.45),
    e.box(n - 0.6, i, -8.95, r + 0.6, 5.6000000000000005, -8.45),
    e.coarse ||
      (e.col(16777215).mat(0.85, 0, 0.12, G | 0),
      e.wall(n, CC, n, SC, 0, i, t.c(`brick`), 2, 2),
      e.wall(r, SC, r, CC, 0, i, t.c(`brick`), 2, 2),
      e.col(14274748).emis(0.3, 1),
      e.flat(n, SC, r, CC, i, e.white, 0, 0, !1),
      e.emis(0, 0).col(13157046),
      e.flat(n, SC, r, CC, 0.03, t.c(`granite`), 2, 2)),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
