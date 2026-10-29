// tokyo/assets/region-tokyo-A7LxHjud 144 — spots
// Lines 61353-61461 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Dpe(e) {
  Object.assign(Bee, Epe);
  let t = {};
  for (let n of Co()) {
    if (!n.startsWith(`peds.bubble.`)) continue;
    let r = n.slice(12),
      i = yo(n),
      a = bpe[r] ?? (r in nt ? nt[r][2] : 0);
    t[r] = [
      i.ja,
      e.state.lang === `ja` ? `` : e.t({ zh: i.zh ?? ``, en: i.en ?? `` }),
      a,
    ];
  }
  let n = zm(e),
    r = {};
  for (let [e, t] of Object.entries(ype)) r[e] = Fm(e, t);
  return {
    specs: mpe,
    mix: r,
    activity: (e) => n.activity(e),
    spots: (t, r) => {
      let i = e.culture?.lifeSites ?? null;
      vpe(e, n, { spots: i?.spots ?? [] })(t, r);
    },
    distinctPairs: !0,
    stoolGroups: !1,
    umbrellaSpace: !0,
    nightlife: [
      `shimbashi`,
      `ginza`,
      `akihabara`,
      `kanda`,
      `ameyoko`,
      `roppongi`,
      `asakusa`,
      `shinjuku`,
      `shibuya`,
      `ikebukuro`,
    ],
    busy: {
      ameyoko: 1.45,
      akihabara: 1.3,
      ginza: 1.3,
      shimbashi: 1.15,
      marunouchi: 1.05,
      asakusa: 1.35,
      roppongi: 1.15,
      suidobashi: 1.05,
      shibuya: 1.55,
      shinjuku: 1.5,
      harajuku: 1.45,
      ikebukuro: 1.3,
      "nishi-shinjuku": 1.05,
      aoyama: 1,
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
      hongo: 1.6,
      suidobashi: 1.1,
      asakusa: 0.9,
      kokyo: 0.8,
      kasumigaseki: 0.6,
      roppongi: 0.7,
      shiba: 1,
      shibuya: 0.9,
      harajuku: 0.8,
      shinjuku: 0.9,
      "nishi-shinjuku": 0.6,
      ikebukuro: 1.1,
      yoyogi: 1.3,
      aoyama: 1,
      takadanobaba: 1.5,
    },
    cycleMul: 1.6,
    cyclistKinds: xpe,
    umbrellas: Tpe,
    parasol: 0.35,
    parasols: wpe,
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
    props: Spe,
    bike: {
      frame: 12896460,
      trim: 12106944,
      basket: 1842206,
      plate: null,
      extra: Cpe,
    },
  };
}
var Ix = new Uint8Array(256);
for (let e = 0; e < 256; e++) Ix[e] = Math.round(255 * (e / 255) ** 2.2);
