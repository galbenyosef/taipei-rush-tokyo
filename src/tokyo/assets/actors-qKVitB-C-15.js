// tokyo/assets/actors-qKVitB-C 15 — math
// Lines 4515-4931 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var zo = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  Bo = class {
    ctx;
    o;
    bd;
    rows;
    act;
    cash;
    tabs = [];
    tab = Lo[0];
    sel = -1;
    items = [];
    rowEls = [];
    hero;
    trial;
    openedAt = performance.now();
    raf = 0;
    keyH = (e) => this.onKey(e);
    camPos = new L();
    camAt = new L();
    stickDir = 0;
    stickT = 0;
    lastT = performance.now();
    fmt;
    constructor(e, t) {
      ((this.ctx = e),
        (this.o = t),
        (this.fmt = t.money ?? ((e) => `NT$${e.toLocaleString(`en-US`)}`)));
      let n = (t) => e.t(t);
      if (
        ((this.hero = To() ?? `jie`),
        (this.trial = { ...Ca.outfit(this.hero) }),
        !document.getElementById(Mo))
      ) {
        let e = document.createElement(`style`);
        ((e.id = Mo), (e.textContent = No), document.head.appendChild(e));
      }
      let r = (this.bd = document.createElement(`div`));
      ((r.className = `wshop-bd`),
        r.style.setProperty(`--acc`, t.accent ?? `#e60012`));
      let i = document.createElement(`div`);
      i.className = `wshop`;
      let a = t.speaker
        ? `<div class="wshop-say"><b>${Vo(n(t.speaker.name))}${Vo(n({ zh: `：`, en: `: ` }))}</b>${Vo(n(t.speaker.line))}</div>`
        : ``;
      i.innerHTML = `<div class="wshop-hd"><div class="wshop-logo">${Vo((t.logo ?? [`UNI`, `GLOW`])[0])}<br>${Vo((t.logo ?? [`UNI`, `GLOW`])[1])}</div>
        <div class="wshop-title">${Vo(n(t.title))}${t.subtitle ? `<div class="wshop-sub">${Vo(n(t.subtitle))}</div>` : ``}</div>
        <button class="wshop-x" aria-label="${Vo(n({ zh: `離開`, en: `Close` }))}">✕</button></div>
      ${a}<div class="wshop-tabs"></div><div class="wshop-rows"></div>
      <div class="wshop-ft"><span class="wshop-cash"></span><button class="wshop-act"></button></div>
      <div class="wshop-hint">${Vo(n({ zh: `←→ 換分類 · ↑↓ 試穿 · Enter 購買／穿上 · Esc 離開`, en: `←→ category · ↑↓ try on · Enter buy / wear · Esc leave` }))}</div>`;
      let o = i.querySelector(`.wshop-tabs`);
      for (let e of Lo) {
        let t = document.createElement(`button`);
        ((t.className = `wshop-tab` + (e.shelf ? ` shelf` : ``)),
          (t.textContent = n(e.name)),
          t.addEventListener(`click`, (t) => {
            (t.stopPropagation(), this.setTab(e));
          }),
          o.appendChild(t),
          this.tabs.push(t));
      }
      ((this.rows = i.querySelector(`.wshop-rows`)),
        (this.act = i.querySelector(`.wshop-act`)),
        (this.cash = i.querySelector(`.wshop-cash`)),
        this.act.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.action());
        }),
        i.querySelector(`.wshop-x`).addEventListener(`click`, (e) => {
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
        typeof matchMedia == `function` &&
          matchMedia(`(pointer: coarse)`).matches &&
          r.classList.add(`touch`),
        window.addEventListener(`keydown`, this.keyH, !0));
      try {
        e.ui.setExternalMenu?.(!0);
      } catch {}
      try {
        e.player.setControlEnabled(!1);
      } catch {}
      try {
        document.pointerLockElement && document.exitPointerLock();
      } catch {}
      this.mirrorCamera();
      try {
        this.room = ca(e, t.logo);
      } catch (e) {
        console.warn(`[wardrobe] fitting room unavailable`, e);
      }
      (this.setTab(Lo[0]),
        (this.raf = requestAnimationFrame(() => this.tick())));
    }
    room = null;
    mirrorCamera() {
      let e = this.ctx;
      try {
        let t = e.player.object.rotation.y,
          n = e.player.position,
          r = -Math.sin(t),
          i = -Math.cos(t),
          a = Math.cos(t),
          o = -Math.sin(t);
        this.pd ||= 3;
        let s = n.y + 1;
        (this.camPos.set(
          n.x + r * this.pd + a * this.aimDx * 0.35,
          s,
          n.z + i * this.pd + o * this.aimDx * 0.35,
        ),
          this.camAt.set(
            n.x + a * this.aimDx,
            s + this.aimDy,
            n.z + o * this.aimDx,
          ),
          e.cameraRig.override(this.camPos, this.camAt));
      } catch {}
    }
    pd = 0;
    aimDy = -0.6;
    aimDx = 0;
    _v = new L();
    fitFrame() {
      let e = this.ctx,
        t = e.camera,
        n = e.player.position,
        r = this.bd.firstElementChild?.getBoundingClientRect();
      if (!r) return;
      let i = r.top > innerHeight * 0.3,
        a = i ? 1 : (2 * (r.left - 8)) / innerWidth - 1,
        o = i ? 1 - (2 * r.top) / innerHeight : -1,
        s = (e) => this._v.set(n.x, n.y + e, n.z).project(t),
        c = s(-0.02).y,
        l = s(2),
        u = l.y,
        d = l.x,
        f = o + (i ? 0.06 : 0.12),
        p = i ? 0.94 : 0.86,
        m = u - c,
        h = p - f;
      if (!(m > 0.05) || !(h > 0.2) || !(a > -0.6)) return;
      let g = Math.min(1.12, Math.max(0.9, m / h)),
        _ = (p + f) / 2 - (u + c) / 2,
        v = (-1 + a) / 2 - d;
      if (Math.abs(g - 1) < 0.01 && Math.abs(_) < 0.01 && Math.abs(v) < 0.01)
        return;
      this.pd = Math.min(7, Math.max(1.6, this.pd * g));
      let y = Math.tan(((t.fov || 60) * Math.PI) / 360);
      ((this.aimDy = Math.min(
        1,
        Math.max(-3, this.aimDy - _ * this.pd * y * 0.6),
      )),
        (this.aimDx = Math.min(
          3,
          Math.max(-3, this.aimDx + v * this.pd * y * (t.aspect || 1) * 0.6),
        )),
        this.mirrorCamera());
    }
    setTab(e) {
      ((this.tab = e),
        Lo.forEach((t, n) => this.tabs[n].classList.toggle(`on`, t === e)));
      try {
        this.tabs[Lo.indexOf(e)].scrollIntoView({
          block: `nearest`,
          inline: `nearest`,
        });
      } catch {}
      let t = (e) => this.ctx.t(e),
        n = e.slot;
      if (
        ((this.items = [...(n ? [null] : []), ...Ro(e)]),
        (this.rows.textContent = ``),
        (this.rowEls = []),
        n)
      ) {
        let e = document.createElement(`div`);
        e.className = `wshop-row`;
        let r = n === `top` || n === `bottom` || n === `shoes`;
        ((e.innerHTML = `<div class="wshop-sw" style="background:repeating-linear-gradient(45deg,#ddd 0 4px,#fff 4px 8px)"></div>
        <div class="wshop-txt"><div class="wshop-name">${Vo(t(r ? { zh: `原本的顏色`, en: `Original colours` } : { zh: `不戴`, en: `None` }))}</div>
        <div class="wshop-desc">${Vo(t(r ? { zh: `主角自己的衣服`, en: `The hero's own clothes` } : { zh: `拿下來`, en: `Take it off` }))}</div></div>`),
          e.addEventListener(`click`, (e) => {
            (e.stopPropagation(), this.select(0));
          }),
          this.rows.appendChild(e),
          this.rowEls.push(e));
      }
      this.items.forEach((n, r) => {
        if (!n) return;
        let i = document.createElement(`div`);
        i.className = `wshop-row`;
        let a = e.shelf ? `${t(ua[n.slot])} · ${t(n.desc)}` : t(n.desc);
        ((i.innerHTML = `<div class="wshop-sw" style="background:${zo(fa[n.color].hex)}"></div>
        <div class="wshop-txt"><div class="wshop-name">${Vo(t(n.name))}</div><div class="wshop-desc">${Vo(a)}</div></div><span data-tag></span>`),
          i.addEventListener(`click`, (e) => {
            (e.stopPropagation(),
              this.sel === r ? this.action() : this.select(r));
          }),
          this.rows.appendChild(i),
          this.rowEls.push(i));
      });
      let r = Ca.outfit(this.hero),
        i = this.items.findIndex((e) => (e ? r[e.slot] === e.id : !1));
      ((this.sel = -1), this.select(Math.max(0, i), !1));
    }
    slotOf(e) {
      return e ? e.slot : this.tab.slot;
    }
    select(e, t = !0) {
      if (e < 0 || e >= this.rowEls.length) return;
      (this.rowEls[this.sel]?.classList.remove(`sel`), (this.sel = e));
      let n = this.rowEls[e];
      if ((n.classList.add(`sel`), t))
        try {
          n.scrollIntoView({ block: `nearest` });
        } catch {}
      let r = this.items[e];
      ((this.trial = {
        ...Ca.outfit(this.hero),
        [this.slotOf(r)]: r ? r.id : null,
      }),
        Do(this.hero, this.trial),
        this.refresh());
    }
    refresh() {
      let e = (e) => this.ctx.t(e),
        t = Ca.outfit(this.hero);
      (this.rowEls.forEach((n, r) => {
        let i = this.items[r];
        if (!i) return;
        let a = n.querySelector(`[data-tag]`);
        t[i.slot] === i.id
          ? ((a.className = `wshop-tag wear`),
            (a.textContent = e({ zh: `穿著中`, en: `Wearing` })))
          : Ca.owns(i.id)
            ? ((a.className = `wshop-tag`),
              (a.textContent = e({ zh: `已擁有`, en: `Owned` })))
            : ((a.className = `wshop-price`),
              (a.textContent = this.fmt(i.price)));
      }),
        (this.cash.innerHTML = `${Vo(e({ zh: `現金`, en: `Cash` }))} <b>${Vo(this.fmt(this.ctx.state.money))}</b>`));
      let n = this.items[this.sel] ?? null,
        r = t[this.slotOf(n)] ?? null;
      if (((this.act.disabled = !1), this.act.classList.remove(`alt`), !n))
        ((this.act.textContent = e(
          r
            ? { zh: `拿下來`, en: `Take off` }
            : { zh: `穿著中`, en: `Wearing` },
        )),
          (this.act.disabled = !r),
          this.act.classList.add(`alt`));
      else if (r === n.id)
        ((this.act.textContent = e({ zh: `拿下來`, en: `Take off` })),
          this.act.classList.add(`alt`));
      else if (Ca.owns(n.id))
        ((this.act.textContent = e({ zh: `穿上`, en: `Wear` })),
          this.act.classList.add(`alt`));
      else {
        let t = this.fmt(n.price);
        ((this.act.textContent = e({
          zh: i.on ? i.t(`購買 ${t}`, `購入 ${t}`) : `購買 ${t}`,
          en: `Buy ${t}`,
        })),
          (this.act.disabled = this.ctx.state.money < n.price),
          this.act.disabled &&
            (this.act.textContent = e({
              zh: i.on
                ? i.t(`錢不夠（${t}）`, `お金が足りない（${t}）`)
                : `錢不夠（${t}）`,
              en: `Not enough cash (${t})`,
            })));
      }
    }
    action() {
      let e = this.ctx,
        t = this.items[this.sel] ?? null,
        n = this.slotOf(t),
        r = Ca.outfit(this.hero)[n] ?? null;
      if (!t || r === t.id) {
        if (!r) return;
        (Ca.wear(this.hero, n, null), this.sfx(`ui_click`));
      } else if (Ca.owns(t.id))
        (Ca.wear(this.hero, n, t.id), this.sfx(`ui_click`));
      else {
        if (e.state.money < t.price) {
          this.sfx(`ui_back`);
          return;
        }
        (e.state.addMoney(-t.price, `shop`),
          Ca.give(t.id),
          Ca.wear(this.hero, n, t.id),
          this.sfx(`money`));
        try {
          e.events.emit(`shop:purchase`, {
            kind: `clothing`,
            item: t.id,
            poiId: `uniglow`,
            price: t.price,
          });
        } catch {}
        try {
          e.ui.notify(
            {
              zh: i.on
                ? i.t(
                    `買了${t.name.zh}，已經穿上`,
                    `${i.jz(t.name.zh)}を買って、さっそく着た`,
                  )
                : `買了${t.name.zh}，已經穿上`,
              en: `Bought the ${t.name.en} and put it on`,
            },
            { kind: `good`, duration: 2.6 },
          );
        } catch {}
      }
      ((this.trial = { ...Ca.outfit(this.hero) }),
        Do(this.hero, this.trial),
        this.refresh());
    }
    sfx(e) {
      try {
        this.ctx.audio.play(e, { ui: !0 });
      } catch {}
    }
    move(e) {
      let t = this.rowEls.length;
      t &&
        (this.select((Math.max(0, this.sel) + e + t) % t),
        this.sfx(`ui_hover`));
    }
    moveTab(e) {
      let t = Lo.indexOf(this.tab);
      (this.setTab(Lo[(t + e + Lo.length) % Lo.length]), this.sfx(`ui_hover`));
    }
    onKey(e) {
      if (gt(e.target)) return;
      let t = !0;
      (e.code === `ArrowUp` || e.code === `KeyW`
        ? this.move(-1)
        : e.code === `ArrowDown` || e.code === `KeyS`
          ? this.move(1)
          : e.code === `ArrowLeft` || e.code === `KeyA`
            ? this.moveTab(-1)
            : e.code === `ArrowRight` || e.code === `KeyD`
              ? this.moveTab(1)
              : /^Digit[1-9]$/.test(e.code)
                ? this.setTab(Lo[Number(e.code.slice(-1)) - 1])
                : e.code === `Enter` || e.code === `Space`
                  ? this.action()
                  : (e.code === `Escape` || e.code === `KeyE`) &&
                      performance.now() - this.openedAt > 150
                    ? this.close()
                    : (t = !1),
        t && (e.preventDefault(), e.stopPropagation()));
    }
    tick() {
      if (!this.bd.isConnected) return;
      try {
        (this.room?.update(), this.fitFrame());
      } catch {}
      let e = performance.now(),
        t = Math.min(0.1, (e - this.lastT) / 1e3);
      this.lastT = e;
      let n = this.ctx.input;
      try {
        if (n.device === `gamepad` && e - this.openedAt > 220) {
          let e = n.axis(`moveY`),
            r = e > 0.55 ? -1 : +(e < -0.55);
          if (
            (r === this.stickDir
              ? r &&
                ((this.stickT += t),
                this.stickT > 0.32 && ((this.stickT = 0.2), this.move(r)))
              : ((this.stickDir = r), (this.stickT = 0), r && this.move(r)),
            n.pressed(`phone`))
          )
            this.move(-1);
          else if (n.pressed(`lookBehind`)) this.move(1);
          else if (n.pressed(`weaponNext`)) this.moveTab(1);
          else if (n.pressed(`jump`)) this.action();
          else if (n.pressed(`sprint`) || n.pressed(`pause`))
            return this.close();
        }
      } catch {}
      this.raf = requestAnimationFrame(() => this.tick());
    }
    close(e = !1) {
      (Po === this && (Po = null),
        cancelAnimationFrame(this.raf),
        window.removeEventListener(`keydown`, this.keyH, !0),
        this.bd.remove(),
        Do(this.hero, null));
      let t = this.ctx;
      try {
        this.room?.close();
      } catch {}
      this.room = null;
      try {
        t.cameraRig.override(null);
      } catch {}
      try {
        t.ui.setExternalMenu?.(!1);
      } catch {}
      try {
        t.player.setControlEnabled(!0);
      } catch {}
      e || this.o.onClose?.();
    }
  };
