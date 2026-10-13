/* Loader: a static key-art photo (an in-game screenshot, public/title/loader-*.webp) under a static gradient; maps
         raw init labels to localized, monotonic, duration-weighted progress; one Taipei / controls tip in the saved
         language. Only the progress indicator moves. */
(function () {
  var L = document.getElementById("loader");
  if (!L) return;
  var observers = [];
  var lang = tkLang();
  var EN = lang === "en",
    JA = lang === "ja";
  // the text index: [zh, en, ja]; the second line is the English (the Chinese for an English player)
  var I = EN ? 1 : JA ? 2 : 0;
  if (EN) document.documentElement.lang = "en";
  if (JA) document.documentElement.lang = "ja";
  // 日本語: the game is 「東京ラッシュ」 (the tab and the loader's name; the lockup switches by CSS)
  if (JA) {
    document.title = "東京ラッシュ · 東京を駆け抜けろ";
    L.setAttribute("aria-label", "東京ラッシュ 読み込み中");
  }

  // ---------------------------------------------------------------- photo
  // Requested once the entry scripts have run (DOMContentLoaded waits for the module graph): a 180–350 KB image
  // fetched in parallel delayed main.ts by ~250 ms at 10 Mbit/s. Until it is decoded — or if it fails — the
  // inline blurred placeholder; shown once decoded (never half-painted rows). A later source switch (rotation →
  // the portrait crop) keeps the current picture until the new one has loaded.
  var ph = L.querySelector(".ld-photo"),
    im = ph && ph.querySelector("img");
  function reveal() {
    if (im && im.naturalWidth) ph.classList.add("on");
  }
  function loadPhoto() {
    if (!im || !L.isConnected || im.getAttribute("srcset")) return;
    var so = ph.querySelector("source");
    if (so) so.srcset = so.getAttribute("data-srcset");
    im.addEventListener("load", function () {
      if (im.decode) im.decode().then(reveal, reveal);
      else reveal();
    });
    im.srcset = im.getAttribute("data-srcset");
    im.src = im.getAttribute("data-src");
  }
  document.addEventListener("DOMContentLoaded", loadPhoto, { once: true });

  // ---------------------------------------------------------------- tip (one per load, static)
  var TIPS = [
    [
      "東京靠左行駛：右轉要等對向車先過。",
      "Tokyo drives on the left: wait for oncoming traffic before turning right.",
      "東京は左側通行。右折は対向車が通り過ぎてから。",
    ],
    [
      "在 JR 車站入口按互動鍵，就能搭山手線（目前開放新橋到上野）。",
      "Ride the Yamanote Line from any JR entrance (Shimbashi to Ueno for now).",
      "JRの駅の入口でアクションキーを押せば山手線に乗れる（今は新橋〜上野）。",
    ],
    [
      "週末中午起，銀座的中央通變成步行者天國，車子進不去。",
      "From noon on weekends, Ginza’s Chuo-dori is closed to cars — a pedestrian paradise.",
      "週末の昼からは、銀座の中央通りが歩行者天国に。クルマは入れない。",
    ],
    [
      "東京街角到處都是自動販賣機，一瓶飲料大約 ¥160。",
      "Vending machines are on every corner — a drink is about ¥160.",
      "東京の街角には自販機がどこにでもある。飲み物は1本およそ¥160。",
    ],
    [
      "想回臺北？到東京車站八重洲口，搭機場巴士去羽田：狂飆航空在那裡辦理登機。",
      "Heading back to Taipei? RUSH AIR checks in at the Haneda airport bus stop, Tokyo Station’s Yaesu side.",
      "台北に帰るなら、東京駅八重洲口から羽田行きの空港バスへ。RUSH AIR のチェックインはそこで。",
    ],
    [
      "上野公園的櫻花在三月底到四月初盛開。",
      "Ueno Park’s cherry blossoms peak from late March to early April.",
      "上野公園の桜は3月末から4月初めが見頃。",
    ],
    [
      "按 M 打開地圖，點一下就能設定導航；按 T 打開手機。",
      "Press M for the map and click to set GPS. Press T to open your phone.",
      "M で地図を開き、クリックでナビを設定。T でスマホを開く。",
    ],
    [
      "按住 Shift（手把 B）衝刺；開車時空白鍵是手煞車。",
      "Hold Shift (gamepad B) to sprint. In a vehicle, Space is the handbrake.",
      "Shift（パッドは B）長押しでダッシュ。クルマではスペースがサイドブレーキ。",
    ],
  ];
  document.getElementById("ld-tip-k").textContent = EN
    ? "Tokyo tip"
    : JA
      ? "東京まめ知識"
      : "東京小知識";
  document.getElementById("ld-tips").textContent =
    TIPS[(Math.random() * TIPS.length) | 0][I];

  // ---------------------------------------------------------------- progress
  // main.ts writes the RAW stage key into #loader-label ('streets', 'districts'… 'ready' = shader warm-up) and the
  // progress WITHIN that stage as #loader-bar width. This loader owns the weights: each stage's share of the bar
  // is its measured init time (M-class laptop, high, round 4: districts ≈ 1.4 s now that it reports per pack, the
  // shader compile + warm frames ≈ 1.1 s), so the bar moves at an even speed. A localized label (older main.ts)
  // is mapped back through LABEL_KEY; an unknown key keeps the bar where it is (monotonic).
  // Tokyo's registry (src/regions/tokyo/systems.ts): the streamed tiles instead of streets / buildings
  var ORDER = [
    "audio",
    "audio-tokyo",
    "environment",
    "tiles",
    "landmarks",
    "districts",
    "culture",
    "transit",
    "sites",
    "player",
    "vehicles",
    "traffic",
    "peds",
    "tokyo-koban",
    "police",
    "missions",
    "travel",
    "camera",
    "ui",
    "ready",
  ];
  // (measured at T1: the tiles ≈ 0.6 s, the rest small — the shader warm-up dominates; T2's landmarks / sites small)
  var WEIGHT = {
    audio: 0.4,
    "audio-tokyo": 0.1,
    environment: 0.5,
    tiles: 1.4,
    landmarks: 0.4,
    districts: 0.2,
    culture: 0.2,
    transit: 0.3,
    sites: 0.2,
    player: 0.3,
    vehicles: 0.4,
    traffic: 0.1,
    peds: 0.4,
    "tokyo-koban": 0.1,
    police: 0.4,
    missions: 0.2,
    travel: 0.05,
    camera: 0.1,
    ui: 0.3,
    ready: 11,
  };
  var BASE = {},
    TOTAL = 0;
  ORDER.forEach(function (k) {
    BASE[k] = TOTAL;
    TOTAL += WEIGHT[k];
  });
  /** global 0..1 for (stage key, progress within it); NaN for an unknown key */
  function globalOf(key, local) {
    if (!(key in BASE)) return NaN;
    return (
      (BASE[key] + WEIGHT[key] * Math.max(0, Math.min(1, local || 0))) / TOTAL
    );
  }
  var STAGES = {
    loading: ["載入中", "Loading", "読み込み中"],
    audio: ["調校聲音", "Tuning the soundscape", "サウンドを調整中"],
    environment: ["天空、河川與護城河", "Sky, rivers & moats", "空、川、お濠"],
    "audio-tokyo": ["調校聲音", "Tuning the soundscape", "サウンドを調整中"],
    tiles: ["街道與街區", "Streets & blocks", "街路と街区"],
    landmarks: [
      "東京車站與地標",
      "Tokyo Station & landmarks",
      "東京駅とランドマーク",
    ],
    districts: ["街區", "Neighbourhoods", "街並み"],
    culture: ["橫丁與神社", "Alleys & shrines", "横丁と神社"],
    transit: ["JR 與地鐵", "JR & Metro", "JRと地下鉄"],
    sites: ["名店與老鋪", "Famous shops", "名店と老舗"],
    "tokyo-koban": ["派出所", "Police boxes", "交番"],
    travel: ["狂飆航空", "RUSH AIR", "RUSH AIR"],
    player: ["主角", "Protagonists", "主人公"],
    vehicles: ["汽車與腳踏車", "Cars & bikes", "クルマと自転車"],
    traffic: ["車流", "Traffic", "交通"],
    peds: ["行人", "Pedestrians", "歩行者"],
    police: ["警察", "Police", "警察"],
    missions: ["任務", "Missions", "ミッション"],
    camera: ["攝影機", "Camera", "カメラ"],
    ui: ["介面", "Interface", "インターフェース"],
    shaders: ["去東京狂飆！", "Let's go!", "東京を駆け抜けろ！"],
    ready: ["去東京狂飆！", "Let's go!", "東京を駆け抜けろ！"],
  };
  var LABEL_KEY = {
    "載入中…": "loading",
    "Loading…": "loading",
    調音中: "audio",
    "Tuning the radio": "audio",
    天空與天氣: "environment",
    "Sky & weather": "environment",
    鋪設街道: "streets",
    "Paving the streets": "streets",
    蓋起街屋與騎樓: "buildings",
    "Raising the blocks": "buildings",
    臺北101與地標: "landmarks",
    台北101與地標: "landmarks",
    "Taipei 101 & landmarks": "landmarks",
    街區細節: "districts",
    "Neighbourhood details": "districts",
    夜市與廟宇: "culture",
    "Night markets & temples": "culture",
    捷運: "transit",
    MRT: "transit",
    主角: "player",
    Protagonist: "player",
    機車與汽車: "vehicles",
    "Scooters & cars": "vehicles",
    車流: "traffic",
    Traffic: "traffic",
    行人: "peds",
    Pedestrians: "peds",
    警察: "police",
    Police: "police",
    任務: "missions",
    Missions: "missions",
    攝影機: "camera",
    Camera: "camera",
    介面: "ui",
    Interface: "ui",
    "去東京狂飆！": "ready",
    "Let's go!": "ready",
  };
  var shownP = 0,
    curStage = "";
  var fill = document.getElementById("ld-fill"),
    pct = document.getElementById("ld-pct");
  var stZh = document.getElementById("ld-stage"),
    stEn = document.getElementById("ld-stage-en");
  function setStageText(key, raw) {
    var s = STAGES[key];
    // unknown key (a new module): show what main.ts wrote rather than freezing on the previous stage
    stZh.textContent = s
      ? s[I]
      : raw || (EN ? "Loading" : JA ? "読み込み中" : "載入中");
    stEn.textContent = s && !JA ? s[EN ? 0 : 1] : "";
  }
  function show(p) {
    p = Math.max(shownP, Math.min(1, p));
    shownP = p;
    fill.style.transform = "scaleX(" + p.toFixed(4) + ")";
    var n = Math.floor(p * 100);
    pct.firstChild.nodeValue = String(n);
    L.setAttribute("aria-valuenow", String(n));
    L.classList.add("has-pct");
  }
  function onLoading(raw, f) {
    if (/^載入失敗|Failed/.test(raw)) {
      var detail = raw.replace(/^(?:載入失敗：?|Failed to load:\s*)/i, "");
      var text = EN
        ? "Tokyo Rush failed to load. Please reload. (" + detail + ")"
        : JA
          ? "東京ラッシュの読み込みに失敗しました。再読み込みしてください。（" +
            detail +
            "）"
          : "東京狂飆 載入失敗，請重新載入。（" + detail + "）";
      // the boot watchdog's error box (with a Reload button); plain text if that script is missing
      if (window.__tgtaLoaderError) window.__tgtaLoaderError(text);
      else {
        L.classList.add("failed");
        document.getElementById("ld-err").textContent = text;
      }
      return;
    }
    var key =
      lab.getAttribute("data-key") ||
      LABEL_KEY[raw] ||
      String(raw).split(":")[0].trim();
    if (key === "shaders") key = "ready";
    if (key !== curStage) {
      curStage = key;
      setStageText(key, raw);
    }
    var g = globalOf(key, f);
    if (isFinite(g)) show(g);
  }
  // main.ts writes the stage key (or a localized label + data-key) and the in-stage width % into these sinks
  var bar = document.getElementById("loader-bar"),
    lab = document.getElementById("loader-label");
  var lastRaw = "",
    lastW = "";
  function poll() {
    var raw = (lab.textContent || "").trim(),
      w = bar.style.width || "";
    var k = raw + "|" + (lab.getAttribute("data-key") || "");
    if (k === lastRaw && w === lastW) return;
    lastRaw = k;
    lastW = w;
    onLoading(raw, w ? parseFloat(w) / 100 : NaN);
  }
  // leaving: the progress UI fades first, the brand mark glides into the title logo (FLIP), then the art
  function leave() {
    if (L.classList.contains("leaving")) return;
    setStageText("ready");
    show(1);
    L.classList.add("leaving");
    var logo = L.querySelector(".ld-logo"),
      to = null;
    // (the title logo of the page language: the other lockup is display: none)
    [].forEach.call(
      document.querySelectorAll(".ti.show .ti-logo-svg"),
      function (el) {
        if (!to && el.getBoundingClientRect().width) to = el;
      },
    );
    if (!logo || !to) return;
    var a = logo.getBoundingClientRect(),
      b = to.getBoundingClientRect();
    if (!a.width || !b.width) return;
    var s = b.width / a.width,
      ex = 0,
      ey = 0;
    try {
      var cm = new DOMMatrix(getComputedStyle(logo).transform);
      ex = cm.e;
      ey = cm.f;
    } catch (e) {}
    a = { left: a.left - ex, top: a.top - ey };
    logo.style.transformOrigin = "0 0";
    logo.style.transition =
      "transform .5s cubic-bezier(.5,0,.2,1), opacity .25s linear .42s";
    logo.style.transform =
      "translate3d(" +
      (b.left - a.left).toFixed(1) +
      "px," +
      (b.top - a.top).toFixed(1) +
      "px,0) scale(" +
      s.toFixed(4) +
      ")";
    logo.style.opacity = "0";
    L.classList.add("flip");
  }
  if (window.MutationObserver) {
    var labelObserver = new MutationObserver(poll);
    labelObserver.observe(lab, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-key"],
    });
    var barObserver = new MutationObserver(poll);
    barObserver.observe(bar, { attributes: true, attributeFilter: ["style"] });
    var loaderObserver = new MutationObserver(function () {
      if (L.style.opacity === "0") leave();
    });
    loaderObserver.observe(L, { attributes: true, attributeFilter: ["style"] });
    observers.push(labelObserver, barObserver, loaderObserver);
  }
  setStageText("loading");
  stZh.textContent = EN ? "Preparing" : "準備中";
  stEn.textContent = JA ? "" : EN ? "準備中" : "Preparing"; // (準備中: zh and ja alike)
  // portrait phones: the game is landscape — say so early, while it loads
  try {
    if (matchMedia("(orientation: portrait) and (max-width: 700px)").matches) {
      var rot = document.createElement("div");
      rot.className = "ld-rot";
      rot.innerHTML =
        "<i></i><span>" +
        (EN
          ? "Turn your phone sideways for the best view"
          : JA
            ? "スマホを横向きにするともっと見やすく"
            : "橫放手機體驗更佳") +
        "</span>";
      L.appendChild(rot);
    }
  } catch (e) {}

  // main.ts, right before it removes the loader: drop the observers and the decoded photo
  L.addEventListener(
    "loader:dispose",
    function () {
      observers.forEach(function (o) {
        o.disconnect();
      });
      if (ph && ph.parentNode) ph.parentNode.removeChild(ph);
    },
    { once: true },
  );
})();
