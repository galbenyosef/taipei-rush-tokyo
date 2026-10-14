// tokyo/assets/world-Bo9wkXrT 73 — math
// Lines 23057-23382 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var uh = class {
    center;
    rx;
    rz;
    mesh;
    offsets = [];
    m = new we();
    q = new x();
    e = new A(0, 0, 0, `YXZ`);
    p = new U();
    s = new U(1.35, 1.35, 1.35);
    t = Math.random() * 100;
    visibleK = 1;
    constructor(e, t, n) {
      ((this.center = e), (this.rx = t), (this.rz = n));
      let r = new O({ color: 16053230, emissive: 6052694 });
      ((r.name = `env-egrets`),
        (r.side = 2),
        (r.onBeforeCompile = (e) => {
          ((e.uniforms.uTime = K.uTime),
            (e.vertexShader = e.vertexShader
              .replace(
                `#include <common>`,
                `#include <common>
attribute float aWing;
uniform float uTime;`,
              )
              .replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
          {
            #ifdef USE_INSTANCING
            float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
            #else
            float ph = 0.0;
            #endif
            float cyc = mod(uTime * 0.35 + ph, 3.0);
            float flap = cyc < 1.8 ? sin(uTime * 7.5 + ph * 3.0) : 0.15;   // flap, then glide
            transformed.y += flap * 0.42 * aWing * aWing;
          }`,
              )));
        }),
        (r.customProgramCacheKey = () => `env-egrets`),
        (this.mesh = new ye(lh(), r, ch)),
        (this.mesh.name = `env-egrets`),
        (this.mesh.frustumCulled = !1));
      for (let e = 0; e < ch; e++) {
        let t = e % 2 == 0 ? 1 : -1,
          n = Math.ceil(e / 2);
        this.offsets.push({
          x: t * n * 2.2 + Math.sin(e * 7.1) * 0.6,
          y: Math.sin(e * 3.3) * 0.8,
          z: n * 1.9 + Math.cos(e * 5.7) * 0.5,
          ph: e * 1.37,
        });
      }
    }
    update(e, t, n, r = 700) {
      ((this.t += e),
        (this.visibleK += (t - this.visibleK) * Math.min(1, e * 0.5)));
      let i = this.t * 0.022,
        a = this.center.x + Math.cos(i) * this.rx,
        o = this.center.z + Math.sin(i) * this.rz;
      if (
        ((this.mesh.visible =
          this.visibleK > 0.05 && (!n || Math.hypot(n.x - a, n.z - o) < r)),
        !this.mesh.visible)
      )
        return;
      let s = -Math.sin(i) * this.rx,
        c = Math.cos(i) * this.rz,
        l = Math.atan2(s, -c),
        u = -0.25 * Math.sign(this.rx * this.rz),
        d = 16 + Math.sin(this.t * 0.21) * 5 + (1 - this.visibleK) * 40,
        f = Math.cos(l),
        p = Math.sin(l);
      for (let e = 0; e < ch; e++) {
        let t = this.offsets[e],
          n = t.x,
          r = t.z,
          i = n * f - r * p,
          s = n * p + r * f;
        (this.p.set(
          a + i,
          d + t.y + Math.sin(this.t * 0.9 + t.ph) * 0.4,
          o + s,
        ),
          this.e.set(0.04 * Math.sin(this.t + t.ph), -l, u),
          this.q.setFromEuler(this.e),
          this.m.compose(this.p, this.q, this.s),
          this.mesh.setMatrixAt(e, this.m));
      }
      this.mesh.instanceMatrix.needsUpdate = !0;
    }
  },
  dh = `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  fh = `
uniform sampler2D tDepth;
uniform vec4 uProjInfo;   // P[0][0], P[1][1], near, far
float aoDepth(vec2 uv) {
#ifdef USE_REVERSED_DEPTH_BUFFER
  return 1.0 - texture2D(tDepth, uv).r; // reversed-Z: near = 1, far = 0 (same mapping, mirrored)
#else
  return texture2D(tDepth, uv).r;
#endif
}
float aoViewZ(vec2 uv) {
  float d = aoDepth(uv);
  float n = uProjInfo.z, f = uProjInfo.w;
  return (n * f) / ((f - n) * d - f);
}
vec3 aoViewPos(vec2 uv, float vz) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * -vz / uProjInfo.x, ndc.y * -vz / uProjInfo.y, vz);
}
`,
  ph = `
${fh}
uniform vec2 uTexel;       // one texel of the depth texture (full resolution)
uniform float uRadius;     // world radius (m)
uniform float uIntensity;
uniform float uBias;
uniform float uMaxPx;      // max sample radius in full-res pixels
uniform float uFadeDist;   // AO fades out towards this view distance
uniform float uFrameH;     // full-res height in pixels
varying vec2 vUv;

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  // snap to a full-resolution texel centre: at reduced resolution vUv sits on texel corners, where
  // nearest-filtered depth fetches of the neighbours would alias (row banding on the ground)
  vec2 uv0 = (floor(vUv / uTexel) + 0.5) * uTexel;
  float d0 = aoDepth(uv0);
  if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
  float z = aoViewZ(uv0);
  vec3 P = aoViewPos(uv0, z);
  // normal: smallest depth step on each axis (robust at silhouettes)
  vec2 tx = vec2(uTexel.x, 0.0), ty = vec2(0.0, uTexel.y);
  float zr = aoViewZ(uv0 + tx), zl = aoViewZ(uv0 - tx), zu = aoViewZ(uv0 + ty), zd = aoViewZ(uv0 - ty);
  vec3 dx = abs(zr - z) < abs(z - zl) ? aoViewPos(uv0 + tx, zr) - P : P - aoViewPos(uv0 - tx, zl);
  vec3 dy = abs(zu - z) < abs(z - zd) ? aoViewPos(uv0 + ty, zu) - P : P - aoViewPos(uv0 - ty, zd);
  vec3 N = normalize(cross(dx, dy));
  float fade = 1.0 - smoothstep(uFadeDist * 0.6, uFadeDist, -z);
  float rPx = min(uRadius * uProjInfo.y * 0.5 * uFrameH / -z, uMaxPx);
  if (rPx < 1.5 || fade <= 0.0) { gl_FragColor = vec4(1.0); return; }
  float ang = ign(gl_FragCoord.xy) * 6.2831853;
  float occ = 0.0;
  float R2 = uRadius * uRadius;
  for (int i = 0; i < AO_SAMPLES; i++) {
    float t = (float(i) + 0.5) / float(AO_SAMPLES);
    float a = ang + float(i) * 2.3999632;
    vec2 off = vec2(cos(a), sin(a)) * (t * rPx) * uTexel;
    vec2 suv = (floor((uv0 + off) / uTexel) + 0.5) * uTexel;
    float sz = aoViewZ(suv);
    vec3 v = aoViewPos(suv, sz) - P;
    float vv = dot(v, v);
    // cosine-weighted horizon term with a small angle bias (kills flat-surface self-occlusion banding),
    // quadratic falloff to the world radius
    float cosT = dot(v, N) * inversesqrt(vv + 1e-4);
    occ += max(0.0, cosT - uBias) * max(0.0, 1.0 - vv / R2);
  }
  float ao = max(0.0, 1.0 - uIntensity * occ / float(AO_SAMPLES));
  ao = mix(1.0, ao, fade);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`,
  mh = `
${fh}
uniform sampler2D tAO;
uniform vec2 uAOTexel;
varying vec2 vUv;
void main() {
  float z0 = aoViewZ(vUv);
  float sum = 0.0, wsum = 0.0;
  for (int y = -1; y <= 1; y++)
    for (int x = -1; x <= 1; x++) {
      vec2 uv = vUv + vec2(float(x), float(y)) * uAOTexel;
      float w = 1.0 / (1.0 + abs(aoViewZ(uv) - z0) * 4.0 / max(1.0, -z0 * 0.05));
      sum += texture2D(tAO, uv).r * w;
      wsum += w;
    }
  float ao = sum / max(wsum, 1e-4);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`;
function hh(e, t, n = 8) {
  class r extends e.Pass {
    aoTarget;
    blurTarget;
    aoMat;
    blurMat;
    quad;
    quadScene = new l();
    quadCam = new j(-1, 1, 1, -1, 0, 1);
    fullH = 1;
    cam;
    constructor(e, t = 8) {
      (super(`TaipeiAO`),
        (this.cam = e),
        (this.needsSwap = !1),
        (this.needsDepthTexture = !0));
      let n = {
        depthBuffer: !1,
        type: b,
        format: i,
        minFilter: ge,
        magFilter: ge,
      };
      ((this.aoTarget = new de(1, 1, n)),
        (this.blurTarget = new de(1, 1, n)),
        (this.aoTarget.texture.name = `TaipeiAO.raw`),
        (this.blurTarget.texture.name = `TaipeiAO`));
      let r = { value: new ve(1, 1, 0.3, 900) };
      ((this.aoMat = new c({
        name: `env-ao`,
        defines: { AO_SAMPLES: t },
        uniforms: {
          tDepth: { value: null },
          uProjInfo: r,
          uTexel: { value: new ce(1, 1) },
          uRadius: { value: 1.8 },
          uIntensity: { value: 2.8 },
          uBias: { value: 0.12 },
          uMaxPx: { value: 90 },
          uFadeDist: { value: 220 },
          uFrameH: { value: 720 },
        },
        vertexShader: dh,
        fragmentShader: ph,
        depthTest: !1,
        depthWrite: !1,
      })),
        (this.blurMat = new c({
          name: `env-ao-blur`,
          uniforms: {
            tDepth: this.aoMat.uniforms.tDepth,
            uProjInfo: r,
            tAO: { value: this.aoTarget.texture },
            uAOTexel: { value: new ce(1, 1) },
          },
          vertexShader: dh,
          fragmentShader: mh,
          depthTest: !1,
          depthWrite: !1,
        })));
      let a = new V();
      (a.setAttribute(
        `position`,
        new H(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      ),
        (this.quad = new P(a, this.aoMat)),
        (this.quad.frustumCulled = !1),
        this.quadScene.add(this.quad));
    }
    get texture() {
      return this.blurTarget.texture;
    }
    get uniforms() {
      return this.aoMat.uniforms;
    }
    setDepthTexture(e) {
      this.aoMat.uniforms.tDepth.value = e;
    }
    render(e) {
      if (!this.aoMat.uniforms.tDepth.value) return;
      let t = this.cam,
        n = t.projectionMatrix.elements;
      this.aoMat.uniforms.uProjInfo.value.set(n[0], n[5], t.near, t.far);
      let r = e.getRenderTarget();
      ((this.quad.material = this.aoMat),
        e.setRenderTarget(this.aoTarget),
        e.render(this.quadScene, this.quadCam),
        (this.quad.material = this.blurMat),
        e.setRenderTarget(this.blurTarget),
        e.render(this.quadScene, this.quadCam),
        e.setRenderTarget(r));
    }
    resize(e, t, n) {
      let r = Math.max(1, Math.ceil(e / n)),
        i = Math.max(1, Math.ceil(t / n));
      (this.aoTarget.setSize(r, i),
        this.blurTarget.setSize(r, i),
        (this.fullH = t),
        this.aoMat.uniforms.uTexel.value.set(1 / e, 1 / t),
        (this.aoMat.uniforms.uFrameH.value = t),
        (this.aoMat.uniforms.uMaxPx.value = Math.min(120, t * 0.09)),
        this.blurMat.uniforms.uAOTexel.value.set(1 / r, 1 / i));
    }
    setSize(e, t) {
      this.resize(e, t, this.divisor());
    }
    divisor = () => 2;
    dispose() {
      (this.aoTarget.dispose(),
        this.blurTarget.dispose(),
        this.aoMat.dispose(),
        this.blurMat.dispose(),
        super.dispose());
    }
    get frameHeight() {
      return this.fullH;
    }
  }
  return new r(t, n);
}
var gh = null;
function _h() {
  return (
    gh ||
      ((gh = t(
        () => import(`./postfx-Beafm2Vo.js`).then((e) => e.t),
        __vite__mapDeps([0, 1, 2]),
      )),
      gh.catch(() => {
        gh = null;
      })),
    gh
  );
}
