// tokyo/assets/actors-qKVitB-C 121 — push
// Lines 56942-57276 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Hk() {
  let e = [],
    t = 12588060,
    n = 14725184;
  e.push($(0.95, 0.05, 0.55, t, { y: 0.78 }));
  for (let [t, n] of [
    [0.42, 0.23],
    [-0.42, 0.23],
    [0.42, -0.23],
    [-0.42, -0.23],
  ])
    e.push($(0.05, 0.76, 0.05, 5904912, { x: t, y: 0.38, z: n }));
  (e.push($(0.96, 0.66, 0.02, t, { y: 0.44, z: -0.285 }, 0.15)),
    e.push($(0.96, 0.05, 0.025, n, { y: 0.74, z: -0.29 }, 0.5)),
    e.push($(0.3, 0.3, 0.025, n, { y: 0.45, z: -0.295 }, 0.35)),
    e.push(xk(0.1, 0.085, 0.12, 12, 9071146, { y: 0.87 })));
  for (let t of [-0.03, 0, 0.03])
    (e.push(xk(0.004, 0.004, 0.3, 4, 10103322, { x: t, y: 1.05, rz: t * 3 })),
      e.push(Sk(0.01, 4, 3, 16740384, { x: t + t * 0.45, y: 1.2 }, 2)));
  for (let t of [-1, 1])
    (e.push(xk(0.11, 0.08, 0.025, 12, 15658734, { x: t * 0.3, y: 0.815 })),
      e.push(
        Sk(0.045, 8, 6, t > 0 ? 15763994 : 13642282, {
          x: t * 0.3 - 0.04,
          y: 0.87,
        }),
      ),
      e.push(
        Sk(0.045, 8, 6, t > 0 ? 15763994 : 13642282, {
          x: t * 0.3 + 0.04,
          y: 0.87,
        }),
      ),
      e.push(Sk(0.045, 8, 6, 16105520, { x: t * 0.3, y: 0.93 })),
      e.push(
        xk(0.022, 0.022, 0.16, 8, 13637656, { x: t * 0.44, y: 0.88, z: 0.15 }),
      ),
      e.push(
        Sk(
          0.018,
          6,
          4,
          16765040,
          { x: t * 0.44, y: 0.975, z: 0.15, sy: 1.6 },
          2.2,
        ),
      ));
  return Tk(e);
}
function Uk() {
  let e = [];
  for (let t = 0; t < 18; t++) {
    let n = t * 0.7,
      r = 0.12 + t * 0.012;
    e.push(
      xk(
        0.018,
        0.018,
        0.09,
        6,
        13898780,
        {
          x: Math.cos(n) * r,
          y: 0.03,
          z: Math.sin(n) * r,
          rx: Math.PI / 2,
          ry: -n,
        },
        0.25,
      ),
    );
  }
  return (e.push(xk(0.2, 0.2, 0.008, 16, 16044090, { y: 0.004 }, 0.15)), Tk(e));
}
function Wk() {
  let e = [];
  return (
    e.push($(0.09, 0.012, 0.128, 2050618, { y: 0.006 }, 0.05)),
    e.push($(0.086, 0.01, 0.124, 16052194, { y: 0.006, x: 0.003 })),
    e.push(xk(0.018, 0.018, 0.002, 12, Dk, { y: 0.0135, z: -0.012 }, 0.35)),
    e.push($(0.05, 0.002, 0.008, Dk, { y: 0.0135, z: 0.03 }, 0.35)),
    Tk(e)
  );
}
function Gk() {
  let e = [];
  return (
    e.push($(0.3, 0.2, 0.11, 10690604, { y: 0.1 }, 0.05)),
    e.push($(0.31, 0.05, 0.115, 8001056, { y: 0.19 })),
    e.push($(0.05, 0.03, 0.02, Dk, { y: 0.17, z: -0.06 }, 0.3)),
    e.push(wk(0.09, 0.012, 6, 16, 5902358, { y: 0.21, sx: 1, sy: 1, sz: 1 })),
    Tk(e)
  );
}
function Kk() {
  let e = [];
  return (
    e.push($(0.13, 0.08, 0.05, 1776672, { y: 0.04 })),
    e.push($(0.05, 0.03, 0.04, 1776672, { y: 0.095, x: -0.02 })),
    e.push(
      xk(0.032, 0.035, 0.07, 14, 2369068, {
        y: 0.042,
        z: -0.06,
        rx: Math.PI / 2,
      }),
    ),
    e.push(
      xk(
        0.024,
        0.024,
        0.004,
        14,
        3828392,
        { y: 0.042, z: -0.096, rx: Math.PI / 2 },
        0.5,
      ),
    ),
    e.push(xk(0.008, 0.008, 0.012, 8, 13112863, { y: 0.086, x: 0.045 }, 0.4)),
    Tk(e)
  );
}
function qk(e, t) {
  let n = 12588572,
    r = 14706254,
    i = new _(0.06, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2),
    a = new Pe(0.06, 14),
    o = (t, n) => ({ x: e, y: t, sx: 0.55, sy: 0.5, sz: 1.15, rx: n });
  return t
    ? [bk(i, n, 0.12, o(0.03, Math.PI)), bk(a, r, 0.05, o(0.031, -Math.PI / 2))]
    : [bk(i, n, 0.12, o(0, 0)), bk(a, r, 0.05, o(0.001, Math.PI / 2))];
}
function Jk() {
  return Tk([...qk(-0.07, !1), ...qk(0.07, !0)]);
}
function Yk() {
  return Tk(qk(0, !1));
}
function Xk() {
  let e = [];
  for (let [t, n] of [
    [-0.012, 0],
    [0.012, 0.004],
    [0, -0.012],
  ])
    (e.push(xk(0.0035, 0.0035, 0.26, 4, 10494748, { x: t, z: n, y: 0.13 })),
      e.push(xk(0.004, 0.004, 0.12, 4, 6969914, { x: t, z: n, y: 0.32 })),
      e.push(Sk(0.006, 5, 4, 16738858, { x: t, z: n, y: 0.385 }, 1.2)));
  return Tk(e);
}
function Zk() {
  let e = [];
  return (
    e.push($(0.012, 0.3, 0.004, 14205066, { y: 0.15 })),
    e.push($(0.013, 0.06, 0.005, 12588572, { y: 0.28 }, 0.1)),
    Tk(e)
  );
}
function Qk() {
  let e = [];
  return (
    e.push($(0.2, 0.06, 0.15, 14203274, { y: 0.03 })),
    e.push($(0.205, 0.012, 0.155, 12728874, { y: 0.066 }, 0.15)),
    e.push($(0.21, 0.004, 0.02, 15918792, { y: 0.074 })),
    e.push($(0.02, 0.004, 0.16, 15918792, { y: 0.074 })),
    Tk(e)
  );
}
function $k() {
  let e = [];
  e.push(Ck(0.07, 0.24, 8, 16052468, { y: 0.12, rx: Math.PI }, 0.1));
  let t = [
    [0, 0.27, 0],
    [0.05, 0.25, 0.03],
    [-0.05, 0.25, 0.02],
    [0.02, 0.25, -0.05],
    [-0.03, 0.26, -0.04],
    [0.04, 0.24, -0.02],
  ];
  for (let [n, r, i] of t)
    e.push(Sk(0.034, 8, 6, 14162490, { x: n, y: r, z: i }, 0.2));
  for (let [n, r, i] of t.slice(0, 3))
    e.push(Sk(0.02, 6, 4, 3832378, { x: n * 1.5, y: r - 0.03, z: i * 1.5 }));
  return Tk(e);
}
var eA = new R(),
  tA = new I(),
  nA = new O(),
  rA = new L(),
  iA = new L(),
  aA = new Me();
