// tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q 06 — box
// Lines 1647-1943 of readable/tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q.pretty.js (statement-aligned).
function X(e, t, n, r, i, a, o, s, c, l, u = 0) {
  let d = n % r,
    f = Math.floor(n / r) % i,
    p = 0.004;
  (e.art.tex(e.atlas.r(t), 16777215, u),
    e.art.rectZ(
      a,
      o,
      s,
      c,
      l,
      -1,
      d / r + p,
      1 - (f + 1) / i + p,
      (d + 1) / r - p,
      1 - f / i - p,
    ));
}
function ce(e, t, n, r = 1) {
  let i = e.lm,
    a = P(16052972, 0.6),
    o = P(1579034, 0.6);
  i.setPaint(o);
  for (let e of [-0.2, 0.2])
    i.cylinder(t + e * r, n, 0.12 * r, 0.12 * r, 0, 0.35 * r, 8, !0);
  (i.setPaint(a), i.sphere(t, 0.62 * r, n, 0.36 * r, 10, 7), i.setPaint(o));
  for (let e of [-0.34, 0.34])
    i.sphere(t + e * r, 0.72 * r, n - 0.05 * r, 0.12 * r, 6, 4);
  (i.setPaint(a), i.sphere(t, 1.12 * r, n, 0.27 * r, 10, 7), i.setPaint(o));
  for (let e of [-0.19, 0.19])
    (i.sphere(t + e * r, 1.34 * r, n, 0.09 * r, 6, 4),
      i.sphere(t + e * 0.55 * r, 1.15 * r, n - 0.22 * r, 0.07 * r, 6, 4));
  (i.sphere(t, 1.05 * r, n - 0.26 * r, 0.04 * r, 5, 3),
    e.circle(t, n, 0.38 * r, 0, 1.4 * r));
}
function le(e, t, n, r, i, a = 9080466) {
  (e.lm.setPaint(P(a, 0.6, 0.3)), e.lm.cylinder(t, n, 0.05, 0.05, r, i, 6, !1));
}
function ue(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.6,
    a = t.z,
    o = t.x1 - t.x0;
  W(e, {
    x0: t.x0,
    x1: t.x1,
    y0: i + 0.15,
    y1: i + 0.95,
    z: a - 0.08,
    key: t.signKey,
    lit: !0,
    depth: 0.22,
    frame: 2763306,
  });
  let s = Math.min(1.2, o * 0.22);
  (n.setPaint(P(14210252, 0.6, 0.2)),
    n.box(t.x0, 0, a, t.x0 + s, i, a + 0.2),
    r.tex(e.atlas.r(t.menuKey), 16777215, t.open ? 0.8 : 0),
    r.rectZ(t.x0 + 0.08, 0.7, t.x0 + s - 0.08, i - 0.15, a - 0.01, -1));
  let l = t.x0 + s,
    u = t.x1;
  if (!t.open) {
    (q(e, { x0: l, x1: u, h: i, z: a + 0.02 }),
      e.box(t.x0, a, t.x1, a + 0.3, 0, i));
    return;
  }
  (B(e, {
    x0: l,
    x1: u,
    z: a + 0.02,
    h: i - 0.02,
    depth: 3.2,
    backKey: t.backKey,
    light: 16315626,
  }),
    V(e, {
      x0: l,
      x1: u,
      z: a + 0.04,
      h: i - 0.04,
      kind: `sash`,
      open: !0,
      leaves: 3,
    }),
    H(e, {
      x0: l + 0.1,
      x1: u - 0.1,
      y1: i - 0.04,
      z: a,
      len: 0.6,
      key: t.norenKey,
    }),
    n.setPaint(P(9071178, 0.7)),
    n.box(l + 0.3, 0, a + 2, u - 0.2, 1, a + 2.45),
    n.setPaint(P(14212319, 0.25, 0.8)),
    n.box(l + 0.25, 1, a + 1.95, u - 0.15, 1.04, a + 2.5));
  let d = Math.max(2, Math.floor((u - l - 0.8) / 0.75));
  for (let t = 0; t < d; t++)
    c(e, {
      x: l + 0.7 + t * 0.75,
      z: a + 1.6,
      rot: Math.PI,
      pose: t % 2 ? `stand` : `lean`,
      palette: `office`,
      hold: 3811866,
    });
  (n.setPaint(P(13159632, 0.4, 0.4)),
    n.box(l + 0.1, 0, a + 0.4, l + 0.85, 1.75, a + 1),
    r.tex(e.atlas.r(t.kioskKey), 16777215, 0.75),
    r.rectX(a + 0.42, 0.3, a + 0.98, 1.7, l + 0.86, 1),
    e.box(l + 0.1, a + 0.4, l + 0.85, a + 1, 0, 1.75),
    e.box(l + 0.25, a + 1.9, u - 0.15, a + 2.5, 0, 1.05));
}
function de(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.7,
    a = t.z;
  (n.setPaint(P(9062962, 0.85)),
    n.box(t.x0, 0, a, t.x1, i, a + 0.25, 32),
    n.setPaint(P(6961704, 0.85)));
  for (let e = 0.1; e < i; e += 0.22)
    n.box(t.x0, e, a - 0.005, t.x1, e + 0.02, a, 32);
  let o = t.doorX ?? t.x1 - 1;
  (n.setPaint(P(4860440, 0.6)),
    n.box(o - 0.5, 0, a - 0.06, o + 0.5, 2.15, a + 0.02),
    n.setPaint(t.open ? F(16042122, 1) : P(2761760, 0.3)),
    n.push(),
    n.translate(o, 1.45, a - 0.07),
    n.rotateX(Math.PI / 2),
    n.cylinder(0, 0, 0.18, 0.18, 0, 0.02, 12, !0),
    n.pop(),
    n.setPaint(P(13148234, 0.3, 0.9)),
    n.box(o + 0.32, 0.95, a - 0.12, o + 0.36, 1.2, a - 0.06));
  let s = t.x0 + 0.3,
    c = Math.min(o - 0.8, t.x0 + 2.6);
  (n.setPaint(P(5913122, 0.6)),
    n.box(s - 0.08, 0, a - 0.6, c + 0.08, 0.8, a),
    r.tex(e.atlas.r(t.samplesKey), 16777215, t.open ? 0.75 : 0.2),
    r.rectZ(s, 0.85, c, 1.85, a - 0.05, -1),
    r.col(16774368, t.open ? 0.8 : 0, 0.9),
    r.rectY(s, a - 0.55, c, a - 0.05, 0.82, 1),
    n.setPaint(P(13148234, 0.3, 0.8)),
    n.box(s - 0.05, 1.85, a - 0.62, c + 0.05, 1.92, a),
    e.box(s - 0.1, a - 0.62, c + 0.1, a, 0, 1.92),
    K(e, {
      x0: t.x0 + 0.1,
      x1: t.x1 - 0.1,
      y: i + 0.35,
      z: a - 0.02,
      out: 0.9,
      drop: 0.35,
      color: t.awningColor,
      key: t.awningKey,
    }));
  let l = Math.min(t.x1 - 0.4, o + 0.95);
  (n.setPaint(P(2763306, 0.5)),
    n.box(l - 0.22, 0, a - 0.9, l + 0.22, 0.12, a - 0.5),
    r.tex(e.atlas.r(t.standKey), 16777215, t.open ? 0.85 : 0),
    r.box(l - 0.2, 0.12, a - 0.88, l + 0.2, 1, a - 0.52, 55),
    e.box(l - 0.22, a - 0.9, l + 0.22, a - 0.5, 0, 1),
    e.box(t.x0, a, t.x1, a + 0.3, 0, i));
}
function fe(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z,
    a = (t.x0 + t.x1) / 2,
    o = Math.min(3.2, t.x1 - t.x0 - 1),
    s = a - o / 2,
    c = a + o / 2,
    l = 2.6;
  (n.setPaint(P(6978162, 0.6, 0.1)),
    n.box(t.x0, 0, i, s, 1.1, i + 0.2, 32),
    n.box(c, 0, i, t.x1, 1.1, i + 0.2, 32),
    n.setPaint(P(14867663, 0.9)),
    n.box(t.x0, 1.1, i, s, 3.8, i + 0.2, 32),
    n.box(c, 1.1, i, t.x1, 3.8, i + 0.2, 32),
    n.box(s, l, i, c, 3.8, i + 0.2, 32),
    B(e, {
      x0: s,
      x1: c,
      z: i + 0.02,
      h: l,
      depth: 2.6,
      light: 16773848,
      floor: 10127986,
    }),
    n.setPaint(P(9071172, 0.7)),
    n.box(s + 0.1, 0, i + 2, c - 0.1, 1.9, i + 2.55, 36),
    n.setPaint(P(5914664, 0.7)));
  for (let e = 1; e < 8; e++)
    n.box(
      s + 0.1 + ((o - 0.2) * e) / 8 - 0.01,
      0.1,
      i + 1.99,
      s + 0.1 + ((o - 0.2) * e) / 8 + 0.01,
      1.85,
      i + 2,
    );
  for (let e = 1; e < 5; e++)
    n.box(s + 0.1, 0.1 + e * 0.36, i + 1.99, c - 0.1, 0.12 + e * 0.36, i + 2);
  if (
    (t.open
      ? H(e, {
          x0: s + 0.1,
          x1: c - 0.1,
          y1: 2.58,
          z: i,
          len: 1.25,
          key: t.norenKey,
        })
      : q(e, { x0: s, x1: c, h: l, z: i + 0.02, color: 10133146 }),
    t.hood !== !1)
  ) {
    let t = 2.85,
      r = 1.1;
    (n.setPaint(P(5527644, 0.6, 0.2)),
      n.quad(
        [c + 0.5, t, i - r],
        [a, 3.75, i - r],
        [a, 3.75, i],
        [c + 0.5, t, i],
      ),
      n.quad(
        [a, 3.75, i - r],
        [s - 0.5, t, i - r],
        [s - 0.5, t, i],
        [a, 3.75, i],
      ),
      n.setPaint(P(3817026, 0.7)),
      n.quad(
        [s - 0.5, 2.8000000000000003, i - r],
        [a, 3.7, i - r],
        [a, 3.7, i],
        [s - 0.5, 2.8000000000000003, i],
      ),
      n.quad(
        [a, 3.7, i - r],
        [c + 0.5, 2.8000000000000003, i - r],
        [c + 0.5, 2.8000000000000003, i],
        [a, 3.7, i],
      ),
      n.setPaint(P(14209216, 0.8)),
      n.quad(
        [c + 0.45, 2.65, i - r - 0.02],
        [s - 0.45, 2.65, i - r - 0.02],
        [a, 3.55, i - r - 0.02],
        [a, 3.55, i - r - 0.02],
      ),
      n.setPaint(P(L.wood, 0.7)));
    for (let e of [s - 0.3, c + 0.3])
      n.box(e - 0.08, 0, i - r + 0.1, e + 0.08, t, i - r + 0.26);
    for (let n of [s - 0.3, c + 0.3]) e.circle(n, i - r + 0.18, 0.12, 0, t);
  }
  (W(e, {
    x0: a - 1.4,
    x1: a + 1.4,
    y0: 3.85,
    y1: 4.55,
    z: i - 0.05,
    key: t.signKey,
    depth: 0.12,
    frame: L.woodDark,
  }),
    r.tex(e.atlas.r(t.priceKey), 16777215, t.open ? 0.4 : 0),
    r.rectZ(c + 0.15, 1, c + 0.75, 1.85, i - 0.01, -1),
    e.box(t.x0, i, s, i + 0.3, 0, l),
    e.box(c, i, t.x1, i + 0.3, 0, l));
}
function pe(e, t, n, r, i) {
  let a = e.lm;
  (a.setPaint(P(12104358, 0.9)),
    a.cylinder(t, n, 0.85, 0.55, 0, r, 14, !0),
    a.setPaint(P(6974054, 0.8, 0.3)));
  for (let e of [r * 0.35, r * 0.62, r * 0.88])
    a.cylinder(
      t,
      n,
      0.75 - (e / r) * 0.3 + 0.08,
      0.75 - (e / r) * 0.3 + 0.08,
      e,
      e + 0.25,
      14,
      !1,
    );
  (a.setPaint(P(2763306, 0.9)),
    a.cylinder(t, n, 0.6, 0.6, r, r + 0.4, 14, !0),
    a.setPaint(P(5922402, 0.6, 0.5)),
    a.box(t + 0.62, 2, n - 0.15, t + 0.68, r - 1, n - 0.1),
    a.box(t + 0.62, 2, n + 0.1, t + 0.68, r - 1, n + 0.15),
    i &&
      (e.art.tex(e.atlas.r(i), 16777215, 0),
      e.art.rectZ(t - 0.35, r * 0.4, t + 0.35, r * 0.92, n - 0.72, -1)),
    e.circle(t, n, 0.9, 0, r));
}
