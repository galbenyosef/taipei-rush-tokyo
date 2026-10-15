// tokyo/assets/region-tokyo-55J_WESF 268 — col
// Lines 99621-99951 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* zCe(e, t) {
  let n = e.coarse ? 10 : 20,
    r = [];
  for (let e = 0; e <= n; e++) r.push(oB.a0 + ((oB.a1 - oB.a0) * e) / n);
  let i = r.map((e) => cB(e, oB.ri)),
    a = r.map((e) => cB(e, oB.ro)),
    o = Yz(t),
    s = [[nB.x1 + 0.2, i[0][1]], [nB.x1 + 0.2, i[n][1]], ...[...i].reverse()];
  if ((e.col(14275786).mat(0.85, 0, 0, 0), FCe(e, t, s, 0.05), !e.coarse)) {
    e.col(10262156).mat(0.85, 0, 0, 0);
    let n = t.site,
      r = (e, r) => t.plan.groundHeight(n.x + e, n.z + r) - n.gy + 0.07;
    for (let t = 0; t < 24; t++) {
      let n = -zz / 2 + (zz * t) / 24,
        i = -zz / 2 + (zz * (t + 1)) / 24,
        a = (e, t) => [oB.cx + t * Math.cos(e) * 0.75, oB.cz + t * Math.sin(e)],
        [o, s] = a(n, 18),
        [c, l] = a(n, 19.5),
        [u, d] = a(i, 19.5),
        [f, p] = a(i, 18);
      e.quad(f, r(f, p), p, u, r(u, d), d, c, r(c, l), l, o, r(o, s), s);
    }
  }
  (yield, Jz(e, 13223615, 0.14));
  for (let t = 0; t < n; t++)
    (e.wall(
      a[t + 1][0],
      a[t + 1][1],
      a[t][0],
      a[t][1],
      oB.col,
      oB.roof,
      o,
      6.4,
      12.5,
    ),
      e.wall(
        i[t][0],
        i[t][1],
        i[t + 1][0],
        i[t + 1][1],
        oB.col,
        oB.roof,
        o,
        6.4,
        12.5,
      ));
  (e.wall(a[0][0], a[0][1], i[0][0], i[0][1], -2, oB.roof, o, 6.4, 12),
    e.wall(i[n][0], i[n][1], a[n][0], a[n][1], -2, oB.roof, o, 6.4, 12),
    e.col(11118498).mat(0.85, 0, 0.04, 1));
  for (let t = 0; t < n; t++) {
    let n = t + 1;
    e.quad(
      i[n][0],
      oB.roof,
      i[n][1],
      a[n][0],
      oB.roof,
      a[n][1],
      a[t][0],
      oB.roof,
      a[t][1],
      i[t][0],
      oB.roof,
      i[t][1],
    );
  }
  e.col(14868698).mat(0.6, 0, 0.3, 1);
  for (let t = 0; t < n; t++) {
    let n = t + 1;
    e.quad(
      i[t][0],
      oB.col,
      i[t][1],
      a[t][0],
      oB.col,
      a[t][1],
      a[n][0],
      oB.col,
      a[n][1],
      i[n][0],
      oB.col,
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
        l = o === i ? oB.ri : oB.ro,
        u = oB.cx + (l[0] + s) * Math.cos(a),
        d = oB.cz + (l[1] + s) * Math.sin(a);
      t !== 0 &&
        t !== n &&
        (e.cylY(u, d, -1, oB.col, 0.75, c, 0.75, !1),
        e.pole(u, d, 0.8, -1, oB.col));
    }
  e.col(16777215).mat(0.3, 0.35, 0.3, G);
  let l = [(oB.ri[0] + oB.ro[0]) / 2, (oB.ri[1] + oB.ro[1]) / 2];
  for (let i = 0; i < n; i++) {
    if (i % 4 == 2) continue;
    let n = cB(r[i], l),
      a = cB(r[i + 1], l);
    (e.panel(n[0], n[1], a[0], a[1], -1, 6, Xz(t)),
      e.panel(a[0], a[1], n[0], n[1], -1, 6, Xz(t)),
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
    let n = cB(r[t], l),
      i = cB(r[t + 1], l);
    (e.panel(n[0], n[1], i[0], i[1], 6, oB.col),
      e.panel(i[0], i[1], n[0], n[1], 6, oB.col));
  }
  for (let t = 0; t < n; t++) {
    let n = cB((r[t] + r[t + 1]) / 2, [
        (oB.ri[0] + oB.ro[0]) / 2,
        (oB.ri[1] + oB.ro[1]) / 2,
      ]),
      o = Math.hypot(a[t + 1][0] - a[t][0], a[t + 1][1] - a[t][1]) + 1,
      s = Math.atan2(i[t + 1][1] - i[t][1], i[t + 1][0] - i[t][0]);
    e.solidRot(n[0], n[1], o / 2, 6, s, oB.col, oB.roof);
  }
  yield;
}
function* BCe(e, t) {
  (yield* LCe(e, t), yield* RCe(e, t), yield* zCe(e, t));
}
function VCe(e, t) {
  let { x0: n, x1: r } = nB;
  Jz(e, sB, 0.05, 0.82);
  for (let [t, i] of rB)
    (qz(e, n, -3, t, r, nB.crown, i, !0),
      e.lathe((n + r) / 2, (t + i) / 2, [16.5, nB.crown, 15, nB.top], 4, 0));
  (qz(e, n + 1.5, -3, iB.z0, r - 1.5, nB.split, iB.z1, !0),
    qz(e, aB.x0, -3, aB.z0, aB.x1, 150, aB.z1, !0));
}
var HCe = {
    id: `tocho`,
    site: Zz($z.x, $z.z),
    name: {
      ja: `東京都庁`,
      zh: `東京都廳`,
      en: `Tokyo Metropolitan Government Building`,
    },
    near: 280,
    build: BCe,
    far: VCe,
    bounds: () => [-2414, 263, -2321, 457],
    farBoxes: (e, t) => {
      let n = [];
      for (let [e, r] of rB)
        (n.push({
          x0: $z.x + nB.x0,
          x1: $z.x + nB.x1,
          z0: $z.z + e,
          z1: $z.z + r,
          y0: t.gy,
          y1: t.gy + nB.obs,
          rgb: [0.56, 0.55, 0.53],
          lit: !0,
        }),
          n.push({
            x0: $z.x + nB.x0 + 5,
            x1: $z.x + nB.x1 - 5,
            z0: $z.z + e + 5,
            z1: $z.z + r - 5,
            y0: t.gy + nB.obs,
            y1: t.gy + nB.top,
            rgb: [0.6, 0.59, 0.57],
          }));
      return (
        n.push({
          x0: $z.x + nB.x0 + 1.5,
          x1: $z.x + nB.x1 - 1.5,
          z0: $z.z + iB.z0,
          z1: $z.z + iB.z1,
          y0: t.gy,
          y1: t.gy + nB.split,
          rgb: [0.52, 0.51, 0.49],
          lit: !0,
        }),
        n.push({
          x0: $z.x + aB.x0,
          x1: $z.x + aB.x1,
          z0: $z.z + aB.z0,
          z1: $z.z + aB.z1,
          y0: t.gy,
          y1: t.gy + 140,
          rgb: [0.56, 0.55, 0.53],
          lit: !0,
        }),
        n.push({
          x0: $z.x + oB.cx + 28,
          x1: $z.x + oB.cx + 42,
          z0: $z.z + oB.cz - 40,
          z1: $z.z + oB.cz + 40,
          y0: t.gy,
          y1: t.gy + oB.roof,
          rgb: [0.58, 0.57, 0.55],
          lit: !0,
        }),
        n
      );
    },
    anchors: [
      {
        key: `tocho-plaza`,
        lx: oB.cx + 14,
        lz: oB.cz,
        turn: -zz / 2,
        name: {
          zh: `東京都廳 都民廣場`,
          en: `Tokyo Metropolitan Government, Citizens' Plaza`,
        },
      },
    ],
    blip: !0,
  },
  lB = { x: -2367.5, z: 533 },
  uB = (e) => e - lB.x,
  dB = (e) => e - lB.z,
  fB = [
    [uB(-2408), dB(487), 200, 235],
    [uB(-2393), dB(512), 180, 212],
    [uB(-2378), dB(537), 160, 190],
  ],
  pB = 30,
  UCe = { x0: uB(-2406), x1: uB(-2350), z0: dB(489), z1: dB(565), h: 18 },
  mB = 11118755;
function* hB(e, t) {
  let n = Yz(t),
    { x0: r, x1: i, z0: a, z1: o, h: s } = UCe;
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    zk(e, Vz(r, a, i, o), -3, 7, Xz(t), 3.2, 10),
    Jz(e, 12105392),
    zk(e, Vz(r, a, i, o), 7, s, n, 6.4, 11),
    e.col(9409173).mat(0.85, 0, 0.04, 1),
    e.flat(r, a, i, o, s),
    e.solid(r, a, i, o, -3, s),
    yield);
  for (let [r, i, a, o] of fB) {
    let s = Hz(r, i, r + pB, i + pB, 2.5);
    if (
      (Jz(e, mB),
      zk(e, s, -3, a - 4, n, 6.4, 16),
      e.col(9211016).mat(0.6, 0.2, 0.08, 1),
      zk(e, s, a - 4, a, e.white, 50, 4),
      e.col(7829883).mat(0.85, 0, 0, 0),
      Uz(e, r, i, r + pB, i + pB, 2.5, a),
      e.col(8820386).mat(0.15, 0.5, 0.35, G),
      Gz(e, r + 1, i + 1, r + pB - 1, i + pB - 1, a, o, t.c(`glass`)),
      !e.coarse)
    ) {
      e.col(3948870).mat(0.4, 0.6, 0, 0);
      let t = r + pB / 2,
        n = i + pB / 2;
      for (let [s, c] of [
        [r + 1, i + 1],
        [r + pB - 1, i + 1],
        [r + pB - 1, i + pB - 1],
        [r + 1, i + pB - 1],
      ])
        e.rod(s, a, c, t, o, n, 0.35, 4);
    }
    (Wk(e, r + pB / 2, o, i + pB / 2, 0.55),
      Wk(e, r + 1.5, a, i + 1.5, 0.4),
      Wk(e, r + pB - 1.5, a, i + pB - 1.5, 0.4),
      e.solid(r, i, r + pB, i + pB, -3, o - 8),
      yield);
  }
}
function WCe(e, t) {
  for (let [n, r, i, a] of fB)
    (Jz(e, mB, 0.05, 0.82),
      qz(e, n, -3, r, n + pB, i, r + pB, !1),
      e.col(8820386).mat(0.15, 0.5, 0.35, G),
      Gz(e, n, r, n + pB, r + pB, i, a, t.c(`glass`)));
}
var GCe = {
    id: `park-tower`,
    site: Zz(lB.x, lB.z),
    name: {
      ja: `新宿パークタワー`,
      zh: `新宿公園塔`,
      en: `Shinjuku Park Tower`,
    },
    near: 260,
    build: hB,
    far: WCe,
    bounds: () => [-2412, 483, -2323, 583],
    farBoxes: (e, t) =>
      fB.map(([e, n, r, i]) => ({
        x0: lB.x + e,
        x1: lB.x + e + pB,
        z0: lB.z + n,
        z1: lB.z + n + pB,
        y0: t.gy,
        y1: t.gy + (r + i) / 2,
        rgb: [0.42, 0.42, 0.41],
        lit: !0,
      })),
    blip: !0,
  },
  gB = { x: -2239.5, z: 294 },
  _B = { H: 204, rx: 14, rz: 25, dome: 196 };
function vB(e) {
  let t = Math.min(1, Math.max(0, e / _B.H));
  return t < 0.34
    ? 0.7 + 0.3 * Math.sin((zz / 2) * (t / 0.34))
    : 1 - 0.5 * ((t - 0.34) / 0.66) ** 1.5;
}
function yB(e) {
  if (e <= _B.dome) return vB(e);
  let t = Math.min(1, (e - _B.dome) / (_B.H - _B.dome));
  return vB(_B.dome) * Math.sqrt(Math.max(0.0025, 1 - t * t));
}
