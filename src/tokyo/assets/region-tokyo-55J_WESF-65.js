// tokyo/assets/region-tokyo-55J_WESF 65 — food
// Lines 28755-29091 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Pd = (e) => (So(e) ? L(e) : e),
  Qoe = {
    konbini: [V.CONV, 2787914, 16777215, 1, ``, `24H`],
    drugstore: [V.DRUG, 16769280, 1908872, 1, ``, `09:00-22:00`],
    gyudon: [V.NOODLE, 15762176, 16777215, 0.9, `e`, `24H`],
    burger: [V.FOOD, 14090255, 16765952, 0.9, `e`, `07:00-23:00`],
    hundred: [V.GOODS, 15073298, 16777215, 0.8],
    supermarket: [V.GROCER, 34620, 16777215, 0.8, ``, `09:00-22:00`],
    bank: [V.ESTATE, 1718906, 16777215, 0.5, ``, `09:00-15:00`],
    electronics: [V.GOODS, 14090255, 16777215, 1, ``, `10:00-22:00`],
    pcparts: [V.GOODS, 670346, 16777215, 1, ``, `11:00-20:00`],
    junk: [V.PARTS, 1710618, 16769280, 0.8, ``, `11:00-19:00`],
    "radio-parts": [V.PARTS, 16308224, 1710618, 0.9, ``, `10:00-19:00`],
    "maid-cafe": [V.CAFE, 16756944, 12587098, 1, `e`, `11:00-22:00`],
    arcade: [V.GAME, 1710618, 16726666, 1, ``, `10:00-24:00`],
    "anime-goods": [V.BOOKS, 16726666, 16777215, 1, ``, `10:00-21:00`],
    "retro-games": [V.GAME, 14688288, 16777215, 1, ``, `11:00-20:00`],
    gachapon: [V.GAME, 16777215, 14688288, 1, ``, `10:00-21:00`],
    "card-shop": [V.BOOKS, 6953648, 16777215, 1, ``, `11:00-21:00`],
    "duty-free": [V.GOODS, 15073298, 16777215, 1, ``, `10:00-21:00`],
    luxury: [V.BOUTIQUE, 1118481, 15259824, 0.95, ``, `show`],
    depato: [V.BOUTIQUE, 1710618, 16777215, 0.9, ``, `show`],
    gallery: [V.GYM, 16052972, 1710618, 0.4, `t`, `show`],
    sushi: [V.FOOD, 16052194, 1710618, 0.6, `et`, `11:30-22:00`],
    kissaten: [V.CAFE, 4860442, 15784104, 0.6, `e`, `08:00-19:00`],
    tempura: [V.FOOD, 16051416, 1710618, 0.5, `et`, `11:30-21:00`],
    yoshoku: [V.FOOD, 6953492, 16050384, 0.6, `e`, `11:00-21:00`],
    jewelry: [V.PHONE, 1054760, 15782e3, 0.95, ``, `show`],
    stationery: [V.BOOKS, 1718890, 16777215, 0.6],
    watch: [V.PHONE, 1710618, 14205040, 0.9, ``, `show`],
    bar: [V.LOUNGE, 1052692, 15251552, 0.7, ``, `18:00-26:00`],
    fish: [V.GROCER, 1727152, 16777215, 0.6, ``, `09:00-19:00`],
    "dried-goods": [V.GROCER, 10490906, 16777215, 0.6, ``, `09:00-19:00`],
    "sweets-wholesale": [V.GROCER, 16769280, 15073298, 0.8, ``, `09:00-19:00`],
    "jewelry-wholesale": [V.BOUTIQUE, 1054760, 15782e3, 0.8, ``, `show`],
    "cheap-clothes": [V.BOUTIQUE, 15073298, 16777215, 0.7, ``, `10:00-20:00`],
    "ethnic-food": [V.FOOD, 14196768, 6953492, 0.7, `e`, `11:00-23:00`],
    "fruit-stall": [V.GROCER, 2783786, 16777215, 0.5, ``, `10:00-19:00`],
    kebab: [V.FOOD, 13637656, 16769280, 0.8, `e`, `11:00-23:00`],
    tachinomi: [V.FOOD, 9051156, 16774368, 0.9, `et`, `15:00-24:00`],
    izakaya: [V.FOOD, 9051156, 16774368, 0.9, `et`, `11:30-24:00`],
    "used-books": [V.BOOKS, 3811866, 15786176, 0.4, `t`, `10:00-19:00`],
    instruments: [V.GOODS, 1710618, 16777215, 0.6, ``, `11:00-20:00`],
    curry: [V.FOOD, 15769600, 6953492, 0.8, `e`, `11:00-22:00`],
    soba: [V.NOODLE, 1845828, 16777215, 0.6, `et`, `11:00-21:00`],
    sports: [V.GOODS, 1723048, 16777215, 0.7],
    bookstore: [V.BOOKS, 2775594, 16777215, 0.6],
    juku: [-1, 1723040, 16777215, 0.8],
    "office-lobby": [V.LOBBY, 2763306, 15790320, 0.3, ``, `24H`],
    "restaurant-floor": [V.FOOD, 3811866, 15788248, 0.5, `e`, `11:00-23:00`],
    cafe: [V.CAFE, 2771514, 16777215, 0.6, `e`, `07:00-22:00`],
    knives: [V.OLDSHOP, 1710618, 15788248, 0.4, `t`],
    "nori-tea": [V.TEA, 2775594, 15788232, 0.5, `t`],
    "kimono-fabric": [V.OLDSHOP, 4856362, 16050384, 0.4, `t`],
    katsuobushi: [V.OLDSHOP, 3810324, 16050384, 0.4, `t`, `09:00-18:00`],
    wagashi: [V.OLDSHOP, 16051416, 5909018, 0.5, `t`, `09:00-19:00`],
    shinise: [V.OLDSHOP, 2759184, 15784080, 0.4, `t`],
    "seafood-don": [V.FOOD, 1727152, 16777215, 0.7, `e`, `07:00-15:00`],
    tamagoyaki: [V.BENTO, 16769280, 6953492, 0.6, `et`, `07:00-15:00`],
    teishoku: [V.FOOD, 16183520, 9051156, 0.7, `e`, `11:00-21:00`],
    yakitori: [V.GRILL, 12068380, 16777215, 0.8, `et`, `11:30-24:00`],
    ramen: [V.NOODLE, 16173056, 11539996, 0.9, `e`, `11:00-23:00`],
    massage: [V.CLINIC, 16312520, 8010266, 0.7, ``, `10:00-24:00`],
    kinken: [V.GOODS, 16769024, 13635600, 0.9, ``, `10:00-20:00`],
    museum: [-1, 3815994, 16777215, 0.3, `t`, `09:30-17:00`],
    "park-stall": [V.BENTO, 13637656, 16777215, 0.6, `e`, `10:00-17:00`],
    souvenir: [V.GOODS, 10490906, 16777215, 0.6, `t`],
    tonkatsu: [V.FOOD, 3810324, 16050384, 0.6, `et`, `11:00-21:00`],
    pachinko: [V.GAME, 15073298, 16769280, 1, ``, `10:00-23:00`],
    "corner-shop": [V.GOODS, 2779706, 16777215, 0.5, ``, `08:00-21:00`],
    liquor: [V.GOODS, 10490906, 16777215, 0.6, `t`, `10:00-22:00`],
    rice: [V.GROCER, 16051416, 1710618, 0.4, `t`, `09:00-19:00`],
    tofu: [V.GROCER, 16053488, 1718890, 0.4, `t`, `07:00-18:00`],
    butcher: [V.GROCER, 13637656, 16777215, 0.5, ``, `10:00-19:00`],
    greengrocer: [V.GROCER, 2783786, 16777215, 0.5, ``, `09:00-19:00`],
    bakery: [V.BAKERY, 9067050, 16777215, 0.6, ``, `07:00-19:00`],
    cleaning: [V.LAUNDRY, 1731264, 16777215, 0.7, ``, `09:00-20:00`],
    "coin-laundry": [V.LAUNDRY, 3186912, 16777215, 0.9, ``, `24H`],
    barber: [V.SALON, 16777215, 12589594, 0.6, ``, `09:00-19:00`],
    salon: [V.SALON, 16052460, 3815994, 0.6, ``, `10:00-20:00`],
    clinic: [V.CLINIC, 16777215, 1727034, 0.7, ``, `09:00-18:00`],
    dentist: [V.CLINIC, 16777215, 1735322, 0.8, ``, `09:00-19:00`],
    sento: [V.OLDSHOP, 1845842, 16777215, 0.6, `t`, `15:00-24:00`],
    seikotsu: [V.CLINIC, 16775392, 2783786, 0.7, ``, `09:00-20:00`],
    florist: [V.FLORIST, 2779706, 16777215, 0.5, ``, `09:00-19:00`],
    chinese: [V.FOOD, 13637656, 16769280, 0.8, `e`, `11:00-22:00`],
    snack: [V.LOUNGE, 5904970, 16765168, 0.9, ``, `19:00-26:00`],
    mahjong: [-1, 940586, 16777215, 0.9, ``, `12:00-26:00`],
    eikaiwa: [-1, 16777215, 1723040, 0.8],
    netcafe: [-1, 1710618, 3203327, 1, ``, `24H`],
    realestate: [V.ESTATE, 1727130, 16777215, 0.6, ``, `10:00-19:00`],
    karaoke: [V.LOUNGE, 14162784, 16777215, 1, ``, `11:00-26:00`],
    hotel: [V.LOBBY, 2763322, 15788248, 0.6, ``, `24H`],
    fashion: [V.BOUTIQUE, 16777215, 1710618, 0.8, ``, `show`],
    "tea-stand": [V.TEA, 16183004, 6961690, 0.6, `e`, `10:00-21:00`],
  },
  $oe = {
    electronics: `家電`,
    pcparts: `中古パソコン`,
    "card-shop": `buildings.fb.toreka`,
    gallery: `画廊`,
    jewelry: `JEWELRY`,
    "corner-shop": `たばこ`,
    arcade: `trade.arcade.name`,
  },
  Fd = new Map();
