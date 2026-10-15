// tokyo/assets/tokyo-BZXVhKTn 10 — kit
// Lines 3588-4825 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
var Zn = { quotes: !0 },
  Qn = {
    civic: { zh: `市民高架道路`, en: `Civic Blvd Expressway` },
    jianguo: { zh: `建國高架道路`, en: `Jianguo Expressway` },
  },
  $n = 1e3,
  er = 8,
  tr = 235.62,
  nr = new p(),
  rr = class {
    kit;
    gps;
    clock;
    temp;
    wxIcon;
    lastWx = ``;
    lastMinute = -1;
    money;
    moneyEl;
    moneyShown = 0;
    moneyTarget = 0;
    moneyAcc = 0;
    moneyFlash;
    moneyFlashBad;
    deltaBox;
    wantedEl;
    stars = [];
    wantedShow;
    evading;
    lastLevel = 0;
    wantedLinger = 0;
    weaponEl;
    weaponIcon;
    weaponName;
    ammo;
    weaponShow;
    weaponDriving;
    weaponSolo;
    reserve;
    reloadFill;
    reloadShow;
    reloadMax = 1;
    lastWeapon = ``;
    weaponTimer = 0;
    evadeFill;
    lastEvade = -1;
    feed;
    toasts = [];
    promptBox;
    slots = [];
    reqs = [];
    promptsDirty = !1;
    shownActs = [];
    actsKey = ``;
    notifyFilter;
    objectiveGate;
    objHeld = !1;
    hintVisible;
    held = [];
    heldGap = 0;
    onPromptAction;
    centre = null;
    subOn = null;
    drvOn;
    misCardOn;
    hudRects = [];
    rectAcc = 1;
    wpDim;
    objEl;
    objText;
    objShow;
    objMsg = null;
    objAt = -99;
    subEl;
    subSpeaker;
    subText;
    subShow;
    subTimer = 0;
    subMsg = null;
    history = [];
    bigEl;
    bigTitle;
    bigAlt;
    bigSub;
    bigTimer = 0;
    bigKey = ``;
    bigAt = -99;
    bigShown = {};
    bigMsg = null;
    misEl;
    misTitle;
    misAlt;
    misTimer = 0;
    misWaiting = null;
    misWait = 0;
    misShown = null;
    hudShown = !0;
    timerEl;
    timerLabel;
    timerVal;
    timerShow;
    timerUrgent;
    timerMsg;
    lastTick = 999;
    timerDir = 0;
    timerLast = -1;
    progEl;
    progLabel;
    progFill;
    progShow;
    progMsg = null;
    progVal = 0;
    areaEl;
    areaZh;
    areaEn;
    areaTag;
    areaTimer = 0;
    areaDock = null;
    districtId = ``;
    areaKey = ``;
    districtCheck = 0;
    streetEl;
    streetZh;
    streetSec;
    streetEn;
    streetShow;
    streetKey = ``;
    fireEl;
    fireShow;
    fireWarned = -1;
    speedo;
    speedoShow;
    spdNum;
    spdFill;
    spdName;
    spdHp;
    spdRed;
    spdGear;
    spdHpLow;
    spdBurn;
    spdAcc = 0;
    lastVehId = -1;
    radioEl;
    radioName;
    radioAlt;
    radioFreq;
    radioSong;
    radioShow;
    radioTimer = 0;
    lastStation = -2;
    lastSong = ``;
    radioDots;
    wpEl;
    wpDist;
    wpShow;
    wpMission;
    wpAcc = 0;
    wpQ = NaN;
    lockEl;
    lockShow;
    lockDelay = 0;
    lastDevice = `kbm`;
    active = !1;
    constructor(e, t) {
      ((this.kit = e), (this.gps = t));
      let n = e.hudLayer,
        r = e.topLayer,
        i = B(`div`, `hud-tr`, n),
        a = B(`div`, `tr-clock`, i);
      ((this.wxIcon = B(`span`, `wx`, a)),
        (this.clock = new V(B(`span`, `clock`, a))),
        (this.temp = new V(B(`span`, `temp`, a))));
      let o = B(`div`, `tr-money`, i);
      ((this.moneyEl = o),
        B(`span`, `cur`, o, b()),
        (this.money = new V(B(`span`, `amt`, o))),
        (this.moneyFlash = new H(o, `up`)),
        (this.moneyFlashBad = new H(o, `down`)),
        (this.deltaBox = B(`div`, `tr-deltas`, i)),
        (this.wantedEl = B(`div`, `tr-wanted`, i)));
      for (let e = 0; e < 5; e++) {
        let e = B(`span`, `star`, this.wantedEl);
        ((e.innerHTML = z.star), this.stars.push(e));
      }
      ((this.wantedShow = new H(this.wantedEl, `show`)),
        (this.evading = new H(this.wantedEl, `evading`)),
        (this.evadeFill = new Qe(B(`i`, `evade`, this.wantedEl), `--v`)),
        (this.weaponEl = B(`div`, `tr-weapon`, i)),
        (this.weaponIcon = B(`span`, `wicon`, this.weaponEl)));
      let s = B(`span`, `wtext`, this.weaponEl);
      this.weaponName = new V(B(`span`, `wname`, s));
      let c = B(`span`, `ammo`, s);
      ((this.ammo = new V(B(`b`, `mag`, c))),
        (this.reserve = new V(B(`span`, `res`, c))));
      let l = B(`span`, `reload`, s);
      ((this.reloadFill = new Qe(B(`i`, ``, l), `--v`)),
        (this.reloadShow = new H(this.weaponEl, `reloading`)),
        (this.weaponShow = new H(this.weaponEl, `show`)),
        (this.weaponDriving = new H(this.weaponEl, `driving`)),
        (this.weaponSolo = new H(this.weaponEl, `solo`)),
        (this.feed = B(`div`, `hud-feed`, r)),
        (this.promptBox = B(`div`, `hud-prompts`, n)));
      for (let e = 0; e < 2; e++) {
        let t = B(`div`, `hud-prompt${e ? ` second` : ``}`, this.promptBox);
        this.slots.push({
          el: t,
          show: new H(t, `show`),
          key: ``,
          action: null,
        });
      }
      ((this.objEl = B(`div`, `hud-obj`, n)),
        B(`span`, `obj-mark`, this.objEl),
        (this.objText = B(`span`, `obj-text`, this.objEl)),
        (this.objShow = new H(this.objEl, `show`)),
        (this.subEl = B(`div`, `hud-sub`, r)),
        (this.subSpeaker = B(`span`, `sub-speaker`, this.subEl)),
        (this.subText = B(`span`, `sub-text`, this.subEl)),
        (this.subShow = new H(this.subEl, `show`)),
        (this.bigEl = B(`div`, `hud-big`, r)));
      let u = B(`div`, `big-band`, this.bigEl);
      ((this.bigTitle = B(`div`, `big-title`, u)),
        (this.bigAlt = B(`div`, `big-alt`, u)),
        (this.bigSub = B(`div`, `big-sub`, u)),
        (this.misEl = B(`div`, `hud-mission`, r)),
        e.bind(B(`div`, `hm-kicker`, this.misEl), J.missionStart),
        (this.misTitle = B(`div`, `hm-title`, this.misEl)),
        (this.misAlt = B(`div`, `hm-alt`, this.misEl)));
      let d = B(`div`, `hud-bars`, n);
      ((this.timerEl = B(`div`, `hb hb-timer`, d)),
        (this.timerLabel = new V(B(`span`, `hb-label`, this.timerEl))),
        (this.timerVal = new V(B(`span`, `hb-val`, this.timerEl))),
        (this.timerShow = new H(this.timerEl, `show`)),
        (this.timerUrgent = new H(this.timerEl, `urgent`)),
        (this.progEl = B(`div`, `hb hb-prog`, d)),
        (this.progLabel = new V(B(`span`, `hb-label`, this.progEl))));
      let f = B(`span`, `hb-bar`, this.progEl);
      ((this.progFill = new Qe(B(`i`, ``, f), `--v`)),
        (this.progShow = new H(this.progEl, `show`)));
      let p = B(`div`, `hud-br`, n);
      (e.touch ? i.appendChild(d) : p.appendChild(d),
        (this.areaEl = B(`div`, `hud-area`, p)),
        (this.areaZh = B(`div`, `area-name`, this.areaEl)),
        (this.areaEn = B(`div`, `area-alt`, this.areaEl)),
        (this.areaTag = B(`div`, `area-tag`, this.areaEl)),
        (this.streetEl = B(`div`, `hud-street`, p)));
      let m = B(`div`, `st-row`, this.streetEl);
      if (
        ((this.streetZh = new V(B(`span`, `st-zh`, m))),
        (this.streetSec = new V(B(`span`, `st-sec`, m))),
        (this.streetEn = new V(B(`div`, `st-en`, this.streetEl))),
        (this.streetShow = new H(this.streetEl, `show`)),
        (this.fireEl = B(`div`, `hud-fire`, p)),
        (this.fireEl.innerHTML = `<i></i><span></span>`),
        e.bind(this.fireEl.querySelector(`span`), Y.vehicleFire),
        (this.fireShow = new H(this.fireEl, `show`)),
        (this.speedo = B(`div`, `hud-speedo`, p)),
        (this.speedo.innerHTML = `
      <svg class="spd-gauge" viewBox="0 0 120 120" aria-hidden="true">
        <defs><linearGradient id="spdg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#35e0ff"/><stop offset=".6" stop-color="#8a7dff"/><stop offset="1" stop-color="#ff3d9a"/>
        </linearGradient></defs>
        <path class="spd-track" d="M24.64 95.36 A50 50 0 1 1 95.36 95.36"/>
        <path class="spd-fill" d="M24.64 95.36 A50 50 0 1 1 95.36 95.36" stroke="url(#spdg)"/>
        ${dr()}
      </svg>
      <div class="spd-center"><div class="spd-num">0</div><div class="spd-unit">KM/H</div></div>
      <div class="spd-gear">D</div>
      <div class="spd-foot"><div class="spd-name"></div><div class="spd-hp"><i></i></div></div>`),
        (this.speedoShow = new H(this.speedo, `show`)),
        e.touch)
      ) {
        let e = B(`div`, `hud-cs`, r);
        ((this.centre = e),
          e.append(
            this.areaEl,
            this.streetEl,
            this.fireEl,
            this.promptBox,
            this.subEl,
          ),
          (this.subOn = new H(e, `sub-on`)),
          (this.areaDock = B(`div`, `hud-area-dock`, n)));
      }
      ((this.drvOn = new H(e.root, `drv`)),
        (this.misCardOn = new H(e.root, `mis-card`)),
        (this.spdNum = new V(this.speedo.querySelector(`.spd-num`))),
        (this.spdFill = new Qe(
          this.speedo.querySelector(`.spd-fill`),
          `stroke-dashoffset`,
        )),
        (this.spdName = new V(this.speedo.querySelector(`.spd-name`))),
        (this.spdHp = new Qe(this.speedo.querySelector(`.spd-hp i`), `--v`)),
        (this.spdRed = new H(this.speedo, `redline`)),
        (this.spdGear = new V(this.speedo.querySelector(`.spd-gear`))),
        (this.spdHpLow = new H(this.speedo, `hp-low`)),
        (this.spdBurn = new H(this.speedo, `burning`)),
        (this.radioEl = B(`div`, `hud-radio`, n)));
      let h = B(`span`, `r-icon`, this.radioEl);
      h.innerHTML = z.radio;
      let g = B(`div`, `r-text`, this.radioEl);
      ((this.radioFreq = new V(B(`div`, `r-freq`, g))),
        (this.radioName = new V(B(`div`, `r-name`, g))),
        (this.radioAlt = new V(B(`div`, `r-alt`, g))),
        (this.radioSong = new V(B(`div`, `r-song`, g))),
        (this.radioDots = B(`div`, `r-dots`, this.radioEl)),
        (this.radioShow = new H(this.radioEl, `show`)),
        e.touch && this.feed.prepend(this.radioEl),
        (this.wpEl = B(`div`, `hud-wp`, n)));
      let _ = B(`div`, `wp-pin`, this.wpEl);
      ((_.innerHTML = z.pin),
        (this.wpDist = new V(B(`div`, `wp-dist`, this.wpEl))),
        (this.wpShow = new H(this.wpEl, `show`)),
        (this.wpMission = new H(this.wpEl, `mission`)),
        (this.wpDim = new H(this.wpEl, `dim`)),
        (this.lockEl = B(`div`, `hud-lock`, n)),
        e.bind(this.lockEl, J.clickToLook),
        (this.lockShow = new H(this.lockEl, `show`)),
        (this.moneyShown = this.moneyTarget = e.ctx.state.money),
        this.money.set($e(this.moneyShown)),
        e.onLang(() => this.relocalize()));
    }
    get feedEl() {
      return this.feed;
    }
    get promptVisibleAction() {
      return this.shownActs[0] ?? null;
    }
    hasPromptAction(e) {
      return this.shownActs.includes(e);
    }
    bigShownSince(e, t) {
      return (this.bigShown[e] ?? -1e9) >= t;
    }
    remember(e, t, n) {
      let r = 12;
      try {
        r = this.kit.ctx.env.hour;
      } catch {}
      let i = this.history[this.history.length - 1],
        a = (e) => (e == null ? `` : this.kit.t(e));
      (i && this.kit.t(i.msg) === this.kit.t(e) && a(i.speaker) === a(n)) ||
        (this.history.push({ msg: e, speaker: n, kind: t, hour: r }),
        this.history.length > 14 && this.history.shift());
    }
    notify(e, t = 0, n = `info`) {
      if (
        this.notifyFilter?.(this.kit.t(e)) ||
        ((n === `mission` || n === `info`) &&
          this.objMsg &&
          this.kit.ctx.time.real - this.objAt < er &&
          or(this.kit.t(e), this.kit.t(this.objMsg)))
      )
        return;
      if (this.kit.short && this.hintVisible?.()) {
        let r = this.kit.t(e);
        (this.held.some((e) => this.kit.t(e.text) === r) ||
          this.held.push({ text: e, duration: t, kind: n }),
          this.held.length > 4 && this.held.shift());
        return;
      }
      this.remember(e, n);
      let r = typeof e == `object` && e ? e.zh : String(e),
        i = this.toasts[this.toasts.length - 1];
      if (i && i.key === r && !i.out) {
        ((i.ttl = Math.max(i.ttl, t || 4.5)), U(i.el, `bump`));
        return;
      }
      let a = B(`div`, `toast k-${n}`, this.feed);
      this.kit.sfx(`ui_hover`, 0.35);
      let o = B(`span`, `t-icon`, a);
      ((o.innerHTML =
        n === `good`
          ? z.star
          : n === `bad`
            ? z.target
            : n === `mission`
              ? z.missions
              : z.phone),
        jn(
          B(`span`, `t-text`, a),
          this.kit.t(e),
          this.device(),
          this.kit.lang,
        ));
      let s = this.kit.t(e),
        c =
          t > 0
            ? t
            : Math.min(
                9,
                3.2 + s.length * (this.kit.lang === `en` ? 0.035 : 0.09),
              );
      this.toasts.push({
        el: a,
        key: r,
        ttl: c,
        out: !1,
        msg: e,
        kind: n,
        at: this.kit.ctx.time.real,
      });
      let l = +!!this.feed.querySelector(`.hud-help.show`),
        u =
          this.kit.touch && window.innerWidth > window.innerHeight
            ? window.innerHeight < 330
              ? 2
              : +(window.innerHeight < 430)
            : 0,
        d = this.kit.touch ? Math.max(1, 3 - l - u) : 4;
      for (; this.toasts.filter((e) => !e.out).length > d;) {
        let e = this.toasts.find((e) => !e.out);
        ((e.out = !0), (e.ttl = 0.35), e.el.classList.add(`out`));
      }
    }
    prompt(e) {
      let t = this.kit.ctx.time.frame;
      if (e == null) {
        for (let e = this.reqs.length - 1; e >= 0; e--)
          this.reqs[e].frame >= t ||
            (this.reqs.splice(e, 1), (this.promptsDirty = !0));
        return ``;
      }
      let n = this.kit.t(e),
        r = An(n) ?? ``,
        i = this.reqs.find((e) => e.act === r);
      return (
        i
          ? i.text !== n &&
            ((i.text = n), (i.msg = e), (this.promptsDirty = !0))
          : ((i = { act: r, msg: e, text: n, ttl: 0.25, frame: t }),
            this.reqs.push(i),
            (this.promptsDirty = !0)),
        (i.ttl = 0.25),
        (i.frame = t),
        r
      );
    }
    hasLivePrompt(e) {
      let t = this.kit.ctx.time.frame;
      for (let n of this.reqs) if (n.act === e && t - n.frame <= 1) return !0;
      return !1;
    }
    renderPrompts(e) {
      for (let t = this.reqs.length - 1; t >= 0; t--) {
        let n = this.reqs[t];
        ((n.ttl -= e),
          n.ttl <= 0 && (this.reqs.splice(t, 1), (this.promptsDirty = !0)));
      }
      if (!this.promptsDirty) return;
      ((this.promptsDirty = !1),
        this.reqs.length > 1 &&
          this.reqs.sort((e, t) => +(e.act === `enter`) - (t.act === `enter`)));
      let t = this.slots.length;
      if (t > 0 && this.reqs.length > t) {
        let e = -1;
        for (let n = t; n < this.reqs.length && e < 0; n++)
          this.reqs[n].act === `enter` && (e = n);
        if (e >= 0) {
          let n = this.reqs[t - 1];
          ((this.reqs[t - 1] = this.reqs[e]), (this.reqs[e] = n));
        }
      }
      let n = this.device(),
        r = [];
      for (let e = 0; e < this.slots.length; e++) {
        let t = this.slots[e],
          i = this.active ? this.reqs[e] : void 0;
        if (!i) {
          (t.show.set(!1), (t.action = null));
          continue;
        }
        let a = i.text + `|` + n;
        (a !== t.key &&
          ((t.key = a),
          jn(t.el, i.text, n, this.kit.lang),
          (t.action = An(i.text)),
          (t.el.dataset.act = t.action ?? ``)),
          t.show.on || U(t.el, `enter`),
          t.show.set(!0),
          t.action && r.push(t.action));
      }
      this.shownActs = r;
      let i = r.join(`,`);
      i !== this.actsKey && ((this.actsKey = i), this.onPromptAction?.(r));
    }
    device() {
      let e = this.kit.ctx.input.device;
      return this.kit.touch && e !== `gamepad` ? `touch` : e;
    }
    setObjective(e) {
      if (e == null) {
        ((this.objMsg = null), (this.objHeld = !1), this.objShow.set(!1));
        return;
      }
      let t = this.objMsg != null && this.kit.t(this.objMsg) === this.kit.t(e);
      if (((this.objMsg = e), !t)) {
        this.objAt = this.kit.ctx.time.real;
        let t = this.kit.t(e);
        for (let e of this.toasts)
          e.out ||
            (e.kind !== `mission` && e.kind !== `info`) ||
            this.objAt - e.at > er ||
            !or(this.kit.t(e.msg), t) ||
            ((e.out = !0), (e.ttl = 0.35), e.el.classList.add(`out`));
      }
      if (!(t && this.objShow.on)) {
        if (this.objectiveGate && !this.objectiveGate()) {
          this.objHeld = !0;
          return;
        }
        ((this.objHeld = !1),
          jn(this.objText, this.kit.t(e), this.device(), this.kit.lang, Zn),
          this.objShow.set(!0),
          U(this.objEl, `enter`));
      }
    }
    subtitle(e, t, n) {
      (this.remember(e, `sub`, n),
        (this.subMsg = { text: e, speaker: n }),
        this.renderSub());
      let r = this.kit.t(e);
      ((this.subTimer =
        t ??
        Math.min(8, 1.8 + r.length * (this.kit.lang === `en` ? 0.055 : 0.14))),
        this.subShow.set(!0),
        this.subOn?.set(!0),
        U(this.subEl, `enter`));
    }
    renderSub() {
      if (!this.subMsg) return;
      let e =
        this.subMsg.speaker == null ? `` : this.kit.t(this.subMsg.speaker);
      ((this.subSpeaker.textContent = e
        ? `${e}${this.kit.lang === `en` ? `: ` : `：`}`
        : ``),
        (this.subSpeaker.style.display = e ? `` : `none`));
      let t = this.subMsg.speaker;
      (e &&
        (this.subSpeaker.style.color = Pn(
          t && typeof t == `object` ? t.zh : e,
        )),
        jn(
          this.subText,
          this.kit.t(this.subMsg.text),
          this.device(),
          this.kit.lang,
        ));
    }
    bigMessage(e, t, n = {}) {
      let r =
          typeof e == `object` && e
            ? `${e.zh}|${String(e.en).toUpperCase()}`
            : String(e).toUpperCase(),
        i = /送醫|WASTED/.test(r)
          ? `wasted`
          : /被捕|BUSTED/.test(r)
            ? `busted`
            : /任務完成|MISSION PASSED/.test(r)
              ? `passed`
              : /任務失敗|MISSION FAILED/.test(r)
                ? `failed`
                : r,
        a = this.kit.ctx.time.real;
      if (i === this.bigKey && a - this.bigAt < 2.5 && this.bigTimer > 0) {
        t &&
          ((this.bigMsg = { title: e, sub: t }),
          jn(this.bigSub, this.kit.t(t), this.device(), this.kit.lang));
        return;
      }
      (this.misTimer > 1.5 &&
        this.misShown &&
        ((this.misWaiting = this.misShown),
        (this.misTimer = 0),
        this.misEl.classList.remove(`show`)),
        (this.bigKey = i),
        (this.bigAt = a),
        (this.bigShown[i] = a),
        (this.bigMsg = { title: e, sub: t }));
      let o = r,
        s = `gold`;
      ((s = /送醫|WASTED|失敗|FAILED|死/.test(o)
        ? `red`
        : /被捕|BUSTED|逮捕/.test(o)
          ? `blue`
          : /完成|PASSED|成功|COMPLETE/.test(o)
            ? `gold`
            : `white`),
        (this.bigEl.className = `hud-big tone-${s}`),
        n.color
          ? this.bigEl.style.setProperty(`--tone`, n.color)
          : this.bigEl.style.removeProperty(`--tone`),
        this.renderBig(),
        (this.bigTimer = n.duration ?? 4.2),
        U(this.bigEl, `show`));
      try {
        this.kit.ctx.audio.duck(0.6, Math.min(3, this.bigTimer));
      } catch {}
    }
    renderBig() {
      if (!this.bigMsg) return;
      let { title: e, sub: t } = this.bigMsg,
        n = this.kit.t(e),
        r = this.kit.alt(e);
      ((this.bigTitle.textContent = n),
        (this.bigAlt.textContent = r),
        this.bigEl.style.setProperty(
          `--tw`,
          String(Math.max(4, sr(n, 1.16, 0.8))),
        ),
        this.bigEl.style.setProperty(
          `--aw`,
          String(Math.max(6, sr(r, 1.9, 1.4))),
        ),
        jn(this.bigSub, t ? this.kit.t(t) : ``, this.device(), this.kit.lang));
    }
    missionBanner(e) {
      ((this.misWaiting = e),
        (this.misWait = 0),
        this.hudShown && this.bigTimer <= 0 && this.playBanner());
    }
    dropMissionBanner() {
      this.misWaiting = null;
    }
    playBanner() {
      let e = this.misWaiting;
      e &&
        ((this.misWaiting = null),
        (this.misShown = e),
        (this.misTitle.textContent = this.kit.t(e)),
        (this.misAlt.textContent = this.kit.alt(e)),
        (this.misTimer = 3.8),
        U(this.misEl, `show`));
    }
    setShown(e) {
      e !== this.hudShown &&
        ((this.hudShown = e),
        !e &&
          this.misTimer > 2.8 &&
          this.misShown &&
          ((this.misWaiting = this.misShown),
          (this.misTimer = 0),
          this.misEl.classList.remove(`show`)),
        e && this.misWaiting && (this.misWait = 0.45));
    }
    setTimer(e, t) {
      if (e == null) {
        (this.timerShow.set(!1), (this.timerDir = 0), (this.timerLast = -1));
        return;
      }
      (this.timerLast >= 0 &&
        Math.abs(e - this.timerLast) > 1e-4 &&
        (this.timerDir = e > this.timerLast ? 1 : -1),
        (this.timerLast = e),
        (this.timerMsg = t),
        this.timerLabel.set(this.kit.t(t ?? J.time)),
        this.timerVal.set(this.timerDir > 0 ? cr(e) : et(e)),
        this.timerUrgent.set(this.timerDir <= 0 && e <= 10),
        this.timerShow.set(!0));
      let n = Math.ceil(e);
      n !== this.lastTick &&
        (n <= 5 &&
          n >= 1 &&
          n < this.lastTick &&
          this.kit.sfx(`crosswalk_tick`, 0.7),
        (this.lastTick = n));
    }
    setProgress(e, t = 0) {
      if (e == null) {
        (this.progShow.set(!1), (this.progMsg = null));
        return;
      }
      ((this.progMsg = e), this.progLabel.set(this.kit.t(e)));
      let n = Math.max(0, Math.min(1, t));
      ((this.progVal = n),
        this.progFill.set(n.toFixed(3)),
        (this.progEl.dataset.tone =
          n > 0.5 ? `good` : n > 0.25 ? `warn` : `bad`),
        this.progShow.set(!0));
    }
    moneyChanged(e, t) {
      if (((this.moneyTarget = e), Math.abs(t) < 0.5)) return;
      let n = B(
        `div`,
        `delta ${t > 0 ? `pos` : `neg`}`,
        this.deltaBox,
        `${t > 0 ? `+` : `−`}${D(Math.abs(t))}`,
      );
      for (
        setTimeout(() => n.remove(), 2600);
        this.deltaBox.childElementCount > 3;
      )
        this.deltaBox.firstElementChild.remove();
      (t > 0 ? this.moneyFlash : this.moneyFlashBad).set(!0);
    }
    wantedChanged(e, t) {
      if (e > t) for (let n = t; n < e && n < 5; n++) U(this.stars[n], `pop`);
    }
    showDistrict(e = !1) {
      let t = this.kit.ctx,
        n = t.player.position,
        r = t.plan.districtAt(n.x, n.z),
        i = r.id,
        a = r.name;
      try {
        let e = t.districts.packAt(n.x, n.z);
        e &&
          e.bounds &&
          e.id !== r.id &&
          !t.plan.districts.some((t) => t.id === e.id) &&
          ((i = e.id), (a = Ln[e.id]?.name ?? e.name));
      } catch {}
      if (!e && i === this.areaKey) return;
      ((this.areaKey = i),
        (this.districtId = r.id),
        (this.areaZh.textContent = this.kit.t(a)),
        (this.areaEn.textContent = this.kit.alt(a).toUpperCase()));
      let o = Ln[i]?.tag ?? (this.kit.region.taglines ?? In)[i];
      this.areaTag.textContent = o ? this.kit.t(o) : ``;
      let s =
        this.areaDock &&
        this.centre &&
        !!ir(t) &&
        !document.body.classList.contains(`tr-portrait`);
      if (this.areaDock && this.centre) {
        let e = s ? this.areaDock : this.centre;
        this.areaEl.parentElement !== e &&
          (s ? e.appendChild(this.areaEl) : e.prepend(this.areaEl));
      }
      (this.areaEl.classList.toggle(`quick`, !!s),
        (this.areaTimer = s ? 2.6 : 4.8),
        U(this.areaEl, `show`));
    }
    get currentDistrict() {
      return this.districtId;
    }
    update(e) {
      let n = this.kit.ctx,
        r = this.device();
      if (r !== this.lastDevice) {
        this.lastDevice = r;
        for (let e of this.slots) e.key = ``;
        ((this.promptsDirty = !0),
          this.objMsg &&
            jn(this.objText, this.kit.t(this.objMsg), r, this.kit.lang, Zn),
          this.subTimer > 0 && this.renderSub());
        for (let e of this.toasts) {
          let t = e.el.querySelector(`.t-text`);
          t && !e.out && jn(t, this.kit.t(e.msg), r, this.kit.lang);
        }
      }
      if (
        (this.renderPrompts(e),
        this.objHeld &&
          this.objMsg &&
          (!this.objectiveGate || this.objectiveGate()) &&
          this.setObjective(this.objMsg),
        this.held.length &&
          ((this.heldGap -= e),
          this.heldGap <= 0 && !(this.kit.short && this.hintVisible?.())))
      ) {
        this.heldGap = 1.2;
        let e = this.held.shift();
        this.notify(e.text, e.duration, e.kind);
      }
      let i = 12;
      try {
        i = n.env.hour;
      } catch {}
      let a = `clear`;
      try {
        a = n.env.weather;
      } catch {}
      let o = Math.floor(i * 60);
      o !== this.lastMinute &&
        ((this.lastMinute = o),
        this.clock.set(Ye(i)),
        this.temp.set(`${ur(i, a)}°`));
      let s = i < 6 || i >= 18.5,
        c = a + (s ? `n` : `d`);
      if (
        (c !== this.lastWx &&
          ((this.lastWx = c),
          (this.lastMinute = -1),
          (this.wxIcon.innerHTML =
            a === `rain`
              ? z.rain
              : a === `storm`
                ? z.storm
                : a === `fog`
                  ? z.fog
                  : a === `cloudy`
                    ? z.cloud
                    : s
                      ? z.moon
                      : z.sun),
          (this.wxIcon.dataset.w = a === `clear` ? (s ? `moon` : `sun`) : a)),
        (this.moneyAcc += e),
        this.moneyShown !== this.moneyTarget && this.moneyAcc >= 0.05)
      ) {
        let e = this.moneyAcc;
        this.moneyAcc = 0;
        let t = this.moneyTarget - this.moneyShown,
          n = Math.max(1, Math.abs(t) * Math.min(1, e * 6));
        ((this.moneyShown =
          Math.abs(t) <= n
            ? this.moneyTarget
            : this.moneyShown + Math.sign(t) * n),
          this.money.set($e(this.moneyShown)),
          this.moneyShown === this.moneyTarget &&
            (this.moneyFlash.set(!1), this.moneyFlashBad.set(!1)));
      }
      let l = 0,
        u = !1;
      try {
        ((l = Math.max(0, Math.min(5, Math.round(n.police.level)))),
          (u = !!n.police.evading));
      } catch {}
      if (l !== this.lastLevel) {
        for (let e = 0; e < 5; e++) this.stars[e].classList.toggle(`on`, e < l);
        (l < this.lastLevel && l === 0 && (this.wantedLinger = 2.5),
          (this.lastLevel = l));
      }
      (this.wantedLinger > 0 && (this.wantedLinger -= e),
        this.wantedShow.set(l > 0 || this.wantedLinger > 0),
        this.evading.set(u && l > 0));
      let d = 0;
      if (u && l > 0)
        try {
          d = Math.max(0, Math.min(1, n.police.evadeProgress ?? 0));
        } catch {}
      Math.abs(d - this.lastEvade) > 0.01 &&
        ((this.lastEvade = d), this.evadeFill.set(d.toFixed(2)));
      let f = `fists`,
        p = -1,
        m = 0,
        h = 0;
      try {
        let e = n.player;
        ((f = e.weapon), (m = e.ammo?.[f] ?? 0));
        let t = e.magazine?.[f];
        (t != null && (p = t), (h = e.reloading ?? 0));
      } catch {}
      f !== this.lastWeapon &&
        ((this.lastWeapon = f),
        (this.weaponIcon.innerHTML = z[f] ?? z.fists),
        this.weaponName.set(this.kit.t(Vn[f] ?? f)),
        (this.weaponTimer = 3),
        U(this.weaponEl, `swap`));
      let g = f === `pistol` || f === `smg`;
      (g
        ? p >= 0
          ? (this.ammo.set(String(p)), this.reserve.set(`/ ${m}`))
          : (this.ammo.set(String(m)), this.reserve.set(``))
        : (this.ammo.set(``), this.reserve.set(``)),
        h > 0 &&
          (this.reloadShow.on || (this.reloadMax = Math.max(0.3, h)),
          this.reloadFill.set((1 - h / this.reloadMax).toFixed(2)),
          (this.weaponTimer = Math.max(this.weaponTimer, 1.5))),
        this.reloadShow.set(g && h > 0),
        this.weaponTimer > 0 && (this.weaponTimer -= e));
      let _ = n.input.down(`aim`),
        v = !!ir(n);
      (this.weaponDriving.set(v),
        this.weaponShow.set(
          !v && (f !== `fists` || this.weaponTimer > 0 || _),
        ));
      let y = 1;
      try {
        y = n.player.ownedWeapons?.length ?? 1;
      } catch {}
      this.weaponSolo.set(f === `fists` && y <= 1);
      for (let t = this.toasts.length - 1; t >= 0; t--) {
        let n = this.toasts[t];
        ((n.ttl -= e),
          n.ttl <= 0 &&
            (n.out
              ? (n.el.remove(), this.toasts.splice(t, 1))
              : ((n.out = !0), (n.ttl = 0.35), n.el.classList.add(`out`))));
      }
      if (
        (this.subTimer > 0 &&
          ((this.subTimer -= e),
          this.subTimer <= 0 && (this.subShow.set(!1), this.subOn?.set(!1))),
        this.bigTimer > 0 &&
          ((this.bigTimer -= e),
          this.bigTimer <= 0 && this.bigEl.classList.remove(`show`)),
        this.misTimer > 0 &&
          ((this.misTimer -= e),
          this.misTimer <= 0 && this.misEl.classList.remove(`show`)),
        this.misWaiting &&
          this.hudShown &&
          this.bigTimer <= 0 &&
          ((this.misWait -= e), this.misWait <= 0 && this.playBanner()),
        this.misCardOn.set(this.misTimer > 1.3),
        this.areaTimer > 0 &&
          ((this.areaTimer -= e),
          this.areaTimer <= 0
            ? this.areaEl.classList.remove(`show`)
            : this.areaDock &&
              this.areaEl.parentElement === this.centre &&
              this.areaTimer > 0.4 &&
              ir(n) &&
              !document.body.classList.contains(`tr-portrait`) &&
              ((this.areaTimer = 0), this.areaEl.classList.remove(`show`))),
        !this.active)
      )
        return;
      let b = n.player.position;
      this.districtCheck -= e;
      let x = ir(n);
      if (this.districtCheck <= 0) {
        ((this.districtCheck = 0.5), this.showDistrict(!1));
        let e = !1,
          r = x ? this.expresswayAt(b.x, b.y, b.z) : null;
        if (r) {
          e = !0;
          let n = `xw` + r.zh + this.kit.lang;
          if (n !== this.streetKey) {
            this.streetKey = n;
            let e = this.kit.lang,
              i = e === `ja` ? (r.ja ?? t(r.zh) ?? r.zh) : ``;
            (this.streetZh.set(e === `zh` ? r.zh : e === `ja` ? i : r.en),
              this.streetSec.set(``),
              this.streetEn.set(e === `en` ? r.zh : r.en),
              U(this.streetEl, `flip`));
          }
        } else if (x) {
          let r = n.plan.surfaceAt(b.x, b.z),
            i =
              r === `road` || r === `crosswalk` || r === `sidewalk`
                ? n.plan.roadAt(b.x, b.z)
                : null;
          if (i && i.name.zh && i.name.zh !== `無名巷`) {
            e = !0;
            let r = n.plan.streetLabel(i, b.x, b.z),
              a = r.full.zh + this.kit.lang;
            if (a !== this.streetKey) {
              if (((this.streetKey = a), this.kit.lang === `ja`)) {
                let e = r.ja ?? t(r.zh) ?? r.zh,
                  n = r.full.ja ?? t(r.full.zh) ?? r.full.zh;
                (this.streetZh.set(e),
                  this.streetSec.set(n.startsWith(e) ? n.slice(e.length) : ``),
                  this.streetEn.set(r.n ? r.en : r.full.en));
              } else
                this.kit.lang === `zh`
                  ? (this.streetZh.set(r.zh),
                    this.streetSec.set(
                      r.sec ||
                        (r.full.zh.startsWith(r.zh)
                          ? r.full.zh.slice(r.zh.length)
                          : ``),
                    ),
                    this.streetEn.set(r.n ? r.en : r.full.en))
                  : (this.streetZh.set(r.full.en),
                    this.streetSec.set(``),
                    this.streetEn.set(r.full.zh));
              U(this.streetEl, `flip`);
            }
          }
        }
        let i = !1;
        if (this.areaDock && this.centre) {
          i = !document.body.classList.contains(`tr-portrait`);
          let e = i ? this.areaDock : this.centre;
          this.streetEl.parentElement !== e &&
            (i
              ? e.appendChild(this.streetEl)
              : this.centre.insertBefore(this.streetEl, this.fireEl));
        }
        (this.centre &&
          (this.areaTimer > 0 ||
            (!i && this.kit.compact && this.subTimer > 0)) &&
          (e = !1),
          this.streetShow.set(e));
      }
      if ((this.speedoShow.set(!!x), this.drvOn.set(!!x), x)) {
        if (
          ((this.spdAcc += e),
          x.id !== this.lastVehId &&
            ((this.lastVehId = x.id),
            this.spdName.set(this.kit.t(x.spec?.name ?? x.kind)),
            (this.speedo.dataset.kind = x.kind),
            (this.spdAcc = 1)),
          this.spdAcc >= 0.1)
        ) {
          this.spdAcc = 0;
          let e = Math.abs(x.speed) * 3.6,
            t = Math.max(40, (x.spec?.maxSpeed ?? 40) * 3.6),
            n = Math.min(1, e / t);
          (this.spdNum.set(String(Math.round(e))),
            this.spdFill.set((tr * (1 - n)).toFixed(0)),
            this.spdRed.set(n > 0.9),
            this.spdGear.set(
              x.speed < -0.3
                ? `R`
                : e < 1
                  ? `N`
                  : x.gear
                    ? String(x.gear)
                    : `D`,
            ));
          let r = Math.max(0, Math.min(1, x.health / (x.maxHealth || $n)));
          (this.spdHp.set(r.toFixed(2)), this.spdHpLow.set(r < 0.4));
          let i = x.onFire ?? (r < 0.15 && !x.destroyed);
          if (
            (this.fireShow.set(i),
            this.spdBurn.set(i),
            i && this.fireWarned !== x.id)
          ) {
            ((this.fireWarned = x.id), this.notify(Y.vehicleFire, 4, `bad`));
            try {
              this.kit.ctx.input.rumble(0.6, 250);
            } catch {}
          }
        }
      } else ((this.lastVehId = -1), this.fireShow.set(!1));
      let S = -1;
      try {
        S = n.audio.station;
      } catch {}
      if (S !== this.lastStation) {
        let e = this.lastStation === -2;
        ((this.lastStation = S), !e && x && this.showRadio(S));
      }
      if (x && S >= 0 && (this.radioAcc += e) > 0.5) {
        this.radioAcc = 0;
        let e = this.nowPlaying();
        if (e && e !== this.lastSong) {
          let t = this.lastSong !== ``;
          ((this.lastSong = e),
            this.radioSong.set(e),
            t && !this.radioShow.on && this.showRadio(S));
        }
      }
      (this.radioTimer > 0 &&
        ((this.radioTimer -= e),
        this.radioTimer <= 0 && this.radioShow.set(!1)),
        (this.rectAcc += e),
        this.rectAcc >= 0.5 &&
          this.gps.waypoint &&
          ((this.rectAcc = 0), this.measureHud()),
        (this.wpAcc += e),
        this.wpAcc >= 1 / 20 &&
          ((this.wpAcc = 0), this.updateWaypointMarker()));
      let C =
        !this.kit.touch &&
        n.input.device === `kbm` &&
        !n.input.pointerLocked &&
        !n.paused;
      ((this.lockDelay = C ? this.lockDelay + e : 0),
        this.lockShow.set(this.lockDelay > 1.2 && !this.radioShow.on));
    }
    radioAcc = 0;
    xwRoads = null;
    expresswayAt(e, t, r) {
      let i = this.kit.ctx.plan,
        a = 0;
      try {
        a = i.groundHeight(e, r);
      } catch {}
      if (t - a < 5) return null;
      this.xwRoads ||= i.roads.filter((e) => e.elevated === `expressway`);
      for (let t of this.xwRoads) {
        let a = t.axis === `x` ? e : r,
          o = t.axis === `x` ? r : e;
        if (
          a < Math.min(t.from, t.to) ||
          a > Math.max(t.from, t.to) ||
          Math.abs(o - t.at) > t.halfTotal + 4
        )
          continue;
        let s = i.dataset.expressways?.find((e) => e.overRoads?.includes(t.id));
        return (
          Qn[t.id] ??
          s?.name ?? {
            zh: n.on
              ? n.t(
                  `${t.name.zh.replace(/[大]?道$|路$/, ``)}高架道路`,
                  `${n.jz(t.name.zh.replace(/[大]?道$|路$/, ``))}高架道路`,
                )
              : `${t.name.zh.replace(/[大]?道$|路$/, ``)}高架道路`,
            en: `${t.name.en.replace(/ (Rd|Blvd|Ave)\.?$/, ``)} Expressway`,
          }
        );
      }
      return null;
    }
    nowPlaying() {
      try {
        let e = this.kit.ctx.audio.nowPlaying;
        if (!e || e.jingle) return null;
        let t = this.kit.t(e.title);
        return e.artist ? `♪ ${t} — ${e.artist}` : `♪ ${t}`;
      } catch {
        return null;
      }
    }
    showRadio(e) {
      let t = this.kit.ctx,
        n = [];
      try {
        n = t.audio.stations;
      } catch {}
      if (e < 0 || !n[e])
        (this.radioFreq.set(``),
          this.radioName.set(this.kit.t(J.radioOff)),
          this.radioAlt.set(``),
          this.radioSong.set(``));
      else {
        let t = n[e],
          r = Gn(this.kit.t(t.name)),
          i = Gn(this.kit.alt(t.name));
        (this.radioFreq.set(r.freq || i.freq), this.radioName.set(r.name));
        let a = t.genre ? this.kit.t(Wn[t.genre] ?? t.genre) : ``;
        this.radioAlt.set([i.name, a].filter(Boolean).join(` · `));
        let o = this.nowPlaying();
        ((this.lastSong = o ?? ``), this.radioSong.set(o ?? ``));
      }
      let r = n.length;
      if (this.radioDots.childElementCount !== r + 1) {
        this.radioDots.textContent = ``;
        for (let e = -1; e < r; e++) B(`i`, ``, this.radioDots);
      }
      for (let t = 0; t <= r; t++)
        this.radioDots.children[t].classList.toggle(`on`, t - 1 === e);
      ((this.radioTimer = this.kit.touch ? 2 : 3.2),
        this.radioShow.set(!0),
        U(this.radioEl, `bump`));
    }
    updateWaypointMarker() {
      let e = this.gps.waypoint,
        t = this.kit.ctx;
      if (!e) {
        this.wpShow.set(!1);
        return;
      }
      let n = t.player.position,
        r = Math.hypot(e.x - n.x, e.z - n.z),
        i = Math.max(r, this.gps.remaining(n.x, n.z));
      if (r < 12) {
        this.wpShow.set(!1);
        return;
      }
      let a = 0;
      try {
        a = t.plan.groundHeight(e.x, e.z);
      } catch {}
      if (
        (nr.set(e.x, a + 2.2, e.z).project(t.camera),
        nr.z > 1 ||
          nr.z < (t.camera.reversedDepth ? 0 : -1) ||
          Math.abs(nr.x) > 1.05 ||
          Math.abs(nr.y) > 1.05)
      ) {
        this.wpShow.set(!1);
        return;
      }
      let o = window.innerWidth,
        s = window.innerHeight,
        c = (nr.x * 0.5 + 0.5) * o,
        l = (-nr.y * 0.5 + 0.5) * s;
      this.wpEl.style.transform = `translate3d(${c.toFixed(1)}px,${l.toFixed(1)}px,0)`;
      let u = this.hudRects,
        d = !1;
      for (let e = 0; e < u.length; e += 4)
        if (
          c + 22 > u[e] &&
          c - 22 < u[e + 2] &&
          l + 22 > u[e + 1] &&
          l - 40 < u[e + 3]
        ) {
          d = !0;
          break;
        }
      this.wpDim.set(d);
      let f =
        i >= 1e3
          ? -Math.round(i / 100)
          : i >= 100
            ? Math.round(i / 10) * 10
            : Math.round(i);
      (f !== this.wpQ &&
        ((this.wpQ = f),
        this.wpDist.set(f < 0 ? `${(-f / 10).toFixed(1)} km` : `${f} m`)),
        this.wpMission.set(!e.user),
        this.wpShow.set(!0));
    }
    measureHud() {
      let e = this.hudRects;
      e.length = 0;
      let t = this.kit.hudLayer,
        n = this.kit.topLayer,
        r = [
          this.objEl,
          t.querySelector(`.hud-tr`),
          t.querySelector(`.hud-br`),
          this.centre,
          this.feed,
          n.querySelector(`.hud-sub`),
          this.promptBox,
          this.areaDock,
        ];
      for (let t of r) {
        if (!t) continue;
        let n = t.getBoundingClientRect();
        n.width < 2 || n.height < 2 || e.push(n.left, n.top, n.right, n.bottom);
      }
    }
    relocalize() {
      let e = this.device();
      this.objMsg &&
        jn(this.objText, this.kit.t(this.objMsg), e, this.kit.lang, Zn);
      for (let e of this.reqs) e.text = this.kit.t(e.msg);
      for (let e of this.slots) e.key = ``;
      ((this.promptsDirty = !0),
        this.renderSub(),
        this.renderBig(),
        (this.timerMsg !== void 0 || this.timerShow.on) &&
          this.timerLabel.set(this.kit.t(this.timerMsg ?? J.time)),
        this.progMsg && this.progLabel.set(this.kit.t(this.progMsg)));
      for (let t of this.toasts) {
        let n = t.el.querySelector(`.t-text`);
        n && jn(n, this.kit.t(t.msg), e, this.kit.lang);
      }
      ((this.lastWeapon = ``),
        (this.streetKey = ``),
        (this.areaKey = ``),
        (this.lastVehId = -1),
        this.areaTimer > 0 && this.showDistrict(!0));
    }
    setActive(e) {
      if (((this.active = e), (this.promptsDirty = !0), !e)) {
        for (let e of this.slots) e.show.set(!1);
        (this.wpShow.set(!1), this.lockShow.set(!1));
      }
    }
  };
