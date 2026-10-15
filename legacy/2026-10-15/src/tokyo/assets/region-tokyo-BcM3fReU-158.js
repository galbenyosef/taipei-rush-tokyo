// tokyo/assets/region-tokyo-BcM3fReU 158 — math
// Lines 66930-67192 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* ine(e, t) {
  let n = (e, n, r, i) => wL(t, `lcSigns`, e, n, r, i, 320, 192),
    r = n(0, 0, 144, 64),
    i = n(144, 0, 144, 64);
  for (let [t, n, a, o] of [
    [24.6, -126, 24.6, -131.6],
    [24.6, -136, 24.6, -158.6],
    [24.6, -158.6, 3.5, -158.6],
    [15, -126, 24.6, -126],
  ]) {
    let s = Math.hypot(a - t, o - n),
      c = (a - t) / s,
      l = (o - n) / s;
    if (
      (e.col(15921902).mat(0.8, 0, 0.04, 1),
      e.panel(HL(t), UL(n), HL(a), UL(o), 0, 3),
      e.panel(
        HL(a) - l * 0.1,
        UL(o) + c * 0.1,
        HL(t) - l * 0.1,
        UL(n) + c * 0.1,
        0,
        3,
      ),
      e.coarse)
    )
      continue;
    e.col(16777215).mat(0.7, 0, 0.1, 1);
    let u = 0;
    for (let a = 1; a + 2.6 < s; a += 4.2, u++) {
      let o = u % 3 == 2 ? i : r,
        s = [t + c * a, n + l * a],
        d = [t + c * (a + 2.6), n + l * (a + 2.6)],
        f = -l * 0.03,
        p = c * 0.03;
      e.panel(
        HL(s[0]) + f,
        UL(s[1]) + p,
        HL(d[0]) + f,
        UL(d[1]) + p,
        0.9,
        2.1,
        o,
      );
    }
    e.solid(
      HL(Math.min(t, a)) - 0.1,
      UL(Math.min(n, o)) - 0.1,
      HL(Math.max(t, a)) + 0.1,
      UL(Math.max(n, o)) + 0.1,
      0,
      3,
    );
  }
  (e.col(7106676).mat(0.5, 0.6, 0, 0),
    e.box(HL(24.4), 0, UL(-136.2), HL(24.8), 3.6, UL(-135.8)),
    e.box(HL(24.4), 0, UL(-131.8), HL(24.8), 3.6, UL(-131.4)),
    e.box(HL(24.3), 3.4, UL(-136.2), HL(24.9), 3.7, UL(-131.4)),
    e.col(15263972).mat(0.6, 0.3, 0, 0),
    e.box(HL(24), 0, UL(-136), HL(24.2), 2.4, UL(-133.6)),
    e.col(16777215).mat(0.6, 0, 0.2, Y),
    e.panel(
      HL(24.95),
      UL(-131.9),
      HL(24.95),
      UL(-135.7),
      3.75,
      4.75,
      n(176, 112, 112, 40),
    ),
    e.pole(HL(24.6), UL(-136), 0.25, 0, 3.6),
    e.pole(HL(24.6), UL(-131.6), 0.25, 0, 3.6),
    yield);
}
function* ane(e, t) {
  (yield* ine(e, t), yield, yield* rne(e, t));
}
function one(e, t) {
  let n = gL(HL(WL.x0), UL(WL.z0), HL(WL.x1), UL(WL.z1), [4, 7, 4, 4], 1);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    vL(e, n, 0, GL.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 16, 17.2),
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    vL(e, n, GL.podium, GL.cw, t.A.sub(`lcNet`, 0.5, 0, 1, 0.5), 12.8, 17.6),
    e.col(11057348).mat(0.95, 0, 0, 0),
    vL(e, n, GL.cw, GL.steel, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 30, 18),
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    bL(e, n, GL.steel));
  for (let [t, n, r] of KL) {
    (e.col(15263972).mat(0.5, 0.5, 0, 0),
      e.obox(HL(t), GL.steel + 11, UL(n), 1.3, 11, 1.3),
      e.col(13120030).mat(0.5, 0.4, 0, 0));
    let i = Math.sin(r),
      a = -Math.cos(r);
    e.rod(
      HL(t),
      GL.steel + 23,
      UL(n),
      HL(t) + i * 15,
      GL.steel + 23 + 33,
      UL(n) + a * 15,
      0.9,
      3,
    );
  }
  CL(e, HL(WL.x0 + 2), GL.steel + 6, UL(WL.z0 + 2), 0.7);
}
var sne = {
    id: `beacon-tower-site`,
    site: (e) => ({
      x: VL.x,
      z: VL.z,
      gy: e.groundHeight(VL.x, VL.z),
      facing: 0,
    }),
    name: {
      ja: `ビーコンタワー（建設中）`,
      zh: `燈塔大樓（興建中）`,
      en: `Beacon Tower (under construction)`,
    },
    near: 260,
    build: ane,
    far: one,
    bounds: () => [3, -159, 25, -125],
    farBoxes: (e, t) => [
      {
        x0: WL.x0,
        x1: WL.x1,
        z0: WL.z0,
        z1: WL.z1,
        y0: t.gy,
        y1: t.gy + GL.cw,
        rgb: [0.42, 0.44, 0.46],
      },
      {
        x0: WL.x0,
        x1: WL.x1,
        z0: WL.z0,
        z1: WL.z1,
        y0: t.gy + GL.cw,
        y1: t.gy + GL.steel,
        rgb: [0.18, 0.4, 0.55],
      },
    ],
    anchors: [
      {
        key: `beacon-tower-site-gate`,
        lx: HL(26.2),
        lz: UL(-133.8),
        turn: -Math.PI / 2,
        name: { zh: `燈塔大樓 工地大門`, en: `Beacon Tower site gate` },
      },
    ],
    blip: !1,
  },
  qL = [
    SO,
    XA,
    Ej,
    ...jj,
    ak,
    zk,
    oA,
    bA,
    wA,
    PM,
    xN,
    mP,
    fF,
    WF,
    SI,
    Bte,
    Yte,
    tne,
    sne,
  ];
