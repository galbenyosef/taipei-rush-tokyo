// tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B 13 — push
// Lines 3673-4008 of readable/tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B.pretty.js (statement-aligned).
function Pt(e) {
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
function Ft(e, r, i) {
  let a = [],
    o = [],
    c = [],
    l = e.plan.sidewalkHeight ?? 0.15,
    u = new t(n(`maru-kit`, 1)),
    d = new s(8192, 12288),
    f = (e, t) => {
      (d.reset(), t(d), d.n && c.push({ name: e, geo: x(d, `maru-${e}`) }));
    },
    m = r.uv(`pave:gyoko`),
    h = Pt(e);
  h.forEach(([e, t], n) =>
    f(`pave-gyoko-${n}`, (n) => {
      (n.setMaterial(0.55, 0, 0, 0),
        g(n, 16777215),
        J(
          n,
          e,
          b.z - (b.median - 0.3),
          t,
          b.z + (b.median - 0.3),
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
        for (let s = e + 2.5 + r; s < t - 2; s += 10)
          (a.push({
            model: `ginkgo`,
            tree: !0,
            x: s,
            y: l,
            z: i * n,
            fx: Math.cos(s),
            fz: Math.sin(s),
            s: 0.92 + u.next() * 0.16,
            range: 380,
          }),
            a.push({
              model: `lights-ginkgo`,
              x: s,
              y: l,
              z: i * n,
              fx: Math.cos(s),
              fz: Math.sin(s),
              range: 320,
              when: `illum-gyoko`,
            }),
            o.push({ x: s, z: i * n, r: 0.25, h: l + 3 }));
    for (let n of [-1, 1])
      for (let r = e + 6.5; r < t - 3; r += 24)
        (a.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: n * 2.8,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          o.push({ x: r, z: n * 2.8, r: 0.1, h: l + 6 }));
  }
  for (let [e, t] of p(b.x0 - 17.25, b.x1, S))
    for (let n of [-1, 1])
      for (let r = e + 5; r < t - 3; r += 30) {
        let e = n * (b.lanes + 0.6);
        (a.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: e,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          o.push({ x: r, z: e, r: 0.1, h: l + 6 }));
      }
  let _ = r.uv(`pave:naka`);
  p(w.z0, w.z1, ne, 0.6).forEach(([e, t], n) =>
    f(`pave-naka-${n}`, (n) => {
      (n.setMaterial(0.7, 0, 0, 0),
        g(n, 16777215),
        J(
          n,
          w.x - w.edge + 0.05,
          e,
          w.x - w.carriage - 0.05,
          t,
          l + 0.018,
          _,
          3,
        ),
        J(
          n,
          w.x + w.carriage + 0.05,
          e,
          w.x + w.edge - 0.05,
          t,
          l + 0.018,
          _,
          3,
        ));
    }),
  );
  let y = p(w.z0, w.z1, ne),
    C = 0,
    T = [-142, -60, 34, 92, 170, 290];
  for (let [e, t] of y) {
    for (let n of [-1, 1]) {
      let r = w.x + n * (w.carriage + 1.15),
        s = 0;
      for (let c = e + 3 + (n > 0 ? 5 : 0); c < t - 2; c += 10, s++) {
        let e =
            (Math.floor((c + 400) / 30) + +(n > 0)) % 3 == 2
              ? `katsura`
              : `naka`,
          d = Math.cos(c * 1.7),
          f = Math.sin(c * 1.7);
        (a.push({
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
          a.push({
            model: `lights-naka`,
            x: r,
            y: l,
            z: c,
            fx: d,
            fz: f,
            range: 300,
            when: `illum`,
          }),
          o.push({ x: r, z: c, r: 0.25, h: l + 3 }));
        let p = c + 5;
        p > t - 2 ||
          (s % 2 == 0
            ? (a.push({
                model: `lamp-naka`,
                x: r,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 240,
              }),
              o.push({ x: r, z: p, r: 0.1, h: l + 5 }))
            : s % 4 == 1 &&
              a.push({
                model: `bench`,
                x: r + n * 0.1,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 120,
              }),
          s % 3 == 1 &&
            i > 0 &&
            a.push({
              model: `planter`,
              x: w.x + n * (w.edge - 0.7),
              y: l,
              z: p,
              fx: -n,
              fz: 0,
              range: 110,
            }));
      }
    }
    for (let n of T) {
      if (n < e + 2 || n > t - 2) continue;
      let r = C % 2 ? 1 : -1,
        i = w.x + r * (w.carriage + 1.4);
      (a.push({
        model: `sculpt-${(C % 6) + 1}`,
        x: i,
        y: l,
        z: n + 2.5,
        fx: r,
        fz: 0,
        range: 200,
      }),
        o.push({ x: i, z: n + 2.5, r: 0.8, h: l + 2.5 }),
        C++);
    }
  }
  for (let [e, t] of y)
    if (!(t < 20 || e > 112))
      for (let n of [-1, 1]) {
        let r = w.x + n * (w.edge - 2);
        for (let n = e + 4; n < t - 3; n += 4.6)
          a.push({
            model: `terrace-set`,
            x: r,
            y: l,
            z: n,
            fx: 0,
            fz: 1,
            range: 140,
            when: `terrace`,
          });
        a.push({
          model: `terrace-sign`,
          x: w.x + n * (w.carriage + 2.6),
          y: l,
          z: e + 1.5,
          fx: 0,
          fz: -1,
          range: 90,
          when: `terrace`,
        });
      }
  let E = D;
  for (let e = 0; e < 3; e++) {
    let t = E.x0 + 4.5 + e * 8,
      n = E.z0 + 1.6;
    (a.push({
      model: `truck-${(e % 4) + 1}`,
      x: t,
      y: l,
      z: n,
      fx: 0,
      fz: 1,
      range: 200,
      when: `trucks`,
    }),
      o.push(
        { x: t - 0.4, z: n, r: 1.4, h: l + 2.8 },
        { x: t + 1.6, z: n, r: 1.2, h: l + 2.8 },
      ));
  }
  a.push({
    model: `queue-card`,
    x: E.x0 + 6,
    y: l,
    z: E.z1 - 0.4,
    fx: 0,
    fz: -1,
    range: 80,
    when: `trucks`,
  });
  for (let e of [-62, 46, 230])
    (a.push({
      model: `run-sign`,
      x: v.wall + 0.7,
      y: l,
      z: e,
      fx: 0,
      fz: 1,
      range: 120,
    }),
      o.push({ x: v.wall + 0.7, z: e, r: 0.45, h: l + 2.1 }));
  return { instances: a, circles: o, strips: c, tris: 0 };
}
var It = (e, t) => `${e}-${t}`,
  Lt = e({
    illumOn: () => Jt,
    init: () => Xt,
    start: () => Zt,
    unload: () => nn,
    update: () => tn,
  }),
  Rt = [
    { id: `en`, fn: _t, cx: -111, cz: 47, range: 1100 },
    { id: `shinen`, fn: vt, cx: -111, cz: -37, range: 1100 },
    { id: `hagaki`, fn: yt, cx: -111, cz: 93, range: 1100 },
    { id: `ichigokan`, fn: bt, cx: -167, cz: 91, range: 1e3 },
    { id: `colonnade`, fn: wt, cx: -278, cz: 91, range: 900 },
    { id: `site`, fn: Tt, cx: -278, cz: -58, range: 800 },
    { id: `masakado`, fn: Et, cx: -278, cz: -142, range: 1e3 },
    { id: `otemachi`, fn: At, cx: -112, cz: -142, range: 1100 },
  ],
  $ = null,
  zt = !1,
  Bt = !1,
  Vt = -1,
  Ht = [],
  Ut = Error(`marunouchi: dropped while building`),
  Wt = new Float32Array(16);
function Gt(e) {
  for (let [t, n] of Object.entries(y))
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
var Kt = (e, t) => e * 100 + t;
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
  let r = Kt(e, t);
  return n
    ? r >= Kt(f.gyokoFrom[0], f.gyokoFrom[1]) &&
        r <= Kt(f.gyokoTo[0], f.gyokoTo[1])
    : r >= Kt(f.from[0], f.from[1]) || r <= Kt(f.to[0], f.to[1]);
}
