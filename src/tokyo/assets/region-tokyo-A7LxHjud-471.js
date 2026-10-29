// tokyo/assets/region-tokyo-A7LxHjud 471 — adults
// Lines 170519-170844 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var dVe = {
    key: `konbini`,
    title: N(`便利商店店員`, `Konbini clerk`, `コンビニ店員`),
    desc: N(
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
    requires: [We],
    manager: {
      name: N(`便利商店店長`, `Store manager`, `コンビニの店長`),
      voice: `ja`,
      pitch: 1,
    },
    managerLook: t7.konbini,
    door: cVe,
    room: async (e) => (o7 = (await lVe(e)) ?? ``),
    workSpot: `staff`,
    face: `counter`,
    guests: !1,
    brief: [
      N(
        `你就是來應徵的人吧？外國人也沒關係，只要肯做。`,
        `You're here about the job? Being foreign's fine, as long as you work.`,
        `バイトの応募の子だね？外国の人でも大丈夫、やる気があれば。`,
      ),
      N(
        `收銀台的基本：「歡迎光臨」「要加熱嗎？」「謝謝光臨」。便當一定要問加不加熱。`,
        `Till basics: 「いらっしゃいませ」, 「温めますか？」, 「ありがとうございました」. Always ask about heating a bento.`,
        `レジの基本は「いらっしゃいませ」「温めますか？」「ありがとうございました」。弁当は必ず温めるか聞いてね。`,
      ),
      N(
        `賣酒要請客人按年齡確認，香菸是用號碼點的。好，換上制服吧。`,
        `For alcohol, have them touch the age check; cigarettes are ordered by number. Right — get your uniform on.`,
        `お酒は年齢確認ボタン、タバコは番号で注文されるから。じゃ、制服に着替えて。`,
      ),
    ],
    hello: N(
      `來啦，今天也拜託了。`,
      `You're here. Counting on you again today.`,
      `お、来たね。今日もよろしく。`,
    ),
    uniform: N(
      `換上了便利商店的制服（藍色條紋）`,
      `Konbini uniform on (blue stripes)`,
      `コンビニの制服（青いストライプ）に着替えた`,
    ),
    variant: {
      name: N(`深夜班`, `Late-night shift`, `深夜シフト`),
      desc: N(
        `末班車後的人潮`,
        `The after-last-train rush`,
        `終電後のラッシュ`,
      ),
      mult: 1.25,
    },
    customer: (e) => uVe(e),
  },
  s7 = `walkin-sento-enraiyu`,
  c7 = { adult: 600, child: 200, infant: 100 },
  fVe = 100,
  pVe = 50,
  mVe = [
    {
      who: N(`一位老爺爺`, `An old man`, `おじいさん`),
      adults: 1,
      kids: 0,
      small: 0,
    },
    {
      who: N(`一位上班族`, `An office worker`, `会社員`),
      adults: 1,
      kids: 0,
      small: 0,
    },
    {
      who: N(`媽媽和小學生`, `A mother and her schoolkid`, `お母さんと小学生`),
      adults: 1,
      kids: 1,
      small: 0,
    },
    {
      who: N(`一家四口`, `A family of four`, `四人家族`),
      adults: 2,
      kids: 1,
      small: 1,
    },
    {
      who: N(`兩個大學生`, `Two students`, `大学生ふたり`),
      adults: 2,
      kids: 0,
      small: 0,
    },
    {
      who: N(`外國觀光客`, `A tourist`, `外国人観光客`),
      adults: 1,
      kids: 0,
      small: 0,
    },
  ],
  l7 = {
    come: (e) =>
      N(`（${e.zh}來了）`, `(${e.en} comes in)`, `（${e.ja}が来た）`),
    feeQ: (e) =>
      N(
        `${e.zh}——入浴費總共多少？`,
        `${e.en} — how much is the bath fee?`,
        `${e.ja}——入浴料は合計いくら？`,
      ),
    towel: N(
      `毛巾也要租一條。`,
      `And a towel, please.`,
      `タオルもお願いします。`,
    ),
    soap: N(`還要香皂。`, `And some soap.`, `石けんもください。`),
    extraQ: (e) =>
      N(
        `加上租借品，總共是 ${r7(e)}——對嗎？`,
        `With the rentals that's ${r7(e)} — right?`,
        `貸しタオルなどを足して${r7(e)}——合ってる？`,
      ),
    yes: N(`對`, `Yes`, `合ってる`),
    no: N(`不對`, `No`, `違う`),
    pay: (e, t) =>
      N(`收您 ${r7(e)}。`, `Out of ${r7(e)}.`, `${r7(e)}お預かりします。`),
    changeQ: (e, t) =>
      N(
        `找零？（${r7(e)} − ${r7(t)}）`,
        `Change? (${r7(e)} − ${r7(t)})`,
        `おつりは？（${r7(e)} − ${r7(t)}）`,
      ),
    noren: N(
      `男湯是藍色暖簾、女湯是紅色——要指哪邊？`,
      `Men: the blue noren; women: the red — which way?`,
      `男湯は青、女湯は赤ののれん——どっち？`,
    ),
    men: N(`男湯（藍）`, `Men's (blue)`, `男湯（青）`),
    women: N(`女湯（紅）`, `Women's (red)`, `女湯（赤）`),
    manners: N(
      `（觀光客想穿著泳衣進浴池……）`,
      `(The tourist wants to bathe in a swimsuit…)`,
      `（観光客が水着で入ろうとしている……）`,
    ),
    mannersQ: N(`怎麼說明？`, `How do you explain?`, `どう説明する？`),
    mOk: N(
      `「先洗身體，不穿泳衣，毛巾不放進浴池」`,
      `「Wash first, no swimsuits, towels stay out of the bath」`,
      `「体を洗ってから、水着なし、タオルは湯船に入れない」`,
    ),
    mNo1: N(
      `「沒關係，請自便」`,
      `「No problem, go ahead」`,
      `「大丈夫、ご自由に」`,
    ),
    mNo2: N(
      `「泳衣租一件 500 圓」`,
      `「Swimsuit rental: ¥500」`,
      `「水着レンタル500円です」`,
    ),
    milk: N(
      `洗完澡就是要喝咖啡牛奶！`,
      `Coffee milk after the bath — of course!`,
      `風呂上がりはやっぱりコーヒー牛乳！`,
    ),
    milkQ: N(
      `從冰箱拿出咖啡牛奶（看準時機開蓋）`,
      `Coffee milk from the fridge (pop the cap on time)`,
      `冷蔵庫からコーヒー牛乳（タイミングよくフタを開ける）`,
    ),
    thanks: N(`慢慢泡喔～`, `Enjoy your bath~`, `ごゆっくり〜`),
    close: N(
      `打烊了。接下來打掃浴場！`,
      `Closing time. Now clean the baths!`,
      `閉店。浴場の掃除だ！`,
    ),
    scrub: N(
      `用刷子刷磁磚地板`,
      `Scrub the tiled floor`,
      `タイルの床をブラシでこする`,
    ),
    fill: N(
      `把浴池的熱水加到線為止`,
      `Refill the bath to the line`,
      `湯船にお湯を線まで張る`,
    ),
    done: N(
      `乾乾淨淨。明天也會有好客人。`,
      `Spotless. Good guests tomorrow, too.`,
      `ピカピカ。明日もいいお客さんが来るよ。`,
    ),
  };
