// tokyo/assets/actors-bknSEpf2 98 — tokyo/assets/actors-bknsepf2
// Lines 43571-44191 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var xw = `
  {
    vec4 pedLw = vec4(transformed, 1.0);
    #ifdef USE_BATCHING
    pedLw = batchingMatrix * pedLw;
    #endif
    vPedLamp = (modelMatrix * pedLw).xz;
  }`,
  Sw = `
varying vec2 vPedLamp;
uniform sampler2D uLampMap;
uniform vec4 uLampXf;
uniform float uLampOn;
#ifdef PED_CHARFILL
uniform vec4 uCharFill;
#endif
vec3 pedLampLight(vec3 alb, vec3 nView, float night) {
  vec3 add = vec3(0.0);
  float k = smoothstep(0.25, 0.75, night) * uLampOn;
  if (k > 0.0) {
    vec2 luv = (vPedLamp - uLampXf.xy) * uLampXf.zw;
    if (luv.x >= 0.0 && luv.y >= 0.0 && luv.x <= 1.0 && luv.y <= 1.0) {
      vec3 L = texture2D(uLampMap, luv).rgb * 3.0;
      // compressed like the street props; upward faces take it all, sides part of it (lamps hang overhead)
      L = L * 1.5 / (1.0 + 0.35 * L);
      float up = dot(nView, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
      vec3 c = alb * L * (0.35 + 0.65 * max(up, 0.0)) * k;
      add += c / (1.0 + 2.6 * c);
    }
  }
#ifdef PED_CHARFILL
  add += alb * uCharFill.rgb * uCharFill.w;
#endif
  return add;
}
`,
  Cw = `
attribute vec4 aInfo;
attribute vec4 aExt;
#define aPart (aInfo.x)
#define aSlot (aInfo.y)
#define aAcc (aInfo.z)
#define aGlow (aInfo.w)
uniform highp sampler2D uPedData;
uniform float uTime;
vec4 iAnim;
vec4 iMisc;
vec4 iShape;
vec4 iCol0;
vec4 iCol1;
varying float vPedFade;
varying float vPedGlow;
varying vec3 vPedPat;
varying float vPedRough;
varying vec3 vPedFace;
varying float vPedKind;

void pedFetch() {
#ifdef USE_BATCHING
  int id = int(getIndirectIndex(gl_DrawID));
#else
  int id = 0;
#endif
  int w = textureSize(uPedData, 0).x;
  int j = id * 5;
  int y = j / w;
  int x = j - y * w;
  iAnim = texelFetch(uPedData, ivec2(x, y), 0);
  iMisc = texelFetch(uPedData, ivec2(x + 1, y), 0);
  iShape = texelFetch(uPedData, ivec2(x + 2, y), 0);
  iCol0 = texelFetch(uPedData, ivec2(x + 3, y), 0);
  iCol1 = texelFetch(uPedData, ivec2(x + 4, y), 0);
}

vec3 pedUnpack(float v) {
  float r = floor(v / 65536.0);
  float g = floor((v - r * 65536.0) / 256.0);
  float b = v - r * 65536.0 - g * 256.0;
  return pow(vec3(r, g, b) / 255.0, vec3(2.2));
}
mat3 pedRX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 pedRY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 pedRZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }
bool pedBit(int m, int b) { return ((m >> b) & 1) == 1; }
int pedCloth() { return int(iMisc.w + 0.5); }

// two-bone leg IK in the sagittal plane: ankle target (dy, dz) relative to the hip joint → (hip pitch, knee bend)
vec2 pedLegIK(vec2 a) {
  const float L1 = 0.42, L2 = 0.41;
  float d = clamp(length(a), 0.2, L1 + L2 - 0.004);
  float th = atan(-a.y, -a.x);
  float al = acos(clamp((L1 * L1 + d * d - L2 * L2) / (2.0 * L1 * d), -1.0, 1.0));
  float be = acos(clamp((L1 * L1 + L2 * L2 - d * d) / (2.0 * L1 * L2), -1.0, 1.0));
  return vec2(th + al, 3.14159265 - be);
}

vec3 pedSlotColor() {
  int slot = int(aSlot + 0.5);
  vPedPat = vec3(0.0);
  vPedKind = aExt.w < -0.5 ? -1.0 : floor(aExt.w);
  float libRough = fract(max(aExt.w, 0.0));
  vPedRough = aExt.w >= -0.5 ? libRough : aGlow > 0.5 && aGlow < 9.5 ? 0.3 : 0.62;
  if (slot == 7) return vec3(1.0);
  int cloth = pedCloth();
  int sleeve = cloth % 3;
  int legs = (cloth / 3) % 3;
  if (slot == 8) slot = sleeve == 0 ? 2 : 0;
  else if (slot == 9) slot = sleeve == 2 ? 0 : 2;
  else if (slot == 10) slot = legs == 0 ? 3 : 0;
  else if (slot == 11) slot = sleeve == 0 ? 2 : 0;
  if (aExt.w < -0.5) vPedRough = slot == 0 ? 0.6 : slot == 1 ? 0.5 : slot == 4 ? 0.55 : slot <= 3 ? 0.9 : 0.6;
  // patterned tops: coordinates follow the bind pose so the print sticks to the body
  if (slot == 2) {
    int st = (cloth / 36) % 2, p2 = (cloth / 2304) % 2;
    float ty = st == 1 && p2 == 1 ? 3.0 : p2 == 1 ? 2.0 : st == 1 ? 1.0 : 0.0;
    vPedPat = vec3(ty, position.x + position.z * 0.7, position.y);
  }
  float v = slot == 0 ? iCol0.x : slot == 1 ? iCol0.y : slot == 2 ? iCol0.z : slot == 3 ? iCol0.w :
            slot == 4 ? iCol1.x : slot == 5 ? iCol1.y : iCol1.z;
  return pedUnpack(v);
}

