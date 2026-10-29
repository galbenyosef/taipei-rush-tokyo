// tokyo/assets/shared-DC9fKqx_ 06 — ticket
// Lines 2873-3196 of readable/tokyo/assets/shared-DC9fKqx_.pretty.js (statement-aligned).
function He(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    r = K(t.id),
    i = K(t.flight, 16),
    a = K(t.gate, 8),
    o = K(t.seat, 8);
  if (!r || !i || !W(t.from) || !W(t.to) || t.from === t.to) return null;
  let s = G(t.depMin, 0, 1440),
    c = G(t.hours, 0, 24),
    l = G(t.fare, 0, 1e9),
    u = G(t.cash, 0, 0xe8d4a51000),
    d = G(t.credit, 0, 0xe8d4a51000),
    f = G(t.issued, 0, 0x38d7ea4c68000);
  return s === null ||
    c === null ||
    l === null ||
    u === null ||
    d === null ||
    f === null
    ? null
    : {
        id: r,
        from: t.from,
        to: t.to,
        flight: i,
        gate: a ?? `1`,
        seat: o ?? `1A`,
        depMin: s,
        nextDay: t.nextDay === !0,
        hours: c,
        fare: Math.round(l),
        cash: Math.round(u),
        credit: Math.round(d),
        promo: t.promo === !0 || void 0,
        issued: f,
        lang: t.lang === `en` ? `en` : `zh`,
        passenger: n(t.passenger),
        ...(t.v === 2 ? { v: 2 } : {}),
        ...(t.mode === `hsr` ? { mode: `hsr` } : {}),
      };
}
function q(e) {
  let t = e && typeof e == `object` ? e : {},
    n = { v: 1, flights: 0, stamps: {} };
  (G(t.updatedAt, 0, 0x38d7ea4c68000) !== null && (n.updatedAt = t.updatedAt),
    Array.isArray(t.resolved) &&
      (n.resolved = t.resolved
        .flatMap((e) => {
          let t = He(e?.ticket),
            n = G(e?.at, 0, 0x38d7ea4c68000);
          return t &&
            n !== null &&
            (e.status === `arrived` || e.status === `cancelled`)
            ? [{ ticket: t, status: e.status, at: n }]
            : [];
        })
        .sort((e, t) => t.at - e.at)
        .filter(
          (e, t, n) => n.findIndex((t) => t.ticket.id === e.ticket.id) === t,
        )
        .slice(0, 20)),
    W(t.at) && (n.at = t.at));
  let r = He(t.ticket);
  r && (n.ticket = r);
  let i = G(t.flights, 0, 1e6);
  if (
    (i !== null && (n.flights = Math.floor(i)),
    t.stamps && typeof t.stamps == `object`)
  )
    for (let [e, r] of Object.entries(t.stamps)) {
      let t = G(r, 0, 0x38d7ea4c68000);
      W(e) && t !== null && (n.stamps[e] = t);
    }
  let a = t.last;
  a &&
    typeof a == `object` &&
    K(a.id) &&
    W(a.from) &&
    W(a.to) &&
    (n.last = {
      id: a.id,
      from: a.from,
      to: a.to,
      flight: K(a.flight, 16) ?? ``,
      at: G(a.at, 0, 0x38d7ea4c68000) ?? 0,
      fare: Math.round(G(a.fare, 0, 1e9) ?? 0),
      cash: Math.round(G(a.cash, 0, 0xe8d4a51000) ?? 0),
      credit: Math.round(G(a.credit, 0, 0xe8d4a51000) ?? 0),
    });
  let o = B(t.shared);
  return (o && (n.shared = o), n);
}
function J() {
  try {
    let e = localStorage.getItem(U);
    return q(e ? JSON.parse(e) : null);
  } catch {
    return q(null);
  }
}
function Y(e) {
  try {
    return (
      localStorage.setItem(U, JSON.stringify({ ...e, updatedAt: Date.now() })),
      typeof window < `u` && window.dispatchEvent(new Event(`travel:changed`)),
      !0
    );
  } catch {
    return !1;
  }
}
function Ue(e = Date.now(), t = Math.random) {
  return `${e.toString(36)}-${Math.floor(t() * 36 ** 6)
    .toString(36)
    .padStart(6, `0`)}`;
}
function X(e) {
  let t = e && typeof e == `object` ? e.travel : void 0;
  if (!t || typeof t != `object`) return {};
  let n = t,
    r = {};
  typeof n.out == `string` && n.out && (r.out = n.out);
  for (let e of [`in`, `paid`, `refunded`])
    Array.isArray(n[e]) &&
      (r[e] = n[e]
        .filter((e) => typeof e == `string` && e.length > 0)
        .slice(-20));
  return (n.arrivalOnly === !0 && (r.arrivalOnly = !0), r);
}
function We(e, t, n = Date.now()) {
  let r = { ...e, stamps: { ...e.stamps } };
  return (
    r.ticket?.id === t.id && delete r.ticket,
    e.last?.id !== t.id &&
      !e.resolved?.some(
        (e) => e.ticket.id === t.id && e.status === `arrived`,
      ) &&
      ((r.flights = e.flights + 1),
      (r.last = {
        id: t.id,
        from: t.from,
        to: t.to,
        flight: t.flight,
        at: n,
        fare: t.fare,
        cash: t.cash,
        credit: t.credit,
      })),
    r.stamps[t.to] === void 0 && (r.stamps[t.to] = n),
    (r.at = t.to),
    Ge(r, t, `arrived`, n)
  );
}
function Ge(e, t, n, r) {
  let i = q({
    ...e,
    updatedAt: r,
    resolved: [{ ticket: t, status: n, at: r }, ...(e.resolved ?? [])],
  });
  return (i.ticket?.id === t.id && delete i.ticket, i);
}
function Ke(e, t) {
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
  let a = ke(n.shared, r.shared);
  return (a ? (i.shared = a) : delete i.shared, i);
}
function qe(e, t, n = 500) {
  let r = X(e);
  if (r.in?.includes(t.id)) return !1;
  let i = typeof e.money == `number` && Number.isFinite(e.money) ? e.money : n;
  return (
    (e.money = Math.max(0, Math.round(i + t.credit))),
    (e.travel = { ...r, in: [...(r.in ?? []), t.id].slice(-20) }),
    !0
  );
}
function Je(e, t) {
  let n = X(e);
  return (
    !n.in?.includes(t.id) &&
    ((e.travel = { ...n, in: [...(n.in ?? []), t.id].slice(-20) }), !0)
  );
}
function Ye(e, t) {
  let n = X(e);
  if (n.out !== t.id) return 0;
  let r = t.fare + t.cash,
    i = { ...n, refunded: [...(n.refunded ?? []), t.id].slice(-20) };
  return (delete i.out, (e.travel = i), r);
}
var Xe = class extends Error {},
  Z =
    f.tokyo?.saveKey === `tokyo-rush-save-v1`
      ? `tokyo`
      : f.kaohsiung.saveKey === `tokyo-rush-save-v1`
        ? `kaohsiung`
        : f[`hong-kong`].saveKey === `tokyo-rush-save-v1`
          ? `hong-kong`
          : `taipei`,
  Ze = `gta-travel-device-v1`,
  Q = null;
