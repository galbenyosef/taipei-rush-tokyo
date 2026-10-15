// tokyo/assets/region-tokyo-55J_WESF 302 — col
// Lines 109965-110277 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* kEe(e, t, n) {
  (NG(e, n, -64, hG, pG.e0, pG.e1, () => iG),
    e.push().col(14276303).mat(0.85, 0, 0.05, 1),
    jG(
      e,
      n,
      -64,
      hG,
      mG.e0,
      mG.e1 - 0.62,
      () => iG,
      !0,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(15921386).mat(0.8),
    jG(e, n, -64, hG, mG.e1 - 0.3, mG.e1, () => iG, !0),
    e.col(15254060).mat(0.7),
    jG(e, n, -64, hG, mG.e1 - 0.62, mG.e1 - 0.3, () => iG + 0.004, !0),
    e.col(_G).mat(0.9),
    MG(
      e,
      n,
      -64,
      hG,
      mG.e1,
      () => rG,
      () => iG,
      1,
    ));
  for (let [t, r] of [
    [-64, -1],
    [hG, 1],
  ]) {
    let i = EG(n, t, mG.e0),
      a = EG(n, t, mG.e1),
      o = EG(n, t + r, mG.e0);
    kG(e, i, a, rG, iG, rG, iG, o[0] - i[0], o[1] - i[1]);
  }
  if ((e.pop(), NG(e, n, -64, hG, mG.e0, mG.e1, () => iG), yield, !e.coarse)) {
    e.push().col(14672611).mat(0.5, 0.2);
    for (let t = -62; t < 62; t += 5) {
      let r = Math.min(62, t + 3.6),
        i = EG(n, t, mG.e1 - 0.35),
        a = EG(n, r, mG.e1 - 0.35),
        o = EG(n, t, mG.e1 + 1);
      (kG(e, i, a, iG, iG + 1.25, iG, iG + 1.25, o[0] - i[0], o[1] - i[1]),
        kG(e, i, a, iG, iG + 1.25, iG, iG + 1.25, i[0] - o[0], i[1] - o[1]));
    }
    (e.col(8438337).mat(0.5),
      MG(
        e,
        n,
        -62,
        62,
        mG.e1 - 0.33,
        () => iG + 0.95,
        () => iG + 1.05,
        1,
      ),
      e.pop());
  }
  e.push().col(10133668).mat(0.6, 0.4);
  let r = iG + 3.6,
    i = iG + 3.2;
  if (!e.coarse)
    for (let t = -58; t < sG.s0; t += 12) {
      let i = OG(e, n, t);
      (e.box(mG.e0 + 0.6, iG, -0.12, mG.e0 + 0.85, r, 0.12),
        e.pole(mG.e0 + 0.72, 0, 0.2, iG, r),
        e.leave(i));
    }
  (e.col(7239035).mat(0.7, 0.3),
    jG(e, n, -62, sG.s0, dG, mG.e1 + 0.5, (e) => r + 0 * e, !0, e.white, 8),
    e.col(14211800).mat(0.7, 0.1, 0.12, 1),
    jG(e, n, -62, sG.s0, dG, mG.e1 + 0.5, () => i + 0.3, !1, e.white, 8),
    e.pop());
}
function* AEe(e, t, n) {
  let r = (sG.s0 + sG.s1) / 2,
    i = OG(e, n, r),
    a = sG.s0 - r,
    o = sG.s1 - r,
    s = sG.e0,
    c = sG.e1,
    l = nG + 5.2,
    u = nG + 10.4,
    d = [
      { x0: 2.4, x1: 5.9, zb: 41.6 - r, zt: 50 - r },
      { x0: -6.2, x1: -3.2, zb: 41.6 - r, zt: 50 - r },
    ];
  (e.push().col(10131343).mat(0.9),
    e.flat(-py, a, 16, o, aG, e.white, 0, 0, !1),
    e.panel(16, a, -py, a, aG, nG),
    e.pop(),
    e.push().col(14210251).mat(0.8, 0, 0.05, 1));
  let f = e.coarse ? e.white : t.c(`paving`),
    p = nG + 0.02;
  (e.flat(s, a, d[1].x0, o, p, f, 4, 4),
    e.flat(d[1].x0, d[1].zt, d[0].x1, o, p, f, 4, 4),
    e.flat(d[1].x1, a, d[0].x0, d[1].zt, p, f, 4, 4),
    e.flat(d[0].x1, a, c, o, p, f, 4, 4),
    e.flat(d[1].x0, a, d[0].x1, d[1].zb, p, f, 4, 4),
    e.pop(),
    e.floor(s, a, d[1].x0, o, nG),
    e.floor(d[1].x0, d[1].zt, d[0].x1, o, nG),
    e.floor(d[1].x1, a, d[0].x0, d[1].zt, nG),
    e.floor(d[0].x1, a, c, o, nG));
  for (let t of d) e.floor(t.x0, t.zb, t.x1, t.zt, iG, nG);
  yield;
  for (let t of d) {
    let n = e.coarse ? 4 : 15,
      r = (t.zt - t.zb) / n,
      i = (nG - iG) / n;
    e.push().col(13223615).mat(0.85);
    for (let a = 0; a < n; a++) {
      let n = t.zb + a * r,
        o = iG + (a + 1) * i;
      (e.flat(t.x0, n, t.x1, n + r, o), e.panel(t.x0, n, t.x1, n, o - i, o));
    }
    (e.col(9343638).mat(0.6, 0.3),
      e.quad(
        t.x0,
        iG,
        t.zb,
        t.x0,
        iG,
        t.zt,
        t.x0,
        nG + 1,
        t.zt,
        t.x0,
        iG + 1,
        t.zb,
      ),
      e.quad(
        t.x1,
        iG,
        t.zt,
        t.x1,
        iG,
        t.zb,
        t.x1,
        iG + 1,
        t.zb,
        t.x1,
        nG + 1,
        t.zt,
      ),
      e.col(12174536).mat(0.2, 0.3),
      e.coarse ||
        (e.panel(t.x1, t.zb, t.x0, t.zb, nG, nG + 1.1),
        e.panel(t.x0, t.zb, t.x1, t.zb, nG, nG + 1.1)),
      e.pop(),
      e.solid(t.x0 - 0.1, t.zb, t.x0, t.zt, iG, nG + 1.1, `fence`),
      e.solid(t.x1, t.zb, t.x1 + 0.1, t.zt, iG, nG + 1.1, `fence`),
      e.solid(t.x0, t.zb - 0.1, t.x1, t.zb, nG - 0.2, nG + 1.1, `fence`));
  }
  (yield, e.push().col(9146259).mat(0.7, 0.2));
  for (let t of [a + 4, a + 13, o - 2])
    for (let n of [4.15, -4.6])
      (e.box(n - 0.3, iG, t - 0.3, n + 0.3, aG, t + 0.3),
        e.pole(n, t, 0.35, iG, aG));
  if ((e.pop(), !e.coarse)) {
    let t = 52 - r;
    e.push().col(10462376).mat(0.5, 0.4);
    for (let n = -3.4; n < 15; n += 1.3)
      (e.box(n - 0.12, nG, t - 0.55, n + 0.12, nG + 1.05, t + 0.55),
        e.col(2784212).mat(0.4, 0, 0.6, 1),
        e.box(n - 0.13, nG + 0.85, t - 0.2, n + 0.13, nG + 0.95, t + 0.2),
        e.col(10462376).mat(0.5, 0.4));
    (e.pop(),
      e.push().col(15131871).mat(0.8, 0, 0.35, 1),
      e.flat(s, a, c, o, l - 0.4, e.white, 0, 0, !1),
      e.col(3882819).mat(0.9, 0, 0.06, 1),
      e.box(s + 0.3, nG, o - 4.5, -5, l - 0.4, o - 0.3),
      e.pop(),
      e.solid(s + 0.3, o - 4.5, -5, o - 0.3, nG, l));
  }
  yield;
  let m = { z0: 51 - r, z1: 63 - r },
    h = { z0: 52 - r, z1: 58 - r },
    g = (n, r, i, a, o, s, c, l = !1) => {
      if (
        (e.push().col(TEe).mat(0.25, 0.15, 0.22, G),
        e.panel(n, r, i, a, o, s, e.coarse ? e.white : t.c(`glass`)),
        e.pop(),
        e.coarse)
      )
        return;
      let u = Math.hypot(i - n, a - r),
        d = (i - n) / u,
        f = (a - r) / u,
        p = -f,
        m = d;
      e.push().col(wEe).mat(0.45, 0.5);
      for (let t = 0.6; t < u; t += 1.2) {
        let i = n + d * t,
          a = r + f * t,
          u = l ? a : i,
          h = c && u > c[0] && u < c[1] ? nG + 4.2 : o,
          g = i + p * 0.5,
          _ = a + m * 0.5,
          v = d * 0.05,
          y = f * 0.05;
        (e.panel(i - v, a - y, g - v, _ - y, h, s),
          e.panel(g + v, _ + y, i + v, a + y, h, s),
          e.panel(g - v, _ - y, g + v, _ + y, h, s));
      }
      (e.col(6120038).mat(0.6, 0.3),
        e.panel(
          n + p * 0.02,
          r + m * 0.02,
          i + p * 0.02,
          a + m * 0.02,
          nG + 4.85,
          nG + 5.25,
        ),
        e.pop());
    };
  if (
    (g(c, o, c, a, nG, u - 0.5, [m.z0, m.z1], !0),
    g(s, o, c, o, nG, u - 0.5),
    g(c, a, s, a, nG, u - 0.5),
    e.push().col(3948868).mat(0.3, 0.4, 0.12, G),
    e.panel(s, a, s, o, nG, u - 0.5, e.coarse ? e.white : t.c(`glass`)),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(DEe).mat(0.8);
    for (let t = a + 0.5; t < o; t += 1) {
      let n = t > h.z0 && t < h.z1 ? nG + 3.6 : nG + 0.4;
      e.box(s - 0.35, n, t - 0.04, s - 0.05, u - 0.7, t + 0.04);
    }
    e.pop();
  }
  (e.push().col(EEe).mat(0.6, 0.3),
    e.box(
      s - 0.8,
      u - 0.5,
      a - 0.8,
      c + 0.8,
      u,
      o + 0.8,
      e.white,
      0,
      0,
      null,
      !0,
    ),
    e.pop(),
    e.push().col(3093302).mat(0.8),
    e.box(s + 0.1, l - 0.4, a + 0.1, c - 0.1, l, o - 0.1),
    e.pop(),
    e.solid(c - 0.2, a, c, m.z0, nG, u),
    e.solid(c - 0.2, m.z1, c, o, nG, u),
    e.solid(s, a, s + 0.2, h.z0, nG, u),
    e.solid(s, h.z1, s + 0.2, o, nG, u),
    e.solid(s, o - 0.2, c, o, nG, u),
    e.solid(s, a, c, a + 0.2, nG, u),
    yield);
  let _ = m.z0 - 2,
    v = m.z1 + 2,
    y = nG + 4.3,
    b = 2.8;
  (e.push().col(13225166).mat(0.5, 0.5),
    e.box(c, y, _, c + b, y + 0.45, v, e.white, 0, 0, null, !0),
    e.col(16052972).mat(0.6, 0, 0.45, 1),
    e.flat(c + 0.2, _ + 0.2, c + b - 0.2, v - 0.2, y - 0.01, e.white, 0, 0, !1),
    e.pop(),
    e.push().col(4014662).mat(0.5, 0.4),
    e.box(
      c + b - 0.25,
      y + 0.45,
      (_ + v) / 2 - 4.7,
      c + b - 0.05,
      y + 1.75,
      (_ + v) / 2 + 4.7,
    ),
    e.col(16777215).mat(0.5, 0, 0.5, G),
    e.panel(
      c + b - 0.03,
      (_ + v) / 2 + 4.6,
      c + b - 0.03,
      (_ + v) / 2 - 4.6,
      y + 0.5,
      y + 1.65,
      FG(t, `station`),
    ),
    e.panel(
      c + 0.3,
      (m.z0 + m.z1) / 2 + 1.6,
      c + 0.3,
      (m.z0 + m.z1) / 2 - 1.6,
      y - 0.85,
      y - 0.15,
      FG(t, `omotesando`),
    ),
    e.panel(
      s - 0.45,
      (h.z0 + h.z1) / 2 - 1.2,
      s - 0.45,
      (h.z0 + h.z1) / 2 + 1.2,
      nG + 3,
      nG + 3.6,
      FG(t, `west`),
    ),
    e.pop(),
    e.push().col(2041385).mat(0.2, 0.5, 0.15, G),
    e.panel(c + 0.02, m.z1, c + 0.02, m.z0, nG, nG + 3),
    e.panel(s - 0.02, h.z0, s - 0.02, h.z1, nG, nG + 3),
    e.pop(),
    e.leave(i));
}
