// tokyo/assets/region-tokyo-A7LxHjud 302 — col
// Lines 110056-110368 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* UEe(e, t, n) {
  (PG(e, n, -64, gG, mG.e0, mG.e1, () => aG),
    e.push().col(14276303).mat(0.85, 0, 0.05, 1),
    MG(
      e,
      n,
      -64,
      gG,
      hG.e0,
      hG.e1 - 0.62,
      () => aG,
      !0,
      e.coarse ? e.white : t.c(`paving`),
    ),
    e.col(15921386).mat(0.8),
    MG(e, n, -64, gG, hG.e1 - 0.3, hG.e1, () => aG, !0),
    e.col(15254060).mat(0.7),
    MG(e, n, -64, gG, hG.e1 - 0.62, hG.e1 - 0.3, () => aG + 0.004, !0),
    e.col(vG).mat(0.9),
    NG(
      e,
      n,
      -64,
      gG,
      hG.e1,
      () => iG,
      () => aG,
      1,
    ));
  for (let [t, r] of [
    [-64, -1],
    [gG, 1],
  ]) {
    let i = DG(n, t, hG.e0),
      a = DG(n, t, hG.e1),
      o = DG(n, t + r, hG.e0);
    AG(e, i, a, iG, aG, iG, aG, o[0] - i[0], o[1] - i[1]);
  }
  if ((e.pop(), PG(e, n, -64, gG, hG.e0, hG.e1, () => aG), yield, !e.coarse)) {
    e.push().col(14672611).mat(0.5, 0.2);
    for (let t = -62; t < 62; t += 5) {
      let r = Math.min(62, t + 3.6),
        i = DG(n, t, hG.e1 - 0.35),
        a = DG(n, r, hG.e1 - 0.35),
        o = DG(n, t, hG.e1 + 1);
      (AG(e, i, a, aG, aG + 1.25, aG, aG + 1.25, o[0] - i[0], o[1] - i[1]),
        AG(e, i, a, aG, aG + 1.25, aG, aG + 1.25, i[0] - o[0], i[1] - o[1]));
    }
    (e.col(8438337).mat(0.5),
      NG(
        e,
        n,
        -62,
        62,
        hG.e1 - 0.33,
        () => aG + 0.95,
        () => aG + 1.05,
        1,
      ),
      e.pop());
  }
  e.push().col(10133668).mat(0.6, 0.4);
  let r = aG + 3.6,
    i = aG + 3.2;
  if (!e.coarse)
    for (let t = -58; t < cG.s0; t += 12) {
      let i = kG(e, n, t);
      (e.box(hG.e0 + 0.6, aG, -0.12, hG.e0 + 0.85, r, 0.12),
        e.pole(hG.e0 + 0.72, 0, 0.2, aG, r),
        e.leave(i));
    }
  (e.col(7239035).mat(0.7, 0.3),
    MG(e, n, -62, cG.s0, fG, hG.e1 + 0.5, (e) => r + 0 * e, !0, e.white, 8),
    e.col(14211800).mat(0.7, 0.1, 0.12, 1),
    MG(e, n, -62, cG.s0, fG, hG.e1 + 0.5, () => i + 0.3, !1, e.white, 8),
    e.pop());
}
function* WEe(e, t, n) {
  let r = (cG.s0 + cG.s1) / 2,
    i = kG(e, n, r),
    a = cG.s0 - r,
    o = cG.s1 - r,
    s = cG.e0,
    c = cG.e1,
    l = rG + 5.2,
    u = rG + 10.4,
    d = [
      { x0: 2.4, x1: 5.9, zb: 41.6 - r, zt: 50 - r },
      { x0: -6.2, x1: -3.2, zb: 41.6 - r, zt: 50 - r },
    ];
  (e.push().col(10131343).mat(0.9),
    e.flat(-gy, a, 16, o, oG, e.white, 0, 0, !1),
    e.panel(16, a, -gy, a, oG, rG),
    e.pop(),
    e.push().col(14210251).mat(0.8, 0, 0.05, 1));
  let f = e.coarse ? e.white : t.c(`paving`),
    p = rG + 0.02;
  (e.flat(s, a, d[1].x0, o, p, f, 4, 4),
    e.flat(d[1].x0, d[1].zt, d[0].x1, o, p, f, 4, 4),
    e.flat(d[1].x1, a, d[0].x0, d[1].zt, p, f, 4, 4),
    e.flat(d[0].x1, a, c, o, p, f, 4, 4),
    e.flat(d[1].x0, a, d[0].x1, d[1].zb, p, f, 4, 4),
    e.pop(),
    e.floor(s, a, d[1].x0, o, rG),
    e.floor(d[1].x0, d[1].zt, d[0].x1, o, rG),
    e.floor(d[1].x1, a, d[0].x0, d[1].zt, rG),
    e.floor(d[0].x1, a, c, o, rG));
  for (let t of d) e.floor(t.x0, t.zb, t.x1, t.zt, aG, rG);
  yield;
  for (let t of d) {
    let n = e.coarse ? 4 : 15,
      r = (t.zt - t.zb) / n,
      i = (rG - aG) / n;
    e.push().col(13223615).mat(0.85);
    for (let a = 0; a < n; a++) {
      let n = t.zb + a * r,
        o = aG + (a + 1) * i;
      (e.flat(t.x0, n, t.x1, n + r, o), e.panel(t.x0, n, t.x1, n, o - i, o));
    }
    (e.col(9343638).mat(0.6, 0.3),
      e.quad(
        t.x0,
        aG,
        t.zb,
        t.x0,
        aG,
        t.zt,
        t.x0,
        rG + 1,
        t.zt,
        t.x0,
        aG + 1,
        t.zb,
      ),
      e.quad(
        t.x1,
        aG,
        t.zt,
        t.x1,
        aG,
        t.zb,
        t.x1,
        aG + 1,
        t.zb,
        t.x1,
        rG + 1,
        t.zt,
      ),
      e.col(12174536).mat(0.2, 0.3),
      e.coarse ||
        (e.panel(t.x1, t.zb, t.x0, t.zb, rG, rG + 1.1),
        e.panel(t.x0, t.zb, t.x1, t.zb, rG, rG + 1.1)),
      e.pop(),
      e.solid(t.x0 - 0.1, t.zb, t.x0, t.zt, aG, rG + 1.1, `fence`),
      e.solid(t.x1, t.zb, t.x1 + 0.1, t.zt, aG, rG + 1.1, `fence`),
      e.solid(t.x0, t.zb - 0.1, t.x1, t.zb, rG - 0.2, rG + 1.1, `fence`));
  }
  (yield, e.push().col(9146259).mat(0.7, 0.2));
  for (let t of [a + 4, a + 13, o - 2])
    for (let n of [4.15, -4.6])
      (e.box(n - 0.3, aG, t - 0.3, n + 0.3, oG, t + 0.3),
        e.pole(n, t, 0.35, aG, oG));
  if ((e.pop(), !e.coarse)) {
    let t = 52 - r;
    e.push().col(10462376).mat(0.5, 0.4);
    for (let n = -3.4; n < 15; n += 1.3)
      (e.box(n - 0.12, rG, t - 0.55, n + 0.12, rG + 1.05, t + 0.55),
        e.col(2784212).mat(0.4, 0, 0.6, 1),
        e.box(n - 0.13, rG + 0.85, t - 0.2, n + 0.13, rG + 0.95, t + 0.2),
        e.col(10462376).mat(0.5, 0.4));
    (e.pop(),
      e.push().col(15131871).mat(0.8, 0, 0.35, 1),
      e.flat(s, a, c, o, l - 0.4, e.white, 0, 0, !1),
      e.col(3882819).mat(0.9, 0, 0.06, 1),
      e.box(s + 0.3, rG, o - 4.5, -5, l - 0.4, o - 0.3),
      e.pop(),
      e.solid(s + 0.3, o - 4.5, -5, o - 0.3, rG, l));
  }
  yield;
  let m = { z0: 51 - r, z1: 63 - r },
    h = { z0: 52 - r, z1: 58 - r },
    g = (n, r, i, a, o, s, c, l = !1) => {
      if (
        (e.push().col(zEe).mat(0.25, 0.15, 0.22, G),
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
      e.push().col(REe).mat(0.45, 0.5);
      for (let t = 0.6; t < u; t += 1.2) {
        let i = n + d * t,
          a = r + f * t,
          u = l ? a : i,
          h = c && u > c[0] && u < c[1] ? rG + 4.2 : o,
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
          rG + 4.85,
          rG + 5.25,
        ),
        e.pop());
    };
  if (
    (g(c, o, c, a, rG, u - 0.5, [m.z0, m.z1], !0),
    g(s, o, c, o, rG, u - 0.5),
    g(c, a, s, a, rG, u - 0.5),
    e.push().col(3948868).mat(0.3, 0.4, 0.12, G),
    e.panel(s, a, s, o, rG, u - 0.5, e.coarse ? e.white : t.c(`glass`)),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(VEe).mat(0.8);
    for (let t = a + 0.5; t < o; t += 1) {
      let n = t > h.z0 && t < h.z1 ? rG + 3.6 : rG + 0.4;
      e.box(s - 0.35, n, t - 0.04, s - 0.05, u - 0.7, t + 0.04);
    }
    e.pop();
  }
  (e.push().col(BEe).mat(0.6, 0.3),
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
    e.solid(c - 0.2, a, c, m.z0, rG, u),
    e.solid(c - 0.2, m.z1, c, o, rG, u),
    e.solid(s, a, s + 0.2, h.z0, rG, u),
    e.solid(s, h.z1, s + 0.2, o, rG, u),
    e.solid(s, o - 0.2, c, o, rG, u),
    e.solid(s, a, c, a + 0.2, rG, u),
    yield);
  let _ = m.z0 - 2,
    v = m.z1 + 2,
    y = rG + 4.3,
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
      IG(t, `station`),
    ),
    e.panel(
      c + 0.3,
      (m.z0 + m.z1) / 2 + 1.6,
      c + 0.3,
      (m.z0 + m.z1) / 2 - 1.6,
      y - 0.85,
      y - 0.15,
      IG(t, `omotesando`),
    ),
    e.panel(
      s - 0.45,
      (h.z0 + h.z1) / 2 - 1.2,
      s - 0.45,
      (h.z0 + h.z1) / 2 + 1.2,
      rG + 3,
      rG + 3.6,
      IG(t, `west`),
    ),
    e.pop(),
    e.push().col(2041385).mat(0.2, 0.5, 0.15, G),
    e.panel(c + 0.02, m.z1, c + 0.02, m.z0, rG, rG + 3),
    e.panel(s - 0.02, h.z0, s - 0.02, h.z1, rG, rG + 3),
    e.pop(),
    e.leave(i));
}