function Qe() {
  if (Q) return Q;
  let e = () =>
    (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    )
      .replace(/[^\w-]/g, ``)
      .slice(0, 36);
  try {
    let t = localStorage.getItem(Ze);
    if (t && /^[\w-]{8,40}$/.test(t)) return (Q = t);
    let n = e();
    return (localStorage.setItem(Ze, n), (Q = (localStorage.getItem(Ze), n)));
  } catch {
    return (Q = e());
  }
}
function $e(e) {
  try {
    let t = JSON.parse(localStorage.getItem(f[e].prefsKey) || `null`);
    return t && typeof t == `object` && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
}
function et() {
  try {
    return r(f[u(Z)].saveKey);
  } catch {
    return null;
  }
}
function tt(e) {
  try {
    let t = r(f[e].saveKey);
    return o(t) ? null : t;
  } catch {
    return null;
  }
}
function nt(e, t, n = Date.now()) {
  let r = u(Z),
    i = { [Z]: o(t) ? null : t, [r]: et() };
  o(i[r]) && (i[r] = null);
  for (let e of l(Z)) e !== r && (i[e] = tt(e));
  let a = !1;
  if (!e.shared)
    ((e.shared = Ne({
      here: Z,
      now: n,
      saves: i,
      prefs: Object.fromEntries([Z, ...l(Z)].map((e) => [e, $e(e)])),
      at: e.at,
    })),
      (a = !0),
      console.info(
        `[travel] shared wallet created: NT$${e.shared.wallet.ntd} (${Object.keys(e.shared.wallet.seeds).join(`, `) || `empty`})`,
      ));
  else
    for (let t of [Z, ...l(Z)])
      Me(e.shared, t, i[t]) &&
        ((a = !0),
        console.info(
          `[travel] ${t}'s save folded into the shared wallet: NT$${e.shared.wallet.ntd}`,
        ));
  let s = e.shared.wallet,
    c =
      Object.keys(s.seeds).every((e) => e === `start`) &&
      Object.values(s.dev).every((e) => !e.e && !e.s) &&
      !s.market?.conflict &&
      Object.keys(s.market?.lanes ?? {}).length === 0,
    d = Ce(Z);
  return (
    c &&
      !(t && typeof t == `object`) &&
      (s.seeds.start ?? 0) < d &&
      ((s.seeds.start = d), (s.ntd = Math.max(0, k(s))), (a = !0)),
    { rec: e, changed: a }
  );
}
function rt(e, t = Date.now()) {
  let n = { arrival: null, cancelled: null };
  try {
    let r = a();
    if (o(r)) return n;
    let i = r && typeof r == `object` && !Array.isArray(r) ? r : null,
      { rec: s, changed: c } = nt(J(), i, t),
      l = s.ticket;
    (l && l.to === Z
      ? (n.arrival = at(s, i, l, t, e))
      : l && l.from === Z
        ? (n.cancelled = ot(s, i, l, t))
        : (!c || Y(s)) && it(i, s),
      st(J().shared));
  } catch (e) {
    console.warn(`[travel] boot failed`, e);
  }
  return n;
}
function it(e, t, n = !1) {
  if (!e || !t.shared) return;
  let r = JSON.stringify(e);
  (Fe(e, t.shared, Z), (n || JSON.stringify(e) !== r) && s(e) && n && i());
}
