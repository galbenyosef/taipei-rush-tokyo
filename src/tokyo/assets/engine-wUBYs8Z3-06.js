// tokyo/assets/engine-wUBYs8Z3 06 — localstorage
// Lines 1783-2121 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function Ut() {
  let e = N(),
    t = e?.slots[e.active];
  if (!e || !t?.notice) return null;
  let n = t.notice;
  return (delete t.notice, F(M, e), n);
}
function Wt(e, t = M) {
  let n = P(t);
  n?.slots &&
    e !== `guest` &&
    n.active !== e &&
    n.slots[e] &&
    (delete n.slots[e], F(t, n));
}
function Gt() {
  try {
    let e = `taipei-rush-storage-probe`;
    localStorage.setItem(e, `1`);
    let t = localStorage.getItem(e) === `1`;
    return (localStorage.removeItem(e), t);
  } catch {
    return !1;
  }
}
var Kt = !1;
function qt() {
  if (!Kt) {
    Kt = !0;
    try {
      let e = typeof navigator < `u` ? navigator.storage : void 0;
      if (!e?.persist || /Firefox\//.test(navigator.userAgent)) return;
      (e.persisted ? e.persisted() : Promise.resolve(!1))
        .then((t) => t || e.persist())
        .catch(() => {});
    } catch {}
  }
}
function Jt() {
  return N()?.slots[Lt()]?.backups ?? [];
}
function Yt(e, t = !1, n) {
  if (e === null || A(e) || !It()) return null;
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
function Xt() {
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
function Zt(e) {
  return P(e);
}
var Qt = `${j}:paid-v1`,
  $t = () => Lt();
function en() {
  let e = P(Qt);
  return e && typeof e == `object` && !Array.isArray(e)
    ? (e[$t()] ?? null)
    : null;
}
function tn(e) {
  let t = P(Qt),
    n = t && typeof t == `object` && !Array.isArray(t) ? t : {};
  return ((n[$t()] = e), F(Qt, n));
}
function nn(e) {
  let t = localStorage.getItem(e);
  return t === null ? null : JSON.parse(t);
}
function rn(e, t) {
  return F(e, t);
}
function an(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function on() {
  let e = N(),
    t = e ? e.slots[e.active]?.sync : P(At);
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
function sn() {
  let e = N()?.slots[Lt()]?.syncedAt;
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function cn(e) {
  let t = N();
  return t ? ((t.slots[t.active].syncedAt = e), F(M, t)) : !1;
}
function ln(e) {
  let t = N();
  return t ? ((t.slots[t.active].sync = e), F(M, t)) : F(At, e);
}
function un() {
  let e = on();
  e && ln({ ...e, dirty: !0 });
}
function dn() {
  let e = N();
  e && (delete e.slots[e.active].sync, F(M, e));
  try {
    localStorage.removeItem(At);
  } catch {}
}
function fn() {
  let e = P(jt),
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
function pn(e) {
  let t = { ...fn(), ...e };
  for (let e of Object.keys(t)) t[e] === void 0 && delete t[e];
  return F(jt, t);
}
function I() {
  try {
    let e = localStorage.getItem(j);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function mn(e) {
  try {
    if (A(I()) || A(e)) return !1;
    if (e && typeof e == `object` && `settings` in e) {
      let t = e.settings,
        n = Object.fromEntries(
          Pt.filter((e) => t?.[e] !== void 0).map((e) => [e, t[e]]),
        );
      if (!F(Nt, { ...Ft(), ...n })) return !1;
    }
    let t = N();
    return t && ((t.slots[t.active].data = e), !F(M, t))
      ? !1
      : (localStorage.setItem(j, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function hn() {
  try {
    if (A(I())) return;
    let e = N();
    if (e && ((e.slots[e.active].data = null), !F(M, e))) return;
    localStorage.removeItem(j);
  } catch {}
}
var gn = `tokyo-rush-device-v1`;
function _n() {
  try {
    return localStorage.getItem(gn);
  } catch {
    return null;
  }
}
function vn(e) {
  try {
    return (localStorage.setItem(gn, e), !0);
  } catch {
    return !1;
  }
}
function yn() {
  try {
    let e = localStorage.getItem(kt);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function bn(e) {
  try {
    return (localStorage.setItem(kt, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function xn() {
  try {
    localStorage.removeItem(kt);
  } catch {}
}
var Sn = [`jie`, `wen`, `kai`, `mei`];
function Cn(e) {
  return typeof e == `string` && Sn.includes(e);
}
function wn(e, t = `jie`) {
  return Cn(e) ? e : t;
}
function Tn(e) {
  return e === `wen` || e === `mei`;
}
var En = {
  jie: { zh: `阿傑`, en: `Jie` },
  wen: { zh: `小雯`, en: `Wen` },
  kai: { zh: `阿凱`, en: `Kai` },
  mei: { zh: `小美`, en: `Mei` },
};
function Dn(e) {
  return En[wn(e)];
}
function On(e) {
  return e === `jie`
    ? `wen`
    : e === `wen`
      ? `jie`
      : e === `kai`
        ? `mei`
        : `kai`;
}
var kn = 0.25,
  An = 36e5,
  jn = [1, 0.7, 0.45, 0.3, 0.2],
  Mn = jn.length,
  Nn = 200,
  Pn = (e) => typeof e == `string` && e.length > 0 && e.length < 200;
function Fn(e) {
  let t = e.payLog,
    n = {};
  if (!t || typeof t != `object` || Array.isArray(t)) return n;
  for (let [e, r] of Object.entries(t)) {
    if (!Pn(e) || !Array.isArray(r)) continue;
    let t = r
      .filter((e) => typeof e == `number` && Number.isFinite(e))
      .slice(-Mn);
    t.length && (n[e] = t);
  }
  return n;
}
function In(e, t, n = Date.now()) {
  let r = Fn(e)[t];
  return r ? r.filter((e) => n - e < An).length : 0;
}
var Ln = (e) => jn[Math.max(0, Math.min(jn.length - 1, Math.floor(e) || 0))];
function Rn(e, t, n = Date.now()) {
  let r = Fn(e),
    i = Ln((r[t] ?? []).filter((e) => n - e < An).length);
  for (let e of Object.keys(r))
    ((r[e] = r[e].filter((e) => n - e < An)), r[e].length || delete r[e]);
  r[t] = [...(r[t] ?? []), n].slice(-Mn);
  let a = Object.keys(r);
  if (a.length > Nn) {
    a.sort((e, t) => Math.max(...r[e]) - Math.max(...r[t]));
    for (let e of a.slice(0, a.length - Nn)) delete r[e];
  }
  return ((e.payLog = r), i);
}
function zn(e) {
  return Array.isArray(e.claimed) ? e.claimed.filter(Pn) : [];
}
var Bn = (e, t) => zn(e).includes(t);
function Vn(e, t) {
  if (!Pn(t)) return !1;
  let n = zn(e);
  return !n.includes(t) && (n.push(t), (e.claimed = n.slice(-4e3)), !0);
}
function Hn(e, t) {
  let n = new Set(zn(e));
  if (Array.isArray(e.completedMissions))
    for (let t of e.completedMissions) Pn(t) && n.add(`mission:${t}`);
  if (Array.isArray(e.collectibles))
    for (let t of e.collectibles) Pn(t) && n.add(`collectible:${t}`);
  t.claimed = [...n].slice(-4e3);
  let r = Fn(e);
  Object.keys(r).length && (t.payLog = r);
}
function Un(e) {
  return { claimed: zn(e), payLog: Fn(e) };
}
function Wn(e, t) {
  if (!t || typeof t != `object` || Array.isArray(t)) return;
  let n = t,
    r = new Set([...zn(e), ...zn(n)]);
  r.size && (e.claimed = [...r].slice(-4e3));
  let i = Fn(e);
  for (let [e, t] of Object.entries(Fn(n)))
    i[e] = [...new Set([...(i[e] ?? []), ...t])]
      .sort((e, t) => e - t)
      .slice(-Mn);
  Object.keys(i).length && (e.payLog = i);
}
