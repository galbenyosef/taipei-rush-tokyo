// tokyo/assets/region-tokyo-55J_WESF 169 — math
// Lines 69742-70045 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Hme(e, t) {
  let n = gw(22),
    r = t.c(`forumGlass`);
  e.col(16777215).mat(0.05, 0.3, 0.05, 1);
  for (let t = 0; t + 1 < n.length; t++) {
    let [i, a] = n[t],
      [o, s] = n[t + 1];
    if (Math.hypot(o - i, s - a) < 0.05) continue;
    let c = t < 22 ? yw.top : 0.45;
    (e.wall(o, s, i, a, c, uw.H, r, 3, 3),
      e.wall(i, a, o, s, c, uw.H, r, 3, 3));
  }
  let i = uw.H;
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
function Ume(e) {
  let t = gw(22);
  for (let n = 0; n + 1 < t.length; n++) {
    let [r, i] = t[n],
      [a, o] = t[n + 1],
      s = (r + a) / 2,
      c = (i + o) / 2;
    if (
      c > uw.cz &&
      ((s > -6 && s < 6) || (s > 22 && s < 30) || (s > -32 && s < -24))
    )
      continue;
    let l = Math.hypot(a - r, o - i);
    if (l < 0.05) continue;
    let u = Math.atan2(o - i, a - r);
    e.solidRot(s, c, l / 2 + 0.05, 0.25, u, 0, uw.H);
  }
}
function Wme(e, t) {
  let n = t.c(`granite`);
  for (let r of pw) {
    let i = mw[0],
      a = mw[1];
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
      e.box(t - 1.6, n, uw.cz + dw(t) - 0.4, t + 1.6, n + 3.2, fw[1] + 0.5);
  }
}
function Gme(e, t) {
  (e.col(12762288).mat(0.7, 0, 0, 0),
    e.flat(-46, fw[0], 46, fw[1], 0.05, t.c(`granite`), 4, 4));
  let n = [];
  for (let e = -40; e <= 40; e += 8)
    for (let t of [-3.5, 3.2]) n.push([e + (t > 0 ? 4 : 0), t]);
  for (let [t, r] of n)
    (!e.coarse || ((t / 8) | 0) % 2 == 0) &&
      UC(e, t, r, 12 + ((t * 13) & 3), (t * 7 + r * 11) | 0);
  if (!e.coarse) {
    for (let t = -36; t <= 36; t += 16) WC(e, t, 0.05, 0, 4.5);
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
function* Kme(e, t) {
  (yield* Nme(e, t),
    Vme(e, t),
    e.coarse || Ume(e),
    yield,
    Wme(e, t),
    yield,
    Gme(e, t));
}
function qme(e, t) {
  let n = gw(8);
  e.col(16777215).mat(0.15, 0.6, 0.2, G);
  for (let r = 0; r + 1 < n.length; r++) {
    let [i, a] = n[r],
      [o, s] = n[r + 1];
    Math.hypot(o - i, s - a) > 0.05 &&
      e.wall(o, s, i, a, 0, uw.H, t.c(`glass`), 12, 12);
  }
  e.col(13685716).mat(0.6, 0.3, 0, 0);
  for (let t = 0; t < 8; t++) {
    let r = n[t],
      i = n[t + 1],
      a = n[n.length - 1 - t],
      o = n[n.length - 2 - t];
    e.quad(
      a[0],
      uw.H,
      a[1],
      o[0],
      uw.H,
      o[1],
      i[0],
      uw.H,
      i[1],
      r[0],
      uw.H,
      r[1],
    );
  }
  e.col(14210252).mat(0.7, 0, 0.1, G);
  for (let n of pw)
    e.box(n.lx0, 0, mw[0], n.lx1, n.h, mw[1], t.c(`granite`), 8, 8);
  let r = yw.fz0 + yw.bow * 0.3,
    i = uw.cz - uw.W * 0.6;
  (e.col(9213076).mat(0.6, 0.2, 0.04, G),
    e.box(yw.lx0, 0, r, yw.lx1, yw.band1, i, t.c(`forumStone`), 12, 1.5),
    e.col(16777215).mat(0.75, 0, 0.04, G),
    e.box(
      yw.lx0,
      yw.band1,
      r,
      yw.lx1,
      yw.par,
      i,
      t.c(`forumStone`),
      12,
      1.5,
      t.c(`lawn`),
    ));
}
function Jme(e) {
  return {
    x: lw.x,
    z: lw.z,
    gy: e.groundHeight(lw.x, lw.z),
    facing: Math.PI / 2,
  };
}
function Yme(e, t) {
  let n = (e) => lw.x - e,
    r = (e) => lw.z + e,
    i = [
      {
        x0: n(uw.cz + uw.W * 0.8),
        x1: n(uw.cz - uw.W * 0.8),
        z0: r(-uw.L * 0.85),
        z1: r(uw.L * 0.85),
        y0: t.gy,
        y1: t.gy + uw.H,
        rgb: [0.42, 0.5, 0.56],
        lit: !0,
      },
    ];
  i.push({
    x0: n(uw.cz),
    x1: n(yw.fz0 + yw.bow * 0.3),
    z0: r(yw.lx0),
    z1: r(yw.lx1),
    y0: t.gy,
    y1: t.gy + yw.par,
    rgb: [0.7, 0.68, 0.64],
    lit: !0,
  });
  for (let e of pw)
    i.push({
      x0: n(mw[1]),
      x1: n(mw[0]),
      z0: r(e.lx0),
      z1: r(e.lx1),
      y0: t.gy,
      y1: t.gy + e.h,
      rgb: [0.66, 0.65, 0.62],
      lit: !0,
    });
  return i;
}
var Xme = {
    id: `intl-forum`,
    site: Jme,
    near: 360,
    build: Kme,
    far: qme,
    glass: Hme,
    farBoxes: Yme,
    blip: !0,
    roofs: Array.from({ length: 11 }, (e, t) => {
      let n = -uw.L + (2 * uw.L * t) / 11,
        r = n + (2 * uw.L) / 11,
        i = Math.max(dw(n), dw(r), n < 0 && r > 0 ? uw.W : 0);
      return { lx0: n, lz0: uw.cz - i, lx1: r, lz1: uw.cz + i, y: uw.H };
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
        lz: uw.cz,
        turn: Math.PI / 2,
        name: {
          zh: `東京國際論壇 玻璃大廳`,
          en: `Tokyo International Forum Glass Hall`,
        },
      },
    ],
  },
  Dw = { x: 47.5, z: 324 },
  Ow = 12,
  kw = 9.5,
  Aw = 7,
  jw = 5.2,
  Mw = 20.4,
  Nw = 24.6,
  Pw = 14538440,
  Fw = { lx: 6.2, lz: -3.7, half: 4.2 },
  Iw = 1.3,
  Zme = 30.2;
function Qme(e) {
  let t = [];
  t.push(-12, -9.5);
  for (let n = 0; n <= e; n++) {
    let r = -Math.PI / 2 + (n / e) * (Math.PI / 2);
    t.push(5 + Math.cos(r) * Aw, -2.5 + Math.sin(r) * Aw);
  }
  return (t.push(Ow, kw, -12, kw), t);
}
function $me(e, t) {
  return [
    { y0: 0, y1: jw, cell: e.c(`wakoShow`), tw: t },
    { y0: jw, y1: 12.8, cell: e.c(`wakoBay`), tw: t },
    { y0: 12.8, y1: Mw, cell: e.c(`wakoBay`), tw: t },
  ];
}
