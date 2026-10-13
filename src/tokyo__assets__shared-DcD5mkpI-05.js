// tokyo__assets__shared-DcD5mkpI 05 — player
// Lines 2479-2826 of readable/tokyo__assets__shared-DcD5mkpI.pretty.js (statement-aligned).
function Ee(e) {
  if (e === void 0) return;
  let t = { lanes: {} };
  if (!b(e) || !b(e.lanes)) return { ...t, conflict: !0 };
  e.conflict === !0 && (t.conflict = !0);
  let n = Object.entries(e.lanes);
  n.length > 64 && (t.conflict = !0);
  for (let [e, r] of n) {
    if (
      !/^[\w-]{1,40}$/.test(e) ||
      !b(r) ||
      !Number.isSafeInteger(r.revision) ||
      Number(r.revision) < 1 ||
      !Number.isSafeInteger(r.debit) ||
      Number(r.debit) < 0 ||
      !Number.isSafeInteger(r.credit) ||
      Number(r.credit) < 0 ||
      (r.pending !== void 0 &&
        (!b(r.pending) || JSON.stringify(r.pending).length > 8192))
    ) {
      t.conflict = !0;
      continue;
    }
    t.lanes[e] = {
      revision: Number(r.revision),
      debit: Number(r.debit),
      credit: Number(r.credit),
      ...(r.pending === void 0 ? {} : { pending: B(r.pending) }),
    };
  }
  return t;
}
var z = (e) =>
  Array.isArray(e)
    ? `[${e.map(z).join(`,`)}]`
    : b(e)
      ? `{${Object.keys(e)
          .sort()
          .map((t) => `${JSON.stringify(t)}:${z(e[t])}`)
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
          n.lanes[e] = B(t);
          continue;
        }
        let i = t.revision > r.revision ? t : r,
          a = i === t ? r : t;
        (((t.revision === r.revision && z(t) !== z(r)) ||
          i.debit < a.debit ||
          i.credit < a.credit) &&
          (n.conflict = !0),
          (n.lanes[e] = B(t.revision === r.revision && z(t) > z(r) ? t : i)));
      }
    }
  return (Object.keys(n.lanes).length > 64 && (n.conflict = !0), n);
}
function Oe(e) {
  let t = R(e);
  for (let e of ge) delete t.settings[e];
  return (delete t.adopted, t);
}
function ke(e, t) {
  let n = e ? R(e) : void 0,
    r = t ? R(t) : void 0;
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
  (o && (a.wallet.market = o), (a.wallet.ntd = Math.max(0, D(a.wallet))));
  let s = r.at.player > n.at.player ? r : n;
  ((a.player = B(s.player)), (a.at.player = s.at.player));
  let c = r.at.settings > n.at.settings ? r : n;
  ((a.settings = { ...c.settings }), (a.at.settings = c.at.settings));
  let l = r.at.clock > n.at.clock ? r : n;
  (l.clock && (a.clock = { ...l.clock }), (a.at.clock = l.at.clock));
  let u = n.bag ? (r.bag && (r.at.bag ?? 0) > (n.at.bag ?? 0) ? r : n) : r;
  u.bag && ((a.bag = { ...u.bag }), (a.at.bag = u.at.bag ?? 0));
  let d = I(n.book, r.book);
  return (d.length && (a.book = d), Ae(a, n));
}
function Ae(e, t) {
  for (let n of ge) t.settings[n] !== void 0 && (e.settings[n] = t.settings[n]);
  return e;
}
function B(e) {
  return JSON.parse(JSON.stringify(e));
}
var V = (e) => {
  let t =
    b(e) && typeof e.lastPlayedAt == `string`
      ? Date.parse(e.lastPlayedAt)
      : NaN;
  return Number.isFinite(t) ? t : 0;
};
function je(e, t, n) {
  return !b(n) || T(n) ? !1 : j(e, `fold:${t}:${xe(n)}`, k(E(n), t));
}
function Me(e) {
  let t = Se(e.now),
    n = Object.keys(y).filter((t) => b(e.saves[t])),
    r = n.filter((t) => !T(e.saves[t]));
  for (let n of r) je(t, n, e.saves[n]);
  (!r.length &&
    n.length &&
    j(t, `mirror`, Math.max(...n.map((t) => k(E(e.saves[t]), t)))),
    n.length || j(t, `start`, Ce(e.here)));
  let i = [...n].sort(
      (t, n) => V(e.saves[n]) - V(e.saves[t]) || +(n === e.at) - (t === e.at),
    ),
    a = i[0];
  if (!a) return t;
  let o = e.saves[a],
    s = V(o);
  ((t.settings = N(o.settings)), (t.at.settings = s));
  let c = b(o.player) ? o.player : {},
    u = e.prefs?.[a],
    d =
      c.character === `jie` || c.character === `wen`
        ? c.character
        : b(u) && (u.character === `jie` || u.character === `wen`)
          ? u.character
          : void 0;
  (d && (t.player.character = d), C(c.outfit) && (t.player.outfit = c.outfit));
  let f;
  for (let t of i) {
    let n = M(b(e.saves[t]) ? e.saves[t].player?.loadout : void 0);
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
  (f && (t.player.loadout = f), (t.at.player = s));
  let p = L({ hour: o.hour, day: o.day, startDate: o.startDate });
  return (p && (t.clock = H(p, -l(a))), (t.at.clock = s), t);
}
function H(e, t) {
  if (!t || e.hour === void 0) return e;
  let n = e.hour + t,
    r = Math.floor(n / 24);
  return {
    ...e,
    hour: ((n % 24) + 24) % 24,
    day: Math.max(0, (e.day ?? 0) + r),
  };
}
function Ne(e, t, n) {
  let r =
    n === `tokyo`
      ? typeof e.langJa == `boolean`
        ? e.langJa
        : b(e.settings) && typeof e.settings.lang == `string`
          ? e.settings.lang === `ja`
          : void 0
      : void 0;
  if (n === `tokyo`) {
    let r = T(e) ? A(e) : E(e) % 5;
    ((e.yenChange = r), (e.money = O(t.wallet.ntd, n) + r));
  } else e.money = O(t.wallet.ntd, n);
  (Object.keys(t.settings).length &&
    (e.settings = { ...(b(e.settings) ? e.settings : {}), ...t.settings }),
    r !== void 0 &&
      ((e.langJa = r),
      r &&
        (e.settings = { ...(b(e.settings) ? e.settings : {}), lang: `ja` })));
  let i = b(e.player) ? { ...e.player } : {};
  if (
    (t.player.character && (i.character = t.player.character),
    t.player.outfit !== void 0 && (i.outfit = t.player.outfit),
    t.player.loadout && (i.loadout = B(t.player.loadout)),
    Object.keys(i).length && (e.player = i),
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = I(F(e.bagBook), t.book)),
    t.clock &&
      (t.clock.hour !== void 0 && (e.hour = t.clock.hour),
      (e.day = t.clock.day),
      t.clock.startDate && (e.startDate = t.clock.startDate)),
    t.clock && l(n))
  ) {
    let r = H(t.clock, l(n));
    (r.hour !== void 0 && (e.hour = r.hour), (e.day = r.day));
  }
  return ((e[ve] = 1), e);
}
function Pe(e) {
  let t = b(e) ? e : {},
    n = b(t.player) ? t.player : {},
    r = { money: E(t), settings: N(t.settings) };
  (typeof n.character == `string` && (r.character = n.character),
    C(n.outfit) && (r.outfit = n.outfit));
  let i = M(n.loadout);
  i && (r.loadout = i);
  let a = L({ hour: t.hour, day: t.day, startDate: t.startDate });
  a && (r.clock = a);
  let o = P(t.bag);
  return (o && (r.bag = o), r);
}
function Fe(e, t, n, r = _e) {
  if (!e || !n) {
    let n = B(t);
    for (let t of e?.owned ?? [])
      !r.includes(t) && !n.owned.includes(t) && n.owned.push(t);
    return n;
  }
  let i = B(e);
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
function Ie(e, t, n, r, i, a) {
  if (r === `tokyo`) return Le(e, t, n, i, a);
  let o = E(t),
    s = o === n.money ? 0 : we(e, i, (o - n.money) * y[r], a);
  return ((t.money = O(e.wallet.ntd, r)), (n.money = t.money), s);
}
function Le(e, t, n, r, i) {
  let a = E(t),
    o = 0,
    s = A(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 5);
    ((o = we(e, r, c, i)),
      (s = o === c ? t - c * 5 : Math.max(0, Math.min(4, s))));
  }
  return (
    (t.yenChange = s),
    (t.money = O(e.wallet.ntd, `tokyo`) + s),
    (n.money = t.money),
    o
  );
}
function Re(e, t, n, r, i, a) {
  let o = { money: Ie(e, t, n, r, i, a), changed: !1 },
    s = N(t.settings),
    c = !1;
  for (let [t, r] of Object.entries(s))
    n.settings[t] !== r &&
      e.settings[t] !== r &&
      ((e.settings[t] = r), (c = !0));
  ((n.settings = s), c && (e.at.settings = a));
  let u = b(t.player) ? t.player : {},
    d = !1;
  ((u.character === `jie` || u.character === `wen`) &&
    u.character !== n.character &&
    (e.player.character !== u.character &&
      ((e.player.character = u.character), (d = !0)),
    (n.character = u.character)),
    C(u.outfit) &&
      u.outfit !== n.outfit &&
      (e.player.outfit !== u.outfit && ((e.player.outfit = u.outfit), (d = !0)),
      (n.outfit = u.outfit)));
  let f = M(u.loadout);
  if (f && JSON.stringify(f) !== JSON.stringify(n.loadout)) {
    let t = Fe(e.player.loadout, f, n.loadout);
    (JSON.stringify(t) !== JSON.stringify(e.player.loadout) &&
      ((e.player.loadout = t), (d = !0)),
      (n.loadout = f));
  }
  d && (e.at.player = a);
  let p = P(t.bag),
    m = !1;
  if (p && JSON.stringify(p) !== JSON.stringify(n.bag ?? {})) {
    let r = Te(e.bag, p, n.bag);
    (JSON.stringify(r) !== JSON.stringify(e.bag ?? {}) &&
      ((e.bag = r), (e.at.bag = a), (m = !0)),
      (t.bag = { ...r }),
      (n.bag = { ...r }));
  }
  let h = F(t.bagBook);
  if (h?.length) {
    let n = I(e.book, h);
    (n.length !== (e.book?.length ?? 0) && ((e.book = n), (m = !0)),
      (t.bagBook = [...n]));
  }
  let g = L({ hour: t.hour, day: t.day, startDate: t.startDate });
  return (
    g &&
      JSON.stringify(g) !== JSON.stringify(n.clock) &&
      ((e.clock = H(g, -l(r))),
      (e.at.clock = a),
      (n.clock = g),
      (o.changed = !0)),
    (t[ve] = 1),
    (o.changed ||= c || d || m),
    o
  );
}
function ze(e, t) {
  let n = t.depMin / 60 + t.hours;
  t.from && (n -= l(t.from));
  let r = {
    day: (e?.day ?? 0) + +!!t.nextDay + Math.floor(n / 24),
    hour: ((n % 24) + 24) % 24,
  };
  return (e?.startDate && (r.startDate = e.startDate), r);
}
var U = `gta-travel-v1`,
  W = o,
  G = (e, t, n) =>
    typeof e == `number` && Number.isFinite(e) && e >= t && e <= n ? e : null,
  K = (e, t = 40) =>
    typeof e == `string` && e.length > 0 && e.length <= t ? e : null;
