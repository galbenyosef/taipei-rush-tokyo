// tokyo/assets/region-tokyo-55J_WESF 200 — mat
// Lines 79476-79752 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* tve(e, t) {
  let n = (e, n, r, i) => Gk(t, `lcSigns`, e, n, r, i, 320, 192),
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
      e.panel(uA(t), dA(n), uA(a), dA(o), 0, 3),
      e.panel(
        uA(a) - l * 0.1,
        dA(o) + c * 0.1,
        uA(t) - l * 0.1,
        dA(n) + c * 0.1,
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
        uA(s[0]) + f,
        dA(s[1]) + p,
        uA(d[0]) + f,
        dA(d[1]) + p,
        0.9,
        2.1,
        o,
      );
    }
    e.solid(
      uA(Math.min(t, a)) - 0.1,
      dA(Math.min(n, o)) - 0.1,
      uA(Math.max(t, a)) + 0.1,
      dA(Math.max(n, o)) + 0.1,
      0,
      3,
    );
  }
  (e.col(7106676).mat(0.5, 0.6, 0, 0),
    e.box(uA(24.4), 0, dA(-136.2), uA(24.8), 3.6, dA(-135.8)),
    e.box(uA(24.4), 0, dA(-131.8), uA(24.8), 3.6, dA(-131.4)),
    e.box(uA(24.3), 3.4, dA(-136.2), uA(24.9), 3.7, dA(-131.4)),
    e.col(15263972).mat(0.6, 0.3, 0, 0),
    e.box(uA(24), 0, dA(-136), uA(24.2), 2.4, dA(-133.6)),
    e.col(16777215).mat(0.6, 0, 0.2, G),
    e.panel(
      uA(24.95),
      dA(-131.9),
      uA(24.95),
      dA(-135.7),
      3.75,
      4.75,
      n(176, 112, 112, 40),
    ),
    e.pole(uA(24.6), dA(-136), 0.25, 0, 3.6),
    e.pole(uA(24.6), dA(-131.6), 0.25, 0, 3.6),
    yield);
}
function* nve(e, t) {
  (yield* tve(e, t), yield, yield* eve(e, t));
}
function rve(e, t) {
  let n = Lk(uA(fA.x0), dA(fA.z0), uA(fA.x1), dA(fA.z1), [4, 7, 4, 4], 1);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    zk(e, n, 0, pA.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 16, 17.2),
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    zk(e, n, pA.podium, pA.cw, t.A.sub(`lcNet`, 0.5, 0, 1, 0.5), 12.8, 17.6),
    e.col(11057348).mat(0.95, 0, 0, 0),
    zk(e, n, pA.cw, pA.steel, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 30, 18),
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    Vk(e, n, pA.steel));
  for (let [t, n, r] of mA) {
    (e.col(15263972).mat(0.5, 0.5, 0, 0),
      e.obox(uA(t), pA.steel + 11, dA(n), 1.3, 11, 1.3),
      e.col(13120030).mat(0.5, 0.4, 0, 0));
    let i = Math.sin(r),
      a = -Math.cos(r);
    e.rod(
      uA(t),
      pA.steel + 23,
      dA(n),
      uA(t) + i * 15,
      pA.steel + 23 + 33,
      dA(n) + a * 15,
      0.9,
      3,
    );
  }
  Wk(e, uA(fA.x0 + 2), pA.steel + 6, dA(fA.z0 + 2), 0.7);
}
var ive = {
    id: `beacon-tower-site`,
    site: (e) => ({
      x: lA.x,
      z: lA.z,
      gy: e.groundHeight(lA.x, lA.z),
      facing: 0,
    }),
    name: {
      ja: `ビーコンタワー（建設中）`,
      zh: `燈塔大樓（興建中）`,
      en: `Beacon Tower (under construction)`,
    },
    near: 260,
    build: nve,
    far: rve,
    bounds: () => [3, -159, 25, -125],
    farBoxes: (e, t) => [
      {
        x0: fA.x0,
        x1: fA.x1,
        z0: fA.z0,
        z1: fA.z1,
        y0: t.gy,
        y1: t.gy + pA.cw,
        rgb: [0.42, 0.44, 0.46],
      },
      {
        x0: fA.x0,
        x1: fA.x1,
        z0: fA.z0,
        z1: fA.z1,
        y0: t.gy + pA.cw,
        y1: t.gy + pA.steel,
        rgb: [0.18, 0.4, 0.55],
      },
    ],
    anchors: [
      {
        key: `beacon-tower-site-gate`,
        lx: uA(26.2),
        lz: dA(-133.8),
        turn: -Math.PI / 2,
        name: { zh: `燈塔大樓 工地大門`, en: `Beacon Tower site gate` },
      },
    ],
    blip: !1,
  },
  hA = Gp.upFarX + 12 - Gp.upWestX,
  gA = Gp.upFarX - Gp.upWestX,
  _A = -2,
  vA = 0.03,
  yA = -0.55;
