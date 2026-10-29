// tokyo/assets/controllers-DHBZ_k07 03 — shared
// Lines 821-1081 of readable/tokyo/assets/controllers-DHBZ_k07.pretty.js (statement-aligned).
function G() {
  let e = m(W);
  return e?.slots && typeof e.active == `string`
    ? e
    : { active: `guest`, slots: { guest: { data: x(), backups: [] } } };
}
function K(e) {
  return y(W, e);
}
function q(t) {
  let n = G();
  if (((n.slots[n.active].data = x()), !n.slots[t])) {
    let e = C(n.slots.guest?.data ?? x()),
      r = n.slots.guest?.sync?.userId === t;
    (t !== `guest` && !r && e.shared && (e.shared.adopted = !0),
      (n.slots[t] = { data: e, backups: [] }));
  }
  n.active = t;
  for (let r of e().deleted ?? [])
    r !== t && r !== `guest` && delete n.slots[r];
  return K(n) ? J(n.slots[t].data) : !1;
}
function J(e) {
  try {
    let t = C(e),
      n = G();
    return (
      (n.slots[n.active].data = t),
      !K(n) || !y(`gta-travel-v1`, t)
        ? !1
        : (typeof window < `u` &&
            window.dispatchEvent(new Event(`travel:applied`)),
          !0)
    );
  } catch {
    return !1;
  }
}
function Y(e) {
  let t = C(e);
  return (t.shared?.adopted ? delete t.shared : (t.shared &&= te(t.shared)), t);
}
function ie() {
  let e = [`taipei`, `hong-kong`];
  return (e.push(`tokyo`), e.push(`seoul`), e);
}
async function ae(e, t) {
  if (e !== null || !x().shared?.adopted) return;
  let n = await Promise.all(ie().map((e) => t(e))),
    r = x();
  if (
    r.shared?.adopted &&
    (n.every((e) => e === null) ? delete r.shared.adopted : delete r.shared,
    !J(r))
  )
    throw Error(`Travel storage unavailable`);
}
var oe = {
    readCloudSync() {
      let e = G();
      return e.slots[e.active].sync ?? null;
    },
    writeCloudSync(e) {
      let t = G();
      return ((t.slots[t.active].sync = e), K(t));
    },
    clearCloudSync() {
      let e = G();
      (delete e.slots[e.active].sync, K(e));
    },
    backupSave(e) {
      let t = G(),
        n = {
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          data: e,
        };
      return (
        (t.slots[t.active].backups = [n, ...t.slots[t.active].backups].slice(
          0,
          3,
        )),
        K(t) ? n : null
      );
    },
  },
  X = `wallet:guarded`;
