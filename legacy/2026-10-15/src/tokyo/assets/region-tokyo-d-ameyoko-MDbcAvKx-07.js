// tokyo/assets/region-tokyo-d-ameyoko-MDbcAvKx 07 — setmaterial
// Lines 1618-1911 of readable/tokyo/assets/region-tokyo-d-ameyoko-MDbcAvKx.pretty.js (statement-aligned).
function Oe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = M,
    o = 0.15,
    s = 33.349999999999994,
    c = t.white(),
    u = t.uv(`dp-glass`),
    p = t.uv(`dp-stone`);
  (e.setMaterial(0.3, 0.1, 0.45, G | 16), w(e, 16777215));
  let m = o,
    h = 4.75,
    g = Math.round((a - i) / 6);
  for (let r = 0; r < g; r++) {
    let o = i + ((a - i) * r) / g,
      s = i + ((a - i) * (r + 1)) / g;
    l(
      e,
      n,
      o + 0.4,
      n,
      s - 0.4,
      0.55,
      4.15,
      t.uv(r === 2 ? `dp-door` : `dp-show`),
    );
  }
  let _ = Math.round((r - n) / 6);
  for (let a = 0; a < _; a++) {
    let o = n + ((r - n) * a) / _,
      s = n + ((r - n) * (a + 1)) / _;
    l(e, s - 0.4, i, o + 0.4, i, 0.55, 4.15, t.uv(`dp-show`));
  }
  (e.setMaterial(0.8, 0, 0, 0), w(e, 16777215));
  for (let t = 0; t <= g; t++) {
    let r = i + ((a - i) * t) / g;
    f(e, n - 0.3, m, r - 0.45, n + 0.1, h, r + 0.45, p);
  }
  for (let t = 0; t <= _; t++) {
    let a = n + ((r - n) * t) / _;
    f(e, a - 0.45, m, i - 0.3, a + 0.45, h, i + 0.1, p);
  }
  (f(e, n - 0.35, 4.15, i - 0.35, r, h, a, p), w(e, 9050650));
  let v = i + ((a - i) * 2) / g,
    y = i + ((a - i) * 3) / g;
  f(e, n - 2.4, 3.65, v, n, 3.9, y, c);
  let b = 29.249999999999996;
  (e.setMaterial(0.85, 0, 0, 0),
    w(e, 16777215),
    d(e, n, i, n, a, h, b, p, 4.1),
    d(e, r, i, n, i, h, b, p, 4.1),
    w(e, 14997692));
  let x = Math.round((a - i) / 3),
    S = Math.round((r - n) / 3);
  for (let t = 0; t <= x; t++) {
    let r = i + ((a - i) * t) / x;
    f(e, n - 0.35, h, r - 0.22, n, 30.449999999999996, r + 0.22, p);
  }
  for (let t = 0; t <= S; t++) {
    let a = n + ((r - n) * t) / S;
    f(e, a - 0.22, h, i - 0.35, a + 0.22, 30.449999999999996, i, p);
  }
  (e.setMaterial(0.35, 0.1, 0.5, 35), w(e, 16777215));
  for (let t = 1; t < 7; t++) {
    let o = 0.55 + K * t + 0.5,
      s = o + K - 1;
    for (let t = 0; t < x; t++) {
      let r = i + ((a - i) * t) / x + 0.45,
        c = i + ((a - i) * (t + 1)) / x - 0.45;
      l(e, n - 0.04, r, n - 0.04, c, o, s, u);
    }
    for (let t = 0; t < S; t++) {
      let a = n + ((r - n) * t) / S + 0.45,
        c = n + ((r - n) * (t + 1)) / S - 0.45;
      l(e, c, i - 0.04, a, i - 0.04, o, s, u);
    }
  }
  (e.setMaterial(0.8, 0, 0, 0), w(e, 16777215));
  let C = 29.249999999999996;
  (d(e, n, i, n, a, C, s, t.uv(`dp-crown`), 8),
    d(e, r, i, n, i, C, s, t.uv(`dp-crown`), 8),
    d(e, n, a, r, a, o, s, p, 6),
    d(e, r, a, r, i, o, s, p, 6),
    w(e, 11575424),
    f(e, n - 0.3, s, i - 0.3, r, 33.949999999999996, a, c),
    e.setMaterial(0.5, 0, 0.5, 2),
    w(e, 16777215),
    l(
      e,
      r - 0.6,
      i + 0.4,
      n + 0.6,
      i + 0.4,
      34.949999999999996,
      38.55,
      t.uv(`dp-roof`),
    ),
    l(
      e,
      n + 0.4,
      i + 0.6,
      n + 0.4,
      i + 20,
      34.949999999999996,
      38.55,
      t.uv(`dp-roof`),
    ),
    e.setMaterial(0.6, 0.5, 0, 0),
    w(e, 4868682),
    l(e, n + 0.6, i + 0.45, r - 0.6, i + 0.45, 34.949999999999996, 38.55, c),
    l(e, n + 0.45, i + 20, n + 0.45, i + 0.6, 34.949999999999996, 38.55, c));
  for (let t = 0; t < 4; t++)
    (f(
      e,
      n + 0.6 + t * ((r - n - 1.2) / 3) - 0.08,
      33.949999999999996,
      i + 0.4,
      n + 0.6 + t * ((r - n - 1.2) / 3) + 0.08,
      34.949999999999996,
      i + 0.6,
      c,
    ),
      f(
        e,
        n + 0.4,
        33.949999999999996,
        i + 0.6 + t * 6.4 - 0.08,
        n + 0.6,
        34.949999999999996,
        i + 0.6 + t * 6.4 + 0.08,
        c,
      ));
  (e.setMaterial(0.5, 0, 0.55, G), w(e, 16777215));
  let T = n - 1.2,
    E = i + 4;
  (f(e, T - 0.05, 7.15, E - 0.05, n, 7.550000000000001, E + 0.05, c),
    l(e, T, E - 0.4, T, E + 0.4, 8.15, 26.15, t.uv(`dp-vsign`)),
    l(e, T + 0.3, E + 0.4, T + 0.3, E - 0.4, 8.15, 26.15, t.uv(`dp-vsign`)),
    e.setMaterial(0.6, 0.3, 0, 0),
    w(e, 9050650),
    f(e, T, 8.15, E - 0.45, T + 0.3, 26.15, E - 0.4, c),
    f(e, T, 8.15, E + 0.4, T + 0.3, 26.15, E + 0.45, c));
}
function ke(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = M;
  (t.uniques.push({
    name: `takezakaya`,
    write: (t) => Oe(t, e),
    cx: (n + r) / 2,
    cz: (i + a) / 2,
    range: 900,
  }),
    t.boxes.push({
      minX: n,
      minZ: i,
      maxX: r,
      maxZ: a,
      y0: 0,
      y1: 37.349999999999994,
    }));
}
var q = 3,
  J = { x: -104, z: -810 },
  Ae = 22,
  Y = 4.5,
  X = [
    `leather`,
    `ceramic`,
    `glass`,
    `wood`,
    `hat`,
    `print`,
    `accessory`,
    `coffee`,
  ];
