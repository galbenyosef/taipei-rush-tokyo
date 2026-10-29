// tokyo/assets/region-tokyo-A7LxHjud 433 — score
// Lines 154597-155014 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var E3 = [
    {
      ask: N(
        `不好意思，這塊布……有人嗎？我們公司想用這裡。`,
        `Excuse me, is this tarp… taken? Our company would like this spot.`,
        `すみません、このシート……どなたか使ってます？うちの会社、ここを使いたいんですが。`,
      ),
      options: [
        {
          text: N(
            `（鞠躬）不好意思，我們公司中午要在這裡賞花，天一亮就來佔了。`,
            `(bow) Sorry — our company’s hanami starts here at noon; we have been holding it since dawn.`,
            `（お辞儀して）すみません、うちの会社が昼からここで花見なんです。夜明けから場所取りしてまして。`,
          ),
          score: 2,
        },
        {
          text: N(
            `（鞠躬）我們中午才用——在那之前，你們先坐沒關係。`,
            `(bow) We only need it from noon — until then, please, go ahead and sit.`,
            `（お辞儀して）うちは昼からなので——それまでどうぞ、座っててください。`,
          ),
          score: -1,
          reply: N(
            `真的嗎？太好了！大家，這邊這邊——`,
            `Really? Wonderful! Everyone, over here—`,
            `本当ですか？助かります！みんな、こっちこっち——`,
          ),
        },
        {
          text: N(
            `（鞠躬）有人了，抱歉。空位的話，可以問管理員，他們有名單。`,
            `(bow) It is taken, sorry. For a free spot, try the park staff — they keep a list.`,
            `（お辞儀して）使ってます、すみません。空いてる場所なら、管理の方がリストを持ってますよ。`,
          ),
          score: -1,
          reply: N(
            `好，那我們去請管理員過來看看。`,
            `All right, we’ll ask the staff to come and have a look.`,
            `じゃあ、管理の方に見に来てもらいますね。`,
          ),
        },
      ],
      ok: N(
        `啊，這樣啊！失禮了。祝你們賞花愉快。`,
        `Ah, I see! Pardon us. Enjoy your hanami.`,
        `あ、そうですか！失礼しました。いいお花見を。`,
      ),
      bad: N(`……什麼態度啊。`, `…What an attitude.`, `……なにその態度。`),
    },
    {
      ask: N(
        `喂，這邊空著吧？鋪一半給我們用嘛。`,
        `Hey, this side's empty, right? Let us have half the tarp.`,
        `ねえ、こっち空いてるよね？半分使わせてよ。`,
      ),
      options: [
        {
          text: N(
            `一半的話……好吧，只到中午喔，十二點前要收。`,
            `Half… all right — but only till noon, you’ll pack up before twelve.`,
            `半分なら……いいですよ、昼まで。十二時前には片付けてくださいね。`,
          ),
          score: -1,
          reply: N(
            `沒問題沒問題！（他們脫了鞋，坐下來開了啤酒）`,
            `Sure, sure! (they kick off their shoes, sit down and open the beer)`,
            `オッケーオッケー！（靴を脱いで座り込み、ビールを開ける）`,
          ),
        },
        {
          text: N(
            `真的很抱歉，人等一下就到了。那邊的櫻花樹下好像還有空位喔。`,
            `I'm really sorry, everyone's arriving soon. There seems to be space under that tree over there.`,
            `本当にすみません、もうすぐみんな来るんです。あっちの桜の下、まだ空いてるみたいですよ。`,
          ),
          score: 2,
        },
        {
          text: N(
            `這是ネオンリンク公司的位子。有問題請直接找公司。`,
            `This spot belongs to NeonLink. Please take it up with the company.`,
            `ここはネオンリンクさんの場所です。会社に直接どうぞ。`,
          ),
          score: -2,
          reply: N(
            `ネオンリンク？……喂勇樹，是你們公司嗎？（勇樹的臉一下子白了）`,
            `NeonLink? …Hey, is that your company, kid? (Yuki goes white)`,
            `ネオンリンク？……ねえ君、君の会社？（勇樹の顔が真っ青になる）`,
          ),
        },
      ],
      ok: N(
        `喔，那邊嗎？謝啦！`,
        `Oh, over there? Thanks!`,
        `あ、あっち？ありがとう！`,
      ),
      bad: N(
        `什麼啊，這人。走吧走吧。`,
        `What is with this guy. Come on, let’s go.`,
        `なにこの人。行こ行こ。`,
      ),
    },
    {
      ask: N(
        `早安。佔位子的話，請不要用繩子圍起來喔。還有垃圾請帶回家。`,
        `Good morning. If you are holding a spot, please don’t rope it off. And take your rubbish home, please.`,
        `おはようございます。場所取りの際はロープで囲わないでくださいね。ゴミはお持ち帰りください。`,
      ),
      options: [
        {
          text: N(
            `我們沒有用繩子喔——倒是那邊那團圍了半片草地。`,
            `We haven't used any rope — the group over there has roped off half the lawn, though.`,
            `うちはロープ使ってませんよ——あっちのグループは芝生半分囲ってますけど。`,
          ),
          score: -1,
          reply: N(
            `……是嗎。那我等一下兩邊都再過來看看。`,
            `…Is that so. I’ll come back and check on both of you, then.`,
            `……そうですか。では後で、両方とも見に来ますね。`,
          ),
        },
        {
          text: N(
            `好的，我們會注意。辛苦了。`,
            `Of course, we will. Thank you for your work.`,
            `はい、気をつけます。お疲れさまです。`,
          ),
          score: 2,
        },
        {
          text: N(
            `好的。請問晚上公園開到幾點？我們可能會待到天黑。`,
            `Of course. How late is the park open tonight? We may stay after dark.`,
            `はい。夜は何時まで開いてますか？暗くなるまでいるかもしれなくて。`,
          ),
          score: -1,
          reply: N(
            `夜櫻的話有規定喔……傍晚我再來確認一次。`,
            `There are rules for night viewing… I’ll come back this evening to go over them with you.`,
            `夜桜には決まりがありまして……夕方にもう一度確認に来ますね。`,
          ),
        },
      ],
      ok: N(
        `謝謝您的配合。`,
        `Thank you for your cooperation.`,
        `ご協力ありがとうございます。`,
      ),
      bad: N(
        `……我會再過來巡一次。`,
        `…I'll be back to check on you.`,
        `……また見回りに来ますね。`,
      ),
    },
  ],
  ORe = N(
    `（小聲）有人問的話……公司的賞花，中午開始。誰都不能坐上來，一下下也不行。還有，別鬧出事——有人回來查，我就完了。`,
    `(whispering) If anyone asks… it's a company hanami, starting at noon. Nobody sits on the tarp, not even for a bit. And no fuss — if anyone comes back to check on it, I'm finished.`,
    `（小声で）誰かに聞かれたら……会社の花見、昼からって。誰も座らせちゃダメです、ちょっとでも。それと、揉め事はなし——誰かが確認に戻ってきたら、俺、終わりなんで。`,
  ),
  kRe = v3(`tokyo:s1_hanami`, {
    description: N(
      `傳單男說，新人會被派去上野公園佔賞花的位子。藍色塑膠布，ネオンリンク的。`,
      `The flyer man said new recruits get sent to hold hanami spots in Ueno Park. A blue tarp — NeonLink's.`,
    ),
    glyph: `桜`,
    noPolice: !0,
    start: () => {
      let e = L4(`tokyo:ueno:park-stairs`, -168, -1198),
        t = { x: -172, z: -1214 };
      return { x: t.x, z: t.z, heading: x3(e.x, e.z, t.x, t.z) };
    },
    async run(e) {
      let t = e.ctx,
        n = DRe(t),
        r = await Y4(e);
      await X4(e, { window: [7, 13], at: n });
      let i = Q4(t),
        a = t.peds,
        o = null;
      try {
        o = a.clearArea?.(n.x, n.z, 3, 1e6) ?? null;
      } catch {}
      e.onCleanup(() => o?.());
      let s = n3(e, Q.yuki, j4.yuki, n.x, n.z + 0.3, Math.atan2(n.fx, 0));
      s.anim = `sit`;
      let c = F4(t, n.x + n.fx * 1.9, n.z - 0.4, 2);
      (r.from < 1 &&
        (await e.goto(c, {
          objective: N(
            `在櫻花大道找藍色塑膠布上的年輕人`,
            `Find the young man on a blue tarp along Sakura-dori`,
          ),
          label: N(`藍色塑膠布`, `Blue tarp`),
          radius: 2.2,
          onFoot: !0,
          color: P4,
        }),
        s.faceTo(e.px, e.pz),
        await f3(e, async (e) => {
          (await e.say(
            Q.yuki,
            N(
              `……啊，這、這裡有人了。公司的賞花會。`,
              `…Ah, th-this spot is taken. A company hanami.`,
              `……あ、こ、ここ使ってます。会社の花見で。`,
            ),
            s,
          ),
            await e.say(
              i,
              N(
                `ネオンリンク的？我坐一下就好。你一個人從天亮守到現在？`,
                `NeonLink's? I'll just sit for a minute. You've held it alone since dawn?`,
                `ネオンリンクの？ちょっと座らせて。夜明けから一人で？`,
              ),
              `me`,
            ),
            await e.say(
              Q.yuki,
              N(
                `……新人的工作。說是誰都做得來的簡單工作。`,
                `…It's the new guy's job. They said it's easy work anyone can do.`,
                `……新人の仕事なんで。誰でもできる簡単な仕事だって。`,
              ),
              s,
            ),
            await e.say(
              i,
              N(
                `我叫${i.name.zh}，從臺北來的。你呢？`,
                `I'm ${i.name.en}, from Taipei. And you?`,
                `${i.name.ja}。台北から来たんだ。君は？`,
              ),
              `me`,
            ),
            await e.say(
              Q.yuki,
              N(
                `勇樹。十九歲。……拜託，別跟我講話太久，會被看到。`,
                `Yuki. Nineteen. …Please don't talk to me too long, they'll see.`,
                `勇樹です。十九。……あんまり話しかけないでください、見られたら困るんで。`,
              ),
              s,
            ));
        }),
        t.player.teleport(c.x, c.z, x3(c.x, c.z, n.x, n.z)),
        r.mark(1, { x: c.x, z: c.z, heading: x3(c.x, c.z, n.x, n.z) })),
        await $(e, Q.yuki, ORe));
      let l = 0,
        u = 0,
        d = [j4.officeM, j4.officeF, j4.officeM];
      for (let r = 0; r < E3.length; r++) {
        let a = E3[r],
          o =
            r === 2
              ? {
                  ...Q.passer,
                  name: N(`公園管理員`, `Park staff`, `公園の管理員`),
                }
              : Q.rival,
          f = F4(t, n.x + 9, n.z + (r - 1) * 6, 4),
          p = n3(e, o, d[r], f.x, f.z, 0),
          m = { x: c.x + 1.6, z: c.z + 0.4 };
        p.moveTo(m.x, m.z, 1.4);
        let h = G4(p, 4),
          g = 0;
        (await e.until((e) => p.distTo(m.x, m.z) < 1.2 || h(e) || (g += e) > 9),
          p.distTo(m.x, m.z) > 1.2 && p.place(m.x, m.z),
          p.stop(),
          p.faceTo(e.px, e.pz),
          (p.anim = `talk`),
          await $(e, o, a.ask));
        let _ = await h3(e, { prompt: a.ask, options: a.options, secs: 10 });
        if (
          ((u += _.score),
          _.index >= 0 && (await $(e, i, a.options[_.index].text)),
          _.score > 0
            ? (p.play(`bow`), await $(e, o, a.ok))
            : (_.score < 0 && l++,
              await $(
                e,
                o,
                (_.index >= 0 ? a.options[_.index].reply : void 0) ?? a.bad,
              ),
              _.score < 0 && e3(e, Q.yuki, N(`……`, `…`, `……`), 1.2)),
          (p.anim = `idle`),
          p.moveTo(f.x - 20, f.z, 1.4),
          l >= 2)
        ) {
          e.fail(
            N(
              `位子被搶走了——勇樹慌了`,
              `You lost the spot — Yuki is panicking`,
            ),
          );
          return;
        }
        r === 0 &&
          ((s.anim = `phone`),
          await t3(
            e,
            Q.crew,
            N(
              `（電話）喂，勇樹。位子顧好了吧？中午我們過去。……那個在問台灣女孩的傢伙，你看到就打給我。`,
              `(phone) Yuki. You holding the spot? We're coming at noon. …That guy asking about the Taiwanese girl — you see him, you call me.`,
              `（電話）おい勇樹。場所取れてんだろうな。昼に行く。……台湾の女のこと嗅ぎ回ってる奴、見かけたら連絡しろ。`,
            ),
          ),
          await $(e, Q.yuki, N(`……是、是的。`, `…Y-yes.`, `……は、はい。`), 1.6),
          (s.anim = `sit`));
      }
      ((e.vars.manners = u),
        r.mark(2, { x: c.x, z: c.z }),
        await e.skipTo(12, N(`中午 12:00 · 上野公園`, `Noon · Ueno Park`)));
      let f = F4(t, n.x + 10, n.z - 6, 4),
        p = F4(t, n.x + 11, n.z, 4),
        m = F4(t, n.x + 10, n.z + 6, 4),
        h = [
          n3(e, Q.crew, j4.crew, f.x, f.z, -Math.PI / 2),
          n3(e, Q.crew, j4.crew2, p.x, p.z, -Math.PI / 2),
          n3(e, Q.crew, j4.crew2, m.x, m.z, -Math.PI / 2),
        ];
      for (let e of h) e.moveTo(c.x + 3, c.z, 2);
      await e.wait(2.4);
      for (let t of h) t.faceTo(e.px, e.pz);
      (await f3(e, async (e) => {
        (await e.say(
          Q.crew,
          N(
            `勇樹，辛苦啦——喂，這傢伙是誰？`,
            `Good job, Yuki — hey, who is this?`,
            `勇樹、ご苦労さん——おい、こいつ誰だ？`,
          ),
          h[0],
        ),
          await e.say(
            Q.crew,
            N(
              `……就是你吧，在アメ横問台灣女孩的人。`,
              `…It's you, isn't it. The one asking about the Taiwanese girl in Ameyoko.`,
              `……お前だな、アメ横で台湾の女のこと聞き回ってるのは。`,
            ),
            h[0],
          ),
          await e.say(
            i,
            N(`小晴在哪裡？`, `Where is Hsiao-Ching?`, `小晴はどこだ？`),
            `me`,
          ),
          await e.say(
            Q.crew,
            N(
              `她的手機在我們這。人嘛……神城先生會好好「照顧」的。`,
              `Her phone's with us. As for her… Mr. Kamishiro takes good "care" of his people.`,
              `携帯ならこっちにある。本人は……神城さんがちゃんと「面倒見てる」よ。`,
            ),
            h[0],
          ));
      }),
        (s.anim = `idle`),
        s.moveTo(n.x - 40, n.z - 30, 4.5));
      let g = U4(e, h, {
          dmg: 7,
          label: N(`ネオンリンク的人`, `NeonLink crew`),
        }),
        _ = { kind: `brawl`, x: h[0].x, z: h[0].z },
        v = e.every(() => {
          for (let e = 0; e < h.length; e++)
            if (!g.isDown(e)) {
              ((_.x = h[e].x), (_.z = h[e].z));
              break;
            }
          e.waitFor = g.left ? _ : null;
        });
      (e.objective(
        N(
          `打倒 ネオンリンク 的人（只用拳頭）`,
          `Take down the NeonLink crew (fists only)`,
          `ネオンリンクの連中を倒せ（素手のみ）`,
        ),
      ),
        await e.until(() => g.left === 0),
        v(),
        (e.waitFor = null),
        g.stop(),
        e.objective(null),
        e.removeActor(s),
        await e.wait(1),
        await f3(e, async (e) => {
          (await e.say(
            Q.crew,
            N(
              `……你等著。神城先生不會放過你的。`,
              `…You'll see. Mr. Kamishiro won't let this go.`,
              `……覚えてろよ。神城さんが黙っちゃいねえぞ。`,
            ),
            h[0],
          ),
            await e.say(
              i,
              N(
                `勇樹不見了……神城。這就是那個「上面的人」。`,
                `Yuki is gone… Kamishiro. So that is "the people upstairs".`,
                `勇樹がいない……神城。そいつが「上の連中」か。`,
              ),
              `me`,
            ));
        }),
        e.pass({
          bonus: Math.max(0, e.vars.manners ?? 0) * 500,
          note: N(`名字：神城`, `A name: Kamishiro`),
        }));
    },
  }),
  ARe = `jy-ueno`;
