// tokyo/assets/region-tokyo-55J_WESF 261 — math
// Lines 97334-97668 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function QSe(e, t, n) {
  let r = e,
    i = [
      [1, 0, t],
      [-1, 0, t],
      [0, 1, n],
      [0, -1, n],
    ];
  for (let [e, t, n] of i) {
    let i = [],
      a = r.length / 2;
    for (let o = 0; o < a; o++) {
      let s = (o + 1) % a,
        c = r[o * 2],
        l = r[o * 2 + 1],
        u = r[s * 2],
        d = r[s * 2 + 1],
        f = e * c + t * l - n,
        p = e * u + t * d - n;
      if ((f <= 0 && i.push(c, l), (f < 0 && p > 0) || (f > 0 && p < 0))) {
        let e = f / (f - p);
        i.push(c + (u - c) * e, l + (d - l) * e);
      }
    }
    if (((r = i), r.length < 6)) return [];
  }
  return r;
}
function PR(e) {
  let t = null,
    n = 1 / 0;
  for (let r of e.nodes) {
    let e = Math.hypot(r.x - Ec.x, r.z - Ec.z);
    e < n && ((n = e), (t = r));
  }
  let r = t && n < 2 ? t.halfX : 7.25,
    i = t && n < 2 ? t.halfZ : 7.25,
    a = { N: r, S: r, W: i, E: i };
  if (t && n < 2) {
    a.N = a.S = a.W = a.E = 0;
    for (let e of t.roads)
      e.axis === `z`
        ? (e.from < t.z - 0.5 && (a.N = Math.max(a.N, e.halfWidth)),
          e.to > t.z + 0.5 && (a.S = Math.max(a.S, e.halfWidth)))
        : (e.from < t.x - 0.5 && (a.W = Math.max(a.W, e.halfWidth)),
          e.to > t.x + 0.5 && (a.E = Math.max(a.E, e.halfWidth)));
  }
  return {
    hx: r,
    hz: i,
    curb: (e, t) => {
      let n = t < 0 ? a.N : a.S,
        o = e < 0 ? a.W : a.E;
      return n < r - 0.5 && o < i - 0.5 ? [n, o] : null;
    },
  };
}
function $Se(e, t, n, r) {
  let i = [],
    a = e.length / 2;
  for (let o = 0; o < a; o++) {
    let s = (o + 1) % a,
      c = e[o * 2],
      l = e[o * 2 + 1],
      u = e[s * 2],
      d = e[s * 2 + 1],
      f = t * c + n * l - r,
      p = t * u + n * d - r;
    if ((f <= 0 && i.push(c, l), (f < 0 && p > 0) || (f > 0 && p < 0))) {
      let e = f / (f - p);
      i.push(c + (u - c) * e, l + (d - l) * e);
    }
  }
  return i.length >= 6 ? i : [];
}
function eCe(e, t) {
  let { hx: n, hz: r, curb: i } = PR(t.plan),
    a = (n, r) => t.plan.groundHeight(e.wx(n, r), e.wz(n, r)) - e.gy,
    o = e.white,
    s = 0.45,
    c = n - 0.35,
    l = r - 0.35;
  (e.push().col(15263970).mat(0.6, 0, 0.05, 17),
    [1, -1].forEach((t, n) => {
      let r = Math.hypot(c, l),
        u = c / r,
        d = (t * l) / r,
        f = -d,
        p = u,
        m = XSe + n * 0.004;
      for (let t = -r + 0.3; t + s <= r - 0.3; t += 0.9) {
        let n = t,
          r = t + s,
          h = 6.4 / 2,
          g = QSe(
            [
              u * n - f * h,
              d * n - p * h,
              u * r - f * h,
              d * r - p * h,
              u * r + f * h,
              d * r + p * h,
              u * n + f * h,
              d * n + p * h,
            ],
            c,
            l,
          );
        for (let [e, t] of [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ]) {
          let n = i(e, t);
          n &&
            g.length &&
            (g = $Se(
              g,
              e * Math.SQRT1_2,
              t * Math.SQRT1_2,
              ((n[0] + n[1]) / 2) * Math.SQRT2 - 0.35,
            ));
        }
        let _ = ER(g),
          v = _.length / 2;
        if (v < 3) continue;
        let y = e.w.n;
        for (let t = 0; t < v; t++)
          e.v(
            _[t * 2],
            a(_[t * 2], _[t * 2 + 1]) + m,
            _[t * 2 + 1],
            0,
            1,
            0,
            o.u0,
            o.v0,
          );
        for (let t = 1; t + 1 < v; t++) e.tri(y, y + t, y + t + 1);
      }
    }),
    e.pop());
}
function tCe(e, t, n, r, i) {
  let a = Math.hypot(r - t, i - n) || 1,
    o = (r - t) / a,
    s = (i - n) / a,
    c = Math.atan2(o, -s);
  (e.push().col(8225158).mat(0.5, 0.6),
    e.cylY(t, n, 0.15, 3.3, 0.06, 6, 0.05, !0));
  let l = t + o * 0.2,
    u = n + s * 0.2;
  (e.col(2895408).mat(0.6, 0.3),
    e.obox(l, 2.75, u, 0.17, 0.33, 0.12, c),
    e.coarse ||
      (e.col(11544634).mat(0.4, 0, 0.12, 1),
      e.obox(l + o * 0.125, 2.92, u + s * 0.125, 0.12, 0.12, 0.01, c),
      e.col(2067050).mat(0.4, 0, 0.12, 1),
      e.obox(l + o * 0.125, 2.6, u + s * 0.125, 0.12, 0.12, 0.01, c)),
    e.pop(),
    e.pole(t, n, 0.08, 0, 3.4));
}
function nCe(e, t) {
  eCe(e, t);
  let { hx: n, hz: r, curb: i } = PR(t.plan);
  if (!e.coarse)
    for (let [t, a] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ]) {
      let o = i(t, a),
        [s, c] = o ? [o[0] + 1.3, o[1] + 1.3] : [n + 1.6, r + 1.6];
      tCe(e, t * s, a * c, -t * n, -a * r);
    }
}
var rCe = {
    id: `shibuya-scramble`,
    site: CR(Ec.x, Ec.z),
    name: {
      ja: `渋谷スクランブル交差点`,
      zh: `澀谷十字路口`,
      en: `Shibuya Scramble Crossing`,
    },
    near: 260,
    build: nCe,
    far() {},
    farBoxes: () => [],
    bounds: (e, t) => [t.x - 26, t.z - 26, t.x + 26, t.z + 26],
    anchors: [
      {
        key: `shibuya-scramble`,
        lx: 21,
        lz: 21,
        turn: xR / 4,
        name: { zh: `澀谷十字路口`, en: `Shibuya Scramble Crossing` },
      },
    ],
  },
  FR = { x: -1803, z: 1379 },
  IR = { x: -9, z: -14 },
  LR = { x0: -13.5, z0: 11, x1: -4, z1: 24 },
  RR = 1355 - FR.z,
  zR = jc.x0 - FR.x,
  BR = jc.x1 - FR.x,
  VR = jc.z0 - FR.z,
  HR = jc.z1 - FR.z,
  UR = jc.h,
  WR = jc.door.z - FR.z,
  GR = jc.door.hw,
  KR = 3.4,
  qR = 2.4,
  JR = 1.62;
