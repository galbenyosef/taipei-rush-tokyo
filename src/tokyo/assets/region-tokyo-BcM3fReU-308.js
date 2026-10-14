// tokyo/assets/region-tokyo-BcM3fReU 308 — math
// Lines 121656-122234 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var N9 = 64,
  P9 = 1.7,
  Ire = [
    {
      id: `tokyo:side_tail`,
      title: { zh: `外遇調查`, en: `The Tail`, ja: `浮気調査` },
      description: {
        zh: `銀座的小偵探社人手不足：佐伯太太懷疑先生外遇。從銀座四丁目跟蹤佐伯先生到有樂町高架橋下，拍下三張證據照片，別被他發現。`,
        en: `A small Ginza detective agency is short-handed: Mrs. Saeki thinks her husband is cheating. Tail Mr. Saeki from Ginza 4-chome to the Yurakucho arches, get three evidence photos, and don't get spotted.`,
        ja: `銀座の小さな探偵事務所は人手不足。佐伯夫人は夫の浮気を疑っている。銀座四丁目から有楽町ガード下まで佐伯さんを尾行し、証拠写真を三枚。気づかれるな。`,
      },
      category: `side`,
      reward: 12e3,
      icon: `tail`,
      glyph: `尾`,
      blip: `mission`,
      color: S9,
      order: 331,
      noPolice: !0,
      get giver() {
        return (
          k9.hayase(),
          { outfit: `v:tk-side-tail-hayase`, dx: -1.4, dz: 0.6, anim: `phone` }
        );
      },
      giverName: w9.name,
      hours: [18, 22],
      skipTo: 18.5,
      skipCaption: {
        zh: `晚上 6:30 · 銀座`,
        en: `6:30 PM · Ginza`,
        ja: `午後6時半・銀座`,
      },
      start(e) {
        let t = rt(e.plan, 38, 337);
        return { x: t.x, z: t.z, heading: Math.PI / 2 };
      },
      async run(e) {
        let t = e.ctx,
          n = e.origin,
          r = G0(t),
          i = new ne(P(`tokyo:side_tail`, t.time?.date?.d ?? 1));
        e.step = `briefing`;
        let a = C0(t, n.x - 1.4, n.z + 0.6, 5),
          o = Z0(e, w9, k9.hayase, a.x, a.z, 0);
        (o.faceTo(e.px, e.pz), (o.look = t.player.position), (o.anim = `talk`));
        let s = C0(t, 58.5, 335, 4),
          c = T0(`tokyo:ginza:yotsukoshi-door`, 93.3, 318, -Math.PI / 2),
          l = Fre(c.heading),
          u = C0(t, c.x + l.x * 0.8, c.z + l.z * 0.8, 2),
          d = C0(t, c.x + l.x * 2.1, c.z + l.z * 2.1, 2),
          f = C0(t, 4, 337, 6),
          p = C0(t, f.x, f.z - 1.4, 3),
          m = T0(`tokyo:site:yurakucho-gado:grill`, -75.6, 312.4, Math.PI / 2),
          h = C0(t, -74.7, m.z, 2),
          g = C0(t, h.x - 1.4, m.z, 3),
          _ = [M9(e, s, d), M9(e, d, f), M9(e, f, g)];
        e.vars.route = _.map((e) =>
          e.map((e) => `${Math.round(e.x)},${Math.round(e.z)}`).join(` `),
        ).join(` | `);
        let v = X0(e, T9, k9.saeki, s.x, s.z, Math.PI);
        v.anim = `phone`;
        let y = P0(v, 3);
        (await $(
          e,
          w9,
          F(
            `你就是源先生說的那個人吧？幫大忙了，今晚我們的調查員全都出去了。`,
            `You're the one Gen-san mentioned? A lifesaver — all my investigators are out tonight.`,
            `あなたが源さんの言ってた子ね。助かるわ、今夜はうちの調査員がみんな出払ってて。`,
          ),
        ),
          await $(
            e,
            w9,
            F(
              `委託人是佐伯典子女士。她說先生最近很晚才回家，還會把收據藏起來。`,
              `The client is Mrs. Noriko Saeki. Her husband's been coming home late, and hiding his receipts.`,
              `依頼人は佐伯典子さん。ご主人、最近帰りが遅くて、レシートを隠すんですって。`,
            ),
          ),
          (o.anim = `point`),
          (o.look = { x: v.x, z: v.z }),
          await $(
            e,
            w9,
            F(
              `和光鐘樓下面，穿灰西裝的那位就是她先生。別被發現，跟著他，拍三張證據照片。`,
              `Under the Wako clock, the man in the grey suit — that's him. Follow him unseen and get three evidence photos.`,
              `和光の時計の下、グレーのスーツの人。あれがご主人。気づかれないように後をつけて、証拠写真を三枚。`,
            ),
          ),
          await $(
            e,
            w9,
            F(
              `別靠太近，也別離太遠。他回頭的時候就停下來，裝作沒事。懂嗎？`,
              `Not too close, not too far. When he looks back, stop and act natural. Got it?`,
              `近づきすぎない、離れすぎない。振り向いたら、立ち止まって知らん顔。いい？`,
            ),
          ),
          await $(
            e,
            r,
            F(
              `跟蹤啊……好，我試試看。`,
              `A tail… okay, I'll try.`,
              `尾行か……やってみる。`,
            ),
          ),
          (o.anim = `phone`),
          (o.look = null),
          (e.step = `tail`),
          e.objective({
            zh: `跟蹤「佐伯先生」：保持距離，別被他發現`,
            en: `Tail *Mr. Saeki* — keep your distance, stay unseen`,
            ja: `「佐伯さん」を尾行：距離を保ち、気づかれるな`,
          }));
        let b = e.marker({
          x: v.x,
          z: v.z,
          y: v.y + 2.3,
          color: S9,
          style: `target`,
          iconSize: 0.7,
        });
        e.blip(`saeki`, {
          x: v.x,
          z: v.z,
          icon: `target`,
          label: T9.name,
          pulse: !0,
          clampToEdge: !0,
          color: `#8aa0b8`,
        });
        let x = new Float32Array(N9),
          S = new Float32Array(N9),
          C = 0,
          w = 0,
          T = { kind: `tail`, x: e.px, z: e.pz, tx: v.x, tz: v.z },
          E = [],
          D = 0,
          O = !1,
          k = !0,
          A = !1,
          j = 0,
          M = i.range(12, 18),
          ee = 0,
          N = 0,
          re = { x: 0, z: 0 },
          ie = null,
          ae = null,
          oe = (e) => {
            ((E = e),
              (D = 0),
              (O = !0),
              (v.anim = `idle`),
              (v.look = null),
              v.moveTo(E[0].x, E[0].z, P9));
          };
        e.every((n) => {
          if (!e.alive) return;
          (b.setPos(v.x, v.y + 2.3, v.z), e.moveBlip(`saeki`, v.x, v.z));
          let r = v.heading,
            a = Math.cos(r),
            o = Math.sin(r);
          if (
            (ie && ie.set(v.x + a * 0.32, v.y + 0.78, v.z + o * 0.32, r, 1),
            ae &&
              ae.set(
                v.x - a * 0.28 + o * 0.12,
                v.y + 1.05,
                v.z - o * 0.28 - a * 0.12,
                r,
                1.1,
              ),
            O)
          ) {
            if (j > 0) {
              if (((j -= n), v.stop(), C > 3)) {
                let e = (w - 4 + N9) % N9;
                (v.faceTo(x[e], S[e]),
                  (re.x = x[e]),
                  (re.z = S[e]),
                  (v.look = re));
              }
              j <= 0 && ((v.look = null), v.moveTo(E[D].x, E[D].z, P9));
            } else
              v.moving
                ? y(n)
                  ? v.place(E[D].x, E[D].z)
                  : (M -= n) <= 0 &&
                    ((M = i.range(12, 20)),
                    (j = 2.4),
                    J0(e, T9, A9[i.int(0, A9.length - 1)], 1.6))
                : (D++,
                  D >= E.length ? (O = !1) : v.moveTo(E[D].x, E[D].z, P9));
            let t = (w - 1 + N9) % N9;
            (!C || Math.hypot(v.x - x[t], v.z - S[t]) > 1) &&
              ((x[w] = v.x),
              (S[w] = v.z),
              (w = (w + 1) % N9),
              (C = Math.min(N9, C + 1)));
          }
          if (!k) return;
          let s = v.distTo(e.px, e.pz),
            c = Math.atan2(e.px - v.x, -(e.pz - v.z)),
            l = Math.abs(te(c - v.heading)) < 1 && s < 30,
            u = !v.moving,
            d = e.onFoot && e.playerSpeed > 3.2,
            f = -0.05;
          if (
            (s < 6 ? (f = 0.3) : s < 11 && (f = 0.08),
            l &&
              (f = Math.max(
                f,
                (d ? 0.7 : e.playerSpeed < 0.4 ? 0.12 : 0.32) *
                  (e.inVehicle ? 0.5 : 1) *
                  (1.3 - s / 30) *
                  (u ? 1 : 0.5),
              )),
            (ee = Math.max(0, Math.min(1, ee + f * n))),
            e.progress(Mre, ee),
            s < 9 && e.hud.prompt(Nre),
            ee >= 1)
          ) {
            ((k = !1),
              (O = !1),
              v.stop(),
              v.faceTo(e.px, e.pz),
              J0(
                e,
                T9,
                F(
                  `……你從剛才就一直跟著我吧？`,
                  `…You've been following me this whole time, haven't you?`,
                  `……君、さっきからずっとついて来てないか？`,
                ),
                2.4,
              ),
              e.fail(
                F(
                  `被佐伯先生發現了！`,
                  `Mr. Saeki spotted you!`,
                  `佐伯さんに気づかれた！`,
                ),
              ));
            return;
          }
          if (s > 52) {
            if (
              ((N += n),
              e.hud.prompt({
                zh: `快跟丟了！靠近一點（${Math.ceil(8 - N)}）`,
                en: `Losing him! Get closer (${Math.ceil(8 - N)})`,
                ja: `見失いそう！近づけ（${Math.ceil(8 - N)}）`,
              }),
              N > 8)
            ) {
              ((k = !1), e.fail(F(`跟丟了……`, `You lost him…`, `見失った……`)));
              return;
            }
          } else N = 0;
          if (C >= 16) {
            let e = (w - 16 + N9) % N9,
              n = t.plan.surfaceAt(x[e], S[e]);
            n !== `road` && n !== `crosswalk` && ((T.x = x[e]), (T.z = S[e]));
          }
          ((T.tx = v.x),
            (T.tz = v.z),
            A || (e.waitFor = T),
            (e.vars.dist = Math.round(s)),
            (e.vars.sus = +ee.toFixed(2)));
        });
        let se = 0,
          ce = { x: 0, y: 0, z: 0 },
          le = () => ((ce.x = v.x), (ce.y = v.y + 1.3), (ce.z = v.z), ce),
          ue = async (t, n, r) => {
            (v.stop(),
              (v.anim = `talk`),
              v.faceTo(t.x, t.z),
              t.faceTo(v.x, v.z),
              (v.look = { x: t.x, z: t.z }),
              (t.look = { x: v.x, z: v.z }),
              (e.vars.stopAt = `${v.x.toFixed(1)},${v.z.toFixed(1)},${t.x.toFixed(1)},${t.z.toFixed(1)}`),
              (t.anim = `talk`),
              e.notify(n, `mission`, 3.5),
              e.objective({
                zh: `偷拍蒐證（照片 ${se}/3）`,
                en: `Snap the evidence (photos ${se}/3)`,
                ja: `証拠写真を撮れ（${se}/3枚）`,
              }),
              await e.wait(0.8));
            let i = e.elapsed;
            A = !0;
            let a = await U3(e, { target: le, secs: r, hint: Pre, range: 40 });
            if (((A = !1), !e.alive)) return !1;
            if (a !== `shot`)
              return (
                (k = !1),
                e.fail(
                  F(
                    `沒拍到證據照片`,
                    `You missed the evidence photo`,
                    `証拠写真を撮り逃した`,
                  ),
                ),
                !1
              );
            se++;
            let o = Math.atan2(e.px - v.x, -(e.pz - v.z));
            (Math.abs(te(o - v.heading)) < 1 &&
              v.distTo(e.px, e.pz) < 25 &&
              ((ee = Math.min(0.95, ee + 0.35)),
              J0(
                e,
                T9,
                F(
                  `……嗯？剛剛是不是有人在拍照？`,
                  `…Hm? Did someone just take a picture?`,
                  `……ん？今、撮られた？`,
                ),
                2,
              )),
              e.notify(
                {
                  zh: `蒐證照片 ${se}/3`,
                  en: `Evidence photo ${se}/3`,
                  ja: `証拠写真 ${se}/3`,
                },
                `good`,
                2.5,
              ),
              e.objective({
                zh: `繼續跟蹤「佐伯先生」（照片 ${se}/3）`,
                en: `Keep tailing *Mr. Saeki* (photos ${se}/3)`,
                ja: `「佐伯さん」の尾行を続けろ（${se}/3枚）`,
              }),
              (e.vars.photos = se));
            let s = r - (e.elapsed - i);
            return (s > 0 && (await e.wait(Math.min(s, 6))), !0);
          };
        (await e.wait(1.2),
          oe(_[0]),
          (e.step = `leg1`),
          await e.until(() => !O || !e.alive));
        let de = X0(e, E9, k9.clerk, u.x, u.z, c.heading);
        if (
          ((de.anim = `bow`),
          J0(
            e,
            E9,
            F(
              `佐伯先生，恭候多時。……是的，照您吩咐，緞帶用銀色的。`,
              `Mr. Saeki, we've been expecting you. …Yes, a silver ribbon, just as you asked.`,
              `佐伯様、お待ちしておりました。……はい、ご指定どおり、リボンは銀色で。`,
            ),
          ),
          (e.step = `stop1`),
          !(await ue(
            de,
            F(
              `四越的女店員把一個小紙袋交給他……拍下來！`,
              `A Yotsukoshi clerk hands him a little paper bag… get the shot!`,
              `四越の店員が小さな紙袋を手渡した……撮れ！`,
            ),
            12,
          )))
        )
          return;
        (J0(
          e,
          T9,
          F(
            `謝謝。……希望她會喜歡。`,
            `Thank you. …I hope she likes it.`,
            `ありがとう。……喜んでくれるといいんだが。`,
          ),
        ),
          (ie = e.prop(`handbag`, v.x, v.y + 0.8, v.z, 0, 1)),
          (de.anim = `bow`),
          oe(_[1]),
          (e.step = `leg2`));
        let fe = X0(e, D9, k9.florist, p.x, p.z, Math.PI);
        fe.anim = `idle`;
        let pe = t.plan.groundHeight(p.x, p.z);
        if (
          (e
            .prop(`bouquet`, p.x - 0.9, pe + 0.3, p.z - 0.3, 0.3, 1.4)
            ?.set(p.x - 0.9, pe + 0.3, p.z - 0.3, 0.3, 1.4, -0.3),
          e
            .prop(`bouquet`, p.x + 0.9, pe + 0.3, p.z - 0.3, -0.4, 1.4)
            ?.set(p.x + 0.9, pe + 0.3, p.z - 0.3, -0.4, 1.4, -0.3),
          await e.until(() => !O || !e.alive),
          J0(
            e,
            D9,
            F(
              `二十五朵紅玫瑰，包好了。要附上留言卡嗎？`,
              `Twenty-five red roses, all wrapped. Shall I add a message card?`,
              `バラ二十五本、できてますよ。メッセージカードもお付けしますか？`,
            ),
          ),
          (e.step = `stop2`),
          !(await ue(
            fe,
            F(
              `他在買花……一大束玫瑰，要送誰？拍下來！`,
              `He's buying flowers… a big bunch of roses. For whom? Get the shot!`,
              `花屋でバラを買っている……誰に？撮れ！`,
            ),
            12,
          )))
        )
          return;
        (J0(
          e,
          T9,
          F(
            `不用，卡片我自己寫。`,
            `No thanks — I'll write the card myself.`,
            `いや、カードは自分で書くよ。`,
          ),
        ),
          (ae = e.prop(`bouquet`, v.x, v.y + 1, v.z, 0, 1.1)),
          oe(_[2]),
          (e.step = `leg3`));
        let me = X0(e, O9, k9.taisho, h.x, h.z, -Math.PI / 2);
        ((me.anim = `idle`),
          await e.until(() => !O || !e.alive),
          J0(
            e,
            O9,
            F(
              `喔，佐伯先生！好久不見啦。`,
              `Oh, Mr. Saeki! It's been a while.`,
              `お、佐伯さん！久しぶりだねえ。`,
            ),
          ),
          (e.step = `stop3`),
          (await ue(
            me,
            F(
              `他走進有樂町高架橋下的烤串店……拍下來！`,
              `He stops at a grill under the Yurakucho arches… get the shot!`,
              `有楽町ガード下の焼き鳥屋に入った……撮れ！`,
            ),
            12,
          )) &&
            ((e.step = `twist`),
            (k = !1),
            (e.waitFor = null),
            e.progress(null),
            b.remove(),
            e.removeBlip(`saeki`),
            v.faceTo(me.x, me.z),
            await $(
              e,
              T9,
              F(
                `老闆，明晚兩位。……對，角落那個位子。`,
                `Taisho, two for tomorrow night. …Yes, the corner seats.`,
                `大将、明日の夜、二人で頼むよ。……そう、端の、あの席を。`,
              ),
            ),
            await $(
              e,
              O9,
              F(
                `那個位子啊。跟二十五年前一樣嘛。`,
                `Those seats, eh. Same as twenty-five years ago.`,
                `あの席か。二十五年前と同じだな。`,
              ),
            ),
            await $(
              e,
              T9,
              F(
                `明天是我們的銀婚紀念日。要對典子保密喔。最近我偷偷摸摸的，她大概在生氣吧。`,
                `Tomorrow's our silver wedding. Not a word to Noriko. I've been sneaking around lately — she's probably cross with me.`,
                `明日で銀婚式なんだ。典子には内緒でな。最近こそこそしてたから、怒ってるかもしれないけど。`,
              ),
            ),
            await $(
              e,
              O9,
              F(
                `哈哈，那你太太一定會哭的。`,
                `Ha! Your wife's going to cry, you know.`,
                `はは、そりゃ奥さん、泣くぞ。`,
              ),
            ),
            await $(
              e,
              r,
              F(
                `銀婚紀念……原來是這樣。`,
                `A silver wedding… so that was it.`,
                `銀婚式……そういうことか。`,
              ),
            ),
            e.sfx(`phone_ring`, { ui: !0 }),
            await e.wait(0.9),
            await $(
              e,
              w9,
              F(
                `（電話）照片收到了。四越的禮物、二十五朵紅玫瑰，還有高架橋下的訂位……`,
                `(phone) Got the photos. The Yotsukoshi gift, twenty-five red roses, and a booking under the arches…`,
                `（電話）写真、届いたわ。四越の包み、赤いバラ二十五本、それにガード下の予約……`,
              ),
            ),
            await $(
              e,
              w9,
              F(
                `（電話）外遇對象，就是二十五年前的佐伯太太本人呢。`,
                `(phone) The 'other woman' is Mrs. Saeki herself — twenty-five years ago.`,
                `（電話）浮気相手は、二十五年前の奥様ご本人ね。`,
              ),
            ),
            await $(
              e,
              w9,
              F(
                `（電話）報告書就寫「無外遇事實」。……請太太裝作不知道，等到明天晚上吧。辛苦了！`,
                `(phone) The report says 'no affair'. …I'll ask his wife to play dumb until tomorrow night. Good work!`,
                `（電話）報告書は「浮気の事実なし」。……奥様には、明日の夜まで知らないふりをしてもらいましょう。お疲れさま！`,
              ),
            ),
            e.pass({
              note: {
                zh: `真相：銀婚紀念日的驚喜`,
                en: `The truth: a silver-wedding surprise`,
                ja: `真相：銀婚式のサプライズ`,
              },
            })));
      },
    },
  ],
  Lre = `tokyo:side_wallet`,
  F9 = 7328928,
  I9 = (e, t, n, r = 1) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }),
  L9 = {
    officer: I9(`交番的警察`, `Koban officer`, `交番のおまわりさん`, 0.9),
    owner: I9(`宮下小姐`, `Ms Miyashita`, `宮下さん`, 1.18),
  },
  Rre = () =>
    Ht(`officeLady`, `tk-side-wallet-owner`, {
      height: 1.6,
      face: { smile: -0.2, brow: 0.4 },
      hair: { style: `bob`, color: 2760216 },
      top: { style: `blouse`, color: 16052974 },
      outer: { style: `blazer`, color: 2042436, color2: 1581622, closed: !1 },
      bottom: { style: `slacks`, color: 2042436 },
      shoes: { style: `dress`, color: 1381135 },
      acc: zt(
        { kind: `lanyard`, color: 4030153 },
        { kind: `tote`, color: 14207144 },
      ),
    }),
  zre = { avatar: `jp-police` },
  R9 = 6200,
  Bre = 5e3,
  Vre = F(
    `（交番不在這個方向……口袋裡的錢包越來越重。）`,
    `(The koban is the other way… the wallet in your pocket feels heavier.)`,
    `（交番は逆方向……ポケットの財布がだんだん重くなる）`,
  ),
  z9 = F(`良心`, `Conscience`, `良心`),
  Hre = F(
    `良心隱隱作痛……那個錢包應該送去交番的。`,
    `Your conscience stings… that wallet belonged at the koban.`,
    `良心が痛む……あの財布は交番に届けるべきだった。`,
  );
