// tokyo/assets/region-tokyo-d-ueno-DfmWW0p_ 11 — maxx
// Lines 3226-3570 of readable/tokyo/assets/region-tokyo-d-ueno-DfmWW0p_.pretty.js (statement-aligned).
function zt(e, t) {
  let n = t.white(),
    { x0: r, x1: i, z: a } = U,
    o = z;
  for (let [s, c] of [
    [r, r + 6],
    [i - 6, i],
  ])
    (e.setMaterial(0.8, 0, 0, 0),
      E(e, 15262418),
      D(e, s, a - 4, s, a, o, o + 3.2, n),
      D(e, c, a, c, a - 4, o, o + 3.2, n),
      D(e, c, a - 4, s, a - 4, o, o + 3.2, n),
      e.setMaterial(0.5, 0, 0.3, Dt),
      E(e, 16777215),
      D(e, s, a, c, a, o, o + 3.2, t.uv(`zoo-booth`)));
  (e.setMaterial(0.7, 0.2, 0, 0),
    E(e, 4868678),
    O(e, r - 1.5, o + 4.3, a - 5.5, i + 1.5, o + 4.6, a + 1.8, n),
    E(e, 8025712));
  for (let t of [r + 7.5, i - 7.5])
    for (let r of [a - 4.8, a + 1.2]) A(e, t, r, o, o + 4.3, 0.14, n, 8);
  (e.setMaterial(0.5, 0, 0.45, 2),
    E(e, 16777215),
    D(e, r + 2, a + 1.82, i - 2, a + 1.82, o + 4.6, o + 5.9, t.uv(`zoo-sign`)),
    e.setMaterial(0.7, 0.2, 0, 0),
    E(e, 4868678),
    O(e, r + 2, o + 4.6, a + 1.2, i - 2, o + 5.9, a + 1.8, n),
    e.setMaterial(0.8, 0, 0.12, 1),
    E(e, 16777215),
    D(
      e,
      r + 6.9,
      a + 1.36,
      r + 8.1,
      a + 1.36,
      o + 0.9,
      o + 4.1,
      t.uv(`zoo-hashi`),
    ),
    D(
      e,
      i - 8.1,
      a + 1.36,
      i - 6.9,
      a + 1.36,
      o + 0.9,
      o + 4.1,
      t.uv(`zoo-arigato`),
    ),
    D(
      e,
      r + 0.6,
      a + 0.03,
      r + 2.8,
      a + 0.03,
      o + 3.3,
      o + 4.2,
      t.uv(`zoo-hours`),
    ),
    e.setMaterial(0.4, 0.6, 0, 0),
    E(e, 10133152));
  for (let t = r + 7.5; t <= i - 7.5; t += 1.6)
    O(e, t - 0.2, o, a - 2.6, t + 0.2, o + 1, a - 1.4, n);
  (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
  let s = a - 11;
  (K(e, r - 4, s, i + 4, s, o, o + 3.2, t.uv(`hedge`), 4),
    e.quad(
      r - 4,
      o + 3.2,
      s,
      i + 4,
      o + 3.2,
      s,
      i + 4,
      o + 3.2,
      s - 1.2,
      r - 4,
      o + 3.2,
      s - 1.2,
      n.u0,
      n.v0,
      n.u1,
      n.v1,
    ));
  for (let a = 0; a < 7; a++) {
    let c = r - 2 + a * ((i - r + 4) / 6),
      l = s - 4 - (a % 2) * 3.5,
      u = 7 + (a % 3) * 1.6;
    (E(e, 4864556),
      O(e, c - 0.25, o, l - 0.25, c + 0.25, o + u - 2, l + 0.25, n),
      E(e, [16777215, 14215368, 13162672][a % 3]),
      j(e, c, o + u, l, 3.4, 2.6, 3.2, t.uv(`hedge`), 4, 8),
      j(e, c + 1.6, o + u - 1.2, l + 1.2, 2.2, 1.8, 2, t.uv(`hedge`), 3, 7));
  }
  (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
  let c = t.uv(`hedge`),
    l = [
      [U.lotX0, a, r - 0.2, a],
      [i + 0.2, a, U.lotX1, a],
      [U.lotX1, a, U.lotX1, U.lotZ0],
    ];
  for (let [t, r, i, a] of l) {
    let s = i - t,
      l = a - r,
      u = Math.hypot(s, l),
      d = -l / u,
      f = s / u;
    (K(
      e,
      t + d * 0.5,
      r + f * 0.5,
      i + d * 0.5,
      a + f * 0.5,
      o,
      o + 1.35,
      c,
      4,
    ),
      K(
        e,
        i - d * 0.5,
        a - f * 0.5,
        t - d * 0.5,
        r - f * 0.5,
        o,
        o + 1.35,
        c,
        4,
      ),
      e.quad(
        t + d * 0.5,
        o + 1.35,
        r + f * 0.5,
        i + d * 0.5,
        o + 1.35,
        a + f * 0.5,
        i - d * 0.5,
        o + 1.35,
        a - f * 0.5,
        t - d * 0.5,
        o + 1.35,
        r - f * 0.5,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      ),
      E(e, 1973790),
      e.setMaterial(0.5, 0.5, 0, 0),
      M(
        e,
        t + d * 0.95,
        o + 0.55,
        r + f * 0.95,
        i + d * 0.95,
        o + 0.55,
        a + f * 0.95,
        0.02,
        n,
      ));
    for (let i = 0; i <= u; i += 2)
      M(
        e,
        t + (s * i) / u + d * 0.95,
        o,
        r + (l * i) / u + f * 0.95,
        t + (s * i) / u + d * 0.95,
        o + 0.6,
        r + (l * i) / u + f * 0.95,
        0.02,
        n,
      );
    (E(e, 16777215), e.setMaterial(0.95, 0, 0, 0));
  }
}
function Bt(e, t) {
  let n = (e) => e.sakura,
    r = 0;
  for (let e = ye.z1 - 4; e > ye.z0 + 2; e -= 6)
    for (let i of [ye.x - ye.hw - 1.9, ye.x + ye.hw + 1.9])
      t.instances.push({
        model: `bonbori-${r++ % Ot}`,
        x: i,
        y: z,
        z: e,
        fx: i < ye.x ? 1 : -1,
        fz: 0,
        range: 200,
        when: n,
      });
  (t.instances.push({
    model: `sakura-gate`,
    x: ye.x,
    y: z,
    z: ye.z1 - 1,
    fx: 0,
    fz: 1,
    range: 260,
    when: n,
  }),
    t.uniques.push({
      name: `zoo-omotemon`,
      write: (t) => zt(t, e),
      cx: (U.x0 + U.x1) / 2,
      cz: U.z,
      range: 480,
    }));
  let i = (e) => e.wd !== 1 && e.h >= 9.5 && e.h < 17;
  (t.instances.push({
    model: `zoo-gate-shut`,
    x: (U.x0 + U.x1) / 2,
    y: z,
    z: U.z - 0.4,
    fx: 0,
    fz: 1,
    range: 200,
    when: (e) => !i(e),
  }),
    t.boxes.push({
      minX: U.x0,
      minZ: U.z - 4,
      maxX: U.x1,
      maxZ: U.z - 1.2,
      y0: z - 1,
      y1: z + 4,
    }),
    t.boxes.push({
      minX: U.lotX0,
      minZ: U.z - 0.5,
      maxX: U.x0,
      maxZ: U.z + 0.5,
      y0: z - 1,
      y1: z + 1.4,
      tag: `prop`,
    }),
    t.boxes.push({
      minX: U.x1,
      minZ: U.z - 0.5,
      maxX: U.lotX1 + 0.5,
      maxZ: U.z + 0.5,
      y0: z - 1,
      y1: z + 1.4,
      tag: `prop`,
    }),
    t.boxes.push({
      minX: U.lotX1 - 0.5,
      minZ: U.lotZ0,
      maxX: U.lotX1 + 0.5,
      maxZ: U.z,
      y0: z - 1,
      y1: z + 1.4,
      tag: `prop`,
    }));
  for (let e of [U.x0 + 7.5, U.x1 - 7.5])
    for (let n of [U.z - 4.8, U.z + 1.2])
      t.circles.push({ x: e, z: n, r: 0.16, y0: z, y1: z + 4.3 });
  t.instances.push({
    model: `heaven-pitch`,
    x: -238,
    y: z,
    z: -1337.6,
    fx: 0,
    fz: 1,
    range: 110,
    when: (e) => e.h >= 10.5 && e.h < 17.5,
  });
  for (let e = 0; e < 14; e++) {
    let n = e * 2.4,
      r = 2.5 + (e % 5) * 1.3;
    t.instances.push({
      model: `pigeon`,
      x: -205 + Math.cos(n) * r,
      y: z,
      z: -1328 + Math.sin(n) * r * 0.6,
      fx: Math.cos(n * 1.7),
      fz: Math.sin(n * 1.7),
      range: 60,
      when: (e) => e.h >= 6 && e.h < 18.5,
    });
  }
  (t.instances.push({
    model: `panda-post`,
    x: xe.x,
    y: z,
    z: xe.z,
    fx: 0,
    fz: 1,
    range: 120,
  }),
    t.circles.push({ x: xe.x, z: xe.z, r: 0.3, y0: z, y1: z + 2.2 }));
}
var q = Te,
  Vt = 0.15,
  Ht = 0.18,
  Ut = 0.2,
  Wt = 0.21,
  J = Se.x0,
  Y = Se.x1,
  X = Se.z0,
  Z = Se.z1,
  Q = { x0: -358, x1: -350 },
  $ = { z0: -1083, z1: -1075 },
  Gt = [
    { minX: J - 6, minZ: X - 6, maxX: Y + 6, maxZ: X },
    { minX: J - 6 - 14, minZ: Z, maxX: Y + 6, maxZ: Z + 6 },
    { minX: J - 6, minZ: X, maxX: J, maxZ: Z },
    { minX: Y, minZ: X, maxX: Y + 6, maxZ: Z },
    { minX: Y, minZ: X - 22, maxX: Y + 6, maxZ: X - 6 },
  ],
  Kt = [
    { minX: Q.x0, minZ: Z + 6, maxX: Q.x1, maxZ: q.z1 },
    { minX: -266, minZ: Z + 6, maxX: -260, maxZ: q.z1 },
    { minX: -440, minZ: Z + 6, maxX: -434, maxZ: q.z1 },
    { minX: Y + 6, minZ: $.z0, maxX: q.x1, maxZ: $.z1 },
    { minX: Y + 6, minZ: X - 22, maxX: q.x1, maxZ: X - 16 },
    { minX: G.x0 - 1.5, minZ: G.z0 - 3, maxX: W.x0, maxZ: G.z1 + 3 },
  ],
  qt = (e, t, n, r = 0) =>
    t > e.minX - r && t < e.maxX + r && n > e.minZ - r && n < e.maxZ + r,
  Jt = (e, t, n = 0) =>
    Gt.some((r) => qt(r, e, t, n)) || Kt.some((r) => qt(r, e, t, n)),
  Yt = (e, t, n = 0) => e > J - n && e < Y + n && t > X - n && t < Z + n,
  Xt = (e, t, n = 0) =>
    (o(`ueno-pondside`, Math.round(e * 10), Math.round(t * 10), n) & 65535) /
    65535;
function Zt(e) {
  (e.need(`pond-paver`, 128, 128, Qt),
    e.need(`pond-gravel`, 64, 64, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#b3a588`),
        R(
          e,
          31,
          t,
          n,
          r,
          i,
          180,
          1.6,
          [`#9c8f74`, `#c9bc9e`, `#8a7e66`, `#d6cbb0`],
          0.55,
        ));
    }),
    e.need(`pond-stone`, 96, 192, $t));
}
