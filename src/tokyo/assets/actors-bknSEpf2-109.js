// tokyo/assets/actors-bknSEpf2 109 — base
// Lines 47408-47740 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function fE(e, t, n) {
  let r = ((e % 24) + 24) % 24;
  return n > 24
    ? r >= t || r < n - 24
    : t <= n
      ? r >= t && r < n
      : r >= t || r < n;
}
function pE(e, t) {
  return (t + 2048) * 4096 + (e + 2048);
}
var mE = [
    16053490, 16053490, 15921904, 12375018, 13622506, 14673902, 15327203,
    14211286, 10467023,
  ],
  hE = [
    16052974, 15722202, 15257552, 12374246, 1907999, 14273456, 11122844,
    13022160, 2765638, 15918792,
  ],
  gE = [
    16053231, 16053231, 15460060, 13224390, 10132120, 3815996, 1776413, 1776413,
    14207147, 13615784, 2634312,
  ],
  _E = [
    10136462, 14264998, 11125209, 15720614, 12168911, 7039813, 10242620,
    13212218, 4020805, 7178408, 11904130,
  ],
  vE = [13777980, 15909424, 2072222, 15759914, 4881096, 9095242, 15231642],
  yE = [
    12073850, 8080028, 12597547, 14913456, 2793880, 14711609, 10239322, 5926832,
    13936202, 4885098,
  ],
  bE = [
    7829626, 7034438, 13352351, 3818584, 9071194, 5925466, 10128026, 15262420,
    7101066,
  ],
  xE = [
    2765638, 6957610, 8026746, 3824202, 14209216, 4868714, 10123850, 15921386,
    15779880,
  ],
  SE = [
    10133156, 1842210, 2767450, 14207144, 5921378, 3820090, 9051178, 15262424,
    11125209,
  ],
  CE = [
    12120106, 16742938, 1710620, 2788072, 15747706, 16053490, 1710620, 10132120,
    16740193,
  ],
  wE = [15921386, 3816e3, 9054762, 2771562, 15259816, 1776413, 5921362],
  TE = [9054778, 2767450, 6974062, 5915186, 3820090, 8010330],
  EE = [16053230, 16053230, 15921126, 15262936, 13224390, 11125209],
  DE = [3886958, 2964567, 5927316, 8229811, 2371656, 4874886],
  OE = [3092791, 2436157, 1710620, 5988198, 3814704, 4472890, 12168070],
  kE = [
    1842206, 3684669, 12167044, 13483935, 5790270, 8158592, 2502212, 15263196,
  ],
  AE = [
    9272157, 5988198, 2765638, 3814704, 6974042, 12167044, 1842206, 4874886,
  ],
  jE = [
    1842206, 2502212, 13483935, 6965813, 10136462, 8158592, 3886958, 15263196,
    3813456,
  ],
  ME = [2042436, 1710620, 11049080, 2968122, 3813194, 2042436],
  NE = [2039583, 2435130, 3816e3, 4862032, 2763306, 5918792],
  PE = [1579036, 2042436, 3816e3, 2763310],
  FE = [2371656, 2763310, 3816e3, 4866616, 1844792, 5988198],
  IE = [
    14272422, 15261904, 10136462, 14264998, 7178408, 3816e3, 15920870, 1842210,
  ],
  LE = [
    3832008, 15779880, 15231642, 14673642, 3111530, 12597547, 1842210, 9421288,
  ],
  RE = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e)),
  zE = {
    id: `monk`,
    sex: `m`,
    age: `adult`,
    build: `slim`,
    height: 1.7,
    skin: yn.light,
    seed: 4401,
    face: ln({
      jaw: 0.45,
      eyeSize: 0.92,
      lid: 0.35,
      brow: 0.35,
      smile: 0.35,
      wrinkles: 0.2,
    }),
    hair: { style: `bald`, color: 3813416 },
    top: {
      style: `shirt`,
      color: 9075290,
      sleeve: `long`,
      length: 0.16,
      fit: 0.95,
    },
    bottom: { style: `wide`, color: 8746582 },
    shoes: { style: `flat`, color: 3813928 },
    acc: [],
  },
  BE = {
    id: `child-m`,
    sex: `m`,
    age: `student`,
    build: `slim`,
    height: 1.24,
    skin: yn.light,
    seed: 5101,
    face: ln({
      jaw: 0.3,
      eyeSize: 1.12,
      lid: 0.4,
      cheek: 0.6,
      brow: 0.4,
      smile: 0.4,
    }),
    hair: { style: `bowl`, color: pn.black },
    top: {
      style: `uniform`,
      color: 16185074,
      print: `school`,
      color2: 2768780,
    },
    bottom: { style: `shorts`, color: 2042436 },
    shoes: {
      style: `sneaker`,
      color: 15921906,
      color2: 2781392,
      sole: 15921906,
    },
    socks: 15921906,
    acc: RE(
      { kind: `cap`, color: 16172054 },
      { kind: `schoolbag`, color: 2781392 },
    ),
  },
  VE = {
    id: `child-f`,
    sex: `f`,
    age: `student`,
    build: `slim`,
    height: 1.2,
    skin: yn.porcelain,
    seed: 5202,
    face: ln({
      jaw: 0.25,
      eyeSize: 1.15,
      lid: 0.5,
      cheek: 0.6,
      blush: 0.35,
      smile: 0.45,
    }),
    hair: { style: `bangs`, color: pn.black },
    top: {
      style: `uniform`,
      color: 16316660,
      print: `school`,
      color2: 11544634,
      tucked: !0,
    },
    bottom: { style: `skirt`, color: 2042436 },
    shoes: {
      style: `sneaker`,
      color: 15921906,
      color2: 14700624,
      sole: 15921906,
    },
    socks: 15921906,
    acc: RE(
      { kind: `cap`, color: 16172054 },
      { kind: `schoolbag`, color: 14696490 },
    ),
  },
  HE = {
    id: `jogger-m`,
    sex: `m`,
    age: `adult`,
    build: `slim`,
    height: 1.75,
    skin: yn.tan,
    seed: 6303,
    face: ln({ jaw: 0.5, eyeSize: 0.96, lid: 0.35, brow: 0.55, smile: 0.1 }),
    hair: { style: `fade`, color: pn.black },
    top: { style: `tee`, color: 2788072 },
    bottom: { style: `shorts`, color: 1710620 },
    shoes: {
      style: `sneaker`,
      color: 2763312,
      color2: 16734778,
      sole: 15790314,
    },
    acc: RE({ kind: `cap`, color: 1710618 }, `earbuds`, {
      kind: `watch`,
      color: 1710618,
    }),
  },
  UE = [
    { base: `office-m`, role: `office`, n: 3, top: mE, bottom: OE, mask: 0.25 },
    {
      base: `office-f`,
      role: `office`,
      n: 3,
      top: hE,
      outer: IE,
      bottom: jE,
      mask: 0.4,
    },
    {
      base: `salaryman`,
      role: `office`,
      n: 2,
      top: mE,
      outer: FE,
      suit: !0,
      mask: 0.15,
    },
    { base: `student-m`, role: `student`, n: 2, bottom: ME, mask: 0.15 },
    { base: `student-f`, role: `student`, n: 3, bottom: ME, mask: 0.2 },
    {
      base: `ntu-student`,
      role: `student`,
      n: 2,
      top: SE,
      bottom: PE,
      mask: 0.1,
    },
    {
      base: `auntie`,
      role: `auntie`,
      n: 3,
      top: yE,
      bottom: NE,
      mask: 0.45,
      keepHair: !0,
    },
    {
      base: `mom`,
      role: `auntie`,
      n: 2,
      top: [..._E, ...gE],
      bottom: kE,
      mask: 0.5,
    },
    {
      base: `uncle`,
      role: `uncle`,
      n: 2,
      top: EE,
      bottom: AE,
      mask: 0.05,
      keepHair: !0,
    },
    { base: `taxi-uncle`, role: `uncle`, n: 1, top: xE, bottom: OE, mask: 0.1 },
    { base: `worker`, role: `uncle`, n: 1, top: gE, bottom: DE, weight: 0.6 },
    {
      base: `ama`,
      role: `elder`,
      n: 2,
      top: bE,
      bottom: NE,
      mask: 0.5,
      keepHair: !0,
    },
    {
      base: `agong`,
      role: `elder`,
      n: 2,
      top: [...bE, ...xE],
      bottom: OE,
      mask: 0.4,
      keepHair: !0,
    },
    {
      base: `tourist`,
      role: `tourist`,
      n: 2,
      top: [...gE, ...vE],
      bottom: [...DE, ...AE],
      mask: 0.05,
    },
    { base: `hipster`, role: `tourist`, n: 2, top: gE, bottom: kE, mask: 0.1 },
    {
      base: `ximen-girl`,
      role: `tourist`,
      n: 2,
      top: [...gE, ..._E],
      bottom: jE,
      mask: 0.15,
    },
    { base: `vendor`, role: `vendor`, n: 1, top: wE, bottom: OE, keepHair: !0 },
    { base: `clerk`, role: `vendor`, n: 1, weight: 0.6 },
    { base: `rider-pink`, role: `delivery`, n: 1, keepHair: !0 },
    { base: `rider-green`, role: `delivery`, n: 1, keepHair: !0 },
    {
      base: `temple-lady`,
      role: `worshipper`,
      n: 1,
      top: TE,
      bottom: NE,
      keepHair: !0,
    },
    { base: zE, role: `monk`, n: 1, keepHair: !0 },
    { base: BE, role: `child`, n: 1, keepHair: !0 },
    { base: VE, role: `child`, n: 1, keepHair: !0 },
    { base: `jogger`, role: `jogger`, n: 1, top: CE, keepHair: !0 },
    { base: HE, role: `jogger`, n: 1, top: CE, keepHair: !0 },
    { base: `rain-commuter`, role: `rain`, n: 2, outer: LE, bottom: OE },
  ],
  WE = [
    [yn.porcelain, 0.16],
    [yn.fair, 0.32],
    [yn.light, 0.3],
    [yn.medium, 0.16],
    [yn.tan, 0.06],
  ],
  GE = [
    [yn.fair, 0.1],
    [yn.light, 0.25],
    [yn.medium, 0.3],
    [yn.tan, 0.25],
    [yn.deep, 0.1],
  ];
function KE(e, t, n) {
  let r = n ?? (t ? GE : WE);
  for (let [t, n] of r) {
    if (e < n) return t;
    e -= n;
  }
  return r[r.length - 1][0];
}
var qE = new Set([`cup`, `phone`, `umbrella`, `marketBag`]);
