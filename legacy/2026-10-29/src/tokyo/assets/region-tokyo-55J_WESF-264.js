// tokyo/assets/region-tokyo-55J_WESF 264 — mat
// Lines 98265-98596 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var vCe = {
    id: `shibuya-qfront`,
    site: CR(YR.x, YR.z),
    name: {
      ja: `MAGNIT by SHIBUYA108`,
      zh: `MAGNIT by SHIBUYA108`,
      en: `MAGNIT by SHIBUYA108`,
    },
    near: 260,
    build: gCe,
    far: _Ce,
    farBoxes: (e, t) => [
      {
        x0: t.x - 15,
        x1: t.x - 3,
        z0: t.z - 16.5,
        z1: t.z + 21.5,
        y0: t.gy,
        y1: t.gy + az,
        rgb: [0.86, 0.85, 0.82],
        lit: !0,
      },
      {
        x0: t.x + dz.x0,
        x1: t.x + dz.x1,
        z0: t.z + dz.z0,
        z1: t.z + dz.z1,
        y0: t.gy,
        y1: t.gy + dz.top,
        rgb: [0.26, 0.32, 0.42],
        lit: !0,
      },
      {
        x0: t.x + nz.x0,
        x1: t.x + nz.x1,
        z0: t.z + nz.z0,
        z1: t.z + nz.z1,
        y0: t.gy,
        y1: t.gy + nz.top,
        rgb: [0.7, 0.68, 0.64],
        lit: !0,
      },
      {
        x0: t.x + rz.x0,
        x1: t.x + rz.x1,
        z0: t.z + rz.z0,
        z1: t.z + rz.z1,
        y0: t.gy,
        y1: t.gy + rz.top,
        rgb: [0.66, 0.62, 0.56],
        lit: !0,
      },
    ],
    blip: !0,
    anchors: [
      {
        key: `shibuya-magnit`,
        lx: -55,
        lz: 55,
        turn: 1.75 * xR,
        name: { zh: `MAGNIT 轉角`, en: `MAGNIT corner` },
      },
    ],
  },
  fz = { x: -1875.75, z: 1265.6 },
  pz = { x0: -5.75, z0: -8.6, x1: 5.75, z1: 8.65, top: 24.1 };
function yCe(e, t) {
  (e.push().col(15131354).mat(0.6, 0.05, 0.14, G),
    e.box(pz.x0, 4.4, pz.z0, pz.x1, pz.top, pz.z1, t.c(`office`), 2.9, 3.4),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(pz.x0, 0, pz.z0, pz.x1, 4.4, pz.z1, t.c(`doors`), 2.9, 4.4, e.white),
    e.col(16777215).mat(0.3, 0, 0.5, SR),
    e.panel(
      pz.x0 + 0.6,
      pz.z1 + 0.04,
      pz.x1 - 0.6,
      pz.z1 + 0.04,
      3.45,
      4.5,
      TR(t, `taisei`),
    ),
    e.col(1118740).mat(0.5, 0.3),
    e.box(pz.x0 + 0.5, 9.2, pz.z1, pz.x1 - 0.5, 19.6, pz.z1 + 0.45),
    e.col(16777215).mat(0.3, 0, 0.45, SR),
    e.panel(
      pz.x0 + 0.9,
      pz.z1 + 0.47,
      pz.x1 - 0.9,
      pz.z1 + 0.47,
      12.2,
      15.9,
      TR(t, `vision2`),
    ),
    e.col(3816768).mat(0.6, 0.5));
  for (let t of [pz.x0 + 1.2, pz.x1 - 1.2])
    e.box(t - 0.15, pz.top, pz.z1 - 2.2, t + 0.15, pz.top + 8.6, pz.z1 - 1.9);
  (e.box(
    pz.x0 + 0.6,
    pz.top + 0.6,
    pz.z1 - 2.15,
    pz.x1 - 0.6,
    pz.top + 8.4,
    pz.z1 - 1.95,
  ),
    e.col(16777215).mat(0.3, 0, 0.42, SR),
    e.panel(
      pz.x0 + 0.7,
      pz.z1 - 1.93,
      pz.x1 - 0.7,
      pz.z1 - 1.93,
      pz.top + 4.6,
      pz.top + 8.3,
      TR(t, `bill2`),
    ),
    e.panel(
      pz.x0 + 0.7,
      pz.z1 - 1.93,
      pz.x1 - 0.7,
      pz.z1 - 1.93,
      pz.top + 0.7,
      pz.top + 4.4,
      TR(t, `bill3`),
    ));
  for (let [n, r] of [
    [0, `blade0`],
    [1, `blade2`],
  ]) {
    let i = pz.z1 - 1 - n * 1.7,
      a = pz.x1 + 0.9;
    (e.col(2763824).mat(0.6, 0.4),
      e.box(pz.x1, 6.8, i - 0.05, a + 0.1, 7, i + 0.05),
      e.col(16777215).mat(0.35, 0, 0.5, SR),
      e.panel(a - 0.5, i + 0.04, a + 0.5, i + 0.04, 6.8, 15.8, TR(t, r)),
      e.panel(a + 0.5, i - 0.04, a - 0.5, i - 0.04, 6.8, 15.8, TR(t, r)));
  }
  (e.pop(), e.solid(pz.x0, pz.z0, pz.x1, pz.z1, 0, pz.top));
}
var bCe = {
    id: `shibuya-taisei`,
    site: CR(fz.x, fz.z),
    name: { ja: `大成堂書店`, zh: `大成堂書店`, en: `Taiseido Bookstore` },
    near: 220,
    build: yCe,
    far(e) {
      (e.col(14210252).mat(0.6, 0.05, 0.2, 1),
        e.box(pz.x0, 0, pz.z0, pz.x1, pz.top, pz.z1));
    },
    farBoxes: (e, t) => [
      {
        x0: t.x + pz.x0,
        x1: t.x + pz.x1,
        z0: t.z + pz.z0,
        z1: t.z + pz.z1,
        y0: t.gy,
        y1: t.gy + pz.top,
        rgb: [0.8, 0.78, 0.74],
        lit: !0,
      },
    ],
    blip: !1,
  },
  mz = { x: -1891, z: 1381 },
  hz = (e, t) => [e - mz.x, t - mz.z],
  gz = { x: -1877.6 - mz.x, z: 1362.6 - mz.z, r: 7.4 },
  _z = 34.6,
  vz = 46.5,
  yz = 5.2,
  bz = 4.2,
  xz = [
    ...hz(-1878, 1355.5),
    ...hz(-1911.5, 1355.5),
    ...hz(-1911.5, 1406.5),
    ...hz(-1873, 1401),
    ...hz(-1870.5, 1363),
  ],
  Sz = 14541285;
