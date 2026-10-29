// tokyo/assets/region-tokyo-A7LxHjud 242 — math
// Lines 91698-92032 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Zxe(e) {
  let { zc: t, r: n, rr: r, deck: i } = mI,
    a = Wxe,
    o = e.coarse ? 7 : 14,
    s = (e) =>
      Math.max(pI.top, a + Math.sqrt(Math.max(0, i * i - (e - t) * (e - t)))),
    c = [],
    l = [];
  for (let e = 0; e <= o; e++) {
    let i = Math.PI * (1 - e / o);
    (c.push([t + n * Math.cos(i), a + n * Math.sin(i)]),
      l.push([t + r * Math.cos(i), a + r * Math.sin(i)]));
  }
  let u = [t - 4, ...l.map((e) => e[0]), t + 4];
  for (let [n, r] of [
    [mI.x0, -1],
    [mI.x1, 1],
  ]) {
    let i = [r, 0, 0];
    e.col(12894131).mat(0.9, 0, 0.03, 1);
    for (let t = 0; t < o; t++)
      rM(
        e,
        [n, c[t][1], c[t][0]],
        [n, c[t + 1][1], c[t + 1][0]],
        [n, l[t + 1][1], l[t + 1][0]],
        [n, l[t][1], l[t][0]],
        i,
      );
    e.col(11578271).mat(0.9, 0, 0.02, 1);
    for (let t = 0; t < o; t++)
      rM(
        e,
        [n, l[t][1], l[t][0]],
        [n, l[t + 1][1], l[t + 1][0]],
        [n, s(l[t + 1][0]), l[t + 1][0]],
        [n, s(l[t][0]), l[t][0]],
        i,
      );
    (rM(
      e,
      [n, -1.2, t - 4],
      [n, -1.2, l[0][0]],
      [n, s(l[0][0]), l[0][0]],
      [n, s(t - 4), t - 4],
      i,
    ),
      rM(
        e,
        [n, -1.2, l[o][0]],
        [n, -1.2, t + 4],
        [n, s(t + 4), t + 4],
        [n, s(l[o][0]), l[o][0]],
        i,
      ),
      rM(
        e,
        [n, -1.2, l[0][0]],
        [n, -1.2, c[0][0]],
        [n, a, c[0][0]],
        [n, a, l[0][0]],
        i,
      ),
      rM(
        e,
        [n, -1.2, c[o][0]],
        [n, -1.2, l[o][0]],
        [n, a, l[o][0]],
        [n, a, c[o][0]],
        i,
      ));
  }
  e.col(10196619).mat(0.95, 0, 0, 0);
  for (let t = 0; t < o; t++) {
    let n = Math.PI * (1 - (t + 0.5) / o);
    rM(
      e,
      [mI.x0, c[t][1], c[t][0]],
      [mI.x1, c[t][1], c[t][0]],
      [mI.x1, c[t + 1][1], c[t + 1][0]],
      [mI.x0, c[t + 1][1], c[t + 1][0]],
      [0, -Math.sin(n), -Math.cos(n)],
    );
  }
  e.col(12236201).mat(0.9, 0, 0, 0);
  for (let t = 0; t + 1 < u.length; t++) {
    let n = u[t],
      r = u[t + 1],
      i = s(n),
      a = s(r);
    if (
      (rM(
        e,
        [mI.x0 + 0.25, i, n],
        [mI.x1 - 0.25, i, n],
        [mI.x1 - 0.25, a, r],
        [mI.x0 + 0.25, a, r],
        [0, 1, 0],
      ),
      !e.coarse)
    )
      for (let [t, o] of [
        [mI.x0, -1],
        [mI.x1, 1],
      ]) {
        let s = t - o * 0.25;
        (rM(
          e,
          [t, i, n],
          [t, a, r],
          [t, a + 0.32, r],
          [t, i + 0.32, n],
          [o, 0, 0],
        ),
          rM(
            e,
            [s, i, n],
            [s, a, r],
            [s, a + 0.32, r],
            [s, i + 0.32, n],
            [-o, 0, 0],
          ),
          rM(
            e,
            [t, i + 0.32, n],
            [t, a + 0.32, r],
            [s, a + 0.32, r],
            [s, i + 0.32, n],
            [0, 1, 0],
          ));
      }
  }
  let d = 3.9;
  (e.floor(
    mI.x0 + 0.25,
    t - 4,
    mI.x1 - 0.25,
    t - d * 0.5,
    pI.top,
    s(t - d * 0.5),
    `bridge`,
  ),
    e.floor(
      mI.x0 + 0.25,
      t - d * 0.5,
      mI.x1 - 0.25,
      t,
      s(t - d * 0.5),
      s(t),
      `bridge`,
    ),
    e.floor(
      mI.x0 + 0.25,
      t,
      mI.x1 - 0.25,
      t + d * 0.5,
      s(t),
      s(t + d * 0.5),
      `bridge`,
    ),
    e.floor(
      mI.x0 + 0.25,
      t + d * 0.5,
      mI.x1 - 0.25,
      t + 4,
      s(t + d * 0.5),
      pI.top,
      `bridge`,
    ));
}
function* Qxe(e, t) {
  let { x: n, z0: r, z1: i } = uI;
  (SI(e, t, n, r, -n, r, !1, !1),
    SI(e, t, -n, r, -n, dI.z0, !1, !0),
    SI(e, t, -n, dI.z1, -n, i, !0, !1),
    SI(e, t, -n, i, n, i, !1, !1),
    SI(e, t, n, i, n, fI.z1, !1, !0),
    SI(e, t, n, fI.z0, n, r, !0, !1),
    yield,
    CI(e, t, -n, (dI.z0 + dI.z1) / 2, 2.5, Math.PI / 2),
    CI(e, t, n, (fI.z0 + fI.z1) / 2, 2.5, Math.PI / 2));
}
function* $xe(e, t) {
  (e.col(5533762).mat(0.95, 0, 0, 0),
    e.flat(38, uI.z0 + 0.25, uI.x - 0.25, uI.z1 - 0.25, 0.025),
    e.col(13481871).mat(0.95, 0, 0, 0));
  for (let [n, r, i, a] of gI) e.flat(n, r, i, a, 0.05, t.c(`gravel`), 4, 4);
  e.col(5205556).mat(0.95, 0, 0, 0);
  let { x: n, z: r, r: i, h: a } = hI;
  e.lathe(
    n,
    r,
    [i, -0.3, i * 0.8, a * 0.3, i * 0.5, a * 0.75, i * 0.2, a * 0.97, 0.01, a],
    e.coarse ? 8 : 14,
    0,
    e.white,
    !1,
    !0,
  );
  let o = (lI.x0 + lI.x1) / 2,
    s = (lI.z0 + lI.z1) / 2;
  (e.col(5796668).mat(0.95, 0, 0, 0),
    e.lathe(
      o,
      s,
      [10.4, -1, 9.4, 0.14, 7.6, 0.7, 5, 1.25, 2.4, 1.6, 0.01, 1.7],
      e.coarse ? 10 : 18,
      0,
      e.white,
      !1,
      !0,
    ),
    yield);
  let c = new le(de(`korakuen-isle`));
  if (!e.coarse) {
    for (let t = 0; t < 16; t++) {
      let n = (t / 16) * Math.PI * 2 + c.range(-0.1, 0.1);
      yI(e, o + Math.cos(n) * 9.6, s + Math.sin(n) * 9.6, c, 0.9, -0.55);
    }
    bI(e, o + 3, s + 2.5, 1.1);
  }
  (GC(e, o - 2, s - 1, 6.5, 71), GC(e, o + 2.6, s - 3, 5.2, 72));
}
function* eSe(e, t) {
  let n = new le(de(`korakuen`)),
    r = (e, t, n) =>
      !qxe(e, t, n) &&
      !Kxe(e, t, n * 0.6) &&
      Math.abs(e) < uI.x - 2.5 &&
      t > uI.z0 + 2.5 &&
      t < uI.z1 - 2.5 &&
      Math.hypot(e - 44, t - 50) > 6 &&
      Math.hypot(e - hI.x, t - hI.z) > hI.r * 0.6,
    i = 0,
    a = [];
  for (let e = -86; e <= 60; e += 13) a.push([-51, e], [51, e]);
  for (let e = -42; e <= 42; e += 13) a.push([e, -88], [e, 61]);
  if (!e.coarse) {
    for (let e = -78; e <= 40; e += 32) a.push([44, e]);
    for (let e = -36; e <= 36; e += 32) a.push([e, -80]);
    for (let e of [
      [-32, 40],
      [-4, 52],
      [-30, 54],
      [8, 42],
      [-12, -72],
      [14, -70],
      [22, -50],
    ])
      a.push([e[0], e[1]]);
  }
  for (let [t, o] of a) {
    let a = t + n.range(-2.5, 2.5),
      s = o + n.range(-2.5, 2.5);
    if (!r(a, s, 3) || (e.coarse && i++ % 2)) continue;
    let c = n.range(12, 17);
    (i++ % 2 == 0 ? Jxe(e, a, s, c, n) : KC(e, a, s, c, 400 + i),
      e.pole(a, s, 0.5, 0, 4, `tree`));
  }
  (yield,
    [
      [-36, -31],
      [-30, 22],
      [-8, -32],
      [12, 22.5],
      [29, -24],
      [29, 8],
      [-37, -5],
      [-20, 22],
      [20, -32],
    ].forEach(([t, r], i) => {
      (GC(e, t, r, n.range(6, 9), 80 + i), e.pole(t, r, 0.35, 0, 3, `tree`));
    }));
  let o = [];
  for (let e = 0; e < 26; e++) {
    let t = e < 16 ? n.range(-48, 8) : n.range(36, 50),
      i = e < 16 ? n.range(-82, -40) : n.range(-30, 60);
    r(t, i, 2) && o.push([t, i]);
  }
  for (let [r, i] of o)
    (_I(e, r, i, n.range(5, 8), n, t.season),
      e.pole(r, i, 0.25, 0, 2.5, `tree`));
  yield;
  for (let [i, a] of [
    [-34, 46],
    [-46, 56],
    [-16, 58],
    [12, 52],
    [24, 46],
    [2, 36],
  ])
    r(i, a, 2) &&
      (_I(e, i, a, 6.5, n, t.season), e.pole(i, a, 0.25, 0, 2.5, `tree`));
  if (e.coarse) return;
  let s = [];
  for (let e = cI.x0 + 1; e < cI.x1; e += 3.6) s.push([e, cI.z0], [e, cI.z1]);
  for (let e = cI.z0 + 1.5; e < cI.z1; e += 3.6) s.push([cI.x0, e], [cI.x1, e]);
  for (let [t, i] of s)
    if (
      !(t > pI.x0 - 1 && t < pI.x1 + 1) &&
      (yI(
        e,
        t + n.range(-0.4, 0.4),
        i + n.range(-0.4, 0.4),
        n,
        n.range(0.8, 1.3),
        -0.15,
      ),
      n.chance(0.3))
    ) {
      let a = t === cI.x0 ? -2.4 : t === cI.x1 ? 2.4 : 0,
        o = i === cI.z0 ? -2.4 : i === cI.z1 ? 2.4 : 0;
      r(t + a, i + o, 0.8) && vI(e, t + a, i + o, n.range(0.9, 1.5), n);
    }
  (yield,
    bI(e, cI.x0 - 1.6, 10),
    bI(e, 18, cI.z0 - 1.6),
    bI(e, cI.x1 + 1.8, -12),
    xI(e, -44, 21.6),
    xI(e, 36.4, -34),
    xI(e, -40, 30.5));
  for (let t = -34; t < 30; t += 7) r(t, 29.5, 0.5) && vI(e, t, 29.5, 1.2, n);
}
function* tSe(e, t) {
  (yield* $xe(e, t),
    yield,
    Xxe(e, t),
    Zxe(e),
    yield,
    yield* Qxe(e, t),
    yield,
    Yxe(e, t, 44, 50),
    yield,
    yield* eSe(e, t));
}
