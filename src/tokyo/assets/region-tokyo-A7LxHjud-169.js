// tokyo/assets/region-tokyo-A7LxHjud 169 — math
// Lines 69833-70136 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ehe(e, t) {
  let n = yw(22),
    r = t.c(`forumGlass`);
  e.col(16777215).mat(0.05, 0.3, 0.05, 1);
  for (let t = 0; t + 1 < n.length; t++) {
    let [i, a] = n[t],
      [o, s] = n[t + 1];
    if (Math.hypot(o - i, s - a) < 0.05) continue;
    let c = t < 22 ? Sw.top : 0.45;
    (e.wall(o, s, i, a, c, pw.H, r, 3, 3),
      e.wall(i, a, o, s, c, pw.H, r, 3, 3));
  }
  let i = pw.H;
  for (let t = 0; t < 22; t++) {
    let a = n[t],
      o = n[t + 1],
      s = n[n.length - 1 - t],
      c = n[n.length - 2 - t],
      l = Math.max(
        1,
        Math.round(
          Math.max(
            Math.hypot(s[0] - a[0], s[1] - a[1]),
            Math.hypot(c[0] - o[0], c[1] - o[1]),
          ) / 3,
        ),
      );
    for (let t = 0; t < l; t++) {
      let n = t / l,
        u = (t + 1) / l,
        d = a[0] + (s[0] - a[0]) * n,
        f = a[1] + (s[1] - a[1]) * n,
        p = a[0] + (s[0] - a[0]) * u,
        m = a[1] + (s[1] - a[1]) * u,
        h = o[0] + (c[0] - o[0]) * n,
        g = o[1] + (c[1] - o[1]) * n,
        _ = o[0] + (c[0] - o[0]) * u,
        v = o[1] + (c[1] - o[1]) * u;
      (e.quad(p, i, m, _, i, v, h, i, g, d, i, f, r),
        e.quad(d, i, f, h, i, g, _, i, v, p, i, m, r));
    }
  }
}
function the(e) {
  let t = yw(22);
  for (let n = 0; n + 1 < t.length; n++) {
    let [r, i] = t[n],
      [a, o] = t[n + 1],
      s = (r + a) / 2,
      c = (i + o) / 2;
    if (
      c > pw.cz &&
      ((s > -6 && s < 6) || (s > 22 && s < 30) || (s > -32 && s < -24))
    )
      continue;
    let l = Math.hypot(a - r, o - i);
    if (l < 0.05) continue;
    let u = Math.atan2(o - i, a - r);
    e.solidRot(s, c, l / 2 + 0.05, 0.25, u, 0, pw.H);
  }
}
function nhe(e, t) {
  let n = t.c(`granite`);
  for (let r of gw) {
    let i = _w[0],
      a = _w[1];
    if (
      (e.col(14210252).mat(0.7, 0, 0.1, G),
      e.box(r.lx0, 0, i, r.lx1, r.h, a, n, 2, 2, t.c(`white`)),
      !e.coarse)
    ) {
      e.col(5662062).mat(0.15, 0.6, 0.25, G);
      for (let n = 5; n < r.h - 3; n += 6.5)
        (e.box(
          r.lx0 + 1.2,
          n,
          i - 0.08,
          r.lx1 - 1.2,
          n + 2.4,
          i + 0.02,
          t.c(`office`),
        ),
          e.box(r.lx0 - 0.08, n, i + 1.2, r.lx0 + 0.02, n + 2.4, a - 1.2),
          e.box(r.lx1 - 0.02, n, i + 1.2, r.lx1 + 0.08, n + 2.4, a - 1.2));
      (e.col(16777215).emis(0.25, G),
        e.wall(
          r.lx1 - 2,
          i - 0.1,
          r.lx0 + 2,
          i - 0.1,
          0,
          4.2,
          t.c(`doors`),
          2.4,
          4.2,
        ),
        e
          .col(13684940)
          .mat(0.5, 0.3, 0, 0)
          .box(r.lx0 + 1, 4.2, i - 2.5, r.lx1 - 1, 4.6, i));
    }
    e.solid(r.lx0, i, r.lx1, a, 0, r.h);
  }
  if (!e.coarse) {
    e.col(15263974).mat(0.5, 0.2, 0.05, 1);
    for (let [t, n] of [
      [-10, 9.3],
      [20, 19.3],
    ])
      e.box(t - 1.6, n, pw.cz + mw(t) - 0.4, t + 1.6, n + 3.2, hw[1] + 0.5);
  }
}
function rhe(e, t) {
  (e.col(12762288).mat(0.7, 0, 0, 0),
    e.flat(-46, hw[0], 46, hw[1], 0.05, t.c(`granite`), 4, 4));
  let n = [];
  for (let e = -40; e <= 40; e += 8)
    for (let t of [-3.5, 3.2]) n.push([e + (t > 0 ? 4 : 0), t]);
  for (let [t, r] of n)
    (!e.coarse || ((t / 8) | 0) % 2 == 0) &&
      KC(e, t, r, 12 + ((t * 13) & 3), (t * 7 + r * 11) | 0);
  if (!e.coarse) {
    for (let t = -36; t <= 36; t += 16) qC(e, t, 0.05, 0, 4.5);
    e.col(9075300).mat(0.8, 0, 0, 0);
    for (let t = -34; t <= 34; t += 12)
      e.box(t - 1.2, 0.05, -0.4, t + 1.2, 0.48, 0.4);
  }
  (e.col(16777215).mat(0.7, 0, 0.15, G),
    e.box(-46.2, 0, -3.2, -45.4, 1.2, 3.2, e.white),
    e.panel(-46.25, -3, -46.25, 3, 0.1, 1.15, t.c(`forumSign`)),
    e.solid(-46.2, -3.2, -45.4, 3.2, 0, 1.2, `prop`));
  for (let [t, r] of n) e.pole(t, r, 0.3, 0, 4);
}
function* ihe(e, t) {
  (yield* Gme(e, t),
    $me(e, t),
    e.coarse || the(e),
    yield,
    nhe(e, t),
    yield,
    rhe(e, t));
}
function ahe(e, t) {
  let n = yw(8);
  e.col(16777215).mat(0.15, 0.6, 0.2, G);
  for (let r = 0; r + 1 < n.length; r++) {
    let [i, a] = n[r],
      [o, s] = n[r + 1];
    Math.hypot(o - i, s - a) > 0.05 &&
      e.wall(o, s, i, a, 0, pw.H, t.c(`glass`), 12, 12);
  }
  e.col(13685716).mat(0.6, 0.3, 0, 0);
  for (let t = 0; t < 8; t++) {
    let r = n[t],
      i = n[t + 1],
      a = n[n.length - 1 - t],
      o = n[n.length - 2 - t];
    e.quad(
      a[0],
      pw.H,
      a[1],
      o[0],
      pw.H,
      o[1],
      i[0],
      pw.H,
      i[1],
      r[0],
      pw.H,
      r[1],
    );
  }
  e.col(14210252).mat(0.7, 0, 0.1, G);
  for (let n of gw)
    e.box(n.lx0, 0, _w[0], n.lx1, n.h, _w[1], t.c(`granite`), 8, 8);
  let r = Sw.fz0 + Sw.bow * 0.3,
    i = pw.cz - pw.W * 0.6;
  (e.col(9213076).mat(0.6, 0.2, 0.04, G),
    e.box(Sw.lx0, 0, r, Sw.lx1, Sw.band1, i, t.c(`forumStone`), 12, 1.5),
    e.col(16777215).mat(0.75, 0, 0.04, G),
    e.box(
      Sw.lx0,
      Sw.band1,
      r,
      Sw.lx1,
      Sw.par,
      i,
      t.c(`forumStone`),
      12,
      1.5,
      t.c(`lawn`),
    ));
}
function ohe(e) {
  return {
    x: fw.x,
    z: fw.z,
    gy: e.groundHeight(fw.x, fw.z),
    facing: Math.PI / 2,
  };
}
function she(e, t) {
  let n = (e) => fw.x - e,
    r = (e) => fw.z + e,
    i = [
      {
        x0: n(pw.cz + pw.W * 0.8),
        x1: n(pw.cz - pw.W * 0.8),
        z0: r(-pw.L * 0.85),
        z1: r(pw.L * 0.85),
        y0: t.gy,
        y1: t.gy + pw.H,
        rgb: [0.42, 0.5, 0.56],
        lit: !0,
      },
    ];
  i.push({
    x0: n(pw.cz),
    x1: n(Sw.fz0 + Sw.bow * 0.3),
    z0: r(Sw.lx0),
    z1: r(Sw.lx1),
    y0: t.gy,
    y1: t.gy + Sw.par,
    rgb: [0.7, 0.68, 0.64],
    lit: !0,
  });
  for (let e of gw)
    i.push({
      x0: n(_w[1]),
      x1: n(_w[0]),
      z0: r(e.lx0),
      z1: r(e.lx1),
      y0: t.gy,
      y1: t.gy + e.h,
      rgb: [0.66, 0.65, 0.62],
      lit: !0,
    });
  return i;
}
var che = {
    id: `intl-forum`,
    site: ohe,
    near: 360,
    build: ihe,
    far: ahe,
    glass: ehe,
    farBoxes: she,
    blip: !0,
    roofs: Array.from({ length: 11 }, (e, t) => {
      let n = -pw.L + (2 * pw.L * t) / 11,
        r = n + (2 * pw.L) / 11,
        i = Math.max(mw(n), mw(r), n < 0 && r > 0 ? pw.W : 0);
      return { lx0: n, lz0: pw.cz - i, lx1: r, lz1: pw.cz + i, y: pw.H };
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
        lz: pw.cz,
        turn: Math.PI / 2,
        name: {
          zh: `東京國際論壇 玻璃大廳`,
          en: `Tokyo International Forum Glass Hall`,
        },
      },
    ],
  },
  Aw = { x: 47.5, z: 324 },
  jw = 12,
  Mw = 9.5,
  Nw = 7,
  Pw = 5.2,
  Fw = 20.4,
  Iw = 24.6,
  Lw = 14538440,
  Rw = { lx: 6.2, lz: -3.7, half: 4.2 },
  zw = 1.3,
  lhe = 30.2;
function uhe(e) {
  let t = [];
  t.push(-12, -9.5);
  for (let n = 0; n <= e; n++) {
    let r = -Math.PI / 2 + (n / e) * (Math.PI / 2);
    t.push(5 + Math.cos(r) * Nw, -2.5 + Math.sin(r) * Nw);
  }
  return (t.push(jw, Mw, -12, Mw), t);
}
function dhe(e, t) {
  return [
    { y0: 0, y1: Pw, cell: e.c(`wakoShow`), tw: t },
    { y0: Pw, y1: 12.8, cell: e.c(`wakoBay`), tw: t },
    { y0: 12.8, y1: Fw, cell: e.c(`wakoBay`), tw: t },
  ];
}
