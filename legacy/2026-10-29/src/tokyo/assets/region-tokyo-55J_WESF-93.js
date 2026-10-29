// tokyo/assets/region-tokyo-55J_WESF 93 — bag
// Lines 41252-41436 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Rle(e, t) {
  let n = e.districts;
  try {
    let e = n?.storefront?.(t);
    if (e) return e;
    for (let e of n?.packs ?? []) {
      let n = e.storefront?.(t);
      if (n) return n;
    }
  } catch {}
  return null;
}
var Mh = 8,
  Nh = (e, t) => ({ zh: e, en: t });
function Ph(e, t, n, r = {}) {
  let i = xo(e),
    a = r.proper ? i.en : i.en.charAt(0).toLowerCase() + i.en.slice(1),
    o = { name: { zh: i.zh, en: a }, price: t, heal: n };
  return (r.brand && (o.brand = r.brand), r.bag && (o.bag = r.bag), o);
}
var zle = {
    ゲームセンター: Nh(`遊樂場`, `the game centre`),
    タピオカ: Nh(`珍奶店`, `the tapioca stand`),
    宝くじ売り場: Nh(`彩券販賣處`, `the lottery booth`),
    稲荷神社: Nh(`稻荷神社`, `the Inari shrine`),
    お地蔵さま: Nh(`地藏`, `the Jizo`),
  },
  Ble = {
    convenience: Nh(`便利商店`, `the konbini`),
    pharmacy: Nh(`藥妝店`, `the drugstore`),
    claw: Nh(`遊樂場`, `the game centre`),
    lottery: Nh(`彩券販賣處`, `the lottery booth`),
    bubbletea: Nh(`珍奶店`, `the tea stand`),
    shrine: Nh(`小神社`, `the shrine`),
  },
  Fh = 5;
function Ih() {
  return {
    items: {
      convenience: [
        Ph(`trade.konbini.item.onigiri`, 180, 25, { bag: `jp-onigiri` }),
        Ph(`shop.konbini.ocha`, 160, 15, { bag: `jp-ocha` }),
        Ph(`trade.konbini.item.coffee`, 120, 10, { bag: `jp-hot-coffee` }),
        Ph(`trade.konbini.item.nikuman`, 190, 25, { bag: `jp-nikuman` }),
        Ph(`shop.konbini.oden`, 360, 35, { bag: `jp-oden` }),
        Ph(`shop.konbini.agechiki`, 230, 30, {
          proper: !0,
          bag: `jp-agechiki`,
        }),
      ],
      pharmacy: [
        Ph(`shop.drugstore.kyukyu`, 980, 1e3, { bag: `jp-first-aid` }),
        Ph(`trade.drugstore.item.drink`, 198, 20, { bag: `jp-energy-drink` }),
        Ph(`shop.drugstore.shippu`, 698, 40, { bag: `jp-shippu` }),
        Ph(`trade.drugstore.item.megusuri`, 698, 10, { bag: `jp-megusuri` }),
        Ph(`trade.drugstore.item.mask`, 498, 0, { bag: `jp-mask` }),
      ],
      lottery: [Ph(`shop.lottery.scratch`, 200, 0)],
      claw: [Ph(`shop.arcade.crane`, 100, 0)],
      bubbletea: [
        Ph(`trade.tea-stand.item.milktea`, 600, 15, { bag: `jp-tapioca` }),
        Ph(`shop.tea.matcha`, 650, 15, { bag: `jp-matcha-latte` }),
        Ph(`shop.tea.hojicha`, 580, 15, { bag: `jp-hojicha-latte` }),
      ],
      shrine: [
        Ph(`shop.shrine.inari`, 5, 0, { brand: `稲荷神社` }),
        Ph(`shop.shrine.jizo`, 5, 0, { brand: `お地蔵さま` }),
      ],
    },
    name(e) {
      let t = ui(e.brand);
      return t ? { zh: t.zh, en: t.en } : (zle[e.brand] ?? Ble[e.kind]);
    },
    prizes: [`shiba`, `sushi`, `maneki`, `okashi`, `figure`].map((e) =>
      xo(`shop.arcade.prize.${e}`),
    ),
    clawMiss: [
      Nh(`差一點點…爪子好鬆！`, `So close… the claw is so weak!`),
      Nh(`獎品晃了一下，又掉回去了…`, `It wobbled and dropped back…`),
      Nh(
        `店員幫你把獎品挪到洞口邊了，再試一次？`,
        `A clerk nudged the prize toward the chute — one more go?`,
      ),
    ],
    lottery: {
      prizes: [
        [2e-5, 1e6],
        [12e-5, 1e5],
        [0.00212, 1e4],
        [0.02212, 1e3],
        [0.03412, 500],
        [0.13412, 200],
      ],
      cap: Fh,
      big: 1e4,
      lose: Nh(`沒中…下次再來！`, `No luck this time`),
      soldOut: Nh(
        r.on
          ? r.t(
              `今天這個販賣處的刮刮卡賣完了（每天 ${Fh} 張），明天再來！`,
              `今日はこの売り場のスクラッチくじは売り切れ（1日 ${Fh} 枚まで）。また明日！`,
            )
          : `今天這個販賣處的刮刮卡賣完了（每天 ${Fh} 張），明天再來！`,
        `Sold out here for today (${Fh} per day) — come back tomorrow!`,
      ),
    },
    shrine: {
      offering: Nh(`香油錢`, `offering`),
      blessed: Nh(
        `參拜完畢，神明保佑！任務報酬 +10%，持續 5 分鐘`,
        `Blessed! +10% mission pay for 5 min`,
      ),
      faded: Nh(`參拜的保佑結束了`, `The shrine blessing has faded`),
      own: !0,
    },
    bag: {
      prizes: Re.tokyo,
      receipt: {
        item: `jp-receipt`,
        line: Nh(`，收據放進背包`, `, receipt in your bag`),
      },
    },
  };
}
var Vle = [
    {
      id: `ueno-bike-street`,
      name: Nh(
        `上野機車街・東上野車行`,
        `Higashi-Ueno Motors, Ueno Bike Street`,
      ),
      road: `昭和通`,
      x: 75,
      z: -1e3,
      stock: [
        {
          kind: `scooter`,
          price: 298e3,
          name: Nh(`125cc 速克達`, `125 cc scooter`),
          color: 15263976,
        },
        {
          kind: `motorcycle`,
          price: 858e3,
          name: Nh(`400cc 街車`, `400 cc naked bike`),
          color: 1908257,
        },
        {
          kind: `superbike`,
          price: 248e4,
          name: Nh(`1000cc 仿賽重機`, `1000 cc superbike`),
          color: 13112863,
        },
      ],
    },
  ],
  Hle = {
    spots: [
      [`armor`, 30, -1262],
      [`armor`, -80, -700],
      [`armor`, 175, -260],
      [`armor`, -145, 470],
      [`pistol`, 128, 290],
      [`pistol`, 380, 640],
      [`pistol`, -80, -1010],
      [`bat`, -300, -578],
      [`bat`, 250, -500],
      [`bat`, 400, 0],
      [`bat`, -145, 30],
    ],
    batLine: Nh(
      `撿到球棒 — 來一支全壘打！`,
      `Baseball bat — swing for the fences!`,
    ),
  },
  Lh = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e));
function Ule(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function Rh(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? Ule(e), ...r };
}
