// tokyo/assets/region-tokyo-A7LxHjud 407 — setmaterial
// Lines 146635-146822 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function xIe(e, t) {
  let n = new je(1400, 2800),
    { w: r, d: i, h: a } = c2,
    o = r / 2,
    s = i / 2,
    c = m2(u2.tile);
  (n.setMaterial(0.85, 0, 0, 0),
    pm(n, 9276037),
    hm(n, 0, 0.06, 0.35, o + 0.2, 0.06, s + 0.55),
    pm(n, vIe),
    hm(n, 0, 0.36, 0, o + 0.02, 0.26, s + 0.02),
    pm(n, _Ie),
    n.setMaterial(0.7, 0, 0, 0));
  let l = 0.62,
    u = a,
    d = (l + u) / 2,
    f = (u - l) / 2;
  (gm(n, 0, d, -s + 0.06, o, f, 0.06, 0, 1, void 0, c),
    gm(n, -o + 0.06, d, 0, s, f, 0.06, 1, 0, void 0, c),
    gm(n, o - 0.06, d, 0, s, f, 0.06, -1, 0, void 0, c));
  let p = 1.5,
    m = 2.2,
    h = -0.95,
    g = 0.55;
  (gm(n, (-o + h) / 2, d, s - 0.06, (h + o) / 2, f, 0.06, 0, 1, c),
    gm(n, (g + o) / 2, d, s - 0.06, (o - g) / 2, f, 0.06, 0, 1, c),
    gm(
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
    pm(n, 16777215),
    bm(
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
    pm(n, g2),
    hm(n, -0.3999999999999999 / 2, 0.13, s - 0.04, 0.79, 0.015, 0.08),
    n.setMaterial(0.2, 0.1, 0.3, 3),
    pm(n, 16777215),
    bm(n, -o - 0.005, 1.75, -0.05, -1, 0, 1.6, 1, m2(u2.window)),
    bm(n, (g + o) / 2, 1.7, s + 0.005, 0, 1, o - g - 0.18, 0.95, m2(u2.window)),
    n.setMaterial(0.8, 0, 0, 0),
    pm(n, yIe),
    hm(n, 0, a + 0.09, 0, o + 0.14, 0.09, s + 0.14),
    pm(n, bIe),
    hm(n, 0, a + 0.28, -s - 0.06, o + 0.14, 0.1, 0.08),
    hm(n, -o - 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    hm(n, o + 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    pm(n, h2),
    n.setMaterial(0.5, 0.4, 0, 16),
    hm(n, -0.04999999999999996, 2.4400000000000004, s + 0.42, 1.25, 0.05, 0.45),
    n.setMaterial(0.3, 0.1, 0.5, 3),
    pm(n, 16777215));
  let _ = r + 0.1,
    v = _ * (u2.fascia[3] / u2.fascia[2]),
    y = a + 0.38 - v / 2 + 0.06;
  return (
    bm(n, 0, y, s + 0.17, 0, 1, _, v, m2(u2.fascia)),
    n.setMaterial(0.5, 0.4, 0, 0),
    pm(n, 1780309),
    hm(n, 0, y, s + 0.08, _ / 2 + 0.03, v / 2 + 0.03, 0.08),
    n.setMaterial(0.4, 0.6, 0, 0),
    pm(n, g2),
    _m(n, -o + 0.05, 2.62, s + 0.02, -o + 0.05, 2.62, s + 0.42, 0.025, 6),
    vm(n, -o + 0.05, s + 0.42, 2.5, 2.64, 0.05, 8),
    n.setMaterial(0.25, 0, 0.85, 1),
    pm(n, 12847634),
    CIe(n, -o + 0.05, 2.35, s + 0.42, 0.15),
    n.setMaterial(0.6, 0, 0, 0),
    pm(n, 16777215),
    bm(n, (-o + h) / 2, 1.45, s + 0.01, 0, 1, 0.2, 1.2, hIe(t)),
    pm(n, 7232064),
    hm(n, (-o + h) / 2, 1.45, s - 0.015, 0.12, 0.62, 0.02),
    pm(n, 16777215),
    bm(n, o + 0.03, 1.55, -0.2, 1, 0, 1.2, 1.5, m2(u2.board)),
    pm(n, h2),
    hm(n, o + 0.06, 2.35, -0.2, 0.08, 0.03, 0.66),
    n.setMaterial(0.6, 0.2, 0, 0),
    pm(n, 15132645),
    hm(n, -o - 0.2, 0.42, -s + 0.55, 0.16, 0.3, 0.4),
    pm(n, 16777215),
    bm(n, -o - 0.365, 0.42, -s + 0.55, -1, 0, 0.78, 0.39, m2(u2.ac)),
    pm(n, 10396584),
    vm(n, o - 0.04, -s - 0.04, 0.12, a + 0.2, 0.04, 6),
    { name: e, geo: ar(n, `tokyo-koban:${e}`) }
  );
}
function _2() {
  let e = new je(200, 400);
  return (
    e.setMaterial(0.6, 0.3, 0, 0),
    pm(e, 10133670),
    vm(e, -0.24, 0, 0, 1.1, 0.02, 5),
    vm(e, 0.24, 0, 0, 1.1, 0.02, 5),
    pm(e, 2830392),
    hm(e, 0, 0.03, 0, 0.32, 0.03, 0.14),
    e.setMaterial(0.6, 0, 0, 0),
    pm(e, 16777215),
    bm(e, 0, 0.82, 0.03, 0, 1, 0.52, 0.52, m2(u2.stand)),
    pm(e, 15329764),
    hm(e, 0, 0.82, 0.005, 0.27, 0.27, 0.02),
    { name: `koban-stand`, geo: ar(e, `tokyo-koban:stand`) }
  );
}
function SIe() {
  let e = new je(64, 128);
  return (
    e.setMaterial(0.5, 0, 0, 0),
    pm(e, 15790575),
    hm(e, 0, 0, 0, 0.2, 0.15, 0.17),
    pm(e, 16777215),
    bm(e, 0, 0.01, 0.172, 0, 1, 0.38, 0.19, m2(u2.box)),
    pm(e, 10133154),
    hm(e, 0, 0.152, 0, 0.205, 0.008, 0.175),
    { name: `bike-box`, geo: ar(e, `tokyo-koban:bike-box`) }
  );
}
function CIe(e, t, n, r, i) {
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
var wIe = {
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
  TIe = 320,
  EIe = 170,
  DIe = 150,
  v2 = 40,
  y2 = 4.6,
  b2 = 7.2,
  x2 = { x: 0, z: 0, heading: 0, link: null, lane: 0, s: 0 },
  S2 = { x: 0, z: 0 },
  C2 = { x: 0, z: 0, turn: 0, cornerDist: 0 },
  w2 = { node: 0, axis: `x`, x: 0, z: 0 },
  T2 = new Float32Array(16),
  E2 = new p();
