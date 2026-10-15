// tokyo/assets/region-tokyo-BcM3fReU 128 — math
// Lines 57412-57751 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Rk(e, t) {
  let n = (e) => ok.x - e,
    r = (e) => ok.z + e,
    i = [
      {
        x0: n(sk.cz + sk.W * 0.8),
        x1: n(sk.cz - sk.W * 0.8),
        z0: r(-sk.L * 0.85),
        z1: r(sk.L * 0.85),
        y0: t.gy,
        y1: t.gy + sk.H,
        rgb: [0.42, 0.5, 0.56],
        lit: !0,
      },
    ];
  for (let e of uk)
    i.push({
      x0: n(dk[1]),
      x1: n(dk[0]),
      z0: r(e.lx0),
      z1: r(e.lx1),
      y0: t.gy,
      y1: t.gy + e.h,
      rgb: [0.66, 0.65, 0.62],
      lit: !0,
    });
  return i;
}
var zk = {
    id: `intl-forum`,
    site: Lk,
    near: 360,
    build: Fk,
    far: Ik,
    glass: jk,
    farBoxes: Rk,
    blip: !0,
    roofs: Array.from({ length: 11 }, (e, t) => {
      let n = -sk.L + (2 * sk.L * t) / 11,
        r = n + (2 * sk.L) / 11,
        i = Math.max(ck(n), ck(r), n < 0 && r > 0 ? sk.W : 0);
      return { lx0: n, lz0: sk.cz - i, lx1: r, lz1: sk.cz + i, y: sk.H };
    }),
    anchors: [
      {
        key: `forum-plaza`,
        lx: 0,
        lz: 0,
        turn: Math.PI / 2,
        name: {
          zh: `東京國際論壇 地上廣場`,
          en: `Tokyo International Forum plaza`,
        },
      },
      {
        key: `forum-glass-hall`,
        lx: 0,
        lz: sk.cz,
        turn: Math.PI / 2,
        name: {
          zh: `東京國際論壇 玻璃大廳`,
          en: `Tokyo International Forum Glass Hall`,
        },
      },
    ],
  },
  Bk = { x: 47.5, z: 324 },
  Vk = 12,
  Hk = 9.5,
  Uk = 7,
  Wk = 5.2,
  Gk = 20.4,
  Kk = 24.6,
  qk = 14538440,
  Jk = { lx: 6.2, lz: -3.7, half: 4.2 },
  Yk = 1.3,
  Xk = 30.2;
