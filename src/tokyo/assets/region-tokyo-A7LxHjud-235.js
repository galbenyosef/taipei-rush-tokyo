// tokyo/assets/region-tokyo-A7LxHjud 235 — col
// Lines 89767-90010 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function pxe(e, t, n, r, i) {
  let a = lF(t, n, pF(10.4)),
    o = e.sub(a.x, 0, a.z, a.head);
  if (
    (!dF.includes(r) || e.coarse) &&
    (e.col(3819088).mat(0.25, 0.4, 0.35, G),
    e.panel(4.2, -0.22, -4.2, -0.22, 8.5, 12.3, e.white),
    e.col(15986660).mat(0.4, 0, 0.55, 1),
    !e.coarse)
  )
    for (let t of [-2.1, 0, 2.1])
      e.box(t - 0.04, 8.5, -0.3, t + 0.04, 12.3, -0.24);
  if (
    (e.col(15263456).mat(0.5, 0.2, 0.05, 1),
    e.box(-5.2, 12.8, -3.6, 5.2, 13.25, -0.1),
    e.col(16774364).mat(0.4, 0, 0.6, 1),
    e.flat(-4.6, -3.2, 4.6, -2.6, 12.780000000000001, e.white, 0, 0, !1),
    e.col(nF).mat(0.5, 0.1, 0.25, 1),
    e.box(-2.4, 13.25, -1, 2.4, 15.600000000000001, -0.6),
    e.coarse ||
      (e.col(16777215).mat(0.4, 0, 0.7, 1),
      uM(e, r, 0, 13.75, -1.06, 1.4, 0.06)),
    i)
  ) {
    let t = -(7 - pF(10.4)),
      n = 4.5;
    e.col(13881286).mat(0.85, 0, 0, 0);
    for (let r = 0; r < 24; r++) {
      let i = t - (16 * r) / 24,
        a = t - (16 * (r + 1)) / 24,
        o = XP - (XP * r) / 24,
        s = XP - (XP * (r + 1)) / 24;
      (e.flat(-4.5, a, n, i, o),
        e.quad(n, s, a, -4.5, s, a, -4.5, o, a, n, o, a));
    }
    e.col(15131612).mat(0.7, 0, 0.05, 1);
    for (let n of [-1, 1]) {
      let r = n * 4.8,
        i = 9.4;
      (rM(e, [r, 0, t - 16], [r, 0, t], [r, i, t], [r, 1, t - 16], [n, 0, 0]),
        rM(
          e,
          [r - n * 0.3, 0, t - 16],
          [r - n * 0.3, 0, t],
          [r - n * 0.3, i, t],
          [r - n * 0.3, 1, t - 16],
          [-n, 0, 0],
        ),
        rM(
          e,
          [r, 1, t - 16],
          [r, i, t],
          [r - n * 0.3, i, t],
          [r - n * 0.3, 1, t - 16],
          [0, 1, 0.5],
        ),
        rM(
          e,
          [r, 0, t - 16],
          [r, 1, t - 16],
          [r - n * 0.3, 1, t - 16],
          [r - n * 0.3, 0, t - 16],
          [0, 0, -1],
        ));
    }
    (e.floor(-4.5, t - 16, n, t, 0, XP, `stairs`),
      e.floor(-6, t, 6, 0, XP, XP, `platform`),
      e.solid(-6.4, t, -6, 0, XP, 9.5),
      e.solid(6, t, 6.4, 0, XP, 9.5),
      e.solid(-5.1, t - 16, -4.5, t, 0, 9.4),
      e.solid(n, t - 16, 5.1, t, 0, 9.4));
  }
  e.leave(o);
}
function mF(e, t, n) {
  let r = lF(t, n, pF(20.4) + 0.75),
    i = e.sub(r.x, 0, r.z, r.head);
  (e.col(nF).mat(0.45, 0.2, 0.35, 1),
    uM(e, `TOKYO DOME`, 0, 18.2, 0, 4.4, 0.9),
    e.leave(i));
}
function* mxe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 24 : 12;
  if (
    (e.col(14275786).mat(0.9, 0, 0, 0),
    e.flat($P.x0, $P.z0, $P.x1, -54, 0.05, n, r, r),
    e.flat($P.x0, 54, $P.x1, $P.z1, 0.05, n, r, r),
    e.flat($P.x0, -54, -54, 54, 0.05, n, r, r),
    e.flat(54, -54, $P.x1, 54, 0.05, n, r, r),
    yield,
    [
      [-76, -76],
      [-75, 66],
      [-66, 73],
      [-78, 54],
      [-70, -70],
    ].forEach(([t, n], r) => {
      (KC(e, t, n, 10 + (r % 3), 300 + r), e.pole(t, n, 0.4, 0, 4));
    }),
    !e.coarse)
  )
    for (let [t, n] of [
      [-62, 101],
      [-22, 101],
      [18, 101],
      [58, 101],
      [92, 101],
    ])
      (qC(e, t, 0, n, 4.6), e.pole(t, n, 0.15, 0, 4.6));
}
function* hxe(e, t) {
  (yield* mxe(e, t),
    yield,
    yield* fxe(e, t),
    yield,
    e.col(eF).mat(0.55, 0, 0, 1));
  let n = e.coarse ? 16 : 40;
  (cF(e, n, e.coarse ? 0 : 0.55, !0, 0, n / 2),
    yield,
    cF(e, n, e.coarse ? 0 : 0.55, !0, n / 2, n),
    e.emis(0, 0),
    yield,
    e.coarse || (e.col(11449012).mat(0.5, 0.5, 0.02, 1), dxe(e, 12), yield));
  for (let [t, n, r, i] of uF) pxe(e, t, n, r, i);
  e.coarse || (mF(e, 2, 0), mF(e, 3, -0.25));
}
function gxe(e) {
  let t = iF(6);
  e.col(tF).mat(0.75, 0, 0.06, 1);
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = t[(n + 1) % t.length];
    e.panel(r[0], r[1], i[0], i[1], 0, 34);
  }
  (e.col(eF).mat(0.55, 0, 0, 1), cF(e, 8, 0, !0));
}
var _xe = {
    id: `tokyo-dome`,
    lot: `tokyo-dome-city`,
    site: (e) => ({
      x: JP.x,
      z: JP.z,
      gy: e.groundHeight(JP.x, JP.z),
      facing: 0,
    }),
    name: { ja: `東京ドーム`, zh: `東京巨蛋`, en: `Tokyo Dome` },
    near: 280,
    build: hxe,
    far: gxe,
    bounds: () => [-1e3, -813, -807, -625],
    farBoxes: (e, t) => [
      {
        x0: JP.x - 64,
        x1: JP.x + 64,
        z0: JP.z - 64,
        z1: JP.z + 64,
        y0: t.gy,
        y1: t.gy + 34,
        rgb: [0.78, 0.78, 0.76],
      },
      {
        x0: JP.x - 46,
        x1: JP.x + 46,
        z0: JP.z - 46,
        z1: JP.z + 46,
        y0: t.gy + 34,
        y1: t.gy + 34 + YP * 0.7,
        rgb: [0.85, 0.85, 0.83],
      },
    ],
    anchors: [
      {
        key: `tokyo-dome-gate22`,
        lx: 99,
        lz: 32,
        turn: -Math.PI / 2 - 0.12,
        name: { zh: `東京巨蛋 22號門`, en: `Tokyo Dome, Gate 22` },
      },
      {
        key: `tokyo-dome-gate25`,
        lx: 99,
        lz: -4,
        turn: -Math.PI / 2,
        name: { zh: `東京巨蛋 25號門`, en: `Tokyo Dome, Gate 25` },
      },
    ],
    blip: !0,
  },
  hF = -1.4,
  gF = -8,
  _F = -30,
  vF = -16,
  yF = 2.4,
  bF = 12.2,
  xF = 27,
  SF = 11.2,
  CF = 9,
  vxe = 6,
  wF = 70 + _F,
  TF = [26, 26],
  EF = 18.4,
  DF = 16,
  yxe = 3104686,
  bxe = 2641811,
  xxe = 1914726,
  OF = 10132638,
  Sxe = 12104875,
  kF = 3115580,
  Cxe = 2784053,
  AF = 10119748,
  wxe = 1986464,
  jF = (e, t) => iF(e, t),
  MF = (e, t) => e[((t % e.length) + e.length) % e.length],
  NF = (e, t) => [e[0], t, e[1]];
