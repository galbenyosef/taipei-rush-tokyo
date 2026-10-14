// tokyo/assets/tokyo-BZXVhKTn 22 — kit
// Lines 8525-9130 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
var na = { zh: `抖內支持`, en: `Support development` },
  ra = class {
    kit;
    phase = `loading`;
    config = { enabled: !1 };
    detail;
    status;
    button;
    request = null;
    attempt = null;
    life = new AbortController();
    constructor(e, t) {
      ((this.kit = e), t.classList.add(`support-body`));
      let n = B(`div`, `support-intro`, t);
      ((B(`div`, `support-heart`, n).innerHTML = z.heart),
        e.bind(B(`h2`, `support-heading`, n), {
          zh: `讓這座城市，繼續長大。`,
          en: `Keep this city growing.`,
        }),
        e.bind(B(`p`, `support-copy`, n), {
          zh: `每一條街、每一次更新，都需要時間與投入。你的支持，會用在遊戲開發與伺服器維護。`,
          en: `Every street and every update takes time. Your support helps build the game and keep its servers running.`,
        }));
      let r = B(`div`, `support-uses`, t);
      for (let [t, n] of [
        [`settings`, { zh: `持續開發`, en: `Development` }],
        [`globe`, { zh: `伺服器維護`, en: `Server upkeep` }],
      ]) {
        let i = B(`div`, `support-use`, r);
        ((B(`span`, ``, i).innerHTML = z[t]), e.bind(B(`span`, ``, i), n));
      }
      ((this.detail = B(`p`, `support-minimum`, t)),
        (this.status = B(`p`, `support-status`, t)),
        this.status.setAttribute(`role`, `status`),
        this.status.setAttribute(`aria-live`, `polite`),
        (this.button = B(`button`, `support-cta`, t)),
        (this.button.type = `button`),
        (this.button.dataset.nav = `1`),
        this.button.addEventListener(
          `click`,
          () => {
            this.phase === `unavailable` ? this.refresh() : this.checkout();
          },
          { signal: this.life.signal },
        ),
        e.bind(B(`p`, `support-footnote`, t), {
          zh: `自由金額 · 單次支持 · 安全付款由 Stripe 處理`,
          en: `Your amount · One-time support · Secure checkout by Stripe`,
        }),
        e.bind(B(`p`, `support-free`, t), {
          zh: `謝謝你來玩。每一份支持，我們都很珍惜。`,
          en: `Thanks for playing. Every contribution means a lot.`,
        }),
        e.onLang(() => this.render()),
        this.life.signal.addEventListener(`abort`, () => this.close(), {
          once: !0,
        }),
        this.render());
    }
    render() {
      let e = this.kit.lang,
        t = (e, t) => this.kit.t({ zh: e, en: t }),
        r =
          this.config.enabled &&
          this.config.currency &&
          typeof this.config.minimum == `number`
            ? new Intl.NumberFormat(
                e === `zh` ? `zh-TW` : e === `ja` ? `ja-JP` : `en-US`,
                {
                  style: `currency`,
                  currency: this.config.currency,
                  currencyDisplay: `code`,
                },
              ).format(this.config.minimum / 100)
            : ``;
      ((this.detail.textContent = r
        ? t(
            n.on
              ? n.t(`從 ${r} 起，金額由你決定。`, `${r}から、金額はご自由に。`)
              : `從 ${r} 起，金額由你決定。`,
            `From ${r}. Choose any amount on Stripe.`,
          )
        : t(`金額由你決定。`, `An amount that feels right to you.`)),
        (this.status.textContent =
          this.phase === `loading`
            ? t(`正在準備支持頁…`, `Getting things ready…`)
            : this.phase === `opening`
              ? t(
                  `即將開啟 Stripe 安全付款…`,
                  `Opening secure Stripe checkout…`,
                )
              : this.phase === `unavailable`
                ? t(
                    `支持功能暫時無法使用，你可以先繼續玩。`,
                    `Support is temporarily unavailable. You can keep playing.`,
                  )
                : this.phase === `error`
                  ? t(
                      `付款頁沒有開啟，請再試一次。`,
                      `Checkout did not open. Please try again.`,
                    )
                  : ``),
        (this.button.textContent =
          this.phase === `opening`
            ? t(`開啟中…`, `Opening…`)
            : this.phase === `unavailable`
              ? t(`重新載入`, `Try again`)
              : this.phase === `error`
                ? t(`重新開啟付款頁`, `Try checkout again`)
                : t(`支持臺北狂飆 ↗`, `Support Taipei Rush ↗`)),
        (this.button.disabled =
          this.phase === `loading` || this.phase === `opening`),
        this.button.setAttribute(
          `aria-busy`,
          String(this.phase === `opening`),
        ));
    }
    async refresh() {
      this.close();
      let e = (this.request = new AbortController()),
        t = setTimeout(() => e.abort(), 12e3);
      ((this.phase = `loading`), this.render());
      try {
        let t = await fetch(`/api/support/config`, { signal: e.signal }),
          n = await t.json();
        if (this.request !== e) return;
        ((this.config = n),
          (this.phase = t.ok && n.enabled ? `ready` : `unavailable`));
      } catch {
        if (this.request !== e) return;
        this.phase = `unavailable`;
      } finally {
        clearTimeout(t);
      }
      this.request === e && ((this.request = null), this.render());
    }
    async checkout() {
      if (![`ready`, `error`].includes(this.phase)) return;
      let e = this.kit.lang === `zh` ? `zh` : `en`;
      (!this.attempt || this.attempt.lang !== e) &&
        (this.attempt = { id: crypto.randomUUID(), lang: e });
      let t = (this.request = new AbortController()),
        n = setTimeout(() => t.abort(), 2e4);
      ((this.phase = `opening`), this.render(), this.kit.sfx(`ui_confirm`));
      try {
        let n = await fetch(`/api/support/checkout`, {
            method: `POST`,
            headers: { "Content-Type": `application/json` },
            signal: t.signal,
            body: JSON.stringify({ lang: e, requestId: this.attempt.id }),
          }),
          r = await n.json();
        if (this.request !== t) return;
        if (!n.ok || typeof r.url != `string`)
          throw Error(`checkout_unavailable`);
        let i = new URL(r.url);
        if (i.protocol !== `https:` || i.hostname !== `checkout.stripe.com`)
          throw Error(`invalid_url`);
        location.assign(i.href);
      } catch {
        this.request === t && ((this.phase = `error`), this.render());
      } finally {
        (clearTimeout(n), this.request === t && (this.request = null));
      }
    }
    close() {
      (this.request?.abort(), (this.request = null));
    }
  },
  ia = class {
    kit;
    nav;
    hooks;
    el;
    tabs;
    tabBtns = {};
    tab = `home`;
    scope;
    info;
    settings;
    controls;
    support;
    feedbackMounted = !1;
    navCol;
    foot;
    fsBtn;
    installBtn;
    backBtn;
    footDevice = null;
    content;
    isOpen = !1;
    constructor(e, t, n) {
      ((this.kit = e),
        (this.nav = t),
        (this.hooks = n),
        (this.el = B(`div`, `pm`, e.menuLayer)),
        B(`div`, `pm-bg`, this.el));
      let r = B(`div`, `pm-top`, this.el),
        i = B(`div`, `pm-logo`, r);
      ((i.innerHTML = Ur(`pm-mark`)),
        e.region.cityBadge &&
          e.dual(B(`div`, `tr-city pm-city`, r), e.region.cityBadge),
        e.dual(B(`div`, `pm-paused`, r), J.paused),
        (this.info = B(`div`, `pm-info`, r)));
      let a = B(`div`, `pm-body`, this.el);
      ((this.navCol = B(`div`, `pm-nav`, a)),
        (this.content = B(`div`, `pm-content`, a)),
        (this.backBtn = B(`button`, `pm-back icon-btn`, this.content)),
        (this.backBtn.type = `button`),
        (this.backBtn.innerHTML = z.chevronL),
        e.bindTitle(this.backBtn, J.back),
        this.backBtn.addEventListener(`click`, (t) => {
          (t.stopPropagation(), e.sfx(`ui_back`), this.setTab(`home`));
        }));
      let o = (t, n, r, i) => {
        let a = Z(e, this.navCol, t, r, { icon: n, cls: `pm-btn` });
        return (i && (this.tabBtns[i] = a), a);
      };
      (o(J.resume, `play`, () => this.hooks.resume()),
        o(J.map, `map`, () => this.hooks.openMap()),
        (this.tabBtns.support = Z(
          e,
          this.navCol,
          na,
          () => this.setTab(`support`, !0),
          { icon: `heart`, cls: `pm-btn pm-support`, dual: !1 },
        )),
        o(
          J.settings,
          `settings`,
          () => this.setTab(`settings`, !0),
          `settings`,
        ),
        o(J.controls, `gamepad`, () => this.setTab(`controls`, !0), `controls`),
        o(J.stats, `stats`, () => this.setTab(`stats`, !0), `stats`),
        x &&
          o(
            { zh: `意見回饋`, en: `Feedback`, ja: `ご意見・不具合報告` },
            `mail`,
            () => this.setTab(`feedback`, !0),
            `feedback`,
          ),
        o(
          { zh: `最近訊息`, en: `Messages` },
          `phone`,
          () => this.setTab(`log`, !0),
          `log`,
        ).classList.add(`pm-only-compact`),
        (this.fsBtn = o(Y.fullscreen, `fullscreen`, () => {
          Li() === `ios-guide` ? Ki(e, t, !0) : Mi() ? Pi() : Ni();
        })),
        this.fsBtn.classList.add(`pm-fs`),
        Ii(() => this.renderFs()),
        (this.installBtn = o(
          { zh: `安裝到主畫面`, en: `Install app` },
          `plus`,
          () => void ki(),
        )),
        this.installBtn.classList.toggle(`hidden`, !Di()),
        Oi(() => this.installBtn.classList.toggle(`hidden`, !Di())),
        o({ zh: `回到主選單`, en: `Return to title` }, `chevronL`, () => {
          yi(
            e,
            t,
            {
              zh: `回到主選單？進度會自動存檔。`,
              en: `Return to the title screen? Your progress is saved.`,
            },
            { zh: `回到主選單`, en: `Return to title` },
            () => this.hooks.toTitle?.(),
            !1,
          );
        }).classList.add(`pm-title`),
        (this.tabs = {
          home: B(`div`, `pm-tab pm-home`, this.content),
          settings: B(`div`, `pm-tab`, this.content),
          controls: B(`div`, `pm-tab`, this.content),
          stats: B(`div`, `pm-tab pm-stats`, this.content),
          support: B(`div`, `pm-tab`, this.content),
          feedback: B(`div`, `pm-tab`, this.content),
          log: B(`div`, `pm-tab pm-logtab`, this.content),
        }),
        (this.settings = vi(e, this.tabs.settings, {
          openMap: () => this.hooks.openMap(),
          reset: () => {
            yi(e, t, J.resetConfirm, J.reset, () => {
              yi(
                e,
                t,
                {
                  zh: `真的要刪除所有進度嗎？這個動作無法復原。`,
                  en: `Really erase everything? This cannot be undone.`,
                },
                { zh: `永久刪除`, en: `Erase forever` },
                () => {
                  try {
                    (e.ctx.state.reset(), e.ctx.state.saveNow());
                  } catch {}
                  location.reload();
                },
              );
            });
          },
        })),
        (this.controls = ta(e, this.tabs.controls)),
        (this.support = new ra(e, this.tabs.support)),
        (this.foot = B(`div`, `pm-foot`, this.el)),
        e.onLang(() => {
          ((this.footDevice = null),
            this.buildFoot(),
            this.renderFs(),
            this.isOpen &&
              (this.renderDynamic(),
              this.tab === `stats` && this.renderStats()));
        }),
        (this.scope = {
          root: this.el,
          onBack: () => {
            let e = this.nav.focused;
            if (this.kit.compact && this.tab !== `home`) {
              (this.kit.sfx(`ui_back`), this.setTab(`home`));
              return;
            }
            if (this.tab !== `home` && e && !this.navCol.contains(e)) {
              (this.nav.focus(this.tabBtns[this.tab] ?? null),
                this.kit.sfx(`ui_back`));
              return;
            }
            this.hooks.resume();
          },
          onKey: (e) =>
            e.code === `KeyP` && !e.repeat && (this.hooks.resume(), !0),
          onPad: (e) => e === 9 && (this.hooks.resume(), !0),
          initial: () => this.navCol.firstElementChild,
        }),
        this.renderFs());
    }
    renderFs() {
      let e = Li(),
        t = Mi();
      this.fsBtn.classList.toggle(`hidden`, e === `none` && !t);
      let n = this.fsBtn.querySelector(`.mbtn-label`),
        r = this.fsBtn.querySelector(`.mbtn-ic`);
      (n &&
        this.kit.renderDual(
          n,
          e === `ios-guide`
            ? Y.fullscreenIos
            : t
              ? Y.exitFullscreen
              : Y.fullscreen,
        ),
        r &&
          (r.innerHTML =
            e === `ios-guide` ? z.share : t ? z.fullscreenExit : z.fullscreen));
    }
    device() {
      let e = this.kit.ctx.input.device;
      return this.kit.touch && e !== `gamepad` ? `touch` : e;
    }
    buildFoot() {
      let e = this.device();
      if (e === this.footDevice) return;
      this.footDevice = e;
      let t = this.foot;
      t.textContent = ``;
      let n = this.kit,
        r = (e, r, i = `kc`) => {
          let a = B(`span`, `pm-hint`, t);
          (i === `pad` ? Cn(a, e) : B(`span`, i, a, e),
            B(`span`, ``, a, n.t(r)));
        };
      e === `gamepad`
        ? (r(`A`, J.select, `pad`),
          r(`B`, J.back, `pad`),
          r(`☰`, J.resume, `pad`))
        : e === `kbm` &&
          (r(`Enter`, J.select, `kc kc-wide`),
          r(`Esc`, J.back, `kc kc-wide`),
          r(`P`, J.resume, `kc`));
    }
    open(e = `home`) {
      ((this.isOpen = !0),
        this.el.classList.add(`show`),
        (this.footDevice = null),
        this.buildFoot(),
        this.renderFs(),
        this.settings.refresh(),
        this.controls.sync(),
        this.renderDynamic(),
        this.nav.push(this.scope),
        this.setTab(e, e !== `home`));
    }
    close() {
      this.isOpen &&
        ((this.isOpen = !1),
        this.support.close(),
        this.el.classList.remove(`show`),
        this.nav.pop(this.scope),
        setTimeout(() => {
          this.isOpen || Xe(this.snapCv);
        }, 400));
    }
    snapCv = null;
    setTab(e, t = !1) {
      (this.tab === `support` && e !== `support` && this.support.close(),
        (this.tab = e),
        (this.el.dataset.tab = e));
      for (let t of Object.keys(this.tabs))
        this.tabs[t].classList.toggle(`show`, t === e);
      for (let t of Object.keys(this.tabBtns))
        this.tabBtns[t].classList.toggle(`active`, t === e);
      if (
        (e === `stats` && this.renderStats(),
        e === `settings` && this.settings.refresh(),
        e === `controls` && this.controls.sync(),
        e === `support` && this.support.refresh(),
        e === `feedback` &&
          x &&
          !this.feedbackMounted &&
          ((this.feedbackMounted = !0), ne(this.tabs.feedback, this.kit)),
        e === `log` && this.renderLog(this.tabs.log, 14),
        (this.content.scrollTop = 0),
        t)
      ) {
        let t =
          this.tabs[e].querySelector(`.cg-tab.on`) ??
          this.tabs[e].querySelector(`[data-nav]`);
        t && this.nav.focus(t);
      } else
        this.tabBtns[e]
          ? this.nav.focus(this.tabBtns[e])
          : e === `home` && this.nav.focus(this.navCol.firstElementChild);
    }
    renderDynamic() {
      let e = this.kit,
        t = e.ctx,
        n = 12,
        r = `clear`;
      try {
        ((n = t.env.hour), (r = t.env.weather));
      } catch {}
      let i = t.player.position,
        a = t.plan.districtAt(i.x, i.z);
      this.info.textContent = ``;
      let o = (e, t = ``) => B(`span`, `pm-chip ${t}`, this.info, e),
        s = ``;
      try {
        s = t.player.character === `wen` ? e.t(J.wenName) : e.t(J.jieName);
      } catch {}
      (s && o(s, `who`),
        o(`${Ye(n)} · ${e.t(Rn[r] ?? J.wClear)} ${ur(n, r)}°`),
        o(D(t.state.money), `money`));
      let c = this.tabs.home;
      c.textContent = ``;
      let l = B(`div`, `pm-card`, c),
        u = B(`div`, `pm-card-text`, l);
      (B(`div`, `pm-card-kicker`, u, e.t({ zh: `目前位置`, en: `You are in` })),
        B(`div`, `pm-card-title`, u, e.t(a.name)),
        B(`div`, `pm-card-alt`, u, e.alt(a.name).toUpperCase()));
      let d = rn(t, i.x, i.z);
      if (d && d.zh !== a.name.zh) {
        let t = B(`div`, `pm-card-where`, u);
        ((t.innerHTML = z.pin),
          B(`span`, ``, t, e.t(d)),
          B(`em`, ``, t, e.alt(d)));
      }
      let f = (e.region.taglines ?? In)[a.id];
      if ((f && B(`div`, `pm-card-tag`, u, e.t(f)), this.hooks.snapshot)) {
        let t = B(`button`, `pm-mini`, l);
        ((t.type = `button`), (t.dataset.nav = `1`));
        let n = e.t({ zh: `開啟地圖`, en: `Open map` });
        ((t.title = n), t.setAttribute(`aria-label`, n));
        let r = B(`canvas`, ``, t);
        (Xe(this.snapCv), (this.snapCv = r));
        let i = Math.min(2, window.devicePixelRatio || 1);
        ((r.width = r.height = Math.round(200 * i)),
          t.addEventListener(`click`, (t) => {
            (t.stopPropagation(), e.sfx(`ui_click`), this.hooks.openMap());
          }));
        try {
          this.hooks.snapshot(r);
        } catch (e) {
          console.warn(`[ui] snapshot failed`, e);
        }
      }
      let p = null;
      try {
        p = t.missions.active;
      } catch {}
      if (p) {
        let t = B(`div`, `pm-mission`, c),
          n = B(`div`, `pm-mission-row`, t),
          r = B(`div`, `pm-mission-tx`, n);
        (B(
          `div`,
          `pm-card-kicker`,
          r,
          e.t(
            p.status === `travel`
              ? Y.onTheWay
              : { zh: `進行中的任務`, en: `Current job` },
          ),
        ),
          B(`div`, `pm-mission-title`, r, e.t(p.title)),
          this.hooks.abandon &&
            Z(
              e,
              n,
              p.status === `travel`
                ? { zh: `取消任務`, en: `Cancel job` }
                : Y.abandon,
              () => {
                yi(e, this.nav, Y.abandonConfirm, Y.abandonOk, () =>
                  this.hooks.abandon?.(),
                );
              },
              { icon: `flag`, cls: `pm-abandon`, dual: !1 },
            ),
          B(`div`, `pm-mission-desc`, t, e.t(p.description)));
      }
      let m = 0;
      try {
        m = t.missions.blessing ?? 0;
      } catch {}
      (m > 0 &&
        B(
          `div`,
          `pm-bless`,
          c,
          `${e.t(e.region.blessing ?? Y.blessing)} · ${Math.ceil(m / 60)} min`,
        ),
        this.renderLog(c, 8));
    }
    renderLog(e, t) {
      let n = this.kit,
        r = this.hooks.history?.() ?? [];
      if ((e === this.tabs.log && (e.textContent = ``), !r.length)) {
        e === this.tabs.log &&
          B(
            `div`,
            `pm-empty`,
            e,
            n.t({ zh: `還沒有訊息`, en: `No messages yet` }),
          );
        return;
      }
      let i = B(`div`, `pm-log`, e);
      B(
        `div`,
        `pm-card-kicker`,
        i,
        n.t({ zh: `最近訊息`, en: `Recent messages` }),
      );
      for (let e = r.length - 1; e >= Math.max(0, r.length - t); e--) {
        let t = r[e],
          a = B(`div`, `pm-log-row k-${t.kind}`, i);
        ((a.dataset.nav = `1`), B(`span`, `pm-log-time`, a, Ye(t.hour)));
        let o = B(`span`, `pm-log-text`, a);
        (t.speaker &&
          B(`b`, ``, o, `${n.t(t.speaker)}${n.lang === `en` ? `: ` : `：`}`),
          o.appendChild(
            document.createTextNode(
              n
                .t(t.msg)
                .replace(/\{(\w+)\}|\{[kp]:([^}]+)\}/g, (e, t, n) => n ?? ``),
            ),
          ));
      }
    }
    renderStats() {
      let e = this.kit,
        t = e.ctx,
        n = t.state.data,
        r = this.tabs.stats;
      ((r.textContent = ``), ri(e, r));
      let i = B(`div`, `stat-grid`, r),
        a = (t, n, r = !1) => {
          let a = B(`div`, `stat-cell${r ? ` big` : ``}`, i);
          ((a.dataset.nav = `1`), B(`span`, ``, a, e.t(t)), B(`b`, ``, a, n));
        },
        o = 0;
      try {
        o = t.missions.list().length;
      } catch {}
      (a(J.money, D(t.state.money), !0),
        e.region.progress
          ? e.region.progress(o, a)
          : (a(
              J.missionsDone,
              `${n.completedMissions.length}${o ? ` / ` + o : ``}`,
            ),
            a(J.collectibles, `${n.collectibles.length} / 30`)));
      for (let t of Object.keys(zn)) {
        let r = n.stats[t];
        if (r == null || t === `luckyCats`) continue;
        let i = Bn(t, r);
        i != null && a(e.region.statLabels?.[t] ?? zn[t], i);
      }
    }
    update() {
      this.isOpen &&
        this.device() !== this.footDevice &&
        (this.buildFoot(), this.controls.sync());
    }
  };
