// tokyo__assets__accounts-CpfgQQfK 02 — error
// Lines 347-678 of readable/tokyo__assets__accounts-CpfgQQfK.pretty.js (statement-aligned).
async function F(e) {
  let t = await P(e);
  if (!e.ok) {
    let n = String(t?.msg ?? t?.message ?? t?.error_description ?? ``),
      r = Number(
        /(\d+)\s*seconds?/i.exec(n)?.[1] ?? e.headers.get(`retry-after`) ?? NaN,
      ),
      i = t?.weak_password,
      a = Array.isArray(i?.reasons)
        ? i.reasons.filter((e) => typeof e == `string`)
        : void 0;
    throw new j(M(N(t), e.status, n), Number.isFinite(r) ? r : void 0, a);
  }
  return t;
}
function ie() {
  return typeof navigator < `u` && navigator.onLine === !1;
}
async function I(e) {
  try {
    return await e();
  } catch (e) {
    return e instanceof j
      ? {
          ok: !1,
          error: e.error,
          ...(e.retryAfter === void 0 ? {} : { retryAfter: e.retryAfter }),
          ...(e.reasons?.length ? { reasons: e.reasons } : {}),
        }
      : { ok: !1, error: `offline` };
  }
}
async function L(t) {
  try {
    return await s(e.siteKey, t);
  } catch {
    throw new j(ie() ? `offline` : `captcha_failed`);
  }
}
function R(e) {
  let t = new URL(location.href);
  for (let e of Y) t.searchParams.delete(e);
  return (t.searchParams.set(`auth`, e), (t.hash = ``), t.toString());
}
var z = (e, t) =>
  `${e}${e.includes(`?`) ? `&` : `?`}redirect_to=${encodeURIComponent(R(t))}`;
