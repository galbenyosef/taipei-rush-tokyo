// tokyo/assets/region-tokyo-A7LxHjud 466 — math
// Lines 168671-169578 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var zBe = {
    id: We,
    objective: N(
      `去八重洲的利木津巴士站（地圖上的金色「序」）`,
      `Go to the Yaesu limousine stop (the gold 序 on the map)`,
    ),
    contact: N(`利木津巴士站`, `Limousine stop`),
  },
  U5 = { up: `↑`, down: `↓`, left: `←`, right: `→` },
  BBe = `
#tk-job { position: fixed; left: 50%; bottom: calc(12px + env(safe-area-inset-bottom)); transform: translateX(-50%); z-index: 60;
  width: min(560px, calc(100vw - 24px)); padding: 10px 14px 12px; border-radius: 14px; background: rgba(14,15,20,.86);
  border: 1px solid rgba(255,255,255,.16); color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,.35);
  font: 600 15px "Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","PingFang TC","Noto Sans TC",system-ui,sans-serif;
  user-select: none; -webkit-user-select: none; touch-action: manipulation; pointer-events: auto; }
#tk-job .tj-top { display: flex; align-items: center; gap: 10px; font-size: 13px; }
#tk-job .tj-name { color: #ffc83d; font-size: 15px; letter-spacing: .04em; white-space: nowrap; }
#tk-job .tj-clock { flex: 1; display: flex; align-items: center; gap: 6px; opacity: .9; min-width: 0; }
#tk-job .tj-clock b { font: 700 13px ui-monospace,Menlo,monospace; }
#tk-job .tj-track { flex: 1; height: 4px; border-radius: 2px; background: rgba(255,255,255,.16); overflow: hidden; }
#tk-job .tj-track i { display: block; height: 100%; width: 0; background: #ffc83d; }
#tk-job .tj-stat { white-space: nowrap; opacity: .9; }
#tk-job .tj-hearts { color: #ff5e6c; letter-spacing: 1px; white-space: nowrap; }
#tk-job .tj-quit { flex: none; border: 1px solid rgba(255,255,255,.25); background: transparent; color: #ddd; border-radius: 8px;
  font: 600 12px system-ui,sans-serif; padding: 3px 8px; cursor: pointer; }
#tk-job .tj-say { margin: 9px 0 4px; padding: 8px 11px; border-radius: 10px; background: rgba(255,255,255,.08); min-height: 22px; }
#tk-job .tj-say:empty { display: none; }
#tk-job .tj-say b { color: #9fd3ff; font-weight: 700; margin-right: 6px; }
#tk-job .tj-say .ja { font-size: 17px; }
#tk-job .tj-say small { display: block; opacity: .72; font-size: 12.5px; margin-top: 2px; }
#tk-job .tj-q { margin: 8px 0 6px; font-size: 15px; }
#tk-job .tj-body { min-height: 40px; }
#tk-job .tj-opts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
#tk-job .tj-opts.n3 { grid-template-columns: repeat(3, 1fr); }
#tk-job .tj-opts button { display: flex; align-items: center; gap: 8px; min-height: 48px; padding: 8px 10px; border-radius: 10px; cursor: pointer;
  border: 1px solid rgba(255,255,255,.2); background: rgba(255,255,255,.06); color: #fff; font: inherit; text-align: left;
  -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
#tk-job .tj-opts button .ic { font-size: 22px; flex: none; }
#tk-job .tj-opts button kbd, #tk-job .tj-key kbd { flex: none; font: 700 11px system-ui,sans-serif; padding: 1px 6px; border-radius: 5px;
  background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.3); border-bottom-width: 2px; }
#tk-job .tj-opts button.sel { border-color: #ffc83d; background: rgba(70,56,14,.85); }
#tk-job .tj-opts button.ok { border-color: #4be08a; background: rgba(20,80,44,.85); }
#tk-job .tj-opts button.ng { border-color: #ff5e6c; background: rgba(90,20,28,.85); }
#tk-job .tj-meter { position: relative; height: 22px; border-radius: 11px; background: rgba(255,255,255,.12); overflow: hidden; }
#tk-job .tj-zone { position: absolute; top: 0; bottom: 0; background: rgba(255,200,61,.32); border-left: 2px solid #ffc83d; border-right: 2px solid #ffc83d; }
#tk-job .tj-perfect { position: absolute; top: 0; bottom: 0; background: rgba(75,224,138,.45); }
#tk-job .tj-fill { position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: linear-gradient(90deg,#e8743b,#ffc83d); }
#tk-job .tj-mark { position: absolute; top: -2px; bottom: -2px; width: 4px; margin-left: -2px; background: #fff; border-radius: 2px; box-shadow: 0 0 6px #fff; }
#tk-job .tj-tray { position: relative; height: 34px; border-radius: 17px; background: rgba(255,255,255,.1); overflow: hidden; }
#tk-job .tj-tray .safe { position: absolute; left: 32.5%; width: 35%; top: 0; bottom: 0; background: rgba(75,224,138,.22); }
#tk-job .tj-tray .cup { position: absolute; top: 3px; font-size: 24px; line-height: 28px; transform: translateX(-50%); }
#tk-job .tj-seq { display: flex; gap: 8px; justify-content: center; font: 700 26px system-ui,sans-serif; }
#tk-job .tj-seq span { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.2); cursor: pointer; }
#tk-job .tj-seq span.done { background: rgba(20,80,44,.85); border-color: #4be08a; opacity: .6; }
#tk-job .tj-seq span.cur { border-color: #ffc83d; box-shadow: 0 0 0 2px rgba(255,200,61,.4); }
#tk-job .tj-pad { display: none; gap: 8px; justify-content: center; margin-top: 8px; }
.tr-is-touch #tk-job .tj-pad { display: flex; }
#tk-job .tj-pad button, #tk-job .tj-act { min-width: 56px; min-height: 46px; border-radius: 12px; border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.08); color: #fff; font: 700 20px system-ui,sans-serif; cursor: pointer; touch-action: none; }
#tk-job .tj-act { display: block; width: 100%; margin-top: 8px; font: 700 16px inherit; font-family: inherit; }
#tk-job canvas { display: block; margin: 0 auto; border-radius: 10px; background: #f7ecd6; touch-action: none; cursor: crosshair; }
#tk-job .tj-beats { position: relative; height: 54px; border-radius: 10px; background: rgba(255,255,255,.07); overflow: hidden; }
#tk-job .tj-beats .line { position: absolute; left: 18%; top: 4px; bottom: 4px; width: 3px; background: #ffc83d; }
#tk-job .tj-beats .b { position: absolute; top: 9px; min-width: 36px; height: 36px; padding: 0 8px; box-sizing: border-box; transform: translateX(-50%);
  border-radius: 18px; display: grid; place-items: center; white-space: nowrap; background: #ff7eb6; color: #fff; font-size: 14px; font-weight: 800; }
#tk-job .tj-beats .b.hit { background: #4be08a; }
#tk-job .tj-beats .b.miss { background: #666; }
#tk-job .tj-key { margin-top: 7px; font-size: 12px; opacity: .78; text-align: center; }
#tk-job .tj-flash { min-height: 20px; margin-top: 4px; text-align: center; font-size: 15px; color: #ffd24d; }
#tk-job .tj-flash.bad { color: #ff7e8a; }
#tk-job .tj-flash.good { color: #6cf0a0; }
.tr-portrait #tk-job { bottom: calc(18vh + env(safe-area-inset-bottom)); }
`,
  W5 = (e) => e,
  G5 = {
    served: W5({ zh: `客人`, en: `served`, ja: `接客` }),
    quit: W5({ zh: `下班`, en: `Quit`, ja: `上がる` }),
    keysPick: W5({
      zh: `1–4／方向鍵＋{interact}／點選`,
      en: `1–4 / arrows + {interact} / tap`,
      ja: `1〜4／方向キー＋{interact}／タップ`,
    }),
    keysTiming: W5({
      zh: `按 {interact}（或點卡片）停在金色區`,
      en: `Press {interact} (or tap) in the gold zone`,
      ja: `金色のところで {interact}（またはタップ）`,
    }),
    keysMash: W5({
      zh: `連按 {interact}（或連點）`,
      en: `Mash {interact} (or tap fast)`,
      ja: `{interact} を連打（連続タップ）`,
    }),
    keysHold: W5({
      zh: `按住 {interact}，到線就放開`,
      en: `Hold {interact}, let go at the line`,
      ja: `{interact} 長押し、線で離す`,
    }),
    keysBalance: W5({
      zh: `← → 保持平衡`,
      en: `← → keep it level`,
      ja: `← → でバランス`,
    }),
    keysSeq: W5({
      zh: `依序按方向鍵`,
      en: `Press the arrows in order`,
      ja: `矢印の順に入力`,
    }),
    keysTrace: W5({
      zh: `用手指／滑鼠描出圖案（或依序按方向鍵）`,
      en: `Draw it with a finger / the mouse (or follow the arrows)`,
      ja: `指／マウスでなぞる（または矢印の順に入力）`,
    }),
    keysRhythm: W5({
      zh: `節拍到線上時按 {interact}`,
      en: `Press {interact} on the beat`,
      ja: `ビートが線に来たら {interact}`,
    }),
    go: W5({ zh: `好！`, en: `Go!`, ja: `よし！` }),
    perfect: W5({ zh: `完美！`, en: `Perfect!`, ja: `パーフェクト！` }),
    good: W5({ zh: `不錯！`, en: `Good!`, ja: `いいね！` }),
    ok: W5({ zh: `還行`, en: `OK`, ja: `まあまあ` }),
    miss: W5({ zh: `失誤……`, en: `Miss…`, ja: `ミス……` }),
    slow: W5({ zh: `太慢了！`, en: `Too slow!`, ja: `遅い！` }),
    spill: W5({ zh: `灑出來了！`, en: `Spilled!`, ja: `こぼれた！` }),
    wrong: W5({ zh: `不對……`, en: `Wrong…`, ja: `違う……` }),
  },
  K5 = !1,
  VBe = class {
    m;
    held = new Set();
    primed = !1;
    taps = [];
    constructor(e) {
      this.m = e;
    }
    pad() {
      let e = { a: !1, b: !1, up: !1, down: !1, left: !1, right: !1, lx: 0 },
        t =
          typeof navigator < `u` && navigator.getGamepads
            ? navigator.getGamepads()
            : null;
      if (!t) return e;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r &&
          ((e.a ||= !!r.buttons[0]?.pressed),
          (e.b ||= !!r.buttons[1]?.pressed),
          (e.up ||= !!r.buttons[12]?.pressed),
          (e.down ||= !!r.buttons[13]?.pressed),
          (e.left ||= !!r.buttons[14]?.pressed),
          (e.right ||= !!r.buttons[15]?.pressed),
          Math.abs(r.axes[0] ?? 0) > Math.abs(e.lx) && (e.lx = r.axes[0] ?? 0));
      }
      return e;
    }
    frame() {
      let e = this.m.ctx.input.keys,
        t = (t) => !!e?.has(t),
        n = this.pad(),
        r = new Set(this.taps);
      this.taps.length = 0;
      let i = (e, t) => {
          let n = this.held.has(e);
          return (
            t ? this.held.add(e) : this.held.delete(e),
            this.primed && t && !n
          );
        },
        a =
          t(`KeyE`) ||
          t(`Enter`) ||
          t(`Space`) ||
          n.a ||
          this.held.has(`tapHold`),
        o = {
          ok:
            i(`ok`, t(`KeyE`) || t(`Enter`) || t(`Space`) || n.a) ||
            r.has(`ok`),
          okHeld: a,
          num: -1,
          dir: null,
          steer: 0,
        };
      for (let e = 0; e < 4; e++)
        (i(`n${e}`, t(`Digit${e + 1}`) || t(`Numpad${e + 1}`)) ||
          r.has(`n${e}`)) &&
          (o.num = e);
      let s = [
        [`up`, t(`ArrowUp`) || t(`KeyW`) || n.up],
        [`down`, t(`ArrowDown`) || t(`KeyS`) || n.down],
        [`left`, t(`ArrowLeft`) || t(`KeyA`) || n.left || n.lx < -0.6],
        [`right`, t(`ArrowRight`) || t(`KeyD`) || n.right || n.lx > 0.6],
      ];
      for (let [e, t] of s) (i(e, t) || r.has(e)) && (o.dir = e);
      let c = t(`ArrowLeft`) || t(`KeyA`) || n.left || this.held.has(`tapL`),
        l = t(`ArrowRight`) || t(`KeyD`) || n.right || this.held.has(`tapR`);
      return (
        (o.steer = !!l - +!!c + (Math.abs(n.lx) > 0.15 && !c && !l ? n.lx : 0)),
        (this.primed = !0),
        o
      );
    }
    setHold(e, t) {
      t ? this.held.add(e) : this.held.delete(e);
    }
  },
  HBe = class {
    m;
    o;
    root = null;
    els = {};
    input;
    menu = !1;
    cleaned = !1;
    auto;
    served = 0;
    lives;
    quit = !1;
    flashT = 0;
    lang;
    constructor(e, t) {
      ((this.m = e), (this.o = t));
      let n = e.ctx;
      if (
        ((this.auto = n.params.has(`autosolve`)),
        (this.input = new VBe(e)),
        (this.lives = t.lives),
        (this.lang = Ge(n)),
        typeof document > `u`)
      )
        return;
      if (!K5) {
        K5 = !0;
        let e = document.createElement(`style`);
        ((e.id = `tk-job-css`),
          (e.textContent = BBe),
          document.head.appendChild(e));
      }
      let r = document.createElement(`div`);
      ((r.id = `tk-job`),
        (r.innerHTML = `<div class="tj-top"><span class="tj-name"></span><span class="tj-clock"><b class="c0"></b><span class="tj-track"><i></i></span><b class="c1"></b></span><span class="tj-stat"></span><span class="tj-hearts"></span><button type="button" class="tj-quit"></button></div><div class="tj-say"></div><div class="tj-q"></div><div class="tj-body"></div><div class="tj-key"></div><div class="tj-flash"></div>`));
      for (let e of [
        `tj-name`,
        `tj-track`,
        `c0`,
        `c1`,
        `tj-stat`,
        `tj-hearts`,
        `tj-quit`,
        `tj-say`,
        `tj-q`,
        `tj-body`,
        `tj-key`,
        `tj-flash`,
      ])
        this.els[e] = r.querySelector(`.${e}`);
      ((this.els[`tj-track`] = r.querySelector(`.tj-track i`)),
        (this.els[`tj-name`].textContent = this.ui(t.name)),
        (this.els.c0.textContent = q5(t.startHour)),
        (this.els.c1.textContent = q5(t.startHour + t.hours)),
        (this.els[`tj-quit`].textContent = this.ui(G5.quit)),
        this.els[`tj-quit`].addEventListener(`pointerdown`, (e) => {
          (e.preventDefault(), e.stopPropagation(), (this.quit = !0));
        }),
        document.body.appendChild(r),
        (this.root = r));
      try {
        (n.ui.setExternalMenu?.(!0),
          (this.menu = !0),
          document.pointerLockElement && document.exitPointerLock());
      } catch {}
      (this.stats(), e.onCleanup(() => this.close()));
    }
    ui(e) {
      return this.m.ctx.t(e);
    }
    close() {
      if (
        !this.cleaned &&
        ((this.cleaned = !0), this.root?.remove(), this.menu)
      ) {
        this.menu = !1;
        try {
          this.m.ctx.ui.setExternalMenu?.(!1);
        } catch {}
      }
    }
    progress(e) {
      let t = Math.max(0, Math.min(1, e));
      (this.els[`tj-track`] &&
        (this.els[`tj-track`].style.width = `${t * 100}%`),
        this.els.c0 &&
          (this.els.c0.textContent = q5(this.o.startHour + t * this.o.hours)));
    }
    stats() {
      (this.els[`tj-stat`] &&
        (this.els[`tj-stat`].textContent =
          `${this.ui(G5.served)} ${this.served}`),
        this.els[`tj-hearts`] &&
          (this.els[`tj-hearts`].textContent =
            `♥`.repeat(Math.max(0, this.lives)) +
            `♡`.repeat(Math.max(0, this.o.lives - this.lives))));
    }
    strike() {
      (this.lives--, this.stats());
      try {
        this.m.ctx.input.rumble?.(0.4, 120);
      } catch {}
    }
    flash(e, t = ``) {
      let n = this.els[`tj-flash`];
      n &&
        ((n.textContent = this.ui(e)),
        (n.className = `tj-flash ${t}`),
        (this.flashT = 1.4));
    }
    judge(e) {
      e >= 0.92
        ? this.flash(G5.perfect, `good`)
        : e >= 0.7
          ? this.flash(G5.good, `good`)
          : e > 0.35
            ? this.flash(G5.ok)
            : this.flash(G5.miss, `bad`);
      try {
        this.m.sfx(e > 0.35 ? `coin` : `empty_click`, { ui: !0, volume: 0.5 });
      } catch {}
      return e;
    }
    say(e, t, n = !0) {
      let r = this.els[`tj-say`];
      if (r) {
        if (((r.textContent = ``), e)) {
          let t = document.createElement(`b`);
          ((t.textContent = this.ui(e)), r.appendChild(t));
        }
        let n = document.createElement(`span`);
        if (
          ((n.className = `ja`),
          (n.lang = `ja`),
          (n.textContent = t.ja ?? this.m.ctx.t(Ye(this.lang, t))),
          r.appendChild(n),
          this.lang !== `ja` && t.ja)
        ) {
          let e = document.createElement(`small`);
          ((e.textContent = this.m.ctx.t(Ye(this.lang, t))), r.appendChild(e));
        }
      }
      if (n && t.ja)
        try {
          this.m.ctx.audio.say?.(
            { zh: t.zh, en: t.en, ja: t.ja },
            { lang: `ja`, priority: 5, volume: 0.85 },
          );
        } catch {}
    }
    clearSay() {
      this.els[`tj-say`] && (this.els[`tj-say`].textContent = ``);
    }
    task(e, t) {
      this.els[`tj-q`] && (this.els[`tj-q`].textContent = e ? this.ui(e) : ``);
      let n = this.els[`tj-key`];
      n && ((n.textContent = ``), t && WBe(this.m, n, this.ui(t)));
      let r = this.els[`tj-body`];
      return (r && (r.textContent = ``), r);
    }
    tick(e) {
      return (
        this.flashT > 0 &&
          (this.flashT -= e) <= 0 &&
          this.els[`tj-flash`] &&
          (this.els[`tj-flash`].textContent = ``),
        this.input.frame()
      );
    }
    async beat(e) {
      await this.m.wait(e);
    }
    async pick(e) {
      let t = this.task(e.prompt, G5.keysPick),
        n = e.secs ?? 9,
        r = e.options.length,
        i = (t) =>
          typeof e.correct == `number` ? t === e.correct : e.correct(t),
        a = 0,
        o = -1,
        s = 0,
        c = [];
      if (t) {
        let n = document.createElement(`div`);
        ((n.className = `tj-opts${r === 3 ? ` n3` : ``}`),
          (c = e.options.map((e, t) => {
            let r = document.createElement(`button`);
            return (
              (r.type = `button`),
              (r.innerHTML = `<kbd>${t + 1}</kbd>${e.icon ? `<span class="ic">${e.icon}</span>` : ``}<span></span>`),
              (r.lastElementChild.textContent = this.ui(e.label)),
              r.addEventListener(`pointerdown`, (e) => {
                (e.preventDefault(), this.input.taps.push(`n${t}`));
              }),
              n.appendChild(r),
              r
            );
          })));
        let i = document.createElement(`div`);
        ((i.className = `tj-track`),
          (i.style.marginTop = `8px`),
          (i.innerHTML = `<i style="width:100%"></i>`),
          t.append(n, i));
      }
      let l = t?.querySelector(`.tj-track i`),
        u = () => c.forEach((e, t) => e.classList.toggle(`sel`, t === a));
      u();
      let d = Array.from({ length: r }, (e, t) => t).find(i) ?? 0;
      return (
        await this.m.until((e) => {
          let t = this.tick(e);
          return (
            (s += e),
            l && (l.style.width = `${Math.max(0, 1 - s / n) * 100}%`),
            this.auto && s > 0.5 && (o = d),
            t.num >= 0 && t.num < r && (o = t.num),
            (t.dir === `up` || t.dir === `left`) &&
              ((a = (a + r - 1) % r), u()),
            (t.dir === `down` || t.dir === `right`) && ((a = (a + 1) % r), u()),
            t.ok && (o = a),
            o >= 0 || s >= n || this.quit
          );
        }),
        o < 0
          ? (this.flash(G5.slow, `bad`), 0)
          : (c[o]?.classList.add(i(o) ? `ok` : `ng`),
            i(o) || c[d]?.classList.add(`ok`),
            await this.m.wait(i(o) ? 0.25 : 0.6),
            i(o)
              ? this.flash(s < n * 0.4 ? G5.perfect : G5.good, `good`)
              : this.flash(G5.wrong, `bad`),
            i(o) ? (s < n * 0.4 ? 1 : 0.85) : 0)
      );
    }
    async timing(e) {
      let t = this.task(e.prompt, G5.keysTiming),
        n = null;
      if (t) {
        let r = document.createElement(`div`);
        r.className = `tj-meter`;
        let i = document.createElement(`div`);
        if (
          ((i.className = `tj-zone`),
          (i.style.left = `${e.zone[0] * 100}%`),
          (i.style.width = `${(e.zone[1] - e.zone[0]) * 100}%`),
          r.appendChild(i),
          e.perfect)
        ) {
          let t = document.createElement(`div`);
          ((t.className = `tj-perfect`),
            (t.style.left = `${e.perfect[0] * 100}%`),
            (t.style.width = `${(e.perfect[1] - e.perfect[0]) * 100}%`),
            r.appendChild(t));
        }
        ((n = document.createElement(`div`)),
          (n.className = `tj-mark`),
          r.appendChild(n),
          r.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), this.input.taps.push(`ok`));
          }),
          t.appendChild(r));
      }
      let r = e.speed ?? 0.7,
        i = e.secs ?? 8,
        a = 0,
        o = 1,
        s = 0,
        c = -1,
        l = e.perfect
          ? (e.perfect[0] + e.perfect[1]) / 2
          : (e.zone[0] + e.zone[1]) / 2;
      if (
        (await this.m.until((t) => {
          let u = this.tick(t);
          return (
            (s += t),
            (a += o * r * t),
            e.fill
              ? (a = Math.min(1, a))
              : a >= 1
                ? ((a = 1), (o = -1))
                : a <= 0 && ((a = 0), (o = 1)),
            n && (n.style.left = `${a * 100}%`),
            this.auto && Math.abs(a - l) < r * t * 1.5 && (c = a),
            u.ok && (c = a),
            c >= 0 || s >= i || (!!e.fill && a >= 1 && s > 0.2) || this.quit
          );
        }),
        c < 0)
      )
        return this.judge(0);
      if (e.perfect && c >= e.perfect[0] && c <= e.perfect[1])
        return this.judge(1);
      if (c >= e.zone[0] && c <= e.zone[1]) {
        let t = (e.zone[0] + e.zone[1]) / 2,
          n = (e.zone[1] - e.zone[0]) / 2;
        return this.judge(0.75 + 0.2 * (1 - Math.abs(c - t) / n));
      }
      return this.judge(0);
    }
    async mash(e) {
      let t = this.task(e.prompt, G5.keysMash),
        n = null;
      if (t) {
        let e = document.createElement(`div`);
        ((e.className = `tj-meter`),
          (n = document.createElement(`div`)),
          (n.className = `tj-fill`),
          e.appendChild(n),
          e.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), this.input.taps.push(`ok`));
          }),
          t.appendChild(e));
        let r = document.createElement(`button`);
        ((r.type = `button`),
          (r.className = `tj-act`),
          (r.textContent = this.ui(G5.go)),
          r.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), this.input.taps.push(`ok`));
          }),
          t.appendChild(r));
      }
      let r = e.secs ?? 5,
        i = 0,
        a = 0,
        o = 0;
      await this.m.until((t) => {
        let s = this.tick(t);
        return (
          (a += t),
          this.auto && (o += t) > 0.07 && ((o = 0), i++),
          s.ok && i++,
          n && (n.style.width = `${Math.min(1, i / e.target) * 100}%`),
          i >= e.target || a >= r || this.quit
        );
      });
      let s =
        i >= e.target
          ? 0.8 + 0.2 * Math.max(0, 1 - a / r)
          : (i / e.target) * 0.6;
      return this.judge(s);
    }
    async hold(e) {
      let t = this.task(e.prompt, G5.keysHold),
        n = null;
      if (t) {
        let r = document.createElement(`div`);
        ((r.className = `tj-meter`), (r.style.height = `30px`));
        let i = document.createElement(`div`);
        ((i.className = `tj-zone`),
          (i.style.left = `${e.zone[0] * 100}%`),
          (i.style.width = `${(e.zone[1] - e.zone[0]) * 100}%`),
          (n = document.createElement(`div`)),
          (n.className = `tj-fill`),
          r.append(n, i));
        let a = (e) => {
            (e.preventDefault(), this.input.setHold(`tapHold`, !0));
          },
          o = () => this.input.setHold(`tapHold`, !1);
        (r.addEventListener(`pointerdown`, a),
          r.addEventListener(`pointerup`, o),
          r.addEventListener(`pointerleave`, o),
          t.appendChild(r));
      }
      let r = e.rate ?? 0.45,
        i = e.secs ?? 8,
        a = 0,
        o = 0,
        s = !1,
        c = !1,
        l = (e.zone[0] + e.zone[1]) / 2;
      if (
        (await this.m.until((e) => {
          let t = this.tick(e);
          return (
            (o += e),
            (this.auto ? a < l : t.okHeld)
              ? ((s = !0), (a += r * e))
              : s && (c = !0),
            n && (n.style.width = `${Math.min(1, a) * 100}%`),
            c || a >= 1.02 || o >= i || this.quit
          );
        }),
        this.input.setHold(`tapHold`, !1),
        a >= e.zone[0] && a <= e.zone[1])
      ) {
        let t = (e.zone[1] - e.zone[0]) / 2;
        return this.judge(0.75 + 0.25 * (1 - Math.abs(a - l) / t));
      }
      return (
        a > 1 && this.flash(G5.spill, `bad`),
        this.judge(a > e.zone[1] ? 0 : Math.max(0, a / e.zone[0]) * 0.4)
      );
    }
    async balance(e) {
      let t = this.task(e.prompt, G5.keysBalance),
        n = null;
      if (t) {
        let r = document.createElement(`div`);
        ((r.className = `tj-tray`),
          (r.innerHTML = `<div class="safe"></div><div class="cup">${e.icon ?? `🍺`}</div>`),
          (n = r.querySelector(`.cup`)),
          t.appendChild(r));
        let i = document.createElement(`div`);
        i.className = `tj-pad`;
        for (let [e, t] of [
          [`tapL`, `◀`],
          [`tapR`, `▶`],
        ]) {
          let n = document.createElement(`button`);
          ((n.type = `button`),
            (n.textContent = t),
            n.addEventListener(`pointerdown`, (t) => {
              (t.preventDefault(), this.input.setHold(e, !0));
            }));
          let r = () => this.input.setHold(e, !1);
          (n.addEventListener(`pointerup`, r),
            n.addEventListener(`pointerleave`, r),
            i.appendChild(n));
        }
        t.appendChild(i);
      }
      let r = e.secs ?? 6,
        i = e.wobble ?? 1,
        a = 0,
        o = 0,
        s = 0,
        c = 0,
        l = !1;
      await this.m.until((e) => {
        let t = this.tick(e);
        s += e;
        let u = (Math.sin(s * 2.3) * 0.9 + Math.sin(s * 3.7 + 1.3) * 0.6) * i,
          d = this.auto
            ? -Math.sign(a) * Math.min(1, Math.abs(a) * 4)
            : t.steer;
        return (
          (o += (u * 0.9 + a * 1.6 * i + d * 2.6) * e),
          (o *= 0.25 ** e),
          (a += o * e),
          Math.abs(a) < 0.35 && (c += e),
          Math.abs(a) >= 1 && (l = !0),
          n && (n.style.left = `${50 + a * 46}%`),
          l || s >= r || this.quit
        );
      });
      for (let e of [`tapL`, `tapR`]) this.input.setHold(e, !1);
      return l
        ? (this.flash(G5.spill, `bad`), 0)
        : this.judge(0.35 + (c / Math.max(0.1, s)) * 0.65);
    }
    async sequence(e) {
      let t = this.task(e.prompt, G5.keysSeq),
        n = [];
      if (t) {
        let r = document.createElement(`div`);
        ((r.className = `tj-seq`),
          (n = e.steps.map((t, n) => {
            let i = document.createElement(`span`);
            return (
              (i.textContent = e.labels?.[n] ?? U5[t]),
              i.addEventListener(`pointerdown`, (e) => {
                (e.preventDefault(), this.input.taps.push(t));
              }),
              r.appendChild(i),
              i
            );
          })),
          t.appendChild(r));
        let i = document.createElement(`div`);
        i.className = `tj-pad`;
        for (let e of [`left`, `up`, `down`, `right`]) {
          let t = document.createElement(`button`);
          ((t.type = `button`),
            (t.textContent = U5[e]),
            t.addEventListener(`pointerdown`, (t) => {
              (t.preventDefault(), this.input.taps.push(e));
            }),
            i.appendChild(t));
        }
        t.appendChild(i);
      }
      let r = e.secs ?? 3 + e.steps.length * 1.1,
        i = 0,
        a = 0,
        o = 0,
        s = 0,
        c = () =>
          n.forEach(
            (e, t) => (e.className = t < i ? `done` : t === i ? `cur` : ``),
          );
      return (
        c(),
        await this.m.until((t) => {
          let n = this.tick(t);
          a += t;
          let l = n.dir;
          return (
            this.auto && (s += t) > 0.25 && ((s = 0), (l = e.steps[i])),
            l &&
              (l === e.steps[i] ? i++ : (o++, this.flash(G5.wrong, `bad`)),
              c()),
            i >= e.steps.length || a >= r || this.quit
          );
        }),
        i < e.steps.length
          ? this.judge(0.3 * (i / e.steps.length))
          : this.judge(
              Math.max(0.4, 1 - o * 0.2 - Math.max(0, a / r - 0.6) * 0.5),
            )
      );
    }
    async trace(e) {
      let t = this.task(e.prompt, G5.keysTrace),
        n = null,
        r = [],
        i = !1,
        a = UBe(e.shape, 48),
        o = ([e, t]) => [20 + e * 200, 15 + t * 140],
        s = (t) => {
          if (n) {
            if (
              (n.clearRect(0, 0, 240, 170),
              (n.fillStyle = `#f2d18a`),
              n.beginPath(),
              n.ellipse(120, 91, 100.8, 170 * 0.36, 0, 0, Math.PI * 2),
              n.fill(),
              n.setLineDash([5, 6]),
              (n.strokeStyle = `rgba(120,60,20,.45)`),
              (n.lineWidth = 2),
              n.beginPath(),
              e.shape.forEach((e, t) =>
                t ? n.lineTo(...o(e)) : n.moveTo(...o(e)),
              ),
              n.stroke(),
              n.setLineDash([]),
              (n.strokeStyle = e.color ?? `#d01c1c`),
              (n.lineWidth = 6),
              (n.lineCap = `round`),
              (n.lineJoin = `round`),
              n.beginPath(),
              t > 0)
            ) {
              let r = Math.round((t / e.steps.length) * (a.length - 1));
              for (let e = 0; e <= r; e++)
                e ? n.lineTo(...o(a[e])) : n.moveTo(...o(a[e]));
            } else
              r.forEach((e, t) =>
                t ? n.lineTo(e[0], e[1]) : n.moveTo(e[0], e[1]),
              );
            n.stroke();
          }
        },
        c = 0,
        l = !1,
        u = !1;
      if (t) {
        let a = document.createElement(`canvas`),
          o = Math.min(2, window.devicePixelRatio || 1);
        ((a.width = 240 * o),
          (a.height = 170 * o),
          (a.style.width = `240px`),
          (a.style.height = `170px`),
          (n = a.getContext(`2d`)),
          n?.scale(o, o));
        let l = (e) => {
          let t = a.getBoundingClientRect();
          return [
            ((e.clientX - t.left) / t.width) * 240,
            ((e.clientY - t.top) / t.height) * 170,
          ];
        };
        (a.addEventListener(`pointerdown`, (e) => {
          (e.preventDefault(),
            !c &&
              ((i = !0),
              (r.length = 0),
              r.push(l(e)),
              a.setPointerCapture?.(e.pointerId)));
        }),
          a.addEventListener(`pointermove`, (e) => {
            i && (r.push(l(e)), s(0));
          }));
        let d = () => {
          (i && r.length > 8 && (u = !0), (i = !1));
        };
        (a.addEventListener(`pointerup`, d),
          a.addEventListener(`pointercancel`, d),
          t.appendChild(a));
        let f = document.createElement(`div`);
        ((f.className = `tj-seq`),
          (f.style.marginTop = `6px`),
          (f.style.fontSize = `18px`),
          e.steps.forEach((e) => {
            let t = document.createElement(`span`);
            ((t.style.width = t.style.height = `30px`),
              (t.textContent = U5[e]),
              f.appendChild(t));
          }),
          t.appendChild(f));
      }
      s(0);
      let d = Array.from(t?.querySelectorAll(`.tj-seq span`) ?? []),
        f = e.secs ?? 12,
        p = 0,
        m = 0,
        h = 0;
      if (
        (await this.m.until((t) => {
          let n = this.tick(t);
          p += t;
          let r = n.dir;
          return (
            this.auto && (h += t) > 0.3 && ((h = 0), (r = e.steps[c])),
            r &&
              !i &&
              (r === e.steps[c] ? c++ : m++,
              d.forEach(
                (e, t) => (e.className = t < c ? `done` : t === c ? `cur` : ``),
              ),
              s(c),
              c >= e.steps.length && (l = !0)),
            l || u || p >= f || this.quit
          );
        }),
        l)
      )
        return this.judge(Math.max(0.5, 1 - m * 0.15));
      if (!u) return this.judge(0);
      let g = a.map(o),
        _ = (e, t, n) => (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 < n * n,
        v = g.filter((e) => r.some((t) => _(e, t, 16))).length / g.length,
        y = r.filter((e) => !g.some((t) => _(t, e, 22))).length / r.length;
      return this.judge(Math.max(0, Math.min(1, v * 1.15 - y * 0.8)));
    }
    async rhythm(e) {
      let t = this.task(e.prompt, G5.keysRhythm),
        n = 60 / (e.bpm ?? 110),
        r = 1.6,
        i = null,
        a = e.words.map((e, t) => ({
          w: e,
          at: r + t * n,
          el: null,
          res: 0,
          q: 0,
        }));
      if (t) {
        ((i = document.createElement(`div`)),
          (i.className = `tj-beats`),
          (i.innerHTML = `<div class="line"></div>`),
          i.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), this.input.taps.push(`ok`));
          }));
        for (let e of a) {
          let t = document.createElement(`div`);
          ((t.className = `b`),
            (t.textContent = e.w),
            i.appendChild(t),
            (e.el = t));
        }
        t.appendChild(i);
      }
      let o = 0,
        s = r + a.length * n + 0.6;
      await this.m.until((e) => {
        let t = this.tick(e);
        o += e;
        for (let e of a) {
          let t = 18 + (e.at - o) * 34;
          (e.el && (e.el.style.left = `${t}%`),
            e.res === 0 &&
              o - e.at > 0.25 &&
              ((e.res = -1), e.el?.classList.add(`miss`)));
        }
        if (
          t.ok ||
          (this.auto && a.some((e) => e.res === 0 && Math.abs(o - e.at) < 0.02))
        ) {
          let e = a.find((e) => e.res === 0 && Math.abs(o - e.at) < 0.3);
          if (e) {
            let t = Math.abs(o - e.at);
            ((e.res = 1),
              (e.q = t < 0.08 ? 1 : t < 0.16 ? 0.8 : 0.5),
              e.el?.classList.add(`hit`));
            try {
              this.m.sfx(`ui_click`, { ui: !0, volume: 0.4 });
            } catch {}
          }
        }
        return o >= s || this.quit;
      });
      let c = a.reduce((e, t) => e + t.q, 0) / a.length;
      return this.judge(c);
    }
  },
  q5 = (e) => {
    let t = Math.floor(((e % 24) + 24) % 24),
      n = Math.floor((e - Math.floor(e)) * 60);
    return `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`;
  };
