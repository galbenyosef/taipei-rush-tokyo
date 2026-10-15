// tokyo/assets/peopleWorker-Cn7UVw8F 11 — min
// Lines 4377-4791 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
var gt = class e {
    constructor(e = new N(), t = new N(), n = new N()) {
      ((this.a = e), (this.b = t), (this.c = n));
    }
    static getNormal(e, t, n, r) {
      (r.subVectors(n, t), rt.subVectors(e, t), r.cross(rt));
      let i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, r, i) {
      (rt.subVectors(r, t), it.subVectors(n, t), at.subVectors(e, t));
      let a = rt.dot(rt),
        o = rt.dot(it),
        s = rt.dot(at),
        c = it.dot(it),
        l = it.dot(at),
        u = a * c - o * o;
      if (u === 0) return (i.set(0, 0, 0), null);
      let d = 1 / u,
        f = (c * s - o * l) * d,
        p = (a * l - o * s) * d;
      return i.set(1 - f - p, p, f);
    }
    static containsPoint(e, t, n, r) {
      return (
        this.getBarycoord(e, t, n, r, ot) !== null &&
        ot.x >= 0 &&
        ot.y >= 0 &&
        ot.x + ot.y <= 1
      );
    }
    static getInterpolation(e, t, n, r, i, a, o, s) {
      return this.getBarycoord(e, t, n, r, ot) === null
        ? ((s.x = 0),
          (s.y = 0),
          `z` in s && (s.z = 0),
          `w` in s && (s.w = 0),
          null)
        : (s.setScalar(0),
          s.addScaledVector(i, ot.x),
          s.addScaledVector(a, ot.y),
          s.addScaledVector(o, ot.z),
          s);
    }
    static getInterpolatedAttribute(e, t, n, r, i, a) {
      return (
        pt.setScalar(0),
        mt.setScalar(0),
        ht.setScalar(0),
        pt.fromBufferAttribute(e, t),
        mt.fromBufferAttribute(e, n),
        ht.fromBufferAttribute(e, r),
        a.setScalar(0),
        a.addScaledVector(pt, i.x),
        a.addScaledVector(mt, i.y),
        a.addScaledVector(ht, i.z),
        a
      );
    }
    static isFrontFacing(e, t, n, r) {
      return (
        rt.subVectors(n, t),
        it.subVectors(e, t),
        rt.cross(it).dot(r) < 0
      );
    }
    set(e, t, n) {
      return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
    }
    setFromPointsAndIndices(e, t, n, r) {
      return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
    }
    setFromAttributeAndIndices(e, t, n, r) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
    }
    getArea() {
      return (
        rt.subVectors(this.c, this.b),
        it.subVectors(this.a, this.b),
        rt.cross(it).length() * 0.5
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, n) {
      return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
    getInterpolation(t, n, r, i, a) {
      return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
    }
    containsPoint(t) {
      return e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      let n = this.a,
        r = this.b,
        i = this.c,
        a,
        o;
      (st.subVectors(r, n), ct.subVectors(i, n), ut.subVectors(e, n));
      let s = st.dot(ut),
        c = ct.dot(ut);
      if (s <= 0 && c <= 0) return t.copy(n);
      dt.subVectors(e, r);
      let l = st.dot(dt),
        u = ct.dot(dt);
      if (l >= 0 && u <= l) return t.copy(r);
      let d = s * u - l * c;
      if (d <= 0 && s >= 0 && l <= 0)
        return ((a = s / (s - l)), t.copy(n).addScaledVector(st, a));
      ft.subVectors(e, i);
      let f = st.dot(ft),
        p = ct.dot(ft);
      if (p >= 0 && f <= p) return t.copy(i);
      let m = f * c - s * p;
      if (m <= 0 && c >= 0 && p <= 0)
        return ((o = c / (c - p)), t.copy(n).addScaledVector(ct, o));
      let h = l * p - f * u;
      if (h <= 0 && u - l >= 0 && f - p >= 0)
        return (
          lt.subVectors(i, r),
          (o = (u - l) / (u - l + (f - p))),
          t.copy(r).addScaledVector(lt, o)
        );
      let g = 1 / (h + m + d);
      return (
        (a = m * g),
        (o = d * g),
        t.copy(n).addScaledVector(st, a).addScaledVector(ct, o)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  },
  _t = class {
    constructor(
      e = new N(1 / 0, 1 / 0, 1 / 0),
      t = new N(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.isBox3 = !0), (this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3)
        this.expandByPoint(yt.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++)
        this.expandByPoint(yt.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = yt.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    setFromObject(e, t = !1) {
      return (this.makeEmpty(), this.expandByObject(e, t));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      let n = e.geometry;
      if (n !== void 0) {
        let r = n.getAttribute(`position`);
        if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
          for (let t = 0, n = r.count; t < n; t++)
            (e.isMesh === !0
              ? e.getVertexPosition(t, yt)
              : yt.fromBufferAttribute(r, t),
              yt.applyMatrix4(e.matrixWorld),
              this.expandByPoint(yt));
        else
          (e.boundingBox === void 0
            ? (n.boundingBox === null && n.computeBoundingBox(),
              bt.copy(n.boundingBox))
            : (e.boundingBox === null && e.computeBoundingBox(),
              bt.copy(e.boundingBox)),
            bt.applyMatrix4(e.matrixWorld),
            this.union(bt));
      }
      let r = e.children;
      for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
      return this;
    }
    containsPoint(e) {
      return (
        e.x >= this.min.x &&
        e.x <= this.max.x &&
        e.y >= this.min.y &&
        e.y <= this.max.y &&
        e.z >= this.min.z &&
        e.z <= this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(e) {
      return (
        e.max.x >= this.min.x &&
        e.min.x <= this.max.x &&
        e.max.y >= this.min.y &&
        e.min.y <= this.max.y &&
        e.max.z >= this.min.z &&
        e.min.z <= this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, yt),
        yt.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      (this.getCenter(Dt),
        Ot.subVectors(this.max, Dt),
        xt.subVectors(e.a, Dt),
        St.subVectors(e.b, Dt),
        Ct.subVectors(e.c, Dt),
        wt.subVectors(St, xt),
        Tt.subVectors(Ct, St),
        Et.subVectors(xt, Ct));
      let t = [
        0,
        -wt.z,
        wt.y,
        0,
        -Tt.z,
        Tt.y,
        0,
        -Et.z,
        Et.y,
        wt.z,
        0,
        -wt.x,
        Tt.z,
        0,
        -Tt.x,
        Et.z,
        0,
        -Et.x,
        -wt.y,
        wt.x,
        0,
        -Tt.y,
        Tt.x,
        0,
        -Et.y,
        Et.x,
        0,
      ];
      return !jt(t, xt, St, Ct, Ot) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !jt(t, xt, St, Ct, Ot))
        ? !1
        : (kt.crossVectors(wt, Tt),
          (t = [kt.x, kt.y, kt.z]),
          jt(t, xt, St, Ct, Ot));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, yt).distanceTo(e);
    }
    getBoundingSphere(e) {
      return (
        this.isEmpty()
          ? e.makeEmpty()
          : (this.getCenter(e.center),
            (e.radius = this.getSize(yt).length() * 0.5)),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    applyMatrix4(e) {
      return this.isEmpty()
        ? this
        : (vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(vt),
          this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(e) {
      return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
    }
  };
