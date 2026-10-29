// tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey 11 — setmaterial
// Lines 2900-3245 of readable/tokyo/assets/region-tokyo-d-akihabara-UGh9Bzey.pretty.js (statement-aligned).
function it(e) {
  let t = [],
    n = new s(1024, 1536),
    r = e.white(),
    i = (e, r) => {
      (n.reset(), r(n), t.push({ name: e, geo: d(n, `akiba-kit-${e}`) }));
    };
  for (let t of [0, 1, 2])
    i(`banner:${t}`, (n) => {
      let i = e.uv(`banner:${t}`);
      (n.setMaterial(0.6, 0.5, 0, 0), A(n, 9080466));
      for (let e of [1, -1])
        (be(n, 0, 6.15, 0, 0, 6.15, e * 0.95, 0.025, r),
          be(n, 0, 4.05, 0, 0, 4.05, e * 0.95, 0.025, r));
      (n.setMaterial(0.8, 0, 0.22, 19), A(n, 16777215));
      for (let e of [1, -1]) {
        let t = e > 0 ? 0.18 : -0.92,
          r = e > 0 ? 0.92 : -0.18;
        (j(n, 0.012, r, 0.012, t, 4, 6.1, i),
          j(n, -0.012, t, -0.012, r, 4, 6.1, i));
      }
    });
  for (let t of [`kyakuhiki`, `rojo`])
    i(t, (n) => {
      let i = e.uv(t);
      (n.setMaterial(0.6, 0, 0, 0),
        A(n, 16777215),
        j(n, -0.22, 0.16, 0.22, 0.16, 1.85, 2.45, i),
        j(n, 0.22, 0.14, -0.22, 0.14, 1.85, 2.45, i),
        A(n, 7369848),
        be(n, 0, 2, 0.05, 0, 2, 0.15, 0.02, r),
        be(n, 0, 2.3, 0.05, 0, 2.3, 0.15, 0.02, r));
    });
  (i(`post`, (e) => {
    (e.setMaterial(0.6, 0.4, 0, 0),
      A(e, 10133668),
      ye(e, 0, 0, 0, 2.6, 0.04, r, 6));
  }),
    i(`gacha`, (t) => {
      let n = e.uv(`gachafront`);
      t.setMaterial(0.4, 0.1, 0.12, 17);
      for (let e = 0; e < 4; e++)
        (A(t, 16777215),
          M(t, -1.2 + e * 0.8, 0, 0.1, 1.85, 0.38, 0.3, 0, 1, r, n));
    }),
    i(`crane`, (t) => {
      let n = e.uv(`cranefront`);
      (t.setMaterial(0.4, 0.2, 0, 0),
        A(t, 15215242),
        M(t, 0, 0, 0, 0.95, 0.5, 0.45, 0, 1, r),
        t.setMaterial(0.15, 0.1, 0.3, 17),
        A(t, 16777215),
        M(t, 0, 0, 0.95, 1.95, 0.5, 0.45, 0, 1, n, n, n),
        t.setMaterial(0.4, 0.2, 0.35, 16),
        A(t, 16769280),
        M(t, 0, 0, 1.95, 2.2, 0.5, 0.45, 0, 1, r));
    }));
  for (let t of [`maid`, `junk`])
    i(`aboard:${t}`, (n) => {
      let r = e.uv(`aboard:${t}`);
      (n.setMaterial(0.7, 0, 0.06, 1), A(n, 16777215));
      let i = 0.18;
      (n.quad(
        -0.3,
        0,
        i,
        0.3,
        0,
        i,
        0.3,
        1,
        0.02,
        -0.3,
        1,
        0.02,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
        n.quad(
          0.3,
          0,
          -0.18,
          -0.3,
          0,
          -0.18,
          -0.3,
          1,
          -0.02,
          0.3,
          1,
          -0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ));
    });
  return (
    i(`junk`, (t) => {
      (t.setMaterial(0.7, 0.3, 0, 0),
        A(t, 9080466),
        M(t, 0, 0, 0, 0.75, 0.75, 0.35, 0, 1, r),
        t.setMaterial(0.85, 0, 0.05, 1),
        A(t, 16777215),
        M(
          t,
          0,
          0,
          0.75,
          1.05,
          0.72,
          0.33,
          0,
          1,
          e.uv(`shop:junk-out`),
          e.uv(`junkbox`),
        ));
    }),
    i(`vendcan`, (t) => {
      (t.setMaterial(0.4, 0.2, 0.25, 1),
        A(t, 16777215),
        M(t, 0, 0, 0, 1.83, 0.5, 0.35, 0, 1, r, e.uv(`vendcan`)));
    }),
    i(`hokoten`, (t) => {
      (t.setMaterial(0.6, 0.4, 0, 0), A(t, 10133668));
      for (let e of [-0.75, 0.75]) ye(t, e, 0, 0, 2.4, 0.04, r, 6);
      (t.setMaterial(0.6, 0, 0.05, 1),
        A(t, 16777215),
        M(
          t,
          0,
          0,
          1.35,
          2.35,
          0.85,
          0.03,
          0,
          1,
          r,
          e.uv(`hokoten`),
          e.uv(`hokoten`),
        ));
    }),
    i(`mansei-lamp`, (t) => {
      (t.setMaterial(0.9, 0, 0, 0),
        A(t, 12103840),
        M(t, 0, 0, 0, 1.6, 0.45, 0.45, 0, 1, r, e.uv(`bridgeplate`)),
        t.setMaterial(0.5, 0.6, 0, 0),
        A(t, 2763308),
        ye(t, 0, 0, 1.6, 3.6, 0.07, r, 6),
        t.setMaterial(0.3, 0, 0.4, 1),
        A(t, 16773320),
        M(t, 0, 0, 3.6, 4.15, 0.2, 0.2, 0, 1, r),
        t.setMaterial(0.5, 0.6, 0, 0),
        A(t, 2763308),
        M(t, 0, 0, 4.15, 4.3, 0.26, 0.26, 0, 1, r));
    }),
    t
  );
}
function at(e, r, i) {
  let a = e.plan,
    o = [],
    s = [],
    c = new t(n(`akiba-kit`, 1)),
    l = a.dataset.sidewalkHeight ?? 0.15,
    u = p(a),
    d = a.roads.find((e) => e.id === `chuo-akihabara`);
  if (d) {
    let e = u.nodesOf(d);
    for (let t = 0; t + 1 < e.length; t++)
      for (let n of [-1, 1]) {
        let r = u.primaryLights(d, e[t], e[t + 1], n);
        if (r && r.kind === `tall`)
          for (let e of r.ts) {
            if (e < ae.hokotenZ0 || e > ae.hokotenZ1) continue;
            let t = d.at + n * (d.halfWidth + 0.55),
              r = e;
            (o.push({
              model: `banner:${Math.floor(c.next() * 3)}`,
              x: t,
              y: l,
              z: r,
              fx: -n,
              fz: 0,
              range: 260,
            }),
              o.push({
                model: Math.round(e) & 1 ? `rojo` : `kyakuhiki`,
                x: t,
                y: l,
                z: r,
                fx: n,
                fz: 0,
                range: 90,
              }));
          }
      }
  }
  let f = me(),
    m = a.roads.find(
      (e) =>
        e.axis === `z` &&
        Math.abs(e.at - oe.x) < 1 &&
        e.from <= -700 &&
        e.to >= -650,
    ),
    h = m ? m.at + m.halfTotal - 0.6 : oe.x + 5.6;
  for (let e = oe.z0 + 14; e < oe.z1 - 8; e += 26)
    (e > -655 && e < -632) ||
      (o.push({ model: `post`, x: h, y: 0, z: e, fx: -1, fz: 0, range: 90 }),
      o.push({
        model: `kyakuhiki`,
        x: h,
        y: 0,
        z: e,
        fx: -1,
        fz: 0,
        range: 90,
      }),
      s.push({ x: h, z: e, r: 0.06, h: 2.6 }));
  for (let e of f) {
    let t = (e.z0 + e.z1) / 2;
    if (e.dir === `W` && e.x0 < -175) {
      let n = e.x0 - 0.75;
      (e.kind === `maid` &&
        o.push({
          model: `aboard:maid`,
          x: n,
          y: 0,
          z: t + 1.6,
          fx: -1,
          fz: 0,
          range: 110,
          when: (e) => e >= 11 && e < 22,
        }),
        (e.kind === `junk` || e.shop === `junk`) &&
          (o.push({
            model: `junk`,
            x: e.x0 - 0.55,
            y: 0,
            z: t - 1.2,
            fx: -1,
            fz: 0,
            range: 110,
            when: (e) => e >= 11 && e < 20,
          }),
          o.push({
            model: `aboard:junk`,
            x: n - 0.2,
            y: 0,
            z: t + 1.8,
            fx: -1,
            fz: 0,
            range: 110,
            when: (e) => e >= 11 && e < 20,
          })));
    }
    let n =
      e.dir === `E` ? { x: e.x1 + 0.45, fx: 1 } : { x: e.x0 - 0.45, fx: -1 };
    if (
      (e.shop === `gacha` &&
        o.push({
          model: `gacha`,
          x: n.x,
          y: e.dir === `E` || e.x0 > -150 ? l : 0,
          z: t,
          fx: n.fx,
          fz: 0,
          range: 120,
          when: (e) => e >= 11 && e < 22,
        }),
      e.shop === `crane` && i >= 0)
    )
      for (let r of [-(e.z1 - e.z0) * 0.28, (e.z1 - e.z0) * 0.28])
        o.push({
          model: `crane`,
          x: n.x,
          y: l,
          z: t + r,
          fx: n.fx,
          fz: 0,
          range: 120,
          when: (e) => e >= 10 || e < 0.5,
        });
  }
  if (
    (o.push({
      model: `vendcan`,
      x: h - 0.1,
      y: 0,
      z: -703.5,
      fx: -1,
      fz: 0,
      range: 120,
    }),
    s.push({ x: h - 0.1, z: -703.5, r: 0.45, h: 1.9 }),
    d)
  ) {
    let e = d.at + d.halfWidth + 1.6;
    for (let t of [ae.hokotenZ0 + 22, ae.hokotenZ1 - 22])
      (o.push({
        model: `hokoten`,
        x: e,
        y: l,
        z: t,
        fx: -1,
        fz: 0,
        range: 160,
      }),
        s.push({ x: e, z: t, r: 0.9, h: 2.4 }));
  }
  let g = (a.dataset.bridges ?? []).find(
    (e) =>
      e.road === `chuo-akihabara` ||
      (e.minX < -145 && e.maxX > -145 && e.over === `kanda`),
  );
  if (g)
    for (let e of [g.minZ + 0.5, g.maxZ - 0.5])
      for (let t of [g.minX + 0.5, g.maxX - 0.5])
        (o.push({
          model: `mansei-lamp`,
          x: t,
          y: l,
          z: e,
          fx: t < -145 ? 1 : -1,
          fz: 0,
          range: 300,
        }),
          s.push({ x: t, z: e, r: 0.5, h: 1.6 }));
  return { instances: o, circles: s, count: o.length, tris: 0 };
}
var ot = 3.9,
  st = 1.6,
  ct = 1.2,
  lt = -200,
  ut = -148,
  G = [
    { kind: `cafe`, name: `akiba.maach.cafe` },
    { kind: `craft`, name: `akiba.maach.zakka` },
    { kind: `craft`, name: `akiba.maach.beer` },
    { kind: `books`, name: `akiba.maach.books` },
  ],
  dt = (e) => ({ main: G[e % G.length].name, bg: `#1c1a18`, fg: `#e8d8b0` });
