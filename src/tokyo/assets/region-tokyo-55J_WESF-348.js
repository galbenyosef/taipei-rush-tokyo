// tokyo/assets/region-tokyo-55J_WESF 348 — roof
// Lines 125879-126149 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ZAe(e) {
  let t = new Set(),
    n = { x: 0, z: 0 };
  for (let r of e.m.corridors)
    for (let e = r.draw0; e <= r.draw1; e += 4)
      for (let i of [r.edge0.at(e), 0, r.edge1.at(e)])
        (r.path.pos(e, i, n), t.add(dc(n.x, n.z)));
  for (let n of e.entrances.list) t.add(dc(n.geo.cx, n.geo.cz));
  return [...t].sort((e, t) => e - t);
}
function JY(e, t) {
  let n = new k();
  t.makeEmpty();
  for (let r of e) r.n && t.union(YY(r, n));
  return t;
}
function YY(e, t) {
  t.makeEmpty();
  let n = e.pos,
    r = 1 / 0,
    i = 1 / 0,
    a = 1 / 0,
    o = -1 / 0,
    s = -1 / 0,
    c = -1 / 0;
  for (let t = 0; t < e.n * 3; t += 3) {
    let e = n[t],
      l = n[t + 1],
      u = n[t + 2];
    (e < r && (r = e),
      e > o && (o = e),
      l < i && (i = l),
      l > s && (s = l),
      u < a && (a = u),
      u > c && (c = u));
  }
  return (e.n && (t.min.set(r, i, a), t.max.set(o, s, c)), t);
}
var XY = {
    JY: { len: 20, width: 2.95, side: 3.12, roof: 3.66, gap: 0.6, cars: 6 },
    JK: { len: 20, width: 2.95, side: 3.12, roof: 3.66, gap: 0.6, cars: 6 },
    JB: { len: 20, width: 2.95, side: 3.12, roof: 3.66, gap: 0.6, cars: 6 },
    JC: { len: 20, width: 2.95, side: 3.12, roof: 3.66, gap: 0.6, cars: 6 },
    SK: { len: 25, width: 3.38, side: 3.25, roof: 3.62, gap: 0.5, cars: 6 },
  },
  ZY = [192, 197, 201],
  QY = [74, 84, 94],
  $Y = {
    JY: {
      body: ZY,
      glass: QY,
      bands: [
        [2.92, 3.1, [128, 194, 65]],
        [0.98, 1.06, [52, 120, 60]],
      ],
      door: [182, 188, 192],
      frame: [116, 182, 58],
      face: [26, 30, 30],
      faceBand: [128, 194, 65],
      roof: [150, 154, 156],
    },
    JK: {
      body: ZY,
      glass: QY,
      bands: [
        [1.62, 1.82, [0, 178, 229]],
        [2.94, 3.05, [0, 178, 229]],
      ],
      door: [184, 190, 194],
      frame: null,
      face: [28, 30, 34],
      faceBand: [0, 178, 229],
      roof: [150, 154, 156],
    },
    JB: {
      body: ZY,
      glass: QY,
      bands: [[1.6, 1.82, [255, 212, 0]]],
      door: [184, 190, 194],
      frame: null,
      face: [30, 30, 30],
      faceBand: [255, 212, 0],
      roof: [150, 154, 156],
    },
    JC: {
      body: ZY,
      glass: QY,
      bands: [
        [1.55, 1.85, [241, 90, 34]],
        [2.92, 3.05, [241, 90, 34]],
      ],
      door: [184, 190, 194],
      frame: null,
      face: [30, 30, 30],
      faceBand: [241, 90, 34],
      roof: [150, 154, 156],
    },
    SK: {
      body: [242, 243, 244],
      glass: QY,
      bands: [
        [1.42, 1.62, [18, 70, 160]],
        [1.68, 1.74, [18, 70, 160]],
      ],
      door: [236, 237, 238],
      frame: null,
      face: [242, 243, 244],
      faceBand: null,
      roof: [236, 237, 238],
    },
  },
  eX = (e, t, n = 1) => e.setColor(R(t[0] * n), R(t[1] * n), R(t[2] * n));
