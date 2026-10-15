// tokyo/assets/tokyo-_rNKO_Y7 24 — missions
// Lines 9717-9837 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function Aa(e, t, n = null) {
  {
    let r = ge(z).filter(ka);
    if (Da && r.length < 2) return;
    if (r.length > 1) Na(e, t, n, r);
    else for (let n of r) ja(e, t, n);
    return;
  }
}
function ja(e, t, r) {
  let i = N[r],
    a = Z(
      e,
      t,
      {
        zh: n.on
          ? n.t(`切換到《${i.game.zh}》`, `《${n.jz(i.game.zh)}》に切り替え`)
          : `切換到《${i.game.zh}》`,
        en: `Switch to ${i.game.en}`,
      },
      () => La(r),
      { cls: `ti-btn ti-city`, icon: `play` },
    ),
    o = V(`span`, `mbtn-meta`, a.querySelector(`.mbtn-label`) ?? a),
    s = wa(r),
    c = () => {
      e.lang;
      let t = Ne(r),
        c = t === null ? `` : `${P(t, i.currency)} · `,
        l = (t, n) => e.t({ zh: t, en: n });
      o.textContent = s
        ? `${c}${l(n.on ? n.t(`任務 ${s.missions}`, `ミッション ${s.missions}`) : `任務 ${s.missions}`, `${s.missions} missions`)}`
        : `${c}${l(n.on ? n.t(`全新城市 · ${i.name.zh}`, `新しい街 · ${n.jz(i.name.zh)}`) : `全新城市 · ${i.name.zh}`, `A new city · ${i.name.en}`)}`;
      let u = a.querySelector(`.mbtn-label`);
      u && o.parentElement !== u && u.appendChild(o);
    };
  (c(), e.onLang(c));
}
function Ma(e) {
  let t = Ne(e);
  if (e === `tokyo`)
    return t === null
      ? ha(`繼續在這裡玩`, `Keep playing here`, `このまま遊ぶ`)
      : P(t, N[e].currency);
  let n = t === null ? `` : `${P(t, N[e].currency)} · `,
    r = wa(e);
  return r
    ? ha(
        `${n}任務 ${r.missions}`,
        `${n}${r.missions} missions`,
        `${n}ミッション ${r.missions}`,
      )
    : ha(`${n}全新城市`, `${n}A new city`, `${n}新しい都市`);
}
function Na(e, t, n, r) {
  let i = Z(
    e,
    t,
    ha(`切換城市`, `Switch city`, `都市を切り替え`),
    () => {
      (r.length,
        xa(
          e,
          n,
          [z, ...r].map((e) => ({ id: e, here: e === z, meta: Ma(e) })),
          La,
        ));
    },
    { cls: `ti-btn ti-city`, icon: `globe` },
  );
  i.setAttribute(`aria-haspopup`, `dialog`);
  let a = V(`span`, `mbtn-meta`, i.querySelector(`.mbtn-label`) ?? i),
    o = () => {
      a.textContent = r.map((t) => e.t(N[t].name)).join(` · `);
      let t = i.querySelector(`.mbtn-label`);
      t && a.parentElement !== t && t.appendChild(a);
    };
  (o(), e.onLang(o));
}
function Pa(e, t, n, r, i, a, o) {
  let s = (t, n) => e.t({ zh: t, en: n }),
    c = e.lang !== `en`,
    l =
      i === null
        ? ``
        : ` · ${s(`錢包`, `Wallet`)} <b class="trv-wallet">${P(i, n.currency)}</b>`;
  return `<div class="trv-top"><b>${t}</b>${s(`狂飆航空`, `RUSH AIR`)}<span>${s(`已抵達`, `ARRIVED`)}</span></div>
        <div class="trv-city">${e.t(n.name)}<small>${e.lang === `ja` ? `` : `${c ? n.name.en : n.name.zh} · `}${n.airport.code}</small></div>
        <div class="trv-line">${s(`當地時間`, `Local time`)} <b>${I(r * 60)}</b>${l}${a ? `<br>${e.t(We)}` : ``}</div>
        <div class="trv-stamp"><span>${s(`入境`, `ARRIVAL`)}<i>${n.airport.code}</i>${o}</span></div>`;
}
function Fa(e, t, n) {
  return !1;
}
var Ia = `tgta-city-switch`;
function La(e) {
  let t = new URL(location.href);
  for (let e of [`spawn`, `cam`, `autoplay`, `menu`, `hour`, `r`, `region`])
    t.searchParams.delete(e);
  t.searchParams.set(`region`, e);
  try {
    sessionStorage.setItem(Ia, `${e}|${Date.now()}`);
  } catch {}
  (me(), (location.href = N[e].page + `?` + t.searchParams.toString()));
}
var Ra = null;
function za() {
  if (Ra !== null) return Ra;
  Ra = !1;
  try {
    let [e, t] = (sessionStorage.getItem(Ia) ?? ``).split(`|`);
    (e && sessionStorage.removeItem(Ia),
      (Ra =
        e === `tokyo` &&
        Date.now() - Number(t) < 6e4 &&
        !Ke().arrival &&
        !D(E())),
      te() && !Ra && (Ra = !Ke().arrival && !D(E())));
  } catch {}
  return Ra;
}
