// tokyo/assets/session-CLv8PYlR 02 — authgeneration
// Lines 330-400 of readable/tokyo/assets/session-CLv8PYlR.pretty.js (statement-aligned).
async function refreshOrSignIn(t, n) {
  try {
    if (isLocalOnly()) return null;
    let i = authGeneration,
      a = (e) => !!e && e.expires_at > Date.now() / 1e3 + 60,
      s = currentSession();
    if (s && a(s))
      return (
        (authState = { status: `authenticated`, user_id: s.user_id }),
        emitSession(s, `restore`),
        s
      );
    if (s) {
      authState = { status: `refreshing` };
      let e = s,
        t = await withAuthLock(async () => {
          let t = currentSession();
          if (!t) return null;
          if (a(t)) return (authGeneration === i && emitSession(t, `restore`), t);
          e = t;
          let n = (async () => {
            let e = await authFetch(`token?grant_type=refresh_token`, {
              refresh_token: t.refresh_token,
            });
            return e.ok ? acceptAuthResponse(e, i, `restore`) : (await isDeadSessionResponse(e)) ? `dead` : null;
          })();
          refreshPromise = n;
          try {
            return await n;
          } finally {
            refreshPromise === n && (refreshPromise = void 0);
          }
        });
      if (t !== `dead`) return t;
      if (authGeneration !== i || currentSession()?.refresh_token !== e.refresh_token) return null;
      if (e.anonymous === !1) return (signOutFlow(`expired`, e.email), null);
      o();
    }
    if (!t || authGeneration !== i || isLocalOnly() || !r()) return null;
    ((authState = { status: `verifying` }), (lastErrorWasDeferred = !1));
    let c = await runTurnstile(e.siteKey, `cloud_signin`, n);
    return authGeneration !== i || isLocalOnly()
      ? null
      : await acceptAuthResponse(
          await authFetch(`signup`, { gotrue_meta_security: { captcha_token: c } }),
          i,
          `signin`,
        );
  } catch (e) {
    return ((lastErrorWasDeferred = e instanceof TurnstileDeferredError), null);
  }
}
function ensureSession(e = !0, t = !1) {
  if ((installStorageSync(), authPromise)) return authPromise;
  new URLSearchParams(location.search).get(`debug`) === `1` &&
    (window.__cloud = { state: () => ({ ...authState }) });
  let n = authGeneration,
    r = refreshOrSignIn(e, t)
      .then(
        (e) => (
          !e &&
            authGeneration === n &&
            ((authState = { status: `local_only` }), currentSession() || emitSession(null, `restore`)),
          e
        ),
      )
      .finally(() => {
        authPromise === r && (authPromise = void 0);
      });
  return ((authPromise = r), authPromise);
}
