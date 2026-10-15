// tokyo/assets/region-tokyo-55J_WESF 319 — col
// Lines 114921-115191 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* iOe(e, t) {
  let { x0: n, z0: r, x1: i, z1: a } = wq,
    o = bs.BR + 0.15;
  if (
    (e
      .push()
      .col(15922161)
      .mat(0.7, 0.05, 0.06, G | 32),
    e.wall(i, r, n, r, o, bs.ROOF, t.c(`glass`), 6.4 * oq(e), 6 * oq(e)),
    e.wall(n, r, n, a, o - 1, bs.ROOF, t.c(`glass`), 6.4 * oq(e), 6 * oq(e)),
    e.col(15659246).mat(0.7, 0, 0.05, 1),
    e.wall(n, a, i, a, bs.T3, bs.ROOF, e.white, 8 * oq(e), 6 * oq(e)),
    e.wall(i, a, i, r, o - 1, bs.ROOF, e.white, 8 * oq(e), 6 * oq(e)),
    e.col(8356999).mat(0.8, 0.1, 0, 0),
    e.flat(n, r, i, a, bs.ROOF),
    e.pop(),
    e.solid(n, r, i, a, 0, bs.ROOF),
    e.push().col(2500649).mat(0.9, 0, 0, 0),
    e.panel(n + 2, a + 0.02, i - 2, a + 0.02, bs.T3 + 0.8, bs.T4 - 0.6),
    e.panel(n + 2, a + 0.02, i - 2, a + 0.02, bs.T4 + 0.6, bs.ROOF - 1.2),
    e.pop(),
    yield,
    e.push().col(9080207).mat(0.8, 0.1, 0, 0),
    e.box(n, bs.BR - 1.2, a - 0.4, i, bs.T3, a + 0.6),
    e.pop(),
    !e.coarse)
  ) {
    (e.push().col(16185074).mat(0.4, 0, 0.45, 1),
      UB(
        e,
        `JR 新宿駅  Shinjuku Station`,
        -2128,
        bs.BR + 0.3,
        a + 0.65,
        RB,
        1.5,
        { raw: !0, px: 22, align: 0.5 },
      ),
      e.col(4616250).mat(0.95, 0, 0, 0));
    for (let t = n + 3; t < i - 2; t += 4.5)
      (e.obox(t, bs.T3 + 1.2, a - 0.3, 1.5, 1.2, 1.2, 0.3),
        e.obox(t + 2, bs.ROOF + 1.4, a - 1.5, 1.4, 1.4, 1.2, 0.8));
    (e.pop(),
      e.push().col(16777215).mat(0.25, 0.4, 0.4, G),
      e.box(-2140, o, r - 3.2, -2128, bs.ROOF + 2, r, t.c(`glass`), 3, 3),
      e.pop(),
      WB(
        e,
        -2108,
        bs.T4 + 1.4,
        r,
        LB,
        16,
        2.6,
        0.25,
        16250868,
        `バスタ新宿`,
        1920924,
        { raw: !0, px: 24, lit: 0.5 },
      ),
      e.push().col(16777215).mat(0.4, 0, 0.45, 1),
      UB(e, `4F 高速バス`, -2155, bs.T4 + 2.2, r - 0.05, LB, 0.8, {
        raw: !0,
        px: 18,
        align: 0.5,
      }),
      UB(e, `3F タクシー`, -2155, bs.T3 + 2.2, r - 0.05, LB, 0.8, {
        raw: !0,
        px: 18,
        align: 0.5,
      }),
      e.pop(),
      e.push().col(16777215).mat(0.3, 0.3, 0.5, G),
      e.panel(-2119, r - 0.04, -2125, r - 0.04, o, o + 3.2, t.c(`doors`)),
      e.pop());
  }
  yield;
  {
    let { x0: n, z0: r, x1: i, z1: a, base: s, h: c } = Tq;
    (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
      Ej(e, n, r, i, a, 0, o + 5, t.c(`wakoShow`), 3.2 * oq(e), 4.2 * oq(e)),
      e.col(14277853).mat(0.5, 0.2, 0.08, G | 32),
      Ej(
        e,
        n,
        r,
        i,
        a,
        o + 5,
        s,
        t.c(`office`),
        3.2 * oq(e),
        3.6 * oq(e),
        8356999,
      ),
      e.col(7242386).mat(0.18, 0.6, 0.1, G | 32));
    let l = n + 1.5,
      u = i - 1.5,
      d = r + 2,
      f = a - 1.5;
    (Ej(e, l, d, u, f, s, c, t.c(`gtGlass`), 25.6, 25.2, 3883590),
      e.pop(),
      e.solid(n, r, i, a, 0, s),
      e.solid(l, d, u, f, s, c),
      e.coarse ||
        (e.push().col(3115626).mat(0.6, 0, 0, 0),
        e.flat(l + 2, d + 2, u - 2, f - 2, c + 0.4),
        e.col(16777215).mat(0.6, 0, 0.2, 1),
        UB(e, `H`, (l + u) / 2, c + 0.42, (d + f) / 2 + 3, LB, 6, {
          raw: !0,
          px: 24,
          align: 0.5,
        }),
        e.pop(),
        e.push().col(8356999).mat(0.5, 0.4, 0, 0),
        e.box(l, c, d, u, c + 0.4, f),
        e.pop(),
        WB(
          e,
          n + 6,
          o + 2.2,
          r,
          LB,
          9,
          1.8,
          0.25,
          16316146,
          `NEWoMan`,
          1710618,
          { raw: !0, px: 22, lit: 0.5 },
        )),
      Wk(e, l + 1, c + 0.4, d + 1, 0.45),
      Wk(e, u - 1, c + 0.4, f - 1, 0.45));
  }
}
var aOe = {
    id: `sj-busta`,
    site: HK,
    name: { ja: `バスタ新宿`, zh: `新宿高速巴士總站`, en: `Busta Shinjuku` },
    near: 280,
    build: iOe,
    far: (e) => {
      (e.col(15659246).mat(0.7, 0, 0.05, G | 32),
        e.box(wq.x0, bs.BR - 1.2, wq.z0, wq.x1, bs.ROOF, wq.z1),
        e.col(7242386).mat(0.2, 0.6, 0.06, G | 32),
        e.box(Tq.x0 + 1.5, 0, Tq.z0 + 2, Tq.x1 - 1.5, Tq.h, Tq.z1 - 1.5));
    },
    bounds: () => [wq.x0, wq.z0, Tq.x1, wq.z1],
    farBoxes: () => [
      sq(
        Tq.x0 + 1.5,
        Tq.z0 + 2,
        Tq.x1 - 1.5,
        Tq.z1 - 1.5,
        0,
        Tq.h,
        [0.42, 0.5, 0.56],
      ),
      sq(wq.x0, wq.z0, wq.x1, wq.z1, bs.BR - 1.2, bs.ROOF, [0.9, 0.91, 0.9]),
    ],
    blip: !0,
  },
  Eq = { x0: -2199.2, z0: 106.4, x1: -2177.8, z1: 132.9, h: 38 },
  Dq = { x0: -2115.4, z0: 80.4, x1: -2100.9, z1: 132.2, base: 12, h: 94 };
