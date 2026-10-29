// tokyo/assets/region-tokyo-A7LxHjud 268 — col
// Lines 99712-100042 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* QCe(e, t) {
  let n = e.coarse ? 10 : 20,
    r = [];
  for (let e = 0; e <= n; e++) r.push(cB.a0 + ((cB.a1 - cB.a0) * e) / n);
  let i = r.map((e) => uB(e, cB.ri)),
    a = r.map((e) => uB(e, cB.ro)),
    o = Zz(t),
    s = [[iB.x1 + 0.2, i[0][1]], [iB.x1 + 0.2, i[n][1]], ...[...i].reverse()];
  if ((e.col(14275786).mat(0.85, 0, 0, 0), JCe(e, t, s, 0.05), !e.coarse)) {
    e.col(10262156).mat(0.85, 0, 0, 0);
    let n = t.site,
      r = (e, r) => t.plan.groundHeight(n.x + e, n.z + r) - n.gy + 0.07;
    for (let t = 0; t < 24; t++) {
      let n = -Vz / 2 + (Vz * t) / 24,
        i = -Vz / 2 + (Vz * (t + 1)) / 24,
        a = (e, t) => [cB.cx + t * Math.cos(e) * 0.75, cB.cz + t * Math.sin(e)],
        [o, s] = a(n, 18),
        [c, l] = a(n, 19.5),
        [u, d] = a(i, 19.5),
        [f, p] = a(i, 18);
      e.quad(f, r(f, p), p, u, r(u, d), d, c, r(c, l), l, o, r(o, s), s);
    }
  }
  (yield, Xz(e, 13223615, 0.14));
  for (let t = 0; t < n; t++)
    (e.wall(
      a[t + 1][0],
      a[t + 1][1],
      a[t][0],
      a[t][1],
      cB.col,
      cB.roof,
      o,
      6.4,
      12.5,
    ),
      e.wall(
        i[t][0],
        i[t][1],
        i[t + 1][0],
        i[t + 1][1],
        cB.col,
        cB.roof,
        o,
        6.4,
        12.5,
      ));
  (e.wall(a[0][0], a[0][1], i[0][0], i[0][1], -2, cB.roof, o, 6.4, 12),
    e.wall(i[n][0], i[n][1], a[n][0], a[n][1], -2, cB.roof, o, 6.4, 12),
    e.col(11118498).mat(0.85, 0, 0.04, 1));
  for (let t = 0; t < n; t++) {
    let n = t + 1;
    e.quad(
      i[n][0],
      cB.roof,
      i[n][1],
      a[n][0],
      cB.roof,
      a[n][1],
      a[t][0],
      cB.roof,
      a[t][1],
      i[t][0],
      cB.roof,
      i[t][1],
    );
  }
  e.col(14868698).mat(0.6, 0, 0.3, 1);
  for (let t = 0; t < n; t++) {
    let n = t + 1;
    e.quad(
      i[t][0],
      cB.col,
      i[t][1],
      a[t][0],
      cB.col,
      a[t][1],
      a[n][0],
      cB.col,
      a[n][1],
      i[n][0],
      cB.col,
      i[n][1],
    );
  }
  yield;
  let c = e.coarse ? 4 : 10;
  e.col(14078924).mat(0.6, 0.05, 0.1, 1);
  for (let t = 0; t <= n; t++)
    for (let [o, s] of [
      [i, -0.7],
      [a, 0.7],
    ]) {
      let a = r[t],
        l = o === i ? cB.ri : cB.ro,
        u = cB.cx + (l[0] + s) * Math.cos(a),
        d = cB.cz + (l[1] + s) * Math.sin(a);
      t !== 0 &&
        t !== n &&
        (e.cylY(u, d, -1, cB.col, 0.75, c, 0.75, !1),
        e.pole(u, d, 0.8, -1, cB.col));
    }
  e.col(16777215).mat(0.3, 0.35, 0.3, G);
  let l = [(cB.ri[0] + cB.ro[0]) / 2, (cB.ri[1] + cB.ro[1]) / 2];
  for (let i = 0; i < n; i++) {
    if (i % 4 == 2) continue;
    let n = uB(r[i], l),
      a = uB(r[i + 1], l);
    (e.panel(n[0], n[1], a[0], a[1], -1, 6, Qz(t)),
      e.panel(a[0], a[1], n[0], n[1], -1, 6, Qz(t)),
      e.solid(
        Math.min(n[0], a[0]) - 0.2,
        Math.min(n[1], a[1]) - 0.2,
        Math.max(n[0], a[0]) + 0.2,
        Math.max(n[1], a[1]) + 0.2,
        -1,
        6,
        `wall`,
      ));
  }
  e.col(13223615).mat(0.72, 0.04, 0.05, 0);
  for (let t = 0; t < n; t++) {
    if (t % 4 == 2) continue;
    let n = uB(r[t], l),
      i = uB(r[t + 1], l);
    (e.panel(n[0], n[1], i[0], i[1], 6, cB.col),
      e.panel(i[0], i[1], n[0], n[1], 6, cB.col));
  }
  for (let t = 0; t < n; t++) {
    let n = uB((r[t] + r[t + 1]) / 2, [
        (cB.ri[0] + cB.ro[0]) / 2,
        (cB.ri[1] + cB.ro[1]) / 2,
      ]),
      o = Math.hypot(a[t + 1][0] - a[t][0], a[t + 1][1] - a[t][1]) + 1,
      s = Math.atan2(i[t + 1][1] - i[t][1], i[t + 1][0] - i[t][0]);
    e.solidRot(n[0], n[1], o / 2, 6, s, cB.col, cB.roof);
  }
  yield;
}
function* $Ce(e, t) {
  (yield* XCe(e, t), yield* ZCe(e, t), yield* QCe(e, t));
}
function ewe(e, t) {
  let { x0: n, x1: r } = iB;
  Xz(e, lB, 0.05, 0.82);
  for (let [t, i] of aB)
    (Yz(e, n, -3, t, r, iB.crown, i, !0),
      e.lathe((n + r) / 2, (t + i) / 2, [16.5, iB.crown, 15, iB.top], 4, 0));
  (Yz(e, n + 1.5, -3, oB.z0, r - 1.5, iB.split, oB.z1, !0),
    Yz(e, sB.x0, -3, sB.z0, sB.x1, 150, sB.z1, !0));
}
var twe = {
    id: `tocho`,
    site: $z(tB.x, tB.z),
    name: {
      ja: `東京都庁`,
      zh: `東京都廳`,
      en: `Tokyo Metropolitan Government Building`,
    },
    near: 280,
    build: $Ce,
    far: ewe,
    bounds: () => [-2414, 263, -2321, 457],
    farBoxes: (e, t) => {
      let n = [];
      for (let [e, r] of aB)
        (n.push({
          x0: tB.x + iB.x0,
          x1: tB.x + iB.x1,
          z0: tB.z + e,
          z1: tB.z + r,
          y0: t.gy,
          y1: t.gy + iB.obs,
          rgb: [0.56, 0.55, 0.53],
          lit: !0,
        }),
          n.push({
            x0: tB.x + iB.x0 + 5,
            x1: tB.x + iB.x1 - 5,
            z0: tB.z + e + 5,
            z1: tB.z + r - 5,
            y0: t.gy + iB.obs,
            y1: t.gy + iB.top,
            rgb: [0.6, 0.59, 0.57],
          }));
      return (
        n.push({
          x0: tB.x + iB.x0 + 1.5,
          x1: tB.x + iB.x1 - 1.5,
          z0: tB.z + oB.z0,
          z1: tB.z + oB.z1,
          y0: t.gy,
          y1: t.gy + iB.split,
          rgb: [0.52, 0.51, 0.49],
          lit: !0,
        }),
        n.push({
          x0: tB.x + sB.x0,
          x1: tB.x + sB.x1,
          z0: tB.z + sB.z0,
          z1: tB.z + sB.z1,
          y0: t.gy,
          y1: t.gy + 140,
          rgb: [0.56, 0.55, 0.53],
          lit: !0,
        }),
        n.push({
          x0: tB.x + cB.cx + 28,
          x1: tB.x + cB.cx + 42,
          z0: tB.z + cB.cz - 40,
          z1: tB.z + cB.cz + 40,
          y0: t.gy,
          y1: t.gy + cB.roof,
          rgb: [0.58, 0.57, 0.55],
          lit: !0,
        }),
        n
      );
    },
    anchors: [
      {
        key: `tocho-plaza`,
        lx: cB.cx + 14,
        lz: cB.cz,
        turn: -Vz / 2,
        name: {
          zh: `東京都廳 都民廣場`,
          en: `Tokyo Metropolitan Government, Citizens' Plaza`,
        },
      },
    ],
    blip: !0,
  },
  dB = { x: -2367.5, z: 533 },
  fB = (e) => e - dB.x,
  pB = (e) => e - dB.z,
  mB = [
    [fB(-2408), pB(487), 200, 235],
    [fB(-2393), pB(512), 180, 212],
    [fB(-2378), pB(537), 160, 190],
  ],
  hB = 30,
  nwe = { x0: fB(-2406), x1: fB(-2350), z0: pB(489), z1: pB(565), h: 18 },
  gB = 11118755;
