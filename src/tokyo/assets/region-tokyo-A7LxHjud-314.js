// tokyo/assets/region-tokyo-A7LxHjud 314 — col
// Lines 113658-113957 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* aOe(e, t) {
  let { x0: n, z0: r, x1: i, z1: a, h: o } = lq,
    s = oq(t.plan, n, r, i, a);
  if (
    (e.push().col(16777215).mat(0.3, 0.3, 0.35, G),
    Oj(e, n, r, i, a, s, 4.6, t.c(`wakoShow`), 3.2 * sq(e), 4.6 * sq(e)),
    e.col(15527661).mat(0.6, 0.1, 0.06, G | 32),
    Oj(
      e,
      n,
      r,
      i,
      a,
      4.6,
      o,
      t.c(`office`),
      3.2 * sq(e),
      3.4 * sq(e),
      12172477,
    ),
    e.pop(),
    e.solid(n, r, i, a, s, o),
    !e.coarse)
  ) {
    e.push().col(16185074).mat(0.6, 0.1, 0, 0);
    for (let t = r + 1.2; t < a; t += 2.4)
      e.box(n - 0.5, 4.6, t - 0.12, n, o, t + 0.12);
    for (let t = n + 1.2; t < i; t += 2.4)
      e.box(t - 0.12, 4.6, r - 0.5, t + 0.12, o, r);
    e.pop();
    for (let t of [r + 6, r + 18, r + 30])
      JB(e, n - 0.5, t, VB, 8, 15, 1.4, 1925044, `HALC`, 16777215, {
        lit: 0.4,
        px: 16,
      });
    (e.push().col(1925044).mat(0.5, 0.2, 0.2, 1),
      e.box(n + 3, o, r + 4, n + 9, o + 4, r + 7),
      e.pop(),
      GB(
        e,
        n + 6,
        o + 4,
        r + 4,
        RB,
        9,
        3.4,
        0.3,
        16053488,
        `ビックカメラ`,
        13111342,
        { px: 24, lit: 0.45 },
      ),
      GB(
        e,
        n + 3,
        o + 4,
        r + 15,
        VB,
        9,
        3.4,
        0.3,
        1925044,
        `小田急ハルク`,
        16777215,
        { px: 24, lit: 0.45 },
      ));
  }
}
var oOe = {
    id: `sj-halc`,
    site: UK,
    name: { ja: `小田吉ハルク`, zh: `小田吉 HALC`, en: `Odakichi HALC` },
    near: 220,
    build: aOe,
    far: (e, t) => {
      (e.col(15132902).mat(0.6, 0.1, 0.06, G | 32),
        Oj(
          e,
          lq.x0,
          lq.z0,
          lq.x1,
          lq.z1,
          oq(t.plan, lq.x0, lq.z0, lq.x1, lq.z1),
          lq.h,
          t.c(`office`),
          8 * sq(e),
          8 * sq(e),
          12172477,
        ));
    },
    bounds: () => [lq.x0, lq.z0, lq.x1, lq.z1],
    farBoxes: () => [
      cq(lq.x0, lq.z0, lq.x1, lq.z1, -3, lq.h, [0.88, 0.89, 0.88]),
    ],
  },
  uq = { x0: -2186.2, x1: -2157.4, z0: 167.4, z1: 199.6 },
  dq = [
    `やきとり`,
    `もつ焼`,
    `焼鳥`,
    `ホルモン`,
    `煮込み`,
    `うなぎ`,
    `立呑`,
    `酒処`,
    `串焼`,
    `もつ煮`,
    `焼とん`,
    `つくね`,
    `餃子`,
    `おでん`,
  ];
