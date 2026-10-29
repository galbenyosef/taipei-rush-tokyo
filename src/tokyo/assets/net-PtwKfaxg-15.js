// tokyo/assets/net-PtwKfaxg 15 — hooks
// Lines 7730-8458 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var kr = `
#net-tags { position: fixed; inset: 0; pointer-events: none; z-index: 5; overflow: hidden; }
.net-tag { position: absolute; left: 0; top: 0; display: none; padding: 0.18em 0.6em; border-radius: 999px;
  background: rgba(10, 12, 18, 0.62); color: var(--text, #f6f3ec); font: 700 12px/1.3 var(--tr-font, system-ui); letter-spacing: 0.04em;
  white-space: nowrap; text-shadow: 0 1px 2px rgba(0,0,0,0.6); border: 1px solid rgba(255,207,77,.35); will-change: transform; }
#net-chip { position: fixed; top: calc(var(--pad, 16px) + env(safe-area-inset-top, 0px)); left: 50%; transform: translateX(-50%);
  z-index: 40; display: none; align-items: center; gap: 0.35em; padding: 0.3em 0.35em 0.3em 0.8em; border-radius: 999px;
  background: rgba(10, 12, 18, 0.72); color: var(--text, #f6f3ec); font: 700 13px/1.2 var(--tr-font, system-ui);
  box-shadow: 0 6px 22px rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.08); pointer-events: auto; user-select: none; }
#net-chip.on { display: flex; }
#net-chip { max-width: calc(100vw - 24px); box-sizing: border-box; flex-wrap: wrap; justify-content: center; }
#net-chip .nc-label { white-space: nowrap; }
#net-chip .nc-code { font-size: 15px; white-space: nowrap; user-select: text; }
#net-menu { max-width: calc(100vw - 24px); max-height: calc(100dvh - 110px); overflow: auto; box-sizing: border-box; }
#net-menu .nm-row, #net-menu .nm-foot { flex-wrap: wrap; }
#net-menu .nm-help { margin: .3em .4em .7em; line-height: 1.6; color: var(--muted, rgba(246,243,236,.6)); }
#net-chip .nc-dot { width: 0.55em; height: 0.55em; border-radius: 50%; background: #3ddc84; box-shadow: 0 0 8px #3ddc84; }
#net-chip.wait .nc-dot { background: #ffb13d; box-shadow: 0 0 8px #ffb13d; animation: ncPulse 1s ease-in-out infinite alternate; }
@keyframes ncPulse { to { opacity: 0.35; } }
#net-chip .nc-label { letter-spacing: 0.06em; }
#net-chip .nc-code { font: 800 15px/1 var(--tr-num, monospace); letter-spacing: 0.18em; color: var(--gold, #ffcf4d); }
#net-chip button { appearance: none; border: 0; border-radius: 999px; padding: 0.45em 0.8em; cursor: pointer;
  background: rgba(255,255,255,0.1); color: inherit; font: inherit; letter-spacing: 0.04em; }
#net-chip button:hover, #net-chip button:focus-visible { background: var(--paper, #f4f1ea); color: var(--ink, #0b0b10); outline: none; }
#net-chip button.nc-share { background: var(--gold, #ffcf4d); color: var(--ink, #0b0b10); }
#net-menu { position: fixed; top: calc(var(--pad, 16px) + 3.2em + env(safe-area-inset-top, 0px)); left: 50%; transform: translateX(-50%);
  z-index: 40; display: none; min-width: 17em; padding: 0.6em; border-radius: 3px; background: rgba(10, 12, 18, 0.95);
  color: var(--text, #f6f3ec); font: 600 13px/1.35 var(--tr-font, system-ui); box-shadow: 0 10px 30px rgba(0,0,0,0.45); pointer-events: auto; }
#net-menu.on { display: block; }
#net-menu .nm-row { display: flex; align-items: center; gap: 0.5em; padding: 0.35em 0.4em; border-radius: 8px; }
#net-menu .nm-row:nth-child(odd) { background: rgba(255,255,255,0.04); }
#net-menu .nm-name { flex: 1; }
#net-menu .nm-tag { font-size: 0.8em; opacity: 0.65; }
#net-menu .nm-link { font: 700 10.5px/1 var(--tr-num, monospace); letter-spacing: 0.04em; padding: 0.25em 0.45em; border-radius: 6px;
  background: rgba(61, 220, 132, 0.16); color: #7cf0b0; white-space: nowrap; }
#net-menu .nm-link.relay { background: rgba(255, 177, 61, 0.16); color: #ffc66b; }
#net-menu .nm-link.connecting { background: rgba(255,255,255,0.08); color: rgba(246,243,236,0.6); }
#net-menu .nm-dot { width: 0.6em; height: 0.6em; border-radius: 50%; flex: none; }
#net-menu button { appearance: none; border: 0; border-radius: 8px; padding: 0.35em 0.7em; cursor: pointer;
  background: rgba(255,255,255,0.1); color: inherit; font: inherit; }
