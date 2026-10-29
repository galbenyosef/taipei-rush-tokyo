// tokyo/assets/region-tokyo-A7LxHjud 275 — box
// Lines 102011-102296 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Fwe = {
    id: `kabukicho-ichibangai-gate`,
    site: oV(CV.x, CV.z),
    name: {
      ja: `歌舞伎町一番街`,
      zh: `歌舞伎町一番街`,
      en: `Kabukicho Ichiban-gai Gate`,
    },
    near: 200,
    build: Pwe,
    far: (e) => {
      (e.col(13114910).mat(0.5, 0, 0.3, 1),
        e.box(-4.9, 4.2, -0.25, 4.9, 8.8, 0.25));
    },
    bounds: () => [CV.x - 6, CV.z - 2, CV.x + 6, CV.z + 2],
    farBoxes: () => [],
    anchors: [
      {
        key: `kabukicho-ichibangai`,
        lx: 0,
        lz: 14,
        turn: 0,
        name: { zh: `歌舞伎町一番街`, en: `Kabukicho Ichiban-gai` },
      },
    ],
  },
  wV = { x: -2038, z: 105, hx: 12, hz: 27 },
  Iwe = [
    [-8.8, BB, 3.2],
    [-7.2, VB, 3.2],
    [-0.8, BB, 3.2],
    [0.8, VB, 3.2],
    [7.2, BB, 3.2],
    [8.8, VB, 3.2],
  ],
  TV =
    `ひとみ.蛍.こころ.まり.月光.夜行.しの.花.猫.灯.凪.燈台.BAR K.みち.三日月.ゆき.岬.あかね.路地.音.雫.朔.藍.BAR 7.海.風.鈴.さち.空.黒猫`.split(
      `.`,
    );
