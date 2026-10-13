// tokyo__assets__region-tokyo-BcM3fReU 296 — adults
// Lines 117260-117585 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Rne = {
    key: `konbini`,
    title: F(`便利商店店員`, `Konbini clerk`, `コンビニ店員`),
    desc: F(
      `站收銀台：刷條碼、問「要加熱嗎？」、找零、補貨。24 小時都缺人。`,
      `Work the till: scan, ask 「温めますか？」, count the change, restock. They need people around the clock.`,
      `レジ打ち：スキャン、「温めますか？」、おつり、品出し。24時間募集中。`,
    ),
    glyph: `募`,
    wage: 1250,
    hours: 4,
    open: [0, 24],
    skipTo: 9,
    secs: 200,
    lives: 4,
    requires: [Re],
    manager: {
      name: F(`便利商店店長`, `Store manager`, `コンビニの店長`),
      voice: `ja`,
      pitch: 1,
    },
    managerLook: c7.konbini,
    door: Fne,
    room: async (e) => (p7 = (await Ine(e)) ?? ``),
    workSpot: `staff`,
    face: `counter`,
    guests: !1,
    brief: [
      F(
        `你就是來應徵的人吧？外國人也沒關係，只要肯做。`,
        `You're here about the job? Being foreign's fine, as long as you work.`,
        `バイトの応募の子だね？外国の人でも大丈夫、やる気があれば。`,
      ),
      F(
        `收銀台的基本：「歡迎光臨」「要加熱嗎？」「謝謝光臨」。便當一定要問加不加熱。`,
        `Till basics: 「いらっしゃいませ」, 「温めますか？」, 「ありがとうございました」. Always ask about heating a bento.`,
        `レジの基本は「いらっしゃいませ」「温めますか？」「ありがとうございました」。弁当は必ず温めるか聞いてね。`,
      ),
      F(
        `賣酒要請客人按年齡確認，香菸是用號碼點的。好，換上制服吧。`,
        `For alcohol, have them touch the age check; cigarettes are ordered by number. Right — get your uniform on.`,
        `お酒は年齢確認ボタン、タバコは番号で注文されるから。じゃ、制服に着替えて。`,
      ),
    ],
    hello: F(
      `來啦，今天也拜託了。`,
      `You're here. Counting on you again today.`,
      `お、来たね。今日もよろしく。`,
    ),
    uniform: F(
      `換上了便利商店的制服（藍色條紋）`,
      `Konbini uniform on (blue stripes)`,
      `コンビニの制服（青いストライプ）に着替えた`,
    ),
    variant: {
      name: F(`深夜班`, `Late-night shift`, `深夜シフト`),
      desc: F(
        `末班車後的人潮`,
        `The after-last-train rush`,
        `終電後のラッシュ`,
      ),
      mult: 1.25,
    },
    customer: (e) => Lne(e),
  },
  m7 = `walkin-sento-enraiyu`,
  h7 = { adult: 600, child: 200, infant: 100 },
  zne = 100,
  Bne = 50,
  Vne = [
    {
      who: F(`一位老爺爺`, `An old man`, `おじいさん`),
      adults: 1,
      kids: 0,
      small: 0,
    },
    {
      who: F(`一位上班族`, `An office worker`, `会社員`),
      adults: 1,
      kids: 0,
      small: 0,
    },
    {
      who: F(`媽媽和小學生`, `A mother and her schoolkid`, `お母さんと小学生`),
      adults: 1,
      kids: 1,
      small: 0,
    },
    {
      who: F(`一家四口`, `A family of four`, `四人家族`),
      adults: 2,
      kids: 1,
      small: 1,
    },
    {
      who: F(`兩個大學生`, `Two students`, `大学生ふたり`),
      adults: 2,
      kids: 0,
      small: 0,
    },
    {
      who: F(`外國觀光客`, `A tourist`, `外国人観光客`),
      adults: 1,
      kids: 0,
      small: 0,
    },
  ],
  g7 = {
    come: (e) =>
      F(`（${e.zh}來了）`, `(${e.en} comes in)`, `（${e.ja}が来た）`),
    feeQ: (e) =>
      F(
        `${e.zh}——入浴費總共多少？`,
        `${e.en} — how much is the bath fee?`,
        `${e.ja}——入浴料は合計いくら？`,
      ),
    towel: F(
      `毛巾也要租一條。`,
      `And a towel, please.`,
      `タオルもお願いします。`,
    ),
    soap: F(`還要香皂。`, `And some soap.`, `石けんもください。`),
    extraQ: (e) =>
      F(
        `加上租借品，總共是 ${u7(e)}——對嗎？`,
        `With the rentals that's ${u7(e)} — right?`,
        `貸しタオルなどを足して${u7(e)}——合ってる？`,
      ),
    yes: F(`對`, `Yes`, `合ってる`),
    no: F(`不對`, `No`, `違う`),
    pay: (e, t) =>
      F(`收您 ${u7(e)}。`, `Out of ${u7(e)}.`, `${u7(e)}お預かりします。`),
    changeQ: (e, t) =>
      F(
        `找零？（${u7(e)} − ${u7(t)}）`,
        `Change? (${u7(e)} − ${u7(t)})`,
        `おつりは？（${u7(e)} − ${u7(t)}）`,
      ),
    noren: F(
      `男湯是藍色暖簾、女湯是紅色——要指哪邊？`,
      `Men: the blue noren; women: the red — which way?`,
      `男湯は青、女湯は赤ののれん——どっち？`,
    ),
    men: F(`男湯（藍）`, `Men's (blue)`, `男湯（青）`),
    women: F(`女湯（紅）`, `Women's (red)`, `女湯（赤）`),
    manners: F(
      `（觀光客想穿著泳衣進浴池……）`,
      `(The tourist wants to bathe in a swimsuit…)`,
      `（観光客が水着で入ろうとしている……）`,
    ),
    mannersQ: F(`怎麼說明？`, `How do you explain?`, `どう説明する？`),
    mOk: F(
      `「先洗身體，不穿泳衣，毛巾不放進浴池」`,
      `「Wash first, no swimsuits, towels stay out of the bath」`,
      `「体を洗ってから、水着なし、タオルは湯船に入れない」`,
    ),
    mNo1: F(
      `「沒關係，請自便」`,
      `「No problem, go ahead」`,
      `「大丈夫、ご自由に」`,
    ),
    mNo2: F(
      `「泳衣租一件 500 圓」`,
      `「Swimsuit rental: ¥500」`,
      `「水着レンタル500円です」`,
    ),
    milk: F(
      `洗完澡就是要喝咖啡牛奶！`,
      `Coffee milk after the bath — of course!`,
      `風呂上がりはやっぱりコーヒー牛乳！`,
    ),
    milkQ: F(
      `從冰箱拿出咖啡牛奶（看準時機開蓋）`,
      `Coffee milk from the fridge (pop the cap on time)`,
      `冷蔵庫からコーヒー牛乳（タイミングよくフタを開ける）`,
    ),
    thanks: F(`慢慢泡喔～`, `Enjoy your bath~`, `ごゆっくり〜`),
    close: F(
      `打烊了。接下來打掃浴場！`,
      `Closing time. Now clean the baths!`,
      `閉店。浴場の掃除だ！`,
    ),
    scrub: F(
      `用刷子刷磁磚地板`,
      `Scrub the tiled floor`,
      `タイルの床をブラシでこする`,
    ),
    fill: F(
      `把浴池的熱水加到線為止`,
      `Refill the bath to the line`,
      `湯船にお湯を線まで張る`,
    ),
    done: F(
      `乾乾淨淨。明天也會有好客人。`,
      `Spotless. Good guests tomorrow, too.`,
      `ピカピカ。明日もいいお客さんが来るよ。`,
    ),
  };
