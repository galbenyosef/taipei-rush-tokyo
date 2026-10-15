// tokyo/assets/region-tokyo-55J_WESF 280 — math
// Lines 103435-103757 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function QV(e, t, n, r, i, a = 1.6, o = [], s = 10262154, c = 2895918, l = 0) {
  let u = Math.hypot(r - t, i - n);
  if (u < 0.1) return;
  let d = (r - t) / u,
    f = (i - n) / u,
    p = -f * 0.2,
    m = d * 0.2,
    h = [],
    g = 0;
  for (let [e, t] of [...o].sort((e, t) => e[0] - t[0]))
    (e > g && h.push([g, e]), (g = Math.max(g, t)));
  g < u && h.push([g, u]);
  for (let [r, i] of h) {
    let o = t + d * r,
      u = n + f * r,
      h = t + d * i,
      g = n + f * i;
    if (
      (e.push().col(s).mat(0.9, 0, 0, 0),
      e.quad(
        o + p,
        0,
        u + m,
        h + p,
        0,
        g + m,
        h + p,
        0.45,
        g + m,
        o + p,
        0.45,
        u + m,
      ),
      e.quad(
        h - p,
        0,
        g - m,
        o - p,
        0,
        u - m,
        o - p,
        0.45,
        u - m,
        h - p,
        0.45,
        g - m,
      ),
      e.quad(
        o - p,
        0.45,
        u - m,
        o + p,
        0.45,
        u + m,
        h + p,
        0.45,
        g + m,
        h - p,
        0.45,
        g - m,
      ),
      e.col(c).mat(0.6, 0.5, 0, 0),
      e.coarse)
    )
      (e.quad(o, a - 0.1, u, h, a - 0.1, g, h, a, g, o, a, u),
        e.quad(h, a - 0.1, g, o, a - 0.1, u, o, a, u, h, a, g));
    else {
      for (let [t, n] of [
        [a - 0.08, a],
        [0.55, 0.62],
      ])
        (e.quad(o, t, u, h, t, g, h, n, g, o, n, u),
          e.quad(h, t, g, o, t, u, o, n, u, h, n, g));
      let t = i - r,
        n = Math.max(1, Math.round(t / 4.8));
      (d * 0.06, f * 0.06);
      let s = -f * 0.06,
        c = d * 0.06;
      for (let t = 0; t <= n; t++) {
        let r = o + ((h - o) * t) / n,
          i = u + ((g - u) * t) / n;
        (e.quad(
          r - s,
          0.45,
          i - c,
          r + s,
          0.45,
          i + c,
          r + s,
          a + 0.1,
          i + c,
          r - s,
          a + 0.1,
          i - c,
        ),
          e.quad(
            r + s,
            0.45,
            i + c,
            r - s,
            0.45,
            i - c,
            r - s,
            a + 0.1,
            i - c,
            r + s,
            a + 0.1,
            i + c,
          ));
      }
      if (l > 0) {
        let n = Math.round(t / l);
        for (let t = 1; t < n; t++) {
          let r = t / n,
            i = o + (h - o) * r,
            s = u + (g - u) * r,
            c = d * 0.025,
            l = f * 0.025;
          (e.quad(
            i - c,
            0.62,
            s - l,
            i + c,
            0.62,
            s + l,
            i + c,
            a + 0.12,
            s + l,
            i - c,
            a + 0.12,
            s - l,
          ),
            e.quad(
              i + c,
              0.62,
              s + l,
              i - c,
              0.62,
              s - l,
              i - c,
              a + 0.12,
              s - l,
              i + c,
              a + 0.12,
              s + l,
            ));
        }
      }
    }
    e.pop();
    let _ = (o + h) / 2,
      v = (u + g) / 2;
    e.solidRot(_, v, (i - r) / 2, 0.25, Math.atan2(f, d), 0, a, `fence`);
  }
}
function $V(e, t, n, r = 0) {
  if (e.coarse) return;
  let i = e.sub(t, 0, n, r);
  (e.push().col(8018492).mat(0.85, 0, 0, 0),
    e.box(-0.9, 0.42, -0.25, 0.9, 0.48, 0.22),
    e.box(-0.9, 0.5, 0.18, 0.9, 0.85, 0.24),
    e.col(3948354).mat(0.6, 0.5, 0, 0));
  for (let t of [-0.75, 0.75]) e.box(t - 0.04, 0, -0.22, t + 0.04, 0.45, 0.2);
  (e.pop(), e.leave(i));
}
function eH(e, t, n, r = 4.2, i = !0) {
  (e.push().col(3356218).mat(0.55, 0.5, 0, 0),
    e.cylY(t, n, 0, r, 0.07, 5, 0.055, !1),
    e.col(16773324).mat(0.3, 0, 1.2, 1),
    i
      ? HV(
          e,
          t,
          n,
          [
            [0, r],
            [0.24, r + 0.12],
            [0.24, r + 0.4],
            [0, r + 0.55],
          ],
          5,
          16773324,
          1,
        )
      : e.box(t - 0.18, r, n - 0.18, t + 0.18, r + 0.45, n + 0.18),
    e.pop(),
    e.pole(t, n, 0.12, 0, r, `prop`));
}
r.add({ 明治神宮之森: `明治神宮の森` });
var tH = { x0: -2195, z0: 615, x1: -2040, z1: 968 },
  nH = { x0: -2195, z0: 615, x1: -1862, z1: 1105 },
  rH = { x: (tH.x0 + tH.x1) / 2, z: (tH.z0 + tH.z1) / 2 },
  iH = [
    [-1899, 976],
    [-1899, 952],
    [-1905, 934],
    [-1925, 910],
    [-1950, 888],
    [-1985, 866],
    [-2018, 849],
    [-2045, 838],
  ],
  aH = 14,
  oH = { x: -2045, z: 838 },
  sH = 9,
  cH = [
    [oH.x, 832],
    [oH.x, tH.z0 - 4],
  ],
  lH = 11,
  uH = -2132,
  dH = [
    [oH.x + 4, oH.z],
    [uH, oH.z],
    [uH, 776],
  ],
  fH = { x0: -2165, z0: 696, x1: -2099, z1: 770, d: 5 },
  pH = { x0: -2151, x1: -2113, z0: 698, z1: 718 },
  mH = { x0: -2145, x1: -2119, z0: 660, z1: 684 },
  hH = { x0: -2159, x1: -2105, z0: 650, z1: 696 },
  gH = { x: oH.x - 26, z: oH.z },
  _H = { x: uH, z: 792 },
  vH = { x: -1899, z: 962 },
  yH = { x: -2146, z: 804 },
  bH = [
    [oH.x - sH / 2, 733],
    [fH.x1 + 6, 733],
  ],
  xH = { ax: -1985, az: 866, bx: -2045, bz: 838 },
  SH = 9401432,
  CH = 5914158,
  Fwe = 13807230,
  wH = 8747625,
  Iwe = 11902335,
  Lwe = 15987178,
  TH = 14472904,
  EH = 12038565,
  Rwe = 14068296,
  DH = (e, t, n, r = 0) =>
    e > n.x0 - r && e < n.x1 + r && t > n.z0 - r && t < n.z1 + r;
