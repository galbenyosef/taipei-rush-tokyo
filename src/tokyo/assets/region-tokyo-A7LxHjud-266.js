// tokyo/assets/region-tokyo-A7LxHjud 266 — face
// Lines 99029-99377 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var UCe = (e, t) => e.landmarks.find((e) => e.id === t),
  WCe = (e) => (t) => {
    let n = UCe(t, e);
    return { x: n.x, z: n.z, gy: t.groundHeight(n.x, n.z), facing: 0 };
  },
  Nz = (e, t, n, r) => [
    [e, t],
    [e, r],
    [n, r],
    [n, t],
  ],
  Pz = (e, t, n, r, i = 0.1) => {
    let [a, o] = wS[t],
      s = (o - a) / r;
    return e.A.sub(
      `p3hiSigns`,
      (a + s * n + s * i) / 640,
      0.08,
      (a + s * (n + 1) - s * i) / 640,
      0.92,
    );
  };
function Fz(e, t, n, r, i, a, o, s) {
  let c = 3.2,
    l = 3.6,
    u = a + 2 * l + 0.8;
  e.col(s).mat(0.5, 0.1, 0.3, 1);
  let d = n + r * 0.02,
    f = n + r * 0.5;
  (e.box(Math.min(d, f), a, i - c / 2, Math.max(d, f), u, i + c / 2),
    e.col(16777215).mat(0.4, 0, 0.35, G));
  for (let n = 0; n < 2; n++) {
    let a = u - 0.4 - n * l,
      s = a - l + 0.3,
      d = f + r * 0.02;
    r > 0
      ? e.panel(d, i + c / 2 - 0.25, d, i - c / 2 + 0.25, s, a, Pz(t, o, n, 2))
      : e.panel(d, i - c / 2 + 0.25, d, i + c / 2 - 0.25, s, a, Pz(t, o, n, 2));
  }
}
function Iz(e, t, n, r, i, a, o, s) {
  let c = t + n * 0.02;
  n > 0
    ? e.panel(c, r + a / 2, c, r - a / 2, i, i + o, s)
    : e.panel(c, r - a / 2, c, r + a / 2, i, i + o, s);
}
var Lz = {
  pod: { x0: -59.4, z0: -35.9, x1: 59.4, z1: 35.9, h: 20 },
  wim: { x0: 6, z0: -35.9, x1: 59.4, z1: 35.9, h: 47 },
  tw: {
    x0: -55,
    z0: -21,
    x1: -3,
    z1: 12,
    c: 3.2,
    shaft: 211,
    roof: 226.3,
    top: 239.7,
  },
  ent: { x0: -52, x1: -34, d: 4.5, h: 5.5 },
};
(Lz.ent.x0, Lz.pod.z1 - Lz.ent.d, Lz.ent.x1, Lz.pod.z1, Lz.ent.h);
var GCe = {
    lot: `ikebukuro-east`,
    face: 9.4,
    back: -9.4,
    out: 1,
    z0: -114.4,
    z1: 114.4,
    portal: [14, 34],
    h: 42,
    wingZ: -40,
    wingH: 35,
    run: `seimu`,
    signBg: 2047898,
    body: 15525074,
    wing: 16053490,
    steps: [
      [-2, 38],
      [62, 42],
      [114.4, 34],
    ],
    garden: 2,
  },
  KCe = {
    lot: `ikebukuro-west`,
    face: -8.4,
    back: 8.4,
    out: -1,
    z0: -114.4,
    z1: 114.4,
    portal: [14, 34],
    h: 54,
    wingZ: -30,
    wingH: 40,
    run: `tobu`,
    signBg: 13125150,
    body: 13219223,
    wing: 12174540,
    steps: [
      [44, 54],
      [114.4, 47],
    ],
  };
