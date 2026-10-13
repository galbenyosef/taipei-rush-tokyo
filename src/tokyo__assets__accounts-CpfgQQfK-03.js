// tokyo__assets__accounts-CpfgQQfK 03 — route
// Lines 679-861 of readable/tokyo__assets__accounts-CpfgQQfK.pretty.js (statement-aligned).
function le(e) {
  let t = new URL(e),
    n = new URLSearchParams(t.hash.slice(1)),
    r = Y.filter((e) => e !== `auth`),
    i = r.some((e) => n.has(e)) ? n : t.searchParams,
    a = t.searchParams.get(`auth`),
    o = [
      `recovery`,
      `confirm`,
      `convert`,
      `email`,
      `google`,
      `google-link`,
    ].find((e) => e === a),
    s = o === `google` || o === `google-link`,
    c = r.some((e) => i.has(e)),
    l = c || o !== void 0,
    u = i.get(`access_token`),
    d = i.get(`refresh_token`),
    f = Number(i.get(`expires_at`) ?? 0),
    p = i.get(`type`) ?? ``,
    m = i.get(`token_hash`),
    h = s ? i.get(`code`) : null,
    g = s ? i.get(`error`) : null,
    _ = s ? i.get(`error_code`) : null,
    v = i.get(`message`) ?? void 0,
    y;
  if (
    (i.has(`error`) || i.has(`error_code`)
      ? (y = M(
          i.get(`error_code`) ?? i.get(`error`),
          400,
          i.get(`error_description`) ?? ``,
        ))
      : i.has(`code`) && !u && !m && !s && (y = `invalid`),
    l)
  ) {
    for (let e of Y) (n.delete(e), t.searchParams.delete(e));
    t.hash = n.toString() ? `#${n}` : ``;
  }
  return {
    route: o,
    error: y,
    clean: `${t.pathname}${t.search}${t.hash}`,
    touched: l,
    credentials: c,
    ...(h ? { code: h } : {}),
    ...(g ? { oauthError: g } : {}),
    ...(_ ? { oauthErrorCode: _ } : {}),
    ...(u && d
      ? { tokens: { access: u, refresh: d, expires: f, type: p } }
      : {}),
    ...(m ? { tokenHash: { hash: m, type: p || `email` } } : {}),
    ...(v ? { message: v } : {}),
  };
}
var X = `taipei-rush-cloud-recovery-v1`;
function Z() {
  try {
    let e = h(JSON.parse(sessionStorage.getItem(X) ?? `null`));
    return e && e.expires_at > Date.now() / 1e3 + 60 ? e : null;
  } catch {
    return null;
  }
}
function Q(e) {
  try {
    e
      ? sessionStorage.setItem(X, JSON.stringify(e))
      : sessionStorage.removeItem(X);
  } catch {}
}
function ue() {
  Q(null);
}
var $ = { kind: `none` };
function de() {
  $ = { kind: `none` };
}
async function fe() {
  $ = { kind: `none` };
  let e = `confirm`;
  try {
    let n = le(location.href);
    if (!n.touched) {
      let e = Z();
      return (e && ($ = { kind: `recovery`, session: e }), $);
    }
    history.replaceState(history.state, ``, n.clean);
    let r =
      n.route ??
      (n.tokens?.type === `recovery` || n.tokenHash?.type === `recovery`
        ? `recovery`
        : `confirm`);
    if (
      ((e = r),
      (n.route === `google` || n.route === `google-link`) &&
        (n.code || n.oauthError || n.oauthErrorCode))
    )
      return ($ = {
        kind: `oauth`,
        route: n.route,
        outcome: await D(
          n.route,
          n.code ?? null,
          n.oauthError ?? null,
          n.oauthErrorCode ?? null,
        ),
      });
    if (n.error)
      return ($ = {
        kind: `error`,
        route: r,
        error: n.error === `invalid` ? `link_expired` : n.error,
      });
    if (n.message && !n.tokens && !n.tokenHash)
      return ($ = { kind: `partial`, route: r });
    let i = g(),
      a,
      s;
    if (n.tokenHash) {
      let e = await F(
        await p(`verify`, {
          type: n.tokenHash.type,
          token_hash: n.tokenHash.hash,
        }),
      );
      ((a = f(e)), (s = n.tokenHash.type));
    } else if (n.tokens) {
      let e = n.tokens,
        t = e.expires;
      t ||=
        JSON.parse(
          atob(e.access.split(`.`)[1].replace(/-/g, `+`).replace(/_/g, `/`)),
        ).exp ?? 0;
      let r = { access_token: e.access },
        i = await F(await p(`user`, void 0, `GET`, r));
      ((a = f({
        access_token: e.access,
        refresh_token: e.refresh,
        expires_at: t,
        user: i,
      })),
        (s = e.type));
    } else if (n.route && !n.credentials) {
      let e = n.route === `recovery` ? Z() : null;
      return ($ = e ? { kind: `recovery`, session: e } : { kind: `none` });
    } else return ($ = { kind: `error`, route: r, error: `link_expired` });
    if (!a || i !== _())
      return ($ = { kind: `error`, route: r, error: `link_expired` });
    if (r === `recovery` || s === `recovery`)
      return (Q(a), ($ = { kind: `recovery`, session: a }));
    let c = o(),
      u =
        r === `convert` ||
        (s === `email_change` &&
          c.pendingPassword === !0 &&
          (!c.pendingUser || c.pendingUser === a.user_id));
    return (
      t({
        pending: void 0,
        pendingPassword: u,
        pendingUser: u ? a.user_id : void 0,
        expired: void 0,
      }),
      l(a, `signin`),
      ($ = {
        kind: `confirmed`,
        route: r === `confirm` && s === `email_change` ? `email` : r,
        needsPassword: u,
      })
    );
  } catch (t) {
    return ($ = {
      kind: `error`,
      route: e,
      error:
        t instanceof j && ![`invalid`, `session_expired`].includes(t.error)
          ? t.error
          : `link_expired`,
    });
  }
}
