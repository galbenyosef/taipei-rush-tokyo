// tokyo/assets/region-tokyo-55J_WESF 272 — col
// Lines 100940-101261 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function mV(e, t, n, r, i) {
  let a = YB(i),
    o = 0;
  for (let [s, c, l] of fV(t)) {
    let t = Math.hypot(c[0] - s[0], c[1] - s[1]),
      u = (c[0] - s[0]) / t,
      d = (c[1] - s[1]) / t,
      f = 0.04,
      p = (e, t) => [s[0] + u * e + l[0] * f, t, s[1] + d * e + l[1] * f],
      m = (t, n, r, i) =>
        e.quad(
          t[0],
          t[1],
          t[2],
          n[0],
          n[1],
          n[2],
          r[0],
          r[1],
          r[2],
          i[0],
          i[1],
          i[2],
        );
    m(p(0, n), p(t, n), p(t, n + 1.6), p(0, n + 1.6));
    let h = Math.max(4, Math.round(t / (e.coarse ? 3.2 : 1.45))),
      g = i + o++ * 3.1;
    for (let i = 0; i < h; i++) {
      let o = (i + 0.5) / h,
        s = r * pV(o, g) * a.range(0.8, 1.05),
        c = t * o,
        l = (o - 0.5) * s * 0.32,
        u = (t / h) * 1.35,
        d = c + l,
        f = 0.12,
        _ = (e) => Math.min(t, Math.max(0, e)),
        v = n + 1.6 + s * 0.45,
        y = c + l * 0.35;
      if (
        (m(
          p(_(c - u / 2), n + 1.6),
          p(_(c + u / 2), n + 1.6),
          p(_(y + u * 0.22), v),
          p(_(y - u * 0.22), v),
        ),
        m(
          p(_(y - u * 0.22), v),
          p(_(y + u * 0.22), v),
          p(_(d + f), n + 1.6 + s),
          p(_(d - f), n + 1.6 + s),
        ),
        !e.coarse)
      )
        for (let e = 1; e <= 2; e++) {
          let r = n + 1.6 + s + e * 1.4 + a.range(0, 0.6),
            i = _(d + l * 0.12 * e + a.range(-0.3, 0.3)),
            o = 0.32 - e * 0.07;
          i <= o ||
            i >= t - o ||
            m(p(i, r - o), p(i + o, r), p(i, r + o), p(i - o, r));
        }
    }
  }
}
function swe(e, t, n, r, i, a) {
  let o = YB(a),
    s = 0,
    c = 0;
  for (let [l, u, d] of fV(t)) {
    let t = Math.hypot(u[0] - l[0], u[1] - l[1]),
      f = (u[0] - l[0]) / t,
      p = (u[1] - l[1]) / t,
      m = e.coarse ? 2.6 : 1.1,
      h = Math.max(3, Math.round(t / m)),
      g = a + s++ * 3.1;
    for (let a = 0; a <= h; a++) {
      let s = a / h,
        u = Math.min(1, (pV(s, g) - 0.12) / 0.88),
        m = r - n + (i - r) * u * (a % 2 ? 0.8 : 1) * o.range(0.92, 1),
        _ = t * s;
      (GB(
        e,
        l[0] + f * _ + d[0] * 0.55,
        l[1] + p * _ + d[1] * 0.55,
        d,
        0.14,
        1,
        n,
        n + m,
      ),
        (c = Math.max(c, n + m)));
    }
  }
  return c;
}
function cwe(e, t, n, r, i, a, o, s, c, l = 12, u = 7) {
  let d = VB(i),
    f = YB(s),
    p = e.coarse ? Math.ceil(l / 3) : l,
    m = e.coarse ? Math.ceil(u / 3) : u,
    h = f.range(0, 6);
  e.push();
  for (let i = 0; i < m; i++)
    for (let s = 0; s < p; s++) {
      let l = s / p - 0.5,
        u = (s + 1) / p - 0.5,
        g = s / p,
        _ = i / m,
        v = Math.exp(-(((_ - 0.5 - 0.28 * Math.sin(g * 5 + h)) * 4.5) ** 2)),
        y = Math.min(0.999, Math.max(0, _ * 0.8 + g * 0.2)) * (c.length - 2),
        b = Math.floor(y),
        x = y - b,
        S = (e, t, n) => {
          let r = (r) =>
            Math.round(((e >> r) & 255) * (1 - n) + ((t >> r) & 255) * n);
          return (r(16) << 16) | (r(8) << 8) | r(0);
        },
        C = S(S(c[b], c[b + 1], x), c[c.length - 1], v * 0.85);
      (e.col(C, 0.95 + f.range(0, 0.08)).mat(0.4, 0, 0.3, 0),
        e.panel(
          t + d[0] * a * l,
          r + d[1] * a * l,
          t + d[0] * a * u,
          r + d[1] * a * u,
          n + (o * i) / m,
          n + (o * (i + 1)) / m,
        ));
    }
  e.pop();
}
function* lwe(e, t) {
  let n = t.c(`glass`),
    r = t.c(`doors`),
    i = e.coarse ? 3 : 1;
  (e.col(16777215).mat(0.3, 0.2, 0.3, G),
    e.wall(sV.x0 + 3, sV.z1, sV.x1 - 3, sV.z1, -0.3, 6.5, r, 2.4 * i, 6.8),
    e.col(15330799).mat(0.5, 0.2, 0, 0),
    e.wall(sV.x0, sV.z1, sV.x0 + 3, sV.z1, -0.3, 6.5, e.white, 3, 6.8),
    e.wall(sV.x1 - 3, sV.z1, sV.x1, sV.z1, -0.3, 6.5, e.white, 3, 6.8),
    e.wall(sV.x1, sV.z1, sV.x1, sV.z0, -0.3, 6.5, n, 3.2 * i, 6.8),
    e.wall(sV.x1, sV.z0, sV.x0, sV.z0, -0.3, 6.5, e.white, 4, 6.8),
    e.wall(sV.x0, sV.z0, sV.x0, sV.z1, -0.3, 6.5, n, 3.2 * i, 6.8),
    e.col(15922420).mat(0.4, 0.3, 0.15, 1),
    e.box(sV.x0 + 2, 6.5, sV.z1, sV.x1 - 2, 7.1, sV.z1 + 3.2),
    e.col(16773848).mat(0.4, 0, 0.55, 1),
    e.flat(
      sV.x0 + 2.2,
      sV.z1 + 0.1,
      sV.x1 - 2.2,
      sV.z1 + 3,
      6.48,
      e.white,
      0,
      0,
      !1,
    ),
    e.col(14477036).mat(0.22, 0.35, 0.1, G | 32),
    Ej(e, sV.x0, sV.z0, sV.x1, sV.z1, 7.1, sV.h, n, 3.2 * i, 4.6),
    e.col(15988214).mat(0.45, 0.3, 0.06, 1),
    Dj(e, dV(sV), 7.1, sV.h, e.coarse ? 6.4 : 2.4, 0.45, 0.25),
    cwe(
      e,
      7.5,
      12,
      sV.z1 + 0.62,
      RB,
      15,
      9,
      7,
      [5925600, 15227560, 16754784, 5296372, 16777215],
      14,
      8,
    ),
    e.col(2763824).mat(0.6, 0.3, 0, 0),
    e.box(-0.3, 11.5, sV.z1 + 0.45, 15.3, 21.5, sV.z1 + 0.58),
    e.solid(sV.x0, sV.z0, sV.x1, sV.z1, 0, sV.h),
    e.col(14210252).mat(0.8, 0, 0, 0),
    e.flat(
      sV.x0,
      sV.z1,
      sV.x1,
      21.5,
      0.04,
      t.c(`paving`),
      e.coarse ? 12 : 4,
      e.coarse ? 12 : 4,
    ),
    yield,
    e.col(14936814).mat(0.2, 0.35, 0.09, G | 32),
    Ej(e, cV.x0, cV.z0, cV.x1, cV.z1, sV.h, cV.h, n, 3.2 * i, 4.2 * i),
    e.col(15988214).mat(0.45, 0.3, 0.05, 1),
    Dj(e, dV(cV), sV.h, cV.h, e.coarse ? 6 : 2, 0.4, 0.22),
    e.col(10133410).mat(0.85, 0, 0, 0),
    e.flat(sV.x0, sV.z0, sV.x1, cV.z0, sV.h),
    e.flat(sV.x0, cV.z1, sV.x1, sV.z1, sV.h),
    e.flat(sV.x0, cV.z0, cV.x0, cV.z1, sV.h),
    e.flat(cV.x1, cV.z0, sV.x1, cV.z1, sV.h),
    yield,
    e.col(15265521).mat(0.18, 0.4, 0.08, G | 32),
    Ej(e, lV.x0, lV.z0, lV.x1, lV.z1, cV.h, lV.h, n, 3.2 * i, 3.6 * i),
    e.col(15988214).mat(0.45, 0.3, 0.05, 1),
    Dj(e, dV(lV), cV.h, lV.h, e.coarse ? 6 : 2, 0.4, 0.2),
    e.col(10133410).mat(0.85, 0, 0, 0),
    e.flat(cV.x0, cV.z0, cV.x1, lV.z0, cV.h),
    e.flat(cV.x0, lV.z1, cV.x1, cV.z1, cV.h),
    e.flat(cV.x0, lV.z0, lV.x0, lV.z1, cV.h),
    e.flat(lV.x1, lV.z0, cV.x1, lV.z1, cV.h),
    e.flat(lV.x0, lV.z0, lV.x1, lV.z1, lV.h),
    e.solid(cV.x0, cV.z0, cV.x1, cV.z1, sV.h, cV.h),
    e.solid(lV.x0, lV.z0, lV.x1, lV.z1, cV.h, lV.h),
    yield,
    e.col(16185594).mat(0.3, 0.2, 0.3, 1),
    mV(e, cV, cV.h - 26, 22, 4101),
    yield,
    mV(e, lV, lV.h - 34, 30, 4202),
    e.col(15331057).mat(0.35, 0.3, 0.1, 1));
  let a = {
    x0: lV.x0 + 0.2,
    x1: lV.x1 - 0.2,
    z0: lV.z0 + 0.2,
    z1: lV.z1 - 0.2,
  };
  for (let [t, n] of fV(a))
    (e.panel(t[0], t[1], n[0], n[1], lV.h, lV.h + 5),
      e.panel(n[0], n[1], t[0], t[1], lV.h, lV.h + 5));
  (e.col(16317179).mat(0.3, 0.3, 0.34, 1),
    swe(e, lV, lV.h - 30, lV.h + 4, uV, 4303),
    Wk(e, 0, lV.h + 5, 0, 0.6),
    Wk(e, lV.x0 + 0.5, uV, (lV.z0 + lV.z1) / 2, 0.4),
    Wk(e, lV.x1 - 0.5, 223, (lV.z0 + lV.z1) / 2, 0.4));
}
function uwe(e, t) {
  let n = t.c(`glass`);
  (e.col(14673642).mat(0.25, 0.3, 0.1, G | 32),
    Ej(e, sV.x0, sV.z0, sV.x1, sV.z1, 0, sV.h, n, 12, 15, 11580856),
    Ej(e, cV.x0, cV.z0, cV.x1, cV.z1, sV.h, cV.h, n, 12, 17),
    Ej(e, lV.x0, lV.z0, lV.x1, lV.z1, cV.h, lV.h, n, 12, 16),
    e.col(16054008).mat(0.3, 0.3, 0.3, 1),
    zk(
      e,
      dV({
        x0: lV.x0 - 0.8,
        x1: lV.x1 + 0.8,
        z0: lV.z0 - 0.8,
        z1: lV.z1 + 0.8,
      }),
      lV.h - 14,
      221,
      e.white,
      30,
      30,
    ),
    zk(
      e,
      dV({
        x0: cV.x0 - 1.2,
        x1: cV.x1 + 1.2,
        z0: cV.z0 - 1.2,
        z1: cV.z1 + 1.2,
      }),
      cV.h - 14,
      cV.h + 2,
      e.white,
      30,
      30,
    ),
    e.col(10133668),
    Vk(e, dV(lV), lV.h));
}
var dwe = {
    id: `kabukicho-tower`,
    site: aV(oV.x, oV.z),
    name: { ja: `歌舞伎町タワー`, zh: `歌舞伎町塔`, en: `Kabukicho Tower` },
    near: 260,
    build: lwe,
    far: uwe,
    bounds: () => [oV.x + sV.x0, oV.z + sV.z0, oV.x + sV.x1, oV.z + sV.z1],
    farBoxes: (e, t) => [
      {
        x0: oV.x + sV.x0,
        x1: oV.x + sV.x1,
        z0: oV.z + sV.z0,
        z1: oV.z + sV.z1,
        y0: t.gy,
        y1: t.gy + sV.h,
        rgb: [0.72, 0.76, 0.79],
        lit: !0,
      },
      {
        x0: oV.x + cV.x0,
        x1: oV.x + cV.x1,
        z0: oV.z + cV.z0,
        z1: oV.z + cV.z1,
        y0: t.gy + sV.h,
        y1: t.gy + cV.h,
        rgb: [0.74, 0.78, 0.8],
        lit: !0,
      },
      {
        x0: oV.x + lV.x0,
        x1: oV.x + lV.x1,
        z0: oV.z + lV.z0,
        z1: oV.z + lV.z1,
        y0: t.gy + cV.h,
        y1: t.gy + uV - 4,
        rgb: [0.8, 0.83, 0.85],
        lit: !0,
        glow: 0.15,
      },
    ],
    anchors: [
      {
        key: `kabukicho-tower`,
        lx: 0,
        lz: 40,
        turn: 0,
        name: { zh: `歌舞伎町塔`, en: `Kabukicho Tower` },
      },
    ],
    blip: !0,
  },
  hV = { x: -2083.5, z: 44, x0: -21.5, x1: 21.5, z0: -22, z1: 22 };
