// tokyo__assets__region-tokyo-BcM3fReU 191 — math
// Lines 79485-79935 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var lW = 120,
  uW = (e) =>
    ((Math.max(0, Math.min(lW, e)) / lW) * 240 - 120) * (Math.PI / 180),
  dW = (e, t) => [115 + Math.sin(uW(e)) * t, 112 - Math.cos(uW(e)) * t],
  fW = class {
    host;
    jpFont;
    root = null;
    els;
    cache = new Map();
    input = null;
    off = [];
    msgT = 0;
    callT = 0;
    armT = 0;
    holdAbort = 0;
    gp = { prev: new Set(), stickT: 0, stickDir: 0, backT: 0 };
    result = null;
    rows = [];
    actSeen = [];
    constructor(e, t) {
      ((this.host = e), (this.jpFont = t));
    }
    get isOpen() {
      return !!this.root;
    }
    open(e, t) {
      (this.close(), cW(this.jpFont), (this.input = t), (this.rows = e.rows));
      let n = (e) => this.host.t(e),
        r = document.createElement(`div`);
      r.className = `tkd`;
      let i = [];
      for (let e = 0; e <= lW; e += 5) {
        let [t, n] = dW(e, e % 10 ? 92 : 88),
          [r, a] = dW(e, 98);
        if (
          (i.push(
            `<line x1="${t.toFixed(1)}" y1="${n.toFixed(1)}" x2="${r.toFixed(1)}" y2="${a.toFixed(1)}" stroke="#cfd3d8" stroke-width="${e % 10 ? 1 : 2}"/>`,
          ),
          e % 20 == 0)
        ) {
          let [t, n] = dW(e, 74);
          i.push(
            `<text x="${t.toFixed(1)}" y="${(n + 4).toFixed(1)}" fill="#e9ecef" font-size="12" font-family="Helvetica,Arial" font-weight="700" text-anchor="middle">${e}</text>`,
          );
        }
      }
      ((r.innerHTML = `
<div class="tkd-dial"><svg viewBox="0 0 230 230">
  <path class="green" fill="none" stroke="#2fd15a" stroke-width="5" stroke-linecap="round" opacity=".9"/>
  ${i.join(``)}
  <polygon class="perm" points="0,0 0,0 0,0" fill="#ff9d1f"/>
  <line class="needle" x1="115" y1="112" x2="115" y2="30" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="115" cy="112" r="7" fill="#e9ecef"/>
  <text class="speed" x="115" y="152" fill="#fff" font-size="30" font-family="'SF Mono',Menlo,Consolas,monospace" font-weight="800" text-anchor="middle">0</text>
  <text x="115" y="166" fill="#8a9097" font-size="10" font-family="Helvetica,Arial" text-anchor="middle">km/h</text>
  <text class="atc" x="115" y="188" fill="#2fd15a" font-size="15" font-family="Helvetica,Arial" font-weight="800" text-anchor="middle">ATC</text>
  <text class="next" x="115" y="206" fill="#ffd84a" font-size="12" font-family="Helvetica,Arial" font-weight="700" text-anchor="middle"></text>
</svg>
<div class="tkd-lamps"><span class="tkd-lamp pilot">知らせ灯</span><span class="tkd-lamp atc">ATC</span><span class="tkd-lamp eb">非常</span><span class="tkd-lamp door">戸 右</span></div></div>
<div class="tkd-handle">${iW.map((e) => `<div class="${e === -8 ? `e` : e > 0 ? `p` : e < 0 ? `b` : `n`}" data-h="${e}">${aW(e)}</div>`).join(``)}<small>${n({ zh: `主控手把`, en: `Master controller` })}</small></div>
<div class="tkd-staff"><header><b>${e.title}</b><span class="clock">00:00:00</span></header><table>${e.stations.map((t, n) => `<tr><td>${t.ja}</td><td class="t arr">${n === 0 ? `` : pW(e.rows[n]?.arr)}</td><td class="t dep">${pW(e.rows[n]?.dep)}</td><td class="a"></td></tr>`).join(``)}</table><footer>${n({ zh: `スタフ（時刻表）· 到站 / 發車`, en: `Staff timetable · arr. / dep.` })}</footer></div>
<div class="tkd-stop hide"><div class="k">停止位置まで<em>${n({ zh: `距停車位置`, en: `to the stop mark` })}</em></div><div class="n">—</div><div class="tkd-ruler"><i></i><u></u></div></div>
<div class="tkd-coach hide"></div>
<div class="tkd-msg hide"></div>
<div class="tkd-call hide"></div>
<div class="tkd-hint"></div>
<div class="tkd-btns"><button class="call" aria-label="call">☝</button><button class="end" aria-label="end">✕</button></div>`),
        document.body.appendChild(r),
        (this.root = r));
      let a = (e) => r.querySelector(e),
        o = Array.from(r.querySelectorAll(`.tkd-staff tr`));
      ((this.els = {
        needle: a(`.needle`),
        perm: a(`.perm`),
        speed: a(`.speed`),
        atcTxt: a(`.atc`),
        next: a(`.next`),
        green: a(`.green`),
        lamps: {
          pilot: a(`.tkd-lamp.pilot`),
          atc: a(`.tkd-lamp.atc`),
          eb: a(`.tkd-lamp.eb`),
          door: a(`.tkd-lamp.door`),
        },
        handle: Array.from(r.querySelectorAll(`.tkd-handle div`)),
        clock: a(`.clock`),
        rows: o,
        arr: o.map((e) => e.querySelector(`.arr`)),
        dep: o.map((e) => e.querySelector(`.dep`)),
        stop: a(`.tkd-stop`),
        stopN: a(`.tkd-stop .n`),
        ruler: a(`.tkd-ruler`),
        marker: a(`.tkd-ruler u`),
        coach: a(`.tkd-coach`),
        msg: a(`.tkd-msg`),
        call: a(`.tkd-call`),
        hint: a(`.tkd-hint`),
        endBtn: a(`.tkd-btns .end`),
      }),
        this.cache.clear(),
        (this.actSeen = []),
        this.wire());
    }
    wire() {
      let e = this.root,
        t = () => this.input,
        n = (e, t, n, r) => {
          (e.addEventListener(t, n, r),
            this.off.push(() => e.removeEventListener(t, n, r)));
        },
        r = 0;
      (n(
        window,
        `keydown`,
        (e) => {
          let n = t();
          if (!n) return;
          let i = e.code;
          if (this.result) {
            (i === `Enter` || i === `KeyE` || i === `Space`) &&
              (e.preventDefault(), n.confirm());
            return;
          }
          if (
            i === `KeyW` ||
            i === `ArrowUp` ||
            i === `KeyS` ||
            i === `ArrowDown`
          ) {
            e.preventDefault();
            let t = performance.now();
            if (e.repeat && t - r < 170) return;
            ((r = t), n.notch(i === `KeyW` || i === `ArrowUp` ? 1 : -1));
          } else
            i === `Space`
              ? (e.preventDefault(), n.eb())
              : i === `KeyN`
                ? n.set(0)
                : i === `KeyQ`
                  ? n.call()
                  : i === `Backspace` &&
                    !e.repeat &&
                    (e.preventDefault(), (this.holdAbort = performance.now()));
        },
        { capture: !0 },
      ),
        n(window, `keyup`, (e) => {
          e.code === `Backspace` && (this.holdAbort = 0);
        }));
      let i = e.querySelector(`.tkd-handle`),
        a = !1,
        o = (e) => {
          let n = this.els.handle,
            r = 0,
            i = 1 / 0;
          for (let t = 0; t < n.length; t++) {
            let a = n[t].getBoundingClientRect(),
              o = Math.abs(e - (a.top + a.height / 2));
            o < i && ((i = o), (r = t));
          }
          let a = iW[r],
            o = t();
          o && (a === -8 ? o.eb() : o.set(a));
        };
      (n(i, `pointerdown`, (e) => {
        (e.preventDefault(), (a = !0));
        try {
          i.setPointerCapture(e.pointerId);
        } catch {}
        o(e.clientY);
      }),
        n(i, `pointermove`, (e) => {
          a && o(e.clientY);
        }),
        n(i, `pointerup`, () => (a = !1)),
        n(i, `pointercancel`, () => (a = !1)),
        n(e.querySelector(`.tkd-btns .call`), `pointerdown`, (e) => {
          (e.preventDefault(), t()?.call());
        }),
        n(this.els.endBtn, `pointerdown`, (e) => {
          (e.preventDefault(),
            performance.now() - this.armT < 2500
              ? t()?.abort()
              : ((this.armT = performance.now()),
                this.message(
                  this.host.t({
                    zh: `再按一次 ✕ 結束乘務`,
                    en: `Tap ✕ again to end the shift`,
                  }),
                  2.5,
                )));
        }));
    }
    tick(e) {
      let t = this.input;
      if (!t || !this.root) return;
      (this.holdAbort &&
        performance.now() - this.holdAbort > 1200 &&
        ((this.holdAbort = 0), t.abort()),
        this.els.endBtn.classList.toggle(
          `arm`,
          performance.now() - this.armT < 2500,
        ),
        this.msgT > 0 &&
          (this.msgT -= e) <= 0 &&
          this.els.msg.classList.add(`hide`),
        this.callT > 0 &&
          (this.callT -= e) <= 0 &&
          this.els.call.classList.add(`hide`));
      let n = typeof navigator < `u` ? navigator.getGamepads?.() : null,
        r = null;
      if (n) for (let e of n) e && e.connected && (r = e);
      if (!r) return;
      let i = this.gp,
        a = new Set();
      r.buttons.forEach((e, t) => (e.pressed || e.value > 0.5) && a.add(t));
      let o = (e) => a.has(e) && !i.prev.has(e);
      if (this.result) (o(0) || o(2)) && t.confirm();
      else {
        ((o(7) || o(12)) && t.notch(1),
          (o(6) || o(13)) && t.notch(-1),
          o(1) && t.eb(),
          (o(2) || o(3)) && t.call());
        let n = r.axes[1] ?? 0,
          s = n < -0.6 ? 1 : n > 0.6 ? -1 : 0;
        (s === i.stickDir
          ? s && (i.stickT -= e) <= 0 && ((i.stickT = 0.2), t.notch(s))
          : ((i.stickDir = s), (i.stickT = 0.35), s && t.notch(s)),
          a.has(8)
            ? (i.backT += e) > 1.2 && ((i.backT = -1e9), t.abort())
            : (i.backT = 0));
      }
      i.prev = a;
    }
    set(e, t) {
      return this.cache.get(e) !== t && (this.cache.set(e, t), !0);
    }
    update(e) {
      if (!this.root) return;
      let t = this.els,
        n = Math.round(e.v * 2) / 2;
      if (this.set(`v`, n)) {
        let [r, i] = dW(n, 86);
        (t.needle.setAttribute(`x2`, r.toFixed(1)),
          t.needle.setAttribute(`y2`, i.toFixed(1)),
          (t.speed.textContent = String(Math.round(e.v))));
      }
      let r = Math.round(e.permitted);
      if (this.set(`perm`, r)) {
        let e = uW(r),
          n = Math.cos(e),
          i = Math.sin(e),
          a = [115 + i * 99, 112 - n * 99],
          o = [115 + i * 111 - n * 6, 112 - n * 111 - i * 6],
          s = [115 + i * 111 + n * 6, 112 - n * 111 + i * 6];
        t.perm.setAttribute(
          `points`,
          `${a[0].toFixed(1)},${a[1].toFixed(1)} ${o[0].toFixed(1)},${o[1].toFixed(1)} ${s[0].toFixed(1)},${s[1].toFixed(1)}`,
        );
      }
      let i = Math.round(e.step);
      if (this.set(`step`, i)) {
        let [e, n] = dW(0, 104),
          [r, a] = dW(i, 104);
        (t.green.setAttribute(
          `d`,
          `M${e.toFixed(1)} ${n.toFixed(1)} A104 104 0 ${+(i > 60)} 1 ${r.toFixed(1)} ${a.toFixed(1)}`,
        ),
          (t.atcTxt.textContent = `ATC ${i}`));
      }
      let a =
        e.nextV > 0
          ? `▼${Math.round(e.nextV)}  ${Math.round(e.nextDist / 10) * 10} m`
          : ``;
      (this.set(`next`, a) && (t.next.textContent = a),
        this.set(`pilot`, e.pilot) &&
          t.lamps.pilot.classList.toggle(`on`, e.pilot),
        this.set(`atcL`, e.atc) && t.lamps.atc.classList.toggle(`on`, e.atc),
        this.set(`ebL`, e.eb) && t.lamps.eb.classList.toggle(`on`, e.eb),
        this.set(`door`, e.doorsOpen) &&
          t.lamps.door.classList.toggle(`on`, e.doorsOpen),
        this.set(`h`, e.h) &&
          t.handle.forEach((t, n) => t.classList.toggle(`on`, iW[n] === e.h)),
        this.set(`clock`, Math.floor(e.clock)) &&
          (t.clock.textContent = rW(e.clock)),
        this.set(`row`, e.row) &&
          t.rows.forEach((t, n) => {
            (t.classList.toggle(`now`, n === e.row),
              t.classList.toggle(`past`, n < e.row));
          }));
      for (let n = 0; n < t.rows.length; n++) {
        let r = e.actArr[n],
          i = e.actDep[n],
          a = this.rows[n];
        if (
          (this.actSeen[n * 2] === r && this.actSeen[n * 2 + 1] === i) ||
          (Object.is(this.actSeen[n * 2], r) &&
            Object.is(this.actSeen[n * 2 + 1], i))
        )
          continue;
        ((this.actSeen[n * 2] = r), (this.actSeen[n * 2 + 1] = i));
        let o = t.rows[n].querySelector(`.a`),
          s =
            Number.isFinite(r) && a
              ? r - a.arr
              : Number.isFinite(i) && a
                ? i - a.dep
                : NaN;
        ((o.textContent = Number.isFinite(s)
          ? `${s >= 0 ? `+` : `−`}${Math.abs(Math.round(s))}s`
          : ``),
          (o.className = `a ${Number.isFinite(s) ? (s > 2 ? `late` : s < -2 ? `early` : `ok`) : ``}`));
      }
      let o = Number.isFinite(e.dist) && e.dist < 400 && e.dist > -30;
      if ((this.set(`stopShow`, o) && t.stop.classList.toggle(`hide`, !o), o)) {
        let n = e.dist,
          r = Math.abs(n),
          i =
            (n < -0.005 ? -1 : 1) *
            (r >= 10 ? 1e6 + Math.round(r) : Math.round(r * 100));
        if (this.set(`stopTxt`, i)) {
          let e = n < -0.005 ? `+` : ``;
          t.stopN.textContent =
            r >= 10
              ? `${e}${Math.round(r)} m`
              : r >= 0.995
                ? `${e}${r.toFixed(2)} m`
                : Math.round(r * 100) === 0
                  ? `±0 cm`
                  : `${e}${Math.round(r * 100)} cm`;
        }
        let a =
          n < -0.5
            ? `n over`
            : r <= 0.1 && e.v < 0.5
              ? `n pitta`
              : r < 10
                ? `n close`
                : `n`;
        this.set(`stopCls`, a) && (t.stopN.className = a);
        let o = Math.max(0, Math.min(1, (10 - n) / 12)),
          s = Math.round(o * 400) / 4;
        this.set(`ruler`, s) && (t.marker.style.left = `${s}%`);
      }
    }
    setHint(e) {
      if (!this.root || !this.set(`hintDev`, e)) return;
      let t = (e) => this.host.t(e),
        n = (e) => `<kbd>${e}</kbd>`;
      this.els.hint.innerHTML = t(
        e === `gamepad`
          ? {
              zh: r.on
                ? r.t(
                    `${n(`RT`)}${n(`LT`)} 或 搖桿 ↑↓ 手把 · ${n(`B`)} 緊急煞車<br>${n(`X`)} 指差喚呼 · 長按 ${n(`Back`)} 結束`,
                    `${n(`RT`)}${n(`LT`)} または スティック ↑↓ でハンドル · ${n(`B`)} 非常ブレーキ<br>${n(`X`)} 指差喚呼 · ${n(`Back`)} 長押しで終了`,
                  )
                : `${n(`RT`)}${n(`LT`)} 或 搖桿 ↑↓ 手把 · ${n(`B`)} 緊急煞車<br>${n(`X`)} 指差喚呼 · 長按 ${n(`Back`)} 結束`,
              en: `${n(`RT`)}${n(`LT`)} or stick ↑↓ handle · ${n(`B`)} emergency<br>${n(`X`)} point & call · hold ${n(`Back`)} to end`,
            }
          : e === `touch`
            ? {
                zh: `右側滑桿：上推力行、下拉制動<br>☝ 指差喚呼 · ✕ 結束`,
                en: `Right slider: up = power, down = brake<br>☝ point & call · ✕ end`,
              }
            : {
                zh: r.on
                  ? r.t(
                      `${n(`W`)}${n(`↑`)} 力行 · ${n(`S`)}${n(`↓`)} 制動 · ${n(`N`)} 空檔<br>${n(`Space`)} 緊急煞車 · ${n(`Q`)} 指差喚呼 · 長按 ${n(`⌫`)} 結束`,
                      `${n(`W`)}${n(`↑`)} 力行 · ${n(`S`)}${n(`↓`)} ブレーキ · ${n(`N`)} ニュートラル<br>${n(`Space`)} 非常ブレーキ · ${n(`Q`)} 指差喚呼 · ${n(`⌫`)} 長押しで終了`,
                    )
                  : `${n(`W`)}${n(`↑`)} 力行 · ${n(`S`)}${n(`↓`)} 制動 · ${n(`N`)} 空檔<br>${n(`Space`)} 緊急煞車 · ${n(`Q`)} 指差喚呼 · 長按 ${n(`⌫`)} 結束`,
                en: `${n(`W`)}${n(`↑`)} power · ${n(`S`)}${n(`↓`)} brake · ${n(`N`)} neutral<br>${n(`Space`)} emergency · ${n(`Q`)} point & call · hold ${n(`⌫`)} to end`,
              },
      );
    }
    coach(e) {
      this.root &&
        this.set(`coach`, e ?? ``) &&
        (this.els.coach.classList.toggle(`hide`, !e),
        e && (this.els.coach.textContent = e));
    }
    message(e, t = 3) {
      this.root &&
        ((this.els.msg.textContent = e),
        this.els.msg.classList.remove(`hide`),
        (this.msgT = t));
    }
    call(e, t = ``, n = !1, r = 3) {
      if (this.root) {
        if (!e) {
          (this.els.call.classList.add(`hide`), (this.callT = 0));
          return;
        }
        ((this.els.call.innerHTML = `☝ ${e}<small>${t}</small>`),
          this.els.call.classList.remove(`hide`),
          this.els.call.classList.toggle(`done`, n),
          (this.callT = r));
      }
    }
    showResult(e, t) {
      let n = (e) => this.host.t(e),
        i = document.createElement(`div`);
      i.className = `tkd-res`;
      let a = this.host.device(),
        o = n(
          a === `touch`
            ? { zh: `點擊繼續`, en: `Tap to continue` }
            : {
                zh: r.on
                  ? r.t(
                      `按 ${a === `gamepad` ? `A` : `E`} 繼續`,
                      `${a === `gamepad` ? `A` : `E`} で続ける`,
                    )
                  : `按 ${a === `gamepad` ? `A` : `E`} 繼續`,
                en: `${a === `gamepad` ? `A` : `E`} to continue`,
              },
        );
      return (
        (i.innerHTML = `<div class="p"><header><div class="g ${e.grade}">${e.grade}</div><div><h2>${e.title}</h2><p>${e.sub}</p></div></header>
<table><tr><th>${n({ zh: `車站`, en: `Station` })}</th><th>${n({ zh: `停車位置`, en: `Stop mark` })}</th><th>${n({ zh: `準點`, en: `Timing` })}</th><th>ATC</th><th>${n({ zh: `乘坐舒適`, en: `Ride` })}</th><th>${n({ zh: `得分`, en: `Score` })}</th></tr>
${e.rows.map((e) => `<tr><td>${e.name}</td><td class="${e.pitta ? `pitta` : ``}">${e.pitta ? `ピッタリ! ` : ``}${e.offsetCm > 0 ? `+` : ``}${e.offsetCm} cm</td><td>${e.lateS > 0 ? `+` : ``}${e.lateS} s</td><td>${e.atcHits}</td><td>${Math.round(e.comfort * 100)}%</td><td><b>${e.score.toFixed(1)}</b></td></tr>`).join(``)}</table>
<footer><b>${n({ zh: `總分`, en: `Total` })} ${e.score.toFixed(1)}${e.aborted ? ` · ${n({ zh: `中止`, en: `aborted` })}` : ``}</b><span>${o}</span></footer></div>`),
        document.body.appendChild(i),
        (this.result = i),
        new Promise((e) => {
          let n = !1,
            r = () => {
              n || ((n = !0), i.remove(), (this.result = null), e());
            },
            a = this.input;
          ((this.input = {
            ...(a ?? { notch() {}, set() {}, eb() {}, call() {}, abort() {} }),
            confirm: r,
          }),
            i.addEventListener(`pointerdown`, r),
            setTimeout(r, t * 1e3));
        })
      );
    }
    close() {
      for (let e of this.off) e();
      ((this.off = []),
        this.result?.remove(),
        (this.result = null),
        this.root?.remove(),
        (this.root = null),
        (this.input = null));
    }
  };