function* xCe(e, t) {
  let n = e.seg(28),
    { x: r, z: i, r: a } = gz;
  (e.push().col(Sz).mat(0.45, 0.3, 0.02, 1),
    DR(e, xz, yz, _z, void 0, 0, 0, (e) => e === 4),
    e.col(16777215).mat(0.2, 0.2, 0.5, G),
    DR(e, xz, 0, yz, t.c(`doors`), 3.2, yz, (e) => e === 4),
    e.col(11120307).mat(0.45, 0.7, 0.012, 1));
  let o = ER(xz);
  if (!e.coarse)
    for (let t = 9.4; t < 33.6; t += bz)
      e.sweep(
        o,
        [0, t - 0.18, 0.12, t - 0.18, 0.12, t + 0.18, 0, t + 0.18],
        !0,
      );
  if (
    (e.sweep(o, [0, 4.95, 0.9, 4.95, 0.9, 5.45, 0, 5.45], !0),
    e.sweep(
      o,
      [0, 34.300000000000004, 0.3, 34.300000000000004, 0.3, 35.6, 0, 35.6],
      !0,
    ),
    e.col(7829884).mat(0.8, 0.1),
    OR(e, xz, 35.4),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(5595242).mat(0.15, 0.5, 0.25, G);
    let [t, n] = hz(-1884, 1355.5),
      [r, i] = hz(-1911.5, 1355.5);
    for (let a = 6.2; a < 32.6; a += bz) {
      let [o, s] = MR(t, n, r, i, 0.62, 0.03),
        [c, l] = MR(t, n, r, i, 0.95, 0.03);
      e.panel(o, s, c, l, a + 0.6, a + 2.2);
    }
    e.pop();
  }
  yield;
  {
    let [n, r] = hz(-1882, 1355.5),
      [i, a] = hz(-1911.5, 1355.5);
    e.push().col(2764339).mat(0.5, 0.4);
    let [o, s] = MR(n, r, i, a, 0.52, 0.25),
      [c, l] = MR(n, r, i, a, 0.88, 0.25);
    (e.panel(o, s, c, l, 9, 27), e.col(16777215).mat(0.3, 0, 0.4, SR));
    let [u, d] = MR(n, r, i, a, 0.54, 0.3),
      [f, p] = MR(n, r, i, a, 0.86, 0.3);
    (e.panel(u, d, f, p, 9.4, 26.6, wR(t, `screenB`)), e.pop());
  }
  {
    e.push().col(16777215).mat(0.3, 0, 0.5, SR);
    let [n, r] = hz(-1872.3, 1390),
      [i, a] = hz(-1871, 1371);
    (jR(e, n, r, i, a, 0.35, 5.8, 7.6, wR(t, `mark108`)), e.pop());
  }
  if (
    (e.push().col(Sz, 1.03).mat(0.4, 0.35, 0.03, 1),
    e.lathe(r, i, [a, yz, a, 45.3], n, 0, e.white, !1, !0),
    e.col(16777215).mat(0.2, 0.2, 0.5, G),
    e.lathe(r, i, [a - 0.4, 0, a - 0.4, yz], n, 0, t.c(`doors`), !1, !0),
    e.col(11120307).mat(0.45, 0.7, 0.04, G),
    e.lathe(r, i, [a, 4.9, a + 0.9, 4.9, a + 0.9, 5.4, a, 5.4], n),
    !e.coarse)
  )
    for (let t = 9.4; t < 43.5; t += bz)
      e.lathe(
        r,
        i,
        [a, t - 0.15, a + 0.1, t - 0.15, a + 0.1, t + 0.15, a, t + 0.15],
        n,
      );
  (e.col(14672613).mat(0.3, 0.75, 0.06, G),
    e.lathe(r, i, [a, 45.3, a + 0.35, 45.3, a + 0.35, vz, a - 0.3, vz], n),
    e.col(7829884).mat(0.8, 0.1),
    e.disc(r, vz, i, a - 0.3, n),
    e.pop(),
    yield);
  let s = -xR / 4;
  (e.push().col(16777215).mat(0.3, 0, 0.42, SR),
    AR(
      e,
      r,
      i,
      a + 0.18,
      s - 0.5,
      s + 0.5,
      9,
      31,
      wR(t, `ad108`),
      e.coarse ? 4 : 8,
    ),
    e.mat(0.3, 0, 0.6, SR),
    AR(
      e,
      r,
      i,
      a + 0.18,
      s - 0.18,
      s + 0.18,
      33.2,
      43.6,
      wR(t, `v108`),
      e.coarse ? 2 : 4,
    ));
  for (let n = 0; n < 4; n++)
    AR(
      e,
      r,
      i,
      a + 0.37,
      s + xR / 4 + (n * xR) / 2 - 0.62,
      s + xR / 4 + (n * xR) / 2 + 0.62,
      44,
      45.15,
      wR(t, `mark108`),
      e.coarse ? 3 : 6,
    );
  e.col(15132906).mat(0.35, 0.6, 0.05, G);
  let c = r + Math.cos(s) * (a + 1.6),
    l = i + Math.sin(s) * (a + 1.6);
  (e.obox(c, 4.1, l, 3.2, 0.18, 1.5, s + xR / 2), e.pop());
  {
    let [t, n] = hz(-1911.5, 1355.5),
      [r, i] = hz(-1873, 1401),
      [, a] = hz(0, 1406.5);
    (e.solid(t, n, r, i, 0, _z), e.solid(t, i, r - 8, a, 0, _z));
  }
  (e.solidRot(r, i, a * 0.92, a * 0.92, xR / 8, 0, vz),
    e.solidRot(r, i, a * 0.92, a * 0.92, -xR / 8 + xR / 4, 0, vz),
    e.coarse ||
      (e.push().col(10133154).mat(0.7, 0.3),
      e.box(-14, 35.4, -10, -4, 37.800000000000004, 4),
      e.box(-12, 35.4, 10, -2, 37, 18),
      e.pop()));
}
function SCe(e, t) {
  (e.col(Sz).mat(0.4, 0.6, 0.1, 1),
    DR(e, xz, 0, _z, void 0, 0, 0, (e) => e === 4),
    OR(e, xz, _z),
    e.lathe(gz.x, gz.z, [gz.r, 0, gz.r, vz], 8, 0, e.white, !1, !0),
    e.disc(gz.x, vz, gz.z, gz.r, 8),
    e.col(16777215).mat(0.3, 0, 0.6, SR),
    AR(
      e,
      gz.x,
      gz.z,
      gz.r + 0.1,
      -xR / 4 - 0.2,
      -xR / 4 + 0.2,
      33.2,
      43.6,
      wR(t, `v108`),
      1,
    ));
}
