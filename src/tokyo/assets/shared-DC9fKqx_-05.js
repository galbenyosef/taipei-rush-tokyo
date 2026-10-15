// tokyo/assets/shared-DC9fKqx_ 05 — player
// Lines 2523-2872 of readable/tokyo/assets/shared-DC9fKqx_.pretty.js (statement-aligned).
function Ee(e) {
  if (e === void 0) return;
  let t = { lanes: {} };
  if (!S(e) || !S(e.lanes)) return { ...t, conflict: !0 };
  e.conflict === !0 && (t.conflict = !0);
  let n = Object.entries(e.lanes);
  n.length > 64 && (t.conflict = !0);
  for (let [e, r] of n) {
    if (
      !/^[\w-]{1,40}$/.test(e) ||
      !S(r) ||
      !Number.isSafeInteger(r.revision) ||
      Number(r.revision) < 1 ||
      !Number.isSafeInteger(r.debit) ||
      Number(r.debit) < 0 ||
      !Number.isSafeInteger(r.credit) ||
      Number(r.credit) < 0 ||
      (r.pending !== void 0 &&
        (!S(r.pending) || JSON.stringify(r.pending).length > 8192))
    ) {
      t.conflict = !0;
      continue;
    }
    t.lanes[e] = {
      revision: Number(r.revision),
      debit: Number(r.debit),
      credit: Number(r.credit),
      ...(r.pending === void 0 ? {} : { pending: H(r.pending) }),
    };
  }
  return t;
}
var V = (e) =>
  Array.isArray(e)
    ? `[${e.map(V).join(`,`)}]`
    : S(e)
      ? `{${Object.keys(e)
          .sort()
          .map((t) => `${JSON.stringify(t)}:${V(e[t])}`)
          .join(`,`)}}`
      : (JSON.stringify(e) ?? `null`);
