// tokyo/assets/region-tokyo-55J_WESF 163 — col
// Lines 67843-68181 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* fme(e, t) {
  let n = (n, r, i, a = !1, o = !1, s = !1) => {
    (LC(e, t, n, r, yC, i, { attic: a, skipN: !o, skipS: !s }),
      RC(e, t, n, r, yC, i, a));
  };
  n(wC[1], xC[1], bC, !1, !0);
  {
    let [n, r] = wC,
      i = IC(t).slice(1);
    (dC(e, r, yC, n, yC, i),
      dC(e, n, bC, r, bC, i, 0.08, 0.04),
      e
        .col(gC)
        .mat(0.8, 0, 0.05, G)
        .box(n, MC, yC, r, NC, bC, t.c(`granite`), 2, 1)
        .mat(0.85, 0, 0, 0)
        .col(16777215),
      RC(e, t, n, r, yC, bC, !1, !1),
      dme(e, t));
  }
  (yield,
    n(CC[1], wC[0], bC),
    n(SC[0], SC[1], bC, !1, !1, !0),
    yield,
    LC(e, t, OC[0], OC[1], -7, bC),
    RC(e, t, OC[0], OC[1], -7, bC),
    LC(e, t, kC[0], kC[1], -7, FC(-90)),
    RC(e, t, kC[0], kC[1], -7, FC(-90)),
    yield);
  let r = -9.1;
  (LC(e, t, CC[0], CC[1], r, bC, { attic: !0 }),
    RC(e, t, CC[0], CC[1], r, bC, !0),
    yield);
  for (let t of [CC[0] + 0.6, CC[0] + 6, CC[1] - 6, CC[1] - 0.6])
    zC(e, t, r, PC, 1.3);
  if (!e.coarse) {
    (e.col(gC).mat(0.75, 0, 0.05, G),
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
    wC[0] - 0.3,
    wC[1] + 0.3,
    OC[0] + 0.6,
    kC[1] - 0.6,
  ])
    zC(e, t, yC, MC, 1.2);
  let i = {
      cell: t.c(`slate`),
      tile: 2,
      color: _C,
      curve: 1,
      sori: 0,
      thick: 0.25,
      eave: 0.6,
      band: gC,
      soffit: 5917244,
      ridgeH: 0.35,
      ridgeColor: vC,
      rows: 3,
    },
    a = (n, r, a) => {
      let o = (r - n) / 2 + 0.4,
        s = (a - yC) / 2 + 0.4;
      (e.mat(0.55, 0.1, 0.03, G),
        iC(e, (n + r) / 2, (yC + a) / 2, 16.25, o, s, {
          ...i,
          rise: 5.2,
          R: Math.max(0, o - s * 0.6),
        }),
        ume(e, t, n, r, -6.9, 17.4));
    };
  (a(CC[1], xC[1], bC),
    yield,
    a(SC[0], SC[1], bC),
    yield,
    a(OC[0], OC[1], bC),
    a(kC[0], kC[1], FC(-90)),
    yield,
    e.mat(0.55, 0.1, 0.03, G),
    iC(e, 0, -2, 20, 12.6, 14.2 / 2 + 0.6, { ...i, rise: 8.2, R: 3.2 }),
    e.col(vC).mat(0.45, 0.6, 0.1, G),
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
    BC(e, t, EC.lx, EC.lz, !0),
    yield,
    BC(e, t, DC.lx, DC.lz, !1),
    yield,
    e.solid(wC[1], yC, xC[1], bC, 0, 22),
    e.solid(wC[0], yC, wC[1], bC, 4.8, 22),
    e.solid(CC[1], yC, wC[0], bC, 0, 22),
    e.solid(CC[0], r, CC[1], bC, 0, 30),
    e.solid(SC[0], yC, SC[1], bC, 0, 22),
    e.solid(OC[0], -7, OC[1], bC, 0, 22),
    e.solid(kC[0], -7, kC[1], FC(-90), 0, 22),
    e.solid(wC[0] - 0.2, yC, wC[0], bC, 0, 5),
    e.solid(wC[1], yC, wC[1] + 0.2, bC, 0, 5),
    e.solid(xC[1], yC, EC.lx, bC, 0, 22),
    e.solid(DC.lx, yC, SC[0], FC(-62), 0, 22));
}
function pme(e, t) {
  let [n, r] = wC,
    i = TC * Math.cos(Math.PI / 8);
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
      EC.lx + 2.6,
      EC.lz - i - 0.06,
      EC.lx - 2.6,
      EC.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitNorth`),
    ),
    e.panel(
      DC.lx + 2.6,
      DC.lz - i - 0.06,
      DC.lx - 2.6,
      DC.lz - i - 0.06,
      5.550000000000001,
      6.15,
      t(`exitSouth`),
    ),
    e.emis(0, 0));
}
function mme(e, t) {
  let n = t.c(`ekiBay`);
  (e.emis(0.12, G),
    e.box(kC[0], 0, yC, OC[1], MC, bC, n, 4, MC / 3),
    e.emis(0, 0).col(_C).mat(0.6, 0.1, 0.03, G),
    e.extrudeX(
      [bC, 15.4, yC, 15.4, -3.4000000000000004 / 2, 19.9],
      kC[0],
      OC[1],
      !0,
      !0,
      t.c(`slate`),
    ),
    e.col(16777215).emis(0.12, G),
    e.box(CC[0], 0, -9.1, CC[1], PC, bC, n, 4, PC / 4),
    e.emis(0.03).col(_C),
    e.extrudeX(
      [bC, 19.6, yC, 19.6, -3.4000000000000004 / 2, 26.6],
      CC[0],
      CC[1],
      !0,
      !0,
      t.c(`slate`),
    ));
  for (let r of [EC, DC])
    (e.col(16777215).emis(0.12, G),
      e.lathe(
        r.lx,
        r.lz,
        [TC, 0, TC, NC, TC * 0.9, NC, TC * 0.9, 21.4],
        8,
        Math.PI / 8,
        n,
      ),
      e.col(_C).emis(0.03),
      e.lathe(
        r.lx,
        r.lz,
        [TC * 0.95, 21.4, TC * 0.75, 28, 1.7, 33.4, 0.2, 40],
        8,
        Math.PI / 8,
        t.c(`slate`),
      ));
  e.emis(0, 0).mat(0.85, 0, 0, 0).col(16777215);
}
function hme(e) {
  return {
    x: hC.x,
    z: hC.z,
    gy: e.groundHeight(hC.x - 7, 0),
    facing: -Math.PI / 2,
  };
}
function gme(e, t) {
  let n = (e) => hC.x + e,
    r = (e) => hC.z - e,
    i = [0.42, 0.13, 0.08],
    a = [0.07, 0.08, 0.09],
    o = [
      {
        x0: n(yC),
        x1: n(bC),
        z0: r(OC[1]),
        z1: r(kC[0]),
        y0: t.gy,
        y1: t.gy + NC,
        rgb: i,
        lit: !0,
      },
      {
        x0: n(-7.5),
        x1: n(4.1),
        z0: r(OC[1]),
        z1: r(kC[0]),
        y0: t.gy + NC,
        y1: t.gy + NC + 4,
        rgb: a,
      },
      {
        x0: n(yC),
        x1: n(bC),
        z0: r(CC[1]),
        z1: r(CC[0]),
        y0: t.gy,
        y1: t.gy + PC + 5,
        rgb: i,
        lit: !0,
      },
    ];
  for (let e of [EC, DC]) {
    let s = TC * 0.85;
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
var _me = {
  id: `tokyo-station`,
  site: hme,
  name: {
    ja: `東京駅丸の内駅舎`,
    zh: `東京車站丸之內站舍`,
    en: `Tokyo Station Marunouchi Building`,
  },
  near: 230,
  build: fme,
  plaques: pme,
  far: mme,
  farBoxes: gme,
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
      lx: (wC[0] + wC[1]) / 2,
      lz: -10.5,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內中央口`,
        en: `Tokyo Station Marunouchi Central Exit`,
      },
    },
    {
      key: `tokyo-station-north`,
      lx: EC.lx,
      lz: EC.lz - TC - 3,
      turn: Math.PI,
      name: {
        zh: `東京車站 丸之內北口`,
        en: `Tokyo Station Marunouchi North Exit`,
      },
    },
    {
      key: `tokyo-station-south`,
      lx: DC.lx,
      lz: DC.lz - TC - 3,
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
      lx: EC.lx,
      lz: EC.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内北口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
    {
      key: `dome-hall-south`,
      lx: DC.lx,
      lz: DC.lz,
      r: 9.9,
      y0: 0,
      y1: 33.4,
      note: `丸の内南口 dome hall (T2-Interiors: the reliefs under the dome)`,
    },
  ],
};
