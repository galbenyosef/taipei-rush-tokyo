// tokyo__assets__actors-Bnj6Q1ad 120 — item
// Lines 57016-57232 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function fA(e) {
  let t = {};
  try {
    t = e.vehicles?.specs ?? {};
  } catch {}
  if (t.motorcycle) return `motorcycle`;
  for (let e of Object.keys(t))
    if (e !== `scooter` && t[e]?.twoWheeler && /moto|bike|cycle/i.test(e))
      return e;
  return `scooter`;
}
function pA(e) {
  let t = [`scooter`];
  try {
    let n = e.vehicles?.specs ?? {};
    for (let e of Object.keys(n))
      e !== `scooter` && n[e]?.twoWheeler && t.push(e);
  } catch {}
  return t;
}
var mA = 1.4,
  hA = [
    {
      id: `tokyo-station`,
      item: `jp-melonca`,
      prop: `melonca`,
      zh: `東京車站丸之內北口`,
      en: `Tokyo Station, Marunouchi North Exit`,
      x: -39,
      z: -70,
      mode: `free`,
    },
    {
      id: `yaesu`,
      item: `jp-shinkansen-model`,
      prop: `shinkansenModel`,
      zh: `東京車站八重洲口`,
      en: `Tokyo Station, Yaesu Exit`,
      x: 58,
      z: -38,
      mode: `walk`,
    },
    {
      id: `yurakucho`,
      item: `jp-kippu`,
      prop: `kippu`,
      zh: `有樂町高架下`,
      en: `Under the Yurakucho arches`,
      x: -60,
      z: 205,
      mode: `free`,
    },
    {
      id: `ginza`,
      item: `jp-ginza-bag`,
      prop: `ginzaBag`,
      zh: `銀座中央通`,
      en: `Chuo-dori, Ginza`,
      x: 100,
      z: 400,
      mode: `walk`,
    },
    {
      id: `kabukiza`,
      item: `jp-kabuki-ticket`,
      prop: `kabukiTicket`,
      zh: `東銀座歌舞伎座前`,
      en: `Outside the Kabukiza, Higashi-Ginza`,
      x: 224,
      z: 368,
      mode: `walk`,
    },
    {
      id: `shimbashi`,
      item: `jp-salaryman-tie`,
      prop: `salarymanTie`,
      zh: `新橋SL廣場`,
      en: `Shimbashi SL Square`,
      x: -160,
      z: 600,
      mode: `free`,
    },
    {
      id: `tsukiji`,
      item: `jp-tamagoyaki`,
      prop: `tamagoyaki`,
      zh: `築地場外市場`,
      en: `Tsukiji Outer Market`,
      x: 385,
      z: 448,
      mode: `free`,
    },
    {
      id: `nihonbashi`,
      item: `jp-sensu`,
      prop: `sensu`,
      zh: `日本橋橋頭`,
      en: `At the Nihonbashi bridge`,
      x: 240,
      z: -152,
      mode: `walk`,
    },
    {
      id: `ningyocho`,
      item: `jp-tenugui`,
      prop: `tenugui`,
      zh: `人形町老街`,
      en: `Old Ningyocho`,
      x: 470,
      z: -278,
      mode: `walk`,
    },
    {
      id: `amazake-yokocho`,
      item: `jp-ningyoyaki`,
      prop: `ningyoyaki`,
      zh: `人形町甘酒橫丁`,
      en: `Amazake Yokocho, Ningyocho`,
      x: 440,
      z: -322,
      mode: `walk`,
    },
    {
      id: `kanda-myojin`,
      item: `jp-furin`,
      prop: `furin`,
      zh: `神田明神鳥居前`,
      en: `By the Kanda Myojin torii`,
      x: -283,
      z: -700,
      mode: `walk`,
    },
    {
      id: `ochanomizu`,
      item: `jp-guitar-pick`,
      prop: `guitarPick`,
      zh: `御茶之水樂器街`,
      en: `The guitar shops of Ochanomizu`,
      x: -345,
      z: -598,
      mode: `walk`,
    },
    {
      id: `jimbocho`,
      item: `jp-old-book`,
      prop: `oldBook`,
      zh: `神田古書街（神保町）`,
      en: `The Kanda book town, Jimbocho`,
      x: -420,
      z: -482,
      mode: `walk`,
    },
    {
      id: `akiba-retro`,
      item: `jp-retro-cartridge`,
      prop: `retroCartridge`,
      zh: `秋葉原中古遊戲店前`,
      en: `Outside a retro game shop, Akihabara`,
      x: -95,
      z: -700,
      mode: `free`,
    },
    {
      id: `akiba-flyer`,
      item: `jp-maid-flyer`,
      prop: `maidFlyer`,
      zh: `秋葉原電器街`,
      en: `Akihabara Electric Town`,
      x: -118,
      z: -736,
      mode: `walk`,
    },
    {
      id: `ameyoko`,
      item: `jp-ameyoko-choco`,
      prop: `ameyokoChoco`,
      zh: `阿美橫丁`,
      en: `Ameyoko`,
      x: -155,
      z: -1e3,
      mode: `free`,
    },
    {
      id: `ueno-station`,
      item: `jp-panda-goods`,
      prop: `pandaGoods`,
      zh: `上野車站`,
      en: `Ueno Station`,
      x: -100,
      z: -1178,
      mode: `walk`,
    },
    {
      id: `ueno-park`,
      item: `jp-chochin`,
      prop: `chochin`,
      zh: `上野公園`,
      en: `Ueno Park`,
      x: -235,
      z: -1300,
      mode: `free`,
    },
  ];
hA.map(({ id: e, item: t, zh: n, en: r }) => ({
  id: e,
  item: t,
  zh: n,
  en: r,
}));
function gA(e) {
  let t = e.state.data.bagFinds;
  return new Set(
    Array.isArray(t)
      ? t.filter((e) => typeof e == `string` && e.length < 64)
      : [],
  );
}
