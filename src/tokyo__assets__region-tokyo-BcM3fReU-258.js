// tokyo__assets__region-tokyo-BcM3fReU 258 — heading
// Lines 101750-102095 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var M2 = (e) => ({ x: Math.sin(e), z: -Math.cos(e) }),
  N2 = (e, t, n, r) => Math.atan2(n - e, -(r - t)),
  P2 = () =>
    T0(`tokyo:site:shimizu-shoten:counter`, -149.3, -1050.3, Math.PI / 2),
  F2 = () =>
    T0(`tokyo:site:shimizu-shoten:crowd`, -147.7, -1050.3, Math.PI / 2),
  I2 = (() => {
    let e = M2(P2().heading);
    return { dx: e.x * 0.9, dz: e.z * 0.9 };
  })(),
  L2 = [
    F(
      `來來來，一千日圓！一千日圓就好！`,
      `Come on, come on — a thousand yen! Just a thousand!`,
      `さあさあ、千円！千円でいいよ！`,
    ),
    F(
      `再放一盒！帶走吧，小偷！`,
      `One more box in! Take it, you thief!`,
      `もう一箱！持ってけ泥棒！`,
    ),
    F(
      `這邊的姊姊，來，看這裡！`,
      `You there, miss — look over here!`,
      `そこのお姉さん、こっち見て！`,
    ),
    F(`今天不賺錢啦！`, `I'm making nothing today!`, `今日はもう儲けなし！`),
  ],
  R2 = C2(`tokyo:s1_ameyoko`, {
    description: F(
      `アメ横巧克力攤的大將認識小晴。幫他叫賣，問出她去了哪裡。`,
      `The auctioneer at Ameyoko's chocolate stall knew Hsiao-Ching. Help him sell, and find out where she went.`,
    ),
    glyph: `飴`,
    giver: { outfit: `v:t3-shimizu`, dx: I2.dx, dz: I2.dz, anim: `talk` },
    giverName: Q.shimizu,
    noPolice: !0,
    start: () => {
      let e = P2();
      return { x: e.x, z: e.z, heading: e.heading + Math.PI };
    },
    async run(e) {
      let t = e.ctx,
        n = P2(),
        r = F2(),
        i = await B0(e);
      await U0(e, { window: [10, 17], at: n });
      let a = G0(t),
        o = M2(n.heading),
        s = Z0(
          e,
          Q.shimizu,
          y0.shimizu,
          n.x + o.x * 0.9,
          n.z + o.z * 0.9,
          n.heading + Math.PI,
        );
      s.anim = `talk`;
      let c = e.crowd(r.x - o.x * 1.5, r.z - o.z * 1.5, 3.5, 9, [
          `office`,
          `tourist`,
          `auntie`,
          `student`,
          `uncle`,
        ]),
        l = C0(
          t,
          r.x - o.x * 5 + Math.cos(n.heading) * 4,
          r.z - o.z * 5 + Math.sin(n.heading) * 4,
          4,
        ),
        u = X0(e, Q.flyer, y0.flyer, l.x, l.z, n.heading);
      if (((u.anim = `point`), i.from < 1)) {
        await m2(
          e,
          async (e) => {
            (await e.say(
              Q.shimizu,
              F(
                `喔，小晴的表親？那孩子一個禮拜前辭職了。說什麼「找到了活動的工作」。`,
                `Oh, Hsiao-Ching's cousin? She quit a week ago. Said she'd "found an event job".`,
                `おう、小晴ちゃんの親戚かい。あの子なら一週間前に辞めたよ。「イベントの仕事が見つかった」ってさ。`,
              ),
              s,
            ),
              await e.say(
                a,
                F(
                  `什麼活動？在哪裡？`,
                  `What kind of event? Where?`,
                  `どんなイベントですか？どこで？`,
                ),
                `me`,
              ),
              await e.say(
                Q.shimizu,
                F(
                  `詳細的我也不知道……少了她，我這邊缺人手。你幫我叫一下午，我就把知道的都告訴你。`,
                  `I don't know the details… and without her I'm a hand short. Call the auction with me this afternoon and I'll tell you everything I know.`,
                  `詳しいことは知らねえ……あの子が抜けて、こっちは人手が足りねえんだ。午後いっぱい手伝ってくれたら、知ってることは全部話すよ。`,
                ),
                s,
              ),
              await e.say(
                Q.shimizu,
                F(
                  `規矩很簡單：大家熱起來的時候，喊「もういっちょ！」再丟一盒進袋子。太早沒人理，太晚人就跑了。`,
                  `The rule is simple: when the crowd gets hot, shout 「もういっちょ！」 and throw one more box in the bag. Too early, nobody cares; too late, they walk.`,
                  `コツは簡単だ。客が温まったところで「もういっちょ！」ともう一箱入れる。早すぎりゃ誰も乗らねえし、遅けりゃ客が逃げる。`,
                ),
                s,
              ));
          },
          { thin: !1 },
        );
        let r = { x: n.x - o.x * 4.8, z: n.z - o.z * 4.8 },
          c = t.groundAt(n.x, n.z, 2, 0);
        t.player.teleport(
          n.x - o.x * 0.6 + Math.cos(n.heading) * 1.4,
          n.z - o.z * 0.6 + Math.sin(n.heading) * 1.4,
          n.heading,
        );
        try {
          t.cameraRig.override(
            new k(
              r.x + Math.cos(n.heading) * 2.2,
              c + 3,
              r.z + Math.sin(n.heading) * 2.2,
            ),
            new k(n.x + o.x * 0.6, c + 1.5, n.z + o.z * 0.6),
          );
        } catch {}
        e.onCleanup(() => t.cameraRig.override(null));
        let l = -1,
          u = await j2(e, {
            bags: 5,
            onCall: (t) => {
              ((l = t % L2.length), J0(e, Q.shimizu, L2[l], 2.2));
            },
            onSale: (t) => {
              (J0(
                e,
                a,
                F(`再來一盒！`, `One more box!`, `もういっちょ！`),
                1.4,
              ),
                s.play(`point`),
                e.sfx(`coin`, { x: n.x, y: 1.4, z: n.z }),
                t === 3 &&
                  J0(
                    e,
                    Q.crowd,
                    F(
                      `我要！我要一袋！`,
                      `Me! I'll take a bag!`,
                      `はい！ひとつちょうだい！`,
                    ),
                    1.8,
                  ));
            },
            onMiss: (t) => {
              t === `late` &&
                J0(
                  e,
                  Q.shimizu,
                  F(
                    `喂喂，客人都走啦！`,
                    `Hey, hey, they’re walking off!`,
                    `おいおい、客が帰っちまうぞ！`,
                  ),
                  1.8,
                );
            },
          });
        e.vars.misses = u.misses;
        try {
          t.cameraRig.override(null);
        } catch {}
        ((s.anim = `talk`),
          await $(
            e,
            Q.shimizu,
            F(
              `不錯嘛！小晴第一天可沒這麼行。`,
              `Not bad! Hsiao-Ching wasn't this good on her first day.`,
              `やるじゃねえか！小晴ちゃんの初日よりうまいぜ。`,
            ),
          ),
          i.mark(1, { x: n.x, z: n.z, heading: n.heading }));
      }
      (u.faceTo(e.px, e.pz),
        await m2(
          e,
          async (e) => {
            ((s.anim = `point`),
              await e.say(
                Q.shimizu,
                F(
                  `……你看那邊那個男的。他上禮拜也在這裡發傳單，小晴就是拿了他的傳單。`,
                  `…See that man over there? He was handing out flyers here last week too. Hsiao-Ching took one of his.`,
                  `……あそこの男、見えるか。先週もここでチラシ配ってた。小晴ちゃんはあいつのチラシをもらったんだ。`,
                ),
                s,
              ),
              await e.say(
                Q.flyer,
                F(
                  `高薪活動打工～誰都做得來的簡單工作～`,
                  `High-paying event work~ easy work anyone can do~`,
                  `高収入イベントスタッフ〜！誰でもできる簡単なお仕事でーす！`,
                ),
                u,
              ));
          },
          { thin: !1 },
        ),
        (s.anim = `idle`),
        await e.pressE(
          u.x,
          u.z,
          2.4,
          F(
            `按 {interact} 問他小晴的事`,
            `Press {interact} to ask him about Hsiao-Ching`,
          ),
          { target: u },
        ),
        await $(
          e,
          a,
          F(
            `你認識一個叫小晴的臺灣女生嗎？她拿了你的傳單。`,
            `Do you know a Taiwanese girl called Hsiao-Ching? She took one of your flyers.`,
            `小晴っていう台湾の女の子を知ってますか？あなたのチラシを受け取ったはずです。`,
          ),
        ),
        u.faceTo(e.px, e.pz),
        await $(
          e,
          Q.flyer,
          F(`……不、不認識！`, `…N-never heard of her!`, `……し、知らねえよ！`),
          1.6,
        ));
      let d = (
        T0(`tokyo:ameyoko:market-run`, -112, -1056).points ?? [
          [-145, -1060],
          [-125, -1060],
          [-80, -1060],
          [-80, -1150],
          [-145, -1160],
        ]
      )
        .map(([e, t]) => ({ x: e, z: t }))
        .filter((e) => Math.hypot(e.x - u.x, e.z - u.z) > 6);
      e.objective(
        F(
          `追上發傳單的男人（別撞到逛街的人）`,
          `Catch the flyer man (mind the shoppers)`,
        ),
      );
      let f = N0(e, u, {
        dash: d,
        home: { x: -112, z: -1080 },
        homeR: 130,
        farD: 70,
        escape: 9,
        speaker: Q.flyer.name,
        lost: F(`他消失在人群裡了`, `He vanished into the crowd`),
        taunts: [
          F(`別追了啦！`, `Quit following me!`, `ついてくんなよ！`),
          F(
            `我只是發傳單的！`,
            `I just hand out flyers!`,
            `チラシ配ってるだけだって！`,
          ),
        ],
      });
      (await e.until(() => f.state === `down`),
        f.stop(),
        F0(e, u, f.by),
        i.mark(2, { x: e.px, z: e.pz, heading: t.player.heading }),
        e.objective(null),
        await e.wait(0.8),
        (u.anim = `cower`),
        await m2(e, async (e) => {
          (await e.say(
            a,
            F(`小晴在哪裡？`, `Where is Hsiao-Ching?`, `小晴はどこだ？`),
            `me`,
          ),
            await e.say(
              Q.flyer,
              F(
                `我真的不知道！我只負責發傳單，人是上面的人帶走的……`,
                `I really don't know! I just hand out the flyers — the people upstairs take them from there…`,
                `本当に知らねえって！俺はチラシ配るだけで、連れてくのは上の連中だ……`,
              ),
              u,
            ),
            await e.say(
              Q.flyer,
              F(
                `……明天早上去上野公園。新來的會被派去佔賞花的位子。藍色塑膠布，ネオンリンク的。`,
                `…Go to Ueno Park tomorrow morning. The new ones get sent to hold the hanami spot. A blue tarp — NeonLink's.`,
                `……明日の朝、上野公園に行け。新人は花見の場所取りに行かされる。青いシート、ネオンリンクのだ。`,
              ),
              u,
            ),
            await e.say(
              a,
              F(
                `（傳單上寫著：「誰都做得來的簡單工作。日薪三萬日圓起。」）`,
                `(The flyer reads: "Easy work anyone can do. ¥30,000 a day and up.")`,
                `（チラシには「誰でもできる簡単なお仕事。日給3万円〜」とある）`,
              ),
              `me`,
            ));
        }),
        (u.anim = `idle`),
        u.moveTo(u.x + 30, u.z, 4.5),
        c(),
        e.pass({
          bonus: Math.max(0, 3 - (e.vars.misses ?? 0)) * 1e3,
          note: F(
            `ネオンリンク：誰都做得來的簡單工作`,
            `NeonLink: "easy work anyone can do"`,
          ),
        }));
    },
  }),
  z2 = null;
function B2(e) {
  if (z2) return z2;
  let t = null,
    n = 1 / 0;
  try {
    for (let r of rE({ plan: e.plan, entrances: [], tables: [] }).props) {
      if (r.model !== `hanami-tarp`) continue;
      let e = Math.hypot(r.x - -197.2, r.z - -1286);
      e < n && ((n = e), (t = { x: r.x, z: r.z, fx: r.fx }));
    }
  } catch (e) {
    console.warn(`[story] hanami tarps`, e);
  }
  return (z2 = t ?? { x: -197.2, z: -1286.2, fx: 1 });
}
