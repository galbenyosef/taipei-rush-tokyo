// tokyo/assets/shared-BaQwRjes 05 — math
// Lines 2425-2766 of readable/tokyo/assets/shared-BaQwRjes.pretty.js (statement-aligned).
var re = Object.fromEntries(ee.map((e) => [e.id, e])),
  ie = [
    {
      id: `food`,
      name: g(`小吃`, `Street food`),
      hk: g(`小食`, `Snacks & meals`),
    },
    { id: `drink`, name: g(`飲料`, `Drinks`), hk: g(`飲品`, `Drinks`) },
    { id: `temple`, name: g(`廟宇`, `Temples`), hk: g(`廟宇`, `Temples`) },
    {
      id: `life`,
      name: g(`生活`, `Everyday life`),
      hk: g(`生活`, `Everyday life`),
    },
    {
      id: `street`,
      name: g(`街頭`, `On the street`),
      hk: g(`街頭`, `On the street`),
    },
    {
      id: `fun`,
      name: g(`夜市與童玩`, `Night-market games & toys`),
      hk: g(`玩意`, `Games & toys`),
    },
    {
      id: `souvenir`,
      name: g(`伴手禮`, `Souvenirs`),
      hk: g(`手信`, `Souvenirs`),
    },
    { id: `plush`, name: g(`娃娃`, `Plushies`), hk: g(`公仔`, `Plushies`) },
  ],
  ae = {
    food: g(`食物`, `Food`),
    drink: g(`飲料`, `Drinks`),
    temple: g(`神社`, `Shrines`),
    life: g(`生活`, `Everyday life`),
    street: g(`街頭`, `On the street`),
    fun: g(`玩樂`, `Games & toys`),
    souvenir: g(`伴手禮`, `Souvenirs`),
    plush: g(`景品`, `Prizes`),
  },
  oe = [
    { id: `taiwan`, name: g(`臺灣`, `Taiwan`) },
    { id: `hong-kong`, name: g(`香港`, `Hong Kong`) },
    { id: `tokyo`, name: g(`東京`, `Tokyo`) },
  ],
  se = (e) =>
    e === `tokyo` ? `tokyo` : e === `hong-kong` ? `hong-kong` : `taiwan`,
  ce = (e, t) =>
    t === `tokyo` || e.city === `tokyo`
      ? e.city === t
      : e.city === `both` ||
        (t === `hong-kong` ? e.city === `hong-kong` : e.city === `taipei`),
  S = {
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
((S.tokyo = [
  `jp-plush-shiba`,
  `jp-plush-sushi`,
  `jp-plush-maneki`,
  `jp-okashi-bag`,
  `jp-figure`,
]),
  (S.london = []),
  (S.mumbai = []),
  (S.taichung = S.taipei),
  (S.tainan = S.taipei));
var le = [
    [`mazu-amulet`, 0.15],
    [`fortune-slip`, 0.2],
    [`joss-paper`, 0.1],
    [`incense`, 0.1],
  ],
  ue = [
    [`red-envelope`, 5],
    [`wedding-invite`, 1],
    [`queue-ticket`, 1],
    [`parking-ticket`, 1],
    [`lucky-draw`, 2],
  ],
  de = 0.35,
  fe = [
    [`jp-omamori`, 0.15],
    [`jp-omikuji`, 0.2],
    [`jp-ema`, 0.1],
    [`jp-goen`, 0.1],
  ],
  pe = [
    [`jp-pochi`, 5],
    [`jp-gacha`, 2],
    [`jp-ningyoyaki`, 1],
  ],
  me = ee
    .filter(
      (e) =>
        e.shelf === `keep` &&
        (e.cat === `life` || e.cat === `street` || e.cat === `fun`) &&
        e.city !== `tokyo` &&
        !/^(mall|coupon)-/.test(e.id),
    )
    .map((e) => e.id),
  he = ee
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
  ge = /^[a-z][a-z0-9-]{1,31}$/,
  _e = 864e5;
function ve(e, t, n) {
  let r = new Date(Date.UTC(e, t, 1)).getUTCDay();
  return Date.UTC(e, t, 1 + ((7 - r) % 7) + 7 * (n - 1));
}
function ye(e) {
  let t = new Date(e).getUTCFullYear();
  return e >= ve(t, 2, 2) && e < ve(t, 10, 1);
}
function be(e) {
  let t = e?.startDate ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(e.startDate) : null;
  return !t || !e ? null : Date.UTC(+t[1], t[2] - 1, +t[3]) + e.day * _e;
}
function C(e, t) {
  let n = f[e];
  if (!n) return 8;
  if (n.dst !== `us`) return n.utc;
  let r = be(t);
  return n.utc + (r === null || ye(r) ? 1 : 0);
}
var xe = (e) => new Date(e).toISOString().slice(0, 10);
function Se(e, t) {
  if (!t || e.hour === void 0) return { ...e };
  let n = e.hour + t,
    r = e.day + Math.floor(n / 24),
    i = { ...e, hour: ((n % 24) + 24) % 24 };
  if (r < 0) {
    let t = be({ ...e, day: 0 });
    (t !== null && (i.startDate = xe(t + r * _e)), (r = 0));
  }
  return ((i.day = r), i);
}
var Ce = (e, t) => Se(e, C(t, e) - 8),
  we = (e, t) => Se(e, 8 - C(t, e)),
  Te = (e, t, n) => C(t, n) - C(e, n);
function Ee(e, t) {
  let n = e ? Ce(e, t.from) : void 0,
    r = t.depMin / 60 + t.hours,
    i = {
      day: (n?.day ?? 0) + +!!t.nextDay + Math.floor(r / 24),
      hour: ((r % 24) + 24) % 24,
    };
  return (n?.startDate && (i.startDate = n.startDate), we(i, t.from));
}
var w = { taipei: 1, "hong-kong": 4, kaohsiung: 1 };
((w.tokyo = 1 / 5),
  (w.london = 40),
  (w.taichung = 1),
  (w.tainan = 1),
  (w.seoul = 1 / 40));
var De = {};
((De.tokyo = 5), (De.seoul = 40));
var T = (e) => De[e] ?? 0;
w.mumbai = 1 / 3;
var Oe = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`],
  ke = [`bat`, `pistol`, `smg`],
  Ae = `shared`,
  E = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  D = (e) => typeof e == `number` && Number.isFinite(e),
  O = (e, t, n, r = 0) => (D(e) ? Math.max(t, Math.min(n, Math.round(e))) : r),
  k = (e) =>
    (typeof e == `string` && e.length <= 64) || D(e) || typeof e == `boolean`,
  je = 1e3,
  Me = 256,
  Ne = 0x9184e72a000,
  A = (e) => E(e) && e.shared === 1;
function j(e) {
  if (!E(e)) return 500;
  let t =
    typeof e.money == `string` && e.money.trim() !== ``
      ? Number(e.money)
      : e.money;
  return D(t) ? Math.max(0, Math.round(t)) : 500;
}
function Pe(e) {
  return E(e)
    ? (typeof e.firstPlayedAt == `string`
        ? e.firstPlayedAt
        : typeof e.startDate == `string`
          ? e.startDate
          : ``
      ).slice(0, 40)
    : ``;
}
function Fe(e = 0) {
  return {
    v: 1,
    wallet: { ntd: 0, seeds: {}, dev: {} },
    player: {},
    settings: {},
    at: { player: 0, settings: 0, clock: 0 },
    since: e,
  };
}
function M(e) {
  let t = 0;
  for (let n of Object.values(e.seeds)) t += n;
  for (let n of Object.values(e.dev)) t += n.e - n.s;
  if (e.market?.conflict) return 0;
  for (let n of Object.values(e.market?.lanes ?? {})) t += n.credit - n.debit;
  return t;
}
function N(e, t) {
  let n = T(t);
  return n
    ? Math.floor(Math.max(0, D(e) ? e : 0)) * n
    : t === `mumbai`
      ? Math.floor(Math.max(0, D(e) ? e : 0)) * 3
      : Math.floor(Math.max(0, D(e) ? e : 0) / w[t]);
}
function P(e, t) {
  let n = T(t);
  return n
    ? Math.floor(Math.max(0, D(e) ? e : 0) / n)
    : t === `mumbai`
      ? Math.floor(Math.max(0, D(e) ? e : 0) / 3)
      : e * w[t];
}
function Ie(e) {
  let t = e.wallet,
    n = Object.keys(t.seeds);
  return n.length === 1 &&
    n[0] === `start` &&
    t.seeds.start === F(`mumbai`) &&
    Object.values(t.dev).every((e) => !e.e && !e.s) &&
    !Object.keys(t.market?.lanes ?? {}).length
    ? 500 - F(`mumbai`) * 3
    : 0;
}
function Le(e) {
  return E(e) ? O(e.rupeeChange, 0, 2, 0) : 0;
}
function Re(e, t) {
  let n = T(t);
  return n
    ? E(e)
      ? O(e.yenChange, 0, n - 1, 0)
      : 0
    : t === `mumbai`
      ? Le(e)
      : 0;
}
function ze(e) {
  return E(e) ? O(e.yenChange, 0, 4, 0) : 0;
}
function F(e) {
  return e === `tokyo`
    ? 500
    : e === `seoul`
      ? 1250
      : e === `mumbai`
        ? 166
        : 500 * w[e];
}
function I(e, t, n) {
  let r = t.slice(0, 80);
  return (
    !Object.prototype.hasOwnProperty.call(e.wallet.seeds, r) &&
    ((e.wallet.seeds[r] = Math.max(0, Math.round(D(n) ? n : 0))),
    (e.wallet.ntd = Math.max(0, M(e.wallet))),
    !0)
  );
}
function Be(e, t, n, r) {
  let i = Math.round(D(n) ? n : 0);
  if (!i) return 0;
  let a = (e.wallet.dev[t] ??= { e: 0, s: 0, at: r }),
    o = i;
  if (i > 0) a.e += i;
  else {
    let t = Math.min(-i, Math.max(0, M(e.wallet)));
    ((a.s += t), (o = t ? -t : 0));
  }
  return ((a.at = r), (e.wallet.ntd = Math.max(0, M(e.wallet))), o);
}
function L(e) {
  if (!E(e)) return;
  let t = (e) =>
      typeof e == `string` && /^[a-z][\w-]{0,23}$/i.test(e) && e !== `fists`,
    n = Array.isArray(e.owned)
      ? [...new Set(e.owned.filter(t))].slice(0, 16)
      : [],
    r = (e, n) => {
      let r = {};
      if (E(e))
        for (let [i, a] of Object.entries(e))
          t(i) && D(a) && (r[i] = O(a, 0, n));
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
    armor: O(e.armor, 0, 100),
    weapon: i,
  };
}
