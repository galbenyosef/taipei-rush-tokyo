// tokyo__assets__worker-DuEI-Qg4 14 — pick
// Lines 5948-6093 of readable/tokyo__assets__worker-DuEI-Qg4.pretty.js (statement-aligned).
const Bt = [
    [`凌晨兩點的滷肉飯`, `2AM Braised Pork Rice`],
    [`騎樓雨聲`, `Arcade Rain`],
    [`臭豆腐夢`, `Stinky Tofu Dreams`],
    [`夜市打烊`, `Market Closing Time`],
    [`頂樓加蓋`, `Rooftop Addition`],
    [`鐵窗貓`, `Window-Cage Cat`],
    [`便利商店的光`, `Convenience Store Glow`],
    [`公館書店`, `Gongguan Bookshop`],
    [`豆花時間`, `Douhua Hour`],
  ],
  Vt = [
    `夜貓子 Night Owl`,
    `Beats by 阿嬤 Ama`,
    `lofi.tpe`,
    `溫州街 Wenzhou St.`,
    `雨天 Rainy Day`,
  ],
  Ht = [
    [`ii9`, `V9`, `Imaj9`, `vi9`],
    [`IVmaj7`, `iii7`, `vi9`, `V7sus4`],
    [`Imaj7`, `vi7`, `ii9`, `V9`],
    [`IVmaj7`, `III7`, `vi9`, `I7`],
    [`vi9`, `ii9`, `Vsus4`, `Imaj7`],
  ];
function Ut(t) {
  let n = new e(Y(`lofi/` + t)),
    r = n.pick([70, 74, 78, 82, 86]),
    i = n.pick([0, 2, 3, 5, 7, 8, 10]),
    a = Pt(i),
    o = n.pick(Ht),
    s = At(
      [
        [`intro`, 4, o],
        [`a`, 8, o],
        [`b`, 8, o],
        [`a2`, 8, o],
        [`b`, 8, o],
        [`outro`, 4, o],
      ],
      i,
    ),
    c = n.pick([`flute`, `musicbox`, `erhu`, `epiano`]),
    l = J(n, {
      chords: s[2].prog,
      key: i,
      scale: G.pentaMaj,
      lo: 67 + a,
      hi: 84 + a,
      inst: c,
      vel: 0.6,
      rhythms: Q(
        `x---x-----x-----`,
        `..x-x---x-------`,
        `x-------x-x-----`,
        `....x-x-x---x---`,
      ),
      cadence: Q(`x---------------`, `x-----x---------`),
    }),
    u = n.pick([`x.....x...x.x...`, `x.......x.x.....`, `x..x......x.....`]),
    d = { v: null },
    [f, p] = n.pick(Bt);
  return {
    title: { zh: f, en: p },
    artist: n.pick(Vt),
    bpm: r,
    swing: n.range(0.57, 0.63),
    beatsPerBar: 4,
    bars: Mt(s),
    bar(n) {
      let [r, i, o] = jt(s, n),
        c = r.prog[i],
        f = i + 1 < r.bars ? r.prog[i + 1] : (o?.prog[0] ?? c),
        p = new e(Y(`lofi/${t}/${n}`)),
        m = [],
        h = r.kind;
      return (
        h !== `intro` &&
          h !== `outro` &&
          ((h === `a2` && i < 2) || q(u, `kick_lofi`, m),
          q(
            `....x.......x..` + (p.chance(0.3) ? `g` : `.`),
            p.chance(0.2) ? `rim` : `snare_lofi`,
            m,
          ),
          q(`x.xgx.x.x.xgx.xg`, `hat_c`, m, `drums`, 0.25, 0.45),
          h === `b` && q(`..g...g...g...g.`, `shaker`, m, `perc`, 0.25, 0.5)),
        h !== `intro` && X(c, f, `lofi`, m, p, `bass`, 33 + a),
        Z(
          c,
          d,
          `lofi`,
          m,
          p,
          `epiano`,
          62 + a,
          h === `intro` || h === `outro` ? 0.55 : 0.68,
        ),
        h === `b` && m.push(...l[i % l.length].map((e) => ({ ...e }))),
        h === `intro` &&
          i === 0 &&
          m.push({
            t: 0.5,
            m: 60,
            d: 2,
            v: 0.35,
            inst: `sfx:vendor_call`,
            ch: `fx`,
          }),
        m
      );
    },
    filter(e) {
      let [t, n] = jt(s, e);
      return t.kind === `intro`
        ? n < 3
          ? [900, 900]
          : [900, 6500]
        : t.kind === `outro`
          ? [6500 - n * 1400, 5e3 - n * 1200]
          : [6500, 6500];
    },
    sidechain: () => 0.2,
  };
}
const Wt = [
    [`三太子降臨`, `Third Prince Descends`],
    [`神明 Drop`, `Deity Drop`],
    [`遶境 Rave`, `Pilgrimage Rave`],
    [`鞭炮 Bass`, `Firecracker Bass`],
    [`八家將`, `Eight Generals`],
    [`霓虹廟埕`, `Neon Temple Square`],
    [`香爐 Trap`, `Incense Burner Trap`],
  ],
  Gt = [
    `DJ 哪吒 Nezha`,
    `霓虹神明 Neon Gods Crew`,
    `廟口 Soundsystem`,
    `MC 三太子`,
  ],
  Kt = [
    [`i`, `bVI`, `bIII`, `bVII`],
    [`i`, `bVII`, `bVI`, `bVII`],
    [`bVI`, `bVII`, `i`, `i`],
    [`i`, `bVI`, `bVII`, `v`],
  ];
