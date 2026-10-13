// tokyo__assets__peopleWorker-Cn7UVw8F 18 — pure__
// Lines 6687-7031 of readable/tokyo__assets__peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
const un = /*@__PURE__*/ new Ce(),
  dn = /*@__PURE__*/ new cn(),
  fn = /*@__PURE__*/ new Ht(),
  pn = /*@__PURE__*/ new N(),
  mn = /*@__PURE__*/ new N(),
  hn = /*@__PURE__*/ new N(),
  gn = /*@__PURE__*/ new N(),
  _n = /*@__PURE__*/ new N(),
  vn = /*@__PURE__*/ new N(),
  yn = /*@__PURE__*/ new N(),
  bn = /*@__PURE__*/ new N();
var xn = class extends Xe {
  constructor(e = new Xt(), t = new ln()) {
    (super(),
      (this.isMesh = !0),
      (this.type = `Mesh`),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      let n = e[t[0]];
      if (n !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let e = 0, t = n.length; e < t; e++) {
          let t = n[e].name || String(e);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    let n = this.geometry,
      r = n.attributes.position,
      i = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    let o = this.morphTargetInfluences;
    if (i && o) {
      vn.set(0, 0, 0);
      for (let n = 0, r = i.length; n < r; n++) {
        let r = o[n],
          s = i[n];
        r !== 0 &&
          (_n.fromBufferAttribute(s, e),
          a ? vn.addScaledVector(_n, r) : vn.addScaledVector(_n.sub(t), r));
      }
      t.add(vn);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    let n = this.geometry,
      r = this.material,
      i = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      fn.copy(n.boundingSphere),
      fn.applyMatrix4(i),
      dn.copy(e.ray).recast(e.near),
      !(
        fn.containsPoint(dn.origin) === !1 &&
        (dn.intersectSphere(fn, pn) === null ||
          dn.origin.distanceToSquared(pn) > (e.far - e.near) ** 2)
      ) &&
        (un.copy(i).invert(),
        dn.copy(e.ray).applyMatrix4(un),
        (n.boundingBox === null || dn.intersectsBox(n.boundingBox) !== !1) &&
          this._computeIntersections(e, t, dn)));
  }
  _computeIntersections(e, t, n) {
    let r,
      i = this.geometry,
      a = this.material,
      o = i.index,
      s = i.attributes.position,
      c = i.attributes.uv,
      l = i.attributes.uv1,
      u = i.attributes.normal,
      d = i.groups,
      f = i.drawRange;
    if (o !== null) {
      if (Array.isArray(a))
        for (let i = 0, s = d.length; i < s; i++) {
          let s = d[i],
            p = a[s.materialIndex],
            m = Math.max(s.start, f.start),
            h = Math.min(
              o.count,
              Math.min(s.start + s.count, f.start + f.count),
            );
          for (let i = m, a = h; i < a; i += 3) {
            let a = o.getX(i),
              d = o.getX(i + 1),
              f = o.getX(i + 2);
            ((r = Cn(this, p, e, n, c, l, u, a, d, f)),
              r &&
                ((r.faceIndex = Math.floor(i / 3)),
                (r.face.materialIndex = s.materialIndex),
                t.push(r)));
          }
        }
      else {
        let i = Math.max(0, f.start),
          s = Math.min(o.count, f.start + f.count);
        for (let d = i, f = s; d < f; d += 3) {
          let i = o.getX(d),
            s = o.getX(d + 1),
            f = o.getX(d + 2);
          ((r = Cn(this, a, e, n, c, l, u, i, s, f)),
            r && ((r.faceIndex = Math.floor(d / 3)), t.push(r)));
        }
      }
    } else if (s !== void 0) {
      if (Array.isArray(a))
        for (let i = 0, o = d.length; i < o; i++) {
          let o = d[i],
            p = a[o.materialIndex],
            m = Math.max(o.start, f.start),
            h = Math.min(
              s.count,
              Math.min(o.start + o.count, f.start + f.count),
            );
          for (let i = m, a = h; i < a; i += 3) {
            let a = i,
              s = i + 1,
              d = i + 2;
            ((r = Cn(this, p, e, n, c, l, u, a, s, d)),
              r &&
                ((r.faceIndex = Math.floor(i / 3)),
                (r.face.materialIndex = o.materialIndex),
                t.push(r)));
          }
        }
      else {
        let i = Math.max(0, f.start),
          o = Math.min(s.count, f.start + f.count);
        for (let s = i, d = o; s < d; s += 3) {
          let i = s,
            o = s + 1,
            d = s + 2;
          ((r = Cn(this, a, e, n, c, l, u, i, o, d)),
            r && ((r.faceIndex = Math.floor(s / 3)), t.push(r)));
        }
      }
    }
  }
};
function Sn(e, t, n, r, i, a, o, s) {
  let c;
  if (
    ((c =
      t.side === 1
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side === 0, s)),
    c === null)
  )
    return null;
  (bn.copy(s), bn.applyMatrix4(e.matrixWorld));
  let l = n.ray.origin.distanceTo(bn);
  return l < n.near || l > n.far
    ? null
    : { distance: l, point: bn.clone(), object: e };
}
function Cn(e, t, n, r, i, a, o, s, c, l) {
  (e.getVertexPosition(s, mn),
    e.getVertexPosition(c, hn),
    e.getVertexPosition(l, gn));
  let u = Sn(e, t, n, r, mn, hn, gn, yn);
  if (u) {
    let e = new N();
    (gt.getBarycoord(yn, mn, hn, gn, e),
      i && (u.uv = gt.getInterpolatedAttribute(i, s, c, l, e, new M())),
      a && (u.uv1 = gt.getInterpolatedAttribute(a, s, c, l, e, new M())),
      o &&
        ((u.normal = gt.getInterpolatedAttribute(o, s, c, l, e, new N())),
        u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1)));
    let t = { a: s, b: c, c: l, normal: new N(), materialIndex: 0 };
    (gt.getNormal(mn, hn, gn, t.normal), (u.face = t), (u.barycoord = e));
  }
  return u;
}
const wn = /*@__PURE__*/ new Se(),
  Tn = /*@__PURE__*/ new Se(),
  En = /*@__PURE__*/ new Se(),
  Dn = /*@__PURE__*/ new Se(),
  On = /*@__PURE__*/ new Ce(),
  kn = /*@__PURE__*/ new N(),
  An = /*@__PURE__*/ new Ht(),
  jn = /*@__PURE__*/ new Ce(),
  Mn = /*@__PURE__*/ new cn();
