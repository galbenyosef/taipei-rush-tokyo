// tokyo/assets/actors-qKVitB-C 26 — setattribute
// Lines 9631-9805 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Dc(e) {
  return Ec[e] ?? Qt;
}
var Oc = 0,
  kc = 4,
  Ac = 5,
  jc = 6,
  Mc = 9,
  Nc = class {
    pos = [];
    nor = [];
    col = [];
    surf = [];
    si = [];
    idx = [];
    c = new Me();
    v = new L();
    n = new L();
    nm = new l();
    add(e, t, n, r, i = kc, a = 0.5, o = 0) {
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
        t = new pe();
      (t.setAttribute(`position`, new j(this.pos, 3)),
        t.setAttribute(`normal`, new j(this.nor, 3)),
        t.setAttribute(`color`, new j(this.col, 3)),
        t.setAttribute(`uv`, new j(new Float32Array(e * 2).fill(0.5), 2)),
        t.setAttribute(`uvRect`, new j(new Float32Array(e * 4), 4)),
        t.setAttribute(`surf`, new j(this.surf, 4)),
        t.setAttribute(`skinIndex`, new N(this.si, 4)));
      let n = new Float32Array(e * 4);
      for (let t = 0; t < e; t++) n[t * 4] = 1;
      return (
        t.setAttribute(`skinWeight`, new j(n, 4)),
        t.setIndex(e > 65535 ? new h(this.idx, 1) : new N(this.idx, 1)),
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
  Pc = new I(),
  Fc = new O(),
  Ic = new L(),
  Lc = new L(),
  Rc = (e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) =>
    new R().compose(
      Lc.set(e, t, n),
      Pc.setFromEuler(Fc.set(r, i, a)),
      Ic.set(o, s, c),
    ),
  zc = (e, t, n, r = 0.004) =>
    new Dn(
      e,
      t,
      n,
      1,
      Math.max(1e-4, Math.min(r, e / 2 - 1e-4, t / 2 - 1e-4, n / 2 - 1e-4)),
    ),
  Bc = (e, t, n, r = 10, i = !1) => new w(e, t, n, r, 1, i),
  Vc = (e, t, n, r = 10, i = 8, a = 0, o = Math.PI * 2, s = 0, c = Math.PI) => {
    let l = new _(1, r, i, a, o, s, c);
    return (l.scale(e, t, n), l);
  };
function Hc(e, t) {
  let n = e.mesh.geometry,
    r = n.attributes.position,
    i = n.attributes.skinIndex,
    a = n.attributes.skinWeight,
    o = new L(1 / 0, 1 / 0, 1 / 0),
    s = new L(-1 / 0, -1 / 0, -1 / 0),
    c = new L();
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
  return Uc({ min: o, max: s }, e.height, t, e.joints[H.head].z);
}
function Uc(e, t, n, r) {
  if (!Number.isFinite(e.min.x)) {
    let i = t / 7;
    (e.min.set(-i * 0.34, n, r - i * 0.45),
      e.max.set(i * 0.34, t + 0.01, r + i * 0.42));
  }
  return e;
}
var Wc = [18, 19, 20, 21, 24, 25, 26, 27],
  Gc = 0,
  Kc = 1,
  qc = 2,
  Jc = 3,
  Yc = 4,
  Xc = 6,
  Zc = 7,
  Qc = [
    [26, 0.028, 0.004, -0.004],
    [27, 0.012, 0.004, 0],
    [21, -0.004, 0.006, -0.008],
    [18, -0.006, 0.004, -0.004],
    [19, -0.006, 0.004, -0.004],
    [20, -0.006, 0.004, -0.004],
  ];
function $c(e) {
  return tl(e, ln(Dc(e)));
}
async function el(e) {
  return tl(e, await rn(Dc(e)));
}
function tl(e, t) {
  let n = un(t),
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
  return rl({
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
    head: Hc(t, s),
    propMaterial: Array.isArray(c) ? c[0] : c,
    nudges: Qc,
    update() {},
    dispose: () => t.dispose(),
  });
}
function nl() {
  return Zt(null)[0];
}
