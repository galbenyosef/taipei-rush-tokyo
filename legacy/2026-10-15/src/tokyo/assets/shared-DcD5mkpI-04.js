// tokyo/assets/shared-DcD5mkpI 04 — math
// Lines 2129-2478 of readable/tokyo/assets/shared-DcD5mkpI.pretty.js (statement-aligned).
var te = Object.fromEntries(v.map((e) => [e.id, e])),
  ne = [
    {
      id: `food`,
      name: f(`小吃`, `Street food`),
      hk: f(`小食`, `Snacks & meals`),
    },
    { id: `drink`, name: f(`飲料`, `Drinks`), hk: f(`飲品`, `Drinks`) },
    { id: `temple`, name: f(`廟宇`, `Temples`), hk: f(`廟宇`, `Temples`) },
    {
      id: `life`,
      name: f(`生活`, `Everyday life`),
      hk: f(`生活`, `Everyday life`),
    },
    {
      id: `street`,
      name: f(`街頭`, `On the street`),
      hk: f(`街頭`, `On the street`),
    },
    {
      id: `fun`,
      name: f(`夜市與童玩`, `Night-market games & toys`),
      hk: f(`玩意`, `Games & toys`),
    },
    {
      id: `souvenir`,
      name: f(`伴手禮`, `Souvenirs`),
      hk: f(`手信`, `Souvenirs`),
    },
    { id: `plush`, name: f(`娃娃`, `Plushies`), hk: f(`公仔`, `Plushies`) },
  ],
  re = {
    food: f(`食物`, `Food`),
    drink: f(`飲料`, `Drinks`),
    temple: f(`神社`, `Shrines`),
    life: f(`生活`, `Everyday life`),
    street: f(`街頭`, `On the street`),
    fun: f(`玩樂`, `Games & toys`),
    souvenir: f(`伴手禮`, `Souvenirs`),
    plush: f(`景品`, `Prizes`),
  },
  ie = [
    { id: `taiwan`, name: f(`臺灣`, `Taiwan`) },
    { id: `hong-kong`, name: f(`香港`, `Hong Kong`) },
    { id: `tokyo`, name: f(`東京`, `Tokyo`) },
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
  pe = v
    .filter(
      (e) =>
        e.shelf === `keep` &&
        (e.cat === `life` || e.cat === `street` || e.cat === `fun`) &&
        e.city !== `tokyo`,
    )
    .map((e) => e.id),
  me = v
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
  y = { taipei: 1, "hong-kong": 4, kaohsiung: 1 };
y.tokyo = 1 / 5;
var ge = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`],
  _e = [`bat`, `pistol`, `smg`],
  ve = `shared`,
  b = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  x = (e) => typeof e == `number` && Number.isFinite(e),
  S = (e, t, n, r = 0) => (x(e) ? Math.max(t, Math.min(n, Math.round(e))) : r),
  C = (e) =>
    (typeof e == `string` && e.length <= 64) || x(e) || typeof e == `boolean`,
  ye = 1e3,
  be = 256,
  w = 0x9184e72a000,
  T = (e) => b(e) && e.shared === 1;
function E(e) {
  if (!b(e)) return 500;
  let t =
    typeof e.money == `string` && e.money.trim() !== ``
      ? Number(e.money)
      : e.money;
  return x(t) ? Math.max(0, Math.round(t)) : 500;
}
function xe(e) {
  return b(e)
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
function D(e) {
  let t = 0;
  for (let n of Object.values(e.seeds)) t += n;
  for (let n of Object.values(e.dev)) t += n.e - n.s;
  if (e.market?.conflict) return 0;
  for (let n of Object.values(e.market?.lanes ?? {})) t += n.credit - n.debit;
  return t;
}
function O(e, t) {
  return t === `tokyo`
    ? Math.floor(Math.max(0, x(e) ? e : 0)) * 5
    : Math.floor(Math.max(0, x(e) ? e : 0) / y[t]);
}
function k(e, t) {
  return t === `tokyo` ? Math.floor(Math.max(0, x(e) ? e : 0) / 5) : e * y[t];
}
function A(e) {
  return b(e) ? S(e.yenChange, 0, 4, 0) : 0;
}
function Ce(e) {
  return e === `tokyo` ? 500 : 500 * y[e];
}
function j(e, t, n) {
  let r = t.slice(0, 80);
  return (
    !Object.prototype.hasOwnProperty.call(e.wallet.seeds, r) &&
    ((e.wallet.seeds[r] = Math.max(0, Math.round(x(n) ? n : 0))),
    (e.wallet.ntd = Math.max(0, D(e.wallet))),
    !0)
  );
}
function we(e, t, n, r) {
  let i = Math.round(x(n) ? n : 0);
  if (!i) return 0;
  let a = (e.wallet.dev[t] ??= { e: 0, s: 0, at: r }),
    o = i;
  if (i > 0) a.e += i;
  else {
    let t = Math.min(-i, Math.max(0, D(e.wallet)));
    ((a.s += t), (o = t ? -t : 0));
  }
  return ((a.at = r), (e.wallet.ntd = Math.max(0, D(e.wallet))), o);
}
function M(e) {
  if (!b(e)) return;
  let t = (e) =>
      typeof e == `string` && /^[a-z][\w-]{0,23}$/i.test(e) && e !== `fists`,
    n = Array.isArray(e.owned)
      ? [...new Set(e.owned.filter(t))].slice(0, 16)
      : [],
    r = (e, n) => {
      let r = {};
      if (b(e))
        for (let [i, a] of Object.entries(e))
          t(i) && x(a) && (r[i] = S(a, 0, n));
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
    armor: S(e.armor, 0, 100),
    weapon: i,
  };
}
function N(e) {
  let t = {};
  if (!b(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 64) break;
    n.length > 0 && n.length <= 40 && C(r) && (t[n] = r);
  }
  return (t.lang === `ja` && delete t.lang, t);
}
function P(e) {
  if (!b(e)) return;
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 220) break;
    he.test(n) && x(r) && r >= 1 && (t[n] = S(r, 1, 99));
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
  return P(r) ?? {};
}
function F(e) {
  if (!Array.isArray(e)) return;
  let t = new Set();
  for (let n of e) {
    if (t.size >= 256) break;
    typeof n == `string` && he.test(n) && t.add(n);
  }
  return [...t];
}
var I = (e, t) => F([...(e ?? []), ...(t ?? [])]) ?? [];
function L(e) {
  if (!b(e)) return;
  let t =
    typeof e.startDate == `string` && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
      ? e.startDate
      : void 0;
  if (!x(e.hour) && !t) return;
  let n = { day: S(e.day, 0, 1e6) };
  return (
    x(e.hour) && (n.hour = ((e.hour % 24) + 24) % 24),
    t && (n.startDate = t),
    n
  );
}
function R(e) {
  if (!b(e) || !b(e.wallet)) return;
  let t = e.wallet,
    n = {};
  if (b(t.seeds))
    for (let [e, r] of Object.entries(t.seeds)) {
      if (Object.keys(n).length >= ye) break;
      e.length > 0 && e.length <= 80 && x(r) && (n[e] = S(r, 0, w));
    }
  let r = {};
  if (b(t.dev))
    for (let [e, n] of Object.entries(t.dev)) {
      if (Object.keys(r).length >= be) break;
      /^[\w-]{1,40}$/.test(e) &&
        b(n) &&
        (r[e] = {
          e: S(n.e, 0, w),
          s: S(n.s, 0, w),
          at: S(n.at, 0, 0x38d7ea4c68000),
        });
    }
  let i = b(e.player) ? e.player : {},
    a = {};
  ((i.character === `jie` || i.character === `wen`) &&
    (a.character = i.character),
    C(i.outfit) && (a.outfit = i.outfit));
  let o = M(i.loadout);
  o && (a.loadout = o);
  let s = b(e.at) ? e.at : {},
    c = {
      v: 1,
      wallet: { ntd: 0, seeds: n, dev: r },
      player: a,
      settings: N(e.settings),
      at: {
        player: S(s.player, 0, 0x38d7ea4c68000),
        settings: S(s.settings, 0, 0x38d7ea4c68000),
        clock: S(s.clock, 0, 0x38d7ea4c68000),
      },
      since: S(e.since, 0, 0x38d7ea4c68000),
    },
    l = P(e.bag);
  l && ((c.bag = l), (c.at.bag = S(s.bag, 0, 0x38d7ea4c68000)));
  let u = F(e.book);
  u?.length && (c.book = u);
  let d = Ee(t.market);
  (d && (c.wallet.market = d), (c.wallet.ntd = Math.max(0, D(c.wallet))));
  let f = L(e.clock);
  return (f && (c.clock = f), e.adopted === !0 && (c.adopted = !0), c);
}
