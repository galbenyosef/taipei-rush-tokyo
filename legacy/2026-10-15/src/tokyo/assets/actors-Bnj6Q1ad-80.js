// tokyo/assets/actors-Bnj6Q1ad 80 — bottom
// Lines 40654-40942 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function yb(e, t) {
  let n =
    Math.imul(e ^ 2654435769, 2246822507) ^
    Math.imul(t + 668265263, 3266489909);
  return (
    (n ^= n >>> 15),
    (n = Math.imul(n, 739982445)),
    (n ^= n >>> 12),
    (n >>> 0) / 4294967296
  );
}
function bb(e, t, n, r) {
  return e + _b(t - e) * (1 - Math.exp(-n * r));
}
var xb = (e) => {
  let t = parseInt(e.slice(1), 16);
  return [
    (((t >> 16) & 255) / 255) ** 2.2,
    (((t >> 8) & 255) / 255) ** 2.2,
    ((t & 255) / 255) ** 2.2,
  ];
};
function Sb(e) {
  return {
    nose: e.nose,
    skinLum: e.skin,
    top: xb(e.top),
    bottom: xb(e.bottom),
    topKey: e.topKey ?? 0.42,
    bottomKey: e.bottomKey ?? 0.42,
    waist: -1 + 2 * e.waist,
    shoe: -1 + 2 * (e.shoe ?? 0.04),
    armX: 0.349,
    sleeves: !0,
    topIsOuter: !!e.outer,
    tintTop: e.tintTop ?? 0.9,
    tintBottom: e.tintBottom ?? 0.85,
  };
}
var Cb = {
    "office-m": Sb({
      top: `#30313b`,
      bottom: `#2a2c33`,
      topKey: 0.4,
      bottomKey: 0.7,
      waist: 0.47,
      shoe: 0.03,
      outer: !0,
      nose: [0.0585, -0.1278],
      skin: 0.2917,
    }),
    "office-m2": Sb({
      top: `#d6d6d6`,
      bottom: `#262626`,
      topKey: 0.36,
      bottomKey: 0.7,
      waist: 0.535,
      shoe: 0.035,
      nose: [0.0593, -0.1262],
      skin: 0.2654,
    }),
    "office-f": Sb({
      top: `#352a23`,
      bottom: `#53433a`,
      topKey: 0.42,
      bottomKey: 0.7,
      waist: 0.52,
      shoe: 0.03,
      outer: !0,
      nose: [0.051, -0.117],
      skin: 0.2379,
    }),
    "student-m": Sb({
      top: `#c7beb3`,
      bottom: `#a4916b`,
      topKey: 0.34,
      bottomKey: 0.7,
      waist: 0.48,
      shoe: 0.062,
      nose: [0.0543, -0.1285],
      skin: 0.2923,
    }),
    "student-f": Sb({
      top: `#bb6975`,
      bottom: `#425864`,
      topKey: 0.5,
      bottomKey: 0.7,
      waist: 0.53,
      shoe: 0.03,
      nose: [0.0506, -0.1126],
      skin: 0.2496,
    }),
    "casual-m": Sb({
      top: `#212025`,
      bottom: `#4a5659`,
      topKey: 0.5,
      bottomKey: 0.7,
      waist: 0.49,
      shoe: 0.025,
      nose: [0.0582, -0.124],
      skin: 0.2644,
    }),
    "casual-f": Sb({
      top: `#6c2e6a`,
      bottom: `#21221c`,
      topKey: 0.55,
      bottomKey: 0.7,
      waist: 0.44,
      shoe: 0.035,
      nose: [0.0514, -0.1178],
      skin: 0.2372,
    }),
    vendor: Sb({
      top: `#cbcbcd`,
      bottom: `#b4b4b7`,
      waist: 0.515,
      shoe: 0.15,
      tintTop: 0,
      tintBottom: 0,
      nose: [0.0503, -0.1152],
      skin: 0.2441,
    }),
    uncle: Sb({
      top: `#c29f76`,
      bottom: `#433327`,
      topKey: 0.42,
      bottomKey: 0.7,
      waist: 0.47,
      shoe: 0.042,
      outer: !0,
      nose: [0.0576, -0.1226],
      skin: 0.225,
    }),
    "elder-m": Sb({
      top: `#524c43`,
      bottom: `#181817`,
      topKey: 0.4,
      bottomKey: 0.7,
      waist: 0.45,
      shoe: 0.034,
      outer: !0,
      nose: [0.0565, -0.1234],
      skin: 0.295,
    }),
    auntie: Sb({
      top: `#7e7974`,
      bottom: `#473e33`,
      topKey: 0.45,
      bottomKey: 0.7,
      waist: 0.48,
      shoe: 0.042,
      outer: !0,
      nose: [0.0498, -0.1141],
      skin: 0.2347,
    }),
    "elder-f": Sb({
      top: `#8a8070`,
      bottom: `#181f20`,
      topKey: 0.4,
      bottomKey: 0.7,
      waist: 0.49,
      shoe: 0.1,
      outer: !0,
      nose: [0.0487, -0.1084],
      skin: 0.2781,
    }),
  },
  wb = {
    "office-m": { m: [`office-m2`] },
    salaryman: { m: [`office-m`] },
    "office-f": { f: [`office-f`] },
    "student-m": { m: [`student-m`] },
    "student-f": { f: [`student-f`] },
    "ntu-student": {
      m: [`student-m`, `casual-m`],
      f: [`student-f`, `casual-f`],
    },
    auntie: { f: [`auntie`] },
    mom: { f: [`casual-f`, `auntie`] },
    uncle: { m: [`uncle`] },
    "taxi-uncle": { m: [`uncle`, `casual-m`] },
    worker: { m: [`casual-m`, `uncle`] },
    ama: { f: [`elder-f`] },
    agong: { m: [`elder-m`] },
    tourist: { m: [`casual-m`, `student-m`], f: [`casual-f`, `student-f`] },
    hipster: { m: [`casual-m`, `student-m`], f: [`casual-f`, `student-f`] },
    "ximen-girl": { f: [`student-f`, `casual-f`] },
    vendor: { m: [`uncle`, `casual-m`], f: [`vendor`] },
    clerk: { m: [`casual-m`], f: [`casual-f`] },
    "temple-lady": { f: [`auntie`, `elder-f`], m: [`elder-m`] },
    jogger: { m: [`casual-m`], f: [`casual-f`] },
    "jogger-m": { m: [`casual-m`], f: [`casual-f`] },
  };
