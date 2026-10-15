// tokyo/assets/region-tokyo-55J_WESF 304 — col
// Lines 110625-110958 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var FEe = {
    id: `harajuku-station`,
    site: (e) => ({ x: ps.x, z: ps.z, gy: 0, facing: 0 }),
    name: { ja: `原宿駅`, zh: `原宿站`, en: `Harajuku Station` },
    near: 230,
    *build(e, t) {
      let n = CG(t.plan, ps.x, ps.z);
      n &&
        (yield* OEe(e, t, n),
        yield,
        yield* kEe(e, t, n),
        yield,
        yield* AEe(e, t, n),
        yield,
        yield* MEe(e, t, n),
        yield* NEe(e, t, n),
        PEe(e, t, n));
    },
    far(e, t) {
      let n = CG(t.plan, ps.x, ps.z);
      if (!n) return;
      let r = (t, r, i, a, o, s, c) => {
        let l = (t + r) / 2,
          u = OG(e, n, l);
        (e
          .col(c)
          .mat(0.7)
          .box(i, o, t - l, a, s, r - l),
          e.leave(u));
      };
      (r(sG.s0, sG.s1, sG.e0, sG.e1, nG, nG + 10.4, 8227472),
        r(cG.s0, cG.s1, cG.e0, cG.e1, IG(n, cG.s1), IG(n, cG.s1) + 9, 14208957),
        r(
          lG.s0,
          lG.s1,
          lG.e0,
          lG.e1,
          IG(n, lG.s1),
          IG(n, lG.s1) + 16,
          9411220,
        ));
    },
    bounds: () => [ps.x - 40, ps.z - 80, ps.x + 50, ps.z + 105],
    farBoxes: () => [],
    anchors: [
      {
        key: `harajuku-omotesando-exit`,
        lx: 30,
        lz: 56,
        turn: -Math.PI / 2,
        name: { zh: `原宿站 表參道口`, en: `Harajuku Station Omotesando Exit` },
      },
    ],
    blip: !0,
  },
  zG = vs(990),
  BG = (e) => {
    let t = vs(e),
      n = 1 / ys(e).tz;
    return [t - py * n, t + 16 * n];
  };
