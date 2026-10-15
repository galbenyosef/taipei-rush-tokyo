// tokyo/assets/accounts-BNXdphZj 01 — error
// Lines 1-346 of readable/tokyo/assets/accounts-BNXdphZj.pretty.js (statement-aligned).
import {
  $n as e,
  Kn as t,
  ar as n,
  cr as r,
  fr as i,
  gr as a,
  nr as o,
} from "./engine-wUBYs8Z3.js";
import {
  _ as s,
  a as c,
  c as l,
  i as u,
  l as d,
  m as f,
  n as p,
  o as m,
  p as h,
  r as g,
  t as _,
  u as v,
} from "./session-B5ukzynC.js";
function y(e = typeof navigator < `u` ? navigator.userAgent : ``) {
  return / Line\//i.test(e)
    ? `LINE`
    : /FBAN|FBAV|FB_IAB|FBIOS|MessengerForiOS|\bMessenger\b/.test(e)
      ? `Facebook`
      : /Instagram/.test(e)
        ? `Instagram`
        : /Barcelona/.test(e)
          ? `Threads`
          : /MicroMessenger/i.test(e)
            ? `WeChat`
            : /KAKAOTALK/i.test(e)
              ? `KakaoTalk`
              : (/Android/.test(e) && /; wv\)/.test(e)) ||
                  (/iPhone|iPad|iPod/.test(e) &&
                    !/Safari\//.test(e) &&
                    !/CriOS|FxiOS|EdgiOS|GSA\//.test(e))
                ? `WebView`
                : null;
}
var b = (e = typeof navigator < `u` ? navigator.userAgent : ``) =>
  /Android/.test(e);
