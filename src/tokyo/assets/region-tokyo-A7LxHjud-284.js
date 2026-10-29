// tokyo/assets/region-tokyo-A7LxHjud 284 — math
// Lines 104805-105047 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function JH(e, t, n, r, i, a, o, s) {
  let c = [aH, lH, fH, xH],
    l = [oH, cH, uH, 6].map((e) => e / 2),
    u = (e, t) => {
      for (let n = 0; n < c.length; n++)
        if (n !== i && kH(e, t, c[n]) < l[n] + 1.2) return !0;
      if (
        OH(
          e,
          t,
          { x0: pH.x0 - 6, z0: gH.z0 - 6, x1: pH.x1 + 6, z1: pH.z1 + 6 },
          0.5,
        ) ||
        OH(e, t, { x0: bH.x - 7, z0: bH.z - 7, x1: dH, z1: bH.z + 7 }, 0)
      )
        return !0;
      let n = (e - SH.ax) * AH.ux + (t - SH.az) * AH.uz,
        r = (e - SH.ax) * AH.nx + (t - SH.az) * AH.nz;
      return (
        (n > jH - MH / 2 - 2 && n < 39 && Math.abs(r) < 13) ||
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
      lTe(e, b, x, S, C, w, T);
      let E = Math.sign(r);
      if (
        (uTe(
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
        let r = HV(a * 3 + t * 17 + n),
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
        dTe(e, t, n, s(t, n));
      }
    }
    d += m;
  }
}
function* fTe(e, t) {
  let n = t.c(`gravel`),
    r = IH(t);
  (KH(e, aH, oH, zV.PATH, EH, n, r),
    KH(e, fH, uH, zV.PATH + 0.01, EH, n, r),
    KH(e, lH, cH, zV.PATH - 0.01, EH, n, r),
    KH(e, xH, 6, zV.PATH - 0.02, EH, n, r),
    yield,
    JH(e, t, aH, 7.9, 0, 5300, 34, r),
    JH(e, t, aH, -7.9, 0, 5400, 34, r),
    yield,
    JH(e, t, fH, 6.4, 2, 5500, 34, r),
    JH(e, t, fH, -6.4, 2, 5600, 34, r),
    JH(e, t, lH, 5.4, 1, 5700, 0, r),
    JH(e, t, lH, -5.4, 1, 5800, 0, r),
    yield);
  let i = t.season,
    a = [`ever`, `ever`, `ever`, `keyaki`, `ever`];
  for (let t = 0; t + 1 < aH.length; t++) {
    let [n, o] = aH[t],
      [s, c] = aH[t + 1],
      l = Math.hypot(s - n, c - o),
      u = -(c - o) / l,
      d = (s - n) / l;
    (qH(
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
      qH(
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
  (qH(e, sH.x, sH.z - uH / 2 - 4, -2124, sH.z - uH / 2 - 4, 26, 5141, i, a, r),
    qH(
      e,
      sH.x - 6,
      sH.z + uH / 2 + 4,
      -2140,
      sH.z + uH / 2 + 4,
      26,
      5142,
      i,
      a,
      r,
    ),
    qH(e, -2122.5, sH.z - 8, -2122.5, pH.z1 + 10, 26, 5143, i, a, r),
    qH(
      e,
      dH - uH / 2 - 4,
      sH.z - 8,
      dH - uH / 2 - 4,
      pH.z1 + 10,
      26,
      5144,
      i,
      a,
      r,
    ),
    qH(
      e,
      sH.x - cH / 2 - 4,
      sH.z - 10,
      sH.x - cH / 2 - 4,
      nH.z0 + 30,
      28,
      5145,
      i,
      a,
      r,
    ),
    qH(
      e,
      sH.x + cH / 2 + 4,
      sH.z - 10,
      sH.x + cH / 2 + 4,
      nH.z0 + 30,
      28,
      5146,
      i,
      a,
      r,
    ),
    yield);
}
function pTe(e, t, n, r, i, a, o) {
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
function mTe(e, t) {
  let n = IH(t),
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
        pTe(e, f, p, m, h, n(f, p), n(m, h));
      }
    },
    i = 0.8;
  (r(nH.x0 + i, nH.z0 + i, nH.x0 + i, 1007),
    r(nH.x0 + i, nH.z0 + i, -2008, nH.z0 + i, [
      [sH.x - cH / 2 - (nH.x0 + i), sH.x + cH / 2 - (nH.x0 + i)],
    ]),
    r(nH.x0 + i, 1007, -1925, 1007));
}
