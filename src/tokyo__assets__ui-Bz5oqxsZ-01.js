// tokyo__assets__ui-Bz5oqxsZ 01 — createelement
// Lines 1-252 of readable/tokyo__assets__ui-Bz5oqxsZ.pretty.js (statement-aligned).
import { r as e, t } from "./ja-Ci9Qv_M-.js";
import {
  Gn as n,
  Ln as r,
  U as i,
  W as a,
  Wn as o,
  jn as s,
} from "./engine-BuS5QxN0.js";
import { n as c } from "./notice-DnIsya3-.js";
import { d as l, f as u, i as d } from "./session-CLv8PYlR.js";
import {
  S as ee,
  _ as te,
  b as f,
  c as p,
  d as ne,
  f as m,
  g as re,
  l as h,
  n as ie,
  p as g,
  r as ae,
  t as oe,
  v as se,
  x as ce,
  y as _,
} from "./accounts-CpfgQQfK.js";
import {
  deleteFlow as le,
  installCloud as v,
  leaveForGoogle as y,
  signOutFlow as ue,
  syncNow as de,
} from "./coordinator-R8919moQ.js";
import {
  a as fe,
  c as pe,
  d as me,
  i as b,
  l as x,
  n as S,
  o as C,
  r as w,
  s as T,
  t as E,
  u as D,
} from "./dom-BIQnAwky.js";
import { a as O, i as k, n as A, r as he, t as j } from "./text-0MpKmkwJ.js";
import { t as M } from "./icons-DYNV7fxr.js";
var ge = `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
function N(e) {
  return e?.anonymous === !1
    ? { guest: !1, label: e.email ?? `` }
    : { guest: !0, label: j.guest };
}
function P(e, t) {
  D();
  let n = document.createElement(`button`);
  ((n.type = `button`),
    (n.className = `cloud-settings cloud-entry`),
    (n.dataset.nav = `1`),
    (n.innerHTML = M.user));
  let r = document.createElement(`span`);
  ((r.className = `mbtn-label`), S(r, j.title), n.appendChild(r));
  let i = document.createElement(`span`);
  ((i.className = `cloud-identity`), n.appendChild(i));
  let a = () => {
    let e = N(d());
    typeof e.label == `string` ? (i.textContent = e.label) : S(i, e.label);
  };
  (u(a),
    a(),
    (n.onclick = (e) => {
      (e.stopPropagation(), n.focus(), V(t));
    }),
    e.prepend(n));
}
function F(e, t) {
  D();
  let n = document.createElement(`button`);
  ((n.type = `button`),
    (n.className = `ti-tool cloud-title`),
    (n.dataset.nav = `1`));
  let r = document.createElement(`span`);
  ((r.className = `cloud-title-badge`), r.setAttribute(`aria-hidden`, `true`));
  let i = document.createElement(`span`);
  i.className = `cloud-title-copy`;
  let a = document.createElement(`span`);
  a.className = `cloud-title-state`;
  let o = document.createElement(`span`);
  ((o.className = `cloud-title-name`), i.append(a, o));
  let s = document.createElement(`span`);
  ((s.className = `cloud-title-cta`), n.append(r, i, s));
  let c = () => {
    let e = N(d());
    ((n.dataset.guest = String(e.guest)),
      typeof e.label == `string`
        ? ((r.textContent = (e.label.trim()[0] ?? `·`).toUpperCase()),
          (a.textContent = t.t(j.titleSynced)),
          (o.textContent = e.label),
          (o.title = e.label),
          (s.hidden = !0))
        : ((r.innerHTML = M.user),
          (a.textContent = t.t(j.titleLocal)),
          (o.textContent = t.t(j.guest)),
          o.removeAttribute(`title`),
          (s.textContent = t.t(j.titleSignIn)),
          (s.hidden = !1)),
      n.setAttribute(
        `aria-label`,
        `${t.t(j.title)}: ${e.guest ? t.t(j.guest) : o.textContent}`,
      ));
  };
  (u(c),
    t.events.on(`settings:changed`, c),
    c(),
    (n.onclick = (e) => {
      (e.stopPropagation(), n.focus(), V(t));
    }),
    e.append(n));
}
function I(e, t) {
  D();
  let n = document.createElement(`span`);
  ((n.className = `cloud-guest-dot`), n.setAttribute(`aria-hidden`, `true`));
  let r = () => {
    let r = N(d());
    ((n.hidden = !r.guest),
      (e.dataset.guest = String(r.guest)),
      (e.title = r.guest
        ? t.t(j.anonymous)
        : typeof r.label == `string`
          ? r.label
          : ``));
  };
  (e.querySelector(`.ph-app-ic`)?.appendChild(n),
    u(r),
    t.events.on(`settings:changed`, r),
    r());
}
function L(e, t, n, r = 8e3) {
  (D(), pe(e.state.settings.lang === `en` ? `en` : `zh`));
  let i = document.querySelector(`.cloud-toasts`);
  i ||
    ((i = document.createElement(`div`)),
    (i.className = `cloud-toasts`),
    (i.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:8999;display:flex;flex-direction:column;gap:8px;align-items:center;width:max-content;max-width:calc(100% - 32px);pointer-events:none`),
    document.body.appendChild(i));
  let a = document.createElement(`div`);
  ((a.className = `cloud-toast`),
    a.setAttribute(`role`, `status`),
    (a.style.cssText = `box-sizing:border-box;max-width:100%;border:1px solid #f4f1ea1f;border-left:3px solid #e0262f;border-radius:2px;background:#08080cf2;color:#f4f1ea;padding:12px 16px;font:600 15px "PingFang TC","Noto Sans TC",system-ui,sans-serif;letter-spacing:.02em;box-shadow:0 1.2em 3em #0000008c;display:flex;gap:14px;align-items:center;pointer-events:auto`));
  let o = document.createElement(`span`);
  if ((S(o, t), a.appendChild(o), n)) {
    let e = E(a, n.label, () => {
      (a.remove(), n.run());
    });
    e.style.cssText = `flex-shrink:0;padding:8px 14px;min-height:40px`;
  }
  ((a.lang = e.state.settings.lang === `zh` ? `zh-TW` : `en`),
    i.appendChild(a),
    setTimeout(() => a.remove(), n ? r + 4e3 : r));
}
function R(e, t) {
  D();
  let r = !1,
    i = () => {
      if (e.state.resetting) return;
      if (document.querySelector(`#loader`)) {
        r ||
          ((r = !0),
          setTimeout(() => {
            ((r = !1), i());
          }, 250));
        return;
      }
      let a = o();
      a &&
        L(
          e,
          a === `account_loaded` ? j.toastAccountLoaded : j.toastGuestAdopted,
        );
      let s = n();
      s &&
        L(e, O(s.reason), {
          label: k(s.reason),
          run: () => {
            t.restore(s.id).catch(() => {});
          },
        });
    };
  (t.subscribe(i), i());
}
function z(e) {
  let t = c(),
    n = (e) => {
      let t = () => {
        document.querySelector(`#loader`) ? setTimeout(t, 250) : e();
      };
      t();
    };
  (t &&
    n(() => {
      let n = {
          signed_out: j.noticeSignedOut,
          deleted: j.noticeDeleted,
          confirmed: j.noticeConfirmed,
          email_changed: j.noticeEmailChanged,
          password_updated: j.noticePasswordUpdated,
          signed_in: b(j.noticeSignedIn, { email: t.detail }),
        },
        r = {
          google_signed_in: b(j.noticeGoogle, { email: t.detail }),
          google_linked: b(j.noticeGoogleLinked, { email: t.detail }),
          google_fallback: b(j.noticeGoogleFallback, { email: t.detail }),
        };
      t.notice === `expired`
        ? V(e, `expired`)
        : r[t.notice]
          ? V(e, `home`, { notice: { message: r[t.notice], kind: `ok` } })
          : t.notice === `google_cancelled`
            ? L(e, j.noticeGoogleCancelled)
            : n[t.notice] && L(e, n[t.notice]);
    }),
    h() && n(() => V(e, `password`)));
}
var B;
function _e(n, r, i) {
  let a = {
    zh: n.zh.replace(`{${r}}`, i.zh),
    en: n.en.replace(`{${r}}`, i.en),
  };
  return t.on ? { ...a, ja: e(n).replace(`{${r}}`, e(i)) } : a;
}
function ve(e, t) {
  return e.status === `update_required`
    ? j.updateRequired
    : t
      ? e.busy || e.status === `connecting`
        ? j.syncBusy
        : e.status === `offline`
          ? j.syncOffline
          : e.status === `dirty`
            ? j.syncDirty
            : e.status === `saved`
              ? e.syncedAt
                ? _e(j.syncSaved, `time`, T(e.syncedAt))
                : { zh: `已同步`, en: `Synced` }
              : j.syncLocal
      : j.syncLocal;
}
