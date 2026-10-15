// tokyo/assets/region-tokyo-55J_WESF 310 — col
// Lines 112317-112648 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* dDe(e, t) {
  let n = e.sub(-NK.x, 0, -NK.z, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  (e.push().col(11846860).mat(0.2, 0.35, 0.25, G),
    e.box(MK.x0, -2, PK.z0 - 1, MK.x1, PK.pod, MK.z1, i, 3.2 * a, 4.4),
    e.col(15263972).mat(0.6, 0.2, 0.04, 1));
  for (let t of [FK.deck, 13.4])
    e.box(MK.x0 - 0.4, t - 0.5, PK.z0 - 1.4, MK.x1 + 0.4, t, MK.z1 + 0.4);
  if (
    (e.pop(),
    e.solid(MK.x0, PK.z0 - 1, MK.x1, MK.z1, -2, PK.pod),
    yield,
    e.push().col(2501166).mat(0.3, 0.4, 0.15, G),
    e.box(
      PK.x0 + 1.5,
      PK.pod,
      PK.z0 + 1.5,
      PK.x1 - 1.5,
      PK.band,
      PK.z1 - 1.5,
      r,
      3 * a,
      3.5,
    ),
    e.pop(),
    !e.coarse)
  ) {
    let t = VV(5511);
    for (let [[n, r], [i, a], [o, s]] of IK(PK.x0, PK.z0, PK.x1, PK.z1)) {
      let c = Math.hypot(i - n, a - r),
        l = Math.round(c / 4.6);
      for (let c = 0; c <= l; c++) {
        let u = c / l,
          d = n + (i - n) * u,
          f = r + (a - r) * u;
        if (
          (e.push().col(15790316).mat(0.6, 0.2, 0, 0),
          e.box(d - 0.45, PK.pod, f - 0.45, d + 0.45, PK.band, f + 0.45),
          e.pop(),
          c < l && t.next() < 0.5)
        ) {
          let u = (c + 0.5) / l,
            d = n + (i - n) * u + o * 0.6,
            f = r + (a - r) * u + s * 0.6,
            p = PK.pod + t.range(0, 4),
            m = PK.band - t.range(0, 4);
          (e.push().col(5209402, t.range(0.85, 1.1)).mat(0.95, 0, 0, 0),
            e.box(
              d - 0.6 - Math.abs(s) * 0.4,
              p,
              f - 0.6 - Math.abs(o) * 0.4,
              d + 0.6 + Math.abs(s) * 0.4,
              m,
              f + 0.6 + Math.abs(o) * 0.4,
            ),
            e.pop());
        }
      }
    }
  }
  if (
    (e.solid(
      PK.x0 + 1.5,
      PK.z0 + 1.5,
      PK.x1 - 1.5,
      PK.z1 - 1.5,
      PK.pod,
      PK.band,
    ),
    yield,
    e
      .push()
      .col(12767448)
      .mat(0.15, 0.4, 0.12, G | 32),
    e.box(PK.x0, PK.band, PK.z0, PK.x1, PK.h, PK.z1),
    !e.coarse)
  ) {
    e.col(8360090);
    for (let t = PK.band + 4.1; t < PK.h - 1; t += 4.1)
      for (let [[n, r], [i, a], [o, s]] of IK(PK.x0, PK.z0, PK.x1, PK.z1))
        e.panel(
          n + o * 0.05,
          r + s * 0.05,
          i + o * 0.05,
          a + s * 0.05,
          t - 0.12,
          t + 0.12,
        );
  }
  e.pop();
  let o = VV(5523);
  e.push().col(15921902).mat(0.55, 0.25, 0.03, 1);
  for (let [[t, n], [r, i], [a, s]] of IK(PK.x0, PK.z0, PK.x1, PK.z1)) {
    let c = Math.hypot(r - t, i - n),
      l = (r - t) / c,
      u = (i - n) / c,
      d = Math.round(c / (e.coarse ? 6 : 3)),
      f = c / d;
    for (let r = 0; r < d; r++) {
      let i = PK.band + o.range(0, 8);
      for (; i < PK.h - 2;) {
        let c = Math.min(
            PK.h - i,
            o.range(e.coarse ? 18 : 9, e.coarse ? 36 : 22),
          ),
          d = f * (e.coarse ? 0.3 : o.range(0.28, 0.42)),
          p = (r + 0.5) * f + o.range(-0.15, 0.15) * f,
          m = t + l * (p - d / 2) + a * 0.12,
          h = n + u * (p - d / 2) + s * 0.12,
          g = t + l * (p + d / 2) + a * 0.12,
          _ = n + u * (p + d / 2) + s * 0.12;
        (e.panel(m, h, g, _, i, i + c), (i += c + o.range(1.5, 4.5)));
      }
    }
  }
  for (let [[t, n], [r, i], [a, o]] of IK(PK.x0, PK.z0, PK.x1, PK.z1))
    if (
      (e.panel(
        t + a * 0.15,
        n + o * 0.15,
        r + a * 0.15,
        i + o * 0.15,
        PK.h,
        PK.h + 1.2,
      ),
      e.panel(
        t + a * 0.15,
        n + o * 0.15,
        r + a * 0.15,
        i + o * 0.15,
        PK.crown - 1,
        PK.crown,
      ),
      !e.coarse)
    ) {
      let s = Math.hypot(r - t, i - n),
        c = Math.round(s / 2.2);
      for (let l = 0; l <= c; l++) {
        let u = l / c,
          d = t + (r - t) * u + a * 0.15,
          f = n + (i - n) * u + o * 0.15,
          p = (r - t) / s,
          m = (i - n) / s;
        e.panel(
          d - p * 0.35,
          f - m * 0.35,
          d + p * 0.35,
          f + m * 0.35,
          PK.h + 1.2,
          PK.crown - 1,
        );
      }
    }
  (e.col(10132636).mat(0.85, 0, 0, 0),
    e.flat(PK.x0, PK.z0, PK.x1, PK.z1, PK.h + 0.6),
    e.col(13159115),
    e.box(
      PK.x0 + 6,
      PK.h + 0.6,
      PK.z0 + 10,
      PK.x1 - 6,
      PK.crown - 1.5,
      PK.z1 - 10,
    ),
    e.pop(),
    e.solid(PK.x0, PK.z0, PK.x1, PK.z1, PK.band, PK.crown),
    yield,
    e.push().col(12104358).mat(0.85, 0, 0, 0),
    e.flat(
      MK.x0,
      FK.z0,
      MK.x1,
      FK.z1,
      0.08,
      e.coarse ? e.white : t.c(`paving`),
      3,
      3,
    ));
  let s = NK.x - 5,
    c = NK.x + 5,
    l = e.coarse ? 4 : 14;
  for (let t = 0; t < l; t++) {
    let n = FK.z1 - 1 - (t * (FK.z1 - FK.z0 - 1.5)) / l,
      r = FK.deck - (t * FK.deck) / l;
    (e.col(12104358).box(s, 0, n - (FK.z1 - FK.z0 - 1.5) / l, c, r, n),
      e.coarse ||
        e
          .col(16767400)
          .mat(0.5, 0, 0.7, 1)
          .panel(
            c,
            n - (FK.z1 - FK.z0 - 1.5) / l - 0.01,
            s,
            n - (FK.z1 - FK.z0 - 1.5) / l - 0.01,
            r - 0.15,
            r,
          )
          .mat(0.85, 0, 0, 0));
  }
  (e.pop(),
    e.floor(s, FK.z0, c, FK.z1 - 1, 0, FK.deck),
    e.coarse ||
      (e.push().col(2853466).mat(0.5, 0, 0.6, 1),
      UB(e, `SHIBUYA STREAMLINE`, NK.x, FK.deck + 2.2, PK.z0 - 1.45, LB, 1.1, {
        px: 18,
        align: 0.5,
        maxW: 18,
        raw: !0,
      }),
      e.pop()),
    e.leave(n));
}
function fDe(e) {
  let t = e.sub(-NK.x, 0, -NK.z, 0);
  (e.push().mat(0.6, 0.3, 0, 0),
    e.col(9413549).box(MK.x0, 0, PK.z0, MK.x1, PK.pod, MK.z1),
    e
      .col(3159354)
      .box(PK.x0 + 1.5, PK.pod, PK.z0 + 1.5, PK.x1 - 1.5, PK.band, PK.z1 - 1.5),
    e.col(13949918).box(PK.x0, PK.band, PK.z0, PK.x1, PK.crown, PK.z1),
    e.pop(),
    e.leave(t));
}
var pDe = {
  id: `shibuya-streamline`,
  site: uDe,
  name: {
    ja: `渋谷ストリームライン`,
    zh: `澀谷 Streamline`,
    en: `Shibuya Streamline`,
  },
  near: 280,
  build: dDe,
  far: fDe,
  bounds: () => [MK.x0 - 1, MK.z0 - 2, MK.x1 + 1, MK.z1 + 1],
  farBoxes: () => [
    {
      x0: PK.x0,
      x1: PK.x1,
      z0: PK.z0,
      z1: PK.z1,
      y0: 0.15,
      y1: PK.crown,
      rgb: [0.74, 0.79, 0.81],
      lit: !0,
    },
    {
      x0: MK.x0,
      x1: MK.x1,
      z0: PK.z0,
      z1: MK.z1,
      y0: 0.15,
      y1: PK.pod,
      rgb: [0.5, 0.58, 0.62],
      lit: !0,
    },
  ],
};
r.add({ 東京歌劇城: `東京オペラタウン` });
var LK = { x: -2468, z: 590 },
  mDe = (27 * Math.PI) / 180,
  RK = { slot: 215, plate: 223, core: 234, pod: 12 },
  zK = 20,
  BK = 14,
  hDe = (e) => ({
    x: LK.x,
    z: LK.z,
    gy: e.groundHeight(-2438, LK.z),
    facing: mDe,
  });
