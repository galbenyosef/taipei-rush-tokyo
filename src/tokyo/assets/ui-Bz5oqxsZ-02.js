// tokyo/assets/ui-Bz5oqxsZ 02 — createelement
// Lines 253-1005 of readable/tokyo/assets/ui-Bz5oqxsZ.pretty.js (statement-aligned).
function showCloudPanel(e, t = `home`, n = {}) {
  if ((D(), B)) {
    B.go(t, n);
    return;
  }
  let o = installCloud(e),
    c = e.paused,
    T = document.activeElement;
  (e.ui.setExternalMenu?.(!0), e.setPaused(!0));
  let O = document.createElement(`dialog`);
  ((O.className = `cloud-overlay`), O.setAttribute(`aria-modal`, `true`));
  let k = document.createElement(`section`);
  ((k.className = `cloud-dialog`),
    O.appendChild(k),
    document.body.appendChild(O),
    document
      .querySelectorAll(`.cloud-turnstile`)
      .forEach((e) => O.appendChild(e)));
  let N = t,
    P = n.notice,
    F = n.email ?? ``,
    I = !1,
    L = ``,
    R = !1,
    z,
    V,
    H = { root: O, go: W };
  B = H;
  let ye = u(() => {
      N === `home` && $(!1);
    }),
    be = l(() => {
      (N === `home` || N === `check`) && $(!1);
    }),
    xe = e.events.on(`settings:changed`, ({ key: e }) => {
      e === `lang` && $(!1);
    }),
    Se = o.subscribe(G),
    Ce = setInterval(G, 3e4),
    we = e.input.captureModal((e) => {
      if (e.key === `Escape`) {
        (e.preventDefault(), I || U());
        return;
      }
      me(O, e);
    });
  O.addEventListener(`cancel`, (e) => {
    (e.preventDefault(), I || U());
  });
  function U() {
    B === H &&
      (O.querySelectorAll(`.cloud-turnstile`).forEach((e) =>
        document.body.appendChild(e),
      ),
      O.close(),
      O.remove(),
      ye(),
      be(),
      Se(),
      xe(),
      we(),
      clearInterval(Ce),
      (B = void 0),
      (L = ``),
      e.ui.setExternalMenu?.(!1),
      e.setPaused(c),
      T?.focus());
  }
  function W(e, t = {}) {
    ((N = e),
      (P = t.notice),
      t.email !== void 0 && (F = t.email),
      e !== `reauth` && (L = ``),
      $(!0));
  }
  function G() {
    if (!z || !z.isConnected) return;
    let e = o.state();
    (S(z, ve(e, d())),
      z.parentElement &&
        (z.parentElement.dataset.state = e.busy ? `connecting` : e.status),
      V &&
        V.setAttribute(
          `aria-disabled`,
          String(
            I ||
              !!e.busy ||
              e.status === `connecting` ||
              e.status === `update_required`,
          ),
        ));
  }
  async function K(e, t) {
    ((I = !0), (P = { message: j.working, kind: `info` }), $(!1));
    let n = await e();
    if (B === H) {
      if (((I = !1), n.ok)) {
        t(n);
        return;
      }
      ((P = {
        message: n.message ?? A(n.error, n.retryAfter, n.reasons),
        kind: `error`,
      }),
        n.error === `needs_password` && ((R = !0), (N = `signup`)),
        n.error === `reauthentication_needed` &&
          ((N = `reauth`), (P = { message: j.reauthIntro, kind: `info` })),
        n.error === `session_expired` && N !== `signin` && (N = `expired`),
        $(!0));
    }
  }
  function q(e = k) {
    let t = document.createElement(`div`);
    return ((t.className = `cloud-actions`), e.appendChild(t), t);
  }
  function J() {
    let e = document.createElement(`form`);
    return ((e.noValidate = !0), k.appendChild(e), e);
  }
  function Y(e, t) {
    let n = p(e.value);
    return n
      ? ((P = {
          message: n === `long` ? j.tooLong : j.tooShort,
          kind: `error`,
        }),
        $(!1),
        e.setAttribute(`aria-invalid`, `true`),
        !1)
      : t && t.value !== e.value
        ? ((P = { message: j.mismatch, kind: `error` }), $(!1), !1)
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
      ((t.className = `cloud-chip`), e === `google` && (t.innerHTML = ge));
      let n = document.createElement(`span`);
      (S(n, e === `google` ? j.providerGoogle : j.providerEmail),
        t.appendChild(n),
        o.appendChild(t));
    }
    (i.append(a, o), t.append(r, i), k.appendChild(t));
  }
  function Ee(t) {
    let n = document.createElement(`p`);
    ((n.className = `cloud-label`), (n.textContent = e.t(t)), k.appendChild(n));
    let r = document.createElement(`div`);
    return (
      (r.className = `cloud-list`),
      r.setAttribute(`role`, `group`),
      r.setAttribute(`aria-label`, e.t(t)),
      k.appendChild(r),
      r
    );
  }
  function X(t, n, r, i, a = ``, o) {
    let s = document.createElement(`button`);
    ((s.type = `button`),
      (s.className = `cloud-row${a ? ` ${a}` : ``}`),
      (s.dataset.key = i));
    let c = document.createElement(`span`);
    if (((c.className = `cloud-row-label`), S(c, n), s.appendChild(c), o)) {
      let t = document.createElement(`span`);
      ((t.className = `cloud-row-detail`),
        (t.textContent = typeof o == `string` ? o : e.t(o)),
        s.appendChild(t));
    }
    return (
      s.insertAdjacentHTML(`beforeend`, M.chevronR),
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
      (r.innerHTML = ge));
    let i = document.createElement(`span`);
    (S(i, j.google),
      r.appendChild(i),
      (r.onclick = () => De()),
      e.appendChild(r),
      n && C(e, j.googleSameEmail, `cloud-hint`),
      t && C(e, j.googleOr, `cloud-or`).setAttribute(`aria-hidden`, `true`));
  }
  function De() {
    if (!I) {
      if (ce()) {
        W(`inapp`);
        return;
      }
      K(
        async () => {
          ((P = { message: j.googleLeaving, kind: `info` }), $(!1));
          let e = await f(_());
          return e.ok
            ? (await leaveForGoogle(), location.assign(e.url), new Promise(() => {}))
            : {
                ok: !1,
                error: `invalid`,
                message:
                  e.error === `provider_disabled`
                    ? j.googleDisabled
                    : e.error === `offline`
                      ? A(`offline`)
                      : j.googleFailed,
              };
        },
        () => {},
      );
    }
  }
  function Q(e) {
    return e.value.trim() && e.checkValidity()
      ? !0
      : ((P = { message: A(`email_invalid`), kind: `error` }), $(!1), !1);
  }
  function $(t) {
    let n = document.activeElement?.dataset?.key,
      c = new Map(
        [...k.querySelectorAll(`input`)]
          .filter((e) => e.type !== `password`)
          .map((e) => [e.name, e.value]),
      );
    (pe(e.state.settings.lang === `en` ? `en` : `zh`),
      (k.textContent = ``),
      (z = void 0),
      (V = void 0));
    let l = d(),
      u = s(),
      f = {
        home: j.title,
        signup: j.signup,
        signin: j.signinTitle,
        recover: j.recoverTitle,
        "recover-sent": j.recoverTitle,
        check: j.checkTitle,
        password: j.setPasswordTitle,
        "change-password": j.changePassword,
        reauth: j.changePassword,
        "change-email": j.changeEmail,
        signout: j.signoutTitle,
        delete: j.deleteTitle,
        expired: j.expiredTitle,
        inapp: j.inAppTitle,
        "player-name": j.playerName,
      };
    if (N !== `home`) {
      let e = document.createElement(`button`);
      ((e.type = `button`),
        (e.className = `cloud-backlink`),
        (e.dataset.key = `back`),
        (e.innerHTML = M.chevronL));
      let t = document.createElement(`span`);
      (S(t, j.back),
        e.appendChild(t),
        (e.onclick = () => W(`home`)),
        k.appendChild(e));
    }
    let p = document.createElement(`h2`);
    ((p.textContent = e.t(f[N])), k.appendChild(p));
    let _ = document.createElement(`button`);
    ((_.type = `button`),
      (_.className = `cloud-close`),
      (_.dataset.key = `close`),
      _.setAttribute(`aria-label`, e.t(j.close)),
      (_.innerHTML = M.close),
      (_.onclick = U),
      k.appendChild(_),
      O.setAttribute(`aria-label`, e.t(f[N])),
      (O.lang = e.state.settings.lang === `en` ? `en` : `zh-TW`),
      P &&
        C(
          k,
          P.message,
          P.kind === `error`
            ? `cloud-error`
            : P.kind === `ok`
              ? `cloud-ok`
              : ``,
        ).setAttribute(`role`, P.kind === `error` ? `alert` : `status`));
    let v = (e, t) => ((e.dataset.key = t), e),
      y = (e) => {
        let t = c.get(e.name);
        return (t !== void 0 && !e.value && (e.value = t), e);
      };
    if (N === `home`) {
      let e = l?.anonymous === !1,
        t = !!l?.providers?.includes(`google`);
      if (
        (e ? Te(l) : C(k, j.anonymous),
        !e &&
          u.expired &&
          !u.pending &&
          (C(k, j.expiredBody, `cloud-error`),
          v(
            E(
              q(),
              j.signinAgain,
              () => W(`signin`, { email: u.expired?.email ?? `` }),
              `primary`,
            ),
            `expired-signin`,
          )),
        e &&
          h() &&
          (C(k, j.passwordPending, `cloud-error`),
          v(
            E(q(), j.setPassword, () => W(`password`), `primary`),
            `set-password`,
          )),
        u.pending && (!e || u.pending.kind === `email_change`))
      ) {
        let t = u.pending;
        C(
          k,
          b(t.kind === `email_change` ? j.checkEmailChange : j.checkBody, {
            email: t.email,
          }),
        );
        let n = q();
        (v(
          E(n, j.resend, () => {
            K(
              () => m(),
              () => {
                ((P = { message: j.resent, kind: `ok` }), $(!1));
              },
            );
          }),
          `resend`,
        ),
          t.kind === `signup` &&
            v(
              E(n, j.confirmedSignIn, () => W(`signin`, { email: t.email })),
              `confirmed-signin`,
            ),
          v(
            E(
              n,
              j.differentEmail,
              () => {
                (oe(), W(e ? `change-email` : `signup`));
              },
              `link`,
            ),
            `different`,
          ));
      }
      let n = document.createElement(`div`);
      if (
        ((n.className = `cloud-status`),
        k.appendChild(n),
        (z = document.createElement(`span`)),
        z.setAttribute(`role`, `status`),
        z.setAttribute(`aria-live`, `polite`),
        n.appendChild(z),
        l &&
          (V = v(
            E(n, j.syncNow, () => {
              I ||
                V?.getAttribute(`aria-disabled`) === `true` ||
                ((I = !0),
                G(),
                syncNow().then((e) => {
                  ((I = !1),
                    B === H &&
                      ((P = {
                        message: e ? j.syncDone : j.syncFailed,
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
        let e = Ee(j.settingsTitle);
        (i(e, () => W(`player-name`)),
          t || X(e, j.googleLink, () => De(), `google-link`),
          X(e, j.signout, () => W(`signout`), `signout`),
          X(
            Ee(j.dangerZone),
            j.deleteAccount,
            () => W(`delete`),
            `delete`,
            `danger`,
            j.deleteHint,
          ));
      } else Z(q(), !1);
      let a = q(),
        s = r()[0];
      if (s) {
        let e = new Date(s.date),
          t = E(
            a,
            _e(he(s.reason), `date`, {
              zh: e.toLocaleString(`zh-TW`),
              en: e.toLocaleString(`en-US`),
            }),
            () => {
              o.restore(s.id).catch(() => {});
            },
          );
        (t.classList.add(`cloud-restore`),
          (t.disabled =
            o.state().status === `update_required` ||
            o.state().status === `connecting`));
      }
    } else if (N === `signup`) {
      let e = te() === `convert` && !R,
        t = J();
      Z(t, !0);
      let n = y(w(t, `email`, j.email, `email`, F)),
        r = e ? void 0 : w(t, `new-password`, j.choosePassword, `new-password`);
      r && x(r);
      let i = e
        ? void 0
        : w(t, `confirm-password`, j.repeat, `confirm-password`);
      C(t, e ? j.conversion : j.signupNote, `cloud-hint`);
      let a = q(t),
        o = E(a, j.signup, () => {}, `primary`);
      ((o.type = `submit`),
        v(
          E(
            a,
            j.haveAccount,
            () => W(`signin`, { email: n.value.trim() }),
            `link`,
          ),
          `have-account`,
        ),
        (t.onsubmit = (e) => {
          if ((e.preventDefault(), I || !Q(n) || (r && !Y(r, i)))) return;
          let t = n.value.trim(),
            a = r?.value;
          ((F = t),
            r && (r.value = ``),
            i && (i.value = ``),
            K(
              () => re(t, a),
              (e) => {
                ((R = !1), e.ok && e.checkEmail ? W(`check`) : U());
              },
            ));
        }));
    } else if (N === `signin` || N === `expired`)
      (N === `expired` && C(k, j.expiredBody), Z(k, !1));
    else if (N === `recover`) {
      C(k, j.recoverIntro);
      let e = J(),
        t = y(w(e, `email`, j.email, `email`, F)),
        n = q(e),
        r = E(n, j.recoverSend, () => {}, `primary`);
      ((r.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), I || !Q(t))) return;
          let n = t.value.trim();
          ((F = n),
            K(
              () => ne(n),
              () => W(`recover-sent`),
            ));
        }));
    } else if (N === `recover-sent`)
      (C(k, j.recoverSent, `cloud-ok`),
        v(
          E(q(), j.signin, () => W(`signin`), `primary`),
          `signin`,
        ));
    else if (N === `check`) {
      let e = u.pending;
      (C(k, b(j.checkBody, { email: e?.email ?? F })),
        e?.kind === `convert` && C(k, j.checkConvert));
      let t = q();
      (v(
        E(
          t,
          j.resend,
          () => {
            K(
              () => m(),
              () => {
                ((P = { message: j.resent, kind: `ok` }), $(!1));
              },
            );
          },
          `primary`,
        ),
        `resend`,
      ),
        e?.kind !== `convert` &&
          v(
            E(t, j.confirmedSignIn, () =>
              W(`signin`, { email: e?.email ?? F }),
            ),
            `confirmed-signin`,
          ),
        v(
          E(
            t,
            j.differentEmail,
            () => {
              (oe(), W(`signup`));
            },
            `link`,
          ),
          `different`,
        ));
    } else if (N === `password`) {
      C(k, j.passwordPending);
      let e = J(),
        t = w(e, `new-password`, j.newPassword, `new-password`);
      x(t);
      let n = w(e, `confirm-password`, j.repeat, `confirm-password`),
        r = E(q(e), j.setPassword, () => {}, `primary`);
      ((r.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), I || !Y(t, n))) return;
          let r = t.value;
          ((t.value = ``),
            (n.value = ``),
            K(
              () => g(r),
              () =>
                W(`home`, { notice: { message: j.passwordSaved, kind: `ok` } }),
            ));
        }));
    } else if (N === `change-password`) {
      let e = J(),
        t = w(e, `password`, j.currentPassword, `current-password`),
        n = w(e, `new-password`, j.newPassword, `new-password`);
      x(n);
      let r = w(e, `confirm-password`, j.repeat, `confirm-password`),
        i = q(e),
        a = E(i, j.changePasswordSave, () => {}, `primary`);
      ((a.type = `submit`),
        v(
          E(i, j.forgot, () => W(`recover`, { email: l?.email ?? `` }), `link`),
          `forgot`,
        ),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), I)) return;
          if (!t.value) {
            ((P = { message: A(`wrong_password`), kind: `error` }), $(!1));
            return;
          }
          if (!Y(n, r)) return;
          let i = t.value,
            a = n.value;
          ((t.value = ``),
            (n.value = ``),
            (r.value = ``),
            (L = a),
            K(
              () => ae(i, a),
              () => {
                ((L = ``),
                  W(`home`, {
                    notice: { message: j.passwordChanged, kind: `ok` },
                  }));
              },
            ));
        }));
    } else if (N === `reauth`) {
      let e = J(),
        t = w(e, `code`, j.code, `code`),
        n = E(q(e), j.changePasswordSave, () => {}, `primary`);
      ((n.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), I || !t.value.trim() || !L)) return;
          let n = L;
          K(
            () => g(n, void 0, t.value.trim()),
            () => {
              ((L = ``),
                W(`home`, {
                  notice: { message: j.passwordChanged, kind: `ok` },
                }));
            },
          );
        }));
    } else if (N === `player-name`)
      a(k, (e) => W(`home`, { notice: { message: e, kind: `ok` } }));
    else if (N === `change-email`) {
      C(k, j.changeEmailIntro);
      let e = J(),
        t = y(w(e, `email`, j.newEmail, `email`)),
        n = E(q(e), j.sendConfirmation, () => {}, `primary`);
      ((n.type = `submit`),
        (e.onsubmit = (e) => {
          if ((e.preventDefault(), I || !Q(t))) return;
          let n = t.value.trim();
          K(
            () => ie(n),
            () => W(`home`),
          );
        }));
    } else if (N === `signout`) {
      (C(
        k,
        P?.message === j.signoutOffline ? j.signoutOffline : j.signoutBody,
        P?.message === j.signoutOffline ? `cloud-error` : ``,
      ),
        P?.message === j.signoutOffline &&
          k.querySelector(`p[role]`)?.remove());
      let e = q(),
        t = P?.message === j.signoutOffline;
      (v(
        E(
          e,
          t ? j.signoutAnyway : j.signout,
          () => {
            ((I = !0),
              (P = { message: j.signoutWorking, kind: `info` }),
              $(!1),
              signOutFlow(t).then((e) => {
                B === H &&
                  ((I = !1),
                  e.signedOut ||
                    ((P = { message: j.signoutOffline, kind: `error` }),
                    $(!0)));
              }));
          },
          `primary`,
        ),
        `signout-confirm`,
      ),
        v(
          E(e, j.cancel, () => W(`home`)),
          `signout-cancel`,
        ));
    } else if (N === `delete`) {
      let e = l?.email ?? ``;
      C(k, b(j.deleteBody, { email: e }));
      let t = J(),
        n = w(t, `confirm-email`, j.deleteTyped, `text`);
      ((n.autocapitalize = `off`), (n.spellcheck = !1));
      let r = q(t),
        i = E(r, j.deleteConfirm, () => {}, `danger`);
      i.type = `submit`;
      let a = () => !!e && n.value.trim().toLowerCase() === e.toLowerCase();
      ((i.disabled = !0),
        n.addEventListener(`input`, () => {
          i.disabled = I || !a();
        }),
        v(
          E(r, j.cancel, () => W(`home`)),
          `delete-cancel`,
        ),
        (t.onsubmit = (e) => {
          if ((e.preventDefault(), I || !a())) return;
          let t = n.value;
          K(
            () => deleteFlow(t),
            () => {
              ((P = { message: j.working, kind: `info` }), $(!1));
            },
          );
        }));
    }
    if (N === `inapp`) {
      let t = ce() ?? `App`;
      (C(k, b(j.inAppBody, { app: t })), C(k, j.inAppSteps, `cloud-hint`));
      let n = se(),
        r = q();
      if (
        (v(
          E(
            r,
            j.copyLink,
            () => {
              navigator.clipboard?.writeText(n.copy).then(
                () => {
                  ((P = { message: j.copied, kind: `ok` }), $(!1));
                },
                () => {
                  window.prompt(e.t(j.copyLink), n.copy);
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
          S(e, j.openBrowser),
          r.appendChild(e));
      }
    }
    if (N === `home`) {
      let t = document.createElement(`p`);
      t.className = `cloud-hint cloud-legal`;
      for (let [n, r] of [
        [`/privacy.html`, j.privacyPolicy],
        [`/terms.html`, j.terms],
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
      k.appendChild(t);
    }
    if (
      (I &&
        k.querySelectorAll(`button,input`).forEach((e) => {
          e !== _ && (e.disabled = !0);
        }),
      t)
    ) {
      let e = fe(k);
      (
        e.find((e) => e.tagName === `INPUT`) ??
        e.find((e) => e.classList.contains(`primary`)) ??
        e[0]
      )?.focus();
    } else n && k.querySelector(`[data-key="${n}"]`)?.focus();
  }
  ($(!1), O.showModal(), $(!0));
}
