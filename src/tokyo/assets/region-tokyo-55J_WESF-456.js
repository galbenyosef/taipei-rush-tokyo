// tokyo/assets/region-tokyo-55J_WESF 456 — tag
// Lines 164114-164450 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Wze(e) {
  ((e.fillStyle = `#f0d68a`),
    e.fillRect(0, 0, 100, 163),
    r5(e, 0, 22),
    f5(e, 44, !0),
    e.save(),
    e.translate(50, 64));
  let t = [
    [-46, 30, K8],
    [-40, 44, W8],
    [-30, 54, Y8],
    [-18, 60, J8],
  ];
  for (let [n, r, i] of t)
    (e.beginPath(),
      e.moveTo(-6, 6),
      e.quadraticCurveTo(n * 0.5, r * 0.2, n, r),
      e.quadraticCurveTo(n * 0.4 + 4, r * 0.5, 4, 10),
      e.closePath(),
      Q8(e, i, H8, 1.1),
      e5(e, n * 0.9, r * 0.9, 3, J8, H8, 0.7));
  ($8(e, 4, 2, 14, 10, -0.5),
    Q8(e, W8, H8, 1.4),
    Z8(e, [0, -4, -14, -34, 2, -24, 8, -40, 16, -18, 12, -2]),
    Q8(e, K8, H8, 1.3),
    t5(e, [-10, -26, -2, -16, 4, -8], J8, 1),
    Z8(e, [14, -6, 26, -16, 34, -14, 28, -6, 20, 0]),
    Q8(e, W8, H8, 1.2),
    e5(e, 31, -14, 4, J8, H8, 1),
    Z8(e, [34, -14, 40, -12, 34, -11]),
    Q8(e, H8, null),
    t5(e, [30, -18, 30, -26, 36, -28], W8, 1.6),
    t5(e, [28, -18, 24, -26, 26, -32], W8, 1.6),
    e.restore());
}
function Gze(e, t) {
  ((e.fillStyle = H8),
    p5(e, 0, 0, 100, 163, 7),
    e.fill(),
    e.save(),
    p5(e, 3.4, 3.4, 93.2, 156.2, 4.5),
    e.clip(),
    (e.fillStyle = U8),
    e.fillRect(0, 0, 100, 163));
  let n = t.id;
  switch (
    (t.kind === `kasu` &&
      n % 4 == 3 &&
      t.month < 11 &&
      (e.translate(100, 0), e.scale(-1, 1)),
    t.month)
  ) {
    case 1:
      t.tag === `crane`
        ? (xze(e), e.save(), a5(e, n, !0), e.restore())
        : a5(e, n, !1);
      break;
    case 2:
      (Sze(e), t.tag === `warbler` && Cze(e));
      break;
    case 3:
      (wze(e, n, t.tag === `curtain`), t.tag === `curtain` && Tze(e));
      break;
    case 4:
      (Eze(e, n), t.tag === `cuckoo` && Dze(e));
      break;
    case 5:
      (Oze(e, n, t.tag === `bridge`), t.tag === `bridge` && kze(e));
      break;
    case 6:
      (jze(e, n, t.tag === `butterfly`),
        t.tag === `butterfly` &&
          (s5(e, 30, 40, 1.25, -0.3, Y8, J8),
          s5(e, 72, 62, 1.05, 0.35, J8, Y8)));
      break;
    case 7:
      (Mze(e, n, t.tag === `boar`), t.tag === `boar` && Nze(e));
      break;
    case 8:
      (Fze(e, n, t.tag),
        t.tag === `geese` &&
          (c5(e, 30, 30, 1.1), c5(e, 56, 44, 1), c5(e, 78, 26, 0.9)));
      break;
    case 9:
      (Ize(e, n, t.tag === `cup`), t.tag === `cup` && Lze(e));
      break;
    case 10:
      (zze(e, n, t.tag === `deer`), t.tag === `deer` && Bze(e));
      break;
    case 11:
      t.tag === `rainman`
        ? Vze(e)
        : t.tag === `lightning`
          ? Uze(e)
          : (u5(e, n), d5(e), t.tag === `swallow` && Hze(e));
      break;
    case 12:
      t.tag === `phoenix` ? Wze(e) : f5(e, n, !1);
  }
  if (t.ribbon) {
    let n =
      t.ribbon === `aka` ? (t.month === 3 ? `みよしの` : `あかよろし`) : void 0;
    yze(
      e,
      t.ribbon,
      t.month === 11 ? 54 : 46,
      84,
      t.month % 2 ? -0.22 : 0.2,
      n,
    );
  }
  (e.restore(),
    (e.strokeStyle = `rgba(255,255,255,.12)`),
    (e.lineWidth = 1),
    p5(e, 1, 1, 98, 161, 6.4),
    e.stroke());
}
function Kze(e) {
  ((e.fillStyle = `#1a1210`), p5(e, 0, 0, 100, 163, 7), e.fill());
  let t = e.createLinearGradient(0, 0, 100, 163);
  (t.addColorStop(0, `rgba(255,255,255,.10)`),
    t.addColorStop(0.5, `rgba(255,255,255,0)`),
    t.addColorStop(1, `rgba(0,0,0,.25)`),
    (e.fillStyle = t),
    p5(e, 0, 0, 100, 163, 7),
    e.fill(),
    (e.strokeStyle = `#5a1f17`),
    (e.lineWidth = 2),
    p5(e, 7, 7, 86, 149, 3),
    e.stroke());
}
function p5(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
var m5 = new Map(),
  qze = 0;
function h5(e, t) {
  let n = Math.max(16, Math.round(t / 2) * 2),
    r = `${e}@${n}`,
    i = m5.get(r);
  if (i) return i;
  i = document.createElement(`canvas`);
  let a = Math.round(n * V8);
  ((i.width = a), (i.height = n));
  let o = br(i, i.getContext(`2d`));
  if (
    (o && (o.scale(a / 100, n / 163), e < 0 ? Kze(o) : Gze(o, r8[e])),
    m5.set(r, i),
    qze++,
    m5.size > 288)
  ) {
    let e = m5.keys().next().value;
    e !== void 0 && m5.delete(e);
  }
  return i;
}
var Jze = `
#tk-koikoi { position: fixed; inset: 0; z-index: 70; user-select: none; -webkit-user-select: none; touch-action: none;
  font: 600 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC","Microsoft JhengHei",system-ui,sans-serif; color: #fff;
  -webkit-tap-highlight-color: transparent; }
#tk-koikoi canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
#tk-koikoi .kk-status { position: absolute; padding: 4px 12px; border-radius: 12px; background: rgba(8,10,8,.62); font-size: 13px; text-align: center;
  width: max-content; pointer-events: none; transform: translateX(-50%); border: 1px solid rgba(255,214,120,.25); }
#tk-koikoi .kk-call { position: absolute; left: 50%; top: 44%; transform: translate(-50%,-50%) scale(1); text-align: center; pointer-events: none;
  opacity: 0; transition: opacity .18s, transform .18s; }
#tk-koikoi .kk-call.on { opacity: 1; transform: translate(-50%,-50%) scale(1.04); }
#tk-koikoi .kk-call b { display: block; font: 900 clamp(34px, 9vh, 76px) ${vr}; color: #ffd24d; letter-spacing: .06em;
  -webkit-text-stroke: 1.5px #2a0f05; text-shadow: 0 4px 0 #7a1d10, 0 8px 24px rgba(0,0,0,.6); }
#tk-koikoi .kk-call i { display: block; font-style: normal; margin-top: 4px; font-size: clamp(13px, 2.6vh, 18px); text-shadow: 0 2px 6px #000; }
#tk-koikoi .kk-panel { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: min(520px, calc(100vw - 32px));
  max-height: calc(100vh - 24px); overflow: auto; padding: 14px 18px 16px; border-radius: 14px; background: rgba(20,14,10,.94);
  border: 1px solid rgba(255,200,61,.5); box-shadow: 0 12px 40px rgba(0,0,0,.6); text-align: center; }
#tk-koikoi .kk-panel h3 { margin: 0 0 6px; font-size: 18px; color: #ffd24d; letter-spacing: .04em; }
#tk-koikoi .kk-panel .kk-y { margin: 4px 0; font-size: 15px; line-height: 1.5; }
#tk-koikoi .kk-panel .kk-y span { display: inline-block; margin: 2px 6px; padding: 1px 8px; border-radius: 6px; background: rgba(255,214,120,.14); }
#tk-koikoi .kk-panel .kk-y small, #tk-koikoi .kk-panel .kk-note { font-size: 12px; opacity: .8; }
#tk-koikoi .kk-btns { display: flex; gap: 10px; margin-top: 12px; }
#tk-koikoi .kk-btns button { flex: 1; min-height: 56px; padding: 8px 10px; border-radius: 12px; border: 2px solid rgba(255,255,255,.25); cursor: pointer;
  background: rgba(40,30,20,.95); color: #fff; font: 900 22px ${vr}; touch-action: manipulation; }
#tk-koikoi .kk-btns button small { display: block; font: 600 11.5px "Hiragino Sans","PingFang TC","Noto Sans TC",system-ui,sans-serif; opacity: .85; margin-top: 3px; }
#tk-koikoi .kk-btns button.sel, #tk-koikoi .kk-btns button:hover { border-color: #ffc83d; background: rgba(90,60,14,.95); }
#tk-koikoi .kk-btns button.koi { color: #ffb4a0; }
#tk-koikoi .kk-btns button.stop { color: #ffe08a; }
#tk-koikoi .kk-tut { position: absolute; left: 12px; width: min(640px, calc(100vw - 24px)); box-sizing: border-box; padding: 7px 34px 7px 12px;
  border-radius: 10px; background: rgba(255,246,220,.95); color: #2a1a10; font-size: 13.5px; line-height: 1.4; box-shadow: 0 4px 16px rgba(0,0,0,.4); }
#tk-koikoi .kk-tut b { color: #a4231a; }
#tk-koikoi .kk-tut button { position: absolute; right: 6px; top: 50%; transform: translateY(-50%); width: 24px; height: 24px; border: 0; border-radius: 12px;
  background: rgba(0,0,0,.1); color: #2a1a10; font: 700 14px system-ui; cursor: pointer; }
@media (max-height: 420px) {
  #tk-koikoi .kk-panel { padding: 10px 14px 12px; }
  #tk-koikoi .kk-btns button { min-height: 48px; font-size: 19px; }
  #tk-koikoi .kk-tut { font-size: 12px; padding: 5px 32px 5px 10px; }
  #tk-koikoi .kk-status { font-size: 11px; padding: 3px 8px; }
}
`,
  Yze = {
    ai: 0.75,
    play: 0.5,
    reveal: 0.6,
    draw: 0.4,
    yaku: 1.5,
    decide: 1.2,
    hold: 0.42,
    call: 1.5,
  },
  Xze = {
    ai: 0.1,
    play: 0.14,
    reveal: 0.16,
    draw: 0.1,
    yaku: 0.45,
    decide: 0.35,
    hold: 0.12,
    call: 0.6,
  },
  g5 = {
    you: N(`你`, `You`, `あなた`),
    yourTurn: N(
      `你的回合：出一張手牌`,
      `Your turn: play a card`,
      `あなたの番：手札を一枚`,
    ),
    pickField: N(
      `選一張要吃的場牌`,
      `Pick the field card to take`,
      `取る場札を選ぶ`,
    ),
    pickDrawn: N(
      `翻到的牌可吃兩張之一：選一張`,
      `The drawn card matches two: pick one`,
      `めくった札で取る場札を選ぶ`,
    ),
    layDown: N(
      `沒有同月份的牌：再點一次（或點場上）把它放到場上`,
      `No match: tap it again (or the field) to lay it down`,
      `合う札なし：もう一度タップで場に出す`,
    ),
    theirTurn: (e) => ({
      zh: `${e.zh}的回合`,
      en: `${e.en}’s turn`,
      ja: `${e.ja ?? e.zh}の番`,
    }),
    round: (e, t) =>
      N(`第 ${e} 局／共 ${t} 局`, `Round ${e} of ${t}`, `${e}／${t} 回戦`),
    extra: (e) => N(`延長第 ${e} 局`, `Tie-break round ${e}`, `延長 ${e} 回戦`),
    oya: N(`親`, `dealer`, `親`),
    yakuMade: N(`成役了！`, `A yaku!`, `役ができた！`),
    koiHint: N(
      `繼續：拚更多分。但對手若先成役收手，他的分數加倍`,
      `Play on for more. If they make a yaku and stop first, their score doubles`,
      `続ける：相手が先に上がると相手の点が倍`,
    ),
    stopHint: (e) =>
      N(
        `收手：現在拿 ${e} 分`,
        `Stop and take ${e} now`,
        `ここで ${e} 文で上がる`,
      ),
    now: (e) =>
      N(
        `目前 ${e} 分（7 分以上加倍）`,
        `${e} pt now (doubled at 7+)`,
        `いま ${e} 文（7 文以上で倍）`,
      ),
    win: N(`你贏了這局`, `You take the round`, `あなたの勝ち`),
    lose: (e) => ({
      zh: `${e.zh}贏了這局`,
      en: `${e.en} takes the round`,
      ja: `${e.ja ?? e.zh}の勝ち`,
    }),
    draw: N(
      `流局：牌出完了，沒有人成役收手`,
      `A drawn round: the hands ran out`,
      `流れ：誰も上がらず`,
    ),
    oyaken: N(`親權：莊家得分`, `The dealer’s right`, `親権`),
    x2at7: N(`7 分以上 ×2`, `7+ points ×2`, `7 文以上 ×2`),
    x2koi: N(
      `對手喊了こいこい ×2`,
      `After their こいこい ×2`,
      `こいこい返し ×2`,
    ),
    points: (e) => N(`${e} 分`, `${e} pt`, `${e} 文`),
    score: (e, t, n) => ({
      zh: `你 ${e} — ${n.zh} ${t}`,
      en: `You ${e} — ${n.en} ${t}`,
      ja: `あなた ${e} — ${n.ja ?? n.zh} ${t}`,
    }),
    next: N(`下一局`, `Next round`, `次の勝負`),
    finish: N(`結束`, `Finish`, `終わる`),
    matchWin: N(`你贏了！`, `You win!`, `あなたの勝ち！`),
    matchLose: N(`你輸了`, `You lose`, `あなたの負け`),
    matchTie: N(`平手`, `A tie`, `引き分け`),
    matchOver: N(`勝負結束`, `Match over`, `勝負あり`),
    koiCall: N(`（繼續！）`, `(play on!)`, ``),
    choose: N(
      `こいこい 還是 勝負？`,
      `こいこい or 勝負?`,
      `こいこい か 勝負 か`,
    ),
    stopCall: N(`（收手！）`, `(stop!)`, ``),
    tut: [
      N(
        `<b>選一張手牌</b>：和場上<b>同月份</b>（同一種花）的牌會發亮，點下去就把兩張都吃下。角落的數字是月份。`,
        `<b>Play a hand card</b>: field cards of the <b>same month</b> (the same flower) light up; tap to take both. The corner number is the month.`,
        `<b>手札を一枚</b>：<b>同じ月</b>の場札が光る。タップで取る。角の数字は月。`,
      ),
      N(
        `出牌後會<b>自動從牌堆翻一張</b>，同月份就再吃一組。沒有就留在場上。`,
        `Then the <b>top of the pile is turned</b>: it takes a same-month card too, or stays on the field.`,
        `次に<b>山札を一枚めくる</b>。同じ月なら取る。`,
      ),
      N(
        `收集牌湊成<b>役</b>才有分：如 <b>猪鹿蝶</b>、<b>赤短</b>、<b>三光</b>……旁邊會顯示進度。`,
        `Points come from <b>yaku</b>, sets of captured cards: <b>猪鹿蝶</b>, <b>赤短</b>, <b>三光</b>… progress is shown beside your pile.`,
        `<b>役</b>を作ると点になる：猪鹿蝶・赤短・三光…`,
      ),
      N(
        `成役後二選一：<b>「こいこい」</b>繼續拚更多分，或<b>「勝負」</b>現在收分。見好就收，也是一種本事。`,
        `With a yaku, choose: <b>こいこい</b> plays on for more, <b>勝負</b> stops and scores now. Knowing when to stop is a skill too.`,
        `役ができたら<b>こいこい</b>か<b>勝負</b>か。引き際も腕のうち。`,
      ),
    ],
  },
  _5 = (e) => o8[e].ja;
function v5(e, t) {
  let n = o8[t];
  if (e === `ja`) return ``;
  let r = e === `zh` ? n.zh : n.en;
  return r === n.ja ? `` : r;
}
