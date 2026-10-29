// tokyo/assets/region-tokyo-A7LxHjud 430 — say
// Lines 153798-154115 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var SRe = v3(We, {
    description: N(
      `表妹小晴來東京打工度假，三天前訊息斷了。從八重洲的利木津巴士站出發，到上野找她住的地方。`,
      `Cousin Hsiao-Ching came to Tokyo on a working holiday, and three days ago her messages stopped. From the Yaesu limousine stop, find the place she lives in Ueno.`,
    ),
    glyph: `序`,
    autoStart: (e) => {
      let t = e.params;
      return (t.has(`autoplay`) || t.has(`spawn`) || t.has(`cam`)) &&
        !t.has(`onboard`)
        ? !1
        : !e.state.data.completedMissions.includes(We);
    },
    noPolice: !0,
    start: () => vRe,
    async run(e) {
      let t = e.ctx,
        n = bRe(),
        r = await Y4(e);
      (await X4(e, { window: [7, 21] }), R4(t, n.x, n.z));
      let i = g3(t, n.x, n.z)?.plate ?? {
          ja: `台東区上野一丁目15番`,
          zh: `台東區上野一丁目15番`,
          en: `1-15 Ueno, Taito-ku`,
        },
        a = i3(t),
        o = Q4(t);
      if (r.from < 1) {
        await f3(e, async (e) => {
          (await e.say(
            o,
            N(
              `（下了利木津巴士）先打給小晴……`,
              `(off the limousine bus) Let me call Hsiao-Ching first…`,
              `（リムジンバスを降りて）まず小晴に電話……`,
            ),
            `me`,
          ),
            await e.call(
              Q.voicemail,
              N(
                `（電話）您撥的電話目前不在服務區域內，或未開機。`,
                `(phone) The number you have called is out of range or switched off.`,
                `（留守電）おかけになった電話は、電波の届かない場所にあるか、電源が入っていないため、かかりません。`,
              ),
            ),
            await e.say(
              o,
              N(
                `又是語音信箱……她最後一則訊息是三天前。`,
                `Voicemail again… her last message was three days ago.`,
                `また留守電か……最後のメッセージは三日前だ。`,
              ),
              `me`,
            ),
            await e.say(
              Q.hsiaoChing,
              N(
                `（訊息）${a.zh}！我找到一個薪水超高的活動打工！我住的地方：${i.zh ?? i.ja}，燕來湯樓上。上野的櫻花開了，你一定要來看🌸`,
                `(text) ${a.en}! I found an event job that pays SO well! I live at ${i.en}, upstairs from the sento 燕来湯. Ueno's cherry blossoms are out, you have to come see 🌸`,
                `（メッセージ）${a.ja}！すっごく時給のいいイベントのバイト見つけた！住所は${i.ja}、燕来湯の二階だよ。上野の桜が咲いたから、絶対見に来てね🌸`,
              ),
              null,
              { dur: 7 },
            ),
            await e.say(
              o,
              N(
                `「時薪超高的活動打工」……先去她住的地方。搭山手線之前，先去便利商店把交通卡儲值。`,
                `"An event job that pays so well"… First, her place. Before the Yamanote, top up the IC card at a konbini.`,
                `「時給のいいイベントのバイト」……まずは住んでる所だ。山手線に乗る前に、コンビニでICカードにチャージしよう。`,
              ),
              `me`,
            ));
        });
        let s = await B4(e, e.px, e.pz, 10, 320);
        if (s) {
          let n = () => !!t.interiors?.playerInside;
          (await e.goto(
            { x: s.x, z: s.z },
            {
              objective: N(
                `去便利商店幫交通卡儲值`,
                `Top up your IC card at a konbini`,
              ),
              label: N(`便利商店`, `Konbini`),
              radius: 2.4,
              onFoot: !0,
              orWhen: n,
            },
          ),
            await e.pressE(
              s.x,
              s.z,
              3,
              N(
                `按 {interact} 儲值 IC 卡`,
                `Press {interact} to top up the IC card`,
              ),
              { orWhen: n },
            ),
            e.sfx(`store_chime`, { ui: !0 }),
            await $(
              e,
              Q.clerk,
              N(
                `儲值嗎？收您一千日圓……好了，請確認餘額。`,
                `A top-up? One thousand yen… there you go, please check the balance.`,
                `チャージですね。千円お預かりします。……はい、残高をご確認ください。`,
              ),
            ),
            await $(
              e,
              Q.clerk,
              N(`謝謝光臨！`, `Thank you!`, `ありがとうございましたー！`),
              1.8,
            ),
            e.notify(
              N(
                `IC 卡儲值完成（車資照樣從錢包扣）`,
                `IC card topped up (fares still come out of your wallet)`,
              ),
              `info`,
              4,
            ));
        }
        let c = !1;
        e.on(`mrt:travel`, (e) => {
          yRe.includes(e.to) && (c = !0);
        });
        let l = () => e.dist(n.x, n.z) < 450 && !t.transit.traveling,
          u = () => {
            for (let n of t.transit.entrances ?? [])
              if (
                n.stationId === `jy-tokyo` &&
                Math.hypot(n.x - e.px, n.z - e.pz) < 7
              )
                return !0;
            return !1;
          },
          d = xRe(t, e.px, e.pz);
        (d &&
          !c &&
          (await e.goto(
            { x: d.x, z: d.z },
            {
              objective: N(
                `到東京車站，搭山手線去上野`,
                `Go to Tokyo Station and take the Yamanote to Ueno`,
                `東京駅へ行き、山手線で上野へ`,
              ),
              label: N(`東京站`, `Tokyo Station`, `東京駅`),
              radius: 3.5,
              onFoot: !0,
              orWhen: () => c || u() || t.transit.traveling || l(),
            },
          )),
          e.objective(
            N(
              `在東京站任一個入口搭山手線，選「上野」`,
              `Take the Yamanote at any Tokyo Station entrance — pick 上野 Ueno`,
              `東京駅のどの改札からでも山手線に乗り、「上野」を選ぶ`,
            ),
          ),
          (e.waitFor = {
            kind: `ride`,
            x: d?.x ?? e.px,
            z: d?.z ?? e.pz,
            to: `jy-ueno`,
          }),
          await e.until(() => c || l()),
          (e.waitFor = null),
          r.mark(1, { x: e.px, z: e.pz, heading: t.player.heading }),
          $(
            e,
            o,
            N(
              `到上野了。地址是……沒有導航，就看電線桿和街角的門牌吧。`,
              `Ueno. The address is… no GPS — I'll read the plates on the poles and corners.`,
              `上野に着いた。住所は……ナビなしで、電柱と角の住居表示を見ていこう。`,
            ),
          ));
      }
      (await _3(e, { x: n.x, z: n.z, radius: 4.5 }),
        await e.pressE(
          n.x,
          n.z,
          4.5,
          N(`按 {interact} 敲門`, `Press {interact} to knock`),
        ));
      let s = {
          x: Math.sin(n.heading + Math.PI),
          z: -Math.cos(n.heading + Math.PI),
        },
        c = F4(t, n.x + s.x * 0.4, n.z + s.z * 0.4, 3),
        l = n3(e, Q.tae, j4.tae, c.x, c.z, n.heading + Math.PI);
      l.faceTo(e.px, e.pz);
      let u = { x: Math.cos(n.heading), z: Math.sin(n.heading) },
        d = new E(
          n.x + s.x * 4.6 + u.x * 2.2,
          t.groundAt(n.x, n.z, 2, 0) + 1.75,
          n.z + s.z * 4.6 + u.z * 2.2,
        ),
        f = new E(
          (c.x + e.px) / 2,
          t.groundAt(n.x, n.z, 2, 0) + 1.45,
          (c.z + e.pz) / 2,
        );
      (await f3(
        e,
        async (e) => {
          (e.shot(d, f),
            await e.say(
              Q.tae,
              N(
                `來了來了——請問是哪位？`,
                `Coming, coming — who is it?`,
                `はーい、どちらさま？`,
              ),
              l,
            ),
            await e.say(
              o,
              N(
                `您好，我是小晴的表親，從臺北來的。小晴在嗎？`,
                `Hello — I'm Hsiao-Ching's cousin, from Taipei. Is she here?`,
                `こんにちは。小晴の従兄弟で、台北から来ました。小晴はいますか？`,
              ),
              `me`,
            ),
            (l.anim = `crossArms`),
            await e.say(
              Q.tae,
              N(
                `小晴的……！那孩子已經三天沒回來了。電話也不接，去報警，人家說「她是成年人」。`,
                `Hsiao-Ching's…! That girl hasn't been home for three days. She won't answer her phone, and the police just said, 'She's an adult.'`,
                `小晴ちゃんの……！あの子、もう三日も帰ってないのよ。電話も出ないし、警察に言っても「大人ですから」って。`,
              ),
              l,
            ),
            await e.say(
              o,
              N(
                `她最後的訊息說，找到了一個「時薪很高的活動打工」。`,
                `Her last message said she found "an event job that pays really well".`,
                `最後のメッセージで「時給のいいイベントのバイト」を見つけたって。`,
              ),
              `me`,
            ),
            (l.anim = `talk`),
            await e.say(
              Q.tae,
              N(
                `活動打工啊……那種廣告，我看了就不舒服。她以前在アメ横的巧克力攤打工，那邊的大將說不定知道什麼。`,
                `An event job… those ads give me the creeps. She used to work the chocolate stall in Ameyoko — the boss there might know something.`,
                `イベントのバイトねえ……ああいう広告、どうも好きになれないわ。前はアメ横のチョコ屋で働いてたから、あそこの大将なら何か知ってるかもね。`,
              ),
              l,
            ),
            await e.say(
              Q.tae,
              N(
                `總之今天先住下吧。二樓的空房間給你用。來，毛巾。`,
                `Anyway, stay here tonight. You can have the spare room upstairs. Here — a towel.`,
                `とにかく、今日は上がって。二階の空き部屋、使っていいから。はい、タオル。`,
              ),
              l,
            ),
            (l.anim = `idle`),
            await e.say(
              Q.tae,
              N(
                `熊貓走了，現在連小晴都……上野真是變冷清了。`,
                `The pandas are gone, and now Hsiao-Ching too… Ueno feels so empty these days.`,
                `パンダもいなくなっちゃったし、小晴ちゃんまで……。上野も寂しくなったわねえ。`,
              ),
              l,
            ),
            await e.say(
              o,
              N(
                `我一定會找到她的。`,
                `I'll find her. I promise.`,
                `必ず見つけます。`,
              ),
              `me`,
            ));
        },
        {
          thin: { x: n.x, z: n.z, r: 12 },
          eyeOk: (e, t) => Math.hypot(e - n.x, t - n.z) > 2.5,
        },
      ),
        e3(
          e,
          Q.tae,
          N(
            `明天早上，大將十一點會在攤位。`,
            `Tomorrow morning — the boss is at his stall from eleven.`,
            `明日の朝、大将は十一時には店にいるからね。`,
          ),
        ),
        e.pass({ note: N(`第一章「上野」開始`, `Chapter 1 "Ueno" begins`) }));
    },
  }),
  CRe = `
#tk-auc { position: fixed; left: 50%; top: calc(14vh + env(safe-area-inset-top)); transform: translateX(-50%); z-index: 20; width: min(420px, calc(100vw - 28px));
  padding: 12px 16px 14px; border-radius: 12px; background: rgba(18,12,10,.82); border: 1px solid rgba(255,200,61,.45); color: #fff;
  font: 700 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; user-select: none; -webkit-user-select: none; touch-action: manipulation; }
#tk-auc .ta-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
#tk-auc .ta-title { font-size: 18px; letter-spacing: .06em; color: #ffd24d; }
#tk-auc .ta-n { font-size: 13px; opacity: .85; }
#tk-auc .ta-meter { position: relative; height: 18px; border-radius: 9px; background: rgba(255,255,255,.12); overflow: hidden; }
#tk-auc .ta-band { position: absolute; top: 0; bottom: 0; background: rgba(255,200,61,.35); border-left: 2px solid #ffc83d; border-right: 2px solid #ffc83d; }
#tk-auc .ta-heat { position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: linear-gradient(90deg,#e8743b,#ff4d5e); }
#tk-auc .ta-key { margin-top: 9px; font-size: 13px; opacity: .9; text-align: center; }
#tk-auc .ta-flash { margin-top: 4px; min-height: 18px; text-align: center; font-size: 15px; color: #ffd24d; }
`;
