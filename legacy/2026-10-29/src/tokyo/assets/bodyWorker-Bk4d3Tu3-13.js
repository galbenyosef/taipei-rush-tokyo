// tokyo/assets/bodyWorker-Bk4d3Tu3 13 — push
// Lines 4973-5967 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
var Et = class e extends S {
    constructor() {
      (super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: bt++ }),
        (this.uuid = w()),
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
        (this.index = Array.isArray(e) ? new (m(e) ? ht : mt)(e, 1) : e),
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
        let t = new ne().getNormalMatrix(e);
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
      return (xt.makeRotationFromQuaternion(e), this.applyMatrix4(xt), this);
    }
    rotateX(e) {
      return (xt.makeRotationX(e), this.applyMatrix4(xt), this);
    }
    rotateY(e) {
      return (xt.makeRotationY(e), this.applyMatrix4(xt), this);
    }
    rotateZ(e) {
      return (xt.makeRotationZ(e), this.applyMatrix4(xt), this);
    }
    translate(e, t, n) {
      return (xt.makeTranslation(e, t, n), this.applyMatrix4(xt), this);
    }
    scale(e, t, n) {
      return (xt.makeScale(e, t, n), this.applyMatrix4(xt), this);
    }
    lookAt(e) {
      return (
        St.lookAt(e),
        St.updateMatrix(),
        this.applyMatrix4(St.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Ct).negate(),
        this.translate(Ct.x, Ct.y, Ct.z),
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
        this.setAttribute(`position`, new L(t, 3));
      } else {
        let n = Math.min(e.length, t.count);
        for (let r = 0; r < n; r++) {
          let n = e[r];
          t.setXYZ(r, n.x, n.y, n.z || 0);
        }
        (e.length > t.count &&
          y(
            `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`,
          ),
          (t.needsUpdate = !0));
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Ze());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (b(
          `BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,
          this,
        ),
          this.boundingBox.set(
            new M(-1 / 0, -1 / 0, -1 / 0),
            new M(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (wt.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (R.addVectors(this.boundingBox.min, wt.min),
                  this.boundingBox.expandByPoint(R),
                  R.addVectors(this.boundingBox.max, wt.max),
                  this.boundingBox.expandByPoint(R))
                : (this.boundingBox.expandByPoint(wt.min),
                  this.boundingBox.expandByPoint(wt.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        b(
          `BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new yt());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (b(
          `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,
          this,
        ),
          this.boundingSphere.set(new M(), 1 / 0));
        return;
      }
      if (e) {
        let n = this.boundingSphere.center;
        if ((wt.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (Tt.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (R.addVectors(wt.min, Tt.min),
                  wt.expandByPoint(R),
                  R.addVectors(wt.max, Tt.max),
                  wt.expandByPoint(R))
                : (wt.expandByPoint(Tt.min), wt.expandByPoint(Tt.max)));
          }
        wt.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++)
          (R.fromBufferAttribute(e, t),
            (r = Math.max(r, n.distanceToSquared(R))));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++)
              (R.fromBufferAttribute(a, t),
                o && (Ct.fromBufferAttribute(e, t), R.add(Ct)),
                (r = Math.max(r, n.distanceToSquared(R))));
          }
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            b(
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
        b(
          `BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
        );
        return;
      }
      let n = t.position,
        r = t.normal,
        i = t.uv,
        a = this.getAttribute(`tangent`);
      (a === void 0 || a.count !== n.count) &&
        ((a = new I(new Float32Array(4 * n.count), 4)),
        this.setAttribute(`tangent`, a));
      let o = [],
        s = [];
      for (let e = 0; e < n.count; e++) ((o[e] = new M()), (s[e] = new M()));
      let c = new M(),
        l = new M(),
        u = new M(),
        d = new A(),
        f = new A(),
        p = new A(),
        m = new M(),
        h = new M();
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
      let v = new M(),
        y = new M(),
        x = new M(),
        S = new M();
      function C(e) {
        (x.fromBufferAttribute(r, e), S.copy(x));
        let t = o[e];
        (v.copy(t),
          v.sub(x.multiplyScalar(x.dot(t))).normalize(),
          y.crossVectors(S, t));
        let n = y.dot(s[e]) < 0 ? -1 : 1;
        a.setXYZW(e, v.x, v.y, v.z, n);
      }
      for (let t = 0, n = _.length; t < n; ++t) {
        let n = _[t],
          r = n.start,
          i = n.count;
        for (let t = r, n = r + i; t < n; t += 3)
          (C(e.getX(t + 0)), C(e.getX(t + 1)), C(e.getX(t + 2)));
      }
      this._transformed = !0;
    }
    computeVertexNormals() {
      let e = this.index,
        t = this.getAttribute(`position`);
      if (t !== void 0) {
        let n = this.getAttribute(`normal`);
        if (n === void 0 || n.count !== t.count)
          ((n = new I(new Float32Array(t.count * 3), 3)),
            this.setAttribute(`normal`, n));
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        let r = new M(),
          i = new M(),
          a = new M(),
          o = new M(),
          s = new M(),
          c = new M(),
          l = new M(),
          u = new M();
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
        (R.fromBufferAttribute(e, t),
          R.normalize(),
          e.setXYZ(t, R.x, R.y, R.z));
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
        return new I(a, r, i);
      }
      if (this.index === null)
        return (
          y(
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
  },
  Dt = class e extends Et {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
      (super(),
        (this.type = `BoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: r,
          heightSegments: i,
          depthSegments: a,
        }));
      let o = this;
      ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = 0,
        f = 0;
      (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new L(c, 3)),
        this.setAttribute(`normal`, new L(l, 3)),
        this.setAttribute(`uv`, new L(u, 2)));
      function p(e, t, n, r, i, a, p, m, h, g, _) {
        let v = a / h,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = m / 2,
          C = h + 1,
          w = g + 1,
          T = 0,
          E = 0,
          D = new M();
        for (let a = 0; a < w; a++) {
          let o = a * y - x;
          for (let s = 0; s < C; s++)
            ((D[e] = (s * v - b) * r),
              (D[t] = o * i),
              (D[n] = S),
              c.push(D.x, D.y, D.z),
              (D[e] = 0),
              (D[t] = 0),
              (D[n] = m > 0 ? 1 : -1),
              l.push(D.x, D.y, D.z),
              u.push(s / h),
              u.push(1 - a / g),
              (T += 1));
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < h; t++) {
            let n = d + t + C * e,
              r = d + t + C * (e + 1),
              i = d + (t + 1) + C * (e + 1),
              a = d + (t + 1) + C * e;
            (s.push(n, r, a), s.push(r, i, a), (E += 6));
          }
        (o.addGroup(f, E, _), (f += E), (d += T));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  },
  Ot = class e extends Et {
    constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
      (super(),
        (this.type = `CircleGeometry`),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r,
        }),
        (t = Math.max(3, t)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = new M(),
        l = new A();
      (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5));
      for (let i = 0, u = 3; i <= t; i++, u += 3) {
        let d = n + (i / t) * r;
        ((c.x = e * Math.cos(d)),
          (c.y = e * Math.sin(d)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (l.x = (a[u] / e + 1) / 2),
          (l.y = (a[u + 1] / e + 1) / 2),
          s.push(l.x, l.y));
      }
      for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
      (this.setIndex(i),
        this.setAttribute(`position`, new L(a, 3)),
        this.setAttribute(`normal`, new L(o, 3)),
        this.setAttribute(`uv`, new L(s, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  kt = class e extends Et {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 32,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new L(u, 3)),
        this.setAttribute(`normal`, new L(d, 3)),
        this.setAttribute(`uv`, new L(f, 2)));
      function _() {
        let a = new M(),
          _ = new M(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let n = 0; n < r; n++)
          for (let r = 0; r < i; r++) {
            let a = m[r][n],
              o = m[r + 1][n],
              s = m[r + 1][n + 1],
              c = m[r][n + 1];
            ((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
              (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new A(),
          m = new M(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  At = class e extends Et {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new L(p, 3)),
        this.setAttribute(`normal`, new L(m, 3)),
        this.setAttribute(`uv`, new L(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  jt = class e extends Et {
    constructor(
      e = 1,
      t = 32,
      n = 16,
      r = 0,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))));
      let s = Math.min(a + o, Math.PI),
        c = 0,
        l = [],
        u = new M(),
        d = new M(),
        f = [],
        p = [],
        m = [],
        h = [];
      for (let f = 0; f <= n; f++) {
        let g = [],
          _ = f / n,
          v = a + _ * o,
          y = e * Math.cos(v),
          b = Math.sqrt(e * e - y * y),
          x = 0;
        f === 0 && a === 0
          ? (x = 0.5 / t)
          : f === n && s === Math.PI && (x = -0.5 / t);
        for (let e = 0; e <= t; e++) {
          let n = e / t,
            a = r + n * i;
          ((u.x = -b * Math.cos(a)),
            (u.y = y),
            (u.z = b * Math.sin(a)),
            p.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            m.push(d.x, d.y, d.z),
            h.push(n + x, 1 - _),
            g.push(c++));
        }
        l.push(g);
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = l[e][r + 1],
            i = l[e][r],
            o = l[e + 1][r],
            c = l[e + 1][r + 1];
          ((e !== 0 || a > 0) && f.push(t, i, c),
            (e !== n - 1 || s < Math.PI) && f.push(i, o, c));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new L(p, 3)),
        this.setAttribute(`normal`, new L(m, 3)),
        this.setAttribute(`uv`, new L(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Mt = class e extends Et {
    constructor(
      e = 1,
      t = 0.4,
      n = 12,
      r = 48,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI * 2,
    ) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = new M(),
        f = new M(),
        p = new M();
      for (let s = 0; s <= n; s++) {
        let m = a + (s / n) * o;
        for (let a = 0; a <= r; a++) {
          let o = (a / r) * i;
          ((f.x = (e + t * Math.cos(m)) * Math.cos(o)),
            (f.y = (e + t * Math.cos(m)) * Math.sin(o)),
            (f.z = t * Math.sin(m)),
            c.push(f.x, f.y, f.z),
            (d.x = e * Math.cos(o)),
            (d.y = e * Math.sin(o)),
            p.subVectors(f, d).normalize(),
            l.push(p.x, p.y, p.z),
            u.push(a / r),
            u.push(s / n));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            a = (r + 1) * (e - 1) + t,
            o = (r + 1) * e + t;
          (s.push(n, i, o), s.push(i, a, o));
        }
      (this.setIndex(s),
        this.setAttribute(`position`, new L(c, 3)),
        this.setAttribute(`normal`, new L(l, 3)),
        this.setAttribute(`uv`, new L(u, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
