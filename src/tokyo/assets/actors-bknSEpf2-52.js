// tokyo/assets/actors-bknSEpf2 52 — setattribute
// Lines 19627-19801 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function gm(e) {
  return hm[e] ?? sn;
}
var _m = 0,
  vm = 4,
  ym = 5,
  bm = 6,
  xm = 9,
  Sm = class {
    pos = [];
    nor = [];
    col = [];
    surf = [];
    si = [];
    idx = [];
    c = new j();
    v = new V();
    n = new V();
    nm = new je();
    add(e, t, n, r, i = vm, a = 0.5, o = 0) {
      let s = e.attributes.position;
      e.attributes.normal || e.computeVertexNormals();
      let c = e.attributes.normal,
        l = this.pos.length / 3;
      (this.nm.getNormalMatrix(t), typeof n == `number` && this.c.setHex(n));
      for (let e = 0; e < s.count; e++)
        (this.v.fromBufferAttribute(s, e).applyMatrix4(t),
          this.n.fromBufferAttribute(c, e).applyMatrix3(this.nm).normalize(),
          this.pos.push(this.v.x, this.v.y, this.v.z),
          this.nor.push(this.n.x, this.n.y, this.n.z),
          typeof n == `function` && n(this.v.x, this.v.y, this.v.z, this.c),
          this.col.push(this.c.r, this.c.g, this.c.b),
          this.surf.push(i, a, 0, o),
          this.si.push(r, 0, 0, 0));
      if (e.index)
        for (let t = 0; t < e.index.count; t++)
          this.idx.push(l + e.index.getX(t));
      else for (let e = 0; e < s.count; e++) this.idx.push(l + e);
      e.dispose();
    }
    build() {
      let e = this.pos.length / 3,
        t = new le();
      (t.setAttribute(`position`, new I(this.pos, 3)),
        t.setAttribute(`normal`, new I(this.nor, 3)),
        t.setAttribute(`color`, new I(this.col, 3)),
        t.setAttribute(`uv`, new I(new Float32Array(e * 2).fill(0.5), 2)),
        t.setAttribute(`uvRect`, new I(new Float32Array(e * 4), 4)),
        t.setAttribute(`surf`, new I(this.surf, 4)),
        t.setAttribute(`skinIndex`, new xe(this.si, 4)));
      let n = new Float32Array(e * 4);
      for (let t = 0; t < e; t++) n[t * 4] = 1;
      return (
        t.setAttribute(`skinWeight`, new I(n, 4)),
        t.setIndex(e > 65535 ? new _(this.idx, 1) : new xe(this.idx, 1)),
        t.computeBoundingSphere(),
        (this.pos = []),
        (this.nor = []),
        (this.col = []),
        (this.surf = []),
        (this.si = []),
        (this.idx = []),
        t
      );
    }
  },
  Cm = new v(),
  wm = new Pe(),
  Tm = new V(),
  Em = new V(),
  Dm = (e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) =>
    new N().compose(
      Em.set(e, t, n),
      Cm.setFromEuler(wm.set(r, i, a)),
      Tm.set(o, s, c),
    ),
  Om = (e, t, n, r = 0.004) =>
    new Ln(
      e,
      t,
      n,
      1,
      Math.max(1e-4, Math.min(r, e / 2 - 1e-4, t / 2 - 1e-4, n / 2 - 1e-4)),
    ),
  km = (e, t, n, r = 10, i = !1) => new me(e, t, n, r, 1, i),
  Am = (e, t, n, r = 10, i = 8, a = 0, o = Math.PI * 2, s = 0, c = Math.PI) => {
    let l = new k(1, r, i, a, o, s, c);
    return (l.scale(e, t, n), l);
  };
function jm(e, t) {
  let n = e.mesh.geometry,
    r = n.attributes.position,
    i = n.attributes.skinIndex,
    a = n.attributes.skinWeight,
    o = new V(1 / 0, 1 / 0, 1 / 0),
    s = new V(-1 / 0, -1 / 0, -1 / 0),
    c = new V();
  for (let e = 0; e < r.count; e++) {
    let n = 0,
      l = -1;
    for (let t = 0; t < 4; t++) {
      let r = a.getComponent(e, t);
      r > l && ((l = r), (n = i.getComponent(e, t)));
    }
    (n === W.head || n === W.lidL || n === W.lidR) &&
      (c.fromBufferAttribute(r, e), !(c.y < t - 0.015) && (o.min(c), s.max(c)));
  }
  return Mm({ min: o, max: s }, e.height, t, e.joints[W.head].z);
}
function Mm(e, t, n, r) {
  if (!Number.isFinite(e.min.x)) {
    let i = t / 7;
    (e.min.set(-i * 0.34, n, r - i * 0.45),
      e.max.set(i * 0.34, t + 0.01, r + i * 0.42));
  }
  return e;
}
var Nm = [18, 19, 20, 21, 24, 25, 26, 27],
  Pm = 0,
  Fm = 1,
  Im = 2,
  Lm = 3,
  Rm = 4,
  zm = 6,
  Bm = 7,
  Vm = [
    [26, 0.028, 0.004, -0.004],
    [27, 0.012, 0.004, 0],
    [21, -0.004, 0.006, -0.008],
    [18, -0.006, 0.004, -0.004],
    [19, -0.006, 0.004, -0.004],
    [20, -0.006, 0.004, -0.004],
  ];
function Hm(e) {
  return Wm(e, _n(gm(e)));
}
async function Um(e) {
  return Wm(e, await fn(gm(e)));
}
function Wm(e, t) {
  let n = vn(t),
    r = n.bones.slice(),
    i = n.joints.slice(),
    a = [
      [30, W.shoulderL],
      [31, W.shoulderR],
      [32, W.jaw],
    ];
  for (let [e, n] of a) ((r[e] = t.bones[n]), (i[e] = t.joints[n].clone()));
  let o = t.joints,
    s = (o[W.lidL].y + o[W.lidR].y) / 2,
    c = t.mesh.material;
  return Km({
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
    head: jm(t, s),
    propMaterial: Array.isArray(c) ? c[0] : c,
    nudges: Vm,
    update() {},
    dispose: () => t.dispose(),
  });
}
function Gm() {
  return on(null)[0];
}
