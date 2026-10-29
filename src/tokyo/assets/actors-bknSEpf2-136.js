// tokyo/assets/actors-bknSEpf2 136 — push
// Lines 62863-63197 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function lN() {
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
    e.push(HM(0.1, 0.085, 0.12, 12, 9071146, { y: 0.87 })));
  for (let t of [-0.03, 0, 0.03])
    (e.push(HM(0.004, 0.004, 0.3, 4, 10103322, { x: t, y: 1.05, rz: t * 3 })),
      e.push(UM(0.01, 4, 3, 16740384, { x: t + t * 0.45, y: 1.2 }, 2)));
  for (let t of [-1, 1])
    (e.push(HM(0.11, 0.08, 0.025, 12, 15658734, { x: t * 0.3, y: 0.815 })),
      e.push(
        UM(0.045, 8, 6, t > 0 ? 15763994 : 13642282, {
          x: t * 0.3 - 0.04,
          y: 0.87,
        }),
      ),
      e.push(
        UM(0.045, 8, 6, t > 0 ? 15763994 : 13642282, {
          x: t * 0.3 + 0.04,
          y: 0.87,
        }),
      ),
      e.push(UM(0.045, 8, 6, 16105520, { x: t * 0.3, y: 0.93 })),
      e.push(
        HM(0.022, 0.022, 0.16, 8, 13637656, { x: t * 0.44, y: 0.88, z: 0.15 }),
      ),
      e.push(
        UM(
          0.018,
          6,
          4,
          16765040,
          { x: t * 0.44, y: 0.975, z: 0.15, sy: 1.6 },
          2.2,
        ),
      ));
  return KM(e);
}
function uN() {
  let e = [];
  for (let t = 0; t < 18; t++) {
    let n = t * 0.7,
      r = 0.12 + t * 0.012;
    e.push(
      HM(
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
  return (e.push(HM(0.2, 0.2, 0.008, 16, 16044090, { y: 0.004 }, 0.15)), KM(e));
}
function dN() {
  let e = [];
  return (
    e.push($(0.09, 0.012, 0.128, 2050618, { y: 0.006 }, 0.05)),
    e.push($(0.086, 0.01, 0.124, 16052194, { y: 0.006, x: 0.003 })),
    e.push(HM(0.018, 0.018, 0.002, 12, JM, { y: 0.0135, z: -0.012 }, 0.35)),
    e.push($(0.05, 0.002, 0.008, JM, { y: 0.0135, z: 0.03 }, 0.35)),
    KM(e)
  );
}
function fN() {
  let e = [];
  return (
    e.push($(0.3, 0.2, 0.11, 10690604, { y: 0.1 }, 0.05)),
    e.push($(0.31, 0.05, 0.115, 8001056, { y: 0.19 })),
    e.push($(0.05, 0.03, 0.02, JM, { y: 0.17, z: -0.06 }, 0.3)),
    e.push(GM(0.09, 0.012, 6, 16, 5902358, { y: 0.21, sx: 1, sy: 1, sz: 1 })),
    KM(e)
  );
}
function pN() {
  let e = [];
  return (
    e.push($(0.13, 0.08, 0.05, 1776672, { y: 0.04 })),
    e.push($(0.05, 0.03, 0.04, 1776672, { y: 0.095, x: -0.02 })),
    e.push(
      HM(0.032, 0.035, 0.07, 14, 2369068, {
        y: 0.042,
        z: -0.06,
        rx: Math.PI / 2,
      }),
    ),
    e.push(
      HM(
        0.024,
        0.024,
        0.004,
        14,
        3828392,
        { y: 0.042, z: -0.096, rx: Math.PI / 2 },
        0.5,
      ),
    ),
    e.push(HM(0.008, 0.008, 0.012, 8, 13112863, { y: 0.086, x: 0.045 }, 0.4)),
    KM(e)
  );
}
function mN(e, t) {
  let n = 12588572,
    r = 14706254,
    i = new k(0.06, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2),
    a = new ae(0.06, 14),
    o = (t, n) => ({ x: e, y: t, sx: 0.55, sy: 0.5, sz: 1.15, rx: n });
  return t
    ? [VM(i, n, 0.12, o(0.03, Math.PI)), VM(a, r, 0.05, o(0.031, -Math.PI / 2))]
    : [VM(i, n, 0.12, o(0, 0)), VM(a, r, 0.05, o(0.001, Math.PI / 2))];
}
function hN() {
  return KM([...mN(-0.07, !1), ...mN(0.07, !0)]);
}
function gN() {
  return KM(mN(0, !1));
}
function _N() {
  let e = [];
  for (let [t, n] of [
    [-0.012, 0],
    [0.012, 0.004],
    [0, -0.012],
  ])
    (e.push(HM(0.0035, 0.0035, 0.26, 4, 10494748, { x: t, z: n, y: 0.13 })),
      e.push(HM(0.004, 0.004, 0.12, 4, 6969914, { x: t, z: n, y: 0.32 })),
      e.push(UM(0.006, 5, 4, 16738858, { x: t, z: n, y: 0.385 }, 1.2)));
  return KM(e);
}
function vN() {
  let e = [];
  return (
    e.push($(0.012, 0.3, 0.004, 14205066, { y: 0.15 })),
    e.push($(0.013, 0.06, 0.005, 12588572, { y: 0.28 }, 0.1)),
    KM(e)
  );
}
function yN() {
  let e = [];
  return (
    e.push($(0.2, 0.06, 0.15, 14203274, { y: 0.03 })),
    e.push($(0.205, 0.012, 0.155, 12728874, { y: 0.066 }, 0.15)),
    e.push($(0.21, 0.004, 0.02, 15918792, { y: 0.074 })),
    e.push($(0.02, 0.004, 0.16, 15918792, { y: 0.074 })),
    KM(e)
  );
}
function bN() {
  let e = [];
  e.push(WM(0.07, 0.24, 8, 16052468, { y: 0.12, rx: Math.PI }, 0.1));
  let t = [
    [0, 0.27, 0],
    [0.05, 0.25, 0.03],
    [-0.05, 0.25, 0.02],
    [0.02, 0.25, -0.05],
    [-0.03, 0.26, -0.04],
    [0.04, 0.24, -0.02],
  ];
  for (let [n, r, i] of t)
    e.push(UM(0.034, 8, 6, 14162490, { x: n, y: r, z: i }, 0.2));
  for (let [n, r, i] of t.slice(0, 3))
    e.push(UM(0.02, 6, 4, 3832378, { x: n * 1.5, y: r - 0.03, z: i * 1.5 }));
  return KM(e);
}
var xN = new N(),
  SN = new v(),
  CN = new Pe(),
  wN = new V(),
  TN = new V(),
  EN = new j();
function DN(e, t, n, r) {
  (e.deleteAttribute(`uv`),
    CN.set(r.rx ?? 0, r.ry ?? 0, r.rz ?? 0),
    SN.setFromEuler(CN),
    wN.set(r.x ?? 0, r.y ?? 0, r.z ?? 0),
    TN.set(r.sx ?? 1, r.sy ?? 1, r.sz ?? 1),
    e.applyMatrix4(xN.compose(wN, SN, TN)));
  let i = e.attributes.position.count,
    a = new Float32Array(i * 3),
    o = new Float32Array(i);
  EN.setHex(t);
  for (let e = 0; e < i; e++)
    ((a[e * 3] = EN.r),
      (a[e * 3 + 1] = EN.g),
      (a[e * 3 + 2] = EN.b),
      (o[e] = n));
  return (
    e.setAttribute(`color`, new z(a, 3)),
    e.setAttribute(`glow`, new z(o, 1)),
    e
  );
}
var ON = 13637148,
  kN = 16183782,
  AN = 1446416,
  jN = 15250988,
  MN = 9067058;
function NN() {
  let e = [];
  (e.push(DN(new me(0.2, 0.22, 0.05, 16), MN, 0, { y: 0.025 })),
    e.push(
      DN(new k(0.2, 18, 14), ON, 0.25, { y: 0.25, sx: 1, sy: 1.08, sz: 0.96 }),
    ),
    e.push(
      DN(new k(0.125, 16, 12), kN, 0.22, {
        y: 0.31,
        z: -0.105,
        sx: 1.05,
        sy: 0.9,
        sz: 0.5,
      }),
    ));
  for (let t of [-1, 1])
    e.push(
      DN(new B(0.075, 0.02, 0.012), AN, 0, {
        x: t * 0.048,
        y: 0.37,
        z: -0.165,
        rz: t * 0.25,
      }),
    );
  e.push(DN(new B(0.12, 0.03, 0.012), AN, 0, { y: 0.245, z: -0.163 }));
  for (let t of [-1, 1])
    e.push(
      DN(new B(0.05, 0.018, 0.012), AN, 0, {
        x: t * 0.07,
        y: 0.262,
        z: -0.158,
        rz: -t * 0.5,
      }),
    );
  for (let t of [-1, 1])
    e.push(
      DN(new me(0.03, 0.03, 0.01, 14), kN, 0.3, {
        x: t * 0.045,
        y: 0.322,
        z: -0.17,
        rx: Math.PI / 2,
      }),
    );
  (e.push(
    DN(new me(0.019, 0.019, 0.012, 12), AN, 0, {
      x: 0.045,
      y: 0.322,
      z: -0.176,
      rx: Math.PI / 2,
    }),
  ),
    e.push(
      DN(new m(0.168, 0.01, 6, 26), jN, 0.6, { y: 0.17, rx: Math.PI / 2 }),
    ),
    e.push(
      DN(new B(0.075, 0.075, 0.012), jN, 0.8, {
        y: 0.155,
        z: -0.192,
        rx: 0.25,
      }),
    ),
    e.push(
      DN(new B(0.045, 0.008, 0.014), AN, 0, { y: 0.17, z: -0.198, rx: 0.25 }),
    ),
    e.push(
      DN(new B(0.008, 0.05, 0.014), AN, 0, { y: 0.155, z: -0.198, rx: 0.25 }),
    ));
  let t = Vn(e, !1);
  return (t.computeBoundingSphere(), t.computeBoundingBox(), t);
}
var PN = new V(),
  FN = new N(),
  IN = new v(),
  LN = new Pe(),
  RN = new V(),
  zN = new V(),
  BN = new V(),
  VN = new V(),
  HN = new V(0, 1, 0),
  UN = nt.DETAIL;
function WN(e, t) {
  let n = e.attributes.position;
  for (let e = 0; e < n.count; e++)
    (t(PN.fromBufferAttribute(n, e)), n.setXYZ(e, PN.x, PN.y, PN.z));
  return (e.computeVertexNormals(), e);
}
function GN(e, t) {
  let n = Vn(e, !1);
  return (
    LN.set(t.rx ?? 0, t.ry ?? 0, t.rz ?? 0),
    IN.setFromEuler(LN),
    RN.set(t.x ?? 0, t.y ?? 0, t.z ?? 0),
    zN.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1),
    n.applyMatrix4(FN.compose(RN, IN, zN))
  );
}
var KN = (e, t, n, r = {}, i = 0) =>
    VM(
      new Oe(
        e.map(([e, t]) => new ie(e, t)),
        t,
      ),
      n,
      i,
      r,
    ),
  qN = (e, t, n, r = {}, i = 0, a = 1) =>
    $(e, t, UN, n, { ...r, z: (r.z ?? 0) + UN * (a - 0.5) }, i),
  JN = (e, t, n, r = {}, i = 0, a = 1) =>
    HM(
      e,
      e,
      UN,
      t,
      n,
      { ...r, z: (r.z ?? 0) + UN * (a - 0.5), rx: Math.PI / 2 },
      i,
    );
