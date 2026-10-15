// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 12 — setmaterial
// Lines 3251-3485 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
function Vt(e, t) {
  let n = t.white();
  for (let [r, i, a] of [
    [`rick-a`, 11539482, 1710618],
    [`rick-b`, 11539482, 8002106],
    [`rick-c`, 1710618, 11539482],
  ]) {
    let o = e.begin(),
      s = 0.6,
      c = 0.62;
    (o.setMaterial(0.5, 0.3, 0, 0), L(o, 1315860));
    for (let e of [-1, 1]) Ee(o, e * c, s, 0, 0, 1, s, 0.03, 12, n, 16);
    L(o, 2763306);
    for (let e of [-1, 1])
      z(
        o,
        e * c - 0.06,
        0.54,
        -0.06,
        e * c + 0.06,
        0.6599999999999999,
        0.06,
        n,
      );
    (B(o, -0.62, s, 0, c, s, 0, 0.03, n),
      o.setMaterial(0.25, 0.2, 0, 0),
      L(o, 1118481),
      z(o, -0.5, 0.72, -0.4, 0.5, 1.05, 0.32, n, !0),
      L(o, 11569722),
      z(o, -0.505, 0.98, -0.405, 0.505, 1, 0.325, n),
      o.setMaterial(0.8, 0, 0, 0),
      L(o, i),
      z(o, -0.46, 1.05, -0.32, 0.46, 1.16, 0.26, n),
      z(o, -0.46, 1.05, -0.42, 0.46, 1.72, -0.32, n),
      o.setMaterial(0.25, 0.2, 0, 0),
      L(o, 1118481));
    for (let e of [-1, 1])
      z(o, e * 0.52 - 0.04, 1.05, -0.42, e * 0.52 + 0.04, 1.36, 0.26, n);
    (o.setMaterial(0.9, 0, 0, 0),
      L(o, a),
      z(o, -0.44, 0.6, 0.26, 0.44, 1.17, 0.3, n),
      o.setMaterial(0.6, 0.05, 0, 0),
      L(o, 921102));
    let l = { y: 1.2, z: -0.38 },
      u = 0.62;
    for (let e = 0; e < 5; e++) {
      let t = Math.PI / 2 + (e / 5) * (Math.PI * 0.42),
        r = Math.PI / 2 + ((e + 1) / 5) * (Math.PI * 0.42),
        i = l.y + Math.sin(t) * u,
        a = l.z + Math.cos(t) * u,
        s = l.y + Math.sin(r) * u,
        c = l.z + Math.cos(r) * u;
      (o.quad(
        -0.56,
        i,
        a,
        0.56,
        i,
        a,
        0.56,
        s,
        c,
        -0.56,
        s,
        c,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        o.quad(
          0.56,
          i,
          a,
          -0.56,
          i,
          a,
          -0.56,
          s,
          c,
          0.56,
          s,
          c,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    }
    (o.setMaterial(0.5, 0.1, 0, 0),
      L(o, 16777215),
      R(o, 0.42, -0.41, -0.42, -0.41, 0.76, 1, t.uv(`rick:name`)),
      L(o, 1118481),
      z(o, -0.42, 0.36, 0.34, 0.42, 0.42, 0.9, n));
    for (let e of [-1, 1])
      B(o, e * 0.4, 0.42, 0.36, e * 0.45, 0.74, 0.3, 0.02, n);
    for (let e of [-1, 1])
      B(o, e * 0.47, 0.98, 0.3, e * 0.42, 0.34, 2.5, 0.035, n);
    (B(o, -0.42, 0.34, 2.45, 0.42, 0.34, 2.45, 0.03, n),
      L(o, 6965802),
      z(o, -0.3, 0, 2.3, 0.3, 0.3, 2.6, n),
      e.end(`kit:${r}`, 0, 0, 0));
  }
  {
    let r = e.begin();
    (r.setMaterial(0.6, 0.5, 0, 0), L(r, 9080466));
    for (let e of [1, -1])
      (B(r, 0, 6.05, 0, 0, 6.05, e * 0.85, 0.022, n),
        B(r, 0, 4.05, 0, 0, 4.05, e * 0.85, 0.022, n));
    (r.setMaterial(0.8, 0, 0.12, 1), L(r, 16777215));
    for (let e of [1, -1]) {
      let n = t.uv(e > 0 ? `flag:kaminarimon` : `flag:asakusa`),
        i = e > 0 ? 0.16 : -0.82,
        a = e > 0 ? 0.82 : -0.16;
      (R(r, 0.012, a, 0.012, i, 4, 6, n), R(r, -0.012, i, -0.012, a, 4, 6, n));
    }
    e.end(`kit:flag`, 0, 0, 0);
  }
  {
    let r = e.begin();
    (r.setMaterial(0.6, 0.4, 0, 0),
      L(r, 9080466),
      Ce(r, 0, 0, 0, 1.75, 0.02, n, 6),
      r.setMaterial(0.7, 0, 0.05, 1),
      L(r, 16777215));
    let i = t.uv(`last`);
    (Se(r, 0, 0.03, 1.15, 1.75, 0.2, 0.012, 0, 1, n, i, i),
      e.end(`kit:last`, 0, 0, 0));
  }
}
var Ht = (e, t) =>
  h.some(
    (n) =>
      n.scope !== `buildings` &&
      e >= n.minX &&
      e <= n.maxX &&
      t >= n.minZ &&
      t <= n.maxZ,
  );
function Ut(e) {
  let t = [],
    n = e.plan;
  oe.forEach(([e, r, i], a) =>
    t.push({
      model: `rick-${`abc`[a % 3]}`,
      x: e,
      y: n.groundHeight(e, r),
      z: r,
      fx: Math.sin(i),
      fz: -Math.cos(i),
      range: 170,
      group: `day`,
    }),
  );
  let r = re(n),
    i = n.roads.find((e) => e.id === `ne-kaminarimon`);
  if (i) {
    let e = r.nodesOf(i);
    for (let a of [-1, 1])
      for (let o = 0; o + 1 < e.length; o++) {
        let s = r.primaryLights(i, e[o], e[o + 1], a);
        if (s && s.kind === `tall`)
          for (let e of s.ts) {
            let r = a * (i.halfWidth + 0.55),
              o = e,
              s = i.at + r;
            Ht(o, s) ||
              t.push({
                model: `flag`,
                x: o,
                y: n.groundHeight(o, s),
                z: s,
                fx: 0,
                fz: -a,
                range: 260,
              });
          }
      }
  }
  let a = b.x1 + 6.6,
    o = -1254.2;
  return (
    t.push({
      model: `last`,
      x: a,
      y: n.groundHeight(a, o),
      z: o,
      fx: 1,
      fz: 0,
      range: 120,
      group: `day`,
    }),
    t
  );
}
var Wt = e({
    init: () => $t,
    keepResident: () => cn,
    start: () => an,
    unload: () => sn,
    update: () => on,
  }),
  Q = null,
  Gt = !1,
  Kt = !1,
  qt = -1,
  Jt = Error(`asakusa: dropped while building`),
  Yt = { shop: [9.5, 19.5], eat: [11, 20.5], bar: [10.5, 23], day: C },
  $ = (e, [t, n]) => e >= t && e < n,
  Xt = [],
  Zt = [];
function Qt(e) {
  let t = 0;
  for (let n of w) {
    let r = e.plan.blocks.find((e) => e.id === n.block);
    if (!r) {
      t++;
      continue;
    }
    for (let i of ne(e.plan, r, null))
      i.x1 > n.x0 + 0.08 &&
        i.x0 < n.x1 - 0.08 &&
        i.z1 > n.z0 + 0.08 &&
        i.z0 < n.z1 - 0.08 &&
        ((i.x0 >= n.x0 - 0.15 &&
          i.x1 <= n.x1 + 0.15 &&
          i.z0 >= n.z0 - 0.15 &&
          i.z1 <= n.z1 + 0.15) ||
          (t++,
          console.warn(
            `[asakusa] lot run ${n.id}: generic lot ${i.x0.toFixed(2)}…${i.x1.toFixed(2)} × ${i.z0.toFixed(2)}…${i.z1.toFixed(2)} pokes out — the lots moved (data.ts)`,
          )));
  }
  return t;
}
