// tokyo/assets/region-tokyo-55J_WESF 481 — color
// Lines 173782-174085 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function NVe(e, t, n, r) {
  let i = e.ctx.camera;
  if ((o9.set(t, n, r).project(i), i.reversedDepth ? o9.z < 0 : o9.z >= 1))
    return 0;
  let a = Math.abs(o9.x) / 0.34,
    o = Math.abs(o9.y + 0.08) / 0.4;
  return Me(1 - Math.max(a, o), 0, 1);
}
var c9 = (e) => e.toLocaleString(`en-US`),
  PVe = [
    {
      id: `tokyo:side_photo`,
      title: {
        zh: `東京攝影散步`,
        en: `Tokyo Photo Walk`,
        ja: `東京フォトウォーク`,
      },
      description: {
        zh: `旅遊部落客柚子在丸之內扭傷了腳，今晚的專欄「百年的東京」卻還缺照片。借她的相機，去五個地標替她拍下來。`,
        en: `Travel blogger Yuzu twisted her ankle in Marunouchi, and tonight's column, 'A Hundred Years of Tokyo', still needs its photos. Borrow her camera and shoot five landmarks for her.`,
        ja: `旅ブロガーのゆずが丸の内で足をひねった。今夜締め切りのコラム「百年の東京」の写真がまだない。カメラを借りて、五つの名所を撮ってこよう。`,
      },
      category: `side`,
      reward: 1e4,
      icon: `photo`,
      glyph: `撮`,
      blip: `mission`,
      color: n9,
      order: 330,
      get giver() {
        return (
          i9(),
          { outfit: `v:tk-side-photo-yuzu`, dx: 1.6, dz: 0.4, anim: `phone` }
        );
      },
      giverName: r9.name,
      hours: [8, 18],
      skipTo: 14,
      skipCaption: {
        zh: `下午 2:00 · 丸之內`,
        en: `2 PM · Marunouchi`,
        ja: `午後2時・丸の内`,
      },
      start: () => ({ x: -70, z: 16, heading: Math.PI / 2 }),
      async run(e) {
        let t = e.ctx,
          n = e.origin,
          r = Z4(t);
        e.step = `briefing`;
        let i = P4(t, n.x + 1.6, n.z + 0.4, 6),
          a = n3(e, r9, i9, i.x, i.z, 0);
        (a.faceTo(e.px, e.pz), (a.look = t.player.position), (a.anim = `talk`));
        let o = e.prop(
          `camera`,
          i.x + 0.45,
          t.plan.groundHeight(i.x, i.z) + 1.05,
          i.z,
          0,
          2.2,
        );
        (await $(
          e,
          r9,
          N(
            `不好意思——那邊那位！可以拜託你一件事嗎？`,
            `Excuse me — you there! Could I ask you a favour?`,
            `すみませーん！そこの方！ちょっとだけ、お願いしてもいいですか？`,
          ),
        ),
          await $(
            e,
            r9,
            N(
              `我是寫旅遊部落格的柚子！今天一定要交「百年的東京」的專欄，剛剛卻在樓梯扭到腳……嘿嘿。`,
              `I'm Yuzu, I write a travel blog! My column 'A Hundred Years of Tokyo' is due today, and I just twisted my ankle on the stairs… hehe.`,
              `旅ブログやってるゆずです！今日中に「百年の東京」のコラムを出さなきゃなのに、さっき階段で足をひねっちゃって……えへへ。`,
            ),
          ),
          await $(
            e,
            r9,
            N(
              `可以幫我拍照嗎？站舍、二重橋、和光的鐘樓、歌舞伎座，還有日本橋的麒麟！謝禮我一定會給！`,
              `Could you take the photos for me? The station, Nijubashi, the Wako clock tower, Kabukiza and the kirin on Nihonbashi! I'll pay you properly!`,
              `代わりに写真、撮ってきてくれませんか？駅舎、二重橋、和光の時計塔、歌舞伎座、それから日本橋の麒麟！お礼はちゃんとしますから！`,
            ),
          ),
          await $(
            e,
            r,
            N(
              `好啊，相機借我。`,
              `Sure — hand me the camera.`,
              `いいよ、カメラ貸して。`,
            ),
          ),
          o?.remove());
        let s = P4(t, n.x - 2.2, n.z + 2.5, 8);
        (e.vehicle(`mamachari`, s.x, s.z, Math.PI / 2, { color: 15902298 }),
          await $(
            e,
            r9,
            N(
              `移動就騎我的淑女車吧，電動的很輕鬆～走路或搭車也可以喔。先拍眼前的站舍！`,
              `Take my mamachari to get around — it's electric, so it's easy~ Walking or a cab is fine too. Start with the station right here!`,
              `移動は私のママチャリ使ってください！電動だから楽ですよ～歩きでも電車でもOK。まずは目の前の駅舎から！`,
            ),
          ),
          (a.anim = `phone`));
        let c = new ie(ge(`tokyo:side_photo`, t.time?.date?.d ?? 1)),
          l = 0,
          u = 0;
        for (let n = 0; n < a9.length; n++) {
          let r = a9[n];
          e.step = `spot${n + 1}`;
          let i = P4(t, r.x, r.z, 6);
          (await e.goto(i, {
            objective: {
              zh: `到「${r.name.zh}」的拍照點（${n + 1}/${a9.length}）`,
              en: `Get to the photo spot for *${r.name.en}* (${n + 1}/${a9.length})`,
              ja: `「${r.name.ja}」の撮影ポイントへ（${n + 1}/${a9.length}）`,
            },
            radius: 3.5,
            vehicleRadius: 8,
            onFoot: !0,
            pillar: !0,
            label: r.name,
            color: n9,
          }),
            e.objective({
              zh: `把「${r.name.zh}」放進取景框，按 {interact} 拍照`,
              en: `Frame *${r.name.en}* and press {interact}`,
              ja: `「${r.name.ja}」を枠に入れて {interact} で撮影`,
            }));
          let a = 0;
          for (;;) {
            if (
              (await H6(e, {
                target: () => s9.set(r.tx, r.ty, r.tz),
                secs: 45,
                hint: OVe,
                range: r.range,
              })) === `shot`
            ) {
              a = t.params.has(`autosolve`)
                ? 0.9 + c.next() * 0.1
                : NVe(e, r.tx, r.ty, r.tz);
              break;
            }
            e.notify(
              {
                zh: `還沒拍到——對準地標再試一次`,
                en: `No shot yet — aim at the landmark and try again`,
                ja: `まだ撮れていない——ランドマークに向けてもう一度`,
              },
              `info`,
              2.5,
            );
          }
          ((e.step = `shot${n + 1}`),
            e.objective(null),
            e.lockPlayer(!0),
            await e.cinematic(
              s9.set(
                r.cam[0],
                t.plan.groundHeight(r.cam[0], r.cam[2]) + r.cam[1],
                r.cam[2],
              ),
              MVe.set(r.look[0], r.look[1], r.look[2]),
              2,
            ),
            e.lockPlayer(!1));
          let o = Math.round((600 + a * a * 8e3 + c.range(0, 1400)) / 10) * 10;
          ((l += o),
            (u += a),
            e.notify(
              {
                zh: `已上傳！${r.caption.zh}　♥ ${c9(o)}`,
                en: `Posted! ${r.caption.en}   ♥ ${c9(o)}`,
                ja: `投稿完了！${r.caption.ja}　♥ ${c9(o)}`,
              },
              `good`,
              4,
            ),
            await e.wait(0.5),
            await $(e, r9, a > 0.8 ? kVe[n % 2] : a > 0.5 ? AVe : jVe),
            await $(e, r9, r.note),
            (e.vars.likes = l),
            (e.vars.shots = n + 1));
        }
        e.step = `done`;
        let d = Math.round(((u / a9.length) * 3e3) / 100) * 100;
        (await $(
          e,
          r9,
          N(
            `（LINE）五張全部收到！總共 ♥ ${c9(l)}！專欄趕得上了，謝禮匯給你囉～`,
            `(LINE) All five are in! ♥ ${c9(l)} in total! The column will make it — sending your fee now~`,
            `（LINE）五枚ぜんぶ届きました！合計 ♥ ${c9(l)}！コラム、間に合いそう！お礼、振り込んでおきますね～`,
          ),
        ),
          e.pass({
            bonus: d,
            note: {
              zh: `♥ ${c9(l)} · 構圖獎金 ¥${c9(d)}`,
              en: `♥ ${c9(l)} · framing bonus ¥${c9(d)}`,
              ja: `♥ ${c9(l)}・構図ボーナス ¥${c9(d)}`,
            },
          }));
      },
    },
  ],
  l9 = 9085112,
  u9 = (e, t, n, r) => ({
    name: { zh: e, en: t, ja: n },
    voice: `ja`,
    pitch: r,
  }),
  d9 = u9(`早瀨所長`, `Director Hayase`, `早瀬所長`, 0.95),
  f9 = u9(`佐伯先生`, `Mr. Saeki`, `佐伯さん`, 0.86),
  p9 = u9(`四越的店員`, `Yotsukoshi clerk`, `四越の店員`, 1.18),
  m9 = u9(`花店老闆`, `Florist`, `花屋さん`, 1.02),
  h9 = u9(`烤串店老闆`, `Grill master`, `大将`, 0.78),
  g9 = {
    hayase: () =>
      jt(`businesswoman`, `tk-side-tail-hayase`, {
        face: { smile: 0.15, wrinkles: 0.3 },
        hair: { style: `bob`, color: 7236198 },
        top: { style: `shirt`, color: 15921386, sleeve: `long` },
        outer: {
          style: `windbreaker`,
          color: 12098154,
          color2: 9072720,
          closed: !0,
        },
        bottom: { style: `slacks`, color: 3421756 },
        shoes: { style: `loafer`, color: 2760214 },
        acc: Ot(`glasses`, { kind: `shoulderBag`, color: 3811870 }, `phone`),
      }),
    saeki: () =>
      jt(`suit`, `tk-side-tail-saeki`, {
        face: { wrinkles: 0.35, smile: 0.1 },
        hair: { style: `sidepart`, color: 5920336 },
        outer: { style: `blazer`, color: 5922408, color2: 4869720, closed: !0 },
        bottom: { style: `slacks`, color: 4869720 },
        acc: Ot(`glasses`, `watch`),
      }),
    clerk: () =>
      jt(`businesswoman`, `tk-side-tail-clerk`, {
        hair: { style: `bun`, color: 1972760 },
        top: { style: `blouse`, color: 16184044 },
        outer: { style: `blazer`, color: 2042442, color2: 1317940, closed: !0 },
        bottom: { style: `pencil`, color: 2042442 },
        shoes: { style: `heel`, color: 1315860 },
        acc: Ot({ kind: `lanyard`, color: 13148240 }),
      }),
    florist: () =>
      jt(`vendor`, `tk-side-tail-florist`, {
        hair: { style: `fade`, color: 2761760 },
        top: { style: `shirt`, color: 15262938, sleeve: `long` },
        bottom: { style: `slacks`, color: 3815988 },
        acc: Ot({ kind: `apron`, color: 2976324 }),
      }),
    taisho: () =>
      jt(`vendor`, `tk-side-tail-taisho`, {
        face: { wrinkles: 0.5, smile: 0.35 },
        hair: { style: `buzz`, color: 9078400 },
        top: { style: `shirt`, color: 15921386, sleeve: `short` },
        bottom: { style: `slacks`, color: 2763312 },
        acc: Ot(
          { kind: `headband`, color: 15921902 },
          { kind: `apron`, color: 1976890 },
        ),
      }),
  },
  FVe = { zh: `可疑度`, en: `Suspicion`, ja: `不審度` },
  IVe = {
    zh: `太近了！拉開距離`,
    en: `Too close! Drop back`,
    ja: `近すぎる！距離を取れ`,
  },
  _9 = [
    N(`……嗯？`, `…Hm?`, `……ん？`),
    N(`（回頭看）`, `(glances back)`, `（振り返る）`),
    N(`……是我想太多了嗎。`, `…Just my imagination?`, `……気のせいか。`),
  ],
  LVe = N(
    `把佐伯先生放進框裡，按 E／點畫面偷拍`,
    `Get Mr. Saeki in the frame — E / tap to snap`,
    `佐伯さんを枠に入れて、E／タップで撮影`,
  ),
  RVe = (e) => ({ x: Math.sin(e), z: -Math.cos(e) }),
  v9 = (e, t) => Math.hypot(e.x - t.x, e.z - t.z);
function y9(e, t, n) {
  let r = X4(e, t, n);
  r.length >= 3 && v9(t, r[1]) < v9(r[0], r[1]) && r.shift();
  let i = r.length;
  return (
    i >= 3 &&
      v9(r[i - 3], r[i - 1]) < v9(r[i - 3], r[i - 2]) &&
      r.splice(i - 2, 1),
    r
  );
}
