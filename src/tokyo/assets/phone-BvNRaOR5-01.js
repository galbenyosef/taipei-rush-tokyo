// tokyo/assets/phone-BvNRaOR5 01 — dispatchevent
// Lines 1-66 of readable/tokyo/assets/phone-BvNRaOR5.pretty.js (statement-aligned).
import {
  i as e,
  mountProfile as mountProfile,
  myProfile as myProfile,
  n as r,
  r as i,
  t as a,
} from "./profile-BmQKTAov.js";
var o = (e) => `${e.name}#${e.tag}`,
  s = () => document.dispatchEvent(new Event(`social:changed`));
function startSummaryPolling(t, n) {
  let i = !0,
    a = !1,
    o = ``,
    s = () => {
      for (let e of t.querySelectorAll(`.social-badge`))
        e.setAttribute(
          `aria-label`,
          `${n.t(r.unread)}: ${e.dataset.count ?? `0`}`,
        );
    },
    c = n.events.on(`settings:changed`, s);
  async function l() {
    if (!i || a || !t.isConnected) return;
    a = !0;
    let n = await e(`inbox_summary`);
    if (((a = !1), i)) {
      if (n.status === `ok`) {
        let e = `${n.unread ?? 0}:${n.pending ?? 0}`;
        e !== o &&
          ((o = e), document.dispatchEvent(new Event(`social:summary`)));
      }
      for (let [e, r] of [
        [`inbox`, n.unread],
        [`friends`, n.pending],
      ]) {
        let i = t.querySelector(`[data-app="${e}"]`);
        if (!i) continue;
        i.classList.add(`social-tile`);
        let a = i.querySelector(`.social-badge`);
        a ||
          ((a = document.createElement(`span`)),
          (a.className = `social-badge`),
          i.append(a));
        let o = n.status === `ok` && Number.isSafeInteger(r) && r > 0 ? r : 0;
        ((a.hidden = o === 0),
          (a.textContent = o > 99 ? `99+` : String(o)),
          (a.dataset.count = String(o)),
          s());
      }
    }
  }
  l();
  let u = window.setInterval(() => {
    l();
  }, 12e4);
  return (
    document.addEventListener(`social:changed`, l),
    () => {
      ((i = !1),
        c(),
        window.clearInterval(u),
        document.removeEventListener(`social:changed`, l));
    }
  );
}
