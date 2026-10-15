// tokyo/assets/region-tokyo-sites-kit-X3MRd0jr 05 — box
// Lines 1312-1646 of readable/tokyo/assets/region-tokyo-sites-kit-X3MRd0jr.pretty.js (statement-aligned).
function H(e, t) {
  let n = t.len ?? 0.9,
    r = e.lm,
    i = e.art;
  (r.setPaint(P(t.rod ?? L.woodDark, 0.6)),
    r.push(),
    r.translate(t.x0 - 0.1, t.y1 + 0.03, t.z - 0.08),
    r.rotateZ(-Math.PI / 2),
    r.cylinder(0, 0, 0.025, 0.025, 0, t.x1 - t.x0 + 0.2, 6, !0),
    r.pop());
  let a = e.atlas.r(t.key);
  (i.tex(a, 16777215, 0),
    i.quad(
      t.x1,
      t.y1 - n,
      t.z - 0.14,
      t.x0,
      t.y1 - n,
      t.z - 0.14,
      t.x0,
      t.y1,
      t.z - 0.08,
      t.x1,
      t.y1,
      t.z - 0.08,
      0,
      0,
      1,
      1,
    ),
    i.col(2762274, 0),
    i.quad(
      t.x0,
      t.y1 - n,
      t.z - 0.13,
      t.x1,
      t.y1 - n,
      t.z - 0.13,
      t.x1,
      t.y1,
      t.z - 0.07,
      t.x0,
      t.y1,
      t.z - 0.07,
    ));
}
function U(e, t) {
  let n = t.r ?? 0.22,
    r = t.h ?? 0.62,
    i = e.art;
  i.tex(e.atlas.r(t.key), 16777215, t.lit === !1 ? 0 : 1);
  let a = [
    n * 0.62,
    0,
    n * 0.92,
    r * 0.12,
    n,
    r * 0.5,
    n * 0.92,
    r * 0.88,
    n * 0.62,
    r,
  ];
  (i.push(), i.translate(t.x, t.y, t.z));
  let o = t.cell ? t.cell[0] / t.cell[1] : 0,
    s = t.cell ? (t.cell[0] + 1) / t.cell[1] : 1;
  (i.lathe(0, 0, a, e.q === `high` ? 12 : 8, s, o),
    i.pop(),
    i.col(1709072, 0),
    i.cyl(t.x, t.z, n * 0.62, n * 0.62, t.y - 0.04, t.y + 0.02, 8),
    i.cyl(t.x, t.z, n * 0.62, n * 0.62, t.y + r - 0.02, t.y + r + 0.05, 8),
    t.zWall !== void 0 &&
      (e.lm.setPaint(P(L.black, 0.6, 0.4)),
      e.lm.box(
        t.x - 0.015,
        t.y + r + 0.05,
        Math.min(t.z, t.zWall),
        t.x + 0.015,
        t.y + r + 0.09,
        Math.max(t.z, t.zWall),
      ),
      e.lm.box(
        t.x - 0.01,
        t.y + r + 0.05,
        t.z - 0.01,
        t.x + 0.01,
        t.y + r + 0.3,
        t.z + 0.01,
      )));
}
function W(e, t) {
  let n = t.depth ?? 0.25;
  if (
    (e.lm.setPaint(P(t.frame ?? L.black, 0.6, 0.2)),
    e.lm.box(
      t.x0 - 0.04,
      t.y0 - 0.04,
      t.z,
      t.x1 + 0.04,
      t.y1 + 0.04,
      t.z + n,
      31,
    ),
    t.cell)
  ) {
    X(
      e,
      t.key,
      t.cell[0],
      t.cell[1],
      t.cell[2],
      t.x0,
      t.y0,
      t.x1,
      t.y1,
      t.z - 0.02,
      t.lit ? (t.always ? 0.8 : 1) : 0,
    );
    return;
  }
  (e.art.tex(e.atlas.r(t.key), 16777215, t.lit ? (t.always ? 0.8 : 1) : 0),
    e.art.rectZ(t.x0, t.y0, t.x1, t.y1, t.z - 0.02, -1));
}
function ie(e, t) {
  let n = t.out ?? 0.75,
    r = t.thick ?? 0.18,
    i = t.z - n,
    a = t.z - 0.08;
  (e.lm.setPaint(P(L.black, 0.6, 0.3)),
    e.lm.box(
      t.x - r / 2,
      t.y0 - 0.05,
      i - 0.04,
      t.x + r / 2,
      t.y1 + 0.05,
      a,
      44,
    ),
    e.lm.setPaint(P(L.steel, 0.6, 0.5)),
    e.lm.box(t.x - 0.03, t.y1 - 0.1, a, t.x + 0.03, t.y1, t.z),
    e.lm.box(t.x - 0.03, t.y0, a, t.x + 0.03, t.y0 + 0.1, t.z));
  let o = +!!t.lit;
  (e.art.tex(e.atlas.r(t.key), 16777215, o),
    e.art.rectX(i, t.y0, a, t.y1, t.x + r / 2 + 0.01, 1),
    e.art.rectX(i, t.y0, a, t.y1, t.x - r / 2 - 0.01, -1));
}
function G(e, t) {
  let n = t.h ?? 0.95,
    r = t.w ?? 0.55,
    i = e.art;
  (i.push(),
    i.translate(t.x, 0, t.z),
    i.rotateY(-(t.rot ?? 0)),
    i.tex(e.atlas.r(t.key), 16777215, 0),
    i.quad(
      r / 2,
      0,
      -0.18,
      -r / 2,
      0,
      -0.18,
      -r / 2,
      n,
      -0.02,
      r / 2,
      n,
      -0.02,
      0,
      0,
      1,
      1,
    ),
    i.quad(
      -r / 2,
      0,
      0.18,
      r / 2,
      0,
      0.18,
      r / 2,
      n,
      0.02,
      -r / 2,
      n,
      0.02,
      0,
      0,
      1,
      1,
    ),
    i.col(4864554, 0),
    i.box(-r / 2 - 0.03, n - 0.04, -0.04, r / 2 + 0.03, n + 0.02, 0.04),
    i.pop(),
    t.collide !== !1 && e.circle(t.x, t.z, 0.32, 0, n));
}
function K(e, t) {
  let n = t.out ?? 1.2,
    r = t.drop ?? 0.45,
    i = e.art,
    a = t.z - n,
    o = t.y - r;
  if (
    (i.col(t.color, 0),
    i.quad(t.x1, o, a, t.x0, o, a, t.x0, t.y, t.z, t.x1, t.y, t.z),
    i.col(t.color, 0, 0.7),
    i.quad(t.x0, o, a, t.x1, o, a, t.x1, t.y, t.z, t.x0, t.y, t.z),
    t.stripe !== void 0)
  ) {
    let e = Math.max(2, Math.round((t.x1 - t.x0) / 0.5));
    i.col(t.stripe, 0);
    for (let n = 0; n < e; n += 2) {
      let r = t.x0 + ((t.x1 - t.x0) * n) / e,
        s = t.x0 + ((t.x1 - t.x0) * (n + 1)) / e;
      i.quad(
        s,
        o + 0.004,
        a - 0.004,
        r,
        o + 0.004,
        a - 0.004,
        r,
        t.y + 0.004,
        t.z - 0.004,
        s,
        t.y + 0.004,
        t.z - 0.004,
      );
    }
  }
  (t.key ? i.tex(e.atlas.r(t.key), 16777215, 0) : i.col(t.color, 0, 0.9),
    i.rectZ(t.x0, o - 0.32, t.x1, o, a, -1),
    i.col(t.color, 0, 0.6),
    i.rectX(a, o - 0.32, t.z, o, t.x0, -1),
    i.rectX(a, o - 0.32, t.z, o, t.x1, 1));
}
function q(e, t) {
  let n = e.lm;
  n.setPaint(P(t.color ?? 11054256, 0.55, 0.55));
  let r = Math.round(t.h / 0.09);
  for (let e = 0; e < r; e += 2)
    n.box(t.x0, (e * t.h) / r, t.z - 0.03, t.x1, ((e + 1) * t.h) / r, t.z, 32);
  n.setPaint(P((t.color ?? 11054256) - 1052688, 0.55, 0.55));
  for (let e = 1; e < r; e += 2)
    n.box(
      t.x0,
      (e * t.h) / r,
      t.z - 0.05,
      t.x1,
      ((e + 1) * t.h) / r,
      t.z - 0.02,
      36,
    );
  if (
    (n.setPaint(P(L.steel, 0.6, 0.5)),
    n.box(t.x0 - 0.05, t.h, t.z - 0.3, t.x1 + 0.05, t.h + 0.35, t.z),
    t.key)
  ) {
    e.art.tex(e.atlas.r(t.key), 16777215, 0);
    let n = (t.x0 + t.x1) / 2,
      r = Math.min(0.9, (t.x1 - t.x0) * 0.35);
    e.art.rectZ(n - r, t.h * 0.45, n + r, t.h * 0.45 + r * 0.8, t.z - 0.06, -1);
  }
}
function J(e, t) {
  let n = e.art;
  (n.push(),
    n.translate(t.x, 0, t.z),
    n.rotateY(-(t.rot ?? 0)),
    n.col(t.crate ?? 13116956, 0),
    n.box(-0.22, 0, -0.18, 0.22, 0.32, 0.18),
    n.box(-0.22, 0.32, -0.18, 0.22, 0.64, 0.18),
    n.col(9071172, 0),
    n.box(-0.45, 0.64, -0.32, 0.45, 0.68, 0.32));
  let r = t.stools ?? 3;
  for (let e = 0; e < r; e++) {
    let t = (e / r) * Math.PI * 2 + 0.4,
      i = Math.cos(t) * 0.62,
      a = Math.sin(t) * 0.55;
    (n.col(e % 2 ? 2775720 : 13116956, 0),
      n.box(i - 0.16, 0, a - 0.13, i + 0.16, 0.32, a + 0.13),
      n.col(9071172, 0),
      n.box(i - 0.18, 0.32, a - 0.15, i + 0.18, 0.35, a + 0.15));
  }
  (n.pop(), e.circle(t.x, t.z, 0.5, 0, 0.7));
}
function Y(e, t, n, r = 1) {
  let i = e.art;
  (i.col(6965810, 0),
    i.cyl(t, n, 0.2 * r, 0.16 * r, 0, 0.32 * r, 8),
    i.col(3828266, 0),
    i.sphere(t, 0.5 * r, n, 0.3 * r, 7, 5, 1.1),
    i.col(4880946, 0),
    i.sphere(t + 0.12 * r, 0.68 * r, n - 0.05, 0.2 * r, 6, 4));
}
function ae(e, t, n) {
  let r = e.art;
  (r.col(9080466, 0),
    r.cyl(t, n, 0.16, 0.16, 0, 0.5, 8, !1),
    r.col(15265006, 0));
  for (let e = 0; e < 4; e++)
    r.cyl(
      t + Math.cos(e * 1.6) * 0.06,
      n + Math.sin(e * 1.6) * 0.06,
      0.02,
      0.025,
      0.1,
      0.9,
      5,
      !1,
    );
}
function oe(e, t, n, r = 0, i = 9083560) {
  let a = e.art;
  (a.push(), a.translate(t, 0, n), a.rotateY(-r), a.col(1710618, 0));
  for (let e of [-0.55, 0.55])
    (a.push(),
      a.translate(0, 0.34, e),
      a.rotateZ(Math.PI / 2),
      a.cyl(0, 0, 0.34, 0.34, -0.02, 0.02, 10),
      a.pop());
  (a.col(i, 0),
    a.box(-0.02, 0.34, -0.5, 0.02, 0.4, 0.5),
    a.box(-0.02, 0.4, 0.1, 0.02, 0.85, 0.16),
    a.box(-0.02, 0.4, -0.45, 0.02, 1, -0.4),
    a.col(2763306, 0),
    a.box(-0.1, 0.86, 0.06, 0.1, 0.92, 0.26),
    a.box(-0.28, 0.98, -0.45, 0.28, 1.02, -0.41),
    a.col(10133670, 0),
    a.box(-0.16, 0.78, -0.72, 0.16, 0.98, -0.5),
    a.pop());
}
function se(e, t) {
  (e.lm.setPaint(P(t.color ?? 10131086, 0.9)),
    e.lm.box(t.x0, -0.2, t.z0, t.x1, t.y ?? 0.02, t.z1, 55));
}
