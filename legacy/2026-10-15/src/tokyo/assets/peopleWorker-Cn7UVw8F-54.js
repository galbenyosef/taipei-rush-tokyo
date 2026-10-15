// tokyo/assets/peopleWorker-Cn7UVw8F 54 — replace
// Lines 21956-22294 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function Rc(e, t) {
  ((e.onBeforeCompile = (e) => {
    ((e.uniforms.uAtlas = { value: t }),
      (e.uniforms.uHasAtlas = { value: +!!t }),
      (e.uniforms.uNight = va.uNight),
      (e.uniforms.uWet = va.uWet),
      (e.uniforms.uSunDir = va.uSunDir),
      (e.uniforms.uCharFill = Lc()),
      (e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>

attribute vec4 uvRect;
attribute vec4 surf;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
`,
        )
        .replace(
          `#include <uv_vertex>`,
          `#include <uv_vertex>
  vUvT = uv; vRect = uvRect; vSurf = surf; vObjP = position;`,
        )));
    let n = I.lights_physical_pars_fragment.replace(
      `void RE_Direct_Physical(`,
      `void RE_Direct_Physical_Base(`,
    );
    e.fragmentShader = e.fragmentShader
      .replace(
        `#include <common>`,
        `#include <common>

uniform sampler2D uAtlas;
uniform float uHasAtlas;
uniform float uNight;
uniform float uWet;
uniform vec3 uSunDir;
uniform vec4 uCharFill;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
// per-fragment values shared with the RE_Direct wrapper
int gChK;
vec3 gHairT;
float gTexL;
vec3 gAlbedo;
float chHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float chNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(chHash(i), chHash(i + vec3(1.0, 0.0, 0.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 0.0)), chHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(chHash(i + vec3(0.0, 0.0, 1.0)), chHash(i + vec3(1.0, 0.0, 1.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 1.0)), chHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// derivative bump with unnormalized screen-space sigmas → the height is in meters (true slopes at any distance)
vec3 chPerturb(vec3 p, vec3 n, vec2 dH) {
  vec3 sx = dFdx(p), sy = dFdy(p);
  vec3 r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * n - grad);
}
`,
      )
      .replace(
        `#include <lights_physical_pars_fragment>`,
        n +
          `

void charDirect(const in IncidentLight directLight, const in vec3 N, const in vec3 V, inout ReflectedLight reflectedLight) {
  vec3 L = directLight.direction;
  float ndl = dot(N, L);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  if (gChK == 1) {
    // subsurface look: wrapped diffuse beyond the Lambert terminator, red-shifted (blood & melanin scatter)
    float wrapR = clamp((ndl + 0.5) / 1.5, 0.0, 1.0);
    float wrapG = clamp((ndl + 0.22) / 1.22, 0.0, 1.0);
    float lam = clamp(ndl, 0.0, 1.0);
    vec3 scatter = vec3(wrapR * wrapR, wrapG * wrapG, wrapG * wrapG * 0.92) - vec3(lam);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * max(scatter, vec3(0.0)) * vec3(0.85, 0.42, 0.34) * RECIPROCAL_PI;
    // back-light transmission at thin silhouettes (ears, nose wings, fingers)
    float back = pow(clamp(dot(V, -L), 0.0, 1.0), 4.0) * pow(1.0 - ndv, 2.0);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * vec3(1.0, 0.3, 0.2) * back * 0.25;
  } else if (gChK == 2) {
    // Kajiya-Kay: primary (shifted toward the root, white) + secondary (toward the tip, hair-tinted, noisy)
    vec3 T = gHairT;
    vec3 H = normalize(L + V);
    vec3 T1 = normalize(T + N * 0.12), T2 = normalize(T - N * 0.1);
    float th1 = dot(T1, H), th2 = dot(T2, H);
    float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 110.0);
    float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 22.0);
    float strand = 0.35 + 1.2 * gTexL * gTexL;
    float vis = smoothstep(-0.15, 0.35, ndl);
    // the white primary lobe scales with the hair's lightness: near-black hair keeps a thin sheen instead of turning
    // silver-grey under a high sun (seen from behind / above); blond / dyed hair keeps the full highlight
    float prim = 0.045 + 0.075 * clamp(dot(gAlbedo, vec3(0.3333)) * 7.0, 0.0, 1.0);
    reflectedLight.directSpecular += directLight.color * vis * (vec3(prim) * s1 * strand + gAlbedo * 0.9 * s2 * strand);
    // Kajiya diffuse: strands light from any side (softer terminator than Lambert)
    float tl = dot(T, L);
    float kd = sqrt(max(0.0, 1.0 - tl * tl));
    reflectedLight.directDiffuse += directLight.color * gAlbedo * RECIPROCAL_PI * max(0.0, 0.35 * kd * smoothstep(-0.4, 0.3, ndl) - 0.25 * max(ndl, 0.0));
  } else if (gChK == 0 || gChK == 9) {
    // cloth fuzz / satin sheen: grazing retro-scatter, lit from the light side
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = gChK == 9 ? pow(1.0 - ndv, 2.0) * 0.45 : pow(1.0 - ndv, 4.0) * 0.55;
    reflectedLight.directSpecular += directLight.color * gAlbedo * sheen * wrap * RECIPROCAL_PI;
  }
}
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  RE_Direct_Physical_Base(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
  charDirect(directLight, geometryNormal, geometryViewDir, reflectedLight);
}
`,
      )
      .replace(
        `#include <color_fragment>`,
        `#include <color_fragment>

  int chK = int(vSurf.x + 0.5);
  gChK = chK;
  float chMode = vSurf.z;
  float chTexL = 0.75;
  float chH = 0.0;
  bool chKill = false;
  // strand direction (hair tiles run along v) from the UV derivatives — computed in uniform control flow
  vec3 chP = -vViewPosition;
  vec3 chDp1 = dFdx(chP), chDp2 = dFdy(chP);
  vec2 chDuv1 = dFdx(vUvT), chDuv2 = dFdy(vUvT);
  float chPix = length(fwidth(vObjP)); // meters per pixel (bind-pose space)
  if (uHasAtlas > 0.5 && vRect.z > 0.0) {
    vec2 st = vUvT;
    bool rep = (chMode > 0.5 && chMode < 1.5) || chMode > 2.5;
    vec2 f = rep ? fract(st) : clamp(st, 0.0, 1.0);
    vec2 gx = chDuv1 * vRect.zw, gy = chDuv2 * vRect.zw;
    // clamp the mip level so tiles never bleed into their atlas neighbours (8 px gutters → level ≤ 3)
    vec2 tsz = vec2(textureSize(uAtlas, 0));
    float lod = log2(max(max(length(gx * tsz), length(gy * tsz)), 1e-6));
    float over = max(lod - 3.0, 0.0);
    float kk = exp2(-over);
    vec4 tx = textureGrad(uAtlas, vRect.xy + f * vRect.zw, gx * kk, gy * kk);
    if (chMode > 2.5) {
      // hair strands: R luminance, G coverage (cut where below the per-vertex threshold, dithered)
      chTexL = tx.r;
      float cut = vSurf.w;
      if (cut > 0.0 && tx.g < cut + (chHash(vec3(gl_FragCoord.xy, 0.0)) - 0.5) * 0.12) chKill = true;
      float far = smoothstep(0.0, 1.5, over);
      diffuseColor.rgb *= mix(0.55 + 0.6 * tx.r, 0.86, far);
      chH = tx.r * 0.00045 * (1.0 - far);
    } else if (rep) {
      chTexL = dot(tx.rgb, vec3(0.3333));
      if (over > 0.0) {
        // far away: fade to the tile's average (4 blurred quadrant samples)
        vec4 avg = 0.25 * (textureLod(uAtlas, vRect.xy + vec2(0.25, 0.25) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.25) * vRect.zw, 4.0)
          + textureLod(uAtlas, vRect.xy + vec2(0.25, 0.75) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.75) * vRect.zw, 4.0));
        tx = mix(tx, avg, smoothstep(0.0, 1.2, over));
      }
      diffuseColor.rgb *= tx.rgb;
      // woven relief from the tile luminance (cloth), fades with the mip clamp
      if (chK == 0 || chK == 9) chH = chTexL * 0.00035 * (1.0 - smoothstep(0.0, 1.0, over));
    } else {
      float inside = step(0.0, st.x) * step(st.x, 1.0) * step(0.0, st.y) * step(st.y, 1.0);
      tx *= inside;
      if (chMode > 1.5) {
        if (tx.a < 0.5) chKill = true;
        diffuseColor.rgb *= tx.rgb / max(tx.a, 1e-3);
      } else {
        diffuseColor.rgb = diffuseColor.rgb * (1.0 - tx.a) + tx.rgb;
      }
    }
  }
  gTexL = chTexL;
  if (chK == 1) {
    // skin micro relief: pores (~1 mm) + fine undulation (~4 mm) + a few larger soft bumps; fades before aliasing
    float amp = max(vSurf.w, 0.55);
    float pF = 1.0 - smoothstep(0.00025, 0.0007, chPix);
    float uF = 1.0 - smoothstep(0.0012, 0.003, chPix);
    float pores = chNoise(vObjP * 1150.0);
    float fine = chNoise(vObjP * 270.0 + 3.1);
    chH = amp * ((1.0 - pores * pores) * 0.00004 * pF + fine * 0.00011 * uF + chNoise(vObjP * 60.0) * 0.00018);
    gTexL = pores;
  } else if (chK == 0 || chK == 9) {
    // soft fabric wrinkles (≈ 3–6 cm) so no garment reads as a smooth CG shell
    chH += (chNoise(vObjP * 24.0) + 0.5 * chNoise(vObjP * 55.0 + 7.0)) * 0.0011;
    // compression folds: broken, warped bands across the limbs / torso (bind pose: limbs hang vertically),
    // strongest at the elbows, knees, ankles and the waist (heights for a ~1.55–1.8 m body)
    float fy = vObjP.y;
    float warp = chNoise(vObjP * 9.0) * 2.6 + chNoise(vObjP * 21.0) * 0.9;
    float band = 0.5 + 0.5 * sin(fy * 250.0 + warp * 3.2 + vObjP.x * 35.0 + vObjP.z * 20.0);
    float jt = exp(-pow((fy - 1.08) / 0.08, 2.0)) + exp(-pow((fy - 0.49) / 0.08, 2.0)) + 0.8 * exp(-pow((fy - 0.14) / 0.09, 2.0)) + 0.45 * exp(-pow((fy - 0.97) / 0.06, 2.0));
    float broken = smoothstep(0.3, 0.72, chNoise(vObjP * 6.5 + 1.7));
    chH += band * band * (0.18 + jt) * broken * 0.0016 * (1.0 - smoothstep(0.004, 0.012, chPix));
  }
  vec2 chDH = vec2(dFdx(chH), dFdy(chH));
  // hair strand tangent (direction of increasing tile v) from the cotangent frame; fallback: projected up
  {
    vec3 nG = normalize(cross(chDp1, chDp2));
    vec3 dp2perp = cross(chDp2, nG), dp1perp = cross(nG, chDp1);
    vec3 tv = dp2perp * chDuv1.y + dp1perp * chDuv2.y;
    vec3 upV = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;
    gHairT = dot(tv, tv) > 1e-14 ? normalize(tv) : upV;
  }
  if (chKill) discard;
  if (chK == 0 || chK == 2 || chK == 9) diffuseColor.rgb *= 1.0 - 0.18 * uWet;
  if (chK == 8) diffuseColor.a = vSurf.w;
  gAlbedo = diffuseColor.rgb;
`,
      )
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>

  roughnessFactor = vSurf.y;
  if (chK == 1) roughnessFactor *= 0.86 + 0.3 * gTexL; // pore breakup of the skin sheen
  if (chK == 0 || chK == 2 || chK == 9 || chK == 1) roughnessFactor = mix(roughnessFactor, 0.3, uWet * 0.55);
`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>

  metalnessFactor = chK == 5 ? 0.85 : 0.0;
`,
      )
      .replace(
        `#include <normal_fragment_maps>`,
        `#include <normal_fragment_maps>

  if (chK <= 2 || chK == 9) normal = chPerturb(-vViewPosition, normal, chDH);
  if (chK == 2) gHairT = normalize(gHairT - normal * dot(gHairT, normal) + 1e-5);
`,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `#include <emissivemap_fragment>

  {
    vec3 Vv = normalize(vViewPosition);
    float ndv = clamp(dot(normal, Vv), 0.0, 1.0);
    float rim = pow(1.0 - ndv, 3.0);
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float up = dot(normal, upV) * 0.5 + 0.5;
    float day = 1.0 - uNight;
    // night readability: soft overhead fill + cool rim (city lights)
    totalEmissiveRadiance += diffuseColor.rgb * uNight * (0.05 + 0.12 * up);
    // character fill of lit venues (walk-in interiors, stations): albedo × rgb × intensity
    totalEmissiveRadiance += diffuseColor.rgb * uCharFill.rgb * uCharFill.w;
    totalEmissiveRadiance += vec3(0.62, 0.72, 1.0) * rim * (0.02 + 0.2 * uNight) * (0.4 + 0.6 * dot(diffuseColor.rgb, vec3(0.33)));
    if (chK == 1) {
      // skin: warm ambient bounce (light scattered inside the skin never looks grey in shade)
      totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.5, 0.4) * (0.01 + 0.018 * day) * (0.6 + 0.4 * up);
    } else if (chK == 2) {
      // hair: faint sky sheen along the strands so dark hair keeps a shape in shade
      vec3 Hs = normalize(upV + Vv);
      float ts = dot(gHairT, Hs);
      float sh = pow(sqrt(max(0.0, 1.0 - ts * ts)), 30.0);
      totalEmissiveRadiance += vec3(0.5, 0.56, 0.66) * sh * (0.012 + 0.03 * gTexL) * (day + 0.4 * uNight);
    } else if (chK == 3) {
      totalEmissiveRadiance += diffuseColor.rgb * 0.035;
    } else if (chK == 6) {
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.7 + 1.6 * uNight);
    } else if (chK == 7) {
      // retro-reflective tape: bright toward the viewer at night (headlights / street lights)
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.08 + 1.3 * uNight * pow(ndv, 1.5));
    } else if (chK == 8) {
      totalEmissiveRadiance += vec3(0.9, 0.95, 1.0) * pow(1.0 - ndv, 3.0) * 0.25;
    }
  }
`,
      );
  }),
    (e.customProgramCacheKey = () => `charlib-hero-v4`));
}
const zc = /* @__PURE__ */ new Map();
function Bc(e) {
  let t = zc.get(e);
  if (t) return t;
  let n = new Yn({ vertexColors: !0, roughness: 0.8, metalness: 0 });
  (Rc(n, e), (n.name = `char-hero`));
  let r = new Yn({
    vertexColors: !0,
    roughness: 0.05,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
  });
  return (Rc(r, e), (r.name = `char-hero-lens`), (t = [n, r]), zc.set(e, t), t);
}
new N();
const Vc = 15e3;
function Hc(e, t, n) {
  let r = Jr(n.arrays),
    i = wr({ p: n.joints }),
    a = i.map((e) => e.position.clone()),
    [o, s] = Bc(n.page ? n.page.tex : null),
    c = new Nn(r, [o, s]);
  ((c.name = `char-${e.id}`),
    (c.castShadow = !0),
    (c.receiveShadow = !0),
    (c.frustumCulled = !0),
    (c.boundingSphere = r.boundingSphere.clone()),
    (c.boundingSphere.radius *= 1.35));
  let l = new Ze();
  ((l.name = `character-${e.id}`),
    l.add(i[R.hips]),
    l.add(c),
    l.updateMatrixWorld(!0));
  let u = new Rn(i);
  (c.bind(u),
    i[R.lidL].scale.set(1, 0.001, 1),
    i[R.lidR].scale.set(1, 0.001, 1));
  let d = n.joints;
  return {
    desc: e,
    lod: t,
    root: l,
    mesh: c,
    bones: i,
    skeleton: u,
    rest: a,
    joints: d.map((e) => e.clone()),
    triangles: n.triangles,
    breakdown: n.breakdown,
    trim: n.trim,
    height: n.height,
    thighLen: d[R.thighL].distanceTo(d[R.shinL]),
    shinLen: d[R.shinL].distanceTo(d[R.footL]),
    dispose() {
      (r.dispose(), u.dispose());
    },
  };
}
