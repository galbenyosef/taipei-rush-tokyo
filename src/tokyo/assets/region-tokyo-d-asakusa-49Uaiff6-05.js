// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 05 — fillrect
// Lines 1155-1489 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function We(e, t, n) {
  return (r, i, a, o, s) => {
    (F(r, i, a, o, s, t),
      F(r, i, a, o, s * 0.06, `rgba(0,0,0,0.25)`),
      ie(r, V(e), i + o / 2, a + s * 0.1, a + s * 0.9, o * 0.6, n, N(), `900`));
  };
}
function Ge(e, t, n = `#1e2a22`, r = `#f4f0e0`) {
  return (i, a, o, s, c) => {
    (F(i, a, o, s, c, `#6a4a2a`),
      F(i, a + s * 0.07, o + c * 0.05, s * 0.86, c * 0.9, n));
    let l = V(e),
      u = V(t);
    (ie(i, l, a + s * 0.66, o + c * 0.1, o + c * 0.9, s * 0.26, r, M(), `900`),
      u &&
        ie(
          i,
          u,
          a + s * 0.32,
          o + c * 0.1,
          o + c * 0.9,
          s * 0.26,
          `#f2c84a`,
          M(),
          `900`,
        ));
  };
}
function Ke(e, t, n, r, i) {
  (F(e, t, n, r, i, `#f4f2ea`),
    F(e, t, n, r, i * 0.08, `#c8281e`),
    ie(
      e,
      V(`asa.shop.tsuruju.last`),
      t + r / 2,
      n + i * 0.14,
      n + i * 0.92,
      r * 0.62,
      `#1a1a1a`,
      M(),
      `900`,
    ));
}
function qe(e, t, n, r, i = r) {
  return (a, o, s, c, l) => {
    (P(a, o, s, c, l, n, 0.6),
      H(a, V(e), o + c / 2, s + l * 0.33, c * 0.9, l * 0.4, r, `900`),
      t && H(a, V(t), o + c / 2, s + l * 0.73, c * 0.9, l * 0.26, i, `700`));
  };
}
function Je(e, r, i, a, o) {
  let s = new t(n(`asa-bunka-slats`, 1));
  ((e.globalAlpha = 1),
    (e.fillStyle = `#e8c890`),
    e.fillRect(r, i, a, o),
    (e.fillStyle = `rgba(80,60,40,0.35)`));
  for (let t = 0; t < 9; t++)
    e.fillRect(
      r + a * s.next(),
      i + o * (0.35 + s.next() * 0.3),
      a * 0.05,
      o * 0.3,
    );
  ((e.fillStyle = `rgba(255,240,210,0.6)`),
    e.fillRect(r, i + o * 0.04, a, o * 0.05));
  for (let t = 0; t < 46; t++) {
    let n = r + (a * t) / 46,
      s = [`#7a5434`, `#6e4c30`, `#86603c`, `#704e32`][t % 4];
    (I(e, n, i, (a / 46) * 0.55, o, s, 0.5),
      I(e, n + (a / 46) * 0.42, i, (a / 46) * 0.13, o, `#4a321e`, 0.5));
  }
  I(e, r, i + o * 0.95, a, o * 0.05, `#3a3634`, 0.5);
}
function Ye(e, r, i, a, o) {
  ((e.globalAlpha = 1),
    (e.fillStyle = `#b89a74`),
    e.fillRect(r, i, a, o),
    (e.fillStyle = `#f2e6c8`),
    e.fillRect(r, i, a, o * 0.1),
    (e.fillStyle = `#8a7660`),
    e.fillRect(r, i + o * 0.1, a, o * 0.04),
    (e.fillStyle = `#6a5440`),
    e.fillRect(r + a * 0.18, i + o * 0.6, a * 0.5, o * 0.16),
    (e.fillStyle = `#c8a878`),
    e.fillRect(r + a * 0.18, i + o * 0.58, a * 0.5, o * 0.03));
  for (let t = 0; t < 3; t++)
    ((e.fillStyle = `#1e2a40`),
      e.fillRect(r + a * (0.25 + t * 0.14), i + o * 0.42, a * 0.05, o * 0.18),
      Me(e, r + a * (0.275 + t * 0.14), i + o * 0.39, a * 0.016, `#1a1410`));
  let s = new t(n(`asa-bunka-lobby`, 1));
  for (let t = 0; t < 9; t++) {
    let t = r + a * (0.03 + s.next() * 0.92),
      n = o * (0.24 + s.next() * 0.08),
      c = a * (0.018 + s.next() * 0.01);
    ((e.fillStyle = [
      `#d8d8d8`,
      `#3a4a6a`,
      `#a83a3a`,
      `#2a2a2a`,
      `#e8c070`,
      `#6a8a5a`,
    ][Math.floor(s.next() * 6)]),
      e.fillRect(t, i + o * 0.86 - n, c, n * 0.62),
      (e.fillStyle = `#3a3438`),
      e.fillRect(t + c * 0.1, i + o * 0.86 - n * 0.38, c * 0.8, n * 0.38),
      Me(e, t + c / 2, i + o * 0.86 - n - c * 0.45, c * 0.42, `#2a2018`));
  }
  ((e.fillStyle = `#121a24`),
    e.fillRect(r + a * 0.74, i + o * 0.2, a * 0.18, o * 0.22),
    (e.fillStyle = `#4a90c8`),
    e.fillRect(r + a * 0.75, i + o * 0.21, a * 0.16, o * 0.2));
  for (let t = 0; t < 8; t++)
    ((e.fillStyle = [`#d84a3a`, `#3a7ac8`, `#e8c04a`, `#4aa86a`][t % 4]),
      e.fillRect(r + a * (0.02 + t * 0.016), i + o * 0.5, a * 0.012, o * 0.08));
  ((e.fillStyle = `#5a4a3a`), e.fillRect(r, i + o * 0.86, a, o * 0.14));
  let c = e.createLinearGradient(r, i, r, i + o);
  (c.addColorStop(0, `rgba(150,175,200,0.62)`),
    c.addColorStop(0.45, `rgba(60,80,100,0.38)`),
    c.addColorStop(1, `rgba(30,40,50,0.3)`),
    (e.fillStyle = c),
    e.fillRect(r, i, a, o));
  for (let t = 0; t <= 8; t++)
    I(e, r + (a * t) / 8 - 2, i, 4, o, `#2a2a2c`, 0.5);
  I(e, r, i + o * 0.3, a, 3, `#2a2a2c`, 0.5);
}
function Xe(e, t, n, r, i) {
  (P(e, t, n, r, i, `#2e2a26`, 0.55),
    H(
      e,
      V(`asa.bunka.name`),
      t + r / 2,
      n + i * 0.36,
      r * 0.9,
      i * 0.44,
      `#f4f0e6`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.latin`),
      t + r / 2,
      n + i * 0.76,
      r * 0.9,
      i * 0.2,
      `#d8d2c4`,
      `500`,
    ));
}
function Ze(e, t, n, r, i) {
  (P(e, t, n, r, i, `#f2f0ea`, 0.55),
    F(e, t, n, r, i * 0.22, `#1a5aa8`),
    H(
      e,
      V(`asa.bunka.info`),
      t + r / 2,
      n + i * 0.11,
      r * 0.8,
      i * 0.17,
      `#ffffff`,
      `800`,
    ),
    H(
      e,
      V(`asa.bunka.hours`),
      t + r / 2,
      n + i * 0.42,
      r * 0.9,
      i * 0.15,
      `#1a1a1a`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.terrace`),
      t + r / 2,
      n + i * 0.62,
      r * 0.9,
      i * 0.15,
      `#1a1a1a`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.ward`),
      t + r / 2,
      n + i * 0.84,
      r * 0.5,
      i * 0.14,
      `#4a4a4a`,
      `700`,
    ));
}
function Qe(e, t, n, r, i) {
  ((e.globalAlpha = 1),
    (e.fillStyle = `#eef0ee`),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(160,170,175,0.35)`));
  for (let a = 0; a < 6; a++) e.fillRect(t, n + (i * a) / 6, r, i * 0.04);
  for (let a = 0; a <= 4; a++)
    I(e, t + (r * a) / 4 - 3, n, 6, i, `#5a6066`, 0.5);
  I(e, t, n, r, 4, `#5a6066`, 0.5);
}
function $e(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    (P(a, o, s, c, l, n, 0.65),
      I(a, o + 5, s + 5, c - 10, 4, i, 0.65),
      I(a, o + 5, s + l - 9, c - 10, 4, i, 0.65),
      H(a, V(e), o + c * 0.5, s + l * 0.45, c * 0.7, l * 0.6, r, `900`, N()),
      t && H(a, V(t), o + c * 0.5, s + l * 0.83, c * 0.6, l * 0.14, i, `700`));
  };
}
function et(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-iza-front`, e));
    I(r, i, a, o, s, `#2a1e16`, 0.5);
    let l = i + o * 0.02,
      u = a + s * 0.04,
      d = o * 0.96,
      f = s * 0.94;
    ((r.globalAlpha = 1),
      (r.fillStyle = [`#efb470`, `#f2c482`, `#e8a862`][e % 3]),
      r.fillRect(l, u, d, f));
    for (let t = 0; t < 10; t++) {
      let n = l + d * (0.03 + (t * 0.94) / 10),
        i = (d * 0.86) / 10;
      ((r.fillStyle = t % 3 == 0 ? `#ffe9a8` : `#fffaf0`),
        r.fillRect(n, u + f * 0.04, i, f * 0.34));
      let a = V(`asa.hoppy.menu.${((t + e) % 10) + 1}`).split(` `)[0];
      ie(
        r,
        a,
        n + i / 2,
        u + f * 0.06,
        u + f * 0.36,
        i * 0.7,
        `#1a1a1a`,
        M(),
        `800`,
      );
    }
    ((r.fillStyle = `#141414`),
      r.fillRect(l + d * 0.84, u + f * 0.42, d * 0.12, f * 0.12));
    for (let t = 0; t < 14; t++)
      ((r.fillStyle = [`#3b5a2a`, `#6a3a1a`, `#d8d0b8`, `#1a2a4a`][
        (t + e) % 4
      ]),
        r.fillRect(
          l + d * (0.04 + t * 0.05),
          u + f * 0.44,
          d * 0.022,
          f * 0.08,
        ));
    ((r.fillStyle = `#8a5a30`),
      r.fillRect(l, u + f * 0.66, d, f * 0.06),
      (r.fillStyle = `#6a4a2a`),
      r.fillRect(l, u + f * 0.72, d, f * 0.28));
    let p = 2 + Math.floor(c.next() * 4);
    for (let e = 0; e < p; e++) {
      let e = l + d * (0.1 + c.next() * 0.8);
      ((r.fillStyle = [`#1e2430`, `#3a3e4a`, `#e8e8e8`, `#5a4a3a`, `#7a2a2a`][
        Math.floor(c.next() * 5)
      ]),
        r.fillRect(e - d * 0.03, u + f * 0.52, d * 0.06, f * 0.36),
        Me(r, e, u + f * 0.49, d * 0.022, `#1a1410`));
    }
    r.fillStyle = `rgba(255,255,255,0.16)`;
    for (let e = 0; e < 6; e++) r.fillRect(l + (d * e) / 6, u, d * 0.04, f);
    ((r.fillStyle = `rgba(255,255,255,0.1)`),
      r.fillRect(l, u + f * 0.4, d, f * 0.03));
  };
}
function tt(e) {
  return (t, n, r, i, a) => {
    let o = e % 4,
      s = [`#f4efe0`, `#1a1410`, `#c8281e`, `#1d2b5a`][o],
      c = [`#b0201a`, `#f4e8c8`, `#ffffff`, `#f4f0e0`][o];
    (P(t, n, r, i, a, s, 0.6),
      H(
        t,
        V(`asa.hoppy.bar.${e + 1}`),
        n + i / 2,
        r + a * 0.52,
        i * 0.92,
        a * 0.76,
        c,
        `900`,
        e % 2 ? N() : M(),
      ));
  };
}
function nt(e) {
  return (t, n, r, i, a) => {
    (F(t, n, r, i, a, `#9a9c9a`), (t.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < a; e += 5) t.fillRect(n, r + e, i, 1.5);
    H(
      t,
      V(`asa.hoppy.bar.${e + 1}`),
      n + i / 2,
      r + a * 0.3,
      i * 0.7,
      a * 0.14,
      `#5a1a14`,
      `900`,
      N(),
    );
  };
}
var rt = $e(`asa.hoppy.name`, `asa.hoppy.sub`, `#b81c16`, `#ffffff`, `#ffe8a0`);
function it(e, t, n, r, i) {
  (F(e, t, n, r, i, `#141414`),
    F(e, t, n + i * 0.82, r, i * 0.18, `#b01a14`),
    H(
      e,
      V(`asa.rick.name`),
      t + r / 2,
      n + i * 0.42,
      r * 0.8,
      i * 0.5,
      `#e8c050`,
      `900`,
      N(),
    ));
}
var W = 3.4,
  at = 0.6,
  ot = (e) => W + (e - 1) * 3 + at;
function st(e, t) {
  for (let n = 0; n < 10; n++) {
    let r = e.weighted(Ne.map((e) => [e, e.weight])),
      i = r.names[Math.floor(e.next() * r.names.length)];
    if (!(t.includes(i) && n < 9))
      return (t.push(i), t.length > 7 && t.shift(), { trade: r, name: i });
  }
  return { trade: Ne[0], name: Ne[0].names[0] };
}
