// tokyo/assets/region-tokyo-BcM3fReU 37 — food
// Lines 20159-20490 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function np(e, t) {
  let n = e / 8,
    r = n / 256,
    a = n * 11,
    [o, c] = we(e, a),
    [l, u] = we(e, a);
  (Wi(o, c), (u.fillStyle = `#fff`), u.fillRect(0, 0, e, a));
  let d = new ne(t);
  for (let e = 0; e < tp.length; e++) {
    let t = (e % 8) * n,
      i = Math.floor(e / 8) * n;
    (c.save(),
      u.save(),
      c.beginPath(),
      c.rect(t, i, n, n),
      c.clip(),
      u.beginPath(),
      u.rect(t, i, n, n),
      u.clip(),
      c.translate(t, i),
      u.translate(t, i),
      c.scale(r, r),
      u.scale(r, r));
    try {
      tp[e](c, u, 256, d.fork(e));
    } catch (t) {
      console.warn(`[tokyo-buildings] atlas tile failed`, e, t);
    }
    (c.restore(), u.restore());
  }
  let p = new Uint8Array(e * a * 4),
    m = t >>> 0;
  for (let t = 0; t < a; t += 128) {
    let n = Math.min(128, a - t),
      r = c.getImageData(0, t, e, n).data;
    for (let i = 0, a = t * e * 4, o = e * n; i < o; i++, a += 4) {
      m = (Math.imul(m, 1664525) + 1013904223) >>> 0;
      let e = ((m >>> 24) - 128) * 0.03,
        t = i * 4;
      ((p[a] = Math.max(0, Math.min(255, r[t] + e))),
        (p[a + 1] = Math.max(0, Math.min(255, r[t + 1] + e))),
        (p[a + 2] = Math.max(0, Math.min(255, r[t + 2] + e))));
    }
  }
  o.width = o.height = 1;
  for (let t = 0; t < a; t += 128) {
    let n = Math.min(128, a - t),
      r = u.getImageData(0, t, e, n).data;
    for (let i = 0, a = t * e * 4 + 3, o = e * n; i < o; i++, a += 4)
      p[a] = r[i * 4];
  }
  l.width = l.height = 1;
  let h = new w(p, e, a, i, s);
  return (
    (h.name = `tokyo-facade-atlas`),
    (h.colorSpace = f),
    (h.generateMipmaps = !0),
    (h.minFilter = S),
    (h.magFilter = E),
    (h.wrapS = h.wrapT = _),
    (h.anisotropy = 8),
    (h.flipY = !1),
    (h.needsUpdate = !0),
    de(h),
    h
  );
}
tp.length;
var rp = null;
function ip(e) {
  rp ||= new Map();
  let t = rp.get(e);
  return (
    t ||
      rp.set(
        e,
        (t = sc()
          .filter((t) => t.startsWith(e))
          .sort()),
      ),
    t
  );
}
var ap = (e) => (oc(e) ? B(e) : e),
  op = {
    konbini: [U.CONV, 2787914, 16777215, 1, ``, `24H`],
    drugstore: [U.DRUG, 16769280, 1908872, 1, ``, `09:00-22:00`],
    gyudon: [U.NOODLE, 15762176, 16777215, 0.9, `e`, `24H`],
    burger: [U.FOOD, 14090255, 16765952, 0.9, `e`, `07:00-23:00`],
    hundred: [U.GOODS, 15073298, 16777215, 0.8],
    supermarket: [U.GROCER, 34620, 16777215, 0.8, ``, `09:00-22:00`],
    bank: [U.ESTATE, 1718906, 16777215, 0.5, ``, `09:00-15:00`],
    electronics: [U.GOODS, 14090255, 16777215, 1, ``, `10:00-22:00`],
    pcparts: [U.GOODS, 670346, 16777215, 1, ``, `11:00-20:00`],
    junk: [U.PARTS, 1710618, 16769280, 0.8, ``, `11:00-19:00`],
    "radio-parts": [U.PARTS, 16308224, 1710618, 0.9, ``, `10:00-19:00`],
    "maid-cafe": [U.CAFE, 16756944, 12587098, 1, `e`, `11:00-22:00`],
    arcade: [U.GAME, 1710618, 16726666, 1, ``, `10:00-24:00`],
    "anime-goods": [U.BOOKS, 16726666, 16777215, 1, ``, `10:00-21:00`],
    "retro-games": [U.GAME, 14688288, 16777215, 1, ``, `11:00-20:00`],
    gachapon: [U.GAME, 16777215, 14688288, 1, ``, `10:00-21:00`],
    "card-shop": [U.BOOKS, 6953648, 16777215, 1, ``, `11:00-21:00`],
    "duty-free": [U.GOODS, 15073298, 16777215, 1, ``, `10:00-21:00`],
    luxury: [U.BOUTIQUE, 1118481, 15259824, 0.95, ``, `show`],
    depato: [U.BOUTIQUE, 1710618, 16777215, 0.9, ``, `show`],
    gallery: [U.GYM, 16052972, 1710618, 0.4, `t`, `show`],
    sushi: [U.FOOD, 16052194, 1710618, 0.6, `et`, `11:30-22:00`],
    kissaten: [U.CAFE, 4860442, 15784104, 0.6, `e`, `08:00-19:00`],
    tempura: [U.FOOD, 16051416, 1710618, 0.5, `et`, `11:30-21:00`],
    yoshoku: [U.FOOD, 6953492, 16050384, 0.6, `e`, `11:00-21:00`],
    jewelry: [U.PHONE, 1054760, 15782e3, 0.95, ``, `show`],
    stationery: [U.BOOKS, 1718890, 16777215, 0.6],
    watch: [U.PHONE, 1710618, 14205040, 0.9, ``, `show`],
    bar: [U.LOUNGE, 1052692, 15251552, 0.7, ``, `18:00-26:00`],
    fish: [U.GROCER, 1727152, 16777215, 0.6, ``, `09:00-19:00`],
    "dried-goods": [U.GROCER, 10490906, 16777215, 0.6, ``, `09:00-19:00`],
    "sweets-wholesale": [U.GROCER, 16769280, 15073298, 0.8, ``, `09:00-19:00`],
    "jewelry-wholesale": [U.BOUTIQUE, 1054760, 15782e3, 0.8, ``, `show`],
    "cheap-clothes": [U.BOUTIQUE, 15073298, 16777215, 0.7, ``, `10:00-20:00`],
    "ethnic-food": [U.FOOD, 14196768, 6953492, 0.7, `e`, `11:00-23:00`],
    "fruit-stall": [U.GROCER, 2783786, 16777215, 0.5, ``, `10:00-19:00`],
    kebab: [U.FOOD, 13637656, 16769280, 0.8, `e`, `11:00-23:00`],
    tachinomi: [U.FOOD, 9051156, 16774368, 0.9, `et`, `15:00-24:00`],
    izakaya: [U.FOOD, 9051156, 16774368, 0.9, `et`, `11:30-24:00`],
    "used-books": [U.BOOKS, 3811866, 15786176, 0.4, `t`, `10:00-19:00`],
    instruments: [U.GOODS, 1710618, 16777215, 0.6, ``, `11:00-20:00`],
    curry: [U.FOOD, 15769600, 6953492, 0.8, `e`, `11:00-22:00`],
    soba: [U.NOODLE, 1845828, 16777215, 0.6, `et`, `11:00-21:00`],
    sports: [U.GOODS, 1723048, 16777215, 0.7],
    bookstore: [U.BOOKS, 2775594, 16777215, 0.6],
    juku: [-1, 1723040, 16777215, 0.8],
    "office-lobby": [U.LOBBY, 2763306, 15790320, 0.3, ``, `24H`],
    "restaurant-floor": [U.FOOD, 3811866, 15788248, 0.5, `e`, `11:00-23:00`],
    cafe: [U.CAFE, 2771514, 16777215, 0.6, `e`, `07:00-22:00`],
    knives: [U.OLDSHOP, 1710618, 15788248, 0.4, `t`],
    "nori-tea": [U.TEA, 2775594, 15788232, 0.5, `t`],
    "kimono-fabric": [U.OLDSHOP, 4856362, 16050384, 0.4, `t`],
    katsuobushi: [U.OLDSHOP, 3810324, 16050384, 0.4, `t`, `09:00-18:00`],
    wagashi: [U.OLDSHOP, 16051416, 5909018, 0.5, `t`, `09:00-19:00`],
    shinise: [U.OLDSHOP, 2759184, 15784080, 0.4, `t`],
    "seafood-don": [U.FOOD, 1727152, 16777215, 0.7, `e`, `07:00-15:00`],
    tamagoyaki: [U.BENTO, 16769280, 6953492, 0.6, `et`, `07:00-15:00`],
    teishoku: [U.FOOD, 16183520, 9051156, 0.7, `e`, `11:00-21:00`],
    yakitori: [U.GRILL, 12068380, 16777215, 0.8, `et`, `11:30-24:00`],
    ramen: [U.NOODLE, 16173056, 11539996, 0.9, `e`, `11:00-23:00`],
    massage: [U.CLINIC, 16312520, 8010266, 0.7, ``, `10:00-24:00`],
    kinken: [U.GOODS, 16769024, 13635600, 0.9, ``, `10:00-20:00`],
    museum: [-1, 3815994, 16777215, 0.3, `t`, `09:30-17:00`],
    "park-stall": [U.BENTO, 13637656, 16777215, 0.6, `e`, `10:00-17:00`],
    souvenir: [U.GOODS, 10490906, 16777215, 0.6, `t`],
    tonkatsu: [U.FOOD, 3810324, 16050384, 0.6, `et`, `11:00-21:00`],
    pachinko: [U.GAME, 15073298, 16769280, 1, ``, `10:00-23:00`],
    "corner-shop": [U.GOODS, 2779706, 16777215, 0.5, ``, `08:00-21:00`],
    liquor: [U.GOODS, 10490906, 16777215, 0.6, `t`, `10:00-22:00`],
    rice: [U.GROCER, 16051416, 1710618, 0.4, `t`, `09:00-19:00`],
    tofu: [U.GROCER, 16053488, 1718890, 0.4, `t`, `07:00-18:00`],
    butcher: [U.GROCER, 13637656, 16777215, 0.5, ``, `10:00-19:00`],
    greengrocer: [U.GROCER, 2783786, 16777215, 0.5, ``, `09:00-19:00`],
    bakery: [U.BAKERY, 9067050, 16777215, 0.6, ``, `07:00-19:00`],
    cleaning: [U.LAUNDRY, 1731264, 16777215, 0.7, ``, `09:00-20:00`],
    "coin-laundry": [U.LAUNDRY, 3186912, 16777215, 0.9, ``, `24H`],
    barber: [U.SALON, 16777215, 12589594, 0.6, ``, `09:00-19:00`],
    salon: [U.SALON, 16052460, 3815994, 0.6, ``, `10:00-20:00`],
    clinic: [U.CLINIC, 16777215, 1727034, 0.7, ``, `09:00-18:00`],
    dentist: [U.CLINIC, 16777215, 1735322, 0.8, ``, `09:00-19:00`],
    sento: [U.OLDSHOP, 1845842, 16777215, 0.6, `t`, `15:00-24:00`],
    seikotsu: [U.CLINIC, 16775392, 2783786, 0.7, ``, `09:00-20:00`],
    florist: [U.FLORIST, 2779706, 16777215, 0.5, ``, `09:00-19:00`],
    chinese: [U.FOOD, 13637656, 16769280, 0.8, `e`, `11:00-22:00`],
    snack: [U.LOUNGE, 5904970, 16765168, 0.9, ``, `19:00-26:00`],
    mahjong: [-1, 940586, 16777215, 0.9, ``, `12:00-26:00`],
    eikaiwa: [-1, 16777215, 1723040, 0.8],
    netcafe: [-1, 1710618, 3203327, 1, ``, `24H`],
    realestate: [U.ESTATE, 1727130, 16777215, 0.6, ``, `10:00-19:00`],
    karaoke: [U.LOUNGE, 14162784, 16777215, 1, ``, `11:00-26:00`],
    hotel: [U.LOBBY, 2763322, 15788248, 0.6, ``, `24H`],
    fashion: [U.BOUTIQUE, 16777215, 1710618, 0.8, ``, `show`],
    "tea-stand": [U.TEA, 16183004, 6961690, 0.6, `e`, `10:00-21:00`],
  },
  sp = {
    electronics: `家電`,
    pcparts: `中古パソコン`,
    "card-shop": `buildings.fb.toreka`,
    gallery: `画廊`,
    jewelry: `JEWELRY`,
    "corner-shop": `たばこ`,
    arcade: `trade.arcade.name`,
  },
  cp = new Map();
