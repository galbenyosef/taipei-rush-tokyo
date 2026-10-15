// tokyo/assets/region-tokyo-55J_WESF 82 — maxx
// Lines 37374-37674 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
r.add({
  "皇居護城河（桔梗濠・櫻田濠・半藏濠・千鳥之淵）": `皇居の濠（桔梗濠・桜田濠・半蔵濠・千鳥ヶ淵）`,
  千鳥之淵: `千鳥ヶ淵`,
  御茶之水橋: `お茶の水橋`,
});
var Ap = {
    north: -612,
    south: -580,
    top: -604,
    topWest: -598,
    bottom: -588,
    gorgeX: -145,
    west: -1200,
    mouth: 566,
  },
  jp = { west: Ap.west, east: -252, top: -599.7, bottom: -586.3, level: -8.5 },
  Mp = {
    north: -195,
    south: -165,
    top: -187,
    bottom: -173,
    west: -486,
    mouth: 566,
  },
  Np = {
    outer: { minX: -935, maxX: -486, minZ: -187, maxZ: 249.5 },
    inner: { minX: -915, maxX: -503, minZ: -173, maxZ: 228 },
  },
  Pp = { minX: -935, maxX: -915, minZ: -382, maxZ: -203 },
  Fp = { minX: -700, maxX: -684, minZ: -584.75, maxZ: -187 },
  Ip = { minX: -662, maxX: -630, minZ: -972, maxZ: -948 },
  Lp = { minX: -1100, maxX: -1040, minZ: -748, maxZ: -700 },
  Rp = { minX: -1078, maxX: -1064, minZ: -730, maxZ: -718 },
  zp = { minX: -372, maxX: -338, minZ: -156, maxZ: 335 },
  Bp = { minX: -420, maxX: -230, minZ: -1150, maxZ: -1010 },
  Vp = { minX: -368, maxX: -340, minZ: -1092, maxZ: -1066 },
  Hp = { minX: -340, maxX: -230, minZ: -1083, maxZ: -1075 },
  Up = { minX: -358, maxX: -350, minZ: -1066, maxZ: -1010 },
  Wp = [
    [565, 900],
    [565, -605],
    [605, -690],
    [700, -860],
    [790, -1020],
    [800, -1035],
    [800, -1640],
    [875, -1640],
    [875, -1050],
    [880, -1020],
    [775, -820],
    [690, -655],
    [640, -560],
    [640, 900],
  ],
  Gp = {
    westX: 565,
    farX: 640,
    northZ: -640,
    upWestX: 800,
    upFarX: 875,
    upNorthZ: -1640,
  },
  Ace = -1.5,
  jce = [
    {
      id: `kanda-gorge`,
      minX: jp.west,
      maxX: jp.east,
      minZ: jp.top,
      maxZ: jp.bottom,
      level: jp.level,
    },
  ],
  Kp = (e, t, n, r) => [
    [e, t],
    [n, t],
    [n, r],
    [e, r],
  ],
  Mce = [
    {
      id: `sumida`,
      name: z(`隅田川`, `隅田川`, `Sumida River`),
      kind: `river`,
      polygon: Wp,
      level: -2,
      bank: `terrace`,
    },
    {
      id: `kanda`,
      name: z(`神田川`, `神田川`, `Kanda River`),
      kind: `river`,
      level: -2.2,
      bank: `concrete`,
      polygon: [
        [Ap.west, jp.top],
        [jp.east, jp.top],
        [jp.east, Ap.topWest],
        [Ap.gorgeX, Ap.topWest],
        [Ap.gorgeX, Ap.top],
        [Ap.mouth, Ap.top],
        [Ap.mouth, Ap.bottom],
        [jp.east, Ap.bottom],
        [jp.east, jp.bottom],
        [Ap.west, jp.bottom],
      ],
    },
    {
      id: `nihonbashi`,
      name: z(`日本橋川`, `日本橋川`, `Nihonbashi River`),
      kind: `river`,
      level: -2,
      bank: `stone-wall`,
      polygon: Kp(Mp.west, Mp.top, Mp.mouth, Mp.bottom),
    },
    {
      id: `moat`,
      name: z(
        `皇居の濠（日比谷濠・馬場先濠・和田倉濠）`,
        `皇居護城河（日比谷濠・馬場先濠・和田倉濠）`,
        `Imperial Palace Moats`,
      ),
      kind: `moat`,
      level: -1.5,
      bank: `stone-wall`,
      polygon: Kp(zp.minX, zp.minZ, zp.maxX, zp.maxZ),
    },
    {
      id: `kokyo-moat`,
      name: z(
        `皇居の濠（桔梗濠・桜田濠・半蔵濠・千鳥ヶ淵）`,
        `皇居護城河（桔梗濠・櫻田濠・半藏濠・千鳥之淵）`,
        `Imperial Palace Inner Moats`,
      ),
      kind: `moat`,
      level: -1.5,
      bank: `stone-wall`,
      polygon: Kp(Np.outer.minX, Np.outer.minZ, Np.outer.maxX, Np.outer.maxZ),
      holes: [Kp(Np.inner.minX, Np.inner.minZ, Np.inner.maxX, Np.inner.maxZ)],
    },
    {
      id: `chidorigafuchi`,
      name: z(`千鳥ヶ淵`, `千鳥之淵`, `Chidorigafuchi`),
      kind: `moat`,
      level: -1.5,
      bank: `natural`,
      polygon: Kp(Pp.minX, Pp.minZ, Pp.maxX, Pp.maxZ),
    },
    {
      id: `sanshiro`,
      name: z(`三四郎池`, `三四郎池`, `Sanshiro Pond`),
      kind: `pond`,
      level: -0.6,
      bank: `natural`,
      polygon: Kp(Ip.minX, Ip.minZ, Ip.maxX, Ip.maxZ),
    },
    {
      id: `korakuen-pond`,
      name: z(`大泉水`, `大泉水`, `Daisensui Pond`),
      kind: `pond`,
      level: -0.5,
      bank: `natural`,
      polygon: Kp(Lp.minX, Lp.minZ, Lp.maxX, Lp.maxZ),
      holes: [Kp(Rp.minX, Rp.minZ, Rp.maxX, Rp.maxZ)],
    },
    {
      id: `nihonbashi-reach`,
      name: z(`日本橋川`, `日本橋川`, `Nihonbashi River`),
      kind: `river`,
      level: -2,
      bank: `stone-wall`,
      polygon: Kp(Fp.minX, Fp.minZ, Fp.maxX, Fp.maxZ),
    },
    {
      id: `shinobazu`,
      name: z(`不忍池`, `不忍池`, `Shinobazu Pond`),
      kind: `pond`,
      level: -0.4,
      bank: `natural`,
      polygon: Kp(Bp.minX, Bp.minZ, Bp.maxX, Bp.maxZ),
      holes: [Vp, Hp, Up].map((e) => Kp(e.minX, e.minZ, e.maxX, e.maxZ)),
    },
  ],
  qp = {
    "kanda:-380": z(`聖橋`, `聖橋`, `Hijiribashi`),
    "kanda:-252": z(`昌平橋`, `昌平橋`, `Shoheibashi`),
    "kanda:-145": z(`万世橋`, `萬世橋`, `Manseibashi`),
    "kanda:75": z(`和泉橋`, `和泉橋`, `Izumibashi`),
    "kanda:175": z(`美倉橋`, `美倉橋`, `Mikurabashi`),
    "kanda:385": z(`左衛門橋`, `左衛門橋`, `Saemonbashi`),
    "kanda:450": z(`浅草橋`, `淺草橋`, `Asakusabashi`),
    "kanda:545": z(`柳橋`, `柳橋`, `Yanagibashi`),
    "nihonbashi:-380": z(`神田橋`, `神田橋`, `Kandabashi`),
    "nihonbashi:-252": z(`鎌倉橋`, `鎌倉橋`, `Kamakurabashi`),
    "nihonbashi:-80": z(`常盤橋`, `常盤橋`, `Tokiwabashi`),
    "nihonbashi:75": z(`新常盤橋`, `新常盤橋`, `Shin-Tokiwabashi`),
    "nihonbashi:250": z(`日本橋`, `日本橋`, `Nihonbashi`),
    "nihonbashi:320": z(`江戸橋`, `江戶橋`, `Edobashi`),
    "nihonbashi:385": z(`鎧橋`, `鎧橋`, `Yoroibashi`),
    "nihonbashi:450": z(`茅場橋`, `茅場橋`, `Kayababashi`),
    "nihonbashi:545": z(`豊海橋`, `豐海橋`, `Toyomibashi`),
    "kanda:-790": z(`水道橋`, `水道橋`, `Suidobashi`),
    "kanda:-497": z(`お茶の水橋`, `御茶之水橋`, `Ochanomizubashi`),
    "reach:w-yasukuni": z(`俎橋`, `俎橋`, `Manaitabashi`),
    "reach:w-hakusan-jog": z(`三崎橋`, `三崎橋`, `Misakibashi`),
    "reach:w-daikancho": z(`竹橋`, `竹橋`, `Takebashi`),
  },
  Nce = {
    yasukuni: z(`両国橋`, `兩國橋`, `Ryogokubashi`),
    eitai: z(`永代橋`, `永代橋`, `Eitaibashi`),
    "kajibashi-e": z(`中央大橋`, `中央大橋`, `Chuo-ohashi`),
    harumi: z(`勝鬨橋`, `勝鬨橋`, `Kachidokibashi`),
    "ne-asakusa": z(`吾妻橋`, `吾妻橋`, `Azumabashi`),
    "ne-kototoi": z(`言問橋`, `言問橋`, `Kototoibashi`),
  },
  Pce = (e) => (e < jp.east ? jp.top : e < Ap.gorgeX ? Ap.topWest : Ap.top),
  Fce = (e) => (e < jp.east ? jp.bottom : Ap.bottom);
