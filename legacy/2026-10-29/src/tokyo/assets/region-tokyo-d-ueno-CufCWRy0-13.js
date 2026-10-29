// tokyo/assets/region-tokyo-d-ueno-CufCWRy0 13 — push
// Lines 3878-4149 of readable/tokyo/assets/region-tokyo-d-ueno-CufCWRy0.pretty.js (statement-aligned).
function un(e, t, n, r) {
  let i = e.plan,
    a = n === 0 ? 4 : 2,
    o = (e, t) => {
      let n = i.surfaceAt(e, t);
      return i.groundHeight(e, t) < 0.2 && (n === `lot` || n === `park`);
    };
  r.uniques.push({
    name: `pond-lawn-foot`,
    write: (e) => on(e, t, q.x0, q.z0 - 10, q.x1, q.z0, a, o),
    cx: (q.x0 + q.x1) / 2,
    cz: q.z0 - 5,
    range: 520,
  });
  for (let e = q.x0; e < q.x1 - 0.01; e += 70)
    for (let n = q.z0; n < q.z1 - 0.01; n += 70) {
      let i = Math.min(q.x1, e + 70),
        o = Math.min(q.z1, n + 70);
      r.uniques.push({
        name: `pond-lawn-${e}-${n}`,
        write: (r) => on(r, t, e, n, i, o, a),
        cx: (e + i) / 2,
        cz: (n + o) / 2,
        range: 520,
      });
    }
  let s = t.uv(`pond-paver`),
    c = t.uv(`pond-gravel`);
  (Gt.forEach((e, t) =>
    r.uniques.push({
      name: `pond-prom-${t}`,
      write: (t) => {
        (t.setMaterial(0.8, 0, 0, 0), E(t, 16777215), sn(t, e, Wt, s, 3));
      },
      cx: (e.minX + e.maxX) / 2,
      cz: (e.minZ + e.maxZ) / 2,
      range: 520,
    }),
  ),
    r.uniques.push({
      name: `pond-paths`,
      write: (e) => {
        (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
        for (let t of Kt) sn(e, t, Ut, c, 2.5);
      },
      cx: (q.x0 + q.x1) / 2,
      cz: (q.z0 + q.z1) / 2,
      range: 520,
    }),
    r.uniques.push({
      name: `pond-edge`,
      write: (e) => ln(e, t),
      cx: (J + Y) / 2,
      cz: (X + Z) / 2,
      range: 420,
    }));
  for (let [e, t, n, i] of cn())
    r.boxes.push(
      e === `x`
        ? { minX: n, minZ: t - 0.1, maxX: i, maxZ: t + 0.1, y0: 0, y1: 1.15 }
        : { minX: t - 0.1, minZ: n, maxX: t + 0.1, maxZ: i, y0: 0, y1: 1.15 },
    );
  let l = [
      {
        axis: `z`,
        outer: J - 6 + 0.6,
        inner: J - 0.95,
        lawn: J - 6 - 2.6,
        a: X - 2,
        b: Z + 2,
        fx: 1,
        fz: 0,
      },
      {
        axis: `z`,
        outer: Y + 6 - 0.6,
        inner: Y + 0.95,
        lawn: Y + 6 + 2.6,
        a: X - 2,
        b: Z + 2,
        fx: -1,
        fz: 0,
      },
      {
        axis: `x`,
        outer: X - 6 + 0.6,
        inner: X - 0.95,
        lawn: X - 6 - 2.6,
        a: J + 4,
        b: Y - 4,
        fx: 0,
        fz: 1,
      },
      {
        axis: `x`,
        outer: Z + 6 - 0.6,
        inner: Z + 0.95,
        lawn: Z + 6 + 2.6,
        a: J + 4,
        b: Y - 4,
        fx: 0,
        fz: -1,
      },
    ],
    u = (e, t, n) =>
      e === `z`
        ? (t > W.z0 - n && t < W.z1 + n) ||
          (t > $.z0 - n && t < $.z1 + n) ||
          (t > Ee.z0 - n && t < Ee.z1 + n)
        : (t > Q.x0 - n && t < Q.x1 + n) ||
          (t > De.x0 - n && t < De.x1 + n) ||
          (t > -266 - n && t < -260 + n) ||
          (t > -440 - n && t < -434 + n),
    d = (e, t, n) => (e === `z` ? { x: t, z: n } : { x: n, z: t }),
    f = [],
    p = (e, t, n, i, a, o, s) => {
      (r.instances.push({
        model: e,
        x: t,
        y: Vt,
        z: n,
        fx: i,
        fz: a,
        s: o,
        range: 330,
      }),
        r.circles.push({ x: t, z: n, r: s, y0: 0, y1: 4 }),
        f.push({ x: t, z: n }));
    };
  l.forEach((e, t) => {
    let n = t === 1;
    for (let i = e.a + 6, a = 0; i < e.b - 4; i += 2, a++) {
      if (a % 11 == 3 && !u(e.axis, i, 6)) {
        let t = d(e.axis, e.inner, i),
          n = Math.floor(Xt(t.x, t.z, 5) * 3);
        p(
          `pond-willow-${n}`,
          t.x,
          t.z,
          e.fx,
          e.fz,
          0.9 + 0.25 * Xt(t.x, t.z, 6),
          0.3,
        );
      }
      if (a % 12 == 0 && !u(e.axis, i, 3)) {
        let n = d(e.axis, e.outer, i);
        (t === 0 && i > G.z0 - 6 && i < G.z1 + 6) ||
          (r.instances.push({
            model: `pond-lamp`,
            x: n.x,
            y: Vt,
            z: n.z,
            fx: e.fx,
            fz: e.fz,
            range: 220,
          }),
          r.circles.push({ x: n.x, z: n.z, r: 0.14, y0: 0, y1: 4 }));
      }
      if (
        a % 12 == 6 &&
        !u(e.axis, i, 4) &&
        !(t === 0 && i > W.z0 - 8 && i < W.z1 + 8)
      ) {
        let t = d(e.axis, e.outer + (e.axis === `z` ? e.fx : e.fz) * 0.2, i);
        r.instances.push({
          model: `pond-bench`,
          x: t.x,
          y: 0.21,
          z: t.z,
          fx: e.fx,
          fz: e.fz,
          range: 140,
        });
        let n = 0.9,
          a = 0.3;
        r.boxes.push(
          e.axis === `z`
            ? {
                minX: t.x - a,
                minZ: t.z - n,
                maxX: t.x + a,
                maxZ: t.z + n,
                y0: 0,
                y1: 0.9,
              }
            : {
                minX: t.x - n,
                minZ: t.z - a,
                maxX: t.x + n,
                maxZ: t.z + a,
                y0: 0,
                y1: 0.9,
              },
        );
      }
      if (a % (n ? 8 : 6) == 2 && !u(e.axis, i, 5)) {
        let t = d(e.axis, e.lawn, i);
        !Jt(t.x, t.z, 1.6) &&
          t.x > q.x0 + 2 &&
          t.x < q.x1 - 2 &&
          t.z > q.z0 + 2 &&
          t.z < q.z1 - 2 &&
          p(
            `pond-tree-${Math.floor(Xt(t.x, t.z, 7) * 3)}`,
            t.x,
            t.z,
            0,
            1,
            0.85 + 0.3 * Xt(t.x, t.z, 8),
            0.32,
          );
      }
    }
  });
  let m = n === 0 ? 220 : 420;
  for (let e = 0; e < m; e++) {
    let t = q.x0 + 3 + Xt(e, 1, 9) * (q.x1 - q.x0 - 6),
      n = q.z0 + 3 + Xt(e, 2, 9) * (q.z1 - q.z0 - 6);
    if (
      Yt(t, n, 9) ||
      Jt(t, n, 3) ||
      qt({ minX: G.x0, minZ: G.z0, maxX: G.x1, maxZ: G.z1 }, t, n, 4) ||
      f.some((e) => (e.x - t) ** 2 + (e.z - n) ** 2 < 81)
    )
      continue;
    let r = Xt(t, n, 10);
    p(
      `pond-tree-${Math.floor(r * 3)}`,
      t,
      n,
      Math.sin(r * 6.28),
      Math.cos(r * 6.28),
      0.8 + 0.4 * Xt(t, n, 11),
      0.32,
    );
  }
  (r.instances.push({
    model: `pond-stone`,
    x: Q.x0 - 1.6,
    y: Vt,
    z: q.z1 - 3,
    fx: 0,
    fz: 1,
    range: 160,
  }),
    r.boxes.push({
      minX: Q.x0 - 2.3,
      minZ: q.z1 - 3.4,
      maxX: Q.x0 - 0.9,
      maxZ: q.z1 - 2.6,
      y0: 0,
      y1: 2.2,
    }),
    r.instances.push({
      model: `pond-stone`,
      x: q.x1 - 3,
      y: Vt,
      z: $.z1 + 1.6,
      fx: 1,
      fz: 0,
      range: 160,
    }),
    r.boxes.push({
      minX: q.x1 - 3.4,
      minZ: $.z1 + 0.9,
      maxX: q.x1 - 2.6,
      maxZ: $.z1 + 2.3,
      y0: 0,
      y1: 2.2,
    }));
}
