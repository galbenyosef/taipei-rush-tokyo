// tokyo/assets/shared-BaQwRjes 08 — shared
// Lines 3453-3798 of readable/tokyo/assets/shared-BaQwRjes.pretty.js (statement-aligned).
function gt(e, t, n, r) {
  let i = q({
    ...e,
    updatedAt: r,
    resolved: [{ ticket: t, status: n, at: r }, ...(e.resolved ?? [])],
  });
  return (i.ticket?.id === t.id && delete i.ticket, i);
}
function _t(e, t) {
  let n = q(e),
    r = q(t),
    i = q({
      ...((r.updatedAt ?? r.last?.at ?? r.ticket?.issued ?? 0) >
      (n.updatedAt ?? n.last?.at ?? n.ticket?.issued ?? 0)
        ? r
        : n),
      flights: Math.max(n.flights, r.flights),
      resolved: [...(n.resolved ?? []), ...(r.resolved ?? [])],
    });
  for (let e of p) {
    let t = [n.stamps[e], r.stamps[e]].filter((e) => e !== void 0);
    t.length && (i.stamps[e] = Math.min(...t));
  }
  ((i.last = (r.last?.at ?? 0) > (n.last?.at ?? 0) ? r.last : n.last),
    (i.ticket = [n.ticket, r.ticket]
      .filter((e) => !!e && !i.resolved?.some((t) => t.ticket.id === e.id))
      .sort((e, t) => t.issued - e.issued)[0]));
  let a = qe(n.shared, r.shared);
  return (a ? (i.shared = a) : delete i.shared, i);
}
function vt(e, t, n = 500) {
  let r = X(e);
  if (r.in?.includes(t.id)) return !1;
  let i = typeof e.money == `number` && Number.isFinite(e.money) ? e.money : n;
  return (
    (e.money = Math.max(0, Math.round(i + t.credit))),
    (e.travel = { ...r, in: [...(r.in ?? []), t.id].slice(-20) }),
    !0
  );
}
function yt(e, t) {
  let n = X(e);
  return (
    !n.in?.includes(t.id) &&
    ((e.travel = { ...n, in: [...(n.in ?? []), t.id].slice(-20) }), !0)
  );
}
function bt(e, t) {
  let n = X(e);
  if (n.out !== t.id) return 0;
  let r = t.fare + t.cash,
    i = { ...n, refunded: [...(n.refunded ?? []), t.id].slice(-20) };
  return (delete i.out, (e.travel = i), r);
}
var xt = class extends Error {},
  Z =
    (f.seoul?.saveKey === `tokyo-rush-save-v1`
      ? `seoul`
      : f.jakarta?.saveKey === `tokyo-rush-save-v1`
        ? `jakarta`
        : null) ??
    (f.mumbai?.saveKey === `tokyo-rush-save-v1`
      ? `mumbai`
      : f.taichung?.saveKey === `tokyo-rush-save-v1`
        ? `taichung`
        : f.tainan?.saveKey === `tokyo-rush-save-v1`
          ? `tainan`
          : f.london?.saveKey === `tokyo-rush-save-v1`
            ? `london`
            : f.tokyo?.saveKey === `tokyo-rush-save-v1`
              ? `tokyo`
              : f.kaohsiung.saveKey === `tokyo-rush-save-v1`
                ? `kaohsiung`
                : f[`hong-kong`].saveKey === `tokyo-rush-save-v1`
                  ? `hong-kong`
                  : `taipei`),
  St = `gta-travel-device-v1`,
  Q = null;
