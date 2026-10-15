// tokyo/assets/tokyo-_rNKO_Y7 34 — math
// Lines 13539-13991 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function Ao(t) {
  let r = [...Re(), ...Be()],
    i = r[0] ?? null,
    a = [],
    o = !1,
    s = 0,
    c = qe(),
    l = _e(z);
  ve(z, l);
  let u = null,
    d = null,
    f = !1,
    p = !1,
    m = 0,
    h = !0,
    g = !1,
    v = !1,
    b = (e) => {
      try {
        t.audio.play(e, { ui: !0 });
      } catch {}
    },
    x = (e) => {
      if (e !== p) {
        p = e;
        try {
          t.ui.setExternalMenu?.(e);
        } catch {}
      }
    },
    C = (e) => {
      try {
        t.player.setControlEnabled(e);
      } catch {}
    },
    w = () => {
      try {
        return t.police.level > 0;
      } catch {
        return !1;
      }
    };
  function T() {
    return ee(Eo(i));
  }
  function ee(e) {
    {
      let n = i,
        r = ve(z, e);
      if (!r) return null;
      let a = De(),
        o = t.env?.hour ?? 12,
        s = a.flights === 0,
        c = w()
          ? (n?.wanted ?? Le)
          : t.missions?.active?.status === `running`
            ? M(r) === `hsr`
              ? To
              : wo
            : null,
        l = _(t.player?.character);
      return {
        from: z,
        to: e,
        route: r,
        dep: j(r, o, 1)[0],
        hour: o,
        counter: n?.name ?? He.name,
        wallet: Math.max(0, Math.round(t.state.money)),
        destWallet: Do(s ? 0 : r.fare, e),
        firstVisit: !y(N[e].saveKey),
        fare: s ? 0 : r.fare,
        promo: s,
        blocked: c,
        passenger: { name: S(l), id: l },
        others: n?.others ? n.others(o) : ze(o),
      };
    }
  }
  async function E() {
    if (f || !ve(`tokyo`, Eo(i))) return;
    let n = T();
    if (!n) return;
    ((f = !0), C(!1), x(!0));
    try {
      t.input.unlockPointer();
    } catch {}
    let r = () => {
      (x(!1), C(!0), t.input.isTouch || t.input.lockPointer(), (f = !1));
    };
    if (!u)
      try {
        let { DepartureBoard: n } = await e(
          async () => {
            let { DepartureBoard: e } = await import(`./board-INUeDSQr.js`);
            return { DepartureBoard: e };
          },
          __vite__mapDeps([30, 5, 4, 6, 3, 7, 8]),
        );
        u = new n({
          lang: () => t.state.lang,
          t: (e) => t.t(e),
          device: () => t.input.device,
          sfx: b,
        });
      } catch (e) {
        (console.warn(`[travel] the departures board could not load`, e), r());
        return;
      }
    (b(`ui_confirm`), (m = 0.3), (h = !0), n.to, n.promo, n.blocked);
    let a = await u.open(n);
    if (!a.ok) {
      r();
      return;
    }
    await te(a.pick ? (n.alts?.[a.pick - 1] ?? n) : n, a);
  }
  async function te(n, r) {
    if (D(y(N.tokyo.saveKey))) {
      (t.ui.notify(
        {
          zh: `請更新遊戲。較新的存檔已安全保留。`,
          en: `Please update the game. Your newer save is safe.`,
        },
        { kind: `bad` },
      ),
        x(!1),
        C(!0),
        (f = !1));
      return;
    }
    let a = Date.now(),
      o = t.state,
      s = {
        v: 2,
        id: Ee(a),
        from: z,
        to: n.to,
        flight: n.dep.flight,
        gate: n.route.gate,
        seat: r.seat,
        depMin: n.dep.min,
        nextDay: n.dep.nextDay,
        hours: n.route.hours,
        fare: n.fare,
        cash: 0,
        credit: 0,
        promo: n.promo || void 0,
        issued: a,
        lang: o.lang === `en` ? `en` : `zh`,
        passenger: n.passenger.id,
      };
    M(n.route) === `hsr` && (s.mode = `hsr`);
    let c = t.player.position;
    ((o.data.pos = {
      x: Math.round(c.x * 10) / 10,
      z: Math.round(c.z * 10) / 10,
      heading: Math.round((t.player.heading ?? 0) * 100) / 100,
    }),
      o.addMoney(-s.fare, `travel:depart`));
    let l = o.data,
      u = je(l);
    l.travel = { ...u, out: s.id, paid: [...(u.paid ?? []), s.id].slice(-20) };
    let p = o.saveNow(),
      m = De();
    if (((m.ticket = s), !p || !ke(m))) {
      (o.addMoney(s.fare, `travel:refund`),
        (l.travel = { ...u }),
        o.saveNow(),
        t.ui.notify(
          s.mode === `hsr`
            ? {
                zh: `無法儲存車票（瀏覽器儲存空間不足），已退款。`,
                en: `Couldn't save the ticket (browser storage is full) — refunded.`,
              }
            : {
                zh: `無法儲存機票（瀏覽器儲存空間不足），已退款。`,
                en: `Couldn't save the ticket (browser storage is full) — refunded.`,
              },
          { kind: `bad` },
        ),
        x(!1),
        C(!0),
        (f = !1));
      return;
    }
    {
      let e = M(s);
      (console.info(
        `[travel] ${s.flight} ${F(z, e).code} → ${F(s.to, e).code}: paid ${s.fare} ${N[z].currency}`,
      ),
        `${F(z, e).code}${F(s.to, e).code}`,
        s.promo);
    }
    try {
      t.ui.setHudVisible(!1);
    } catch {}
    try {
      let { FlightScene: n } = await e(
        async () => {
          let { FlightScene: e } = await import(`./scene-G8jS_Se3.js`);
          return { FlightScene: e };
        },
        __vite__mapDeps([31, 3, 4, 5, 6, 7, 8]),
      );
      d ??= new n(t);
      let r = v ? null : await (i?.film ?? Ve)(t);
      if (r) {
        let e = s.mode === `hsr`;
        await d.play(r, {
          flight: s.flight,
          from: N[z].name,
          to: N[s.to].name,
          sub: e ? `高鐵 HIGH SPEED RAIL` : `RUSH AIR`,
          glyph: e ? `▶` : `✈`,
        });
      } else await t.ui.fade(1, 0.6);
    } catch (e) {
      console.warn(`[travel] departure film failed`, e);
      try {
        await t.ui.fade(1, 0.3);
      } catch {}
    }
    (o.saveNow(), await ue(), me(), location.replace(ko(location.href, s.to)));
  }
  function ne() {
    if (g) return;
    g = !0;
    let e = Ke();
    if (e.cancelled) {
      let r = e.cancelled;
      if (r.ticket.mode === `hsr`) {
        r.refund > 0 &&
          t.ui.notify(
            {
              zh: n.on
                ? n.t(
                    `${r.ticket.flight} 車票已取消，退回 ${P(r.refund, N[z].currency)}`,
                    `${r.ticket.flight} のきっぷは取り消されました。${P(r.refund, N[z].currency)} を払い戻し`,
                  )
                : `${r.ticket.flight} 車票已取消，退回 ${P(r.refund, N[z].currency)}`,
              en: `${r.ticket.flight} cancelled — ${P(r.refund, N[z].currency)} refunded`,
            },
            { kind: `info`, duration: 6 },
          );
        return;
      }
      r.refund > 0 &&
        t.ui.notify(
          {
            zh: n.on
              ? n.t(
                  `${r.ticket.flight} 航班已取消，退回 ${P(r.refund, N[z].currency)}`,
                  `${r.ticket.flight} 便は欠航となりました。${P(r.refund, N[z].currency)} を払い戻し`,
                )
              : `${r.ticket.flight} 航班已取消，退回 ${P(r.refund, N[z].currency)}`,
            en: `${r.ticket.flight} cancelled — ${P(r.refund, N[z].currency)} refunded`,
          },
          { kind: `info`, duration: 6 },
        );
      return;
    }
    let r = e.arrival;
    if (!r) return;
    let i = r.ticket;
    (`${F(i.from, M(i)).code}${F(z, M(i)).code}`,
      M(i),
      r.first,
      r.record.flights);
    let a = N[z],
      o = N[i.from];
    (r.first ||
      setTimeout(() => {
        try {
          {
            let e = F(i.from, M(i)).code,
              r = F(z, M(i)).code;
            t.ui.bigMessage(
              {
                zh: n.on
                  ? n.t(`歡迎來到${a.name.zh}`, `${n.jz(a.name.zh)}へようこそ`)
                  : `歡迎來到${a.name.zh}`,
                en: `Welcome to ${a.name.en}`,
              },
              {
                zh: `${i.flight} · ${o.name.zh} ${e} → ${a.name.zh} ${r}`,
                en: `${i.flight} · ${o.name.en} ${e} → ${a.name.en} ${r}`,
              },
              { color: `#ffd23a`, duration: 4.2 },
            );
          }
        } catch {}
      }, 900),
      i.credit > 0 &&
        setTimeout(() => {
          t.ui.notify(
            {
              zh: n.on
                ? n.t(
                    `已兌換 ${P(i.cash, N[i.from].currency)} → ${P(i.credit, a.currency)}`,
                    `両替済み ${P(i.cash, N[i.from].currency)} → ${P(i.credit, a.currency)}`,
                  )
                : `已兌換 ${P(i.cash, N[i.from].currency)} → ${P(i.credit, a.currency)}`,
              en: `Exchanged ${P(i.cash, N[i.from].currency)} → ${P(i.credit, a.currency)}`,
            },
            { kind: `good`, duration: 6 },
          );
        }, 5400));
  }
  function re() {
    let e = De();
    e.at !== `tokyo` && ((e.at = z), ke(e));
  }
  let O = He.prompt;
  return {
    name: `travel`,
    get busy() {
      return f;
    },
    open() {
      E();
    },
    async init() {
      try {
        await Ge(t);
      } catch (e) {
        console.warn(`[travel] check-in entrance not built`, e);
      }
    },
    start() {
      try {
        Ue(t);
      } catch {}
      for (let e of r)
        for (let n of e.marks)
          try {
            let e = t.missions?.marker?.({
              x: n.x,
              z: n.z,
              style: `goto`,
              color: 4033535,
              radius: 1.5,
              intensity: 0.9,
            });
            if (!e) continue;
            (e.setVisible(!1), a.push(e));
          } catch {}
      (c && De().flights > 0 && (c = null),
        t.events.on(`player:spawned`, () => {
          (re(), ne());
        }),
        t.events.on(`travel:open`, (e) => {
          if (f || d?.running) return;
          let t = e?.gate ? r.find((t) => t.id === e.gate) : null;
          (t && (i = t), E());
        }),
        t.params.has(`debug`) &&
          (window.__travel = {
            open: () => void E(),
            record: () => De(),
            boot: Ke(),
            fly: async (e = {}) => {
              e.to && (i = r.find((t) => Eo(t) === e.to) ?? i);
              let t = T(),
                n =
                  t && e.to && t.to !== e.to
                    ? (t.alts?.find((t) => t.to === e.to) ?? t)
                    : t;
              return !n || f || n.blocked || (!n.promo && n.wallet < n.fare)
                ? !1
                : ((f = !0),
                  C(!1),
                  (v = !!e.skip),
                  await te(n, { ok: !0, seat: `23A` }),
                  !0);
            },
          }));
    },
    update(e) {
      if (d?.running) {
        d.update(e);
        return;
      }
      if (u?.isOpen) {
        let n = t.input;
        m -= e;
        let r = n.axis(`moveX`),
          i = n.axis(`moveY`);
        (Math.abs(r) < 0.4 && Math.abs(i) < 0.4
          ? ((h = !1), (m = Math.min(m, 0)))
          : m <= 0 &&
            !h &&
            (Math.abs(i) > Math.abs(r)
              ? u.nav(-2 * Math.sign(i))
              : u.nav(Math.sign(r)),
            (m = 0.24)),
          n.device === `gamepad` &&
            (n.pressed(`jump`)
              ? u.confirm()
              : (n.pressed(`sprint`) || n.pressed(`pause`)) && u.back()));
        return;
      }
      if (!r.length) return;
      let n = t.player.position;
      if (((s -= e), s <= 0)) {
        s = 0.5;
        let e = !1;
        for (let t of r) {
          let r = Math.max(t.x0 - n.x, 0, n.x - t.x1),
            i = Math.max(t.z0 - n.z, 0, n.z - t.z1);
          r * r + i * i < 67600 && (e = !0);
        }
        let i = e && !f;
        if (i !== o) {
          o = i;
          for (let e of a) e.setVisible(i);
        }
        if (
          c &&
          !f &&
          n.x >= c.x0 &&
          n.x <= c.x1 &&
          n.z >= c.z0 &&
          n.z <= c.z1
        ) {
          try {
            t.ui.notify(c.msg, { kind: `info`, duration: 7 });
          } catch {}
          c = null;
        }
      }
      if (f) return;
      let l = `foot`;
      try {
        l = t.player.mode;
      } catch {}
      if (l !== `foot` || Math.abs(n.y - 0.2) > 2.5) return;
      let p = null;
      for (let e of r)
        if (n.x >= e.x0 && n.x <= e.x1 && n.z >= e.z0 && n.z <= e.z1) {
          p = e;
          break;
        }
      if (p) {
        i = p;
        try {
          t.ui.prompt(p.prompt ?? O);
        } catch {}
        t.input.pressed(`interact`) && E();
      }
    },
  };
}
