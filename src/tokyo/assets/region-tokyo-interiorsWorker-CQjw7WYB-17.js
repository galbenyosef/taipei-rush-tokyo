// tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB 17 — origin
// Lines 6342-6686 of readable/tokyo/assets/region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
const rn = /*@__PURE__*/ new N(),
  an = /*@__PURE__*/ new N(),
  on = /*@__PURE__*/ new N(),
  sn = /*@__PURE__*/ new N();
var cn = class {
    constructor(e = new N(), t = new N(0, 0, -1)) {
      ((this.origin = e), (this.direction = t));
    }
    set(e, t) {
      return (this.origin.copy(e), this.direction.copy(t), this);
    }
    copy(e) {
      return (
        this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
      );
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return (this.direction.copy(e).sub(this.origin).normalize(), this);
    }
    recast(e) {
      return (this.origin.copy(this.at(e, rn)), this);
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      let n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      let t = rn.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (rn.copy(this.origin).addScaledVector(this.direction, t),
          rn.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, r) {
      (an.copy(e).add(t).multiplyScalar(0.5),
        on.copy(t).sub(e).normalize(),
        sn.copy(this.origin).sub(an));
      let i = e.distanceTo(t) * 0.5,
        a = -this.direction.dot(on),
        o = sn.dot(this.direction),
        s = -sn.dot(on),
        c = sn.lengthSq(),
        l = Math.abs(1 - a * a),
        u,
        d,
        f,
        p;
      if (l > 0) {
        if (((u = a * s - o), (d = a * o - s), (p = i * l), u >= 0)) {
          if (d >= -p) {
            if (d <= p) {
              let e = 1 / l;
              ((u *= e),
                (d *= e),
                (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c));
            } else
              ((d = i),
                (u = Math.max(0, -(a * d + o))),
                (f = -u * u + d * (d + 2 * s) + c));
          } else
            ((d = -i),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * s) + c));
        } else
          d <= -p
            ? ((u = Math.max(0, -(-a * i + o))),
              (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
              (f = -u * u + d * (d + 2 * s) + c))
            : d <= p
              ? ((u = 0),
                (d = Math.min(Math.max(-i, -s), i)),
                (f = d * (d + 2 * s) + c))
              : ((u = Math.max(0, -(a * i + o))),
                (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
                (f = -u * u + d * (d + 2 * s) + c));
      } else
        ((d = a > 0 ? -i : i),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * s) + c));
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, u),
        r && r.copy(an).addScaledVector(on, d),
        f
      );
    }
    intersectSphere(e, t) {
      if (e.radius < 0) return null;
      rn.subVectors(e.center, this.origin);
      let n = rn.dot(this.direction),
        r = rn.dot(rn) - n * n,
        i = e.radius * e.radius;
      if (r > i) return null;
      let a = Math.sqrt(i - r),
        o = n - a,
        s = n + a;
      return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
    intersectsSphere(e) {
      return e.radius < 0
        ? !1
        : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
        l >= 0
          ? ((i = (e.min.y - d.y) * l), (a = (e.max.y - d.y) * l))
          : ((i = (e.max.y - d.y) * l), (a = (e.min.y - d.y) * l)),
        n > a ||
        i > r ||
        ((i > n || isNaN(n)) && (n = i),
        (a < r || isNaN(r)) && (r = a),
        u >= 0
          ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
          : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
        n > s || o > r) ||
        ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)
          ? null
          : this.at(n >= 0 ? n : r, t)
      );
    }
    intersectsBox(e) {
      return this.intersectBox(e, rn) !== null;
    }
    intersectTriangle(e, t, n, r, i) {
      let a = this.origin,
        o = this.direction,
        s = o.x,
        c = o.y,
        l = o.z,
        u = e.x - a.x,
        d = e.y - a.y,
        f = e.z - a.z,
        p = t.x - a.x,
        m = t.y - a.y,
        h = t.z - a.z,
        g = n.x - a.x,
        _ = n.y - a.y,
        v = n.z - a.z,
        y = Math.abs(s),
        b = Math.abs(c),
        x = Math.abs(l),
        S,
        C,
        w,
        T,
        E,
        D,
        O,
        k,
        A,
        j,
        ee,
        te;
      if (
        (y >= b && y >= x
          ? ((w = s),
            (D = u),
            (A = p),
            (te = g),
            s >= 0
              ? ((S = c),
                (C = l),
                (T = d),
                (E = f),
                (O = m),
                (k = h),
                (j = _),
                (ee = v))
              : ((S = l),
                (C = c),
                (T = f),
                (E = d),
                (O = h),
                (k = m),
                (j = v),
                (ee = _)))
          : b >= x
            ? ((w = c),
              (D = d),
              (A = m),
              (te = _),
              c >= 0
                ? ((S = l),
                  (C = s),
                  (T = f),
                  (E = u),
                  (O = h),
                  (k = p),
                  (j = v),
                  (ee = g))
                : ((S = s),
                  (C = l),
                  (T = u),
                  (E = f),
                  (O = p),
                  (k = h),
                  (j = g),
                  (ee = v)))
            : ((w = l),
              (D = f),
              (A = h),
              (te = v),
              l >= 0
                ? ((S = s),
                  (C = c),
                  (T = u),
                  (E = d),
                  (O = p),
                  (k = m),
                  (j = g),
                  (ee = _))
                : ((S = c),
                  (C = s),
                  (T = d),
                  (E = u),
                  (O = m),
                  (k = p),
                  (j = _),
                  (ee = g))),
        w === 0)
      )
        return null;
      let ne = S / w,
        re = C / w,
        M = 1 / w,
        ie = T - ne * D,
        N = E - re * D,
        ae = O - ne * A,
        oe = k - re * A,
        P = j - ne * te,
        se = ee - re * te,
        ce = P * oe - se * ae,
        le = ie * se - N * P,
        ue = ae * N - oe * ie;
      if (r) {
        if (ce < 0 || le < 0 || ue < 0) return null;
      } else if ((ce < 0 || le < 0 || ue < 0) && (ce > 0 || le > 0 || ue > 0))
        return null;
      let de = ce + le + ue;
      if (de === 0) return null;
      let fe = M * (ce * D + le * A + ue * te);
      return (de > 0 ? fe < 0 : fe > 0) ? null : this.at(fe / de, i);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  ln = class extends nn {
    constructor(e) {
      (super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = `MeshBasicMaterial`),
        (this.color = new F(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new Ne()),
        (this.combine = 0),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = `round`),
        (this.wireframeLinejoin = `round`),
        (this.fog = !0),
        this.setValues(e));
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        this.envMapRotation.copy(e.envMapRotation),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  };
