// tokyo/assets/region-tokyo-A7LxHjud 310 — col
// Lines 112408-112739 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* TDe(e, t) {
  let n = e.sub(-PK.x, 0, -PK.z, 0),
    r = t.c(`glass`),
    i = t.c(`office`),
    a = e.coarse ? 3 : 1;
  (e.push().col(11846860).mat(0.2, 0.35, 0.25, G),
    e.box(NK.x0, -2, FK.z0 - 1, NK.x1, FK.pod, NK.z1, i, 3.2 * a, 4.4),
    e.col(15263972).mat(0.6, 0.2, 0.04, 1));
  for (let t of [IK.deck, 13.4])
    e.box(NK.x0 - 0.4, t - 0.5, FK.z0 - 1.4, NK.x1 + 0.4, t, NK.z1 + 0.4);
  if (
    (e.pop(),
    e.solid(NK.x0, FK.z0 - 1, NK.x1, NK.z1, -2, FK.pod),
    yield,
    e.push().col(2501166).mat(0.3, 0.4, 0.15, G),
    e.box(
      FK.x0 + 1.5,
      FK.pod,
      FK.z0 + 1.5,
      FK.x1 - 1.5,
      FK.band,
      FK.z1 - 1.5,
      r,
      3 * a,
      3.5,
    ),
    e.pop(),
    !e.coarse)
  ) {
    let t = HV(5511);
    for (let [[n, r], [i, a], [o, s]] of LK(FK.x0, FK.z0, FK.x1, FK.z1)) {
      let c = Math.hypot(i - n, a - r),
        l = Math.round(c / 4.6);
      for (let c = 0; c <= l; c++) {
        let u = c / l,
          d = n + (i - n) * u,
          f = r + (a - r) * u;
        if (
          (e.push().col(15790316).mat(0.6, 0.2, 0, 0),
          e.box(d - 0.45, FK.pod, f - 0.45, d + 0.45, FK.band, f + 0.45),
          e.pop(),
          c < l && t.next() < 0.5)
        ) {
          let u = (c + 0.5) / l,
            d = n + (i - n) * u + o * 0.6,
            f = r + (a - r) * u + s * 0.6,
            p = FK.pod + t.range(0, 4),
            m = FK.band - t.range(0, 4);
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
      FK.x0 + 1.5,
      FK.z0 + 1.5,
      FK.x1 - 1.5,
      FK.z1 - 1.5,
      FK.pod,
      FK.band,
    ),
    yield,
    e
      .push()
      .col(12767448)
      .mat(0.15, 0.4, 0.12, G | 32),
    e.box(FK.x0, FK.band, FK.z0, FK.x1, FK.h, FK.z1),
    !e.coarse)
  ) {
    e.col(8360090);
    for (let t = FK.band + 4.1; t < FK.h - 1; t += 4.1)
      for (let [[n, r], [i, a], [o, s]] of LK(FK.x0, FK.z0, FK.x1, FK.z1))
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
  let o = HV(5523);
  e.push().col(15921902).mat(0.55, 0.25, 0.03, 1);
  for (let [[t, n], [r, i], [a, s]] of LK(FK.x0, FK.z0, FK.x1, FK.z1)) {
    let c = Math.hypot(r - t, i - n),
      l = (r - t) / c,
      u = (i - n) / c,
      d = Math.round(c / (e.coarse ? 6 : 3)),
      f = c / d;
    for (let r = 0; r < d; r++) {
      let i = FK.band + o.range(0, 8);
      for (; i < FK.h - 2;) {
        let c = Math.min(
            FK.h - i,
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
  for (let [[t, n], [r, i], [a, o]] of LK(FK.x0, FK.z0, FK.x1, FK.z1))
    if (
      (e.panel(
        t + a * 0.15,
        n + o * 0.15,
        r + a * 0.15,
        i + o * 0.15,
        FK.h,
        FK.h + 1.2,
      ),
      e.panel(
        t + a * 0.15,
        n + o * 0.15,
        r + a * 0.15,
        i + o * 0.15,
        FK.crown - 1,
        FK.crown,
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
          FK.h + 1.2,
          FK.crown - 1,
        );
      }
    }
  (e.col(10132636).mat(0.85, 0, 0, 0),
    e.flat(FK.x0, FK.z0, FK.x1, FK.z1, FK.h + 0.6),
    e.col(13159115),
    e.box(
      FK.x0 + 6,
      FK.h + 0.6,
      FK.z0 + 10,
      FK.x1 - 6,
      FK.crown - 1.5,
      FK.z1 - 10,
    ),
    e.pop(),
    e.solid(FK.x0, FK.z0, FK.x1, FK.z1, FK.band, FK.crown),
    yield,
    e.push().col(12104358).mat(0.85, 0, 0, 0),
    e.flat(
      NK.x0,
      IK.z0,
      NK.x1,
      IK.z1,
      0.08,
      e.coarse ? e.white : t.c(`paving`),
      3,
      3,
    ));
  let s = PK.x - 5,
    c = PK.x + 5,
    l = e.coarse ? 4 : 14;
  for (let t = 0; t < l; t++) {
    let n = IK.z1 - 1 - (t * (IK.z1 - IK.z0 - 1.5)) / l,
      r = IK.deck - (t * IK.deck) / l;
    (e.col(12104358).box(s, 0, n - (IK.z1 - IK.z0 - 1.5) / l, c, r, n),
      e.coarse ||
        e
          .col(16767400)
          .mat(0.5, 0, 0.7, 1)
          .panel(
            c,
            n - (IK.z1 - IK.z0 - 1.5) / l - 0.01,
            s,
            n - (IK.z1 - IK.z0 - 1.5) / l - 0.01,
            r - 0.15,
            r,
          )
          .mat(0.85, 0, 0, 0));
  }
  (e.pop(),
    e.floor(s, IK.z0, c, IK.z1 - 1, 0, IK.deck),
    e.coarse ||
      (e.push().col(2853466).mat(0.5, 0, 0.6, 1),
      WB(e, `SHIBUYA STREAMLINE`, PK.x, IK.deck + 2.2, FK.z0 - 1.45, RB, 1.1, {
        px: 18,
        align: 0.5,
        maxW: 18,
        raw: !0,
      }),
      e.pop()),
    e.leave(n));
}
function EDe(e) {
  let t = e.sub(-PK.x, 0, -PK.z, 0);
  (e.push().mat(0.6, 0.3, 0, 0),
    e.col(9413549).box(NK.x0, 0, FK.z0, NK.x1, FK.pod, NK.z1),
    e
      .col(3159354)
      .box(FK.x0 + 1.5, FK.pod, FK.z0 + 1.5, FK.x1 - 1.5, FK.band, FK.z1 - 1.5),
    e.col(13949918).box(FK.x0, FK.band, FK.z0, FK.x1, FK.crown, FK.z1),
    e.pop(),
    e.leave(t));
}
var DDe = {
  id: `shibuya-streamline`,
  site: wDe,
  name: {
    ja: `渋谷ストリームライン`,
    zh: `澀谷 Streamline`,
    en: `Shibuya Streamline`,
  },
  near: 280,
  build: TDe,
  far: EDe,
  bounds: () => [NK.x0 - 1, NK.z0 - 2, NK.x1 + 1, NK.z1 + 1],
  farBoxes: () => [
    {
      x0: FK.x0,
      x1: FK.x1,
      z0: FK.z0,
      z1: FK.z1,
      y0: 0.15,
      y1: FK.crown,
      rgb: [0.74, 0.79, 0.81],
      lit: !0,
    },
    {
      x0: NK.x0,
      x1: NK.x1,
      z0: FK.z0,
      z1: NK.z1,
      y0: 0.15,
      y1: FK.pod,
      rgb: [0.5, 0.58, 0.62],
      lit: !0,
    },
  ],
};
r.add({ 東京歌劇城: `東京オペラタウン` });
var RK = { x: -2468, z: 590 },
  ODe = (27 * Math.PI) / 180,
  zK = { slot: 215, plate: 223, core: 234, pod: 12 },
  BK = 20,
  VK = 14,
  kDe = (e) => ({
    x: RK.x,
    z: RK.z,
    gy: e.groundHeight(-2438, RK.z),
    facing: ODe,
  });
function* ADe(e, t) {
  let n = t.c(`office`),
    r = t.c(`glass`),
    i = e.coarse ? 5 : 2.5;
  (e.push().col(14275784).mat(0.8, 0, 0.05, 1),
    e.box(-34, -2, -30, 34, zK.pod, 30, t.c(`granite`), 3, 3),
    e.col(5596268).mat(0.25, 0.3, 0.2, G),
    e.box(-34.2, 2, -30.2, 34.2, 6, 30.2, r, 3 * i, 4),
    e.pop(),
    yield,
    e
      .push()
      .col(14999766)
      .mat(0.75, 0.05, 0.1, G | 32),
    e.box(-14, zK.pod, -20, VK, zK.plate, -14, n, 3.2 * i, 3.9),
    e.box(-14, zK.pod, VK, VK, zK.plate, BK, n, 3.2 * i, 3.9),
    e.box(-20, zK.pod, -14, -14, zK.plate, VK, n, 3.2 * i, 3.9),
    e.box(VK, zK.pod, -14, BK, zK.plate, VK, n, 3.2 * i, 3.9),
    e.pop(),
    e.push().col(2767432).mat(0.15, 0.5, 0.2, G));
  for (let t of [-1, 1])
    for (let n of [-1, 1]) {
      let a = t < 0 ? -19 : VK,
        o = t < 0 ? -14 : 19,
        s = n < 0 ? -19 : VK,
        c = n < 0 ? -14 : 19;
      e.box(a, zK.pod, s, o, zK.slot, c, r, 2 * i, 4);
    }
  if (
    (e.col(13617856).mat(0.8, 0, 0.05, 1),
    e.box(-14, zK.plate - 4, -14, VK, zK.plate - 3, VK),
    e.box(-8, zK.plate - 3, -8, 8, zK.core, 8),
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
      e.box(t - 0.3, zK.core, n - 0.3, t + 0.3, zK.core + 0.6, n + 0.3);
    e.pop();
  }
  e.solid(-20, -20, BK, BK, 0, zK.core);
}
function jDe(e) {
  (e.push().mat(0.8, 0, 0.05, 0),
    e.col(14999766).box(-20, 0, -20, BK, zK.plate, BK),
    e.col(13617856).box(-8, zK.plate, -8, 8, zK.core, 8),
    e.col(14275784).box(-34, 0, -30, 34, zK.pod, 30),
    e.pop());
}
