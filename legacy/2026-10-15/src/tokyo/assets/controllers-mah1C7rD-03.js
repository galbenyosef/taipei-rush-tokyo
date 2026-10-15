// tokyo/assets/controllers-mah1C7rD 03 — shared
// Lines 821-1066 of readable/tokyo/assets/controllers-mah1C7rD.pretty.js (statement-aligned).
function K() {
  let e = d(G);
  return e?.slots && typeof e.active == `string`
    ? e
    : { active: `guest`, slots: { guest: { data: x(), backups: [] } } };
}
function q(e) {
  return m(G, e);
}
function J(e) {
  let t = K();
  if (((t.slots[t.active].data = x()), !t.slots[e])) {
    let n = S(t.slots.guest?.data ?? x()),
      r = t.slots.guest?.sync?.userId === e;
    (e !== `guest` && !r && n.shared && (n.shared.adopted = !0),
      (t.slots[e] = { data: n, backups: [] }));
  }
  t.active = e;
  for (let n of te().deleted ?? [])
    n !== e && n !== `guest` && delete t.slots[n];
  return q(t) ? Y(t.slots[e].data) : !1;
}
function Y(e) {
  try {
    let t = S(e),
      n = K();
    return (
      (n.slots[n.active].data = t),
      !q(n) || !m(`gta-travel-v1`, t)
        ? !1
        : (typeof window < `u` &&
            window.dispatchEvent(new Event(`travel:applied`)),
          !0)
    );
  } catch {
    return !1;
  }
}
function X(e) {
  let t = S(e);
  return (t.shared?.adopted ? delete t.shared : (t.shared &&= y(t.shared)), t);
}
function Z() {
  let e = [`taipei`, `hong-kong`];
  return (e.push(`tokyo`), e);
}
async function re(e, t) {
  if (e !== null || !x().shared?.adopted) return;
  let n = await Promise.all(Z().map((e) => t(e))),
    r = x();
  if (
    r.shared?.adopted &&
    (n.every((e) => e === null) ? delete r.shared.adopted : delete r.shared,
    !Y(r))
  )
    throw Error(`Travel storage unavailable`);
}
var ie = {
    readCloudSync() {
      let e = K();
      return e.slots[e.active].sync ?? null;
    },
    writeCloudSync(e) {
      let t = K();
      return ((t.slots[t.active].sync = e), q(t));
    },
    clearCloudSync() {
      let e = K();
      (delete e.slots[e.active].sync, q(e));
    },
    backupSave(e) {
      let t = K(),
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
        q(t) ? n : null
      );
    },
  },
  ae;
function Q() {
  return (ae ??= new W({
    slot: `travel`,
    storage: ie,
    local: x,
    sanitize: X,
    loaded: re,
    merge: (e, t) => w(S(e), S(t)),
    session: () => O(!1),
    apply: (e) => {
      if (!Y(e)) throw Error(`Travel storage unavailable`);
    },
  }));
}
async function oe(e) {
  let t = Q();
  t.connectedTo(e.user_id) || (await t.connect(e));
}
async function se() {
  let e = Q();
  D() && (e.markDirty(), await e.flushForNavigation());
}
function $(e) {
  let t = (e) => {
      throw Object.assign(Error(e), { code: e });
    },
    n = D(),
    r = n?.anonymous === !1 ? n.user_id : `guest`;
  (!n || n.user_id !== e || f() !== r || K().active !== r) &&
    t(`session_expired`);
  let i = x().shared;
  ((l() || !i || i.adopted || i.wallet.market) && t(`wallet_recovery_required`),
    Q().isReadyFor(e) || t(`cloud_not_ready`));
}
async function ce(e) {
  $(e);
  let t = Q();
  t.markDirty();
  let n = await t.flushNow();
  if (($(e), !n))
    throw Object.assign(Error(`cloud_not_ready`), { code: `cloud_not_ready` });
}
async function le(e, t) {
  $(e);
  let n = M(t);
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
function ue(e, t, n) {
  let r = structuredClone(e);
  r.travel && typeof r.travel == `object` && delete r.travel.arrivalOnly;
  let i = S(t),
    a = T(r),
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
function de(e) {
  let t = _.sanitize(e),
    n = { ...t.settings };
  for (let e of v) delete n[e];
  let r = { ...t, settings: n },
    i = r.travel;
  if (i && typeof i == `object` && `arrivalOnly` in i) {
    let { arrivalOnly: e, ...t } = i;
    r.travel = t;
  }
  return r;
}
function fe(e) {
  let t = _.sanitize(e),
    n = { ...i()?.settings, ...u() };
  for (let e of v) {
    let r = n[e];
    r !== void 0 && (t.settings[e] = r);
  }
  return ue(t, x(), E);
}
var pe;
function me() {
  return (pe ??= new W({
    local: () => {
      let e = i();
      return e && typeof e == `object` && !Array.isArray(e) ? e : null;
    },
    sanitize: de,
    adopt: fe,
    session: () => O(!1),
    apply: (e) => {
      if (!ee(e)) throw Error(`City storage unavailable`);
    },
  }));
}
