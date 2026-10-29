// tokyo/assets/region-tokyo-A7LxHjud 277 — math
// Lines 102628-102974 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function PV(e, t, n, r, i, a, o, s) {
  let c = Math.hypot(i - n, a - r),
    l = (i - n) / c,
    u = (a - r) / c,
    d = Math.max(1, Math.round(c / s)),
    f = c / d,
    p = (e, t) => [n + l * e + o[0] * t, r + u * e + o[1] * t],
    m = 14470062;
  (e.push().col(m).mat(0.85, 0, 0.05, 0),
    e.wall(n, r, i, a, 6, 33.4, t.c(`plaster`), 4, 4),
    e.pop());
  let h = t.c(`glass`);
  for (let t = 0; t < d; t++) {
    let n = t * f,
      r = (t + 1) * f,
      i = 1.1,
      a = n + i / 2 + 0.25,
      o = r - i / 2 - 0.25;
    if (e.coarse) {
      let [t, n] = p(a, 0.03),
        [r, i] = p(o, 0.03);
      (e
        .push()
        .col(12106944)
        .mat(0.3, 0.3, 0.12, G | 32),
        e.wall(t, n, r, i, 6, jV, h, o - a, 4.2),
        e.pop());
    } else
      for (let t = 0; t < 6; t++) {
        let n = 6 + t * 4.2,
          [r, i] = p(a, 0.03),
          [s, c] = p(o, 0.03);
        if (
          (e
            .push()
            .col(16777215)
            .mat(0.25, 0.3, 0.14, G | 32),
          e.panel(r, i, s, c, n + 1, n + 4, h),
          e.col(5917242).mat(0.45, 0.6, 0, 0),
          e.panel(r, i, s, c, n, n + 1),
          t < 5)
        ) {
          let [t, r] = p((a + o) / 2, 0.05),
            [i, s] = p(a + 0.3, 0.05),
            [c, l] = p(o - 0.3, 0.05);
          (e.col(10125400).mat(0.4, 0.7, 0, 0),
            e.quad(
              i,
              n + 0.85,
              s,
              c,
              n + 0.85,
              l,
              t,
              n + 0.2,
              r,
              t,
              n + 0.2,
              r,
            ));
        }
        e.pop();
      }
  }
  for (let t = 0; t <= d; t++) {
    let n = t * f,
      [r, i] = p(Math.min(c - 0.55, Math.max(0.55, n)), 0.18);
    (e.push().col(m, 1.04).mat(0.8, 0, 0.08, 1),
      KB(e, r, i, o, 1.1, 0.36, 6, 31.8),
      e.coarse ||
        (KB(e, r + o[0] * 0.05, i + o[1] * 0.05, o, 0.9, 0.46, 31.8, 32.9),
        KB(e, r + o[0] * 0.08, i + o[1] * 0.08, o, 0.6, 0.52, 32.9, 33.9),
        KB(e, r + o[0] * 0.1, i + o[1] * 0.1, o, 0.3, 0.56, 33.9, 35.1)),
      e.pop());
  }
  let [g, _] = p(0, 0.12),
    [v, y] = p(c, 0.12);
  if (
    (e.push().col(15128764).mat(0.8, 0, 0.06, 1),
    e.panel(g, _, v, y, jV, 31.7),
    e.quad(
      g,
      jV,
      _,
      v,
      jV,
      y,
      v - o[0] * 0.12,
      jV,
      y - o[1] * 0.12,
      g - o[0] * 0.12,
      jV,
      _ - o[1] * 0.12,
    ),
    !e.coarse)
  ) {
    e.col(13218958).mat(0.8, 0, 0, 0);
    let t = Math.round(c / 1.2);
    for (let n = 0; n < t; n++) {
      let r = (n / t) * c,
        i = ((n + 0.5) / t) * c,
        a = ((n + 1) / t) * c,
        [o, s] = p(r, 0.06),
        [l, u] = p(i, 0.06),
        [d, f] = p(a, 0.06);
      (e.quad(o, 31.9, s, l, 31.9, u, l, 33.1, u, o, 31.9, s),
        e.quad(l, 33.1, u, l, 31.9, u, d, 31.9, f, d, 31.9, f));
    }
  }
  e.pop();
}
function* Hwe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = AV;
  (e.push().col(16774884).mat(0.3, 0.1, 0.3, G),
    e.wall(n, a, r, a, -0.3, 5.2, t.c(`wakoShow`), 4, 5.5),
    e.wall(r, a, r, i, -0.3, 5.2, t.c(`wakoShow`), 4, 5.5),
    e.col(14076076).mat(0.85, 0, 0, 0),
    e.wall(r, i, n, i, -0.3, 6, t.c(`plaster`), 4, 6),
    e.wall(n, i, n, a, -0.3, 6, t.c(`plaster`), 4, 6),
    e.col(4865070).mat(0.45, 0.6, 0, 0),
    e.wall(n, a, r, a, 5.2, 6, e.white, 4, 1),
    e.wall(r, a, r, i, 5.2, 6, e.white, 4, 1));
  for (let [t, n, i, o] of [
    [0, a, zB, 9],
    [r, 12, BB, 7],
    [-14, a, zB, 6],
  ]) {
    (e.col(4076584).mat(0.4, 0.7, 0, 0),
      KB(e, t + i[0] * 1.1, n + i[1] * 1.1, i, o, 2.2, 4.4, 4.75),
      e.col(16773328).mat(0.4, 0, 0.32, 1));
    let r = HB(i),
      a = t - r[0] * (o / 2 - 0.1) + i[0] * 0.1,
      s = n - r[1] * (o / 2 - 0.1) + i[1] * 0.1,
      c = t + r[0] * (o / 2 - 0.1) + i[0] * 2.1,
      l = n + r[1] * (o / 2 - 0.1) + i[1] * 2.1;
    e.flat(
      Math.min(a, c),
      Math.min(s, l),
      Math.max(a, c),
      Math.max(s, l),
      4.38,
      e.white,
      0,
      0,
      !1,
    );
  }
  if (
    (e.pop(),
    e.solid(n, i, r, a, 0, NV),
    yield,
    PV(e, t, n, a, r, a, zB, 4),
    yield,
    PV(e, t, r, a, r, i, BB, 4),
    yield,
    e
      .push()
      .col(13615784)
      .mat(0.85, 0, 0.04, G | 32),
    e.wall(r, i, n, i, 6, 33.4, t.c(`office`), 4, 4.2),
    e.wall(n, i, n, a, 6, 33.4, t.c(`office`), 4, 4.2),
    e.pop(),
    e.push().col(9407106).mat(0.9, 0, 0, 0),
    e.flat(n, i, r, a, 33.4),
    e.col(14207920).mat(0.85, 0, 0.05, G | 32),
    Oj(e, n + 5, i + 4, r - 5, a - 6, 33.4, NV, t.c(`office`), 4, 4.2, 9078140),
    e.pop(),
    !e.coarse)
  ) {
    (GB(e, 0, 39.2, a - 6, zB, 18, 4.4, 0.6, 16184558, `伊勢丹`, 1447446, {
      serif: !0,
      px: 26,
      lit: 0.45,
      weight: 700,
    }),
      GB(e, r - 5, 39.2, 0, BB, 14, 3.6, 0.6, 16184558, `伊勢丹`, 1447446, {
        serif: !0,
        px: 26,
        lit: 0.45,
        weight: 700,
      }),
      JB(e, r, a - 1, BB, 8, 13, 1.4, 16184558, `伊勢丹 新宿店`, 1447446, {
        lit: 0.5,
        px: 18,
      }));
    for (let t = 0; t < 4; t++) {
      let n = -18 + t * 12;
      (e.push().col(3815994).mat(0.5, 0.6, 0, 0),
        e.rod(n, 9, a + 0.5, n, 9, a + 2.4, 0.05, 4),
        e.col(t % 2 ? 2050618 : 9051174).mat(0.9, 0, 0, 0),
        e.panel(n - 0.04, a + 0.6, n - 0.04, a + 2.2, 6, 9),
        e.panel(n + 0.04, a + 2.2, n + 0.04, a + 0.6, 6, 9),
        e.pop());
    }
  }
}
function Uwe(e, t) {
  (e.col(14076074).mat(0.85, 0, 0.05, G | 32),
    Oj(e, AV.x0, AV.z0, AV.x1, AV.z1, 0, MV, t.c(`office`), 8, 8.4, 9407106),
    Oj(
      e,
      AV.x0 + 5,
      AV.z0 + 4,
      AV.x1 - 5,
      AV.z1 - 6,
      MV,
      NV,
      t.c(`office`),
      8,
      8.4,
      9078140,
    ));
}
var Wwe = {
    id: `isetan`,
    site: Vwe(AV.x, AV.z),
    name: { ja: `伊豆丹 新宿店`, zh: `伊豆丹 新宿店`, en: `Izutan Shinjuku` },
    near: 230,
    build: Hwe,
    far: Uwe,
    bounds: () => [AV.x + AV.x0, AV.z + AV.z0, AV.x + AV.x1, AV.z + AV.z1],
    farBoxes: (e, t) => [
      {
        x0: AV.x + AV.x0,
        x1: AV.x + AV.x1,
        z0: AV.z + AV.z0,
        z1: AV.z + AV.z1,
        y0: t.gy,
        y1: t.gy + MV,
        rgb: [0.68, 0.62, 0.5],
        lit: !0,
      },
    ],
    anchors: [
      {
        key: `izutan`,
        lx: 18,
        lz: 38,
        turn: -0.5,
        name: { zh: `伊豆丹 新宿店`, en: `Izutan Shinjuku` },
      },
    ],
    blip: !0,
  },
  FV = { x: -2077.5, z: 187, x0: -15, x1: 15, z0: -20.5, z1: 20.5, h: 38 };
