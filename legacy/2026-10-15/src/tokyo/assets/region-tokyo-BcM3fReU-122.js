// tokyo/assets/region-tokyo-BcM3fReU 122 — col
// Lines 55512-55850 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* _O(e, t) {
  let n = (n, r, i, a = !1, o = !1, s = !1) => {
    (dO(e, t, n, r, qD, i, { attic: a, skipN: !o, skipS: !s }),
      fO(e, t, n, r, qD, i, a));
  };
  n(QD[1], YD[1], JD, !1, !0);
  {
    let [n, r] = QD,
      i = uO(t).slice(1);
    (BD(e, r, qD, n, qD, i),
      BD(e, n, JD, r, JD, i, 0.08, 0.04),
      e
        .col(WD)
        .mat(0.8, 0, 0.05, Y)
        .box(n, oO, qD, r, sO, JD, t.c(`granite`), 2, 1)
        .mat(0.85, 0, 0, 0)
        .col(16777215),
      fO(e, t, n, r, qD, JD, !1, !1),
      gO(e, t));
  }
  (yield,
    n(ZD[1], QD[0], JD),
    n(XD[0], XD[1], JD, !1, !1, !0),
    yield,
    dO(e, t, nO[0], nO[1], -7, JD),
    fO(e, t, nO[0], nO[1], -7, JD),
    dO(e, t, rO[0], rO[1], -7, lO(-90)),
    fO(e, t, rO[0], rO[1], -7, lO(-90)),
    yield);
  let r = -9.1;
  (dO(e, t, ZD[0], ZD[1], r, JD, { attic: !0 }),
    fO(e, t, ZD[0], ZD[1], r, JD, !0),
    yield);
  for (let t of [ZD[0] + 0.6, ZD[0] + 6, ZD[1] - 6, ZD[1] - 0.6])
    pO(e, t, r, cO, 1.3);
  if (!e.coarse) {
    (e.col(WD).mat(0.75, 0, 0.05, Y),
      e.box(-5.4, 0, -9.9, 5.4, 6.4, r, t.c(`granite`), 2, 2),
      e.col(16777215).emis(0.22, Y));
    for (let n of [-3.6, 0, 3.6])
      e.panel(n + 1.6, -9.92, n - 1.6, -9.92, 0, 5.6, t.c(`ekiDoor`));
    e.emis(0, 0);
  }
  for (let t of [
    36,
    60,
    -36,
    -60,
    QD[0] - 0.3,
    QD[1] + 0.3,
    nO[0] + 0.6,
    rO[1] - 0.6,
  ])
    pO(e, t, qD, oO, 1.2);
  let i = {
      cell: t.c(`slate`),
      tile: 2,
      color: GD,
      curve: 1,
      sori: 0,
      thick: 0.25,
      eave: 0.6,
      band: WD,
      soffit: 5917244,
      ridgeH: 0.35,
      ridgeColor: KD,
      rows: 3,
    },
    a = (n, r, a) => {
      let o = (r - n) / 2 + 0.4,
        s = (a - qD) / 2 + 0.4;
      (e.mat(0.55, 0.1, 0.03, Y),
        ND(e, (n + r) / 2, (qD + a) / 2, 16.25, o, s, {
          ...i,
          rise: 5.2,
          R: Math.max(0, o - s * 0.6),
        }),
        mO(e, t, n, r, -6.9, 17.4));
    };
  (a(ZD[1], YD[1], JD),
    yield,
    a(XD[0], XD[1], JD),
    yield,
    a(nO[0], nO[1], JD),
    a(rO[0], rO[1], lO(-90)),
    yield,
    e.mat(0.55, 0.1, 0.03, Y),
    ND(e, 0, -2, 20, 12.6, 14.2 / 2 + 0.6, { ...i, rise: 8.2, R: 3.2 }),
    e.col(KD).mat(0.45, 0.6, 0.1, Y),
    e.lathe(
      0,
      -2,
      [
        0.9, 27.900000000000002, 0.8, 29, 0.3, 29.700000000000003, 0.05,
        31.200000000000003,
      ],
      8,
      Math.PI / 8,
    ),
    e.mat(0.85, 0, 0, 0).col(16777215),
    hO(e, t, eO.lx, eO.lz, !0),
    yield,
    hO(e, t, tO.lx, tO.lz, !1),
    yield,
    e.solid(QD[1], qD, YD[1], JD, 0, 22),
    e.solid(QD[0], qD, QD[1], JD, 4.8, 22),
    e.solid(ZD[1], qD, QD[0], JD, 0, 22),
    e.solid(ZD[0], r, ZD[1], JD, 0, 30),
    e.solid(XD[0], qD, XD[1], JD, 0, 22),
    e.solid(nO[0], -7, nO[1], JD, 0, 22),
    e.solid(rO[0], -7, rO[1], lO(-90), 0, 22),
    e.solid(QD[0] - 0.2, qD, QD[0], JD, 0, 5),
    e.solid(QD[1], qD, QD[1] + 0.2, JD, 0, 5),
    e.solid(YD[1], qD, eO.lx, JD, 0, 22),
    e.solid(tO.lx, qD, XD[0], lO(-62), 0, 22));
}
function vO(e, t) {
  let [n, r] = QD,
    i = $D * Math.cos(Math.PI / 8);
  (e.col(16777215).mat(0.75, 0, 0.3, Y),
    e.panel(
      (n + r) / 2 + 2.6,
      -8.97,
      (n + r) / 2 - 2.6,
      -8.97,
      4.85,
      5.3999999999999995,
      t(`exitCentral`),
    ),
    e.panel(
      eO.lx + 2.6,
      eO.lz - i - 0.06,
      eO.lx - 2.6,
      eO.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitNorth`),
    ),
    e.panel(
      tO.lx + 2.6,
      tO.lz - i - 0.06,
      tO.lx - 2.6,
      tO.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitSouth`),
    ),
    e.emis(0, 0));
}
function yO(e, t) {
  let n = t.c(`ekiBay`);
  (e.emis(0.12, Y),
    e.box(rO[0], 0, qD, nO[1], oO, JD, n, 4, oO / 3),
    e.emis(0, 0).col(GD).mat(0.6, 0.1, 0.03, Y),
    e.extrudeX(
      [JD, 15.4, qD, 15.4, -3.4000000000000004 / 2, 19.9],
      rO[0],
      nO[1],
      !0,
      !0,
      t.c(`slate`),
    ),
    e.col(16777215).emis(0.12, Y),
    e.box(ZD[0], 0, -9.1, ZD[1], cO, JD, n, 4, cO / 4),
    e.emis(0.03).col(GD),
    e.extrudeX(
      [JD, 19.6, qD, 19.6, -3.4000000000000004 / 2, 26.6],
      ZD[0],
      ZD[1],
      !0,
      !0,
      t.c(`slate`),
    ));
  for (let r of [eO, tO])
    (e.col(16777215).emis(0.12, Y),
      e.lathe(
        r.lx,
        r.lz,
        [$D, 0, $D, sO, $D * 0.9, sO, $D * 0.9, 21.4],
        8,
        Math.PI / 8,
        n,
      ),
      e.col(GD).emis(0.03),
      e.lathe(
        r.lx,
        r.lz,
        [$D * 0.95, 21.4, $D * 0.75, 28, 1.7, 33.4, 0.2, 40],
        8,
        Math.PI / 8,
        t.c(`slate`),
      ));
  e.emis(0, 0).mat(0.85, 0, 0, 0).col(16777215);
}
function bO(e) {
  return {
    x: UD.x,
    z: UD.z,
    gy: e.groundHeight(UD.x - 7, 0),
    facing: -Math.PI / 2,
  };
}
function xO(e, t) {
  let n = (e) => UD.x + e,
    r = (e) => UD.z - e,
    i = [0.42, 0.13, 0.08],
    a = [0.07, 0.08, 0.09],
    o = [
      {
        x0: n(qD),
        x1: n(JD),
        z0: r(nO[1]),
        z1: r(rO[0]),
        y0: t.gy,
        y1: t.gy + sO,
        rgb: i,
        lit: !0,
      },
      {
        x0: n(-7.5),
        x1: n(4.1),
        z0: r(nO[1]),
        z1: r(rO[0]),
        y0: t.gy + sO,
        y1: t.gy + sO + 4,
        rgb: a,
      },
      {
        x0: n(qD),
        x1: n(JD),
        z0: r(ZD[1]),
        z1: r(ZD[0]),
        y0: t.gy,
        y1: t.gy + cO + 5,
        rgb: i,
        lit: !0,
      },
    ];
  for (let e of [eO, tO]) {
    let s = $D * 0.85;
    (o.push({
      x0: n(e.lz - s),
      x1: n(e.lz + s),
      z0: r(e.lx + s),
      z1: r(e.lx - s),
      y0: t.gy,
      y1: t.gy + 21.4,
      rgb: i,
      lit: !0,
    }),
      o.push({
        x0: n(e.lz - s * 0.6),
        x1: n(e.lz + s * 0.6),
        z0: r(e.lx + s * 0.6),
        z1: r(e.lx - s * 0.6),
        y0: t.gy + 21.4,
        y1: t.gy + 31,
        rgb: a,
      }));
  }
  return o;
}
var SO = {
  id: `tokyo-station`,
  site: bO,
  name: {
    ja: `東京駅丸の内駅舎`,
    zh: `東京車站丸之內站舍`,
    en: `Tokyo Station Marunouchi Building`,
  },
  near: 230,
  build: _O,
  plaques: vO,
  far: yO,
  farBoxes: xO,
  blip: !0,
  anchors: [
    {
      key: `tokyo-station-plaza`,
      lx: 0,
      lz: -26.5,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內站前廣場`,
        en: `Tokyo Station Marunouchi Plaza`,
      },
    },
    {
      key: `tokyo-station-central`,
      lx: (QD[0] + QD[1]) / 2,
      lz: -10.5,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內中央口`,
        en: `Tokyo Station Marunouchi Central Exit`,
      },
    },
    {
      key: `tokyo-station-north`,
      lx: eO.lx,
      lz: eO.lz - $D - 3,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內北口`,
        en: `Tokyo Station Marunouchi North Exit`,
      },
    },
    {
      key: `tokyo-station-south`,
      lx: tO.lx,
      lz: tO.lz - $D - 3,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內南口`,
        en: `Tokyo Station Marunouchi South Exit`,
      },
    },
  ],
  volumes: [
    {
      key: `dome-hall-north`,
      lx: eO.lx,
      lz: eO.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内北口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
    {
      key: `dome-hall-south`,
      lx: tO.lx,
      lz: tO.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内南口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
  ],
};
