// tokyo/assets/tokyo-_rNKO_Y7 19 — msg
// Lines 7871-8219 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function Oi(e, t, n = {}) {
  let r = e.ctx,
    i = r.state,
    a = V(`div`, `panel settings`, t);
  le(a, r);
  let o = (e, t) => i.setSetting(e, t),
    s = [],
    c = (e) => {
      try {
        let t = e();
        s.push({
          render: () => {
            try {
              t.render();
            } catch (e) {
              console.warn(`[ui] settings row render failed`, e);
            }
          },
        });
      } catch (e) {
        console.warn(`[ui] settings row failed`, e);
      }
    },
    l = (t) => e.dual(V(`div`, `panel-sec`, a), t);
  if (n.openMap) {
    let t = { zh: `開啟地圖`, en: `Open map` },
      { r, ctl: i } = xi(e, a, t, `action`);
    (r.classList.add(`srow-map`),
      (r.tabIndex = 0),
      r.setAttribute(`role`, `button`),
      e.bindTitle(r, t),
      (V(`span`, `srow-act`, i).innerHTML = B.map),
      r.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.openMap?.());
      }));
  }
  (l(J.quality),
    c(() =>
      Ci(
        e,
        a,
        J.quality,
        [
          { value: `auto`, msg: J.qAuto },
          { value: `low`, msg: J.qLow },
          { value: `medium`, msg: J.qMedium },
          { value: `high`, msg: J.qHigh },
          { value: `ultra`, msg: J.qUltra },
        ],
        () => i.settings.quality,
        (t) => {
          (o(`quality`, t), Ti(e, t));
        },
      ),
    ),
    c(() =>
      Ci(
        e,
        a,
        { zh: `畫面更新率`, en: `Frame Rate` },
        [
          { value: `60`, msg: { zh: `60 FPS`, en: `60 FPS` } },
          { value: `30`, msg: { zh: `30 省電`, en: `30 Saver` } },
        ],
        () => (i.settings.frameRate === `30` ? `30` : `60`),
        (e) => o(`frameRate`, e),
      ),
    ),
    c(() =>
      wi(
        e,
        a,
        J.showFps,
        () => i.settings.showFps,
        (e) => o(`showFps`, e),
      ),
    ),
    l({ zh: `聲音`, en: `Audio` }));
  let u = (t) => (n) => {
    (o(t, n), Di(e));
  };
  (c(() =>
    Si(
      e,
      a,
      J.master,
      0,
      1,
      0.05,
      () => i.settings.masterVolume,
      u(`masterVolume`),
    ),
  ),
    c(() =>
      Si(
        e,
        a,
        J.music,
        0,
        1,
        0.05,
        () => i.settings.musicVolume,
        u(`musicVolume`),
      ),
    ),
    c(() =>
      Si(e, a, J.sfx, 0, 1, 0.05, () => i.settings.sfxVolume, u(`sfxVolume`)),
    ),
    c(() =>
      Si(
        e,
        a,
        { zh: `介面大小`, en: `HUD Size` },
        0.8,
        1.3,
        0.05,
        () => W().uiScale ?? lt(),
        (t) => {
          (G({ uiScale: t }), Ei(t), e.onUiScale?.());
        },
        (e) => `${Math.round(e * 100)}%`,
      ),
    ),
    l(J.controls),
    c(() =>
      Si(
        e,
        a,
        J.sensitivity,
        0.2,
        3,
        0.1,
        () => i.settings.sensitivity,
        (e) => o(`sensitivity`, e),
        (e) => `${e.toFixed(1)}×`,
      ),
    ),
    c(() =>
      wi(
        e,
        a,
        J.invertY,
        () => i.settings.invertY,
        (e) => o(`invertY`, e),
      ),
    ),
    c(() =>
      wi(
        e,
        a,
        Y.hints,
        () => !W().hintsOff,
        (t) => {
          (G({ hintsOff: !t }), e.onHints?.(t ? `on` : `off`));
        },
      ),
    ));
  {
    let { r: t, ctl: n } = xi(e, a, Y.hintsReset, `action`),
      r = V(`span`, `srow-act`, n);
    ((r.innerHTML = B.reload),
      t.addEventListener(`click`, (t) => {
        (t.stopPropagation(),
          G({ hintsSeen: [], hintsOff: !1 }),
          e.onHints?.(`reset`),
          e.sfx(`ui_confirm`),
          s.forEach((e) => e.render()));
        try {
          e.ctx.events.emit(`notify`, {
            text: Y.hintsResetDone,
            kind: `good`,
            duration: 2.5,
          });
        } catch {}
      }));
  }
  if (
    (l(J.language),
    c(() =>
      Ci(
        e,
        a,
        J.language,
        [
          {
            value: `zh`,
            msg: { zh: `繁體中文`, en: `繁體中文`, ja: `繁體中文` },
          },
          { value: `ja`, msg: { zh: `日本語`, en: `日本語`, ja: `日本語` } },
          { value: `en`, msg: { zh: `English`, en: `English`, ja: `English` } },
        ],
        () => i.settings.lang,
        (e) => o(`lang`, e),
      ),
    ),
    n.reset)
  ) {
    l({ zh: `資料`, en: `Data` });
    let { r: t, ctl: r } = xi(e, a, J.resetSave, `action`);
    t.classList.add(`srow-danger`);
    let i = V(`span`, `srow-act`, r);
    ((i.innerHTML = B.close),
      t.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.reset?.());
      }));
  }
  let d = V(`div`, `panel-hint`, a);
  return (
    e.bind(d, J.qualityHint),
    { el: a, refresh: () => s.forEach((e) => e.render()) }
  );
}
function ki(e, t, n, r, i, a = !0) {
  let o = V(`div`, `dlg-wrap`, e.menuLayer),
    s = V(`div`, `dlg`, o);
  e.bind(V(`div`, `dlg-text`, s), n);
  let c = V(`div`, `dlg-btns`, s),
    l,
    u = () => {
      (t.pop(l), o.classList.remove(`show`), setTimeout(() => o.remove(), 250));
    };
  (Z(
    e,
    c,
    J.cancel,
    () => {
      (e.sfx(`ui_back`), u());
    },
    { cls: `dlg-btn`, dual: !1 },
  ),
    Z(
      e,
      c,
      r,
      () => {
        (u(), i());
      },
      { cls: `dlg-btn ${a ? `danger` : `primary`}`, dual: !1 },
    ),
    (l = { root: s, onBack: u, initial: () => c.firstElementChild }),
    t.push(l),
    requestAnimationFrame(() => o.classList.add(`show`)));
}
var Ai = typeof navigator < `u` ? navigator.userAgent : ``,
  ji = () =>
    /iPad|iPhone|iPod/.test(Ai) ||
    (navigator.platform === `MacIntel` && (navigator.maxTouchPoints ?? 0) > 1);