function VG(e, t, n, r, i) {
  let a = nG;
  if (
    (e.push().col(vG).mat(0.9),
    e.box(
      n - 0.85,
      a,
      r - 0.85,
      n + 0.85,
      a + 0.5,
      r + 0.85,
      e.coarse ? e.white : t.c(`granite`),
    ),
    e.box(
      n - 0.7,
      a + 0.5,
      r - 0.7,
      n + 0.7,
      a + 3.1,
      r + 0.7,
      e.coarse ? e.white : t.c(`granite`),
    ),
    e.box(n - 0.85, a + 3.1, r - 0.85, n + 0.85, a + 3.4, r + 0.85),
    e.box(n - 0.5, a + 3.4, r - 0.5, n + 0.5, a + 3.6, r + 0.5),
    e.col(16773320).mat(0.4, 0, 0.85, 1),
    e.box(n - 0.4, a + 3.6, r - 0.4, n + 0.4, a + 4.4, r + 0.4),
    e.col(4012597).mat(0.6, 0.5),
    !e.coarse)
  )
    for (let t of [-1, 1])
      for (let i of [-1, 1])
        e.box(
          n + t * 0.4 - 0.06,
          a + 3.6,
          r + i * 0.4 - 0.06,
          n + t * 0.4 + 0.06,
          a + 4.4,
          r + i * 0.4 + 0.06,
        );
  (e.col(6129010).mat(0.5, 0.5),
    e.lathe(
      n,
      r,
      [0.85, a + 4.4, 0.8, a + 4.55, 0.3, a + 5, 0.05, a + 5.15],
      4,
      Math.PI / 4,
    ),
    e.lathe(n, r, [0.12, a + 5.1, 0.14, a + 5.25, 0.01, a + 5.45], 6),
    e.pop(),
    e.push().col(16777215).mat(0.9));
  let o = i > r ? r + 0.72 : r - 0.72;
  (i > r
    ? e.panel(n - 0.55, o, n + 0.55, o, a + 1, a + 1 + 1.1 / 3, FG(t, `bridge`))
    : e.panel(
        n + 0.55,
        o,
        n - 0.55,
        o,
        a + 1,
        a + 1 + 1.1 / 3,
        FG(t, `bridge`),
      ),
    e.pop(),
    e.solid(n - 0.85, r - 0.85, n + 0.85, r + 0.85, a, a + 3.4));
}
function HG(e, t, n, r, i) {
  let a = nG,
    o = 1.15,
    s = e.coarse ? e.white : t.c(`granite`);
  if (
    (e.push().col(vG).mat(0.9),
    e.box(n, a, i - 0.2, r, a + o - 0.15, i + 0.2, s),
    e.box(n - 0.05, a + o - 0.15, i - 0.27, r + 0.05, a + o, i + 0.27),
    !e.coarse)
  ) {
    let t = Math.max(1, Math.round((r - n) / 2.4));
    for (let s = 0; s <= t; s++) {
      let c = n + ((r - n) * s) / t;
      e.box(c - 0.28, a, i - 0.3, c + 0.28, a + o + 0.15, i + 0.3);
    }
  }
  (e.pop(), e.solid(n, i - 0.3, r, i + 0.3, a, a + o));
}
function* IEe(e, t) {
  let n = zG,
    r = (e, t) => [e - n, t - 990],
    [i, a] = BG(my),
    [o, s] = BG(hy);
  e.push().col(8815484).mat(0.95);
  let c = (e, t, r) => [e - n, r, t - 990];
  (AG(
    e,
    [
      c(i, my + 0.3, aG),
      c(a, my + 0.3, aG),
      c(s, hy - 0.3, aG),
      c(o, hy - 0.3, aG),
    ],
    !1,
  ),
    e.pop(),
    e.push().col(vG).mat(0.9));
  let l = e.coarse ? e.white : t.c(`granite`);
  (e.wall(
    r(a, my)[0],
    r(a, my)[1],
    r(i, my)[0],
    r(i, my)[1],
    aG,
    nG,
    l,
    2.4,
    1.2,
  ),
    e.wall(
      r(o, hy)[0],
      r(o, hy)[1],
      r(s, hy)[0],
      r(s, hy)[1],
      aG,
      nG,
      l,
      2.4,
      1.2,
    ),
    e.col(10196620).mat(0.9),
    e.panel(
      r(a, my - 0.05)[0],
      r(a, my - 0.05)[1],
      r(i, my - 0.05)[0],
      r(i, my - 0.05)[1],
      aG,
      aG + 0.35,
    ),
    e.panel(
      r(o, hy + 0.05)[0],
      r(o, hy + 0.05)[1],
      r(s, hy + 0.05)[0],
      r(s, hy + 0.05)[1],
      aG,
      aG + 0.35,
    ),
    e.pop(),
    yield);
  let u = my + 0.35,
    d = hy - 0.35,
    [f, p] = [i - 5, a + 3],
    [m, h] = [o - 5, s + 3];
  if (
    (HG(e, t, r(f + 1, u)[0], r(p - 1, u)[0], r(f, u)[1]),
    HG(e, t, r(m + 1, d)[0], r(h - 1, d)[0], r(m, d)[1]),
    VG(e, t, r(f, u)[0], r(f, u)[1], 0),
    VG(e, t, r(p, u)[0], r(p, u)[1], 0),
    VG(e, t, r(m, d)[0], r(m, d)[1], 0),
    VG(e, t, r(h, d)[0], r(h, d)[1], 0),
    yield,
    e.push().col(4540234).mat(0.95),
    e.flat(
      r(-1915, 0)[0],
      r(0, my)[1],
      r(-1890, 0)[0],
      r(0, hy)[1],
      nG + 0.03,
      e.white,
    ),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(5591628).mat(0.85);
    for (let t = -1913.5; t < i - 2; t += 2.2) {
      if (t > -1913.5 && t < -1891.5) continue;
      let [n, i] = r(t, hy - 1.2);
      (e.lathe(
        n,
        i,
        [0.42, nG - 0.15, 0.4, nG + 0.1, 0.06, nG + 0.85, 0.01, nG + 0.9],
        4,
        Math.PI / 4,
      ),
        e.pole(n, i, 0.35, nG - 0.15, nG + 0.9, `bollard`));
    }
    e.pop();
  }
  {
    let t = -1912,
      n = -1893,
      i = hy,
      a = 1030,
      o = nG - 0.15,
      s = 0.15,
      c = e.coarse ? 6 : 30;
    e.push().col(12170667).mat(0.9);
    for (let l = 0; l < c; l++) {
      let u = i + ((a - i) * l) / c,
        d = i + ((a - i) * (l + 1)) / c,
        f = o - ((o - s) * (l + 1)) / c;
      (e.flat(r(t, 0)[0], r(0, u)[1], r(n, 0)[0], r(0, d)[1], f),
        e.panel(
          r(t, 0)[0],
          r(0, u)[1],
          r(n, 0)[0],
          r(0, u)[1],
          f,
          f + (o - s) / c,
        ));
    }
    e.col(10262670).mat(0.9);
    for (let t of [-1912.4, n]) {
      let [n, s] = r(t, i),
        [c, l] = r(t + 0.4, a);
      (kG(
        e,
        [n, s],
        [n, l],
        o - 1.2,
        o + 0.9,
        -0.44999999999999996,
        1.05,
        -1,
        0,
      ),
        kG(
          e,
          [c, s],
          [c, l],
          o - 1.2,
          o + 0.9,
          -0.44999999999999996,
          1.05,
          1,
          0,
        ),
        AG(
          e,
          [
            [n, o + 0.9, s],
            [c, o + 0.9, s],
            [c, 1.05, l],
            [n, 1.05, l],
          ],
          !0,
        ));
    }
    (e.pop(), e.floor(r(t, 0)[0], r(0, i)[1], r(n, 0)[0], r(0, a)[1], o, s));
    for (let t of [-1912.4, n])
      for (let n = 0; n < 4; n++) {
        let c = i + ((a - i) * n) / 4,
          l = i + ((a - i) * (n + 1)) / 4;
        e.solid(
          r(t, 0)[0],
          r(0, c)[1],
          r(t + 0.4, 0)[0],
          r(0, l)[1],
          -0.44999999999999996,
          o + 0.9 - ((o - s) * n) / 4,
        );
      }
  }
}
var LEe = [
  FEe,
  {
    id: `jingubashi`,
    site: () => ({ x: zG, z: 990, gy: 0, facing: 0 }),
    name: { ja: `神宮橋`, zh: `神宮橋`, en: `Jingubashi` },
    near: 200,
    build: IEe,
    far() {},
    farBoxes: () => [],
    bounds: () => [-1920, my - 5, zG + 30, 1032],
  },
];
r.add({ 東京體育館: `東京体育館` });