function Ice(e, t, n) {
  let r = [],
    i = [
      { id: `kanda`, north: Ap.north, south: Ap.south, top: Pce, bottom: Fce },
      {
        id: `nihonbashi`,
        north: Mp.north,
        south: Mp.south,
        top: () => Mp.top,
        bottom: () => Mp.bottom,
      },
    ];
  for (let a of i) {
    let i = [];
    for (let t of e)
      t.axis === `z` &&
        t.from <= a.north &&
        t.to >= a.south &&
        i.push({ id: t.id, x: t.at, half: _p(t, n) });
    let o = e.filter((e) => !e.gridless);
    for (let e of vp(o, t, a.north, a.south))
      i.push({ id: e.id, x: e.x, half: e.half });
    for (let e of bp)
      for (let r of vp(o, t, a.north, a.south, n, e))
        i.push({ id: r.id, x: r.x, half: r.half });
    i.sort((e, t) => e.x - t.x);
    for (let e of i) {
      let t = qp[`${a.id}:${e.x}`],
        n = {
          id: `${a.id}-${e.x}`,
          over: a.id,
          minX: e.x - e.half,
          maxX: e.x + e.half,
          minZ: Math.min(a.top(e.x - e.half), a.top(e.x + e.half)) - 0.5,
          maxZ: Math.max(a.bottom(e.x - e.half), a.bottom(e.x + e.half)) + 0.5,
          road: e.id,
          kind: `road`,
        };
      (t && (n.name = t), r.push(n));
    }
  }
  for (let t of e) {
    let e = Nce[t.id];
    if (!e || t.axis !== `x`) continue;
    let i = _p(t, n),
      a = t.at < Gp.northZ - 300 ? Gp.upFarX : Gp.farX;
    r.push({
      id: `sumida-${t.id}`,
      name: e,
      over: `sumida`,
      minX: t.to - 1,
      maxX: a + 10,
      minZ: t.at - i,
      maxZ: t.at + i,
      road: t.id,
      kind: `far`,
    });
  }
  let a = Fp;
  for (let t of e) {
    if (
      t.axis !== `x` ||
      t.from > a.minX ||
      t.to < a.maxX ||
      t.at < a.minZ - 8 ||
      t.at > a.maxZ + 8
    )
      continue;
    let e = _p(t, n),
      i = {
        id: `reach-${t.id}`,
        over: `nihonbashi-reach`,
        minX: a.minX - 0.5,
        maxX: a.maxX + 0.5,
        minZ: t.at - e,
        maxZ: t.at + e,
        road: t.id,
        kind: `road`,
      },
      o = qp[`reach:${t.id}`];
    (o && (i.name = o), r.push(i));
  }
  return r;
}
