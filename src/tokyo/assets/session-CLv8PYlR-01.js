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
var s,
  c = () => !1,
  l = class extends Error {};
function u(e) {
  c = e;
}
function d() {
  return window.turnstile
    ? Promise.resolve(window.turnstile)
    : ((s ||= new Promise((e, t) => {
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
      s);
}
function f(e, t, n = !1) {
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
                    ? new l(`Interaction deferred until a menu opens`)
                    : Error(`Turnstile verification failed`),
                ));
        }
      },
      p = setTimeout(() => f(), 3e4);
    d()
      .then((r) => {
        u ||
          ((s = r),
          (a = document.createElement(`div`)),
          (a.className = `cloud-turnstile`),
          (a.style.cssText = `position:fixed;bottom:16px;right:16px;z-index:10000;max-width:calc(100vw - 32px)`),
          n && !c() && (a.style.visibility = `hidden`),
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
              n && !c() ? f(void 0, !0) : a && (a.style.visibility = ``);
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
var p = { status: `idle` },
  m,
  h = 120,
  g = 0,
  _ = !1,
  v = !1;
function y() {
  return v;
}
var b = new Set(),
  x = new Set();
function S() {
  return g;
}
function C() {
  return ((m = void 0), ++g);
}
function w(e) {
  return (
    k(),
    b.add(e),
    () => {
      b.delete(e);
    }
  );
}
function T(e) {
  return (
    k(),
    x.add(e),
    () => {
      x.delete(e);
    }
  );
}
function E() {
  for (let e of x)
    try {
      e();
    } catch {}
}
function D(e, t) {
  N(e);
  for (let n of b)
    try {
      n(e, t);
    } catch {}
}
var O = !1;
function k() {
  O ||
    typeof window > `u` ||
    typeof window.addEventListener != `function` ||
    ((O = !0),
    window.addEventListener(`storage`, (e) => {
      if (e.key === `taipei-rush-cloud-session-v1` || e.key === null) {
        m = void 0;
        let e = L();
        (e
          ? ((_ = !1), (p = { status: `authenticated`, user_id: e.user_id }))
          : ((_ = i().signedOut === !0), (p = { status: `local_only` })),
          D(e, `remote`));
      }
      (e.key === `taipei-rush-cloud-account-v1` || e.key === null) && E();
    }));
}
var A,
  j = !1,
  M;
function N(e) {
  if (
    (A !== void 0 && clearTimeout(A),
    (A = void 0),
    !e || j || typeof window > `u`)
  )
    return;
  let t = Math.max(5e3, (e.expires_at - h) * 1e3 - Date.now());
  t > 2 ** 31 - 1 ||
    ((A = setTimeout(() => {
      ((A = void 0), Y(!1).catch(() => {}));
    }, t)),
    A.unref?.());
}
async function P(e = 8e3) {
  ((j = !0), A !== void 0 && clearTimeout(A), (A = void 0));
  let t = M;
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
function F() {
  return _ || i().signedOut === !0;
}
function I(e, n) {
  ((v = !1),
    g++,
    (m = void 0),
    (_ = !0),
    t({
      signedOut: !0,
      pendingPassword: !1,
      expired: e === `expired` ? (n ? { email: n } : {}) : void 0,
    }),
    o(),
    (p = { status: `local_only` }),
    D(null, e),
    E());
}
function L() {
  return B(n());
}
function R(e, n = `signin`) {
  ((v = !1),
    (_ = !1),
    t({ signedOut: !1, expired: void 0 }),
    a(e),
    (p = { status: `authenticated`, user_id: e.user_id }),
    D(e, n),
    E());
}
function z(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function B(e) {
  if (
    !z(e) ||
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
var V = `2024-01-01`;
async function H(t, n, r = `POST`, i, a = 1e4) {
  return fetch(`${e.url}/auth/v1/${t}`, {
    method: r,
    headers: {
      apikey: e.publishableKey,
      "Content-Type": `application/json`,
      "X-Supabase-Api-Version": V,
      ...(i ? { Authorization: `Bearer ${i.access_token}` } : {}),
    },
    body: n === void 0 ? void 0 : JSON.stringify(n),
    signal: AbortSignal.timeout(a),
  });
}
function U(e) {
  if (!z(e) || !z(e.user)) return null;
  let t = e.expires_at;
  typeof t != `number` &&
    typeof e.expires_in == `number` &&
    (t = Math.floor(Date.now() / 1e3) + e.expires_in);
  let n = B({ ...e, expires_at: t, user_id: e.user.id });
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
var W = [
  `refresh_token_not_found`,
  `refresh_token_already_used`,
  `session_not_found`,
  `session_expired`,
  `user_not_found`,
  `user_banned`,
  `invalid_grant`,
  `bad_jwt`,
];
async function G(e) {
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
    return !n || W.includes(n);
  } catch {
    return !0;
  }
}
function K(e) {
  let t = typeof navigator < `u` ? navigator.locks : void 0;
  return t?.request ? t.request(`taipei-gta-auth-refresh`, e) : e();
}
async function q(e, t, n) {
  if (!e.ok) return null;
  let r = U(await e.json());
  return !r || g !== t || F() ? null : (R(r, n), r);
}
