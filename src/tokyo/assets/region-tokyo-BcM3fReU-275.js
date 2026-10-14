// tokyo/assets/region-tokyo-BcM3fReU 275 — math
// Lines 106524-107817 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var j3 = F(
    `粉紅紙袋（女僕咖啡廳的）`,
    `Pink paper bag (a maid café’s)`,
    `ピンクの紙袋（メイドカフェの）`,
  ),
  M3 = F(`黑外套？`, `Black jacket?`, `黒ジャケット？`),
  N3 = F(`淺色牛仔褲`, `Light jeans`, `薄いジーンズ`),
  P3 = F(`咖啡色頭髮`, `Brown hair`, `茶髪`),
  F3 = [
    {
      t: 5,
      handle: `ねこ大佐`,
      chat: F(
        `深色外套的男生……這條街上到處都是啊www`,
        `A guy in a dark jacket… half the street lol`,
        `暗い色のジャケットの男……この通りそんなのばっかw`,
      ),
    },
    {
      t: 13,
      handle: `ラジ館民`,
      chat: F(
        `剛剛在後街的女僕咖啡廳前看到一個，提著店裡的粉紅紙袋`,
        `Saw one outside the maid cafés on the back street, carrying a pink café bag`,
        `さっき裏通りのメイドカフェ前にいた。店のピンクの紙袋持ってた`,
      ),
      pin: [`bag`, j3, `maybe`],
    },
    {
      t: 21,
      miko: F(
        `（耳機）粉紅紙袋……我們店的袋子。上禮拜她的訊號就是從店附近開始動的。這個我信。`,
        `(earpiece) A pink paper bag… our café's. Her signal started moving from near the café last week. I believe that one.`,
        `（イヤホン）ピンクの紙袋……うちの店のだ。先週、電波が動き出したのも店の近くから。これは信じる。`,
      ),
      pin: [`bag`, j3, `ok`],
    },
    {
      t: 31,
      handle: `名無しの通行人`,
      chat: F(
        `是穿黑外套那個！我認得他，絕對是他`,
        `It's the one in the black jacket! I know him, 100%`,
        `黒ジャケットのやつだよ！知ってる、絶対あいつ`,
      ),
      pin: [`black`, M3, `maybe`],
    },
    {
      t: 46,
      miko: F(
        `（耳機）說「黑外套」的那個帳號……今天才註冊的，留言全是亂講的。別信。`,
        `(earpiece) That "black jacket" account… it was made today, and everything it posts is made up. Ignore it.`,
        `（イヤホン）「黒ジャケット」って言ったアカウント……今日できたばっかで、書き込み全部デタラメ。信じないで。`,
      ),
      pin: [`black`, M3, `bad`],
    },
    {
      t: 57,
      handle: `sora_88`,
      chat: F(
        `我在扭蛋會館排在他後面！淺色的牛仔褲`,
        `I queued behind him at the gacha hall! Light-wash jeans`,
        `ガチャ会館で後ろに並んでた！薄い色のジーンズ`,
      ),
      pin: [`light`, N3, `maybe`],
    },
    {
      t: 65,
      miko: F(
        `（耳機）sora_88 是老觀眾了，每次都很準。`,
        `(earpiece) sora_88's been watching for years — always on the money.`,
        `（イヤホン）sora_88は古参さん。いつも正確だよ。`,
      ),
      pin: [`light`, N3, `ok`],
    },
    {
      t: 79,
      handle: `みかん`,
      chat: F(
        `他一直在看手機！`,
        `He keeps checking his phone!`,
        `ずっとスマホ見てる！`,
      ),
    },
    {
      t: 84,
      miko: F(
        `（耳機）……這裡是秋葉原耶，誰不在看手機。`,
        `(earpiece) …This is Akihabara. Everyone is checking their phone.`,
        `（イヤホン）……秋葉原だよ。みんなスマホ見てるって。`,
      ),
    },
    {
      t: 98,
      handle: `くまお`,
      chat: F(
        `他剛從我旁邊經過，咖啡色頭髮，染的`,
        `He just walked past me — brown hair, dyed`,
        `今横通った。茶髪だった`,
      ),
      pin: [`brown`, P3, `maybe`],
    },
  ],
  I3 = [
    F(
      `今天的步行者天國人好多`,
      `So many people at the hokoten today`,
      `今日のホコ天人多すぎ`,
    ),
    F(`ミコ在找誰？`, `Who is Miko looking for?`, `ミコ誰探してるの？`),
    F(`這是什麼企劃`, `What kind of stream is this`, `なんの企画これ`),
    F(
      `訊號格數好刺激`,
      `The signal bars are so tense`,
      `電波のバー、ドキドキする`,
    ),
    F(`右邊右邊！`, `Right, right!`, `右！右！`),
  ],
  L3 = [
    F(`……蛤？有什麼事嗎。`, `…Huh? Can I help you?`, `……は？なんですか。`),
    F(
      `在拍什麼？別拍我啦。`,
      `What are you filming? Leave me out of it.`,
      `撮影？勘弁してくださいよ。`,
    ),
    F(`認錯人了吧。`, `You've got the wrong guy.`, `人違いじゃないですか。`),
  ],
  R3 = C2(`tokyo:s2_stream`, {
    description: F(
      `追蹤器說小晴的手機就在步行者天國——在一個穿深色外套、背後背包的人身上。可是這樣的人有好幾個。ミコ開直播，觀眾幫你找。`,
      `The tracker says Hsiao-Ching's phone is on the pedestrian paradise — on a man in a dark jacket with a backpack. There are several of those. Miko streams; her viewers help you look.`,
    ),
    glyph: `配`,
    giver: { outfit: `v:t3-miko`, dx: 1.3, dz: 0.4, anim: `phone` },
    giverName: Q.miko,
    noPolice: !0,
    start: () => {
      let e = C3();
      return { x: e.x + 9, z: e.z + 8, heading: 0 };
    },
    async run(e) {
      let t = e.ctx,
        n = C3(),
        r = await B0(e);
      (await U0(e, { window: [13, 17], at: n }), E0(t, w3.x, w3.z));
      let i = G0(t),
        a = new ne(P(`tokyo:s2_stream`)),
        o = Z0(e, Q.miko, y0.miko, e.px + 1.2, e.pz + 0.4, 0);
      o.anim = `phone`;
      let s = r.from >= 1 && r.from < 3 ? X2(e) : null,
        c = !1,
        l = null;
      if (r.from < 1) {
        let c = [n.z - 44, n.z, n.z + 36].map((e) => C0(t, n.x + 1, e, 5, !0)),
          u = E3.map((n, r) => {
            let i = c[D3[r]],
              o = C0(
                t,
                i.x + (r % 2 ? 2.5 : -2.5),
                i.z + (r % 2 ? 1.5 : -1.5),
                4,
                !0,
              ),
              s = e.actor(k3(r)(), o.x, o.z, a.range(0, Math.PI * 2)),
              l = n.bag ? e.prop(`foodbox`, o.x, -1e3, o.z, 0, 0.5) : null;
            return {
              a: s,
              tr: n,
              g: D3[r],
              tx: o.x,
              tz: o.z,
              rest: a.range(0.5, 3),
              held: !1,
              stuck: P0(s, 3),
              bag: l,
            };
          });
        ((l = u[0].a), l.setNames(K0(T3)));
        let d = e.crowd(n.x, n.z - 4, 34, 18, [
          `tourist`,
          `student`,
          `office`,
          `auntie`,
        ]);
        (await m2(e, async (e) => {
          (await e.say(
            Q.miko,
            F(
              `追蹤器說，小晴的手機就在這條街上。我們只知道店裡的熟客看到的：深色外套、背後背包的男生。`,
              `The tracker says Hsiao-Ching's phone is on this street. All we have is what a café regular saw: a guy in a dark jacket with a backpack.`,
              `追跡機だと、小晴ちゃんの携帯はこの通りにある。分かってるのは、お店の常連さんが見た「暗い色のジャケットにリュックの男」だけ。`,
            ),
            o,
          ),
            await e.say(
              Q.miko,
              F(
                `……可是你看，這種打扮的人至少有六個。我開直播，讓觀眾一起找。訊號格數越多就越近。`,
                `…But look — at least six men dressed like that. I'll go live and let my viewers look too. More bars, closer.`,
                `……でも見て、そんな格好の人、六人はいる。配信して視聴者にも探してもらう。バーが多いほど近いよ。`,
              ),
              o,
            ),
            await e.say(
              Q.miko,
              F(
                `觀眾的留言不一定都對。認錯人的話，帶著手機的那個會起疑——他跑了就完了。`,
                `The chat isn't always right. Confront the wrong man and the one with the phone gets wary — if he bolts, we've lost him.`,
                `コメントが全部正しいとは限らない。人違いしたら、持ってる本人が警戒する——逃げられたら終わり。`,
              ),
              o,
            ));
        }),
          (s = X2(e)),
          s.signal(0),
          s.chat(I3[0]),
          e.objective(
            F(
              `找出帶著小晴手機的人（看訊號和留言，靠近細看，再上前確認）`,
              `Find the man carrying Hsiao-Ching's phone (watch the signal and the chat, get close for a look, then confront him)`,
            ),
          ));
        let f = !1,
          p = 0,
          m = 0,
          h = 0,
          g = 9,
          _ = 0,
          v = 0,
          y = 0;
        e.setTimer(
          150,
          F(`他離開步行者天國`, `He leaves the hokoten`, `ホコ天を出る`),
          () => (f = !0),
        );
        let b = { kind: `pressE`, x: l.x, z: l.z, onFoot: !0 };
        t.params.has(`mdebug`) &&
          (window.__tkHunt = {
            get sus() {
              return u.map((e) => ({
                x: e.a.x,
                z: e.a.z,
                y: e.a.y,
                g: e.g,
                bag: e.bag && [
                  e.bag.x,
                  e.bag.y,
                  e.bag.z,
                  e.bag.alive,
                  e.bag.visible,
                ],
              }));
            },
            get wrong() {
              return p;
            },
          });
        let x = (e) => {
            let n = c[e.g],
              r = C0(t, n.x + a.range(-4, 4), n.z + a.range(-5, 5), 4, !0);
            ((e.tx = r.x), (e.tz = r.z));
          },
          S = e.every((t) => {
            h += t;
            for (let n of u) {
              if (n.held) {
                (n.a.stop(), n.a.faceTo(e.px, e.pz));
                continue;
              }
              if (n.rest > 0) {
                ((n.rest -= t), n.a.stop(), n.rest <= 0 && x(n));
                continue;
              }
              ((n.a.anim = `idle`),
                n.a.moveTo(
                  n.tx,
                  n.tz,
                  n === u[0] && n.g !== D3[0] ? 1.5 : 1.05,
                ),
                (Math.hypot(n.a.x - n.tx, n.a.z - n.tz) < 0.8 || n.stuck(t)) &&
                  ((n.rest = a.range(2, 6)),
                  n.a.stop(),
                  (n.a.anim = a.chance(0.5) ? `phone` : `idle`)));
            }
            for (let e of u) {
              if (!e.bag) continue;
              let t = e.a.heading;
              e.bag.set(
                e.a.x + Math.cos(t) * 0.3,
                e.a.y + 0.5,
                e.a.z + Math.sin(t) * 0.3,
                t,
                0.5,
              );
            }
            (_ -= t) <= 0 && ((_ = 0.5), (y = a.range(-0.06, 0.06)));
            let n = e.dist(l.x, l.z);
            ((v +=
              (Math.max(0, Math.min(1, 1 - (n - 2) / 55 + y)) - v) *
              Math.min(1, t * 4)),
              s.signal(v),
              s.tick(t, 1 + v * 4));
            let r = null,
              i = 5;
            for (let t of u) {
              let n = e.dist(t.a.x, t.a.z);
              n < i && ((i = n), (r = t));
            }
            for (s.look(r ? A3(r.tr) : null); m < F3.length && h >= F3[m].t;) {
              let t = F3[m++];
              (t.chat && s.chat(t.chat, t.handle),
                t.miko && J0(e, Q.miko, t.miko, 3.6),
                t.pin && s.pin(t.pin[0], t.pin[1], t.pin[2]));
            }
            ((g -= t) <= 0 && ((g = a.range(7, 11)), s.chat(a.pick(I3))),
              (b.x = l.x),
              (b.z = l.z),
              (e.waitFor = b),
              o.distTo(e.px, e.pz) > 4
                ? o.moveTo(
                    e.px - 1.2,
                    e.pz + 1.6,
                    e.playerSpeed > 2.5 ? 3 : 1.5,
                  )
                : o.moving || (o.anim = `phone`));
          });
        for (;;) {
          let n = null;
          if (
            (await e.until(() => {
              if (f) return !0;
              n = null;
              let r = 2.2;
              for (let t of u) {
                let i = e.dist(t.a.x, t.a.z);
                i < r && ((r = i), (n = t));
              }
              return n
                ? e.hud.prompt(
                    F(
                      `按 {interact} 上前確認`,
                      `Press {interact}: confront him`,
                      `{interact}で声をかける`,
                    ),
                  ) && t.input.pressed(`interact`)
                : !1;
            }),
            f)
          ) {
            e.fail(
              F(
                `他走出了步行者天國，訊號消失在人群裡`,
                `He walked off the hokoten, and the signal was lost in the crowd`,
                `ホコ天を出て、電波は人混みに消えた`,
              ),
            );
            return;
          }
          let r = n;
          if (
            ((r.held = !0),
            e.lockPlayer(!0),
            await $(
              e,
              i,
              F(
                `不好意思，請問一下——`,
                `Excuse me, can I ask you something—`,
                `すみません、ちょっと——`,
              ),
              1.4,
            ),
            r === u[0])
          )
            break;
          if (
            (p++,
            J0(e, Q.passer, L3[(p - 1) % L3.length], 2),
            s.chat(F(`認錯人www`, `Wrong guy lol`, `人違いwww`)),
            s.bump(0.8),
            e.addTime(-20),
            e.notify(F(`−20 秒`, `−20 s`, `−20秒`), `bad`, 2),
            await e.wait(1.6),
            (r.held = !1),
            e.lockPlayer(!1),
            p >= 3)
          ) {
            e.fail(
              F(
                `認錯太多人了——他察覺不對，消失在人群裡`,
                `Too many wrong men — he caught on and melted into the crowd`,
                `人違いが多すぎた——気づかれて、人混みに消えた`,
              ),
            );
            return;
          }
          let a = u[0],
            o = a.g,
            l = -1;
          (c.forEach((t, n) => {
            let r = e.dist(t.x, t.z);
            n !== a.g && r > l && ((l = r), (o = n));
          }),
            (a.g = o),
            (a.rest = 0),
            x(a),
            J0(
              e,
              Q.miko,
              p === 1
                ? F(
                    `（耳機）訊號在移動……他好像注意到了。`,
                    `(earpiece) The signal is moving… I think he noticed.`,
                    `（イヤホン）電波が動いてる……気づかれたかも。`,
                  )
                : F(
                    `（耳機）他又換位置了。再認錯一次，他就會跑了。`,
                    `(earpiece) He's moved again. One more wrong guess and he's gone.`,
                    `（イヤホン）また移動した。次間違えたら逃げられる。`,
                  ),
              3,
            ));
        }
        (S(),
          e.clearTimer(),
          (e.waitFor = null),
          s.chat(F(`訊號爆表！！`, `The signal maxed out!!`, `電波MAX！！`)),
          J0(
            e,
            Q.miko,
            F(
              `（耳機）訊號滿格——就是他！`,
              `(earpiece) Full bars — it's him!`,
              `（イヤホン）バー全部——その人！`,
            ),
            2,
          ),
          l.faceTo(e.px, e.pz),
          await e.wait(0.9),
          J0(e, T3, F(`……！`, `…!`, `……っ！`), 1),
          l.play(`punch`),
          e.sfx(`punch_whoosh`, { x: l.x, y: 1.2, z: l.z }));
        try {
          t.cameraRig.shake(0.3);
        } catch {}
        for (let t of u) t !== u[0] && (e.removeActor(t.a), t.bag?.remove());
        let C = u[0].bag;
        (C &&
          C.set(
            C.x,
            t.groundAt(C.x, C.z, l.y + 0.6, 0.6) + 0.01,
            C.z,
            l.heading + 0.6,
            0.5,
            0,
            1.4,
          ),
          (u.length = 1),
          s.look(null),
          d(),
          e.lockPlayer(!1),
          r.mark(1, { x: e.px, z: e.pz, heading: t.player.heading }));
      } else if (r.from < 2) {
        let n = {
            x: Math.sin(t.player.heading),
            z: -Math.cos(t.player.heading),
          },
          r = C0(t, e.px + n.x * 4, e.pz + n.z * 4, 4, !0);
        ((l = X0(e, T3, k3(0), r.x, r.z, t.player.heading)),
          s.signal(1),
          s.pin(`bag`, j3, `ok`),
          s.pin(`light`, N3, `ok`));
      }
      if (r.from < 2) {
        let n = l;
        (e.objective(
          F(
            `追上他！（小心他踢倒的東西）`,
            `Catch him! (watch what he knocks over)`,
          ),
        ),
          e.lockPlayer(!0));
        let o = { t: 1.2 },
          c = (
            T0(`tokyo:akihabara:back-street-chase`, -170, -700).points ?? [
              [-145, -765],
              [-190, -768],
              [-190, -700],
              [-145, -700],
              [-145, -650],
              [-145, -600],
            ]
          ).map(([e, t]) => ({ x: e, z: t })),
          u = N0(e, n, {
            dash: [
              { x: n.x, z: Math.min(n.z - 6, c[0].z) },
              ...c.slice(1, 5),
            ].filter((e) => Math.hypot(e.x - n.x, e.z - n.z) > 5),
            home: { x: -165, z: -700 },
            homeR: 120,
            farD: 40,
            escape: 6,
            speed: 1.1,
            speaker: T3.name,
            lost: F(
              `他鑽進人群裡，不見了`,
              `He slipped into the crowd and was gone`,
              `人混みにまぎれて、見失った`,
            ),
            taunts: [
              F(`別追了！`, `Leave me alone!`, `ついてくんな！`),
              F(`我什麼都沒做！`, `I didn't do anything!`, `何もしてねえよ！`),
            ],
          }),
          d = [],
          f = 3.5,
          p = 0,
          m = 2.5,
          h = [`cone`, `trashbag`, `foodbox`],
          g = [
            F(`他跑了！！`, `He's running!!`, `逃げた！！`),
            F(`往末廣町那邊！`, `Towards Suehirocho!`, `末広町のほう！`),
            F(
              `鑽進後街了！女僕咖啡廳那條！`,
              `Into the back street! The maid-café one!`,
              `裏通り入った！メイドカフェのとこ！`,
            ),
            F(
              `ミコ跟不上啦www`,
              `Miko can't keep up lol`,
              `ミコ追いつけてないw`,
            ),
            F(`撲上去！`, `Tackle him!`, `タックルだ！`),
          ],
          _ = 0;
        (e.every((r) => {
          if (
            (o.t > 0 && (o.t -= r) <= 0 && e.lockPlayer(!1), u.state === `flee`)
          ) {
            if (
              (s?.tick(r, 14),
              s?.signal(Math.max(0, 1 - u.dist / 60)),
              (m -= r) <= 0 && s && ((m = 4.5), s.chat(g[_++ % g.length])),
              (f -= r),
              f <= 0 && u.dist < 16 && u.dist > 3)
            ) {
              f = a.range(4.5, 7);
              let r = n.x - Math.sin(n.heading) * 1.3,
                i = n.z + Math.cos(n.heading) * 1.3,
                o = t.groundAt(r, i, n.y + 0.6, 0.6);
              (d.push({
                x: r,
                z: i,
                t: 9,
                hit: !1,
                p: e.prop(a.pick(h), r, o + 0.02, i, a.range(0, 6.28), 1.6),
              }),
                e.sfx(`crash_light`, { x: r, y: 0.4, z: i }));
            }
            for (let n of d)
              if (
                ((n.t -= r),
                !(n.hit || n.t <= 0) &&
                  e.dist(n.x, n.z) < 1.15 &&
                  e.playerSpeed > 2.5)
              ) {
                ((n.hit = !0),
                  (p = 0.75),
                  e.lockPlayer(!0),
                  e.sfx(`land`, { ui: !0 }));
                try {
                  t.cameraRig.shake(0.35);
                } catch {}
                J0(
                  e,
                  i,
                  F(
                    `（絆了一下）……可惡！`,
                    `(stumbles) …Damn!`,
                    `（つまずく）……くそっ！`,
                  ),
                  1.2,
                );
              }
            p > 0 && (p -= r) <= 0 && e.lockPlayer(!1);
          }
        }),
          await e.until(() => u.state === `down`),
          u.stop(),
          (p > 0 || o.t > 0) && e.lockPlayer(!1));
        for (let e of d) e.p?.remove();
        (F0(e, n, u.by),
          s?.chat(F(`抓到了！！`, `Got him!!`, `捕まえた！！`)),
          s?.bump(1.25),
          r.mark(2, { x: e.px, z: e.pz, heading: t.player.heading }),
          e.objective(null),
          await e.wait(0.8));
      } else if (r.from < 3) {
        let n = C0(t, e.px + 1.4, e.pz, 3, !0);
        l = X0(e, T3, k3(0), n.x, n.z, 0);
      }
      let u = !0;
      if (r.from < 3) {
        let n = l;
        (n.stop(), (n.anim = `cower`), n.faceTo(e.px, e.pz));
        let a = C0(t, e.px - 1.4, e.pz + 1.2, 3, !0);
        (o.place(a.x, a.z),
          o.faceTo(n.x, n.z),
          (o.anim = `phone`),
          s?.signal(1),
          s?.look(null),
          await m2(
            e,
            async (e) => {
              (await e.say(
                T3,
                F(
                  `痛……！我、我什麼都沒做！我只是被叫來這條街上走來走去而已！`,
                  `Ow…! I — I didn't do anything! I was only told to walk up and down this street!`,
                  `いって……！お、俺は何もしてない！この通りを歩き回れって言われただけだ！`,
                ),
                n,
              ),
                await e.say(
                  i,
                  F(
                    `（他的背包側袋裡有一支手機——殼上貼著櫻花貼紙。是小晴的。）`,
                    `(In his backpack's side pocket, a phone — a cherry-blossom sticker on the case. Hsiao-Ching's.)`,
                    `（リュックの横ポケットに携帯——桜のシールが貼ってある。小晴のだ。）`,
                  ),
                  `me`,
                ),
                await e.say(
                  T3,
                  F(
                    `他們叫我帶著這支手機在秋葉原晃，讓它的位置看起來像主人還在這裡逛街……一天一萬。`,
                    `They told me to carry this phone round Akihabara so its location looks like the owner's still out shopping… ten thousand a day.`,
                    `この携帯持って秋葉原ブラブラしろって。持ち主がまだ買い物してるみたいに見せるために……日給一万。`,
                  ),
                  n,
                ),
                await e.say(
                  Q.miko,
                  F(
                    `……所以小晴的訊號才會一直在秋葉原。家人查到也只會以為她很好。`,
                    `…So that's why her signal kept moving round Akihabara. Anyone checking would think she was fine.`,
                    `……だから電波がずっと秋葉原にあったんだ。家族が見ても、元気だって思うだけ。`,
                  ),
                  o,
                ));
            },
            { thin: !1 },
          ));
        let d = await y2(e, {
            prompt: F(
              `（他抱著背包發抖）……不能說。說了會出事的。`,
              `(clutching the backpack, shaking) …I can't say. Something will happen if I talk.`,
              `（リュックを抱えて震えてる）……言えない。言ったら、ヤバいことになる。`,
            ),
            secs: 14,
            options: [
              {
                text: F(
                  `他們拍了你證件的照片，對吧？跟勇樹一樣。`,
                  `They took a photo of your ID, didn't they? Same as Yuki.`,
                  `身分証の写真、撮られたんだろ？勇樹と同じだ。`,
                ),
                score: 2,
              },
              {
                text: F(
                  `手機交給我，你就可以走了。我保證。`,
                  `Give me the phone and you can go. I promise.`,
                  `携帯を渡してくれたら、行っていい。約束する。`,
                ),
                score: 0,
              },
              {
                text: F(
                  `我們不是警察，也不是他們那邊的人。`,
                  `We're not the police, and we're not with them either.`,
                  `俺たちは警察じゃない。あいつらの仲間でもない。`,
                ),
                score: 0,
              },
              {
                text: F(
                  `這支手機的主人是我表妹。她在哪裡？`,
                  `This phone belongs to my cousin. Where is she?`,
                  `この携帯、俺のいとこのなんだ。彼女はどこだ？`,
                ),
                score: 0,
              },
            ],
          }),
          f = d.score > 0;
        if (!f) {
          if (
            (await $(
              e,
              T3,
              d.index === 1
                ? F(
                    `交出去的話……他們馬上就會知道。他們知道我家在哪。`,
                    `If I hand it over… they'll know right away. They know where I live.`,
                    `渡したら……すぐバレる。家も知られてるんだ。`,
                  )
                : d.index === 2
                  ? F(
                      `那就更糟了……你們根本保護不了我。`,
                      `That's even worse… you can't protect me at all.`,
                      `じゃあ余計ダメだ……あんたらじゃ俺を守れない。`,
                    )
                  : F(
                      `我不知道！我只拿到手機而已，人怎麼樣我不知道！`,
                      `I don't know! I only got the phone — I don't know anything about her!`,
                      `知らねえよ！携帯渡されただけで、人のことなんか知らない！`,
                    ),
              2.6,
            ),
            s?.chat(F(`他嚇壞了……`, `He's terrified…`, `怯えてる……`)),
            s?.bump(0.9),
            (
              await y2(e, {
                prompt: F(
                  `（他盯著ミコ的手機鏡頭）……那個在直播吧？他們會看到的。他們什麼都看。`,
                  `(staring at Miko's phone) …That's live, isn't it? They'll see. They watch everything.`,
                  `（ミコのスマホを見つめて）……それ、配信してるんだろ？見られる。あいつら全部見てるんだ。`,
                ),
                secs: 14,
                options: [
                  {
                    text: F(
                      `ミコ，先關掉直播。現在只有我們三個。`,
                      `Miko, cut the stream. It's just the three of us now.`,
                      `ミコ、配信止めて。今は俺たち三人だけだ。`,
                    ),
                    score: 2,
                  },
                  {
                    text: F(
                      `她只拍我們兩個，不會拍到你的臉。`,
                      `She's only filming us two. Your face won't be in it.`,
                      `撮ってるのは俺たちだけ。君の顔は映らない。`,
                    ),
                    score: 0,
                  },
                  {
                    text: F(
                      `觀眾都站在你這邊，你看留言就知道。`,
                      `The viewers are on your side — look at the chat.`,
                      `視聴者はみんな君の味方だ。コメント見てみなよ。`,
                    ),
                    score: 0,
                  },
                  {
                    text: F(
                      `被看到又怎樣？說出來我們就保護你。`,
                      `So what if they see? Talk, and we'll protect you.`,
                      `見られたっていい。話してくれたら守るから。`,
                    ),
                    score: 0,
                  },
                ],
              })
            ).score > 0)
          )
            ((f = !0),
              (c = !0),
              await $(
                e,
                Q.miko,
                F(
                  `……好。直播先停。各位，抱歉囉。`,
                  `…OK. Stream paused. Sorry, everyone.`,
                  `……うん。配信止めるね。みんな、ごめん。`,
                ),
                2.2,
              ),
              s?.remove(),
              (s = null));
          else {
            (await $(
              e,
              T3,
              F(
                `……不要。我什麼都不會說的。`,
                `…No. I'm not saying anything.`,
                `……やだ。何も言わない。`,
              ),
              2,
            ),
              e.fail(
                F(
                  `他嚇得什麼都不肯說了`,
                  `He was too scared to say anything`,
                  `怯えて、何も話してくれなかった`,
                ),
              ));
            return;
          }
        }
        (await $(
          e,
          T3,
          F(
            `……對。他們拍了我的學生證，還有我家的地址。今天五點前要把手機送回去。地點……他們每次都用這種寫法。`,
            `…Yeah. They photographed my student ID, and my home address. The phone goes back before five today. Where… they always write it like this.`,
            `……うん。学生証も、家の住所も撮られた。今日の五時までに携帯を返しに行く。場所は……いつもこういう書き方なんだ。`,
          ),
          4,
        ),
          (u =
            (
              await y2(e, {
                prompt: F(
                  `（他的手機，一則會自動消失的訊息）
「17:00　ヒロコウの“歌の城”　ハチ。エレベーターは7まで、そこから階段。」
（17:00，「ヒロコウ」的「歌之城」，ハチ。電梯只到 7，之後走樓梯。）
手機要送去哪裡？`,
                  `(His phone: a self-deleting message)
"17:00　ヒロコウの“歌の城”　ハチ。エレベーターは7まで、そこから階段。"
(17:00, "Hirokou", the "song castle", hachi. The lift only goes to 7 — the stairs from there.)
Where does the phone go?`,
                  `（彼のスマホ。消える設定のメッセージ）
「17:00　ヒロコウの“歌の城”　ハチ。エレベーターは7まで、そこから階段。」
携帯の届け先は？`,
                ),
                secs: 20,
                options: [
                  {
                    text: F(
                      `上野廣小路，卡拉OK大樓的 8 樓`,
                      `Ueno-Hirokoji — the karaoke building, 8th floor`,
                      `上野広小路のカラオケビル、8階`,
                    ),
                    score: 2,
                  },
                  {
                    text: F(
                      `上野廣小路，卡拉OK大樓的 7 樓`,
                      `Ueno-Hirokoji — the karaoke building, 7th floor`,
                      `上野広小路のカラオケビル、7階`,
                    ),
                    score: 0,
                  },
                  {
                    text: F(
                      `末廣町，卡拉OK大樓的 8 樓`,
                      `Suehirocho — the karaoke building, 8th floor`,
                      `末広町のカラオケビル、8階`,
                    ),
                    score: 0,
                  },
                  {
                    text: F(
                      `上野廣小路，卡拉OK大樓的頂樓`,
                      `Ueno-Hirokoji — the karaoke building, the roof`,
                      `上野広小路のカラオケビル、屋上`,
                    ),
                    score: 0,
                  },
                ],
              })
            ).score > 0),
          u
            ? await $(
                e,
                Q.miko,
                F(
                  `ヒロコウ是上野廣小路，「歌之城」是那棟卡拉OK大樓。電梯到 7，再走樓梯——ハチ，八樓。`,
                  `Hirokou is Ueno-Hirokoji, the "song castle" is that karaoke building. Lift to 7, then the stairs — hachi, the 8th.`,
                  `ヒロコウは上野広小路、“歌の城”はあのカラオケビル。エレベーターで7階、そこから階段——ハチ、8階。`,
                ),
                3.6,
              )
            : await $(
                e,
                Q.miko,
                F(
                  `……不對喔。ヒロコウ是上野廣小路；電梯只到 7，再走樓梯上去——ハチ，是八樓。我們浪費時間了。`,
                  `…No. Hirokou is Ueno-Hirokoji; the lift stops at 7 and the stairs go up — hachi, the 8th. We lost time.`,
                  `……違う。ヒロコウは上野広小路。エレベーターは7階まで、そこから階段で上——ハチ、8階。時間ロスしたね。`,
                ),
                4,
              ),
          await m2(
            e,
            async (e) => {
              (await e.say(
                i,
                F(
                  `照常把手機送過去吧。別讓他們起疑——你媽媽那邊也是。`,
                  `Deliver the phone as usual. Don't let them suspect anything — for your mum's sake too.`,
                  `いつも通り携帯を届けて。怪しまれないように——お母さんのためにも。`,
                ),
                `me`,
              ),
                await e.say(
                  T3,
                  F(
                    `……謝謝。我……我不會說遇到你們的事。`,
                    `…Thanks. I… I won't tell them I met you.`,
                    `……ありがとう。あんたらに会ったことは、言わない。`,
                  ),
                  n,
                ),
                await e.say(
                  Q.miko,
                  F(
                    `我的追蹤器還抓得到那支手機。你先跑去上野廣小路，搶在他前面——看他到底上幾樓。我打給你。`,
                    `My tracker still has that phone. Run to Ueno-Hirokoji and get there before him — see which floor he really goes to. I'll call you.`,
                    `追跡機はまだあの携帯を拾ってる。先に上野広小路まで走って、彼より先に着いて——本当に何階に行くか見て。電話するね。`,
                  ),
                  o,
                ));
            },
            { thin: !1 },
          ),
          (e.vars.decoded = u),
          (e.vars.viewers = s?.viewers ?? 0),
          (e.vars.streamCut = c),
          r.mark(3, { x: e.px, z: e.pz, heading: t.player.heading }),
          (n.anim = `idle`),
          n.moveTo(n.x - 30, n.z - 40, 1.4),
          s?.signal(null),
          s?.chat(
            F(`去上野廣小路？`, `Off to Ueno-Hirokoji?`, `上野広小路行くの？`),
          ));
      } else u = e.vars.decoded !== !1;
      let d = !1,
        f = 1.3 * e.dist(w3.x, w3.z);
      if (
        (e.setTimer(
          Math.round(u ? f / 4.6 + 12 : f / 6.2 + 6),
          F(`他抵達`, `He arrives`, `彼が着く`),
          () => (d = !0),
        ),
        await e.goto(w3, {
          objective: F(
            `搶在他之前趕到上野廣小路的卡拉OK大樓`,
            `Get to the karaoke building at Ueno-Hirokoji before he does`,
            `彼より先に上野広小路のカラオケビルへ`,
          ),
          label: F(`卡拉OK大樓`, `Karaoke building`, `カラオケビル`),
          radius: 3.2,
          onFoot: !0,
          orWhen: () => d,
        }),
        d)
      ) {
        e.fail(
          F(
            `他先到了——你沒看到他上了幾樓`,
            `He got there first — you never saw which floor he went to`,
            `先を越された——何階に行ったか見られなかった`,
          ),
        );
        return;
      }
      (e.clearTimer(), l && e.removeActor(l));
      let p = C0(t, w3.x + 2.2, w3.z + 14, 4),
        m = X0(e, T3, k3(0), p.x, p.z, 0);
      ((m.anim = `phone`), m.moveTo(w3.x + 0.4, w3.z, 1.4), e.objective(null));
      let h = s ? s.viewers : (e.vars.viewers ?? 0),
        g = !c && h > 0;
      (await m2(
        e,
        async (e) => {
          (await e.wait(2.6),
            await e.say(
              i,
              F(
                `（他走進大樓。電梯的樓層燈：1……4……7。停了。）`,
                `(He goes in. The lift indicator: 1… 4… 7. It stops.)`,
                `（ビルに入った。エレベーターの表示：1……4……7。止まった。）`,
              ),
              `me`,
            ),
            m.setVisible(!1),
            await e.say(
              i,
              F(
                `（過了一會兒，樓梯間的窗在 8 樓亮了。樓層簡介上，8F 只寫著：「NLプランニング（株）　関係者以外立入禁止」。）`,
                `(A moment later the stairwell window lights up on the 8th floor. On the directory, 8F says only: "NL Planning Co. — staff only".)`,
                `（少しして、階段の窓が8階で灯った。フロア案内の8Fには「NLプランニング（株）　関係者以外立入禁止」とだけ。）`,
              ),
              `me`,
            ),
            await e.say(
              i,
              F(`ネオンリンク。`, `NeonLink.`, `ネオンリンク。`),
              `me`,
            ),
            await e.call(
              Q.miko,
              g
                ? F(
                    `（電話）八樓，對吧？那層不是包廂，是辦公室。觀眾 ${h.toLocaleString(`en-US`)} 人……今天收工！今晚我幫你訂他們隔壁的包廂。`,
                    `(phone) The 8th, right? That floor isn't booths — it's offices. ${h.toLocaleString(`en-US`)} viewers… that's a wrap! Tonight I'll book you the booth next door to them.`,
                    `（電話）8階でしょ？あそこは個室じゃなくて事務所。視聴者${h.toLocaleString(`en-US`)}人……今日はここまで！今夜、隣の部屋予約しとくね。`,
                  )
                : F(
                    `（電話）八樓，對吧？那層不是包廂，是辦公室。……今晚我幫你訂他們隔壁的包廂。`,
                    `(phone) The 8th, right? That floor isn't booths — it's offices. …Tonight I'll book you the booth next door to them.`,
                    `（電話）8階でしょ？あそこは個室じゃなくて事務所。……今夜、隣の部屋予約しとくね。`,
                  ),
            ));
        },
        { thin: !1 },
      ),
        e.removeActor(m));
      let _ = Math.round(Math.min(5e3, h * 2)) + (u ? 2e3 : 0);
      e.pass({
        bonus: _,
        note: F(
          `ネオンリンク的辦公室在卡拉OK大樓八樓`,
          `NeonLink's office: the karaoke building, 8F`,
          `ネオンリンクの事務所はカラオケビルの8階`,
        ),
      });
    },
  }),
  z3 = `walkin-karaoke-ueno`,
  B3 = C2(`tokyo:s2_karaoke`, {
    description: F(
      `ミコ訂了ネオンリンク辦公室隔壁的包廂。唱歌掩護，讓竊聽器錄下神城的會議。`,
      `Miko booked the booth next to NeonLink's meeting. Sing for cover while the bug records Kamishiro.`,
    ),
    glyph: `歌`,
    noPolice: !0,
    start: () => {
      let e = l4(z3);
      return { x: e.x, z: e.z, heading: e.facing };
    },
    async run(e) {
      let t = e.ctx,
        n = l4(z3),
        r = await B0(e);
      await U0(e, { window: [20, 23.5], at: n });
      let i = G0(t);
      if (r.from < 1) {
        (await _4(e, z3, `booth`, { guests: !1 }),
          await m2(e, async (e) => {
            (await e.call(
              Q.miko,
              F(
                `（電話）竊聽器貼在牆上了。你唱歌——要像真的在唱，可是間奏的時候安靜，讓它錄。`,
                `(phone) The bug's on the wall. Sing — like you mean it — but go quiet in the instrumental breaks so it can record.`,
                `（電話）盗聴器、壁に付けたよ。歌って——ちゃんと歌ってるっぽく。でも間奏は静かにね、録音するから。`,
              ),
            ),
              await e.say(
                i,
                F(
                  `……我唱歌很爛耶。`,
                  `…I'm a terrible singer.`,
                  `……歌、下手なんだけど。`,
                ),
                `me`,
              ),
              await e.call(
                Q.miko,
                F(
                  `（電話）高音、中音、低音三條軌道，跟著字按。紅色的 ✕ 是伴奏的拍子，不是你的——碰了就是雜音。唱得太假，隔壁也會起疑喔。`,
                  `(phone) Three lanes — high, mid, low — press with the words. The red ✕ are the backing track's beats, not yours: touch them and it's noise. And if you sound fake, next door will notice.`,
                  `（電話）高・中・低の三レーン、歌詞に合わせて押して。赤い✕は伴奏のビートだから押さない——押したらノイズ。下手すぎると隣にバレるよ。`,
                ),
              ));
          }));
        let t = [
            [
              [
                Q.kamishiro,
                F(
                  `（隔壁）星期六的銀座，步行者天國。人越多，越好跑。`,
                  `(next door) Saturday, Ginza, the pedestrian paradise. The bigger the crowd, the easier the getaway.`,
                  `（隣の部屋）土曜の銀座、歩行者天国。人が多いほど、逃げやすい。`,
                ),
              ],
              [
                Q.crew,
                F(
                  `（隔壁）動手的四個人，都是新人。`,
                  `(next door) The four doing the job are all new.`,
                  `（隣の部屋）実行役は四人、全員新人です。`,
                ),
              ],
            ],
            [
              [
                Q.kamishiro,
                F(
                  `（隔壁）誰都做得來的簡單工作。……被抓的，也只有那些孩子。`,
                  `(next door) Easy work anyone can do. …And the only ones who get caught are those kids.`,
                  `（隣の部屋）誰でもできる簡単なお仕事です。……捕まるのは、あの子たちだけですから。`,
                ),
              ],
              [
                Q.crew,
                F(
                  `（隔壁）……隔壁那間，從剛剛就一直唱同一首耶。`,
                  `(next door) …The booth next door has been singing the same song for ages.`,
                  `（隣の部屋）……隣、さっきから同じ曲ばっかですね。`,
                ),
              ],
            ],
            [
              [
                Q.kamishiro,
                F(
                  `（隔壁）星期六傍晚，人最多的時候。接應的機車等在和光後面。`,
                  `(next door) Saturday, early evening, when the crowd is at its thickest. The getaway scooter waits behind Wako.`,
                  `（隣の部屋）土曜の夕方、人が一番多い時間だ。逃走用のバイクは和光の裏で待たせる。`,
                ),
              ],
              [
                Q.crew,
                F(
                  `（隔壁）新人的證件照片都在我們手上。他們不會亂說話的。`,
                  `(next door) We have all the new ones’ ID photos. They won’t talk.`,
                  `（隣の部屋）新人の身分証の写真は全部押さえてます。余計なことは言いませんよ。`,
                ),
              ],
            ],
          ],
          a = F(
            `（隔壁）……喂，隔壁那間是不是根本沒在唱？去看一下。`,
            `(next door) …Hey, is anyone in that booth even singing? Go and check.`,
            `（隣の部屋）……おい、隣ほんとに歌ってるか？見てこい。`,
          ),
          o = await a4(e, {
            breakS: 9,
            onBreak: (n, r) => {
              let i = 0.6,
                o =
                  r < 0.35
                    ? [[Q.crew, a], ...(t[n] ?? []).slice(0, 1)]
                    : (t[n] ?? []);
              for (let [t, n] of o)
                (setTimeout(() => {
                  e.result || J0(e, t, n, 3.8);
                }, i * 1e3),
                  (i += 4.2));
            },
          });
        if (o.failed) {
          e.fail(o.failed);
          return;
        }
        ((e.vars.cover = o.cover),
          (e.vars.recording = o.recording),
          (e.vars.grade = o.grade),
          r.mark(1, { x: n.x, z: n.z, heading: n.facing }));
      } else await _4(e, z3, `booth`, { guests: !1 });
      (v4(e, z3, `booth-door`, Q.crew, y0.crew).faceTo(e.px, e.pz),
        await $(
          e,
          Q.crew,
          F(
            `喂！你是誰——！`,
            `Hey! Who the hell are you—!`,
            `おい！てめえ誰だ——！`,
          ),
          1.8,
        ));
      let a = y4(z3, `stairs`);
      (e.objective(F(`衝出去！`, `Run!`)),
        await e.goto(
          { x: a.x, z: a.z, y: a.y },
          {
            objective: F(
              `從門口衝到街上`,
              `Out through the door to the street`,
            ),
            radius: 1.8,
            onFoot: !0,
          },
        ),
        await k0(
          e,
          n.x + Math.sin(n.facing) * 2,
          n.z - Math.cos(n.facing) * 2,
          n.facing,
          6,
        ));
      let o = n.x + Math.sin(n.facing) * 6.5,
        s = n.z - Math.cos(n.facing) * 6.5 + 3,
        c = K4(e, o, s, Math.PI, 3124842),
        l = [];
      for (let r = 0; r < 2; r++) {
        let i = C0(
            t,
            n.x + Math.sin(n.facing) * 1.2,
            n.z - Math.cos(n.facing) * 1.2 + r,
            2,
          ),
          a = X0(e, Q.crew, r ? y0.crew2 : y0.crew, i.x, i.z, n.facing);
        (a.moveTo(o, s + 8, 4.8), l.push(a));
      }
      (await $(
        e,
        Q.todoroki2,
        F(
          `不管你在逃什麼——上車，跟緊我！`,
          `Whatever you're running from — get in, and stay on my tail!`,
          `何から逃げてるか知らねえが——乗れ。ついて来い！`,
        ),
        2.4,
      ),
        c &&
          (await e.enterVehicle({
            vehicle: c,
            objective: F(`跳上空著的卡丁車`, `Jump into the spare kart`),
          })));
      let u = await g3(e, {
        route: E4.escape.route,
        guide: { name: Q.todoroki2.name, color: 13115436, skill: 0.8 },
        riders: [
          {
            name: F(`觀光客`, `Tourist`, `観光客`),
            color: 15911244,
            skill: 0.5,
          },
          {
            name: F(`觀光客`, `Tourist`, `観光客`),
            color: 5688562,
            skill: 0.5,
          },
        ],
        lines: {
          go: F(
            `今晚店裡的夜跑剛好封了路——油門踩到底，甩掉他們！`,
            `Tonight's shop night run has the streets closed — floor it, we'll lose them!`,
            `今夜はうちの店の夜走りで道を押さえてある——踏み込め、振り切るぞ！`,
          ),
          end: F(`……甩掉了。`, `…We lost them.`, `……撒いたな。`),
        },
      });
      for (let t of l) e.removeActor(t);
      if (u.lost) {
        e.fail(
          F(
            `跟丟了轟的車隊——神城的人追上來了`,
            `You lost Todoroki's karts — Kamishiro's men caught up`,
          ),
        );
        return;
      }
      (await m2(e, async (e) => {
        (await e.say(
          Q.todoroki2,
          F(
            `……你還真會挑地方逃。我是轟，開卡丁車店的。`,
            `…You sure pick your escapes. I'm Todoroki — I run the kart shop.`,
            `……逃げ場所のセンスはあるな。轟だ。カート屋をやってる。`,
          ),
        ),
          await e.say(
            Q.todoroki2,
            F(
              `剛剛那些是神城的人吧。那傢伙把我的車手一個一個挖走，去跑他的地下賽。`,
              `Those were Kamishiro's guys, right? That bastard's been poaching my riders one by one for his street races.`,
              `さっきのは神城の手下だろ。あの野郎、うちのライダーを一人ずつ引き抜いて、闇レースに出してやがる。`,
            ),
          ),
          await e.call(
            Q.miko,
            F(
              `（電話）錄到了！「星期六，銀座，步行者天國」。`,
              `(phone) Got it! "Saturday, Ginza, the pedestrian paradise."`,
              `（電話）録れた！「土曜、銀座、歩行者天国」。`,
            ),
          ));
      }),
        e.pass({
          bonus:
            Math.round(
              (e.vars.cover ?? 0.5) * 3e3 + (e.vars.recording ?? 0.5) * 3e3,
            ) + Math.max(0, u.score),
          note: F(`大案子：星期六，銀座`, `The big job: Saturday, Ginza`),
        }));
    },
  }),
  V3 = `
#tk-photo { position: fixed; inset: 0; z-index: 19; pointer-events: none; }
#tk-photo .tp-frame { position: absolute; left: 50%; top: 46%; width: 34vw; height: 40vh; transform: translate(-50%, -50%);
  border: 2px solid rgba(255,255,255,.85); border-radius: 10px; box-shadow: 0 0 0 100vmax rgba(0,0,0,.18); }
#tk-photo .tp-frame.on { border-color: #3ddc84; }
#tk-photo .tp-hint { position: absolute; left: 50%; top: calc(46% + 22vh); transform: translateX(-50%); color: #fff;
  font: 700 14px "PingFang TC","Hiragino Sans",system-ui,sans-serif; text-shadow: 0 1px 3px #000; white-space: nowrap; }
#tk-photo .tp-flash { position: absolute; inset: 0; background: #fff; opacity: 0; transition: opacity .25s; }
`,
  H3 = new k();
