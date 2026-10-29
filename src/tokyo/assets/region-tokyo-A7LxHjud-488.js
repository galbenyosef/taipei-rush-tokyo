// tokyo/assets/region-tokyo-A7LxHjud 488 — root
// Lines 176709-176919 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
r.add({
  車隊的阿亮: `クラブのリョウ`,
  阿亮: `リョウ`,
  美香: `ミカ`,
  阿拓: `タク`,
  "跟上來啊——今晚的 C1 是我們的。": `ついて来いよ——今夜のC1はオレたちのもんだ。`,
  "喂喂，真的假的……": `おいおい、マジかよ……`,
  "先走一步！": `お先！`,
  "彎道才是重點啦。": `コーナーで差がつくんだよ。`,
  "還差得遠呢。": `まだまだだな。`,
  "……服了你。下次再來。": `……参った。また走ろうぜ。`,
  最快圈: `ベスト`,
  車輛無法生成: `車を用意できなかった`,
  "首都高 C1 午夜賽": `C1ミッドナイト`,
  "芝公園的高架下，小車隊的阿亮在等人。他賭你跑不贏他們——首都高都心環狀線，兩圈，深夜的車流裡一決勝負。": `芝公園の高架下で、小さなカークラブのリョウが待っている。お前じゃ勝てないと言う——首都高都心環状線を二周、深夜の流れの中で勝負だ。`,
  "晚上 10:00 · 芝公園": `午後10時・芝公園`,
  "喂，你就是最近在東京到處跑的那個人？": `おい、最近東京を走り回ってるってのはアンタか？`,
  "頭頂上這條就是首都高 C1，都心環狀線。一圈五公里，隧道、彎道、高架全都有。": `頭の上が首都高C1、都心環状線だ。一周五キロ、トンネルもコーナーも高架も全部ある。`,
  "跟我們車隊跑兩圈。贏了，獎金歸你；車也借你，之後愛怎麼開都行。": `ウチのクラブと二周勝負だ。勝ったら賞金はアンタのもん。車も貸すから、その後は好きに走りな。`,
  "只有一個規矩：別撞一般車。大家都要平安回家。": `ルールはひとつ、一般車にはぶつけるな。みんな無事に帰るんだ。`,
  "好，來吧。": `いいよ、やろう。`,
  "車子毀了——比賽失敗": `車が大破した——レース失敗`,
  "你丟下了車——比賽失敗": `車を降りた——レース失敗`,
  "跑太久了——比賽結束": `時間切れ——レース終了`,
  "你離開了 C1——比賽結束": `C1を降りた——レース終了`,
  "（電話）……真的贏了啊。C1 上沒人跑得過你了。獎金收下吧。": `（電話）……マジで勝ちやがった。C1でアンタに敵うやつはもういねえよ。賞金、受け取ってくれ。`,
  "（電話）不錯嘛，第一次就跑成這樣。下次再來挑戰。": `（電話）初めてにしちゃやるじゃん。また挑戦しに来いよ。`,
});
var DHe = 16751150,
  H9 = 2,
  OHe = [-330, -180],
  U9 = -3,
  W9 = -6.6,
  G9 = -4.8,
  kHe = 12,
  AHe = 10,
  K9 = {
    name: { zh: `車隊的阿亮`, en: `Ryo (car club)`, ja: `クラブのリョウ` },
    voice: `ja`,
    pitch: 0.92,
  },
  jHe = () =>
    Nt(`young`, `tk-side-c1-ryo`, {
      height: 1.76,
      hair: { style: `fade`, color: 2761246 },
      top: { style: `tee`, color: 1974822 },
      outer: { style: `jacket`, color: 2899548, color2: 1911618 },
      bottom: { style: `jeans`, color: 3160138 },
      shoes: { style: `sneaker`, color: 15790318, color2: 14174762 },
      acc: kt(`phone`),
    }),
  MHe = [
    {
      name: N(`阿亮`, `Ryo`, `リョウ`),
      color: 15921902,
      skill: 0.8,
      kind: `sports`,
    },
    {
      name: N(`美香`, `Mika`, `ミカ`),
      color: 3108824,
      skill: 0.62,
      kind: `sports`,
    },
    {
      name: N(`阿拓`, `Taku`, `タク`),
      color: 15909913,
      skill: 0.5,
      kind: `sports`,
    },
  ],
  NHe = {
    start: [
      N(
        `跟上來啊——今晚的 C1 是我們的。`,
        `Keep up — C1's ours tonight.`,
        `ついて来いよ——今夜のC1はオレたちのもんだ。`,
      ),
    ],
    passed: [
      N(`什麼！？`, `What!?`, `なにっ！？`),
      N(`喂喂，真的假的……`, `No way…`, `おいおい、マジかよ……`),
    ],
    pass: [
      N(`先走一步！`, `See ya!`, `お先！`),
      N(
        `彎道才是重點啦。`,
        `It's all in the corners.`,
        `コーナーで差がつくんだよ。`,
      ),
    ],
    final: [N(`最後一圈！`, `Last lap!`, `ラスト一周！`)],
    win: [N(`還差得遠呢。`, `Not even close.`, `まだまだだな。`)],
    lose: [
      N(
        `……服了你。下次再來。`,
        `…You got me. Rematch soon.`,
        `……参った。また走ろうぜ。`,
      ),
    ],
  },
  PHe = { throttle: 0, brake: 0, steer: 0, handbrake: !1, hold: !0 };
