// tokyo__assets__region-tokyo-BcM3fReU 298 — icon
// Lines 117734-118022 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Kne = {
    key: `tatakiuri`,
    title: F(`叫賣師傅`, `Auction caller`, `たたき売り`),
    desc: F(
      `阿美橫丁「志水商店」的巧克力叫賣：吆喝、喊「再來一包！」、看誰先舉手。`,
      `志水商店, Ameyoko: the chocolate auction — the patter, 「もういっちょ！」, the first hand up.`,
      `アメ横「志水商店」のチョコたたき売り：呼び込み、「もういっちょ！」、一番早い手。`,
    ),
    glyph: `叩`,
    wage: 1400,
    hours: 4,
    open: [10, 14],
    skipTo: 11,
    secs: 190,
    lives: 4,
    requires: [`tokyo:s1_ameyoko`],
    manager: Q.shimizu,
    managerLook: y0.shimizu,
    giverOutfit: `v:t3-shimizu`,
    giver: { anim: `talk` },
    door: () => {
      let e = _7();
      return { x: e.x + 2.2, z: e.z + 1.2, heading: e.heading };
    },
    stand: () => {
      let e = _7();
      return { x: e.x, z: e.z, heading: e.heading };
    },
    setup: async (e) => {
      let t = _7();
      try {
        e.m.crowd(
          t.x + Math.sin(t.heading) * 4.8,
          t.z - Math.cos(t.heading) * 4.8,
          2.6,
          e.variant ? 14 : 9,
        );
      } catch {}
    },
    brief: [
      F(
        `喲，你上次喊得不錯嘛！來幫忙一個下午吧。`,
        `Hey, you were good last time! Help me out for an afternoon.`,
        `よう、この前の呼び込みよかったぞ！午後だけ手伝ってくれ。`,
      ),
      F(
        `節奏最重要：先吆喝把人叫過來，熱起來就喊「再來一包！」，袋子給最先舉手的人。`,
        `Rhythm is everything: call them over, shout 「もういっちょ！」 when they're warm, the bag to the first hand up.`,
        `リズムが命だ。呼び込んで、温まったら「もういっちょ！」、袋は一番早く手を挙げた客に。`,
      ),
    ],
    hello: F(
      `來了啊！今天也大聲點！`,
      `You came! Loud again today!`,
      `来たな！今日も声出していけ！`,
    ),
    uniform: F(
      `綁上了志水商店的圍裙`,
      `The 志水商店 apron on`,
      `志水商店の前掛けをした`,
    ),
    variant: {
      name: F(`年末大拍賣`, `Year-end rush`, `年末の大売り出し`),
      desc: F(`人潮是平常的兩倍`, `Twice the crowd`, `いつもの倍の人出`),
      mult: 1.3,
    },
    customer: (e) => Gne(e),
  },
  y7 = `walkin-maid-akiba`,
  b7 = [
    { icon: `🍳`, name: F(`蛋包飯`, `Omurice`, `オムライス`), omurice: !0 },
    { icon: `🍛`, name: F(`萌萌咖哩`, `Moe curry`, `萌え萌えカレー`) },
    { icon: `🥞`, name: F(`鬆餅`, `Pancakes`, `パンケーキ`) },
    { icon: `🍨`, name: F(`聖代`, `Parfait`, `パフェ`) },
    { icon: `🍝`, name: F(`拿坡里義大利麵`, `Napolitan`, `ナポリタン`) },
  ],
  x7 = [
    { icon: `🍈`, name: F(`哈密瓜蘇打`, `Melon soda`, `メロンソーダ`) },
    { icon: `🧋`, name: F(`奶茶`, `Milk tea`, `ミルクティー`) },
    { icon: `☕`, name: F(`拿鐵`, `Café latte`, `カフェラテ`) },
    {
      icon: `🍹`,
      name: F(`特調飲料`, `House cocktail (no alcohol)`, `オリジナルドリンク`),
    },
  ],
  qne = [
    {
      name: F(`愛心`, `a heart`, `ハート`),
      shape: [
        [0.5, 0.3],
        [0.38, 0.14],
        [0.2, 0.14],
        [0.12, 0.3],
        [0.2, 0.52],
        [0.5, 0.86],
        [0.8, 0.52],
        [0.88, 0.3],
        [0.8, 0.14],
        [0.62, 0.14],
        [0.5, 0.3],
      ],
      steps: [`left`, `down`, `right`, `up`, `left`],
    },
    {
      name: F(`星星`, `a star`, `星`),
      shape: [
        [0.5, 0.06],
        [0.78, 0.94],
        [0.06, 0.38],
        [0.94, 0.38],
        [0.22, 0.94],
        [0.5, 0.06],
      ],
      steps: [`down`, `left`, `right`, `left`, `up`],
    },
    {
      name: F(`貓咪`, `a cat`, `ねこ`),
      shape: [
        [0.22, 0.4],
        [0.26, 0.08],
        [0.42, 0.28],
        [0.58, 0.28],
        [0.74, 0.08],
        [0.78, 0.4],
        [0.76, 0.72],
        [0.5, 0.9],
        [0.24, 0.72],
        [0.22, 0.4],
      ],
      steps: [`up`, `right`, `up`, `down`, `left`, `up`],
    },
    {
      name: F(`小熊`, `a bear`, `くま`),
      shape: [
        [0.3, 0.3],
        [0.18, 0.18],
        [0.3, 0.06],
        [0.4, 0.2],
        [0.6, 0.2],
        [0.7, 0.06],
        [0.82, 0.18],
        [0.7, 0.3],
        [0.78, 0.62],
        [0.5, 0.9],
        [0.22, 0.62],
        [0.3, 0.3],
      ],
      steps: [`left`, `up`, `right`, `up`, `down`, `left`],
    },
  ],
  S7 = {
    guestM: F(
      `（一位男客人進門了）`,
      `(A gentleman walks in)`,
      `（男性のお客様がご帰宅）`,
    ),
    guestF: F(
      `（一位女客人進門了）`,
      `(A lady walks in)`,
      `（女性のお客様がご帰宅）`,
    ),
    greetQ: F(
      `在門口迎接——要說什麼？`,
      `Greet them at the door — what do you say?`,
      `入口でお出迎え——なんと言う？`,
    ),
    gM: F(
      `歡迎回家，主人！`,
      `Welcome home, Master!`,
      `お帰りなさいませ、ご主人様！`,
    ),
    gF: F(
      `歡迎回家，大小姐！`,
      `Welcome home, Mistress!`,
      `お帰りなさいませ、お嬢様！`,
    ),
    gShop: F(`歡迎光臨！`, `Welcome!`, `いらっしゃいませ！`),
    order: (e, t) =>
      F(
        `我要${e.zh}跟${t.zh}。`,
        `${e.en} and a ${t.en}, please.`,
        `${e.ja}と${t.ja}でお願いします。`,
      ),
    foodQ: F(
      `點了什麼餐點？`,
      `Which dish did they order?`,
      `ご注文の料理は？`,
    ),
    drinkQ: F(`飲料呢？`, `And the drink?`, `ドリンクは？`),
    tray: F(
      `端著托盤走到座位——別灑了`,
      `Carry the tray to the table — no spills`,
      `トレイを席まで運ぶ——こぼさないで`,
    ),
    art: (e) =>
      F(
        `可以畫${e.zh}嗎？`,
        `Could you draw ${e.en}?`,
        `${e.ja}を描いてください！`,
      ),
    artQ: (e) =>
      F(
        `用番茄醬在蛋包飯上畫${e.zh}`,
        `Draw ${e.en} on the omurice in ketchup`,
        `オムライスにケチャップで${e.ja}を描く`,
      ),
    chantLead: F(
      `那麼，一起施展美味魔法吧！`,
      `Now, let's cast the tasty spell together!`,
      `それでは、一緒に美味しくなる魔法をかけましょう！`,
    ),
    chantQ: F(
      `配合節拍：「好吃起來吧，萌萌啾！」`,
      `On the beat: 「おいしくなあれ、萌え萌えキュン」`,
      `リズムに合わせて「おいしくなあれ、萌え萌えキュン♡」`,
    ),
    yum: F(`好好吃！`, `Delicious!`, `おいしい〜！`),
    cheki: F(
      `可以拍拍立得嗎？`,
      `Could we take a cheki?`,
      `チェキお願いできますか？`,
    ),
    chekiQ: F(
      `拍立得：「三、二、一」……按下快門`,
      `Cheki: "3, 2, 1"… press the shutter`,
      `チェキ：「3、2、1」……シャッター`,
    ),
    rude: F(
      `（客人想偷拍女僕……）`,
      `(A guest is sneaking a photo of a maid…)`,
      `（お客様がメイドを無断で撮影しようとしている……）`,
    ),
    rudeQ: F(`怎麼應對？`, `How do you handle it?`, `どう対応する？`),
    rudeOk: F(
      `「拍照請用拍立得喔♡」`,
      `「Photos by cheki only, please ♡」`,
      `「お写真はチェキでお願いします♡」`,
    ),
    rudeNo1: F(
      `「沒關係，請隨便拍！」`,
      `「Sure, snap away!」`,
      `「どうぞどうぞ、ご自由に！」`,
    ),
    rudeNo2: F(`裝作沒看到`, `Pretend not to see`, `見なかったことにする`),
    sorry: F(`啊，對不起……`, `Oh — sorry…`, `あっ、すみません……`),
    bye: F(
      `路上小心，主人！`,
      `Have a safe trip, Master!`,
      `いってらっしゃいませ！`,
    ),
    uniformQ: F(
      `今天要穿哪套制服？`,
      `Which uniform would you like?`,
      `どちらの制服にする？`,
    ),
    maid: F(`女僕裝`, `The maid uniform`, `メイド服`),
    butler: F(`執事服`, `The butler suit`, `執事服`),
  };
async function Jne(e) {
  let t = e.ctx.state.data.stats;
  (t.baito_maid_uniform ||
    ((t.baito_maid_uniform =
      (
        await y2(e.m, {
          prompt: S7.uniformQ,
          options: [{ text: S7.maid }, { text: S7.butler }],
          shuffle: !1,
          secs: 20,
        })
      ).index === 1
        ? 2
        : 1),
    e.ctx.state.scheduleSave(1)),
    e.m.notify(
      t.baito_maid_uniform === 2
        ? F(
            `換上了執事服（黑背心、領帶）`,
            `Butler suit on (black waistcoat, tie)`,
            `執事服（黒のベスト、ネクタイ）に着替えた`,
          )
        : F(
            `換上了女僕裝（荷葉邊圍裙、頭飾）`,
            `Maid uniform on (frilled apron, headdress)`,
            `メイド服（フリルのエプロン、カチューシャ）に着替えた`,
          ),
      `info`,
      3,
    ));
}
