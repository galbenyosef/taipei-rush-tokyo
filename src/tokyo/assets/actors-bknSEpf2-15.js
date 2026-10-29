// tokyo/assets/actors-bknSEpf2 15 — math
// Lines 4477-4804 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Oo = {
    uCharFill: { value: new we(1, 1, 1, 0) },
    uCharLm: { value: 1 },
    uHeroWet: { value: 0 },
  },
  ko = `
${An}
uniform vec4 uCharFill;
uniform float uCharLm;
`,
  Ao = `
  {
    vec3 hUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float hNy = dot(normal, hUp);
    float hTop = max(hNy, 0.0);
    // street lamps (additive; the pool under the hero's feet = the light around them)
    float hK = lmNightK() * uCharLm;
    if (hK > 0.0) {
      vec3 hL = lmCompress(lmSample().rgb) * (1.0 - smoothstep(8.5, 13.0, vLmW.y)) * hK;
      // where is the lamp? the pool's gradient around the feet points at it (±2 m): faces turned toward the brighter
      // side catch more of it, so the body keeps its form instead of a flat wash
      vec2 hUv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
      vec2 hD = 2.0 * uLmXf.zw;
      const vec3 hW = vec3(0.3, 0.5, 0.2);
      float hC = dot(texture2D(uStreetLm, hUv).rgb, hW) + 0.004;
      float hGx = dot(texture2D(uStreetLm, hUv + vec2(hD.x, 0.0)).rgb - texture2D(uStreetLm, hUv - vec2(hD.x, 0.0)).rgb, hW);
      float hGz = dot(texture2D(uStreetLm, hUv + vec2(0.0, hD.y)).rgb - texture2D(uStreetLm, hUv - vec2(0.0, hD.y)).rgb, hW);
      vec3 hG = vec3(hGx, 0.0, hGz) / hC;
      float hDir = clamp(length(hG) * 1.6, 0.0, 1.0);
      float hFace = hDir > 0.01 ? max(dot(normal, normalize((viewMatrix * vec4(hG, 0.0)).xyz)), 0.0) : 0.0;
      float hSide = 0.24 + 0.2 * (1.0 - hDir) + 0.5 * hDir * hFace;
      vec3 hE = hL * (hSide + (0.56 - hSide * 0.5) * hTop) + hL * vec3(1.0, 0.82, 0.62) * 0.18 * (1.0 - hTop) * (0.6 - 0.4 * hNy);
      totalEmissiveRadiance += lmLit(diffuseColor.rgb, hE);
    }
    // interior / concourse fill (soft, a little stronger from above)
    totalEmissiveRadiance += diffuseColor.rgb * uCharFill.rgb * (uCharFill.a * (0.32 + 0.14 * (hNy * 0.5 + 0.5)));
  }
`;
function jo(e, t = Oo) {
  if (e.userData.heroLit) return;
  ((e.userData.heroLit = !0),
    e.transparent && e.side === 2 && (e.forceSinglePass = !0));
  let n = e.onBeforeCompile;
  e.onBeforeCompile = (r, i) => {
    (n.call(e, r, i),
      Mn(r.uniforms),
      (r.uniforms.uCharFill = t.uCharFill),
      (r.uniforms.uCharLm = t.uCharLm),
      (r.uniforms.uWet = t.uHeroWet),
      (r.vertexShader = r.vertexShader
        .replace(`#include <common>`, `#include <common>\n${jn}`)
        .replace(
          `#include <project_vertex>`,
          `#include <project_vertex>\n${kn}`,
        )),
      (r.fragmentShader = r.fragmentShader
        .replace(`#include <common>`, `#include <common>\n${ko}`)
        .replace(
          `#include <emissivemap_fragment>`,
          `#include <emissivemap_fragment>\n${Ao}`,
        )));
  };
  let r = e.customProgramCacheKey.bind(e);
  e.customProgramCacheKey = () => `${r()}|hero-lit-v1`;
}
var Mo = new j(0.84, 0.9, 1),
  No = class {
    fillK = 0;
    fill = new j(1, 1, 1);
    reqK = 0;
    req = new j(1, 1, 1);
    tmp = new j();
    want(e, t) {
      t > this.reqK && ((this.reqK = Math.min(1.5, t)), this.req.setHex(e));
    }
    update(e, t, n, r, i, a, o) {
      let s = t && t.intensity > 0.002 ? t.intensity : 0,
        c = 0,
        l = Math.min(1, e * 3);
      (s > 0
        ? this.fill.setRGB(t.color.r, t.color.g, t.color.b)
        : this.reqK > 0
          ? ((c = this.reqK), this.fill.lerp(this.req, l))
          : n &&
            ((c = 0.55 + 0.35 * Gt.uNight.value),
            this.fill.lerp(this.tmp.copy(Mo), l)),
        (this.reqK = 0),
        (this.fillK = s > 0 ? s : this.fillK + (c - this.fillK) * l),
        this.fillK < 0.002 && c === 0 && s === 0 && (this.fillK = 0),
        Oo.uCharFill.value.set(
          this.fill.r,
          this.fill.g,
          this.fill.b,
          this.fillK,
        ));
      let u = Oo.uHeroWet,
        d = Gt.uWet.value;
      if (o) {
        u.value = d;
        return;
      }
      let f = a > 0.05 ? Math.min(d, r ? 0 : i ? 0.3 : 1) : 0;
      u.value =
        f > u.value
          ? Math.min(f, u.value + e * 0.12)
          : Math.max(f, u.value - e * (r ? 0.03 : 0.012));
    }
  },
  Po = [`shiba`, `husky`, `corgi`, `chihuahua`];
