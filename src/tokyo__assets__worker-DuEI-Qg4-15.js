// tokyo__assets__worker-DuEI-Qg4 15 — inst
// Lines 6094-6336 of readable/tokyo__assets__worker-DuEI-Qg4.pretty.js (statement-aligned).
function qt(t) {
  let n = new e(Y(`edm/` + t)),
    r = n.pick([126, 128, 128, 130]),
    i = n.pick([9, 5, 7, 2, 0]),
    a = Pt(i),
    o = n.pick(Kt),
    s = At(
      [
        [`intro`, 8, o],
        [`build`, 8, o],
        [`drop`, 16, o],
        [`break`, 8, o],
        [`build`, 8, o],
        [`drop2`, 16, o],
        [`outro`, 8, o],
      ],
      i,
    ),
    c = J(n, {
      chords: s[2].prog.slice(0, 8),
      key: i,
      scale: G.pentaMin,
      lo: 69 + a,
      hi: 86 + a,
      inst: `suona`,
      vel: 0.85,
      rhythms: Q(
        `x-x-x-x-x---x-x-`,
        `x--x--x-x-x-x---`,
        `x-x-x---x-x-x-x-`,
        `x-xxx-x-x---x---`,
      ),
      cadence: Q(`x-x-x-----------`, `x---x---x-------`),
    }),
    l = J(n, {
      chords: s[3].prog,
      key: i,
      scale: G.pentaMin,
      lo: 67 + a,
      hi: 84 + a,
      inst: `suona`,
      vel: 0.7,
      rhythms: Q(`x-------x-------`, `x-----------x---`, `x---x-------x---`),
      cadence: Q(`x---------------`),
    }),
    u = { v: null },
    d = { v: null },
    [f, p] = n.pick(Wt);
  return {
    title: { zh: f, en: p },
    artist: n.pick(Gt),
    bpm: r,
    swing: 0.5,
    beatsPerBar: 4,
    bars: Mt(s),
    bar(n) {
      let [r, i, o] = jt(s, n),
        f = r.prog[i],
        p = i + 1 < r.bars ? r.prog[i + 1] : (o?.prog[0] ?? f),
        m = new e(Y(`edm/${t}/${n}`)),
        h = [],
        g = r.kind,
        _ = g.startsWith(`drop`);
      if (g === `intro`)
        (q(`x...x...x...x...`, `kick`, h),
          q(`..x...x...x...x.`, `hat_c`, h, `drums`, 0.25, 0.7),
          i >= 4 && q(`....x.......x...`, `clap`, h, `drums`, 0.25, 0.8),
          i === 0 &&
            h.push({
              t: 0,
              m: 60,
              d: 3,
              v: 0.9,
              inst: `drum:gong`,
              ch: `perc`,
            }),
          Z(f, d, `whole`, h, m, `pad`, 60 + a, 0.55, `pad`),
          X(f, p, `root`, h, m, `synthbass`, 33 + a));
      else if (g === `build`) {
        i < 6 && q(`x...x...x...x...`, `kick`, h);
        let e =
          i < 2
            ? `x...x...x...x...`
            : i < 4
              ? `x.x.x.x.x.x.x.x.`
              : `xxxxxxxxxxxxxxxx`;
        if (i < 7) q(e, `snare`, h, `drums`, 0.25, 0.35 + i * 0.08);
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
        (i === 6 &&
          h.push({ t: 0, m: 60, d: 8, v: 0.7, inst: `drum:riser`, ch: `fx` }),
          i === 7 &&
            h.push({
              t: 3.5,
              m: 60,
              d: 0.5,
              v: 1,
              inst: `drum:vox_hey`,
              ch: `fx`,
            }),
          Z(f, u, `offbeat`, h, m, `supersaw`, 64 + a, 0.35 + i * 0.05));
        for (let e = 0; e < 8; e++)
          h.push({
            t: e * 0.5,
            m: K(39 + a, [f.bass], 33, 50),
            d: 0.4,
            v: 0.8,
            inst: `synthbass`,
            ch: `bass`,
          });
      } else if (_) {
        (q(`x...x...x...x...`, `kick`, h),
          q(`....x.......x...`, `clap`, h),
          q(`..o...o...o...o.`, `hat_o`, h, `drums`, 0.25, 0.6),
          q(`gggggggggggggggg`, `hat_c`, h, `drums`, 0.25, 0.5),
          q(`..x...x...x...x.`, `cymbal_bo`, h, `perc`, 0.25, 0.28),
          q(
            i % 2 ? `x..x..x...x.x...` : `x..x..x.x.x.x..x`,
            `bigdrum`,
            h,
            `perc`,
            0.25,
            0.7,
          ),
          i === 0 &&
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
          i % 4 == 3 &&
            h.push({
              t: 3,
              m: 60,
              d: 1,
              v: 0.8,
              inst: `drum:opera_gong`,
              ch: `perc`,
            }),
          i % 8 == 4 &&
            m.chance(0.6) &&
            h.push({
              t: 2.5,
              m: 60,
              d: 0.5,
              v: 0.8,
              inst: `drum:vox_hey`,
              ch: `fx`,
            }),
          X(f, p, `edm`, h, m, `synthbass`, 33 + a),
          Z(f, u, `stab`, h, m, `supersaw`, 66 + a, 0.62));
        let e = c[i % c.length];
        for (let t of e)
          h.push({ ...t, m: t.m + (g === `drop2` && i >= 8 ? 12 : 0) });
        if (g === `drop2`)
          for (let t of e)
            h.push({ ...t, inst: `erhu`, v: t.v * 0.45, m: t.m - 12 });
      } else
        g === `break`
          ? (q(
              i % 2 ? `x.......x..x....` : `x.......x.......`,
              `bigdrum`,
              h,
              `perc`,
              0.25,
              0.75,
            ),
            Z(f, d, `whole`, h, m, `pad`, 62 + a, 0.6, `pad`),
            Z(f, u, `arp16`, h, m, `marimba`, 72 + a, 0.35),
            h.push(...l[i % l.length].map((e) => ({ ...e }))),
            X(f, p, `root`, h, m, `synthbass`, 33 + a))
          : (i < 6 && q(`x...x...x...x...`, `kick`, h),
            q(`..x...x...x...x.`, `hat_c`, h, `drums`, 0.25, 0.6 - i * 0.05),
            Z(f, d, `whole`, h, m, `pad`, 60 + a, 0.5 - i * 0.05, `pad`),
            i === 7 &&
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
      let [t, n] = jt(s, e);
      return t.kind === `intro`
        ? [400 + n * 500, 900 + n * 500]
        : t.kind === `build`
          ? [700 * 1.45 ** n, 700 * 1.45 ** (n + 1)]
          : t.kind === `outro`
            ? [16e3 / (1 + n), 16e3 / (2 + n)]
            : [18e3, 18e3];
    },
    sidechain(e) {
      let [t] = jt(s, e);
      return t.kind.startsWith(`drop`)
        ? 0.75
        : t.kind === `intro` || t.kind === `build`
          ? 0.45
          : 0;
    },
  };
}
const Jt = [
    [`台客萬歲`, `Long Live Taike`],
    [`機車騎士`, `Scooter Rider`],
    [`夜市搖滾`, `Night Market Rock`],
    [`中山高`, `Freeway No. 1`],
    [`拼了啦`, `Go All In`],
    [`紅燈右轉`, `Right on Red`],
    [`颱風天`, `Typhoon Day`],
    [`古早味`, `Old-School Flavor`],
  ],
  Yt = [
    `台客大樂隊 Taike Big Band`,
    `鐵窗樂團 Iron Window`,
    `阿嘉與機車 A-Jia & the Scooters`,
    `八點檔 Prime Time`,
  ],
  Xt = [
    [`I`, `bVII`, `IV`, `I`],
    [`I`, `IV`, `V`, `IV`],
    [`vi`, `IV`, `I`, `V`],
    [`i`, `bVI`, `bVII`, `i`],
    [`I`, `V`, `bVII`, `IV`],
  ];
