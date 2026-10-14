// tokyo/assets/region-tokyo-BcM3fReU 149 — math
// Lines 63826-64155 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function zF(e, t, n, r, i, a) {
  let o = e.seg(18);
  e.col(15261642).mat(0.8, 0, 0.12, Y);
  for (let s = 0; s < o; s++) {
    let c = (s / o) * Math.PI * 2,
      l = ((s + 1) / o) * Math.PI * 2,
      u = Math.cos(c),
      d = Math.sin(c),
      f = Math.cos(l),
      p = Math.sin(l);
    e.quad(
      t + f * (i + a),
      n + p * (i + a),
      r,
      t + u * (i + a),
      n + d * (i + a),
      r,
      t + u * i,
      n + d * i,
      r,
      t + f * i,
      n + p * i,
      r,
    );
  }
}
function BF(e, t, n, r, i, a) {
  for (let o = 0; o < a; o++) {
    let s = (o / a) * Math.PI * 2,
      c = ((o + 1) / a) * Math.PI * 2;
    e.quad(
      t,
      n,
      r,
      t,
      n,
      r,
      t + Math.cos(c) * i,
      n + Math.sin(c) * i,
      r,
      t + Math.cos(s) * i,
      n + Math.sin(s) * i,
      r,
    );
  }
}
function VF(e, t) {
  (e.col(EF).mat(0.85, 0, 0.16, Y),
    e.box(-39.6, 0, _F, mF, xF, gF, t.c(`granite`), 8, 8),
    e.box(-9, 0, -9, 9, 8.2, 0, t.c(`granite`), 6, 6),
    e.col(16777215).mat(0.7, 0, 0, 0),
    e.extrudeX(
      [21.2, SF, -4.800000000000001, SF, gF / 2, 28],
      -42.800000000000004,
      42.800000000000004,
      !0,
      !0,
      t.c(`tnmKawara`),
    ),
    e.extrudeZ([-11, 7.8, 11, 7.8, 0, 11.6], -11, 1, !0, !0, t.c(`tnmKawara`)),
    e.mat(0.85, 0, 0, 0));
}
function HF(e) {
  return { x: pF.x, z: pF.z, gy: e.groundHeight(pF.x, pF.z), facing: Math.PI };
}
function UF(e, t) {
  return [
    {
      x0: t.x - mF,
      x1: t.x + mF,
      z0: t.z - gF,
      z1: t.z - _F,
      y0: t.gy,
      y1: t.gy + xF,
      rgb: [0.62, 0.57, 0.48],
      lit: !0,
    },
    {
      x0: t.x - mF - 1,
      x1: t.x + mF + 1,
      z0: t.z - gF + 4,
      z1: t.z - _F - 4,
      y0: t.gy + xF,
      y1: t.gy + SF + 8,
      rgb: [0.068, 0.062, 0.055],
    },
  ];
}
var WF = {
    id: `tnm`,
    site: HF,
    name: {
      ja: `東京国立博物館`,
      zh: `東京國立博物館`,
      en: `Tokyo National Museum`,
    },
    near: 240,
    build: RF,
    far: VF,
    farBoxes: UF,
    bounds: (e, t) => [
      t.x - mF - 15,
      t.z - gF - 15,
      t.x + mF + 15,
      t.z - TF + 15,
    ],
    blip: !0,
    anchors: [
      {
        key: `tnm-court`,
        lx: 4,
        lz: -26,
        turn: Math.PI,
        name: {
          zh: `東京國立博物館 本館前庭`,
          en: `Tokyo National Museum, Honkan front court`,
        },
      },
      {
        key: `tnm-gate`,
        lx: 0,
        lz: -33,
        turn: Math.PI,
        name: {
          zh: `東京國立博物館 正門`,
          en: `Tokyo National Museum main gate`,
        },
      },
    ],
  },
  GF = { x: -168, z: -1220 },
  KF = 4.6,
  qF = 4.1,
  JF = 0.42,
  YF = 1.25,
  XF = 1,
  ZF = 3.02,
  QF = 2.52,
  $F = 3.44,
  eI = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  tI = (e, t) => [e[0] + t[0], e[1] + t[1], e[2] + t[2]],
  nI = (e, t) => [e[0] * t, e[1] * t, e[2] * t],
  rI = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  iI = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  aI = (e) => {
    let t = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  },
  oI = (e, t, n, r, i, a, o) => ({
    c: [e, t, n],
    u: [r, 0, 0],
    v: [0, 0, i],
    fold: a,
    wave: o,
  }),
  sI = (e, t, n, r, i) => ({ c: [e, t, n], u: [r, 0, 0], v: [0, i, 0] }),
  cI = [74, 66, 50],
  lI = [111, 133, 119],
  uI = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  };
