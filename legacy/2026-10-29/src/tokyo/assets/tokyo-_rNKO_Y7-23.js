// tokyo/assets/tokyo-_rNKO_Y7 23 — addeventlistener
// Lines 9375-9716 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
n.add({
  選擇城市: `都市を選ぶ`,
  "同一個錢包、角色與設定，每座城市都有自己的故事。": `財布もキャラも設定も共通。都市ごとに別のストーリー。`,
  你在這裡: `現在地`,
});
var ha = (e, t, n) => ({ zh: e, en: t, ja: n }),
  ga = {
    title: ha(`選擇城市`, `Choose a city`, `都市を選ぶ`),
    sub: ha(
      `同一個錢包、角色與設定，每座城市都有自己的故事。`,
      `One wallet, one character, one set of settings. Every city has its own story.`,
      `財布もキャラも設定も共通。都市ごとに別のストーリー。`,
    ),
    here: ha(`你在這裡`, `You're here`, `現在地`),
    close: ha(`關閉`, `Close`, `閉じる`),
  },
  _a = (e) =>
    `${N[e].page}title/${e === `san-francisco` ? `sf-keyart-phone.webp` : `menu-phone.webp`}`,
  va = !1;
function ya() {
  if (va) return;
  va = !0;
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
.cty-go{position:absolute;top:.7em;right:.7em;display:grid;place-items:center;width:2.1em;height:2.1em;border-radius:50%;background:rgba(10,10,14,.55);opacity:.85;transition:background .18s,color .18s}
.cty-go svg{width:1.1em;height:1.1em}
.cty-card:hover .cty-art,.cty-card.focus .cty-art{transform:scale(1.05)}
.cty-card.focus{outline:.16em solid var(--paper,#f4f1ea);outline-offset:-.16em;box-shadow:0 .8em 2em rgba(0,0,0,.45);transform:translateY(-.15em)}
.cty-card.focus .cty-go{background:var(--paper,#f4f1ea);color:var(--brand,#e0262f);opacity:1}
.cty-card.here{cursor:default}
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
var ba = null;
function xa(e, t, n, r) {
  if (ba) return;
  ya();
  let i = V(`div`, `cty-wrap`, e.menuLayer),
    a = V(`div`, `cty-sheet`, i);
  (a.setAttribute(`role`, `dialog`), a.setAttribute(`aria-modal`, `true`));
  let o = V(`div`, `cty-grip`, a),
    s = V(`div`, `cty-head`, a),
    c = V(`div`, `cty-head-tx`, s),
    l = e.dual(V(`div`, `cty-title`, c), ga.title);
  ((l.id = `cty-title`),
    a.setAttribute(`aria-labelledby`, l.id),
    e.bind(V(`div`, `cty-sub`, c), ga.sub));
  let u = V(`button`, `cty-x`, s);
  ((u.type = `button`),
    (u.dataset.nav = `1`),
    (u.innerHTML = B.close),
    e.bindTitle(u, ga.close));
  let d = V(`div`, `cty-list`, a),
    f = null,
    p = !1,
    m = (e) => {
      e.key === `Escape` && h();
    },
    h = () => {
      ba &&
        ((ba = null),
        f && t ? t.pop(f) : window.removeEventListener(`keydown`, m, !0),
        C(),
        p || e.sfx(`ui_back`),
        i.classList.remove(`show`),
        setTimeout(() => i.remove(), 340));
    };
  ((ba = h),
    u.addEventListener(`click`, (e) => {
      (e.stopPropagation(), h());
    }),
    i.addEventListener(`click`, (e) => {
      e.target === i && h();
    }));
  let g = [...n].sort((e, t) => Number(t.here) - Number(e.here)),
    _ = null;
  for (let t of g) {
    let n = N[t.id],
      i = V(`button`, `cty-card${t.here ? ` here` : ``}`, d);
    ((i.type = `button`),
      (i.dataset.nav = `1`),
      (i.dataset.city = t.id),
      V(`span`, `cty-art`, i).style.setProperty(`--art`, `url("${_a(t.id)}")`));
    let a = V(`span`, `cty-tx`, i);
    (V(`span`, `cty-code`, a, n.airport.code),
      e.dual(V(`span`, `cty-name`, a), n.name),
      e.bind(
        V(`span`, `cty-game`, a),
        ha(`《${n.game.zh}》`, n.game.en, `『${n.game.zh}』`),
      ),
      e.bind(V(`span`, `cty-meta`, a), t.meta),
      t.here
        ? e.bind(V(`span`, `cty-badge`, i), ga.here)
        : (V(`span`, `cty-go`, i).innerHTML = B.chevronR),
      !t.here && !_ && (_ = i),
      i.addEventListener(`mouseenter`, () => e.sfx(`ui_hover`, 0.5)),
      i.addEventListener(`click`, (n) => {
        if ((n.stopPropagation(), t.here)) {
          h();
          return;
        }
        (e.sfx(`ui_confirm`), (p = !0));
        for (let e of d.querySelectorAll(`button`)) e.disabled = !0;
        r(t.id);
      }));
  }
  let v = () =>
    d.classList.toggle(
      `at-end`,
      d.scrollLeft + d.clientWidth >= d.scrollWidth - 4,
    );
  d.addEventListener(`scroll`, v, { passive: !0 });
  let y = -1,
    b = (e) => {
      a.offsetTop + a.offsetHeight < i.clientHeight - 2 ||
        !matchMedia(`(max-width:640px) and (orientation:portrait)`).matches ||
        ((y = e.clientY), (a.style.transition = `none`));
    },
    x = (e) => {
      y < 0 ||
        (a.style.transform = `translateY(${Math.max(0, e.clientY - y)}px)`);
    },
    S = (e) => {
      if (y < 0) return;
      let t = e.clientY - y;
      ((y = -1),
        (a.style.transition = ``),
        (a.style.transform = ``),
        t > 70 && h());
    };
  for (let e of [o, s]) e.addEventListener(`pointerdown`, b);
  (window.addEventListener(`pointermove`, x, { passive: !0 }),
    window.addEventListener(`pointerup`, S),
    window.addEventListener(`pointercancel`, S));
  let C = () => {
    (window.removeEventListener(`pointermove`, x),
      window.removeEventListener(`pointerup`, S),
      window.removeEventListener(`pointercancel`, S));
  };
  (t
    ? ((f = { root: a, onBack: h, initial: () => _ ?? u }), t.push(f))
    : window.addEventListener(`keydown`, m, !0),
    requestAnimationFrame(() => {
      (i.classList.add(`show`), v());
    }));
}
n.add({ 繼續在這裡玩: `このまま遊ぶ`, 切換城市: `都市を切り替え` });
var Sa = !1;
function Ca() {
  if (Sa) return;
  Sa = !0;
  let e = document.createElement(`style`);
  ((e.id = `trv-title-css`),
    (e.textContent = `
.trv-card{position:relative;margin:0 0 .7em;padding:.75em 1em .8em;width:min(21em,100%);box-sizing:border-box;background:rgba(10,11,16,.78);border-left:.28em solid #c8102e;
  -webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);color:#f4f1ea;animation:trv-in .6s cubic-bezier(.2,.8,.2,1) both}
@keyframes trv-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.trv-top{display:flex;align-items:center;gap:.6em;font:800 .72em/1.2 var(--tr-display,sans-serif);letter-spacing:.2em;text-transform:uppercase;color:#ff9aa0}
.trv-top b{color:#fff;letter-spacing:.12em;padding:.1em .45em;border:1px solid rgba(255,255,255,.45);border-radius:2px}
.trv-top span{margin-left:auto;color:#7ff0a8}
.trv-city{margin-top:.25em;font-size:2.1em;font-weight:900;letter-spacing:.08em;line-height:1.1}
.trv-city small{display:block;font:700 .34em/1.4 var(--tr-display,sans-serif);letter-spacing:.32em;opacity:.7}
.trv-line{margin-top:.45em;font-size:.86em;line-height:1.5;color:#e6e1d6}
.trv-line b{color:#ffe2a0;font-weight:800}
.trv-stamp{position:absolute;right:.6em;top:2.3em;width:5.4em;height:5.4em;border:2.5px solid rgba(255,96,104,.88);border-radius:50%;color:rgba(255,96,104,.92);
  display:grid;place-items:center;text-align:center;font:900 .62em/1.15 var(--tr-display,sans-serif);letter-spacing:.06em;transform:rotate(-14deg);
  box-shadow:inset 0 0 0 3px rgba(255,96,104,.25);animation:trv-stamp .45s cubic-bezier(.3,1.6,.5,1) .5s both}
.trv-stamp i{display:block;font-style:normal;font-size:1.5em;letter-spacing:.12em}
@keyframes trv-stamp{from{opacity:0;transform:rotate(-14deg) scale(1.9)}to{opacity:1;transform:rotate(-14deg) scale(1)}}
@media (max-height:520px){.trv-card{padding:.5em .8em .55em}.trv-city{font-size:1.6em}.trv-stamp{display:none}}
/* phones (the title's compact layout: logo and menu side by side, between the letterbox bars) */
body.tr-compact .trv-card{margin:0 0 .4em;padding:.4em .7em .45em;font-size:.84em}
body.tr-compact .trv-city{font-size:1.35em;margin-top:.1em}
body.tr-compact .trv-city small,body.tr-compact .trv-stamp{display:none}
body.tr-compact .trv-line{margin-top:.2em;font-size:.84em;line-height:1.35}
`),
    document.head.appendChild(e));
}
function wa(e) {
  try {
    let t = y(N[e].saveKey);
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
var Ta = !1;
function Ea(e, t, r) {
  Ca();
  let i = () => e.lang,
    a = Ke().arrival;
  if (a && !Ta) {
    let o = a.ticket,
      s = N[z],
      c = N[o.from],
      l = V(`div`, `trv-card trv-arr`, t),
      u = () => {
        let t = i() !== `en`,
          r = new Date(),
          u = `${r.getFullYear()}.${String(r.getMonth() + 1).padStart(2, `0`)}.${String(r.getDate()).padStart(2, `0`)}`,
          d = Ne(z);
        ((o.credit > 0
          ? t
            ? n.on
              ? n.t(
                  `已兌換 <b>${P(o.cash, c.currency)} → ${P(o.credit, s.currency)}</b> · `,
                  `両替済み <b>${P(o.cash, c.currency)} → ${P(o.credit, s.currency)}</b> · `,
                )
              : `已兌換 <b>${P(o.cash, c.currency)} → ${P(o.credit, s.currency)}</b> · `
            : `Exchanged <b>${P(o.cash, c.currency)} → ${P(o.credit, s.currency)}</b> · `
          : ``) +
          (d === null
            ? ``
            : t
              ? `錢包 <b class="trv-wallet">${P(d, s.currency)}</b>`
              : `Wallet <b class="trv-wallet">${P(d, s.currency)}</b>`),
          a.first && `${t ? We.zh : We.en}`,
          (l.innerHTML = Pa(e, o.flight, s, a.hour, d, a.first, u)));
      };
    return (
      u(),
      e.onLang(u),
      Z(
        e,
        t,
        o.mode === `hsr`
          ? {
              zh: n.on
                ? n.t(
                    `出站 · 開始${s.name.zh}`,
                    `改札を出る · ${n.jz(s.name.zh)}へ`,
                  )
                : `出站 · 開始${s.name.zh}`,
              en: `Into ${s.name.en}`,
            }
          : {
              zh: n.on
                ? n.t(
                    `入境${s.name.zh} · 開始`,
                    `${n.jz(s.name.zh)}に入国 · スタート`,
                  )
                : `入境${s.name.zh} · 開始`,
              en: `Enter ${s.name.en}`,
            },
        () => {
          ((Ta = !0), r());
        },
        { cls: `ti-btn primary`, icon: `play` },
      ),
      `arrival`
    );
  }
  return null;
}
var Da = !1;
function Oa(e, t, n) {
  return ((Da = !1), Fa(e, t, n));
}
function ka(e) {
  return !0;
}
