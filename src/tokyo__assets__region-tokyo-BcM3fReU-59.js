// tokyo__assets__region-tokyo-BcM3fReU 59 — bag
// Lines 31051-31235 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Yv(e, t) {
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
var Xv = 8,
  Zv = (e, t) => ({ zh: e, en: t });
function Qv(e, t, n, r = {}) {
  let i = ac(e),
    a = r.proper ? i.en : i.en.charAt(0).toLowerCase() + i.en.slice(1),
    o = { name: { zh: i.zh, en: a }, price: t, heal: n };
  return (r.brand && (o.brand = r.brand), r.bag && (o.bag = r.bag), o);
}
var $v = {
    ゲームセンター: Zv(`遊樂場`, `the game centre`),
    タピオカ: Zv(`珍奶店`, `the tapioca stand`),
    宝くじ売り場: Zv(`彩券販賣處`, `the lottery booth`),
    稲荷神社: Zv(`稻荷神社`, `the Inari shrine`),
    お地蔵さま: Zv(`地藏`, `the Jizo`),
  },
  ey = {
    convenience: Zv(`便利商店`, `the konbini`),
    pharmacy: Zv(`藥妝店`, `the drugstore`),
    claw: Zv(`遊樂場`, `the game centre`),
    lottery: Zv(`彩券販賣處`, `the lottery booth`),
    bubbletea: Zv(`珍奶店`, `the tea stand`),
    shrine: Zv(`小神社`, `the shrine`),
  },
  ty = 5;
function ny() {
  return {
    items: {
      convenience: [
        Qv(`trade.konbini.item.onigiri`, 180, 25, { bag: `jp-onigiri` }),
        Qv(`shop.konbini.ocha`, 160, 15, { bag: `jp-ocha` }),
        Qv(`trade.konbini.item.coffee`, 120, 10, { bag: `jp-hot-coffee` }),
        Qv(`trade.konbini.item.nikuman`, 190, 25, { bag: `jp-nikuman` }),
        Qv(`shop.konbini.oden`, 360, 35, { bag: `jp-oden` }),
        Qv(`shop.konbini.agechiki`, 230, 30, {
          proper: !0,
          bag: `jp-agechiki`,
        }),
      ],
      pharmacy: [
        Qv(`shop.drugstore.kyukyu`, 980, 1e3, { bag: `jp-first-aid` }),
        Qv(`trade.drugstore.item.drink`, 198, 20, { bag: `jp-energy-drink` }),
        Qv(`shop.drugstore.shippu`, 698, 40, { bag: `jp-shippu` }),
        Qv(`trade.drugstore.item.megusuri`, 698, 10, { bag: `jp-megusuri` }),
        Qv(`trade.drugstore.item.mask`, 498, 0, { bag: `jp-mask` }),
      ],
      lottery: [Qv(`shop.lottery.scratch`, 200, 0)],
      claw: [Qv(`shop.arcade.crane`, 100, 0)],
      bubbletea: [
        Qv(`trade.tea-stand.item.milktea`, 600, 15, { bag: `jp-tapioca` }),
        Qv(`shop.tea.matcha`, 650, 15, { bag: `jp-matcha-latte` }),
        Qv(`shop.tea.hojicha`, 580, 15, { bag: `jp-hojicha-latte` }),
      ],
      shrine: [
        Qv(`shop.shrine.inari`, 5, 0, { brand: `稲荷神社` }),
        Qv(`shop.shrine.jizo`, 5, 0, { brand: `お地蔵さま` }),
      ],
    },
    name(e) {
      let t = Wa(e.brand);
      return t ? { zh: t.zh, en: t.en } : ($v[e.brand] ?? ey[e.kind]);
    },
    prizes: [`shiba`, `sushi`, `maneki`, `okashi`, `figure`].map((e) =>
      ac(`shop.arcade.prize.${e}`),
    ),
    clawMiss: [
      Zv(`差一點點…爪子好鬆！`, `So close… the claw is so weak!`),
      Zv(`獎品晃了一下，又掉回去了…`, `It wobbled and dropped back…`),
      Zv(
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
      cap: ty,
      big: 1e4,
      lose: Zv(`沒中…下次再來！`, `No luck this time`),
      soldOut: Zv(
        r.on
          ? r.t(
              `今天這個販賣處的刮刮卡賣完了（每天 ${ty} 張），明天再來！`,
              `今日はこの売り場のスクラッチくじは売り切れ（1日 ${ty} 枚まで）。また明日！`,
            )
          : `今天這個販賣處的刮刮卡賣完了（每天 ${ty} 張），明天再來！`,
        `Sold out here for today (${ty} per day) — come back tomorrow!`,
      ),
    },
    shrine: {
      offering: Zv(`香油錢`, `offering`),
      blessed: Zv(
        `參拜完畢，神明保佑！任務報酬 +10%，持續 5 分鐘`,
        `Blessed! +10% mission pay for 5 min`,
      ),
      faded: Zv(`參拜的保佑結束了`, `The shrine blessing has faded`),
      own: !0,
    },
    bag: {
      prizes: ke.tokyo,
      receipt: {
        item: `jp-receipt`,
        line: Zv(`，收據放進背包`, `, receipt in your bag`),
      },
    },
  };
}
var ry = [
    {
      id: `ueno-bike-street`,
      name: Zv(
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
          name: Zv(`125cc 速克達`, `125 cc scooter`),
          color: 15263976,
        },
        {
          kind: `motorcycle`,
          price: 858e3,
          name: Zv(`400cc 街車`, `400 cc naked bike`),
          color: 1908257,
        },
        {
          kind: `superbike`,
          price: 248e4,
          name: Zv(`1000cc 仿賽重機`, `1000 cc superbike`),
          color: 13112863,
        },
      ],
    },
  ],
  iy = {
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
    batLine: Zv(
      `撿到球棒 — 來一支全壘打！`,
      `Baseball bat — swing for the fences!`,
    ),
  },
  ay = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e));
function oy(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function sy(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? oy(e), ...r };
}
