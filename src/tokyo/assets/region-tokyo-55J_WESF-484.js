// tokyo/assets/region-tokyo-55J_WESF 484 — anim
// Lines 174750-175203 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function JVe(e) {
  let t = e.ctx,
    n = Z4(t),
    r = O9(t),
    i = -r.fz,
    a = r.fx,
    o = r.x + i * 0.55,
    s = r.z + a * 0.55,
    c = e.prop(`wallet`, o, r.y + 0.47, s, Math.atan2(r.fx, -r.fz) + 0.4, 1.6);
  ((e.step = `find`),
    await $(
      e,
      n,
      N(
        `（長椅上有個咖啡色的長夾……旁邊沒有人。）`,
        `(A brown long wallet on the bench… nobody around.)`,
        `（ベンチに茶色の長財布……周りには誰もいない）`,
      ),
    ),
    await e.pressE(
      o,
      s,
      2.2,
      N(
        `按 {interact} 撿起錢包`,
        `Press {interact} to pick up the wallet`,
        `{interact} で財布を拾う`,
      ),
    ),
    c?.remove(),
    e.sfx(`pickup`, { ui: !0 }));
  let l = It(e, `wallet`, { hand: [0.3, 0.9, -0.1], scale: 1.6 });
  (await $(
    e,
    n,
    N(
      `（裡面有不少現金，還有駕照和員工證。失主一定急死了。）`,
      `(Plenty of cash inside, a driving licence and a staff pass. The owner must be frantic.)`,
      `（中には現金がけっこう、免許証と社員証も。落とし主はきっと焦ってる）`,
    ),
  ),
    await $(
      e,
      n,
      N(
        `（在日本，撿到東西要送去交番。最近的交番……）`,
        `(In Japan, found things go to the koban. The nearest one…)`,
        `（日本では、拾ったものは交番に届ける。一番近い交番は……）`,
      ),
      2.6,
    ),
    (e.step = `koban`));
  let u = KVe(o, s);
  L4(t, u.x, u.z);
  let d = k9(u, -0.75, 1.95),
    f = P4(t, d.x, d.z, 1.5),
    p = f.x,
    m = f.z,
    h = k9(u, -2.5, 1.75),
    g = P4(t, h.x, h.z, 2),
    _ = k9(u, -3.6, 1),
    v = P4(t, _.x, _.z, 2),
    y = Math.hypot(u.x - o, u.z - s),
    b = Math.max(200, y + 110),
    x = 0,
    S = 0,
    C = e.every((t) => {
      e.dist(u.x, u.z) > b
        ? ((x += t),
          (S -= t) <= 0 && ((S = 8), e.notify(WVe, `bad`, 4)),
          e.progress(E9, Math.max(0, 1 - x / 25)),
          x >= 25 && e.fail(GVe))
        : x > 0 &&
          ((x = Math.max(0, x - t * 2)),
          x === 0 ? e.progress(null) : e.progress(E9, Math.max(0, 1 - x / 25)));
    }),
    w = null,
    T = () => {
      w ||
        ((w = e.actor(Gt.cop, p, m, Math.atan2(u.fx, -u.fz), {
          names: Q4(w9.officer),
          role: HVe,
        })),
        (w.anim = `idle`));
    };
  (await e.goto(
    { x: g.x, z: g.z },
    {
      objective: {
        zh: `把錢包送到最近的交番（${u.name.zh}）`,
        en: `Take the wallet to the nearest koban (${u.name.en})`,
        ja: `財布を一番近い交番（${u.name.ja}）へ届ける`,
      },
      radius: 3,
      onFoot: !0,
      pillar: !0,
      color: S9,
      label: { zh: u.name.zh, en: u.name.en, ja: u.name.ja },
      orWhen: () => (!w && e.dist(u.x, u.z) < 120 && T(), !1),
    },
  ),
    T());
  let E = w;
  (C(),
    e.progress(null),
    e.objective(null),
    (e.step = `form`),
    E.faceTo(e.px, e.pz),
    (E.look = t.player.position),
    await e.pressE(
      E.x,
      E.z,
      3,
      N(
        `按 {interact} 把錢包交給警察`,
        `Press {interact} to hand the wallet to the officer`,
        `{interact} で財布をおまわりさんに渡す`,
      ),
      { target: E },
    ),
    l?.stop());
  try {
    t.player.teleport(g.x, g.z, Math.atan2(E.x - g.x, -(E.z - g.z)));
  } catch {}
  let D = t.groundAt(E.x, E.z, t.player.position.y + 0.5, 0.6),
    O = k9(u, -6, 5.2),
    k = k9(u, -1.9, 1.3);
  try {
    t.cameraRig.override(new j(O.x, D + 2.5, O.z), new j(k.x, D + 1.1, k.z));
  } catch {}
  e.lockPlayer(!0);
  let A = null;
  try {
    A = t.peds.clearArea?.(g.x, g.z, 10, 240) ?? null;
  } catch {}
  (e.onCleanup(() => {
    try {
      (t.cameraRig.override(null), A?.());
    } catch {}
  }),
    E.faceTo(e.px, e.pz),
    (E.anim = `talk`),
    await $(
      e,
      n,
      N(
        `不好意思，我在公園撿到這個錢包。`,
        `Excuse me — I found this wallet in the park.`,
        `すみません、公園でこの財布を拾いました。`,
      ),
    ),
    await $(
      e,
      w9.officer,
      N(
        `撿到失物啊，謝謝你特地送來。那我們來填拾得物的單子。`,
        `A found item — thank you for bringing it in. Let’s fill in the form.`,
        `拾得物ですね。わざわざありがとうございます。では、書類を作りますね。`,
      ),
    ));
  let ee = await m3(e, {
    prompt: N(
      `「請問是在哪裡撿到的？」`,
      `"Where did you find it?"`,
      `「どちらで拾われましたか？」`,
    ),
    secs: 12,
    options: [
      {
        text: N(
          `上野公園，公園口旁邊步道的長椅上。`,
          `Ueno Park — on a bench by the walk next to the Park Exit.`,
          `上野公園の、公園口そばの遊歩道のベンチです。`,
        ),
        score: 2,
      },
      {
        text: N(
          `呃……公園那邊吧？`,
          `Er… somewhere in the park?`,
          `えっと……公園のほう、かな？`,
        ),
        score: 1,
      },
      {
        text: N(
          `路上撿的，不太記得了。`,
          `On the street, I don’t really remember.`,
          `道で……あまり覚えてないです。`,
        ),
        score: 0,
      },
    ],
  });
  (e.lockPlayer(!0),
    ee.score >= 2
      ? await $(
          e,
          w9.officer,
          N(
            `上野公園、公園口旁的長椅……好，寫下來了。`,
            `Ueno Park, a bench by the Park Exit… got it.`,
            `上野公園、公園口そばのベンチ……はい、書きました。`,
          ),
        )
      : await $(
          e,
          w9.officer,
          N(
            `沒關係，大概的位置就可以。……看地圖的話，是這附近嗎？公園口那一帶。好的。`,
            `That's fine, roughly is enough. …On the map, around here? The Park Exit side. All right.`,
            `大丈夫ですよ、だいたいで。……地図だと、このあたりですか？公園口のほう。はい。`,
          ),
        ));
  let M = await m3(e, {
    prompt: N(
      `「大概是幾點撿到的呢？」`,
      `"About what time did you find it?"`,
      `「何時ごろ拾われましたか？」`,
    ),
    secs: 12,
    options: [
      {
        text: N(
          `大概十分鐘前，撿到就直接過來了。`,
          `About ten minutes ago — I came straight here.`,
          `十分くらい前です。拾ってすぐ来ました。`,
        ),
        score: 2,
      },
      {
        text: N(
          `今天……剛剛吧？`,
          `Today… just now, I think?`,
          `今日……さっき、だと思います。`,
        ),
        score: 1,
      },
    ],
  });
  (e.lockPlayer(!0),
    await $(
      e,
      w9.officer,
      M.score >= 2
        ? N(
            `馬上就送來了啊，幫了大忙。`,
            `Straight away — that helps a lot.`,
            `すぐ届けてくださったんですね。助かります。`,
          )
        : N(`剛剛，好的。`, `Just now. Okay.`, `さっき、ですね。はい。`),
      2.2,
    ),
    (e.step = `owner`));
  let te = k9(u, -28, 0.3),
    ne = $e(t.plan, te.x, te.z),
    re = t3(e, w9.owner, VVe, ne.x, ne.z, 0);
  (re.moveTo(v.x, v.z, 3.8),
    $4(
      e,
      w9.owner,
      N(
        `不好意思！請問有人送錢包來嗎！？`,
        `Excuse me! Has anyone handed in a wallet!?`,
        `すみません！財布の落とし物、届いてませんか！？`,
      ),
      2.6,
    ));
  let ie = 0;
  (await e.until((e) => !re.moving || (ie += e) > 12),
    re.distTo(v.x, v.z) > 1.5 && re.place(v.x, v.z),
    re.faceTo(E.x, E.z),
    (re.anim = `talk`),
    await e.wait(0.6),
    await $(
      e,
      w9.owner,
      N(
        `咖啡色的長夾……我在公園的長椅坐了一下，好像就忘在那裡了……`,
        `A brown long wallet… I sat on a bench in the park for a minute and I must have left it…`,
        `茶色の長財布で……公園のベンチで少し休んで、そのまま置いてきちゃったみたいで……`,
      ),
    ),
    await $(
      e,
      w9.officer,
      N(
        `剛好這位剛送來一個。為了確認，可以說說裡面有什麼嗎？`,
        `This person just brought one in. To be sure — can you tell me what’s inside?`,
        `ちょうど今、こちらの方が届けてくださいました。念のため、中身を教えていただけますか？`,
      ),
    ),
    await $(
      e,
      w9.owner,
      N(
        `現金大約六萬兩千日圓，還有駕照和員工證。我叫宮下結衣。`,
        `About ¥62,000 in cash, my driving licence and my staff pass. I’m Yui Miyashita.`,
        `現金が六万二千円くらいと、免許証と社員証です。宮下結衣です。`,
      ),
    ),
    E.play(`point`),
    await $(
      e,
      w9.officer,
      N(
        `……駕照上的名字，宮下結衣小姐。確認無誤。`,
        `…The name on the licence: Yui Miyashita. Confirmed.`,
        `……免許証のお名前、宮下結衣さん。確認できました。`,
      ),
    ),
    re.faceTo(e.px, e.pz),
    (re.look = t.player.position),
    await $(
      e,
      w9.owner,
      N(
        `太好了……今天剛領的薪水，是房租啊……！`,
        `Thank goodness… I just drew my pay today — it’s my rent…!`,
        `よかったぁ……今日お給料をおろしたばかりで、家賃なんです……！`,
      ),
    ),
    (re.anim = `bow`),
    await $(
      e,
      w9.owner,
      N(
        `是您撿到的嗎？真的、真的非常感謝！`,
        `You found it? Thank you, truly, thank you so much!`,
        `拾ってくださったんですか？本当に、本当にありがとうございます！`,
      ),
    ),
    (re.anim = `talk`),
    await $(
      e,
      w9.officer,
      N(
        `依照法律，失主要給拾得人百分之五到二十的謝禮。`,
        `By law, the owner gives the finder a reward of five to twenty percent.`,
        `法律では、落とし主さんは拾った方に五〜二十パーセントのお礼をすることになっています。`,
      ),
    ),
    await $(
      e,
      w9.owner,
      N(
        `是的，當然。一成，六千兩百日圓……請一定要收下。`,
        `Yes, of course. Ten percent — ¥${T9.toLocaleString(`en-US`)}. Please, take it.`,
        `はい、もちろんです。一割の六千二百円です……どうか受け取ってください。`,
      ),
    ),
    (e.step = `orei`),
    re.play(`point`));
  let ae = await m3(e, {
    prompt: N(
      `宮下小姐雙手遞出一個信封。`,
      `Ms Miyashita holds out an envelope with both hands.`,
      `宮下さんが両手で封筒を差し出している。`,
    ),
    secs: 12,
    options: [
      {
        text: N(
          `那我就恭敬不如從命了，謝謝妳。`,
          `Then I'll gratefully accept. Thank you.`,
          `では、ありがたくいただきます。`,
        ),
        score: 1,
      },
      {
        text: N(
          `不用了，東西能回到妳手上就好。`,
          `No need — I’m just glad it’s back with you.`,
          `いえ、結構です。お財布が戻ってよかったです。`,
        ),
        score: 2,
      },
    ],
  });
  if ((e.lockPlayer(!0), (E.anim = `idle`), ae.index === 1)) {
    ((re.anim = `talk`),
      await $(e, w9.owner, N(`咦……可是……`, `Oh… but…`, `えっ……でも……`), 1.6),
      (E.anim = `talk`),
      await $(
        e,
        w9.officer,
        N(
          `（笑）被好人撿到了呢。`,
          `(smiles) A good person found it.`,
          `（笑）いい人に拾ってもらいましたね。`,
        ),
        2.2,
      ),
      await $(
        e,
        w9.owner,
        N(
          `那至少收下這個——附近和菓子店的銅鑼燒。下次來上野，一定要再來找我們喔。`,
          `Then at least take these — dorayaki from the sweet shop nearby. Next time you’re in Ueno, please come by again.`,
          `じゃあ、せめてこれだけでも……近くの和菓子屋さんのどら焼きです。また上野に来たら、寄ってくださいね。`,
        ),
      ),
      (re.anim = `bow`),
      await $(
        e,
        n,
        N(
          `（她深深鞠了一躬。東京，好像比想像中溫暖。）`,
          `(She bows deeply. Tokyo feels warmer than you expected.)`,
          `（彼女は深々とお辞儀した。東京は、思っていたより温かい）`,
        ),
        2.8,
      ),
      e.pass({
        reward: UVe,
        note: N(
          `心意收下了：一盒銅鑼燒`,
          `Her thanks: a box of dorayaki`,
          `気持ちだけ：どら焼きひと箱`,
        ),
      }));
    return;
  }
  ((re.anim = `bow`),
    e.sfx(`coin`, { ui: !0 }),
    await $(
      e,
      w9.owner,
      N(
        `真的幫了我大忙。謝謝您！`,
        `You really saved me. Thank you!`,
        `本当に助かりました。ありがとうございました！`,
      ),
    ),
    (E.anim = `talk`),
    await $(
      e,
      w9.officer,
      N(
        `辛苦了。在東京，大家都是這樣把東西找回來的。`,
        `Thank you both. In Tokyo, this is how things find their way home.`,
        `お疲れさまでした。東京では、こうやって落とし物が持ち主に戻るんですよ。`,
      ),
      3,
    ),
    e.pass({
      reward: T9,
      note: {
        zh: `謝禮 一成 ¥${T9.toLocaleString(`en-US`)}`,
        en: `Reward: 10 % — ¥${T9.toLocaleString(`en-US`)}`,
        ja: `お礼 一割 ¥${T9.toLocaleString(`en-US`)}`,
      },
    }));
}