function lp(e) {
  let t = cp.get(e.id);
  if (t) return t;
  let n = op[e.id] ?? [U.GOODS, 3824250, 16777215, 0.6],
    r = e.name;
  for (let t of e.signs)
    if (t.startsWith(`trade.${e.id}.sign.`) && oc(t)) {
      let e = B(t);
      if (e.length <= 5 && !e.includes(`{`) && !/[0-9¥]/.test(e)) {
        r = t;
        break;
      }
    }
  if (B(r).length > 7) {
    for (let t of e.signs)
      if (
        oc(t) &&
        (rc(t).dir === `v` || rc(t).dir === `hv`) &&
        B(t).length <= 7 &&
        !B(t).includes(`{`)
      ) {
        r = t;
        break;
      }
  }
  let i = sp[e.id];
  if (i) {
    let t = oc(i) ? i : e.signs.find((e) => oc(e) && B(e) === i);
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
    cp.set(e.id, t),
    t
  );
}
var up = new Set([`museum`, `park-stall`]),
  dp = new Map();
function fp(e, t, n) {
  let r = `${e}|${n}`,
    i = dp.get(r);
  return (
    i ||
      dp.set(
        r,
        (i = lo(e, n)
          .filter(([e]) => !up.has(e.id))
          .map(([e, t]) => [lp(e), t])),
      ),
    i.length ? t.weighted(i) : lp(uo(e, t, n))
  );
}
function pp(e) {
  let t = /^(\d{1,2}):(\d{2})-/.exec(e.hours);
  return t ? +t[1] + t[2] / 60 : -1;
}
var mp = (e) => (so[e] ? lp(so[e]) : null),
  hp = (e) => parseInt(e.slice(1), 16),
  gp = new Map(),
  _p = new Map();
