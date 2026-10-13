// tokyo__assets__region-tokyo-BcM3fReU 294 — color
// Lines 116835-117091 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var c7 = {
  konbini: () =>
    Ht(`clerk`, `tk-baito-konbini`, {
      top: { style: `polo`, color: 3108789 },
      acc: zt({ kind: `lanyard`, color: 15263976 }),
    }),
  maid: () =>
    Ht(`businesswoman`, `tk-baito-maid`, {
      top: { style: `blouse`, color: 16777215 },
      outer: { style: `vest`, color: 1842210, color2: 1842210 },
      acc: zt({ kind: `apron`, color: 16777215 }),
    }),
  izakaya: () =>
    Ht(`vendor`, `tk-baito-izakaya`, {
      top: { style: `tee`, color: 1842210 },
      acc: zt(
        { kind: `headband`, color: 16777215 },
        { kind: `apron`, color: 2042442 },
      ),
    }),
  sento: () =>
    Ht(`grandma`, `tk-baito-sento`, {
      hair: { style: `elder`, color: 12170928 },
      top: { style: `blouse`, color: 15261906 },
      outer: { style: `cardigan`, color: 8018538, color2: 5914704 },
      acc: zt({ kind: `apron`, color: 2899562 }),
    }),
  ramen: () =>
    Ht(`vendor`, `tk-baito-ramen`, {
      top: { style: `tee`, color: 15921386 },
      acc: zt(
        { kind: `headband`, color: 1842210 },
        { kind: `apron`, color: 1842210 },
      ),
    }),
  yakitori: () =>
    Ht(`uncle`, `tk-baito-yakitori`, {
      top: { style: `tee`, color: 15921386 },
      acc: zt(
        { kind: `headband`, color: 16777215 },
        { kind: `apron`, color: 6954526 },
      ),
    }),
  tatakiuri: () =>
    Ht(`vendor`, `tk-baito-tatakiuri`, {
      top: { style: `tee`, color: 14163996 },
      acc: zt({ kind: `apron`, color: 1842210 }),
    }),
};
function l7(e, t) {
  let n = new Set([t]),
    r = [10, 100, 50, 90, 110, 1e3, 20];
  for (; n.size < 4;) {
    let i = t + e.pick(r) * (e.rng.next() < 0.5 ? -1 : 1);
    i >= 0 && n.add(i);
  }
  let i = [...n];
  for (let t = i.length - 1; t > 0; t--) {
    let n = Math.floor(e.rng.next() * (t + 1));
    [i[t], i[n]] = [i[n], i[t]];
  }
  return i;
}
function Mne(e, t) {
  if (e.rng.next() < 0.15) return Math.ceil(t / 10) * 10 + (t % 10, 0);
  for (let e of [1e3, 2e3, 5e3, 1e4]) if (e >= t) return e;
  return Math.ceil(t / 1e3) * 1e3;
}
var u7 = (e) => `¥${e.toLocaleString(`en-US`)}`,
  d7 = [
    {
      icon: `🍙`,
      name: F(`鮭魚飯糰`, `Salmon onigiri`, `鮭おにぎり`),
      price: 168,
    },
    {
      icon: `🍙`,
      name: F(`鮪魚美乃滋飯糰`, `Tuna-mayo onigiri`, `ツナマヨおにぎり`),
      price: 158,
    },
    {
      icon: `🍱`,
      name: F(`幕之內便當`, `Makunouchi bento`, `幕の内弁当`),
      price: 598,
      warm: !0,
    },
    {
      icon: `🍱`,
      name: F(`炸雞便當`, `Karaage bento`, `唐揚げ弁当`),
      price: 550,
      warm: !0,
    },
    {
      icon: `🍝`,
      name: F(`拿坡里義大利麵`, `Napolitan spaghetti`, `ナポリタン`),
      price: 498,
      warm: !0,
    },
    { icon: `🍵`, name: F(`綠茶`, `Green tea`, `緑茶`), price: 150 },
    {
      icon: `☕`,
      name: F(`罐裝咖啡`, `Canned coffee`, `缶コーヒー`),
      price: 140,
    },
    {
      icon: `🥪`,
      name: F(`雞蛋三明治`, `Egg sandwich`, `たまごサンド`),
      price: 328,
    },
    { icon: `🍮`, name: F(`布丁`, `Custard pudding`, `プリン`), price: 248 },
    { icon: `🍜`, name: F(`杯麵`, `Cup noodles`, `カップ麺`), price: 236 },
    {
      icon: `🍺`,
      name: F(`罐裝啤酒`, `Canned beer`, `缶ビール`),
      price: 238,
      age: !0,
    },
    {
      icon: `🍶`,
      name: F(`燒酒調酒`, `Chu-hi`, `チューハイ`),
      price: 178,
      age: !0,
    },
  ],
  Nne = [
    F(`飲料櫃`, `Drinks fridge`, `ドリンク棚`),
    F(`便當架`, `Bento shelf`, `弁当棚`),
    F(`甜點架`, `Dessert shelf`, `スイーツ棚`),
    F(`泡麵架`, `Noodle shelf`, `カップ麺棚`),
  ],
  Pne = (e) =>
    e.icon === `🍵` || e.icon === `☕` || e.age
      ? 0
      : e.icon === `🍮`
        ? 2
        : e.icon === `🍜`
          ? 3
          : 1,
  f7 = {
    irasshai: F(`歡迎光臨！`, `Welcome!`, `いらっしゃいませー！`),
    scan: (e) => F(`刷條碼：${e.zh}`, `Scan: ${e.en}`, `スキャン：${e.ja}`),
    heat: F(
      `客人買了便當，你要問……`,
      `They bought a bento — you ask…`,
      `お弁当だ。何と聞く？`,
    ),
    heatQ: F(`要加熱嗎？`, `Shall I heat it up?`, `温めますか？`),
    heatNo1: F(`要冰嗎？`, `Shall I chill it?`, `冷やしますか？`),
    heatNo2: F(`要切開嗎？`, `Shall I cut it?`, `切りますか？`),
    heatYes: F(`麻煩你了。`, `Yes, please.`, `お願いします。`),
    heatNo: F(`不用了。`, `No, it's fine.`, `大丈夫です。`),
    micro: F(
      `微波爐：在剛好的時候停下來`,
      `Microwave: stop it at just the right time`,
      `電子レンジ：ちょうどいいところで止める`,
    ),
    age: F(
      `客人買酒。接下來要……`,
      `They're buying alcohol. Next…`,
      `お酒だ。次は……`,
    ),
    ageOk: F(
      `請按年齡確認鍵`,
      `Please touch the age-check button`,
      `年齢確認ボタンのタッチをお願いします`,
    ),
    ageSkip: F(`直接結帳`, `Ring it up straight away`, `そのまま会計`),
    ageCard: F(
      `請出示學生證`,
      `Show me your student ID`,
      `学生証を見せてください`,
    ),
    tabaco: (e) =>
      F(`${e}號，謝謝。`, `Number ${e}, please.`, `${e}番ください。`),
    tabacoQ: F(
      `香菸櫃：拿對號碼`,
      `The cigarette shelf: the right number`,
      `タバコの棚：正しい番号を取る`,
    ),
    pay: F(`怎麼付款？`, `How are they paying?`, `お支払いは？`),
    cash: (e, t) =>
      F(
        `收您 ${u7(e)}。（合計 ${u7(t)}）`,
        `Out of ${u7(e)}. (Total ${u7(t)})`,
        `${u7(e)}お預かりします。（合計${u7(t)}）`,
      ),
    changeQ: (e, t) =>
      F(
        `要找多少？（${u7(e)} − ${u7(t)}）`,
        `Their change? (${u7(e)} − ${u7(t)})`,
        `おつりは？（${u7(e)} − ${u7(t)}）`,
      ),
    suica: F(`用 Suica 付。`, `I'll pay with Suica.`, `Suicaで。`),
    qr: F(`用行動支付。`, `QR code, please.`, `QRコードで。`),
    cashSay: F(`付現金。`, `Cash.`, `現金で。`),
    mIc: F(`交通IC卡`, `IC card`, `交通系IC`),
    mQr: F(`QR 支付`, `QR code`, `QRコード`),
    mCash: F(`現金`, `Cash`, `現金`),
    touch: F(
      `請感應卡片——嗶！`,
      `Tap the card — beep!`,
      `タッチお願いします——ピピッ！`,
    ),
    thanks: F(
      `謝謝光臨！`,
      `Thank you very much!`,
      `ありがとうございましたー！`,
    ),
    restock: (e) =>
      F(
        `補貨：${e.zh}要放哪裡？`,
        `Restock: where does the ${e.en} go?`,
        `品出し：${e.ja}はどこ？`,
      ),
    fry: F(
      `炸雞塊！炸到金黃就起鍋`,
      `Fry the karaage! Out when golden`,
      `唐揚げを揚げる！きつね色で上げる`,
    ),
    fryLine: F(
      `熱食櫃快空了……`,
      `The hot case is nearly empty…`,
      `ホットスナックが残りわずか……`,
    ),
  };
function Fne(e) {
  let t = TC.start,
    n = e.plan.nearestPois(`convenience`, t.x, t.z, 1)[0];
  return n
    ? {
        x: n.x + Math.sin(n.facing) * 1.6,
        z: n.z - Math.cos(n.facing) * 1.6,
        heading: n.facing + Math.PI,
      }
    : { x: t.x + 6, z: t.z, heading: 0 };
}
async function Ine(e) {
  let t = e.ctx.buildings,
    n = () =>
      (t.storefronts ?? [])
        .filter(
          (t) =>
            t.kind === `convenience` &&
            Math.hypot(t.x - e.px, t.z - e.pz) < 400,
        )
        .sort(
          (t, n) =>
            Math.hypot(t.x - e.px, t.z - e.pz) -
            Math.hypot(n.x - e.px, n.z - e.pz),
        );
  n().length || (await O0(e, e.px, e.pz, 0, 400));
  for (let t of n())
    if (e.ctx.interiors?.hasStore?.(t.poiId) && u4(t.poiId, `inside`))
      return t.poiId;
  return null;
}
var p7 = ``;
