// tokyo/assets/region-tokyo-A7LxHjud 89 — label
// Lines 39349-39692 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Ale = {
    id: `akihabara`,
    name: { zh: `秋葉原`, en: `Akihabara` },
    residencyBounds: { ...Tte },
    claims: Ym
      ? []
      : Ete.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    honorPois: Ym ? [] : [`convenience-61`, `convenience-62`, `bubbletea-93`],
    missionAnchors: Dte,
    load: () =>
      Ym
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-akihabara-UGh9Bzey.js`)
                .then((e) => e.n)
                .then((e) => (Xm = e)),
            __vite__mapDeps([20, 1, 5, 2, 3, 4, 6, 7]),
          ),
    storefront: (e) => Xm?.storefront(e) ?? null,
    registerMissions() {},
    unload(e) {
      Xm?.unload(e);
    },
    prewarm(e) {
      if (!Ym) return kle(e);
    },
    keepResident() {
      return !1;
    },
  },
  jle = { minX: 80, minZ: -412, maxX: 304, maxZ: 112 },
  $m = Math.PI,
  eh = (e, t, n, r, i) => ({
    minX: e + 0.2,
    minZ: t + 0.2,
    maxX: n - 0.2,
    maxZ: r - 0.2,
    scope: `buildings`,
    label: i,
  }),
  th = (e, t, n, r, i) => ({
    minX: e,
    minZ: t,
    maxX: n,
    maxZ: r,
    scope: `props`,
    label: i,
  }),
  Mle = [
    eh(182.4, -299.6, 231.1, -202.4, `muromachi-w-yotsukoshi-bank`),
    eh(268.9, -299.6, 299.1, -202.4, `muromachi-e-soredo-fukutoku`),
    eh(268.9, -377.4, 299.1, -314.4, `honcho-otsu-ebisu`),
    eh(198.6, -157.6, 231.1, -140.8, `nihonbashi1-w-eijudo`),
    eh(268.9, -157.6, 279.3, -127, `nihonbashi1-e-riverside`),
    eh(267.9, -94.1, 279.4, -18.9, `nihonbashi2-e-takayamaya`),
    eh(182.4, 17.9, 231.1, 56.6, `kyobashi1-museum-galleries`),
    eh(183.4, 70.5, 231.1, 107, `kyobashi2-galleries-pillars`),
    eh(88.5, -93, 120.5, -18.9, `yaesu1-east-tower`),
    eh(88.5, 18.9, 120.5, 55.5, `yaesu2-north-tower`),
    eh(88.5, 70.5, 120.5, 107, `yaesu2-naka-site`),
    eh(88.5, -157.6, 120.5, -127, `gofukubashi-office`),
    eh(135.4, 70.5, 166.6, 107, `kyobashi1-office`),
    th(232.3, -240.4, 235.6, -228.4, `yotsukoshi-lions`),
    th(221.6, 91.6, 232.3, 108.3, `kyobashi-pillars`),
    th(201, -3.5, 209, 3.5, `joosten-median`),
    th(84.6, 31, 87.3, 35, `bus-pylon-sotobori`),
    th(280, -44, 300.3, 112.8, `c1-trench-strip`),
  ],
  nh = (e) => e,
  Nle = {
    id: `nihonbashi`,
    name: { zh: `日本橋・八重洲・京橋`, en: `Nihonbashi, Yaesu & Kyobashi` },
    residencyBounds: jle,
    claims: Mle,
    pedMix: {
      office: 5,
      auntie: 3,
      elder: 2,
      tourist: 2,
      uncle: 1,
      student: 1,
    },
    missionAnchors: [
      nh({
        id: `tokyo:nihonbashi:lions`,
        kind: `spot`,
        label: {
          ja: `四越のライオン前`,
          zh: `四越的獅子像前`,
          en: `The lions at Yotsukoshi`,
        },
        x: 234.4,
        z: -234.4,
        heading: $m / 2,
        radius: 200,
        note: `the meeting spot at the main store's lion entrance on 中央通り (待ち合わせ); the lions are bronze, never damaged`,
      }),
      nh({
        id: `tokyo:nihonbashi:yotsukoshi-door`,
        kind: `entrance`,
        label: {
          ja: `四越本店 中央通り口`,
          zh: `四越本店 中央通入口`,
          en: `Yotsukoshi main store, Chuo-dori entrance`,
        },
        x: 231.8,
        z: -234.4,
        heading: $m / 2,
        radius: 200,
        hours: [10, 19],
      }),
      nh({
        id: `tokyo:nihonbashi:bank-colonnade`,
        kind: `spot`,
        label: {
          ja: `室町の銀行本館 列柱`,
          zh: `室町銀行本館 列柱`,
          en: `The Muromachi bank colonnade`,
        },
        x: 233,
        z: -275,
        heading: $m / 2,
        radius: 200,
        note: `between the giant columns (a set piece: the 1929 bank hall behind)`,
      }),
      nh({
        id: `tokyo:nihonbashi:yamanaka`,
        kind: `entrance`,
        label: { ja: `山中海苔店`, zh: `山中海苔店`, en: `Yamanaka Nori` },
        copyKey: `nihonbashi.mark.yamanaka`,
        x: 267.4,
        z: -220.4,
        heading: -$m / 2,
        radius: 150,
        hours: [10, 18],
      }),
      nh({
        id: `tokyo:nihonbashi:ukiyo-koji`,
        kind: `route`,
        label: {
          ja: `浮世小路→福徳神社`,
          zh: `浮世小路→福德神社`,
          en: `Ukiyo-koji to Fukutoku Shrine`,
        },
        x: 268,
        z: -264.5,
        radius: 150,
        points: [
          [268, -264.5],
          [289.5, -264.5],
          [289.5, -284],
        ],
        note: `the alley from 中央通り to the shrine among the towers`,
      }),
      nh({
        id: `tokyo:nihonbashi:fukutoku`,
        kind: `spot`,
        label: { ja: `福徳神社`, zh: `福德神社`, en: `Fukutoku Shrine` },
        copyKey: `nihonbashi.shrine.fukutoku`,
        x: 289.5,
        z: -284,
        heading: $m,
        radius: 150,
        note: `sacred ground: nothing destructive (§3.10)`,
      }),
      nh({
        id: `tokyo:nihonbashi:c1-works`,
        kind: `area`,
        label: {
          ja: `首都高 地下化工事ヤード`,
          zh: `首都高地下化工區`,
          en: `Shuto undergrounding works yard`,
        },
        x: 293,
        z: -214.6,
        radius: 250,
        points: [
          [286, -227.6],
          [299.9, -227.6],
          [299.9, -201.6],
          [286, -201.6],
        ],
        note: `hoarding, the pile rig, the site office; a set piece, not walkable inside`,
      }),
      nh({
        id: `tokyo:nihonbashi:takayamaya-door`,
        kind: `entrance`,
        label: {
          ja: `高山屋 正面口`,
          zh: `高山屋 正門`,
          en: `Takayamaya main entrance`,
        },
        x: 267.4,
        z: -42.4,
        heading: -$m / 2,
        radius: 200,
        hours: [10.5, 19.5],
      }),
      nh({
        id: `tokyo:nihonbashi:kyobashi-pillars`,
        kind: `spot`,
        label: {
          ja: `京橋の親柱`,
          zh: `京橋的橋柱`,
          en: `The Kyobashi bridge pillars`,
        },
        copyKey: `nihonbashi.kyobashi.kanji`,
        x: 227,
        z: 100,
        heading: $m / 2,
        radius: 200,
        note: `the 1922 pillar with its lamp, an 1875 擬宝珠 pillar, the 江戸歌舞伎発祥之地 and 大根河岸 stones`,
      }),
      nh({
        id: `tokyo:nihonbashi:bus-terminal`,
        kind: `entrance`,
        label: {
          ja: `八重洲バスターミナル`,
          zh: `八重洲巴士總站`,
          en: `Yaesu Bus Terminal`,
        },
        copyKey: `nihonbashi.bus.name`,
        x: 87.6,
        z: 38.6,
        heading: -$m / 2,
        radius: 250,
        hours: [5, 24.5],
        note: `the street entrance; the platforms are underground (no interior in T2)`,
      }),
      nh({
        id: `tokyo:nihonbashi:chikagai`,
        kind: `entrance`,
        label: {
          ja: `八重洲地下街 入口`,
          zh: `八重洲地下街 入口`,
          en: `Yaesu Underground Mall entrance`,
        },
        copyKey: `nihonbashi.chikagai`,
        x: 92,
        z: -23,
        heading: -$m / 2,
        radius: 200,
        note: `a stair entrance (no underground interior in T2)`,
      }),
      nh({
        id: `tokyo:nihonbashi:yaesu-site`,
        kind: `area`,
        label: {
          ja: `八重洲二丁目 工事現場`,
          zh: `八重洲二丁目 工地`,
          en: `Yaesu 2-chome building site`,
        },
        x: 104.6,
        z: 88.8,
        radius: 250,
        points: [
          [88.6, 70.6],
          [120.6, 70.6],
          [120.6, 107],
          [88.6, 107],
        ],
        note: `the tower site behind its hoarding (completion 2029): a set piece, not walkable inside`,
      }),
      nh({
        id: `tokyo:nihonbashi:chuo-dori`,
        kind: `route`,
        label: {
          ja: `中央通り 室町→京橋`,
          zh: `中央通 室町→京橋`,
          en: `Chuo-dori, Muromachi to Kyobashi`,
        },
        x: 234,
        z: -300,
        radius: 400,
        points: [
          [234, -300],
          [234, -200],
          [234, -160],
          [234, -110],
          [234, 0],
          [234, 110],
        ],
        note: `the west sidewalk over the bridge (a tail / chase on foot); the east one is x 266`,
      }),
      nh({
        id: `tokyo:nihonbashi:bettara-ichi`,
        kind: `area`,
        label: { ja: `べったら市`, zh: `醃蘿蔔市集`, en: `Bettara-ichi fair` },
        copyKey: `nihonbashi.bettara.ichi`,
        x: 294,
        z: -307,
        radius: 250,
        hours: [10, 21],
        points: [
          [270, -313],
          [318, -313],
          [318, -301],
          [270, -301],
        ],
        note: `only on 19–20 October (宝田恵比寿神社): stalls along the street`,
      }),
      nh({
        id: `tokyo:nihonbashi:ebisu`,
        kind: `spot`,
        label: {
          ja: `宝田恵比寿神社`,
          zh: `寶田惠比壽神社`,
          en: `Takarada Ebisu Shrine`,
        },
        copyKey: `nihonbashi.shrine.ebisu`,
        x: 287.8,
        z: -313,
        heading: $m,
        radius: 150,
        note: `sacred ground: nothing destructive`,
      }),
    ],
    load: () =>
      t(
        () =>
          import(`./region-tokyo-d-nihonbashi-DqDPlYk4.js`)
            .then((e) => e.t)
            .then((e) => ((rh = e), e)),
        __vite__mapDeps([
          21, 1, 4, 5, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ]),
      ),
    registerMissions() {},
    keepResident() {
      return !!rh?.keepResident();
    },
    unload(e) {
      rh?.unload(e);
    },
    prewarm: () => [],
  },
  rh = null,
  ih =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`shim`) === `0`,
  ah = null,
  oh = null,
  sh = new Map();
