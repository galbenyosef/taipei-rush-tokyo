// tokyo/assets/shared-BaQwRjes 06 — settings
// Lines 2767-3105 of readable/tokyo/assets/shared-BaQwRjes.pretty.js (statement-aligned).
function R(e) {
  let t = {};
  if (!E(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 64) break;
    n.length > 0 && n.length <= 40 && k(r) && (t[n] = r);
  }
  return (t.lang === `ja` && delete t.lang, t);
}
function z(e) {
  if (!E(e)) return;
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 340) break;
    ge.test(n) && D(r) && r >= 1 && (t[n] = O(r, 1, 100));
  }
  return t;
}
function Ve(e, t, n) {
  let r = { ...(e ?? {}) },
    i = n ?? {};
  for (let e of new Set([...Object.keys(t), ...Object.keys(i)])) {
    let n = (t[e] ?? 0) - (i[e] ?? 0);
    if (!n) continue;
    let a = Math.max(0, Math.min(100, (r[e] ?? 0) + n));
    a ? (r[e] = a) : delete r[e];
  }
  return z(r) ?? {};
}
function B(e) {
  if (!Array.isArray(e)) return;
  let t = new Set();
  for (let n of e) {
    if (t.size >= 384) break;
    typeof n == `string` && ge.test(n) && t.add(n);
  }
  return [...t];
}
var V = (e, t) => B([...(e ?? []), ...(t ?? [])]) ?? [];
function He(e) {
  if (!E(e)) return;
  let t =
    typeof e.startDate == `string` && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
      ? e.startDate
      : void 0;
  if (!D(e.hour) && !t) return;
  let n = { day: O(e.day, 0, 1e6) };
  return (
    D(e.hour) && (n.hour = ((e.hour % 24) + 24) % 24),
    t && (n.startDate = t),
    n
  );
}
function Ue(e) {
  if (!E(e) || !E(e.wallet)) return;
  let t = e.wallet,
    r = {};
  if (E(t.seeds))
    for (let [e, n] of Object.entries(t.seeds)) {
      if (Object.keys(r).length >= je) break;
      e.length > 0 && e.length <= 80 && D(n) && (r[e] = O(n, 0, Ne));
    }
  let i = {};
  if (E(t.dev))
    for (let [e, n] of Object.entries(t.dev)) {
      if (Object.keys(i).length >= Me) break;
      /^[\w-]{1,40}$/.test(e) &&
        E(n) &&
        (i[e] = {
          e: O(n.e, 0, Ne),
          s: O(n.s, 0, Ne),
          at: O(n.at, 0, 0x38d7ea4c68000),
        });
    }
  let a = E(e.player) ? e.player : {},
    o = {};
  (n(a.character) && (o.character = a.character),
    k(a.outfit) && (o.outfit = a.outfit));
  let s = L(a.loadout);
  s && (o.loadout = s);
  let c = E(e.at) ? e.at : {},
    l = {
      v: 1,
      wallet: { ntd: 0, seeds: r, dev: i },
      player: o,
      settings: R(e.settings),
      at: {
        player: O(c.player, 0, 0x38d7ea4c68000),
        settings: O(c.settings, 0, 0x38d7ea4c68000),
        clock: O(c.clock, 0, 0x38d7ea4c68000),
      },
      since: O(e.since, 0, 0x38d7ea4c68000),
    },
    u = z(e.bag);
  u && ((l.bag = u), (l.at.bag = O(c.bag, 0, 0x38d7ea4c68000)));
  let d = B(e.book);
  d?.length && (l.book = d);
  let f = We(t.market);
  (f && (l.wallet.market = f), (l.wallet.ntd = Math.max(0, M(l.wallet))));
  let p = He(e.clock);
  return (p && (l.clock = p), e.adopted === !0 && (l.adopted = !0), l);
}
function We(e) {
  if (e === void 0) return;
  let t = { lanes: {} };
  if (!E(e) || !E(e.lanes)) return { ...t, conflict: !0 };
  e.conflict === !0 && (t.conflict = !0);
  let n = Object.entries(e.lanes);
  n.length > 64 && (t.conflict = !0);
  for (let [e, r] of n) {
    if (
      !/^[\w-]{1,40}$/.test(e) ||
      !E(r) ||
      !Number.isSafeInteger(r.revision) ||
      Number(r.revision) < 1 ||
      !Number.isSafeInteger(r.debit) ||
      Number(r.debit) < 0 ||
      !Number.isSafeInteger(r.credit) ||
      Number(r.credit) < 0 ||
      (r.pending !== void 0 &&
        (!E(r.pending) || JSON.stringify(r.pending).length > 8192))
    ) {
      t.conflict = !0;
      continue;
    }
    t.lanes[e] = {
      revision: Number(r.revision),
      debit: Number(r.debit),
      credit: Number(r.credit),
      ...(r.pending === void 0 ? {} : { pending: U(r.pending) }),
    };
  }
  return t;
}
var H = (e) =>
  Array.isArray(e)
    ? `[${e.map(H).join(`,`)}]`
    : E(e)
      ? `{${Object.keys(e)
          .sort()
          .map((t) => `${JSON.stringify(t)}:${H(e[t])}`)
          .join(`,`)}}`
      : (JSON.stringify(e) ?? `null`);
