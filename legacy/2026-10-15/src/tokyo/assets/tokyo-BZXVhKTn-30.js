// tokyo/assets/tokyo-BZXVhKTn 30 — params
// Lines 11479-12462 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
function Xa(t, r = {}) {
  let i = new sn(),
    a = new ln(t),
    o = [],
    s = !1,
    c,
    l,
    u,
    d = null,
    f = null,
    p = null,
    m = () =>
      (f ??= e(
        () =>
          import(`./fullmap-CXrrUiBa.js`).then((e) => {
            let t = new e.FullMap(c, i, a, y);
            return (
              p && c.menuLayer.replaceChild(t.el, p),
              (t.onClose = () => F(`map`)),
              (t.hills = u.hills),
              (t.src = E),
              (d = t),
              P(),
              t
            );
          }),
        __vite__mapDeps([26, 6, 5, 4, 3, 7, 8, 27, 22, 28]),
      ).catch(
        (e) => ((f = null), console.warn(`[ui] full map chunk`, e), null),
      )),
    h,
    g,
    _,
    v = null,
    y,
    b = [],
    x = !1,
    S = !1,
    C = null,
    ee = [],
    w = null,
    E = null,
    O = !t.params.has(`hud`) || t.params.get(`hud`) !== `0`,
    ne = !1,
    re = !1,
    ie = 0,
    ae = !1,
    oe = !1,
    se = 0,
    ce = 0,
    le = 0,
    ue = 0,
    de = 1,
    fe = -1,
    pe = -1,
    k = { avgMs: 0, maxMs: 0 },
    A = { promptAction: null, inVehicle: !1, wanted: 0 },
    j = { frame: -1, action: null },
    M = (e) => {
      s ? e() : o.push(e);
    },
    N = 0,
    me = () => {
      try {
        let e = t.transit;
        return !!(e && (e.pickerOpen || e.traveling));
      } catch {
        return !1;
      }
    },
    he = () => oe && !x && !S && b.length === 0 && N === 0 && !me(),
    ge = !1,
    P = () => {
      if (!s) return;
      let e = b.includes(`pause`) || b.includes(`map`),
        t = O && oe && !x && !S && !e && !ge;
      (c.root.classList.toggle(`hud-off`, !t),
        l.setShown(t),
        c.root.classList.toggle(`phone-open`, b[b.length - 1] === `phone`));
      for (let e = 0; e < b.length; e++) {
        let t = b[e];
        if (t === `phone`) h.setZ(e + 1);
        else {
          let n = t === `pause` ? g.el : d?.el,
            r = String(e + 1);
          n && n.style.zIndex !== r && (n.style.zIndex = r);
        }
      }
      (l.setActive(he()), v?.setVisible(he() && O && !ge));
    },
    _e = () => {
      b.length === 0 &&
        ((ne = t.paused),
        t.setPaused(!0),
        (ae = !0),
        t.input.unlockPointer(),
        setTimeout(() => (ae = !1), 200));
    },
    ve = () => {
      (t.setPaused(ne),
        (re = !0),
        !c.touch && t.input.device !== `touch` && t.input.lockPointer(),
        P());
    },
    F = (e) => {
      let t = b.lastIndexOf(e);
      t < 0 ||
        (b.splice(t, 1),
        e === `pause`
          ? g.close()
          : e === `map`
            ? (d?.close(), u.suspend(!1))
            : h.close(),
        b.length === 0 ? ve() : P());
    },
    I = () => {
      for (; b.length;) {
        let e = b.pop();
        e === `pause`
          ? g.close()
          : e === `map`
            ? (d?.close(), u.suspend(!1))
            : h.close();
      }
      ve();
    },
    L = (e, t) => {
      if (!(!s || x || me())) {
        if ((S && Ce(), b.includes(e))) {
          for (; b[b.length - 1] !== e;) F(b[b.length - 1]);
          e === `pause`
            ? g.setTab(t ?? `home`, !!t && t !== `home`)
            : e === `phone` && t && h.openApp(t);
          return;
        }
        if (
          (_e(),
          b[b.length - 1] === `phone` && e !== `phone` && (b.pop(), h.close()),
          b.push(e),
          e === `pause`)
        )
          g.open(t ?? `home`);
        else if (e === `map`) {
          u.suspend(!0);
          let e = t;
          d
            ? d.open(e)
            : m().then((t) => b[b.length - 1] === `map` && t?.open(e));
        } else h.open(t);
        P();
      }
    },
    ye = (e) => {
      S &&
        !te(e.target) &&
        (e.code === `Enter` || e.code === `NumpadEnter`
          ? (e.preventDefault(), Ee())
          : (e.code === `Escape` || e.code === `KeyT`) &&
            (e.preventDefault(), Ce()));
    },
    be = () => {
      let e = B(`div`, `photo-ui`, c.topLayer);
      (B(`div`, `photo-bar top`, e), B(`div`, `photo-bar bottom`, e));
      let t = B(`div`, `photo-hint`, e),
        n = B(`div`, `photo-btns`, e),
        r = (e, t, r, i) => {
          let a = B(`button`, `photo-btn ${e}`, n);
          return (
            (a.type = `button`),
            (a.innerHTML = t),
            c.bind(B(`span`, ``, a), r),
            a.addEventListener(`pointerdown`, (e) => {
              (e.preventDefault(), e.stopPropagation(), i());
            }),
            a
          );
        };
      return (
        r(`exit`, z.close, Y.photoExit, () => {
          (c.sfx(`ui_back`), Ce());
        }),
        r(`shoot`, z.camera, Y.photoCapture, () => Ee()),
        { root: e, hint: t }
      );
    },
    xe = () => {
      if (!C) return;
      let e =
          c.touch && t.input.device !== `gamepad` ? `touch` : t.input.device,
        n = C.hint;
      ((n.textContent = ``), B(`b`, ``, n, c.t(Y.photoTitle)));
      let r = B(`span`, `ph-keys`, n);
      (e === `gamepad`
        ? (Cn(r, `A`),
          r.appendChild(document.createTextNode(c.t(Y.photoSave))),
          Cn(r, `B`),
          r.appendChild(document.createTextNode(c.t(Y.photoLeave))))
        : e === `kbm` &&
          (r.innerHTML = `<span class="kc kc-wide">Enter</span>${c.t(Y.photoSave)}<span class="kc kc-wide">Esc</span>${c.t(Y.photoLeave)}`),
        (n.dataset.dev = e));
    },
    Se = () => {
      (I(),
        (S = !0),
        (re = !0),
        (C ||= be()),
        xe(),
        C.root.classList.add(`show`),
        c.root.classList.add(`photo`),
        window.addEventListener(`keydown`, ye, !0));
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      ((ee = e ? e.buttons.map((e) => e.pressed) : []), P());
    },
    Ce = () => {
      S &&
        ((S = !1),
        (re = !0),
        C?.root.classList.remove(`show`),
        c.root.classList.remove(`photo`),
        window.removeEventListener(`keydown`, ye, !0),
        P());
    },
    we = () => {
      if (N > 0) return;
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      if (!e) return;
      let t = e.buttons.map((e) => e.pressed),
        n = (e) => t[e] && !ee[e];
      (n(0) ? Ee() : (n(1) || n(9) || n(8)) && (c.sfx(`ui_back`), Ce()),
        (ee = t));
    },
    Te = !1,
    Ee = () => {
      if (Te) return;
      Te = !0;
      let e = B(`div`, `photo-flash`, c.topLayer);
      (setTimeout(() => e.remove(), 600), c.sfx(`ui_confirm`));
      let n = (e) => {
        if (((Te = !1), !e)) {
          l.notify({ zh: `拍照失敗`, en: `Photo failed` }, 2.5, `bad`);
          return;
        }
        let t = URL.createObjectURL(e),
          n = document.createElement(`a`);
        ((n.href = t),
          (n.download = `${Nr.slug}-${Date.now()}.png`),
          n.click(),
          setTimeout(() => URL.revokeObjectURL(t), 4e3),
          l.notify(J.photoSaved, 2.5, `good`));
      };
      try {
        let e = t.renderer;
        if (e.capture) {
          e.capture(`image/png`).then(n, (e) => {
            (console.warn(`[ui] photo capture failed`, e), n(null));
          });
          return;
        }
        (e.render(0), e.canvas.toBlob((e) => n(e), `image/png`));
      } catch (e) {
        (console.warn(`[ui] photo capture failed`, e), n(null));
      }
    },
    De = {
      name: `ui`,
      alwaysUpdate: !0,
      perf: k,
      get menuOpen() {
        return x ? `main` : (b[b.length - 1] ?? null);
      },
      get waypoint() {
        return a.waypoint ? { x: a.waypoint.x, z: a.waypoint.z } : null;
      },
      get hudVisible() {
        return O;
      },
      get hintsEnabled() {
        return !!w?.enabled;
      },
      notify(e, t = {}) {
        M(() => l.notify(e, t.duration ?? 0, t.kind ?? `info`));
      },
      prompt(e) {
        if (!s) return;
        let n = l.prompt(e);
        e != null && ((j.frame = t.time.frame), (j.action = n || null));
      },
      get promptOwner() {
        return j;
      },
      hasPrompt(e) {
        return s && l.hasLivePrompt(e);
      },
      setObjective(e) {
        M(() => l.setObjective(e));
      },
      setWaypoint(e, t) {
        a.set(e, t, !1);
      },
      addBlip(e, t) {
        i.add(e, t);
      },
      updateBlip(e, t, n) {
        i.update(e, t, n);
      },
      removeBlip(e) {
        i.remove(e);
      },
      setTimer(e, t) {
        M(() => l.setTimer(e, t));
      },
      setProgress(e, t) {
        M(() => l.setProgress(e, t));
      },
      bigMessage(e, t, n) {
        M(() => l.bigMessage(e, t, n));
      },
      subtitle(e, t, n) {
        M(() => l.subtitle(e, t, n));
      },
      openMenu(e, t) {
        M(() => {
          switch (e) {
            case `pause`:
              L(`pause`, `home`);
              break;
            case `settings`:
              L(`pause`, `settings`);
              break;
            case `help`:
              L(`pause`, `controls`);
              break;
            case `map`:
              L(`map`, t);
              break;
            case `phone`:
              L(`phone`);
              break;
            case `missions`:
              L(`phone`, `missions`);
              break;
            case `mrt`:
              L(`phone`, `mrt`);
              break;
            case `main`:
              De.showMainMenu();
          }
        });
      },
      closeMenu() {
        s && b.length && I();
      },
      async showMainMenu() {
        let e = t.params.has(`menu`);
        if ((t.params.has(`autoplay`) || ka()) && !e) {
          je();
          return;
        }
        (s || (await new Promise((e) => o.push(e))), await Oe());
      },
      async titleReady(e = 2500) {
        ((!t.params.has(`autoplay`) && !ka()) || t.params.has(`menu`)) &&
          (s || (await new Promise((e) => o.push(e))), await _.photoReady(e));
      },
      fade(e, t = 0.6) {
        return (
          ++se,
          new Promise((n) => {
            let r = () => {
              let r = c.fadeEl;
              ((r.style.transition = `opacity ${Math.max(0, t)}s ease`),
                (r.style.opacity = String(e)),
                r.classList.toggle(`on`, e > 0),
                c.root.classList.toggle(`faded`, e > 0),
                setTimeout(() => n(), Math.max(0, t) * 1e3 + 20));
            };
            s ? r() : o.push(r);
          })
        );
      },
      setHudVisible(e) {
        ((O = e), P());
      },
      setExternalMenu(e) {
        ((N = Math.max(0, N + (e ? 1 : -1))), e && (re = !0), P());
      },
      photoMode(e) {
        M(() => (e ? Se() : Ce()));
      },
      demo() {
        M(() => Ne());
      },
      get _debug() {
        return {
          hud: l,
          minimap: u,
          fullmap: d,
          touch: v,
          hints: w,
          title: _,
          pause: g,
          phone: h,
        };
      },
      async init() {
        let n = t.params.has(`uiperf`),
          d = performance.now(),
          f = (e) => {
            let t = performance.now();
            (n && console.info(`[test] ui init ${e} ${(t - d).toFixed(1)}ms`),
              (d = t));
          };
        ((c = new an(t)),
          (c.region = r),
          (c.look = r.look?.(t.plan) ?? vr(t.plan)),
          r.install?.(t),
          (y = new Wa()),
          (y.onMove = () => c.sfx(`ui_hover`, 0.5)),
          (l = new rr(c, a)),
          (u = new kr(c, i, a, () => L(`map`))),
          (p = c.menuLayer.appendChild(document.createComment(`fullmap`))),
          (g = new ia(c, y, {
            history: () => l.history,
            resume: () => {
              performance.now() < ie || I();
            },
            openMap: () => L(`map`),
            abandon: () => ke(),
            toTitle: () => void Oe(!0),
            snapshot: (e) => {
              let n = t.player.position,
                r = t.player.heading ?? 0;
              try {
                t.vehicles.playerVehicle &&
                  (r = t.vehicles.playerVehicle.heading);
              } catch {}
              Mr(e, E, u.hills, a, n.x, n.z, r, 0.55);
            },
          })),
          (h = new ci(c, y, a, {
            close: () => F(`phone`),
            openMap: () => L(`map`),
            openSettings: () => L(`pause`, `settings`),
            openHelp: () => L(`pause`, `controls`),
            photoMode: () => Se(),
            abandon: () => {
              yi(c, y, Y.abandonConfirm, Y.abandonOk, () => ke());
            },
            snapshot: (e, n, r) => {
              let i = t.player.position,
                o = t.player.heading ?? 0;
              try {
                t.vehicles.playerVehicle &&
                  (o = t.vehicles.playerVehicle.heading);
              } catch {}
              Mr(e, E, u.hills, a, n, r, 0, 0.45, {
                icon: `mission`,
                player: { x: i.x, z: i.z, heading: o },
              });
            },
          })),
          f(`hud+menus`),
          await t.yieldFrame(),
          (d = performance.now()),
          (_ = new Pa(c, y)),
          c.touch &&
            ((v = new Ua(c)),
            (v.onPause = () => L(`pause`)),
            (v.onMap = () => L(`map`)),
            (v.onPhone = () => L(`phone`)),
            (l.onPromptAction = (e) => v?.highlight(e)),
            v.highlight([])),
          (w = new qa(
            c,
            c.touch ? l.feedEl : c.topLayer,
            c.touch ? c.topLayer : null,
          )),
          (l.hintVisible = () => !!w && w.visible),
          (w.missionNear = (e, t, n) => {
            for (let r of i.map.values())
              if (
                (r.icon === `mission` ||
                  r.id.startsWith(`mission:`) ||
                  r.id.startsWith(`story:`)) &&
                Math.abs(r.x - e) < n &&
                Math.abs(r.z - t) < n
              )
                return !0;
            return !1;
          }),
          (l.notifyFilter = (e) => !!w && w.isDuplicate(e)),
          (l.objectiveGate = () => !w || w.objectiveReady()),
          (c.onHints = (e) => {
            w &&
              (e === `reset`
                ? (w.reset(), w.setEnabled(!0))
                : w.setEnabled(e === `on`));
          }),
          Ri(),
          (document.body.dataset.quality = t.quality.level),
          gi(W().uiScale ?? nt()),
          (c.onUiScale = () => u.resize()),
          c.relocalize(),
          f(`title+touch`),
          await t.yieldFrame(),
          (d = performance.now()));
        let C = c.look.relief(t.plan);
        (f(`hills`), await t.yieldFrame(), (d = performance.now()));
        let ee = t.quality.level === `low` || t.quality.mobile ? 0.55 : 0.85,
          T = null,
          te = null;
        try {
          ((T = t.transit.mapLines ?? null),
            (te = t.transit.mapStations ?? null));
        } catch {}
        ((E = {
          plan: t.plan,
          look: c.look,
          scale: ee,
          hills: C,
          lines: T,
          stations: te,
        }),
          (u.hills = C),
          u.setBase(E),
          t.events.once(`game:ready`, () =>
            Ya(() => void m().then((e) => e?.prewarm())),
          ),
          u.update(1),
          f(`basemap`),
          await t.yieldFrame(),
          (d = performance.now()));
        let O = t.events;
        (O.on(`notify`, (e) =>
          l.notify(e.text, e.duration ?? 0, e.kind ?? `info`),
        ),
          O.on(`subtitle`, (e) => l.subtitle(e.text, e.duration, e.speaker)),
          O.on(`ui:bigMessage`, (e) =>
            l.bigMessage(e.title, e.subtitle, {
              color: e.color,
              duration: e.duration,
            }),
          ),
          O.on(`money:changed`, (e) => l.moneyChanged(e.money, e.delta)),
          O.on(`wanted:changed`, (e) => l.wantedChanged(e.level, e.prev)),
          O.on(`mission:started`, (e) => l.missionBanner(e.title)),
          O.on(`mission:completed`, () => l.dropMissionBanner()),
          O.on(`mission:failed`, () => l.dropMissionBanner()));
        let ne = (e, n, r) => {
          let i = t.time.real;
          setTimeout(() => {
            l.bigShownSince(e, i - 0.05) || r();
          }, n);
        };
        (O.on(`mission:completed`, (e) => {
          ne(`passed`, 900, () =>
            l.bigMessage(
              J.missionPassed,
              e.reward ? `+${D(e.reward)}` : void 0,
            ),
          );
        }),
          O.on(`mission:failed`, (e) => {
            let n = e.reason,
              r = typeof n == `string` ? n : `${n?.zh ?? ``}|${n?.en ?? ``}`;
            if (e.aborted || /放棄|abandon|abort|取消/i.test(r)) {
              l.notify(
                { zh: `已放棄任務`, en: `Mission abandoned` },
                2.5,
                `info`,
              );
              return;
            }
            let i = `foot`;
            try {
              i = t.player.mode;
            } catch {}
            i !== `dead` &&
              i !== `busted` &&
              ne(`failed`, 1100, () => l.bigMessage(J.missionFailed, e.reason));
          }),
          O.on(`player:died`, () =>
            ne(`wasted`, 1800, () =>
              l.bigMessage(J.wasted, void 0, { duration: 4.5 }),
            ),
          ),
          O.on(`player:busted`, () =>
            ne(`busted`, 1800, () =>
              l.bigMessage(J.busted, void 0, { duration: 4.5 }),
            ),
          ),
          O.on(`player:enterVehicle`, () => {
            try {
              t.vehicles.playerVehicle && w?.show(`drive`);
            } catch {}
          }),
          O.on(`player:respawned`, () =>
            setTimeout(() => l.showDistrict(!0), 900),
          ),
          O.on(`mrt:travel`, () => setTimeout(() => l.showDistrict(!0), 600)),
          O.on(`player:enterVehicle`, () => {
            setTimeout(() => {
              try {
                t.audio.station >= 0 &&
                  t.vehicles.playerVehicle &&
                  l.showRadio(t.audio.station);
              } catch {}
            }, 500);
          }),
          O.on(`settings:changed`, (e) => {
            e.key === `lang` && c.relocalize();
          }),
          O.on(
            `quality:changed`,
            (e) => (document.body.dataset.quality = e.level),
          ),
          document.addEventListener(`pointerlockchange`, () => {
            if (
              !document.pointerLockElement &&
              !(
                ae ||
                !oe ||
                x ||
                b.length ||
                c.touch ||
                N > 0 ||
                t.paused ||
                me()
              )
            ) {
              if (S) {
                Ce();
                return;
              }
              ((ie = performance.now() + 350), L(`pause`));
            }
          }),
          document.addEventListener(`visibilitychange`, () => {
            document.hidden &&
              oe &&
              !x &&
              b.length === 0 &&
              !S &&
              !t.params.has(`shot`) &&
              L(`pause`);
          }),
          t.renderer.canvas.addEventListener(`click`, () => {
            he() && !c.touch && t.input.lockPointer();
          }),
          Ja &&
            e(
              () =>
                import(`./recovery-CHWBNwD3.js`).then((e) =>
                  e.resolveInBackground(t, (e, n) =>
                    t.events.emit(`notify`, {
                      text: e,
                      duration: 3.5,
                      kind: n,
                    }),
                  ),
                ),
              __vite__mapDeps([18, 6, 5, 4, 3, 7, 8, 17]),
            ).catch(() => {}),
          (s = !0),
          P());
        let re = o.splice(0);
        for (let e of re)
          try {
            e();
          } catch (e) {
            console.error(`[ui] queued call failed`, e);
          }
      },
      start() {
        (Me(),
          Ja &&
            !W().stocksSeen &&
            !W().stocksHinted &&
            setTimeout(() => {
              W().stocksSeen ||
                W().stocksHinted ||
                !oe ||
                (G({ stocksHinted: !0 }),
                t.events.emit(`notify`, {
                  text: {
                    zh: `手機新功能：台股交易 📈 用遊戲的錢買股票`,
                    en: `New on your phone: Stocks 📈 — buy shares with game cash`,
                  },
                  duration: 6,
                  kind: `info`,
                }));
            }, 9e4),
          _i(c));
        let e = W().character;
        if (e)
          try {
            t.player.setCharacter(e);
          } catch {}
      },
      update(e) {
        if (!s) return;
        let n = performance.now(),
          r = t.input;
        re
          ? !r.down(`pause`) && !r.down(`map`) && !r.down(`phone`) && (re = !1)
          : he() &&
            !t.paused &&
            (r.pressed(`pause`)
              ? L(`pause`)
              : r.pressed(`map`)
                ? L(`map`)
                : r.pressed(`phone`) && L(`phone`));
        let i = `foot`;
        try {
          i = t.player.mode;
        } catch {}
        let o =
          i === `dead` ||
          i === `busted` ||
          (i === `cutscene` && !t.vehicles.enteringVehicle);
        o !== ge && ((ge = o), P());
        let f = t.player.position,
          p = !0;
        try {
          p = !t.vehicles.playerVehicle;
        } catch {}
        a.update(e, f.x, f.z, p);
        let m = a.waypoint;
        if (
          (m &&
            m.user &&
            Math.hypot(m.x - f.x, m.z - f.z) < 18 &&
            (a.set(null),
            l.notify(J.arrived, 2.5, `good`),
            c.sfx(`checkpoint`)),
          l.update(e),
          (de -= e),
          de <= 0)
        ) {
          de = 1;
          let e = 0;
          try {
            e = t.districts?.pending ?? 0;
          } catch {}
          let n = t.plan.pois.length;
          (fe < 0
            ? (fe = n)
            : (n !== fe || (e === 0 && pe > 0)) &&
              ((fe = n), u.refreshShops(), d?.invalidateLegend()),
            (pe = e));
        }
        if (
          (((he() && O && !ge) || b[b.length - 1] === `phone`) && u.update(e),
          d?.update(e),
          h.update(e),
          g.update(),
          _.update(e),
          v?.update(),
          S)
        ) {
          we();
          let e = c.touch && r.device !== `gamepad` ? `touch` : r.device;
          C && C.hint.dataset.dev !== e && xe();
        }
        if (w) {
          let n = he() && !ge && O,
            r = 0;
          if (n)
            try {
              r = t.police.level;
            } catch {}
          let i = A;
          ((i.promptAction = l.hasPromptAction(`enter`)
            ? `enter`
            : l.promptVisibleAction),
            (i.inVehicle = !p),
            (i.wanted = r),
            w.update(e, n, i));
        }
        if (v) {
          let e = r.virtual;
          (e.throttle > 0 || e.brake > 0) && (e.lookDX += 1e-4);
        }
        N === 0 && y.update(e);
        let x = performance.now() - n;
        ((ce += x),
          le++,
          x > k.maxMs && (k.maxMs = x),
          le >= 60 &&
            ((k.avgMs = +(ce / le).toFixed(3)),
            (ce = 0),
            (le = 0),
            (ue += 1),
            t.params.has(`uiperf`) &&
              ue % 5 == 0 &&
              (console.info(
                `[ui] avg ${k.avgMs}ms max ${k.maxMs.toFixed(2)}ms`,
              ),
              (k.maxMs = 0))));
      },
    };
  async function Oe(e = !1) {
    if (!x) {
      if (e) {
        try {
          t.missions.active && t.missions.abort();
        } catch {}
        try {
          t.police.clear();
        } catch {}
        try {
          t.state.saveNow();
        } catch {}
        (I(), await De.fade(1, 0.35), (oe = !1));
      }
      ((x = !0), (t.input.enabled = !1), t.input.unlockPointer());
      try {
        t.player.setControlEnabled(!1);
      } catch {}
      (P(),
        _.open(e),
        e && De.fade(0, 0.6),
        t.params.has(`titlechar`) && _.openPanel(`character`),
        await new Promise((e) => {
          _.onPlay = () => {
            ((_.onPlay = void 0), e());
          };
        }),
        await _.leave(),
        _.close(),
        (x = !1),
        (t.input.enabled = !0));
      try {
        t.player.setControlEnabled(!0);
      } catch {}
      je();
    }
  }
  function ke() {
    let e = !1;
    try {
      t.missions.active && (t.missions.abort(), (e = !0));
    } catch (e) {
      console.warn(`[ui] abort failed`, e);
    }
    De.fade(0, 0.25);
    try {
      (l.setObjective(null), l.setTimer(null), l.setProgress(null));
    } catch {}
    (I(), e && c.sfx(`ui_back`));
  }
  let Ae = !1;
  function je() {
    oe = !0;
    let e = !Ae;
    ((Ae = !0),
      M(() => {
        if ((P(), setTimeout(() => l.showDistrict(!0), 700), !e)) return;
        let n = t.params.get(`ui`);
        (n &&
          setTimeout(() => {
            n === `photo` ? Se() : De.openMenu(n);
          }, 50),
          t.params.has(`uidemo`) && Ne());
      }));
  }
  function Me() {
    let e = t.plan;
    for (let t of e.landmarks) {
      let e = `ui-lm-${t.id}`;
      if (i.has(e)) continue;
      let n =
        t.kind === `hospital`
          ? `hospital`
          : t.kind === `police`
            ? `police`
            : t.kind === `temple`
              ? `temple`
              : t.kind === `market`
                ? `market`
                : `landmark`;
      if (t.zone && t.kind !== `market`) continue;
      let r = n !== `landmark` || t.id === `taipei101`;
      i.add(e, { x: t.x, z: t.z, icon: n, label: t.name, mapOnly: !r });
    }
    let n = e.mrtStations;
    try {
      t.transit.stations?.length && (n = t.transit.stations);
    } catch {}
    let a = r.transit?.blip;
    for (let e of n) {
      let t = `mrt-${e.id}`;
      i.has(t) ||
        i.add(t, { x: e.ex, z: e.ez, icon: `mrt`, label: e.name, ...a?.(e) });
    }
  }
  function Ne() {
    let e = t.player.position;
    (l.setObjective({
      zh: `按 {enter} 騎上機車，到附近的「7-TWELVE」買茶葉蛋`,
      en: `Press {enter} to hop on the scooter and ride to the nearby *7-TWELVE*`,
    }),
      l.setTimer(83.4, { zh: `外送時間`, en: `DELIVERY` }),
      l.setProgress({ zh: `雞排溫度`, en: `Chicken temp` }, 0.72),
      l.notify(
        {
          zh: `阿明：「兄弟，歡迎來臺北！」`,
          en: `Ming: "Welcome to Taipei, bro!"`,
        },
        9,
        `mission`,
      ),
      l.notify(
        { zh: `按 T 打開手機查看任務`, en: `Press T to open your phone` },
        9,
        `info`,
      ),
      l.subtitle(
        {
          zh: `欸，那台機車借我一下啦！`,
          en: `Hey, lend me that scooter for a sec!`,
        },
        12,
        `阿明`,
      ),
      i.add(`demo-mission`, {
        x: e.x + 90,
        z: e.z - 60,
        icon: `mission`,
        pulse: !0,
        label: { zh: `外送狂人`, en: `Delivery Rush` },
      }),
      i.add(`demo-target`, {
        x: e.x - 400,
        z: e.z + 300,
        icon: `target`,
        clampToEdge: !0,
      }),
      i.add(`demo-taxi`, { x: e.x + 40, z: e.z + 30, icon: `taxi` }),
      i.add(`demo-cat`, { x: e.x - 50, z: e.z - 20, icon: `collectible` }));
    let r = t.plan.nearestPois(`convenience`, e.x, e.z, 1)[0];
    a.set(r ? { x: r.x + 300, z: r.z - 250 } : { x: e.x + 300, z: e.z - 250 }, {
      zh: `外送地點`,
      en: `Drop-off`,
    });
    try {
      t.police.setLevel(2);
    } catch {}
    (setTimeout(
      () =>
        t.events.emit(`money:changed`, {
          money: t.state.money + 1200,
          delta: 1200,
          reason: `demo`,
        }),
      400,
    ),
      setTimeout(
        () =>
          l.prompt({
            zh: n.on
              ? n.t(
                  `按 E 購買茶葉蛋 ${D(13, T)}`,
                  `E で茶葉蛋を買う ${D(13, T)}`,
                )
              : `按 E 購買茶葉蛋 ${D(13, T)}`,
            en: `Press E to buy a tea egg (${D(13, T)})`,
          }),
        50,
      ));
    let o = () => {
      t.params.has(`uidemo`) &&
        (l.prompt({
          zh: n.on
            ? n.t(`按 E 購買茶葉蛋 ${D(13, T)}`, `E で茶葉蛋を買う ${D(13, T)}`)
            : `按 E 購買茶葉蛋 ${D(13, T)}`,
          en: `Press E to buy a tea egg (${D(13, T)})`,
        }),
        requestAnimationFrame(o));
    };
    o();
  }
  return De;
}