#net-menu button:hover, #net-menu button:focus-visible { background: var(--paper, #f4f1ea); color: var(--ink, #0b0b10); outline: none; }
#net-menu button.danger { background: rgba(255, 59, 74, 0.25); }
#net-menu .nm-foot { display: flex; gap: 0.5em; margin-top: 0.5em; justify-content: flex-end; }
#net-menu .nm-act { display: flex; flex-wrap: wrap; gap: 0.4em; margin-top: 0.55em; padding-top: 0.55em; border-top: 1px solid rgba(255,255,255,0.1); }
#net-menu .nm-act-title { width: 100%; font-size: 0.78em; letter-spacing: 0.12em; opacity: 0.6; }
#net-act { position: fixed; top: calc(var(--pad, 16px) + 2.9em + env(safe-area-inset-top, 0px)); left: 50%; transform: translateX(-50%);
  z-index: 39; display: none; padding: 0.25em 0.8em; border-radius: 999px; background: rgba(10, 12, 18, 0.72); color: #ffe7a3;
  font: 700 12.5px/1.3 var(--tr-num, system-ui); letter-spacing: 0.04em; white-space: nowrap; pointer-events: none; }
#net-act.on { display: block; }
#net-menu .nm-dist { font: 700 10.5px/1 var(--tr-num, monospace); opacity: 0.6; white-space: nowrap; }
#net-menu .nm-rule { width: 100%; font-size: 0.85em; opacity: 0.8; padding: 0.2em 0.1em; }
#net-menu .nm-nick { display: flex; gap: 0.4em; margin-top: 0.5em; }
#net-menu .nm-nick input { flex: 1; min-width: 0; border: 1px solid rgba(255,255,255,0.18); border-radius: 8px; padding: 0.35em 0.6em;
  background: rgba(255,255,255,0.06); color: inherit; font: inherit; }
#net-touch { position: fixed; right: calc(12px + env(safe-area-inset-right, 0px)); bottom: 42%; z-index: 41; display: none; flex-direction: column;
  gap: 0.5em; pointer-events: auto; }
#net-touch.on { display: flex; }
#net-touch button { appearance: none; border: 0; border-radius: 999px; padding: 0.75em 1.1em; min-width: 6.5em; cursor: pointer;
  background: rgba(10, 12, 18, 0.8); color: var(--text, #f6f3ec); font: 800 15px/1.2 var(--tr-font, system-ui); box-shadow: 0 6px 18px rgba(0,0,0,0.4);
  border: 1px solid rgba(255,207,77,.35); touch-action: manipulation; }
#net-wheel .nw-emotes { position: absolute; left: 50%; top: calc(50% + 2.6em); transform: translateX(-50%); display: flex; gap: 0.35em; }
#net-wheel .nw-emotes button { position: static; transform: none; width: auto; padding: 0.4em 0.7em; font-size: 12px; }
#net-wheel { position: fixed; inset: 0; z-index: 45; display: none; align-items: center; justify-content: center;
  background: radial-gradient(circle, rgba(0,0,0,0.35), rgba(0,0,0,0) 60%); pointer-events: auto; }