(FV.x, FV.z);
var IV = { x: -2115.5, z: 247.5, x0: -8.5, x1: 8.2, z0: -73, z1: 73, h: 36 },
  LV = { z0: -30, z1: -15, d: 4 };
(IV.x, IV.z, (LV.z0 + LV.z1) / 2);
var RV = { x: -2184, z: 188.5, hz: 21.5 };
(RV.x, RV.z, -RV.hz - 6);
var Gwe = [Wwe],
  zV = {
    LAWN: 0.02,
    FLOOR: 0.04,
    PATH: 0.06,
    PAVE: 0.08,
    WATER: 0.1,
    MARK: 0.12,
  };
function BV(e, t, n = 0) {
  let r =
    Math.imul(
      (e | 0) * 374761393 + (t | 0) * 668265263 + n * 2246822519,
      1274126177,
    ) >>> 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1103515245) >>> 0),
    ((r ^ (r >>> 16)) >>> 0) / 4294967296
  );
}
function VV(e, t, n, r) {
  let i = e / n,
    a = t / n,
    o = Math.floor(i),
    s = Math.floor(a),
    c = i - o,
    l = a - s,
    u = c * c * (3 - 2 * c),
    d = l * l * (3 - 2 * l),
    f = BV(o, s, r),
    p = BV(o + 1, s, r),
    m = BV(o, s + 1, r),
    h = BV(o + 1, s + 1, r);
  return f + (p - f) * u + (m - f) * d + (f - p - m + h) * u * d;
}
function HV(e) {
  let t = e >>> 0 || 1;
  return {
    next() {
      t = (t + 1831565813) >>> 0;
      let e = t;
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    },
    range(e, t) {
      return e + (t - e) * this.next();
    },
  };
}
function UV(e, t, n, r, i, a, o = 1, s = 0) {
  let c = r.length,
    l = r[0][1],
    u = r[c - 1][1],
    d = (l + u) / 2,
    f = Math.max(...r.map((e) => e[0])) || 1,
    p = [],
    m = e.white;
  for (let h = 0; h < c; h++) {
    let [c, g] = r[h],
      _ = (g - l) / (u - l || 1);
    e.col(a, o * (0.66 + 0.48 * _));
    let v = (g - d) / ((u - l) / 2 || 1);
    if (c < 0.001) {
      p.push(e.v(t, g, n, 0, Math.sign(v) || 1, 0, m.u0, m.v0));
      continue;
    }
    let y = c / f,
      b = v * 0.8,
      x = Math.hypot(y, b) || 1;
    p.push(e.w.n);
    for (let r = 0; r < i; r++) {
      let a = s + (r / i) * Math.PI * 2,
        o = Math.cos(a),
        l = Math.sin(a);
      e.v(t + o * c, g, n + l * c, (o * y) / x, b / x, (l * y) / x, m.u0, m.v0);
    }
  }
  let h = (e) => r[e][0] >= 0.001;
  for (let t = 0; t + 1 < c; t++) {
    let n = p[t],
      r = p[t + 1],
      a = h(t),
      o = h(t + 1);
    for (let t = 0; t < i; t++) {
      let s = (t + 1) % i;
      a && o
        ? (e.tri(n + t, r + t, n + s), e.tri(n + s, r + t, r + s))
        : a && !o
          ? e.tri(n + t, r, n + s)
          : !a && o && e.tri(n, r + t, r + s);
    }
  }
}