function bA(e) {
  return (t) => {
    let n = t.roads.find((t) => t.id === e);
    return { x: n.to, z: n.at, gy: t.groundHeight(n.to - 2, n.at), facing: 0 };
  };
}
var xA = (e, t) => {
  let n = e.roads.find((e) => e.id === t);
  return { w: _p(n, gv), c: n.lanesPerDir * gv + n.median / 2 };
};
function SA(e, t, n, r, i) {
  (e.col(4934736).mat(0.92),
    e.box(0, yA, -r, hA, vA, r, t.c(`white`), 0, 0),
    e.col(10263186).mat(0.88));
  for (let i of [-1, 1])
    e.box(
      0,
      yA,
      i < 0 ? -n : r,
      hA,
      0.18,
      i < 0 ? -r : n,
      t.c(`granite`),
      4,
      4,
    );
  for (let r of [-1, 1]) {
    let a = r * (n - 0.35),
      o = r * n;
    if ((e.col(i.parapet).mat(0.6, i.ornate ? 0.3 : 0.2), i.ornate)) {
      (e.box(
        0,
        0.18,
        Math.min(a, o),
        hA,
        0.48,
        Math.max(a, o),
        t.c(`granite`),
        2,
        2,
      ),
        e.rod(0, 1.18, r * (n - 0.18), hA, 1.18, r * (n - 0.18), 0.06));
      for (let t = 0; t <= hA; t += e.coarse ? 6 : 2)
        e.rod(t, 0.48, r * (n - 0.18), t, 1.18, r * (n - 0.18), 0.035);
    } else
      e.box(
        0,
        0.18,
        Math.min(a, o),
        hA,
        1.23,
        Math.max(a, o),
        t.c(`white`),
        0,
        0,
      );
    e.solid(0, Math.min(a, o) - 0.05, hA, Math.max(a, o) + 0.05, vA, 1.28);
  }
  for (let r = 6; r < hA - 2; r += i.lamp)
    for (let a of [-1, 1]) {
      let o = a * (n - 0.18);
      if (
        (e.col(i.ornate ? 3816767 : 5991022).mat(0.5, 0.4),
        e.rod(r, 1.18, o, r, 6.23, o, i.ornate ? 0.14 : 0.1),
        i.ornate)
      )
        for (let t of [-1, 1]) e.rod(r, 5.63, o, r + t * 0.9, 6.13, o, 0.06);
      if ((e.col(16773584).mat(0.4, 0, 2.2, G), i.ornate))
        for (let n of [-1, 1])
          e.box(
            r + n * 0.9 - 0.25,
            6.13,
            o - 0.25,
            r + n * 0.9 + 0.25,
            6.73,
            o + 0.25,
            t.c(`white`),
          );
      else e.box(r - 0.3, 6.23, o - 0.3, r + 0.3, 6.78, o + 0.3, t.c(`white`));
      e.mat(0.6);
    }
}
function CA(e, t, n, r) {
  e.col(11051414).mat(0.9);
  for (let i of r) {
    e.box(
      i - 1.8,
      -3,
      -n - 1.2,
      i + 1.8,
      -0.6000000000000001,
      n + 1.2,
      t.c(`granite`),
      3,
      3,
    );
    for (let r of [-1, 1])
      e.box(
        i - 1.2,
        -3,
        r < 0 ? -n - 3 : n + 1.2,
        i + 1.2,
        -0.9500000000000001,
        r < 0 ? -n - 1.2 : n + 3,
        t.c(`granite`),
        3,
        3,
      );
  }
}
function wA(e, t, n) {
  e.col(12038308).mat(0.85);
  for (let r of [-1, 1]) {
    let i = r * (n + 0.1);
    (e.box(-1.6, 0, i - 0.6, -0.2, 2.6, i + 0.6, t.c(`granite`), 2, 2),
      e.solid(-1.6, i - 0.6, -0.2, i + 0.6, 0, 2.6));
  }
}
