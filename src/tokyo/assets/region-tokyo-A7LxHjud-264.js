// tokyo/assets/region-tokyo-A7LxHjud 264 — mat
// Lines 98356-98687 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var jCe = {
    id: `shibuya-qfront`,
    site: TR(ZR.x, ZR.z),
    name: {
      ja: `MAGNIT by SHIBUYA108`,
      zh: `MAGNIT by SHIBUYA108`,
      en: `MAGNIT by SHIBUYA108`,
    },
    near: 260,
    build: kCe,
    far: ACe,
    farBoxes: (e, t) => [
      {
        x0: t.x - 15,
        x1: t.x - 3,
        z0: t.z - 16.5,
        z1: t.z + 21.5,
        y0: t.gy,
        y1: t.gy + sz,
        rgb: [0.86, 0.85, 0.82],
        lit: !0,
      },
      {
        x0: t.x + pz.x0,
        x1: t.x + pz.x1,
        z0: t.z + pz.z0,
        z1: t.z + pz.z1,
        y0: t.gy,
        y1: t.gy + pz.top,
        rgb: [0.26, 0.32, 0.42],
        lit: !0,
      },
      {
        x0: t.x + iz.x0,
        x1: t.x + iz.x1,
        z0: t.z + iz.z0,
        z1: t.z + iz.z1,
        y0: t.gy,
        y1: t.gy + iz.top,
        rgb: [0.7, 0.68, 0.64],
        lit: !0,
      },
      {
        x0: t.x + az.x0,
        x1: t.x + az.x1,
        z0: t.z + az.z0,
        z1: t.z + az.z1,
        y0: t.gy,
        y1: t.gy + az.top,
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
        turn: 1.75 * CR,
        name: { zh: `MAGNIT 轉角`, en: `MAGNIT corner` },
      },
    ],
  },
  mz = { x: -1875.75, z: 1265.6 },
  hz = { x0: -5.75, z0: -8.6, x1: 5.75, z1: 8.65, top: 24.1 };
