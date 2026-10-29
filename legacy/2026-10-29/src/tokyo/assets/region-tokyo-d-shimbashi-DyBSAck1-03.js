// tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1 03 — fillstyle
// Lines 682-1019 of readable/tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1.pretty.js (statement-aligned).
function ke(e, t, n, r, i) {
  (M(e, t, n, r, i, `#2a2b2e`),
    M(e, t + r * 0.04, n + i * 0.18, r * 0.5, i * 0.64, `#0d3c8c`),
    H(
      e,
      V(`shim.tv.name`),
      t + r * 0.29,
      n + i / 2,
      r * 0.46,
      i * 0.5,
      `#ffffff`,
      `900`,
    ),
    H(
      e,
      V(`shim.tv.news`),
      t + r * 0.78,
      n + i / 2,
      r * 0.36,
      i * 0.4,
      `#ffcc00`,
      `800`,
    ));
}
function Ae(e, t, n, r, i) {
  M(e, t, n, r, i, `#151515`);
  let a = t + r / 2,
    o = n + i / 2,
    s = r * 0.48;
  (U(e, a, o, s, `#c8ccd0`),
    U(e, a, o, s * 0.88, `#1a1a1a`),
    (e.fillStyle = `#0c0c0c`),
    e.beginPath(),
    e.arc(a, o, s * 0.84, Math.PI * 0.15, Math.PI * 0.85),
    e.closePath(),
    e.fill());
  for (let t = 0; t < 6; t++) {
    let n = -Math.PI * 0.15 - (t / 6) * Math.PI * 0.75;
    U(
      e,
      a + Math.cos(n) * s * 0.55,
      o + Math.sin(n) * s * 0.55,
      s * 0.12,
      `#3a3a3a`,
    );
  }
  (U(e, a, o, s * 0.2, `#c8ccd0`), U(e, a, o, s * 0.1, `#808488`));
}
function je(e, t, n, r, i) {
  (M(e, t, n, r, i, `#4a4c4e`),
    M(e, t + 2, n + 2, r - 4, i - 4, `#2c2e30`),
    H(
      e,
      V(`shim.d51.plate`),
      t + r / 2,
      n + i / 2,
      r * 0.9,
      i * 0.5,
      `#e6e2d6`,
      `700`,
    ));
}
function Me(e, t, n, r, i) {
  (M(e, t, n, r, i, `#6e6c66`),
    M(e, t + r * 0.06, n + i * 0.04, r * 0.88, i * 0.92, `#55534e`),
    C(
      e,
      V(`shim.shoka.title`),
      t + r * 0.78,
      n + i * 0.1,
      n + i * 0.9,
      r * 0.18,
      `#e9e4d8`,
      D(),
      `800`,
    ),
    V(`shim.shoka.verse`)
      .split(` `)
      .forEach((a, o) =>
        C(
          e,
          a,
          t + r * (0.5 - o * 0.24),
          n + i * 0.16,
          n + i * 0.84,
          r * 0.14,
          `#dcd6c6`,
          D(),
          `700`,
        ),
      ));
}
function Ne(e, t, n, r, i) {
  (M(e, t, n, r, i, `#cfc8b6`), (e.fillStyle = `#b9b2a0`));
  for (let a = 0; a < 14; a++) e.fillRect(t, n + (i * a) / 14, r, 1.5);
  (M(e, t, n + i * 0.8, r, i * 0.2, `#9d968a`), (e.fillStyle = `#867f74`));
  for (let a = 0; a < 3; a++) e.fillRect(t, n + i * (0.8 + a * 0.066), r, 2);
  (M(e, t, n + i * 0.43, r, i * 0.035, `#ece8de`),
    M(e, t, n, r, i * 0.06, `#f2efe7`));
  for (let a = 0; a < 26; a++)
    e.fillRect(t + (r * a) / 26, n + i * 0.06, r / 60, i * 0.02);
  let a = (t, n, i, a) => {
    let o = r * 0.16;
    (M(e, t - o / 2 - 3, n - 3, o + 6, i + 6, `#ece8de`),
      M(e, t - o / 2, n, o, i, `#2a3238`),
      (e.fillStyle = `#e9e5da`),
      e.fillRect(t - 1, n, 2, i));
    for (let r = 1; r < 3; r++) e.fillRect(t - o / 2, n + (i * r) / 3, o, 2);
    a &&
      ((e.fillStyle = `#ece8de`),
      e.beginPath(),
      e.moveTo(t - o / 2 - 6, n - 4),
      e.lineTo(t, n - i * 0.22),
      e.lineTo(t + o / 2 + 6, n - 4),
      e.closePath(),
      e.fill());
  };
  for (let e of [0.28, 0.72])
    (a(t + r * e, n + i * 0.16, i * 0.22, !0),
      a(t + r * e, n + i * 0.53, i * 0.22, !1));
}
function Pe(e, t, n, r, i) {
  (M(e, t, n, r, i, `#d3ccba`), M(e, t, n + i * 0.82, r, i * 0.18, `#a39c8f`));
  for (let a = 0; a < 3; a++) {
    let o = t + r * (0.2 + a * 0.3),
      s = r * 0.2,
      c = n + i * 0.28;
    ((e.fillStyle = `#ece8de`),
      e.beginPath(),
      e.arc(o, c + s / 2, s / 2 + 4, Math.PI, 0),
      e.lineTo(o + s / 2 + 4, n + i),
      e.lineTo(o - s / 2 - 4, n + i),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `#2d343a`),
      e.beginPath(),
      e.arc(o, c + s / 2, s / 2, Math.PI, 0),
      e.lineTo(o + s / 2, n + i),
      e.lineTo(o - s / 2, n + i),
      e.closePath(),
      e.fill(),
      (e.fillStyle = `#c9b98a`),
      e.fillRect(o - 1, c + s / 2, 2, n + i - c - s / 2));
  }
  M(e, t, n, r, i * 0.1, `#f0ece2`);
}
function Fe(e, t, n, r, i) {
  (M(e, t, n, r, i, `#2d2a26`),
    H(
      e,
      V(`shim.kyu.name`),
      t + r * 0.36,
      n + i / 2,
      r * 0.6,
      i * 0.66,
      `#e8dcb8`,
      `700`,
      D(),
    ),
    H(
      e,
      V(`shim.kyu.museum`),
      t + r * 0.82,
      n + i / 2,
      r * 0.3,
      i * 0.36,
      `#d8ccaa`,
      `600`,
    ));
}
function Ie(e, t, n, r, i) {
  (M(e, t, n, r, i, `#f3efe4`),
    M(e, t, n, r, i * 0.32, `#2d2a26`),
    H(
      e,
      V(`shim.kyu.museum`),
      t + r / 2,
      n + i * 0.16,
      r * 0.86,
      i * 0.24,
      `#f3efe4`,
      `800`,
    ),
    H(
      e,
      V(`shim.kyu.hours`),
      t + r / 2,
      n + i * 0.66,
      r * 0.92,
      i * 0.24,
      `#2d2a26`,
      `700`,
    ));
}
function Le(e, t, n, r, i) {
  (M(e, t, n, r, i, `#f4f2ea`),
    C(
      e,
      V(`shim.kyu.zero.post`),
      t + r / 2,
      n + i * 0.1,
      n + i * 0.7,
      r * 0.7,
      `#1a1a1a`,
      D(),
      `900`,
    ));
}
function Re(e, t, n, r, i) {
  (M(e, t, n, r, i, `#7a776f`),
    M(e, t + 4, n + 4, r - 8, i - 8, `#8a877e`),
    C(
      e,
      V(`shim.kyu.site`),
      t + r / 2,
      n + i * 0.08,
      n + i * 0.92,
      r * 0.5,
      `#f0ece2`,
      D(),
      `800`,
    ));
}
var ze = [
  [`#1a1410`, `#f4e3b0`],
  [`#b5121b`, `#ffffff`],
  [`#f2ead8`, `#1a1a1a`],
  [`#2b1a12`, `#ffd36a`],
  [`#0d2242`, `#ffffff`],
  [`#ffcc00`, `#1a1a1a`],
  [`#1a1a1a`, `#f4f4f4`],
  [`#5a1c10`, `#ffe9c0`],
  [`#f6f0e2`, `#b5121b`],
  [`#14301e`, `#f4e3b0`],
  [`#e8e2d2`, `#0d2242`],
  [`#3c1810`, `#ffffff`],
  [`#0f1a2a`, `#9fd8ff`],
];
function Be(e) {
  return (t, n, r, i, a) => {
    let [o, s] = ze[e % ze.length];
    (ue(t, n, r, i, a, o, 0.6),
      (t.globalAlpha = 1),
      H(
        t,
        V(`shim.gado.bar.${e + 1}`),
        n + i / 2,
        r + a / 2,
        i * 0.9,
        a * 0.72,
        s,
        `900`,
        e % 3 == 1 ? D() : S(),
      ));
  };
}
function Ve(e) {
  return (t, i, a, o, s) => {
    let c = new n(r(`shim-gado-front`, e));
    de(t, i, a, o, s, `#2a1e16`, 0.5);
    let l = i + o * 0.03,
      u = a + s * 0.08,
      d = o * 0.94,
      f = s * 0.88;
    ((t.globalAlpha = 1), (t.fillStyle = `#e9b46e`), t.fillRect(l, u, d, f));
    let p = [
      `beer`,
      `hoppy`,
      `lemon`,
      `hiball`,
      `sake`,
      `yakiton`,
      `kashira`,
      `nikomi`,
      `potesara`,
      `tomato`,
    ];
    for (let n = 0; n < 9; n++) {
      let r = l + d * (0.04 + (n * 0.92) / 9),
        i = (d * 0.85) / 9;
      ((t.fillStyle = n % 4 == 0 ? `#ffe9a8` : `#fffaf0`),
        t.fillRect(r, u + f * 0.04, i, f * 0.36),
        C(
          t,
          V(`shim.gado.menu.${p[(n + e) % p.length]}`).split(` `)[0],
          r + i / 2,
          u + f * 0.06,
          u + f * 0.38,
          i * 0.7,
          `#1a1a1a`,
          S(),
          `800`,
        ));
    }
    for (let n = 0; n < 22; n++)
      ((t.fillStyle = [`#3b5a2a`, `#6a3a1a`, `#d8d0b8`, `#1a2a4a`][
        (n + e) % 4
      ]),
        t.fillRect(
          l + d * (0.05 + n * 0.04),
          u + f * 0.44,
          d * 0.018,
          f * 0.08,
        ));
    ((t.fillStyle = `#8a5a30`),
      t.fillRect(l, u + f * 0.64, d, f * 0.1),
      (t.fillStyle = `#5c3a1e`),
      t.fillRect(l, u + f * 0.74, d, f * 0.26));
    let m = 2 + Math.floor(c.next() * 3);
    for (let e = 0; e < m; e++) {
      let e = l + d * (0.12 + c.next() * 0.76);
      ((t.fillStyle = [`#1e2430`, `#2a2a2a`, `#3a3e4a`, `#e8e8e8`][
        Math.floor(c.next() * 4)
      ]),
        t.fillRect(e - d * 0.035, u + f * 0.52, d * 0.07, f * 0.4),
        U(t, e, u + f * 0.48, d * 0.026, `#1a1410`));
    }
    for (let e = 1; e < 4; e++)
      de(t, l + (d * e) / 4 - 2, u, 4, f, `#2a1e16`, 0.5);
    let h = l + d * 0.27,
      g = d * 0.46;
    ((t.globalAlpha = 1),
      (t.fillStyle = e % 2 ? `#1d2b5a` : `#5a1a14`),
      t.fillRect(h, u, g, f * 0.3));
    for (let e = 1; e < 4; e++)
      de(t, h + (g * e) / 4 - 1, u + f * 0.12, 2, f * 0.18, `#0a0a0a`, 0.6);
    H(
      t,
      V(e % 2 ? `shim.gado.noren.yakitori` : `shim.gado.noren.taishu`),
      h + g / 2,
      u + f * 0.1,
      g * 0.86,
      f * 0.14,
      `#ffffff`,
      `900`,
    );
  };
}
