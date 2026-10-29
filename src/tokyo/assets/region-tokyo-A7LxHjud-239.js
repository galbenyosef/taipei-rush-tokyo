// tokyo/assets/region-tokyo-A7LxHjud 239 — col
// Lines 90800-91092 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Rxe(e, t) {
  let n = t.A.sub(`gtGlass`, 0, 2 / 3, 1, 1),
    r = Ixe(),
    i = rI();
  e.col(15134707).mat(0.2, 0.45, 0.12, G);
  for (let t of i) {
    let [i, a, o, s] = t.ab;
    iI(
      e,
      i,
      a,
      o,
      s,
      0,
      qF.h - 8.4,
      (r.get(t.key) ?? []).filter((e) => e[2] < qF.h - 8.4),
      n,
      12.8,
      YF,
    );
  }
  e.col(16771538).mat(0.2, 0.4, 0.3, G);
  for (let t of i) {
    let [i, a, o, s] = t.ab;
    iI(
      e,
      i,
      a,
      o,
      s,
      qF.h - 8.4,
      qF.h,
      (r.get(t.key) ?? []).filter((e) => e[3] > qF.h - 8.4),
      n,
      12.8,
      YF,
    );
  }
  let a = WF(qF.x0, qF.z0, qF.x1, qF.z1);
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
      (rM(
        e,
        d(0, 0.3, u - 0.1),
        d(s, 0.3, u - 0.1),
        d(s, 0.3, u + 0.6),
        d(0, 0.3, u + 0.6),
        [c, 0, l],
      ),
        rM(
          e,
          d(0, 0, u + 0.6),
          d(s, 0, u + 0.6),
          d(s, 0.3, u + 0.6),
          d(0, 0.3, u + 0.6),
          [0, 1, 0],
        ),
        rM(
          e,
          d(0, 0, u - 0.1),
          d(s, 0, u - 0.1),
          d(s, 0.3, u - 0.1),
          d(0, 0.3, u - 0.1),
          [0, -1, 0],
        ));
    }
  }
  (Wk(e, a, 0.35, qF.h, qF.h + 1.2),
    Wk(e, a, 0.4, 0, 0.6),
    yield,
    e.col(1448220).mat(0.9, 0, 0, 0));
  let o = 0.6,
    s = {
      x0: HF(qF.x0) + o,
      x1: HF(qF.x1) - o,
      z0: UF(qF.z0) + o,
      z1: UF(qF.z1) - o,
    };
  if (
    (rM(
      e,
      [s.x0, 0.6, s.z0],
      [s.x1, 0.6, s.z0],
      [s.x1, qF.h, s.z0],
      [s.x0, qF.h, s.z0],
      [0, 0, 1],
    ),
    rM(
      e,
      [s.x0, 0.6, s.z1],
      [s.x1, 0.6, s.z1],
      [s.x1, qF.h, s.z1],
      [s.x0, qF.h, s.z1],
      [0, 0, -1],
    ),
    rM(
      e,
      [s.x0, 0.6, s.z0],
      [s.x0, 0.6, s.z1],
      [s.x0, qF.h, s.z1],
      [s.x0, qF.h, s.z0],
      [1, 0, 0],
    ),
    rM(
      e,
      [s.x1, 0.6, s.z0],
      [s.x1, 0.6, s.z1],
      [s.x1, qF.h, s.z1],
      [s.x1, qF.h, s.z0],
      [-1, 0, 0],
    ),
    e.coarse ||
      (e.col(14216447).mat(0.4, 0, 0.8, 0),
      e.flat(s.x0, s.z0 + 4, s.x1, s.z0 + 4.4, 36, e.white, 0, 0, !1),
      e.flat(s.x0, s.z0 + 11, s.x1, s.z0 + 11.4, 48, e.white, 0, 0, !1)),
    !e.coarse)
  ) {
    let t = e.sub(HF(qF.x1) + 0.06, 0, UF(-798.5), Math.PI / 2);
    (e.col(16777215).mat(0.4, 0.1, 0.8, 1),
      uM(e, `LaQua`, 0, qF.h - 6.6, 0, 3.6, 0.2),
      e.leave(t));
  }
  (e.solid(HF(qF.x0), UF(qF.z0), HF(qF.x1), UF(qF.z1), 0, qF.h + 1.2), yield);
  let c = WF(JF.x0, JF.z0, JF.x1, JF.z1);
  (e.col(16777215).mat(0.35, 0.1, 0.3, G),
    Vk(e, c, 0, 5, t.c(`doors`), 2.4, 5),
    e.col(15331828).mat(0.2, 0.45, 0.14, G),
    Vk(e, c, 5, JF.h - 0.6, n, 12.8, YF),
    e.col(15987696).mat(0.55, 0.05, 0.05, 1),
    Wk(e, c, 0.3, JF.h - 0.6, JF.h + 0.4),
    e.solid(HF(JF.x0), UF(JF.z0), HF(JF.x1), UF(JF.z1), 0, JF.h + 0.4),
    e.col(15790316).mat(0.4, 0.2, 0.25, G),
    e.box(
      HF(-832),
      JF.h + 0.4,
      UF(-762),
      HF(-822),
      JF.h + 3.6,
      UF(-746),
      t.c(`doors`),
      2.4,
      3.2,
    ));
}
var aI = (e, t, n) => [
  HF(XF) + n,
  Nxe - t * Math.cos(e),
  UF(ZF) + t * Math.sin(e),
];
function* zxe(e) {
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
      rM(e, aI(s, r, -1.5), aI(c, r, -1.5), aI(c, r, i), aI(s, r, i), u),
      rM(e, aI(s, n, -1.5), aI(c, n, -1.5), aI(c, n, i), aI(s, n, i), [
        -u[0],
        -u[1],
        -u[2],
      ]));
    for (let l of [-1, 1]) {
      let u = [l, 0, 0];
      if (e.coarse) {
        rM(
          e,
          aI(s, n, l * i),
          aI(c, n, l * i),
          aI(c, r, l * i),
          aI(s, r, l * i),
          u,
        );
        continue;
      }
      let d = a[Math.floor((o / t) * 16) % a.length];
      (e.col(d).mat(0.4, 0.1, 0.6, 1),
        rM(
          e,
          aI(s, 30.88, l * i),
          aI(c, 30.88, l * i),
          aI(c, r, l * i),
          aI(s, r, l * i),
          u,
        ),
        rM(
          e,
          aI(s, n, l * i),
          aI(c, n, l * i),
          aI(c, 29.12, l * i),
          aI(s, 29.12, l * i),
          u,
        ),
        e.col(14146526).mat(0.45, 0.6, 0.02, 1),
        rM(
          e,
          aI(s, 29.12, l * i),
          aI(c, 29.12, l * i),
          aI(c, 30.88, l * i),
          aI(s, 30.88, l * i),
          u,
        ));
    }
  }
  yield;
  let o = e.coarse ? 20 : 40;
  for (let t = 0; t < o; t++) {
    let n = (t / o) * Math.PI * 2 + 0.04,
      r = aI(n, QF, 3.1),
      a = aI(n, QF, i);
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
      HF(XF) - 3.2,
      JF.h + 0.4,
      UF(ZF) - 17,
      HF(XF) + 3.2,
      JF.h + 2.2,
      UF(ZF) + 15.5,
    ));
  for (let t of [-1, 1]) {
    let n = t * 2;
    for (let t of [-0.55, -0.28, 0, 0.28, 0.5]) {
      let i = aI(t, r, n);
      e.rod(i[0], JF.h + 2.2, i[2], i[0], i[1], i[2], 0.5, 6);
    }
    for (let t of [-1, 1]) {
      let i = aI(t * 1.05, r, n),
        a = [HF(XF) + n, JF.h + 2.2, UF(ZF) + t * 15];
      e.rod(a[0], a[1], a[2], i[0], i[1], i[2], 0.55, 6);
    }
  }
}
function oI(e, t, n, r, i) {
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
    (rM(
      e,
      s(t, r - 0.1, 0.1),
      s(t, r + 0.1, 0.1),
      s(c, r + 0.1, 0.1),
      s(c, r - 0.1, 0.1),
      l.u,
    ),
      rM(
        e,
        s(t, r + o * 0.1, 0.1),
        s(t, r + o * 0.1, -0.12),
        s(c, r + o * 0.1, -0.12),
        s(c, r + o * 0.1, 0.1),
        [l.s[0] * o, l.s[1] * o, l.s[2] * o],
      ));
  }
}
