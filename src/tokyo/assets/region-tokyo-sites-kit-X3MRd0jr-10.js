// tokyo/assets/region-tokyo-sites-kit-X3MRd0jr 10 — setpaint
// Lines 2778-2975 of readable/tokyo/assets/region-tokyo-sites-kit-X3MRd0jr.pretty.js (statement-aligned).
function Te(e, t, n, r) {
  let i = e.lm;
  (i.push(), i.translate(t, 0, n), i.rotateY(-r), i.setPaint(P(L.wood, 0.75)));
  for (let [e, t] of [
    [-1, -0.7],
    [1, -0.7],
    [-1, 0.7],
    [1, 0.7],
  ])
    i.box(e - 0.08, 0, t - 0.08, e + 0.08, 2.3, t + 0.08);
  (i.box(-1.15, 2.2, -0.8, 1.15, 2.32, 0.8),
    i.setPaint(P(4881002, 0.6, 0.3)),
    i.quad([1.4, 2.32, -1.15], [-1.4, 2.32, -1.15], [-1.4, 3, 0], [1.4, 3, 0]),
    i.quad([-1.4, 2.32, 1.15], [1.4, 2.32, 1.15], [1.4, 3, 0], [-1.4, 3, 0]),
    i.setPaint(P(3033664, 0.7, 0.2)),
    i.quad(
      [-1.4, 2.28, -1.15],
      [1.4, 2.28, -1.15],
      [1.4, 2.96, 0],
      [-1.4, 2.96, 0],
    ),
    i.quad(
      [1.4, 2.28, 1.15],
      [-1.4, 2.28, 1.15],
      [-1.4, 2.96, 0],
      [1.4, 2.96, 0],
    ),
    i.setPaint(P(3828314, 0.6, 0.3)),
    i.box(-1.45, 2.95, -0.08, 1.45, 3.08, 0.08),
    i.setPaint(P(L.woodDark, 0.8)));
  for (let e of [-1.38, 1.38])
    i.quad(
      [e, 2.32, e < 0 ? 1.1 : -1.1],
      [e, 2.32, e < 0 ? -1.1 : 1.1],
      [e, 2.95, 0],
      [e, 2.95, 0],
    );
  (i.setPaint(P(Q, 0.85)),
    i.box(-0.75, 0, -0.35, 0.75, 0.8, 0.35),
    i.setPaint(P(4876922, 0.05, 0.3)),
    i.box(-0.62, 0.74, -0.24, 0.62, 0.76, 0.24, 4),
    i.setPaint(P(13153402, 0.7)));
  for (let e = 0; e < 4; e++) {
    let t = -0.45 + e * 0.3;
    (i.box(t - 0.01, 0.82, -0.3, t + 0.01, 0.84, 0.1),
      i.cylinder(t, -0.3, 0.04, 0.04, 0.8, 0.86, 6, !0));
  }
  (i.pop(), e.box(t - 1.1, n - 0.9, t + 1.1, n + 0.9, 0, 3.1));
}
function Ee(e, t, n, r = 2) {
  let i = e.lm;
  (i.setPaint(P(Q, 0.9)),
    i.box(t - 0.32, 0, n - 0.32, t + 0.32, 0.25, n + 0.32),
    i.cylinder(t, n, 0.12, 0.1, 0.25, r * 0.55, 8, !1),
    i.box(t - 0.28, r * 0.55, n - 0.28, t + 0.28, r * 0.62, n + 0.28),
    i.setPaint(F(16769696, 0.8)),
    i.box(t - 0.18, r * 0.62, n - 0.18, t + 0.18, r * 0.8, n + 0.18),
    i.setPaint(P(Q, 0.9)),
    i.loft(
      [
        t - 0.38,
        n + 0.38,
        t + 0.38,
        n + 0.38,
        t + 0.38,
        n - 0.38,
        t - 0.38,
        n - 0.38,
      ],
      r * 0.8,
      [
        t - 0.02,
        n + 0.02,
        t + 0.02,
        n + 0.02,
        t + 0.02,
        n - 0.02,
        t - 0.02,
        n - 0.02,
      ],
      r * 0.96,
      {},
    ),
    i.sphere(t, r * 0.98, n, 0.07, 6, 4),
    e.circle(t, n, 0.34, 0, r));
}
function De(e, t, n, r, i, a = 0.9) {
  let o = e.lm,
    s = Math.hypot(r - t, i - n),
    c = Math.max(1, Math.round(s / 0.9));
  o.setPaint(P(Q, 0.9));
  for (let e = 0; e <= c; e++) {
    let s = e / c,
      l = t + (r - t) * s,
      u = n + (i - n) * s;
    o.box(l - 0.09, 0, u - 0.09, l + 0.09, a, u + 0.09);
  }
  o.setPaint(P($, 0.9));
  let l = (r - t) / s,
    u = (i - n) / s;
  for (let e of [a * 0.35, a * 0.85])
    (o.push(),
      o.translate((t + r) / 2, e, (n + i) / 2),
      o.rotateY(-Math.atan2(u, l)),
      o.box(-s / 2, -0.04, -0.05, s / 2, 0.04, 0.05),
      o.pop());
  e.obb((t + r) / 2, (n + i) / 2, s / 2, 0.12, Math.atan2(u, l), 0, a);
}
function Oe(e, t) {
  let n = e.lm,
    r = t.h ?? 3.2,
    i = t.x - t.w / 2,
    a = t.x + t.w / 2,
    o = t.z - t.d / 2,
    s = t.z + t.d / 2;
  (n.setPaint(P($, 0.9)),
    n.box(i - 0.3, 0, o - 0.3, a + 0.3, 0.45, s + 0.3),
    n.setPaint(P(L.wood, 0.75)),
    n.box(i, 0.45, o, a, 0.75, s),
    n.setPaint(P(t.color ?? 15261900, 0.85)),
    n.box(i + 0.1, 0.75, o + 0.4, a - 0.1, r, s - 0.1, 19),
    n.setPaint(P(L.woodDark, 0.75)),
    n.box(i + 0.1, 0.75, o + 0.4, a - 0.1, r - 0.1, o + 0.45, 32));
  for (let e = 1; e < 8; e++) {
    let t = i + 0.1 + ((a - i - 0.2) * e) / 8;
    n.box(t - 0.02, 0.75, o + 0.36, t + 0.02, r - 0.1, o + 0.4);
  }
  n.setPaint(P(Se, 0.6));
  for (let e of [i, i + (a - i) / 3, a - (a - i) / 3, a])
    n.cylinder(e, o + 0.1, 0.1, 0.1, 0.75, r, 8, !1);
  (n.box(i - 0.2, r - 0.25, o - 0.05, a + 0.2, r, o + 0.25),
    n.setPaint(P(Q, 0.9)),
    n.box(t.x - 0.9, 0, o - 0.9, t.x + 0.9, 0.22, o - 0.3),
    n.box(t.x - 0.9, 0.22, o - 0.6, t.x + 0.9, 0.45, o - 0.3));
  let c = r + 0.05,
    l = r + t.d * 0.42;
  (n.setPaint(P(4881002, 0.6, 0.3)),
    n.quad(
      [a + 1, c - 0.25, o - 1],
      [i - 1, c - 0.25, o - 1],
      [i - 0.8, l, t.z],
      [a + 0.8, l, t.z],
    ),
    n.quad(
      [i - 1, c - 0.25, s + 1],
      [a + 1, c - 0.25, s + 1],
      [a + 0.8, l, t.z],
      [i - 0.8, l, t.z],
    ),
    n.setPaint(P(3031096, 0.7)),
    n.quad(
      [i - 1, c - 0.3, o - 1],
      [a + 1, c - 0.3, o - 1],
      [a + 0.8, l - 0.06, t.z],
      [i - 0.8, l - 0.06, t.z],
    ),
    n.quad(
      [a + 1, c - 0.3, s + 1],
      [i - 1, c - 0.3, s + 1],
      [i - 0.8, l - 0.06, t.z],
      [a + 0.8, l - 0.06, t.z],
    ),
    n.setPaint(P(3828314, 0.6, 0.3)),
    n.box(i - 0.85, l - 0.05, t.z - 0.15, a + 0.85, l + 0.22, t.z + 0.15),
    n.setPaint(P(L.woodDark, 0.8)));
  for (let [e, r] of [
    [i - 0.05, -1],
    [a + 0.05, 1],
  ])
    r < 0
      ? n.quad([e, c, s], [e, c, o], [e, l - 0.1, t.z], [e, l - 0.1, t.z])
      : n.quad([e, c, o], [e, c, s], [e, l - 0.1, t.z], [e, l - 0.1, t.z]);
  if (
    (n.setPaint(P(L.woodDark, 0.7)),
    n.box(t.x - 0.7, 0.45, o - 0.25, t.x + 0.7, 1.15, o + 0.25),
    n.setPaint(P(14200906, 0.3, 0.9)),
    n.sphere(t.x, r - 0.45, o - 0.05, 0.16, 8, 6),
    n.setPaint(P(14174794, 0.8)),
    n.box(t.x - 0.04, 1.2, o - 0.08, t.x + 0.04, r - 0.6, o - 0.02),
    n.setPaint(P(xe, 0.9)),
    n.push(),
    n.translate(i + 0.2, r - 0.4, o - 0.12),
    n.rotateZ(-Math.PI / 2),
    n.cylinder(0, 0, 0.08, 0.08, 0, a - i - 0.4, 8, !0),
    n.pop(),
    t.shide)
  ) {
    e.art.tex(e.atlas.r(t.shide), 16777215, 0);
    for (let t = 0; t < 4; t++) {
      let n = i + 0.5 + ((a - i - 1) * t) / 3;
      e.art.rectZ(n - 0.1, r - 0.95, n + 0.1, r - 0.48, o - 0.21, -1);
    }
  }
  n.setPaint(F(16773328, 1.2));
  for (let e of [t.x - 1.4, t.x + 1.4])
    n.cylinder(e, o - 0.2, 0.2, 0.2, r - 1.2, r - 0.5, 8, !0);
  e.box(i - 0.3, o - 0.3, a + 0.3, s + 0.3, 0, r + 1);
}
