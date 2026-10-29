// tokyo/assets/region-tokyo-55J_WESF 473 — icon
// Lines 170453-170747 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function QBe(e) {
  let t = e.panel,
    n = e.rng.next() < 0.55;
  if (
    (t.say(null, n ? l7.guestM : l7.guestF, !1),
    e.score(
      await t.pick({
        prompt: l7.greetQ,
        options: [{ label: l7.gM }, { label: l7.gF }, { label: l7.gShop }],
        correct: +!n,
        secs: 6 / e.pace + 2,
      }),
    ),
    e.over)
  )
    return;
  let r = e.pick(s7),
    i = e.pick(c7);
  t.say(null, l7.order(r.name, i.name));
  let a = s7
    .filter((e) => e !== r)
    .sort(() => e.rng.next() - 0.5)
    .slice(0, 3)
    .concat(r)
    .sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: l7.foodQ,
        options: a.map((e) => ({ label: e.name, icon: e.icon })),
        correct: a.indexOf(r),
        secs: 7,
      }),
    ),
    e.over)
  )
    return;
  if (e.progress > 0.25 || e.variant) {
    let n = c7.slice().sort(() => e.rng.next() - 0.5);
    if (
      (e.score(
        await t.pick({
          prompt: l7.drinkQ,
          options: n.map((e) => ({ label: e.name, icon: e.icon })),
          correct: n.indexOf(i),
          secs: 6,
        }),
      ),
      e.over)
    )
      return;
  }
  if (
    (e.score(
      await t.balance({
        prompt: l7.tray,
        secs: 4 + e.progress * 2,
        wobble: 0.8 * e.pace,
        icon: i.icon,
      }),
    ),
    e.over)
  )
    return;
  if (r.omurice) {
    let n = e.pick(XBe);
    if (
      (t.say(null, l7.art(n.name)),
      e.score(
        await t.trace({
          prompt: l7.artQ(n.name),
          shape: n.shape,
          steps: n.steps,
          secs: 14,
        }),
      ),
      e.over)
    )
      return;
  }
  if (
    (t.say(null, l7.chantLead),
    e.score(
      await t.rhythm({
        prompt: l7.chantQ,
        words: [`おい`, `しく`, `なあ`, `れ`, `萌え`, `萌え`, `キュン`, `♡`],
        bpm: 100 + e.progress * 20,
      }),
    ),
    e.over)
  )
    return;
  t.say(null, l7.yum);
  let o = e.rng.next();
  (o < 0.25
    ? (t.say(null, l7.cheki),
      e.score(
        await t.timing({
          prompt: l7.chekiQ,
          zone: [0.62, 0.8],
          perfect: [0.68, 0.74],
          speed: 0.4,
          fill: !0,
        }),
      ))
    : o < 0.4 &&
      (t.say(null, l7.rude, !1),
      e.score(
        await t.pick({
          prompt: l7.rudeQ,
          options: [
            { label: l7.rudeOk },
            { label: l7.rudeNo1 },
            { label: l7.rudeNo2 },
          ],
          correct: 0,
          secs: 7,
        }),
      ),
      e.over || t.say(null, l7.sorry)),
    !e.over && (t.say(null, l7.bye), e.served(), await t.beat(0.6)));
}
var $Be = {
    key: `maid`,
    title: N(`女僕・執事咖啡廳`, `Maid & butler café`, `メイド・執事喫茶`),
    desc: N(
      `秋葉原的「夢色口袋」：迎接主人、點餐、在蛋包飯上畫畫、一起喊「萌萌啾」。`,
      `ゆめいろポシェット, Akihabara: welcome the guests home, take orders, draw on the omurice, lead the 「萌え萌えキュン」.`,
      `秋葉原「ゆめいろポシェット」：お出迎え、注文、オムライスにお絵かき、「萌え萌えキュン」。`,
    ),
    glyph: `萌`,
    wage: 1300,
    hours: 4,
    open: [11, 18],
    skipTo: 12,
    secs: 220,
    lives: 4,
    requires: [`tokyo:s1_shuden`],
    manager: {
      name: N(`女僕長`, `Head maid`, `メイド長`),
      voice: `ja`,
      pitch: 1.25,
    },
    managerLook: Y5.maid,
    door: () => J5(o7),
    room: async (e) => o7,
    workSpot: `greet`,
    face: `door`,
    brief: [
      N(
        `歡迎！我是女僕長。這裡的客人不是「客人」，是「主人」和「大小姐」喔。`,
        `Welcome! I'm the head maid. Here our guests aren't customers — they're Masters and Mistresses.`,
        `ようこそ！メイド長です。ここではお客様は「ご主人様」と「お嬢様」なの。`,
      ),
      N(
        `進門說「歡迎回家」，蛋包飯上用番茄醬畫畫，最後一起施魔法：「好吃起來吧，萌萌啾♡」。`,
        `At the door: 「お帰りなさいませ」. Ketchup art on the omurice, then the spell together: 「おいしくなあれ、萌え萌えキュン♡」.`,
        `入口で「お帰りなさいませ」、オムライスにケチャップでお絵かき、最後に「おいしくなあれ、萌え萌えキュン♡」。`,
      ),
      N(
        `店規：不能碰觸、拍照只能用拍立得。有人違規就有禮貌地提醒——我們這裡是健全的店喔。`,
        `House rules: no touching, photos by cheki only. Remind anyone politely — this is a wholesome café.`,
        `ルールはお触り禁止、撮影はチェキだけ。破る人には丁寧に注意してね。健全なお店だから。`,
      ),
    ],
    hello: N(
      `歡迎回來！今天也用笑容服務吧♡`,
      `Welcome back! Smiles on today too ♡`,
      `おかえり！今日も笑顔でね♡`,
    ),
    uniform: N(`準備好了`, `Ready`, `準備完了`),
    variant: {
      name: N(`活動日`, `Event day`, `イベントデー`),
      desc: N(
        `生日活動，客人特別多`,
        `A birthday event: a full house`,
        `生誕祭で満席`,
      ),
      mult: 1.25,
    },
    setup: ZBe,
    customer: (e) => QBe(e),
  },
  u7 = `walkin-ramen-kanda`,
  d7 = [
    { icon: `🟤`, name: N(`醬油`, `Shoyu`, `醤油`) },
    { icon: `⚪`, name: N(`鹽味`, `Shio`, `塩`) },
    { icon: `🟠`, name: N(`味噌`, `Miso`, `味噌`) },
    { icon: `🟡`, name: N(`豚骨`, `Tonkotsu`, `豚骨`) },
  ],
  f7 = [
    { name: N(`偏硬`, `firm`, `かため`), zone: [0.42, 0.56] },
    { name: N(`普通`, `regular`, `ふつう`), zone: [0.6, 0.74] },
    { name: N(`偏軟`, `soft`, `やわらかめ`), zone: [0.78, 0.92] },
  ],
  p7 = [
    { name: N(`叉燒`, `chashu`, `チャーシュー`), dir: `up`, icon: `🥩` },
    { name: N(`溏心蛋`, `soft egg`, `味玉`), dir: `right`, icon: `🥚` },
    { name: N(`筍乾`, `menma`, `メンマ`), dir: `down`, icon: `🎋` },
    { name: N(`蔥`, `scallions`, `ねぎ`), dir: `left`, icon: `🌿` },
  ],
  m7 = {
    ticket: (e, t, n) =>
      N(
        `餐券：${e.zh}拉麵・${t.zh}・加${n.zh}`,
        `Ticket: ${e.en} ramen · ${t.en} · + ${n.en}`,
        `食券：${e.ja}ラーメン・${t.ja}・${n.ja}トッピング`,
      ),
    say: (e) => N(`麵要${e.zh}。`, `Noodles ${e.en}, please.`, `麺${e.ja}で。`),
    boil: (e) =>
      N(
        `煮麵：「${e.zh}」就起鍋（藍框）`,
        `Boil: out at 「${e.en}」 (the blue box)`,
        `麺を茹でる：「${e.ja}」で上げる`,
      ),
    soupQ: N(`倒哪一種湯頭？`, `Which soup?`, `どのスープ？`),
    topQ: N(
      `依序放配料（叉燒↑ 蛋→ 筍乾↓ 蔥←）`,
      `Toppings in order (chashu ↑ egg → menma ↓ scallion ←)`,
      `トッピングを順に（チャーシュー↑ 味玉→ メンマ↓ ねぎ←）`,
    ),
    serve: N(`久等了！`, `Here you go!`, `へい、お待ち！`),
    slurp: N(
      `（呼嚕呼嚕）……好吃！`,
      `(Slurp)… so good!`,
      `（ズルズル）……うまい！`,
    ),
    kaedama: N(`加麵！`, `Kaedama — another serving of noodles!`, `替え玉！`),
    kaeQ: N(
      `加麵：再煮一份（偏硬）`,
      `Kaedama: one more, firm`,
      `替え玉：もう一玉、かためで`,
    ),
  };
