// tokyo/assets/tokyo-CqLdAwml 22 — addeventlistener
// Lines 9227-9576 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Ga(e) {
  return e === `en` || e === `ja` ? Wa[e] : null;
}
function Ka(e, t, n) {
  let r = B(`a`, `ti-threads ti-threads-x`, e);
  ((r.target = `_blank`),
    (r.rel = `noopener noreferrer`),
    (r.dataset.nav = `1`));
  let i = B(`span`, `ti-threads-icon ti-threads-mark`, r);
  ((i.innerHTML = Ua), i.setAttribute(`aria-hidden`, `true`));
  let a = B(`span`, `ti-threads-copy`, r),
    o = B(`span`, `ti-threads-badge`, a),
    s = B(`span`, `ti-threads-badge-long`, o),
    c = B(`span`, `ti-threads-badge-short`, o),
    l = B(`span`, `ti-threads-handle`, a),
    u = B(`span`, `ti-threads-cta`, r),
    d = B(`span`, `ti-threads-follow`, u),
    f = B(`span`, `ti-threads-follow-short`, u);
  r.addEventListener(`click`, (e) => e.stopPropagation());
  let p = () => {
    let e = Ga(t.lang);
    r.classList.toggle(`hidden`, !e);
    for (let t of n) t.classList.toggle(`hidden`, !!e);
    e &&
      ((r.href = `https://x.com/${e.handle}`),
      (r.title = e.label),
      r.setAttribute(`aria-label`, e.label),
      (s.textContent = e.badge),
      (c.textContent = e.tag),
      (l.textContent = `@${e.handle}`),
      (d.textContent = e.follow),
      (f.textContent = e.follow));
  };
  return (p(), t.onLang(p), r);
}
n.add({
  選擇城市: `都市を選ぶ`,
  "同一個錢包、角色與設定，每座城市都有自己的故事。": `財布もキャラも設定も共通。都市ごとに別のストーリー。`,
  你在這裡: `現在地`,
});
var qa = (e, t, n) => ({ zh: e, en: t, ja: n }),
  Ja = {
    title: qa(`選擇城市`, `Choose a city`, `都市を選ぶ`),
    sub: qa(
      `同一個錢包、角色與設定，每座城市都有自己的故事。`,
      `One wallet, one character, one set of settings. Every city has its own story.`,
      `財布もキャラも設定も共通。都市ごとに別のストーリー。`,
    ),
    here: qa(`你在這裡`, `You're here`, `現在地`),
    fresh: qa(`新城市`, `NEW`, `NEW`),
    close: qa(`關閉`, `Close`, `閉じる`),
  },
  Ya = (e) =>
    `${F[e].page}title/${e === `taichung` || e === `tainan` || e === `mumbai` ? `menu-phone.jpg` : e === `san-francisco` ? `sf-keyart-phone.webp` : `menu-phone.webp`}`,
  Xa = !1;
