// tokyo/assets/phone-Crnwgx7Y 01 — createelement
// Lines 1-219 of readable/tokyo/assets/phone-Crnwgx7Y.pretty.js (statement-aligned).
import "./engine-14d5lda2.js";
import "./session-DVEw0yxj.js";
import {
  i as e,
  mountProfile as mountProfile,
  myProfile as myProfile,
  n as r,
  r as i,
  t as a,
} from "./profile-DAhvJU_P.js";
var o = 4e3,
  s = (e) => `${e.name}#${e.tag}`;
function c(t, n, c, l) {
  let u = document.createElement(`section`);
  ((u.className = `social-chat`), t.append(u));
  let d = document.createElement(`div`);
  ((d.className = `social-chat-head`), u.append(d));
  let f = document.createElement(`button`);
  ((f.type = `button`),
    (f.className = `ph-btn social-button`),
    (f.dataset.nav = `1`),
    i(f, a.chatBack, n),
    (f.onclick = () => l()),
    d.append(f));
  let p = document.createElement(`div`);
  ((p.className = `social-identity social-chat-who`), d.append(p));
  let m = document.createElement(`strong`);
  ((m.className = `social-name`), (m.textContent = c.name));
  let h = document.createElement(`span`);
  ((h.className = `social-tag`), (h.textContent = `#${c.tag}`), p.append(m, h));
  let g = document.createElement(`p`);
  ((g.className = `social-status`),
    g.setAttribute(`role`, `status`),
    u.append(g),
    i(g, a.loading, n));
  let _ = document.createElement(`div`);
  ((_.className = `social-chat-list`),
    _.setAttribute(`role`, `log`),
    _.setAttribute(`aria-live`, `polite`),
    u.append(_));
  let v = document.createElement(`p`);
  ((v.className = `social-hint social-chat-keep`),
    i(v, a.chatKeep, n),
    u.append(v));
  let y = document.createElement(`form`);
  ((y.className = `social-chat-form`), u.append(y));
  let b = document.createElement(`input`);
  ((b.type = `text`),
    (b.maxLength = 200),
    (b.autocomplete = `off`),
    (b.enterKeyHint = `send`),
    (b.dataset.nav = `1`),
    (b.placeholder = n.t(a.chatPlaceholder)),
    b.setAttribute(`aria-label`, n.t(a.chatPlaceholder)),
    y.append(b));
  let x = document.createElement(`button`);
  ((x.type = `submit`),
    (x.className = `ph-btn primary social-button`),
    (x.dataset.nav = `1`),
    i(x, a.chatSend, n),
    y.append(x));
  let S = n.events.on(`settings:changed`, () => {
      ((b.placeholder = n.t(a.chatPlaceholder)), D());
    }),
    C = !0,
    w = !1,
    T = [],
    E = ``;
  function D() {
    let e = `${n.t(a.chatSeen)}|${T.map((e) => `${e.id}:${+!!e.read_at}`).join(`,`)}`;
    if (e === E) return;
    let t = _.scrollHeight - _.scrollTop - _.clientHeight < 40 || !E;
    if (((E = e), _.replaceChildren(), !T.length)) {
      let e = document.createElement(`p`);
      ((e.className = `ph-empty social-empty`),
        i(e, a.chatEmpty, n),
        _.append(e));
    }
    let r = [...T].reverse().find((e) => e.mine);
    for (let e of T) {
      let t = document.createElement(`div`);
      ((t.className = `social-chat-line ${e.mine ? `mine` : `theirs`}`),
        _.append(t));
      let i = document.createElement(`p`);
      ((i.className = `social-chat-bubble`),
        (i.textContent = e.body),
        t.append(i));
      let o = document.createElement(`time`);
      ((o.className = `social-chat-time`), (o.dateTime = e.created_at));
      let s = new Date(e.created_at).toLocaleString(
        n.t({ zh: `zh-TW`, en: `en-US` }),
        {
          month: `numeric`,
          day: `numeric`,
          hour: `2-digit`,
          minute: `2-digit`,
        },
      );
      ((o.textContent = e === r && e.read_at ? `${s} · ${n.t(a.chatSeen)}` : s),
        t.append(o));
    }
    t && (_.scrollTop = _.scrollHeight);
  }
  async function O() {
    if (!C || w || !u.isConnected) return;
    w = !0;
    let t = await e(`list_friend_messages`, { p_handle: s(c) });
    if (((w = !1), C)) {
      if (t.status !== `ok`) {
        i(g, r(t.status), n);
        return;
      }
      ((g.textContent = ``),
        (T = t.messages ?? []),
        D(),
        document.dispatchEvent(new Event(`social:messages-read`)));
    }
  }
  ((y.onsubmit = (t) => {
    t.preventDefault();
    let a = b.value.trim();
    a &&
      !x.disabled &&
      ((x.disabled = !0),
      e(`send_friend_message`, { p_handle: s(c), p_body: a }).then((e) => {
        if (((x.disabled = !1), C)) {
          if (e.status !== `ok` || !e.message) {
            i(g, r(e.status), n);
            return;
          }
          ((g.textContent = ``),
            (b.value = ``),
            (T = [...T, e.message].slice(-20)),
            D(),
            (_.scrollTop = _.scrollHeight),
            b.focus());
        }
      }));
  }),
    b.addEventListener(`keydown`, (e) => {
      e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), l());
    }),
    O());
  let k = window.setInterval(() => {
    document.visibilityState === `visible` && O();
  }, o);
  return (
    setTimeout(() => {
      C && !n.input?.isTouch && b.focus();
    }, 0),
    () => {
      ((C = !1), window.clearInterval(k), S(), u.remove());
    }
  );
}
var l = () => Promise.resolve({ status: `off` }),
  u = () => l(),
  d = (e) => `${e.name}#${e.tag}`,
  f = () => document.dispatchEvent(new Event(`social:changed`));
function startSummaryPolling(t, n) {
  let r = !0,
    i = !1,
    o = ``,
    s = () => {
      for (let e of t.querySelectorAll(`.social-badge`))
        e.setAttribute(
          `aria-label`,
          `${n.t(a.unread)}: ${e.dataset.count ?? `0`}`,
        );
    },
    c = n.events.on(`settings:changed`, s);
  async function l() {
    if (!r || i || !t.isConnected) return;
    i = !0;
    let [n, a] = await Promise.all([e(`inbox_summary`), u()]);
    i = !1;
    let c = a.status === `ok` && Number.isSafeInteger(a.unread) ? a.unread : 0;
    if ((n.status === `ok` && (n.pending = (n.pending ?? 0) + c), r)) {
      if (n.status === `ok`) {
        let e = `${n.unread ?? 0}:${n.pending ?? 0}:${a.status === `ok` ? (a.newest ?? ``) : ``}`;
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
  let d = window.setInterval(() => {
    l();
  }, 12e4);
  return (
    document.addEventListener(`social:changed`, l),
    document.addEventListener(`social:messages-read`, l),
    () => {
      ((r = !1),
        c(),
        window.clearInterval(d),
        document.removeEventListener(`social:changed`, l),
        document.removeEventListener(`social:messages-read`, l));
    }
  );
}
