// tokyo/assets/region-tokyo-BcM3fReU 99 — kind
// Lines 47161-47308 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var gC = [
  {
    id: `ginza-4`,
    x: 75,
    z: 355,
    name: G(`銀座四丁目`, `銀座四丁目`, `Ginza 4-chome`),
  },
  {
    id: `sukiyabashi`,
    x: -15,
    z: 355,
    name: G(`数寄屋橋`, `數寄屋橋`, `Sukiyabashi`),
  },
  {
    id: `miharabashi`,
    x: 175,
    z: 355,
    name: G(`三原橋`, `三原橋`, `Miharabashi`),
  },
  {
    id: `tsukiji-4`,
    x: 320,
    z: 355,
    name: G(`築地四丁目`, `築地四丁目`, `Tsukiji 4-chome`),
  },
  { id: `hibiya`, x: -315, z: 355, name: G(`日比谷`, `日比谷`, `Hibiya`) },
  {
    id: `babasakimon`,
    x: -315,
    z: 125,
    name: G(`馬場先門`, `馬場先門`, `Babasakimon`),
  },
  {
    id: `wadakuramon`,
    x: -315,
    z: 0,
    name: G(`和田倉門`, `和田倉門`, `Wadakuramon`),
  },
  { id: `otemachi`, x: -315, z: -110, name: G(`大手町`, `大手町`, `Otemachi`) },
  {
    id: `kandabashi`,
    x: -380,
    z: -165,
    name: G(`神田橋`, `神田橋`, `Kandabashi`),
  },
  { id: `kajibashi`, x: -15, z: 125, name: G(`鍛冶橋`, `鍛冶橋`, `Kajibashi`) },
  { id: `kyobashi`, x: 175, z: 125, name: G(`京橋`, `京橋`, `Kyobashi`) },
  {
    id: `nihonbashi`,
    x: 250,
    z: -110,
    name: G(`日本橋`, `日本橋`, `Nihonbashi`),
  },
  { id: `edobashi`, x: 320, z: -165, name: G(`江戸橋`, `江戶橋`, `Edobashi`) },
  { id: `shimbashi`, x: -15, z: 620, name: G(`新橋`, `新橋`, `Shimbashi`) },
  {
    id: `ginza-8`,
    x: 75,
    z: 620,
    name: G(`銀座八丁目`, `銀座八丁目`, `Ginza 8-chome`),
  },
  { id: `sudacho`, x: -145, z: -510, name: G(`須田町`, `須田町`, `Sudacho`) },
  {
    id: `manseibashi`,
    x: -145,
    z: -580,
    name: G(`万世橋`, `萬世橋`, `Manseibashi`),
  },
  {
    id: `sotokanda-1`,
    x: -145,
    z: -700,
    name: G(`外神田一丁目`, `外神田一丁目`, `Soto-Kanda 1-chome`),
  },
  {
    id: `suehirocho`,
    x: -145,
    z: -770,
    name: G(`末広町`, `末廣町`, `Suehirocho`),
  },
  {
    id: `ueno-hirokoji`,
    x: -190,
    z: -950,
    name: G(`上野広小路`, `上野廣小路`, `Ueno-hirokoji`),
  },
  {
    id: `ueno-ekimae`,
    x: 75,
    z: -1170,
    name: G(`上野駅前`, `上野站前`, `Ueno-ekimae`),
  },
  {
    id: `iwamotocho`,
    x: 75,
    z: -510,
    name: G(`岩本町`, `岩本町`, `Iwamotocho`),
  },
  {
    id: `asakusabashi`,
    x: 450,
    z: -510,
    name: G(`浅草橋`, `淺草橋`, `Asakusabashi`),
  },
  {
    id: `hongo-3`,
    x: -380,
    z: -950,
    name: G(`本郷三丁目`, `本鄉三丁目`, `Hongo 3-chome`),
  },
];
function _C(e, t, n) {
  for (let n of gC)
    if (Math.abs(n.x - e) < 4 && Math.abs(n.z - t) < 4) return n.name;
  return n.some(
    (e) => (e.kind === `boulevard` || e.kind === `arterial`) && !lC(e),
  ) && n.length >= 2
    ? cC(e, t)
    : null;
}
var vC = {
    streetLabel: uC,
    houseNumber: fC,
    laneName: (e, t) => {
      let n = dC(t),
        r = n ? WS[n.idx] : void 0;
      return r && n ? oC(r, n.chome) : G(`路地`, `巷弄`, `Side street`);
    },
    unnamedLane: () => G(`路地`, `巷弄`, `Side street`),
    address: mC,
    cityAddress: () => G(`東京都`, `東京都`, `Tokyo`),
    intersectionName: _C,
    areaAt: hC,
  },
  yC = Math.PI;
function bC(e, t, n, r, i, a, o, s, c) {
  let l = {
    id: e,
    name: t,
    x: (n + i) / 2,
    z: (r + a) / 2,
    w: i - n,
    d: a - r,
    facing: s,
    kind: o,
  };
  return (c && (l.zone = c), l);
}