// ------------------------------------------------ pose state (computed once per vertex, used by pedXform)
float gHipLp, gHipRp, gHipLr, gHipRr, gKneeL, gKneeR, gShLp, gShRp, gShLr, gShRr, gElL, gElR, gTwL, gTwR;
float gSpineP, gSpineY, gSpineR, gNeckP, gNeckY, gRootY, gArmShift, gLegShift;

void pedPose(int cl, int mask) {
  float phase = iAnim.x;
  float gait = iAnim.y;
  int pid = int(iAnim.z + 0.5);
  float pw = iAnim.w;
  float seed = iMisc.z;
  float t = uTime + seed * 37.0;
  float W = iShape.x, fem = iShape.z, stoop = iShape.w;
  float shW = W * (1.0 - 0.1 * fem);
  float hipW = W * (1.0 + 0.08 * fem);
  gArmShift = 0.205 * (shW - 1.0);
  gLegShift = 0.095 * (hipW - 1.0);
  bool longSkirt = ((cl / 18432) % 2) == 1;

  // ------------------------------------------------ locomotion
  float walkA = clamp(gait, 0.0, 1.0);
  float runA = clamp(gait - 1.0, 0.0, 1.0);
  float idleA = 1.0 - clamp(gait * 3.0, 0.0, 1.0);
  float sp = sin(phase);
  float legAmp = (0.37 * walkA + 0.33 * runA) * (longSkirt ? 0.8 : 1.0);
  float hipLp = sp * legAmp;
  float hipRp = -hipLp;
  float hipLr = 0.0, hipRr = 0.0;
  float kneeL = walkA * (0.08 + 0.6 * max(0.0, cos(phase + 0.5))) + runA * (0.35 + 1.05 * max(0.0, cos(phase + 0.3)));
  float kneeR = walkA * (0.08 + 0.6 * max(0.0, -cos(phase + 0.5))) + runA * (0.35 + 1.05 * max(0.0, -cos(phase + 0.3)));
  float armAmp = 0.3 * walkA + 0.55 * runA;
  float shLp = -sp * armAmp, shRp = sp * armAmp;
  float shLr = 0.07 + 0.1 * runA + 0.04 * idleA;
  float shRr = shLr;
  float elL = 0.18 * walkA + 1.15 * runA + 0.14 * idleA + max(0.0, -sp) * 0.3 * walkA;
  float elR = 0.18 * walkA + 1.15 * runA + 0.14 * idleA + max(0.0, sp) * 0.3 * walkA;
  float twL = 0.0, twR = 0.0; // upper-arm twist (rotates the elbow bend plane)
  float spineP = 0.035 * walkA + 0.24 * runA + stoop * 0.42 + 0.012 * sin(t * 1.7) * idleA;
  float spineY = sp * (0.06 * walkA + 0.1 * runA);
  float spineR = cos(phase) * 0.025 * walkA; // shoulders rock side to side a touch
  float neckP = -stoop * 0.32 + idleA * 0.05 * sin(t * 0.31);
  float neckY = iMisc.y + idleA * 0.3 * sin(t * 0.23) * sin(t * 0.11 + 2.0);
  float rootY = -0.86 * (1.0 - cos(hipLp)) + runA * 0.045 * abs(cos(phase));
  // idle: weight shifts from foot to foot, breathing
  float ws = sin(t * 0.19) * idleA;
  kneeL += 0.1 * max(0.0, ws) + stoop * 0.12;
  kneeR += 0.1 * max(0.0, -ws) + stoop * 0.12;
  hipLr += 0.03 * max(0.0, ws) * idleA;
  hipRr += 0.03 * max(0.0, -ws) * idleA;
  rootY -= 0.012 * abs(ws) + stoop * 0.02;
  spineP += 0.01 * sin(t * 1.9) * idleA;

  // ------------------------------------------------ carried-item arm layers
  float lw = 1.0 - pw;
  bool umb = pedBit(mask, 14);
  bool cup = pedBit(mask, 15);
  bool phone = pedBit(mask, 16);
  bool lbag = pedBit(mask, 17) || pedBit(mask, 18);
  bool cane = pedBit(mask, 19);
  if (umb) { shRp = mix(shRp, 0.32, lw); shRr = mix(shRr, -0.3, lw); elR = mix(elR, 1.72, lw); }
  else if (cup) { shRp = mix(shRp, 0.12 + shRp * 0.3, lw); elR = mix(elR, 1.35, lw); shRr = mix(shRr, -0.05, lw); }
  else if (cane) { shRp = mix(shRp, 0.22 + sp * 0.12, lw); elR = mix(elR, 0.3, lw); shRr = mix(shRr, 0.12, lw); }
  if (phone) { shLp = mix(shLp, 0.3, lw); elL = mix(elL, 1.45, lw); shLr = mix(shLr, -0.3, lw); neckP += 0.45 * lw * (1.0 - runA); }
  else if (lbag) { shLp = mix(shLp, shLp * 0.3, lw); shLr = mix(shLr, 0.2, lw); elL = mix(elL, 0.06, lw); }
  bool pockets = ((cl / 72) % 2) == 1;
  if (pockets && !umb && !cup && !cane && !phone && !lbag) {
    // hands in pockets: arms still, elbows slightly out
    float bw = lw * (1.0 - runA);
    shLp = mix(shLp, -0.12 + shLp * 0.15, bw); shRp = mix(shRp, -0.12 + shRp * 0.15, bw);
    shLr = mix(shLr, 0.16, bw); shRr = mix(shRr, 0.16, bw);
    elL = mix(elL, 0.45, bw); elR = mix(elR, 0.45, bw);
  }
  if (stoop > 0.3 && !umb && !cup && !cane && !phone && !lbag) {
    float bw = lw * (1.0 - runA);
    shLp = mix(shLp, -0.4, bw); shRp = mix(shRp, -0.4, bw);
    shLr = mix(shLr, -0.08, bw); shRr = mix(shRr, -0.08, bw);
    elL = mix(elL, 1.2, bw); elR = mix(elR, 1.2, bw);
  }

  // ------------------------------------------------ poses
  if (pw > 0.001) {
    float tHLp = hipLp, tHRp = hipRp, tHLr = hipLr, tHRr = hipRr, tKL = kneeL, tKR = kneeR;
    float tSLp = shLp, tSRp = shRp, tSLr = shLr, tSRr = shRr, tEL = elL, tER = elR;
    float tSpP = spineP, tSpY = spineY, tNP = neckP, tNY = neckY, tRY = rootY;
    if (pid == 1) { // sit on stool / bench
      float g = max(0.0, sin(t * 0.7));
      tHLp = 1.5; tHRp = 1.45; tHLr = 0.14; tHRr = 0.12; tKL = 1.45; tKR = 1.35; tRY = -0.4;
      tSLp = 0.5; tSRp = 0.45 + 0.35 * g; tSLr = 0.02; tSRr = 0.05; tEL = 0.75; tER = 0.8 + 0.6 * g;
      tSpP = 0.14; tNP = 0.04; tSpY = 0.0;
    } else if (pid == 2) { // cower
      float tr = 0.03 * sin(t * 31.0);
      tHLp = 1.35; tHRp = 1.3; tKL = 2.15; tKR = 2.1; tRY = -0.44; tHLr = 0.22; tHRr = 0.2;
      tSpP = 0.7 + tr; tNP = 0.45; tSpY = 0.0;
      tSLp = 2.3; tSRp = 2.35; tSLr = -0.45; tSRr = -0.45; tEL = 2.1; tER = 2.05;
    } else if (pid == 3 || pid == 16) { // fallen (flailing while airborne) / dead
      float fl = pid == 3 ? clamp(gait, 0.0, 1.0) : 0.0;
      tHLp = 0.18 + 0.6 * fl * sin(t * 11.0); tHRp = 0.02 - 0.6 * fl * sin(t * 11.0 + 1.0);
      tHLr = 0.28; tHRr = 0.16; tKL = 0.4 + 0.5 * fl; tKR = 0.12 + 0.4 * fl;
      tSLp = 0.3 + 1.3 * fl * sin(t * 9.0); tSRp = -0.25 + 1.3 * fl * sin(t * 8.0 + 2.0);
      tSLr = 1.25; tSRr = 0.85; tEL = 0.5; tER = 0.25;
      tSpP = 0.0; tSpY = 0.0; tNP = -0.1; tNY = 0.55; tRY = 0.0;
    } else if (pid == 4) { // pray with incense (拜拜): rhythmic bows
      float bow = max(0.0, sin(t * 1.15));
      tSLp = 0.72; tSRp = 0.72; tSLr = -0.5; tSRr = -0.42; tEL = 1.45; tER = 1.45;
      tSpP = 0.06 + 0.34 * bow * bow; tNP = 0.18; tSpY = 0.0;
      tHLp = 0.0; tHRp = 0.0; tKL = 0.06; tKR = 0.06; tRY = 0.0;
    } else if (pid == 5) { // phone call, left hand at ear
      tSLp = 1.3; tSLr = -0.6; tEL = 2.6; twL = 0.6 * pw; tNY = neckY * 0.3 - 0.15; tNP = 0.08; tSpY = 0.0;
    } else if (pid == 6) { // wave / hail a taxi
      tSRp = 2.75; tSRr = 0.3; tER = 0.3 + 0.35 * sin(t * 9.0);
    } else if (pid == 7) { // chat gestures
      float g1 = sin(t * 2.3), g2 = sin(t * 1.7 + 1.3);
      tSLp = 0.2 + 0.3 * max(0.0, g1); tEL = 0.5 + 0.9 * max(0.0, g1); tSLr = 0.02;
      tSRp = 0.2 + 0.35 * max(0.0, g2); tER = 0.5 + 1.0 * max(0.0, g2); tSRr = 0.02;
      tNP = 0.06 * sin(t * 3.1); tNY = neckY * 0.4;
    } else if (pid == 8) { // hands up
      tSLp = 2.9; tSRp = 2.9; tSLr = 0.45; tSRr = 0.45; tEL = 0.5; tER = 0.5; tSpP = -0.05; tNP = -0.05;
    } else if (pid == 9) { // tai chi 'cloud hands' — the whole group moves in sync (shared clock)
      float a = uTime * 0.5;
      float s1 = sin(a), c1 = cos(a);
      tSLp = 0.75 + 0.45 * s1; tSRp = 0.75 - 0.45 * s1;
      tSLr = 0.3 + 0.35 * c1; tSRr = 0.3 - 0.35 * c1;
      tEL = 0.6 + 0.25 * c1; tER = 0.6 - 0.25 * c1;
      tSpY = 0.35 * c1; tNY = 0.3 * c1; tSpP = 0.03; tNP = 0.02;
      tHLp = 0.28 + 0.14 * c1; tHRp = 0.28 - 0.14 * c1; tHLr = 0.2; tHRr = 0.2;
      tKL = 0.48 + 0.14 * c1; tKR = 0.48 - 0.14 * c1; tRY = -0.08;
    } else if (pid == 10 || pid == 20) { // fight stance, phase = punch progress 0..1 · 20: looping jab–cross
      float pu, pl = 0.0;
      if (pid == 20) {
        float c = fract(t * 0.9);
        pl = sin(clamp(c * 2.2, 0.0, 1.0) * 3.14159);
        pu = sin(clamp(c * 2.2 - 1.0, 0.0, 1.0) * 3.14159);
      } else pu = sin(clamp(phase, 0.0, 1.0) * 3.14159);
      tHLp = 0.3; tHRp = -0.22; tHLr = 0.12; tHRr = 0.12; tKL = 0.3; tKR = 0.32; tRY = -0.04;
      tSLp = mix(1.25, 1.6, pl); tSLr = mix(0.05, -0.12, pl); tEL = mix(2.1, 0.15, pl);
      tSRp = mix(1.05, 1.6, pu); tSRr = mix(0.1, -0.1, pu); tER = mix(2.15, 0.1, pu);
      tSpP = 0.12; tSpY = -0.25 + 0.4 * pu - 0.2 * pl; tNP = -0.08; tNY = 0.0;
    } else if (pid == 21) { // bat swing (both hands on the bat, windup → swing through)
      float c = fract(t * 0.75);
      float s = c < 0.55 ? -smoothstep(0.0, 0.55, c) : -1.0 + 2.2 * smoothstep(0.55, 0.72, c);
      tHLp = 0.22; tHRp = -0.18; tHLr = 0.14; tHRr = 0.14; tKL = 0.28; tKR = 0.3; tRY = -0.05;
      tSRp = 1.5 - 0.2 * s; tSRr = -0.35 + 0.25 * s; tER = 1.0 - 0.4 * abs(s);
      tSLp = 1.45 - 0.2 * s; tSLr = 0.55 + 0.2 * s; tEL = 1.1 - 0.4 * abs(s);
      tSpY = -0.9 * s; tSpP = 0.1; tNY = 0.5 * s; tNP = -0.05;
    } else if (pid == 23) { // raised fist pumping to the chant (shared clock: the march chants together)
      float pump = max(0.0, sin(uTime * 3.3 + seed * 0.7));
      tSRp = 2.7 + 0.28 * pump; tSRr = 0.14; tER = 0.3 + 0.6 * (1.0 - pump);
      tSLp = 0.1; tSLr = 0.06; tEL = 0.35;
      tNP = -0.1; tNY = neckY * 0.4; tSpP = spineP - 0.03;
    } else if (pid == 24) { // protest placard held up with both hands (the sign is a props-entry item)
      float bob = sin(uTime * 2.2 + seed * 3.0) * 0.07;
      tSLp = 2.5 + bob; tSRp = 2.5 + bob; tSLr = -0.05; tSRr = -0.05; tEL = 0.62; tER = 0.62;
      tNP = -0.06; tNY = neckY * 0.3;
    } else if (pid == 11) { // hit: stagger back
      tSpP = -0.35; tNP = -0.3; tSLp = 0.75; tSRp = 0.9; tSLr = 0.7; tSRr = 0.6; tEL = 0.3; tER = 0.4;
      tKL = 0.3; tKR = 0.05; tHLp = 0.28; tHRp = -0.15; tSpY = 0.0;
    } else if (pid == 12) { // film with phone raised (left hand holds the phone)
      tSLp = 1.05; tSLr = -0.5; tEL = 1.3; tSRp = 1.0; tSRr = -0.55; tER = 1.4; tNP = 0.02; tSpY = 0.0; tSpP = -0.04;
    } else if (pid == 13) { // hands behind back
      tSLp = -0.4; tSRp = -0.4; tSLr = -0.08; tSRr = -0.08; tEL = 1.2; tER = 1.2; tSpP = spineP + 0.06;
    } else if (pid == 14) { // kneel / getting up
      tHLp = 1.4; tHRp = 0.45; tKL = 1.55; tKR = 2.2; tRY = -0.38; tSpP = 0.45; tSLp = 0.6; tSRp = 0.7; tEL = 0.4; tER = 0.4; tSpY = 0.0;
    } else if (pid == 15) { // Taiwanese squat
      tHLp = 1.95; tHRp = 1.95; tHLr = 0.3; tHRr = 0.3; tKL = 2.5; tKR = 2.5; tRY = -0.55;
      tSpP = 0.4; tNP = -0.3; tSLp = 0.8; tSRp = 0.8; tSLr = 0.08; tSRr = 0.08; tEL = 0.6; tER = 0.9; tSpY = 0.0;
    } else if (pid == 17) { // look up (sky / fireworks / 101)
      tNP = -0.6; tSpP = -0.08; tSRp = 0.25; tER = 0.4;
    } else if (pid == 19) { // sit cross-legged on the floor, forearms on the knees, a slow sway
      float g = sin(t * 0.6);
      tHLp = 1.42; tHRp = 1.42; tHLr = 0.62; tHRr = 0.6; tKL = 2.5; tKR = 2.45; tRY = -0.76;
      tSpP = 0.16 + 0.02 * g; tNP = 0.08; tSpY = 0.03 * g; tNY = neckY * 0.6;
      tSLp = 0.62; tSRp = 0.58; tSLr = 0.22; tSRr = 0.24; tEL = 0.95; tER = 1.05;
    } else if (pid == 18) { // ride a bicycle: pedal IK (crank = phase), hands on the bars, upright city-bike posture
      const float up = 0.07;
      vec2 cr = 0.16 * vec2(cos(phase), -sin(phase));
      vec2 bb = vec2(0.36 - up - 0.92, -0.2);   // bottom bracket relative to the hip joint (bind space)
      vec2 off = vec2(0.075, 0.075);            // ankle sits above / behind the pedal spindle
      vec2 ikR = pedLegIK(bb + cr + off);
      vec2 ikL = pedLegIK(bb - cr + off);
      tHRp = ikR.x; tKR = ikR.y; tHLp = ikL.x; tKL = ikL.y; tHLr = 0.05; tHRr = 0.05;
      tRY = up;
      // hands land on the swept-back grips of model.ts buildBikeGeometry (±0.29, 1.03, −0.5)
      tSpP = 0.3; tSpY = 0.0; tNP = -0.24; tNY = neckY * 0.6;
      tSLp = 0.8; tSRp = 0.8; tSLr = 0.14; tSRr = 0.14; tEL = 0.45; tER = 0.45;
      spineR = 0.0;
    }
    hipLp = mix(hipLp, tHLp, pw); hipRp = mix(hipRp, tHRp, pw);
    hipLr = mix(hipLr, tHLr, pw); hipRr = mix(hipRr, tHRr, pw);
    kneeL = mix(kneeL, tKL, pw); kneeR = mix(kneeR, tKR, pw);
    shLp = mix(shLp, tSLp, pw); shRp = mix(shRp, tSRp, pw);
    shLr = mix(shLr, tSLr, pw); shRr = mix(shRr, tSRr, pw);
    elL = mix(elL, tEL, pw); elR = mix(elR, tER, pw);
    spineP = mix(spineP, tSpP, pw); spineY = mix(spineY, tSpY, pw);
    neckP = mix(neckP, tNP, pw); neckY = mix(neckY, tNY, pw);
    rootY = mix(rootY, tRY, pw);
    spineR *= 1.0 - pw;
  }
  gHipLp = hipLp; gHipRp = hipRp; gHipLr = hipLr; gHipRr = hipRr; gKneeL = kneeL; gKneeR = kneeR;
  gShLp = shLp; gShRp = shRp; gShLr = shLr; gShRr = shRr; gElL = elL; gElR = elR; gTwL = twL; gTwR = twR;
  gSpineP = spineP; gSpineY = spineY; gSpineR = spineR; gNeckP = neckP; gNeckY = neckY; gRootY = rootY;
}

