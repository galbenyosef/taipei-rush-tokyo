// tokyo/assets/tokyo-_rNKO_Y7 15 — filter
// Lines 6444-6770 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function ai(e, t, n, r) {
  let i = e,
    a = ni(e),
    o = ri(e),
    s = i.ctx.player.position,
    c = i.ctx.plan,
    l = V(`div`, `mis-tabs`, t);
  for (let e of ei) {
    let t =
      e.id === `all` ? a.length : a.filter((t) => t.category === e.id).length;
    if (!t && e.id !== `all`) continue;
    let o = V(`button`, `mis-tab${n.tab === e.id ? ` on` : ``}`, l);
    ((o.type = `button`),
      (o.dataset.nav = `1`),
      (o.dataset.key = `tab-${e.id}`),
      V(`span`, ``, o, i.t(e.msg)),
      V(`b`, ``, o, String(t)),
      o.addEventListener(`click`, (t) => {
        (t.stopPropagation(),
          i.sfx(`ui_click`, 0.7),
          (n.tab = e.id),
          (n.district = ``),
          r.save(n),
          r.rerender(`tab-${e.id}`));
      }));
  }
  if (n.tab === `story`) {
    ui(e, t, r);
    return;
  }
  let u = 0;
  try {
    u = i.ctx.missions.blessing ?? 0;
  } catch {}
  u > 0 &&
    V(
      `div`,
      `ph-bless`,
      t,
      `${i.t(i.region.blessing ?? Y.blessing)} · ${Math.ceil(u / 60)} min`,
    );
  let d = a.filter((e) => n.tab === `all` || e.category === n.tab),
    f = new Map(),
    p = new Map();
  for (let e of d) {
    let t = c.districtAt(e.x, e.z);
    p.set(e, t.id);
    let n = f.get(t.id);
    n ? n.n++ : f.set(t.id, { name: t.name, n: 1 });
  }
  if ((n.district && !f.has(n.district) && (n.district = ``), f.size > 1)) {
    let e = V(`div`, `mis-chips`, t),
      a = (t, a) => {
        let o = V(`button`, `mis-chip${n.district === t ? ` on` : ``}`, e);
        ((o.type = `button`),
          (o.dataset.nav = `1`),
          (o.dataset.key = `d-${t}`),
          (o.textContent = a),
          o.addEventListener(`click`, (e) => {
            (e.stopPropagation(),
              i.sfx(`ui_click`, 0.6),
              (n.district = n.district === t ? `` : t),
              r.save(n),
              r.rerender(`d-${t}`));
          }));
      };
    a(``, i.t({ zh: `全部地區`, en: `All areas` }));
    let o = c.districtAt(s.x, s.z).id,
      l = [...f.keys()].sort((e, t) =>
        e === o ? -1 : t === o ? 1 : f.get(t).n - f.get(e).n,
      );
    for (let e of l) a(e, `${i.t(f.get(e).name)} ${f.get(e).n}`);
  }
  let m = d.filter((e) => !n.district || p.get(e) === n.district);
  if (!m.length) {
    let e = V(`div`, `ph-empty`, t);
    ((e.innerHTML = B.missions), V(`div`, ``, e, i.t(J.noMissions)));
    return;
  }
  let h = (e) => Math.hypot(e.x - s.x, e.z - s.z),
    g = (e, t) => h(e) - h(t),
    _ = m.filter((e) => e.id === o),
    v = m.filter((e) => e.id !== o && e.available && !ii(e)).sort(g),
    y = m.filter((e) => e.id !== o && e.available && ii(e)).sort(g),
    b = m.filter((e) => e.id !== o && !e.available && !ii(e)),
    x = m.filter((e) => e.id !== o && !e.available && ii(e)),
    S = (e, n) => {
      let r = V(`div`, `mis-sec`, t);
      (V(`span`, ``, r, i.t(e)), n != null && V(`b`, ``, r, String(n)));
    };
  for (let n of _) oi(e, t, n, !0, h(n), r);
  if (v.length) {
    let a = v.slice(0, 3);
    S({ zh: `附近`, en: `Nearby` });
    for (let n of a) oi(e, t, n, !1, h(n), r);
    if (v.length > 3) {
      let a = n.open.has(`more`),
        o = v.slice(3),
        s = a ? o : o.slice(0, 6);
      S({ zh: `更多任務`, en: `More missions` }, o.length);
      for (let n of s) oi(e, t, n, !1, h(n), r);
      if (!a && o.length > s.length) {
        let e = V(`button`, `mis-group mis-more`, t);
        ((e.type = `button`),
          (e.dataset.nav = `1`),
          (e.dataset.key = `g-more`),
          V(`span`, ``, e, i.t({ zh: `顯示全部`, en: `Show all` })),
          V(`b`, ``, e, String(o.length - s.length)),
          e.addEventListener(`click`, (e) => {
            (e.stopPropagation(),
              i.sfx(`ui_click`, 0.6),
              n.open.add(`more`),
              r.rerender(`m-${o[s.length].id}`));
          }));
      }
    }
  }
  let C = (a, o, s) => {
    if (!s.length) return;
    let c = n.open.has(a),
      l = V(`button`, `mis-group${c ? ` on` : ``}`, t);
    if (
      ((l.type = `button`),
      (l.dataset.nav = `1`),
      (l.dataset.key = `g-${a}`),
      (V(`span`, `mis-group-chev`, l).innerHTML = B.chevronL),
      V(`span`, ``, l, i.t(o)),
      V(`b`, ``, l, String(s.length)),
      l.addEventListener(`click`, (e) => {
        (e.stopPropagation(),
          i.sfx(`ui_click`, 0.6),
          c ? n.open.delete(a) : n.open.add(a),
          r.rerender(`g-${a}`));
      }),
      c)
    )
      for (let n of s) oi(e, t, n, !1, h(n), r);
  };
  (C(`replay`, { zh: `可重玩`, en: `Replay` }, y),
    C(`locked`, { zh: `尚未解鎖`, en: `Locked` }, b),
    C(`done`, { zh: `已完成`, en: `Done` }, x));
}
function oi(e, t, n, r, i, a) {
  let o = e,
    s = ii(n) && !r,
    c = !n.available && !s && !r,
    l = V(
      `button`,
      `ph-item mis cat-${n.category}${s ? ` done` : ``}${c ? ` locked` : ``}${r ? ` running` : ``}`,
      t,
    );
  ((l.type = `button`),
    (l.dataset.nav = `1`),
    (l.dataset.key = `m-${n.id}`),
    n.color && l.style.setProperty(`--cat`, n.color));
  let u = V(`div`, `mis-row`, l),
    d = V(`span`, `mis-cat`, u);
  (n.glyph && V(`b`, `mis-glyph`, d, n.glyph),
    d.appendChild(
      document.createTextNode(
        o.t(
          n.category === `story` && n.chapter
            ? li(n.chapter)
            : (Qn[n.category] ?? n.category),
        ),
      ),
    ),
    n.retry
      ? V(`span`, `mis-flag retry`, u, o.t({ zh: `重試`, en: `Retry` }))
      : n.suggested &&
        !r &&
        !s &&
        V(`span`, `mis-flag`, u, o.t({ zh: `推薦`, en: `Next` })));
  let f = r
    ? o.t(n.status === `travel` ? Y.onTheWay : Y.inProgress)
    : c
      ? o.t(J.unavailable)
      : s
        ? `✓ ${o.t(J.completed)}`
        : A(n.reward);
  V(`span`, `mis-reward${r ? ` live` : c || s ? ` muted` : ``}`, u, f);
  let p = V(`div`, `mis-trow`, l);
  (V(`div`, `mis-title`, p, o.t(n.title)), V(`span`, `mis-dist`, p, ti(i)));
  let m = [
    o.alt(n.title),
    o.t(n.district ?? o.ctx.plan.districtAt(n.x, n.z).name),
  ];
  (n.hours && m.push(n.hours),
    V(`div`, `mis-sub`, l, m.filter(Boolean).join(` · `)),
    n.note && V(`div`, `mis-note${c ? ` muted` : ``}`, l, o.t(n.note)));
  let h = ci(e, n.id);
  (h && V(`div`, `mis-note`, l, h),
    l.addEventListener(`click`, (e) => {
      (e.stopPropagation(), o.sfx(`ui_click`), a.pick(n));
    }));
}
var si = [
  [0, { zh: `新人`, en: `Rookie`, ja: `新人` }],
  [3, { zh: `熟手`, en: `Regular`, ja: `一人前` }],
  [8, { zh: `老手`, en: `Veteran`, ja: `ベテラン` }],
  [15, { zh: `代理店長`, en: `Acting manager`, ja: `店長代理` }],
];
function ci(e, t) {
  let n = /^tokyo:baito:(.+)$/.exec(t);
  if (!n) return null;
  let r = e.ctx.state.data.stats,
    i = n[1],
    a = r[`baito_${i}_shifts`] ?? 0;
  if (!a) return null;
  let o = r[`baito_${i}_xp`] ?? 0,
    s = si.filter(([e]) => o >= e).pop()[1],
    c = [``, `C`, `B`, `A`, `S`][r[`baito_${i}_best`] ?? 0] ?? ``,
    l = A(r[`baito_${i}_earned`] ?? 0);
  return e.t({
    zh: `${s.zh} · 最佳 ${c} · ${a} 班 · 共 ${l}`,
    en: `${s.en} · best ${c} · ${a} shifts · ${l} earned`,
    ja: `${s.ja} · 最高 ${c} · ${a}シフト · 計${l}`,
  });
}
function li(e) {
  if (typeof e == `string`) return e;
  let t = /^(序章|第.章)/.exec(e.zh)?.[1] ?? e.zh,
    n = /Chapter (\d+)/.exec(e.en)?.[1];
  return { zh: t, en: n ? `Ch. ${n}` : e.en.split(` `)[0] };
}
function ui(e, t, r) {
  let i = e,
    a = ni(e),
    o = a.filter((e) => e.category === `story`),
    s = i.ctx.player.position,
    c = ri(e),
    l = new Map(a.map((e) => [e.id, e])),
    u =
      o.find((e) => e.id === c) ??
      o.find((e) => e.suggested && e.available && !ii(e)) ??
      o.find((e) => e.available && !ii(e)),
    d = o.filter(ii).length,
    f = V(`div`, `st-hero`, t),
    p = V(`div`, `st-hero-k`, f);
  (V(`span`, ``, p, i.t({ zh: `主線進度`, en: `Story progress` })),
    V(`b`, ``, p, `${d} / ${o.length}`));
  let m = V(`div`, `st-bar`, f);
  if (
    ((V(`i`, ``, m).style.transform = `scaleX(${o.length ? d / o.length : 0})`),
    u)
  ) {
    let e = V(`div`, `st-next`, f);
    (V(
      `div`,
      `st-next-k`,
      e,
      i.t(u.id === c ? Y.inProgress : { zh: `下一個任務`, en: `Next` }),
    ),
      V(`div`, `st-next-t`, e, i.t(u.title)));
    let t = Math.hypot(u.x - s.x, u.z - s.z),
      n = [
        u.chapter ? i.t(u.chapter) : ``,
        i.t(i.ctx.plan.districtAt(u.x, u.z).name),
        ti(t),
      ]
        .filter(Boolean)
        .join(` · `);
    V(`div`, `st-next-s`, e, n);
    let a = V(`button`, `ph-btn primary st-go`, f);
    ((a.type = `button`),
      (a.dataset.nav = `1`),
      (a.innerHTML = B.pin),
      V(`span`, ``, a, `${i.t({ zh: `導航`, en: `Navigate` })} · ${ti(t)}`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), i.sfx(`ui_confirm`), r.gps(u));
      }));
    let o = V(`button`, `ph-btn st-info`, f);
    ((o.type = `button`),
      (o.dataset.nav = `1`),
      V(`span`, ``, o, i.t({ zh: `任務詳情`, en: `Details` })),
      o.addEventListener(`click`, (e) => {
        (e.stopPropagation(), i.sfx(`ui_click`), r.pick(u));
      }));
  } else
    o.length &&
      d === o.length &&
      V(
        `div`,
        `st-next-t`,
        f,
        i.t(
          i.region.storyDone ?? {
            zh: n.on
              ? n.t(
                  `全部主線完成！${Ur.city.zh}是你的了。`,
                  `メインストーリー完了！${n.jz(Ur.city.zh)}はもうキミのものだ。`,
                )
              : `全部主線完成！${Ur.city.zh}是你的了。`,
            en: `Story complete — ${Ur.city.en} is yours.`,
          },
        ),
      );
  let h = [];
  try {
    h = ir();
  } catch {}
  let g = o.filter(
      (e) => !h.some((t) => t.missions.some((t) => t.id === e.id)),
    ),
    _ = (e) =>
      e.id === `tutorial` ||
      (typeof e.chapter == `object` &&
        /序章|Prologue/.test(e.chapter.zh + e.chapter.en)),
    v = g.filter(_),
    y = g.filter((e) => !_(e)),
    b = (e) => e.map((e) => ({ id: e.id, title: e.title, completed: ii(e) }));
  v.length && di(e, t, { zh: `序章`, en: `Prologue` }, b(v), !0, null, l, c, r);
  for (let n of h)
    di(
      e,
      t,
      n.chapter,
      n.missions,
      n.unlocked || n.missions.some((e) => e.completed),
      n.text,
      l,
      c,
      r,
    );
  y.length &&
    di(e, t, { zh: `番外篇`, en: `Specials` }, b(y), !0, null, l, c, r);
}
