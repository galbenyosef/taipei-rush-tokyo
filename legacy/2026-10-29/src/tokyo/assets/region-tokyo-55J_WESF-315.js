// tokyo/assets/region-tokyo-55J_WESF 315 — solid
// Lines 113867-114175 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* XDe(e, t) {
  let { x0: n, z0: r, x1: i, z1: a } = dq,
    o = Us,
    s = t.plan.groundHeight(o.x0 + 6, mq.zs + 2),
    c = t.plan.groundHeight(o.x0 - 1.5, (pq.z0 + pq.z1) / 2),
    l = c + 0.03,
    u = [0, 1, 2, 3, 4].map((e) => s + ((l - s) * e) / 4);
  (e.push().col(7106416).mat(0.7, 0.5, 0, 0),
    e.panel(o.x0, o.z0, o.x1, o.z0, o.y, 0.15),
    e.panel(o.x1, o.z1, o.x0, o.z1, o.y, 0.15),
    e.panel(o.x0, o.z1, o.x0, o.z0, o.y, 0.15),
    e.panel(o.x1, o.z0, o.x1, o.z1, o.y, 0.15),
    e.pop());
  let d = o.y - 1,
    f = c - 0.15;
  if (
    (e.solid(o.x0 - 0.4, o.z0 - 0.4, o.x0 + 0.1, o.z1 + 0.4, d, f, `wall`),
    e.solid(o.x1 - 0.1, o.z0 - 0.4, o.x1 + 0.4, o.z1 + 0.4, d, f, `wall`),
    e.solid(o.x0, o.z0 - 0.4, o.x1, o.z0 + 0.1, d, f, `wall`),
    e.solid(o.x0, o.z1 - 0.1, o.x1, o.z1 + 0.4, d, f, `wall`),
    !e.coarse)
  ) {
    e.push().col(10119740).mat(0.6, 0.4, 0, 0);
    for (let t = o.z0 + 8; t < o.z1; t += 10)
      for (let n of [-3, -7.5]) e.box(o.x0, n, t - 0.3, o.x1, n + 0.5, t + 0.3);
    e.col(9211790).mat(0.9, 0, 0, 0);
    for (let t = o.x0 + 6; t < o.x1 - 3; t += 9)
      for (let n = o.z0 + 6; n < o.z1 - 3; n += 9)
        (e.box(t - 0.5, o.y, n - 0.5, t + 0.5, o.y + 3.5, n + 0.5),
          e.solid(
            t - 0.5,
            n - 0.5,
            t + 0.5,
            n + 0.5,
            o.y,
            o.y + 3.5,
            `pillar`,
          ));
    e.pop();
  }
  (yield, e.push().col(4157005).mat(0.8, 0.1, 0.02, 1));
  let p = YDe,
    m = [
      [n, r, n, pq.z0, -0.2, p],
      [n, pq.z1, n, a, -0.2, p],
      [n, pq.z0, n, pq.z1, pq.h, p],
      [i, r, n, r, -0.2, p],
      [n, a, i, a, -0.2, p],
      [i, a, i, r, -0.2, p],
    ];
  for (let [t, n, r, i, a, o] of m)
    (e.panel(t, n, r, i, a, o), e.panel(r, i, t, n, a, o));
  (e.pop(),
    e.solid(n - 0.2, r, n + 0.2, pq.z0, -1, p, `fence`),
    e.solid(n - 0.2, pq.z1, n + 0.2, a, -1, p, `fence`),
    e.solid(n - 0.2, pq.z0, n + 0.2, pq.z1, pq.h, p, `fence`),
    e.solid(i - 0.2, r, i + 0.2, a, -1, p, `fence`),
    e.solid(n, r - 0.2, i, r + 0.2, -1, p, `fence`),
    e.solid(n, a - 0.2, i, a + 0.2, -1, p, `fence`));
  let h = `invisible-hoarding`;
  (e.solid(n - 0.45, r - 0.45, n + 0.45, a + 0.45, p, fq, h),
    e.solid(i - 0.45, r - 0.45, i + 0.45, a + 0.45, p, fq, h),
    e.solid(n, r - 0.45, i, r + 0.45, p, fq, h),
    e.solid(n, a - 0.45, i, a + 0.45, p, fq, h),
    e.coarse ||
      (WB(
        e,
        n,
        0.6,
        (r + a) / 2,
        BB,
        16,
        2.2,
        0.08,
        16053488,
        `新宿駅西口地区開発計画`,
        1789324,
        { raw: !0, px: 22, lit: 0.3, flat: !0 },
      ),
      e.push().col(14673902).mat(0.5, 0, 0.2, 1),
      e.panel(n - 0.1, r + 4, n - 0.1, r + 14, 0.6, 3),
      e.col(6127004).mat(0.5, 0, 0.1, 1),
      e.panel(n - 0.12, r + 8, n - 0.12, r + 10, 0.8, 2.8000000000000003),
      e.col(5595226).mat(0.5, 0.5, 0.02, 1),
      e.box(n - 0.12, -0.05, pq.z0 - 0.1, n + 0.12, pq.h, pq.z0),
      e.box(n - 0.12, -0.05, pq.z1, n + 0.12, pq.h, pq.z1 + 0.1),
      e.box(n - 0.12, pq.h - 0.1, pq.z0, n + 0.12, pq.h, pq.z1),
      e.col(7109232).mat(0.6, 0.3, 0.02, 1),
      e.box(
        n + 0.22,
        c + 0.03,
        pq.z0 - 1.08,
        n + 0.27,
        pq.h - 0.15,
        pq.z0 - 0.08,
      ),
      e.col(16773320).mat(0.4, 0, 1, 1),
      e.box(
        n - 0.3,
        pq.h + 0.1,
        (pq.z0 + pq.z1) / 2 - 0.2,
        n - 0.12,
        pq.h + 0.25,
        (pq.z0 + pq.z1) / 2 + 0.2,
      ),
      e.pop(),
      e.solid(
        n + 0.2,
        pq.z0 - 1.08,
        n + 0.27,
        pq.z0 - 0.08,
        c,
        pq.h - 0.15,
        `fence`,
      ),
      e
        .push()
        .col(15330280)
        .mat(0.8, 0, 0.05, G | 32),
      e.box(n + 0.5, 0.15, a - 7, n + 2.8, 5.4, a - 1, t.c(`office`), 3, 2.7),
      e.pop(),
      e.solid(n + 0.5, a - 7, n + 2.8, a - 1, 0, 5.4)),
    yield);
  {
    let t = o.x0 - 0.25,
      n = o.x1 + 0.25,
      r = o.z0 - 0.25,
      i = o.z1 + 0.25,
      a = c + 1.1,
      s = [
        [t, r, n, r],
        [n, r, n, i],
        [n, i, t, i],
        [t, i, t, mq.zs],
        [t, mq.zf1, t, r],
      ];
    for (let [t, n, r, i] of s)
      e.solid(
        Math.min(t, r) - 0.05,
        Math.min(n, i) - 0.05,
        Math.max(t, r) + 0.05,
        Math.max(n, i) + 0.05,
        c - 0.15,
        a,
        `rail`,
      );
    if (!e.coarse) {
      e.push().col(11120304).mat(0.45, 0.7, 0.02, 1);
      for (let [t, n, r, i] of s) {
        let o = Math.hypot(r - t, i - n),
          s = Math.max(1, Math.round(o / 3));
        for (let o = 0; o <= s; o++) {
          let l = o / s;
          e.rod(
            t + (r - t) * l,
            c - 0.05,
            n + (i - n) * l,
            t + (r - t) * l,
            a,
            n + (i - n) * l,
            0.024,
            4,
          );
        }
        for (let o of [c + 0.55, a - 0.02]) e.rod(t, o, n, r, o, i, 0.024, 4);
      }
      e.pop();
    }
  }
  {
    let { xa: t, xm: n, xb: r, zn: i, zf0: a, zf1: c, zs: d } = mq,
      f = 1.1,
      p = l + f;
    (e.floor(n + 0.02, a, r, c, u[1], u[0], `stairs`),
      e.floor(t, a, n - 0.02, c, u[1], u[2], `stairs`),
      e.floor(n + 0.02, a, r, c, u[3], u[2], `stairs`),
      e.floor(t, a, n - 0.02, c, u[3], u[4], `stairs`),
      e.floor(t, i, r, a, u[1]),
      e.floor(t, i, r, a, u[3]),
      e.floor(t, c, r, d, u[2]),
      e.floor(o.x0 - hq, c, r, d, u[4]));
    let m = s + 2.1;
    (e.solid(r, i, r + 0.1, c, s - 0.2, p, `rail`),
      e.solid(r, c, r + 0.1, d + 0.1, m, p, `rail`),
      e.solid(t, i - 0.1, r + 0.1, i, s - 0.2, p, `rail`),
      e.solid(t, d, r + 0.1, d + 0.1, m, p, `rail`),
      e.solid(n - 0.02, a, n + 0.02, c, s - 0.2, p, `rail`),
      e.solid(n, c - 0.05, r, c + 0.05, l - 0.2, p, `rail`),
      e.solid(t, c - 0.05, n, c + 0.05, s - 0.2, u[2] - 0.2, `fence`));
    let h = [
      [r, i],
      [r, a],
      [r, c],
      [r, (c + d) / 2],
      [r, d],
      [n, a],
      [n, c],
      [n, d],
      [t, i],
      [t, d],
    ];
    for (let [t, n] of h) e.pole(t, n, 0.06, s - 0.2, p);
    if (!e.coarse) {
      (e.push().col(7238518).mat(0.55, 0.6, 0.02, 1),
        e.box(t, u[1] - 0.12, i, r, u[1], a, e.white, 0, 0, null, !0),
        e.box(t, u[3] - 0.12, i, r, u[3], a, e.white, 0, 0, null, !0),
        e.box(t, u[2] - 0.12, c, r, u[2], d, e.white, 0, 0, null, !0),
        e.box(o.x0 - hq, u[4] - 0.15, c, r, u[4], d, e.white, 0, 0, null, !0),
        e.col(5008976).mat(0.85, 0, 0.02, 1),
        e.panel(t, c, n, c, s - 0.05, u[2] - 0.2),
        e.panel(n, c, t, c, s - 0.05, u[2] - 0.2),
        e.col(5922658).mat(0.6, 0.6, 0, 1),
        gq(e, n + 0.04, r - 0.04, c, a, u[0], u[1], 15),
        gq(e, t + 0.04, n - 0.04, a, c, u[1], u[2], 15),
        gq(e, n + 0.04, r - 0.04, c, a, u[2], u[3], 15),
        gq(e, t + 0.04, n - 0.04, a, c, u[3], u[4], 15),
        e.col(11120304).mat(0.45, 0.7, 0.02, 1));
      for (let [t, n] of h) e.rod(t, s - 0.05, n, t, p, n, 0.05, 4);
      let m = [
        [n, r, c, u[0], u[1]],
        [t, n, a, u[1], u[2]],
        [n, r, c, u[2], u[3]],
        [t, n, a, u[3], u[4]],
      ];
      for (let [n, r, i, o, s] of m) {
        let l = i === c ? a : c;
        for (let t of [n + 0.05, r - 0.05])
          e.rod(t, o - 0.15, i, t, s - 0.15, l, 0.05, 4);
        (e.rod(r - 0.03, o + f, i, r - 0.03, s + f, l, 0.024, 4),
          n === t && e.rod(n + 0.03, o + f, i, n + 0.03, s + f, l, 0.024, 4));
      }
      for (let n of [u[1], u[3]])
        (e.rod(t, n + f, i, r, n + f, i, 0.024, 4),
          e.rod(r, n + f, i, r, n + f, a, 0.024, 4));
      for (let n of [u[2], u[4]])
        (e.rod(t, n + f, d, r, n + f, d, 0.024, 4),
          e.rod(r, n + f, c, r, n + f, d, 0.024, 4));
      (e.rod(n, l + f, c, r, l + f, c, 0.024, 4),
        e.col(16773320).mat(0.4, 0, 1, 1));
      for (let [t, n] of [
        [u[1], i],
        [u[2], d],
        [u[3], i],
        [u[4], d],
      ])
        e.box(r + 0.05, t + 2, n - 0.2, r + 0.2, t + 2.15, n + 0.2);
      e.pop();
    }
  }
  (yield,
    Kk(e, o.x0 + 12, o.y, o.z0 + 14, 64, 2.3, 40, 0.5),
    Kk(e, o.x1 - 10, o.y, o.z1 - 12, 58, -0.8, 36, 0.62),
    e.solid(
      o.x0 + 10.85,
      o.z0 + 12.85,
      o.x0 + 13.15,
      o.z0 + 15.15,
      o.y,
      o.y + 64,
      `pillar`,
    ),
    e.solid(
      o.x1 - 11.15,
      o.z1 - 13.15,
      o.x1 - 8.85,
      o.z1 - 10.85,
      o.y,
      o.y + 58,
      `pillar`,
    ));
  let g = { x0: o.x0 + 0.7, x1: o.x0 + 4.7, z0: 225.5, z1: 231.5 };
  (e.solid(g.x0, g.z0, g.x1, g.z1, s - 0.15, s + 2.45),
    e.coarse ||
      (e.push().col(13120030).mat(0.5, 0.3, 0, 0),
      e.box(g.x0, s - 0.15, g.z0, g.x1, s + 2.45, g.z1),
      e.rod(
        (g.x0 + g.x1) / 2,
        s + 2.45,
        (g.z0 + g.z1) / 2,
        (g.x0 + g.x1) / 2 + 13,
        30,
        (g.z0 + g.z1) / 2,
        0.35,
        4,
      ),
      e.pop()));
}
var ZDe = {
    id: `sj-odakyu-site`,
    site: HK,
    name: {
      ja: `新宿駅西口地区開発 工事現場`,
      zh: `新宿站西口地區開發 工地`,
      en: `Shinjuku West Exit Development Site`,
    },
    near: 240,
    build: XDe,
    far: (e) => {
      (e.col(15263972).mat(0.5, 0.5, 0, 1),
        e.box(Us.x0 + 11, Us.y, Us.z0 + 13, Us.x0 + 13, Us.y + 66, Us.z0 + 15),
        e.col(4157005).mat(0.8, 0, 0, 0),
        e.box(dq.x0, 0, dq.z0, dq.x1, 3.2, dq.z1));
    },
    bounds: () => [dq.x0, dq.z0, dq.x1, dq.z1],
    farBoxes: () => [],
  },
  _q = { x0: -2208.2, z0: 262.8, x1: -2183, z1: 306, h: 35 },
  vq = { x0: -2208.2, z0: 306.6, x1: -2183, z1: 327.7, h: 35 },
  yq = { x0: -2183, z0: 262.8, x1: -2157.2, z1: 327.7, h: 11 };
