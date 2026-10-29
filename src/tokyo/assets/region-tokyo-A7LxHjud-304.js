// tokyo/assets/region-tokyo-A7LxHjud 304 — col
// Lines 110716-111049 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var YEe = {
    id: `harajuku-station`,
    site: (e) => ({ x: ps.x, z: ps.z, gy: 0, facing: 0 }),
    name: { ja: `原宿駅`, zh: `原宿站`, en: `Harajuku Station` },
    near: 230,
    *build(e, t) {
      let n = wG(t.plan, ps.x, ps.z);
      n &&
        (yield* HEe(e, t, n),
        yield,
        yield* UEe(e, t, n),
        yield,
        yield* WEe(e, t, n),
        yield,
        yield* KEe(e, t, n),
        yield* qEe(e, t, n),
        JEe(e, t, n));
    },
    far(e, t) {
      let n = wG(t.plan, ps.x, ps.z);
      if (!n) return;
      let r = (t, r, i, a, o, s, c) => {
        let l = (t + r) / 2,
          u = kG(e, n, l);
        (e
          .col(c)
          .mat(0.7)
          .box(i, o, t - l, a, s, r - l),
          e.leave(u));
      };
      (r(cG.s0, cG.s1, cG.e0, cG.e1, rG, rG + 10.4, 8227472),
        r(lG.s0, lG.s1, lG.e0, lG.e1, LG(n, lG.s1), LG(n, lG.s1) + 9, 14208957),
        r(
          uG.s0,
          uG.s1,
          uG.e0,
          uG.e1,
          LG(n, uG.s1),
          LG(n, uG.s1) + 16,
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
  BG = vs(990),
  VG = (e) => {
    let t = vs(e),
      n = 1 / ys(e).tz;
    return [t - gy * n, t + 16 * n];
  };
function HG(e, t, n, r, i) {
  let a = rG;
  if (
    (e.push().col(yG).mat(0.9),
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
    ? e.panel(n - 0.55, o, n + 0.55, o, a + 1, a + 1 + 1.1 / 3, IG(t, `bridge`))
    : e.panel(
        n + 0.55,
        o,
        n - 0.55,
        o,
        a + 1,
        a + 1 + 1.1 / 3,
        IG(t, `bridge`),
      ),
    e.pop(),
    e.solid(n - 0.85, r - 0.85, n + 0.85, r + 0.85, a, a + 3.4));
}
function UG(e, t, n, r, i) {
  let a = rG,
    o = 1.15,
    s = e.coarse ? e.white : t.c(`granite`);
  if (
    (e.push().col(yG).mat(0.9),
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
function* XEe(e, t) {
  let n = BG,
    r = (e, t) => [e - n, t - 990],
    [i, a] = VG(_y),
    [o, s] = VG(vy);
  e.push().col(8815484).mat(0.95);
  let c = (e, t, r) => [e - n, r, t - 990];
  (jG(
    e,
    [
      c(i, _y + 0.3, oG),
      c(a, _y + 0.3, oG),
      c(s, vy - 0.3, oG),
      c(o, vy - 0.3, oG),
    ],
    !1,
  ),
    e.pop(),
    e.push().col(yG).mat(0.9));
  let l = e.coarse ? e.white : t.c(`granite`);
  (e.wall(
    r(a, _y)[0],
    r(a, _y)[1],
    r(i, _y)[0],
    r(i, _y)[1],
    oG,
    rG,
    l,
    2.4,
    1.2,
  ),
    e.wall(
      r(o, vy)[0],
      r(o, vy)[1],
      r(s, vy)[0],
      r(s, vy)[1],
      oG,
      rG,
      l,
      2.4,
      1.2,
    ),
    e.col(10196620).mat(0.9),
    e.panel(
      r(a, _y - 0.05)[0],
      r(a, _y - 0.05)[1],
      r(i, _y - 0.05)[0],
      r(i, _y - 0.05)[1],
      oG,
      oG + 0.35,
    ),
    e.panel(
      r(o, vy + 0.05)[0],
      r(o, vy + 0.05)[1],
      r(s, vy + 0.05)[0],
      r(s, vy + 0.05)[1],
      oG,
      oG + 0.35,
    ),
    e.pop(),
    yield);
  let u = _y + 0.35,
    d = vy - 0.35,
    [f, p] = [i - 5, a + 3],
    [m, h] = [o - 5, s + 3];
  if (
    (UG(e, t, r(f + 1, u)[0], r(p - 1, u)[0], r(f, u)[1]),
    UG(e, t, r(m + 1, d)[0], r(h - 1, d)[0], r(m, d)[1]),
    HG(e, t, r(f, u)[0], r(f, u)[1], 0),
    HG(e, t, r(p, u)[0], r(p, u)[1], 0),
    HG(e, t, r(m, d)[0], r(m, d)[1], 0),
    HG(e, t, r(h, d)[0], r(h, d)[1], 0),
    yield,
    e.push().col(4540234).mat(0.95),
    e.flat(
      r(-1915, 0)[0],
      r(0, _y)[1],
      r(-1890, 0)[0],
      r(0, vy)[1],
      rG + 0.03,
      e.white,
    ),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(5591628).mat(0.85);
    for (let t = -1913.5; t < i - 2; t += 2.2) {
      if (t > -1913.5 && t < -1891.5) continue;
      let [n, i] = r(t, vy - 1.2);
      (e.lathe(
        n,
        i,
        [0.42, rG - 0.15, 0.4, rG + 0.1, 0.06, rG + 0.85, 0.01, rG + 0.9],
        4,
        Math.PI / 4,
      ),
        e.pole(n, i, 0.35, rG - 0.15, rG + 0.9, `bollard`));
    }
    e.pop();
  }
  {
    let t = -1912,
      n = -1893,
      i = vy,
      a = 1030,
      o = rG - 0.15,
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
      (AG(
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
        AG(
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
        jG(
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
var ZEe = [
  YEe,
  {
    id: `jingubashi`,
    site: () => ({ x: BG, z: 990, gy: 0, facing: 0 }),
    name: { ja: `神宮橋`, zh: `神宮橋`, en: `Jingubashi` },
    near: 200,
    build: XEe,
    far() {},
    farBoxes: () => [],
    bounds: () => [-1920, _y - 5, BG + 30, 1032],
  },
];
r.add({ 東京體育館: `東京体育館` });