function OH(e, t, n) {
  let r = 1 / 0;
  for (let i = 0; i + 1 < n.length; i++) {
    let [a, o] = n[i],
      [s, c] = n[i + 1],
      l = s - a,
      u = c - o,
      d = l * l + u * u || 1,
      f = Math.max(0, Math.min(1, ((e - a) * l + (t - o) * u) / d));
    r = Math.min(r, Math.hypot(e - a - l * f, t - o - u * f));
  }
  return r;
}
var kH = (() => {
    let e = xH.bx - xH.ax,
      t = xH.bz - xH.az,
      n = Math.hypot(e, t);
    return { ux: e / n, uz: t / n, nx: -t / n, nz: e / n, len: n };
  })(),
  zwe = (e, t) => [
    xH.ax + kH.ux * e + kH.nx * t,
    xH.az + kH.uz * e + kH.nz * t,
  ],
  AH = 24,
  jH = 26;
function MH(e, t, n) {
  if (
    OH(e, t, iH) < aH / 2 + n ||
    OH(e, t, cH) < sH / 2 + n ||
    OH(e, t, dH) < lH / 2 + n ||
    OH(e, t, bH) < 3 + n ||
    DH(
      e,
      t,
      { x0: fH.x0 - 6, z0: hH.z0 - 6, x1: fH.x1 + 6, z1: fH.z1 + 6 },
      n,
    ) ||
    DH(e, t, { x0: yH.x - 7, z0: yH.z - 7, x1: uH, z1: yH.z + 7 }, n)
  )
    return !0;
  let r = (e - xH.ax) * kH.ux + (t - xH.az) * kH.uz,
    i = (e - xH.ax) * kH.nx + (t - xH.az) * kH.nz;
  return (
    (r > AH - jH / 2 - 2 - n && r < 39 + n && Math.abs(i) < 13 + n) ||
    (e > -1915 - n && t > 952 - n && t < 1031)
  );
}
function NH(e, t, n) {
  return e < nH.x0 + n ||
    e > nH.x1 ||
    t < nH.z0 + n ||
    t > nH.z1 - n ||
    vy(e, t) >
      -(t < 838 ? 6.5 : t < 850 ? 6.5 + ((t - 838) / 12) * 7.3 : 12.6 + 1.2) - n
    ? !1
    : t > 1008
      ? e > -1990 + n && e < -1920 - n
      : !0;
}
var PH = (e, t) => 19 + 7 * BV(e, t, 46, 3) + 3 * BV(e, t, 17, 17),
  FH = (e) => (t, n) => e.plan.groundHeight(t, n) - e.site.gy;
function Bwe(e, t, n) {
  return KV(e, {
    x0: nH.x0,
    z0: nH.z0,
    x1: nH.x1,
    z1: nH.z1,
    step: n,
    inside: (e, t) => NH(e, t, 2.5) && !MH(e, t, 1.5),
    height: PH,
    dark: 2902568,
    light: 7116357,
    salt: 31,
    lump: n * 0.6,
    baseY: 11,
    inset: 9,
    jitter: n * 0.28,
    trunks: (e, t) => MH(e, t, 7) || !NH(e, t, -4),
    ground: FH(t),
    understory: 3360043,
    underside: 5012543,
  });
}
