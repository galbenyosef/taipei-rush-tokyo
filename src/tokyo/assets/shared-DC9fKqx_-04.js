// tokyo/assets/shared-DC9fKqx_ 04 — math
// Lines 2174-2522 of readable/tokyo/assets/shared-DC9fKqx_.pretty.js (statement-aligned).
var te = Object.fromEntries(b.map((e) => [e.id, e])),
  ne = [
    {
      id: `food`,
      name: m(`小吃`, `Street food`),
      hk: m(`小食`, `Snacks & meals`),
    },
    { id: `drink`, name: m(`飲料`, `Drinks`), hk: m(`飲品`, `Drinks`) },
    { id: `temple`, name: m(`廟宇`, `Temples`), hk: m(`廟宇`, `Temples`) },
    {
      id: `life`,
      name: m(`生活`, `Everyday life`),
      hk: m(`生活`, `Everyday life`),
    },
    {
      id: `street`,
      name: m(`街頭`, `On the street`),
      hk: m(`街頭`, `On the street`),
    },
    {
      id: `fun`,
      name: m(`夜市與童玩`, `Night-market games & toys`),
      hk: m(`玩意`, `Games & toys`),
    },
    {
      id: `souvenir`,
      name: m(`伴手禮`, `Souvenirs`),
      hk: m(`手信`, `Souvenirs`),
    },
    { id: `plush`, name: m(`娃娃`, `Plushies`), hk: m(`公仔`, `Plushies`) },
  ],
  re = {
    food: m(`食物`, `Food`),
    drink: m(`飲料`, `Drinks`),
    temple: m(`神社`, `Shrines`),
    life: m(`生活`, `Everyday life`),
    street: m(`街頭`, `On the street`),
    fun: m(`玩樂`, `Games & toys`),
    souvenir: m(`伴手禮`, `Souvenirs`),
    plush: m(`景品`, `Prizes`),
  },
  ie = [
    { id: `taiwan`, name: m(`臺灣`, `Taiwan`) },
    { id: `hong-kong`, name: m(`香港`, `Hong Kong`) },
    { id: `tokyo`, name: m(`東京`, `Tokyo`) },
  ],
  ae = (e) =>
    e === `tokyo` ? `tokyo` : e === `hong-kong` ? `hong-kong` : `taiwan`,
  oe = (e, t) =>
    t === `tokyo` || e.city === `tokyo`
      ? e.city === t
      : e.city === `both` ||
        (t === `hong-kong` ? e.city === `hong-kong` : e.city === `taipei`),
  se = {
    taipei: [
      `plush-third-prince`,
      `plush-boba`,
      `plush-black-bear`,
      `plush-leopard-cat`,
      `plush-cutlet`,
      `plush-blue-magpie`,
      `plush-pangolin`,
      `plush-macaque`,
    ],
    "hong-kong": [
      `plush-tram`,
      `plush-pineapple-bun`,
      `plush-siu-mai`,
      `plush-minibus`,
      `plush-fish-ball`,
    ],
    kaohsiung: [
      `plush-third-prince`,
      `plush-boba`,
      `plush-black-bear`,
      `plush-leopard-cat`,
      `plush-cutlet`,
      `plush-blue-magpie`,
      `plush-pangolin`,
      `plush-macaque`,
    ],
  };
se.tokyo = [
  `jp-plush-shiba`,
  `jp-plush-sushi`,
  `jp-plush-maneki`,
  `jp-okashi-bag`,
  `jp-figure`,
];
var ce = [
    [`mazu-amulet`, 0.15],
    [`fortune-slip`, 0.2],
    [`joss-paper`, 0.1],
    [`incense`, 0.1],
  ],
  le = [
    [`red-envelope`, 5],
    [`wedding-invite`, 1],
    [`queue-ticket`, 1],
    [`parking-ticket`, 1],
    [`lucky-draw`, 2],
  ],
  ue = 0.35,
  de = [
    [`jp-omamori`, 0.15],
    [`jp-omikuji`, 0.2],
    [`jp-ema`, 0.1],
    [`jp-goen`, 0.1],
  ],
  fe = [
    [`jp-pochi`, 5],
    [`jp-gacha`, 2],
    [`jp-ningyoyaki`, 1],
  ],
  pe = b
    .filter(
      (e) =>
        e.shelf === `keep` &&
        (e.cat === `life` || e.cat === `street` || e.cat === `fun`) &&
        e.city !== `tokyo`,
    )
    .map((e) => e.id),
  me = b
    .filter(
      (e) =>
        e.city === `tokyo` &&
        e.shelf === `keep` &&
        (e.cat === `life` ||
          e.cat === `street` ||
          e.cat === `fun` ||
          e.cat === `souvenir`) &&
        e.id !== `jp-receipt`,
    )
    .map((e) => e.id),
  he = /^[a-z][a-z0-9-]{1,31}$/,
  x = { taipei: 1, "hong-kong": 4, kaohsiung: 1 };
