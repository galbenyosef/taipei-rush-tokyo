// tokyo__assets__region-tokyo-BcM3fReU 265 — els
// Lines 103865-104075 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var b4 = `
#tk-kart { position: fixed; inset: 0; pointer-events: none; z-index: 19;
  font: 700 15px "Hiragino Sans","PingFang TC","Noto Sans JP","Noto Sans TC",system-ui,sans-serif; color: #fff; user-select: none; }
#tk-kart .tk-panel { position: absolute; right: calc(16px + env(safe-area-inset-right)); top: calc(96px + env(safe-area-inset-top));
  min-width: 190px; padding: 10px 14px 10px; border-radius: 12px; background: rgba(10,14,24,.72); border: 1px solid rgba(255,255,255,.16); }
#tk-kart .tk-place { font-size: 38px; line-height: 1; letter-spacing: .02em; }
#tk-kart .tk-place small { font-size: 16px; opacity: .75; margin-left: 4px; }
#tk-kart .tk-row { display: flex; justify-content: space-between; gap: 12px; margin-top: 6px; font-size: 14px; }
#tk-kart .tk-row b { color: #ffd24d; font-weight: 800; }
#tk-kart .tk-row b.warn { color: #ff6b6b; }
#tk-kart .tk-list { margin-top: 8px; font-size: 12.5px; font-weight: 600; line-height: 1.55; opacity: .92; }
#tk-kart .tk-list i { display: inline-block; width: 9px; height: 9px; border-radius: 2px; margin-right: 6px; vertical-align: 0; }
#tk-kart .tk-list .me { color: #ffd24d; }
#tk-kart .tk-count { position: absolute; left: 50%; top: 30%; transform: translate(-50%,-50%); font-size: 92px; font-weight: 900;
  text-shadow: 0 4px 18px rgba(0,0,0,.55); color: #fff; opacity: 0; transition: opacity .12s; }
#tk-kart .tk-count.go { color: #7dff9a; }
#tk-kart .tk-strip { position: absolute; left: 50%; bottom: calc(118px + env(safe-area-inset-bottom)); transform: translateX(-50%);
  display: flex; gap: 10px; align-items: center; padding: 6px 12px; border-radius: 10px; background: rgba(10,14,24,.6); font-size: 13px; }
#tk-kart .tk-meter { width: 120px; height: 10px; border-radius: 5px; background: rgba(255,255,255,.15); overflow: hidden; }
#tk-kart .tk-meter div { height: 100%; width: 0; background: #f5f5f0; }
#tk-kart .tk-meter.l2 div { background: #ffbf3a; }
#tk-kart .tk-tag { padding: 1px 7px; border-radius: 6px; background: rgba(255,255,255,.12); opacity: .35; }
#tk-kart .tk-tag.on { opacity: 1; background: #ff8a3a; }
#tk-kart .tk-tag.draft.on { background: #3ab8ff; }
#tk-kart .tk-flash { position: absolute; left: 50%; top: 40%; transform: translateX(-50%); font-size: 24px; color: #ffd24d;
  text-shadow: 0 2px 10px rgba(0,0,0,.6); opacity: 0; transition: opacity .2s; }
