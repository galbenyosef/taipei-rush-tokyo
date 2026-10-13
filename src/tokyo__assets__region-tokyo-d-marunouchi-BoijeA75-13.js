// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 13 — push
// Lines 3673-4008 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function It(e) {
  let t = [],
    n = new Set();
  for (let r of e.plan.links) {
    if (r.road.id !== `gyoko`) continue;
    let e = Math.min(r.sx, r.ex) + 1.5,
      i = Math.max(r.sx, r.ex) - 1.5,
      a = `${Math.round(e)}|${Math.round(i)}`;
    i <= e || n.has(a) || (n.add(a), t.push([e, i]));
  }
  return t.sort((e, t) => e[0] - t[0]);
}
function Lt(e, i, a) {
  let o = [],
    s = [],
    c = [],
    l = e.plan.sidewalkHeight ?? 0.15,
    u = new t(r(`maru-kit`, 1)),
    d = new n(8192, 12288),
    f = (e, t) => {
      (d.reset(), t(d), d.n && c.push({ name: e, geo: te(d, `maru-${e}`) }));
    },
    m = i.uv(`pave:gyoko`),
    h = It(e);
  h.forEach(([e, t], n) =>
    f(`pave-gyoko-${n}`, (n) => {
      (n.setMaterial(0.55, 0, 0, 0),
        _(n, 16777215),
        K(
          n,
          e,
          S.z - (S.median - 0.3),
          t,
          S.z + (S.median - 0.3),
          l + 0.018,
          m,
          4,
        ));
    }),
  );
  for (let [e, t] of h) {
    for (let [n, r] of [
      [6.5, 0],
      [4.4, 5],
    ])
      for (let i of [-1, 1])
        for (let a = e + 2.5 + r; a < t - 2; a += 10)
          (o.push({
            model: `ginkgo`,
            tree: !0,
            x: a,
            y: l,
            z: i * n,
            fx: Math.cos(a),
            fz: Math.sin(a),
            s: 0.92 + u.next() * 0.16,
            range: 380,
          }),
            o.push({
              model: `lights-ginkgo`,
              x: a,
              y: l,
              z: i * n,
              fx: Math.cos(a),
              fz: Math.sin(a),
              range: 320,
              when: `illum-gyoko`,
            }),
            s.push({ x: a, z: i * n, r: 0.25, h: l + 3 }));
    for (let n of [-1, 1])
      for (let r = e + 6.5; r < t - 3; r += 24)
        (o.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: n * 2.8,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          s.push({ x: r, z: n * 2.8, r: 0.1, h: l + 6 }));
  }
  for (let [e, t] of p(S.x0 - 17.25, S.x1, C))
    for (let n of [-1, 1])
      for (let r = e + 5; r < t - 3; r += 30) {
        let e = n * (S.lanes + 0.6);
        (o.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: e,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          s.push({ x: r, z: e, r: 0.1, h: l + 6 }));
      }
  let g = i.uv(`pave:naka`);
  p(T.z0, T.z1, ie, 0.6).forEach(([e, t], n) =>
    f(`pave-naka-${n}`, (n) => {
      (n.setMaterial(0.7, 0, 0, 0),
        _(n, 16777215),
        K(
          n,
          T.x - T.edge + 0.05,
          e,
          T.x - T.carriage - 0.05,
          t,
          l + 0.018,
          g,
          3,
        ),
        K(
          n,
          T.x + T.carriage + 0.05,
          e,
          T.x + T.edge - 0.05,
          t,
          l + 0.018,
          g,
          3,
        ));
    }),
  );
  let v = p(T.z0, T.z1, ie),
    b = 0,
    x = [-142, -60, 34, 92, 170, 290];
  for (let [e, t] of v) {
    for (let n of [-1, 1]) {
      let r = T.x + n * (T.carriage + 1.15),
        i = 0;
      for (let c = e + 3 + (n > 0 ? 5 : 0); c < t - 2; c += 10, i++) {
        let e =
            (Math.floor((c + 400) / 30) + +(n > 0)) % 3 == 2
              ? `katsura`
              : `naka`,
          d = Math.cos(c * 1.7),
          f = Math.sin(c * 1.7);
        (o.push({
          model: e,
          tree: !0,
          x: r,
          y: l,
          z: c,
          fx: d,
          fz: f,
          s: 0.9 + u.next() * 0.18,
          range: 340,
        }),
          o.push({
            model: `lights-naka`,
            x: r,
            y: l,
            z: c,
            fx: d,
            fz: f,
            range: 300,
            when: `illum`,
          }),
          s.push({ x: r, z: c, r: 0.25, h: l + 3 }));
        let p = c + 5;
        p > t - 2 ||
          (i % 2 == 0
            ? (o.push({
                model: `lamp-naka`,
                x: r,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 240,
              }),
              s.push({ x: r, z: p, r: 0.1, h: l + 5 }))
            : i % 4 == 1 &&
              o.push({
                model: `bench`,
                x: r + n * 0.1,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 120,
              }),
          i % 3 == 1 &&
            a > 0 &&
            o.push({
              model: `planter`,
              x: T.x + n * (T.edge - 0.7),
              y: l,
              z: p,
              fx: -n,
              fz: 0,
              range: 110,
            }));
      }
    }
    for (let n of x) {
      if (n < e + 2 || n > t - 2) continue;
      let r = b % 2 ? 1 : -1,
        i = T.x + r * (T.carriage + 1.4);
      (o.push({
        model: `sculpt-${(b % 6) + 1}`,
        x: i,
        y: l,
        z: n + 2.5,
        fx: r,
        fz: 0,
        range: 200,
      }),
        s.push({ x: i, z: n + 2.5, r: 0.8, h: l + 2.5 }),
        b++);
    }
  }
  for (let [e, t] of v)
    if (!(t < 20 || e > 112))
      for (let n of [-1, 1]) {
        let r = T.x + n * (T.edge - 2);
        for (let n = e + 4; n < t - 3; n += 4.6)
          o.push({
            model: `terrace-set`,
            x: r,
            y: l,
            z: n,
            fx: 0,
            fz: 1,
            range: 140,
            when: `terrace`,
          });
        o.push({
          model: `terrace-sign`,
          x: T.x + n * (T.carriage + 2.6),
          y: l,
          z: e + 1.5,
          fx: 0,
          fz: -1,
          range: 90,
          when: `terrace`,
        });
      }
  let w = k;
  for (let e = 0; e < 3; e++) {
    let t = w.x0 + 4.5 + e * 8,
      n = w.z0 + 1.6;
    (o.push({
      model: `truck-${(e % 4) + 1}`,
      x: t,
      y: l,
      z: n,
      fx: 0,
      fz: 1,
      range: 200,
      when: `trucks`,
    }),
      s.push(
        { x: t - 0.4, z: n, r: 1.4, h: l + 2.8 },
        { x: t + 1.6, z: n, r: 1.2, h: l + 2.8 },
      ));
  }
  o.push({
    model: `queue-card`,
    x: w.x0 + 6,
    y: l,
    z: w.z1 - 0.4,
    fx: 0,
    fz: -1,
    range: 80,
    when: `trucks`,
  });
  for (let e of [-62, 46, 230])
    (o.push({
      model: `run-sign`,
      x: y.wall + 0.7,
      y: l,
      z: e,
      fx: 0,
      fz: 1,
      range: 120,
    }),
      s.push({ x: y.wall + 0.7, z: e, r: 0.45, h: l + 2.1 }));
  return { instances: o, circles: s, strips: c, tris: 0 };
}
var Rt = (e, t) => `${e}-${t}`,
  zt = e({
    illumOn: () => Jt,
    init: () => Xt,
    start: () => Zt,
    unload: () => nn,
    update: () => tn,
  }),
  Bt = [
    { id: `en`, fn: yt, cx: -111, cz: 47, range: 1100 },
    { id: `shinen`, fn: bt, cx: -111, cz: -37, range: 1100 },
    { id: `hagaki`, fn: xt, cx: -111, cz: 93, range: 1100 },
    { id: `ichigokan`, fn: St, cx: -167, cz: 91, range: 1e3 },
    { id: `colonnade`, fn: Et, cx: -278, cz: 91, range: 900 },
    { id: `site`, fn: Dt, cx: -278, cz: -58, range: 800 },
    { id: `masakado`, fn: Ot, cx: -278, cz: -142, range: 1e3 },
    { id: `otemachi`, fn: Mt, cx: -112, cz: -142, range: 1100 },
  ],
  Z = null,
  Vt = !1,
  Q = !1,
  Ht = -1,
  Ut = [],
  Wt = Error(`marunouchi: dropped while building`),
  Gt = new Float32Array(16);
function Kt(e) {
  for (let [t, n] of Object.entries(x))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[marunouchi] block ${t} no longer matches the plan (data.ts BLOCKS)`,
      );
}
var $ = (e, t) => e * 100 + t;
function qt(e) {
  let t = e.time.date;
  return {
    y: t?.y ?? 2026,
    m: t?.m ?? 10,
    d: t?.d ?? 7,
    wd: e.time.weekday ?? 3,
  };
}
function Jt(e, t, n = !1) {
  let r = $(e, t);
  return n
    ? r >= $(f.gyokoFrom[0], f.gyokoFrom[1]) &&
        r <= $(f.gyokoTo[0], f.gyokoTo[1])
    : r >= $(f.from[0], f.from[1]) || r <= $(f.to[0], f.to[1]);
}
