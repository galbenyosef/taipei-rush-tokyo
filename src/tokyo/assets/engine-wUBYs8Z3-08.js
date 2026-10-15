// tokyo/assets/engine-wUBYs8Z3 08 — data
// Lines 2189-2563 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var er = {
    lang: $n(),
    quality: `auto`,
    masterVolume: 0.8,
    musicVolume: 0.6,
    sfxVolume: 0.9,
    sensitivity: 1,
    invertY: !1,
    showFps: !1,
    frameRate: `auto`,
  },
  tr = class e {
    events;
    data;
    saveTimer = 0;
    beforeSave = [];
    world = 1;
    region = `tokyo`;
    currency = `JPY`;
    shared;
    seen;
    constructor(t) {
      ((this.events = t),
        (this.data = e.load()),
        (this.seen = this.data.lastPlayedAt));
      let n = Qn();
      (n
        ? (this.data.settings.lang = n)
        : !this.data.langPicked || this.data.langJa
          ? (this.data.settings.lang = `ja`)
          : this.data.settings.lang === `ja` &&
            (this.data.settings.lang = `zh`),
        (r.on = this.data.settings.lang === `ja`),
        (this.shared = new Fe(this, (e) =>
          this.events.emit(`money:changed`, {
            money: e,
            delta: 0,
            reason: `wallet:sync`,
          }),
        )),
        r.on && this.fetchJa(),
        typeof window < `u` &&
          typeof window.addEventListener == `function` &&
          window.addEventListener(`pageshow`, (e) => {
            e.persisted && !this.resetting && this.yieldToNewer(I());
          }));
    }
    yieldToNewer(e) {
      let t = e?.lastPlayedAt;
      if (typeof t != `string` || t === this.seen) return !1;
      let n = Date.parse(t);
      if (!(
        Number.isFinite(n) && n > ((this.seen && Date.parse(this.seen)) || 0)
      ))
        return !1;
      let r = `${j}:stale-reload`;
      try {
        let e = Number(sessionStorage.getItem(r));
        if (e > 0 && Date.now() - e < 6e4)
          return (
            console.warn(
              `[state] a newer save on disk again within a minute: writing over it as before (no reload loop)`,
            ),
            (this.seen = t),
            !1
          );
        sessionStorage.setItem(r, String(Date.now()));
      } catch {}
      return (this.reloadStale(), !0);
    }
    reloadStale() {
      if (
        ((this.resetting = !0),
        console.warn(
          `[state] this city's save was written by another page since this one loaded: reloading from it`,
        ),
        typeof document < `u`)
      ) {
        if (document.visibilityState === `visible`)
          setTimeout(() => location.reload(), 0);
        else {
          let e = () => {
            document.visibilityState === `visible` &&
              (document.removeEventListener(`visibilitychange`, e),
              location.reload());
          };
          document.addEventListener(`visibilitychange`, e);
        }
      }
    }
    fetchJa() {
      n().then(() => {
        this.data.settings.lang === `ja` &&
          this.events.emit(`settings:changed`, { key: `lang`, value: `ja` });
      });
    }
    mountRegion(e, t) {
      ((this.region = e), (this.currency = t));
    }
    setWorld(e) {
      this.world = Number.isFinite(e) && e >= 1 ? Math.floor(e) : 1;
    }
    get worldRev() {
      return Math.max(this.data.worldRev ?? 1, this.world);
    }
    static load() {
      try {
        let t = e.sanitize(Pe(I()));
        return ((t.settings = { ...t.settings, ...Ft() }), Wn(t, en()), t);
      } catch {
        return e.sanitize(null);
      }
    }
    static sanitize(e) {
      let t = e && typeof e == `object` ? e : {},
        n = (e) =>
          Array.isArray(e)
            ? [
                ...new Set(
                  e.filter(
                    (e) =>
                      typeof e == `string` && e.length > 0 && e.length < 200,
                  ),
                ),
              ]
            : [],
        r = (e) =>
          typeof e == `number`
            ? e
            : typeof e == `string` && e.trim() !== ``
              ? Number(e)
              : NaN,
        i = r(t.money),
        a = {};
      if (t.stats && typeof t.stats == `object` && !Array.isArray(t.stats))
        for (let [e, n] of Object.entries(t.stats)) {
          let t = r(n);
          Number.isFinite(t) && (a[e] = t);
        }
      let o = { ...er },
        s = t.settings;
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let e of Object.keys(er)) {
          let t = s[e];
          typeof t == typeof er[e] &&
            (typeof t != `number` || Number.isFinite(t)) &&
            (o[e] = t);
        }
      if (s && typeof s == `object` && !Array.isArray(s))
        for (let [e, t] of Object.entries(s))
          e in er ||
            (((typeof t == `number` && Number.isFinite(t)) ||
              typeof t == `string` ||
              typeof t == `boolean`) &&
              (o[e] = t));
      (Xn(o.lang) || (o.lang = er.lang),
        /^(auto|low|medium|high|ultra)$/.test(o.quality) ||
          (o.quality = `auto`),
        /^(auto|30|60)$/.test(o.frameRate) || (o.frameRate = `auto`));
      for (let e of [`masterVolume`, `musicVolume`, `sfxVolume`])
        o[e] = Math.max(0, Math.min(1, o[e]));
      o.sensitivity = Math.max(0.1, Math.min(5, o.sensitivity));
      let c = {
          version: 1,
          money: Number.isFinite(i) ? Math.max(0, Math.round(i)) : 2500,
          completedMissions: n(t.completedMissions),
          collectibles: n(t.collectibles),
          stats: a,
          settings: o,
        },
        l = t.pos;
      if (
        l &&
        typeof l == `object` &&
        typeof l.regionId == `string` &&
        l.regionId !== `taipei`
      ) {
        let e = t.positions;
        l =
          e && typeof e == `object`
            ? Object.values(e).find(
                (e) => !!e && typeof e == `object` && e.regionId === `taipei`,
              )
            : void 0;
      }
      if (l && typeof l == `object`) {
        let e = r(l.x),
          t = r(l.z),
          n = r(l.heading);
        Number.isFinite(e) &&
          Number.isFinite(t) &&
          Math.abs(e) < 5e3 &&
          Math.abs(t) < 5e3 &&
          (c.pos = { x: e, z: t, heading: Number.isFinite(n) ? n : 0 });
      }
      let u = r(t.hour);
      Number.isFinite(u) && (c.hour = ((u % 24) + 24) % 24);
      let d = r(t.day);
      (Number.isFinite(d) && d >= 0 && (c.day = Math.floor(d)),
        typeof t.startDate == `string` &&
          /^\d{4}-\d{2}-\d{2}$/.test(t.startDate) &&
          (c.startDate = t.startDate));
      let f = r(t.worldRev);
      Number.isFinite(f) &&
        f >= 2 &&
        (c.worldRev = Math.min(99, Math.floor(f)));
      for (let e of [`lastPlayedAt`, `firstPlayedAt`])
        typeof t[e] == `string` &&
          Number.isFinite(Date.parse(t[e])) &&
          (c[e] = t[e]);
      for (let [e, n] of Object.entries(t))
        e in c ||
          e === `version` ||
          e === `pos` ||
          e === `hour` ||
          e === `day` ||
          e === `startDate` ||
          e === `worldRev` ||
          e === `lastPlayedAt` ||
          e === `firstPlayedAt` ||
          (n !== void 0 && typeof n != `function` && (c[e] = n));
      return c;
    }
    get money() {
      return (this.shared?.refresh(), this.data.money);
    }
    get wallet() {
      return this.money;
    }
    refreshSharedWallet() {
      this.shared.refresh();
    }
    get settings() {
      return this.data.settings;
    }
    get lang() {
      return this.data.settings.lang;
    }
    addMoney(e, t, n = this.currency) {
      let r = Number(e);
      Number.isFinite(r) &&
        qn[n] &&
        ((this.data.money = Math.max(
          0,
          (Number.isFinite(this.data.money) ? Math.round(this.data.money) : 0) +
            Jn(r, n),
        )),
        this.shared.money(),
        this.events.emit(`money:changed`, {
          money: this.data.money,
          delta: e,
          reason: t,
        }),
        this.scheduleSave());
    }
    stat(e, t = 1) {
      let n = this.data.stats[e];
      ((this.data.stats[e] =
        (Number.isFinite(n) ? n : 0) + (Number.isFinite(t) ? t : 0)),
        this.scheduleSave(5));
    }
    completeMission(e) {
      (this.data.completedMissions.includes(e) ||
        this.data.completedMissions.push(e),
        this.scheduleSave(0.2));
    }
    collect(e) {
      return (
        !this.data.collectibles.includes(e) &&
        (this.data.collectibles.push(e), this.scheduleSave(0.5), !0)
      );
    }
    claimOnce(e) {
      let t = Vn(this.data, e);
      return (t && this.scheduleSave(0.5), t);
    }
    hasClaimed(e) {
      return Bn(this.data, e);
    }
    setSetting(e, t) {
      ((this.data.settings[e] = t),
        e === `lang` &&
          ((this.data.langJa = t === `ja`),
          (this.data.langPicked = !0),
          (r.on = t === `ja`),
          r.on && this.fetchJa()),
        this.events.emit(`settings:changed`, { key: e, value: t }),
        this.scheduleSave(0.2));
    }
    scheduleSave(e = 2) {
      this.saveTimer = this.saveTimer > 0 ? Math.min(this.saveTimer, e) : e;
    }
    update(e) {
      this.saveTimer > 0 &&
        ((this.saveTimer -= e), this.saveTimer <= 0 && this.saveNow());
    }
    onBeforeSave(e) {
      this.beforeSave.push(e);
    }
    saveNow() {
      if (this.resetting) return !1;
      let e = I();
      if (A(e) || this.yieldToNewer(e)) return !1;
      this.saveTimer = 0;
      for (let e of this.beforeSave)
        try {
          e();
        } catch (e) {
          console.error(`[state] beforeSave hook threw`, e);
        }
      return (
        this.world >= 2 &&
          !((this.data.worldRev ?? 1) >= this.world) &&
          (this.data.worldRev = this.world),
        (this.data.lastPlayedAt = new Date().toISOString()),
        this.shared.save(),
        mn(this.data)
          ? ((this.seen = this.data.lastPlayedAt),
            this.events.emit(`state:saved`, { data: this.data }),
            !0)
          : !1
      );
    }
    get totalPlayTime() {
      let e = Math.max(0, this.data.stats.playTime ?? 0);
      for (let t of Object.values(Ne)) {
        if (t.saveKey === `tokyo-rush-save-v1`) continue;
        let n = (
          Zt(`${t.saveKey}:identities-v1`)?.slots?.[Lt()]?.data ??
          (Lt() === `guest` ? Zt(t.saveKey) : null)
        )?.stats?.playTime;
        typeof n == `number` && Number.isFinite(n) && (e += Math.max(0, n));
      }
      return e;
    }
    restoreSave(t) {
      if (A(I()) || A(t)) return !1;
      let n = e.sanitize(t);
      return mn(n)
        ? ((this.data = n),
          (this.saveTimer = 0),
          (this.resetting = !0),
          this.shared.rebase(),
          !0)
        : !1;
    }
    reset() {
      if (A(I())) return;
      hn();
      let t = this.data.settings,
        n = this.data.langJa,
        r = this.data.langPicked,
        i = this.data;
      ((this.data = e.load()),
        (this.data.settings = t),
        (this.data.langJa = n),
        r && (this.data.langPicked = !0),
        Hn(i, this.data),
        tn(Un(this.data)),
        delete this.data.pos,
        delete this.data.hour,
        delete this.data.day,
        delete this.data.startDate,
        (this.resetting = !0));
    }
    resetting = !1;
  },
  nr = {
    uTime: { value: 0 },
    uNight: { value: 0 },
    uWet: { value: 0 },
    uSunDir: { value: new Te(0.4, 0.8, 0.3).normalize() },
    uCharFill: { value: new me(0, 0, 0, 0) },
  },
  rr = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`;
