// tokyo__assets__world-Bo9wkXrT 11 — uniforms
// Lines 3134-3481 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
var an = `
attribute vec3 aTint;
attribute vec4 aInfo;
varying vec3 vTint;
varying vec4 vInfo;
varying vec2 vTUv;
varying vec3 vWPos;
varying float vWNy;
varying vec3 vWN;
varying vec3 vCRel;
`,
  on = `
uniform sampler2D uAtlas;
#ifndef BLD_CUTOUT
uniform sampler2D uSignTex;
uniform sampler2D uAdTex;
uniform sampler2D uTickTex;
#endif
#ifdef BLD_LM
uniform sampler2D uLm;
uniform vec4 uLmXf;
#endif
uniform float uHour;
uniform float uRooms;
${Zt}
uniform float uLitRes;
uniform float uLitOff;
uniform float uWet;
uniform float uFakeRefl;
uniform vec3 uSkyCol;
varying vec3 vTint;
varying vec4 vInfo;
varying vec2 vTUv;
varying vec3 vWPos;
varying float vWNy;
varying vec3 vWN;
varying vec3 vCRel;
float bHash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float bHash1(float n) { return fract(sin(n) * 43758.5453); }
/** integer hash of integer-valued coordinates (no sin(): its precision on large arguments shows up as patterns) */
float bIHash(vec3 p) {
  uvec3 q = uvec3(ivec3(floor(p + 0.5)) + 65536);
  uint h = q.x * 0x8da6b343u ^ q.y * 0xd8163841u ^ q.z * 0xcb1ab31fu;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return float(h >> 8u) / 16777216.0;
}
/** smooth value noise (patchy weathering in world space) */
float bNoise(vec2 p, float s) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = bHash(vec3(i, s)), b = bHash(vec3(i + vec2(1.0, 0.0), s));
  float c = bHash(vec3(i + vec2(0.0, 1.0), s)), d = bHash(vec3(i + vec2(1.0, 1.0), s));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
${Xt()}
`,
  sn = `
  vec2 bUdx = dFdx(vTUv), bUdy = dFdy(vTUv);
  // camera-relative position: small magnitudes → exact derivatives (world coords jitter the room by ~2% per pixel quad)
  vec3 bPdx = dFdx(vCRel), bPdy = dFdy(vCRel);
  vec2 cellId = floor(vTUv);
  vec2 fr = vTUv - cellId;
  float variants = mod(vInfo.y, 16.0);
  float bMode = floor(vInfo.y / 16.0 + 0.01);
  float seed = vInfo.z;
  float tile = vInfo.x;
  vec4 tex = vec4(1.0);
  float glass = 0.0;
  float bRoomOn = 0.0;
  float bShopM = 0.0;
  vec3 albedo = vec3(1.0);
  // emission of the merged sign / LED-screen / ticker layers
  vec3 bSpecE = vec3(0.0);
#ifndef BLD_CUTOUT
  if (bMode > 5.5) {
    if (bMode < 6.5) {
      // shop signs, lanterns, crown strips, aviation lights: sign atlas, flicker per sign (aInfo.x), level aInfo.w
      tex = textureGrad(uSignTex, vTUv, bUdx, bUdy);
      albedo = tex.rgb * vTint;
      float sd = vInfo.z, fm = vInfo.x;
      float neon = 1.0 - 0.85 * step(0.965, bHash1(floor(uTime * 14.0) + sd * 7.13));
      float blink = step(0.45, fract(uTime * 0.55 + sd * 0.037));
      float chase = 0.55 + 0.45 * sin(uTime * 5.0 - vTUv.y * 90.0 + sd);
      float fl = fm < 0.5 ? 1.0 : fm < 1.5 ? neon : fm < 2.5 ? blink : chase;
      bSpecE = tex.rgb * 1.35 * fl * (vInfo.w / 128.0) * vTint;
    } else if (bMode < 7.5) {
      // LED screen: cycles through the 2 × 4 ad frames (7 s each, quick fade), scanlines
      float cyc = uTime / 7.0 + vInfo.z * 0.37;
      float fi = mod(floor(cyc), 8.0);
      vec2 org = vec2(mod(fi, 2.0), 3.0 - floor(fi / 2.0));
      vec2 sk = vec2(0.5, 0.25);
      float ph = fract(cyc);
      float fade = smoothstep(0.0, 0.05, ph) * smoothstep(1.0, 0.96, ph);
      vec3 sc = textureGrad(uAdTex, (org + clamp(vTUv, 0.0, 1.0)) * sk, bUdx * sk, bUdy * sk).rgb;
      albedo = vec3(0.02);
      bSpecE = sc * 1.25 * (0.15 + 0.85 * fade) * (0.9 + 0.1 * sin(gl_FragCoord.y * 1.7));
    } else {
      // red dot-matrix ticker (跑馬燈): the strip scrolls
      vec2 tu = vec2(vTUv.x * 0.25 + uTime * 0.03 + vInfo.z / 255.0, vTUv.y);
      vec3 tc = textureGrad(uTickTex, tu, bUdx * vec2(0.25, 1.0), bUdy * vec2(0.25, 1.0)).rgb;
      albedo = vec3(0.02);
      bSpecE = tc * 1.6;
    }
  } else
#endif
  {
  float h1 = bHash(vec3(cellId, seed));
  tile = vInfo.x + floor(h1 * variants);
  // shop faces carry their opening hours (aInfo.z): outside them the roll-up shutter comes down, glow off
  float bClosed = step(0.5, bMode) * (1.0 - step(1.5, bMode)) * (1.0 - bShopOpen(seed, uHour));
  // (a closed shop never shows the 出租 for-rent shutter variant)
  tile = mix(tile, 24.0, bClosed);
  bMode = mix(bMode, 4.0, bClosed);
  vec2 tOrg = vec2(mod(tile, BLD_COLS), floor(tile / BLD_COLS + 0.001));
  const float PAD = 3.0 / 256.0;
  const float SPAN = 1.0 - 2.0 * PAD;
  const vec2 TSC = vec2(1.0 / BLD_COLS, 1.0 / BLD_ROWS);
  vec2 auv = (tOrg + vec2(PAD + fr.x * SPAN, PAD + (1.0 - fr.y) * SPAN)) * TSC;
  vec2 gdx = bUdx * vec2(SPAN, -SPAN) * TSC;
  vec2 gdy = bUdy * vec2(SPAN, -SPAN) * TSC;
  // clamp the mip level so tiles never bleed into their atlas neighbours
  float texN = float(textureSize(uAtlas, 0).x);
  float g2 = max(dot(gdx, gdx), dot(gdy, gdy)) * texN * texN;
  float lodK = exp2(min(0.0, 4.5 - 0.5 * log2(max(g2, 1e-8))));
  tex = textureGrad(uAtlas, auv, gdx * lodK, gdy * lodK);
#ifdef BLD_CUTOUT
  if (tex.a < 0.5) discard;
#else
  glass = 1.0 - tex.a;
#endif
  // shop rooms behind the glass (interior mapping, roomArt.ts): aTint = the room's light / goods tint, frame untinted
#ifndef BLD_CUTOUT
  {
    int bti = int(tile + 0.5);
    if (uRooms > 0.5 && bMode > 0.5 && bMode < 1.5 && vInfo.w > 0.5 && bti >= 0 && bti < B_NT) {
      if (B_RA[bti].x > -0.5) {
        bRoomOn = 1.0;
        if (glass > 0.004) {
          float uh = bHash(vec3(floor(vTint.rg * 255.0 + 0.5) + cellId * vec2(3.17, 5.31), floor(vTint.b * 255.0 + 0.5) + seed * 0.37));
          vec3 rc = bRoom(bti, fr, tOrg, bUdx, bUdy, gdx * lodK, gdy * lodK, bPdx, bPdy, uh);
          tex.rgb = mix(tex.rgb, rc, glass);
        }
      }
    }
  }
#endif
  // homes: the window glass and its curtains are not painted in the wall colour
  float bIsRes = 1.0 - step(0.5, bMode);
  albedo = tex.rgb * mix(vTint, vec3(1.0), max(bRoomOn, glass * bIsRes * 0.85));
  {
    // every home has its own curtain / glass tone (the atlas paints one per window variant)
    float hc = bHash(vec3(cellId, seed + 21.3));
    vec3 jit = (0.84 + 0.28 * hc) * mix(vec3(1.03, 0.98, 0.91), vec3(0.94, 0.98, 1.04), fract(hc * 7.13));
    albedo *= mix(vec3(1.0), jit, glass * bIsRes);
  }
  bShopM = step(0.5, bMode) * (1.0 - step(2.5, bMode));
  // interiors seen through shop glass are dimmer than the sunlit street
  albedo *= 1.0 - (0.42 + 0.3 * bRoomOn) * glass * step(0.5, bMode) * (1.0 - step(1.5, bMode));
  // weathering in world space (so repeated tiles never read as a pattern): patchy discolouration, rain streaks
  // washing down from every floor slab / sill, splash-back grime near the pavement; roofs get blotches
  // (skipped on the low-quality Lambert variant: the painted atlas grime has to do on phones)
#ifndef BLD_LOW
  {
    float along = vWPos.x + vWPos.z;
    float vn = bNoise(vec2(along * 0.13, vWPos.y * 0.11), seed * 0.37);
    float isWall = (1.0 - glass) * (1.0 - step(0.5, abs(vWNy))) * (1.0 - bShopM);
    float colId = floor(along * 1.45);
    float sk = step(0.6, bHash(vec3(colId, 7.3, seed))) * (0.45 + 0.55 * bHash(vec3(colId, 2.1, seed)));
    float streak = sk * smoothstep(0.3, 1.0, fr.y) * (0.55 + 0.45 * vn) * step(3.0, vWPos.y);
    float splash = 1.0 - smoothstep(0.2, 2.2, vWPos.y);
    float dirt = (vn - 0.45) * 0.2 + streak * 0.16 + splash * (0.1 + 0.12 * vn);
    albedo *= 1.0 - isWall * dirt;
    float isRoof = step(0.5, vWNy);
    albedo *= 1.0 - isRoof * (bNoise(vWPos.xz * 0.21, seed) - 0.4) * 0.22;
  }
#endif
  // cheap baked AO: darker near the ground, slightly lighter up high
  float bAo = mix(0.78, 1.0, smoothstep(0.0, 3.2, vWPos.y)) * mix(1.0, 1.06, smoothstep(20.0, 90.0, vWPos.y));
  albedo *= bAo * (1.0 - 0.3 * uWet * (1.0 - glass));
  }
  diffuseColor.rgb *= albedo;
  float reflK = glass * (bMode < 0.5 || abs(bMode - 3.0) < 0.5 ? 1.0 : 0.45);
`,
  cn = `
  roughnessFactor = mix(roughnessFactor, 0.1, reflK);
  roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, uWet);
`,
  ln = `
  metalnessFactor = mix(metalnessFactor, abs(bMode - 3.0) < 0.5 ? 0.14 : 0.04, reflK);
`,
  un = `
  float bLitW = 0.0;
  if (bMode < 5.5) {
    float isRes = 1.0 - step(0.5, bMode);
    float isShop = step(0.5, bMode) * (1.0 - step(1.5, bMode));
    float isCeil = step(1.5, bMode) * (1.0 - step(2.5, bMode));
    float isOff = step(2.5, bMode) * (1.0 - step(3.5, bMode));
    float tb = vInfo.x;
    float panes = (tb > 8.5 && tb < 11.5) || (tb > 15.5 && tb < 18.5) ? 2.0 : (tb > 13.5 && tb < 15.5) ? 4.0 : 1.0;
    vec2 win = vec2(cellId.x * panes + floor(fr.x * panes), cellId.y);
    float occ = vInfo.w / 128.0;
    float hW = bHash(vec3(win + 17.0, seed + 3.1));
    float hF = bHash(vec3(cellId.y, seed, 5.1));
    float h3 = bHash(vec3(win, seed + 7.7));
    float h4 = bHash(vec3(win + 3.0, seed + 11.0));
    // homes: floors differ a little (households)
    float pRes = uLitRes * occ * (0.65 + 0.7 * hF);
    // offices: tenants light whole zones — runs of 2–6 window columns on one floor, boundaries shifted per floor —
    // busy floors stay lit, and a lit zone has only a few dark panes (clustered office lights, not a per-pane scatter
    // that reads as camouflage from a distance). Integer hashes per floor / zone / pane.
    float fO = bIHash(vec3(cellId.y, seed, 5.0));
    float zW = 2.0 + floor(fO * 5.0);
    float zId = floor((win.x + floor(fract(fO * 13.1) * zW)) / zW);
    float hZ = bIHash(vec3(zId, cellId.y, seed * 8.0 + 3.0));
    float hP = bIHash(vec3(win, seed * 8.0 + 6.0));
    float busy = step(fO, uLitOff * 0.4);
    float zLit = max(busy, step(hZ, uLitOff * 0.7 * occ));
    bLitW = mix(step(hW, pRes), zLit * step(0.1, hP), isOff);
    // the room: brighter toward the ceiling, a ceiling-panel line, blinds half / fully drawn in some windows
    float dyW = abs(bUdx.y) + abs(bUdy.y);
    float yW = fr.y;
    float grad = mix(0.5, 1.2, smoothstep(0.12, 0.92, yW)) + 0.45 * smoothstep(0.84, 0.9, yW) * (1.0 - smoothstep(0.9, 0.95, yW)) * isOff;
    float hB = bHash(vec3(win, seed + 9.7));
    float bl = fract(yW * 24.0);
    float aa = clamp(1.0 - dyW * 24.0 * 1.5, 0.0, 1.0);
    float slats = mix(0.62, 0.3 + 0.7 * smoothstep(0.25, 0.5, bl), aa);
    float drop = mix(0.35, 1.0, fract(hB * 13.7));
    float blinds = mix(1.0, slats, step(0.72, hB) * step(1.0 - drop, yW));
    vec3 warm = mix(vec3(1.0, 0.62, 0.3), vec3(1.0, 0.84, 0.58), h3);
    vec3 wcol = h3 > 0.84 ? vec3(0.72, 0.86, 1.0) : warm;
    // TV flicker in a few lit rooms
    float tv = step(0.94, h3) * (0.65 + 0.35 * sin(uTime * 9.0 + seed + win.x * 3.0));
    wcol = mix(wcol, vec3(0.45, 0.6, 1.0) * tv, step(0.94, h3));
    float lum = dot(tex.rgb, vec3(0.3, 0.59, 0.11));
    vec3 winE = mix(wcol, wcol * tex.rgb * 2.2, 0.35) * mix(0.35, 1.0, lum) * (0.4 + 0.6 * h4) * grad * blinds * bLitW * glass;
    // offices: cool fluorescent or warm LED per tenant (busy floors: one company per floor), even ceiling light
    float hT = mix(hZ, fO, busy);
    vec3 offCol = mix(vec3(0.74, 0.87, 1.0), vec3(1.0, 0.86, 0.66), step(0.66, fract(hT * 7.31)));
    offCol = mix(offCol, vec3(0.95, 0.95, 0.92), step(0.86, fract(hT * 3.71)));
    // one brightness per floor / zone (a little per pane); dark zones keep a faint corridor / exit-sign glow
    float offK = (busy > 0.5 ? 0.5 + 0.2 * fract(fO * 5.7) : 0.38 + 0.3 * fract(hZ * 9.1)) * (0.92 + 0.16 * hP);
    vec3 offE = offCol * glass * (offK * grad * blinds * bLitW + 0.02 * (1.0 - bLitW) * step(0.6, fract(hZ * 5.3)));
    // lit shop interiors: bright but readable (bloom adds the glow)
    // aInfo.w = interior brightness (0..200; convenience stores brightest)
    // (capped below the bloom threshold: lit rooms, not light boxes)
    vec3 shopE = min(tex.rgb * glass * (0.34 + min(vInfo.w, 200.0) / 150.0), vec3(0.9));
    vec3 ceilE = vec3(1.0, 0.98, 0.9) * glass * 2.2;
    float isLit = step(4.5, bMode) * (1.0 - step(5.5, bMode));
    // arcades glow warm at night (spill from shops and ceiling tubes)
    vec3 spill = albedo * vec3(1.0, 0.9, 0.75) * (isLit * 0.38 + isCeil * 0.55);
    totalEmissiveRadiance += isRes * winE + isOff * offE + isShop * shopE + isCeil * ceilE + spill;
#ifdef BLD_LM
    if (vWPos.y < 10.0) {
      // street lamps / shop fronts light the lower storeys too: the streets module's light map, sampled on the
      // pavement 1.5 m in front of the wall, fading up the façade
      vec2 luv = (vWPos.xz + vWN.xz * 1.5 - uLmXf.xy) * uLmXf.zw;
      vec3 lmc = textureLod(uLm, luv, 0.0).rgb * 3.0;
      float fall = 1.0 - smoothstep(0.3, 10.0, vWPos.y);
      totalEmissiveRadiance += albedo * lmc * (fall * fall * 0.3) * (1.0 - 0.7 * glass);
    }
#endif
    // daytime bounce light under arcades (ceilings would otherwise be black)
    bShopDay = isShop * shopE * (0.14 + 0.3 * bRoomOn) + isCeil * (ceilE * 0.1 + albedo * 0.32) + isLit * albedo * 0.06;
    bLitW *= isRes;
  }
#ifndef BLD_CUTOUT
  else if (bMode < 6.5) {
    totalEmissiveRadiance += bSpecE;
    bShopDay += bSpecE * 0.04;
  } else bAlways += bSpecE;
#endif
  {
    // fallback sky reflection on glass (fresnel) when there is no scene.environment
    float fres = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 3.0);
    bShopDay += uSkyCol * reflK * (0.1 + 0.55 * fres) * uFakeRefl * (1.0 - 0.6 * bLitW);
  }
`;
function dn(e, t, n) {
  ((e.uniforms.uAtlas = { value: t }),
    n &&
      ((e.uniforms.uSignTex = { value: n.signs }),
      (e.uniforms.uAdTex = { value: n.ads }),
      (e.uniforms.uTickTex = { value: n.ticker }),
      n.lightMap &&
        ((e.uniforms.uLm = { value: n.lightMap.texture }),
        (e.uniforms.uLmXf = { value: n.lightMap.xf }))),
    (e.uniforms.uLitRes = $t.uLitRes),
    (e.uniforms.uLitOff = $t.uLitOff),
    (e.uniforms.uWet = K.uWet),
    (e.uniforms.uFakeRefl = $t.uFakeRefl),
    (e.uniforms.uSkyCol = $t.uSkyCol),
    (e.uniforms.uHour = $t.uHour),
    (e.uniforms.uRooms = $t.uRooms),
    (e.vertexShader = e.vertexShader
      .replace(`#include <common>`, `#include <common>\n${an}`)
      .replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
  vTint = aTint; vInfo = aInfo; vTUv = uv; vWPos = position; vWNy = normal.y; vWN = normal; vCRel = position - cameraPosition;`,
      )),
    (e.fragmentShader = e.fragmentShader
      .replace(`#include <common>`, `#include <common>\n${on}`)
      .replace(`#include <map_fragment>`, sn)
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>\n${cn}`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>\n${ln}`,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `vec3 bShopDay = vec3(0.0);\nvec3 bAlways = vec3(0.0);\n${un}\n#include <emissivemap_fragment>`,
      )
      .replace(
        `#include <aomap_fragment>`,
        `#include <aomap_fragment>
  totalEmissiveRadiance += bShopDay * (1.0 - uNight) + bAlways;`,
      )));
}
function fn(e, t, n = !1, r = null) {
  let i = t ? 2 : 0,
    a = n
      ? new O({ color: 16777215, side: i, emissive: 0 })
      : new pe({
          color: 16777215,
          roughness: 0.86,
          metalness: 0,
          envMapIntensity: 0.9,
          side: i,
          emissive: 0,
        });
  ((a.defines = { BLD_COLS: (8).toFixed(1), BLD_ROWS: (11).toFixed(1) }),
    t && (a.defines.BLD_CUTOUT = ``),
    n && (a.defines.BLD_LOW = ``),
    !t && r?.lightMap && (a.defines.BLD_LM = ``),
    (a.forceSinglePass = !0),
    (a.onBeforeCompile = (n) => dn(n, e, t ? null : r)));
  let o = (t ? `bld-facade-cut` : `bld-facade`) + (n ? `-l` : ``);
  ((a.name = o), (a.customProgramCacheKey = () => o), Ve(a, 0));
  let s = a.customProgramCacheKey();
  return ((a.customProgramCacheKey = () => s), a);
}
