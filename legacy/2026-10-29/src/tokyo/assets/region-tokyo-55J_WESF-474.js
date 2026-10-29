// tokyo/assets/region-tokyo-55J_WESF 474 — icon
// Lines 170748-171027 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var tVe = {
    key: `ramen`,
    title: N(`拉麵店廚師`, `Ramen cook`, `ラーメン屋の調理`),
    desc: N(
      `神田「太田屋」：看餐券、照硬度煮麵、倒對湯頭、依序放配料。`,
      `らーめん 太田屋, Kanda: read the ticket, boil to the firmness, pour the right soup, toppings in order.`,
      `神田「太田屋」：食券を読み、硬さどおりに茹で、スープ、トッピングを順に。`,
    ),
    glyph: `麺`,
    wage: 1300,
    hours: 4,
    open: [11, 20],
    skipTo: 11,
    secs: 200,
    lives: 4,
    requires: [`tokyo:s1_shuden`],
    manager: {
      name: N(`太田屋老闆`, `Ota-ya owner`, `太田屋の店主`),
      voice: `ja`,
      pitch: 0.82,
    },
    managerLook: Y5.ramen,
    door: () => J5(u7),
    room: async () => u7,
    workSpot: `staff`,
    face: `counter`,
    guests: !0,
    brief: [
      N(
        `看餐券就知道要什麼：湯頭、麵的硬度、配料。`,
        `The ticket tells you everything: the soup, the firmness, the topping.`,
        `食券を見ればわかる。スープ、麺の硬さ、トッピングだ。`,
      ),
      N(
        `偏硬就早點起鍋，偏軟就多煮一下。配料的順序：叉燒、點的料、最後撒蔥。`,
        `Firm comes out early, soft stays in longer. Toppings: chashu, what they ordered, scallions last.`,
        `かためは早く、やわらかめは長く。トッピングはチャーシュー、注文の品、最後にねぎ。`,
      ),
    ],
    hello: N(
      `喔，今天也來啦。湯已經熬好了。`,
      `Oh, you're here again. The broth is ready.`,
      `お、今日も来たか。スープはできてるぞ。`,
    ),
    uniform: N(
      `綁上黑頭巾、穿上圍裙`,
      `Black headband and apron on`,
      `黒タオルを巻いて前掛けをした`,
    ),
    variant: {
      name: N(`午餐尖峰`, `Lunch rush`, `ランチラッシュ`),
      desc: N(`上班族排到門外`, `A queue out the door`, `行列が店の外まで`),
      mult: 1.25,
    },
    customer: (e) => eVe(e),
  },
  h7 = `walkin-izakaya-yurakucho`,
  g7 = [
    {
      icon: `🍢`,
      name: N(`烤雞肉串拼盤`, `Yakitori platter`, `焼き鳥盛り合わせ`),
      price: 980,
    },
    { icon: `🫛`, name: N(`毛豆`, `Edamame`, `枝豆`), price: 380 },
    { icon: `🍗`, name: N(`炸雞塊`, `Karaage`, `唐揚げ`), price: 580 },
    {
      icon: `🥚`,
      name: N(`高湯煎蛋捲`, `Dashimaki omelette`, `だし巻き卵`),
      price: 480,
    },
    {
      icon: `🥗`,
      name: N(`涼拌番茄`, `Chilled tomato`, `冷やしトマト`),
      price: 380,
    },
    {
      icon: `🐟`,
      name: N(`生魚片拼盤`, `Sashimi platter`, `刺身盛り合わせ`),
      price: 1280,
    },
  ],
  nVe = [
    { icon: `🍺`, name: N(`生啤酒`, `Draft beer`, `生ビール`), price: 550 },
    { icon: `🥃`, name: N(`威士忌蘇打`, `Highball`, `ハイボール`), price: 450 },
    {
      icon: `🍋`,
      name: N(`檸檬沙瓦`, `Lemon sour`, `レモンサワー`),
      price: 420,
    },
    { icon: `🍵`, name: N(`烏龍茶`, `Oolong tea`, `ウーロン茶`), price: 300 },
  ],
  _7 = {
    enter: (e) =>
      N(
        `（${e} 位客人掀開門簾進來了）`,
        `(A group of ${e} pushes through the noren)`,
        `（${e}名様がのれんをくぐって来た）`,
      ),
    welcomeQ: N(
      `大聲歡迎！在對的時機喊`,
      `Shout the welcome — on time!`,
      `元気よく「いらっしゃいませー！」`,
    ),
    seatQ: (e) =>
      N(
        `${e} 位客人，帶到哪一桌？`,
        `A party of ${e} — which table?`,
        `${e}名様、どの席へ？`,
      ),
    seat: (e, t) =>
      N(
        `${e} 號桌（${t} 人座）`,
        `Table ${e} (seats ${t})`,
        `${e}番テーブル（${t}名席）`,
      ),
    otoshi: N(
      `送上濕毛巾和小菜（お通し）`,
      `Bring the oshibori and the otoshi`,
      `おしぼりとお通しを出す`,
    ),
    toriaezu: N(`先來生啤酒！`, `Draft beers to start!`, `とりあえず生！`),
    pourQ: N(
      `倒生啤：泡沫到線為止`,
      `Pour the draft: foam right to the line`,
      `生ビールを注ぐ：泡は線まで`,
    ),
    orderSay: (e, t) =>
      N(
        `還有${e.zh}和${t.zh}。`,
        `And ${e.en} and ${t.en}.`,
        `あと${e.ja}と${t.ja}で。`,
      ),
    orderQ: N(`客人點了什麼？`, `What did they order?`, `注文は？`),
    callQ: N(
      `向廚房喊單——要怎麼回？`,
      `Call it to the kitchen — and the reply?`,
      `厨房に通す——返事は？`,
    ),
    yorokonde: N(`「樂意之至！」`, `「Happy to!」`, `「よろこんで！」`),
    callNo1: N(`「好喔～」`, `「Okaaay~」`, `「はーい〜」`),
    callNo2: N(`「沒問題啦」`, `「No problem」`, `「全然大丈夫っす」`),
    tray: N(
      `端托盤穿過擁擠的座位`,
      `Carry the tray through the crowded crates`,
      `混んだ席の間をトレイで運ぶ`,
    ),
    wipe: N(
      `收桌、擦桌子！`,
      `Clear and wipe the table!`,
      `片付けて、テーブルを拭く！`,
    ),
    billQ: (e, t) =>
      N(
        `結帳 ${Z5(e)}，${t} 人平分，每人多少？`,
        `The bill is ${Z5(e)}, split ${t} ways — each pays?`,
        `お会計${Z5(e)}、${t}人で割り勘、一人いくら？`,
      ),
    thanks: N(`謝謝光臨！`, `Thank you!`, `ありがとうございましたー！`),
    kanpai: N(`乾杯！`, `Cheers!`, `かんぱーい！`),
  };