async function hVe(e) {
  let t = e.panel,
    n = e.pick(mVe);
  t.say(null, l7.come(n.who), !1);
  let r = n.adults * c7.adult + n.kids * c7.child + n.small * c7.infant,
    i = [
      r,
      r + 100,
      r - 100 > 0 ? r - 100 : r + 200,
      n.adults * c7.adult + (n.kids + n.small) * c7.adult,
    ]
      .filter((e, t, n) => n.indexOf(e) === t)
      .slice(0, 4);
  for (; i.length < 3;) i.push(i[i.length - 1] + 50);
  let a = i.sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: l7.feeQ(n.who),
        options: a.map((e) => ({ label: N(r7(e), r7(e), r7(e)), icon: `♨️` })),
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
    (r && t.say(null, l7.towel),
      i && t.say(null, l7.soap),
      (o += (r ? fVe * n.adults : 0) + (i ? pVe : 0)));
    let a = e.rng.next() < 0.6 ? o : o + (e.rng.next() < 0.5 ? 50 : -50);
    if (
      (e.score(
        await t.pick({
          prompt: l7.extraQ(a),
          options: [
            { label: l7.yes, icon: `⭕` },
            { label: l7.no, icon: `❌` },
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
  t.say(null, l7.pay(s, o));
  let c = n7(e, s - o);
  if (
    (e.score(
      await t.pick({
        prompt: l7.changeQ(s, o),
        options: c.map((e) => ({ label: N(r7(e), r7(e), r7(e)), icon: `💴` })),
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
            ? N(`（是位男客人）`, `(A man)`, `（男性のお客さん）`)
            : N(`（是位女客人）`, `(A woman)`, `（女性のお客さん）`),
          !1,
        ),
        e.score(
          await t.pick({
            prompt: l7.noren,
            options: [
              { label: l7.men, icon: `🟦` },
              { label: l7.women, icon: `🟥` },
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
      (t.say(null, l7.manners, !1),
      e.score(
        await t.pick({
          prompt: l7.mannersQ,
          options: [{ label: l7.mOk }, { label: l7.mNo1 }, { label: l7.mNo2 }],
          correct: 0,
          secs: 9,
        }),
      ),
      e.over)) ||
      (t.say(null, l7.thanks),
      e.served(),
      e.rng.next() < 0.3 &&
        (await t.beat(0.6),
        t.say(null, l7.milk),
        e.score(
          await t.timing({
            prompt: l7.milkQ,
            zone: [0.4, 0.62],
            perfect: [0.47, 0.55],
            speed: 0.8 * e.pace,
            secs: 6,
          }),
        )),
      await t.beat(0.5));
  }
}
async function gVe(e) {
  let t = e.panel;
  (t.say({ zh: `妙子阿嬤`, en: `Tae`, ja: `タエさん` }, l7.close),
    await t.beat(1),
    e.score(await t.mash({ prompt: l7.scrub, target: 22, secs: 7 })),
    e.score(await t.hold({ prompt: l7.fill, zone: [0.8, 0.92], rate: 0.35 })),
    t.say({ zh: `妙子阿嬤`, en: `Tae`, ja: `タエさん` }, l7.done),
    await t.beat(1.6));
}
