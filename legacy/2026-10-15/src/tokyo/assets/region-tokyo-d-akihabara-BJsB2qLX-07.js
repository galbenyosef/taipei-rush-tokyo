// tokyo/assets/region-tokyo-d-akihabara-BJsB2qLX 07 — main
// Lines 1588-2080 of readable/tokyo/assets/region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
function Re(e) {
  let n = new t(r(`akiba-look`, e.id, e.v ?? 0)),
    i = (e) => e[Math.floor(n.next() * e.length)],
    a = [
      { key: `akiba.word.maid`, bg: `#ff5aa0`, fg: `#ffffff` },
      { key: `akiba.word.toreka`, bg: `#6a2ad0`, fg: `#ffffff` },
      { key: `akiba.word.figure`, bg: `#ffffff`, fg: `#e0407a` },
      { key: `akiba.word.kaitori`, bg: `#e60012`, fg: `#ffffff` },
      { key: `akiba.word.game`, bg: `#1d2088`, fg: `#ffffff` },
      { key: `akiba.word.karaoke`, bg: `#f39800`, fg: `#ffffff` },
      { key: `akiba.word.hobby`, bg: `#00a0e9`, fg: `#ffffff` },
      { key: `akiba.word.chuko`, bg: `#ffe100`, fg: `#c00000` },
      { key: `akiba.word.anime`, bg: `#ff8a00`, fg: `#ffffff` },
      { key: `akiba.word.pc`, bg: `#ffffff`, fg: `#1d2088` },
      { key: `akiba.word.menzei`, bg: `#008a4a`, fg: `#ffffff` },
    ],
    o = (e) => {
      let t = [],
        r = Math.floor(n.next() * a.length);
      for (let n = 0; n < e; n++) t.push(a[(r + n * 3) % a.length]);
      return t;
    },
    s = {
      wall: i([
        15262940, 14210252, 13159632, 12104876, 15789800, 11054256, 13945016,
      ]),
      win: i([`dark`, `blind`, `tenant`]),
    };
  switch (e.kind) {
    case `hobby`:
      return {
        wall: 15921902,
        win: `tenant`,
        vsign: {
          main: `akiba.hobby.short`,
          top: `akiba.hobby.latin`,
          bg: `#0b3a8f`,
          fg: `#ffffff`,
          acc: `#7fc8ff`,
        },
        roof: {
          main: `akiba.hobby.name`,
          bg: `#0b3a8f`,
          fg: `#ffffff`,
          acc: `#7fc8ff`,
        },
        stack: o(Math.min(8, e.floors - 1)),
        bands: [
          { main: `akiba.band.figure-kaitori`, bg: `#ffffff`, fg: `#0b3a8f` },
          { main: `akiba.band.card`, bg: `#1d2088`, fg: `#ffffff` },
          { main: `akiba.band.anime-goods`, bg: `#00a0e9`, fg: `#ffffff` },
        ],
      };
    case `gacha`:
      return {
        ...s,
        wall: 16052456,
        vsign: {
          main: `akiba.word.gacha`,
          bg: `#ffe100`,
          fg: `#e60012`,
          acc: `#e60012`,
        },
        bands: [
          {
            main: `akiba.gacha.name`,
            sub: `akiba.gacha.count`,
            bg: `#ff4a8a`,
            fg: `#ffffff`,
            acc: `#ffe100`,
          },
        ],
        stack: o(Math.min(6, e.floors - 1)),
      };
    case `arcade`:
    case `karaoke`: {
      let t = e.name,
        [n, r, i] = F(t);
      if (e.kind === `karaoke`) {
        let [e, n, r] = F(`manekiinu`);
        return {
          wall: 16052974,
          win: `tenant`,
          vsign: z(`manekiinu`),
          vsign2: z(t),
          bands: [
            B(t, 1),
            { main: `brand.manekiinu`, bg: e, fg: n, acc: r, floor: 3 },
            { main: `akiba.word.karaoke`, bg: r, fg: `#ffffff` },
          ],
          roof: B(`manekiinu`),
        };
      }
      return {
        wall: 1710628,
        win: `dark`,
        closedFront: t === `titlestation` ? 2756624 : 1315868,
        vsign: z(t),
        bands: [
          { main: `brand.${t}`, bg: n, fg: r, acc: i },
          {
            main: `akiba.band.crane`,
            bg: `#14141c`,
            fg: t === `titlestation` ? `#ffffff` : i,
          },
          { main: `akiba.floor.medal`, bg: n, fg: r, floor: 3 },
        ],
        roof: { main: `brand.${t}`, bg: n, fg: r, acc: i },
        led: `akiba.band.crane`,
      };
    }
    case `redarcade`:
      return {
        wall: 13111326,
        win: `dark`,
        closedFront: 13111326,
        vsign: {
          main: `akiba.tophat.name`,
          bg: `#ffffff`,
          fg: `#c8101e`,
          acc: `#c8101e`,
        },
        bands: [
          {
            main: `akiba.tophat.name`,
            sub: `akiba.band.crane`,
            bg: `#c8101e`,
            fg: `#ffffff`,
            acc: `#ffffff`,
          },
          { main: `akiba.floor.crane`, bg: `#ffffff`, fg: `#c8101e`, floor: 2 },
          { main: `akiba.floor.video`, bg: `#ffffff`, fg: `#c8101e`, floor: 4 },
        ],
        led: `akiba.band.crane`,
      };
    case `piccamera`:
      return {
        wall: 15790318,
        win: `office`,
        vsign: z(`piccamera`),
        vsign2: {
          main: `akiba.word.menzei`,
          bg: `#ffe100`,
          fg: `#e60012`,
          acc: `#e60012`,
        },
        bands: Le.slice(0, 7).map((e, t) => ({
          main: e,
          floor: t + 2,
          bg: t % 2 ? `#e60012` : `#ffffff`,
          fg: t % 2 ? `#ffffff` : `#e60012`,
        })),
        roof: B(`piccamera`),
        led: `akiba.wrap.gpu`,
      };
    case `gamies`:
      return {
        wall: 16316660,
        win: `tenant`,
        vsign: {
          main: `akiba.gamies.name`,
          bg: `#1a3a9a`,
          fg: `#ffffff`,
          acc: `#ffd400`,
        },
        bands: [
          {
            main: `akiba.gamies.name`,
            sub: `akiba.band.anime-goods`,
            bg: `#1a3a9a`,
            fg: `#ffffff`,
          },
        ],
        wrap: [
          Math.floor(n.next() * 5),
          `akiba.wrap.anisong`,
          `akiba.word.akiba`,
        ],
      };
    case `mandarara`:
      return {
        wall: 1315860,
        win: `dark`,
        closedFront: 1315860,
        vsign: {
          main: `brand.mandarara`,
          bg: `#141414`,
          fg: `#ffffff`,
          acc: `#c8102e`,
        },
        bands: [
          { main: `brand.mandarara`, bg: `#c8102e`, fg: `#ffffff` },
          { main: `akiba.floor.comic`, bg: `#141414`, fg: `#c8102e`, floor: 3 },
        ],
      };
    case `office`:
      return { wall: 12107976, win: `office` };
    case `anzen`:
      return {
        wall: 15790056,
        win: `blind`,
        bands: [{ main: `akiba.anzen.name`, bg: `#1d3a8a`, fg: `#ffffff` }],
      };
    case `donco`:
      return {
        wall: 16769280,
        win: `dark`,
        closedFront: 16769280,
        vsign: z(`doncoyote`),
        vsign2: {
          main: `akiba.word.menzei`,
          bg: `#e60012`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
        bands: [
          B(`doncoyote`, void 0, `brand.doncoyote.tagline`),
          { main: `akiba.band.menzei`, bg: `#e60012`, fg: `#ffffff` },
        ],
        roof: B(`doncoyote`),
      };
    case `softnap`:
      return {
        wall: 15264494,
        win: `office`,
        vsign: z(`softnap`),
        bands: Le.slice(e.v ? 4 : 0, (e.v ? 4 : 0) + 6).map((e, t) => ({
          main: e,
          floor: t + 2,
          bg: t % 2 ? `#00479d` : `#ffd400`,
          fg: t % 2 ? `#ffffff` : `#00479d`,
        })),
        roof: B(`softnap`),
        led: `akiba.wrap.gpu`,
      };
    case `naox`:
      return {
        wall: 15790320,
        win: `office`,
        vsign: z(`naox`, `common.door.tax-free`),
        bands: [
          B(`naox`, void 0, `akiba.band.menzei`),
          { main: `akiba.band.kaden`, bg: `#ffffff`, fg: `#e60012` },
        ],
        roof: B(`naox`),
      };
    case `anime`: {
      let t = e.name;
      return {
        ...s,
        win: `blind`,
        vsign: z(t),
        bands: [
          B(t),
          { main: `akiba.band.doujin`, bg: `#ffffff`, fg: F(t)[0] },
        ],
        wrap: [
          Math.floor(n.next() * 5),
          i([`akiba.wrap.movie`, `akiba.wrap.figure`, `akiba.wrap.anisong`]),
          `akiba.word.akiba`,
        ],
      };
    }
    case `pcshop`: {
      let t = e.name;
      return {
        ...s,
        win: `dark`,
        vsign: z(t),
        vsign2: {
          main: `akiba.word.pc`,
          bg: `#ffffff`,
          fg: F(t)[0],
          acc: F(t)[0],
        },
        bands: [
          B(t, void 0, `akiba.band.jisaku`),
          { main: `akiba.band.gpu`, bg: `#101010`, fg: `#ffd400` },
        ],
        roof: { main: `akiba.band.jisaku`, bg: F(t)[0], fg: `#ffffff` },
      };
    }
    case `wrap`:
      return {
        ...s,
        wrap: [
          Math.floor(n.next() * 5),
          i([`akiba.wrap.rpg`, `akiba.wrap.vtuber`, `akiba.wrap.idol`]),
          `akiba.wrap.rpg-sub`,
        ],
        stack: o(4),
      };
    case `radiodept`:
      return {
        wall: 14209216,
        win: `blind`,
        vsign: {
          main: `akiba.radiodept.name`,
          bg: `#ffffff`,
          fg: `#1d2088`,
          acc: `#e60012`,
        },
        bands: [
          {
            main: `akiba.radiodept.name`,
            sub: `akiba.radiodept.sub`,
            bg: `#1d2088`,
            fg: `#ffffff`,
          },
          { main: `akiba.band.musen`, bg: `#ffffff`, fg: `#1d2088` },
          { main: `akiba.band.parts`, bg: `#e60012`, fg: `#ffffff` },
        ],
      };
    case `ishimatsu`:
      return {
        wall: 14999768,
        win: `blind`,
        vsign: {
          main: `akiba.shop.ishimaru`,
          bg: `#d7000f`,
          fg: `#ffffff`,
          acc: `#ffffff`,
        },
        bands: [
          {
            main: `akiba.shop.ishimaru`,
            sub: `akiba.band.kaden`,
            bg: `#d7000f`,
            fg: `#ffffff`,
          },
          { main: `akiba.band.audio`, bg: `#ffffff`, fg: `#d7000f` },
        ],
        roof: {
          main: `akiba.shop.ishimaru`,
          bg: `#ffffff`,
          fg: `#d7000f`,
          acc: `#d7000f`,
        },
      };
    case `onoden`:
      return {
        wall: 15657698,
        win: `office`,
        vsign: {
          main: `akiba.onoden.name`,
          bg: `#00a040`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
        bands: [
          {
            main: `akiba.onoden.name`,
            sub: `akiba.band.kaden`,
            bg: `#00a040`,
            fg: `#ffffff`,
          },
        ],
        roof: {
          main: `akiba.onoden.name`,
          bg: `#00a040`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
      };
    case `junk`:
      return {
        ...s,
        win: `blind`,
        vsign: {
          main: `akiba.word.chuko`,
          bg: `#ffe100`,
          fg: `#c00000`,
          acc: `#c00000`,
        },
        bands: [
          {
            main: `trade.junk.sign.junk`,
            sub: `trade.junk.sign.mikakunin`,
            bg: `#ffe100`,
            fg: `#c00000`,
          },
        ],
        stack: o(Math.min(4, e.floors - 1)),
      };
    case `maid`:
      return {
        ...s,
        win: `tenant`,
        vsign: {
          main: `akiba.word.maid`,
          bg: `#ff8ac0`,
          fg: `#ffffff`,
          acc: `#ffffff`,
        },
        bands: [
          {
            main: i([
              `akiba.maid.name.1`,
              `akiba.maid.name.2`,
              `akiba.maid.name.3`,
            ]),
            bg: `#ffffff`,
            fg: `#ff4a8a`,
            acc: `#ff8ac0`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    case `card`:
      return {
        ...s,
        vsign: {
          main: `akiba.word.toreka`,
          bg: `#6a2ad0`,
          fg: `#ffffff`,
          acc: `#ffd400`,
        },
        bands: [
          {
            main: `akiba.shop.card`,
            sub: `akiba.band.card`,
            bg: `#6a2ad0`,
            fg: `#ffffff`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    case `retro`:
      return {
        ...s,
        vsign: {
          main: `akiba.word.game`,
          bg: `#101010`,
          fg: `#30e030`,
          acc: `#30e030`,
        },
        bands: [
          {
            main: `akiba.shop.retro`,
            sub: `akiba.band.retro`,
            bg: `#101010`,
            fg: `#30e030`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    default:
      return {
        ...s,
        vsign:
          n.next() < 0.6
            ? {
                main: i([
                  `akiba.word.figure`,
                  `akiba.word.toreka`,
                  `akiba.word.kaitori`,
                  `akiba.word.anime`,
                  `akiba.word.musen`,
                  `akiba.word.denshi`,
                ]),
                bg: i([
                  `#e60012`,
                  `#1d2088`,
                  `#ff5aa0`,
                  `#6a2ad0`,
                  `#008a4a`,
                  `#ff8a00`,
                ]),
                fg: `#ffffff`,
                acc: `#ffe100`,
              }
            : void 0,
        stack: o(Math.min(7, e.floors - 1)),
        bands:
          n.next() < 0.6
            ? [
                {
                  main: i([
                    `akiba.band.chuko-sumaho`,
                    `akiba.band.shinpin-chuko`,
                    `akiba.band.figure-kaitori`,
                    `akiba.band.anime-goods`,
                    `akiba.band.retro`,
                    `akiba.band.card`,
                  ]),
                  bg: i([`#ffffff`, `#ffe100`, `#1d2088`, `#101010`]),
                  fg: i([`#e60012`, `#1d2088`]),
                },
              ]
            : void 0,
      };
  }
}
