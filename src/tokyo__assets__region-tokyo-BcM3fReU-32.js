// tokyo__assets__region-tokyo-BcM3fReU 32 — math
// Lines 18698-19041 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ud(e) {
  let t = rc(`streets.dest.${e}`);
  return { ja: t.ja, en: t.en ?? `` };
}
var dd = {
    C1: [
      `edobashi-jct`,
      `takaracho`,
      `kyobashi`,
      `ginza`,
      `shiodome`,
      `kandabashi`,
    ],
    1: [`honcho`, `ueno`, `iriya`, `edobashi-jct`],
    6: [`mukojima`, `edobashi-jct`],
    KK: [`ginza`, `kyobashi`, `shiodome`],
  },
  fd = { C1: `c1`, 1: `r1`, 6: `r6`, KK: `kk` },
  pd = new WeakMap();
function md(e) {
  let t = pd.get(e);
  return (t || pd.set(e, (t = new sd(e))), t);
}
var hd = new Set([
    `kanda`,
    `akihabara`,
    `ameyoko`,
    `ueno`,
    `tokyo-east-generic`,
    `shimbashi`,
  ]),
  gd = new Set([`ginza`, `marunouchi`, `nihonbashi`]);
function _d(e, t, n, r) {
  if (t.kind === `boulevard` || t.kind === `arterial` || t.pedestrian)
    return !1;
  let i = e.districtAt(n, r).id;
  return hd.has(i) ? i !== `shimbashi` || n > 250 : !1;
}
function vd(e, t, n, r) {
  return (
    t.id === `chuo-ginza` ||
    t.id === `gyoko` ||
    t.id === `marunouchi-naka` ||
    t.id === `namiki` ||
    (t.kind !== `boulevard` &&
      t.kind !== `arterial` &&
      gd.has(e.districtAt(n, r).id))
  );
}
function yd(e, t, n, r) {
  return t.id.startsWith(`showa`) ||
    t.id === `hibiya` ||
    t.id === `gyoko` ||
    t.id === `yasukuni` ||
    t.id === `eitai`
    ? `ginkgo`
    : t.id.startsWith(`kandagawa`) ||
        t.id === `sumida-riverside` ||
        t.id === `awajizaka` ||
        t.id === `yanagiwara` ||
        t.id.startsWith(`nihonbashigawa`) ||
        e.districtAt(n, r).id === `ueno`
      ? `sakura`
      : P(t.id, `tree`) % 3 == 0
        ? `ginkgo`
        : `zelkova`;
}
var bd = {
    sakura: [3, 31],
    hanafubuki: [4, 5],
    summer: [7, 25],
    ginkgo: [11, 30],
    momiji: [12, 2],
    winter: [1, 20],
  },
  xd = (e, t, n) => (e <= t ? 0 : e >= n ? 1 : (e - t) / (n - t)),
  Sd = (e, t, n) => {
    let r = xd(e, t, n);
    return r * r * (3 - 2 * r);
  },
  Cd = (e, t, n, r, i) => Sd(e, t, n) * (1 - Sd(e, r, i));