async function rVe(e) {
  let t = e.panel,
    n = 2 + Math.floor(e.rng.next() * (e.variant ? 5 : 4));
  if (
    (t.say(null, _7.enter(n), !1),
    e.score(
      await t.timing({
        prompt: _7.welcomeQ,
        zone: [0.55, 0.78],
        perfect: [0.62, 0.7],
        speed: 0.85 * e.pace,
        secs: 6,
      }),
    ),
    e.over)
  )
    return;
  let r = [2, 4, 6, 8],
    i = r.findIndex((e) => e >= n);
  if (
    (e.score(
      await t.pick({
        prompt: _7.seatQ(n),
        options: r.map((e, t) => ({ label: _7.seat(t + 1, e), icon: `🪑` })),
        correct: (e) => e === i,
        secs: 6 / e.pace + 2,
      }),
    ),
    e.over ||
      (e.score(
        await t.sequence({
          prompt: _7.otoshi,
          steps: e
            .pick([
              [`right`, `down`, `right`],
              [`down`, `right`, `down`],
              [`right`, `right`, `down`],
            ])
            .slice(),
          labels: void 0,
        }),
      ),
      e.over) ||
      (t.say(null, _7.toriaezu),
      e.score(
        await t.hold({
          prompt: _7.pourQ,
          zone: [0.78, 0.9],
          rate: 0.5 * e.pace,
        }),
      ),
      e.over))
  )
    return;
  let a = e.pick(g7),
    o = e.pick(g7);
  (o === a && (o = g7[(g7.indexOf(a) + 1) % g7.length]),
    t.say(null, _7.orderSay(a.name, o.name)));
  let s = g7
    .filter((e) => e !== a && e !== o)
    .sort(() => e.rng.next() - 0.5)
    .slice(0, 3)
    .concat(a)
    .sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: _7.orderQ,
        options: s.map((e) => ({ label: e.name, icon: e.icon })),
        correct: s.indexOf(a),
        secs: 7,
      }),
    ),
    e.over ||
      (e.score(
        await t.pick({
          prompt: _7.callQ,
          options: [
            { label: _7.yorokonde },
            { label: _7.callNo1 },
            { label: _7.callNo2 },
          ],
          correct: 0,
          secs: 6,
        }),
      ),
      e.over) ||
      (e.score(
        await t.balance({
          prompt: _7.tray,
          secs: 4 + e.progress * 2.5,
          wobble: (e.variant ? 1.2 : 0.95) * (1 + e.progress * 0.3),
          icon: `🍺`,
        }),
      ),
      e.over))
  )
    return;
  (t.say(null, _7.kanpai), await t.beat(0.8));
  let c = n * nVe[0].price + a.price + o.price,
    l = Math.ceil(c / n / 10) * 10,
    u = [
      l,
      ...[l + 100, l - 50, l + 50, Math.ceil(c / (n + 1) / 10) * 10]
        .filter((e) => e !== l && e > 0)
        .slice(0, 3),
    ].sort(() => e.rng.next() - 0.5);
  (e.score(
    await t.pick({
      prompt: _7.billQ(c, n),
      options: u.map((e) => ({ label: N(Z5(e), Z5(e), Z5(e)), icon: `💴` })),
      correct: u.indexOf(l),
      secs: 10 / e.pace + 3,
    }),
  ),
    !e.over &&
      (t.say(null, _7.thanks),
      e.served(),
      e.score(await t.mash({ prompt: _7.wipe, target: 10, secs: 4 }))));
}
