// tokyo/assets/session-DVEw0yxj 02 — refresh_token
// Lines 349-419 of readable/tokyo/assets/session-DVEw0yxj.pretty.js (statement-aligned).
async function X(e, t) {
  try {
    if (L()) return null;
    let r = v,
      a = (e) => !!e && e.expires_at > Date.now() / 1e3 + 60,
      o = z();
    if (o && a(o))
      return (
        (h = { status: `authenticated`, user_id: o.user_id }),
        k(o, `restore`),
        o
      );
    if (o) {
      h = { status: `refreshing` };
      let e = o,
        t = await J(async () => {
          let t = z();
          if (!t) return null;
          if (a(t)) return (v === r && k(t, `restore`), t);
          e = t;
          let n = (async () => {
            let e = await W(`token?grant_type=refresh_token`, {
              refresh_token: t.refresh_token,
            });
            return e.ok ? Y(e, r, `restore`) : (await q(e)) ? `dead` : null;
          })();
          P = n;
          try {
            return await n;
          } finally {
            P === n && (P = void 0);
          }
        });
      if (t !== `dead`) return t;
      if (v !== r || z()?.refresh_token !== e.refresh_token) return null;
      if (e.anonymous === !1) return (R(`expired`, e.email), null);
      n();
    }
    if (!e || v !== r || L() || !i()) return null;
    ((h = { status: `verifying` }), (b = !1));
    let c = await p(s.siteKey, `cloud_signin`, t);
    return v !== r || L()
      ? null
      : await Y(
          await W(`signup`, { gotrue_meta_security: { captcha_token: c } }),
          r,
          `signin`,
        );
  } catch (e) {
    return ((b = e instanceof u), null);
  }
}
function Z(e = !0, t = !1) {
  if ((j(), g)) return g;
  new URLSearchParams(location.search).get(`debug`) === `1` &&
    (window.__cloud = { state: () => ({ ...h }) });
  let n = v,
    r = X(e, t)
      .then(
        (e) => (
          !e &&
            v === n &&
            ((h = { status: `local_only` }), z() || k(null, `restore`)),
          e
        ),
      )
      .finally(() => {
        g === r && (g = void 0);
      });
  return ((g = r), g);
}