async function Hne(e) {
  let t = e.panel,
    n = e.pick(Vne);
  t.say(null, g7.come(n.who), !1);
  let r = n.adults * h7.adult + n.kids * h7.child + n.small * h7.infant,
    i = [
      r,
      r + 100,
      r - 100 > 0 ? r - 100 : r + 200,
      n.adults * h7.adult + (n.kids + n.small) * h7.adult,
    ]
      .filter((e, t, n) => n.indexOf(e) === t)
      .slice(0, 4);
  for (; i.length < 3;) i.push(i[i.length - 1] + 50);
  let a = i.sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: g7.feeQ(n.who),
        options: a.map((e) => ({ label: F(u7(e), u7(e), u7(e)), icon: `♨️` })),
        correct: a.indexOf(r),
        secs: 9 / e.pace + 2,
      }),
    ),
    e.over)
  )
    return;
  let o = r;
  if (e.rng.next() < 0.45) {
    let r = e.rng.next() < 0.75,
      i = !r || e.rng.next() < 0.4;
    (r && t.say(null, g7.towel),
      i && t.say(null, g7.soap),
      (o += (r ? zne * n.adults : 0) + (i ? Bne : 0)));
    let a = e.rng.next() < 0.6 ? o : o + (e.rng.next() < 0.5 ? 50 : -50);
    if (
      (e.score(
        await t.pick({
          prompt: g7.extraQ(a),
          options: [
            { label: g7.yes, icon: `⭕` },
            { label: g7.no, icon: `❌` },
          ],
          correct: a === o ? 0 : 1,
          secs: 7,
        }),
      ),
      e.over)
    )
      return;
  }
  let s = o <= 1e3 ? 1e3 : o <= 2e3 ? 2e3 : 5e3;
  t.say(null, g7.pay(s, o));
  let c = l7(e, s - o);
  if (
    (e.score(
      await t.pick({
        prompt: g7.changeQ(s, o),
        options: c.map((e) => ({ label: F(u7(e), u7(e), u7(e)), icon: `💴` })),
        correct: c.indexOf(s - o),
        secs: 9 / e.pace + 2,
      }),
    ),
    !e.over)
  ) {
    if (n.adults === 1 && n.kids === 0 && e.rng.next() < 0.4) {
      let n = e.rng.next() < 0.5;
      if (
        (t.say(
          null,
          n
            ? F(`（是位男客人）`, `(A man)`, `（男性のお客さん）`)
            : F(`（是位女客人）`, `(A woman)`, `（女性のお客さん）`),
          !1,
        ),
        e.score(
          await t.pick({
            prompt: g7.noren,
            options: [
              { label: g7.men, icon: `🟦` },
              { label: g7.women, icon: `🟥` },
            ],
            correct: +!n,
            secs: 5,
          }),
        ),
        e.over)
      )
        return;
    }
    (n.who.en === `A tourist` &&
      e.rng.next() < 0.7 &&
      (t.say(null, g7.manners, !1),
      e.score(
        await t.pick({
          prompt: g7.mannersQ,
          options: [{ label: g7.mOk }, { label: g7.mNo1 }, { label: g7.mNo2 }],
          correct: 0,
          secs: 9,
        }),
      ),
      e.over)) ||
      (t.say(null, g7.thanks),
      e.served(),
      e.rng.next() < 0.3 &&
        (await t.beat(0.6),
        t.say(null, g7.milk),
        e.score(
          await t.timing({
            prompt: g7.milkQ,
            zone: [0.4, 0.62],
            perfect: [0.47, 0.55],
            speed: 0.8 * e.pace,
            secs: 6,
          }),
        )),
      await t.beat(0.5));
  }
}
async function Une(e) {
  let t = e.panel;
  (t.say({ zh: `妙子阿嬤`, en: `Tae`, ja: `タエさん` }, g7.close),
    await t.beat(1),
    e.score(await t.mash({ prompt: g7.scrub, target: 22, secs: 7 })),
    e.score(await t.hold({ prompt: g7.fill, zone: [0.8, 0.92], rate: 0.35 })),
    t.say({ zh: `妙子阿嬤`, en: `Tae`, ja: `タエさん` }, g7.done),
    await t.beat(1.6));
}
