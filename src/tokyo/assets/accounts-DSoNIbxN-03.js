// tokyo/assets/accounts-DSoNIbxN 03 — route
// Lines 680-862 of readable/tokyo/assets/accounts-DSoNIbxN.pretty.js (statement-aligned).
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
    let e = m(JSON.parse(sessionStorage.getItem(X) ?? `null`));
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
  let t = `confirm`;
  try {
    let r = le(location.href);
    if (!r.touched) {
      let e = Z();
      return (e && ($ = { kind: `recovery`, session: e }), $);
    }
    history.replaceState(history.state, ``, r.clean);
    let i =
      r.route ??
      (r.tokens?.type === `recovery` || r.tokenHash?.type === `recovery`
        ? `recovery`
        : `confirm`);
    if (
      ((t = i),
      (r.route === `google` || r.route === `google-link`) &&
        (r.code || r.oauthError || r.oauthErrorCode))
    )
      return ($ = {
        kind: `oauth`,
        route: r.route,
        outcome: await D(
          r.route,
          r.code ?? null,
          r.oauthError ?? null,
          r.oauthErrorCode ?? null,
        ),
      });
    if (r.error)
      return ($ = {
        kind: `error`,
        route: i,
        error: r.error === `invalid` ? `link_expired` : r.error,
      });
    if (r.message && !r.tokens && !r.tokenHash)
      return ($ = { kind: `partial`, route: i });
    let a = h(),
      o,
      s;
    if (r.tokenHash) {
      let e = await F(
        await f(`verify`, {
          type: r.tokenHash.type,
          token_hash: r.tokenHash.hash,
        }),
      );
      ((o = d(e)), (s = r.tokenHash.type));
    } else if (r.tokens) {
      let e = r.tokens,
        t = e.expires;
      t ||=
        JSON.parse(
          atob(e.access.split(`.`)[1].replace(/-/g, `+`).replace(/_/g, `/`)),
        ).exp ?? 0;
      let n = { access_token: e.access },
        i = await F(await f(`user`, void 0, `GET`, n));
      ((o = d({
        access_token: e.access,
        refresh_token: e.refresh,
        expires_at: t,
        user: i,
      })),
        (s = e.type));
    } else if (r.route && !r.credentials) {
      let e = r.route === `recovery` ? Z() : null;
      return ($ = e ? { kind: `recovery`, session: e } : { kind: `none` });
    } else return ($ = { kind: `error`, route: i, error: `link_expired` });
    if (!o || a !== g())
      return ($ = { kind: `error`, route: i, error: `link_expired` });
    if (i === `recovery` || s === `recovery`)
      return (Q(o), ($ = { kind: `recovery`, session: o }));
    let l = e(),
      u =
        i === `convert` ||
        (s === `email_change` &&
          l.pendingPassword === !0 &&
          (!l.pendingUser || l.pendingUser === o.user_id));
    return (
      n({
        pending: void 0,
        pendingPassword: u,
        pendingUser: u ? o.user_id : void 0,
        expired: void 0,
      }),
      c(o, `signin`),
      ($ = {
        kind: `confirmed`,
        route: i === `confirm` && s === `email_change` ? `email` : i,
        needsPassword: u,
      })
    );
  } catch (e) {
    return ($ = {
      kind: `error`,
      route: t,
      error:
        e instanceof j && ![`invalid`, `session_expired`].includes(e.error)
          ? e.error
          : `link_expired`,
    });
  }
}
