// tokyo/assets/tokyo-CqLdAwml 18 — test
// Lines 7929-8094 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function na(e) {
  return e.endsWith(`站`) ? e : e + `站`;
}
function ra(e) {
  return /station$/i.test(e) ? e : e + ` Station`;
}
var ia = typeof navigator < `u` ? navigator.userAgent : ``,
  aa = () =>
    /iPad|iPhone|iPod/.test(ia) ||
    (navigator.platform === `MacIntel` && (navigator.maxTouchPoints ?? 0) > 1);
function oa(e = ia) {
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
var sa = (e = ia) =>
  oa(e) === `safari` ? Number(/Version\/(\d+)/.exec(e)?.[1] ?? 0) : 0;
function ca() {
  try {
    let e = new URL(location.href);
    return (e.searchParams.set(`openExternalBrowser`, `1`), e.toString());
  } catch {
    return location.href;
  }
}
var la = null,
  ua = [];
typeof window < `u` &&
  (window.addEventListener(`beforeinstallprompt`, (e) => {
    (e.preventDefault(), (la = e));
    for (let e of ua) e();
  }),
  window.addEventListener(`appinstalled`, () => {
    la = null;
    for (let e of ua) e();
  }));
var da = () => !!la && !ma();
function fa(e) {
  ua.push(e);
}
async function pa() {
  let e = la;
  if (!e) return !1;
  la = null;
  try {
    await e.prompt();
    let t = await e.userChoice;
    for (let e of ua) e();
    return t.outcome === `accepted`;
  } catch {
    return !1;
  }
}
function ma() {
  try {
    return navigator.standalone
      ? !0
      : matchMedia(`(display-mode: standalone)`).matches ||
          matchMedia(`(display-mode: fullscreen)`).matches;
  } catch {
    return !1;
  }
}
function ha() {
  let e = document;
  return !!(e.fullscreenEnabled || e.webkitFullscreenEnabled);
}
function ga() {
  let e = document;
  return !!(e.fullscreenElement || e.webkitFullscreenElement);
}
async function _a() {
  let e = document.documentElement;
  try {
    if (e.requestFullscreen)
      await e.requestFullscreen({ navigationUI: `hide` });
    else if (e.webkitRequestFullscreen) await e.webkitRequestFullscreen();
    else return !1;
  } catch {
    return !1;
  }
  return (ya(), !0);
}
async function va() {
  let e = document;
  try {
    e.exitFullscreen
      ? await e.exitFullscreen()
      : await e.webkitExitFullscreen?.();
  } catch {}
}
function ya() {
  try {
    screen.orientation?.lock?.(`landscape`)?.catch?.(() => {});
  } catch {}
}
function ba(e) {
  (document.addEventListener(`fullscreenchange`, e),
    document.addEventListener(`webkitfullscreenchange`, e));
}
function xa() {
  return ma()
    ? ga() || !ha()
      ? `none`
      : `api`
    : ha()
      ? `api`
      : aa()
        ? `ios-guide`
        : `none`;
}
function Sa() {
  let e = (e) => e.preventDefault();
  (document.addEventListener(`gesturestart`, e, { passive: !1 }),
    document.addEventListener(`gesturechange`, e, { passive: !1 }),
    document.addEventListener(`dblclick`, e, { passive: !1 }));
  let t = 0;
  (document.addEventListener(
    `touchend`,
    (e) => {
      let n = e.timeStamp;
      (n - t < 300 &&
        !e.target?.closest?.(
          `button, input, [data-nav], .tc-btn, .tc-topbtn`,
        ) &&
        e.preventDefault(),
        (t = n));
    },
    { passive: !1 },
  ),
    document.addEventListener(
      `touchmove`,
      (e) => {
        e.touches.length > 1 && e.preventDefault();
      },
      { passive: !1 },
    ));
}
var Ca = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6.5A1.5 1.5 0 0 0 5 12.5v7A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H16"/></svg>`,
  wa = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>`,
  Ta = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/></svg>`,
  Ea = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>`,
  Da = `<svg viewBox="0 0 48 48"><defs><linearGradient id="igc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ac8fa"/><stop offset="1" stop-color="#1a73e8"/></linearGradient></defs><rect x="2" y="2" width="44" height="44" rx="11" fill="#fff"/><circle cx="24" cy="24" r="17" fill="url(#igc)"/><g stroke="#fff" stroke-width="1" opacity=".7"><path d="M24 8.5v3M24 36.5v3M8.5 24h3M36.5 24h3"/></g><path d="M31.5 16.5 26 26l-9.5 5.5L22 22z" fill="#fff"/><path d="M31.5 16.5 26 26 22 22z" fill="#ff3b30"/></svg>`,
  Oa = `<svg class="ig-arrow" viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h34M29 2l7 6-7 6"/></svg>`,
  ka = {
    safari: `Safari`,
    chrome: `Chrome`,
    edge: `Edge`,
    firefox: `Firefox`,
    line: `LINE`,
    facebook: `Facebook`,
    instagram: `Instagram`,
    webview: ``,
  };