function Fo(e) {
  return typeof e == `string` && Po.includes(e);
}
var Io = {
    shiba: { zh: `柴犬`, en: `Shiba` },
    husky: { zh: `哈士奇`, en: `Husky` },
    corgi: { zh: `柯基`, en: `Corgi` },
    chihuahua: { zh: `吉娃娃`, en: `Chihuahua` },
  },
  Lo = {
    shiba: { zh: `捲尾巴・白臉頰`, en: `Curled tail, cream cheeks` },
    husky: { zh: `藍眼睛・嗷嗚～`, en: `Blue eyes, awoo~` },
    corgi: { zh: `短腿・大耳朵`, en: `Short legs, big ears` },
    chihuahua: { zh: `蘋果頭・一直發抖`, en: `Apple head, always shivering` },
  },
  Ro = {
    shiba: {
      coat: 12876346,
      dark: 10903850,
      light: 15786699,
      earIn: 15850699,
      iris: 4860438,
      H: 0.42,
      scale: 1,
      brisket: 0.46,
      len: 0.58,
      width: 0.17,
      tuck: 0.12,
      skullTop: 1.28,
      headLen: 0.5,
      muzzle: 0.37,
      skullW: 0.16,
      skullH: 0.16,
      cheeks: 1,
      stop: 0.5,
      muzzleW: 0.55,
      eye: 0.036,
      almond: 0.55,
      earH: 0.18,
      earW: 0.18,
      earRound: 0.18,
      earSplay: 0.2,
      earTilt: 0.12,
      legThick: 1,
      paw: 0.062,
      ruff: 0.7,
      tail: `curl`,
      pattern: `urajiro`,
      shiver: 0,
      barkRate: 1.05,
      howl: !1,
    },
    husky: {
      coat: 9343899,
      dark: 3356221,
      light: 15987439,
      earIn: 15525088,
      iris: 8176878,
      H: 0.58,
      scale: 1,
      brisket: 0.48,
      len: 0.6,
      width: 0.165,
      tuck: 0.1,
      skullTop: 1.36,
      headLen: 0.54,
      muzzle: 0.44,
      skullW: 0.158,
      skullH: 0.155,
      cheeks: 0.6,
      stop: 0.35,
      muzzleW: 0.52,
      eye: 0.035,
      almond: 0.5,
      earH: 0.21,
      earW: 0.16,
      earRound: 0.12,
      earSplay: 0.1,
      earTilt: 0.05,
      legThick: 0.95,
      paw: 0.058,
      ruff: 1,
      tail: `brush`,
      pattern: `husky`,
      shiver: 0,
      barkRate: 0.82,
      howl: !0,
    },
    corgi: {
      coat: 14256447,
      dark: 12414253,
      light: 16512750,
      earIn: 15910838,
      iris: 4532506,
      H: 0.32,
      scale: 1,
      brisket: 0.27,
      len: 0.86,
      width: 0.21,
      tuck: 0.04,
      skullTop: 1.38,
      headLen: 0.54,
      muzzle: 0.37,
      skullW: 0.21,
      skullH: 0.19,
      cheeks: 0.65,
      stop: 0.45,
      muzzleW: 0.52,
      eye: 0.04,
      almond: 0.25,
      earH: 0.31,
      earW: 0.24,
      earRound: 0.5,
      earSplay: 0.3,
      earTilt: 0.05,
      legThick: 1.3,
      paw: 0.075,
      ruff: 0.6,
      tail: `none`,
      pattern: `corgi`,
      shiver: 0,
      barkRate: 1.12,
      howl: !1,
    },
    chihuahua: {
      coat: 14860179,
      dark: 13475692,
      light: 16182495,
      earIn: 15906992,
      iris: 3875862,
      H: 0.27,
      scale: 1,
      brisket: 0.45,
      len: 0.56,
      width: 0.15,
      tuck: 0.14,
      skullTop: 1.4,
      headLen: 0.5,
      muzzle: 0.21,
      skullW: 0.23,
      skullH: 0.22,
      cheeks: 0.3,
      stop: 0.8,
      muzzleW: 0.48,
      eye: 0.058,
      almond: 0,
      earH: 0.37,
      earW: 0.28,
      earRound: 0.3,
      earSplay: 0.8,
      earTilt: 0,
      legThick: 0.72,
      paw: 0.055,
      ruff: 0,
      tail: `sickle`,
      pattern: `fawn`,
      shiver: 1,
      barkRate: 1.5,
      howl: !1,
    },
  },
  J = {
    root: 0,
    hips: 1,
    chest: 2,
    neck: 3,
    head: 4,
    jaw: 5,
    earL0: 6,
    earL1: 7,
    earR0: 8,
    earR1: 9,
    eyeL: 10,
    eyeR: 11,
    tail0: 12,
    tail1: 13,
    tail2: 14,
    tail3: 15,
    flU: 16,
    flL: 17,
    flP: 18,
    frU: 19,
    frL: 20,
    frP: 21,
    blU: 22,
    blL: 23,
    blP: 24,
    brU: 25,
    brL: 26,
    brP: 27,
  },
  zo = 28,
  Bo = [
    [J.flU, J.flL, J.flP],
    [J.frU, J.frL, J.frP],
    [J.blU, J.blL, J.blP],
    [J.brU, J.brL, J.brP],
  ],
  Vo = new j(),
  Ho = new V(),
  Uo = new V();
function Wo(e, t, n) {
  let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
  return r - Math.floor(r);
}
function Y(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function Go(e, t, n) {
  if (n <= e[0]) return t[0];
  for (let r = 1; r < e.length; r++)
    if (n <= e[r]) {
      let i = (n - e[r - 1]) / (e[r] - e[r - 1]),
        a = i * i * (3 - 2 * i);
      return t[r - 1] + (t[r] - t[r - 1]) * a;
    }
  return t[t.length - 1];
}
