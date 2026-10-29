// tokyo/assets/region-tokyo-A7LxHjud 418 — glyph
// Lines 150104-150400 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var i4 = (e, t) => ({ zh: e, en: t }),
  a4 = Se(1, { ...ze, currency: `TWD` }),
  uLe = {
    bg: `#1d8a3c`,
    fg: `#fff`,
    shape: `square`,
    glyph: (e, t) => {
      ((e.font = `900 ${Math.round(t * 0.36)}px "Helvetica Neue",Arial,sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(`JR`, 0, t * 0.02));
    },
  },
  dLe = {
    bg: `#0b6fb8`,
    fg: `#fff`,
    glyph: `M`,
    ring: `rgba(255,255,255,0.9)`,
  },
  fLe = {
    bg: `#c8261e`,
    fg: `#fff`,
    glyph: (e, t) => {
      let n = t * 0.5,
        r = t * 0.07;
      (e.fillRect(-n / 2 - r * 0.4, -t * 0.2, n + r * 0.8, r * 1.1),
        e.fillRect(-n / 2 + r * 0.6, -t * 0.09, n - r * 1.2, r * 0.8),
        e.fillRect(-n * 0.32, -t * 0.16, r, t * 0.38),
        e.fillRect(n * 0.32 - r, -t * 0.16, r, t * 0.38));
    },
  },
  pLe = { bg: `#ff8a00`, fg: `#2a1100`, glyph: `市` },
  mLe = [
    [1, 10],
    [2, 11],
    [5, 14],
    [10, 20],
    [15, 24],
    [19, 26],
    [23, 30],
    [24, 31],
    [21, 27],
    [15, 22],
    [9, 17],
    [4, 12],
  ],
  hLe = `
.tr-city{display:inline-flex;align-items:center;gap:.5em;padding:.24em .75em .26em .6em;border-radius:.35em;background:rgba(10,12,18,.74);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.22),0 .25em .9em rgba(0,0,0,.4);color:#fff;white-space:nowrap}
.tr-city::before{content:'';width:.62em;height:.62em;border-radius:50%;background:#d7000f;box-shadow:0 0 0 .14em #fff;flex:none}
.tr-city b{font-weight:900;letter-spacing:.14em}
.tr-city small{font-weight:700;font-size:.72em;letter-spacing:.22em;opacity:.75}
.ti-city{margin:.7em 0 0 .3em;font-size:1.15em;align-self:flex-start}
.pm-city{margin-left:.8em;font-size:.82em}
body.tr-compact .ti-city{margin-top:.4em;font-size:.95em}
.ti-photo{background:#07080c url(data:image/webp;base64,UklGRvgAAABXRUJQVlA4IOwAAAAwCQCdASpAACQAPuVcp02pJSOiN/VaqSAciWcAycRFYUtvVadRMOUpJg9HQYqCzN7usQJAIz+7ZxmBLr2xtmahC6/v9xo/d442sXvCfLdBFowAAP71cFHz3vo8QdW+XWw+LapYb9noJcaQtznvpOJc3lkw5pczAdOZbmmCKpYxUuSziV0W4mcpSYK9WenXKcaqPc5gNoPi9wd6iQpHB/hlzo/UKWTT8Vxh4brcf5yEVG5l7an+CkpbjC8ZOzfg5ea0bvRX7dRliAnnVyhDsh5ArsppuuqzLUpFRvMaf40PRCW7koP7O9idJnQAAA==) 63% 30%/cover no-repeat}
.ti-photo img{object-position:63% 30%}
@media (orientation:portrait) and (max-width:1024px){.ti-photo{background-position:50% 30%}.ti-photo img{object-position:50% 30%}}
@media (orientation:landscape) and (max-height:519px){.ti-photo img{object-position:100% 40%}}
.pm-card::after{content:'東京'}
`;
function gLe() {
  let e = null,
    t = pX.map((e) => ({
      id: e.id,
      color: e.color,
      name: { zh: e.name.zh, en: e.name.en },
      badge: e.id,
    })),
    n = new Map(pX.map((e) => [e.id, e]));
  return {
    look: cLe,
    photo: {
      portrait: `/tokyo/title/menu-portrait.webp 960w`,
      phone: `/tokyo/title/menu-phone.webp 1600w`,
      srcset: `/tokyo/title/menu-1600.webp 1600w, /tokyo/title/menu-2560.webp 2560w`,
      src: `/tokyo/title/menu-1600.webp`,
      label: {
        zh: `SHIBUYA SKYE · 東京鐵塔`,
        en: `Shibuya Skye · Tokyo Tower`,
        ja: `SHIBUYA SKYE・東京タワー`,
      },
      sub: { zh: `澀谷區`, en: `Shibuya City`, ja: `渋谷区` },
    },
    mapTitle: i4(`東京都`, `TOKYO`),
    city: i4(`東京都`, `Tokyo`),
    weatherTip: i4(
      `東京四季分明：六月梅雨、夏天悶熱，冬天乾冷晴朗。出門前看一下天氣 ☂`,
      `Tokyo has four real seasons: June rains, muggy summers, crisp clear winters. Check before you head out ☂`,
    ),
    storyDone: i4(
      `全部主線完成！東京是你的了。`,
      `Story complete — Tokyo is yours.`,
    ),
    noProgress: i4(
      `東京的任務與收集品即將登場。先到處逛逛吧！`,
      `Tokyo missions and collectibles are on the way. Go explore!`,
    ),
    legend: {
      mrt: i4(`JR・地鐵車站`, `Stations`),
      temple: i4(`神社・寺院`, `Shrines & temples`),
      market: i4(`市場・商店街`, `Markets`),
      service: i4(`醫院・警察署`, `Hospital · Police`),
    },
    taglines: {
      ueno: i4(
        `上野公園、博物館與不忍池`,
        `Ueno Park, museums & Shinobazu Pond`,
      ),
      ameyoko: i4(`高架橋下的阿美橫市場`, `The market under the tracks`),
      akihabara: i4(
        `電器街、動漫與女僕咖啡`,
        `Electric Town, anime & maid cafés`,
      ),
      kanda: i4(
        `高架橋下的居酒屋與神田明神`,
        `Izakaya under the tracks & Kanda Myojin`,
      ),
      marunouchi: i4(
        `紅磚東京車站與辦公大樓`,
        `Red-brick Tokyo Station & office towers`,
      ),
      nihonbashi: i4(
        `日本橋、老字號百貨與首都高`,
        `Nihonbashi, old department stores & the Shuto`,
      ),
      ginza: i4(
        `銀座四丁目、精品與步行者天國`,
        `Ginza 4-chome, flagship stores & car-free weekends`,
      ),
      shimbashi: i4(
        `上班族的居酒屋與築地場外市場`,
        `Salaryman izakaya & Tsukiji Outer Market`,
      ),
      "tokyo-east-generic": i4(
        `通往隅田川的下町街區`,
        `Old downtown blocks toward the Sumida`,
      ),
    },
    tips: [
      i4(
        `東京靠左行駛：右轉要等對向車先過。`,
        `Tokyo drives on the left: wait for oncoming traffic before turning right.`,
      ),
      i4(
        `在 JR 車站入口按互動鍵，就能搭山手線（目前開放新橋到上野）。`,
        `Ride the Yamanote Line from any JR entrance (Shimbashi to Ueno for now).`,
      ),
      i4(
        `地鐵站入口可以搭銀座線、日比谷線與丸之內線快速移動。`,
        `Metro entrances fast-travel you on the Ginza, Hibiya and Marunouchi lines.`,
      ),
      i4(
        `週末中午起，銀座的中央通變成步行者天國，車子進不去。`,
        `From noon on weekends, Ginza’s Chuo-dori is closed to cars — a pedestrian paradise.`,
      ),
      i4(
        `東京街角到處都是自動販賣機，一瓶飲料大約 ¥160。`,
        `Vending machines are on every corner — a drink is about ¥160.`,
      ),
      i4(
        r.on
          ? r.t(
              `錢包抵達時已自動換成日圓：${a4} = ¥5。`,
              `財布の中身は到着時に円へ自動両替済み：${a4} = ¥5。`,
            )
          : `錢包抵達時已自動換成日圓：${a4} = ¥5。`,
        `Your wallet converted to yen on arrival: ${a4} = ¥5.`,
      ),
      i4(
        `想回臺北？到東京車站八重洲口的機場巴士站。`,
        `Heading back to Taipei? Take the airport bus at Tokyo Station’s Yaesu side.`,
      ),
      i4(
        `按 {map} 開啟地圖；地圖上的「北」指向真正的北方，街道則順著山手線排列。`,
        `Press {map} for the map: its north marker points to true north; the streets follow the Yamanote Line.`,
      ),
      i4(
        `按 {phone} 打開手機，「電車」可以導航到最近的車站。`,
        `Press {phone} and open Trains to set GPS to a station.`,
      ),
      i4(
        `上野公園的櫻花在三月底到四月初盛開。`,
        `Ueno Park’s cherry blossoms peak from late March to early April.`,
      ),
      i4(
        `秋葉原的中央通兩旁都是電器行與動漫店。`,
        `Akihabara’s Chuo-dori is lined with electronics and anime shops.`,
      ),
      i4(
        `街角的「交番」就是派出所，警察就在裡面。`,
        `A koban on the corner is a police box — officers are inside.`,
      ),
    ],
    transit: {
      app: i4(`電車`, `Trains`),
      hint: i4(
        `點選車站設定導航；JR 入口搭山手線，地鐵入口搭地鐵`,
        `Tap a station for GPS; ride JR or Metro from its entrance`,
      ),
      lines: t,
      blip(e) {
        let t = n.get(String(e.line));
        return t?.op === `jr`
          ? { icon: `jr` }
          : { icon: `metro`, color: t?.color, glyph: String(e.line) };
      },
      gpsNotice: (e) => {
        let t = n.get(String(e.line))?.op === `jr`;
        return {
          zh: r.on
            ? r.t(
                `已導航至${t ? ` JR ` : `地鐵`}${e.name.zh}站`,
                `${t ? `JR ` : `地下鉄 `}${r.jz(e.name.zh)}駅へナビを設定`,
              )
            : `已導航至${t ? ` JR ` : `地鐵`}${e.name.zh}站`,
          en: `GPS set: ${e.name.en} Station (${t ? `JR` : `Metro`})`,
        };
      },
    },
    progress(t, n) {
      if (!e) return;
      let r = e.state.data;
      t &&
        n(
          tn.missionsDone,
          `${r.completedMissions.filter((e) => e.startsWith(`tokyo:`)).length} / ${t}`,
        );
      let i = 0;
      try {
        i = e.missions.collectibles?.total ?? 0;
      } catch {}
      i &&
        n(
          tn.collectibles,
          `${r.collectibles.filter((e) => e.startsWith(`daruma-`)).length} / ${i}`,
        );
    },
    blessing: i4(
      `參拜保佑中：任務報酬 +10%`,
      `Shrine blessing: +10% mission pay`,
    ),
    statLabels: {
      mrt_rides: i4(`搭電車・捷運次數`, `Train and metro rides`),
      buy_shrine: i4(`香油錢・賽錢`, `Shrine offerings`),
      daruma: { zh: `找到的達摩`, en: `Daruma found`, ja: `見つけただるま` },
      baito_shifts: {
        zh: `打工班數`,
        en: `Part-time shifts`,
        ja: `バイトのシフト数`,
      },
      baito_earned: {
        zh: `打工收入`,
        en: `Part-time earnings`,
        ja: `バイト収入`,
      },
    },
    phoneHint: {
      kbm: i4(
        `按 {phone} 打開手機：搭電車導航、切換電台、拍照。`,
        `Press {phone} for your phone: train directions, radio and the camera.`,
      ),
      touch: i4(
        `點左上的手機按鈕：搭電車導航、切換電台、拍照。`,
        `Tap the phone button (top left): train directions, radio and the camera.`,
      ),
      short: i4(
        `左上手機：電車・電台・拍照`,
        `Phone (top left): trains · radio · camera`,
      ),
    },
    collectible: {
      name: { zh: `達摩`, en: `Daruma`, ja: `だるま` },
      total: 30,
    },
    install(t) {
      ((e = t),
        (Qte.range = () => mLe[(t.time.date.m + 11) % 12]),
        en(`jr`, uLe),
        en(`metro`, dLe),
        en(`temple`, fLe),
        en(`market`, pLe));
      for (let e of ci(`konbini`))
        Gee(e.ja, [e.colors[0], e.colors[1], e.colors[2]]);
      if (!document.getElementById(`tokyo-ui-css`)) {
        let e = document.createElement(`style`);
        ((e.id = `tokyo-ui-css`),
          (e.textContent = hLe),
          document.head.appendChild(e));
      }
    },
  };
}
var o4 = Lee.length,
  s4 = o4 + 1,
  c4 = o4 + 2,
  l4 = !1;
