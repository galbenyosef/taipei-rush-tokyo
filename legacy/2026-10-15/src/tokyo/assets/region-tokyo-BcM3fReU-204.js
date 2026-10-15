// tokyo/assets/region-tokyo-BcM3fReU 204 — math
// Lines 84621-84957 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function qK(e, t, n) {
  let r = jK,
    i = pc.half,
    a = pc.parapet,
    o = t.u,
    s = t.axis === `z` ? -o : o,
    c = Math.sign(s * t.side) || 1,
    l = (e) => AK(n, (e.ax + e.bx) / 2, (e.az + e.bz) / 2),
    u = Math.ceil(pc.run / 10);
  for (let n = 0; n < u; n++) {
    let r = GK(
      t,
      t.start + (o * (pc.run * n)) / u,
      t.start + (o * (pc.run * (n + 1))) / u,
      pc.lat,
      i,
    );
    if (l(r)) {
      (e.setMaterial(0.88, 0, 0, 0),
        kK(e, 70, 70, 74),
        NK(e, r, -i + a, i - a, 0, 0, { top: !0 }),
        kK(e, 168, 166, 158),
        Math.max(r.ya, r.yb) > pc.slab + 0.05 &&
          NK(e, r, -i, i, -pc.slab, -pc.slab, { bottom: !0 }),
        NK(e, r, -i, i, -pc.slab - 0.2, pc.wall, { s0: !0, s1: !0 }),
        Math.min(r.ya, r.yb) < pc.clear + 0.5 &&
          (kK(e, 158, 156, 148),
          KK(e, r, -i, pc.slab + 0.2, -1),
          KK(e, r, i, pc.slab + 0.2, 1)),
        kK(e, 190, 188, 180),
        NK(e, r, -i, -i + a, 0, pc.wall, { top: !0, s1: !0 }),
        NK(e, r, i - a, i, 0, pc.wall, { top: !0, s0: !0 }),
        e.setMaterial(0.6, 0, 0, 16),
        kK(e, 226, 226, 220));
      for (let t of [-i + a + 0.2, i - a - 0.2])
        NK(e, r, t - 0.07, t + 0.07, 0.02, 0.02, { top: !0 });
    }
  }
  let d = t.deckHalf - 0.4,
    f = pc.lat + i,
    p = (d + f) / 2,
    m = (f - d) / 2,
    h = Math.ceil(pc.merge / 12),
    g = c;
  for (let n = 0; n < h; n++) {
    let i = GK(
      t,
      t.top + (o * (pc.merge * n)) / h,
      t.top + (o * (pc.merge * (n + 1))) / h,
      p,
      m,
      t.deckY,
    );
    if (!l(i)) continue;
    (e.setMaterial(0.88, 0, 0, 0),
      kK(e, 70, 70, 74),
      NK(e, i, g > 0 ? -m : -m + a, g > 0 ? m - a : m, 0, 0, { top: !0 }),
      kK(e, 168, 166, 158),
      NK(e, i, g > 0 ? -m + 0.4 : -m, g > 0 ? m : m - 0.4, -r.slab, -r.slab, {
        bottom: !0,
      }),
      kK(e, 150, 156, 148),
      NK(e, i, -m, m, -r.fascia, r.parapet, g > 0 ? { s1: !0 } : { s0: !0 }),
      kK(e, 190, 188, 180),
      g > 0
        ? NK(e, i, m - a, m, 0, r.parapet, { top: !0, s0: !0 })
        : NK(e, i, -m, -m + a, 0, r.parapet, { top: !0, s1: !0 }),
      e.setMaterial(0.6, 0, 0, 16),
      kK(e, 226, 226, 220));
    let s = g * (m - a - 0.2);
    NK(e, i, s - 0.07, s + 0.07, 0.02, 0.02, { top: !0 });
  }
  let _ = t.axis === `x` ? o : 0,
    v = t.axis === `z` ? o : 0,
    [y, b] = vc(t, t.gore, t.deckHalf),
    [x, S] = vc(t, t.gore, f);
  if (AK(n, (y + x) / 2, (b + S) / 2)) {
    (e.setMaterial(0.88, 0, 0, 0), kK(e, 168, 166, 158));
    let n = t.deckY - r.fascia,
      i = t.deckY + r.parapet;
    (MK(
      e,
      [
        [y, n, b],
        [x, n, S],
        [x, i, S],
        [y, i, b],
      ],
      _,
      0,
      v,
    ),
      kK(e, 190, 188, 180));
    let a = y - _ * 0.4,
      o = b - v * 0.4,
      s = x - _ * 0.4,
      c = S - v * 0.4;
    (MK(
      e,
      [
        [y, i, b],
        [x, i, S],
        [s, i, c],
        [a, i, o],
      ],
      0,
      1,
      0,
    ),
      MK(
        e,
        [
          [a, t.deckY, o],
          [s, t.deckY, c],
          [s, i, c],
          [a, i, o],
        ],
        -_,
        0,
        -v,
      ));
  }
  let [C, w] = vc(t, t.top, t.deckHalf),
    [T, E] = vc(t, t.top, pc.lat - i);
  AK(n, (C + T) / 2, (w + E) / 2) &&
    (kK(e, 168, 166, 158),
    MK(
      e,
      [
        [C, t.deckY - r.fascia, w],
        [T, t.deckY - r.fascia, E],
        [T, t.deckY, E],
        [C, t.deckY, w],
      ],
      -_,
      0,
      -v,
    ));
  for (let r of t.piers) {
    let [i, a] = vc(t, r, pc.lat);
    if (!AK(n, i, a)) continue;
    let o = _c(t, r) - pc.slab;
    (e.setMaterial(0.9, 0, 0, 0), kK(e, 168, 166, 158));
    let s = 0.55;
    (MK(
      e,
      [
        [i - s, 0, a + s],
        [i + s, 0, a + s],
        [i + s, o, a + s],
        [i - s, o, a + s],
      ],
      0,
      0,
      1,
    ),
      MK(
        e,
        [
          [i + s, 0, a - s],
          [i - s, 0, a - s],
          [i - s, o, a - s],
          [i + s, o, a - s],
        ],
        0,
        0,
        -1,
      ),
      MK(
        e,
        [
          [i + s, 0, a + s],
          [i + s, 0, a - s],
          [i + s, o, a - s],
          [i + s, o, a + s],
        ],
        1,
        0,
        0,
      ),
      MK(
        e,
        [
          [i - s, 0, a - s],
          [i - s, 0, a + s],
          [i - s, o, a + s],
          [i - s, o, a - s],
        ],
        -1,
        0,
        0,
      ));
  }
}
function JK(e, t, n, r, i) {
  let a = IK(n),
    o = gc(n);
  for (let n of r.pieces)
    n.kind === `expressway` &&
      AK(i, (n.ax + n.bx) / 2, (n.az + n.bz) / 2) &&
      nq(e, t, n, a, o, !zK(r, n));
  for (let t of o) YK(e, t, i);
}
function YK(e, t, n) {
  let r = pc.half,
    i = t.u,
    a = (e) => AK(n, (e.ax + e.bx) / 2, (e.az + e.bz) / 2);
  e.setMaterial(0.9, 0, 0, 0).setColor(255, 255, 255);
  let o = Math.ceil(pc.run / 10);
  for (let n = 0; n < o; n++) {
    let s = GK(
      t,
      t.start + (i * (pc.run * n)) / o,
      t.start + (i * (pc.run * (n + 1))) / o,
      pc.lat,
      r,
    );
    !a(s) ||
      Math.max(s.ya, s.yb) < pc.slab + 1 ||
      (eq(e, s, -r, r, pc.slab + 0.02, ZK, 8),
      !(Math.min(s.ya, s.yb) < pc.clear) &&
        ($K(e, s, -r - 0.025, -pc.slab - 0.2, pc.wall, -1, QK, 8),
        $K(e, s, r + 0.025, -pc.slab - 0.2, pc.wall, 1, QK, 8)));
  }
  let s = t.deckHalf - 0.4,
    c = pc.lat + r,
    l = (s + c) / 2,
    u = (c - s) / 2,
    d = Math.ceil(pc.merge / 12);
  for (let n = 0; n < d; n++) {
    let r = GK(
      t,
      t.top + (i * (pc.merge * n)) / d,
      t.top + (i * (pc.merge * (n + 1))) / d,
      l,
      u,
      t.deckY,
    );
    a(r) && eq(e, r, -u + 0.4, u - 0.4, jK.slab + 0.02, ZK, 8);
  }
}
var XK = zG(`soundWall`),
  ZK = zG(`soffit`),
  QK = zG(`fascia`);
