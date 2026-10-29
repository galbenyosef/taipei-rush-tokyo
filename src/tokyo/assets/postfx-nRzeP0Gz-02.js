// tokyo/assets/postfx-nRzeP0Gz 02 — stencil
// Lines 46-557 of readable/tokyo/assets/postfx-nRzeP0Gz.pretty.js (statement-aligned).
var ue = e({
    ASCIIEffect: () => Be,
    ASCIITexture: () => Re,
    AdaptiveLuminanceMaterial: () => wr,
    AdaptiveLuminancePass: () => Tr,
    BlendFunction: () => z,
    BlendMode: () => Le,
    BloomEffect: () => nt,
    BlurPass: () => H,
    BokehEffect: () => it,
    BokehMaterial: () => vt,
    BoxBlurMaterial: () => Fr,
    BoxBlurPass: () => Gr,
    BrightnessContrastEffect: () => ot,
    ChromaticAberrationEffect: () => pt,
    CircleOfConfusionMaterial: () => bt,
    ClearMaskPass: () => me,
    ClearPass: () => ye,
    ColorAverageEffect: () => ct,
    ColorChannel: () => U,
    ColorDepthEffect: () => ut,
    ColorEdgesMaterial: () => Kn,
    ConvolutionMaterial: () => We,
    CopyMaterial: () => ge,
    CopyPass: () => _e,
    DepthComparisonMaterial: () => yn,
    DepthCopyMaterial: () => Rr,
    DepthCopyMode: () => cn,
    DepthCopyPass: () => Kr,
    DepthDownsamplingMaterial: () => cr,
    DepthDownsamplingPass: () => lr,
    DepthEffect: () => ht,
    DepthMaskMaterial: () => Bn,
    DepthOfFieldEffect: () => Tt,
    DepthPass: () => Cn,
    DepthPickingPass: () => Zr,
    DepthSavePass: () => Kr,
    DepthTestStrategy: () => ln,
    Disposable: () => fe,
    DotScreenEffect: () => Dt,
    DownsamplingMaterial: () => Xe,
    EdgeDetectionMaterial: () => Kn,
    EdgeDetectionMode: () => un,
    Effect: () => B,
    EffectAttribute: () => F,
    EffectComposer: () => Te,
    EffectMaterial: () => Vr,
    EffectPass: () => ei,
    EffectShaderData: () => Ee,
    EffectShaderSection: () => I,
    FXAAEffect: () => At,
    GammaCorrectionEffect: () => Mt,
    GaussKernel: () => Oe,
    GaussianBlurMaterial: () => Wr,
    GaussianBlurPass: () => ti,
    GlitchEffect: () => Rt,
    GlitchMode: () => Nt,
    GodRaysEffect: () => Gt,
    GodRaysMaterial: () => Bt,
    GridEffect: () => qt,
    HueSaturationEffect: () => Yt,
    ImmutableTimer: () => ke,
    Initializable: () => Ae,
    KawaseBlurMaterial: () => We,
    KawaseBlurPass: () => H,
    KernelSize: () => V,
    LUT1DEffect: () => $t,
    LUT3DEffect: () => sn,
    LUT3dlLoader: () => Ar,
    LUTCubeLoader: () => jr,
    LUTEffect: () => sn,
    LUTOperation: () => en,
    LambdaPass: () => ni,
    LensDistortionEffect: () => Zt,
    LookupTexture: () => an,
    LookupTexture3D: () => an,
    LuminanceMaterial: () => Ke,
    LuminancePass: () => qe,
    MaskFunction: () => gt,
    MaskMaterial: () => St,
    MaskPass: () => be,
    MipmapBlurPass: () => et,
    NoiseEffect: () => gn,
    NoiseTexture: () => Ft,
    NormalPass: () => ri,
    OutlineEdgesMaterial: () => Sn,
    OutlineEffect: () => En,
    OutlineMaterial: () => Sn,
    OverrideMaterialManager: () => Me,
    Pass: () => N,
    PixelationEffect: () => On,
    PredicationMode: () => dn,
    RawImageData: () => K,
    RealisticBokehEffect: () => An,
    RenderPass: () => Vt,
    Resizable: () => Ne,
    Resizer: () => R,
    Resolution: () => R,
    SMAAAreaImageData: () => Di,
    SMAAEffect: () => er,
    SMAAImageGenerator: () => Ai,
    SMAAImageLoader: () => Mr,
    SMAAPreset: () => fn,
    SMAASearchImageData: () => Fi,
    SMAAWeightsMaterial: () => Yn,
    SSAOEffect: () => fr,
    SSAOMaterial: () => ar,
    SavePass: () => _e,
    ScanlineEffect: () => Mn,
    Section: () => I,
    Selection: () => Fe,
    SelectiveBloomEffect: () => Vn,
    SepiaEffect: () => Un,
    ShaderPass: () => W,
    ShockWaveEffect: () => Rn,
    TetrahedralUpscaler: () => li,
    TextureEffect: () => hr,
    TiltShiftBlurMaterial: () => vr,
    TiltShiftBlurPass: () => yr,
    TiltShiftEffect: () => Sr,
    Timer: () => we,
    ToneMappingEffect: () => Dr,
    ToneMappingMode: () => q,
    UpsamplingMaterial: () => $e,
    VignetteEffect: () => kr,
    VignetteTechnique: () => pn,
    WebGLExtension: () => mn,
    version: () => de,
  }),
  de = `6.39.5`,
  fe = class {
    dispose() {}
  },
  pe = (() => {
    let e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
      t = new Float32Array([0, 0, 2, 0, 0, 2]),
      n = new ee();
    return (
      n.setAttribute(`position`, new re(e, 3)),
      n.setAttribute(`uv`, new re(t, 2)),
      n
    );
  })(),
  N = class e {
    static get fullscreenGeometry() {
      return pe;
    }
    constructor(e = `Pass`, t = new D(), n = new le()) {
      ((this.name = e),
        (this.renderer = null),
        (this.scene = t),
        (this.camera = n),
        (this.screen = null),
        (this.rtt = !0),
        (this.needsSwap = !0),
        (this.needsDepthBlit = !1),
        (this.needsDepthTexture = !1),
        (this.enabled = !0));
    }
    get renderToScreen() {
      return !this.rtt;
    }
    set renderToScreen(e) {
      if (this.rtt === e) {
        let t = this.fullscreenMaterial;
        (t !== null && (t.needsUpdate = !0), (this.rtt = !e));
      }
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    setRenderer(e) {
      this.renderer = e;
    }
    isEnabled() {
      return this.enabled;
    }
    setEnabled(e) {
      this.enabled = e;
    }
    get fullscreenMaterial() {
      return this.screen === null ? null : this.screen.material;
    }
    set fullscreenMaterial(t) {
      let n = this.screen;
      n === null
        ? ((n = new o(e.fullscreenGeometry, t)),
          (n.frustumCulled = !1),
          this.scene === null && (this.scene = new D()),
          this.scene.add(n),
          (this.screen = n))
        : (n.material = t);
    }
    getFullscreenMaterial() {
      return this.fullscreenMaterial;
    }
    setFullscreenMaterial(e) {
      this.fullscreenMaterial = e;
    }
    getDepthTexture() {
      return null;
    }
    setDepthTexture(e, t = j) {}
    render(e, t, n, r, i) {
      throw Error(`Render method not implemented!`);
    }
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let t of Object.keys(this)) {
        let n = this[t];
        (n instanceof O ||
          n instanceof _ ||
          n instanceof y ||
          n instanceof e) &&
          this[t].dispose();
      }
      this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
    }
  },
  me = class extends N {
    constructor() {
      (super(`ClearMaskPass`, null, null), (this.needsSwap = !1));
    }
    render(e, t, n, r, i) {
      let a = e.state.buffers.stencil;
      (a.setLocked(!1), a.setTest(!1));
    }
  },
  he = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,
  P = `varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,
  ge = class extends r {
    constructor() {
      (super({
        name: `CopyMaterial`,
        defines: {
          COLOR_SPACE_CONVERSION: `1`,
          DEPTH_PACKING: `0`,
          COLOR_WRITE: `1`,
        },
        uniforms: {
          inputBuffer: new x(null),
          depthBuffer: new x(null),
          channelWeights: new x(null),
          opacity: new x(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: he,
        vertexShader: P,
      }),
        (this.depthFunc = 1));
    }
    get inputBuffer() {
      return this.uniforms.inputBuffer.value;
    }
    set inputBuffer(e) {
      let t = e !== null;
      (this.colorWrite !== t &&
        (t ? (this.defines.COLOR_WRITE = !0) : delete this.defines.COLOR_WRITE,
        (this.colorWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.inputBuffer.value = e));
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(e) {
      let t = e !== null;
      (this.depthWrite !== t &&
        (t ? (this.defines.DEPTH_WRITE = !0) : delete this.defines.DEPTH_WRITE,
        (this.depthTest = t),
        (this.depthWrite = t),
        (this.needsUpdate = !0)),
        (this.uniforms.depthBuffer.value = e));
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    get colorSpaceConversion() {
      return this.defines.COLOR_SPACE_CONVERSION !== void 0;
    }
    set colorSpaceConversion(e) {
      this.colorSpaceConversion !== e &&
        (e
          ? (this.defines.COLOR_SPACE_CONVERSION = !0)
          : delete this.defines.COLOR_SPACE_CONVERSION,
        (this.needsUpdate = !0));
    }
    get channelWeights() {
      return this.uniforms.channelWeights.value;
    }
    set channelWeights(e) {
      (e === null
        ? delete this.defines.USE_WEIGHTS
        : ((this.defines.USE_WEIGHTS = `1`),
          (this.uniforms.channelWeights.value = e)),
        (this.needsUpdate = !0));
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    getOpacity(e) {
      return this.uniforms.opacity.value;
    }
    setOpacity(e) {
      this.uniforms.opacity.value = e;
    }
  },
  _e = class extends N {
    constructor(e, t = !0) {
      (super(`CopyPass`),
        (this.fullscreenMaterial = new ge()),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        e === void 0 &&
          ((this.renderTarget = new O(1, 1, {
            minFilter: E,
            magFilter: E,
            stencilBuffer: !1,
            depthBuffer: !1,
          })),
          (this.renderTarget.texture.name = `CopyPass.Target`)),
        (this.autoResize = t));
    }
    get resize() {
      return this.autoResize;
    }
    set resize(e) {
      this.autoResize = e;
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    setAutoResizeEnabled(e) {
      this.autoResize = e;
    }
    render(e, t, n, r, i) {
      ((this.fullscreenMaterial.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      this.autoResize && this.renderTarget.setSize(e, t);
    }
    initialize(e, t, n) {
      n !== void 0 &&
        ((this.renderTarget.texture.type = n),
        n === 1009
          ? e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = f)
          : (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`));
    }
  },
  ve = new h(),
  ye = class extends N {
    constructor(e = !0, t = !0, n = !1) {
      (super(`ClearPass`, null, null),
        (this.needsSwap = !1),
        (this.color = e),
        (this.depth = t),
        (this.stencil = n),
        (this.overrideClearColor = null),
        (this.overrideClearAlpha = -1));
    }
    setClearFlags(e, t, n) {
      ((this.color = e), (this.depth = t), (this.stencil = n));
    }
    getOverrideClearColor() {
      return this.overrideClearColor;
    }
    setOverrideClearColor(e) {
      this.overrideClearColor = e;
    }
    getOverrideClearAlpha() {
      return this.overrideClearAlpha;
    }
    setOverrideClearAlpha(e) {
      this.overrideClearAlpha = e;
    }
    render(e, t, n, r, i) {
      let a = this.overrideClearColor,
        o = this.overrideClearAlpha,
        s = e.getClearAlpha(),
        c = a !== null,
        l = o >= 0;
      (c
        ? (e.getClearColor(ve), e.setClearColor(a, l ? o : s))
        : l && e.setClearAlpha(o),
        e.setRenderTarget(this.renderToScreen ? null : t),
        e.clear(this.color, this.depth, this.stencil),
        c ? e.setClearColor(ve, s) : l && e.setClearAlpha(s));
    }
  },
  be = class extends N {
    constructor(e, t) {
      (super(`MaskPass`, e, t),
        (this.needsSwap = !1),
        (this.clearPass = new ye(!1, !1, !0)),
        (this.inverse = !1));
    }
    set mainScene(e) {
      this.scene = e;
    }
    set mainCamera(e) {
      this.camera = e;
    }
    get inverted() {
      return this.inverse;
    }
    set inverted(e) {
      this.inverse = e;
    }
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(e) {
      this.clearPass.enabled = e;
    }
    getClearPass() {
      return this.clearPass;
    }
    isInverted() {
      return this.inverted;
    }
    setInverted(e) {
      this.inverted = e;
    }
    render(e, t, n, r, i) {
      let a = e.getContext(),
        o = e.state.buffers,
        s = this.scene,
        c = this.camera,
        l = this.clearPass,
        u = +!this.inverted,
        d = 1 - u;
      (o.color.setMask(!1),
        o.depth.setMask(!1),
        o.color.setLocked(!0),
        o.depth.setLocked(!0),
        o.stencil.setTest(!0),
        o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE),
        o.stencil.setFunc(a.ALWAYS, u, 4294967295),
        o.stencil.setClear(d),
        o.stencil.setLocked(!0),
        this.clearPass.enabled &&
          (this.renderToScreen
            ? l.render(e, null)
            : (l.render(e, t), l.render(e, n))),
        this.renderToScreen
          ? (e.setRenderTarget(null), e.render(s, c))
          : (e.setRenderTarget(t),
            e.render(s, c),
            e.setRenderTarget(n),
            e.render(s, c)),
        o.color.setLocked(!1),
        o.depth.setLocked(!1),
        o.stencil.setLocked(!1),
        o.stencil.setFunc(a.EQUAL, 1, 4294967295),
        o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP),
        o.stencil.setLocked(!0));
    }
  };
