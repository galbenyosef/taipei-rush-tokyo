// tokyo/assets/tokyo-CqLdAwml 16 — icon
// Lines 6870-7155 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function qi(e, t, r) {
  let i = e,
    a = zi(e),
    o = a.filter((e) => e.category === `story`),
    s = i.ctx.player.position,
    c = Bi(e),
    l = new Map(a.map((e) => [e.id, e])),
    u =
      o.find((e) => e.id === c) ??
      o.find((e) => e.suggested && e.available && !Vi(e)) ??
      o.find((e) => e.available && !Vi(e)),
    d = o.filter(Vi).length,
    f = B(`div`, `st-hero`, t),
    p = B(`div`, `st-hero-k`, f);
  (B(`span`, ``, p, i.t({ zh: `主線進度`, en: `Story progress` })),
    B(`b`, ``, p, `${d} / ${o.length}`));
  let m = B(`div`, `st-bar`, f);
  if (
    ((B(`i`, ``, m).style.transform = `scaleX(${o.length ? d / o.length : 0})`),
    u)
  ) {
    let e = B(`div`, `st-next`, f);
    (B(
      `div`,
      `st-next-k`,
      e,
      i.t(u.id === c ? W.inProgress : { zh: `下一個任務`, en: `Next` }),
    ),
      B(`div`, `st-next-t`, e, i.t(u.title)));
    let t = Math.hypot(u.x - s.x, u.z - s.z),
      n = [
        u.chapter ? i.t(u.chapter) : ``,
        i.t(i.ctx.plan.districtAt(u.x, u.z).name),
        Ri(t),
      ]
        .filter(Boolean)
        .join(` · `);
    B(`div`, `st-next-s`, e, n);
    let a = B(`button`, `ph-btn primary st-go`, f);
    ((a.type = `button`),
      (a.dataset.nav = `1`),
      (a.innerHTML = z.pin),
      B(`span`, ``, a, `${i.t({ zh: `導航`, en: `Navigate` })} · ${Ri(t)}`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), i.sfx(`ui_confirm`), r.gps(u));
      }));
    let o = B(`button`, `ph-btn st-info`, f);
    ((o.type = `button`),
      (o.dataset.nav = `1`),
      B(`span`, ``, o, i.t({ zh: `任務詳情`, en: `Details` })),
      o.addEventListener(`click`, (e) => {
        (e.stopPropagation(), i.sfx(`ui_click`), r.pick(u));
      }));
  } else
    o.length &&
      d === o.length &&
      B(
        `div`,
        `st-next-t`,
        f,
        i.t(
          i.region.storyDone ?? {
            zh: n.on
              ? n.t(
                  `全部主線完成！${Y.city.zh}是你的了。`,
                  `メインストーリー完了！${n.jz(Y.city.zh)}はもうキミのものだ。`,
                )
              : `全部主線完成！${Y.city.zh}是你的了。`,
            en: `Story complete — ${Y.city.en} is yours.`,
          },
        ),
      );
  let h = [];
  try {
    h = Zr();
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
    b = (e) => e.map((e) => ({ id: e.id, title: e.title, completed: Vi(e) }));
  v.length && Ji(e, t, { zh: `序章`, en: `Prologue` }, b(v), !0, null, l, c, r);
  for (let n of h)
    Ji(
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
    Ji(e, t, { zh: `番外篇`, en: `Specials` }, b(y), !0, null, l, c, r);
}
function Ji(e, t, n, r, i, a, o, s, c) {
  let l = e,
    u = r.filter((e) => e.completed).length,
    d = B(
      `div`,
      `st-ch${i ? `` : ` locked`}${u === r.length && r.length ? ` done` : ``}`,
      t,
    ),
    f = B(`div`, `st-ch-h`, d);
  (B(`b`, ``, f, l.t(n)), B(`span`, `st-ch-n`, f, `${u}/${r.length}`));
  let p = B(`div`, `st-dots`, d);
  for (let e of r) {
    let t = o.get(e.id),
      n = B(
        `button`,
        `st-m${e.completed ? ` ok` : ``}${e.id === s ? ` live` : ``}${t?.available && !e.completed ? ` open` : ``}`,
        p,
      );
    ((n.type = `button`),
      (n.dataset.nav = `1`),
      (n.dataset.key = `sm-${e.id}`),
      B(`i`, ``, n, e.completed ? `✓` : (t?.glyph ?? ``)),
      B(`span`, ``, n, i || e.completed ? l.t(e.title) : `？？？`),
      n.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t && (l.sfx(`ui_click`), c.pick(t)));
      }));
  }
  if (a) {
    let e = l.t(a);
    e && e !== `？？？` && e !== `???` && B(`p`, `st-recap`, d, e);
  }
}
function Yi(e) {
  let t = zi(e),
    n = new Set(e.ctx.state.data.completedMissions ?? []),
    r = (e) => {
      let r = t.filter((t) => t.category === e);
      return [r.filter((e) => n.has(e.id) || Vi(e)).length, r.length];
    },
    i = 30;
  try {
    i = e.ctx.missions.collectibles?.total ?? 30;
  } catch {}
  let a = [Math.min(i, e.ctx.state.data.collectibles?.length ?? 0), i],
    o = {
      story: r(`story`),
      side: r(`side`),
      culture: r(`culture`),
      race: r(`race`),
      jobs: r(`job`),
      cats: a,
    },
    s = (e) => (e[1] ? e[0] / e[1] : 0),
    c = [
      o.side[0] + o.culture[0] + o.race[0],
      o.side[1] + o.culture[1] + o.race[1],
    ],
    l = Math.round(
      100 * (0.4 * s(o.story) + 0.3 * s(c) + 0.1 * s(o.jobs) + 0.2 * s(o.cats)),
    );
  return { ...o, pct: l };
}
function Xi(e, t) {
  let n = e,
    r = Yi(e),
    i = B(`div`, `cmp`, t),
    a = n.region.noProgress;
  if (
    a &&
    !(r.story[1] + r.side[1] + r.culture[1] + r.race[1] + r.jobs[1] + r.cats[1])
  )
    return (B(`div`, `cmp-top`, i, n.t(a)), i);
  let o = B(`div`, `cmp-top`, i);
  (B(`span`, ``, o, n.t({ zh: `遊戲完成度`, en: `Game completion` })),
    B(`b`, ``, o, `${r.pct}%`));
  let s = B(`div`, `cmp-bar`, i);
  B(`i`, ``, s).style.transform = `scaleX(${r.pct / 100})`;
  let c = B(`div`, `cmp-rows`, i),
    l = (e, t) => {
      if (!t[1]) return;
      let r = B(`div`, `cmp-row`, c);
      ((r.dataset.nav = `1`),
        B(`span`, ``, r, n.t(e)),
        B(`b`, ``, r, `${t[0]} / ${t[1]}`));
    };
  return (
    l({ zh: `主線`, en: `Story` }, r.story),
    l({ zh: `支線`, en: `Side` }, r.side),
    l({ zh: `文化`, en: `Culture` }, r.culture),
    l({ zh: `競速`, en: `Races` }, r.race),
    l({ zh: `打工（完成過）`, en: `Jobs (done once)` }, r.jobs),
    l({ zh: `招財貓`, en: `Lucky cats` }, r.cats),
    i
  );
}
n.add({ 新: `NEW` });
var Zi = [
    {
      id: `missions`,
      icon: `missions`,
      msg: G.phoneMissions,
      bg: `linear-gradient(145deg,#ffcf4a,#ff8a1f)`,
    },
    {
      id: `bag`,
      icon: `bag`,
      msg: { zh: `背包`, en: `Bag`, ja: `バッグ` },
      bg: `linear-gradient(145deg,#ff9f5a,#c2410c)`,
    },
    {
      id: `map`,
      icon: `map`,
      msg: G.phoneMap,
      bg: `linear-gradient(145deg,#4be3a0,#139a6e)`,
    },
    {
      id: `mrt`,
      icon: `metro`,
      msg: G.phoneMrt,
      bg: `linear-gradient(145deg,#3aa3ff,#0a5bb8)`,
    },
    {
      id: `weather`,
      icon: `weather`,
      msg: G.phoneWeather,
      bg: `linear-gradient(145deg,#7fd6ff,#3a7bd5)`,
    },
    {
      id: `radio`,
      icon: `radio`,
      msg: G.phoneRadio,
      bg: `linear-gradient(145deg,#ff5fa2,#b0247a)`,
    },
    {
      id: `camera`,
      icon: `camera`,
      msg: G.phoneCamera,
      bg: `linear-gradient(145deg,#5b6275,#2a2f3b)`,
    },
    {
      id: `stats`,
      icon: `stats`,
      msg: G.phoneStats,
      bg: `linear-gradient(145deg,#b28dff,#6a3de8)`,
    },
    {
      id: `settings`,
      icon: `settings`,
      msg: G.phoneSettings,
      bg: `linear-gradient(145deg,#9aa3b5,#586074)`,
    },
    {
      id: `account`,
      icon: `user`,
      msg: { zh: `帳號`, en: `Account` },
      bg: `linear-gradient(145deg,#52c8e8,#295bba)`,
    },
    {
      id: `friends`,
      icon: `friends`,
      msg: { zh: `好友`, en: `Friends`, ja: `フレンド` },
      bg: `linear-gradient(145deg,#48d5b6,#14625b)`,
    },
    {
      id: `inbox`,
      icon: `mail`,
      msg: { zh: `收件匣`, en: `Inbox`, ja: `受信箱` },
      bg: `linear-gradient(145deg,#ffc969,#ae6531)`,
    },
    {
      id: `help`,
      icon: `help`,
      msg: G.phoneHelp,
      bg: `linear-gradient(145deg,#ff7a6b,#d13a3a)`,
    },
  ],
  Qi = !0;
Qi &&
  Zi.splice(1, 0, {
    id: `stocks`,
    icon: `stats`,
    msg: { zh: `台股交易`, en: `Stocks` },
    bg: `linear-gradient(145deg,#18a98f,#08483f)`,
  });
