// tokyo/assets/engine-wUBYs8Z3 17 — math
// Lines 5022-6289 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var Ya = 1e3 / 60,
  Xa = 0.05,
  Za = 12,
  Qa = 0.985,
  G = { on: !1, depth: 1 / 0, culled: 0 },
  $a = () => {},
  eo = class {
    quality;
    gl;
    scene = new o();
    camera;
    canvas;
    reversedZ;
    post = null;
    pixelRatio = 1;
    frameMsAvg = Ya;
    gpuMs = -1;
    cpuMs = 0;
    targetMs = Ya;
    frameCapMs = 0;
    renderRevision = 0;
    get redrawPending() {
      return this.resizePending;
    }
    adaptive = !0;
    worldHidden = !1;
    width = 1;
    height = 1;
    skippedEmpty = 0;
    tightCount = 0;
    dissolveCulled = 0;
    forceShed = (() => {
      let e =
        typeof location > `u`
          ? null
          : new URLSearchParams(location.search).get(`shed`);
      return e === `0` ? 0 : e === `1` ? 1 : null;
    })();
    dissolveCull =
      typeof location > `u` ||
      new URLSearchParams(location.search).get(`dcull`) !== `0`;
    contextLost = !1;
    gpuAccount = null;
    onContextLost = null;
    onContextRestored = null;
    gpuOom = 0;
    onGpuOom = null;
    oomT = 0;
    upWhere = ``;
    upFrame = -1;
    upT = 0;
    oomChecks = 0;
    noteUpload(e) {
      ((this.upWhere = e),
        (this.upFrame = this.frameNo),
        (this.upT = performance.now()));
    }
    pollOom(e) {
      this.oomT += e;
      let t = !this.streamBusy;
      if (this.upFrame >= 0) {
        if (
          !(
            t &&
            this.frameNo - this.upFrame >= 2 &&
            performance.now() - this.upT > 250
          ) &&
          this.oomT < 20
        )
          return;
        let e = this.upWhere;
        ((this.upFrame = -1), (this.oomT = 0), this.checkGpuOom(e));
        return;
      }
      t &&
        this.oomT > (this.quality.mobile ? 4 : 12) &&
        ((this.oomT = 0), this.checkGpuOom(`frame`));
    }
    checkGpuOom(e) {
      if (this.contextLost) return !1;
      this.oomChecks++;
      let t = this.gl.getContext(),
        n = !1;
      for (let e = 0; e < 4; e++) {
        let e = t.getError();
        if (e === t.NO_ERROR || e === t.CONTEXT_LOST_WEBGL) break;
        e === t.OUT_OF_MEMORY && (n = !0);
      }
      if (!n) return !1;
      if (this.gpuOom++ === 0) {
        console.warn(
          `[renderer] GL_OUT_OF_MEMORY (${e}) — the GPU memory pool is full`,
        );
        try {
          this.onGpuOom?.(e);
        } catch {}
      }
      return !0;
    }
    cpuBound = !1;
    shed = 0;
    onCpuBound = null;
    isStaticRoot = null;
    frameNo = 0;
    preRender = [];
    suspendT = 3;
    cooldown = 0;
    overT = 0;
    underT = 0;
    boundT = 0;
    freeT = 0;
    missEma = 0;
    lastFar = 0;
    lastShadowFrame = -10;
    probe = null;
    probeWait = 4;
    probeBackoff = 4;
    resizePending = !1;
    cadRing = new Float32Array(64);
    cadSorted = new Float32Array(64);
    cadN = 0;
    cadT = 0;
    cadenceMs = 0;
    bgMs = 0;
    streamBusy = !1;
    inShadowPass = !1;
    warmingShadow = !1;
    depthWarm = new Set();
    hdrType = te;
    timerExt = null;
    queries = [];
    pending = [];
    queryOpen = !1;
    cullList = [];
    hidden = [];
    cullScanT = 0;
    scanStatic = !1;
    held = new Set();
    constructor(e, t) {
      this.quality = t;
      let n = t.bloom || t.postFx;
      if (
        ((this.gl = new be({
          antialias: t.antialias && !n,
          powerPreference: `high-performance`,
          stencil: !1,
          alpha: !1,
          preserveDrawingBuffer: new URLSearchParams(location.search).has(
            `shot`,
          ),
          reversedDepthBuffer: Da(),
        })),
        (this.reversedZ = za(this.gl, Da())),
        (this.gl.debug.checkShaderErrors = !1),
        Ga)
      ) {
        let e = (e) => {
          if (e && !this.gpuAccount)
            try {
              this.gpuAccount = new e.GpuAccount(this.gl.getContext());
            } catch (e) {
              console.warn(`[renderer] GPU accounting unavailable`, e);
            }
        };
        Ka ? e(Ka) : Ja().then(e);
      }
      (typeof window < `u` && (window.__gpuAccount = () => this.gpuMemory()),
        typeof window < `u` &&
          new URLSearchParams(location.search).has(`shot`) &&
          (window.__three = Ee),
        (this.canvas = this.gl.domElement),
        (this.canvas.id = `game-canvas`),
        e.appendChild(this.canvas),
        (this.gl.outputColorSpace = s),
        (this.gl.toneMapping = 4),
        (this.gl.toneMappingExposure = 1),
        (this.gl.shadowMap.enabled = t.shadows),
        (this.gl.shadowMap.type = 1),
        (this.gl.info.autoReset = !1),
        this.gl.setOpaqueSort(this.opaqueSort),
        this.wrapShadowMap(),
        this.skipEmptyBatches(),
        (this.camera = new a(60, 1, Wa, t.drawDistance)),
        (this.lastFar = this.camera.far));
      let r = new URLSearchParams(location.search),
        i = Number(r.get(`dpr`));
      ((r.get(`adapt`) === `0` || i > 0) && (this.adaptive = !1),
        (this.pixelRatio = i > 0 ? i : this.startPixelRatio()),
        this.initTimer(),
        (this.hdrType = so(this.gl.getContext())),
        this.resize(),
        Va(() => {
          (window.innerWidth !== this.width ||
            window.innerHeight !== this.height) &&
            ((this.resizePending = !0), this.suspendAdapt(1));
        }),
        this.canvas.addEventListener(
          `webglcontextlost`,
          (e) => {
            if ((e.preventDefault(), !this.contextLost)) {
              this.contextLost = !0;
              try {
                this.onContextLost?.();
              } catch (e) {
                console.warn(`[renderer] context-lost handler failed`, e);
              }
            }
          },
          !1,
        ),
        this.canvas.addEventListener(
          `webglcontextrestored`,
          () => this.onContextRestored?.(),
          !1,
        ));
    }
    gpuMemory() {
      return this.gpuAccount?.report() ?? null;
    }
    maxPR() {
      return Math.max(
        0.5,
        Math.min(window.devicePixelRatio || 1, this.quality.maxPixelRatio),
      );
    }
    setFrameCap(e) {
      e !== this.frameCapMs &&
        ((this.frameCapMs = e),
        (this.cadenceMs = 0),
        (this.targetMs = Math.max(Ya, e)),
        (this.frameMsAvg = this.targetMs),
        (this.probe = null),
        this.suspendAdapt(2));
    }
    minPR() {
      return Math.min(this.maxPR(), this.quality.minPixelRatio);
    }
    startPixelRatio() {
      let e = this.maxPR();
      return fo(
        this.quality.mobile ? Math.max(this.minPR(), Math.min(e, 1.5)) : e,
      );
    }
    applyQuality(e) {
      ((this.quality = e),
        (this.gl.shadowMap.enabled = e.shadows),
        (this.camera.far =
          e.drawDistance * (1 - 0.15000000000000002 * this.shed)),
        (this.lastFar = this.camera.far),
        this.camera.updateProjectionMatrix(),
        this.adaptive && (this.pixelRatio = this.startPixelRatio()),
        this.resize(),
        this.suspendAdapt(2),
        (this.probeBackoff = 4));
    }
    setPostFx(e) {
      (this.post?.dispose(), (this.post = e), this.resize());
    }
    get postFx() {
      return this.post;
    }
    resize() {
      (this.renderRevision++, (this.resizePending = !1));
      let e = window.innerWidth,
        t = window.innerHeight;
      ((this.width = e),
        (this.height = t),
        this.gl.setPixelRatio(this.pixelRatio),
        this.gl.setSize(e, t, !1),
        (this.canvas.style.width = `100%`),
        (this.canvas.style.height = `100%`),
        (this.camera.aspect = e / t),
        this.camera.updateProjectionMatrix(),
        this.post?.setSize(e, t));
    }
    suspendAdapt(e) {
      ((this.suspendT = Math.max(this.suspendT, e)),
        (this.overT = this.underT = 0),
        (this.boundT = Math.min(this.boundT, 0.5)),
        (this.probe &&= null));
    }
    adapt(e, t, n) {
      this.pollTimer();
      let r = Math.min(50, Math.max(0, e));
      if (
        ((this.cpuMs += (Math.min(50, t) - this.cpuMs) * 0.1), document.hidden)
      )
        return this.suspendAdapt(1);
      if ((this.trackCadence(e, n), this.suspendT > 0)) {
        ((this.suspendT -= n), (this.frameMsAvg = this.targetMs));
        return;
      }
      if ((this.trackCpuBound(r, n), !this.adaptive)) return;
      let i = this.gpuMs >= 0,
        a = this.targetMs,
        o;
      if (
        ((o = i
          ? this.gpuMs
          : r > a * 2.5 || this.cpuMs + this.bgMs > a * 0.8 || this.streamBusy
            ? r > a * 1.08
              ? a * 0.95
              : Math.min(r, a * 0.95)
            : r > a * 1.08
              ? this.cpuMs < a * 0.8
                ? r
                : a * 0.95
              : Math.min(r, Math.max(t, a * 0.9))),
        (this.frameMsAvg += (Math.min(50, o) - this.frameMsAvg) * 0.08),
        this.cooldown > 0)
      ) {
        this.cooldown -= n;
        return;
      }
      let s = this.maxPR(),
        c = this.minPR(),
        l = this.frameMsAvg / a;
      if (this.probe) {
        let e = this.probe;
        if (this.streamBusy && !i) {
          e.t = e.acc = e.n = 0;
          return;
        }
        if (((e.t += n), (e.acc += r), e.n++, e.t >= 1.5)) {
          let t = e.acc / e.n;
          ((this.probe = null),
            t > a * 1.1 && this.cpuMs < a * 0.8
              ? (this.setPR(e.from),
                (this.probeBackoff = Math.min(40, this.probeBackoff * 2)),
                (this.probeWait = this.probeBackoff))
              : ((this.probeBackoff = Math.max(4, this.probeBackoff * 0.75)),
                (this.probeWait = 2.5)),
            (this.cooldown = 1));
        }
        return;
      }
      if (l > 1.12 && this.pixelRatio > c + 0.001) {
        if (((this.overT += n), (this.underT = 0), this.overT > 0.6)) {
          let e = Math.max(0.7, Math.min(0.95, Math.sqrt(1 / l) * 0.97));
          (this.setPR(
            Math.max(c, Math.min(this.pixelRatio - Xa, this.pixelRatio * e)),
          ),
            (this.cooldown = 1.2),
            (this.overT = 0),
            (this.probeWait = Math.max(this.probeWait, 3)));
        }
        return;
      }
      if (
        ((this.overT = Math.max(0, this.overT - n)),
        !(this.pixelRatio >= s - 0.001))
      ) {
        if (i) {
          if (l < 0.7) {
            if (((this.underT += n), this.underT > 2)) {
              let e = Math.sqrt(0.85 / Math.max(0.2, l));
              (this.setPR(
                Math.min(
                  s,
                  Math.max(
                    this.pixelRatio + Xa,
                    Math.min(this.pixelRatio * e, this.pixelRatio + 0.25),
                  ),
                ),
              ),
                (this.underT = 0),
                (this.cooldown = 1.5));
            }
          } else this.underT = 0;
          return;
        }
        l < 0.98 &&
          r < a * 1.08 &&
          !this.streamBusy &&
          ((this.probeWait -= n),
          this.probeWait <= 0 &&
            ((this.probe = { from: this.pixelRatio, t: 0, acc: 0, n: 0 }),
            this.setPR(Math.min(s, this.pixelRatio + 0.1))));
      }
    }
    trackCadence(e, t) {
      if (this.gpuMs >= 0 || !(e > 0) || e > 100) return;
      let n = this.cadRing;
      if (((n[this.cadN++ % n.length] = e), (this.cadT += t), this.cadT < 1))
        return;
      this.cadT = 0;
      let r = Math.min(this.cadN, n.length);
      if (((this.cadN = 0), r < 12)) return;
      let i = this.cadSorted;
      for (let e = 0; e < r; e++) i[e] = n[e];
      for (let e = 1; e < r; e++) {
        let t = i[e],
          n = e - 1;
        for (; n >= 0 && i[n] > t;) ((i[n + 1] = i[n]), n--);
        i[n + 1] = t;
      }
      let a = i[r >> 1],
        o = 0,
        s = 0;
      for (let e = 0; e < r; e++)
        i[e] > a * 2.2 || (s++, Math.abs(i[e] - a) <= 2.5 && o++);
      let c = Math.max(Ya, this.frameCapMs),
        l = Math.round(a / c),
        u =
          l >= 2 &&
          Math.abs(a - l * c) <= 2 &&
          s >= 8 &&
          o >= 0.75 * s &&
          this.cpuMs < 0.5 * a,
        d =
          this.cadenceMs > 0 &&
          Math.abs(a - this.cadenceMs) <= 2.5 &&
          this.cpuMs < 0.6 * this.cadenceMs,
        f = u ? l * c : d ? this.cadenceMs : 0;
      f !== this.cadenceMs &&
        ((this.cadenceMs = f),
        (this.targetMs = f || c),
        (this.frameMsAvg = this.targetMs),
        (this.overT = this.underT = 0),
        (this.probe = null));
    }
    trackCpuBound(e, t) {
      let n = this.targetMs;
      this.missEma += (+(e > n * 1.25) - this.missEma) * Math.min(1, t * 3);
      let r = this.gpuMs >= 0 ? this.gpuMs < 0.7 * n : !0;
      if (this.forceShed !== null) {
        let e = this.forceShed === 1;
        e !== this.cpuBound && ((this.cpuBound = e), this.notifyBound(e));
      } else if (this.cpuBound)
        ((this.freeT =
          this.cpuMs < 0.6 * n && this.missEma < 0.02
            ? this.freeT + t
            : Math.max(0, this.freeT - t * 0.5)),
          this.freeT > 4 &&
            ((this.cpuBound = !1), (this.boundT = 0), this.notifyBound(!1)));
      else {
        let e =
          this.cpuMs > n || (this.cpuMs > 0.75 * n && this.missEma > 0.05);
        ((this.boundT =
          e && r ? this.boundT + t : Math.max(0, this.boundT - t)),
          this.boundT > 1.5 &&
            ((this.cpuBound = !0), (this.freeT = 0), this.notifyBound(!0)));
      }
      let i = +!!this.cpuBound,
        a = this.shed;
      ((this.shed = Math.max(
        0,
        Math.min(1, a + Math.max(-t * 0.25, Math.min(t * 0.5, i - a))),
      )),
        this.shed !== a && this.applyShedFar());
    }
    notifyBound(e) {
      try {
        this.onCpuBound?.(e);
      } catch (e) {
        console.warn(`[renderer] cpuBound handler failed`, e);
      }
    }
    applyShedFar() {
      let e = this.camera,
        t = this.quality.drawDistance;
      if (Math.abs(e.far - this.lastFar) > 0.01 && Math.abs(e.far - t) > 0.01)
        return;
      let n = Math.round((t * (1 - 0.15000000000000002 * this.shed)) / 5) * 5;
      Math.abs(n - e.far) < 4.99 ||
        ((e.far = n), (this.lastFar = n), e.updateProjectionMatrix());
    }
    warmDepth = 0;
    skipEmptyBatches() {
      let e = this.gl,
        t = e.renderBufferDirect.bind(e);
      e.renderBufferDirect = (e, n, r, i, a, o) => {
        let s = a;
        if (
          s.isBatchedMesh &&
          s._multiDrawCount === 0 &&
          this.warmDepth === 0 &&
          !this.warmingShadow
        ) {
          this.skippedBatches++;
          return;
        }
        t(e, n, r, i, a, o);
      };
    }
    skippedBatches = 0;
    wrapShadowMap() {
      let e = this.gl.shadowMap,
        t = e.render.bind(e);
      e.render = (n, r, i) => {
        if (!n.length) return t(n, r, i);
        if (this.warmingShadow) {
          this.inShadowPass = !0;
          try {
            return t(n, r, i);
          } finally {
            this.inShadowPass = !1;
          }
        }
        if (this.shed > 0.5 && this.lastShadowFrame === this.frameNo - 1)
          return;
        if ((this.slimShadowMaps(n), e.autoUpdate || e.needsUpdate))
          for (let e = 0; e < n.length; e++) {
            let t = n[e].shadow;
            if (t && (t.autoUpdate || t.needsUpdate)) {
              this.lastShadowFrame = this.frameNo;
              break;
            }
          }
        let a = G.on;
        G.on = !1;
        try {
          t(n, r, i);
        } finally {
          G.on = a;
        }
      };
    }
    slimShadowMaps(e) {
      let t = this.gl.shadowMap.type;
      if (t === 1 || t === 0)
        for (let t = 0; t < e.length; t++) {
          let n = e[t].shadow,
            r = n?.map;
          if (
            !r ||
            r.isWebGLCubeRenderTarget ||
            !r.depthTexture ||
            r.texture.format === 1028
          )
            continue;
          let i = r.depthTexture,
            a = new xe(r.width, r.height, {
              format: ke,
              type: f,
              depthBuffer: !0,
              generateMipmaps: !1,
              minFilter: _,
              magFilter: _,
            });
          a.texture.name = r.texture.name;
          let o = new l(r.width, r.height, i.type);
          ((o.format = i.format),
            (o.compareFunction = i.compareFunction),
            (o.minFilter = i.minFilter),
            (o.magFilter = i.magFilter),
            (o.name = i.name),
            (a.depthTexture = o),
            (n.map = a),
            r.dispose(),
            (n.needsUpdate = !0));
        }
    }
    setPR(e) {
      let t = fo(e);
      Math.abs(t - this.pixelRatio) < 0.001 ||
        ((this.pixelRatio = t), (this.resizePending = !0));
    }
    opaqueSort = (e, t) => {
      if (e.groupOrder !== t.groupOrder) return e.groupOrder - t.groupOrder;
      if (e.renderOrder !== t.renderOrder) return e.renderOrder - t.renderOrder;
      let n = this.progId(e.material),
        r = this.progId(t.material);
      if (n !== r) return n - r;
      let i = e.material.id,
        a = t.material.id;
      if (i !== a) return i - a;
      let o = e.materialVariant ?? 0,
        s = t.materialVariant ?? 0;
      return o === s ? (e.z === t.z ? e.id - t.id : e.z - t.z) : o - s;
    };
    progId(e) {
      if (e.__pf === this.frameNo) return e.__pid;
      let t = this.gl.properties.get(e).currentProgram;
      return ((e.__pf = this.frameNo), (e.__pid = t ? t.id : 1e6 + e.id));
    }
    initTimer() {
      if (new URLSearchParams(location.search).get(`gputimer`) !== `0`)
        try {
          let e = this.gl.getContext();
          if (!(e instanceof WebGL2RenderingContext)) return;
          let t = e.getExtension(`EXT_disjoint_timer_query_webgl2`);
          if (!t) return;
          this.timerExt = t;
          for (let t = 0; t < 4; t++) {
            let t = e.createQuery();
            t && this.queries.push(t);
          }
        } catch {
          this.timerExt = null;
        }
    }
    beginTimer() {
      if (!this.timerExt || this.queryOpen || !this.queries.length) return;
      let e = this.gl.getContext(),
        t = this.queries.pop();
      (e.beginQuery(this.timerExt.TIME_ELAPSED_EXT, t),
        this.pending.push(t),
        (this.queryOpen = !0));
    }
    endTimer() {
      this.queryOpen &&
        this.timerExt &&
        (this.gl.getContext().endQuery(this.timerExt.TIME_ELAPSED_EXT),
        (this.queryOpen = !1));
    }
    pollTimer() {
      if (!this.timerExt || !this.pending.length) return;
      let e = this.gl.getContext(),
        t = this.pending[0];
      if (!e.getQueryParameter(t, e.QUERY_RESULT_AVAILABLE)) return;
      let n = e.getParameter(this.timerExt.GPU_DISJOINT_EXT),
        r = e.getQueryParameter(t, e.QUERY_RESULT);
      if ((this.pending.shift(), this.queries.push(t), !n && r > 0)) {
        let e = r / 1e6;
        this.gpuMs = this.gpuMs < 0 ? e : this.gpuMs + (e - this.gpuMs) * 0.25;
      }
    }
    async compileAll(e = [], t = [], n) {
      let r = this.gl;
      if (this.contextLost) return;
      this.beginPrewarm(t);
      let i = null;
      this.post && (i = new xe(4, 4, { type: f, depthBuffer: !0 }));
      let a = [],
        o = (e, t, n) => {
          let o = r.getRenderTarget();
          i && r.setRenderTarget(i);
          try {
            a.push(r.compileAsync(e, t, n));
          } catch (e) {
            console.warn(`[renderer] compile warm-up failed`, e);
          } finally {
            r.setRenderTarget(o);
          }
        },
        s = performance.now(),
        c = this.scene.children.slice();
      for (let e of c)
        e.parent === this.scene &&
          (o(e, this.camera, this.scene),
          n &&
            performance.now() - s > 12 &&
            (await n(), (s = performance.now())));
      for (let t of e) o(t.scene, t.camera, null);
      (await Promise.race([
        Promise.all(a),
        new Promise((e) => setTimeout(e, 6e3)),
      ]),
        i?.dispose());
    }
    async compileRoots(e, t, n) {
      if (this.contextLost || !e.length) return;
      let r = this.gl,
        i = null;
      this.post && (i = new xe(4, 4, { type: f, depthBuffer: !0 }));
      let a = [],
        s = (e, t) => {
          let n = r.getRenderTarget();
          i && r.setRenderTarget(i);
          try {
            a.push(r.compileAsync(e, this.camera, t));
          } catch (e) {
            console.warn(`[renderer] compile failed`, e);
          } finally {
            r.setRenderTarget(n);
          }
        };
      if (t) {
        let r = [],
          i = new Set();
        for (let t of e)
          t.traverse((e) => {
            let t = e;
            if (
              !t.material ||
              !(t.isMesh || e.isPoints || e.isLine || e.isSprite)
            )
              return;
            let n =
                (e.isInstancedMesh ? `i` : ``) +
                (e.isSkinnedMesh ? `s` : ``) +
                (e.isBatchedMesh ? `b` : ``) +
                (t.morphTargetInfluences ? `m` : ``) +
                (e.isPoints ? `p` : e.isLine ? `l` : e.isSprite ? `S` : ``) +
                co(t),
              a = Array.isArray(t.material) ? t.material : [t.material],
              o = !1;
            for (let e of a) {
              let t = e.uuid + n;
              i.has(t) || (i.add(t), (o = !0));
            }
            o && r.push(e);
          });
        let a = new o();
        ((a.fog = this.scene.fog), (a.environment = this.scene.environment));
        let c = [];
        (this.scene.traverseVisible((e) => {
          e.isLight && c.push(e);
        }),
          (a.children = c));
        let l = new d(),
          u = l,
          f = 0;
        for (; f < r.length;) {
          let e = performance.now();
          do ((u.children = [r[f++]]), s(l, a), (u.children = []));
          while (f < r.length && !(n ? n() : performance.now() - e > 4));
          f < r.length && (await t());
        }
        a.children = [];
      } else for (let t of e) s(t, this.scene);
      (await Promise.race([
        Promise.all(a),
        new Promise((e) => setTimeout(e, 4e3)),
      ]),
        i?.dispose());
    }
    compileAs(e, t) {
      if (this.contextLost) return !1;
      let n = this.gl,
        r = e,
        i = r.material,
        a = this.post
          ? (this.compileRT ??= new xe(4, 4, { type: f, depthBuffer: !0 }))
          : null,
        s = new o();
      ((s.fog = this.scene.fog), (s.environment = this.scene.environment));
      let c = [];
      (this.scene.traverseVisible((e) => {
        e.isLight && c.push(e);
      }),
        (s.children = c));
      let l = new d(),
        u = Object.create(e);
      ((u.children = []), (u.material = t), (l.children = [u]));
      let p = n.getRenderTarget();
      try {
        return (a && n.setRenderTarget(a), n.compile(l, this.camera, s), !0);
      } catch (e) {
        return (console.warn(`[renderer] compileAs failed`, e), !1);
      } finally {
        (n.setRenderTarget(p), (s.children = []), (r.material = i));
      }
    }
    compileRT = null;
    texturesOf(e) {
      let t = new Set(),
        n = new Set(),
        r = (e) => {
          let n = e;
          n && n.isTexture && !n.isRenderTargetTexture && t.add(n);
        };
      for (let t of e)
        t.traverse((e) => {
          let t = e;
          if (!t.material) return;
          let i = Array.isArray(t.material) ? t.material : [t.material];
          for (let e of i)
            if (!n.has(e)) {
              n.add(e);
              for (let t in e) r(e[t]);
              for (let t of [e.uniforms, this.gl.properties.get(e).uniforms])
                if (t) for (let e in t) r(t[e]?.value);
            }
        });
      return [...t];
    }
    isUploaded(e) {
      return this.gl.properties.get(e).__version === e.version;
    }
    preupload(e) {
      if (this.contextLost || this.isUploaded(e)) return !1;
      let t = e.image;
      if (!t || (!t.width && !e.isCubeTexture && !e.mipmaps?.length)) return !1;
      try {
        return (
          this.gl.initTexture(e),
          this.noteUpload(`texture '${e.name}'`),
          !0
        );
      } catch (e) {
        return (console.warn(`[renderer] texture pre-upload failed`, e), !1);
      }
    }
    uploadBands(e, t) {
      let n = this;
      return (function* () {
        if (n.contextLost || n.isUploaded(e)) return `skip`;
        let r = yield* Ta(n.gl, e, t);
        return (r !== `skip` && n.noteUpload(`texture '${e.name}'`), r);
      })();
    }
    uploadRows(e, t, n, r) {
      if (this.contextLost) return !1;
      let i = Ea(this.gl, e, t, n, r);
      return (i && this.noteUpload(`rows of '${e.name}'`), i);
    }
    get bandStats() {
      return wa;
    }
    uploadScene = null;
    uploadRT = null;
    noDraw = new re({
      name: `core-upload-nodraw`,
      glslVersion: Ce,
      vertexShader: `in vec3 position;
void main() { gl_Position = vec4(position * 0.0, 1.0) + vec4(2.0, 2.0, 2.0, 0.0); }`,
      fragmentShader: `precision lowp float;
out vec4 fragColor;
void main() { fragColor = vec4(0.0); }`,
      depthTest: !1,
      depthWrite: !1,
      colorWrite: !1,
    });
    uploadDraw(e) {
      if (this.contextLost || !e.length) return 0;
      let t = this.gl,
        n = (this.uploadScene ??= new o());
      n.matrixWorldAutoUpdate = !1;
      let r = (this.uploadRT ??= new xe(1, 1, { depthBuffer: !1 })),
        i = [],
        a = new Map(),
        s = 0,
        c = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      for (let t of e) {
        let e = t.geometry;
        if (!e) continue;
        (i.push({
          m: t,
          mat: t.material,
          v: t.visible,
          fc: t.frustumCulled,
          obr: c(t, `onBeforeRender`) ? t.onBeforeRender : void 0,
          oar: c(t, `onAfterRender`) ? t.onAfterRender : void 0,
        }),
          (t.material = this.noDraw),
          (t.visible = !0),
          (t.frustumCulled = !1),
          (t.onBeforeRender = $a),
          (t.onAfterRender = $a));
        let n = t;
        if (
          (n.isBatchedMesh &&
            ((i[i.length - 1].mdc = n._multiDrawCount),
            (n._multiDrawCount = 0)),
          !a.has(e))
        ) {
          (a.set(e, e.drawRange.count), (e.drawRange.count = 0));
          for (let t in e.attributes)
            s += e.attributes[t].array?.byteLength ?? 0;
          e.index && (s += e.index.array.byteLength);
        }
      }
      n.children = i.map((e) => e.m);
      let l = t.shadowMap,
        u = l.autoUpdate,
        d = l.needsUpdate;
      ((l.autoUpdate = !1), (l.needsUpdate = !1));
      let f = t.getRenderTarget();
      this.warmDepth++;
      try {
        (t.setRenderTarget(r),
          t.render(n, this.camera),
          this.noteUpload(`geometry`));
      } catch (e) {
        console.warn(`[renderer] geometry pre-upload failed`, e);
      } finally {
        (this.warmDepth--,
          t.setRenderTarget(f),
          (l.autoUpdate = u),
          (l.needsUpdate = d),
          (n.children = []));
        for (let [e, t] of a) e.drawRange.count = t;
        for (let e of i)
          ((e.m.material = e.mat),
            (e.m.visible = e.v),
            (e.m.frustumCulled = e.fc),
            e.obr ? (e.m.onBeforeRender = e.obr) : delete e.m.onBeforeRender,
            e.oar ? (e.m.onAfterRender = e.oar) : delete e.m.onAfterRender,
            e.mdc !== void 0 && (e.m._multiDrawCount = e.mdc));
      }
      return s;
    }
    hold(e) {
      for (let t of e) this.held.add(t);
    }
    unhold(e) {
      for (let t of e) this.held.delete(t);
    }
    freezeStatic(e) {
      (e.updateMatrixWorld(!0),
        (e.matrixWorldAutoUpdate = !1),
        e.traverse((e) => {
          e.matrixAutoUpdate = !1;
        }));
    }
    thaw(e) {
      ((e.matrixWorldAutoUpdate = !0),
        e.traverse((e) => {
          e.matrixAutoUpdate = !0;
        }));
    }
    programsAtReady = 0;
    pinned = new WeakSet();
    pinnedPrograms = 0;
    pinPrograms() {
      let e = 0;
      for (let t of this.gl.info.programs ?? [])
        this.pinned.has(t) || (this.pinned.add(t), t.usedTimes++, e++);
      return ((this.pinnedPrograms += e), e);
    }
    warmLog = ``;
    prewarmRoot = null;
    beginPrewarm(e) {
      if (this.prewarmRoot || !e.length) return;
      let t = (this.prewarmRoot = new d());
      t.name = `__prewarm`;
      for (let n of e) n && !n.parent && t.add(n);
      (t.position.set(0, -500, 0), this.scene.add(t));
    }
    endPrewarm() {
      let e = this.prewarmRoot;
      if (e) {
        ((this.prewarmRoot = null), this.scene.remove(e));
        for (let t of e.children.slice()) e.remove(t);
      }
    }
    warmFrames(e, t = !0) {
      if (!this.contextLost) {
        this.warmDepth++;
        try {
          this.warmFramesInner(e, t);
        } finally {
          this.warmDepth--;
        }
      }
    }
    warmFramesInner(e, t) {
      let n = this.camera,
        r = n.position.clone(),
        i = n.quaternion.clone(),
        a = new Te(),
        o = performance.now(),
        s = [];
      for (let t = 0; t < 4; t++) {
        let r = (t * Math.PI) / 2;
        (n.position.set(e.x, e.y + 1.7, e.z),
          a.set(e.x + Math.sin(r) * 10, e.y + 1.2, e.z - Math.cos(r) * 10),
          n.lookAt(a),
          n.updateMatrixWorld());
        let i = performance.now();
        (this.forceShadowUpdate(),
          this.render(0),
          s.push(Math.round(performance.now() - i)));
      }
      if (t) {
        let e = performance.now();
        try {
          this.warmRepresentatives();
        } catch (e) {
          console.warn(`[renderer] representative warm frame failed`, e);
        }
        s.push(Math.round(performance.now() - e));
      }
      ((this.warmLog = `warm frames ${Math.round(performance.now() - o)}ms [${s.join(`, `)}]`),
        n.position.copy(r),
        n.quaternion.copy(i),
        n.updateMatrixWorld(),
        this.forceShadowUpdate());
    }
    forceShadowUpdate() {
      let e = this.gl.shadowMap;
      e.enabled &&
        ((e.needsUpdate = !0),
        this.scene.traverse((e) => {
          let t = e.shadow;
          e.isLight && e.castShadow && t && (t.needsUpdate = !0);
        }));
    }
    shadowProxy = null;
    async warmShadowCasters(e, t) {
      let n = this.gl;
      if (this.contextLost || !n.shadowMap.enabled || !e.length) return 0;
      let r = new Map();
      for (let t of e)
        t.traverse((e) => {
          let t = oo(e);
          if (t === null || this.depthWarm.has(t)) return;
          let n = e.geometry?.attributes?.position?.count ?? 0,
            i = r.get(t);
          (!i || n < i.n) && r.set(t, { o: e, n });
        });
      let i = 0;
      for (let [e, n] of r) {
        if ((await t(), this.contextLost)) break;
        this.depthWarm.has(e) ||
          (this.renderShadowOnly(n.o) && (this.depthWarm.add(e), i++));
      }
      return (i && this.forceShadowUpdate(), i);
    }
    warmCastersNow(e) {
      if (this.contextLost || !this.gl.shadowMap.enabled || !e.length) return 0;
      let t = new Map();
      for (let n of e)
        n.traverse((e) => {
          let n = oo(e);
          n !== null && !this.depthWarm.has(n) && !t.has(n) && t.set(n, e);
        });
      let n = 0;
      for (let [e, r] of t)
        this.renderShadowOnly(r) && (this.depthWarm.add(e), n++);
      return (n && this.forceShadowUpdate(), n);
    }
    flippers = null;
    flipperFor(e) {
      let t = (this.flippers ??= (() => {
        let e = new le();
        (e.setAttribute(
          `position`,
          new C([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0], 3),
        ),
          e.setAttribute(`normal`, new C([0, 0, 1, 0, 0, 1, 0, 0, 1], 3)));
        let t = new S(e, new c({ name: `core-shadow-flipper` })),
          n = new ye(e, new c({ name: `core-shadow-flipper-i` }), 1);
        for (let e of [t, n])
          ((e.name = `core-shadow-flipper`),
            (e.castShadow = !0),
            (e.matrixAutoUpdate = !1),
            e.updateMatrixWorld(!0),
            (e.frustumCulled = !0),
            (e.intersectsFrustum = () => this.inShadowPass));
        return { plain: t, inst: n };
      })());
      return e.isInstancedMesh || e.isSkinnedMesh || e.isBatchedMesh
        ? t.plain
        : t.inst;
    }
    renderShadowOnly(e) {
      let t = this.gl,
        n = [],
        r = 0;
      if (
        (this.scene.traverseVisible((e) => {
          e.isLight && (n.push(e), e.castShadow && e.shadow && r++);
        }),
        !r)
      )
        return !1;
      let i = (this.shadowProxy ??= new o());
      ((i.matrixWorldAutoUpdate = !1),
        (i.fog = this.scene.fog),
        (i.environment = this.scene.environment),
        n.push(this.flipperFor(e), e),
        (i.children = n));
      let a = e,
        s = Object.prototype.hasOwnProperty.call(a, `intersectsFrustum`)
          ? a.intersectsFrustum
          : void 0,
        c = { v: e.visible, fc: e.frustumCulled, cs: e.castShadow },
        l = e,
        u =
          l.isInstancedMesh && l.count === 0 && l.instanceMatrix.count > 0
            ? 0
            : -1,
        d = (this.uploadRT ??= new xe(1, 1, { depthBuffer: !1 })),
        f = t.getRenderTarget();
      ((e.visible = !0),
        (e.frustumCulled = !0),
        (e.castShadow = !0),
        (a.intersectsFrustum = () => this.inShadowPass),
        u === 0 && (l.count = 1),
        this.forceShadowUpdate(),
        (this.warmingShadow = !0));
      try {
        return (t.setRenderTarget(d), t.render(i, this.camera), !0);
      } catch (e) {
        return (console.warn(`[renderer] shadow-depth warm failed`, e), !1);
      } finally {
        ((this.warmingShadow = !1),
          t.setRenderTarget(f),
          (i.children = []),
          (e.visible = c.v),
          (e.frustumCulled = c.fc),
          (e.castShadow = c.cs),
          s ? (a.intersectsFrustum = s) : delete a.intersectsFrustum,
          u === 0 && (l.count = 0));
      }
    }
    warmRepresentatives() {
      let e = this.scene,
        t = [],
        n = new Set(),
        r = 0;
      e.traverseVisible((e) => {
        e.isLight && (n.add(e), e.castShadow && e.shadow && r++);
      });
      let i = this.gl.shadowMap.enabled && r > 0;
      if (!i && this.quality.mobile) return;
      let a = [],
        o = new Map(),
        s = [],
        c = this.prewarmRoot;
      e.traverse((n) => {
        if (n === e) return;
        if (n.isLight) {
          a.push(n);
          return;
        }
        let r = { o: n, v: n.visible, fc: n.frustumCulled };
        t.push(r);
        let l = n;
        if (
          !(l.isMesh || n.isPoints || n.isLine || n.isSprite) ||
          !l.material ||
          n.userData?.noWarm
        )
          return;
        let u = i ? oo(n) : null;
        if ((c && lo(n, c) && s.push(r), u === null)) return;
        let d = l.geometry?.attributes?.position?.count ?? 0,
          f = o.get(u);
        (!f || d < f.n) && o.set(u, { s: r, n: d });
      });
      let l = [...s];
      for (let e of o.values()) l.includes(e.s) || l.push(e.s);
      if (!l.length) return;
      this.forceShadowUpdate();
      for (let e of t) e.o.visible = !1;
      for (let t of l) {
        let n = t.o;
        n.frustumCulled = !1;
        let r = n;
        r.isInstancedMesh &&
          r.count === 0 &&
          r.instanceMatrix.count > 0 &&
          ((t.count = 0), (r.count = 1));
        for (let t = n; t && t !== e; t = t.parent) t.visible = !0;
      }
      for (let t of n)
        for (let n = t.parent; n && n !== e; n = n.parent) n.visible = !0;
      let u = a.map((e) => e.visible);
      for (let e of a) n.has(e) || (e.visible = !1);
      try {
        this.render(0);
      } finally {
        for (let e of t)
          ((e.o.visible = e.v),
            (e.o.frustumCulled = e.fc),
            e.count !== void 0 && (e.o.count = e.count));
        a.forEach((e, t) => (e.visible = u[t]));
      }
      if (i) {
        for (let [e, t] of o)
          this.renderShadowOnly(t.s.o) && this.depthWarm.add(e);
        this.forceShadowUpdate();
      }
    }
    capture(e = `image/png`, t = 0.92) {
      return new Promise((n) => {
        try {
          this.render(0);
          let r = this.gl.getContext(),
            i = r.drawingBufferWidth,
            a = r.drawingBufferHeight,
            o = new Uint8Array(i * a * 4);
          (r.bindFramebuffer(r.FRAMEBUFFER, null),
            r.readPixels(0, 0, i, a, r.RGBA, r.UNSIGNED_BYTE, o));
          let s = document.createElement(`canvas`);
          ((s.width = i), (s.height = a));
          let c = s.getContext(`2d`);
          if (!c) return n(null);
          let l = c.createImageData(i, a),
            u = i * 4;
          for (let e = 0; e < a; e++)
            l.data.set(o.subarray((a - 1 - e) * u, (a - e) * u), e * u);
          for (let e = 3; e < l.data.length; e += 4) l.data[e] = 255;
          (c.putImageData(l, 0, 0), s.toBlob((e) => n(e), e, t));
        } catch (e) {
          (console.warn(`[renderer] capture failed`, e), n(null));
        }
      });
    }
    render(e) {
      if (this.contextLost) return;
      this.resizePending && this.resize();
      for (let e = 0; e < this.preRender.length; e++) this.preRender[e]();
      (this.frameNo++,
        this.gl.info.reset(),
        this.hideEmpty(e),
        this.beginTimer());
      let t = this.scene.fog;
      ((G.depth = t && t.isFog && this.dissolveCull ? t.far * Qa : 1 / 0),
        (G.on = G.depth < 1 / 0),
        (G.culled = 0));
      try {
        this.post
          ? this.post.render(e)
          : this.gl.render(this.scene, this.camera);
      } finally {
        G.on = !1;
      }
      ((this.dissolveCulled = G.culled), this.endTimer(), this.restoreEmpty());
    }
    hideEmpty(e) {
      if (((this.cullScanT -= e), this.cullScanT <= 0)) {
        ((this.cullScanT = 1), (this.cullList.length = 0));
        let e = this.scene.children;
        for (let t = 0; t < e.length; t++)
          ((this.scanStatic = !!this.isStaticRoot?.(e[t])),
            e[t].traverse(this.collectCandidate));
      }
      let t = this.hidden;
      for (let e of this.held) e.visible && e.traverse(this.hideDrawable);
      let n = this.cullList,
        r = 0;
      for (let e = 0; e < n.length; e++) {
        let i = n[e];
        i.visible && po(i) && ((i.visible = !1), t.push(i), r++);
      }
      this.skippedEmpty = r;
    }
    hideDrawable = (e) => {
      e.visible &&
        (e.isMesh || e.isPoints || e.isLine || e.isSprite) &&
        ((e.visible = !1), this.hidden.push(e));
    };
    collectCandidate = (e) => {
      let t = e;
      t.geometry &&
        (t.isMesh || e.isPoints || e.isLine) &&
        (this.scanStatic && t.isMesh && this.installTight(t),
        !e.children.length && uo(t) && this.cullList.push(e));
    };
    installTight(e) {
      if (e.__tight !== void 0) return;
      if (
        e.isInstancedMesh ||
        e.isSkinnedMesh ||
        e.isBatchedMesh ||
        e.morphTargetInfluences ||
        e.userData?.noTightCull ||
        e.intersectsFrustum !== S.prototype.intersectsFrustum
      ) {
        e.__tight = 0;
        return;
      }
      if (!e.frustumCulled) return;
      let t = e.geometry;
      if (!t.boundingBox || !t.boundingSphere) {
        let e = t.attributes.position;
        if (!e || !e.array || !e.array.length || !e.count) return;
        (t.boundingBox || t.computeBoundingBox(),
          t.boundingSphere || t.computeBoundingSphere());
      }
      let n = t.boundingBox,
        r = t.boundingSphere;
      if (n.isEmpty()) return;
      let i = r.radius >= Za;
      ((e.__tight = +!!i),
        i && ((e.intersectsFrustum = to), this.tightCount++));
    }
    restoreEmpty() {
      let e = this.hidden;
      for (let t = 0; t < e.length; t++) e[t].visible = !0;
      e.length = 0;
    }
  };
