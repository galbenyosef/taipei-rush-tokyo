// tokyo/assets/region-tokyo-A7LxHjud 286 — math
// Lines 105389-105706 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function aU(e, t, n, r, i, a) {
  let o = e.white,
    s = [];
  for (let e = 0; e <= r; e++) for (let r = 0; r <= n; r++) s.push(t(r, e));
  let c = (e, t) =>
      s[Math.max(0, Math.min(r, t)) * (n + 1) + Math.max(0, Math.min(n, e))],
    l = (e, t) => {
      let n = c(e + 1, t),
        r = c(e - 1, t),
        i = c(e, t + 1),
        a = c(e, t - 1),
        o = n[0] - r[0],
        s = n[1] - r[1],
        l = n[2] - r[2],
        u = i[0] - a[0],
        d = i[1] - a[1],
        f = i[2] - a[2],
        p = s * f - l * d,
        m = l * u - o * f,
        h = o * d - s * u;
      m < 0 && ((p = -p), (m = -m), (h = -h));
      let g = Math.hypot(p, m, h) || 1;
      return [p / g, m / g, h / g];
    };
  for (let t of [1, -1]) {
    let u = e.w.n;
    for (let s = 0; s <= r; s++)
      for (let r = 0; r <= n; r++) {
        let n = c(r, s),
          u = l(r, s),
          [d, f] = i(r, s);
        (e.col(t > 0 ? d : a, t > 0 ? f : 1),
          e.v(n[0], n[1], n[2], u[0] * t, u[1] * t, u[2] * t, o.u0, o.v0));
      }
    for (let i = 0; i < r; i++)
      for (let r = 0; r < n; r++) {
        let a = u + i * (n + 1) + r,
          o = a + 1,
          c = a + n + 2,
          l = a + n + 1,
          d = s[i * (n + 1) + r],
          f = s[i * (n + 1) + r + 1],
          p = s[(i + 1) * (n + 1) + r + 1];
        (f[0] - d[0]) * (p[2] - d[2]) - (f[2] - d[2]) * (p[0] - d[0]) < 0 ==
        t > 0
          ? (e.tri(a, o, c), e.tri(a, c, l))
          : (e.tri(a, c, o), e.tri(a, l, c));
      }
  }
}
function* ETe(e, t) {
  let n = t.plan.landmarks.find((e) => e.id === `yoyogi-gym`),
    r = n.d / 2,
    i = n.w / 2;
  (e.push().col(12170150).mat(0.9, 0, 0, 0),
    e.flat(
      -r,
      -i,
      r,
      i,
      zV.PAVE,
      e.coarse ? e.white : t.c(`paving`),
      e.coarse ? 0 : 4,
      e.coarse ? 0 : 4,
    ),
    e.pop(),
    yield);
  let a = e.sub(0, 0, 0, QH),
    o = e.coarse ? 12 : 26,
    s = e.coarse ? 4 : 8;
  for (let t of [-1, 1]) {
    let n = rU(t);
    (e.push().mat(0.55, 0.45, 0, 0),
      aU(
        e,
        (e, t) => iU(n, e / o, t / s),
        o,
        s,
        (e, t) => [tU, (e % 2 ? 0.92 : 1.04) * (0.9 + (t / s) * 0.14)],
        9210500,
      ),
      e.pop(),
      e.push());
    for (let r = 0; r < o; r++) {
      let i = n.rim(r / o),
        a = n.rim((r + 1) / o),
        s = (r + 0.5) / o,
        c = -t * XH,
        l = (e) => {
          let t = (e[0] - c) / 1089,
            n = e[2] / 441,
            r = Math.hypot(t, n) || 1;
          return [t / r, n / r];
        },
        u = l(i),
        d = l(a),
        f = s < 0.38,
        p = f ? -1.4 : 1.8,
        m = (t, n, r, i) => {
          (e.quad(
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
          ),
            e.quad(
              n[0],
              n[1],
              n[2],
              t[0],
              t[1],
              t[2],
              i[0],
              i[1],
              i[2],
              r[0],
              r[1],
              r[2],
            ));
        };
      (e.col(CTe).mat(0.85, 0, 0.07, 1),
        m(
          [i[0], i[1] - 1.1, i[2]],
          [a[0], a[1] - 1.1, a[2]],
          [a[0], a[1] + 0.15, a[2]],
          [i[0], i[1] + 0.15, i[2]],
        ),
        f
          ? e.col(4872806).mat(0.2, 0.3, 0.5, G)
          : e.col(wTe).mat(0.9, 0, 0.025, 1),
        m(
          [i[0] + u[0] * p, 0, i[2] + u[1] * p],
          [a[0] + d[0] * p, 0, a[2] + d[1] * p],
          [a[0], a[1] - 1.1, a[2]],
          [i[0], i[1] - 1.1, i[2]],
        ));
    }
    (e.pop(), yield);
  }
  e.push().col(13222839).mat(0.85, 0, 0.18, 1);
  for (let t of [-1, 1]) {
    let n = t * ZH;
    (e.lathe(
      n,
      0,
      [1.5, 0, 1.25, $H * 0.6, 0.95, $H, 1.35, 28.4, 0.4, 29.2],
      e.coarse ? 4 : 8,
      Math.PI / 4,
    ),
      e.pole(n, 0, 1.6, 0, $H));
    let r = t * 42,
      i = t * 6;
    (e.box(r - 2, 0, i - 2, r + 2, 1.6, i + 2),
      e.solid(r - 2, i - 2, r + 2, i + 2, 0, 1.6));
  }
  e.col(3816768).mat(0.5, 0.7, 0, 0);
  let c = e.coarse ? 6 : 16;
  for (let t of [-0.45, 0.45]) {
    for (let n = 0; n < c; n++) {
      let r = -21 + (42 * n) / c,
        i = -21 + (42 * (n + 1)) / c;
      e.rod(r, nU(r) + 0.3, t, i, nU(i) + 0.3, t, 0.28, e.coarse ? 4 : 6);
    }
    for (let n of [-1, 1])
      e.rod(n * ZH, 27.3, t, n * 42, 1.6, n * 6 + t, 0.26, e.coarse ? 4 : 6);
  }
  if ((e.pop(), e.leave(a), !e.coarse))
    for (let t of [-26, -10, 10, 26]) tH(e, t, -i + 3, 5, !0);
  e.solidRot(0, 0, ZH, YH, QH, 0, eU);
  for (let t of [-1, 1]) {
    let n = t * 31,
      r = -t * 11.5,
      i = Math.cos(QH),
      a = Math.sin(QH);
    e.solidRot(n * i - r * a, n * a + r * i, 10, xTe / 2, QH, 0, eU);
  }
}
function DTe(e) {
  let t = e.sub(0, 0, 0, QH);
  e.col(tU).mat(0.6, 0.4, 0, 0);
  for (let t of [-1, 1]) {
    let n = rU(t);
    aU(
      e,
      (e, t) => iU(n, e / 8, t / 2),
      8,
      2,
      () => [tU, 1],
      9210500,
    );
  }
  e.col(13222839);
  for (let t of [-1, 1]) e.box(t * ZH - 1, 0, -1, t * ZH + 1, 28, 1);
  e.leave(t);
}
function OTe(e) {
  let t = e.landmarks.find((e) => e.id === `yoyogi-gym`);
  return { x: t.x, z: t.z, gy: e.groundHeight(t.x, t.z), facing: t.facing };
}
var kTe = {
    id: `yoyogi-gym`,
    site: OTe,
    name: {
      ja: `国立代々木競技場`,
      zh: `國立代代木競技場`,
      en: `Yoyogi National Gymnasium`,
    },
    near: 240,
    build: ETe,
    far: DTe,
    farBoxes: (e) => {
      let t = e.landmarks.find((e) => e.id === `yoyogi-gym`);
      return [
        {
          x0: t.x - 22,
          x1: t.x + 22,
          z0: t.z - 30,
          z1: t.z + 30,
          y0: 0.15,
          y1: 14,
          rgb: [0.42, 0.44, 0.45],
        },
        {
          x0: t.x - 1,
          x1: t.x + 1,
          z0: t.z - ZH - 1,
          z1: t.z - ZH + 1,
          y0: 0.15,
          y1: $H,
          rgb: [0.7, 0.68, 0.64],
        },
        {
          x0: t.x - 1,
          x1: t.x + 1,
          z0: t.z + ZH - 1,
          z1: t.z + ZH + 1,
          y0: 0.15,
          y1: $H,
          rgb: [0.7, 0.68, 0.64],
        },
      ];
    },
    anchors: [
      {
        key: `yoyogi-gym-front`,
        lx: 0,
        lz: -50,
        turn: Math.PI,
        name: { zh: `國立代代木競技場`, en: `Yoyogi National Gymnasium` },
      },
    ],
    blip: !0,
  },
  oU = { x0: -1625, z0: 560, x1: -1314, z1: 742 },
  sU = { x: (oU.x0 + oU.x1) / 2, z: (oU.z0 + oU.z1) / 2 },
  cU = { x: -1536, z: 651, rx: 84, rz: 76, n: 2.6 },
  lU = { x: -1390, z0: 628, z1: oU.z1 },
  uU = { x0: -1428, x1: -1352, z0: 566, z1: 596 },
  dU = { x: lU.x, z: 612, r: 13 },
  ATe = (e) => ({
    x: sU.x,
    z: sU.z,
    gy: e.groundHeight(sU.x, sU.z),
    facing: 0,
  });