// ------------------------------------------------ rigid part transform (bind space → posed root space)
void pedXform(int pt, inout vec3 p, inout vec3 n) {
  if (pt >= 7 && pt <= 10) {
    bool left = pt <= 8;
    float side = left ? -1.0 : 1.0;
    p.x += side * gLegShift;
    vec3 hc = vec3(side * (0.095 + gLegShift), 0.92, 0.0);
    if (pt == 8 || pt == 10) {
      vec3 kc = vec3(hc.x, 0.5, 0.0);
      mat3 K = pedRX(-(left ? gKneeL : gKneeR));
      p = kc + K * (p - kc); n = K * n;
    }
    mat3 H = pedRX(left ? gHipLp : gHipRp) * pedRZ(side * (left ? gHipLr : gHipRr));
    p = hc + H * (p - hc); n = H * n;
  } else if ((pt >= 3 && pt <= 6) || pt == 11 || pt == 12) {
    bool right = pt == 5 || pt == 6 || pt == 11;
    float side = right ? 1.0 : -1.0;
    p.x += side * gArmShift;
    vec3 sc = vec3(side * (0.205 + gArmShift), 1.4, 0.0);
    vec3 ec = vec3(side * (0.215 + gArmShift), 1.115, 0.0);
    mat3 S = pedRX(right ? gShRp : gShLp) * pedRZ(side * (right ? gShRr : gShLr));
    mat3 E = pedRY(side * (right ? gTwR : gTwL)) * pedRX(right ? gElR : gElL);
    if (pt >= 11) {
      vec3 wc = vec3(ec.x, 0.865, 0.0);
      vec3 wp = sc + S * (ec - sc + E * (wc - ec));
      p = wp + (p - wc);
    } else {
      if (pt == 4 || pt == 6) { p = ec + E * (p - ec); n = E * n; }
      p = sc + S * (p - sc); n = S * n;
    }
  } else if (pt == 2) {
    vec3 nc = vec3(0.0, 1.5, 0.0);
    mat3 N = pedRY(-gNeckY) * pedRX(-gNeckP);
    p = nc + N * (p - nc); n = N * n;
  }
  if ((pt >= 1 && pt <= 6) || pt == 11 || pt == 12) {
    vec3 c = vec3(0.0, 0.98, 0.0);
    mat3 SP = pedRY(-gSpineY) * pedRX(-gSpineP) * pedRZ(gSpineR);
    p = c + SP * (p - c); n = SP * n;
  }
  if (pt < 13) p.y += gRootY;
}