#net-wheel.on { display: flex; }
#net-wheel .nw-ring { position: relative; width: min(64vmin, 360px); height: min(64vmin, 360px); }
#net-wheel .nw-title { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); text-align: center;
  font: 800 15px/1.3 var(--tr-font, system-ui); color: var(--text, #f6f3ec); letter-spacing: 0.1em; text-shadow: 0 2px 6px rgba(0,0,0,0.7); }
#net-wheel .nw-title small { display: block; font: 700 10px/1.4 var(--tr-display, system-ui); letter-spacing: 0.3em; opacity: 0.7; }
#net-wheel button { position: absolute; transform: translate(-50%, -50%); width: 8.4em; padding: 0.55em 0.4em;
  border: 0; border-radius: 999px; cursor: pointer; background: rgba(10, 12, 18, 0.82); color: var(--text, #f6f3ec);
  font: 700 13px/1.25 var(--tr-font, system-ui); box-shadow: 0 6px 18px rgba(0,0,0,0.4); }
#net-wheel button b { display: inline-block; width: 1.4em; margin-right: 0.3em; color: var(--gold, #ffcf4d); font-family: var(--tr-num, monospace); }
#net-wheel button:hover, #net-wheel button:focus-visible { background: var(--paper, #f4f1ea); color: var(--ink, #0b0b10); outline: none; }
#net-match { display: none; position: fixed; top: calc(var(--pad, 16px) + env(safe-area-inset-top, 0px)); left: 50%; transform: translateX(-50%);
  z-index: 42; width: min(390px, calc(100vw - 24px)); box-sizing: border-box; border: 1px solid rgba(255,255,255,.16); border-radius: 3px; padding: 12px 15px;
  background: rgba(10,12,18,.94); color: var(--text, #f6f3ec); font: 600 13px/1.4 var(--tr-font, system-ui); box-shadow: 0 6px 22px #0005; }
#net-match.on { display: block; }
#net-match[data-phase="error"] { border-color: var(--red, #ff3b4a); }
#net-match-status { font-size: 15px; margin: 0; }
#net-match-hint { margin: 5px 0 0; color: var(--muted, rgba(246,243,236,.6)); }
#net-match .nm-actions { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
#net-match button { border: 1px solid #ffffff30; border-radius: 8px; padding: 9px 12px; background: #ffffff12; color: inherit; font: inherit; cursor: pointer; }
#net-match button:focus-visible { outline: 2px solid var(--pink, #ff3d9a); outline-offset: 2px; }
#net-match-retry { background: rgba(255,59,74,.16) !important; color: var(--text, #f6f3ec); }
@media (max-width: 480px) { #net-chip { font-size: 12px; gap: 4px; padding: 6px 9px; } #net-chip button { padding: 8px; } #net-chip .nc-code { font-size: 14px; letter-spacing: .1em; } }
/* The touch row already owns the top edge. A single 44px target sits below it, using the same safe-area/grid
   values as TouchControls; room codes, sharing and connection errors stay in the existing lobby. */
#net-chip.compact { top: calc(var(--pad, 8px) + env(safe-area-inset-top, 0px) + var(--tbv, 36px) + 12px);
  left: calc(var(--pad, 8px) + env(safe-area-inset-left, 0px) + var(--mm, 100px) + 12px); transform: none;
  padding: 0; gap: 4px; border-radius: 6px; flex-wrap: nowrap; max-width: 190px; font-size: 13px; }
#net-chip.compact .nc-label { min-width: 68px; height: 44px; padding: 0 10px 0 24px; border-radius: 5px;
  background: transparent; font: 800 13px/1 var(--tr-num, system-ui); touch-action: manipulation; }
#net-chip.compact .nc-label:hover, #net-chip.compact .nc-label:focus-visible { background: var(--paper, #f4f1ea); color: var(--ink, #0b0b10); }
#net-chip.compact .nc-dot { position: absolute; left: 10px; pointer-events: none; }
#net-chip.compact.error .nc-dot { background: #ff6b64; box-shadow: 0 0 7px #ff6b64; animation: none; }
#net-chip.compact .nc-code, #net-chip.compact .nc-share { display: none !important; }
/* touch: 💬 is the only way to quick chat / emote (keyboards have Y and 1–8), a second 44px target */
#net-chip.compact .nc-chat, #net-chip.compact .nc-more { width: 44px; height: 44px; padding: 0; border-radius: 5px; font-size: 18px; line-height: 1; touch-action: manipulation; }
/* touch: the ring's labels collide on a phone; a two-column list of 44px targets instead */
#net-wheel.compact { background: rgba(0,0,0,0.5); }
#net-say { position: fixed; left: 50%; bottom: calc(18% + env(safe-area-inset-bottom, 0px)); transform: translateX(-50%); z-index: 46;
  display: none; gap: 6px; width: min(520px, calc(100vw - 24px)); box-sizing: border-box; padding: 6px; border-radius: 10px;
  background: rgba(10, 12, 18, 0.9); border: 1px solid rgba(255,207,77,.35); box-shadow: 0 8px 26px rgba(0,0,0,0.45); }
#net-say.on { display: flex; }
#net-say input { flex: 1; min-width: 0; height: 40px; padding: 0 12px; border-radius: 7px; border: 1px solid rgba(255,255,255,.18);
  background: #fffdf7; color: #2a1a12; font: 600 16px/1 var(--tr-font, system-ui); outline: none; }
