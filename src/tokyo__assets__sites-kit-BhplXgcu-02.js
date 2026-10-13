// tokyo__assets__sites-kit-BhplXgcu 02 — rng
// Lines 348-424 of readable/tokyo__assets__sites-kit-BhplXgcu.pretty.js (statement-aligned).
function g(e, t, n) {
  let r = l(e, t.g ?? e.art);
  return ((r.rng = e.rng.fork((t.seed ?? 0) + n)), r);
}
function _(e, t) {
  let n = [],
    r = t.path;
  if (r.length < 2) return n;
  let i = g(e, t, 20905),
    a = e.q === `low` ? Math.max(1, Math.ceil(t.people / 2)) : t.people,
    o = (t.spacing ?? 0.85) * (e.q === `low` ? 1.6 : 1),
    s = t.poses ?? [`queue`, `phone`, `queue`, `stand`],
    c = t.jitter ?? 0.1,
    l = 0,
    u = 0.35;
  for (let d = 0; d < a; d++)
    for (;;) {
      let a = r[l],
        p = r[l + 1];
      if (!p) return n;
      let m = p[0] - a[0],
        h = p[1] - a[1],
        g = Math.hypot(m, h);
      if (u <= g) {
        let r = m / (g || 1),
          l = h / (g || 1),
          p = a[0] + r * u + -l * i.rng.range(-c, c),
          _ = a[1] + l * u + r * i.rng.range(-c, c),
          v = Math.atan2(-r, l);
        (f(i, {
          x: p,
          z: _,
          y: t.y,
          rot: v + i.rng.range(-0.12, 0.12),
          pose: s[d % s.length],
          palette: t.palette,
          scale: t.scale,
        }),
          (t.solid ?? !t.g) !== !1 &&
            e.circle(p, _, 0.22, t.y ?? 0, (t.y ?? 0) + 1.7),
          n.push({ x: p, z: _, rot: v }),
          (u += o));
        break;
      }
      ((u -= g), l++);
    }
  return n;
}
function v(e, t) {
  let n = [],
    r = g(e, t, 31793),
    i = e.q === `low` ? Math.max(1, Math.ceil(t.people / 2)) : t.people,
    a = i > 1 ? 1 / (i - 1) : 0,
    o = t.gap ?? 0.15,
    s = t.jitter ?? 0.05;
  for (let c = 0; c < i; c++) {
    let l = i > 1 ? c * a : 0.5;
    if (c > 0 && c < i - 1 && r.rng.chance(o)) continue;
    let u = t.x0 + (t.x1 - t.x0) * l + r.rng.range(-s, s),
      d = t.z0 + (t.z1 - t.z0) * l + r.rng.range(-s, s),
      p = t.rot + r.rng.range(-0.1, 0.1);
    (f(r, {
      x: u,
      z: d,
      y: t.y,
      rot: p,
      pose: t.pose ?? `sit`,
      seatH: t.seatH,
      palette: t.palette,
      scale: t.scale,
    }),
      (t.solid ?? !t.g) !== !1 &&
        e.circle(u, d, 0.2, t.y ?? 0, (t.y ?? 0) + 1.2),
      n.push({ x: u, z: d, rot: p }));
  }
  return n;
}
