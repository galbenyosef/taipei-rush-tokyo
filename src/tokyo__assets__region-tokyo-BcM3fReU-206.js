// tokyo__assets__region-tokyo-BcM3fReU 206 — quad
// Lines 85307-85586 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var vq = (e) => {
  e.sort((e, t) => e - t);
  let t = 0;
  for (let n = 0; n < e.length; n++)
    (t === 0 || e[n] - e[t - 1] > 0.05) && (e[t++] = e[n]);
  return ((e.length = t), e);
};
function* yq(e, t, n, r, i) {
  let a = t.plan,
    o = a.sidewalkHeight,
    s = [0, 0.02, o, o, o, NaN, o, 0],
    c = [n.minX, n.maxX],
    l = [n.minZ, n.maxZ],
    u = a.bounds;
  for (let e of [u.minX, u.maxX]) e > n.minX && e < n.maxX && c.push(e);
  for (let e of [u.minZ, u.maxZ]) e > n.minZ && e < n.maxZ && l.push(e);
  let d = [];
  for (let e of a.roads) {
    let [t, r, i, a] =
      e.axis === `x`
        ? [
            e.from - e.halfTotal,
            e.to + e.halfTotal,
            e.at - e.halfTotal,
            e.at + e.halfTotal,
          ]
        : [
            e.at - e.halfTotal,
            e.at + e.halfTotal,
            e.from - e.halfTotal,
            e.to + e.halfTotal,
          ];
    if (r < n.minX || t > n.maxX || a < n.minZ || i > n.maxZ) continue;
    d.push(e);
    let o = e.axis === `x` ? l : c,
      s = e.axis === `x` ? c : l,
      u = e.axis === `x` ? n.minZ : n.minX,
      f = e.axis === `x` ? n.maxZ : n.maxX,
      p = e.axis === `x` ? n.minX : n.minZ,
      m = e.axis === `x` ? n.maxX : n.maxZ;
    for (let t of [
      e.at - e.halfWidth,
      e.at + e.halfWidth,
      e.at - e.halfTotal,
      e.at + e.halfTotal,
    ])
      t > u && t < f && o.push(t);
    for (let t of [e.from, e.to, e.from - e.halfTotal, e.to + e.halfTotal])
      t > p && t < m && s.push(t);
  }
  let f = !1;
  for (let e = n.minZ + 8; e < n.maxZ && !f; e += 16)
    for (let t = n.minX + 8; t < n.maxX; t += 16)
      if (a.surfaceAt(t, e) === `water`) {
        f = !0;
        break;
      }
  if (f)
    for (let e = 8; e < 256; e += 8) (c.push(n.minX + e), l.push(n.minZ + e));
  let p = e.n,
    m = i ? i.n : 0,
    h = t.terrain ? t.terrain.cuts(n, c, l) : !1;
  (vq(c), vq(l));
  let g = c.length - 1,
    _ = l.length - 1,
    v = new Uint8Array((g + 1) * (_ + 1));
  for (let e = 0; e < _; e++) {
    let t = (l[e] + l[e + 1]) / 2;
    for (let n = 0; n < g; n++)
      v[e * (g + 1) + n] = mq(a, (c[n] + c[n + 1]) / 2, t);
    v[e * (g + 1) + g] = mq(a, n.maxX + 0.05, t);
  }
  for (let e = 0; e < g; e++)
    v[_ * (g + 1) + e] = mq(a, (c[e] + c[e + 1]) / 2, n.maxZ + 0.05);
  let y = h ? new Int32Array((g + 1) * (_ + 1)) : null;
  if (y)
    for (let e = 0; e < _; e++)
      for (let n = 0; n < g; n++) {
        let r = t.terrain.key(c[n], l[e], c[n + 1], l[e + 1]);
        y[e * (g + 1) + n] = r >= 1e3 ? r + (e & 1) : r;
      }
  t.due() && (yield);
  let b = [
      [64, 64, 68, 0.92],
      [168, 158, 142, 0.85],
      [152, 150, 145, 0.88],
      [128, 124, 116, 0.9],
      [84, 112, 66, 0.95],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [68, 68, 71, 0.92],
    ],
    x = new Map(),
    S = (t, n) => {
      let r = b[t.c];
      if (i && (t.c === fq.Road || t.c === fq.Flush)) {
        let e = t.c === fq.Road ? IW : LW;
        i.setMaterial(r[3], 0, 0, 0).setColor(V(e[0]), V(e[1]), V(e[2]));
        let a = c[t.i0],
          o = l[t.j0],
          u = c[t.i1],
          d = l[n],
          f = s[t.c];
        i.quad(a, f, d, u, f, d, u, f, o, a, f, o, RW(a), RW(d), RW(u), RW(o));
        return;
      }
      (e.setMaterial(r[3], 0, 0, 0).setColor(V(r[0]), V(r[1]), V(r[2])),
        hq(e, c[t.i0], l[t.j0], c[t.i1], l[n], s[t.c]));
    },
    C = new Set();
  for (let e = 0; e <= _; e++) {
    if ((C.clear(), e < _)) {
      let t = 0;
      for (; t < g;) {
        let n = v[e * (g + 1) + t],
          r = y ? y[e * (g + 1) + t] : 0,
          i = t + 1;
        for (
          ;
          i < g && v[e * (g + 1) + i] === n && (!y || y[e * (g + 1) + i] === r);
        )
          i++;
        if (n <= fq.Park || n === fq.Flush) {
          let a = ((t * 4096 + i) * 8 + n) * 4096 + r;
          (x.has(a) || x.set(a, { i0: t, i1: i, c: n, j0: e }), C.add(a));
        }
        t = i;
      }
    }
    for (let [t, n] of x) C.has(t) || (S(n, e), x.delete(t));
  }
  t.due() && (yield);
  let w = a.waterLevel,
    T = (e, t, n) =>
      e === fq.Water ? Math.min(pq, a.waterLevelAt(t, n) - 0.2) : s[e];
  e.setMaterial(0.9, 0, 0, 0);
  let E = (e, t, n, r, i, o) => {
      if (e === t || (e === fq.Outside && t === fq.Outside)) return null;
      let s = T(e, n, r),
        c = T(t, i, o);
      if (
        s === c ||
        ((e === fq.Outside || t === fq.Outside) &&
          e !== fq.Water &&
          t !== fq.Water)
      )
        return null;
      let l = +(e === fq.Water || t === fq.Water);
      return (
        l &&
          (e === fq.Water && t !== fq.Water && a.waterLevelAt(i, o) < w - 0.01
            ? (s = c - Mg)
            : t === fq.Water &&
              e !== fq.Water &&
              a.waterLevelAt(n, r) < w - 0.01 &&
              (c = s - Mg)),
        s > c ? [c, s, 1, l] : [s, c, -1, l]
      );
    },
    D = (t) => e.setColor(V(t ? 118 : 140), V(t ? 114 : 138), V(t ? 106 : 132)),
    O = (e, t) =>
      !!e &&
      !!t &&
      e[0] === t[0] &&
      e[1] === t[1] &&
      e[2] === t[2] &&
      e[3] === t[3];
  for (let r = 0; r < g; r++) {
    let i = null,
      a = 0;
    for (let o = 0; o <= _; o++) {
      let s = o < _ ? (l[o] + l[o + 1]) / 2 : 0,
        u =
          o < _
            ? E(
                v[o * (g + 1) + r],
                v[o * (g + 1) + r + 1],
                (c[r] + c[r + 1]) / 2,
                s,
                r + 1 < g ? (c[r + 1] + c[r + 2]) / 2 : n.maxX + 0.05,
                s,
              )
            : null;
      (!O(i, u) || y) &&
        (i &&
          (i[3] && t.quay
            ? t.quay(e, `x`, c[r + 1], l[a], l[o], i[0], i[1], i[2])
            : (D(i[3]), gq(e, c[r + 1], l[a], l[o], i[0], i[1], i[2]))),
        (i = u),
        (a = o));
    }
  }
  for (let r = 0; r < _; r++) {
    let i = null,
      a = 0;
    for (let o = 0; o <= g; o++) {
      let s = o < g ? (c[o] + c[o + 1]) / 2 : 0,
        u =
          o < g
            ? E(
                v[r * (g + 1) + o],
                v[(r + 1) * (g + 1) + o],
                s,
                (l[r] + l[r + 1]) / 2,
                s,
                r + 1 < _ ? (l[r + 1] + l[r + 2]) / 2 : n.maxZ + 0.05,
              )
            : null;
      (!O(i, u) || y) &&
        (i &&
          (i[3] && t.quay
            ? t.quay(e, `z`, l[r + 1], c[a], c[o], i[0], i[1], i[2])
            : (D(i[3]), _q(e, l[r + 1], c[a], c[o], i[0], i[1], i[2]))),
        (i = u),
        (a = o));
    }
  }
  t.due() && (yield);
  let k = r ? r.n : 0;
  if (
    (yield* OG(r ?? e, a, n, d, t.due, e),
    dq(e, a, n),
    h &&
      (t.terrain.lift(e, p),
      r && t.terrain.lift(r, k),
      i && t.terrain.lift(i, m)),
    i)
  ) {
    let r = e.n,
      o = i.n;
    AG(e, i, a, n, d);
    let s = h ? t.terrain.at : void 0;
    if (s)
      for (let [t, n] of [
        [e, r],
        [i, o],
      ])
        for (let e = n; e < t.n; e++)
          t.pos[e * 3 + 1] += s(t.pos[e * 3], t.pos[e * 3 + 2]);
  }
  (Ug(e, a, n), nd(e, t.spans, n), PK(e, a, t.spans, n));
}
var bq = [0.62, 0.8, 0.82, 0.78, 0.6, 0.86];
function xq(e, t, n) {
  e.setColor(
    V(((t >> 16) & 255) * n),
    V(((t >> 8) & 255) * n),
    V((t & 255) * n),
  );
}
function Sq(e, t, n, r, i) {
  let { x0: a, x1: o, z0: s, z1: c } = t;
  if (i) {
    let t = (s + c) / 2;
    (e.quad(o, n, s, a, n, s, a, n + r, t, o, n + r, t),
      e.quad(a, n, c, o, n, c, o, n + r, t, a, n + r, t),
      e.quad(a, n, s, a, n, c, a, n + r, t, a, n + r, t),
      e.quad(o, n, c, o, n, s, o, n + r, t, o, n + r, t));
  } else {
    let t = (a + o) / 2;
    (e.quad(a, n, s, a, n, c, t, n + r, c, t, n + r, s),
      e.quad(o, n, c, o, n, s, t, n + r, s, t, n + r, c),
      e.quad(o, n, s, a, n, s, t, n + r, s, t, n + r, s),
      e.quad(a, n, c, o, n, c, t, n + r, c, t, n + r, c));
  }
}
function Cq(e, t, n, r, i) {
  let a = 0.05,
    o = t.x0 - a,
    s = t.x1 + a,
    c = t.z0 - a,
    l = t.z1 + a;
  n === 0
    ? e.quad(s, r, c, o, r, c, o, i, c, s, i, c)
    : n === 1
      ? e.quad(s, r, l, s, r, c, s, i, c, s, i, l)
      : n === 2
        ? e.quad(o, r, l, s, r, l, s, i, l, o, i, l)
        : e.quad(o, r, c, o, r, l, o, i, l, o, i, c);
}
