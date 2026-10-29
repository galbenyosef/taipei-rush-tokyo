// tokyo/assets/region-tokyo-A7LxHjud 256 — math
// Lines 95978-96229 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var rR = { x: -1736.75, z: 1379 },
  K = { x0: -17, x1: 18.25, z0: -17, z1: 23.5 },
  q = {
    deck: 7.5,
    waist0: 72,
    waist1: 80,
    petal: 76,
    off: 205,
    gal: 214.5,
    ceil: 220.5,
    roof: 225,
    mast: 229.7,
  },
  iR = {
    x0: -19.25,
    x1: 46.75,
    z0: -37,
    z1: -17,
    beam0: 7,
    beam1: 10.6,
    eave: 14.4,
    crest: 19.4,
  },
  J = {
    x0: 7,
    x1: K.x1,
    z0: K.z0,
    z1: -3,
    top: 30,
    ex0: 8,
    ex1: 10.5,
    eTop: -16,
    eBot: -4,
  },
  aR = {
    east: { x0: K.x1, x1: 23.25, z0: -14, z1: 27.5 },
    sky: { x0: 23.25, x1: 48.75, z0: -14, z1: -9 },
    south: { x0: 12, x1: K.x1, z0: K.z1, z1: 27.5 },
    bridge: { x0: 12, x1: 17, z0: 27.5, z1: 58 },
    stair: { x0: 12, x1: 15.5, z0: 58, z1: 72 },
  },
  oR = [8, 6, 4, 2],
  sR = [9, 7, 5, 3],
  cR = 0.4,
  lR = { x0: -8, x1: 9, z0: -8, z1: 13 },
  uR = { x0: 13.5, x1: 15.5, zTop: -2, zBot: 16 },
  dR = { x0: 12.5, x1: 16.5, z0: -3, z1: 7, h: 3 },
  fR = { x0: 4, x1: 12, z0: -14, z1: -4 },
  pR = { x0: 7, x1: 11, z0: -13, z1: -9, h: 3.4 };
function XSe(e) {
  let t = (t, n, r) => ({ x: rR.x + t, z: rR.z + n, y: e + r }),
    n = (e, n, r, i) => ({ key: e, ...t(n, r, i) });
  return {
    doors: [
      n(`street`, K.x1 + 1.1, 12, 0),
      n(`gallery`, fR.x0 - 1, -9, q.gal),
      n(`roof`, pR.x0 - 1, -11, q.roof),
    ],
    galleryArrive: { ...t(fR.x0 - 4.5, -9, q.gal), heading: -Math.PI / 2 },
    streetArrive: { ...t(K.x1 + 4.6, 12, 0), heading: Math.PI / 2 },
  };
}
function mR(e, t) {
  let n = 0;
  return (
    oR.forEach((r, i) => {
      e < K.x0 + r && t < K.z0 + r && (n = Math.max(n, cR * (i + 1)));
    }),
    sR.forEach((r, i) => {
      e > K.x1 - r && t > K.z1 - r && (n = Math.max(n, cR * (i + 1)));
    }),
    n
  );
}
var hR = (e, t) => (e < K.x0 + oR[2] && t < K.z0 + oR[2] ? 1.25 : 1.8),
  gR = [
    [K.x1, K.z0],
    [K.x0, K.z0],
    [K.x0, K.z1],
    [K.x1, K.z1],
  ];