function Id(e) {
  let t = Fd.get(e.id);
  if (t) return t;
  let n = Qoe[e.id] ?? [V.GOODS, 3824250, 16777215, 0.6],
    r = e.name;
  for (let t of e.signs)
    if (t.startsWith(`trade.${e.id}.sign.`) && So(t)) {
      let e = L(t);
      if (e.length <= 5 && !e.includes(`{`) && !/[0-9¥]/.test(e)) {
        r = t;
        break;
      }
    }
  if (L(r).length > 7) {
    for (let t of e.signs)
      if (
        So(t) &&
        (yo(t).dir === `v` || yo(t).dir === `hv`) &&
        L(t).length <= 7 &&
        !L(t).includes(`{`)
      ) {
        r = t;
        break;
      }
  }
  let i = $oe[e.id];
  if (i) {
    let t = So(i) ? i : e.signs.find((e) => So(e) && L(e) === i);
    t && (r = t);
  }
  return (
    (t = {
      id: e.id,
      key: e.name,
      trade: e,
      room: n[0],
      bg: n[1],
      fg: n[2],
      glow: n[3],
      eat: (n[4] ?? ``).includes(`e`),
      trad: (n[4] ?? ``).includes(`t`) || e.font === `serif`,
      short: r,
      hours: n[5] ?? ``,
    }),
    Fd.set(e.id, t),
    t
  );
}
var ese = new Set([`museum`, `park-stall`]),
  Ld = new Map();
