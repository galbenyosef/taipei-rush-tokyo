// tokyo/assets/region-tokyo-d-ueno-CufCWRy0 04 — math
// Lines 1030-1255 of readable/tokyo/assets/region-tokyo-d-ueno-CufCWRy0.pretty.js (statement-aligned).
function Ve(e) {
  return (t, n, r, i, a) => {
    I(t, n, r, i, a, `#f2f2ee`);
    for (let e = 1; e < 6; e++)
      I(t, n + (i * e) / 6, r, 1.5, a * 0.88, `#d8d8d2`);
    if (
      (I(t, n, r + a * 0.88, i, a * 0.12, `#2e8a5a`),
      I(t, n, r, i, a * 0.04, `#2e8a5a`),
      e === 0)
    ) {
      for (let e = 0; e < 9; e++) {
        let o = n + i * (0.06 + e * 0.11),
          s = r + a * (0.55 - (e % 3) * 0.06);
        ((t.fillStyle = [`#6aa86a`, `#4f8f5a`, `#86b872`][e % 3]),
          t.beginPath(),
          t.arc(o, s, a * 0.2, 0, Math.PI * 2),
          t.fill(),
          I(t, o - 1.5, s, 3, a * 0.3, `#6a5238`));
      }
      (P(
        t,
        `♪`,
        n + i * 0.3,
        r + a * 0.25,
        i * 0.06,
        a * 0.2,
        `#3a5a9a`,
        `900`,
      ),
        P(
          t,
          `♫`,
          n + i * 0.72,
          r + a * 0.2,
          i * 0.06,
          a * 0.2,
          `#3a5a9a`,
          `900`,
        ),
        P(
          t,
          N(`ueno.bunka.koji`),
          n + i * 0.5,
          r + a * 0.8,
          i * 0.5,
          a * 0.09,
          `#2a2a2a`,
          `700`,
        ));
    } else
      (P(
        t,
        N(`ueno.bunka.name`),
        n + i * 0.5,
        r + a * 0.2,
        i * 0.5,
        a * 0.17,
        `#1a1a1a`,
        `900`,
      ),
        P(
          t,
          N(`ueno.bunka.kyukan`),
          n + i * 0.5,
          r + a * 0.45,
          i * 0.9,
          a * 0.13,
          `#1a1a1a`,
          `800`,
        ),
        P(
          t,
          N(`ueno.bunka.kikan`),
          n + i * 0.5,
          r + a * 0.66,
          i * 0.8,
          a * 0.1,
          `#c01818`,
          `800`,
        ));
  };
}
function He(e, t, n, r, i) {
  (I(e, t, n, r, i, `#ffffff`),
    I(e, t, n, r, i * 0.2, `#1d4e9e`),
    P(
      e,
      N(`ueno.bunka.koji`),
      t + r / 2,
      n + i * 0.1,
      r * 0.9,
      i * 0.13,
      `#ffffff`,
      `800`,
    ),
    [
      N(`ueno.bunka.hacchu`),
      N(`ueno.bunka.kikan`),
      N(`common.safety.koji-kyoryoku`),
    ].forEach((a, o) =>
      de(
        e,
        a,
        t + r * 0.06,
        n + i * (0.34 + o * 0.2),
        r * 0.88,
        i * 0.1,
        `#1a1a1a`,
        `700`,
      ),
    ),
    (e.strokeStyle = `#1d4e9e`),
    (e.lineWidth = 3),
    e.strokeRect(t + 2, n + 2, r - 4, i - 4));
}
function Ue(e, t, n, r, i) {
  (I(e, t, n, r, i, `#ffffff`),
    I(e, t, n, r, i * 0.16, `#f5c400`),
    P(
      e,
      N(`common.safety.koji-chu`),
      t + r / 2,
      n + i * 0.08,
      r * 0.8,
      i * 0.12,
      `#1a1a1a`,
      `900`,
    ),
    (e.fillStyle = `#f5c400`),
    e.beginPath(),
    e.arc(t + r * 0.42, n + i * 0.36, r * 0.11, Math.PI, 0),
    e.fill(),
    I(e, t + r * 0.3, n + i * 0.36, r * 0.24, i * 0.02, `#f5c400`),
    (e.fillStyle = `#f0c8a0`),
    e.beginPath(),
    e.arc(t + r * 0.42, n + i * 0.41, r * 0.08, 0, Math.PI * 2),
    e.fill(),
    e.save(),
    e.translate(t + r * 0.5, n + i * 0.47),
    e.rotate(0.7),
    I(e, -r * 0.08, 0, r * 0.18, i * 0.2, `#3a62b0`),
    e.restore(),
    I(e, t + r * 0.52, n + i * 0.6, r * 0.06, i * 0.16, `#3a62b0`),
    I(e, t + r * 0.62, n + i * 0.6, r * 0.06, i * 0.16, `#3a62b0`),
    P(
      e,
      N(`common.safety.koji-owabi`),
      t + r / 2,
      n + i * 0.86,
      r * 0.92,
      i * 0.08,
      `#c01818`,
      `800`,
    ));
}
function We(e, t, n, r, i, a, o, s) {
  for (let c = t; c < r - 0.01; c += s)
    for (let t = n; t < i - 0.01; t += s)
      ne(e, c, t, Math.min(r, c + s), Math.min(i, t + s), a, o);
}
function K(e, t, n, r, i, a, o, s, c) {
  let l = Math.hypot(r - t, i - n),
    u = Math.max(1, Math.round(l / c));
  for (let c = 0; c < u; c++) {
    let l = c / u,
      d = (c + 1) / u;
    D(
      e,
      t + (r - t) * l,
      n + (i - n) * l,
      t + (r - t) * d,
      n + (i - n) * d,
      a,
      o,
      s,
    );
  }
}
function Ge(e, t) {
  let n = t.white(),
    r = t.uv(`conc`);
  t.uv(`conc-dark`);
  let { x0: i, x1: a, z0: o, z1: s, h: c } = B,
    l = z,
    u = z + c;
  (e.setMaterial(0.8, 0, 0, 0),
    E(e, 16777215),
    We(e, ge.x0, ge.z0, ge.x1, ge.z1, z + 0.03, t.uv(`granite`), 3),
    We(e, i - 1.5, o - 1.5, a, s + 1.5, z + 0.04, t.uv(`granite`), 3),
    e.setMaterial(0.25, 0.05, 0.42, je | 16),
    E(e, 16777215),
    D(e, i, o, i, s, l, u - 0.4, t.uv(`koen-front`)),
    D(e, a, o, i, o, l, u - 0.4, t.uv(`koen-side`)),
    D(e, i, s, a, s, l, u - 0.4, t.uv(`koen-side`)),
    e.setMaterial(0.9, 0, 0, 0),
    E(e, 9210502),
    D(e, a, s, a, o, l - 3, u, r),
    E(e, 4868164),
    D(e, i, o, i, s, u - 0.4, u, n),
    E(e, 14210768),
    O(e, i - 1.6, u, o - 1.6, a + 0.05, u + 0.42, s + 1.6, r),
    e.setMaterial(0.6, 0, 0.35, 17),
    E(e, 16051936),
    ne(e, i - 1.6, o - 1.6, a, s + 1.6, u - 0.005, n, !0),
    e.setMaterial(0.5, 0.6, 0, 0),
    E(e, 4012598));
  for (let [t, r] of [
    [i - 1.3, o - 1.3],
    [i - 1.3, s + 1.3],
    [i - 1.3, (o + s) / 2 - 4],
    [i - 1.3, (o + s) / 2 + 4],
  ])
    O(e, t - 0.1, l, r - 0.1, t + 0.1, u, r + 0.1, n);
  (e.setMaterial(0.5, 0, 0.5, 2), E(e, 16777215));
  let d = (o + s) / 2;
  D(
    e,
    i - 1.65,
    d - 4.2,
    i - 1.65,
    d + 4.2,
    u - 0.62,
    u + 0.4,
    t.uv(`koen-sign`),
  );
}
