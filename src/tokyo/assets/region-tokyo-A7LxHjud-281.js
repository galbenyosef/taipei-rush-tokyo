// tokyo/assets/region-tokyo-A7LxHjud 281 — quad
// Lines 103849-104169 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var tTe = {
  id: `meiji-jingu-forest`,
  lot: `meiji-jingu`,
  site: LH,
  name: { ja: `明治神宮の森`, zh: `明治神宮之森`, en: `Meiji Jingu Forest` },
  near: 260,
  *build(e, t) {
    let n = e.sub(-iH.x, 0, -iH.z, 0);
    (yield* eTe(e, t, e.coarse ? 15 : 10), e.leave(n));
  },
  far(e, t) {
    let n = e.sub(-iH.x, 0, -iH.z, 0);
    (KV(e, {
      x0: rH.x0,
      z0: rH.z0,
      x1: rH.x1,
      z1: rH.z1,
      step: 22,
      inside: (e, t) =>
        PH(e, t, 2.5) &&
        !OH(e, t, {
          x0: pH.x0 - 6,
          z0: gH.z0 - 6,
          x1: pH.x1 + 6,
          z1: pH.z1 + 6,
        }),
      height: FH,
      dark: 2902568,
      light: 5405240,
      salt: 31,
      lump: 4,
      jitter: 2,
      ground: IH(t),
    }),
      e.leave(n));
  },
  bounds: () => [rH.x0, rH.z0, rH.x1, rH.z1],
  farBoxes: () => [
    {
      x0: nH.x0 + 3,
      x1: nH.x1,
      z0: nH.z0 + 3,
      z1: pH.z0 - 8,
      y0: 0.15,
      y1: 30,
      rgb: [0.05, 0.1, 0.045],
    },
    {
      x0: nH.x0 + 3,
      x1: nH.x1,
      z0: pH.z1 + 8,
      z1: nH.z1 - 3,
      y0: 0.15,
      y1: 31,
      rgb: [0.05, 0.1, 0.045],
    },
    {
      x0: nH.x1,
      x1: -1930,
      z0: 700,
      z1: 960,
      y0: 0.15,
      y1: 29,
      rgb: [0.05, 0.1, 0.045],
    },
  ],
};
function LH(e) {
  return { x: iH.x, z: iH.z, gy: e.groundHeight(iH.x, iH.z), facing: 0 };
}
function RH(e, t, n, r, i, a, o, s = !0) {
  let c = o / 2;
  (s &&
    (e.quad(t, n, -c, t, n, c, t, n + a, c, t, n + a, -c),
    e.quad(r, i, c, r, i, -c, r, i + a, -c, r, i + a, c)),
    e.quad(r, i, -c, t, n, -c, t, n + a, -c, r, i + a, -c),
    e.quad(t, n, c, r, i, c, r, i + a, c, t, n + a, c),
    e.quad(t, n + a, c, r, i + a, c, r, i + a, -c, t, n + a, -c),
    e.quad(t, n, -c, r, i, -c, r, i, c, t, n, c));
}
function zH(e, t, n, r, i, a, o, s) {
  let c = e.sub(t, 0, n, r),
    l = i * 0.066,
    u = i / 2,
    d = a * 0.66,
    f = a * 0.83;
  e.push().col(s).mat(0.85, 0, 0.02, 1);
  for (let t of [-1, 1])
    (e.rod(
      t * u,
      0,
      0,
      t * (u - a * 0.02),
      f,
      0,
      l,
      e.coarse ? 6 : 12,
      l * 0.94,
    ),
      e.pole(t * u, 0, l + 0.05, 0, f),
      e.coarse ||
        e
          .push()
          .col(DH)
          .mat(0.9, 0, 0, 0)
          .cylY(t * u, 0, -0.1, 0.35, l * 1.35, 10)
          .pop());
  let p = l * 1.05,
    m = l * 0.75,
    h = u + l * 2.6;
  (RH(e, -h, d - p / 2, h, d - p / 2, p, m),
    e.box(-l * 0.55, d + p / 2, -l * 0.4, l * 0.55, f, l * 0.4));
  let g = e.coarse ? 4 : 10,
    _ = l * 4.6,
    v = (e) => a * 0.035 * Math.abs(e) ** 2.4,
    y = l * 1,
    b = l * 1.25;
  for (let t = 0; t < g; t++) {
    let n = -1 + (2 * t) / g,
      r = -1 + (2 * (t + 1)) / g,
      i = n * (u + _),
      a = r * (u + _);
    (RH(e, i, f + v(n), a, f + v(r), y, l * 1.3, t === 0 || t === g - 1),
      e.col(s, 0.9),
      RH(
        e,
        i * 1.06,
        f + y + v(n) * 1.35,
        a * 1.06,
        f + y + v(r) * 1.35,
        b,
        l * 1.55,
        t === 0 || t === g - 1,
      ),
      e.col(s));
  }
  if (o && !e.coarse) {
    e.col(Qwe).mat(0.35, 0.8, 0.1, 1);
    for (let t of [-1, 1])
      for (let n of [-u * 0.62, 0, u * 0.62]) {
        let r = f + y / 2 + v(n / (u + _)),
          i = t * (l * 0.65 + 0.03);
        e.push();
        let a = e.sub(n, r, i, t > 0 ? Math.PI : 0);
        (GH(e, y * 0.36, 16), e.leave(a), e.pop());
      }
  }
  (e.pop(), e.leave(c));
}
function nTe(e, t, n, r, i, a) {
  (n[0] - t[0]) * (r[2] - t[2]) - (n[2] - t[2]) * (r[0] - t[0]) > 0
    ? e.quad(
        t[0],
        t[1],
        t[2],
        i[0],
        i[1],
        i[2],
        r[0],
        r[1],
        r[2],
        n[0],
        n[1],
        n[2],
        a,
      )
    : e.quad(
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
        a,
      );
}
function BH(e, t, n) {
  let r = t.c(`copper`),
    i = 1.45,
    a = 0.4,
    o = e.coarse ? 3 : 7,
    s = Math.max(2, Math.round((2 * n.L) / (e.coarse ? 8 : 3))),
    c = 0.35,
    l = (e) =>
      e <= n.zr
        ? n.yf + (n.yr - n.yf) * ((e - n.zf) / (n.zr - n.zf)) ** i
        : n.yb + (n.yr - n.yb) * ((n.zb - e) / (n.zb - n.zr)) ** i,
    u = (e, t, r) => [
      (e * 2 - 1) * n.L,
      l(t) + c * Math.abs(e * 2 - 1) ** 3 * (1 - r) ** 1.5,
      t,
    ];
  e.push().col(7109749).mat(0.6, 0.25, 0, 0);
  for (let [t, i] of [
    [n.zf, n.zr],
    [n.zb, n.zr],
  ])
    for (let n = 0; n < o; n++)
      for (let a = 0; a < s; a++) {
        let c = n / o,
          l = (n + 1) / o,
          d = t + (i - t) * c,
          f = t + (i - t) * l;
        nTe(
          e,
          u(a / s, d, c),
          u((a + 1) / s, d, c),
          u((a + 1) / s, f, l),
          u(a / s, f, l),
          r,
        );
      }
  let d = e.coarse ? 2 : 8;
  for (let [t, r, i, o] of [
    [n.zf, n.yf, -1, n.wf],
    [n.zb, n.yb, 1, n.wb],
  ])
    for (let s = 0; s < d; s++) {
      let u = s / d,
        f = (s + 1) / d,
        p = (u * 2 - 1) * n.L,
        m = (f * 2 - 1) * n.L,
        h = c * Math.abs(u * 2 - 1) ** 3,
        g = c * Math.abs(f * 2 - 1) ** 3;
      if (
        (e.col(5204576).mat(0.55, 0.3, 0, 0),
        i < 0
          ? e.quad(m, r + g - a, t, p, r + h - a, t, p, r + h, t, m, r + g, t)
          : e.quad(p, r + h - a, t, m, r + g - a, t, m, r + g, t, p, r + h, t),
        !e.coarse)
      ) {
        e.col(wH).mat(0.9, 0, 0.04, 1);
        let n = l(o) - a - 0.2;
        i < 0
          ? e.quad(p, r + h - a, t, m, r + g - a, t, m, n, o, p, n, o)
          : e.quad(m, r + g - a, t, p, r + h - a, t, p, n, o, m, n, o);
      }
    }
  let f = e.coarse ? 4 : 10;
  e.col(CH).mat(0.85, 0, 0.1, 1);
  for (let t of [-1, 1]) {
    let r = t * n.wl;
    for (let i = 0; i < f; i++) {
      let o = n.wf + ((n.wb - n.wf) * i) / f,
        s = n.wf + ((n.wb - n.wf) * (i + 1)) / f,
        c = l(o) - a,
        u = l(s) - a;
      t > 0
        ? e.quad(r, n.floor, s, r, n.floor, o, r, c, o, r, u, s)
        : e.quad(r, n.floor, o, r, n.floor, s, r, u, s, r, c, o);
    }
  }
  if (!e.coarse) {
    e.col(wH).mat(0.85, 0, 0, 0);
    for (let t of [-1, 1]) {
      let r = t * n.L;
      for (let i = 0; i < 12; i++) {
        let a = n.zf + ((n.zb - n.zf) * i) / 12,
          o = n.zf + ((n.zb - n.zf) * (i + 1)) / 12,
          s = l(a) + c,
          u = l(o) + c;
        for (let n of [1, -1])
          t * n > 0
            ? e.quad(
                r,
                u - 0.75,
                o,
                r,
                s - 0.75,
                a,
                r,
                s + 0.06,
                a,
                r,
                u + 0.06,
                o,
              )
            : e.quad(
                r,
                s - 0.75,
                a,
                r,
                u - 0.75,
                o,
                r,
                u + 0.06,
                o,
                r,
                s + 0.06,
                a,
              );
      }
    }
  }
  if (
    (e.col(4151376).mat(0.55, 0.3, 0, 0),
    e.box(-n.L, n.yr - 0.25, n.zr - 0.45, n.L, n.yr + 0.55, n.zr + 0.45),
    !e.coarse)
  )
    for (let t of [-1, 1])
      e.box(
        t * n.L - 0.3,
        n.yr - 0.3,
        n.zr - 0.7,
        t * n.L + 0.3,
        n.yr + 1,
        n.zr + 0.7,
      );
  e.pop();
}
function VH(e, t, n, r, i, a, o) {
  (e.push().col(13222580).mat(0.85, 0, 0.04, 1),
    e.box(n, -0.1, r, i, o, a, t.c(`granite`), 3, o + 0.1),
    e.pop());
}
