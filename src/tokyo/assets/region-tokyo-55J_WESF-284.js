// tokyo/assets/region-tokyo-55J_WESF 284 — math
// Lines 104714-104956 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function qH(e, t, n, r, i, a, o, s) {
  let c = [iH, cH, dH, bH],
    l = [aH, sH, lH, 6].map((e) => e / 2),
    u = (e, t) => {
      for (let n = 0; n < c.length; n++)
        if (n !== i && OH(e, t, c[n]) < l[n] + 1.2) return !0;
      if (
        DH(
          e,
          t,
          { x0: fH.x0 - 6, z0: hH.z0 - 6, x1: fH.x1 + 6, z1: fH.z1 + 6 },
          0.5,
        ) ||
        DH(e, t, { x0: yH.x - 7, z0: yH.z - 7, x1: uH, z1: yH.z + 7 }, 0)
      )
        return !0;
      let n = (e - xH.ax) * kH.ux + (t - xH.az) * kH.uz,
        r = (e - xH.ax) * kH.nx + (t - xH.az) * kH.nz;
      return (
        (n > AH - jH / 2 - 2 && n < 39 && Math.abs(r) < 13) ||
        (e > -1915 && t > 952)
      );
    },
    d = 0,
    f = 0;
  for (let t = 0; t + 1 < n.length; t++) {
    let [i, c] = n[t],
      [l, p] = n[t + 1],
      m = Math.hypot(l - i, p - c),
      h = (l - i) / m,
      g = (p - c) / m,
      _ = -g,
      v = h;
    if (e.coarse) continue;
    let y = Math.max(1, Math.round(m / 8));
    for (let n = 0; n < y; n++) {
      let l = (m * n) / y,
        p = (m * (n + 1)) / y,
        b = i + h * l + _ * r,
        x = c + g * l + v * r,
        S = i + h * p + _ * r,
        C = c + g * p + v * r;
      if (u((b + S) / 2, (x + C) / 2)) continue;
      let w = s(b, x),
        T = s(S, C);
      Ywe(e, b, x, S, C, w, T);
      let E = Math.sign(r);
      if (
        (Xwe(
          e,
          b + _ * E * 0.6,
          x + v * E * 0.6,
          S + _ * E * 0.6,
          C + v * E * 0.6,
          w,
          T,
          _ * E,
          v * E,
          a + t * 31 + n,
        ),
        (t * 7 + n) % 2 == 0)
      ) {
        let r = VV(a * 3 + t * 17 + n),
          i = 2.6 + r.next() * 2.5,
          o = r.next(),
          c = b + (S - b) * o + _ * E * i,
          l = x + (C - x) * o + v * E * i;
        if (!u(c, l)) {
          let t = r.range(0.3, 0.55),
            n = r.range(-0.6, 0.6);
          (e.push().col(4866104, r.range(0.85, 1.15)).mat(0.95),
            e.rod(
              c,
              s(c, l) - 0.3,
              l,
              c + _ * E * n,
              s(c, l) + 10.5,
              l + v * E * n,
              t,
              5,
              t * 0.6,
            ),
            e.pop(),
            e.pole(c, l, t, s(c, l), s(c, l) + 3));
        }
      }
      if (!e.coarse && o > 0 && d + l >= f * o) {
        f++;
        let t = (b + S) / 2 - _ * E * 0.9,
          n = (x + C) / 2 - v * E * 0.9;
        Zwe(e, t, n, s(t, n));
      }
    }
    d += m;
  }
}
function* Qwe(e, t) {
  let n = t.c(`gravel`),
    r = FH(t);
  (GH(e, iH, aH, RV.PATH, TH, n, r),
    GH(e, dH, lH, RV.PATH + 0.01, TH, n, r),
    GH(e, cH, sH, RV.PATH - 0.01, TH, n, r),
    GH(e, bH, 6, RV.PATH - 0.02, TH, n, r),
    yield,
    qH(e, t, iH, 7.9, 0, 5300, 34, r),
    qH(e, t, iH, -7.9, 0, 5400, 34, r),
    yield,
    qH(e, t, dH, 6.4, 2, 5500, 34, r),
    qH(e, t, dH, -6.4, 2, 5600, 34, r),
    qH(e, t, cH, 5.4, 1, 5700, 0, r),
    qH(e, t, cH, -5.4, 1, 5800, 0, r),
    yield);
  let i = t.season,
    a = [`ever`, `ever`, `ever`, `keyaki`, `ever`];
  for (let t = 0; t + 1 < iH.length; t++) {
    let [n, o] = iH[t],
      [s, c] = iH[t + 1],
      l = Math.hypot(s - n, c - o),
      u = -(c - o) / l,
      d = (s - n) / l;
    (KH(
      e,
      n + u * 11,
      o + d * 11,
      s + u * 11,
      c + d * 11,
      30,
      5101 + t,
      i,
      a,
      r,
    ),
      KH(
        e,
        n - u * 11,
        o - d * 11,
        s - u * 11,
        c - d * 11,
        30,
        5121 + t,
        i,
        a,
        r,
      ));
  }
  (KH(e, oH.x, oH.z - lH / 2 - 4, -2124, oH.z - lH / 2 - 4, 26, 5141, i, a, r),
    KH(
      e,
      oH.x - 6,
      oH.z + lH / 2 + 4,
      -2140,
      oH.z + lH / 2 + 4,
      26,
      5142,
      i,
      a,
      r,
    ),
    KH(e, -2122.5, oH.z - 8, -2122.5, fH.z1 + 10, 26, 5143, i, a, r),
    KH(
      e,
      uH - lH / 2 - 4,
      oH.z - 8,
      uH - lH / 2 - 4,
      fH.z1 + 10,
      26,
      5144,
      i,
      a,
      r,
    ),
    KH(
      e,
      oH.x - sH / 2 - 4,
      oH.z - 10,
      oH.x - sH / 2 - 4,
      tH.z0 + 30,
      28,
      5145,
      i,
      a,
      r,
    ),
    KH(
      e,
      oH.x + sH / 2 + 4,
      oH.z - 10,
      oH.x + sH / 2 + 4,
      tH.z0 + 30,
      28,
      5146,
      i,
      a,
      r,
    ),
    yield);
}
function $we(e, t, n, r, i, a, o) {
  let s = Math.hypot(r - t, i - n);
  s < 0.5 ||
    (e.push().col(9078138).mat(0.9, 0, 0, 0),
    e.quad(t, a, n, r, o, i, r, o + 0.4, i, t, a + 0.4, n),
    e.quad(r, o, i, t, a, n, t, a + 0.4, n, r, o + 0.4, i),
    e.col(3029552).mat(0.7, 0.3, 0, 0),
    e.quad(t, a + 0.4, n, r, o + 0.4, i, r, o + 1.8, i, t, a + 1.8, n),
    e.quad(r, o + 0.4, i, t, a + 0.4, n, t, a + 1.8, n, r, o + 1.8, i),
    e.pop(),
    e.solidRot(
      (t + r) / 2,
      (n + i) / 2,
      s / 2,
      0.2,
      Math.atan2(i - n, r - t),
      Math.min(a, o),
      Math.max(a, o) + 1.9,
      `fence`,
    ));
}
function eTe(e, t) {
  let n = FH(t),
    r = (t, r, i, a, o = []) => {
      let s = Math.hypot(i - t, a - r),
        c = (i - t) / s,
        l = (a - r) / s,
        u = Math.max(1, Math.round(s / 8));
      for (let i = 0; i < u; i++) {
        let a = (s * i) / u,
          d = (s * (i + 1)) / u;
        if (o.some(([e, t]) => d > e && a < t)) continue;
        let f = t + c * a,
          p = r + l * a,
          m = t + c * d,
          h = r + l * d;
        $we(e, f, p, m, h, n(f, p), n(m, h));
      }
    },
    i = 0.8;
  (r(tH.x0 + i, tH.z0 + i, tH.x0 + i, 1007),
    r(tH.x0 + i, tH.z0 + i, -2008, tH.z0 + i, [
      [oH.x - sH / 2 - (tH.x0 + i), oH.x + sH / 2 - (tH.x0 + i)],
    ]),
    r(tH.x0 + i, 1007, -1925, 1007));
}