function JL(e, t) {
  if (t.site) return t.site(e);
  let n = e.landmark(t.lot ?? t.id);
  return n
    ? { x: n.x, z: n.z, gy: e.groundHeight(n.x, n.z), facing: n.facing }
    : null;
}
function YL(e, t, n) {
  if (t.bounds) return t.bounds(e, n);
  let r = 1 / 0,
    i = 1 / 0,
    a = -1 / 0,
    o = -1 / 0;
  for (let s of t.farBoxes(e, n))
    ((r = Math.min(r, s.x0, s.x1)),
      (a = Math.max(a, s.x0, s.x1)),
      (i = Math.min(i, s.z0, s.z1)),
      (o = Math.max(o, s.z0, s.z1)));
  return Number.isFinite(r)
    ? [r - 15, i - 15, a + 15, o + 15]
    : [n.x - 30, n.z - 30, n.x + 30, n.z + 30];
}
function XL(e) {
  let t = [];
  for (let n of qL) {
    let r = JL(e, n);
    if (r) for (let i of n.farBoxes(e, r)) t.push(i);
  }
  return t;
}
var ZL = 9080983,
  QL = {
    id: `kit-sample`,
    site: (e) => ({
      x: -425,
      z: 40,
      gy: e.groundHeight(-425, 40),
      facing: Math.PI / 2,
    }),
    near: 400,
    build(e, t) {
      let n = { cell: t.c(`kawara`), color: ZL, ridgeColor: 5198938 },
        r = (n, r, i, a) => {
          e.col(15723748)
            .mat(0.85, 0, 0, 0)
            .box(n - r, 0, -i, n + r, a, i, t.c(`plaster`), 2, 2);
        };
      (r(-60, 6, 4, 4),
        ND(e, -60, 0, 4, 7.5, 5.5, { ...n, rise: 3.2 }),
        r(-40, 6, 4, 4),
        PD(e, -40, 0, 4, 7.2, 5.2, { ...n, rise: 2.8, wallY: 4 }),
        r(-20, 6, 4, 4),
        FD(e, -20, 0, 4, 7.5, 5.5, { ...n, rise: 4 }),
        r(0, 6, 4, 4),
        FD(e, 0, 0, 4, 7.5, 5.5, {
          cell: t.c(`copper`),
          color: 16777215,
          band: 6265476,
          ridgeColor: 5212786,
          rise: 4.2,
          sori: 0.9,
        }),
        r(20, 5, 3, 3.5),
        ID(e, 20, 0, 3.6, 4, -6, -2, 2.2, { ...n, rise: 0 }),
        LD(e, 40, 0, 0, 5, 6.5, { type: `myojin`, plaque: t.c(`shoji`) }),
        LD(e, 55, 0, 0, 4, 5.5, { type: `shinmei` }));
    },
    far() {},
    farBoxes: () => [],
  },
  $L = 230,
  eR = 150,
  tR = { low: 0.6, medium: 0.8, high: 1, ultra: 1.3 },
  nR = {
    low: { vertices: 215e3, indices: 34e4 },
    high: { vertices: 285e3, indices: 44e4 },
  },
  rR = 160,
  iR = {
    coarsePad: 40,
    coarseDrop: 100,
    nearRange: 260,
    nearPad: 40,
    nearDrop: 80,
  },
  aR = new M(),
  oR = new M(),
  sR = [0, 0, 0, 0];
