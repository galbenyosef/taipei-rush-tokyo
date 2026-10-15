// tokyo/assets/region-tokyo-55J_WESF 461 — say
// Lines 166177-166591 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var C5 = `walkin-kissa-okachimachi`,
  rBe = _3(`tokyo:s4_jingi`, {
    description: N(
      `鬼頭組的老大在御徒町的喫茶店等你。他不會白白幫一個陌生人——先看你怎麼打牌。`,
      `The Kito family's old boss waits for you at a kissa in Okachimachi. He won't help a stranger for nothing — first he wants to see how you play.`,
    ),
    glyph: `仁`,
    noPolice: !0,
    start: () => {
      let e = P3(C5);
      return { x: e.x, z: e.z, heading: e.facing };
    },
    async run(e) {
      let t = e.ctx,
        n = P3(C5);
      await Y4(e, { window: [7.5, 11], at: n });
      let r = Z4(t);
      await B3(e, C5, `corner-guest`, { guests: !1 });
      let i = V3(e, C5, `corner`, Q.kito, j4.kito);
      i.anim = `sit`;
      let a = V3(e, C5, `corner-guard`, Q.kuroda, j4.kuroda);
      ((a.anim = `crossArms`),
        await d3(e, async (e) => {
          (await e.say(
            Q.kito,
            N(
              `坐。……星期天這家店不開，是老闆為我開的。`,
              `Sit. …This place is closed on Sundays. The master opens it for me.`,
              `座りな。……日曜はこの店、休みでな。マスターが俺のために開けてくれてる。`,
            ),
            i,
          ),
            await e.say(
              Q.kito,
              N(
                `神城那種人，叫小孩子大白天去搶東西，讓警察把整個上野翻過來。我們這一行，以前是有規矩的。`,
                `Men like Kamishiro send children to rob in broad daylight and bring the police down on all of Ueno. In our line, there used to be rules.`,
                `神城みたいなのは、ガキに昼間から強盗させて、上野中にサツを呼び込む。昔はこの稼業にも筋ってもんがあった。`,
              ),
              i,
            ),
            await e.say(
              Q.kito,
              N(
                `我不會白白幫一個陌生人。陪我打一局花札。輸贏不重要——我要看你怎麼收手。`,
                `I don't help strangers for nothing. Play a game of hanafuda with me. Winning isn't the point — I want to see when you stop.`,
                `タダで余所者に手は貸さねえ。花札に付き合いな。勝ち負けじゃねえ——引き際を見せてもらう。`,
              ),
              i,
            ));
        }));
      let o = null;
      for (
        let t = 0;
        t < 2 &&
        ((o = await $ze(e, {
          opponent: { name: Q.kito.name, style: `boss` },
          rounds: t ? 1 : 2,
          seed: 1987 + t,
          tutorial: t === 0,
        })),
        !(o.won || o.stoppedWell));
        t++
      )
        t === 0 &&
          (await $(
            e,
            Q.kito,
            N(`……再來一局。`, `…One more.`, `……もう一勝負だ。`),
            2,
          ));
      let s = !!o && (o.won || o.stoppedWell);
      (await d3(e, async (e) => {
        (o?.won
          ? await e.say(
              Q.kito,
              N(
                `呵……贏了還知道收手。好。`,
                `Heh… you win and you still know when to stop. Good.`,
                `ふん……勝っても引き際を知ってる。いいだろう。`,
              ),
              i,
            )
          : s
            ? await e.say(
                Q.kito,
                N(
                  `輸了，但是收得乾淨。現在的年輕人做不到。`,
                  `You lost, but you stopped clean. Young people today can't.`,
                  `負けたが、引き際がきれいだ。今の若いのにはできねえ。`,
                ),
                i,
              )
            : await e.say(
                Q.kito,
                N(
                  `……不懂收手。不過，你也沒有逃。算了。`,
                  `…You don't know when to stop. But you didn't run either. Fine.`,
                  `……引き際は知らねえな。だが、逃げもしなかった。まあいい。`,
                ),
                i,
              ),
          await e.say(
            Q.kito,
            N(
              `條件。黑田給你新橋那棟樓客服中心的平面圖，後樓梯我們的人守著，神城的人上不來。`,
              `The terms. Kuroda gives you the floor plan of the call centre in that Shimbashi building, and our men hold the back stairs so Kamishiro’s can’t come up.`,
              `条件だ。黒田が新橋のビルのコールセンターの見取り図を渡す。裏階段はうちの若い衆が押さえる。神城の手下は上がれねえ。`,
            ),
            i,
          ),
          await e.say(
            Q.kito,
            N(
              `你不用為組裡做任何事。組裡也絕對不碰那些孩子。這是仁義。`,
              `You do nothing for the family. And the family never touches those kids. That is jingi.`,
              `あんたは組のために何もしなくていい。組も、あのガキどもには指一本触れねえ。それが仁義だ。`,
            ),
            i,
          ),
          await e.say(
            r,
            N(`……謝謝。`, `…Thank you.`, `……ありがとうございます。`),
            `me`,
          ));
      }),
        await B4(
          e,
          n.x + Math.sin(n.facing) * 2,
          n.z - Math.cos(n.facing) * 2,
          n.facing,
          6,
        ));
      let c = P4(
          t,
          n.x + Math.sin(n.facing) * 9,
          n.z - Math.cos(n.facing) * 9,
          4,
        ),
        l = t3(e, Q.kirishima, j4.kirishima, c.x, c.z, n.facing + Math.PI);
      (l.faceTo(e.px, e.pz),
        await d3(e, async (e) => {
          (await e.say(
            Q.kirishima,
            N(
              `……我什麼都沒看到。`,
              `…I didn’t see you.`,
              `……見なかったことにします。`,
            ),
            l,
          ),
            await e.say(
              Q.kirishima,
              N(
                `欠黑道人情是會還不完的。源さん應該跟你說過。`,
                `A debt to the yakuza never gets paid off. Gen-san must have told you.`,
                `ヤクザへの借りは返しきれませんよ。源さんから聞いてるでしょう。`,
              ),
              l,
            ));
        }),
        e.pass({
          bonus: s ? 3e3 : 0,
          note: N(`客服中心的平面圖到手`, `The call centre floor plan`),
        }));
    },
  }),
  w5 = `walkin-callcentre-shimbashi`,
  iBe = _3(`tokyo:s4_shimbashi`, {
    description: N(
      `照著平面圖，上ニュー烏森ビル的客服中心：救出打工者，拿走手機和伺服器。`,
      `With the floor plan, go up the New Karasumori Building to the call centre: free the recruits, take the phones and the server.`,
    ),
    glyph: `橋`,
    noPolice: !0,
    start: () => {
      let e = I4(`tokyo:shimbashi:tv-crew`, -165.2, 591.6, Math.PI * 0.9);
      return { x: e.x + 2.5, z: e.z + 2.5, heading: e.heading };
    },
    async run(e) {
      let t = e.ctx,
        n = I4(`tokyo:shimbashi:tv-crew`, -165.2, 591.6, Math.PI * 0.9),
        r = await J4(e);
      await Y4(e, { window: [19.5, 23], at: n });
      let i = Z4(t),
        a = P3(w5);
      if ((L4(t, a.x, a.z), r.from < 1)) {
        let i = P4(t, n.x, n.z, 3),
          o = t3(e, Q.gen, j4.gen, i.x, i.z, n.heading),
          s = P4(
            t,
            n.x + Math.sin(n.heading) * 1.4,
            n.z - Math.cos(n.heading) * 1.4,
            3,
          ),
          c = t3(e, Q.reporter, j4.officeF, s.x, s.z, n.heading + Math.PI);
        ((c.anim = `talk`),
          await d3(
            e,
            async (e) => {
              (await e.say(
                Q.reporter,
                N(
                  `不好意思～這裡是街頭訪問！今天下班後要去哪裡呢？`,
                  `Excuse me~ Street interview! Where are you headed after work today?`,
                  `すみませ～ん、街頭インタビューです！今日はお仕事の後、どちらへ？`,
                ),
                c,
              ),
                await e.say(
                  Q.gen,
                  N(
                    `……我是開計程車的，在等客人。喂，別拍我。`,
                    `…I drive a cab, I'm waiting for a fare. Hey — don't film me.`,
                    `……タクシーの客待ちだよ。おい、撮るなって。`,
                  ),
                  o,
                ),
                await e.say(
                  Q.reporter,
                  N(
                    `那您對最近的新橋有什麼看法？`,
                    `And what do you think of Shimbashi these days?`,
                    `最近の新橋について一言！`,
                  ),
                  c,
                ),
                await e.say(
                  Q.gen,
                  N(
                    `……燒鳥還是一樣好吃。好了好了。`,
                    `…The yakitori's as good as ever. That's enough.`,
                    `……焼き鳥は相変わらずうまい。はいはい、もういいだろ。`,
                  ),
                  o,
                ),
                await e.say(
                  Q.gen,
                  N(
                    `（對你小聲）黑田的人已經在後樓梯了。上三樓。`,
                    `(to you, low) Kuroda's men are on the back stairs. Third floor.`,
                    `（小声で）黒田の連中はもう裏階段にいる。三階だ。`,
                  ),
                  o,
                ));
            },
            { thin: !1 },
          ),
          await e.goto(
            { x: a.x, z: a.z },
            {
              objective: N(
                `從ニュー烏森ビル的樓梯上去`,
                `Go up the stairs of the New Karasumori Building`,
              ),
              label: N(`樓梯`, `Stairs`),
              radius: 2,
              onFoot: !0,
            },
          ),
          await B3(e, w5, `door`),
          r.mark(1, { x: a.x, z: a.z, heading: a.facing + Math.PI }));
      } else await B3(e, w5, `door`);
      let o = [
        V3(e, w5, `corridor-1`, Q.crew, j4.crew),
        V3(e, w5, `corridor-2`, Q.crew, j4.crew2),
        V3(e, w5, `corridor-2`, Q.crew, j4.crew, 0.6, 0.8),
      ];
      for (let t of o) t.faceTo(e.px, e.pz);
      await $(
        e,
        Q.crew,
        N(`喂！什麼人！`, `Hey! Who are you!`, `おい！誰だ！`),
        1.6,
      );
      let s = H4(e, o, {
          dmg: 7,
          label: N(`ネオンリンク的人`, `NeonLink crew`),
        }),
        c = { kind: `brawl`, x: o[0].x, z: o[0].z },
        l = e.every(() => {
          for (let e = 0; e < o.length; e++)
            if (!s.isDown(e)) {
              ((c.x = o[e].x), (c.z = o[e].z));
              break;
            }
          e.waitFor = s.left ? c : null;
        });
      (e.objective(
        N(
          `打倒走廊上的人（只用拳頭）`,
          `Take down the men in the corridor (fists only)`,
        ),
      ),
        await e.until(() => s.left === 0),
        l(),
        (e.waitFor = null),
        s.stop(),
        e.objective(null));
      let u = [`desk-1`, `desk-2`, `desk-3`, `desk-4`].map((t, n) => {
          let r = V3(
            e,
            w5,
            t,
            { ...Q.passer, name: N(`打工者`, `Recruit`, `バイトの子`) },
            n % 2 ? j4.officeF : j4.crew2,
          );
          return ((r.anim = `sit`), r);
        }),
        d = V3(e, w5, `back-stairs`, Q.kuroda, j4.kuroda),
        f = H3(w5, `room`);
      (await e.goto(
        { x: f.x, z: f.z, y: f.y },
        {
          objective: N(`進客服中心`, `Into the call centre`),
          radius: 2.2,
          onFoot: !0,
        },
      ),
        await d3(e, async (e) => {
          await e.say(
            i,
            N(
              `結束了。你們自由了——警察馬上就到，你們是被害人。`,
              `It's over. You're free — the police are on their way, and you're the victims here.`,
              `終わりだ。みんな自由だ——警察がすぐ来る。君たちは被害者なんだ。`,
            ),
            `me`,
          );
          for (let e of u) e.anim = `idle`;
          (await e.say(
            { ...Q.passer, name: N(`打工者`, `Recruit`, `バイトの子`) },
            N(
              `……真的嗎？我的手機……身分證的照片……`,
              `…Really? My phone… the photo of my ID…`,
              `……本当に？携帯……身分証の写真……`,
            ),
            u[0],
          ),
            await e.say(
              Q.kuroda,
              N(
                `（從後樓梯）神城從逃生梯下去了，往車站的方向。我們的人沒有攔——那是警察的事。`,
                `(from the back stairs) Kamishiro went down the fire escape, towards the station. Our men didn't stop him — that's the police's job.`,
                `（裏階段から）神城は非常階段から降りた、駅の方だ。うちのは止めてねえ——そいつはサツの仕事だ。`,
              ),
              d,
            ));
        }));
      let p = H3(w5, `desk-1`);
      (await e.pressE(
        p.x + 0.6,
        p.z,
        1.8,
        N(
          `按 {interact} 拿回被沒收的手機`,
          `Press {interact}: take back the confiscated phones`,
        ),
      ),
        e.sfx(`pickup`, { ui: !0 }));
      let m = H3(w5, `server`);
      (await e.pressE(
        m.x,
        m.z,
        1.8,
        N(
          `按 {interact} 拔下伺服器的硬碟`,
          `Press {interact}: pull the server's drives`,
        ),
      ),
        e.sfx(`pickup`, { ui: !0 }),
        e.notify(
          N(`手機和伺服器硬碟到手`, `The phones and the server drives`),
          `good`,
          3,
        ),
        $4(
          e,
          Q.officer,
          N(
            `（樓下）警察！不要動！`,
            `(downstairs) Police! Nobody move!`,
            `（階下）警察だ！動くな！`,
          ),
          2.4,
        ),
        e.pass({
          note: N(
            `打工者自由了。神城往車站跑了。`,
            `The recruits are free. Kamishiro headed for the station.`,
          ),
        }));
    },
  }),
  T5 = { minX: -368, maxX: -340, minZ: -1092, maxZ: -1066 },
  E5 = { x: Bp.minX + 1.8, z: -1056 },
  D5 = { x: Bp.minX + 1.8, z: -1040 },
  O5 = { x: -422.5, z: -1052 },
  k5 = [
    { x: E5.x, z: E5.z },
    { x: -410, z: -1055 },
    { x: -399, z: -1068 },
    { x: -396, z: -1100 },
    { x: -386, z: -1126 },
    { x: -362, z: -1136 },
    { x: -334, z: -1121 },
    { x: -304, z: -1137 },
    { x: -274, z: -1119 },
    { x: -252, z: -1134 },
    { x: -236, z: -1129 },
  ],
  A5 = { x: Bp.maxX - 3.5, z: -1129 },
  j5 = { x: -303, z: Bp.minZ + 3.5 },
  aBe = 4.5,
  M5 = 3;
