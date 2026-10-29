// tokyo/assets/region-tokyo-55J_WESF 407 — setmaterial
// Lines 146544-146731 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function oIe(e, t) {
  let n = new Le(1400, 2800),
    { w: r, d: i, h: a } = c2,
    o = r / 2,
    s = i / 2,
    c = m2(u2.tile);
  (n.setMaterial(0.85, 0, 0, 0),
    um(n, 9276037),
    fm(n, 0, 0.06, 0.35, o + 0.2, 0.06, s + 0.55),
    um(n, rIe),
    fm(n, 0, 0.36, 0, o + 0.02, 0.26, s + 0.02),
    um(n, nIe),
    n.setMaterial(0.7, 0, 0, 0));
  let l = 0.62,
    u = a,
    d = (l + u) / 2,
    f = (u - l) / 2;
  (pm(n, 0, d, -s + 0.06, o, f, 0.06, 0, 1, void 0, c),
    pm(n, -o + 0.06, d, 0, s, f, 0.06, 1, 0, void 0, c),
    pm(n, o - 0.06, d, 0, s, f, 0.06, -1, 0, void 0, c));
  let p = 1.5,
    m = 2.2,
    h = -0.95,
    g = 0.55;
  (pm(n, (-o + h) / 2, d, s - 0.06, (h + o) / 2, f, 0.06, 0, 1, c),
    pm(n, (g + o) / 2, d, s - 0.06, (o - g) / 2, f, 0.06, 0, 1, c),
    pm(
      n,
      -0.3999999999999999 / 2,
      (2.3200000000000003 + u) / 2 + 0.06,
      s - 0.06,
      p / 2,
      (u - m - 0.12) / 2,
      0.06,
      0,
      1,
      c,
    ),
    n.setMaterial(0.15, 0.2, 0.35, 19),
    um(n, 16777215),
    _m(
      n,
      -0.3999999999999999 / 2,
      1.2200000000000002,
      s - 0.1,
      0,
      1,
      p,
      m,
      m2(u2.door),
    ),
    n.setMaterial(0.4, 0.6, 0, 0),
    um(n, g2),
    fm(n, -0.3999999999999999 / 2, 0.13, s - 0.04, 0.79, 0.015, 0.08),
    n.setMaterial(0.2, 0.1, 0.3, 3),
    um(n, 16777215),
    _m(n, -o - 0.005, 1.75, -0.05, -1, 0, 1.6, 1, m2(u2.window)),
    _m(n, (g + o) / 2, 1.7, s + 0.005, 0, 1, o - g - 0.18, 0.95, m2(u2.window)),
    n.setMaterial(0.8, 0, 0, 0),
    um(n, iIe),
    fm(n, 0, a + 0.09, 0, o + 0.14, 0.09, s + 0.14),
    um(n, aIe),
    fm(n, 0, a + 0.28, -s - 0.06, o + 0.14, 0.1, 0.08),
    fm(n, -o - 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    fm(n, o + 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    um(n, h2),
    n.setMaterial(0.5, 0.4, 0, 16),
    fm(n, -0.04999999999999996, 2.4400000000000004, s + 0.42, 1.25, 0.05, 0.45),
    n.setMaterial(0.3, 0.1, 0.5, 3),
    um(n, 16777215));
  let _ = r + 0.1,
    v = _ * (u2.fascia[3] / u2.fascia[2]),
    y = a + 0.38 - v / 2 + 0.06;
  return (
    _m(n, 0, y, s + 0.17, 0, 1, _, v, m2(u2.fascia)),
    n.setMaterial(0.5, 0.4, 0, 0),
    um(n, 1780309),
    fm(n, 0, y, s + 0.08, _ / 2 + 0.03, v / 2 + 0.03, 0.08),
    n.setMaterial(0.4, 0.6, 0, 0),
    um(n, g2),
    mm(n, -o + 0.05, 2.62, s + 0.02, -o + 0.05, 2.62, s + 0.42, 0.025, 6),
    hm(n, -o + 0.05, s + 0.42, 2.5, 2.64, 0.05, 8),
    n.setMaterial(0.25, 0, 0.85, 1),
    um(n, 12847634),
    cIe(n, -o + 0.05, 2.35, s + 0.42, 0.15),
    n.setMaterial(0.6, 0, 0, 0),
    um(n, 16777215),
    _m(n, (-o + h) / 2, 1.45, s + 0.01, 0, 1, 0.2, 1.2, eIe(t)),
    um(n, 7232064),
    fm(n, (-o + h) / 2, 1.45, s - 0.015, 0.12, 0.62, 0.02),
    um(n, 16777215),
    _m(n, o + 0.03, 1.55, -0.2, 1, 0, 1.2, 1.5, m2(u2.board)),
    um(n, h2),
    fm(n, o + 0.06, 2.35, -0.2, 0.08, 0.03, 0.66),
    n.setMaterial(0.6, 0.2, 0, 0),
    um(n, 15132645),
    fm(n, -o - 0.2, 0.42, -s + 0.55, 0.16, 0.3, 0.4),
    um(n, 16777215),
    _m(n, -o - 0.365, 0.42, -s + 0.55, -1, 0, 0.78, 0.39, m2(u2.ac)),
    um(n, 10396584),
    hm(n, o - 0.04, -s - 0.04, 0.12, a + 0.2, 0.04, 6),
    { name: e, geo: ar(n, `tokyo-koban:${e}`) }
  );
}
function _2() {
  let e = new Le(200, 400);
  return (
    e.setMaterial(0.6, 0.3, 0, 0),
    um(e, 10133670),
    hm(e, -0.24, 0, 0, 1.1, 0.02, 5),
    hm(e, 0.24, 0, 0, 1.1, 0.02, 5),
    um(e, 2830392),
    fm(e, 0, 0.03, 0, 0.32, 0.03, 0.14),
    e.setMaterial(0.6, 0, 0, 0),
    um(e, 16777215),
    _m(e, 0, 0.82, 0.03, 0, 1, 0.52, 0.52, m2(u2.stand)),
    um(e, 15329764),
    fm(e, 0, 0.82, 0.005, 0.27, 0.27, 0.02),
    { name: `koban-stand`, geo: ar(e, `tokyo-koban:stand`) }
  );
}
function sIe() {
  let e = new Le(64, 128);
  return (
    e.setMaterial(0.5, 0, 0, 0),
    um(e, 15790575),
    fm(e, 0, 0, 0, 0.2, 0.15, 0.17),
    um(e, 16777215),
    _m(e, 0, 0.01, 0.172, 0, 1, 0.38, 0.19, m2(u2.box)),
    um(e, 10133154),
    fm(e, 0, 0.152, 0, 0.205, 0.008, 0.175),
    { name: `bike-box`, geo: ar(e, `tokyo-koban:bike-box`) }
  );
}
function cIe(e, t, n, r, i) {
  let a = e.n;
  for (let a = 0; a <= 6; a++) {
    let o = (a / 6) * Math.PI,
      s = Math.cos(o),
      c = Math.sin(o);
    for (let a = 0; a <= 10; a++) {
      let o = (a / 10) * Math.PI * 2,
        l = Math.cos(o) * c,
        u = Math.sin(o) * c;
      e.vertex(
        t + l * i,
        n + s * i,
        r + u * i,
        l,
        s,
        u,
        16 / 512,
        1 - 16 / 512,
      );
    }
  }
  for (let t = 0; t < 6; t++)
    for (let n = 0; n < 10; n++) {
      let r = a + t * 11 + n,
        i = r + 10 + 1;
      e.tri(r, r + 1, i).tri(r + 1, i + 1, i);
    }
}
var lIe = {
    sukiyabashi: [-36.5, 335, 180],
    "ginza-4": [91, 330, 270],
    shimbashi: [-104, 603.5, 180],
    yaesu: [98, 17, 0],
    marunouchi: [-100, 20.5, 0],
    kanda: [-60, -404, 0],
    manseibashi: [-168, -573, 0],
    akihabara: [-72, -625, 270],
    okachimachi: [-102, -939.5, 0],
    ueno: [-61.5, -1180.5, 180],
    tsukiji: [339.5, 370, 0],
  },
  uIe = 320,
  dIe = 170,
  fIe = 150,
  v2 = 40,
  y2 = 4.6,
  b2 = 7.2,
  x2 = { x: 0, z: 0, heading: 0, link: null, lane: 0, s: 0 },
  S2 = { x: 0, z: 0 },
  C2 = { x: 0, z: 0, turn: 0, cornerDist: 0 },
  w2 = { node: 0, axis: `x`, x: 0, z: 0 },
  T2 = new Float32Array(16),
  E2 = new M();