function De(e, t) {
  if (!e && !t) return;
  let n = { lanes: {} };
  for (let r of [e, t])
    if (r) {
      r.conflict && (n.conflict = !0);
      for (let [e, t] of Object.entries(r.lanes)) {
        let r = n.lanes[e];
        if (!r) {
          n.lanes[e] = H(t);
          continue;
        }
        let i = t.revision > r.revision ? t : r,
          a = i === t ? r : t;
        (((t.revision === r.revision && V(t) !== V(r)) ||
          i.debit < a.debit ||
          i.credit < a.credit) &&
          (n.conflict = !0),
          (n.lanes[e] = H(t.revision === r.revision && V(t) > V(r) ? t : i)));
      }
    }
  return (Object.keys(n.lanes).length > 64 && (n.conflict = !0), n);
}
function Oe(e) {
  let t = B(e);
  for (let e of ge) delete t.settings[e];
  return (delete t.adopted, t);
}
function ke(e, t) {
  let n = e ? B(e) : void 0,
    r = t ? B(t) : void 0;
  if ((r && delete r.adopted, n?.adopted)) return r ? Ae(r, n) : void 0;
  if (!n) return r;
  if (!r) return n;
  let i = [n.since, r.since].filter((e) => e > 0),
    a = Se(i.length ? Math.min(...i) : 0);
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
  let o = De(n.wallet.market, r.wallet.market);
  (o && (a.wallet.market = o), (a.wallet.ntd = Math.max(0, k(a.wallet))));
  let s = r.at.player > n.at.player ? r : n;
  ((a.player = H(s.player)), (a.at.player = s.at.player));
  let c = r.at.settings > n.at.settings ? r : n;
  ((a.settings = { ...c.settings }), (a.at.settings = c.at.settings));
  let l = r.at.clock > n.at.clock ? r : n;
  (l.clock && (a.clock = { ...l.clock }), (a.at.clock = l.at.clock));
  let u = n.bag ? (r.bag && (r.at.bag ?? 0) > (n.at.bag ?? 0) ? r : n) : r;
  u.bag && ((a.bag = { ...u.bag }), (a.at.bag = u.at.bag ?? 0));
  for (let e of [n, r])
    for (let t of Object.keys(e.bag ?? {}))
      t.startsWith(`car-`) && ((a.bag ??= {})[t] = 1);
  let d = R(n.book, r.book);
  return (d.length && (a.book = d), Ae(a, n));
}
function Ae(e, t) {
  for (let n of ge) t.settings[n] !== void 0 && (e.settings[n] = t.settings[n]);
  return e;
}
function H(e) {
  return JSON.parse(JSON.stringify(e));
}
var je = (e) => {
  let t =
    S(e) && typeof e.lastPlayedAt == `string`
      ? Date.parse(e.lastPlayedAt)
      : NaN;
  return Number.isFinite(t) ? t : 0;
};
function Me(e, t, n) {
  return !S(n) || D(n) ? !1 : N(e, `fold:${t}:${xe(n)}`, j(O(n), t));
}
function Ne(e) {
  let n = Se(e.now),
    r = Object.keys(x).filter((t) => S(e.saves[t])),
    i = r.filter((t) => !D(e.saves[t]));
  for (let t of i) Me(n, t, e.saves[t]);
  (!i.length &&
    r.length &&
    N(n, `mirror`, Math.max(...r.map((t) => j(O(e.saves[t]), t)))),
    r.length || N(n, `start`, Ce(e.here)));
  let a = [...r].sort(
      (t, n) => je(e.saves[n]) - je(e.saves[t]) || +(n === e.at) - (t === e.at),
    ),
    o = a[0];
  if (!o) return n;
  let s = e.saves[o],
    c = je(s);
  ((n.settings = F(s.settings)), (n.at.settings = c));
  let l = S(s.player) ? s.player : {},
    u = e.prefs?.[o],
    f = t(l.character)
      ? l.character
      : S(u) && t(u.character)
        ? u.character
        : void 0;
  (f && (n.player.character = f), T(l.outfit) && (n.player.outfit = l.outfit));
  let p;
  for (let t of a) {
    let n = P(S(e.saves[t]) ? e.saves[t].player?.loadout : void 0);
    if (n) {
      if (!p) {
        p = n;
        continue;
      }
      for (let e of n.owned)
        p.owned.includes(e) ||
          (p.owned.push(e),
          n.ammo[e] !== void 0 && (p.ammo[e] = n.ammo[e]),
          n.mag[e] !== void 0 && (p.mag[e] = n.mag[e]));
    }
  }
  (p && (n.player.loadout = p), (n.at.player = c));
  let m = z({ hour: s.hour, day: s.day, startDate: s.startDate });
  return (m && (n.clock = Pe(m, -d(o))), (n.at.clock = c), n);
}
function Pe(e, t) {
  if (!t || e.hour === void 0) return e;
  let n = e.hour + t,
    r = Math.floor(n / 24);
  return {
    ...e,
    hour: ((n % 24) + 24) % 24,
    day: Math.max(0, (e.day ?? 0) + r),
  };
}
function Fe(e, t, n) {
  let r =
    n === `tokyo`
      ? typeof e.langJa == `boolean`
        ? e.langJa
        : S(e.settings) && typeof e.settings.lang == `string`
          ? e.settings.lang === `ja`
          : void 0
      : void 0;
  if (n === `tokyo`) {
    let r = D(e) ? M(e) : O(e) % 5;
    ((e.yenChange = r), (e.money = A(t.wallet.ntd, n) + r));
  } else e.money = A(t.wallet.ntd, n);
  (Object.keys(t.settings).length &&
    (e.settings = { ...(S(e.settings) ? e.settings : {}), ...t.settings }),
    r !== void 0 &&
      ((e.langJa = r),
      r &&
        (e.settings = { ...(S(e.settings) ? e.settings : {}), lang: `ja` })));
  let i = S(e.player) ? { ...e.player } : {};
  if (
    (t.player.character && (i.character = t.player.character),
    t.player.outfit !== void 0 && (i.outfit = t.player.outfit),
    t.player.loadout && (i.loadout = H(t.player.loadout)),
    Object.keys(i).length && (e.player = i),
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = R(L(e.bagBook), t.book)),
    t.clock &&
      (t.clock.hour !== void 0 && (e.hour = t.clock.hour),
      (e.day = t.clock.day),
      t.clock.startDate && (e.startDate = t.clock.startDate)),
    t.clock && d(n))
  ) {
    let r = Pe(t.clock, d(n));
    (r.hour !== void 0 && (e.hour = r.hour), (e.day = r.day));
  }
  return ((e[ve] = 1), e);
}
function Ie(e) {
  let t = S(e) ? e : {},
    n = S(t.player) ? t.player : {},
    r = { money: O(t), settings: F(t.settings) };
  (typeof n.character == `string` && (r.character = n.character),
    T(n.outfit) && (r.outfit = n.outfit));
  let i = P(n.loadout);
  i && (r.loadout = i);
  let a = z({ hour: t.hour, day: t.day, startDate: t.startDate });
  a && (r.clock = a);
  let o = I(t.bag);
  return (o && (r.bag = o), r);
}
function Le(e, t, n, r = _e) {
  if (!e || !n) {
    let n = H(t);
    for (let t of e?.owned ?? [])
      !r.includes(t) && !n.owned.includes(t) && n.owned.push(t);
    return n;
  }
  let i = H(e);
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
function Re(e, t, n, r, i, a) {
  if (r === `tokyo`) return ze(e, t, n, i, a);
  let o = O(t),
    s = o === n.money ? 0 : we(e, i, (o - n.money) * x[r], a);
  return ((t.money = A(e.wallet.ntd, r)), (n.money = t.money), s);
}
function ze(e, t, n, r, i) {
  let a = O(t),
    o = 0,
    s = M(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 5);
    ((o = we(e, r, c, i)),
      (s = o === c ? t - c * 5 : Math.max(0, Math.min(4, s))));
  }
  return (
    (t.yenChange = s),
    (t.money = A(e.wallet.ntd, `tokyo`) + s),
    (n.money = t.money),
    o
  );
}
function Be(e, n, r, i, a, o) {
  let s = { money: Re(e, n, r, i, a, o), changed: !1 },
    c = F(n.settings),
    l = !1;
  for (let [t, n] of Object.entries(c))
    r.settings[t] !== n &&
      e.settings[t] !== n &&
      ((e.settings[t] = n), (l = !0));
  ((r.settings = c), l && (e.at.settings = o));
  let u = S(n.player) ? n.player : {},
    f = !1;
  (t(u.character) &&
    u.character !== r.character &&
    (e.player.character !== u.character &&
      ((e.player.character = u.character), (f = !0)),
    (r.character = u.character)),
    T(u.outfit) &&
      u.outfit !== r.outfit &&
      (e.player.outfit !== u.outfit && ((e.player.outfit = u.outfit), (f = !0)),
      (r.outfit = u.outfit)));
  let p = P(u.loadout);
  if (p && JSON.stringify(p) !== JSON.stringify(r.loadout)) {
    let t = Le(e.player.loadout, p, r.loadout);
    (JSON.stringify(t) !== JSON.stringify(e.player.loadout) &&
      ((e.player.loadout = t), (f = !0)),
      (r.loadout = p));
  }
  f && (e.at.player = o);
  let m = I(n.bag),
    h = !1;
  if (m && JSON.stringify(m) !== JSON.stringify(r.bag ?? {})) {
    let t = Te(e.bag, m, r.bag);
    (JSON.stringify(t) !== JSON.stringify(e.bag ?? {}) &&
      ((e.bag = t), (e.at.bag = o), (h = !0)),
      (n.bag = { ...t }),
      (r.bag = { ...t }));
  }
  let g = L(n.bagBook);
  if (g?.length) {
    let t = R(e.book, g);
    (t.length !== (e.book?.length ?? 0) && ((e.book = t), (h = !0)),
      (n.bagBook = [...t]));
  }
  let _ = z({ hour: n.hour, day: n.day, startDate: n.startDate });
  return (
    _ &&
      JSON.stringify(_) !== JSON.stringify(r.clock) &&
      ((e.clock = Pe(_, -d(i))),
      (e.at.clock = o),
      (r.clock = _),
      (s.changed = !0)),
    (n[ve] = 1),
    (s.changed ||= l || f || h),
    s
  );
}
function Ve(e, t) {
  let n = t.depMin / 60 + t.hours;
  t.from && (n -= d(t.from));
  let r = {
    day: (e?.day ?? 0) + +!!t.nextDay + Math.floor(n / 24),
    hour: ((n % 24) + 24) % 24,
  };
  return (e?.startDate && (r.startDate = e.startDate), r);
}
var U = `gta-travel-v1`,
  W = c,
  G = (e, t, n) =>
    typeof e == `number` && Number.isFinite(e) && e >= t && e <= n ? e : null,
  K = (e, t = 40) =>
    typeof e == `string` && e.length > 0 && e.length <= t ? e : null;
