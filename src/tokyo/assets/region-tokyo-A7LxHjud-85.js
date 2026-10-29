// tokyo/assets/region-tokyo-A7LxHjud 85 — label
// Lines 38400-38748 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var jm = (e, t) => ({ ...e, scope: `buildings`, label: t }),
  tle = [
    jm(wm.b40, `maru-otemachi-masakado (将門塚 + tower)`),
    jm(wm.b102, `maru-otemachi-tower (大手町タワー + 大手町の森)`),
    jm(wm.b42, `maru-1chome-site (東京海上 redevelopment, 2026)`),
    jm(Tm, `maru-shinen (新円ビル)`),
    jm(wm.b106, `maru-en-hagaki (円ビル + HAGAKI)`),
    jm(wm.b74, `maru-ichigokan (brick building, garden, park tower)`),
    jm(wm.b45, `maru-colonnade (馬場先門 colonnade + tower)`),
    ...Am(Em.x0 - 17.25, Em.x1, km).map(([e, t], n) => ({
      minX: e,
      maxX: t,
      minZ: -Em.edge,
      maxZ: Em.edge,
      scope: `props`,
      label: `maru-gyoko-${n}`,
    })),
    ...Am(Dm.z0, Dm.z1, Om).flatMap(([e, t], n) => [
      {
        minX: Dm.x - Dm.edge,
        maxX: Dm.x - Dm.carriage,
        minZ: e,
        maxZ: t,
        scope: `props`,
        label: `maru-naka-w-${n}`,
      },
      {
        minX: Dm.x + Dm.carriage,
        maxX: Dm.x + Dm.edge,
        minZ: e,
        maxZ: t,
        scope: `props`,
        label: `maru-naka-e-${n}`,
      },
    ]),
  ],
  nle = { minX: -335, minZ: -165, maxX: -80, maxZ: 345 },
  rle = [],
  ile = { x0: -297, z0: -146, x1: -282.5, z1: -126.5 },
  ale = { x0: -138, z0: -158, x1: -112.5, z1: -126.5 },
  ole = { x0: -111.5, z0: -134.5, x1: -87, z1: -126.25 },
  sle = [11, 14],
  cle = { weekday: [11, 15], weekend: [11, 17] },
  lle = {
    from: [11, 13],
    to: [2, 15],
    gyokoFrom: [11, 28],
    gyokoTo: [12, 25],
    on: 16,
    off: 23,
    offDec: 24,
  },
  Mm = Math.PI / 2,
  Nm = -Math.PI / 2,
  ule = [
    {
      id: `tokyo:marunouchi:gyoko-dori`,
      kind: `route`,
      x: -200,
      z: 0,
      radius: 300,
      points: [
        [-88, 0],
        [-200, 0],
        [-305, 0],
      ],
      label: { ja: `行幸通り`, zh: `行幸通`, en: `Gyoko-dori` },
      note: `the granite 歩道兼馬車道 in the middle (pedestrians only), ginkgo rows either side; station plaza → 和田倉門`,
    },
    {
      id: `tokyo:marunouchi:carriage-route`,
      kind: `route`,
      x: -180,
      z: 0,
      radius: 350,
      hours: [10, 16],
      points: [
        [-36, 0],
        [-80, 0],
        [-200, 0],
        [-315, 0],
        [-334, 0],
      ],
      label: {
        ja: `信任状捧呈式の馬車列ルート`,
        zh: `國書呈遞儀式馬車路線`,
        en: `Ambassadors’ carriage route`,
      },
      note: `new ambassadors ride in an imperial carriage from the station's central entrance down 行幸通り over 和田倉門 into the palace (1–2 ceremonies a month, mounted police escort, ~15 km/h). Set piece only: the palace side beyond the moat is out of bounds`,
    },
    {
      id: `tokyo:marunouchi:naka-dori`,
      kind: `route`,
      x: -190,
      z: 90,
      radius: 400,
      points: [
        [-190, -150],
        [-190, -110],
        [-190, 0],
        [-190, 125],
        [-190, 240],
        [-190, 345],
      ],
      label: {
        ja: `丸の内仲通り`,
        zh: `丸之內仲通`,
        en: `Marunouchi Naka-dori`,
      },
      note: `大手町 → 有楽町 (≈ 1.2 km): granite sidewalks, ケヤキ / カツラ, sculptures; golden illumination Nov–Feb evenings`,
    },
    {
      id: `tokyo:marunouchi:naka-terrace`,
      kind: `area`,
      x: -190,
      z: 40,
      radius: 200,
      hours: [11, 15],
      points: [
        [-199, 23],
        [-181, 23],
        [-181, 55],
        [-199, 55],
      ],
      label: {
        ja: `丸の内仲通り アーバンテラス`,
        zh: `丸之內仲通 露天座位`,
        en: `Naka-dori urban terrace`,
      },
      note: `tables and chairs at lunch (weekdays 11–15, weekends 11–17)`,
    },
    {
      id: `tokyo:marunouchi:enbiru`,
      kind: `entrance`,
      x: -85.6,
      z: 32,
      heading: Mm,
      radius: 200,
      label: { ja: `円ビル`, zh: `圓大樓`, en: `En Building` },
      copyKey: `maru.en.name`,
      note: `the 丸ビル-style tower (parody) on the 行幸通り / plaza corner; shops B1–6F`,
    },
    {
      id: `tokyo:marunouchi:shinen-terrace`,
      kind: `entrance`,
      x: -85.6,
      z: -36,
      heading: Mm,
      radius: 200,
      hours: [11, 23],
      label: {
        ja: `新円ビル 7F テラス`,
        zh: `新圓大樓 7樓露台`,
        en: `Shin-En Building 7F terrace`,
      },
      copyKey: `maru.shinen.name`,
      note: `the open terrace on the podium roof looks over the station (the real one: Mon–Sat 11–23, Sun 11–22)`,
    },
    {
      id: `tokyo:marunouchi:hagaki`,
      kind: `entrance`,
      x: -85.6,
      z: 94,
      heading: Mm,
      radius: 200,
      hours: [11, 21],
      label: {
        ja: `HAGAKI 丸の内`,
        zh: `HAGAKI 丸之內`,
        en: `HAGAKI Marunouchi`,
      },
      copyKey: `maru.hagaki.name`,
      note: `the old 中央郵便局 front (1931, white tile, the clock) with the tower behind — the KITTE-style mall (parody)`,
    },
    {
      id: `tokyo:marunouchi:brick-garden`,
      kind: `area`,
      x: -167,
      z: 88,
      radius: 180,
      points: [
        [-180, 70],
        [-153.5, 70],
        [-153.5, 112.5],
        [-180, 112.5],
      ],
      label: { ja: `一号館広場`, zh: `一號館廣場`, en: `Ichigokan Square` },
      note: `the red-brick building (no company name), its garden with gas lamps and the café terraces`,
    },
    {
      id: `tokyo:marunouchi:masakado`,
      kind: `spot`,
      x: -289.5,
      z: -124.5,
      heading: 0,
      radius: 160,
      label: { ja: `将門塚`, zh: `將門塚`, en: `Masakado-zuka` },
      copyKey: `maru.masakado.name`,
      note: `SACRED GROUND (史蹟): nothing destructive, no chases through it, no weapons — the entrance faces the 永代通り sidewalk`,
    },
    {
      id: `tokyo:marunouchi:otemachi-forest`,
      kind: `area`,
      x: -125,
      z: -142,
      radius: 180,
      points: [
        [-138, -158],
        [-112.5, -158],
        [-112.5, -126.5],
        [-138, -126.5],
      ],
      label: { ja: `大手町の森`, zh: `大手町之森`, en: `Otemachi Forest` },
    },
    {
      id: `tokyo:marunouchi:kitchen-cars`,
      kind: `spot`,
      x: -99,
      z: -128,
      heading: Math.PI,
      radius: 160,
      hours: [11, 14],
      label: {
        ja: `キッチンカー（平日ランチ）`,
        zh: `餐車（平日午餐）`,
        en: `Kitchen cars (weekday lunch)`,
      },
      note: `weekdays only; queues of office workers with lanyards`,
    },
    {
      id: `tokyo:marunouchi:kokyo-run`,
      kind: `route`,
      x: -329,
      z: 90,
      radius: 400,
      points: [
        [-329, -150],
        [-329, -21],
        [-329, 21],
        [-329, 125],
        [-329, 330],
      ],
      label: {
        ja: `皇居ラン（日比谷通り）`,
        zh: `皇居慢跑（日比谷通）`,
        en: `Imperial Palace run (Hibiya-dori)`,
      },
      note: `the moat-side sidewalk (the loop runs counter-clockwise: northbound here); runners mornings and evenings`,
    },
    {
      id: `tokyo:marunouchi:colonnade`,
      kind: `spot`,
      x: -296.5,
      z: 118.5,
      heading: Nm,
      radius: 200,
      label: {
        ja: `馬場先門 交差点`,
        zh: `馬場先門 路口`,
        en: `Babasakimon crossing`,
      },
      note: `the giant Corinthian colonnade (明治生命館-style, unnamed) facing the 馬場先濠`,
    },
    {
      id: `tokyo:marunouchi:site-1chome`,
      kind: `area`,
      x: -278,
      z: -58,
      radius: 200,
      points: [
        [-297.5, -94],
        [-258.5, -94],
        [-258.5, -22],
        [-297.5, -22],
      ],
      label: {
        ja: `丸の内一丁目 建設現場`,
        zh: `丸之內一丁目 工地`,
        en: `Marunouchi 1-chome building site`,
      },
      note: `a set piece (not walkable inside): the timber-hybrid HQ under construction (completion FY2028), hoarding and crane`,
    },
    {
      id: `tokyo:marunouchi:wadakuramon`,
      kind: `spot`,
      x: -322,
      z: 24,
      heading: Nm,
      radius: 220,
      label: {
        ja: `和田倉門 交差点`,
        zh: `和田倉門 路口`,
        en: `Wadakuramon crossing`,
      },
      note: `行幸通り meets 日比谷通り at the moat; the 和田倉噴水公園 is across (out of bounds)`,
    },
  ],
  Pm = [];
