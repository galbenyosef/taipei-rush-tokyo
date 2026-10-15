// tokyo/assets/region-tokyo-55J_WESF 306 — col
// Lines 111285-111564 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* UEe(e, t) {
  let n = YG;
  (e.push().col(ZG).mat(0.85, 0, 0.06, 1),
    e.box(n.x - 8, 0, n.z - 8, n.x + 8, 1.2, n.z + 8),
    e.col(QG).mat(0.25, 0.3, 0.22, G),
    e.box(
      n.x - 8 + 0.3,
      1.2,
      n.z - 8 + 0.3,
      n.x + 8 - 0.3,
      n.wall,
      n.z + 8 - 0.3,
      t.c(`glass`),
      3,
      1.7,
    ),
    e.pop());
  let r = e.coarse ? 2 : 4,
    i = n.wall,
    a = 8.4,
    o = 6.4 / r;
  for (let t = 0; t < r; t++) {
    let t = a - o;
    (e.push().col(zEe).mat(0.5, 0.2, 0, 0),
      e.box(n.x - a, i, n.z - a, n.x + a, i + 0.35, n.z + a),
      (i += 0.35),
      e.col(9278616).mat(0.6, 0.4, 0, 0));
    let r = i + 0.95;
    for (let [o, s, c, l] of [
      [-1, 1, 1, 1],
      [1, 1, 1, -1],
      [1, -1, -1, -1],
      [-1, -1, -1, 1],
    ])
      e.quad(
        n.x + o * a,
        i,
        n.z + s * a,
        n.x + c * a,
        i,
        n.z + l * a,
        n.x + c * t,
        r,
        n.z + l * t,
        n.x + o * t,
        r,
        n.z + s * t,
      );
    (e.pop(), (i = r), (a = t));
  }
  (e.push().col(7305856).mat(0.6, 0.3, 0, 0),
    e.flat(n.x - a, n.z - a, n.x + a, n.z + a, i),
    e.col($G).mat(0.2, 0.3, 0.4, 1));
  let s = Math.min(a, 1.7),
    c = i + 2;
  (e.triFace(n.x - s, i, n.z + s, n.x + s, i, n.z + s, n.x, c, n.z),
    e.triFace(n.x + s, i, n.z + s, n.x + s, i, n.z - s, n.x, c, n.z),
    e.triFace(n.x + s, i, n.z - s, n.x - s, i, n.z - s, n.x, c, n.z),
    e.triFace(n.x - s, i, n.z - s, n.x - s, i, n.z + s, n.x, c, n.z),
    e.pop(),
    e.solid(n.x - 8, n.z - 8, n.x + 8, n.z + 8, 0, n.h));
}
function* WEe(e, t) {
  let n = e.sub(-WG.x, 0, -WG.z, 0),
    r = t.season ?? `green`,
    i = t.c(`paving`);
  e.push().col(13815234).mat(0.85, 0, 0, 0);
  for (let t of [UG.arena, UG.south])
    e.flat(
      t.x0,
      t.z0,
      t.x1,
      t.z1,
      RV.PAVE,
      e.coarse ? e.white : i,
      e.coarse ? 0 : 3,
      e.coarse ? 0 : 3,
    );
  if (!e.coarse) {
    e.col(9407622);
    for (let t = UG.arena.z0 + 2.5; t < GG.z - GG.rz * 0.7; t += 3.2)
      e.flat(UG.arena.x0 + 1, t, UG.arena.x1 - 1, t + 0.35, RV.MARK);
    for (let t = UG.south.z0 + 3; t < UG.south.z1 - 1; t += 3.2)
      e.flat(JG.x1 + 0.6, t, UG.south.x1 - 1, t + 0.35, RV.MARK);
  }
  (e.pop(),
    yield,
    yield* VEe(e, t),
    yield,
    yield* HEe(e, t),
    yield,
    yield* UEe(e, t));
  let a = VV(9411),
    o = [
      [-1689.5, 550.5],
      [-1655.5, 550.5],
      [-1655, 648],
      [-1655, 657],
      [-1655, 666],
      [-1665, 666],
      [-1670.5, 650],
    ];
  for (let [t, n] of e.coarse ? o.slice(0, 3) : o)
    WV(e, `keyaki`, t, n, a.range(8, 11), Math.floor(a.next() * 1e6), r);
  e.leave(n);
}
function GEe(e) {
  let t = e.sub(-WG.x, 0, -WG.z, 0);
  (e.push().mat(0.6, 0.4, 0, 0),
    iK(e, 12, 0.86, 0, GG.eave, () => [QG, 1]),
    oK(e, 4, 2, !1),
    e.col(XG).box(JG.x0, 0, JG.z0, JG.x1, JG.crown - 2, JG.z1),
    e.col(9278616).box(YG.x - 8, 0, YG.z - 8, YG.x + 8, YG.h - 2, YG.z + 8),
    e.pop(),
    e.leave(t));
}
var KEe = {
  id: `tokyo-gym`,
  site: BEe,
  name: {
    ja: `東京体育館`,
    zh: `東京體育館`,
    en: `Tokyo Metropolitan Gymnasium`,
  },
  near: 220,
  build: WEe,
  far: GEe,
  bounds: () => [UG.arena.x0, UG.arena.z0, UG.south.x1, UG.south.z1],
  farBoxes: () => [
    {
      x0: GG.x - GG.rx * 0.8,
      x1: GG.x + GG.rx * 0.8,
      z0: GG.z - GG.rz * 0.8,
      z1: GG.z + GG.rz * 0.8,
      y0: 0.15,
      y1: GG.top - 2,
      rgb: [0.68, 0.7, 0.71],
    },
    {
      x0: JG.x0,
      x1: JG.x1,
      z0: JG.z0,
      z1: JG.z1,
      y0: 0.15,
      y1: JG.crown - 2,
      rgb: [0.7, 0.71, 0.71],
    },
    {
      x0: YG.x - 8,
      x1: YG.x + 8,
      z0: YG.z - 8,
      z1: YG.z + 8,
      y0: 0.15,
      y1: YG.h - 2,
      rgb: [0.5, 0.55, 0.6],
    },
  ],
  anchors: [
    {
      key: `tokyo-gym`,
      lx: GG.x - WG.x,
      lz: UG.arena.z0 - 3 - WG.z,
      turn: Math.PI,
      name: { zh: `東京體育館`, en: `Tokyo Metropolitan Gymnasium` },
    },
  ],
  blip: !0,
};
r.add({ "WISH 原宿": `ウィッシュ原宿` });
var sK = { x0: -1815.8, z0: 895.3, x1: -1779, z1: 963 },
  X = {
    x0: -1811.6,
    x1: -1782.5,
    z0: 913,
    z1: 960.5,
    y0: 12.2,
    y1: 39,
    fl: 3.83,
    top: 31.5,
    zTop: 921,
  },
  cK = { z1: 911, h: 10.2 },
  lK = { z0: 931, z1: 938, d: 5 },
  uK = 12089925,
  qEe = 9394738,
  JEe = 14276818,
  dK = 4871259,
  YEe = 15132384,
  fK = 5933628,
  XEe = (e) => ({
    x: sK.x1,
    z: sK.z0,
    gy: e.groundHeight(sK.x1, sK.z0),
    facing: 0,
  });
