// tokyo/assets/profile-DAhvJU_P 02 — append
// Lines 332-543 of readable/tokyo/assets/profile-DAhvJU_P.pretty.js (statement-aligned).
function mountNameView(e, t) {
  let n = document.createElement(`div`);
  ((n.className = `social-name-view`), e.append(n));
  let r = (e, t = `info`) => {
      if ((n.querySelector(`.social-name-status`)?.remove(), !e)) return;
      let r = o(
        n,
        e,
        `social-name-status${t === `error` ? ` cloud-error` : ``}`,
      );
      (r.setAttribute(`role`, t === `error` ? `alert` : `status`),
        n.prepend(r));
    },
    l,
    d = (e) => {
      ((l = e),
        n.replaceChildren(),
        e && n.append(b(e, `social-name-current`)));
      let f = x(e);
      (f && o(n, f, `social-name-wait`).setAttribute(`role`, `status`),
        o(n, e ? m.renameRule : m.claimIntro, `cloud-hint`));
      let p = document.createElement(`form`);
      ((p.noValidate = !0), (p.className = `social-name-form`), n.append(p));
      let g = s(p, `player-name`, m.name, `text`, e?.name ?? ``);
      ((g.maxLength = 32),
        (g.minLength = 2),
        (g.autocomplete = `off`),
        (g.dataset.nav = `1`),
        o(p, m.handleHint, `cloud-hint`));
      let v = document.createElement(`div`);
      ((v.className = `cloud-actions`), p.append(v));
      let y = c(v, e ? m.rename : m.save, () => {}, `primary`);
      ((y.type = `submit`),
        (y.dataset.key = `name-save`),
        f && ((g.disabled = !0), (y.disabled = !0)));
      let S = document.createElement(`div`);
      ((S.className = `social-name-confirm`), (S.hidden = !0), p.append(S));
      let C = document.createElement(`p`);
      S.append(C);
      let w = document.createElement(`div`);
      ((w.className = `cloud-actions`), S.append(w));
      let T = !1,
        E = ``,
        D = c(
          w,
          m.confirm,
          () => {
            T ||
              ((T = !0),
              (D.disabled = !0),
              (O.disabled = !0),
              r(m.loading),
              u(e ? `change_name` : `set_name`, { p_name: E })
                .then(_)
                .then((i) => {
                  if (n.isConnected) {
                    if (
                      ((T = !1),
                      (D.disabled = !1),
                      (O.disabled = !1),
                      i.status === `ok` && i.profile)
                    ) {
                      t(e ? m.renamed : m.saved);
                      return;
                    }
                    if (i.status === `rename_cooldown` && e) {
                      d({ ...e, next_rename_at: i.next_rename_at ?? null });
                      return;
                    }
                    ((S.hidden = !0),
                      (y.hidden = !1),
                      (g.readOnly = !1),
                      r(h(i.status), `error`),
                      g.focus());
                  }
                }));
          },
          `primary`,
        );
      D.dataset.key = `name-confirm`;
      let O = c(w, m.editName, () => {
        T || ((S.hidden = !0), (y.hidden = !1), (g.readOnly = !1), g.focus());
      });
      ((O.dataset.key = `name-edit`),
        (p.onsubmit = (n) => {
          if ((n.preventDefault(), !(T || f || !S.hidden))) {
            if (((E = g.value.trim()), e && E === e.name)) {
              t(m.renamed);
              return;
            }
            (a(C, i(e ? m.confirmRename : m.confirmName, { name: E })),
              (S.hidden = !1),
              (y.hidden = !0),
              (g.readOnly = !0),
              r(null),
              D.focus());
          }
        }),
        f || g.focus());
    };
  (g === void 0 ? r(m.loading) : d(g),
    v().then((e) => {
      if (!n.isConnected) return;
      if (e.status !== `ok`) {
        (n.replaceChildren(), r(h(e.status), `error`));
        return;
      }
      let t = e.profile ?? null,
        i = n.querySelector(`input[name="player-name"]`);
      (l === void 0 ||
        (JSON.stringify(t) !== JSON.stringify(l) &&
          (!i || i.value === (l?.name ?? ``)))) &&
        d(t);
    }));
}
function mountProfile(e, t, n) {
  let r = (e, n) => p(e, n, t),
    a = document.createElement(`section`);
  ((a.className = `social-profile`), e.append(a));
  let o = document.createElement(`h3`);
  (r(o, m.profile), a.append(o));
  let s = document.createElement(`p`);
  ((s.className = `social-status`),
    s.setAttribute(`role`, `status`),
    r(s, m.name_required),
    a.append(s));
  let c = document.createElement(`form`);
  c.className = `social-form social-name-form`;
  let l = document.createElement(`label`);
  r(l, m.name);
  let d = document.createElement(`input`);
  ((d.type = `text`),
    (d.name = `player-name`),
    (d.required = !0),
    (d.minLength = 2),
    (d.maxLength = 32),
    (d.autocomplete = `off`),
    (d.dataset.nav = `1`),
    l.append(d),
    c.append(l));
  let f = document.createElement(`p`);
  ((f.className = `social-hint`), r(f, m.claimIntro), c.append(f));
  let g = document.createElement(`button`);
  ((g.className = `ph-btn primary social-button`),
    (g.type = `submit`),
    (g.dataset.nav = `1`),
    r(g, m.save),
    c.append(g));
  let v = document.createElement(`div`);
  ((v.className = `social-confirm`), (v.hidden = !0));
  let y = document.createElement(`p`);
  ((y.className = `social-confirm-question`), v.append(y));
  let b = document.createElement(`div`);
  ((b.className = `social-actions`), v.append(b));
  let x = document.createElement(`button`);
  ((x.className = `ph-btn primary social-button`),
    (x.type = `button`),
    (x.dataset.nav = `1`),
    r(x, m.confirm));
  let S = document.createElement(`button`);
  ((S.className = `ph-btn social-button`),
    (S.type = `button`),
    (S.dataset.nav = `1`),
    r(S, m.editName),
    b.append(x, S),
    c.append(v),
    a.append(c));
  let C = !1,
    w = ``;
  ((c.onsubmit = (e) => {
    (e.preventDefault(),
      !C &&
        v.hidden &&
        ((w = d.value.trim()),
        r(y, i(m.confirmName, { name: w })),
        (v.hidden = !1),
        (g.hidden = !0),
        (d.readOnly = !0),
        x.focus()));
  }),
    (S.onclick = () => {
      C || ((v.hidden = !0), (g.hidden = !1), (d.readOnly = !1), d.focus());
    }),
    (x.onclick = () => {
      C ||
        v.hidden ||
        ((C = !0),
        (x.disabled = !0),
        (S.disabled = !0),
        r(s, m.loading),
        u(`set_name`, { p_name: w })
          .then(_)
          .then((e) => {
            if (a.isConnected) {
              if (
                ((C = !1),
                (x.disabled = !1),
                (S.disabled = !1),
                e.status === `ok` && e.profile)
              ) {
                (a.remove(), n?.());
                return;
              }
              ((v.hidden = !0),
                (g.hidden = !1),
                (d.readOnly = !1),
                r(s, h(e.status)),
                d.focus());
            }
          }));
    }));
}
