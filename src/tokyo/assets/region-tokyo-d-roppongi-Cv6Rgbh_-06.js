// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 06 — main
// Lines 1549-1885 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function He(e, t) {
  let i = new n(r(`rop-look`, e.id, e.v ?? 0)),
    a = (e) => e[Math.floor(i.next() * e.length)],
    o = t ? ze : Re,
    s = (e, t) => {
      let n = [],
        r = Math.floor(i.next() * o.length),
        a = 1 + Math.floor(i.next() * 3) * 2;
      for (let s = 0; s < e; s++) {
        let e = fe[(Math.floor(i.next() * fe.length) + s) % fe.length];
        n.push({
          key: o[(r + s * a) % o.length],
          bg: e.bg,
          fg: e.fg,
          neon: e.neon,
          floor: t - s,
        });
      }
      return n;
    },
    c = [
      14868182, 13618374, 12104876, 9078400, 5920854, 3815998, 13945016,
      13159632,
    ],
    l = (e) => Array.from({ length: e }, () => a(Be)),
    u = { wall: a(c), win: a([`dark`, `blind`, `tenant`]) },
    d = e.floors - 1;
  switch (e.kind) {
    case `pencil`:
      return {
        ...u,
        tower: s(Math.min(10, d), e.floors),
        neon: i.next() < 0.6 ? l(1) : void 0,
        fascia:
          e.shop === `bar` || e.shop === `club`
            ? {
                main: o[Math.floor(i.next() * 18) % o.length],
                bg: `#101014`,
                fg: `#` + a(Be).toString(16).padStart(6, `0`),
                neon: !0,
              }
            : void 0,
      };
    case `signbldg`: {
      let t = [],
        n = Math.min(9, d);
      for (let r = 0; r < n; r++) {
        let n = s(2, e.floors - r);
        t.push(
          n.map((t, n) => ({ ...t, floor: n === 0 ? e.floors - r : void 0 })),
        );
      }
      let r = s(1, e.floors)[0];
      return {
        ...u,
        wall: 2763310,
        win: `dark`,
        grid: t,
        tower: s(Math.min(10, d), e.floors),
        led: a([
          `roppongi.led.night`,
          `roppongi.led.event`,
          `roppongi.led.drink`,
        ]),
        neon: l(2),
        roof: {
          main: r.key,
          bg: `#101014`,
          fg: a([`#ff4fa3`, `#3fe0ff`, `#ffd84a`, `#c77dff`]),
          acc: `#2a2a30`,
        },
      };
    }
    case `karaoke`: {
      let [e, t, n] = F(`karaokejo`);
      return {
        wall: 15921128,
        win: `tenant`,
        vsign: Ve(`karaokejo`),
        bands: [
          {
            main: `brand.karaokejo`,
            sub: `roppongi.karaoke.honten`,
            bg: e,
            fg: t,
            acc: n,
          },
          { main: `roppongi.karaoke.price`, bg: `#ffe100`, fg: `#e60012` },
          { main: `roppongi.karaoke.rooms`, bg: `#ffffff`, fg: `#e60012` },
        ],
        roof: { main: `brand.karaokejo`, bg: e, fg: t, acc: n },
        neon: [16767050],
      };
    }
    case `donco`: {
      let [e, t] = F(`doncoyote`),
        n = [
          `roppongi.donco.pop`,
          `roppongi.donco.food`,
          `roppongi.donco.sake`,
          `roppongi.donco.cosme`,
          `roppongi.donco.kusuri`,
          `roppongi.donco.party`,
          `common.door.tax-free`,
          `roppongi.donco.late`,
        ],
        r = [
          [`#e60012`, `#ffe100`],
          [`#ffe100`, `#e60012`],
          [`#1d2088`, `#ffffff`],
          [`#ffffff`, `#e60012`],
        ],
        i = [];
      for (let e = 0; e < Math.min(7, d); e++)
        i.push(
          [0, 1, 2, 3].map((t) => {
            let [i, a] = r[(e + t * 3) % r.length];
            return {
              key:
                e === 1 && t === 1
                  ? `brand.doncoyote`
                  : n[(e * 3 + t * 5) % n.length],
              bg: i,
              fg: a,
            };
          }),
        );
      return {
        wall: 16769280,
        win: `dark`,
        closedFront: 16765952,
        frontGlow: 0.22,
        grid: i,
        vsign: Ve(`doncoyote`),
        bands: [
          {
            main: `brand.doncoyote`,
            sub: `roppongi.donco.store`,
            bg: e,
            fg: t,
            acc: `#1d2088`,
          },
          { main: `brand.doncoyote.tagline`, bg: `#e60012`, fg: `#ffe100` },
          {
            main: `roppongi.donco.floor`,
            bg: `#ffffff`,
            fg: `#e60012`,
            floor: 2,
          },
          { main: `roppongi.donco.late`, bg: `#1d2088`, fg: `#ffffff` },
        ],
        roof: { main: `brand.doncoyote`, bg: e, fg: t, acc: `#1d2088` },
        neon: [16726554, 16777215],
      };
    }
    case `club`:
      return {
        wall: 1315864,
        win: `dark`,
        closedFront: 1184278,
        bands: [
          { main: `roppongi.club.big`, bg: `#0a0a10`, fg: `#c77dff`, neon: !0 },
          { main: `roppongi.club.dj`, bg: `#0a0a10`, fg: `#3fe0ff`, neon: !0 },
          {
            main: `roppongi.club.ladies`,
            bg: `#0a0a10`,
            fg: `#ff4fa3`,
            neon: !0,
          },
        ],
        led: `roppongi.led.night`,
        neon: [11824127, 4186367, 16727968],
        tower: s(Math.min(6, d), e.floors),
      };
    case `office`:
      return { wall: 12107976, win: `office` };
    case `glass`:
      return { wall: 8161942, win: `mirror` };
    case `hotel`: {
      let [e, t, n] = F(`abahotel`);
      return {
        wall: 15262424,
        win: `blind`,
        vsign: Ve(`abahotel`),
        bands: [
          {
            main: `brand.abahotel`,
            sub: `roppongi.akasaka.hotel-sub`,
            bg: e,
            fg: t,
            acc: n,
          },
        ],
        roof: { main: `brand.abahotel`, bg: e, fg: t, acc: n },
      };
    }
    case `restaurant`:
      return {
        ...u,
        win: `tenant`,
        tower: s(Math.min(8, d), e.floors),
        awning: a([8002074, 1718826, 2763306]),
      };
    case `yakiniku`:
    case `korean`:
      return {
        ...u,
        win: `tenant`,
        tower: s(Math.min(8, d), e.floors),
        lanterns:
          e.kind === `korean`
            ? `roppongi.word.korean`
            : `roppongi.word.yakiniku`,
        neon: i.next() < 0.5 ? l(1) : void 0,
      };
    case `izakaya`:
      return {
        ...u,
        wall: a([5913122, 3811870, 14208180]),
        win: `blind`,
        lanterns: `roppongi.word.izakaya`,
        tower: d >= 3 ? s(Math.min(6, d), e.floors) : void 0,
      };
    case `kappo`:
      return {
        wall: 1973274,
        win: `blind`,
        lanterns: `roppongi.food.kappo`,
        fascia: { main: e.name, bg: `#1e1c1a`, fg: `#e8dcc0`, serif: !0 },
      };
    case `konbini`:
    case `drug`:
      return { ...u, tower: d >= 3 ? s(Math.min(8, d), e.floors) : void 0 };
    case `ramen`:
    case `gyudon`:
      return {
        ...u,
        tower: d >= 3 ? s(Math.min(8, d), e.floors) : void 0,
        neon: i.next() < 0.4 ? l(1) : void 0,
      };
    case `arcade`: {
      let [e, t, n] = F(`titlestation`);
      return {
        wall: 1710628,
        win: `dark`,
        closedFront: 1447454,
        vsign: Ve(`titlestation`),
        bands: [{ main: `brand.titlestation`, bg: e, fg: t, acc: n }],
        led: `roppongi.led.event`,
        neon: [4186367],
      };
    }
  }
  return u;
}
function Ue(e, t) {
  let [n, r] = Pe[t],
    i = r,
    a = -n,
    o = [
      [e.x0, e.z0],
      [e.x1, e.z0],
      [e.x1, e.z1],
      [e.x0, e.z1],
    ].filter(([t, i]) =>
      n ? (n > 0 ? t === e.x1 : t === e.x0) : r > 0 ? i === e.z1 : i === e.z0,
    );
  o.sort((e, t) => e[0] * i + e[1] * a - (t[0] * i + t[1] * a));
  let [s, c] = o[0];
  return {
    ox: s,
    oz: c,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: Math.abs(n ? e.z1 - e.z0 : e.x1 - e.x0),
  };
}
var L = (e, t, n = 0) => [
  e.ox + e.tx * t + e.nx * n,
  e.oz + e.tz * t + e.nz * n,
];
function R(e, t, n, r, i, a, o, s) {
  let [c, l] = L(t, n, o),
    [u, d] = L(t, r, o);
  j(e, c, l, u, d, i, a, s);
}
var We = (e) => `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}`,
  Ge = (e) =>
    `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}|${e.neon ? `n` : ``}`;
