// tokyo/assets/region-tokyo-A7LxHjud 159 — sph
// Lines 66598-66936 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var qS = new p(),
  JS = new k(),
  YS = new O(),
  XS = new s(),
  ZS = class {
    slots;
    maxVertices;
    maxIndices;
    mesh;
    verts;
    idxs;
    slotV;
    slotI;
    freeSlots = [];
    info;
    inst = [];
    pos;
    nor;
    uv;
    col;
    city;
    index;
    mainOn;
    shadowOn;
    sph;
    tri;
    shadowDirty = !0;
    anyShadow = !1;
    stats = { main: 0, mainTris: 0, shadow: 0, shadowTris: 0 };
    full = 0;
    constructor(e, t, n, r) {
      ((this.slots = t), (this.maxVertices = n), (this.maxIndices = r));
      let i = (this.mesh = new b(t, n, r, e));
      ((i.name = `tokyo-landmarks`),
        (i.perObjectFrustumCulled = !1),
        (i.sortObjects = !1),
        (i.castShadow = !1),
        (i.receiveShadow = !0),
        (i.matrixAutoUpdate = !1),
        i.updateMatrix(),
        (i.raycast = () => {}));
      let a = new S();
      (a.setAttribute(`position`, new w(new Float32Array(), 3)),
        a.setAttribute(`normal`, new w(new Int8Array(), 4, !0)),
        a.setAttribute(`uv`, new w(new Uint16Array(), 2, !0)),
        a.setAttribute(`color`, new w(new Uint8Array(), 4, !0)),
        a.setAttribute(`aCity`, new w(new Uint8Array(), 4, !0)),
        a.setIndex(new w(new Uint32Array(), 1)),
        (this.slotV = new Int32Array(t * 2)),
        (this.slotI = new Int32Array(t * 2)),
        (this.mainOn = new Uint8Array(t)),
        (this.shadowOn = new Uint8Array(t)),
        (this.sph = new Float32Array(t * 4)),
        (this.tri = new Uint32Array(t)));
      for (let e = 0; e < t; e++) {
        let n = i.addGeometry(a, 0, 0),
          r = i.addInstance(n);
        (i.setVisibleAt(r, !1),
          this.inst.push(r),
          this.freeSlots.push(t - 1 - e));
      }
      this.info = i._geometryInfo;
      let o = i.geometry;
      ((this.pos = o.attributes.position),
        (this.nor = o.attributes.normal),
        (this.uv = o.attributes.uv),
        (this.col = o.attributes.color),
        (this.city = o.attributes.aCity),
        (this.index = o.index));
      for (let e of [
        this.pos,
        this.nor,
        this.uv,
        this.col,
        this.city,
        this.index,
      ])
        e.setUsage(d);
      if (
        ((this.verts = new Qn(n)),
        (this.idxs = new Qn(r)),
        !Array.isArray(this.info) || this.info.length !== t)
      )
        throw Error(`LmPool: unexpected BatchedMesh internals`);
      ((i.geometry.boundingBox = new O(
        new E(-1e5, -100, -1e5),
        new E(1e5, 2e3, 1e5),
      )),
        (i.geometry.boundingSphere = new s(new E(), 15e4)),
        (i.frustumCulled = !0),
        (i.intersectsFrustum = (e) => {
          let t = e.planes[0].normal.dot(e.planes[1].normal) < -0.9999;
          return this.any(e, t ? this.shadowOn : this.mainOn, !t);
        }));
      let c = b.prototype;
      ((i.onBeforeRender = (e, t, n, r, a, o) => {
        (this.apply(n, this.mainOn, !0),
          c.onBeforeRender.call(i, e, t, n, r, a, o));
      }),
        (i.onBeforeShadow = (e, t, n, r, a, o, s) => {
          (this.apply(r, this.shadowOn, !1),
            c.onBeforeRender.call(i, e, null, r, a, o, s));
        }));
    }
    get bytes() {
      return (
        this.maxVertices * 28 +
        this.maxIndices * this.index.array.BYTES_PER_ELEMENT
      );
    }
    write(e) {
      let t = e.n,
        n = e.ni;
      if (!t || !n) return -1;
      if (!this.freeSlots.length) return (this.full++, -1);
      let r = this.verts.alloc(t);
      if (r < 0) return (this.full++, -1);
      let i = this.idxs.alloc(n);
      if (i < 0) return (this.verts.release(r, t), this.full++, -1);
      let a = this.freeSlots.pop();
      ((this.slotV[a * 2] = r),
        (this.slotV[a * 2 + 1] = t),
        (this.slotI[a * 2] = i),
        (this.slotI[a * 2 + 1] = n),
        this.pos.array.set(e.pos.subarray(0, t * 3), r * 3));
      let o = this.nor.array,
        s = this.uv.array,
        c = this.col.array,
        l = this.city.array,
        u = e.nor,
        d = e.uv,
        f = e.ca,
        p = 1 / 0,
        m = 1 / 0,
        h = 1 / 0,
        g = -1 / 0,
        _ = -1 / 0,
        v = -1 / 0,
        y = e.pos;
      for (let e = 0; e < t; e++) {
        let t = (r + e) * 4,
          n = (r + e) * 2,
          i = e * 3,
          a = e * 8,
          b = e * 2;
        ((o[t] = Math.round(u[i] * 127)),
          (o[t + 1] = Math.round(u[i + 1] * 127)),
          (o[t + 2] = Math.round(u[i + 2] * 127)),
          (o[t + 3] = 0),
          (s[n] = Math.round(Math.min(1, Math.max(0, d[b])) * 65535)),
          (s[n + 1] = Math.round(Math.min(1, Math.max(0, d[b + 1])) * 65535)),
          (c[t] = f[a]),
          (c[t + 1] = f[a + 1]),
          (c[t + 2] = f[a + 2]),
          (c[t + 3] = 255),
          (l[t] = f[a + 4]),
          (l[t + 1] = f[a + 5]),
          (l[t + 2] = f[a + 6]),
          (l[t + 3] = f[a + 7]));
        let x = y[i],
          S = y[i + 1],
          C = y[i + 2];
        (x < p && (p = x),
          x > g && (g = x),
          S < m && (m = S),
          S > _ && (_ = S),
          C < h && (h = C),
          C > v && (v = C));
      }
      let b = this.index.array,
        x = e.idx;
      for (let e = 0; e < n; e++) b[i + e] = r + x[e];
      (this.pos.addUpdateRange(r * 3, t * 3),
        this.nor.addUpdateRange(r * 4, t * 4),
        this.uv.addUpdateRange(r * 2, t * 2),
        this.col.addUpdateRange(r * 4, t * 4),
        this.city.addUpdateRange(r * 4, t * 4),
        this.index.addUpdateRange(i, n));
      for (let e of [
        this.pos,
        this.nor,
        this.uv,
        this.col,
        this.city,
        this.index,
      ])
        e.needsUpdate = !0;
      (YS.min.set(p, m, h), YS.max.set(g, _, v), YS.getBoundingSphere(XS));
      let S = this.info[a];
      return (
        (S.vertexStart = r),
        (S.vertexCount = t),
        (S.reservedVertexCount = t),
        (S.indexStart = i),
        (S.indexCount = n),
        (S.reservedIndexCount = n),
        (S.start = i),
        (S.count = n),
        (S.active = !0),
        (S.boundingBox = YS.clone()),
        (S.boundingSphere = XS.clone()),
        (this.sph[a * 4] = XS.center.x),
        (this.sph[a * 4 + 1] = XS.center.y),
        (this.sph[a * 4 + 2] = XS.center.z),
        (this.sph[a * 4 + 3] = XS.radius),
        (this.tri[a] = n / 3),
        (this.mainOn[a] = 0),
        (this.shadowOn[a] = 0),
        this.mesh.setMatrixAt(this.inst[a], qS.identity()),
        (this.mesh._visibilityChanged = !0),
        a
      );
    }
    fits(e, t) {
      return (
        this.freeSlots.length > 0 &&
        this.verts.largest >= e &&
        this.idxs.largest >= t
      );
    }
    free(e) {
      if (e < 0) return;
      (this.mesh.setVisibleAt(this.inst[e], !1),
        (this.mainOn[e] = 0),
        this.shadowOn[e] && ((this.shadowOn[e] = 0), (this.shadowDirty = !0)),
        this.verts.release(this.slotV[e * 2], this.slotV[e * 2 + 1]),
        this.idxs.release(this.slotI[e * 2], this.slotI[e * 2 + 1]));
      let t = this.info[e];
      ((t.vertexCount = t.indexCount = t.count = 0),
        (this.slotV[e * 2 + 1] = this.slotI[e * 2 + 1] = 0),
        (this.tri[e] = 0),
        this.freeSlots.push(e));
    }
    setMatrix(e, t, n, r, i) {
      e < 0 ||
        (this.mesh.setMatrixAt(this.inst[e], t),
        (this.sph[e * 4] = n),
        (this.sph[e * 4 + 1] = r),
        (this.sph[e * 4 + 2] = i));
    }
    sphereOf(e, t) {
      return (
        (t[0] = this.sph[e * 4]),
        (t[1] = this.sph[e * 4 + 1]),
        (t[2] = this.sph[e * 4 + 2]),
        (t[3] = this.sph[e * 4 + 3]),
        t
      );
    }
    trisOf(e) {
      return e >= 0 ? this.tri[e] : 0;
    }
    inside(e, t, n) {
      let r = this.sph,
        i = r[t * 4],
        a = r[t * 4 + 1],
        o = r[t * 4 + 2],
        s = -r[t * 4 + 3];
      for (let t = 0; t < 6; t++) {
        if (n && t === 4) continue;
        let r = e[t];
        if (r.normal.x * i + r.normal.y * a + r.normal.z * o + r.constant < s)
          return !1;
      }
      return !0;
    }
    any(e, t, n) {
      for (let r = 0; r < t.length; r++)
        if (t[r] === 1 && this.inside(e.planes, r, n)) return !0;
      return !1;
    }
    apply(e, t, n) {
      let r = this.mesh;
      (qS.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        JS.setFromProjectionMatrix(qS, e.coordinateSystem, e.reversedDepth));
      let i = JS.planes,
        a = 0,
        o = 0;
      for (let e = 0; e < t.length; e++) {
        let s = t[e] === 1 && this.inside(i, e, n),
          c = this.inst[e];
        (r.getVisibleAt(c) !== s && r.setVisibleAt(c, s),
          s && (a++, (o += this.tri[e])));
      }
      n
        ? ((this.stats.main = a), (this.stats.mainTris = o))
        : ((this.stats.shadow = a), (this.stats.shadowTris = o));
    }
    setMain(e, t) {
      e >= 0 && (this.mainOn[e] = +!!t);
    }
    setShadow(e, t) {
      if (e < 0) return;
      let n = +!!t;
      this.shadowOn[e] !== n &&
        ((this.shadowOn[e] = n), (this.shadowDirty = !0));
    }
    commit() {
      if (!this.shadowDirty) return;
      this.shadowDirty = !1;
      let e = !1;
      for (let t = 0; t < this.shadowOn.length && !e; t++)
        e = this.shadowOn[t] === 1;
      ((this.anyShadow = e), (this.mesh.castShadow = e));
    }
    get castsShadow() {
      return this.anyShadow;
    }
    usage() {
      return {
        slots: this.slots - this.freeSlots.length,
        of: this.slots,
        vertices: this.verts.used,
        maxVertices: this.maxVertices,
        largestFreeV: this.verts.largest,
        indices: this.idxs.used,
        maxIndices: this.maxIndices,
        mb: +(this.bytes / 1048576).toFixed(2),
        usedMb: +(
          (this.verts.used * 28 + this.idxs.used * 4) /
          1048576
        ).toFixed(2),
        full: this.full,
      };
    }
  },
  xme = {
    curve: 1.45,
    sori: 0.6,
    thick: 0.35,
    eave: 1.6,
    tile: 2,
    color: 16777215,
    soffit: 4864556,
    band: 15262420,
    ridgeH: 0.9,
    ridgeColor: 3816770,
    rows: 7,
  };
