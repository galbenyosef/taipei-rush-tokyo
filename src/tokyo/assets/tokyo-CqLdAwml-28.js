// tokyo/assets/tokyo-CqLdAwml 28 — current
// Lines 11561-11908 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
var $ = (e, t) => ({ zh: e, en: t }),
  Go = {
    move: {
      title: $(`移動`, `Getting around`),
      body: {
        kbm: $(
          `{k:W}{k:A}{k:S}{k:D} 走路，移動滑鼠轉視角。按住 {sprint} 衝刺、{jump} 跳躍。`,
          `Walk with {k:W}{k:A}{k:S}{k:D} and move the mouse to look. Hold {sprint} to sprint, {jump} to jump.`,
        ),
        gamepad: $(
          `{p:L} 走路、{p:R} 轉視角。按住 {sprint} 衝刺、{jump} 跳躍。`,
          `Walk with {p:L}, look with {p:R}. Hold {sprint} to sprint, {jump} to jump.`,
        ),
        touch: $(
          `左下拖曳搖桿走路（推到底就會跑），右半邊滑動轉視角。`,
          `Drag the stick on the left to walk (push it all the way to run). Swipe the right half to look around.`,
        ),
      },
      secs: 10,
      short: $(
        `左搖桿走路（推到底跑）・右半邊滑動轉視角`,
        `Left stick walks (push fully to run) · swipe right to look`,
      ),
    },
    vehicle: {
      title: $(`騎車與開車`, `Rides`),
      body: {
        kbm: $(
          `走到機車、重機或汽車旁按 {enter} 就能騎上去；對行駛中的車按 {enter} 是搶車（會被通緝）。`,
          `Walk up to a scooter, motorcycle or car and press {enter} to take it. Doing it to a moving car is a carjack — the police will notice.`,
        ),
        touch: $(
          `靠近機車、重機或汽車時，點右下的 {enter} 就能騎上去。`,
          `Near a scooter, motorcycle or car, tap {enter} (bottom right) to get on.`,
        ),
      },
      secs: 9,
      short: $(
        `靠近機車或汽車，點 {enter} 就能騎上去`,
        `Near a scooter or car, tap {enter} to get on`,
      ),
    },
    drive: {
      title: $(`駕駛`, `Driving`),
      body: {
        kbm: $(
          `{k:W} 油門、{k:S} 煞車／倒車、{k:A}{k:D} 轉向、{handbrake} 手煞車甩尾。{horn} 喇叭、{radio} 換電台、{enter} 下車。`,
          `{k:W} throttle, {k:S} brake / reverse, {k:A}{k:D} steer, {handbrake} handbrake drift. {horn} horn, {radio} radio, {enter} to get off.`,
        ),
        gamepad: $(
          `{p:RT} 油門、{p:LT} 煞車／倒車、{p:L} 轉向、{handbrake} 手煞車。{radio} 換電台、{enter} 下車。`,
          `{p:RT} throttle, {p:LT} brake / reverse, {p:L} steer, {handbrake} handbrake. {radio} radio, {enter} to get off.`,
        ),
        touch: $(
          `右下「油門」「煞車」踏板控制速度，左搖桿轉向，{handbrake} 甩尾，{enter} 下車。`,
          `Use the Gas and Brake pedals (bottom right), steer with the left stick, {handbrake} to drift and {enter} to get off.`,
        ),
      },
      secs: 11,
      short: $(
        `踏板加速・搖桿轉向・{handbrake} 甩尾・{enter} 下車`,
        `Pedals: gas · stick: steer · {handbrake} drift · {enter} off`,
      ),
    },
    map: {
      title: $(`地圖與導航`, `Map & GPS`),
      body: {
        kbm: $(
          `按 {map} 打開地圖，點一下任何地方就會設定導航，小地圖會畫出路線。`,
          `Press {map} for the map. Click anywhere to set a GPS waypoint — the minimap draws the route.`,
        ),
        touch: $(
          `點左上的地圖按鈕，再點一下任何地方就能設定導航。`,
          `Tap the map button (top left), then tap anywhere to set a GPS waypoint.`,
        ),
      },
      secs: 9,
      short: $(
        `點左上地圖，再點任一處設定導航`,
        `Map (top left) → tap anywhere to set GPS`,
      ),
    },
    phone: {
      title: $(`手機`, `Phone`),
      body: {
        kbm: $(
          `按 {phone} 打開手機：接任務、搭捷運導航、切換電台、拍照。`,
          `Press {phone} for your phone: jobs, metro directions, radio and the camera.`,
        ),
        touch: $(
          `點左上的手機按鈕：接任務、搭捷運導航、切換電台、拍照。`,
          `Tap the phone button (top left): jobs, metro directions, radio and the camera.`,
        ),
      },
      secs: 9,
      short: $(
        `左上手機：任務・捷運・電台・拍照`,
        `Phone (top left): jobs · metro · radio · camera`,
      ),
    },
    mission: {
      title: $(`任務`, `Missions`),
      body: {
        kbm: $(
          `地圖上的「任」是任務起點。走進光圈按 {interact} 開始；也可以用手機接任務並導航過去。`,
          `The 任 markers are mission starts. Step into the circle and press {interact} — or pick a job on your phone and follow the GPS.`,
        ),
      },
      secs: 10,
      short: $(
        `「任」是任務起點：走進光圈點 {interact}`,
        `任 = mission start: step in, tap {interact}`,
      ),
    },
    wanted: {
      title: $(`被通緝了`, `Wanted`),
      body: {
        kbm: $(
          `星星代表通緝等級。離開警察視線、躲出小地圖上的搜索圈，星星閃爍一陣子後就會消失。`,
          `Stars show your wanted level. Break line of sight and get out of the search circle on the minimap — flashing stars fade out.`,
        ),
      },
      secs: 9,
      short: $(
        `躲出小地圖的搜索圈，星星就會消失`,
        `Leave the minimap search circle to lose the stars`,
      ),
    },
    photo: {
      title: $(`拍照模式`, `Photo mode`),
      body: {
        kbm: $(
          `按 {k:Enter} 拍照存檔，{k:Esc} 離開。`,
          `Press {k:Enter} to save a shot, {k:Esc} to leave.`,
        ),
        gamepad: $(
          `按 {p:A} 拍照存檔，{p:B} 離開。`,
          `Press {p:A} to save a shot, {p:B} to leave.`,
        ),
        touch: $(
          `點右下「拍照」存檔，「離開」回到遊戲。`,
          `Tap Capture to save, Exit to get back to the game.`,
        ),
      },
      secs: 6,
      short: $(
        `「拍照」存檔・「離開」回到遊戲`,
        `Capture saves · Exit goes back`,
      ),
    },
  },
  Ko = class {
    kit;
    parent;
    dock;
    el;
    title;
    body;
    current = null;
    ttl = 0;
    queue = [];
    seen;
    lastDevice = null;
    playT = 0;
    checkT = 4;
    moveAt = -1;
    enabled = !0;
    missionNear;
    docked = !1;
    hints;
    constructor(e, t, n = null) {
      ((this.kit = e), (this.parent = t), (this.dock = n));
      let r = e.region.phoneHint;
      ((this.hints = r
        ? {
            ...Go,
            phone: {
              ...Go.phone,
              body: { kbm: r.kbm, touch: r.touch },
              short: r.short,
            },
          }
        : Go),
        (this.el = B(`div`, `hud-help`, t)));
      let i = B(`div`, `hh-head`, this.el);
      ((B(`span`, `hh-ic`, i).innerHTML = z.bulb),
        (this.title = B(`b`, `hh-title`, i)));
      let a = B(`button`, `hh-x`, i);
      ((a.type = `button`),
        (a.innerHTML = z.close),
        a.setAttribute(`aria-label`, `close`),
        (this.body = B(`div`, `hh-body`, this.el)));
      let o = (e) => {
        (e.preventDefault(), e.stopPropagation(), this.hide());
      };
      (a.addEventListener(`pointerdown`, o),
        this.el.addEventListener(`pointerdown`, o));
      let s = K();
      this.seen = new Set(s.hintsSeen ?? []);
      let c = e.ctx.params;
      ((this.enabled =
        !s.hintsOff && !c.has(`nohints`) && (!c.has(`shot`) || c.has(`hints`))),
        e.onLang(() => this.render()));
    }
    show(e) {
      !this.enabled ||
        this.seen.has(e) ||
        this.current === e ||
        this.queue.includes(e) ||
        (this.current ? this.queue.push(e) : this.present(e));
    }
    get visible() {
      return this.current !== null;
    }
    place() {
      let e = !!this.dock && this.kit.short;
      (e === this.docked && this.el.parentElement) ||
        ((this.docked = e),
        e ? this.dock.appendChild(this.el) : this.parent.prepend(this.el),
        this.el.classList.toggle(`hh-chip`, e));
    }
    present(e) {
      (e === `move` && (this.moveAt = this.playT),
        (this.current = e),
        this.seen.add(e),
        At({ hintsSeen: [...this.seen] }),
        this.place(),
        (this.ttl = this.docked
          ? Math.min(
              this.hints[e].secs,
              4 +
                Math.max(0, this.kit.t(this.hints[e].short ?? ``).length - 40) *
                  0.05,
            )
          : this.hints[e].secs),
        this.render(),
        this.el.classList.add(`show`),
        this.kit.sfx(`phone_notify`, 0.45));
    }
    hide() {
      this.current &&
        ((this.current = null),
        this.el.classList.remove(`show`),
        (this.ttl = 0.6));
    }
    device() {
      return this.kit.touch && this.kit.ctx.input.device !== `gamepad`
        ? `touch`
        : this.kit.ctx.input.device;
    }
    render() {
      if (!this.current) return;
      let e = this.hints[this.current],
        t = this.device();
      ((this.lastDevice = t), (this.title.textContent = this.kit.t(e.title)));
      let n =
        (t === `touch`
          ? (this.docked && e.short) || e.body.touch
          : t === `gamepad`
            ? e.body.gamepad
            : void 0) ?? e.body.kbm;
      Gr(this.body, this.kit.t(n), t, this.kit.lang);
    }
    setEnabled(e) {
      ((this.enabled = e),
        q({ hintsOff: !e }),
        e || ((this.queue.length = 0), this.hide()));
    }
    reset() {
      (this.seen.clear(), q({ hintsSeen: [] }), (this.playT = 0));
    }
    update(e, t, n) {
      if (this.current) {
        (this.dock && this.kit.short !== this.docked
          ? (this.place(),
            this.docked && (this.ttl = Math.min(this.ttl, 4)),
            this.render())
          : this.device() !== this.lastDevice && this.render(),
          t && (this.ttl -= e));
        let r =
          this.current === `vehicle` || this.current === `move`
            ? n.inVehicle
            : this.current === `drive` && !n.inVehicle;
        (this.ttl <= 0 ||
          (r && this.ttl < this.hints[this.current].secs - 1.5)) &&
          this.hide();
      } else
        this.ttl > 0
          ? (this.ttl -= e)
          : this.queue.length && t && this.present(this.queue.shift());
      if (!t || !this.enabled) return;
      ((this.playT += e),
        this.playT > 1.5 && this.show(`move`),
        n.promptAction === `enter` && !n.inVehicle && this.show(`vehicle`),
        n.inVehicle && this.show(`drive`),
        n.wanted > 0 && this.show(`wanted`),
        this.playT > 45 && this.show(`map`),
        this.playT > 80 && this.show(`phone`),
        (this.checkT -= e));
      let r =
        this.seen.has(`move`) &&
        this.current !== `move` &&
        (this.moveAt < 0 || this.playT - this.moveAt > 8);
      if (this.checkT <= 0 && r && !this.seen.has(`mission`)) {
        this.checkT = 1;
        try {
          let e = this.kit.ctx.player.position;
          if (!this.missionNear || this.missionNear(e.x, e.z, 45)) {
            for (let t of this.kit.ctx.missions.list())
              if (
                t.available &&
                !t.completed &&
                Math.hypot(t.x - e.x, t.z - e.z) < 45
              ) {
                this.show(`mission`);
                break;
              }
          }
        } catch {}
      }
    }
    ownsMoveLesson() {
      return this.enabled
        ? this.current === `move` ||
          this.queue.includes(`move`) ||
          !this.seen.has(`move`)
          ? !0
          : this.moveAt >= 0 && this.playT - this.moveAt < 40
        : !1;
    }
    isDuplicate(e) {
      return (
        /^(WASD|左搖桿移動|左邊搖桿移動|Left stick to move)/.test(e.trim()) &&
        this.ownsMoveLesson()
      );
    }
    objectiveReady() {
      return !this.enabled || (this.seen.has(`move`) && this.moveAt < 0)
        ? !0
        : this.moveAt < 0
          ? this.playT > 6
          : this.playT - this.moveAt > 3;
    }
    photo() {
      this.show(`photo`);
    }
  },
  qo = null;
