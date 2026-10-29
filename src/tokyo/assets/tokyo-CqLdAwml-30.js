// tokyo/assets/tokyo-CqLdAwml 30 — player
// Lines 11926-12974 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Qo(t, r = {}) {
  let i = new yr(),
    a = new Cr(t),
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
          import(`./fullmap-DiPIDBIM.js`).then((e) => {
            let t = new e.FullMap(c, i, a, b);
            return (
              p && c.menuLayer.replaceChild(t.el, p),
              (t.onClose = () => M(`map`)),
              (t.hills = u.hills),
              (t.src = E),
              (d = t),
              j(),
              t
            );
          }),
        __vite__mapDeps([30, 7, 6, 5, 4, 3, 8, 9, 21, 26, 31, 14]),
      ).catch(
        (e) => ((f = null), console.warn(`[ui] full map chunk`, e), null),
      )),
    h,
    g,
    _,
    y = null,
    b,
    x = [],
    S = !1,
    C = !1,
    w = null,
    ee = [],
    T = null,
    E = null,
    D = !t.params.has(`hud`) || t.params.get(`hud`) !== `0`,
    O = !1,
    te = !1,
    ne = 0,
    k = !1,
    ie = !1,
    ae = 0,
    oe = 0,
    se = 0,
    ce = 0,
    le = 1,
    ue = -1,
    de = -1,
    fe = { avgMs: 0, maxMs: 0 },
    pe = { promptAction: null, inVehicle: !1, wanted: 0 },
    me = { frame: -1, action: null },
    he = (e) => {
      s ? e() : o.push(e);
    },
    ge = 0,
    _e = () => {
      try {
        let e = t.transit;
        return !!(e && (e.pickerOpen || e.traveling));
      } catch {
        return !1;
      }
    },
    ve = () => ie && !S && !C && x.length === 0 && ge === 0 && !_e(),
    ye = !1,
    j = () => {
      if (!s) return;
      let e = x.includes(`pause`) || x.includes(`map`),
        t = D && ie && !S && !C && !e && !ye;
      (c.root.classList.toggle(`hud-off`, !t),
        l.setShown(t),
        c.root.classList.toggle(`phone-open`, x[x.length - 1] === `phone`));
      for (let e = 0; e < x.length; e++) {
        let t = x[e];
        if (t === `phone`) h.setZ(e + 1);
        else {
          let n = t === `pause` ? g.el : d?.el,
            r = String(e + 1);
          n && n.style.zIndex !== r && (n.style.zIndex = r);
        }
      }
      (l.setActive(ve()), y?.setVisible(ve() && D && !ye));
    },
    be = () => {
      x.length === 0 &&
        ((O = t.paused),
        t.setPaused(!0),
        (k = !0),
        t.input.unlockPointer(),
        setTimeout(() => (k = !1), 200));
    },
    xe = () => {
      (t.setPaused(O),
        (te = !0),
        !c.touch && t.input.device !== `touch` && t.input.lockPointer(),
        j());
    },
    M = (e) => {
      let t = x.lastIndexOf(e);
      t < 0 ||
        (x.splice(t, 1),
        e === `pause`
          ? g.close()
          : e === `map`
            ? (d?.close(), u.suspend(!1))
            : h.close(),
        x.length === 0 ? xe() : j());
    },
    N = () => {
      for (; x.length;) {
        let e = x.pop();
        e === `pause`
          ? g.close()
          : e === `map`
            ? (d?.close(), u.suspend(!1))
            : h.close();
      }
      xe();
    },
    P = (e, t) => {
      if (!(!s || S || _e())) {
        if ((C && L(), x.includes(e))) {
          for (; x[x.length - 1] !== e;) M(x[x.length - 1]);
          e === `pause`
            ? g.setTab(t ?? `home`, !!t && t !== `home`)
            : e === `phone` && t && h.openApp(t);
          return;
        }
        if (
          (be(),
          x[x.length - 1] === `phone` && e !== `phone` && (x.pop(), h.close()),
          x.push(e),
          e === `pause`)
        )
          g.open(t ?? `home`);
        else if (e === `map`) {
          u.suspend(!0);
          let e = t;
          d
            ? d.open(e)
            : m().then((t) => x[x.length - 1] === `map` && t?.open(e));
        } else h.open(t);
        j();
      }
    },
    F = (e) => {
      C &&
        !v(e.target) &&
        (e.code === `Enter` || e.code === `NumpadEnter`
          ? (e.preventDefault(), Ae())
          : (e.code === `Escape` || e.code === `KeyT`) &&
            (e.preventDefault(), De ? Oe() : L()));
    },
    I = () => {
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
        r(`exit`, z.close, W.photoExit, () => {
          (c.sfx(`ui_back`), L());
        }),
        r(`shoot`, z.camera, W.photoCapture, () => Ae()),
        { root: e, hint: t }
      );
    },
    Se = () => {
      if (!w) return;
      let e =
          c.touch && t.input.device !== `gamepad` ? `touch` : t.input.device,
        n = w.hint;
      ((n.textContent = ``), B(`b`, ``, n, c.t(W.photoTitle)));
      let r = B(`span`, `ph-keys`, n);
      (e === `gamepad`
        ? (Lr(r, `A`),
          r.appendChild(document.createTextNode(c.t(W.photoSave))),
          Lr(r, `B`),
          r.appendChild(document.createTextNode(c.t(W.photoLeave))))
        : e === `kbm` &&
          (r.innerHTML = `<span class="kc kc-wide">Enter</span>${c.t(W.photoSave)}<span class="kc kc-wide">Esc</span>${c.t(W.photoLeave)}`),
        (n.dataset.dev = e));
    },
    Ce = () => {
      (N(),
        (C = !0),
        (te = !0),
        (w ||= I()),
        Se(),
        w.root.classList.add(`show`),
        c.root.classList.add(`photo`),
        document.documentElement.classList.add(`tr-photo`),
        window.addEventListener(`keydown`, F, !0));
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      ((ee = e ? e.buttons.map((e) => e.pressed) : []), j());
    },
    L = () => {
      C &&
        (Oe(),
        (C = !1),
        (te = !0),
        w?.root.classList.remove(`show`),
        c.root.classList.remove(`photo`),
        document.documentElement.classList.remove(`tr-photo`),
        window.removeEventListener(`keydown`, F, !0),
        j());
    },
    we = () => {
      if (ge > 0) return;
      let e = navigator.getGamepads?.()?.find((e) => e && e.connected);
      if (!e) return;
      let t = e.buttons.map((e) => e.pressed),
        n = (e) => t[e] && !ee[e];
      (n(0) ? Ae() : (n(1) || n(9) || n(8)) && (c.sfx(`ui_back`), L()),
        (ee = t));
    },
    Te = !1,
    Ee = !1,
    De = null,
    Oe = () => {
      De &&= (De.root.remove(), URL.revokeObjectURL(De.url), null);
    },
    ke = (n) => {
      Ee = !0;
      let r = null;
      try {
        let e = t.player.position;
        r = t.plan.districtAt(e.x, e.z).name;
      } catch {
        r = null;
      }
      e(
        async () => {
          let { openShareCard: e } = await import(`./photoShare-C-qEBRcV.js`);
          return { openShareCard: e };
        },
        __vite__mapDeps([32, 21, 26]),
      )
        .then(({ openShareCard: e }) =>
          e({
            kit: c,
            parent: c.topLayer,
            blob: n,
            place: r,
            onRetake: () => Oe(),
          }),
        )
        .then(
          (e) => {
            if (((Ee = !1), !C)) {
              (e.root.remove(), URL.revokeObjectURL(e.url));
              return;
            }
            (Oe(), (De = e));
          },
          (e) => {
            ((Ee = !1),
              console.warn(`[ui] photo share card failed`, e),
              l.notify({ zh: `拍照失敗`, en: `Photo failed` }, 2.5, `bad`));
          },
        );
    },
    Ae = () => {
      if (Te || De || Ee) return;
      Te = !0;
      let e = B(`div`, `photo-flash`, c.topLayer);
      (setTimeout(() => e.remove(), 600), c.sfx(`ui_confirm`));
      let n = (e) => {
        if (((Te = !1), !e)) {
          l.notify({ zh: `拍照失敗`, en: `Photo failed` }, 2.5, `bad`);
          return;
        }
        if (ke) {
          ke(e);
          return;
        }
        let t = URL.createObjectURL(e),
          n = document.createElement(`a`);
        ((n.href = t),
          (n.download = `${Y.slug}-${Date.now()}.png`),
          n.click(),
          setTimeout(() => URL.revokeObjectURL(t), 4e3),
          l.notify(G.photoSaved, 2.5, `good`));
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
    je = {
      name: `ui`,
      alwaysUpdate: !0,
      perf: fe,
      get menuOpen() {
        return S ? `main` : (x[x.length - 1] ?? null);
      },
      get waypoint() {
        return a.waypoint ? { x: a.waypoint.x, z: a.waypoint.z } : null;
      },
      get hudVisible() {
        return D;
      },
      get hintsEnabled() {
        return !!T?.enabled;
      },
      notify(e, t = {}) {
        he(() => l.notify(e, t.duration ?? 0, t.kind ?? `info`));
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
        he(() => l.setObjective(e));
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
        he(() => l.setTimer(e, t));
      },
      setProgress(e, t) {
        he(() => l.setProgress(e, t));
      },
      bigMessage(e, t, n) {
        he(() => l.bigMessage(e, t, n));
      },
      subtitle(e, t, n) {
        he(() => l.subtitle(e, t, n));
      },
      openMenu(e, t) {
        he(() => {
          switch (e) {
            case `pause`:
              P(`pause`, `home`);
              break;
            case `settings`:
              P(`pause`, `settings`);
              break;
            case `help`:
              P(`pause`, `controls`);
              break;
            case `map`:
              P(`map`, t);
              break;
            case `phone`:
              P(`phone`);
              break;
            case `missions`:
              P(`phone`, `missions`);
              break;
            case `mrt`:
              P(`phone`, `mrt`);
              break;
            case `main`:
              je.showMainMenu();
          }
        });
      },
      closeMenu() {
        s && x.length && N();
      },
      async showMainMenu() {
        let e = t.params.has(`menu`);
        if ((t.params.has(`autoplay`) || Do() || Jo()) && !e) {
          Fe();
          return;
        }
        (s || (await new Promise((e) => o.push(e))), await Me());
      },
      async titleReady(e = 2500) {
        ((!t.params.has(`autoplay`) && !Do() && !Jo()) ||
          t.params.has(`menu`)) &&
          (s || (await new Promise((e) => o.push(e))), await _.photoReady(e));
      },
      fade(e, t = 0.6) {
        return (
          ++ae,
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
        ((D = e), j());
      },
      setExternalMenu(e) {
        ((ge = Math.max(0, ge + (e ? 1 : -1))), e && (te = !0), j());
      },
      photoMode(e) {
        he(() => (e ? Ce() : L()));
      },
      demo() {
        he(() => Le());
      },
      get _debug() {
        return {
          hud: l,
          minimap: u,
          fullmap: d,
          touch: y,
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
        ((c = new _r(t)),
          (c.region = r),
          (c.look = r.look?.(t.plan) ?? Si(t.plan)),
          r.install?.(t),
          (b = new Uo()),
          (b.onMove = () => c.sfx(`ui_hover`, 0.5)),
          (l = new oi(c, a)),
          (u = new Ni(c, i, a, () => P(`map`))),
          (p = c.menuLayer.appendChild(document.createComment(`fullmap`))),
          (g = new Ha(c, b, {
            history: () => l.history,
            resume: () => {
              performance.now() < ne || N();
            },
            openMap: () => P(`map`),
            abandon: () => Ne(),
            toTitle: () => void Me(!0),
            snapshot: (e) => {
              let n = t.player.position,
                r = t.player.heading ?? 0;
              try {
                t.vehicles.playerVehicle &&
                  (r = t.vehicles.playerVehicle.heading);
              } catch {}
              Ii(e, E, u.hills, a, n.x, n.z, r, 0.55);
            },
          })),
          (h = new ta(c, b, a, {
            close: () => M(`phone`),
            openMap: () => P(`map`),
            openSettings: () => P(`pause`, `settings`),
            openHelp: () => P(`pause`, `controls`),
            photoMode: () => Ce(),
            abandon: () => {
              Jt(c, b, W.abandonConfirm, W.abandonOk, () => Ne());
            },
            snapshot: (e, n, r) => {
              let i = t.player.position,
                o = t.player.heading ?? 0;
              try {
                t.vehicles.playerVehicle &&
                  (o = t.vehicles.playerVehicle.heading);
              } catch {}
              Ii(e, E, u.hills, a, n, r, 0, 0.45, {
                icon: `mission`,
                player: { x: i.x, z: i.z, heading: o },
              });
            },
          })),
          f(`hud+menus`),
          await t.yieldFrame(),
          (d = performance.now()),
          (_ = new No(c, b)),
          c.touch &&
            ((y = new Ho(c)),
            (y.onPause = () => P(`pause`)),
            (y.onMap = () => P(`map`)),
            (y.onPhone = () => P(`phone`)),
            (y.onPhoto = () => Ce()),
            (l.onPromptAction = (e) => y?.highlight(e)),
            y.highlight([])),
          (T = new Ko(
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
          Sa(),
          (document.body.dataset.quality = t.quality.level),
          Gt(K().uiScale ?? jt()),
          (c.onUiScale = () => u.resize()),
          c.relocalize(),
          f(`title+touch`),
          await t.yieldFrame(),
          (d = performance.now()));
        let v = c.look.relief(t.plan);
        (f(`hills`), await t.yieldFrame(), (d = performance.now()));
        let w = t.quality.level === `low` || t.quality.mobile ? 0.55 : 0.85,
          ee = null,
          D = null;
        try {
          ((ee = t.transit.mapLines ?? null),
            (D = t.transit.mapStations ?? null));
        } catch {}
        ((E = {
          plan: t.plan,
          look: c.look,
          scale: w,
          hills: v,
          lines: ee,
          stations: D,
        }),
          (u.hills = v),
          u.setBase(E),
          t.events.once(`game:ready`, () =>
            Zo(() => void m().then((e) => e?.prewarm())),
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
        let te = (e, n, r) => {
          let i = t.time.real;
          setTimeout(() => {
            l.bigShownSince(e, i - 0.05) || r();
          }, n);
        };
        (O.on(`mission:completed`, (e) => {
          te(`passed`, 900, () =>
            l.bigMessage(
              G.missionPassed,
              e.reward ? `+${A(e.reward)}` : void 0,
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
              te(`failed`, 1100, () => l.bigMessage(G.missionFailed, e.reason));
          }),
          O.on(`player:died`, () =>
            te(`wasted`, 1800, () =>
              l.bigMessage(G.wasted, void 0, { duration: 4.5 }),
            ),
          ),
          O.on(`player:busted`, () =>
            te(`busted`, 1800, () =>
              l.bigMessage(G.busted, void 0, { duration: 4.5 }),
            ),
          ),
          O.on(`player:enterVehicle`, () => {
            try {
              t.vehicles.playerVehicle && T?.show(`drive`);
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
                k ||
                !ie ||
                S ||
                x.length ||
                c.touch ||
                ge > 0 ||
                t.paused ||
                _e()
              )
            ) {
              if (C) {
                L();
                return;
              }
              ((ne = performance.now() + 350), P(`pause`));
            }
          }),
          document.addEventListener(`visibilitychange`, () => {
            document.hidden &&
              ie &&
              !S &&
              x.length === 0 &&
              !C &&
              !t.params.has(`shot`) &&
              P(`pause`);
          }),
          t.renderer.canvas.addEventListener(`click`, () => {
            ve() && !c.touch && t.input.lockPointer();
          }),
          Xo &&
            e(
              () =>
                import(`./recovery-DKVj2RZ5.js`).then((e) =>
                  e.resolveInBackground(t, (e, n) =>
                    t.events.emit(`notify`, {
                      text: e,
                      duration: 3.5,
                      kind: n,
                    }),
                  ),
                ),
              __vite__mapDeps([23, 6, 7, 5, 4, 3, 8, 9, 20]),
            ).catch(() => {}),
          (s = !0),
          j());
        let re = o.splice(0);
        for (let e of re)
          try {
            e();
          } catch (e) {
            console.error(`[ui] queued call failed`, e);
          }
      },
      start() {
        (Ie(),
          Xo &&
            !K().stocksSeen &&
            !K().stocksHinted &&
            setTimeout(() => {
              K().stocksSeen ||
                K().stocksHinted ||
                !ie ||
                (q({ stocksHinted: !0 }),
                t.events.emit(`notify`, {
                  text: {
                    zh: `手機新功能：台股交易 📈 用遊戲的錢買股票`,
                    en: `New on your phone: Stocks 📈 — buy shares with game cash`,
                  },
                  duration: 6,
                  kind: `info`,
                }));
            }, 9e4),
          Kt(c));
        let e = K().character;
        if (e)
          try {
            t.player.setCharacter(e);
          } catch {}
      },
      update(e) {
        if (!s) return;
        let n = performance.now(),
          r = t.input;
        te
          ? !r.down(`pause`) && !r.down(`map`) && !r.down(`phone`) && (te = !1)
          : ve() &&
            !t.paused &&
            (r.pressed(`pause`)
              ? P(`pause`)
              : r.pressed(`map`)
                ? P(`map`)
                : r.pressed(`phone`) && P(`phone`));
        let i = `foot`;
        try {
          i = t.player.mode;
        } catch {}
        let o =
          i === `dead` ||
          i === `busted` ||
          (i === `cutscene` && !t.vehicles.enteringVehicle);
        o !== ye && ((ye = o), j());
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
            l.notify(G.arrived, 2.5, `good`),
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
          (((ve() && D && !ye) || x[x.length - 1] === `phone`) && u.update(e),
          d?.update(e),
          h.update(e),
          g.update(),
          _.update(e),
          y?.update(),
          C)
        ) {
          we();
          let e = c.touch && r.device !== `gamepad` ? `touch` : r.device;
          w && w.hint.dataset.dev !== e && Se();
        }
        if (T) {
          let n = ve() && !ye && D,
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
        if (y) {
          let e = r.virtual;
          (e.throttle > 0 || e.brake > 0) && (e.lookDX += 1e-4);
        }
        ge === 0 && b.update(e);
        let v = performance.now() - n;
        ((oe += v),
          se++,
          v > fe.maxMs && (fe.maxMs = v),
          se >= 60 &&
            ((fe.avgMs = +(oe / se).toFixed(3)),
            (oe = 0),
            (se = 0),
            (ce += 1),
            t.params.has(`uiperf`) &&
              ce % 5 == 0 &&
              (console.info(
                `[ui] avg ${fe.avgMs}ms max ${fe.maxMs.toFixed(2)}ms`,
              ),
              (fe.maxMs = 0))));
      },
    };
  async function Me(e = !1) {
    if (!S) {
      if (e && Jo()) {
        try {
          t.state.saveNow();
        } catch {}
        Yo();
        return;
      }
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
        (N(), await je.fade(1, 0.35), (ie = !1));
      }
      ((S = !0), (t.input.enabled = !1), t.input.unlockPointer());
      try {
        t.player.setControlEnabled(!1);
      } catch {}
      (j(),
        _.open(e),
        e && je.fade(0, 0.6),
        t.params.has(`titlechar`) && _.openPanel(`character`),
        await new Promise((e) => {
          _.onPlay = () => {
            ((_.onPlay = void 0), e());
          };
        }),
        await _.leave(),
        _.close(),
        (S = !1),
        (t.input.enabled = !0));
      try {
        t.player.setControlEnabled(!0);
      } catch {}
      Fe();
    }
  }
  function Ne() {
    let e = !1;
    try {
      t.missions.active && (t.missions.abort(), (e = !0));
    } catch (e) {
      console.warn(`[ui] abort failed`, e);
    }
    je.fade(0, 0.25);
    try {
      (l.setObjective(null), l.setTimer(null), l.setProgress(null));
    } catch {}
    (N(), e && c.sfx(`ui_back`));
  }
  let Pe = !1;
  function Fe() {
    ie = !0;
    let e = !Pe;
    ((Pe = !0),
      at(t.player),
      he(() => {
        if ((j(), setTimeout(() => l.showDistrict(!0), 700), !e)) return;
        let n = t.params.get(`ui`);
        (n &&
          setTimeout(() => {
            n === `photo` ? Ce() : je.openMenu(n);
          }, 50),
          t.params.has(`uidemo`) && Le());
      }));
  }
  function Ie() {
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
  function Le() {
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
                  `按 E 購買茶葉蛋 ${A(13, re)}`,
                  `E で茶葉蛋を買う ${A(13, re)}`,
                )
              : `按 E 購買茶葉蛋 ${A(13, re)}`,
            en: `Press E to buy a tea egg (${A(13, re)})`,
          }),
        50,
      ));
    let o = () => {
      t.params.has(`uidemo`) &&
        (l.prompt({
          zh: n.on
            ? n.t(
                `按 E 購買茶葉蛋 ${A(13, re)}`,
                `E で茶葉蛋を買う ${A(13, re)}`,
              )
            : `按 E 購買茶葉蛋 ${A(13, re)}`,
          en: `Press E to buy a tea egg (${A(13, re)})`,
        }),
        requestAnimationFrame(o));
    };
    o();
  }
  return je;
}
