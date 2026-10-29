// tokyo/assets/region-tokyo-55J_WESF 144 — spots
// Lines 61262-61370 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function hpe(e) {
  Object.assign(oee, mpe);
  let t = {};
  for (let n of Co()) {
    if (!n.startsWith(`peds.bubble.`)) continue;
    let r = n.slice(12),
      i = yo(n),
      a = cpe[r] ?? (r in ft ? ft[r][2] : 0);
    t[r] = [
      i.ja,
      e.state.lang === `ja` ? `` : e.t({ zh: i.zh ?? ``, en: i.en ?? `` }),
      a,
    ];
  }
  let n = Im(e),
    r = {};
  for (let [e, t] of Object.entries(spe)) r[e] = Mm(e, t);
  return {
    specs: npe,
    mix: r,
    activity: (e) => n.activity(e),
    spots: (t, r) => {
      let i = e.culture?.lifeSites ?? null;
      ope(e, n, { spots: i?.spots ?? [] })(t, r);
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
    cyclistKinds: lpe,
    umbrellas: ppe,
    parasol: 0.35,
    parasols: fpe,
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
    props: upe,
    bike: {
      frame: 12896460,
      trim: 12106944,
      basket: 1842206,
      plate: null,
      extra: dpe,
    },
  };
}
var Nx = new Uint8Array(256);
for (let e = 0; e < 256; e++) Nx[e] = Math.round(255 * (e / 255) ** 2.2);
