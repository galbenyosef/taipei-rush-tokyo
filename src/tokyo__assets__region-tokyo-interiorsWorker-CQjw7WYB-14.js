// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 14 — count
// Lines 5159-5676 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
var Xt = class e extends O {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ut++ }),
      (this.uuid = A()),
      (this.name = ``),
      (this.type = `BufferGeometry`),
      (this.index = null),
      (this.indirect = null),
      (this.indirectOffset = 0),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}),
      (this._transformed = !1));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      (this.index = Array.isArray(e) ? new (b(e) ? Lt : It)(e, 1) : e),
      this
    );
  }
  setIndirect(e, t = 0) {
    return ((this.indirect = e), (this.indirectOffset = t), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    let t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    let n = this.attributes.normal;
    if (n !== void 0) {
      let t = new P().getNormalMatrix(e);
      (n.applyNormalMatrix(t), (n.needsUpdate = !0));
    }
    let r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      (this._transformed = !0),
      this
    );
  }
  applyQuaternion(e) {
    return (Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this);
  }
  rotateX(e) {
    return (Wt.makeRotationX(e), this.applyMatrix4(Wt), this);
  }
  rotateY(e) {
    return (Wt.makeRotationY(e), this.applyMatrix4(Wt), this);
  }
  rotateZ(e) {
    return (Wt.makeRotationZ(e), this.applyMatrix4(Wt), this);
  }
  translate(e, t, n) {
    return (Wt.makeTranslation(e, t, n), this.applyMatrix4(Wt), this);
  }
  scale(e, t, n) {
    return (Wt.makeScale(e, t, n), this.applyMatrix4(Wt), this);
  }
  lookAt(e) {
    return (
      Gt.lookAt(e),
      Gt.updateMatrix(),
      this.applyMatrix4(Gt.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Kt).negate(),
      this.translate(Kt.x, Kt.y, Kt.z),
      this
    );
  }
  setFromPoints(e) {
    let t = this.getAttribute(`position`);
    if (t === void 0) {
      let t = [];
      for (let n = 0, r = e.length; n < r; n++) {
        let r = e[n];
        t.push(r.x, r.y, r.z || 0);
      }
      this.setAttribute(`position`, new Rt(t, 3));
    } else {
      let n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        let n = e[r];
        t.setXYZ(r, n.x, n.y, n.z || 0);
      }
      (e.length > t.count &&
        T(
          `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`,
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _t());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (E(
        `BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,
        this,
      ),
        this.boundingBox.set(
          new N(-1 / 0, -1 / 0, -1 / 0),
          new N(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          (qt.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (Yt.addVectors(this.boundingBox.min, qt.min),
                this.boundingBox.expandByPoint(Yt),
                Yt.addVectors(this.boundingBox.max, qt.max),
                this.boundingBox.expandByPoint(Yt))
              : (this.boundingBox.expandByPoint(qt.min),
                this.boundingBox.expandByPoint(qt.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      E(
        `BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ht());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (E(
        `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,
        this,
      ),
        this.boundingSphere.set(new N(), 1 / 0));
      return;
    }
    if (e) {
      let n = this.boundingSphere.center;
      if ((qt.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          (Jt.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (Yt.addVectors(qt.min, Jt.min),
                qt.expandByPoint(Yt),
                Yt.addVectors(qt.max, Jt.max),
                qt.expandByPoint(Yt))
              : (qt.expandByPoint(Jt.min), qt.expandByPoint(Jt.max)));
        }
      qt.getCenter(n);
      let r = 0;
      for (let t = 0, i = e.count; t < i; t++)
        (Yt.fromBufferAttribute(e, t),
          (r = Math.max(r, n.distanceToSquared(Yt))));
      if (t)
        for (let i = 0, a = t.length; i < a; i++) {
          let a = t[i],
            o = this.morphTargetsRelative;
          for (let t = 0, i = a.count; t < i; t++)
            (Yt.fromBufferAttribute(a, t),
              o && (Kt.fromBufferAttribute(e, t), Yt.add(Kt)),
              (r = Math.max(r, n.distanceToSquared(Yt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          E(
            `BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,
            this,
          ));
    }
  }
  computeTangents() {
    let e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      E(
        `BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
      );
      return;
    }
    let n = t.position,
      r = t.normal,
      i = t.uv,
      a = this.getAttribute(`tangent`);
    (a === void 0 || a.count !== n.count) &&
      ((a = new Ft(new Float32Array(4 * n.count), 4)),
      this.setAttribute(`tangent`, a));
    let o = [],
      s = [];
    for (let e = 0; e < n.count; e++) ((o[e] = new N()), (s[e] = new N()));
    let c = new N(),
      l = new N(),
      u = new N(),
      d = new M(),
      f = new M(),
      p = new M(),
      m = new N(),
      h = new N();
    function g(e, t, r) {
      (c.fromBufferAttribute(n, e),
        l.fromBufferAttribute(n, t),
        u.fromBufferAttribute(n, r),
        d.fromBufferAttribute(i, e),
        f.fromBufferAttribute(i, t),
        p.fromBufferAttribute(i, r),
        l.sub(c),
        u.sub(c),
        f.sub(d),
        p.sub(d));
      let a = 1 / (f.x * p.y - p.x * f.y);
      isFinite(a) &&
        (m
          .copy(l)
          .multiplyScalar(p.y)
          .addScaledVector(u, -f.y)
          .multiplyScalar(a),
        h
          .copy(u)
          .multiplyScalar(f.x)
          .addScaledVector(l, -p.x)
          .multiplyScalar(a),
        o[e].add(m),
        o[t].add(m),
        o[r].add(m),
        s[e].add(h),
        s[t].add(h),
        s[r].add(h));
    }
    let _ = this.groups;
    _.length === 0 && (_ = [{ start: 0, count: e.count }]);
    for (let t = 0, n = _.length; t < n; ++t) {
      let n = _[t],
        r = n.start,
        i = n.count;
      for (let t = r, n = r + i; t < n; t += 3)
        g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
    }
    let v = new N(),
      y = new N(),
      b = new N(),
      x = new N();
    function S(e) {
      (b.fromBufferAttribute(r, e), x.copy(b));
      let t = o[e];
      (v.copy(t),
        v.sub(b.multiplyScalar(b.dot(t))).normalize(),
        y.crossVectors(x, t));
      let n = y.dot(s[e]) < 0 ? -1 : 1;
      a.setXYZW(e, v.x, v.y, v.z, n);
    }
    for (let t = 0, n = _.length; t < n; ++t) {
      let n = _[t],
        r = n.start,
        i = n.count;
      for (let t = r, n = r + i; t < n; t += 3)
        (S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2)));
    }
    this._transformed = !0;
  }
  computeVertexNormals() {
    let e = this.index,
      t = this.getAttribute(`position`);
    if (t !== void 0) {
      let n = this.getAttribute(`normal`);
      if (n === void 0 || n.count !== t.count)
        ((n = new Ft(new Float32Array(t.count * 3), 3)),
          this.setAttribute(`normal`, n));
      else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
      let r = new N(),
        i = new N(),
        a = new N(),
        o = new N(),
        s = new N(),
        c = new N(),
        l = new N(),
        u = new N();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          let f = e.getX(d + 0),
            p = e.getX(d + 1),
            m = e.getX(d + 2);
          (r.fromBufferAttribute(t, f),
            i.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, m),
            l.subVectors(a, i),
            u.subVectors(r, i),
            l.cross(u),
            o.fromBufferAttribute(n, f),
            s.fromBufferAttribute(n, p),
            c.fromBufferAttribute(n, m),
            o.add(l),
            s.add(l),
            c.add(l),
            n.setXYZ(f, o.x, o.y, o.z),
            n.setXYZ(p, s.x, s.y, s.z),
            n.setXYZ(m, c.x, c.y, c.z));
        }
      else
        for (let e = 0, o = t.count; e < o; e += 3)
          (r.fromBufferAttribute(t, e + 0),
            i.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            l.subVectors(a, i),
            u.subVectors(r, i),
            l.cross(u),
            n.setXYZ(e + 0, l.x, l.y, l.z),
            n.setXYZ(e + 1, l.x, l.y, l.z),
            n.setXYZ(e + 2, l.x, l.y, l.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    let e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (Yt.fromBufferAttribute(e, t),
        Yt.normalize(),
        e.setXYZ(t, Yt.x, Yt.y, Yt.z));
  }
  toNonIndexed() {
    function t(e, t) {
      let n = e.array,
        r = e.itemSize,
        i = e.normalized,
        a = new n.constructor(t.length * r),
        o = 0,
        s = 0;
      for (let i = 0, c = t.length; i < c; i++) {
        o = e.isInterleavedBufferAttribute
          ? t[i] * e.data.stride + e.offset
          : t[i] * r;
        for (let e = 0; e < r; e++) a[s++] = n[o++];
      }
      return new Ft(a, r, i);
    }
    if (this.index === null)
      return (
        T(
          `BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`,
        ),
        this
      );
    let n = new e(),
      r = this.index.array,
      i = this.attributes;
    for (let e in i) {
      let a = i[e],
        o = t(a, r);
      n.setAttribute(e, o);
    }
    let a = this.morphAttributes;
    for (let e in a) {
      let i = [],
        o = a[e];
      for (let e = 0, n = o.length; e < n; e++) {
        let n = o[e],
          a = t(n, r);
        i.push(a);
      }
      n.morphAttributes[e] = i;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    let o = this.groups;
    for (let e = 0, t = o.length; e < t; e++) {
      let t = o[e];
      n.addGroup(t.start, t.count, t.materialIndex);
    }
    return n;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.7,
        type: `BufferGeometry`,
        generator: `BufferGeometry.toJSON`,
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type =
        this.parameters !== void 0 && this._transformed === !0
          ? `BufferGeometry`
          : this.type),
      (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0 && this._transformed !== !0)
    ) {
      let t = this.parameters;
      for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    let t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    let n = this.attributes;
    for (let t in n) {
      let r = n[t];
      e.data.attributes[t] = r.toJSON(e.data);
    }
    let r = {},
      i = !1;
    for (let t in this.morphAttributes) {
      let n = this.morphAttributes[t],
        a = [];
      for (let t = 0, r = n.length; t < r; t++) {
        let r = n[t];
        a.push(r.toJSON(e.data));
      }
      a.length > 0 && ((r[t] = a), (i = !0));
    }
    i &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    let a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    let o = this.boundingSphere;
    return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    let t = {};
    this.name = e.name;
    let n = e.index;
    n !== null && this.setIndex(n.clone());
    let r = e.attributes;
    for (let e in r) {
      let n = r[e];
      this.setAttribute(e, n.clone(t));
    }
    let i = e.morphAttributes;
    for (let e in i) {
      let n = [],
        r = i[e];
      for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    let a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      let t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    let o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    let s = e.boundingSphere;
    return (
      s !== null && (this.boundingSphere = s.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      (this._transformed = e._transformed),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
};