#net-say button { height: 40px; padding: 0 16px; border: 0; border-radius: 7px; cursor: pointer; background: var(--gold, #ffcf4d);
  color: var(--ink, #0b0b10); font: 800 14px/1 var(--tr-font, system-ui); touch-action: manipulation; }
body.tr-is-touch #net-say { top: calc(env(safe-area-inset-top, 0px) + 8px); bottom: auto; }
#net-wheel .nw-type { position: absolute; left: 50%; top: calc(50% - 3.4em); transform: translate(-50%, -50%); width: auto; padding: 0.55em 1em;
  background: var(--gold, #ffcf4d); color: var(--ink, #0b0b10); }
#net-wheel.compact .nw-type { grid-column: 1 / -1; }
#net-menu.compact { left: 50%; width: min(92vw, 420px); }
#net-menu.compact button { min-height: 40px; touch-action: manipulation; }
#net-wheel.compact .nw-ring { width: min(92vw, 380px); height: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
#net-wheel.compact .nw-title { position: static; transform: none; grid-column: 1 / -1; margin-bottom: 2px; }
#net-wheel.compact .nw-title small { display: none; }
#net-wheel.compact .nw-emotes { position: static; transform: none; grid-column: 1 / -1; justify-content: center; flex-wrap: wrap; }
#net-wheel.compact button { position: static; transform: none; width: auto; min-height: 44px; touch-action: manipulation; }
/* Landscape notifications use this same column; leave one row for the badge while it is visible. Portrait
   already places the feed beneath the minimap, so its position does not change. */
body.tr-is-touch:not(.tr-portrait):has(#net-chip.compact.on) .hud-feed { margin-top: 52px; }
#net-chip button:focus-visible,#net-menu button:focus-visible,#net-wheel button:focus-visible,#net-touch button:focus-visible { outline:2px solid var(--pink,#ff3d9a); outline-offset:2px; }
@media(prefers-reduced-motion:reduce) { #net-chip .nc-dot { animation:none; } }

`,
  Ar = [
    [`wave`, U.emoteWave],
    [`cheer`, U.emoteCheer],
    [`bow`, U.emoteBow],
  ],
  jr = (e) =>
    e < 0
      ? ``
      : e < 1e3
        ? `${Math.round(e / 10) * 10} m`
        : `${(e / 1e3).toFixed(1)} km`,
  Mr = [
    `#ffcf4d`,
    `#35e0ff`,
    `#ff3d9a`,
    `#3ddc84`,
    `#ffb13d`,
    `#b48cff`,
    `#ff7a45`,
    `#9fe870`,
  ],
  Y = (e, t, n, r) => {
    let i = document.createElement(e);
    return (
      t && (i.className = t),
      r !== void 0 && (i.textContent = r),
      n?.appendChild(i),
      i
    );
  },
  Nr = class {
    ctx;
    hooks;
    tags;
    chip;
    label;
    codeEl;
    menu;
    wheel;
    sayForm;
    sayInput;
    act;
    actText = ``;
    touchEl;
    touchSig = ``;
    nickOpen = !1;
    t = 0;
    sig = ``;
    matchPanel;
    matchSig = ``;
    compact;
    constructor(e, t) {
      ((this.ctx = e), (this.hooks = t));
      let n = Y(`style`, ``, document.head);
      ((n.textContent = kr),
        (this.tags = Y(`div`, ``, document.body)),
        (this.tags.id = `net-tags`),
        (this.chip = Y(`div`, ``, document.body)),
        (this.chip.id = `net-chip`),
        (this.compact = e.input.isTouch || e.params.has(`touch`)),
        this.chip.classList.toggle(`compact`, this.compact),
        this.chip.setAttribute(`aria-label`, this.tr(U.online)),
        Y(`span`, `nc-dot`, this.chip),
        (this.label = Y(`button`, `nc-label nc-lobby`, this.chip)),
        (this.label.type = `button`),
        this.label.addEventListener(`click`, () => t.openLobby()),
        this.label.setAttribute(`aria-live`, `polite`),
        (this.codeEl = Y(`span`, `nc-code`, this.chip)));
      let r = Y(`button`, `nc-share`, this.chip);
      ((r.type = `button`),
        (r.dataset.msg = `share`),
        r.addEventListener(`click`, (e) => {
          (e.stopPropagation(), t.share());
        }));
      let i = Y(`button`, `nc-chat`, this.chip, `💬`);
      ((i.type = `button`),
        i.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.toggleWheel());
        }));
      let a = Y(`button`, `nc-more`, this.chip, `☰`);
      ((a.type = `button`),
        a.addEventListener(`click`, (e) => {
          (e.stopPropagation(),
            this.menu.classList.toggle(`on`),
            (this.sig = ``),
            this.refresh(!0));
        }),
        (this.menu = Y(`div`, ``, document.body)),
        (this.menu.id = `net-menu`),
        (this.wheel = Y(`div`, ``, document.body)),
        (this.wheel.id = `net-wheel`),
        this.wheel.classList.toggle(`compact`, this.compact),
        (this.sayForm = Y(`form`, ``, document.body)),
        (this.sayForm.id = `net-say`),
        (this.sayInput = Y(`input`, ``, this.sayForm)),
        (this.sayInput.type = `text`),
        (this.sayInput.maxLength = 80),
        (this.sayInput.autocomplete = `off`),
        (this.sayInput.enterKeyHint = `send`));
      let o = Y(`button`, ``, this.sayForm);
      ((o.type = `submit`),
        this.sayForm.addEventListener(`submit`, (e) => {
          e.preventDefault();
          let t = this.sayInput.value;
          if (!t.trim()) return this.closeSay();
          if (!this.hooks.say(t)) {
            this.ctx.events.emit(`notify`, {
              text: U.sayTooFast,
              kind: `info`,
              duration: 2,
            });
            return;
          }
          this.closeSay();
        }),
        this.sayInput.addEventListener(`keydown`, (e) => {
          (e.stopPropagation(),
            e.key === `Escape` && (e.preventDefault(), this.closeSay()));
        }),
        this.sayInput.addEventListener(`blur`, () =>
          setTimeout(() => {
            !this.sayInput.value.trim() &&
              document.activeElement !== this.sayInput &&
              this.closeSay(!1);
          }, 150),
        ),
        this.menu.classList.toggle(`compact`, this.compact),
        (this.act = Y(`div`, ``, document.body)),
        (this.act.id = `net-act`),
        (this.touchEl = Y(`div`, ``, document.body)),
        (this.touchEl.id = `net-touch`),
        (this.matchPanel = Y(`div`, ``, document.body)),
        (this.matchPanel.id = `net-match`),
        this.buildWheel(),
        window.addEventListener(`keydown`, (e) => this.key(e)),
        e.events.on(`game:pause`, () => this.refresh(!0)),
        e.events.on(`settings:changed`, ({ key: e }) => {
          e === `lang` &&
            ((this.sig = ``), this.buildWheel(), this.refresh(!0));
        }));
    }
    tr(e) {
      return this.ctx.t(e);
    }
    refreshMatch() {
      let e = this.hooks.match(),
        t = `${this.hooks.lobbyOpen()}|${e.phase}|${e.error ? this.tr(e.error) : ``}|${this.ctx.t(e.retryLabel ?? U.retry)}|${!!this.ctx.paused}`;
      if (t === this.matchSig) return;
      this.matchSig = t;
      let n =
        !this.compact &&
        !!(e.phase || e.error) &&
        !this.ctx.paused &&
        !this.hooks.lobbyOpen();
      if (
        (this.matchPanel.classList.toggle(`on`, n),
        (this.matchPanel.dataset.phase =
          e.phase || (e.error ? `error` : `idle`)),
        (this.matchPanel.textContent = ``),
        !n)
      )
        return;
      let r =
          e.phase === `searching`
            ? U.searching
            : e.phase === `hosting`
              ? U.matchHosting
              : U.matchConnecting,
        i = Y(`p`, ``, this.matchPanel, this.tr(e.phase ? r : e.error));
      if (
        ((i.id = `net-match-status`),
        i.setAttribute(`role`, e.phase ? `status` : `alert`),
        e.phase)
      ) {
        Y(`p`, ``, this.matchPanel, this.tr(U.matchHint)).id = `net-match-hint`;
        return;
      }
      let a = Y(`div`, `nm-actions`, this.matchPanel);
      for (let [t, n, r] of [
        [`net-match-retry`, e.retryLabel ?? U.retry, () => this.hooks.retry()],
        [`net-match-code`, U.lobby, () => this.hooks.openLobby()],
        [`net-match-solo`, U.solo, () => this.hooks.leave()],
      ]) {
        let e = Y(`button`, ``, a, this.tr(n));
        ((e.type = `button`), (e.id = t), e.addEventListener(`click`, r));
      }
    }
    buildWheel() {
      this.wheel.textContent = ``;
      let e = Y(`div`, `nw-ring`, this.wheel);
      Y(
        `small`,
        ``,
        Y(`div`, `nw-title`, e, this.tr(U.chat)),
        `Enter · Y / 1–8 · 9 0 −`,
      );
      let t = Y(`button`, `nw-type`, e, this.tr(U.typeChat));
      ((t.type = `button`),
        t.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.toggleWheel(!1), this.openSay());
        }));
      let n = Y(`div`, `nw-emotes`, e);
      for (let [e, t] of Ar) {
        let r = Y(`button`, ``, n, this.tr(t));
        ((r.type = `button`),
          r.addEventListener(`click`, (t) => {
            (t.stopPropagation(), this.hooks.emote(e), this.toggleWheel(!1));
          }));
      }
      (it.forEach((t, n) => {
        let r = (n / it.length) * Math.PI * 2 - Math.PI / 2,
          i = Y(`button`, ``, e);
        ((i.type = `button`),
          (i.style.left = `${(50 + Math.cos(r) * 40).toFixed(1)}%`),
          (i.style.top = `${(50 + Math.sin(r) * 40).toFixed(1)}%`),
          Y(`b`, ``, i, String(n + 1)),
          i.appendChild(document.createTextNode(this.tr(t))),
          i.addEventListener(`click`, (e) => {
            (e.stopPropagation(), this.say(n));
          }));
      }),
        this.wheel.addEventListener(`click`, () => this.toggleWheel(!1)));
    }
    say(e) {
      this.hooks.chat(e);
      let t = it[e];
      (this.ctx.events.emit(`notify`, {
        text: { zh: `${this.tr(U.you)}：${t.zh}`, en: `You: ${t.en}` },
        kind: `info`,
        duration: 3,
      }),
        this.toggleWheel(!1));
    }
    toggleWheel(e = !this.wheel.classList.contains(`on`)) {
      (e && this.hooks.role() === `off`) ||
        this.wheel.classList.toggle(`on`, e);
    }
    openSay() {
      this.hooks.role() !== `off` &&
        ((this.sayInput.placeholder = this.tr(
          this.compact ? U.sayHintTouch : U.sayHint,
        )),
        (this.sayForm.querySelector(`button`).textContent = this.tr(U.sendSay)),
        this.sayForm.classList.add(`on`),
        this.sayInput.focus());
    }
    closeSay(e = !0) {
      if (
        this.sayForm.classList.contains(`on`) &&
        ((this.sayInput.value = ``),
        this.sayForm.classList.remove(`on`),
        this.sayInput.blur(),
        e && !this.compact && !this.ctx.paused && !this.ctx.ui.menuOpen)
      )
        try {
          this.ctx.input.lockPointer();
        } catch {}
    }
    key(e) {
      if (this.hooks.role() === `off` || e.repeat) return;
      let t = e.target;
      if (!t || (t.tagName !== `INPUT` && t.tagName !== `TEXTAREA`)) {
        if (
          (e.code === `Enter` || e.code === `NumpadEnter`) &&
          !this.ctx.paused &&
          !this.ctx.ui.menuOpen &&
          !this.hooks.lobbyOpen() &&
          !(t instanceof HTMLButtonElement) &&
          this.hooks.status() === `connected`
        )
          (this.toggleWheel(!1), this.openSay(), e.preventDefault());
        else if (e.code === `KeyY` && !this.ctx.paused)
          (this.toggleWheel(), e.preventDefault());
        else if (this.wheel.classList.contains(`on`)) {
          let t = /^Digit([1-8])$/.exec(e.code),
            n =
              e.code === `Digit9`
                ? `wave`
                : e.code === `Digit0`
                  ? `cheer`
                  : e.code === `Minus`
                    ? `bow`
                    : null;
          t
            ? (this.say(Number(t[1]) - 1), e.preventDefault())
            : n
              ? (this.hooks.emote(n), this.toggleWheel(!1), e.preventDefault())
              : e.code === `Escape` && this.toggleWheel(!1);
        }
      }
    }
    update(e) {
      if (((this.t += e), this.t < 0.25)) return;
      ((this.t = 0), this.refresh(!1), this.updateTouch());
      let t =
        this.hooks.role() === `off` || this.ctx.paused
          ? ``
          : this.hooks.activity();
      t !== this.actText &&
        ((this.actText = t),
        (this.act.textContent = t),
        this.act.classList.toggle(`on`, !!t));
    }
    updateTouch() {
      let e =
          this.ctx.input.isTouch &&
          this.hooks.role() !== `off` &&
          !this.ctx.paused
            ? this.hooks.touch()
            : ``,
        t = `${e}|${this.ctx.t(U.touchOut)}`;
      if (t === this.touchSig) return;
      ((this.touchSig = t),
        (this.touchEl.textContent = ``),
        this.touchEl.classList.toggle(`on`, !!e));
      let n = (e, t) => {
        let n = Y(`button`, ``, this.touchEl, this.tr(e));
        ((n.type = `button`),
          n.addEventListener(`click`, (e) => {
            (e.stopPropagation(), this.hooks.tap(t));
          }));
      };
      e === `ride`
        ? n(U.touchRide, `enter`)
        : e === `take`
          ? n(U.touchTake, `enter`)
          : e === `slide`
            ? (n(U.touchSlide, `interact`), n(U.touchOut, `enter`))
            : e === `out` && n(U.touchOut, `enter`);
    }
    refresh(e) {
      this.refreshMatch();
      let t = this.hooks.match(),
        n = this.hooks.role(),
        r = n !== `off`,
        i = this.hooks.players(),
        a = this.hooks.status(),
        o = this.menu.classList.contains(`on`),
        s = `${this.hooks.lobbyOpen()}|${this.ctx.paused}|${this.ctx.ui.menuOpen}|${t.phase}|${!!t.error}|${this.hooks.busy()}${this.hooks.hasPing()}${this.hooks.pvp()}${this.hooks.canRegroup()}${this.nickOpen}${this.hooks.nickname()}|${o ? i.map((e) => `${Math.round(this.hooks.distance(e.slot) / 10)}${this.hooks.isMuted(e.slot)}`).join(`,`) : ``}|${n}|${a}|${i.map((e) => `${e.slot}${e.char}${e.self ? `s` : ``}${e.host ? `h` : ``}${e.via[0]}${o ? Math.round(e.rtt / 20) : ``}`).join(`,`)}|${this.hooks.code()}|${this.hooks.isPublic()}|${o}`;
      if (!e && s === this.sig) return;
      if (((this.sig = s), r || this.closeSay(!1), this.compact)) {
        let o = r || !!t.phase || !!t.error;
        (this.chip.classList.toggle(
          `on`,
          o &&
            !this.ctx.paused &&
            !this.hooks.lobbyOpen() &&
            !this.ctx.ui.menuOpen,
        ),
          this.chip.classList.toggle(
            `wait`,
            !!t.phase || a !== `connected` || i.length < 2,
          ),
          this.chip.classList.toggle(`error`, !!t.error));
        let s =
          t.error ||
          (t.phase === `searching`
            ? U.searching
            : t.phase === `hosting`
              ? U.matchHosting
              : t.phase
                ? U.matchConnecting
                : a === `migrating`
                  ? U.migrating
                  : a === `connected`
                    ? i.length < 2
                      ? this.hooks.isPublic()
                        ? U.waitingPublic
                        : U.waitingFriends
                      : U.online
                    : U.linking);
        ((this.label.textContent = `${i.length}/8`),
          this.label.setAttribute(
            `aria-label`,
            `${this.tr(U.lobby)} · ${this.tr(s)} · ${i.length}/8`,
          ),
          (this.label.title = this.tr(s)),
          (this.chip.dataset.status = t.error ? `error` : t.phase || a));
        let c = r && a === `connected` && !t.phase,
          l = this.chip.querySelector(`.nc-chat`),
          u = this.chip.querySelector(`.nc-more`);
        if (
          ((l.style.display = u.style.display = c ? `` : `none`),
          l.setAttribute(`aria-label`, this.tr(U.chat)),
          u.setAttribute(`aria-label`, this.tr(U.playersMenu)),
          !c ||
            this.ctx.paused ||
            this.hooks.lobbyOpen() ||
            this.ctx.ui.menuOpen)
        ) {
          (this.menu.classList.remove(`on`), this.wheel.classList.remove(`on`));
          return;
        }
        ((this.menu.style.top = this.act.style.top =
          `${Math.round(this.chip.getBoundingClientRect().bottom + 8)}px`),
          this.menu.classList.contains(`on`) &&
            this.renderMenu(i, n, i.length < 2, e));
        return;
      }
      if (
        (this.chip.classList.toggle(
          `on`,
          r &&
            !this.ctx.paused &&
            !this.hooks.lobbyOpen() &&
            !t.phase &&
            !t.error,
        ),
        !r || this.hooks.lobbyOpen() || t.phase || t.error)
      ) {
        (this.menu.classList.remove(`on`), this.wheel.classList.remove(`on`));
        return;
      }
      this.chip.classList.toggle(`wait`, a !== `connected` || i.length < 2);
      let c = a === `connected` && i.length < 2,
        l =
          a === `migrating`
            ? U.migrating
            : a === `connected`
              ? c
                ? this.hooks.isPublic()
                  ? U.waitingPublic
                  : U.waitingFriends
                : U.online
              : U.linking;
      ((this.label.textContent = `${this.tr(l)} ${i.length}/8`),
        this.label.setAttribute(
          `aria-label`,
          this.tr(U.lobby) + ` · ` + this.label.textContent,
        ),
        (this.codeEl.textContent = this.hooks.code()
          ? `${this.tr(U.roomCode)} ${this.hooks.code()}`
          : ``),
        this.chip
          .querySelector(`.nc-chat`)
          .setAttribute(`aria-label`, this.tr(U.chat)),
        this.chip
          .querySelector(`.nc-more`)
          .setAttribute(`aria-label`, this.tr(U.playersMenu)));
      let u = this.chip.querySelector(`.nc-share`);
      if (
        ((u.textContent = this.tr(U.share)),
        (u.style.display = this.hooks.code() ? `` : `none`),
        this.chip.classList.contains(`on`))
      ) {
        let e = `${Math.round(this.chip.getBoundingClientRect().bottom + 8)}px`;
        this.menu.style.top = this.act.style.top = e;
      }
      this.menu.classList.contains(`on`) && this.renderMenu(i, n, c, e);
    }
    renderMenu(e, t, n, r) {
      if (this.nickOpen && !r && this.menu.querySelector(`.nm-nick`)) return;
      ((this.menu.textContent = ``),
        n &&
          Y(
            `p`,
            `nm-help`,
            this.menu,
            this.tr(
              this.hooks.isPublic()
                ? U.waitingPublicHint
                : U.waitingFriendsHint,
            ),
          ));
      let i = t === `host`,
        a = (e) => () => {
          (this.menu.classList.remove(`on`), e());
        },
        o = (e, t, n, r = ``) => {
          let i = Y(`button`, r, e, this.tr(t));
          ((i.type = `button`),
            i.addEventListener(`click`, (e) => {
              (e.stopPropagation(), n());
            }));
        };
      for (let t of e) {
        let e = Y(`div`, `nm-row`, this.menu);
        if (
          ((Y(`span`, `nm-dot`, e).style.background = Mr[t.slot] ?? `#35e0ff`),
          Y(`span`, `nm-name`, e, this.tr(V(t.slot, t.char, t.name))),
          t.host && Y(`span`, `nm-tag`, e, this.tr(U.hostTag)),
          t.self && Y(`span`, `nm-tag`, e, this.tr(U.you)),
          !t.self)
        ) {
          Y(`span`, `nm-dist`, e, jr(this.hooks.distance(t.slot)));
          let n =
            t.via === `direct`
              ? U.direct
              : t.via === `relay`
                ? U.relay
                : U.linking;
          (Y(
            `span`,
            `nm-link ${t.via}`,
            e,
            this.tr(n) + (t.rtt > 0 ? ` ${t.rtt}ms` : ``),
          ),
            o(e, this.hooks.isMuted(t.slot) ? U.unmute : U.mute, () =>
              this.hooks.toggleMute(t.slot),
            ),
            o(e, U.follow, () => {
              (this.menu.classList.remove(`on`), this.hooks.follow(t.slot));
            }),
            o(e, U.goTo, () => {
              (this.menu.classList.remove(`on`), this.hooks.goTo(t.slot));
            }));
        }
        if (i && !t.self) {
          let n = Y(`button`, ``, e, this.tr(U.kick));
          ((n.type = `button`),
            n.addEventListener(`click`, (e) => {
              (e.stopPropagation(), this.hooks.kick(t.slot, !1));
            }));
          let r = Y(`button`, `danger`, e, this.tr(U.ban));
          ((r.type = `button`),
            r.addEventListener(`click`, (e) => {
              (e.stopPropagation(), this.hooks.kick(t.slot, !0));
            }));
        }
      }
      let s = Y(`div`, `nm-act`, this.menu);
      (i
        ? o(s, this.hooks.pvp() ? U.pvpOn : U.pvpOff, () =>
            this.hooks.setPvp(!this.hooks.pvp()),
          )
        : Y(
            `div`,
            `nm-rule`,
            s,
            this.tr(this.hooks.pvp() ? U.pvpOn : U.pvpOff),
          ),
        this.hooks.canRegroup() &&
          o(
            s,
            U.regroup,
            a(() => this.hooks.regroup()),
          ));
      let c = Y(`div`, `nm-act`, this.menu);
      Y(`div`, `nm-act-title`, c, this.tr(U.actTitle));
      let l = (e) => () => {
        (this.menu.classList.remove(`on`), e());
      };
      if (
        (o(
          c,
          U.actPing,
          l(() => this.hooks.sharePing()),
        ),
        this.hooks.hasPing() &&
          o(
            c,
            U.actGoPing,
            l(() => this.hooks.goToPing()),
          ),
        this.hooks.busy()
          ? this.hooks.referee() &&
            o(
              c,
              U.actStop,
              l(() => this.hooks.stopActivity()),
              `danger`,
            )
          : (o(
              c,
              U.actRace,
              l(() => this.hooks.startRace()),
            ),
            o(
              c,
              U.actHunt,
              l(() => this.hooks.startHunt()),
            )),
        this.nickOpen)
      ) {
        let e = Y(`div`, `nm-nick`, this.menu),
          t = Y(`input`, ``, e);
        ((t.maxLength = 24),
          (t.value = this.hooks.nickname()),
          (t.placeholder = this.tr(U.nickHint)));
        let n = () => {
          ((this.nickOpen = !1), this.hooks.setNickname(t.value));
        };
        (t.addEventListener(`keydown`, (e) => {
          (e.stopPropagation(), e.key === `Enter` && n());
        }),
          o(e, U.save, n),
          setTimeout(() => t.focus(), 0));
      }
      let u = Y(`div`, `nm-foot`, this.menu);
      this.nickOpen ||
        o(u, U.nick, () => {
          ((this.nickOpen = !0), (this.sig = ``), this.refresh(!0));
        });
      let d = Y(`button`, `danger`, u, this.tr(U.leave));
      ((d.type = `button`),
        d.addEventListener(`click`, (e) => {
          (e.stopPropagation(),
            this.menu.classList.remove(`on`),
            this.hooks.leave());
        }));
    }
  };
