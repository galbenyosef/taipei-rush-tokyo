// tokyo/assets/postfx-BzHvx3aB 12 — uniforms
// Lines 6198-8455 of readable/tokyo/assets/postfx-BzHvx3aB.pretty.js (statement-aligned).
var rr = `#include <common>
#include <packing>
uniform vec2 cameraNearFar;
#define cameraNear cameraNearFar.x
#define cameraFar cameraNearFar.y
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){float depth=texture2D(normalDepthBuffer,uv).a;
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#else
uniform lowp sampler2D normalBuffer;
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}
#endif
uniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);
#ifdef PERSPECTIVE_CAMERA
float linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearSampleDepth=sampleDepth;
#endif
float proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){
#ifdef NORMAL_DEPTH
vec4 normalDepth=texture2D(normalDepthBuffer,vUv);
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,normalDepth.a*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);normalDepth.a=a+b/d;
#endif
#else
vec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));
#endif
float ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);
#ifdef PERSPECTIVE_CAMERA
float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
if(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);
#ifdef LEGACY_INTENSITY
ao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);
#endif
}gl_FragColor.r=ao;}`,
  ir = `uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}`,
  ar = class extends u {
    constructor(e) {
      (super({
        name: `SSAOMaterial`,
        defines: {
          SAMPLES_INT: `0`,
          INV_SAMPLES_FLOAT: `0.0`,
          SPIRAL_TURNS: `0.0`,
          RADIUS: `1.0`,
          RADIUS_SQ: `1.0`,
          DISTANCE_SCALING: `1`,
          DEPTH_PACKING: `0`,
        },
        uniforms: {
          depthBuffer: new c(null),
          normalBuffer: new c(null),
          normalDepthBuffer: new c(null),
          noiseTexture: new c(null),
          inverseProjectionMatrix: new c(new ce()),
          projectionMatrix: new c(new ce()),
          texelSize: new c(new D()),
          cameraNearFar: new c(new D()),
          distanceCutoff: new c(new D()),
          proximityCutoff: new c(new D()),
          noiseScale: new c(new D()),
          minRadiusScale: new c(0.33),
          intensity: new c(1),
          fade: new c(0.01),
          bias: new c(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: rr,
        vertexShader: ir,
      }),
        this.copyCameraSettings(e),
        (this.resolution = new D()),
        (this.r = 1));
    }
    get near() {
      return this.uniforms.cameraNearFar.value.x;
    }
    get far() {
      return this.uniforms.cameraNearFar.value.y;
    }
    set normalDepthBuffer(e) {
      ((this.uniforms.normalDepthBuffer.value = e),
        e === null
          ? delete this.defines.NORMAL_DEPTH
          : (this.defines.NORMAL_DEPTH = `1`),
        (this.needsUpdate = !0));
    }
    setNormalDepthBuffer(e) {
      this.normalDepthBuffer = e;
    }
    set normalBuffer(e) {
      this.uniforms.normalBuffer.value = e;
    }
    setNormalBuffer(e) {
      this.uniforms.normalBuffer.value = e;
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = A) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    set noiseTexture(e) {
      this.uniforms.noiseTexture.value = e;
    }
    setNoiseTexture(e) {
      this.uniforms.noiseTexture.value = e;
    }
    get samples() {
      return Number(this.defines.SAMPLES_INT);
    }
    set samples(e) {
      ((this.defines.SAMPLES_INT = e.toFixed(0)),
        (this.defines.INV_SAMPLES_FLOAT = (1 / e).toFixed(9)),
        (this.needsUpdate = !0));
    }
    getSamples() {
      return this.samples;
    }
    setSamples(e) {
      this.samples = e;
    }
    get rings() {
      return Number(this.defines.SPIRAL_TURNS);
    }
    set rings(e) {
      ((this.defines.SPIRAL_TURNS = e.toFixed(1)), (this.needsUpdate = !0));
    }
    getRings() {
      return this.rings;
    }
    setRings(e) {
      this.rings = e;
    }
    get intensity() {
      return this.uniforms.intensity.value;
    }
    set intensity(e) {
      ((this.uniforms.intensity.value = e),
        this.defines.LEGACY_INTENSITY === void 0 &&
          ((this.defines.LEGACY_INTENSITY = `1`), (this.needsUpdate = !0)));
    }
    getIntensity() {
      return this.uniforms.intensity.value;
    }
    setIntensity(e) {
      this.uniforms.intensity.value = e;
    }
    get fade() {
      return this.uniforms.fade.value;
    }
    set fade(e) {
      this.uniforms.fade.value = e;
    }
    getFade() {
      return this.uniforms.fade.value;
    }
    setFade(e) {
      this.uniforms.fade.value = e;
    }
    get bias() {
      return this.uniforms.bias.value;
    }
    set bias(e) {
      this.uniforms.bias.value = e;
    }
    getBias() {
      return this.uniforms.bias.value;
    }
    setBias(e) {
      this.uniforms.bias.value = e;
    }
    get minRadiusScale() {
      return this.uniforms.minRadiusScale.value;
    }
    set minRadiusScale(e) {
      this.uniforms.minRadiusScale.value = e;
    }
    getMinRadiusScale() {
      return this.uniforms.minRadiusScale.value;
    }
    setMinRadiusScale(e) {
      this.uniforms.minRadiusScale.value = e;
    }
    updateRadius() {
      let e = this.r * this.resolution.height;
      ((this.defines.RADIUS = e.toFixed(11)),
        (this.defines.RADIUS_SQ = (e * e).toFixed(11)),
        (this.needsUpdate = !0));
    }
    get radius() {
      return this.r;
    }
    set radius(e) {
      ((this.r = Math.min(Math.max(e, 1e-6), 1)), this.updateRadius());
    }
    getRadius() {
      return this.radius;
    }
    setRadius(e) {
      this.radius = e;
    }
    get distanceScaling() {
      return !0;
    }
    set distanceScaling(e) {}
    isDistanceScalingEnabled() {
      return this.distanceScaling;
    }
    setDistanceScalingEnabled(e) {
      this.distanceScaling = e;
    }
    get distanceThreshold() {
      return this.uniforms.distanceCutoff.value.x;
    }
    set distanceThreshold(e) {
      this.uniforms.distanceCutoff.value.set(
        Math.min(Math.max(e, 0), 1),
        Math.min(Math.max(e + this.distanceFalloff, 0), 1),
      );
    }
    get worldDistanceThreshold() {
      return -tr(this.distanceThreshold, this.near, this.far);
    }
    set worldDistanceThreshold(e) {
      this.distanceThreshold = nr(-e, this.near, this.far);
    }
    get distanceFalloff() {
      return this.uniforms.distanceCutoff.value.y - this.distanceThreshold;
    }
    set distanceFalloff(e) {
      this.uniforms.distanceCutoff.value.y = Math.min(
        Math.max(this.distanceThreshold + e, 0),
        1,
      );
    }
    get worldDistanceFalloff() {
      return -tr(this.distanceFalloff, this.near, this.far);
    }
    set worldDistanceFalloff(e) {
      this.distanceFalloff = nr(-e, this.near, this.far);
    }
    setDistanceCutoff(e, t) {
      this.uniforms.distanceCutoff.value.set(
        Math.min(Math.max(e, 0), 1),
        Math.min(Math.max(e + t, 0), 1),
      );
    }
    get proximityThreshold() {
      return this.uniforms.proximityCutoff.value.x;
    }
    set proximityThreshold(e) {
      this.uniforms.proximityCutoff.value.set(
        Math.min(Math.max(e, 0), 1),
        Math.min(Math.max(e + this.proximityFalloff, 0), 1),
      );
    }
    get worldProximityThreshold() {
      return -tr(this.proximityThreshold, this.near, this.far);
    }
    set worldProximityThreshold(e) {
      this.proximityThreshold = nr(-e, this.near, this.far);
    }
    get proximityFalloff() {
      return this.uniforms.proximityCutoff.value.y - this.proximityThreshold;
    }
    set proximityFalloff(e) {
      this.uniforms.proximityCutoff.value.y = Math.min(
        Math.max(this.proximityThreshold + e, 0),
        1,
      );
    }
    get worldProximityFalloff() {
      return -tr(this.proximityFalloff, this.near, this.far);
    }
    set worldProximityFalloff(e) {
      this.proximityFalloff = nr(-e, this.near, this.far);
    }
    setProximityCutoff(e, t) {
      this.uniforms.proximityCutoff.value.set(
        Math.min(Math.max(e, 0), 1),
        Math.min(Math.max(e + t, 0), 1),
      );
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t);
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e);
    }
    copyCameraSettings(e) {
      e &&
        (this.uniforms.cameraNearFar.value.set(e.near, e.far),
        this.uniforms.projectionMatrix.value.copy(e.projectionMatrix),
        this.uniforms.inverseProjectionMatrix.value
          .copy(e.projectionMatrix)
          .invert(),
        e instanceof n
          ? (this.defines.PERSPECTIVE_CAMERA = `1`)
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0));
    }
    setSize(e, t) {
      let n = this.uniforms,
        r = n.noiseTexture.value;
      (r !== null &&
        n.noiseScale.value.set(e / r.image.width, t / r.image.height),
        n.texelSize.value.set(1 / e, 1 / t),
        this.resolution.set(e, t),
        this.updateRadius());
    }
  },
  or = `#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`,
  sr = `uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}`,
  cr = class extends u {
    constructor() {
      super({
        name: `DepthDownsamplingMaterial`,
        defines: { DEPTH_PACKING: `0` },
        uniforms: {
          depthBuffer: new c(null),
          normalBuffer: new c(null),
          texelSize: new c(new D()),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: or,
        vertexShader: sr,
      });
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = A) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    set normalBuffer(e) {
      ((this.uniforms.normalBuffer.value = e),
        e === null
          ? delete this.defines.DOWNSAMPLE_NORMALS
          : (this.defines.DOWNSAMPLE_NORMALS = `1`),
        (this.needsUpdate = !0));
    }
    setNormalBuffer(e) {
      this.normalBuffer = e;
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t);
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  lr = class extends M {
    constructor({
      normalBuffer: e = null,
      resolutionScale: t = 0.5,
      width: n = L.AUTO_SIZE,
      height: r = L.AUTO_SIZE,
      resolutionX: i = n,
      resolutionY: a = r,
    } = {}) {
      super(`DepthDownsamplingPass`);
      let o = new cr();
      ((o.normalBuffer = e),
        (this.fullscreenMaterial = o),
        (this.needsDepthTexture = !0),
        (this.needsSwap = !1),
        (this.renderTarget = new O(1, 1, {
          minFilter: l,
          magFilter: l,
          depthBuffer: !1,
          type: g,
        })),
        (this.renderTarget.texture.name = `DepthDownsamplingPass.Target`),
        (this.renderTarget.texture.generateMipmaps = !1));
      let s = (this.resolution = new L(this, i, a, t));
      s.addEventListener(`change`, (e) =>
        this.setSize(s.baseWidth, s.baseHeight),
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
    setDepthTexture(e, t = A) {
      ((this.fullscreenMaterial.depthBuffer = e),
        (this.fullscreenMaterial.depthPacking = t));
    }
    render(e, t, n, r, i) {
      (e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      let n = this.resolution;
      (n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.fullscreenMaterial.setSize(e, t));
    }
    initialize(e, t, n) {
      let r = e.getContext();
      if (!(
        r.getExtension(`EXT_color_buffer_float`) ||
        r.getExtension(`EXT_color_buffer_half_float`)
      ))
        throw Error(`Rendering to float texture is not supported.`);
    }
  },
  ur = `uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH)
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
#endif
#ifdef COLORIZE
uniform vec3 color;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){float aoLinear=texture2D(aoBuffer,uv).r;
#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH) && __VERSION__ == 300
vec4 normalDepth[4];normalDepth[0]=textureOffset(normalDepthBuffer,uv,ivec2(0,0));normalDepth[1]=textureOffset(normalDepthBuffer,uv,ivec2(0,1));normalDepth[2]=textureOffset(normalDepthBuffer,uv,ivec2(1,0));normalDepth[3]=textureOffset(normalDepthBuffer,uv,ivec2(1,1));float dot01=dot(normalDepth[0].rgb,normalDepth[1].rgb);float dot02=dot(normalDepth[0].rgb,normalDepth[2].rgb);float dot03=dot(normalDepth[0].rgb,normalDepth[3].rgb);float minDot=min(dot01,min(dot02,dot03));float s=step(THRESHOLD,minDot);float smallestDistance=1.0;int index;for(int i=0;i<4;++i){float distance=abs(depth-normalDepth[i].a);if(distance<smallestDistance){smallestDistance=distance;index=i;}}ivec2 offsets[4];offsets[0]=ivec2(0,0);offsets[1]=ivec2(0,1);offsets[2]=ivec2(1,0);offsets[3]=ivec2(1,1);ivec2 coord=ivec2(uv*vec2(textureSize(aoBuffer,0)))+offsets[index];float aoNearest=texelFetch(aoBuffer,coord,0).r;float ao=mix(aoNearest,aoLinear,s);
#else
float ao=aoLinear;
#endif
float l=luminance(inputColor.rgb);ao=mix(ao,0.0,l*luminanceInfluence);ao=clamp(ao*intensity,0.0,1.0);
#ifdef COLORIZE
outputColor=vec4(1.0-ao*(1.0-color),inputColor.a);
#else
outputColor=vec4(vec3(1.0-ao),inputColor.a);
#endif
}`,
  dr = 64,
  fr = class extends z {
    constructor(
      e,
      t,
      {
        blendFunction: n = R.MULTIPLY,
        samples: r = 9,
        rings: i = 7,
        normalDepthBuffer: a = null,
        depthAwareUpsampling: o = !0,
        worldDistanceThreshold: s,
        worldDistanceFalloff: l,
        worldProximityThreshold: u,
        worldProximityFalloff: d,
        distanceThreshold: f = 0.97,
        distanceFalloff: p = 0.03,
        rangeThreshold: m = 5e-4,
        rangeFalloff: h = 0.001,
        minRadiusScale: g = 0.1,
        luminanceInfluence: _ = 0.7,
        radius: v = 0.1825,
        intensity: y = 1,
        bias: x = 0.025,
        fade: ee = 0.01,
        color: C = null,
        resolutionScale: w = 1,
        width: te = L.AUTO_SIZE,
        height: T = L.AUTO_SIZE,
        resolutionX: ne = te,
        resolutionY: re = T,
      } = {},
    ) {
      (super(`SSAOEffect`, ur, {
        blendFunction: n,
        attributes: P.DEPTH,
        defines: new Map([[`THRESHOLD`, `0.997`]]),
        uniforms: new Map([
          [`aoBuffer`, new c(null)],
          [`normalDepthBuffer`, new c(a)],
          [`luminanceInfluence`, new c(_)],
          [`color`, new c(null)],
          [`intensity`, new c(y)],
          [`scale`, new c(0)],
        ]),
      }),
        (this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `AO.Target`),
        (this.uniforms.get(`aoBuffer`).value = this.renderTarget.texture));
      let ie = (this.resolution = new L(this, ne, re, w));
      (ie.addEventListener(`change`, (e) =>
        this.setSize(ie.baseWidth, ie.baseHeight),
      ),
        (this.camera = e),
        (this.depthDownsamplingPass = new lr({
          normalBuffer: t,
          resolutionScale: w,
        })),
        (this.depthDownsamplingPass.enabled = a === null),
        (this.ssaoPass = new U(new ar(e))));
      let E = new Ft(dr, dr, S);
      E.wrapS = E.wrapT = b;
      let D = this.ssaoMaterial;
      ((D.normalBuffer = t),
        (D.noiseTexture = E),
        (D.minRadiusScale = g),
        (D.samples = r),
        (D.radius = v),
        (D.rings = i),
        (D.fade = ee),
        (D.bias = x),
        (D.distanceThreshold = f),
        (D.distanceFalloff = p),
        (D.proximityThreshold = m),
        (D.proximityFalloff = h),
        s !== void 0 && (D.worldDistanceThreshold = s),
        l !== void 0 && (D.worldDistanceFalloff = l),
        u !== void 0 && (D.worldProximityThreshold = u),
        d !== void 0 && (D.worldProximityFalloff = d),
        a !== null &&
          ((this.ssaoMaterial.normalDepthBuffer = a),
          this.defines.set(`NORMAL_DEPTH`, `1`)),
        (this.depthAwareUpsampling = o),
        (this.color = C));
    }
    set mainCamera(e) {
      ((this.camera = e), this.ssaoMaterial.copyCameraSettings(e));
    }
    get normalBuffer() {
      return this.ssaoMaterial.normalBuffer;
    }
    set normalBuffer(e) {
      ((this.ssaoMaterial.normalBuffer = e),
        (this.depthDownsamplingPass.fullscreenMaterial.normalBuffer = e));
    }
    getResolution() {
      return this.resolution;
    }
    get ssaoMaterial() {
      return this.ssaoPass.fullscreenMaterial;
    }
    getSSAOMaterial() {
      return this.ssaoMaterial;
    }
    get samples() {
      return this.ssaoMaterial.samples;
    }
    set samples(e) {
      this.ssaoMaterial.samples = e;
    }
    get rings() {
      return this.ssaoMaterial.rings;
    }
    set rings(e) {
      this.ssaoMaterial.rings = e;
    }
    get radius() {
      return this.ssaoMaterial.radius;
    }
    set radius(e) {
      this.ssaoMaterial.radius = e;
    }
    get depthAwareUpsampling() {
      return this.defines.has(`DEPTH_AWARE_UPSAMPLING`);
    }
    set depthAwareUpsampling(e) {
      this.depthAwareUpsampling !== e &&
        (e
          ? this.defines.set(`DEPTH_AWARE_UPSAMPLING`, `1`)
          : this.defines.delete(`DEPTH_AWARE_UPSAMPLING`),
        this.setChanged());
    }
    isDepthAwareUpsamplingEnabled() {
      return this.depthAwareUpsampling;
    }
    setDepthAwareUpsamplingEnabled(e) {
      this.depthAwareUpsampling = e;
    }
    get distanceScaling() {
      return !0;
    }
    set distanceScaling(e) {}
    get color() {
      return this.uniforms.get(`color`).value;
    }
    set color(e) {
      let t = this.uniforms,
        n = this.defines;
      e === null
        ? n.has(`COLORIZE`) &&
          (n.delete(`COLORIZE`),
          (t.get(`color`).value = null),
          this.setChanged())
        : n.has(`COLORIZE`)
          ? t.get(`color`).value.set(e)
          : (n.set(`COLORIZE`, `1`),
            (t.get(`color`).value = new j(e)),
            this.setChanged());
    }
    get luminanceInfluence() {
      return this.uniforms.get(`luminanceInfluence`).value;
    }
    set luminanceInfluence(e) {
      this.uniforms.get(`luminanceInfluence`).value = e;
    }
    get intensity() {
      return this.uniforms.get(`intensity`).value;
    }
    set intensity(e) {
      this.uniforms.get(`intensity`).value = e;
    }
    getColor() {
      return this.color;
    }
    setColor(e) {
      this.color = e;
    }
    setDistanceCutoff(e, t) {
      ((this.ssaoMaterial.distanceThreshold = e),
        (this.ssaoMaterial.distanceFalloff = t));
    }
    setProximityCutoff(e, t) {
      ((this.ssaoMaterial.proximityThreshold = e),
        (this.ssaoMaterial.proximityFalloff = t));
    }
    setDepthTexture(e, t = A) {
      (this.depthDownsamplingPass.setDepthTexture(e, t),
        (this.ssaoMaterial.depthBuffer = e),
        (this.ssaoMaterial.depthPacking = t));
    }
    update(e, t, n) {
      let r = this.renderTarget;
      (this.depthDownsamplingPass.enabled &&
        this.depthDownsamplingPass.render(e),
        this.ssaoPass.render(e, null, r));
    }
    setSize(e, t) {
      let n = this.resolution;
      n.setBaseSize(e, t);
      let r = n.width,
        i = n.height;
      (this.ssaoMaterial.copyCameraSettings(this.camera),
        this.ssaoMaterial.setSize(r, i),
        this.renderTarget.setSize(r, i),
        (this.depthDownsamplingPass.resolution.scale = n.scale),
        this.depthDownsamplingPass.setSize(e, t));
    }
    initialize(e, t, n) {
      try {
        let r = this.uniforms.get(`normalDepthBuffer`).value;
        r === null &&
          (this.depthDownsamplingPass.initialize(e, t, n),
          (r = this.depthDownsamplingPass.texture),
          (this.uniforms.get(`normalDepthBuffer`).value = r),
          (this.ssaoMaterial.normalDepthBuffer = r),
          this.defines.set(`NORMAL_DEPTH`, `1`));
      } catch {
        this.depthDownsamplingPass.enabled = !1;
      }
    }
  },
  pr = `#ifdef TEXTURE_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
varying vec2 vUv2;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#ifdef UV_TRANSFORM
vec4 texel=texture2D(map,vUv2);
#else
vec4 texel=texture2D(map,uv);
#endif
outputColor=TEXEL;outputColor.a=max(inputColor.a,outputColor.a);}`,
  mr = `#ifdef ASPECT_CORRECTION
uniform float scale;
#else
uniform mat3 uvTransform;
#endif
varying vec2 vUv2;void mainSupport(const in vec2 uv){
#ifdef ASPECT_CORRECTION
vUv2=uv*vec2(aspect,1.0)*scale;
#else
vUv2=(uvTransform*vec3(uv,1.0)).xy;
#endif
}`,
  hr = class extends z {
    constructor({
      blendFunction: e,
      texture: t = null,
      aspectCorrection: n = !1,
    } = {}) {
      (super(`TextureEffect`, pr, {
        blendFunction: e,
        defines: new Map([[`TEXEL`, `texel`]]),
        uniforms: new Map([
          [`map`, new c(null)],
          [`scale`, new c(1)],
          [`uvTransform`, new c(null)],
        ]),
      }),
        (this.texture = t),
        (this.aspectCorrection = n));
    }
    get texture() {
      return this.uniforms.get(`map`).value;
    }
    set texture(e) {
      let t = this.texture,
        n = this.uniforms,
        r = this.defines;
      t !== e &&
        ((n.get(`map`).value = e),
        (n.get(`uvTransform`).value = e.matrix),
        r.delete(`TEXTURE_PRECISION_HIGH`),
        e !== null &&
          (e.matrixAutoUpdate
            ? (r.set(`UV_TRANSFORM`, `1`), this.setVertexShader(mr))
            : (r.delete(`UV_TRANSFORM`), this.setVertexShader(null)),
          e.type !== 1009 && r.set(`TEXTURE_PRECISION_HIGH`, `1`),
          (t === null || t.type !== e.type || t.encoding !== e.encoding) &&
            this.setChanged()));
    }
    getTexture() {
      return this.texture;
    }
    setTexture(e) {
      this.texture = e;
    }
    get aspectCorrection() {
      return this.defines.has(`ASPECT_CORRECTION`);
    }
    set aspectCorrection(e) {
      this.aspectCorrection !== e &&
        (e
          ? this.defines.set(`ASPECT_CORRECTION`, `1`)
          : this.defines.delete(`ASPECT_CORRECTION`),
        this.setChanged());
    }
    get uvTransform() {
      return this.texture !== null && this.texture.matrixAutoUpdate;
    }
    set uvTransform(e) {
      this.texture !== null && (this.texture.matrixAutoUpdate = e);
    }
    setTextureSwizzleRGBA(e, t = e, n = e, r = e) {
      let i = `rgba`,
        a = ``;
      ((e !== H.RED || t !== H.GREEN || n !== H.BLUE || r !== H.ALPHA) &&
        (a = [`.`, i[e], i[t], i[n], i[r]].join(``)),
        this.defines.set(`TEXEL`, `texel` + a),
        this.setChanged());
    }
    update(e, t, n) {
      let r = this.texture;
      r !== null && r.matrixAutoUpdate && r.updateMatrix();
    }
  },
  gr = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec4 maskParams;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;float linearGradientMask(const in float x){return smoothstep(maskParams.x,maskParams.y,x)-smoothstep(maskParams.w,maskParams.z,x);}void main(){vec2 dUv=vOffset*(1.0-linearGradientMask(vUv2.y));vec4 sum=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y-dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y-dUv.y));gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  _r = `uniform vec4 texelSize;uniform float kernel;uniform float scale;uniform float aspect;uniform vec2 rotation;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;void main(){vec2 uv=position.xy*0.5+0.5;vUv=uv;vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));vOffset=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;gl_Position=vec4(position.xy,1.0,1.0);}`,
  vr = class extends Ge {
    constructor({
      kernelSize: e = B.MEDIUM,
      offset: t = 0,
      rotation: n = 0,
      focusArea: r = 0.4,
      feather: i = 0.3,
    } = {}) {
      (super(),
        (this.fragmentShader = gr),
        (this.vertexShader = _r),
        (this.kernelSize = e),
        (this.uniforms.aspect = new c(1)),
        (this.uniforms.rotation = new c(new D())),
        (this.uniforms.maskParams = new c(new T())),
        (this._offset = t),
        (this._focusArea = r),
        (this._feather = i),
        (this.rotation = n),
        this.updateParams());
    }
    updateParams() {
      let e = this.uniforms.maskParams.value,
        t = Math.max(this.focusArea, 0),
        n = Math.max(t - this.feather, 0);
      e.set(this.offset - t, this.offset - n, this.offset + t, this.offset + n);
    }
    get rotation() {
      return Math.acos(this.uniforms.rotation.value.x);
    }
    set rotation(e) {
      this.uniforms.rotation.value.set(Math.cos(e), Math.sin(e));
    }
    get offset() {
      return this._offset;
    }
    set offset(e) {
      ((this._offset = e), this.updateParams());
    }
    get focusArea() {
      return this._focusArea;
    }
    set focusArea(e) {
      ((this._focusArea = e), this.updateParams());
    }
    get feather() {
      return this._feather;
    }
    set feather(e) {
      ((this._feather = e), this.updateParams());
    }
    setSize(e, t) {
      (super.setSize(e, t), (this.uniforms.aspect.value = e / t));
    }
  },
  yr = class extends V {
    constructor({
      offset: e = 0,
      rotation: t = 0,
      focusArea: n = 0.4,
      feather: r = 0.3,
      kernelSize: i = B.MEDIUM,
      resolutionScale: a = 0.5,
      resolutionX: o = L.AUTO_SIZE,
      resolutionY: s = L.AUTO_SIZE,
    } = {}) {
      (super({
        kernelSize: i,
        resolutionScale: a,
        resolutionX: o,
        resolutionY: s,
      }),
        (this.blurMaterial = new vr({
          kernelSize: i,
          offset: e,
          rotation: t,
          focusArea: n,
          feather: r,
        })));
    }
  },
  br = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform vec2 maskParams;varying vec2 vUv2;float linearGradientMask(const in float x){return step(maskParams.x,x)-step(maskParams.y,x);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float mask=linearGradientMask(vUv2.y);vec4 texel=texture2D(map,uv);outputColor=mix(texel,inputColor,mask);}`,
  xr = `uniform vec2 rotation;varying vec2 vUv2;void mainSupport(const in vec2 uv){vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));}`,
  Sr = class extends z {
    constructor({
      blendFunction: e,
      offset: t = 0,
      rotation: n = 0,
      focusArea: r = 0.4,
      feather: i = 0.3,
      kernelSize: a = B.MEDIUM,
      resolutionScale: o = 0.5,
      resolutionX: s = L.AUTO_SIZE,
      resolutionY: l = L.AUTO_SIZE,
    } = {}) {
      (super(`TiltShiftEffect`, br, {
        vertexShader: xr,
        blendFunction: e,
        uniforms: new Map([
          [`rotation`, new c(new D())],
          [`maskParams`, new c(new D())],
          [`map`, new c(null)],
        ]),
      }),
        (this._offset = t),
        (this._focusArea = r),
        (this._feather = i),
        (this.renderTarget = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = `TiltShift.Target`),
        (this.uniforms.get(`map`).value = this.renderTarget.texture),
        (this.blurPass = new yr({
          kernelSize: a,
          resolutionScale: o,
          resolutionX: s,
          resolutionY: l,
          offset: t,
          rotation: n,
          focusArea: r,
          feather: i,
        })));
      let u = (this.resolution = new L(this, s, l, o));
      (u.addEventListener(`change`, (e) =>
        this.setSize(u.baseWidth, u.baseHeight),
      ),
        (this.rotation = n),
        this.updateParams());
    }
    updateParams() {
      let e = this.uniforms.get(`maskParams`).value,
        t = Math.max(this.focusArea - this.feather, 0);
      e.set(this.offset - t, this.offset + t);
    }
    get rotation() {
      return Math.acos(this.uniforms.get(`rotation`).value.x);
    }
    set rotation(e) {
      (this.uniforms.get(`rotation`).value.set(Math.cos(e), Math.sin(e)),
        (this.blurPass.blurMaterial.rotation = e));
    }
    get offset() {
      return this._offset;
    }
    set offset(e) {
      ((this._offset = e),
        (this.blurPass.blurMaterial.offset = e),
        this.updateParams());
    }
    get focusArea() {
      return this._focusArea;
    }
    set focusArea(e) {
      ((this._focusArea = e),
        (this.blurPass.blurMaterial.focusArea = e),
        this.updateParams());
    }
    get feather() {
      return this._feather;
    }
    set feather(e) {
      ((this._feather = e),
        (this.blurPass.blurMaterial.feather = e),
        this.updateParams());
    }
    get bias() {
      return 0;
    }
    set bias(e) {}
    update(e, t, n) {
      this.blurPass.render(e, t, this.renderTarget);
    }
    setSize(e, t) {
      let n = this.resolution;
      (n.setBaseSize(e, t),
        this.renderTarget.setSize(n.width, n.height),
        this.blurPass.resolution.copy(n));
    }
    initialize(e, t, n) {
      (this.blurPass.initialize(e, t, n),
        n !== void 0 &&
          ((this.renderTarget.texture.type = n),
          e !== null &&
            e.outputColorSpace === `srgb` &&
            (this.renderTarget.texture.colorSpace = a)));
    }
  },
  Cr = `#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,
  wr = class extends u {
    constructor() {
      super({
        name: `AdaptiveLuminanceMaterial`,
        defines: { MIP_LEVEL_1X1: `0.0` },
        uniforms: {
          luminanceBuffer0: new c(null),
          luminanceBuffer1: new c(null),
          minLuminance: new c(0.01),
          deltaTime: new c(0),
          tau: new c(1),
        },
        extensions: { shaderTextureLOD: !0 },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Cr,
        vertexShader: N,
      });
    }
    set luminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e;
    }
    setLuminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e;
    }
    set luminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e;
    }
    setLuminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e;
    }
    set mipLevel1x1(e) {
      ((this.defines.MIP_LEVEL_1X1 = e.toFixed(1)), (this.needsUpdate = !0));
    }
    setMipLevel1x1(e) {
      this.mipLevel1x1 = e;
    }
    set deltaTime(e) {
      this.uniforms.deltaTime.value = e;
    }
    setDeltaTime(e) {
      this.uniforms.deltaTime.value = e;
    }
    get minLuminance() {
      return this.uniforms.minLuminance.value;
    }
    set minLuminance(e) {
      this.uniforms.minLuminance.value = e;
    }
    getMinLuminance() {
      return this.uniforms.minLuminance.value;
    }
    setMinLuminance(e) {
      this.uniforms.minLuminance.value = e;
    }
    get adaptationRate() {
      return this.uniforms.tau.value;
    }
    set adaptationRate(e) {
      this.uniforms.tau.value = e;
    }
    getAdaptationRate() {
      return this.uniforms.tau.value;
    }
    setAdaptationRate(e) {
      this.uniforms.tau.value = e;
    }
  },
  Tr = class extends M {
    constructor(e, { minLuminance: t = 0.01, adaptationRate: n = 1 } = {}) {
      (super(`AdaptiveLuminancePass`),
        (this.fullscreenMaterial = new wr()),
        (this.needsSwap = !1),
        (this.renderTargetPrevious = new O(1, 1, {
          minFilter: l,
          magFilter: l,
          depthBuffer: !1,
        })),
        (this.renderTargetPrevious.texture.name = `Luminance.Previous`));
      let r = this.fullscreenMaterial;
      ((r.luminanceBuffer0 = this.renderTargetPrevious.texture),
        (r.luminanceBuffer1 = e),
        (r.minLuminance = t),
        (r.adaptationRate = n),
        (this.renderTargetAdapted = this.renderTargetPrevious.clone()),
        (this.renderTargetAdapted.texture.name = `Luminance.Adapted`),
        (this.copyPass = new ve(this.renderTargetPrevious, !1)));
    }
    get texture() {
      return this.renderTargetAdapted.texture;
    }
    getTexture() {
      return this.renderTargetAdapted.texture;
    }
    set mipLevel1x1(e) {
      this.fullscreenMaterial.mipLevel1x1 = e;
    }
    get adaptationRate() {
      return this.fullscreenMaterial.adaptationRate;
    }
    set adaptationRate(e) {
      this.fullscreenMaterial.adaptationRate = e;
    }
    render(e, t, n, r, i) {
      ((this.fullscreenMaterial.deltaTime = r),
        e.setRenderTarget(
          this.renderToScreen ? null : this.renderTargetAdapted,
        ),
        e.render(this.scene, this.camera),
        this.copyPass.render(e, this.renderTargetAdapted));
    }
  },
  Er = `#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,
  Dr = class extends z {
    constructor({
      blendFunction: e = R.SRC,
      adaptive: t = !1,
      mode: n = t ? q.REINHARD2_ADAPTIVE : q.AGX,
      resolution: r = 256,
      maxLuminance: i = 4,
      whitePoint: a = i,
      middleGrey: o = 0.6,
      minLuminance: s = 0.01,
      averageLuminance: l = 1,
      adaptationRate: u = 1,
    } = {}) {
      (super(`ToneMappingEffect`, Er, {
        blendFunction: e,
        uniforms: new Map([
          [`luminanceBuffer`, new c(null)],
          [`maxLuminance`, new c(i)],
          [`whitePoint`, new c(a)],
          [`middleGrey`, new c(o)],
          [`averageLuminance`, new c(l)],
        ]),
      }),
        (this.renderTargetLuminance = new O(1, 1, {
          minFilter: te,
          depthBuffer: !1,
        })),
        (this.renderTargetLuminance.texture.generateMipmaps = !0),
        (this.renderTargetLuminance.texture.name = `Luminance`),
        (this.luminancePass = new Je({
          renderTarget: this.renderTargetLuminance,
        })),
        (this.adaptiveLuminancePass = new Tr(this.luminancePass.texture, {
          minLuminance: s,
          adaptationRate: u,
        })),
        (this.uniforms.get(`luminanceBuffer`).value =
          this.adaptiveLuminancePass.texture),
        (this.resolution = r),
        (this.mode = n));
    }
    get mode() {
      return Number(this.defines.get(`TONE_MAPPING_MODE`));
    }
    set mode(e) {
      if (this.mode === e) return;
      let t =
        `186`.replace(/\D+/g, ``) >= 168
          ? `CineonToneMapping(texel)`
          : `OptimizedCineonToneMapping(texel)`;
      switch (
        (this.defines.clear(),
        this.defines.set(`TONE_MAPPING_MODE`, e.toFixed(0)),
        e)
      ) {
        case q.LINEAR:
          this.defines.set(`toneMapping(texel)`, `LinearToneMapping(texel)`);
          break;
        case q.REINHARD:
          this.defines.set(`toneMapping(texel)`, `ReinhardToneMapping(texel)`);
          break;
        case q.CINEON:
        case q.OPTIMIZED_CINEON:
          this.defines.set(`toneMapping(texel)`, t);
          break;
        case q.ACES_FILMIC:
          this.defines.set(
            `toneMapping(texel)`,
            `ACESFilmicToneMapping(texel)`,
          );
          break;
        case q.AGX:
          this.defines.set(`toneMapping(texel)`, `AgXToneMapping(texel)`);
          break;
        case q.NEUTRAL:
          this.defines.set(`toneMapping(texel)`, `NeutralToneMapping(texel)`);
          break;
        default:
          this.defines.set(`toneMapping(texel)`, `texel`);
      }
      ((this.adaptiveLuminancePass.enabled = e === q.REINHARD2_ADAPTIVE),
        this.setChanged());
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
    get whitePoint() {
      return this.uniforms.get(`whitePoint`).value;
    }
    set whitePoint(e) {
      this.uniforms.get(`whitePoint`).value = e;
    }
    get middleGrey() {
      return this.uniforms.get(`middleGrey`).value;
    }
    set middleGrey(e) {
      this.uniforms.get(`middleGrey`).value = e;
    }
    get averageLuminance() {
      return this.uniforms.get(`averageLuminance`).value;
    }
    set averageLuminance(e) {
      this.uniforms.get(`averageLuminance`).value = e;
    }
    get adaptiveLuminanceMaterial() {
      return this.adaptiveLuminancePass.fullscreenMaterial;
    }
    getAdaptiveLuminanceMaterial() {
      return this.adaptiveLuminanceMaterial;
    }
    get resolution() {
      return this.luminancePass.resolution.width;
    }
    set resolution(e) {
      let t = Math.max(0, Math.ceil(Math.log2(e))),
        n = 2 ** t;
      (this.luminancePass.resolution.setPreferredSize(n, n),
        (this.adaptiveLuminanceMaterial.mipLevel1x1 = t));
    }
    getResolution() {
      return this.resolution;
    }
    setResolution(e) {
      this.resolution = e;
    }
    get adaptive() {
      return this.mode === q.REINHARD2_ADAPTIVE;
    }
    set adaptive(e) {
      this.mode = e ? q.REINHARD2_ADAPTIVE : q.REINHARD2;
    }
    get adaptationRate() {
      return this.adaptiveLuminanceMaterial.adaptationRate;
    }
    set adaptationRate(e) {
      this.adaptiveLuminanceMaterial.adaptationRate = e;
    }
    get distinction() {
      return (console.warn(this.name, `distinction was removed.`), 1);
    }
    set distinction(e) {
      console.warn(this.name, `distinction was removed.`);
    }
    update(e, t, n) {
      this.adaptiveLuminancePass.enabled &&
        (this.luminancePass.render(e, t),
        this.adaptiveLuminancePass.render(e, null, null, n));
    }
    initialize(e, t, n) {
      this.adaptiveLuminancePass.initialize(e, t, n);
    }
  },
  Or = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,
  kr = class extends z {
    constructor({
      blendFunction: e,
      eskil: t = !1,
      technique: n = t ? pn.ESKIL : pn.DEFAULT,
      offset: r = 0.5,
      darkness: i = 0.5,
    } = {}) {
      super(`VignetteEffect`, Or, {
        blendFunction: e,
        defines: new Map([[`VIGNETTE_TECHNIQUE`, n.toFixed(0)]]),
        uniforms: new Map([
          [`offset`, new c(r)],
          [`darkness`, new c(i)],
        ]),
      });
    }
    get technique() {
      return Number(this.defines.get(`VIGNETTE_TECHNIQUE`));
    }
    set technique(e) {
      this.technique !== e &&
        (this.defines.set(`VIGNETTE_TECHNIQUE`, e.toFixed(0)),
        this.setChanged());
    }
    get eskil() {
      return this.technique === pn.ESKIL;
    }
    set eskil(e) {
      this.technique = e ? pn.ESKIL : pn.DEFAULT;
    }
    getTechnique() {
      return this.technique;
    }
    setTechnique(e) {
      this.technique = e;
    }
    get offset() {
      return this.uniforms.get(`offset`).value;
    }
    set offset(e) {
      this.uniforms.get(`offset`).value = e;
    }
    getOffset() {
      return this.offset;
    }
    setOffset(e) {
      this.offset = e;
    }
    get darkness() {
      return this.uniforms.get(`darkness`).value;
    }
    set darkness(e) {
      this.uniforms.get(`darkness`).value = e;
    }
    getDarkness() {
      return this.darkness;
    }
    setDarkness(e) {
      this.darkness = e;
    }
  },
  Ar = class extends se {
    load(e, t = () => {}, n = () => {}, r = null) {
      let i = this.manager,
        a = new x(),
        o = new m(a);
      (o.setPath(this.path),
        o.setResponseType(`text`),
        i.itemStart(e),
        o.load(
          e,
          (n) => {
            try {
              let r = this.parse(n);
              (i.itemEnd(e), t(r));
            } catch (t) {
              (a.onError(e), r(t));
            }
          },
          n,
        ));
    }
    loadAsync(e, t = () => {}) {
      let n = this.manager,
        r = new x();
      return new Promise((i, a) => {
        ((r.onError = (e) => {
          (n.itemError(e), a(`Failed to load ${e}`));
        }),
          this.load(e, i, t));
      });
    }
    parse(e) {
      let t = /^[\d ]+$/m,
        n = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm,
        r = t.exec(e);
      if (r === null) throw Error(`Missing grid information`);
      let i = r[0]
          .trim()
          .split(/\s+/g)
          .map((e) => Number(e)),
        a = i[1] - i[0],
        o = i.length,
        s = o ** 2;
      for (let e = 1, t = i.length; e < t; ++e)
        if (a !== i[e] - i[e - 1]) throw Error(`Inconsistent grid size`);
      let c = new Float32Array(o ** 3 * 4),
        l = 0,
        u = 0;
      for (; (r = n.exec(e)) !== null;) {
        let e = Number(r[1]),
          t = Number(r[2]),
          n = Number(r[3]);
        l = Math.max(l, e, t, n);
        let i = u % o,
          a = Math.floor(u / o) % o,
          d = Math.floor(u / s) % o,
          f = (i * s + a * o + d) * 4;
        ((c[f + 0] = e), (c[f + 1] = t), (c[f + 2] = n), (c[f + 3] = 1), ++u);
      }
      let d = 2 ** Math.ceil(Math.log2(l));
      for (let e = 0, t = c.length; e < t; e += 4)
        ((c[e + 0] /= d), (c[e + 1] /= d), (c[e + 2] /= d));
      return new an(c, o);
    }
  },
  jr = class extends se {
    load(e, t = () => {}, n = () => {}, r = null) {
      let i = this.manager,
        a = new x(),
        o = new m(a);
      (o.setPath(this.path),
        o.setResponseType(`text`),
        o.load(
          e,
          (n) => {
            try {
              let r = this.parse(n);
              (i.itemEnd(e), t(r));
            } catch (t) {
              (a.onError(e), r(t));
            }
          },
          n,
        ));
    }
    loadAsync(e, t = () => {}) {
      let n = this.manager,
        r = new x();
      return new Promise((i, a) => {
        ((r.onError = (e) => {
          (n.itemError(e), a(`Failed to load ${e}`));
        }),
          this.load(e, i, t));
      });
    }
    parse(e) {
      let t = /TITLE +"([^"]*)"/,
        n = /LUT_3D_SIZE +(\d+)/,
        r = /DOMAIN_MIN +([\d.]+) +([\d.]+) +([\d.]+)/,
        i = /DOMAIN_MAX +([\d.]+) +([\d.]+) +([\d.]+)/,
        a = /^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm,
        o = t.exec(e),
        s = o === null ? null : o[1];
      if (((o = n.exec(e)), o === null))
        throw Error(`Missing LUT_3D_SIZE information`);
      let c = Number(o[1]),
        l = new Float32Array(c ** 3 * 4),
        u = new k(0, 0, 0),
        d = new k(1, 1, 1);
      if (
        ((o = r.exec(e)),
        o !== null && u.set(Number(o[1]), Number(o[2]), Number(o[3])),
        (o = i.exec(e)),
        o !== null && d.set(Number(o[1]), Number(o[2]), Number(o[3])),
        u.x > d.x || u.y > d.y || u.z > d.z)
      )
        throw (u.set(0, 0, 0), d.set(1, 1, 1), Error(`Invalid input domain`));
      let f = 0;
      for (; (o = a.exec(e)) !== null;)
        ((l[f++] = Number(o[1])),
          (l[f++] = Number(o[2])),
          (l[f++] = Number(o[3])),
          (l[f++] = 1));
      let p = new an(l, c);
      return (
        p.domainMin.copy(u),
        p.domainMax.copy(d),
        s !== null && (p.name = s),
        p
      );
    }
  },
  Mr = class extends se {
    load(e = () => {}, t = null) {
      arguments.length === 4
        ? ((e = arguments[1]), (t = arguments[3]))
        : (arguments.length === 3 || typeof arguments[0] != `function`) &&
          ((e = arguments[1]), (t = null));
      let n = this.manager,
        r = new x();
      return new Promise((i, a) => {
        let o = new Image(),
          s = new Image();
        ((r.onError = (e) => {
          (n.itemError(e),
            t === null
              ? a(`Failed to load ${e}`)
              : (t(`Failed to load ${e}`), i()));
        }),
          (r.onLoad = () => {
            let t = [o, s];
            (e(t), i(t));
          }),
          o.addEventListener(`error`, (e) => {
            r.itemError(`smaa-search`);
          }),
          s.addEventListener(`error`, (e) => {
            r.itemError(`smaa-area`);
          }),
          o.addEventListener(`load`, () => {
            (n.itemEnd(`smaa-search`), r.itemEnd(`smaa-search`));
          }),
          s.addEventListener(`load`, () => {
            (n.itemEnd(`smaa-area`), r.itemEnd(`smaa-area`));
          }),
          n.itemStart(`smaa-search`),
          n.itemStart(`smaa-area`),
          r.itemStart(`smaa-search`),
          r.itemStart(`smaa-area`),
          (o.src = Xn),
          (s.src = Zn));
      });
    }
  },
  Nr = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef BILATERAL
#include <packing>
uniform vec2 cameraNearFar;
#define cameraNear cameraNearFar.x
#define cameraFar cameraNearFar.y
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){float depth=texture2D(normalDepthBuffer,uv).a;
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}
#else
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
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
#endif
float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}
#ifdef PERSPECTIVE_CAMERA
#define linearDepth(v) viewZToOrthographicDepth(getViewZ(readDepth(v)), cameraNearFar.x, cameraNearFar.y)
#else
#define linearDepth(v) readDepth(v)
#endif
#endif
#define getTexel(v) texture2D(inputBuffer, v)
#if KERNEL_SIZE == 3
varying vec2 vUv00,vUv01,vUv02;varying vec2 vUv03,vUv04,vUv05;varying vec2 vUv06,vUv07,vUv08;
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
varying vec2 vUv00,vUv01,vUv02,vUv03,vUv04;varying vec2 vUv05,vUv06,vUv07,vUv08,vUv09;varying vec2 vUv10,vUv11,vUv12,vUv13,vUv14;varying vec2 vUv15,vUv16,vUv17,vUv18,vUv19;varying vec2 vUv20,vUv21,vUv22,vUv23,vUv24;
#else
uniform vec2 texelSize;uniform float scale;varying vec2 vUv;
#endif
void main(){
#if KERNEL_SIZE == 3
vec4 c[]=vec4[KERNEL_SIZE_SQ](getTexel(vUv00),getTexel(vUv01),getTexel(vUv02),getTexel(vUv03),getTexel(vUv04),getTexel(vUv05),getTexel(vUv06),getTexel(vUv07),getTexel(vUv08));
#ifdef BILATERAL
float z[]=float[KERNEL_SIZE_SQ](linearDepth(vUv00),linearDepth(vUv01),linearDepth(vUv02),linearDepth(vUv03),linearDepth(vUv04),linearDepth(vUv05),linearDepth(vUv06),linearDepth(vUv07),linearDepth(vUv08));
#endif
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
vec4 c[]=vec4[KERNEL_SIZE_SQ](getTexel(vUv00),getTexel(vUv01),getTexel(vUv02),getTexel(vUv03),getTexel(vUv04),getTexel(vUv05),getTexel(vUv06),getTexel(vUv07),getTexel(vUv08),getTexel(vUv09),getTexel(vUv10),getTexel(vUv11),getTexel(vUv12),getTexel(vUv13),getTexel(vUv14),getTexel(vUv15),getTexel(vUv16),getTexel(vUv17),getTexel(vUv18),getTexel(vUv19),getTexel(vUv20),getTexel(vUv21),getTexel(vUv22),getTexel(vUv23),getTexel(vUv24));
#ifdef BILATERAL
float z[]=float[KERNEL_SIZE_SQ](linearDepth(vUv00),linearDepth(vUv01),linearDepth(vUv02),linearDepth(vUv03),linearDepth(vUv04),linearDepth(vUv05),linearDepth(vUv06),linearDepth(vUv07),linearDepth(vUv08),linearDepth(vUv09),linearDepth(vUv10),linearDepth(vUv11),linearDepth(vUv12),linearDepth(vUv13),linearDepth(vUv14),linearDepth(vUv15),linearDepth(vUv16),linearDepth(vUv17),linearDepth(vUv18),linearDepth(vUv19),linearDepth(vUv20),linearDepth(vUv21),linearDepth(vUv22),linearDepth(vUv23),linearDepth(vUv24));
#endif
#endif
vec4 result=vec4(0.0);
#ifdef BILATERAL
float w=0.0;
#if KERNEL_SIZE == 3 || (KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13)
float centerDepth=z[KERNEL_SIZE_SQ_HALF];for(int i=0;i<KERNEL_SIZE_SQ;++i){float d=step(abs(z[i]-centerDepth),DISTANCE_THRESHOLD);result+=c[i]*d;w+=d;}
#else
float centerDepth=linearDepth(vUv);vec2 s=texelSize*scale;for(int x=-KERNEL_SIZE_HALF;x<=KERNEL_SIZE_HALF;++x){for(int y=-KERNEL_SIZE_HALF;y<=KERNEL_SIZE_HALF;++y){vec2 coords=vUv+vec2(x,y)*s;vec4 c=getTexel(coords);float z=(x==0&&y==0)?centerDepth:linearDepth(coords);float d=step(abs(z-centerDepth),DISTANCE_THRESHOLD);result+=c*d;w+=d;}}
#endif
gl_FragColor=result/max(w,1.0);
#else
#if KERNEL_SIZE == 3 || (KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13)
for(int i=0;i<KERNEL_SIZE_SQ;++i){result+=c[i];}
#else
vec2 s=texelSize*scale;for(int x=-KERNEL_SIZE_HALF;x<=KERNEL_SIZE_HALF;++x){for(int y=-KERNEL_SIZE_HALF;y<=KERNEL_SIZE_HALF;++y){result+=getTexel(uv+vec2(x,y)*s);}}
#endif
gl_FragColor=result*INV_KERNEL_SIZE_SQ;
#endif
}`,
  Pr = `uniform vec2 texelSize;uniform float scale;
#if KERNEL_SIZE == 3
varying vec2 vUv00,vUv01,vUv02;varying vec2 vUv03,vUv04,vUv05;varying vec2 vUv06,vUv07,vUv08;
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
varying vec2 vUv00,vUv01,vUv02,vUv03,vUv04;varying vec2 vUv05,vUv06,vUv07,vUv08,vUv09;varying vec2 vUv10,vUv11,vUv12,vUv13,vUv14;varying vec2 vUv15,vUv16,vUv17,vUv18,vUv19;varying vec2 vUv20,vUv21,vUv22,vUv23,vUv24;
#else
varying vec2 vUv;
#endif
void main(){vec2 uv=position.xy*0.5+0.5;
#if KERNEL_SIZE == 3
vec2 s=texelSize*scale;vUv00=uv+s*vec2(-1.0,-1.0);vUv01=uv+s*vec2(0.0,-1.0);vUv02=uv+s*vec2(1.0,-1.0);vUv03=uv+s*vec2(-1.0,0.0);vUv04=uv;vUv05=uv+s*vec2(1.0,0.0);vUv06=uv+s*vec2(-1.0,1.0);vUv07=uv+s*vec2(0.0,1.0);vUv08=uv+s*vec2(1.0,1.0);
#elif KERNEL_SIZE == 5
vec2 s=texelSize*scale;vUv00=uv+s*vec2(-2.0,-2.0);vUv01=uv+s*vec2(-1.0,-2.0);vUv02=uv+s*vec2(0.0,-2.0);vUv03=uv+s*vec2(1.0,-2.0);vUv04=uv+s*vec2(2.0,-2.0);vUv05=uv+s*vec2(-2.0,-1.0);vUv06=uv+s*vec2(-1.0,-1.0);vUv07=uv+s*vec2(0.0,-1.0);vUv08=uv+s*vec2(1.0,-1.0);vUv09=uv+s*vec2(2.0,-1.0);vUv10=uv+s*vec2(-2.0,0.0);vUv11=uv+s*vec2(-1.0,0.0);vUv12=uv;vUv13=uv+s*vec2(1.0,0.0);vUv14=uv+s*vec2(2.0,0.0);vUv15=uv+s*vec2(-2.0,1.0);vUv16=uv+s*vec2(-1.0,1.0);vUv17=uv+s*vec2(0.0,1.0);vUv18=uv+s*vec2(1.0,1.0);vUv19=uv+s*vec2(2.0,1.0);vUv20=uv+s*vec2(-2.0,2.0);vUv21=uv+s*vec2(-1.0,2.0);vUv22=uv+s*vec2(0.0,2.0);vUv23=uv+s*vec2(1.0,2.0);vUv24=uv+s*vec2(2.0,2.0);
#else
vUv=uv;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,
  Fr = class extends u {
    constructor({ bilateral: e = !1, kernelSize: t = 5 } = {}) {
      (super({
        name: `BoxBlurMaterial`,
        defines: { DEPTH_PACKING: `0`, DISTANCE_THRESHOLD: `0.1` },
        uniforms: {
          inputBuffer: new c(null),
          depthBuffer: new c(null),
          normalDepthBuffer: new c(null),
          texelSize: new c(new D()),
          cameraNearFar: new c(new D()),
          scale: new c(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Nr,
        vertexShader: Pr,
      }),
        (this.bilateral = e),
        (this.kernelSize = t),
        (this.maxVaryingVectors = 8));
    }
    set maxVaryingVectors(e) {
      this.defines.MAX_VARYING_VECTORS = e.toFixed(0);
    }
    get kernelSize() {
      return Number(this.defines.KERNEL_SIZE);
    }
    set kernelSize(e) {
      if (e % 2 == 0) throw Error(`The kernel size must be an odd number`);
      ((this.defines.KERNEL_SIZE = e.toFixed(0)),
        (this.defines.KERNEL_SIZE_HALF = Math.floor(e / 2).toFixed(0)),
        (this.defines.KERNEL_SIZE_SQ = (e ** 2).toFixed(0)),
        (this.defines.KERNEL_SIZE_SQ_HALF = Math.floor(e ** 2 / 2).toFixed(0)),
        (this.defines.INV_KERNEL_SIZE_SQ = (1 / e ** 2).toFixed(6)),
        (this.needsUpdate = !0));
    }
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(e) {
      this.uniforms.scale.value = e;
    }
    get near() {
      return this.uniforms.cameraNearFar.value.x;
    }
    get far() {
      return this.uniforms.cameraNearFar.value.y;
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set normalDepthBuffer(e) {
      ((this.uniforms.normalDepthBuffer.value = e),
        e === null
          ? delete this.defines.NORMAL_DEPTH
          : (this.defines.NORMAL_DEPTH = `1`),
        (this.needsUpdate = !0));
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    get bilateral() {
      return this.defines.BILATERAL !== void 0;
    }
    set bilateral(e) {
      (e === null
        ? delete this.defines.BILATERAL
        : (this.defines.BILATERAL = `1`),
        (this.needsUpdate = !0));
    }
    get worldDistanceThreshold() {
      return -tr(Number(this.defines.DISTANCE_THRESHOLD), this.near, this.far);
    }
    set worldDistanceThreshold(e) {
      let t = nr(-e, this.near, this.far);
      ((this.defines.DISTANCE_THRESHOLD = t.toFixed(12)),
        (this.needsUpdate = !0));
    }
    copyCameraSettings(e) {
      e &&
        (this.uniforms.cameraNearFar.value.set(e.near, e.far),
        e instanceof n
          ? (this.defines.PERSPECTIVE_CAMERA = `1`)
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0));
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  Ir = `#include <packing>
varying vec2 vUv;
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
#if INPUT_DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if INPUT_DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
void main(){
#if INPUT_DEPTH_PACKING == OUTPUT_DEPTH_PACKING
gl_FragColor=texture2D(depthBuffer,vUv);
#else
float depth=readDepth(vUv);
#if OUTPUT_DEPTH_PACKING == 3201
gl_FragColor=(depth==1.0)?vec4(1.0):packDepthToRGBA(depth);
#else
gl_FragColor=vec4(vec3(depth),1.0);
#endif
#endif
}`,
  Lr = `varying vec2 vUv;
