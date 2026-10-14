// tokyo/assets/session-CLv8PYlR 02 — refresh_token
// Lines 330-400 of readable/tokyo/assets/session-CLv8PYlR.pretty.js (statement-aligned).
async function J(t, n) {
  try {
    if (F()) return null;
    let i = g,
      a = (e) => !!e && e.expires_at > Date.now() / 1e3 + 60,
      s = L();
    if (s && a(s))
      return (
        (p = { status: `authenticated`, user_id: s.user_id }),
        D(s, `restore`),
        s
      );
    if (s) {
      p = { status: `refreshing` };
      let e = s,
        t = await K(async () => {
          let t = L();
          if (!t) return null;
          if (a(t)) return (g === i && D(t, `restore`), t);
          e = t;
          let n = (async () => {
            let e = await H(`token?grant_type=refresh_token`, {
              refresh_token: t.refresh_token,
            });
            return e.ok ? q(e, i, `restore`) : (await G(e)) ? `dead` : null;
          })();
          M = n;
          try {
            return await n;
          } finally {
            M === n && (M = void 0);
          }
        });
      if (t !== `dead`) return t;
      if (g !== i || L()?.refresh_token !== e.refresh_token) return null;
      if (e.anonymous === !1) return (I(`expired`, e.email), null);
      o();
    }
    if (!t || g !== i || F() || !r()) return null;
    ((p = { status: `verifying` }), (v = !1));
    let c = await f(e.siteKey, `cloud_signin`, n);
    return g !== i || F()
      ? null
      : await q(
          await H(`signup`, { gotrue_meta_security: { captcha_token: c } }),
          i,
          `signin`,
        );
  } catch (e) {
    return ((v = e instanceof l), null);
  }
}
function Y(e = !0, t = !1) {
  if ((k(), m)) return m;
  new URLSearchParams(location.search).get(`debug`) === `1` &&
    (window.__cloud = { state: () => ({ ...p }) });
  let n = g,
    r = J(e, t)
      .then(
        (e) => (
          !e &&
            g === n &&
            ((p = { status: `local_only` }), L() || D(null, `restore`)),
          e
        ),
      )
      .finally(() => {
        m === r && (m = void 0);
      });
  return ((m = r), m);
}
