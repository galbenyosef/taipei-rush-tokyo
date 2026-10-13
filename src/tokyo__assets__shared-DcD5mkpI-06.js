// tokyo__assets__shared-DcD5mkpI 06 — ticket
// Lines 2827-3150 of readable/tokyo__assets__shared-DcD5mkpI.pretty.js (statement-aligned).
function Be(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = K(t.id),
    r = K(t.flight, 16),
    i = K(t.gate, 8),
    a = K(t.seat, 8);
  if (!n || !r || !W(t.from) || !W(t.to) || t.from === t.to) return null;
  let o = G(t.depMin, 0, 1440),
    s = G(t.hours, 0, 24),
    c = G(t.fare, 0, 1e9),
    l = G(t.cash, 0, 0xe8d4a51000),
    u = G(t.credit, 0, 0xe8d4a51000),
    d = G(t.issued, 0, 0x38d7ea4c68000);
  return o === null ||
    s === null ||
    c === null ||
    l === null ||
    u === null ||
    d === null
    ? null
    : {
        id: n,
        from: t.from,
        to: t.to,
        flight: r,
        gate: i ?? `1`,
        seat: a ?? `1A`,
        depMin: o,
        nextDay: t.nextDay === !0,
        hours: s,
        fare: Math.round(c),
        cash: Math.round(l),
        credit: Math.round(u),
        promo: t.promo === !0 || void 0,
        issued: d,
        lang: t.lang === `en` ? `en` : `zh`,
        passenger: t.passenger === `wen` ? `wen` : `jie`,
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
          let t = Be(e?.ticket),
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
  let r = Be(t.ticket);
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
  let o = R(t.shared);
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
function Ve(e = Date.now(), t = Math.random) {
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
function He(e, t, n = Date.now()) {
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
    Ue(r, t, `arrived`, n)
  );
}
function Ue(e, t, n, r) {
  let i = q({
    ...e,
    updatedAt: r,
    resolved: [{ ticket: t, status: n, at: r }, ...(e.resolved ?? [])],
  });
  return (i.ticket?.id === t.id && delete i.ticket, i);
}
function We(e, t) {
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
  for (let e of d) {
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
function Ge(e, t, n = 500) {
  let r = X(e);
  if (r.in?.includes(t.id)) return !1;
  let i = typeof e.money == `number` && Number.isFinite(e.money) ? e.money : n;
  return (
    (e.money = Math.max(0, Math.round(i + t.credit))),
    (e.travel = { ...r, in: [...(r.in ?? []), t.id].slice(-20) }),
    !0
  );
}
function Ke(e, t) {
  let n = X(e);
  return (
    !n.in?.includes(t.id) &&
    ((e.travel = { ...n, in: [...(n.in ?? []), t.id].slice(-20) }), !0)
  );
}
function qe(e, t) {
  let n = X(e);
  if (n.out !== t.id) return 0;
  let r = t.fare + t.cash,
    i = { ...n, refunded: [...(n.refunded ?? []), t.id].slice(-20) };
  return (delete i.out, (e.travel = i), r);
}
var Je = class extends Error {},
  Z =
    u.tokyo?.saveKey === `tokyo-rush-save-v1`
      ? `tokyo`
      : u.kaohsiung.saveKey === `tokyo-rush-save-v1`
        ? `kaohsiung`
        : u[`hong-kong`].saveKey === `tokyo-rush-save-v1`
          ? `hong-kong`
          : `taipei`,
  Ye = `gta-travel-device-v1`,
  Q = null;
function Xe() {
  if (Q) return Q;
  let e = () =>
    (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    )
      .replace(/[^\w-]/g, ``)
      .slice(0, 36);
  try {
    let t = localStorage.getItem(Ye);
    if (t && /^[\w-]{8,40}$/.test(t)) return (Q = t);
    let n = e();
    return (localStorage.setItem(Ye, n), (Q = (localStorage.getItem(Ye), n)));
  } catch {
    return (Q = e());
  }
}
function Ze(e) {
  try {
    let t = JSON.parse(localStorage.getItem(u[e].prefsKey) || `null`);
    return t && typeof t == `object` && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
}
function Qe() {
  try {
    return t(u[c(Z)].saveKey);
  } catch {
    return null;
  }
}
function $e(e) {
  try {
    let n = t(u[e].saveKey);
    return i(n) ? null : n;
  } catch {
    return null;
  }
}
function et(e, t, n = Date.now()) {
  let r = c(Z),
    a = { [Z]: i(t) ? null : t, [r]: Qe() };
  i(a[r]) && (a[r] = null);
  for (let e of s(Z)) e !== r && (a[e] = $e(e));
  let o = !1;
  if (!e.shared)
    ((e.shared = Me({
      here: Z,
      now: n,
      saves: a,
      prefs: Object.fromEntries([Z, ...s(Z)].map((e) => [e, Ze(e)])),
      at: e.at,
    })),
      (o = !0),
      console.info(
        `[travel] shared wallet created: NT$${e.shared.wallet.ntd} (${Object.keys(e.shared.wallet.seeds).join(`, `) || `empty`})`,
      ));
  else
    for (let t of [Z, ...s(Z)])
      je(e.shared, t, a[t]) &&
        ((o = !0),
        console.info(
          `[travel] ${t}'s save folded into the shared wallet: NT$${e.shared.wallet.ntd}`,
        ));
  let l = e.shared.wallet,
    u =
      Object.keys(l.seeds).every((e) => e === `start`) &&
      Object.values(l.dev).every((e) => !e.e && !e.s) &&
      !l.market?.conflict &&
      Object.keys(l.market?.lanes ?? {}).length === 0,
    d = Ce(Z);
  return (
    u &&
      !(t && typeof t == `object`) &&
      (l.seeds.start ?? 0) < d &&
      ((l.seeds.start = d), (l.ntd = Math.max(0, D(l))), (o = !0)),
    { rec: e, changed: o }
  );
}
function tt(e, t = Date.now()) {
  let r = { arrival: null, cancelled: null };
  try {
    let a = n();
    if (i(a)) return r;
    let o = a && typeof a == `object` && !Array.isArray(a) ? a : null,
      { rec: s, changed: c } = et(J(), o, t),
      l = s.ticket;
    (l && l.to === Z
      ? (r.arrival = rt(s, o, l, t, e))
      : l && l.from === Z
        ? (r.cancelled = it(s, o, l, t))
        : (!c || Y(s)) && nt(o, s),
      at(J().shared));
  } catch (e) {
    console.warn(`[travel] boot failed`, e);
  }
  return r;
}
function nt(e, t, n = !1) {
  if (!e || !t.shared) return;
  let i = JSON.stringify(e);
  (Ne(e, t.shared, Z), (n || JSON.stringify(e) !== i) && r(e) && n && a());
}