function Zk(e) {
  let t = [];
  t.push(-12, -9.5);
  for (let n = 0; n <= e; n++) {
    let r = -Math.PI / 2 + (n / e) * (Math.PI / 2);
    t.push(5 + Math.cos(r) * Uk, -2.5 + Math.sin(r) * Uk);
  }
  return (t.push(Vk, Hk, -12, Hk), t);
}
function Qk(e, t) {
  return [
    { y0: 0, y1: Wk, cell: e.c(`wakoShow`), tw: t },
    { y0: Wk, y1: 12.8, cell: e.c(`wakoBay`), tw: t },
    { y0: 12.8, y1: Gk, cell: e.c(`wakoBay`), tw: t },
  ];
}
function $k(e, t) {
  let n = Zk(e.coarse ? 4 : 9),
    r = n.length / 2;
  for (let i = 0; i < r; i++) {
    let a = (i + 1) % r,
      o = n[i * 2],
      s = n[i * 2 + 1],
      c = n[a * 2],
      l = n[a * 2 + 1],
      u = Math.hypot(c - o, l - s);
    !(Math.abs(s - Hk) < 0.01 && Math.abs(l - Hk) < 0.01) &&
    !(Math.abs(o + Vk) < 0.01 && Math.abs(c + Vk) < 0.01)
      ? BD(
          e,
          c,
          l,
          o,
          s,
          Qk(t, u / Math.max(1, Math.round(u / 3.2))),
          0.22,
          0.09,
        )
      : (e.col(qk, 0.92).mat(0.75, 0, 0.06, Y),
        e.wall(c, l, o, s, 0, Kk, t.c(`granite`), 2, 2));
  }
  (e.col(qk).mat(0.7, 0, 0.08, Y),
    e.sweep(n, VD(Gk, 0.9, 1.2), !0),
    e.coarse ||
      (e.sweep(n, [0, 4.9, 0.25, 4.9, 0.25, 5.45, 0, 5.45], !0),
      e.col(9077624).sweep(n, [0, 0, 0.18, 0, 0.18, 0.9, 0, 0.9], !0).col(qk)));
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
      Kk,
      t.c(`granite`),
      2,
      1.6,
    );
  }
  (e.sweep(i, VD(Kk, 0.5, 0.7), !0),
    e.col(7106160).mat(0.8, 0.1, 0, 0),
    e.flat(-11.4, -8.9, 11.4, 8.9, 25.25),
    eA(e, t),
    e.solid(-12, -9.5, 5, Hk, 0, Kk),
    e.solid(5, -2.5, Vk, Hk, 0, Kk),
    e.solidRot(Vk - Uk * 0.6, -5.3, Uk * 0.55, Uk * 0.55, Math.PI / 4, 0, Kk));
}
function eA(e, t) {
  let { lx: n, lz: r, half: i } = Jk,
    a = Math.PI / 4,
    o = (i, o, s, c = t.c(`granite`), l = 0.1, u = 0.08) => {
      (e.mat(0.7, 0, l, Y), e.lathe(n, r, [i, o, i, s], 4, a + Math.PI / 4, c));
    };
  if (
    (e.col(qk),
    o(i * 1.414, Kk, 28.200000000000003),
    e.sweep(tA(n, r, i + 0.05), VD(28, 0.45, 0.6), !0),
    o((i - 0.4) * 1.414, 28.6, 33.2),
    !e.coarse)
  ) {
    e.col(qk, 1.04).mat(0.7, 0, 0.1, Y);
    for (let t = 0; t < 4; t++) {
      let o = a + Math.PI / 4 + (t / 4) * Math.PI * 2,
        s = n + Math.cos(o) * (i - 0.4) * 1.414,
        c = r + Math.sin(o) * (i - 0.4) * 1.414;
      e.obox(s, 30.900000000000002, c, 0.55, 2.3, 0.55, o);
    }
  }
  (e.col(qk),
    e.sweep(tA(n, r, i - 0.35), VD(33.2, 0.55, 0.7), !0),
    e.mat(0.7, 0, 0.08, Y),
    e.lathe(n, r, [i * 0.95, 33.900000000000006, i * 0.92, 35], e.seg(16), 0),
    e.col(5591370).mat(0.45, 0.55, 0.06, Y),
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
    (e.col(16777215).mat(0.4, 0, 0.55, Y),
      e.quad(
        d + p * Yk,
        28.9,
        f + m * Yk,
        d - p * Yk,
        28.9,
        f - m * Yk,
        d - p * Yk,
        31.5,
        f - m * Yk,
        d + p * Yk,
        31.5,
        f + m * Yk,
        t.c(`clock`),
      ));
  }
}
function tA(e, t, n) {
  let r = n * 1.414;
  return [e + r, t, e, t + r, e - r, t, e, t - r];
}
function nA(e, t) {
  (e.col(qk).mat(0.75, 0, 0.25, Y),
    e.box(-12, 0, -9.5, Vk, Kk, Hk, t.c(`wakoBay`), 3.2, 7.6),
    e.lathe(
      Jk.lx,
      Jk.lz,
      [Jk.half * 1.4, Kk, Jk.half * 1.2, 33.6, Jk.half * 0.9, 35.6, 0.3, 39.6],
      4,
      Math.PI / 2,
    ),
    e.mat(0.75, 0, 0, 0));
}
function rA(e) {
  return {
    x: Bk.x,
    z: Bk.z,
    gy: e.groundHeight(Bk.x, Bk.z),
    facing: Math.PI / 2,
  };
}
function iA(e, t) {
  let n = (e) => Bk.x - e,
    r = (e) => Bk.z + e;
  return [
    {
      x0: n(Hk),
      x1: n(-9.5),
      z0: r(-12),
      z1: r(Vk),
      y0: t.gy,
      y1: t.gy + Kk,
      rgb: [0.7, 0.67, 0.6],
      lit: !0,
    },
    {
      x0: n(Jk.lz + 3),
      x1: n(Jk.lz - 3),
      z0: r(Jk.lx - 3),
      z1: r(Jk.lx + 3),
      y0: t.gy + Kk,
      y1: t.gy + Kk + 14,
      rgb: [0.7, 0.67, 0.6],
    },
  ];
}
function aA() {
  let e = [];
  for (let t = 0; t < 4; t++) {
    let n = Math.PI / 4 + Math.PI / 2 + (t / 4) * Math.PI * 2,
      r = Math.cos(n),
      i = Math.sin(n),
      a = Jk.half - 0.4 + 0.14;
    e.push({
      lx: Jk.lx + r * a,
      ly: Xk,
      lz: Jk.lz + i * a,
      turn: Math.atan2(r, -i),
    });
  }
  return e;
}
var oA = {
    id: `wako`,
    site: rA,
    name: { ja: `和光`, zh: `和光`, en: `Wako` },
    near: 240,
    build: $k,
    far: nA,
    farBoxes: iA,
    blip: !0,
    clock: { faces: aA(), r: Yk, melody: `westminster` },
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
  sA = 23.5,
  cA = 14.5,
  lA = -14.5,
  uA = 6.2,
  dA = 15855334,
  fA = 9080983,
  pA = 11747627,
  mA = {
    cell: void 0,
    color: fA,
    band: 16052714,
    soffit: 15328214,
    ridgeColor: 5198938,
  };
function hA(e) {
  return { ...mA, cell: e.c(`kawara`) };
}
