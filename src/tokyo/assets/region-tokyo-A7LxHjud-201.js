// tokyo/assets/region-tokyo-A7LxHjud 201 — col
// Lines 79844-80061 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var vve = {
    id: `azumabashi`,
    site: SA(`ne-asakusa`),
    name: { ja: `吾妻橋`, zh: `吾妻橋`, en: `Azumabashi` },
    near: 260,
    *build(e, t) {
      let { w: n, c: r } = CA(t.plan, `ne-asakusa`),
        i = 12728875;
      (wA(e, t, n, r, { parapet: i, lamp: 12.5, ornate: !0 }),
        yield,
        e.col(i).mat(0.55, 0.25));
      for (let r of [-1, 1])
        e.box(0, -1.05, r * n - 0.3, _A, 0.18, r * n + 0.3, t.c(`white`));
      let a = vA / 3,
        o = [0, 1, 2].map((e) => [e * a, (e + 1) * a]),
        s = [-0.82, -0.3, 0.3, 0.82].map((e) => e * n),
        c = e.coarse ? 6 : 14;
      for (let [t, n] of o) {
        let r = (e) => {
          let r = ((e - t) / (n - t)) * 2 - 1;
          return -1.85 + 1.2000000000000002 * (1 - r * r);
        };
        for (let a of s) {
          e.col(i).mat(0.55, 0.25);
          let o = t,
            s = r(t);
          for (let i = 1; i <= c; i++) {
            let l = t + ((n - t) * i) / c,
              u = r(l);
            (e.rod(o, s, a, l, u, a, 0.42, 6), (o = l), (s = u));
          }
          if (!e.coarse)
            for (let i = 1; i < 6; i++) {
              let o = t + ((n - t) * i) / 6;
              e.rod(o, r(o), a, o, xA, a, 0.12, 4);
            }
        }
        for (let r of [t + 1.2, n - 1.2])
          e.rod(r, -1.55, s[0], r, -1.55, s[3], 0.15, 4);
      }
      (yield,
        TA(e, t, n, [a, 2 * a]),
        EA(e, t, n),
        e.col(11051414).mat(0.9),
        e.box(-0.8, -3, -n - 0.5, 0.2, xA, n + 0.5, t.c(`granite`), 3, 3));
    },
    far(e, t) {
      let { w: n } = CA(t.plan, `ne-asakusa`);
      (e.col(12728875).mat(0.6), e.box(0, yA, -n, _A, 0.23, n, t.c(`white`)));
    },
    farBoxes: (e, t) => [
      {
        x0: t.x,
        x1: t.x + _A,
        z0: t.z - 12,
        z1: t.z + 12,
        y0: t.gy + yA,
        y1: t.gy + 0.4,
        rgb: [0.62, 0.16, 0.12],
      },
    ],
    bounds: (e, t) => [t.x - 4, t.z - 16, t.x + _A + 4, t.z + 16],
  },
  yve = {
    id: `kototoibashi`,
    site: SA(`ne-kototoi`),
    name: { ja: `言問橋`, zh: `言問橋`, en: `Kototoibashi` },
    near: 240,
    *build(e, t) {
      let { w: n, c: r } = CA(t.plan, `ne-kototoi`),
        i = 7178892;
      (wA(e, t, n, r, { parapet: 9413538, lamp: 18, ornate: !1 }), yield);
      let a = vA / 3,
        o = e.coarse ? 6 : 18;
      for (let r of [-0.85, -0.3, 0.3, 0.85]) {
        let s = r * n;
        e.col(i).mat(0.6, 0.3);
        for (let n = 0; n < 3 * o; n++) {
          let r = (vA * n) / (3 * o),
            i = (vA * (n + 1)) / (3 * o),
            c = ((((r + i) / 2) % a) / a) * 2 - 1,
            l = 0.6 + 0.9 * c * c;
          e.box(r, xA - l, s - 0.25, i, xA, s + 0.25, t.c(`white`));
        }
      }
      for (let r of [-1, 1])
        (e.col(i).mat(0.6, 0.3),
          e.box(0, -1.15, r * n - 0.25, _A, 0.18, r * n + 0.25, t.c(`white`)));
      (TA(e, t, n, [a, 2 * a]),
        EA(e, t, n),
        e.col(11051414).mat(0.9),
        e.box(-0.8, -3, -n - 0.5, 0.2, xA, n + 0.5, t.c(`granite`), 3, 3));
    },
    far(e, t) {
      let { w: n } = CA(t.plan, `ne-kototoi`);
      (e.col(7178892).mat(0.6), e.box(0, yA, -n, _A, 0.23, n, t.c(`white`)));
    },
    farBoxes: (e, t) => [
      {
        x0: t.x,
        x1: t.x + _A,
        z0: t.z - 12,
        z1: t.z + 12,
        y0: t.gy + yA,
        y1: t.gy + 0.4,
        rgb: [0.4, 0.5, 0.5],
      },
    ],
    bounds: (e, t) => [t.x - 4, t.z - 16, t.x + _A + 4, t.z + 16],
  };
