// tokyo/assets/region-tokyo-d-ueno-DfmWW0p_ 06 — setmaterial
// Lines 1596-1884 of readable/tokyo/assets/region-tokyo-d-ueno-DfmWW0p_.pretty.js (statement-aligned).
function $e(e, t, n, r, i) {
  F(e, t, n, r, i, `#ece6d8`, 0.6);
  for (let a = 0; a < 7; a++)
    I(e, t + r * 0.1, n + i * (0.55 + a * 0.06), r * 0.8, i * 0.012, `#9a9488`);
  (I(e, t + r * 0.1, n + i * 0.12, r * 0.8, i * 0.1, `#14306e`),
    P(
      e,
      N(`ueno.keisei.name`),
      t + r * 0.5,
      n + i * 0.17,
      r * 0.6,
      i * 0.07,
      `#ffffff`,
      `800`,
    ),
    (e.globalAlpha = 1));
  for (let a of [0.02, 0.5, 0.98])
    I(e, t + r * a - r * 0.02, n, r * 0.04, i, `#4a4c50`);
  (I(e, t, n, r, i * 0.04, `#4a4c50`),
    I(e, t, n + i * 0.96, r, i * 0.04, `#4a4c50`),
    I(e, t + r * 0.45, n + i * 0.5, r * 0.02, i * 0.1, `#c8c8c8`),
    I(e, t + r * 0.53, n + i * 0.5, r * 0.02, i * 0.1, `#c8c8c8`));
}
function et(e, t, n, r, i) {
  (F(e, t, n, r, i, `#f4f6f8`, 0.55),
    I(e, t + r * 0.06, n + i * 0.06, r * 0.88, i * 0.5, `#6fa8d8`),
    I(e, t + r * 0.06, n + i * 0.4, r * 0.88, i * 0.16, `#2a4a8a`),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.moveTo(t + r * 0.1, n + i * 0.42),
    e.lineTo(t + r * 0.9, n + i * 0.32),
    e.lineTo(t + r * 0.9, n + i * 0.42),
    e.closePath(),
    e.fill(),
    P(
      e,
      N(`ueno.keisei.skyliner`),
      t + r / 2,
      n + i * 0.68,
      r * 0.8,
      i * 0.1,
      `#14306e`,
      `900`,
    ),
    P(
      e,
      N(`ueno.keisei.narita`),
      t + r / 2,
      n + i * 0.82,
      r * 0.86,
      i * 0.08,
      `#14306e`,
      `700`,
    ));
}
function tt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#7d7f7a`),
    R(
      e,
      12,
      t,
      n,
      r,
      i,
      500,
      1.6,
      [`#5e605c`, `#9a9c96`, `#6d6f6a`, `#b4b6b0`],
      0.4,
    ),
    _(
      e,
      N(`ueno.park.name`),
      t + r * 0.52,
      n + i * 0.08,
      n + i * 0.92,
      r * 0.62,
      `#2a2c2a`,
      y(),
      `900`,
    ),
    _(
      e,
      N(`ueno.park.name`),
      t + r * 0.5,
      n + i * 0.075,
      n + i * 0.915,
      r * 0.62,
      `#3e403c`,
      y(),
      `900`,
    ));
}
function nt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#f6f3ea`),
    I(e, t, n, r, i * 0.14, `#2e6a3a`),
    P(
      e,
      N(`ueno.park.map`),
      t + r * 0.4,
      n + i * 0.07,
      r * 0.6,
      i * 0.1,
      `#ffffff`,
      `800`,
    ),
    P(
      e,
      N(`ueno.park.latin`),
      t + r * 0.85,
      n + i * 0.07,
      r * 0.22,
      i * 0.07,
      `#ffffff`,
      `700`,
    ),
    I(e, t + r * 0.04, n + i * 0.18, r * 0.92, i * 0.78, `#e6eed8`),
    I(e, t + r * 0.06, n + i * 0.52, r * 0.36, i * 0.4, `#8ec0e0`),
    L(e, t + r * 0.24, n + i * 0.72, r * 0.03, `#c03030`),
    I(e, t + r * 0.08, n + i * 0.2, r * 0.3, i * 0.28, `#b6d89c`),
    I(e, t + r * 0.45, n + i * 0.22, r * 0.22, i * 0.12, `#d8c8a0`),
    I(e, t + r * 0.72, n + i * 0.4, r * 0.16, i * 0.14, `#d8c8a0`),
    I(e, t + r * 0.88, n + i * 0.2, r * 0.06, i * 0.74, `#9a9a9a`),
    I(e, t + r * 0.62, n + i * 0.3, r * 0.02, i * 0.62, `#d8b878`),
    I(e, t + r * 0.38, n + i * 0.48, r * 0.5, i * 0.02, `#d8b878`),
    L(e, t + r * 0.66, n + i * 0.88, r * 0.018, `#e02020`),
    P(
      e,
      N(`ueno.park.genzaichi`),
      t + r * 0.73,
      n + i * 0.88,
      r * 0.1,
      i * 0.05,
      `#e02020`,
      `900`,
    ));
  for (let [a, o, s] of [
    [`ueno.koen.guide-zoo`, 0.23, 0.32],
    [`ueno.koen.guide-shinobazu`, 0.24, 0.6],
    [`ueno.koen.guide-museum`, 0.56, 0.28],
    [`ueno.koen.guide-station`, 0.86, 0.6],
  ])
    P(e, N(a), t + r * o, n + i * s, r * 0.2, i * 0.05, `#2a2a2a`, `700`);
  P(
    e,
    N(`ueno.park.kaien`),
    t + r * 0.25,
    n + i * 0.95,
    r * 0.3,
    i * 0.04,
    `#2a2a2a`,
    `600`,
  );
}
function rt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#ffffff`),
    L(e, t + r / 2, n + i / 2, r * 0.48, `#2a8a3a`),
    L(e, t + r / 2, n + i / 2, r * 0.38, `#ffffff`),
    P(
      e,
      N(`ueno.bus.stop`),
      t + r / 2,
      n + i * 0.48,
      r * 0.66,
      i * 0.13,
      `#1a1a1a`,
      `900`,
    ),
    P(
      e,
      N(`streets.bus.operator`),
      t + r / 2,
      n + i * 0.66,
      r * 0.5,
      i * 0.08,
      `#2a8a3a`,
      `800`,
    ));
}
function it(e, t, n, r, i) {
  (I(e, t, n, r, i, `#f4f4f0`), I(e, t, n, r, i * 0.12, `#2a8a3a`));
  for (let a = 0; a < 14; a++)
    I(
      e,
      t + r * 0.1,
      n + i * (0.18 + a * 0.055),
      r * (0.4 + ((a * 7) % 5) * 0.1),
      i * 0.02,
      `#4a4a4a`,
    );
}
function at(e, t) {
  let { x0: n, x1: r, z: i, h: a } = _e,
    o = i + 0.06,
    s = he,
    c = t.white(),
    l = [
      [n + 2.4, n + 6.4],
      [r - 9.2, r - 5.2],
    ];
  (e.setMaterial(0.8, 0, 0, 0), E(e, 16777215));
  let u = n;
  for (let [n, r] of l)
    (K(e, u, o, n, o, s, s + a, t.uv(`ks-tile`), 2.6),
      K(e, n, o, r, o, s + 3, s + a, t.uv(`ks-tile`), 2.6),
      (u = r));
  K(e, u, o, r, o, s, s + a, t.uv(`ks-tile`), 2.6);
  for (let [n, r] of l)
    (E(e, 12103842),
      D(e, n, o, n, o - 1.2, s, s + 3, t.uv(`ks-tile`)),
      D(e, r, o - 1.2, r, o, s, s + 3, t.uv(`ks-tile`)),
      E(e, 14210252),
      e.setMaterial(0.6, 0, 0.3, 17),
      e.quad(
        n,
        s + 3,
        o,
        r,
        s + 3,
        o,
        r,
        s + 3,
        o - 1.2,
        n,
        s + 3,
        o - 1.2,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      ),
      e.setMaterial(0.3, 0.05, 0.45, Je | 16),
      E(e, 16777215),
      D(e, n, o - 1.2, r, o - 1.2, s, s + 3, t.uv(`ks-door`)),
      e.setMaterial(0.8, 0, 0, 0));
  (E(e, 13947080),
    O(e, l[0][0] - 0.6, s + 3.05, o, l[1][1] + 0.6, s + 3.22, o + 1.5, c),
    e.setMaterial(0.5, 0, 0.5, 2),
    E(e, 16777215),
    D(
      e,
      n + 0.6,
      o + 0.02,
      n + 12.6,
      o + 0.02,
      s + 3.6,
      s + 4.8,
      t.uv(`ks-sky`),
    ),
    D(
      e,
      r - 10.6,
      o + 0.02,
      r - 3,
      o + 0.02,
      s + 3.45,
      s + 5.2,
      t.uv(`ks-name`),
    ),
    e.setMaterial(0.5, 0, 0.4, Je));
  for (let n of [l[0][1] + 0.6, l[0][1] + 2.2, l[1][0] - 1.8])
    D(e, n, o + 0.02, n + 1.2, o + 0.02, s + 0.9, s + 2.5, t.uv(`ks-poster`));
  (e.setMaterial(0.9, 0, 0, 0),
    E(e, 10262154),
    O(e, n, s + a, o - 0.4, r, s + a + 0.35, o + 0.12, c),
    E(e, 15000284));
  for (let t of [3.5, 8]) {
    let r = n + t,
      i = o - 0.6;
    (A(e, r, i, s + a + 0.35, s + a + 0.9, 0.05, c, 5),
      e.quad(
        r - 0.4,
        s + a + 0.6,
        i + 0.15,
        r + 0.4,
        s + a + 0.6,
        i + 0.15,
        r + 0.4,
        s + a + 1.3,
        i + 0.35,
        r - 0.4,
        s + a + 1.3,
        i + 0.35,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      ));
  }
}
