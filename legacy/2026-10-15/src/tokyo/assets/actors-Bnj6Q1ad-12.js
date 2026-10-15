// tokyo/assets/actors-Bnj6Q1ad 12 — joints
// Lines 6058-6143 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function po(e, t) {
  let n = e.mesh.geometry,
    r = n.attributes.position,
    i = n.attributes.skinIndex,
    a = n.attributes.skinWeight,
    o = new R(1 / 0, 1 / 0, 1 / 0),
    s = new R(-1 / 0, -1 / 0, -1 / 0),
    c = new R();
  for (let e = 0; e < r.count; e++) {
    let n = 0,
      l = -1;
    for (let t = 0; t < 4; t++) {
      let r = a.getComponent(e, t);
      r > l && ((l = r), (n = i.getComponent(e, t)));
    }
    (n === H.head || n === H.lidL || n === H.lidR) &&
      (c.fromBufferAttribute(r, e), !(c.y < t - 0.015) && (o.min(c), s.max(c)));
  }
  return mo({ min: o, max: s }, e.height, t, e.joints[H.head].z);
}
function mo(e, t, n, r) {
  if (!Number.isFinite(e.min.x)) {
    let i = t / 7;
    (e.min.set(-i * 0.34, n, r - i * 0.45),
      e.max.set(i * 0.34, t + 0.01, r + i * 0.42));
  }
  return e;
}
var ho = [18, 19, 20, 21, 24, 25, 26, 27],
  go = 0,
  _o = 1,
  vo = 2,
  yo = 3,
  bo = 4,
  xo = 6,
  So = 7,
  Co = [
    [26, 0.028, 0.004, -0.004],
    [27, 0.012, 0.004, 0],
    [21, -0.004, 0.006, -0.008],
    [18, -0.006, 0.004, -0.004],
    [19, -0.006, 0.004, -0.004],
    [20, -0.006, 0.004, -0.004],
  ];
function wo(e) {
  return Eo(e, Xt(e === `wen` ? tn : Bt));
}
async function To(e) {
  return Eo(e, await Gt(e === `wen` ? tn : Bt));
}
function Eo(e, t) {
  let n = Zt(t),
    r = n.bones.slice(),
    i = n.joints.slice(),
    a = [
      [30, H.shoulderL],
      [31, H.shoulderR],
      [32, H.jaw],
    ];
  for (let [e, n] of a) ((r[e] = t.bones[n]), (i[e] = t.joints[n].clone()));
  let o = t.joints,
    s = (o[H.lidL].y + o[H.lidR].y) / 2,
    c = t.mesh.material;
  return Oo({
    id: e,
    kind: `procedural`,
    root: t.root,
    meshes: [t.mesh],
    bones: r,
    joints: i,
    lib: o,
    rc: t,
    height: t.height,
    thighLen: n.thighLen,
    shinLen: n.shinLen,
    hipHeight: n.hipHeight,
    head: po(t, s),
    propMaterial: Array.isArray(c) ? c[0] : c,
    nudges: Co,
    update() {},
    dispose: () => t.dispose(),
  });
}
function Do() {
  return zt(null)[0];
}
