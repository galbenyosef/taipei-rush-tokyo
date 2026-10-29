// tokyo/assets/region-tokyo-A7LxHjud 219 — col
// Lines 85370-85654 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function DN(e, t, n) {
  for (let r = 0; r < 4; r++) {
    let i = [mN[r][0], mN[r][1]];
    for (let a = 0; a + 1 < t.length; a++) {
      let o = t[a],
        s = t[a + 1];
      if (s <= o + 0.5) continue;
      _N(e, (o + s) / 2);
      let c = 0.22 + 0.006 * YM(o);
      (n
        ? (yN(e, gN(r, -1, o), gN(r, 1, s), i, 1.2 + 0.03 * YM(o), c * 0.7),
          yN(e, gN(r, 1, o), gN(r, -1, s), i, 1.2 + 0.03 * YM(o), c * 0.7))
        : (vN(e, gN(r, -1, o), gN(r, 1, s), c, e.coarse ? 3 : 4),
          vN(e, gN(r, 1, o), gN(r, -1, s), c, e.coarse ? 3 : 4)),
        e.coarse ||
          vN(e, gN(r, -1, (o + s) / 2), gN(r, 1, (o + s) / 2), c * 0.7, 3),
        Math.abs(s - VM.under) > 0.1 &&
          Math.abs(s - HM.under) > 0.1 &&
          Math.abs(s - UM) > 0.1 &&
          (_N(e, s - 0.3), vN(e, gN(r, -1, s), gN(r, 1, s), c * 1.3, 4)));
    }
  }
}
function* obe(e) {
  if (
    (DN(e, tN.slice(0, 3), !0),
    yield,
    DN(e, tN.slice(2), !0),
    yield,
    DN(e, nN, !1),
    DN(e, rN, !1),
    yield,
    !e.coarse)
  )
    for (let t of [$M, 79, 105.5, ...nN.slice(2, -1)]) {
      _N(e, t);
      let n = YM(t);
      (vN(e, [-n, t, -n], [n, t, n], 0.22, 3),
        vN(e, [n, t, -n], [-n, t, n], 0.22, 3));
    }
  let t = (t, n, r) => {
    if (
      (e.col(9078144).mat(0.6, 0.3, 0.08, 1),
      e.box(-t, n, -t, t, r, t),
      !e.coarse)
    ) {
      e.col(12170670).mat(0.5, 0.4, 0.05, 1);
      for (let [i, a] of hN)
        e.box(i * t - 0.2, n, a * t - 0.2, i * t + 0.2, r, a * t + 0.2);
    }
  };
  (t(2.7, lN.h + 0.6, VM.under),
    t(1.6, VM.roof, HM.under),
    e.solid(-YM(70) + 1, -YM(70) + 1, YM(70) - 1, YM(70) - 1, $M, 95),
    e.solid(-YM(110) + 1, -YM(110) + 1, YM(110) - 1, YM(110) - 1, 95, VM.under),
    e.solid(-YM(180), -YM(180), YM(180), YM(180), VM.roof + 0.5, HM.under),
    e.solid(-YM(240), -YM(240), YM(240), YM(240), HM.roof + 0.5, WM),
    yield);
}
function* sbe(e, t) {
  let n = t.c(`glass`),
    r = xN(iN, aN),
    i = (e) => CN(r, (iN + e) / iN);
  (e.col(14865341).mat(0.6, 0.2, 0.42, 1),
    SN(e, CN(r, YM(VM.under) / iN), i(-0.3), VM.under, VM.soffit),
    Uk(e, i(-0.3), VM.soffit, !1),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    SN(e, i(-0.3), i(-0.3), VM.soffit, VM.f1 - 0.2),
    e.col(15260866).mat(0.12, 0.35, 0.34, G),
    SN(e, i(-0.3), i(0.35), VM.f1 - 0.2, VM.mid, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    SN(e, i(0.35), i(0.35), VM.mid, VM.f2),
    e.col(15260866).mat(0.12, 0.35, 0.34, G),
    SN(e, i(0.1), i(0.75), VM.f2, VM.top2, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    SN(e, i(0.75), i(0.75), VM.top2, VM.roof),
    Uk(e, i(0.75), VM.roof, !0),
    e.coarse ||
      (e.col(13157564).mat(0.6, 0.3, 0.04, 1),
      e.box(
        -YM(VM.roof) + 1.2,
        VM.roof,
        -YM(VM.roof) + 1.2,
        YM(VM.roof) - 1.2,
        VM.roof + 2.4,
        YM(VM.roof) - 1.2,
      )));
  for (let [t, n] of i(0.75).filter((e, t) => t % 2 == 0))
    wN(e, t, VM.roof, n, 0.35);
  yield;
  let a = xN(oN, sN),
    o = (e) => CN(a, (oN + e) / oN);
  if (
    (e.col(14276303).mat(0.6, 0.2, 0.1, 1),
    Uk(e, o(0), HM.under, !1),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    SN(e, o(0), o(0), HM.under, HM.f - 0.2),
    e.col(15129798).mat(0.12, 0.35, 0.34, G),
    SN(e, o(0), o(0.45), HM.f - 0.2, HM.ceil, n, 1.6),
    e.col(15987180).mat(0.5, 0.15, 0.12, 1),
    SN(e, o(0.45), o(0.45), HM.ceil, HM.roof),
    Uk(e, o(0.45), HM.roof, !0),
    !e.coarse)
  ) {
    e.col(9278102).mat(0.4, 0.6, 0, 0);
    let t = o(0.2);
    for (let n = 0; n < t.length; n++) {
      let r = t[n],
        i = t[(n + 1) % t.length];
      e.rod(r[0], HM.roof + 1.1, r[1], i[0], HM.roof + 1.1, i[1], 0.05, 4);
    }
  }
  (yield,
    e.col(15921128).mat(0.5, 0.2, 0.1, 1),
    e.cylY(0, 0, UM, WM, 6.5, 16, 6.5, !0),
    e.disc(0, UM, 0, 6.5, e.seg(16), !0),
    _N(e, 270, 0.8),
    e.col(qM));
  for (let t of [250.2, 256.8]) e.cylY(0, 0, t, t + 1, 6.62, 16, 6.62, !1);
  let s = (e) => 2.4 - (1.3 * (e - WM)) / 35,
    c = e.coarse ? 17.5 : 5;
  for (let t = WM; t < 294.99; t += c) {
    let n = Math.min(GM, t + c);
    _N(e, (t + n) / 2, 0.85);
    let r = s(t),
      i = s(n);
    for (let [a, o] of hN)
      e.coarse
        ? bN(e, [a * r, t, o * r], [a * i, n, o * i], 0.3, 0.25)
        : vN(e, [a * r, t, o * r], [a * i, n, o * i], 0.24, 4);
    if (!e.coarse)
      for (let a = 0; a < 4; a++)
        (vN(e, gN(a, -1, t, r), gN(a, 1, n, i), 0.11, 3),
          vN(e, gN(a, -1, n, i), gN(a, 1, n, i), 0.11, 3));
  }
  let l = [
    [GM, VM.roof + KM * 6],
    [VM.roof + KM * 6, 318],
    [318, 332],
  ];
  for (let [t, n] of l) {
    _N(e, (t + n) / 2, 0.8);
    let r = 0.95 - ((t - GM) / 38) * 0.55,
      i = 0.95 - ((n - GM) / 38) * 0.55;
    e.cylY(0, 0, t, n, r, 8, i, !1);
  }
  if (!e.coarse)
    for (let t of [300, 307, 313, 322, 327])
      (_N(e, t, 0.8), e.cylY(0, 0, t, t + 0.6, 1.2, 8, 1.2, !0));
  if ((wN(e, 0, 332, 0, 0.5), !e.coarse))
    for (let [t, n] of [
      [-1, -1],
      [1, 1],
    ])
      wN(e, t * s(293), 293, n * s(293), 0.35);
  (e.solid(-6.5, -6.5, 6.5, 6.5, UM, WM),
    e.solid(-2.4, -2.4, 2.4, 2.4, WM, BM),
    yield);
}
function* cbe(e, t) {
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
        mC(e, i, s, c, l, o, 0.3, 0.12);
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
  (a(lN, !0),
    a(uN, !1, !0),
    e.col(12039600).mat(0.5, 0.3, 0.06, 1),
    e.box(lN.x0 - 0.5, 5.4, -14, lN.x0, 12.2, 14),
    e.col(16777215).mat(0.4, 0, 0.9, 1));
  {
    let t = e.sub(lN.x0 - 0.5, 0, 0, -Math.PI / 2);
    (bM(e, `TOKYO TOWER`, 0, 7.4, 2.6, 0.18), e.leave(t));
  }
  if (
    (e.col(14276303).mat(0.5, 0.3, 0.2, 1),
    e.box(lN.x0 - 5, 4.6, -12, lN.x0, 5.1, 12, e.white, 0, 0, null, !0),
    !e.coarse)
  ) {
    e.col(5593180).mat(0.5, 0.6, 0, 0);
    for (let t of [-11.4, -4, 4, 11.4])
      e.cylY(lN.x0 - 4.6, t, 0, 4.6, 0.13, 6, 0.13, !1);
    (e.col(12097102).mat(0.3, 0.8, 0.15, 1),
      TN(e, lN.x0 - 0.06, jN - 1.4, lN.x0 - 0.06, jN + 1.4, -1, 0, 0, 2.7),
      e.col(16773846).mat(0.3, 0, 0.9, 1),
      TN(e, lN.x0 - 0.07, jN - 1.7, lN.x0 - 0.07, jN + 1.7, -1, 0, 2.8, 3.05),
      e.col(13618115).mat(0.7, 0.2, 0.05, 1),
      e.box(6, lN.h + 0.25, 8, 16, lN.h + 3.6, 18),
      e.box(-18, lN.h + 0.25, -20, -8, lN.h + 3, -12),
      e.col(9345698).mat(0.5, 0.4, 0, 0),
      e.box(10, lN.h + 0.25, -18, 18, lN.h + 2.2, -10));
  }
  yield;
  let o = e.coarse ? 16 : 6;
  e.col(13617598).mat(0.85, 0, 0, 0);
  let s = [
    [dN.x0, dN.z0, lN.x0, dN.z1],
    [lN.x0, lN.z1, dN.x1, dN.z1],
    [lN.x0, dN.z0, dN.x1, lN.z0],
    [uN.x1, lN.z0, dN.x1, lN.z1],
  ];
  for (let [t, n, r, a] of s) {
    let s = [[t, n, r, a]];
    for (let e of pN) {
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
      (KC(e, t, n, 9 + (r % 3) * 1.5, 3301 + r), e.pole(t, n, 0.35, 0, 4));
    }),
      e.col(11052188).mat(0.85, 0, 0, 0));
    for (let [n, r] of t) e.box(n - 1.3, 0.04, r - 1.3, n + 1.3, 0.45, r + 1.3);
  }
  yield;
}
function* lbe(e, t) {
  (yield* rbe(e, t),
    yield* ibe(e),
    yield* abe(e),
    yield* obe(e),
    yield* sbe(e, t),
    yield* cbe(e, t));
}
