// tokyo/assets/tokyo-_rNKO_Y7 16 — icon
// Lines 6771-6954 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function di(e, t, n, r, i, a, o, s, c) {
  let l = e,
    u = r.filter((e) => e.completed).length,
    d = V(
      `div`,
      `st-ch${i ? `` : ` locked`}${u === r.length && r.length ? ` done` : ``}`,
      t,
    ),
    f = V(`div`, `st-ch-h`, d);
  (V(`b`, ``, f, l.t(n)), V(`span`, `st-ch-n`, f, `${u}/${r.length}`));
  let p = V(`div`, `st-dots`, d);
  for (let e of r) {
    let t = o.get(e.id),
      n = V(
        `button`,
        `st-m${e.completed ? ` ok` : ``}${e.id === s ? ` live` : ``}${t?.available && !e.completed ? ` open` : ``}`,
        p,
      );
    ((n.type = `button`),
      (n.dataset.nav = `1`),
      (n.dataset.key = `sm-${e.id}`),
      V(`i`, ``, n, e.completed ? `✓` : (t?.glyph ?? ``)),
      V(`span`, ``, n, i || e.completed ? l.t(e.title) : `？？？`),
      n.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t && (l.sfx(`ui_click`), c.pick(t)));
      }));
  }
  if (a) {
    let e = l.t(a);
    e && e !== `？？？` && e !== `???` && V(`p`, `st-recap`, d, e);
  }
}
function fi(e) {
  let t = ni(e),
    n = new Set(e.ctx.state.data.completedMissions ?? []),
    r = (e) => {
      let r = t.filter((t) => t.category === e);
      return [r.filter((e) => n.has(e.id) || ii(e)).length, r.length];
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
function pi(e, t) {
  let n = e,
    r = fi(e),
    i = V(`div`, `cmp`, t),
    a = n.region.noProgress;
  if (
    a &&
    !(r.story[1] + r.side[1] + r.culture[1] + r.race[1] + r.jobs[1] + r.cats[1])
  )
    return (V(`div`, `cmp-top`, i, n.t(a)), i);
  let o = V(`div`, `cmp-top`, i);
  (V(`span`, ``, o, n.t({ zh: `遊戲完成度`, en: `Game completion` })),
    V(`b`, ``, o, `${r.pct}%`));
  let s = V(`div`, `cmp-bar`, i);
  V(`i`, ``, s).style.transform = `scaleX(${r.pct / 100})`;
  let c = V(`div`, `cmp-rows`, i),
    l = (e, t) => {
      if (!t[1]) return;
      let r = V(`div`, `cmp-row`, c);
      ((r.dataset.nav = `1`),
        V(`span`, ``, r, n.t(e)),
        V(`b`, ``, r, `${t[0]} / ${t[1]}`));
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
var mi = [
    {
      id: `missions`,
      icon: `missions`,
      msg: J.phoneMissions,
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
      msg: J.phoneMap,
      bg: `linear-gradient(145deg,#4be3a0,#139a6e)`,
    },
    {
      id: `mrt`,
      icon: `metro`,
      msg: J.phoneMrt,
      bg: `linear-gradient(145deg,#3aa3ff,#0a5bb8)`,
    },
    {
      id: `weather`,
      icon: `weather`,
      msg: J.phoneWeather,
      bg: `linear-gradient(145deg,#7fd6ff,#3a7bd5)`,
    },
    {
      id: `radio`,
      icon: `radio`,
      msg: J.phoneRadio,
      bg: `linear-gradient(145deg,#ff5fa2,#b0247a)`,
    },
    {
      id: `camera`,
      icon: `camera`,
      msg: J.phoneCamera,
      bg: `linear-gradient(145deg,#5b6275,#2a2f3b)`,
    },
    {
      id: `stats`,
      icon: `stats`,
      msg: J.phoneStats,
      bg: `linear-gradient(145deg,#b28dff,#6a3de8)`,
    },
    {
      id: `settings`,
      icon: `settings`,
      msg: J.phoneSettings,
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
      msg: J.phoneHelp,
      bg: `linear-gradient(145deg,#ff7a6b,#d13a3a)`,
    },
  ],
  hi = !0;
hi &&
  mi.splice(1, 0, {
    id: `stocks`,
    icon: `stats`,
    msg: { zh: `台股交易`, en: `Stocks` },
    bg: `linear-gradient(145deg,#18a98f,#08483f)`,
  });
