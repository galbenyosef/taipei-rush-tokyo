// tokyo/assets/phone-Crnwgx7Y 02 — classname
// Lines 220-598 of readable/tokyo/assets/phone-Crnwgx7Y.pretty.js (statement-aligned).
function mountSocialApp(o, s, l) {
  let p = (e, t) => i(e, t, l);
  function m(e, t, n) {
    let r = document.createElement(t);
    return (i(r, n, l), e.append(r), r);
  }
  function h(e, t, n) {
    let r = m(e, `button`, t);
    return (
      (r.className = `ph-btn social-button`),
      (r.type = `button`),
      (r.dataset.nav = `1`),
      (r.onclick = () => {
        ((r.disabled = !0),
          n().finally(() => {
            r.disabled = !1;
          }));
      }),
      r
    );
  }
  let g = document.createElement(`section`);
  ((g.className = `social-${o}`), s.append(g));
  let _ = m(g, `p`, a.loading);
  ((_.className = `social-status`), _.setAttribute(`role`, `status`));
  let v = document.createElement(`div`);
  ((v.className = `social-content`), g.append(v));
  let y = !0,
    b = !1,
    x = !1,
    S = !1,
    C,
    w,
    T,
    E = ``,
    D = null,
    O = null,
    k,
    A = new Map(),
    j = !1;
  function M(e) {
    (k?.(), (v.hidden = !0), (_.hidden = !0), (k = c(g, l, e, N)));
  }
  function N() {
    (k?.(), (k = void 0), (v.hidden = !1), (_.hidden = !1), R(), f());
  }
  function P(e, t) {
    let n = document.createElement(`strong`);
    ((n.className = `social-name`), (n.textContent = t.name));
    let r = document.createElement(`span`);
    ((r.className = `social-tag`), (r.textContent = `#${t.tag}`));
    let i = document.createElement(`div`);
    return ((i.className = `social-identity`), i.append(n, r), e.append(i), i);
  }
  function F(e) {
    let t = document.createElement(`section`);
    ((t.className = `social-profile social-me`),
      e.append(t),
      m(t, `h3`, a.myId));
    let r = document.createElement(`div`);
    ((r.className = `social-me-row`), t.append(r));
    let i = document.createElement(`p`);
    ((i.className = `social-handle`), (i.textContent = `…`), r.append(i));
    let o = m(r, `button`, a.copyId);
    ((o.className = `ph-btn social-button`),
      (o.type = `button`),
      (o.dataset.nav = `1`),
      (o.dataset.key = `copy-id`),
      (o.disabled = !0),
      (m(t, `p`, a.myIdHint).className = `social-hint`),
      myProfile().then((e) => {
        if (!e || !t.isConnected) {
          t.remove();
          return;
        }
        (i.replaceChildren(),
          (P(i, e).className = `social-me-handle`),
          (o.disabled = !1),
          (o.onclick = () => {
            Promise.resolve()
              .then(() => navigator.clipboard.writeText(d(e)))
              .then(
                () => p(_, a.copied),
                () => p(_, a.copyFailed),
              );
          }));
      }));
  }
  async function I(t, n, i = a.done) {
    S = !0;
    let o = await e(t, n);
    ((S = !1),
      y &&
        g.isConnected &&
        ((o.status === `ok` ||
          [`not_pending`, `not_found`, `already_friends`].includes(o.status)) &&
          (T?.replaceChildren(), await R(O), f()),
        p(
          _,
          o.status === `ok`
            ? i
            : r(o.status, `retry_after_s` in o ? Number(o.retry_after_s) : 0),
        )));
  }
  function L(e, t) {
    let n = !1;
    h(e, a.block, async () => {
      if (!n) {
        ((n = !0), p(_, a.blockConfirm));
        return;
      }
      await I(`block_player`, { p_handle: d(t) });
    }).classList.add(`danger`);
  }
  async function R(n = null) {
    if (!y || !g.isConnected || k) return;
    if (b || S) {
      x = !0;
      return;
    }
    b = !0;
    let [i, s] =
      o === `friends`
        ? await Promise.all([e(`list_friends`), u()])
        : [await e(`list_inbox`, { p_before: n }), null];
    if (
      ((b = !1),
      !k &&
        ((j = s?.status === `ok`),
        (A = new Map((s?.senders ?? []).map((e) => [e.user_id, e.unread]))),
        y && g.isConnected))
    ) {
      if (i.status !== `ok`) {
        if (
          (p(
            _,
            r(i.status, `retry_after_s` in i ? Number(i.retry_after_s) : 0),
          ),
          i.status === `name_required` && v.querySelector(`.social-profile`))
        )
          return;
        (v.replaceChildren(),
          (C = void 0),
          (w = void 0),
          i.status === `name_required` &&
            mountProfile(v, l, () => {
              (f(), R());
            }),
          h(v, a.refresh, async () => {
            await R();
          }));
        return;
      }
      if (
        (_.textContent === l.t(a.loading) && (_.textContent = ``),
        o === `friends`)
      ) {
        let t = i;
        if (!C) {
          (v.replaceChildren(),
            F(v),
            (C = document.createElement(`form`)),
            (C.className = `social-form social-search`),
            v.append(C));
          let t = m(C, `label`, a.playerHandle),
            n = document.createElement(`div`);
          ((n.className = `social-search-row`), C.append(n));
          let i = document.createElement(`input`);
          ((i.id = `social-search-${o}`),
            (i.name = `friend-handle`),
            (i.value = E),
            (i.required = !0),
            (i.maxLength = 40),
            (i.dataset.nav = `1`),
            t.setAttribute(`for`, i.id),
            n.append(i),
            (i.oninput = () => {
              E = i.value;
            }));
          let s = m(n, `button`, a.search);
          ((s.className = `ph-btn primary social-button`),
            (s.type = `submit`),
            (s.dataset.nav = `1`));
          let c = document.createElement(`div`);
          ((c.className = `social-found`),
            v.append(c),
            (T = c),
            (C.onsubmit = (t) => {
              (t.preventDefault(),
                !s.disabled &&
                  ((s.disabled = !0),
                  p(_, a.loading),
                  c.replaceChildren(),
                  e(`find_player`, { p_handle: i.value }).then((e) => {
                    if (((s.disabled = !1), !y || !g.isConnected)) return;
                    if (e.status !== `ok` || !e.player) {
                      p(_, r(e.status));
                      return;
                    }
                    _.textContent = ``;
                    let t = document.createElement(`div`);
                    ((t.className = `social-row`), c.append(t), P(t, e.player));
                    let n = document.createElement(`div`);
                    ((n.className = `social-actions`),
                      t.append(n),
                      h(n, a.send, async () => {
                        await I(
                          `send_friend_request`,
                          { p_handle: d(e.player) },
                          a.requestSent,
                        );
                      }).classList.add(`primary`),
                      L(n, e.player));
                  })));
            }),
            (w = document.createElement(`div`)),
            (w.className = `social-groups`),
            v.append(w),
            h(v, a.refresh, async () => {
              await R();
            }));
        }
        let n = (
          g.contains(document.activeElement) ? document.activeElement : null
        )?.dataset.socialKey;
        w.replaceChildren();
        for (let [e, n] of [
          [`incoming`, a.incoming],
          [`outgoing`, a.outgoing],
          [`friends`, a.friends],
        ]) {
          let r = document.createElement(`div`);
          ((r.className = `social-group social-group-${e}`),
            w.append(r),
            (m(r, `h3`, n).className = `social-section-title`));
          let i = t[e] ?? [];
          i.length || (m(r, `p`, a.empty).className = `ph-empty social-empty`);
          for (let t of i) {
            let n = `player` in t ? t.player : t,
              i = document.createElement(`div`);
            ((i.className = `social-row`), r.append(i), P(i, n));
            let o = document.createElement(`div`);
            if (
              ((o.className = `social-actions`),
              i.append(o),
              `request_id` in t && e === `incoming`)
            )
              (h(o, a.accept, async () => {
                await I(`respond_friend_request`, {
                  p_request_id: t.request_id,
                  p_accept: !0,
                });
              }).classList.add(`primary`),
                h(o, a.decline, async () => {
                  await I(`respond_friend_request`, {
                    p_request_id: t.request_id,
                    p_accept: !1,
                  });
                }));
            else if (`request_id` in t)
              h(o, a.cancel, async () => {
                await I(`cancel_friend_request`, {
                  p_request_id: t.request_id,
                });
              });
            else {
              if (j) {
                let e = h(o, a.message, async () => {
                  M(n);
                });
                e.classList.add(`primary`, `social-talk`);
                let t = A.get(n.user_id) ?? 0;
                if (t > 0) {
                  let n = document.createElement(`span`);
                  ((n.className = `social-badge social-talk-badge`),
                    (n.textContent = t > 99 ? `99+` : String(t)),
                    e.append(n));
                }
              }
              h(o, a.remove, async () => {
                await I(`remove_friend`, { p_handle: d(n) });
              }).classList.add(`danger`);
            }
            L(o, n);
            for (let [t, r] of o.querySelectorAll(`button`).entries())
              r.dataset.socialKey = `${e}:${n.user_id}:${t}`;
          }
        }
        n &&
          (
            [...w.querySelectorAll(`[data-social-key]`)].find(
              (e) => e.dataset.socialKey === n,
            ) ?? v.querySelector(`[data-nav]`)
          )?.focus();
      } else {
        let e = i;
        ((O = n),
          v.replaceChildren(),
          (m(v, `p`, a.noChat).className = `social-hint`));
        let t = e.items ?? [];
        (t.length || (m(v, `p`, a.empty).className = `ph-empty social-empty`),
          t.some((e) => !e.read_at) &&
            h(v, a.readAll, async () => {
              await I(`mark_inbox_read`, {
                p_ids: t.filter((e) => !e.read_at).map((e) => e.id),
              });
            }));
        for (let e of t) {
          let t = document.createElement(`article`);
          ((t.className = `social-row social-inbox-row${e.read_at ? `` : ` social-unread`}`),
            v.append(t));
          let n = document.createElement(`div`);
          if (((n.className = `social-inbox-copy`), t.append(n), !e.read_at)) {
            let e = m(n, `span`, a.unread);
            e.className = `social-unread-dot`;
          }
          let r = a[e.kind],
            i = document.createElement(`p`);
          ((i.className = `social-inbox-who`), n.append(i));
          let o = document.createElement(`strong`);
          ((o.className = `social-name`), (o.textContent = e.actor.name));
          let s = document.createElement(`span`);
          ((s.className = `social-tag`),
            (s.textContent = `#${e.actor.tag}`),
            i.append(o, s),
            m(n, `p`, {
              zh: r.zh.replace(`{name}`, ``).trim(),
              en: r.en.replace(`{name}`, ``).trim(),
            }));
          let c = document.createElement(`time`);
          ((c.dateTime = e.created_at),
            p(c, {
              zh: new Date(e.created_at).toLocaleString(`zh-TW`, {
                dateStyle: `short`,
                timeStyle: `short`,
              }),
              en: new Date(e.created_at).toLocaleString(`en-US`, {
                dateStyle: `short`,
                timeStyle: `short`,
              }),
            }),
            n.append(c),
            e.read_at ||
              h(t, a.read, async () => {
                await I(`mark_inbox_read`, { p_ids: [e.id] });
              }));
        }
        ((D = e.next_before ?? null),
          D &&
            h(v, a.more, async () => {
              await R(D);
            }),
          h(v, a.refresh, async () => {
            await R();
          }));
      }
      x && ((x = !1), R(n));
    }
  }
  let z = () => {
      R();
    },
    B;
  return (
    o === `friends` &&
      (document.addEventListener(`social:summary`, z),
      document.addEventListener(`social:changed`, z),
      (B = window.setInterval(z, 3e4))),
    R(),
    () => {
      ((y = !1),
        k?.(),
        (k = void 0),
        B !== void 0 && window.clearInterval(B),
        document.removeEventListener(`social:summary`, z),
        document.removeEventListener(`social:changed`, z));
    }
  );
}
