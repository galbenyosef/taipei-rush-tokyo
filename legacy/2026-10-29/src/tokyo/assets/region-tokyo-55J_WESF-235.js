// tokyo/assets/region-tokyo-55J_WESF 235 — col
// Lines 89676-89919 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function exe(e, t, n, r, i) {
  let a = sF(t, n, dF(10.4)),
    o = e.sub(a.x, 0, a.z, a.head);
  if (
    (!lF.includes(r) || e.coarse) &&
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
    e.col(eF).mat(0.5, 0.1, 0.25, 1),
    e.box(-2.4, 13.25, -1, 2.4, 15.600000000000001, -0.6),
    e.coarse ||
      (e.col(16777215).mat(0.4, 0, 0.7, 1),
      cM(e, r, 0, 13.75, -1.06, 1.4, 0.06)),
    i)
  ) {
    let t = -(7 - dF(10.4)),
      n = 4.5;
    e.col(13881286).mat(0.85, 0, 0, 0);
    for (let r = 0; r < 24; r++) {
      let i = t - (16 * r) / 24,
        a = t - (16 * (r + 1)) / 24,
        o = JP - (JP * r) / 24,
        s = JP - (JP * (r + 1)) / 24;
      (e.flat(-4.5, a, n, i, o),
        e.quad(n, s, a, -4.5, s, a, -4.5, o, a, n, o, a));
    }
    e.col(15131612).mat(0.7, 0, 0.05, 1);
    for (let n of [-1, 1]) {
      let r = n * 4.8,
        i = 9.4;
      (tM(e, [r, 0, t - 16], [r, 0, t], [r, i, t], [r, 1, t - 16], [n, 0, 0]),
        tM(
          e,
          [r - n * 0.3, 0, t - 16],
          [r - n * 0.3, 0, t],
          [r - n * 0.3, i, t],
          [r - n * 0.3, 1, t - 16],
          [-n, 0, 0],
        ),
        tM(
          e,
          [r, 1, t - 16],
          [r, i, t],
          [r - n * 0.3, i, t],
          [r - n * 0.3, 1, t - 16],
          [0, 1, 0.5],
        ),
        tM(
          e,
          [r, 0, t - 16],
          [r, 1, t - 16],
          [r - n * 0.3, 1, t - 16],
          [r - n * 0.3, 0, t - 16],
          [0, 0, -1],
        ));
    }
    (e.floor(-4.5, t - 16, n, t, 0, JP, `stairs`),
      e.floor(-6, t, 6, 0, JP, JP, `platform`),
      e.solid(-6.4, t, -6, 0, JP, 9.5),
      e.solid(6, t, 6.4, 0, JP, 9.5),
      e.solid(-5.1, t - 16, -4.5, t, 0, 9.4),
      e.solid(n, t - 16, 5.1, t, 0, 9.4));
  }
  e.leave(o);
}
function fF(e, t, n) {
  let r = sF(t, n, dF(20.4) + 0.75),
    i = e.sub(r.x, 0, r.z, r.head);
  (e.col(eF).mat(0.45, 0.2, 0.35, 1),
    cM(e, `TOKYO DOME`, 0, 18.2, 0, 4.4, 0.9),
    e.leave(i));
}
function* txe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 24 : 12;
  if (
    (e.col(14275786).mat(0.9, 0, 0, 0),
    e.flat(ZP.x0, ZP.z0, ZP.x1, -54, 0.05, n, r, r),
    e.flat(ZP.x0, 54, ZP.x1, ZP.z1, 0.05, n, r, r),
    e.flat(ZP.x0, -54, -54, 54, 0.05, n, r, r),
    e.flat(54, -54, ZP.x1, 54, 0.05, n, r, r),
    yield,
    [
      [-76, -76],
      [-75, 66],
      [-66, 73],
      [-78, 54],
      [-70, -70],
    ].forEach(([t, n], r) => {
      (UC(e, t, n, 10 + (r % 3), 300 + r), e.pole(t, n, 0.4, 0, 4));
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
      (WC(e, t, 0, n, 4.6), e.pole(t, n, 0.15, 0, 4.6));
}
function* nxe(e, t) {
  (yield* txe(e, t),
    yield,
    yield* $be(e, t),
    yield,
    e.col(QP).mat(0.55, 0, 0, 1));
  let n = e.coarse ? 16 : 40;
  (oF(e, n, e.coarse ? 0 : 0.55, !0, 0, n / 2),
    yield,
    oF(e, n, e.coarse ? 0 : 0.55, !0, n / 2, n),
    e.emis(0, 0),
    yield,
    e.coarse || (e.col(11449012).mat(0.5, 0.5, 0.02, 1), Qbe(e, 12), yield));
  for (let [t, n, r, i] of cF) exe(e, t, n, r, i);
  e.coarse || (fF(e, 2, 0), fF(e, 3, -0.25));
}
function rxe(e) {
  let t = nF(6);
  e.col($P).mat(0.75, 0, 0.06, 1);
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = t[(n + 1) % t.length];
    e.panel(r[0], r[1], i[0], i[1], 0, 34);
  }
  (e.col(QP).mat(0.55, 0, 0, 1), oF(e, 8, 0, !0));
}
var ixe = {
    id: `tokyo-dome`,
    lot: `tokyo-dome-city`,
    site: (e) => ({
      x: KP.x,
      z: KP.z,
      gy: e.groundHeight(KP.x, KP.z),
      facing: 0,
    }),
    name: { ja: `東京ドーム`, zh: `東京巨蛋`, en: `Tokyo Dome` },
    near: 280,
    build: nxe,
    far: rxe,
    bounds: () => [-1e3, -813, -807, -625],
    farBoxes: (e, t) => [
      {
        x0: KP.x - 64,
        x1: KP.x + 64,
        z0: KP.z - 64,
        z1: KP.z + 64,
        y0: t.gy,
        y1: t.gy + 34,
        rgb: [0.78, 0.78, 0.76],
      },
      {
        x0: KP.x - 46,
        x1: KP.x + 46,
        z0: KP.z - 46,
        z1: KP.z + 46,
        y0: t.gy + 34,
        y1: t.gy + 34 + qP * 0.7,
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
  pF = -1.4,
  mF = -8,
  hF = -30,
  gF = -16,
  _F = 2.4,
  vF = 12.2,
  yF = 27,
  bF = 11.2,
  xF = 9,
  axe = 6,
  SF = 70 + hF,
  CF = [26, 26],
  wF = 18.4,
  TF = 16,
  oxe = 3104686,
  sxe = 2641811,
  cxe = 1914726,
  EF = 10132638,
  lxe = 12104875,
  DF = 3115580,
  uxe = 2784053,
  OF = 10119748,
  dxe = 1986464,
  kF = (e, t) => nF(e, t),
  AF = (e, t) => e[((t % e.length) + e.length) % e.length],
  jF = (e, t) => [e[0], t, e[1]];
function MF(e, t, n, r, i, a, o, s, c) {
  for (let l = 0; l < t.length; l++) {
    if (c?.(l)) continue;
    let u = l + 1,
      d = AF(t, l),
      f = AF(t, u),
      p = AF(r, l),
      m = AF(r, u),
      h = (d[0] + f[0]) / 2,
      g = (d[1] + f[1]) / 2,
      _ = Math.hypot(h, g) || 1,
      v = s ? [-h / _, 0, -g / _] : [0, 1, 0];
    (n === i && (v[1] = 1),
      e.col(a(l)).mat(0.85, 0, o, TF),
      tM(e, jF(d, n), jF(f, n), jF(m, i), jF(p, i), v));
  }
}
function NF(e, t, n, r, i, a, o, s, c) {
  for (let l = 0; l < o; l++) {
    let u = n + ((i - n) * l) / o,
      d = n + ((i - n) * (l + 1)) / o,
      f = r + ((a - r) * l) / o,
      p = r + ((a - r) * (l + 1)) / o,
      m = kF(t, u),
      h = kF(t, d);
    (MF(e, m, f, m, p, (e) => (s(e) ? 8224641 : cxe), c * 0.6, !0),
      MF(e, m, p, h, p, (e) => (s(e) ? EF : l % 2 ? oxe : sxe), c, !1));
  }
}