var Nn = class extends xn {
    constructor(e, t) {
      (super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = `SkinnedMesh`),
        (this.bindMode = `attached`),
        (this.bindMatrix = new Ce()),
        (this.bindMatrixInverse = new Ce()),
        (this.boundingBox = null),
        (this.boundingSphere = null));
    }
    computeBoundingBox() {
      let e = this.geometry;
      (this.boundingBox === null && (this.boundingBox = new _t()),
        this.boundingBox.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, kn), this.boundingBox.expandByPoint(kn));
    }
    computeBoundingSphere() {
      let e = this.geometry;
      (this.boundingSphere === null && (this.boundingSphere = new Ht()),
        this.boundingSphere.makeEmpty());
      let t = e.getAttribute(`position`);
      for (let e = 0; e < t.count; e++)
        (this.getVertexPosition(e, kn), this.boundingSphere.expandByPoint(kn));
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null &&
          (this.boundingSphere = e.boundingSphere.clone()),
        this
      );
    }
    raycast(e, t) {
      let n = this.material,
        r = this.matrixWorld;
      n !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        An.copy(this.boundingSphere),
        An.applyMatrix4(r),
        e.ray.intersectsSphere(An) !== !1 &&
          (jn.copy(r).invert(),
          Mn.copy(e.ray).applyMatrix4(jn),
          (this.boundingBox === null ||
            Mn.intersectsBox(this.boundingBox) !== !1) &&
            this._computeIntersections(e, t, Mn)));
    }
    getVertexPosition(e, t) {
      return (super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t);
    }
    bind(e, t) {
      ((this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert());
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      let e = new Se(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, r = t.count; n < r; n++) {
        e.fromBufferAttribute(t, n);
        let r = 1 / e.manhattanLength();
        (r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r),
          t.setXYZW(n, e.x, e.y, e.z, e.w));
      }
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.bindMode === `attached`
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === `detached`
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : T(`SkinnedMesh: Unrecognized bindMode: ` + this.bindMode));
    }
    applyBoneTransform(e, t) {
      let n = this.skeleton,
        r = this.geometry;
      (Tn.fromBufferAttribute(r.attributes.skinIndex, e),
        En.fromBufferAttribute(r.attributes.skinWeight, e),
        t.isVector4
          ? (wn.copy(t), t.set(0, 0, 0, 0))
          : (wn.set(...t, 1), t.set(0, 0, 0)),
        wn.applyMatrix4(this.bindMatrix));
      for (let e = 0; e < 4; e++) {
        let r = En.getComponent(e);
        if (r !== 0) {
          let i = Tn.getComponent(e);
          (On.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
            t.addScaledVector(Dn.copy(wn).applyMatrix4(On), r));
        }
      }
      return (
        t.isVector4 && (t.w = wn.w),
        t.applyMatrix4(this.bindMatrixInverse)
      );
    }
  },
  Pn = class extends Xe {
    constructor() {
      (super(), (this.isBone = !0), (this.type = `Bone`));
    }
  },
  Fn = class extends xe {
    constructor(e = null, t = 1, n = 1, i, a, o, s, c, l = r, u = r, d, f) {
      (super(null, o, s, c, l, u, i, a, d, f),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1));
    }
  };
const In = /*@__PURE__*/ new Ce(),
  Ln = /*@__PURE__*/ new Ce();
