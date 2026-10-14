// tokyo/assets/world-Bo9wkXrT 64 — setcolor
// Lines 20365-20852 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function Vm(e, t, n, r, i) {
  let a = n.bounds,
    o = new Oe(29134),
    s = [],
    c = [],
    l = (e, n) => t.height(e, n),
    u = (e, t) => Math.abs(l(e, t) - 0.15) < 0.9,
    d = n.roads.filter(
      (e) =>
        e.axis === `x` &&
        e.from <= a.minX + 1 &&
        !e.pedestrian &&
        Math.abs(e.at - a.minZ) > 30,
    ),
    f = n.roads.filter(
      (e) =>
        e.axis === `z` &&
        e.from <= a.minZ + 1 &&
        !e.pedestrian &&
        Math.abs(e.at - a.minX) > 30,
    );
  (d.sort((e, t) => e.at - t.at), f.sort((e, t) => e.at - t.at));
  let p = 3,
    m = d.map((e) => ({ c: e.at, half: e.halfTotal, n: p++ })),
    h = (e, t = 0) => !1,
    g = f
      .map((e) => ({ c: e.at, half: e.halfTotal, n: p++ }))
      .filter((e) => !h(e.c, e.half)),
    _ = [],
    v = a.minX - 0.2 - Bm,
    y = a.minX - 0.2,
    b = a.minZ - 0.2 - Bm,
    x = a.minZ - 0.2,
    S = 2.8,
    C = (e, t, n, r) => {
      let i = [],
        a = t;
      for (let e of r) {
        let t = e.c - e.half - S,
          n = e.c + e.half + S;
        (t > a && i.push([a, t]), (a = Math.max(a, n)));
      }
      a < n && i.push([a, n]);
      for (let [t, n] of i) w(e, t, n);
      for (let t of r) T(e, t);
    },
    w = (t, n, i) => {
      let a = zm;
      if (t === `z`) {
        (e.setColor(0.4, 0.395, 0.375),
          e.boxMinMax(v, -0.6, n, y, a, i, 5),
          e.setColor(0.25, 0.25, 0.235),
          e.quad(v, -0.6, n, v, -0.6, i, v, 1, i, v, 1, n),
          e.setColor(0.43, 0.425, 0.4),
          e.quad(v, 1, n, v, 1, i, v, a, i, v, a, n),
          e.setColor(0.52, 0.51, 0.49),
          e.boxMinMax(v - 0.25, a, n, y + 0.15, 4.8, i, 7));
        for (let t = n + 8; t + 7 < i - 4; t += 26 + o.range(0, 30)) {
          if (!o.chance(0.62)) continue;
          let n = 6.4;
          (e.setColor(1, 1, 1),
            e.quad(
              v - 0.03,
              1.1,
              t,
              v - 0.03,
              1.1,
              t + n,
              v - 0.03,
              4.2,
              t + n,
              v - 0.03,
              4.2,
              t,
              Em(o.int(0, 11)),
            ),
            (t += n));
        }
        r?.addBox(v, n, y, i, -1, 4.8, `wall`);
      } else {
        (e.setColor(0.4, 0.395, 0.375),
          e.boxMinMax(n, -0.6, b, i, a, x, 20),
          e.setColor(0.25, 0.25, 0.235),
          e.quad(i, -0.6, b, n, -0.6, b, n, 1, b, i, 1, b),
          e.setColor(0.43, 0.425, 0.4),
          e.quad(i, 1, b, n, 1, b, n, a, b, i, a, b),
          e.setColor(0.52, 0.51, 0.49),
          e.boxMinMax(n, a, b - 0.25, i, 4.8, x + 0.15, 52));
        for (let t = n + 8; t + 7 < i - 4; t += 26 + o.range(0, 30)) {
          if (!o.chance(0.62)) continue;
          let n = 6.4;
          (e.setColor(1, 1, 1),
            e.quad(
              t + n,
              1.1,
              b - 0.03,
              t,
              1.1,
              b - 0.03,
              t,
              4.2,
              b - 0.03,
              t + n,
              4.2,
              b - 0.03,
              Em(o.int(0, 11)),
            ),
            (t += n));
        }
        r?.addBox(n, b, i, x, -1, 4.8, `wall`);
      }
    },
    T = (t, n) => {
      let a = -0.4,
        o = 5.7,
        s = n.c - n.half - S,
        l = n.c + n.half + S;
      if (t === `z`) {
        let t = (v + y) / 2;
        _.push({ x: t, z: n.c, n: n.n, axis: `x` });
        for (let [t, o] of [
          [s, n.c - n.half],
          [n.c + n.half, l],
        ])
          (e.setColor(0.47, 0.46, 0.44),
            e.boxMinMax(v - 0.4, a, t, y + 0.4, 7, o),
            r?.addBox(v - 0.4, t, y + 0.4, o, -1, 7, `wall`),
            e.setColor(0.18, 0.3, 0.34),
            e.boxMinMax(
              v - 1.2,
              0.1,
              t < n.c ? t - 7 : o,
              v - 0.5,
              4.2,
              t < n.c ? t : o + 7,
            ),
            e.setColor(1, 0.85, 0.6).setEmit(3, 0),
            e.boxMinMax(
              v - 0.7,
              4.8,
              (t + o) / 2 - 0.3,
              v - 0.4,
              5.3,
              (t + o) / 2 + 0.3,
            ),
            e.noEmit(),
            i?.add(v - 3, 0.3, (t + o) / 2, 5, 1, 0.8, 0.55, 0.28));
        (e.setColor(0.45, 0.44, 0.42),
          e.boxMinMax(v - 0.4, o, n.c - n.half, y + 0.4, 7, n.c + n.half, 15));
        let d = 7.2,
          f = 5.72;
        (e.setColor(1, 1, 1).setEmit(0.55, 0),
          e.quad(
            v - 0.43,
            f,
            n.c - d / 2,
            v - 0.43,
            f,
            n.c + d / 2,
            v - 0.43,
            7.02,
            n.c + d / 2,
            v - 0.43,
            7.02,
            n.c - d / 2,
            Sm(n.n),
          ),
          e.quad(
            y + 0.43,
            f,
            n.c + d / 2,
            y + 0.43,
            f,
            n.c - d / 2,
            y + 0.43,
            7.02,
            n.c - d / 2,
            y + 0.43,
            7.02,
            n.c + d / 2,
            Sm(n.n),
          ),
          e.noEmit(),
          u(v - 8, n.c) &&
            (e.setColor(0.38, 0.37, 0.35),
            e.flat(v - 16, n.c - n.half * 0.6, v, n.c + n.half * 0.6, 0.2),
            e.flat(-928.3, n.c - 3, v - 16, n.c + 3, 0.2),
            c.push([v - 17, n.c - n.half - 2, y + 1, n.c + n.half + 2])));
      } else {
        let t = (b + x) / 2;
        _.push({ x: n.c, z: t, n: n.n, axis: `z` });
        for (let [t, i] of [
          [s, n.c - n.half],
          [n.c + n.half, l],
        ])
          (e.setColor(0.47, 0.46, 0.44),
            e.boxMinMax(t, a, b - 0.4, i, 7, x + 0.4),
            r?.addBox(t, b - 0.4, i, x + 0.4, -1, 7, `wall`),
            e.setColor(0.18, 0.3, 0.34),
            e.boxMinMax(
              t < n.c ? t - 7 : i,
              0.1,
              b - 1.2,
              t < n.c ? t : i + 7,
              4.2,
              b - 0.5,
            ),
            e.setColor(1, 0.85, 0.6).setEmit(3, 0),
            e.boxMinMax(
              (t + i) / 2 - 0.3,
              4.8,
              b - 0.7,
              (t + i) / 2 + 0.3,
              5.3,
              b - 0.4,
            ),
            e.noEmit());
        (e.setColor(0.45, 0.44, 0.42),
          e.boxMinMax(n.c - n.half, o, b - 0.4, n.c + n.half, 7, x + 0.4, 60));
        let i = 7.2,
          d = 5.72;
        (e.setColor(1, 1, 1).setEmit(0.55, 0),
          e.quad(
            n.c + i / 2,
            d,
            b - 0.43,
            n.c - i / 2,
            d,
            b - 0.43,
            n.c - i / 2,
            7.02,
            b - 0.43,
            n.c + i / 2,
            7.02,
            b - 0.43,
            Sm(n.n),
          ),
          e.quad(
            n.c - i / 2,
            d,
            x + 0.43,
            n.c + i / 2,
            d,
            x + 0.43,
            n.c + i / 2,
            7.02,
            x + 0.43,
            n.c - i / 2,
            7.02,
            x + 0.43,
            Sm(n.n),
          ),
          e.noEmit(),
          u(n.c, b - 8) &&
            (e.setColor(0.38, 0.37, 0.35),
            e.flat(n.c - n.half * 0.6, b - 16, n.c + n.half * 0.6, b, 0.2)),
          c.push([n.c - n.half - 2, b - 17, n.c + n.half + 2, x + 1]));
      }
    };
  (C(`z`, b, a.maxZ + 60, m),
    C(`x`, v, a.maxX + 4, g),
    e.setColor(0.47, 0.46, 0.44),
    e.boxMinMax(v - 0.4, -0.4, b - 0.4, v + Bm + 0.4, 5.1, b + Bm + 0.4));
  {
    let t = n.roads.find(
        (e) => e.axis === `z` && e.major && Math.abs(e.at - (a.minX + 30)) < 20,
      ),
      r = t ? t.at - t.halfTotal - 0.4 : a.minX + 17;
    if (r - y > 4) {
      let t = x + 1,
        n = m.map((e) => [e.c - e.half - 0.5, e.c + e.half + 0.5]),
        i = [];
      for (let [e, r] of n) (e > t && i.push([t, e]), (t = Math.max(t, r)));
      i.push([t, a.maxZ - 2]);
      for (let [t, n] of i)
        if (!(n - t < 6)) {
          (e.setColor(0.36, 0.35, 0.33),
            e.boxMinMax(y + 0.6, 0, t, r, 0.3, n, 55),
            e.setColor(0.13, 0.21, 0.07),
            e.flat(y + 0.8, t + 0.2, r - 0.2, n - 0.2, 0.3 + Re.GROUND));
          for (let e = t + 5; e < n - 4; e += 13 + o.range(0, 6))
            s.push({
              x: (y + r) / 2 + o.range(-1.5, 1.5),
              z: e,
              y: 0.3,
              s: o.range(0.42, 0.58),
            });
        }
    }
  }
  let E =
      m.find((e) => Math.abs(e.c - -440) < 30) ?? m[Math.floor(m.length / 2)],
    D = { x: (Ye + v) / 2, z: E ? E.c : -440 },
    O = D.z - 58,
    k = D.z + 58,
    A = (() => {
      let e = m.find((e) => Math.abs(e.c - 120) < 40);
      return e ? e.c + e.half + 32 : 190;
    })(),
    j = { x0: -958.5, x1: -939.5, z0: A - 16, z1: A + 16 };
  (c.push([Ye - 30, O - 2, v, k + 2]),
    c.push([j.x0 - 2, j.z0 - 2, j.x1 + 2, j.z1 + 2]));
  let M = (e) => e > O && e < k,
    N = (e, t) => e > j.x0 - 1 && e < j.x1 + 1 && t > j.z0 - 1 && t < j.z1 + 1,
    P = (e, t) => m.some((n) => Math.abs(e - n.c) < n.half * 0.6 + t),
    F = [],
    ee = (e) => (
      e &&
        Math.hypot(e.b.x - e.a.x, e.b.z - e.a.z) > 11 &&
        F.push({ kind: e.kind, width: e.width, y: e.y, points: [e.a, e.b] }),
      null
    ),
    I = (e, t, n, r, i, a, o, s) =>
      e
        ? ((e.b = { x: o, z: s }), e)
        : { kind: t, width: n, y: r, a: { x: i, z: a }, b: { x: o, z: s } },
    L = null,
    R = null,
    te = b - 30,
    ne = a.maxZ + 620,
    re = 0,
    z = Ye,
    ie = 0;
  for (let t = te; t < ne; t += 6) {
    ie++;
    let n = t + 6,
      c = t + 3;
    if (!u(-930, c) || !u(-950, c)) {
      ((L = ee(L)), (R = ee(R)));
      continue;
    }
    let d = t > a.maxZ + 60;
    if (!M(c)) {
      (e.setColor(0.34, 0.335, 0.32),
        e.flat(z, t, z + 2.8, n, 0.24),
        e.setColor(0.23, 0.23, 0.215),
        e.quad(z, -2.2, t, z, -2.2, n, z, 0.24, n, z, 0.24, t),
        e.quad(
          z + 2.8,
          0.1,
          n,
          z + 2.8,
          0.1,
          t,
          z + 2.8,
          0.24,
          t,
          z + 2.8,
          0.24,
          n,
        ),
        e.setColor(0.13, 0.19, 0.17));
      for (let r = t; r < n - 0.1; r += 3)
        e.boxMinMax(z + 0.55, 0.24, r - 0.045, z + 0.64, 1.25, r + 0.045, 51);
      (e.boxMinMax(z + 0.53, 1.2, t, z + 0.66, 1.3, n, 7),
        e.boxMinMax(z + 0.56, 0.72, t, z + 0.63, 0.78, n, 7),
        r?.addBox(z + 0.4, t, z + 0.8, n, -1, 1.3, `wall`));
    }
    if (M(c)) L = ee(L);
    else {
      let r = l(-930, c) + 0.04;
      (e.setColor(0.3, 0.095, 0.07),
        e.flat(-931.7, t, -928.3, n, r),
        e.setColor(0.8, 0.8, 0.76),
        e.flat(-931.6, t, -931.45, n, r + 0.004),
        e.flat(-928.55, t, -928.4, n, r + 0.004),
        e.flat(-930.07, t + 1, -929.93, t + 3.4, r + 0.004),
        (L = I(L, `bike`, 3.4, r, -930, t, -930, n)));
    }
    if (!M(c) && !N(-948, c)) {
      e.setColor(0.41, 0.4, 0.37);
      let r = l(-948, c) + 0.035;
      (e.flat(-949.3, t, -946.7, n, r),
        (R = I(R, `walk`, 2.6, r, -948, t, -948, n)));
    } else R = ee(R);
    if (Math.floor(t / 30) !== Math.floor(n / 30) && !P(c, 4) && !M(c)) {
      let t = Math.floor(n / 30) * 30,
        a = l(-926.4, t);
      (e.setColor(0.2, 0.24, 0.22),
        e.boxMinMax(-926.5, a, t - 0.09, -926.3, a + 5.2, t + 0.09),
        e.beam(-926.4, a + 5.1, t, -928.2, a + 5.35, t, 0.1, 0.1),
        e.setColor(0.16, 0.18, 0.18),
        e.boxMinMax(-928.7, a + 5.18, t - 0.24, -927.8, a + 5.36, t + 0.24),
        e.setColor(1, 0.86, 0.62).setEmit(5, 0),
        e.boxMinMax(-928.6, a + 5.12, t - 0.18, -927.9, a + 5.18, t + 0.18, 11),
        e.noEmit(),
        r?.addCircle(-926.4, t, 0.15, a, a + 5.3, `pole`),
        i?.add(-928.3, a + 0.06, t, 7.5, 1, 0.74, 0.44, 0.34),
        re++);
    }
    if (
      Math.floor(t / 42) !== Math.floor(n / 42) &&
      !M(c) &&
      !N(-946, c) &&
      !P(c, 3)
    ) {
      let t = Math.floor(n / 42) * 42,
        i = l(-946, t);
      (e.setColor(0.36, 0.22, 0.12),
        e.boxMinMax(-945.9, i + 0.42, t - 0.9, -945.4, i + 0.5, t + 0.9),
        e.boxMinMax(-945.35, i + 0.5, t - 0.9, -945.25, i + 0.95, t + 0.9),
        e.setColor(0.15, 0.15, 0.15),
        e.boxMinMax(-945.85, i, t - 0.8, -945.3, i + 0.42, t - 0.7),
        e.boxMinMax(-945.85, i, t + 0.7, -945.3, i + 0.42, t + 0.8),
        r?.addBox(-945.95, t - 0.95, -945.2, t + 0.95, i, i + 0.95, `bench`));
    }
    !M(c) && !P(c, 5) && !d
      ? (ie % 3 == 0 &&
          !N(-939, c) &&
          s.push({
            x: -939 + o.range(-1, 1),
            z: c + o.range(-2, 2),
            y: l(-939, c),
            s: o.range(0.5, 0.72),
          }),
        ie % 3 == 1 &&
          s.push({
            x: -915.5 + o.range(-1.5, 1.5),
            z: c + o.range(-2, 2),
            y: l(-916, c),
            s: o.range(0.55, 0.8),
          }),
        ie % 5 == 2 &&
          !N(-953, c) &&
          s.push({
            x: -953.5 + o.range(-0.8, 0.8),
            z: c + o.range(-2, 2),
            y: l(-953, c),
            s: o.range(0.45, 0.62),
          }))
      : d &&
        o.chance(0.4) &&
        s.push({
          x: o.range(-945, -905),
          z: c,
          y: l(-925, c),
          s: o.range(0.6, 0.95),
        });
  }
  ((L = ee(L)), (R = ee(R)), c.push([z - 2, te, v, ne]));
  for (let t = v - 40; t < a.maxX; t += 6) {
    let n = t + 3,
      a = -995;
    if (
      !u(n, a) ||
      !u(n, -1020) ||
      g.some((e) => Math.abs(n - e.c) < e.half * 0.6) ||
      h(t, 1) ||
      h(t + 6, 1)
    ) {
      L = ee(L);
      continue;
    }
    let o = l(n, a) + 0.04;
    ((L = I(L, `bike`, 3.4, o, t, a, t + 6, a)),
      e.setColor(0.3, 0.095, 0.07),
      e.flat(t, -996.7, t + 6, -993.3, o),
      e.setColor(0.8, 0.8, 0.76),
      e.flat(t + 1, -995.07, t + 3.4, -994.93, o + 0.004),
      e.setColor(0.34, 0.335, 0.32),
      e.flat(t, -1030, t + 6, -1027.2, 0.24),
      e.setColor(0.13, 0.19, 0.17),
      e.boxMinMax(t, 1.2, -1029.47, t + 6, 1.3, -1029.34, 7));
    for (let n = t; n < t + 6 - 0.1; n += 2)
      e.boxMinMax(n - 0.045, 0.24, -1029.45, n + 0.045, 1.25, -1029.36, 60);
    if (
      (r?.addBox(t, -1029.6, t + 6, -1029.2, -1, 1.3, `wall`),
      Math.floor(t / 30) !== Math.floor((t + 6) / 30))
    ) {
      let n = Math.floor((t + 6) / 30) * 30;
      (e.setColor(0.2, 0.24, 0.22),
        e.boxMinMax(n - 0.09, o, -991.7, n + 0.09, o + 5.2, -991.5),
        e.setColor(0.16, 0.18, 0.18),
        e.boxMinMax(n - 0.24, o + 5.18, -993.8, n + 0.24, o + 5.36, -992.9),
        e.setColor(1, 0.86, 0.62).setEmit(5, 0),
        e.boxMinMax(n - 0.18, o + 5.12, -993.7, n + 0.18, o + 5.18, -993, 56),
        e.noEmit(),
        i?.add(n, o + 0.06, -993.4, 7.5, 1, 0.74, 0.44, 0.34),
        re++);
    }
  }
  return (
    (L = ee(L)),
    Um(e, D, O, k, v, r, o, i),
    Wm(e, j, r),
    { trees: s, blocked: Hm(c), gates: _, wharf: D, lampCount: re, paths: F }
  );
}