function* oOe(e, t) {
  {
    let { x0: n, z0: r, x1: i, z1: a, h: o } = Eq,
      s = aq(t.plan, n, r, i, a);
    if (
      (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
      Ej(e, n, r, i, a, s, 5, t.c(`wakoShow`), 3.2 * oq(e), 5 * oq(e)),
      e.col(15330799).mat(0.5, 0.2, 0.06, G | 32),
      Ej(e, n, r, i, a, 5, o, t.c(`plaster`), 8 * oq(e), 8 * oq(e), 10132636),
      e.pop(),
      e.solid(n, r, i, a, s, o),
      !e.coarse)
    ) {
      (e.push().col(10470616).mat(0.2, 0.5, 0.2, G),
        e.box(n - 0.6, 5, a - 9, n, o - 4, a + 0.01, t.c(`glass`), 3.2, 4),
        e.pop(),
        qB(
          e,
          n,
          a - 12,
          BB,
          6,
          26,
          2.2,
          16053488,
          `PACHINKO Kaleido`,
          2763370,
          { lit: 0.5, px: 18 },
        ),
        WB(
          e,
          n - 0.3,
          12,
          a,
          RB,
          14,
          3.2,
          0.25,
          14169386,
          `カラオケ まねきねこ`,
          16777215,
          { px: 22, lit: 0.6 },
        ),
        e.push().col(5593178).mat(0.6, 0.5, 0, 0));
      for (let t of [n + 3, i - 3])
        e.box(t - 0.2, o, a - 3.2, t + 0.2, o + 5, a - 2.8);
      (e.pop(),
        WB(
          e,
          (n + i) / 2,
          o + 5,
          a - 3,
          RB,
          18,
          5.5,
          0.4,
          16185074,
          `たのめーる`,
          14169386,
          { px: 30, lit: 0.6 },
        ));
    }
  }
  yield;
  {
    let { x0: n, z0: r, x1: i, z1: a, base: o, h: s } = Dq,
      c = aq(t.plan, n, r, i, a);
    (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
      Ej(e, n, r, i, a, c, o, t.c(`wakoShow`), 3.2 * oq(e), 6 * oq(e)),
      e.col(9326405).mat(0.8, 0, 0.06, G | 32),
      Ej(
        e,
        n,
        r + 6,
        i,
        a - 4,
        o,
        s,
        t.A.sub(`nsArt`, 0, 0, 0.5, 1),
        6.4 * oq(e),
        12.8 * oq(e),
        7293508,
      ),
      e.col(8211008).mat(0.85, 0, 0, 0),
      e.flat(n, r, i, r + 6, o),
      e.flat(n, a - 4, i, a, o),
      e.pop(),
      e.solid(n, r, i, a, c, o),
      e.solid(n, r + 6, i, a - 4, o, s),
      e.coarse ||
        WB(
          e,
          n,
          o - 3.6,
          a - 10,
          BB,
          12,
          2.4,
          0.3,
          16184558,
          `西武新宿駅 PePe`,
          8010288,
          { raw: !0, px: 22, lit: 0.5 },
        ),
      Wk(e, n + 1, s, r + 7, 0.45));
  }
}
