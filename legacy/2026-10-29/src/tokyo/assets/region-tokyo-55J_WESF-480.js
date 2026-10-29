// tokyo/assets/region-tokyo-55J_WESF 480 — math
// Lines 172373-173781 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var H7 = (e) => Math.round(e / 50) * 50,
  U7 = [
    N(
      `哇，好快！謝謝你。`,
      `Wow, that was quick! Thank you.`,
      `早っ！ありがとうございます。`,
    ),
    N(
      `還熱熱的，太好了。辛苦了！`,
      `Still hot — perfect. Thanks for your trouble!`,
      `まだ温かい、助かります。ご苦労さまです！`,
    ),
    N(
      `完美。下次也拜託你。`,
      `Perfect. Hope you get my order next time too.`,
      `完璧です。次もお願いしたいな。`,
    ),
  ],
  W7 = [
    N(
      `啊……有點散掉了呢。`,
      `Ah… it’s come apart a bit.`,
      `あ……ちょっと崩れてますね。`,
    ),
    N(
      `湯汁灑出來了……算了，沒關係。`,
      `The sauce leaked… oh well, never mind.`,
      `汁がこぼれてる……まあ、いいです。`,
    ),
    N(
      `嗯……下次小心一點喔。`,
      `Hmm… a bit more care next time, please.`,
      `うーん……次は気をつけてくださいね。`,
    ),
  ],
  G7 = [
    N(`哇——湯！湯要灑了！`, `Whoa — the soup! The soup!`, `うわっ、汁が！`),
    N(`拜託別倒……`, `Please don’t tip over…`, `頼む、倒れるな……`),
  ],
  xVe = { zh: `餐點狀態`, en: `Food condition`, ja: `料理の状態` },
  SVe = [
    {
      id: j7,
      title: { zh: `外送城外送`, en: `Demae-jo Delivery`, ja: `出前城の配達` },
      description: {
        zh: `外送城午餐尖峰缺人！到神田的店家取餐，送到用日本地址（丁目-番-號）寫的客人家。餐點要放平、要準時；每趟有運費和速度獎金，日本沒有小費。`,
        en: `Demae-jo is short of riders for the lunch rush! Pick up at Kanda restaurants and deliver to customers at Japanese addresses (chōme-ban-gō). Keep the food level and on time: a fee per drop plus a speed bonus — no tips in Japan.`,
        ja: `出前城、ランチのピークで人手不足！神田の店で料理を受け取り、丁目・番・号の住所のお客さんへ。料理は水平に、時間内に。一件ごとの配達料とスピードボーナス（チップはなし）。`,
      },
      category: `job`,
      reward: 3500,
      repeatable: !0,
      icon: `delivery`,
      glyph: `配`,
      blip: `delivery`,
      color: 16731469,
      order: 320,
      hours: [11, 20.5],
      skipTo: 12,
      skipCaption: {
        zh: `午餐尖峰`,
        en: `The lunch rush`,
        ja: `ランチのピーク`,
      },
      giver: {
        outfit: `v:tk-side-delivery-captain`,
        along: 2.5,
        anim: `phone`,
      },
      giverName: { zh: P7.name.zh, en: P7.name.en, ja: P7.name.ja },
      start(e) {
        (L7.captain(), L7.cook());
        let t = $e(e.plan, -20, -372);
        return { x: t.x, z: t.z, heading: t.facing };
      },
      async run(e) {
        let t = e.ctx,
          n = t.plan,
          r = e.origin,
          i = Z4(t),
          a = new ie(ge(j7, t.time.frame, Math.round(t.time.real * 10)));
        e.step = `briefing`;
        let o = Ht(t, { outfit: `v:tk-side-delivery-captain`, along: 2.5 }, r),
          s = n3(e, P7, L7.captain, o.x, o.z, 0);
        (s.faceTo(e.px, e.pz), (s.look = t.player.position), (s.anim = `talk`));
        for (let e of z7) L4(t, e.fx, e.fz);
        (await $(
          e,
          P7,
          N(
            `你就是新來的？太好了，午餐尖峰訂單爆了。三張單，全交給你。`,
            `You're the new rider? Great — the lunch rush is swamping us. Three orders, all yours.`,
            `新人さん？助かった、ランチのピークで注文がパンクしてるんだ。三件、全部お願い。`,
          ),
        ),
          await $(
            e,
            P7,
            N(
              `料理要放平。急煞、急轉、撞到東西，湯汁就完了。`,
              `Keep the food level. Slam the brakes, take a corner hard or hit something, and the sauce is gone.`,
              `料理は水平に。急ブレーキ、急ハンドル、ぶつけたら汁が全部出ちゃうからね。`,
            ),
          ),
          await $(
            e,
            P7,
            N(
              `地址是日本式的：○丁目○番○號。看街角的藍色門牌。日本沒有小費——快又漂亮，才有速度獎金。`,
              `Addresses are Japanese: chōme, ban, gō. Read the blue plates on the corners. No tips in Japan — fast and tidy earns the speed bonus.`,
              `住所は〇丁目〇番〇号。角の青いプレートを見てね。チップはないけど、早くてきれいならスピードボーナスが出るよ。`,
            ),
          ),
          await $(
            e,
            i,
            N(
              `三張單，懂了。（日文）がんばります！`,
              `Three orders, got it. (in Japanese) Ganbarimasu!`,
              `三件、了解。がんばります！`,
            ),
          ),
          (s.anim = `point`));
        let c = Aee(t),
          l =
            e.playerVehicle && c.includes(e.playerVehicle.kind)
              ? e.playerVehicle
              : null;
        if (!l) {
          let t = $e(n, r.x + 5, r.z),
            i = Bee(t.road, t.x, t.z),
            a = e.vehicle(`scooter`, i.x, i.z, i.heading, {
              cargo: `pangda`,
              color: 15921904,
              electric: !1,
              seed: 0.31,
            }),
            o = i.x + Math.cos(i.heading) * 1.4,
            s = i.z + Math.sin(i.heading) * 1.4;
          (e.vehicle(`mamachari`, o, s, i.heading, { seed: 0.61 }),
            (l = await e.enterVehicle({
              vehicle: a,
              kinds: c,
              objective: N(
                `騎上外送城的機車（或旁邊的腳踏車）`,
                `Get on the Demae-jo scooter (or the bicycle beside it)`,
                `出前城のスクーター（または隣の自転車）に乗る`,
              ),
            })),
            l && e.keepVehicle(l));
        }
        let u = l?.kind === `mamachari` ? 1.4 : 1;
        e.removeActor(s);
        let d = It(e, `bento`, {
          scooter: l?.kind === `mamachari` ? [0, 0.86, -0.62] : [0, 0.95, 0.58],
          hand: [0.28, 0.62, -0.1],
          scale: 1.5,
        });
        d?.handle.setVisible(!1);
        let f = 1,
          p = !1,
          m = 0;
        (Bt(e, (t, n) => {
          p &&
            ((f = Math.max(0, f - (n === `crash` ? t * 0.3 : t * 0.5))),
            n === `crash` &&
              m <= 0 &&
              ((m = 4), $4(e, i, G7[a.int(0, G7.length - 1)], 1.8)));
        }),
          e.every((t) => {
            ((m -= t),
              p &&
                (e.onFoot &&
                  e.playerSpeed > 4.6 &&
                  (f = Math.max(0, f - 0.035 * t)),
                e.progress(xVe, f),
                f <= 0 &&
                  e.fail({
                    zh: `餐點翻倒了——這張單只能取消`,
                    en: `The food tipped over — the order is ruined`,
                    ja: `料理がひっくり返った——注文はキャンセル`,
                  })));
          }));
        let h = [0, 1, 2];
        for (let e = h.length - 1; e > 0; e--) {
          let t = a.int(0, e);
          [h[e], h[t]] = [h[t], h[e]];
        }
        let g = a.int(1, 2),
          _ = 0,
          v = 0,
          y = 0;
        for (let n = 0; n < 3; n++) {
          let r = z7[h[n]],
            o = I4(r.anchor, r.fx, r.fz, r.fh);
          e.step = `pickup${n + 1}`;
          let s = Math.sin(o.heading),
            m = -Math.cos(o.heading),
            b = P4(t, o.x + s * 0.4, o.z + m * 0.4, 3),
            x = t3(e, F7, L7.cook, b.x, b.z, o.heading);
          ((x.look = t.player.position),
            (x.anim = `idle`),
            e.notify(
              {
                zh: `新訂單 #${n + 1}：${r.name.zh}`,
                en: `New order #${n + 1}: ${r.name.en}`,
                ja: `新しい注文 #${n + 1}：${r.name.ja}`,
              },
              `mission`,
              4,
            ),
            await e.goto(
              { x: o.x + s * 1.6, z: o.z + m * 1.6 },
              {
                objective: {
                  zh: `到「${r.name.zh}」取餐`,
                  en: `Pick up at ${r.name.en}`,
                  ja: `「${r.name.ja}」で料理を受け取る`,
                },
                style: `drive`,
                radius: 6,
                vehicleRadius: 8,
                label: r.name,
                blipIcon: `delivery`,
                needStop: !0,
                color: 16731469,
              },
            ),
            x.faceTo(e.px, e.pz),
            (x.anim = `carry`),
            await $(e, F7, r.call),
            e.sfx(`pickup`, { ui: !0 }),
            e.removeActor(x),
            d?.handle.setVisible(!0),
            (p = !0),
            (f = 1),
            (e.step = `deliver${n + 1}`));
          let S = n === g,
            C = { x: e.px, z: e.pz },
            w = V7(e, a, C.x, C.z, S ? 240 : 230, S ? 460 : 520),
            T = h3(t, w.x, w.z),
            E = a.int(1, 12),
            D = T
              ? bVe(T, E)
              : {
                  zh: `客人的門口`,
                  en: `the customer's door`,
                  ja: `お客さんの玄関`,
                },
            O = T
              ? { zh: T.plate.zh, en: T.plate.en, ja: T.plate.ja ?? T.plate.zh }
              : D,
            k = Math.sin(w.facing),
            A = -Math.cos(w.facing),
            j = P4(t, w.x - k * 0.5, w.z - A * 0.5, 3),
            ee = e.actor(R7[a.int(0, R7.length - 1)], j.x, j.z, w.facing);
          ee.look = t.player.position;
          let M = Math.hypot(w.x - C.x, w.z - C.z),
            te = Math.round(((M * 1.35) / 8 + 24) * u + (S ? 100 : 0));
          (e.notify(
            {
              zh: `送到：${D.zh}`,
              en: `Deliver to: ${D.en}`,
              ja: `お届け先：${D.ja}`,
            },
            `mission`,
            5,
          ),
            e.setTimer(te, { zh: `送達`, en: `Deliver`, ja: `配達` }, () =>
              e.fail({
                zh: `超時了，客人取消了訂單`,
                en: `Too late — the customer cancelled`,
                ja: `時間切れ——お客さんがキャンセルした`,
              }),
            ));
          let ne = e.every(() => {
            ee.distTo(e.px, e.pz) < 25 && (ee.anim = `wave`);
          });
          if (!S)
            await e.goto(
              { x: w.x + k * 0.9, z: w.z + A * 0.9 },
              {
                objective: {
                  zh: `送到 ${D.zh}`,
                  en: `Deliver to ${D.en}`,
                  ja: `${D.ja}へ届ける`,
                },
                style: `goto`,
                radius: 3.4,
                label: O,
                blipIcon: `delivery`,
                color: 5104127,
                pillar: !0,
                when: () => e.playerSpeed < 2.5,
              },
            );
          else {
            let n = V7(e, a, w.x, w.z, 70, 120, (e, n) => {
              let r = h3(t, e, n);
              return !!r && !!T && r.ban === T.ban && r.chome === T.chome;
            });
            (await e.goto(n, {
              objective: {
                zh: `騎到 App 上的定位點`,
                en: `Ride to the pin in the app`,
                ja: `アプリのピンまで走る`,
              },
              style: `drive`,
              radius: 6,
              vehicleRadius: 8,
              label: { zh: `定位點`, en: `App pin`, ja: `ピン` },
              blipIcon: `delivery`,
              needStop: !0,
              color: 5104127,
            }),
              e.sfx(`phone_ring`, { ui: !0 }),
              await $(
                e,
                I7,
                N(
                  `（訊息）不好意思，地圖的定位常常跑掉。請照地址來：${D.zh}。`,
                  `(message) Sorry, the map pin is always off. Please come by the address: ${D.en}.`,
                  `（メッセージ）すみません、地図のピンがよくずれるんです。住所で来てください：${D.ja}。`,
                ),
              ),
              await $(
                e,
                i,
                N(
                  `定位不準……那就照門牌找吧。`,
                  `The pin's off… then I'll go by the plates.`,
                  `ピンがずれてる……じゃあプレートで探そう。`,
                ),
              ),
              e.inVehicle &&
                (await e.exitVehicle(
                  N(
                    `把車停好，走路去找`,
                    `Park and look for it on foot`,
                    `バイクを停めて、歩いて探す`,
                  ),
                )),
              e.notify(
                {
                  zh: `要找：${D.zh}`,
                  en: `Looking for: ${D.en}`,
                  ja: `探す住所：${D.ja}`,
                },
                `info`,
                6,
              ));
            let r = 0,
              o = !1,
              s = null,
              c = e.every((t) => {
                o ||
                  (r += t) < 80 ||
                  ((o = !0),
                  e.waypoint({ x: w.x, z: w.z }, O),
                  (s = e.marker({
                    x: w.x,
                    z: w.z,
                    color: 5104127,
                    style: `goto`,
                    radius: 2.4,
                  })),
                  e.notify(
                    {
                      zh: `客人傳了照片來——導航已打開`,
                      en: `The customer sent a photo — GPS on`,
                      ja: `お客さんから写真が届いた——ナビをオン`,
                    },
                    `info`,
                    4,
                  ));
              });
            (await g3(e, { x: w.x, z: w.z, radius: 4, helpAfter: 1e6 }),
              c(),
              s?.remove(),
              e.objective(null));
          }
          ne();
          let re = Math.max(0, e.timeLeft / te);
          (e.clearTimer(),
            e.progress(null),
            (p = !1),
            d?.handle.setVisible(!1));
          let ie = H7(650 + M * 0.9 + (S ? 300 : 0)),
            ae = f >= 0.35 ? H7(650 * re * f) : 0,
            oe = Math.max(1, Math.min(5, Math.round(1 + f * 3 + re * 1.2)));
          ((_ += ie),
            (v += ae),
            (y += oe),
            (ee.anim = `talk`),
            ee.faceTo(e.px, e.pz),
            e.sfx(`money`, { ui: !0 }),
            $4(
              e,
              I7,
              oe >= 4
                ? U7[a.int(0, U7.length - 1)]
                : W7[a.int(0, W7.length - 1)],
              2.6,
            ));
          let se = `${`★`.repeat(oe)}${`☆`.repeat(5 - oe)}`;
          (e.notify(
            {
              zh: `${se}  運費 ${pt(ie)}${ae ? ` + 速度獎金 ${pt(ae)}` : ``}`,
              en: `${se}  Fee ${pt(ie)}${ae ? ` + speed bonus ${pt(ae)}` : ``}`,
              ja: `${se}  配達料 ${pt(ie)}${ae ? ` + スピードボーナス ${pt(ae)}` : ``}`,
            },
            `good`,
            4,
          ),
            (e.vars.orders = n + 1),
            (e.vars.fees = _),
            (e.vars.bonus = v),
            await e.wait(2.4),
            e.removeActor(ee),
            S &&
              n < 2 &&
              l &&
              !l.destroyed &&
              !e.inVehicle &&
              (await e.enterVehicle({
                vehicle: l,
                kinds: c,
                objective: N(
                  `走回去騎車`,
                  `Walk back to your bike`,
                  `バイクに戻る`,
                ),
              })));
        }
        d?.stop();
        let b = y / 3;
        (e.notify(
          {
            zh: `外送城：平均 ${b.toFixed(1)} 顆星。辛苦了！`,
            en: `Demae-jo: ${b.toFixed(1)} stars on average. Good work!`,
            ja: `出前城：平均 ★${b.toFixed(1)}。お疲れさまでした！`,
          },
          `good`,
          4,
        ),
          e.pass({
            reward: _,
            bonus: v,
            note: {
              zh: `三單送達！運費 ${pt(_)} + 速度獎金 ${pt(v)}`,
              en: `3 orders delivered! Fees ${pt(_)} + speed bonus ${pt(v)}`,
              ja: `三件配達完了！配達料 ${pt(_)} + スピードボーナス ${pt(v)}`,
            },
          }));
      },
    },
  ],
  K7 = `tokyo:side_taxi`,
  q7 = { x: -46.5, z: -57, heading: Math.PI },
  J7 = { x: -43.2, z: -58.5 },
  CVe = 3,
  wVe = 0.7,
  Y7 = ((e, t, n, r = 1) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }))(`乘客`, `Passenger`, `お客さん`, 1.05),
  X7 = [
    `salaryman`,
    `officeLady`,
    `businesswoman`,
    `grandma`,
    `tourist`,
    `office`,
    `suit`,
    `uncle`,
  ],
  TVe = [
    {
      id: `ginza4`,
      lm: `wako`,
      x: 61,
      z: 324,
      name: N(
        `銀座四丁目（和光前）`,
        `Ginza 4-chome (Wako)`,
        `銀座四丁目（和光前）`,
      ),
      line: N(
        `麻煩到銀座四丁目，和光前面。`,
        `Ginza 4-chome, please — in front of Wako.`,
        `銀座四丁目まで。和光の前でお願いします。`,
      ),
    },
    {
      id: `kanda`,
      x: -60,
      z: -390,
      name: N(`神田站 西口`, `Kanda Station (West Exit)`, `神田駅 西口`),
      line: N(
        `到神田站西口。今天要在高架橋下喝一杯。`,
        `Kanda Station, west exit. I'm having a drink under the tracks tonight.`,
        `神田駅の西口まで。今日はガード下で一杯やるんです。`,
      ),
    },
    {
      id: `akiba`,
      lm: `akihabara-station`,
      x: -20,
      z: -644,
      name: N(
        `秋葉原 電氣街口`,
        `Akihabara (Electric Town exit)`,
        `秋葉原 電気街口`,
      ),
      line: N(
        `到秋葉原，電氣街口那邊。`,
        `Akihabara, please — the Electric Town side.`,
        `秋葉原まで。電気街口のほうで。`,
      ),
    },
    {
      id: `nihonbashi`,
      x: 236,
      z: -196,
      name: N(`日本橋`, `Nihonbashi`, `日本橋`),
      line: N(
        `到日本橋，橋頭放我下來就好。`,
        `Nihonbashi — drop me at the foot of the bridge.`,
        `日本橋まで。橋のたもとで降ろしてください。`,
      ),
    },
    {
      id: `ueno`,
      lm: `ueno-station`,
      x: -110,
      z: -1180,
      name: N(`上野站`, `Ueno Station`, `上野駅`),
      line: N(
        `到上野站。……熊貓已經不在了呢。`,
        `Ueno Station. …The pandas are gone now, aren’t they.`,
        `上野駅まで。……パンダ、もういないんですよねえ。`,
      ),
    },
    {
      id: `kabukiza`,
      lm: `kabukiza`,
      x: 220,
      z: 370,
      name: N(`歌舞伎座`, `Kabuki-za`, `歌舞伎座`),
      line: N(
        `到歌舞伎座。趕得上四點那一幕嗎？`,
        `The Kabuki-za. Will I make the four o’clock act?`,
        `歌舞伎座まで。四時の幕に間に合いますか？`,
      ),
    },
    {
      id: `tsukiji`,
      lm: `tsukiji-outer-market`,
      x: 388,
      z: 450,
      name: N(`築地場外市場`, `Tsukiji Outer Market`, `築地場外市場`),
      line: N(
        `到築地場外。想去吃玉子燒。`,
        `Tsukiji Outer Market. I’m after some tamagoyaki.`,
        `築地の場外まで。玉子焼きが食べたくて。`,
      ),
    },
    {
      id: `shimbashi`,
      lm: `shimbashi-sl`,
      x: -167,
      z: 570,
      name: N(
        `新橋站 SL廣場`,
        `Shimbashi Station (SL Square)`,
        `新橋駅 SL広場`,
      ),
      line: N(
        `到新橋的 SL 廣場。跟同事約好了。`,
        `Shimbashi, the SL Square. I'm meeting colleagues.`,
        `新橋のSL広場まで。同僚と待ち合わせなんです。`,
      ),
    },
    {
      id: `forum`,
      lm: `intl-forum`,
      x: -135,
      z: 185,
      name: N(
        `有樂町 國際論壇`,
        `Tokyo International Forum`,
        `有楽町 国際フォーラム`,
      ),
      line: N(
        `到有樂町的國際論壇。有場研討會。`,
        `The International Forum in Yurakucho. There’s a conference.`,
        `有楽町の国際フォーラムまで。学会なんです。`,
      ),
    },
    {
      id: `myojin`,
      lm: `kanda-myojin`,
      x: -283,
      z: -731,
      name: N(`神田明神`, `Kanda Myojin`, `神田明神`),
      line: N(
        `到神田明神。孫子要考試，去買御守。`,
        `Kanda Myojin. My grandson has exams — I’m buying a charm.`,
        `神田明神まで。孫が受験でね、お守りを買いに。`,
      ),
    },
    {
      id: `stlukes`,
      lm: `st-lukes`,
      x: 498,
      z: 293,
      name: N(`聖路加醫院`, `St. Luke's Hospital`, `聖路加病院`),
      line: N(
        `到聖路加醫院。去探病的。`,
        `St. Luke's Hospital, please. I'm visiting someone.`,
        `聖路加病院まで。お見舞いなんです。`,
      ),
    },
  ],
  Z7 = {
    id: `station`,
    x: q7.x,
    z: q7.z,
    name: N(
      `東京站 丸之內口`,
      `Tokyo Station (Marunouchi side)`,
      `東京駅 丸の内口`,
    ),
    line: N(
      `到東京站丸之內口。要趕新幹線，拜託了！`,
      `Tokyo Station, Marunouchi side. I have a Shinkansen to catch — please!`,
      `東京駅の丸の内口まで。新幹線に乗るんです、お願いします！`,
    ),
  },
  Q7 = [
    N(
      `今天真熱鬧呢。是有什麼活動嗎？`,
      `Busy out there today. Is something on?`,
      `今日は人が多いですねえ。何かあるのかな。`,
    ),
    N(
      `最近外國觀光客好多，司機也辛苦了。`,
      `So many tourists these days — must keep you busy.`,
      `最近は外国のお客さんが多くて、運転手さんも大変でしょう。`,
    ),
    N(
      `這輛車好乾淨。座椅套是白色的耶。`,
      `Such a clean cab. White seat covers, too.`,
      `きれいな車ですねえ。シートカバーが真っ白。`,
    ),
    N(
      `啊，櫻花差不多要謝了吧。`,
      `Ah, the cherry blossoms must be nearly over.`,
      `あ、桜ももう終わりかなあ。`,
    ),
    N(
      `我以前也住過這附近喔。變了好多。`,
      `I used to live round here, you know. It’s changed so much.`,
      `昔、この辺に住んでたんですよ。ずいぶん変わったなあ。`,
    ),
  ],
  $7 = [
    N(
      `司機……開慢一點好嗎？`,
      `Driver… could you slow down a little?`,
      `運転手さん……もう少しゆっくりで。`,
    ),
    N(
      `哇！嚇我一跳。`,
      `Whoa! You gave me a fright.`,
      `うわっ！びっくりした。`,
    ),
    N(
      `……有點暈車了。`,
      `…I’m getting a bit carsick.`,
      `……ちょっと酔ってきました。`,
    ),
  ],
  EVe = N(
    `司機，是不是有點太快了……`,
    `Driver, isn’t this a bit fast…?`,
    `運転手さん、ちょっと飛ばしすぎじゃ……`,
  ),
  e9 = (e) => 500 + 100 * Math.ceil(Math.max(0, e - 1096) / 255),
  t9 = (e) => `¥${e.toLocaleString(`en-US`)}`,
  DVe = [
    {
      id: K7,
      title: { zh: `東京計程車`, en: `Tokyo Taxi`, ja: `東京タクシー` },
      description: {
        zh: `源さん的腰又痛了，把計程車借給你跑一班。從東京站的計程車招呼站載客，跳表收費（起跳 ¥500）。四位客人，開得平穩才拿得到無事故獎金——日本沒有小費。`,
        en: `Gen-san's back is playing up, so he lends you his cab for a shift. Pick up fares at the Tokyo Station rank and run the meter (¥500 flag fall). Four passengers; drive smoothly for his no-accident bonus — no tips in Japan.`,
        ja: `源さんの腰がまた痛むらしい。一晩タクシーを借りて、東京駅のタクシー乗り場から客を乗せる。メーターは初乗り500円。客は四人、丁寧な運転なら無事故手当（チップはなし）。`,
      },
      category: `job`,
      reward: 3e3,
      repeatable: !0,
      icon: `taxi`,
      glyph: `車`,
      blip: `taxi`,
      color: 5939455,
      order: 330,
      giver: { outfit: `v:t3-gen`, dx: -0.2, dz: 2.4, anim: `idle` },
      giverName: { zh: Q.gen.name.zh, en: Q.gen.name.en, ja: Q.gen.name.ja },
      start() {
        return (j4.gen(), { x: J7.x, z: J7.z, heading: Math.PI / 2 });
      },
      async run(e) {
        let t = e.ctx,
          n = t.plan,
          r = n.side ?? -1,
          i = Z4(t),
          a = new ie(ge(K7, t.time.frame, Math.round(t.time.real * 10)));
        e.step = `rank`;
        let o = n3(e, Q.gen, j4.gen, J7.x - 0.2, J7.z + 2.4, 0);
        (o.faceTo(e.px, e.pz), (o.look = t.player.position), (o.anim = `talk`));
        let s = e.vehicle(`cab`, q7.x, q7.z, q7.heading, { seed: 0.31 });
        (await $(
          e,
          Q.gen,
          N(
            `喔，你來啦。今晚我的腰不聽使喚。`,
            `Oh, you came. My back won't listen to me tonight.`,
            `よう、来たか。今夜はおれの腰が言うことを聞かなくてな。`,
          ),
        ),
          await $(
            e,
            Q.gen,
            N(
              `車借你跑一班。從這裡載客，送到他們要去的地方就好。`,
              `Take my cab for a shift. Pick them up here and take them where they want to go.`,
              `一晩、車を貸してやる。ここで客を乗せて、行き先まで送るだけだ。`,
            ),
          ),
          await $(
            e,
            Q.gen,
            N(
              `跳表自己會跑：起跳五百圓，之後每兩百五十五公尺一百圓。`,
              `The meter runs itself: ¥500 to start, then ¥100 every 255 metres.`,
              `メーターは勝手に回る。初乗り五百円、あとは二百五十五メートルごとに百円だ。`,
            ),
          ),
          await $(
            e,
            Q.gen,
            N(
              `後門是自動的，別讓客人自己開關。日本的客人不給小費——平穩的駕駛就是最好的小費。`,
              `The back door is automatic — don't let the passengers open or shut it. Japanese passengers don't tip: a smooth ride is the tip.`,
              `後ろのドアは自動だ。客に開け閉めさせるなよ。日本の客はチップなんか置いてかねえ。丁寧な運転が一番のチップだ。`,
            ),
          ),
          await $(
            e,
            Q.gen,
            N(
              `營收的七成歸你。……車刮傷的話，全部歸我。`,
              `Seventy per cent of the takings are yours. …Scratch the car, and it’s all mine.`,
              `売上の七割はお前の取り分だ。……傷つけたら、全部おれの取り分だぞ。`,
            ),
          ),
          (o.anim = `point`));
        let c = s;
        (s &&
          ((c = await e.enterVehicle({
            vehicle: s,
            kinds: [`cab`],
            objective: N(
              `坐上源さん的計程車`,
              `Get in Gen-san's cab`,
              `源さんのタクシーに乗る`,
            ),
          })),
          e.guardVehicle(s, {
            zh: `源さん的計程車壞了`,
            en: `Gen-san's cab was wrecked`,
            ja: `源さんのタクシーが壊れた`,
          })),
          (o.anim = `idle`));
        let l = 0,
          u = -1,
          d = { zh: ``, en: ``, ja: `` };
        e.every((t) => {
          if (
            e.step === `return` ||
            (e.inVehicle && (!c || e.playerVehicle === c))
          ) {
            l = 0;
            return;
          }
          l += t;
          let n = Math.max(0, Math.ceil(30 - l));
          (n !== u &&
            ((u = n),
            (d.zh = `回到計程車上（${n}）`),
            (d.en = `Get back in the cab (${n})`),
            (d.ja = `タクシーに戻る（${n}）`)),
            l > 1.5 && e.hud.prompt(d),
            l > 30 &&
              e.fail({
                zh: `你丟下了源さん的計程車`,
                en: `You abandoned Gen-san's cab`,
                ja: `源さんのタクシーを放り出した`,
              }));
        });
        let f = !1,
          p = 1,
          m = 0;
        (Bt(e, (t, n) => {
          f &&
            ((p = Math.max(0, p - (n === `crash` ? t * 0.4 : t * 0.6))),
            m <= 0 &&
              (n === `crash` || p < 0.6) &&
              ((m = 6), $4(e, Y7, $7[a.int(0, $7.length - 1)], 2.2)));
        }),
          e.every((t) => {
            ((m -= t),
              f &&
                e.playerSpeed > 19 &&
                ((p = Math.max(0, p - 0.05 * t)),
                m <= 0 && ((m = 7), $4(e, Y7, EVe, 2.2))));
          }));
        let h = { zh: `乘坐舒適度`, en: `Ride comfort`, ja: `乗り心地` },
          g = 0,
          _ = 0,
          v = 0,
          y = 0,
          b = new Set(),
          x = null;
        for (let o = 0; o < 4; o++) {
          e.step = `fare${o + 1}`;
          let s, c;
          if (o === 0) {
            s = { x: q7.x, z: q7.z + 1, heading: q7.heading };
            let e = P4(t, -43.6, -55.5, 3);
            c = { x: e.x, z: e.z, facing: -Math.PI / 2 };
          } else {
            let t = $e(n, e.px + 150, e.pz);
            for (let r = 0; r < 40; r++) {
              let r = a.range(0, Math.PI * 2),
                i = a.range(140, 340),
                o = $e(
                  n,
                  Math.max(-470, Math.min(520, e.px + Math.sin(r) * i)),
                  Math.max(-1250, Math.min(780, e.pz - Math.cos(r) * i)),
                );
              if (!o.road || n.surfaceAt(o.x, o.z) !== `sidewalk`) continue;
              let s = Math.hypot(o.x - e.px, o.z - e.pz);
              if (!(s < 100 || s > 440)) {
                t = o;
                break;
              }
            }
            ((s = st(t.road, t.x, t.z, 1.7, r)),
              (c = { x: t.x, z: t.z, facing: t.facing }));
          }
          let l = X7[a.int(0, X7.length - 1)];
          ((x = e.actor(l, c.x, c.z, c.facing)),
            (x.anim = o === 0 ? `idle` : `hail`),
            (x.look = t.player.position),
            e.notify(
              o === 0
                ? {
                    zh: `第 1/4 位客人在招呼站等車`,
                    en: `Fare 1/4 is waiting at the rank`,
                    ja: `一人目のお客さんが乗り場で待っている`,
                  }
                : {
                    zh: `第 ${o + 1}/4 位客人在左側路邊招手`,
                    en: `Fare ${o + 1}/4 is hailing on the left kerb`,
                    ja: `${o + 1}人目のお客さんが左の歩道で手を挙げている`,
                  },
              `mission`,
              3.5,
            ),
            o > 0
              ? await e.goto(s, {
                  objective: N(
                    `靠左停到招手的客人旁邊`,
                    `Pull in on the left beside the waving passenger`,
                    `手を挙げているお客さんの横に左から寄せる`,
                  ),
                  style: `drive`,
                  radius: 7.5,
                  label: { zh: Y7.name.zh, en: Y7.name.en, ja: Y7.name.ja },
                  blipIcon: `taxi`,
                  needStop: !0,
                  inVehicle: !0,
                })
              : e.dist(s.x, s.z) > 8 &&
                (await e.goto(s, {
                  objective: N(
                    `開回招呼站`,
                    `Drive back to the rank`,
                    `乗り場に戻る`,
                  ),
                  style: `drive`,
                  radius: 7.5,
                  needStop: !0,
                  inVehicle: !0,
                })));
          let u = e.playerVehicle;
          if (
            (e.sfx(`car_door`, {
              x: u ? u.body.x : e.px,
              y: 1,
              z: u ? u.body.z : e.pz,
            }),
            e.notify(
              N(
                `（後門自動打開了）`,
                `(the back door swings open by itself)`,
                `（後ろのドアが自動で開く）`,
              ),
              `info`,
              2.2,
            ),
            e.objective(
              N(
                `等客人坐進後座`,
                `Wait for the passenger to get in`,
                `お客さんが乗るのを待つ`,
              ),
            ),
            (x.anim = `idle`),
            u)
          ) {
            let e = -Math.cos(u.heading),
              t = -Math.sin(u.heading);
            x.moveTo(u.body.x + e * 1.2, u.body.z + t * 1.2, 1.6);
          }
          let d = 0,
            m = x;
          (await e.until(
            (e) =>
              (d += e) > 3.2 ||
              (!!u &&
                m.distTo(
                  u.body.x + -Math.cos(u.heading) * 1.2,
                  u.body.z + -Math.sin(u.heading) * 1.2,
                ) < 0.7),
          ),
            e.removeActor(x),
            (x = null),
            e.sfx(`car_door`, { ui: !0, volume: 0.6 }));
          let S;
          if (o === 3) S = Z7;
          else {
            let r = TVe.filter((e) => !b.has(e.id)).map((r) => {
                let i =
                  r.lm && n.landmark(r.lm) ? Nt(t, r.lm, 4) : $e(n, r.x, r.z);
                return { d: r, dd: Math.hypot(i.x - e.px, i.z - e.pz) };
              }),
              i = r.filter((e) => e.dd > 280 && e.dd < 1250),
              o = i.length ? i : r;
            (o.sort((e, t) => Math.abs(e.dd - 650) - Math.abs(t.dd - 650)),
              (S = o[a.int(0, Math.min(3, o.length) - 1)].d));
          }
          b.add(S.id);
          let C;
          if (S === Z7) C = { x: q7.x, z: q7.z + 1, heading: q7.heading };
          else {
            let e = S.lm && n.landmark(S.lm) ? Nt(t, S.lm, 4) : $e(n, S.x, S.z);
            C = st(e.road, e.x, e.z, 1.7, r);
          }
          (L4(t, C.x, C.z), await $(e, Y7, S.line));
          let w = 0;
          if (o === 1) {
            await $(
              e,
              Y7,
              N(
                `司機，你不是日本人吧？從哪裡來的？`,
                `Driver, you're not Japanese, are you? Where are you from?`,
                `運転手さん、日本の方じゃないですよね？どちらから？`,
              ),
            );
            let t = await m3(e, {
              prompt: N(
                `司機，你從哪裡來的？`,
                `Where are you from, driver?`,
                `どちらから？`,
              ),
              options: [
                {
                  text: N(
                    `臺灣。今天幫朋友代班。`,
                    `Taiwan. I'm covering a friend's shift tonight.`,
                    `台湾です。今日は友達の代わりです。`,
                  ),
                  score: 1,
                },
                {
                  text: N(
                    `（只是點頭微笑）`,
                    `(just nod and smile)`,
                    `（うなずいて微笑む）`,
                  ),
                  score: 0,
                },
                {
                  text: N(
                    `開車的時候請別跟我說話。`,
                    `Please don't talk to me while I'm driving.`,
                    `運転中は話しかけないでください。`,
                  ),
                  score: -1,
                },
              ],
              secs: 10,
            });
            t.score > 0
              ? ((w = 0.1),
                await $(
                  e,
                  Y7,
                  N(
                    `臺灣！去年去過。小籠包超好吃的！`,
                    `Taiwan! I went last year. The xiaolongbao were amazing!`,
                    `台湾！去年行きました。小籠包、最高でした！`,
                  ),
                ))
              : t.score < 0 &&
                ((w = -0.15),
                await $(
                  e,
                  Y7,
                  N(`……啊，抱歉。`, `…Oh. Sorry.`, `……あ、すみません。`),
                ));
          }
          (o === 2 &&
            e3(
              e,
              Q.gen,
              N(
                `（無線）怎麼樣？東京的客人喜歡安靜平穩的駕駛。紅燈前慢慢停。`,
                `(radio) How is it going? Tokyo passengers like it quiet and smooth. Ease into the red lights.`,
                `（無線）どうだ？東京の客は静かで丁寧な運転が好きだ。赤信号の手前はじわっと止めろよ。`,
              ),
            ),
            (f = !0),
            (p = Math.min(1, 1 + w)));
          let T = 0,
            E = e.px,
            D = e.pz,
            O = -1,
            k = 0,
            A = !1,
            j = S.name,
            ee = e.every((t) => {
              ((T += Math.hypot(e.px - E, e.pz - D) * CVe),
                (E = e.px),
                (D = e.pz),
                e.progress(h, p));
              let n = e9(T);
              (n !== O &&
                ((O = n),
                e.objective({
                  zh: `載客到 ${j.zh}　跳表 ${t9(n)}`,
                  en: `Drive to ${j.en}   Meter ${t9(n)}`,
                  ja: `${j.ja}まで　メーター ${t9(n)}`,
                })),
                !A &&
                  (k += t) > 14 &&
                  ((A = !0), $4(e, Y7, Q7[a.int(0, Q7.length - 1)], 3.2)));
            });
          e.waypoint({ x: C.x, z: C.z }, j);
          let M = e.marker({
            x: C.x,
            z: C.z,
            color: 16765517,
            style: `drive`,
            radius: 7,
          });
          (e.blip(`taxi-dest`, {
            x: C.x,
            z: C.z,
            icon: `taxi`,
            label: j,
            clampToEdge: !0,
            pulse: !0,
            color: `#ffd24d`,
          }),
            (e.waitFor = { kind: `goto`, x: C.x, z: C.z, inVehicle: !0 }));
          let te = await e.first({
            arrive: () =>
              e.dist(C.x, C.z) < 9 && e.playerSpeed < 3 && e.inVehicle,
            bail: () => p <= 0,
          });
          (ee(),
            (e.waitFor = null),
            e.waypoint(null),
            M.remove(),
            e.removeBlip(`taxi-dest`),
            (f = !1),
            e.progress(null));
          let ne = e9(T);
          ((g += ne), e.sfx(`money`, { ui: !0 }));
          let re = e.playerVehicle,
            ie = null;
          if (re) {
            let r = -Math.cos(re.heading),
              i = -Math.sin(re.heading),
              a = P4(t, re.body.x + r * 1.5, re.body.z + i * 1.5, 2, !0);
            ie = e.actor(l, a.x, a.z, re.heading + Math.PI / 2);
            let o = $e(n, a.x, a.z);
            (ie.moveTo(
              o.x + Math.sin(re.heading) * 3,
              o.z - Math.cos(re.heading) * 3,
              1.4,
            ),
              e.sfx(`car_door`, { x: re.body.x, y: 1, z: re.body.z }));
          }
          if (te === `bail`) {
            if (
              (y++,
              v++,
              $4(
                e,
                Y7,
                N(
                  `請在這裡讓我下車……錢我付。`,
                  `Let me out here, please… I'll pay.`,
                  `ここで降ります……お金は払いますから。`,
                ),
                2.6,
              ),
              e.notify(
                {
                  zh: `★☆☆☆☆  客人提前下車了　車資 ${t9(ne)}`,
                  en: `★☆☆☆☆  The passenger got out early   Fare ${t9(ne)}`,
                  ja: `★☆☆☆☆  お客さんが途中で降りた　運賃 ${t9(ne)}`,
                },
                `bad`,
                3.5,
              ),
              y >= 2)
            ) {
              (await e.wait(2),
                e.fail({
                  zh: `太多客人被你嚇得中途下車了`,
                  en: `Too many passengers got out early`,
                  ja: `途中で降りる客が多すぎた`,
                }));
              return;
            }
          } else {
            (v++, (_ += p));
            let t = Math.max(1, Math.min(5, Math.round(1 + p * 4)));
            $4(
              e,
              Y7,
              p > 0.7
                ? N(
                    `開得真穩，謝謝你。`,
                    `Such a smooth ride — thank you.`,
                    `丁寧な運転、ありがとうございました。`,
                  )
                : N(`……終於到了。`, `…Finally.`, `……やっと着いた。`),
              2.4,
            );
            let n = `${`★`.repeat(t)}${`☆`.repeat(5 - t)}`;
            e.notify(
              {
                zh: `${n}  車資 ${t9(ne)}`,
                en: `${n}  Fare ${t9(ne)}`,
                ja: `${n}  運賃 ${t9(ne)}`,
              },
              `good`,
              3.5,
            );
          }
          ((e.vars.takings = g),
            (e.vars.done = o + 1),
            await e.wait(1.4),
            await $(
              e,
              i,
              N(
                `謝謝搭乘！（日文）ありがとうございました！`,
                `Thank you for riding! (in Japanese) Arigatō gozaimashita!`,
                `ありがとうございました！`,
              ),
              1.8,
            ),
            ie && e.removeActor(ie));
        }
        e.step = `return`;
        let S = Math.round((g * wVe) / 10) * 10,
          C = v ? _ / v : 0,
          w =
            Math.round((C * 1e3) / 100) *
            100 *
            (c && (c.health === void 0 || c.health > 600) ? 1 : 0);
        (e.inVehicle &&
          (await e.exitVehicle(
            N(
              `下車，把鑰匙還給源さん`,
              `Get out and give Gen-san his keys back`,
              `降りて、源さんにキーを返す`,
            ),
          )),
          o.faceTo(e.px, e.pz),
          (o.anim = `talk`),
          await $(
            e,
            Q.gen,
            C > 0.7
              ? N(
                  `喔，回來啦。……客人下車時都在笑。開得好。`,
                  `There you are. …Every one of them got out smiling. Good driving.`,
                  `おう、おかえり。……客がみんな笑って降りてった。いい運転だ。`,
                )
              : N(
                  `回來啦。……下次煞車溫柔一點。`,
                  `You're back. …Go gentler on the brakes next time.`,
                  `戻ったか。……次はブレーキをもう少し優しくな。`,
                ),
          ),
          await $(
            e,
            Q.gen,
            N(
              `今晚營收 ${t9(g)}。七成是你的。`,
              `Tonight's takings: ${t9(g)}. Seventy per cent is yours.`,
              `今夜の売上は${t9(g)}。七割はお前のだ。`,
            ),
          ),
          e.pass({
            reward: S,
            bonus: w,
            note: {
              zh: `營收 ${pt(g)} 的七成 ${pt(S)}${w ? ` + 無事故獎金 ${pt(w)}` : ``}`,
              en: `70% of ${pt(g)} takings: ${pt(S)}${w ? ` + no-accident bonus ${pt(w)}` : ``}`,
              ja: `売上 ${pt(g)} の七割 ${pt(S)}${w ? ` + 無事故手当 ${pt(w)}` : ``}`,
            },
          }));
      },
    },
  ],
  n9 = 16747224,
  r9 = {
    name: {
      zh: `旅遊部落客 柚子`,
      en: `Yuzu (travel blogger)`,
      ja: `旅ブロガーのゆず`,
    },
    voice: `ja`,
    pitch: 1.22,
  },
  i9 = () =>
    jt(`influencer`, `tk-side-photo-yuzu`, {
      height: 1.6,
      face: { smile: 0.6 },
      hair: { style: `bob`, color: 4861474 },
      top: { style: `blouse`, color: 16774368 },
      outer: { style: `cardigan`, color: 15902298, color2: 14190396 },
      bottom: { style: `longskirt`, color: 3955322 },
      shoes: { style: `sneaker`, color: 16053492, color2: 13684944 },
      acc: Ot({ kind: `shoulderBag`, color: 9067066 }, `phone`, `glasses`),
    }),
  a9 = [
    {
      name: N(
        `東京車站丸之內站舍`,
        `Tokyo Station Marunouchi Building`,
        `東京駅丸の内駅舎`,
      ),
      x: -66,
      z: 0,
      tx: -36,
      ty: 9,
      tz: 0,
      cam: [-72, 1.8, 0],
      look: [-36, 12, 0],
      range: 90,
      caption: N(
        `#東京站丸之內站舍 #1914 #紅磚`,
        `#TokyoStation #1914 #redbrick`,
        `#東京駅丸の内駅舎 #1914 #赤レンガ`,
      ),
      note: N(
        `（LINE）1914 年落成喔。戰爭時圓頂燒掉了，2012 年才終於恢復原貌。`,
        `(LINE) Built in 1914. The domes burned in the war — it only got its old look back in 2012.`,
        `（LINE）1914年生まれなんです。戦争でドームが焼けて、2012年にやっと元の姿に戻ったの。`,
      ),
    },
    {
      name: N(`二重橋`, `Nijubashi`, `二重橋`),
      x: -333,
      z: 165,
      tx: -466,
      ty: 5,
      tz: 160,
      cam: [-418, 5, 170],
      look: [-472, 5, 158],
      range: 190,
      caption: N(
        `#二重橋 #皇居 #隔著護城河`,
        `#Nijubashi #ImperialPalace #acrossthemoat`,
        `#二重橋 #皇居 #お堀越し`,
      ),
      note: N(
        `（LINE）其實有一說，裡面那座鐵橋才是真正的「二重橋」喔。隔著護城河用望遠拍，剛剛好！`,
        `(LINE) Some say the iron bridge behind is the real 'Nijubashi'. A telephoto shot across the moat — perfect!`,
        `（LINE）奥の鉄橋が本当の「二重橋」って説もあるんですよ。お堀越しの望遠、ばっちり！`,
      ),
    },
    {
      name: N(`和光鐘樓`, `The Wako clock tower`, `和光の時計塔`),
      x: 93,
      z: 374,
      tx: 51,
      ty: 20,
      tz: 330,
      cam: [93, 1.8, 374],
      look: [51, 22, 330],
      range: 110,
      caption: N(
        `#銀座四丁目 #和光 #鐘樓`,
        `#Ginza4chome #Wako #clocktower`,
        `#銀座四丁目 #和光 #時計塔`,
      ),
      note: N(
        `（LINE）銀座約碰面，就約在這座鐘下面！整點還會敲鐘喔。`,
        `(LINE) In Ginza, you meet under this clock! It chimes on the hour.`,
        `（LINE）銀座の待ち合わせといえば、この時計の下！正時には鐘が鳴りますよ。`,
      ),
    },
    {
      name: N(`歌舞伎座`, `Kabukiza`, `歌舞伎座`),
      x: 219.5,
      z: 344,
      tx: 219.5,
      ty: 8,
      tz: 385,
      cam: [219.5, 1.8, 344],
      look: [219.5, 10, 385],
      range: 90,
      caption: N(
        `#歌舞伎座 #唐破風 #東銀座`,
        `#Kabukiza #karahafu #HigashiGinza`,
        `#歌舞伎座 #唐破風 #東銀座`,
      ),
      note: N(
        `（LINE）重點是正面的唐破風屋頂！還有只看一幕的「幕見席」喔。`,
        `(LINE) The curved karahafu gable is the star! You can even buy a ticket for just one act.`,
        `（LINE）正面の唐破風がポイント！一幕だけ観られる「幕見席」もあるんですよ。`,
      ),
    },
    {
      name: N(`日本橋的麒麟`, `The kirin of Nihonbashi`, `日本橋の麒麟`),
      x: 236.5,
      z: -157,
      tx: 232.5,
      ty: 3.5,
      tz: -180,
      cam: [235.6, 1.8, -160.5],
      look: [232.5, 4.5, -180],
      range: 60,
      caption: N(
        `#日本橋 #麒麟 #道路元標`,
        `#Nihonbashi #kirin #kilometrezero`,
        `#日本橋 #麒麟 #道路元標`,
      ),
      note: N(
        `（LINE）橋中央有「道路元標」，日本的路都從這裡開始。麒麟的翅膀，代表從這裡飛向全國喔。`,
        `(LINE) Japan's kilometre zero is in the middle of the bridge. The kirin's wings mean flying out from here to the whole country.`,
        `（LINE）橋の真ん中に道路元標——日本の道は全部ここから始まるんです。麒麟の羽は、ここから全国へ飛び立つって意味なんですって。`,
      ),
    },
  ],
  OVe = N(
    `把地標放進框裡，按 E／點畫面拍照`,
    `Get the landmark in the frame — E / tap to shoot`,
    `ランドマークを枠に入れて、E／タップで撮影`,
  ),
  kVe = [
    N(
      `（LINE）哇，這張超讚！就用它當封面！`,
      `(LINE) Wow, this one's amazing! That's the cover!`,
      `（LINE）わっ、これ最高！トップ画像決定！`,
    ),
    N(
      `（LINE）構圖完美！你該不會是專業的吧？`,
      `(LINE) Perfect framing! Are you secretly a pro?`,
      `（LINE）構図カンペキ！もしかしてプロですか？`,
    ),
  ],
  AVe = N(
    `（LINE）不錯耶！調亮一點就完美了。`,
    `(LINE) Nice! Brighten it a little and it is perfect.`,
    `（LINE）いい感じ！ちょっと明るくすれば完璧！`,
  ),
  jVe = N(
    `（LINE）咦，有點歪？……沒關係，這叫風格！`,
    `(LINE) Huh, a bit crooked? …Never mind, let's call it style!`,
    `（LINE）あれ、ちょっと傾いてる？……まあ、味ってことで！`,
  ),
  o9 = new j(),
  s9 = new j(),
  MVe = new j();
