// tokyo__assets__region-tokyo-BcM3fReU 299 — icon
// Lines 118023-118317 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function Yne(e) {
  let t = e.panel,
    n = e.rng.next() < 0.55;
  if (
    (t.say(null, n ? S7.guestM : S7.guestF, !1),
    e.score(
      await t.pick({
        prompt: S7.greetQ,
        options: [{ label: S7.gM }, { label: S7.gF }, { label: S7.gShop }],
        correct: +!n,
        secs: 6 / e.pace + 2,
      }),
    ),
    e.over)
  )
    return;
  let r = e.pick(b7),
    i = e.pick(x7);
  t.say(null, S7.order(r.name, i.name));
  let a = b7
    .filter((e) => e !== r)
    .sort(() => e.rng.next() - 0.5)
    .slice(0, 3)
    .concat(r)
    .sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: S7.foodQ,
        options: a.map((e) => ({ label: e.name, icon: e.icon })),
        correct: a.indexOf(r),
        secs: 7,
      }),
    ),
    e.over)
  )
    return;
  if (e.progress > 0.25 || e.variant) {
    let n = x7.slice().sort(() => e.rng.next() - 0.5);
    if (
      (e.score(
        await t.pick({
          prompt: S7.drinkQ,
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
        prompt: S7.tray,
        secs: 4 + e.progress * 2,
        wobble: 0.8 * e.pace,
        icon: i.icon,
      }),
    ),
    e.over)
  )
    return;
  if (r.omurice) {
    let n = e.pick(qne);
    if (
      (t.say(null, S7.art(n.name)),
      e.score(
        await t.trace({
          prompt: S7.artQ(n.name),
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
    (t.say(null, S7.chantLead),
    e.score(
      await t.rhythm({
        prompt: S7.chantQ,
        words: [`おい`, `しく`, `なあ`, `れ`, `萌え`, `萌え`, `キュン`, `♡`],
        bpm: 100 + e.progress * 20,
      }),
    ),
    e.over)
  )
    return;
  t.say(null, S7.yum);
  let o = e.rng.next();
  (o < 0.25
    ? (t.say(null, S7.cheki),
      e.score(
        await t.timing({
          prompt: S7.chekiQ,
          zone: [0.62, 0.8],
          perfect: [0.68, 0.74],
          speed: 0.4,
          fill: !0,
        }),
      ))
    : o < 0.4 &&
      (t.say(null, S7.rude, !1),
      e.score(
        await t.pick({
          prompt: S7.rudeQ,
          options: [
            { label: S7.rudeOk },
            { label: S7.rudeNo1 },
            { label: S7.rudeNo2 },
          ],
          correct: 0,
          secs: 7,
        }),
      ),
      e.over || t.say(null, S7.sorry)),
    !e.over && (t.say(null, S7.bye), e.served(), await t.beat(0.6)));
}
var Xne = {
    key: `maid`,
    title: F(`女僕・執事咖啡廳`, `Maid & butler café`, `メイド・執事喫茶`),
    desc: F(
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
      name: F(`女僕長`, `Head maid`, `メイド長`),
      voice: `ja`,
      pitch: 1.25,
    },
    managerLook: c7.maid,
    door: () => s7(y7),
    room: async (e) => y7,
    workSpot: `greet`,
    face: `door`,
    brief: [
      F(
        `歡迎！我是女僕長。這裡的客人不是「客人」，是「主人」和「大小姐」喔。`,
        `Welcome! I'm the head maid. Here our guests aren't customers — they're Masters and Mistresses.`,
        `ようこそ！メイド長です。ここではお客様は「ご主人様」と「お嬢様」なの。`,
      ),
      F(
        `進門說「歡迎回家」，蛋包飯上用番茄醬畫畫，最後一起施魔法：「好吃起來吧，萌萌啾♡」。`,
        `At the door: 「お帰りなさいませ」. Ketchup art on the omurice, then the spell together: 「おいしくなあれ、萌え萌えキュン♡」.`,
        `入口で「お帰りなさいませ」、オムライスにケチャップでお絵かき、最後に「おいしくなあれ、萌え萌えキュン♡」。`,
      ),
      F(
        `店規：不能碰觸、拍照只能用拍立得。有人違規就有禮貌地提醒——我們這裡是健全的店喔。`,
        `House rules: no touching, photos by cheki only. Remind anyone politely — this is a wholesome café.`,
        `ルールはお触り禁止、撮影はチェキだけ。破る人には丁寧に注意してね。健全なお店だから。`,
      ),
    ],
    hello: F(
      `歡迎回來！今天也用笑容服務吧♡`,
      `Welcome back! Smiles on today too ♡`,
      `おかえり！今日も笑顔でね♡`,
    ),
    uniform: F(`準備好了`, `Ready`, `準備完了`),
    variant: {
      name: F(`活動日`, `Event day`, `イベントデー`),
      desc: F(
        `生日活動，客人特別多`,
        `A birthday event: a full house`,
        `生誕祭で満席`,
      ),
      mult: 1.25,
    },
    setup: Jne,
    customer: (e) => Yne(e),
  },
  C7 = `walkin-ramen-kanda`,
  w7 = [
    { icon: `🟤`, name: F(`醬油`, `Shoyu`, `醤油`) },
    { icon: `⚪`, name: F(`鹽味`, `Shio`, `塩`) },
    { icon: `🟠`, name: F(`味噌`, `Miso`, `味噌`) },
    { icon: `🟡`, name: F(`豚骨`, `Tonkotsu`, `豚骨`) },
  ],
  T7 = [
    { name: F(`偏硬`, `firm`, `かため`), zone: [0.42, 0.56] },
    { name: F(`普通`, `regular`, `ふつう`), zone: [0.6, 0.74] },
    { name: F(`偏軟`, `soft`, `やわらかめ`), zone: [0.78, 0.92] },
  ],
  E7 = [
    { name: F(`叉燒`, `chashu`, `チャーシュー`), dir: `up`, icon: `🥩` },
    { name: F(`溏心蛋`, `soft egg`, `味玉`), dir: `right`, icon: `🥚` },
    { name: F(`筍乾`, `menma`, `メンマ`), dir: `down`, icon: `🎋` },
    { name: F(`蔥`, `scallions`, `ねぎ`), dir: `left`, icon: `🌿` },
  ],
  D7 = {
    ticket: (e, t, n) =>
      F(
        `餐券：${e.zh}拉麵・${t.zh}・加${n.zh}`,
        `Ticket: ${e.en} ramen · ${t.en} · + ${n.en}`,
        `食券：${e.ja}ラーメン・${t.ja}・${n.ja}トッピング`,
      ),
    say: (e) => F(`麵要${e.zh}。`, `Noodles ${e.en}, please.`, `麺${e.ja}で。`),
    boil: (e) =>
      F(
        `煮麵：「${e.zh}」就起鍋（藍框）`,
        `Boil: out at 「${e.en}」 (the blue box)`,
        `麺を茹でる：「${e.ja}」で上げる`,
      ),
    soupQ: F(`倒哪一種湯頭？`, `Which soup?`, `どのスープ？`),
    topQ: F(
      `依序放配料（叉燒↑ 蛋→ 筍乾↓ 蔥←）`,
      `Toppings in order (chashu ↑ egg → menma ↓ scallion ←)`,
      `トッピングを順に（チャーシュー↑ 味玉→ メンマ↓ ねぎ←）`,
    ),
    serve: F(`久等了！`, `Here you go!`, `へい、お待ち！`),
    slurp: F(
      `（呼嚕呼嚕）……好吃！`,
      `(Slurp)… so good!`,
      `（ズルズル）……うまい！`,
    ),
    kaedama: F(`加麵！`, `Kaedama — another serving of noodles!`, `替え玉！`),
    kaeQ: F(
      `加麵：再煮一份（偏硬）`,
      `Kaedama: one more, firm`,
      `替え玉：もう一玉、かためで`,
    ),
  };
async function Zne(e) {
  let t = e.panel,
    n = e.pick(w7),
    r = e.pick(T7),
    i = e.pick(E7);
  if (
    (t.say(null, D7.ticket(n.name, r.name, i.name), !1),
    await t.beat(0.4),
    t.say(null, D7.say(r.name)),
    e.score(
      await t.timing({
        prompt: D7.boil(r.name),
        zone: r.zone,
        perfect: [r.zone[0] + 0.035, r.zone[1] - 0.035],
        speed: 0.24 * e.pace,
        fill: !0,
      }),
    ),
    e.over)
  )
    return;
  let a = w7.slice().sort(() => e.rng.next() - 0.5);
  if (
    (e.score(
      await t.pick({
        prompt: D7.soupQ,
        options: a.map((e) => ({ label: e.name, icon: e.icon })),
        correct: a.indexOf(n),
        secs: 6,
      }),
    ),
    e.over)
  )
    return;
  let o = [E7[0], i, E7[3]].filter((e, t, n) => n.indexOf(e) === t);
  (e.score(
    await t.sequence({
      prompt: D7.topQ,
      steps: o.map((e) => e.dir),
      labels: o.map((e) => e.icon),
    }),
  ),
    !e.over &&
      (t.say(null, D7.serve),
      await t.beat(0.5),
      t.say(null, D7.slurp),
      e.served(),
      e.rng.next() < 0.2 &&
        n.name.ja === `豚骨` &&
        (t.say(null, D7.kaedama),
        e.score(
          await t.timing({
            prompt: D7.kaeQ,
            zone: T7[0].zone,
            perfect: [T7[0].zone[0] + 0.035, T7[0].zone[1] - 0.035],
            speed: 0.28 * e.pace,
            fill: !0,
          }),
        )),
      await t.beat(0.4)));
}
