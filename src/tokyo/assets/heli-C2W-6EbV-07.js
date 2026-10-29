// tokyo/assets/heli-C2W-6EbV 07 — math
// Lines 1980-2291 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function mt() {
  return (
    pt ||
      ((pt = new f(Ce + 0.05, 40)),
      pt.rotateX(-Math.PI / 2),
      (pt.userData.keepCpu = !0),
      (pt.name = `vehicle-heli-disc`)),
    pt
  );
}
var ht = 0.14,
  gt = 0.45,
  _t = 0.3;
t.add({
  燕鷗直升機: `ターン・ヘリコプター`,
  狂飆新聞直升機: `ラッシュニュース取材ヘリ`,
  空中救護直升機: `ドクターヘリ`,
  "旋翼轉速正常 — 可以起飛": `ローター回転数OK — 離陸できます`,
  "已到城市邊界 — 請掉頭": `市街地の端です — 引き返してください`,
  "直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機": `ヘリ：左スティック 前後・旋回 · RT 上昇 · LT 下降 · 離すとホバリング · {enter} 降りる`,
  "直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停": `ヘリ：スティック 前後・旋回 · アクセル 上昇 · ブレーキ 下降 · 離すとホバリング`,
  "直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機": `ヘリ：W／S 前進・後退 · A／D 旋回 · {handbrake} 上昇 · {sprint} 下降 · 離すとホバリング · {enter} 降りる`,
  "按 {interact} 搭電梯到頂樓停機坪": `{interact} でエレベーター：屋上ヘリポートへ`,
  "按 {interact} 搭電梯下樓": `{interact} でエレベーター：地上へ`,
  頂樓停機坪電梯: `屋上ヘリポート用エレベーター`,
  "澀谷 SCRAMBLE SQUARE 頂樓停機坪": `渋谷スクランブルスクエア屋上ヘリポート`,
  代代木公園停機坪: `代々木公園ヘリポート`,
  六本木之丘森大樓頂樓停機坪: `六本木ヒルズ森タワー屋上ヘリポート`,
});
var vt = {
    city: `tokyo`,
    ceiling: 480,
    livery: {
      club: [`東京飛行クラブ`, `TOKYO FLYING CLUB`],
      reg: { private: `JA31TK`, news: `JA24RN`, ambulance: `JA119D` },
      names: {
        private: {
          zh: `燕鷗直升機`,
          en: `Tern helicopter`,
          ja: `ターン・ヘリコプター`,
        },
        news: {
          zh: `狂飆新聞直升機`,
          en: `RUSH NEWS chopper`,
          ja: `ラッシュニュース取材ヘリ`,
        },
        ambulance: {
          zh: `空中救護直升機`,
          en: `Air ambulance`,
          ja: `ドクターヘリ`,
        },
      },
    },
    text: {
      spool: (e) => ({
        zh: `旋翼加速中… ${e}%`,
        en: `Rotor spooling up… ${e}%`,
        ja: `ローター回転上昇中… ${e}%`,
      }),
      ready: {
        zh: `旋翼轉速正常 — 可以起飛`,
        en: `Rotor at speed — ready to lift off`,
        ja: `ローター回転数OK — 離陸できます`,
      },
      jumpWarn: (e) => ({
        zh: `離地 ${e} 公尺！再按一次 {enter} 跳機`,
        en: `${e} m up! Press {enter} again to jump out`,
        ja: `高度 ${e} m！もう一度 {enter} で飛び降りる`,
      }),
      fire: (e) => ({
        zh: `🔥 直升機起火了！快降落並按 {enter} 下機（${e} 秒）`,
        en: `🔥 ON FIRE — land and press {enter} to get out (${e} s)`,
        ja: `🔥 機体火災！着陸して {enter} で降りる（${e} 秒）`,
      }),
      edge: {
        zh: `已到城市邊界 — 請掉頭`,
        en: `City limit — turn back`,
        ja: `市街地の端です — 引き返してください`,
      },
      board: (e) => ({
        zh: `按 {enter} 駕駛${e.zh}`,
        en: `Press {enter} to fly the ${e.en}`,
        ja: `{enter} で${e.ja ?? e.zh}を操縦`,
      }),
      hint: (e) =>
        e === `gamepad`
          ? {
              zh: `直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機`,
              en: `Helicopter: left stick fly / turn · RT climb · LT descend · let go to hover · {enter} get out`,
              ja: `ヘリ：左スティック 前後・旋回 · RT 上昇 · LT 下降 · 離すとホバリング · {enter} 降りる`,
            }
          : e === `touch`
            ? {
                zh: `直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停`,
                en: `Helicopter: stick fly / turn · gas pedal climb · brake pedal descend · let go to hover`,
                ja: `ヘリ：スティック 前後・旋回 · アクセル 上昇 · ブレーキ 下降 · 離すとホバリング`,
              }
            : {
                zh: `直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機`,
                en: `Helicopter: W/S fly forward / back · A/D turn · {handbrake} climb · {sprint} descend · let go to hover · {enter} get out`,
                ja: `ヘリ：W／S 前進・後退 · A／D 旋回 · {handbrake} 上昇 · {sprint} 下降 · 離すとホバリング · {enter} 降りる`,
              },
      liftUp: {
        zh: `按 {interact} 搭電梯到頂樓停機坪`,
        en: `Press {interact}: lift to the rooftop helipad`,
        ja: `{interact} でエレベーター：屋上ヘリポートへ`,
      },
      liftDown: {
        zh: `按 {interact} 搭電梯下樓`,
        en: `Press {interact}: lift down to the street`,
        ja: `{interact} でエレベーター：地上へ`,
      },
      liftName: {
        zh: `頂樓停機坪電梯`,
        en: `Rooftop helipad lift`,
        ja: `屋上ヘリポート用エレベーター`,
      },
      alt: { zh: `高度`, en: `ALT`, ja: `高度` },
      spd: { zh: `速度`, en: `SPD`, ja: `速度` },
    },
    pads: [
      {
        id: `shibuya`,
        name: {
          zh: `澀谷 SCRAMBLE SQUARE 頂樓停機坪`,
          en: `Shibuya Scramble Square heliport`,
          ja: `渋谷スクランブルスクエア屋上ヘリポート`,
        },
        lat: 35.6585,
        lon: 139.7022,
        x: -1736.25,
        z: 1381.5,
        heading: 0,
        kind: `painted`,
        y: 225.15,
        size: 14,
        liveries: [`news`, `private`],
      },
      {
        id: `yoyogi`,
        name: {
          zh: `代代木公園停機坪`,
          en: `Yoyogi Park helipad`,
          ja: `代々木公園ヘリポート`,
        },
        lat: 35.672,
        lon: 139.696,
        x: -2122,
        z: 1071,
        heading: 0,
        kind: `slab`,
        size: 15,
        liveries: [`private`, `news`],
      },
      {
        id: `mori`,
        name: {
          zh: `六本木之丘森大樓頂樓停機坪`,
          en: `Roppongi Hills Mori Tower heliport`,
          ja: `六本木ヒルズ森タワー屋上ヘリポート`,
        },
        lat: 35.6604,
        lon: 139.7292,
        x: -1045,
        z: 1042,
        heading: 0,
        kind: `deck`,
        y: 239.95,
        roofY: 238.55,
        size: 14,
        liveries: [`private`, `ambulance`],
      },
    ],
  },
  yt = `
.heli-panel{position:absolute;right:2.2em;bottom:2.4em;display:none;align-items:center;gap:.9em;padding:.55em 1.1em .55em .7em;
border-radius:1.1em;background:rgba(8,10,16,.68);color:#fff;font:600 15px/1.1 system-ui,-apple-system,'PingFang TC','Noto Sans TC',sans-serif;
pointer-events:none;z-index:3;box-shadow:0 4px 18px rgba(0,0,0,.35);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.heli-panel.show{display:flex}
.heli-panel .hp-h{width:2.1em;height:2.1em;border-radius:50%;border:2px solid #ffd23f;color:#ffd23f;display:flex;align-items:center;
justify-content:center;font-weight:900;font-size:1.05em}
.heli-panel .hp-c{display:flex;flex-direction:column;align-items:flex-start;min-width:4.6em}
.heli-panel .hp-n{font-size:1.75em;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.heli-panel .hp-u{font-size:.7em;opacity:.7;margin-top:.15em;white-space:nowrap}
.heli-panel .hp-bar{width:4.2em;height:.42em;border-radius:.3em;background:rgba(255,255,255,.18);overflow:hidden;margin-top:.35em}
.heli-panel .hp-bar i{display:block;height:100%;background:linear-gradient(90deg,#4fe08a,#b6f36b);transform-origin:left}
.heli-panel.low .hp-bar i{background:linear-gradient(90deg,#ff2d3c,#ff7b5c)}
.heli-panel.fire{background:rgba(160,20,16,.85)}
body.tr-is-touch .heli-panel{bottom:auto;right:calc(env(safe-area-inset-right,0px) + 12px);top:calc(env(safe-area-inset-top,0px) + 66px);
font-size:11px;padding:.4em .9em .4em .5em}
`,
  bt = class {
    ctx;
    labels;
    el = null;
    spd;
    alt;
    spdU;
    altU;
    bar;
    acc = 1;
    shown = !1;
    lang = ``;
    constructor(e, t) {
      ((this.ctx = e), (this.labels = t));
    }
    build() {
      if (typeof document > `u`) return;
      let e = document.createElement(`style`);
      ((e.textContent = yt), document.head.appendChild(e));
      let t = document.querySelector(`.tr-ui`) ?? document.body,
        n = document.createElement(`div`);
      ((n.className = `heli-panel`),
        (n.innerHTML = `<div class="hp-h">H</div><div class="hp-c"><b class="hp-n">0</b><span class="hp-u"></span></div><div class="hp-c"><b class="hp-n">0</b><span class="hp-u"></span><div class="hp-bar"><i></i></div></div>`));
      let r = n.querySelectorAll(`.hp-n`),
        i = n.querySelectorAll(`.hp-u`);
      ((this.spd = r[0]),
        (this.alt = r[1]),
        (this.spdU = i[0]),
        (this.altU = i[1]),
        (this.bar = n.querySelector(`.hp-bar i`)),
        t.appendChild(n),
        (this.el = n));
    }
    t(e) {
      try {
        return this.ctx.t(e);
      } catch {
        return e.zh;
      }
    }
    update(e, t) {
      if (!t) {
        (this.shown && this.el && this.el.classList.remove(`show`),
          (this.shown = !1));
        return;
      }
      this.el || this.build();
      let n = this.el;
      if (
        !n ||
        (this.shown ||
          (n.classList.add(`show`), (this.shown = !0), (this.acc = 1)),
        (this.acc += e),
        this.acc < 0.1)
      )
        return;
      this.acc = 0;
      let r = String(this.ctx.state?.settings?.lang ?? ``);
      ((r !== this.lang || !this.spdU.textContent) &&
        ((this.lang = r),
        (this.spdU.textContent = `${this.t(this.labels.spd)} km/h`),
        (this.altU.textContent = `${this.t(this.labels.alt)} m`)),
        (this.spd.textContent = String(Math.round(t.kmh))),
        (this.alt.textContent = String(Math.max(0, Math.round(t.altitude)))));
      let i = Math.max(0, Math.min(1, t.health / (t.maxHealth || 1e3)));
      ((this.bar.style.transform = `scaleX(${i.toFixed(3)})`),
        n.classList.toggle(`low`, i < 0.4),
        n.classList.toggle(`fire`, t.onFire));
    }
    dispose() {
      (this.el?.remove(), (this.el = null));
    }
  },
  xt = e({ installHeli: () => St }),
  Q = {
    spool: (e) => ({ zh: `旋翼加速中… ${e}%`, en: `Rotor spooling up… ${e}%` }),
    ready: {
      zh: `旋翼轉速正常 — 可以起飛`,
      en: `Rotor at speed — ready to lift off`,
    },
    jumpWarn: (e) => ({
      zh: `離地 ${e} 公尺！再按一次 {enter} 跳機`,
      en: `${e} m up! Press {enter} again to jump out`,
    }),
    fire: (e) => ({
      zh: `🔥 直升機起火了！快降落並按 {enter} 下機（${e} 秒）`,
      en: `🔥 ON FIRE — land and press {enter} to get out (${e} s)`,
    }),
    edge: { zh: `已到城市邊界 — 請掉頭`, en: `City limit — turn back` },
    board: (e) => ({
      zh: `按 {enter} 駕駛${e.zh}`,
      en: `Press {enter} to fly the ${e.en}`,
    }),
    hint: (e) =>
      e === `gamepad`
        ? {
            zh: `直升機：左搖桿 前後飛行／轉向 · RT 上升 · LT 下降 · 放開即懸停 · {enter} 下機`,
            en: `Helicopter: left stick fly / turn · RT climb · LT descend · let go to hover · {enter} get out`,
          }
        : e === `touch`
          ? {
              zh: `直升機：搖桿 前後飛行／轉向 · 油門踏板 上升 · 煞車踏板 下降 · 放開即懸停`,
              en: `Helicopter: stick fly / turn · gas pedal climb · brake pedal descend · let go to hover`,
            }
          : {
              zh: `直升機：W／S 前進後退 · A／D 轉向 · {handbrake} 上升 · {sprint} 下降 · 放開即懸停 · {enter} 下機`,
              en: `Helicopter: W/S fly forward / back · A/D turn · {handbrake} climb · {sprint} descend · let go to hover · {enter} get out`,
            },
    liftUp: {
      zh: `按 {interact} 搭電梯到頂樓停機坪`,
      en: `Press {interact}: lift to the rooftop helipad`,
    },
    liftDown: {
      zh: `按 {interact} 搭電梯下樓`,
      en: `Press {interact}: lift down to the street`,
    },
    liftName: { zh: `頂樓停機坪電梯`, en: `Rooftop helipad lift` },
    alt: { zh: `高度`, en: `ALT` },
    spd: { zh: `速度`, en: `SPD` },
    ...vt.text,
  };
