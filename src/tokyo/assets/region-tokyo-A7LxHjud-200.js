// tokyo/assets/region-tokyo-A7LxHjud 200 — mat
// Lines 79567-79843 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* mve(e, t) {
  let n = (e, n, r, i) => qk(t, `lcSigns`, e, n, r, i, 320, 192),
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
      e.panel(fA(t), pA(n), fA(a), pA(o), 0, 3),
      e.panel(
        fA(a) - l * 0.1,
        pA(o) + c * 0.1,
        fA(t) - l * 0.1,
        pA(n) + c * 0.1,
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
        fA(s[0]) + f,
        pA(s[1]) + p,
        fA(d[0]) + f,
        pA(d[1]) + p,
        0.9,
        2.1,
        o,
      );
    }
    e.solid(
      fA(Math.min(t, a)) - 0.1,
      pA(Math.min(n, o)) - 0.1,
      fA(Math.max(t, a)) + 0.1,
      pA(Math.max(n, o)) + 0.1,
      0,
      3,
    );
  }
  (e.col(7106676).mat(0.5, 0.6, 0, 0),
    e.box(fA(24.4), 0, pA(-136.2), fA(24.8), 3.6, pA(-135.8)),
    e.box(fA(24.4), 0, pA(-131.8), fA(24.8), 3.6, pA(-131.4)),
    e.box(fA(24.3), 3.4, pA(-136.2), fA(24.9), 3.7, pA(-131.4)),
    e.col(15263972).mat(0.6, 0.3, 0, 0),
    e.box(fA(24), 0, pA(-136), fA(24.2), 2.4, pA(-133.6)),
    e.col(16777215).mat(0.6, 0, 0.2, G),
    e.panel(
      fA(24.95),
      pA(-131.9),
      fA(24.95),
      pA(-135.7),
      3.75,
      4.75,
      n(176, 112, 112, 40),
    ),
    e.pole(fA(24.6), pA(-136), 0.25, 0, 3.6),
    e.pole(fA(24.6), pA(-131.6), 0.25, 0, 3.6),
    yield);
}
function* hve(e, t) {
  (yield* mve(e, t), yield, yield* pve(e, t));
}
function gve(e, t) {
  let n = zk(fA(mA.x0), pA(mA.z0), fA(mA.x1), pA(mA.z1), [4, 7, 4, 4], 1);
  (e.col(16777215).mat(0.4, 0.4, 0.02, 0),
    Vk(e, n, 0, hA.podium, t.A.sub(`lcNet`, 0, 0, 0.5, 0.5), 16, 17.2),
    e.col(16777215).mat(0.2, 0.5, 0, 0),
    Vk(e, n, hA.podium, hA.cw, t.A.sub(`lcNet`, 0.5, 0, 1, 0.5), 12.8, 17.6),
    e.col(11057348).mat(0.95, 0, 0, 0),
    Vk(e, n, hA.cw, hA.steel, t.A.sub(`lcNet`, 0, 0.5, 1, 1), 30, 18),
    e.col(9342860).mat(0.7, 0.3, 0, 0),
    Uk(e, n, hA.steel));
  for (let [t, n, r] of gA) {
    (e.col(15263972).mat(0.5, 0.5, 0, 0),
      e.obox(fA(t), hA.steel + 11, pA(n), 1.3, 11, 1.3),
      e.col(13120030).mat(0.5, 0.4, 0, 0));
    let i = Math.sin(r),
      a = -Math.cos(r);
    e.rod(
      fA(t),
      hA.steel + 23,
      pA(n),
      fA(t) + i * 15,
      hA.steel + 23 + 33,
      pA(n) + a * 15,
      0.9,
      3,
    );
  }
  Kk(e, fA(mA.x0 + 2), hA.steel + 6, pA(mA.z0 + 2), 0.7);
}
var _ve = {
    id: `beacon-tower-site`,
    site: (e) => ({
      x: dA.x,
      z: dA.z,
      gy: e.groundHeight(dA.x, dA.z),
      facing: 0,
    }),
    name: {
      ja: `ビーコンタワー（建設中）`,
      zh: `燈塔大樓（興建中）`,
      en: `Beacon Tower (under construction)`,
    },
    near: 260,
    build: hve,
    far: gve,
    bounds: () => [3, -159, 25, -125],
    farBoxes: (e, t) => [
      {
        x0: mA.x0,
        x1: mA.x1,
        z0: mA.z0,
        z1: mA.z1,
        y0: t.gy,
        y1: t.gy + hA.cw,
        rgb: [0.42, 0.44, 0.46],
      },
      {
        x0: mA.x0,
        x1: mA.x1,
        z0: mA.z0,
        z1: mA.z1,
        y0: t.gy + hA.cw,
        y1: t.gy + hA.steel,
        rgb: [0.18, 0.4, 0.55],
      },
    ],
    anchors: [
      {
        key: `beacon-tower-site-gate`,
        lx: fA(26.2),
        lz: pA(-133.8),
        turn: -Math.PI / 2,
        name: { zh: `燈塔大樓 工地大門`, en: `Beacon Tower site gate` },
      },
    ],
    blip: !1,
  },
  _A = Jp.upFarX + 12 - Jp.upWestX,
  vA = Jp.upFarX - Jp.upWestX,
  yA = -2,
  bA = 0.03,
  xA = -0.55;
function SA(e) {
  return (t) => {
    let n = t.roads.find((t) => t.id === e);
    return { x: n.to, z: n.at, gy: t.groundHeight(n.to - 2, n.at), facing: 0 };
  };
}
var CA = (e, t) => {
  let n = e.roads.find((e) => e.id === t);
  return { w: bp(n, yv), c: n.lanesPerDir * yv + n.median / 2 };
};
function wA(e, t, n, r, i) {
  (e.col(4934736).mat(0.92),
    e.box(0, xA, -r, _A, bA, r, t.c(`white`), 0, 0),
    e.col(10263186).mat(0.88));
  for (let i of [-1, 1])
    e.box(
      0,
      xA,
      i < 0 ? -n : r,
      _A,
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
        _A,
        0.48,
        Math.max(a, o),
        t.c(`granite`),
        2,
        2,
      ),
        e.rod(0, 1.18, r * (n - 0.18), _A, 1.18, r * (n - 0.18), 0.06));
      for (let t = 0; t <= _A; t += e.coarse ? 6 : 2)
        e.rod(t, 0.48, r * (n - 0.18), t, 1.18, r * (n - 0.18), 0.035);
    } else
      e.box(
        0,
        0.18,
        Math.min(a, o),
        _A,
        1.23,
        Math.max(a, o),
        t.c(`white`),
        0,
        0,
      );
    e.solid(0, Math.min(a, o) - 0.05, _A, Math.max(a, o) + 0.05, bA, 1.28);
  }
  for (let r = 6; r < _A - 2; r += i.lamp)
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
function TA(e, t, n, r) {
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
function EA(e, t, n) {
  e.col(12038308).mat(0.85);
  for (let r of [-1, 1]) {
    let i = r * (n + 0.1);
    (e.box(-1.6, 0, i - 0.6, -0.2, 2.6, i + 0.6, t.c(`granite`), 2, 2),
      e.solid(-1.6, i - 0.6, -0.2, i + 0.6, 0, 2.6));
  }
}