function Z(e) {
  let t = e?.shared?.wallet?.dev?.[`1`];
  return t && Number.isFinite(t.s) ? t.s : 0;
}
var se;
function Q() {
  return (se ??= new U({
    slot: `travel`,
    storage: oe,
    local: x,
    sanitize: Y,
    loaded: ae,
    merge: (e, t) => {
      let n = C(e),
        r = T(n, C(t)),
        i = Z(r) - Z(n);
      return (
        i >= 1 &&
          typeof window < `u` &&
          window.dispatchEvent(new CustomEvent(X, { detail: { ntd: i } })),
        r
      );
    },
    session: () => D(!1),
    apply: (e) => {
      if (!J(e)) throw Error(`Travel storage unavailable`);
    },
  }));
}
async function ce(e) {
  let t = Q();
  t.connectedTo(e.user_id) || (await t.connect(e));
}
async function le() {
  let e = Q();
  E() && (e.markDirty(), await e.flushForNavigation());
}
function $(e) {
  let t = (e) => {
      throw Object.assign(Error(e), { code: e });
    },
    n = E(),
    r = n?.anonymous === !1 ? n.user_id : `guest`;
  (!n || n.user_id !== e || i() !== r || G().active !== r) &&
    t(`session_expired`);
  let o = x().shared;
  ((a() || !o || o.adopted || o.wallet.market) && t(`wallet_recovery_required`),
    Q().isReadyFor(e) || t(`cloud_not_ready`));
}
async function ue(e) {
  $(e);
  let t = Q();
  t.markDirty();
  let n = await t.flushNow();
  if (($(e), !n))
    throw Object.assign(Error(`cloud_not_ready`), { code: `cloud_not_ready` });
}
async function de(e, t) {
  $(e);
  let n = j(t);
  if (n && n.data.shared === void 0) {
    (await Q().acceptExternal(e, n, () => $(e)), $(e));
    return;
  }
  let r = n && C(n.data).shared,
    i = n?.data.shared,
    a = i?.wallet?.dev?.[`0`];
  if (
    !n ||
    !r ||
    r.adopted ||
    r.wallet.market ||
    i?.wallet?.ntd !== r.wallet.ntd ||
    (a && (a.e !== r.wallet.dev[0]?.e || a.s !== r.wallet.dev[0]?.s))
  )
    throw Object.assign(Error(`invalid_response`), {
      code: `invalid_response`,
    });
  (await Q().acceptExternal(e, n, () => $(e)), $(e));
}
function fe(e, t, n) {
  let r = structuredClone(e);
  r.travel && typeof r.travel == `object` && delete r.travel.arrivalOnly;
  let i = C(t),
    a = ne(r),
    o = i.shared?.wallet.seeds ?? {},
    s = [
      ...(i.resolved ?? []).map((e) => ({ ...e, pending: !1 })),
      ...(i.ticket
        ? [
            {
              ticket: i.ticket,
              status: `pending`,
              at: i.ticket.issued,
              pending: !0,
            },
          ]
        : []),
    ];
  for (let e of s.sort((e, t) => e.at - t.at)) {
    let t = e.ticket,
      i = !a && t.v !== 2,
      s = r.travel && typeof r.travel == `object` ? r.travel : {};
    if (
      (t.to === n &&
        e.status === `arrived` &&
        (i && o[`ticket:${t.id}`] === void 0 ? b(r, t) : S(r, t)),
      t.from !== n)
    )
      continue;
    let c = Array.isArray(s.paid)
        ? s.paid.filter((e) => typeof e == `string`)
        : [],
      l = Array.isArray(s.refunded)
        ? s.refunded.filter((e) => typeof e == `string`)
        : [],
      u = s.out === t.id || c.includes(t.id);
    (e.status === `cancelled`
      ? (i &&
          u &&
          !l.includes(t.id) &&
          o[`refund:${t.id}`] === void 0 &&
          (r.money = Number(r.money ?? 500) + t.fare + t.cash),
        l.includes(t.id) || l.push(t.id))
      : i &&
        !u &&
        !l.includes(t.id) &&
        (r.money = Math.max(0, Number(r.money ?? 500) - t.fare - t.cash)),
      c.includes(t.id) || c.push(t.id),
      (r.travel = {
        ...s,
        paid: c.slice(-20),
        refunded: l.slice(-20),
        out: e.pending ? t.id : void 0,
      }));
  }
  return r;
}
function pe(e) {
  let t = v.sanitize(e),
    n = { ...t.settings };
  for (let e of r) delete n[e];
  let i = { ...t, settings: n },
    a = i.travel;
  if (a && typeof a == `object` && `arrivalOnly` in a) {
    let { arrivalOnly: e, ...t } = a;
    i.travel = t;
  }
  return i;
}
function me(e) {
  let t = v.sanitize(e),
    n = { ...d()?.settings, ...p() };
  for (let e of r) {
    let r = n[e];
    r !== void 0 && (t.settings[e] = r);
  }
  return fe(t, x(), re);
}
var he;
function ge() {
  return (he ??= new U({
    local: () => {
      let e = d();
      return e && typeof e == `object` && !Array.isArray(e) ? e : null;
    },
    sanitize: pe,
    adopt: me,
    session: () => D(!1),
    apply: (e) => {
      if (!_(e)) throw Error(`City storage unavailable`);
    },
  }));
}
