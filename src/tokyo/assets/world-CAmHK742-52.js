// tokyo/assets/world-CAmHK742 52 — dir
// Lines 17266-17507 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var _p = class {
    dir;
    hemi;
    group = new g();
    extra = [];
    sig = null;
    constructor(e, t) {
      ((this.dir = e), (this.hemi = t), (this.group.name = `env-light-rig`));
    }
    sync(e, t) {
      if (this.sig && hp(this.sig, e)) return !1;
      ((this.renderer = t), (this.sig = { ...e }));
      for (let e of this.extra) (this.group.remove(e), e.dispose());
      if (((this.extra.length = 0), e.unsupported))
        return (this.dir && (this.dir.castShadow = !1), !0);
      let n = e.dirShadow,
        r = e.dir,
        i = e.hemi;
      (this.dir &&
        (n > 0
          ? (this.shadowed(this.dir), n--)
          : ((this.dir.castShadow = !1), r > 0 ? r-- : (r = -1))),
        this.hemi && i--);
      let a = (e) => {
        ((e.intensity = 0), this.extra.push(e), this.group.add(e));
      };
      for (let e = 0; e < n; e++) {
        let e = new m(16777215, 0);
        (this.shadowed(e), a(e), this.group.add(e.target));
      }
      for (let e = 0; e < r; e++) a(new m(16777215, 0));
      for (let t = 0; t < e.point; t++) a(new P(16777215, 0, 1, 2));
      for (let t = 0; t < e.spot; t++) a(new x(16777215, 0, 1, 0.5, 0, 2));
      for (let e = 0; e < i; e++) a(new I(16777215, 16777215, 0));
      for (let e of this.extra) e.name = `env-rig-` + e.type;
      return !0;
    }
    renderer = null;
    shadowed(e) {
      if (
        ((e.castShadow = !0),
        (e.shadow.autoUpdate = !1),
        (e.shadow.needsUpdate = !1),
        e.shadow.map)
      )
        return;
      let t = this.renderer,
        n = !t || t.shadowMap.type === 1 || t.shadowMap.type === 2;
      e.shadow.mapSize.set(4, 4);
      let r = new be(4, 4, {
        format: Ee,
        type: _,
        depthBuffer: !0,
        generateMipmaps: !1,
        minFilter: w,
        magFilter: w,
      });
      r.texture.name = `env-rig.shadowMap`;
      let i = new u(4, 4, O);
      if (
        ((i.format = C),
        (i.name = `env-rig.shadowMapDepth`),
        n
          ? ((i.compareFunction = t?.state.buffers.depth.getReversed()
              ? 518
              : 515),
            (i.minFilter = i.magFilter = ge))
          : (i.minFilter = i.magFilter = w),
        (r.depthTexture = i),
        (e.shadow.map = r),
        t)
      ) {
        let e = t.getRenderTarget();
        (t.setRenderTarget(r), t.clear(!0, !0, !1), t.setRenderTarget(e));
      }
    }
    dispose() {
      for (let e of this.extra) e.dispose();
      this.extra.length = 0;
    }
  },
  vp = class {
    scene = new s();
    camera = new i(60, 1, 500, 12e3);
    sun = new m(16777215, 1);
    hemi = new I(16777215, 4473924, 1);
    enabled = !0;
    onPre = null;
    onFarCamera = null;
    nearFrac = 0.8;
    restoreAutoClearColor = null;
    rig = new _p(this.sun, this.hemi);
    constructor() {
      ((this.scene.name = `env-far-layer`),
        (this.scene.matrixWorldAutoUpdate = !0),
        this.scene.add(this.sun, this.sun.target, this.hemi, this.rig.group),
        (this.camera.matrixAutoUpdate = !1),
        (this.camera.matrixWorldAutoUpdate = !1));
    }
    hookBefore = null;
    hookAfter = null;
    mainScene = null;
    mainCamera = null;
    ensureInstalled() {
      let e = this.mainScene;
      e &&
        this.mainCamera &&
        (e.onBeforeRender !== this.hookBefore ||
          e.onAfterRender !== this.hookAfter) &&
        this.install(e, this.mainCamera);
    }
    prevBefore = null;
    prevAfter = null;
    install(e, t) {
      ((this.mainScene = e),
        (this.mainCamera = t),
        e.onBeforeRender !== this.hookBefore &&
          (this.prevBefore = e.onBeforeRender),
        e.onAfterRender !== this.hookAfter &&
          (this.prevAfter = e.onAfterRender));
      let n = this.prevBefore,
        r = this.prevAfter;
      ((e.onBeforeRender = (r, i, a, o, s, c) => {
        (n.call(e, r, i, a, o, s, c),
          a === t && (this.onPre?.(t), this.enabled && this.renderFar(r, t)));
      }),
        (e.onAfterRender = (t, n, i, a, o, s) => {
          (this.restoreAutoClearColor !== null &&
            ((t.autoClearColor = this.restoreAutoClearColor),
            (this.restoreAutoClearColor = null)),
            r.call(e, t, n, i, a, o, s));
        }),
        (this.hookBefore = e.onBeforeRender),
        (this.hookAfter = e.onAfterRender));
    }
    renderFar(e, t) {
      let n = this.camera,
        r = Math.max(50, t.far * this.nearFrac),
        i = Math.max(12e3, t.far * 1.5);
      ((n.fov !== t.fov ||
        n.aspect !== t.aspect ||
        n.near !== r ||
        n.far !== i ||
        n.zoom !== t.zoom) &&
        ((n.fov = t.fov),
        (n.aspect = t.aspect),
        (n.near = r),
        (n.far = i),
        (n.zoom = t.zoom),
        n.updateProjectionMatrix()),
        n.matrixWorld.copy(t.matrixWorld),
        n.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.onFarCamera?.(n));
      let a = e.autoClear;
      ((e.autoClear = !1),
        e.clear(!0, !0, !1),
        e.render(this.scene, n),
        e.clearDepth(),
        (e.autoClear = a),
        this.restoreAutoClearColor === null &&
          (this.restoreAutoClearColor = e.autoClearColor),
        (e.autoClearColor = !1));
    }
  },
  yp = `
float eHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float eHash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float eNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = eHash12(i);
  float b = eHash12(i + vec2(1.0, 0.0));
  float c = eHash12(i + vec2(0.0, 1.0));
  float d = eHash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float eFbm4(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * eNoise(p); p = p * 2.07 + vec2(17.13, 9.71); a *= 0.5; }
  return s;
}
float eFbm5(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * eNoise(p); p = p * 2.03 + vec2(11.7, 5.3); a *= 0.5; }
  return s;
}
`,
  bp = `
uniform vec3 uSkySun;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunset;
uniform vec3 uSunGlow;
`,
  xp = `
vec3 skyBase(vec3 dir) {
  float y = clamp(dir.y, 0.0, 1.0);
  float t = 1.0 - pow(1.0 - y, 2.6);
  vec3 col = mix(uHorizon, uZenith, t);
  float hl = length(dir.xz);
  float sl = length(uSkySun.xz);
  float side = (hl > 1e-4 && sl > 1e-4) ? dot(dir.xz / hl, uSkySun.xz / sl) * 0.5 + 0.5 : 0.5;
  float band = exp(-y * 5.5) * side * side;
  col += uSunset * band;
  float mu = max(dot(dir, uSkySun), 0.0);
  col += uSunGlow * (0.16 * pow(mu, 5.0) + 0.85 * pow(mu, 42.0));
  return col;
}
`;
function Sp() {
  return {
    uSkySun: { value: new U(0, 1, 0) },
    uZenith: { value: new W() },
    uHorizon: { value: new W() },
    uSunset: { value: new W() },
    uSunGlow: { value: new W() },
    uSunDisk: { value: new W() },
    uMoonDir: { value: new U(0, -1, 0) },
    uMoonCol: { value: new W() },
    uCloudLit: { value: new W() },
    uCloudAmb: { value: new W() },
    uCloudCover: { value: 0.3 },
    uStars: { value: 0 },
    uFlash: { value: 0 },
    uFlashDir: { value: new U(1, 0.2, 0).normalize() },
    uWindOff: { value: new ve() },
    uSkyTime: { value: 0 },
    uGround: { value: new W(0.08, 0.075, 0.07) },
    uEnvMode: { value: 0 },
    uRainbow: { value: 0 },
    uShafts: { value: 0 },
  };
}
