// tokyo__assets__region-tokyo-d-ueno-CEorO8m2 03 — need
// Lines 698-1029 of readable/tokyo__assets__region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
function R(e, t, n, r, i, a, o, s, c, l = 0.35) {
  let u = t >>> 0 || 1,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296;
  e.globalAlpha = l;
  for (let t = 0; t < o; t++)
    ((e.fillStyle = c[t % c.length]),
      e.fillRect(n + d() * i, r + d() * a, s * (0.5 + d()), s * (0.5 + d())));
  e.globalAlpha = 1;
}
function me(e, t, n, r, i = `#1a1a1a`, a = `#ffffff`) {
  (L(e, t - r * 0.72, n - r * 0.72, r * 0.36, i),
    L(e, t + r * 0.72, n - r * 0.72, r * 0.36, i),
    L(e, t, n, r, a),
    (e.strokeStyle = i),
    (e.lineWidth = Math.max(1.5, r * 0.06)),
    e.beginPath(),
    e.arc(t, n, r, 0, Math.PI * 2),
    e.stroke(),
    (e.fillStyle = i));
  for (let i of [-1, 1])
    (e.beginPath(),
      e.ellipse(
        t + i * r * 0.38,
        n - r * 0.05,
        r * 0.22,
        r * 0.3,
        i * 0.6,
        0,
        Math.PI * 2,
      ),
      e.fill());
  (L(e, t - r * 0.36, n - r * 0.08, r * 0.07, a),
    L(e, t + r * 0.36, n - r * 0.08, r * 0.07, a),
    L(e, t, n + r * 0.3, r * 0.12, i, r * 0.09));
}
var z = 16.15,
  he = 0.15,
  B = { x0: -152, x1: -139.7, z0: -1250, z1: -1233, h: 5.6 },
  ge = { x0: -171, x1: -152, z0: -1251, z1: -1229 },
  V = { x0: -158.5, x1: -140.2, z0: -1227.5, z1: -1203.5 },
  _e = { x0: -160.6, x1: -140.2, z: -1191, h: 5.4 },
  ve = { x: -168, z: -1186, hw: 6 },
  ye = { x: -185, hw: 6, z0: -1350, z1: -1214 },
  H = { x: -265.6, z: -1210.6, viewX: -262, viewZ: -1216 },
  be = { x: -354, z: -1079 },
  U = { x0: -324, x1: -298, z: -1290, lotX0: -420, lotX1: -290, lotZ0: -1400 },
  xe = { x: -293, z: -1283.5 },
  W = { x0: -426, x1: -420.1, z0: -1060, z1: -1036 },
  G = { x0: -430.5, x1: -426, z0: -1052, z1: -1045 },
  Se = { x0: -420, x1: -230, z0: -1150, z1: -1010 },
  Ce = { x0: -347, x1: -233, z0: -1147, z1: -1013 },
  we = [
    { minX: -372, minZ: -1096, maxX: -336, maxZ: -1062 },
    { minX: -344, minZ: -1087, maxX: -228, maxZ: -1071 },
    { minX: -362, minZ: -1070, maxX: -346, maxZ: -1006 },
  ],
  Te = { x0: -480, x1: -206.75, z0: -1182, z1: -962.25 },
  Ee = { z0: -1132, z1: -1126 },
  De = { x0: -306, x1: -300 },
  Oe = [
    { minX: -440, minZ: -1300, maxX: -135, maxZ: -1180 },
    { minX: -482, minZ: -1186, maxX: -200, maxZ: -958 },
  ],
  ke = [
    {
      box: { minX: ge.x0 + 2, minZ: ge.z0, maxX: B.x1, maxZ: ge.z1 },
      label: `ueno-koenguchi-plaza (公園口)`,
    },
    {
      box: { minX: V.x0 - 0.8, minZ: V.z0 - 0.8, maxX: V.x1, maxZ: V.z1 + 0.5 },
      label: `ueno-bunka-kaikan (東京文化会館, renovation hoarding)`,
    },
    {
      box: { minX: U.x0 - 2, minZ: U.z - 4, maxX: U.x1 + 2, maxZ: U.z + 3 },
      label: `ueno-zoo-omotemon (表門)`,
    },
    {
      box: {
        minX: H.x - 6,
        minZ: H.viewZ - 6,
        maxX: H.viewX + 6,
        maxZ: H.z + 4,
      },
      label: `ueno-tsuki-no-matsu (月の松 and its view)`,
    },
  ],
  Ae = [
    {
      box: { minX: -480, minZ: -1182, maxX: -207, maxZ: -962.5 },
      label: `ueno-shinobazu-park (不忍池 park: lawns, promenade, paths)`,
    },
  ],
  je = 3;
