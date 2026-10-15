// tokyo/assets/region-tokyo-BcM3fReU 49 — bottom
// Lines 27456-27778 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function G(e, t, n) {
  return { ja: e, zh: t, en: n };
}
var ag = [`〇`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  og = {
    chiyoda: G(`千代田区`, `千代田區`, `Chiyoda-ku`),
    chuo: G(`中央区`, `中央區`, `Chuo-ku`),
    minato: G(`港区`, `港區`, `Minato-ku`),
    taito: G(`台東区`, `台東區`, `Taito-ku`),
    bunkyo: G(`文京区`, `文京區`, `Bunkyo-ku`),
  };
Object.fromEntries(
  Object.entries({
    駅: `站`,
    楽: `樂`,
    浜: `濱`,
    区: `區`,
    内: `內`,
    広: `廣`,
    国: `國`,
    蔵: `藏`,
    浅: `淺`,
    伝: `傳`,
    戸: `戶`,
    郷: `鄉`,
    沢: `澤`,
    恵: `惠`,
    図: `圖`,
    学: `學`,
    鉄: `鐵`,
    関: `關`,
    桜: `櫻`,
    稲: `稻`,
    県: `縣`,
    気: `氣`,
    売: `賣`,
    読: `讀`,
    様: `樣`,
    来: `來`,
    両: `兩`,
    薬: `藥`,
    発: `發`,
    総: `總`,
    横: `橫`,
    黒: `黑`,
    当: `當`,
    実: `實`,
    宝: `寶`,
    弁: `辯`,
    万: `萬`,
    与: `與`,
    豊: `豐`,
    亀: `龜`,
    経: `經`,
    続: `續`,
    応: `應`,
    単: `單`,
    戦: `戰`,
    対: `對`,
    掲: `揭`,
    塩: `鹽`,
    団: `團`,
    辺: `邊`,
    斎: `齋`,
    霊: `靈`,
    剣: `劍`,
    険: `險`,
    検: `檢`,
    歳: `歲`,
    帰: `歸`,
    数: `數`,
    観: `觀`,
    庁: `廳`,
    営: `營`,
    転: `轉`,
    軽: `輕`,
    鉱: `鑛`,
    価: `價`,
    児: `兒`,
    写: `寫`,
    画: `畫`,
    静: `靜`,
  })
    .filter(([, e]) => e !== `站`)
    .map(([e, t]) => [t, e]),
);
function sg(e, t) {
  return e.lanesPerDir * t + e.median / 2 + e.sidewalk;
}
var cg = (e) => e + 3;
function lg(e, t, n, r, i = 3.25) {
  let a = e.filter((e) => e.axis === `z`).sort((e, t) => e.at - t.at),
    o = e.filter((e) => e.axis === `x`).sort((e, t) => e.at - t.at),
    s = t.filter((e) => !e.zone),
    c = t.filter((e) => e.zone === `pedestrian`),
    l = [...new Set(a.map((e) => e.at))].sort((e, t) => e - t),
    u = [];
  for (let e = 0; e + 1 < l.length; e++) {
    let t = l[e],
      a = l[e + 1],
      d = (t + a) / 2,
      f = o.filter((e) => e.from <= d && e.to >= d);
    for (let e = 0; e + 1 < f.length; e++) {
      if (f[e].at !== n || f[e + 1].at !== r) continue;
      let o = (n + r) / 2,
        l = c.some(
          (e) =>
            e.kind === `plaza` &&
            Math.abs(d - e.x) <= e.w / 2 + 60 &&
            Math.abs(o - e.z) <= e.d / 2 + 60,
        )
          ? 3
          : 2;
      if (!(a - t <= 110))
        for (let e = 1; e < l; e++) {
          let o = Math.round(t + ((a - t) * e) / l),
            c = { minX: o - 8, maxX: o + 8, minZ: n, maxZ: r };
          s.some(
            (e) =>
              c.maxX > e.x - e.w / 2 - 4 &&
              c.minX < e.x + e.w / 2 + 4 &&
              c.maxZ > e.z - e.d / 2 - 4 &&
              c.minZ < e.z + e.d / 2 + 4,
          ) || u.push({ id: `ns-${o}-${n}`, x: o, half: cg(i) });
        }
    }
  }
  return u;
}
var ug = {
    north: -612,
    south: -580,
    top: -604,
    topWest: -598,
    bottom: -588,
    gorgeX: -145,
    west: -1e3,
    mouth: 566,
  },
  dg = { west: ug.west, east: -252, top: -599.7, bottom: -586.3, level: -8.5 },
  fg = {
    north: -195,
    south: -165,
    top: -187,
    bottom: -173,
    west: -800,
    mouth: 566,
  },
  pg = { minX: -372, maxX: -338, minZ: -156, maxZ: 335 },
  mg = { minX: -420, maxX: -230, minZ: -1150, maxZ: -1010 },
  hg = { minX: -368, maxX: -340, minZ: -1092, maxZ: -1066 },
  gg = { minX: -340, maxX: -230, minZ: -1083, maxZ: -1075 },
  _g = { minX: -358, maxX: -350, minZ: -1066, maxZ: -1010 },
  vg = [
    [565, 900],
    [565, -605],
    [605, -690],
    [700, -860],
    [790, -1020],
    [880, -1020],
    [775, -820],
    [690, -655],
    [640, -560],
    [640, 900],
  ],
  yg = { westX: 565, farX: 640, northZ: -640 },
  bg = -1.5,
  xg = [
    {
      id: `kanda-gorge`,
      minX: dg.west,
      maxX: dg.east,
      minZ: dg.top,
      maxZ: dg.bottom,
      level: dg.level,
    },
  ],
  Sg = (e, t, n, r) => [
    [e, t],
    [n, t],
    [n, r],
    [e, r],
  ],
  Cg = [
    {
      id: `sumida`,
      name: G(`隅田川`, `隅田川`, `Sumida River`),
      kind: `river`,
      polygon: vg,
      level: -2,
      bank: `terrace`,
    },
    {
      id: `kanda`,
      name: G(`神田川`, `神田川`, `Kanda River`),
      kind: `river`,
      level: -2.2,
      bank: `concrete`,
      polygon: [
        [ug.west, dg.top],
        [dg.east, dg.top],
        [dg.east, ug.topWest],
        [ug.gorgeX, ug.topWest],
        [ug.gorgeX, ug.top],
        [ug.mouth, ug.top],
        [ug.mouth, ug.bottom],
        [dg.east, ug.bottom],
        [dg.east, dg.bottom],
        [ug.west, dg.bottom],
      ],
    },
    {
      id: `nihonbashi`,
      name: G(`日本橋川`, `日本橋川`, `Nihonbashi River`),
      kind: `river`,
      level: -2,
      bank: `stone-wall`,
      polygon: Sg(fg.west, fg.top, fg.mouth, fg.bottom),
    },
    {
      id: `moat`,
      name: G(
        `皇居の濠（日比谷濠・馬場先濠・和田倉濠）`,
        `皇居護城河（日比谷濠・馬場先濠・和田倉濠）`,
        `Imperial Palace Moats`,
      ),
      kind: `moat`,
      level: -1.5,
      bank: `stone-wall`,
      polygon: Sg(pg.minX, pg.minZ, pg.maxX, pg.maxZ),
    },
    {
      id: `shinobazu`,
      name: G(`不忍池`, `不忍池`, `Shinobazu Pond`),
      kind: `pond`,
      level: -0.4,
      bank: `natural`,
      polygon: Sg(mg.minX, mg.minZ, mg.maxX, mg.maxZ),
      holes: [hg, gg, _g].map((e) => Sg(e.minX, e.minZ, e.maxX, e.maxZ)),
    },
  ],
  wg = {
    "kanda:-380": G(`聖橋`, `聖橋`, `Hijiribashi`),
    "kanda:-252": G(`昌平橋`, `昌平橋`, `Shoheibashi`),
    "kanda:-145": G(`万世橋`, `萬世橋`, `Manseibashi`),
    "kanda:75": G(`和泉橋`, `和泉橋`, `Izumibashi`),
    "kanda:175": G(`美倉橋`, `美倉橋`, `Mikurabashi`),
    "kanda:385": G(`左衛門橋`, `左衛門橋`, `Saemonbashi`),
    "kanda:450": G(`浅草橋`, `淺草橋`, `Asakusabashi`),
    "kanda:545": G(`柳橋`, `柳橋`, `Yanagibashi`),
    "nihonbashi:-380": G(`神田橋`, `神田橋`, `Kandabashi`),
    "nihonbashi:-252": G(`鎌倉橋`, `鎌倉橋`, `Kamakurabashi`),
    "nihonbashi:-80": G(`常盤橋`, `常盤橋`, `Tokiwabashi`),
    "nihonbashi:75": G(`新常盤橋`, `新常盤橋`, `Shin-Tokiwabashi`),
    "nihonbashi:250": G(`日本橋`, `日本橋`, `Nihonbashi`),
    "nihonbashi:320": G(`江戸橋`, `江戶橋`, `Edobashi`),
    "nihonbashi:385": G(`鎧橋`, `鎧橋`, `Yoroibashi`),
    "nihonbashi:450": G(`茅場橋`, `茅場橋`, `Kayababashi`),
    "nihonbashi:545": G(`豊海橋`, `豐海橋`, `Toyomibashi`),
  },
  Tg = {
    yasukuni: G(`両国橋`, `兩國橋`, `Ryogokubashi`),
    eitai: G(`永代橋`, `永代橋`, `Eitaibashi`),
    "kajibashi-e": G(`中央大橋`, `中央大橋`, `Chuo-ohashi`),
    harumi: G(`勝鬨橋`, `勝鬨橋`, `Kachidokibashi`),
  },
  Eg = (e) => (e < dg.east ? dg.top : e < ug.gorgeX ? ug.topWest : ug.top),
  Dg = (e) => (e < dg.east ? dg.bottom : ug.bottom);
function Og(e, t, n) {
  let r = [],
    i = [
      { id: `kanda`, north: ug.north, south: ug.south, top: Eg, bottom: Dg },
      {
        id: `nihonbashi`,
        north: fg.north,
        south: fg.south,
        top: () => fg.top,
        bottom: () => fg.bottom,
      },
    ];
  for (let a of i) {
    let i = [];
    for (let t of e)
      t.axis === `z` &&
        t.from <= a.north &&
        t.to >= a.south &&
        i.push({ id: t.id, x: t.at, half: sg(t, n) });
    for (let n of lg(e, t, a.north, a.south))
      i.push({ id: n.id, x: n.x, half: n.half });
    i.sort((e, t) => e.x - t.x);
    for (let e of i) {
      let t = wg[`${a.id}:${e.x}`],
        n = {
          id: `${a.id}-${e.x}`,
          over: a.id,
          minX: e.x - e.half,
          maxX: e.x + e.half,
          minZ: Math.min(a.top(e.x - e.half), a.top(e.x + e.half)) - 0.5,
          maxZ: Math.max(a.bottom(e.x - e.half), a.bottom(e.x + e.half)) + 0.5,
          road: e.id,
          kind: `road`,
        };
      (t && (n.name = t), r.push(n));
    }
  }
  for (let t of e) {
    let e = Tg[t.id];
    if (!e || t.axis !== `x`) continue;
    let i = sg(t, n);
    r.push({
      id: `sumida-${t.id}`,
      name: e,
      over: `sumida`,
      minX: t.to - 1,
      maxX: yg.farX + 10,
      minZ: t.at - i,
      maxZ: t.at + i,
      road: t.id,
      kind: `far`,
    });
  }
  return r;
}
