// tokyo/assets/tokyo-_rNKO_Y7 30 — params
// Lines 11794-12777 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function oo(t, r = {}) {
  let i = new _n(),
    a = new yn(t),
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
          import(`./fullmap-Dd3RmRQQ.js`).then((e) => {
            let t = new e.FullMap(c, i, a, y);
            return (
              p && c.menuLayer.replaceChild(t.el, p),
              (t.onClose = () => F(`map`)),
              (t.hills = u.hills),
              (t.src = ee),
              (d = t),
              M(),
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
    w = [],
    T = null,
    ee = null,
    E = !t.params.has(`hud`) || t.params.get(`hud`) !== `0`,
    te = !1,
    D = !1,
    ne = 0,
    re = !1,
    O = !1,
    ie = 0,
    ae = 0,
    oe = 0,
    ce = 0,
    le = 1,
    ue = -1,
    de = -1,
    fe = { avgMs: 0, maxMs: 0 },
    pe = { promptAction: null, inVehicle: !1, wanted: 0 },
    me = { frame: -1, action: null },
    j = (e) => {
      s ? e() : o.push(e);
    },
    he = 0,
    ge = () => {
      try {
        let e = t.transit;
        return !!(e && (e.pickerOpen || e.traveling));
      } catch {
        return !1;
      }
    },
    _e = () => O && !x && !S && b.length === 0 && he === 0 && !ge(),
    ve = !1,
    M = () => {
      if (!s) return;
      let e = b.includes(`pause`) || b.includes(`map`),
        t = E && O && !x && !S && !e && !ve;
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
      (l.setActive(_e()), v?.setVisible(_e() && E && !ve));
    },
    N = () => {
      b.length === 0 &&
        ((te = t.paused),
        t.setPaused(!0),
        (re = !0),
        t.input.unlockPointer(),
        setTimeout(() => (re = !1), 200));
    },
    P = () => {
      (t.setPaused(te),
        (D = !0),
        !c.touch && t.input.device !== `touch` && t.input.lockPointer(),
        M());
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
        b.length === 0 ? P() : M());
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
      P();
    },
    L = (e, t) => {
      if (!(!s || x || ge())) {
        if ((S && Ce(), b.includes(e))) {
          for (; b[b.length - 1] !== e;) F(b[b.length - 1]);
          e === `pause`
            ? g.setTab(t ?? `home`, !!t && t !== `home`)
            : e === `phone` && t && h.openApp(t);
          return;
        }
        if (
          (N(),
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
        M();
      }
    },
    ye = (e) => {
      S &&
        !se(e.target) &&
        (e.code === `Enter` || e.code === `NumpadEnter`
          ? (e.preventDefault(), Ee())
          : (e.code === `Escape` || e.code === `KeyT`) &&
            (e.preventDefault(), Ce()));
    },
    be = () => {
      let e = V(`div`, `photo-ui`, c.topLayer);
      (V(`div`, `photo-bar top`, e), V(`div`, `photo-bar bottom`, e));
      let t = V(`div`, `photo-hint`, e),
        n = V(`div`, `photo-btns`, e),
        r = (e, t, r, i) => {
          let a = V(`button`, `photo-btn ${e}`, n);
          return (
            (a.type = `button`),
            (a.innerHTML = t),
            c.bind(V(`span`, ``, a), r),
            a.addEventListener(`pointerdown`, (e) => {
              (e.preventDefault(), e.stopPropagation(), i());
            }),
            a
          );
        };
      return (
        r(`exit`, B.close, Y.photoExit, () => {
          (c.sfx(`ui_back`), Ce());
        }),
        r(`shoot`, B.camera, Y.photoCapture, () => Ee()),
        { root: e, hint: t }
      );
    },
    xe = () => {
      if (!C) return;
      let e =
          c.touch && t.input.device !== `gamepad` ? `touch` : t.input.device,
        n = C.hint;
      ((n.textContent = ``), V(`b`, ``, n, c.t(Y.photoTitle)));
      let r = V(`span`, `ph-keys`, n);
      (e === `gamepad`
        ? (Nn(r, `A`),
          r.appendChild(document.createTextNode(c.t(Y.photoSave))),
          Nn(r, `B`),
          r.appendChild(document.createTextNode(c.t(Y.photoLeave))))
        : e === `kbm` &&
          (r.innerHTML = `<span class="kc kc-wide">Enter</span>${c.t(Y.photoSave)}<span class="kc kc-wide">Esc</span>${c.t(Y.photoLeave)}`),
        (n.dataset.dev = e));
    },
    Se = () => {
      (I(),
        (S = !0),
        (D = !0),
        (C ||= be()),
        xe(),
        C.root.classList.add(`show`),
        c.root.classList.add(`photo`),
        window.addEventListener(`keydown`, ye, !0));
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      ((w = e ? e.buttons.map((e) => e.pressed) : []), M());
    },
    Ce = () => {
      S &&
        ((S = !1),
        (D = !0),
        C?.root.classList.remove(`show`),
        c.root.classList.remove(`photo`),
        window.removeEventListener(`keydown`, ye, !0),
        M());
    },
    we = () => {
      if (he > 0) return;
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      if (!e) return;
      let t = e.buttons.map((e) => e.pressed),
        n = (e) => t[e] && !w[e];
      (n(0) ? Ee() : (n(1) || n(9) || n(8)) && (c.sfx(`ui_back`), Ce()),
        (w = t));
    },
    Te = !1,
    Ee = () => {
      if (Te) return;
      Te = !0;
      let e = V(`div`, `photo-flash`, c.topLayer);
      (setTimeout(() => e.remove(), 600), c.sfx(`ui_confirm`));
      let n = (e) => {
        if (((Te = !1), !e)) {
          l.notify({ zh: `拍照失敗`, en: `Photo failed` }, 2.5, `bad`);
          return;
        }
        let t = URL.createObjectURL(e),
          n = document.createElement(`a`);
        ((n.href = t),
          (n.download = `${Ur.slug}-${Date.now()}.png`),
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
      perf: fe,
      get menuOpen() {
        return x ? `main` : (b[b.length - 1] ?? null);
      },
      get waypoint() {
        return a.waypoint ? { x: a.waypoint.x, z: a.waypoint.z } : null;
      },
      get hudVisible() {
        return E;
      },
      get hintsEnabled() {
        return !!T?.enabled;
      },
      notify(e, t = {}) {
        j(() => l.notify(e, t.duration ?? 0, t.kind ?? `info`));
      },
      prompt(e) {
        if (!s) return;
        let n = l.prompt(e);
        e != null && ((me.frame = t.time.frame), (me.action = n || null));
      },
      get promptOwner() {
        return me;
      },
      hasPrompt(e) {
        return s && l.hasLivePrompt(e);
      },
      setObjective(e) {
        j(() => l.setObjective(e));
      },
      setWaypoint(e, t, n) {
        a.set(e, t, n ?? !1);
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
        j(() => l.setTimer(e, t));
      },
      setProgress(e, t) {
        j(() => l.setProgress(e, t));
      },
      bigMessage(e, t, n) {
        j(() => l.bigMessage(e, t, n));
      },
      subtitle(e, t, n) {
        j(() => l.subtitle(e, t, n));
      },
      openMenu(e, t) {
        j(() => {
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
        if ((t.params.has(`autoplay`) || za()) && !e) {
          R();
          return;
        }
        (s || (await new Promise((e) => o.push(e))), await Oe());
      },
      async titleReady(e = 2500) {
        ((!t.params.has(`autoplay`) && !za()) || t.params.has(`menu`)) &&
          (s || (await new Promise((e) => o.push(e))), await _.photoReady(e));
      },
      fade(e, t = 0.6) {
        return (
          ++ie,
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
        ((E = e), M());
      },
      setExternalMenu(e) {
        ((he = Math.max(0, he + (e ? 1 : -1))), e && (D = !0), M());
      },
      photoMode(e) {
        j(() => (e ? Se() : Ce()));
      },
      demo() {
        j(() => Me());
      },
      get _debug() {
        return {
          hud: l,
          minimap: u,
          fullmap: d,
          touch: v,
          hints: T,
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
        ((c = new hn(t)),
          (c.region = r),
          (c.look = r.look?.(t.plan) ?? Or(t.plan)),
          r.install?.(t),
          (y = new eo()),
          (y.onMove = () => c.sfx(`ui_hover`, 0.5)),
          (l = new pr(c, a)),
          (u = new zr(c, i, a, () => L(`map`))),
          (p = c.menuLayer.appendChild(document.createComment(`fullmap`))),
          (g = new ma(c, y, {
            history: () => l.history,
            resume: () => {
              performance.now() < ne || I();
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
              Hr(e, ee, u.hills, a, n.x, n.z, r, 0.55);
            },
          })),
          (h = new vi(c, y, a, {
            close: () => F(`phone`),
            openMap: () => L(`map`),
            openSettings: () => L(`pause`, `settings`),
            openHelp: () => L(`pause`, `controls`),
            photoMode: () => Se(),
            abandon: () => {
              ki(c, y, Y.abandonConfirm, Y.abandonOk, () => ke());
            },
            snapshot: (e, n, r) => {
              let i = t.player.position,
                o = t.player.heading ?? 0;
              try {
                t.vehicles.playerVehicle &&
                  (o = t.vehicles.playerVehicle.heading);
              } catch {}
              Hr(e, ee, u.hills, a, n, r, 0, 0.45, {
                icon: `mission`,
                player: { x: i.x, z: i.z, heading: o },
              });
            },
          })),
          f(`hud+menus`),
          await t.yieldFrame(),
          (d = performance.now()),
          (_ = new Wa(c, y)),
          c.touch &&
            ((v = new $a(c)),
            (v.onPause = () => L(`pause`)),
            (v.onMap = () => L(`map`)),
            (v.onPhone = () => L(`phone`)),
            (l.onPromptAction = (e) => v?.highlight(e)),
            v.highlight([])),
          (T = new ro(
            c,
            c.touch ? l.feedEl : c.topLayer,
            c.touch ? c.topLayer : null,
          )),
          (l.hintVisible = () => !!T && T.visible),
          (T.missionNear = (e, t, n) => {
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
          (l.notifyFilter = (e) => !!T && T.isDuplicate(e)),
          (l.objectiveGate = () => !T || T.objectiveReady()),
          (c.onHints = (e) => {
            T &&
              (e === `reset`
                ? (T.reset(), T.setEnabled(!0))
                : T.setEnabled(e === `on`));
          }),
          Ji(),
          (document.body.dataset.quality = t.quality.level),
          Ei(W().uiScale ?? lt()),
          (c.onUiScale = () => u.resize()),
          c.relocalize(),
          f(`title+touch`),
          await t.yieldFrame(),
          (d = performance.now()));
        let C = c.look.relief(t.plan);
        (f(`hills`), await t.yieldFrame(), (d = performance.now()));
        let w = t.quality.level === `low` || t.quality.mobile ? 0.55 : 0.85,
          E = null,
          te = null;
        try {
          ((E = t.transit.mapLines ?? null),
            (te = t.transit.mapStations ?? null));
        } catch {}
        ((ee = {
          plan: t.plan,
          look: c.look,
          scale: w,
          hills: C,
          lines: E,
          stations: te,
        }),
          (u.hills = C),
          u.setBase(ee),
          t.events.once(`game:ready`, () =>
            ao(() => void m().then((e) => e?.prewarm())),
          ),
          u.update(1),
          f(`basemap`),
          await t.yieldFrame(),
          (d = performance.now()));
        let D = t.events;
        (D.on(`notify`, (e) =>
          l.notify(e.text, e.duration ?? 0, e.kind ?? `info`),
        ),
          D.on(`subtitle`, (e) => l.subtitle(e.text, e.duration, e.speaker)),
          D.on(`ui:bigMessage`, (e) =>
            l.bigMessage(e.title, e.subtitle, {
              color: e.color,
              duration: e.duration,
            }),
          ),
          D.on(`money:changed`, (e) => l.moneyChanged(e.money, e.delta)),
          D.on(`wanted:changed`, (e) => l.wantedChanged(e.level, e.prev)),
          D.on(`mission:started`, (e) => l.missionBanner(e.title)),
          D.on(`mission:completed`, () => l.dropMissionBanner()),
          D.on(`mission:failed`, () => l.dropMissionBanner()));
        let ie = (e, n, r) => {
          let i = t.time.real;
          setTimeout(() => {
            l.bigShownSince(e, i - 0.05) || r();
          }, n);
        };
        (D.on(`mission:completed`, (e) => {
          ie(`passed`, 900, () =>
            l.bigMessage(
              J.missionPassed,
              e.reward ? `+${A(e.reward)}` : void 0,
            ),
          );
        }),
          D.on(`mission:failed`, (e) => {
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
              ie(`failed`, 1100, () => l.bigMessage(J.missionFailed, e.reason));
          }),
          D.on(`player:died`, () =>
            ie(`wasted`, 1800, () =>
              l.bigMessage(J.wasted, void 0, { duration: 4.5 }),
            ),
          ),
          D.on(`player:busted`, () =>
            ie(`busted`, 1800, () =>
              l.bigMessage(J.busted, void 0, { duration: 4.5 }),
            ),
          ),
          D.on(`player:enterVehicle`, () => {
            try {
              t.vehicles.playerVehicle && T?.show(`drive`);
            } catch {}
          }),
          D.on(`player:respawned`, () =>
            setTimeout(() => l.showDistrict(!0), 900),
          ),
          D.on(`mrt:travel`, () => setTimeout(() => l.showDistrict(!0), 600)),
          D.on(`player:enterVehicle`, () => {
            setTimeout(() => {
              try {
                t.audio.station >= 0 &&
                  t.vehicles.playerVehicle &&
                  l.showRadio(t.audio.station);
              } catch {}
            }, 500);
          }),
          D.on(`settings:changed`, (e) => {
            e.key === `lang` && c.relocalize();
          }),
          D.on(
            `quality:changed`,
            (e) => (document.body.dataset.quality = e.level),
          ),
          document.addEventListener(`pointerlockchange`, () => {
            if (
              !document.pointerLockElement &&
              !(
                re ||
                !O ||
                x ||
                b.length ||
                c.touch ||
                he > 0 ||
                t.paused ||
                ge()
              )
            ) {
              if (S) {
                Ce();
                return;
              }
              ((ne = performance.now() + 350), L(`pause`));
            }
          }),
          document.addEventListener(`visibilitychange`, () => {
            document.hidden &&
              O &&
              !x &&
              b.length === 0 &&
              !S &&
              !t.params.has(`shot`) &&
              L(`pause`);
          }),
          t.renderer.canvas.addEventListener(`click`, () => {
            _e() && !c.touch && t.input.lockPointer();
          }),
          io &&
            e(
              () =>
                import(`./recovery-WpSwz0a9.js`).then((e) =>
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
          M());
        let k = o.splice(0);
        for (let e of k)
          try {
            e();
          } catch (e) {
            console.error(`[ui] queued call failed`, e);
          }
      },
      start() {
        (je(),
          io &&
            !W().stocksSeen &&
            !W().stocksHinted &&
            setTimeout(() => {
              W().stocksSeen ||
                W().stocksHinted ||
                !O ||
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
          Di(c));
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
        D
          ? !r.down(`pause`) && !r.down(`map`) && !r.down(`phone`) && (D = !1)
          : _e() &&
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
        o !== ve && ((ve = o), M());
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
          (le -= e),
          le <= 0)
        ) {
          le = 1;
          let e = 0;
          try {
            e = t.districts?.pending ?? 0;
          } catch {}
          let n = t.plan.pois.length;
          (ue < 0
            ? (ue = n)
            : (n !== ue || (e === 0 && de > 0)) &&
              ((ue = n), u.refreshShops(), d?.invalidateLegend()),
            (de = e));
        }
        if (
          (((_e() && E && !ve) || b[b.length - 1] === `phone`) && u.update(e),
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
        if (T) {
          let n = _e() && !ve && E,
            r = 0;
          if (n)
            try {
              r = t.police.level;
            } catch {}
          let i = pe;
          ((i.promptAction = l.hasPromptAction(`enter`)
            ? `enter`
            : l.promptVisibleAction),
            (i.inVehicle = !p),
            (i.wanted = r),
            T.update(e, n, i));
        }
        if (v) {
          let e = r.virtual;
          (e.throttle > 0 || e.brake > 0) && (e.lookDX += 1e-4);
        }
        he === 0 && y.update(e);
        let x = performance.now() - n;
        ((ae += x),
          oe++,
          x > fe.maxMs && (fe.maxMs = x),
          oe >= 60 &&
            ((fe.avgMs = +(ae / oe).toFixed(3)),
            (ae = 0),
            (oe = 0),
            (ce += 1),
            t.params.has(`uiperf`) &&
              ce % 5 == 0 &&
              (console.info(
                `[ui] avg ${fe.avgMs}ms max ${fe.maxMs.toFixed(2)}ms`,
              ),
              (fe.maxMs = 0))));
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
        (I(), await De.fade(1, 0.35), (O = !1));
      }
      ((x = !0), (t.input.enabled = !1), t.input.unlockPointer());
      try {
        t.player.setControlEnabled(!1);
      } catch {}
      (M(),
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
      R();
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
  function R() {
    O = !0;
    let e = !Ae;
    ((Ae = !0),
      j(() => {
        if ((M(), setTimeout(() => l.showDistrict(!0), 700), !e)) return;
        let n = t.params.get(`ui`);
        (n &&
          setTimeout(() => {
            n === `photo` ? Se() : De.openMenu(n);
          }, 50),
          t.params.has(`uidemo`) && Me());
      }));
  }
  function je() {
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
  function Me() {
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
                  `按 E 購買茶葉蛋 ${A(13, k)}`,
                  `E で茶葉蛋を買う ${A(13, k)}`,
                )
              : `按 E 購買茶葉蛋 ${A(13, k)}`,
            en: `Press E to buy a tea egg (${A(13, k)})`,
          }),
        50,
      ));
    let o = () => {
      t.params.has(`uidemo`) &&
        (l.prompt({
          zh: n.on
            ? n.t(`按 E 購買茶葉蛋 ${A(13, k)}`, `E で茶葉蛋を買う ${A(13, k)}`)
            : `按 E 購買茶葉蛋 ${A(13, k)}`,
          en: `Press E to buy a tea egg (${A(13, k)})`,
        }),
        requestAnimationFrame(o));
    };
    o();
  }
  return De;
}
