// tokyo__assets__tokyo-BZXVhKTn 17 — kit
// Lines 6715-7485 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
var oi = {
    BL: `#0070bd`,
    R: `#e3002c`,
    G: `#008659`,
    O: `#f8b61c`,
    BR: `#c48c31`,
  },
  si = {
    BL: { zh: `板南線`, en: `Bannan Line` },
    R: { zh: `淡水信義線`, en: `Tamsui–Xinyi Line` },
    G: { zh: `松山新店線`, en: `Songshan–Xindian Line` },
    O: { zh: `中和新蘆線`, en: `Zhonghe–Xinlu Line` },
    BR: { zh: `文湖線`, en: `Wenhu Line` },
  },
  ci = class {
    kit;
    nav;
    gps;
    hooks;
    el;
    scrim;
    screen;
    home;
    app;
    appTitle;
    appBody;
    stopSummary;
    statusClock;
    wClock;
    wDate;
    wWeather;
    scope;
    current = null;
    detail = null;
    misView = {
      tab: W().misTab ?? `all`,
      district: W().misDistrict ?? ``,
      open: new Set(),
    };
    listScroll = 0;
    isOpen = !1;
    acc = 0;
    appGeneration = 0;
    disposeBag;
    bagBtn;
    paintBagBadge() {
      let e = this.bagBtn;
      if (!e) return;
      e.querySelector(`.ph-new`)?.remove();
      let t = St().length;
      if (!t && W().bagSeen) return;
      let n = B(`span`, `ph-new`, e);
      ((n.textContent = t
        ? String(Math.min(t, 99))
        : this.kit.t({ zh: `新`, en: `NEW`, ja: `NEW` })),
        n.setAttribute(`aria-hidden`, `true`),
        n.setAttribute(
          `style`,
          `position:absolute;top:-0.3em;right:0.1em;min-width:1.6em;padding:0.1em 0.45em;border-radius:1em;background:#ff3b30;color:#fff;font:800 0.72em/1.4 var(--tr-font,system-ui);text-align:center;box-shadow:0 0 0 0.15em #0e1016;pointer-events:none`,
        ));
    }
    clearBag() {
      (this.appGeneration++, this.disposeBag?.(), (this.disposeBag = void 0));
    }
    constructor(e, t, n, r) {
      ((this.kit = e),
        (this.nav = t),
        (this.gps = n),
        (this.hooks = r),
        (this.scrim = B(`div`, `ph-scrim`, e.menuLayer)),
        this.scrim.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.isOpen && this.hooks.close());
        }),
        (this.el = B(`div`, `ph-wrap`, e.menuLayer)));
      let i = B(`div`, `phone`, this.el),
        a = B(`button`, `ph-close icon-btn`, this.el);
      ((a.type = `button`),
        (a.innerHTML = z.close),
        e.bindTitle(a, J.mapClose),
        a.addEventListener(`click`, (t) => {
          (t.stopPropagation(),
            e.sfx(`ui_back`),
            this.isOpen && this.hooks.close());
        }),
        B(`div`, `ph-notch`, i),
        (this.screen = B(`div`, `ph-screen`, i)));
      let o = B(`div`, `ph-status`, this.screen);
      this.statusClock = B(`span`, `ph-sclock`, o);
      let s = B(`span`, `ph-sicons`, o);
      ((s.innerHTML = `<b>5G</b><i class="sig"><i></i><i></i><i></i><i></i></i><i class="bat"><i></i></i>`),
        (this.home = B(`div`, `ph-page ph-home`, this.screen)));
      let c = B(`div`, `ph-widget`, this.home);
      ((this.wClock = B(`div`, `ph-wclock`, c)),
        (this.wDate = B(`div`, `ph-wdate`, c)),
        (this.wWeather = B(`div`, `ph-wweather`, c)));
      let l = B(`div`, `ph-apps`, this.home);
      _t(() => this.paintBagBadge());
      for (let t of ii) {
        let n = B(`button`, `ph-app-btn`, l);
        ((n.type = `button`), (n.dataset.nav = `1`), (n.dataset.app = t.id));
        let r = B(`span`, `ph-app-ic`, n);
        if (
          ((r.style.background = t.bg),
          (r.innerHTML = z[t.icon]),
          e.bind(
            B(`span`, `ph-app-name`, n),
            (t.id === `mrt` && e.region.transit?.app) || t.msg,
          ),
          t.id === `account` && S(n, e.ctx),
          t.id === `bag` &&
            ((this.bagBtn = n),
            (n.style.position = `relative`),
            this.paintBagBadge()),
          ai && t.id === `stocks` && !W().stocksSeen)
        ) {
          n.style.position = `relative`;
          let t = B(`span`, `ph-new`, n);
          (e.bind(t, { zh: `新`, en: `NEW` }),
            t.setAttribute(`aria-hidden`, `true`),
            t.setAttribute(
              `style`,
              `position:absolute;top:-0.3em;right:0.1em;min-width:1.6em;padding:0.1em 0.45em;border-radius:1em;background:#ff3b30;color:#fff;font:800 0.72em/1.4 var(--tr-font,system-ui);text-align:center;box-shadow:0 0 0 0.15em #0e1016;pointer-events:none`,
            ));
        }
        n.addEventListener(`click`, (n) => {
          (n.stopPropagation(), e.sfx(`ui_click`), this.openApp(t.id));
        });
      }
      let u = B(`div`, `ph-dock`, this.home),
        d = e.region.cityBadge;
      (e.bind(
        u,
        d
          ? { zh: `${Nr.name.zh} · ${d.zh}`, en: `${Nr.name.en} · ${d.en}` }
          : {
              zh: `${Nr.name.zh} · ${Nr.tagline.zh}`,
              en: `${Nr.name.en} · ${Nr.tagline.en}`,
              ja: `${Nr.name.ja} · ${Nr.tagline.ja}`,
            },
      ),
        (this.app = B(`div`, `ph-page ph-appview`, this.screen)));
      let f = B(`div`, `ph-head`, this.app),
        p = B(`button`, `ph-back`, f);
      ((p.type = `button`),
        (p.dataset.nav = `1`),
        (p.innerHTML = z.chevronL),
        e.bindTitle(p, J.back),
        p.addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.back());
        }),
        (this.appTitle = B(`div`, `ph-title`, f)),
        (this.appBody = B(`div`, `ph-body`, this.app)),
        B(`div`, `ph-homebar`, this.screen),
        (this.scope = {
          root: i,
          onBack: () => this.back(),
          onKey: (e) =>
            e.code === `KeyT` && !e.repeat && (this.hooks.close(), !0),
          initial: () =>
            this.current
              ? (this.appBody.querySelector(`[data-nav]`) ?? p)
              : l.firstElementChild,
        }),
        e.onLang(() => {
          this.isOpen &&
            (this.refreshWidget(),
            this.current === `friends` || this.current === `inbox`
              ? (this.appTitle.textContent = e.t(
                  ii.find((e) => e.id === this.current).msg,
                ))
              : this.current && this.renderApp());
        }));
    }
    open(e) {
      (this.clearBag(),
        this.stopSocial(),
        (this.isOpen = !0),
        (this.current = null),
        (this.detail = null),
        this.home.classList.add(`show`),
        this.app.classList.remove(`show`),
        this.el.classList.add(`show`),
        this.scrim.classList.add(`show`),
        this.refreshWidget(),
        this.nav.push(this.scope),
        this.kit.sfx(`phone_open`),
        this.stopSummary?.(),
        (this.stopSummary = h(this.home, this.kit.ctx)),
        e && this.openApp(e));
    }
    close() {
      this.isOpen &&
        ((this.isOpen = !1),
        this.clearBag(),
        this.stopSocial(),
        this.stopSummary?.(),
        (this.stopSummary = void 0),
        this.el.classList.remove(`show`),
        this.scrim.classList.remove(`show`),
        this.nav.pop(this.scope),
        setTimeout(() => {
          this.isOpen || Xe(this.snapCv);
        }, 400));
    }
    setZ(e) {
      let t = String(e);
      this.el.style.zIndex !== t &&
        ((this.el.style.zIndex = t), (this.scrim.style.zIndex = t));
    }
    snapCv = null;
    back() {
      if ((this.kit.sfx(`ui_back`), this.detail)) {
        ((this.detail = null),
          this.renderApp(!0),
          (this.appBody.scrollTop = this.listScroll));
        return;
      }
      if (this.current) {
        (this.clearBag(),
          this.stopSocial(),
          (this.current = null),
          this.app.classList.remove(`show`),
          this.home.classList.add(`show`),
          this.paintBagBadge(),
          this.focusFirst(this.home));
        return;
      }
      this.hooks.close();
    }
    focusFirst(e) {
      let t = e.querySelector(`[data-nav]`);
      this.nav.focus(t);
    }
    openApp(e) {
      if (
        (e === `bag` && !W().bagSeen && G({ bagSeen: !0 }),
        !(
          ai &&
          e === `stocks` &&
          (W().stocksSeen ||
            (G({ stocksSeen: !0 }),
            this.home.querySelector(`[data-app="stocks"] .ph-new`)?.remove()),
          this.current === `stocks` && this.isOpen)
        ))
      ) {
        if (e === `account`) {
          ee(
            this.kit.ctx,
            this.home.querySelector(`[data-app="account"]`) ?? void 0,
          );
          return;
        }
        switch (e) {
          case `map`:
            this.hooks.openMap();
            return;
          case `settings`:
            this.hooks.openSettings();
            return;
          case `help`:
            this.hooks.openHelp();
            return;
          case `camera`:
            this.hooks.photoMode();
            return;
        }
        (this.clearBag(),
          (this.current = e),
          (this.detail = null),
          this.home.classList.remove(`show`),
          this.app.classList.add(`show`),
          this.renderApp());
      }
    }
    stopSocial() {
      (this.stopSocialApp?.(), (this.stopSocialApp = void 0));
    }
    renderApp(t = !1, n) {
      this.stopSocial();
      let r = this.current;
      if (!r) return;
      this.clearBag();
      let i = this.appGeneration,
        a = this.kit,
        o = this.appBody,
        s = o.scrollTop;
      ((o.textContent = ``), (o.scrollTop = 0));
      let c = ii.find((e) => e.id === r);
      if (
        ((this.appTitle.textContent = a.t(
          (r === `mrt` && a.region.transit?.app) || c.msg,
        )),
        (this.app.dataset.app = r),
        r === `stocks` && ai)
      )
        ((o.textContent = a.t({
          zh: `正在連線至台股市場…`,
          en: `Connecting to the stock market…`,
        })),
          e(
            async () => {
              let { mountMarket: e } = await import(`./market-l-6OeMtj.js`);
              return { mountMarket: e };
            },
            __vite__mapDeps([16, 6, 5, 4, 3, 7, 8, 17, 18, 19, 20, 21, 22, 23]),
          )
            .then(({ mountMarket: e }) => {
              this.isOpen &&
                this.current === `stocks` &&
                i === this.appGeneration &&
                (this.disposeBag = e(o, a));
            })
            .catch(() => {
              i === this.appGeneration &&
                this.isOpen &&
                (o.textContent = a.t({
                  zh: `交易介面載入失敗，請返回後重試。`,
                  en: `Unable to load trading. Go back and retry.`,
                }));
            }));
      else if (r === `bag`)
        ((o.textContent = a.t({ zh: `打開背包…`, en: `Opening your bag…` })),
          e(
            async () => {
              let { mountBag: e } = await import(`./bag-LX8mo88s.js`);
              return { mountBag: e };
            },
            __vite__mapDeps([24, 6, 8, 5, 4, 3, 7, 12, 11, 13, 22, 25]),
          )
            .then(({ mountBag: e }) => {
              this.isOpen &&
                this.current === `bag` &&
                i === this.appGeneration &&
                (this.disposeBag = e(o, a));
            })
            .catch(() => {
              i === this.appGeneration &&
                this.isOpen &&
                (o.textContent = a.t({
                  zh: `背包打不開，請返回後重試。`,
                  en: `Unable to open the bag. Go back and retry.`,
                }));
            }));
      else if (r === `missions`) this.renderMissions(o);
      else if (r === `mrt`) this.renderMrt(o);
      else if (r === `weather`) this.renderWeather(o);
      else if (r === `radio`) this.renderRadio(o);
      else if (r === `stats`) this.renderStats(o);
      else if (r === `friends` || r === `inbox`) {
        let e = B(`div`, ``, o);
        this.stopSocialApp = g(r, e, a.ctx);
      }
      t && (o.scrollTop = s);
      let l =
        (n && o.querySelector(`[data-key="${n}"]`)) ||
        o.querySelector(`[data-nav]`);
      this.nav.focus(l ?? this.app.querySelector(`.ph-back`));
    }
    missions() {
      try {
        return this.kit.ctx.missions.list() ?? [];
      } catch {
        return [];
      }
    }
    renderMissions(e) {
      if (this.detail) return this.renderMissionDetail(e, this.detail);
      if (!this.missions().length) {
        let t = B(`div`, `ph-empty`, e);
        ((t.innerHTML = z.missions), B(`div`, ``, t, this.kit.t(J.noMissions)));
        return;
      }
      Yr(this.kit, e, this.misView, {
        pick: (e) => {
          ((this.listScroll = this.appBody.scrollTop),
            (this.detail = e),
            this.renderApp());
        },
        rerender: (e) => this.renderApp(!0, e),
        gps: (e) => this.gpsTo(e),
        save: (e) => G({ misTab: e.tab, misDistrict: e.district }),
      });
    }
    gpsTo(e) {
      (this.gps.set({ x: e.x, z: e.z }, e.title, !1),
        this.kit.ctx.events.emit(`notify`, {
          text: {
            zh: n.on
              ? n.t(
                  `已導航至「${e.title.zh}」`,
                  `ナビ設定：「${n.jz(e.title.zh)}」`,
                )
              : `已導航至「${e.title.zh}」`,
            en: `GPS set: ${e.title.en}`,
          },
          kind: `mission`,
        }),
        this.hooks.close());
    }
    renderMissionDetail(e, t) {
      let n = this.kit,
        r = null;
      try {
        r = n.ctx.missions.active?.id ?? null;
      } catch {}
      let i = t.id === r,
        a = B(`div`, `mis-detail cat-${t.category}`, e);
      if (
        (t.color && a.style.setProperty(`--cat`, t.color), this.hooks.snapshot)
      ) {
        let e = B(`canvas`, `md-map`, a);
        (Xe(this.snapCv), (this.snapCv = e));
        let n = a.getBoundingClientRect(),
          r = Math.min(2, window.devicePixelRatio || 1);
        ((e.width = Math.max(100, Math.round((n.width - 2) * r))),
          (e.height = Math.round(e.width * 0.42)));
        try {
          this.hooks.snapshot(e, t.x, t.z);
        } catch {}
      }
      (B(
        `div`,
        `mis-cat`,
        a,
        n.t(
          t.category === `story` && t.chapter
            ? t.chapter
            : (Hn[t.category] ?? t.category),
        ),
      ),
        B(`div`, `md-title`, a, n.t(t.title)),
        B(`div`, `md-alt`, a, n.alt(t.title)),
        B(`p`, `md-desc`, a, n.t(t.description)));
      let o = B(`div`, `md-facts`, a),
        s = (e, t) => {
          let r = B(`div`, `md-fact`, o);
          (B(`span`, ``, r, n.t(e)), B(`b`, ``, r, t));
        };
      t.giver && s({ zh: `委託人`, en: `Contact` }, n.t(t.giver));
      let c = n.ctx.plan.districtAt(t.x, t.z).name,
        l = rn(n.ctx, t.x, t.z);
      (s(
        { zh: `地點`, en: `Area` },
        l && l.zh !== c.zh ? `${n.t(l)} · ${n.t(c)}` : n.t(c),
      ),
        t.hours && s(Y.hours, t.hours),
        t.repeatable && s(Y.repeatable, `✓`),
        t.note &&
          s(
            t.available || t.completed
              ? { zh: `紀錄`, en: `Record` }
              : { zh: `解鎖條件`, en: `Unlocks` },
            n.t(t.note),
          ),
        o.childElementCount || o.remove());
      let u = t.completed && !t.repeatable,
        d = B(`div`, `md-reward`, a);
      (B(
        `span`,
        ``,
        d,
        n.t(u ? { zh: `重玩報酬（25%）`, en: `Replay pay (25%)` } : J.reward),
      ),
        B(`b`, ``, d, D(u ? Math.round(t.reward * 0.25) : t.reward)));
      let f = B(`div`, `md-btns`, e),
        p = B(`button`, `ph-btn`, f);
      if (
        ((p.type = `button`),
        (p.dataset.nav = `1`),
        (p.innerHTML = z.pin),
        B(`span`, ``, p, n.t(J.setGps)),
        p.addEventListener(`click`, (e) => {
          (e.stopPropagation(), n.sfx(`ui_confirm`), this.gpsTo(t));
        }),
        i)
      ) {
        let e = B(`button`, `ph-btn danger`, f);
        ((e.type = `button`),
          (e.dataset.nav = `1`),
          (e.innerHTML = z.flag),
          B(
            `span`,
            ``,
            e,
            n.t(
              t.status === `travel`
                ? { zh: `取消任務`, en: `Cancel job` }
                : Y.abandon,
            ),
          ),
          e.addEventListener(`click`, (e) => {
            (e.stopPropagation(), n.sfx(`ui_click`), this.hooks.abandon?.());
          }));
      } else if (t.available) {
        let e = B(`button`, `ph-btn primary`, f);
        ((e.type = `button`),
          (e.dataset.nav = `1`),
          (e.innerHTML = z.play),
          B(
            `span`,
            ``,
            e,
            n.t(t.completed && !t.repeatable ? Y.replay : J.startMission),
          ),
          e.addEventListener(`click`, (e) => {
            e.stopPropagation();
            let r = !1;
            try {
              r = n.ctx.missions.startMission(t.id);
            } catch {}
            r
              ? (n.sfx(`ui_confirm`), this.hooks.close())
              : (n.sfx(`ui_back`),
                n.ctx.events.emit(`notify`, {
                  text: J.missionUnavailable,
                  kind: `bad`,
                }));
          }));
      }
    }
    renderMrt(e) {
      let t = this.kit,
        r = t.ctx,
        i = t.region.transit;
      B(`div`, `ph-note`, e, t.t(i?.hint ?? J.mrtHint));
      let a = (() => {
          try {
            return r.transit.stations.length
              ? r.transit.stations
              : r.plan.mrtStations;
          } catch {
            return r.plan.mrtStations;
          }
        })(),
        o = r.player.position,
        s =
          i?.lines ??
          [`BL`, `R`, `BR`, `G`, `O`].map((e) => ({
            id: e,
            color: oi[e],
            name: si[e],
            badge: e,
          }));
      for (let c of s) {
        let s = c.id,
          l = a.filter((e) => e.line === s);
        if (!l.length) continue;
        let u = B(`div`, `mrt-line`, e);
        u.style.setProperty(`--line`, c.color);
        let d = B(`div`, `mrt-line-head`, u);
        (B(`span`, `mrt-badge`, d, c.badge ?? s),
          B(`span`, ``, d, t.t(c.name)));
        for (let e of l) {
          let a = B(`button`, `ph-item mrt-st`, u);
          ((a.type = `button`), (a.dataset.nav = `1`), B(`i`, `mrt-dot`, a));
          let s = B(`span`, `mrt-names`, a);
          (B(`b`, ``, s, t.t(e.name)), B(`small`, ``, s, t.alt(e.name)));
          let c = Math.hypot(e.ex - o.x, e.ez - o.z);
          (B(
            `span`,
            `mrt-dist`,
            a,
            c >= 1e3 ? `${(c / 1e3).toFixed(1)} km` : `${Math.round(c)} m`,
          ),
            a.addEventListener(`click`, (a) => {
              (a.stopPropagation(),
                t.sfx(`ui_confirm`),
                this.gps.set({ x: e.ex, z: e.ez }, e.name, !0),
                r.events.emit(`notify`, {
                  text: i?.gpsNotice?.(e) ?? {
                    zh: n.on
                      ? n.t(
                          `已導航至捷運${li(e.name.zh)}`,
                          `ナビ設定：${n.jz(li(e.name.zh))}`,
                        )
                      : `已導航至捷運${li(e.name.zh)}`,
                    en: `GPS set: ${ui(e.name.en)}`,
                  },
                  kind: `info`,
                }),
                this.hooks.close());
            }));
        }
      }
    }
    renderWeather(e) {
      let t = this.kit,
        n = t.ctx,
        r = 12,
        i = `clear`;
      try {
        ((r = n.env.hour), (i = n.env.weather));
      } catch {}
      let a = r < 6 || r >= 18.5,
        o = (e, t) =>
          e === `rain`
            ? z.rain
            : e === `storm`
              ? z.storm
              : e === `fog`
                ? z.fog
                : e === `cloudy`
                  ? z.cloud
                  : t
                    ? z.moon
                    : z.sun,
        s = B(`div`, `wx-card wx-${i}${a ? ` night` : ``}`, e);
      (B(
        `div`,
        `wx-city`,
        s,
        t.t(t.region.city ?? { zh: `臺北市`, en: `Taipei City` }),
      ),
        B(`div`, `wx-temp`, s, `${ur(r, i)}°`),
        B(`div`, `wx-cond`, s, t.t(Rn[i] ?? J.wClear)));
      let c = B(`div`, `wx-big`, s);
      c.innerHTML = o(i, a);
      let l =
          i === `rain` || i === `storm`
            ? 92
            : i === `fog`
              ? 95
              : 74 + Math.round(8 * Math.sin(r)),
        u = B(`div`, `wx-grid`, e),
        d = (e, n) => {
          let r = B(`div`, `wx-cell`, u);
          (B(`span`, ``, r, t.t(e)), B(`b`, ``, r, n));
        };
      (d(J.humidity, `${l}%`),
        d(J.feels, `${ur(r, i) + (l > 80 ? 4 : 2)}°`),
        d(
          J.rainChance,
          `${i === `rain` || i === `storm` ? 90 : r > 13 && r < 18 ? 60 : 20}%`,
        ),
        d(
          { zh: `空氣品質`, en: `Air quality` },
          `AQI ${38 + Math.round(10 * Math.sin(r * 0.7))}`,
        ));
      let f = B(`div`, `wx-strip`, e);
      for (let e = 1; e <= 6; e++) {
        let t = (Math.floor(r) + e * 2) % 24,
          n = B(`div`, `wx-hr`, f);
        B(`span`, ``, n, `${t}:00`);
        let a = B(`i`, ``, n);
        ((a.innerHTML = o(i, t < 6 || t >= 19)), B(`b`, ``, n, `${ur(t, i)}°`));
      }
      let p = B(
        `div`,
        `ph-note`,
        e,
        t.t(
          t.region.weatherTip ?? {
            zh: `臺北午後常有雷陣雨，出門記得帶傘 ☂`,
            en: `Afternoon thunderstorms are common — bring an umbrella ☂`,
          },
        ),
      );
      p.dataset.nav = `1`;
    }
    renderRadio(e) {
      let t = this.kit,
        n = t.ctx,
        r = [],
        i = -1;
      try {
        ((r = n.audio.stations), (i = n.audio.station));
      } catch {}
      if (!r.length) {
        let n = B(`div`, `ph-empty`, e);
        ((n.innerHTML = z.radio),
          B(`div`, ``, n, t.t({ zh: `收不到訊號…`, en: `No signal…` })));
        return;
      }
      B(
        `div`,
        `ph-note`,
        e,
        t.t({
          zh: `上車後才會播放電台`,
          en: `Radio plays while you are in a vehicle`,
        }),
      );
      let a = (r, a, o) => {
        let s = B(`button`, `ph-item radio-st${r === i ? ` on` : ``}`, e);
        ((s.type = `button`), (s.dataset.nav = `1`));
        let c = Gn(t.t(a)),
          l = Gn(t.alt(a));
        B(
          `span`,
          `r-freq`,
          s,
          r < 0 ? `OFF` : (c.freq || l.freq).replace(/^FM\s*/, `FM `),
        );
        let u = B(`span`, `mrt-names`, s);
        (B(`b`, ``, u, c.name),
          B(
            `small`,
            ``,
            u,
            [l.name, o ? t.t(Wn[o] ?? o) : ``].filter(Boolean).join(` · `),
          ),
          s.addEventListener(`click`, (e) => {
            (e.stopPropagation(), t.sfx(`ui_click`));
            try {
              n.audio.setStation(r);
            } catch {}
            this.renderApp();
          }));
      };
      (r.forEach((e, t) => a(t, e.name, e.genre)), a(-1, J.radioOff, ``));
    }
    renderStats(e) {
      let t = this.kit,
        n = t.ctx,
        r = n.state.data,
        i = this.missions(),
        a = B(`div`, `stat-hero`, e);
      (B(`span`, ``, a, t.t(J.money)),
        B(`b`, ``, a, D(n.state.money)),
        ri(t, e));
      let o = B(`div`, `wx-grid`, e),
        s = (e, n) => {
          let r = B(`div`, `wx-cell`, o);
          ((r.dataset.nav = `1`), B(`span`, ``, r, t.t(e)), B(`b`, ``, r, n));
        };
      t.region.progress
        ? t.region.progress(i.length, s)
        : (s(
            J.missionsDone,
            `${r.completedMissions.length}${i.length ? ` / ` + i.length : ``}`,
          ),
          s(J.collectibles, `${r.collectibles.length} / 30`));
      for (let e of Object.keys(zn)) {
        let n = r.stats[e];
        if (n == null || e === `luckyCats`) continue;
        let i = Bn(e, n);
        i != null && s(t.region.statLabels?.[e] ?? zn[e], i);
      }
    }
    refreshWidget() {
      let e = this.kit,
        t = e.ctx,
        r = 12,
        i = `clear`;
      try {
        ((r = t.env.hour), (i = t.env.weather));
      } catch {}
      ((this.statusClock.textContent = Ye(r)),
        (this.wClock.textContent = Ye(r)));
      let a = t.time.date,
        o = ((t.time.weekday % 7) + 7) % 7,
        s = Fn[o];
      ((this.wDate.textContent =
        e.lang === `ja`
          ? `${a.m}月${a.d}日（${`日月火水木金土`[o]}）`
          : e.lang === `zh`
            ? n.on
              ? n.t(
                  `${a.m}月${a.d}日 ${s.zh}`,
                  `${a.m}月${a.d}日 ${n.jz(s.zh)}`,
                )
              : `${a.m}月${a.d}日 ${s.zh}`
            : `${s.en}, ${new Date(Date.UTC(a.y, a.m - 1, a.d)).toLocaleString(`en-US`, { month: `long`, timeZone: `UTC` })} ${a.d}`),
        (this.wWeather.textContent = `${e.t(Rn[i] ?? J.wClear)} ${ur(r, i)}° · ${e.t(e.region.city ?? { zh: `臺北市`, en: `Taipei` })}`));
    }
    update(e) {
      this.isOpen &&
        ((this.acc += e),
        this.acc > 1 && ((this.acc = 0), this.refreshWidget()));
    }
  };