function Me(e) {
  (e.need(`koen-front`, 512, 160, Ne(!0)),
    e.need(`koen-side`, 256, 160, Ne(!1)),
    e.need(`koen-sign`, 384, 64, Pe),
    e.need(`granite`, 128, 128, Fe),
    e.need(`pylon`, 96, 288, Ie),
    e.need(`conc`, 128, 128, Le(`#a9a49a`)),
    e.need(`conc-dark`, 64, 64, Le(`#7d7a74`)),
    e.need(`bunka-eave`, 512, 96, Re),
    e.need(`bunka-lobby`, 256, 128, ze),
    e.need(`bunka-wall`, 256, 192, Be),
    e.need(`hoard`, 384, 96, Ve(0)),
    e.need(`hoard-notice`, 384, 96, Ve(1)),
    e.need(`hoard-board`, 192, 128, He),
    e.need(`hoard-owabi`, 96, 128, Ue));
}
function Ne(e) {
  return (t, n, r, i, a) => {
    if (
      (F(t, n, r, i, a, `#efe9dc`, 0.55),
      pe(t, n, r + a * 0.82, i, a * 0.18, `#c8c2b4`, 0.5),
      e)
    ) {
      for (let e = 0; e < 9; e++) {
        let o = n + i * (0.08 + e * 0.1);
        (I(t, o, r + a * 0.58, i * 0.045, a * 0.24, `#f6f6f4`),
          I(t, o, r + a * 0.58, i * 0.045, a * 0.035, `#2ea57a`),
          I(t, o + i * 0.01, r + a * 0.62, i * 0.025, a * 0.02, `#3a7ad0`));
      }
      (I(t, n + i * 0.3, r + a * 0.2, i * 0.4, a * 0.11, `#2b2d30`),
        P(
          t,
          N(`ueno.koen.kaisatsu`),
          n + i * 0.42,
          r + a * 0.255,
          i * 0.18,
          a * 0.08,
          `#ffffff`,
          `800`,
        ),
        I(t, n + i * 0.56, r + a * 0.215, i * 0.13, a * 0.08, `#101010`));
      for (let e = 0; e < 3; e++)
        I(
          t,
          n + i * 0.57,
          r + a * (0.225 + e * 0.022),
          i * 0.11,
          a * 0.012,
          e ? `#ff9a2a` : `#4ad06a`,
        );
      for (let e = 0; e < 6; e++) {
        let o = n + i * (0.12 + ((e * 37) % 80) / 100),
          s = a * (0.24 + (e % 3) * 0.02);
        (I(t, o, r + a * 0.82 - s, i * 0.016, s, `#3a3a42`),
          I(
            t,
            o - i * 0.002,
            r + a * 0.82 - s - a * 0.05,
            i * 0.02,
            a * 0.05,
            `#2a2a30`,
          ));
      }
    } else
      (I(t, n + i * 0.1, r + a * 0.68, i * 0.8, a * 0.06, `#8a7a62`),
        I(t, n + i * 0.62, r + a * 0.22, i * 0.14, a * 0.12, `#1d4e9e`),
        P(
          t,
          `WC`,
          n + i * 0.69,
          r + a * 0.28,
          i * 0.1,
          a * 0.09,
          `#ffffff`,
          `700`,
        ));
    t.globalAlpha = 1;
    let o = e ? 30 : 15;
    for (let e = 0; e <= o; e++) {
      let s = n + (i * e) / o - i * 0.006;
      ((t.fillStyle = e % 5 == 0 ? `#3d3a36` : `#a8784a`),
        t.fillRect(s, r, i * (e % 5 == 0 ? 0.012 : 0.009), a));
    }
    (I(t, n, r + a * 0.83, i, a * 0.02, `#3d3a36`),
      I(t, n, r + a * 0.97, i, a * 0.03, `#3d3a36`));
  };
}
function Pe(e, t, n, r, i) {
  (F(e, t, n, r, i, `#2b2d30`, 0.6),
    I(e, t + r * 0.03, n + i * 0.18, i * 0.64, i * 0.64, `#2ea53a`),
    P(
      e,
      N(`ueno.koen.jr`),
      t + r * 0.03 + i * 0.32,
      n + i * 0.5,
      i * 0.5,
      i * 0.4,
      `#ffffff`,
      `900`,
    ),
    P(
      e,
      N(`ueno.koen.exit`),
      t + r * 0.42,
      n + i * 0.46,
      r * 0.42,
      i * 0.62,
      `#ffffff`,
      `800`,
    ),
    P(
      e,
      N(`ueno.koen.exit-en`),
      t + r * 0.8,
      n + i * 0.52,
      r * 0.3,
      i * 0.36,
      `#ffffff`,
      `600`,
    ));
}
function Fe(e, t, n, r, i) {
  I(e, t, n, r, i, `#9b9a96`);
  for (let a = 0; a < 4; a++)
    for (let o = 0; o < 4; o++)
      I(
        e,
        t + (a * r) / 4 + 1,
        n + (o * i) / 4 + 1,
        r / 4 - 2,
        i / 4 - 2,
        [`#a7a6a1`, `#9f9e99`, `#ababa5`, `#a2a19c`][(a + o * 3) % 4],
      );
  R(e, 71, t, n, r, i, 260, 1.4, [`#7a7a76`, `#c6c5c0`, `#8a8986`], 0.4);
}
function Ie(e, t, n, r, i) {
  (I(e, t, n, r, i, `#3b3530`),
    I(e, t + r * 0.08, n + i * 0.04, r * 0.84, i * 0.1, `#2ea53a`),
    P(
      e,
      N(`ueno.koen.guide-station`),
      t + r / 2,
      n + i * 0.09,
      r * 0.78,
      i * 0.06,
      `#ffffff`,
      `800`,
    ),
    [
      [`ueno.koen.guide-museum`, `↑`],
      [`ueno.koen.guide-zoo`, `↖`],
      [`ueno.koen.guide-shinobazu`, `←`],
      [`ueno.park.name`, `↑`],
    ].forEach(([a, o], s) => {
      let c = n + i * (0.22 + s * 0.17);
      (I(e, t + r * 0.08, c, r * 0.84, i * 0.13, `#4a433c`),
        P(e, o, t + r * 0.2, c + i * 0.065, r * 0.2, i * 0.1, `#ffd84a`, `900`),
        P(
          e,
          N(a),
          t + r * 0.6,
          c + i * 0.065,
          r * 0.6,
          i * 0.06,
          `#ffffff`,
          `700`,
        ));
    }));
}
function Le(e) {
  return (t, n, r, i, a) => {
    (I(t, n, r, i, a, e),
      R(
        t,
        e.length * 13 + i,
        n,
        r,
        i,
        a,
        Math.round((i * a) / 60),
        1.6,
        [`#6e6a64`, `#c4c0b8`, `#8a867e`],
        0.25,
      ),
      (t.globalAlpha = 0.18),
      (t.fillStyle = `#5a5650`));
    for (let e = 0; e < 6; e++) t.fillRect(n, r + (a * e) / 6, i, 1);
    t.globalAlpha = 1;
  };
}
function Re(e, t, n, r, i) {
  I(e, t, n, r, i, `#b8b2a6`);
  for (let a = 0; a < 24; a++) I(e, t + (r * a) / 24, n, 1.5, i, `#a39d92`);
  for (let a = 0; a < 4; a++) I(e, t, n + (i * a) / 4, r, 1, `#a8a296`);
  (R(e, 5, t, n, r, i, 900, 1.5, [`#8a857b`, `#cfc9bd`, `#7a756c`], 0.3),
    (e.globalAlpha = 0.16),
    (e.fillStyle = `#4a463e`));
  for (let a = 0; a < 40; a++)
    e.fillRect(
      t + ((a * 97) % 100) * (r / 100),
      n + i * 0.15,
      2,
      i * (0.3 + ((a * 31) % 50) / 100),
    );
  ((e.globalAlpha = 1), I(e, t, n + i * 0.93, r, i * 0.07, `#8e897e`));
}
function ze(e, t, n, r, i) {
  I(e, t, n, r, i, `#2c3236`);
  for (let a = 0; a < 8; a++)
    I(
      e,
      t + (r * a) / 8 + r * 0.01,
      n + i * 0.05,
      r / 8 - r * 0.02,
      i * 0.9,
      [`#38424a`, `#33393f`, `#3b4650`][a % 3],
    );
  for (let a = 0; a <= 4; a++)
    I(e, t + (r * a) / 4 - r * 0.02, n, r * 0.04, i, `#a49e92`);
  I(e, t, n + i * 0.5, r, i * 0.015, `#20262a`);
}
function Be(e, t, n, r, i) {
  I(e, t, n, r, i, `#9a948a`);
  let a = 17,
    o = () => (a = (a * 1103515245 + 12345) >>> 0) / 4294967296;
  for (let a = 0; a < 90; a++) {
    let s = r * (0.04 + o() * 0.1),
      c = i * (0.03 + o() * 0.06);
    I(
      e,
      t + o() * (r - s),
      n + o() * (i - c),
      s,
      c,
      [`#8c867c`, `#a6a094`, `#837e75`, `#b0aa9e`][a % 4],
    );
  }
  R(e, 9, t, n, r, i, 500, 1.2, [`#6e6a62`, `#c0bab0`], 0.25);
}