function Za() {
  if (Xa) return;
  Xa = !0;
  let e = document.createElement(`style`);
  ((e.id = `cty-css`),
    (e.textContent = `
.cty-wrap{position:absolute;inset:0;z-index:31;display:flex;align-items:center;justify-content:center;pointer-events:auto;
  background:rgba(5,5,9,.62);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;transition:opacity .22s}
.cty-wrap.show{opacity:1}
.cty-sheet{position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:min(58em,92vw);max-height:min(46em,88vh);
  padding:1.5em 1.6em 1.6em;background:#111117;color:var(--paper,#f4f1ea);border:1px solid rgba(244,241,234,.12);border-top:.22em solid var(--brand,#e0262f);
  box-shadow:0 2.4em 6em rgba(0,0,0,.65);transform:translateY(.8em) scale(.98);transition:transform .32s cubic-bezier(.2,.9,.25,1)}
.cty-wrap.show .cty-sheet{transform:none}
.cty-grip{display:none}
.cty-head{display:flex;align-items:flex-start;gap:1em;flex:none;margin-bottom:1.1em}
.cty-head-tx{flex:1;min-width:0}
.cty-title b{display:block;font-size:1.7em;font-weight:900;letter-spacing:.1em;line-height:1.15}
.cty-title small{display:block;margin-top:.2em;font:700 .74em/1.3 var(--tr-display,sans-serif);letter-spacing:.32em;text-transform:uppercase;opacity:.6}
.cty-sub{margin-top:.55em;font-size:.88em;line-height:1.5;color:rgba(244,241,234,.72)}
.cty-x{flex:none;display:grid;place-items:center;width:2.6em;height:2.6em;padding:0;border:1px solid rgba(244,241,234,.22);border-radius:2px;
  background:transparent;color:inherit;cursor:pointer;outline:none;transition:background .15s,color .15s}
.cty-x svg{width:1.2em;height:1.2em}
.cty-x:hover,.cty-x.focus{background:var(--paper,#f4f1ea);color:var(--ink,#0b0b10)}
.cty-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(11.5em,1fr));gap:.8em;min-height:0;overflow-y:auto;overscroll-behavior:contain;
  -webkit-overflow-scrolling:touch;padding:.25em;margin:-.25em;scrollbar-width:thin}
.cty-card{position:relative;display:flex;flex-direction:column;justify-content:flex-end;min-height:15.5em;padding:0;overflow:hidden;text-align:left;
  border:0;border-radius:2px;background:#1b1b23;color:#fff;font:inherit;cursor:pointer;outline:none;isolation:isolate;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);transition:transform .18s,box-shadow .18s}
.cty-art{position:absolute;inset:0;z-index:-1;background:#22222c var(--art) center 30%/cover no-repeat;transition:transform .5s cubic-bezier(.2,.9,.25,1)}
.cty-art::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,8,12,0) 25%,rgba(8,8,12,.55) 55%,rgba(8,8,12,.94) 100%)}
.cty-tx{display:flex;flex-direction:column;gap:.2em;padding:1em 1.05em 1.05em}
.cty-code{align-self:flex-start;padding:.12em .45em;border:1px solid rgba(255,255,255,.5);border-radius:2px;font:800 .66em/1.2 var(--tr-display,sans-serif);letter-spacing:.16em}
.cty-name{margin-top:.2em}
.cty-name b{display:block;font-size:1.65em;font-weight:900;letter-spacing:.08em;line-height:1.1}
.cty-name small{display:block;font:700 .7em/1.4 var(--tr-display,sans-serif);letter-spacing:.3em;text-transform:uppercase;opacity:.72}
.cty-game{font-size:.82em;font-weight:700;color:rgba(255,255,255,.82)}
.cty-meta{font-size:.78em;font-weight:600;color:#ffe2a0}
.cty-badge{position:absolute;top:.75em;right:.75em;padding:.28em .6em;background:var(--brand,#e0262f);color:#fff;font-size:.72em;font-weight:800;letter-spacing:.1em}
.cty-badge.cty-new{left:.75em;right:auto;top:.75em;transform:none;background:#f5b400;color:#14110a;box-shadow:0 .15em .6em rgba(0,0,0,.35)}
.cty-go{position:absolute;top:.7em;right:.7em;display:grid;place-items:center;width:2.1em;height:2.1em;border-radius:50%;background:rgba(10,10,14,.55);opacity:.85;transition:background .18s,color .18s}
.cty-go svg{width:1.1em;height:1.1em}
.cty-card:hover .cty-art,.cty-card.focus .cty-art{transform:scale(1.05)}
.cty-card.focus{outline:.16em solid var(--paper,#f4f1ea);outline-offset:-.16em;box-shadow:0 .8em 2em rgba(0,0,0,.45);transform:translateY(-.15em)}
.cty-card.focus .cty-go{background:var(--paper,#f4f1ea);color:var(--brand,#e0262f);opacity:1}
.cty-card.here{cursor:default}
.cty-card.here.playable{cursor:pointer}
.cty-card.here .cty-art{filter:saturate(.75)}
.cty-card:disabled{opacity:.6}
/* phone portrait: a bottom sheet, a row per city */
@media (max-width:640px) and (orientation:portrait){
  .cty-wrap{align-items:flex-end}
  .cty-sheet{width:100%;max-height:84vh;max-height:84dvh;padding:.5em 1em calc(1em + env(safe-area-inset-bottom));border:0;border-top:.2em solid var(--brand,#e0262f);
    border-radius:1em 1em 0 0;transform:translateY(100%)}
  .cty-grip{display:block;flex:none;width:100%;height:1.6em;margin:0 0 .2em;touch-action:none}
  .cty-grip::before{content:'';display:block;width:2.8em;height:.3em;margin:.55em auto 0;border-radius:1em;background:rgba(244,241,234,.3)}
  .cty-head{margin-bottom:.8em;touch-action:none}
  .cty-title b{font-size:1.4em}
  .cty-sub{font-size:.8em;margin-top:.35em}
  .cty-list{grid-template-columns:1fr;gap:.55em;scroll-snap-type:y proximity}
  .cty-card{flex-direction:row;align-items:center;justify-content:flex-start;min-height:6.4em;scroll-snap-align:start}
  .cty-art{left:auto;width:66%;background-position:center;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 60%);mask-image:linear-gradient(90deg,transparent 0,#000 60%)}
  .cty-art::after{background:linear-gradient(90deg,rgba(27,27,35,.6),rgba(27,27,35,0) 70%)}
  .cty-tx{flex:1;padding:.75em 3.4em .75em 1em}
  .cty-name b{font-size:1.35em}
  .cty-go,.cty-badge{top:50%;transform:translateY(-50%)}
  .cty-badge.cty-new{top:50%;left:auto;right:3.6em;transform:translateY(-50%)}
  .cty-card.focus{transform:none}
}
/* phone landscape / short screens: the cards side by side, swiped */
@media (max-height:540px){
  .cty-wrap{align-items:flex-end}
  .cty-sheet{width:100%;max-height:none;height:calc(100vh - .8em);height:calc(100dvh - .8em);
    padding:.75em calc(1em + env(safe-area-inset-right)) calc(.75em + env(safe-area-inset-bottom)) calc(1em + env(safe-area-inset-left));
    border:0;border-top:.2em solid var(--brand,#e0262f);border-radius:.8em .8em 0 0;transform:translateY(100%)}
  .cty-head{margin-bottom:.6em;align-items:center}
  .cty-title b{display:inline;font-size:1.25em}
  .cty-title small{display:inline;margin-left:.8em}
  .cty-sub{display:none}
  .cty-x{width:2.3em;height:2.3em}
  .cty-list{display:flex;flex:1;gap:.65em;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scroll-padding:0 .25em;
    -webkit-mask-image:linear-gradient(90deg,#000 0,#000 calc(100% - 2.2em),transparent);mask-image:linear-gradient(90deg,#000 0,#000 calc(100% - 2.2em),transparent)}
  .cty-list.at-end{-webkit-mask-image:none;mask-image:none}
  .cty-card{flex:0 0 clamp(11em,27vw,15em);min-height:0;scroll-snap-align:start}
  .cty-card:last-child{margin-right:1.6em}
  .cty-tx{padding:.75em .85em .8em}
  .cty-name b{font-size:1.35em}
  .cty-card.focus{transform:none}
}
@media (prefers-reduced-motion:reduce){.cty-wrap,.cty-sheet,.cty-art,.cty-card{transition:none}}
`),
    document.head.appendChild(e));
}
var Qa = null;
function $a(e, t, n, r, i) {
  if (Qa) return;
  Za();
  let a = B(`div`, `cty-wrap`, e.menuLayer),
    o = B(`div`, `cty-sheet`, a);
  (o.setAttribute(`role`, `dialog`), o.setAttribute(`aria-modal`, `true`));
  let s = B(`div`, `cty-grip`, o),
    c = B(`div`, `cty-head`, o),
    l = B(`div`, `cty-head-tx`, c),
    u = e.dual(B(`div`, `cty-title`, l), Ja.title);
  ((u.id = `cty-title`),
    o.setAttribute(`aria-labelledby`, u.id),
    e.bind(B(`div`, `cty-sub`, l), Ja.sub));
  let d = B(`button`, `cty-x`, c);
  ((d.type = `button`),
    (d.dataset.nav = `1`),
    (d.innerHTML = z.close),
    e.bindTitle(d, Ja.close));
  let f = B(`div`, `cty-list`, o),
    p = null,
    m = !1,
    h = (e) => {
      e.key === `Escape` && g();
    },
    g = () => {
      Qa &&
        ((Qa = null),
        p && t ? t.pop(p) : window.removeEventListener(`keydown`, h, !0),
        w(),
        m || e.sfx(`ui_back`),
        a.classList.remove(`show`),
        setTimeout(() => a.remove(), 340));
    };
  ((Qa = g),
    d.addEventListener(`click`, (e) => {
      (e.stopPropagation(), g());
    }),
    a.addEventListener(`click`, (e) => {
      e.target === a && g();
    }));
  let _ = [...n].sort(
      (e, t) =>
        Number(t.id === `tainan`) - Number(e.id === `tainan`) ||
        Number(!!t.featured) - Number(!!e.featured) ||
        Number(t.here) - Number(e.here),
    ),
    v = null;
  for (let t of _) {
    let n = F[t.id],
      a = B(
        `button`,
        `cty-card${t.here ? ` here` : ``}${t.here && i ? ` playable` : ``}`,
        f,
      );
    ((a.type = `button`),
      (a.dataset.nav = `1`),
      (a.dataset.city = t.id),
      B(`span`, `cty-art`, a).style.setProperty(`--art`, `url("${Ya(t.id)}")`));
    let o = B(`span`, `cty-tx`, a);
    (B(`span`, `cty-code`, o, n.airport.code),
      e.dual(B(`span`, `cty-name`, o), n.name),
      e.bind(
        B(`span`, `cty-game`, o),
        qa(`《${n.game.zh}》`, n.game.en, `『${n.game.zh}』`),
      ),
      e.bind(B(`span`, `cty-meta`, o), t.meta),
      t.id === `tainan` &&
        !t.here &&
        e.bind(B(`span`, `cty-badge cty-new`, a), Ja.fresh),
      t.here
        ? e.bind(B(`span`, `cty-badge`, a), Ja.here)
        : (B(`span`, `cty-go`, a).innerHTML = z.chevronR),
      (i || !t.here) && !v && (v = a),
      a.addEventListener(`mouseenter`, () => e.sfx(`ui_hover`, 0.5)),
      a.addEventListener(`click`, (n) => {
        if ((n.stopPropagation(), t.here)) {
          (i && ((m = !0), e.sfx(`ui_confirm`)), g(), i?.());
          return;
        }
        (e.sfx(`ui_confirm`), (m = !0));
        for (let e of f.querySelectorAll(`button`)) e.disabled = !0;
        r(t.id);
      }));
  }
  let y = () =>
    f.classList.toggle(
      `at-end`,
      f.scrollLeft + f.clientWidth >= f.scrollWidth - 4,
    );
  f.addEventListener(`scroll`, y, { passive: !0 });
  let b = -1,
    x = (e) => {
      o.offsetTop + o.offsetHeight < a.clientHeight - 2 ||
        !matchMedia(`(max-width:640px) and (orientation:portrait)`).matches ||
        ((b = e.clientY), (o.style.transition = `none`));
    },
    S = (e) => {
      b < 0 ||
        (o.style.transform = `translateY(${Math.max(0, e.clientY - b)}px)`);
    },
    C = (e) => {
      if (b < 0) return;
      let t = e.clientY - b;
      ((b = -1),
        (o.style.transition = ``),
        (o.style.transform = ``),
        t > 70 && g());
    };
  for (let e of [s, c]) e.addEventListener(`pointerdown`, x);
  (window.addEventListener(`pointermove`, S, { passive: !0 }),
    window.addEventListener(`pointerup`, C),
    window.addEventListener(`pointercancel`, C));
  let w = () => {
    (window.removeEventListener(`pointermove`, S),
      window.removeEventListener(`pointerup`, C),
      window.removeEventListener(`pointercancel`, C));
  };
  (t
    ? ((p = { root: o, onBack: g, initial: () => v ?? d }), t.push(p))
    : window.addEventListener(`keydown`, h, !0),
    requestAnimationFrame(() => {
      (a.classList.add(`show`), y());
    }));
}
n.add({ 繼續在這裡玩: `このまま遊ぶ` });
var eo = (e, t, n) => ({ zh: e, en: t, ja: n });
function to(e) {
  try {
    let t = ee(F[e].saveKey);
    if (!t) return null;
    let n = t;
    return {
      missions: Array.isArray(n.completedMissions)
        ? n.completedMissions.length
        : 0,
    };
  } catch {
    return null;
  }
}
function no(e) {
  return Ne().stamps[e] !== void 0 || to(e) !== null;
}
function ro(e, t) {
  return t === `seoul` || t === `tainan`
    ? !0
    : e === `tainan`
      ? t === `kaohsiung` || t === `tokyo` || t === `london`
        ? !0
        : t === `san-francisco`
          ? !1
          : t === `taichung` ||
            t === `mumbai` ||
            t === `taipei` ||
            t === `hong-kong`
      : t === `mumbai`
        ? !0
        : e === `mumbai` || e === `seoul`
          ? t === `kaohsiung` || t === `tokyo` || t === `london`
            ? !0
            : t === `san-francisco`
              ? !1
              : t === `taichung` || t === `taipei` || t === `hong-kong`
          : t === `taichung`
            ? !0
            : e === `taichung`
              ? t === `kaohsiung` || t === `tokyo` || t === `london`
                ? !0
                : t === `san-francisco`
                  ? !1
                  : t === `taipei` || t === `hong-kong`
              : t === `london`
                ? !0
                : e === `london`
                  ? t === `kaohsiung` || t === `tokyo`
                    ? !0
                    : t === `san-francisco`
                      ? !1
                      : t === `taipei` || t === `hong-kong`
                  : e === `tokyo` || t === `tokyo`
                    ? !0
                    : t === `kaohsiung`
                      ? e !== `taipei` && !0
                      : t === `tokyo` || t === `taipei` || t === `hong-kong`;
}
function io(e, t) {
  let n = ze(t);
  if (t === e)
    return n === null
      ? eo(`繼續在這裡玩`, `Keep playing here`, `このまま遊ぶ`)
      : I(n, F[t].currency);
  let r = n === null ? `` : `${I(n, F[t].currency)} · `,
    i = to(t);
  return i
    ? eo(
        `${r}任務 ${i.missions}`,
        `${r}${i.missions} missions`,
        `${r}ミッション ${i.missions}`,
      )
    : eo(`${r}全新城市`, `${r}A new city`, `${r}新しい都市`);
}
var ao = `tgta-city-switch`;
