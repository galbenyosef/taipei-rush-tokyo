// tokyo__assets__region-tokyo-BcM3fReU 277 — math
// Lines 108106-110403 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var a6 = C2(`tokyo:s3_hokoten`, {
    description: F(
      `「大案子」：星期六的銀座步行者天國，四個被逼來的打工者要搶鐘錶店。在誰都沒受傷之前阻止它。`,
      `The "big job": four frightened recruits are sent to rob a watch shop on Ginza's Saturday pedestrian paradise. Stop it before anyone gets hurt.`,
    ),
    glyph: `銀`,
    noPolice: !0,
    start: () => ({ x: 92, z: 362, heading: -Math.PI / 2 }),
    async run(e) {
      let t = e.ctx,
        n = T0(`tokyo:ginza:hokoten`, 75, 372),
        i = await B0(e);
      await U0(e, { window: [16, 18], at: n });
      let a = G0(t),
        o = i.from,
        s = o >= 20 ? 15 : o >= 10 ? o - 10 : 0,
        c = t.env,
        l = c.timeScale;
      e.onCleanup(() => {
        c.timeScale = l;
      });
      let u = [1, 2, 4].filter((e) => s & e).length,
        d = o < 2 ? q3 : Math.max(170, 330 - u * 60);
      if (o < 20) {
        let t = Y3 - (d * J3) / 60;
        (Math.abs(c.hour - t) > 0.05 && (await e.skipTo(t)),
          (c.timeScale = J3));
      } else c.timeScale = 0.3;
      E0(t, 70, 330);
      let f = (n, r, i, a, o) => {
          let s = C0(t, i, a, 3, !0);
          return X0(e, r, n, s.x, s.z, o);
        },
        p = (e, t, n, r, i, a, o, s, c, l, u) => {
          let d = f(n, t, r, i, a);
          return (
            (d.anim = e === `yuki` ? `crossArms` : `idle`),
            {
              id: e,
              sp: t,
              a: d,
              bit: o,
              done: !1,
              wrong: 0,
              tag: null,
              seen: !1,
              away: s,
              awayLine: c,
              spot: l,
              desc: u,
            }
          );
        },
        m = [
          p(
            `daichi`,
            t6.daichi,
            $3.daichi,
            58.6,
            308.6,
            Math.PI / 2,
            1,
            { x: 58.8, z: 262 },
            F(
              `（他轉身就走，往北邊的三丁目去了。）`,
              `(He turns on his heel and walks off north, toward 3-chome.)`,
              `（背を向けて、北の三丁目の方へ歩いていった）`,
            ),
            F(
              `（全身黑，站在麵包店前面一動也不動……是大地。）`,
              `(Black head to toe, standing stock-still by the bakery… Daichi.)`,
              `（全身黒で、パン屋の前でじっと立ってる……大地だ）`,
            ),
            F(`大地（麵包店）`, `Daichi (the bakery)`),
          ),
          p(
            `sho`,
            t6.sho,
            $3.sho,
            89.4,
            324.2,
            -Math.PI / 2,
            2,
            { x: 90.6, z: 282 },
            F(
              `（翔低著頭，沿著松屋那一側往北走了。）`,
              `(Sho keeps his head down and walks north along the department store side.)`,
              `（翔はうつむいて、デパート側を北へ歩いていった）`,
            ),
            F(
              `（最小的那個……就坐在交番旁邊，卻走不進去。是翔。）`,
              `(The youngest… sitting right next to a police box, and he can't walk in. Sho.)`,
              `（一番若い子……交番のすぐ横にいるのに、入れないでいる。翔だ）`,
            ),
            F(`翔（最小・獅子像）`, `Sho (youngest, the lion)`),
          ),
          p(
            `ren`,
            t6.ren,
            $3.ren,
            72,
            392,
            0,
            4,
            { x: 72, z: 392 },
            F(``, ``, ``),
            F(
              `（金頭髮、全身黑，一直走來走去……是蓮。別嚇到他。）`,
              `(Bleached hair, all in black, pacing up and down… Ren. Don't spook him.)`,
              `（金髪に全身黒、うろうろしてる……蓮だ。驚かせるな）`,
            ),
            F(`蓮（金髮・五丁目）`, `Ren (bleached hair, 5-chome)`),
          ),
          p(
            `yuki`,
            Q.yuki,
            $3.yuki,
            58.8,
            326,
            Math.PI / 2,
            8,
            { x: 58.8, z: 406 },
            F(
              `（勇樹轉身走了，經過工地，往五丁目去。）`,
              `(Yuki turns and walks away, past the building site, toward 5-chome.)`,
              `（勇樹は背を向けて、工事現場を過ぎて五丁目の方へ歩いていった）`,
            ),
            F(
              `（灰色連帽衫，在鐘錶店前面——勇樹。他看到我了。）`,
              `(Grey hoodie, in front of the watch shop — Yuki. He has seen me.)`,
              `（グレーのパーカー、時計屋の前——勇樹だ。こっちに気づいた）`,
            ),
            F(`勇樹（最後・鐘錶店）`, `Yuki (last, watch shop)`),
          ),
        ],
        h = (e) => m.find((t) => t.id === e),
        g = h(`ren`),
        _ = h(`yuki`),
        v = !1,
        y = !1,
        b = 0,
        x = 0;
      e.every((t) => {
        if (!(g.done || v || y)) {
          if (e.dist(g.a.x, g.a.z) < 7) {
            (g.a.moving && g.a.stop(), g.a.faceTo(e.px, e.pz), (b = 1.5));
            return;
          }
          (b -= t) > 0 ||
            ((b = 4.6),
            (x ^= 1),
            (g.a.anim = `idle`),
            g.a.moveTo(71.6 + x * 1.2, 389.4 + x * 3.2, 1.3));
        }
      });
      let S = 0,
        C = (t, n) => {
          ((t.done = !0), t.tag?.remove(), (t.tag = null));
          let r = G3[S++ % G3.length];
          if (((t.at = r), (t.a.anim = `idle`), n)) {
            t.a.place(r.x, r.z, Math.PI / 2);
            return;
          }
          r6(e, t.a, r.x, r.z, 1.35, () => t.a.faceTo(W3.x + 2, W3.z));
        };
      for (let e of m) s & e.bit && C(e, !0);
      let w = [];
      if (o < 20) {
        let e = f($3.snapper, t6.snapper, 90.6, 262, -Math.PI / 2);
        e.anim = `crossArms`;
        let t = f($3.hayfever, t6.hayfever, 59.4, 284, Math.PI / 2);
        w.push(
          {
            a: e,
            sp: t6.snapper,
            reply: F(
              `……？我在拍和光的鐘啊。黃昏的時候最好看。`,
              `…? I'm shooting the Wako clock. It looks best at dusk.`,
              `……？和光の時計撮ってるんですよ。夕暮れが一番きれいなんで。`,
            ),
            done: !1,
          },
          {
            a: t,
            sp: t6.hayfever,
            reply: F(
              `（擤鼻涕）……花粉症啦。我在等我朋友。`,
              `(sniffs) …Hay fever. I'm waiting for a friend.`,
              `（鼻をすすって）……花粉症です。友だち待ってるだけで。`,
            ),
            done: !1,
          },
        );
      }
      let T = !1,
        E = 0,
        D = (t, n) => {
          e.addTime(-t);
          try {
            c.setHour(c.hour + (t * J3) / 60);
          } catch {}
          (e.sfx(`ui_back`, { ui: !0 }), e.notify(n, `bad`, 3));
        };
      (o < 1 &&
        (await m2(e, async (e) => {
          let n = t.plan.groundHeight(84, 372);
          (e.shot(new k(86, n + 3.2, 374), new k(60, n + 10, 326)),
            await e.call(
              Q.gen,
              F(
                `（電話）桐島的人穿便衣在附近。可是如果警察先動手，那些孩子會被當成搶匪抓走，神城什麼事都沒有。`,
                `(phone) Kirishima's people are around in plain clothes. But if the police move first, those kids get arrested as robbers and Kamishiro walks.`,
                `（電話）桐島の部下が私服で張ってる。だが警察が先に動けば、あの子たちは強盗で捕まって、神城は無傷だ。`,
              ),
            ),
            await e.say(
              Q.gen,
              F(
                `（電話）五點半動手——和光的鐘你看得到吧。在那之前，一個一個勸他們走。`,
                `(phone) They go at half past five — you can see the Wako clock. Before then, talk them out of it, one by one.`,
                `（電話）五時半に動く——和光の時計が見えるだろ。それまでに、一人ずつ説得しろ。`,
              ),
            ),
            await e.say(
              Q.yuki,
              F(
                `（訊息）我們四個。他們叫我們從頭到腳穿全黑。大地在麵包店前面。翔最小，在四越的獅子旁邊。`,
                `(text) Four of us. They told us to wear black head to toe. Daichi is by the bakery. Sho is the youngest, by the lion at Yotsukoshi.`,
                `（メッセージ）四人です。上から下まで黒で来いって言われた。大地はパン屋の前。翔が一番年下で、四越のライオンの横。`,
              ),
            ),
            await e.say(
              Q.yuki,
              F(
                `（訊息）蓮是金頭髮，在五丁目那頭走來走去。我穿平常那件灰色連帽衫，在鐘錶店前面。……有人在盯著我們，我不知道是誰。`,
                `(text) Ren has bleached hair, pacing at the 5-chome end. I'm in my usual grey hoodie, at the watch shop. …Someone is watching us. I don't know who.`,
                `（メッセージ）蓮は金髪で、五丁目の方をうろうろしてる。俺はいつものグレーのパーカーで時計屋の前。……誰かに見張られてる。誰かは分からない。`,
              ),
            ),
            await e.say(
              Q.gen,
              F(
                `（電話）新人不會被單獨放著。附近一定有個見張的——拿著手機。他看到有人跟那些孩子講話，就會提早動手。`,
                `(phone) They never leave new kids alone. There'll be a lookout nearby, on a phone. If he sees anyone talking to those kids, he moves the job up.`,
                `（電話）新人を放っておくわけがねえ。近くに見張りがいる、携帯持ってな。誰かがガキと話してるのを見たら、時間を早める。`,
              ),
            ),
            await e.say(
              Q.gen,
              F(
                `（電話）先找出他。桐島的人——森刑事，米色外套，在四越的獅子像旁。確定了就傳訊息給他，他會安靜地把人帶走。`,
                `(phone) Find him first. Kirishima's man — Detective Mori, beige jacket, by the lion at Yotsukoshi. When you're sure, text him; he'll take the man away quietly.`,
                `（電話）まずそいつを見つけろ。桐島の部下の森、ベージュの上着でライオンの横にいる。確信したらメッセージを送れ。静かに連れていく。`,
              ),
            ),
            await e.say(
              Q.gen,
              F(
                `（電話）傳錯人的話……整條街都會看到便衣。只有一次機會，最好別浪費。`,
                `(phone) Text him the wrong man, and the whole street sees a plain-clothes cop. Better not waste it.`,
                `（電話）人違いなら、通り中に私服がいるってバレる。無駄にするなよ。`,
              ),
            ));
        }),
        i.mark(1, { x: e.px, z: e.pz, heading: t.player.heading })),
        o < 20 &&
          e.setTimer(d, F(`17:30 動手`, `17:30 the job`), () => (T = !0)));
      let O = [],
        A = null,
        j = null;
      if (o < 2) {
        ((A = f($3.mori, t6.mori, 87.6, 318.6, -Math.PI / 2)),
          (A.anim = `crossArms`));
        let t = (t, n, r, i, a, o, s, c = !1) => {
          let l = f(t, n, r, i, a);
          l.anim = `phone`;
          let u = {
            a: l,
            sp: n,
            lines: o,
            wrongReply: s,
            lookout: c,
            out: !1,
            li: 0,
            cd: 0,
            t: 0,
            tag: null,
            heard: !1,
          };
          return (
            (u.tag = j0(e, l, { color: Z3, label: Q3, size: 0.7 })),
            O.push(u),
            u
          );
        };
        ((j = t(
          $3.lookout,
          t6.lookout,
          70.8,
          313.4,
          Math.PI,
          [
            F(
              `（小聲）……四個都到了。……嗯，五點半。……沒有，沒人靠近。`,
              `(low) …All four are here. …Yeah, half five. …No, nobody's gone near them.`,
              `（小声）……四人そろってます。……ええ、五時半。……いや、誰も近づいてません。`,
            ),
            F(
              `（小聲）……金頭髮那個一直走來走去。叫他站好。`,
              `(low) …The bleached one keeps pacing. Tell him to stand still.`,
              `（小声）……金髪の奴、ずっとうろうろしてる。じっとしてろって言ってください。`,
            ),
            F(
              `（小聲）……騎車的在二丁目待命？……了解。`,
              `(low) …The rider's standing by at 2-chome? …Got it.`,
              `（小声）……バイクは二丁目で待機ですね。……了解。`,
            ),
          ],
          F(``, ``, ``),
          !0,
        )),
          t(
            $3.date,
            t6.date,
            90.4,
            316.4,
            Math.PI,
            [
              F(
                `我在獅子像前面啦！……你又遲到了喔？`,
                `I'm at the lion! …You're late again, aren't you?`,
                `ライオンの前にいるってば！……また遅刻？`,
              ),
              F(
                `……你說的「馬上到」是幾分鐘？`,
                `…How many minutes is your "almost there"?`,
                `……「もう着く」って、あと何分？`,
              ),
            ],
            F(
              `蛤？我在等男朋友耶！`,
              `Excuse me? I'm waiting for my boyfriend!`,
              `は？彼氏待ってるんですけど！`,
            ),
          ),
          t(
            $3.tourist,
            t6.tourist,
            79.2,
            287,
            0,
            [
              F(
                `媽，你看！整條路都沒有車耶！`,
                `Mum, look! Not a single car on the whole street!`,
                `ママ見て！道路に車が一台もないの！`,
              ),
              F(
                `……等一下，我轉一下鏡頭……那個就是和光的鐘。`,
                `…Hang on, let me turn the camera… that's the Wako clock.`,
                `……待って、カメラ回すね……あれが和光の時計。`,
              ),
            ],
            F(
              `欸？我在跟我媽視訊……`,
              `Huh? I'm on a video call with my mum…`,
              `え？今ママとビデオ通話中で……`,
            ),
          ),
          t(
            $3.boss,
            t6.boss,
            60,
            299.5,
            Math.PI / 2,
            [
              F(
                `……是，部長。星期一之前一定會整理好……是，是。`,
                `…Yes, sir. I'll have it all ready by Monday… yes, yes.`,
                `……はい、部長。月曜までに必ずまとめます……はい、はい。`,
              ),
              F(
                `……（小聲）星期六也打來……是，我在聽。`,
                `…(under his breath) On a Saturday, too… Yes, sir, I'm listening.`,
                `……（小声で）土曜まで……はい、聞いてます。`,
              ),
            ],
            F(
              `……我、我只是在跟部長講電話……`,
              `…I-I'm just on the phone with my boss…`,
              `……ぶ、部長と電話してただけで……`,
            ),
          ));
      }
      let M = !!j,
        ee = 0,
        te = 0,
        ne = 0,
        N = 0,
        re = !1,
        ie = 0,
        ae = 0,
        oe = !1;
      e.every((n) => {
        ee -= n;
        for (let t of O) {
          if (t.out) {
            (t.tag?.remove(), (t.tag = null));
            continue;
          }
          if (((t.t += n), t.lookout)) {
            if ((te -= n) <= 0) {
              te = 2.6;
              let e = m.filter((e) => !e.done),
                n = e[ne++ % Math.max(1, e.length)];
              n && t.a.faceTo(n.a.x, n.a.z);
            }
          } else
            t.sp === t6.date
              ? t.t > 4 &&
                ((t.t = 0), (t.a.heading = t.a.heading > 0 ? -0.2 : Math.PI))
              : t.sp === t6.tourist && (t.a.heading += n * 0.35);
          (t.tag?.update(),
            !(
              y ||
              ee > 0 ||
              (t.cd -= n) > 0 ||
              e.talking ||
              e.dist(t.a.x, t.a.z) > 7
            ) &&
              ((t.cd = 7),
              (ee = 3.2),
              (t.heard = !0),
              J0(e, t.sp, t.lines[t.li++ % t.lines.length], 2.8)));
        }
        if (
          j &&
          M &&
          !y &&
          ((N = e.dist(j.a.x, j.a.z) < 2.6 ? N + n : Math.max(0, N - n * 0.5)),
          N > 1.8)
        ) {
          ((N = 0),
            J0(
              e,
              j.sp,
              F(
                `（電話）……等一下。有個人一直站在我旁邊。……我換個位置。`,
                `(phone) …Hold on. Someone keeps standing right next to me. …I'm moving.`,
                `（電話）……ちょっと待って。さっきから隣に誰かいる。……場所変えます。`,
              ),
              3,
            ),
            D(
              40,
              F(
                `見張的人注意到你了——動手時間提前 40 秒`,
                `The lookout noticed you — the job moves up 40 s`,
              ),
            ));
          let n = C0(
            t,
            j.a.x > 75 ? 70.6 : 81.4,
            j.a.z > 305 ? 301 : 314,
            3,
            !0,
          );
          r6(e, j.a, n.x, n.z, 1.3, () => (j.a.anim = `phone`));
        }
        for (let t of m)
          t.done ||
            (!t.tag &&
              !(t.id === `ren` && v) &&
              (t.tag = j0(e, t.a, {
                color: S0,
                label: { zh: t.sp.name.zh, en: t.sp.name.en, ja: t.sp.name.ja },
              })),
            !t.seen &&
              !y &&
              !e.talking &&
              e.dist(t.a.x, t.a.z) < 10 &&
              ((t.seen = !0), J0(e, a, t.spot, 2.6)),
            t.tag?.update());
        if (o < 20 && !oe) {
          let t = NaN,
            n = NaN,
            r = 1 / 0;
          if (M)
            for (let i of O) {
              let a = e.dist(i.a.x, i.a.z);
              !i.out &&
                !i.heard &&
                a < r &&
                ((r = a), (t = i.a.x), (n = i.a.z));
            }
          else {
            let i = m.filter((e) => !e.done && !(e.id === `ren` && v)),
              a = i.some((e) => e.id !== `yuki`)
                ? i.filter((e) => e.id !== `yuki`)
                : i;
            for (let i of a) {
              let a = e.dist(i.a.x, i.a.z);
              a < r && ((r = a), (t = i.a.x), (n = i.a.z));
            }
          }
          Number.isNaN(t) || y
            ? (re && e.waypoint(null), (re = !1))
            : (!re || Math.hypot(t - ie, n - ae) > 3) &&
              ((re = !0), (ie = t), (ae = n), e.waypoint({ x: t, z: n }));
        }
      });
      let se = () => {
          if (M) {
            e.objective(
              F(
                `找出見張的人：講電話、眼睛盯著那四個人。靠近偷聽（別貼太近），確定了再傳給森刑事`,
                `Find the lookout: on a phone, eyes on the four. Overhear him (not too close), then text Detective Mori`,
              ),
            );
            return;
          }
          let t = m.filter((e) => !e.done);
          (e.objective({
            zh: r.on
              ? r.t(
                  `勸走打工者（全身黑）：${t.map((e) => e.desc.zh).join(`、`)}`,
                  `闇バイトを説得する（全身黒）：${t.map((e) => r.jz(e.desc.zh)).join(`、`)}`,
                )
              : `勸走打工者（全身黑）：${t.map((e) => e.desc.zh).join(`、`)}`,
            en: `Talk the recruits out (black head to toe): ${t.map((e) => e.desc.en).join(`, `)}`,
          }),
            e.progress(
              F(`勸走`, `Talked down`),
              (m.length - t.length) / m.length,
            ));
        },
        ce = async (t) => {
          if (!A) return;
          let n = A;
          ((n.anim = `idle`), n.moveTo(t.x + 0.9, t.z + 0.5, 2.4));
          let r = 0;
          (await e.until(
            (e) => n.distTo(t.x + 0.9, t.z + 0.5) < 0.8 || (r += e) > 8,
          ),
            r > 8 && n.place(t.x + 0.9, t.z + 0.5),
            n.stop(),
            n.faceTo(t.x, t.z),
            t.faceTo(n.x, n.z));
        },
        P = { kind: `pressE`, x: 0, z: 0, onFoot: !0 };
      for (o < 20 && se(); o < 20 && m.some((e) => !e.done) && !T;) {
        let n = m.find((e) => !e.done && e.id !== `yuki`) ?? _;
        e.waitFor = P;
        let o = null;
        if (
          (await e.until(() => {
            if (T) return !0;
            (M && j
              ? ((P.x = j.a.x + 4.2), (P.z = j.a.z))
              : ((P.x = n.a.x), (P.z = n.a.z)),
              (o = null));
            let r = X3;
            for (let t of m) {
              let n = e.dist(t.a.x, t.a.z);
              !t.done &&
                n < r &&
                !(t.id === `ren` && v) &&
                ((r = n), (o = { k: `recruit`, r: t }));
            }
            for (let t of w) {
              let n = e.dist(t.a.x, t.a.z);
              !t.done && n < r && ((r = n), (o = { k: `alike`, l: t }));
            }
            if (!o && M) {
              let t = 7;
              for (let n of O) {
                let r = e.dist(n.a.x, n.a.z);
                !n.out && r < t && ((t = r), (o = { k: `phoner`, p: n }));
              }
            }
            if (!o) return !1;
            let i = o;
            return (
              e.hud.prompt(
                i.k === `phoner`
                  ? F(
                      `按 {interact} 傳訊息給森刑事：「就是他」`,
                      `Press {interact} to text Detective Mori: "It's him"`,
                    )
                  : i.k === `recruit` && M
                    ? F(
                        `按 {interact} 搭話（見張的人還在看）`,
                        `Press {interact} to talk (the lookout is still watching)`,
                        `{interact} で話しかける（見張りがまだ見ている）`,
                      )
                    : F(`按 {interact} 搭話`, `Press {interact} to talk`),
              ) && t.input.pressed(`interact`)
            );
          }),
          T)
        )
          break;
        let s = o;
        if (s) {
          ((e.waitFor = null), (y = !0));
          try {
            if (s.k === `alike`)
              (s.l.a.faceTo(e.px, e.pz),
                await $(
                  e,
                  a,
                  F(
                    `……不好意思，你是——`,
                    `…Excuse me, are you—`,
                    `……すみません、もしかして——`,
                  ),
                  1.4,
                ),
                await $(e, s.l.sp, s.l.reply),
                await $(
                  e,
                  a,
                  F(
                    `（認錯人了。他們要的是從頭到腳全黑。）`,
                    `(Wrong person. Theirs is black head to toe.)`,
                    `（人違いだ。あいつらは上から下まで黒だ）`,
                  ),
                  2.4,
                ),
                (s.l.done = !0));
            else if (s.k === `phoner`) {
              let n = s.p;
              if (
                (
                  await y2(e, {
                    prompt: F(
                      `傳給森刑事：「拿手機的那個，就是他。」`,
                      `Text Detective Mori: "The man on the phone — it's him."`,
                      `森刑事に送る：「電話の男、そいつだ」`,
                    ),
                    options: [
                      {
                        text: F(
                          `……再聽一下再說。`,
                          `…Listen a bit longer first.`,
                          `……もう少し聞いてから。`,
                        ),
                        score: 0,
                      },
                      {
                        text: F(
                          `（傳送）就是他。`,
                          `(send) It's him.`,
                          `（送信）そいつだ。`,
                        ),
                        score: 2,
                      },
                    ],
                    secs: 10,
                    timeoutScore: 0,
                  })
                ).score >= 2
              ) {
                if (
                  (e.sfx(`phone_notify`, { ui: !0 }),
                  await ce(n.a),
                  await $(
                    e,
                    t6.mori,
                    F(
                      `不好意思，我是警察。可以跟你聊一下嗎？`,
                      `Excuse me — police. Have you got a minute?`,
                      `すみません、警察です。ちょっとお話いいですか。`,
                    ),
                  ),
                  n.lookout)
                ) {
                  (await $(
                    e,
                    n.sp,
                    F(
                      `……蛤？我什麼都沒做啊。`,
                      `…Huh? I haven't done anything.`,
                      `……は？何もしてないっすよ。`,
                    ),
                  ),
                    await $(
                      e,
                      t6.mori,
                      F(
                        `那把手機借我看一下，應該沒問題吧。`,
                        `Then you won't mind showing me that phone.`,
                        `じゃあ、その携帯見せてもらっても大丈夫ですよね。`,
                      ),
                    ),
                    (M = !1),
                    (n.out = !0),
                    (n.a.anim = `idle`));
                  let r = A;
                  (r6(e, n.a, 44, 356, 1.2, () => e.removeActor(n.a)),
                    r6(e, r, 45, 357.2, 1.2, () => e.removeActor(r)),
                    (A = null),
                    e.sfx(`phone_notify`, { ui: !0 }),
                    await $(
                      e,
                      t6.mori,
                      F(
                        `（訊息）抓到了。他的手機裡有個資料夾：四個孩子的身分證照片和地址。今天不會有人傳出去了。`,
                        `(text) Got him. His phone has a folder: the four kids' ID photos and addresses. Nobody is sending anything today.`,
                        `（メッセージ）確保。携帯に四人の身分証の写真と住所のフォルダがあった。今日はもう誰も送れない。`,
                      ),
                    ),
                    await $(
                      e,
                      a,
                      F(
                        `……剩下的，就看那四個人自己了。`,
                        `…Now it comes down to the four of them.`,
                        `……あとは、あの四人次第だ。`,
                      ),
                      2.4,
                    ));
                  for (let t of O) {
                    if (t.out) continue;
                    ((t.out = !0), (t.a.anim = `idle`));
                    let n = t.a;
                    r6(e, n, n.x + (n.x < 75 ? -2 : 2), n.z + 30, 1.1, () =>
                      e.removeActor(n),
                    );
                  }
                  i.mark(2, { x: e.px, z: e.pz, heading: t.player.heading });
                } else
                  (await $(e, n.sp, n.wrongReply),
                    (n.out = !0),
                    E++,
                    e.sfx(`phone_notify`, { ui: !0 }),
                    await $(
                      e,
                      t6.mori,
                      F(
                        `（訊息）不是他。半條街都看到便衣了——真正的那個會更小心。`,
                        `(text) Not him. Half the street just saw a plain-clothes cop — your man will be warier now.`,
                        `（メッセージ）違う。通りの半分に私服がバレた。本命は警戒するぞ。`,
                      ),
                    ),
                    D(
                      45,
                      F(
                        `傳錯人了——動手時間提前 45 秒`,
                        `Wrong man — the job moves up 45 s`,
                      ),
                    ),
                    A?.moveTo(87.6, 318.6, 1.4));
              }
            } else {
              let n = s.r;
              if (M)
                (n.a.faceTo(e.px, e.pz),
                  j && i6(j.a, n.a.x, n.a.z, 45, 0.95)
                    ? (J0(
                        e,
                        j.sp,
                        F(
                          `（電話）……有人在跟新人講話。……知道了，提早。`,
                          `(phone) …Someone's talking to one of the new ones. …Understood — earlier.`,
                          `（電話）……新人に誰か話しかけてます。……了解、早めます。`,
                        ),
                        3,
                      ),
                      await $(
                        e,
                        n.sp,
                        F(
                          `……走開。有人在看。`,
                          `…Go away. Someone's watching.`,
                          `……あっち行ってください。見られてる。`,
                        ),
                        2,
                      ),
                      D(
                        60,
                        F(
                          `見張的人看到你在跟他們講話——動手時間提前 60 秒`,
                          `The lookout saw you talking to one of them — the job moves up 60 s`,
                        ),
                      ))
                    : await $(
                        e,
                        n.sp,
                        F(
                          `（左右張望）……現在不行。他們有人在看著我們。`,
                          `(glancing around) …Not now. One of them is watching us.`,
                          `（周りを見回して）……今は無理です。誰かが見てるんで。`,
                        ),
                        2.6,
                      ),
                  await $(
                    e,
                    a,
                    F(
                      `（先找出見張的人——講電話的那幾個，靠近聽他們在說什麼。）`,
                      `(The lookout first — get close to the people on their phones and hear what they say.)`,
                      `（まず見張りだ——電話中の連中に近づいて、話を聞け）`,
                    ),
                    2.8,
                  ));
              else if (
                n.id === `yuki` &&
                m.some((e) => !e.done && e.id !== `yuki`)
              )
                (n.a.faceTo(e.px, e.pz),
                  await $(
                    e,
                    n.sp,
                    F(
                      `……先去找其他人。他們看到我先走，會慌掉的。`,
                      `…Get the others first. If they see me leave first, they'll panic.`,
                      `……先に他の三人を。俺が先に抜けたら、みんなパニックになる。`,
                    ),
                  ));
              else {
                let o = n.id === `ren` ? await de(n) : await ue(n);
                if (o === `fail`) return;
                if (o === `ok`) {
                  C(n, !1);
                  let r = m
                    .filter((e) => e.done && e.id !== `yuki`)
                    .reduce((e, t) => e | t.bit, 0);
                  n.id !== `yuki` &&
                    i.mark(10 + r, {
                      x: e.px,
                      z: e.pz,
                      heading: t.player.heading,
                    });
                } else {
                  if ((E++, n.wrong++, n.wrong >= 2)) {
                    e.fail(
                      F(
                        r.on
                          ? r.t(
                              `${n.sp.name.zh}不再相信你了——他們提早動手了`,
                              `${r.jz(n.sp.name.zh)}にもう信用されない——連中は早めに動いた`,
                            )
                          : `${n.sp.name.zh}不再相信你了——他們提早動手了`,
                        `${n.sp.name.en} won't trust you now — they went ahead early`,
                      ),
                    );
                    return;
                  }
                  if (
                    (D(
                      40,
                      F(
                        `說錯話了——他走掉了，動手時間提前 40 秒`,
                        `Wrong words — he walked off, and the job moves up 40 s`,
                      ),
                    ),
                    n.id !== `ren`)
                  ) {
                    n.a.anim = `idle`;
                    let r = n.a,
                      i = C0(t, n.away.x, n.away.z, 3);
                    (r6(e, r, i.x, i.z, 1.3, () => (r.anim = `idle`)),
                      await $(e, a, n.awayLine, 2.8));
                  }
                }
              }
            }
          } finally {
            y = !1;
          }
          se();
        }
      }
      if (T) {
        e.fail(
          F(`五點半了——他們動手了`, `Half past five — they went ahead with it`),
        );
        return;
      }
      let le = e.timeLeft;
      ((oe = !0),
        re && e.waypoint(null),
        e.clearTimer(),
        e.progress(null),
        e.objective(null));
      for (let t of w) e.removeActor(t.a);
      c.timeScale = 0.3;
      async function ue(t) {
        let n = t.a;
        return (
          (n.anim = `idle`),
          n.faceTo(e.px, e.pz),
          n.lookAt(`player`),
          t.id === `daichi`
            ? (t.wrong ||
                (await $(
                  e,
                  t.sp,
                  F(
                    `……你是誰？神城先生說過，可能會有人來「測試」我們。`,
                    `…Who are you? Mr. Kamishiro said someone might come to "test" us.`,
                    `……誰ですか。神城さんが、誰かが「テスト」しに来るかもって言ってました。`,
                  ),
                ),
                await $(
                  e,
                  t.sp,
                  F(
                    `他還說，萬一出事，公司會請律師。「一個都不會丟下」。`,
                    `He also said that if anything goes wrong, the company pays for a lawyer. "Nobody gets left behind."`,
                    `それに、何かあったら会社が弁護士をつけるって。「誰も見捨てない」って。`,
                  ),
                )),
              (await n6(e, t.sp, {
                them: F(
                  `我在念法律，夜間部。給我證據，不然就閃開。`,
                  `I study law — nights. Show me evidence, or get out of my way.`,
                  `俺、夜間の法学部なんで。証拠を見せてください。でなきゃ、どいて。`,
                ),
                options: [
                  {
                    text: F(
                      `（給他看照片）東京車站前，神城的司機收下信封的那張。`,
                      `(show the photo) Tokyo Station: Kamishiro's driver taking the envelope.`,
                      `（写真を見せる）東京駅前で、神城の運転手が封筒を受け取ったところ。`,
                    ),
                    score: -1,
                    reply: F(
                      `所以他的司機在收錢。這證明他拿錢——跟他會怎麼對我們無關。`,
                      `So his driver collects cash. That proves he takes money — not what he'll do with us.`,
                      `つまり運転手が金を受け取ってる。金を取ってる証拠にはなっても、俺たちをどうするかとは関係ない。`,
                    ),
                  },
                  {
                    text: F(
                      `（給他看傳單）「誰都做得來的簡單工作，日薪三萬起。」`,
                      `(show the flyer) "Easy work anyone can do. ¥30,000 a day and up."`,
                      `（チラシを見せる）「誰でもできる簡単なお仕事。日給3万円〜」。`,
                    ),
                    score: -2,
                    reply: F(
                      `這張傳單我自己應徵過，我知道它是什麼。這不是證據。`,
                      `I answered that flyer myself. I know what it is. That's not evidence.`,
                      `そのチラシ、俺が応募したやつです。何なのかは分かってる。証拠にならない。`,
                    ),
                  },
                  {
                    text: F(
                      `（播放錄音）卡拉OK包廂隔壁，神城自己開會的聲音。`,
                      `(play the recording) Kamishiro's own voice, from the meeting next to the karaoke booth.`,
                      `（録音を再生）カラオケの隣の部屋、神城本人の会議の声。`,
                    ),
                    score: 2,
                    reply: F(``, ``, ``),
                  },
                ],
              }))
                ? (await $(
                    e,
                    Q.kamishiro,
                    F(
                      `（錄音）誰都做得來的簡單工作。……被抓的，也只有那些孩子。`,
                      `(recording) Easy work anyone can do. …And the only ones who get caught are those kids.`,
                      `（録音）誰でもできる簡単なお仕事です。……捕まるのは、あの子たちだけですから。`,
                    ),
                  ),
                  await $(
                    e,
                    t.sp,
                    F(
                      `……「只有那些孩子」。……是他的聲音沒錯。`,
                      `…"Only those kids." …That's his voice.`,
                      `……「あの子たちだけ」。……間違いなく、あの人の声だ。`,
                    ),
                  ),
                  await $(
                    e,
                    t.sp,
                    F(
                      `現在走進交番的話，我還什麼都沒做——是證人，不是犯人。……我去。`,
                      `If I walk in now, I haven't done anything yet — I'm a witness, not a criminal. …I'm going.`,
                      `今交番に行けば、俺はまだ何もしてない——犯人じゃなくて証人だ。……行きます。`,
                    ),
                  ),
                  `ok`)
                : `wrong`)
            : t.id === `sho`
              ? (t.wrong ||
                  (await $(
                    e,
                    t.sp,
                    F(
                      `……拜託，不要跟我講話。`,
                      `…Please. Don't talk to me.`,
                      `……お願いです、話しかけないでください。`,
                    ),
                    2,
                  ),
                  await $(
                    e,
                    a,
                    F(
                      `你就坐在交番旁邊。走進去只要三步。`,
                      `You're sitting right next to a police box. It's three steps.`,
                      `交番のすぐ横じゃないか。三歩で入れる。`,
                    ),
                    2.4,
                  )),
                (await n6(e, t.sp, {
                  them: F(
                    `他們傳了我妹的照片給我。在錦糸町的補習班門口……她七點下課。`,
                    `They sent me a photo of my little sister. Outside her cram school in Kinshicho… She gets out at seven.`,
                    `妹の写真が送られてきたんです。錦糸町の塾の前で……七時に終わるんです。`,
                  ),
                  options: [
                    {
                      text: F(
                        `拿著照片的那個人，剛剛被刑事帶走了。沒人能再傳任何東西了。`,
                        `The man with the photos was just taken away by a detective. Nobody can send anything now.`,
                        `写真を持ってた男は、さっき刑事が連れていった。もう誰も何も送れない。`,
                      ),
                      score: -1,
                      reply: F(
                        `他們不用傳什麼！他們知道她七點會在哪裡啊！`,
                        `They don't need to send anything! They know where she'll be at seven!`,
                        `送る必要なんてない！七時にどこにいるか知ってるんだから！`,
                      ),
                    },
                    {
                      text: F(
                        `現在打給她，叫她在補習班裡面等。源さん會請錦糸町的交番去接她。`,
                        `Call her now — tell her to wait inside the school. Gen-san will have the Kinshicho koban pick her up.`,
                        `今電話して、塾の中で待つように言って。源さんが錦糸町の交番に迎えを頼む。`,
                      ),
                      score: 2,
                      reply: F(``, ``, ``),
                    },
                    {
                      text: F(
                        `桐島警部補已經派人去你家了。源さん剛剛打過電話。`,
                        `Inspector Kirishima is sending officers to your home. Gen-san just called him.`,
                        `桐島警部補が君の家に人を回してる。源さんがさっき電話した。`,
                      ),
                      score: -2,
                      reply: F(
                        `她不在家啊！她七點前都在補習班！`,
                        `She's not at home! She's at cram school until seven!`,
                        `家にいないんだってば！七時まで塾なんだよ！`,
                      ),
                    },
                  ],
                }))
                  ? ((n.anim = `phone`),
                    await $(
                      e,
                      t.sp,
                      F(
                        `（電話）……美羽？是哥哥。今天在補習班裡面等，會有警察姊姊來接妳。……嗯，哥哥沒事。`,
                        `(phone) …Miu? It's me. Wait inside the school today — a police officer will come and get you. …Yeah. I'm okay.`,
                        `（電話）……美羽？お兄ちゃんだ。今日は塾の中で待ってて。おまわりさんが迎えに来るから。……うん、お兄ちゃんは大丈夫。`,
                      ),
                    ),
                    await Y0(
                      e,
                      Q.gen,
                      F(
                        `（電話）錦糸町的交番，說好了。七點前兩個人會在補習班門口。`,
                        `(phone) Kinshicho koban — done. Two officers at the school door before seven.`,
                        `（電話）錦糸町の交番、話はついた。七時前に二人、塾の前に立つ。`,
                      ),
                    ),
                    await $(
                      e,
                      t.sp,
                      F(
                        `……謝謝。交番……就在旁邊呢。`,
                        `…Thank you. The koban… it's right here, isn't it.`,
                        `……ありがとうございます。交番……すぐそこ、ですね。`,
                      ),
                      2.4,
                    ),
                    `ok`)
                  : `wrong`)
              : (t.wrong ||
                  (await $(
                    e,
                    t.sp,
                    F(
                      `……你還是來了。`,
                      `…You came after all.`,
                      `……やっぱり来たんですね。`,
                    ),
                    2,
                  )),
                (await n6(e, t.sp, {
                  them: F(
                    `我們四個走進交番，今晚神城就會知道。小晴姊還在新橋，在他們手上……我不能害她。`,
                    `If the four of us walk into a koban, Kamishiro will know by tonight. Hsiao-Ching is still in Shimbashi with them… I can't do that to her.`,
                    `四人で交番に入ったら、今夜には神城に伝わる。小晴さんはまだ新橋に……あの人をそんな目にあわせられない。`,
                  ),
                  options: [
                    {
                      text: F(
                        `你媽媽那邊沒事了，桐島的人守在你家門口。你可以放心。`,
                        `Your mum is safe — Kirishima's people are at your door. You can stop worrying.`,
                        `お母さんは大丈夫。桐島の部下が家の前にいる。もう心配いらない。`,
                      ),
                      score: -1,
                      reply: F(
                        `這次不是我媽……是她啊。`,
                        `It's not my mum this time… it's her.`,
                        `今度は母さんじゃない……あの人なんです。`,
                      ),
                    },
                    {
                      text: F(
                        `辰都告訴我了：新烏森大樓，三樓。我們會去把她帶出來——你得先平安。`,
                        `Tatsu told me everything: the New Karasumori Building, third floor. We're getting her out — you have to be safe first.`,
                        `辰から全部聞いた。ニュー烏森ビルの三階。彼女は俺たちが連れ出す——まず君が無事でいないと。`,
                      ),
                      score: 2,
                      reply: F(``, ``, ``),
                    },
                    {
                      text: F(
                        `上次你跑掉了，我還是追來了。這次也一樣，我不會丟下你。`,
                        `You ran last time and I still came after you. Same this time — I'm not leaving you.`,
                        `この前君は逃げたけど、俺は追ってきた。今度も同じだ。君を置いていかない。`,
                      ),
                      score: -2,
                      reply: F(
                        `重點不是我啦！他們會傷害的不是我！`,
                        `That's not the point! I'm not the one they'll hurt!`,
                        `俺のことはいいんだよ！傷つけられるのは俺じゃない！`,
                      ),
                    },
                  ],
                }))
                  ? (await $(
                      e,
                      t.sp,
                      F(
                        `……新烏森大樓。你連那裡都查到了。`,
                        `…The New Karasumori Building. You found that too.`,
                        `……ニュー烏森ビル。そこまで調べたんですね。`,
                      ),
                      2.4,
                    ),
                    await $(
                      e,
                      t.sp,
                      F(
                        `（拿下口罩）……我去。大家，走吧。`,
                        `(takes off his mask) …I'll go. Everyone — let's go.`,
                        `（マスクを外して）……行きます。みんな、行こう。`,
                      ),
                      2.4,
                    ),
                    `ok`)
                  : `wrong`)
        );
      }
      async function de(t) {
        let n = t.a;
        (n.stop(),
          n.faceTo(e.px, e.pz),
          t.wrong
            ? await $(e, t.sp, F(`……放開！`, `…Let go!`, `……離せよ！`), 1.2)
            : await $(
                e,
                t.sp,
                F(
                  `……啊？你誰啊——條子？`,
                  `…Huh? Who are you — a cop?`,
                  `……あ？誰だよ——サツか？`,
                ),
                1.6,
              ),
          t.tag?.remove(),
          (t.tag = null),
          (v = !0),
          (n.anim = `idle`));
        let r = [
            { x: 75, z: 410 },
            { x: 68, z: 430 },
            { x: 79, z: 452 },
            { x: 70, z: 474 },
            { x: 80, z: 496 },
            { x: 69, z: 518 },
            { x: 78, z: 540 },
            { x: 71, z: 562 },
            { x: 77, z: 584 },
            { x: 75, z: 603 },
          ],
          i = n.x,
          o = n.z,
          s = [
            { x: Math.min(80, i + 6), z: o + 14 },
            { x: Math.max(68, i - 6), z: o + 26 },
            { x: Math.min(80, i + 5), z: o + 4 },
            { x: Math.max(68, i - 5), z: o - 10 },
          ],
          c = !1,
          l = F(
            `蓮消失在人群裡了——他會自己一個人動手`,
            `Ren vanished into the crowd — he will do the job alone`,
          ),
          u = t.wrong
            ? N0(e, n, {
                path: s,
                loop: !0,
                speed: 0.95,
                farD: 45,
                escape: 6,
                lost: l,
                speaker: { zh: t.sp.name.zh, en: t.sp.name.en },
              })
            : N0(e, n, {
                path: r.filter((e) => e.z > o + 4),
                onEnd: () => (c = !0),
                speed: 1.08,
                farD: 45,
                escape: 6,
                lost: l,
                speaker: { zh: t.sp.name.zh, en: t.sp.name.en },
                taunts: [
                  F(`別追了！`, `Back off!`, `ついてくんな！`),
                  F(
                    `我沒做什麼啦！`,
                    `I haven't done anything!`,
                    `何もしてねえよ！`,
                  ),
                ],
              });
        return (
          e.objective(
            F(
              `追上蓮——抓住他就好，絕對不能打他`,
              `Catch Ren — just grab him; never hit him`,
            ),
          ),
          (y = !1),
          await e.until(() => u.state === `down` || c),
          (y = !0),
          u.stop(),
          (v = !1),
          c
            ? (e.fail(l), `fail`)
            : u.by === `tackle`
              ? ((n.anim = `cower`),
                n.faceTo(e.px, e.pz),
                await $(
                  e,
                  a,
                  F(
                    `（抓住他的手臂）……冷靜點。我不是來抓你的。`,
                    `(grabbing his arm) …Easy. I'm not here to arrest you.`,
                    `（腕をつかんで）……落ち着け。捕まえに来たんじゃない。`,
                  ),
                  2.4,
                ),
                (n.anim = `idle`),
                t.wrong ||
                  (await $(
                    e,
                    t.sp,
                    F(
                      `（喘氣）……你不是警察？那你管我做什麼！`,
                      `(panting) …You're not a cop? Then what's it to you?`,
                      `（息を切らして）……サツじゃねえ？じゃあ何の用だよ！`,
                    ),
                  )),
                (await n6(e, t.sp, {
                  them: F(
                    `我高中一百公尺跑十一秒。警報一響我就不見了——誰抓得到我？`,
                    `I ran the hundred in eleven seconds in high school. When the alarm goes, I'm gone. Who's going to catch me?`,
                    `高校の百メートル、十一秒だぜ。警報が鳴ったら俺はもういない——誰が捕まえんだよ。`,
                  ),
                  options: [
                    {
                      text: F(
                        `你是被威脅的，這不是你的錯。去交番把話說清楚——你是被害人。`,
                        `They're threatening you — this isn't your fault. Tell the koban everything; you're the victim.`,
                        `脅されてるんだ、君のせいじゃない。交番で全部話せ——君は被害者だ。`,
                      ),
                      score: -1,
                      reply: F(
                        `被害人？是我自己去應徵的。少可憐我了。`,
                        `Victim? I signed up myself. Don't you pity me.`,
                        `被害者？自分で応募したんだよ。同情すんな。`,
                      ),
                    },
                    {
                      text: F(
                        `桐島警部補已經派人去你家了。你的家人不會有事的。`,
                        `Inspector Kirishima has sent officers to your family. They'll be fine.`,
                        `桐島警部補が君の家族のところに人を回した。家族は大丈夫だ。`,
                      ),
                      score: -2,
                      reply: F(
                        `我老爸？他怎樣都好。我又不是為了他來的。`,
                        `My old man? He can rot. That's not why I'm here.`,
                        `親父？どうなろうが知らねえよ。そんな理由で来てねえ。`,
                      ),
                    },
                    {
                      text: F(
                        `我剛剛就在人群裡追上你了。今天這條街上的便衣有二十個——只有騎車的那個有引擎。`,
                        `I just caught you in a crowd. There are twenty plain-clothes officers on this street — the only one with an engine is the rider.`,
                        `今、人混みで俺に捕まったろ。今日この通りに私服は二十人いる——エンジンがあるのはバイクの奴だけだ。`,
                      ),
                      score: 2,
                      reply: F(``, ``, ``),
                    },
                  ],
                }))
                  ? (await $(
                      e,
                      t.sp,
                      F(
                        `……騎車的跑掉，戴手銬的是我們。……可惡。`,
                        `…The rider gets away, and we're the ones in cuffs. …Damn it.`,
                        `……バイクは逃げて、手錠かけられんのは俺らか。……くそっ。`,
                      ),
                      2.6,
                    ),
                    await $(
                      e,
                      t.sp,
                      F(
                        `……好啦。可是我才不要一個人走進去。`,
                        `…Fine. But I'm not walking in there alone.`,
                        `……分かったよ。でも、一人で入んのはごめんだぜ。`,
                      ),
                      2.4,
                    ),
                    await $(
                      e,
                      a,
                      F(
                        `不會的。大家一起。`,
                        `You won't be. All of you, together.`,
                        `一人じゃない。みんな一緒だ。`,
                      ),
                      2,
                    ),
                    `ok`)
                  : `wrong`)
              : (e.fail(
                  F(
                    `你打了蓮——他是被害人，不是敵人`,
                    `You hit Ren — he is a victim, not an enemy`,
                  ),
                ),
                `fail`)
        );
      }
      let fe = (() => {
        let n = C0(t, 89, 334.4, 2);
        return X0(e, Q.kirishima, y0.kirishima, n.x, n.z, -Math.PI / 2);
      })();
      if (o < 20) {
        let n = 0;
        await e.until((e) => (n += e) > 10 || m.every((e) => !e.a.moving));
        for (let e of m)
          (e.a.moving && e.at && e.a.place(e.at.x, e.at.z),
            e.a.stop(),
            (e.a.anim = `idle`),
            e.a.faceTo(fe.x, fe.z));
        await e.wait(0.6);
        let r = _.a;
        (await m2(
          e,
          async (e) => {
            fe.faceTo(r.x, r.z);
            let n = t.plan.groundHeight(W3.x, W3.z);
            (e.shot(
              new k(W3.x - 9.5, n + 2.4, W3.z + 6.5),
              new k(W3.x - 1, n + 1.2, W3.z + 0.5),
            ),
              await e.say(
                Q.kirishima,
                F(
                  `……四個人，用自己的腳走進來的。這樣就夠了——你們是證人，不是搶匪。`,
                  `…Four of you, walking in on your own feet. That is enough — you are witnesses, not robbers.`,
                  `……四人とも、自分の足で来たか。それでいい——君たちは証人だ。強盗じゃない。`,
                ),
              ),
              await e.say(
                Q.yuki,
                F(`……對不起。`, `…I'm sorry.`, `……すみませんでした。`),
                r,
              ),
              await e.say(
                Q.kirishima,
                F(
                  `（對你）剩下的是警察的工作。……你，在神城的人找到你之前，離開這條街。`,
                  `(to you) The rest is police work. …And you — get off this street before Kamishiro's people find you.`,
                  `（あなたに）ここからは警察の仕事だ。……君は、神城の手の者に見つかる前にこの通りを離れろ。`,
                ),
                fe,
              ));
          },
          { thin: { x: W3.x, z: W3.z, r: 10 } },
        ),
          i.mark(20, { x: e.px, z: e.pz, heading: t.player.heading }));
      }
      if (o < 30) {
        let n = e.holdTraffic(75, 355, 30),
          r = [
            { x: 76, z: 196 },
            { x: 75, z: 236 },
            { x: 73, z: 276 },
            { x: 70, z: 308 },
            { x: 66.5, z: 326 },
          ],
          o = r[0],
          s = e.vehicle(`scooter`, o.x, o.z, Math.PI, {
            driver: `ai`,
            locked: !0,
            color: 1118481,
            seed: 0.55,
            cargo: `none`,
          });
        if (!s) {
          e.fail(F(`接應的人沒有出現`, `The getaway rider never showed`));
          return;
        }
        s.driver = `ai`;
        let c = new lt(r, !1),
          l = new Nt(t, s, c, {
            maxSpeed: 7.6,
            latAccel: 3,
            decel: 6,
            avoid: !0,
            swerve: 2,
            canReset: !0,
            yieldToPlayer: !1,
          }),
          u = c.length - 0.5;
        (J0(
          e,
          t6.rider,
          F(
            `（安全帽裡）……那些小鬼，全走進交番了。……好，我自己來。`,
            `(inside his helmet) …The kids all walked into the koban. …Fine. I'll do it myself.`,
            `（ヘルメットの中で）……ガキども、交番に入りやがった。……いい、俺がやる。`,
          ),
          3,
        ),
          await e.wait(2.4),
          await $(
            e,
            a,
            F(
              `那台機車——他要自己去搶鐘錶店！在他騎到店門口之前擋下他！`,
              `That scooter — he's going for the watch shop himself! Get in his way before he reaches it!`,
              `あのバイク——自分で時計屋をやる気だ！店に着く前に止めろ！`,
            ),
            2.6,
          ),
          e.objective(
            F(
              `在機車騎到鐘錶店之前擋住他（和光前）`,
              `Get in the rider's way before he reaches the watch shop (under the Wako clock)`,
            ),
          ));
        let d = e.marker({
          x: s.body.x,
          z: s.body.z,
          y: 2.6,
          color: x0,
          style: `target`,
          iconSize: 0.9,
        });
        e.blip(`rider`, {
          x: s.body.x,
          z: s.body.z,
          icon: `target`,
          label: { zh: t6.rider.name.zh, en: t6.rider.name.en },
          pulse: !0,
          clampToEdge: !0,
          color: `#ff4d5e`,
        });
        let f = `A`,
          p = !1,
          m = !1,
          h = !1,
          g = [5, 6.5, 4.5, 7, 5.5, 6],
          _ = 0,
          v = g[0],
          y = 0,
          b = 0,
          x = 0,
          S = [
            F(`危險！`, `Watch out!`, `危ない！`),
            F(`呀——！`, `Eek—!`, `きゃっ！`),
            F(
              `這裡是步行者天國耶！`,
              `This is a pedestrian zone!`,
              `ここ歩行者天国だぞ！`,
            ),
          ],
          C = { kind: `goto`, x: s.body.x, z: s.body.z, onFoot: !0 };
        if (
          (e.every((n) => {
            if (p || m || h) return;
            let r = s.body.x,
              i = s.body.z,
              a = e.dist(r, i);
            if (
              (d.setPos(r, 2.6, i),
              e.moveBlip(`rider`, r, i),
              (C.x = r),
              (C.z = i),
              (e.waitFor = C),
              f === `A`)
            ) {
              if ((l.update(n, 0.55, u), a < 14)) {
                ((f = `B`), (C.kind = `catch`));
                let n = [
                    { x: r, z: i },
                    { x: 70, z: Math.max(i + 18, 346) },
                    { x: 76, z: 372 },
                    { x: 80, z: 400 },
                    { x: 70, z: 430 },
                    { x: 80, z: 460 },
                    { x: 72, z: 490 },
                    { x: 80, z: 520 },
                    { x: 70, z: 550 },
                    { x: 76, z: 580 },
                    { x: 75, z: 603 },
                  ].filter((e, t) => t === 0 || e.z > i + 6),
                  a = new lt(n, !1);
                ((l = new Nt(t, s, a, {
                  maxSpeed: 7.6,
                  latAccel: 3.4,
                  decel: 7,
                  avoid: !0,
                  swerve: 2.2,
                  canReset: !0,
                  yieldToPlayer: !1,
                })),
                  (u = a.length - 0.5),
                  e.sfx(`horn_scooter`, { x: r, y: 1, z: i }),
                  J0(
                    e,
                    t6.rider,
                    F(`閃開！`, `Out of the way!`, `どけ！`),
                    1.4,
                  ),
                  e.objective(
                    F(
                      `追上機車，在步行者天國的盡頭（八丁目）之前把他拉下車`,
                      `Chase the scooter down and pull him off before the end of the closed street (8-chome)`,
                    ),
                  ),
                  e.hud.bigMessage(
                    F(`追！`, `GO!`),
                    F(`銀座 中央通り`, `Ginza, Chuo-dori`),
                    { duration: 1.4, color: `#ffc83d` },
                  ));
              } else l.s >= u - 0.6 && (m = !0);
              return;
            }
            let o = a > 40 ? 0.55 : a > 25 ? 0.8 : 1;
            (y > 0
              ? ((y -= n), (o = 0.06))
              : (v -= n) <= 0 &&
                ((y = 1.2 + (_ % 3) * 0.3),
                (v = g[++_ % g.length]),
                --b <= 0 &&
                  ((b = 1), e.sfx(`horn_scooter`, { x: r, y: 1, z: i })),
                --x <= 0 &&
                  a < 30 &&
                  ((x = 2), J0(e, Q.crowd, S[_ % S.length], 1.4))),
              l.update(n, o, u),
              a < 2.8 &&
              (t.input.pressed(`interact`) || t.input.pressed(`attack`))
                ? (p = !0)
                : l.s >= u - 0.6 && (h = !0));
          }),
          await e.until(() => p || m || h),
          d.remove(),
          e.removeBlip(`rider`),
          (e.waitFor = null),
          m)
        ) {
          (e.sfx(`glass`, { x: s.body.x, y: 1, z: s.body.z }),
            e.fail(
              F(
                `騎士撞上了鐘錶店的櫥窗——碎玻璃噴到了路人`,
                `The rider rammed the watch shop window — flying glass hit the people outside`,
              ),
            ));
          return;
        }
        if (h) {
          e.fail(
            F(
              `機車騎出了步行者天國，往新橋跑了`,
              `The scooter got out of the closed street and away toward Shimbashi`,
            ),
          );
          return;
        }
        ((s.controls.throttle = 0),
          (s.controls.brake = 1),
          (s.driver = `none`),
          n());
        let w = C0(t, s.body.x + 1.2, s.body.z, 2, !0),
          T = X0(e, t6.rider, y0.crew, w.x, w.z, 0);
        (F0(e, T, `tackle`),
          J0(e, t6.rider, F(`痛……！`, `Agh…!`, `いってぇ……！`), 1.4),
          e.sfx(`police_whistle`, { x: T.x, y: 1, z: T.z }));
        let E = C0(t, T.x - 6, T.z - 8, 3, !0),
          D = X0(e, Q.officer, y0.officer, E.x, E.z, 0);
        (r6(e, D, T.x - 0.9, T.z, 3, () => D.faceTo(T.x, T.z)),
          await e.wait(1.4),
          e.sfx(`phone_ring`, { x: T.x, y: 1, z: T.z }),
          await $(
            e,
            Q.crew,
            F(
              `（騎士的手機）喂？怎麼了？……又是那個臺灣人？給我找出來。`,
              `(the rider's phone) Hello? What happened? …That Taiwanese again? Find him.`,
              `（バイクの男の携帯）おい、どうした？……またあの台湾人か？探し出せ。`,
            ),
            3,
          ),
          i.mark(30, { x: e.px, z: e.pz, heading: t.player.heading }));
      }
      let pe = C0(t, K3.x, K3.z, 4, !0),
        me = e.vehicle(`cab`, pe.x, pe.z, -Math.PI / 2, { seed: 0.31 }),
        he = [];
      for (let [n, r] of [
        [72, 352],
        [78, 358],
        [75, 372],
      ]) {
        let i = C0(t, n, r, 3, !0),
          a = X0(e, Q.officer, y0.officer, i.x, i.z, Math.PI);
        (a.moveTo(i.x, i.z + 150, 1.1), he.push(a));
      }
      let ge = [];
      for (let [n, r] of [
        [
          { x: 59.6, z: 452 },
          { x: 59.6, z: 396 },
        ],
        [
          { x: 90.4, z: 446 },
          { x: 90.4, z: 378 },
        ],
        [
          { x: 90.6, z: 368 },
          { x: 84, z: 371 },
        ],
      ].entries()) {
        let i = C0(t, r[0].x, r[0].z, 3, !0),
          a = X0(e, Q.crew, n === 1 ? y0.crew2 : y0.crew, i.x, i.z, 0);
        (ge.push({
          a,
          p: r,
          i: 1,
          tag: j0(e, a, {
            color: x0,
            label: { zh: `神城的人`, en: `Kamishiro's man` },
            size: 0.8,
          }),
        }),
          a.moveTo(r[1].x, r[1].z, 1.25));
      }
      await Y0(
        e,
        Q.gen,
        F(
          `（電話）我在晴海通，四越過去一點。用走的過來——穿制服的在找跑步的人，神城的人在找你的臉。`,
          `(phone) I'm on Harumi-dori, just past Yotsukoshi. Walk here — the uniforms are looking for anyone running, and Kamishiro's men are looking for your face.`,
          `（電話）晴海通り、四越の先だ。歩いて来い——制服は走ってる奴を、神城の連中はお前の顔を探してる。`,
        ),
      );
      let _e = 0,
        ve = 0,
        ye = !1,
        be = !1,
        xe = F(`警察起疑`, `Police suspicion`),
        Se = F(`被神城的人認出`, `Kamishiro's men recognising you`);
      if (
        (e.every((t) => {
          if (ye || be) return;
          let n = e.playerSpeed,
            r = 99;
          for (let t of he) r = Math.min(r, e.dist(t.x, t.z));
          let i = (n > 5.2 && r < 20 ? 0.55 : 0) + (n > 3.6 && r < 9 ? 0.3 : 0);
          _e = Math.max(0, Math.min(1, _e + (i - (i ? 0 : 0.15)) * t));
          let a = 0;
          for (let t of ge) {
            let r = t.a;
            if (
              (t.tag.update(),
              (!r.moving || r.distTo(t.p[t.i].x, t.p[t.i].z) < 0.8) &&
                ((t.i = 1 - t.i), r.moveTo(t.p[t.i].x, t.p[t.i].z, 1.25)),
              !i6(r, e.px, e.pz, 13, 0.95))
            )
              continue;
            let i = e.dist(r.x, r.z);
            a = Math.max(
              a,
              (1.4 - i / 13) * (n < 2.4 ? 0.45 : n > 4 ? 1.6 : 1),
            );
          }
          ((ve = Math.max(0, Math.min(1, ve + (a > 0 ? a : -0.3) * t))),
            ve >= _e ? e.progress(Se, ve) : e.progress(xe, _e),
            _e >= 1 && (ye = !0),
            ve >= 1 && (be = !0));
        }),
        await e.goto(
          { x: pe.x - 2, z: pe.z },
          {
            objective: F(
              `混進人群，走到源さん的計程車（用走的；避開神城的人的視線）`,
              `Blend in and walk to Gen-san's cab (walk; stay out of Kamishiro's men's sight)`,
            ),
            label: Q.gen.name,
            radius: 2.6,
            onFoot: !0,
            orWhen: () => ye || be,
          },
        ),
        e.progress(null),
        ye)
      ) {
        e.fail(
          F(
            `警察把你叫住盤查了——在銀座別亂跑`,
            `An officer stopped you for questioning — no running in Ginza`,
          ),
        );
        return;
      }
      if (be) {
        e.fail(
          F(
            `神城的人認出你了——他們會一路跟到計程車`,
            `Kamishiro's men recognised you — they'd follow you to the cab`,
          ),
        );
        return;
      }
      for (let e of ge) e.tag.remove();
      if (me)
        try {
          t.vehicles.putPlayerIn(me);
        } catch {}
      (await m2(e, async (e) => {
        (await e.say(
          Q.gen,
          F(
            `四個都走進交番了。桐島把他們當證人，不是搶匪。……幹得好。`,
            `All four walked into the koban. Kirishima's taking them as witnesses, not robbers. …Well done.`,
            `四人とも交番に入った。桐島は強盗じゃなく証人として扱う。……よくやった。`,
          ),
        ),
          await e.say(
            Q.gen,
            F(
              `翔的妹妹，錦糸町的交番已經送她回家了。……不過勇樹跟桐島說，今晚他要回新橋。「我不回去的話，他們會把小晴姊移走。」`,
              `Sho's sister is home — the Kinshicho koban walked her there. …But Yuki told Kirishima he's going back to Shimbashi tonight. 'If I don't, they'll move Hsiao-Ching.'`,
              `翔の妹は錦糸町の交番が家まで送った。……だが勇樹は、今夜新橋に戻るって桐島に言った。「戻らないと、小晴さんが移される」ってな。`,
            ),
          ),
          await e.say(
            Q.gen,
            F(
              `……桐島攔不住他。那孩子，比你想的還倔。`,
              `…Kirishima couldn't stop him. That kid is more stubborn than you think.`,
              `……桐島も止められなかった。あいつ、思ったより頑固だ。`,
            ),
          ),
          await e.call(
            Q.kamishiro,
            F(
              `（電話）初次見面，我是神城。……銀座的事，謝謝你了。`,
              `(phone) A pleasure to meet you. Kamishiro here. …Thank you for today in Ginza.`,
              `（電話）はじめまして、神城です。……銀座では、どうも。`,
            ),
          ),
          await e.say(
            Q.kamishiro,
            F(
              `（電話）你的臉，我記住了。`,
              `(phone) I'll remember your face.`,
              `（電話）あなたの顔、覚えましたよ。`,
            ),
          ));
      }),
        e.pass({
          bonus: Math.max(0, Math.round(le * 20)) + (E === 0 ? 3e3 : 0),
          note: F(
            `沒有人受傷。可是神城記住了你的臉。`,
            `No one was hurt. But Kamishiro knows your face.`,
          ),
        }));
    },
  }),
  o6 = C2(`tokyo:s3_tour`, {
    description: F(
      `轟認得神城的車。街道封鎖十分鐘：跟緊他的卡丁車，從秋葉原一路飆到東京車站——在終點拍下交錢的現場。`,
      `Todoroki knows Kamishiro's car. The streets are closed for ten minutes: keep up with his kart from Akihabara all the way to Tokyo Station — and at the finish, photograph the handover.`,
    ),
    glyph: `駅`,
    giver: { outfit: `v:t3-todoroki`, dx: 1.4, dz: 0.4, anim: `crossArms` },
    giverName: Q.todoroki2,
    noPolice: !0,
    start: () => {
      let e = E4.grand.route[0];
      return { x: e.x - 13.5, z: e.z + 34, heading: Math.PI / 2 };
    },
    async run(e) {
      let t = e.ctx,
        n = E4.grand;
      await U0(e, { window: [13, 17], at: n.route[0] });
      let r = G0(t),
        i = Z0(e, Q.todoroki2, y0.todoroki, e.px + 1.4, e.pz + 0.4, 0);
      (i.faceTo(e.px, e.pz),
        await m2(e, async (e) => {
          (await e.say(
            Q.todoroki2,
            F(
              `每週二，神城的司機都會在東京車站前收錢。黑色的車，車牌我記得。`,
              `Every Tuesday, Kamishiro's driver collects in front of Tokyo Station. A black car — I know the plate.`,
              `毎週火曜、神城の運転手は東京駅前で金を受け取る。黒い車だ、ナンバーは覚えてる。`,
            ),
            i,
          ),
            await e.say(
              Q.todoroki2,
              F(
                `今天是我店裡的卡丁車遊行：從這裡到東京車站，整條路為我們封十分鐘。`,
                `Today's my shop's kart parade: from here to Tokyo Station, the streets are closed for us for ten minutes.`,
                `今日はうちの店のカートパレードだ。ここから東京駅まで、十分間だけ道を貸し切りにしてある。`,
              ),
              i,
            ),
            await e.say(
              Q.todoroki2,
              F(
                `規矩只有一條：跟緊我。今天沒有紅燈，我也不會等你——被甩開，就什麼都拍不到。`,
                `One rule: keep up. No red lights today, and I won't wait for you — fall behind and there's no photo.`,
                `ルールはひとつ。ついて来い。今日は信号なしだ、待ってもやらねえ——離されたら写真は撮れねえぞ。`,
              ),
              i,
            ),
            await e.say(
              Q.todoroki2,
              F(
                `終點就在車站前。車一停，就拍下交錢的那一刻。`,
                `The finish is right in front of the station. The moment we pull up, get the handover.`,
                `ゴールは駅の真ん前だ。止まったら、受け渡しの瞬間を撮れ。`,
              ),
              i,
            ));
        }),
        e.removeActor(i));
      let a = !1,
        o = n.stops[0],
        s = await g3(e, {
          route: n.route,
          guide: { name: Q.todoroki2.name, color: 13115436, skill: 0.85 },
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
              `出發！跟緊我！`,
              `Go! Stay on my tail!`,
              `行くぞ！ついて来い！`,
            ),
            stop: F(
              `到了——慢慢停下來。`,
              `Here we are — ease it in.`,
              `着いたぞ——ゆっくり止まれ。`,
            ),
            end: F(
              `好，十分鐘剛好。`,
              `Ten minutes on the dot.`,
              `よし、ぴったり十分だ。`,
            ),
          },
          stops: [
            {
              ...o,
              onStop: async () => {
                let n = o.x + 10,
                  r = o.z - 9,
                  i = C0(t, n, r, 6),
                  s = C0(t, n + 1.2, r + 0.4, 6),
                  c = X0(e, Q.crew, y0.kuroda, i.x, i.z, -Math.PI / 2),
                  l = X0(e, Q.crew, y0.courierA, s.x, s.z, Math.PI / 2);
                (c.faceTo(l.x, l.z),
                  l.faceTo(c.x, c.z),
                  (l.anim = `carry`),
                  J0(
                    e,
                    Q.todoroki2,
                    F(
                      `左前方，人行道上——司機和送信的。快拍！`,
                      `Ahead on the left, on the pavement — the driver and the courier. Shoot!`,
                      `左前、歩道の上——運転手と運び屋だ。撮れ！`,
                    ),
                    2.4,
                  ),
                  (a =
                    (await U3(e, {
                      target: () => ({
                        x: (c.x + l.x) / 2,
                        y: (c.y ?? 0) + 1.3,
                        z: (c.z + l.z) / 2,
                      }),
                      secs: 25,
                      hint: F(
                        `把交錢的兩個人放進框裡，按 E／點畫面拍照`,
                        `Get both of them in the frame — E / tap to shoot`,
                      ),
                    })) === `shot`),
                  (l.anim = `idle`),
                  c.moveTo(c.x + 20, c.z, 1.3));
              },
            },
          ],
        });
      if (s.lost) {
        e.fail(
          F(
            `被轟甩開了——沒趕上交錢的現場`,
            `Todoroki lost you — you never made it to the handover`,
          ),
        );
        return;
      }
      if (!a) {
        e.fail(F(`沒拍到交錢的照片`, `You missed the handover photo`));
        return;
      }
      (await $(
        e,
        r,
        F(
          `拍到了。神城的司機，和信封。`,
          `Got it. Kamishiro’s driver, and the envelope.`,
          `撮れた。神城の運転手と、封筒。`,
        ),
        2.4,
      ),
        e.pass({
          bonus: Math.max(0, s.score),
          note: F(`交錢的照片到手`, `The handover photo`),
        }));
    },
  }),
  s6 = C2(`tokyo:s3_race`, {
    description: F(
      `辰替神城辦地下卡丁車賽，還挖走了轟的車手。轟把整間店押在你身上——贏他。`,
      `Tatsu runs Kamishiro's illegal kart races and poached Todoroki's riders. Todoroki bets his shop on you — beat him.`,
    ),
    glyph: `競`,
    noPolice: !0,
    start: () => {
      let e = w4.ginza.start;
      return { x: e.x + 8, z: e.z, heading: e.heading };
    },
    async run(e) {
      let t = e.ctx,
        n = w4.ginza,
        i = await B0(e);
      await U0(e, { window: [22, 3], at: n.start });
      let a = G0(t);
      if (i.from < 1) {
        let r = C0(t, n.start.x + 4, n.start.z + 3, 4),
          o = X0(e, Q.tatsu, y0.tatsu, r.x, r.z, 0);
        (o.faceTo(e.px, e.pz),
          await m2(e, async (e) => {
            (await e.say(
              Q.tatsu,
              F(
                `轟的新車手？就你？`,
                `Todoroki's new rider? You?`,
                `轟の新しいライダー？お前が？`,
              ),
              o,
            ),
              await e.say(
                Q.todoroki2,
                F(
                  `（電話）我把店押上去了。輸了，那間店就是辰的。……別讓我後悔。`,
                  `(phone) I bet the shop. Lose, and it's Tatsu's. …Don't make me regret it.`,
                  `（電話）店を賭けた。負けたら辰のもんだ。……後悔させんなよ。`,
                ),
              ),
              await e.say(
                a,
                F(
                  `我小時候在家玩賽車遊戲可是玩到天亮的。`,
                  `I used to play racing games all night back home.`,
                  `子供の頃、レースゲームを朝までやってたんだ。`,
                ),
                `me`,
              ));
          }),
          e.removeActor(o),
          i.mark(1, { x: n.start.x, z: n.start.z, heading: n.start.heading }));
      }
      let o = await Z4(e, {
        circuit: n,
        rivals: [
          { name: Q.tatsu.name, color: 13214247, skill: 0.92 },
          ...D4.slice(0, 5),
        ],
        rubber: 0.55,
      });
      if (!o.finished || o.place !== 1) {
        e.fail(
          o.finished
            ? F(
                r.on
                  ? r.t(`第 ${o.place} 名——辰贏了`, `${o.place}位——辰の勝ち`)
                  : `第 ${o.place} 名——辰贏了`,
                `${o.place}th — Tatsu won`,
              )
            : F(`沒有跑完`, `You didn't finish`),
        );
        return;
      }
      let s = C0(t, e.px + 3, e.pz + 2, 4),
        c = X0(e, Q.tatsu, y0.tatsu, s.x, s.z, 0);
      (c.faceTo(e.px, e.pz),
        await m2(e, async (e) => {
          (await e.say(Q.tatsu, F(`……可惡。`, `…Damn it.`, `……くそっ。`), c),
            await e.say(
              a,
              F(`手機給我。`, `Your phone.`, `携帯、見せろ。`),
              `me`,
            ),
            await e.say(
              Q.tatsu,
              F(
                `……新橋，ニュー烏森ビル。三樓。那些新人都關在那裡打電話。……別說是我講的。`,
                `…Shimbashi, the New Karasumori Building. Third floor. The new kids are all kept there making calls. …You didn't hear it from me.`,
                `……新橋、ニュー烏森ビル。三階だ。新人はみんなあそこで電話かけさせられてる。……俺が言ったって言うなよ。`,
              ),
              c,
            ));
        }),
        e.pass({
          bonus: Math.round(Math.max(0, 120 - (o.time ?? 120)) * 50),
          note: F(`打工者被關在新橋`, `The recruits are kept in Shimbashi`),
        }));
    },
  }),
  c6 = [
    { ja: `松`, zh: `松`, en: `Pine` },
    { ja: `梅`, zh: `梅`, en: `Plum` },
    { ja: `桜`, zh: `櫻`, en: `Cherry` },
    { ja: `藤`, zh: `藤`, en: `Wisteria` },
    { ja: `菖蒲`, zh: `菖蒲`, en: `Iris` },
    { ja: `牡丹`, zh: `牡丹`, en: `Peony` },
    { ja: `萩`, zh: `胡枝子`, en: `Bush clover` },
    { ja: `芒`, zh: `芒草`, en: `Pampas grass` },
    { ja: `菊`, zh: `菊`, en: `Chrysanthemum` },
    { ja: `紅葉`, zh: `楓`, en: `Maple` },
    { ja: `柳`, zh: `柳`, en: `Willow` },
    { ja: `桐`, zh: `泡桐`, en: `Paulownia` },
  ],
  l6 = {
    hikari: { ja: `光`, zh: `光札`, en: `Brights` },
    tane: { ja: `タネ`, zh: `種札`, en: `Animals` },
    tan: { ja: `短冊`, zh: `短冊`, en: `Ribbons` },
    kasu: { ja: `カス`, zh: `素札`, en: `Chaff` },
  },
  u6 = (e, t, n) => ({ ja: e, zh: t, en: n }),
  d6 = [`kasu`, null, null, null],
  f6 = [
    [
      [`hikari`, `crane`, null, u6(`松に鶴`, `松與鶴`, `Pine & crane`)],
      [
        `tan`,
        null,
        `aka`,
        u6(`松に赤短`, `松・紅詩短冊`, `Pine, poetry ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `warbler`,
        null,
        u6(`梅に鶯`, `梅與黃鶯`, `Plum & bush warbler`),
      ],
      [
        `tan`,
        null,
        `aka`,
        u6(`梅に赤短`, `梅・紅詩短冊`, `Plum, poetry ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [`hikari`, `curtain`, null, u6(`桜に幕`, `櫻與幔幕`, `Cherry & curtain`)],
      [
        `tan`,
        null,
        `aka`,
        u6(`桜に赤短`, `櫻・紅詩短冊`, `Cherry, poetry ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `cuckoo`,
        null,
        u6(`藤に不如帰`, `藤與杜鵑`, `Wisteria & cuckoo`),
      ],
      [
        `tan`,
        null,
        `red`,
        u6(`藤に短冊`, `藤・紅短冊`, `Wisteria, red ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `bridge`,
        null,
        u6(`菖蒲に八橋`, `菖蒲與八橋`, `Iris & plank bridge`),
      ],
      [
        `tan`,
        null,
        `red`,
        u6(`菖蒲に短冊`, `菖蒲・紅短冊`, `Iris, red ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `butterfly`,
        null,
        u6(`牡丹に蝶`, `牡丹與蝶`, `Peony & butterflies`),
      ],
      [
        `tan`,
        null,
        `ao`,
        u6(`牡丹に青短`, `牡丹・藍短冊`, `Peony, blue ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `boar`,
        null,
        u6(`萩に猪`, `胡枝子與山豬`, `Bush clover & boar`),
      ],
      [
        `tan`,
        null,
        `red`,
        u6(`萩に短冊`, `胡枝子・紅短冊`, `Bush clover, red ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [
        `hikari`,
        `moon`,
        null,
        u6(`芒に月`, `芒草與滿月`, `Pampas & full moon`),
      ],
      [`tane`, `geese`, null, u6(`芒に雁`, `芒草與雁`, `Pampas & geese`)],
      d6,
      d6,
    ],
    [
      [
        `tane`,
        `cup`,
        null,
        u6(`菊に盃`, `菊與酒杯`, `Chrysanthemum & sake cup`),
      ],
      [
        `tan`,
        null,
        `ao`,
        u6(`菊に青短`, `菊・藍短冊`, `Chrysanthemum, blue ribbon`),
      ],
      d6,
      d6,
    ],
    [
      [`tane`, `deer`, null, u6(`紅葉に鹿`, `楓與鹿`, `Maple & deer`)],
      [`tan`, null, `ao`, u6(`紅葉に青短`, `楓・藍短冊`, `Maple, blue ribbon`)],
      d6,
      d6,
    ],
    [
      [
        `hikari`,
        `rainman`,
        null,
        u6(`柳に小野道風`, `柳與小野道風`, `Willow & the rain man`),
      ],
      [`tane`, `swallow`, null, u6(`柳に燕`, `柳與燕`, `Willow & swallow`)],
      [`tan`, null, `red`, u6(`柳に短冊`, `柳・紅短冊`, `Willow, red ribbon`)],
      [`kasu`, `lightning`, null, u6(`柳に雷`, `柳・雷`, `Willow, lightning`)],
    ],
    [
      [
        `hikari`,
        `phoenix`,
        null,
        u6(`桐に鳳凰`, `泡桐與鳳凰`, `Paulownia & phoenix`),
      ],
      d6,
      d6,
      d6,
    ],
  ].flatMap((e, t) =>
    e.map(([e, n, r, i], a) => {
      let o = c6[t],
        s = {
          id: t * 4 + a,
          month: t + 1,
          kind: e,
          name: i ?? {
            ja: `${o.ja}のカス`,
            zh: `${o.zh}・素札`,
            en: `${o.en}, chaff`,
          },
        };
      return (n && (s.tag = n), r && (s.ribbon = r), s);
    }),
  ),
  p6 = {
    crane: 0,
    curtain: 8,
    moon: 28,
    rainman: 40,
    phoenix: 44,
    boar: 24,
    deer: 36,
    butterfly: 20,
    cup: 32,
    akatan: [1, 5, 9],
    aotan: [21, 33, 37],
  },
  m6 = (e) => (e >> 2) + 1,
  h6 = {
    goko: { ja: `五光`, zh: `五光`, en: `Five Brights` },
    shiko: { ja: `四光`, zh: `四光`, en: `Four Brights` },
    ameshiko: { ja: `雨四光`, zh: `雨四光`, en: `Rainy Four Brights` },
    sanko: { ja: `三光`, zh: `三光`, en: `Three Brights` },
    inoshikacho: { ja: `猪鹿蝶`, zh: `豬鹿蝶`, en: `Boar, Deer, Butterflies` },
    hanami: { ja: `花見で一杯`, zh: `賞花喝一杯`, en: `Cherry-viewing sake` },
    tsukimi: { ja: `月見で一杯`, zh: `賞月喝一杯`, en: `Moon-viewing sake` },
    akatan: { ja: `赤短`, zh: `紅詩短冊`, en: `Red poetry ribbons` },
    aotan: { ja: `青短`, zh: `藍短冊`, en: `Blue ribbons` },
    tane: { ja: `タネ`, zh: `種札`, en: `Animals` },
    tan: { ja: `タン`, zh: `短冊`, en: `Ribbons` },
    kasu: { ja: `カス`, zh: `素札`, en: `Chaff` },
  },
  g6 = { cupAsKasu: !0, double7: !0, koiDouble: !0, oyaken: 0 },
  _6 = (e) => +(e === 0),
  v6 = [p6.crane, p6.curtain, p6.moon, p6.rainman, p6.phoenix],
  y6 = [p6.boar, p6.deer, p6.butterfly];
