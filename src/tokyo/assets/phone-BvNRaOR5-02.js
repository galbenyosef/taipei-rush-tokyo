// tokyo/assets/phone-BvNRaOR5 02 — classname
// Lines 67-411 of readable/tokyo/assets/phone-BvNRaOR5.pretty.js (statement-aligned).
function l(c, l, u) {
  let d = (e, t) => a(e, t, u);
  function f(e, t, n) {
    let r = document.createElement(t);
    return (a(r, n, u), e.append(r), r);
  }
  function p(e, t, n) {
    let r = f(e, `button`, t);
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
  let m = document.createElement(`section`);
  ((m.className = `social-${c}`), l.append(m));
  let h = f(m, `p`, r.loading);
  ((h.className = `social-status`), h.setAttribute(`role`, `status`));
  let g = document.createElement(`div`);
  ((g.className = `social-content`), m.append(g));
  let _ = !0,
    v = !1,
    y = !1,
    b = !1,
    x,
    S,
    C,
    w = ``,
    T = null,
    E = null;
  function D(e, t) {
    let n = document.createElement(`strong`);
    ((n.className = `social-name`), (n.textContent = t.name));
    let r = document.createElement(`span`);
    ((r.className = `social-tag`), (r.textContent = `#${t.tag}`));
    let i = document.createElement(`div`);
    return ((i.className = `social-identity`), i.append(n, r), e.append(i), i);
  }
  function O(e) {
    let t = document.createElement(`section`);
    ((t.className = `social-profile social-me`),
      e.append(t),
      f(t, `h3`, r.myId));
    let i = document.createElement(`div`);
    ((i.className = `social-me-row`), t.append(i));
    let a = document.createElement(`p`);
    ((a.className = `social-handle`), (a.textContent = `…`), i.append(a));
    let s = f(i, `button`, r.copyId);
    ((s.className = `ph-btn social-button`),
      (s.type = `button`),
      (s.dataset.nav = `1`),
      (s.dataset.key = `copy-id`),
      (s.disabled = !0),
      (f(t, `p`, r.myIdHint).className = `social-hint`),
      n().then((e) => {
        if (!e || !t.isConnected) {
          t.remove();
          return;
        }
        (a.replaceChildren(),
          (D(a, e).className = `social-me-handle`),
          (s.disabled = !1),
          (s.onclick = () => {
            Promise.resolve()
              .then(() => navigator.clipboard.writeText(o(e)))
              .then(
                () => d(h, r.copied),
                () => d(h, r.copyFailed),
              );
          }));
      }));
  }
  async function k(t, n, a = r.done) {
    b = !0;
    let o = await e(t, n);
    ((b = !1),
      _ &&
        m.isConnected &&
        ((o.status === `ok` ||
          [`not_pending`, `not_found`, `already_friends`].includes(o.status)) &&
          (C?.replaceChildren(), await j(E), s()),
        d(
          h,
          o.status === `ok`
            ? a
            : i(o.status, `retry_after_s` in o ? Number(o.retry_after_s) : 0),
        )));
  }
  function A(e, t) {
    let n = !1;
    p(e, r.block, async () => {
      if (!n) {
        ((n = !0), d(h, r.blockConfirm));
        return;
      }
      await k(`block_player`, { p_handle: o(t) });
    }).classList.add(`danger`);
  }
  async function j(n = null) {
    if (!_ || !m.isConnected) return;
    if (v || b) {
      y = !0;
      return;
    }
    v = !0;
    let a =
      c === `friends`
        ? await e(`list_friends`)
        : await e(`list_inbox`, { p_before: n });
    if (((v = !1), _ && m.isConnected)) {
      if (a.status !== `ok`) {
        if (
          (d(
            h,
            i(a.status, `retry_after_s` in a ? Number(a.retry_after_s) : 0),
          ),
          a.status === `name_required` && g.querySelector(`.social-profile`))
        )
          return;
        (g.replaceChildren(),
          (x = void 0),
          (S = void 0),
          a.status === `name_required` &&
            t(g, u, () => {
              (s(), j());
            }),
          p(g, r.refresh, async () => {
            await j();
          }));
        return;
      }
      if (
        (h.textContent === u.t(r.loading) && (h.textContent = ``),
        c === `friends`)
      ) {
        let t = a;
        if (!x) {
          (g.replaceChildren(),
            O(g),
            (x = document.createElement(`form`)),
            (x.className = `social-form social-search`),
            g.append(x));
          let t = f(x, `label`, r.playerHandle),
            n = document.createElement(`div`);
          ((n.className = `social-search-row`), x.append(n));
          let a = document.createElement(`input`);
          ((a.id = `social-search-${c}`),
            (a.name = `friend-handle`),
            (a.value = w),
            (a.required = !0),
            (a.maxLength = 40),
            (a.dataset.nav = `1`),
            t.setAttribute(`for`, a.id),
            n.append(a),
            (a.oninput = () => {
              w = a.value;
            }));
          let s = f(n, `button`, r.search);
          ((s.className = `ph-btn primary social-button`),
            (s.type = `submit`),
            (s.dataset.nav = `1`));
          let l = document.createElement(`div`);
          ((l.className = `social-found`),
            g.append(l),
            (C = l),
            (x.onsubmit = (t) => {
              (t.preventDefault(),
                !s.disabled &&
                  ((s.disabled = !0),
                  d(h, r.loading),
                  l.replaceChildren(),
                  e(`find_player`, { p_handle: a.value }).then((e) => {
                    if (((s.disabled = !1), !_ || !m.isConnected)) return;
                    if (e.status !== `ok` || !e.player) {
                      d(h, i(e.status));
                      return;
                    }
                    h.textContent = ``;
                    let t = document.createElement(`div`);
                    ((t.className = `social-row`), l.append(t), D(t, e.player));
                    let n = document.createElement(`div`);
                    ((n.className = `social-actions`),
                      t.append(n),
                      p(n, r.send, async () => {
                        await k(
                          `send_friend_request`,
                          { p_handle: o(e.player) },
                          r.requestSent,
                        );
                      }).classList.add(`primary`),
                      A(n, e.player));
                  })));
            }),
            (S = document.createElement(`div`)),
            (S.className = `social-groups`),
            g.append(S),
            p(g, r.refresh, async () => {
              await j();
            }));
        }
        let n = (
          m.contains(document.activeElement) ? document.activeElement : null
        )?.dataset.socialKey;
        S.replaceChildren();
        for (let [e, n] of [
          [`incoming`, r.incoming],
          [`outgoing`, r.outgoing],
          [`friends`, r.friends],
        ]) {
          let i = document.createElement(`div`);
          ((i.className = `social-group social-group-${e}`),
            S.append(i),
            (f(i, `h3`, n).className = `social-section-title`));
          let a = t[e] ?? [];
          a.length || (f(i, `p`, r.empty).className = `ph-empty social-empty`);
          for (let t of a) {
            let n = `player` in t ? t.player : t,
              a = document.createElement(`div`);
            ((a.className = `social-row`), i.append(a), D(a, n));
            let s = document.createElement(`div`);
            ((s.className = `social-actions`),
              a.append(s),
              `request_id` in t && e === `incoming`
                ? (p(s, r.accept, async () => {
                    await k(`respond_friend_request`, {
                      p_request_id: t.request_id,
                      p_accept: !0,
                    });
                  }).classList.add(`primary`),
                  p(s, r.decline, async () => {
                    await k(`respond_friend_request`, {
                      p_request_id: t.request_id,
                      p_accept: !1,
                    });
                  }))
                : `request_id` in t
                  ? p(s, r.cancel, async () => {
                      await k(`cancel_friend_request`, {
                        p_request_id: t.request_id,
                      });
                    })
                  : p(s, r.remove, async () => {
                      await k(`remove_friend`, { p_handle: o(n) });
                    }).classList.add(`danger`),
              A(s, n));
            for (let [t, r] of s.querySelectorAll(`button`).entries())
              r.dataset.socialKey = `${e}:${n.user_id}:${t}`;
          }
        }
        n &&
          (
            [...S.querySelectorAll(`[data-social-key]`)].find(
              (e) => e.dataset.socialKey === n,
            ) ?? g.querySelector(`[data-nav]`)
          )?.focus();
      } else {
        let e = a;
        ((E = n),
          g.replaceChildren(),
          (f(g, `p`, r.noChat).className = `social-hint`));
        let t = e.items ?? [];
        (t.length || (f(g, `p`, r.empty).className = `ph-empty social-empty`),
          t.some((e) => !e.read_at) &&
            p(g, r.readAll, async () => {
              await k(`mark_inbox_read`, {
                p_ids: t.filter((e) => !e.read_at).map((e) => e.id),
              });
            }));
        for (let e of t) {
          let t = document.createElement(`article`);
          ((t.className = `social-row social-inbox-row${e.read_at ? `` : ` social-unread`}`),
            g.append(t));
          let n = document.createElement(`div`);
          if (((n.className = `social-inbox-copy`), t.append(n), !e.read_at)) {
            let e = f(n, `span`, r.unread);
            e.className = `social-unread-dot`;
          }
          let i = r[e.kind],
            a = document.createElement(`p`);
          ((a.className = `social-inbox-who`), n.append(a));
          let o = document.createElement(`strong`);
          ((o.className = `social-name`), (o.textContent = e.actor.name));
          let s = document.createElement(`span`);
          ((s.className = `social-tag`),
            (s.textContent = `#${e.actor.tag}`),
            a.append(o, s),
            f(n, `p`, {
              zh: i.zh.replace(`{name}`, ``).trim(),
              en: i.en.replace(`{name}`, ``).trim(),
            }));
          let c = document.createElement(`time`);
          ((c.dateTime = e.created_at),
            d(c, {
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
              p(t, r.read, async () => {
                await k(`mark_inbox_read`, { p_ids: [e.id] });
              }));
        }
        ((T = e.next_before ?? null),
          T &&
            p(g, r.more, async () => {
              await j(T);
            }),
          p(g, r.refresh, async () => {
            await j();
          }));
      }
      y && ((y = !1), j(n));
    }
  }
  let M = () => {
      j();
    },
    N;
  return (
    c === `friends` &&
      (document.addEventListener(`social:summary`, M),
      document.addEventListener(`social:changed`, M),
      (N = window.setInterval(M, 3e4))),
    j(),
    () => {
      ((_ = !1),
        N !== void 0 && window.clearInterval(N),
        document.removeEventListener(`social:summary`, M),
        document.removeEventListener(`social:changed`, M));
    }
  );
}
