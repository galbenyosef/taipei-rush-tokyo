// tokyo/assets/region-tokyo-A7LxHjud 211 — col
// Lines 82786-83056 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* pye(e, t) {
  let n = Tj(e, Nj.x, Nj.z),
    { x0: r, x1: i, z0: a, z1: o, h: s, atrium: c } = Wj;
  e.col(15922420).mat(0.45, 0.25, 0.12, G | 32);
  let l = e.coarse ? 3 : 1;
  (e.wall(r, o, i, o, 6, s, t.c(`office`), 3.6 * l, 4 * l),
    e.wall(r, c, r, o, 6, s, t.c(`office`), 3.6 * l, 4 * l),
    e.wall(i, o, i, c, 6, s, t.c(`office`), 3.6 * l, 4 * l),
    e.wall(i, c, r, c, s - 4, s, t.c(`office`), 3.6 * l, 4),
    e.col(13620438).mat(0.4, 0.3, 0.3, G));
  let u = t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1);
  (e.wall(r, o, i, o, 0, 6, u, 3.2, 6),
    e.wall(r, c, r, o, 0, 6, u, 3.2, 6),
    e.wall(i, o, i, c, 0, 6, u, 3.2, 6),
    yield);
  let d = s - 4;
  e.col(13688292).mat(0.1, 0.35, 0.3, G);
  let f = t.c(`glass`);
  if (
    (e.wall(i, a, r, a, 0, d, f, 3, 4.4),
    e.wall(r, a, r, c, 0, d, f, 3, 4.4),
    e.wall(i, c, i, a, 0, d, f, 3, 4.4),
    e.col(14738662).mat(0.6, 0.1, 0, 0),
    e.flat(r, a, i, c, d),
    !e.coarse)
  ) {
    e.col(16054006).mat(0.35, 0.6, 0.1, 1);
    for (let t = r + 4.5; t < i - 1; t += 4.5)
      e.box(t - 0.18, 0, a - 0.7, t + 0.18, d, a - 0.05);
    for (let t = 8.8; t < d - 1; t += 8.8)
      e.box(r - 0.1, t - 0.15, a - 0.5, i + 0.1, t + 0.15, a - 0.05);
    for (let t = a + 5; t < c - 1; t += 5)
      (e.box(r - 0.7, 0, t - 0.18, r - 0.05, d, t + 0.18),
        e.box(i + 0.05, 0, t - 0.18, i + 0.7, d, t + 0.18));
    (e.col(2764854).mat(0.3, 0.2, 0.5, 1),
      e.panel(i - 6, c - 0.6, r + 6, c - 0.6, 7, 16));
  }
  if (
    (yield,
    e.col(16185074).mat(0.5, 0.2, 0.06, 1),
    e.box(
      r - 2,
      s + 1.2,
      a - 2.5,
      i + 1,
      s + 2,
      o + 1.5,
      e.white,
      0,
      0,
      null,
      !0,
    ),
    e.col(11054254).mat(0.6, 0.4, 0, 0),
    !e.coarse)
  )
    for (let [t, n] of [
      [r + 1, a + 1],
      [i - 1, a + 1],
      [r + 1, o - 1],
      [i - 1, o - 1],
    ])
      e.box(t - 0.3, s, n - 0.3, t + 0.3, s + 1.25, n + 0.3);
  (e.col(10133152).mat(0.8, 0, 0, 0),
    e.flat(r, c, i, o, s),
    e.col(13159630).mat(0.5, 0.6, 0, 0));
  let p = -982,
    m = 1084;
  if ((e.box(-986, s + 2, 1080, -978, s + 5, 1088), e.coarse))
    e.rod(p, s + 5, m, p, s + 30, m, 0.6, 4, 0.2);
  else {
    for (let [t, n] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      e.rod(
        p + t * 1.4,
        s + 5,
        m + n * 1.4,
        p + t * 0.25,
        s + 30,
        m + n * 0.25,
        0.09,
        4,
      );
    for (let t = s + 7; t < s + 29; t += 3) {
      let n = 1.4 - ((t - s - 5) / 25) * 1.15;
      e.obox(p, t, m, n, 0.05, n);
    }
    (e.col(15263972).mat(0.5, 0.3, 0, 0),
      e.lathe(-994, 1090, [0.01, s + 2.6, 2.4, s + 3.4, 2.6, s + 4], 10),
      e.rod(-994, s + 2, 1090, -994, s + 2.8, 1090, 0.25, 6));
  }
  (Kk(e, p, s + 30, m, 0.4), e.solid(r, a, i, o, 0, s + 2), e.leave(n));
}
function* mye(e, t) {
  let n = Tj(e, Nj.x, Nj.z),
    { x0: r, x1: i, z0: a, z1: o } = fye;
  (e.col(15266016).mat(0.95, 0, 0, 0),
    e.flat(
      r,
      a + 4,
      i,
      o,
      Fj,
      t.c(`lawn`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ),
    e.col(14077888).mat(0.85, 0, 0.03, G),
    e.flat(r, a, i, a + 4, Fj, t.c(`paving`), 4, 4));
  let s = -992,
    c = 1024,
    l = new le(9107),
    u = e.coarse ? 12 : 26,
    d = [];
  for (let e = 0; e < u; e++) {
    let t = -(e / u) * Math.PI * 2,
      n =
        1 +
        0.16 * Math.sin(t * 3 + 0.7) +
        0.08 * Math.sin(t * 5 + 2.1) +
        (l.next() - 0.5) * 0.06;
    d.push([s + Math.cos(t) * 15 * n, c + Math.sin(t) * 9.5 * n]);
  }
  (e.col(2376010).mat(0.06, 0.3, 0.02, 1),
    Mj(e, d, 0.055, s, c),
    e.col(9341568).mat(0.9, 0, 0, 0));
  for (let t = 0; t < d.length; t += e.coarse ? 4 : 1) {
    let n = d[t],
      r = 0.35 + l.next() * 0.45;
    e.obox(n[0], Fj + r * 0.4, n[1], r, r * 0.45, r * 0.8, l.next() * 3);
  }
  yield;
  let f = 51;
  for (let [t, n, r] of [
    [-1009, 1018, 7],
    [-976, 1014, 6.5],
    [-1004, 1036, 7.5],
    [-979, 1034, 6],
  ])
    (GC(e, t, n, r, f++), e.pole(t, n, 0.3, 0, 3));
  for (let [t, n, r] of [
    [-1011, 1008, 7.5],
    [-986, 1009, 8],
    [-973, 1024, 7.5],
    [-995, 1040, 8],
    [-1012, 1028, 7],
  ])
    (KC(e, t, n, r, f++), e.pole(t, n, 0.3, 0, 3));
  if (!e.coarse) {
    (e.col(12104358).mat(0.85, 0, 0, 0),
      e.box(-1006, 0.05, 1023, -1002, 0.45, 1025));
    for (let [t, n] of [
      [-997, 1013],
      [-984, 1034],
    ])
      (e.box(t - 0.35, Fj, n - 0.35, t + 0.35, 0.7, n + 0.35),
        e.col(16773328).mat(0.5, 0, 0.5, 1),
        e.box(t - 0.3, 0.7, n - 0.3, t + 0.3, 1.2, n + 0.3),
        e.col(12104358).mat(0.85, 0, 0, 0),
        e.lathe(t, n, [0.6, 1.2, 0.02, 1.6], 4, Math.PI / 4),
        e.pole(t, n, 0.4, 0, 1.6, `prop`));
  }
  e.leave(n);
}
function* hye(e, t) {
  (yield* pye(e, t), yield, yield* mye(e, t));
}
function gye(e, t) {
  let n = Tj(e, Nj.x, Nj.z),
    { x0: r, x1: i, z0: a, z1: o, h: s, atrium: c } = Wj;
  (e.col(15922420).mat(0.45, 0.25, 0.12, G | 32),
    Oj(e, r, c, i, o, 0, s, t.c(`office`), 14.4, 16, 10133152),
    e.col(13688292).mat(0.1, 0.35, 0.3, G),
    Oj(e, r, a, i, c, 0, s - 4, t.c(`glass`), 12, 17.6, 14738662),
    e.leave(n));
}
var _ye = {
    id: `roppongi-tv-station`,
    site: Pj,
    name: { ja: `毛利庭園`, zh: `毛利庭園`, en: `Mohri Garden` },
    near: 230,
    build: hye,
    far: gye,
    bounds: () => [-1014, 1003, -968, 1102],
    farBoxes: (e, t) => [
      {
        x0: Wj.x0,
        x1: Wj.x1,
        z0: Wj.z0,
        z1: Wj.z1,
        y0: t.gy,
        y1: t.gy + Wj.h,
        rgb: [0.62, 0.66, 0.68],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `roppongi-mohri-garden`,
        lx: -1e3 - Nj.x,
        lz: 1004 - Nj.z,
        turn: Math.PI * 1.15,
        name: { zh: `毛利庭園`, en: `Mohri Garden` },
      },
    ],
    blip: !1,
  },
  Gj = {
    x0: -1121,
    x1: -967.6,
    nw0: 1103,
    road0: 1109,
    road1: 1118,
    sw1: 1124,
    shop1: 1134,
    kerb: 0.16,
  },
  Kj = { x0: -1121, x1: -1080, z0: 1062, z1: 1102, h: 88 };
function qj(e, t, n, r, i, a) {
  if ((KC(e, t, n, r, i), e.coarse)) return;
  e.push()
    .col(a ? 7310544 : 11846884)
    .mat(0.6, 0, a ? 0.4 : 0.32, 1);
  let o = [
      [0.95, 0.14],
      [0.8, 0.27],
      [0.6, 0.3],
      [0.42, 0.22],
    ],
    s = (e) => {
      for (let t = 0; t + 1 < o.length; t++) {
        let [n, r] = o[t],
          [i, a] = o[t + 1];
        if (e <= n && e >= i) return r + ((a - r) * (n - e)) / (n - i);
      }
      return o[o.length - 1][1];
    },
    c = 0.05;
  for (let a = 0; a < 3; a++) {
    let o = i * 1.7 + (a * Math.PI * 2) / 3,
      l = null;
    for (let i = 0; i <= 20; i++) {
      let a = i / 20,
        u = 0.92 - 0.46 * a,
        d = o + a * Math.PI * 2 * 2.6,
        f = s(u) * r + 0.14,
        p = [t + Math.cos(d) * f, u * r, n + Math.sin(d) * f];
      (l &&
        e.quad(
          p[0],
          p[1] - c,
          p[2],
          l[0],
          l[1] - c,
          l[2],
          l[0],
          l[1] + c,
          l[2],
          p[0],
          p[1] + c,
          p[2],
        ),
        (l = p));
    }
  }
  e.pop();
}