void pedAnimate(inout vec3 p, inout vec3 n) {
  // a few crowd-LOD body vertices carry a ZERO normal: three's normal_vertex normalize()s it into NaN, and every pixel
  // of the triangles around that vertex shaded NaN (black; a black square once bloom spread it) — use "up" instead
  if (dot(n, n) < 1e-12) n = vec3(0.0, 1.0, 0.0);
  vPedFade = iMisc.x;
  vPedGlow = aGlow < 9.5 ? aGlow : 0.0;
  vPedFace = aExt.y > -5.0 ? vec3(aExt.y, aExt.z, iCol0.x) : vec3(0.0, 0.0, -1.0);
  int cl = pedCloth();
  if (aGlow > 15.5) {
    // hair-style variants: 16 + styleMask(4 bits) + 16·ponytail condition (1 hide with ponytail, 2 ponytail only)
    int code = int(aGlow + 0.5) - 16;
    int smask = code % 16;
    int pc = code / 16;
    bool pony = ((cl / 144) % 2) == 1;
    int style = (cl / 576) % 4;
    if (((smask >> style) & 1) == 0 || (pc == 1 && pony) || (pc == 2 && !pony)) { p = vec3(0.0); return; }
  }
  int mask = int(iCol1.w + 0.5);
  bool pedLib = aExt.w > -0.5;
  if (aAcc > 0.5 && !pedLib) {
    int code = int(aAcc + 0.5);
    bool on;
    if (code > 25) {
      on = code == 26 ? cl % 3 == 1                                          // short-sleeve hem
         : code == 27 ? ((cl / 3) % 3) == 1                                  // shorts hem
         : code == 28 ? int(iAnim.z + 0.5) == 24                            // protest placard (pose 24)
         : code == 29 ? ((cl / 4608) % 2) == 1 && pedBit(mask, 17)          // trash bag
         : code == 30 ? ((cl / 9) % 2) == 1                                  // collar
         : code == 31 ? ((cl / 18) % 2) == 1                                 // slippers
         : ((cl / 18) % 2) == 0;                                            // shoes
    } else {
      on = pedBit(mask, code - 1);
      if (code == 18 && ((cl / 4608) % 2) == 1) on = false;                 // market bag → trash bag
    }
    if (!on) { p = vec3(0.0); return; }
  }
  int pt = int(aPart + 0.5);
  float phase = iAnim.x;

  // ------------------------------------------------ props of a near-LOD Rocketbox avatar (avatars.ts): the avatar's
  // palms and nose-tip anchor (entry space) replace the vertex-shader skeleton — iAnim = (palmR.x, palmR.y, 22,
  // palmR.z), iShape = (palmL, chest height offset), head items: iCol0.x = anchor y, iCol0.y = packed anchor x / z,
  // iMisc.y = packed head yaw / pitch. Hand items hang from the palm as authored (palm ≈ 0.1 m below the bind wrist).
  if (int(iAnim.z + 0.5) == 22) {
    vec3 palmR = vec3(iAnim.x, iAnim.y, iAnim.w);
    if (pt == 11 || pt == 6) p = palmR + (p - vec3(0.215, 0.765, 0.0));
    else if (pt == 12) p = iShape.xyz + (p - vec3(-0.215, 0.765, 0.0));
    else if (pt == 4) {
      // phone lying in the left palm (anchor already lifted onto the palm), screen tilted up toward the face: the
      // palm's pitch in the texting hold (animator.ts Q_PHONE, measured on the avatars ≈ 1.88–1.9 rad — WOR-43)
      mat3 R = pedRX(1.9);
      p = iShape.xyz + R * (p - vec3(-0.21, 0.805, -0.03));
      n = R * n;
    } else if (pt == 17) {
      // face mask / glasses / sun visor / cap on the avatar's head (authored around the nose tip at (0, 1.5, -0.1))
      float qxz = iCol0.y, qyp = iMisc.y;
      float qx = floor(qxz / 4096.0), qz = qxz - qx * 4096.0;
      float qy = floor(qyp / 4096.0), qp = qyp - qy * 4096.0;
      vec3 a = vec3(qx / 4000.0 - 0.5, iCol0.x, qz / 4000.0 - 0.5);
      mat3 R = pedRY(-(qy / 4095.0 * 6.2831853 - 3.1415927)) * pedRX(qp / 4095.0 * 3.1415927 - 1.5707963);
      p = a + R * (p - vec3(0.0, 1.5, -0.1));
      n = R * n;
    } else if (pt == 1) p.y += iShape.w;
    return;
  }
  // head items exist for avatars only (library bodies wear their own)
  if (pt == 17) { p = vec3(0.0); return; }

  // ------------------------------------------------ bicycle parts (rigid, root space)
  if (pt >= 14) {
    float ang = pt == 16 ? -phase : -phase * 2.2;
    vec3 c = pt == 14 ? vec3(0.0, 0.33, -0.72) : pt == 15 ? vec3(0.0, 0.33, 0.32) : vec3(0.0, 0.36, -0.2);
    mat3 R = pedRX(ang);
    p = c + R * (p - c); n = R * n;
    return;
  }

  // ------------------------------------------------ far-LOD body shape & clothing morphs (identity for library bodies)
  float W = iShape.x, belly = iShape.y, fem = iShape.z;
  if (aExt.w < -0.5) {
    float shW = W * (1.0 - 0.1 * fem);
    float hipW = W * (1.0 + 0.08 * fem);
    if (pt <= 1) {
      float k = smoothstep(1.02, 1.36, p.y);
      float waist = exp(-pow((p.y - 1.07) / 0.08, 2.0));
      float bk = belly * exp(-pow((p.y - 1.1) / 0.12, 2.0));
      float bust = fem * exp(-pow((p.y - 1.29) / 0.055, 2.0));
      p.x *= mix(hipW, shW, k) * (1.0 - 0.09 * fem * waist) * (1.0 + 0.22 * bk);
      p.z *= p.z < 0.0 ? 1.0 + 0.95 * bk + 0.34 * bust : 1.0 + 0.2 * bk + 0.12 * fem * exp(-pow((p.y - 0.9) / 0.08, 2.0));
    }
    if (pt >= 7 && pt <= 10 && ((cl / 9216) % 2) == 1 && ((cl / 3) % 3) == 0) {
      int sl = int(aSlot + 0.5);
      if (sl == 3 || sl == 10) {
        float cx = pt <= 8 ? -0.095 : 0.095;
        float wk = pt == 8 || pt == 10 ? mix(1.12, 1.42, clamp((0.5 - p.y) / 0.38, 0.0, 1.0)) : 1.1;
        p.x = cx + (p.x - cx) * wk;
        p.z *= wk;
      }
    }
    if (((cl / 18432) % 2) == 1 && int(aAcc + 0.5) == 12) {
      float tk = clamp((0.9 - p.y) / 0.34, 0.0, 1.0);
      p.y -= tk * 0.27;
      p.x *= 1.0 + 0.16 * tk;
      p.z *= 1.0 + 0.3 * tk;
    }
  }

  pedPose(cl, mask);

  // ------------------------------------------------ eyelids: blink every few seconds (hero LOD)
  float blend = aExt.x;
  if (blend > 29.5) {
    float py = blend - 29.0;
    float per = 2.6 + fract(iMisc.z * 7.13) * 3.4;
    float bt = mod(uTime + iMisc.z * 11.0, per);
    float close = 1.0 - smoothstep(0.0, 0.07, abs(bt - 0.08));
    p.y = py + (p.y - py) * mix(0.001, 1.0, close);
    blend = 0.0;
  }

  // ------------------------------------------------ skinning: rigid part, or a blend of two parts
  vec3 pA = p, nA = n;
  pedXform(pt, pA, nA);
  if (blend > 0.5) {
    int ptB = int(floor(blend)) - 1;
    float w = fract(blend);
    vec3 pB = p, nB = n;
    pedXform(ptB, pB, nB);
    if (pedLib && aAcc > 0.5) {
      // three-part blend (library bodies: aInfo.z = third part + 1 + weight; weights are normalised)
      int ptC = int(floor(aAcc)) - 1;
      float wc = fract(aAcc);
      vec3 pC = p, nC = n;
      pedXform(ptC, pC, nC);
      float wa = max(0.0, 1.0 - w - wc);
      p = pA * wa + pB * w + pC * wc;
      n = normalize(nA * wa + nB * w + nC * wc);
    } else {
      p = mix(pA, pB, w);
      n = normalize(mix(nA, nB, w));
    }
  } else {
    p = pA;
    n = nA;
  }
}
`,
  ww = `
