// tokyo/assets/tokyo-CqLdAwml 15 — dataset
// Lines 6559-6869 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Pi(e) {
  return ((e %= ki), e > Math.PI ? e - ki : e <= -Math.PI ? e + ki : e);
}
function Fi(e) {
  try {
    return e.vehicles.playerVehicle;
  } catch {
    return null;
  }
}
function Ii(e, t, n, r, i, a, o, s, c) {
  let l = e.getContext(`2d`),
    u = e.width,
    d = e.height,
    f = Math.min(2, window.devicePixelRatio || 1),
    p = s * f;
  l.setTransform(p, 0, 0, p, u / 2 - i * p, d / 2 - a * p);
  let m = u / 2 / p,
    h = d / 2 / p,
    g = { minX: i - m, maxX: i + m, minZ: a - h, maxZ: a + h };
  if (
    (t && vi(l, g, n, t.look), t && Ti(l, t, g), r.waypoint && r.count >= 2)
  ) {
    let e = r.pts;
    (l.beginPath(), l.moveTo(e[0], e[1]));
    for (let t = 1; t < r.count; t++) l.lineTo(e[t * 2], e[t * 2 + 1]);
    ((l.lineJoin = `round`),
      (l.lineCap = `round`),
      (l.strokeStyle = r.colors.core),
      (l.lineWidth = (4 * f) / p),
      l.stroke());
  }
  l.setTransform(1, 0, 0, 1, 0, 0);
  let _ = Math.round(26 * f);
  if (c) {
    let e = c.player,
      t = u / 2 + (e.x - i) * p,
      n = d / 2 + (e.z - a) * p;
    t > 0 &&
      t < u &&
      n > 0 &&
      n < d &&
      (l.translate(t, n),
      l.rotate(e.heading),
      l.drawImage(lt(_), -_ / 2, -_ / 2),
      l.setTransform(1, 0, 0, 1, 0, 0));
    let r = Math.round(30 * f);
    ((l.globalAlpha = 0.35),
      (l.fillStyle = `#ffc93d`),
      l.beginPath(),
      l.arc(u / 2, d / 2, r * 0.9, 0, ki),
      l.fill(),
      (l.globalAlpha = 1),
      l.drawImage(dt(c.icon, r), u / 2 - r / 2, d / 2 - r / 2));
    return;
  }
  (l.translate(u / 2, d / 2),
    l.rotate(o),
    l.drawImage(lt(_), -_ / 2, -_ / 2),
    l.setTransform(1, 0, 0, 1, 0, 0));
}
var Li = [
    { id: `all`, msg: { zh: `附近`, en: `Nearby` } },
    { id: `story`, msg: G.catStory },
    { id: `side`, msg: G.catSide },
    { id: `job`, msg: G.catJob },
    { id: `race`, msg: G.catRace },
    { id: `culture`, msg: G.catCulture },
  ],
  Ri = (e) =>
    e >= 1e3 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 10) * 10} m`;
function zi(e) {
  try {
    return e.ctx.missions.list() ?? [];
  } catch {
    return [];
  }
}
function Bi(e) {
  try {
    return e.ctx.missions.active?.id ?? null;
  } catch {
    return null;
  }
}
var Vi = (e) => e.completed && !e.repeatable;
function Hi(e, t, n, r) {
  let i = e,
    a = zi(e),
    o = Bi(e),
    s = i.ctx.player.position,
    c = i.ctx.plan,
    l = B(`div`, `mis-tabs`, t);
  for (let e of Li) {
    let t =
      e.id === `all` ? a.length : a.filter((t) => t.category === e.id).length;
    if (!t && e.id !== `all`) continue;
    let o = B(`button`, `mis-tab${n.tab === e.id ? ` on` : ``}`, l);
    ((o.type = `button`),
      (o.dataset.nav = `1`),
      (o.dataset.key = `tab-${e.id}`),
      B(`span`, ``, o, i.t(e.msg)),
      B(`b`, ``, o, String(t)),
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
    qi(e, t, r);
    return;
  }
  let u = 0;
  try {
    u = i.ctx.missions.blessing ?? 0;
  } catch {}
  u > 0 &&
    B(
      `div`,
      `ph-bless`,
      t,
      `${i.t(i.region.blessing ?? W.blessing)} · ${Math.ceil(u / 60)} min`,
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
    let e = B(`div`, `mis-chips`, t),
      a = (t, a) => {
        let o = B(`button`, `mis-chip${n.district === t ? ` on` : ``}`, e);
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
    let e = B(`div`, `ph-empty`, t);
    ((e.innerHTML = z.missions), B(`div`, ``, e, i.t(G.noMissions)));
    return;
  }
  let h = (e) => Math.hypot(e.x - s.x, e.z - s.z),
    g = (e, t) => h(e) - h(t),
    _ = m.filter((e) => e.id === o),
    v = m.filter((e) => e.id !== o && e.available && !Vi(e)).sort(g),
    y = m.filter((e) => e.id !== o && e.available && Vi(e)).sort(g),
    b = m.filter((e) => e.id !== o && !e.available && !Vi(e)),
    x = m.filter((e) => e.id !== o && !e.available && Vi(e)),
    S = (e, n) => {
      let r = B(`div`, `mis-sec`, t);
      (B(`span`, ``, r, i.t(e)), n != null && B(`b`, ``, r, String(n)));
    };
  for (let n of _) Ui(e, t, n, !0, h(n), r);
  if (v.length) {
    let a = v.slice(0, 3);
    S({ zh: `附近`, en: `Nearby` });
    for (let n of a) Ui(e, t, n, !1, h(n), r);
    if (v.length > 3) {
      let a = n.open.has(`more`),
        o = v.slice(3),
        s = a ? o : o.slice(0, 6);
      S({ zh: `更多任務`, en: `More missions` }, o.length);
      for (let n of s) Ui(e, t, n, !1, h(n), r);
      if (!a && o.length > s.length) {
        let e = B(`button`, `mis-group mis-more`, t);
        ((e.type = `button`),
          (e.dataset.nav = `1`),
          (e.dataset.key = `g-more`),
          B(`span`, ``, e, i.t({ zh: `顯示全部`, en: `Show all` })),
          B(`b`, ``, e, String(o.length - s.length)),
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
      l = B(`button`, `mis-group${c ? ` on` : ``}`, t);
    if (
      ((l.type = `button`),
      (l.dataset.nav = `1`),
      (l.dataset.key = `g-${a}`),
      (B(`span`, `mis-group-chev`, l).innerHTML = z.chevronL),
      B(`span`, ``, l, i.t(o)),
      B(`b`, ``, l, String(s.length)),
      l.addEventListener(`click`, (e) => {
        (e.stopPropagation(),
          i.sfx(`ui_click`, 0.6),
          c ? n.open.delete(a) : n.open.add(a),
          r.rerender(`g-${a}`));
      }),
      c)
    )
      for (let n of s) Ui(e, t, n, !1, h(n), r);
  };
  (C(`replay`, { zh: `可重玩`, en: `Replay` }, y),
    C(`locked`, { zh: `尚未解鎖`, en: `Locked` }, b),
    C(`done`, { zh: `已完成`, en: `Done` }, x));
}
function Ui(e, t, n, r, i, a) {
  let o = e,
    s = Vi(n) && !r,
    c = !n.available && !s && !r,
    l = B(
      `button`,
      `ph-item mis cat-${n.category}${s ? ` done` : ``}${c ? ` locked` : ``}${r ? ` running` : ``}`,
      t,
    );
  ((l.type = `button`),
    (l.dataset.nav = `1`),
    (l.dataset.key = `m-${n.id}`),
    n.color && l.style.setProperty(`--cat`, n.color));
  let u = B(`div`, `mis-row`, l),
    d = B(`span`, `mis-cat`, u);
  (n.glyph && B(`b`, `mis-glyph`, d, n.glyph),
    d.appendChild(
      document.createTextNode(
        o.t(
          n.category === `story` && n.chapter
            ? Ki(n.chapter)
            : (Ot[n.category] ?? n.category),
        ),
      ),
    ),
    n.retry
      ? B(`span`, `mis-flag retry`, u, o.t({ zh: `重試`, en: `Retry` }))
      : n.suggested &&
        !r &&
        !s &&
        B(`span`, `mis-flag`, u, o.t({ zh: `推薦`, en: `Next` })));
  let f = r
    ? o.t(n.status === `travel` ? W.onTheWay : W.inProgress)
    : c
      ? o.t(G.unavailable)
      : s
        ? `✓ ${o.t(G.completed)}`
        : A(n.reward);
  B(`span`, `mis-reward${r ? ` live` : c || s ? ` muted` : ``}`, u, f);
  let p = B(`div`, `mis-trow`, l);
  (B(`div`, `mis-title`, p, o.t(n.title)), B(`span`, `mis-dist`, p, Ri(i)));
  let m = [
    o.alt(n.title),
    o.t(n.district ?? o.ctx.plan.districtAt(n.x, n.z).name),
  ];
  (n.hours && m.push(n.hours),
    B(`div`, `mis-sub`, l, m.filter(Boolean).join(` · `)),
    n.note && B(`div`, `mis-note${c ? ` muted` : ``}`, l, o.t(n.note)));
  let h = Gi(e, n.id);
  (h && B(`div`, `mis-note`, l, h),
    l.addEventListener(`click`, (e) => {
      (e.stopPropagation(), o.sfx(`ui_click`), a.pick(n));
    }));
}
var Wi = [
  [0, { zh: `新人`, en: `Rookie`, ja: `新人` }],
  [3, { zh: `熟手`, en: `Regular`, ja: `一人前` }],
  [8, { zh: `老手`, en: `Veteran`, ja: `ベテラン` }],
  [15, { zh: `代理店長`, en: `Acting manager`, ja: `店長代理` }],
];
function Gi(e, t) {
  let n = /^tokyo:baito:(.+)$/.exec(t);
  if (!n) return null;
  let r = e.ctx.state.data.stats,
    i = n[1],
    a = r[`baito_${i}_shifts`] ?? 0;
  if (!a) return null;
  let o = r[`baito_${i}_xp`] ?? 0,
    s = Wi.filter(([e]) => o >= e).pop()[1],
    c = [``, `C`, `B`, `A`, `S`][r[`baito_${i}_best`] ?? 0] ?? ``,
    l = A(r[`baito_${i}_earned`] ?? 0);
  return e.t({
    zh: `${s.zh} · 最佳 ${c} · ${a} 班 · 共 ${l}`,
    en: `${s.en} · best ${c} · ${a} shifts · ${l} earned`,
    ja: `${s.ja} · 最高 ${c} · ${a}シフト · 計${l}`,
  });
}
function Ki(e) {
  if (typeof e == `string`) return e;
  let t = /^(序章|第.章)/.exec(e.zh)?.[1] ?? e.zh,
    n = /Chapter (\d+)/.exec(e.en)?.[1];
  return { zh: t, en: n ? `Ch. ${n}` : e.en.split(` `)[0] };
}
