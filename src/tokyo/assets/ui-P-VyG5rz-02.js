// tokyo/assets/ui-P-VyG5rz 02 — createelement
// Lines 275-1027 of readable/tokyo/assets/ui-P-VyG5rz.pretty.js (statement-aligned).
function showCloudPanel(e, t = `home`, o = {}) {
  if ((A(), V)) {
    V.go(t, o);
    return;
  }
  let s = installCloud(e),
    c = e.paused,
    l = document.activeElement;
  (e.ui.setExternalMenu?.(!0), e.setPaused(!0));
  let u = document.createElement(`dialog`);
  ((u.className = `cloud-overlay`), u.setAttribute(`aria-modal`, `true`));
  let d = document.createElement(`section`);
  ((d.className = `cloud-dialog`),
    u.appendChild(d),
    document.body.appendChild(u),
    document
      .querySelectorAll(`.cloud-turnstile`)
      .forEach((e) => u.appendChild(e)));
  let f = t,
    g = o.notice,
    O = o.email ?? ``,
    j = !1,
    M = ``,
    P = !1,
    L,
    R,
    z = { root: u, go: W };
  V = z;
  let ye = m(() => {
      f === `home` && $(!1);
    }),
    B = p(() => {
      (f === `home` || f === `check`) && $(!1);
    }),
    be = e.events.on(`settings:changed`, ({ key: e }) => {
      e === `lang` && $(!1);
    }),
    xe = s.subscribe(G),
    Se = setInterval(G, 3e4),
    H = e.input.captureModal((e) => {
      if (e.key === `Escape`) {
        (e.preventDefault(), j || U());
        return;
      }
      ge(u, e);
    });
  u.addEventListener(`cancel`, (e) => {
    (e.preventDefault(), j || U());
  });
  function U() {
    V === z &&
      (u
        .querySelectorAll(`.cloud-turnstile`)
        .forEach((e) => document.body.appendChild(e)),
      u.close(),
      u.remove(),
      ye(),
      B(),
      xe(),
      be(),
      H(),
      clearInterval(Se),
      (V = void 0),
      (M = ``),
      e.ui.setExternalMenu?.(!1),
      e.setPaused(c),
      l?.focus());
  }
  function W(e, t = {}) {
    ((f = e),
      (g = t.notice),
      t.email !== void 0 && (O = t.email),
      e !== `reauth` && (M = ``),
      $(!0));
  }
  function G() {
    if (!L || !L.isConnected) return;
    let e = s.state();
    (T(L, we(e, h())),
      L.parentElement &&
        (L.parentElement.dataset.state = e.busy ? `connecting` : e.status),
      R &&
        R.setAttribute(
          `aria-disabled`,
          String(
            j ||
              !!e.busy ||
              e.status === `connecting` ||
              e.status === `update_required`,
          ),
        ));
  }
  async function K(e, t) {
    ((j = !0), (g = { message: F.working, kind: `info` }), $(!1));
    let n = await e();
    if (V === z) {
      if (((j = !1), n.ok)) {
        t(n);
        return;
      }
      ((g = {
        message: n.message ?? N(n.error, n.retryAfter, n.reasons),
        kind: `error`,
      }),
        n.error === `needs_password` && ((P = !0), (f = `signup`)),
        n.error === `reauthentication_needed` &&
          ((f = `reauth`), (g = { message: F.reauthIntro, kind: `info` })),
        n.error === `session_expired` && f !== `signin` && (f = `expired`),
        $(!0));
    }
  }
  function q(e = d) {
    let t = document.createElement(`div`);
    return ((t.className = `cloud-actions`), e.appendChild(t), t);
  }
  function J() {
    let e = document.createElement(`form`);
    return ((e.noValidate = !0), d.appendChild(e), e);
  }
  function Y(e, t) {
    let n = v(e.value);
    return n
      ? ((g = {
          message: n === `long` ? F.tooLong : F.tooShort,
          kind: `error`,
        }),
        $(!1),
        e.setAttribute(`aria-invalid`, `true`),
        !1)
      : t && t.value !== e.value
        ? ((g = { message: F.mismatch, kind: `error` }), $(!1), !1)
        : !0;
  }
  function Te(e) {
    let t = document.createElement(`div`);
    t.className = `cloud-profile`;
    let n = e.email ?? ``,
      r = document.createElement(`span`);
    ((r.className = `cloud-avatar`),
      r.setAttribute(`aria-hidden`, `true`),
      (r.textContent = (n.trim()[0] ?? `·`).toUpperCase()));
    let i = document.createElement(`div`);
    i.className = `cloud-profile-info`;
    let a = document.createElement(`span`);
    ((a.className = `cloud-profile-name`), (a.textContent = n));
    let o = document.createElement(`div`);
    o.className = `cloud-profile-meta`;
    let s = e.providers?.length ? e.providers : [`email`];
    for (let e of s) {
      if (e !== `google` && e !== `email`) continue;
      let t = document.createElement(`span`);
      ((t.className = `cloud-chip`), e === `google` && (t.innerHTML = ve));
      let n = document.createElement(`span`);
      (T(n, e === `google` ? F.providerGoogle : F.providerEmail),
        t.appendChild(n),
        o.appendChild(t));
    }
    (i.append(a, o), t.append(r, i), d.appendChild(t));
  }
  function Ee(t) {
    let n = document.createElement(`p`);
    ((n.className = `cloud-label`), (n.textContent = e.t(t)), d.appendChild(n));
    let r = document.createElement(`div`);
    return (
      (r.className = `cloud-list`),
      r.setAttribute(`role`, `group`),
      r.setAttribute(`aria-label`, e.t(t)),
      d.appendChild(r),
      r
    );
  }
  function X(t, n, r, i, a = ``, o) {
    let s = document.createElement(`button`);
    ((s.type = `button`),
      (s.className = `cloud-row${a ? ` ${a}` : ``}`),
      (s.dataset.key = i));
    let c = document.createElement(`span`);
    if (((c.className = `cloud-row-label`), T(c, n), s.appendChild(c), o)) {
      let t = document.createElement(`span`);
      ((t.className = `cloud-row-detail`),
        (t.textContent = typeof o == `string` ? o : e.t(o)),
        s.appendChild(t));
    }
    return (
      s.insertAdjacentHTML(`beforeend`, I.chevronR),
      (s.onclick = r),
      t.appendChild(s),
      s
    );
  }
  function Z(e, t = !1, n = !1) {
    let r = document.createElement(`button`);
    ((r.type = `button`),
      (r.className = `cloud-google`),
      (r.dataset.key = `google`),
      (r.innerHTML = ve));
    let i = document.createElement(`span`);
    (T(i, F.google),
      r.appendChild(i),
      (r.onclick = () => De()),
      e.appendChild(r),
      n && E(e, F.googleSameEmail, `cloud-hint`),
      t && E(e, F.googleOr, `cloud-or`).setAttribute(`aria-hidden`, `true`));
  }
  function De() {
    if (!j) {
      if (ue()) {
        W(`inapp`);
        return;
      }
      K(
        async () => {
          ((g = { message: F.googleLeaving, kind: `info` }), $(!1));
          let e = await _(b());
          return e.ok
            ? (await leaveForGoogle(), location.assign(e.url), new Promise(() => {}))
            : {
                ok: !1,
                error: `invalid`,
                message:
                  e.error === `provider_disabled`
                    ? F.googleDisabled
                    : e.error === `offline`
                      ? N(`offline`)
                      : F.googleFailed,
              };
        },
        () => {},
      );
    }
  }
  function Q(e) {
    return e.value.trim() && e.checkValidity()
      ? !0
      : ((g = { message: N(`email_invalid`), kind: `error` }), $(!1), !1);
  }
  function $(t) {
    let o = document.activeElement?.dataset?.key,
      c = new Map(
        [...d.querySelectorAll(`input`)]
          .filter((e) => e.type !== `password`)
          .map((e) => [e.name, e.value]),
      );
    (S(e.state.settings.lang === `en` ? `en` : `zh`),
      (d.textContent = ``),
      (L = void 0),
      (R = void 0));
    let l = h(),
      p = n(),
      m = {
        home: F.title,
        signup: F.signup,
        signin: F.signinTitle,
        recover: F.recoverTitle,
        "recover-sent": F.recoverTitle,
        check: F.checkTitle,
        password: F.setPasswordTitle,
        "change-password": F.changePassword,
        reauth: F.changePassword,
        "change-email": F.changeEmail,
        signout: F.signoutTitle,
        delete: F.deleteTitle,
        expired: F.expiredTitle,
        inapp: F.inAppTitle,
        "player-name": F.playerName,
      };
    if (f !== `home`) {
      let e = document.createElement(`button`);
      ((e.type = `button`),
        (e.className = `cloud-backlink`),
        (e.dataset.key = `back`),
        (e.innerHTML = I.chevronL));
      let t = document.createElement(`span`);
      (T(t, F.back),
        e.appendChild(t),
        (e.onclick = () => W(`home`)),
        d.appendChild(e));
    }
    let _ = document.createElement(`h2`);
    ((_.textContent = e.t(m[f])), d.appendChild(_));
    let v = document.createElement(`button`);
    ((v.type = `button`),
      (v.className = `cloud-close`),
      (v.dataset.key = `close`),
      v.setAttribute(`aria-label`, e.t(F.close)),
      (v.innerHTML = I.close),
      (v.onclick = U),
      d.appendChild(v),
      u.setAttribute(`aria-label`, e.t(m[f])),
      (u.lang = e.state.settings.lang === `en` ? `en` : `zh-TW`),
      g &&
        E(
          d,
          g.message,
          g.kind === `error`
            ? `cloud-error`
            : g.kind === `ok`
              ? `cloud-ok`
              : ``,
        ).setAttribute(`role`, g.kind === `error` ? `alert` : `status`));
    let b = (e, t) => ((e.dataset.key = t), e),
      x = (e) => {
        let t = c.get(e.name);
        return (t !== void 0 && !e.value && (e.value = t), e);
      };
    if (f === `home`) {
      let e = l?.anonymous === !1,
        t = !!l?.providers?.includes(`google`);
      if (
        (e ? Te(l) : E(d, F.anonymous),
        !e &&
          p.expired &&
          !p.pending &&
          (E(d, F.expiredBody, `cloud-error`),
          b(
            k(
              q(),
              F.signinAgain,
              () => W(`signin`, { email: p.expired?.email ?? `` }),
              `primary`,
            ),
            `expired-signin`,
          )),
        e &&
          ae() &&
          (E(d, F.passwordPending, `cloud-error`),
          b(
            k(q(), F.setPassword, () => W(`password`), `primary`),
            `set-password`,
          )),
        p.pending && (!e || p.pending.kind === `email_change`))
      ) {
        let t = p.pending;
        E(
          d,
          C(t.kind === `email_change` ? F.checkEmailChange : F.checkBody, {
            email: t.email,
          }),
        );
        let n = q();
        (b(
          k(n, F.resend, () => {
            K(
              () => re(),
              () => {
                ((g = { message: F.resent, kind: `ok` }), $(!1));
              },
            );
          }),
          `resend`,
        ),
          t.kind === `signup` &&
            b(
              k(n, F.confirmedSignIn, () => W(`signin`, { email: t.email })),
              `confirmed-signin`,
            ),
          b(
            k(
              n,
              F.differentEmail,
              () => {
                (y(), W(e ? `change-email` : `signup`));
              },
              `link`,
            ),
            `different`,
          ));
      }
      let n = document.createElement(`div`);
      if (
        ((n.className = `cloud-status`),
        d.appendChild(n),
        (L = document.createElement(`span`)),
        L.setAttribute(`role`, `status`),
        L.setAttribute(`aria-live`, `polite`),
        n.appendChild(L),
        l &&
          (R = b(
            k(n, F.syncNow, () => {
              j ||
                R?.getAttribute(`aria-disabled`) === `true` ||
                ((j = !0),
                G(),
                syncNow().then((e) => {
                  ((j = !1),
                    V === z &&
                      ((g = {
                        message: e ? F.syncDone : F.syncFailed,
                        kind: e ? `ok` : `error`,
                      }),
                      $(!1)));
                }));
            }),
            `sync-now`,
          )),
        G(),
        l || n.remove(),
        e)
      ) {
        l.providers;
        let e = Ee(F.settingsTitle);
        (i(e, () => W(`player-name`)),
          t || X(e, F.googleLink, () => De(), `google-link`),
          X(e, F.signout, () => W(`signout`), `signout`),
          X(
            Ee(F.dangerZone),
            F.deleteAccount,
            () => W(`delete`),
            `delete`,
            `danger`,
            F.deleteHint,
          ));
      } else Z(q(), !1);
      let r = q(),
        o = a()[0];
      if (o) {
        let e = new Date(o.date),
          t = k(
            r,
            Ce(_e(o.reason), `date`, {
              zh: e.toLocaleString(`zh-TW`),
              en: e.toLocaleString(`en-US`),
            }),
            () => {
              s.restore(o.id).catch(() => {});
            },
          );
        (t.classList.add(`cloud-restore`),
          (t.disabled =
            s.state().status === `update_required` ||
            s.state().status === `connecting`));
      }
    } else if (f === `signup`) {
      let e = te() === `convert` && !P,
        t = J();
      Z(t, !0);
      let n = x(D(t, `email`, F.email, `email`, O)),
        r = e ? void 0 : D(t, `new-password`, F.choosePassword, `new-password`);
      r && w(r);
      let i = e
        ? void 0
        : D(t, `confirm-password`, F.repeat, `confirm-password`);
      E(t, e ? F.conversion : F.signupNote, `cloud-hint`);
      let a = q(t),
        o = k(a, F.signup, () => {}, `primary`);
      ((o.type = `submit`),
        b(
          k(
            a,
            F.haveAccount,
            () => W(`signin`, { email: n.value.trim() }),
            `link`,
          ),
          `have-account`,
        ),
        (t.onsubmit = (e) => {
          if ((e.preventDefault(), j || !Q(n) || (r && !Y(r, i)))) return;
          let t = n.value.trim(),
            a = r?.value;
          ((O = t),
            r && (r.value = ``),
            i && (i.value = ``),
            K(
              () => ie(t, a),
              (e) => {
                ((P = !1), e.ok && e.checkEmail ? W(`check`) : U());
              },
            ));
        }));
    } else if (f === `signin` || f === `expired`)
      (f === `expired` && E(d, F.expiredBody), Z(d, !1));
    else if (f === `recover`) {
      E(d, F.recoverIntro);
      let e = J(),
        t = x(D(e, `email`, F.email, `email`, O)),
        n = q(e),
        r = k(n, F.recoverSend, () => {}, `primary`);
      ((r.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), j || !Q(t))) return;
          let n = t.value.trim();
          ((O = n),
            K(
              () => ne(n),
              () => W(`recover-sent`),
            ));
        }));
    } else if (f === `recover-sent`)
      (E(d, F.recoverSent, `cloud-ok`),
        b(
          k(q(), F.signin, () => W(`signin`), `primary`),
          `signin`,
        ));
    else if (f === `check`) {
      let e = p.pending;
      (E(d, C(F.checkBody, { email: e?.email ?? O })),
        e?.kind === `convert` && E(d, F.checkConvert));
      let t = q();
      (b(
        k(
          t,
          F.resend,
          () => {
            K(
              () => re(),
              () => {
                ((g = { message: F.resent, kind: `ok` }), $(!1));
              },
            );
          },
          `primary`,
        ),
        `resend`,
      ),
        e?.kind !== `convert` &&
          b(
            k(t, F.confirmedSignIn, () =>
              W(`signin`, { email: e?.email ?? O }),
            ),
            `confirmed-signin`,
          ),
        b(
          k(
            t,
            F.differentEmail,
            () => {
              (y(), W(`signup`));
            },
            `link`,
          ),
          `different`,
        ));
    } else if (f === `password`) {
      E(d, F.passwordPending);
      let e = J(),
        t = D(e, `new-password`, F.newPassword, `new-password`);
      w(t);
      let n = D(e, `confirm-password`, F.repeat, `confirm-password`),
        r = k(q(e), F.setPassword, () => {}, `primary`);
      ((r.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), j || !Y(t, n))) return;
          let r = t.value;
          ((t.value = ``),
            (n.value = ``),
            K(
              () => se(r),
              () =>
                W(`home`, { notice: { message: F.passwordSaved, kind: `ok` } }),
            ));
        }));
    } else if (f === `change-password`) {
      let e = J(),
        t = D(e, `password`, F.currentPassword, `current-password`),
        n = D(e, `new-password`, F.newPassword, `new-password`);
      w(n);
      let r = D(e, `confirm-password`, F.repeat, `confirm-password`),
        i = q(e),
        a = k(i, F.changePasswordSave, () => {}, `primary`);
      ((a.type = `submit`),
        b(
          k(i, F.forgot, () => W(`recover`, { email: l?.email ?? `` }), `link`),
          `forgot`,
        ),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), j)) return;
          if (!t.value) {
            ((g = { message: N(`wrong_password`), kind: `error` }), $(!1));
            return;
          }
          if (!Y(n, r)) return;
          let i = t.value,
            a = n.value;
          ((t.value = ``),
            (n.value = ``),
            (r.value = ``),
            (M = a),
            K(
              () => ce(i, a),
              () => {
                ((M = ``),
                  W(`home`, {
                    notice: { message: F.passwordChanged, kind: `ok` },
                  }));
              },
            ));
        }));
    } else if (f === `reauth`) {
      let e = J(),
        t = D(e, `code`, F.code, `code`),
        n = k(q(e), F.changePasswordSave, () => {}, `primary`);
      ((n.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), j || !t.value.trim() || !M)) return;
          let n = M;
          K(
            () => se(n, void 0, t.value.trim()),
            () => {
              ((M = ``),
                W(`home`, {
                  notice: { message: F.passwordChanged, kind: `ok` },
                }));
            },
          );
        }));
    } else if (f === `player-name`)
      r(d, (e) => W(`home`, { notice: { message: e, kind: `ok` } }));
    else if (f === `change-email`) {
      E(d, F.changeEmailIntro);
      let e = J(),
        t = x(D(e, `email`, F.newEmail, `email`)),
        n = k(q(e), F.sendConfirmation, () => {}, `primary`);
      ((n.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), j || !Q(t))) return;
          let n = t.value.trim();
          K(
            () => oe(n),
            () => W(`home`),
          );
        }));
    } else if (f === `signout`) {
      (E(
        d,
        g?.message === F.signoutOffline ? F.signoutOffline : F.signoutBody,
        g?.message === F.signoutOffline ? `cloud-error` : ``,
      ),
        g?.message === F.signoutOffline &&
          d.querySelector(`p[role]`)?.remove());
      let e = q(),
        t = g?.message === F.signoutOffline;
      (b(
        k(
          e,
          t ? F.signoutAnyway : F.signout,
          () => {
            ((j = !0),
              (g = { message: F.signoutWorking, kind: `info` }),
              $(!1),
              signOutFlow(t).then((e) => {
                V === z &&
                  ((j = !1),
                  e.signedOut ||
                    ((g = { message: F.signoutOffline, kind: `error` }),
                    $(!0)));
              }));
          },
          `primary`,
        ),
        `signout-confirm`,
      ),
        b(
          k(e, F.cancel, () => W(`home`)),
          `signout-cancel`,
        ));
    } else if (f === `delete`) {
      let e = l?.email ?? ``;
      E(d, C(F.deleteBody, { email: e }));
      let t = J(),
        n = D(t, `confirm-email`, F.deleteTyped, `text`);
      ((n.autocapitalize = `off`), (n.spellcheck = !1));
      let r = q(t),
        i = k(r, F.deleteConfirm, () => {}, `danger`);
      i.type = `submit`;
      let a = () => !!e && n.value.trim().toLowerCase() === e.toLowerCase();
      ((i.disabled = !0),
        n.addEventListener(`input`, () => {
          i.disabled = j || !a();
        }),
        b(
          k(r, F.cancel, () => W(`home`)),
          `delete-cancel`,
        ),
        (t.onsubmit = (e) => {
          if ((e.preventDefault(), j || !a())) return;
          let t = n.value;
          K(
            () => deleteFlow(t),
            () => {
              ((g = { message: F.working, kind: `info` }), $(!1));
            },
          );
        }));
    }
    if (f === `inapp`) {
      let t = ue() ?? `App`;
      (E(d, C(F.inAppBody, { app: t })), E(d, F.inAppSteps, `cloud-hint`));
      let n = le(),
        r = q();
      if (
        (b(
          k(
            r,
            F.copyLink,
            () => {
              navigator.clipboard?.writeText(n.copy).then(
                () => {
                  ((g = { message: F.copied, kind: `ok` }), $(!1));
                },
                () => {
                  window.prompt(e.t(F.copyLink), n.copy);
                },
              );
            },
            `primary`,
          ),
          `copy-link`,
        ),
        t === `LINE` || ee())
      ) {
        let e = document.createElement(`a`);
        ((e.className = `cloud-action`),
          (e.href = t === `LINE` ? n.line : n.intent),
          (e.dataset.key = `open-browser`),
          T(e, F.openBrowser),
          r.appendChild(e));
      }
    }
    if (f === `home`) {
      let t = document.createElement(`p`);
      t.className = `cloud-hint cloud-legal`;
      for (let [n, r] of [
        [`/privacy.html`, F.privacyPolicy],
        [`/terms.html`, F.terms],
      ]) {
        let i = document.createElement(`a`);
        ((i.href = n),
          (i.target = `_blank`),
          (i.rel = `noopener`),
          (i.className = `cloud-link`),
          (i.textContent = e.t(r)),
          t.childElementCount && t.append(` · `),
          t.append(i));
      }
      d.appendChild(t);
    }
    if (
      (j &&
        d.querySelectorAll(`button,input`).forEach((e) => {
          e !== v && (e.disabled = !0);
        }),
      t)
    ) {
      let e = he(d);
      (
        e.find((e) => e.tagName === `INPUT`) ??
        e.find((e) => e.classList.contains(`primary`)) ??
        e[0]
      )?.focus();
    } else o && d.querySelector(`[data-key="${o}"]`)?.focus();
  }
  ($(!1), u.showModal(), $(!0));
}