function tse(e, t, n) {
  let r = `${e}|${n}`,
    i = Ld.get(r);
  return (
    i ||
      Ld.set(
        r,
        (i = Ci(e, n)
          .filter(([e]) => !ese.has(e.id))
          .map(([e, t]) => [Id(e), t])),
      ),
    i.length ? t.weighted(i) : Id(Dne(e, t, n))
  );
}
function nse(e) {
  let t = /^(\d{1,2}):(\d{2})-/.exec(e.hours);
  return t ? +t[1] + t[2] / 60 : -1;
}
var Rd = (e) => (Si[e] ? Id(Si[e]) : null),
  zd = (e) => parseInt(e.slice(1), 16),
  Bd = new Map(),
  Vd = new Map();
function Hd(e, t, n) {
  let r = n.next() < 0.67 ? 0 : 1,
    i = `${e}|${t}|${r}`,
    a = Bd.get(i);
  if (!a) {
    let n = _ne(e, t, new ie(ge(`tokyo-brand`, e, t, r)));
    Bd.set(
      i,
      (a = {
        key: `brand.${n.id}`,
        bg: zd(n.colors[0]),
        fg: zd(n.colors[1]),
        brand: n,
      }),
    );
  }
  return a;
}
var Ud = new Map();
function Wd(e) {
  let t = Ud.get(e.id);
  if (!t) {
    t = [...e.names];
    for (let n of Nd(`buildings.shop.${e.id}.`)) {
      let e = /\{name\} = an? (kanji|kana|surname|mama|latin) stem/.exec(
        yo(n).note ?? ``,
      );
      t.push({ key: n, stem: e?.[1] ?? `kana` });
    }
    Ud.set(e.id, t);
  }
  return t;
}
function rse(e, t) {
  let n = Wd(e);
  if (!n.length) return kne(e.id, t).ja;
  let r = n[Math.min(n.length - 1, Math.floor(t.next() * n.length))];
  if (!r.stem) return L(r.key);
  let i = One(r.stem);
  return jr(L(r.key), {
    name: L(i[Math.min(i.length - 1, Math.floor(t.next() * i.length))]),
  });
}
function Gd(e, t, n, r = 0.85, i = 0) {
  let a = e.trade;
  if (a.chain && n.next() < a.chain.share) return Hd(a.chain.category, t, n);
  if (Wd(a).length && n.next() < (a.id === `office-lobby` ? 1 : r)) {
    let n = i % 3,
      r = `${a.id}|${t}|${n}`,
      o = Vd.get(r);
    return (
      o ||
        Vd.set(
          r,
          (o = {
            key: rse(
              a,
              new ie(
                n ? ge(`tokyo-shop`, a.id, t, n) : ge(`tokyo-shop`, a.id, t),
              ),
            ),
            bg: e.bg,
            fg: e.fg,
            brand: null,
          }),
        ),
      o
    );
  }
  return { key: e.short, bg: e.bg, fg: e.fg, brand: null };
}
function Kd(e, t, n) {
  let r = 2166136261;
  for (let t = 0; t < e.length; t++)
    r = Math.imul(r ^ e.charCodeAt(t), 16777619);
  return (
    (r >>>= 0),
    n
      ? t && (t.id === `konbini` || t.id === `drugstore`)
        ? 1
        : 0
      : t && (t.id === `fashion` || t.id === `luxury`)
        ? 1
        : t?.trad
          ? 2
          : r % 3 == 0
            ? 1
            : r % 7 == 1
              ? 3
              : 0
  );
}
function ise(e) {
  return e <= 7
    ? `newyear`
    : e < 60
      ? `winter`
      : e < 152
        ? `spring`
        : e < 244
          ? `summer`
          : e < 335
            ? `autumn`
            : `yearend`;
}
function ase(e) {
  return [`buildings.season.${e}.ad`, ...Nd(`buildings.ad.`)]
    .filter((e) => So(e))
    .slice(0, 8);
}
function ose(e = 512, t = `autumn`) {
  let n = document.createElement(`canvas`);
  n.width = n.height = e;
  let r = n.getContext(`2d`);
  br(n, r);
  let i = e / 2,
    a = e / 4,
    o = ase(t),
    s = [
      [`#ff3a7a`, `#ffd23a`, `#ffffff`],
      [`#0a1a4a`, `#30c8ff`, `#ffffff`],
      [`#f4f0e6`, `#d01818`, `#1a1a1a`],
      [`#1a1a1a`, `#ff6a00`, `#ffffff`],
      [`#2a8a4a`, `#ffffff`, `#ffffff`],
      [`#3a1a6a`, `#ff80ff`, `#ffffff`],
      [`#00a0e0`, `#ffffff`, `#003a6a`],
      [`#f0d000`, `#1a1a1a`, `#1a1a1a`],
    ];
  for (let e = 0; e < 8; e++)
    (r.save(),
      r.translate((e % 2) * i, Math.floor(e / 2) * a),
      r.beginPath(),
      r.rect(0, 0, i, a),
      r.clip(),
      sse(r, i, a, s[e], o.length ? L(o[e % o.length]) : ``, e),
      r.restore());
  return Ee(n, { anisotropy: 2 });
}
function sse(e, t, n, [r, i, a], o, s) {
  let c = e.createLinearGradient(0, 0, t, n);
  if (
    (c.addColorStop(0, r),
    c.addColorStop(1, i),
    (e.fillStyle = c),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(255,255,255,0.22)`),
    e.beginPath(),
    s % 3 == 0)
  )
    e.arc(t * 0.2, n * 0.5, n * 0.42, 0, Math.PI * 2);
  else if (s % 3 == 1) e.rect(t * 0.06, n * 0.12, t * 0.22, n * 0.78);
  else
    for (let r = 0; r < 12; r++) {
      let i = (r / 12) * Math.PI * 2,
        a = r % 2 ? n * 0.22 : n * 0.44;
      e.lineTo(t * 0.2 + Math.cos(i) * a, n * 0.5 + Math.sin(i) * a);
    }
  (e.fill(), Yr(e, o, t * 0.62, n * 0.5, t * 0.68, n * 0.42, a, Mr(), `900`));
}