function iCe(e) {
  let t = (e) => e * 1.22,
    n = 7298631;
  (e.push().col(n).mat(0.5, 0.55, 0.05, 1),
    kR(e, 0, t(0.21), t(0.16), t(0.23), t(0.21), 10));
  for (let n of [-1, 1])
    (kR(e, n * t(0.15), t(0.17), t(0.14), t(0.1), t(0.15), 7, 4),
      e.rod(
        n * t(0.15),
        t(0.2),
        t(0.18),
        n * t(0.14),
        t(0.05),
        t(-0.05),
        t(0.095),
        6,
        t(0.06),
      ),
      kR(e, n * t(0.12), t(0.035), t(-0.09), t(0.06), t(0.035), 6, 3));
  (e.rod(0, t(0.26), t(0.14), 0, t(0.6), t(-0.1), t(0.215), 10, t(0.185)),
    kR(e, 0, t(0.55), t(-0.14), t(0.18), t(0.2), 10));
  for (let n of [-1, 1])
    (e.rod(
      n * t(0.085),
      t(0.48),
      t(-0.21),
      n * t(0.09),
      t(0.04),
      t(-0.25),
      t(0.062),
      6,
      t(0.05),
    ),
      kR(e, n * t(0.09), t(0.03), t(-0.3), t(0.058), t(0.035), 6, 3));
  (e.rod(0, t(0.62), t(-0.1), 0, t(0.86), t(-0.19), t(0.135), 10, t(0.115)),
    kR(e, 0, t(0.91), t(-0.22), t(0.13), t(0.12), 10),
    e.rod(0, t(0.89), t(-0.3), 0, t(0.865), t(-0.41), t(0.07), 7, t(0.05)),
    e.col(2761756),
    kR(e, 0, t(0.875), t(-0.42), t(0.028), t(0.022), 5, 2),
    e.col(n));
  {
    let n = t(0.08),
      r = t(0.98),
      i = t(-0.19);
    (e.triFace(
      -n - t(0.05),
      r,
      i + t(0.025),
      -n + t(0.035),
      r,
      i - t(0.02),
      -n - t(0.015),
      r + t(0.085),
      i,
    ),
      e.triFace(
        -n + t(0.035),
        r,
        i - t(0.02),
        -n - t(0.05),
        r,
        i + t(0.025),
        -n - t(0.015),
        r + t(0.085),
        i,
      ),
      e.triFace(
        n + t(0.05),
        r - t(0.01),
        i + t(0.02),
        n - t(0.03),
        r,
        i - t(0.02),
        n + t(0.06),
        r + t(0.03),
        i - t(0.1),
      ),
      e.triFace(
        n - t(0.03),
        r,
        i - t(0.02),
        n + t(0.05),
        r - t(0.01),
        i + t(0.02),
        n + t(0.06),
        r + t(0.03),
        i - t(0.1),
      ));
  }
  if (!e.coarse) {
    let n = 0,
      r = t(0.36),
      i = t(0.33);
    for (let a = 1; a <= 6; a++) {
      let o = (a / 6) * xR * 1.5,
        s = Math.sin(o) * t(0.06),
        c = t(0.36) + Math.sin(o * 0.5) * t(0.1),
        l = t(0.3) - Math.sin(o) * t(0.03) + Math.cos(o) * t(0.04);
      (e.rod(n, r, i, s, c, l, t(0.038), 5), (n = s), (r = c), (i = l));
    }
  }
  e.pop();
}
function aCe(e, t) {
  let n = e.sub(IR.x, 0.03, IR.z, xR / 2);
  (e.push().col(9407364).mat(0.55, 0.05, 0.012, G),
    e.box(-0.95, 0, -1.25, 0.95, 0.24, 1.25),
    e.col(8223348).mat(0.35, 0.1, 0.015, G),
    e.box(-0.62, 0.24, -0.88, 0.62, 1.52, 0.88),
    e.col(9407364).mat(0.5, 0.05, 0.012, G),
    e.box(-0.68, 1.52, -0.94, 0.68, JR, 0.94),
    e.col(16777215).mat(0.35, 0.1, 0.02, G),
    e.panel(0.13, -0.9, -0.13, -0.9, 0.42, 1.37, wR(t, `plaque`)),
    e.pop());
  let r = e.sub(0, JR, -0.1, 0);
  (iCe(e),
    e.leave(r),
    e.solid(-0.95, -1.25, 0.95, 1.25, 0, 2.72, `statue`),
    e.leave(n));
}