function B() {
  if (!r()) throw new j(`storage_unavailable`);
}
function V() {
  let e = u(),
    t = o();
  return (
    t.pendingPassword === !0 &&
    e?.anonymous === !1 &&
    (!t.pendingUser || t.pendingUser === e.user_id)
  );
}
async function H(e, n) {
  return I(async () => {
    B();
    let r = g(),
      i = await L(`cloud_login`),
      a = await F(
        await p(`token?grant_type=password`, {
          email: e,
          password: n,
          gotrue_meta_security: { captcha_token: i },
        }),
      ),
      o = f(a);
    return !o || r !== _()
      ? { ok: !1, error: `invalid` }
      : (t({ pendingPassword: !1, pending: void 0, expired: void 0 }),
        l(o, `signin`),
        { ok: !0 });
  });
}
function U() {
  return u()?.anonymous === !0 && !d() ? `convert` : `password`;
}
async function W(e, n) {
  return I(async () => {
    B();
    let r = g();
    if (U() === `convert`) {
      let n = await m(!1);
      if (r !== _()) return { ok: !1, error: `invalid` };
      if (n?.anonymous === !0)
        try {
          return (
            await F(await p(z(`user`, `convert`), { email: e }, `PUT`, n))
          )?.id !== n.user_id || r !== _()
            ? { ok: !1, error: `invalid` }
            : (t({
                pendingPassword: !0,
                pendingUser: n.user_id,
                pending: { email: e, kind: `convert`, at: Date.now() },
              }),
              v(),
              { ok: !0, checkEmail: !0 });
        } catch (e) {
          if (!(e instanceof j) || e.error !== `session_expired`) throw e;
        }
    }
    if (!n) return { ok: !1, error: `needs_password` };
    let i = await L(`cloud_signup`),
      a = await F(
        await p(z(`signup`, `confirm`), {
          email: e,
          password: n,
          gotrue_meta_security: { captcha_token: i },
        }),
      );
    if (r !== _()) return { ok: !1, error: `invalid` };
    let o = f(a);
    if (o)
      return (
        t({ pendingPassword: !1, pendingUser: void 0, pending: void 0 }),
        l(o, `signin`),
        { ok: !0 }
      );
    let s = a && typeof a.user == `object` && a.user ? a.user : a;
    return !s || typeof s.id != `string`
      ? { ok: !1, error: `invalid` }
      : Array.isArray(s.identities) && s.identities.length === 0
        ? { ok: !1, error: `email_exists` }
        : (t({ pending: { email: e, kind: `signup`, at: Date.now() } }),
          v(),
          { ok: !0, checkEmail: !0 });
  });
}
async function G(e, n) {
  return I(async () => {
    let r = o().pending,
      i = e ?? r?.email;
    if (!i) return { ok: !1, error: `invalid` };
    let a =
        n === `convert`
          ? `convert`
          : n === `email`
            ? `email_change`
            : n === `confirm`
              ? `signup`
              : r && i === r.email
                ? r.kind
                : `signup`,
      s = a === `convert` ? await m(!1) : null;
    if (s?.anonymous === !0)
      await F(await p(z(`user`, `convert`), { email: i }, `PUT`, s));
    else {
      let e = await L(`cloud_resend`),
        t = a === `signup` ? `signup` : `email_change`;
      await F(
        await p(
          z(
            `resend`,
            a === `signup` ? `confirm` : a === `convert` ? `convert` : `email`,
          ),
          { type: t, email: i, gotrue_meta_security: { captcha_token: e } },
        ),
      );
    }
    return (
      t({ pending: { email: i, kind: a, at: Date.now() } }),
      v(),
      { ok: !0, checkEmail: !0 }
    );
  });
}
function K() {
  (t({ pending: void 0 }), v());
}
async function q(e) {
  return I(async () => {
    let t = await L(`cloud_reset`);
    try {
      await F(
        await p(z(`recover`, `recovery`), {
          email: e,
          gotrue_meta_security: { captcha_token: t },
        }),
      );
    } catch (e) {
      if (
        (e instanceof j &&
          [
            `rate_limited`,
            `email_rate_limited`,
            `captcha_failed`,
            `offline`,
            `email_invalid`,
            `server`,
          ].includes(e.error)) ||
        !(e instanceof j)
      )
        throw e;
    }
    return { ok: !0, checkEmail: !0 };
  });
}
async function J(e, n, r) {
  return I(async () => {
    let i = _(),
      a = n ?? (await m(!1));
    if (!a) return { ok: !1, error: n ? `link_expired` : `session_expired` };
    if (!n && (a.anonymous !== !1 || !a.confirmed))
      return { ok: !1, error: `unconfirmed` };
    let o = await F(
      await p(`user`, { password: e, ...(r ? { nonce: r } : {}) }, `PUT`, a),
    );
    if (o?.id !== a.user_id || i !== _()) return { ok: !1, error: `invalid` };
    if ((t({ pendingPassword: !1, pendingUser: void 0, pending: void 0 }), n)) {
      let e = f({ ...a, user: o }) ?? a;
      l(e, `signin`);
    }
    return (v(), { ok: !0 });
  });
}
async function ae(e, t) {
  return I(async () => {
    let n = u();
    if (!n || n.anonymous !== !1 || !n.email)
      return { ok: !1, error: `session_expired` };
    let r = await L(`cloud_login`),
      i = await F(
        await p(`token?grant_type=password`, {
          email: n.email,
          password: e,
          gotrue_meta_security: { captcha_token: r },
        }),
      ),
      a = f(i);
    if (!a || a.user_id !== n.user_id) return { ok: !1, error: `invalid` };
    (l(a, `restore`),
      p(`logout?scope=local`, void 0, `POST`, n, 5e3).catch(() => {}));
    try {
      await F(await p(`user`, { password: t }, `PUT`, a));
    } catch (e) {
      if (e instanceof j && e.error === `reauthentication_needed`)
        return (
          await F(await p(`reauthenticate`, void 0, `GET`, a)),
          { ok: !1, error: `reauthentication_needed` }
        );
      throw e;
    }
    return { ok: !0 };
  });
}
async function oe(e) {
  return I(async () => {
    let n = await m(!1);
    return !n || n.anonymous !== !1
      ? { ok: !1, error: `session_expired` }
      : (await F(await p(z(`user`, `email`), { email: e }, `PUT`, n)),
        t({ pending: { email: e, kind: `email_change`, at: Date.now() } }),
        v(),
        { ok: !0, checkEmail: !0 });
  });
}
async function se(n) {
  return I(async () => {
    let r = await m(!1);
    if (!r || r.anonymous !== !1 || !r.email)
      return { ok: !1, error: `session_expired` };
    if (n.trim().toLowerCase() !== r.email.toLowerCase())
      return { ok: !1, error: `email_mismatch` };
    let i = await fetch(`${e.url}/rest/v1/rpc/delete_account`, {
        method: `POST`,
        headers: {
          apikey: e.publishableKey,
          Authorization: `Bearer ${r.access_token}`,
          "Content-Type": `application/json`,
          "Content-Profile": `api`,
          "Accept-Profile": `api`,
        },
        body: JSON.stringify({ p_email: n.trim() }),
        signal: AbortSignal.timeout(15e3),
      }),
      a = await P(i).catch(() => null);
    if (!i.ok) {
      let e = String(a?.message ?? ``);
      throw new j(
        /email_mismatch/.test(e)
          ? `email_mismatch`
          : i.status === 401
            ? `session_expired`
            : i.status >= 500
              ? `server`
              : `invalid`,
      );
    }
    if (a?.status !== `deleted`) return { ok: !1, error: `invalid` };
    let s = o().deleted ?? [];
    return (
      t({
        deleted: [...s.filter((e) => e !== r.user_id), r.user_id].slice(-10),
        pending: void 0,
        pendingPassword: !1,
      }),
      c(`deleted`),
      { ok: !0 }
    );
  });
}
async function ce() {
  let e = u();
  if ((c(`signout`), e))
    try {
      await p(`logout?scope=local`, void 0, `POST`, e, 5e3);
    } catch {}
  return { ok: !0 };
}
var Y = [
  `access_token`,
  `refresh_token`,
  `expires_at`,
  `expires_in`,
  `token_type`,
  `type`,
  `error`,
  `error_code`,
  `error_description`,
  `code`,
  `token_hash`,
  `auth`,
  `provider_token`,
  `provider_refresh_token`,
  `sb`,
  `message`,
  `state`,
];
