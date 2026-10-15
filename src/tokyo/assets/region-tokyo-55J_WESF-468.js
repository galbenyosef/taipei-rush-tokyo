// tokyo/assets/region-tokyo-55J_WESF 468 — color
// Lines 169265-169521 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Y5 = {
  konbini: () =>
    jt(`clerk`, `tk-baito-konbini`, {
      top: { style: `polo`, color: 3108789 },
      acc: Ot({ kind: `lanyard`, color: 15263976 }),
    }),
  maid: () =>
    jt(`businesswoman`, `tk-baito-maid`, {
      top: { style: `blouse`, color: 16777215 },
      outer: { style: `vest`, color: 1842210, color2: 1842210 },
      acc: Ot({ kind: `apron`, color: 16777215 }),
    }),
  izakaya: () =>
    jt(`vendor`, `tk-baito-izakaya`, {
      top: { style: `tee`, color: 1842210 },
      acc: Ot(
        { kind: `headband`, color: 16777215 },
        { kind: `apron`, color: 2042442 },
      ),
    }),
  sento: () =>
    jt(`grandma`, `tk-baito-sento`, {
      hair: { style: `elder`, color: 12170928 },
      top: { style: `blouse`, color: 15261906 },
      outer: { style: `cardigan`, color: 8018538, color2: 5914704 },
      acc: Ot({ kind: `apron`, color: 2899562 }),
    }),
  ramen: () =>
    jt(`vendor`, `tk-baito-ramen`, {
      top: { style: `tee`, color: 15921386 },
      acc: Ot(
        { kind: `headband`, color: 1842210 },
        { kind: `apron`, color: 1842210 },
      ),
    }),
  yakitori: () =>
    jt(`uncle`, `tk-baito-yakitori`, {
      top: { style: `tee`, color: 15921386 },
      acc: Ot(
        { kind: `headband`, color: 16777215 },
        { kind: `apron`, color: 6954526 },
      ),
    }),
  tatakiuri: () =>
    jt(`vendor`, `tk-baito-tatakiuri`, {
      top: { style: `tee`, color: 14163996 },
      acc: Ot({ kind: `apron`, color: 1842210 }),
    }),
};
function X5(e, t) {
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
function FBe(e, t) {
  if (e.rng.next() < 0.15) return Math.ceil(t / 10) * 10 + (t % 10, 0);
  for (let e of [1e3, 2e3, 5e3, 1e4]) if (e >= t) return e;
  return Math.ceil(t / 1e3) * 1e3;
}
var Z5 = (e) => `¥${e.toLocaleString(`en-US`)}`,
  Q5 = [
    {
      icon: `🍙`,
      name: N(`鮭魚飯糰`, `Salmon onigiri`, `鮭おにぎり`),
      price: 168,
    },
    {
      icon: `🍙`,
      name: N(`鮪魚美乃滋飯糰`, `Tuna-mayo onigiri`, `ツナマヨおにぎり`),
      price: 158,
    },
    {
      icon: `🍱`,
      name: N(`幕之內便當`, `Makunouchi bento`, `幕の内弁当`),
      price: 598,
      warm: !0,
    },
    {
      icon: `🍱`,
      name: N(`炸雞便當`, `Karaage bento`, `唐揚げ弁当`),
      price: 550,
      warm: !0,
    },
    {
      icon: `🍝`,
      name: N(`拿坡里義大利麵`, `Napolitan spaghetti`, `ナポリタン`),
      price: 498,
      warm: !0,
    },
    { icon: `🍵`, name: N(`綠茶`, `Green tea`, `緑茶`), price: 150 },
    {
      icon: `☕`,
      name: N(`罐裝咖啡`, `Canned coffee`, `缶コーヒー`),
      price: 140,
    },
    {
      icon: `🥪`,
      name: N(`雞蛋三明治`, `Egg sandwich`, `たまごサンド`),
      price: 328,
    },
    { icon: `🍮`, name: N(`布丁`, `Custard pudding`, `プリン`), price: 248 },
    { icon: `🍜`, name: N(`杯麵`, `Cup noodles`, `カップ麺`), price: 236 },
    {
      icon: `🍺`,
      name: N(`罐裝啤酒`, `Canned beer`, `缶ビール`),
      price: 238,
      age: !0,
    },
    {
      icon: `🍶`,
      name: N(`燒酒調酒`, `Chu-hi`, `チューハイ`),
      price: 178,
      age: !0,
    },
  ],
  IBe = [
    N(`飲料櫃`, `Drinks fridge`, `ドリンク棚`),
    N(`便當架`, `Bento shelf`, `弁当棚`),
    N(`甜點架`, `Dessert shelf`, `スイーツ棚`),
    N(`泡麵架`, `Noodle shelf`, `カップ麺棚`),
  ],
  LBe = (e) =>
    e.icon === `🍵` || e.icon === `☕` || e.age
      ? 0
      : e.icon === `🍮`
        ? 2
        : e.icon === `🍜`
          ? 3
          : 1,
  $5 = {
    irasshai: N(`歡迎光臨！`, `Welcome!`, `いらっしゃいませー！`),
    scan: (e) => N(`刷條碼：${e.zh}`, `Scan: ${e.en}`, `スキャン：${e.ja}`),
    heat: N(
      `客人買了便當，你要問……`,
      `They bought a bento — you ask…`,
      `お弁当だ。何と聞く？`,
    ),
    heatQ: N(`要加熱嗎？`, `Shall I heat it up?`, `温めますか？`),
    heatNo1: N(`要冰嗎？`, `Shall I chill it?`, `冷やしますか？`),
    heatNo2: N(`要切開嗎？`, `Shall I cut it?`, `切りますか？`),
    heatYes: N(`麻煩你了。`, `Yes, please.`, `お願いします。`),
    heatNo: N(`不用了。`, `No, it's fine.`, `大丈夫です。`),
    micro: N(
      `微波爐：在剛好的時候停下來`,
      `Microwave: stop it at just the right time`,
      `電子レンジ：ちょうどいいところで止める`,
    ),
    age: N(
      `客人買酒。接下來要……`,
      `They're buying alcohol. Next…`,
      `お酒だ。次は……`,
    ),
    ageOk: N(
      `請按年齡確認鍵`,
      `Please touch the age-check button`,
      `年齢確認ボタンのタッチをお願いします`,
    ),
    ageSkip: N(`直接結帳`, `Ring it up straight away`, `そのまま会計`),
    ageCard: N(
      `請出示學生證`,
      `Show me your student ID`,
      `学生証を見せてください`,
    ),
    tabaco: (e) =>
      N(`${e}號，謝謝。`, `Number ${e}, please.`, `${e}番ください。`),
    tabacoQ: N(
      `香菸櫃：拿對號碼`,
      `The cigarette shelf: the right number`,
      `タバコの棚：正しい番号を取る`,
    ),
    pay: N(`怎麼付款？`, `How are they paying?`, `お支払いは？`),
    cash: (e, t) =>
      N(
        `收您 ${Z5(e)}。（合計 ${Z5(t)}）`,
        `Out of ${Z5(e)}. (Total ${Z5(t)})`,
        `${Z5(e)}お預かりします。（合計${Z5(t)}）`,
      ),
    changeQ: (e, t) =>
      N(
        `要找多少？（${Z5(e)} − ${Z5(t)}）`,
        `Their change? (${Z5(e)} − ${Z5(t)})`,
        `おつりは？（${Z5(e)} − ${Z5(t)}）`,
      ),
    suica: N(`用 Suica 付。`, `I'll pay with Suica.`, `Suicaで。`),
    qr: N(`用行動支付。`, `QR code, please.`, `QRコードで。`),
    cashSay: N(`付現金。`, `Cash.`, `現金で。`),
    mIc: N(`交通IC卡`, `IC card`, `交通系IC`),
    mQr: N(`QR 支付`, `QR code`, `QRコード`),
    mCash: N(`現金`, `Cash`, `現金`),
    touch: N(
      `請感應卡片——嗶！`,
      `Tap the card — beep!`,
      `タッチお願いします——ピピッ！`,
    ),
    thanks: N(
      `謝謝光臨！`,
      `Thank you very much!`,
      `ありがとうございましたー！`,
    ),
    restock: (e) =>
      N(
        `補貨：${e.zh}要放哪裡？`,
        `Restock: where does the ${e.en} go?`,
        `品出し：${e.ja}はどこ？`,
      ),
    fry: N(
      `炸雞塊！炸到金黃就起鍋`,
      `Fry the karaage! Out when golden`,
      `唐揚げを揚げる！きつね色で上げる`,
    ),
    fryLine: N(
      `熱食櫃快空了……`,
      `The hot case is nearly empty…`,
      `ホットスナックが残りわずか……`,
    ),
  };
function RBe(e) {
  let t = jv.start,
    n = e.plan.nearestPois(`convenience`, t.x, t.z, 1)[0];
  return n
    ? {
        x: n.x + Math.sin(n.facing) * 1.6,
        z: n.z - Math.cos(n.facing) * 1.6,
        heading: n.facing + Math.PI,
      }
    : { x: t.x + 6, z: t.z, heading: 0 };
}
async function zBe(e) {
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
  n().length || (await z4(e, e.px, e.pz, 0, 400));
  for (let t of n())
    if (e.ctx.interiors?.hasStore?.(t.poiId) && F3(t.poiId, `inside`))
      return t.poiId;
  return null;
}
var e7 = ``;
