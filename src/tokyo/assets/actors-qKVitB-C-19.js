// tokyo/assets/actors-qKVitB-C 19 — ctx
// Lines 5731-6251 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var ls = (e) =>
    e == null ? `` : typeof e == `string` ? e : `${e.zh} / ${e.en}`,
  us = class {
    ctx;
    objective = null;
    timer = null;
    timerLabel;
    progressLabel = null;
    progress = 0;
    lastSubtitle = null;
    lastBig = null;
    lastNotify = null;
    waypoint = null;
    missionTitle = null;
    log = [];
    sentTimer = -999;
    sentProgress = -1;
    logOn;
    panel = null;
    panelAcc = 0;
    panelText = ``;
    blips = new Set();
    constructor(e) {
      ((this.ctx = e),
        (this.logOn = e.params.has(`mdebug`) || e.params.has(`shot`)),
        e.params.has(`mdebug`) && this.makePanel());
    }
    record(e, t) {
      let n = `${e}: ${t}`;
      (this.log.push(n),
        this.log.length > 80 && this.log.shift(),
        this.logOn && console.info(`[test] [missions] ${n}`));
    }
    safe(e) {
      try {
        e();
      } catch {}
    }
    t(e) {
      return this.ctx.t(e);
    }
    setObjective(e) {
      e === this.objective ||
        (e && this.objective && ls(e) === ls(this.objective)) ||
        ((this.objective = e),
        this.record(`objective`, e ? ls(e) : `(none)`),
        this.safe(() => this.ctx.ui.setObjective(e)));
    }
    setWaypoint(e, t) {
      (e || this.waypoint) &&
        ((e &&
          this.waypoint &&
          Math.abs(e.x - this.waypoint.x) < 0.5 &&
          Math.abs(e.z - this.waypoint.z) < 0.5) ||
          ((this.waypoint = e ? { x: e.x, z: e.z } : null),
          this.safe(() =>
            this.ctx.ui.setWaypoint(e ? { x: e.x, z: e.z } : null, t),
          )));
    }
    setTimer(e, t) {
      if (((this.timer = e), (this.timerLabel = t), e === null)) {
        (this.sentTimer !== -999 && this.safe(() => this.ctx.ui.setTimer(null)),
          (this.sentTimer = -999));
        return;
      }
      let n = Math.round(e * 10) / 10;
      n !== this.sentTimer &&
        ((this.sentTimer = n),
        this.safe(() => this.ctx.ui.setTimer(Math.max(0, e), t)));
    }
    setProgress(e, t = 0) {
      if (((this.progressLabel = e), (this.progress = t), e === null)) {
        (this.sentProgress !== -1 &&
          this.safe(() => this.ctx.ui.setProgress(null)),
          (this.sentProgress = -1));
        return;
      }
      let n = Math.round(t * 200) / 200;
      n !== this.sentProgress &&
        ((this.sentProgress = n),
        this.safe(() =>
          this.ctx.ui.setProgress(e, Math.max(0, Math.min(1, t))),
        ));
    }
    subtitle(e, t, n) {
      let r = n ? this.t(n) : void 0;
      ((this.lastSubtitle = {
        text: e,
        speaker: r,
        until: this.ctx.time.real + t,
      }),
        this.record(`subtitle`, `${r ? `[${ls(n)}] ` : ``}${ls(e)}`),
        this.safe(() => this.ctx.ui.subtitle(e, t, r)));
    }
    bigMessage(e, t, n) {
      ((this.lastBig = {
        title: e,
        sub: t,
        until: this.ctx.time.real + (n?.duration ?? 4),
      }),
        this.record(`big`, `${ls(e)}${t ? ` — ` + ls(t) : ``}`),
        this.safe(() => this.ctx.ui.bigMessage(e, t, n)));
    }
    notify(e, t = `info`, n) {
      ((this.lastNotify = { text: e, until: this.ctx.time.real + (n ?? 4) }),
        this.record(`notify`, ls(e)),
        this.safe(() => this.ctx.ui.notify(e, { kind: t, duration: n })));
    }
    promptFrame = -1;
    prompt(e) {
      if (e) {
        let e = this.ctx.time.frame;
        if (this.promptFrame === e) return !1;
        this.promptFrame = e;
      }
      return (this.safe(() => this.ctx.ui.prompt(e)), !0);
    }
    promptIfFree(e) {
      return !this.otherPrompted(`interact`) && this.prompt(e);
    }
    get prompted() {
      return (
        this.promptFrame === this.ctx.time.frame ||
        this.otherPrompted(`interact`)
      );
    }
    otherPrompted(e) {
      let t;
      try {
        t = this.ctx.ui.promptOwner;
      } catch {}
      let n = this.ctx.time.frame;
      return !!t && t.frame === n && this.promptFrame !== n && t.action === e;
    }
    addBlip(e, t) {
      (this.blips.add(e), this.safe(() => this.ctx.ui.addBlip(e, t)));
    }
    updateBlip(e, t, n) {
      this.blips.has(e) && this.safe(() => this.ctx.ui.updateBlip(e, t, n));
    }
    removeBlip(e) {
      this.blips.delete(e) && this.safe(() => this.ctx.ui.removeBlip(e));
    }
    fade(e, t) {
      try {
        let n = this.ctx.ui.fade(e, t);
        return n && typeof n.then == `function`
          ? n.catch(() => {})
          : Promise.resolve();
      } catch {
        return Promise.resolve();
      }
    }
    clearAll() {
      (this.setObjective(null),
        this.setWaypoint(null),
        this.setTimer(null),
        this.setProgress(null),
        (this.missionTitle = null));
    }
    makePanel() {
      let e = document.createElement(`div`);
      ((e.id = `missions-debug`),
        Object.assign(e.style, {
          position: `fixed`,
          right: `10px`,
          bottom: `10px`,
          zIndex: `9998`,
          maxWidth: `420px`,
          whiteSpace: `pre-wrap`,
          font: `13px/1.45 ${st}`,
          color: `#fff`,
          background: `rgba(8,10,16,.72)`,
          padding: `8px 11px`,
          borderRadius: `8px`,
          borderLeft: `3px solid #ffc83d`,
          pointerEvents: `none`,
        }),
        document.body.appendChild(e),
        (this.panel = e));
    }
    update(e, t) {
      if (!this.panel || ((this.panelAcc += e), this.panelAcc < 0.1)) return;
      this.panelAcc = 0;
      let n = this.ctx.time.real,
        r = [];
      if (
        (this.missionTitle && r.push(`■ ${this.t(this.missionTitle)}`),
        this.objective && r.push(`▶ ${this.t(this.objective)}`),
        this.timer !== null)
      ) {
        let e = Math.max(0, this.timer);
        r.push(
          `◷ ${this.timerLabel ? this.t(this.timerLabel) + ` ` : ``}${Math.floor(e / 60)}:${String(Math.floor(e % 60)).padStart(2, `0`)}`,
        );
      }
      if (this.progressLabel) {
        let e = Math.round(this.progress * 20);
        r.push(
          `${this.t(this.progressLabel)} [${`█`.repeat(e)}${`░`.repeat(20 - e)}]`,
        );
      }
      (this.lastSubtitle &&
        this.lastSubtitle.until > n &&
        r.push(
          `» ${this.lastSubtitle.speaker ? this.lastSubtitle.speaker + `：` : ``}${this.t(this.lastSubtitle.text)}`,
        ),
        this.lastBig &&
          this.lastBig.until > n &&
          r.push(
            `★ ${this.t(this.lastBig.title)}${this.lastBig.sub ? ` ` + this.t(this.lastBig.sub) : ``}`,
          ),
        this.lastNotify &&
          this.lastNotify.until > n &&
          r.push(`· ${this.t(this.lastNotify.text)}`),
        t && r.push(t));
      let i = r.join(`
`);
      i !== this.panelText &&
        ((this.panelText = i),
        (this.panel.textContent = i),
        (this.panel.style.display = i ? `block` : `none`));
    }
  },
  K = (e) => pt(e),
  ds = {
    prop: `cat`,
    prefix: `cat`,
    name: { zh: `招財貓`, en: `Lucky cat` },
    reward: 200,
    milestones: { 10: 2e3, 20: 5e3 },
    finale: {
      title: { zh: `招財進寶`, en: `FORTUNE MASTER` },
      text: { zh: `30 隻招財貓全收集！`, en: `All 30 lucky cats found!` },
      bonus: 88888,
    },
    stat: `luckyCats`,
    color: 16762432,
  },
  fs = [],
  ps = class {
    ctx;
    hud;
    markers;
    props;
    defs;
    cats = [];
    bursts = [];
    visAcc = 0;
    t = 0;
    found = 0;
    st;
    constructor(e, t, n, r, i, a) {
      ((this.ctx = e),
        (this.hud = t),
        (this.markers = n),
        (this.props = r),
        (this.defs = i),
        (this.st = a ?? ds));
    }
    get total() {
      return this.defs.length;
    }
    start() {
      let e = this.ctx,
        t = new Set(e.state.data.collectibles ?? []);
      for (let e = 0; e < this.defs.length; e++) {
        let n = this.defs[e],
          r = this.resolve(n),
          i = {
            def: n,
            x: r.x,
            y: r.y,
            z: r.z,
            found: t.has(`${this.st.prefix}-${n.id}`),
            prop: null,
            halo: null,
            near: !1,
            phase: e * 0.77,
            chime: Math.random() * 3,
          };
        (i.found || this.makeVisual(i), this.cats.push(i));
      }
      this.found = this.cats.filter((e) => e.found).length;
    }
    free(e, t) {
      let n = this.ctx.plan.surfaceAt(e, t);
      return n === `water` || n === `road` || n === `crosswalk`
        ? !1
        : !this.ctx.statics.overlapsRect(
            e - 0.45,
            t - 0.45,
            e + 0.45,
            t + 0.45,
            0.6,
          );
    }
    resolve(e) {
      let t = this.ctx.plan,
        n = (e, n) => ({ x: e, y: t.groundHeight(e, n), z: n });
      if (e.mode === `free`) {
        if (this.free(e.x, e.z)) return n(e.x, e.z);
        for (let t = 1.5; t <= 14; t += 1.5)
          for (let r = 0; r < 12; r++) {
            let i = (r / 12) * Math.PI * 2,
              a = e.x + Math.cos(i) * t,
              o = e.z + Math.sin(i) * t;
            if (this.free(a, o)) return n(a, o);
          }
      }
      let r = is(t, e.x, e.z),
        i = r.x,
        a = r.z;
      if (r.road) {
        let e = r.road,
          t = e.halfTotal - 0.75;
        e.axis === `x`
          ? (a = e.at + Math.sign(r.z - e.at) * t)
          : (i = e.at + Math.sign(r.x - e.at) * t);
      }
      if ((this.free(i, a) || ((i = r.x), (a = r.z)), !this.free(i, a)))
        for (let e = 0.8; e <= 5; e += 0.6)
          for (let t = 0; t < 12; t++) {
            let r = (t / 12) * Math.PI * 2,
              o = i + Math.cos(r) * e,
              s = a + Math.sin(r) * e;
            if (this.free(o, s)) return n(o, s);
          }
      return n(i, a);
    }
    makeVisual(e) {
      ((e.prop = this.props.add(this.st.prop, e.x, e.y + 0.3, e.z, e.phase, 1)),
        (e.halo = this.markers.add({
          x: e.x,
          z: e.z,
          y: e.y,
          color: this.st.color,
          style: `glow`,
          iconY: 0.62,
          iconSize: 1.9,
          intensity: 0.75,
        })));
    }
    update(e) {
      this.t += e;
      let t = this.ctx.player.position;
      this.visAcc += e;
      let n = this.visAcc >= 0.25;
      n && (this.visAcc = 0);
      for (let e of this.cats) {
        if (e.found) continue;
        if (n) {
          let n = Math.hypot(e.x - t.x, e.z - t.z);
          e.near = n < 140;
          let r = n < (this.ctx.quality.level === `low` ? 150 : 230);
          if (
            (e.prop?.setVisible(r),
            e.halo?.setVisible(r),
            n < 26 && ((e.chime -= 0.25), e.chime <= 0))
          ) {
            e.chime = 3.2;
            try {
              this.ctx.audio.play(`coin`, {
                x: e.x,
                y: e.y + 0.5,
                z: e.z,
                volume: 0.22,
                rate: 1.6,
              });
            } catch {}
          }
        }
        if (!e.near) continue;
        if (n && !this.free(e.x, e.z)) {
          let t = this.resolve(
            e.def.mode === `walk` ? e.def : { ...e.def, mode: `walk` },
          );
          ((e.x = t.x),
            (e.y = t.y),
            (e.z = t.z),
            e.halo?.remove(),
            e.prop?.remove(),
            this.makeVisual(e));
        }
        let r = this.t * 1.3 + e.phase;
        e.prop?.set(
          e.x,
          e.y + 0.32 + Math.sin(this.t * 2.1 + e.phase) * 0.07,
          e.z,
          r,
          1,
        );
        let i = t.x - e.x,
          a = t.z - e.z,
          o = t.y - e.y,
          s = this.ctx.player.mode === `vehicle` ? 2.4 : 1.35;
        i * i + a * a < s * s && Math.abs(o) < 2.5 && this.collect(e);
      }
      for (let t = this.bursts.length - 1; t >= 0; t--) {
        let n = this.bursts[t];
        n.t += e;
        let r = n.t / 0.8;
        r >= 1
          ? (n.h.remove(), this.bursts.splice(t, 1))
          : n.h.setIntensity((1 - r) * 1.6);
      }
    }
    collect(e) {
      let t = this.ctx;
      ((e.found = !0),
        e.prop?.remove(),
        e.halo?.remove(),
        (e.prop = e.halo = null));
      let n = this.st,
        r = t.state.collect(`${n.prefix}-${e.def.id}`);
      ((this.found = this.cats.filter((e) => e.found).length),
        this.bursts.push({
          h: this.markers.add({
            x: e.x,
            z: e.z,
            y: e.y,
            color: 16765527,
            style: `glow`,
            iconY: 0.7,
            iconSize: 3.6,
            intensity: 1.6,
          }),
          t: 0,
        }),
        this.bursts.push({
          h: this.markers.add({
            x: e.x,
            z: e.z,
            y: e.y,
            color: 16777215,
            style: `glow`,
            icon: `sparkle`,
            iconY: 0.75,
            iconSize: 2.6,
            intensity: 1.6,
          }),
          t: 0,
        }));
      try {
        (t.audio.play(`coin`, { ui: !0, volume: 0.9 }),
          t.audio.play(`pickup`, { ui: !0, volume: 0.6 }));
      } catch {}
      if (!r) return;
      t.state.stat(n.stat);
      let i = this.found,
        a = this.defs.length,
        o = e.def,
        s = n.name;
      if (!t.state.claimOnce(`collectible:${n.prefix}-${o.id}`)) {
        this.hud.notify(
          {
            zh: `${s.zh} ${i}/${a} · ${o.zh}（獎金之前領過了）`,
            en: `${s.en} ${i}/${a} · ${o.en} (reward already claimed)`,
            ja: `${s.ja ?? s.zh} ${i}/${a} · ${o.ja ?? o.zh}（報酬は受け取り済み）`,
          },
          `good`,
          4,
        );
        return;
      }
      let c = n.reward;
      this.hud.notify(
        {
          zh: `${s.zh} ${i}/${a} · ${o.zh} +${K(n.reward)}`,
          en: `${s.en} ${i}/${a} · ${o.en} +${K(n.reward)}`,
          ja: `${s.ja ?? s.zh} ${i}/${a} · ${o.ja ?? o.zh} +${K(n.reward)}`,
        },
        `good`,
        4,
      );
      let l = n.milestones[i];
      if (
        (l &&
          i < a &&
          t.state.claimOnce(`collectible:${n.prefix}@${i}`) &&
          ((c += l),
          this.hud.notify(
            {
              zh: `集滿 ${i} 個${s.zh}！獎金 ${K(l)}`,
              en: `${i} ${s.en}! Bonus ${K(l)}`,
              ja: `${s.ja ?? s.zh}${i}個達成！ボーナス ${K(l)}`,
            },
            `good`,
            5,
          )),
        i === a && t.state.claimOnce(`collectible:${n.prefix}@${i}`))
      ) {
        ((c += n.finale.bonus),
          this.hud.bigMessage(
            n.finale.title,
            {
              zh: `${n.finale.text.zh} ${K(n.finale.bonus)}`,
              en: `${n.finale.text.en} ${K(n.finale.bonus)}`,
              ja: `${n.finale.text.ja ?? n.finale.text.zh} ${K(n.finale.bonus)}`,
            },
            { color: `#ffc640`, duration: 5 },
          ));
        try {
          t.audio.play(`mission_pass`, { ui: !0 });
        } catch {}
      }
      t.state.addMoney(c, `collectible`);
    }
    remaining() {
      return this.cats
        .filter((e) => !e.found)
        .map((e) => ({
          id: e.def.id,
          x: +e.x.toFixed(1),
          y: +e.y.toFixed(2),
          z: +e.z.toFixed(1),
        }));
    }
  },
  ms = e({ runScenario: () => vs }),
  hs = (e) => new Promise((t) => setTimeout(t, e));