function $K(e, t, n, r, i, a, o, s) {
  let c = t.bx - t.ax,
    l = t.bz - t.az,
    u = Math.hypot(c, l);
  if (u < 0.5) return;
  let d = -l / u,
    f = c / u,
    p = Math.max(1, Math.round(u / s));
  for (let s = 0; s < p; s++) {
    let u = s / p,
      m = (s + 1) / p,
      h = t.ax + c * u + d * n,
      g = t.az + l * u + f * n,
      _ = t.ya + (t.yb - t.ya) * u,
      v = t.ax + c * m + d * n,
      y = t.az + l * m + f * n,
      b = t.ya + (t.yb - t.ya) * m;
    a > 0
      ? e.quad(
          h,
          _ + r,
          g,
          v,
          b + r,
          y,
          v,
          b + i,
          y,
          h,
          _ + i,
          g,
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        )
      : e.quad(
          v,
          b + r,
          y,
          h,
          _ + r,
          g,
          h,
          _ + i,
          g,
          v,
          b + i,
          y,
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        );
  }
}
function eq(e, t, n, r, i, a, o) {
  let s = t.bx - t.ax,
    c = t.bz - t.az,
    l = Math.hypot(s, c);
  if (l < 0.5 || r - n < 0.2) return;
  let u = -c / l,
    d = s / l,
    f = Math.max(1, Math.round(l / o));
  for (let o = 0; o < f; o++) {
    let l = o / f,
      p = (o + 1) / f,
      m = t.ax + s * l,
      h = t.az + c * l,
      g = t.ya + (t.yb - t.ya) * l - i,
      _ = t.ax + s * p,
      v = t.az + c * p,
      y = t.ya + (t.yb - t.ya) * p - i;
    e.quad(
      m + u * n,
      g,
      h + d * n,
      _ + u * n,
      y,
      v + d * n,
      _ + u * r,
      y,
      v + d * r,
      m + u * r,
      g,
      h + d * r,
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    );
  }
}
