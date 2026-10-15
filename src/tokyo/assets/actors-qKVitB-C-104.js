// tokyo/assets/actors-qKVitB-C 104 — add
// Lines 47939-48117 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function ET(e, t, n) {
  let r = e.H,
    i = e.lod === 0,
    a = 0.575 * r,
    o = (e, t = 0.85) => ({ color: e, kind: $w.cloth, rough: t });
  if (
    (wT(e, t),
    fT(e, t, `chest`, -0.78, 0.78, 0.615 * r, 0.8 * r, 0.02, o(Z.swatPanel)),
    fT(
      e,
      t,
      `chest`,
      Math.PI - 0.8,
      Math.PI + 0.8,
      0.6 * r,
      0.8 * r,
      0.018,
      o(Z.swatPanel),
    ),
    e.lod === 2)
  ) {
    (t.add(
      cT(e, Q(0.2, 0.095, 0.036), 0, 0.655 * r, 0.038),
      `chest`,
      o(Z.swatPouch),
    ),
      t.add(cT(e, Q(0.13, 0.03, 0.006), 0, 0.762 * r, 0.022), `chest`, {
        color: Z.patch,
        glow: 0.35,
      }),
      t.add(cT(e, Q(0.2, 0.06, 0.006), Math.PI, 0.705 * r, 0.02), `chest`, {
        color: Z.patch,
        glow: 0.35,
      }),
      dT(e, t, `hips`, a, 0.06, 0.016, o(Z.swatBelt, 0.75)),
      t.add(
        hT(
          Q(0.05, 0.17, 0.1),
          e.hipR.x + 0.105,
          e.hipR.y - 0.2,
          0.005,
          0,
          0,
          0.08,
        ),
        `thighR`,
        { color: Z.swatPouch, kind: $w.cloth, rough: 0.8 },
      ),
      _T(t, e, `rifle`),
      e.prof.point(0, 0.64 * r, 0.085, tT));
    let n = hT(Q(0.045, 0.9, 0.07), 0, 0.02, 0);
    (n.rotateZ(-0.95),
      n.translate(tT.x + 0.02, tT.y, tT.z),
      t.add(n, `sling`, { color: Z.rifle, kind: $w.gloss, rough: 0.45 }));
    return;
  }
  for (let n of [-0.34, 0, 0.34])
    (t.add(
      cT(e, Q(0.068, 0.095, 0.036), n, 0.655 * r, 0.038),
      `chest`,
      o(Z.swatPouch),
    ),
      t.add(
        cT(e, Q(0.07, 0.022, 0.04), n, 0.655 * r + 0.05, 0.04),
        `chest`,
        o(3027770),
      ));
  (t.add(
    cT(e, Q(0.055, 0.1, 0.035), -0.62, 0.745 * r, 0.038),
    `chest`,
    o(Z.swatPouch),
  ),
    t.add(
      cT(e, uT(0.005, 0.004, 0.11, 5), -0.6, 0.745 * r + 0.1, 0.04),
      `chest`,
      { color: 789518, kind: $w.gloss, rough: 0.4 },
    ));
  let s = n?.front,
    c = n?.back;
  (i && s
    ? fT(e, t, `chest`, -0.36, 0.36, 0.742 * r, 0.78 * r, 0.0215, {
        color: 16777215,
        kind: $w.cloth,
        rough: 0.8,
        decal: s,
        rim: 2764083,
      })
    : t.add(cT(e, Q(0.13, 0.03, 0.006), 0, 0.762 * r, 0.022), `chest`, {
        color: Z.patch,
        glow: 0.35,
      }),
    i && c
      ? fT(
          e,
          t,
          `chest`,
          Math.PI - 0.62,
          Math.PI + 0.62,
          0.66 * r,
          0.745 * r,
          0.0195,
          {
            color: 16777215,
            kind: $w.cloth,
            rough: 0.8,
            decal: c,
            rim: 2764083,
          },
        )
      : t.add(cT(e, Q(0.2, 0.06, 0.006), Math.PI, 0.705 * r, 0.02), `chest`, {
          color: Z.patch,
          glow: 0.35,
        }),
    dT(e, t, `hips`, a, 0.06, 0.016, o(Z.swatBelt, 0.75)));
  for (let n of [-0.75, 0.75, -2.3])
    t.add(
      lT(e, Q(0.06, 0.075, 0.036), n, a, a - 0.01, 0.034),
      `hips`,
      o(Z.swatPouch),
    );
  t.add(lT(e, Q(0.05, 0.035, 0.014), 0, a, a, 0.02), `hips`, {
    color: 3816770,
    kind: $w.gloss,
    rough: 0.4,
  });
  let l = e.hipR.x,
    u = e.hipR.y;
  (t.add(
    hT(Q(0.05, 0.17, 0.1), l + 0.105, u - 0.2, 0.005, 0, 0, 0.08),
    `thighR`,
    { color: Z.swatPouch, kind: $w.cloth, rough: 0.8 },
  ),
    t.add(
      hT(Q(0.034, 0.06, 0.05), l + 0.105, u - 0.08, 0.02, 0.3, 0, 0.08),
      `thighR`,
      { color: Z.gunDark, kind: $w.gloss, rough: 0.5 },
    ),
    t.add(
      hT(Q(0.012, 0.035, 0.16), l + 0.082, u - 0.26, 0.005),
      `thighR`,
      o(Z.swatBelt),
    ));
  for (let n of [e.kneeL, e.kneeR])
    t.add(
      hT(Q(0.105, 0.11, 0.045), n.x, n.y - 0.015, n.z - 0.066),
      n === e.kneeL ? `shinL` : `shinR`,
      { color: Z.knee, kind: $w.gloss, rough: 0.6 },
    );
  (_T(t, e, `rifle`), vT(e, t));
  {
    let n = (e, n) => {
        (e.rotateZ(-0.95), i(e), t.add(e, `sling`, n));
      },
      i = (t) => {
        (e.prof.point(0, 0.64 * r, 0.085, tT),
          t.translate(tT.x + 0.02, tT.y, tT.z));
      };
    (n(hT(Q(0.045, 0.52, 0.07), 0, 0, 0), {
      color: Z.rifle,
      kind: $w.gloss,
      rough: 0.45,
    }),
      n(hT(Q(0.04, 0.05, 0.12), 0, 0.03, 0.06), {
        color: Z.rifle,
        kind: $w.gloss,
        rough: 0.45,
      }),
      n(hT(uT(0.011, 0.011, 0.18, 6), 0, -0.34, 0), {
        color: Z.rifle,
        kind: $w.gloss,
        rough: 0.45,
      }),
      n(hT(Q(0.04, 0.2, 0.06), 0, 0.34, 0.01), {
        color: Z.rifleFurn,
        kind: $w.gloss,
        rough: 0.6,
      }));
  }
}