function tX(e, t, n, r, i) {
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
}
function nX(e, t, n, r = !1) {
  let i = XY[t],
    a = $Y[t],
    o = i.width / 2,
    s = -i.len / 2,
    c = i.len / 2,
    l = 0.98,
    u = i.side,
    d = i.roof,
    f = [-7.2, -2.4, 2.4, 7.2],
    p = 0.65,
    m = new Set([s + (n ? 0.9 : 0), c]);
  for (let e of f) for (let t of [-0.8, -0.65, p, 0.8]) m.add(e + t);
  let h = [],
    g = [
      s + (n ? 2.2 : 0.8),
      ...f.flatMap((e) => [e - p - 0.15, e + p + 0.15]),
      c - 0.8,
    ];
  for (let e = 0; e + 1 < g.length; e += 2) h.push([g[e], g[e + 1]]);
  for (let [e, t] of h) {
    let n = Math.max(1, Math.round((t - e - 0.6) / 1.6));
    for (let r = 0; r <= n; r++) {
      let i = e + 0.3 + ((t - e - 0.6) * r) / n;
      (m.add(i - 0.06), m.add(i + 0.06));
    }
    (m.add(e + 0.3), m.add(t - 0.3));
  }
  let _ = [...m]
      .filter((e) => e >= s - 1e-6 && e <= c + 1e-6)
      .sort((e, t) => e - t),
    v = 1.86,
    y = 2.88,
    b = 1.8,
    x = 2.72,
    S = new Set([l, v, y, u, b, x, 1]);
  for (let [e, t] of a.bands) (S.add(e), S.add(t));
  let C = [...S].filter((e) => e >= l && e <= u).sort((e, t) => e - t),
    w = (e) => h.some(([t, n]) => e > t + 0.3 && e < n - 0.3),
    T = (e) => {
      for (let [t, n] of h) {
        let r = Math.max(1, Math.round((n - t - 0.6) / 1.6));
        for (let i = 1; i < r; i++) {
          let a = t + 0.3 + ((n - t - 0.6) * i) / r;
          if (Math.abs(e - a) < 0.06) return !0;
        }
      }
      return !1;
    },
    E = (e) => f.some((t) => Math.abs(e - t) < p),
    D = (e) => f.some((t) => Math.abs(e - t) >= p && Math.abs(e - t) < 0.8),
    O = (e, t) => {
      if (E(e)) return t > b && t < x ? [a.glass, 0.3, 1] : [a.door, 0, 0];
      if (D(e) && a.frame && t > 1 && t < u) return [a.frame, 0, 0];
      for (let [e, n, r] of a.bands) if (t > e && t < n) return [r, 0, 0];
      return t > v && t < y && w(e) && !T(e)
        ? [a.glass, 0.36, 1]
        : [a.body, 0, 0];
    },
    k = (t, n, r, i, a, o) => {
      n > 0
        ? tX(e, [t, a, i], [t, a, r], [t, o, r], [t, o, i])
        : tX(e, [t, a, r], [t, a, i], [t, o, i], [t, o, r]);
    };
  for (let t of [-1, 1]) {
    let n = t * o;
    for (let i = 0; i + 1 < C.length; i++) {
      let a = C[i],
        o = C[i + 1],
        s = null,
        c = 0,
        l = 0,
        u = () => {
          if (!s) return;
          let [r, i, u] = s;
          (e.setMaterial(i > 0 ? 0.15 : 0.45, i > 0 ? 0.2 : 0.55, i, u),
            eX(e, r),
            k(n, t, c, l, a, o),
            (s = null));
        };
      for (let e = 0; e + 1 < _.length; e++) {
        let t = _[e],
          n = _[e + 1];
        if (n - t < 1e-4) continue;
        let i = O((t + n) / 2, (a + o) / 2);
        if (r && s && s[0] === i[0] && s[1] === i[1] && s[2] === i[2]) {
          l = n;
          continue;
        }
        (u(), (s = i), (c = t), (l = n));
      }
      u();
    }
  }
  let A = [
    [o, u],
    [o - 0.08, u + 0.18],
    [o - 0.3, u + 0.38],
    [o - 0.65, d - 0.05],
    [0, d],
  ];
  e.setMaterial(0.6, 0.3, 0, 0);
  let j = s + (n ? 0.9 : 0);
  for (let t = 0; t + 1 < A.length; t++) {
    let [n, r] = A[t],
      [i, o] = A[t + 1];
    (eX(e, t === 0 ? a.body : a.roof),
      tX(e, [n, r, c], [n, r, j], [i, o, j], [i, o, c]),
      tX(e, [-i, o, c], [-i, o, j], [-n, r, j], [-n, r, c]));
  }
  (eX(e, [120, 124, 126]),
    e.box(0, d + 0.17, 2.5, 0.9, 0.17, 1.35),
    e.setMaterial(0.8, 0.3, 0, 0),
    eX(e, [44, 46, 48]),
    e.box(0, 0.62, 0, o - 0.3, 0.32, i.len / 2 - 4.2),
    eX(e, [32, 32, 34]));
  for (let t of [-i.len / 2 + 3, i.len / 2 - 3])
    e.box(0, 0.5, t, o - 0.42, 0.4, 1.3);
  (eX(e, [70, 72, 74]),
    e.box(0, 0.95, 0, o - 0.05, 0.03, i.len / 2 - 0.1, 0, 0, 1, 1, !0),
    rX(e, t, c, 1, !1),
    rX(e, t, s + (n ? 0.9 : 0), -1, n),
    n && QAe(e, t, s));
}
function rX(e, t, n, r, i) {
  let a = XY[t],
    o = $Y[t],
    s = a.width / 2;
  (e.setMaterial(0.5, 0.4, 0, 0), eX(e, i ? o.face : o.body, i ? 1 : 0.92));
  let c = (t, n, i, a) => (r > 0 ? tX(e, t, n, i, a) : tX(e, n, t, a, i));
  (c([-s, 0.98, n], [s, 0.98, n], [s, a.side, n], [-s, a.side, n]),
    c([-s, a.side, n], [s, a.side, n], [0.6, a.roof, n], [-0.6, a.roof, n]),
    i ||
      (eX(e, [34, 34, 36]),
      c(
        [-0.55, 1, n + r * 0.02],
        [0.55, 1, n + r * 0.02],
        [0.55, 2.95, n + r * 0.02],
        [-0.55, 2.95, n + r * 0.02],
      ),
      eX(e, [50, 50, 52]),
      e.box(0, 2, n + r * 0.28, 0.62, 1, 0.28)));
}
