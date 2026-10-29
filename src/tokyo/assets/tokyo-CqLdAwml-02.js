// tokyo/assets/tokyo-CqLdAwml 02 — msg
// Lines 341-630 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function qt(e, t, n = {}) {
  let r = e.ctx,
    i = r.state,
    a = B(`div`, `panel settings`, t);
  de(a, r);
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
      { r, ctl: i } = Bt(e, a, t, `action`);
    (r.classList.add(`srow-map`),
      (r.tabIndex = 0),
      r.setAttribute(`role`, `button`),
      e.bindTitle(r, t),
      (B(`span`, `srow-act`, i).innerHTML = z.map),
      r.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.openMap?.());
      }));
  }
  (l(G.quality),
    c(() =>
      Ht(
        e,
        a,
        G.quality,
        [
          { value: `auto`, msg: G.qAuto },
          { value: `low`, msg: G.qLow },
          { value: `medium`, msg: G.qMedium },
          { value: `high`, msg: G.qHigh },
          { value: `ultra`, msg: G.qUltra },
        ],
        () => i.settings.quality,
        (t) => {
          (o(`quality`, t), Wt(e, t));
        },
      ),
    ),
    c(() =>
      Ht(
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
      Ut(
        e,
        a,
        G.showFps,
        () => i.settings.showFps,
        (e) => o(`showFps`, e),
      ),
    ),
    l({ zh: `聲音`, en: `Audio` }));
  let u = (t) => (n) => {
    (o(t, n), Kt(e));
  };
  (c(() =>
    Vt(
      e,
      a,
      G.master,
      0,
      1,
      0.05,
      () => i.settings.masterVolume,
      u(`masterVolume`),
    ),
  ),
    c(() =>
      Vt(
        e,
        a,
        G.music,
        0,
        1,
        0.05,
        () => i.settings.musicVolume,
        u(`musicVolume`),
      ),
    ),
    c(() =>
      Vt(e, a, G.sfx, 0, 1, 0.05, () => i.settings.sfxVolume, u(`sfxVolume`)),
    ),
    c(() =>
      Vt(
        e,
        a,
        { zh: `介面大小`, en: `HUD Size` },
        0.8,
        1.3,
        0.05,
        () => K().uiScale ?? jt(),
        (t) => {
          (q({ uiScale: t }), Gt(t), e.onUiScale?.());
        },
        (e) => `${Math.round(e * 100)}%`,
      ),
    ),
    l(G.controls),
    c(() =>
      Vt(
        e,
        a,
        G.sensitivity,
        0.2,
        3,
        0.1,
        () => i.settings.sensitivity,
        (e) => o(`sensitivity`, e),
        (e) => `${e.toFixed(1)}×`,
      ),
    ),
    c(() =>
      Ut(
        e,
        a,
        G.invertY,
        () => i.settings.invertY,
        (e) => o(`invertY`, e),
      ),
    ),
    c(() =>
      Ut(
        e,
        a,
        W.hints,
        () => !K().hintsOff,
        (t) => {
          (q({ hintsOff: !t }), e.onHints?.(t ? `on` : `off`));
        },
      ),
    ));
  {
    let { r: t, ctl: n } = Bt(e, a, W.hintsReset, `action`),
      r = B(`span`, `srow-act`, n);
    ((r.innerHTML = z.reload),
      t.addEventListener(`click`, (t) => {
        (t.stopPropagation(),
          q({ hintsSeen: [], hintsOff: !1 }),
          e.onHints?.(`reset`),
          e.sfx(`ui_confirm`),
          s.forEach((e) => e.render()));
        try {
          e.ctx.events.emit(`notify`, {
            text: W.hintsResetDone,
            kind: `good`,
            duration: 2.5,
          });
        } catch {}
      }));
  }
  if (
    (l(G.language),
    c(() =>
      Ht(
        e,
        a,
        G.language,
        [
          {
            value: `zh`,
            msg: {
              zh: `繁體中文`,
              en: `Chinese (Traditional)`,
              ja: `繁體中文`,
            },
          },
          { value: `ja`, msg: { zh: `日本語`, en: `Japanese`, ja: `日本語` } },
          { value: `en`, msg: { zh: `English`, en: `English`, ja: `English` } },
        ],
        () => i.settings.lang,
        (e) => o(`lang`, e),
      ),
    ),
    n.reset)
  ) {
    l({ zh: `資料`, en: `Data` });
    let { r: t, ctl: r } = Bt(e, a, G.resetSave, `action`);
    t.classList.add(`srow-danger`);
    let i = B(`span`, `srow-act`, r);
    ((i.innerHTML = z.close),
      t.addEventListener(`click`, (t) => {
        (t.stopPropagation(), e.sfx(`ui_click`), n.reset?.());
      }));
  }
  let d = B(`div`, `panel-hint`, a);
  return (
    e.bind(d, G.qualityHint),
    { el: a, refresh: () => s.forEach((e) => e.render()) }
  );
}
function Jt(e, t, n, r, i, a = !0) {
  let o = B(`div`, `dlg-wrap`, e.menuLayer),
    s = B(`div`, `dlg`, o);
  e.bind(B(`div`, `dlg-text`, s), n);
  let c = B(`div`, `dlg-btns`, s),
    l,
    u = () => {
      (t.pop(l), o.classList.remove(`show`), setTimeout(() => o.remove(), 250));
    };
  (J(
    e,
    c,
    G.cancel,
    () => {
      (e.sfx(`ui_back`), u());
    },
    { cls: `dlg-btn`, dual: !1 },
  ),
    J(
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
var Yt = { top: [], play: [] };
function Xt(e, t, n) {
  let r = Yt[e],
    i = n ? r.findIndex((e) => e.key === n) : -1;
  i >= 0 ? (r[i] = { fn: t, key: n }) : r.push({ fn: t, key: n });
}
function Zt(e, t, n, r, i) {
  for (let { fn: a } of Yt[e])
    try {
      a(t, n, r, i);
    } catch (e) {
      console.warn(`[title] hook`, e);
    }
}
var Qt = `'Avenir Next Condensed','Bahnschrift','DIN Condensed','Roboto Condensed','Arial Narrow',sans-serif`;
function $t(e, t, n, r) {
  let i = `lengthAdjust="spacingAndGlyphs"`;
  return `<svg class="${e}" viewBox="0 0 492 214" role="img" aria-label="${t} Rush — Full throttle through ${t}">
  <g font-family="${Qt}">
    <rect x="4" y="4" width="104" height="206" rx="3" fill="#d81f2a" stroke="#09090c" stroke-width="6"/>
    <rect x="13.5" y="13.5" width="85" height="187" fill="none" stroke="#fff" stroke-width="2.4" opacity=".92"/>
    <text x="56" y="94" font-size="66" font-weight="900" fill="#fff" text-anchor="middle" textLength="74" ${i}>${n}</text>
    <text x="56" y="180" font-size="66" font-weight="900" fill="#fff" text-anchor="middle" textLength="74" ${i}>${r}</text>
    <g font-size="150" font-weight="900" stroke="#09090c" stroke-width="5" paint-order="stroke" transform="skewX(-6)">
      <text x="152" y="141" fill="#d81f2a" textLength="318" ${i}>RUSH</text>
      <text x="146" y="135" fill="#fff" textLength="318" ${i}>RUSH</text>
    </g>
    <rect x="126" y="160" width="232" height="46" fill="#09090c"/>
    <text x="142" y="192" font-size="25" font-weight="800" fill="#fff" textLength="200" ${i}>FULL THROTTLE</text>
    <text x="370" y="179" font-size="13" font-weight="800" fill="#ff4b52" textLength="54" ${i}>THROUGH</text>
    <text class="lg-tag" x="370" y="197" font-size="13" font-weight="800" fill="#fff" textLength="54" ${i}>${t.toUpperCase()}</text>
  </g>
</svg>`;
}
function en(e, t) {
  let n = `lengthAdjust="spacingAndGlyphs"`;
  return `<svg class="${e}" viewBox="0 0 206 64" role="img" aria-label="${t} Rush">
  <rect x="2" y="2" width="84" height="60" rx="2" fill="#d81f2a" stroke="#09090c" stroke-width="3"/>
  <rect x="7.5" y="7.5" width="73" height="49" fill="none" stroke="#fff" stroke-width="1.6" opacity=".9"/>
  <text x="44" y="42" font-family="${Qt}" font-size="26" font-weight="900" fill="#fff" text-anchor="middle" textLength="62" ${n}>${t.toUpperCase()}</text>
  <text x="98" y="48" font-family="${Qt}" font-size="46" font-weight="900" fill="#fff" stroke="#09090c" stroke-width="2" paint-order="stroke" textLength="100" ${n}>RUSH</text>
</svg>`;
}
