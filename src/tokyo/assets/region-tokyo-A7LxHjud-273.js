// tokyo/assets/region-tokyo-A7LxHjud 273 — col
// Lines 101353-101693 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Ewe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 12 : 4;
  if (
    (e.col(14210252).mat(0.8, 0, 0, 0),
    e.flat(gV.x0, gV.z0 + 4.5, gV.x1, gV.z1, 0.04, n, r, r),
    !e.coarse)
  ) {
    e.col(8157816).mat(0.8, 0, 0, 0);
    for (let t of [-6, 6, 15])
      e.flat(gV.x0 + 1, t - 0.3, gV.x1 - 1, t + 0.3, 0.06);
  }
  e.col(13617598).mat(0.85, 0, 0, 0);
  for (let t = 0; t < 4; t++) {
    let i = gV.z0 + 4.5 - (t + 1) * 1.1,
      a = 0.42 * (t + 1);
    (e.box(gV.x0 + 2, 0, i, gV.x1 - 6, a, i + 1.1, n, r, r, n),
      e.coarse ||
        (t >= 2 &&
          (e.push().col(10119744).mat(0.8, 0, 0, 0),
          e.flat(gV.x0 + 3, i + 0.15, gV.x1 - 7, i + 0.95, a + 0.02),
          e.pop())),
      e.floor(gV.x0 + 2, i, gV.x1 - 6, i + 1.1, a));
  }
  yield;
  let i = [
      [-15, 6],
      [15, 6],
      [0, 18],
    ],
    a = 51;
  for (let [t, n] of i)
    (e.push().col(9078400).mat(0.8, 0, 0, 0),
      e.cylY(t, n, 0, 0.5, 2, e.coarse ? 6 : 12, 2, !0),
      e.col(10512954).mat(0.8, 0, 0, 0),
      e.coarse ||
        e.lathe(
          t,
          n,
          [2.05, 0.38, 2.4, 0.45, 2.4, 0.52],
          12,
          0,
          e.white,
          !1,
          !0,
        ),
      e.col(4141606),
      e.flat(t - 1.6, n - 1.6, t + 1.6, n + 1.6, 0.52),
      e.pop(),
      KC(e, t, n, 7, a++),
      e.pole(t, n, 2.1, 0, 0.5));
  for (let [t, n] of [
    [-20, -8],
    [20, -8],
    [-20, 20],
    [20, 20],
    [0, -10],
  ])
    (e.push().col(3816768).mat(0.5, 0.6, 0, 0),
      e.cylY(t, n, 0, 9, 0.14, 6, 0.1, !1),
      e.col(16184558).mat(0.3, 0, 0.7, 1),
      e.box(t - 0.5, 8.6, n - 0.18, t + 0.5, 8.9, n + 0.18),
      e.col(14217471).mat(0.3, 0, 0.8, 1),
      e.coarse ||
        e.flat(t - 0.45, n - 0.15, t + 0.45, n + 0.15, 8.58, e.white, 0, 0, !1),
      e.pop(),
      e.pole(t, n, 0.18, 0, 9));
  if (!e.coarse) {
    e.push().col(16773320).mat(0.4, 0, 0.9, 1);
    let t = [
      [-20, -8],
      [20, 20],
      [20, -8],
      [-20, 20],
    ];
    for (let n = 0; n < 4; n += 2) {
      let [r, i] = t[n],
        [a, o] = t[n + 1];
      for (let t = 1; t < 18; t++) {
        let n = t / 18,
          s = 8.4 - 2.2 * Math.sin(n * Math.PI),
          c = r + (a - r) * n,
          l = i + (o - i) * n;
        e.box(c - 0.09, s - 0.18, l - 0.09, c + 0.09, s, l + 0.09);
      }
    }
    e.pop();
  }
}
var Dwe = {
    id: `cinecity-plaza`,
    site: oV(gV.x, gV.z),
    name: { ja: `シネシティ広場`, zh: `電影城廣場`, en: `Cinecity Plaza` },
    near: 220,
    build: Ewe,
    far: (e) => {
      (e.col(13617858).mat(0.85, 0, 0, 0),
        e.flat(gV.x0, gV.z0, gV.x1, gV.z1, 0.04));
    },
    bounds: () => [gV.x + gV.x0, gV.z + gV.z0, gV.x + gV.x1, gV.z + gV.z1],
    farBoxes: () => [],
    anchors: [
      {
        key: `cinecity-plaza`,
        lx: 0,
        lz: 18,
        turn: 0,
        name: { zh: `電影城廣場`, en: `Cinecity Plaza` },
      },
    ],
  },
  _V = { x: -2040, z: 44 },
  vV = { x0: -17.5, x1: 17.5, z0: -21.5, z1: 21.5, h: 36 },
  yV = { x0: -5, x1: 17.5, z0: -18, z1: 19, h: 130 };