function dI(e, t, n = 0.095) {
  return (r, i) => {
    let a = Math.sin(r[0] * 37.1 + r[1] * 11.7 + r[2] * 23.3 + t) * 43758.5453,
      o = a - Math.floor(a),
      s =
        (Math.sin(r[0] * 23 + r[2] * 17 + t) * 0.5 + 0.5) ** 4 *
        (1 - Math.abs(i[1])) *
        0.85,
      c = Math.min(
        1,
        Math.max(0, 0.32 + 0.8 * uI(-0.15, 0.55, i[1]) + s + 0.2 * (o - 0.5)),
      ),
      l = [0, 1, 2].map((e) => cI[e] + (lI[e] - cI[e]) * c);
    (e.col(
      (Math.round(l[0]) << 16) | (Math.round(l[1]) << 8) | Math.round(l[2]),
    ),
      e.emis(
        Math.max(0.035, n - 0.016 * (r[1] - $F) - 0.04 * Math.max(0, -i[1])),
        1,
      ));
  };
}
function fI(e, t, n, r, i = !1, a = !1, o = 0, s = r) {
  n = e.coarse ? Math.max(5, Math.ceil(n / 2)) : n;
  let c = t.length,
    l = t.map((e) => {
      let t = [],
        r = aI(rI(e.u, e.v));
      for (let i = 0; i < n; i++) {
        let a = (i / n) * Math.PI * 2,
          o = 1;
        e.fold && (o += e.fold[0] * Math.sin(e.fold[1] * a + e.fold[2]));
        let s = tI(e.c, tI(nI(e.u, Math.cos(a) * o), nI(e.v, Math.sin(a) * o)));
        (e.wave &&
          (s = tI(s, nI(r, e.wave[0] * Math.sin(e.wave[1] * a + e.wave[2])))),
          t.push(s));
      }
      return t;
    }),
    u = e.w.n;
  for (let i = 0; i < c; i++)
    for (let a = 0; a < n; a++) {
      let o = eI(l[i][(a + 1) % n], l[i][(a - 1 + n) % n]),
        s = aI(
          rI(eI(l[Math.min(c - 1, i + 1)][a], l[Math.max(0, i - 1)][a]), o),
        );
      (iI(s, eI(l[i][a], t[i].c)) < 0 && (s = nI(s, -1)),
        r(l[i][a], s),
        e.v(
          l[i][a][0],
          l[i][a][1],
          l[i][a][2],
          s[0],
          s[1],
          s[2],
          e.white.u0,
          e.white.v0,
        ));
    }
  let d = (e, t) => u + e * n + (t % n),
    f = !1;
  if (c > 1) {
    let e = l[0][0],
      n = l[1][1],
      r = l[0][1];
    f = iI(rI(eI(n, e), eI(r, e)), eI(e, t[0].c)) < 0;
  }
  for (let t = 0; t + 1 < c; t++)
    for (let r = 0; r < n; r++)
      f
        ? (e.tri(d(t, r), d(t, r + 1), d(t + 1, r + 1)),
          e.tri(d(t, r), d(t + 1, r + 1), d(t + 1, r)))
        : (e.tri(d(t, r), d(t + 1, r + 1), d(t, r + 1)),
          e.tri(d(t, r), d(t + 1, r), d(t + 1, r + 1)));
  for (let [r, u, f] of [
    [i, 0, -1],
    [a, c - 1, 1],
  ]) {
    if (!r || c < 2) continue;
    let i = t[u],
      a = aI(eI(t[u].c, t[u - f].c)),
      p = tI(i.c, nI(a, o));
    s(p, a);
    let m = e.w.n;
    e.v(p[0], p[1], p[2], a[0], a[1], a[2], e.white.u0, e.white.v0);
    let h = l[u][0],
      g = l[u][1],
      _ = iI(rI(eI(g, h), eI(p, h)), a) > 0;
    for (let t = 0; t < n; t++)
      _ ? e.tri(d(u, t), d(u, t + 1), m) : e.tri(d(u, t), m, d(u, t + 1));
  }
}
function pI(e, t, n, r, i, a = !0, o = !0, s = !1, c = 0, l = i) {
  let u = t.length,
    d = [],
    f = [0, 0, 1];
  for (let e = 0; e < u; e++) {
    let r = aI(
      s
        ? eI(t[(e + 1) % u], t[(e - 1 + u) % u])
        : eI(t[Math.min(u - 1, e + 1)], t[Math.max(0, e - 1)]),
    );
    e === 0 && Math.abs(iI(r, f)) > 0.9 && (f = [1, 0, 0]);
    let i = eI(f, nI(r, iI(f, r)));
    ((i = aI(i)), (f = i));
    let a = aI(rI(r, i));
    d.push({ c: t[e], u: nI(i, n[e]), v: nI(a, n[e]) });
  }
  (s && d.push(d[0]), fI(e, d, r, i, !s && a, !s && o, c, l));
}
function mI(e, t, n, r, i, a) {
  let o = t.length,
    s = [],
    c = [],
    l = [],
    u = [];
  for (let e = 0; e < o; e++) {
    let a = aI(eI(t[Math.min(o - 1, e + 1)], t[Math.max(0, e - 1)])),
      d = aI(rI(n[e], a));
    (s.push(tI(t[e], nI(d, r / 2))),
      c.push(tI(t[e], nI(d, -r / 2))),
      l.push(tI(s[e], nI(n[e], i))),
      u.push(tI(c[e], nI(n[e], i))));
  }
  let d = (t, n, r) => {
    for (let i = 0; i + 1 < o; i++) {
      let o = e.w.n;
      for (let [o, s] of [
        [t[i], i],
        [n[i], i],
        [n[i + 1], i + 1],
        [t[i + 1], i + 1],
      ]) {
        let t = r(s);
        (a(o, t),
          e.v(o[0], o[1], o[2], t[0], t[1], t[2], e.white.u0, e.white.v0));
      }
      iI(rI(eI(n[i], t[i]), eI(t[i + 1], t[i])), r(i)) > 0
        ? (e.tri(o, o + 1, o + 2), e.tri(o, o + 2, o + 3))
        : (e.tri(o, o + 2, o + 1), e.tri(o, o + 3, o + 2));
    }
  };
  (d(l, u, (e) => n[e]),
    d(s, l, (e) =>
      aI(rI(n[e], aI(eI(t[Math.min(o - 1, e + 1)], t[Math.max(0, e - 1)])))),
    ),
    d(u, c, (e) =>
      nI(
        aI(rI(n[e], aI(eI(t[Math.min(o - 1, e + 1)], t[Math.max(0, e - 1)])))),
        -1,
      ),
    ));
}
function hI(e, t) {
  let n =
      0.56 +
      0.03 * Math.min(1, Math.max(0, (e - 2.2) / 0.5)) -
      0.2 * Math.max(0, (e - 2.85) / 0.15),
    r = 0.47 - 0.1 * Math.max(0, Math.min(1, (e - 2.1) / 0.8));
  return [
    [Math.cos(t) * n, e, -0.04 + Math.sin(t) * r],
    aI([Math.cos(t) / n, 0.15, Math.sin(t) / r]),
  ];
}