function Ct() {
  if (Q) return Q;
  let e = () =>
    (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    )
      .replace(/[^\w-]/g, ``)
      .slice(0, 36);
  try {
    let t = localStorage.getItem(St);
    if (t && /^[\w-]{8,40}$/.test(t)) return (Q = t);
    let n = e();
    return (localStorage.setItem(St, n), (Q = (localStorage.getItem(St), n)));
  } catch {
    return (Q = e());
  }
}
function wt(e) {
  try {
    let t = JSON.parse(localStorage.getItem(f[e].prefsKey) || `null`);
    return t && typeof t == `object` && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
}
function Tt() {
  try {
    return i(f[d(Z)].saveKey);
  } catch {
    return null;
  }
}
function Et(e) {
  try {
    let n = i(f[e].saveKey);
    return t(n) ? null : n;
  } catch {
    return null;
  }
}
function Dt(e, n, r = Date.now()) {
  let i = d(Z),
    a = { [Z]: t(n) ? null : n, [i]: Tt() };
  t(a[i]) && (a[i] = null);
  for (let e of u(Z)) e !== i && c(e) && (a[e] = Et(e));
  let o = !1;
  if (!e.shared)
    ((e.shared = $e({
      here: Z,
      now: r,
      saves: a,
      prefs: Object.fromEntries([Z, ...u(Z).filter(c)].map((e) => [e, wt(e)])),
      at: e.at,
    })),
      (o = !0),
      console.info(
        `[travel] shared wallet created: NT$${e.shared.wallet.ntd} (${Object.keys(e.shared.wallet.seeds).join(`, `) || `empty`})`,
      ));
  else
    for (let t of [Z, ...u(Z).filter(c)])
      (Xe(e.shared, t, a[t]) &&
        ((o = !0),
        console.info(
          `[travel] ${t}'s save folded into the shared wallet: NT$${e.shared.wallet.ntd}`,
        )),
        Ze(e.shared, t, a[t], r) &&
          ((o = !0),
          console.info(`[travel] ${t}'s backpack folded into the shared one`)));
  let s = e.shared.wallet,
    l =
      Object.keys(s.seeds).every((e) => e === `start`) &&
      Object.values(s.dev).every((e) => !e.e && !e.s) &&
      !s.market?.conflict &&
      Object.keys(s.market?.lanes ?? {}).length === 0,
    f = F(Z);
  return (
    l &&
      !(n && typeof n == `object`) &&
      (s.seeds.start ?? 0) < f &&
      ((s.seeds.start = f), (s.ntd = Math.max(0, M(s))), (o = !0)),
    { rec: e, changed: o }
  );
}
function Ot(e, n = Date.now()) {
  let r = { arrival: null, cancelled: null };
  try {
    let i = o();
    if (t(i)) return r;
    let a = i && typeof i == `object` && !Array.isArray(i) ? i : null,
      { rec: s, changed: c } = Dt(J(), a, n),
      l = s.ticket;
    (l && l.to === Z
      ? (r.arrival = At(s, a, l, n, e))
      : l && l.from === Z
        ? (r.cancelled = jt(s, a, l, n))
        : (!c || Y(s)) && kt(a, s),
      h(Z) || Mt(J().shared));
  } catch (e) {
    console.warn(`[travel] boot failed`, e);
  }
  return r;
}
function kt(e, t, n = !1) {
  if (!e || !t.shared) return;
  let r = JSON.stringify(e);
  (et(e, t.shared, Z), (n || JSON.stringify(e) !== r) && s(e) && n && a());
}
function At(e, t, n, r, i) {
  let a = !t,
    o = t ?? {},
    s = e.shared;
  (n.credit > 0 &&
    !X(o).in?.includes(n.id) &&
    I(s, `ticket:${n.id}`, P(n.credit, Z)),
    yt(o, n),
    a && (o.travel = { ...o.travel, arrivalOnly: !0 }),
    (o.lastPlayedAt = new Date(r).toISOString()),
    s.player.character || (s.player.character = n.passenger));
  let c = a ? null : i(n.mode === `hsr` ? `hsr` : `flight`);
  if (c) {
    o.pos = { x: c.x, z: c.z, heading: c.heading };
    let e = o.player;
    e && typeof e == `object` && delete e.at;
  }
  let l = ut(s.clock, n);
  ((s.clock = l), (s.at.clock = r));
  let u = ht(e, n, r);
  return Y(u)
    ? (kt(o, u, !0),
      console.info(
        `[travel] arrived ${n.flight} ${f[n.from].airport.code} → ${f[n.to].airport.code}${n.credit > 0 ? `: +${n.credit} ${f[n.to].currency} (an old ticket's cash)` : ``}${a ? ` (first visit — new game)` : ``}`,
      ),
      { ticket: n, first: a, hour: Ce(l, Z).hour ?? 12, record: u })
    : null;
}
function jt(e, t, n, r) {
  let i = !!t && X(t).out === n.id,
    a = t ? bt(t, n) : 0;
  a && I(e.shared, `refund:${n.id}`, P(a, n.from));
  let o = gt(e, n, `cancelled`, r);
  return Y(o)
    ? (kt(t, o, i),
      console.info(
        `[travel] ${n.flight} to ${n.to} never arrived — cancelled, ${a} refunded`,
      ),
      { ticket: n, refund: a })
    : null;
}
function Mt(e) {
  let t = e?.player.character;
  if (t)
    try {
      let e = wt(Z) ?? {};
      if (e.character === t) return;
      ((e.character = t),
        localStorage.setItem(f[Z].prefsKey, JSON.stringify(e)));
    } catch {}
}
function Nt(e) {
  if (t(e)) return e;
  try {
    let { rec: t, changed: n } = Dt(J(), e);
    return n && !Y(t)
      ? e
      : et(
          e && typeof e == `object` && !Array.isArray(e) ? { ...e } : {},
          t.shared,
          Z,
        );
  } catch (t) {
    return (console.warn(`[travel] shared state unavailable`, t), e);
  }
}
function Pt() {
  let e = J().shared;
  return e ? e.wallet.ntd : null;
}
function Ft(e) {
  if (!c(e)) return null;
  let t = Pt();
  return t === null ? null : N(t, e);
}
function $() {
  try {
    return localStorage.getItem(dt);
  } catch {
    return null;
  }
}
function It() {
  try {
    let e = localStorage.getItem(`gta-travel-v1:identities-v1`) ?? ``;
    return /^\{"active":"([^"]*)"/.exec(e)?.[1] ?? `guest`;
  } catch {
    return `guest`;
  }
}
var Lt = class {
  st;
  onRemote;
  base;
  seen;
  identity;
  constructor(e, t) {
    ((this.st = e),
      (this.onRemote = t),
      (this.base = nt(e.data)),
      (this.seen = $()),
      (this.identity = It()),
      typeof window < `u` &&
        typeof window.addEventListener == `function` &&
        (window.addEventListener(`storage`, (e) => {
          (e.key === null || e.key === `gta-travel-v1`) && this.refresh();
        }),
        window.addEventListener(`travel:applied`, () => this.refresh())));
  }
  foreign() {
    return this.st.resetting || this.st.qa === !0 || It() !== this.identity;
  }
  money() {
    this.sync(!1);
  }
  save() {
    this.sync(!0);
  }
  sync(e) {
    if (this.foreign()) return;
    let t = this.st.data,
      n = t.money,
      r = JSON.stringify(this.base);
    try {
      let r = J(),
        i = !1;
      r.shared || ({ rec: r, changed: i } = Dt(r, null));
      let a = r.shared,
        o = typeof n == `number` && n !== this.base.money,
        s = Date.now();
      if (
        (e
          ? (i = ct(a, t, this.base, Z, Ct(), s).changed || i)
          : it(a, t, this.base, Z, Ct(), s),
        (o || i) && !Y(r))
      )
        throw new xt();
      this.seen = $();
    } catch (e) {
      ((t.money = n),
        (this.base = JSON.parse(r)),
        e instanceof xt || console.warn(`[travel] shared sync failed`, e));
    }
  }
  refresh() {
    if (this.st.resetting || $() === this.seen || this.foreign()) return;
    let e = this.st.data,
      t = e.money;
    if (typeof t == `number` && t !== this.base.money) this.sync(!1);
    else {
      let t = J().shared;
      if (((this.seen = $()), !t)) return;
      ((e.money = N(t.wallet.ntd, Z) + Re(e, Z)), (this.base.money = e.money));
    }
    e.money !== t && this.onRemote(e.money);
  }
  rebase() {
    ((this.base = nt(this.st.data)), (this.seen = $()));
  }
};