function pK(e, t, n, r, i, a, o, s, c, l) {
  let u = Math.hypot(r - t, i - n),
    d = (r - t) / u,
    f = (i - n) / u,
    p = Math.max(1, Math.round(u / l)),
    m = u / p,
    h = 1.3,
    g = a[0] * h,
    _ = a[1] * h,
    v = Math.round((s - o) / c);
  for (let s = 0; s < v; s++) {
    let l = o + s * c;
    (e.col(JEe).mat(0.8, 0, 0.04, 1),
      e.quad(
        t + g,
        l,
        n + _,
        r + g,
        l,
        i + _,
        r + g,
        l + 0.35,
        i + _,
        t + g,
        l + 0.35,
        n + _,
      ),
      e.quad(
        t,
        l + 0.35,
        n,
        t + g,
        l + 0.35,
        n + _,
        r + g,
        l + 0.35,
        i + _,
        r,
        l + 0.35,
        i,
      ),
      e.col(15914928).mat(0.7, 0, 0.35, 1),
      e.quad(t, l, n, r, l, i, r + g, l, i + _, t + g, l, n + _),
      e
        .col(s % 2 ? uK : qEe, 0.95 + (0.1 * ((s * 7) % 3)) / 2)
        .mat(0.75, 0, 0.1, 1));
    let v = s % 2 ? m / 2 : 0;
    for (let r = 0; r <= p; r++) {
      let i = r * m + v;
      if (i < 0.2 || i > u - 0.2) continue;
      let o = t + d * i + g * 0.5,
        s = n + f * i + _ * 0.5,
        p = 0.16,
        y = h / 2,
        b = o - d * p,
        x = s - f * p,
        S = o + d * p,
        C = s + f * p;
      (e.panel(
        b + a[0] * y,
        x + a[1] * y,
        S + a[0] * y,
        C + a[1] * y,
        l + 0.35,
        l + c,
      ),
        e.panel(
          b - a[0] * y,
          x - a[1] * y,
          b + a[0] * y,
          x + a[1] * y,
          l + 0.35,
          l + c,
        ),
        e.panel(
          S + a[0] * y,
          C + a[1] * y,
          S - a[0] * y,
          C - a[1] * y,
          l + 0.35,
          l + c,
        ));
    }
  }
}
