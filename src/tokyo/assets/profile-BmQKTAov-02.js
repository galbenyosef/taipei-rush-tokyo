// tokyo/assets/profile-BmQKTAov 02 — append
// Lines 306-517 of readable/tokyo/assets/profile-BmQKTAov.pretty.js (statement-aligned).
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
    p = (e) => {
      ((l = e),
        n.replaceChildren(),
        e && n.append(b(e, `social-name-current`)));
      let m = x(e);
      (m && o(n, m, `social-name-wait`).setAttribute(`role`, `status`),
        o(n, e ? d.renameRule : d.claimIntro, `cloud-hint`));
      let h = document.createElement(`form`);
      ((h.noValidate = !0), (h.className = `social-name-form`), n.append(h));
      let g = s(h, `player-name`, d.name, `text`, e?.name ?? ``);
      ((g.maxLength = 32),
        (g.minLength = 2),
        (g.autocomplete = `off`),
        (g.dataset.nav = `1`),
        o(h, d.handleHint, `cloud-hint`));
      let v = document.createElement(`div`);
      ((v.className = `cloud-actions`), h.append(v));
      let y = c(v, e ? d.rename : d.save, () => {}, `primary`);
      ((y.type = `submit`),
        (y.dataset.key = `name-save`),
        m && ((g.disabled = !0), (y.disabled = !0)));
      let S = document.createElement(`div`);
      ((S.className = `social-name-confirm`), (S.hidden = !0), h.append(S));
      let C = document.createElement(`p`);
      S.append(C);
      let w = document.createElement(`div`);
      ((w.className = `cloud-actions`), S.append(w));
      let T = !1,
        E = ``,
        D = c(
          w,
          d.confirm,
          () => {
            T ||
              ((T = !0),
              (D.disabled = !0),
              (O.disabled = !0),
              r(d.loading),
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
                      t(e ? d.renamed : d.saved);
                      return;
                    }
                    if (i.status === `rename_cooldown` && e) {
                      p({ ...e, next_rename_at: i.next_rename_at ?? null });
                      return;
                    }
                    ((S.hidden = !0),
                      (y.hidden = !1),
                      (g.readOnly = !1),
                      r(f(i.status), `error`),
                      g.focus());
                  }
                }));
          },
          `primary`,
        );
      D.dataset.key = `name-confirm`;
      let O = c(w, d.editName, () => {
        T || ((S.hidden = !0), (y.hidden = !1), (g.readOnly = !1), g.focus());
      });
      ((O.dataset.key = `name-edit`),
        (h.onsubmit = (n) => {
          if ((n.preventDefault(), !(T || m || !S.hidden))) {
            if (((E = g.value.trim()), e && E === e.name)) {
              t(d.renamed);
              return;
            }
            (a(C, i(e ? d.confirmRename : d.confirmName, { name: E })),
              (S.hidden = !1),
              (y.hidden = !0),
              (g.readOnly = !0),
              r(null),
              D.focus());
          }
        }),
        m || g.focus());
    };
  (g === void 0 ? r(d.loading) : p(g),
    v().then((e) => {
      if (!n.isConnected) return;
      if (e.status !== `ok`) {
        (n.replaceChildren(), r(f(e.status), `error`));
        return;
      }
      let t = e.profile ?? null,
        i = n.querySelector(`input[name="player-name"]`);
      (l === void 0 ||
        (JSON.stringify(t) !== JSON.stringify(l) &&
          (!i || i.value === (l?.name ?? ``)))) &&
        p(t);
    }));
}
function mountProfile(e, t, n) {
  let r = (e, n) => h(e, n, t),
    a = document.createElement(`section`);
  ((a.className = `social-profile`), e.append(a));
  let o = document.createElement(`h3`);
  (r(o, d.profile), a.append(o));
  let s = document.createElement(`p`);
  ((s.className = `social-status`),
    s.setAttribute(`role`, `status`),
    r(s, d.name_required),
    a.append(s));
  let c = document.createElement(`form`);
  c.className = `social-form social-name-form`;
  let l = document.createElement(`label`);
  r(l, d.name);
  let p = document.createElement(`input`);
  ((p.type = `text`),
    (p.name = `player-name`),
    (p.required = !0),
    (p.minLength = 2),
    (p.maxLength = 32),
    (p.autocomplete = `off`),
    (p.dataset.nav = `1`),
    l.append(p),
    c.append(l));
  let m = document.createElement(`p`);
  ((m.className = `social-hint`), r(m, d.claimIntro), c.append(m));
  let g = document.createElement(`button`);
  ((g.className = `ph-btn primary social-button`),
    (g.type = `submit`),
    (g.dataset.nav = `1`),
    r(g, d.save),
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
    r(x, d.confirm));
  let S = document.createElement(`button`);
  ((S.className = `ph-btn social-button`),
    (S.type = `button`),
    (S.dataset.nav = `1`),
    r(S, d.editName),
    b.append(x, S),
    c.append(v),
    a.append(c));
  let C = !1,
    w = ``;
  ((c.onsubmit = (e) => {
    (e.preventDefault(),
      !C &&
        v.hidden &&
        ((w = p.value.trim()),
        r(y, i(d.confirmName, { name: w })),
        (v.hidden = !1),
        (g.hidden = !0),
        (p.readOnly = !0),
        x.focus()));
  }),
    (S.onclick = () => {
      C || ((v.hidden = !0), (g.hidden = !1), (p.readOnly = !1), p.focus());
    }),
    (x.onclick = () => {
      C ||
        v.hidden ||
        ((C = !0),
        (x.disabled = !0),
        (S.disabled = !0),
        r(s, d.loading),
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
                (p.readOnly = !1),
                r(s, f(e.status)),
                p.focus());
            }
          }));
    }));
}