r.add({ 淺草花屋敷: `浅草花やしき` });
function DA(e) {
  return (t) => {
    let n = t.landmarks.find((t) => t.id === e);
    return { x: n.x, z: n.z, gy: t.groundHeight(n.x, n.z), facing: 0 };
  };
}
var OA = (e, t) => e.landmarks.find((e) => e.id === t),
  kA = 1,
  AA = (e) => (
    (kA = e >>> 0 || 1),
    () => (kA = (Math.imul(kA, 1664525) + 1013904223) >>> 0) / 4294967296
  );
function jA(e, t, n, r, i = !1) {
  e.push().col(8018492).mat(0.9);
  let [a, o] = i ? [0.25, 0.9] : [0.9, 0.25];
  (e.box(n - a, 0.42, r - o, n + a, 0.48, r + o, t.c(`white`)),
    e.col(3948354).mat(0.6, 0.5));
  for (let a of [-1, 1]) {
    let [o, s] = i ? [n, r + a * 0.75] : [n + a * 0.75, r];
    e.box(o - 0.04, 0, s - 0.2, o + 0.04, 0.42, s + 0.2, t.c(`white`));
  }
  e.pop();
}
function MA(e, t, n, r, i, a, o, s, c = 0.3, l = 9, u = 16) {
  let d = AA(o);
  for (let o = n + a / 2; o < i; o += a)
    for (let n = t + a / 2; n < r; n += a) {
      let t = n + (d() - 0.5) * a * 0.6,
        r = o + (d() - 0.5) * a * 0.6,
        i = d() < c,
        f = l + d() * (u - l),
        p = Math.floor(d() * 1e6);
      s(t, r) ||
        (e.coarse && d() < 0.4) ||
        (i ? GC(e, t, r, f * 0.7, p) : KC(e, t, r, f, p),
        e.pole(t, r, 0.35, 0, 3));
    }
}
function bve(e, t, n) {
  let r = t.site,
    i = n.w / 2,
    a = n.d / 2,
    o = e.coarse ? 6 : 2,
    s = t.c(`ishigaki`),
    c = [
      { a0: -i, a1: i, at: -a, alongX: !0, o: [0, -1] },
      { a0: -a, a1: a, at: -i, alongX: !1, o: [-1, 0] },
    ];
  for (let n of c)
    for (let i = n.a0; i < n.a1 - 0.001; i += o) {
      let a = Math.min(n.a1, i + o),
        c = (e) => (n.alongX ? [e, n.at] : [n.at, e]),
        l = Math.max(
          ...[i, (i + a) / 2, a].map(
            (e) =>
              t.plan.groundHeight(
                r.x + c(e)[0] + n.o[0] * 0.3,
                r.z + c(e)[1] + n.o[1] * 0.3,
              ) - r.gy,
          ),
        );
      if (l < 0.08) continue;
      let [u, d] = c(i),
        [f, p] = c(a);
      (e.col(14735560).mat(0.9, 0, 0.04, 1),
        n.alongX
          ? e.wall(u, d, f, p, -0.3, l + 0.4, s, 2.4, 2.4)
          : e.wall(f, p, u, d, -0.3, l + 0.4, s, 2.4, 2.4),
        e.col(13223098).mat(0.8, 0, 0.05, 1));
      let m = n.o[0] * 0.3,
        h = n.o[1] * 0.3;
      (e.flat(
        Math.min(u, f + m),
        Math.min(d, p + h),
        Math.max(u, f + m),
        Math.max(d, p + h),
        l + 0.4,
      ),
        n.alongX
          ? e.wall(
              f + m,
              p + h,
              u + m,
              d + h,
              l - 0.1,
              l + 0.4,
              t.c(`granite`),
              2,
              1,
            )
          : e.wall(
              u + m,
              d + h,
              f + m,
              p + h,
              l - 0.1,
              l + 0.4,
              t.c(`granite`),
              2,
              1,
            ));
      let [g, _, v, y] = n.alongX
        ? [u, d - 0.3, f, d + 0.3]
        : [u - 0.3, d, u + 0.3, p];
      e.solid(g, _, v, y, 0, l + 0.4, `wall`);
    }
}
