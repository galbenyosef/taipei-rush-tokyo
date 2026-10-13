// tokyo__assets__region-tokyo-BcM3fReU 312 — anim
// Lines 122939-123451 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function Qre(e) {
  let t = e.ctx,
    n = G0(t),
    r = Y9(t),
    i = e.origin;
  t.plan.groundHeight(i.x, i.z);
  let a = Z0(e, q9.obaa, J9.obaa, i.x - 1.1, i.z - 0.9, 0);
  (a.faceTo(e.px, e.pz), (a.look = t.player.position));
  let o = C0(t, i.x + 0.3, i.z - 1.3, 3),
    s = X0(e, q9.boy, J9.boy, o.x, o.z, 0),
    c = () => {
      (s.root.scale.setScalar(G9), s.frame?.scale.setScalar(G9));
    };
  (c(),
    s.ready.then(() => {
      (c(), (s.height = 1.72 * G9));
    }),
    s.faceTo(e.px, e.pz),
    (s.anim = `cower`));
  let l = Kre(),
    u = t.time?.date,
    d = new ne(P(U9, u?.y ?? 0, u?.m ?? 0, u?.d ?? 0)),
    f = Math.floor(d.next() * l.length),
    p = l[f],
    m = C0(t, p.x + 2.4, p.z + 1.2, 4),
    h = e.actor(J9.mama(), m.x, m.z, d.next() * Math.PI * 2, {
      names: K0(q9.mama),
      role: {
        avatar: `office-f`,
        tint: { top: 12065832, bottom: 3820138, amount: 1 },
      },
    });
  h.anim = `phone`;
  let g = l.map((n, r) => {
    if (r === f) return null;
    let i = C0(t, n.x - 2.2, n.z - 1.6, 4),
      a = e.actor(n.passer, i.x, i.z, 0, { names: [q9.passer.name] });
    return ((a.anim = `idle`), a);
  });
  ((e.step = `calm`),
    await $(
      e,
      q9.obaa,
      F(
        `啊，你來得正好。這孩子一直在哭，好像跟媽媽走散了……`,
        `Oh, good timing. This little one's been crying — he seems to have lost his mum…`,
        `ああ、ちょうどよかった。この子、さっきからずっと泣いてて……お母さんとはぐれちゃったみたいなの。`,
      ),
    ),
    J0(
      e,
      q9.boy,
      F(`哇啊啊……媽媽……`, `Waaah… Mama…`, `うわぁぁん……ママぁ……`),
      2.2,
    ),
    await e.wait(1.6));
  let _ = !1;
  for (let t = 0; t < 3 && !_; t++) {
    let t = await y2(e, {
      prompt: F(
        `悠斗哭個不停。`,
        `Yuto won’t stop crying.`,
        `ゆうとは泣き止まない。`,
      ),
      secs: 14,
      options: [
        {
          text: F(
            `（蹲下來平視他，用簡單的日文）だいじょうぶ。我們一起找媽媽。`,
            `(Crouch to his eye level, in simple Japanese) Daijōbu. Let’s find Mama together.`,
            `（しゃがんで目線を合わせて）だいじょうぶ。いっしょにママをさがそう。`,
          ),
          score: 2,
        },
        {
          text: F(
            `（站著問）你媽媽呢？她去哪裡了？`,
            `(Standing) Where’s your mum? Where did she go?`,
            `（立ったまま）お母さんは？どこに行ったの？`,
          ),
          score: 0,
        },
        {
          text: F(
            `（從口袋拿出糖果給他）`,
            `(Offer him a sweet from your pocket)`,
            `（ポケットからアメを出してあげる）`,
          ),
          score: -1,
        },
      ],
    });
    if (t.score >= 2) {
      _ = !0;
      break;
    }
    t.score < 0
      ? (await $(
          e,
          q9.boy,
          F(`（搖頭）……`, `(shakes his head)…`, `（首をふる）……`),
          1.6,
        ),
        await $(
          e,
          q9.obaa,
          F(
            `哎呀，日本的小孩都被教過，不能拿陌生人的糖果喔。蹲下來，跟他好好說吧。`,
            `Oh dear — children here are taught not to take sweets from strangers. Crouch down and talk to him gently.`,
            `あらあら、知らない人からお菓子をもらっちゃダメって、日本の子は教わってるのよ。しゃがんで、ゆっくり話してあげて。`,
          ),
        ))
      : (J0(
          e,
          q9.boy,
          F(
            `不知道啦……！哇啊啊！`,
            `Dunno…! Waaah!`,
            `わかんないぃ……！うわぁぁん！`,
          ),
          1.8,
        ),
        await e.wait(1.4),
        await $(
          e,
          q9.obaa,
          F(
            `對小孩子，要蹲下來、看著眼睛說話喔。`,
            `With little ones, crouch down and talk at their eye level.`,
            `小さい子にはね、しゃがんで、目の高さで話してあげるの。`,
          ),
        ));
  }
  ((s.anim = `idle`),
    s.faceTo(e.px, e.pz),
    (s.look = t.player.position),
    await $(e, q9.boy, F(`……真的嗎？`, `…Really?`, `……ほんと？`), 1.6),
    await $(
      e,
      q9.boy,
      F(`我叫悠斗，五歲。`, `I'm Yuto. I'm five.`, `ぼく、ゆうと。五さい。`),
      1.8,
    ),
    await $(
      e,
      n,
      F(`媽媽穿什麼衣服呢？`, `What is Mama wearing?`, `ママは、どんなふく？`),
      1.8,
    ),
    await $(
      e,
      q9.boy,
      F(
        `媽媽穿紅色的開襟衫。`,
        `Mama has a red cardigan.`,
        `ママはね、あかいカーディガン。`,
      ),
      2,
    ),
    e.notify(
      F(
        `線索：紅色開襟衫`,
        `Clue: a red cardigan`,
        `手がかり：赤いカーディガン`,
      ),
      `info`,
      5,
    ),
    await $(
      e,
      q9.boy,
      F(
        `熊貓已經不在動物園了，所以媽媽買了熊貓氣球給我。我去追鴿子，回頭媽媽就不見了……`,
        `The pandas aren’t at the zoo any more, so Mama bought me a panda balloon. I chased a pigeon, and then Mama was gone…`,
        `パンダさん、もう動物園にいないから、ママがパンダのふうせん買ってくれたの。ハトさんおいかけてたら……ママいなくなっちゃった。`,
      ),
    ),
    e.notify(
      F(`線索：熊貓氣球`, `Clue: a panda balloon`, `手がかり：パンダの風船`),
      `info`,
      5,
    ),
    await $(
      e,
      q9.boy,
      F(
        `氣球在媽媽手上。`,
        `Mama is holding the balloon.`,
        `ふうせん、ママがもってるの。`,
      ),
      1.8,
    ));
  let v = qre(t, r.gate.x, r.gate.z);
  (await $(
    e,
    q9.obaa,
    F(
      `我腳不好，沒辦法陪你們走。那邊的地圖看板旁有公園職員，可以請他廣播「迷子のお知らせ」喔。`,
      `My legs aren't what they were, I can't walk with you. There's park staff by the map board over there — they can put out a lost-child announcement.`,
      `私は足が悪くてねえ。あっちの案内板のところに公園の職員さんがいるから、迷子のお知らせを流してもらえるわよ。`,
    ),
  ),
    (a.anim = `wave`),
    (e.step = `search`));
  let y = new Float32Array(48),
    b = new Float32Array(48),
    x = 0,
    S = 0,
    C = e.px,
    w = e.pz,
    T = 0,
    E = 0,
    D = e.every((n) => {
      let r = e.px,
        i = e.pz;
      if (Math.abs(r - C) + Math.abs(i - w) > 1.1) {
        S === 48 && ((x = (x + 1) % 48), S--);
        let e = (x + S) % 48;
        ((y[e] = r), (b[e] = i), S++, (C = r), (w = i));
      }
      let a = s.distTo(r, i);
      if (a > 20 || T > 3.5) {
        let e = t.player.heading,
          n = C0(t, r - Math.sin(e) * 1.8, i + Math.cos(e) * 1.8, 4);
        (s.place(n.x, n.z, e), (S = 0), (T = 0));
        return;
      }
      if (
        (!e.onFoot && (E -= n) <= 0 && ((E = 6), e.hud.prompt(Xre)), a < 1.8)
      ) {
        (s.stop(), (S = 0));
        return;
      }
      for (; S > 0 && s.distTo(y[x], b[x]) < 0.7;) ((x = (x + 1) % 48), S--);
      let o = S > 0 ? y[x] : r,
        c = S > 0 ? b[x] : i;
      (s.moveTo(o, c, a > 6 ? 3.4 : a > 3 ? 2.3 : 1.5),
        (T = s.speed < 0.15 && a > 4 ? T + n : 0));
    }),
    O = X0(e, q9.staff, J9.staff, v.x, v.z, v.h);
  ((e.vars.staff = { x: +v.x.toFixed(1), z: +v.z.toFixed(1) }),
    (e.vars.mother = f),
    (O.anim = `idle`));
  let k = l.map(() => !0),
    A = l.map((n, r) => {
      let i = t.plan.groundHeight(n.x, n.z);
      return (
        e.blip(`lk-area${r}`, {
          x: n.x,
          z: n.z,
          icon: `target`,
          label: n.name,
          clampToEdge: !0,
          pulse: !0,
          color: `#ffb14d`,
        }),
        e.marker({
          x: n.x,
          z: n.z,
          y: i + 0.02,
          color: W9,
          style: `goto`,
          radius: 4,
          pillar: !0,
        })
      );
    });
  e.blip(`lk-staff`, {
    x: v.x,
    z: v.z,
    icon: `landmark`,
    label: q9.staff.name,
    color: `#9ad18a`,
  });
  let j = e.marker({
      x: v.x,
      z: v.z,
      y: t.plan.groundHeight(v.x, v.z) + 0.02,
      color: 10146186,
      style: `target`,
      iconSize: 0.6,
    }),
    M = (t) => {
      k[t] && ((k[t] = !1), A[t].remove(), e.removeBlip(`lk-area${t}`));
    },
    ee = (e) => l.forEach((t, n) => n !== e && M(n)),
    te = !1,
    N = () => {
      te || ((te = !0), j.remove(), e.removeBlip(`lk-staff`));
    };
  e.objective(
    F(
      `帶悠斗找媽媽：到標示的地點找找（也可以先請公園職員廣播）`,
      `Find Yuto’s mum with him: search the marked places (or ask the park staff for an announcement first)`,
      `ゆうとと一緒にママを探す：印の場所を探そう（先に公園の職員に放送を頼んでもいい）`,
    ),
  );
  let re = { kind: `goto`, x: l[0].x, z: l[0].z, onFoot: !0 };
  for (;;) {
    e.step = `search`;
    let r = -1;
    if (
      ((e.waitFor = re),
      await e.until(() => {
        let n = 1 / 0;
        for (let t = 0; t < l.length; t++) {
          if (!k[t]) continue;
          let i = e.dist(l[t].x, l[t].z);
          if ((i < n && ((n = i), (re.x = l[t].x), (re.z = l[t].z)), i < 7)) {
            if (s.distTo(e.px, e.pz) > 10) e.hud.prompt(Yre);
            else return ((r = t), !0);
          }
        }
        return !te &&
          e.dist(O.x, O.z) < 2.8 &&
          e.onFoot &&
          e.hud.prompt(Jre) &&
          t.input.pressed(`interact`)
          ? ((r = 99), !0)
          : !1;
      }),
      (e.waitFor = null),
      r === 99)
    ) {
      ((e.step = `announce`),
        O.faceTo(e.px, e.pz),
        (O.anim = `talk`),
        await $(
          e,
          n,
          F(
            `不好意思，這孩子跟媽媽走散了。`,
            `Excuse me — this boy has lost his mum.`,
            `すみません、この子、お母さんとはぐれちゃって。`,
          ),
        ),
        await $(
          e,
          q9.staff,
          F(
            `迷路的孩子啊。叫什麼名字？……悠斗，五歲。媽媽的穿著呢？`,
            `A lost child. What’s his name? …Yuto, five. And what is his mother wearing?`,
            `迷子ちゃんですね。お名前は？……ゆうとくん、五歳。お母さんの服装はわかりますか？`,
          ),
        ),
        await $(
          e,
          n,
          F(
            `紅色開襟衫，手上拿著熊貓氣球。`,
            `A red cardigan, and she’s holding a panda balloon.`,
            `赤いカーディガンで、パンダの風船を持っています。`,
          ),
        ),
        await $(
          e,
          q9.staff,
          F(
            `了解，我來廣播。`,
            `Understood — I’ll make an announcement.`,
            `了解です。園内放送を入れますね。`,
          ),
          2,
        ),
        (O.anim = `phone`),
        e.sfx(`store_chime`, { ui: !0 }),
        await $(
          e,
          q9.pa,
          F(
            `（叮咚叮咚）迷路兒童廣播。穿紅色開襟衫的悠斗媽媽，五歲的悠斗正在等您……`,
            `(ding-dong) A lost-child announcement. Would the mother of Yuto, aged five, wearing a red cardigan — Yuto is waiting for you…`,
            `（ピンポンパンポーン）迷子のお知らせをいたします。赤いカーディガンをお召しの、ゆうとくん五歳のお母様。ゆうとくんがお待ちです……`,
          ),
        ),
        await e.wait(1.2),
        (O.anim = `talk`),
        await $(e, q9.staff, {
          zh: `……是，收到。媽媽聯絡我們了！她在「${p.name.zh}」，會在那裡等。麻煩你帶他過去好嗎？`,
          en: `…Yes, received. His mother has called in! She’s at ${p.name.en} and will wait there. Could you take him to her?`,
          ja: `……はい、了解です。お母様から連絡がありました！${p.name.ja}にいらっしゃって、そこで待っているそうです。連れて行ってあげてもらえますか？`,
        }),
        N(),
        ee(f),
        (O.anim = `idle`),
        e.objective({
          zh: `帶悠斗到「${p.name.zh}」找媽媽`,
          en: `Take Yuto to his mum at ${p.name.en}`,
          ja: `ゆうとを${p.name.ja}のママのところへ`,
        }));
      continue;
    }
    if (r === f) break;
    ((e.step = `clue`),
      M(r),
      N(),
      s.faceTo(l[r].x, l[r].z),
      await $(
        e,
        q9.boy,
        F(`媽媽不在這裡……`, `Mama isn’t here…`, `ママ、いない……`),
        1.8,
      ));
    let i = g[r];
    (i &&
      (i.faceTo(e.px, e.pz),
      (i.anim = `talk`),
      await $(
        e,
        n,
        F(
          `不好意思，有沒有看到穿紅色開襟衫、拿熊貓氣球的女生？`,
          `Excuse me — have you seen a woman in a red cardigan with a panda balloon?`,
          `すみません、赤いカーディガンでパンダの風船を持った女の人、見ませんでしたか？`,
        ),
      ),
      await $(e, q9.passer, p.hint),
      i.play(`point`),
      (i.anim = `idle`)),
      ee(f),
      e.objective({
        zh: `帶悠斗到「${p.name.zh}」找媽媽`,
        en: `Take Yuto to ${p.name.en} to find his mum`,
        ja: `ゆうとを連れて${p.name.ja}へ`,
      }));
  }
  ((e.step = `reunion`),
    D(),
    M(f),
    N(),
    e.objective(null),
    (h.anim = `idle`),
    h.faceTo(s.x, s.z),
    J0(e, q9.boy, F(`媽媽——！`, `Mamaaa!`, `ママーー！`), 1.6),
    (s.anim = `idle`),
    (s.look = null),
    s.moveTo(h.x, h.z, 3.2),
    (s.arriveRadius = 0.8),
    await $(e, q9.mama, F(`悠斗！`, `Yuto!`, `ゆうと！`), 1.4));
  let ie = 0;
  if (
    (await e.until((e) => !s.moving || (ie += e) > 8), s.distTo(h.x, h.z) > 1.5)
  ) {
    let e = Math.atan2(s.x - h.x, -(s.z - h.z));
    s.place(h.x + Math.sin(e) * 0.8, h.z - Math.cos(e) * 0.8);
  }
  (s.faceTo(h.x, h.z), h.faceTo(s.x, s.z), (h.anim = `talk`));
  let ae =
    t.player.character === `wen`
      ? F(`姊姊，掰掰！`, `Bye-bye!`, `おねえちゃん、バイバイ！`)
      : F(`哥哥，掰掰！`, `Bye-bye!`, `おにいちゃん、バイバイ！`);
  (await m2(
    e,
    async (r) => {
      (await r.say(
        q9.mama,
        F(
          `真是的……你跑去哪裡了！媽媽好擔心……`,
          `Honestly… where did you go! I was so worried…`,
          `もう……どこ行ってたの！心配したんだから……`,
        ),
        h,
      ),
        await r.say(
          q9.boy,
          F(
            `我去追鴿子……對不起。`,
            `I chased a pigeon… sorry.`,
            `ハトさんおいかけてた……ごめんなさい。`,
          ),
          s,
          { dur: 2 },
        ),
        h.faceTo(e.px, e.pz),
        (h.look = t.player.position),
        (h.anim = `bow`),
        await r.say(
          q9.mama,
          F(
            `真的、真的非常感謝您！一直陪著他……`,
            `Thank you — truly, thank you so much! For staying with him…`,
            `本当に、本当にありがとうございました！ずっと一緒にいてくださって……`,
          ),
          h,
        ),
        (h.anim = `talk`),
        await r.say(
          n,
          F(
            `悠斗很勇敢喔。`,
            `Yuto was very brave.`,
            `ゆうとくん、えらかったですよ。`,
          ),
          `me`,
          { dur: 1.8 },
        ),
        s.faceTo(e.px, e.pz),
        (s.look = t.player.position),
        (s.anim = `wave`),
        await r.say(q9.boy, ae, s, { dur: 1.8 }),
        (h.anim = `bow`),
        await r.wait(1.2));
    },
    { thin: { x: h.x, z: h.z, r: 10 } },
  ),
    e.pass({
      note: F(
        `悠斗和媽媽團聚了`,
        `Yuto is back with his mum`,
        `ゆうと、ママと会えたね`,
      ),
    }));
}
