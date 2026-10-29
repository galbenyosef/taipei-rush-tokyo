// tokyo/assets/shared-DC9fKqx_ 07 — money
// Lines 3197-3355 of readable/tokyo/assets/shared-DC9fKqx_.pretty.js (statement-aligned).
function at(e, t, n, r, i) {
  let a = !t,
    o = t ?? {},
    s = e.shared;
  (n.credit > 0 &&
    !X(o).in?.includes(n.id) &&
    N(s, `ticket:${n.id}`, j(n.credit, Z)),
    Je(o, n),
    a && (o.travel = { ...o.travel, arrivalOnly: !0 }),
    (o.lastPlayedAt = new Date(r).toISOString()),
    s.player.character || (s.player.character = n.passenger));
  let c = a ? null : i(n.mode === `hsr` ? `hsr` : `flight`);
  if (c) {
    o.pos = { x: c.x, z: c.z, heading: c.heading };
    let e = o.player;
    e && typeof e == `object` && delete e.at;
  }
  let l = Ve(s.clock, n);
  ((s.clock = l), (s.at.clock = r));
  let u = We(e, n, r);
  return Y(u)
    ? (it(o, u, !0),
      console.info(
        `[travel] arrived ${n.flight} ${f[n.from].airport.code} → ${f[n.to].airport.code}${n.credit > 0 ? `: +${n.credit} ${f[n.to].currency} (an old ticket's cash)` : ``}${a ? ` (first visit — new game)` : ``}`,
      ),
      { ticket: n, first: a, hour: l.hour ?? 12, record: u })
    : null;
}
function ot(e, t, n, r) {
  let i = !!t && X(t).out === n.id,
    a = t ? Ye(t, n) : 0;
  a && N(e.shared, `refund:${n.id}`, j(a, n.from));
  let o = Ge(e, n, `cancelled`, r);
  return Y(o)
    ? (it(t, o, i),
      console.info(
        `[travel] ${n.flight} to ${n.to} never arrived — cancelled, ${a} refunded`,
      ),
      { ticket: n, refund: a })
    : null;
}
function st(e) {
  let t = e?.player.character;
  if (t)
    try {
      let e = $e(Z) ?? {};
      if (e.character === t) return;
      ((e.character = t),
        localStorage.setItem(f[Z].prefsKey, JSON.stringify(e)));
    } catch {}
}
function ct(e) {
  if (o(e)) return e;
  try {
    let { rec: t, changed: n } = nt(J(), e);
    return n && !Y(t)
      ? e
      : Fe(
          e && typeof e == `object` && !Array.isArray(e) ? { ...e } : {},
          t.shared,
          Z,
        );
  } catch (t) {
    return (console.warn(`[travel] shared state unavailable`, t), e);
  }
}
function lt() {
  let e = J().shared;
  return e ? e.wallet.ntd : null;
}
function ut(e) {
  let t = lt();
  return t === null ? null : A(t, e);
}
function $() {
  try {
    return localStorage.getItem(U);
  } catch {
    return null;
  }
}
function dt() {
  try {
    let e = localStorage.getItem(`gta-travel-v1:identities-v1`) ?? ``;
    return /^\{"active":"([^"]*)"/.exec(e)?.[1] ?? `guest`;
  } catch {
    return `guest`;
  }
}
var ft = class {
  st;
  onRemote;
  base;
  seen;
  identity;
  constructor(e, t) {
    ((this.st = e),
      (this.onRemote = t),
      (this.base = Ie(e.data)),
      (this.seen = $()),
      (this.identity = dt()),
      typeof window < `u` &&
        typeof window.addEventListener == `function` &&
        (window.addEventListener(`storage`, (e) => {
          (e.key === null || e.key === `gta-travel-v1`) && this.refresh();
        }),
        window.addEventListener(`travel:applied`, () => this.refresh())));
  }
  foreign() {
    return this.st.resetting || dt() !== this.identity;
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
      r.shared || ({ rec: r, changed: i } = nt(r, null));
      let a = r.shared,
        o = typeof n == `number` && n !== this.base.money,
        s = Date.now();
      if (
        (e
          ? (i = Be(a, t, this.base, Z, Qe(), s).changed || i)
          : Re(a, t, this.base, Z, Qe(), s),
        (o || i) && !Y(r))
      )
        throw new Xe();
      this.seen = $();
    } catch (e) {
      ((t.money = n),
        (this.base = JSON.parse(r)),
        e instanceof Xe || console.warn(`[travel] shared sync failed`, e));
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
      ((e.money = A(t.wallet.ntd, Z) + M(e)), (this.base.money = e.money));
    }
    e.money !== t && this.onRemote(e.money);
  }
  rebase() {
    ((this.base = Ie(this.st.data)), (this.seen = $()));
  }
};
