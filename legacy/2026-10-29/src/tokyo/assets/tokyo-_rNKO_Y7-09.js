// tokyo/assets/tokyo-_rNKO_Y7 09 — freq
// Lines 3675-3807 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var Zn = {
    fists: q(`拳頭`, `Fists`),
    bat: q(`球棒`, `Bat`),
    pistol: q(`手槍`, `Pistol`),
    smg: q(`衝鋒槍`, `SMG`),
  },
  Qn = {
    story: J.catStory,
    job: J.catJob,
    race: J.catRace,
    side: J.catSide,
    culture: J.catCulture,
  },
  $n = [
    q(
      `垃圾車的〈給愛麗絲〉響起時，全臺北都會出門倒垃圾。`,
      `When the garbage truck plays Für Elise, all of Taipei runs outside.`,
    ),
    q(
      `臺北的紅綠燈有倒數計時，黃燈別硬闖——測速照相會拍你。`,
      `Taipei's lights count down — don't gamble on yellow. Speed cameras are watching.`,
    ),
    q(
      `便利商店的茶葉蛋可以回血，一顆只要 13 元。`,
      `Tea eggs from convenience stores restore health — only ${A(13, { ...k, currency: `TWD` })}.`,
    ),
    q(
      `機車可以鑽車縫，也能騎上人行道（但警察會看）。`,
      `Scooters filter through traffic — and onto sidewalks (police are watching).`,
    ),
    q(
      `按 {map} 開啟地圖，點一下就能設定導航。`,
      `Press {map} for the map — click anywhere to set a GPS waypoint.`,
    ),
    q(
      `按 {phone} 打開手機：接任務、搭捷運、切換電台。`,
      `Press {phone} for your phone: jobs, metro and radio.`,
    ),
    q(
      `走到機車、重機或汽車旁按 {enter} 就能騎上去。`,
      `Press {enter} next to a scooter, motorcycle or car to take it.`,
    ),
    q(
      `下雨天路面濕滑，煞車距離會變長。`,
      `Rain makes the roads slippery. Brake earlier.`,
    ),
    q(
      `捷運站入口可以快速移動到城市另一頭。`,
      `MRT entrances let you fast-travel across the city.`,
    ),
    q(
      `夜市晚上七點以後最熱鬧：雞排、臭豆腐、珍珠奶茶。`,
      `Night markets come alive after 7 pm: fried chicken, stinky tofu, bubble tea.`,
    ),
    q(
      `騎樓是臺北人的雨天走廊，走在底下不會淋濕。`,
      `Arcades (騎樓) are Taipei’s rain corridors — walk under them to stay dry.`,
    ),
    q(
      `龍山寺建於 1738 年，是臺北最古老的廟宇之一。`,
      `Longshan Temple dates from 1738 — one of the oldest in Taipei.`,
    ),
  ],
  Y = {
    abandon: q(`放棄任務`, `Abandon mission`),
    abandonConfirm: q(
      `確定要放棄目前的任務嗎？這次不會獲得報酬。`,
      `Abandon the current mission? You will not be paid.`,
    ),
    abandonOk: q(`放棄`, `Abandon`),
    fullscreen: q(`全螢幕`, `Fullscreen`),
    exitFullscreen: q(`離開全螢幕`, `Exit fullscreen`),
    fullscreenIos: q(`全螢幕遊玩`, `Play fullscreen`),
    replay: q(`重玩`, `Replay`),
    inProgress: q(`進行中`, `In progress`),
    onTheWay: q(`前往起點中`, `Heading to start`),
    repeatable: q(`可重複`, `Repeatable`),
    hours: q(`時段`, `Hours`),
    blessing: q(
      `媽祖保佑中：任務報酬 +10%`,
      `Mazu's blessing: +10% mission pay`,
    ),
    hints: q(`新手提示`, `Tutorial hints`),
    hintsReset: q(`重新顯示新手提示`, `Show tutorial hints again`),
    hintsResetDone: q(`新手提示已重設`, `Tutorial hints reset`),
    gotIt: q(`知道了`, `Got it`),
    vehicleFire: q(
      `車子起火了！快下車！`,
      `Your vehicle is on fire — get out!`,
    ),
    reloading: q(`裝填中`, `Reloading`),
    onFoot: q(`步行`, `On foot`),
    driving: q(`駕駛 · 機車與汽車`, `Driving · scooters, motorcycles & cars`),
    menus: q(`介面`, `Menus`),
    photoCapture: q(`拍照`, `Capture`),
    photoExit: q(`離開`, `Exit`),
    photoTitle: q(`拍照模式`, `Photo mode`),
    photoSave: q(`儲存`, `Save`),
    photoLeave: q(`離開`, `Exit`),
    controlsGuide: q(`操作說明`, `Controls`),
  },
  er = {
    mandopop: q(`華語流行`, `Mandopop`),
    "lofi hip-hop": q(`Lo-Fi 嘻哈`, `Lo-fi hip-hop`),
    "temple EDM": q(`廟會電音`, `Temple EDM`),
    "taike rock": q(`台客搖滾`, `Taike rock`),
    classical: q(`古典音樂`, `Classical`),
    talk: q(`談話節目`, `Talk radio`),
    news: q(`新聞台`, `News`),
    "city pop": { zh: `城市流行`, en: `City pop`, ja: `シティポップ` },
    "J-rock": { zh: `日本搖滾`, en: `J-rock`, ja: `Jロック` },
    enka: { zh: `演歌`, en: `Enka`, ja: `演歌` },
    "idol pop": { zh: `偶像流行`, en: `Idol pop`, ja: `アイドルポップ` },
  };
function tr(e) {
  let t = /\s*((?:FM|AM)\s*[\d.]+)\s*$/.exec(e);
  return t
    ? { name: e.slice(0, t.index).trim(), freq: t[1].replace(/\s+/, ` `) }
    : { name: e, freq: `` };
}
var nr = null;
function rr(e) {
  nr = e;
}
function ir() {
  return nr ? nr.storyLog() : [];
}
function ar() {
  return nr ? nr.storyDate() : null;
}
function or(e) {
  nr?.setMarkersVisible(e);
}