function* rwe(e, t) {
  let n = Zz(t),
    { x0: r, x1: i, z0: a, z1: o, h: s } = nwe;
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    Vk(e, Uz(r, a, i, o), -3, 7, Qz(t), 3.2, 10),
    Xz(e, 12105392),
    Vk(e, Uz(r, a, i, o), 7, s, n, 6.4, 11),
    e.col(9409173).mat(0.85, 0, 0.04, 1),
    e.flat(r, a, i, o, s),
    e.solid(r, a, i, o, -3, s),
    yield);
  for (let [r, i, a, o] of mB) {
    let s = Wz(r, i, r + hB, i + hB, 2.5);
    if (
      (Xz(e, gB),
      Vk(e, s, -3, a - 4, n, 6.4, 16),
      e.col(9211016).mat(0.6, 0.2, 0.08, 1),
      Vk(e, s, a - 4, a, e.white, 50, 4),
      e.col(7829883).mat(0.85, 0, 0, 0),
      Gz(e, r, i, r + hB, i + hB, 2.5, a),
      e.col(8820386).mat(0.15, 0.5, 0.35, G),
      qz(e, r + 1, i + 1, r + hB - 1, i + hB - 1, a, o, t.c(`glass`)),
      !e.coarse)
    ) {
      e.col(3948870).mat(0.4, 0.6, 0, 0);
      let t = r + hB / 2,
        n = i + hB / 2;
      for (let [s, c] of [
        [r + 1, i + 1],
        [r + hB - 1, i + 1],
        [r + hB - 1, i + hB - 1],
        [r + 1, i + hB - 1],
      ])
        e.rod(s, a, c, t, o, n, 0.35, 4);
    }
    (Kk(e, r + hB / 2, o, i + hB / 2, 0.55),
      Kk(e, r + 1.5, a, i + 1.5, 0.4),
      Kk(e, r + hB - 1.5, a, i + hB - 1.5, 0.4),
      e.solid(r, i, r + hB, i + hB, -3, o - 8),
      yield);
  }
}
function iwe(e, t) {
  for (let [n, r, i, a] of mB)
    (Xz(e, gB, 0.05, 0.82),
      Yz(e, n, -3, r, n + hB, i, r + hB, !1),
      e.col(8820386).mat(0.15, 0.5, 0.35, G),
      qz(e, n, r, n + hB, r + hB, i, a, t.c(`glass`)));
}
var awe = {
    id: `park-tower`,
    site: $z(dB.x, dB.z),
    name: {
      ja: `新宿パークタワー`,
      zh: `新宿公園塔`,
      en: `Shinjuku Park Tower`,
    },
    near: 260,
    build: rwe,
    far: iwe,
    bounds: () => [-2412, 483, -2323, 583],
    farBoxes: (e, t) =>
      mB.map(([e, n, r, i]) => ({
        x0: dB.x + e,
        x1: dB.x + e + hB,
        z0: dB.z + n,
        z1: dB.z + n + hB,
        y0: t.gy,
        y1: t.gy + (r + i) / 2,
        rgb: [0.42, 0.42, 0.41],
        lit: !0,
      })),
    blip: !0,
  },
  _B = { x: -2239.5, z: 294 },
  vB = { H: 204, rx: 14, rz: 25, dome: 196 };
function yB(e) {
  let t = Math.min(1, Math.max(0, e / vB.H));
  return t < 0.34
    ? 0.7 + 0.3 * Math.sin((Vz / 2) * (t / 0.34))
    : 1 - 0.5 * ((t - 0.34) / 0.66) ** 1.5;
}
function bB(e) {
  if (e <= vB.dome) return yB(e);
  let t = Math.min(1, (e - vB.dome) / (vB.H - vB.dome));
  return yB(vB.dome) * Math.sqrt(Math.max(0.0025, 1 - t * t));
}
