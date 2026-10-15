// tokyo/assets/region-tokyo-55J_WESF 55 — kind
// Lines 25613-25886 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function tu(e) {
  let t = yo(`streets.dest.${e}`);
  return { ja: t.ja, en: t.en ?? `` };
}
var gae = {
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
  _ae = { C1: `c1`, 1: `r1`, 6: `r6`, KK: `kk` },
  nu = new WeakMap();
function ru(e) {
  let t = nu.get(e);
  return (t || nu.set(e, (t = new pae(e))), t);
}
var vae = new Set([
    `kanda`,
    `akihabara`,
    `ameyoko`,
    `ueno`,
    `tokyo-east-generic`,
    `shimbashi`,
    `asakusa`,
    `hongo`,
    `suidobashi`,
    `takadanobaba`,
    `yoyogi`,
    `ikebukuro`,
  ]),
  yae = new Set([`ginza`, `marunouchi`, `nihonbashi`]);
function bae(e, t, n, r) {
  if (t.kind === `boulevard` || t.kind === `arterial` || t.pedestrian)
    return !1;
  let i = e.districtAt(n, r).id;
  return vae.has(i) ? i !== `shimbashi` || n > 250 : !1;
}
function iu(e, t, n, r) {
  return (
    t.id === `chuo-ginza` ||
    t.id === `gyoko` ||
    t.id === `marunouchi-naka` ||
    t.id === `namiki` ||
    (t.kind !== `boulevard` &&
      t.kind !== `arterial` &&
      yae.has(e.districtAt(n, r).id))
  );
}
function xae(e, t, n, r) {
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
        t.id.startsWith(`nihonbashigawa`)
      ? `sakura`
      : t.id === `sj-omotesando`
        ? `zelkova`
        : t.id === `sj-yasukuni` ||
            t.id === `sj-koshu` ||
            t.id === `sj-gaien-nishi`
          ? `ginkgo`
          : e.districtAt(n, r).id === `ueno`
            ? `sakura`
            : ge(t.id, `tree`) % 3 == 0
              ? `ginkgo`
              : `zelkova`;
}
var Sae = {
    sakura: [3, 31],
    hanafubuki: [4, 5],
    summer: [7, 25],
    ginkgo: [11, 30],
    momiji: [12, 2],
    winter: [1, 20],
  },
  Cae = (e, t, n) => (e <= t ? 0 : e >= n ? 1 : (e - t) / (n - t)),
  au = (e, t, n) => {
    let r = Cae(e, t, n);
    return r * r * (3 - 2 * r);
  },
  ou = (e, t, n, r, i) => au(e, t, n) * (1 - au(e, r, i));
function su(e, t, n) {
  return Math.round((Date.UTC(e, t - 1, n) - Date.UTC(e, 0, 1)) / 864e5) + 1;
}
function cu(e, t) {
  let { y: n, m: r, d: i } = e,
    a = t ? Sae[t] : void 0;
  a && ([r, i] = a);
  let o = su(n, r, i),
    s = (e, t) => su(2027, e, t),
    c = s(3, 22),
    l = s(3, 31),
    u = s(4, 2),
    d = s(4, 11),
    f = o < c || o > d ? 0 : o <= l ? au(o, c, l) : 1 - au(o, u + 2, d),
    p = ou(o, u - 1, u + 2, d - 3, d),
    m = au(o, u, d + 6),
    h = ou(o, s(11, 10), s(11, 28), s(12, 12), s(12, 22)),
    g = ou(o, s(12, 4), s(12, 12), s(12, 28), s(12, 31) + 1),
    _ = ou(o, s(11, 18), s(11, 30), s(12, 10), s(12, 20)),
    v =
      o >= s(12, 15)
        ? au(o, s(12, 15), s(12, 30))
        : 1 - au(o, s(3, 18), s(4, 8)),
    y = ou(o, s(5, 5), s(6, 20), s(9, 15), s(10, 20)),
    b = ou(o, s(7, 8), s(7, 20), s(8, 10), s(8, 22)),
    x =
      o >= s(10, 1) ? au(o, s(10, 1), s(11, 1)) : 1 - au(o, s(3, 15), s(5, 1)),
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
function lu(e, t) {
  let n = t?.get(`season`) ?? null,
    r = -1,
    i = null;
  return () => {
    let t = e.date,
      a = t.y * 400 + t.m * 32 + t.d;
    return ((a !== r || !i) && ((r = a), (i = cu(t, n))), i);
  };
}
var uu = {
    OFFICE: 0,
    ZAKKYO: 1,
    MANSION: 2,
    SHITAMACHI: 3,
    KURA: 4,
    DEPATO: 5,
  },
  wae = [
    [24, 64],
    [5, 8.5],
    [14, 30],
    [4.5, 8],
    [6, 11],
    [36, 70],
  ],
  Tae = {
    nihonbashi: 0.07,
    kanda: 0.04,
    ueno: 0.03,
    ameyoko: 0.02,
    shimbashi: 0.02,
    "tokyo-east-generic": 0.04,
    asakusa: 0.06,
    hongo: 0.04,
  },
  Eae = {
    ginza: 0.16,
    nihonbashi: 0.12,
    ueno: 0.08,
    shimbashi: 0.05,
    akihabara: 0.06,
    shinjuku: 0.1,
    shibuya: 0.08,
    ikebukuro: 0.1,
  },
  du = [
    [15327956, 3],
    [14207924, 3],
    [13218454, 2],
    [11043946, 2],
    [9071192, 1],
    [14145748, 3],
    [12040888, 2],
    [15921128, 2],
    [9325122, 1],
    [7238776, 1],
    [13090980, 1],
    [10135214, 1],
  ],
  fu = [
    [15722973, 4],
    [14866114, 3],
    [13812392, 2],
    [13089190, 2],
    [12098178, 2],
    [14474454, 3],
    [10783350, 1],
    [12892320, 1],
    [15262422, 2],
  ],
  pu = [
    [14209218, 3],
    [13023396, 2],
    [11841190, 2],
    [10260354, 1],
    [14867922, 2],
    [9078144, 1],
  ],
  mu = [
    [16777215, 3],
    [14214896, 3],
    [13623516, 2],
    [14870250, 2],
    [12635352, 2],
    [12110020, 1],
  ],
  hu = [
    [15261904, 3],
    [14076080, 2],
    [13155496, 2],
    [11047024, 1],
    [12371140, 2],
    [15789280, 2],
    [10135728, 1],
  ],
  Dae = [
    [6981800, 2],
    [10134182, 3],
    [11563088, 1],
    [14209728, 2],
    [8034950, 1],
  ],
  gu = [
    [9080468, 3],
    [6186094, 3],
    [4212302, 2],
    [10119760, 1],
  ],
  Oae = [
    [9060408, 3],
    [4876932, 2],
    [6191706, 2],
    [8026742, 2],
  ],
  kae = [
    [12071466, 3],
    [3041860, 2],
    [2903946, 2],
    [14198842, 1],
    [6961706, 1],
    [14708784, 1],
  ],
  _u = [
    [15261904, 3],
    [13681840, 2],
    [15789800, 2],
    [13152400, 1],
  ],
  Aae = [],
  vu = (e) => !!e && (e.kind === `boulevard` || e.kind === `arterial`);
