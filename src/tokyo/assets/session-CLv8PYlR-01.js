// tokyo/assets/session-CLv8PYlR 01 — user
// Lines 1-329 of readable/tokyo/assets/session-CLv8PYlR.pretty.js (statement-aligned).
import {
  $n as e,
  Kn as t,
  Mn as n,
  Un as r,
  jn as i,
  qn as a,
  wn as o,
} from "./engine-BuS5QxN0.js";
var turnstileScriptPromise,
  isMenuOpen = () => !1,
  TurnstileDeferredError = class extends Error {};
function setMenuOpenCheck(e) {
  isMenuOpen = e;
}
function loadTurnstile() {
  return window.turnstile
    ? Promise.resolve(window.turnstile)
    : ((turnstileScriptPromise ||= new Promise((e, t) => {
        let n = document.createElement(`script`),
          r = setTimeout(() => {
            (n.remove(), t(Error(`Turnstile script timeout`)));
          }, 3e4);
        ((n.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`),
          (n.async = !0),
          (n.onload = () => {
            (clearTimeout(r),
              window.turnstile
                ? e(window.turnstile)
                : t(Error(`Turnstile unavailable`)));
          }),
          (n.onerror = () => {
            (clearTimeout(r), n.remove(), t(Error(`Turnstile script failed`)));
          }),
          document.head.appendChild(n));
      })),
      turnstileScriptPromise);
}
function runTurnstile(e, t, n = !1) {
  return new Promise((r, i) => {
    let a,
      o,
      s,
      u = !1,
      f = (e, t = !1) => {
        if (!u) {
          ((u = !0), clearTimeout(p));
          try {
            o !== void 0 && s?.remove(o);
          } catch {}
          (a?.remove(),
            typeof e == `string` && e.trim()
              ? r(e)
              : i(
                  t
                    ? new TurnstileDeferredError(`Interaction deferred until a menu opens`)
                    : Error(`Turnstile verification failed`),
                ));
        }
      },
      p = setTimeout(() => f(), 3e4);
    loadTurnstile()
      .then((r) => {
        u ||
          ((s = r),
          (a = document.createElement(`div`)),
          (a.className = `cloud-turnstile`),
          (a.style.cssText = `position:fixed;bottom:16px;right:16px;z-index:10000;max-width:calc(100vw - 32px)`),
          n && !isMenuOpen() && (a.style.visibility = `hidden`),
          (
            document.querySelector(`dialog.cloud-overlay[open]`) ??
            document.body
          ).appendChild(a),
          (o = s.render(a, {
            sitekey: e,
            action: t,
            appearance: `interaction-only`,
            "response-field": !1,
            retry: `never`,
            "refresh-expired": `never`,
            callback: (e) => f(e),
            "before-interactive-callback": () => {
              n && !isMenuOpen() ? f(void 0, !0) : a && (a.style.visibility = ``);
            },
            "error-callback": () => f(),
            "expired-callback": () => f(),
            "timeout-callback": () => f(),
          })),
          u && s.remove(o));
      })
      .catch(() => f());
  });
}
var authState = { status: `idle` },
  authPromise,
  REFRESH_MARGIN_S = 120,
  authGeneration = 0,
  signedOutFlag = !1,
  lastErrorWasDeferred = !1;
function wasDeferred() {
  return lastErrorWasDeferred;
}
var sessionListeners = new Set(),
  accountListeners = new Set();
function getAuthGeneration() {
  return authGeneration;
}
function bumpAuthGeneration() {
  return ((authPromise = void 0), ++authGeneration);
}
function subscribeSession(e) {
  return (
    installStorageSync(),
    sessionListeners.add(e),
    () => {
      sessionListeners.delete(e);
    }
  );
}
function subscribeAccount(e) {
  return (
    installStorageSync(),
    accountListeners.add(e),
    () => {
      accountListeners.delete(e);
    }
  );
}
function notifyAccountChange() {
  for (let e of accountListeners)
    try {
      e();
    } catch {}
}
function emitSession(e, t) {
  scheduleRefresh(e);
  for (let n of sessionListeners)
    try {
      n(e, t);
    } catch {}
}
var storageHookInstalled = !1;
function installStorageSync() {
  storageHookInstalled ||
    typeof window > `u` ||
    typeof window.addEventListener != `function` ||
    ((storageHookInstalled = !0),
    window.addEventListener(`storage`, (e) => {
      if (e.key === `taipei-rush-cloud-session-v1` || e.key === null) {
        authPromise = void 0;
        let e = currentSession();
        (e
          ? ((signedOutFlag = !1), (authState = { status: `authenticated`, user_id: e.user_id }))
          : ((signedOutFlag = i().signedOut === !0), (authState = { status: `local_only` })),
          emitSession(e, `remote`));
      }
      (e.key === `taipei-rush-cloud-account-v1` || e.key === null) && notifyAccountChange();
    }));
}
var refreshTimer,
  refreshing = !1,
  refreshPromise;
function scheduleRefresh(e) {
  if (
    (refreshTimer !== void 0 && clearTimeout(refreshTimer),
    (refreshTimer = void 0),
    !e || refreshing || typeof window > `u`)
  )
    return;
  let t = Math.max(5e3, (e.expires_at - REFRESH_MARGIN_S) * 1e3 - Date.now());
  t > 2 ** 31 - 1 ||
    ((refreshTimer = setTimeout(() => {
      ((refreshTimer = void 0), ensureSession(!1).catch(() => {}));
    }, t)),
    refreshTimer.unref?.());
}
async function suspendRefresh(e = 8e3) {
  ((refreshing = !0), refreshTimer !== void 0 && clearTimeout(refreshTimer), (refreshTimer = void 0));
  let t = refreshPromise;
  if (!t) return;
  let n;
  (await Promise.race([
    t.catch(() => {}),
    new Promise((t) => {
      n = setTimeout(t, e);
    }),
  ]),
    clearTimeout(n));
}
function isLocalOnly() {
  return signedOutFlag || i().signedOut === !0;
}
function signOutFlow(e, n) {
  ((lastErrorWasDeferred = !1),
    authGeneration++,
    (authPromise = void 0),
    (signedOutFlag = !0),
    t({
      signedOut: !0,
      pendingPassword: !1,
      expired: e === `expired` ? (n ? { email: n } : {}) : void 0,
    }),
    o(),
    (authState = { status: `local_only` }),
    emitSession(null, e),
    notifyAccountChange());
}
function currentSession() {
  return parseSession(n());
}
function completeSignIn(e, n = `signin`) {
  ((lastErrorWasDeferred = !1),
    (signedOutFlag = !1),
    t({ signedOut: !1, expired: void 0 }),
    a(e),
    (authState = { status: `authenticated`, user_id: e.user_id }),
    emitSession(e, n),
    notifyAccountChange());
}
function isPlainObject(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function parseSession(e) {
  if (
    !isPlainObject(e) ||
    typeof e.access_token != `string` ||
    !e.access_token.trim() ||
    typeof e.refresh_token != `string` ||
    !e.refresh_token.trim() ||
    typeof e.expires_at != `number` ||
    !Number.isSafeInteger(e.expires_at) ||
    e.expires_at <= 0 ||
    typeof e.user_id != `string` ||
    !/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(
      e.user_id,
    )
  )
    return null;
  let t = {
    access_token: e.access_token,
    refresh_token: e.refresh_token,
    expires_at: e.expires_at,
    user_id: e.user_id,
  };
  return (
    typeof e.email == `string` && (t.email = e.email),
    typeof e.anonymous == `boolean` && (t.anonymous = e.anonymous),
    typeof e.confirmed == `boolean` && (t.confirmed = e.confirmed),
    Array.isArray(e.providers) &&
      (t.providers = e.providers
        .filter((e) => typeof e == `string`)
        .slice(0, 8)),
    t
  );
}
var SUPABASE_API_VERSION = `2024-01-01`;
async function authFetch(t, n, r = `POST`, i, a = 1e4) {
  return fetch(`${e.url}/auth/v1/${t}`, {
    method: r,
    headers: {
      apikey: e.publishableKey,
      "Content-Type": `application/json`,
      "X-Supabase-Api-Version": SUPABASE_API_VERSION,
      ...(i ? { Authorization: `Bearer ${i.access_token}` } : {}),
    },
    body: n === void 0 ? void 0 : JSON.stringify(n),
    signal: AbortSignal.timeout(a),
  });
}
function sessionFromAuthResponse(e) {
  if (!isPlainObject(e) || !isPlainObject(e.user)) return null;
  let t = e.expires_at;
  typeof t != `number` &&
    typeof e.expires_in == `number` &&
    (t = Math.floor(Date.now() / 1e3) + e.expires_in);
  let n = parseSession({ ...e, expires_at: t, user_id: e.user.id });
  if (!n || n.expires_at <= Date.now() / 1e3 + 60) return null;
  (typeof e.user.email == `string` && (n.email = e.user.email),
    typeof e.user.is_anonymous == `boolean` &&
      (n.anonymous = e.user.is_anonymous),
    `email_confirmed_at` in e.user &&
      (n.confirmed =
        typeof e.user.email_confirmed_at == `string` &&
        Number.isFinite(Date.parse(e.user.email_confirmed_at))));
  let r = e.user.app_metadata,
    i = Array.isArray(e.user.identities)
      ? e.user.identities.map((e) => e.provider)
      : [],
    a = [...(Array.isArray(r?.providers) ? r.providers : []), ...i].filter(
      (e) => typeof e == `string`,
    );
  return (a.length && (n.providers = [...new Set(a)]), n);
}
var DEAD_SESSION_ERRORS = [
  `refresh_token_not_found`,
  `refresh_token_already_used`,
  `session_not_found`,
  `session_expired`,
  `user_not_found`,
  `user_banned`,
  `invalid_grant`,
  `bad_jwt`,
];
async function isDeadSessionResponse(e) {
  if (e.status === 401 || e.status === 403) return !0;
  if (e.status !== 400 && e.status !== 404) return !1;
  try {
    let t = await e.clone().json(),
      n = String(
        typeof t.error_code == `string`
          ? t.error_code
          : typeof t.code == `string`
            ? t.code
            : (t.error ?? ``),
      );
    return !n || DEAD_SESSION_ERRORS.includes(n);
  } catch {
    return !0;
  }
}
function withAuthLock(e) {
  let t = typeof navigator < `u` ? navigator.locks : void 0;
  return t?.request ? t.request(`taipei-gta-auth-refresh`, e) : e();
}
async function acceptAuthResponse(e, t, n) {
  if (!e.ok) return null;
  let r = sessionFromAuthResponse(await e.json());
  return !r || authGeneration !== t || isLocalOnly() ? null : (completeSignIn(r, n), r);
}