function Mi(e = Ai) {
  return / Line\//.test(e)
    ? `line`
    : /FBAN|FBAV|FBIOS|FB_IAB|MessengerForiOS/.test(e)
      ? `facebook`
      : /Instagram/.test(e)
        ? `instagram`
        : /CriOS\//.test(e)
          ? `chrome`
          : /EdgiOS\//.test(e)
            ? `edge`
            : /FxiOS\//.test(e)
              ? `firefox`
              : /Version\/\d+/.test(e) && /Safari\//.test(e)
                ? `safari`
                : `webview`;
}
var Ni = (e = Ai) =>
  Mi(e) === `safari` ? Number(/Version\/(\d+)/.exec(e)?.[1] ?? 0) : 0;
function Pi() {
  try {
    let e = new URL(location.href);
    return (e.searchParams.set(`openExternalBrowser`, `1`), e.toString());
  } catch {
    return location.href;
  }
}
var Fi = null,
  Ii = [];
typeof window < `u` &&
  (window.addEventListener(`beforeinstallprompt`, (e) => {
    (e.preventDefault(), (Fi = e));
    for (let e of Ii) e();
  }),
  window.addEventListener(`appinstalled`, () => {
    Fi = null;
    for (let e of Ii) e();
  }));
var Li = () => !!Fi && !Bi();
function Ri(e) {
  Ii.push(e);
}
async function zi() {
  let e = Fi;
  if (!e) return !1;
  Fi = null;
  try {
    await e.prompt();
    let t = await e.userChoice;
    for (let e of Ii) e();
    return t.outcome === `accepted`;
  } catch {
    return !1;
  }
}
function Bi() {
  try {
    return navigator.standalone
      ? !0
      : matchMedia(`(display-mode: standalone)`).matches ||
          matchMedia(`(display-mode: fullscreen)`).matches;
  } catch {
    return !1;
  }
}
function Vi() {
  let e = document;
  return !!(e.fullscreenEnabled || e.webkitFullscreenEnabled);
}
function Hi() {
  let e = document;
  return !!(e.fullscreenElement || e.webkitFullscreenElement);
}
async function Ui() {
  let e = document.documentElement;
  try {
    if (e.requestFullscreen)
      await e.requestFullscreen({ navigationUI: `hide` });
    else if (e.webkitRequestFullscreen) await e.webkitRequestFullscreen();
    else return !1;
  } catch {
    return !1;
  }
  return (Gi(), !0);
}
async function Wi() {
  let e = document;
  try {
    e.exitFullscreen
      ? await e.exitFullscreen()
      : await e.webkitExitFullscreen?.();
  } catch {}
}
function Gi() {
  try {
    screen.orientation?.lock?.(`landscape`)?.catch?.(() => {});
  } catch {}
}
function Ki(e) {
  (document.addEventListener(`fullscreenchange`, e),
    document.addEventListener(`webkitfullscreenchange`, e));
}