async function eVe(e) {
  let t = e.panel,
    n = e.pick(d7),
    r = e.pick(f7),
    i = e.pick(p7);
  if (
    (t.say(null, m7.ticket(n.name, r.name, i.name), !1),
    await t.beat(0.4),
    t.say(null, m7.say(r.name)),
    e.score(
      await t.timing({
        prompt: m7.boil(r.name),
        zone: r.zone,
        perfect: [r.zone[0] + 0.035, r.zone[1] - 0.035],
        speed: 0.24 * e.pace,
        fill: !0,
      }),
    ),
    e.over)
  )
    return;
  let a = d7.slice().sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: m7.soupQ,
        options: a.map((e) => ({ label: e.name, icon: e.icon })),
        correct: a.indexOf(n),
        secs: 6,
      }),
    ),
    e.over)
  )
    return;
  let o = [p7[0], i, p7[3]].filter((e, t, n) => n.indexOf(e) === t);
  (e.score(
    await t.sequence({
      prompt: m7.topQ,
      steps: o.map((e) => e.dir),
      labels: o.map((e) => e.icon),
    }),
  ),
    !e.over &&
      (t.say(null, m7.serve),
      await t.beat(0.5),
      t.say(null, m7.slurp),
      e.served(),
      e.rng.next() < 0.2 &&
        n.name.ja === `豚骨` &&
        (t.say(null, m7.kaedama),
        e.score(
          await t.timing({
            prompt: m7.kaeQ,
            zone: f7[0].zone,
            perfect: [f7[0].zone[0] + 0.035, f7[0].zone[1] - 0.035],
            speed: 0.28 * e.pace,
            fill: !0,
          }),
        )),
      await t.beat(0.4)));
}
