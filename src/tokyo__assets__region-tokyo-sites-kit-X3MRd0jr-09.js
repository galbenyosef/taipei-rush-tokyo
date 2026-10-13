// tokyo__assets__region-tokyo-sites-kit-X3MRd0jr 09 — box
// Lines 2441-2777 of readable/tokyo__assets__region-tokyo-sites-kit-X3MRd0jr.pretty.js (statement-aligned).
function* be(e, t) {
  let n = e.lm,
    r = e.art,
    i = t.barD ?? 3.2,
    a = t.gH ?? 2.6,
    o = t.uH ?? 2.5,
    s = t.palette ?? [6965810, 3814448, 9071178, 4864558, 8018490, 5917248],
    c = e.rng.fork(28864);
  (n.setPaint(P(7828332, 0.95)),
    n.box(t.x0, -0.2, t.z0, t.x1, 0.02, t.z1, 4),
    n.setPaint(P(5591628, 0.9)),
    n.box(
      (t.x0 + t.x1) / 2 - 0.12,
      -0.2,
      t.z0,
      (t.x0 + t.x1) / 2 + 0.12,
      0.025,
      t.z1,
      4,
    ),
    e.floor(t.x0, t.z0, t.x1, t.z1, 0));
  let l = 0,
    u = 0,
    d = 0;
  for (let f of t.sides ?? [-1, 1]) {
    let p = f < 0 ? t.x0 : t.x1,
      m = p + f * i;
    (n.setPaint(P(7235164, 0.9)),
      n.box(Math.min(p, m), a + o, t.z0, Math.max(p, m), a + o + 0.3, t.z1, 4),
      e.box(Math.min(p, m), t.z0, Math.max(p, m), t.z1, 0, a + o + 0.3));
    let h = t.z0;
    for (; h < t.z1 - 1.6;) {
      let i = Math.min(t.z1 - h, 2.2 + c.next() * 1.2),
        m = h,
        g = h + i,
        _ = (m + g) / 2,
        v = s[Math.floor(c.next() * s.length)];
      n.setPaint(P(v, 0.85));
      let y = p,
        b = f < 0 ? 1 : 2;
      (n.box(
        Math.min(y, y + f * 0.12),
        0,
        m,
        Math.max(y, y + f * 0.12),
        a + o,
        m + 0.14,
      ),
        n.box(
          Math.min(y, y + f * 0.12),
          a - 0.35,
          m,
          Math.max(y, y + f * 0.12),
          a,
          g,
        ),
        n.setPaint(P(v + 657930 > 16777215 ? v : v + 526344, 0.85)),
        n.box(
          Math.min(y, y + f * 0.1),
          a,
          m,
          Math.max(y, y + f * 0.1),
          a + o,
          g,
          b | 4,
        ),
        n.setPaint(c.next() < 0.5 ? F(16046240, 1.4) : P(2764854, 0.2, 0.4)));
      let x = m + i * 0.25,
        S = g - i * 0.25;
      f < 0
        ? n.box(y + 0.1, a + 0.7, x, y + 0.12, a + 1.8, S, 1)
        : n.box(y - 0.12, a + 0.7, x, y - 0.1, a + 1.8, S, 2);
      let C = y - f * 0.02;
      if (t.open) {
        (r.col(16176800, 0.85, 1.05),
          r.rectX(
            m + 0.15,
            0.02,
            g - 0.15,
            a - 0.38,
            y + f * 0.6,
            f < 0 ? 1 : -1,
          ),
          n.setPaint(P(L.woodDark, 0.7)));
        for (let e of [m + 0.15, g - 0.2])
          n.box(
            Math.min(C, C + f * 0.06),
            0,
            e,
            Math.max(C, C + f * 0.06),
            a - 0.35,
            e + 0.05,
          );
        r.col(c.next() < 0.5 ? 2767450 : 8002068, 0);
        let e = m + 0.2,
          t = g - 0.2,
          i = a - 0.4;
        f < 0
          ? r.quad(
              C + 0.14,
              i - 0.75,
              t,
              C + 0.14,
              i - 0.75,
              e,
              C + 0.1,
              i,
              e,
              C + 0.1,
              i,
              t,
            )
          : r.quad(
              C - 0.14,
              i - 0.75,
              e,
              C - 0.14,
              i - 0.75,
              t,
              C - 0.1,
              i,
              t,
              C - 0.1,
              i,
              e,
            );
      } else
        (n.setPaint(P(10132632, 0.55, 0.5)),
          n.box(
            Math.min(C, C + f * 0.04),
            0,
            m + 0.1,
            Math.max(C, C + f * 0.04),
            a - 0.36,
            g - 0.1,
          ));
      let [w, T, E, D] = A(l++, t.names.cols, t.names.rows);
      if (
        (r.tex(e.atlas.r(t.names.key), 16777215, +!!t.open),
        r.rectX(
          m + 0.12,
          a - 0.33,
          g - 0.12,
          a - 0.02,
          y - f * 0.04,
          f < 0 ? 1 : -1,
          w,
          T,
          E,
          D,
        ),
        U(e, {
          x: y - f * 0.42,
          y: a - 0.98,
          z: m + 0.38,
          r: 0.2,
          h: 0.56,
          key: t.lanterns.key,
          cell: [u++ % t.lanterns.n, t.lanterns.n],
          zWall: void 0,
          lit: t.open,
        }),
        n.setPaint(P(L.black, 0.6, 0.4)),
        n.box(
          Math.min(y, y - f * 0.42),
          a - 0.4,
          m + 0.36,
          Math.max(y, y - f * 0.42),
          a - 0.37,
          m + 0.4,
        ),
        t.menus)
      ) {
        let [n, i, a, o] = A(d++, t.menus.cols, t.menus.rows);
        (r.tex(e.atlas.r(t.menus.key), 16777215, t.open ? 0.6 : 0),
          r.rectX(
            g - 0.62,
            1,
            g - 0.18,
            1.6,
            y - f * 0.05,
            f < 0 ? 1 : -1,
            n,
            i,
            a,
            o,
          ));
      }
      (t.open &&
        c.next() < 0.45 &&
        Math.abs(t.x1 - t.x0) > 2.2 &&
        J(e, {
          x: y - f * 0.75,
          z: _,
          stools: 2,
          crate: c.next() < 0.5 ? 13116956 : 14721562,
        }),
        c.next() < 0.5 && z(e, y - f * 0.25, a + 0.25, _),
        (h = g));
    }
    yield;
  }
  n.setPaint(P(1842204, 0.8));
  for (let e = t.z0 + 1.5; e < t.z1; e += 2.6 + c.next() * 1.5)
    n.box(
      t.x0,
      a + o - 0.6 - c.next() * 0.4,
      e,
      t.x1,
      a + o - 0.58 - c.next() * 0.4,
      e + 0.03,
    );
  if (t.canopy) {
    n.setPaint(P(10133664, 0.5, 0.5));
    for (let e = t.z0 + 0.2; e < t.z1; e += 0.5)
      n.box(
        t.x0 - 0.1,
        a + o - 0.15 + ((e * 4) % 1) * 0.02,
        e,
        t.x1 + 0.1,
        a + o - 0.12,
        e + 0.25,
        12,
      );
  }
  if (t.gate) {
    let i = t.gate.h ?? a + 0.9;
    (n.setPaint(P(L.black, 0.6, 0.4)),
      n.box(
        t.x0 - 0.05,
        i - 0.05,
        t.z0 - 0.25,
        t.x1 + 0.05,
        i + 0.75,
        t.z0 - 0.05,
        31,
      ),
      r.tex(e.atlas.r(t.gate.key), 16777215, 1),
      r.rectZ(t.x0, i, t.x1, i + 0.7, t.z0 - 0.26, -1));
  }
}
var Q = 11052186,
  $ = 9078396,
  xe = 14207114,
  Se = 14173482;
