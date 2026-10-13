// tokyo__assets__region-tokyo-BcM3fReU 107 — auntie
// Lines 49997-50241 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var oE = {
    marunouchi: {
      office: 40,
      tourist: 8,
      student: 3,
      auntie: 4,
      uncle: 3,
      elder: 3,
      delivery: 4,
      vendor: 0.5,
    },
    nihonbashi: {
      office: 30,
      tourist: 10,
      auntie: 8,
      elder: 5,
      uncle: 5,
      student: 4,
      delivery: 4,
      vendor: 1,
    },
    ginza: {
      tourist: 28,
      auntie: 14,
      office: 14,
      elder: 6,
      uncle: 4,
      student: 4,
      delivery: 3,
      vendor: 1,
    },
    shimbashi: {
      office: 34,
      uncle: 10,
      tourist: 6,
      auntie: 4,
      elder: 4,
      student: 3,
      delivery: 4,
      vendor: 1,
    },
    kanda: {
      office: 20,
      student: 14,
      uncle: 8,
      tourist: 6,
      auntie: 5,
      elder: 5,
      delivery: 4,
      worshipper: 1,
      vendor: 1,
    },
    akihabara: {
      tourist: 40,
      student: 10,
      office: 8,
      vendor: 6,
      uncle: 4,
      delivery: 4,
      auntie: 2,
      elder: 2,
    },
    ameyoko: {
      tourist: 18,
      uncle: 12,
      auntie: 10,
      elder: 10,
      vendor: 8,
      office: 6,
      student: 6,
      delivery: 3,
      family: 4,
    },
    ueno: {
      tourist: 14,
      elder: 12,
      auntie: 10,
      student: 8,
      uncle: 8,
      family: 8,
      office: 6,
      delivery: 3,
      worshipper: 1,
      monk: 0.3,
    },
    "tokyo-east-generic": {
      office: 14,
      auntie: 10,
      uncle: 10,
      elder: 10,
      student: 8,
      delivery: 5,
      family: 4,
      tourist: 3,
    },
  },
  sE = { "jp-wasshoi": 2 },
  cE = [
    `student`,
    `student`,
    `auntie`,
    `auntie`,
    `delivery`,
    `delivery`,
    `office`,
    `uncle`,
    `elder`,
    `tourist`,
  ],
  lE = {
    bag: [
      [-0.02, -0.24, 0, 0.11, 0.3, 0.27, 12885102, 0.15, 0],
      [-0.02, -0.102, 0, 0.112, 0.024, 0.272, 11569758, 0, 0],
      [0, -0.05, -0.045, 0.01, 0.1, 0.01, 2761760, 0, -0.35],
      [0, -0.05, 0.045, 0.01, 0.1, 0.01, 2761760, 0, 0.35],
    ],
    cup: [
      [-0.13, -0.06, 0.029, 0.032, 15921386, 0.1],
      [-0.06, -0.01, 0.0335, 0.036, 11041360, 0],
      [-0.01, 0.01, 0.037, 0.03, 16184558, 0],
    ],
  },
  uE = [
    [0, 0.74, 0.3, 0.16, 0.018, 0.34, 10132640],
    [0, 0.54, 0.43, 0.012, 0.4, 0.012, 10132640],
  ],
  dE = [1776414, 1776414, 1776414, 2763312, 15921386, 14207160, 3813440],
  fE = [
    15002348, 15002348, 15002348, 14673640, 15265262, 1776414, 1776414, 1976392,
    3816e3, 5906480,
  ],
  pE = {
    "jp-salaryman2": Ze({
      top: `#121210`,
      bottom: `#0b0b08`,
      topKey: 0.45,
      bottomKey: 0.7,
      waist: 0.48,
      shoe: 0.03,
      outer: !0,
      skin: 0.3113,
    }),
    "jp-shirt-tie": Ze({
      top: `#c6c8d0`,
      bottom: `#4a585e`,
      topKey: 0.36,
      bottomKey: 0.7,
      waist: 0.615,
      shoe: 0.03,
      skin: 0.3007,
    }),
    "jp-ol-suit": Ze({
      top: `#1a191a`,
      bottom: `#161719`,
      topKey: 0.45,
      bottomKey: 0.7,
      waist: 0.52,
      shoe: 0.03,
      outer: !0,
      skin: 0.2264,
    }),
    "jp-police": Ze({
      top: `#4d657d`,
      bottom: `#3f5266`,
      topKey: 0.42,
      bottomKey: 0.6,
      waist: 0.575,
      shoe: 0.08,
      skin: 0.3007,
    }),
  };
function mE(e) {
  Object.assign($e, pE);
  let t = {};
  for (let n of sc()) {
    if (!n.startsWith(`peds.bubble.`)) continue;
    let r = n.slice(12),
      i = rc(n),
      a = sE[r] ?? (r in mt ? mt[r][2] : 0);
    t[r] = [
      i.ja,
      e.state.lang === `ja` ? `` : e.t({ zh: i.zh ?? ``, en: i.en ?? `` }),
      a,
    ];
  }
  let n = I_(e),
    r = {};
  for (let [e, t] of Object.entries(oE)) r[e] = O_(e, t);
  return {
    specs: UT,
    mix: r,
    activity: (e) => n.activity(e),
    spots: (t, r) => {
      let i = e.culture?.lifeSites ?? null;
      aE(e, n, { spots: i?.spots ?? [] })(t, r);
    },
    distinctPairs: !0,
    stoolGroups: !1,
    umbrellaSpace: !0,
    nightlife: [`shimbashi`, `ginza`, `akihabara`, `kanda`, `ameyoko`],
    busy: {
      ameyoko: 1.45,
      akihabara: 1.3,
      ginza: 1.3,
      shimbashi: 1.15,
      marunouchi: 1.05,
    },
    cycle: {
      "tokyo-east-generic": 1.8,
      ueno: 1.3,
      kanda: 1.3,
      nihonbashi: 1.1,
      akihabara: 1,
      shimbashi: 1,
      marunouchi: 0.8,
      ginza: 0.7,
      ameyoko: 0.6,
    },
    cycleMul: 1.6,
    cyclistKinds: cE,
    umbrellas: fE,
    parasol: 0.35,
    parasols: dE,
    lines: t,
    font: e.region.signage.fonts.sans,
    bodyWorker: () =>
      new Worker(
        new URL(
          `/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.js`,
          `` + import.meta.url,
        ),
        { type: `module`, name: `tokyo-peds` },
      ),
    props: lE,
    bike: {
      frame: 12896460,
      trim: 12106944,
      basket: 1842206,
      plate: null,
      extra: uE,
    },
  };
}
var hE = new Uint8Array(256);
for (let e = 0; e < 256; e++) hE[e] = Math.round(255 * (e / 255) ** 2.2);