function bV(e, t, n, r, i, a) {
  rM(e, t, n, r, i, a);
}
function xV(e, t, n, r, i, a = !1, o = !1) {
  let s = XB(i),
    c = [];
  for (let e = 0; e < t.length; e++) {
    let r = t[Math.max(0, e - 1)].c,
      i = t[Math.min(t.length - 1, e + 1)].c,
      a = i[0] - r[0],
      o = i[1] - r[1],
      s = i[2] - r[2],
      l = Math.hypot(a, o, s) || 1;
    ((a /= l), (o /= l), (s /= l));
    let u = -s,
      d = a,
      f = Math.hypot(u, d) || 1;
    ((u /= f), (d /= f));
    let p = -d * o,
      m = d * a - u * s,
      h = u * o,
      g = t[e],
      _ = [];
    for (let e = 0; e < n; e++) {
      let t = (e / n) * Math.PI * 2,
        r = Math.cos(t) * g.rx,
        i = Math.sin(t) * g.ry;
      _.push([g.c[0] + u * r + p * i, g.c[1] + m * i, g.c[2] + d * r + h * i]);
    }
    c.push(_);
  }
  for (let i = 0; i + 1 < c.length; i++)
    for (let a = 0; a < n; a++) {
      let o = (a + 1) % n,
        l = c[i][a],
        u = c[i][o],
        d = c[i + 1][o],
        f = c[i + 1][a],
        p = (t[i].c[0] + t[i + 1].c[0]) / 2,
        m = (t[i].c[1] + t[i + 1].c[1]) / 2,
        h = (t[i].c[2] + t[i + 1].c[2]) / 2,
        g = (l[0] + u[0] + d[0] + f[0]) / 4,
        _ = (l[1] + u[1] + d[1] + f[1]) / 4,
        v = (l[2] + u[2] + d[2] + f[2]) / 4,
        y = Math.sin(((a + 0.5) / n) * Math.PI * 2);
      (e.col(r, (0.82 + 0.16 * y) * (0.9 + s.range(0, 0.2))),
        bV(e, l, u, d, f, [g - p, _ - m, v - h]));
    }
  let l = (i, a) => {
    let o = t[i].c,
      s = c[i];
    e.col(r, 0.8);
    for (let r = 0; r < n; r++) {
      let c = s[r],
        l = s[(r + 1) % n];
      Owe(e, o, c, l, [
        (o[0] - t[i - a].c[0]) * 1,
        0,
        (o[2] - t[i - a].c[2]) * 1,
      ]);
    }
  };
  (a && t.length > 1 && l(0, -1), o && t.length > 1 && l(t.length - 1, 1));
}
function Owe(e, t, n, r, i) {
  let a = n[0] - t[0],
    o = n[1] - t[1],
    s = n[2] - t[2],
    c = r[0] - t[0],
    l = r[1] - t[1],
    u = r[2] - t[2],
    d = o * u - s * l,
    f = s * c - a * u,
    p = a * l - o * c;
  d * i[0] + f * i[1] + p * i[2] >= 0
    ? e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2])
    : e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]);
}
function SV(e, t, n, r) {
  (e.triFace(t[0], t[1], t[2], n[0], n[1], n[2], r[0], r[1], r[2]),
    e.triFace(t[0], t[1], t[2], r[0], r[1], r[2], n[0], n[1], n[2]));
}
function kwe(e) {
  let t = 6975076,
    n = e.coarse ? 6 : 10;
  (e.push().mat(0.75, 0.05, 0.05, 1),
    xV(
      e,
      [
        { c: [0, -1, 6.5], rx: 2.2, ry: 2.3 },
        { c: [0, 3, 5.6], rx: 2.1, ry: 2.1 },
        { c: [0, 6.5, 4], rx: 1.95, ry: 1.9 },
        { c: [0, 9, 2.2], rx: 1.8, ry: 1.8 },
      ],
      n,
      t,
      11,
    ),
    bwe(e, 10.4, 2.4, -0.3, () => {
      (xV(
        e,
        [
          { c: [0, 10.4, 2.6], rx: 1.9, ry: 1.6 },
          { c: [0, 11, 1.2], rx: 2.15, ry: 1.95 },
          { c: [0, 11.2, -0.4], rx: 2, ry: 1.85 },
          { c: [0, 11, -2], rx: 1.65, ry: 1.45 },
          { c: [0, 10.9, -3.5], rx: 1.3, ry: 1.1 },
          { c: [0, 10.9, -4.9], rx: 1.05, ry: 0.85 },
          { c: [0, 10.95, -5.9], rx: 0.82, ry: 0.62 },
        ],
        n,
        t,
        12,
        !0,
        !0,
      ),
        xV(
          e,
          [
            { c: [0, 9.3, 0.4], rx: 1.7, ry: 0.85 },
            { c: [0, 8.7, -1.6], rx: 1.4, ry: 0.7 },
            { c: [0, 7.9, -3.4], rx: 1.1, ry: 0.55 },
            { c: [0, 7.35, -4.6], rx: 0.82, ry: 0.42 },
          ],
          n,
          $B(t, 0.9),
          13,
          !1,
          !0,
        ),
        e.col(5903380).mat(0.6, 0, 0.12, 1));
      for (let t of [-1, 1]) {
        let n = [t * 1.35, 10, -0.3],
          r = [t * 1, 10.1, -4.4],
          i = [t * 0.7, 7.7, -4],
          a = [t * 1.25, 9.1, -0.6];
        (bV(e, n, r, i, a, [t, 0, 0]), bV(e, n, r, i, a, [-t, 0, 0]));
      }
      if (
        (bV(
          e,
          [-1.3, 10.1, -0.2],
          [1.3, 10.1, -0.2],
          [1.3, 8.9, 0.1],
          [-1.3, 8.9, 0.1],
          [0, 0, -1],
        ),
        e.col(9054762),
        bV(
          e,
          [-0.7, 9, -0.4],
          [0.7, 9, -0.4],
          [0.5, 8.1, -3.2],
          [-0.5, 8.1, -3.2],
          [0, 1, 0],
        ),
        e.col(4854290),
        bV(
          e,
          [-1.3, 9.95, -0.3],
          [1.3, 9.95, -0.3],
          [0.8, 10.25, -5.6],
          [-0.8, 10.25, -5.6],
          [0, -1, 0],
        ),
        !e.coarse)
      ) {
        e.col(15262412).mat(0.5, 0, 0.05, 0);
        for (let t of [-1, 1])
          for (let n = 0; n < 7; n++) {
            let r = -0.8 - n * 0.68,
              i = 0.42 - n * 0.025,
              a = t * (1.3 - n * 0.075),
              o = 10.2 + n * 0.006;
            SV(
              e,
              [a, o, r + i / 2],
              [a, o, r - i / 2],
              [a * 0.97, o - 0.55 + n * 0.02, r],
            );
            let s = n / 6,
              c = t * (1.25 - s * 0.48),
              l = 9.25 - s * 1.75,
              u = -0.9 - s * 3.5;
            SV(
              e,
              [c, l, u + i / 2],
              [c, l, u - i / 2],
              [c * 0.96, l + 0.48, u],
            );
          }
        e.col($B(t, 0.75)).mat(0.8, 0, 0, 0);
        for (let n of [-1, 1])
          (e.obox(n * 1.25, 12.25, -1.7, 0.55, 0.28, 0.95, n * 0.25),
            e.push().col(16758320).mat(0.3, 0, 0.9, 1),
            e.obox(n * 1.55, 11.75, -1.75, 0.18, 0.16, 0.34, n * 0.25),
            e.col(1314832).mat(0.3, 0, 0, 0),
            e.obox(n * 1.7, 11.75, -1.75, 0.04, 0.1, 0.08, n * 0.25),
            e.pop(),
            e.col(2763302),
            e.obox(n * 0.42, 11.35, -5.95, 0.14, 0.1, 0.08),
            e.col($B(t, 0.75)));
        e.col($B(t, 0.7));
        for (let t = 0; t < 6; t++)
          e.obox(0, 12.8 - t * 0.18, 1.6 - t * 1.15, 0.5 - t * 0.05, 0.2, 0.4);
      }
    }),
    e.col(7829612).mat(0.7, 0, 0, 0));
  for (let [t, n, r, i] of [
    [0, 12.6, 2.8, 1],
    [0, 11.6, 4, 1.6],
    [0, 9.6, 5.3, 2.2],
    [0, 7.3, 6.4, 2.6],
    [0, 4.6, 7.4, 2.8],
    [0, 2, 8, 2.6],
  ])
    for (let a of e.coarse ? [0] : [-0.5, 0, 0.5]) {
      let o = a === 0 ? i : i * 0.62;
      SV(
        e,
        [t + a, n, r - 0.75],
        [t + a, n, r + 0.75],
        [t + a * 1.4, n + o * 0.9, r + 0.5 + o * 0.35],
      );
    }
  e.pop();
}
