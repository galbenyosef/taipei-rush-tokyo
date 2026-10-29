// tokyo/assets/region-tokyo-A7LxHjud 93 — bag
// Lines 41325-41509 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Xle(e, t) {
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
var Fh = 8,
  Ih = (e, t) => ({ zh: e, en: t });
function Lh(e, t, n, r = {}) {
  let i = xo(e),
    a = r.proper ? i.en : i.en.charAt(0).toLowerCase() + i.en.slice(1),
    o = { name: { zh: i.zh, en: a }, price: t, heal: n };
  return (r.brand && (o.brand = r.brand), r.bag && (o.bag = r.bag), o);
}
var Zle = {
    ゲームセンター: Ih(`遊樂場`, `the game centre`),
    タピオカ: Ih(`珍奶店`, `the tapioca stand`),
    宝くじ売り場: Ih(`彩券販賣處`, `the lottery booth`),
    稲荷神社: Ih(`稻荷神社`, `the Inari shrine`),
    お地蔵さま: Ih(`地藏`, `the Jizo`),
  },
  Qle = {
    convenience: Ih(`便利商店`, `the konbini`),
    pharmacy: Ih(`藥妝店`, `the drugstore`),
    claw: Ih(`遊樂場`, `the game centre`),
    lottery: Ih(`彩券販賣處`, `the lottery booth`),
    bubbletea: Ih(`珍奶店`, `the tea stand`),
    shrine: Ih(`小神社`, `the shrine`),
  },
  Rh = 5;
function zh() {
  return {
    items: {
      convenience: [
        Lh(`trade.konbini.item.onigiri`, 180, 25, { bag: `jp-onigiri` }),
        Lh(`shop.konbini.ocha`, 160, 15, { bag: `jp-ocha` }),
        Lh(`trade.konbini.item.coffee`, 120, 10, { bag: `jp-hot-coffee` }),
        Lh(`trade.konbini.item.nikuman`, 190, 25, { bag: `jp-nikuman` }),
        Lh(`shop.konbini.oden`, 360, 35, { bag: `jp-oden` }),
        Lh(`shop.konbini.agechiki`, 230, 30, {
          proper: !0,
          bag: `jp-agechiki`,
        }),
      ],
      pharmacy: [
        Lh(`shop.drugstore.kyukyu`, 980, 1e3, { bag: `jp-first-aid` }),
        Lh(`trade.drugstore.item.drink`, 198, 20, { bag: `jp-energy-drink` }),
        Lh(`shop.drugstore.shippu`, 698, 40, { bag: `jp-shippu` }),
        Lh(`trade.drugstore.item.megusuri`, 698, 10, { bag: `jp-megusuri` }),
        Lh(`trade.drugstore.item.mask`, 498, 0, { bag: `jp-mask` }),
      ],
      lottery: [Lh(`shop.lottery.scratch`, 200, 0)],
      claw: [Lh(`shop.arcade.crane`, 100, 0)],
      bubbletea: [
        Lh(`trade.tea-stand.item.milktea`, 600, 15, { bag: `jp-tapioca` }),
        Lh(`shop.tea.matcha`, 650, 15, { bag: `jp-matcha-latte` }),
        Lh(`shop.tea.hojicha`, 580, 15, { bag: `jp-hojicha-latte` }),
      ],
      shrine: [
        Lh(`shop.shrine.inari`, 5, 0, { brand: `稲荷神社` }),
        Lh(`shop.shrine.jizo`, 5, 0, { brand: `お地蔵さま` }),
      ],
    },
    name(e) {
      let t = ui(e.brand);
      return t ? { zh: t.zh, en: t.en } : (Zle[e.brand] ?? Qle[e.kind]);
    },
    prizes: [`shiba`, `sushi`, `maneki`, `okashi`, `figure`].map((e) =>
      xo(`shop.arcade.prize.${e}`),
    ),
    clawMiss: [
      Ih(`差一點點…爪子好鬆！`, `So close… the claw is so weak!`),
      Ih(`獎品晃了一下，又掉回去了…`, `It wobbled and dropped back…`),
      Ih(
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
      cap: Rh,
      big: 1e4,
      lose: Ih(`沒中…下次再來！`, `No luck this time`),
      soldOut: Ih(
        r.on
          ? r.t(
              `今天這個販賣處的刮刮卡賣完了（每天 ${Rh} 張），明天再來！`,
              `今日はこの売り場のスクラッチくじは売り切れ（1日 ${Rh} 枚まで）。また明日！`,
            )
          : `今天這個販賣處的刮刮卡賣完了（每天 ${Rh} 張），明天再來！`,
        `Sold out here for today (${Rh} per day) — come back tomorrow!`,
      ),
    },
    shrine: {
      offering: Ih(`香油錢`, `offering`),
      blessed: Ih(
        `參拜完畢，神明保佑！任務報酬 +10%，持續 5 分鐘`,
        `Blessed! +10% mission pay for 5 min`,
      ),
      faded: Ih(`參拜的保佑結束了`, `The shrine blessing has faded`),
      own: !0,
    },
    bag: {
      prizes: He.tokyo,
      receipt: {
        item: `jp-receipt`,
        line: Ih(`，收據放進背包`, `, receipt in your bag`),
      },
    },
  };
}
var $le = [
    {
      id: `ueno-bike-street`,
      name: Ih(
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
          name: Ih(`125cc 速克達`, `125 cc scooter`),
          color: 15263976,
        },
        {
          kind: `motorcycle`,
          price: 858e3,
          name: Ih(`400cc 街車`, `400 cc naked bike`),
          color: 1908257,
        },
        {
          kind: `superbike`,
          price: 248e4,
          name: Ih(`1000cc 仿賽重機`, `1000 cc superbike`),
          color: 13112863,
        },
      ],
    },
  ],
  eue = {
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
    batLine: Ih(
      `撿到球棒 — 來一支全壘打！`,
      `Baseball bat — swing for the fences!`,
    ),
  },
  Bh = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e));
function tue(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function Vh(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? tue(e), ...r };
}
