// tokyo/assets/actors-qKVitB-C 102 — add
// Lines 47392-47684 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function fT(e, t, n, r, i, a, o, s, c) {
  let l = e.lod === 0 ? 8 : e.lod === 1 ? 4 : 2,
    u = e.lod === 0 ? 4 : e.lod === 1 ? 2 : 1,
    d = [],
    f = [],
    p = [],
    m = (t, n, s) => {
      let c = r + ((i - r) * t) / l,
        p = a + ((o - a) * n) / u;
      return (
        e.prof.point(c, p, s, tT),
        d.push(tT.x, tT.y, tT.z),
        f.push(1 - t / l, n / u),
        d.length / 3 - 1
      );
    },
    h = [];
  for (let e = 0; e <= u; e++) {
    h.push([]);
    for (let t = 0; t <= l; t++) h[e].push(m(t, e, s));
  }
  for (let e = 0; e < u; e++)
    for (let t = 0; t < l; t++) {
      let n = h[e][t],
        r = h[e][t + 1],
        i = h[e + 1][t],
        a = h[e + 1][t + 1];
      p.push(n, i, r, r, i, a);
    }
  let g = new pe();
  if (
    (g.setAttribute(`position`, new j(d, 3)),
    g.setAttribute(`uv`, new j(f, 2)),
    g.setIndex(p),
    g.computeVertexNormals(),
    t.add(g, n, c),
    s > 0.006)
  ) {
    let d = [],
      f = [],
      p = [];
    for (let e = 0; e <= l; e++) p.push([e, 0]);
    for (let e = 1; e <= u; e++) p.push([l, e]);
    for (let e = l - 1; e >= 0; e--) p.push([e, u]);
    for (let e = u - 1; e >= 1; e--) p.push([0, e]);
    for (let [t, n] of p) {
      let c = r + ((i - r) * t) / l,
        f = a + ((o - a) * n) / u;
      (e.prof.point(c, f, s, tT),
        d.push(tT.x, tT.y, tT.z),
        e.prof.point(c, f, 0.002, tT),
        d.push(tT.x, tT.y, tT.z));
    }
    let m = p.length;
    for (let e = 0; e < m; e++) {
      let t = e * 2,
        n = ((e + 1) % m) * 2;
      f.push(t, n, t + 1, n, n + 1, t + 1);
    }
    let h = new pe();
    (h.setAttribute(`position`, new j(d, 3)),
      h.setIndex(f),
      h.computeVertexNormals(),
      t.add(h, n, { ...c, color: c.rim ?? c.color, decal: void 0 }));
  }
}
function pT(e, t) {
  return (
    iT.setFromUnitVectors(sT, e.foreDirR),
    rT.compose(e.palmR, iT, oT),
    t.applyMatrix4(rT),
    t
  );
}
function mT(e, t) {
  return (
    iT.setFromUnitVectors(sT, e.foreDirL),
    rT.compose(e.palmL, iT, oT),
    t.applyMatrix4(rT),
    t
  );
}
var hT = (e, t, n, r, i = 0, a = 0, o = 0) => (
  i && e.rotateX(i),
  a && e.rotateY(a),
  o && e.rotateZ(o),
  e.translate(t, n, r),
  e
);
function gT(e, t, n) {
  let r = t.lod === 0;
  (t.lod < 2 &&
    e.add(pT(t, hT(Q(0.03, 0.036, 0.1), 0, 0, 0.035, -0.18)), n, {
      color: Z.gunDark,
      kind: $w.gloss,
      rough: 0.5,
    }),
    e.add(pT(t, hT(Q(0.032, 0.19, 0.036), 0, -0.058, -0.035)), n, {
      color: Z.gun,
      kind: $w.metal,
      rough: 0.38,
    }),
    r &&
      (e.add(pT(t, hT(Q(0.012, 0.03, 0.028), 0, -0.02, 0.01)), n, {
        color: Z.gunDark,
        kind: $w.gloss,
        rough: 0.5,
      }),
      e.add(pT(t, hT(uT(0.006, 0.006, 0.012, 6), 0, -0.155, -0.035)), n, {
        color: 657931,
        kind: $w.metal,
        rough: 0.3,
      })));
}
function _T(e, t, n) {
  let r = t.lod === 0,
    i = (r, i) => e.add(pT(t, r), n, i),
    a = { color: Z.rifle, kind: $w.gloss, rough: 0.45 },
    o = { color: Z.rifleFurn, kind: $w.gloss, rough: 0.6 },
    s = t.lod === 2;
  (s || i(hT(Q(0.034, 0.05, 0.085), 0, 0, 0.03, -0.25), o),
    i(hT(Q(0.045, s ? 0.5 : 0.36, 0.07), 0, s ? -0.17 : -0.1, -0.045), a),
    i(hT(Q(0.04, 0.05, 0.12), 0, -0.07, 0.035, 0.12), a),
    s || i(hT(uT(0.011, 0.011, 0.22, 6), 0, -0.38, -0.05), a),
    i(hT(Q(0.04, 0.22, 0.06), 0, 0.17, -0.02), o),
    s || i(hT(Q(0.024, 0.06, 0.03), 0, -0.04, -0.095), a),
    r &&
      (i(hT(Q(0.05, 0.05, 0.075), 0, 0.29, -0.01), o),
      i(hT(uT(0.014, 0.014, 0.05, 8), 0, -0.2, -0.095, 0, 0, 0), {
        color: Z.gunDark,
        kind: $w.metal,
        rough: 0.3,
      })));
}
function vT(e, t) {
  if (e.lod === 2) return;
  let n = e.lod === 0,
    r = { color: Z.metal, kind: $w.metal, rough: 0.28 },
    i = () => new M(0.03, n ? 0.0055 : 0.007, n ? 5 : 3, n ? 14 : 7);
  (t.add(mT(e, hT(i(), 0, -0.035, -0.02, 0, Math.PI / 2, 0)), `cuffs`, r),
    t.add(
      mT(e, hT(i(), 0.004, -0.112, -0.03, 0.35, Math.PI / 2, 0)),
      `cuffs`,
      r,
    ),
    n &&
      t.add(
        mT(e, hT(Q(0.008, 0.02, 0.008), 0.002, -0.074, -0.025)),
        `cuffs`,
        r,
      ));
}
function yT(e, t, n = null, r = null) {
  let i = e.H,
    a = e.lod === 0,
    o = 0.575 * i,
    s = e.prof,
    c = (e, t = 0.5) => ({ color: e, kind: $w.gloss, rough: t });
  if ((dT(e, t, `hips`, o, 0.052, 0.011, c(Z.belt, 0.55)), e.lod === 2)) {
    (t.add(
      lT(e, Q(0.055, 0.15, 0.06), 1.95, o, o - 0.05, 0.042, 0.06),
      `hips`,
      c(Z.leather, 0.42),
    ),
      t.add(
        lT(e, Q(0.03, 0.07, 0.042), 1.9, o, o + 0.05, 0.05, -0.28),
        `holster`,
        c(Z.gunDark, 0.5),
      ),
      t.add(
        cT(e, Q(0.056, 0.105, 0.032), 0.5, 0.76 * i, 0.02),
        `chest`,
        c(Z.radio, 0.5),
      ),
      r && TT(e, t, null),
      gT(t, e, `pistol`));
    return;
  }
  t.add(lT(e, Q(0.058, 0.04, 0.012), 0, o, o, 0.017), `hips`, {
    color: Z.metal,
    kind: $w.gloss,
    rough: 0.28,
  });
  let l = 1.95;
  (t.add(
    lT(e, Q(0.055, 0.15, 0.06), l, o, o - 0.05, 0.042, 0.06),
    `hips`,
    c(Z.leather, 0.42),
  ),
    t.add(
      lT(e, Q(0.05, 0.03, 0.05), l, o, o + 0.012, 0.05),
      `hips`,
      c(Z.leather, 0.42),
    ),
    t.add(
      lT(e, Q(0.03, 0.07, 0.042), 1.9, o, o + 0.05, 0.05, -0.28),
      `holster`,
      c(Z.gunDark, 0.5),
    ),
    t.add(
      lT(e, Q(0.055, 0.075, 0.032), -0.8, o, o - 0.018, 0.026),
      `hips`,
      c(Z.leather),
    ),
    t.add(
      lT(e, Q(0.075, 0.062, 0.04), 2.55, o, o - 0.01, 0.03),
      `hips`,
      c(Z.leather),
    ),
    t.add(
      lT(e, uT(0.017, 0.015, 0.25, a ? 10 : 6), -1.62, o, o - 0.1, 0.032, 0.05),
      `hips`,
      c(987154, 0.35),
    ),
    t.add(
      lT(e, Q(0.04, 0.045, 0.03), -1.62, o, o, 0.025),
      `hips`,
      c(Z.leather),
    ),
    t.add(
      lT(e, uT(0.018, 0.016, 0.13, a ? 10 : 6), -2.2, o, o - 0.045, 0.03),
      `hips`,
      { color: 3421755, kind: $w.gloss, rough: 0.35 },
    ));
  let u = 0.76 * i;
  if (
    (t.add(
      cT(e, Q(0.056, 0.105, 0.032), 0.5, u, 0.02),
      `chest`,
      c(Z.radio, 0.5),
    ),
    s.point(0.5, u + 0.052, 0.012, nT),
    t.add(
      hT(uT(0.0055, 0.004, 0.095, 5), nT.x + 0.012, nT.y + 0.045, nT.z - 0.004),
      `chest`,
      c(789518, 0.4),
    ),
    t.add(
      cT(e, Q(0.046, 0.056, 0.022), -0.42, 0.805 * i, 0.014),
      `chest`,
      c(Z.radio, 0.55),
    ),
    a)
  ) {
    t.add(
      cT(e, Q(0.028, 0.02, 0.004), -0.42, 0.805 * i + 0.012, 0.026),
      `chest`,
      c(2829359, 0.7),
    );
    for (let n = 0; n < 6; n++) {
      let r = n / 5,
        a = -0.42 + 0.92 * r,
        o = 0.79 * i - 0.035 * Math.sin(r * Math.PI);
      t.add(
        cT(e, uT(0.004, 0.004, 0.03, 4), a, o, 0.012, 0, Math.PI / 2),
        `chest`,
        c(855311, 0.5),
      );
    }
  }
  if (
    (t.add(cT(e, Q(0.036, 0.044, 0.007), -0.36, 0.748 * i, 0.009), `chest`, {
      color: Z.badge,
      kind: $w.gloss,
      rough: 0.25,
      glow: 0.08,
    }),
    r && TT(e, t, r.decal),
    e.sleeve)
  )
    for (let r of [-1, 1]) {
      let i = e.sleeve[r < 0 ? 0 : 1],
        o = Q(0.004, 0.07, 0.058);
      (o.translate(i.x + r * 0.002, i.y, i.z),
        t.add(
          o,
          r < 0 ? `armL` : `armR`,
          a && n
            ? { color: 16777215, kind: $w.cloth, rough: 0.8, decal: n.arm }
            : { color: Z.patchNavy, kind: $w.cloth },
        ));
    }
  (vT(e, t),
    a &&
      n &&
      fT(e, t, `chest`, Math.PI - 0.62, Math.PI + 0.62, n.y0, n.y1, 0.0032, {
        color: n.color,
        kind: n.kind,
        rough: n.rough,
        decal: n.rect,
      }),
    gT(t, e, `pistol`));
}