varying float vPedFade;
varying float vPedGlow;
varying vec3 vPedPat;
varying float vPedRough;
varying vec3 vPedFace;
varying float vPedKind;
uniform float uNight;
uniform float uWet;
uniform vec3 uSunDir;
uniform sampler2D uFaces;
uniform vec4 uFaceA;
uniform vec4 uFaceB;
`,
  Tw = `
varying float vPedFade;
`,
  Ew = `
  if (vPedFade < 0.995) {
    float pedDn = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    if (pedDn > vPedFade) discard;
  }
`,
  Dw = `
  if (vPedPat.x > 0.5) {
    if (vPedPat.x < 1.5) {
      diffuseColor.rgb *= mix(1.0, 0.55, step(0.55, fract(vPedPat.z * 13.0)));
    } else if (vPedPat.x < 2.5) {
      // small floral print (aunties' blouses): staggered light dots with a darker ring
      vec2 q = vPedPat.yz * 26.0;
      q.x += 0.5 * mod(floor(q.y), 2.0);
      float d = length(fract(q) - 0.5);
      vec3 petal = min(vec3(1.0), diffuseColor.rgb * 0.45 + vec3(0.55, 0.5, 0.42));
      diffuseColor.rgb = mix(diffuseColor.rgb * 0.92, petal, smoothstep(0.3, 0.2, d));
      diffuseColor.rgb *= 1.0 - 0.25 * smoothstep(0.34, 0.3, d) * smoothstep(0.26, 0.3, d);
    } else {
      // plaid (格子襯衫): two band widths crossing
      float a = step(0.5, fract(vPedPat.y * 8.0)), b = step(0.5, fract(vPedPat.z * 8.0));
      float th = max(step(0.88, fract(vPedPat.y * 16.0 + 0.3)), step(0.88, fract(vPedPat.z * 16.0 + 0.3)));
      diffuseColor.rgb *= (0.66 + 0.17 * (a + b)) * (1.0 + 0.35 * th);
    }
  }
  // painted face (hero LOD): premultiplied decal from the face atlas, mip-clamped inside the 8 px gutters
  if (vPedFace.z > -0.5) {
    vec2 st = vPedFace.xy;
    if (st.x > 0.0 && st.x < 1.0 && st.y > 0.0 && st.y < 1.0) {
      float tile = floor(vPedFace.z + 0.5);
      float col = mod(tile, uFaceA.x), row = floor(tile / uFaceA.x);
      vec2 org = vec2(col * uFaceA.y + uFaceB.x, 1.0 - row * uFaceA.z - uFaceB.y - uFaceB.w);
      vec2 gx = dFdx(st) * uFaceB.zw, gy = dFdy(st) * uFaceB.zw;
      vec2 tsz = vec2(textureSize(uFaces, 0));
      float lodF = log2(max(max(length(gx * tsz), length(gy * tsz)), 1e-6));
      float kk = exp2(-max(lodF - 3.0, 0.0));
      vec4 tx = textureGrad(uFaces, org + st * uFaceB.zw, gx * kk, gy * kk);
      diffuseColor.rgb = diffuseColor.rgb * (1.0 - tx.a) + tx.rgb;
    }
  }
  // rain-soaked fabric & hair read darker
  if (vPedKind > -0.5 && (vPedKind < 0.5 || (vPedKind > 1.5 && vPedKind < 2.5) || vPedKind > 8.5)) diffuseColor.rgb *= 1.0 - 0.18 * uWet;
  else if (vPedKind < -0.5) diffuseColor.rgb *= 1.0 - 0.12 * uWet;
