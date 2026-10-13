// tokyo__assets__shared-DcD5mkpI 07 — money
// Lines 3151-3309 of readable/tokyo__assets__shared-DcD5mkpI.pretty.js (statement-aligned).
function rt(e, t, n, r, i) {
  let a = !t,
    o = t ?? {},
    s = e.shared;
  (n.credit > 0 &&
    !X(o).in?.includes(n.id) &&
    j(s, `ticket:${n.id}`, k(n.credit, Z)),
    Ke(o, n),
    a && (o.travel = { ...o.travel, arrivalOnly: !0 }),
    (o.lastPlayedAt = new Date(r).toISOString()),
    s.player.character || (s.player.character = n.passenger));
  let c = a ? null : i(n.mode === `hsr` ? `hsr` : `flight`);
  if (c) {
    o.pos = { x: c.x, z: c.z, heading: c.heading };
    let e = o.player;
    e && typeof e == `object` && delete e.at;
  }
  let l = ze(s.clock, n);
  ((s.clock = l), (s.at.clock = r));
  let d = He(e, n, r);
  return Y(d)
    ? (nt(o, d, !0),
      console.info(
        `[travel] arrived ${n.flight} ${u[n.from].airport.code} → ${u[n.to].airport.code}${n.credit > 0 ? `: +${n.credit} ${u[n.to].currency} (an old ticket's cash)` : ``}${a ? ` (first visit — new game)` : ``}`,
      ),
      { ticket: n, first: a, hour: l.hour ?? 12, record: d })
    : null;
}
function it(e, t, n, r) {
  let i = !!t && X(t).out === n.id,
    a = t ? qe(t, n) : 0;
  a && j(e.shared, `refund:${n.id}`, k(a, n.from));
  let o = Ue(e, n, `cancelled`, r);
  return Y(o)
    ? (nt(t, o, i),
      console.info(
        `[travel] ${n.flight} to ${n.to} never arrived — cancelled, ${a} refunded`,
      ),
      { ticket: n, refund: a })
    : null;
}
function at(e) {
  let t = e?.player.character;
  if (t)
    try {
      let e = Ze(Z) ?? {};
      if (e.character === t) return;
      ((e.character = t),
        localStorage.setItem(u[Z].prefsKey, JSON.stringify(e)));
    } catch {}
}
function ot(e) {
  if (i(e)) return e;
  try {
    let { rec: t, changed: n } = et(J(), e);
    return n && !Y(t)
      ? e
      : Ne(
          e && typeof e == `object` && !Array.isArray(e) ? { ...e } : {},
          t.shared,
          Z,
        );
  } catch (t) {
    return (console.warn(`[travel] shared state unavailable`, t), e);
  }
}
function st() {
  let e = J().shared;
  return e ? e.wallet.ntd : null;
}
function ct(e) {
  let t = st();
  return t === null ? null : O(t, e);
}
function $() {
  try {
    return localStorage.getItem(U);
  } catch {
    return null;
  }
}
function lt() {
  try {
    let e = localStorage.getItem(`gta-travel-v1:identities-v1`) ?? ``;
    return /^\{"active":"([^"]*)"/.exec(e)?.[1] ?? `guest`;
  } catch {
    return `guest`;
  }
}
var ut = class {
  st;
  onRemote;
  base;
  seen;
  identity;
  constructor(e, t) {
    ((this.st = e),
      (this.onRemote = t),
      (this.base = Pe(e.data)),
      (this.seen = $()),
      (this.identity = lt()),
      typeof window < `u` &&
        typeof window.addEventListener == `function` &&
        (window.addEventListener(`storage`, (e) => {
          (e.key === null || e.key === `gta-travel-v1`) && this.refresh();
        }),
        window.addEventListener(`travel:applied`, () => this.refresh())));
  }
  foreign() {
    return this.st.resetting || lt() !== this.identity;
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
      r.shared || ({ rec: r, changed: i } = et(r, null));
      let a = r.shared,
        o = typeof n == `number` && n !== this.base.money,
        s = Date.now();
      if (
        (e
          ? (i = Re(a, t, this.base, Z, Xe(), s).changed || i)
          : Ie(a, t, this.base, Z, Xe(), s),
        (o || i) && !Y(r))
      )
        throw new Je();
      this.seen = $();
    } catch (e) {
      ((t.money = n),
        (this.base = JSON.parse(r)),
        e instanceof Je || console.warn(`[travel] shared sync failed`, e));
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
      ((e.money = O(t.wallet.ntd, Z) + A(e)), (this.base.money = e.money));
    }
    e.money !== t && this.onRemote(e.money);
  }
  rebase() {
    ((this.base = Pe(this.st.data)), (this.seen = $()));
  }
};
