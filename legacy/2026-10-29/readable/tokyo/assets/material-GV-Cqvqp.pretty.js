import {
  A as e,
  En as t,
  bn as n,
  d as r,
  g as i,
  h as a,
  ir as o,
  jt as s,
  n as c,
  rr as l,
  x as u,
} from "./three-x0mFGRTI.js";
import { mn as d } from "./engine-wUBYs8Z3.js";
var f = {
    uTowerColor: { value: new u(3842303) },
    uFlashPos: { value: new l(745, 400, 200) },
    uFlashColor: { value: new u(0, 0, 0) },
    uFloodColor: { value: new u(1, 0.72, 0.44) },
    uFogStretch: { value: 2.6 },
    uFogMax: { value: 0.82 },
    uShow: { value: 0 },
    uFakeEnv: { value: 1 },
    uSkyH: { value: new u(12109526) },
    uSkyZ: { value: new u(7311288) },
    uShowRect: { value: new o(0, 0, 1, 1) },
    uShowLayer: { value: -1 },
    uShowCol: { value: 0 },
    uTowerFrame: { value: new o(730, 116, 212, 272) },
    uWinLate: { value: 1 },
  },
  p = `
attribute vec4 aCol;
attribute vec4 aMat;
attribute vec4 aLight;
attribute vec4 aInfo;
varying vec4 vCol;
varying vec4 vMatP;
varying vec4 vLight;
flat varying vec4 vInfo;
varying vec2 vUv2;
varying vec3 vWPos;
uniform float uTime;
`,
  m = `
#include <begin_vertex>
vCol = aCol;
vMatP = aMat;
vLight = aLight;
vInfo = aInfo;
vUv2 = uv;
{
  int lmFv = int(aInfo.y + 0.5);
  vec4 lmW = modelMatrix * vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    lmW = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
  #endif
  if ((lmFv & 64) != 0) {
    float k = aMat.w * 1.6;
    float ph = lmW.x * 0.11 + lmW.z * 0.07;
    transformed.x += (sin(uTime * 1.25 + ph) + 0.5 * sin(uTime * 2.7 + ph * 2.3)) * 0.18 * k;
    transformed.z += cos(uTime * 1.05 + ph * 1.3) * 0.14 * k;
  }
  vWPos = lmW.xyz;
}
`,
  h = `
#include <project_vertex>
#ifdef USE_REVERSED_DEPTH_BUFFER
gl_Position.z = max(gl_Position.z, gl_Position.w * 0.00001);
#else
gl_Position.z = min(gl_Position.z, gl_Position.w * 0.99999);
#endif
`,
  g = `
uniform highp sampler2DArray uAtlas;
uniform highp sampler2DArray uSigns;
uniform vec3 uTowerColor;
uniform vec3 uFlashPos;
uniform vec3 uFlashColor;
uniform vec3 uFloodColor;
uniform float uNight;
uniform float uTime;
uniform float uWet;
uniform float uShow;
uniform float uFogStretch;
uniform float uFogMax;
uniform float uFakeEnv;
uniform vec3 uSkyH;
uniform vec3 uSkyZ;
uniform vec4 uShowRect;
uniform float uShowLayer;
uniform float uShowCol;
uniform vec4 uTowerFrame;
uniform float uWinLate;
varying vec4 vCol;
varying vec4 vMatP;
varying vec4 vLight;
flat varying vec4 vInfo;
varying vec2 vUv2;
varying vec3 vWPos;
// integer hash (pcg3d): stable per window cell at any coordinate (the old sin() hash lost precision on big cell
// coordinates and lit windows in correlated blocks)
float lmHash3(ivec3 p) {
  uvec3 v = uvec3(p + 262144) * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  return float((v.x ^ v.y ^ v.z) >> 8u) * (1.0 / 16777216.0);
}
`,
  _ = `
int lmF = int(vInfo.y + 0.5);
int lmF2 = int(vInfo.z + 0.5);
int lmW = int(vInfo.w + 0.5);
float lmLayer = vInfo.x;
vec2 lmUv = vUv2;
if ((lmF & 4) != 0) lmUv.x += uTime * 0.035;
if ((lmF2 & 1) != 0) lmUv.y += floor(uTime / 7.0) * 0.25;
vec2 lmDx = dFdx(vUv2), lmDy = dFdy(vUv2);
vec4 lmTex;
if (lmLayer < 127.5) lmTex = textureGrad(uAtlas, vec3(lmUv, lmLayer), lmDx, lmDy);
else lmTex = textureGrad(uSigns, vec3(lmUv, lmLayer - 128.0), lmDx, lmDy);
vec3 lmAlbedo = lmTex.rgb * vCol.rgb;
diffuseColor.rgb *= lmAlbedo * (1.0 - 0.25 * uWet);
if ((lmW & 32) != 0 && lmTex.a < 0.42) discard;
`,
  v = `
float roughnessFactor = vMatP.x;
`,
  y = `
float metalnessFactor = vMatP.y;
`,
  b = `
#include <normal_fragment_maps>
{
  vec3 lmUpV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float lmUp = dot(normal, lmUpV);
  roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.28, uWet * smoothstep(0.55, 0.95, lmUp));
  if ((lmF & 128) != 0) {
    // water ripples: perturb the normal in world space
    vec2 q = vWPos.xz;
    float t = uTime;
    vec3 pw = vec3(
      sin(q.x * 0.9 + t * 1.7) * 0.5 + sin(q.x * 2.3 - q.y * 1.1 + t * 2.9) * 0.35,
      0.0,
      cos(q.y * 1.1 + t * 1.3) * 0.5 + sin(q.y * 2.7 + q.x * 0.7 - t * 2.3) * 0.35);
    normal = normalize(normal + (viewMatrix * vec4(pw * 0.06, 0.0)).xyz);
  }
}
`,
  x = `
{
  vec3 lmE = ((lmF & 1) != 0) ? uTowerColor * (1.0 + uShow * 0.8) : vLight.rgb;
  vec3 lmEm = lmE * (vLight.a * 8.0);
  if ((lmF & 1) != 0 && uShow > 0.01 && uShowLayer >= 0.0) {
    // New Year show: glyphs lit across the facade (one glyph per two segments)
    vec3 nW0 = inverseTransformDirection(normal, viewMatrix);
    // horizontal glyph coordinate increasing to the viewer's right on every face
    float s = abs(nW0.x) > abs(nW0.z) ? -(vWPos.z - uTowerFrame.z) * sign(nW0.x) : (vWPos.x - uTowerFrame.x) * sign(nW0.z);
    float gu = clamp(s / 58.0 + 0.5, 0.0, 1.0);
    float gv = (vWPos.y - uTowerFrame.y) / uTowerFrame.w;
    if (gv > 0.0 && gv < 1.0) {
      vec2 cuv = vec2((uShowCol + gu) * 0.25, 1.0 - gv);
      vec2 suv = vec2(mix(uShowRect.x, uShowRect.z, cuv.x), mix(uShowRect.w, uShowRect.y, cuv.y));
      float gl = texture(uSigns, vec3(suv, uShowLayer)).a;
      float k = smoothstep(0.0, 0.6, uShow);
      lmEm = mix(lmEm, lmEm * 0.28, k * 0.8) + vec3(2.7, 2.35, 1.8) * gl * k;
    }
  }
  if ((lmF & 8) != 0) lmEm *= lmTex.rgb * 1.25;
  lmEm *= lmTex.a;
  if ((lmF & 32) != 0) {
    vec3 nW = inverseTransformDirection(normal, viewMatrix);
    // window cell = cw bays × one floor (uv repeats); faces (quantized world normal) and 400 m height bands are
    // hashed independently. Cells change state now and then (every few minutes).
    ivec2 fq = ivec2(floor(nW.xz * 3.0 + 0.5));
    int face = fq.x * 7 + fq.y + int(floor(vWPos.y / 400.0)) * 49;
    float frac = vMatP.w * (((lmW & 64) != 0) ? uWinLate : 1.0);
    // a lit room is brighter under its ceiling lights than at the sill (v runs up one floor per repeat)
    float lmCeil = 0.72 + 0.42 * smoothstep(0.15, 0.95, fract(lmUv.y));
    if ((lmF & 1) != 0) {
      // TOWER + WINDOWS (Taipei 101 curtain wall): dark blue-green glass; one bay (1.6 m) × one floor per cell,
      // offices lit in tenant clusters of 3-6 bays (a cluster is occupied with probability ≈ 3 × the fraction,
      // so lit bays gather instead of speckling), ~10 % at 21:00 falling to ~3 % after 23:00 (OFFICE bit ×
      // uWinLate), warm-white ≈ 0.3 in the vision glass only (atlas mask). The weekday colour stays a wash
      // spilling down from each segment's lit rim (its profile rides in the emissive intensity).
      ivec2 c = ivec2(floor(lmUv));
      int fl = c.y + int(floor(vWPos.y / 34.0)) * 12;
      int gw = 3 + int(lmHash3(ivec3(fl, face, 7)) * 4.0);
      int gx = (c.x + 4096 + int(lmHash3(ivec3(fl, face, 3)) * 5.0)) / gw;
      float g0 = lmHash3(ivec3(gx, fl, face));
      float ep = floor(uTime / 240.0 + g0);
      float q = clamp(frac * 3.0, 0.0, 1.0);
      float occ = step(lmHash3(ivec3(gx, fl, face + int(ep) * 131)), q);
      float hb = lmHash3(ivec3(c.x, fl, face + 17));
      float lit = occ * step(hb, frac / max(q, 1e-3));
      vec3 tint = mix(vec3(1.0, 0.84, 0.62), vec3(0.86, 0.93, 1.0), step(0.72, fract(g0 * 7.3)));
      lmEm = lmEm * 0.85 + lit * (0.24 + 0.12 * fract(hb * 13.7)) * lmCeil * tint * lmTex.a;
    } else {
      vec2 cell = floor(lmUv / vec2(max(1.0, float(lmW & 15)), 1.0));
      ivec3 ci = ivec3(int(cell.x), int(cell.y), face);
      float h0 = lmHash3(ci);
      float h = lmHash3(ci + ivec3(0, 0, int(floor(uTime / 180.0 + h0)) * 97));
      float lit = step(h, frac);
      // varied warm/cool interiors, never blown-out white
      float v = fract(h * 13.7);
      vec3 tint = mix(vec3(1.0, 0.78, 0.5), vec3(0.85, 0.92, 1.0), step(0.78, fract(h * 7.3)));
      lmEm *= lit * (0.28 + 0.42 * v) * lmCeil * tint;
    }
  }
  float lmK = uNight;
  if ((lmF & 16) != 0) lmK = max(uNight, 0.7);
  if ((lmF & 2) != 0) { lmK = max(uNight, 0.8); lmEm *= step(0.6, fract(uTime * 0.75 + vMatP.w)); }
  lmEm *= lmK;
  // Floodlighting (night): ground-mounted ~3000 K uplights every ~6 m along each facade. The baked per-vertex
  // amount (aMat.z) already carries the uplight profile (≈1 at the base → 0.2 at the top of the building, see
  // floodFalloff); here each fixture throws a cone that widens with height above the lamps (flags2 bits 1..7 =
  // lamp height / 2 m + 1), with a hot pool right above the lamp, overlapping into an even wash higher up. Roofs
  // and other up-facing surfaces catch little of it, soffits catch it all. Capped at 0.45 × albedo so a lit
  // facade never outshines its own daylight look.
  if (vMatP.z > 0.002 && uNight > 0.001) {
    vec3 nWf = inverseTransformDirection(normal, viewMatrix);
    float hb = max(0.0, vWPos.y - float(max((lmF2 >> 1) - 1, 0)) * 2.0);
    float fs = abs(nWf.x) > abs(nWf.z) ? vWPos.z : vWPos.x;
    float fd = abs(fract(fs / 6.0) - 0.5) * 6.0;
    float fw = 0.45 + hb * 0.24;
    float cone = min(1.0, (1.0 - smoothstep(fw * 0.4, fw, fd)) + (1.0 - smoothstep(fw * 0.4, fw, 6.0 - fd)));
    float hot = 1.0 + 1.6 * exp(-hb * 0.25);
    float side = 1.0 - 0.72 * max(0.0, nWf.y);
    float fk = vMatP.z * (0.2 + 0.8 * cone) * hot * side * 0.26;
    lmEm += lmAlbedo * uFloodColor * min(fk, 0.45) * uNight;
  }
  // ground bounce: eave soffits / ceilings would otherwise be pitch black (sky fill only reaches upward faces)
  {
    vec3 nWb = inverseTransformDirection(normal, viewMatrix);
    lmEm += lmAlbedo * uSkyH * 0.16 * max(0.0, -nWb.y) * (1.0 - 0.9 * uNight) * vCol.a;
  }
  // fireworks flash light
  vec3 lmL = uFlashPos - vWPos;
  float lmD = length(lmL);
  vec3 lmNW = inverseTransformDirection(normal, viewMatrix);
  lmEm += lmAlbedo * uFlashColor * max(dot(lmNW, lmL / max(lmD, 1.0)), 0.15) / (1.0 + lmD * lmD * 0.000012);
  if (uFakeEnv > 0.5 && vMatP.y > 0.2) {
    // analytic sky reflection for glass/metal when no PMREM environment exists
    vec3 vd = normalize(vViewPosition);
    vec3 rw = inverseTransformDirection(reflect(-vd, normal), viewMatrix);
    float fres = pow(1.0 - clamp(dot(normal, vd), 0.0, 1.0), 4.0);
    vec3 sky = mix(uSkyH, uSkyZ, smoothstep(-0.05, 0.6, rw.y));
    sky = mix(sky, uSkyH * 0.55, step(rw.y, -0.02));
    float k = vMatP.y * (1.0 - vMatP.x) * (0.35 + 0.65 * fres);
    lmEm += sky * k * mix(vec3(1.0), lmAlbedo * 1.6, clamp(vMatP.y * 1.4 - 0.3, 0.0, 1.0)) * (1.0 - 0.85 * uNight);
  }
  totalEmissiveRadiance = lmEm;
}
#include <emissivemap_fragment>
`,
  S = `
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= vCol.a;
reflectedLight.directDiffuse *= mix(1.0, vCol.a, 0.45);
reflectedLight.indirectSpecular *= mix(1.0, vCol.a, 0.6);
`,
  C = `
#ifdef USE_FOG
  float lmFogD = ((lmW & 128) != 0) ? vFogDepth / uFogStretch : vFogDepth;
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * lmFogD * lmFogD );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, lmFogD );
  #endif
  if ((lmW & 128) != 0) fogFactor = min(fogFactor, mix(uFogMax, uFogMax * 0.42, uNight));
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif
`,
  w = `
#ifdef USE_FOG
if ((lmW & 128) != 0) {
  float fogFactor = taipeiHaze( length( vFogRel ) / uFogStretch, vFogRel.y );
  fogFactor = min(fogFactor, mix(uFogMax, uFogMax * 0.42, uNight));
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
} else {
  #include <fog_fragment>
}
#endif
`;
function T(e, t) {
  let n = new s({ color: 16777215, roughness: 0.8, metalness: 0 });
  n.name = `landmark`;
  let r = { value: e },
    i = { value: t };
  return (
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uAtlas = r),
        (e.uniforms.uSigns = i),
        (e.uniforms.uNight = d.uNight),
        (e.uniforms.uTime = d.uTime),
        (e.uniforms.uWet = d.uWet),
        (e.uniforms.uTowerColor = f.uTowerColor),
        (e.uniforms.uFlashPos = f.uFlashPos),
        (e.uniforms.uFlashColor = f.uFlashColor),
        (e.uniforms.uFloodColor = f.uFloodColor),
        (e.uniforms.uFogStretch = f.uFogStretch),
        (e.uniforms.uFogMax = f.uFogMax),
        (e.uniforms.uShow = f.uShow),
        (e.uniforms.uFakeEnv = f.uFakeEnv),
        (e.uniforms.uSkyH = f.uSkyH),
        (e.uniforms.uSkyZ = f.uSkyZ),
        (e.uniforms.uShowRect = f.uShowRect),
        (e.uniforms.uShowLayer = f.uShowLayer),
        (e.uniforms.uShowCol = f.uShowCol),
        (e.uniforms.uTowerFrame = f.uTowerFrame),
        (e.uniforms.uWinLate = f.uWinLate),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + p,
          )
          .replace(`#include <begin_vertex>`, m)
          .replace(`#include <project_vertex>`, h)));
      let t = c.fog_pars_fragment.includes(`taipeiHaze`);
      e.fragmentShader = e.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
