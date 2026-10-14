// tokyo/assets/tokyo-BZXVhKTn 19 — msg
// Lines 7631-7979 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
function vi(e, t, n = {}) {
  let r = e.ctx,
    i = r.state,
    a = B(`div`, `panel settings`, t);
  ie(a, r);
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
    l = (t) => e.dual(B(`div`, `panel-sec`, a), t);
  if (n.openMap) {
    let t = { zh: `開啟地圖`, en: `Open map` },
      { r, ctl: i } = di(e, a, t, `action`);
    (r.classList.add(`srow-map`),
      (r.tabIndex = 0),
      r.setAttribute(`role`, `button`),
      e.bindTitle(r, t),
      (B(`span`, `srow-act`, i).innerHTML = z.map),
      r.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.openMap?.());
      }));
  }
  (l(J.quality),
    c(() =>
      pi(
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
          (o(`quality`, t), hi(e, t));
        },
      ),
    ),
    c(() =>
      pi(
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
      mi(
        e,
        a,
        J.showFps,
        () => i.settings.showFps,
        (e) => o(`showFps`, e),
      ),
    ),
    l({ zh: `聲音`, en: `Audio` }));
  let u = (t) => (n) => {
    (o(t, n), _i(e));
  };
  (c(() =>
    fi(
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
      fi(
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
      fi(e, a, J.sfx, 0, 1, 0.05, () => i.settings.sfxVolume, u(`sfxVolume`)),
    ),
    c(() =>
      fi(
        e,
        a,
        { zh: `介面大小`, en: `HUD Size` },
        0.8,
        1.3,
        0.05,
        () => W().uiScale ?? nt(),
        (t) => {
          (G({ uiScale: t }), gi(t), e.onUiScale?.());
        },
        (e) => `${Math.round(e * 100)}%`,
      ),
    ),
    l(J.controls),
    c(() =>
      fi(
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
      mi(
        e,
        a,
        J.invertY,
        () => i.settings.invertY,
        (e) => o(`invertY`, e),
      ),
    ),
    c(() =>
      mi(
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
    let { r: t, ctl: n } = di(e, a, Y.hintsReset, `action`),
      r = B(`span`, `srow-act`, n);
    ((r.innerHTML = z.reload),
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
      pi(
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
    let { r: t, ctl: r } = di(e, a, J.resetSave, `action`);
    t.classList.add(`srow-danger`);
    let i = B(`span`, `srow-act`, r);
    ((i.innerHTML = z.close),
      t.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.reset?.());
      }));
  }
  let d = B(`div`, `panel-hint`, a);
  return (
    e.bind(d, J.qualityHint),
    { el: a, refresh: () => s.forEach((e) => e.render()) }
  );
}
function yi(e, t, n, r, i, a = !0) {
  let o = B(`div`, `dlg-wrap`, e.menuLayer),
    s = B(`div`, `dlg`, o);
  e.bind(B(`div`, `dlg-text`, s), n);
  let c = B(`div`, `dlg-btns`, s),
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
var bi = typeof navigator < `u` ? navigator.userAgent : ``,
  xi = () =>
    /iPad|iPhone|iPod/.test(bi) ||
    (navigator.platform === `MacIntel` && (navigator.maxTouchPoints ?? 0) > 1);
function Si(e = bi) {
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
var Ci = (e = bi) =>
  Si(e) === `safari` ? Number(/Version\/(\d+)/.exec(e)?.[1] ?? 0) : 0;
function wi() {
  try {
    let e = new URL(location.href);
    return (e.searchParams.set(`openExternalBrowser`, `1`), e.toString());
  } catch {
    return location.href;
  }
}
var Ti = null,
  Ei = [];
typeof window < `u` &&
  (window.addEventListener(`beforeinstallprompt`, (e) => {
    (e.preventDefault(), (Ti = e));
    for (let e of Ei) e();
  }),
  window.addEventListener(`appinstalled`, () => {
    Ti = null;
    for (let e of Ei) e();
  }));
var Di = () => !!Ti && !Ai();
function Oi(e) {
  Ei.push(e);
}
async function ki() {
  let e = Ti;
  if (!e) return !1;
  Ti = null;
  try {
    await e.prompt();
    let t = await e.userChoice;
    for (let e of Ei) e();
    return t.outcome === `accepted`;
  } catch {
    return !1;
  }
}
function Ai() {
  try {
    return navigator.standalone
      ? !0
      : matchMedia(`(display-mode: standalone)`).matches ||
          matchMedia(`(display-mode: fullscreen)`).matches;
  } catch {
    return !1;
  }
}
function ji() {
  let e = document;
  return !!(e.fullscreenEnabled || e.webkitFullscreenEnabled);
}
function Mi() {
  let e = document;
  return !!(e.fullscreenElement || e.webkitFullscreenElement);
}
async function Ni() {
  let e = document.documentElement;
  try {
    if (e.requestFullscreen)
      await e.requestFullscreen({ navigationUI: `hide` });
    else if (e.webkitRequestFullscreen) await e.webkitRequestFullscreen();
    else return !1;
  } catch {
    return !1;
  }
  return (Fi(), !0);
}
async function Pi() {
  let e = document;
  try {
    e.exitFullscreen
      ? await e.exitFullscreen()
      : await e.webkitExitFullscreen?.();
  } catch {}
}
function Fi() {
  try {
    screen.orientation?.lock?.(`landscape`)?.catch?.(() => {});
  } catch {}
}
function Ii(e) {
  (document.addEventListener(`fullscreenchange`, e),
    document.addEventListener(`webkitfullscreenchange`, e));
}
