// tokyo/assets/region-tokyo-55J_WESF 70 — math
// Lines 30427-30705 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Tse(e, t, n) {
  let r = Sf[e] ?? Sf[`tokyo-east-generic`],
    i = xf(t.off ? r.off : r.wk, n);
  return (
    t.obon &&
      (e === `marunouchi` ||
        e === `nihonbashi` ||
        e === `shimbashi` ||
        e === `kanda`) &&
      (i *= 0.7),
    t.yearEnd && e === `ameyoko` && n >= 9 && n < 20 && (i = 1),
    Math.max(0, Math.min(1, i))
  );
}
var Cf = {
    marunouchi: 1,
    nihonbashi: 0.8,
    shimbashi: 0.9,
    kanda: 0.75,
    ginza: 0.4,
    akihabara: 0.35,
    ueno: 0.5,
    ameyoko: 0.3,
    "tokyo-east-generic": 0.6,
    kasumigaseki: 1,
    shiba: 0.8,
    kokyo: 0.75,
    suidobashi: 0.6,
    hongo: 0.5,
    roppongi: 0.5,
    asakusa: 0.2,
    "nishi-shinjuku": 1,
    shinjuku: 0.6,
    shibuya: 0.45,
    ikebukuro: 0.55,
    yoyogi: 0.7,
    aoyama: 0.6,
    harajuku: 0.2,
    takadanobaba: 0.4,
  },
  Ese = [
    [0, 0.2],
    [0.7, 0.12],
    [1, 0],
    [4.5, 0.04],
    [7, 0.16],
    [10, 0.45],
    [13, 0.55],
    [18, 0.55],
    [21, 0.42],
    [23.5, 0.3],
  ],
  Dse = [
    [0, 0.78],
    [0.67, 0.42],
    [1, 0],
    [4.5, 0.05],
    [6, 0.2],
    [7.5, 0.9],
    [8.5, 1],
    [9.5, 0.82],
    [11, 0.48],
    [12.3, 0.58],
    [17, 0.5],
    [18.3, 0.85],
    [20, 0.75],
    [22, 0.62],
    [23.5, 0.85],
  ],
  Ose = [
    [0, 0.3],
    [0.67, 0.18],
    [1, 0],
    [4.5, 0.05],
    [6, 0.2],
    [7.5, 1],
    [9.5, 1],
    [11, 0.5],
    [12.3, 0.58],
    [13.5, 0.48],
    [17, 0.48],
    [17.5, 0.95],
    [20, 0.95],
    [22, 0.55],
    [23.5, 0.45],
  ],
  kse = [
    [0, 0.25],
    [1, 0],
    [4.5, 0.04],
    [7, 0.3],
    [9, 0.45],
    [11, 0.55],
    [18, 0.7],
    [21, 0.5],
    [23.5, 0.35],
  ];