function Ke(e, t) {
  if (t.fascia) return t.fascia;
  if (t.bands?.length) return t.bands[0];
  if (e.name.startsWith(`brand.`) || /^[a-z0-9]+$/.test(e.name)) {
    let t = e.name.replace(/^brand\./, ``),
      [n, r, i] = F(t);
    return { main: `brand.${t}`, bg: n, fg: r, acc: i };
  }
  return { main: e.name, bg: `#1d1d22`, fg: `#ffffff` };
}
function qe(e, t, n) {
  let i = new Map();
  for (let a of t) {
    let t = He(a, n(a));
    (i.set(a.id, t), t.vsign && e.need(We(t.vsign), 52, 364, ge(t.vsign)));
    for (let n of t.bands ?? []) e.need(Ge(n), 384, 48, _e(n));
    (t.tower &&
      e.need(`tower:${a.id}`, 72, 50 * t.tower.length, me(t.tower, `#2a2a30`)),
      t.grid &&
        e.need(
          `grid:${a.id}`,
          104 * t.grid[0].length,
          46 * t.grid.length,
          he(t.grid, a.kind === `donco` ? `#ffd400` : `#1a1a1e`),
        ),
      t.roof && e.need(`roof:${Ge(t.roof)}`, 288, 100, ve(t.roof)),
      t.led &&
        e.need(`led:${t.led}|${r(a.id) % 4}`, 224, 112, ye(t.led, r(a.id) % 4)),
      t.lanterns &&
        e.need(
          `lantern:${t.lanterns}`,
          48,
          80,
          Ae(t.lanterns, a.kind === `kappo` ? `#f4ead0` : `#d42a1a`),
        ),
      e.need(`win:${t.win}`, 160, 60, Se(t.win, 1)),
      e.need(`shop:${a.shop}`, 288, 144, xe(a.shop, 1)),
      a.poi && e.need(`shop:${a.poi.kind}`, 288, 144, xe(a.poi.kind, 2)));
    let o = Ke(a, t);
    (e.need(Ge(o), 384, 48, _e(o)),
      a.kind === `donco` && e.need(`mascot`, 192, 224, be));
  }
  return (e.need(`wall:concrete`, 64, 64, Ce(`concrete`, `#c8c4bc`)), i);
}
var Je = 35,
  Ye = 3;
