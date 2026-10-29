// tokyo/assets/region-tokyo-A7LxHjud 435 — heading
// Lines 155025-155428 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var MRe = [
    {
      yuki: N(
        `……你為什麼要追過來？`,
        `…Why did you follow me?`,
        `……なんで追ってくるんですか。`,
      ),
      options: [
        {
          text: N(
            `（小聲）早上他們叫你看到我就打電話。你沒打。我想知道為什麼。`,
            `(quietly) This morning they told you to call them if you saw me. You didn't. I want to know why.`,
            `（小声で）朝、俺を見たら電話しろって言われてたよな。しなかった。なんでか知りたくて。`,
          ),
          score: 2,
          reply: N(
            `……不知道。你看起來……不像會害人的人。`,
            `…I don't know. You didn't look like… someone who'd get people hurt.`,
            `……分かんないです。人を酷い目に遭わせる人には……見えなかったから。`,
          ),
        },
        {
          text: N(
            `（小聲）新橋站有警察在等。下車前，先跟我說清楚比較好。`,
            `(quietly) The police are waiting at Shimbashi. Better you tell me everything before we get off.`,
            `（小声で）新橋で警察が待ってる。降りる前に、俺に全部話しておいた方がいい。`,
          ),
          score: -2,
          reply: N(
            `……警察！？（他看向車門，手在發抖）`,
            `…The police!? (he looks at the doors, his hands shaking)`,
            `……警察！？（ドアの方を見る。手が震えている）`,
          ),
        },
        {
          text: N(
            `（小聲）因為你有危險。他們知道你跟我說過話，不會放過你的。`,
            `(quietly) Because you're in danger. If they know you talked to me, they won't let it go.`,
            `（小声で）危ないからだ。俺と話したのがバレたら、あいつら黙ってないぞ。`,
          ),
          score: -1,
          reply: N(
            `……那你就別再找我了啊。`,
            `…Then stop coming after me.`,
            `……だったら、もう来ないでくださいよ。`,
          ),
        },
      ],
    },
    {
      yuki: N(
        `……我也想不做啊。可是他們有我身分證的照片。我媽的地址也有。`,
        `…I want out too. But they've got a photo of my ID. My mum's address too.`,
        `……俺だって辞めたいですよ。でも、身分証の写真撮られてて。母さんの住所も。`,
      ),
      options: [
        {
          text: N(
            `那就今晚不幹了。封鎖他們、換手機號碼，他們很快就會放棄的。`,
            `Then quit tonight. Block them, change your number — they'll give up soon enough.`,
            `じゃあ今夜で辞めろ。ブロックして番号変えれば、そのうち諦めるって。`,
          ),
          score: -1,
          reply: N(
            `……他們有我家的地址耶。換號碼有什麼用。`,
            `…They have my home address. What good is a new number.`,
            `……家の住所知られてるんですよ。番号変えたって。`,
          ),
        },
        {
          text: N(
            `把他們傳給你的照片給我。我會讓它被刪掉，我保證。`,
            `Give me the photo they sent you. I'll get it deleted — I promise.`,
            `送られてきた写真、俺に見せろ。消させる。約束する。`,
          ),
          score: -1,
          reply: N(
            `……你保證不了的。誰都保證不了。`,
            `…You can't promise that. Nobody can.`,
            `……そんなの、約束できないでしょ。誰にも。`,
          ),
        },
        {
          text: N(
            `他們拿你媽媽來讓你害怕。錯的是他們，不是你。`,
            `They're using your mum to keep you scared. That's on them, not on you.`,
            `母さんを使って怖がらせてるんだ。悪いのはあいつらで、君じゃない。`,
          ),
          score: 2,
        },
      ],
    },
    {
      yuki: N(
        `報警的話，他們說會去找我媽……小晴姊也是，被帶去新橋的什麼地方了。`,
        `If I go to the police, they say they'll go after my mum… Hsiao-Ching too — they took her somewhere in Shimbashi.`,
        `警察に行ったら母さんのとこに行くって……小晴さんも、新橋のどこかに連れてかれました。`,
      ),
      options: [
        {
          text: N(
            `新橋的哪裡？每一分鐘都很重要，地址告訴我。`,
            `Where in Shimbashi? Every minute counts — give me the address.`,
            `新橋のどこだ？一分でも惜しい。住所を教えてくれ。`,
          ),
          score: -1,
          reply: N(
            `……我不知道地址。我真的不知道。`,
            `…I don't know the address. I really don't.`,
            `……住所なんて知らないです。本当に。`,
          ),
        },
        {
          text: N(
            `新橋。謝謝你告訴我。你媽媽的事，我們再想辦法——你不是一個人。`,
            `Shimbashi. Thank you for telling me. We'll work something out for your mum — you're not alone in this.`,
            `新橋か。教えてくれてありがとう。お母さんのことは一緒に考えよう——一人じゃない。`,
          ),
          score: 2,
        },
        {
          text: N(
            `那到新橋你帶我去。指給我看在哪裡就好，其他我來。`,
            `Then take me there when we get to Shimbashi. Just point out the place, I'll do the rest.`,
            `じゃあ新橋で案内してくれ。場所を指さすだけでいい、あとは俺がやる。`,
          ),
          score: -2,
          reply: N(
            `……那樣他們會看到我跟你在一起的。（他抱緊了背包）`,
            `…Then they'd see me with you. (he hugs his backpack)`,
            `……そしたら、一緒にいるところ見られます。（リュックを抱きしめる）`,
          ),
        },
      ],
    },
  ],
  NRe = v3(`tokyo:s1_shuden`, {
    description: N(
      `勇樹要搭末班的山手線。在終電開走之前追上他——在安靜的車廂裡，好好跟他談。`,
      `Yuki is taking the last Yamanote train. Catch it before it leaves — and talk to him, quietly, in a quiet carriage.`,
    ),
    glyph: `終`,
    noPolice: !0,
    start: () => {
      let e = L4(`tokyo:site:enrai-yu:noren`, -151.4, -876.5),
        t = b3(e.heading + Math.PI);
      return {
        x: e.x + t.x * 1.6,
        z: e.z + t.z * 1.6,
        heading: e.heading + Math.PI,
      };
    },
    async run(e) {
      let t = e.ctx,
        n = L4(`tokyo:site:enrai-yu:noren`, -151.4, -876.5),
        r = await Y4(e);
      await X4(e, { window: [23.5, 1.2], at: n });
      let i = Q4(t),
        a = jRe(t, -150, -1190);
      (a && R4(t, a.x, a.z),
        r.from < 1 &&
          (await f3(e, async (e) => {
            (await e.call(
              Q.yuki,
              N(
                `（電話）……是我，勇樹。對不起，早上逃走了。我得搭末班車去新橋，不去的話……`,
                `(phone) …It's Yuki. Sorry I ran this morning. I have to take the last train to Shimbashi, or else…`,
                `（電話）……勇樹です。朝は逃げてすみません。終電で新橋に行かなきゃいけないんです。行かないと……`,
              ),
            ),
              await e.say(
                i,
                N(
                  `等我。別上車——`,
                  `Wait for me. Don't get on—`,
                  `待ってろ。乗るな——`,
                ),
              ),
              await e.say(
                Q.station,
                N(
                  `（廣播）往東京、品川方向的末班車，即將從 3 號月台發車。`,
                  `(announcement) The last train for Tokyo and Shinagawa will soon depart from platform 3.`,
                  `（アナウンス）東京・品川方面、最終電車が3番線から間もなく発車いたします。`,
                ),
              ));
          })));
      let o = a ?? { x: -150.4, z: -1189.6, heading: Math.PI },
        s = !1;
      (e.setTimer(
        r.from < 1 ? 105 : 75,
        N(`終電`, `Last train`, `終電`),
        () => (s = !0),
      ),
        e.every(() => {
          s &&
            e.fail(
              N(
                `終電開走了`,
                `The last train has gone`,
                `終電が行ってしまった`,
              ),
            );
        }),
        await e.goto(
          { x: o.x, z: o.z },
          {
            objective: N(
              `在終電開走前趕到上野站（公園口）`,
              `Reach Ueno station (Park exit) before the last train leaves`,
            ),
            label: N(`上野站`, `Ueno Station`),
            radius: 3.5,
            onFoot: !0,
            pillar: !0,
          },
        ),
        r.mark(1, { x: o.x, z: o.z, heading: o.heading + Math.PI }),
        e.clearTimer(),
        e.objective(null),
        await $(
          e,
          Q.station,
          N(
            `（廣播）請勿衝進車廂。`,
            `(announcement) Please do not rush onto the train.`,
            `（アナウンス）駆け込み乗車はおやめください。`,
          ),
          2.4,
        ),
        (s = !1));
      let c = Promise.resolve(t.transit.travelTo(`jy-shimbashi`)).catch(
        () => {},
      );
      (await e.wait(2.5),
        await $(
          e,
          null,
          N(
            `（勇樹坐在車廂最後面。車廂很安靜，大家都在看手機。）`,
            `(Yuki sits at the end of the carriage. It is quiet; everyone is on their phones.)`,
            `（勇樹は車両の端に座っている。車内は静かで、みんなスマホを見ている）`,
          ),
        ));
      let l = 0;
      for (let t of MRe) {
        await $(e, Q.yuki, t.yuki);
        let n = await h3(e, { prompt: t.yuki, options: t.options, secs: 11 });
        ((l += n.score),
          n.index >= 0 && (await $(e, i, t.options[n.index].text)));
        let r = n.index >= 0 ? t.options[n.index].reply : void 0;
        (r && (await $(e, Q.yuki, r)),
          n.score < 0 &&
            (await $(
              e,
              Q.passer,
              N(
                `（旁邊的乘客瞪了你一眼）`,
                `(the passenger beside you glares)`,
                `（隣の乗客がにらむ）`,
              ),
              1.8,
            )));
      }
      ((e.vars.talk = l),
        await $(
          e,
          Q.yuki,
          l >= 4
            ? N(
                `……謝謝。好久沒人這樣跟我說話了。`,
                `…Thanks. No one has talked to me like that in a long time.`,
                `……ありがとうございます。こんなふうに話してもらったの、久しぶりです。`,
              )
            : N(`……你不懂啦。`, `…You don't get it.`, `……分かんないですよ。`),
        ),
        await c,
        await e.wait(0.6));
      let u = { x: e.px, z: e.pz },
        d = F4(t, u.x + 1.6, u.z + 0.8, 3),
        f = n3(e, Q.yuki, j4.yuki, d.x, d.z, 0);
      (f.faceTo(u.x, u.z),
        await $(
          e,
          Q.yuki,
          N(`……對不起！`, `…I’m sorry!`, `……すみません！`),
          1.4,
        ));
      let p = F4(t, u.x + 40, u.z + 25, 8);
      (f.moveTo(p.x, p.z, 6),
        H4(e, f, { color: 5088255 }),
        await e.wait(2.2),
        e.removeActor(f));
      let m = rt(t.plan, u.x, u.z),
        h = vt(m.road, m.x, m.z, 1.7, t.plan.side ?? 1),
        g = e.vehicle(`cab`, h.x, h.z, h.heading, { seed: 0.31 }),
        _ = F4(
          t,
          h.x + Math.cos(h.heading) * -1.6,
          h.z + Math.sin(h.heading) * -1.6,
          3,
        ),
        v = n3(e, Q.gen, j4.gen, _.x, _.z, x3(_.x, _.z, u.x, u.z));
      (await f3(e, async (e) => {
        if (g) {
          let t = b3(h.heading);
          e.shot(
            new E(
              h.x + t.x * 7 - Math.cos(h.heading) * 3,
              1.6,
              h.z + t.z * 7 - Math.sin(h.heading) * 3,
            ),
            new E(h.x, 1.1, h.z),
          );
        }
        (await e.say(
          Q.gen,
          N(
            `妙子打給我的。上車吧。`,
            `Tae called me. Get in.`,
            `タエさんから電話があった。乗りな。`,
          ),
          v,
        ),
          await e.say(i, N(`……您是？`, `…And you are?`, `……あなたは？`), `me`),
          await e.say(
            Q.gen,
            N(
              `源田。以前是警察，現在開計程車。我會說一點中文——以前跟臺灣的警察一起辦過案。`,
              `Genda. Used to be a cop; now I drive a cab. I speak a little Mandarin — I once worked a case with Taiwan's police.`,
              `源田だ。元は刑事、今はタクシー転がしてる。中国語も少しはできる。昔、台湾の警察と一緒にヤマを追ったことがあってな。`,
            ),
            v,
          ),
          await e.say(
            Q.gen,
            N(
              `新橋這一帶是我的地盤。小晴的事，我們從明天開始。`,
              `Shimbashi is my patch. Hsiao-Ching — we start tomorrow.`,
              `新橋はおれの庭みたいなもんだ。小晴ちゃんのことは、明日からだ。`,
            ),
            v,
          ));
      }),
        e.pass({
          bonus: Math.max(0, e.vars.talk ?? 0) * 500,
          note: N(`第二章「秋葉原」`, `Chapter 2 "Akihabara"`),
        }));
    },
  }),
  PRe = `
#tk-live { position: fixed; left: max(16px, env(safe-area-inset-left)); top: calc(92px + env(safe-area-inset-top)); z-index: 18; width: 256px;
  max-width: calc(100vw - 32px); box-sizing: border-box;
  border-radius: 12px; background: rgba(12,10,20,.8); color: #fff; padding: 9px 11px 10px; pointer-events: none;
  font: 600 13px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; border: 1px solid rgba(255,90,170,.5); }
#tk-live .tl-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
#tk-live .tl-live { background: #ff2e63; border-radius: 4px; padding: 1px 7px; font-weight: 800; letter-spacing: .06em; }
#tk-live .tl-v { opacity: .9; }
#tk-live .tl-sig { display: flex; align-items: center; gap: 8px; margin: 2px 0 4px; font-size: 11.5px; }
#tk-live .tl-sig b { flex: none; font-weight: 700; opacity: .92; }
#tk-live .tl-bars { display: flex; align-items: flex-end; gap: 3px; height: 16px; }
#tk-live .tl-bars i { display: block; width: 7px; border-radius: 2px; background: rgba(255,255,255,.18); transition: background .15s; }
#tk-live .tl-bars i:nth-child(1) { height: 4px; } #tk-live .tl-bars i:nth-child(2) { height: 7px; } #tk-live .tl-bars i:nth-child(3) { height: 10px; }
#tk-live .tl-bars i:nth-child(4) { height: 13px; } #tk-live .tl-bars i:nth-child(5) { height: 16px; }
#tk-live .tl-bars i.on { background: #3ddc84; } #tk-live.hot .tl-bars i.on { background: #ffd24d; }
#tk-live .tl-dot { width: 9px; height: 9px; border-radius: 50%; background: #3ddc84; opacity: .25; transition: opacity .25s; }
#tk-live .tl-dot.ping { opacity: 1; transition: none; }
#tk-live .tl-db { margin-left: auto; opacity: .7; font-variant-numeric: tabular-nums; }
#tk-live .tl-look { margin: 3px 0 2px; padding: 4px 7px; border-radius: 6px; background: rgba(255,255,255,.08); font-size: 12px; line-height: 1.35; }
#tk-live .tl-look:empty { display: none; }
#tk-live .tl-pins { display: flex; flex-direction: column; gap: 2px; margin: 4px 0 2px; font-size: 11.5px; }
#tk-live .tl-pins:empty { display: none; }
#tk-live .tl-pin span { display: inline-block; width: 16px; font-weight: 800; }
#tk-live .tl-pin.ok span { color: #3ddc84; } #tk-live .tl-pin.maybe span { color: #ffd24d; }
#tk-live .tl-pin.bad { opacity: .55; text-decoration: line-through; } #tk-live .tl-pin.bad span { color: #ff4d5e; }
#tk-live .tl-chat { margin-top: 6px; display: flex; flex-direction: column; gap: 3px; min-height: 48px; }
#tk-live .tl-msg { font-size: 12px; line-height: 1.3; }
#tk-live .tl-msg span { color: #ff8cc6; margin-right: 4px; }
#tk-live .tl-msg em { display: block; font-style: normal; opacity: .65; font-size: 10.5px; }
@media (max-width: 760px), (max-height: 480px) {
  #tk-live { width: 214px; top: calc(64px + env(safe-area-inset-top)); padding: 7px 9px 8px; font-size: 12px; }
  #tk-live .tl-msg { font-size: 11px; } #tk-live .tl-msg em { font-size: 9.5px; } #tk-live .tl-chat { min-height: 36px; }
}
/* a phone held sideways: the corner under the minimap is the stick's — the card goes right of the minimap, under the
   top buttons (the touch HUD's hint feed: it moves over by a card while the stream is up), and keeps two chat lines */
@media (max-height: 480px) {
  body.tr-is-touch #tk-live { left: calc(var(--pad) + var(--sal) + var(--mm) + 12px); top: calc(var(--pad) + var(--sat) + var(--tbv) + 10px);
    width: 200px; padding: 6px 8px 7px; font-size: 11px; }
  body.tr-is-touch #tk-live .tl-top { margin-bottom: 3px; }
  body.tr-is-touch #tk-live .tl-look { font-size: 11px; padding: 3px 6px; }
  body.tr-is-touch #tk-live .tl-chat { min-height: 0; margin-top: 4px; }
  body.tr-is-touch #tk-live .tl-msg:not(:nth-last-child(-n+2)) { display: none; }
  body.tr-is-touch.tk-live-on .hud-feed { left: calc(var(--pad) + var(--sal) + var(--mm) + 12px + 208px); }
}
`,
  D3 = [
    `ねこ大佐`,
    `akiba_lover`,
    `みかん`,
    `ゆるふわP`,
    `ラジ館民`,
    `くまお`,
    `sora_88`,
  ];