function MCe(e, t) {
  (e.push().col(15131354).mat(0.6, 0.05, 0.14, G),
    e.box(hz.x0, 4.4, hz.z0, hz.x1, hz.top, hz.z1, t.c(`office`), 2.9, 3.4),
    e.col(16777215).mat(0.25, 0.1, 0.45, G),
    e.box(hz.x0, 0, hz.z0, hz.x1, 4.4, hz.z1, t.c(`doors`), 2.9, 4.4, e.white),
    e.col(16777215).mat(0.3, 0, 0.5, wR),
    e.panel(
      hz.x0 + 0.6,
      hz.z1 + 0.04,
      hz.x1 - 0.6,
      hz.z1 + 0.04,
      3.45,
      4.5,
      DR(t, `taisei`),
    ),
    e.col(1118740).mat(0.5, 0.3),
    e.box(hz.x0 + 0.5, 9.2, hz.z1, hz.x1 - 0.5, 19.6, hz.z1 + 0.45),
    e.col(16777215).mat(0.3, 0, 0.45, wR),
    e.panel(
      hz.x0 + 0.9,
      hz.z1 + 0.47,
      hz.x1 - 0.9,
      hz.z1 + 0.47,
      12.2,
      15.9,
      DR(t, `vision2`),
    ),
    e.col(3816768).mat(0.6, 0.5));
  for (let t of [hz.x0 + 1.2, hz.x1 - 1.2])
    e.box(t - 0.15, hz.top, hz.z1 - 2.2, t + 0.15, hz.top + 8.6, hz.z1 - 1.9);
  (e.box(
    hz.x0 + 0.6,
    hz.top + 0.6,
    hz.z1 - 2.15,
    hz.x1 - 0.6,
    hz.top + 8.4,
    hz.z1 - 1.95,
  ),
    e.col(16777215).mat(0.3, 0, 0.42, wR),
    e.panel(
      hz.x0 + 0.7,
      hz.z1 - 1.93,
      hz.x1 - 0.7,
      hz.z1 - 1.93,
      hz.top + 4.6,
      hz.top + 8.3,
      DR(t, `bill2`),
    ),
    e.panel(
      hz.x0 + 0.7,
      hz.z1 - 1.93,
      hz.x1 - 0.7,
      hz.z1 - 1.93,
      hz.top + 0.7,
      hz.top + 4.4,
      DR(t, `bill3`),
    ));
  for (let [n, r] of [
    [0, `blade0`],
    [1, `blade2`],
  ]) {
    let i = hz.z1 - 1 - n * 1.7,
      a = hz.x1 + 0.9;
    (e.col(2763824).mat(0.6, 0.4),
      e.box(hz.x1, 6.8, i - 0.05, a + 0.1, 7, i + 0.05),
      e.col(16777215).mat(0.35, 0, 0.5, wR),
      e.panel(a - 0.5, i + 0.04, a + 0.5, i + 0.04, 6.8, 15.8, DR(t, r)),
      e.panel(a + 0.5, i - 0.04, a - 0.5, i - 0.04, 6.8, 15.8, DR(t, r)));
  }
  (e.pop(), e.solid(hz.x0, hz.z0, hz.x1, hz.z1, 0, hz.top));
}
var NCe = {
    id: `shibuya-taisei`,
    site: TR(mz.x, mz.z),
    name: { ja: `大成堂書店`, zh: `大成堂書店`, en: `Taiseido Bookstore` },
    near: 220,
    build: MCe,
    far(e) {
      (e.col(14210252).mat(0.6, 0.05, 0.2, 1),
        e.box(hz.x0, 0, hz.z0, hz.x1, hz.top, hz.z1));
    },
    farBoxes: (e, t) => [
      {
        x0: t.x + hz.x0,
        x1: t.x + hz.x1,
        z0: t.z + hz.z0,
        z1: t.z + hz.z1,
        y0: t.gy,
        y1: t.gy + hz.top,
        rgb: [0.8, 0.78, 0.74],
        lit: !0,
      },
    ],
    blip: !1,
  },
  gz = { x: -1891, z: 1381 },
  _z = (e, t) => [e - gz.x, t - gz.z],
  vz = { x: -1877.6 - gz.x, z: 1362.6 - gz.z, r: 7.4 },
  yz = 34.6,
  bz = 46.5,
  xz = 5.2,
  Sz = 4.2,
  Cz = [
    ..._z(-1878, 1355.5),
    ..._z(-1911.5, 1355.5),
    ..._z(-1911.5, 1406.5),
    ..._z(-1873, 1401),
    ..._z(-1870.5, 1363),
  ],
  wz = 14541285;
