// tokyo/assets/region-tokyo-55J_WESF 170 — math
// Lines 70046-70305 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ehe(e, t) {
  let n = Qme(e.coarse ? 4 : 9),
    r = n.length / 2;
  for (let i = 0; i < r; i++) {
    let a = (i + 1) % r,
      o = n[i * 2],
      s = n[i * 2 + 1],
      c = n[a * 2],
      l = n[a * 2 + 1],
      u = Math.hypot(c - o, l - s);
    !(Math.abs(s - kw) < 0.01 && Math.abs(l - kw) < 0.01) &&
    !(Math.abs(o + Ow) < 0.01 && Math.abs(c + Ow) < 0.01)
      ? dC(
          e,
          c,
          l,
          o,
          s,
          $me(t, u / Math.max(1, Math.round(u / 3.2))),
          0.22,
          0.09,
        )
      : (e.col(Pw, 0.92).mat(0.75, 0, 0.06, G),
        e.wall(c, l, o, s, 0, Nw, t.c(`granite`), 2, 2));
  }
  (e.col(Pw).mat(0.7, 0, 0.08, G),
    e.sweep(n, pC(Mw, 0.9, 1.2), !0),
    e.coarse ||
      (e.sweep(n, [0, 4.9, 0.25, 4.9, 0.25, 5.45, 0, 5.45], !0),
      e.col(9077624).sweep(n, [0, 0, 0.18, 0, 0.18, 0.9, 0, 0.9], !0).col(Pw)));
  let i = ((e) => {
    let t = [];
    for (let i = 0; i < r; i++) {
      let r = n[i * 2],
        a = n[i * 2 + 1];
      t.push(
        r + (r < 0 ? e : r > 11.99 ? -e : r > 0 ? -e * 0.7 : 0),
        a + (a > 9.49 ? -e : a < 0 ? e * 0.7 : 0),
      );
    }
    return t;
  })(0.6);
  for (let n = 0; n < r; n++) {
    let a = (n + 1) % r;
    e.wall(
      i[a * 2],
      i[a * 2 + 1],
      i[n * 2],
      i[n * 2 + 1],
      21.5,
      Nw,
      t.c(`granite`),
      2,
      1.6,
    );
  }
  (e.sweep(i, pC(Nw, 0.5, 0.7), !0),
    e.col(7106160).mat(0.8, 0.1, 0, 0),
    e.flat(-11.4, -8.9, 11.4, 8.9, 25.25),
    the(e, t),
    e.solid(-12, -9.5, 5, kw, 0, Nw),
    e.solid(5, -2.5, Ow, kw, 0, Nw),
    e.solidRot(Ow - Aw * 0.6, -5.3, Aw * 0.55, Aw * 0.55, Math.PI / 4, 0, Nw));
}
function the(e, t) {
  let { lx: n, lz: r, half: i } = Fw,
    a = Math.PI / 4,
    o = (i, o, s, c = t.c(`granite`), l = 0.1, u = 0.08) => {
      (e.mat(0.7, 0, l, G), e.lathe(n, r, [i, o, i, s], 4, a + Math.PI / 4, c));
    };
  if (
    (e.col(Pw),
    o(i * 1.414, Nw, 28.200000000000003),
    e.sweep(Lw(n, r, i + 0.05), pC(28, 0.45, 0.6), !0),
    o((i - 0.4) * 1.414, 28.6, 33.2),
    !e.coarse)
  ) {
    e.col(Pw, 1.04).mat(0.7, 0, 0.1, G);
    for (let t = 0; t < 4; t++) {
      let o = a + Math.PI / 4 + (t / 4) * Math.PI * 2,
        s = n + Math.cos(o) * (i - 0.4) * 1.414,
        c = r + Math.sin(o) * (i - 0.4) * 1.414;
      e.obox(s, 30.900000000000002, c, 0.55, 2.3, 0.55, o);
    }
  }
  (e.col(Pw),
    e.sweep(Lw(n, r, i - 0.35), pC(33.2, 0.55, 0.7), !0),
    e.mat(0.7, 0, 0.08, G),
    e.lathe(n, r, [i * 0.95, 33.900000000000006, i * 0.92, 35], e.seg(16), 0),
    e.col(5591370).mat(0.45, 0.55, 0.06, G),
    e.lathe(
      n,
      r,
      [
        i * 0.98,
        35,
        i * 0.9,
        36.2,
        i * 0.62,
        37.400000000000006,
        i * 0.3,
        38.1,
        0.4,
        38.400000000000006,
      ],
      e.seg(16),
      0,
    ),
    e.col(3947062).mat(0.4, 0.7, 0, 0),
    e.lathe(
      n,
      r,
      [0.35, 38.400000000000006, 0.12, 40.2, 0.02, 40.900000000000006],
      6,
    ));
  for (let o = 0; o < 4; o++) {
    let s = a + Math.PI / 2 + (o / 4) * Math.PI * 2,
      c = Math.cos(s),
      l = Math.sin(s),
      u = i - 0.4 + 0.06,
      d = n + c * u,
      f = r + l * u,
      p = -l,
      m = c;
    (e.col(16777215).mat(0.4, 0, 0.55, G),
      e.quad(
        d + p * Iw,
        28.9,
        f + m * Iw,
        d - p * Iw,
        28.9,
        f - m * Iw,
        d - p * Iw,
        31.5,
        f - m * Iw,
        d + p * Iw,
        31.5,
        f + m * Iw,
        t.c(`clock`),
      ));
  }
}
function Lw(e, t, n) {
  let r = n * 1.414;
  return [e + r, t, e, t + r, e - r, t, e, t - r];
}
function nhe(e, t) {
  (e.col(Pw).mat(0.75, 0, 0.25, G),
    e.box(-12, 0, -9.5, Ow, Nw, kw, t.c(`wakoBay`), 3.2, 7.6),
    e.lathe(
      Fw.lx,
      Fw.lz,
      [Fw.half * 1.4, Nw, Fw.half * 1.2, 33.6, Fw.half * 0.9, 35.6, 0.3, 39.6],
      4,
      Math.PI / 2,
    ),
    e.mat(0.75, 0, 0, 0));
}
function rhe(e) {
  return {
    x: Dw.x,
    z: Dw.z,
    gy: e.groundHeight(Dw.x, Dw.z),
    facing: Math.PI / 2,
  };
}
function ihe(e, t) {
  let n = (e) => Dw.x - e,
    r = (e) => Dw.z + e;
  return [
    {
      x0: n(kw),
      x1: n(-9.5),
      z0: r(-12),
      z1: r(Ow),
      y0: t.gy,
      y1: t.gy + Nw,
      rgb: [0.7, 0.67, 0.6],
      lit: !0,
    },
    {
      x0: n(Fw.lz + 3),
      x1: n(Fw.lz - 3),
      z0: r(Fw.lx - 3),
      z1: r(Fw.lx + 3),
      y0: t.gy + Nw,
      y1: t.gy + Nw + 14,
      rgb: [0.7, 0.67, 0.6],
    },
  ];
}
function ahe() {
  let e = [];
  for (let t = 0; t < 4; t++) {
    let n = Math.PI / 4 + Math.PI / 2 + (t / 4) * Math.PI * 2,
      r = Math.cos(n),
      i = Math.sin(n),
      a = Fw.half - 0.4 + 0.14;
    e.push({
      lx: Fw.lx + r * a,
      ly: Zme,
      lz: Fw.lz + i * a,
      turn: Math.atan2(r, -i),
    });
  }
  return e;
}
var ohe = {
    id: `wako`,
    site: rhe,
    name: { ja: `和光`, zh: `和光`, en: `Wako` },
    near: 240,
    build: ehe,
    far: nhe,
    farBoxes: ihe,
    blip: !0,
    clock: { faces: ahe(), r: Iw, melody: `westminster` },
    anchors: [
      {
        key: `wako-corner`,
        lx: 16,
        lz: -13.5,
        turn: Math.PI - Math.PI / 4,
        name: {
          zh: `銀座四丁目 和光前`,
          en: `Ginza 4-chome, in front of Wako`,
        },
      },
    ],
  },
  Rw = 23.5,
  zw = 14.5,
  Bw = -14.5,
  Vw = 6.2,
  Hw = 15855334,
  Uw = 9080983,
  she = 11747627,
  che = {
    cell: void 0,
    color: Uw,
    band: 16052714,
    soffit: 15328214,
    ridgeColor: 5198938,
  };
function lhe(e) {
  return { ...che, cell: e.c(`kawara`) };
}
function uhe(e, t, n, r, i) {
  if (
    (e.col(14209732).mat(0.8, 0, 0.06, G),
    e.box(t, i - 0.35, r - 1.2, n, i, r),
    e.col(she).mat(0.6, 0, 0.08, G),
    e.box(t, i + 0.95, r - 1.25, n, i + 1.1, r - 1.05),
    !e.coarse)
  ) {
    e.box(t, i + 0.25, r - 1.2, n, i + 0.33, r - 1.1);
    for (let a = t; a <= n + 0.001; a += 1.8)
      e.box(a - 0.08, i, r - 1.22, a + 0.08, i + 1.1, r - 1.06);
  }
}