x.tokyo = 1 / 5;
var ge = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`],
  _e = [`bat`, `pistol`, `smg`],
  ve = `shared`,
  S = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  C = (e) => typeof e == `number` && Number.isFinite(e),
  w = (e, t, n, r = 0) => (C(e) ? Math.max(t, Math.min(n, Math.round(e))) : r),
  T = (e) =>
    (typeof e == `string` && e.length <= 64) || C(e) || typeof e == `boolean`,
  ye = 1e3,
  be = 256,
  E = 0x9184e72a000,
  D = (e) => S(e) && e.shared === 1;
function O(e) {
  if (!S(e)) return 500;
  let t =
    typeof e.money == `string` && e.money.trim() !== ``
      ? Number(e.money)
      : e.money;
  return C(t) ? Math.max(0, Math.round(t)) : 500;
}
function xe(e) {
  return S(e)
    ? (typeof e.firstPlayedAt == `string`
        ? e.firstPlayedAt
        : typeof e.startDate == `string`
          ? e.startDate
          : ``
      ).slice(0, 40)
    : ``;
}
function Se(e = 0) {
  return {
    v: 1,
    wallet: { ntd: 0, seeds: {}, dev: {} },
    player: {},
    settings: {},
    at: { player: 0, settings: 0, clock: 0 },
    since: e,
  };
}
function k(e) {
  let t = 0;
  for (let n of Object.values(e.seeds)) t += n;
  for (let n of Object.values(e.dev)) t += n.e - n.s;
  if (e.market?.conflict) return 0;
  for (let n of Object.values(e.market?.lanes ?? {})) t += n.credit - n.debit;
  return t;
}
function A(e, t) {
  return t === `tokyo`
    ? Math.floor(Math.max(0, C(e) ? e : 0)) * 5
    : Math.floor(Math.max(0, C(e) ? e : 0) / x[t]);
}
function j(e, t) {
  return t === `tokyo` ? Math.floor(Math.max(0, C(e) ? e : 0) / 5) : e * x[t];
}
function M(e) {
  return S(e) ? w(e.yenChange, 0, 4, 0) : 0;
}
function Ce(e) {
  return e === `tokyo` ? 500 : 500 * x[e];
}
function N(e, t, n) {
  let r = t.slice(0, 80);
  return (
    !Object.prototype.hasOwnProperty.call(e.wallet.seeds, r) &&
    ((e.wallet.seeds[r] = Math.max(0, Math.round(C(n) ? n : 0))),
    (e.wallet.ntd = Math.max(0, k(e.wallet))),
    !0)
  );
}
function we(e, t, n, r) {
  let i = Math.round(C(n) ? n : 0);
  if (!i) return 0;
  let a = (e.wallet.dev[t] ??= { e: 0, s: 0, at: r }),
    o = i;
  if (i > 0) a.e += i;
  else {
    let t = Math.min(-i, Math.max(0, k(e.wallet)));
    ((a.s += t), (o = t ? -t : 0));
  }
  return ((a.at = r), (e.wallet.ntd = Math.max(0, k(e.wallet))), o);
}
function P(e) {
  if (!S(e)) return;
  let t = (e) =>
      typeof e == `string` && /^[a-z][\w-]{0,23}$/i.test(e) && e !== `fists`,
    n = Array.isArray(e.owned)
      ? [...new Set(e.owned.filter(t))].slice(0, 16)
      : [],
    r = (e, n) => {
      let r = {};
      if (S(e))
        for (let [i, a] of Object.entries(e))
          t(i) && C(a) && (r[i] = w(a, 0, n));
      return r;
    },
    i =
      typeof e.weapon == `string` &&
      (e.weapon === `fists` || n.includes(e.weapon))
        ? e.weapon
        : `fists`;
  return {
    owned: n,
    ammo: r(e.ammo, 99999),
    mag: r(e.mag, 9999),
    armor: w(e.armor, 0, 100),
    weapon: i,
  };
}
function F(e) {
  let t = {};
  if (!S(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 64) break;
    n.length > 0 && n.length <= 40 && T(r) && (t[n] = r);
  }
  return (t.lang === `ja` && delete t.lang, t);
}
function I(e) {
  if (!S(e)) return;
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 220) break;
    he.test(n) && C(r) && r >= 1 && (t[n] = w(r, 1, 99));
  }
  return t;
}
function Te(e, t, n) {
  let r = { ...(e ?? {}) },
    i = n ?? {};
  for (let e of new Set([...Object.keys(t), ...Object.keys(i)])) {
    let n = (t[e] ?? 0) - (i[e] ?? 0);
    if (!n) continue;
    let a = Math.max(0, Math.min(99, (r[e] ?? 0) + n));
    a ? (r[e] = a) : delete r[e];
  }
  return I(r) ?? {};
}
function L(e) {
  if (!Array.isArray(e)) return;
  let t = new Set();
  for (let n of e) {
    if (t.size >= 256) break;
    typeof n == `string` && he.test(n) && t.add(n);
  }
  return [...t];
}
var R = (e, t) => L([...(e ?? []), ...(t ?? [])]) ?? [];
function z(e) {
  if (!S(e)) return;
  let t =
    typeof e.startDate == `string` && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
      ? e.startDate
      : void 0;
  if (!C(e.hour) && !t) return;
  let n = { day: w(e.day, 0, 1e6) };
  return (
    C(e.hour) && (n.hour = ((e.hour % 24) + 24) % 24),
    t && (n.startDate = t),
    n
  );
}
function B(e) {
  if (!S(e) || !S(e.wallet)) return;
  let n = e.wallet,
    r = {};
  if (S(n.seeds))
    for (let [e, t] of Object.entries(n.seeds)) {
      if (Object.keys(r).length >= ye) break;
      e.length > 0 && e.length <= 80 && C(t) && (r[e] = w(t, 0, E));
    }
  let i = {};
  if (S(n.dev))
    for (let [e, t] of Object.entries(n.dev)) {
      if (Object.keys(i).length >= be) break;
      /^[\w-]{1,40}$/.test(e) &&
        S(t) &&
        (i[e] = {
          e: w(t.e, 0, E),
          s: w(t.s, 0, E),
          at: w(t.at, 0, 0x38d7ea4c68000),
        });
    }
  let a = S(e.player) ? e.player : {},
    o = {};
  (t(a.character) && (o.character = a.character),
    T(a.outfit) && (o.outfit = a.outfit));
  let s = P(a.loadout);
  s && (o.loadout = s);
  let c = S(e.at) ? e.at : {},
    l = {
      v: 1,
      wallet: { ntd: 0, seeds: r, dev: i },
      player: o,
      settings: F(e.settings),
      at: {
        player: w(c.player, 0, 0x38d7ea4c68000),
        settings: w(c.settings, 0, 0x38d7ea4c68000),
        clock: w(c.clock, 0, 0x38d7ea4c68000),
      },
      since: w(e.since, 0, 0x38d7ea4c68000),
    },
    u = I(e.bag);
  u && ((l.bag = u), (l.at.bag = w(c.bag, 0, 0x38d7ea4c68000)));
  let d = L(e.book);
  d?.length && (l.book = d);
  let f = Ee(n.market);
  (f && (l.wallet.market = f), (l.wallet.ntd = Math.max(0, k(l.wallet))));
  let p = z(e.clock);
  return (p && (l.clock = p), e.adopted === !0 && (l.adopted = !0), l);
}
