// tokyo__assets__region-tokyo-BcM3fReU 203 — math
// Lines 84409-84620 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function HK(e, t) {
  let { len: n, h: r, wall: i, roof: a } = Gu,
    o = t.half,
    s = o + i,
    c = r - a - 0.4,
    l = t.ux,
    u = t.uz,
    d = -u,
    f = l,
    p = (e, n, r) => [t.x + l * e + d * n, r, t.z + u * e + f * n];
  (e.setMaterial(0.9, 0, 0, 0),
    kK(e, 176, 174, 166),
    MK(e, [p(0, -s, r), p(n, -s, r), p(n, s, r), p(0, s, r)], 0, 1, 0),
    MK(e, [p(0, s, 0), p(n, s, 0), p(n, s, r), p(0, s, r)], d, 0, f),
    MK(e, [p(0, -s, 0), p(n, -s, 0), p(n, -s, r), p(0, -s, r)], -d, 0, -f),
    MK(e, [p(n, -s, 0), p(n, s, 0), p(n, s, r), p(n, -s, r)], l, 0, u),
    kK(e, 188, 186, 178),
    MK(e, [p(0, -s, 0), p(0, -o, 0), p(0, -o, r), p(0, -s, r)], -l, 0, -u),
    MK(e, [p(0, o, 0), p(0, s, 0), p(0, s, r), p(0, o, r)], -l, 0, -u),
    MK(e, [p(0, -o, c), p(0, o, c), p(0, o, r), p(0, -o, r)], -l, 0, -u),
    kK(e, 150, 150, 144),
    MK(
      e,
      [
        p(-0.3, -s - 0.15, r + 0.25),
        p(0.3, -s - 0.15, r + 0.25),
        p(0.3, s + 0.15, r + 0.25),
        p(-0.3, s + 0.15, r + 0.25),
      ],
      0,
      1,
      0,
    ),
    MK(
      e,
      [
        p(-0.3, -s - 0.15, r),
        p(-0.3, s + 0.15, r),
        p(-0.3, s + 0.15, r + 0.25),
        p(-0.3, -s - 0.15, r + 0.25),
      ],
      -l,
      0,
      -u,
    ),
    kK(e, 74, 74, 72),
    MK(e, [p(0, -o, 0), p(4, -o, 0), p(4, -o, c), p(0, -o, c)], d, 0, f),
    MK(e, [p(0, o, 0), p(4, o, 0), p(4, o, c), p(0, o, c)], -d, 0, -f),
    kK(e, 48, 48, 50),
    MK(e, [p(0, -o, c), p(4, -o, c), p(4, o, c), p(0, o, c)], 0, -1, 0),
    kK(e, 52, 52, 56),
    MK(e, [p(0, -o, t.y), p(4, -o, t.y), p(4, o, t.y), p(0, o, t.y)], 0, 1, 0),
    kK(e, 10, 10, 12),
    MK(e, [p(4, -o, 0), p(4, o, 0), p(4, o, c), p(4, -o, c)], -l, 0, -u));
}
function UK(e, t) {
  let n = jK,
    r = t.half,
    i = t.bx - t.ax,
    a = t.bz - t.az,
    o = Math.hypot(i, a) || 1,
    s = i / o,
    c = a / o,
    l = -c,
    u = s,
    d = t.ya - n.slab - n.girder,
    f = d - n.cap,
    p = t.ax,
    m = t.az;
  (e.setMaterial(0.9, 0, 0, 0), kK(e, 176, 174, 166));
  let h = (e, t, n) => [p + l * e + s * t, n, m + u * e + c * t],
    g = r - 0.8,
    _ = 0.8;
  (MK(e, [h(-g, _, f), h(g, _, f), h(g, _, d), h(-g, _, d)], s, 0, c),
    MK(
      e,
      [h(g, -0.8, f), h(-g, -0.8, f), h(-g, -0.8, d), h(g, -0.8, d)],
      -s,
      0,
      -c,
    ),
    MK(e, [h(-g, -0.8, f), h(g, -0.8, f), h(g, _, f), h(-g, _, f)], 0, -1, 0),
    MK(e, [h(g, -0.8, f), h(g, -0.8, d), h(g, _, d), h(g, _, f)], l, 0, u),
    MK(
      e,
      [h(-g, _, f), h(-g, _, d), h(-g, -0.8, d), h(-g, -0.8, f)],
      -l,
      0,
      -u,
    ),
    kK(e, 168, 166, 158));
  let v = n.pier,
    y = (e, t, n, r) => [
      p + l * e * r + s * t * r,
      n,
      m + u * e * r + c * t * r,
    ],
    b = f,
    x = 1.25;
  (MK(
    e,
    [y(-v, v, 0, 1), y(v, v, 0, 1), y(v, v, b, x), y(-v, v, b, x)],
    s,
    0,
    c,
  ),
    MK(
      e,
      [y(v, -v, 0, 1), y(-v, -v, 0, 1), y(-v, -v, b, x), y(v, -v, b, x)],
      -s,
      0,
      -c,
    ),
    MK(
      e,
      [y(v, v, 0, 1), y(v, -v, 0, 1), y(v, -v, b, x), y(v, v, b, x)],
      l,
      0,
      u,
    ),
    MK(
      e,
      [y(-v, -v, 0, 1), y(-v, v, 0, 1), y(-v, v, b, x), y(-v, -v, b, x)],
      -l,
      0,
      -u,
    ));
}
function WK(e, t, n, r, i) {
  let a = i / Math.cos(Math.PI / 8);
  (e.setMaterial(0.88, 0, 0, 0), kK(e, 70, 70, 74));
  let o = e.n;
  e.vertex(t, r + 0.005, n, 0, 1, 0, 0, 0);
  for (let i = 0; i < 8; i++) {
    let o = ((i + 0.5) / 8) * Math.PI * 2;
    e.vertex(
      t + Math.cos(o) * a,
      r + 0.005,
      n + Math.sin(o) * a,
      0,
      1,
      0,
      0,
      0,
    );
  }
  for (let t = 0; t < 8; t++) e.tri(o, o + 1 + ((t + 1) % 8), o + 1 + t);
  kK(e, 168, 166, 158);
  for (let i = 0; i < 8; i++) {
    let o = ((i + 0.5) / 8) * Math.PI * 2,
      s = ((i + 1.5) / 8) * Math.PI * 2,
      c = t + Math.cos(o) * a,
      l = n + Math.sin(o) * a,
      u = t + Math.cos(s) * a,
      d = n + Math.sin(s) * a,
      f = (o + s) / 2;
    MK(
      e,
      [
        [c, r - jK.fascia, l],
        [u, r - jK.fascia, d],
        [u, r + 0.005, d],
        [c, r + 0.005, l],
      ],
      Math.cos(f),
      0,
      Math.sin(f),
    );
  }
}
function GK(e, t, n, r, i, a) {
  let [o, s] = vc(e, t, r),
    [c, l] = vc(e, n, r);
  return {
    ax: o,
    az: s,
    bx: c,
    bz: l,
    half: i,
    ya: a ?? _c(e, t),
    yb: a ?? _c(e, n),
    kind: `expressway`,
    solid: !1,
    pier: !1,
  };
}
function KK(e, t, n, r, i) {
  let a = t.bx - t.ax,
    o = t.bz - t.az,
    s = Math.hypot(a, o) || 1,
    c = -o / s,
    l = a / s,
    u = Math.max(0, t.ya - r),
    d = Math.max(0, t.yb - r);
  if (u < 0.02 && d < 0.02) return;
  let f = t.ax + c * n,
    p = t.az + l * n,
    m = t.bx + c * n,
    h = t.bz + l * n;
  MK(
    e,
    [
      [f, 0, p],
      [m, 0, h],
      [m, d, h],
      [f, u, p],
    ],
    c * i,
    0,
    l * i,
  );
}
