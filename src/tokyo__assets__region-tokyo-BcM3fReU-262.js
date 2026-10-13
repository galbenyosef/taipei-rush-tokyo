// tokyo__assets__region-tokyo-BcM3fReU 262 — chart
// Lines 102928-103231 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function X2(e, t = 312) {
  let n = e.ctx,
    r = Ie(n),
    i = (e) => n.t(Ae(r, e)),
    a = t,
    o = 0,
    s = null,
    c = 0,
    l = 0,
    u = null,
    d = null,
    f = null,
    p = null,
    m = null,
    h = [],
    g = null,
    _ = null,
    v = null,
    y = new Map();
  if (typeof document < `u`) {
    if (!document.getElementById(`tk-live-css`)) {
      let e = document.createElement(`style`);
      ((e.id = `tk-live-css`),
        (e.textContent = J2),
        document.head.appendChild(e));
    }
    ((u = document.createElement(`div`)),
      (u.id = `tk-live`),
      (u.innerHTML = `<div class="tl-top"><span class="tl-live">● LIVE</span><span class="tl-v"></span></div><div class="tl-sig"><b></b><div class="tl-bars"><i></i><i></i><i></i><i></i><i></i></div><div class="tl-dot"></div><span class="tl-db"></span></div><div class="tl-look"></div><div class="tl-pins"></div><div class="tl-chat"></div>`),
      (u.querySelector(`.tl-sig b`).textContent = i({
        zh: `訊號`,
        en: `Signal`,
        ja: `電波`,
      })),
      (d = u.querySelector(`.tl-v`)),
      (f = u.querySelector(`.tl-sig`)),
      (p = u.querySelector(`.tl-dot`)),
      (m = u.querySelector(`.tl-db`)),
      (h = [...u.querySelectorAll(`.tl-bars i`)]),
      (g = u.querySelector(`.tl-look`)),
      (_ = u.querySelector(`.tl-pins`)),
      (v = u.querySelector(`.tl-chat`)),
      f && (f.style.display = `none`),
      document.body.appendChild(u),
      document.body.classList.add(`tk-live-on`));
  }
  let b = {
    signal(e) {
      if (
        ((s = e === null ? null : Math.max(0, Math.min(1, e))),
        f && (f.style.display = s === null ? `none` : ``),
        s === null)
      )
        return;
      let t = Math.round(s * 5);
      (h.forEach((e, n) => e.classList.toggle(`on`, n < t)),
        u?.classList.toggle(`hot`, t >= 5));
    },
    look(e) {
      g && (g.textContent = e ? `👀 ` + i(e) : ``);
    },
    pin(e, t, n) {
      if (!_) return;
      let r = y.get(e);
      (r ||
        ((r = document.createElement(`div`)), y.set(e, r), _.appendChild(r)),
        (r.className = `tl-pin ${n}`),
        (r.innerHTML = ``));
      let a = document.createElement(`span`);
      ((a.textContent = n === `ok` ? `✓` : n === `maybe` ? `?` : `✗`),
        r.append(a, document.createTextNode(i(t))));
    },
    chat(e, t) {
      if (!v) return;
      let n = document.createElement(`div`);
      n.className = `tl-msg`;
      let a = document.createElement(`span`);
      if (
        ((a.textContent = t ?? Y2[o++ % Y2.length]),
        n.appendChild(a),
        n.appendChild(document.createTextNode(e.ja ?? e.zh)),
        r !== `ja`)
      ) {
        let t = document.createElement(`em`);
        ((t.textContent = i(e)), n.appendChild(t));
      }
      for (v.appendChild(n); v.children.length > 3;)
        v.firstElementChild?.remove();
    },
    get viewers() {
      return Math.round(a);
    },
    bump(e) {
      a = Math.max(40, a * e);
    },
    tick(t, n = 2) {
      ((a = Math.max(40, a + n * t)),
        d && (d.textContent = `👁 ${Math.round(a).toLocaleString(`en-US`)}`),
        s !== null &&
          ((c -= t),
          c <= 0 &&
            ((c = 0.18 + (1 - s) * 2),
            p?.classList.add(`ping`),
            setTimeout(() => p?.classList.remove(`ping`), 90),
            s > 0.15 && e.sfx(`ui_hover`, { ui: !0 })),
          (l -= t) <= 0 &&
            m &&
            ((l = 0.5), (m.textContent = `${Math.round(-95 + s * 60)} dBm`))));
    },
    remove() {
      (u?.remove(), (u = null), document.body.classList.remove(`tk-live-on`));
    },
  };
  return (e.onCleanup(() => b.remove()), b);
}
r.add({
  點這裡: `タップ`,
  "音符落到黃線時，點下面的按鈕": `音符が黄色い線に来たら下のボタンをタップ`,
});
var Z2 = `
#tk-kara { position: fixed; left: 50%; bottom: calc(22vh + env(safe-area-inset-bottom) * 0.5); transform: translateX(-50%); z-index: 20;
  width: min(560px, calc(100vw - 32px)); box-sizing: border-box; padding: 10px 14px 12px; border-radius: 14px; background: rgba(20,8,40,.86);
  border: 1px solid rgba(160,110,255,.5); color: #fff; user-select: none; -webkit-user-select: none; touch-action: none;
  font: 700 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; }
#tk-kara .tk-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; font-size: 12px; margin-bottom: 6px; }
#tk-kara .tk-title { opacity: .9; white-space: nowrap; } #tk-kara .tk-hint { opacity: .75; text-align: right; }
#tk-kara .tk-combo { font-size: 14px; color: #ffd24d; min-width: 64px; text-align: center; font-variant-numeric: tabular-nums; }
#tk-kara .tk-lanes { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; height: 136px; margin: 0 auto; max-width: 340px; }
#tk-kara .tk-lane { position: relative; overflow: hidden; border-radius: 10px; background: rgba(14,6,30,.82); box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
#tk-kara .tk-lane.down { background: rgba(70,48,120,.85); }
#tk-kara .tk-lane .tk-hit { position: absolute; left: 4px; right: 4px; bottom: 22px; height: 4px; margin-bottom: -2px; border-radius: 2px; background: #ffd24d; box-shadow: 0 0 8px #ffd24d; opacity: .85; }
#tk-kara .tk-lane .tk-key { position: absolute; left: 0; right: 0; bottom: 2px; text-align: center; font: 700 11px system-ui,sans-serif; opacity: .75; }
#tk-kara .tk-lane .tk-tag { position: absolute; left: 0; right: 0; top: 3px; text-align: center; font-size: 10px; opacity: .45; }
#tk-kara .tk-note { position: absolute; left: 50%; top: 0; width: 34px; height: 22px; margin: -11px 0 0 -17px; border-radius: 11px; display: grid; place-items: center;
  font-size: 12px; color: #fff; will-change: transform; }
#tk-kara .tk-l0 .tk-note { background: #ff6fb1; } #tk-kara .tk-l1 .tk-note { background: #a679ff; } #tk-kara .tk-l2 .tk-note { background: #4da3ff; }
#tk-kara .tk-note.decoy { background: rgba(255,77,94,.25) !important; border: 2px solid #ff4d5e; color: #ff4d5e; }
#tk-kara .tk-note.ok { opacity: 0; transition: opacity .12s; } #tk-kara .tk-note.miss { opacity: .3; filter: grayscale(1); }
#tk-kara .tk-tail { position: absolute; left: 50%; top: 0; width: 12px; margin-left: -6px; border-radius: 6px; background: rgba(255,255,255,.35); will-change: transform; }
#tk-kara .tk-tail.on { background: rgba(255,210,77,.75); } #tk-kara .tk-tail.broken { background: rgba(255,255,255,.12); }
#tk-kara .tk-judge { position: absolute; left: 0; right: 0; bottom: 34px; text-align: center; font-size: 12px; font-weight: 800; letter-spacing: .04em; opacity: 0; transition: opacity .35s; pointer-events: none; }
#tk-kara .tk-judge.show { opacity: 1; transition: none; }
#tk-kara .tk-judge.p { color: #ffd24d; } #tk-kara .tk-judge.g { color: #3ddc84; } #tk-kara .tk-judge.m { color: #ff4d5e; }
#tk-kara .tk-lyric { margin-top: 8px; text-align: center; font-size: 19px; letter-spacing: .06em; min-height: 25px; }
#tk-kara .tk-sub { text-align: center; font-size: 12.5px; opacity: .7; min-height: 16px; }
#tk-kara .tk-meters { display: flex; gap: 14px; margin-top: 7px; font-size: 11.5px; }
#tk-kara .tk-meters > div { flex: 1; } #tk-kara .tk-bar { height: 6px; border-radius: 3px; background: rgba(255,255,255,.15); overflow: hidden; margin-top: 3px; }
#tk-kara .tk-bar i { display: block; height: 100%; width: 0; transition: width .15s; }
#tk-kara .tk-c i { background: #b98cff; } #tk-kara .tk-r i { background: #3ddc84; }
#tk-kara .tk-c.low i { background: #ff4d5e; } #tk-kara .tk-r.low i { background: #ff9f2e; }
/* phones: each lane ends in a big glowing pad that says タップ — the whole lane is the button (2026-10-11) */
#tk-kara.touch { bottom: calc(10px + env(safe-area-inset-bottom)); width: min(620px, calc(100vw - 24px)); }
#tk-kara.touch .tk-lanes { height: 200px; max-width: none; gap: 10px; }
#tk-kara.touch .tk-lane .tk-hit { bottom: 58px; height: 6px; margin-bottom: -3px; }
#tk-kara.touch .tk-lane .tk-key { left: 6px; right: 6px; bottom: 6px; height: 44px; border-radius: 12px; display: grid; place-items: center;
  font: 800 15px "Hiragino Sans","PingFang TC","Noto Sans JP",system-ui,sans-serif; opacity: 1; color: #fff;
  background: rgba(255,255,255,.12); border: 2px solid rgba(255,210,77,.75); box-shadow: 0 0 12px rgba(255,210,77,.35); animation: tk-pad 1.1s ease-in-out infinite; }
#tk-kara.touch .tk-l0 .tk-key { border-color: #ff6fb1; } #tk-kara.touch .tk-l1 .tk-key { border-color: #a679ff; } #tk-kara.touch .tk-l2 .tk-key { border-color: #4da3ff; }
#tk-kara.touch .tk-lane.down .tk-key { background: rgba(255,210,77,.55); animation: none; }
#tk-kara.touch .tk-judge { bottom: 70px; font-size: 14px; }
#tk-kara.touch .tk-note { width: 44px; height: 26px; margin: -13px 0 0 -22px; border-radius: 13px; font-size: 14px; }
#tk-kara.touch.break .tk-lane .tk-key { animation: none; border-color: rgba(255,255,255,.2); box-shadow: none; opacity: .5; }
@keyframes tk-pad { 0%,100% { box-shadow: 0 0 6px rgba(255,210,77,.25); } 50% { box-shadow: 0 0 16px rgba(255,210,77,.7); } }
#tk-kara.break .tk-lanes { box-shadow: 0 0 0 2px rgba(61,220,132,.45); border-radius: 10px; }
#tk-kara .tk-grade { position: absolute; inset: 0; display: none; place-items: center; text-align: center; border-radius: 14px; background: rgba(20,8,40,.94); }
#tk-kara.done .tk-grade { display: grid; }
#tk-kara .tk-grade b { display: block; font-size: 54px; line-height: 1; color: #ffd24d; }
#tk-kara .tk-grade.fail b { color: #ff4d5e; font-size: 34px; }
#tk-kara .tk-grade span { display: block; margin-top: 6px; font-size: 13px; opacity: .85; }
@media (max-height: 480px) {
  /* a phone held sideways: the card at the top, the subtitles (the overheard meeting) stay readable underneath */
  #tk-kara { bottom: auto; top: calc(6px + env(safe-area-inset-top)); padding: 7px 12px 8px; }
  #tk-kara .tk-lanes { height: 96px; } #tk-kara .tk-lyric { font-size: 16px; min-height: 20px; margin-top: 5px; }
  #tk-kara .tk-meters { margin-top: 4px; }
}
`,
  Q2 = [
    {
      line: {
        ja: `ネオンの川を　ひとりで渡る`,
        zh: `獨自渡過霓虹的河`,
        en: `Alone across the river of neon`,
      },
      kana: [`ネ`, `オ`, `ン`, `の`, `か`, `わ`, `を`, `ひ`, `と`, `り`],
      chart: `0:1 1:1 1.5:0 2:1 3:2 3.5:2 4:1 5.5:0 6:1 6.5:2:1.5`,
    },
    {
      line: {
        ja: `終電までに　帰れない夜`,
        zh: `末班車前回不了家的夜`,
        en: `A night I can’t get home by the last train`,
      },
      kana: [`しゅう`, `で`, `ん`, `ま`, `で`, `に`, `か`, `え`, `れ`, `ない`],
      chart: `0:0 1:1 1.5:1 2:2 2.5:1 3:0 4.5:1 5:2 5.5:1 6:2:2`,
    },
    {
      line: {
        ja: `君の名前を　呼んでみたけど`,
        zh: `我試著喊你的名字`,
        en: `I tried calling out your name`,
      },
      kana: [`き`, `み`, `の`, `な`, `ま`, `え`, `を`, `よ`, `ん`, `で`],
      chart: `0:1 0.5:0 1:1 2:2 2.5:2 3:1 3.75:0 4.5:1 5:2 5.5:0:1.5`,
    },
    {
      line: {
        ja: `返事はいつも　雨の音`,
        zh: `回答總是雨聲`,
        en: `The answer is always the rain`,
      },
      kana: [`へ`, `ん`, `じ`, `は`, `い`, `つ`, `も`, `あ`, `め`, `の`],
      chart: `0:2 0.5:1 1:0 2:0 2.5:1 3:2 3.5:1 4.5:0 5:0 5.5:1:2`,
    },
    {
      line: {
        ja: `改札の灯り　消える前に`,
        zh: `在剪票口的燈熄滅之前`,
        en: `Before the ticket-gate lights go out`,
      },
      kana: [`か`, `い`, `さ`, `つ`, `の`, `あ`, `か`, `り`, `き`, `え`, `る`],
      chart: `0:0 0.5:0 1:1 1.5:2 2:1 3:0 3.25:1 3.5:2 4.5:1 5:0 5.5:1:1.5`,
    },
    {
      line: {
        ja: `走れ走れ　夜を越えて`,
        zh: `跑吧跑吧，越過黑夜`,
        en: `Run, run, across the night`,
      },
      kana: [
        `は`,
        `し`,
        `れ`,
        `は`,
        `し`,
        `れ`,
        `よ`,
        `る`,
        `を`,
        `こ`,
        `え`,
        `て`,
      ],
      chart: `0:2 0.5:1 1:0:1 2.5:2 3:1 3.5:0:1 5:1 5.5:2 6:1 6.5:0 6.75:1 7:2:1.5`,
    },
    {
      line: {
        ja: `次の駅で　君を待つよ`,
        zh: `我在下一站等你`,
        en: `I’ll wait for you at the next station`,
      },
      kana: [
        `つ`,
        `ぎ`,
        `の`,
        `え`,
        `き`,
        `で`,
        `き`,
        `み`,
        `を`,
        `ま`,
        `つ`,
        `よ`,
      ],
      chart: `0:1 0.5:0 1:1 1.5:2 2:1 3:0 3.5:1 4:2 4.25:1 4.5:0 5.5:1 6:2:1`,
    },
    {
      line: {
        ja: `終電までに　届けこの声`,
        zh: `在末班車之前，讓這聲音傳到你那裡`,
        en: `Before the last train, let this voice reach you`,
      },
      kana: [
        `しゅう`,
        `で`,
        `ん`,
        `ま`,
        `で`,
        `に`,
        `と`,
        `ど`,
        `け`,
        `こ`,
        `の`,
        `こ`,
        `え`,
      ],
      chart: `0:0 0.5:1 1:2 1.5:1 2:0 2.5:1 3.5:2 3.75:1 4:0 5:1 5.5:2 6:1 6.5:1:3`,
    },
  ],
  $2 = [
    { kind: `verse`, lines: [0, 1], bpm: 104, travel: 1.75 },
    { kind: `break`, i: 0 },
    { kind: `verse`, lines: [2, 3], bpm: 112, travel: 1.6 },
    { kind: `break`, i: 1 },
    { kind: `verse`, lines: [4, 5], bpm: 120, travel: 1.45 },
    { kind: `break`, i: 2 },
    { kind: `verse`, lines: [6, 7], bpm: 128, travel: 1.35 },
  ],
  e4 = 0.07,
  t4 = 0.15,
  n4 = 0.22,
  r4 = 0.22,
  i4 = (e, t, n) => ({ zh: e, en: t, ja: n });
