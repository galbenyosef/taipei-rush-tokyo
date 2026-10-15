// tokyo/assets/postfx-Beafm2Vo 14 — float32array
// Lines 8621-8954 of readable/tokyo/assets/postfx-Beafm2Vo.pretty.js (statement-aligned).
var ei = class extends k {
    constructor(e, ...t) {
      (super(`EffectPass`),
        (this.fullscreenMaterial = new Vr(null, null, null, e)),
        (this.listener = (e) => this.handleEvent(e)),
        (this.effects = []),
        this.setEffects(t),
        (this.skipRendering = !1),
        (this.minTime = 1),
        (this.maxTime = 1 / 0),
        (this.timeScale = 1));
    }
    set mainScene(e) {
      for (let t of this.effects) t.mainScene = e;
    }
    set mainCamera(e) {
      this.fullscreenMaterial.copyCameraSettings(e);
      for (let t of this.effects) t.mainCamera = e;
    }
    get encodeOutput() {
      return this.fullscreenMaterial.encodeOutput;
    }
    set encodeOutput(e) {
      this.fullscreenMaterial.encodeOutput = e;
    }
    get dithering() {
      return this.fullscreenMaterial.dithering;
    }
    set dithering(e) {
      let t = this.fullscreenMaterial;
      ((t.dithering = e), (t.needsUpdate = !0));
    }
    setEffects(e) {
      for (let e of this.effects)
        e.removeEventListener(`change`, this.listener);
      this.effects = e.sort((e, t) => t.attributes - e.attributes);
      for (let e of this.effects) e.addEventListener(`change`, this.listener);
    }
    updateMaterial() {
      let e = new Ae(),
        t = 0;
      for (let n of this.effects)
        if (n.blendMode.blendFunction === F.DST)
          e.attributes |= n.getAttributes() & j.DEPTH;
        else if ((e.attributes & n.getAttributes() & j.CONVOLUTION) !== 0)
          throw Error(`Convolution effects cannot be merged (${n.name})`);
        else $r(`e` + t++, n, e);
      let n = e.shaderParts.get(M.FRAGMENT_HEAD),
        r = e.shaderParts.get(M.FRAGMENT_MAIN_IMAGE),
        i = e.shaderParts.get(M.FRAGMENT_MAIN_UV),
        a = /\bblend\b/g;
      for (let t of e.blendModes.values())
        n +=
          t.getShaderCode().replace(a, `blend${t.blendFunction}`) +
          `
`;
      ((e.attributes & j.DEPTH) === 0
        ? (this.needsDepthTexture = !1)
        : (e.readDepth &&
            (r =
              `float depth = readDepth(UV);

	` + r),
          (this.needsDepthTexture = this.getDepthTexture() === null)),
        e.colorSpace === `srgb` &&
          (r += `color0 = sRGBToLinear(color0);
	`),
        e.uvTransformation
          ? ((i =
              `vec2 transformedUv = vUv;
` + i),
            e.defines.set(`UV`, `transformedUv`))
          : e.defines.set(`UV`, `vUv`),
        e.shaderParts.set(M.FRAGMENT_HEAD, n),
        e.shaderParts.set(M.FRAGMENT_MAIN_IMAGE, r),
        e.shaderParts.set(M.FRAGMENT_MAIN_UV, i));
      for (let [t, n] of e.shaderParts)
        n !== null &&
          e.shaderParts.set(
            t,
            n.trim().replace(
              /^#/,
              `
#`,
            ),
          );
      ((this.skipRendering = t === 0),
        (this.needsSwap = !this.skipRendering),
        this.fullscreenMaterial.setShaderData(e));
    }
    recompile() {
      this.updateMaterial();
    }
    getDepthTexture() {
      return this.fullscreenMaterial.depthBuffer;
    }
    setDepthTexture(e, t = D) {
      ((this.fullscreenMaterial.depthBuffer = e),
        (this.fullscreenMaterial.depthPacking = t));
      for (let n of this.effects) n.setDepthTexture(e, t);
    }
    render(e, t, n, r, i) {
      for (let n of this.effects) n.update(e, t, r);
      if (!this.skipRendering || this.renderToScreen) {
        let i = this.fullscreenMaterial;
        ((i.inputBuffer = t.texture),
          (i.time += r * this.timeScale),
          e.setRenderTarget(this.renderToScreen ? null : n),
          e.render(this.scene, this.camera));
      }
    }
    setSize(e, t) {
      this.fullscreenMaterial.setSize(e, t);
      for (let n of this.effects) n.setSize(e, t);
    }
    initialize(e, t, n) {
      this.renderer = e;
      for (let r of this.effects) r.initialize(e, t, n);
      (this.updateMaterial(),
        n !== void 0 &&
          n !== 1009 &&
          (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`));
    }
    dispose() {
      super.dispose();
      for (let e of this.effects)
        (e.removeEventListener(`change`, this.listener), e.dispose());
    }
    handleEvent(e) {
      e.type === `change` && this.recompile();
    }
  },
  ti = class extends k {
    constructor({
      kernelSize: e = 35,
      iterations: t = 1,
      resolutionScale: n = 1,
      resolutionX: r = P.AUTO_SIZE,
      resolutionY: i = P.AUTO_SIZE,
    } = {}) {
      (super(`GaussianBlurPass`),
        (this.renderTargetA = new C(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `Blur.Target.A`),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = `Blur.Target.B`),
        (this.blurMaterial = new Wr({ kernelSize: e })),
        (this.copyMaterial = new be()),
        (this.copyMaterial.inputBuffer = this.renderTargetB.texture));
      let a = (this.resolution = new P(this, r, i, n));
      (a.addEventListener(`change`, (e) =>
        this.setSize(a.baseWidth, a.baseHeight),
      ),
        (this.iterations = t));
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.renderTargetA,
        c = this.renderTargetB,
        l = this.blurMaterial;
      this.fullscreenMaterial = l;
      let u = t;
      for (let t = 0, n = Math.max(this.iterations, 1); t < n; ++t)
        (l.direction.set(1, 0),
          (l.inputBuffer = u.texture),
          e.setRenderTarget(s),
          e.render(a, o),
          l.direction.set(0, 1),
          (l.inputBuffer = s.texture),
          e.setRenderTarget(c),
          e.render(a, o),
          t === 0 && n > 1 && (u = c));
      ((this.fullscreenMaterial = this.copyMaterial),
        e.setRenderTarget(this.renderToScreen ? null : n),
        e.render(a, o));
    }
    setSize(e, t) {
      let n = this.resolution;
      n.setBaseSize(e, t);
      let r = n.width,
        i = n.height;
      (this.renderTargetA.setSize(r, i),
        this.renderTargetB.setSize(r, i),
        this.blurMaterial.setSize(e, t));
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTargetA.texture.type = n),
        (this.renderTargetB.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            ((this.renderTargetA.texture.colorSpace = f),
            (this.renderTargetB.texture.colorSpace = f))
          : ((this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`)));
    }
  },
  ni = class extends k {
    constructor(e) {
      (super(`LambdaPass`, null, null), (this.needsSwap = !1), (this.f = e));
    }
    render(e, t, n, r, i) {
      this.f();
    }
  },
  ri = class extends k {
    constructor(
      e,
      t,
      {
        renderTarget: n,
        resolutionScale: r = 1,
        width: i = P.AUTO_SIZE,
        height: a = P.AUTO_SIZE,
        resolutionX: o = i,
        resolutionY: s = a,
      } = {},
    ) {
      (super(`NormalPass`),
        (this.needsSwap = !1),
        (this.renderPass = new Wt(e, t, new ie())));
      let l = this.renderPass;
      ((l.ignoreBackground = !0), (l.skipShadowMapUpdate = !0));
      let u = l.getClearPass();
      ((u.overrideClearColor = new O(7829503)),
        (u.overrideClearAlpha = 1),
        (this.renderTarget = n),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new C(1, 1, { minFilter: c, magFilter: c })),
          (this.renderTarget.texture.name = `NormalPass.Target`)));
      let d = (this.resolution = new P(this, o, s, r));
      d.addEventListener(`change`, (e) =>
        this.setSize(d.baseWidth, d.baseHeight),
      );
    }
    set mainScene(e) {
      this.renderPass.mainScene = e;
    }
    set mainCamera(e) {
      this.renderPass.mainCamera = e;
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    getResolution() {
      return this.resolution;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    render(e, t, n, r, i) {
      let a = this.renderToScreen ? null : this.renderTarget;
      this.renderPass.render(e, a, a);
    }
    setSize(e, t) {
      let n = this.resolution;
      (n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height));
    }
  },
  ii = [new Float32Array(3), new Float32Array(3)],
  Y = [
    new Float32Array(3),
    new Float32Array(3),
    new Float32Array(3),
    new Float32Array(3),
  ],
  ai = [
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([1, 0, 0]),
      new Float32Array([1, 1, 0]),
      new Float32Array([1, 1, 1]),
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([1, 0, 0]),
      new Float32Array([1, 0, 1]),
      new Float32Array([1, 1, 1]),
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 0, 1]),
      new Float32Array([1, 0, 1]),
      new Float32Array([1, 1, 1]),
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 1, 0]),
      new Float32Array([1, 1, 0]),
      new Float32Array([1, 1, 1]),
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 1, 0]),
      new Float32Array([0, 1, 1]),
      new Float32Array([1, 1, 1]),
    ],
    [
      new Float32Array([0, 0, 0]),
      new Float32Array([0, 0, 1]),
      new Float32Array([0, 1, 1]),
      new Float32Array([1, 1, 1]),
    ],
  ];
function oi(e, t, n, r) {
  let i = n[0] - t[0],
    a = n[1] - t[1],
    o = n[2] - t[2],
    s = e[0] - t[0],
    c = e[1] - t[1],
    l = e[2] - t[2],
    u = a * l - o * c,
    d = o * s - i * l,
    f = i * c - a * s,
    p = Math.sqrt(u * u + d * d + f * f),
    m = p * 0.5,
    h = u / p,
    g = d / p,
    _ = f / p,
    v = -(e[0] * h + e[1] * g + e[2] * _),
    y = r[0] * h + r[1] * g + r[2] * _;
  return (Math.abs(y + v) * m) / 3;
}
function si(e, t, n, r, i, a) {
  let o = (n + r * t + i * t * t) * 4;
  ((a[0] = e[o + 0]), (a[1] = e[o + 1]), (a[2] = e[o + 2]));
}
