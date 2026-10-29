// tokyo/assets/region-tokyo-55J_WESF 239 — col
// Lines 90709-91001 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Txe(e, t) {
  let n = t.A.sub(`gtGlass`, 0, 2 / 3, 1, 1),
    r = Cxe(),
    i = tI();
  e.col(15134707).mat(0.2, 0.45, 0.12, G);
  for (let t of i) {
    let [i, a, o, s] = t.ab;
    nI(
      e,
      i,
      a,
      o,
      s,
      0,
      GF.h - 8.4,
      (r.get(t.key) ?? []).filter((e) => e[2] < GF.h - 8.4),
      n,
      12.8,
      qF,
    );
  }
  e.col(16771538).mat(0.2, 0.4, 0.3, G);
  for (let t of i) {
    let [i, a, o, s] = t.ab;
    nI(
      e,
      i,
      a,
      o,
      s,
      GF.h - 8.4,
      GF.h,
      (r.get(t.key) ?? []).filter((e) => e[3] > GF.h - 8.4),
      n,
      12.8,
      qF,
    );
  }
  let a = HF(GF.x0, GF.z0, GF.x1, GF.z1);
  e.col(15987696).mat(0.55, 0.05, 0.05, 1);
  for (let t of i) {
    let [n, i, a, o] = t.ab,
      s = Math.hypot(a - n, o - i),
      c = -(o - i) / s,
      l = (a - n) / s;
    for (let u of [12.6, 25.2, 37.8]) {
      if ((r.get(t.key) ?? []).some((e) => e[2] < u + 0.6 && e[3] > u - 0.1))
        continue;
      let d = (e, t, r) => [
        n + ((a - n) * e) / s + c * t,
        r,
        i + ((o - i) * e) / s + l * t,
      ];
      (tM(
        e,
        d(0, 0.3, u - 0.1),
        d(s, 0.3, u - 0.1),
        d(s, 0.3, u + 0.6),
        d(0, 0.3, u + 0.6),
        [c, 0, l],
      ),
        tM(
          e,
          d(0, 0, u + 0.6),
          d(s, 0, u + 0.6),
          d(s, 0.3, u + 0.6),
          d(0, 0.3, u + 0.6),
          [0, 1, 0],
        ),
        tM(
          e,
          d(0, 0, u - 0.1),
          d(s, 0, u - 0.1),
          d(s, 0.3, u - 0.1),
          d(0, 0.3, u - 0.1),
          [0, -1, 0],
        ));
    }
  }
  (Hk(e, a, 0.35, GF.h, GF.h + 1.2),
    Hk(e, a, 0.4, 0, 0.6),
    yield,
    e.col(1448220).mat(0.9, 0, 0, 0));
  let o = 0.6,
    s = {
      x0: BF(GF.x0) + o,
      x1: BF(GF.x1) - o,
      z0: VF(GF.z0) + o,
      z1: VF(GF.z1) - o,
    };
  if (
    (tM(
      e,
      [s.x0, 0.6, s.z0],
      [s.x1, 0.6, s.z0],
      [s.x1, GF.h, s.z0],
      [s.x0, GF.h, s.z0],
      [0, 0, 1],
    ),
    tM(
      e,
      [s.x0, 0.6, s.z1],
      [s.x1, 0.6, s.z1],
      [s.x1, GF.h, s.z1],
      [s.x0, GF.h, s.z1],
      [0, 0, -1],
    ),
    tM(
      e,
      [s.x0, 0.6, s.z0],
      [s.x0, 0.6, s.z1],
      [s.x0, GF.h, s.z1],
      [s.x0, GF.h, s.z0],
      [1, 0, 0],
    ),
    tM(
      e,
      [s.x1, 0.6, s.z0],
      [s.x1, 0.6, s.z1],
      [s.x1, GF.h, s.z1],
      [s.x1, GF.h, s.z0],
      [-1, 0, 0],
    ),
    e.coarse ||
      (e.col(14216447).mat(0.4, 0, 0.8, 0),
      e.flat(s.x0, s.z0 + 4, s.x1, s.z0 + 4.4, 36, e.white, 0, 0, !1),
      e.flat(s.x0, s.z0 + 11, s.x1, s.z0 + 11.4, 48, e.white, 0, 0, !1)),
    !e.coarse)
  ) {
    let t = e.sub(BF(GF.x1) + 0.06, 0, VF(-798.5), Math.PI / 2);
    (e.col(16777215).mat(0.4, 0.1, 0.8, 1),
      cM(e, `LaQua`, 0, GF.h - 6.6, 0, 3.6, 0.2),
      e.leave(t));
  }
  (e.solid(BF(GF.x0), VF(GF.z0), BF(GF.x1), VF(GF.z1), 0, GF.h + 1.2), yield);
  let c = HF(KF.x0, KF.z0, KF.x1, KF.z1);
  (e.col(16777215).mat(0.35, 0.1, 0.3, G),
    zk(e, c, 0, 5, t.c(`doors`), 2.4, 5),
    e.col(15331828).mat(0.2, 0.45, 0.14, G),
    zk(e, c, 5, KF.h - 0.6, n, 12.8, qF),
    e.col(15987696).mat(0.55, 0.05, 0.05, 1),
    Hk(e, c, 0.3, KF.h - 0.6, KF.h + 0.4),
    e.solid(BF(KF.x0), VF(KF.z0), BF(KF.x1), VF(KF.z1), 0, KF.h + 0.4),
    e.col(15790316).mat(0.4, 0.2, 0.25, G),
    e.box(
      BF(-832),
      KF.h + 0.4,
      VF(-762),
      BF(-822),
      KF.h + 3.6,
      VF(-746),
      t.c(`doors`),
      2.4,
      3.2,
    ));
}
var rI = (e, t, n) => [
  BF(JF) + n,
  bxe - t * Math.cos(e),
  VF(YF) + t * Math.sin(e),
];
function* Exe(e) {
  let t = e.coarse ? 32 : 64,
    n = 28.8,
    r = 31.2,
    i = 1.5,
    a = [16736180, 10976255, 5228799, 16774376];
  for (let o = 0; o < t; o++) {
    let s = (o / t) * Math.PI * 2,
      c = ((o + 1) / t) * Math.PI * 2,
      l = (s + c) / 2,
      u = [0, -Math.cos(l), Math.sin(l)];
    (e.col(15330284).mat(0.4, 0.55, 0.02, 1),
      tM(e, rI(s, r, -1.5), rI(c, r, -1.5), rI(c, r, i), rI(s, r, i), u),
      tM(e, rI(s, n, -1.5), rI(c, n, -1.5), rI(c, n, i), rI(s, n, i), [
        -u[0],
        -u[1],
        -u[2],
      ]));
    for (let l of [-1, 1]) {
      let u = [l, 0, 0];
      if (e.coarse) {
        tM(
          e,
          rI(s, n, l * i),
          rI(c, n, l * i),
          rI(c, r, l * i),
          rI(s, r, l * i),
          u,
        );
        continue;
      }
      let d = a[Math.floor((o / t) * 16) % a.length];
      (e.col(d).mat(0.4, 0.1, 0.6, 1),
        tM(
          e,
          rI(s, 30.88, l * i),
          rI(c, 30.88, l * i),
          rI(c, r, l * i),
          rI(s, r, l * i),
          u,
        ),
        tM(
          e,
          rI(s, n, l * i),
          rI(c, n, l * i),
          rI(c, 29.12, l * i),
          rI(s, 29.12, l * i),
          u,
        ),
        e.col(14146526).mat(0.45, 0.6, 0.02, 1),
        tM(
          e,
          rI(s, 29.12, l * i),
          rI(c, 29.12, l * i),
          rI(c, 30.88, l * i),
          rI(s, 30.88, l * i),
          u,
        ));
    }
  }
  yield;
  let o = e.coarse ? 20 : 40;
  for (let t = 0; t < o; t++) {
    let n = (t / o) * Math.PI * 2 + 0.04,
      r = rI(n, XF, 3.1),
      a = rI(n, XF, i);
    (e.col(13225166).mat(0.4, 0.6, 0, 0),
      e.coarse || e.rod(a[0], a[1], a[2], r[0], r[1], r[2], 0.12, 4));
    let s = [15921904, 16109796, 14084341, 16116936][t % 4];
    (e.col(s).mat(0.3, 0.2, 0.35, 1),
      e.obox(r[0] + 0.1, r[1] - 1.5, r[2], 1.05, 1.1, 1.05),
      e.coarse ||
        (e.col(7309204).mat(0.1, 0.5, 0.2, 1),
        e.obox(r[0] + 0.1, r[1] - 1.35, r[2], 1.08, 0.55, 0.9)));
  }
  (yield,
    e.col(14672611).mat(0.5, 0.5, 0.02, 1),
    e.box(
      BF(JF) - 3.2,
      KF.h + 0.4,
      VF(YF) - 17,
      BF(JF) + 3.2,
      KF.h + 2.2,
      VF(YF) + 15.5,
    ));
  for (let t of [-1, 1]) {
    let n = t * 2;
    for (let t of [-0.55, -0.28, 0, 0.28, 0.5]) {
      let i = rI(t, r, n);
      e.rod(i[0], KF.h + 2.2, i[2], i[0], i[1], i[2], 0.5, 6);
    }
    for (let t of [-1, 1]) {
      let i = rI(t * 1.05, r, n),
        a = [BF(JF) + n, KF.h + 2.2, VF(YF) + t * 15];
      e.rod(a[0], a[1], a[2], i[0], i[1], i[2], 0.55, 6);
    }
  }
}
function iI(e, t, n, r, i) {
  let a = t.length,
    o = Math.sign(r),
    s = (e, r, i) => {
      let a = t[e],
        o = n[e];
      return [
        a[0] + o.s[0] * r + o.u[0] * i,
        a[1] + o.s[1] * r + o.u[1] * i,
        a[2] + o.s[2] * r + o.u[2] * i,
      ];
    };
  for (let t = 0; t < a; t++) {
    if (!i(t)) continue;
    let c = (t + 1) % a,
      l = n[t];
    (tM(
      e,
      s(t, r - 0.1, 0.1),
      s(t, r + 0.1, 0.1),
      s(c, r + 0.1, 0.1),
      s(c, r - 0.1, 0.1),
      l.u,
    ),
      tM(
        e,
        s(t, r + o * 0.1, 0.1),
        s(t, r + o * 0.1, -0.12),
        s(c, r + o * 0.1, -0.12),
        s(c, r + o * 0.1, 0.1),
        [l.s[0] * o, l.s[1] * o, l.s[2] * o],
      ));
  }
}