function fU(e, t) {
  let n = Math.cos(e),
    r = Math.sin(e),
    i = 2 / cU.n;
  return [
    cU.x + cU.rx * t * Math.sign(n) * Math.abs(n) ** i,
    cU.z + cU.rz * t * Math.sign(r) * Math.abs(r) ** i,
  ];
}
function pU(e, t, n, r, i, a, o = !1, s = n) {
  for (let c = 0; c < t; c++) {
    let l = (c / t) * Math.PI * 2,
      u = ((c + 1) / t) * Math.PI * 2,
      [d, f] = fU(l, n),
      [p, m] = fU(u, n),
      [h, g] = fU(u, s),
      [_, v] = fU(l, s),
      [y, b] = a(c);
    (e.col(y, b),
      o
        ? e.quad(d, r, f, p, r, m, h, i, g, _, i, v)
        : e.quad(p, r, m, d, r, f, _, i, v, h, i, g));
  }
}
function mU(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < t; c++) {
    let l = (c / t) * Math.PI * 2,
      u = ((c + 1) / t) * Math.PI * 2,
      [d, f] = fU(l, n),
      [p, m] = fU(u, n),
      [h, g] = fU(u, r),
      [_, v] = fU(l, r),
      [y, b] = s(c);
    (e.col(y, b),
      o
        ? e.quad(d, i, f, p, i, m, h, a, g, _, a, v)
        : e.quad(d, i, f, _, a, v, h, a, g, p, i, m));
  }
}
var hU = 9330752,
  gU = 11567192,
  _U = 4609116,
  jTe = 15000284,
  vU = 5208630,
  yU = [15789540, 13224298, 7113286, 4086326, 9079428, 9071178, 14275252];
