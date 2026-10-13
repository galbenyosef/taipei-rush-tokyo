// tokyo__assets__engine-BuS5QxN0 06 — localstorage
// Lines 1692-2028 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function zt(e, t = !1, n) {
  if (e === null || A(e) || !Ot()) return null;
  let r = N(),
    i = r.slots[r.active],
    a = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      data: e,
      ...(n ? { reason: n } : {}),
    };
  return (
    (i.backups = [a, ...i.backups].slice(0, 3)),
    t && (i.undo = a.id),
    F(M, r) ? a : null
  );
}
function Bt() {
  let e = N();
  if (!e) return null;
  let t = e.slots[e.active],
    n = t.backups.find((e) => e.id === t.undo) ?? null;
  return (delete t.undo, F(M, e), n);
}
function P(e) {
  try {
    let t = localStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function F(e, t) {
  try {
    return (localStorage.setItem(e, JSON.stringify(t)), !0);
  } catch {
    return !1;
  }
}
function Vt(e) {
  return P(e);
}
var Ht = `${j}:paid-v1`,
  Ut = () => kt();
function Wt() {
  let e = P(Ht);
  return e && typeof e == `object` && !Array.isArray(e)
    ? (e[Ut()] ?? null)
    : null;
}
function Gt(e) {
  let t = P(Ht),
    n = t && typeof t == `object` && !Array.isArray(t) ? t : {};
  return ((n[Ut()] = e), F(Ht, n));
}
function Kt(e) {
  let t = localStorage.getItem(e);
  return t === null ? null : JSON.parse(t);
}
function qt(e, t) {
  return F(e, t);
}
function Jt(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function Yt() {
  let e = N(),
    t = e ? e.slots[e.active]?.sync : P(St);
  return t &&
    typeof t.userId == `string` &&
    /^[\da-f-]{36}$/i.test(t.userId) &&
    typeof t.revision == `number` &&
    Number.isSafeInteger(t.revision) &&
    t.revision >= 0 &&
    typeof t.dirty == `boolean`
    ? { userId: t.userId, revision: t.revision, dirty: t.dirty }
    : null;
}
function Xt() {
  let e = N()?.slots[kt()]?.syncedAt;
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function Zt(e) {
  let t = N();
  return t ? ((t.slots[t.active].syncedAt = e), F(M, t)) : !1;
}
function Qt(e) {
  let t = N();
  return t ? ((t.slots[t.active].sync = e), F(M, t)) : F(St, e);
}
function $t() {
  let e = Yt();
  e && Qt({ ...e, dirty: !0 });
}
function en() {
  let e = N();
  e && (delete e.slots[e.active].sync, F(M, e));
  try {
    localStorage.removeItem(St);
  } catch {}
}
function tn() {
  let e = P(Ct),
    t = {
      signedOut: e?.signedOut === !0,
      pendingPassword: e?.pendingPassword === !0,
    },
    n = e?.pending;
  return (
    n &&
      typeof n.email == `string` &&
      [`signup`, `convert`, `email_change`].includes(n.kind) &&
      typeof n.at == `number` &&
      (t.pending = { email: n.email, kind: n.kind, at: n.at }),
    e?.expired &&
      typeof e.expired == `object` &&
      (t.expired =
        typeof e.expired.email == `string` ? { email: e.expired.email } : {}),
    typeof e?.pendingUser == `string` && (t.pendingUser = e.pendingUser),
    Array.isArray(e?.deleted) &&
      (t.deleted = e.deleted.filter((e) => typeof e == `string`).slice(-10)),
    t
  );
}
function nn(e) {
  let t = { ...tn(), ...e };
  for (let e of Object.keys(t)) t[e] === void 0 && delete t[e];
  return F(Ct, t);
}
function I() {
  try {
    let e = localStorage.getItem(j);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function rn(e) {
  try {
    if (A(I()) || A(e)) return !1;
    if (e && typeof e == `object` && `settings` in e) {
      let t = e.settings,
        n = Object.fromEntries(
          Et.filter((e) => t?.[e] !== void 0).map((e) => [e, t[e]]),
        );
      if (!F(Tt, { ...Dt(), ...n })) return !1;
    }
    let t = N();
    return t && ((t.slots[t.active].data = e), !F(M, t))
      ? !1
      : (localStorage.setItem(j, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function an() {
  try {
    if (A(I())) return;
    let e = N();
    if (e && ((e.slots[e.active].data = null), !F(M, e))) return;
    localStorage.removeItem(j);
  } catch {}
}
var on = `tokyo-rush-device-v1`;
function sn() {
  try {
    return localStorage.getItem(on);
  } catch {
    return null;
  }
}
function cn(e) {
  try {
    return (localStorage.setItem(on, e), !0);
  } catch {
    return !1;
  }
}
function ln() {
  try {
    let e = localStorage.getItem(xt);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function un(e) {
  try {
    return (localStorage.setItem(xt, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function dn() {
  try {
    localStorage.removeItem(xt);
  } catch {}
}
var fn = 0.25,
  pn = 36e5,
  mn = [1, 0.7, 0.45, 0.3, 0.2],
  hn = mn.length,
  gn = 200,
  _n = (e) => typeof e == `string` && e.length > 0 && e.length < 200;
function vn(e) {
  let t = e.payLog,
    n = {};
  if (!t || typeof t != `object` || Array.isArray(t)) return n;
  for (let [e, r] of Object.entries(t)) {
    if (!_n(e) || !Array.isArray(r)) continue;
    let t = r
      .filter((e) => typeof e == `number` && Number.isFinite(e))
      .slice(-hn);
    t.length && (n[e] = t);
  }
  return n;
}
function yn(e, t, n = Date.now()) {
  let r = vn(e)[t];
  return r ? r.filter((e) => n - e < pn).length : 0;
}
var bn = (e) => mn[Math.max(0, Math.min(mn.length - 1, Math.floor(e) || 0))];
function xn(e, t, n = Date.now()) {
  let r = vn(e),
    i = bn((r[t] ?? []).filter((e) => n - e < pn).length);
  for (let e of Object.keys(r))
    ((r[e] = r[e].filter((e) => n - e < pn)), r[e].length || delete r[e]);
  r[t] = [...(r[t] ?? []), n].slice(-hn);
  let a = Object.keys(r);
  if (a.length > gn) {
    a.sort((e, t) => Math.max(...r[e]) - Math.max(...r[t]));
    for (let e of a.slice(0, a.length - gn)) delete r[e];
  }
  return ((e.payLog = r), i);
}
function Sn(e) {
  return Array.isArray(e.claimed) ? e.claimed.filter(_n) : [];
}
var Cn = (e, t) => Sn(e).includes(t);
function wn(e, t) {
  if (!_n(t)) return !1;
  let n = Sn(e);
  return !n.includes(t) && (n.push(t), (e.claimed = n.slice(-4e3)), !0);
}
function Tn(e, t) {
  let n = new Set(Sn(e));
  if (Array.isArray(e.completedMissions))
    for (let t of e.completedMissions) _n(t) && n.add(`mission:${t}`);
  if (Array.isArray(e.collectibles))
    for (let t of e.collectibles) _n(t) && n.add(`collectible:${t}`);
  t.claimed = [...n].slice(-4e3);
  let r = vn(e);
  Object.keys(r).length && (t.payLog = r);
}
function En(e) {
  return { claimed: Sn(e), payLog: vn(e) };
}
function Dn(e, t) {
  if (!t || typeof t != `object` || Array.isArray(t)) return;
  let n = t,
    r = new Set([...Sn(e), ...Sn(n)]);
  r.size && (e.claimed = [...r].slice(-4e3));
  let i = vn(e);
  for (let [e, t] of Object.entries(vn(n)))
    i[e] = [...new Set([...(i[e] ?? []), ...t])]
      .sort((e, t) => e - t)
      .slice(-hn);
  Object.keys(i).length && (e.payLog = i);
}
function On(e) {
  if (!(e < 1)) return null;
  let t = Math.round((1 - e) * 100);
  return {
    zh: r.on
      ? r.t(
          `一小時內重複同一份工作 −${t}%`,
          `1時間以内に同じ仕事の繰り返し −${t}%`,
        )
      : `一小時內重複同一份工作 −${t}%`,
    en: `Same job again within the hour −${t}%`,
  };
}
function kn(e, t, n, r, i = Date.now()) {
  let a = Number.isFinite(n) ? Math.max(0, n) : 0;
  r.replay && (a *= fn);
  let o = xn(e, t, i);
  return (
    (a *= o),
    r.blessed && (a *= 1.1),
    { pay: Math.max(0, Math.round(a)), share: o }
  );
}
var An = {
  TWD: {
    code: `TWD`,
    unitsPer: 5,
    symbol: `NT$`,
    name: { zh: `新臺幣`, en: `New Taiwan dollar` },
  },
  JPY: {
    code: `JPY`,
    unitsPer: 1,
    symbol: `¥`,
    name: { zh: `日圓`, en: `Japanese yen` },
  },
};
function jn(e, t) {
  return Math.round(e) * An[t].unitsPer;
}
function Mn(e, t) {
  return Math.floor(e / An[t].unitsPer);
}
var Nn = (e) => e === `zh` || e === `en` || e === `ja`;
function Pn() {
  let e = Fn();
  if (e) return e;
  try {
    let e = I()?.settings?.lang;
    if (Nn(e)) return e;
  } catch {}
  return Ln.lang;
}
function Fn() {
  try {
    let e =
      typeof location < `u`
        ? new URLSearchParams(location.search).get(`lang`)
        : null;
    return Nn(e) ? e : null;
  } catch {
    return null;
  }
}
function In() {
  return `ja`;
}
