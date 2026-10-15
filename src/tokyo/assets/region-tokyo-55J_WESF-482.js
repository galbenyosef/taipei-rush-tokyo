// tokyo/assets/region-tokyo-55J_WESF 482 — math
// Lines 174086-174664 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var b9 = 64,
  x9 = 1.7,
  zVe = [
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
      color: l9,
      order: 331,
      noPolice: !0,
      get giver() {
        return (
          g9.hayase(),
          { outfit: `v:tk-side-tail-hayase`, dx: -1.4, dz: 0.6, anim: `phone` }
        );
      },
      giverName: d9.name,
      hours: [18, 22],
      skipTo: 18.5,
      skipCaption: {
        zh: `晚上 6:30 · 銀座`,
        en: `6:30 PM · Ginza`,
        ja: `午後6時半・銀座`,
      },
      start(e) {
        let t = $e(e.plan, 38, 337);
        return { x: t.x, z: t.z, heading: Math.PI / 2 };
      },
      async run(e) {
        let t = e.ctx,
          n = e.origin,
          r = Z4(t),
          i = new ie(ge(`tokyo:side_tail`, t.time?.date?.d ?? 1));
        e.step = `briefing`;
        let a = P4(t, n.x - 1.4, n.z + 0.6, 5),
          o = n3(e, d9, g9.hayase, a.x, a.z, 0);
        (o.faceTo(e.px, e.pz), (o.look = t.player.position), (o.anim = `talk`));
        let s = P4(t, 58.5, 335, 4),
          c = I4(`tokyo:ginza:yotsukoshi-door`, 93.3, 318, -Math.PI / 2),
          l = RVe(c.heading),
          u = P4(t, c.x + l.x * 0.8, c.z + l.z * 0.8, 2),
          d = P4(t, c.x + l.x * 2.1, c.z + l.z * 2.1, 2),
          f = P4(t, 4, 337, 6),
          p = P4(t, f.x, f.z - 1.4, 3),
          m = I4(`tokyo:site:yurakucho-gado:grill`, -75.6, 312.4, Math.PI / 2),
          h = P4(t, -74.7, m.z, 2),
          g = P4(t, h.x - 1.4, m.z, 3),
          _ = [y9(e, s, d), y9(e, d, f), y9(e, f, g)];
        e.vars.route = _.map((e) =>
          e.map((e) => `${Math.round(e.x)},${Math.round(e.z)}`).join(` `),
        ).join(` | `);
        let v = t3(e, f9, g9.saeki, s.x, s.z, Math.PI);
        v.anim = `phone`;
        let y = W4(v, 3);
        (await $(
          e,
          d9,
          N(
            `你就是源先生說的那個人吧？幫大忙了，今晚我們的調查員全都出去了。`,
            `You're the one Gen-san mentioned? A lifesaver — all my investigators are out tonight.`,
            `あなたが源さんの言ってた子ね。助かるわ、今夜はうちの調査員がみんな出払ってて。`,
          ),
        ),
          await $(
            e,
            d9,
            N(
              `委託人是佐伯典子女士。她說先生最近很晚才回家，還會把收據藏起來。`,
              `The client is Mrs. Noriko Saeki. Her husband's been coming home late, and hiding his receipts.`,
              `依頼人は佐伯典子さん。ご主人、最近帰りが遅くて、レシートを隠すんですって。`,
            ),
          ),
          (o.anim = `point`),
          (o.look = { x: v.x, z: v.z }),
          await $(
            e,
            d9,
            N(
              `和光鐘樓下面，穿灰西裝的那位就是她先生。別被發現，跟著他，拍三張證據照片。`,
              `Under the Wako clock, the man in the grey suit — that's him. Follow him unseen and get three evidence photos.`,
              `和光の時計の下、グレーのスーツの人。あれがご主人。気づかれないように後をつけて、証拠写真を三枚。`,
            ),
          ),
          await $(
            e,
            d9,
            N(
              `別靠太近，也別離太遠。他回頭的時候就停下來，裝作沒事。懂嗎？`,
              `Not too close, not too far. When he looks back, stop and act natural. Got it?`,
              `近づきすぎない、離れすぎない。振り向いたら、立ち止まって知らん顔。いい？`,
            ),
          ),
          await $(
            e,
            r,
            N(
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
          color: l9,
          style: `target`,
          iconSize: 0.7,
        });
        e.blip(`saeki`, {
          x: v.x,
          z: v.z,
          icon: `target`,
          label: f9.name,
          pulse: !0,
          clampToEdge: !0,
          color: `#8aa0b8`,
        });
        let x = new Float32Array(b9),
          S = new Float32Array(b9),
          C = 0,
          w = 0,
          T = { kind: `tail`, x: e.px, z: e.pz, tx: v.x, tz: v.z },
          E = [],
          D = 0,
          O = !1,
          k = !0,
          A = !1,
          j = 0,
          ee = i.range(12, 18),
          M = 0,
          te = 0,
          ne = { x: 0, z: 0 },
          ae = null,
          oe = null,
          se = (e) => {
            ((E = e),
              (D = 0),
              (O = !0),
              (v.anim = `idle`),
              (v.look = null),
              v.moveTo(E[0].x, E[0].z, x9));
          };
        e.every((n) => {
          if (!e.alive) return;
          (b.setPos(v.x, v.y + 2.3, v.z), e.moveBlip(`saeki`, v.x, v.z));
          let r = v.heading,
            a = Math.cos(r),
            o = Math.sin(r);
          if (
            (ae && ae.set(v.x + a * 0.32, v.y + 0.78, v.z + o * 0.32, r, 1),
            oe &&
              oe.set(
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
                let e = (w - 4 + b9) % b9;
                (v.faceTo(x[e], S[e]),
                  (ne.x = x[e]),
                  (ne.z = S[e]),
                  (v.look = ne));
              }
              j <= 0 && ((v.look = null), v.moveTo(E[D].x, E[D].z, x9));
            } else
              v.moving
                ? y(n)
                  ? v.place(E[D].x, E[D].z)
                  : (ee -= n) <= 0 &&
                    ((ee = i.range(12, 20)),
                    (j = 2.4),
                    $4(e, f9, _9[i.int(0, _9.length - 1)], 1.6))
                : (D++,
                  D >= E.length ? (O = !1) : v.moveTo(E[D].x, E[D].z, x9));
            let t = (w - 1 + b9) % b9;
            (!C || Math.hypot(v.x - x[t], v.z - S[t]) > 1) &&
              ((x[w] = v.x),
              (S[w] = v.z),
              (w = (w + 1) % b9),
              (C = Math.min(b9, C + 1)));
          }
          if (!k) return;
          let s = v.distTo(e.px, e.pz),
            c = Math.atan2(e.px - v.x, -(e.pz - v.z)),
            l = Math.abs(re(c - v.heading)) < 1 && s < 30,
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
            (M = Math.max(0, Math.min(1, M + f * n))),
            e.progress(FVe, M),
            s < 9 && e.hud.prompt(IVe),
            M >= 1)
          ) {
            ((k = !1),
              (O = !1),
              v.stop(),
              v.faceTo(e.px, e.pz),
              $4(
                e,
                f9,
                N(
                  `……你從剛才就一直跟著我吧？`,
                  `…You've been following me this whole time, haven't you?`,
                  `……君、さっきからずっとついて来てないか？`,
                ),
                2.4,
              ),
              e.fail(
                N(
                  `被佐伯先生發現了！`,
                  `Mr. Saeki spotted you!`,
                  `佐伯さんに気づかれた！`,
                ),
              ));
            return;
          }
          if (s > 52) {
            if (
              ((te += n),
              e.hud.prompt({
                zh: `快跟丟了！靠近一點（${Math.ceil(8 - te)}）`,
                en: `Losing him! Get closer (${Math.ceil(8 - te)})`,
                ja: `見失いそう！近づけ（${Math.ceil(8 - te)}）`,
              }),
              te > 8)
            ) {
              ((k = !1), e.fail(N(`跟丟了……`, `You lost him…`, `見失った……`)));
              return;
            }
          } else te = 0;
          if (C >= 16) {
            let e = (w - 16 + b9) % b9,
              n = t.plan.surfaceAt(x[e], S[e]);
            n !== `road` && n !== `crosswalk` && ((T.x = x[e]), (T.z = S[e]));
          }
          ((T.tx = v.x),
            (T.tz = v.z),
            A || (e.waitFor = T),
            (e.vars.dist = Math.round(s)),
            (e.vars.sus = +M.toFixed(2)));
        });
        let ce = 0,
          le = { x: 0, y: 0, z: 0 },
          ue = () => ((le.x = v.x), (le.y = v.y + 1.3), (le.z = v.z), le),
          de = async (t, n, r) => {
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
                zh: `偷拍蒐證（照片 ${ce}/3）`,
                en: `Snap the evidence (photos ${ce}/3)`,
                ja: `証拠写真を撮れ（${ce}/3枚）`,
              }),
              await e.wait(0.8));
            let i = e.elapsed;
            A = !0;
            let a = await H6(e, { target: ue, secs: r, hint: LVe, range: 40 });
            if (((A = !1), !e.alive)) return !1;
            if (a !== `shot`)
              return (
                (k = !1),
                e.fail(
                  N(
                    `沒拍到證據照片`,
                    `You missed the evidence photo`,
                    `証拠写真を撮り逃した`,
                  ),
                ),
                !1
              );
            ce++;
            let o = Math.atan2(e.px - v.x, -(e.pz - v.z));
            (Math.abs(re(o - v.heading)) < 1 &&
              v.distTo(e.px, e.pz) < 25 &&
              ((M = Math.min(0.95, M + 0.35)),
              $4(
                e,
                f9,
                N(
                  `……嗯？剛剛是不是有人在拍照？`,
                  `…Hm? Did someone just take a picture?`,
                  `……ん？今、撮られた？`,
                ),
                2,
              )),
              e.notify(
                {
                  zh: `蒐證照片 ${ce}/3`,
                  en: `Evidence photo ${ce}/3`,
                  ja: `証拠写真 ${ce}/3`,
                },
                `good`,
                2.5,
              ),
              e.objective({
                zh: `繼續跟蹤「佐伯先生」（照片 ${ce}/3）`,
                en: `Keep tailing *Mr. Saeki* (photos ${ce}/3)`,
                ja: `「佐伯さん」の尾行を続けろ（${ce}/3枚）`,
              }),
              (e.vars.photos = ce));
            let s = r - (e.elapsed - i);
            return (s > 0 && (await e.wait(Math.min(s, 6))), !0);
          };
        (await e.wait(1.2),
          se(_[0]),
          (e.step = `leg1`),
          await e.until(() => !O || !e.alive));
        let fe = t3(e, p9, g9.clerk, u.x, u.z, c.heading);
        if (
          ((fe.anim = `bow`),
          $4(
            e,
            p9,
            N(
              `佐伯先生，恭候多時。……是的，照您吩咐，緞帶用銀色的。`,
              `Mr. Saeki, we've been expecting you. …Yes, a silver ribbon, just as you asked.`,
              `佐伯様、お待ちしておりました。……はい、ご指定どおり、リボンは銀色で。`,
            ),
          ),
          (e.step = `stop1`),
          !(await de(
            fe,
            N(
              `四越的女店員把一個小紙袋交給他……拍下來！`,
              `A Yotsukoshi clerk hands him a little paper bag… get the shot!`,
              `四越の店員が小さな紙袋を手渡した……撮れ！`,
            ),
            12,
          )))
        )
          return;
        ($4(
          e,
          f9,
          N(
            `謝謝。……希望她會喜歡。`,
            `Thank you. …I hope she likes it.`,
            `ありがとう。……喜んでくれるといいんだが。`,
          ),
        ),
          (ae = e.prop(`handbag`, v.x, v.y + 0.8, v.z, 0, 1)),
          (fe.anim = `bow`),
          se(_[1]),
          (e.step = `leg2`));
        let pe = t3(e, m9, g9.florist, p.x, p.z, Math.PI);
        pe.anim = `idle`;
        let me = t.plan.groundHeight(p.x, p.z);
        if (
          (e
            .prop(`bouquet`, p.x - 0.9, me + 0.3, p.z - 0.3, 0.3, 1.4)
            ?.set(p.x - 0.9, me + 0.3, p.z - 0.3, 0.3, 1.4, -0.3),
          e
            .prop(`bouquet`, p.x + 0.9, me + 0.3, p.z - 0.3, -0.4, 1.4)
            ?.set(p.x + 0.9, me + 0.3, p.z - 0.3, -0.4, 1.4, -0.3),
          await e.until(() => !O || !e.alive),
          $4(
            e,
            m9,
            N(
              `二十五朵紅玫瑰，包好了。要附上留言卡嗎？`,
              `Twenty-five red roses, all wrapped. Shall I add a message card?`,
              `バラ二十五本、できてますよ。メッセージカードもお付けしますか？`,
            ),
          ),
          (e.step = `stop2`),
          !(await de(
            pe,
            N(
              `他在買花……一大束玫瑰，要送誰？拍下來！`,
              `He's buying flowers… a big bunch of roses. For whom? Get the shot!`,
              `花屋でバラを買っている……誰に？撮れ！`,
            ),
            12,
          )))
        )
          return;
        ($4(
          e,
          f9,
          N(
            `不用，卡片我自己寫。`,
            `No thanks — I'll write the card myself.`,
            `いや、カードは自分で書くよ。`,
          ),
        ),
          (oe = e.prop(`bouquet`, v.x, v.y + 1, v.z, 0, 1.1)),
          se(_[2]),
          (e.step = `leg3`));
        let he = t3(e, h9, g9.taisho, h.x, h.z, -Math.PI / 2);
        ((he.anim = `idle`),
          await e.until(() => !O || !e.alive),
          $4(
            e,
            h9,
            N(
              `喔，佐伯先生！好久不見啦。`,
              `Oh, Mr. Saeki! It's been a while.`,
              `お、佐伯さん！久しぶりだねえ。`,
            ),
          ),
          (e.step = `stop3`),
          (await de(
            he,
            N(
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
            v.faceTo(he.x, he.z),
            await $(
              e,
              f9,
              N(
                `老闆，明晚兩位。……對，角落那個位子。`,
                `Taisho, two for tomorrow night. …Yes, the corner seats.`,
                `大将、明日の夜、二人で頼むよ。……そう、端の、あの席を。`,
              ),
            ),
            await $(
              e,
              h9,
              N(
                `那個位子啊。跟二十五年前一樣嘛。`,
                `Those seats, eh. Same as twenty-five years ago.`,
                `あの席か。二十五年前と同じだな。`,
              ),
            ),
            await $(
              e,
              f9,
              N(
                `明天是我們的銀婚紀念日。要對典子保密喔。最近我偷偷摸摸的，她大概在生氣吧。`,
                `Tomorrow's our silver wedding. Not a word to Noriko. I've been sneaking around lately — she's probably cross with me.`,
                `明日で銀婚式なんだ。典子には内緒でな。最近こそこそしてたから、怒ってるかもしれないけど。`,
              ),
            ),
            await $(
              e,
              h9,
              N(
                `哈哈，那你太太一定會哭的。`,
                `Ha! Your wife's going to cry, you know.`,
                `はは、そりゃ奥さん、泣くぞ。`,
              ),
            ),
            await $(
              e,
              r,
              N(
                `銀婚紀念……原來是這樣。`,
                `A silver wedding… so that was it.`,
                `銀婚式……そういうことか。`,
              ),
            ),
            e.sfx(`phone_ring`, { ui: !0 }),
            await e.wait(0.9),
            await $(
              e,
              d9,
              N(
                `（電話）照片收到了。四越的禮物、二十五朵紅玫瑰，還有高架橋下的訂位……`,
                `(phone) Got the photos. The Yotsukoshi gift, twenty-five red roses, and a booking under the arches…`,
                `（電話）写真、届いたわ。四越の包み、赤いバラ二十五本、それにガード下の予約……`,
              ),
            ),
            await $(
              e,
              d9,
              N(
                `（電話）外遇對象，就是二十五年前的佐伯太太本人呢。`,
                `(phone) The 'other woman' is Mrs. Saeki herself — twenty-five years ago.`,
                `（電話）浮気相手は、二十五年前の奥様ご本人ね。`,
              ),
            ),
            await $(
              e,
              d9,
              N(
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
  BVe = `tokyo:side_wallet`,
  S9 = 7328928,
  C9 = (e, t, n, r = 1) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }),
  w9 = {
    officer: C9(`交番的警察`, `Koban officer`, `交番のおまわりさん`, 0.9),
    owner: C9(`宮下小姐`, `Ms Miyashita`, `宮下さん`, 1.18),
  },
  VVe = () =>
    jt(`officeLady`, `tk-side-wallet-owner`, {
      height: 1.6,
      face: { smile: -0.2, brow: 0.4 },
      hair: { style: `bob`, color: 2760216 },
      top: { style: `blouse`, color: 16052974 },
      outer: { style: `blazer`, color: 2042436, color2: 1581622, closed: !1 },
      bottom: { style: `slacks`, color: 2042436 },
      shoes: { style: `dress`, color: 1381135 },
      acc: Ot(
        { kind: `lanyard`, color: 4030153 },
        { kind: `tote`, color: 14207144 },
      ),
    }),
  HVe = { avatar: `jp-police` },
  T9 = 6200,
  UVe = 5e3,
  WVe = N(
    `（交番不在這個方向……口袋裡的錢包越來越重。）`,
    `(The koban is the other way… the wallet in your pocket feels heavier.)`,
    `（交番は逆方向……ポケットの財布がだんだん重くなる）`,
  ),
  E9 = N(`良心`, `Conscience`, `良心`),
  GVe = N(
    `良心隱隱作痛……那個錢包應該送去交番的。`,
    `Your conscience stings… that wallet belonged at the koban.`,
    `良心が痛む……あの財布は交番に届けるべきだった。`,
  );