` + g,
        )
        .replace(`#include <map_fragment>`, _)
        .replace(`#include <roughnessmap_fragment>`, v)
        .replace(`#include <metalnessmap_fragment>`, y)
        .replace(`#include <normal_fragment_maps>`, b)
        .replace(`#include <emissivemap_fragment>`, x)
        .replace(`#include <aomap_fragment>`, S)
        .replace(`#include <fog_fragment>`, t ? w : C);
    }),
    (n.customProgramCacheKey = () => `lm-v3`),
    n
  );
}
function E(e) {
  let t = e.landmarks?.material;
  if (!t) return null;
  let n = null;
  try {
    n = e.renderer.gl.properties.get(t)?.uniforms?.uAtlas?.value ?? null;
  } catch {
    n = null;
  }
  if (!n)
    try {
      let r = {
        uniforms: {},
        vertexShader: ``,
        fragmentShader: ``,
        defines: {},
      };
      (t.onBeforeCompile(r, e.renderer.gl),
        (n = r.uniforms.uAtlas?.value ?? null));
    } catch {
      n = null;
    }
  return n?.isDataArrayTexture ? n : null;
}
var D = null;
function O() {
  if (D) return D;
  let r = new e(new Uint8Array([255, 255, 255, 0]), 1, 1, 1);
  return (
    (r.name = `pack-layers-placeholder`),
    (r.colorSpace = t),
    (r.wrapS = r.wrapT = n),
    (r.needsUpdate = !0),
    (D = r),
    r
  );
}
function k(e, t, n) {
  let r = E(e),
    i = { value: r ?? O() },
    a = !!r,
    o = T(i.value, t);
  o.name = `landmark:${n}`;
  let s = o.onBeforeCompile;
  return (
    (o.onBeforeCompile = (e, t) => {
      (s.call(o, e, t), (e.uniforms.uAtlas = i));
    }),
    {
      mat: o,
      get ready() {
        return a;
      },
      resolve() {
        if (a) return !0;
        let t = E(e);
        return t ? ((i.value = t), (a = !0), !0) : !1;
      },
    }
  );
}
var A = null,
  j = null;
function M(e) {
  let t = e.landmarks?.material;
  if (!t) return [];
  if (A && j === t) return [A];
  A?.dispose();
  let n = new i();
  (n.setAttribute(
    `position`,
    new a(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new a(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new a(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new a(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new a(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new a(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new a(new Uint8Array(12), 4, !1)),
    n.setIndex(new a(new Uint16Array([0, 1, 2]), 1)));
  let o = new r(1, 3, 3, t);
  return (
    o.addInstance(o.addGeometry(n)),
    n.dispose(),
    (o.name = `pack-prewarm-lm`),
    (o.frustumCulled = !1),
    (o.perObjectFrustumCulled = !1),
    (o.sortObjects = !1),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    (A = o),
    (j = t),
    [o]
  );
}
export { E as landmarkLayers, M as lmPrototype, k as packMaterial };
