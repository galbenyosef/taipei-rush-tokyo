// tokyo__assets__region-tokyo-BcM3fReU 254 — math
// Lines 100683-100994 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var p2 = class {
  m;
  opts;
  skipped = !1;
  t = 0;
  keyHeld = !0;
  hinted = !1;
  finished = !1;
  mv = null;
  eye = new k();
  look = new k();
  hasShot = !1;
  shotAt = -1;
  stopTick = () => {};
  unthin = null;
  onLine = null;
  debug;
  constructor(e, t = {}) {
    ((this.m = e),
      (this.opts = t),
      (this.debug = e.ctx.params.has(`cutdebug`)));
  }
  get cast() {
    return (this.m.actors ?? []).filter((e) => e.visible !== !1);
  }
  start() {
    let e = this.m,
      t = e.ctx;
    e.lockPlayer(!0);
    try {
      t.ui.setHudVisible(!1);
    } catch {}
    try {
      t.player.forceVisible?.(!0);
    } catch {}
    let n = t2();
    n && (n.count++, n.root.classList.add(`lb`), (n.requested = !1));
    let r = this.opts.thin;
    if (r !== !1) {
      let n = r ?? { x: e.px, z: e.pz };
      try {
        let e = t.peds;
        this.unthin =
          (e.clearArea ?? e.thin)?.call(e, n.x, n.z, n.r ?? 16, 120) ?? null;
      } catch {}
    }
    (e.onCleanup(() => this.end()),
      (this.stopTick = e.every((e) => this.tick(e))));
  }
  tick(e) {
    this.t += e;
    let t = this.mv;
    if (t) {
      let e = Math.min(1, (this.t - t.t0) / t.dur),
        n = e * e * (3 - 2 * e);
      (this.eye.lerpVectors(t.e0, t.e1, n),
        this.look.lerpVectors(t.l0, t.l1, n),
        this.apply(),
        e >= 1 && (this.mv = null));
    }
    this.opts.skippable !== !1 &&
      !this.skipped &&
      this.wantsSkip() &&
      this.skip();
  }
  wantsSkip() {
    let e = this.m.ctx,
      t = e.input.keys,
      n = !!t && (t.has(`Space`) || t.has(`Enter`));
    try {
      n ||= e.input.down(`jump`);
    } catch {}
    n ||= i2();
    let r = n && !this.keyHeld;
    if (((this.keyHeld = n), this.t < 0.8)) return !1;
    let i = e2;
    if (!this.hinted && i) {
      this.hinted = !0;
      let t = r2(e),
        n = e.state.lang,
        r = n !== `en`,
        a = `${t}:${n}`;
      if (i.key !== a) {
        i.key = a;
        let e = n === `ja` ? `スキップ` : r ? `跳過` : `SKIP`;
        i.skip.innerHTML =
          t === `touch`
            ? `${e}<span class="ff">▶▶</span>`
            : t === `gamepad`
              ? `<span class="pad">A</span>${e}`
              : `<kbd>${n === `ja` ? `スペース` : r ? `空白鍵` : `Space`}</kbd>${e}`;
      }
      i.skip.classList.add(`show`);
    }
    return i?.requested ? ((i.requested = !1), !0) : r;
  }
  skip() {
    this.skipped = !0;
    let e = this.onLine;
    if (e && this.m.ctx.time.real < e.end)
      try {
        this.m.ctx.ui.subtitle(e.text, 0.05, e.sp ?? void 0);
      } catch {}
    this.onLine = null;
  }
  apply() {
    if (!this.finished) {
      try {
        this.m.ctx.cameraRig.override(this.eye, this.look);
      } catch {}
      this.hasShot = !0;
    }
  }
  shot(e, t) {
    this.finished ||
      ((this.mv = null),
      this.eye.copy(e),
      this.look.copy(t),
      (this.shotAt = this.t),
      this.apply());
  }
  move(e, t, n, r, i) {
    this.finished ||
      ((this.mv = {
        e0: e.clone(),
        l0: t.clone(),
        e1: n.clone(),
        l1: r.clone(),
        t0: this.t,
        dur: Math.max(0.05, i),
      }),
      this.eye.copy(e),
      this.look.copy(t),
      this.apply());
  }
  head(e, t) {
    let n = this.m.ctx;
    if (e === `me`) {
      let e = n.player.position;
      return t.set(e.x, e.y + 1.6, e.z);
    }
    return e ? t.set(e.x, e.y + 1.58, e.z) : null;
  }
  speakerShot(e, t) {
    let n = this.m.ctx,
      r = n.player.position,
      i = t.x,
      a = t.z,
      o = r.x,
      s = r.z;
    if (e === `me` || Math.hypot(r.x - i, r.z - a) > 7) {
      let t = 7;
      for (let n of this.cast) {
        if (n === e || n.anim === `fallen`) continue;
        let r = Math.hypot(n.x - i, n.z - a);
        r < t && r > 0.4 && ((t = r), (o = n.x), (s = n.z));
      }
    }
    let c = e && e !== `me` ? e.heading : Math.atan2(o - i, -(s - a)),
      l = Math.atan2(i - o, -(a - s)),
      u = Math.hypot(i - o, a - s),
      d = [
        [c + Math.PI, 2.3, 0.75, 0.05],
        [c + Math.PI, 2.3, -0.75, 0.05],
        [l, u + 1.25, 0.55, 0.12],
        [l, u + 1.25, -0.55, 0.12],
        [c + Math.PI * 0.62, 2.8, 0, 0.2],
        [c - Math.PI * 0.62, 2.8, 0, 0.2],
        [l, u + 2.6, 1.1, 0.8],
      ];
    for (let [r, o, s, c] of d) {
      let l = Math.sin(r),
        u = -Math.cos(r),
        d = i - l * o + Math.cos(r) * s,
        f = a - u * o + Math.sin(r) * s,
        p = new k(d, t.y + c, f);
      if (
        (!this.opts.eyeOk || this.opts.eyeOk(d, f)) &&
        !u2(n, p) &&
        !f2(n, p, t, t, e, this.cast)
      )
        return p;
    }
    return null;
  }
  async say(e, t, n = null, r = {}) {
    let i = this.m;
    if (this.skipped || !i.alive) return;
    if (n && !a2.test(t.zh)) {
      let t = this.head(n, o2.clone());
      if (t) {
        let a =
            this.hasShot &&
            !this.mv &&
            !f2(i.ctx, this.eye, this.look, t, n, this.cast),
          o = this.eye.distanceTo(t) > 9 && this.t - this.shotAt > 0.5;
        if (!r.keep && (!a || o)) {
          let r = this.speakerShot(n, t);
          (r && this.shot(r, t),
            this.debug &&
              console.info(
                `[cutscene] ${e?.name.zh ?? ``}: ${r ? `speaker shot` : `no clear shot — kept`}`,
              ));
        }
      }
    }
    let a = J0(i, e, t, r.dur);
    this.onLine = { sp: a.name, text: a.text, end: i.ctx.time.real + a.dur };
    let o = 0;
    (await i.until((e) => this.skipped || (o += e) >= a.dur * 0.92),
      (this.onLine = null));
  }
  async call(e, t) {
    !this.skipped &&
      this.m.alive &&
      (this.m.sfx(`phone_ring`, { ui: !0 }),
      await this.wait(0.9),
      await this.say(e, t));
  }
  async wait(e) {
    if (this.skipped || !this.m.alive) return;
    let t = 0;
    await this.m.until((n) => this.skipped || (t += n) >= e);
  }
  end() {
    if (this.finished) return;
    this.finished = !0;
    let e = this.m.ctx;
    this.stopTick();
    try {
      e.cameraRig.override(null);
    } catch {}
    try {
      e.ui.setHudVisible(!0);
    } catch {}
    try {
      e.player.forceVisible?.(null);
    } catch {}
    let t = e2;
    t &&
      ((t.count = Math.max(0, t.count - 1)),
      t.count || t.root.classList.remove(`lb`),
      t.skip.classList.remove(`show`),
      (t.requested = !1));
    let n = this.unthin;
    ((this.unthin = null),
      n && setTimeout(() => n(), 4e3),
      this.m.lockPlayer(!1));
  }
};
async function m2(e, t, n) {
  let r = new p2(e, n);
  r.start();
  try {
    await t(r);
  } finally {
    r.end();
  }
  return r;
}
var h2 = `
#tk-choice { position: fixed; left: 50%; bottom: calc(30vh + env(safe-area-inset-bottom) * 0.5); transform: translateX(-50%); z-index: 2147481100;
  width: min(620px, calc(100vw - 32px)); font: 600 18px "PingFang TC","Hiragino Sans","Noto Sans TC","Noto Sans JP","Microsoft JhengHei",system-ui,sans-serif;
  color: #fff; pointer-events: auto; user-select: none; -webkit-user-select: none; }
#tk-choice .tc-q { margin: 0 0 8px; padding: 6px 10px; font-size: 15px; border-radius: 8px; background: rgba(10,12,16,.72); white-space: pre-line; }
#tk-choice .tc-bar { height: 4px; border-radius: 2px; background: rgba(255,255,255,.18); margin: 0 4px 8px; overflow: hidden; }
#tk-choice .tc-bar i { display: block; height: 100%; width: 100%; background: #ffc83d; transform-origin: left; }
#tk-choice button { display: flex; gap: 12px; align-items: center; width: 100%; min-height: 52px; margin: 0 0 8px; padding: 12px 16px; border-radius: 12px;
  border: 1px solid rgba(255,255,255,.22); background: rgba(14,16,22,.78); color: #fff; font: inherit; text-align: left; cursor: pointer;
  -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
#tk-choice button.sel { border-color: #ffc83d; background: rgba(60,48,14,.9); }
#tk-choice button:hover { border-color: #ffd24d; background: rgba(48,40,16,.9); }
#tk-choice button kbd { flex: none; font: 700 12px system-ui,sans-serif; padding: 2px 7px; border-radius: 5px; background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.35); border-bottom-width: 2px; }
/* phones: the card sits low, in the thumbs' reach — the player is held still while it is up, so it
   may cover the stick and the buttons — and the subtitle it would overlap is hidden (the card's first line is that same
   line), as is the train ride's skip chip under it (transit/ui.ts). Sideways (≈ 340 px tall) the answers go two by two
   so the scene keeps the upper half; 44 px stays the target. */
body.tr-is-touch.tk-choosing .hud-sub, body.tr-is-touch.tk-choosing .tkl-hint { visibility: hidden; }
body.tr-is-touch #tk-choice button kbd { display: none; }
@media (max-height: 560px) {
  #tk-choice { bottom: max(10px, env(safe-area-inset-bottom)); width: min(700px, calc(100vw - 40px)); font-size: 14px; line-height: 1.3;
    display: grid; grid-template-columns: 1fr 1fr; column-gap: 8px; }
  #tk-choice .tc-q, #tk-choice .tc-bar { grid-column: 1 / -1; }
  #tk-choice .tc-q { font-size: 12px; margin: 0 0 4px; padding: 4px 8px; }
  #tk-choice .tc-bar { margin: 0 4px 6px; }
  #tk-choice button { min-height: 44px; margin: 0 0 6px; padding: 6px 10px; gap: 8px; border-radius: 10px; }
}
@media (max-width: 820px) and (orientation: portrait) {
  #tk-choice { bottom: max(14px, env(safe-area-inset-bottom)); font-size: 15px; }
  #tk-choice .tc-q { font-size: 13px; }
  #tk-choice button { min-height: 46px; padding: 9px 12px; margin-bottom: 6px; }
}
`,
  g2 = !1,
  _2 = null;
function v2() {
  let e =
      typeof navigator < `u` && navigator.getGamepads
        ? navigator.getGamepads()
        : null,
    t = { up: !1, down: !1, a: !1 };
  if (!e) return t;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r &&
      ((t.a ||= !!r.buttons[0]?.pressed),
      (t.up ||= !!r.buttons[12]?.pressed),
      (t.down ||= !!r.buttons[13]?.pressed));
  }
  return t;
}