function Tb(e) {
  if (e.avatars) return (e.female ? e.avatars.f : e.avatars.m) ?? [];
  let t = wb[e.desc.id.split(`~`)[0]];
  return t ? ((e.female ? t.f : t.m) ?? []) : [];
}
var Eb = {
    low: { max: 4, enter: 9, exit: 11.5, shadows: 0, full: 2 },
    medium: { max: 7, enter: 12, exit: 15, shadows: 1, full: 2 },
    high: { max: 10, enter: 15, exit: 18.5, shadows: 2, full: 3 },
    ultra: { max: 14, enter: 18, exit: 22, shadows: 3, full: 5 },
  },
  Db = {
    low: { max: 4, enter: 9, exit: 11.5, shadows: 0, full: 2 },
    medium: { max: 6, enter: 11, exit: 13.5, shadows: 1, full: 2 },
  },
  Ob = 0.4,
  kb = 0.16,
  Ab = 20,
  jb = 16,
  Mb = 8,
  Nb = Math.PI * 2,
  Pb = new Uint8Array(32);
for (let e of [0, 1, 5, 6, 7, 4, 10, 20, 12, 13, 17, 11]) Pb[e] = 1;
var Fb = Y(14) | Y(15) | Y(19),
  Ib = Y(17) | Y(18),
  Lb = (e) => ((e = (e + Math.PI) % Nb), e < 0 && (e += Nb), e - Math.PI),
  Rb = (e, t, n) => (e < t ? t : e > n ? n : e),
  zb = new R(),
  Bb = new y(),
  Vb = (e, t) => new y().setFromEuler(new k(e, t, 0, `YXZ`)),
  Hb = Vb(1.4, 0.35),
  Ub = Vb(1.35, 0.55),
  Wb = new y().setFromEuler(new k(0, 0, Math.PI / 2)).multiply(Vb(1.45, 0.25)),
  Gb = 0.09,
  Kb = Vb(0.12, -0.1),
  qb = new R(0.45, -1, 0.35),
  Jb = new R(0.7, -1, 0.2),
  Yb = new R(-0.4, -1, 0.15),
  Xb = `
varying vec3 vAvBind;
`,
  Zb = `
varying vec3 vAvBind;
uniform vec2 uPedAv;
uniform vec4 uAvTop;
uniform vec4 uAvBot;
uniform vec4 uAvTopRef;
uniform vec4 uAvBotRef;
uniform vec4 uAvZones;
uniform vec2 uAvSkin;
float avLum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// chroma-keyed luminance-preserving recolour of one garment toward the ped's own colour
// key weight of a texel for one garment (0..1)
float avKey(vec3 c, vec4 ref) {
  float lr = avLum(ref.rgb);
  float lc = avLum(c);
  // distance in chroma (normalized by luminance, damped for near-black texels whose chroma is compression noise)
  // + log-luminance: shading folds of the garment stay in the key
  vec3 cn = c / (lc + 0.02), rn = ref.rgb / (lr + 0.02);
  float d = length(cn - rn) * 0.55 + abs(log2((lc + 0.006) / (lr + 0.006))) * 0.16;
  return 1.0 - smoothstep(ref.w * 0.55, ref.w * 1.35, d);
}
// luminance-preserving recolour of a texel of that garment toward the ped's colour
vec3 avRecolour(vec3 c, vec4 ref, vec3 tgt) {
  float lr = avLum(ref.rgb), lc = avLum(c), lt = avLum(tgt);
  // folds keep their relative shading, compressed — the more, the further the target is from the reference in
  // brightness (black trousers re-tinted white would otherwise show the dark cloth's texture noise as blotches)
  float e = mix(0.75, 0.28, clamp(abs(log2((lt + 0.01) / (lr + 0.01))) / 5.0, 0.0, 1.0));
  return tgt * clamp(pow((lc + 0.004) / (lr + 0.004), e), 0.3, 1.6);
}
`,
  Qb = `
  if (uPedAv.x > 0.0 || uPedAv.y < 0.999) {
    float pedDn = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    if (pedDn <= uPedAv.x || pedDn > uPedAv.y) discard;
  }
`,
  $b = `
  float avSkin = texture2D(roughnessMap, vRoughnessMapUv).r;
  // skin tone toward the ped's own (luminance only: Taipei's mostly fair–light complexions vs the files' faces)
  if (uAvSkin.y > 0.0) diffuseColor.rgb *= mix(1.0, uAvSkin.x, smoothstep(0.3, 0.7, avSkin) * uAvSkin.y);
  if (uAvTop.w > 0.0 || uAvBot.w > 0.0) {
    // body tile of the crowd atlas only (u < 1/3): head & hair tiles keep their colours; skin (mask R) never tinted
    float avBody = step(vMapUv.x, 0.3333) * (1.0 - smoothstep(0.06, 0.2, avSkin));
    // zones overlap ±0.05 (≈ 4 cm) around the hem: there the colour key decides which garment a texel belongs to
    float avArm = step(uAvZones.z, abs(vAvBind.x)) * uAvZones.w;
    float avUp = max(smoothstep(uAvZones.x - 0.07, uAvZones.x - 0.04, vAvBind.y), avArm);
    float avLo = (1.0 - smoothstep(uAvZones.x + 0.04, uAvZones.x + 0.07, vAvBind.y)) * (1.0 - avArm);
    float avShoe = smoothstep(uAvZones.y + 0.01, uAvZones.y - 0.01, vAvBind.y);
    vec3 avC = diffuseColor.rgb;
    float kT = uAvTop.w > 0.0 ? avKey(avC, uAvTopRef) * avBody * avUp * uAvTop.w : 0.0;
    float kB = uAvBot.w > 0.0 ? avKey(avC, uAvBotRef) * avBody * avLo * (1.0 - avShoe) * uAvBot.w * (1.0 - kT) : 0.0;
    if (kT > 0.0) diffuseColor.rgb = mix(diffuseColor.rgb, avRecolour(avC, uAvTopRef, uAvTop.rgb), kT);
    if (kB > 0.0) diffuseColor.rgb = mix(diffuseColor.rgb, avRecolour(avC, uAvBotRef, uAvBot.rgb), kB);
  }
`;
