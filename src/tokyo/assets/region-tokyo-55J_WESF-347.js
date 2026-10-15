// tokyo/assets/region-tokyo-55J_WESF 347 — math
// Lines 125227-125878 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var GAe = class {
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
    gl = null;
    bufs = [];
    full = 0;
    on;
    box;
    ends;
    under;
    fineDist = 1 / 0;
    underCull = !1;
    sCol = new Uint8Array();
    sCity = new Uint8Array();
    sIdx = new Uint16Array();
    constructor(e, t, n, r, i) {
      ((this.slots = n), (this.maxVertices = r), (this.maxIndices = i));
      let a = (this.mesh = new _(n, r, i, t));
      ((a.name = e),
        (a.frustumCulled = !1),
        (a.sortObjects = !1),
        (a.perObjectFrustumCulled = !1),
        (a.onBeforeRender = (e, t, n) => this.cull(n, !1)),
        (a.onBeforeShadow = (e, t, n, r) => this.cull(r, !0)),
        (a.castShadow = !0),
        (a.receiveShadow = !0),
        (a.matrixAutoUpdate = !1),
        (a.raycast = () => {}));
      let o = WAe();
      ((this.slotV = new Int32Array(n * 2)),
        (this.slotI = new Int32Array(n * 2)),
        (this.on = new Uint8Array(n)),
        (this.box = new Float32Array(n * 6)),
        (this.ends = new Int32Array(n * 4)),
        (this.under = new Float32Array(n).fill(-1 / 0)));
      for (let e = 0; e < n; e++) {
        let t = a.addGeometry(o, 0, 0),
          r = a.addInstance(t);
        (a.setVisibleAt(r, !1),
          this.inst.push(r),
          this.freeSlots.push(n - 1 - e));
      }
      if (
        ((this.info = a._geometryInfo),
        !Array.isArray(this.info) || this.info.length !== n)
      )
        throw Error(`GpuTilePool: unexpected BatchedMesh internals`);
      ((this.verts = new Xn(r)), (this.idxs = new Xn(i)));
    }
    cull(e, t) {
      let n = this.mesh;
      (KY.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        qY.setFromProjectionMatrix(KY, e.coordinateSystem, e.reversedDepth));
      let r = qY.planes,
        i = this.box,
        a = this.on,
        o = this.info,
        s = this.inst,
        c = this.ends,
        l = this.under,
        u = this.underCull,
        d = e.matrixWorld.elements[12],
        f = e.matrixWorld.elements[13],
        p = e.matrixWorld.elements[14],
        m = this.fineDist * this.fineDist,
        h = this.maxVertices > 65535 ? 4 : 2,
        g = n._indirectTexture.image.data,
        _ = 0;
      for (let e = 0; e < this.slots; e++) {
        if (!a[e]) continue;
        let v = e * 6,
          y = !0;
        for (let e = 0; e < 6 && y; e++) {
          let t = r[e].normal.x,
            n = r[e].normal.y,
            a = r[e].normal.z;
          t * (t > 0 ? i[v + 3] : i[v]) +
            n * (n > 0 ? i[v + 4] : i[v + 1]) +
            a * (a > 0 ? i[v + 5] : i[v + 2]) +
            r[e].constant <
            0 && (y = !1);
        }
        if (!y) continue;
        let b = e * 4,
          x,
          S;
        if (t) ((x = c[b]), (S = c[b + 1]));
        else {
          let t = Math.max(0, i[v] - d, d - i[v + 3]),
            n = Math.max(0, i[v + 1] - f, f - i[v + 4]),
            r = Math.max(0, i[v + 2] - p, p - i[v + 5]),
            a = t * t + n * n + r * r <= m;
          ((x = a ? 0 : c[b]),
            (S = u && f < l[e] ? c[b + 1] : a ? c[b + 3] : c[b + 2]));
        }
        if (S - x <= 0) continue;
        let C = o[e];
        ((n._multiDrawStarts[_] = (C.start + x) * h),
          (n._multiDrawCounts[_] = S - x),
          (g[_] = s[e]),
          _++);
      }
      ((n._multiDrawCount = _),
        (n._multiDrawBytesPerElement = h),
        (n._indirectTexture.needsUpdate = !0));
    }
    get bytes() {
      return (
        this.maxVertices * 40 +
        this.maxIndices * (this.maxVertices > 65535 ? 4 : 2)
      );
    }
    get ready() {
      return this.bufs.length === 6;
    }
    attach(e, t) {
      let n = e.getContext();
      if (typeof n.COPY_WRITE_BUFFER != `number`) return !1;
      let r = this.mesh.geometry,
        i = new Map();
      for (let e of GY)
        r.attributes[e].onUploadCallback = () =>
          void i.set(e, n.getParameter(n.ARRAY_BUFFER_BINDING));
      ((r.index.onUploadCallback = () =>
        void i.set(`index`, n.getParameter(n.ELEMENT_ARRAY_BUFFER_BINDING))),
        t([this.mesh]));
      let a = [...GY, `index`].map((e) => i.get(e));
      for (let e of GY) r.attributes[e].onUploadCallback = () => {};
      if (((r.index.onUploadCallback = () => {}), a.some((e) => !e))) return !1;
      for (let e of [...GY.map((e) => r.attributes[e]), r.index]) {
        let t = e.array.constructor;
        e.array = new t(0);
      }
      return ((this.gl = n), (this.bufs = a), !0);
    }
    fits(e, t) {
      return (
        this.ready &&
        this.freeSlots.length > 0 &&
        this.verts.largest >= e &&
        this.idxs.largest >= t
      );
    }
    write(e, t, n = -1 / 0) {
      let r = 0,
        i = 0;
      for (let t of e) ((r += t.n), (i += t.ni));
      let a = this.gl;
      if (!a || !r || !i || !this.freeSlots.length)
        return (r && i && this.full++, -1);
      let s = this.verts.alloc(r);
      if (s < 0) return (this.full++, -1);
      let c = this.idxs.alloc(i);
      if (c < 0) return (this.verts.release(s, r), this.full++, -1);
      let l = this.freeSlots.pop();
      ((this.slotV[l * 2] = s),
        (this.slotV[l * 2 + 1] = r),
        (this.slotI[l * 2] = c),
        (this.slotI[l * 2 + 1] = i));
      let u = this.maxVertices > 65535,
        d = a.COPY_WRITE_BUFFER,
        f = this.bufs,
        p = (e, t, n, r) => {
          (a.bindBuffer(d, e), a.bufferSubData(d, t, n, 0, r));
        },
        m = s,
        h = c;
      for (let t = 0; t < 4; t++) {
        let n = e[t];
        if (n && n.n && n.ni) {
          let e = n.n,
            t = n.ni;
          this.sCol.length < e * 4 &&
            ((this.sCol = new Uint8Array(e * 4 + 4096)),
            (this.sCity = new Uint8Array(e * 4 + 4096)));
          let r = this.sCol,
            i = this.sCity,
            a = n.ca;
          for (let t = 0, n = 0, o = 0; t < e; t++, n += 4, o += 8)
            ((r[n] = a[o]),
              (r[n + 1] = a[o + 1]),
              (r[n + 2] = a[o + 2]),
              (r[n + 3] = 255),
              (i[n] = a[o + 4]),
              (i[n + 1] = a[o + 5]),
              (i[n + 2] = a[o + 6]),
              (i[n + 3] = a[o + 7]));
          (this.sIdx.length < t || this.sIdx instanceof Uint32Array !== u) &&
            (this.sIdx = u
              ? new Uint32Array(t + 6144)
              : new Uint16Array(t + 6144));
          let o = this.sIdx,
            s = n.idx;
          for (let e = 0; e < t; e++) o[e] = m + s[e];
          (p(f[0], m * 12, n.pos, e * 3),
            p(f[1], m * 12, n.nor, e * 3),
            p(f[2], m * 8, n.uv, e * 2),
            p(f[3], m * 4, r, e * 4),
            p(f[4], m * 4, i, e * 4),
            p(f[5], h * (u ? 4 : 2), o, t),
            (m += e),
            (h += t));
        }
        this.ends[l * 4 + t] = h - c;
      }
      a.bindBuffer(d, null);
      let g = this.info[l];
      ((g.vertexStart = s),
        (g.vertexCount = r),
        (g.reservedVertexCount = r),
        (g.indexStart = c),
        (g.indexCount = i),
        (g.reservedIndexCount = i),
        (g.start = c),
        (g.count = i),
        (g.active = !0),
        (g.boundingBox = t.clone()),
        (g.boundingSphere = t.getBoundingSphere(new o())));
      let _ = l * 6;
      return (
        (this.box[_] = t.min.x - 1),
        (this.box[_ + 1] = t.min.y - 1),
        (this.box[_ + 2] = t.min.z - 1),
        (this.box[_ + 3] = t.max.x + 1),
        (this.box[_ + 4] = t.max.y + 1),
        (this.box[_ + 5] = t.max.z + 1),
        (this.under[l] = n),
        (this.on[l] = 1),
        this.mesh.setVisibleAt(this.inst[l], !0),
        l
      );
    }
    free(e) {
      if (e < 0) return;
      ((this.on[e] = 0),
        this.mesh.setVisibleAt(this.inst[e], !1),
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
        gpu: this.ready,
      };
    }
  },
  KAe = { low: 170, medium: 220, high: 260, ultra: 380 },
  qAe = { low: 110, medium: 140, high: 170, ultra: 230 },
  JAe = { low: 200 },
  YAe = 1.5,
  XAe = class {
    ctx;
    scene;
    atlas;
    residency;
    far = null;
    farSlots = new Map();
    nearMeshes = new Set();
    nearPool = null;
    nearSlots = new Map();
    nearBox = new k();
    underBox = new k();
    nearR;
    wF = new Le(8192, 12288);
    wN = new Le(32768, 49152);
    wB = new Le(8192, 12288);
    wR = new Le(8192, 12288);
    wW = new Le(4096, 6144);
    sliceT = 0;
    keys;
    geo;
    protos = new Map();
    constructor(e, t, n, r) {
      ((this.ctx = e), (this.scene = t), (this.atlas = n));
      let i = () => {
        let e = performance.now();
        return e - this.sliceT < YAe ? !1 : ((this.sliceT = e), !0);
      };
      ((this.geo = { ...t.geo, due: i }), (this.keys = ZAe(t)));
      let a = e.params,
        o = fe(),
        s = Number(a.get(`t1r`) ?? 0) || 0,
        c = Number(a.get(`t2r`) ?? 0) || 0,
        l = () => {
          if (s > 0) return s;
          let t = e.quality.drawDistance + 180;
          return e.quality.mobile ? Math.max(o >= 2 ? 450 : 600, t) : t;
        },
        u = () => KAe[e.quality.level] ?? 260,
        d = Number(a.get(`railnear`) ?? 0) || 0,
        f = (this.nearR = () =>
          c > 0 ? c : d > 0 ? d : (JAe[e.quality.level] ?? u() * 1.2 + 110)),
        p = new k(),
        m = {
          name: `rail-far`,
          radius: l,
          dropMargin: 300,
          dropAfterS: 20,
          keys: this.keys,
          box: (e) => fc(e),
          build: (e) => this.buildFar(e, p),
          dropped: (e) => {
            let t = this.farSlots.get(e);
            t !== void 0 && (this.far?.free(t), this.farSlots.delete(e));
          },
        },
        h = {
          name: `rail-near`,
          radius: f,
          dropMargin: 150,
          dropAfterS: 10,
          lookaheadMaxSpeed: 40 / 3.6,
          keys: this.keys,
          box: (e) => fc(e),
          build: (e) => this.buildNear(e),
          shown: (e) => {
            let t = this.farSlots.get(e);
            t !== void 0 && this.far?.setVisible(t, !1);
          },
          dropped: (e, t) => {
            for (let e of t.roots ?? []) this.nearMeshes.delete(e);
            let n = this.nearSlots.get(e);
            n !== void 0 && (this.nearPool?.free(n), this.nearSlots.delete(e));
            let r = this.farSlots.get(e);
            r !== void 0 && this.far?.setVisible(r, !0);
          },
        };
      ((this.residency = new Yn(e, {
        spawn: r,
        owner: `transit`,
        popRadius: (t) =>
          t.name === `rail-far` ? e.quality.drawDistance * 0.8 : u(),
        requestRadius: (t) =>
          t.name === `rail-far`
            ? Math.min(l(), e.quality.drawDistance)
            : Math.max(60, f() - 110),
      })),
        this.residency.addLayer(m),
        this.residency.addLayer(h),
        e.events.on(`quality:changed`, () => {
          this.far && (this.far.mesh.material = this.farMat());
          let e = this.nearMat();
          if (e) for (let t of this.nearMeshes) t.material = e;
          let t = this.nearPoolMat();
          (t && this.nearPool && (this.nearPool.mesh.material = t),
            this.nearPool && (this.nearPool.underCull = this.underCull()));
        }));
    }
    onPackBuilt(e) {
      this.residency.onPackBuilt(e);
    }
    onPackDropped(e) {
      this.residency.onPackDropped(e);
    }
    farMat() {
      return Fe(`opaque`, {
        policy: this.ctx.quality.materials,
        batched: !0,
        name: `tokyo-tiles-t1`,
      });
    }
    refreshMaterials() {
      let e = this.nearMat();
      if (e) for (let t of this.nearMeshes) t.material = e;
      let t = this.nearPoolMat();
      (t && this.nearPool && (this.nearPool.mesh.material = t),
        this.protos.clear());
    }
    nearMat() {
      let e = this.atlas();
      return e
        ? Fe(`opaque`, {
            policy: this.ctx.quality.materials,
            map: e.tex,
            name: `transit-rail`,
          })
        : null;
    }
    nearPoolMat() {
      let e = this.atlas();
      return e
        ? Fe(`opaque`, {
            policy: this.ctx.quality.materials,
            map: e.tex,
            batched: !0,
            name: `transit-rail`,
          })
        : null;
    }
    async init(e) {
      let t = [],
        n = 0;
      for (let r of this.keys) {
        this.wF.reset();
        let i = vl(this.wF, { ...this.geo, due: () => !1 }, fc(r));
        for (; !i.next().done;);
        (t.push({ v: this.wF.n, i: this.wF.ni }),
          ++n % 4 == 0 &&
            (e((n / this.keys.length) * 0.5), await this.ctx.yieldFrame()));
      }
      let r = t.reduce((e, t) => e + t.v, 0),
        i = t.reduce((e, t) => e + t.i, 0);
      ((this.far = new rr(
        `transit-rail-far`,
        this.farMat(),
        Math.max(1, this.keys.length),
        Math.ceil(r * 1.1) + 512,
        Math.ceil(i * 1.1) + 768,
      )),
        (this.far.mesh.userData.owner = `transit`),
        this.far.attachGpu(this.ctx.renderer),
        this.ctx.scene.add(this.far.mesh),
        this.ctx.params.get(`railpool`) !== `0` && this.initNearPool());
    }
    initNearPool() {
      let e = this.nearPoolMat(),
        t = this.atlas();
      if (!e || !t) return;
      let n = this.keys.map((e) => fc(e)),
        r = [],
        i = [],
        a = [this.wW, this.wN, this.wB, this.wR];
      for (let e of n) {
        for (let e of a) e.reset();
        let n = bl(this.wN, { ...this.geo, atlas: t, due: () => !1 }, e, {
          bed: this.wB,
          fine: this.wR,
          wire: this.wW,
        });
        for (; !n.next().done;);
        (r.push(a.reduce((e, t) => e + t.n, 0)),
          i.push(a.reduce((e, t) => e + t.ni, 0)));
      }
      for (let e of a) e.reset();
      let o = this.nearR() + 150,
        s = 0,
        c = 0,
        l = 0;
      for (let e of n) {
        let t = 0,
          a = 0,
          u = 0;
        (n.forEach((n, s) => {
          let c = Math.max(0, e.minX - n.maxX, n.minX - e.maxX),
            l = Math.max(0, e.minZ - n.maxZ, n.minZ - e.maxZ);
          c * c + l * l > o * o || !r[s] || ((t += r[s]), (a += i[s]), u++);
        }),
          (s = Math.max(s, t)),
          (c = Math.max(c, a)),
          (l = Math.max(l, u)));
      }
      let u = r.reduce((e, t) => e + t, 0),
        d = i.reduce((e, t) => e + t, 0),
        f = new GAe(
          `transit-rail-near`,
          e,
          Math.max(1, Math.min(n.length, l + 4)),
          Math.min(u, Math.ceil(s * 1.15)) + 1024,
          Math.min(d, Math.ceil(c * 1.15)) + 1536,
        );
      if (
        !f.attach(this.ctx.renderer.gl, (e) => this.ctx.renderer.uploadDraw(e))
      ) {
        console.warn(`[transit] near pool: no GPU buffers — one mesh per tile`);
        return;
      }
      f.mesh.userData.owner = `transit-rail-near`;
      let p = Number(this.ctx.params.get(`railfine`) ?? NaN);
      ((f.fineDist =
        p === 0 ? 1 / 0 : p > 0 ? p : (qAe[this.ctx.quality.level] ?? 170)),
        (f.underCull = this.underCull()),
        this.ctx.scene.add(f.mesh),
        (this.nearPool = f));
    }
    underCull() {
      let e = this.ctx.params.get(`railunder`);
      return e === `1` || (e !== `0` && this.ctx.quality.level === `low`);
    }
    *buildFar(e, t) {
      this.sliceT = performance.now();
      let n = this.wF;
      return (
        n.reset(),
        yield* vl(n, this.geo, fc(e)),
        n.n
          ? (YY(n, t),
            {
              bytes: n.n * 32 + n.ni * 4,
              tris: n.ni / 3,
              colliders: 0,
              upload: () => {
                if (!this.far) return;
                let r = this.far.write(n, t);
                r < 0 ||
                  (this.farSlots.set(e, r),
                  this.ctx.renderer.uploadDraw([this.far.mesh]),
                  this.far.setVisible(
                    r,
                    !this.residency.isBuilt(`rail-near`, e),
                  ));
              },
            })
          : null
      );
    }
    *buildNear(e) {
      let t = this.atlas(),
        n = this.nearMat();
      if (!t || !n) return null;
      this.sliceT = performance.now();
      let r = this.wN,
        i = this.wB,
        a = this.wR,
        s = this.wW;
      (r.reset(),
        i.reset(),
        a.reset(),
        s.reset(),
        yield* bl(r, { ...this.geo, atlas: t }, fc(e), {
          bed: i,
          fine: a,
          wire: s,
        }));
      let c = [s, r, i, a],
        l = 0,
        u = 0;
      for (let e of c) ((l += e.n), (u += e.ni));
      if (!l) return null;
      yield;
      let d = this.nearPool;
      if (d?.fits(l, u)) {
        let t = JY(c, this.nearBox);
        return {
          bytes: l * 40 + u * 4,
          tris: u / 3,
          colliders: 0,
          upload: () => {
            let n = 1 / 0;
            for (let e of [i, a])
              e.n && (n = Math.min(n, YY(e, this.underBox).min.y - 0.3));
            let r = d.write(c, t, n === 1 / 0 ? -1 / 0 : n);
            r >= 0 && this.nearSlots.set(e, r);
          },
        };
      }
      let f = new Float32Array(l * 3),
        m = new Float32Array(l * 3),
        g = new Float32Array(l * 2),
        _ = new Uint8Array(l * 8),
        v = l <= 65535 ? new Uint16Array(u) : new Uint32Array(u),
        x = 0,
        S = 0;
      for (let e of c) {
        (f.set(e.pos.subarray(0, e.n * 3), x * 3),
          m.set(e.nor.subarray(0, e.n * 3), x * 3),
          g.set(e.uv.subarray(0, e.n * 2), x * 2),
          _.set(e.ca.subarray(0, e.n * 8), x * 8));
        for (let t = 0; t < e.ni; t++) v[S + t] = e.idx[t] + x;
        ((x += e.n), (S += e.ni));
      }
      yield;
      let w = new y();
      (w.setAttribute(`position`, new b(f, 3)),
        w.setAttribute(`normal`, new b(m, 3)),
        w.setAttribute(`uv`, new b(g, 2)));
      let T = new C(_, 8);
      (w.setAttribute(`color`, new h(T, 3, 0, !0)),
        w.setAttribute(`aCity`, new h(T, 4, 4, !0)),
        w.setIndex(new b(v, 1)));
      let E = JY(c, new k());
      ((w.boundingBox = E), (w.boundingSphere = E.getBoundingSphere(new o())));
      let D = new p(w, n),
        O = s.ni,
        A = r.ni;
      return (
        (D.onBeforeShadow = (e, t, n, r, i) => i.setDrawRange(O, A)),
        (D.onBeforeRender = (e, t, n, r) => r.setDrawRange(0, 1 / 0)),
        (D.name = `transit-rail-${e}`),
        (D.castShadow = !0),
        (D.receiveShadow = !0),
        (D.matrixAutoUpdate = !1),
        D.updateMatrixWorld(!0),
        ke(D),
        this.nearMeshes.add(D),
        { roots: [D], bytes: l * 40 + v.byteLength, tris: u / 3, colliders: 0 }
      );
    }
    prewarm() {
      let e = this.ctx.quality.materials,
        t = this.protos.get(e);
      if (!t) {
        t = [];
        let n = ir(this.farMat(), `transit-rail-far-proto`);
        ((n.receiveShadow = !0), t.push(n));
        let r = this.nearPoolMat();
        if (r) {
          let e = new gr(`transit-rail-near-proto`, r, 1, 4, 6, !0),
            n = new Le(8, 12);
          (n.setMaterial(0.8, 0, 0.2, 1).setColor(200, 200, 200),
            n.quad(0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0),
            e.setVisible(e.write(n, new k(new j(0, 0, 0), new j(1, 1, 1))), !0),
            (e.mesh.frustumCulled = !1),
            t.push(e.mesh));
        }
        let i = this.nearMat();
        if (i) {
          let e = new Le(8, 12);
          (e.setMaterial(0.8, 0, 0.2, 1).setColor(200, 200, 200),
            e.quad(0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0));
          let n = new p(e.build(), i);
          ((n.name = `transit-rail-proto`),
            (n.castShadow = !0),
            (n.receiveShadow = !0),
            (n.frustumCulled = !1),
            t.push(n));
        }
        this.protos.set(e, t);
      }
      return t;
    }
    buildNow(e, t, n) {
      return this.residency.buildNow(e, t, n);
    }
    stats() {
      return {
        ...this.residency.stats(),
        pool: this.far?.usage(),
        nearPool: this.nearPool?.usage() ?? null,
      };
    }
  };
