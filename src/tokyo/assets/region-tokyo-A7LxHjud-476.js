// tokyo/assets/region-tokyo-A7LxHjud 476 — color
// Lines 171856-172197 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var OVe = {
    key: `izakaya`,
    title: N(`居酒屋外場`, `Izakaya floor staff`, `居酒屋ホール`),
    desc: N(
      `有樂町高架橋下的「有樂家」：喊歡迎、帶位、倒生啤、端托盤、平分帳單。`,
      `やきとり 有楽家 under the Yurakucho tracks: shout the welcome, seat groups, pour drafts, carry trays, split bills.`,
      `有楽町ガード下「有楽家」：いらっしゃいませ、案内、生ビール、配膳、割り勘。`,
    ),
    glyph: `居`,
    wage: 1350,
    hours: 4,
    open: [17, 21],
    skipTo: 18,
    secs: 220,
    lives: 4,
    requires: [`tokyo:s2_karaoke`],
    manager: {
      name: N(`有樂家的大將`, `The Yurakuya master`, `有楽家の大将`),
      voice: `ja`,
      pitch: 0.85,
    },
    managerLook: t7.izakaya,
    door: () => e7(x7),
    room: async () => x7,
    workSpot: `tables`,
    face: `counter`,
    brief: [
      N(
        `喔，新來的打工仔？聲音要大！客人一進來就喊「歡迎光臨」！`,
        `Oh, the new part-timer? Be loud! The moment they're in: 「いらっしゃいませ」!`,
        `おう、新しいバイトか？声は大きく！客が入ったら「いらっしゃいませ」だ！`,
      ),
      N(
        `人數對桌子、先送濕毛巾和小菜。喊單要回「樂意之至」——這是我們的規矩。`,
        `Match the group to a table, oshibori and otoshi first. When I call an order you answer 「よろこんで」 — house rule.`,
        `人数に合った席、まずおしぼりとお通し。注文を通したら「よろこんで」。うちの決まりだ。`,
      ),
      N(
        `托盤別灑了。結帳通常是平分，記得算對。去吧！`,
        `Don't spill the trays. Bills get split evenly — get the sums right. Go!`,
        `トレイはこぼすな。会計は割り勘が多いから計算はしっかり。行ってこい！`,
      ),
    ],
    hello: N(
      `來了啊！今晚也會很忙喔！`,
      `There you are! It'll be a busy night!`,
      `来たか！今夜も忙しいぞ！`,
    ),
    uniform: N(
      `換上了居酒屋的作務衣和頭巾`,
      `Izakaya samue jacket and headband on`,
      `居酒屋の作務衣と頭巾に着替えた`,
    ),
    variant: {
      name: N(`花金之夜`, `Hanakin night`, `花金`),
      desc: N(`星期五晚上，客人爆滿`, `Friday night: packed`, `金曜の夜、満席`),
      mult: 1.3,
    },
    customer: (e) => DVe(e),
  },
  w7 = `walkin-izakaya-yurakucho`,
  kVe = [
    { name: N(`蔥雞肉串`, `negima (chicken & leek)`, `ねぎま`), cook: 1 },
    { name: N(`雞皮`, `chicken skin`, `皮`), cook: 1.15 },
    { name: N(`雞肉丸`, `tsukune (meatball)`, `つくね`), cook: 0.9 },
    { name: N(`雞胗`, `gizzard`, `砂肝`), cook: 1.05 },
    { name: N(`雞翅`, `wing`, `手羽先`), cook: 1.2 },
    { name: N(`雞腿肉`, `thigh`, `もも`), cook: 1 },
  ],
  T7 = {
    order: (e, t, n) =>
      N(
        `${t.zh}${e} 串，${n ? `醬烤` : `鹽烤`}！`,
        `${e} ${t.en}, ${n ? `tare` : `salt`}!`,
        `${t.ja}${e}本、${n ? `タレ` : `塩`}で！`,
      ),
    season: N(`怎麼調味？`, `Seasoning?`, `味付けは？`),
    shio: N(`鹽`, `Salt`, `塩`),
    tare: N(`醬汁`, `Tare`, `タレ`),
    sideA: (e, t) =>
      N(
        `烤${e.zh}（第 ${t} 串）：上色就翻面`,
        `${e.en} (${t}): turn when golden`,
        `${e.ja}（${t}本目）：きつね色で返す`,
      ),
    sideB: N(
      `另一面：烤到剛好就起`,
      `Other side: off when just right`,
      `裏面：ちょうどいいところで上げる`,
    ),
    fan: N(
      `炭火變弱了！用扇子搧`,
      `The coals are dying — fan them!`,
      `炭火が弱い！うちわであおぐ`,
    ),
    brush: N(
      `刷醬：在對的時機刷三次`,
      `Brush the tare: three strokes`,
      `タレを塗る：タイミングよく三回`,
    ),
    plate: N(`上菜！`, `Order up!`, `お待ち！`),
    thanks: N(`真好吃！`, `Delicious!`, `うまい！`),
    rumble: N(
      `（電車從頭上轟隆駛過）`,
      `(A train thunders overhead)`,
      `（頭上を電車がゴーッと通過）`,
    ),
  };
