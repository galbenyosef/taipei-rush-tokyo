// tokyo/assets/shared-BaQwRjes 07 — money
// Lines 3106-3452 of readable/tokyo/assets/shared-BaQwRjes.pretty.js (statement-aligned).
function tt(e, t, n) {
  let r = T(n);
  if (r) {
    let i = A(e) ? Re(e, n) : e.money === void 0 ? 0 : j(e) % r;
    ((e.yenChange = i), (e.money = N(t.wallet.ntd, n) + i));
  } else e.money = N(t.wallet.ntd, n);
  return (
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = V(B(e.bagBook), t.book)),
    (e[Ae] = 1),
    e
  );
}
function nt(e) {
  let t = E(e) ? e : {},
    n = E(t.player) ? t.player : {},
    r = { money: j(t), settings: R(t.settings) };
  (typeof n.character == `string` && (r.character = n.character),
    k(n.outfit) && (r.outfit = n.outfit));
  let i = L(n.loadout);
  i && (r.loadout = i);
  let a = He({ hour: t.hour, day: t.day, startDate: t.startDate });
  a && (r.clock = a);
  let o = z(t.bag);
  return (o && (r.bag = o), r);
}
function rt(e, t, n, r = ke) {
  if (!e || !n) {
    let n = U(t);
    for (let t of e?.owned ?? [])
      !r.includes(t) && !n.owned.includes(t) && n.owned.push(t);
    return n;
  }
  let i = U(e);
  for (let e of r) {
    let r = n.owned.includes(e),
      a = t.owned.includes(e);
    (a && !r && !i.owned.includes(e) && i.owned.push(e),
      !a && r && (i.owned = i.owned.filter((t) => t !== e)));
    for (let r of [`ammo`, `mag`]) {
      let a = (t[r][e] ?? 0) - (n[r][e] ?? 0);
      (a && (i[r][e] = Math.max(0, (i[r][e] ?? 0) + a)),
        i.owned.includes(e) || delete i[r][e]);
    }
  }
  return (
    t.armor !== n.armor &&
      (i.armor = Math.max(0, Math.min(100, i.armor + t.armor - n.armor))),
    t.weapon !== n.weapon && (i.weapon = t.weapon),
    i.weapon !== `fists` && !i.owned.includes(i.weapon) && (i.weapon = `fists`),
    i
  );
}
function it(e, t, n, r, i, a) {
  if (r === `tokyo`) return at(e, t, n, i, a);
  if (r === `seoul`) return ot(e, t, n, r, i, a);
  if (r === `mumbai`) return st(e, t, n, i, a);
  let o = j(t),
    s = o === n.money ? 0 : Be(e, i, (o - n.money) * w[r], a);
  return ((t.money = N(e.wallet.ntd, r)), (n.money = t.money), s);
}
function at(e, t, n, r, i) {
  let a = j(t),
    o = 0,
    s = ze(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 5);
    ((o = Be(e, r, c, i)),
      (s = o === c ? t - c * 5 : Math.max(0, Math.min(4, s))));
  }
  return (
    (t.yenChange = s),
    (t.money = N(e.wallet.ntd, `tokyo`) + s),
    (n.money = t.money),
    o
  );
}
function ot(e, t, n, r, i, a) {
  let o = T(r),
    s = j(t),
    c = 0,
    l = Re(t, r);
  if (s !== n.money) {
    let t = l + (s - n.money),
      r = Math.floor(t / o);
    ((c = Be(e, i, r, a)),
      (l = c === r ? t - r * o : Math.max(0, Math.min(o - 1, l))));
  }
  return (
    (t.yenChange = l),
    (t.money = N(e.wallet.ntd, r) + l),
    (n.money = t.money),
    c
  );
}
function st(e, t, n, r, i) {
  let a = j(t),
    o = 0,
    s = Le(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 3);
    ((o = Be(e, r, c, i)),
      (s = o === c ? t - c * 3 : Math.max(0, Math.min(2, s))));
  }
  return (
    (t.rupeeChange = s),
    (t.money = N(e.wallet.ntd, `mumbai`) + s),
    (n.money = t.money),
    o
  );
}
function ct(e, t, r, i, a, o) {
  let s = { money: it(e, t, r, i, a, o), changed: !1 };
  if (h(i)) return ((s.changed = lt(e, t, r, o)), (t[Ae] = 1), s);
  let c = R(t.settings),
    l = !1;
  for (let [t, n] of Object.entries(c))
    r.settings[t] !== n &&
      e.settings[t] !== n &&
      ((e.settings[t] = n), (l = !0));
  ((r.settings = c), l && (e.at.settings = o));
  let u = E(t.player) ? t.player : {},
    d = !1;
  (n(u.character) &&
    u.character !== r.character &&
    (e.player.character !== u.character &&
      ((e.player.character = u.character), (d = !0)),
    (r.character = u.character)),
    k(u.outfit) &&
      u.outfit !== r.outfit &&
      (e.player.outfit !== u.outfit && ((e.player.outfit = u.outfit), (d = !0)),
      (r.outfit = u.outfit)));
  let f = L(u.loadout);
  if (f && JSON.stringify(f) !== JSON.stringify(r.loadout)) {
    let t = rt(e.player.loadout, f, r.loadout);
    (JSON.stringify(t) !== JSON.stringify(e.player.loadout) &&
      ((e.player.loadout = t), (d = !0)),
      (r.loadout = f));
  }
  d && (e.at.player = o);
  let p = lt(e, t, r, o),
    m = He({ hour: t.hour, day: t.day, startDate: t.startDate });
  return (
    m &&
      JSON.stringify(m) !== JSON.stringify(r.clock) &&
      ((e.clock = we(m, i)), (e.at.clock = o), (r.clock = m), (s.changed = !0)),
    (t[Ae] = 1),
    (s.changed ||= l || d || p),
    s
  );
}
function lt(e, t, n, r) {
  let i = z(t.bag),
    a = !1;
  if (i && JSON.stringify(i) !== JSON.stringify(n.bag ?? {})) {
    let o = Ve(e.bag, i, n.bag);
    (JSON.stringify(o) !== JSON.stringify(e.bag ?? {}) &&
      ((e.bag = o), (e.at.bag = r), (a = !0)),
      (t.bag = { ...o }),
      (n.bag = { ...o }));
  }
  let o = B(t.bagBook);
  if (o?.length) {
    let n = V(e.book, o);
    (n.length !== (e.book?.length ?? 0) && ((e.book = n), (a = !0)),
      (t.bagBook = [...n]));
  }
  return a;
}
function ut(e, t) {
  if (t.from) return Ee(e, { ...t, from: t.from });
  let n = t.depMin / 60 + t.hours;
  t.from && (n -= m(t.from));
  let r = {
    day: (e?.day ?? 0) + +!!t.nextDay + Math.floor(n / 24),
    hour: ((n % 24) + 24) % 24,
  };
  return (e?.startDate && (r.startDate = e.startDate), r);
}
var dt = `gta-travel-v1`,
  W = l;
