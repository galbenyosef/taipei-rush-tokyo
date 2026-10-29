// tokyo/assets/ui-P-VyG5rz 01 — createelement
// Lines 1-274 of readable/tokyo/assets/ui-P-VyG5rz.pretty.js (statement-aligned).
import { r as e, t } from "./ja-anaGONx4.js";
import {
  $n as n,
  G as r,
  W as i,
  ar as a,
  mr as o,
  pr as s,
} from "./engine-14d5lda2.js";
import { n as c, o as l } from "./cities-tfcRdmsJ.js";
import { S as u } from "./shared-BaQwRjes.js";
import { f as d } from "./game-DQ7TeBJx.js";
import { n as f } from "./notice-DnIsya3-.js";
import { d as p, f as m, i as h } from "./session-DVEw0yxj.js";
import { n as g } from "./controllers-DHBZ_k07.js";
import {
  S as ee,
  _ as te,
  b as _,
  c as v,
  d as ne,
  f as re,
  g as ie,
  l as ae,
  n as oe,
  p as se,
  r as ce,
  t as y,
  v as le,
  x as ue,
  y as b,
} from "./accounts-DSoNIbxN.js";
import {
  deleteFlow as deleteFlow,
  installCloud as installCloud,
  leaveForGoogle as leaveForGoogle,
  signOutFlow as signOutFlow,
  syncNow as syncNow,
} from "./coordinator-Brhh9B6T.js";
import {
  a as he,
  c as S,
  d as ge,
  i as C,
  l as w,
  n as T,
  o as E,
  r as D,
  s as O,
  t as k,
  u as A,
} from "./dom-CivB7fIR.js";
import {
  a as j,
  i as M,
  n as N,
  o as P,
  r as _e,
  t as F,
} from "./text-Dz2IP1v8.js";
import { t as I } from "./icons-Md4jzY0j.js";
var ve = `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
function L(e) {
  return e?.anonymous === !1
    ? { guest: !1, label: e.email ?? `` }
    : { guest: !0, label: F.guest };
}
function mountCloudSettings(e, t) {
  A();
  let n = document.createElement(`button`);
  ((n.type = `button`),
    (n.className = `cloud-settings cloud-entry`),
    (n.dataset.nav = `1`),
    (n.innerHTML = I.user));
  let r = document.createElement(`span`);
  ((r.className = `mbtn-label`), n.appendChild(r));
  let i = document.createElement(`span`);
  ((i.className = `cloud-identity`), n.appendChild(i));
  let a = () => {
    (S(t.state.settings.lang === `en` ? `en` : `zh`), T(r, F.title));
    let e = L(h());
    typeof e.label == `string` ? (i.textContent = e.label) : T(i, e.label);
  };
  (m(a),
    t.events.on(`settings:changed`, ({ key: e }) => {
      e === `lang` && a();
    }),
    a(),
    (n.onclick = (e) => {
      (e.stopPropagation(), n.focus(), showCloudPanel(t));
    }),
    e.prepend(n));
}
function mountCloudTitle(e, t) {
  A();
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
    let e = L(h());
    ((n.dataset.guest = String(e.guest)),
      typeof e.label == `string`
        ? ((r.textContent = (e.label.trim()[0] ?? `·`).toUpperCase()),
          (a.textContent = t.t(F.titleSynced)),
          (o.textContent = e.label),
          (o.title = e.label),
          (s.hidden = !0))
        : ((r.innerHTML = I.user),
          (a.textContent = t.t(F.titleLocal)),
          (o.textContent = t.t(F.guest)),
          o.removeAttribute(`title`),
          (s.textContent = t.t(F.titleSignIn)),
          (s.hidden = !1)),
      n.setAttribute(
        `aria-label`,
        `${t.t(F.title)}: ${e.guest ? t.t(F.guest) : o.textContent}`,
      ));
  };
  (m(c),
    t.events.on(`settings:changed`, c),
    c(),
    (n.onclick = (e) => {
      (e.stopPropagation(), n.focus(), showCloudPanel(t));
    }),
    e.append(n));
}
function mountCloudPhoneStatus(e, t) {
  A();
  let n = document.createElement(`span`);
  ((n.className = `cloud-guest-dot`), n.setAttribute(`aria-hidden`, `true`));
  let r = () => {
    let r = L(h());
    ((n.hidden = !r.guest),
      (e.dataset.guest = String(r.guest)),
      (e.title = r.guest
        ? t.t(F.anonymous)
        : typeof r.label == `string`
          ? r.label
          : ``));
  };
  (e.querySelector(`.ph-app-ic`)?.appendChild(n),
    m(r),
    t.events.on(`settings:changed`, r),
    r());
}
function B(e, t, n, r = 8e3) {
  (A(), S(e.state.settings.lang === `en` ? `en` : `zh`));
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
  if ((T(o, t), a.appendChild(o), n)) {
    let e = k(a, n.label, () => {
      (a.remove(), n.run());
    });
    e.style.cssText = `flex-shrink:0;padding:8px 14px;min-height:40px`;
  }
  ((a.lang = e.state.settings.lang === `zh` ? `zh-TW` : `en`),
    i.appendChild(a),
    setTimeout(() => a.remove(), n ? r + 4e3 : r));
}
function showSaveUndo(e, t) {
  A();
  let n = !1,
    r = () => {
      if (e.state.resetting) return;
      if (document.querySelector(`#loader`)) {
        n ||
          ((n = !0),
          setTimeout(() => {
            ((n = !1), r());
          }, 250));
        return;
      }
      let i = s();
      i &&
        B(
          e,
          i === `account_loaded` ? F.toastAccountLoaded : F.toastGuestAdopted,
        );
      let a = o();
      a &&
        B(e, j(a.reason), {
          label: M(a.reason),
          run: () => {
            t.restore(a.id).catch(() => {});
          },
        });
    };
  (t.subscribe(r), r());
}
function showWalletGuard(e) {
  window.addEventListener(g, (t) => {
    let n = t.detail?.ntd ?? 0,
      r = u(n, d);
    r >= 1 && !e.state.resetting && B(e, P(l(r, c[d].currency)));
  });
}
function showStartupNotices(e) {
  let t = f(),
    n = (e) => {
      let t = () => {
        document.querySelector(`#loader`) ? setTimeout(t, 250) : e();
      };
      t();
    };
  (t &&
    n(() => {
      let n = {
          signed_out: F.noticeSignedOut,
          deleted: F.noticeDeleted,
          confirmed: F.noticeConfirmed,
          email_changed: F.noticeEmailChanged,
          password_updated: F.noticePasswordUpdated,
          signed_in: C(F.noticeSignedIn, { email: t.detail }),
        },
        r = {
          google_signed_in: C(F.noticeGoogle, { email: t.detail }),
          google_linked: C(F.noticeGoogleLinked, { email: t.detail }),
          google_fallback: C(F.noticeGoogleFallback, { email: t.detail }),
        };
      t.notice === `expired`
        ? showCloudPanel(e, `expired`)
        : r[t.notice]
          ? showCloudPanel(e, `home`, { notice: { message: r[t.notice], kind: `ok` } })
          : t.notice === `google_cancelled`
            ? B(e, F.noticeGoogleCancelled)
            : n[t.notice] && B(e, n[t.notice]);
    }),
    ae() && n(() => showCloudPanel(e, `password`)));
}
var V;
function Ce(n, r, i) {
  let a = {
    zh: n.zh.replace(`{${r}}`, i.zh),
    en: n.en.replace(`{${r}}`, i.en),
  };
  return t.on ? { ...a, ja: e(n).replace(`{${r}}`, e(i)) } : a;
}
function we(e, t) {
  return e.status === `update_required`
    ? F.updateRequired
    : t
      ? e.busy || e.status === `connecting`
        ? F.syncBusy
        : e.status === `offline`
          ? F.syncOffline
          : e.status === `dirty`
            ? F.syncDirty
            : e.status === `saved`
              ? e.syncedAt
                ? Ce(F.syncSaved, `time`, O(e.syncedAt))
                : { zh: `已同步`, en: `Synced` }
              : F.syncLocal
      : F.syncLocal;
}