function _R() {
  let e = [],
    t = [...oR.map((e) => K.x0 + e), ...sR.map((e) => K.x1 - e)],
    n = [...oR.map((e) => K.z0 + e), ...sR.map((e) => K.z1 - e)];
  for (let r = 0; r < 4; r++) {
    let i = gR[r],
      a = gR[(r + 1) % 4],
      o = i[1] === a[1],
      s = o ? Math.min(i[0], a[0]) : Math.min(i[1], a[1]),
      c = o ? Math.max(i[0], a[0]) : Math.max(i[1], a[1]),
      l = [
        s,
        c,
        ...(o ? t : n).filter((e) => e > s + 0.01 && e < c - 0.01),
      ].sort((e, t) => e - t);
    (o ? a[0] > i[0] : a[1] > i[1]) || l.reverse();
    for (let t = 0; t + 1 < l.length; t++) {
      let n = o ? [l[t], i[1]] : [i[0], l[t]],
        r = o ? [l[t + 1], i[1]] : [i[0], l[t + 1]],
        a =
          (n[0] + r[0]) / 2 +
          (i[0] === K.x0 && !o ? 0.1 : i[0] === K.x1 && !o ? -0.1 : 0),
        s = (n[1] + r[1]) / 2 + (o ? (i[1] === K.z0 ? 0.1 : -0.1) : 0);
      e.push([n, r, mR(a, s)]);
    }
  }
  return e;
}
function vR(e, t, n, r, i) {
  let a = i / 6,
    o = 5.2,
    s = n + ((t.length * o - 1.2) * a) / 2;
  for (let n of t) {
    for (let t of yM[n] ?? []) {
      let n = t.map(([e, t]) => [s - e * a, r + t * a]);
      rM(
        e,
        [n[0][0], n[0][1], 0],
        [n[1][0], n[1][1], 0],
        [n[2][0], n[2][1], 0],
        [n[3][0], n[3][1], 0],
        [0, 0, -1],
      );
    }
    s -= o * a;
  }
}
function yR(e, t, n, r, i, a, o, s, c, l, u) {
  let d = e.coarse ? 3 : 6,
    f = e.coarse ? 4 : 10,
    p = [],
    m = [];
  for (let e = d; e >= 1; e--)
    (p.push([n - i * o * (e / d), r]), m.push((1 - e / d) ** 1.5));
  (p.push([n, r]), m.push(1));
  for (let e = 1; e <= d; e++)
    (p.push([n, r - a * s * (e / d)]), m.push((1 - e / d) ** 1.5));
  let h = (e, t) => {
      let n = l + ((u - l) * t) / f,
        r = (1 - t / f) ** 2;
      return [p[e][0] + i * c * m[e] * r, n, p[e][1] + a * c * m[e] * r];
    },
    g = t.c(`glass`);
  e.push().col(15002865).mat(0.45, 0.1, 0.22, G);
  for (let t = 0; t < f; t++)
    for (let o = 0; o + 1 < p.length; o++) {
      let s = h(o, t),
        c = h(o + 1, t),
        l = h(o + 1, t + 1),
        u = h(o, t + 1),
        d = [
          (s[0] + c[0]) / 2 - (n - i * 20),
          0,
          (s[2] + c[2]) / 2 - (r - a * 20),
        ],
        f = c[0] - s[0],
        p = c[2] - s[2],
        m = u[0] - s[0],
        _ = u[1] - s[1],
        v = u[2] - s[2],
        y = [-p * _, p * m - f * v, f * _],
        b = t % 2 ? g : e.white;
      (t % 2 == 0
        ? e.col(12831954).mat(0.4, 0.35, 0.05, 1)
        : e.col(15002865).mat(0.45, 0.1, 0.22, G),
        y[0] * d[0] + y[1] * d[1] + y[2] * d[2] >= 0
          ? e.quad(
              s[0],
              s[1],
              s[2],
              c[0],
              c[1],
              c[2],
              l[0],
              l[1],
              l[2],
              u[0],
              u[1],
              u[2],
              b,
            )
          : e.quad(
              s[0],
              s[1],
              s[2],
              u[0],
              u[1],
              u[2],
              l[0],
              l[1],
              l[2],
              c[0],
              c[1],
              c[2],
              b,
            ));
    }
  if (!e.coarse) {
    e.col(16777215).mat(0.5, 0.1, 0.12, 1);
    for (let t = 1; t < f; t++)
      for (let n = 0; n + 1 < p.length; n++) {
        let r = h(n, t),
          o = h(n + 1, t),
          s = (i * 0.7 * (m[n] + 0.3)) / 1.3,
          c = (a * 0.7 * (m[n] + 0.3)) / 1.3;
        rM(
          e,
          r,
          o,
          [o[0] + s, o[1] - 0.1, o[2] + c],
          [r[0] + s, r[1] - 0.1, r[2] + c],
          [s, 0.3, c],
        );
      }
  }
  e.col(13225682).mat(0.6, 0.3, 0.25, 1);
  for (let t = 0; t + 1 < p.length; t++) {
    let n = h(t, 0),
      r = h(t + 1, 0);
    rM(
      e,
      [p[t][0], l, p[t][1]],
      [p[t + 1][0], l, p[t + 1][1]],
      r,
      n,
      [0, -1, 0],
    );
  }
  e.pop();
}
function ZSe(e, t, n, r, i, a) {
  let o = Math.hypot(n[0] - t[0], n[1] - t[1]),
    s = (n[0] - t[0]) / o,
    c = (n[1] - t[1]) / o,
    l = -c * 0.06,
    u = s * 0.06,
    d = new le(a),
    f = 4.5,
    p = Math.floor(o / 4.8);
  for (let n = 1; n < p; n++) {
    let a = r + d.range(0, 3) * f;
    for (; a < i - f;) {
      let r = Math.min(i, a + f * d.int(2, 5)),
        o = n * 4.8 + d.range(-1.2, 1.2),
        p = t[0] + s * o + l,
        m = t[1] + c * o + u;
      (e.panel(p - s * 0.13, m - c * 0.13, p + s * 0.13, m + c * 0.13, a, r),
        (a = r + f * d.int(1, 4)));
    }
  }
}
