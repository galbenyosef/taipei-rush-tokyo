// tokyo/assets/heli-C2W-6EbV 05 — color
// Lines 1042-1224 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function $e(e, t, n, r = 0) {
  let i = new E(),
    a = t / 2,
    o =
      e === `slab`
        ? { color: 9276806, rough: 0.85 }
        : { color: 4869973, rough: 0.6, metal: 0.3 };
  if (
    (i.style(o),
    i.quadUV(
      [-a, 0, a],
      [a, 0, a],
      [a, 0, -a],
      [-a, 0, -a],
      ve.u0,
      ve.v0,
      ve.u1,
      ve.v1,
    ),
    i.box(0, -n / 2, 0, t, n, t, e === `deck` ? `t` : `tb`),
    e === `deck`)
  ) {
    i.style({ color: 6054247, rough: 0.5, metal: 0.6 });
    let e = a - 0.6;
    for (let [t, a] of [
      [-e, -e],
      [e, -e],
      [e, e],
      [-e, e],
      [0, -e],
      [0, e],
      [-e, 0],
      [e, 0],
    ])
      i.box(t, -n - r / 2, a, 0.22, r, 0.22, `tb`);
    i.style({ color: 8028295, rough: 0.6, metal: 0.5 });
    for (let e of [-1, 1])
      (i.quad(
        [-a - 0.8, -0.22, e * (a + 0.8)],
        [a + 0.8, -0.22, e * (a + 0.8)],
        [a, -0.06, e * a],
        [-a, -0.06, e * a],
        [0, 1, 0],
      ),
        i.quad(
          [e * (a + 0.8), -0.22, -a - 0.8],
          [e * (a + 0.8), -0.22, a + 0.8],
          [e * a, -0.06, a],
          [e * a, -0.06, -a],
          [0, 1, 0],
        ));
  }
  i.style({ color: 3735402, light: O.SIGN, rough: 0.2 });
  for (let e = 0; e <= 4; e++) {
    let n = -a + 0.25 + ((t - 0.5) * e) / 4;
    for (let [e, t] of [
      [n, -a + 0.25],
      [n, a - 0.25],
      [-a + 0.25, n],
      [a - 0.25, n],
    ])
      i.box(e, 0.04, t, 0.14, 0.08, 0.14, `b`);
  }
  let s = i.buildGeometry();
  return ((s.userData.keepCpu = !0), (s.name = `vehicle-heli-pad-${e}`), s);
}
function et() {
  let e = new E();
  (e.style({ color: 4014664, rough: 0.6, metal: 0.4 }),
    e.box(0, 1.35, 0, 0.36, 2.7, 0.36, `b`),
    e.style({ color: 16777215, rough: 0.5 }));
  let t = 0.45,
    n = 1.55,
    r = 2.45,
    i = 0.2,
    a = ve;
  (e.quadUV(
    [-0.45, n, i],
    [t, n, i],
    [t, r, i],
    [-0.45, r, i],
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  ),
    e.quadUV(
      [t, n, -0.2],
      [-0.45, n, -0.2],
      [-0.45, r, -0.2],
      [t, r, -0.2],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.quadUV(
      [i, n, t],
      [i, n, -0.45],
      [i, r, -0.45],
      [i, r, t],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.quadUV(
      [-0.2, n, -0.45],
      [-0.2, n, t],
      [-0.2, r, t],
      [-0.2, r, -0.45],
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
    e.style({ color: 3735402, light: O.SIGN, rough: 0.2 }),
    e.box(0, 2.76, 0, 0.3, 0.12, 0.3, `b`));
  let o = e.buildGeometry();
  return ((o.userData.keepCpu = !0), (o.name = `vehicle-heli-lift-sign`), o);
}
var X = {
    SPOOL: 2.5,
    SPOOL_DOWN: 9,
    VMAX: 52,
    VBACK: 11,
    ACCEL: 7,
    DECEL: 5,
    BRAKE: 9,
    SIDE_DAMP: 1.7,
    YAW_HOVER: 1.45,
    YAW_FAST: 0.72,
    YAW_RESP: 5,
    CLIMB: 8,
    DESCEND: 7,
    VACC: 8,
    CEILING: 420,
    AUTOROT: 9.5,
    G: 9.8,
    HP: 1e3,
    FIRE_HP: 150,
    SMOKE_HP: 450,
    FIRE_FUSE: 8,
  },
  tt = C(),
  nt = { x: 0, y: 0, z: 0 },
  Z = new h(),
  rt = [],
  it = new Set([`world-edge`, `tree`, `pole`, `hedge`]),
  at = new Set([`world-edge`]),
  ot = 1;
function st(e, t, n, r, i) {
  let a = e.groundAt(t, n, r + 0.3, 0.5),
    o = e.statics.query(t - 0.25, n - 0.25, t + 0.25, n + 0.25, rt);
  for (let e = 0; e < o; e++) {
    let i = rt[e];
    i.maxY > r + 0.6 ||
      i.maxY <= a ||
      it.has(i.tag) ||
      i.tag.startsWith(`invisible`) ||
      (ct(i, t, n) && (a = i.maxY));
  }
  i.water = !1;
  let s = e.plan.waterLevel;
  return (
    a <= s + 0.05 &&
      e.plan.surfaceAt(t, n) === `water` &&
      ((a = s), (i.water = !0)),
    (i.y = a),
    i
  );
}
function ct(e, t, n) {
  let r = e.kind;
  if (r === 2) return Math.hypot(t - e.cx, n - e.cz) <= e.hx;
  let i = t - e.cx,
    a = n - e.cz;
  if (r === 1) {
    let t = i * e.cos + a * e.sin;
    ((a = -i * e.sin + a * e.cos), (i = t));
  }
  return Math.abs(i) <= e.hx && Math.abs(a) <= e.hz;
}