function wd(e, t, n) {
  return Math.round((Date.UTC(e, t - 1, n) - Date.UTC(e, 0, 1)) / 864e5) + 1;
}
function Td(e, t) {
  let { y: n, m: r, d: i } = e,
    a = t ? bd[t] : void 0;
  a && ([r, i] = a);
  let o = wd(n, r, i),
    s = (e, t) => wd(2027, e, t),
    c = s(3, 22),
    l = s(3, 31),
    u = s(4, 2),
    d = s(4, 11),
    f = o < c || o > d ? 0 : o <= l ? Sd(o, c, l) : 1 - Sd(o, u + 2, d),
    p = Cd(o, u - 1, u + 2, d - 3, d),
    m = Sd(o, u, d + 6),
    h = Cd(o, s(11, 10), s(11, 28), s(12, 12), s(12, 22)),
    g = Cd(o, s(12, 4), s(12, 12), s(12, 28), s(12, 31) + 1),
    _ = Cd(o, s(11, 18), s(11, 30), s(12, 10), s(12, 20)),
    v =
      o >= s(12, 15)
        ? Sd(o, s(12, 15), s(12, 30))
        : 1 - Sd(o, s(3, 18), s(4, 8)),
    y = Cd(o, s(5, 5), s(6, 20), s(9, 15), s(10, 20)),
    b = Cd(o, s(7, 8), s(7, 20), s(8, 10), s(8, 22)),
    x =
      o >= s(10, 1) ? Sd(o, s(10, 1), s(11, 1)) : 1 - Sd(o, s(3, 15), s(5, 1)),
    S = 0.5 + 0.5 * Math.cos(((o - 18) / 365.25) * Math.PI * 2),
    C = (e, t) => +(e <= t ? o >= e && o <= t : o >= e || o <= t);
  return {
    dayOfYear: o,
    sakura: f,
    sakuraFall: p,
    sakuraLeaf: m,
    ginkgo: h,
    ginkgoFall: g,
    momiji: _,
    bare: v,
    lotus: y,
    lotusBloom: b,
    lotusDead: x,
    winter: S,
    cicadas: C(s(7, 12), s(9, 18)),
    mushi: C(s(8, 22), s(11, 15)),
    frogs: C(s(4, 20), s(8, 21)),
    yakiimo: C(s(10, 1), s(3, 31)),
    hinoyojin: C(s(12, 1), s(2, 28)),
  };
}
function Ed(e, t) {
  let n = t?.get(`season`) ?? null,
    r = -1,
    i = null;
  return () => {
    let t = e.date,
      a = t.y * 400 + t.m * 32 + t.d;
    return ((a !== r || !i) && ((r = a), (i = Td(t, n))), i);
  };
}
var U = {
    WIN: 0,
    SMALL: 4,
    BALC: 6,
    STAIR: 8,
    ZWIN: 9,
    BALC2: 12,
    RIBBON: 14,
    CURTAIN: 16,
    LOBBY_GLASS: 19,
    STONE_WIN: 20,
    SIDE: 21,
    SHUTTER: 24,
    FOOD: 26,
    GOODS: 27,
    NOODLE: 28,
    CLINIC: 29,
    LOBBY: 30,
    DOOR: 31,
    CONV: 32,
    TEA: 33,
    GAME: 34,
    DRUG: 35,
    BENTO: 36,
    LOTTERY: 37,
    KUGURI: 38,
    BICYCLE: 39,
    KURA_DOOR: 40,
    KURA_WIN: 41,
    KURA_WALL: 43,
    LATTICE_WIN: 44,
    LATTICE_DOOR: 45,
    OLDSHOP: 46,
    BOARDS: 47,
    KAWARA: 48,
    ROOF_FLAT: 49,
    TIN: 50,
    TIN_WIN: 51,
    TIN_ROOF: 52,
    CANVAS: 53,
    STONE: 54,
    CONCRETE: 55,
    STAIR_OUT: 56,
    STAIR_SIDE: 57,
    AC: 58,
    AC_SIDE: 59,
    TANK: 60,
    LOUVRE: 61,
    PARAPET_GLASS: 62,
    PARAPET_SOLID: 63,
    SALON: 64,
    PHONE: 65,
    CAFE: 66,
    BOUTIQUE: 67,
    ESTATE: 68,
    BAKERY: 69,
    CONV_DOOR: 70,
    PLINTH: 71,
    BOOKS: 72,
    PARTS: 73,
    GROCER: 74,
    GRILL: 75,
    FLORIST: 76,
    LOUNGE: 77,
    GYM: 78,
    LAUNDRY: 79,
    CORRIDOR: 80,
    DEPATO: 81,
    GLASS_DOOR: 82,
    LETTER: 83,
    STONE_PLAIN: 84,
    VENT: 85,
    GLASS_BLOCK: 86,
    PAVERS: 87,
  },
  Dd = Yn.x0,
  Od = Yn.x1,
  kd = Yn.y0,
  Ad = Yn.y1,
  jd = Od - Dd,
  Md = Ad - kd,
  Nd = 58,
  Pd = (e) => Ad - e * Nd,
  Fd = [
    `#d84a3a`,
    `#f0c030`,
    `#3a7ac8`,
    `#f4f0e8`,
    `#3aa060`,
    `#e87a2a`,
    `#8a4ab0`,
    `#e85a8a`,
    `#2a2a2a`,
    `#a0d0e8`,
  ];
