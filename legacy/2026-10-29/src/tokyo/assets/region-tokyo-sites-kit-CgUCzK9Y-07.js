// tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y 07 — box
// Lines 1944-2255 of readable/tokyo/assets/region-tokyo-sites-kit-CgUCzK9Y.pretty.js (statement-aligned).
function me(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z;
  if (
    (W(e, {
      x0: t.x0,
      x1: t.x1,
      y0: 3,
      y1: 3.65,
      z: i - 0.05,
      key: t.signKey,
      depth: 0.15,
      frame: 3815994,
      lit: !0,
      cell: t.signCell,
    }),
    K(e, {
      x0: t.x0 + 0.05,
      x1: t.x1 - 0.05,
      y: 2.95,
      z: i - 0.02,
      out: 1.4,
      drop: 0.5,
      color: t.awning,
      stripe: t.stripe,
    }),
    !t.open)
  ) {
    (q(e, { x0: t.x0 + 0.1, x1: t.x1 - 0.1, h: 2.8, z: i + 0.02 }),
      e.box(t.x0, i, t.x1, i + 0.3, 0, 2.5));
    return;
  }
  (B(e, {
    x0: t.x0 + 0.1,
    x1: t.x1 - 0.1,
    z: i + 0.02,
    h: 2.8,
    depth: 3,
    light: 16052454,
    floor: 6975606,
  }),
    n.setPaint(P(5925494, 0.5, 0.3)),
    n.box(t.x0 + 0.2, 0, i - 0.75, t.x1 - 0.2, 0.75, i + 0.25));
  let a = Math.max(2, Math.round((t.x1 - t.x0 - 0.4) / 0.62));
  for (let n = 0; n < a; n++) {
    let o = t.x0 + 0.22 + ((t.x1 - t.x0 - 0.44) * n) / a,
      s = o + (t.x1 - t.x0 - 0.44) / a - 0.04;
    if (
      (t.kind === `fish` &&
        (r.col(16053488, 0),
        r.box(o, 0.75, i - 0.7, s, 0.95, i + 0.1, 59),
        r.col(14543084, 0),
        r.rectY(o + 0.02, i - 0.68, s - 0.02, i + 0.08, 0.93, 1)),
      r.tex(e.atlas.r(t.goodsKey), 16777215, 0),
      r.rectY(
        o + 0.04,
        i - 0.66,
        s - 0.04,
        i + 0.06,
        t.kind === `fish` ? 0.94 : 0.77,
        1,
      ),
      t.cardKey)
    ) {
      let [a, s, c, l] = A(n, 4, 2);
      (r.tex(e.atlas.r(t.cardKey), 16777215, 0),
        r.rectZ(o + 0.05, 0.98, o + 0.3, 1.22, i - 0.72, -1, a, s, c, l));
    }
  }
  n.setPaint(F(16771256, 3));
  for (let e = 0; e < Math.max(2, Math.floor((t.x1 - t.x0) / 1.6)); e++) {
    let r = t.x0 + 0.8 + e * 1.6;
    (n.sphere(r, 2.35, i - 0.8, 0.06, 6, 4),
      n.setPaint(P(1710618, 0.8)),
      n.box(r - 0.005, 2.4, i - 0.805, r + 0.005, 2.75, i - 0.795),
      n.setPaint(F(16771256, 3)));
  }
  e.box(t.x0 + 0.2, i - 0.75, t.x1 - 0.2, i + 0.25, 0, 0.95);
}
function he(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.z;
  (n.setPaint(P(15921386, 0.6)),
    n.box(t.x0, 0, i - 0.6, t.x1, 3.4, i, 63),
    W(e, {
      x0: t.x0 + 0.05,
      x1: t.x1 - 0.05,
      y0: 2.6,
      y1: 3.35,
      z: i - 0.62,
      key: t.signKey,
      lit: !0,
      depth: 0.1,
      frame: 13116956,
    }));
  let a = (t.x1 - t.x0 - 0.3) / t.windows;
  for (let o = 0; o < t.windows; o++) {
    let s = t.x0 + 0.15 + o * a,
      l = s + a - 0.12;
    (n.setPaint(P(13116956, 0.5)),
      n.box(s, 0.95, i - 0.75, l, 1.02, i - 0.6),
      r.tex(e.atlas.r(t.windowKey), 16777215, t.open ? 0.75 : 0));
    let [u, d, f, p] = A(o, 4, 2);
    (r.rectZ(s + 0.02, 1.05, l - 0.02, 2.2, i - 0.61, -1, u, d, f, p),
      t.open &&
        c(e, {
          x: (s + l) / 2,
          z: i - 0.35,
          rot: 0,
          pose: `stand`,
          palette: `office`,
          scale: 0.95,
        }));
  }
  (e.box(t.x0, i - 0.75, t.x1, i, 0, 3.4),
    t.queue &&
      t.open &&
      l(e, {
        path: t.queue.path,
        people: t.queue.people,
        palette: `casual`,
        spacing: 0.8,
      }));
}
function ge(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 2.4,
    a = t.side < 0 ? t.x0 : t.x1,
    o = t.z0,
    s = 0;
  for (; o < t.z1 - 1.2;) {
    let l = 1.3 + ((s * 37) % 5) * 0.12,
      u = o,
      d = Math.min(t.z1, o + l);
    (r.tex(
      e.atlas.r(t.drawersKey),
      [16777215, 15791359, 16774376][s % 3],
      t.open ? 0.25 : 0,
    ),
      r.rectX(
        u + 0.05,
        0.3,
        d - 0.05,
        i - 0.1,
        a + t.side * 0.02,
        t.side < 0 ? 1 : -1,
      ),
      n.setPaint(P(s % 2 ? 14212319 : 12633288, 0.5, 0.3)));
    let f = a - t.side * 1,
      p = a - t.side * 0.55;
    (n.box(Math.min(f, p), 0, u + 0.05, Math.max(f, p), 0.95, d - 0.05),
      n.setPaint(P(12112092, 0.05, 0.4)),
      n.box(Math.min(f, p), 0.95, u + 0.05, Math.max(f, p), 1, d - 0.05, 4),
      r.tex(e.atlas.r(t.tagsKey), 16777215, 0));
    let [m, h, g, _] = A(s, 4, 2);
    (r.rectX(
      u + 0.2,
      0.45,
      d - 0.2,
      0.9,
      Math.min(f, p) * (t.side < 0 ? 0 : 1) +
        Math.max(f, p) * +(t.side < 0) +
        (t.side < 0 ? 0.01 : -0.01),
      t.side < 0 ? 1 : -1,
      m,
      h,
      g,
      _,
    ),
      t.open
        ? (n.setPaint(F(15791871, 2.5)),
          n.box(
            Math.min(a, a - t.side * 0.8),
            i - 0.05,
            (u + d) / 2 - 0.5,
            Math.max(a, a - t.side * 0.8) - 0.6,
            i,
            (u + d) / 2 + 0.5,
            8,
          ),
          s % 3 == 1 &&
            c(e, {
              x: a - t.side * 0.3,
              z: (u + d) / 2,
              rot: t.side < 0 ? Math.PI / 2 : -Math.PI / 2,
              pose: `stand`,
              palette: `elder`,
            }))
        : (r.col(6978186, 0),
          r.rectX(
            u + 0.05,
            0,
            d - 0.05,
            1,
            Math.min(f, p) + (t.side < 0 ? 0.48 : -0.03),
            t.side < 0 ? 1 : -1,
          )),
      e.box(Math.min(a, f), u, Math.max(a, f), d, 0, 1),
      (o = d),
      s++);
  }
}
function* _e(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.h ?? 7.6,
    a = t.z,
    o = t.x1 - t.x0,
    s = (t.x0 + t.x1) / 2;
  (n.setPaint(P(t.body ?? 1973802, 0.25, 0.4)),
    n.box(t.x0, 3.4, a - 0.3, t.x1, i, a, 39),
    n.setPaint(P(t.trim ?? 13148210, 0.3, 0.85)),
    n.box(t.x0 - 0.05, i, a - 0.4, t.x1 + 0.05, i + 0.25, a + 0.05),
    n.box(t.x0 - 0.05, 3.25, a - 0.45, t.x1 + 0.05, 3.45, a + 0.05),
    n.setPaint(F(16726618, 2.4, !0)),
    n.box(t.x0 + 0.05, i - 0.12, a - 0.42, t.x1 - 0.05, i - 0.04, a - 0.38, 32),
    n.setPaint(F(3856639, 2.4, !0)),
    n.box(t.x0 + 0.05, 3.5, a - 0.42, t.x1 - 0.05, 3.58, a - 0.38, 32));
  for (let e of [t.x0 + 0.15, t.x1 - 0.25])
    (n.setPaint(F(16765498, 2.2, !0)),
      n.box(e, 0.3, a - 0.42, e + 0.1, i - 0.2, a - 0.36, 32));
  let c = Math.min(o * 0.86, 14);
  (n.setPaint(P(L.black, 0.5, 0.3)),
    n.box(
      s - c / 2 - 0.1,
      i - 2.9,
      a - 0.7,
      s + c / 2 + 0.1,
      i - 0.4,
      a - 0.3,
      47,
    ),
    r.tex(e.atlas.r(t.name), 16777215, 0.85),
    r.rectZ(s - c / 2, i - 2.8, s + c / 2, i - 0.5, a - 0.72, -1));
  let l = Math.min(o * 0.8, 12);
  (n.setPaint(P(657930, 0.4, 0.2)),
    n.box(s - l / 2 - 0.08, 3.62, a - 0.55, s + l / 2 + 0.08, 4.62, a - 0.3),
    r.tex(e.atlas.r(t.led), 16777215, t.open ? 0.9 : 0),
    r.rectZ(s - l / 2, 3.68, s + l / 2, 4.56, a - 0.56, -1),
    yield,
    n.setPaint(P(2763312, 0.3, 0.5)),
    n.box(t.x0, 0, a - 0.2, t.x0 + 0.5, 3.3, a + 0.2),
    n.box(t.x1 - 0.5, 0, a - 0.2, t.x1, 3.3, a + 0.2),
    n.setPaint(P(15263980, 0.35, 0.3)),
    n.box(t.x0 + 0.5, 3, a - 1.6, t.x1 - 0.5, 3.25, a, 63),
    n.setPaint(F(16777215, 1.8, !0)));
  for (let e = t.x0 + 1.2; e < t.x1 - 1; e += 1.4)
    n.box(e, 2.98, a - 1.2, e + 0.5, 3, a - 0.8, 8);
  let u = t.x0 + 0.5,
    d = t.x1 - 0.5;
  (r.tex(e.atlas.r(t.hall ?? t.led), 16777215, t.open ? 0.7 : 0),
    r.rectZ(u, 0.02, d, 2.95, a + 3, -1),
    r.col(t.open ? 16054015 : 4211272, t.open ? 0.75 : 0, 0.9),
    r.rectX(a, 0, a + 3, 2.95, u, 1),
    r.rectX(a, 0, a + 3, 2.95, d, -1),
    r.rectY(u, a, d, a + 3, 2.95, -1),
    r.col(9054762, 0),
    r.rectY(u, a, d, a + 3, 0.02, 1),
    n.setPaint(P(L.alu, 0.3, 0.8)));
  let f = Math.max(2, Math.round((d - u) / 1.9));
  for (let e = 0; e <= f; e++) {
    let t = u + ((d - u) * e) / f;
    n.box(t - 0.05, 0, a - 0.05, t + 0.05, 2.95, a + 0.05);
  }
  (n.box(u, 2.4, a - 0.05, d, 2.5, a + 0.05),
    e.box(t.x0, a - 0.2, t.x1, a + 0.3, 0, 3.3),
    yield);
  let p = t.kerb ?? a - 2.2;
  if (t.nobori && t.open) {
    let i = t.nobori.n ?? Math.max(3, Math.floor(o / 2.2));
    for (let a = 0; a < i; a++) {
      let s = t.x0 + 0.8 + ((o - 1.6) * a) / Math.max(1, i - 1);
      (n.setPaint(P(14211288, 0.4, 0.6)),
        n.cylinder(s, p, 0.025, 0.025, 0, 2.6, 5, !0),
        n.setPaint(P(4210752, 0.6)),
        n.cylinder(s, p, 0.2, 0.22, 0, 0.12, 8, !0));
      let [c, l, u, d] = A(a, t.nobori.cols, t.nobori.rows);
      (r.tex(e.atlas.r(t.nobori.key), 16777215, 0),
        r.rectZ(s, 0.8, s + 0.45, 2.5, p, -1, c, l, u, d),
        r.rectZ(s, 0.8, s + 0.45, 2.5, p + 0.01, 1, u, l, c, d),
        e.circle(s, p, 0.2, 0, 2.6));
    }
  }
  if (t.hanawa && t.grand)
    for (let i = 0; i < t.hanawa.n; i++) {
      let s = t.x0 + 1 + ((o - 2) * (i + 0.5)) / t.hanawa.n,
        c = a - 1;
      n.setPaint(P(15262940, 0.6));
      for (let [e, t] of [
        [-0.35, 0.2],
        [0.35, 0.2],
        [0, -0.35],
      ])
        n.box(
          s + e - 0.02,
          0,
          c + t - 0.02,
          s + e * 0.2 + 0.02,
          1.6,
          c + t * 0.2 + 0.02,
        );
      (r.tex(e.atlas.r(t.hanawa.key), 16777215, 0),
        r.rectZ(s - 0.7, 1.4, s + 0.7, 2.8, c - 0.02, -1),
        r.rectZ(s - 0.7, 1.4, s + 0.7, 2.8, c + 0.02, 1),
        e.circle(s, c, 0.4, 0, 2.8));
    }
}
var ve = 3.9,
  Z = (e) => ve + 2.0000000000000004 * Math.sqrt(Math.max(0, 1 - e * e));
