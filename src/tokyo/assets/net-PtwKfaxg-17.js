// tokyo/assets/net-PtwKfaxg 17 — node
// Lines 8702-9405 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var Lr = class {
    ctx;
    hooks;
    dialog = document.createElement(`dialog`);
    nodes = new Map();
    labels = [];
    slots = [];
    slotSignatures = [];
    choices = [];
    style = document.createElement(`style`);
    releaseModal = null;
    previousFocus = null;
    captured = !1;
    signature = ``;
    artCharacter = ``;
    tick = 0;
    actionUntil = 0;
    localError = null;
    invitation = ``;
    feedback = null;
    feedbackUntil = 0;
    nameInput;
    codeInput;
    publicInput;
    pvpInput;
    constructor(e, t) {
      ((this.ctx = e),
        (this.hooks = t),
        (this.style.textContent = Fr),
        document.head.append(this.style),
        (this.dialog.id = `net-lobby`),
        this.dialog.setAttribute(`aria-labelledby`, `nl-title`),
        document.body.append(this.dialog));
      let n = Q(`div`, `nl-shell`, this.dialog),
        r = Q(`header`, `nl-header`, n);
      Q(`div`, `nl-brand`, r).innerHTML = xe();
      let i = Q(`div`, `nl-title-wrap`, r);
      Z(
        Q(`p`, `nl-eyebrow`, i),
        `${(this.hooks.game ?? `Taipei Rush`).toUpperCase()} / ONLINE`,
      );
      let a = Q(`div`, `nl-title-row`, i);
      (this.label(`h1`, ``, a, X.title, `nl-title`),
        this.label(`span`, `nl-beta`, a, U.beta, `nl-beta`));
      let o = this.button(`nl-close`, `nl-close`, r, X.close, () =>
        this.close(),
      );
      (o.setAttribute(`aria-label`, this.tr(X.close)), Z(o, `×`));
      let s = Q(`main`, `nl-body`, n),
        c = Q(`section`, `nl-stage`, s);
      (this.label(`span`, `nl-stage-kicker`, c, X.stage),
        this.node(`div`, `nl-hero-art`, c, `nl-hero-art`));
      let l = Q(`div`, `nl-profile`, c);
      (this.node(`h2`, `nl-hero-name`, l, `nl-hero-name`),
        this.label(`p`, `nl-hero-note`, l, X.choose));
      let u = this.node(`div`, `nl-characters`, l, `nl-characters`);
      u.setAttribute(`role`, `group`);
      for (let e of f) {
        let t = Q(`button`, `nl-character`, u);
        ((t.type = `button`),
          (t.dataset.characterChoice = e),
          t.addEventListener(`click`, () => this.hooks.setCharacter(e)),
          this.choices.push(t));
      }
      let d = this.label(`label`, `nl-name-label`, l, X.nickname);
      ((d.htmlFor = `nl-self-name`),
        (this.nameInput = this.node(`input`, ``, l, `nl-self-name`)),
        (this.nameInput.maxLength = 24),
        (this.nameInput.autocomplete = `off`),
        this.nameInput.addEventListener(`change`, () => {
          let e = H(this.nameInput.value);
          ((this.nameInput.value = e), this.hooks.setNickname(e));
        }));
      let p = this.node(`section`, `nl-team`, s, `nl-team`),
        m = this.node(`div`, `nl-invitation`, p, `nl-invitation`),
        h = Q(`div`, ``, m);
      (this.node(`strong`, ``, h, `nl-invite-title`),
        this.node(`span`, ``, h, `nl-invite-code`),
        this.button(`nl-invite-join`, ``, m, X.join, () =>
          this.join(this.invitation),
        ));
      let g = Q(
        `div`,
        `nl-create-actions`,
        this.node(`div`, `nl-offline`, p, `nl-offline`),
      );
      this.choice(
        `nl-host`,
        `primary`,
        g,
        ve.friends,
        X.makeRoom,
        X.makeRoomNote,
        () => this.action(() => this.hooks.host()),
      );
      let _ = this.node(`div`, `nl-choice nl-code-card`, g, `nl-code-card`),
        v = Q(`span`, `nl-choice-icon`, _);
      ((v.innerHTML = ve.mail), v.setAttribute(`aria-hidden`, `true`));
      let ee = Q(`span`, `nl-choice-copy`, _),
        te = this.label(`label`, ``, ee, X.joinTitle);
      ((te.htmlFor = `nl-code`),
        this.label(`span`, `nl-choice-note`, ee, X.joinNote),
        _.addEventListener(`click`, (e) => {
          e.target.closest(`input,button`) || this.codeInput.focus();
        }));
      let y = Q(`form`, `nl-join`, _);
      ((y.id = `nl-join-form`),
        (y.noValidate = !0),
        (this.codeInput = this.node(`input`, ``, y, `nl-code`)),
        (this.codeInput.maxLength = 6),
        (this.codeInput.autocomplete = `off`),
        (this.codeInput.spellcheck = !1),
        this.codeInput.setAttribute(`autocapitalize`, `characters`),
        this.codeInput.setAttribute(`aria-describedby`, `nl-error`),
        this.codeInput.addEventListener(`input`, () => {
          ((this.codeInput.value = this.codeInput.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, ``)
            .slice(0, 6)),
            (this.localError = null),
            this.codeInput.removeAttribute(`aria-invalid`),
            (this.signature = ``));
        }),
        this.button(`nl-join`, `nl-small-button`, y, X.join, () =>
          this.join(this.codeInput.value),
        ),
        y.addEventListener(`submit`, (e) => {
          (e.preventDefault(), this.join(this.codeInput.value));
        }));
      let ne = this.node(`div`, `nl-room`, p, `nl-room`),
        re = Q(`div`, ``, ne);
      (this.label(`span`, `nl-room-label`, re, X.room),
        this.node(`strong`, ``, re, `nl-room-code`),
        this.button(`nl-share`, `nl-small-button`, ne, X.share, () =>
          this.hooks.share(),
        ));
      let ie = this.node(`div`, `nl-roster`, p, `nl-roster`),
        ae = Q(`div`, `nl-team-head`, ie);
      (this.label(`h2`, ``, ae, X.team),
        this.node(`span`, `nl-count`, ae, `nl-count`));
      let oe = this.node(`div`, `nl-slots`, ie, `nl-slots`);
      oe.setAttribute(`role`, `list`);
      for (let e = 0; e < 8; e++) {
        let e = Q(`div`, `nl-slot`, oe);
        (e.setAttribute(`role`, `listitem`), this.slots.push(e));
      }
      let b = this.node(`div`, `nl-settings`, p, `nl-settings`);
      ((this.publicInput = this.toggle(`nl-public`, b, X.public, (e) =>
        this.hooks.setPublic(e),
      )),
        (this.pvpInput = this.toggle(`nl-pvp`, b, X.playerDamage, (e) =>
          this.hooks.setPvp(e),
        )),
        (this.publicInput.closest(`label`).hidden = !0),
        this.label(
          `p`,
          `nl-settings-note`,
          b,
          X.hostSettings,
          `nl-settings-note`,
        ));
      let se = this.node(`p`, `nl-status`, p, `nl-status`);
      (se.setAttribute(`role`, `status`),
        se.setAttribute(`aria-atomic`, `true`));
      let ce = this.node(`div`, `nl-error-wrap`, p, `nl-error-wrap`);
      (this.node(`p`, ``, ce, `nl-error`).setAttribute(`role`, `alert`),
        this.button(`nl-retry`, `nl-small-button`, ce, X.retry, () =>
          this.action(() => this.hooks.retry()),
        ));
      let x = this.node(`footer`, `nl-footer`, n, `nl-footer`),
        le = Q(`div`, `nl-footer-copy`, x);
      (this.button(`nl-leave`, ``, le, X.leave, () => {
        this.hooks.state().phase
          ? (this.hooks.leave(),
            (this.actionUntil = 0),
            (this.signature = ``),
            this.isOpen && this.refresh())
          : this.action(() => this.hooks.leave());
      }),
        this.hooks.cops &&
          this.button(
            `nl-cops`,
            `nl-action`,
            x,
            { zh: `警察抓小偷`, en: `Cops & thieves` },
            () => {
              this.hooks.state().status === `connected` && this.hooks.cops?.();
            },
          ),
        this.button(`nl-enter`, `nl-action primary`, x, X.enter, () =>
          this.action(() => this.hooks.enter()),
        ),
        this.dialog.addEventListener(`cancel`, (e) => {
          (e.preventDefault(), this.close());
        }),
        this.dialog.addEventListener(`close`, () => {
          this.dialog.open || this.finishClose();
        }));
    }
    get isOpen() {
      return this.dialog.open;
    }
    showFeedback(e) {
      ((this.feedback = e),
        (this.feedbackUntil = performance.now() + 5e3),
        (this.signature = ``),
        this.isOpen && this.refresh());
    }
    open() {
      if (this.isOpen) return;
      ((this.previousFocus =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null),
        (this.localError = null),
        (this.feedback = null),
        (this.actionUntil = 0),
        (this.signature = ``),
        (this.tick = 0));
      let e = this.hooks.state();
      ((this.codeInput.value = y(e.invitedCode) || y(e.recentCode)),
        this.codeInput.removeAttribute(`aria-invalid`),
        this.ctx.ui.setExternalMenu?.(!0),
        (this.captured = !0),
        (this.releaseModal = this.ctx.input.captureModal((e) => {
          e.code === `Escape` && (e.preventDefault(), this.close());
        })));
      try {
        (this.dialog.showModal(), this.refresh(), this.get(`nl-close`).focus());
      } catch (e) {
        throw (this.finishClose(), e);
      }
    }
    close() {
      (this.isOpen && this.dialog.close(), this.finishClose());
    }
    finishClose() {
      if (!this.captured) return;
      ((this.captured = !1),
        this.releaseModal?.(),
        (this.releaseModal = null),
        this.dialog.contains(document.activeElement) &&
          document.activeElement.blur(),
        this.ctx.ui.setExternalMenu?.(!1));
      let e = this.previousFocus;
      ((this.previousFocus = null),
        e?.isConnected && e.focus({ preventScroll: !0 }),
        this.hooks.closed());
    }
    update(e) {
      this.isOpen &&
        ((this.tick += Math.max(0, e)),
        !(this.tick < 0.25) && ((this.tick = 0), this.refresh()));
    }
    dispose() {
      (this.close(), this.dialog.remove(), this.style.remove());
    }
    tr(e) {
      return this.ctx.t(e);
    }
    get(e) {
      return this.nodes.get(e);
    }
    node(e, t, n, r) {
      let i = Q(e, t, n);
      return ((i.id = r), this.nodes.set(r, i), i);
    }
    label(e, t, n, r, i) {
      let a = i ? this.node(e, t, n, i) : Q(e, t, n);
      return (this.labels.push([a, r]), Z(a, this.tr(r)), a);
    }
    button(e, t, n, r, i) {
      let a = this.label(`button`, t, n, r, e);
      return ((a.type = `button`), a.addEventListener(`click`, i), a);
    }
    choice(e, t, n, r, i, a, o) {
      let s = this.node(`button`, `nl-choice ${t}`.trim(), n, e);
      s.type = `button`;
      let c = Q(`span`, `nl-choice-icon`, s);
      ((c.innerHTML = r), c.setAttribute(`aria-hidden`, `true`));
      let l = Q(`span`, `nl-choice-copy`, s);
      return (
        this.label(`strong`, ``, l, i),
        this.label(`span`, `nl-choice-note`, l, a),
        s.addEventListener(`click`, o),
        s
      );
    }
    toggle(e, t, n, r) {
      let i = Q(`label`, `nl-setting`, t),
        a = this.node(`input`, ``, i, e);
      return (
        (a.type = `checkbox`),
        this.label(`span`, ``, i, n),
        a.addEventListener(`change`, () => {
          this.hooks.state().role === `host` && r(a.checked);
        }),
        a
      );
    }
    action(e) {
      if (!(this.hooks.state().phase || performance.now() < this.actionUntil)) {
        ((this.actionUntil = performance.now() + 400),
          (this.localError = null),
          (this.feedback = null),
          (this.signature = ``));
        try {
          e();
        } finally {
          this.isOpen && this.refresh();
        }
      }
    }
    join(e) {
      let t = y(e);
      if (!t) {
        ((this.localError = X.invalid),
          this.codeInput.setAttribute(`aria-invalid`, `true`),
          (this.signature = ``),
          this.refresh(),
          this.codeInput.focus());
        return;
      }
      this.action(() => this.hooks.join(t));
    }
    refresh() {
      let e = this.hooks.state(),
        t = this.tr(X.title),
        n = !!e.phase || performance.now() < this.actionUntil,
        r = performance.now() < this.feedbackUntil ? this.feedback : null,
        i = JSON.stringify([e, t, n, this.localError, r]);
      if (this.signature === i) return;
      this.signature = i;
      let a =
        e.role !== `off` &&
        (e.status === `connected` || e.status === `migrating`);
      for (let [e, t] of this.labels) e.id !== `nl-close` && Z(e, this.tr(t));
      (this.get(`nl-close`).setAttribute(`aria-label`, this.tr(X.close)),
        (this.get(`nl-beta`).title = this.tr(U.betaNote)),
        this.get(`nl-characters`).setAttribute(`aria-label`, this.tr(X.choose)),
        this.get(`nl-slots`).setAttribute(`aria-label`, this.tr(X.team)),
        this.nameInput.setAttribute(`aria-label`, this.tr(X.nickname)),
        (this.nameInput.placeholder = this.tr(p[e.character])),
        (this.codeInput.placeholder = this.tr(X.codeHint)),
        document.activeElement !== this.nameInput &&
          this.nameInput.value !== e.nickname &&
          (this.nameInput.value = e.nickname),
        Z(this.get(`nl-hero-name`), this.tr(p[e.character])),
        this.artCharacter !== e.character &&
          ((this.get(`nl-hero-art`).innerHTML = Pr(e.character)),
          (this.artCharacter = e.character)));
      for (let t of this.choices) {
        let n = t.dataset.characterChoice;
        (t.firstElementChild || (t.innerHTML = Pr(n, `face`)),
          t.setAttribute(`aria-label`, this.tr(p[n])),
          t.setAttribute(`aria-pressed`, String(n === e.character)));
      }
      let o = new Map(e.players.map((e) => [e.slot, e]));
      (o.size ||
        o.set(0, {
          slot: 0,
          peer: `local`,
          uid: ``,
          order: 0,
          char: e.character,
          name: e.nickname,
          wanted: 0,
          self: !0,
          host: !1,
          via: `self`,
          rtt: 0,
        }),
        Z(this.get(`nl-count`), `${o.size} / 8`));
      let s = -1;
      for (let e = 0; e < 8 && s < 0; e++) o.has(e) || (s = e);
      for (let e = 0; e < 8; e++) this.slot(e, o.get(e), a, n, t, e === s);
      ((this.invitation = y(e.invitedCode) || y(e.recentCode)),
        (this.get(`nl-invitation`).hidden = a || !this.invitation),
        Z(
          this.get(`nl-invite-title`),
          this.tr(e.invitedCode ? X.inviteTitle : X.recentTitle),
        ),
        Z(this.get(`nl-invite-code`), `${this.tr(X.room)} ${this.invitation}`),
        Z(
          this.get(`nl-invite-join`),
          this.tr(e.invitedCode ? X.join : X.rejoin),
        ),
        (this.get(`nl-offline`).hidden = a),
        (this.get(`nl-room`).hidden = !a),
        (this.get(`nl-settings`).hidden = !a),
        (this.get(`nl-roster`).hidden = !a),
        (this.get(`nl-team`).dataset.state = a ? `room` : `choose`),
        Z(this.get(`nl-room-code`), e.code || `—`),
        (this.publicInput.checked = e.public),
        (this.pvpInput.checked = e.pvp),
        (this.get(`nl-settings-note`).hidden = e.role !== `client`),
        (this.publicInput.disabled = this.pvpInput.disabled =
          e.role !== `host` || n || e.status !== `connected`));
      for (let e of [
        `nl-host`,
        `nl-find`,
        `nl-join`,
        `nl-invite-join`,
        `nl-retry`,
      ]) {
        let t = this.nodes.get(e);
        t && (t.disabled = n);
      }
      this.get(`nl-footer`).hidden = !a && !e.phase;
      let c = this.nodes.get(`nl-cops`);
      (c && (c.hidden = !a),
        (this.get(`nl-leave`).disabled = !e.phase && n),
        Z(this.get(`nl-leave`), this.tr(e.phase ? X.cancel : X.leave)),
        (this.get(`nl-share`).disabled = n || !e.code),
        (this.get(`nl-enter`).disabled = n || e.status !== `connected`),
        (this.get(`nl-enter`).hidden = !a),
        (this.get(`nl-leave`).hidden = !a && !e.phase),
        (this.codeInput.disabled = n));
      let l =
          e.phase === `searching`
            ? X.searching
            : e.phase === `hosting`
              ? X.hosting
              : X.joining,
        u = e.phase ? l : e.status === `migrating` ? X.migrating : r,
        d = this.get(`nl-status`),
        f = !!e.phase || e.status === `migrating`,
        m = f && d.dataset.busy !== `true`;
      (Z(d, u ? this.tr(u) : ``),
        (d.hidden = !u),
        (d.dataset.busy = String(f)));
      let h = this.localError || e.error,
        g = h ? this.tr(h) : ``,
        _ = !!h && g !== this.get(`nl-error`).textContent;
      ((this.get(`nl-error-wrap`).hidden = !h),
        Z(this.get(`nl-error`), g),
        (this.get(`nl-retry`).hidden = !!this.localError),
        Z(this.get(`nl-retry`), this.tr(e.retryLabel ?? X.retry)),
        _
          ? this.get(`nl-error-wrap`).scrollIntoView({ block: `nearest` })
          : m && d.scrollIntoView({ block: `nearest` }));
    }
    slot(e, t, n, r, i, a) {
      let o = JSON.stringify([
        t && [t.peer, t.char, t.name, t.self, t.host, t.via],
        n,
        r,
        i,
        a,
      ]);
      if (o === this.slotSignatures[e]) return;
      this.slotSignatures[e] = o;
      let s = this.slots[e];
      (s.replaceChildren(),
        (s.hidden = !t && !a),
        (s.style.borderTopColor = ``),
        s.removeAttribute(`title`),
        s.removeAttribute(`aria-label`));
      for (let e of [
        `peer`,
        `empty`,
        `character`,
        `self`,
        `host`,
        `connecting`,
      ])
        delete s.dataset[e];
      if (!t) {
        s.dataset.empty = String(e);
        let t = Q(`button`, `nl-empty-action`, s);
        ((t.type = `button`),
          (t.disabled = r),
          t.setAttribute(`aria-label`, `${this.tr(X.invite)} · ${e + 1} / 8`),
          Z(Q(`span`, `nl-plus`, t), `+`),
          Z(Q(`span`, `nl-empty-label`, t), this.tr(X.invite)),
          t.addEventListener(`click`, () => {
            n ? this.hooks.share() : this.get(`nl-host`).focus();
          }));
        return;
      }
      ((s.dataset.peer = t.peer),
        (s.dataset.character = t.char),
        (s.dataset.self = String(t.self)),
        (s.dataset.host = String(t.host)),
        (s.dataset.connecting = String(t.via === `connecting`)),
        (s.style.borderTopColor = Ir[e]),
        (Q(`div`, `nl-slot-portrait`, s).innerHTML = Pr(t.char, `face`)),
        (t.host || t.self) &&
          Z(
            Q(`span`, `nl-player-badge`, s),
            this.tr(t.self && t.host ? X.selfHost : t.host ? X.host : X.self),
          ));
      let c = Q(`div`, `nl-slot-foot`, s),
        l = t.name || this.tr(p[t.char]);
      (Z(Q(`span`, `nl-player-name`, c), l), (s.title = l));
      let u = this.tr(
        n
          ? t.via === `connecting`
            ? X.connecting
            : t.via === `relay`
              ? X.relayed
              : X.connected
          : X.local,
      );
      (Z(Q(`span`, `nl-player-status`, c), u),
        s.setAttribute(
          `aria-label`,
          `${l}${t.host ? ` · ${this.tr(X.host)}` : ``}${t.self ? ` · ${this.tr(X.self)}` : ``} · ${u}`,
        ));
    }
  },
  Rr = class {
    session;
    ms;
    el;
    stats;
    box;
    out;
    accept = null;
    t = 0;
    constructor(e, t) {
      ((this.session = e), (this.ms = t));
      let n = (this.el = document.createElement(`div`));
      ((n.id = `net-debug`),
        Object.assign(n.style, {
          position: `fixed`,
          right: `8px`,
          bottom: `8px`,
          zIndex: `9998`,
          width: `300px`,
          padding: `8px`,
          borderRadius: `8px`,
          background: `rgba(0,0,0,0.72)`,
          color: `#9cf`,
          font: `11px/1.35 ui-monospace,Menlo,monospace`,
          pointerEvents: `auto`,
        }));
      let r = document.createElement(`div`);
      ((r.textContent = `NET · 連線除錯 (copy-paste signalling)`),
        (r.style.cssText = `color:#fff;font-weight:700;margin-bottom:4px`),
        n.appendChild(r));
      let i = document.createElement(`div`);
      i.style.cssText = `display:flex;gap:4px;margin-bottom:4px;flex-wrap:wrap`;
      let a = (e, t) => {
        let n = document.createElement(`button`);
        return (
          (n.type = `button`),
          (n.textContent = e),
          (n.style.cssText = `font:inherit;padding:2px 6px;border-radius:4px;border:0;background:#246;color:#fff;cursor:pointer`),
          n.addEventListener(`click`, (e) => {
            (e.stopPropagation(), t());
          }),
          i.appendChild(n),
          n
        );
      };
      (a(`開房 Host`, () => void this.host()),
        a(`加入 Join`, () => void this.join()),
        a(`連線 Connect`, () => void this.connect()),
        a(`離開 Leave`, () => e.leave()),
        n.appendChild(i));
      let o = (e) => {
        let t = document.createElement(`textarea`);
        return (
          (t.placeholder = e),
          (t.rows = 2),
          (t.style.cssText = `width:100%;box-sizing:border-box;font:10px monospace;margin-bottom:4px;background:#111;color:#cfe;border:1px solid #345`),
          t.addEventListener(`keydown`, (e) => e.stopPropagation()),
          t.addEventListener(`focus`, () => t.select()),
          n.appendChild(t),
          t
        );
      };
      ((this.box = o(`paste the other tab's code here · 貼上對方的連線碼`)),
        (this.out = o(`your code appears here · 你的連線碼`)),
        (this.out.readOnly = !0),
        (this.stats = document.createElement(`pre`)),
        (this.stats.style.cssText = `margin:0;white-space:pre-wrap;color:#9f9`),
        n.appendChild(this.stats),
        document.body.appendChild(n));
    }
    show(e) {
      ((this.out.value = e), navigator.clipboard?.writeText(e).catch(() => {}));
    }
    async host() {
      let { offer: e, accept: t } = await this.session.pasteOffer();
      return ((this.accept = t), this.show(e), e);
    }
    async join(e = this.box.value) {
      let t = await this.session.pasteAnswer(e);
      return (this.show(t), t);
    }
    async connect(e = this.box.value) {
      if (!this.accept) throw Error(`create an offer first (Host)`);
      (await this.accept(e),
        (this.accept = null),
        document.activeElement?.blur?.());
    }
    update(e) {
      if (((this.t += e), this.t < 0.5)) return;
      this.t = 0;
      let t = this.session.debug();
      this.stats.textContent =
        `${t.role} · ${t.status} · slot ${t.slot} · epoch ${t.epoch}${t.code ? ` · ${t.code}` : ``}\nplayers ${t.players.map((e) => `${e.slot}${e.char[0]}${e.self ? `*` : ``}`).join(` `)}  ch ${t.channel}\n` +
        t.links.map(
          (e) =>
            `link ${e.status} rtt ${e.rtt}ms tx ${(e.txBytes / 1024).toFixed(0)}k rx ${(e.rxBytes / 1024).toFixed(0)}k`,
        ).join(`
`) +
        `\nnet ${this.ms().toFixed(3)} ms/frame` +
        (t.migrationMs ? `  migration ${t.migrationMs} ms` : ``);
    }
  },
  zr = {
    taipei: {
      page: `/`,
      name: { zh: `臺北`, en: `Taipei` },
      game: { zh: `臺北狂飆`, en: `Taipei Rush` },
      airport: { code: `TSA` },
      hsr: { code: `TPE` },
      utc: 8,
    },
    "hong-kong": {
      page: `/hong-kong/`,
      name: { zh: `香港`, en: `Hong Kong` },
      game: { zh: `香港狂飆`, en: `Hong Kong Rush` },
      airport: { code: `HKG` },
      hsr: null,
      utc: 8,
    },
    kaohsiung: {
      page: `/kaohsiung/`,
      name: { zh: `高雄`, en: `Kaohsiung` },
      game: { zh: `高雄狂飆`, en: `Kaohsiung Rush` },
      airport: { code: `KHH` },
      hsr: { code: `ZUY` },
      utc: 8,
    },
    tokyo: {
      page: `/tokyo/`,
      name: { zh: `東京`, en: `Tokyo` },
      game: { zh: `東京狂飆`, en: `Tokyo Rush` },
      airport: { code: `HND` },
      hsr: null,
      utc: 9,
    },
  },
  Br = {
    page: `/san-francisco/`,
    name: { zh: `舊金山`, en: `San Francisco` },
    game: { zh: `舊金山狂飆`, en: `San Francisco Rush` },
    airport: { code: `SFO` },
    hsr: null,
    utc: -8,
  },
  Vr = {
    page: `/london/`,
    name: { zh: `倫敦`, en: `London` },
    game: { zh: `倫敦狂飆`, en: `London Rush` },
    airport: { code: `LHR` },
    hsr: null,
    utc: 0,
  },
  Hr = {
    page: `/taichung/`,
    name: { zh: `臺中`, en: `Taichung` },
    game: { zh: `臺中狂飆`, en: `Taichung Rush` },
    airport: { code: `RMQ` },
    hsr: { code: `TAC` },
    utc: 8,
  },
  Ur = {
    page: `/mumbai/`,
    name: { zh: `孟買`, en: `Mumbai` },
    game: { zh: `孟買狂飆`, en: `Mumbai Rush` },
    airport: { code: `BOM` },
    hsr: null,
    utc: 5.5,
  },
  Wr = {
    page: `/tainan/`,
    name: { zh: `臺南`, en: `Tainan` },
    game: { zh: `臺南狂飆`, en: `Tainan Rush` },
    airport: { code: `TNN` },
    hsr: { code: `TNN` },
    utc: 8,
  },
  Gr = {
    ...zr,
    "san-francisco": Br,
    london: Vr,
    taichung: Hr,
    mumbai: Ur,
    seoul: {
      page: `/seoul/`,
      name: { zh: `首爾`, en: `Seoul` },
      game: { zh: `首爾狂飆`, en: `Seoul Rush` },
    },
    jakarta: {
      page: `/jakarta/`,
      name: { zh: `雅加達`, en: `Jakarta` },
      game: { zh: `雅加達狂飆`, en: `Jakarta Rush` },
    },
  };