function oA(e, t, n, r) {
  (e.deleteAttribute(`uv`),
    nA.set(r.rx ?? 0, r.ry ?? 0, r.rz ?? 0),
    tA.setFromEuler(nA),
    rA.set(r.x ?? 0, r.y ?? 0, r.z ?? 0),
    iA.set(r.sx ?? 1, r.sy ?? 1, r.sz ?? 1),
    e.applyMatrix4(eA.compose(rA, tA, iA)));
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = new Float32Array(i);
  aA.setHex(t);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = aA.r),
      (a[e * 3 + 1] = aA.g),
      (a[e * 3 + 2] = aA.b),
      (o[e] = n));
  return (
    e.setAttribute(`color`, new P(a, 3)),
    e.setAttribute(`glow`, new P(o, 1)),
    e
  );
}
var sA = 13637148,
  cA = 16183782,
  lA = 1446416,
  uA = 15250988,
  dA = 9067058;
function fA() {
  let e = [];
  (e.push(oA(new w(0.2, 0.22, 0.05, 16), dA, 0, { y: 0.025 })),
    e.push(
      oA(new _(0.2, 18, 14), sA, 0.25, { y: 0.25, sx: 1, sy: 1.08, sz: 0.96 }),
    ),
    e.push(
      oA(new _(0.125, 16, 12), cA, 0.22, {
        y: 0.31,
        z: -0.105,
        sx: 1.05,
        sy: 0.9,
        sz: 0.5,
      }),
    ));
  for (let t of [-1, 1])
    e.push(
      oA(new F(0.075, 0.02, 0.012), lA, 0, {
        x: t * 0.048,
        y: 0.37,
        z: -0.165,
        rz: t * 0.25,
      }),
    );
  e.push(oA(new F(0.12, 0.03, 0.012), lA, 0, { y: 0.245, z: -0.163 }));
  for (let t of [-1, 1])
    e.push(
      oA(new F(0.05, 0.018, 0.012), lA, 0, {
        x: t * 0.07,
        y: 0.262,
        z: -0.158,
        rz: -t * 0.5,
      }),
    );
  for (let t of [-1, 1])
    e.push(
      oA(new w(0.03, 0.03, 0.01, 14), cA, 0.3, {
        x: t * 0.045,
        y: 0.322,
        z: -0.17,
        rx: Math.PI / 2,
      }),
    );
  (e.push(
    oA(new w(0.019, 0.019, 0.012, 12), lA, 0, {
      x: 0.045,
      y: 0.322,
      z: -0.176,
      rx: Math.PI / 2,
    }),
  ),
    e.push(
      oA(new M(0.168, 0.01, 6, 26), uA, 0.6, { y: 0.17, rx: Math.PI / 2 }),
    ),
    e.push(
      oA(new F(0.075, 0.075, 0.012), uA, 0.8, {
        y: 0.155,
        z: -0.192,
        rx: 0.25,
      }),
    ),
    e.push(
      oA(new F(0.045, 0.008, 0.014), lA, 0, { y: 0.17, z: -0.198, rx: 0.25 }),
    ),
    e.push(
      oA(new F(0.008, 0.05, 0.014), lA, 0, { y: 0.155, z: -0.198, rx: 0.25 }),
    ));
  let t = An(e, !1);
  return (t.computeBoundingSphere(), t.computeBoundingBox(), t);
}
var pA = new L(),
  mA = new R(),
  hA = new I(),
  gA = new O(),
  _A = new L(),
  vA = new L(),
  yA = new L(),
  bA = new L(),
  xA = new L(0, 1, 0),
  SA = zt.DETAIL;
