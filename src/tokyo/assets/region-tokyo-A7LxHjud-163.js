// tokyo/assets/region-tokyo-A7LxHjud 163 — col
// Lines 67934-68272 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* wme(e, t) {
  let n = (n, r, i, a = !1, o = !1, s = !1) => {
    (BC(e, t, n, r, SC, i, { attic: a, skipN: !o, skipS: !s }),
      VC(e, t, n, r, SC, i, a));
  };
  n(DC[1], wC[1], CC, !1, !0);
  {
    let [n, r] = DC,
      i = zC(t).slice(1);
    (mC(e, r, SC, n, SC, i),
      mC(e, n, CC, r, CC, i, 0.08, 0.04),
      e
        .col(yC)
        .mat(0.8, 0, 0.05, G)
        .box(n, FC, SC, r, IC, CC, t.c(`granite`), 2, 1)
        .mat(0.85, 0, 0, 0)
        .col(16777215),
      VC(e, t, n, r, SC, CC, !1, !1),
      Cme(e, t));
  }
  (yield,
    n(EC[1], DC[0], CC),
    n(TC[0], TC[1], CC, !1, !1, !0),
    yield,
    BC(e, t, jC[0], jC[1], -7, CC),
    VC(e, t, jC[0], jC[1], -7, CC),
    BC(e, t, MC[0], MC[1], -7, RC(-90)),
    VC(e, t, MC[0], MC[1], -7, RC(-90)),
    yield);
  let r = -9.1;
  (BC(e, t, EC[0], EC[1], r, CC, { attic: !0 }),
    VC(e, t, EC[0], EC[1], r, CC, !0),
    yield);
  for (let t of [EC[0] + 0.6, EC[0] + 6, EC[1] - 6, EC[1] - 0.6])
    HC(e, t, r, LC, 1.3);
  if (!e.coarse) {
    (e.col(yC).mat(0.75, 0, 0.05, G),
      e.box(-5.4, 0, -9.9, 5.4, 6.4, r, t.c(`granite`), 2, 2),
      e.col(16777215).emis(0.22, G));
    for (let n of [-3.6, 0, 3.6])
      e.panel(n + 1.6, -9.92, n - 1.6, -9.92, 0, 5.6, t.c(`ekiDoor`));
    e.emis(0, 0);
  }
  for (let t of [
    36,
    60,
    -36,
    -60,
    DC[0] - 0.3,
    DC[1] + 0.3,
    jC[0] + 0.6,
    MC[1] - 0.6,
  ])
    HC(e, t, SC, FC, 1.2);
  let i = {
      cell: t.c(`slate`),
      tile: 2,
      color: bC,
      curve: 1,
      sori: 0,
      thick: 0.25,
      eave: 0.6,
      band: yC,
      soffit: 5917244,
      ridgeH: 0.35,
      ridgeColor: xC,
      rows: 3,
    },
    a = (n, r, a) => {
      let o = (r - n) / 2 + 0.4,
        s = (a - SC) / 2 + 0.4;
      (e.mat(0.55, 0.1, 0.03, G),
        sC(e, (n + r) / 2, (SC + a) / 2, 16.25, o, s, {
          ...i,
          rise: 5.2,
          R: Math.max(0, o - s * 0.6),
        }),
        Sme(e, t, n, r, -6.9, 17.4));
    };
  (a(EC[1], wC[1], CC),
    yield,
    a(TC[0], TC[1], CC),
    yield,
    a(jC[0], jC[1], CC),
    a(MC[0], MC[1], RC(-90)),
    yield,
    e.mat(0.55, 0.1, 0.03, G),
    sC(e, 0, -2, 20, 12.6, 14.2 / 2 + 0.6, { ...i, rise: 8.2, R: 3.2 }),
    e.col(xC).mat(0.45, 0.6, 0.1, G),
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
    UC(e, t, kC.lx, kC.lz, !0),
    yield,
    UC(e, t, AC.lx, AC.lz, !1),
    yield,
    e.solid(DC[1], SC, wC[1], CC, 0, 22),
    e.solid(DC[0], SC, DC[1], CC, 4.8, 22),
    e.solid(EC[1], SC, DC[0], CC, 0, 22),
    e.solid(EC[0], r, EC[1], CC, 0, 30),
    e.solid(TC[0], SC, TC[1], CC, 0, 22),
    e.solid(jC[0], -7, jC[1], CC, 0, 22),
    e.solid(MC[0], -7, MC[1], RC(-90), 0, 22),
    e.solid(DC[0] - 0.2, SC, DC[0], CC, 0, 5),
    e.solid(DC[1], SC, DC[1] + 0.2, CC, 0, 5),
    e.solid(wC[1], SC, kC.lx, CC, 0, 22),
    e.solid(AC.lx, SC, TC[0], RC(-62), 0, 22));
}
function Tme(e, t) {
  let [n, r] = DC,
    i = OC * Math.cos(Math.PI / 8);
  (e.col(16777215).mat(0.75, 0, 0.3, G),
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
      kC.lx + 2.6,
      kC.lz - i - 0.06,
      kC.lx - 2.6,
      kC.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitNorth`),
    ),
    e.panel(
      AC.lx + 2.6,
      AC.lz - i - 0.06,
      AC.lx - 2.6,
      AC.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitSouth`),
    ),
    e.emis(0, 0));
}
function Eme(e, t) {
  let n = t.c(`ekiBay`);
  (e.emis(0.12, G),
    e.box(MC[0], 0, SC, jC[1], FC, CC, n, 4, FC / 3),
    e.emis(0, 0).col(bC).mat(0.6, 0.1, 0.03, G),
    e.extrudeX(
      [CC, 15.4, SC, 15.4, -3.4000000000000004 / 2, 19.9],
      MC[0],
      jC[1],
      !0,
      !0,
      t.c(`slate`),
    ),
    e.col(16777215).emis(0.12, G),
    e.box(EC[0], 0, -9.1, EC[1], LC, CC, n, 4, LC / 4),
    e.emis(0.03).col(bC),
    e.extrudeX(
      [CC, 19.6, SC, 19.6, -3.4000000000000004 / 2, 26.6],
      EC[0],
      EC[1],
      !0,
      !0,
      t.c(`slate`),
    ));
  for (let r of [kC, AC])
    (e.col(16777215).emis(0.12, G),
      e.lathe(
        r.lx,
        r.lz,
        [OC, 0, OC, IC, OC * 0.9, IC, OC * 0.9, 21.4],
        8,
        Math.PI / 8,
        n,
      ),
      e.col(bC).emis(0.03),
      e.lathe(
        r.lx,
        r.lz,
        [OC * 0.95, 21.4, OC * 0.75, 28, 1.7, 33.4, 0.2, 40],
        8,
        Math.PI / 8,
        t.c(`slate`),
      ));
  e.emis(0, 0).mat(0.85, 0, 0, 0).col(16777215);
}
function Dme(e) {
  return {
    x: vC.x,
    z: vC.z,
    gy: e.groundHeight(vC.x - 7, 0),
    facing: -Math.PI / 2,
  };
}
function Ome(e, t) {
  let n = (e) => vC.x + e,
    r = (e) => vC.z - e,
    i = [0.42, 0.13, 0.08],
    a = [0.07, 0.08, 0.09],
    o = [
      {
        x0: n(SC),
        x1: n(CC),
        z0: r(jC[1]),
        z1: r(MC[0]),
        y0: t.gy,
        y1: t.gy + IC,
        rgb: i,
        lit: !0,
      },
      {
        x0: n(-7.5),
        x1: n(4.1),
        z0: r(jC[1]),
        z1: r(MC[0]),
        y0: t.gy + IC,
        y1: t.gy + IC + 4,
        rgb: a,
      },
      {
        x0: n(SC),
        x1: n(CC),
        z0: r(EC[1]),
        z1: r(EC[0]),
        y0: t.gy,
        y1: t.gy + LC + 5,
        rgb: i,
        lit: !0,
      },
    ];
  for (let e of [kC, AC]) {
    let s = OC * 0.85;
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
var kme = {
  id: `tokyo-station`,
  site: Dme,
  name: {
    ja: `東京駅丸の内駅舎`,
    zh: `東京車站丸之內站舍`,
    en: `Tokyo Station Marunouchi Building`,
  },
  near: 230,
  build: wme,
  plaques: Tme,
  far: Eme,
  farBoxes: Ome,
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
      lx: (DC[0] + DC[1]) / 2,
      lz: -10.5,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內中央口`,
        en: `Tokyo Station Marunouchi Central Exit`,
      },
    },
    {
      key: `tokyo-station-north`,
      lx: kC.lx,
      lz: kC.lz - OC - 3,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內北口`,
        en: `Tokyo Station Marunouchi North Exit`,
      },
    },
    {
      key: `tokyo-station-south`,
      lx: AC.lx,
      lz: AC.lz - OC - 3,
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
      lx: kC.lx,
      lz: kC.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内北口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
    {
      key: `dome-hall-south`,
      lx: AC.lx,
      lz: AC.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内南口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
  ],
};