function PF(e, t, n, r, i, a, o, s, c) {
  for (let l = 0; l < t.length; l++) {
    if (c?.(l)) continue;
    let u = l + 1,
      d = MF(t, l),
      f = MF(t, u),
      p = MF(r, l),
      m = MF(r, u),
      h = (d[0] + f[0]) / 2,
      g = (d[1] + f[1]) / 2,
      _ = Math.hypot(h, g) || 1,
      v = s ? [-h / _, 0, -g / _] : [0, 1, 0];
    (n === i && (v[1] = 1),
      e.col(a(l)).mat(0.85, 0, o, DF),
      rM(e, NF(d, n), NF(f, n), NF(m, i), NF(p, i), v));
  }
}
function FF(e, t, n, r, i, a, o, s, c) {
  for (let l = 0; l < o; l++) {
    let u = n + ((i - n) * l) / o,
      d = n + ((i - n) * (l + 1)) / o,
      f = r + ((a - r) * l) / o,
      p = r + ((a - r) * (l + 1)) / o,
      m = jF(t, u),
      h = jF(t, d);
    (PF(e, m, f, m, p, (e) => (s(e) ? 8224641 : xxe), c * 0.6, !0),
      PF(e, m, p, h, p, (e) => (s(e) ? OF : l % 2 ? yxe : bxe), c, !1));
  }
}