function Ge(e, t) {
  if (!e && !t) return;
  let n = { lanes: {} };
  for (let r of [e, t])
    if (r) {
      r.conflict && (n.conflict = !0);
      for (let [e, t] of Object.entries(r.lanes)) {
        let r = n.lanes[e];
        if (!r) {
          n.lanes[e] = U(t);
          continue;
        }
        let i = t.revision > r.revision ? t : r,
          a = i === t ? r : t;
        (((t.revision === r.revision && H(t) !== H(r)) ||
          i.debit < a.debit ||
          i.credit < a.credit) &&
          (n.conflict = !0),
          (n.lanes[e] = U(t.revision === r.revision && H(t) > H(r) ? t : i)));
      }
    }
  return (Object.keys(n.lanes).length > 64 && (n.conflict = !0), n);
}
function Ke(e) {
  let t = Ue(e);
  for (let e of Oe) delete t.settings[e];
  return (delete t.adopted, t);
}
function qe(e, t) {
  let n = e ? Ue(e) : void 0,
    r = t ? Ue(t) : void 0;
  if ((r && delete r.adopted, n?.adopted)) return r ? Je(r, n) : void 0;
  if (!n) return r;
  if (!r) return n;
  let i = [n.since, r.since].filter((e) => e > 0),
    a = Fe(i.length ? Math.min(...i) : 0);
  for (let e of [n, r]) {
    for (let [t, n] of Object.entries(e.wallet.seeds))
      a.wallet.seeds[t] = Math.max(a.wallet.seeds[t] ?? 0, n);
    for (let [t, n] of Object.entries(e.wallet.dev)) {
      let e = a.wallet.dev[t];
      a.wallet.dev[t] = e
        ? {
            e: Math.max(e.e, n.e),
            s: Math.max(e.s, n.s),
            at: Math.max(e.at, n.at),
          }
        : { ...n };
    }
  }
  let o = Ge(n.wallet.market, r.wallet.market);
  (o && (a.wallet.market = o), (a.wallet.ntd = Math.max(0, M(a.wallet))));
  let s = r.at.player > n.at.player ? r : n;
  ((a.player = U(s.player)), (a.at.player = s.at.player));
  let c = r.at.settings > n.at.settings ? r : n;
  ((a.settings = { ...c.settings }), (a.at.settings = c.at.settings));
  let l = r.at.clock > n.at.clock ? r : n;
  (l.clock && (a.clock = { ...l.clock }), (a.at.clock = l.at.clock));
  let u = n.bag ? (r.bag && (r.at.bag ?? 0) > (n.at.bag ?? 0) ? r : n) : r;
  u.bag && ((a.bag = { ...u.bag }), (a.at.bag = u.at.bag ?? 0));
  for (let e of [n, r])
    for (let t of Object.keys(e.bag ?? {}))
      t.startsWith(`car-`) && ((a.bag ??= {})[t] = 1);
  let d = V(n.book, r.book);
  return (d.length && (a.book = d), Je(a, n));
}
function Je(e, t) {
  for (let n of Oe) t.settings[n] !== void 0 && (e.settings[n] = t.settings[n]);
  return e;
}
function U(e) {
  return JSON.parse(JSON.stringify(e));
}
var Ye = (e) => {
  let t =
    E(e) && typeof e.lastPlayedAt == `string`
      ? Date.parse(e.lastPlayedAt)
      : NaN;
  return Number.isFinite(t) ? t : 0;
};
function Xe(e, t, n) {
  if (!E(n) || A(n)) return !1;
  let r = I(e, `fold:${t}:${Pe(n)}`, P(j(n), t));
  return (r && t === `mumbai` && Qe(e, n, Date.now()), r);
}
function Ze(e, t, n, r) {
  if (!h(t) || !E(n) || A(n)) return !1;
  let i = `bag:${t}:${Pe(n)}`.slice(0, 80);
  if (Object.prototype.hasOwnProperty.call(e.wallet.seeds, i)) return !1;
  e.wallet.seeds[i] = 0;
  let a = z(n.bag);
  a && Object.keys(a).length && ((e.bag = Ve(e.bag, a, {})), (e.at.bag = r));
  let o = B(n.bagBook);
  return (o?.length && (e.book = V(e.book, o)), !0);
}
function Qe(e, t, n = 0) {
  let r = z(t.bag);
  if (r && Object.keys(r).length) {
    let t = { ...(e.bag ?? {}) };
    for (let [e, n] of Object.entries(r)) t[e] = Math.min(100, (t[e] ?? 0) + n);
    ((e.bag = z(t) ?? {}), (e.at.bag = Math.max(e.at.bag ?? 0, n)));
  }
  let i = V(e.book, V(B(t.bagBook), r ? Object.keys(r) : []));
  i.length && (e.book = i);
}
function $e(e) {
  let t = Fe(e.now),
    r = Object.keys(w).filter((t) => E(e.saves[t])),
    i = r.filter((t) => !A(e.saves[t]));
  for (let n of i) (Xe(t, n, e.saves[n]), Ze(t, n, e.saves[n], e.now));
  (!i.length &&
    r.length &&
    I(t, `mirror`, Math.max(...r.map((t) => P(j(e.saves[t]), t)))),
    r.length || I(t, `start`, F(e.here)));
  let a = r
      .filter((e) => !h(e))
      .sort(
        (t, n) =>
          Ye(e.saves[n]) - Ye(e.saves[t]) || +(n === e.at) - (t === e.at),
      ),
    o = a[0];
  if (!o) return t;
  let s = e.saves[o],
    c = Ye(s);
  ((t.settings = R(s.settings)), (t.at.settings = c));
  let l = E(s.player) ? s.player : {},
    u = e.prefs?.[o],
    d = n(l.character)
      ? l.character
      : E(u) && n(u.character)
        ? u.character
        : void 0;
  (d && (t.player.character = d), k(l.outfit) && (t.player.outfit = l.outfit));
  let f;
  for (let t of a) {
    let n = L(E(e.saves[t]) ? e.saves[t].player?.loadout : void 0);
    if (n) {
      if (!f) {
        f = n;
        continue;
      }
      for (let e of n.owned)
        f.owned.includes(e) ||
          (f.owned.push(e),
          n.ammo[e] !== void 0 && (f.ammo[e] = n.ammo[e]),
          n.mag[e] !== void 0 && (f.mag[e] = n.mag[e]));
    }
  }
  (f && (t.player.loadout = f), (t.at.player = c));
  let p = He({ hour: s.hour, day: s.day, startDate: s.startDate });
  return (p && (t.clock = we(p, o)), (t.at.clock = c), t);
}
function et(e, t, n) {
  if (h(n)) return tt(e, t, n);
  let r =
    n === `tokyo`
      ? typeof e.langJa == `boolean`
        ? e.langJa
        : E(e.settings) && typeof e.settings.lang == `string`
          ? e.settings.lang === `ja`
          : void 0
      : void 0;
  if (n === `tokyo`) {
    let r = A(e) ? ze(e) : j(e) % 5;
    ((e.yenChange = r), (e.money = N(t.wallet.ntd, n) + r));
  } else if (n === `mumbai`) {
    let r = A(e) ? Le(e) : `money` in e ? j(e) % 3 : Ie(t);
    ((e.rupeeChange = r), (e.money = N(t.wallet.ntd, n) + r));
  } else e.money = N(t.wallet.ntd, n);
  (Object.keys(t.settings).length &&
    (e.settings = { ...(E(e.settings) ? e.settings : {}), ...t.settings }),
    r !== void 0 &&
      ((e.langJa = r),
      r &&
        (e.settings = { ...(E(e.settings) ? e.settings : {}), lang: `ja` })));
  let i = E(e.player) ? { ...e.player } : {};
  if (
    (t.player.character && (i.character = t.player.character),
    t.player.outfit !== void 0 && (i.outfit = t.player.outfit),
    t.player.loadout && (i.loadout = U(t.player.loadout)),
    Object.keys(i).length && (e.player = i),
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = V(B(e.bagBook), t.book)),
    t.clock)
  ) {
    let r = Ce(t.clock, n);
    (r.hour !== void 0 && (e.hour = r.hour),
      (e.day = r.day),
      r.startDate && (e.startDate = r.startDate));
  } else
    t.clock &&
      (t.clock.hour !== void 0 && (e.hour = t.clock.hour),
      (e.day = t.clock.day),
      t.clock.startDate && (e.startDate = t.clock.startDate));
  return ((e[Ae] = 1), e);
}
