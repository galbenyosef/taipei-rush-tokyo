// tokyo/assets/region-tokyo-BcM3fReU 234 — setmaterial
// Lines 94747-94934 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function BQ(e, t) {
  let n = new ce(1400, 2800),
    { w: r, d: i, h: a } = TQ,
    o = r / 2,
    s = i / 2,
    c = jQ(DQ.tile);
  (n.setMaterial(0.85, 0, 0, 0),
    K(n, 9276037),
    Xg(n, 0, 0.06, 0.35, o + 0.2, 0.06, s + 0.55),
    K(n, FQ),
    Xg(n, 0, 0.36, 0, o + 0.02, 0.26, s + 0.02),
    K(n, PQ),
    n.setMaterial(0.7, 0, 0, 0));
  let l = 0.62,
    u = a,
    d = (l + u) / 2,
    f = (u - l) / 2;
  (Zg(n, 0, d, -s + 0.06, o, f, 0.06, 0, 1, void 0, c),
    Zg(n, -o + 0.06, d, 0, s, f, 0.06, 1, 0, void 0, c),
    Zg(n, o - 0.06, d, 0, s, f, 0.06, -1, 0, void 0, c));
  let p = 1.5,
    m = 2.2,
    h = -0.95,
    g = 0.55;
  (Zg(n, (-o + h) / 2, d, s - 0.06, (h + o) / 2, f, 0.06, 0, 1, c),
    Zg(n, (g + o) / 2, d, s - 0.06, (o - g) / 2, f, 0.06, 0, 1, c),
    Zg(
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
    K(n, 16777215),
    t_(
      n,
      -0.3999999999999999 / 2,
      1.2200000000000002,
      s - 0.1,
      0,
      1,
      p,
      m,
      jQ(DQ.door),
    ),
    n.setMaterial(0.4, 0.6, 0, 0),
    K(n, zQ),
    Xg(n, -0.3999999999999999 / 2, 0.13, s - 0.04, 0.79, 0.015, 0.08),
    n.setMaterial(0.2, 0.1, 0.3, 3),
    K(n, 16777215),
    t_(n, -o - 0.005, 1.75, -0.05, -1, 0, 1.6, 1, jQ(DQ.window)),
    t_(n, (g + o) / 2, 1.7, s + 0.005, 0, 1, o - g - 0.18, 0.95, jQ(DQ.window)),
    n.setMaterial(0.8, 0, 0, 0),
    K(n, IQ),
    Xg(n, 0, a + 0.09, 0, o + 0.14, 0.09, s + 0.14),
    K(n, LQ),
    Xg(n, 0, a + 0.28, -s - 0.06, o + 0.14, 0.1, 0.08),
    Xg(n, -o - 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    Xg(n, o + 0.06, a + 0.28, 0, 0.08, 0.1, s + 0.14),
    K(n, RQ),
    n.setMaterial(0.5, 0.4, 0, 16),
    Xg(n, -0.04999999999999996, 2.4400000000000004, s + 0.42, 1.25, 0.05, 0.45),
    n.setMaterial(0.3, 0.1, 0.5, 3),
    K(n, 16777215));
  let _ = r + 0.1,
    v = _ * (DQ.fascia[3] / DQ.fascia[2]),
    y = a + 0.38 - v / 2 + 0.06;
  return (
    t_(n, 0, y, s + 0.17, 0, 1, _, v, jQ(DQ.fascia)),
    n.setMaterial(0.5, 0.4, 0, 0),
    K(n, 1780309),
    Xg(n, 0, y, s + 0.08, _ / 2 + 0.03, v / 2 + 0.03, 0.08),
    n.setMaterial(0.4, 0.6, 0, 0),
    K(n, zQ),
    Qg(n, -o + 0.05, 2.62, s + 0.02, -o + 0.05, 2.62, s + 0.42, 0.025, 6),
    $g(n, -o + 0.05, s + 0.42, 2.5, 2.64, 0.05, 8),
    n.setMaterial(0.25, 0, 0.85, 1),
    K(n, 12847634),
    UQ(n, -o + 0.05, 2.35, s + 0.42, 0.15),
    n.setMaterial(0.6, 0, 0, 0),
    K(n, 16777215),
    t_(n, (-o + h) / 2, 1.45, s + 0.01, 0, 1, 0.2, 1.2, MQ(t)),
    K(n, 7232064),
    Xg(n, (-o + h) / 2, 1.45, s - 0.015, 0.12, 0.62, 0.02),
    K(n, 16777215),
    t_(n, o + 0.03, 1.55, -0.2, 1, 0, 1.2, 1.5, jQ(DQ.board)),
    K(n, RQ),
    Xg(n, o + 0.06, 2.35, -0.2, 0.08, 0.03, 0.66),
    n.setMaterial(0.6, 0.2, 0, 0),
    K(n, 15132645),
    Xg(n, -o - 0.2, 0.42, -s + 0.55, 0.16, 0.3, 0.4),
    K(n, 16777215),
    t_(n, -o - 0.365, 0.42, -s + 0.55, -1, 0, 0.78, 0.39, jQ(DQ.ac)),
    K(n, 10396584),
    $g(n, o - 0.04, -s - 0.04, 0.12, a + 0.2, 0.04, 6),
    { name: e, geo: Si(n, `tokyo-koban:${e}`) }
  );
}
function VQ() {
  let e = new ce(200, 400);
  return (
    e.setMaterial(0.6, 0.3, 0, 0),
    K(e, 10133670),
    $g(e, -0.24, 0, 0, 1.1, 0.02, 5),
    $g(e, 0.24, 0, 0, 1.1, 0.02, 5),
    K(e, 2830392),
    Xg(e, 0, 0.03, 0, 0.32, 0.03, 0.14),
    e.setMaterial(0.6, 0, 0, 0),
    K(e, 16777215),
    t_(e, 0, 0.82, 0.03, 0, 1, 0.52, 0.52, jQ(DQ.stand)),
    K(e, 15329764),
    Xg(e, 0, 0.82, 0.005, 0.27, 0.27, 0.02),
    { name: `koban-stand`, geo: Si(e, `tokyo-koban:stand`) }
  );
}
function HQ() {
  let e = new ce(64, 128);
  return (
    e.setMaterial(0.5, 0, 0, 0),
    K(e, 15790575),
    Xg(e, 0, 0, 0, 0.2, 0.15, 0.17),
    K(e, 16777215),
    t_(e, 0, 0.01, 0.172, 0, 1, 0.38, 0.19, jQ(DQ.box)),
    K(e, 10133154),
    Xg(e, 0, 0.152, 0, 0.205, 0.008, 0.175),
    { name: `bike-box`, geo: Si(e, `tokyo-koban:bike-box`) }
  );
}
function UQ(e, t, n, r, i) {
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
var WQ = {
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
  GQ = 320,
  KQ = 170,
  qQ = 150,
  JQ = 40,
  YQ = 4.6,
  XQ = 7.2,
  ZQ = { x: 0, z: 0, heading: 0, link: null, lane: 0, s: 0 },
  QQ = { x: 0, z: 0 },
  $Q = { x: 0, z: 0, turn: 0, cornerDist: 0 },
  e$ = { node: 0, axis: `x`, x: 0, z: 0 },
  t$ = new Float32Array(16),
  n$ = new M();
