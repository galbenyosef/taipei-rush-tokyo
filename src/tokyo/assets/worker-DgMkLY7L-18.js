// tokyo/assets/worker-DgMkLY7L 18 — keys
// Lines 6971-7261 of readable/tokyo/assets/worker-DgMkLY7L.pretty.js (statement-aligned).
function cn(e) {
  let t = (e, t, n, r, i, a = `lead`) => ({
      t: e,
      m: t,
      d: n,
      v: r,
      inst: i,
      ch: a,
    }),
    n = (e, n, r = 0.9) => t(e, 60, 1, r, `drum:` + n, `drums`);
  switch (e) {
    case `pop`:
      return [
        t(0, 79, 0.25, 0.8, `vox`),
        t(0.25, 81, 0.25, 0.8, `vox`),
        t(0.5, 84, 1.6, 0.9, `vox`),
        t(0, 84, 0.3, 0.5, `marimba`),
        t(0.25, 88, 0.3, 0.5, `marimba`),
        t(0.5, 91, 1, 0.55, `marimba`),
        t(0.5, 60, 2, 0.45, `pad`, `pad`),
        t(0.5, 64, 2, 0.45, `pad`, `pad`),
        t(0.5, 67, 2, 0.45, `pad`, `pad`),
        n(0.5, `crash`, 0.6),
        n(0.5, `kick`),
      ];
    case `lofi`:
      return [
        t(0, 64, 2, 0.6, `epiano`, `keys`),
        t(0.04, 67, 2, 0.55, `epiano`, `keys`),
        t(0.08, 71, 2, 0.55, `epiano`, `keys`),
        t(0.12, 74, 2, 0.55, `epiano`, `keys`),
        t(0.5, 79, 0.5, 0.55, `musicbox`),
        t(0.75, 81, 0.5, 0.55, `musicbox`),
        t(1, 76, 1, 0.55, `musicbox`),
        n(0, `kick_lofi`, 0.7),
      ];
    case `edm`:
      return [
        t(0, 81, 0.25, 0.9, `suona`),
        t(0.25, 84, 0.25, 0.9, `suona`),
        t(0.5, 86, 0.25, 0.9, `suona`),
        t(0.75, 88, 1.2, 0.95, `suona`),
        n(0, `impact`, 0.8),
        n(0, `gong`, 0.8),
        n(0, `kick`),
        n(0.75, `cymbal_bo`, 0.6),
        n(1.25, `vox_hey`, 0.9),
      ];
    case `rock`:
      return [
        t(0, 40, 0.45, 0.9, `power`, `keys`),
        t(0.5, 43, 0.45, 0.9, `power`, `keys`),
        t(1, 45, 1.8, 1, `power`, `keys`),
        t(1, 76, 1.5, 0.7, `distlead`),
        n(0, `kick`),
        n(0.5, `snare`, 0.7),
        n(0.75, `snare`, 0.8),
        n(1, `crash`, 0.8),
        n(1, `kick`),
      ];
    default:
      return [
        t(0, 62, 1.5, 0.55, `harpsi`, `keys`),
        t(0.125, 66, 1.5, 0.55, `harpsi`, `keys`),
        t(0.25, 69, 1.5, 0.55, `harpsi`, `keys`),
        t(0.375, 74, 1.5, 0.55, `harpsi`, `keys`),
        t(0.5, 78, 1.5, 0.6, `harpsi`, `keys`),
        t(0.5, 62, 2.2, 0.5, `strings`, `pad`),
        t(0.5, 66, 2.2, 0.5, `strings`, `pad`),
        t(0.5, 69, 2.2, 0.5, `strings`, `pad`),
      ];
  }
}
function ln(e, t, n, r, i, a, o, s, c, l) {
  let u = /* @__PURE__ */ new Map();
  return {
    id: e,
    name: { zh: t, en: n },
    genre: r,
    freq: i,
    fx: a,
    trim: o,
    mix: s,
    ids: l,
    item(t) {
      let n = u.get(t);
      return (
        n ||
          ((n =
            t % 3 == 1
              ? sn(e, t, l[t % l.length])
              : c(Math.floor((t * 2) / 3))),
          u.set(t, n),
          u.size > 12 && u.delete(u.keys().next().value)),
        n
      );
    },
  };
}
const un = [
  ln(
    `pop`,
    `臺北流行 T-POP`,
    `Taipei Pop T-POP`,
    `mandopop`,
    `FM 90.6`,
    `none`,
    0.55,
    { lead: 4, bass: 0.6, keys: 1.1 },
    zt,
    [
      { zh: `臺北流行，九十點六！`, en: `T-POP 90.6 — Taipei Pop!` },
      { zh: `下雨天也要聽好歌，臺北流行。`, en: `Rain or shine, Taipei Pop.` },
      {
        zh: `提醒您，騎車要戴安全帽喔。`,
        en: `Friendly reminder: helmets on, scooter riders.`,
      },
    ],
  ),
  ln(
    `lofi`,
    `夜市 Lo-Fi`,
    `Night Market Lo-Fi`,
    `lofi hip-hop`,
    `FM 88.4`,
    `lofi`,
    0.62,
    { keys: 1.45, bass: 0.65, lead: 1.1 },
    Ut,
    [
      {
        zh: `夜市 Lo-Fi，陪你慢慢逛。`,
        en: `Night Market Lo-Fi. Take it slow.`,
      },
      {
        zh: `來一碗豆花，聽一首慢歌。`,
        en: `Grab a douhua, stay for a slow one.`,
      },
    ],
  ),
  ln(
    `edm`,
    `電音三太子`,
    `Neon Gods EDM`,
    `temple EDM`,
    `FM 101.6`,
    `none`,
    0.5,
    { keys: 2.8, perc: 0.7, lead: 1.3, pad: 1.3 },
    qt,
    [
      { zh: `電音三太子，跳起來！`, en: `Neon Gods EDM — jump!` },
      { zh: `廟口今晚最嗨！`, en: `The temple square is lit tonight!` },
    ],
  ),
  ln(
    `rock`,
    `台客搖滾`,
    `Taike Rock`,
    `taike rock`,
    `FM 95.8`,
    `none`,
    0.36,
    { keys: 3.4, bass: 0.6, lead: 2.8 },
    Zt,
    [
      { zh: `台客搖滾，催落去！`, en: `Taike Rock — full throttle!` },
      { zh: `油門催下去，音量開到底！`, en: `Throttle open, volume up!` },
      {
        zh: `去臺北狂飆！台客搖滾陪你一路催！`,
        en: `Tear up Taipei — Taike Rock rides with you!`,
      },
    ],
  ),
  ln(
    `classical`,
    `古典音樂台`,
    `Classical`,
    `classical`,
    `FM 106.2`,
    `hall`,
    1.35,
    { keys: 2.5, pad: 1.2 },
    (e) => {
      let t = e % an.length,
        n = on.get(t);
      return (n || on.set(t, (n = an[t]())), n);
    },
    [
      { zh: `古典音樂台，一零六點二。`, en: `Classical 106.2.` },
      {
        zh: `聽到給愛麗絲，記得倒垃圾。`,
        en: `When you hear Für Elise — take out the trash.`,
      },
    ],
  ),
];
function dn(e) {
  if (e.inst.startsWith(`drum:`)) return `drum/` + e.inst.slice(5);
  if (e.inst.startsWith(`sfx:`)) return ``;
  let t = Ee[e.inst];
  if (!t) return ``;
  let n = t.roots[0];
  for (let r of t.roots) Math.abs(r - e.m) < Math.abs(n - e.m) && (n = r);
  return `inst/${e.inst}/${n}`;
}
function fn(e, t) {
  let n = un[e];
  if (!n) return [];
  let r = /* @__PURE__ */ new Set(),
    i = [],
    a = [],
    o = (e) => {
      let t = dn(e);
      t && !r.has(t) && (r.add(t), (t.startsWith(`drum/`) ? i : a).push(t));
    };
  for (let e of cn(n.id)) o(e);
  for (let e of t) {
    let t = n.item(e);
    for (let e = 0; e < t.bars; e++) for (let n of t.bar(e)) o(n);
  }
  return (n.fx === `lofi` && a.unshift(`amb/vinyl`), [...i, ...a]);
}
const pn = (e, t = []) => self.postMessage(e, t),
  $ = [];
