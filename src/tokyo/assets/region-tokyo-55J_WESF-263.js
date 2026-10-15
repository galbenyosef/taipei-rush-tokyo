// tokyo/assets/region-tokyo-55J_WESF 263 — col
// Lines 97953-98264 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* fCe(e, t) {
  let n = t.c(`glass`),
    [r, i] = $R,
    [a, o] = ez;
  (e.push().col(15134450).mat(0.15, 0.35, 0.09, G),
    DR(e, ZR, 5.6, QR, n, 3.2, 4.4),
    e.col(16777215).mat(0.2, 0.2, 0.45, G),
    DR(e, ZR, 0, 5.6, t.c(`doors`), 3.2, 5.6),
    e.col(13620182).mat(0.4, 0.5, 0.05, G),
    e.sweep(ER(ZR), [0, 41.5, 0.25, 41.5, 0.25, 42.6, 0, 42.6], !0),
    e.sweep(ER(ZR), [0, 5.3, 0.6, 5.3, 0.6, 5.7, 0, 5.7], !0),
    e.col(8027778).mat(0.8, 0.1),
    OR(e, ZR, 42.300000000000004),
    e.pop(),
    yield,
    e.push(),
    e.col(16767400).mat(0.25, 0, 0.35, SR));
  {
    let [n, s] = MR(r, i, a, o, 0.12, 0.03),
      [c, l] = MR(r, i, a, o, 0.88, 0.03);
    e.panel(n, s, c, l, 6, 9.6, t.c(`doors`));
  }
  e.col(16777215).mat(0.3, 0, 0.5, SR);
  {
    let [n, s] = MR(r, i, a, o, 0.3, 0.7),
      [c, l] = MR(r, i, a, o, 0.7, 0.7);
    e.col(14212318).mat(0.4, 0.4, 0.05, G);
    let [u, d] = MR(r, i, a, o, 0.5, 1.2);
    (e.obox(
      u,
      3.75,
      d,
      Math.hypot(a - r, o - i) * 0.42,
      0.08,
      1.2,
      Math.atan2(o - i, a - r),
    ),
      e.col(16777215).mat(0.3, 0, 0.5, SR),
      jR(e, n, s, c, l, 0, 3.9, 5.4, wR(t, `tsutawa`)));
  }
  (dCe(e, 10, 33.9, 0.35), e.col(2764339).mat(0.5, 0.4));
  {
    let [n, s] = MR(
        r,
        i,
        a,
        o,
        (Math.hypot(a - r, o - i) - 13.6) / 2 / Math.hypot(a - r, o - i),
        0.5,
      ),
      [c, l] = MR(
        r,
        i,
        a,
        o,
        1 - (Math.hypot(a - r, o - i) - 13.6) / 2 / Math.hypot(a - r, o - i),
        0.5,
      );
    (jR(e, n, s, c, l, 0, 13.7, 22), e.col(16777215).mat(0.3, 0, 0.42, SR));
    let [u, d] = MR(n, s, c, l, 0.022, 0.08),
      [f, p] = MR(n, s, c, l, 0.978, 0.08);
    jR(e, u, d, f, p, 0, 14, 21.7, wR(t, `screenA`));
  }
  e.col(16777215).mat(0.3, 0, 0.5, SR);
  {
    let [n, s] = MR(r, i, a, o, 0.4, 0.4),
      [c, l] = MR(r, i, a, o, 0.6, 0.4);
    jR(e, n, s, c, l, 0, 36, 37.6, wR(t, `qflat`));
  }
  (e.col(16777215).mat(0.3, 0, 0.5, SR),
    e.panel(-15.15, -9, -15.15, -3, 36.2, 37.7, wR(t, `tsutawa`)),
    e.pop(),
    e.solid(-15, -15.5, 5, 5.5, 0, QR),
    e.solid(1, 5.5, 5, 21.5, 0, QR));
  for (let t = 5.5; t < 21.4; t += 3)
    t + 3 - 20.5 < 1 &&
      e.solid(t + 3 - 20.5, t, 1, Math.min(21.5, t + 3), 0, QR);
  (yield,
    e.coarse ||
      (e.push().col(10133154).mat(0.7, 0.3),
      e.box(-12, 42.300000000000004, -12, -5, 45.1, -5),
      e.box(-3, 42.300000000000004, -8, 3, 43.900000000000006, 2),
      e.pop()));
  {
    let [t, n] = MR(r, i, a, o, 0.08, 0.45),
      [s, c] = MR(r, i, a, o, 0.92, 0.45);
    (e.push().col(3816768).mat(0.6, 0.5),
      jR(e, t, n, s, c, -0.3, 42.6, 49.1),
      e.col(14685738).mat(0.35, 0, 0.55, SR),
      jR(e, t, n, s, c, 0.05, 42.900000000000006, 48.800000000000004),
      e.pop());
  }
}
function pCe(e, t) {
  (e.col(11846860).mat(0.2, 0.3, 0.25, 1),
    DR(e, ZR, 0, QR),
    OR(e, ZR, QR),
    e.col(16777215).mat(0.3, 0, 0.42, SR));
  let [n, r] = $R,
    [i, a] = ez,
    [o, s] = MR(n, r, i, a, 0.15, 0.4),
    [c, l] = MR(n, r, i, a, 0.85, 0.4);
  jR(e, o, s, c, l, 0, 10, 34, wR(t, `screenA`));
}
var mCe = {
    id: `shibuya-qflat`,
    site: (e) => ({
      x: tz.x,
      z: tz.z,
      gy: e.groundHeight(tz.x, tz.z),
      facing: tz.facing,
    }),
    name: { ja: `QFLAT`, zh: `QFLAT`, en: `QFLAT` },
    near: 260,
    build: fCe,
    far: pCe,
    farBoxes: (e, t) => [
      {
        ...uCe(-15, -15.5, 5, 21.5),
        y0: t.gy,
        y1: t.gy + QR,
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
        turn: 1.25 * xR,
        name: { zh: `QFLAT 大螢幕前`, en: `In front of the QFLAT screen` },
      },
    ],
  },
  iz = 5,
  az = 31.2,
  oz = 4.8,
  hCe = 3.8,
  sz = -10,
  cz = 16.5,
  lz = (() => {
    let e = [-3, -16.5, -15, -16.5, -15, cz];
    for (let t = 1; t < 6; t++) {
      let n = xR - (t / 6) * (xR / 2);
      e.push(sz + Math.cos(n) * iz, cz + Math.sin(n) * iz);
    }
    return (e.push(sz, 21.5, -3, 21.5), e);
  })(),
  uz = (() => {
    let e = ER(lz),
      t = e.length / 2;
    return (n) => e[n * 2] === -3 && e[((n + 1) % t) * 2] === -3;
  })(),
  dz = { x0: -3, z0: 2, x1: 5.5, z1: 21.5, top: 38.4 };
