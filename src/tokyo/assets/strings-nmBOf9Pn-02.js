// tokyo/assets/strings-nmBOf9Pn 02 — freq
// Lines 324-443 of readable/tokyo/assets/strings-nmBOf9Pn.pretty.js (statement-aligned).
var d = {
    fists: r(`拳頭`, `Fists`),
    bat: r(`球棒`, `Bat`),
    pistol: r(`手槍`, `Pistol`),
    smg: r(`衝鋒槍`, `SMG`),
  },
  f = {
    story: i.catStory,
    job: i.catJob,
    race: i.catRace,
    side: i.catSide,
    culture: i.catCulture,
  },
  p = [
    r(
      `垃圾車的〈給愛麗絲〉響起時，全臺北都會出門倒垃圾。`,
      `When the garbage truck plays Für Elise, all of Taipei runs outside.`,
    ),
    r(
      `臺北的紅綠燈有倒數計時，黃燈別硬闖——測速照相會拍你。`,
      `Taipei's lights count down — don't gamble on yellow. Speed cameras are watching.`,
    ),
    r(
      `便利商店的茶葉蛋可以回血，一顆只要 13 元。`,
      `Tea eggs from convenience stores restore health — only ${n(13, { ...t, currency: `TWD` })}.`,
    ),
    r(
      `機車可以鑽車縫，也能騎上人行道（但警察會看）。`,
      `Scooters filter through traffic — and onto sidewalks (police are watching).`,
    ),
    r(
      `按 {map} 開啟地圖，點一下就能設定導航。`,
      `Press {map} for the map — click anywhere to set a GPS waypoint.`,
    ),
    r(
      `按 {phone} 打開手機：接任務、搭捷運、切換電台。`,
      `Press {phone} for your phone: jobs, metro and radio.`,
    ),
    r(
      `走到機車、重機或汽車旁按 {enter} 就能騎上去。`,
      `Press {enter} next to a scooter, motorcycle or car to take it.`,
    ),
    r(
      `下雨天路面濕滑，煞車距離會變長。`,
      `Rain makes the roads slippery. Brake earlier.`,
    ),
    r(
      `捷運站入口可以快速移動到城市另一頭。`,
      `MRT entrances let you fast-travel across the city.`,
    ),
    r(
      `夜市晚上七點以後最熱鬧：雞排、臭豆腐、珍珠奶茶。`,
      `Night markets come alive after 7 pm: fried chicken, stinky tofu, bubble tea.`,
    ),
    r(
      `騎樓是臺北人的雨天走廊，走在底下不會淋濕。`,
      `Covered walkways are Taipei’s rain corridors — walk under them to stay dry.`,
    ),
    r(
      `龍山寺建於 1738 年，是臺北最古老的廟宇之一。`,
      `Longshan Temple dates from 1738 — one of the oldest in Taipei.`,
    ),
  ],
  m = {
    abandon: r(`放棄任務`, `Abandon mission`),
    abandonConfirm: r(
      `確定要放棄目前的任務嗎？這次不會獲得報酬。`,
      `Abandon the current mission? You will not be paid.`,
    ),
    abandonOk: r(`放棄`, `Abandon`),
    fullscreen: r(`全螢幕`, `Fullscreen`),
    exitFullscreen: r(`離開全螢幕`, `Exit fullscreen`),
    fullscreenIos: r(`全螢幕遊玩`, `Play fullscreen`),
    replay: r(`重玩`, `Replay`),
    inProgress: r(`進行中`, `In progress`),
    onTheWay: r(`前往起點中`, `Heading to start`),
    repeatable: r(`可重複`, `Repeatable`),
    hours: r(`時段`, `Hours`),
    blessing: r(
      `媽祖保佑中：任務報酬 +10%`,
      `Mazu's blessing: +10% mission pay`,
    ),
    hints: r(`新手提示`, `Tutorial hints`),
    hintsReset: r(`重新顯示新手提示`, `Show tutorial hints again`),
    hintsResetDone: r(`新手提示已重設`, `Tutorial hints reset`),
    gotIt: r(`知道了`, `Got it`),
    vehicleFire: r(
      `車子起火了！快下車！`,
      `Your vehicle is on fire — get out!`,
    ),
    reloading: r(`裝填中`, `Reloading`),
    onFoot: r(`步行`, `On foot`),
    driving: r(`駕駛 · 機車與汽車`, `Driving · scooters, motorcycles & cars`),
    menus: r(`介面`, `Menus`),
    photoCapture: r(`拍照`, `Capture`),
    photoExit: r(`離開`, `Exit`),
    photoTitle: r(`拍照模式`, `Photo mode`),
    photoSave: r(`儲存`, `Save`),
    photoLeave: r(`離開`, `Exit`),
    controlsGuide: r(`操作說明`, `Controls`),
  },
  h = {
    mandopop: r(`華語流行`, `Mandopop`),
    "lofi hip-hop": r(`Lo-Fi 嘻哈`, `Lo-fi hip-hop`),
    "temple EDM": r(`廟會電音`, `Temple EDM`),
    "taike rock": r(`台客搖滾`, `Taike rock`),
    classical: r(`古典音樂`, `Classical`),
    talk: r(`談話節目`, `Talk radio`),
    news: r(`新聞台`, `News`),
    "city pop": { zh: `城市流行`, en: `City pop`, ja: `シティポップ` },
    "J-rock": { zh: `日本搖滾`, en: `J-rock`, ja: `Jロック` },
    enka: { zh: `演歌`, en: `Enka`, ja: `演歌` },
    "idol pop": { zh: `偶像流行`, en: `Idol pop`, ja: `アイドルポップ` },
  };
function g(e) {
  let t = /\s*((?:FM|AM)\s*[\d.]+)\s*$/.exec(e);
  return t
    ? { name: e.slice(0, t.index).trim(), freq: t[1].replace(/\s+/, ` `) }
    : { name: e, freq: `` };
}
