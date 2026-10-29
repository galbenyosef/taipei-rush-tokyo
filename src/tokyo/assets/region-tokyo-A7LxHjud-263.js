// tokyo/assets/region-tokyo-A7LxHjud 263 — col
// Lines 98044-98355 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* TCe(e, t) {
  let n = t.c(`glass`),
    [r, i] = tz,
    [a, o] = nz;
  (e.push().col(15134450).mat(0.15, 0.35, 0.09, G),
    kR(e, $R, 5.6, ez, n, 3.2, 4.4),
    e.col(16777215).mat(0.2, 0.2, 0.45, G),
    kR(e, $R, 0, 5.6, t.c(`doors`), 3.2, 5.6),
    e.col(13620182).mat(0.4, 0.5, 0.05, G),
    e.sweep(OR($R), [0, 41.5, 0.25, 41.5, 0.25, 42.6, 0, 42.6], !0),
    e.sweep(OR($R), [0, 5.3, 0.6, 5.3, 0.6, 5.7, 0, 5.7], !0),
    e.col(8027778).mat(0.8, 0.1),
    AR(e, $R, 42.300000000000004),
    e.pop(),
    yield,
    e.push(),
    e.col(16767400).mat(0.25, 0, 0.35, wR));
  {
    let [n, s] = PR(r, i, a, o, 0.12, 0.03),
      [c, l] = PR(r, i, a, o, 0.88, 0.03);
    e.panel(n, s, c, l, 6, 9.6, t.c(`doors`));
  }
  e.col(16777215).mat(0.3, 0, 0.5, wR);
  {
    let [n, s] = PR(r, i, a, o, 0.3, 0.7),
      [c, l] = PR(r, i, a, o, 0.7, 0.7);
    e.col(14212318).mat(0.4, 0.4, 0.05, G);
    let [u, d] = PR(r, i, a, o, 0.5, 1.2);
    (e.obox(
      u,
      3.75,
      d,
      Math.hypot(a - r, o - i) * 0.42,
      0.08,
      1.2,
      Math.atan2(o - i, a - r),
    ),
      e.col(16777215).mat(0.3, 0, 0.5, wR),
      NR(e, n, s, c, l, 0, 3.9, 5.4, ER(t, `tsutawa`)));
  }
  (wCe(e, 10, 33.9, 0.35), e.col(2764339).mat(0.5, 0.4));
  {
    let [n, s] = PR(
        r,
        i,
        a,
        o,
        (Math.hypot(a - r, o - i) - 13.6) / 2 / Math.hypot(a - r, o - i),
        0.5,
      ),
      [c, l] = PR(
        r,
        i,
        a,
        o,
        1 - (Math.hypot(a - r, o - i) - 13.6) / 2 / Math.hypot(a - r, o - i),
        0.5,
      );
    (NR(e, n, s, c, l, 0, 13.7, 22), e.col(16777215).mat(0.3, 0, 0.42, wR));
    let [u, d] = PR(n, s, c, l, 0.022, 0.08),
      [f, p] = PR(n, s, c, l, 0.978, 0.08);
    NR(e, u, d, f, p, 0, 14, 21.7, ER(t, `screenA`));
  }
  e.col(16777215).mat(0.3, 0, 0.5, wR);
  {
    let [n, s] = PR(r, i, a, o, 0.4, 0.4),
      [c, l] = PR(r, i, a, o, 0.6, 0.4);
    NR(e, n, s, c, l, 0, 36, 37.6, ER(t, `qflat`));
  }
  (e.col(16777215).mat(0.3, 0, 0.5, wR),
    e.panel(-15.15, -9, -15.15, -3, 36.2, 37.7, ER(t, `tsutawa`)),
    e.pop(),
    e.solid(-15, -15.5, 5, 5.5, 0, ez),
    e.solid(1, 5.5, 5, 21.5, 0, ez));
  for (let t = 5.5; t < 21.4; t += 3)
    t + 3 - 20.5 < 1 &&
      e.solid(t + 3 - 20.5, t, 1, Math.min(21.5, t + 3), 0, ez);
  (yield,
    e.coarse ||
      (e.push().col(10133154).mat(0.7, 0.3),
      e.box(-12, 42.300000000000004, -12, -5, 45.1, -5),
      e.box(-3, 42.300000000000004, -8, 3, 43.900000000000006, 2),
      e.pop()));
  {
    let [t, n] = PR(r, i, a, o, 0.08, 0.45),
      [s, c] = PR(r, i, a, o, 0.92, 0.45);
    (e.push().col(3816768).mat(0.6, 0.5),
      NR(e, t, n, s, c, -0.3, 42.6, 49.1),
      e.col(14685738).mat(0.35, 0, 0.55, wR),
      NR(e, t, n, s, c, 0.05, 42.900000000000006, 48.800000000000004),
      e.pop());
  }
}
function ECe(e, t) {
  (e.col(11846860).mat(0.2, 0.3, 0.25, 1),
    kR(e, $R, 0, ez),
    AR(e, $R, ez),
    e.col(16777215).mat(0.3, 0, 0.42, wR));
  let [n, r] = tz,
    [i, a] = nz,
    [o, s] = PR(n, r, i, a, 0.15, 0.4),
    [c, l] = PR(n, r, i, a, 0.85, 0.4);
  NR(e, o, s, c, l, 0, 10, 34, ER(t, `screenA`));
}
var DCe = {
    id: `shibuya-qflat`,
    site: (e) => ({
      x: rz.x,
      z: rz.z,
      gy: e.groundHeight(rz.x, rz.z),
      facing: rz.facing,
    }),
    name: { ja: `QFLAT`, zh: `QFLAT`, en: `QFLAT` },
    near: 260,
    build: TCe,
    far: ECe,
    farBoxes: (e, t) => [
      {
        ...CCe(-15, -15.5, 5, 21.5),
        y0: t.gy,
        y1: t.gy + ez,
        rgb: [0.62, 0.68, 0.72],
        lit: !0,
      },
    ],
    bounds: (e, t) => [t.x - 15.5, t.z - 5, t.x + 21.5, t.z + 15],
    blip: !0,
    anchors: [
      {
        key: `shibuya-qflat`,
        lx: -61.5,
        lz: 73.5,
        turn: 1.25 * CR,
        name: { zh: `QFLAT 大螢幕前`, en: `In front of the QFLAT screen` },
      },
    ],
  },
  oz = 5,
  sz = 31.2,
  cz = 4.8,
  OCe = 3.8,
  lz = -10,
  uz = 16.5,
  dz = (() => {
    let e = [-3, -16.5, -15, -16.5, -15, uz];
    for (let t = 1; t < 6; t++) {
      let n = CR - (t / 6) * (CR / 2);
      e.push(lz + Math.cos(n) * oz, uz + Math.sin(n) * oz);
    }
    return (e.push(lz, 21.5, -3, 21.5), e);
  })(),
  fz = (() => {
    let e = OR(dz),
      t = e.length / 2;
    return (n) => e[n * 2] === -3 && e[((n + 1) % t) * 2] === -3;
  })(),
  pz = { x0: -3, z0: 2, x1: 5.5, z1: 21.5, top: 38.4 };