function* PCe(e, t) {
  let n = e.seg(28),
    { x: r, z: i, r: a } = vz;
  (e.push().col(wz).mat(0.45, 0.3, 0.02, 1),
    kR(e, Cz, xz, yz, void 0, 0, 0, (e) => e === 4),
    e.col(16777215).mat(0.2, 0.2, 0.5, G),
    kR(e, Cz, 0, xz, t.c(`doors`), 3.2, xz, (e) => e === 4),
    e.col(11120307).mat(0.45, 0.7, 0.012, 1));
  let o = OR(Cz);
  if (!e.coarse)
    for (let t = 9.4; t < 33.6; t += Sz)
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
    AR(e, Cz, 35.4),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(5595242).mat(0.15, 0.5, 0.25, G);
    let [t, n] = _z(-1884, 1355.5),
      [r, i] = _z(-1911.5, 1355.5);
    for (let a = 6.2; a < 32.6; a += Sz) {
      let [o, s] = PR(t, n, r, i, 0.62, 0.03),
        [c, l] = PR(t, n, r, i, 0.95, 0.03);
      e.panel(o, s, c, l, a + 0.6, a + 2.2);
    }
    e.pop();
  }
  yield;
  {
    let [n, r] = _z(-1882, 1355.5),
      [i, a] = _z(-1911.5, 1355.5);
    e.push().col(2764339).mat(0.5, 0.4);
    let [o, s] = PR(n, r, i, a, 0.52, 0.25),
      [c, l] = PR(n, r, i, a, 0.88, 0.25);
    (e.panel(o, s, c, l, 9, 27), e.col(16777215).mat(0.3, 0, 0.4, wR));
    let [u, d] = PR(n, r, i, a, 0.54, 0.3),
      [f, p] = PR(n, r, i, a, 0.86, 0.3);
    (e.panel(u, d, f, p, 9.4, 26.6, ER(t, `screenB`)), e.pop());
  }
  {
    e.push().col(16777215).mat(0.3, 0, 0.5, wR);
    let [n, r] = _z(-1872.3, 1390),
      [i, a] = _z(-1871, 1371);
    (NR(e, n, r, i, a, 0.35, 5.8, 7.6, ER(t, `mark108`)), e.pop());
  }
  if (
    (e.push().col(wz, 1.03).mat(0.4, 0.35, 0.03, 1),
    e.lathe(r, i, [a, xz, a, 45.3], n, 0, e.white, !1, !0),
    e.col(16777215).mat(0.2, 0.2, 0.5, G),
    e.lathe(r, i, [a - 0.4, 0, a - 0.4, xz], n, 0, t.c(`doors`), !1, !0),
    e.col(11120307).mat(0.45, 0.7, 0.04, G),
    e.lathe(r, i, [a, 4.9, a + 0.9, 4.9, a + 0.9, 5.4, a, 5.4], n),
    !e.coarse)
  )
    for (let t = 9.4; t < 43.5; t += Sz)
      e.lathe(
        r,
        i,
        [a, t - 0.15, a + 0.1, t - 0.15, a + 0.1, t + 0.15, a, t + 0.15],
        n,
      );
  (e.col(14672613).mat(0.3, 0.75, 0.06, G),
    e.lathe(r, i, [a, 45.3, a + 0.35, 45.3, a + 0.35, bz, a - 0.3, bz], n),
    e.col(7829884).mat(0.8, 0.1),
    e.disc(r, bz, i, a - 0.3, n),
    e.pop(),
    yield);
  let s = -CR / 4;
  (e.push().col(16777215).mat(0.3, 0, 0.42, wR),
    MR(
      e,
      r,
      i,
      a + 0.18,
      s - 0.5,
      s + 0.5,
      9,
      31,
      ER(t, `ad108`),
      e.coarse ? 4 : 8,
    ),
    e.mat(0.3, 0, 0.6, wR),
    MR(
      e,
      r,
      i,
      a + 0.18,
      s - 0.18,
      s + 0.18,
      33.2,
      43.6,
      ER(t, `v108`),
      e.coarse ? 2 : 4,
    ));
  for (let n = 0; n < 4; n++)
    MR(
      e,
      r,
      i,
      a + 0.37,
      s + CR / 4 + (n * CR) / 2 - 0.62,
      s + CR / 4 + (n * CR) / 2 + 0.62,
      44,
      45.15,
      ER(t, `mark108`),
      e.coarse ? 3 : 6,
    );
  e.col(15132906).mat(0.35, 0.6, 0.05, G);
  let c = r + Math.cos(s) * (a + 1.6),
    l = i + Math.sin(s) * (a + 1.6);
  (e.obox(c, 4.1, l, 3.2, 0.18, 1.5, s + CR / 2), e.pop());
  {
    let [t, n] = _z(-1911.5, 1355.5),
      [r, i] = _z(-1873, 1401),
      [, a] = _z(0, 1406.5);
    (e.solid(t, n, r, i, 0, yz), e.solid(t, i, r - 8, a, 0, yz));
  }
  (e.solidRot(r, i, a * 0.92, a * 0.92, CR / 8, 0, bz),
    e.solidRot(r, i, a * 0.92, a * 0.92, -CR / 8 + CR / 4, 0, bz),
    e.coarse ||
      (e.push().col(10133154).mat(0.7, 0.3),
      e.box(-14, 35.4, -10, -4, 37.800000000000004, 4),
      e.box(-12, 35.4, 10, -2, 37, 18),
      e.pop()));
}
function FCe(e, t) {
  (e.col(wz).mat(0.4, 0.6, 0.1, 1),
    kR(e, Cz, 0, yz, void 0, 0, 0, (e) => e === 4),
    AR(e, Cz, yz),
    e.lathe(vz.x, vz.z, [vz.r, 0, vz.r, bz], 8, 0, e.white, !1, !0),
    e.disc(vz.x, bz, vz.z, vz.r, 8),
    e.col(16777215).mat(0.3, 0, 0.6, wR),
    MR(
      e,
      vz.x,
      vz.z,
      vz.r + 0.1,
      -CR / 4 - 0.2,
      -CR / 4 + 0.2,
      33.2,
      43.6,
      ER(t, `v108`),
      1,
    ));
}
