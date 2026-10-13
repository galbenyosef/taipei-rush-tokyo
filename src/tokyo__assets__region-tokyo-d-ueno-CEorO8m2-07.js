// tokyo__assets__region-tokyo-d-ueno-CEorO8m2 07 — need
// Lines 1885-2222 of readable/tokyo__assets__region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
var ot = (e) => [
  {
    name: `park-stone`,
    write: (t) => {
      (t.setMaterial(0.95, 0, 0, 0),
        E(t, 9079428),
        k(t, 0, 0, 0, 0.35, 0.95, 0.55, 0, 1, e.white()),
        E(t, 16777215),
        k(
          t,
          0,
          0,
          0.35,
          2.35,
          0.55,
          0.26,
          0,
          1,
          e.uv(`stone-name`),
          e.uv(`stone-name`),
        ));
    },
  },
  {
    name: `park-mapboard`,
    write: (t) => {
      let n = e.white();
      (t.setMaterial(0.6, 0.3, 0, 0), E(t, 3815990));
      for (let e of [-1.05, 1.05])
        O(t, e - 0.05, 0, -0.05, e + 0.05, 2.35, 0.05, n);
      (O(t, -1.2, 2.3, -0.25, 1.2, 2.4, 0.25, n),
        t.setMaterial(0.6, 0, 0.2, 1),
        E(t, 16777215),
        D(t, -1, 0.07, 1, 0.07, 0.9, 2.2, e.uv(`park-map`)),
        E(t, 5921366),
        D(t, 1, -0.07, -1, -0.07, 0.9, 2.2, n));
    },
  },
  {
    name: `bus-stop`,
    write: (t) => {
      let n = e.white();
      (t.setMaterial(0.5, 0.4, 0, 0),
        E(t, 10133668),
        A(t, 0, 0, 0, 2.6, 0.04, n, 6),
        E(t, 6975088),
        re(t, 0, 0.02, 0, 0.22, n, 8),
        t.setMaterial(0.6, 0, 0.15, 1),
        E(t, 16777215),
        k(
          t,
          0,
          0,
          2,
          2.6,
          0.3,
          0.02,
          0,
          1,
          n,
          e.uv(`bus-flag`),
          e.uv(`bus-flag`),
        ),
        k(
          t,
          0,
          0.08,
          0.9,
          1.5,
          0.16,
          0.05,
          0,
          1,
          n,
          e.uv(`bus-table`),
          e.uv(`bus-table`),
        ));
    },
  },
];
function st(e, t) {
  (t.uniques.push({
    name: `keisei-ueno`,
    write: (t) => at(t, e),
    cx: (_e.x0 + _e.x1) / 2,
    cz: _e.z,
    range: 420,
  }),
    t.instances.push({
      model: `park-stone`,
      x: ve.x - ve.hw - 2.6,
      y: he,
      z: ve.z - 1.6,
      fx: 0,
      fz: 1,
      range: 160,
    }),
    t.boxes.push({
      minX: ve.x - ve.hw - 3.6,
      minZ: ve.z - 2.2,
      maxX: ve.x - ve.hw - 1.6,
      maxZ: ve.z - 1,
      y0: he,
      y1: he + 2.4,
    }),
    t.instances.push({
      model: `park-mapboard`,
      x: -179.5,
      y: z,
      z: -1212.6,
      fx: 0,
      fz: 1,
      range: 120,
    }),
    t.boxes.push({
      minX: -180.8,
      minZ: -1212.9,
      maxX: -178.2,
      maxZ: -1212.3,
      y0: z,
      y1: z + 2.4,
    }),
    t.instances.push({
      model: `bus-stop`,
      x: -151.5,
      y: he,
      z: -1183.4,
      fx: 0,
      fz: 1,
      range: 140,
    }),
    t.circles.push({ x: -151.5, z: -1183.4, r: 0.2, y0: he, y1: he + 2.6 }));
}
function ct(e) {
  (e.need(`leaf-green`, 64, 64, lt(`#4f8a3a`, `#6aa24a`, `#3a6e2c`, 0)),
    e.need(`leaf-brown`, 64, 64, lt(`#9a8a4a`, `#b49a52`, `#6a5a2c`, 1)),
    e.need(`leaf-dead`, 64, 64, lt(`#5a4a32`, `#6e5a3a`, `#3a3024`, 2)),
    e.need(`pod`, 32, 32, ut),
    e.need(`petal`, 32, 32, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#f4a6c0`),
        L(e, t + r / 2, n + i / 2, r * 0.3, `#fbd8e4`));
    }),
    e.need(`deck-wood`, 128, 128, dt),
    e.need(`kiosk-front`, 256, 160, ft),
    e.need(`boat-sign`, 256, 48, pt),
    e.need(`boat-board`, 160, 128, mt),
    e.need(`hasu-board`, 192, 128, ht),
    e.need(`matsu-board`, 128, 128, gt),
    e.need(`pine-pad`, 64, 64, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#3e5e30`),
        R(e, 4, t, n, r, i, 260, 2, [`#5a7e42`, `#2c4424`, `#6a8e4c`], 0.65));
    }),
    e.need(`bark`, 64, 64, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#5a4434`),
        R(e, 8, t, n, r, i, 160, 2.5, [`#3e2e22`, `#7a5e46`, `#4a382a`], 0.5));
    }));
}
function lt(e, t, n, r) {
  return (i, a, o, s, c) => {
    (I(i, a, o, s, c, e),
      (i.globalAlpha = 0.5),
      (i.strokeStyle = t),
      (i.lineWidth = 1.2));
    for (let e = 0; e < 14; e++) {
      let t = (e / 14) * Math.PI * 2;
      (i.beginPath(),
        i.moveTo(a + s / 2, o + c / 2),
        i.lineTo(
          a + s / 2 + Math.cos(t) * s * 0.5,
          o + c / 2 + Math.sin(t) * c * 0.5,
        ),
        i.stroke());
    }
    ((i.globalAlpha = 1),
      L(i, a + s / 2, o + c / 2, s * 0.06, t),
      r >= 1 &&
        R(
          i,
          20 + r,
          a,
          o,
          s,
          c,
          r === 1 ? 40 : 70,
          4,
          [n, `#7a6a3a`, `#4a3a22`],
          0.55,
        ));
  };
}
function ut(e, t, n, r, i) {
  I(e, t, n, r, i, `#9a8a5a`);
  for (let a = 0; a < 9; a++)
    L(
      e,
      t + r * (0.2 + (a % 3) * 0.3),
      n + i * (0.2 + Math.floor(a / 3) * 0.3),
      r * 0.06,
      `#5e5236`,
    );
}
function dt(e, t, n, r, i) {
  I(e, t, n, r, i, `#8a7a62`);
  for (let a = 0; a < 8; a++)
    I(
      e,
      t,
      n + (a * i) / 8,
      r,
      i / 8 - 2,
      [`#9a8a70`, `#8e7e66`, `#a08e72`, `#94846a`][a % 4],
    );
  R(e, 3, t, n, r, i, 120, 1.5, [`#6a5a46`, `#b0a084`], 0.3);
}
function ft(e, t, n, r, i) {
  (I(e, t, n, r, i, `#f2f0ea`),
    F(e, t + r * 0.06, n + i * 0.18, r * 0.42, i * 0.46, `#e6dcc4`, 0.55),
    I(e, t + r * 0.06, n + i * 0.6, r * 0.42, i * 0.06, `#7a6a52`),
    P(
      e,
      N(`ueno.boat.ticket`),
      t + r * 0.27,
      n + i * 0.1,
      r * 0.36,
      i * 0.1,
      `#1d4e9e`,
      `900`,
    ),
    I(e, t + r * 0.54, n + i * 0.1, r * 0.42, i * 0.62, `#1d4e9e`),
    [
      N(`ueno.boat.swan`),
      N(`ueno.boat.row`),
      N(`ueno.boat.cycle`),
      N(`ueno.boat.hours`),
    ].forEach((a, o) =>
      de(
        e,
        a,
        t + r * 0.57,
        n + i * (0.2 + o * 0.14),
        r * 0.37,
        i * 0.08,
        `#ffffff`,
        `800`,
      ),
    ),
    I(e, t, n + i * 0.82, r, i * 0.18, `#3a62b0`));
}
function pt(e, t, n, r, i) {
  (F(e, t, n, r, i, `#1d4e9e`, 0.6),
    P(
      e,
      N(`ueno.boat.jo`),
      t + r * 0.5,
      n + i * 0.52,
      r * 0.82,
      i * 0.66,
      `#ffffff`,
      `900`,
    ));
}
function mt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#ffffff`),
    I(e, t, n, r, i * 0.2, `#e04a6a`),
    P(
      e,
      N(`ueno.boat.swan`),
      t + r / 2,
      n + i * 0.1,
      r * 0.86,
      i * 0.13,
      `#ffffff`,
      `900`,
    ),
    L(e, t + r * 0.38, n + i * 0.56, r * 0.18, `#f4f4f4`, i * 0.12),
    (e.strokeStyle = `#d8d8d8`),
    (e.lineWidth = 2),
    e.beginPath(),
    e.ellipse(
      t + r * 0.38,
      n + i * 0.56,
      r * 0.18,
      i * 0.12,
      0,
      0,
      Math.PI * 2,
    ),
    e.stroke(),
    I(e, t + r * 0.52, n + i * 0.3, r * 0.05, i * 0.26, `#f4f4f4`),
    L(e, t + r * 0.56, n + i * 0.3, r * 0.05, `#f4f4f4`),
    I(e, t + r * 0.6, n + i * 0.29, r * 0.06, i * 0.03, `#f08a1a`),
    P(
      e,
      N(`ueno.boat.lifejacket`),
      t + r / 2,
      n + i * 0.86,
      r * 0.92,
      i * 0.08,
      `#c01818`,
      `800`,
    ));
}
function ht(e, t, n, r, i) {
  (I(e, t, n, r, i, `#f4f2ea`),
    I(e, t, n, r, i * 0.22, `#3a6e2c`),
    P(
      e,
      N(`ueno.hasu.board`),
      t + r / 2,
      n + i * 0.11,
      r * 0.8,
      i * 0.15,
      `#ffffff`,
      `900`,
    ),
    L(e, t + r * 0.2, n + i * 0.55, r * 0.1, `#f4a6c0`),
    L(e, t + r * 0.2, n + i * 0.55, r * 0.05, `#fbe0ea`),
    de(
      e,
      N(`ueno.hasu.text`),
      t + r * 0.36,
      n + i * 0.5,
      r * 0.6,
      i * 0.1,
      `#2a2a2a`,
      `700`,
    ),
    P(
      e,
      N(`ueno.hasu.dont`),
      t + r / 2,
      n + i * 0.82,
      r * 0.86,
      i * 0.1,
      `#c01818`,
      `800`,
    ));
}
