// tokyo/assets/engine-14d5lda2 06 — slots
// Lines 1786-2135 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function Zt() {
  if (N()) return !0;
  let e = Pn(),
    t = xn(),
    n =
      e?.anonymous === !1 && !Dn().signedOut && t?.userId === e.user_id
        ? e.user_id
        : `guest`,
    r = I();
  return F(M, {
    active: n,
    slots: { [n]: { data: r, backups: [], ...(t ? { sync: t } : {}) } },
  });
}
function Qt() {
  return N()?.active ?? `guest`;
}
function $t(e) {
  return N()?.slots[e]?.data ?? null;
}
function en(e) {
  if (e === `tokyo-rush-save-v1`) return P(e);
  let t = P(`${e}:identities-v1`),
    n = Qt();
  return t?.active === n
    ? P(e)
    : (t?.slots?.[n]?.data ?? (n === `guest` && !t ? P(e) : null));
}
function tn(e, t = !1) {
  if (!Zt()) return !1;
  let n = N();
  if (A(I()) || A(n.slots[e]?.data)) return !1;
  if (e === n.active) return !0;
  let r = I();
  n.slots[n.active].data = r;
  let i = n.slots.guest,
    a = !n.slots[e],
    o = n.slots[e] ?? { data: i?.data ?? null, backups: [] };
  (a && e !== `guest` && o.data !== null && (o.adopted = !0),
    t && i?.sync?.userId === e && ((o.sync = i.sync), delete o.adopted),
    (n.slots[e] = o),
    (n.active = e));
  for (let t of Dn().deleted ?? [])
    t !== e && t !== `guest` && delete n.slots[t];
  let s = N();
  if (!F(M, n)) return !1;
  try {
    return (
      o.data === null
        ? localStorage.removeItem(j)
        : localStorage.setItem(j, JSON.stringify(o.data)),
      !0
    );
  } catch {
    return (F(M, s), !1);
  }
}
function nn() {
  let e = N(),
    t = e?.slots[e.active];
  return !!t && t.adopted === !0 && t.sync?.userId !== e.active;
}
function rn(e) {
  let t = N();
  if (!t) return !1;
  let n = t.slots[t.active];
  return (delete n.adopted, e && (n.notice = e), F(M, t));
}
function an() {
  let e = N(),
    t = e?.slots[e.active];
  if (!e || !t?.notice) return null;
  let n = t.notice;
  return (delete t.notice, F(M, e), n);
}
function on(e, t = M) {
  let n = P(t);
  n?.slots &&
    e !== `guest` &&
    n.active !== e &&
    n.slots[e] &&
    (delete n.slots[e], F(t, n));
}
function sn() {
  try {
    let e = `taipei-rush-storage-probe`;
    localStorage.setItem(e, `1`);
    let t = localStorage.getItem(e) === `1`;
    return (localStorage.removeItem(e), t);
  } catch {
    return !1;
  }
}
var cn = !1;
function ln() {
  if (!cn) {
    cn = !0;
    try {
      let e = typeof navigator < `u` ? navigator.storage : void 0;
      if (!e?.persist || /Firefox\//.test(navigator.userAgent)) return;
      (e.persisted ? e.persisted() : Promise.resolve(!1))
        .then((t) => t || e.persist())
        .catch(() => {});
    } catch {}
  }
}
function un() {
  return N()?.slots[Qt()]?.backups ?? [];
}
function dn(e, t = !1, n) {
  if (e === null || A(e) || !Zt()) return null;
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
function fn() {
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
function pn(e) {
  return P(e);
}
var mn = `${j}:paid-v1`,
  hn = () => Qt();
function gn() {
  let e = P(mn);
  return e && typeof e == `object` && !Array.isArray(e)
    ? (e[hn()] ?? null)
    : null;
}
function _n(e) {
  let t = P(mn),
    n = t && typeof t == `object` && !Array.isArray(t) ? t : {};
  return ((n[hn()] = e), F(mn, n));
}
function vn(e) {
  let t = localStorage.getItem(e);
  return t === null ? null : JSON.parse(t);
}
function yn(e, t) {
  return F(e, t);
}
function bn(e) {
  try {
    localStorage.removeItem(e);
  } catch {}
}
function xn() {
  let e = N(),
    t = e ? e.slots[e.active]?.sync : P(Gt);
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
function Sn() {
  let e = N()?.slots[Qt()]?.syncedAt;
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function Cn(e) {
  let t = N();
  return t ? ((t.slots[t.active].syncedAt = e), F(M, t)) : !1;
}
function wn(e) {
  let t = N();
  return t ? ((t.slots[t.active].sync = e), F(M, t)) : F(Gt, e);
}
function Tn() {
  let e = xn();
  e && wn({ ...e, dirty: !0 });
}
function En() {
  let e = N();
  e && (delete e.slots[e.active].sync, F(M, e));
  try {
    localStorage.removeItem(Gt);
  } catch {}
}
function Dn() {
  let e = P(Kt),
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
function On(e) {
  let t = { ...Dn(), ...e };
  for (let e of Object.keys(t)) t[e] === void 0 && delete t[e];
  return F(Kt, t);
}
function I() {
  try {
    let e = localStorage.getItem(j);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function kn(e) {
  try {
    if (A(I()) || A(e)) return !1;
    if (e && typeof e == `object` && `settings` in e) {
      let t = e.settings,
        n = Object.fromEntries(
          Yt.filter((e) => t?.[e] !== void 0).map((e) => [e, t[e]]),
        );
      if (!F(Jt, { ...Xt(), ...n })) return !1;
    }
    let t = N();
    return t && ((t.slots[t.active].data = e), !F(M, t))
      ? !1
      : (localStorage.setItem(j, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function An() {
  try {
    if (A(I())) return;
    let e = N();
    if (e && ((e.slots[e.active].data = null), !F(M, e))) return;
    localStorage.removeItem(j);
  } catch {}
}
var jn = `tokyo-rush-device-v1`;
function Mn() {
  try {
    return localStorage.getItem(jn);
  } catch {
    return null;
  }
}
function Nn(e) {
  try {
    return (localStorage.setItem(jn, e), !0);
  } catch {
    return !1;
  }
}
function Pn() {
  try {
    let e = localStorage.getItem(Wt);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function Fn(e) {
  try {
    return (localStorage.setItem(Wt, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function In() {
  try {
    localStorage.removeItem(Wt);
  } catch {}
}
var Ln = [`jie`, `wen`, `kai`, `mei`];
function Rn(e) {
  return typeof e == `string` && Ln.includes(e);
}
function zn(e, t = `jie`) {
  return Rn(e) ? e : t;
}
function Bn(e) {
  return e === `wen` || e === `mei`;
}
var Vn = {
  jie: { zh: `阿傑`, en: `Jie` },
  wen: { zh: `小雯`, en: `Wen` },
  kai: { zh: `阿凱`, en: `Kai` },
  mei: { zh: `小美`, en: `Mei` },
};
function Hn(e) {
  return Vn[zn(e)];
}
function Un(e) {
  return e === `jie`
    ? `wen`
    : e === `wen`
      ? `jie`
      : e === `kai`
        ? `mei`
        : `kai`;
}
var Wn,
  Gn = null,
  Kn;
function qn() {
  try {
    let e = navigator.languages?.[0] || navigator.language || ``;
    return /^zh(?:[-_](?:tw|hant)(?:[-_]|$)|$)/i.test(e) ? `zh` : `en`;
  } catch {
    return `en`;
  }
}
function Jn() {
  return Wn ?? qn();
}
