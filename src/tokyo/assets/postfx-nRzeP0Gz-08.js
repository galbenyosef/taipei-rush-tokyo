// tokyo/assets/postfx-nRzeP0Gz 08 — uniforms
// Lines 3360-4156 of readable/tokyo/assets/postfx-nRzeP0Gz.pretty.js (statement-aligned).
var Rt = class extends B {
    constructor({
      chromaticAberrationOffset: e = null,
      delay: t = new C(1.5, 3.5),
      duration: n = new C(0.6, 1),
      strength: r = new C(0.3, 1),
      columns: i = 0.05,
      ratio: a = 0.85,
      perturbationMap: o = null,
      dtSize: s = 64,
    } = {}) {
      if (
        (super(`GlitchEffect`, It, {
          uniforms: new Map([
            [`perturbationMap`, new x(null)],
            [`columns`, new x(i)],
            [`active`, new x(!1)],
            [`random`, new x(1)],
            [`seeds`, new x(new C())],
            [`distortion`, new x(new C())],
          ]),
        }),
        o === null)
      ) {
        let e = new Ft(s, s, ie);
        ((e.name = Lt), (this.perturbationMap = e));
      } else this.perturbationMap = o;
      ((this.time = 0),
        (this.distortion = this.uniforms.get(`distortion`).value),
        (this.delay = t),
        (this.duration = n),
        (this.breakPoint = new C(
          G(this.delay.x, this.delay.y),
          G(this.duration.x, this.duration.y),
        )),
        (this.strength = r),
        (this.mode = Nt.SPORADIC),
        (this.ratio = a),
        (this.chromaticAberrationOffset = e));
    }
    get seeds() {
      return this.uniforms.get(`seeds`).value;
    }
    get active() {
      return this.uniforms.get(`active`).value;
    }
    isActive() {
      return this.active;
    }
    get minDelay() {
      return this.delay.x;
    }
    set minDelay(e) {
      this.delay.x = e;
    }
    getMinDelay() {
      return this.delay.x;
    }
    setMinDelay(e) {
      this.delay.x = e;
    }
    get maxDelay() {
      return this.delay.y;
    }
    set maxDelay(e) {
      this.delay.y = e;
    }
    getMaxDelay() {
      return this.delay.y;
    }
    setMaxDelay(e) {
      this.delay.y = e;
    }
    get minDuration() {
      return this.duration.x;
    }
    set minDuration(e) {
      this.duration.x = e;
    }
    getMinDuration() {
      return this.duration.x;
    }
    setMinDuration(e) {
      this.duration.x = e;
    }
    get maxDuration() {
      return this.duration.y;
    }
    set maxDuration(e) {
      this.duration.y = e;
    }
    getMaxDuration() {
      return this.duration.y;
    }
    setMaxDuration(e) {
      this.duration.y = e;
    }
    get minStrength() {
      return this.strength.x;
    }
    set minStrength(e) {
      this.strength.x = e;
    }
    getMinStrength() {
      return this.strength.x;
    }
    setMinStrength(e) {
      this.strength.x = e;
    }
    get maxStrength() {
      return this.strength.y;
    }
    set maxStrength(e) {
      this.strength.y = e;
    }
    getMaxStrength() {
      return this.strength.y;
    }
    setMaxStrength(e) {
      this.strength.y = e;
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
    getGlitchRatio() {
      return 1 - this.ratio;
    }
    setGlitchRatio(e) {
      this.ratio = Math.min(Math.max(1 - e, 0), 1);
    }
    get columns() {
      return this.uniforms.get(`columns`).value;
    }
    set columns(e) {
      this.uniforms.get(`columns`).value = e;
    }
    getGlitchColumns() {
      return this.columns;
    }
    setGlitchColumns(e) {
      this.columns = e;
    }
    getChromaticAberrationOffset() {
      return this.chromaticAberrationOffset;
    }
    setChromaticAberrationOffset(e) {
      this.chromaticAberrationOffset = e;
    }
    get perturbationMap() {
      return this.uniforms.get(`perturbationMap`).value;
    }
    set perturbationMap(e) {
      let t = this.perturbationMap;
      (t !== null && t.name === Lt && t.dispose(),
        (e.minFilter = e.magFilter = m),
        (e.wrapS = e.wrapT = g),
        (e.generateMipmaps = !1),
        (this.uniforms.get(`perturbationMap`).value = e));
    }
    getPerturbationMap() {
      return this.perturbationMap;
    }
    setPerturbationMap(e) {
      this.perturbationMap = e;
    }
    generatePerturbationMap(e = 64) {
      let t = new Ft(e, e, ie);
      return ((t.name = Lt), t);
    }
    update(e, t, n) {
      let r = this.mode,
        i = this.breakPoint,
        a = this.chromaticAberrationOffset,
        o = this.strength,
        s = this.time,
        c = !1,
        l = 0,
        u = 0,
        d;
      (r !== Nt.DISABLED &&
        (r === Nt.SPORADIC &&
          ((s += n),
          (d = s > i.x),
          s >= i.x + i.y &&
            (i.set(
              G(this.delay.x, this.delay.y),
              G(this.duration.x, this.duration.y),
            ),
            (s = 0))),
        (l = Math.random()),
        (this.uniforms.get(`random`).value = l),
        (d && l > this.ratio) || r === Nt.CONSTANT_WILD
          ? ((c = !0),
            (l *= o.y * 0.03),
            (u = G(-Math.PI, Math.PI)),
            this.seeds.set(G(-o.y, o.y), G(-o.y, o.y)),
            this.distortion.set(G(0, 1), G(0, 1)))
          : (d || r === Nt.CONSTANT_MILD) &&
            ((c = !0),
            (l *= o.x * 0.03),
            (u = G(-Math.PI, Math.PI)),
            this.seeds.set(G(-o.x, o.x), G(-o.x, o.x)),
            this.distortion.set(G(0, 1), G(0, 1))),
        (this.time = s)),
        a !== null &&
          (c ? a.set(Math.cos(u), Math.sin(u)).multiplyScalar(l) : a.set(0, 0)),
        (this.uniforms.get(`active`).value = c));
    }
    dispose() {
      let e = this.perturbationMap;
      e !== null && e.name === Lt && e.dispose();
    }
  },
  zt = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,
  Bt = class extends r {
    constructor(e) {
      super({
        name: `GodRaysMaterial`,
        defines: { SAMPLES_INT: `60`, SAMPLES_FLOAT: `60.0` },
        uniforms: {
          inputBuffer: new x(null),
          lightPosition: new x(e),
          density: new x(1),
          decay: new x(1),
          weight: new x(1),
          exposure: new x(1),
          clampMax: new x(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: zt,
        vertexShader: P,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get lightPosition() {
      return this.uniforms.lightPosition.value;
    }
    getLightPosition() {
      return this.uniforms.lightPosition.value;
    }
    setLightPosition(e) {
      this.uniforms.lightPosition.value = e;
    }
    get density() {
      return this.uniforms.density.value;
    }
    set density(e) {
      this.uniforms.density.value = e;
    }
    getDensity() {
      return this.uniforms.density.value;
    }
    setDensity(e) {
      this.uniforms.density.value = e;
    }
    get decay() {
      return this.uniforms.decay.value;
    }
    set decay(e) {
      this.uniforms.decay.value = e;
    }
    getDecay() {
      return this.uniforms.decay.value;
    }
    setDecay(e) {
      this.uniforms.decay.value = e;
    }
    get weight() {
      return this.uniforms.weight.value;
    }
    set weight(e) {
      this.uniforms.weight.value = e;
    }
    getWeight() {
      return this.uniforms.weight.value;
    }
    setWeight(e) {
      this.uniforms.weight.value = e;
    }
    get exposure() {
      return this.uniforms.exposure.value;
    }
    set exposure(e) {
      this.uniforms.exposure.value = e;
    }
    getExposure() {
      return this.uniforms.exposure.value;
    }
    setExposure(e) {
      this.uniforms.exposure.value = e;
    }
    get maxIntensity() {
      return this.uniforms.clampMax.value;
    }
    set maxIntensity(e) {
      this.uniforms.clampMax.value = e;
    }
    getMaxIntensity() {
      return this.uniforms.clampMax.value;
    }
    setMaxIntensity(e) {
      this.uniforms.clampMax.value = e;
    }
    get samples() {
      return Number(this.defines.SAMPLES_INT);
    }
    set samples(e) {
      let t = Math.floor(e);
      ((this.defines.SAMPLES_INT = t.toFixed(0)),
        (this.defines.SAMPLES_FLOAT = t.toFixed(1)),
        (this.needsUpdate = !0));
    }
    getSamples() {
      return this.samples;
    }
    setSamples(e) {
      this.samples = e;
    }
  },
  Vt = class extends N {
    constructor(e, t, n = null) {
      (super(`RenderPass`, e, t),
        (this.needsSwap = !1),
        (this.needsDepthBlit = !0),
        (this.clearPass = new ye()),
        (this.overrideMaterialManager = n === null ? null : new Me(n)),
        (this.ignoreBackground = !1),
        (this.skipShadowMapUpdate = !1),
        (this.selection = null));
    }
    set mainScene(e) {
      this.scene = e;
    }
    set mainCamera(e) {
      this.camera = e;
    }
    get renderToScreen() {
      return super.renderToScreen;
    }
    set renderToScreen(e) {
      ((super.renderToScreen = e), (this.clearPass.renderToScreen = e));
    }
    get overrideMaterial() {
      let e = this.overrideMaterialManager;
      return e === null ? null : e.material;
    }
    set overrideMaterial(e) {
      let t = this.overrideMaterialManager;
      e === null
        ? t !== null && (t.dispose(), (this.overrideMaterialManager = null))
        : t === null
          ? (this.overrideMaterialManager = new Me(e))
          : t.setMaterial(e);
    }
    getOverrideMaterial() {
      return this.overrideMaterial;
    }
    setOverrideMaterial(e) {
      this.overrideMaterial = e;
    }
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(e) {
      this.clearPass.enabled = e;
    }
    getSelection() {
      return this.selection;
    }
    setSelection(e) {
      this.selection = e;
    }
    isBackgroundDisabled() {
      return this.ignoreBackground;
    }
    setBackgroundDisabled(e) {
      this.ignoreBackground = e;
    }
    isShadowMapDisabled() {
      return this.skipShadowMapUpdate;
    }
    setShadowMapDisabled(e) {
      this.skipShadowMapUpdate = e;
    }
    getClearPass() {
      return this.clearPass;
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.selection,
        c = o.layers.mask,
        l = a.background,
        u = e.shadowMap.autoUpdate,
        d = this.renderToScreen ? null : t;
      (s !== null && o.layers.set(s.getLayer()),
        this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1),
        (this.ignoreBackground || this.clearPass.overrideClearColor !== null) &&
          (a.background = null),
        this.clearPass.enabled && this.clearPass.render(e, t),
        e.setRenderTarget(d),
        this.overrideMaterialManager === null
          ? e.render(a, o)
          : this.overrideMaterialManager.render(e, a, o),
        (o.layers.mask = c),
        (a.background = l),
        (e.shadowMap.autoUpdate = u));
    }
  },
  Ht = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`,
  Ut = new k(),
  Wt = new v(),
  Gt = class extends B {
    constructor(
      e,
      t,
      {
        blendFunction: n = z.SCREEN,
        samples: r = 60,
        density: i = 0.96,
        decay: a = 0.9,
        weight: o = 0.4,
        exposure: s = 0.6,
        clampMax: c = 1,
        blur: l = !0,
        kernelSize: d = V.SMALL,
        resolutionScale: f = 0.5,
        width: p = R.AUTO_SIZE,
        height: m = R.AUTO_SIZE,
        resolutionX: h = p,
        resolutionY: g = m,
      } = {},
    ) {
      (super(`GodRaysEffect`, Ht, {
        blendFunction: n,
        attributes: F.DEPTH,
        uniforms: new Map([[`map`, new x(null)]]),
      }),
        (this.camera = e),
        (this._lightSource = t),
        (this.lightSource = t),
        (this.lightScene = new D()),
        (this.screenPosition = new C()),
        (this.renderTargetA = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `GodRays.Target.A`),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = `GodRays.Target.B`),
        (this.uniforms.get(`map`).value = this.renderTargetB.texture),
        (this.renderTargetLight = new O(1, 1)),
        (this.renderTargetLight.texture.name = `GodRays.Light`),
        (this.renderTargetLight.depthTexture = new u()),
        (this.renderPassLight = new Vt(this.lightScene, e)),
        (this.renderPassLight.clearPass.enabled = !1),
        (this.blurPass = new H({ kernelSize: d })),
        (this.blurPass.enabled = l),
        (this.copyPass = new _e(this.renderTargetLight)),
        (this.copyPass.fullscreenMaterial.channelWeights = new A(0, 0, 0, 1)),
        (this.godRaysPass = new W(new Bt(this.screenPosition))));
      let _ = this.godRaysMaterial;
      ((_.density = i),
        (_.decay = a),
        (_.weight = o),
        (_.exposure = s),
        (_.maxIntensity = c),
        (_.samples = r));
      let v = (this.resolution = new R(this, h, g, f));
      v.addEventListener(`change`, (e) =>
        this.setSize(v.baseWidth, v.baseHeight),
      );
    }
    set mainCamera(e) {
      ((this.camera = e), (this.renderPassLight.mainCamera = e));
    }
    get lightSource() {
      return this._lightSource;
    }
    set lightSource(e) {
      ((this._lightSource = e),
        e !== null &&
          ((e.material.depthWrite = !1), (e.material.transparent = !0)));
    }
    getBlurPass() {
      return this.blurPass;
    }
    get texture() {
      return this.renderTargetB.texture;
    }
    getTexture() {
      return this.texture;
    }
    get godRaysMaterial() {
      return this.godRaysPass.fullscreenMaterial;
    }
    getGodRaysMaterial() {
      return this.godRaysMaterial;
    }
    getResolution() {
      return this.resolution;
    }
    get width() {
      return this.resolution.width;
    }
    set width(e) {
      this.resolution.preferredWidth = e;
    }
    get height() {
      return this.resolution.height;
    }
    set height(e) {
      this.resolution.preferredHeight = e;
    }
    get dithering() {
      return this.godRaysMaterial.dithering;
    }
    set dithering(e) {
      let t = this.godRaysMaterial;
      ((t.dithering = e), (t.needsUpdate = !0));
    }
    get blur() {
      return this.blurPass.enabled;
    }
    set blur(e) {
      this.blurPass.enabled = e;
    }
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(e) {
      this.blurPass.kernelSize = e;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    get samples() {
      return this.godRaysMaterial.samples;
    }
    set samples(e) {
      this.godRaysMaterial.samples = e;
    }
    setDepthTexture(e, t = j) {
      ((this.copyPass.fullscreenMaterial.depthBuffer = e),
        (this.copyPass.fullscreenMaterial.depthPacking = t));
    }
    update(e, t, n) {
      let r = this.lightSource,
        i = r.parent,
        a = r.matrixAutoUpdate,
        o = this.renderTargetA,
        s = this.renderTargetLight;
      ((r.material.depthWrite = !0),
        (r.matrixAutoUpdate = !1),
        r.updateWorldMatrix(!0, !1),
        i !== null && (a || Wt.copy(r.matrix), r.matrix.copy(r.matrixWorld)),
        this.lightScene.add(r),
        this.copyPass.render(e, t),
        this.renderPassLight.render(e, s),
        (r.material.depthWrite = !1),
        (r.matrixAutoUpdate = a),
        i !== null && (a || r.matrix.copy(Wt), i.add(r)),
        Ut.setFromMatrixPosition(r.matrixWorld).project(this.camera),
        this.screenPosition.set(
          Math.min(Math.max((Ut.x + 1) * 0.5, -1), 2),
          Math.min(Math.max((Ut.y + 1) * 0.5, -1), 2),
        ));
      let c = s;
      (this.blurPass.enabled && (this.blurPass.render(e, c, o), (c = o)),
        this.godRaysPass.render(e, c, this.renderTargetB));
    }
    setSize(e, t) {
      let n = this.resolution;
      n.setBaseSize(e, t);
      let r = n.width,
        i = n.height;
      (this.renderTargetLight.setSize(e, t),
        this.renderTargetA.setSize(r, i),
        this.renderTargetB.setSize(r, i),
        this.blurPass.resolution.copy(n));
    }
    initialize(e, t, n) {
      (this.blurPass.initialize(e, t, n),
        this.renderPassLight.initialize(e, t, n),
        this.copyPass.initialize(e, t, n),
        this.godRaysPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTargetA.texture.type = n),
          (this.renderTargetB.texture.type = n),
          (this.renderTargetLight.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            ((this.renderTargetA.texture.colorSpace = f),
            (this.renderTargetB.texture.colorSpace = f),
            (this.renderTargetLight.texture.colorSpace = f))));
    }
  },
  Kt = `uniform vec2 scale;uniform float lineWidth;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float grid=0.5-max(abs(mod(uv.x*scale.x,1.0)-0.5),abs(mod(uv.y*scale.y,1.0)-0.5));outputColor=vec4(vec3(smoothstep(0.0,lineWidth,grid)),inputColor.a);}`,
  qt = class extends B {
    constructor({
      blendFunction: e = z.OVERLAY,
      scale: t = 1,
      lineWidth: n = 0,
    } = {}) {
      (super(`GridEffect`, Kt, {
        blendFunction: e,
        uniforms: new Map([
          [`scale`, new x(new C())],
          [`lineWidth`, new x(n)],
        ]),
      }),
        (this.resolution = new C()),
        (this.s = 0),
        (this.scale = t),
        (this.l = 0),
        (this.lineWidth = n));
    }
    get scale() {
      return this.s;
    }
    set scale(e) {
      ((this.s = Math.max(e, 1e-6)),
        this.setSize(this.resolution.width, this.resolution.height));
    }
    getScale() {
      return this.scale;
    }
    setScale(e) {
      this.scale = e;
    }
    get lineWidth() {
      return this.l;
    }
    set lineWidth(e) {
      ((this.l = e),
        this.setSize(this.resolution.width, this.resolution.height));
    }
    getLineWidth() {
      return this.lineWidth;
    }
    setLineWidth(e) {
      this.lineWidth = e;
    }
    setSize(e, t) {
      this.resolution.set(e, t);
      let n = e / t,
        r = this.scale * (t * 0.125);
      (this.uniforms.get(`scale`).value.set(n * r, r),
        (this.uniforms.get(`lineWidth`).value = r / t + this.lineWidth));
    }
  },
  Jt = `uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}`,
  Yt = class extends B {
    constructor({
      blendFunction: e = z.SRC,
      hue: t = 0,
      saturation: n = 0,
    } = {}) {
      (super(`HueSaturationEffect`, Jt, {
        blendFunction: e,
        uniforms: new Map([
          [`hue`, new x(new k())],
          [`saturation`, new x(n)],
        ]),
      }),
        (this.hue = t));
    }
    get saturation() {
      return this.uniforms.get(`saturation`).value;
    }
    set saturation(e) {
      this.uniforms.get(`saturation`).value = e;
    }
    getSaturation() {
      return this.saturation;
    }
    setSaturation(e) {
      this.saturation = e;
    }
    get hue() {
      let e = this.uniforms.get(`hue`).value;
      return Math.acos((e.x * 3 - 1) / 2);
    }
    set hue(e) {
      let t = Math.sin(e),
        n = Math.cos(e);
      this.uniforms
        .get(`hue`)
        .value.set(
          (2 * n + 1) / 3,
          (-Math.sqrt(3) * t - n + 1) / 3,
          (Math.sqrt(3) * t - n + 1) / 3,
        );
    }
    getHue() {
      return this.hue;
    }
    setHue(e) {
      this.hue = e;
    }
  },
  Xt = `uniform vec2 distortion;uniform vec2 principalPoint;uniform vec2 focalLength;uniform float skew;float mask(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void mainUv(inout vec2 uv){vec2 xn=2.0*(uv.st-0.5);vec3 xDistorted=vec3((1.0+distortion*dot(xn,xn))*xn,1.0);mat3 kk=mat3(vec3(focalLength.x,0.0,0.0),vec3(skew*focalLength.x,focalLength.y,0.0),vec3(principalPoint.x,principalPoint.y,1.0));uv=(kk*xDistorted).xy*0.5+0.5;}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=mask(uv)*inputColor;}`,
  Zt = class extends B {
    constructor({
      distortion: e = new C(0, 0),
      principalPoint: t = new C(0, 0),
      focalLength: n = new C(1, 1),
      skew: r = 0,
    } = {}) {
      super(`LensDistortionEffect`, Xt, {
        uniforms: new Map([
          [`distortion`, new x(e)],
          [`principalPoint`, new x(t)],
          [`focalLength`, new x(n)],
          [`skew`, new x(r)],
        ]),
      });
    }
    get distortion() {
      return this.uniforms.get(`distortion`).value;
    }
    set distortion(e) {
      this.uniforms.get(`distortion`).value = e;
    }
    get principalPoint() {
      return this.uniforms.get(`principalPoint`).value;
    }
    set principalPoint(e) {
      this.uniforms.get(`principalPoint`).value = e;
    }
    get focalLength() {
      return this.uniforms.get(`focalLength`).value;
    }
    set focalLength(e) {
      this.uniforms.get(`focalLength`).value = e;
    }
    get skew() {
      return this.uniforms.get(`skew`).value;
    }
    set skew(e) {
      this.uniforms.get(`skew`).value = e;
    }
  },
  Qt = `#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D lut;
#else
uniform mediump sampler2D lut;
#endif
#else
uniform lowp sampler2D lut;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(texture2D(lut,vec2(inputColor.r,0.5)).r,texture2D(lut,vec2(inputColor.g,0.5)).r,texture2D(lut,vec2(inputColor.b,0.5)).r,inputColor.a);}`,
  $t = class extends B {
    constructor(e, { blendFunction: t = z.SRC } = {}) {
      (super(`LUT1DEffect`, Qt, {
        blendFunction: t,
        uniforms: new Map([[`lut`, new x(null)]]),
      }),
        (this.lut = e));
    }
    get lut() {
      return this.uniforms.get(`lut`).value;
    }
    set lut(e) {
      ((this.uniforms.get(`lut`).value = e),
        e !== null &&
          (e.type === 1015 || e.type === 1016) &&
          this.defines.set(`LUT_PRECISION_HIGH`, `1`));
    }
  },
  en = { SCALE_UP: `lut.scaleup` };
