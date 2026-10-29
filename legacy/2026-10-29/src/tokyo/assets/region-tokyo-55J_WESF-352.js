// tokyo/assets/region-tokyo-55J_WESF 352 — host
// Lines 127519-128206 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var yX = (e) =>
    e.replace(
      /[&<>"]/g,
      (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e],
    ),
  mje = class {
    host;
    net;
    root = null;
    stEls = new Map();
    routeG = null;
    svg = null;
    info;
    here = ``;
    hereNode = ``;
    op = `jr`;
    selected = ``;
    nodes = [];
    byKey = new Map();
    P = new Map();
    fresh = new Set();
    keyHandler = (e) => this.onKey(e);
    get isOpen() {
      return !!this.root;
    }
    constructor(e, t, n) {
      ((this.host = e), (this.net = t), gX(n));
    }
    open(e) {
      if (this.root) return;
      let t = this.net.opOf(e);
      if (!t) return;
      ((this.op = t), (this.here = e), this.fresh.clear());
      let n = (e, t) => this.host.t({ zh: e, en: t }),
        r = _X(`div`, `tkp-root`);
      (r.setAttribute(`role`, `dialog`),
        r.style.setProperty(`--acc`, t === `jr` ? `#80C241` : `#00A7DB`),
        r.style.setProperty(`--acc2`, t === `jr` ? `#4f9a20` : `#0a6fa8`),
        r.appendChild(_X(`div`, `tkp-bg`)));
      let i = _X(`div`, `tkp-panel`);
      r.appendChild(i);
      let a = _X(`div`, `tkp-head ${t}`),
        o = this.host.name(e);
      a.innerHTML = `<div class="tkp-mark">${t === `jr` ? `JY` : `M`}</div><div><div class="tkp-title">${t === `jr` ? n(`JR 山手線 路線圖`, `JR Yamanote Line`) : n(`東京地下鐵 路線圖`, `Tokyo Metro Map`)}</div><div class="tkp-sub">${t === `jr` ? `JR East · Yamanote Line · 山手線` : `Tokyo Metro · Ginza · Hibiya · Marunouchi`}</div></div>
<div class="tkp-here">${n(`您在`, `You are at`)} <b>${yX(this.host.t(o))}</b><small>${yX(o.code)}</small></div>`;
      let s = _X(`div`, `tkp-card`);
      a.appendChild(s);
      let c = _X(`button`, `tkp-x`, `✕`);
      ((c.onclick = () => {
        (this.host.sfx(`ui_back`), this.host.close());
      }),
        a.appendChild(c),
        i.appendChild(a));
      let l = _X(`div`, `tkp-body`);
      i.appendChild(l);
      let u = _X(`div`, `tkp-map`);
      (l.appendChild(u), this.buildSvg(u));
      let d = _X(`aside`, `tkp-info`);
      ((d.innerHTML = `<div class="tkp-lab">${n(`目的地`, `DESTINATION`)}</div><div><div class="tkp-dn"></div><div class="tkp-de"></div></div><div class="tkp-codes"></div><div class="tkp-legs"></div>
<div class="tkp-stats"><div class="tkp-stat"><span>${n(`票價`, `Fare`)}</span><b class="f"></b></div><div class="tkp-stat"><span>${n(`時間`, `Time`)}</span><b class="t"></b></div><div class="tkp-stat"><span>${n(`轉乘`, `Transfers`)}</span><b class="x"></b></div></div>
<div class="tkp-warn"></div><button class="tkp-go"></button>`),
        l.appendChild(d));
      let f = _X(`div`, `tkp-foot`);
      ((f.innerHTML =
        this.host.device() === `gamepad`
          ? `<span>${n(`左搖桿 選擇`, `L-Stick select`)}</span><span><kbd>${Wn(0)}</kbd> ${n(`搭乘`, `Ride`)}</span><span><kbd>${Wn(1)}</kbd> ${n(`離開`, `Exit`)}</span>`
          : `<span><kbd>←</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>→</kbd> ${n(`選擇車站`, `Select station`)}</span><span><kbd>E</kbd>/<kbd>Enter</kbd> ${n(`搭乘`, `Ride`)}</span><span><kbd>Esc</kbd> ${n(`離開`, `Exit`)}</span>`),
        i.appendChild(f));
      let p = (e) => d.querySelector(e);
      ((this.info = {
        dn: p(`.tkp-dn`),
        de: p(`.tkp-de`),
        codes: p(`.tkp-codes`),
        legs: p(`.tkp-legs`),
        fare: p(`.f`),
        time: p(`.t`),
        xfer: p(`.x`),
        go: p(`.tkp-go`),
        warn: p(`.tkp-warn`),
        card: s,
      }),
        (this.info.go.onclick = () => this.confirm()),
        r.querySelector(`.tkp-bg`).addEventListener(`click`, () => {
          (this.host.sfx(`ui_back`), this.host.close());
        }),
        document.body.appendChild(r),
        (this.root = r),
        window.addEventListener(`keydown`, this.keyHandler, !0));
      let m = this.nodes.filter((e) => e.ids.length && e.key !== this.hereNode),
        h =
          t === `jr`
            ? e === `jy-ueno`
              ? `jy-tokyo`
              : `jy-ueno`
            : m.sort((e, t) => this.d2(t.key) - this.d2(e.key))[0]?.key;
      h && this.select(h, !1);
    }
    d2(e) {
      let t = this.P.get(this.hereNode),
        n = this.P.get(e);
      return t && n ? (t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2 : 0;
    }
    close() {
      if (!this.root) return;
      let e = this.root;
      ((this.root = null),
        window.removeEventListener(`keydown`, this.keyHandler, !0),
        e.classList.add(`out`),
        setTimeout(() => e.remove(), 220),
        this.stEls.clear());
    }
    target(e) {
      let t = this.byKey.get(e),
        n = { id: t?.ids[0] ?? ``, trip: null };
      for (let e of t?.ids ?? []) {
        let t = this.net.plan(this.here, e);
        t &&
          (!n.trip ||
            t.minutes < n.trip.minutes ||
            (t.minutes === n.trip.minutes && t.fare < n.trip.fare)) &&
          (n = { id: e, trip: t });
      }
      return n;
    }
    buildSvg(e) {
      let t = this.net.stationsOf(this.op);
      ((this.nodes =
        this.op === `jr`
          ? uje((e) => t.includes(e))
          : fje(t, (e) => this.host.name(e).zh)),
        (this.byKey = new Map(this.nodes.map((e) => [e.key, e]))),
        (this.hereNode =
          this.nodes.find((e) => e.ids.includes(this.here))?.key ?? ``));
      let r = 1 / 0,
        i = -1 / 0,
        a = 1 / 0,
        o = -1 / 0;
      for (let e of this.nodes)
        ((r = Math.min(r, e.x)),
          (i = Math.max(i, e.x)),
          (a = Math.min(a, e.y)),
          (o = Math.max(o, e.y)));
      let s = 1e3,
        c = Math.min(700 / Math.max(1, i - r), 580 / Math.max(1, o - a)),
        l = (s - (i - r) * c) / 2,
        u = (700 - (o - a) * c) / 2;
      this.P.clear();
      for (let e of this.nodes)
        this.P.set(e.key, [l + (e.x - r) * c, u + (e.y - a) * c]);
      let d = vX(`svg`, {
        viewBox: `0 0 ${s} 700`,
        preserveAspectRatio: `xMidYMid meet`,
      });
      (e.appendChild(d), (this.svg = d));
      let f = vX(`g`, {}, d),
        p = (e) => this.P.get(e);
      if (this.op === `jr`) {
        let e = this.nodes.map((e) => p(e.key));
        vX(
          `path`,
          {
            d:
              e.map(([e, t], n) => `${n ? `L` : `M`} ${e} ${t}`).join(` `) +
              ` Z`,
            class: `tkp-line`,
            stroke: `#80C241`,
            "stroke-width": 11,
            fill: `none`,
            "stroke-linejoin": `round`,
          },
          f,
        );
        let t = vX(
          `text`,
          {
            x: e.reduce((e, t) => e + t[0], 0) / Math.max(1, e.length),
            y: e.reduce((e, t) => e + t[1], 0) / Math.max(1, e.length),
            "text-anchor": `middle`,
            "font-size": 15,
            fill: `#5d7f3e`,
            "font-weight": 700,
            opacity: 0.85,
          },
          f,
        );
        t.textContent = this.host.t({
          zh: `山手線 環狀運行 · 灰色車站列車通過不停`,
          en: `Yamanote loop · trains pass the grey stations`,
          ja: `山手線 環状運転 · 灰色の駅は通過`,
        });
      } else
        for (let e of pX)
          e.op === `metro` &&
            vX(
              `path`,
              {
                d: e.stops
                  .map((e) => this.nodes.find((t) => t.ids.includes(e)))
                  .filter((e) => !!e)
                  .map((e) => p(e.key))
                  .map(([e, t], n) => `${n ? `L` : `M`} ${e} ${t}`)
                  .join(` `),
                class: `tkp-line`,
                stroke: e.color,
                "stroke-width": 10,
                fill: `none`,
                "stroke-linecap": `round`,
                "stroke-linejoin": `round`,
              },
              f,
            );
      this.routeG = vX(`g`, {}, d);
      let m = vX(`g`, {}, d),
        h = this.host.lang();
      for (let e of this.nodes) {
        let [t, r] = p(e.key),
          i = (e, t) =>
            e === `l`
              ? [-t, 5, `end`]
              : e === `t`
                ? [0, -t - 6, `middle`]
                : e === `b`
                  ? [0, t + 16, `middle`]
                  : [t, 5, `start`];
        if (e.ghost) {
          let a = vX(`g`, {}, m);
          vX(
            `circle`,
            {
              cx: t,
              cy: r,
              r: 5,
              fill: `#fff`,
              stroke: `#9fb98a`,
              "stroke-width": 2.5,
            },
            a,
          );
          let [o, s, c] = i(e.side, 10),
            l = vX(
              `text`,
              {
                x: t + o,
                y: r + s - 2,
                "text-anchor": c,
                "font-size": 11,
                fill: `#9aa29a`,
                "font-weight": 700,
              },
              a,
            );
          l.textContent =
            h === `zh`
              ? e.ghost.zh
              : h === `ja`
                ? (n(e.ghost.zh) ?? e.ghost.zh)
                : e.ghost.en;
          continue;
        }
        let a = e.ids.flatMap((e) => this.net.linesAt(e)),
          o = vX(
            `g`,
            { class: `tkp-st` + (e.key === this.hereNode ? ` here` : ``) },
            m,
          );
        (vX(
          `circle`,
          {
            class: `sel`,
            cx: t,
            cy: r,
            r: 18,
            fill: `none`,
            stroke: `#ffb400`,
            "stroke-width": 4,
          },
          o,
        ),
          e.key === this.hereNode &&
            vX(
              `circle`,
              {
                class: `ring`,
                cx: t,
                cy: r,
                r: 13,
                fill: `none`,
                stroke: `#e3002c`,
                "stroke-width": 3,
              },
              o,
            ),
          e.ids.length > 1
            ? vX(
                `rect`,
                {
                  x: t - 12,
                  y: r - 12,
                  width: 24,
                  height: 24,
                  rx: 12,
                  fill: `#fff`,
                  stroke: `#1d1f22`,
                  "stroke-width": 3.4,
                },
                o,
              )
            : vX(
                `circle`,
                {
                  cx: t,
                  cy: r,
                  r: 9,
                  fill: `#fff`,
                  stroke: a[0]?.color ?? `#444`,
                  "stroke-width": 4.5,
                },
                o,
              ),
          e.key === this.hereNode &&
            vX(`circle`, { cx: t, cy: r, r: 4.5, fill: `#e3002c` }, o));
        let [s, c, l] = i(e.side, 18),
          u = this.host.name(e.ids[0]),
          d = vX(
            `text`,
            {
              x: t + s,
              y: r + c - 3,
              "text-anchor": l,
              "font-size": 18,
              "font-weight": 900,
              fill: `#15171a`,
              "paint-order": `stroke`,
              stroke: `#fbfbf8`,
              "stroke-width": 4,
            },
            o,
          );
        d.textContent = this.host.t(u);
        let f = vX(
          `text`,
          {
            x: t + s,
            y: r + c + 11,
            "text-anchor": l,
            "font-size": 10,
            "font-weight": 700,
            fill: `#666`,
            "paint-order": `stroke`,
            stroke: `#fbfbf8`,
            "stroke-width": 3,
            "font-family": `Helvetica, Arial, sans-serif`,
          },
          o,
        );
        ((f.textContent = `${e.ids.map((e) => this.host.name(e).code).join(` · `)}${h === `en` ? `` : ` · ${u.en}`}`),
          vX(`circle`, { class: `hit`, cx: t, cy: r, r: 24 }, o),
          o.addEventListener(`pointerenter`, () => {
            this.host.device() !== `touch` &&
              e.key !== this.hereNode &&
              e.key !== this.selected &&
              this.select(e.key, !0);
          }),
          o.addEventListener(`click`, (t) => {
            (t.stopPropagation(),
              e.key !== this.hereNode &&
                (this.selected === e.key && this.host.device() !== `touch`
                  ? this.confirm()
                  : this.select(e.key, !0)));
          }),
          this.stEls.set(e.key, o));
      }
    }
    select(e, t) {
      let n = this.byKey.get(e);
      if (!n || !n.ids.length || e === this.hereNode) return;
      (t && e !== this.selected && this.host.sfx(`ui_hover`),
        (this.selected = e));
      for (let [t, n] of this.stEls) n.classList.toggle(`on`, t === e);
      let i = (e, t) => this.host.t({ zh: e, en: t }),
        { trip: a } = this.target(e),
        o = this.host.name(n.ids[0]),
        s = this.host.lang() !== `en`;
      ((this.info.dn.textContent = this.host.t(o)),
        (this.info.de.textContent = s ? o.en : ``),
        (this.info.codes.innerHTML = n.ids
          .map(
            (e) =>
              `<span class="tkp-code" style="--c:${this.net.linesAt(e)[0]?.color ?? `#666`}">${yX(this.host.name(e).code)}</span>`,
          )
          .join(``)),
        (this.info.card.innerHTML = `<i>${i(`IC卡`, `IC CARD`)}</i> ${we(this.host.money(), mX)}`),
        a &&
          ((this.info.fare.textContent = we(a.fare, mX)),
          (this.info.time.textContent = s
            ? r.on
              ? r.t(`${a.minutes} 分`, `${a.minutes} 分`)
              : `${a.minutes} 分`
            : `${a.minutes} min`),
          (this.info.xfer.textContent = String(a.transfers)),
          (this.info.legs.innerHTML = a.legs
            .map((e, t) => {
              let n = this.host.name(e.stops[0]),
                r = this.host.name(e.stops[e.stops.length - 1]),
                a =
                  t > 0
                    ? `<div class="tkp-leg" style="color:#777;font-size:12px">⇄ ${this.host.t({ zh: `在 ${n.zh} 轉乘`, en: `Change at ${n.en}`, ja: `${n.ja ?? n.zh}で乗り換え` })}</div>`
                    : ``,
                o = e.stops.length - 1;
              return `${a}<div class="tkp-leg" style="--c:${e.line.color}"><div class="bar"></div><div><b>${yX(this.host.t(e.line.name))}</b><small>${yX(this.host.t(n))} → ${yX(this.host.t(r))} · ${o} ${i(`站`, o === 1 ? `stop` : `stops`)}</small></div></div>`;
            })
            .join(``)),
          this.drawRoute(a)),
        this.refresh(a));
    }
    refresh(e) {
      let t = (e, t) => this.host.t({ zh: e, en: t }),
        n =
          this.host.device() === `gamepad`
            ? Wn(0)
            : this.host.device() === `touch`
              ? ``
              : `E`;
      this.info.go.innerHTML = `${this.op === `jr` ? t(`上車`, `BOARD`) : t(`搭乘`, `RIDE`)} ${n ? `<kbd>${n}</kbd>` : ``}`;
      let r = ``;
      (this.host.wanted() > 0
        ? (r = t(`通緝中，無法進站！`, `You're wanted — can't enter!`))
        : e &&
          this.host.money() < e.fare &&
          (r = t(`IC卡餘額不足`, `Not enough money`)),
        (this.info.warn.textContent = r),
        (this.info.go.disabled = !!r || !e));
    }
    drawRoute(e) {
      let t = this.routeG;
      for (; t.firstChild;) t.removeChild(t.firstChild);
      this.svg.classList.add(`tkp-dim`);
      let n = (e) => {
        let t = this.nodes.find((t) => t.ids.includes(e));
        return t ? this.P.get(t.key) : [0, 0];
      };
      for (let r of e.legs) {
        let e = r.stops
          .map((e, t) => `${t ? `L` : `M`} ${n(e)[0]} ${n(e)[1]}`)
          .join(` `);
        (vX(
          `path`,
          {
            d: e,
            class: `tkp-route`,
            stroke: r.line.color,
            "stroke-width": 15,
          },
          t,
        ),
          vX(
            `path`,
            {
              d: e,
              class: `tkp-route tkp-flow`,
              stroke: `#fff`,
              "stroke-width": 4,
            },
            t,
          ));
      }
    }
    confirm() {
      if (!this.selected) return;
      let { id: e } = this.target(this.selected),
        t = this.host.ride(e);
      t &&
        (this.host.sfx(`ui_back`),
        (this.info.warn.textContent = this.host.t(t)));
    }
    cancel() {
      (this.host.sfx(`ui_back`), this.host.close());
    }
    nav(e, t) {
      let n = this.P.get(this.selected) ?? this.P.get(this.hereNode);
      if (!n) return;
      let r = ``,
        i = 1 / 0;
      for (let a of this.nodes) {
        if (!a.ids.length || a.key === this.hereNode || a.key === this.selected)
          continue;
        let o = this.P.get(a.key),
          s = o[0] - n[0],
          c = o[1] - n[1],
          l = s * e + c * t;
        if (l <= 1) continue;
        let u = l + Math.abs(s * t - c * e) * 2.2;
        u < i && ((i = u), (r = a.key));
      }
      r && this.select(r, !0);
    }
    cycle(e) {
      let t = this.nodes
          .filter((e) => e.ids.length && e.key !== this.hereNode)
          .map((e) => e.key),
        n = t.indexOf(this.selected);
      this.select(t[(n + e + t.length) % t.length], !0);
    }
    onKey(e) {
      if (!this.root) return;
      let t = e.code;
      if (
        [
          `ArrowUp`,
          `ArrowDown`,
          `ArrowLeft`,
          `ArrowRight`,
          `KeyW`,
          `KeyA`,
          `KeyS`,
          `KeyD`,
          `Enter`,
          `NumpadEnter`,
          `Space`,
          `KeyE`,
          `Escape`,
          `Backspace`,
          `KeyP`,
          `Tab`,
          `KeyM`,
          `KeyT`,
          `KeyF`,
        ].includes(t)
      ) {
        if ((e.preventDefault(), e.stopImmediatePropagation(), !e.repeat))
          this.fresh.add(t);
        else if (!this.fresh.has(t)) return;
        (!e.repeat ||
          t.startsWith(`Arrow`) ||
          [`KeyW`, `KeyA`, `KeyS`, `KeyD`].includes(t)) &&
          (t === `ArrowUp` || t === `KeyW`
            ? this.nav(0, -1)
            : t === `ArrowDown` || t === `KeyS`
              ? this.nav(0, 1)
              : t === `ArrowLeft` || t === `KeyA`
                ? this.nav(-1, 0)
                : t === `ArrowRight` || t === `KeyD`
                  ? this.nav(1, 0)
                  : t === `Tab`
                    ? this.cycle(e.shiftKey ? -1 : 1)
                    : t === `Enter` ||
                        t === `NumpadEnter` ||
                        t === `Space` ||
                        t === `KeyE`
                      ? this.confirm()
                      : (t === `Escape` || t === `Backspace` || t === `KeyP`) &&
                        this.cancel());
      }
    }
  },
  hje = class {
    root = null;
    hint = null;
    els;
    key = ``;
    constructor(e) {
      gX(e);
    }
    open(e, t, n, r, i, a, o) {
      this.close(!0);
      let s = _X(`div`, `tkl`);
      (s.style.setProperty(`--c`, e),
        (s.innerHTML = `<div class="tkl-top"><div class="tkl-badge"><div class="b"><i>${yX(t)}</i><u class="num"></u></div><small>${yX(a)}</small></div>
<div class="tkl-main"><div class="tkl-k"></div><div class="tkl-n"></div><div class="tkl-r"></div></div><div class="tkl-door"><b>▶</b><span>${yX(i)}</span><small style="font:600 10px Helvetica,Arial;color:#aaa">Doors on the right side will open</small></div></div>
<div class="tkl-strip">${n.map((e) => `<div class="tkl-s"><i></i>${yX(e.ja)}<small>${yX(e.code)}</small></div>`).join(``)}</div>`),
        document.body.appendChild(s),
        (this.root = s));
      let c = (e) => s.querySelector(e);
      this.els = {
        k: c(`.tkl-k`),
        n: c(`.tkl-n`),
        r: c(`.tkl-r`),
        num: c(`.num`),
        door: c(`.tkl-door`),
        strip: c(`.tkl-strip`),
      };
      let l = _X(`div`, `tkl-hint`);
      ((l.innerHTML = r),
        r && document.body.appendChild(l),
        (this.hint = l),
        o &&
          ((l.style.cursor = `pointer`),
          l.addEventListener(`pointerdown`, (e) => {
            (e.preventDefault(), o());
          }),
          s.addEventListener(`pointerdown`, () => o())),
        (this.key = ``));
    }
    set(e, t, n, r) {
      if (!this.root) return;
      let i = `${e}:${t.code}:${n}`;
      if (i === this.key) return;
      this.key = i;
      let a =
        e === `next`
          ? `Next`
          : e === `soon`
            ? `Arriving at`
            : `Now stopping at`;
      ((this.els.k.innerHTML = `${yX(e === `next` ? r.next : e === `soon` ? r.soon : r.stop)}<em>${a}</em>`),
        (this.els.n.textContent = t.ja),
        (this.els.r.textContent = t.en),
        (this.els.num.textContent = t.code.replace(/^[A-Z]+/, ``)),
        (this.els.door.style.visibility = e === `next` ? `hidden` : `visible`));
      let o = this.els.strip.children;
      for (let t = 0; t < o.length; t++)
        (o[t].classList.toggle(`past`, t < n - (e === `stop` ? 0 : 1)),
          o[t].classList.toggle(`now`, t === n));
    }
    compact(e) {
      this.root?.classList.toggle(`tkl-cab`, e);
    }
    close(e = !1) {
      let t = this.root,
        n = this.hint;
      ((this.root = null),
        (this.hint = null),
        n && n.remove(),
        t &&
          (e
            ? t.remove()
            : (t.classList.add(`out`), setTimeout(() => t.remove(), 300))));
    }
  },
  gje = class {
    root = null;
    constructor(e) {
      gX(e);
    }
    async play(e, t, n, r, i) {
      let a = _X(`div`, `tkm`),
        o = e.legs[0];
      a.style.setProperty(`--c`, o.line.color);
      let s = [];
      for (let t of e.legs)
        for (let e of t.stops) s[s.length - 1] !== e && s.push(e);
      let c = o.line.id;
      ((a.innerHTML = `<div class="tkm-card"><div class="tkm-top"><div class="tkm-sym"><i>${yX(c)}</i></div><div style="flex:1"><div class="tkm-k">${yX(i.next)}<span style="font:700 12px Helvetica;color:#ccc;margin-left:8px">Next</span></div><div class="tkm-n"></div><div class="tkm-r"></div></div></div>
<div class="tkm-strip">${s.map((n) => `<div class="tkl-s" style="--c:${(pX.find((t) => t.stops.includes(n) && e.legs.some((e) => e.line === t)) ?? o.line).color}"><i></i>${yX(t(n).ja)}<small>${yX(t(n).code)}</small></div>`).join(``)}</div>
<div class="tkm-ui">${yX(r)}</div></div>`),
        document.body.appendChild(a),
        (this.root = a));
      let l = a.querySelector(`.tkm-n`),
        u = a.querySelector(`.tkm-r`),
        d = a.querySelector(`.tkm-strip`).children,
        f = Math.max(1, s.length - 1);
      for (let e = 1; e <= f; e++) {
        let r = t(s[e]);
        ((l.textContent = r.ja), (u.textContent = `${r.en} · ${r.code}`));
        for (let t = 0; t < d.length; t++)
          (d[t].classList.toggle(`past`, t < e - 1),
            d[t].classList.toggle(`now`, t === e));
        await new Promise((e) => setTimeout(e, (n * 1e3) / f));
      }
    }
    close() {
      let e = this.root;
      ((this.root = null),
        e && (e.classList.add(`out`), setTimeout(() => e.remove(), 350)));
    }
  },
  bX = 1 / 3.6,
  _je = 9.81,
  xX = {
    P: 5,
    B: 7,
    a0: 3 * bX,
    vBase: 40 * bX,
    powerFrac: [0.3, 0.5, 0.7, 0.85, 1],
    bMax: 4.2 * bX,
    bEB: 4.5 * bX,
    tauP: 0.6,
    tauPoff: 0.7,
    tauB: 0.5,
    tauBoff: 0.35,
    tauEB: 0.25,
  },
  SX = xX.bMax / xX.B,
  CX = 75 * bX,
  wX = 2.7 * bX,
  vje = 1 * bX,
  yje = 3 * bX,
  bje = 6.4;
