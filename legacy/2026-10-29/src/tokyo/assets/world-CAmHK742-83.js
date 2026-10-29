// tokyo/assets/world-CAmHK742 83 — assign
// Lines 29116-29178 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var e_ = 3,
  t_ = 3,
  n_ = {
    uStreetLm: { value: null },
    uLmXf: { value: new de(0, 0, 0, 0) },
    uLmGain: { value: 1.3 },
    uLmNight: q.uNight,
    uLmWet: q.uWet,
  },
  r_ = `varying vec3 vLmW;
varying float vLmNy;`,
  i_ = `
  {
    vec4 lmw = vec4(transformed, 1.0);
    vec3 lmn = objectNormal;
    #ifdef USE_BATCHING
    lmw = batchingMatrix * lmw;
    lmn = mat3(batchingMatrix) * lmn;
    #endif
    #ifdef USE_INSTANCING
    lmw = instanceMatrix * lmw;
    lmn = mat3(instanceMatrix) * lmn;
    #endif
    lmw = modelMatrix * lmw;
    vLmW = lmw.xyz;
    vLmNy = normalize(mat3(modelMatrix) * lmn).y;
  }`,
  a_ = `
  uniform sampler2D uStreetLm;
  uniform vec4 uLmXf;
  uniform float uLmGain;
  uniform float uLmNight;
  uniform float uLmWet;
  varying vec3 vLmW;
  varying float vLmNy;
  vec4 lmSample() {
    vec2 luv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
    if (luv.x < 0.0 || luv.y < 0.0 || luv.x > 1.0 || luv.y > 1.0) return vec4(0.0);
    return texture2D(uStreetLm, luv) * ${e_.toFixed(1)};
  }
  float lmNightK() { return smoothstep(0.25, 0.75, uLmNight); }
  // overlapping pools (junction floods, rows of shop fronts) compress instead of blowing out to white
  vec3 lmCompress(vec3 L) { return L * uLmGain / (1.0 + 0.35 * L); }
  // lamp-lit radiance of an albedo, with a soft knee: dark asphalt reads lit, white paint / pale granite under a
  // junction flood stays below the daylight white point
  vec3 lmLit(vec3 alb, vec3 L) { vec3 c = alb * L; return c / (1.0 + 2.6 * c); }
  vec3 lmStreet() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec4 s = lmSample();
    vec3 L = vLmW.y < ${t_.toFixed(1)} ? s.rgb : s.aaa * vec3(1.0, 0.72, 0.42);
    return lmCompress(L) * smoothstep(-0.15, 0.55, vLmNy) * k;
  }
  vec3 lmProp() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec3 L = lmSample().rgb;
    float hk = 1.0 - smoothstep(8.5, 13.0, vLmW.y);
    return lmCompress(L) * hk * (0.3 + 0.7 * max(vLmNy, 0.0)) * k;
  }`;
function o_(e) {
  Object.assign(e, n_);
}