function Ase(e, t, n) {
  let r = pf(n);
  if (r >= 1 && r < 4.5) return 0;
  let i = Cf[e] ?? 0.6,
    a = e === `shimbashi`,
    o,
    s;
  return (
    t.off
      ? ((o = xf(Ese, r)), (s = o))
      : ((o = xf(a ? Dse : Ose, r)), (s = xf(kse, r))),
    Math.max(0, Math.min(1, i * o + (1 - i) * s))
  );
}
function jse(e, t, n) {
  let r = pf(n);
  return t.off
    ? r >= 21.5 || r < 1
      ? -0.6
      : 0
    : r >= 7.5 && r < 9.6
      ? (Cf[e] ?? 0.6)
      : e === `shimbashi` || e === `kanda`
        ? r >= 17.8 && r < 20
          ? 0.7
          : r >= 23 || r < 1
            ? -1
            : 0
        : r >= 17.5 && r < 20
          ? -(Cf[e] ?? 0.6)
          : r >= 23 || r < 1
            ? -0.8
            : 0;
}
function Mse(e, t) {
  let n = pf(t),
    r = xf(
      [
        [0, 0.9],
        [0.25, 1],
        [0.75, 0],
        [23, 0],
        [23.5, 0.45],
        [23.99, 0.85],
      ],
      n,
    );
  return n >= 1 && n < 23 ? 0 : Math.max(0, r * (e.off ? 0.6 : 1));
}
function Nse(e) {
  let t = pf(e);
  return t < 17 || t >= 17.5 ? 0 : 1 - (t - 17) / 0.5;
}
function Pse(e, t) {
  let n = pf(t);
  return n >= 17.4 || n < 7
    ? 0
    : e.schoolBreak || e.off
      ? n >= 9
        ? n >= 17
          ? 1 - (n - 17) / 0.4
          : 1
        : 0.2
      : n >= 7.3 && n < 8.3
        ? 0.8
        : n >= 14.3 && n < 17
          ? 1
          : n >= 17
            ? 1 - (n - 17) / 0.4
            : 0;
}
function wf(e, t) {
  let n = pf(t);
  return e.schoolBreak || e.kind === `sun` || e.kind === `holiday` || e.newYear
    ? 0.25
    : e.kind === `sat`
      ? n >= 9 && n < 19
        ? 0.5
        : 0.15
      : (n >= 7.2 && n < 8.5) || (n >= 15.3 && n < 19)
        ? 1
        : n >= 19 && n < 22
          ? 0.45
          : n >= 8.5 && n < 15.3
            ? 0.15
            : 0.05;
}
function Tf(e, t) {
  return e.off
    ? 0
    : xf(
        [
          [0, 0],
          [11.6, 0],
          [11.9, 1],
          [12.9, 1],
          [13.2, 0.25],
          [13.5, 0],
          [24, 0],
        ],
        pf(t),
      );
}
function Ef(e, t, n) {
  if (
    (e !== `shimbashi` &&
      e !== `kanda` &&
      e !== `ginza` &&
      e !== `ameyoko` &&
      e !== `ueno` &&
      e !== `roppongi` &&
      e !== `asakusa`) ||
    t.newYear
  )
    return 0;
  let r = xf(
      [
        [0, 0.55],
        [0.7, 0.2],
        [1.5, 0],
        [17.5, 0],
        [18.5, 0.8],
        [20, 1],
        [22.5, 0.85],
        [23.9, 0.6],
      ],
      pf(n),
    ),
    i = t.wd === 5 && !t.off ? 1 : t.off ? 0.4 : 0.82;
  return Math.min(1, r * i);
}
var Fse = {
  ginza: {
    days: [0, 6],
    holidays: !0,
    start: 12,
    endSummer: 18,
    endWinter: 17,
  },
  akihabara: {
    days: [0],
    holidays: !1,
    start: 13,
    endSummer: 18,
    endWinter: 17,
  },
};
function Df(e, t, n) {
  let r = Fse[e];
  if (!r || (!r.days.includes(t.wd) && !(r.holidays && t.holiday))) return !1;
  let i = t.m >= 4 && t.m <= 9 ? r.endSummer : r.endWinter;
  return n >= r.start && n < i;
}
function Ise(e) {
  let { m: t, d: n } = e;
  return t === 12 || t <= 2
    ? 2
    : +((t === 10 && n >= 20) || t === 11 || t === 3 || (t === 4 && n <= 15));
}
function Lse(e, t, n) {
  let r = n ?? {},
    { m: i, d: a } = e;
  return (
    (r.hotDrinks =
      (i === 10 && a >= 20) || i >= 11 || i <= 3 || (i === 4 && a <= 15)),
    (r.summerFestival = i === 7 || i === 8),
    (r.hanami = t.sakura >= 0.5 ? Math.min(1, (t.sakura - 0.5) * 2.5) : 0),
    (r.ginkgoLeaves = Math.max(
      Math.max(0, t.ginkgo - 0.55) * 2.2,
      t.ginkgoFall,
    )),
    r
  );
}
function Rse(e) {
  let t = Math.max(0, Math.min(1, e));
  return {
    umbrellaBags: t > 0.12,
    plazaWait: Math.max(0.1, 1 - 1.6 * t),
    openAir: Math.max(0.05, 1 - 1.2 * t),
  };
}
