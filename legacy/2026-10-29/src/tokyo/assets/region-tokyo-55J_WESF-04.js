// tokyo/assets/region-tokyo-55J_WESF 04 — array
// Lines 949-1284 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function er(e) {
  let t = e;
  e.perObjectFrustumCulled = !1;
  let n = null,
    r = null,
    i = 0,
    a = (e) => {
      if (
        ((n ??= {
          starts: t._multiDrawStarts,
          counts: t._multiDrawCounts,
          tex: t._indirectTexture,
          n: -1,
          gate: new De(),
          gen: -1,
        }),
        !e)
      )
        return n;
      if (!r || r.starts.length !== n.starts.length) {
        let e = n.tex.image;
        (r?.tex.dispose(),
          (r = {
            starts: new Int32Array(n.starts.length),
            counts: new Int32Array(n.counts.length),
            tex: new w(
              new Uint32Array(e.width * e.height),
              e.width,
              e.height,
              ne,
              d,
            ),
            n: -1,
            gate: new De(),
            gen: -1,
          }));
      }
      return r;
    },
    o = e,
    s = (n, r) => {
      let s = a(r && tr);
      if (
        ((o._visibilityChanged &&= (i++, !1)),
        nr && tr && s.gen === i && !s.gate.stale(n))
      ) {
        ((t._multiDrawStarts = s.starts),
          (t._multiDrawCounts = s.counts),
          (t._indirectTexture = s.tex),
          (t._multiDrawCount = s.n));
        return;
      }
      s.gen = i;
      let c;
      nr && tr
        ? (c = s.gate.set(n).planes)
        : (Qn.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
          $n.setFromProjectionMatrix(Qn, n.coordinateSystem, n.reversedDepth),
          (c = $n.planes));
      let l = e.geometry.getIndex(),
        u = l
          ? l.array.BYTES_PER_ELEMENT ||
            (e.geometry.attributes.position.count > 65535 ? 4 : 2)
          : 1,
        d = s.tex.image.data,
        f = s.starts,
        p = s.counts,
        m = t._instanceInfo,
        h = t._geometryInfo,
        g = 0,
        _ = !1;
      for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (!t.visible || !t.active) continue;
        let n = h[t.geometryIndex];
        if (!n || n.count <= 0) continue;
        let r = n.boundingBox;
        if (r) {
          let e = !0;
          for (let t = 0; t < 6 && e; t++) {
            let n = c[t].normal.x,
              i = c[t].normal.y,
              a = c[t].normal.z;
            n * (n > 0 ? r.max.x + 1 : r.min.x - 1) +
              i * (i > 0 ? r.max.y + 1 : r.min.y - 1) +
              a * (a > 0 ? r.max.z + 1 : r.min.z - 1) +
              c[t].constant <
              0 && (e = !1);
          }
          if (!e) continue;
        }
        ((f[g] = n.start * u),
          (p[g] = n.count),
          d[g] !== e && ((d[g] = e), (_ = !0)),
          g++);
      }
      (g !== s.n && (_ = !0),
        (s.n = g),
        (t._multiDrawStarts = f),
        (t._multiDrawCounts = p),
        (t._indirectTexture = s.tex),
        (t._multiDrawCount = g),
        (t._multiDrawBytesPerElement = u),
        (_ || !tr) && (s.tex.needsUpdate = !0));
    };
  if (
    ((e.onBeforeRender = (e, t, n) => s(n, !1)),
    (e.onBeforeShadow = (e, t, n, r) => s(r, !0)),
    !$te)
  )
    return;
  e.frustumCulled = !0;
  let c = new Map();
  e.intersectsFrustum = (e) => {
    let t = c.get(e) ?? 0;
    if (t > 0) return (c.set(e, t - 1), !0);
    let n = l(e);
    return (c.set(e, n ? 8 : 0), n);
  };
  let l = (e) => {
    let n = e.planes,
      r = t._instanceInfo,
      i = t._geometryInfo;
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      if (!t.visible || !t.active) continue;
      let a = i[t.geometryIndex];
      if (!a || a.count <= 0) continue;
      let o = a.boundingBox;
      if (!o) return !0;
      let s = !0;
      for (let e = 0; e < 6 && s; e++) {
        let t = n[e].normal.x,
          r = n[e].normal.y,
          i = n[e].normal.z;
        t * (t > 0 ? o.max.x + 1 : o.min.x - 1) +
          r * (r > 0 ? o.max.y + 1 : o.min.y - 1) +
          i * (i > 0 ? o.max.z + 1 : o.min.z - 1) +
          n[e].constant <
          0 && (s = !1);
      }
      if (s) return !0;
    }
    return !1;
  };
}
var tr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`passlists`) !== `0`,
  nr =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`poolgate`) !== `0`,
  $te =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`,
  rr = class {
    slots;
    maxVertices;
    maxIndices;
    mesh;
    verts;
    idxs;
    slotV = new Int32Array();
    slotI = new Int32Array();
    freeSlots = [];
    info;
    inst = [];
    pos;
    nor;
    col;
    city;
    index;
    full = 0;
    gpu = null;
    ib = 4;
    constructor(e, t, n, r, i) {
      ((this.slots = n), (this.maxVertices = r), (this.maxIndices = i));
      let a = (this.mesh = new _(n, r, i, t));
      ((a.name = e),
        (a.frustumCulled = !1),
        (a.sortObjects = !1),
        (a.castShadow = !1),
        (a.receiveShadow = !0));
      let o = new y();
      (o.setAttribute(`position`, new b(new Float32Array(), 3)),
        o.setAttribute(`normal`, new b(new Float32Array(), 3)),
        o.setAttribute(`color`, new b(new Uint8Array(), 4, !0)),
        o.setAttribute(`aCity`, new b(new Uint8Array(), 4, !0)),
        o.setIndex(new b(new Uint32Array(), 1)),
        (this.slotV = new Int32Array(n * 2)),
        (this.slotI = new Int32Array(n * 2)));
      for (let e = 0; e < n; e++) {
        let t = a.addGeometry(o, 0, 0),
          r = a.addInstance(t);
        (a.setVisibleAt(r, !1),
          this.inst.push(r),
          this.freeSlots.push(n - 1 - e));
      }
      this.info = a._geometryInfo;
      let s = a.geometry;
      ((this.pos = s.attributes.position),
        (this.nor = s.attributes.normal),
        (this.col = s.attributes.color),
        (this.city = s.attributes.aCity),
        (this.index = s.index));
      for (let e of [this.pos, this.nor, this.col, this.city, this.index])
        e.setUsage(u);
      if (
        ((this.verts = new Xn(r)),
        (this.idxs = new Xn(i)),
        !Array.isArray(this.info) || this.info.length !== n)
      )
        throw Error(`PooledBatch: unexpected BatchedMesh internals`);
      Zn && !/proto$/.test(e) && er(a);
    }
    attachGpu(e) {
      return this.gpu
        ? !0
        : ((this.ib = this.index.array.BYTES_PER_ELEMENT),
          (this.gpu = Ce(this.mesh, e.gl, (t) => e.uploadDraw(t))),
          !!this.gpu);
    }
    get bytes() {
      return (
        this.maxVertices * 32 +
        this.maxIndices *
          (this.gpu ? this.ib : this.index.array.BYTES_PER_ELEMENT)
      );
    }
    get usedVertices() {
      return this.verts.used;
    }
    get usedIndices() {
      return this.idxs.used;
    }
    write(e, t) {
      let n = e.n,
        r = e.ni;
      if (!n || !r || !this.freeSlots.length)
        return (n && r && this.full++, -1);
      let i = this.verts.alloc(n);
      if (i < 0) return (this.full++, -1);
      let a = this.idxs.alloc(r);
      if (a < 0) return (this.verts.release(i, n), this.full++, -1);
      let s = this.freeSlots.pop();
      if (
        ((this.slotV[s * 2] = i),
        (this.slotV[s * 2 + 1] = n),
        (this.slotI[s * 2] = a),
        (this.slotI[s * 2 + 1] = r),
        this.gpu)
      )
        _e(this.gpu, e, i, a);
      else {
        (this.pos.array.set(e.pos.subarray(0, n * 3), i * 3),
          this.nor.array.set(e.nor.subarray(0, n * 3), i * 3));
        let t = this.col.array,
          o = this.city.array,
          s = e.ca;
        for (let e = 0, r = i * 4, a = 0; e < n; e++, r += 4, a += 8)
          ((t[r] = s[a]),
            (t[r + 1] = s[a + 1]),
            (t[r + 2] = s[a + 2]),
            (t[r + 3] = 255),
            (o[r] = s[a + 4]),
            (o[r + 1] = s[a + 5]),
            (o[r + 2] = s[a + 6]),
            (o[r + 3] = s[a + 7]));
        let c = this.index.array,
          l = e.idx;
        for (let e = 0; e < r; e++) c[a + e] = i + l[e];
        (this.pos.addUpdateRange(i * 3, n * 3),
          this.nor.addUpdateRange(i * 3, n * 3),
          this.col.addUpdateRange(i * 4, n * 4),
          this.city.addUpdateRange(i * 4, n * 4),
          this.index.addUpdateRange(a, r));
        for (let e of [this.pos, this.nor, this.col, this.city, this.index])
          e.needsUpdate = !0;
      }
      let c = this.info[s];
      return (
        (c.vertexStart = i),
        (c.vertexCount = n),
        (c.reservedVertexCount = n),
        (c.indexStart = a),
        (c.indexCount = r),
        (c.reservedIndexCount = r),
        (c.start = a),
        (c.count = r),
        (c.active = !0),
        (c.boundingBox = t.clone()),
        (c.boundingSphere = t.getBoundingSphere(new o())),
        (this.mesh._visibilityChanged = !0),
        s
      );
    }
    setVisible(e, t) {
      e < 0 || this.mesh.setVisibleAt(this.inst[e], t);
    }
    free(e) {
      if (e < 0) return;
      (this.mesh.setVisibleAt(this.inst[e], !1),
        this.verts.release(this.slotV[e * 2], this.slotV[e * 2 + 1]),
        this.idxs.release(this.slotI[e * 2], this.slotI[e * 2 + 1]));
      let t = this.info[e];
      ((t.vertexCount = t.indexCount = t.count = 0),
        (this.slotV[e * 2 + 1] = this.slotI[e * 2 + 1] = 0),
        this.freeSlots.push(e));
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
        full: this.full,
      };
    }
  };
function ir(e, t) {
  let n = new rr(t, e, 1, 3, 3),
    r = {
      pos: new Float32Array([0, 0, 0, 1, 0, 0, 0, 0, 1]),
      nor: new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0]),
      ca: new Uint8Array(24).fill(200),
      idx: new Uint32Array([0, 2, 1]),
      n: 3,
      ni: 3,
    },
    i = n.write(r, new k(new j(0, 0, 0), new j(1, 0, 1)));
  return (n.setVisible(i, !0), (n.mesh.frustumCulled = !1), n.mesh);
}