async function AVe(e) {
  let t = e.panel,
    n = e.pick(kVe),
    r = 1 + Math.floor(e.rng.next() * (e.variant ? 3 : 2)),
    i = e.rng.next() < 0.5;
  if (
    (t.say(null, T7.order(r, n.name, i)),
    e.score(
      await t.pick({
        prompt: T7.season,
        options: [
          { label: T7.shio, icon: `🧂` },
          { label: T7.tare, icon: `🍯` },
        ],
        correct: +!!i,
        secs: 5,
      }),
    ),
    !e.over &&
      !(
        e.rng.next() < 0.3 + e.progress * 0.2 &&
        (e.score(await t.mash({ prompt: T7.fan, target: 12, secs: 4 })), e.over)
      ))
  ) {
    for (let i = 1; i <= r; i++) {
      let r = (0.3 * e.pace) / n.cook;
      if (
        (e.score(
          await t.timing({
            prompt: T7.sideA(n.name, i),
            zone: [0.6, 0.8],
            perfect: [0.66, 0.74],
            speed: r,
            fill: !0,
          }),
        ),
        e.over ||
          (e.score(
            await t.timing({
              prompt: T7.sideB,
              zone: [0.6, 0.8],
              perfect: [0.66, 0.74],
              speed: r * 1.1,
              fill: !0,
            }),
          ),
          e.over))
      )
        return;
    }
    (i &&
      (e.score(
        await t.rhythm({
          prompt: T7.brush,
          words: [`タレ`, `タレ`, `タレ`],
          bpm: 80 + e.progress * 20,
        }),
      ),
      e.over)) ||
      (t.say(null, T7.plate),
      await t.beat(0.4),
      t.say(null, T7.thanks),
      e.served(),
      e.rng.next() < 0.25 && (t.say(null, T7.rumble, !1), await t.beat(0.8)));
  }
}
var jVe = [
  dVe,
  _Ve,
  yVe,
  CVe,
  TVe,
  OVe,
  {
    key: `yakitori`,
    title: N(`烤雞肉串師傅`, `Yakitori grill`, `焼き鳥の焼き場`),
    desc: N(
      `有樂町高架橋下的炭火烤台：鹽或醬、上色就翻面、搧炭火、刷醬汁。`,
      `The charcoal grill under the Yurakucho tracks: salt or tare, turn when golden, fan the coals, brush the tare.`,
      `有楽町ガード下の炭火焼き台：塩かタレ、きつね色で返す、うちわ、タレ塗り。`,
    ),
    glyph: `串`,
    wage: 1350,
    hours: 4,
    open: [16, 21],
    skipTo: 17,
    secs: 210,
    lives: 4,
    requires: [`tokyo:s2_karaoke`],
    manager: {
      name: N(`烤台的老師傅`, `The grill master`, `焼き場の親方`),
      voice: `ja`,
      pitch: 0.78,
    },
    managerLook: t7.yakitori,
    door: () => {
      let e = e7(w7);
      return {
        x: e.x + Math.cos(e.heading) * 2.4,
        z: e.z + Math.sin(e.heading) * 2.4,
        heading: e.heading,
      };
    },
    giver: { dx: 1.2, dz: -0.6, anim: `crossArms` },
    room: async () => w7,
    workSpot: `staff`,
    face: `counter`,
    brief: [
      N(
        `想學烤雞肉串？一根一根看清楚——上色就翻面，焦了就是廢物。`,
        `Want to learn the grill? Watch every skewer — turn it when golden; burnt is garbage.`,
        `焼き鳥を覚えたい？一本一本よく見ろ。きつね色で返す、焦がしたら終わりだ。`,
      ),
      N(
        `客人說鹽就鹽、說醬就醬。炭火弱了就搧，醬汁要刷得漂亮。`,
        `Salt when they say salt, tare when they say tare. Fan the coals when they fade, brush the tare clean.`,
        `塩と言われたら塩、タレならタレ。炭が弱ったらあおげ、タレはきれいに塗れ。`,
      ),
    ],
    hello: N(
      `炭已經起好了。開始吧。`,
      `The coals are lit. Let's go.`,
      `炭はおこしてある。始めるぞ。`,
    ),
    uniform: N(
      `綁上了頭巾、穿上圍裙`,
      `Headband tied, apron on`,
      `鉢巻を締めて前掛けをした`,
    ),
    variant: {
      name: N(`下班尖峰`, `After-work rush`, `仕事帰りラッシュ`),
      desc: N(`上班族一波接一波`, `Salarymen in waves`, `サラリーマンが次々と`),
      mult: 1.25,
    },
    customer: (e) => AVe(e),
  },
];
function MVe() {
  for (let e of Object.values(t7)) e();
  return jVe.map(XBe);
}
var E7 = `tokyo:side_snatch`,
  D7 = (e, t, n, r = 1, i = `ja`) => ({
    name: { zh: e, en: t, ja: n },
    voice: i,
    pitch: r,
  }),
  O7 = {
    suzuki: D7(`鈴木奶奶`, `Mrs. Suzuki`, `鈴木さん`, 1.18),
    rider: D7(`搶劫犯`, `Snatcher`, `ひったくり犯`, 0.86),
    officer: D7(`警察`, `Officer`, `警察官`, 0.95),
  },
  k7 = {
    suzuki: () =>
      Nt(`grandma`, `tk-side-snatch-suzuki`, {
        hair: { style: `elder`, color: 14078666 },
        top: { style: `blouse`, color: 14273764 },
        outer: { style: `cardigan`, color: 7043672, color2: 5793354 },
        bottom: { style: `wide`, color: 4868692 },
        shoes: { style: `sneaker`, color: 15131354, color2: 12433325 },
        acc: kt(`glasses`),
      }),
    rider: () =>
      Nt(`snatcher`, `tk-side-snatch-rider`, {
        top: { style: `tee`, color: 2763824 },
        outer: {
          style: `windbreaker`,
          color: 2303532,
          color2: 1382171,
          closed: !0,
        },
        bottom: { style: `jeans`, color: 2501688 },
        acc: kt(
          { kind: `helmet`, color: 1381914, color2: 657932 },
          { kind: `mask`, color: 1710620 },
        ),
      }),
    officer: () => Jt.cop,
  },
  NVe = N(`逼近壓力`, `Pressure`, `プレッシャー`),
  PVe = [
    { x: -15, z: -950 },
    { x: -15, z: -1170 },
    { x: -190, z: -1170 },
    { x: -190, z: -950 },
  ],
  A7 = { x: -168, z: -961 },
  FVe = [
    N(
      `騎淑女車追得上機車嗎！`,
      `A shopping bike? You think you can catch a scooter?`,
      `チャリで原付に追いつけるかよ！`,
    ),
    N(`讓開讓開！`, `Out of the way!`, `どけどけ！`),
    N(
      `煩不煩啊，別跟了！`,
      `Give it up already!`,
      `しつけえな、ついてくんな！`,
    ),
  ],
  j7 = [
    {
      id: E7,
      title: { zh: `機車搶劫`, en: `Bag Snatcher`, ja: `ひったくり` },
      description: {
        zh: `アメ横旁的春日通上，鈴木奶奶的手提包被騎機車的搶匪搶走了！騎上她的淑女車追上去，把包包拿回來。`,
        en: `On Kasuga-dori by Ameyoko, a rider on a scooter has snatched Mrs. Suzuki's handbag! Take her shopping bike and get it back.`,
        ja: `アメ横そばの春日通りで、鈴木さんのバッグが原付のひったくりに奪われた！彼女のママチャリで追いかけて取り返せ。`,
      },
      category: `side`,
      reward: 8e3,
      icon: `chase`,
      glyph: `奪`,
      blip: `mission`,
      color: 16742989,
      order: 311,
      giver: { outfit: `v:tk-side-snatch-suzuki`, along: 2.2, anim: `idle` },
      giverName: $4(O7.suzuki)[0],
      hours: [9, 20],
      skipTo: 14,
      skipCaption: {
        zh: `下午 2:00 · アメ横`,
        en: `2:00 PM · Ameyoko`,
        ja: `午後2時・アメ横`,
      },
      noPolice: !0,
      start(e) {
        (k7.suzuki(), k7.rider());
        let t = rt(e.plan, A7.x, A7.z);
        return { x: t.x, z: t.z, heading: t.facing };
      },
      run: IVe,
    },
  ];
