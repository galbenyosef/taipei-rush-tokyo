// tokyo/assets/world-Bo9wkXrT 16 — ctx
// Lines 4416-4707 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Nn = `interiors-menu-style`,
  Pn = `
.imenu-bd{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:flex-end;
  padding:max(12px,env(safe-area-inset-top)) max(16px,calc(env(safe-area-inset-right) + 10px)) max(12px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));
  background:linear-gradient(90deg,rgba(0,0,0,0) 35%,rgba(0,0,0,0.28));box-sizing:border-box;touch-action:none;-webkit-tap-highlight-color:transparent}
.imenu{position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:min(400px,100%);max-height:100%;
  background:rgba(14,18,22,0.93);color:#f4f4f0;border-radius:14px;padding:14px 14px 10px;font-family:${q};
  box-shadow:0 12px 40px rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);user-select:none;-webkit-user-select:none;touch-action:pan-y}
.imenu-hd{display:flex;align-items:flex-start;gap:10px}
.imenu-title{flex:1;font-size:21px;font-weight:800;letter-spacing:1px;line-height:1.2;padding-top:3px}
.imenu-x{flex:none;width:44px;height:44px;margin:-6px -6px 0 0;border:0;border-radius:12px;background:rgba(255,255,255,0.1);
  color:#fff;font:700 22px/44px ${q};cursor:pointer;padding:0}
.imenu-x:active{background:rgba(255,255,255,0.25)}
.imenu-say{margin:6px 0 2px;font-size:14px;line-height:1.35;color:#ffe9b0}
.imenu-say b{color:#fff;font-weight:700;margin-right:2px}
.imenu-sub{font-size:12.5px;opacity:.68;margin:2px 0 8px}
.imenu-rows{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;margin:0 -4px;padding:0 4px}
.imenu-row{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 8px;border-radius:10px;margin:3px 0;
  background:rgba(255,255,255,0.05);cursor:pointer;box-sizing:border-box;border:2px solid transparent}
.imenu-row.sel{border-color:var(--acc);background:rgba(255,255,255,0.12)}
.imenu-row.dis{opacity:.45;cursor:default}
.imenu-row:active:not(.dis){background:rgba(255,255,255,0.2)}
.imenu-num{flex:none;width:24px;height:24px;border-radius:6px;background:var(--acc);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px}
.imenu-glyph{flex:none;width:34px;height:34px;border-radius:50%;background:#fff;color:#222;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px}
.imenu-txt{flex:1;min-width:0}
.imenu-name{font-size:16px;font-weight:700;line-height:1.25}
.imenu-desc{font-size:12px;opacity:.72;line-height:1.25}
.imenu-price{flex:none;font-size:16px;font-weight:800;color:#ffd66b}
.imenu-ft{display:flex;justify-content:space-between;gap:10px;font-size:12.5px;opacity:.8;margin-top:8px}
.imenu-ft .cash{flex:none;color:#ffd66b;font-weight:700}
.imenu-bd.touch .imenu-num{display:none}
@media (max-height:500px){
  .imenu{padding:10px 12px 8px}
  .imenu-title{font-size:17px;padding-top:6px}
  .imenu-say{font-size:12.5px;margin:2px 0 0}
  .imenu-sub{display:none}
  .imenu-row{min-height:44px;padding:4px 8px;margin:2px 0}
  .imenu-glyph{width:28px;height:28px;font-size:15px}
  .imenu-name{font-size:14.5px}
  .imenu-desc{font-size:11.5px}
  .imenu-ft{margin-top:5px;font-size:12px}
}
@media (orientation:portrait) and (max-width:600px){
  .imenu-bd{align-items:flex-end;justify-content:center;padding:0;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,0.3))}
  .imenu{width:100%;max-height:62%;border-radius:16px 16px 0 0;
    padding:12px max(14px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(14px,env(safe-area-inset-left))}
}
`,
  Fn = class {
    ctx;
    bd = null;
    rowsEl = null;
    rowEls = [];
    cashEl = null;
    hintEl = null;
    opts = null;
    keyHandler = (e) => this.onKey(e);
    openedAt = 0;
    sel = -1;
    device = ``;
    stickT = 0;
    stickDir = 0;
    constructor(e) {
      this.ctx = e;
    }
    get open() {
      return !!this.bd;
    }
    get owner() {
      return this.opts?.owner;
    }
    show(e) {
      (this.close(!0), (this.opts = e));
      let t = this.ctx,
        n = (e) => t.t(e);
      if (!document.getElementById(Nn)) {
        let e = document.createElement(`style`);
        ((e.id = Nn), (e.textContent = Pn), document.head.appendChild(e));
      }
      let r = document.createElement(`div`);
      ((r.className = `imenu-bd`), r.style.setProperty(`--acc`, e.accent));
      let i = document.createElement(`div`);
      ((i.className = `imenu`), (i.style.borderTop = `5px solid ${e.accent}`));
      let a = e.speaker
        ? `<div class="imenu-say"><b>${In(n(e.speaker.name))}：</b>${In(n(e.speaker.line))}</div>`
        : ``;
      ((i.innerHTML = `<div class="imenu-hd"><div class="imenu-title">${In(n(e.title))}</div>
        <button class="imenu-x" aria-label="${In(n({ zh: `離開`, en: `Close` }))}">✕</button></div>
      ${a}${e.subtitle ? `<div class="imenu-sub">${In(n(e.subtitle))}</div>` : ``}
      <div class="imenu-rows"></div>
      <div class="imenu-ft"><span class="hint"></span><span class="cash"></span></div>`),
        (this.rowsEl = i.querySelector(`.imenu-rows`)),
        (this.cashEl = i.querySelector(`.cash`)),
        (this.hintEl = i.querySelector(`.hint`)),
        (this.rowEls = []),
        e.items.forEach((e, t) => {
          let r = document.createElement(`div`);
          ((r.className = `imenu-row`),
            (r.innerHTML = `<div class="imenu-num">${t + 1}</div><div class="imenu-glyph">${In(e.glyph)}</div>
        <div class="imenu-txt"><div class="imenu-name">${In(n(e.name))}</div><div class="imenu-desc"></div></div>
        <div class="imenu-price">${Le(e.price, Fe)}</div>`),
            r.addEventListener(`click`, (e) => {
              (e.stopPropagation(), this.setSel(t), this.choose(t));
            }),
            r.addEventListener(`mouseenter`, () => this.setSel(t)),
            this.rowsEl.appendChild(r),
            this.rowEls.push(r));
        }),
        i.querySelector(`.imenu-x`).addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.close());
        }),
        r.addEventListener(`pointerdown`, (e) => {
          e.target === r &&
            performance.now() - this.openedAt > 250 &&
            (e.preventDefault(), this.close());
        }),
        i.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
        r.appendChild(i),
        document.body.appendChild(r),
        (this.bd = r),
        (this.openedAt = performance.now()),
        (this.sel = -1),
        (this.device = ``),
        this.refresh(),
        this.updateDevice(),
        window.addEventListener(`keydown`, this.keyHandler, !0));
      try {
        t.ui.setExternalMenu?.(!0);
      } catch {}
      try {
        t.player.setControlEnabled(!1);
      } catch {}
      try {
        document.pointerLockElement && document.exitPointerLock();
      } catch {}
    }
    update(e) {
      if (!this.bd) return;
      this.updateDevice();
      let t = this.ctx.input;
      if (
        t.device !== `gamepad` ||
        performance.now() - this.openedAt < 220 ||
        !(this.opts?.items.length ?? 0)
      )
        return;
      t.pressed(`phone`)
        ? this.move(-1)
        : t.pressed(`lookBehind`) && this.move(1);
      let n = t.axis(`moveY`),
        r = n > 0.55 ? -1 : +(n < -0.55);
      (r === this.stickDir
        ? r &&
          ((this.stickT += e),
          this.stickT > 0.32 && ((this.stickT = 0.2), this.move(r)))
        : ((this.stickDir = r), (this.stickT = 0), r && this.move(r)),
        t.pressed(`jump`)
          ? this.choose(this.sel < 0 ? 0 : this.sel)
          : (t.pressed(`sprint`) ||
              t.pressed(`pause`) ||
              t.pressed(`interact`)) &&
            this.close());
    }
    updateDevice() {
      let e = this.ctx.input.device;
      if (
        (e === `kbm` &&
          !this.device &&
          typeof matchMedia == `function` &&
          matchMedia(`(pointer: coarse)`).matches &&
          (e = `touch`),
        e === this.device || !this.hintEl || !this.bd)
      )
        return;
      ((this.device = e), this.bd.classList.toggle(`touch`, e === `touch`));
      let t =
        e === `touch`
          ? {
              zh: `點選商品購買 · 點空白處或 ✕ 離開`,
              en: `Tap an item to buy · tap outside or ✕ to leave`,
            }
          : e === `gamepad`
            ? {
                zh: `十字鍵選擇 · Ⓐ 購買 · Ⓑ 離開`,
                en: `D-pad to pick · Ⓐ buy · Ⓑ leave`,
              }
            : {
                zh: `數字鍵 / ↑↓ Enter 購買 · E / Esc 離開`,
                en: `Number keys / ↑↓ Enter to buy · E / Esc to leave`,
              };
      ((this.hintEl.textContent = this.ctx.t(t)),
        e === `gamepad` && this.sel < 0 && this.setSel(0));
    }
    move(e) {
      let t = this.opts?.items.length ?? 0;
      if (t) {
        this.setSel(
          this.sel < 0 ? (e > 0 ? 0 : t - 1) : (this.sel + e + t) % t,
        );
        try {
          this.ctx.audio.play(`ui_hover`, { ui: !0, volume: 0.5 });
        } catch {}
      }
    }
    setSel(e) {
      if (e === this.sel) return;
      (this.rowEls[this.sel]?.classList.remove(`sel`), (this.sel = e));
      let t = this.rowEls[e];
      if (t) {
        t.classList.add(`sel`);
        try {
          t.scrollIntoView({ block: `nearest` });
        } catch {}
      }
    }
    refresh() {
      let e = this.opts;
      if (!e) return;
      let t = (e) => this.ctx.t(e);
      (e.items.forEach((e, n) => {
        let r = this.rowEls[n];
        if (!r) return;
        let i = !e.can || e.can();
        (r.classList.toggle(`dis`, i !== !0),
          (r.querySelector(`.imenu-desc`).textContent = t(
            i === !0 ? e.desc : i,
          )));
      }),
        this.cashEl &&
          (this.cashEl.textContent = Le(this.ctx.state.money, {
            group: `none`,
          })));
    }
    onKey(e) {
      if (He(e.target) || !this.bd) return;
      let t = this.opts?.items.length ?? 0,
        n = !0;
      if (/^Digit[1-9]$/.test(e.code) || /^Numpad[1-9]$/.test(e.code)) {
        let n = Number(e.code.slice(-1)) - 1;
        n < t && (this.setSel(n), this.choose(n));
      } else
        e.code === `ArrowUp` || e.code === `KeyW`
          ? this.move(-1)
          : e.code === `ArrowDown` || e.code === `KeyS`
            ? this.move(1)
            : (e.code === `Enter` || e.code === `Space`) && this.sel >= 0
              ? this.choose(this.sel)
              : (e.code === `Escape` || e.code === `KeyE`) &&
                  performance.now() - this.openedAt > 150
                ? this.close()
                : (n = !1);
      n && (e.preventDefault(), e.stopPropagation());
    }
    choose(e) {
      let t = this.opts;
      if (!t || !t.items[e]) return;
      let n = t.items[e];
      if ((!n.can || n.can()) !== !0) {
        try {
          this.ctx.audio.play(`ui_back`, { ui: !0 });
        } catch {}
        return;
      }
      (n.buy(), this.refresh());
    }
    close(e = !1) {
      if (!this.bd) return;
      (this.bd.remove(),
        (this.bd = null),
        (this.rowsEl = null),
        (this.rowEls = []),
        (this.cashEl = this.hintEl = null),
        window.removeEventListener(`keydown`, this.keyHandler, !0));
      try {
        this.ctx.ui.setExternalMenu?.(!1);
      } catch {}
      try {
        this.ctx.player.setControlEnabled(!0);
      } catch {}
      let t = this.opts;
      ((this.opts = null), e || t?.onClose?.());
    }
    dispose() {
      this.close(!0);
    }
  };
function In(e) {
  return e.replace(
    /[&<>"]/g,
    (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e],
  );
}
