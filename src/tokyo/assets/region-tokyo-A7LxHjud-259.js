// tokyo/assets/region-tokyo-A7LxHjud 259 — math
// Lines 96787-97075 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* nCe(e, t) {
  let n = t.c(`forumWood`),
    r = q.roof;
  e.col(10133664).mat(0.75, 0, 0.04, 1);
  let i = e.coarse ? 0 : 6;
  (e.flat(K.x0, K.z0, uR.x0, K.z1, r, n, i, i),
    e.flat(uR.x1, K.z0, K.x1, K.z1, r, n, i, i),
    e.flat(uR.x0, K.z0, uR.x1, uR.zTop, r, n, i, i),
    e.flat(uR.x0, 6, uR.x1, K.z1, r, n, i, i));
  for (let [t, i, a] of [
    [oR, 1, 1],
    [sR, -1, -1],
  ]) {
    let o = i > 0 ? K.x0 : K.x1,
      s = a > 0 ? K.z0 : K.z1;
    t.forEach((t, c) => {
      let l = r + cR * (c + 1),
        u = o,
        d = o + i * t,
        f = s,
        p = s + a * t;
      (e.col(10528164).mat(0.75, 0, 0.04, 1),
        e.flat(
          Math.min(u, d),
          Math.min(f, p),
          Math.max(u, d),
          Math.max(f, p),
          l,
          n,
          e.coarse ? 0 : 3,
          e.coarse ? 0 : 3,
        ),
        e.col(8024164).mat(0.8, 0, 0.1, 1),
        rM(e, [d, l - cR, f], [d, l - cR, p], [d, l, p], [d, l, f], [i, 0, 0]),
        rM(e, [u, l - cR, p], [d, l - cR, p], [d, l, p], [u, l, p], [0, 0, a]));
    });
  }
  if (
    (e.col(6265406).mat(0.95, 0, 0, 0),
    e.flat(
      lR.x0,
      lR.z0,
      lR.x1,
      lR.z1,
      r + 0.03,
      t.c(`lawn`),
      e.coarse ? 0 : 4,
      e.coarse ? 0 : 4,
    ),
    !e.coarse)
  ) {
    let t = r + 0.05,
      n = (lR.x0 + lR.x1) / 2,
      i = (lR.z0 + lR.z1) / 2;
    (e.col(15910942).mat(0.7, 0, 0.1, 0),
      e.flat(n - 2.2, i - 3, n - 1.4, i + 3, t),
      e.flat(n + 1.4, i - 3, n + 2.2, i + 3, t),
      e.flat(n - 1.4, i - 0.4, n + 1.4, i + 0.4, t));
    let a = 5.2,
      o = 5.6;
    for (let r = 0; r < 28; r++) {
      let s = (r / 28) * Math.PI * 2,
        c = ((r + 1) / 28) * Math.PI * 2;
      rM(
        e,
        [n + Math.cos(s) * a, t, i + Math.sin(s) * a],
        [n + Math.cos(c) * a, t, i + Math.sin(c) * a],
        [n + Math.cos(c) * o, t, i + Math.sin(c) * o],
        [n + Math.cos(s) * o, t, i + Math.sin(s) * o],
        [0, 1, 0],
      );
    }
    for (let [r, a] of [
      [lR.x0 + 0.6, lR.z0 + 0.6],
      [lR.x1 - 0.6, lR.z0 + 0.6],
      [lR.x0 + 0.6, lR.z1 - 0.6],
      [lR.x1 - 0.6, lR.z1 - 0.6],
    ]) {
      let o = r < n ? 1 : -1,
        s = a < i ? 1 : -1;
      (e.flat(
        Math.min(r, r + o * 3),
        Math.min(a, a + s * 0.35),
        Math.max(r, r + o * 3),
        Math.max(a, a + s * 0.35),
        t,
      ),
        e.flat(
          Math.min(r, r + o * 0.35),
          Math.min(a, a + s * 3),
          Math.max(r, r + o * 0.35),
          Math.max(a, a + s * 3),
          t,
        ));
    }
  }
  yield;
  for (let [t, n] of [
    [dR, dR.h],
    [pR, pR.h],
  ]) {
    (e.col(15330540).mat(0.4, 0.5, 0.15, 1),
      e.box(
        t.x0 - 0.15,
        r + n,
        t.z0 - 0.15,
        t.x1 + 0.15,
        r + n + 0.35,
        t.z1 + 0.15,
      ),
      e.col(16774108).mat(0.4, 0, 0.7, 1),
      e.flat(t.x0, t.z0, t.x1, t.z1, r + n - 0.02, e.white, 0, 0, !1),
      e.col(10133926).mat(0.4, 0.6, 0.05, 0));
    for (let [i, a] of [
      [t.x0, t.z0],
      [t.x1, t.z0],
      [t.x0, t.z1],
      [t.x1, t.z1],
    ])
      e.box(i - 0.08, r, a - 0.08, i + 0.08, r + n, a + 0.08);
  }
  if (
    (e.col(2896182).mat(0.5, 0.6, 0.05, 0),
    e.box(
      pR.x0 + 1.2,
      r,
      pR.z0 + 0.8,
      pR.x1 - 0.4,
      r + pR.h - 0.4,
      pR.z1 - 0.8,
    ),
    e.col(13225166).mat(0.3, 0.8, 0.1, 1),
    e.panel(pR.x0 + 1.18, pR.z1 - 1.2, pR.x0 + 1.18, pR.z0 + 1.2, r, r + 2.3),
    !e.coarse)
  ) {
    e.col(9344668).mat(0.35, 0.7, 0.05, 0);
    for (let [t, n, i] of _R()) {
      let a = Math.hypot(n[0] - t[0], n[1] - t[1]),
        o = Math.max(1, Math.round(a / 3)),
        s = hR((t[0] + n[0]) / 2, (t[1] + n[1]) / 2);
      for (let a = 0; a < o; a++) {
        let c = a / o,
          l = t[0] + (n[0] - t[0]) * c,
          u = t[1] + (n[1] - t[1]) * c;
        e.box(l - 0.05, r + i, u - 0.05, l + 0.05, r + i + s, u + 0.05);
      }
    }
  }
  (yield,
    e.floor(K.x0, K.z0, uR.x0, K.z1, r),
    e.floor(uR.x1, K.z0, K.x1, K.z1, r),
    e.floor(uR.x0, K.z0, uR.x1, uR.zTop - 0.3, r),
    e.floor(uR.x0, dR.z1, uR.x1, K.z1, r));
  for (let [t, n, i] of [
    [oR, 1, 1],
    [sR, -1, -1],
  ]) {
    let a = n > 0 ? K.x0 : K.x1,
      o = i > 0 ? K.z0 : K.z1;
    t.forEach((t, s) =>
      e.floor(
        Math.min(a, a + n * t),
        Math.min(o, o + i * t),
        Math.max(a, a + n * t),
        Math.max(o, o + i * t),
        r + cR * (s + 1),
      ),
    );
  }
  let a = r + 6;
  (e.solid(K.x0 - 0.3, K.z0 - 0.3, K.x1 + 0.3, K.z0 + 0.15, r, a, `prop`),
    e.solid(K.x0 - 0.3, K.z1 - 0.15, K.x1 + 0.3, K.z1 + 0.3, r, a, `prop`),
    e.solid(K.x0 - 0.3, K.z0, K.x0 + 0.15, K.z1, r, a, `prop`),
    e.solid(K.x1 - 0.15, K.z0, K.x1 + 0.3, K.z1, r, a, `prop`),
    e.solid(dR.x0 - 0.2, dR.z0, dR.x0, dR.z1, r, r + dR.h + 0.4),
    e.solid(dR.x1, dR.z0, dR.x1 + 0.2, dR.z1, r, r + dR.h + 0.4),
    e.solid(dR.x0 - 0.2, dR.z1, dR.x1 + 0.2, dR.z1 + 0.2, r, r + dR.h + 0.4),
    e.solid(pR.x0, pR.z0, pR.x1, pR.z1, r, r + pR.h + 0.4));
}
function* rCe(e, t) {
  let n = q.gal,
    r = q.ceil;
  (e.col(7105126).mat(0.35, 0.2, 0.02, 0),
    e.flat(
      K.x0 + 0.2,
      K.z0 + 0.2,
      K.x1 - 0.2,
      K.z1 - 0.2,
      n + 0.02,
      t.c(`paving`),
      e.coarse ? 0 : 6,
      e.coarse ? 0 : 6,
    ),
    e.col(1843236).mat(0.1, 0.9, 0.04, 1),
    e.flat(K.x0, K.z0, uR.x0, K.z1, r, e.white, 0, 0, !1),
    e.flat(uR.x1, K.z0, K.x1, K.z1, r, e.white, 0, 0, !1),
    e.flat(uR.x0, K.z0, uR.x1, uR.zTop, r, e.white, 0, 0, !1),
    e.flat(uR.x0, 6, uR.x1, K.z1, r, e.white, 0, 0, !1),
    e.col(2764339).mat(0.5, 0.5, 0.05, 0),
    e.panel(uR.x0, 6, uR.x0, uR.zTop, r, q.roof),
    e.panel(uR.x1, uR.zTop, uR.x1, 6, r, q.roof),
    e.panel(uR.x1, 6, uR.x0, 6, r, q.roof),
    e.col(4866104).mat(0.35, 0.6, 0.06, 1),
    e.box(fR.x0, n, fR.z0, fR.x1, r, fR.z1),
    e.col(14206106).mat(0.25, 0.85, 0.3, 1),
    e.panel(fR.x0 - 0.02, -10.2, fR.x0 - 0.02, -7.8, n, n + 2.6),
    yield,
    e.col(5988454).mat(0.5, 0.5, 0.05, 0),
    rM(
      e,
      [uR.x0, n + 0.05, uR.zBot],
      [uR.x1, n + 0.05, uR.zBot],
      [uR.x1, q.roof, uR.zTop],
      [uR.x0, q.roof, uR.zTop],
      [0, 1, 1],
    ),
    e.col(3159354).mat(0.5, 0.5, 0, 0));
  for (let t of [uR.x0, uR.x1])
    rM(
      e,
      [t, n, uR.zBot],
      [t, n, uR.zTop + 5],
      [t, q.roof - 0.8, uR.zTop],
      [t, n + 0.05, uR.zBot],
      [t === uR.x0 ? -1 : 1, 0, 0],
    );
  if (!e.coarse) {
    e.col(1974822).mat(0.4, 0.3, 0, 0);
    for (let t of [uR.x0 + 0.05, uR.x1 - 0.05])
      e.rod(t, n + 1.05, uR.zBot, t, q.roof + 1.05, uR.zTop, 0.05, 4);
  }
  (e.floor(K.x0, K.z0, K.x1, K.z1, n),
    e.solid(K.x0 - 0.2, K.z0 - 0.2, K.x1 + 0.2, K.z0 + 0.1, n, r),
    e.solid(K.x0 - 0.2, K.z1 - 0.1, K.x1 + 0.2, K.z1 + 0.2, n, r),
    e.solid(K.x0 - 0.2, K.z0, K.x0 + 0.1, K.z1, n, r),
    e.solid(K.x1 - 0.1, K.z0, K.x1 + 0.2, K.z1, n, r),
    e.solid(fR.x0, fR.z0, fR.x1, fR.z1, n, q.roof),
    e.floor(uR.x0, uR.zTop, uR.x1, uR.zBot, q.roof, n, `stairs`),
    e.solid(uR.x0 - 0.2, uR.zTop, uR.x0, uR.zBot - 2.2, n, r),
    e.solid(uR.x1, uR.zTop, uR.x1 + 0.2, uR.zBot - 2.2, n, r));
}
function* iCe(e, t) {
  (yield* QSe(e, t),
    yield* $Se(e, t),
    yield* eCe(e, t),
    yield* tCe(e, t),
    yield* nCe(e, t),
    yield* rCe(e, t));
}
function aCe(e, t) {
  let n = t.c(`forumGlass`);
  e.col(16777215).mat(0.05, 0.3, 0.08, 1);
  let r = (t, r, i, a, o, s, c = 2.4) => {
    (e.wall(t, r, i, a, o, s, n, c, c), e.wall(i, a, t, r, o, s, n, c, c));
  };
  for (let [e, t, n] of _R()) {
    let i = hR((e[0] + t[0]) / 2, (e[1] + t[1]) / 2);
    r(e[0], e[1], t[0], t[1], q.roof + n, q.roof + n + i);
  }
  let i = q.roof;
  (r(dR.x0, dR.z0, dR.x0, dR.z1, i, i + dR.h),
    r(dR.x1, dR.z1, dR.x1, dR.z0, i, i + dR.h),
    r(dR.x0, dR.z1, dR.x1, dR.z1, i, i + dR.h),
    r(pR.x1, pR.z0, pR.x0, pR.z0, i, i + pR.h),
    r(pR.x0, pR.z1, pR.x1, pR.z1, i, i + pR.h),
    r(pR.x1, pR.z1, pR.x1, pR.z0, i, i + pR.h),
    e.col(14282485).mat(0.05, 0.3, 0.1, 1));
  let a = K.x1 + 0.02;
  (r(a, -8, a, -9, 0, J.top, 2.8),
    r(a, J.z1, a, -4, 0, J.top, 2.8),
    r(a, -4, a, -8, 4.2, J.top, 2.8),
    r(a, -9, a, -14, q.deck + 3.5, J.top, 2.8),
    r(a, -14, a, J.z0, 0, J.top, 2.8),
    r(a, -9, a, -14, 0, q.deck - 0.9, 2.8),
    r(K.x1, J.z0 - 0.02, J.x0, J.z0 - 0.02, iR.crest, J.top, 2.8),
    r(aR.sky.x1, aR.sky.z0, aR.sky.x0, aR.sky.z0, q.deck, q.deck + 3.6, 2.5),
    r(aR.sky.x0, aR.sky.z1, aR.sky.x1, aR.sky.z1, q.deck, q.deck + 3.6, 2.5));
}
function oCe(e, t) {
  let n = t.c(`glass`);
  (e.col(12965599).mat(0.18, 0.4, 0.14, G),
    e.box(K.x0, 0, K.z0, K.x1, q.waist0, K.z1, n),
    e.col(11718888).mat(0.25, 0.22, 0.08, G | 32),
    e.box(K.x0, q.waist0, K.z0, K.x1, q.gal, K.z1, n),
    e.col(14214894).mat(0.08, 0.3, 0.42, G),
    e.box(K.x0, q.gal, K.z0, K.x1, q.roof, K.z1, n),
    e.col(12567493).mat(0.35, 0.65, 0.04, 1),
    e.box(iR.x0, iR.beam0, iR.z0, iR.x1, iR.crest, iR.z1));
}