function* gCe(e, t) {
  let n = t.c(`glass`);
  if (
    (e.push().col(16777215).mat(0.25, 0.1, 0.45, G),
    DR(e, lz, 0, oz, t.c(`doors`), 4.5, oz, uz),
    e.col(15526628).mat(0.7, 0.05, 0.06, 1),
    DR(e, lz, oz, az, t.c(`plaster`), 6.4, 13.2, uz),
    e.col(14080732).mat(0.4, 0.4, 0.05, G),
    e.sweep(ER(lz), [0, 4.6, 0.5, 4.6, 0.5, 5, 0, 5], !0),
    e.col(13619924).mat(0.6, 0.2),
    OR(e, lz, az),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(10134700).mat(0.15, 0.4, 0.3, G);
    for (let t = 0; t < 6; t++) {
      let r = 5.9 + t * hCe;
      e.panel(-15.03, -15, -15.03, 15.5, r, r + 1.4, n);
    }
    e.pop();
  }
  (yield,
    e.push().col(16777215).mat(0.3, 0, 0.42, SR),
    AR(e, sz, cz, 5.06, xR / 2, xR, 6, 28, TR(t, `wrap`), e.coarse ? 3 : 6),
    e.panel(-15.06, 7.5, -15.06, 14.5, 5.3, 6.6, TR(t, `magnit`)),
    e.col(1842722).mat(0.5, 0.4),
    e.box(-9.8, 5, 21.5, -3.4, 9, 21.8),
    e.col(16777215).mat(0.3, 0, 0.45, SR),
    e.panel(-9.6, 21.82, -3.6, 21.82, 5.2, 8.8, TR(t, `vision`)),
    e.panel(-15.06, 12.9, -15.06, 15.3, 3.4, 4.3, TR(t, `kuri`)),
    e.pop(),
    e.push().col(6981288).mat(0.12, 0.35, 0.12, G),
    e.box(dz.x0, oz, dz.z0, dz.x1, dz.top, dz.z1, n, 4.25, 11.2),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(dz.x0, 0, dz.z0, dz.x1, oz, dz.z1, t.c(`doors`), 4.25, oz, e.white),
    e.col(16777215).mat(0.3, 0, 0.5, SR),
    e.panel(
      dz.x0 + 0.6,
      dz.z1 + 0.05,
      dz.x1 - 0.6,
      dz.z1 + 0.05,
      dz.top - 4.8,
      dz.top - 2.8,
      TR(t, `magnit`),
    ),
    e.pop(),
    e.push().col(14674156).mat(0.1, 0.3, 0.05, 0));
  let r = ER(lz);
  if (!e.coarse)
    for (let t = 0; t + 1 < r.length / 2; t++) {
      let i = r[t * 2],
        a = r[t * 2 + 1],
        o = r[t * 2 + 2],
        s = r[t * 2 + 3];
      (i > -3.5 && o > -3.5) ||
        (jR(e, i, a, o, s, -0.2, az, 32.4, n),
        jR(e, o, s, i, a, 0.2, az, 32.4, n));
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
      e.box(t - 0.08, az, n - 0.08, t + 0.08, 34.4, n + 0.08);
  (e.col(13619924).mat(0.7, 0.2),
    e.box(-6, az, -14, -3, 35.2, -6),
    e.pop(),
    e.solid(-15, -16.5, -3, cz, 0, az),
    e.solid(sz, cz, -3, 21.5, 0, az),
    e.solid(-15, cz, sz, 20, 0, az),
    e.solid(dz.x0, dz.z0, dz.x1, dz.z1, 0, dz.top),
    e.solid(dz.x0, -16.5, dz.x1, dz.z0, 0, az),
    e.push().col(15526628).mat(0.7, 0.05, 0.06, 1),
    e.wall(dz.x1, -16.5, dz.x0, -16.5, 0, az, t.c(`plaster`), 8.5, 15.6),
    e.wall(dz.x1, dz.z0, dz.x1, -16.5, 0, az, t.c(`plaster`), 9.25, 15.6),
    e.col(13619924).mat(0.6, 0.2),
    e.flat(dz.x0, -16.5, dz.x1, dz.z0, az),
    e.pop(),
    yield,
    e.push().col(14868182).mat(0.6, 0.1, 0.12, G),
    e.box(nz.x0, 4.6, nz.z0, nz.x1, nz.top, nz.z1, t.c(`office`), 3.2, 3.6),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(nz.x0, 0, nz.z0, nz.x1, 4.6, nz.z1, t.c(`doors`), 3, 4.6, e.white),
    e.col(2764339).mat(0.5, 0.4),
    e.box(nz.x0 + 1.2, 13.2, nz.z1, nz.x1 - 1.2, 21.4, nz.z1 + 0.5),
    e.col(16777215).mat(0.3, 0, 0.42, SR),
    e.panel(
      nz.x0 + 1.5,
      nz.z1 + 0.52,
      nz.x1 - 1.5,
      nz.z1 + 0.52,
      13.5,
      21.1,
      wR(t, `screenB`),
    ),
    e.col(3816768).mat(0.6, 0.5));
  for (let t of [nz.x0 + 2, nz.x1 - 2])
    e.box(t - 0.15, nz.top, nz.z1 - 3, t + 0.15, nz.top + 4, nz.z1 - 2.7);
  (e.col(16777215).mat(0.3, 0, 0.4, SR),
    e.panel(
      nz.x0 + 1,
      nz.z1 - 2.65,
      nz.x1 - 1,
      nz.z1 - 2.65,
      nz.top + 3.6,
      nz.top + 8.6,
      TR(t, `bill1`),
    ),
    e.col(3816768).mat(0.6, 0.5),
    e.box(
      nz.x0 + 1,
      nz.top + 3.6,
      nz.z1 - 2.9,
      nz.x1 - 1,
      nz.top + 8.6,
      nz.z1 - 2.68,
    ),
    e.pop(),
    e.push().col(16777215).mat(0.35, 0, 0.5, SR));
  for (let [n, r] of [
    [0, `blade1`],
    [1, `blade3`],
  ]) {
    let i = nz.x0 + 0.9 + n * 1.6,
      a = nz.z1 + 0.9;
    (e.col(2763824).mat(0.6, 0.4),
      e.box(i - 0.05, 6.5, nz.z1, i + 0.05, 6.7, a + 0.1),
      e.col(16777215).mat(0.35, 0, 0.5, SR),
      e.panel(i - 0.04, a - 0.5, i - 0.04, a + 0.5, 6.5, 15.5, TR(t, r)),
      e.panel(i + 0.04, a + 0.5, i + 0.04, a - 0.5, 6.5, 15.5, TR(t, r)));
  }
  (e.pop(),
    e.solid(nz.x0, nz.z0, nz.x1, nz.z1, 0, nz.top),
    e.push().col(14208960).mat(0.6, 0.05, 0.14, G),
    e.box(rz.x0, 4.2, rz.z0, rz.x1, rz.top, rz.z1, t.c(`office`), 3.2, 3.6),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(rz.x0, 0, rz.z0, rz.x1, 4.2, rz.z1, t.c(`doors`), 3, 4.2, e.white),
    e.pop(),
    e.solid(rz.x0, rz.z0, rz.x1, rz.z1, 0, rz.top));
}
function _Ce(e) {
  (e.col(14868698).mat(0.7, 0.05, 0.2, 1),
    DR(e, lz, 0, az),
    OR(e, lz, az),
    e.col(3820646).mat(0.1, 0.6, 0.25, 1),
    e.box(dz.x0, 0, dz.z0, dz.x1, dz.top, dz.z1),
    e.col(13617858).mat(0.6, 0.1, 0.2, 1),
    e.box(nz.x0, 0, nz.z0, nz.x1, nz.top, nz.z1));
}