function* gDe(e, t) {
  let n = t.c(`office`),
    r = t.c(`glass`),
    i = e.coarse ? 5 : 2.5;
  (e.push().col(14275784).mat(0.8, 0, 0.05, 1),
    e.box(-34, -2, -30, 34, RK.pod, 30, t.c(`granite`), 3, 3),
    e.col(5596268).mat(0.25, 0.3, 0.2, G),
    e.box(-34.2, 2, -30.2, 34.2, 6, 30.2, r, 3 * i, 4),
    e.pop(),
    yield,
    e
      .push()
      .col(14999766)
      .mat(0.75, 0.05, 0.1, G | 32),
    e.box(-14, RK.pod, -20, BK, RK.plate, -14, n, 3.2 * i, 3.9),
    e.box(-14, RK.pod, BK, BK, RK.plate, zK, n, 3.2 * i, 3.9),
    e.box(-20, RK.pod, -14, -14, RK.plate, BK, n, 3.2 * i, 3.9),
    e.box(BK, RK.pod, -14, zK, RK.plate, BK, n, 3.2 * i, 3.9),
    e.pop(),
    e.push().col(2767432).mat(0.15, 0.5, 0.2, G));
  for (let t of [-1, 1])
    for (let n of [-1, 1]) {
      let a = t < 0 ? -19 : BK,
        o = t < 0 ? -14 : 19,
        s = n < 0 ? -19 : BK,
        c = n < 0 ? -14 : 19;
      e.box(a, RK.pod, s, o, RK.slot, c, r, 2 * i, 4);
    }
  if (
    (e.col(13617856).mat(0.8, 0, 0.05, 1),
    e.box(-14, RK.plate - 4, -14, BK, RK.plate - 3, BK),
    e.box(-8, RK.plate - 3, -8, 8, RK.core, 8),
    e.pop(),
    !e.coarse)
  ) {
    e.push().col(2042419).mat(0.3, 0.4, 0.3, G);
    for (let t of [-1, 0, 1]) {
      let n = t * 5;
      (e.panel(n + 1.4, -20.05, n - 1.4, -20.05, 199, 216),
        e.panel(n - 1.4, 20.05, n + 1.4, 20.05, 199, 216),
        e.panel(-20.05, n - 1.4, -20.05, n + 1.4, 199, 216),
        e.panel(20.05, n + 1.4, 20.05, n - 1.4, 199, 216));
    }
    e.col(16724e3).mat(0.5, 0, 1, 1);
    for (let [t, n] of [
      [-7, -7],
      [7, 7],
    ])
      e.box(t - 0.3, RK.core, n - 0.3, t + 0.3, RK.core + 0.6, n + 0.3);
    e.pop();
  }
  e.solid(-20, -20, zK, zK, 0, RK.core);
}
function _De(e) {
  (e.push().mat(0.8, 0, 0.05, 0),
    e.col(14999766).box(-20, 0, -20, zK, RK.plate, zK),
    e.col(13617856).box(-8, RK.plate, -8, 8, RK.core, 8),
    e.col(14275784).box(-34, 0, -30, 34, RK.pod, 30),
    e.pop());
}