function* Lwe(e, t) {
  QB(t);
  let n = [
      11043934, 9203800, 12888194, 8021072, 13811870, 10113600, 5924464,
      12235428, 9273448,
    ],
    r = 0,
    i = [
      [-wV.hz, -1],
      [1, wV.hz],
    ],
    a = 300;
  for (let [t, o, s] of Iwe) {
    for (let [c, l] of i) {
      let [i, u] = o === BB ? [l, c] : [c, l];
      eV(
        e,
        t,
        i,
        t,
        u,
        o,
        {
          depth: s,
          h: [5.6, 7.4],
          ws: [2.6, 3.8],
          seed: a++,
          walls: n,
          hiddenBack: t > -8 && t < 8,
        },
        (t, i, a, s, c) => {
          if (e.coarse) return;
          let l = c.pick(n),
            u = c.pick([`door`, `door`, `door`, `glass`, `counter`]);
          tV(e, i, a, o, u, l, c, 0.35);
          let d = Math.hypot(a[0] - i[0], a[1] - i[1]),
            f = (i[0] + a[0]) / 2,
            p = (i[1] + a[1]) / 2;
          e.push()
            .col(c.pick([16767392, 16304272, 16770752, 13689087]))
            .mat(0.5, 0, 0.24, 1);
          let m = HB(o),
            h = Math.min(1.4, d * 0.45);
          (e.panel(
            f - (m[0] * h) / 2 + o[0] * 0.02,
            p - (m[1] * h) / 2 + o[1] * 0.02,
            f + (m[0] * h) / 2 + o[0] * 0.02,
            p + (m[1] * h) / 2 + o[1] * 0.02,
            3.6,
            4.6,
          ),
            e.pop());
          let g = c.pick([
              16052454, 1842206, 15786672, 12068382, 2373194, 16777215,
            ]),
            _ =
              g === 1842206 || g === 12068382 || g === 2373194
                ? 16774360
                : 1841172,
            v = TV[r++ % TV.length],
            y = c.chance(0.25) ? v : ``;
          (c.chance(0.3)
            ? JB(
                e,
                f + m[0] * (d / 2 - 0.3),
                p + m[1] * (d / 2 - 0.3),
                o,
                2.7,
                1.5,
                0.5,
                g,
                y,
                _,
                { lit: 0.35, px: 12 },
              )
            : GB(e, f, 2.65, p, o, Math.min(d - 0.4, 1.8), 0.5, 0.08, g, y, _, {
                lit: 0.35,
                px: 12,
                flat: !0,
              }),
            c.chance(0.35) &&
              YB(
                e,
                f - m[0] * (d / 2 - 0.35) + o[0] * 0.3,
                2.55,
                p - m[1] * (d / 2 - 0.35) + o[1] * 0.3,
                0.55,
                c.pick([14166044, 14166044, 15788248]),
              ),
            c.chance(0.1) &&
              nV(e, i, a, o, c.pick([2371658, 6953498, 2767402]), 2.3, 0.6, 2));
        },
      );
      let d = XB(a * 7),
        f = t - (o[0] * s) / 2;
      (iV(
        e,
        f,
        c,
        RB,
        s,
        d,
        e.coarse || !d.chance(0.3) ? `` : TV[r++ % TV.length],
        16052454,
        1841172,
      ),
        iV(
          e,
          f,
          l,
          zB,
          s,
          d,
          e.coarse || !d.chance(0.3) ? `` : TV[r++ % TV.length],
          1842206,
          16774360,
        ));
    }
    yield;
  }
  e.col(7105126).mat(0.9, 0, 0, 0);
  for (let [t, n] of [
    [-8.8, -7.2],
    [-0.8, 0.8],
    [7.2, 8.8],
  ])
    e.flat(t, -wV.hz, n, wV.hz, 0.03);
  if (
    (e.flat(-wV.hx, -1, -8.8, 1, 0.03),
    e.flat(-7.2 + 6.4 - 6.4, -1, -0.8, 1, 0.03),
    e.flat(0.8, -1, 7.2, 1, 0.03),
    e.flat(8.8, -1, wV.hx, 1, 0.03),
    e.coarse)
  )
    return;
  e.push().col(1842204).mat(0.8, 0, 0, 0);
  let o = XB(911);
  for (let t of [-8, 0, 8])
    for (let n = -wV.hz + 4; n < wV.hz; n += o.range(8, 12))
      e.rod(
        t - 1.1,
        o.range(5, 6.2),
        n,
        t + 1.1,
        o.range(5, 6.2),
        n + o.range(-1.5, 1.5),
        0.02,
        3,
      );
  e.pop();
  for (let [t, n] of [
    [-8, `まねき通り`],
    [0, `G2通り`],
    [8, `あかるい花園一番街`],
  ])
    (e.push().col(2763306).mat(0.5, 0.4, 0, 0),
      e.box(t - 0.75, 0, wV.hz - 0.1, t - 0.68, 3.4, wV.hz),
      e.box(t + 0.68, 0, wV.hz - 0.1, t + 0.75, 3.4, wV.hz),
      e.pop(),
      GB(
        e,
        t,
        3.4,
        wV.hz - 0.1,
        zB,
        1.6,
        0.6,
        0.1,
        16181688,
        `新宿ゴールデン街`,
        1710618,
        { raw: !0, px: 16, lit: 0.55, flat: !0 },
      ),
      GB(e, t, 4.05, wV.hz - 0.1, zB, 1.6, 0.36, 0.1, 1710618, n, 16181688, {
        raw: !0,
        px: 14,
        lit: 0.45,
        flat: !0,
      }));
}
var Rwe = {
    id: `golden-gai`,
    site: oV(wV.x, wV.z),
    name: {
      ja: `新宿ゴールデン街`,
      zh: `新宿黃金街`,
      en: `Shinjuku Golden Gai`,
    },
    near: 200,
    build: Lwe,
    far: (e) => {
      e.col(8022616).mat(0.9, 0, 0.04, G | 32);
      for (let [t, n] of [
        [-12, -8.8],
        [-7.2, -0.8],
        [0.8, 7.2],
        [8.8, 12],
      ])
        e.box(t, 0, -wV.hz, n, 6.4, wV.hz);
    },
    bounds: () => [wV.x - wV.hx, wV.z - wV.hz, wV.x + wV.hx, wV.z + wV.hz],
    farBoxes: () => [],
    anchors: [
      {
        key: `golden-gai`,
        lx: 0,
        lz: wV.hz + 3,
        turn: 0,
        name: { zh: `新宿黃金街`, en: `Shinjuku Golden Gai` },
      },
    ],
    roofs: [],
  },
  EV = { x: -2013, z: 101 },
  DV = 13123626;
function OV(e, t, n, r, i, a) {
  let o = e.sub(t, 0, n, r),
    s = 0.09;
  e.push().col(DV).mat(0.7, 0, 0, 0);
  for (let t of [-1, 1])
    e.box((t * i) / 2 - s, 0, -0.09, (t * i) / 2 + s, a - 0.2, s);
  (e.box(
    -i / 2 - 0.25,
    a * 0.72,
    -0.072,
    i / 2 + 0.25,
    a * 0.72 + 0.14,
    s * 0.8,
  ),
    e.col(1841689),
    e.box(-i / 2 - 0.4, a - 0.2, -0.108, i / 2 + 0.4, a, s * 1.2),
    e.pop(),
    e.leave(o));
}
function kV(e, t, n, r = 2.4) {
  (e.push().col(10131084).mat(0.9, 0, 0, 0),
    e.box(t - 0.45, 0, n - 0.45, t + 0.45, 0.3, n + 0.45),
    e.cylY(t, n, 0.3, r * 0.55, 0.16, 6, 0.14, !1),
    e.box(t - 0.36, r * 0.55, n - 0.36, t + 0.36, r * 0.62, n + 0.36),
    e.col(15916720).mat(0.5, 0, 0.6, 1),
    e.box(t - 0.24, r * 0.62, n - 0.24, t + 0.24, r * 0.8, n + 0.24),
    e.col(10131084).mat(0.9, 0, 0, 0),
    e.lathe(t, n, [0.55, r * 0.8, 0.12, r * 0.95], 6, Math.PI / 6),
    e.box(t - 0.07, r * 0.95, n - 0.07, t + 0.07, r, n + 0.07),
    e.pop(),
    e.pole(t, n, 0.45, 0, r));
}