function q9(e, t, n = 1) {
  let r = Wo(e),
    i = -r.dz,
    a = r.dx;
  return {
    x: r.x + i * t,
    z: r.z + a * t,
    y: r.y,
    heading: Math.atan2(r.dx * n, -r.dz * n),
  };
}
function J9(e, t) {
  let n = Ho().length,
    r = [];
  for (let t = 0; t < n - 2; t += 5) {
    let n = q9(t, e);
    r.push({ x: n.x, z: n.z });
  }
  return (t < 0 && r.reverse(), new et(r, !0));
}
function FHe(e, t, n, r, i = 1) {
  let a = q9(n, r, i);
  try {
    e.vehicles.teleport?.(t, a.x, a.z, a.heading);
  } catch {}
  t.placeOnFloor?.(a.y);
}
function IHe(e, t) {
  let n = q9(t, G9);
  return e.project(n.x, n.z, { s: 0, seg: 0, dist: 0 }).s;
}
var LHe = `
#tk-c1 { position: fixed; inset: 0; pointer-events: none; z-index: 19; color: #fff; user-select: none;
  font: 700 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; }
#tk-c1 .p { position: absolute; right: calc(16px + env(safe-area-inset-right)); top: calc(96px + env(safe-area-inset-top));
  min-width: 190px; padding: 10px 14px; border-radius: 12px; background: rgba(10,14,24,.72); border: 1px solid rgba(255,255,255,.16); }
#tk-c1 .pl { font-size: 38px; line-height: 1; } #tk-c1 .pl small { font-size: 16px; opacity: .75; margin-left: 4px; }
#tk-c1 .r { display: flex; justify-content: space-between; gap: 12px; margin-top: 6px; font-size: 14px; }
#tk-c1 .r b { color: #ffb347; font-weight: 800; }
#tk-c1 .c { position: absolute; left: 50%; top: 30%; transform: translate(-50%,-50%); font-size: 92px; font-weight: 900;
  text-shadow: 0 4px 18px rgba(0,0,0,.55); opacity: 0; transition: opacity .12s; }
#tk-c1 .c.go { color: #7dff9a; }
/* (the lap note: below the route guide's column — arrow, turn chip, checkpoint, a warning — karts/guide.ts #tk-rg) */
#tk-c1 .f { position: absolute; left: 50%; top: max(40%, calc(316px + env(safe-area-inset-top))); transform: translateX(-50%); font-size: 24px; color: #ffb347;
  text-shadow: 0 2px 10px rgba(0,0,0,.6); opacity: 0; transition: opacity .2s; white-space: nowrap; }
@media (max-width: 760px) { #tk-c1 .p { top: calc(70px + env(safe-area-inset-top)); min-width: 150px; padding: 8px 10px; } #tk-c1 .pl { font-size: 28px; } }
@media (max-height: 480px) { #tk-c1 .f { top: max(48%, calc(190px + env(safe-area-inset-top))); } }
`,
  Y9 = (e) => {
    let t = Math.floor(e / 60),
      n = e - t * 60;
    return `${t}:${n < 10 ? `0` : ``}${n.toFixed(2)}`;
  },
  RHe = class {
    ctx;
    root;
    pl;
    lap;
    time;
    best;
    cd;
    flash;
    flashT = 0;
    last = ``;
    constructor(e) {
      if (((this.ctx = e), !document.getElementById(`tk-c1-css`))) {
        let e = document.createElement(`style`);
        ((e.id = `tk-c1-css`),
          (e.textContent = LHe),
          document.head.appendChild(e));
      }
      let t = (t) => e.t(t);
      ((this.root = document.createElement(`div`)),
        (this.root.id = `tk-c1`),
        (this.root.innerHTML = `<div class="p"><div class="pl"></div><div class="r"><span>${t({ zh: `圈數`, en: `Lap`, ja: `ラップ` })}</span><b class="lp"></b></div><div class="r"><span>${t({ zh: `時間`, en: `Time`, ja: `タイム` })}</span><b class="tm"></b></div><div class="r"><span>${t({ zh: `最快圈`, en: `Best`, ja: `ベスト` })}</span><b class="bs">—</b></div></div><div class="c"></div><div class="f"></div>`),
        document.body.appendChild(this.root),
        (this.pl = this.root.querySelector(`.pl`)),
        (this.lap = this.root.querySelector(`.lp`)),
        (this.time = this.root.querySelector(`.tm`)),
        (this.best = this.root.querySelector(`.bs`)),
        (this.cd = this.root.querySelector(`.c`)),
        (this.flash = this.root.querySelector(`.f`)));
    }
    set(e, t, n, r, i, a) {
      let o = `${e}|${n}|${Math.floor(i * 10)}|${a.toFixed(2)}`;
      o !== this.last &&
        ((this.last = o),
        (this.pl.innerHTML = `${e}<small>/ ${t}</small>`),
        (this.lap.textContent = `${Math.min(n, r)} / ${r}`),
        (this.time.textContent = Y9(i)),
        a > 0 && (this.best.textContent = Y9(a)));
    }
    count(e, t = !1) {
      ((this.cd.textContent = e),
        this.cd.classList.toggle(`go`, t),
        (this.cd.style.opacity = e ? `1` : `0`));
    }
    note(e, t = 0) {
      e
        ? ((this.flash.textContent = e),
          (this.flash.style.opacity = `1`),
          (this.flashT = 2.4))
        : (this.flashT -= t) <= 0 && (this.flash.style.opacity = `0`);
    }
    remove() {
      this.root.remove();
    }
  },
  zHe = (e) => e.destroyed || e.health <= 0;