function CA(e, t) {
  let n = e.attributes.position;
  for (let e = 0; e < n.count; e++)
    (t(pA.fromBufferAttribute(n, e)), n.setXYZ(e, pA.x, pA.y, pA.z));
  return (e.computeVertexNormals(), e);
}
function wA(e, t) {
  let n = An(e, !1);
  return (
    gA.set(t.rx ?? 0, t.ry ?? 0, t.rz ?? 0),
    hA.setFromEuler(gA),
    _A.set(t.x ?? 0, t.y ?? 0, t.z ?? 0),
    vA.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1),
    n.applyMatrix4(mA.compose(_A, hA, vA))
  );
}
var TA = (e, t, n, r = {}, i = 0) =>
    bk(
      new xe(
        e.map(([e, t]) => new Ce(e, t)),
        t,
      ),
      n,
      i,
      r,
    ),
  EA = (e, t, n, r = {}, i = 0, a = 1) =>
    $(e, t, SA, n, { ...r, z: (r.z ?? 0) + SA * (a - 0.5) }, i),
  DA = (e, t, n, r = {}, i = 0, a = 1) =>
    xk(
      e,
      e,
      SA,
      t,
      n,
      { ...r, z: (r.z ?? 0) + SA * (a - 0.5), rx: Math.PI / 2 },
      i,
    );
