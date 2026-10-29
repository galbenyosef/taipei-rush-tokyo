// tokyo/assets/region-tokyo-55J_WESF 219 — col
// Lines 85279-85563 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function TN(e, t, n) {
  for (let r = 0; r < 4; r++) {
    let i = [fN[r][0], fN[r][1]];
    for (let a = 0; a + 1 < t.length; a++) {
      let o = t[a],
        s = t[a + 1];
      if (s <= o + 0.5) continue;
      hN(e, (o + s) / 2);
      let c = 0.22 + 0.006 * qM(o);
      (n
        ? (_N(e, mN(r, -1, o), mN(r, 1, s), i, 1.2 + 0.03 * qM(o), c * 0.7),
          _N(e, mN(r, 1, o), mN(r, -1, s), i, 1.2 + 0.03 * qM(o), c * 0.7))
        : (gN(e, mN(r, -1, o), mN(r, 1, s), c, e.coarse ? 3 : 4),
          gN(e, mN(r, 1, o), mN(r, -1, s), c, e.coarse ? 3 : 4)),
        e.coarse ||
          gN(e, mN(r, -1, (o + s) / 2), mN(r, 1, (o + s) / 2), c * 0.7, 3),
        Math.abs(s - zM.under) > 0.1 &&
          Math.abs(s - BM.under) > 0.1 &&
          Math.abs(s - VM) > 0.1 &&
          (hN(e, s - 0.3), gN(e, mN(r, -1, s), mN(r, 1, s), c * 1.3, 4)));
    }
  }
}
function* qye(e) {
  if (
    (TN(e, $M.slice(0, 3), !0),
    yield,
    TN(e, $M.slice(2), !0),
    yield,
    TN(e, eN, !1),
    TN(e, tN, !1),
    yield,
    !e.coarse)
  )
    for (let t of [ZM, 79, 105.5, ...eN.slice(2, -1)]) {
      hN(e, t);
      let n = qM(t);
      (gN(e, [-n, t, -n], [n, t, n], 0.22, 3),
        gN(e, [n, t, -n], [-n, t, n], 0.22, 3));
    }
  let t = (t, n, r) => {
    if (
      (e.col(9078144).mat(0.6, 0.3, 0.08, 1),
      e.box(-t, n, -t, t, r, t),
      !e.coarse)
    ) {
      e.col(12170670).mat(0.5, 0.4, 0.05, 1);
      for (let [i, a] of pN)
        e.box(i * t - 0.2, n, a * t - 0.2, i * t + 0.2, r, a * t + 0.2);
    }
  };
  (t(2.7, sN.h + 0.6, zM.under),
    t(1.6, zM.roof, BM.under),
    e.solid(-qM(70) + 1, -qM(70) + 1, qM(70) - 1, qM(70) - 1, ZM, 95),
    e.solid(-qM(110) + 1, -qM(110) + 1, qM(110) - 1, qM(110) - 1, 95, zM.under),
    e.solid(-qM(180), -qM(180), qM(180), qM(180), zM.roof + 0.5, BM.under),
    e.solid(-qM(240), -qM(240), qM(240), qM(240), BM.roof + 0.5, HM),
    yield);
}
function* Jye(e, t) {
  let n = t.c(`glass`),
    r = yN(nN, rN),
    i = (e) => xN(r, (nN + e) / nN);
  (e.col(14865341).mat(0.6, 0.2, 0.42, 1),
    bN(e, xN(r, qM(zM.under) / nN), i(-0.3), zM.under, zM.soffit),
    Vk(e, i(-0.3), zM.soffit, !1),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    bN(e, i(-0.3), i(-0.3), zM.soffit, zM.f1 - 0.2),
    e.col(15260866).mat(0.12, 0.35, 0.34, G),
    bN(e, i(-0.3), i(0.35), zM.f1 - 0.2, zM.mid, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    bN(e, i(0.35), i(0.35), zM.mid, zM.f2),
    e.col(15260866).mat(0.12, 0.35, 0.34, G),
    bN(e, i(0.1), i(0.75), zM.f2, zM.top2, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    bN(e, i(0.75), i(0.75), zM.top2, zM.roof),
    Vk(e, i(0.75), zM.roof, !0),
    e.coarse ||
      (e.col(13157564).mat(0.6, 0.3, 0.04, 1),
      e.box(
        -qM(zM.roof) + 1.2,
        zM.roof,
        -qM(zM.roof) + 1.2,
        qM(zM.roof) - 1.2,
        zM.roof + 2.4,
        qM(zM.roof) - 1.2,
      )));
  for (let [t, n] of i(0.75).filter((e, t) => t % 2 == 0))
    SN(e, t, zM.roof, n, 0.35);
  yield;
  let a = yN(iN, aN),
    o = (e) => xN(a, (iN + e) / iN);
  if (
    (e.col(14276303).mat(0.6, 0.2, 0.1, 1),
    Vk(e, o(0), BM.under, !1),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    bN(e, o(0), o(0), BM.under, BM.f - 0.2),
    e.col(15129798).mat(0.12, 0.35, 0.34, G),
    bN(e, o(0), o(0.45), BM.f - 0.2, BM.ceil, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    bN(e, o(0.45), o(0.45), BM.ceil, BM.roof),
    Vk(e, o(0.45), BM.roof, !0),
    !e.coarse)
  ) {
    e.col(9278102).mat(0.4, 0.6, 0, 0);
    let t = o(0.2);
    for (let n = 0; n < t.length; n++) {
      let r = t[n],
        i = t[(n + 1) % t.length];
      e.rod(r[0], BM.roof + 1.1, r[1], i[0], BM.roof + 1.1, i[1], 0.05, 4);
    }
  }
  (yield,
    e.col(15921128).mat(0.5, 0.2, 0.1, 1),
    e.cylY(0, 0, VM, HM, 6.5, 16, 6.5, !0),
    e.disc(0, VM, 0, 6.5, e.seg(16), !0),
    hN(e, 270, 0.8),
    e.col(GM));
  for (let t of [250.2, 256.8]) e.cylY(0, 0, t, t + 1, 6.62, 16, 6.62, !1);
  let s = (e) => 2.4 - (1.3 * (e - HM)) / 35,
    c = e.coarse ? 17.5 : 5;
  for (let t = HM; t < 294.99; t += c) {
    let n = Math.min(UM, t + c);
    hN(e, (t + n) / 2, 0.85);
    let r = s(t),
      i = s(n);
    for (let [a, o] of pN)
      e.coarse
        ? vN(e, [a * r, t, o * r], [a * i, n, o * i], 0.3, 0.25)
        : gN(e, [a * r, t, o * r], [a * i, n, o * i], 0.24, 4);
    if (!e.coarse)
      for (let a = 0; a < 4; a++)
        (gN(e, mN(a, -1, t, r), mN(a, 1, n, i), 0.11, 3),
          gN(e, mN(a, -1, n, i), mN(a, 1, n, i), 0.11, 3));
  }
  let l = [
    [UM, zM.roof + WM * 6],
    [zM.roof + WM * 6, 318],
    [318, 332],
  ];
  for (let [t, n] of l) {
    hN(e, (t + n) / 2, 0.8);
    let r = 0.95 - ((t - UM) / 38) * 0.55,
      i = 0.95 - ((n - UM) / 38) * 0.55;
    e.cylY(0, 0, t, n, r, 8, i, !1);
  }
  if (!e.coarse)
    for (let t of [300, 307, 313, 322, 327])
      (hN(e, t, 0.8), e.cylY(0, 0, t, t + 0.6, 1.2, 8, 1.2, !0));
  if ((SN(e, 0, 332, 0, 0.5), !e.coarse))
    for (let [t, n] of [
      [-1, -1],
      [1, 1],
    ])
      SN(e, t * s(293), 293, n * s(293), 0.35);
  (e.solid(-6.5, -6.5, 6.5, 6.5, VM, HM),
    e.solid(-2.4, -2.4, 2.4, 2.4, HM, RM),
    yield);
}
function* Yye(e, t) {
  let n = t.c(`office`),
    r = t.c(`doors`),
    i = t.c(`paving`),
    a = (t, i, a = !1) => {
      let o = [
        [t.x1, t.z0, t.x0, t.z0, !1],
        [t.x0, t.z1, t.x1, t.z1, !1],
        [t.x0, t.z0, t.x0, t.z1, i],
        [t.x1, t.z1, t.x1, t.z0, !1],
      ];
      for (let [i, s, c, l, u] of o) {
        if (a && i === t.x0 && c === t.x0) continue;
        (e.col(u ? 16777215 : 13220004).mat(0.35, 0.2, 0.32, G),
          e.wall(i, s, c, l, 0, 5.4, r, 3, 5.4),
          e.col(10849400).mat(0.55, 0.2, 0.06, G));
        let o = [];
        for (let e = 5.4; e < t.h - 1.6; e += 5)
          o.push({ y0: e, y1: Math.min(t.h - 1.2, e + 5), cell: n, tw: 3.6 });
        dC(e, i, s, c, l, o, 0.3, 0.12);
      }
      (e.col(5128248).mat(0.6, 0.15, 0.08, 1),
        e.box(
          t.x0 - 0.3,
          t.h - 1.2,
          t.z0 - 0.3,
          t.x1 + 0.3,
          t.h + 0.5,
          t.z1 + 0.3,
        ),
        e.col(9407622).mat(0.85, 0, 0, 0),
        e.flat(t.x0 + 0.3, t.z0 + 0.3, t.x1 - 0.3, t.z1 - 0.3, t.h + 0.25),
        e.solid(t.x0, t.z0, t.x1, t.z1, 0, t.h + 0.5, `building`));
    };
  (a(sN, !0),
    a(cN, !1, !0),
    e.col(12039600).mat(0.5, 0.3, 0.06, 1),
    e.box(sN.x0 - 0.5, 5.4, -14, sN.x0, 12.2, 14),
    e.col(16777215).mat(0.4, 0, 0.9, 1));
  {
    let t = e.sub(sN.x0 - 0.5, 0, 0, -Math.PI / 2);
    (vM(e, `TOKYO TOWER`, 0, 7.4, 2.6, 0.18), e.leave(t));
  }
  if (
    (e.col(14276303).mat(0.5, 0.3, 0.2, 1),
    e.box(sN.x0 - 5, 4.6, -12, sN.x0, 5.1, 12, e.white, 0, 0, null, !0),
    !e.coarse)
  ) {
    e.col(5593180).mat(0.5, 0.6, 0, 0);
    for (let t of [-11.4, -4, 4, 11.4])
      e.cylY(sN.x0 - 4.6, t, 0, 4.6, 0.13, 6, 0.13, !1);
    (e.col(12097102).mat(0.3, 0.8, 0.15, 1),
      CN(e, sN.x0 - 0.06, kN - 1.4, sN.x0 - 0.06, kN + 1.4, -1, 0, 0, 2.7),
      e.col(16773846).mat(0.3, 0, 0.9, 1),
      CN(e, sN.x0 - 0.07, kN - 1.7, sN.x0 - 0.07, kN + 1.7, -1, 0, 2.8, 3.05),
      e.col(13618115).mat(0.7, 0.2, 0.05, 1),
      e.box(6, sN.h + 0.25, 8, 16, sN.h + 3.6, 18),
      e.box(-18, sN.h + 0.25, -20, -8, sN.h + 3, -12),
      e.col(9345698).mat(0.5, 0.4, 0, 0),
      e.box(10, sN.h + 0.25, -18, 18, sN.h + 2.2, -10));
  }
  yield;
  let o = e.coarse ? 16 : 6;
  e.col(13617598).mat(0.85, 0, 0, 0);
  let s = [
    [lN.x0, lN.z0, sN.x0, lN.z1],
    [sN.x0, sN.z1, lN.x1, lN.z1],
    [sN.x0, lN.z0, lN.x1, sN.z0],
    [cN.x1, sN.z0, lN.x1, sN.z1],
  ];
  for (let [t, n, r, a] of s) {
    let s = [[t, n, r, a]];
    for (let e of dN) {
      let t = Math.min(e.foot, e.head),
        n = Math.max(e.foot, e.head);
      s = s.flatMap(([r, i, a, o]) => {
        if (a <= t || r >= n || o <= e.z0 || i >= e.z1) return [[r, i, a, o]];
        let s = [];
        return (
          r < t && s.push([r, i, t, o]),
          a > n && s.push([n, i, a, o]),
          i < e.z0 && s.push([Math.max(r, t), i, Math.min(a, n), e.z0]),
          o > e.z1 && s.push([Math.max(r, t), e.z1, Math.min(a, n), o]),
          s
        );
      });
    }
    for (let [t, n, r, a] of s)
      r - t > 0.05 && a - n > 0.05 && e.flat(t, n, r, a, 0.04, i, o, o);
  }
  if (!e.coarse) {
    let t = [
      [-58, 31],
      [-58, 18],
      [-58, -12],
      [-48, 33],
      [-40, 33],
      [-58, 5],
      [62, 30],
      [62, 18],
      [62, 0],
      [62, -14],
      [-22, -36.5],
      [-12, -36.5],
      [-2, -36.5],
      [8, -36.5],
      [18, -36.5],
      [-36, 25],
      [-36, -20],
    ];
    (t.forEach(([t, n], r) => {
      (UC(e, t, n, 9 + (r % 3) * 1.5, 3301 + r), e.pole(t, n, 0.35, 0, 4));
    }),
      e.col(11052188).mat(0.85, 0, 0, 0));
    for (let [n, r] of t) e.box(n - 1.3, 0.04, r - 1.3, n + 1.3, 0.45, r + 1.3);
  }
  yield;
}
function* Xye(e, t) {
  (yield* Wye(e, t),
    yield* Gye(e),
    yield* Kye(e),
    yield* qye(e),
    yield* Jye(e, t),
    yield* Yye(e, t));
}
