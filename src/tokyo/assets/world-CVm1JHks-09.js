// tokyo/assets/world-CVm1JHks 09 — clinic
// Lines 2851-3028 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
(pn({
  fashion: 4,
  sneakers: 3,
  "beef-noodle": 2,
  vermicelli: 2,
  lumei: 1.5,
  "fried-chicken": 1.5,
  cosmetics: 2,
  phone: 2,
  tattoo: 1.5,
  "game-arcade": 1,
  ramen: 1.5,
  hotpot: 1,
  "shaved-ice": 1,
  optician: 1,
  hotel: 1,
  coffee: 1,
  "braised-rice": 1,
}),
  pn({
    buddhist: 3,
    herbal: 3,
    "tea-leaf": 2,
    "braised-rice": 2.5,
    vermicelli: 1.5,
    noodles: 2,
    clinic: 1.5,
    pawn: 1,
    scooter: 1.5,
    hardware: 1.5,
    massage: 1.5,
    "shaved-ice": 1,
    "dried-goods": 1,
    jewelry: 1,
    "soy-milk": 1,
    lumei: 1,
    fruit: 1,
  }),
  pn({
    bento: 2.5,
    stationery: 2.5,
    "beef-noodle": 2,
    dumplings: 2,
    clinic: 2,
    coffee: 2,
    optician: 1.5,
    "soy-milk": 1.5,
    noodles: 1.5,
    phone: 1,
    bakery: 1,
    laundry: 1,
    bank: 1,
    "braised-rice": 1,
    realty: 1,
  }),
  pn({
    izakaya: 3,
    coffee: 2.5,
    wedding: 2,
    ramen: 2,
    hotel: 1.5,
    massage: 1.5,
    bakery: 1.5,
    salon: 1.5,
    "beef-noodle": 1.5,
    hardware: 1.5,
    electrical: 1,
    clinic: 1,
    "braised-rice": 1,
    bank: 1,
    fashion: 1,
    dumplings: 1,
  }),
  pn({
    computer: 2.5,
    phone: 2,
    electrical: 2,
    coffee: 2,
    clinic: 1.5,
    "pepper-bun": 1,
    bakery: 1.5,
    "braised-rice": 1.5,
    bento: 1.5,
    laundry: 1,
    realty: 1.5,
    salon: 1,
    noodles: 1,
    "soy-milk": 1,
    hardware: 1,
    bank: 1,
  }),
  pn({
    coffee: 3,
    ramen: 2,
    hotpot: 2,
    fashion: 2,
    cosmetics: 2,
    realty: 2,
    bank: 2,
    phone: 1.5,
    bakery: 1.5,
    xiaolongbao: 1,
    salon: 1.5,
    clinic: 1,
    "beef-noodle": 1,
    optician: 1,
  }),
  pn({
    xiaolongbao: 1.5,
    "shaved-ice": 2,
    coffee: 3,
    "beef-noodle": 2,
    stationery: 1.5,
    fashion: 2,
    cosmetics: 1.5,
    salon: 2,
    clinic: 1.5,
    dumplings: 1.5,
    bakery: 1.5,
    optician: 1,
    realty: 1,
    noodles: 1,
    "soy-milk": 1,
    ramen: 1,
  }),
  pn({
    "fried-chicken": 2.5,
    "stinky-tofu": 2,
    fashion: 2.5,
    phone: 2,
    lumei: 1.5,
    "shaved-ice": 1.5,
    "beef-noodle": 1,
    bento: 1,
    "soy-milk": 1,
    sneakers: 1.5,
    optician: 1,
    scooter: 1,
    clinic: 1,
    "game-arcade": 1,
    "pepper-bun": 1,
  }));
var mn = [-1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18],
  hn = [12, 13, 16, 19, 20, 21, 21.5, 22, 22.5, 23, 24, 25, 26];
function gn(e) {
  let t = e.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
  if (!t) return 0;
  let n = +t[1] + t[2] / 60,
    r = +t[3] + t[4] / 60;
  if ((r <= n && (r += 24), r - n >= 23.5)) return 0;
  let i = 1;
  for (let e = 1; e < mn.length; e++) mn[e] <= n + 0.01 && (i = e);
  let a = hn.length - 1;
  for (let e = hn.length - 1; e >= 0; e--) hn[e] >= r - 0.01 && (a = e);
  return i * hn.length + a;
}
function _n(e) {
  return e ? mn[Math.floor(e / hn.length)] : -1;
}
function vn(e) {
  return e ? hn[e % hn.length] : 1 / 0;
}
Oe.map((e) => ({
  id: e.zh,
  zh: e.zh,
  en: e.en,
  sub: e.tagline?.zh ?? `手搖飲`,
  bg: e.colors[0],
  fg: e.colors[1],
  accent: e.colors[2],
}));
var yn = (e) => `float[${e.length}](${e.map((e) => e.toFixed(2)).join(`, `)})`,
  bn = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  },
  xn = (e) =>
    `vec3(${bn((e >> 16) & 255).toFixed(4)}, ${bn((e >> 8) & 255).toFixed(4)}, ${bn(e & 255).toFixed(4)})`;