function* kCe(e, t) {
  let n = t.c(`glass`);
  if (
    (e.push().col(16777215).mat(0.25, 0.1, 0.45, G),
    kR(e, dz, 0, cz, t.c(`doors`), 4.5, cz, fz),
    e.col(15526628).mat(0.7, 0.05, 0.06, 1),
    kR(e, dz, cz, sz, t.c(`plaster`), 6.4, 13.2, fz),
    e.col(14080732).mat(0.4, 0.4, 0.05, G),
    e.sweep(OR(dz), [0, 4.6, 0.5, 4.6, 0.5, 5, 0, 5], !0),
    e.col(13619924).mat(0.6, 0.2),
    AR(e, dz, sz),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(10134700).mat(0.15, 0.4, 0.3, G);
    for (let t = 0; t < 6; t++) {
      let r = 5.9 + t * OCe;
      e.panel(-15.03, -15, -15.03, 15.5, r, r + 1.4, n);
    }
    e.pop();
  }
  (yield,
    e.push().col(16777215).mat(0.3, 0, 0.42, wR),
    MR(e, lz, uz, 5.06, CR / 2, CR, 6, 28, DR(t, `wrap`), e.coarse ? 3 : 6),
    e.panel(-15.06, 7.5, -15.06, 14.5, 5.3, 6.6, DR(t, `magnit`)),
    e.col(1842722).mat(0.5, 0.4),
    e.box(-9.8, 5, 21.5, -3.4, 9, 21.8),
    e.col(16777215).mat(0.3, 0, 0.45, wR),
    e.panel(-9.6, 21.82, -3.6, 21.82, 5.2, 8.8, DR(t, `vision`)),
    e.panel(-15.06, 12.9, -15.06, 15.3, 3.4, 4.3, DR(t, `kuri`)),
    e.pop(),
    e.push().col(6981288).mat(0.12, 0.35, 0.12, G),
    e.box(pz.x0, cz, pz.z0, pz.x1, pz.top, pz.z1, n, 4.25, 11.2),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(pz.x0, 0, pz.z0, pz.x1, cz, pz.z1, t.c(`doors`), 4.25, cz, e.white),
    e.col(16777215).mat(0.3, 0, 0.5, wR),
    e.panel(
      pz.x0 + 0.6,
      pz.z1 + 0.05,
      pz.x1 - 0.6,
      pz.z1 + 0.05,
      pz.top - 4.8,
      pz.top - 2.8,
      DR(t, `magnit`),
    ),
    e.pop(),
    e.push().col(14674156).mat(0.1, 0.3, 0.05, 0));
  let r = OR(dz);
  if (!e.coarse)
    for (let t = 0; t + 1 < r.length / 2; t++) {
      let i = r[t * 2],
        a = r[t * 2 + 1],
        o = r[t * 2 + 2],
        s = r[t * 2 + 3];
      (i > -3.5 && o > -3.5) ||
        (NR(e, i, a, o, s, -0.2, sz, 32.4, n),
        NR(e, o, s, i, a, 0.2, sz, 32.4, n));
    }
  if (
    (e.col(9080466).mat(0.6, 0.4),
    e.coarse || e.box(-14, 34.4, 8, -6, 34.65, 18),
    !e.coarse)
  )
    for (let [t, n] of [
      [-13.6, 8.4],
      [-6.4, 8.4],
      [-13.6, 17.6],
      [-6.4, 17.6],
    ])
      e.box(t - 0.08, sz, n - 0.08, t + 0.08, 34.4, n + 0.08);
  (e.col(13619924).mat(0.7, 0.2),
    e.box(-6, sz, -14, -3, 35.2, -6),
    e.pop(),
    e.solid(-15, -16.5, -3, uz, 0, sz),
    e.solid(lz, uz, -3, 21.5, 0, sz),
    e.solid(-15, uz, lz, 20, 0, sz),
    e.solid(pz.x0, pz.z0, pz.x1, pz.z1, 0, pz.top),
    e.solid(pz.x0, -16.5, pz.x1, pz.z0, 0, sz),
    e.push().col(15526628).mat(0.7, 0.05, 0.06, 1),
    e.wall(pz.x1, -16.5, pz.x0, -16.5, 0, sz, t.c(`plaster`), 8.5, 15.6),
    e.wall(pz.x1, pz.z0, pz.x1, -16.5, 0, sz, t.c(`plaster`), 9.25, 15.6),
    e.col(13619924).mat(0.6, 0.2),
    e.flat(pz.x0, -16.5, pz.x1, pz.z0, sz),
    e.pop(),
    yield,
    e.push().col(14868182).mat(0.6, 0.1, 0.12, G),
    e.box(iz.x0, 4.6, iz.z0, iz.x1, iz.top, iz.z1, t.c(`office`), 3.2, 3.6),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(iz.x0, 0, iz.z0, iz.x1, 4.6, iz.z1, t.c(`doors`), 3, 4.6, e.white),
    e.col(2764339).mat(0.5, 0.4),
    e.box(iz.x0 + 1.2, 13.2, iz.z1, iz.x1 - 1.2, 21.4, iz.z1 + 0.5),
    e.col(16777215).mat(0.3, 0, 0.42, wR),
    e.panel(
      iz.x0 + 1.5,
      iz.z1 + 0.52,
      iz.x1 - 1.5,
      iz.z1 + 0.52,
      13.5,
      21.1,
      ER(t, `screenB`),
    ),
    e.col(3816768).mat(0.6, 0.5));
  for (let t of [iz.x0 + 2, iz.x1 - 2])
    e.box(t - 0.15, iz.top, iz.z1 - 3, t + 0.15, iz.top + 4, iz.z1 - 2.7);
  (e.col(16777215).mat(0.3, 0, 0.4, wR),
    e.panel(
      iz.x0 + 1,
      iz.z1 - 2.65,
      iz.x1 - 1,
      iz.z1 - 2.65,
      iz.top + 3.6,
      iz.top + 8.6,
      DR(t, `bill1`),
    ),
    e.col(3816768).mat(0.6, 0.5),
    e.box(
      iz.x0 + 1,
      iz.top + 3.6,
      iz.z1 - 2.9,
      iz.x1 - 1,
      iz.top + 8.6,
      iz.z1 - 2.68,
    ),
    e.pop(),
    e.push().col(16777215).mat(0.35, 0, 0.5, wR));
  for (let [n, r] of [
    [0, `blade1`],
    [1, `blade3`],
  ]) {
    let i = iz.x0 + 0.9 + n * 1.6,
      a = iz.z1 + 0.9;
    (e.col(2763824).mat(0.6, 0.4),
      e.box(i - 0.05, 6.5, iz.z1, i + 0.05, 6.7, a + 0.1),
      e.col(16777215).mat(0.35, 0, 0.5, wR),
      e.panel(i - 0.04, a - 0.5, i - 0.04, a + 0.5, 6.5, 15.5, DR(t, r)),
      e.panel(i + 0.04, a + 0.5, i + 0.04, a - 0.5, 6.5, 15.5, DR(t, r)));
  }
  (e.pop(),
    e.solid(iz.x0, iz.z0, iz.x1, iz.z1, 0, iz.top),
    e.push().col(14208960).mat(0.6, 0.05, 0.14, G),
    e.box(az.x0, 4.2, az.z0, az.x1, az.top, az.z1, t.c(`office`), 3.2, 3.6),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(az.x0, 0, az.z0, az.x1, 4.2, az.z1, t.c(`doors`), 3, 4.2, e.white),
    e.pop(),
    e.solid(az.x0, az.z0, az.x1, az.z1, 0, az.top));
}
function ACe(e) {
  (e.col(14868698).mat(0.7, 0.05, 0.2, 1),
    kR(e, dz, 0, sz),
    AR(e, dz, sz),
    e.col(3820646).mat(0.1, 0.6, 0.25, 1),
    e.box(pz.x0, 0, pz.z0, pz.x1, pz.top, pz.z1),
    e.col(13617858).mat(0.6, 0.1, 0.2, 1),
    e.box(iz.x0, 0, iz.z0, iz.x1, iz.top, iz.z1));
}