function Ce(e, t) {
  let n = e.lm,
    r = t.color ?? 14173482,
    i = t.span * 0.055 + 0.08;
  (n.push(), n.translate(t.x, 0, t.z), t.rot && n.rotateY(-t.rot));
  let a = t.span / 2;
  n.setPaint(P(L.black, 0.6, 0.2));
  for (let e of [-1, 1])
    n.cylinder(e * a, 0, i * 1.25, i * 1.2, 0, 0.55, 12, !0);
  n.setPaint(P(r, 0.55));
  for (let e of [-1, 1])
    n.cylinder(e * a, 0, i, i * 0.92, 0.5, t.h - 0.25, 12, !1);
  let o = t.h * 0.72;
  if (
    (n.box(-a - i * 2.2, o, -i * 0.45, a + i * 2.2, o + i * 1.1, i * 0.45),
    (t.kind ?? `myojin`) === `myojin`)
  ) {
    (n.box(-a - i * 3.2, t.h - 0.3, -i * 0.7, a + i * 3.2, t.h - 0.05, i * 0.7),
      n.setPaint(P(L.black, 0.5, 0.2)),
      n.box(
        -a - i * 3.6,
        t.h - 0.05,
        -i * 0.85,
        a + i * 3.6,
        t.h + 0.22,
        i * 0.85,
      ));
    for (let e of [-1, 1])
      (n.push(),
        n.translate(e * (a + i * 3.6), t.h + 0.08, 0),
        n.rotateZ(e * 0.22),
        n.box(-i * 1.6, -0.1, -i * 0.85, i * 1.6, 0.18, i * 0.85),
        n.pop());
    if (
      (n.setPaint(P(r, 0.55)),
      n.box(-i * 0.6, o + i * 1.1, -i * 0.4, i * 0.6, t.h - 0.3, i * 0.4),
      t.gaku)
    ) {
      n.setPaint(P(L.black, 0.5));
      let r = Math.min(0.9, t.h - 0.3 - o - i * 1.1 - 0.1);
      (n.box(
        -i * 1.4,
        o + i * 1.2,
        -i * 0.55,
        i * 1.4,
        o + i * 1.2 + r,
        -i * 0.4,
      ),
        e.art.tex(e.atlas.r(t.gaku), 16777215, 0),
        e.art.rectZ(
          -i * 1.25,
          o + i * 1.25,
          i * 1.25,
          o + i * 1.2 + r - 0.05,
          -i * 0.56,
          -1,
        ));
    }
  } else
    n.box(-a - i * 2, t.h - 0.25, -i * 0.7, a + i * 2, t.h + 0.05, i * 0.7);
  n.pop();
  let s = Math.cos(t.rot ?? 0),
    c = Math.sin(t.rot ?? 0);
  for (let n of [-1, 1])
    e.circle(t.x + n * a * s, t.z + n * a * c, i * 1.3, 0, t.h);
}
function we(e, t, n, r, i = `a`) {
  let a = e.lm;
  (a.push(),
    a.translate(t, 0, n),
    a.rotateY(-r),
    a.setPaint(P($, 0.9)),
    a.box(-0.45, 0, -0.55, 0.45, 0.5, 0.55),
    a.setPaint(P(Q, 0.9)),
    a.box(-0.38, 0.5, -0.48, 0.38, 1.05, 0.48),
    a.box(-0.42, 1.05, -0.52, 0.42, 1.12, 0.52),
    a.setPaint(P(10131084, 0.92)),
    a.box(-0.24, 1.12, 0, 0.24, 1.5, 0.38));
  for (let e of [-0.15, 0.15])
    a.box(e - 0.07, 1.12, -0.32, e + 0.07, 1.62, -0.18);
  (a.box(-0.2, 1.4, -0.3, 0.2, 1.85, 0.1),
    a.sphere(0, 2, -0.18, 0.21, 8, 6),
    a.box(-0.12, 1.92, -0.42, 0.12, 2.04, -0.28),
    i === `a` &&
      (a.setPaint(P(5920334, 0.9)),
      a.box(-0.08, 1.9, -0.43, 0.08, 1.93, -0.36)),
    a.setPaint(P(9341568, 0.92)),
    a.sphere(0, 2.04, -0.08, 0.24, 7, 5, a.p, 0.9),
    a.box(-0.1, 1.5, 0.3, 0.1, 1.95, 0.42),
    a.pop(),
    e.box(t - 0.5, n - 0.6, t + 0.5, n + 0.6, 0, 2.2));
}