function ft(e) {
  let t = {};
  e.mode === `hsr` && (t.mode = `hsr`);
  let n = G(e.tz, -24, 24);
  return (n && (t.tz = n), t);
}
var G = (e, t, n) =>
    typeof e == `number` && Number.isFinite(e) && e >= t && e <= n ? e : null,
  K = (e, t = 40) =>
    typeof e == `string` && e.length > 0 && e.length <= t ? e : null;
function pt(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = K(t.id),
    i = K(t.flight, 16),
    a = K(t.gate, 8),
    o = K(t.seat, 8);
  if (!n || !i || !W(t.from) || !W(t.to) || t.from === t.to) return null;
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
        id: n,
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
        passenger: r(t.passenger),
        ...(t.v === 2 ? { v: 2 } : {}),
        ...ft(t),
      };
}
function q(e) {
  let t = e && typeof e == `object` ? e : {},
    n = { v: 1, flights: 0, stamps: {} };
  (G(t.updatedAt, 0, 0x38d7ea4c68000) !== null && (n.updatedAt = t.updatedAt),
    Array.isArray(t.resolved) &&
      (n.resolved = t.resolved
        .flatMap((e) => {
          let t = pt(e?.ticket),
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
  let r = pt(t.ticket);
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
  let o = Ue(t.shared);
  return (o && (n.shared = o), n);
}
function J() {
  try {
    let e = localStorage.getItem(dt);
    return q(e ? JSON.parse(e) : null);
  } catch {
    return q(null);
  }
}
function Y(e) {
  try {
    return (
      localStorage.setItem(dt, JSON.stringify({ ...e, updatedAt: Date.now() })),
      typeof window < `u` && window.dispatchEvent(new Event(`travel:changed`)),
      !0
    );
  } catch {
    return !1;
  }
}
function mt(e = Date.now(), t = Math.random) {
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
function ht(e, t, n = Date.now()) {
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
    gt(r, t, `arrived`, n)
  );
}
