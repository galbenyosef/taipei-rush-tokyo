// tokyo/assets/tokyo-CqLdAwml 23 — lobby
// Lines 9577-9822 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function oo(e, t, n = {}) {
  let r = new URL(location.href);
  for (let e of [
    `spawn`,
    `cam`,
    `autoplay`,
    `menu`,
    `hour`,
    `r`,
    `region`,
    `geo`,
  ])
    r.searchParams.delete(e);
  r.searchParams.set(`region`, t);
  for (let [e, t] of Object.entries(n)) r.searchParams.set(e, t);
  try {
    sessionStorage.setItem(ao, `${t}|${Date.now()}`);
  } catch {}
  (ne(), (location.href = F[t].page + `?` + r.searchParams.toString()));
}
var so = [`jakarta-rush-save-v1`],
  co;
function lo() {
  return co === void 0 ? (co = uo()) : co;
}
function uo() {
  try {
    if (location.pathname !== `/`) return null;
    let e = new URLSearchParams(location.search).get(`geo`);
    if (e === `off`) return null;
    let t = e ?? m();
    if (!t || t === `taipei` || !fo(t)) return null;
    if (e) return t;
    let n = (
      navigator.languages?.[0] ||
      navigator.language ||
      ``
    ).toLowerCase();
    return /^zh[-_](tw|hant[-_]tw)\b/.test(n) || po() ? null : t;
  } catch {
    return null;
  }
}
function fo(e) {
  return (
    e === `jakarta` ||
    (Object.prototype.hasOwnProperty.call(F, e) && ro(`taipei`, e))
  );
}
function po() {
  for (let e of Object.keys(F)) if (no(e)) return !0;
  try {
    return so.some((e) => localStorage.getItem(e) !== null);
  } catch {
    return !1;
  }
}
n.add({ 切換城市: `都市を切り替え` });
var mo = !1;
function ho() {
  if (mo) return;
  mo = !0;
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
var go = !1;
function _o(e, t, r) {
  ho();
  let i = () => e.lang,
    a = Ze().arrival;
  if (a && !go) {
    let o = a.ticket,
      s = F[R],
      c = F[o.from],
      l = B(`div`, `trv-card trv-arr`, t),
      u = () => {
        let t = i() !== `en`,
          r = new Date(),
          u = `${r.getFullYear()}.${String(r.getMonth() + 1).padStart(2, `0`)}.${String(r.getDate()).padStart(2, `0`)}`,
          d = ze(R);
        ((o.credit > 0
          ? t
            ? n.on
              ? n.t(
                  `已兌換 <b>${I(o.cash, c.currency)} → ${I(o.credit, s.currency)}</b> · `,
                  `両替済み <b>${I(o.cash, c.currency)} → ${I(o.credit, s.currency)}</b> · `,
                )
              : `已兌換 <b>${I(o.cash, c.currency)} → ${I(o.credit, s.currency)}</b> · `
            : `Exchanged <b>${I(o.cash, c.currency)} → ${I(o.credit, s.currency)}</b> · `
          : ``) +
          (d === null
            ? ``
            : t
              ? `錢包 <b class="trv-wallet">${I(d, s.currency)}</b>`
              : `Wallet <b class="trv-wallet">${I(d, s.currency)}</b>`),
          a.first && `${t ? qe.zh : qe.en}`,
          (l.innerHTML = Co(e, o.flight, s, a.hour, d, a.first, u)));
      };
    return (
      u(),
      e.onLang(u),
      J(
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
          ((go = !0), r());
        },
        { cls: `ti-btn primary`, icon: `play` },
      ),
      `arrival`
    );
  }
  return null;
}
var vo = (e) => ro(R, e),
  yo = (e) => io(R, e),
  bo = (e) => oo(R, e);
function xo(e, t, n) {
  return wo(e, t, n);
}
function So(t, n, r, i = {}) {
  let a = be(R).filter(vo);
  (a.length, +!!i.lobby);
  let o = i.lobby ? (e) => oo(R, e, { lobby: `1` }) : bo,
    s = lo();
  $a(
    t,
    n,
    [R, ...a].map((e) => ({
      id: e,
      here: e === R,
      meta: yo(e),
      featured: e === s,
    })),
    o,
    r,
  );
  {
    let r = t.menuLayer.querySelector(`.cty-wrap:last-child .cty-list`);
    r &&
      e(async () => {
        let { mountStandalonePickerEntry: e } = await import(
          `./title-DYEg8d_Y.js`
        );
        return { mountStandalonePickerEntry: e };
      }, [])
        .then(({ mountStandalonePickerEntry: a }) => {
          a(t, r, {
            destination: `jakarta`,
            markLeaving: ne,
            lobby: i.lobby,
            isActive: () => !!n.active?.root.contains(r),
            beforeLeave: () =>
              e(
                async () => {
                  let { flushCloudDeparture: e } = await import(
                    `./engine-14d5lda2.js`
                  ).then((e) => e.at);
                  return { flushCloudDeparture: e };
                },
                __vite__mapDeps([5, 4, 6, 7, 3, 8, 9]),
              ).then(({ flushCloudDeparture: e }) => e()),
          });
          let o =
            s === `jakarta` ? r.querySelector(`[data-jakarta-entry]`) : null;
          o && r.prepend(o);
        })
        .catch(() => {});
  }
}
function Co(e, t, n, r, i, a, o) {
  let s = (t, n) => e.t({ zh: t, en: n }),
    c =
      i === null
        ? ``
        : ` · ${s(`錢包`, `Wallet`)} <b class="trv-wallet">${I(i, n.currency)}</b>`;
  return `<div class="trv-top"><b>${t}</b>${s(`狂飆航空`, `RUSH AIR`)}<span>${s(`已抵達`, `ARRIVED`)}</span></div>
        <div class="trv-city">${e.t(n.name)}<small>${e.lang === `zh` ? `${n.name.en} · ` : ``}${n.airport.code}</small></div>
        <div class="trv-line">${s(`當地時間`, `Local time`)} <b>${Ce(r * 60)}</b>${c}${a ? `<br>${e.t(qe)}` : ``}</div>
        <div class="trv-stamp"><span>${s(`入境`, `ARRIVAL`)}<i>${n.airport.code}</i>${o}</span></div>`;
}
function wo(e, t, n) {
  return !1;
}
function To(e) {
  return !1;
}
var Eo = null;
function Do() {
  if (Eo !== null) return Eo;
  Eo = !1;
  try {
    let [e, t] = (sessionStorage.getItem(`tgta-city-switch`) ?? ``).split(`|`);
    (e && sessionStorage.removeItem(ao),
      (Eo =
        e === `tokyo` &&
        Date.now() - Number(t) < 6e4 &&
        !Ze().arrival &&
        !h(le())),
      fe() && !Eo && (Eo = !Ze().arrival && !h(le())));
  } catch {}
  return Eo;
}