function Fm(e, t) {
  let n = { ...t };
  return (Pm.push({ district: e, base: t, out: n }), n);
}
var Im = new Set([`marunouchi`, `nihonbashi`, `shimbashi`, `kanda`]),
  Lm = new Set([`shimbashi`, `kanda`, `ginza`, `ameyoko`, `ueno`]),
  dle = new Set([`ginza`, `akihabara`, `ameyoko`, `ueno`, `nihonbashi`]);
function fle(e, t, n, r, i) {
  let a = n.off,
    o = kf(e, n, r),
    s = Df(n, r),
    c = Of(n, r),
    l = ((r % 24) + 24) % 24;
  for (let n in t) {
    let r = t[n];
    switch (n) {
      case `office`:
        (Im.has(e) && a ? (r *= 0.22) : a && (r *= 0.45),
          !a && Im.has(e) && c > 0 && (r *= 1 + 0.4 * c),
          Lm.has(e) && (r *= 1 + 0.6 * o),
          !a &&
            (e === `marunouchi` || e === `nihonbashi`) &&
            (l >= 21 || l < 5) &&
            (r *= 0.6));
        break;
      case `uncle`:
        Lm.has(e) && (r *= 1 + 0.5 * o);
        break;
      case `student`:
        r *= 0.45 + 0.75 * s;
        break;
      case `tourist`:
        a && dle.has(e) && (r *= 1.3);
        break;
      case `family`:
        a && (r *= 1.6);
        break;
      case `auntie`:
      case `elder`:
        a && Im.has(e) && (r *= 1.2);
        break;
      case `delivery`:
        !a && c > 0 && (r *= 1 + 0.5 * c);
    }
    i[n] = r;
  }
  return i;
}
function ple(e, t) {
  for (let n of Pm) fle(n.district, n.base, e, t, n.out);
}
