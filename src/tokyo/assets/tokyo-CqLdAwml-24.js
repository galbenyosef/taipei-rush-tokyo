// tokyo/assets/tokyo-CqLdAwml 24 — kit
// Lines 9823-10756 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var Oo = {
    portrait: `/title/menu-portrait.webp 960w`,
    phone: `/title/menu-phone.webp 1600w`,
    srcset: `/title/menu-1600.webp 1600w, /title/menu-2560.webp 2560w`,
    sizes: `(max-width: 1024px) 50vw, 100vw`,
    src: `/title/menu-1600.webp`,
    label: { zh: `象山 · 臺北101`, en: `Elephant Mtn · Taipei 101` },
    sub: { zh: `信義區`, en: `Xinyi District` },
  },
  ko = 18.35,
  Ao = [`mission-markers`, `xinyi-mission-markers`],
  jo = (e = 2) =>
    new Promise((t) => {
      let n = () => (--e <= 0 ? t() : requestAnimationFrame(n));
      requestAnimationFrame(n);
    }),
  Mo = `taipei-rush-dog-pending`,
  No = class {
    kit;
    nav;
    el;
    menu;
    panelWrap;
    panels = {};
    settings;
    controls;
    support;
    photo;
    photoImg;
    photoSrc;
    photoPhone;
    photoWanted = !1;
    photoDrop = 0;
    shotLabel;
    pos = new f();
    look = new f();
    scope;
    panelScope = null;
    mode = `menu`;
    charCards = {};
    dogCards = {};
    dogsLock = null;
    committedDog = null;
    portraits = !1;
    cap = null;
    camPos = new f();
    camQuat = new r();
    committed = `jie`;
    tipEl;
    tipIdx = 0;
    get tips() {
      return this.kit.region.tips ?? yt;
    }
    tipT = 0;
    fsBtn;
    langBtn;
    saveLine = null;
    isOpen = !1;
    onPlay;
    live = !1;
    liveToken = 0;
    savedHour = null;
    hiddenMarkers = [];
    installBtn;
    hasSave;
    constructor(e, t) {
      ((this.kit = e),
        (this.nav = t),
        (this.hasSave = Fo()),
        (this.el = B(`div`, `ti`, e.menuLayer)),
        (this.photo = B(`div`, `ti-photo`, this.el)),
        this.photo.setAttribute(`aria-hidden`, `true`));
      let n = B(`picture`, ``, this.photo);
      ((this.photoSrc = B(`source`, ``, n)),
        (this.photoSrc.media = `(orientation: portrait) and (max-width: 1024px)`),
        (this.photoPhone = B(`source`, ``, n)),
        (this.photoPhone.media = `(orientation: landscape) and (max-height: 519px)`),
        (this.photoImg = B(`img`, ``, n)),
        (this.photoImg.alt = ``),
        (this.photoImg.decoding = `async`),
        (this.photoImg.width = 2560),
        (this.photoImg.height = 1440),
        this.photoImg.addEventListener(`load`, () => {
          let e = this.photoImg,
            t = () =>
              e.naturalWidth &&
              this.photoWanted &&
              this.photo.classList.add(`on`);
          e.decode ? e.decode().then(t, t) : t();
        }),
        B(`div`, `ti-vignette`, this.el));
      let r = B(`div`, `ti-bar ti-bar-top`, this.el),
        i = B(`div`, `ti-bar ti-bar-bot`, this.el),
        a = B(`div`, `ti-social`, r),
        o = (t, n, r, i, o) => {
          let s = B(`a`, `ti-threads ti-threads-${t}`, a);
          ((s.href = `https://www.threads.com/${n}`),
            (s.target = `_blank`),
            (s.rel = `noopener noreferrer`),
            (s.dataset.nav = `1`),
            e.bindTitle(s, o));
          let c = B(`span`, `ti-threads-icon ti-threads-mark`, s);
          ((c.innerHTML = Kn), c.setAttribute(`aria-hidden`, `true`));
          let l = B(`span`, `ti-threads-copy`, s),
            u = B(`span`, `ti-threads-badge`, l);
          (e.bind(B(`span`, `ti-threads-badge-long`, u), r),
            e.bind(B(`span`, `ti-threads-badge-short`, u), i),
            B(`span`, `ti-threads-handle`, l, n));
          let d = B(`span`, `ti-threads-cta`, s);
          return (
            e.bind(B(`span`, `ti-threads-follow`, d), G.followThreads),
            e.bind(B(`span`, `ti-threads-follow-short`, d), G.followThreads),
            s.addEventListener(`click`, (e) => e.stopPropagation()),
            s
          );
        };
      Ka(a, e, [
        o(
          `dev`,
          `@aicodewithme`,
          G.devThreads,
          G.devThreadsTag,
          G.devThreadsLink,
        ),
        o(
          `official`,
          `@taipeirush_official_zh`,
          G.officialThreads,
          G.officialThreadsTag,
          G.officialThreadsLink,
        ),
      ]);
      let s = B(`div`, `ti-legal`, r);
      (e.bind(B(`span`, ``, s), G.parody),
        B(`i`, `ti-dot`, s),
        e.bind(B(`span`, `ti-legal-2`, s), G.titleFooter));
      let c = B(`div`, `ti-right`, r),
        l = B(`div`, `ti-tools`, c);
      ((this.langBtn = B(`button`, `ti-tool ti-lang`, l)),
        (this.langBtn.type = `button`),
        (this.langBtn.dataset.nav = `1`),
        this.langBtn.addEventListener(`click`, (t) => {
          (t.stopPropagation(),
            e.sfx(`ui_click`),
            e.ctx.state.setSetting(
              `lang`,
              e.lang === `zh` ? `ja` : e.lang === `ja` ? `en` : `zh`,
            ));
        }),
        (this.fsBtn = B(`button`, `ti-tool ti-fs`, l)),
        (this.fsBtn.type = `button`),
        (this.fsBtn.dataset.nav = `1`),
        this.fsBtn.addEventListener(`click`, (t) => {
          (t.stopPropagation(), e.sfx(`ui_click`), this.toggleFullscreen());
        }),
        ba(() => this.renderTools()),
        (this.installBtn = B(`button`, `ti-tool ti-install`, l)),
        (this.installBtn.type = `button`),
        (this.installBtn.dataset.nav = `1`),
        this.installBtn.addEventListener(`click`, (t) => {
          (t.stopPropagation(), e.sfx(`ui_click`), pa());
        }),
        fa(() => this.renderTools()),
        ve(c, e.ctx));
      let u = B(`div`, `ti-left`, this.el),
        d = B(`div`, `ti-social-float`, u),
        f = window.matchMedia(`(max-width: 1250px)`),
        p = () => {
          let e = document.body.classList,
            t =
              e.contains(`tr-portrait`) ||
              (f.matches &&
                (e.contains(`tr-compact`) || e.contains(`tr-is-touch`)))
                ? d
                : r;
          a.parentElement !== t && t.prepend(a);
        };
      (f.addEventListener(`change`, p),
        p(),
        new MutationObserver(p).observe(document.body, {
          attributes: !0,
          attributeFilter: [`class`],
        }));
      let m = B(`div`, `ti-logo`, u);
      ((m.innerHTML = cn(`ti-logo-svg`, this.kit.lang)),
        this.kit.onLang(() => (m.innerHTML = cn(`ti-logo-svg`, this.kit.lang))),
        e.region.cityBadge &&
          e.dual(B(`div`, `tr-city ti-city`, u), e.region.cityBadge),
        (this.menu = B(`div`, `ti-menu`, u)),
        this.buildMenu(),
        (this.panelWrap = B(`div`, `ti-panel`, this.el)));
      let h = (t, n) => {
        let r = B(`div`, `ti-pane ti-pane-${t}`, this.panelWrap),
          i = B(`div`, `ti-pane-head`, r),
          a = B(`button`, `icon-btn ti-back`, i);
        ((a.type = `button`),
          (a.dataset.nav = `1`),
          (a.innerHTML = z.chevronL),
          e.bindTitle(a, G.back),
          a.addEventListener(`click`, (e) => {
            (e.stopPropagation(), this.closePanel());
          }),
          e.dual(B(`div`, `ti-pane-title`, i), n));
        let o = B(`div`, `ti-pane-body`, r);
        return ((this.panels[t] = r), o);
      };
      (this.buildCharacter(h(`character`, G.character)),
        (this.settings = qt(e, h(`settings`, G.settings))),
        (this.controls = za(e, h(`controls`, G.controls))),
        (this.support = new Va(e, h(`support`, Ba))));
      let g = B(`div`, `ti-tip`, i);
      (e.bind(B(`b`, ``, g), G.loadingTip),
        (this.tipEl = B(`span`, ``, g)),
        (this.tipIdx = Math.floor(Math.random() * this.tips.length)),
        this.renderTip(),
        (this.shotLabel = B(`div`, `ti-shot`, i)),
        e.onLang(() => {
          (this.relabelMenu(),
            this.renderTip(),
            this.renderShotLabel(),
            this.renderTools());
        }),
        this.renderTools(),
        (this.scope = {
          root: this.el,
          onBack: () => {},
          initial: () => this.menu.querySelector(`.primary`),
        }));
      let _ = e.ctx.params;
      (!_.has(`autoplay`) || _.has(`menu`)) && this.ensurePhoto();
    }
    ensurePhoto() {
      if (
        (clearTimeout(this.photoDrop),
        (this.photoWanted = !0),
        this.photoImg.getAttribute(`srcset`))
      )
        return;
      let e = this.kit.region.photo === void 0 ? Oo : this.kit.region.photo;
      e &&
        ((this.photoSrc.srcset = e.portrait),
        (this.photoSrc.sizes = `100vw`),
        (this.photoPhone.srcset = e.phone),
        (this.photoPhone.sizes = `100vw`),
        (this.photoImg.sizes = Oo.sizes),
        (this.photoImg.srcset = e.srcset),
        (this.photoImg.src = e.src));
    }
    photoReady(e = 2500) {
      if (this.kit.region.photo === null) return Promise.resolve();
      this.ensurePhoto();
      let t = this.photoImg,
        n = new Promise((e) => {
          let n = () => e();
          t.complete
            ? t.naturalWidth && t.decode
              ? t.decode().then(n, n)
              : n()
            : (t.addEventListener(
                `load`,
                () => (t.decode ? t.decode().then(n, n) : n()),
                { once: !0 },
              ),
              t.addEventListener(`error`, n, { once: !0 }));
        });
      return Promise.race([n, new Promise((t) => setTimeout(t, e))]);
    }
    dropPhoto() {
      ((this.photoWanted = !1),
        this.photo.classList.remove(`on`),
        this.photoImg.removeAttribute(`srcset`),
        this.photoImg.removeAttribute(`src`),
        this.photoSrc.removeAttribute(`srcset`),
        this.photoPhone.removeAttribute(`srcset`));
    }
    setWorld(e) {
      try {
        let t = this.kit.ctx.renderer;
        (e && t.worldHidden && t.suspendAdapt(1.5), (t.worldHidden = !e));
      } catch {}
    }
    setLive(e) {
      if (e === this.live) return;
      this.live = e;
      let t = ++this.liveToken,
        n = this.kit.ctx;
      if (e) {
        if (!n.params.has(`hour`))
          try {
            (this.savedHour === null && (this.savedHour = n.env.hour),
              n.env.setHour(ko));
          } catch {}
        (this.applyCamera(),
          this.setWorld(!0),
          jo(2).then(
            () =>
              t === this.liveToken &&
              this.isOpen &&
              this.el.classList.add(`live`),
          ));
        return;
      }
      (this.el.classList.remove(`live`),
        setTimeout(() => {
          t === this.liveToken &&
            this.isOpen &&
            (this.stopLive(), this.setWorld(!1));
        }, 480));
    }
    stopLive() {
      let e = this.kit.ctx;
      try {
        e.cameraRig.override(null);
      } catch {}
      if (this.savedHour !== null) {
        try {
          e.env.setHour(this.savedHour);
        } catch {}
        this.savedHour = null;
      }
    }
    buildMenu() {
      let e = this.kit;
      ((this.menu.textContent = ``),
        h(le()) &&
          e.bind(B(`div`, `ti-tip`, this.menu), {
            zh: `請更新遊戲。較新的存檔已安全保留。`,
            en: `Please update the game. Your newer save is safe.`,
          }),
        Zt(`top`, e, this.menu, () => this.play()));
      let t = !1;
      if (
        _o(e, this.menu, () => this.play()) ||
        (t = xo(e, this.menu, this.hasSave))
      )
        this.saveLine = null;
      else if (this.hasSave) {
        let t = J(
          e,
          this.menu,
          G.continue,
          () => So(e, this.nav, () => this.play()),
          { cls: `ti-btn primary`, icon: `play` },
        );
        (t.setAttribute(`aria-haspopup`, `dialog`),
          (this.saveLine = B(
            `span`,
            `mbtn-meta`,
            t.querySelector(`.mbtn-label`) ?? t,
          )),
          J(
            e,
            this.menu,
            G.newGame,
            () => {
              Jt(e, this.nav, G.newGameConfirm, G.newGame, () => {
                try {
                  (e.ctx.state.reset(), e.ctx.state.saveNow());
                } catch {}
                location.reload();
              });
            },
            { cls: `ti-btn`, icon: `plus` },
          ));
      } else
        ((this.saveLine = null),
          J(e, this.menu, G.play, () => So(e, this.nav, () => this.play()), {
            cls: `ti-btn primary`,
            icon: `play`,
          }).setAttribute(`aria-haspopup`, `dialog`));
      (t || Zt(`play`, e, this.menu, () => this.play()),
        J(e, this.menu, Ba, () => this.openPanel(`support`), {
          cls: `ti-btn ti-support`,
          icon: `heart`,
          dual: !1,
        }),
        J(e, this.menu, G.character, () => this.openPanel(`character`), {
          cls: `ti-btn`,
          icon: `user`,
        }),
        J(e, this.menu, G.settings, () => this.openPanel(`settings`), {
          cls: `ti-btn`,
          icon: `settings`,
        }),
        J(e, this.menu, G.controls, () => this.openPanel(`controls`), {
          cls: `ti-btn`,
          icon: `gamepad`,
        }),
        this.relabelMenu());
    }
    relabelMenu() {
      let e = this.kit;
      if (this.saveLine) {
        let t = this.menu.querySelector(`.ti-btn.primary .mbtn-label`);
        t && this.saveLine.parentElement !== t && t.appendChild(this.saveLine);
        let r = e.ctx.state.data,
          i = r.completedMissions?.length ?? 0,
          a = e.region.collectible;
        if (a === void 0)
          this.saveLine.textContent =
            e.lang === `zh`
              ? n.on
                ? n.t(
                    `${A(r.money)} · 任務 ${i} · 招財貓 ${r.collectibles?.length ?? 0}/30`,
                    `${A(r.money)} · ミッション ${i} · 招き猫 ${r.collectibles?.length ?? 0}/30`,
                  )
                : `${A(r.money)} · 任務 ${i} · 招財貓 ${r.collectibles?.length ?? 0}/30`
              : `${A(r.money)} · ${i} missions · ${r.collectibles?.length ?? 0}/30 cats`;
        else {
          let t = a
            ? ` · ${e.t(a.name)} ${r.collectibles?.length ?? 0}/${a.total}`
            : ``;
          this.saveLine.textContent =
            e.lang === `zh`
              ? n.on
                ? n.t(
                    `${A(r.money)} · 任務 ${i}${t}`,
                    `${A(r.money)} · ミッション ${i}${t}`,
                  )
                : `${A(r.money)} · 任務 ${i}${t}`
              : e.lang === `ja`
                ? `${A(r.money)} · ミッション ${i}${t}`
                : `${A(r.money)} · ${i} missions${t}`;
        }
      }
    }
    renderTools() {
      let e = this.kit;
      ((this.langBtn.innerHTML = `${z.globe}<span><b class="${e.lang === `zh` ? `on` : ``}">${e.lang === `en` ? `ZH` : `中文`}</b><i>/</i><b class="${e.lang === `ja` ? `on` : ``}">${e.lang === `en` ? `JA` : `日本語`}</b><i>/</i><b class="${e.lang === `en` ? `on` : ``}">EN</b></span>`),
        this.langBtn.setAttribute(
          `aria-label`,
          e.lang === `zh`
            ? `切換為日本語`
            : e.lang === `ja`
              ? `Switch to English`
              : `Switch to Chinese`,
        ));
      let t = xa(),
        n = ga();
      this.fsBtn.classList.toggle(`hidden`, t === `none` && !n);
      let r =
        t === `ios-guide`
          ? W.fullscreenIos
          : n
            ? W.exitFullscreen
            : W.fullscreen;
      ((this.fsBtn.innerHTML = `${t === `ios-guide` ? z.share : n ? z.fullscreenExit : z.fullscreen}<span>${e.t(r)}</span>`),
        this.installBtn.classList.toggle(`hidden`, !da()),
        (this.installBtn.innerHTML = `${z.plus}<span>${e.t({ zh: `安裝`, en: `Install` })}</span>`));
    }
    toggleFullscreen() {
      if (xa() === `ios-guide`) {
        Aa(this.kit, this.nav, !0);
        return;
      }
      ga() ? va() : _a();
    }
    renderTip() {
      Gr(
        this.tipEl,
        this.kit.t(this.tips[this.tipIdx]),
        this.kit.touch ? `touch` : this.kit.ctx.input.device,
        this.kit.lang,
      );
    }
    buildCharacter(e) {
      let t = this.kit,
        n = B(`div`, `chars`, e),
        r = (e, r, i, a) => {
          let o = B(`button`, `char char-${e}`, n);
          ((o.type = `button`), (o.dataset.nav = `1`));
          let s = B(`div`, `char-art`, o);
          s.innerHTML = T(e) ? Ro : Lo;
          let c = B(`div`, `char-text`, o);
          (t.dual(B(`div`, `char-name`, c), r),
            t.bind(B(`div`, `char-tag`, c), i),
            t.bind(B(`div`, `char-desc`, c), a),
            B(`div`, `char-pick`, c),
            o.addEventListener(`click`, (n) => {
              (n.stopPropagation(),
                this.selectCharacter(e),
                t.sfx(`ui_confirm`));
            }),
            o.addEventListener(`mouseenter`, () => this.previewCharacter(e)),
            o.addEventListener(`focus`, () => this.previewCharacter(e)),
            (this.charCards[e] = o));
        };
      (r(`jie`, G.jieName, G.jieTag, G.jieDesc),
        r(`wen`, G.wenName, G.wenTag, G.wenDesc),
        r(`kai`, G.kaiName, G.kaiTag, G.kaiDesc),
        r(`mei`, G.meiName, G.meiTag, G.meiDesc),
        this.buildDogs(e),
        t.onLang(() => this.renderCharState()),
        this.renderCharState());
    }
    buildDogs(e) {
      let t = this.kit,
        n = B(`div`, `dogs-head`, e);
      (t.bind(B(`div`, `dogs-title`, n), G.dogsHead),
        t.bind(B(`div`, `dogs-note`, n), G.dogsNote),
        (this.dogsLock = B(`div`, `dogs-lock`, n)),
        t.bind(this.dogsLock, G.dogsLogin),
        ae(() => {
          (this.claimPendingDog(), this.renderCharState());
        }));
      let r = B(`div`, `dogs`, e);
      for (let e of ct) {
        let n = B(`button`, `char dog dog-${e}`, r);
        ((n.type = `button`), (n.dataset.nav = `1`));
        let i = B(`div`, `char-art dog-art`, n),
          a = document.createElement(`img`);
        ((a.className = `char-shot`),
          (a.alt = ``),
          (a.width = 240),
          (a.height = 290),
          (a.decoding = `async`),
          (a.dataset.src = `/title/dogs/${e}.webp`),
          i.appendChild(a));
        let o = B(`div`, `char-text`, n);
        (t.dual(B(`div`, `char-name`, o), it[e]),
          t.bind(B(`div`, `char-tag`, o), st[e]),
          B(`div`, `char-pick`, o),
          n.addEventListener(`click`, (n) => {
            (n.stopPropagation(),
              this.selectDog(this.committedDog === e ? null : e),
              t.sfx(`ui_confirm`));
          }),
          n.addEventListener(
            `mouseenter`,
            () => !this.leanHeroes() && this.previewDog(e),
          ),
          n.addEventListener(
            `focus`,
            () => !this.leanHeroes() && this.previewDog(e),
          ),
          (this.dogCards[e] = n));
      }
    }
    previewDog(e) {
      try {
        this.kit.ctx.player.setDog?.(e);
      } catch {}
    }
    dogLocked() {
      return ue() === !1;
    }
    askSignIn(e) {
      try {
        sessionStorage.setItem(Mo, e);
      } catch {}
      (this.previewDog(this.committedDog), he(this.kit.ctx, G.dogsLogin));
    }
    claimPendingDog() {
      if (this.dogLocked()) return;
      let e = null;
      try {
        ((e = sessionStorage.getItem(Mo)), sessionStorage.removeItem(Mo));
      } catch {}
      ot(e) && this.selectDog(e);
    }
    selectDog(e) {
      if (e && this.dogLocked()) {
        this.askSignIn(e);
        return;
      }
      ((this.committedDog = e),
        q({ dog: e }),
        this.previewDog(e),
        this.renderCharState());
    }
    savedDog() {
      if (this.dogLocked()) return null;
      try {
        let e = new URLSearchParams(location.search).get(`dog`);
        if (e !== null) return ot(e) ? e : null;
      } catch {}
      let e = K().dog;
      return ot(e) ? e : null;
    }
    savedCharacter() {
      return K().character ?? Io(this.kit) ?? `jie`;
    }
    renderCharState() {
      let e = this.committed;
      for (let t of x) {
        let n = this.charCards[t];
        if (!n) continue;
        let r = t === e && !this.committedDog;
        n.classList.toggle(`on`, r);
        let i = n.querySelector(`.char-pick`);
        i.textContent = this.kit.t(r ? G.selected : G.select);
      }
      let t = this.dogLocked();
      this.dogsLock && (this.dogsLock.hidden = !t);
      for (let e of ct) {
        let n = this.dogCards[e];
        if (!n) continue;
        let r = e === this.committedDog;
        (n.classList.toggle(`on`, r), n.classList.toggle(`locked`, t));
        let i = n.querySelector(`.char-pick`);
        i.textContent = this.kit.t(
          t ? G.dogsLocked : r ? G.selected : G.select,
        );
      }
    }
    previewCharacter(e) {
      try {
        this.kit.ctx.player.setCharacter(e, { preview: !0 });
      } catch {}
      this.previewDog(null);
    }
    commitCharacter(e) {
      try {
        this.kit.ctx.player.setCharacter(e);
      } catch {}
      this.previewDog(this.committedDog);
    }
    selectCharacter(e) {
      ((this.committed = e),
        this.committedDog
          ? ((this.committedDog = null), q({ character: e, dog: null }))
          : q({ character: e }),
        this.commitCharacter(e));
      try {
        this.kit.ctx.events.emit(`player:character`, { id: e });
      } catch {}
      this.renderCharState();
    }
    leanHeroes() {
      let e = this.kit.ctx.quality;
      return !!e && (e.mobile || e.level === `low`);
    }
    freeHero(e) {
      if (e && e !== this.committed && this.leanHeroes())
        try {
          this.kit.ctx.player.releaseCharacter?.(e);
        } catch {}
    }
    stepPortrait() {
      let e = this.cap;
      if (!e) return;
      let t = this.kit.ctx;
      e.frame++;
      let n = e.ids[e.step];
      if (e.frame === 1) {
        this.previewCharacter(n);
        return;
      }
      let r = this.kit.ctx.player.shownCharacter;
      if (r !== void 0 && r !== n) {
        if (++e.wait < 600) {
          ((e.frame = 1), e.wait % 30 == 0 && this.previewCharacter(n));
          return;
        }
        ((e.wait = 0),
          e.step++,
          (e.frame = 0),
          e.step >= e.ids.length &&
            ((this.cap = null),
            this.commitCharacter(this.committed),
            this.freeHero(n)));
        return;
      }
      if (!(e.frame < 5)) {
        try {
          let e = t.camera;
          (this.camPos.copy(e.position), this.camQuat.copy(e.quaternion));
          let r = t.player.position,
            i = t.player.heading ?? 0,
            a = Math.sin(i),
            o = -Math.cos(i),
            s = Math.cos(i),
            c = Math.sin(i);
          (e.position.set(
            r.x + a * 1 + s * 0.12,
            r.y + 1.56,
            r.z + o * 1 + c * 0.12,
          ),
            e.lookAt(r.x, r.y + 1.36, r.z),
            e.updateMatrixWorld(),
            t.renderer.render(0));
          let l = t.renderer.canvas,
            u = l.width,
            d = l.height,
            f = document.createElement(`canvas`);
          ((f.width = 240), (f.height = 300));
          let p = f.getContext(`2d`),
            m = d * 0.96,
            h = m * 0.8;
          (p.drawImage(l, (u - h) / 2, d * 0.02, h, m, 0, 0, f.width, f.height),
            Po(p, f.width, f.height));
          let g = this.charCards[n]?.querySelector(`.char-art`);
          (g &&
            ((g.textContent = ``),
            (f.className = `char-shot`),
            g.appendChild(f)),
            e.position.copy(this.camPos),
            e.quaternion.copy(this.camQuat),
            e.updateMatrixWorld());
        } catch (e) {
          console.warn(`[ui] portrait capture failed`, e);
        }
        (this.freeHero(e.ids[e.step - 1]),
          e.step++,
          (e.frame = 0),
          (e.wait = 0),
          e.step >= e.ids.length &&
            ((this.cap = null),
            (this.portraits = !0),
            this.commitCharacter(this.committed),
            this.freeHero(n)));
      }
    }
    openPanel(e) {
      (this.mode !== `menu` && this.closePanel(!0),
        (this.mode = e),
        this.el.classList.add(`panel-open`),
        (this.el.dataset.panel = e));
      for (let [t, n] of Object.entries(this.panels))
        n.classList.toggle(`show`, t === e);
      if (
        (e === `settings` && this.settings.refresh(),
        e === `controls` && this.controls.sync(),
        e === `support` && this.support.refresh(),
        e === `character`)
      ) {
        let e = this.leanHeroes(),
          t = this.savedCharacter();
        for (let n of x)
          (!e || n === t) &&
            this.kit.ctx.player.prepareCharacter?.(n).catch(() => {});
        !this.portraits &&
          !this.cap &&
          (this.cap = { step: 0, frame: 0, ids: [...x], wait: 0 });
        for (let e of Object.values(this.dogCards)) {
          let t = e?.querySelector(`img[data-src]`);
          t && ((t.src = t.dataset.src), delete t.dataset.src);
        }
        ((this.committed = this.savedCharacter()),
          this.claimPendingDog(),
          this.renderCharState(),
          this.setLive(!0));
      }
      ((this.panelScope = {
        root: this.panels[e],
        onBack: () => this.closePanel(),
        initial: () =>
          e === `character`
            ? this.charCards[this.committed]
            : this.panels[e].querySelector(`.ti-pane-body [data-nav]`),
      }),
        this.nav.push(this.panelScope));
      let t = this.panels[e].querySelector(`.ti-pane-body`);
      t && (t.scrollTop = 0);
    }
    closePanel(e = !1) {
      if (this.mode !== `menu`) {
        (this.mode === `character` &&
          (this.commitCharacter(this.committed), this.setLive(!1)),
          this.mode === `support` && this.support.close(),
          (this.mode = `menu`),
          this.el.classList.remove(`panel-open`),
          delete this.el.dataset.panel);
        for (let e of Object.values(this.panels)) e.classList.remove(`show`);
        (this.panelScope && this.nav.pop(this.panelScope),
          (this.panelScope = null),
          e || this.kit.sfx(`ui_back`));
      }
    }
    open(e = !1) {
      let t = this.kit.ctx;
      ((this.isOpen = !0),
        e && (this.portraits = !1),
        this.ensurePhoto(),
        this.setWorld(!1));
      try {
        t.cameraRig.override(null);
      } catch {}
      (this.el.classList.toggle(
        `from-loader`,
        !!document.getElementById(`loader`),
      ),
        this.el.classList.add(`show`),
        setTimeout(() => this.el.classList.add(`intro-done`), 2200),
        this.nav.push(this.scope));
      let n = e || Fo();
      (n !== this.hasSave && ((this.hasSave = n), this.buildMenu()),
        (this.committed = this.savedCharacter()),
        (this.committedDog = this.savedDog()),
        this.claimPendingDog());
      let r = K().character;
      if (
        (r
          ? this.commitCharacter(r)
          : this.committedDog && this.previewDog(this.committedDog),
        this.hideMarkers(!0),
        this.renderShotLabel(),
        this.renderTools(),
        t.params.get(`support`) === `cancelled`)
      ) {
        t.params.delete(`support`);
        let e = new URL(location.href);
        (e.searchParams.delete(`support`),
          history.replaceState(null, ``, e),
          this.openPanel(`support`));
      }
      xa() === `ios-guide` &&
        !t.params.has(`autoplay`) &&
        setTimeout(() => this.isOpen && Aa(this.kit, this.nav), 1600);
    }
    hideMarkers(e) {
      if (e) {
        if (this.hiddenMarkers.length) return;
        try {
          this.kit.ctx.missions.setMarkersVisible?.(!1);
        } catch {}
        try {
          $r(!1);
        } catch {}
        let e = this.kit.ctx.scene;
        for (let t of Ao) {
          let n = [];
          e.traverse((e) => {
            e.name === t && n.push(e);
          });
          for (let e of n)
            e.traverse((e) => {
              (this.hiddenMarkers.push([e, e.layers.mask]),
                e.layers.disableAll());
            });
        }
      } else {
        for (let [e, t] of this.hiddenMarkers) e.layers.mask = t;
        this.hiddenMarkers.length = 0;
        try {
          this.kit.ctx.missions.setMarkersVisible?.(!0);
        } catch {}
        try {
          $r(!0);
        } catch {}
      }
    }
    async leave() {
      (this.mode !== `menu` && this.closePanel(!0),
        this.liveToken++,
        (this.live = !1),
        this.el.classList.remove(`live`),
        this.stopLive(),
        this.setWorld(!0),
        await jo(3));
    }
    close() {
      this.isOpen &&
        ((this.isOpen = !1),
        this.el.classList.remove(`show`, `live`),
        this.panelScope && this.nav.pop(this.panelScope),
        (this.panelScope = null),
        (this.mode = `menu`),
        this.el.classList.remove(`panel-open`),
        this.nav.pop(this.scope),
        this.liveToken++,
        (this.live = !1),
        this.stopLive(),
        this.setWorld(!0),
        this.hideMarkers(!1),
        clearTimeout(this.photoDrop),
        (this.photoDrop = window.setTimeout(
          () => !this.isOpen && this.dropPhoto(),
          1e3,
        )));
    }
    play() {
      let e = this.kit.ctx;
      try {
        e.audio.unlock();
      } catch {}
      try {
        e.input.lockPointer();
      } catch {}
      if (this.kit.touch && xa() === `api` && !ga())
        try {
          window.matchMedia(`(pointer: coarse)`).matches && _a();
        } catch {}
      (this.kit.sfx(`ui_confirm`),
        this.commitCharacter(this.savedCharacter()),
        this.onPlay?.());
    }
    renderShotLabel() {
      this.shotLabel.textContent = ``;
      let e = this.kit.region.photo === void 0 ? Oo : this.kit.region.photo;
      e &&
        (B(`b`, ``, this.shotLabel, this.kit.t(e.label)),
        B(
          `span`,
          ``,
          this.shotLabel,
          [this.kit.t(e.sub), this.kit.alt(e.label)]
            .filter(Boolean)
            .join(` · `),
        ),
        U(this.shotLabel, `show`));
    }
    applyCamera() {
      let e = this.kit.ctx;
      try {
        let t = e.player.position,
          n = e.player.heading ?? 0,
          r = Math.sin(n),
          i = -Math.cos(n),
          a = Math.cos(n),
          o = Math.sin(n);
        (this.pos.set(
          t.x + r * 3.4 + a * 0.9,
          t.y + 1.3,
          t.z + i * 3.4 + o * 0.9,
        ),
          this.look.set(t.x + a * 1.05, t.y + 1, t.z + o * 1.05),
          e.cameraRig.override(this.pos, this.look));
      } catch {}
    }
    update(e) {
      this.isOpen &&
        (this.live
          ? this.applyCamera()
          : this.kit.ctx.camera.updateMatrixWorld(),
        (this.tipT += e),
        this.tipT > 8 &&
          ((this.tipT = 0),
          (this.tipIdx = (this.tipIdx + 1) % this.tips.length),
          this.renderTip(),
          U(this.tipEl, `swap`)),
        this.cap && this.live && this.stepPortrait());
    }
  };