function* sOe(e, t) {
  QB(t);
  let n = [9203800, 8021590, 10256998, 6973026, 11029048, 9274484],
    r = [
      [-2182.2, BB, 4],
      [-2180.2, VB, 3.6],
      [-2172.6, BB, 3.6],
      [-2170.6, VB, 4],
      [-2166.6, BB, 4],
      [-2164.6, VB, 3.8],
    ],
    i = [uq.z0, 178.2, 189, uq.z1],
    a = 600,
    o = 0;
  for (let [s, c, l] of r) {
    for (let r = 0; r + 1 < i.length; r++) {
      let u = i[r] + (r ? 0.35 : 0),
        d = i[r + 1] - (r + 2 < i.length ? 0.35 : 0),
        f = c === BB ? s - l : s,
        p = c === BB ? s : s + l,
        m = oq(t.plan, f, u, p, d),
        h = e.sub(0, m, 0, 0),
        [g, _] = c === BB ? [d, u] : [u, d];
      (eV(
        e,
        s,
        g,
        s,
        _,
        c,
        {
          depth: l,
          h: [4.6, 6.4],
          ws: [2.6, 3.8],
          seed: a++,
          walls: n,
          hiddenBack: s > -2181 && s < -2165,
        },
        (t, r, i, a, s) => {
          if (e.coarse) return;
          let l = s.pick(n);
          tV(e, r, i, c, s.chance(0.75) ? `counter` : `glass`, l, s, 0.9);
          let u = Math.hypot(i[0] - r[0], i[1] - r[1]),
            d = (r[0] + i[0]) / 2,
            f = (r[1] + i[1]) / 2;
          (e
            .push()
            .col(s.pick([9079942, 10119754, 6978172, 12077626]))
            .mat(0.6, 0.4, 0, 0),
            e.quad(
              r[0] + c[0] * 0.9,
              2.45,
              r[1] + c[1] * 0.9,
              i[0] + c[0] * 0.9,
              2.45,
              i[1] + c[1] * 0.9,
              i[0],
              2.85,
              i[1],
              r[0],
              2.85,
              r[1],
            ),
            e.pop());
          let p = dq[o++ % dq.length],
            m = s.pick([15919832, 13116444, 15781952, 1842206]),
            h =
              m === 13116444 || m === 1842206
                ? 16774880
                : m === 15781952
                  ? 11540504
                  : 1841172;
          (GB(
            e,
            d,
            3,
            f,
            c,
            Math.min(u - 0.3, 2.2),
            0.62,
            0.08,
            m,
            s.chance(0.25) ? p : ``,
            h,
            { raw: !0, lit: 0.35, px: 12, flat: !0 },
          ),
            s.chance(0.75) &&
              YB(e, d + c[0] * 0.7, 2.42, f + c[1] * 0.7, 0.68, 14166044, 0.34),
            s.chance(0.2) &&
              nV(
                e,
                r,
                i,
                c,
                s.pick([1976906, 6953498, 15261904, 2767402]),
                2.3,
                0.7,
                2,
              ));
        },
      ),
        e.leave(h));
    }
    yield;
  }
  if (e.coarse) return;
  for (let n of [-2181.2, -2171.6, -2165.6])
    for (let [r, i] of [
      [uq.z0, RB],
      [uq.z1, zB],
    ]) {
      let a = t.plan.groundHeight(n, r - i[1] * 0.5);
      (e.push().col(2763306).mat(0.5, 0.4, 0, 0),
        e.box(n - 1.05, a, r - 0.05, n - 0.95, a + 3.5, r + 0.05),
        e.box(n + 0.95, a, r - 0.05, n + 1.05, a + 3.5, r + 0.05),
        e.pop(),
        GB(
          e,
          n,
          a + 3.5,
          r - i[1] * 0.06,
          i,
          2.1,
          0.7,
          0.12,
          13116444,
          `思い出横丁`,
          16774352,
          { raw: !0, px: 18, lit: 0.6, flat: !0 },
        ));
    }
  let s = XB(733);
  iV(e, -2184.2, uq.z0, RB, 4, s, `もつ焼`, 13116444, 16774880);
}
var cOe = {
    id: `omoide-yokocho`,
    site: UK,
    name: { ja: `思い出横丁`, zh: `回憶橫丁`, en: `Omoide Yokocho` },
    near: 190,
    build: sOe,
    far: (e, t) => {
      e.col(6969932).mat(0.9, 0, 0.04, G | 32);
      let n = oq(t.plan, uq.x0, uq.z0, uq.x1, uq.z1);
      for (let [t, r] of [
        [-2186.2, -2182.2],
        [-2180.2, -2172.6],
        [-2170.6, -2164.6],
      ])
        e.box(t, n, uq.z0, r, n + 5.6 + 2.5, uq.z1);
    },
    bounds: () => [uq.x0, uq.z0, uq.x1, uq.z1],
    farBoxes: () => [],
    anchors: [
      {
        key: `omoide-yokocho`,
        lx: -2171.6,
        lz: uq.z0 - 5,
        turn: HK,
        name: { zh: `回憶橫丁`, en: `Omoide Yokocho` },
      },
    ],
  },
  fq = { x0: -2208.2, z0: 205.4, x1: -2157.6, z1: 261.8 },
  lOe = 3.2,
  pq = 9,
  mq = { z0: 245, z1: 246.2, h: 2.25 },
  hq = {
    xa: Us.x0 + 0.2,
    xm: Us.x0 + 1.85,
    xb: Us.x0 + 3.5,
    zn: 237.6,
    zf0: 239.4,
    zf1: 244.6,
    zs: 246.4,
  },
  gq = 0.6;
function _q(e, t, n, r, i, a, o, s) {
  let c = (i - r) / s,
    l = (o - a) / s,
    u = i < r;
  for (let i = 0; i <= s; i++) {
    let d = r + c * i,
      f = i === 0 ? a : a + l * (i - 0.5),
      p = i === s ? o : a + l * (i + 0.5);
    (i < s && (u ? e.panel(t, d, n, d, f, p) : e.panel(n, d, t, d, f, p)),
      i < s && e.flat(t, Math.min(d, d + c), n, Math.max(d, d + c), p));
  }
}
