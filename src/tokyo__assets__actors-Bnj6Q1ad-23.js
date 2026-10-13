// tokyo__assets__actors-Bnj6Q1ad 23 — replace
// Lines 12068-12398 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var wc = {
    NONE: 0,
    HEAD: 1,
    TAIL: 2,
    BRAKE: 3,
    IND_L: 4,
    IND_R: 5,
    SIREN_R: 6,
    SIREN_B: 7,
    REVERSE: 8,
    SIGN: 9,
    TAXI: 10,
    BEACON: 11,
    PLATE: 12,
    CABIN: 13,
    VACANT: 14,
    SIREN_W: 15,
    ROUTE: 16,
    FARE: 17,
    TAXI_VACANT: 18,
  },
  Tc = { a: [0, 0, 0, 0], b: [0, 0, 0, 0] },
  Ec = Array.from({ length: 18 }, () => new xe()),
  Dc = Array.from({ length: 18 }, () => new xe()),
  Oc = (512).toFixed(1);
function kc(e, t, n, r, i, a) {
  return e.set(
    Math.min(Math.max(t, 0), 1) + 2 * Math.max(0, Math.floor(i)),
    n,
    r,
    Math.min(Math.max(a, 0), 0.9999),
  );
}
var Ac = new he(new Uint8Array([0, 0, 0, 255]), 1, 1);
Ac.needsUpdate = !0;
var jc = {
  uStreetLm: { value: Ac },
  uLmXf: { value: new xe(0, 0, 0, 0) },
  uLmK: { value: 0 },
};
function Mc(e, t) {
  ((jc.uStreetLm.value = e), (jc.uLmXf.value = t));
}
var Nc = `
uniform float uNight;
uniform float uTime;
uniform float uWet;
uniform vec3 uPaint;
uniform vec4 uState;   // head, brake, reverse, burnt
uniform vec4 uSig;     // indL, indR, siren, seed
uniform vec4 uVarA;
uniform vec4 uVarB;
uniform float uPlateDU;
attribute vec4 vdata;
attribute float vvar;
#ifdef USE_INSTANCING
attribute float instanceLights;
attribute float instanceSeed;
#endif
#ifdef USE_BATCHING
attribute float vkind;
uniform vec4 uVarAk[18];
uniform vec4 uVarBk[18];
#endif
varying float vEmK;
varying vec2 vRM;
varying float vBurnt;
varying float vPaintK;
varying vec3 vLmW;
varying float vLmNy;
float vhash(float n) { return fract(sin(n) * 43758.5453123); }
float vbit(float v, float b) { return mod(floor(v / b), 2.0); }
`,
  Pc = `
  float seed;
  vec3 paintC = uPaint;
  float fl = 0.0;
  #ifdef USE_INSTANCING
    fl = instanceLights;
    #ifdef USE_INSTANCING_COLOR
      paintC = instanceColor.rgb;
    #endif
    seed = instanceSeed > 0.0 ? instanceSeed : fract(dot(paintC, vec3(12.9898, 78.233, 37.719)) * 13.37 + float(gl_InstanceID) * 0.6180339);
  #elif defined(USE_BATCHING_COLOR)
    // batches (parked, vehicles' + traffic's traffic batches): colour = (paint.r + 2 · INSTANCE_LIGHTS bits, paint.g,
    // paint.b, seed) — traffic's encoding (src/traffic/batch.ts). The three plain assignments below are also the hook
    // its patchVertex rewrites (it decodes red itself); the decode after them is idempotent, so both forms work.
    vec4 bcol = getBatchingColor(getIndirectIndex(gl_DrawID));
    paintC = bcol.rgb;
    seed = bcol.a;
    fl = 0.0;
    float flr = floor(paintC.r * 0.5);
    fl += flr;
    paintC.r -= 2.0 * flr;
  #else
    seed = uSig.w;
  #endif
  vec4 varA = uVarA;
  vec4 varB = uVarB;
  #ifdef USE_BATCHING
    int kIdx = int(vkind + 0.5);
    varA = uVarAk[kIdx];
    varB = uVarBk[kIdx];
  #endif
  float rA = vhash(seed * 91.7 + 1.3);
  float rC = vhash(seed * 17.3 + 3.1);
  float rD = vhash(seed * 29.9 + 5.7);
  // ---- variants (hide by collapsing the triangle)
  float g = vvar;
  float visible = 1.0;
  if (g > 0.5) {
    if (g < 4.5) {
      float lo = g < 1.5 ? 0.0 : (g < 2.5 ? varA.x : (g < 3.5 ? varA.y : varA.z));
      float hi = g < 1.5 ? varA.x : (g < 2.5 ? varA.y : (g < 3.5 ? varA.z : varA.w));
      visible = (rA >= lo && rA < hi) ? 1.0 : 0.0;
    } else if (g < 8.5) {
      float p = g < 5.5 ? varB.x : (g < 6.5 ? varB.y : (g < 7.5 ? varB.z : varB.w));
      float r = vhash(seed * (13.0 + g * 7.0) + g);
      visible = r < p ? 1.0 : 0.0;
    } else if (g < 9.5) {
      // group 9: visible only when no exclusive accessory (1..4) was rolled
      visible = rA >= varA.w ? 1.0 : 0.0;
    } else {
      // groups 10..13: complements of 5..8 (e.g. classic body when the Gogoro body is not rolled)
      float gg = g - 5.0;
      float p = gg < 5.5 ? varB.x : (gg < 6.5 ? varB.y : (gg < 7.5 ? varB.z : varB.w));
      float r = vhash(seed * (13.0 + gg * 7.0) + gg);
      visible = r < p ? 0.0 : 1.0;
    }
  }
`,
  Fc =
    Pc +
    `
  // ---- colors
  vColor = vec4(color, 1.0);
  float pk = vdata.x;
  vPaintK = 0.0;
  if (pk > 0.5 && pk < 1.5) { vColor.rgb *= paintC; vPaintK = 1.0; }
  else if (pk > 1.5 && pk < 2.5) {
    // rider jacket (raincoat when wet)
    int i = int(floor(rC * 8.0));
    vec3 j = vec3(0.12, 0.13, 0.15);
    if (i == 1) j = vec3(0.55, 0.08, 0.07); else if (i == 2) j = vec3(0.08, 0.16, 0.36); else if (i == 3) j = vec3(0.62, 0.6, 0.55);
    else if (i == 4) j = vec3(0.2, 0.3, 0.18); else if (i == 5) j = vec3(0.7, 0.45, 0.12); else if (i == 6) j = vec3(0.35, 0.33, 0.36); else if (i == 7) j = vec3(0.85, 0.85, 0.82);
    vec3 rc = vec3(0.95, 0.75, 0.05);
    if (i == 1 || i == 5) rc = vec3(0.1, 0.35, 0.85); else if (i == 2 || i == 6) rc = vec3(0.85, 0.12, 0.35); else if (i == 3) rc = vec3(0.2, 0.7, 0.4);
    vColor.rgb *= mix(j, rc, smoothstep(0.35, 0.6, uWet) * step(0.25, rD));
  } else if (pk > 2.5 && pk < 3.5) {
    int i = int(floor(rD * 6.0));
    vec3 h = vec3(0.92, 0.92, 0.9);
    if (i == 1) h = vec3(0.08, 0.08, 0.09); else if (i == 2) h = vec3(0.75, 0.12, 0.1); else if (i == 3) h = vec3(0.95, 0.8, 0.2); else if (i == 4) h = vec3(0.45, 0.62, 0.78); else if (i == 5) h = vec3(0.9, 0.55, 0.7);
    vColor.rgb *= h;
  } else if (pk > 4.5 && pk < 5.5) {
    // pillion top (its own palette; raincoat when wet)
    int i = int(floor(vhash(seed * 61.3 + 2.9) * 7.0));
    vec3 j = vec3(0.86, 0.86, 0.84);
    if (i == 1) j = vec3(0.1, 0.1, 0.11); else if (i == 2) j = vec3(0.85, 0.52, 0.62); else if (i == 3) j = vec3(0.78, 0.7, 0.56);
    else if (i == 4) j = vec3(0.5, 0.64, 0.8); else if (i == 5) j = vec3(0.45, 0.45, 0.47); else if (i == 6) j = vec3(0.42, 0.45, 0.3);
    vec3 rc = i < 3 ? vec3(0.85, 0.2, 0.4) : vec3(0.95, 0.75, 0.1);
    vColor.rgb *= mix(j, rc, smoothstep(0.35, 0.6, uWet) * step(0.4, rD));
  } else if (pk > 3.5) { vColor.rgb *= paintC * 0.5; vPaintK = 0.5; }
  // ---- lamps
  float head, brake, rev, indL, indR, siren, burnt, occupied, fare;
  #ifdef USE_INSTANCING
    head = max(0.0, 0.0); // (no-op: the anchor traffic/batch.ts patchVertex rewrites; the real block follows)
  #endif
  #if defined(USE_INSTANCING) || defined(USE_BATCHING_COLOR)
    head = max(smoothstep(0.28, 0.55, uNight), vbit(fl, 32.0));
    brake = vbit(fl, 1.0);
    rev = vbit(fl, 64.0);
    float hz = vbit(fl, 8.0);
    indL = max(vbit(fl, 2.0), hz);
    indR = max(vbit(fl, 4.0), hz);
    siren = vbit(fl, 16.0);
    burnt = vbit(fl, 128.0);
    occupied = vbit(fl, 256.0);
    fare = occupied * (1.0 - vbit(fl, ${Oc}));
    head *= 1.0 - vbit(fl, ${Oc});
  #elif defined(USE_BATCHING)
    head = 0.0; brake = 0.0; rev = 0.0; indL = 0.0; indR = 0.0; siren = 0.0; burnt = 0.0; occupied = 1.0; fare = 0.0;
  #else
    head = uState.x; brake = uState.y; rev = uState.z; burnt = uState.w;
    indL = uSig.x; indR = uSig.y; siren = uSig.z; occupied = step(0.5, fract(uSig.w * 7.31)); fare = occupied;
  #endif
  float L = vdata.y;
  float t = uTime + seed * 3.7;
  float blink = step(0.5, fract(t * 1.45));
  float em = 0.0;
  if (L > 0.5) {
    if (L < 1.5) em = 0.35 + head * 3.2;
    else if (L < 2.5) em = 0.12 + head * 1.4 + brake * 3.2;
    else if (L < 3.5) em = brake * 3.6;
    else if (L < 4.5) em = indL * blink * 3.0;
    else if (L < 5.5) em = indR * blink * 3.0;
    else if (L < 6.5) em = siren * step(0.5, fract(uTime * 2.6)) * (0.55 + 0.45 * step(0.5, fract(uTime * 13.0))) * 6.0;
    else if (L < 7.5) em = siren * step(0.5, fract(uTime * 2.6 + 0.5)) * (0.55 + 0.45 * step(0.5, fract(uTime * 13.0 + 0.3))) * 6.0;
    else if (L < 8.5) em = rev * 2.6;
    else if (L < 9.5) em = 0.55 + uNight * 1.9;
    else if (L < 10.5) em = 0.15 + uNight * 1.6;
    else if (L < 11.5) em = step(0.5, fract(uTime * 1.2 + seed)) * (1.0 + uNight * 2.0) * (0.6 + 0.4 * siren) ;
    else if (L < 12.5) { em = head * 0.45; }
    else if (L < 13.5) em = smoothstep(0.2, 0.8, uNight) * 0.75;
    else if (L < 14.5) em = (1.0 - occupied) * (0.6 + uNight * 2.2);
    else if (L < 15.5) em = siren * step(0.7, fract(uTime * 5.2)) * 5.0;
    else if (L > 16.5 && L < 17.5) em = fare * (0.6 + uNight * 2.2);
    else if (L > 17.5 && L < 18.5) em = (1.0 - occupied) * (0.15 + uNight * 1.6);
    else em = 0.55 + uNight * 1.9;
  }
  // lit interiors (bus windows at night): glass turns warm white & glows
  if (L > 12.5 && L < 13.5) vColor.rgb = mix(vColor.rgb, vec3(0.86, 0.84, 0.74), smoothstep(0.2, 0.8, uNight) * 0.7);
  // plates: pick one of 4 variants per vehicle
  #ifdef USE_MAP
  if (L > 11.5 && L < 12.5) vMapUv.x += floor(rD * 4.0) * uPlateDU;
  // bus route LED: one of ${gc.length} rows
  if (L > 15.5 && L < 16.5) vMapUv.y -= floor(vhash(seed * 53.1 + 9.3) * ${gc.length}.0) * ${yc.toFixed(6)};
  #endif
  vEmK = em * (1.0 - burnt);
  vBurnt = burnt;
  float rough = vdata.z;
  rough = mix(rough, rough * 0.45, uWet * (0.4 + 0.6 * vPaintK));
  vRM = vec2(rough, vdata.w);
`,
  Ic = `
  {
    vec4 lmw = vec4(transformed, 1.0);
    #ifdef USE_BATCHING
    lmw = batchingMatrix * lmw;
    #endif
    #ifdef USE_INSTANCING
    lmw = instanceMatrix * lmw;
    #endif
    lmw = modelMatrix * lmw;
    vLmW = lmw.xyz;
    vLmNy = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz).y;
  }
`,
  Lc = `
  uniform sampler2D uStreetLm;
  uniform vec4 uLmXf;
  uniform float uLmK;
  varying vec3 vLmW;
  varying float vLmNy;
  // lamp pools on the body: the street channel (fades above the lamp heads, tops get it all, sides part of it),
  // compressed where pools overlap, soft knee so white paint under a junction flood stays below daylight white
  vec3 vehStreetLight(vec3 alb) {
    if (uLmK <= 0.0) return vec3(0.0);
    vec2 luv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
    if (luv.x < 0.0 || luv.y < 0.0 || luv.x > 1.0 || luv.y > 1.0) return vec3(0.0);
    vec3 L = texture2D(uStreetLm, luv).rgb * 3.0;
    L = L / (1.0 + 0.35 * L);
    float hk = 1.0 - smoothstep(8.5, 13.0, vLmW.y);
    vec3 c = alb * L * uLmK * hk * (0.3 + 0.7 * max(vLmNy, 0.0));
    return c / (1.0 + 2.6 * c);
  }
`;
function Rc(e) {
  let t = new _e({ vertexColors: !0, roughness: 0.5, metalness: 0, map: Sc() }),
    n = e.variants ?? Tc,
    r = {
      uPaint: { value: new Ae(e.paint ?? 16777215) },
      uState: { value: new xe(0, 0, 0, 0) },
      uSig: { value: new xe(0, 0, 0, 0.5) },
      uVarA: { value: new xe(...n.a) },
      uVarB: { value: new xe(...n.b) },
      uPlateDU: { value: mc },
      uVarAk: { value: Ec },
      uVarBk: { value: Dc },
    };
  return (
    (t.vu = r),
    (t.onBeforeCompile = (e) => {
      (Object.assign(e.uniforms, r),
        (e.uniforms.uNight = Qe.uNight),
        (e.uniforms.uTime = Qe.uTime),
        (e.uniforms.uWet = Qe.uWet),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + Nc,
          )
          .replace(`#include <color_vertex>`, Fc)
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
  if (visible < 0.5) transformed = vec3(0.0);
` + Ic,
          )),
        Object.assign(e.uniforms, jc),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying float vEmK;
varying vec2 vRM;
varying float vBurnt;
varying float vPaintK;
` + Lc,
          )
          .replace(`#include <map_fragment>`, ``)
          .replace(
            `#include <color_fragment>`,
            `
        diffuseColor.rgb *= vColor.rgb;
        #ifdef USE_MAP
          vec4 atl = texture2D(map, vMapUv);
          diffuseColor.rgb = diffuseColor.rgb * (1.0 - atl.a) + atl.rgb;
        #endif
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.045, 0.04, 0.035) + 0.03 * vPaintK, vBurnt);
        `,
          )
          .replace(
            `#include <roughnessmap_fragment>`,
            `float roughnessFactor = mix(vRM.x, 1.0, vBurnt);`,
          )
          .replace(
            `#include <metalnessmap_fragment>`,
            `float metalnessFactor = vRM.y * (1.0 - vBurnt);`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * vEmK + vehStreetLight(diffuseColor.rgb);`,
          )));
    }),
    (t.customProgramCacheKey = () =>
      e.batched ? `veh-batch-v3` : e.instanced ? `veh-inst-v2` : `veh-phys-v2`),
    t
  );
}