#if DEPTH_COPY_MODE == 1
uniform vec2 texelPosition;
#endif
void main(){
#if DEPTH_COPY_MODE == 1
vUv=texelPosition;
#else
vUv=position.xy*0.5+0.5;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,
  Rr = class extends u {
    constructor() {
      (super({
        name: `DepthCopyMaterial`,
        defines: {
          INPUT_DEPTH_PACKING: `0`,
          OUTPUT_DEPTH_PACKING: `0`,
          DEPTH_COPY_MODE: `0`,
        },
        uniforms: { depthBuffer: new c(null), texelPosition: new c(new D()) },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ir,
        vertexShader: Lr,
      }),
        (this.depthCopyMode = cn.FULL));
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set inputDepthPacking(e) {
      ((this.defines.INPUT_DEPTH_PACKING = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    get outputDepthPacking() {
      return Number(this.defines.OUTPUT_DEPTH_PACKING);
    }
    set outputDepthPacking(e) {
      ((this.defines.OUTPUT_DEPTH_PACKING = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = A) {
      ((this.depthBuffer = e), (this.inputDepthPacking = t));
    }
    getInputDepthPacking() {
      return Number(this.defines.INPUT_DEPTH_PACKING);
    }
    setInputDepthPacking(e) {
      ((this.defines.INPUT_DEPTH_PACKING = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    getOutputDepthPacking() {
      return Number(this.defines.OUTPUT_DEPTH_PACKING);
    }
    setOutputDepthPacking(e) {
      ((this.defines.OUTPUT_DEPTH_PACKING = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    get texelPosition() {
      return this.uniforms.texelPosition.value;
    }
    getTexelPosition() {
      return this.uniforms.texelPosition.value;
    }
    setTexelPosition(e) {
      this.uniforms.texelPosition.value = e;
    }
    get mode() {
      return this.depthCopyMode;
    }
    set mode(e) {
      ((this.depthCopyMode = e),
        (this.defines.DEPTH_COPY_MODE = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
  },
  zr = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
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
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,
  Br = `uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`,
  Vr = class extends u {
    constructor(e, t, n, r, i = !1) {
      (super({
        name: `EffectMaterial`,
        defines: {
          THREE_REVISION: `186`.replace(/\D+/g, ``),
          DEPTH_PACKING: `0`,
          ENCODE_OUTPUT: `1`,
        },
        uniforms: {
          inputBuffer: new c(null),
          depthBuffer: new c(null),
          resolution: new c(new D()),
          texelSize: new c(new D()),
          cameraNear: new c(0.3),
          cameraFar: new c(1e3),
          aspect: new c(1),
          time: new c(0),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        dithering: i,
      }),
        e && this.setShaderParts(e),
        t && this.setDefines(t),
        n && this.setUniforms(n),
        this.copyCameraSettings(r));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    get depthPacking() {
      return Number(this.defines.DEPTH_PACKING);
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = A) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    setShaderData(e) {
      (this.setShaderParts(e.shaderParts),
        this.setDefines(e.defines),
        this.setUniforms(e.uniforms),
        this.setExtensions(e.extensions));
    }
    setShaderParts(e) {
      return (
        (this.fragmentShader = zr
          .replace(F.FRAGMENT_HEAD, e.get(F.FRAGMENT_HEAD) || ``)
          .replace(F.FRAGMENT_MAIN_UV, e.get(F.FRAGMENT_MAIN_UV) || ``)
          .replace(F.FRAGMENT_MAIN_IMAGE, e.get(F.FRAGMENT_MAIN_IMAGE) || ``)),
        (this.vertexShader = Br.replace(
          F.VERTEX_HEAD,
          e.get(F.VERTEX_HEAD) || ``,
        ).replace(F.VERTEX_MAIN_SUPPORT, e.get(F.VERTEX_MAIN_SUPPORT) || ``)),
        (this.needsUpdate = !0),
        this
      );
    }
    setDefines(e) {
      for (let t of e.entries()) this.defines[t[0]] = t[1];
      return ((this.needsUpdate = !0), this);
    }
    setUniforms(e) {
      for (let t of e.entries()) this.uniforms[t[0]] = t[1];
      return this;
    }
    setExtensions(e) {
      this.extensions = {};
      for (let t of e) this.extensions[t] = !0;
      return this;
    }
    get encodeOutput() {
      return this.defines.ENCODE_OUTPUT !== void 0;
    }
    set encodeOutput(e) {
      this.encodeOutput !== e &&
        (e
          ? (this.defines.ENCODE_OUTPUT = `1`)
          : delete this.defines.ENCODE_OUTPUT,
        (this.needsUpdate = !0));
    }
    isOutputEncodingEnabled(e) {
      return this.encodeOutput;
    }
    setOutputEncodingEnabled(e) {
      this.encodeOutput = e;
    }
    get time() {
      return this.uniforms.time.value;
    }
    set time(e) {
      this.uniforms.time.value = e;
    }
    setDeltaTime(e) {
      this.uniforms.time.value += e;
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e);
    }
    copyCameraSettings(e) {
      e &&
        ((this.uniforms.cameraNear.value = e.near),
        (this.uniforms.cameraFar.value = e.far),
        e instanceof n
          ? (this.defines.PERSPECTIVE_CAMERA = `1`)
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0));
    }
    setSize(e, t) {
      let n = this.uniforms;
      (n.resolution.value.set(e, t),
        n.texelSize.value.set(1 / e, 1 / t),
        (n.aspect.value = e / t));
    }
    static get Section() {
      return F;
    }
  },
  Hr = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 kernel[STEPS];varying vec2 vOffset;varying vec2 vUv;void main(){vec4 result=texture2D(inputBuffer,vUv)*kernel[0].y;for(int i=1;i<STEPS;++i){vec2 offset=kernel[i].x*vOffset;vec4 c0=texture2D(inputBuffer,vUv+offset);vec4 c1=texture2D(inputBuffer,vUv-offset);result+=(c0+c1)*kernel[i].y;}gl_FragColor=result;
#include <colorspace_fragment>
}`,
  Ur = `uniform vec2 texelSize;uniform vec2 direction;uniform float scale;varying vec2 vOffset;varying vec2 vUv;void main(){vOffset=direction*texelSize*scale;vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,
  Wr = class extends u {
    constructor({ kernelSize: e = 35 } = {}) {
      (super({
        name: `GaussianBlurMaterial`,
        uniforms: {
          inputBuffer: new c(null),
          texelSize: new c(new D()),
          direction: new c(new D()),
          kernel: new c(null),
          scale: new c(1),
        },
        blending: 0,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Hr,
        vertexShader: Ur,
      }),
        (this._kernelSize = 0),
        (this.kernelSize = e));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get kernelSize() {
      return this._kernelSize;
    }
    set kernelSize(e) {
      ((this._kernelSize = e), this.generateKernel(e));
    }
    get direction() {
      return this.uniforms.direction.value;
    }
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(e) {
      this.uniforms.scale.value = e;
    }
    generateKernel(e) {
      let t = new ke(e),
        n = t.linearSteps,
        r = new Float64Array(n * 2);
      for (let e = 0, i = 0; e < n; ++e)
        ((r[i++] = t.linearOffsets[e]), (r[i++] = t.linearWeights[e]));
      ((this.uniforms.kernel.value = r),
        (this.defines.STEPS = n.toFixed(0)),
        (this.needsUpdate = !0));
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  Gr = class extends M {
    constructor({
      kernelSize: e = 5,
      iterations: t = 1,
      bilateral: n = !1,
      resolutionScale: r = 1,
      resolutionX: i = L.AUTO_SIZE,
      resolutionY: a = L.AUTO_SIZE,
    } = {}) {
      (super(`BoxBlurPass`),
        (this.needsDepthTexture = n),
        (this.renderTargetA = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = `Blur.Target.A`),
        (this.renderTargetB = new O(1, 1, { depthBuffer: !1 })),
        (this.renderTargetB.texture.name = `Blur.Target.B`),
        (this.blurMaterial = new Fr({ bilateral: n, kernelSize: e })),
        (this.copyMaterial = new _e()));
      let o = (this.resolution = new L(this, i, a, r));
      (o.addEventListener(`change`, (e) =>
        this.setSize(o.baseWidth, o.baseHeight),
      ),
        (this.iterations = t));
    }
    set mainCamera(e) {
      this.blurMaterial.copyCameraSettings(e);
    }
    setDepthTexture(e, t = A) {
      ((this.blurMaterial.depthBuffer = e),
        (this.blurMaterial.depthPacking = t));
    }
    render(e, t, n, r, i) {
      let a = this.scene,
        o = this.camera,
        s = this.renderTargetA,
        c = this.renderTargetB,
        l = this.blurMaterial;
      this.fullscreenMaterial = l;
      let u = t;
      for (let t = 0, n = Math.max(this.iterations, 1); t < n; ++t) {
        let n = t & 1 ? c : s;
        ((l.inputBuffer = u.texture),
          e.setRenderTarget(n),
          e.render(a, o),
          (u = n));
      }
      ((this.copyMaterial.inputBuffer = u.texture),
        (this.fullscreenMaterial = this.copyMaterial),
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
      (e !== null &&
        (this.blurMaterial.maxVaryingVectors = e.capabilities.maxVaryings),
        n !== void 0 &&
          ((this.renderTargetA.texture.type = n),
          (this.renderTargetB.texture.type = n),
          n === 1009
            ? e !== null &&
              e.outputColorSpace === `srgb` &&
              ((this.renderTargetA.texture.colorSpace = a),
              (this.renderTargetB.texture.colorSpace = a))
            : (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = `1`)));
    }
  },
  Kr = class extends M {
    constructor({ depthPacking: e = t } = {}) {
      super(`DepthCopyPass`);
      let n = new Rr();
      ((n.outputDepthPacking = e),
        (this.fullscreenMaterial = n),
        (this.needsDepthTexture = !0),
        (this.needsSwap = !1),
        (this.renderTarget = new O(1, 1, {
          type: e === 3201 ? s : g,
          minFilter: l,
          magFilter: l,
          depthBuffer: !1,
        })),
        (this.renderTarget.texture.name = `DepthCopyPass.Target`));
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    get depthPacking() {
      return this.fullscreenMaterial.outputDepthPacking;
    }
    getDepthPacking() {
      return this.fullscreenMaterial.outputDepthPacking;
    }
    setDepthTexture(e, t = A) {
      ((this.fullscreenMaterial.depthBuffer = e),
        (this.fullscreenMaterial.inputDepthPacking = t));
    }
    render(e, t, n, r, i) {
      (e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      this.renderTarget.setSize(e, t);
    }
  },
  qr = Number(`186`.replace(/\D+/g, ``)),
  J = 255 / 256,
  Jr = new Float32Array([J / 256 ** 3, J / 256 ** 2, J / 256, J]),
  Yr = new Float32Array([J, J / 256, J / 256 ** 2, 1 / 256 ** 3]);
