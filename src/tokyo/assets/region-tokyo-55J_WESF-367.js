// tokyo/assets/region-tokyo-55J_WESF 367 — math
// Lines 133534-133868 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function IMe(e, t, n, r, i = !0) {
  if (t.solid) return LMe(e, t, i);
  let a = t.half,
    o = pQ,
    s = yQ(vQ(t, -1, n), -1, r),
    c = yQ(vQ(t, 1, n), 1, r);
  (e.setMaterial(0.88, 0, 0, 0),
    dQ(e, 70, 70, 74),
    hQ(e, t, -a + 0.4, a - 0.4, 0, 0, { top: !0 }),
    dQ(e, 168, 166, 158),
    hQ(e, t, -a, a, -o.slab, 0, { bottom: !0 }),
    dQ(e, 150, 156, 148));
  for (let t of s) hQ(e, t, -a, a, -o.fascia, o.parapet, { s0: !0 });
  for (let t of c) hQ(e, t, -a, a, -o.fascia, o.parapet, { s1: !0 });
  dQ(e, 120, 124, 118);
  for (let t of s)
    hQ(e, t, -a, -a + 0.35, -o.fascia, -o.fascia, { bottom: !0 });
  for (let t of c) hQ(e, t, a - 0.35, a, -o.fascia, -o.fascia, { bottom: !0 });
  dQ(e, 190, 188, 180);
  for (let t of s) hQ(e, t, -a, -a + 0.4, 0, o.parapet, { top: !0, s1: !0 });
  for (let t of c) hQ(e, t, a - 0.4, a, 0, o.parapet, { top: !0, s0: !0 });
  if ((e.setMaterial(0.35, 0.1, 0, 0), dQ(e, 170, 186, 190), i))
    for (let t of s)
      hQ(e, t, -a, -a + 0.12, o.parapet, o.parapet + o.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      });
  if (i)
    for (let t of c)
      hQ(e, t, a - 0.12, a, o.parapet, o.parapet + o.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      });
  (e.setMaterial(0.85, 0, 0, 0),
    dQ(e, 196, 194, 186),
    hQ(e, t, -0.3, 0.3, 0, 0.85, { top: !0, s0: !0, s1: !0 }),
    e.setMaterial(0.6, 0.3, 0, 0),
    dQ(e, 150, 160, 152));
  for (let n of [-a * 0.6, 0, a * 0.6])
    hQ(e, t, n - 1, n + 1, -o.slab - o.girder, -o.slab, {
      bottom: !0,
      s0: !0,
      s1: !0,
    });
  (e.setMaterial(0.6, 0, 0, 16), dQ(e, 226, 226, 220));
  for (let n of [-a + 0.9, -0.75, 0.75, a - 0.9])
    for (let r of n < -1 ? s : n > 1 ? c : [t])
      hQ(e, r, n - 0.08, n + 0.08, 0.02, 0.02, { top: !0 });
  if (Math.hypot(t.bx - t.ax, t.bz - t.az) > 8) {
    let n = {
      ...t,
      ax: t.ax + (t.bx - t.ax) * 0.35,
      az: t.az + (t.bz - t.az) * 0.35,
      bx: t.ax + (t.bx - t.ax) * 0.6,
      bz: t.az + (t.bz - t.az) * 0.6,
      ya: t.ya + (t.yb - t.ya) * 0.35,
      yb: t.ya + (t.yb - t.ya) * 0.6,
    };
    for (let t of [-(a * 0.5 + 0.2), a * 0.5 + 0.2])
      hQ(e, n, t - 0.08, t + 0.08, 0.02, 0.02, { top: !0 });
  }
  t.pier && zMe(e, t);
}
function LMe(e, t, n) {
  let r = pQ,
    i = t.half;
  (e.setMaterial(0.88, 0, 0, 0),
    dQ(e, 70, 70, 74),
    hQ(e, t, -i + 0.4, i - 0.4, 0, 0, { top: !0 }),
    dQ(e, 168, 166, 158),
    SQ(e, t, -i, -r.parapet, -1),
    SQ(e, t, i, -r.parapet, 1));
  let a = t.bx - t.ax,
    o = t.bz - t.az,
    s = Math.hypot(a, o) || 1,
    c = a / s,
    l = o / s,
    u = -l,
    d = c,
    f = t.ya >= t.yb,
    p = f ? t.ax : t.bx,
    m = f ? t.az : t.bz,
    h = Math.max(t.ya, t.yb),
    g = f ? -1 : 1;
  (mQ(
    e,
    [
      [p - u * i, 0, m - d * i],
      [p + u * i, 0, m + d * i],
      [p + u * i, h, m + d * i],
      [p - u * i, h, m - d * i],
    ],
    c * g,
    0,
    l * g,
  ),
    dQ(e, 190, 188, 180),
    hQ(e, t, -i, -i + 0.4, 0, r.parapet, { top: !0, s1: !0 }),
    hQ(e, t, i - 0.4, i, 0, r.parapet, { top: !0, s0: !0 }),
    n &&
      (e.setMaterial(0.35, 0.1, 0, 0),
      dQ(e, 170, 186, 190),
      hQ(e, t, -i, -i + 0.12, r.parapet, r.parapet + r.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      }),
      hQ(e, t, i - 0.12, i, r.parapet, r.parapet + r.wall, {
        s0: !0,
        s1: !0,
        top: !0,
      })),
    e.setMaterial(0.85, 0, 0, 0),
    dQ(e, 196, 194, 186),
    hQ(e, t, -0.3, 0.3, 0, 0.85, { top: !0, s0: !0, s1: !0 }),
    e.setMaterial(0.6, 0, 0, 16),
    dQ(e, 226, 226, 220));
  for (let n of [-i + 0.9, -0.75, 0.75, i - 0.9])
    hQ(e, t, n - 0.08, n + 0.08, 0.02, 0.02, { top: !0 });
}
function RMe(e, t) {
  let { len: n, h: r, wall: i, roof: a } = zl,
    o = t.half,
    s = o + i,
    c = r - a - 0.4,
    l = t.ux,
    u = t.uz,
    d = -u,
    f = l,
    p = (e, n, r) => [t.x + l * e + d * n, r, t.z + u * e + f * n];
  (e.setMaterial(0.9, 0, 0, 0),
    dQ(e, 176, 174, 166),
    mQ(e, [p(0, -s, r), p(n, -s, r), p(n, s, r), p(0, s, r)], 0, 1, 0),
    mQ(e, [p(0, s, 0), p(n, s, 0), p(n, s, r), p(0, s, r)], d, 0, f),
    mQ(e, [p(0, -s, 0), p(n, -s, 0), p(n, -s, r), p(0, -s, r)], -d, 0, -f),
    mQ(e, [p(n, -s, 0), p(n, s, 0), p(n, s, r), p(n, -s, r)], l, 0, u),
    dQ(e, 188, 186, 178),
    mQ(e, [p(0, -s, 0), p(0, -o, 0), p(0, -o, r), p(0, -s, r)], -l, 0, -u),
    mQ(e, [p(0, o, 0), p(0, s, 0), p(0, s, r), p(0, o, r)], -l, 0, -u),
    mQ(e, [p(0, -o, c), p(0, o, c), p(0, o, r), p(0, -o, r)], -l, 0, -u),
    dQ(e, 150, 150, 144),
    mQ(
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
    mQ(
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
    dQ(e, 74, 74, 72),
    mQ(e, [p(0, -o, 0), p(4, -o, 0), p(4, -o, c), p(0, -o, c)], d, 0, f),
    mQ(e, [p(0, o, 0), p(4, o, 0), p(4, o, c), p(0, o, c)], -d, 0, -f),
    dQ(e, 48, 48, 50),
    mQ(e, [p(0, -o, c), p(4, -o, c), p(4, o, c), p(0, o, c)], 0, -1, 0),
    dQ(e, 52, 52, 56),
    mQ(e, [p(0, -o, t.y), p(4, -o, t.y), p(4, o, t.y), p(0, o, t.y)], 0, 1, 0),
    dQ(e, 10, 10, 12),
    mQ(e, [p(4, -o, 0), p(4, o, 0), p(4, o, c), p(4, -o, c)], -l, 0, -u));
}
function zMe(e, t) {
  let n = pQ,
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
  (e.setMaterial(0.9, 0, 0, 0), dQ(e, 176, 174, 166));
  let h = (e, t, n) => [p + l * e + s * t, n, m + u * e + c * t],
    g = r - 0.8,
    _ = 0.8;
  (mQ(e, [h(-g, _, f), h(g, _, f), h(g, _, d), h(-g, _, d)], s, 0, c),
    mQ(
      e,
      [h(g, -0.8, f), h(-g, -0.8, f), h(-g, -0.8, d), h(g, -0.8, d)],
      -s,
      0,
      -c,
    ),
    mQ(e, [h(-g, -0.8, f), h(g, -0.8, f), h(g, _, f), h(-g, _, f)], 0, -1, 0),
    mQ(e, [h(g, -0.8, f), h(g, -0.8, d), h(g, _, d), h(g, _, f)], l, 0, u),
    mQ(
      e,
      [h(-g, _, f), h(-g, _, d), h(-g, -0.8, d), h(-g, -0.8, f)],
      -l,
      0,
      -u,
    ),
    dQ(e, 168, 166, 158));
  let v = n.pier,
    y = (e, t, n, r) => [
      p + l * e * r + s * t * r,
      n,
      m + u * e * r + c * t * r,
    ],
    b = t.foot ?? 0,
    x = f,
    S = 1.25;
  (mQ(
    e,
    [y(-v, v, b, 1), y(v, v, b, 1), y(v, v, x, S), y(-v, v, x, S)],
    s,
    0,
    c,
  ),
    mQ(
      e,
      [y(v, -v, b, 1), y(-v, -v, b, 1), y(-v, -v, x, S), y(v, -v, x, S)],
      -s,
      0,
      -c,
    ),
    mQ(
      e,
      [y(v, v, b, 1), y(v, -v, b, 1), y(v, -v, x, S), y(v, v, x, S)],
      l,
      0,
      u,
    ),
    mQ(
      e,
      [y(-v, -v, b, 1), y(-v, v, b, 1), y(-v, v, x, S), y(-v, -v, x, S)],
      -l,
      0,
      -u,
    ));
}
function BMe(e, t, n, r, i) {
  let a = i / Math.cos(Math.PI / 8);
  (e.setMaterial(0.88, 0, 0, 0), dQ(e, 70, 70, 74));
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
  dQ(e, 168, 166, 158);
  for (let i = 0; i < 8; i++) {
    let o = ((i + 0.5) / 8) * Math.PI * 2,
      s = ((i + 1.5) / 8) * Math.PI * 2,
      c = t + Math.cos(o) * a,
      l = n + Math.sin(o) * a,
      u = t + Math.cos(s) * a,
      d = n + Math.sin(s) * a,
      f = (o + s) / 2;
    mQ(
      e,
      [
        [c, r - pQ.fascia, l],
        [u, r - pQ.fascia, d],
        [u, r + 0.005, d],
        [c, r + 0.005, l],
      ],
      Math.cos(f),
      0,
      Math.sin(f),
    );
  }
}
function xQ(e, t, n, r, i, a) {
  let [o, s] = Mo(e, t, r),
    [c, l] = Mo(e, n, r);
  return {
    ax: o,
    az: s,
    bx: c,
    bz: l,
    half: i,
    ya: a ?? jo(e, t),
    yb: a ?? jo(e, n),
    kind: `expressway`,
    solid: !1,
    pier: !1,
  };
}
function SQ(e, t, n, r, i) {
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
  mQ(
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
