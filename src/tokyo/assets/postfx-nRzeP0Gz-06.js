// tokyo/assets/postfx-nRzeP0Gz 06 — uniforms
// Lines 953-3333 of readable/tokyo/assets/postfx-nRzeP0Gz.pretty.js (statement-aligned).
var Oe = class {
    constructor(e, t = 2) {
      ((this.weights = null),
        (this.offsets = null),
        (this.linearWeights = null),
        (this.linearOffsets = null),
        this.generate(e, t));
    }
    get steps() {
      return this.offsets === null ? 0 : this.offsets.length;
    }
    get linearSteps() {
      return this.linearOffsets === null ? 0 : this.linearOffsets.length;
    }
    generate(e, t) {
      if (e < 3 || e > 1020)
        throw Error(`The kernel size must be in the range [3, 1020]`);
      let n = e + t * 2,
        r = t > 0 ? De(n).slice(t, -t) : De(n),
        i = Math.floor((r.length - 1) / 2),
        a = r.reduce((e, t) => e + t, 0),
        o = r.slice(i),
        s = [...Array(i + 1).keys()],
        c = new Float64Array(Math.floor(s.length / 2)),
        l = new Float64Array(c.length);
      c[0] = o[0] / a;
      for (let e = 1, t = 1, n = s.length - 1; e < n; e += 2, ++t) {
        let n = s[e],
          r = s[e + 1],
          i = o[e],
          u = o[e + 1],
          d = i + u,
          f = (n * i + r * u) / d;
        ((c[t] = d / a), (l[t] = f));
      }
      for (let e = 0, t = o.length, n = 1 / a; e < t; ++e) o[e] *= n;
      let u = (c.reduce((e, t) => e + t, 0) - c[0] * 0.5) * 2;
      if (u !== 0)
        for (let e = 0, t = c.length, n = 1 / u; e < t; ++e) c[e] *= n;
      ((this.offsets = s),
        (this.weights = o),
        (this.linearOffsets = l),
        (this.linearWeights = c));
    }
  },
  ke = class {
    getDelta() {
      return NaN;
    }
    getElapsed() {
      return NaN;
    }
  },
  Ae = class {
    initialize(e, t, n) {}
  },
  je = !1,
  Me = class {
    constructor(e = null) {
      ((this.originalMaterials = new Map()),
        (this.material = null),
        (this.materials = null),
        (this.materialsBackSide = null),
        (this.materialsDoubleSide = null),
        (this.materialsFlatShaded = null),
        (this.materialsFlatShadedBackSide = null),
        (this.materialsFlatShadedDoubleSide = null),
        this.setMaterial(e),
        (this.meshCount = 0),
        (this.replaceMaterial = (e) => {
          if (e.isMesh) {
            let t;
            if (e.material.flatShading)
              switch (e.material.side) {
                case 2:
                  t = this.materialsFlatShadedDoubleSide;
                  break;
                case 1:
                  t = this.materialsFlatShadedBackSide;
                  break;
                default:
                  t = this.materialsFlatShaded;
              }
            else
              switch (e.material.side) {
                case 2:
                  t = this.materialsDoubleSide;
                  break;
                case 1:
                  t = this.materialsBackSide;
                  break;
                default:
                  t = this.materials;
              }
            (this.originalMaterials.set(e, e.material),
              (e.material = e.isSkinnedMesh
                ? t[2]
                : e.isInstancedMesh
                  ? t[1]
                  : t[0]),
              ++this.meshCount);
          }
        }));
    }
    cloneMaterial(e) {
      if (!(e instanceof r)) return e.clone();
      let t = e.uniforms,
        n = new Map();
      for (let e in t) {
        let r = t[e].value;
        r.isRenderTargetTexture && ((t[e].value = null), n.set(e, r));
      }
      let i = e.clone();
      for (let e of n)
        ((t[e[0]].value = e[1]), (i.uniforms[e[0]].value = e[1]));
      return i;
    }
    setMaterial(e) {
      if ((this.disposeMaterials(), (this.material = e), e !== null)) {
        let t = (this.materials = [
          this.cloneMaterial(e),
          this.cloneMaterial(e),
          this.cloneMaterial(e),
        ]);
        for (let n of t)
          ((n.uniforms = Object.assign({}, e.uniforms)), (n.side = 0));
        ((t[2].skinning = !0),
          (this.materialsBackSide = t.map((t) => {
            let n = this.cloneMaterial(t);
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.side = 1),
              n
            );
          })),
          (this.materialsDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t);
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.side = 2),
              n
            );
          })),
          (this.materialsFlatShaded = t.map((t) => {
            let n = this.cloneMaterial(t);
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              n
            );
          })),
          (this.materialsFlatShadedBackSide = t.map((t) => {
            let n = this.cloneMaterial(t);
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 1),
              n
            );
          })),
          (this.materialsFlatShadedDoubleSide = t.map((t) => {
            let n = this.cloneMaterial(t);
            return (
              (n.uniforms = Object.assign({}, e.uniforms)),
              (n.flatShading = !0),
              (n.side = 2),
              n
            );
          })));
      }
    }
    render(e, t, n) {
      let r = e.shadowMap.enabled;
      if (((e.shadowMap.enabled = !1), je)) {
        let r = this.originalMaterials;
        ((this.meshCount = 0),
          t.traverse(this.replaceMaterial),
          e.render(t, n));
        for (let e of r) e[0].material = e[1];
        this.meshCount !== r.size && r.clear();
      } else {
        let r = t.overrideMaterial;
        ((t.overrideMaterial = this.material),
          e.render(t, n),
          (t.overrideMaterial = r));
      }
      e.shadowMap.enabled = r;
    }
    disposeMaterials() {
      if (this.material !== null) {
        let e = this.materials
          .concat(this.materialsBackSide)
          .concat(this.materialsDoubleSide)
          .concat(this.materialsFlatShaded)
          .concat(this.materialsFlatShadedBackSide)
          .concat(this.materialsFlatShadedDoubleSide);
        for (let t of e) t.dispose();
      }
    }
    dispose() {
      (this.originalMaterials.clear(), this.disposeMaterials());
    }
    static get workaroundEnabled() {
      return je;
    }
    static set workaroundEnabled(e) {
      je = e;
    }
  },
  Ne = class {
    setSize(e, t) {}
  },
  L = -1,
  R = class extends a {
    constructor(e = null, t = L, n = L, r = 1) {
      (super(),
        e !== null &&
          this.addEventListener(`change`, () =>
            e.setSize(this.baseSize.width, this.baseSize.height),
          ),
        (this.baseSize = new C(1, 1)),
        (this.preferredSize = new C(t, n)),
        (this.target = this.preferredSize),
        (this.s = r),
        (this.effectiveSize = new C()),
        this.addEventListener(`change`, () => this.updateEffectiveSize()),
        this.updateEffectiveSize());
    }
    updateEffectiveSize() {
      let e = this.baseSize,
        t = this.preferredSize,
        n = this.effectiveSize,
        r = this.scale;
      ((n.width =
        t.width === L
          ? t.height === L
            ? Math.round(e.width * r)
            : Math.round(t.height * (e.width / Math.max(e.height, 1)))
          : t.width),
        (n.height =
          t.height === L
            ? t.width === L
              ? Math.round(e.height * r)
              : Math.round(
                  t.width / Math.max(e.width / Math.max(e.height, 1), 1),
                )
            : t.height));
    }
    get width() {
      return this.effectiveSize.width;
    }
    set width(e) {
      this.preferredWidth = e;
    }
    get height() {
      return this.effectiveSize.height;
    }
    set height(e) {
      this.preferredHeight = e;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    get scale() {
      return this.s;
    }
    set scale(e) {
      this.s !== e &&
        ((this.s = e),
        this.preferredSize.setScalar(L),
        this.dispatchEvent({ type: `change` }));
    }
    getScale() {
      return this.scale;
    }
    setScale(e) {
      this.scale = e;
    }
    get baseWidth() {
      return this.baseSize.width;
    }
    set baseWidth(e) {
      this.baseSize.width !== e &&
        ((this.baseSize.width = e), this.dispatchEvent({ type: `change` }));
    }
    getBaseWidth() {
      return this.baseWidth;
    }
    setBaseWidth(e) {
      this.baseWidth = e;
    }
    get baseHeight() {
      return this.baseSize.height;
    }
    set baseHeight(e) {
      this.baseSize.height !== e &&
        ((this.baseSize.height = e), this.dispatchEvent({ type: `change` }));
    }
    getBaseHeight() {
      return this.baseHeight;
    }
    setBaseHeight(e) {
      this.baseHeight = e;
    }
    setBaseSize(e, t) {
      (this.baseSize.width !== e || this.baseSize.height !== t) &&
        (this.baseSize.set(e, t), this.dispatchEvent({ type: `change` }));
    }
    get preferredWidth() {
      return this.preferredSize.width;
    }
    set preferredWidth(e) {
      this.preferredSize.width !== e &&
        ((this.preferredSize.width = e),
        this.dispatchEvent({ type: `change` }));
    }
    getPreferredWidth() {
      return this.preferredWidth;
    }
    setPreferredWidth(e) {
      this.preferredWidth = e;
    }
    get preferredHeight() {
      return this.preferredSize.height;
    }
    set preferredHeight(e) {
      this.preferredSize.height !== e &&
        ((this.preferredSize.height = e),
        this.dispatchEvent({ type: `change` }));
    }
    getPreferredHeight() {
      return this.preferredHeight;
    }
    setPreferredHeight(e) {
      this.preferredHeight = e;
    }
    setPreferredSize(e, t) {
      (this.preferredSize.width !== e || this.preferredSize.height !== t) &&
        (this.preferredSize.set(e, t), this.dispatchEvent({ type: `change` }));
    }
    copy(e) {
      ((this.s = e.scale),
        this.baseSize.set(e.baseWidth, e.baseHeight),
        this.preferredSize.set(e.preferredWidth, e.preferredHeight),
        this.dispatchEvent({ type: `change` }));
    }
    static get AUTO_SIZE() {
      return L;
    }
  },
  Pe = new (class {
    constructor(e = 0) {
      this.nextId = e;
    }
    getNextId() {
      return this.nextId++;
    }
    reset(e = 0) {
      return ((this.nextId = e), this);
    }
  })(2),
  Fe = class extends Set {
    constructor(e, t = Pe.getNextId()) {
      (super(),
        (this.exclusive = !1),
        (this._layer = t),
        (this._layer < 1 || this._layer > 31) &&
          (console.warn(`Layer out of range, resetting to 2`),
          Pe.reset(2),
          (this._layer = Pe.getNextId())),
        e !== void 0 && this.set(e));
    }
    get layer() {
      return this._layer;
    }
    set layer(e) {
      let t = this._layer;
      for (let n of this) (n.layers.disable(t), n.layers.enable(e));
      this._layer = e;
    }
    getLayer() {
      return this.layer;
    }
    setLayer(e) {
      this.layer = e;
    }
    isExclusive() {
      return this.exclusive;
    }
    setExclusive(e) {
      this.exclusive = e;
    }
    clear() {
      let e = this.layer;
      for (let t of this) t.layers.disable(e);
      return super.clear();
    }
    set(e) {
      this.clear();
      for (let t of e) this.add(t);
      return this;
    }
    indexOf(e) {
      return this.has(e) ? 0 : -1;
    }
    add(e) {
      return (
        this.exclusive ? e.layers.set(this.layer) : e.layers.enable(this.layer),
        super.add(e)
      );
    }
    delete(e) {
      return (this.has(e) && e.layers.disable(this.layer), super.delete(e));
    }
    toggle(e) {
      let t;
      return (
        this.has(e) ? (this.delete(e), (t = !1)) : (this.add(e), (t = !0)),
        t
      );
    }
    setVisible(e) {
      for (let t of this) e ? t.layers.enable(0) : t.layers.disable(0);
      return this;
    }
  },
  z = {
    SKIP: 9,
    SET: 30,
    ADD: 0,
    ALPHA: 1,
    AVERAGE: 2,
    COLOR: 3,
    COLOR_BURN: 4,
    COLOR_DODGE: 5,
    DARKEN: 6,
    DIFFERENCE: 7,
    DIVIDE: 8,
    DST: 9,
    EXCLUSION: 10,
    HARD_LIGHT: 11,
    HARD_MIX: 12,
    HUE: 13,
    INVERT: 14,
    INVERT_RGB: 15,
    LIGHTEN: 16,
    LINEAR_BURN: 17,
    LINEAR_DODGE: 18,
    LINEAR_LIGHT: 19,
    LUMINOSITY: 20,
    MULTIPLY: 21,
    NEGATION: 22,
    NORMAL: 23,
    OVERLAY: 24,
    PIN_LIGHT: 25,
    REFLECT: 26,
    SATURATION: 27,
    SCREEN: 28,
    SOFT_LIGHT: 29,
    SRC: 30,
    SUBTRACT: 31,
    VIVID_LIGHT: 32,
  },
  Ie = new Map([
    [
      z.ADD,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.ALPHA,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}`,
    ],
    [
      z.AVERAGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.COLOR,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.COLOR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.COLOR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.DARKEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.DIFFERENCE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.DIVIDE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [z.DST, null],
    [
      z.EXCLUSION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.HARD_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.HARD_MIX,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.HUE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.INVERT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.INVERT_RGB,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.LIGHTEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.LINEAR_BURN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.LINEAR_DODGE,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.LINEAR_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.LUMINOSITY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.MULTIPLY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.NEGATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.NORMAL,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}`,
    ],
    [
      z.OVERLAY,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.PIN_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.REFLECT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.SATURATION,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.SCREEN,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.SOFT_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.SRC,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}`,
    ],
    [
      z.SUBTRACT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
    [
      z.VIVID_LIGHT,
      `vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`,
    ],
  ]),
  Le = class extends a {
    constructor(e, t = 1) {
      (super(), (this._blendFunction = e), (this.opacity = new x(t)));
    }
    getOpacity() {
      return this.opacity.value;
    }
    setOpacity(e) {
      this.opacity.value = e;
    }
    get blendFunction() {
      return this._blendFunction;
    }
    set blendFunction(e) {
      ((this._blendFunction = e), this.dispatchEvent({ type: `change` }));
    }
    getBlendFunction() {
      return this.blendFunction;
    }
    setBlendFunction(e) {
      this.blendFunction = e;
    }
    getShaderCode() {
      return Ie.get(this.blendFunction);
    }
  },
  Re = class extends ae {
    constructor({
      characters: e = ` .:,'-^=*+?!|0#X%WM@`,
      font: t = `Arial`,
      fontSize: n = 54,
      size: r = 1024,
      cellCount: i = 16,
    } = {}) {
      super(document.createElement(`canvas`), void 0, g, g);
      let a = this.image;
      a.width = a.height = r;
      let o = a.getContext(`2d`),
        s = r / i;
      ((o.font = `${n}px ${t}`),
        (o.textAlign = `center`),
        (o.textBaseline = `middle`),
        (o.fillStyle = `#ffffff`));
      for (let t = 0, n = e.length; t < n; ++t) {
        let n = e[t],
          r = t % i,
          a = Math.floor(t / i);
        o.fillText(n, r * s + s / 2, a * s + s / 2);
      }
      ((this.characterCount = e.length), (this.cellCount = i));
    }
  },
  B = class extends a {
    constructor(
      e,
      t,
      {
        attributes: n = F.NONE,
        blendFunction: r = z.NORMAL,
        defines: i = new Map(),
        uniforms: a = new Map(),
        extensions: o = null,
        vertexShader: s = null,
      } = {},
    ) {
      (super(),
        (this.name = e),
        (this.renderer = null),
        (this.attributes = n),
        (this.fragmentShader = t),
        (this.vertexShader = s),
        (this.defines = i),
        (this.uniforms = a),
        (this.extensions = o),
        (this.blendMode = new Le(r)),
        this.blendMode.addEventListener(`change`, (e) => this.setChanged()),
        (this._inputColorSpace = oe),
        (this._outputColorSpace = ``));
    }
    get inputColorSpace() {
      return this._inputColorSpace;
    }
    set inputColorSpace(e) {
      ((this._inputColorSpace = e), this.setChanged());
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      ((this._outputColorSpace = e), this.setChanged());
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    getName() {
      return this.name;
    }
    setRenderer(e) {
      this.renderer = e;
    }
    getDefines() {
      return this.defines;
    }
    getUniforms() {
      return this.uniforms;
    }
    getExtensions() {
      return this.extensions;
    }
    getBlendMode() {
      return this.blendMode;
    }
    getAttributes() {
      return this.attributes;
    }
    setAttributes(e) {
      ((this.attributes = e), this.setChanged());
    }
    getFragmentShader() {
      return this.fragmentShader;
    }
    setFragmentShader(e) {
      ((this.fragmentShader = e), this.setChanged());
    }
    getVertexShader() {
      return this.vertexShader;
    }
    setVertexShader(e) {
      ((this.vertexShader = e), this.setChanged());
    }
    setChanged() {
      this.dispatchEvent({ type: `change` });
    }
    setDepthTexture(e, t = j) {}
    update(e, t, n) {}
    setSize(e, t) {}
    initialize(e, t, n) {}
    dispose() {
      for (let e of Object.keys(this)) {
        let t = this[e];
        (t instanceof O ||
          t instanceof _ ||
          t instanceof y ||
          t instanceof N) &&
          this[e].dispose();
      }
    }
  },
  ze = `uniform sampler2D asciiTexture;uniform vec4 cellCount;
#ifdef USE_COLOR
uniform vec3 color;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 pixelizedUv=cellCount.zw*(0.5+floor(uv*cellCount.xy));vec4 texel=texture(inputBuffer,pixelizedUv);float lum=min(luminance(texel.rgb),1.0);
#ifdef INVERTED
lum=1.0-lum;
#endif
float characterIndex=floor(CHAR_COUNT_MINUS_ONE*lum);vec2 characterPosition=vec2(mod(characterIndex,TEX_CELL_COUNT),floor(characterIndex*INV_TEX_CELL_COUNT));vec2 offset=vec2(characterPosition.x,-characterPosition.y)*INV_TEX_CELL_COUNT;vec2 characterUv=mod(uv*(cellCount.xy*INV_TEX_CELL_COUNT),INV_TEX_CELL_COUNT);characterUv=characterUv-vec2(0.0,INV_TEX_CELL_COUNT)+offset;float asciiCharacter=texture(asciiTexture,characterUv).r;
#ifdef USE_COLOR
outputColor=vec4(color*asciiCharacter,inputColor.a);
#else
outputColor=vec4(texel.rgb*asciiCharacter,inputColor.a);
#endif
}`,
  Be = class extends B {
    constructor({
      asciiTexture: e = new Re(),
      cellSize: t = 16,
      color: n = null,
      inverted: r = !1,
    } = {}) {
      (super(`ASCIIEffect`, ze, {
        uniforms: new Map([
          [`asciiTexture`, new x(null)],
          [`cellCount`, new x(new A())],
          [`color`, new x(new h())],
        ]),
      }),
        (this._cellSize = -1),
        (this.resolution = new C()),
        (this.asciiTexture = e),
        (this.cellSize = t),
        (this.color = n),
        (this.inverted = r));
    }
    get asciiTexture() {
      return this.uniforms.get(`asciiTexture`).value;
    }
    set asciiTexture(e) {
      let t = this.uniforms.get(`asciiTexture`).value;
      if (
        ((this.uniforms.get(`asciiTexture`).value = e),
        t !== null && t !== e && t.dispose(),
        e !== null)
      ) {
        let t = e.cellCount;
        (this.defines.set(
          `CHAR_COUNT_MINUS_ONE`,
          (e.characterCount - 1).toFixed(1),
        ),
          this.defines.set(`TEX_CELL_COUNT`, t.toFixed(1)),
          this.defines.set(`INV_TEX_CELL_COUNT`, (1 / t).toFixed(9)),
          this.setChanged());
      }
    }
    get color() {
      return this.uniforms.get(`color`).value;
    }
    set color(e) {
      (e !== null && this.uniforms.get(`color`).value.set(e),
        this.defines.has(`USE_COLOR`) && e === null
          ? (this.defines.delete(`USE_COLOR`), this.setChanged())
          : !this.defines.has(`USE_COLOR`) &&
            e !== null &&
            (this.defines.set(`USE_COLOR`, `1`), this.setChanged()));
    }
    get inverted() {
      return this.defines.has(`INVERTED`);
    }
    set inverted(e) {
      this.inverted !== e &&
        (e
          ? this.defines.set(`INVERTED`, `1`)
          : this.defines.delete(`INVERTED`),
        this.setChanged());
    }
    get cellSize() {
      return this._cellSize;
    }
    set cellSize(e) {
      this._cellSize !== e && ((this._cellSize = e), this.updateCellCount());
    }
    updateCellCount() {
      let e = this.uniforms.get(`cellCount`).value,
        t = this.resolution;
      ((e.x = t.width / this.cellSize),
        (e.y = t.height / this.cellSize),
        (e.z = 1 / e.x),
        (e.w = 1 / e.y));
    }
    setSize(e, t) {
      (this.resolution.set(e, t), this.updateCellCount());
    }
    dispose() {
      (this.asciiTexture !== null && this.asciiTexture.dispose(),
        super.dispose());
    }
  },
  V = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 },
  Ve = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  He = `uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`,
  Ue = [
    new Float32Array([0, 0]),
    new Float32Array([0, 1, 1]),
    new Float32Array([0, 1, 1, 2]),
    new Float32Array([0, 1, 2, 2, 3]),
    new Float32Array([0, 1, 2, 3, 4, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]),
  ],
  We = class extends r {
    constructor(e = new A()) {
      (super({
        name: `KawaseBlurMaterial`,
        uniforms: {
          inputBuffer: new x(null),
          texelSize: new x(new A()),
          scale: new x(1),
          kernel: new x(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ve,
        vertexShader: He,
      }),
        this.setTexelSize(e.x, e.y),
        (this.kernelSize = V.MEDIUM));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.inputBuffer = e;
    }
    get kernelSequence() {
      return Ue[this.kernelSize];
    }
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(e) {
      this.uniforms.scale.value = e;
    }
    getScale() {
      return this.uniforms.scale.value;
    }
    setScale(e) {
      this.uniforms.scale.value = e;
    }
    getKernel() {
      return null;
    }
    get kernel() {
      return this.uniforms.kernel.value;
    }
    set kernel(e) {
      this.uniforms.kernel.value = e;
    }
    setKernel(e) {
      this.kernel = e;
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t, e * 0.5, t * 0.5);
    }
    setSize(e, t) {
      let n = 1 / e,
        r = 1 / t;
      this.uniforms.texelSize.value.set(n, r, n * 0.5, r * 0.5);
    }
  },
  H = class extends N {
    constructor({
      kernelSize: e = V.MEDIUM,
      resolutionScale: t = 0.5,
      width: n = R.AUTO_SIZE,
      height: r = R.AUTO_SIZE,
      resolutionX: i = n,
      resolutionY: a = r,
    } = {}) {
      (super(`KawaseBlurPass`),
        (this.renderTargetA = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `Blur.Target.A`),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = `Blur.Target.B`));
      let o = (this.resolution = new R(this, i, a, t));
      (o.addEventListener(`change`, (e) =>
        this.setSize(o.baseWidth, o.baseHeight),
      ),
        (this._blurMaterial = new We()),
        (this._blurMaterial.kernelSize = e),
        (this.copyMaterial = new ge()));
    }
    getResolution() {
      return this.resolution;
    }
    get blurMaterial() {
      return this._blurMaterial;
    }
    set blurMaterial(e) {
      this._blurMaterial = e;
    }
    get dithering() {
      return this.copyMaterial.dithering;
    }
    set dithering(e) {
      this.copyMaterial.dithering = e;
    }
    get kernelSize() {
      return this.blurMaterial.kernelSize;
    }
    set kernelSize(e) {
      this.blurMaterial.kernelSize = e;
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
    get scale() {
      return this.blurMaterial.scale;
    }
    set scale(e) {
      this.blurMaterial.scale = e;
    }
    getScale() {
      return this.blurMaterial.scale;
    }
    setScale(e) {
      this.blurMaterial.scale = e;
    }
    getKernelSize() {
      return this.kernelSize;
    }
    setKernelSize(e) {
      this.kernelSize = e;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.renderTargetA,
        c = this.renderTargetB,
        l = this.blurMaterial,
        u = l.kernelSequence,
        d = t;
      this.fullscreenMaterial = l;
      for (let t = 0, n = u.length; t < n; ++t) {
        let n = t & 1 ? c : s;
        ((l.kernel = u[t]),
          (l.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n));
      }
      ((this.fullscreenMaterial = this.copyMaterial),
        (this.copyMaterial.inputBuffer = d.texture),
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
    static get AUTO_SIZE() {
      return R.AUTO_SIZE;
    }
  },
  Ge = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,
  Ke = class extends r {
    constructor(e = !1, t = null) {
      (super({
        name: `LuminanceMaterial`,
        defines: { THREE_REVISION: `186`.replace(/\D+/g, ``) },
        uniforms: {
          inputBuffer: new x(null),
          threshold: new x(0),
          smoothing: new x(1),
          range: new x(null),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ge,
        vertexShader: P,
      }),
        (this.colorOutput = e),
        (this.luminanceRange = t));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get threshold() {
      return this.uniforms.threshold.value;
    }
    set threshold(e) {
      (this.smoothing > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.threshold.value = e));
    }
    getThreshold() {
      return this.threshold;
    }
    setThreshold(e) {
      this.threshold = e;
    }
    get smoothing() {
      return this.uniforms.smoothing.value;
    }
    set smoothing(e) {
      (this.threshold > 0 || e > 0
        ? (this.defines.THRESHOLD = `1`)
        : delete this.defines.THRESHOLD,
        (this.uniforms.smoothing.value = e));
    }
    getSmoothingFactor() {
      return this.smoothing;
    }
    setSmoothingFactor(e) {
      this.smoothing = e;
    }
    get useThreshold() {
      return this.threshold > 0 || this.smoothing > 0;
    }
    set useThreshold(e) {}
    get colorOutput() {
      return this.defines.COLOR !== void 0;
    }
    set colorOutput(e) {
      (e ? (this.defines.COLOR = `1`) : delete this.defines.COLOR,
        (this.needsUpdate = !0));
    }
    isColorOutputEnabled(e) {
      return this.colorOutput;
    }
    setColorOutputEnabled(e) {
      this.colorOutput = e;
    }
    get useRange() {
      return this.luminanceRange !== null;
    }
    set useRange(e) {
      this.luminanceRange = null;
    }
    get luminanceRange() {
      return this.uniforms.range.value;
    }
    set luminanceRange(e) {
      (e === null ? delete this.defines.RANGE : (this.defines.RANGE = `1`),
        (this.uniforms.range.value = e),
        (this.needsUpdate = !0));
    }
    getLuminanceRange() {
      return this.luminanceRange;
    }
    setLuminanceRange(e) {
      this.luminanceRange = e;
    }
  },
  qe = class extends N {
    constructor({
      renderTarget: e,
      luminanceRange: t,
      colorOutput: n,
      resolutionScale: r = 1,
      width: i = R.AUTO_SIZE,
      height: a = R.AUTO_SIZE,
      resolutionX: o = i,
      resolutionY: s = a,
    } = {}) {
      (super(`LuminancePass`),
        (this.fullscreenMaterial = new Ke(n, t)),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
          (this.renderTarget.texture.name = `LuminancePass.Target`)));
      let c = (this.resolution = new R(this, o, s, r));
      c.addEventListener(`change`, (e) =>
        this.setSize(c.baseWidth, c.baseHeight),
      );
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
    render(e, t, n, r, i) {
      let a = this.fullscreenMaterial;
      ((a.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      let n = this.resolution;
      (n.setBaseSize(e, t), this.renderTarget.setSize(n.width, n.height));
    }
    initialize(e, t, n) {
      n !== void 0 &&
        n !== 1009 &&
        ((this.renderTarget.texture.type = n),
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`));
    }
  },
  Je = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,
  Ye = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  Xe = class extends r {
    constructor() {
      super({
        name: `DownsamplingMaterial`,
        uniforms: { inputBuffer: new x(null), texelSize: new x(new C()) },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Je,
        vertexShader: Ye,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  Ze = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,
  Qe = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`,
  $e = class extends r {
    constructor() {
      super({
        name: `UpsamplingMaterial`,
        uniforms: {
          inputBuffer: new x(null),
          supportBuffer: new x(null),
          texelSize: new x(new C()),
          radius: new x(0.85),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ze,
        vertexShader: Qe,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    set supportBuffer(e) {
      this.uniforms.supportBuffer.value = e;
    }
    get radius() {
      return this.uniforms.radius.value;
    }
    set radius(e) {
      this.uniforms.radius.value = e;
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  et = class extends N {
    constructor() {
      (super(`MipmapBlurPass`),
        (this.needsSwap = !1),
        (this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Upsampling.Mipmap0`),
        (this.downsamplingMipmaps = []),
        (this.upsamplingMipmaps = []),
        (this.downsamplingMaterial = new Xe()),
        (this.upsamplingMaterial = new $e()),
        (this.resolution = new C()));
    }
    get texture() {
      return this.renderTarget.texture;
    }
    get levels() {
      return this.downsamplingMipmaps.length;
    }
    set levels(e) {
      if (this.levels !== e) {
        let t = this.renderTarget;
        (this.dispose(),
          (this.downsamplingMipmaps = []),
          (this.upsamplingMipmaps = []));
        for (let n = 0; n < e; ++n) {
          let e = t.clone();
          ((e.texture.name = `Downsampling.Mipmap` + n),
            this.downsamplingMipmaps.push(e));
        }
        this.upsamplingMipmaps.push(t);
        for (let n = 1, r = e - 1; n < r; ++n) {
          let e = t.clone();
          ((e.texture.name = `Upsampling.Mipmap` + n),
            this.upsamplingMipmaps.push(e));
        }
        this.setSize(this.resolution.x, this.resolution.y);
      }
    }
    get radius() {
      return this.upsamplingMaterial.radius;
    }
    set radius(e) {
      this.upsamplingMaterial.radius = e;
    }
    render(e, t, n, r, i) {
      let { scene: a, camera: o } = this,
        { downsamplingMaterial: s, upsamplingMaterial: c } = this,
        { downsamplingMipmaps: l, upsamplingMipmaps: u } = this,
        d = t;
      this.fullscreenMaterial = s;
      for (let t = 0, n = l.length; t < n; ++t) {
        let n = l[t];
        (s.setSize(d.width, d.height),
          (s.inputBuffer = d.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n));
      }
      this.fullscreenMaterial = c;
      for (let t = u.length - 1; t >= 0; --t) {
        let n = u[t];
        (c.setSize(d.width, d.height),
          (c.inputBuffer = d.texture),
          (c.supportBuffer = l[t].texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (d = n));
      }
    }
    setSize(e, t) {
      let n = this.resolution;
      n.set(e, t);
      let r = n.width,
        i = n.height;
      for (let e = 0, t = this.downsamplingMipmaps.length; e < t; ++e)
        ((r = Math.round(r * 0.5)),
          (i = Math.round(i * 0.5)),
          this.downsamplingMipmaps[e].setSize(r, i),
          e < this.upsamplingMipmaps.length &&
            this.upsamplingMipmaps[e].setSize(r, i));
    }
    initialize(e, t, n) {
      if (n !== void 0) {
        let t = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
        for (let e of t) e.texture.type = n;
        if (n !== 1009)
          ((this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`),
            (this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`));
        else if (e !== null && e.outputColorSpace === `srgb`)
          for (let e of t) e.texture.colorSpace = f;
      }
    }
    dispose() {
      super.dispose();
      for (let e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))
        e.dispose();
    }
  },
  tt = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,
  nt = class extends B {
    constructor({
      blendFunction: e = z.SCREEN,
      luminanceThreshold: t = 1,
      luminanceSmoothing: n = 0.03,
      mipmapBlur: r = !0,
      intensity: i = 1,
      radius: a = 0.85,
      levels: o = 8,
      kernelSize: s = V.LARGE,
      resolutionScale: c = 0.5,
      width: l = R.AUTO_SIZE,
      height: u = R.AUTO_SIZE,
      resolutionX: d = l,
      resolutionY: f = u,
    } = {}) {
      (super(`BloomEffect`, tt, {
        blendFunction: e,
        uniforms: new Map([
          [`map`, new x(null)],
          [`intensity`, new x(i)],
        ]),
      }),
        (this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `Bloom.Target`),
        (this.blurPass = new H({ kernelSize: s })),
        (this.luminancePass = new qe({ colorOutput: !0 })),
        (this.luminanceMaterial.threshold = t),
        (this.luminanceMaterial.smoothing = n),
        (this.mipmapBlurPass = new et()),
        (this.mipmapBlurPass.enabled = r),
        (this.mipmapBlurPass.radius = a),
        (this.mipmapBlurPass.levels = o),
        (this.uniforms.get(`map`).value = r
          ? this.mipmapBlurPass.texture
          : this.renderTarget.texture));
      let p = (this.resolution = new R(this, d, f, c));
      p.addEventListener(`change`, (e) =>
        this.setSize(p.baseWidth, p.baseHeight),
      );
    }
    get texture() {
      return this.mipmapBlurPass.enabled
        ? this.mipmapBlurPass.texture
        : this.renderTarget.texture;
    }
    getTexture() {
      return this.texture;
    }
    getResolution() {
      return this.resolution;
    }
    getBlurPass() {
      return this.blurPass;
    }
    getLuminancePass() {
      return this.luminancePass;
    }
    get luminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
    }
    getLuminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
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
      return this.blurPass.dithering;
    }
    set dithering(e) {
      this.blurPass.dithering = e;
    }
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(e) {
      this.blurPass.kernelSize = e;
    }
    get distinction() {
      return (console.warn(this.name, `distinction was removed`), 1);
    }
    set distinction(e) {
      console.warn(this.name, `distinction was removed`);
    }
    get intensity() {
      return this.uniforms.get(`intensity`).value;
    }
    set intensity(e) {
      this.uniforms.get(`intensity`).value = e;
    }
    getIntensity() {
      return this.intensity;
    }
    setIntensity(e) {
      this.intensity = e;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    update(e, t, n) {
      let r = this.renderTarget,
        i = this.luminancePass;
      i.enabled
        ? (i.render(e, t),
          this.mipmapBlurPass.enabled
            ? this.mipmapBlurPass.render(e, i.renderTarget)
            : this.blurPass.render(e, i.renderTarget, r))
        : this.mipmapBlurPass.enabled
          ? this.mipmapBlurPass.render(e, t)
          : this.blurPass.render(e, t, r);
    }
    setSize(e, t) {
      let n = this.resolution;
      (n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.blurPass.resolution.copy(n),
        this.luminancePass.setSize(e, t),
        this.mipmapBlurPass.setSize(e, t));
    }
    initialize(e, t, n) {
      (this.blurPass.initialize(e, t, n),
        this.luminancePass.initialize(e, t, n),
        this.mipmapBlurPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = f)));
    }
  },
  rt = `uniform float focus;uniform float dof;uniform float aperture;uniform float maxBlur;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec2 aspectCorrection=vec2(1.0,aspect);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float focusNear=clamp(focus-dof,0.0,1.0);float focusFar=clamp(focus+dof,0.0,1.0);float low=step(linearDepth,focusNear);float high=step(focusFar,linearDepth);float factor=(linearDepth-focusNear)*low+(linearDepth-focusFar)*high;vec2 dofBlur=vec2(clamp(factor*aperture,-maxBlur,maxBlur));vec2 dofblur9=dofBlur*0.9;vec2 dofblur7=dofBlur*0.7;vec2 dofblur4=dofBlur*0.4;vec4 color=inputColor;color+=texture2D(inputBuffer,uv+(vec2(0.0,0.4)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.15,0.37)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.29,0.29)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.37,0.15)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.40,0.0)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.37,-0.15)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.29,-0.29)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.15,-0.37)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.0,-0.4)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.15,0.37)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.29,0.29)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.37,0.15)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.4,0.0)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.37,-0.15)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(-0.29,-0.29)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.15,-0.37)*aspectCorrection)*dofBlur);color+=texture2D(inputBuffer,uv+(vec2(0.15,0.37)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(-0.37,0.15)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(0.37,-0.15)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(-0.15,-0.37)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(-0.15,0.37)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(0.37,0.15)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(-0.37,-0.15)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(0.15,-0.37)*aspectCorrection)*dofblur9);color+=texture2D(inputBuffer,uv+(vec2(0.29,0.29)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(0.40,0.0)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(0.29,-0.29)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(0.0,-0.4)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(-0.29,0.29)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(-0.4,0.0)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(-0.29,-0.29)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(0.0,0.4)*aspectCorrection)*dofblur7);color+=texture2D(inputBuffer,uv+(vec2(0.29,0.29)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(0.4,0.0)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(0.29,-0.29)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(0.0,-0.4)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(-0.29,0.29)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(-0.4,0.0)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(-0.29,-0.29)*aspectCorrection)*dofblur4);color+=texture2D(inputBuffer,uv+(vec2(0.0,0.4)*aspectCorrection)*dofblur4);outputColor=color/41.0;}`,
  it = class extends B {
    constructor({
      blendFunction: e,
      focus: t = 0.5,
      dof: n = 0.02,
      aperture: r = 0.015,
      maxBlur: i = 1,
    } = {}) {
      super(`BokehEffect`, rt, {
        blendFunction: e,
        attributes: F.CONVOLUTION | F.DEPTH,
        uniforms: new Map([
          [`focus`, new x(t)],
          [`dof`, new x(n)],
          [`aperture`, new x(r)],
          [`maxBlur`, new x(i)],
        ]),
      });
    }
  },
  at = `uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(color+vec3(0.5),inputColor.a);}`,
  ot = class extends B {
    constructor({
      blendFunction: e = z.SRC,
      brightness: t = 0,
      contrast: n = 0,
    } = {}) {
      (super(`BrightnessContrastEffect`, at, {
        blendFunction: e,
        uniforms: new Map([
          [`brightness`, new x(t)],
          [`contrast`, new x(n)],
        ]),
      }),
        (this.inputColorSpace = f));
    }
    get brightness() {
      return this.uniforms.get(`brightness`).value;
    }
    set brightness(e) {
      this.uniforms.get(`brightness`).value = e;
    }
    getBrightness() {
      return this.brightness;
    }
    setBrightness(e) {
      this.brightness = e;
    }
    get contrast() {
      return this.uniforms.get(`contrast`).value;
    }
    set contrast(e) {
      this.uniforms.get(`contrast`).value = e;
    }
    getContrast() {
      return this.contrast;
    }
    setContrast(e) {
      this.contrast = e;
    }
  },
  st = `void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(vec3(average(inputColor.rgb)),inputColor.a);}`,
  ct = class extends B {
    constructor(e) {
      super(`ColorAverageEffect`, st, { blendFunction: e });
    }
  },
  lt = `uniform float factor;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(floor(inputColor.rgb*factor+0.5)/factor,inputColor.a);}`,
  ut = class extends B {
    constructor({ blendFunction: e, bits: t = 16 } = {}) {
      (super(`ColorDepthEffect`, lt, {
        blendFunction: e,
        uniforms: new Map([[`factor`, new x(1)]]),
      }),
        (this.bits = 0),
        (this.bitDepth = t));
    }
    get bitDepth() {
      return this.bits;
    }
    set bitDepth(e) {
      ((this.bits = e), (this.uniforms.get(`factor`).value = 2 ** (e / 3)));
    }
    getBitDepth() {
      return this.bitDepth;
    }
    setBitDepth(e) {
      this.bitDepth = e;
    }
  },
  dt = `#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,
  ft = `uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}`,
  pt = class extends B {
    constructor({
      offset: e = new C(0.001, 5e-4),
      radialModulation: t = !1,
      modulationOffset: n = 0.15,
    } = {}) {
      (super(`ChromaticAberrationEffect`, dt, {
        vertexShader: ft,
        attributes: F.CONVOLUTION,
        uniforms: new Map([
          [`offset`, new x(e)],
          [`modulationOffset`, new x(n)],
        ]),
      }),
        (this.radialModulation = t));
    }
    get offset() {
      return this.uniforms.get(`offset`).value;
    }
    set offset(e) {
      this.uniforms.get(`offset`).value = e;
    }
    get radialModulation() {
      return this.defines.has(`RADIAL_MODULATION`);
    }
    set radialModulation(e) {
      (e
        ? this.defines.set(`RADIAL_MODULATION`, `1`)
        : this.defines.delete(`RADIAL_MODULATION`),
        this.setChanged());
    }
    get modulationOffset() {
      return this.uniforms.get(`modulationOffset`).value;
    }
    set modulationOffset(e) {
      this.uniforms.get(`modulationOffset`).value = e;
    }
    getOffset() {
      return this.offset;
    }
    setOffset(e) {
      this.offset = e;
    }
  },
  mt = `void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){
#ifdef INVERTED
vec3 color=vec3(1.0-depth);
#else
vec3 color=vec3(depth);
#endif
outputColor=vec4(color,inputColor.a);}`,
  ht = class extends B {
    constructor({ blendFunction: e = z.SRC, inverted: t = !1 } = {}) {
      (super(`DepthEffect`, mt, { blendFunction: e, attributes: F.DEPTH }),
        (this.inverted = t));
    }
    get inverted() {
      return this.defines.has(`INVERTED`);
    }
    set inverted(e) {
      this.inverted !== e &&
        (e
          ? this.defines.set(`INVERTED`, `1`)
          : this.defines.delete(`INVERTED`),
        this.setChanged());
    }
    isInverted() {
      return this.inverted;
    }
    setInverted(e) {
      this.inverted = e;
    }
  },
  U = { RED: 0, GREEN: 1, BLUE: 2, ALPHA: 3 },
  gt = { DISCARD: 0, MULTIPLY: 1, MULTIPLY_RGB_SET_ALPHA: 2, MULTIPLY_RGB: 3 },
  _t = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,
  vt = class extends r {
    constructor(e = !1, t = !1) {
      (super({
        name: `BokehMaterial`,
        defines: { PASS: e ? `2` : `1` },
        uniforms: {
          inputBuffer: new x(null),
          cocBuffer: new x(null),
          texelSize: new x(new C()),
          kernel64: new x(null),
          kernel16: new x(null),
          scale: new x(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: _t,
        vertexShader: P,
      }),
        t && (this.defines.FOREGROUND = `1`),
        this.generateKernel());
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    set cocBuffer(e) {
      this.uniforms.cocBuffer.value = e;
    }
    setCoCBuffer(e) {
      this.uniforms.cocBuffer.value = e;
    }
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(e) {
      this.uniforms.scale.value = e;
    }
    getScale(e) {
      return this.scale;
    }
    setScale(e) {
      this.scale = e;
    }
    generateKernel() {
      let e = new Float64Array(128),
        t = new Float64Array(32),
        n = 0,
        r = 0;
      for (let i = 0, a = Math.sqrt(80); i < 80; ++i) {
        let o = i * 2.39996323,
          s = Math.sqrt(i) / a,
          c = s * Math.cos(o),
          l = s * Math.sin(o);
        i % 5 == 0
          ? ((t[r++] = c), (t[r++] = l))
          : ((e[n++] = c), (e[n++] = l));
      }
      ((this.uniforms.kernel64.value = e), (this.uniforms.kernel16.value = t));
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t);
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  yt = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform mat4 projectionMatrix;uniform mat4 projectionMatrixInverse;uniform float cameraNear;uniform float cameraFar;uniform float focusDistance;uniform float focusRange;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}
#ifdef PERSPECTIVE_CAMERA
#define getViewZ(depth) perspectiveDepthToViewZ(depth, cameraNear, cameraFar)
#else
#define getViewZ(depth) orthographicDepthToViewZ(depth, cameraNear, cameraFar)
#endif
vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(projectionMatrixInverse*clipPosition).xyz;}vec3 getViewPosition(const in vec2 screenPosition,const in float depth){return getViewPosition(screenPosition,depth,getViewZ(depth));}
#define getDistance(viewPosition) length(viewPosition)
void main(){float depth=readDepth(vUv);vec3 viewPosition=getViewPosition(vUv,depth);float distance=getDistance(viewPosition);float signedDistance=distance-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,
  bt = class extends r {
    constructor(e = null) {
      (super({
        name: `CircleOfConfusionMaterial`,
        defines: { DEPTH_PACKING: `0` },
        uniforms: {
          depthBuffer: new x(null),
          projectionMatrix: new x(null),
          projectionMatrixInverse: new x(null),
          cameraNear: new x(0.3),
          cameraFar: new x(1e3),
          focusDistance: new x(0),
          focusRange: new x(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: yt,
        vertexShader: P,
      }),
        (this.uniforms.focalLength = this.uniforms.focusRange),
        e !== null && this.copyCameraSettings(e));
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = j) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    get focusDistance() {
      return this.uniforms.focusDistance.value;
    }
    set focusDistance(e) {
      this.uniforms.focusDistance.value = e;
    }
    get worldFocusDistance() {
      return this.focusDistance;
    }
    set worldFocusDistance(e) {
      this.focusDistance = e;
    }
    getFocusDistance(e) {
      this.uniforms.focusDistance.value = e;
    }
    setFocusDistance(e) {
      this.uniforms.focusDistance.value = e;
    }
    get focalLength() {
      return this.focusRange;
    }
    set focalLength(e) {
      this.focusRange = e;
    }
    get focusRange() {
      return this.uniforms.focusRange.value;
    }
    set focusRange(e) {
      this.uniforms.focusRange.value = e;
    }
    get worldFocusRange() {
      return this.focusRange;
    }
    set worldFocusRange(e) {
      this.focusRange = e;
    }
    getFocalLength(e) {
      return this.focusRange;
    }
    setFocalLength(e) {
      this.focusRange = e;
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e);
    }
    copyCameraSettings(e) {
      ((this.uniforms.projectionMatrix.value = e.projectionMatrix),
        (this.uniforms.projectionMatrixInverse.value =
          e.projectionMatrixInverse),
        (this.uniforms.cameraNear.value = e.near),
        (this.uniforms.cameraFar.value = e.far));
      let t = this.defines.PERSPECTIVE_CAMERA !== void 0;
      e instanceof b
        ? t || ((this.defines.PERSPECTIVE_CAMERA = !0), (this.needsUpdate = !0))
        : t &&
          (delete this.defines.PERSPECTIVE_CAMERA, (this.needsUpdate = !0));
    }
  },
  xt = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=(mask>0.0)?0.0:1.0;
#else
mask=(mask>0.0)?1.0:0.0;
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,
  St = class extends r {
    constructor(e = null) {
      (super({
        name: `MaskMaterial`,
        uniforms: {
          maskTexture: new x(e),
          inputBuffer: new x(null),
          strength: new x(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: xt,
        vertexShader: P,
      }),
        (this.colorChannel = U.RED),
        (this.maskFunction = gt.DISCARD));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    set maskTexture(e) {
      ((this.uniforms.maskTexture.value = e),
        delete this.defines.MASK_PRECISION_HIGH,
        e.type !== 1009 && (this.defines.MASK_PRECISION_HIGH = `1`),
        (this.needsUpdate = !0));
    }
    setMaskTexture(e) {
      this.maskTexture = e;
    }
    set colorChannel(e) {
      ((this.defines.COLOR_CHANNEL = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setColorChannel(e) {
      this.colorChannel = e;
    }
    set maskFunction(e) {
      ((this.defines.MASK_FUNCTION = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setMaskFunction(e) {
      this.maskFunction = e;
    }
    get inverted() {
      return this.defines.INVERTED !== void 0;
    }
    set inverted(e) {
      (this.inverted && !e
        ? delete this.defines.INVERTED
        : e && (this.defines.INVERTED = `1`),
        (this.needsUpdate = !0));
    }
    isInverted() {
      return this.inverted;
    }
    setInverted(e) {
      this.inverted = e;
    }
    get strength() {
      return this.uniforms.strength.value;
    }
    set strength(e) {
      this.uniforms.strength.value = e;
    }
    getStrength() {
      return this.strength;
    }
    setStrength(e) {
      this.strength = e;
    }
  },
  W = class extends N {
    constructor(e, t = `inputBuffer`) {
      (super(`ShaderPass`), (this.fullscreenMaterial = e), (this.input = t));
    }
    setInput(e) {
      this.input = e;
    }
    render(e, t, n, r, i) {
      let a = this.fullscreenMaterial.uniforms;
      (t !== null &&
        a !== void 0 &&
        a[this.input] !== void 0 &&
        (a[this.input].value = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : n),
        e.render(this.scene, this.camera));
    }
    initialize(e, t, n) {
      n !== void 0 &&
        n !== 1009 &&
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`);
    }
  },
  Ct = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
#if MASK_FUNCTION != 1 && MASK_FUNCTION != 2
uniform lowp sampler2D farCoCBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1 || MASK_FUNCTION == 2
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);colorFar.a*=cocNearFar.y;
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`,
  wt = new k(),
  Tt = class extends B {
    constructor(
      e,
      {
        blendFunction: t,
        worldFocusDistance: n,
        worldFocusRange: r,
        focalLength: i,
        focusDistance: a = n || 3,
        focusRange: o = r || i || 2,
        bokehScale: s = 1,
        resolutionScale: c = 0.5,
        width: l,
        height: u,
        resolutionX: d = l || R.AUTO_SIZE,
        resolutionY: f = u || R.AUTO_SIZE,
      } = {},
    ) {
      (super(`DepthOfFieldEffect`, Ct, {
        blendFunction: t,
        attributes: F.DEPTH,
        uniforms: new Map([
          [`nearColorBuffer`, new x(null)],
          [`farColorBuffer`, new x(null)],
          [`nearCoCBuffer`, new x(null)],
          [`farCoCBuffer`, new x(null)],
          [`scale`, new x(1)],
        ]),
      }),
        (this.camera = e),
        (this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `DoF.Intermediate`),
        (this.renderTargetMasked = this.renderTarget.clone()),
        (this.renderTargetMasked.texture.name = `DoF.Masked.Far`),
        (this.renderTargetNear = this.renderTarget.clone()),
        (this.renderTargetNear.texture.name = `DoF.Bokeh.Near`),
        (this.uniforms.get(`nearColorBuffer`).value =
          this.renderTargetNear.texture),
        (this.renderTargetFar = this.renderTarget.clone()),
        (this.renderTargetFar.texture.name = `DoF.Bokeh.Far`),
        (this.uniforms.get(`farColorBuffer`).value =
          this.renderTargetFar.texture),
        (this.renderTargetCoC = this.renderTarget.clone()),
        (this.renderTargetCoC.texture.name = `DoF.CoC`),
        (this.uniforms.get(`farCoCBuffer`).value =
          this.renderTargetCoC.texture),
        (this.renderTargetCoCBlurred = this.renderTargetCoC.clone()),
        (this.renderTargetCoCBlurred.texture.name = `DoF.CoC.Blurred`),
        (this.uniforms.get(`nearCoCBuffer`).value =
          this.renderTargetCoCBlurred.texture),
        (this.cocPass = new W(new bt(e))));
      let p = this.cocMaterial;
      ((p.focusDistance = a),
        (p.focusRange = o),
        (this.blurPass = new H({
          resolutionScale: c,
          resolutionX: d,
          resolutionY: f,
          kernelSize: V.MEDIUM,
        })),
        (this.maskPass = new W(new St(this.renderTargetCoC.texture))));
      let m = this.maskPass.fullscreenMaterial;
      ((m.colorChannel = U.GREEN),
        (this.maskFunction = gt.MULTIPLY_RGB),
        (this.bokehNearBasePass = new W(new vt(!1, !0))),
        (this.bokehNearBasePass.fullscreenMaterial.cocBuffer =
          this.renderTargetCoCBlurred.texture),
        (this.bokehNearFillPass = new W(new vt(!0, !0))),
        (this.bokehNearFillPass.fullscreenMaterial.cocBuffer =
          this.renderTargetCoCBlurred.texture),
        (this.bokehFarBasePass = new W(new vt(!1, !1))),
        (this.bokehFarBasePass.fullscreenMaterial.cocBuffer =
          this.renderTargetCoC.texture),
        (this.bokehFarFillPass = new W(new vt(!0, !1))),
        (this.bokehFarFillPass.fullscreenMaterial.cocBuffer =
          this.renderTargetCoC.texture),
        (this.target = null));
      let h = (this.resolution = new R(this, d, f, c));
      (h.addEventListener(`change`, (e) =>
        this.setSize(h.baseWidth, h.baseHeight),
      ),
        (this.bokehScale = s));
    }
    set mainCamera(e) {
      ((this.camera = e), this.cocMaterial.copyCameraSettings(e));
    }
    get cocTexture() {
      return this.renderTargetCoC.texture;
    }
    get maskFunction() {
      return this.maskPass.fullscreenMaterial.maskFunction;
    }
    set maskFunction(e) {
      this.maskFunction !== e &&
        (this.defines.set(`MASK_FUNCTION`, e.toFixed(0)),
        (this.maskPass.fullscreenMaterial.maskFunction = e),
        this.setChanged());
    }
    get cocMaterial() {
      return this.cocPass.fullscreenMaterial;
    }
    get circleOfConfusionMaterial() {
      return this.cocMaterial;
    }
    getCircleOfConfusionMaterial() {
      return this.cocMaterial;
    }
    getBlurPass() {
      return this.blurPass;
    }
    getResolution() {
      return this.resolution;
    }
    get bokehScale() {
      return this.uniforms.get(`scale`).value;
    }
    set bokehScale(e) {
      ((this.bokehNearBasePass.fullscreenMaterial.scale = e),
        (this.bokehNearFillPass.fullscreenMaterial.scale = e),
        (this.bokehFarBasePass.fullscreenMaterial.scale = e),
        (this.bokehFarFillPass.fullscreenMaterial.scale = e),
        (this.maskPass.fullscreenMaterial.strength = e),
        (this.uniforms.get(`scale`).value = e));
    }
    getBokehScale() {
      return this.bokehScale;
    }
    setBokehScale(e) {
      this.bokehScale = e;
    }
    getTarget() {
      return this.target;
    }
    setTarget(e) {
      this.target = e;
    }
    calculateFocusDistance(e) {
      return this.camera.getWorldPosition(wt).distanceTo(e);
    }
    setDepthTexture(e, t = j) {
      ((this.cocMaterial.depthBuffer = e), (this.cocMaterial.depthPacking = t));
    }
    update(e, t, n) {
      let r = this.renderTarget,
        i = this.renderTargetCoC,
        a = this.renderTargetCoCBlurred,
        o = this.renderTargetMasked;
      if (this.target !== null) {
        let e = this.calculateFocusDistance(this.target);
        this.cocMaterial.focusDistance = e;
      }
      (this.cocPass.render(e, null, i),
        this.blurPass.render(e, i, a),
        this.maskPass.render(e, t, o),
        this.bokehFarBasePass.render(e, o, r),
        this.bokehFarFillPass.render(e, r, this.renderTargetFar),
        this.bokehNearBasePass.render(e, t, r),
        this.bokehNearFillPass.render(e, r, this.renderTargetNear));
    }
    setSize(e, t) {
      let n = this.resolution;
      n.setBaseSize(e, t);
      let r = n.width,
        i = n.height;
      (this.cocPass.setSize(e, t),
        this.blurPass.setSize(e, t),
        this.maskPass.setSize(e, t),
        this.renderTargetFar.setSize(e, t),
        this.renderTargetCoC.setSize(e, t),
        this.renderTargetMasked.setSize(e, t),
        this.renderTarget.setSize(r, i),
        this.renderTargetNear.setSize(r, i),
        this.renderTargetCoCBlurred.setSize(r, i),
        this.bokehNearBasePass.fullscreenMaterial.setSize(e, t),
        this.bokehNearFillPass.fullscreenMaterial.setSize(e, t),
        this.bokehFarBasePass.fullscreenMaterial.setSize(e, t),
        this.bokehFarFillPass.fullscreenMaterial.setSize(e, t));
    }
    initialize(e, t, n) {
      (this.cocPass.initialize(e, t, n),
        this.maskPass.initialize(e, t, n),
        this.bokehNearBasePass.initialize(e, t, n),
        this.bokehNearFillPass.initialize(e, t, n),
        this.bokehFarBasePass.initialize(e, t, n),
        this.bokehFarFillPass.initialize(e, t, n),
        this.blurPass.initialize(e, t, S),
        e.capabilities.logarithmicDepthBuffer &&
          (this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = `1`),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          (this.renderTargetNear.texture.type = n),
          (this.renderTargetFar.texture.type = n),
          (this.renderTargetMasked.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            ((this.renderTarget.texture.colorSpace = f),
            (this.renderTargetNear.texture.colorSpace = f),
            (this.renderTargetFar.texture.colorSpace = f),
            (this.renderTargetMasked.texture.colorSpace = f))));
    }
  },
  Et = `uniform vec2 angle;uniform float scale;float pattern(const in vec2 uv){vec2 point=scale*vec2(dot(angle.yx,vec2(uv.x,-uv.y)),dot(angle,uv));return(sin(point.x)*sin(point.y))*4.0;}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(inputColor.rgb*10.0-5.0+pattern(uv*resolution));outputColor=vec4(color,inputColor.a);}`,
  Dt = class extends B {
    constructor({
      blendFunction: e,
      angle: t = Math.PI * 0.5,
      scale: n = 1,
    } = {}) {
      (super(`DotScreenEffect`, Et, {
        blendFunction: e,
        uniforms: new Map([
          [`angle`, new x(new C())],
          [`scale`, new x(n)],
        ]),
      }),
        (this.angle = t));
    }
    get angle() {
      return Math.acos(this.uniforms.get(`angle`).value.y);
    }
    set angle(e) {
      this.uniforms.get(`angle`).value.set(Math.sin(e), Math.cos(e));
    }
    getAngle() {
      return this.angle;
    }
    setAngle(e) {
      this.angle = e;
    }
    get scale() {
      return this.uniforms.get(`scale`).value;
    }
    set scale(e) {
      this.uniforms.get(`scale`).value = e;
    }
  },
  Ot = `#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))
#define ONE_OVER_TWELVE 0.08333333333333333
varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;vec4 fxaa(const in vec4 inputColor,const in vec2 uv){float lumaCenter=luminance(inputColor.rgb);float lumaDown=luminance(texture2D(inputBuffer,vUvDown).rgb);float lumaUp=luminance(texture2D(inputBuffer,vUvUp).rgb);float lumaLeft=luminance(texture2D(inputBuffer,vUvLeft).rgb);float lumaRight=luminance(texture2D(inputBuffer,vUvRight).rgb);float lumaMin=min(lumaCenter,min(min(lumaDown,lumaUp),min(lumaLeft,lumaRight)));float lumaMax=max(lumaCenter,max(max(lumaDown,lumaUp),max(lumaLeft,lumaRight)));float lumaRange=lumaMax-lumaMin;if(lumaRange<max(EDGE_THRESHOLD_MIN,lumaMax*EDGE_THRESHOLD_MAX)){return inputColor;}float lumaDownLeft=luminance(texture2D(inputBuffer,vUvDownLeft).rgb);float lumaUpRight=luminance(texture2D(inputBuffer,vUvUpRight).rgb);float lumaUpLeft=luminance(texture2D(inputBuffer,vUvUpLeft).rgb);float lumaDownRight=luminance(texture2D(inputBuffer,vUvDownRight).rgb);float lumaDownUp=lumaDown+lumaUp;float lumaLeftRight=lumaLeft+lumaRight;float lumaLeftCorners=lumaDownLeft+lumaUpLeft;float lumaDownCorners=lumaDownLeft+lumaDownRight;float lumaRightCorners=lumaDownRight+lumaUpRight;float lumaUpCorners=lumaUpRight+lumaUpLeft;float edgeHorizontal=(abs(-2.0*lumaLeft+lumaLeftCorners)+abs(-2.0*lumaCenter+lumaDownUp)*2.0+abs(-2.0*lumaRight+lumaRightCorners));float edgeVertical=(abs(-2.0*lumaUp+lumaUpCorners)+abs(-2.0*lumaCenter+lumaLeftRight)*2.0+abs(-2.0*lumaDown+lumaDownCorners));bool isHorizontal=(edgeHorizontal>=edgeVertical);float stepLength=isHorizontal?texelSize.y:texelSize.x;float luma1=isHorizontal?lumaDown:lumaLeft;float luma2=isHorizontal?lumaUp:lumaRight;float gradient1=abs(luma1-lumaCenter);float gradient2=abs(luma2-lumaCenter);bool is1Steepest=gradient1>=gradient2;float gradientScaled=0.25*max(gradient1,gradient2);float lumaLocalAverage=0.0;if(is1Steepest){stepLength=-stepLength;lumaLocalAverage=0.5*(luma1+lumaCenter);}else{lumaLocalAverage=0.5*(luma2+lumaCenter);}vec2 currentUv=uv;if(isHorizontal){currentUv.y+=stepLength*0.5;}else{currentUv.x+=stepLength*0.5;}vec2 offset=isHorizontal?vec2(texelSize.x,0.0):vec2(0.0,texelSize.y);vec2 uv1=currentUv-offset*QUALITY(0);vec2 uv2=currentUv+offset*QUALITY(0);float lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);float lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd1-=lumaLocalAverage;lumaEnd2-=lumaLocalAverage;bool reached1=abs(lumaEnd1)>=gradientScaled;bool reached2=abs(lumaEnd2)>=gradientScaled;bool reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(1);}if(!reached2){uv2+=offset*QUALITY(1);}if(!reachedBoth){for(int i=2;i<SAMPLES;++i){if(!reached1){lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);lumaEnd1=lumaEnd1-lumaLocalAverage;}if(!reached2){lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd2=lumaEnd2-lumaLocalAverage;}reached1=abs(lumaEnd1)>=gradientScaled;reached2=abs(lumaEnd2)>=gradientScaled;reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(i);}if(!reached2){uv2+=offset*QUALITY(i);}if(reachedBoth){break;}}}float distance1=isHorizontal?(uv.x-uv1.x):(uv.y-uv1.y);float distance2=isHorizontal?(uv2.x-uv.x):(uv2.y-uv.y);bool isDirection1=distance1<distance2;float distanceFinal=min(distance1,distance2);float edgeThickness=(distance1+distance2);bool isLumaCenterSmaller=lumaCenter<lumaLocalAverage;bool correctVariation1=(lumaEnd1<0.0)!=isLumaCenterSmaller;bool correctVariation2=(lumaEnd2<0.0)!=isLumaCenterSmaller;bool correctVariation=isDirection1?correctVariation1:correctVariation2;float pixelOffset=-distanceFinal/edgeThickness+0.5;float finalOffset=correctVariation?pixelOffset:0.0;float lumaAverage=ONE_OVER_TWELVE*(2.0*(lumaDownUp+lumaLeftRight)+lumaLeftCorners+lumaRightCorners);float subPixelOffset1=clamp(abs(lumaAverage-lumaCenter)/lumaRange,0.0,1.0);float subPixelOffset2=(-2.0*subPixelOffset1+3.0)*subPixelOffset1*subPixelOffset1;float subPixelOffsetFinal=subPixelOffset2*subPixelOffset2*SUBPIXEL_QUALITY;finalOffset=max(finalOffset,subPixelOffsetFinal);vec2 finalUv=uv;if(isHorizontal){finalUv.y+=finalOffset*stepLength;}else{finalUv.x+=finalOffset*stepLength;}return texture2D(inputBuffer,finalUv);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=fxaa(inputColor,uv);}`,
  kt = `varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;void mainSupport(const in vec2 uv){vUvDown=uv+vec2(0.0,-1.0)*texelSize;vUvUp=uv+vec2(0.0,1.0)*texelSize;vUvRight=uv+vec2(1.0,0.0)*texelSize;vUvLeft=uv+vec2(-1.0,0.0)*texelSize;vUvDownLeft=uv+vec2(-1.0,-1.0)*texelSize;vUvUpRight=uv+vec2(1.0,1.0)*texelSize;vUvUpLeft=uv+vec2(-1.0,1.0)*texelSize;vUvDownRight=uv+vec2(1.0,-1.0)*texelSize;}`,
  At = class extends B {
    constructor({ blendFunction: e = z.SRC } = {}) {
      super(`FXAAEffect`, Ot, {
        vertexShader: kt,
        blendFunction: e,
        defines: new Map([
          [`EDGE_THRESHOLD_MIN`, `0.0312`],
          [`EDGE_THRESHOLD_MAX`, `0.125`],
          [`SUBPIXEL_QUALITY`, `0.75`],
          [`SAMPLES`, `12`],
        ]),
      });
    }
    get minEdgeThreshold() {
      return Number(this.defines.get(`EDGE_THRESHOLD_MIN`));
    }
    set minEdgeThreshold(e) {
      (this.defines.set(`EDGE_THRESHOLD_MIN`, e.toFixed(12)),
        this.setChanged());
    }
    get maxEdgeThreshold() {
      return Number(this.defines.get(`EDGE_THRESHOLD_MAX`));
    }
    set maxEdgeThreshold(e) {
      (this.defines.set(`EDGE_THRESHOLD_MAX`, e.toFixed(12)),
        this.setChanged());
    }
    get subpixelQuality() {
      return Number(this.defines.get(`SUBPIXEL_QUALITY`));
    }
    set subpixelQuality(e) {
      (this.defines.set(`SUBPIXEL_QUALITY`, e.toFixed(12)), this.setChanged());
    }
    get samples() {
      return Number(this.defines.get(`SAMPLES`));
    }
    set samples(e) {
      (this.defines.set(`SAMPLES`, e.toFixed(0)), this.setChanged());
    }
  },
  jt = `uniform float gamma;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=LinearToGamma(max(inputColor,0.0),gamma);}`,
  Mt = class extends B {
    constructor({ blendFunction: e = z.SRC, gamma: t = 2 } = {}) {
      super(`GammaCorrectionEffect`, jt, {
        blendFunction: e,
        uniforms: new Map([[`gamma`, new x(t)]]),
      });
    }
  },
  Nt = { DISABLED: 0, SPORADIC: 1, CONSTANT_MILD: 2, CONSTANT_WILD: 3 };