function Id(e, t, n) {
  ma(e, Dd, kd, jd, Md, t, n);
}
function Ld(e, t, n, r, i, a, o = Fd, s = `#9a9ea2`) {
  let c = Pd(i),
    l = Pd(0.1);
  I(e, n, c, r, l - c, `rgba(0,0,0,0.10)`);
  let u = (l - c) / a;
  for (let i = 0; i < a; i++) {
    let a = c + (i + 1) * u,
      l = n + 2;
    for (; l < n + r - 3;) {
      let i = 3 + t.next() * 7,
        s = u * (0.45 + t.next() * 0.45);
      (I(
        e,
        l,
        a - s - 2,
        Math.min(i, n + r - 2 - l),
        s,
        o[Math.floor(t.next() * o.length)],
      ),
        (l += i + 0.8));
    }
    I(e, n, a - 2, r, 2.5, s);
  }
  (I(e, n, c, 2, l - c, s), I(e, n + r - 2, c, 2, l - c, s));
}
var Rd = (e) => (so[e]?.items ?? []).map((e) => e.key),
  zd = (e) =>
    (so[e]?.signs ?? [])
      .filter((t) => t.startsWith(`trade.${e}.`))
      .map(B)
      .filter((e) => !e.includes(`{`));
function Bd(e, t, n, r, i, a = `#f4ecd6`, o = `#1a1a1a`, s = 10) {
  let c = Rd(n),
    l = jd / s;
  for (let n = 0; n < s; n++) {
    let s = Dd + n * l + 1.5;
    (I(e, s, r, l - 3, i, a),
      I(e, s, r + i - 2, l - 3, 2, `rgba(0,0,0,0.15)`),
      c.length &&
        Da(
          e,
          B(c[(n + Math.floor(t.next() * c.length)) % c.length]).replace(
            /（[^）]*）/g,
            ``,
          ),
          s + (l - 3) / 2,
          r + 3,
          r + i - 4,
          (l - 3) * 0.8,
          o,
          ca(),
          `600`,
        ));
  }
}
function Vd(e, t, n, r, i, a, o, s, c = 4) {
  (I(e, n, r, i, a, o), I(e, n, r, i, 3, `rgba(255,255,255,0.15)`));
  let l = Rd(t);
  for (let t = 0; t < c && t < l.length; t++)
    Ea(
      e,
      B(l[t]),
      n + i / 2,
      r + (a / c) * (t + 0.5),
      i * 0.9,
      (a / c) * 0.62,
      s,
      sa(),
      `600`,
    );
}
function Hd(e, t, n, r, i, a) {
  let o = Pd(i),
    s = Pd(0.05);
  I(e, n, o, r, s - o, `#cfd6da`);
  let c = r / a;
  for (let r = 0; r < a; r++) {
    let i = n + r * c + 2;
    ma(e, i, o + 3, c - 4, s - o - 6, `#f6fbff`, `#d8e6ee`);
    for (let n = 0; n < 5; n++) {
      let r = o + 3 + ((s - o - 6) / 5) * (n + 1);
      for (let n = i + 2; n < i + c - 7; n += 4.2)
        I(e, n, r - 9, 3.2, 8, Fd[Math.floor(t.next() * Fd.length)]);
      I(e, i, r - 1, c - 4, 1.5, `#b8c0c4`);
    }
    I(e, i + c - 6, o + 30, 1.5, 40, `#8a9296`);
  }
}
function Ud(e, t, n, r, i) {
  (I(e, t, n, r, i, `#e8e8e4`), I(e, t + 3, n + 4, r - 6, i * 0.12, `#2a3a6a`));
  for (let a = 0; a < 5; a++)
    for (let o = 0; o < 3; o++)
      I(
        e,
        t + 4 + o * ((r - 8) / 3),
        n + i * 0.2 + i * 0.11 * a,
        (r - 8) / 3 - 2,
        i * 0.09,
        a === 0 ? `#e85a2a` : `#f6f2e0`,
      );
  I(e, t + r * 0.3, n + i * 0.8, r * 0.4, i * 0.06, `#3a3a3a`);
}
function Wd(e, t, n = 0.95) {
  (I(e, Dd, Pd(n), jd, Pd(0) - Pd(n), t),
    I(e, Dd, Pd(n), jd, 3, `rgba(255,255,255,0.25)`));
}