function vp(e, t, n) {
  let r = n.next() < 0.67 ? 0 : 1,
    i = `${e}|${t}|${r}`,
    a = gp.get(i);
  if (!a) {
    let n = Ua(e, t, new ne(P(`tokyo-brand`, e, t, r)));
    gp.set(
      i,
      (a = {
        key: `brand.${n.id}`,
        bg: hp(n.colors[0]),
        fg: hp(n.colors[1]),
        brand: n,
      }),
    );
  }
  return a;
}
var yp = new Map();
function bp(e) {
  let t = yp.get(e.id);
  if (!t) {
    t = [...e.names];
    for (let n of ip(`buildings.shop.${e.id}.`)) {
      let e = /\{name\} = an? (kanji|kana|surname|mama|latin) stem/.exec(
        rc(n).note ?? ``,
      );
      t.push({ key: n, stem: e?.[1] ?? `kana` });
    }
    yp.set(e.id, t);
  }
  return t;
}
function xp(e, t) {
  let n = bp(e);
  if (!n.length) return po(e.id, t).ja;
  let r = n[Math.min(n.length - 1, Math.floor(t.next() * n.length))];
  if (!r.stem) return B(r.key);
  let i = fo(r.stem);
  return oa(B(r.key), {
    name: B(i[Math.min(i.length - 1, Math.floor(t.next() * i.length))]),
  });
}
function Sp(e, t, n, r = 0.85, i = 0) {
  let a = e.trade;
  if (a.chain && n.next() < a.chain.share) return vp(a.chain.category, t, n);
  if (bp(a).length && n.next() < (a.id === `office-lobby` ? 1 : r)) {
    let n = i % 3,
      r = `${a.id}|${t}|${n}`,
      o = _p.get(r);
    return (
      o ||
        _p.set(
          r,
          (o = {
            key: xp(
              a,
              new ne(
                n ? P(`tokyo-shop`, a.id, t, n) : P(`tokyo-shop`, a.id, t),
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
