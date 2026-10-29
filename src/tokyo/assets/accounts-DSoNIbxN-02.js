// tokyo/assets/accounts-DSoNIbxN 02 — error
// Lines 348-679 of readable/tokyo/assets/accounts-DSoNIbxN.pretty.js (statement-aligned).
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
async function L(e) {
  try {
    return await v(r.siteKey, e);
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
  if (!t()) throw new j(`storage_unavailable`);
}
function V() {
  let t = l(),
    n = e();
  return (
    n.pendingPassword === !0 &&
    t?.anonymous === !1 &&
    (!n.pendingUser || n.pendingUser === t.user_id)
  );
}
async function H(e, t) {
  return I(async () => {
    B();
    let r = h(),
      i = await L(`cloud_login`),
      a = await F(
        await f(`token?grant_type=password`, {
          email: e,
          password: t,
          gotrue_meta_security: { captcha_token: i },
        }),
      ),
      o = d(a);
    return !o || r !== g()
      ? { ok: !1, error: `invalid` }
      : (n({ pendingPassword: !1, pending: void 0, expired: void 0 }),
        c(o, `signin`),
        { ok: !0 });
  });
}
function U() {
  return l()?.anonymous === !0 && !u() ? `convert` : `password`;
}
async function W(e, t) {
  return I(async () => {
    B();
    let r = h();
    if (U() === `convert`) {
      let t = await p(!1);
      if (r !== g()) return { ok: !1, error: `invalid` };
      if (t?.anonymous === !0)
        try {
          return (
            await F(await f(z(`user`, `convert`), { email: e }, `PUT`, t))
          )?.id !== t.user_id || r !== g()
            ? { ok: !1, error: `invalid` }
            : (n({
                pendingPassword: !0,
                pendingUser: t.user_id,
                pending: { email: e, kind: `convert`, at: Date.now() },
              }),
              _(),
              { ok: !0, checkEmail: !0 });
        } catch (e) {
          if (!(e instanceof j) || e.error !== `session_expired`) throw e;
        }
    }
    if (!t) return { ok: !1, error: `needs_password` };
    let i = await L(`cloud_signup`),
      a = await F(
        await f(z(`signup`, `confirm`), {
          email: e,
          password: t,
          gotrue_meta_security: { captcha_token: i },
        }),
      );
    if (r !== g()) return { ok: !1, error: `invalid` };
    let o = d(a);
    if (o)
      return (
        n({ pendingPassword: !1, pendingUser: void 0, pending: void 0 }),
        c(o, `signin`),
        { ok: !0 }
      );
    let s = a && typeof a.user == `object` && a.user ? a.user : a;
    return !s || typeof s.id != `string`
      ? { ok: !1, error: `invalid` }
      : Array.isArray(s.identities) && s.identities.length === 0
        ? { ok: !1, error: `email_exists` }
        : (n({ pending: { email: e, kind: `signup`, at: Date.now() } }),
          _(),
          { ok: !0, checkEmail: !0 });
  });
}
async function G(t, r) {
  return I(async () => {
    let i = e().pending,
      a = t ?? i?.email;
    if (!a) return { ok: !1, error: `invalid` };
    let o =
        r === `convert`
          ? `convert`
          : r === `email`
            ? `email_change`
            : r === `confirm`
              ? `signup`
              : i && a === i.email
                ? i.kind
                : `signup`,
      s = o === `convert` ? await p(!1) : null;
    if (s?.anonymous === !0)
      await F(await f(z(`user`, `convert`), { email: a }, `PUT`, s));
    else {
      let e = await L(`cloud_resend`),
        t = o === `signup` ? `signup` : `email_change`;
      await F(
        await f(
          z(
            `resend`,
            o === `signup` ? `confirm` : o === `convert` ? `convert` : `email`,
          ),
          { type: t, email: a, gotrue_meta_security: { captcha_token: e } },
        ),
      );
    }
    return (
      n({ pending: { email: a, kind: o, at: Date.now() } }),
      _(),
      { ok: !0, checkEmail: !0 }
    );
  });
}
function K() {
  (n({ pending: void 0 }), _());
}
async function q(e) {
  return I(async () => {
    let t = await L(`cloud_reset`);
    try {
      await F(
        await f(z(`recover`, `recovery`), {
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
async function J(e, t, r) {
  return I(async () => {
    let i = g(),
      a = t ?? (await p(!1));
    if (!a) return { ok: !1, error: t ? `link_expired` : `session_expired` };
    if (!t && (a.anonymous !== !1 || !a.confirmed))
      return { ok: !1, error: `unconfirmed` };
    let o = await F(
      await f(`user`, { password: e, ...(r ? { nonce: r } : {}) }, `PUT`, a),
    );
    if (o?.id !== a.user_id || i !== g()) return { ok: !1, error: `invalid` };
    if ((n({ pendingPassword: !1, pendingUser: void 0, pending: void 0 }), t)) {
      let e = d({ ...a, user: o }) ?? a;
      c(e, `signin`);
    }
    return (_(), { ok: !0 });
  });
}
async function ae(e, t) {
  return I(async () => {
    let n = l();
    if (!n || n.anonymous !== !1 || !n.email)
      return { ok: !1, error: `session_expired` };
    let r = await L(`cloud_login`),
      i = await F(
        await f(`token?grant_type=password`, {
          email: n.email,
          password: e,
          gotrue_meta_security: { captcha_token: r },
        }),
      ),
      a = d(i);
    if (!a || a.user_id !== n.user_id) return { ok: !1, error: `invalid` };
    (c(a, `restore`),
      f(`logout?scope=local`, void 0, `POST`, n, 5e3).catch(() => {}));
    try {
      await F(await f(`user`, { password: t }, `PUT`, a));
    } catch (e) {
      if (e instanceof j && e.error === `reauthentication_needed`)
        return (
          await F(await f(`reauthenticate`, void 0, `GET`, a)),
          { ok: !1, error: `reauthentication_needed` }
        );
      throw e;
    }
    return { ok: !0 };
  });
}
async function oe(e) {
  return I(async () => {
    let t = await p(!1);
    return !t || t.anonymous !== !1
      ? { ok: !1, error: `session_expired` }
      : (await F(await f(z(`user`, `email`), { email: e }, `PUT`, t)),
        n({ pending: { email: e, kind: `email_change`, at: Date.now() } }),
        _(),
        { ok: !0, checkEmail: !0 });
  });
}
async function se(t) {
  return I(async () => {
    let i = await p(!1);
    if (!i || i.anonymous !== !1 || !i.email)
      return { ok: !1, error: `session_expired` };
    if (t.trim().toLowerCase() !== i.email.toLowerCase())
      return { ok: !1, error: `email_mismatch` };
    let a = await fetch(`${r.url}/rest/v1/rpc/delete_account`, {
        method: `POST`,
        headers: {
          apikey: r.publishableKey,
          Authorization: `Bearer ${i.access_token}`,
          "Content-Type": `application/json`,
          "Content-Profile": `api`,
          "Accept-Profile": `api`,
        },
        body: JSON.stringify({ p_email: t.trim() }),
        signal: AbortSignal.timeout(15e3),
      }),
      o = await P(a).catch(() => null);
    if (!a.ok) {
      let e = String(o?.message ?? ``);
      throw new j(
        /email_mismatch/.test(e)
          ? `email_mismatch`
          : a.status === 401
            ? `session_expired`
            : a.status >= 500
              ? `server`
              : `invalid`,
      );
    }
    if (o?.status !== `deleted`) return { ok: !1, error: `invalid` };
    let c = e().deleted ?? [];
    return (
      n({
        deleted: [...c.filter((e) => e !== i.user_id), i.user_id].slice(-10),
        pending: void 0,
        pendingPassword: !1,
      }),
      s(`deleted`),
      { ok: !0 }
    );
  });
}
async function ce() {
  let e = l();
  if ((s(`signout`), e))
    try {
      await f(`logout?scope=local`, void 0, `POST`, e, 5e3);
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
