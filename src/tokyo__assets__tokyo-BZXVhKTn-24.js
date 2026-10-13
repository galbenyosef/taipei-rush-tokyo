// tokyo__assets__tokyo-BZXVhKTn 24 — missions
// Lines 9473-9592 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function ba(e, t, n = null) {
  {
    if (_a) return;
    let r = fe(R).filter(ya);
    if (r.length > 1) Ca(e, t, n, r);
    else for (let n of r) xa(e, t, n);
    return;
  }
}
function xa(e, t, r) {
  let i = j[r],
    a = Z(
      e,
      t,
      {
        zh: n.on
          ? n.t(`切換到《${i.game.zh}》`, `《${n.jz(i.game.zh)}》に切り替え`)
          : `切換到《${i.game.zh}》`,
        en: `Switch to ${i.game.en}`,
      },
      () => Da(r),
      { cls: `ti-btn ti-city`, icon: `play` },
    ),
    o = B(`span`, `mbtn-meta`, a.querySelector(`.mbtn-label`) ?? a),
    s = ma(r),
    c = () => {
      e.lang;
      let t = De(r),
        c = t === null ? `` : `${M(t, i.currency)} · `,
        l = (t, n) => e.t({ zh: t, en: n });
      o.textContent = s
        ? `${c}${l(n.on ? n.t(`任務 ${s.missions}`, `ミッション ${s.missions}`) : `任務 ${s.missions}`, `${s.missions} missions`)}`
        : `${c}${l(n.on ? n.t(`全新城市 · ${i.name.zh}`, `新しい街 · ${n.jz(i.name.zh)}`) : `全新城市 · ${i.name.zh}`, `A new city · ${i.name.en}`)}`;
      let u = a.querySelector(`.mbtn-label`);
      u && o.parentElement !== u && u.appendChild(o);
    };
  (c(), e.onLang(c));
}
function Sa(e) {
  let t = De(e);
  if (e === `tokyo`)
    return t === null
      ? aa(`繼續在這裡玩`, `Keep playing here`, `このまま遊ぶ`)
      : M(t, j[e].currency);
  let n = t === null ? `` : `${M(t, j[e].currency)} · `,
    r = ma(e);
  return r
    ? aa(
        `${n}任務 ${r.missions}`,
        `${n}${r.missions} missions`,
        `${n}ミッション ${r.missions}`,
      )
    : aa(`${n}全新城市`, `${n}A new city`, `${n}新しい都市`);
}
function Ca(e, t, n, r) {
  let i = Z(
    e,
    t,
    aa(`切換城市`, `Switch city`, `都市を切り替え`),
    () => {
      (r.length,
        da(
          e,
          n,
          [R, ...r].map((e) => ({ id: e, here: e === R, meta: Sa(e) })),
          Da,
        ));
    },
    { cls: `ti-btn ti-city`, icon: `globe` },
  );
  i.setAttribute(`aria-haspopup`, `dialog`);
  let a = B(`span`, `mbtn-meta`, i.querySelector(`.mbtn-label`) ?? i),
    o = () => {
      a.textContent = r.map((t) => e.t(j[t].name)).join(` · `);
      let t = i.querySelector(`.mbtn-label`);
      t && a.parentElement !== t && t.appendChild(a);
    };
  (o(), e.onLang(o));
}
function wa(e, t, n, r, i, a, o) {
  let s = (t, n) => e.t({ zh: t, en: n }),
    c = e.lang !== `en`,
    l =
      i === null
        ? ``
        : ` · ${s(`錢包`, `Wallet`)} <b class="trv-wallet">${M(i, n.currency)}</b>`;
  return `<div class="trv-top"><b>${t}</b>${s(`狂飆航空`, `RUSH AIR`)}<span>${s(`已抵達`, `ARRIVED`)}</span></div>
        <div class="trv-city">${e.t(n.name)}<small>${e.lang === `ja` ? `` : `${c ? n.name.en : n.name.zh} · `}${n.airport.code}</small></div>
        <div class="trv-line">${s(`當地時間`, `Local time`)} <b>${me(r * 60)}</b>${l}${a ? `<br>${e.t(Re)}` : ``}</div>
        <div class="trv-stamp"><span>${s(`入境`, `ARRIVAL`)}<i>${n.airport.code}</i>${o}</span></div>`;
}
function Ta(e, t, n) {
  return !1;
}
var Ea = `tgta-city-switch`;
function Da(e) {
  let t = new URL(location.href);
  for (let e of [`spawn`, `cam`, `autoplay`, `menu`, `hour`, `r`, `region`])
    t.searchParams.delete(e);
  t.searchParams.set(`region`, e);
  try {
    sessionStorage.setItem(Ea, `${e}|${Date.now()}`);
  } catch {}
  (y(), (location.href = j[e].page + `?` + t.searchParams.toString()));
}
var Oa = null;
function ka() {
  if (Oa !== null) return Oa;
  Oa = !1;
  try {
    let [e, t] = (sessionStorage.getItem(Ea) ?? ``).split(`|`);
    (e && sessionStorage.removeItem(Ea),
      (Oa =
        e === `tokyo` &&
        Date.now() - Number(t) < 6e4 &&
        !Be().arrival &&
        !w(_())));
  } catch {}
  return Oa;
}