function* qCe(e, t, n) {
  let r = t.c(`office`),
    i = t.c(`plaster`),
    a = t.c(`doors`),
    o = Math.min(n.face, n.back),
    s = Math.max(n.face, n.back),
    [c, l] = n.portal,
    u = n.face - n.out * 5.5,
    d = (t, r, i, a, o, s, c) =>
      n.out > 0
        ? e.wall(n.face, r, n.face, t, i, a, o, s, c)
        : e.wall(n.face, t, n.face, r, i, a, o, s, c);
  (e.col(16183264).mat(0.45, 0.1, 0.5, G),
    d(n.z0, c, 0, 6, a, 4, 6),
    d(l, n.z1, 0, 6, a, 4, 6),
    e.col(n.body).mat(0.75),
    d(n.z0, c, 6, 7, e.white, 50, 50),
    d(l, n.z1, 6, 7, e.white, 50, 50),
    e.col(15397616).mat(0.3, 0.1, 0.7, G),
    n.out > 0
      ? e.wall(u, l, u, c, 0, 7, a, 4, 6)
      : e.wall(u, c, u, l, 0, 7, a, 4, 6));
  let f = Math.min(u, n.face),
    p = Math.max(u, n.face);
  if (
    (e.col(14276303).mat(0.6),
    e.panel(f, c, p, c, 0, 7),
    e.panel(p, l, f, l, 0, 7),
    e.col(16774884).mat(0.4, 0, 0.7, 1),
    e.quad(f, 7, c, p, 7, c, p, 7, l, f, 7, l),
    !e.coarse)
  ) {
    e.col(10134182).mat(0.4, 0.5);
    for (let t = c + 1.5; t < l - 1; t += 1.6)
      e.box(
        u + n.out * 0.6 - 0.15,
        0,
        t - 0.6,
        u + n.out * 0.6 + 0.15,
        1.05,
        t + 0.6,
      );
    (e.col(3054154).mat(0.4, 0, 0.6, 1),
      e.box(
        Math.min(u + n.out * 0.04, u + n.out * 0.3),
        4.6,
        c + 0.5,
        Math.max(u + n.out * 0.04, u + n.out * 0.3),
        5.2,
        l - 0.5,
      ));
  }
  e.col(3882820).mat(0.5, 0.3, 0.25, 1);
  let m = Math.min(n.face, n.face + n.out * 0.5),
    h = Math.max(n.face, n.face + n.out * 0.5);
  (e.box(m, 5.7, n.z0 + 1, h, 6.2, c - 0.3),
    e.box(m, 5.7, l + 0.3, h, 6.2, n.z1 - 1),
    e.box(m, 7, c - 0.6, h, 7.7, l + 0.6),
    yield,
    n.wingZ,
    n.z1);
  let g = Nz(o, n.z0, s, n.wingZ);
  e.col(n.body).mat(0.8);
  let _ = (t, r) => {
    (t === n.z0 && e.wall(s, t, o, t, 0, 7, i, 4, 3.5),
      r === n.z1 && e.wall(o, r, s, r, 0, 7, i, 4, 3.5),
      n.out > 0
        ? e.wall(o, t, o, r, 0, 7, i, 4, 3.5)
        : e.wall(s, r, s, t, 0, 7, i, 4, 3.5));
  };
  (_(n.z0, n.wingZ), _(n.wingZ, n.z1));
  let v = n.wingZ;
  (n.steps.forEach(([a, c], l) => {
    let u = Nz(o, v, s, a);
    for (let t = 7, a = 0; t < c - 0.1; a++) {
      let o = Math.min(c, t + 4.5);
      (a % 3 == 1
        ? (e.col(13226454).mat(0.3, 0.2, 0.12, G | 32),
          Vk(e, u, t, o, r, 3.4, 4.5))
        : (e.col(n.body).mat(0.75, 0, 0.1, G), Vk(e, u, t, o, i, 4, 4.5)),
        (t = o));
    }
    if ((e.col(12104358).mat(0.7), Wk(e, u, 0.2, c, c + 1), !e.coarse)) {
      e.col(14208957).mat(0.7);
      let r = Math.min(n.face, n.face + n.out * 0.2),
        i = Math.max(n.face, n.face + n.out * 0.2);
      for (let t = v + 6; t < a - 3; t += 12)
        (t < n.portal[0] - 1 || t > n.portal[1] + 1) &&
          e.box(r, 7.7, t - 0.45, i, c, t + 0.45);
      if (
        (e.col(10132634).mat(0.8, 0.2),
        e.box(o + 2, c + 1, v + 4, o + 8, c + 4, v + 12),
        l === n.garden)
      ) {
        (e.col(5209404).mat(1),
          e.flat(o + 1, v + 16, s - 1, a - 3, c + 1.03, t.c(`lawn`), 4, 4));
        let n = e.sub(0, c + 1.03, 0, 0);
        for (let t = v + 20; t < a - 6; t += 9)
          KC(e, o + 4, t, 6, Math.round(t * 17 + 5e3));
        (e.leave(n),
          e.col(15722454).mat(0.6),
          e.box(s - 7, c + 1, v + 22, s - 2, c + 4.2, v + 30));
      }
    }
    v = a;
  }),
    e.col(n.wing).mat(0.4, 0.2, 0.06, G),
    Vk(e, g, 7, n.wingH, t.c(`glass`), 3, 4),
    e.col(16777215).mat(0.5, 0.2),
    Wk(e, g, 0.25, n.wingH, n.wingH + 1.2),
    Wk(e, g, 0.15, 6.6, 7),
    yield,
    Fz(e, t, n.face, n.out, n.wingZ + 6, 18, n.run, n.signBg),
    Fz(e, t, n.face, n.out, n.z1 - 8, 18, n.run, n.signBg),
    e.col(n.signBg).mat(0.5, 0.1, 0.3, 1));
  let y = Math.min(n.face + n.out * 0.02, n.face + n.out * 0.3),
    b = Math.max(n.face + n.out * 0.02, n.face + n.out * 0.3),
    x = (c + l) / 2;
  (e.box(y, 8.2, x - 5.5, b, 11.4, x + 5.5),
    e.col(16777215).mat(0.45, 0, 0.32, G),
    Iz(e, n.face + n.out * 0.3, n.out, x, 8.4, 5.6, 2.8, Ez(t, n.run)));
  let S = (n.steps.find(([e]) => e > x) ?? n.steps[0])[1];
  (e.col(n.signBg).mat(0.5, 0.1, 0.3, 1),
    e.box(y, S - 7, x - 5.4, b, S - 1.4, x + 5.4),
    e.col(16777215).mat(0.45, 0, 0.32, G),
    Iz(e, n.face + n.out * 0.3, n.out, x, S - 6.6, 9.6, 4.8, Ez(t, n.run)),
    n.run === `seimu` &&
      (e.col(16777215).mat(0.5, 0, 0.3, 1),
      e.box(y, n.wingH - 7.5, n.z0 + 12, b, n.wingH - 1.5, n.z0 + 26),
      e.col(16777215).mat(0.45, 0, 0.32, G),
      Iz(
        e,
        n.face + n.out * 0.3,
        n.out,
        n.z0 + 19,
        n.wingH - 7.2,
        11,
        5.5,
        Ez(t, `pargo`),
      )),
    e.solid(o, n.z0, s, c, 0, n.h),
    e.solid(o, l, s, n.z1, 0, n.h),
    e.solid(Math.min(n.back, u), c, Math.max(n.back, u), l, 0, 7),
    e.solid(o, c, s, l, 7, n.h));
}
function Rz(e, t, n) {
  return {
    id: e,
    site: WCe(t.lot),
    name: n,
    near: 240,
    build: (e, n) => qCe(e, n, t),
    far(e) {
      (e.col(t.body).mat(0.8, 0, 0.1, 1),
        e.box(
          Math.min(t.face, t.back),
          0,
          t.z0,
          Math.max(t.face, t.back),
          t.h,
          t.z1,
        ));
    },
    farBoxes: (e, n) => {
      let r = Math.min(t.face, t.back),
        i = Math.max(t.face, t.back);
      return [
        {
          x0: n.x + r,
          x1: n.x + i,
          z0: n.z + t.wingZ,
          z1: n.z + t.z1,
          y0: n.gy,
          y1: n.gy + t.h,
          rgb: [0.72, 0.66, 0.56],
          lit: !0,
        },
        {
          x0: n.x + r,
          x1: n.x + i,
          z0: n.z + t.z0,
          z1: n.z + t.wingZ,
          y0: n.gy,
          y1: n.gy + t.wingH,
          rgb: [0.62, 0.66, 0.7],
          lit: !0,
        },
      ];
    },
    roofs: [
      {
        lx0: Math.min(t.face, t.face - t.out * 5.5),
        lz0: t.portal[0],
        lx1: Math.max(t.face, t.face - t.out * 5.5),
        lz1: t.portal[1],
        y: 7,
      },
    ],
  };
}
(Rz(`ikebukuro-east`, GCe, {
  ja: `池袋駅東口`,
  zh: `池袋站東口`,
  en: `Ikebukuro Station East Exit`,
}),
  Rz(`ikebukuro-west`, KCe, {
    ja: `池袋駅西口`,
    zh: `池袋站西口`,
    en: `Ikebukuro Station West Exit`,
  }));
var zz = {
  x0: -54.4,
  x1: 54.4,
  z0: -28.2,
  z1: 31.9,
  ring: { x: 16, z: 2, r0: 12.6, r1: 14.6, y0: 9, y1: 10.4 },
  theatre: { back: -44, front: -26, hB: 34, hF: 14, z0: -26.5, z1: 30.5 },
};
(zz.ring.x + 22, zz.ring.z);
var Bz = {
  x: -2145,
  z: -1175,
  half: 5.25,
  curb: 3.25,
  west: -2206.6 - -2145,
  east: -2077.2 - -2145,
};
(Bz.x,
  Bz.z,
  r.add({
    新宿公園塔: `新宿パークタワー`,
    模式學院繭大樓: `モード学院コクーンタワー`,
    京玉廣場飯店: `京玉プラザホテル`,
    新宿站西口: `新宿駅西口`,
    高山屋時代廣場: `高山屋 タイムズスクエア`,
    "dokodemo 代代木大樓": `ドコデモ代々木ビル`,
  }));
var Vz = Math.PI,
  Hz = G | 32,
  Uz = (e, t, n, r) => [
    [e, t],
    [e, r],
    [n, r],
    [n, t],
  ];