`,
  Ow = `
  float roughnessFactor = vPedRough;
  if (vPedKind < 2.5) roughnessFactor = mix(roughnessFactor, 0.32, uWet * 0.55);
`,
  kw = `
  float metalnessFactor = vPedKind > 4.5 && vPedKind < 5.5 ? 0.85 : 0.0;
`,
  Aw = `#include <emissivemap_fragment>
  {
    vec3 pedV = normalize(vViewPosition);
    float pedNdv = clamp(dot(normal, pedV), 0.0, 1.0);
    float pedRim = pow(1.0 - pedNdv, 3.0);
    vec3 pedUpV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float pedUp = dot(normal, pedUpV) * 0.5 + 0.5;
    // night: fake overhead street / shop light so people stay readable against neon-lit streets
    totalEmissiveRadiance += diffuseColor.rgb * (uNight * (0.05 + 0.12 * pedUp) + pedRim * (0.03 + 0.14 * uNight) + vPedGlow * (0.35 + 1.4 * uNight));
    if (vPedKind > -0.5) {
      vec3 pedLs = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
      float pedDay = 1.0 - uNight;
      if (vPedKind < 0.5) {
        // cloth fuzz
        totalEmissiveRadiance += diffuseColor.rgb * pow(1.0 - pedNdv, 4.0) * 0.12;
      } else if (vPedKind < 1.5) {
        // skin: warm wrap light + subsurface-like rim & ambient warmth
        float wrapL = clamp((dot(normal, pedLs) + 0.45) / 1.45, 0.0, 1.0) - clamp(dot(normal, pedLs), 0.0, 1.0);
        totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.42, 0.3) * (0.12 * wrapL * pedDay + 0.02);
        totalEmissiveRadiance += vec3(1.0, 0.45, 0.35) * pow(1.0 - pedNdv, 2.5) * 0.12 * diffuseColor.rgb * (0.4 + 0.6 * pedDay);
      } else if (vPedKind < 2.5) {
        // hair: two shifted Kajiya-Kay lobes along the strand direction (≈ projected up vector)
        vec3 T = normalize(pedUpV - normal * dot(pedUpV, normal) + 1e-4);
        vec3 Hh = normalize(pedLs + pedV);
        float th1 = dot(T, Hh) - 0.12;
        float th2 = dot(T, Hh) + 0.1;
        float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 90.0);
        float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 18.0);
        float lit = clamp(dot(normal, pedLs) * 0.7 + 0.3, 0.0, 1.0);
        totalEmissiveRadiance += (vec3(0.28) * s1 + diffuseColor.rgb * 1.2 * s2 + vec3(0.02) * s2) * lit * (0.25 + 0.75 * pedDay) * (1.0 + uWet);
      } else if (vPedKind > 5.5 && vPedKind < 6.5) {
        totalEmissiveRadiance += diffuseColor.rgb * (0.7 + 1.6 * uNight);
      } else if (vPedKind > 6.5 && vPedKind < 7.5) {
        // retro-reflective tape: bright toward the viewer at night (headlights / street lights)
        totalEmissiveRadiance += diffuseColor.rgb * (0.08 + 1.3 * uNight * pow(pedNdv, 1.5));
      } else if (vPedKind > 8.5) {
        totalEmissiveRadiance += diffuseColor.rgb * pow(1.0 - pedNdv, 2.0) * 0.14 * (0.5 + 0.5 * pedDay);
      }
    }
  }`;
