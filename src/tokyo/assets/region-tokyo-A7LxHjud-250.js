// tokyo/assets/region-tokyo-A7LxHjud 250 — mat
// Lines 94147-94480 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function DSe(e, t, n, r, i) {
  let a = new le(i),
    o = a.range(0, Math.PI * 2),
    s = a.range(0.1, 0.28),
    c = t + Math.cos(o) * s * r,
    l = n + Math.sin(o) * s * r;
  (e.push().col(5062192).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, c, r * 0.86, l, r * 0.035, 5, r * 0.018));
  let u = [[c, r * 0.9, l, r * 0.2]],
    d = e.coarse ? 1 : 2;
  for (let i = 0; i < d; i++) {
    let s = 0.5 + 0.18 * i,
      d = t + (c - t) * s,
      f = n + (l - n) * s,
      p = o + Math.PI * (0.6 + i * 0.85 + a.range(0, 0.3)),
      m = r * a.range(0.24, 0.34),
      h = d + Math.cos(p) * m,
      g = f + Math.sin(p) * m,
      _ = r * s + m * 0.2;
    (e.coarse || e.rod(d, r * s, f, h, _, g, r * 0.014, 4, r * 0.008),
      u.push([h, _ + 0.2, g, r * a.range(0.15, 0.2)]));
  }
  for (let [t, n, r, i] of u) {
    e.col(2244650, a.range(0.85, 1.15)).mat(0.95, 0, 0, 0);
    let o = i * 0.55;
    e.lathe(
      t,
      r,
      [0.05, n - o * 0.35, i, n, i * 0.62, n + o * 0.55, 0.05, n + o * 0.7],
      e.coarse ? 5 : 6,
      a.next(),
    );
  }
  e.pop();
}
function OSe(e, t, n, r, i) {
  let a = new le(i);
  (e.push().col(4865075).mat(0.95, 0, 0, 0),
    e.rod(
      t,
      0,
      n,
      t + a.range(-0.3, 0.3),
      r * 0.45,
      n + a.range(-0.3, 0.3),
      r * 0.03,
      5,
      r * 0.02,
    ),
    e.col(6064698, a.range(0.85, 1.15)));
  let o = r * 0.42;
  (e.lathe(
    t,
    n,
    [0.05, r * 0.3, o * 0.9, r * 0.45, o, r * 0.65, o * 0.7, r * 0.88, 0.05, r],
    e.coarse ? 5 : 7,
    a.next(),
  ),
    e.pop());
}
function xL(e, t, n, r, i, a, o, s = 0, c = 0) {
  let l = e.sub(n, r, i, 0);
  (t === `pine`
    ? DSe(e, 0, 0, a, o)
    : t === `keyaki`
      ? TSe(e, 0, 0, a, o)
      : t === `sakura`
        ? ESe(e, 0, 0, a, o, s, c)
        : OSe(e, 0, 0, a, o),
    e.leave(l),
    e.pole(n, i, t === `maple` ? 0.18 : 0.3, r, r + 3));
}
function SL(e, t, n, r, i, a, o, s, c, l, u = 7, d = 12, f = 5) {
  let p = [];
  for (let m = 0, h = 0; m < c && h < c * 8; h++) {
    let c = t.range(r, a),
      h = t.range(i, o),
      g = n[t.int(0, n.length - 1)],
      _ = t.range(u, d),
      v = t.int(1, 1 << 30);
    l.some(
      ([e, t, n, r]) => c > e - 2 && c < n + 2 && h > t - 2 && h < r + 2,
    ) ||
      p.some(([e, t]) => (e - c) ** 2 + (t - h) ** 2 < f * f) ||
      (p.push([c, h]), m++, !(e.coarse && m % 3) && xL(e, g, c, s, h, _, v));
  }
}
function CL(e, t, n, r, i = !1) {
  if ((e.push().col(9407104).mat(0.9, 0, 0, 0), i)) {
    for (let [i, a] of [
      [-0.45, -0.3],
      [0.45, -0.3],
      [0, 0.5],
    ])
      e.box(
        t + i - 0.08,
        n,
        r + a - 0.08,
        t + i + 0.08,
        n + 0.75,
        r + a + 0.08,
      );
    (e.cylY(t, r, n + 0.75, n + 0.95, 0.42, 6),
      e
        .col(15983280)
        .mat(0.5, 0, 0.5, 1)
        .box(t - 0.28, n + 0.95, r - 0.28, t + 0.28, n + 1.3, r + 0.28),
      e
        .col(9407104)
        .mat(0.9, 0, 0, 0)
        .lathe(
          t,
          r,
          [1, n + 1.3, 0.85, n + 1.5, 0.15, n + 1.75, 0.01, n + 1.9],
          6,
        ));
  } else
    (e.cylY(t, r, n, n + 1.3, 0.16, 6),
      e.box(t - 0.36, n + 1.3, r - 0.36, t + 0.36, n + 1.45, r + 0.36),
      e
        .col(15983280)
        .mat(0.5, 0, 0.5, 1)
        .box(t - 0.25, n + 1.45, r - 0.25, t + 0.25, n + 1.9, r + 0.25),
      e
        .col(9407104)
        .mat(0.9, 0, 0, 0)
        .lathe(
          t,
          r,
          [0.55, n + 1.9, 0.4, n + 2.15, 0.08, n + 2.35, 0.01, n + 2.5],
          6,
        ));
  (e.pop(), e.pole(t, r, 0.4, n, n + 1.5, `prop`));
}
function wL(e, t, n, r, i, a, o, s = 5.4, c = 2.8, l = 1 / 0) {
  let u = Math.min(o + 0.9, l - 0.04),
    d = Math.min(o + 1.6, l - 0.04),
    f = e.sub(n, a, r, i),
    p = 0.42;
  e.col(2893346).mat(0.75, 0, 0, 0);
  for (let t of [-1, 1])
    (e.box(t * o - p, 0, -0.42, t * o + p, s, p),
      e.box(t * o - 0.2, 0, c - 0.2, t * o + 0.2, s * 0.62, c + 0.2),
      e.box(t * o - 0.12, s * 0.48, p, t * o + 0.12, s * 0.56, c - 0.2),
      e.pole(t * o, 0, 0.47, 0, s),
      e.pole(t * o, c, 0.25, 0, s * 0.6));
  (e.box(-u, s - 0.75, -0.32, u, s - 0.02, 0.32),
    e.mat(0.88, 0, 0, 0),
    cC(e, 0, 0, s + 0.15, d, 1.55, {
      rise: 1.1,
      cell: t.c(`kawara`),
      tile: 2,
      color: dL,
      band: 14210248,
      soffit: 3813416,
      ridgeH: 0.42,
      ridgeColor: 5001302,
      eave: 0.9,
      wallY: s + 0.15,
      wallInset: 0.4,
      wallColor: 2893346,
    }));
  for (let n of [-1, 1])
    cC(
      e,
      n * o,
      c * 0.62,
      s * 0.62 + 0.1,
      0.95,
      Math.min(c * 0.55, l - o - 0.04),
      {
        rise: 0.6,
        cell: t.c(`kawara`),
        tile: 2,
        color: dL,
        band: 14210248,
        soffit: 3813416,
        ridgeH: 0.2,
        ridgeColor: 5001302,
        eave: 0.4,
        wallY: s * 0.62 + 0.1,
        wallInset: 0.2,
        wallColor: 2893346,
      },
      Math.PI / 2,
    );
  for (let t of [-1, 1]) {
    e.col(3878954).mat(0.8, 0, 0, 0);
    let n = t * (o - p - 0.12);
    if (
      (e.box(n - 0.1, 0.05, 0.52, n + 0.1, s - 0.9, 0.52 + o * 0.96), !e.coarse)
    ) {
      e.col(5658714).mat(0.45, 0.8, 0, 0);
      for (let r of [0.8, (s - 0.9) * 0.5, s - 1.5])
        e.box(
          n - t * 0.12 - 0.02,
          r,
          0.57,
          n - t * 0.12 + 0.02,
          r + 0.16,
          0.47 + o * 0.96,
        );
    }
    e.solid(n - 0.15, 0.52, n + 0.15, 0.52 + o * 0.96, 0, s - 0.9, `prop`);
  }
  e.leave(f);
}
function TL(e, t, n, r, i, a, o, s, c) {
  let l = e.sub(n, a, r, i);
  if (
    (e.col(uL).mat(0.85, 0, 0.08, G),
    e.box(-o, 0, -s, o, c, s, t.c(`plaster`), 2, 2, null, !0),
    e.col(3025447).mat(0.85, 0, 0, 0),
    e.box(-o - 0.04, 0, -s - 0.04, o + 0.04, c * 0.32, s + 0.04),
    !e.coarse)
  ) {
    e.col(2762790).mat(0.8, 0, 0, 0);
    for (let t = -o + 2.2; t < o - 1.5; t += 3.2)
      (e.box(t - 0.65, c * 0.45, -s - 0.06, t + 0.65, c * 0.72, -s + 0.02),
        e.box(t - 0.65, c * 0.45, s - 0.02, t + 0.65, c * 0.72, s + 0.06));
  }
  (e.mat(0.88, 0, 0, 0),
    lC(e, 0, 0, c + 0.05, o + 1.3, s + 1.3, {
      rise: Math.min(4.2, s * 0.85),
      cell: t.c(`kawara`),
      color: dL,
      band: 15263454,
      soffit: 15263454,
      gableColor: uL,
      ridgeH: 0.6,
      ridgeColor: 5001302,
      eave: 1.1,
      sori: 0.3,
      tg: 0.48,
    }),
    e.solid(-o, -s, o, s, 0, c + 2),
    e.leave(l));
}
function EL(e, t, n, r, i, a, o, s, c) {
  if ((e.col(2893346).mat(0.75, 0, 0, 0), c)) {
    for (let t of [n + 0.45, r - 0.45])
      (e.box(t - 0.45, o, a - 1, t + 0.45, s, a - 0.1),
        e.pole(t, a - 0.55, 0.5, o, s));
    (e.box(n, s - 0.9, a - 1, r, s, a - 0.1), e.col(3878954).mat(0.8, 0, 0, 0));
    for (let t of [n + 0.95, r - 0.95])
      e.box(t - 0.1, o + 0.05, a - 1 - (r - n) * 0.45, t + 0.1, s - 1.1, a - 1);
    e.col(7037530)
      .mat(0.9, 0, 0, 0)
      .flat(n, i, r, a, s - 0.02, e.white, 0, 0, !1);
  } else {
    for (let t of [i + 0.45, a - 0.45])
      (e.box(r - 1, o, t - 0.45, r - 0.1, s, t + 0.45),
        e.pole(r - 0.55, t, 0.5, o, s));
    (e.box(r - 1, s - 0.9, i, r - 0.1, s, a), e.col(3878954).mat(0.8, 0, 0, 0));
    for (let t of [i + 0.95, a - 0.95])
      e.box(r - 1 - (a - i) * 0.45, o + 0.05, t - 0.1, r - 1, s - 1.1, t + 0.1);
    e.col(7037530)
      .mat(0.9, 0, 0, 0)
      .flat(n, i, r, a, s - 0.02, e.white, 0, 0, !1);
  }
}
function DL(e, t, n, r, i, a) {
  e.col(7305802).mat(0.95, 0, 0, 0).flat(t, n, r, i, a);
}
function OL(e, t, n, r, i, a, o = a) {
  let s = Math.hypot(r - t, i - n);
  if (s < 0.5) return;
  e.push().col(4866103).mat(0.85, 0, 0, 0);
  let c = Math.max(1, Math.round(s / 4));
  if (!e.coarse)
    for (let s = 0; s <= c; s++) {
      let l = t + ((r - t) * s) / c,
        u = n + ((i - n) * s) / c,
        d = a + ((o - a) * s) / c;
      e.rod(l, d, u, l, d + 1.15, u, 0.06, 4);
    }
  for (let s of e.coarse ? [1.05] : [0.55, 1.05])
    e.rod(t, a + s, n, r, o + s, i, 0.04, 4);
  e.pop();
}
var kL = Ab,
  AL = jb,
  jL = Mb,
  ML = (e) =>
    cL + (13 * (jL.x0 - Math.min(jL.x0, Math.max(jL.x1, e)))) / (jL.x0 - jL.x1),
  NL = {
    gap0: -95,
    gap1: -85,
    bridgeX0: -505.5,
    bridgeX1: -485.8,
    deck: 0.22,
    bankIn: -513,
    bankOut: -503.4,
    bankTop: 6.95,
    bankBat: 1.2,
    inX0: -531,
    inX1: -513,
    inZ0: -101,
    inZ1: -79,
    nZ0: -108,
    wX0: -538,
    sZ1: -73,
    pas0: -525,
    pas1: -519,
  },
  PL = -114,
  FL = -106,
  IL = { x0: -594, x1: -586, z0: -153, z1: -121 },
  LL = { x0: -536, x1: -524, z0: -127, z1: -121 },
  RL = { x0: -588, x1: -562, z0: -92, z1: -72 },
  zL = { cx: -557, cz: -144, rx: 18, rz: 10.5 },
  BL = { x0: -667, x1: -633, z0: -168, z1: -138, h: 9, bat: 1.5 },
  VL = { x0: -646, x1: -638, z0: -138, z1: -116 },
  HL = { cx: -606, cz: -70 },
  kSe = [
    [-566, -123, -556, -115.3],
    [-566, -104.7, -556, -97],
  ],
  ASe = [
    [-607, -121, -601, -115.3],
    [-607, -104.7, -601, -99],
  ],
  UL = [
    [AL.maxX, AL.minZ],
    [AL.minX, AL.minZ],
    [AL.minX, jL.minZ],
    [jL.x0, jL.minZ],
    [jL.x0, jL.maxZ],
    [AL.minX, jL.maxZ],
    [AL.minX, AL.maxZ],
    [AL.maxX, AL.maxZ],
  ],
  WL = (e, t) =>
    e > AL.minX + 0.01 && t > jL.minZ - 0.01 && t < jL.maxZ + 0.01 ? ML(e) : lL;
