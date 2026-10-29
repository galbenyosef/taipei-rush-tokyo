// tokyo/assets/board-NSb6t8eV 02 — host
// Lines 346-638 of readable/tokyo/assets/board-NSb6t8eV.pretty.js (statement-aligned).
function D(e, t, n, r, c) {
  let l = t !== `en`,
    u = T(o(e.from, `hsr`).name),
    d = T(o(e.to, `hsr`).name),
    f = e.dep.flight.replace(/^\D+\s*/, ``),
    p = new Date();
  e.dep.nextDay && p.setDate(p.getDate() + 1);
  let m = `${p.getFullYear()}/${String(p.getMonth() + 1).padStart(2, `0`)}/${String(p.getDate()).padStart(2, `0`)}`,
    h = E(n),
    g = `${String(h).padStart(2, `0`)}-${f.slice(-2)}-${n.replace(/\D/g, ``).padStart(2, `0`)}-${m.replace(/\//g, ``).slice(2)}`,
    _ = (e) => (l ? e.zh : e.en),
    v = (e) => (l ? e.en : e.zh),
    y = e.promo
      ? `<b class="m"><s>${a(e.route.fare, i[e.from].currency)}</s><span class="free">${l ? `免費` : `FREE`}</span></b>`
      : `<b class="m">${a(e.fare, i[e.from].currency)}</b>`;
  return `
      <div class="hst-wrap">
        <div class="hst-slot">取票口 · TICKETS</div>
        <div class="hst-clip"><div class="hst">
          <div class="hst-hd"><b>高鐵</b><span>HIGH SPEED RAIL</span><em>${m}</em><em>${l ? `全票 · 對號座` : `Adult · Reserved`}</em></div>
          <div class="hst-main">
            <svg class="hst-qr" viewBox="0 0 25 25" shape-rendering="crispEdges" aria-hidden="true"><path d="${w(`${e.dep.flight}|${n}|${m}`)}" fill="#111"/></svg>
            <div class="hst-route">
              <div class="hst-st"><b>${S(_(u))}</b><small>${S(v(u))}</small><i><small>${l ? `發車` : `DEP`}</small>${s(e.dep.min)}</i></div>
              <div class="hst-arw">▶▶▶</div>
              <div class="hst-st"><b>${S(_(d))}</b><small>${S(v(d))}</small><i><small>${l ? `到達` : `ARR`}</small>${s(e.dep.min + e.route.hours * 60)}</i></div>
            </div>
            <div class="hst-seat">
              <div>車次 Train<b>${S(f)}</b></div>
              <div>車廂 Car<b>${h}</b></div>
              <div>座位 Seat<b>${S(n)}</b></div>
            </div>
          </div>
          <div class="hst-low">
            <div>票價 Fare${y}</div>
            <div>車廂 Class<b>${l ? `標準車廂` : `Standard`}</b></div>
            <div>旅客 Passenger<b>${S(_(e.passenger.name))}</b></div>
            <div class="note">限當日當次有效 · Valid on this train only<br><code>${g}</code></div>
          </div>
        </div></div>
      </div>
      <div class="trb-acts"><button class="trb-sec" type="button" data-act="back">${S(r)}</button><button class="trb-go" type="button" data-act="board">${S(c)} ▶ <kbd>Enter</kbd></button></div>`;
}
function O(e, t, r, a) {
  let c = (e) => (t === `ja` && a ? a(e) : t === `en` ? e.en : e.zh),
    f = t !== `en`,
    p = i[e.from],
    m = i[e.to],
    g = n(e.route),
    _ = g === `hsr`;
  if (_)
    return D(e, t === `ja` ? `zh` : t, r, c(u.back), c(d.board ?? u.board));
  let v = _ ? { ...u, ...d } : u,
    y = l(e.route),
    b = o(e.from, g),
    x = o(e.to, g),
    C = s(e.dep.min - (_ ? 10 : 25));
  return `
      <div class="bp">
        <div class="bp-main">
          <div class="bp-top"><b>${f ? y.zh : y.en}</b>${f ? ` <small style="opacity:.85">${y.en}</small>` : ``}<span>${S(c(v.boarding))}</span></div>
          <div class="bp-route"><div><div class="bp-code">${b.code}</div><div class="bp-city">${S(c(p.name))}</div></div><div class="bp-plane"></div>
            <div style="text-align:right"><div class="bp-code">${x.code}</div><div class="bp-city">${S(c(m.name))}</div></div></div>
          <div class="bp-grid">
            <div>${S(c(v.passenger))}<b>${S(c(e.passenger.name))}</b></div>
            <div>${S(c(v.flight))}<b>${S(e.dep.flight)}</b></div>
            <div>${S(c(v.gate))}<b>${S(e.route.gate)}</b></div>
            <div>${S(c(v.seat))}<b>${r}</b></div>
            <div>${S(c(v.boardTime))}<b>${C}</b></div>
            <div>${S(c(v.leaves))}<b>${s(e.dep.min)}</b></div>
            <div>${S(c(v.arrive))}<b>${s(e.dep.min + e.route.hours * 60 + h(e))}</b></div>
            <div>${S(c(v.economy))}<b>${_ ? `7` : `Y`}</b></div>
          </div>
        </div>
        <div class="bp-stub"><div>${S(c(v.flight))}<b>${S(e.dep.flight)}</b></div><div>${S(c(v.seat))}<b>${r}</b></div><div>${b.code} → ${x.code}</div><div class="bp-bar"></div></div>
      </div>
      <div class="trb-acts"><button class="trb-sec" type="button" data-act="back">${S(c(v.back))}</button><button class="trb-go" type="button" data-act="board">${S(c(v.board))} ${_ ? `▶` : `✈`} <kbd>Enter</kbd></button></div>`;
}
var DepartureBoard = class e {
  host;
  root = null;
  data = null;
  stage = `board`;
  resolve = null;
  keyH = (e) => this.onKey(e);
  seat = `23A`;
  armedAt = 0;
  constructor(e) {
    this.host = e;
  }
  get isOpen() {
    return !!this.root;
  }
  t(e) {
    return this.host.lang() === `ja` && this.host.t
      ? this.host.t(e)
      : this.host.lang() === `en`
        ? e.en
        : e.zh;
  }
  alt(t) {
    return this.host.lang() === `ja` || (e.enOnly && this.host.lang() === `en`)
      ? ``
      : this.host.lang() === `en`
        ? t.zh
        : t.en;
  }
  open(e) {
    (x(), this.close(!0), (this.data = e));
    {
      ((this.base = e), (this.pick = 0));
      let t = [e, ...(e.alts ?? [])];
      for (let e of t) e.__all = t;
      let n = t.findIndex((e) => e.to === `tokyo`);
      n > 0 && ((this.pick = n), (this.data = t[n]));
    }
    ((this.stage = `board`),
      (this.armedAt = performance.now() + 350),
      (this.seat = `${18 + Math.floor(Math.random() * 14)}${[`A`, `F`, `A`, `K`][Math.floor(Math.random() * 4)]}`),
      n(e.route) === `hsr` &&
        (this.seat = `${1 + Math.floor(Math.random() * 17)}${[`A`, `E`, `A`, `E`, `B`, `C`, `D`][Math.floor(Math.random() * 7)]}`));
    let t = document.createElement(`div`);
    return (
      (t.className = `trb-root`),
      (t.innerHTML = `<div class="trb-back"></div><div class="trb-panel"></div>`),
      document.body.appendChild(t),
      (this.root = t),
      t
        .querySelector(`.trb-back`)
        .addEventListener(`click`, () => this.cancel()),
      window.addEventListener(`keydown`, this.keyH, !0),
      this.render(),
      new Promise((e) => (this.resolve = e))
    );
  }
  amounts() {
    let e = this.data,
      t = i[e.from].currency,
      n = i[e.to].currency;
    return { left: Math.max(0, e.wallet - e.fare), fromC: t, toC: n };
  }
  render() {
    let e = this.root,
      t = this.data;
    if (!e || !t) return;
    let r = e.querySelector(`.trb-panel`),
      o = this.host.lang(),
      l = o !== `en`,
      d = i[t.to];
    i[t.from];
    let f = this.amounts(),
      p = s(t.dep.min);
    s(t.dep.min + t.route.hours * 60);
    let m = !t.promo && t.wallet < t.fare;
    t.blocked ?? (m && u.short);
    let h = [];
    h.push(
      `<div class="trb-row h"><span>${this.t(u.time)}</span><span>${this.t(u.flight)}</span><span>${this.t(u.dest)}</span><span>${this.t(u.gate)}</span><span>${this.t(u.remark)}</span></div>`,
    );
    let g = t.others.map((e) => ({
      time: e.time,
      html: `<div class="trb-row other"><span>${s(e.time)}</span><span>${S(e.flight)}<span class="al">${S(this.t(e.airline))}</span></span><span class="to">${S(this.t(e.to))}<small>${S(this.alt(e.to))}</small></span><span>${S(e.gate)}</span><span class="rm">${S(this.t(e.remark))}</span></div>`,
    }));
    (g.push({
      time: t.dep.min + (t.dep.nextDay ? 1440 : 0),
      html: `<div class="trb-row sel" data-act="go"><span>${p}</span><span>${S(t.dep.flight)}<span class="al">${S(l ? c.zh : c.en)}</span></span><span class="to">${S(this.t(d.name))}<small>${S(this.alt(d.name))} ${d.airport.code}</small></span><span>${S(t.route.gate)}</span><span class="rm go">${S(this.t(t.dep.nextDay ? u.tomorrow : u.checkin))}</span></div>`,
    }),
      g.sort((e, t) => e.time - t.time));
    for (let e of g) h.push(e.html);
    (t.destWallet === null ||
      `${S(this.t(u.there))}${S(this.t(d.name))}${a(t.destWallet, f.toC)}`,
      e.classList.toggle(`hsr`, n(t.route) === `hsr`),
      (r.innerHTML = C(t, o, f, this.host.t, this.pick ?? 0)),
      r.querySelectorAll(`[data-act]`).forEach((e) =>
        e.addEventListener(`click`, (t) => {
          (t.stopPropagation(),
            e.dataset.act === `cancel` ? this.cancel() : this.confirm());
        }),
      ),
      r.querySelectorAll(`[data-pick]`).forEach((e) =>
        e.addEventListener(`click`, (t) => {
          (t.stopPropagation(), j(this, Number(e.dataset.pick) || 0));
        }),
      ),
      this.stage === `pass` && this.renderPass());
  }
  renderPass() {
    let e = this.root,
      t = this.data;
    if (!e || !t) return;
    e.classList.add(`pass`);
    let n = e.querySelector(`.trb-pass`);
    (i[t.from],
      i[t.to],
      this.host.lang(),
      s(t.dep.min - 25),
      (n.innerHTML = O(t, this.host.lang(), this.seat, this.host.t)),
      n.querySelector(`[data-act="back"]`).addEventListener(`click`, (e) => {
        (e.stopPropagation(), this.back());
      }),
      n.querySelector(`[data-act="board"]`).addEventListener(`click`, (e) => {
        (e.stopPropagation(), this.confirm());
      }));
  }
  nav(e) {
    Math.abs(e) === 2 && A(this, e / 2);
  }
  confirm() {
    let e = this.data;
    if (e && this.root) {
      if (this.stage === `board`) {
        let t = !e.promo && e.wallet < e.fare;
        if (e.blocked || t) {
          this.host.sfx(`ui_back`);
          return;
        }
        (this.host.sfx(`ui_confirm`), (this.stage = `pass`), this.renderPass());
        return;
      }
      (this.host.sfx(`ui_confirm`),
        this.finish(
          this.pick
            ? { ok: !0, seat: this.seat, pick: this.pick }
            : { ok: !0, seat: this.seat },
        ));
    }
  }
  back() {
    if (this.stage === `pass`) {
      ((this.stage = `board`),
        this.root?.classList.remove(`pass`),
        this.host.sfx(`ui_back`));
      return;
    }
    this.cancel();
  }
  cancel() {
    if (this.root) {
      if (this.stage === `pass`) return this.back();
      (this.host.sfx(`ui_back`), this.finish({ ok: !1 }));
    }
  }
  onKey(e) {
    if (!this.root) return;
    let t = e.code,
      n = t === `Enter` || t === `NumpadEnter` || t === `KeyE` || t === `Space`;
    if (n && (e.repeat || performance.now() < this.armedAt)) {
      (e.preventDefault(), e.stopPropagation());
      return;
    }
    let r = !0;
    (t === `ArrowLeft` || t === `KeyA`
      ? this.nav(-1)
      : t === `ArrowRight` || t === `KeyD`
        ? this.nav(1)
        : t === `ArrowUp` || t === `KeyW`
          ? A(this, -1)
          : t === `ArrowDown` || t === `KeyS`
            ? A(this, 1)
            : n
              ? ((this.armedAt = performance.now() + 250), this.confirm())
              : t === `Escape` || t === `Backspace`
                ? this.back()
                : (r = !1),
      r && (e.preventDefault(), e.stopPropagation()));
  }
  finish(e) {
    let t = this.resolve;
    ((this.resolve = null), this.close(), t?.(e));
  }
  close(e = !1) {
    window.removeEventListener(`keydown`, this.keyH, !0);
    let t = this.root;
    ((this.root = null),
      t &&
        (e
          ? t.remove()
          : (t.classList.add(`out`), setTimeout(() => t.remove(), 220))));
  }
};
function A(e, t) {
  if (e.stage !== `board`) return;
  let n = e.base?.__all?.length ?? 1;
  n > 1 && j(e, ((e.pick ?? 0) + (t < 0 ? n - 1 : 1)) % n);
}
function j(e, t) {
  let n = e.base?.__all;
  n &&
    n[t] &&
    e.stage === `board` &&
    t !== (e.pick ?? 0) &&
    ((e.pick = t), (e.data = n[t]), e.host.sfx(`ui_hover`), e.render());
}
