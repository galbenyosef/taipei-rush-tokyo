// tokyo/assets/controllers-DIi301oL 03 — shared
// Lines 821-1081 of readable/tokyo/assets/controllers-DIi301oL.pretty.js (statement-aligned).
function W() {
  let t = e(U);
  return t?.slots && typeof t.active == `string`
    ? t
    : { active: `guest`, slots: { guest: { data: x(), backups: [] } } };
}
function G(e) {
  return m(U, e);
}
function K(e) {
  let t = W();
  if (((t.slots[t.active].data = x()), !t.slots[e])) {
    let n = S(t.slots.guest?.data ?? x()),
      r = t.slots.guest?.sync?.userId === e;
    (e !== `guest` && !r && n.shared && (n.shared.adopted = !0),
      (t.slots[e] = { data: n, backups: [] }));
  }
  t.active = e;
  for (let n of i().deleted ?? [])
    n !== e && n !== `guest` && delete t.slots[n];
  return G(t) ? q(t.slots[e].data) : !1;
}
function q(e) {
  try {
    let t = S(e),
      n = W();
    return (
      (n.slots[n.active].data = t),
      !G(n) || !m(`gta-travel-v1`, t)
        ? !1
        : (typeof window < `u` &&
            window.dispatchEvent(new Event(`travel:applied`)),
          !0)
    );
  } catch {
    return !1;
  }
}
function J(e) {
  let t = S(e);
  return (t.shared?.adopted ? delete t.shared : (t.shared &&= y(t.shared)), t);
}
function Y() {
  let e = [`taipei`, `hong-kong`];
  return (e.push(`tokyo`), e);
}
async function ae(e, t) {
  if (e !== null || !x().shared?.adopted) return;
  let n = await Promise.all(Y().map((e) => t(e))),
    r = x();
  if (
    r.shared?.adopted &&
    (n.every((e) => e === null) ? delete r.shared.adopted : delete r.shared,
    !q(r))
  )
    throw Error(`Travel storage unavailable`);
}
var oe = {
    readCloudSync() {
      let e = W();
      return e.slots[e.active].sync ?? null;
    },
    writeCloudSync(e) {
      let t = W();
      return ((t.slots[t.active].sync = e), G(t));
    },
    clearCloudSync() {
      let e = W();
      (delete e.slots[e.active].sync, G(e));
    },
    backupSave(e) {
      let t = W(),
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
        G(t) ? n : null
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
  return (se ??= new H({
    slot: `travel`,
    storage: oe,
    local: x,
    sanitize: J,
    loaded: ae,
    merge: (e, t) => {
      let n = S(e),
        r = re(n, S(t)),
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
      if (!q(e)) throw Error(`Travel storage unavailable`);
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
  (!n || n.user_id !== e || a() !== r || W().active !== r) &&
    t(`session_expired`);
  let i = x().shared;
  ((l() || !i || i.adopted || i.wallet.market) && t(`wallet_recovery_required`),
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
  let r = n && S(n.data).shared,
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
  let i = S(t),
    a = w(r),
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
        (i && o[`ticket:${t.id}`] === void 0 ? b(r, t) : ne(r, t)),
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
  let t = h.sanitize(e),
    n = { ...t.settings };
  for (let e of o) delete n[e];
  let r = { ...t, settings: n },
    i = r.travel;
  if (i && typeof i == `object` && `arrivalOnly` in i) {
    let { arrivalOnly: e, ...t } = i;
    r.travel = t;
  }
  return r;
}
function me(e) {
  let t = h.sanitize(e),
    n = { ...d()?.settings, ...u() };
  for (let e of o) {
    let r = n[e];
    r !== void 0 && (t.settings[e] = r);
  }
  return fe(t, x(), T);
}
var he;
function ge() {
  return (he ??= new H({
    local: () => {
      let e = d();
      return e && typeof e == `object` && !Array.isArray(e) ? e : null;
    },
    sanitize: pe,
    adopt: me,
    session: () => D(!1),
    apply: (e) => {
      if (!p(e)) throw Error(`City storage unavailable`);
    },
  }));
}
