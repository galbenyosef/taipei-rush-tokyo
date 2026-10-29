// tokyo/assets/region-tokyo-A7LxHjud 202 — col
// Lines 80062-80348 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var NA = 1119,
  xve = {
    id: `shiba-park-trees`,
    lot: `shiba-park`,
    site: DA(`shiba-park`),
    name: { ja: `芝公園`, zh: `芝公園`, en: `Shiba Park` },
    near: 200,
    *build(e, t) {
      let n = OA(t.plan, `shiba-park`),
        r = n.w / 2 - 2,
        i = n.d / 2 - 2;
      e.col(12168596).mat(0.95);
      let a = [
        [-r, -2.5, r, 2.5],
        [-r * 0.45 - 2.5, -i, -r * 0.45 + 2.5, i],
        [r * 0.4 - 2.5, -i, r * 0.4 + 2.5, i],
      ];
      for (let [n, r, i, o] of a) e.flat(n, r, i, o, 0.03, t.c(`gravel`), 4, 4);
      (bve(e, t, n),
        yield,
        MA(
          e,
          -r,
          -i,
          r,
          Math.min(i - 9, NA - n.z - 2),
          11,
          7101,
          (e, t) =>
            a.some(
              ([n, r, i, a]) =>
                e > n - 2 && e < i + 2 && t > r - 2 && t < a + 2,
            ),
          0.25,
          10,
          18,
        ),
        yield);
      for (let n = -r + 10; n < r - 6; n += 18)
        (jA(e, t, n, 4.2), jA(e, t, n + 9, -4.2), qC(e, n + 4.5, 0, 3.4, 4.2));
    },
    far(e, t) {
      let n = OA(t.plan, `shiba-park`);
      (e.col(3099180).mat(1),
        e.box(
          -n.w / 2 + 3,
          0,
          -n.d / 2 + 3,
          n.w / 2 - 3,
          12,
          Math.min(n.d / 2 - 3, NA - n.z - 1),
          t.c(`white`),
        ));
    },
    farBoxes: (e, t) => {
      let n = OA(e, `shiba-park`);
      return [
        {
          x0: t.x - n.w / 2 + 3,
          x1: t.x + n.w / 2 - 3,
          z0: t.z - n.d / 2 + 3,
          z1: Math.min(t.z + n.d / 2 - 3, 1118),
          y0: t.gy,
          y1: t.gy + 12,
          rgb: [0.15, 0.25, 0.14],
        },
      ];
    },
  },
  Sve = {
    id: `sumida-park-trees`,
    lot: `sumida-park`,
    site: DA(`sumida-park`),
    name: { ja: `隅田公園`, zh: `隅田公園`, en: `Sumida Park` },
    near: 200,
    *build(e, t) {
      let n = OA(t.plan, `sumida-park`),
        r = n.w / 2,
        i = n.d / 2;
      (e.col(10986394).mat(0.9),
        e.flat(r - 9, -i + 1, r - 0.6, i - 1, 0.03, t.c(`paving`), 3, 3),
        e.col(5595230).mat(0.6, 0.4),
        e.rod(r - 0.4, 1.05, -i + 1, r - 0.4, 1.05, i - 1, 0.05));
      for (let t = -i + 1; t <= i - 1; t += e.coarse ? 6 : 2)
        e.rod(r - 0.4, 0, t, r - 0.4, 1.05, t, 0.03);
      (e.solid(r - 0.6, -i + 1, r - 0.2, i - 1, 0, 1.1), yield);
      let a = AA(7202);
      for (let t = -i + 5; t < i - 4; t += 8)
        for (let n of [r - 11.5, r - 2.2])
          (KC(
            e,
            n + (a() - 0.5),
            t + (a() - 0.5) * 2,
            8 + a() * 2.5,
            Math.floor(a() * 1e6),
          ),
            e.pole(n, t, 0.3, 0, 3));
      (MA(e, -r + 2, -i + 2, r - 14, i - 2, 10, 7203, () => !1, 0.2, 9, 14),
        yield);
      for (let n = -i + 9; n < i - 6; n += 16)
        (jA(e, t, r - 7.5, n, !0), qC(e, r - 6.6, 0, n + 8, 4.2));
    },
    far(e, t) {
      let n = OA(t.plan, `sumida-park`);
      (e.col(3099180).mat(1),
        e.box(
          -n.w / 2 + 2,
          0,
          -n.d / 2 + 2,
          n.w / 2 - 2,
          9,
          n.d / 2 - 2,
          t.c(`white`),
        ));
    },
    farBoxes: (e, t) => {
      let n = OA(e, `sumida-park`);
      return [
        {
          x0: t.x - n.w / 2 + 2,
          x1: t.x + n.w / 2 - 2,
          z0: t.z - n.d / 2 + 2,
          z1: t.z + n.d / 2 - 2,
          y0: t.gy,
          y1: t.gy + 9,
          rgb: [0.15, 0.25, 0.14],
        },
      ];
    },
  },
  PA = [15902648, 10474470, 16175723, 11985057, 15771752, 13087464],
  Cve = {
    id: `hanayashiki`,
    site: DA(`hanayashiki`),
    name: { ja: `浅草花やしき`, zh: `淺草花屋敷`, en: `Asakusa Hanayashiki` },
    near: 240,
    *build(e, t) {
      let n = OA(t.plan, `hanayashiki`),
        r = n.w / 2 - 0.5,
        i = n.d / 2 - 0.5;
      e.col(15260866).mat(0.9);
      let a = [
        [-r, -i, r, -i + 0.4],
        [-r, i - 0.4, r, i],
        [r - 0.4, -i, r, i],
        [-r, -i, -r + 0.4, -3],
        [-r, 3, -r + 0.4, i],
      ];
      for (let [n, r, i, o] of a)
        (e.box(n, 0, r, i, 3.2, o, t.c(`plaster`), 2, 2),
          e.solid(n, r, i, o, 0, 3.2));
      e.col(13120042).mat(0.6);
      for (let n of [-1, 1])
        e.box(
          -r - 0.3,
          0,
          (n * 6) / 2 - 0.5,
          -r + 0.7,
          5.5,
          (n * 6) / 2 + 0.5,
          t.c(`white`),
        );
      (e.box(-r - 0.4, 5.5, -3.6, -r + 0.6, 6.6, 3.6, t.c(`white`)),
        e.col(16773576).mat(0.4, 0, 1.8, G));
      for (let n = -3; n <= 3.01; n += 1.5)
        e.box(-r - 0.1, 6.6, n - 0.15, -r + 0.2, 6.9, n + 0.15, t.c(`white`));
      yield;
      let o = AA(7301),
        s = [
          [-r + 2, -i + 2, -r + 12, -i + 14, 6],
          [-r + 2, i - 14, -r + 12, i - 2, 5],
          [r - 12, -i + 2, r - 2, -i + 11, 7],
          [r - 11, i - 14, r - 2, i - 4, 5],
        ];
      for (let [n, r, i, a, c] of s)
        (e.col(PA[Math.floor(o() * PA.length)]).mat(0.8, 0, 0.12, G),
          e.box(n, 0, r, i, c, a, t.c(`plaster`), 2, 2),
          e.col(PA[Math.floor(o() * PA.length)]).mat(0.7),
          e.box(n - 0.4, c, r - 0.4, i + 0.4, c + 0.5, a + 0.4, t.c(`white`)),
          e.solid(n, r, i, a, 0, c));
      (yield,
        e.col(15975226).mat(0.6, 0.3),
        e.cylY(-4, -6, 0, 45, 0.9, 10, 0.7),
        e.col(3355443).mat(0.5, 0.4),
        e.lathe(-4, -6, [1.2, 0, 2.4, 0.4, 2.4, 1.2, 1, 1.6], 10),
        e.col(15975226).mat(0.6, 0.3),
        e.lathe(-4, -6, [0.8, 34, 5.2, 34.3, 5.2, 34.7, 0.8, 35], 12));
      for (let n = 0; n < (e.coarse ? 6 : 12); n++) {
        let r = (n / (e.coarse ? 6 : 12)) * Math.PI * 2,
          i = -4 + Math.cos(r) * 5,
          a = -6 + Math.sin(r) * 5;
        (e.col(PA[n % PA.length]).mat(0.6, 0, 0.5, 1),
          e.box(i - 0.7, 32.2, a - 0.7, i + 0.7, 34, a + 0.7, t.c(`white`)));
      }
      (e.col(16719888).mat(0.4, 0, 3, 1),
        e.box(-4.3, 45, -6.3, -3.7, 45.6, -5.7, t.c(`white`)),
        e.pole(-4, -6, 1.1, 0, 45),
        yield);
      let c = e.coarse ? 24 : 64,
        l = [];
      for (let e = 0; e < c; e++) {
        let t = (e / c) * Math.PI * 2,
          n = Math.cos(t) * (r - 5) * (1 + 0.12 * Math.sin(3 * t)),
          a = Math.sin(t) * (i - 6) * (1 + 0.08 * Math.cos(2 * t)),
          o = 7.5 + 2.2 * Math.sin(2 * t + 0.6) + 1.2 * Math.sin(5 * t);
        l.push([n, o, a]);
      }
      for (let t = 0; t < c; t++) {
        let [n, r, i] = l[t],
          [a, o, s] = l[(t + 1) % c],
          u = a - n,
          d = s - i,
          f = Math.hypot(u, d) || 1,
          p = -d / f,
          m = u / f;
        e.col(14211288).mat(0.5, 0.5);
        for (let t of [-0.45, 0.45])
          e.rod(n + p * t, r, i + m * t, a + p * t, o, s + m * t, 0.07, 4);
        (e.col(4026292).mat(0.6, 0.3),
          e.rod(n, r - 0.35, i, a, o - 0.35, s, 0.12, 4),
          t % (e.coarse ? 2 : 3) == 0 &&
            (e.col(3103644).mat(0.6, 0.3),
            e.rod(n, 0, i, n, r - 0.4, i, 0.13, 4),
            e.pole(n, i, 0.2, 0, r)));
      }
      for (let n = 0; n < 5; n++) {
        let [r, i, a] = l[(n * 2) % c];
        (e.col(PA[n % PA.length]).mat(0.5, 0.2),
          e.box(
            r - 0.6,
            i + 0.05,
            a - 0.6,
            r + 0.6,
            i + 0.85,
            a + 0.6,
            t.c(`white`),
          ));
      }
      (KC(e, r - 6, 0, 8, 7311), KC(e, -r + 7, 2, 7, 7312));
    },
    far(e, t) {
      (e.col(15975226).mat(0.6), e.cylY(-4, -6, 0, 45, 1, 6, 0.8));
      let n = OA(t.plan, `hanayashiki`);
      (e.col(15260866).mat(0.9),
        e.box(
          -n.w / 2 + 0.5,
          0,
          -n.d / 2 + 0.5,
          n.w / 2 - 0.5,
          8,
          n.d / 2 - 0.5,
          t.c(`white`),
        ));
    },
    farBoxes: (e, t) => {
      let n = OA(e, `hanayashiki`);
      return [
        {
          x0: t.x - n.w / 2,
          x1: t.x + n.w / 2,
          z0: t.z - n.d / 2,
          z1: t.z + n.d / 2,
          y0: t.gy,
          y1: t.gy + 8,
          rgb: [0.8, 0.72, 0.6],
        },
        {
          x0: t.x - 5,
          x1: t.x - 3,
          z0: t.z - 7,
          z1: t.z - 5,
          y0: t.gy,
          y1: t.gy + 45,
          rgb: [0.85, 0.7, 0.2],
        },
      ];
    },
  };
function wve(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = e[(n + 1) % e.length];
    t += Math.hypot(i[0] - r[0], i[1] - r[1]);
  }
  return t;
}
