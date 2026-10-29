// tokyo/assets/region-tokyo-55J_WESF 370 — slab
// Lines 134556-134881 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function HQ(e, t, n, r, i, a, o, s) {
  let c = e.n;
  (e.vertex(t[0], t[1], t[2], a, o, s, 0, 0),
    e.vertex(n[0], n[1], n[2], a, o, s, 0, 0),
    e.vertex(r[0], r[1], r[2], a, o, s, 0, 0),
    e.vertex(i[0], i[1], i[2], a, o, s, 0, 0),
    e.tri(c, c + 1, c + 2),
    e.tri(c, c + 2, c + 3));
}
function UQ(e, t) {
  return {
    x: e.x[t],
    z: e.z[t],
    y: e.y[t],
    s: e.s[t],
    rx: -e.dz[t],
    rz: e.dx[t],
    ux: e.dx[t],
    uz: e.dz[t],
  };
}
var WQ = (e, t, n) => [e.x + e.rx * t, n, e.z + e.rz * t];
function GQ(e, t, n) {
  let r = e.rx + (t.rx - e.rx) * n,
    i = e.rz + (t.rz - e.rz) * n,
    a = Math.hypot(r, i) || 1;
  return {
    x: e.x + (t.x - e.x) * n,
    z: e.z + (t.z - e.z) * n,
    y: e.y + (t.y - e.y) * n,
    s: e.s === void 0 || t.s === void 0 ? void 0 : e.s + (t.s - e.s) * n,
    rx: r / a,
    rz: i / a,
    ux: i / a,
    uz: -r / a,
  };
}
function KQ(e, t, n, r, i, a, o, s) {
  VQ(
    e,
    WQ(t, r, t.y + a),
    WQ(t, i, t.y + a),
    WQ(n, i, n.y + o),
    WQ(n, r, n.y + o),
    0,
    s,
    0,
  );
}
function qQ(e, t, n, r, i, a, o, s, c) {
  if (a - i < 0.01 && s - o < 0.01) return;
  let l = (t.rx + n.rx) * 0.5 * c,
    u = (t.rz + n.rz) * 0.5 * c;
  VQ(e, WQ(t, r, i), WQ(n, r, o), WQ(n, r, s), WQ(t, r, a), l, 0, u);
}
var JQ = new WeakMap();
function YQ(e) {
  let t = JQ.get(e);
  if (t) return t;
  t = [];
  let n = Ho(),
    r = Wl(e).rail,
    i = (t, n) => {
      if (r.length && Bl(r, t, n, 2.5)) return !1;
      let i = e.surfaceAt(t, n);
      if (i === `water`) return !1;
      if (i !== `road` && i !== `crosswalk` && i !== `plaza`) return !0;
      let a = e.roadAt(t, n);
      return a
        ? Math.abs((a.axis === `x` ? n : t) - a.at) <= a.median / 2 - 1.6
        : !1;
    },
    a = 15;
  for (let r = 0; r < n.n - 1; r++) {
    if (Uo(n, r) !== `deck`) continue;
    let o = n.s[r],
      s = n.s[r + 1];
    for (a < o && (a = o + 4); a < s;) {
      let c = (a - o) / (s - o),
        l = GQ(UQ(n, r), UQ(n, r + 1), c),
        u = !1;
      for (let n of [0, 6, -6, 12, -12]) {
        let r = l.x + l.ux * n,
          a = l.z + l.uz * n;
        if (!i(r, a)) continue;
        let o = l.y - Ro.slab - zo(l.y) - 1.4,
          s = e.groundHeight(r, a);
        if (o - s < 1.5) break;
        (t.push({ x: r, z: a, y0: s, top: o, rx: l.rx, rz: l.rz, deckY: l.y }),
          (u = !0));
        break;
      }
      a += u ? 30 : 8;
    }
  }
  return (JQ.set(e, t), t);
}
var XQ = new WeakMap();
function ZQ(e) {
  let t = XQ.get(e);
  if (t) return t;
  t = new Map();
  for (let n of Jo()) {
    if (n.walk) continue;
    let r = [],
      i = n.axis === `z` ? n.minZ : n.minX,
      a = n.axis === `z` ? n.maxZ : n.maxX,
      o = n.axis === `z` ? n.minX : n.minZ,
      s = n.axis === `z` ? n.maxX : n.maxZ;
    for (let t of e.roads)
      t.axis === n.axis ||
        t.pedestrian ||
        t.at + t.halfTotal <= i ||
        t.at - t.halfTotal >= a ||
        t.from > o + 1 ||
        t.to < s - 1 ||
        r.push({
          a0: Math.max(i, t.at - t.halfTotal),
          a1: Math.min(a, t.at + t.halfTotal),
        });
    (r.sort((e, t) => e.a0 - t.a0), t.set(n, r));
  }
  return (XQ.set(e, t), t);
}
function JMe(e) {
  for (let t of Jo())
    if (
      e.x >= t.minX - 0.5 &&
      e.x <= t.maxX + 0.5 &&
      e.z >= t.minZ - 0.5 &&
      e.z <= t.maxZ + 0.5
    )
      return t;
  return null;
}
function YMe(e, t, n) {
  let r = Ho();
  for (let i = 0; i < r.n - 1; i++) {
    if (!BQ(n, (r.x[i] + r.x[i + 1]) / 2, (r.z[i] + r.z[i + 1]) / 2)) continue;
    let a = UQ(r, i),
      o = UQ(r, i + 1),
      s = Uo(r, i);
    (s === `deck`
      ? $Me(e, a, o)
      : s === `fill`
        ? eNe(e, a, o)
        : s === `cut`
          ? rNe(e, t, a, o)
          : oNe(e, r, i, a, o),
      ZMe(e, r, i, a, o, s),
      i + 1 < r.n - 1 &&
        s === `cut` &&
        Uo(r, i + 1) === `tunnel` &&
        r$(e, o, -1),
      i > 0 && s === `cut` && Uo(r, i - 1) === `tunnel` && r$(e, a, 1));
  }
  for (let r of YQ(t)) BQ(n, r.x, r.z) && i$(e, r);
  for (let [r, i] of ZQ(t))
    for (let t of i)
      BQ(
        n,
        r.axis === `z` ? (r.minX + r.maxX) / 2 : (t.a0 + t.a1) / 2,
        r.axis === `z` ? (t.a0 + t.a1) / 2 : (r.minZ + r.maxZ) / 2,
      ) && aNe(e, r, t);
  for (let t of es)
    BQ(n, (t.minX + t.maxX) / 2, (t.minZ + t.maxZ) / 2) && XMe(e, t);
  (nNe(e, t, n), iNe(e, n));
}
function XMe(e, t) {
  let n = t.y,
    r = 0.45,
    i = t.maxZ - t.minZ > t.maxX - t.minX;
  (e.setMaterial(0.85, 0, 0, 0),
    RQ(e, 182, 178, 168),
    VQ(
      e,
      [t.minX, n, t.minZ],
      [t.maxX, n, t.minZ],
      [t.maxX, n, t.maxZ],
      [t.minX, n, t.maxZ],
      0,
      1,
      0,
    ),
    RQ(e, 160, 158, 150),
    VQ(
      e,
      [t.minX, n - r, t.minZ],
      [t.maxX, n - r, t.minZ],
      [t.maxX, n - r, t.maxZ],
      [t.minX, n - r, t.maxZ],
      0,
      -1,
      0,
    ));
  for (let [a, o, s, c, l, u] of i
    ? [
        [t.minX, t.minZ, t.minX, t.maxZ, -1, 0],
        [t.maxX, t.minZ, t.maxX, t.maxZ, 1, 0],
      ]
    : [
        [t.minX, t.minZ, t.maxX, t.minZ, 0, -1],
        [t.minX, t.maxZ, t.maxX, t.maxZ, 0, 1],
      ])
    (VQ(e, [a, n - r, o], [s, n - r, c], [s, n, c], [a, n, o], l, 0, u),
      e.setMaterial(0.5, 0.4, 0, 0),
      RQ(e, 74, 84, 80),
      VQ(e, [a, n, o], [s, n, c], [s, n + 1.1, c], [a, n + 1.1, o], l, 0, u),
      VQ(e, [a, n, o], [s, n, c], [s, n + 1.1, c], [a, n + 1.1, o], -l, 0, -u),
      e.setMaterial(0.85, 0, 0, 0),
      RQ(e, 160, 158, 150));
}
function ZMe(e, t, n, r, i, a) {
  let o = Ro.half - Ro.edge,
    s = a === `tunnel`;
  (e.setMaterial(0.88, 0, s ? 0.03 : 0, s ? 16 : 0),
    RQ(e, s ? 58 : 70, s ? 58 : 70, s ? 62 : 74),
    s
      ? HQ(
          e,
          WQ(r, -o, r.y),
          WQ(r, o, r.y),
          WQ(i, o, i.y),
          WQ(i, -o, i.y),
          0,
          -1,
          0,
        )
      : KQ(e, r, i, -o, o, 0, 0, 1),
    e.setMaterial(0.85, 0, s ? 0.05 : 0, s ? 16 : 0),
    RQ(e, 196, 194, 186),
    KQ(e, r, i, -0.3, 0.3, 0.85, 0.85, 1),
    qQ(e, r, i, -0.3, r.y, r.y + 0.85, i.y, i.y + 0.85, -1),
    qQ(e, r, i, 0.3, r.y, r.y + 0.85, i.y, i.y + 0.85, 1),
    e.setMaterial(0.6, 0, s ? 0.1 : 0, 16),
    RQ(e, 226, 226, 220));
  for (let t of [-8.3, -1, 1, 8.3])
    KQ(e, r, i, t - 0.08, t + 0.08, 0.02, 0.02, 1);
  let c = t.s[n],
    l = t.s[n + 1];
  for (let t = Math.ceil(c / 12) * 12; t < l; t += 12) {
    let n = (t - c) / (l - c),
      a = Math.min(1, (t + 6 - c) / (l - c)),
      o = GQ(r, i, n),
      s = GQ(r, i, a);
    for (let t of [-4.75, 4.75]) KQ(e, o, s, t - 0.08, t + 0.08, 0.02, 0.02, 1);
  }
}
function QMe(e, t, n, r) {
  let i = n * (r - 0.2);
  return cQ(sQ(e.x + e.rx * i, e.z + e.rz * i, t.x + t.rx * i, t.z + t.rz * i));
}
function $Me(
  e,
  t,
  n,
  r = Ro.half,
  i = (e) => QMe(t, n, e, r),
  a = [-0.6, 0, 0.6],
) {
  let o = Ro,
    s = zo(t.y),
    c = zo(n.y);
  (e.setMaterial(0.88, 0, 0, 0),
    RQ(e, 168, 166, 158),
    KQ(e, t, n, -r, r, -o.slab, -o.slab, -1));
  for (let a of [-1, 1])
    for (let [s, c] of i(a)) {
      let i = GQ(t, n, s),
        l = GQ(t, n, c),
        u = zo(i.y),
        d = zo(l.y);
      (e.setMaterial(0.88, 0, 0, 0),
        RQ(e, 150, 156, 148),
        qQ(
          e,
          i,
          l,
          a * r,
          i.y - o.slab - u,
          i.y + o.parapet,
          l.y - o.slab - d,
          l.y + o.parapet,
          a,
        ),
        RQ(e, 120, 124, 118),
        KQ(
          e,
          i,
          l,
          a < 0 ? -r : r - 0.35,
          a < 0 ? -r + 0.35 : r,
          -o.slab - u,
          -o.slab - d,
          -1,
        ),
        QQ(e, i, l, a, r, !0));
    }
  (e.setMaterial(0.6, 0.3, 0, 0), RQ(e, 150, 160, 152));
  for (let i of a) {
    let a = i * r;
    (KQ(e, t, n, a - 1, a + 1, -o.slab - s, -o.slab - c, -1),
      qQ(
        e,
        t,
        n,
        a - 1,
        t.y - o.slab - s,
        t.y - o.slab,
        n.y - o.slab - c,
        n.y - o.slab,
        -1,
      ),
      qQ(
        e,
        t,
        n,
        a + 1,
        t.y - o.slab - s,
        t.y - o.slab,
        n.y - o.slab - c,
        n.y - o.slab,
        1,
      ));
  }
}
