// tokyo__assets__audio-DzcbodvB 15 — inst
// Lines 6202-6444 of readable/tokyo__assets__audio-DzcbodvB.pretty.js (statement-aligned).
function gn(e) {
  let t = new o(Xt(`edm/` + e)),
    n = t.pick([126, 128, 128, 130]),
    r = t.pick([9, 5, 7, 2, 0]),
    i = tn(r),
    a = t.pick(hn),
    s = Zt(
      [
        [`intro`, 8, a],
        [`build`, 8, a],
        [`drop`, 16, a],
        [`break`, 8, a],
        [`build`, 8, a],
        [`drop2`, 16, a],
        [`outro`, 8, a],
      ],
      r,
    ),
    c = Yt(t, {
      chords: s[2].prog.slice(0, 8),
      key: r,
      scale: Vt.pentaMin,
      lo: 69 + i,
      hi: 86 + i,
      inst: `suona`,
      vel: 0.85,
      rhythms: q(
        `x-x-x-x-x---x-x-`,
        `x--x--x-x-x-x---`,
        `x-x-x---x-x-x-x-`,
        `x-xxx-x-x---x---`,
      ),
      cadence: q(`x-x-x-----------`, `x---x---x-------`),
    }),
    l = Yt(t, {
      chords: s[3].prog,
      key: r,
      scale: Vt.pentaMin,
      lo: 67 + i,
      hi: 84 + i,
      inst: `suona`,
      vel: 0.7,
      rhythms: q(`x-------x-------`, `x-----------x---`, `x---x-------x---`),
      cadence: q(`x---------------`),
    }),
    u = { v: null },
    d = { v: null },
    [f, p] = t.pick(pn);
  return {
    title: { zh: f, en: p },
    artist: t.pick(mn),
    bpm: n,
    swing: 0.5,
    beatsPerBar: 4,
    bars: $t(s),
    bar(t) {
      let [n, r, a] = Qt(s, t),
        f = n.prog[r],
        p = r + 1 < n.bars ? n.prog[r + 1] : (a?.prog[0] ?? f),
        m = new o(Xt(`edm/${e}/${t}`)),
        h = [],
        g = n.kind,
        _ = g.startsWith(`drop`);
      if (g === `intro`)
        (G(`x...x...x...x...`, `kick`, h),
          G(`..x...x...x...x.`, `hat_c`, h, `drums`, 0.25, 0.7),
          r >= 4 && G(`....x.......x...`, `clap`, h, `drums`, 0.25, 0.8),
          r === 0 &&
            h.push({
              t: 0,
              m: 60,
              d: 3,
              v: 0.9,
              inst: `drum:gong`,
              ch: `perc`,
            }),
          K(f, d, `whole`, h, m, `pad`, 60 + i, 0.55, `pad`),
          nn(f, p, `root`, h, m, `synthbass`, 33 + i));
      else if (g === `build`) {
        r < 6 && G(`x...x...x...x...`, `kick`, h);
        let e =
          r < 2
            ? `x...x...x...x...`
            : r < 4
              ? `x.x.x.x.x.x.x.x.`
              : `xxxxxxxxxxxxxxxx`;
        if (r < 7) G(e, `snare`, h, `drums`, 0.25, 0.35 + r * 0.08);
        else
          for (let e = 0; e < 32; e++)
            h.push({
              t: e * 0.125,
              m: 60,
              d: 0.125,
              v: 0.5 + e * 0.015,
              inst: `drum:snare`,
              ch: `drums`,
            });
        (r === 6 &&
          h.push({ t: 0, m: 60, d: 8, v: 0.7, inst: `drum:riser`, ch: `fx` }),
          r === 7 &&
            h.push({
              t: 3.5,
              m: 60,
              d: 0.5,
              v: 1,
              inst: `drum:vox_hey`,
              ch: `fx`,
            }),
          K(f, u, `offbeat`, h, m, `supersaw`, 64 + i, 0.35 + r * 0.05));
        for (let e = 0; e < 8; e++)
          h.push({
            t: e * 0.5,
            m: W(39 + i, [f.bass], 33, 50),
            d: 0.4,
            v: 0.8,
            inst: `synthbass`,
            ch: `bass`,
          });
      } else if (_) {
        (G(`x...x...x...x...`, `kick`, h),
          G(`....x.......x...`, `clap`, h),
          G(`..o...o...o...o.`, `hat_o`, h, `drums`, 0.25, 0.6),
          G(`gggggggggggggggg`, `hat_c`, h, `drums`, 0.25, 0.5),
          G(`..x...x...x...x.`, `cymbal_bo`, h, `perc`, 0.25, 0.28),
          G(
            r % 2 ? `x..x..x...x.x...` : `x..x..x.x.x.x..x`,
            `bigdrum`,
            h,
            `perc`,
            0.25,
            0.7,
          ),
          r === 0 &&
            (h.push(
              { t: 0, m: 60, d: 2, v: 1, inst: `drum:impact`, ch: `fx` },
              { t: 0, m: 60, d: 2, v: 0.8, inst: `drum:crash`, ch: `drums` },
            ),
            h.push({
              t: 0,
              m: 60,
              d: 3,
              v: 0.8,
              inst: `drum:gong`,
              ch: `perc`,
            })),
          r % 4 == 3 &&
            h.push({
              t: 3,
              m: 60,
              d: 1,
              v: 0.8,
              inst: `drum:opera_gong`,
              ch: `perc`,
            }),
          r % 8 == 4 &&
            m.chance(0.6) &&
            h.push({
              t: 2.5,
              m: 60,
              d: 0.5,
              v: 0.8,
              inst: `drum:vox_hey`,
              ch: `fx`,
            }),
          nn(f, p, `edm`, h, m, `synthbass`, 33 + i),
          K(f, u, `stab`, h, m, `supersaw`, 66 + i, 0.62));
        let e = c[r % c.length];
        for (let t of e)
          h.push({ ...t, m: t.m + (g === `drop2` && r >= 8 ? 12 : 0) });
        if (g === `drop2`)
          for (let t of e)
            h.push({ ...t, inst: `erhu`, v: t.v * 0.45, m: t.m - 12 });
      } else
        g === `break`
          ? (G(
              r % 2 ? `x.......x..x....` : `x.......x.......`,
              `bigdrum`,
              h,
              `perc`,
              0.25,
              0.75,
            ),
            K(f, d, `whole`, h, m, `pad`, 62 + i, 0.6, `pad`),
            K(f, u, `arp16`, h, m, `marimba`, 72 + i, 0.35),
            h.push(...l[r % l.length].map((e) => ({ ...e }))),
            nn(f, p, `root`, h, m, `synthbass`, 33 + i))
          : (r < 6 && G(`x...x...x...x...`, `kick`, h),
            G(`..x...x...x...x.`, `hat_c`, h, `drums`, 0.25, 0.6 - r * 0.05),
            K(f, d, `whole`, h, m, `pad`, 60 + i, 0.5 - r * 0.05, `pad`),
            r === 7 &&
              h.push({
                t: 0,
                m: 60,
                d: 4,
                v: 0.9,
                inst: `drum:gong`,
                ch: `perc`,
              }));
      return h;
    },
    filter(e) {
      let [t, n] = Qt(s, e);
      return t.kind === `intro`
        ? [400 + n * 500, 900 + n * 500]
        : t.kind === `build`
          ? [700 * 1.45 ** n, 700 * 1.45 ** (n + 1)]
          : t.kind === `outro`
            ? [16e3 / (1 + n), 16e3 / (2 + n)]
            : [18e3, 18e3];
    },
    sidechain(e) {
      let [t] = Qt(s, e);
      return t.kind.startsWith(`drop`)
        ? 0.75
        : t.kind === `intro` || t.kind === `build`
          ? 0.45
          : 0;
    },
  };
}
var _n = [
    [`台客萬歲`, `Long Live Taike`],
    [`機車騎士`, `Scooter Rider`],
    [`夜市搖滾`, `Night Market Rock`],
    [`中山高`, `Freeway No. 1`],
    [`拼了啦`, `Go All In`],
    [`紅燈右轉`, `Right on Red`],
    [`颱風天`, `Typhoon Day`],
    [`古早味`, `Old-School Flavor`],
  ],
  vn = [
    `台客大樂隊 Taike Big Band`,
    `鐵窗樂團 Iron Window`,
    `阿嘉與機車 A-Jia & the Scooters`,
    `八點檔 Prime Time`,
  ],
  yn = [
    [`I`, `bVII`, `IV`, `I`],
    [`I`, `IV`, `V`, `IV`],
    [`vi`, `IV`, `I`, `V`],
    [`i`, `bVI`, `bVII`, `i`],
    [`I`, `V`, `bVII`, `IV`],
  ];
