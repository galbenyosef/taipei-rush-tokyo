// tokyo__assets__postfx-Beafm2Vo 04 — inputbuffer
// Lines 578-937 of readable/tokyo__assets__postfx-Beafm2Vo.pretty.js (statement-aligned).
var Ee = 1 / 1e3,
  De = 1e3,
  Oe = class {
    constructor() {
      ((this.startTime = performance.now()),
        (this.previousTime = 0),
        (this.currentTime = 0),
        (this._delta = 0),
        (this._elapsed = 0),
        (this._fixedDelta = 1e3 / 60),
        (this.timescale = 1),
        (this.useFixedDelta = !1),
        (this._autoReset = !1));
    }
    get autoReset() {
      return this._autoReset;
    }
    set autoReset(e) {
      typeof document < `u` &&
        document.hidden !== void 0 &&
        (e
          ? document.addEventListener(`visibilitychange`, this)
          : document.removeEventListener(`visibilitychange`, this),
        (this._autoReset = e));
    }
    get delta() {
      return this._delta * Ee;
    }
    get fixedDelta() {
      return this._fixedDelta * Ee;
    }
    set fixedDelta(e) {
      this._fixedDelta = e * De;
    }
    get elapsed() {
      return this._elapsed * Ee;
    }
    update(e) {
      (this.useFixedDelta
        ? (this._delta = this.fixedDelta)
        : ((this.previousTime = this.currentTime),
          (this.currentTime =
            (e === void 0 ? performance.now() : e) - this.startTime),
          (this._delta = this.currentTime - this.previousTime)),
        (this._delta *= this.timescale),
        (this._elapsed += this._delta));
    }
    reset() {
      ((this._delta = 0),
        (this._elapsed = 0),
        (this.currentTime = performance.now() - this.startTime));
    }
    getDelta() {
      return this.delta;
    }
    getElapsed() {
      return this.elapsed;
    }
    handleEvent(e) {
      document.hidden ||
        (this.currentTime = performance.now() - this.startTime);
    }
    dispose() {
      this.autoReset = !1;
    }
  },
  ke = class {
    constructor(
      e = null,
      {
        depthBuffer: t = !0,
        stencilBuffer: n = !1,
        multisampling: r = 0,
        frameBufferType: i = s,
      } = {},
    ) {
      ((this.renderer = null),
        (this.inputBuffer = this.createBuffer(t, n, i, r)),
        (this.outputBuffer = this.inputBuffer.clone()),
        (this.copyPass = new xe()),
        (this.depthRenderTarget = null),
        (this.passes = []),
        (this.timer = new Oe()),
        (this.autoRenderToScreen = !0),
        this.setRenderer(e));
    }
    get stableDepthTexture() {
      return this.depthRenderTarget === null
        ? null
        : this.depthRenderTarget.depthTexture;
    }
    get multisampling() {
      return this.inputBuffer.samples;
    }
    set multisampling(e) {
      let t = this.renderer === null ? e : Te(this.renderer, e);
      this.multisampling !== t &&
        ((this.inputBuffer.samples = t),
        (this.outputBuffer.samples = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose());
    }
    getTimer() {
      return this.timer;
    }
    getRenderer() {
      return this.renderer;
    }
    setRenderer(e) {
      if (((this.renderer = e), e !== null)) {
        let t = e.getSize(new x()),
          n = e.getContext().getContextAttributes().alpha,
          r = this.inputBuffer.texture.type;
        r === 1009 &&
          e.outputColorSpace === `srgb` &&
          ((this.inputBuffer.texture.colorSpace = f),
          (this.outputBuffer.texture.colorSpace = f),
          this.inputBuffer.dispose(),
          this.outputBuffer.dispose());
        let i = this.multisampling;
        ((this.multisampling = i),
          (e.autoClear = !1),
          this.setSize(t.width, t.height));
        for (let t of this.passes) t.initialize(e, n, r);
      }
    }
    replaceRenderer(e, t = !0) {
      let n = this.renderer,
        r = n.domElement.parentNode;
      return (
        this.setRenderer(e),
        t &&
          r !== null &&
          (r.removeChild(n.domElement), r.appendChild(e.domElement)),
        n
      );
    }
    createDepthTexture() {
      let e = new a();
      ((e.name = `EffectComposer.InputDepth`),
        this.inputBuffer.stencilBuffer
          ? ((e.format = l), (e.type = o))
          : (e.type = h));
      let t = new a();
      ((t.format = e.format),
        (t.type = e.type),
        (t.name = `EffectComposer.OutputDepth`));
      let n = new a();
      ((n.format = e.format),
        (n.type = e.type),
        (n.name = `EffectComposer.StableDepth`),
        (this.inputBuffer.depthTexture = e),
        (this.outputBuffer.depthTexture = t),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose());
      let { width: r, height: i } = this.inputBuffer;
      this.depthRenderTarget = new C(r, i, {
        depthBuffer: !0,
        stencilBuffer: this.inputBuffer.stencilBuffer,
        depthTexture: n,
      });
    }
    blitDepthBuffer(e) {
      let t = this.renderer,
        n = this.depthRenderTarget,
        r = t.properties,
        i = t.getContext();
      t.setRenderTarget(n);
      let a = r.get(e).__webglFramebuffer,
        o = r.get(n).__webglFramebuffer,
        s = e.stencilBuffer
          ? i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT
          : i.DEPTH_BUFFER_BIT;
      (i.bindFramebuffer(i.READ_FRAMEBUFFER, a),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, o),
        i.blitFramebuffer(
          0,
          0,
          e.width,
          e.height,
          0,
          0,
          n.width,
          n.height,
          s,
          i.NEAREST,
        ),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        t.setRenderTarget(null));
    }
    deleteDepthTexture() {
      let e = this.stableDepthTexture;
      for (let t of this.passes)
        t.getDepthTexture() === e && t.setDepthTexture(null);
      (this.depthRenderTarget !== null &&
        (this.depthRenderTarget.dispose(), (this.depthRenderTarget = null)),
        this.inputBuffer.depthTexture !== null &&
          (this.inputBuffer.depthTexture.dispose(),
          (this.inputBuffer.depthTexture = null)),
        this.outputBuffer.depthTexture !== null &&
          (this.outputBuffer.depthTexture.dispose(),
          (this.outputBuffer.depthTexture = null)));
    }
    createBuffer(e, t, n, r) {
      let i = this.renderer,
        a = i === null ? new x() : i.getDrawingBufferSize(new x()),
        o = new C(a.width, a.height, {
          minFilter: w,
          magFilter: w,
          samples: r,
          stencilBuffer: t,
          depthBuffer: e,
          type: n,
        });
      return (
        n === 1009 &&
          i !== null &&
          i.outputColorSpace === `srgb` &&
          (o.texture.colorSpace = f),
        (o.texture.name = `EffectComposer.Buffer`),
        (o.texture.generateMipmaps = !1),
        o
      );
    }
    setMainScene(e) {
      for (let t of this.passes) t.mainScene = e;
    }
    setMainCamera(e) {
      for (let t of this.passes) t.mainCamera = e;
    }
    addPass(e, t) {
      let n = this.passes,
        r = this.renderer,
        i = r.getDrawingBufferSize(new x()),
        a = r.getContext().getContextAttributes().alpha,
        o = this.inputBuffer.texture.type;
      if (
        ((e.renderer = r),
        e.setSize(i.width, i.height),
        e.initialize(r, a, o),
        this.autoRenderToScreen &&
          (n.length > 0 && (n[n.length - 1].renderToScreen = !1),
          e.renderToScreen && (this.autoRenderToScreen = !1)),
        t === void 0 ? n.push(e) : n.splice(t, 0, e),
        this.autoRenderToScreen && (n[n.length - 1].renderToScreen = !0),
        e.needsDepthTexture || this.depthRenderTarget !== null)
      ) {
        if (this.depthRenderTarget === null) {
          this.createDepthTexture();
          for (let e of n) e.setDepthTexture(this.stableDepthTexture);
        } else e.setDepthTexture(this.stableDepthTexture);
      }
    }
    removePass(e) {
      let t = this.passes,
        n = t.indexOf(e);
      if (n !== -1 && t.splice(n, 1).length > 0) {
        let r = this.stableDepthTexture;
        (r !== null &&
          (t.reduce((e, t) => e || t.needsDepthTexture, !1) ||
            (e.getDepthTexture() === r && e.setDepthTexture(null),
            this.deleteDepthTexture())),
          this.autoRenderToScreen &&
            n === t.length &&
            ((e.renderToScreen = !1),
            t.length > 0 && (t[t.length - 1].renderToScreen = !0)));
      }
    }
    removeAllPasses() {
      let e = this.passes;
      (this.deleteDepthTexture(),
        e.length > 0 &&
          (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1),
          (this.passes = [])));
    }
    render(e) {
      let t = this.renderer,
        n = this.copyPass,
        r = this.inputBuffer,
        i = this.outputBuffer,
        a,
        o = !1;
      e === void 0 && (this.timer.update(), (e = this.timer.getDelta()));
      for (let s of this.passes)
        if (s.enabled) {
          if (
            (s.render(t, r, i, e, o),
            s.needsDepthBlit &&
              this.depthRenderTarget !== null &&
              this.blitDepthBuffer(r),
            s.needsSwap)
          ) {
            if (o) {
              n.renderToScreen = s.renderToScreen;
              let a = t.getContext(),
                c = t.state.buffers.stencil;
              (c.setFunc(a.NOTEQUAL, 1, 4294967295),
                n.render(t, r, i, e, o),
                c.setFunc(a.EQUAL, 1, 4294967295));
            }
            ((a = r), (r = i), (i = a));
          }
          s instanceof we ? (o = !0) : s instanceof ve && (o = !1);
        }
    }
    setSize(e, t, n) {
      let r = this.renderer,
        i = r.getSize(new x());
      ((e === void 0 || t === void 0) && ((e = i.width), (t = i.height)),
        (i.width !== e || i.height !== t) && r.setSize(e, t, n));
      let a = r.getDrawingBufferSize(new x());
      (this.inputBuffer.setSize(a.width, a.height),
        this.outputBuffer.setSize(a.width, a.height),
        this.depthRenderTarget !== null &&
          this.depthRenderTarget.setSize(a.width, a.height));
      for (let e of this.passes) e.setSize(a.width, a.height);
    }
    reset() {
      (this.dispose(), (this.autoRenderToScreen = !0));
    }
    dispose() {
      for (let e of this.passes) e.dispose();
      (this.deleteDepthTexture(),
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose(),
        this.copyPass.dispose(),
        this.timer.dispose(),
        (this.passes = []),
        k.fullscreenGeometry.dispose());
    }
  },
  j = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 },
  M = {
    FRAGMENT_HEAD: `FRAGMENT_HEAD`,
    FRAGMENT_MAIN_UV: `FRAGMENT_MAIN_UV`,
    FRAGMENT_MAIN_IMAGE: `FRAGMENT_MAIN_IMAGE`,
    VERTEX_HEAD: `VERTEX_HEAD`,
    VERTEX_MAIN_SUPPORT: `VERTEX_MAIN_SUPPORT`,
  },
  Ae = class {
    constructor() {
      ((this.shaderParts = new Map([
        [M.FRAGMENT_HEAD, null],
        [M.FRAGMENT_MAIN_UV, null],
        [M.FRAGMENT_MAIN_IMAGE, null],
        [M.VERTEX_HEAD, null],
        [M.VERTEX_MAIN_SUPPORT, null],
      ])),
        (this.defines = new Map()),
        (this.uniforms = new Map()),
        (this.blendModes = new Map()),
        (this.extensions = new Set()),
        (this.attributes = j.NONE),
        (this.varyings = new Set()),
        (this.uvTransformation = !1),
        (this.readDepth = !1),
        (this.colorSpace = v));
    }
  };
