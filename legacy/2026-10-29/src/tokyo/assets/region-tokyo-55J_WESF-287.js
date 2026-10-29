// tokyo/assets/region-tokyo-55J_WESF 287 — mat
// Lines 105616-105924 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* vTe(e, t) {
  let n = e.coarse ? 36 : 96,
    r = e.coarse ? 36 : 160,
    i = VV(8101),
    a = (e) => [e % 2 ? mU : hU, 0.92 + 0.12 * i.next()];
  if (
    (e.push().mat(0.3, 0.2, 0.25, G),
    fU(e, n, 0.93, 0, 7.5, () => [gU, 1]),
    e.mat(0.6, 0.2, 0.1, 1),
    !e.coarse)
  )
    for (let t = 0; t < n; t += 2) {
      let [r, i] = dU((t / n) * Math.PI * 2, 0.965);
      e.col(_Te).cylY(r, i, 0, 7.5, 0.45, 6, 0.45, !1);
    }
  (e.pop(), yield);
  let o = [
    { y: 7.5, h: 4.4, s: 1 },
    { y: 16.5, h: 4.2, s: 0.99 },
    { y: 25.5, h: 4, s: 0.98 },
    { y: 34, h: 3.6, s: 0.97 },
  ];
  for (let t = 0; t < o.length; t++) {
    let s = o[t];
    (e.push().mat(0.8, 0, 0.14, 1),
      fU(e, r, s.s, s.y, s.y + s.h, a),
      pU(e, n, s.s - 0.07, s.s, s.y + 0.1, s.y, !1, () => [13223098, 1]),
      e.mat(0.95, 0, 0, 0),
      pU(
        e,
        n,
        s.s - 0.014,
        s.s + 0.004,
        s.y + s.h + 0.5,
        s.y + s.h + 0.5,
        !0,
        () => [_U, 0.9 + 0.2 * i.next()],
      ),
      e.coarse ||
        fU(e, n, s.s + 0.004, s.y + s.h - 0.6, s.y + s.h + 0.5, () => [
          _U,
          0.75 + 0.3 * i.next(),
        ]),
      e.pop());
    let c = t + 1 < o.length ? o[t + 1].y : 41;
    (e.push().mat(0.3, 0.25, 0.2, G),
      fU(e, n, s.s - 0.07, s.y + s.h, c, () => [gU, 1]),
      e.pop(),
      yield);
  }
  (e.push().mat(0.8, 0, 0.14, 1),
    fU(e, r, 0.975, 41, 44.5, a),
    e.mat(0.55, 0.4, 0, 0),
    pU(e, n, 0.66, 0.975, 47, 44.5, !0, (e) => [13159112, e % 2 ? 0.97 : 1.03]),
    e.mat(0.85, 0, 0.1, 1),
    pU(e, n, 0.66, 0.92, 43.5, 41, !1, (e) => [e % 3 ? 10516044 : 7228978, 1]),
    fU(e, n, 0.66, 43.5, 47, a, !0),
    e.pop(),
    yield,
    e.push().mat(0.85, 0, 0, 0));
  let s = (t, r, a, o, s) => {
    for (let c = 0; c < s; c++) {
      let l = t + ((r - t) * c) / s,
        u = t + ((r - t) * (c + 1)) / s,
        d = a + ((o - a) * c) / s,
        f = a + ((o - a) * (c + 1)) / s;
      pU(e, n, l, u, d, f, !0, () => [
        vU[Math.floor(i.next() * vU.length)],
        0.9 + 0.15 * i.next(),
      ]);
    }
  };
  (s(0.56, 0.75, 1.2, 14, e.coarse ? 2 : 5),
    fU(e, n, 0.75, 14, 17, () => [5920080, 1], !0),
    s(0.75, 0.92, 17, 38, e.coarse ? 2 : 6),
    pU(e, n, 0.49, 0.56, RV.PAVE + 0.4, RV.PAVE + 0.4, !0, () => [11031866, 1]),
    e.pop(),
    e.push().mat(0.95, 0, 0, 0));
  {
    let t = e.white,
      r = e.v(sU.x, RV.PAVE + 0.42, sU.z, 0, 1, 0, t.u0, t.v0);
    for (let r = 0; r < n; r++) {
      let [i, a] = dU((r / n) * Math.PI * 2, 0.49);
      (e.col(5212730, 0.94 + (Math.floor((i - sU.x) / 8) & 1) * 0.1),
        e.v(i, RV.PAVE + 0.42, a, 0, 1, 0, t.u0, t.v0));
    }
    for (let t = 0; t < n; t++) e.tri(r, r + 1 + ((t + 1) % n), r + 1 + t);
  }
  if ((e.pop(), e.colliders))
    for (let t = 0; t < 24; t++) {
      let n = (t / 24) * Math.PI * 2,
        r = ((t + 1) / 24) * Math.PI * 2,
        [i, a] = dU(n, 1),
        [o, s] = dU(r, 1);
      e.solidRot(
        (i + o) / 2,
        (a + s) / 2,
        Math.hypot(o - i, s - a) / 2 + 0.5,
        3,
        Math.atan2(s - a, o - i),
        0,
        30,
      );
    }
}
var yU = 13616302;
function* yTe(e, t) {
  let n = lU,
    r = (n.x0 + n.x1) / 2,
    i = t.c(`granite`);
  if (
    (e.push().col(12761252).mat(0.85, 0, 0.06, 1),
    e.box(n.x0 - 3, 0, n.z0 - 2, n.x1 + 3, 1.6, n.z1 + 4, i, 3, 1.6),
    !e.coarse)
  )
    for (let t = 0; t < 6; t++)
      e.box(
        r - 9,
        0,
        n.z1 + 4 + t * 0.5,
        r + 9,
        1.6 - (t + 1) * 0.26,
        n.z1 + 4.5 + t * 0.5,
      );
  e.col(yU).mat(0.8, 0, 0.12, 1);
  let a = (t, r) => {
    if ((e.box(t, 1.6, n.z0 + 3, r, 15, n.z1, i, 3, 3), !e.coarse)) {
      e.col(6972504).mat(0.6, 0.1, 0.25, G);
      for (let i = t + 2.5; i < r - 1.5; i += 4)
        (e.panel(i + 1.1, n.z1 + 0.02, i - 1.1, n.z1 + 0.02, 3.5, 7.5),
          e.panel(i + 1.1, n.z1 + 0.02, i - 1.1, n.z1 + 0.02, 9.5, 13));
      e.col(yU, 1.06).mat(0.8, 0, 0.12, 1);
      for (let i = t + 0.5; i <= r; i += 4)
        e.box(i - 0.35, 1.6, n.z1, i + 0.35, 15, n.z1 + 0.5);
      e.box(t - 0.3, 14.4, n.z0 + 2.7, r + 0.3, 15.6, n.z1 + 0.8);
    }
    e.col(yU).mat(0.8, 0, 0.12, 1);
  };
  (a(n.x0, r - 13),
    a(r + 13, n.x1),
    e.box(r - 13, 1.6, n.z0, r + 13, 19, n.z1 + 1.5, i, 3, 3),
    e.col(4998718).mat(0.6, 0, 0.3, G),
    e.panel(r + 5, n.z1 + 1.52, r - 5, n.z1 + 1.52, 1.6, 11),
    e.col(yU, 1.05).mat(0.8, 0, 0.12, 1));
  for (let t of [-6.5, 6.5])
    e.box(r + t - 1.2, 1.6, n.z1 + 1.5, r + t + 1.2, 19, n.z1 + 2.6);
  (e.box(r - 14, 18.2, n.z0 - 0.3, r + 14, 19.6, n.z1 + 2.8), e.pop(), yield);
  let o = (n.z0 + n.z1) / 2 + 1;
  e.push().col(yU).mat(0.8, 0, 0.12, 1);
  let s = e.coarse ? 8 : 16;
  (e.lathe(
    r,
    o,
    [10, 19.6, 10, 21, 9, 21, 9, 25.5, 8.2, 25.5, 8.2, 27],
    s,
    Math.PI / s,
  ),
    e.col(7314566).mat(0.55, 0.35, 0, 0),
    e.lathe(
      r,
      o,
      [8.6, 27, 7.6, 29, 5.6, 30.8, 2.6, 31.8, 0.01, 32.2],
      s,
      Math.PI / s,
    ),
    e.col(4016714).mat(0.5, 0.5, 0, 0),
    e.cylY(r, o, 32.2, 33.6, 0.5, 6, 0.2),
    e.pop(),
    e.solid(n.x0 - 3, n.z0 - 2, n.x1 + 3, n.z1 + 3, 0, 19));
}
function bTe(e, t, n, r, i, a) {
  let o = VV(a),
    s =
      i === `autumn`
        ? 15252770
        : i === `bloom`
          ? 9420374
          : i === `bare`
            ? 0
            : 7117380;
  if (
    (e.push().col(6181962).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, r * 0.92, n, 0.32, e.coarse ? 3 : 5, 0.12),
    e.pole(t, n, 0.35, 0, 3),
    s)
  ) {
    let i = r * 0.2 * o.range(0.9, 1.1);
    HV(
      e,
      t,
      n,
      e.coarse
        ? [
            [0, r * 0.18],
            [i, r * 0.3],
            [0, r],
          ]
        : [
            [0, r * 0.16],
            [i, r * 0.34],
            [i * 0.62, r * 0.66],
            [0, r],
          ],
      e.coarse ? 4 : 6,
      s,
      o.range(0.9, 1.08),
      o.next() * 3,
    );
  } else if (!e.coarse)
    for (let i = 0; i < 6; i++) {
      let a = o.next() * Math.PI * 2,
        s = r * (0.25 + i * 0.1),
        c = r * 0.16 * (1 - i * 0.12);
      e.rod(
        t,
        s,
        n,
        t + Math.cos(a) * c,
        s + c,
        n + Math.sin(a) * c,
        0.07,
        3,
        0.03,
      );
    }
  e.pop();
}
function* xTe(e, t) {
  let n = t.season ?? `green`,
    r = t.c(`paving`);
  XV(
    e,
    [
      [cU.x, cU.z1],
      [cU.x, uU.z + uU.r],
    ],
    9,
    RV.PATH,
    6119523,
    e.white,
    6,
  );
  for (let t of [-10.5, 10.5])
    XV(
      e,
      [
        [cU.x + t, cU.z1],
        [cU.x + t, uU.z + uU.r + 1],
      ],
      8,
      RV.PATH,
      n === `autumn` ? 14201402 : 12432805,
      r,
      4,
    );
  yield;
  for (let t = cU.z1 - 5; t > uU.z + 4; t -= e.coarse ? 18 : 9)
    for (let r of [-13.5, -7.5, 7.5, 13.5])
      bTe(
        e,
        cU.x + r,
        t,
        18 + ((t * 7 + r) % 3),
        n,
        Math.round(t * 31 + r * 7),
      );
  (yield, e.push().col(6262595).mat(0.95, 0, 0, 0));
  {
    let t = e.white,
      n = e.coarse ? 12 : 24,
      r = e.v(uU.x, RV.PATH, uU.z, 0, 1, 0, t.u0, t.v0);
    for (let r = 0; r < n; r++)
      e.v(
        uU.x + Math.cos((r / n) * Math.PI * 2) * uU.r,
        RV.PATH,
        uU.z + Math.sin((r / n) * Math.PI * 2) * uU.r,
        0,
        1,
        0,
        t.u0,
        t.v0,
      );
    for (let t = 0; t < n; t++) e.tri(r, r + 1 + ((t + 1) % n), r + 1 + t);
  }
  if (
    (e.pop(),
    ZV(e, uU.x, uU.z, 6, 6, 8201, 0, !0),
    e.push().col(15660022).mat(0.3, 0, 0.35, 1),
    HV(
      e,
      uU.x,
      uU.z,
      [
        [0.8, RV.WATER],
        [0.3, 5],
        [0, 6],
      ],
      6,
      15660022,
      1,
    ),
    e.pop(),
    !e.coarse)
  )
    for (let t = cU.z1 - 9; t > uU.z + 8; t -= 18)
      for (let n of [-15.5, 15.5])
        (eH(e, cU.x + n, t, 4.2, !0),
          $V(e, cU.x + n * 0.68, t + 4, Math.PI / 2));
}