function je(e) {
  for (let t of X) e.need(`ar-in-${t}`, 192, 160, Me(t));
  (e.need(`ar-closed`, 192, 160, Z(`ameyoko.arcade.owari`)),
    e.need(`ar-closed-wed`, 192, 160, Z(`ameyoko.arcade.teikyu`)),
    e.need(`ar-fascia`, 384, 48, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#f4f4f2`),
        y(e, t, n + i * 0.9, r, i * 0.1, `#d8d8d4`));
    }));
  for (let t of X)
    e.need(`ar-plate-${t}`, 160, 40, (e, n, r, i, a) => {
      (b(e, n, r, i, a, `#ffffff`, 0.55),
        h(
          e,
          v(`ameyoko.arcade.${t}`),
          n + i / 2,
          r + a * 0.52,
          i * 0.9,
          a * 0.62,
          `#3a3a3a`,
          `700`,
        ));
    });
  (e.need(`ar-sign`, 256, 192, Ne),
    e.need(`ar-wall`, 128, 128, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#ecebe6`),
        g(e, 17, t, n, r, i, 120, 1.5, [`#d4d3ce`, `#f8f8f4`], 0.35));
    }));
}
function Me(e) {
  return (t, n, r, i, a) => {
    b(t, n, r, i, a, `#f6f2ea`, 0.6);
    let o = {
      leather: [`#8a5a32`, `#5a3a22`, `#b07a48`, `#3a2a1e`],
      ceramic: [`#e8e4dc`, `#6a8aa0`, `#c8b8a0`, `#2a3a4a`],
      glass: [`#9ad0e0`, `#e0a0c0`, `#f0e080`, `#80c0a0`],
      wood: [`#c8a070`, `#a07850`, `#e0c090`, `#6a4a30`],
      hat: [`#2a2a2a`, `#c8b090`, `#8a2a2a`, `#4a5a7a`],
      print: [`#f0ece0`, `#c03030`, `#2a2a2a`, `#3a5aa0`],
      accessory: [`#e8c860`, `#c0c0c8`, `#e080a0`, `#80a0e0`],
      coffee: [`#5a3a22`, `#e8dcc8`, `#2a2a2a`, `#a07a50`],
    }[e];
    for (let e = 0; e < 3; e++) {
      y(
        t,
        n + i * 0.05,
        r + a * (0.22 + e * 0.17),
        i * 0.9,
        a * 0.012,
        `#b8b2a8`,
      );
      for (let s = 0; s < 9; s++) {
        let c = i * (0.05 + ((s * 7 + e * 3) % 4) * 0.012);
        y(
          t,
          n + i * (0.07 + s * 0.1),
          r + a * (0.22 + e * 0.17) - a * 0.1,
          c,
          a * 0.1,
          o[(s + e) % o.length],
        );
      }
    }
    (y(t, n + i * 0.12, r + a * 0.72, i * 0.76, a * 0.06, `#9a7a56`),
      y(t, n + i * 0.16, r + a * 0.78, i * 0.04, a * 0.18, `#7a5e42`),
      y(t, n + i * 0.8, r + a * 0.78, i * 0.04, a * 0.18, `#7a5e42`),
      y(t, n + i * 0.46, r + a * 0.5, i * 0.08, a * 0.22, `#3a4a5a`),
      p(t, n + i * 0.5, r + a * 0.46, i * 0.035, `#e0b890`));
    for (let e = 0; e < 3; e++)
      p(t, n + i * (0.25 + e * 0.25), r + a * 0.05, i * 0.025, `#fff4d8`);
  };
}
function Z(e) {
  return (t, n, r, i, a) => {
    y(t, n, r, i, a, `#4a4c50`);
    for (let e = 0; e < 6; e++)
      y(
        t,
        n + i * (0.05 + e * 0.16),
        r + a * 0.2,
        i * 0.12,
        a * 0.5,
        `#585a5e`,
      );
    (y(t, n + i * 0.22, r + a * 0.4, i * 0.56, a * 0.14, `#f4f4f2`),
      h(t, v(e), n + i / 2, r + a * 0.47, i * 0.52, a * 0.1, `#3a3a3a`, `800`));
  };
}
function Ne(e, t, n, r, i) {
  (b(e, t, n, r, i, `#ffffff`, 0.55),
    h(
      e,
      v(`ameyoko.arcade.name`),
      t + r / 2,
      n + i * 0.26,
      r * 0.86,
      i * 0.2,
      `#2a2a2a`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.arcade.latin`),
      t + r / 2,
      n + i * 0.48,
      r * 0.7,
      i * 0.12,
      `#2a2a2a`,
      `700`,
    ),
    y(e, t + r * 0.2, n + i * 0.6, r * 0.6, 2, `#2a2a2a`),
    h(
      e,
      v(`ameyoko.arcade.hours`),
      t + r / 2,
      n + i * 0.74,
      r * 0.8,
      i * 0.1,
      `#2a2a2a`,
      `700`,
    ));
}