function ee(e = location.href) {
  let t = new URL(e),
    n = new URL(e);
  n.searchParams.set(`openExternalBrowser`, `1`);
  let r = `intent://${t.host}${t.pathname}${t.search}#Intent;scheme=${t.protocol.replace(`:`, ``)};S.browser_fallback_url=${encodeURIComponent(e)};end`;
  return { copy: e, line: n.toString(), intent: r };
}
var x = `taipei-rush-cloud-pkce-v1`;
function S(e) {
  let t = ``;
  for (let n of e) t += String.fromCharCode(n);
  return btoa(t).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
async function te() {
  let e = S(crypto.getRandomValues(new Uint8Array(48)));
  return {
    verifier: e,
    challenge: S(
      new Uint8Array(
        await crypto.subtle.digest(`SHA-256`, new TextEncoder().encode(e)),
      ),
    ),
  };
}
function C() {
  let t = e(x);
  return t && typeof t.verifier == `string` && Date.now() - Number(t.at) < 6e5
    ? t
    : null;
}
function w() {
  o(x);
}
function T(e) {
  let t = new URL(location.href);
  for (let e of [
    `auth`,
    `code`,
    `error`,
    `error_code`,
    `error_description`,
    `state`,
    `openExternalBrowser`,
  ])
    t.searchParams.delete(e);
  return (
    t.searchParams.set(`auth`, e === `link` ? `google-link` : `google`),
    (t.hash = ``),
    t.toString()
  );
}
function ne() {
  return p(`settings`, void 0, `GET`)
    .then(async (e) => (e.ok ? (await e.json()).external?.google === !0 : !1))
    .catch(() => `offline`);
}
async function E(e, t = !1) {
  if (y()) return { ok: !1, error: `in_app` };
  let n = await ne();
  if (n === `offline`) return { ok: !1, error: `offline` };
  if (!n) return { ok: !1, error: `provider_disabled` };
  let { verifier: r, challenge: o } = await te(),
    s = {
      verifier: r,
      mode: e,
      at: Date.now(),
      ...(t ? { fallback: !0 } : {}),
    };
  if (!i(`taipei-rush-cloud-pkce-v1`, s)) return { ok: !1, error: `invalid` };
  let c = new URLSearchParams({
    provider: `google`,
    redirect_to: T(e),
    code_challenge: o,
    code_challenge_method: `s256`,
  });
  if (e === `signin`) return { ok: !0, url: `${a.url}/auth/v1/authorize?${c}` };
  try {
    let e = await m(!1);
    if (!e) return E(`signin`, t);
    c.set(`skip_http_redirect`, `true`);
    let n = await p(`user/identities/authorize?${c}`, void 0, `GET`, e),
      r = await n.json().catch(() => null);
    return n.ok && typeof r?.url == `string`
      ? { ok: !0, url: r.url }
      : E(`signin`, t);
  } catch {
    return { ok: !1, error: `offline` };
  }
}
function re() {
  let e = u();
  return e && !e.providers?.includes(`google`) ? `link` : `signin`;
}
async function D(e, t, n, r) {
  let i = C();
  if (n || r) {
    if (
      r === `identity_already_exists` ||
      /already linked|already exists/i.test(n ?? ``)
    ) {
      w();
      let e = await E(`signin`, !0);
      return e.ok
        ? { kind: `restart`, url: e.url }
        : { kind: `error`, error: e.error };
    }
    return (
      w(),
      n === `access_denied` || r === `access_denied`
        ? { kind: `error`, error: `cancelled` }
        : r === `provider_disabled` ||
            /provider is not enabled|unsupported provider/i.test(n ?? ``)
          ? { kind: `error`, error: `provider_disabled` }
          : { kind: `error`, error: `invalid` }
    );
  }
  if (!t) return { kind: `error`, error: `invalid` };
  if (!i) return { kind: `error`, error: `other_device` };
  try {
    let n = await p(`token?grant_type=pkce`, {
      auth_code: t,
      code_verifier: i.verifier,
    });
    if ((w(), !n.ok)) {
      let e = await n.json().catch(() => null),
        t = String(e?.error_code ?? e?.code ?? ``);
      return {
        kind: `error`,
        error: [
          `flow_state_not_found`,
          `flow_state_expired`,
          `bad_code_verifier`,
        ].includes(t)
          ? `other_device`
          : `invalid`,
      };
    }
    let r = f(await n.json());
    return r
      ? (l(r, `signin`),
        {
          kind: `signed_in`,
          session: r,
          linked: e === `google-link`,
          fallback: i.fallback === !0,
        })
      : { kind: `error`, error: `invalid` };
  } catch {
    return { kind: `error`, error: `offline` };
  }
}
async function O() {
  try {
    let e = await m(!1);
    if (!e || e.anonymous !== !1) return { ok: !1, error: `invalid` };
    let t = await p(`user`, void 0, `GET`, e);
    if (!t.ok) return { ok: !1, error: `invalid` };
    let n = (await t.json()).identities ?? [],
      r = n.find((e) => e.provider === `google`);
    if (!r) return { ok: !0 };
    if (n.length < 2) return { ok: !1, error: `last_identity` };
    let i = await p(
      `user/identities/${encodeURIComponent(r.identity_id ?? r.id ?? ``)}`,
      void 0,
      `DELETE`,
      e,
    );
    if (!i.ok) {
      let e = await i.json().catch(() => null);
      return {
        ok: !1,
        error:
          String(e?.error_code ?? e?.code ?? ``) ===
          `single_identity_not_deletable`
            ? `last_identity`
            : `invalid`,
      };
    }
    let a = await p(`token?grant_type=refresh_token`, {
        refresh_token: e.refresh_token,
      }),
      o = a.ok ? f(await a.json()) : null;
    return (
      l(
        o ?? {
          ...e,
          providers: (e.providers ?? []).filter((e) => e !== `google`),
        },
        `restore`,
      ),
      { ok: !0 }
    );
  } catch {
    return { ok: !1, error: `offline` };
  }
}
function k(e) {
  if ([...e].length < 8) return `short`;
  if (new TextEncoder().encode(e).length > 72) return `long`;
}
function A(e) {
  if (k(e)) return 0;
  let t = [/[a-z]/, /[A-Z]/, /\d/, /[^a-zA-Z\d]/].filter((t) =>
    t.test(e),
  ).length;
  return Math.min(4, (e.length >= 12 ? 2 : 1) + (t >= 3 ? 2 : +(t >= 2)));
}
var j = class {
  error;
  retryAfter;
  reasons;
  constructor(e, t, n) {
    ((this.error = e), (this.retryAfter = t), (this.reasons = n));
  }
};
function M(e, t = 0, n = ``) {
  let r = String(e ?? ``);
  return r === `over_email_send_rate_limit` || r === `over_sms_send_rate_limit`
    ? `email_rate_limited`
    : t === 429 || r === `over_request_rate_limit`
      ? `rate_limited`
      : r === `invalid_credentials` ||
          (r === `invalid_grant` && /invalid login credentials/i.test(n))
        ? `wrong_password`
        : r === `email_not_confirmed` || /email not confirmed/i.test(n)
          ? `unconfirmed`
          : r === `captcha_failed`
            ? `captcha_failed`
            : r === `weak_password`
              ? `weak_password`
              : r === `same_password`
                ? `same_password`
                : [
                      `email_exists`,
                      `user_already_exists`,
                      `identity_already_exists`,
                    ].includes(r)
                  ? `email_exists`
                  : r === `email_address_invalid` ||
                      r === `email_address_not_authorized`
                    ? `email_invalid`
                    : r === `validation_failed`
                      ? /password/i.test(n)
                        ? `weak_password`
                        : /email/i.test(n)
                          ? `email_invalid`
                          : `invalid`
                      : [
                            `otp_expired`,
                            `flow_state_expired`,
                            `flow_state_not_found`,
                            `otp_disabled`,
                          ].includes(r)
                        ? `link_expired`
                        : [
                              `signup_disabled`,
                              `email_provider_disabled`,
                              `anonymous_provider_disabled`,
                            ].includes(r)
                          ? `signup_disabled`
                          : r === `reauthentication_needed`
                            ? `reauthentication_needed`
                            : r === `reauthentication_not_valid`
                              ? `reauth_invalid`
                              : [
                                    `session_not_found`,
                                    `session_expired`,
                                    `refresh_token_not_found`,
                                    `refresh_token_already_used`,
                                    `bad_jwt`,
                                    `no_authorization`,
                                    `user_not_found`,
                                  ].includes(r)
                                ? `session_expired`
                                : t === 0
                                  ? `offline`
                                  : t >= 500
                                    ? `server`
                                    : t === 401 || t === 403
                                      ? `session_expired`
                                      : `invalid`;
}
function N(e) {
  if (e)
    return typeof e.error_code == `string`
      ? e.error_code
      : typeof e.code == `string`
        ? e.code
        : e.error;
}
async function P(e) {
  let t = await e.text();
  if (!t) return null;
  try {
    let e = JSON.parse(t);
    return e && typeof e == `object` && !Array.isArray(e) ? e : null;
  } catch {
    if (e.ok) throw new j(`server`);
    return null;
  }
}