@media (max-width: 760px) { #tk-kart .tk-panel { top: calc(70px + env(safe-area-inset-top)); min-width: 150px; padding: 8px 10px; }
  #tk-kart .tk-place { font-size: 28px; } #tk-kart .tk-list { display: none; } #tk-kart .tk-strip { bottom: calc(150px + env(safe-area-inset-bottom)); } }
/* a phone held sideways (≈ 340 px tall): 150 px up is the middle of the screen — the kart itself; the strip goes to the
   top, under the objective; the race panel shrinks to clear the horn / get-out buttons under it */
@media (max-height: 480px) { #tk-kart .tk-strip { top: calc(58px + env(safe-area-inset-top)); bottom: auto; padding: 4px 10px; font-size: 12px; }
  #tk-kart .tk-meter { width: 90px; }
  #tk-kart .tk-panel { top: calc(62px + env(safe-area-inset-top)); min-width: 128px; padding: 5px 9px 6px; border-radius: 9px; }
  #tk-kart .tk-place { font-size: 22px; } #tk-kart .tk-place small { font-size: 12px; }
  #tk-kart .tk-row { font-size: 11.5px; margin-top: 2px; gap: 8px; } }
/* the viewfinder (story/kit/photo.ts) is up: the strip is not part of the shot */
body:has(#tk-photo) #tk-kart .tk-strip { visibility: hidden; }
`,
  x4 = class {
    ctx;
    root = null;
    els = {};
    last = {};
    flashT = 0;
    constructor(e, t) {
      if (((this.ctx = e), typeof document > `u`)) return;
      if (!document.getElementById(`tk-kart-css`)) {
        let e = document.createElement(`style`);
        ((e.id = `tk-kart-css`),
          (e.textContent = b4),
          document.head.appendChild(e));
      }
      let n = document.createElement(`div`);
      ((n.id = `tk-kart`),
        (n.innerHTML =
          t === `race`
            ? `<div class="tk-panel"><div class="tk-place"></div><div class="tk-row"><span class="tk-lapL"></span><b class="tk-lap"></b></div><div class="tk-row"><span class="tk-timeL"></span><b class="tk-time"></b></div><div class="tk-row"><span class="tk-bestL"></span><b class="tk-best"></b></div><div class="tk-list"></div></div><div class="tk-count"></div><div class="tk-strip"><span class="tk-driftL"></span><div class="tk-meter"><div></div></div><span class="tk-tag boost"></span><span class="tk-tag draft"></span></div><div class="tk-flash"></div>`
            : t === `run`
              ? `<div class="tk-panel"><div class="tk-row"><span class="tk-gapL"></span><b class="tk-gap"></b></div><div class="tk-row"><span class="tk-timeL"></span><b class="tk-time"></b></div><div class="tk-row"><span class="tk-leftL"></span><b class="tk-left"></b></div></div><div class="tk-count"></div><div class="tk-strip"><span class="tk-driftL"></span><div class="tk-meter"><div></div></div><span class="tk-tag boost"></span><span class="tk-tag draft"></span></div><div class="tk-flash"></div>`
              : `<div class="tk-panel"><div class="tk-row"><span class="tk-formL"></span><b class="tk-form"></b></div><div class="tk-row"><span class="tk-redL"></span><b class="tk-red"></b></div><div class="tk-row"><span class="tk-scoreL"></span><b class="tk-score"></b></div></div><div class="tk-flash"></div>`));
      for (let e of [
        `place`,
        `lapL`,
        `lap`,
        `timeL`,
        `time`,
        `bestL`,
        `best`,
        `list`,
        `count`,
        `driftL`,
        `formL`,
        `form`,
        `redL`,
        `red`,
        `scoreL`,
        `score`,
        `gapL`,
        `gap`,
        `leftL`,
        `left`,
        `flash`,
      ]) {
        let t = n.querySelector(`.tk-${e}`);
        t && (this.els[e] = t);
      }
      let r = n.querySelector(`.tk-meter`);
      r && (this.els.meter = r);
      let i = n.querySelector(`.tk-tag.boost`),
        a = n.querySelector(`.tk-tag.draft`);
      (i && (this.els.boost = i),
        a && (this.els.draft = a),
        document.body.appendChild(n),
        (this.root = n));
      let o = (e, t) => this.ctx.t({ zh: e, en: t });
      (this.set(`lapL`, o(`圈數`, `Lap`)),
        this.set(`timeL`, o(`時間`, `Time`)),
        this.set(`bestL`, o(`最快單圈`, `Best lap`)),
        this.set(`driftL`, o(`甩尾`, `Drift`)),
        this.set(`boost`, o(`加速`, `Boost`)),
        this.set(`draft`, o(`尾流`, `Slipstream`)),
        this.set(`formL`, o(`隊形`, `Formation`)),
        this.set(`redL`, o(`闖紅燈`, `Red lights`)),
        this.set(`scoreL`, o(`分數`, `Score`)),
        this.set(`gapL`, o(`與領頭差距`, `Gap to leader`)),
        this.set(`leftL`, o(`剩餘`, `To go`)));
    }
    set(e, t) {
      let n = this.els[e];
      n && this.last[e] !== t && ((this.last[e] = t), (n.textContent = t));
    }
    count(e, t = !1) {
      let n = this.els.count;
      n &&
        (this.set(`count`, e),
        (n.style.opacity = e ? `1` : `0`),
        n.classList.toggle(`go`, t));
    }
    flash(e, t = 1.4) {
      let n = this.els.flash;
      n && (this.set(`flash`, e), (n.style.opacity = `1`), (this.flashT = t));
    }
    tick(e) {
      this.flashT > 0 &&
        ((this.flashT -= e),
        this.flashT <= 0 &&
          this.els.flash &&
          (this.els.flash.style.opacity = `0`));
    }
    race(e) {
      this.set(`place`, `${e.place}`);
      let t = this.els.place;
      if (t) {
        let n = `${e.place}/${e.of}`;
        this.last.placeHtml !== n &&
          ((this.last.placeHtml = n),
          (t.innerHTML = `${e.place}<small>/ ${e.of}</small>`));
      }
      (this.set(`lap`, `${Math.min(e.lap, e.laps)} / ${e.laps}`),
        this.set(`time`, S4(e.time)),
        this.set(`best`, e.best > 0 ? S4(e.best) : `—`));
      let n = this.els.list;
      if (n) {
        let t = e.rows.map((e) => e.name).join(`|`);
        this.last.list !== t &&
          ((this.last.list = t),
          (n.innerHTML = e.rows
            .map(
              (e, t) =>
                `<div class="${e.me ? `me` : ``}">${t + 1}. <i style="background:#${e.color.toString(16).padStart(6, `0`)}"></i>${C4(e.name)}</div>`,
            )
            .join(``)));
      }
      this.strip(e.charge, e.level, e.boost, e.draft);
    }
    strip(e, t, n, r) {
      let i = this.els.meter;
      if (i) {
        let n = `${Math.round(Math.min(1, e / 1.6) * 100)}%`;
        (this.last.meter !== n &&
          ((this.last.meter = n), (i.firstElementChild.style.width = n)),
          i.classList.toggle(`l2`, t >= 2));
      }
      (this.els.boost?.classList.toggle(`on`, n),
        this.els.draft?.classList.toggle(`on`, r > 0.3));
    }
    run(e) {
      (this.set(
        `gap`,
        e.gap <= 0
          ? this.ctx.t({ zh: `領先！`, en: `Ahead!` })
          : `${Math.round(e.gap)} m`,
      ),
        this.els.gap?.classList.toggle(`warn`, e.warn),
        this.set(`time`, S4(e.time)),
        this.set(
          `left`,
          e.left >= 1e3
            ? `${(e.left / 1e3).toFixed(1)} km`
            : `${Math.max(0, Math.round(e.left / 10) * 10)} m`,
        ),
        this.strip(e.charge, e.level, e.boost, e.draft));
    }
    tour(e) {
      this.set(
        `form`,
        this.ctx.t(
          e.inFormation
            ? { zh: `良好`, en: `In line` }
            : { zh: `脫隊！`, en: `Out of line!` },
        ),
      );
      let t = this.els.form;
      (t && (t.style.color = e.inFormation ? `#7dff9a` : `#ff6b6b`),
        this.set(`red`, `${e.reds}`),
        this.set(`score`, `${e.score}`));
    }
    remove() {
      (this.root?.remove(), (this.root = null));
    }
  };
function S4(e) {
  let t = Math.floor(e / 60),
    n = e - t * 60;
  return `${t}:${n < 10 ? `0` : ``}${n.toFixed(2)}`;
}
function C4(e) {
  return e.replace(/[&<>"]/g, (e) =>
    e === `&` ? `&amp;` : e === `<` ? `&lt;` : e === `>` ? `&gt;` : `&quot;`,
  );
}
