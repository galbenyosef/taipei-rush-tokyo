// tokyo__assets__region-tokyo-BcM3fReU 297 — over
// Lines 117586-117733 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Wne = {
    key: `sento`,
    title: F(`錢湯櫃台`, `Sento front desk`, `銭湯の番台`),
    desc: F(
      `妙子阿嬤的燕來湯：在番台收入浴費、出租毛巾、提醒泡湯禮儀；打烊後刷地板、加熱水。`,
      `Tae's 燕来湯: take the fee at the 番台, rent towels, explain bath manners; after closing, scrub and refill.`,
      `タエさんの燕来湯：番台で入浴料、貸しタオル、入浴マナー。閉店後は掃除とお湯張り。`,
    ),
    glyph: `湯`,
    wage: 1230,
    hours: 4,
    open: [14, 17],
    skipTo: 15,
    secs: 190,
    lives: 4,
    requires: [Re],
    manager: {
      name: { zh: `妙子阿嬤`, en: `Tae`, ja: `タエさん` },
      voice: `ja`,
      pitch: 1.12,
    },
    managerLook: y0.tae,
    giver: { anim: `talk` },
    giverOutfit: `v:t3-tae`,
    door: () => s7(m7),
    room: async () => m7,
    workSpot: `bandai-seat`,
    face: `lobby`,
    brief: [
      F(
        `要在這裡待下去，總得賺點錢吧？來幫我顧番台。`,
        `If you're staying, you'll need money, won't you? Mind the desk for me.`,
        `ここにいるなら、お金も要るでしょう？番台を手伝ってちょうだい。`,
      ),
      F(
        `大人 600 圓、小學生 200 圓、更小的 100 圓。毛巾 100、香皂 50。`,
        `Adults ¥600, schoolkids ¥200, little ones ¥100. Towels 100, soap 50.`,
        `大人600円、小学生200円、未就学児100円。タオル100円、石けん50円。`,
      ),
      F(
        `觀光客不懂規矩的話，好好跟他說：先洗身體、不穿泳衣、毛巾不能放進浴池。`,
        `If a tourist doesn't know the rules, tell them kindly: wash first, no swimsuits, no towels in the bath.`,
        `観光客がわからなかったら、優しく教えてあげて。先に体を洗う、水着はだめ、タオルは湯船に入れない。`,
      ),
    ],
    hello: F(
      `來啦。今天也拜託你了。`,
      `There you are. I'm counting on you today.`,
      `あら、来たのね。今日もお願いね。`,
    ),
    uniform: F(
      `繫上了燕來湯的圍裙`,
      `The 燕来湯 apron on`,
      `燕来湯の前掛けをつけた`,
    ),
    customer: (e) => Hne(e),
    closing: Une,
  },
  _7 = () =>
    T0(`tokyo:site:shimizu-shoten:counter`, -149.3, -1050.3, Math.PI / 2),
  v7 = {
    patterQ: F(
      `招呼客人：跟著節拍吆喝`,
      `Draw them in: the patter on the beat`,
      `呼び込み：リズムに合わせて`,
    ),
    heatQ: F(
      `往袋子裡塞巧克力——熱度到金色就喊「再來一包！」`,
      `Pile in the chocolate — shout 「もういっちょ！」 when the heat hits gold`,
      `チョコを袋に詰める——熱気が金色で「もういっちょ！」`,
    ),
    sold: F(`一千圓！賣了！`, `A thousand yen! Sold!`, `千円だ！売った！`),
    hand: (e) =>
      [
        F(
          `（左邊的大嬸先舉手了！）`,
          `(The auntie on the left raised a hand first!)`,
          `（左のおばちゃんが先に手を挙げた！）`,
        ),
        F(
          `（正前方的上班族先舉手了！）`,
          `(The salaryman in front raised a hand first!)`,
          `（正面のサラリーマンが先に手を挙げた！）`,
        ),
        F(
          `（右邊的觀光客先舉手了！）`,
          `(The tourist on the right raised a hand first!)`,
          `（右の観光客が先に手を挙げた！）`,
        ),
      ][e],
    handQ: F(`袋子交給誰？`, `Who gets the bag?`, `袋は誰に？`),
    left: F(`左邊`, `Left`, `左`),
    front: F(`正前方`, `Front`, `正面`),
    right: F(`右邊`, `Right`, `右`),
    stuff: F(
      `把袋子塞滿、綁好！`,
      `Stuff the bag and tie it!`,
      `袋をパンパンに詰めて結ぶ！`,
    ),
    thanks: F(`謝啦！`, `Thanks!`, `まいど！`),
  };
async function Gne(e) {
  let t = e.panel;
  if (
    (e.score(
      await t.rhythm({
        prompt: v7.patterQ,
        words: [`さあ`, `さあ`, `寄って`, `らっしゃい`],
        bpm: 96 + e.progress * 24,
      }),
    ),
    e.over)
  )
    return;
  let n = 0.62 + e.rng.next() * 0.16,
    r = Math.max(0.1, 0.18 - e.progress * 0.06);
  if (
    (e.score(
      await t.timing({
        prompt: v7.heatQ,
        zone: [n, n + r],
        perfect: [n + r * 0.3, n + r * 0.7],
        speed: 0.3 * e.pace,
        fill: !0,
      }),
    ),
    e.over)
  )
    return;
  t.say(Q.shimizu.name, v7.sold);
  let i = Math.floor(e.rng.next() * 3);
  (t.say(null, v7.hand(i), !1),
    e.score(
      await t.pick({
        prompt: v7.handQ,
        options: [
          { label: v7.left, icon: `👈` },
          { label: v7.front, icon: `👆` },
          { label: v7.right, icon: `👉` },
        ],
        correct: i,
        secs: 3.5 / e.pace + 1.5,
      }),
    ),
    !e.over &&
      (e.score(await t.mash({ prompt: v7.stuff, target: 9, secs: 3.5 })),
      !e.over && (t.say(null, v7.thanks), e.served())));
}
