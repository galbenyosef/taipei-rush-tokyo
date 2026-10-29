// tokyo/assets/region-tokyo-A7LxHjud 06 — mesh
// Lines 1368-2252 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var hr = class {
    mesh;
    models = new Map();
    modelTris = [];
    X = new Float32Array();
    Z = new Float32Array();
    R2 = new Float32Array();
    F = new Uint8Array();
    G = new Int16Array();
    lodFar = new Int16Array(512).fill(-1);
    lodD2 = new Float32Array(512);
    live = new Int32Array();
    liveAt = new Int32Array();
    nLive = 0;
    shownList = new Int32Array();
    shownAt = new Int32Array();
    free = new Int32Array(256);
    nFree = 0;
    cx = 1e9;
    cz = 1e9;
    rangeK = 1;
    shown = 0;
    shownTris = 0;
    grows = 0;
    SX = new Float32Array();
    SY = new Float32Array();
    SZ = new Float32Array();
    SR = new Float32Array();
    modelSphere = new Float32Array(2048);
    cullCam = null;
    visGen = 0;
    mainGen = -1;
    shadowGen = -1;
    mainPose = new Float64Array(11);
    shadowPose = new Float64Array(18);
    sStarts = new Int32Array();
    sCounts = new Int32Array();
    sTex = null;
    nShadow = 0;
    saved = null;
    culledMain = 0;
    culledShadow = 0;
    rebuilds = 0;
    rebuildMs = 0;
    mPos = new Int32Array();
    sPos = new Int32Array();
    mFr = new k();
    sFr = new k();
    bpe = 4;
    edits = 0;
    constructor(e, t, n, r, i) {
      let a = 0,
        o = 0;
      for (let e of n)
        ((a += e.geo.attributes.position.count), (o += e.geo.index.count));
      let s = (this.mesh = new b(r, Math.max(3, a), Math.max(3, o), t));
      ((s.name = e),
        (s.perObjectFrustumCulled = !1),
        (s.sortObjects = !1),
        (s.frustumCulled = !1),
        dne &&
          ((s.frustumCulled = !0),
          (s.intersectsFrustum = (e) =>
            this.cullCam ? this.intersects(e) : this.shown > 0)),
        (s.castShadow = i),
        (s.receiveShadow = !0),
        (s.matrixAutoUpdate = !1),
        (s.raycast = () => {}));
      for (let e of n) {
        let t = s.addGeometry(e.geo);
        (this.models.set(e.name, t),
          (this.modelTris[t] = e.geo.index.count / 3),
          e.geo.boundingSphere || e.geo.computeBoundingSphere());
        let n = e.geo.boundingSphere;
        if (t * 4 + 3 >= this.modelSphere.length) {
          let e = new Float32Array(
            Math.max(this.modelSphere.length * 2, t * 4 + 64),
          );
          (e.set(this.modelSphere), (this.modelSphere = e));
        }
        ((this.modelSphere[t * 4] = n.center.x),
          (this.modelSphere[t * 4 + 1] = n.center.y),
          (this.modelSphere[t * 4 + 2] = n.center.z),
          (this.modelSphere[t * 4 + 3] = n.radius));
      }
      this.alloc(r);
    }
    alloc(e) {
      let t = (t) => {
        let n = new t.constructor(e);
        return (n.set(t.subarray(0, Math.min(t.length, e))), n);
      };
      ((this.X = t(this.X)),
        (this.Z = t(this.Z)),
        (this.R2 = t(this.R2)),
        (this.F = t(this.F)),
        (this.G = t(this.G)),
        (this.live = t(this.live)),
        (this.liveAt = t(this.liveAt)),
        (this.shownList = t(this.shownList)),
        (this.shownAt = t(this.shownAt)));
      let n = (t) => {
        let n = new Int32Array(e).fill(-1);
        return (n.set(t.subarray(0, Math.min(t.length, e))), n);
      };
      ((this.mPos = n(this.mPos)),
        (this.sPos = n(this.sPos)),
        (this.SX = t(this.SX)),
        (this.SY = t(this.SY)),
        (this.SZ = t(this.SZ)),
        (this.SR = t(this.SR)));
    }
    get capacity() {
      return this.X.length;
    }
    get count() {
      return this.nLive;
    }
    add(e, t, n, r, i, a = !0) {
      let o;
      if (this.nFree)
        ((o = this.free[--this.nFree]),
          this.mesh.setGeometryIdAt(o, e),
          this.quiet());
      else
        try {
          o = this.mesh.addInstance(e);
        } catch {
          let t = Math.ceil(this.capacity * 1.5) + 64;
          (this.unswap(),
            this.mesh.setInstanceCount(t),
            this.shadowArrays(),
            this.alloc(t),
            this.grows++,
            (o = this.mesh.addInstance(e)));
        }
      (o >= this.capacity &&
        this.alloc(Math.max(o + 1, Math.ceil(this.capacity * 1.5))),
        this.mesh.setVisibleAt(o, !1),
        this.quiet(),
        or.fromArray(t),
        this.mesh.setMatrixAt(o, or),
        (this.X[o] = n),
        (this.Z[o] = r),
        this.sphere(o, e, t),
        (this.R2[o] = i * i),
        (this.G[o] = e),
        (this.F[o] = 1 | (a ? 2 : 0)),
        (this.liveAt[o] = this.nLive),
        (this.live[this.nLive++] = o));
      let s = this.rangeK,
        c = (n - this.cx) ** 2 + (r - this.cz) ** 2;
      return (this.lod(o, c, s * s), this.apply(o, c <= this.R2[o] * s * s), o);
    }
    setLod(e, t, n) {
      ((this.lodFar[e] = t), (this.lodD2[e] = n * n));
    }
    tris(e) {
      return this.modelTris[
        this.F[e] & 16 ? this.lodFar[this.G[e]] : this.G[e]
      ];
    }
    lod(e, t, n) {
      let r = this.G[e],
        i = this.lodFar[r];
      if (i < 0) return;
      let a = this.F[e],
        o = t > this.lodD2[r] * n;
      o !== !!(a & 16) &&
        (a & 8 && (this.shownTris -= this.tris(e)),
        (this.F[e] = o ? a | 16 : a & -17),
        this.mesh.setGeometryIdAt(e, o ? i : r),
        this.quiet(),
        a & 8 && ((this.shownTris += this.tris(e)), this.repoint(e)));
    }
    remove(e) {
      if (!(this.F[e] & 1)) return;
      (this.F[e] & 8 &&
        (this.unlistShown(e),
        (this.shownTris -= this.tris(e)),
        this.unlistDraw(e)),
        (this.F[e] = 0));
      let t = this.liveAt[e],
        n = this.live[--this.nLive];
      if (
        ((this.live[t] = n),
        (this.liveAt[n] = t),
        this.mesh.setVisibleAt(e, !1),
        this.quiet(),
        this.nFree >= this.free.length)
      ) {
        let e = new Int32Array(Math.max(256, this.free.length * 2));
        (e.set(this.free), (this.free = e));
      }
      this.free[this.nFree++] = e;
    }
    setOn(e, t) {
      let n = this.F[e];
      n & 1 &&
        !!(n & 2) !== t &&
        ((this.F[e] = t ? n | 2 : n & -3), this.apply(e, !!(n & 4)));
    }
    apply(e, t) {
      let n = this.F[e];
      n = t ? n | 4 : n & -5;
      let r = (n & 6) == 6;
      if (r !== !!(n & 8)) {
        (this.mesh.setVisibleAt(e, r), this.quiet());
        let t = this.tris(e);
        (r
          ? (this.listShown(e), (this.shownTris += t))
          : (this.unlistShown(e), (this.shownTris -= t)),
          (n = r ? n | 8 : n & -9),
          (this.F[e] = n),
          r ? this.listDraw(e) : this.unlistDraw(e));
      }
      this.F[e] = n;
    }
    quiet() {
      this.cullCam && (this.mesh._visibilityChanged = !1);
    }
    mainList() {
      if (this.saved) return this.saved;
      let e = this.mesh;
      return {
        starts: e._multiDrawStarts,
        counts: e._multiDrawCounts,
        tex: e._indirectTexture,
        n: e._multiDrawCount,
      };
    }
    setMainCount(e) {
      (this.saved ? (this.saved.n = e) : (this.mesh._multiDrawCount = e),
        (this.culledMain = e));
    }
    inFrustum(e, t, n) {
      let r = t.planes,
        i = this.SX[e],
        a = this.SY[e],
        o = this.SZ[e],
        s = this.SR[e] + dr,
        c = r[5].normal,
        l = c.x * i + c.y * a + c.z * o + r[5].constant;
      if (l < -s) return !1;
      let u = n && l > 0 ? s + l * mr : s;
      for (let e = 0; e < 5; e++) {
        let t = r[e].normal;
        if (t.x * i + t.y * a + t.z * o + r[e].constant < -(e < 4 ? u : s))
          return !1;
      }
      return !0;
    }
    listDraw(e) {
      if (!this.cullCam) return;
      let t =
        this.mesh._geometryInfo[
          this.F[e] & 16 ? this.lodFar[this.G[e]] : this.G[e]
        ];
      if (
        this.mainGen === this.visGen &&
        this.mPos[e] < 0 &&
        this.inFrustum(e, this.mFr, !0)
      ) {
        let n = this.mainList(),
          r = n.n;
        ((n.starts[r] = t.start * this.bpe),
          (n.counts[r] = t.count),
          (n.tex.image.data[r] = e),
          (n.tex.needsUpdate = !0),
          (this.mPos[e] = r),
          this.setMainCount(r + 1),
          this.edits++);
      }
      if (
        this.shadowGen === this.visGen &&
        this.sTex &&
        this.sPos[e] < 0 &&
        this.inFrustum(e, this.sFr, !1)
      ) {
        let n = this.nShadow;
        ((this.sStarts[n] = t.start * this.bpe),
          (this.sCounts[n] = t.count),
          (this.sTex.image.data[n] = e),
          (this.sTex.needsUpdate = !0),
          (this.sPos[e] = n),
          (this.nShadow = this.culledShadow = n + 1),
          this.saved && (this.mesh._multiDrawCount = this.nShadow),
          this.edits++);
      }
    }
    unlistDraw(e) {
      let t = this.mPos[e];
      if (t >= 0) {
        let n = this.mainList(),
          r = n.n - 1,
          i = n.tex.image.data,
          a = i[r];
        ((n.starts[t] = n.starts[r]),
          (n.counts[t] = n.counts[r]),
          (i[t] = a),
          (this.mPos[a] = t),
          (this.mPos[e] = -1),
          (n.tex.needsUpdate = !0),
          this.setMainCount(r),
          this.edits++);
      }
      let n = this.sPos[e];
      if (n >= 0 && this.sTex) {
        let t = this.nShadow - 1,
          r = this.sTex.image.data,
          i = r[t];
        ((this.sStarts[n] = this.sStarts[t]),
          (this.sCounts[n] = this.sCounts[t]),
          (r[n] = i),
          (this.sPos[i] = n),
          (this.sPos[e] = -1),
          (this.sTex.needsUpdate = !0),
          (this.nShadow = this.culledShadow = t),
          this.saved && (this.mesh._multiDrawCount = this.nShadow),
          this.edits++);
      }
    }
    verifyLists() {
      if (!this.cullCam || this.mainGen !== this.visGen) return null;
      let e = this.mesh._geometryInfo,
        t = (t, n, r, i, a, o, s) => {
          let c = { n: i, missing: 0, extra: 0, pos: 0, range: 0 },
            l = new Set();
          for (let u = 0; u < i; u++) {
            let i = r[u];
            (l.add(i),
              a[i] !== u && c.pos++,
              (!(this.F[i] & 8) || !this.inFrustum(i, o, s)) && c.extra++);
            let d = e[this.F[i] & 16 ? this.lodFar[this.G[i]] : this.G[i]];
            (t[u] !== d.start * this.bpe || n[u] !== d.count) && c.range++;
          }
          for (let e = 0; e < this.shown; e++) {
            let t = this.shownList[e];
            this.inFrustum(t, o, s) && !l.has(t) && c.missing++;
          }
          return c;
        },
        n = this.mainList();
      return {
        main: t(
          n.starts,
          n.counts,
          n.tex.image.data,
          n.n,
          this.mPos,
          this.mFr,
          !0,
        ),
        shadow:
          this.sTex && this.shadowGen === this.visGen
            ? t(
                this.sStarts,
                this.sCounts,
                this.sTex.image.data,
                this.nShadow,
                this.sPos,
                this.sFr,
                !1,
              )
            : null,
      };
    }
    repoint(e) {
      let t =
          this.mesh._geometryInfo[
            this.F[e] & 16 ? this.lodFar[this.G[e]] : this.G[e]
          ],
        n = this.mPos[e];
      if (n >= 0) {
        let e = this.mainList();
        ((e.starts[n] = t.start * this.bpe), (e.counts[n] = t.count));
      }
      let r = this.sPos[e];
      r >= 0 &&
        ((this.sStarts[r] = t.start * this.bpe), (this.sCounts[r] = t.count));
    }
    listShown(e) {
      ((this.shownAt[e] = this.shown), (this.shownList[this.shown++] = e));
    }
    unlistShown(e) {
      let t = this.shownAt[e],
        n = this.shownList[--this.shown];
      ((this.shownList[t] = n), (this.shownAt[n] = t));
    }
    sphere(e, t, n) {
      let r = this.modelSphere,
        i = Math.sqrt(
          Math.max(
            n[0] * n[0] + n[1] * n[1] + n[2] * n[2],
            n[4] * n[4] + n[5] * n[5] + n[6] * n[6],
            n[8] * n[8] + n[9] * n[9] + n[10] * n[10],
          ),
        ),
        a = t * 4,
        o = this.lodFar[t],
        s = r[a],
        c = r[a + 1],
        l = r[a + 2],
        u = r[a + 3];
      (o >= 0 &&
        (u = Math.max(
          u,
          r[o * 4 + 3] +
            Math.hypot(r[o * 4] - s, r[o * 4 + 1] - c, r[o * 4 + 2] - l),
        )),
        (this.SX[e] = n[0] * s + n[4] * c + n[8] * l + n[12]),
        (this.SY[e] = n[1] * s + n[5] * c + n[9] * l + n[13]),
        (this.SZ[e] = n[2] * s + n[6] * c + n[10] * l + n[14]),
        (this.SR[e] = u * i));
    }
    enableCulling(e) {
      ((this.cullCam = e), this.shadowArrays());
      let t = this.mesh;
      ((t.onBeforeRender = (e, t, n, r) => this.beforeMain(n, r)),
        (t.onBeforeShadow = (e, t, n, r, i) => this.beforeShadow(r, i)));
    }
    shadowArrays() {
      if (!this.cullCam) return;
      let e = this.mesh,
        t = e._multiDrawStarts.length;
      if (this.sStarts.length === t && this.sTex) return;
      ((this.sStarts = new Int32Array(t)), (this.sCounts = new Int32Array(t)));
      let n = e._indirectTexture.image;
      (this.sTex?.dispose(),
        (this.sTex = new c(
          new Uint32Array(n.width * n.height),
          n.width,
          n.height,
          re,
          ee,
        )),
        (this.shadowGen = -1),
        (this.mainGen = -1),
        this.mPos.fill(-1),
        this.sPos.fill(-1),
        (this.nShadow = 0));
    }
    unswap() {
      let e = this.saved;
      if (!e) return;
      let t = this.mesh;
      ((t._multiDrawStarts = e.starts),
        (t._multiDrawCounts = e.counts),
        (t._indirectTexture = e.tex),
        (t._multiDrawCount = e.n),
        (this.saved = null));
    }
    syncVis() {
      let e = this.mesh;
      e._visibilityChanged &&= (this.visGen++, !1);
    }
    beforeMain(e, t) {
      (this.unswap(), this.syncVis());
      let n = this.mesh;
      if (e !== this.cullCam) {
        this.mainGen !== this.visGen &&
          ((n._multiDrawCount = this.buildList(
            null,
            !1,
            n._multiDrawStarts,
            n._multiDrawCounts,
            n._indirectTexture,
            t,
            this.mPos,
          )),
          (this.mainGen = -1));
        return;
      }
      if (this.mainPoseOk(e) && this.mainGen === this.visGen) return;
      let r = this.mainPose,
        i = e;
      ((r[0] = ur.x),
        (r[1] = ur.y),
        (r[2] = ur.z),
        (r[3] = lr.x),
        (r[4] = lr.y),
        (r[5] = lr.z),
        (r[6] = i.fov ?? 0),
        (r[7] = i.aspect ?? 1),
        (r[8] = i.zoom ?? 1),
        (r[9] = i.near ?? 0),
        (r[10] = i.far ?? 0),
        sr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this.mFr.setFromProjectionMatrix(
          sr,
          e.coordinateSystem,
          e.reversedDepth,
        ),
        (n._multiDrawCount = this.culledMain =
          this.buildList(
            this.mFr,
            !0,
            n._multiDrawStarts,
            n._multiDrawCounts,
            n._indirectTexture,
            t,
            this.mPos,
          )),
        (this.mainGen = this.visGen));
    }
    mainPoseOk(e) {
      let t = e.matrixWorld.elements;
      (ur.set(t[12], t[13], t[14]), lr.set(-t[8], -t[9], -t[10]).normalize());
      let n = this.mainPose,
        r = e;
      return (
        (ur.x - n[0]) ** 2 + (ur.y - n[1]) ** 2 + (ur.z - n[2]) ** 2 <= fr &&
        lr.x * n[3] + lr.y * n[4] + lr.z * n[5] >= lne &&
        (r.fov ?? 0) <= n[6] + une &&
        (r.aspect ?? 1) === n[7] &&
        (r.zoom ?? 1) === n[8] &&
        (r.near ?? 0) === n[9] &&
        (r.far ?? 0) === n[10]
      );
    }
    shadowPoseOk(e) {
      let t = e.matrixWorld.elements,
        n = this.shadowPose,
        r = e;
      if (
        (t[12] - n[12]) ** 2 + (t[13] - n[13]) ** 2 + (t[14] - n[14]) ** 2 >
        fr
      )
        return !1;
      for (let e = 0; e < 11; e++)
        if (e % 4 != 3 && Math.abs(t[e] - n[e]) > 0.002) return !1;
      return r.right === n[16] && r.far === n[17];
    }
    intersects(e) {
      if (((this.lastFr = e), this.syncVis(), e === this.shadowFr))
        return !(
          this.shadowGen === this.visGen &&
          this.nShadow === 0 &&
          this.shadowCam !== null &&
          this.shadowPoseOk(this.shadowCam)
        );
      let t = this.cullCam;
      if (!t) return !0;
      if (e !== this.mainFr) {
        if (this.mainFr || !fne(e, t)) return !0;
        this.mainFr = e;
      }
      return !(
        this.mainGen === this.visGen &&
        this.culledMain === 0 &&
        this.mainPoseOk(t)
      );
    }
    lastFr = null;
    mainFr = null;
    shadowFr = null;
    shadowCam = null;
    beforeShadow(e, t) {
      (this.syncVis(),
        this.lastFr &&
          this.lastFr !== this.mainFr &&
          (this.shadowFr = this.lastFr),
        (this.lastFr = null),
        (this.shadowCam = e));
      let n = this.sTex;
      if (!n) return;
      let r = this.mesh,
        i = e.matrixWorld.elements,
        a = this.shadowPose,
        o = e;
      if (this.shadowGen !== this.visGen || !this.shadowPoseOk(e)) {
        for (let e = 0; e < 16; e++) a[e] = i[e];
        ((a[16] = o.right),
          (a[17] = o.far),
          sr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          this.sFr.setFromProjectionMatrix(
            sr,
            e.coordinateSystem,
            e.reversedDepth,
          ),
          (this.nShadow = this.culledShadow =
            this.buildList(
              this.sFr,
              !1,
              this.sStarts,
              this.sCounts,
              n,
              t,
              this.sPos,
            )),
          (this.shadowGen = this.visGen));
      }
      ((this.saved ||= {
        starts: r._multiDrawStarts,
        counts: r._multiDrawCounts,
        tex: r._indirectTexture,
        n: r._multiDrawCount,
      }),
        (r._multiDrawStarts = this.sStarts),
        (r._multiDrawCounts = this.sCounts),
        (r._indirectTexture = n),
        (r._multiDrawCount = this.nShadow));
    }
    buildList(e, t, n, r, i, a, o) {
      let s = performance.now(),
        c = this.mesh,
        l = c._geometryInfo,
        u = a.getIndex()?.array.BYTES_PER_ELEMENT ?? 1;
      ((c._multiDrawBytesPerElement = u), (this.bpe = u));
      {
        let e = i.image.data,
          t =
            n === this.sStarts
              ? this.nShadow
              : this.saved
                ? this.saved.n
                : c._multiDrawCount;
        for (let n = 0; n < t; n++) o[e[n]] = -1;
      }
      let d = i.image.data,
        f = this.F,
        p = this.G,
        m = this.shownList,
        h = this.lodFar,
        g = this.SX,
        _ = this.SY,
        v = this.SZ,
        y = this.SR,
        b = e ? e.planes : null,
        x = 0;
      for (let e = 0, i = this.shown; e < i; e++) {
        let i = m[e],
          a = f[i];
        if (!(a & 8)) continue;
        if (b) {
          let e = g[i],
            n = _[i],
            r = v[i],
            a = y[i] + dr,
            o = b[5].normal,
            s = o.x * e + o.y * n + o.z * r + b[5].constant;
          if (s < -a) continue;
          let c = t && s > 0 ? a + s * mr : a,
            l = 0;
          for (; l < 5; l++) {
            let t = b[l],
              i = t.normal;
            if (i.x * e + i.y * n + i.z * r + t.constant < -(l < 4 ? c : a))
              break;
          }
          if (l < 5) continue;
        }
        let s = l[a & 16 ? h[p[i]] : p[i]];
        ((n[x] = s.start * u), (r[x] = s.count), (d[x] = i), (o[i] = x), x++);
      }
      return (
        (i.needsUpdate = !0),
        this.rebuilds++,
        (this.rebuildMs += performance.now() - s),
        x
      );
    }
    regather(e, t, n, r, i = !1) {
      if (
        !i &&
        n === this.rangeK &&
        (e - this.cx) ** 2 + (t - this.cz) ** 2 < r * r
      )
        return !1;
      ((this.cx = e), (this.cz = t), (this.rangeK = n));
      let a = n * n,
        o = this.X,
        s = this.Z,
        c = this.R2,
        l = this.live;
      for (let n = 0; n < this.nLive; n++) {
        let r = l[n],
          i = (o[r] - e) ** 2 + (s[r] - t) ** 2,
          u = i <= c[r] * a;
        (u && this.lod(r, i, a), u !== !!(this.F[r] & 4) && this.apply(r, u));
      }
      return !0;
    }
  },
  gr = class {
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
    full = 0;
    gpu = null;
    ib = 4;
    constructor(e, t, n, r, i, a) {
      ((this.slots = n), (this.maxVertices = r), (this.maxIndices = i));
      let o = (this.mesh = new b(n, r, i, t));
      ((o.name = e),
        (o.frustumCulled = !1),
        (o.sortObjects = !1),
        (o.castShadow = a),
        (o.receiveShadow = !0),
        (o.matrixAutoUpdate = !1),
        (o.raycast = () => {}));
      let s = cne();
      ((this.slotV = new Int32Array(n * 2)),
        (this.slotI = new Int32Array(n * 2)));
      for (let e = 0; e < n; e++) {
        let t = o.addGeometry(s, 0, 0),
          r = o.addInstance(t);
        (o.setVisibleAt(r, !1),
          this.inst.push(r),
          this.freeSlots.push(n - 1 - e));
      }
      this.info = o._geometryInfo;
      let c = o.geometry;
      ((this.pos = c.attributes.position),
        (this.nor = c.attributes.normal),
        (this.uv = c.attributes.uv),
        (this.col = c.attributes.color),
        (this.city = c.attributes.aCity),
        (this.index = c.index));
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
        ((this.verts = new Qn(r)),
        (this.idxs = new Qn(i)),
        !Array.isArray(this.info) || this.info.length !== n)
      )
        throw Error(`TilePool: unexpected BatchedMesh internals`);
      $n && !/proto$/.test(e) && ane(o);
    }
    get bytes() {
      return this.maxVertices * 40 + this.maxIndices * (this.gpu ? this.ib : 4);
    }
    attachGpu(e) {
      return this.gpu
        ? !0
        : ((this.ib = this.index.array.BYTES_PER_ELEMENT),
          (this.gpu = Ie(this.mesh, e.gl, (t) => e.uploadDraw(t))),
          !!this.gpu);
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
      let o = this.freeSlots.pop();
      if (
        ((this.slotV[o * 2] = i),
        (this.slotV[o * 2 + 1] = n),
        (this.slotI[o * 2] = a),
        (this.slotI[o * 2 + 1] = r),
        this.gpu)
      )
        De(this.gpu, e, i, a);
      else {
        (this.pos.array.set(e.pos.subarray(0, n * 3), i * 3),
          this.nor.array.set(e.nor.subarray(0, n * 3), i * 3),
          this.uv.array.set(e.uv.subarray(0, n * 2), i * 2));
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
          this.uv.addUpdateRange(i * 2, n * 2),
          this.col.addUpdateRange(i * 4, n * 4),
          this.city.addUpdateRange(i * 4, n * 4),
          this.index.addUpdateRange(a, r));
        for (let e of [
          this.pos,
          this.nor,
          this.uv,
          this.col,
          this.city,
          this.index,
        ])
          e.needsUpdate = !0;
      }
      let c = this.info[o];
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
        (c.boundingSphere = t.getBoundingSphere(new s())),
        (this.mesh._visibilityChanged = !0),
        o
      );
    }
    vertexStart(e) {
      return this.slotV[e * 2];
    }
    patchQuadUv(e, t, n, r, i, a) {
      if (e < 0) return;
      if (this.gpu) {
        we(this.gpu, this.slotV[e * 2] + t, n, r, i, a);
        return;
      }
      let o = (this.slotV[e * 2] + t) * 2,
        s = this.uv.array;
      ((s[o] = n),
        (s[o + 1] = r),
        (s[o + 2] = i),
        (s[o + 3] = r),
        (s[o + 4] = i),
        (s[o + 5] = a),
        (s[o + 6] = n),
        (s[o + 7] = a),
        this.uv.addUpdateRange(o, 8),
        (this.uv.needsUpdate = !0));
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
  },
  pne = `/tokyo/assets/region-tokyo-sans-jp-hyLDYRy3.woff2`,
  _r = `Tokyo Sans JP`,
  mne = `"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic","YuGothic","Meiryo","Noto Sans JP","Noto Sans CJK JP"`,
  hne = `"Hiragino Mincho ProN","Yu Mincho","YuMincho","Noto Serif JP","Noto Serif CJK JP"`,
  vr = `${mne},"${_r}",sans-serif`,
  yr = `${hne},"${_r}",serif`;
