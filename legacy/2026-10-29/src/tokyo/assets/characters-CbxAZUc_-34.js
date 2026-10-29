// tokyo/assets/characters-CbxAZUc_ 34 — color
// Lines 10207-10305 of readable/tokyo/assets/characters-CbxAZUc_.pretty.js (statement-aligned).
var Q = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e)),
  Qo = {
    id: `jie`,
    name: { zh: `阿傑`, en: `Jie` },
    sex: `m`,
    age: `adult`,
    build: `avg`,
    height: 1.76,
    skin: 14264707,
    face: Z({
      jaw: 0.58,
      length: 0.45,
      cheek: 0.55,
      eyeSize: 1.02,
      eyeTilt: 0.14,
      lid: 0.42,
      noseW: 0.5,
      bridge: 0.55,
      lips: 0.42,
      mouthW: 1.02,
      brow: 0.8,
      browArch: 0.3,
      smile: 0.3,
      facial: `stubble`,
      iris: 3021842,
    }),
    hair: { style: `twoblock`, color: 1314830, color2: 2759700 },
    top: { style: `tee`, color: 15921386, print: `band`, color2: 1842210 },
    outer: { style: `bomber`, color: 4016690, color2: 15234332, print: `jie` },
    bottom: { style: `jeans`, color: 4874886, belt: 2759957 },
    shoes: {
      style: `sneaker`,
      color: 16053490,
      color2: 13115436,
      sole: 15526111,
    },
    socks: 15921906,
    acc: Q(
      { kind: `watch`, color: 1118483, color2: 13685976 },
      { kind: `necklace`, color: 14278112 },
    ),
    seed: 101,
  },
  $o = {
    id: `wen`,
    name: { zh: `小雯`, en: `Wen` },
    sex: `f`,
    age: `adult`,
    build: `slim`,
    height: 1.64,
    skin: 15781814,
    face: Z({
      jaw: 0.3,
      length: 0.5,
      cheek: 0.55,
      eyeSize: 1.08,
      eyeTilt: 0.2,
      eyeGap: 1,
      lid: 0.62,
      noseW: 0.35,
      noseL: 0.45,
      bridge: 0.55,
      lips: 0.62,
      mouthW: 0.95,
      brow: 0.45,
      browArch: 0.6,
      lipColor: 12863311,
      blush: 0.25,
      liner: 0.75,
      mole: 1,
      smile: 0.05,
      iris: 3350543,
    }),
    hair: { style: `ponytail`, color: 1905679, color2: 5913124 },
    top: { style: `tank`, color: 1579036, tucked: !0 },
    outer: { style: `cropped`, color: 15987180, color2: 2074006, print: `wen` },
    bottom: { style: `wide`, color: 14997695, belt: 2761760 },
    shoes: {
      style: `sneaker`,
      color: 16513782,
      color2: 3126182,
      sole: 15722972,
    },
    acc: Q(
      { kind: `necklace`, color: 15257738 },
      { kind: `watch`, color: 15328474, color2: 13215850 },
      { kind: `earbuds` },
    ),
    seed: 202,
  };
function $(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? es(e), ...r };
}
function es(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