let mn = !1;
function hn(e, t, n, r) {
  let i = performance.now();
  for (let r of e) {
    let e = performance.now();
    try {
      let i = yt(r, t, n);
      pn(
        { type: `buf`, id: r, sr: i.sr, ch: i.ch, ms: performance.now() - e },
        i.ch.map((e) => e.buffer),
      );
    } catch (e) {
      pn({ type: `err`, id: r, msg: String(e?.message ?? e) });
    }
  }
  pn({ type: `done`, ms: performance.now() - i, count: e.length, tag: r });
}
function gn() {
  if (mn) return;
  mn = !0;
  let e = () => {
    let t = $.shift();
    if (!t) {
      mn = !1;
      return;
    }
    if (t.type === `render`)
      hn(
        t.ids ? vt(t.ids, t.quality) : _t(t.quality).map((e) => e.id),
        t.quality,
        !!t.mobile,
        t.tag ?? `core`,
      );
    else {
      let e = fn(t.station, t.ks);
      pn({ type: `needs`, station: t.station, ks: t.ks, ids: e });
      let n = new Set(t.have);
      hn(
        e.filter((e) => !n.has(e)),
        t.quality,
        !!t.mobile,
        `radio:` + t.station,
      );
    }
    setTimeout(e, 0);
  };
  e();
}
self.onmessage = (e) => {
  let t = e.data;
  if (!(!t || (t.type !== `render` && t.type !== `radio`))) {
    if (t.type === `radio`) {
      for (let e = $.length - 1; e >= 0; e--) {
        let n = $[e];
        n.type === `radio` &&
          n.station !== t.station &&
          ($.splice(e, 1),
          pn({ type: `done`, ms: 0, count: 0, tag: `dropped` }));
      }
      let e = 0;
      for (; e < $.length && $[e].type === `radio`;) e++;
      $.splice(e, 0, t);
    } else $.push(t);
    gn();
  }
};
