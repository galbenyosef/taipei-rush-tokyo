// tokyo__assets__region-tokyo-BcM3fReU 245 — glyph
// Lines 98110-98401 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var p1 = (e, t) => ({ zh: e, en: t }),
  m1 = he(1, { ...be, currency: `TWD` }),
  h1 = {
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
  g1 = { bg: `#0b6fb8`, fg: `#fff`, glyph: `M`, ring: `rgba(255,255,255,0.9)` },
  _1 = {
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
  v1 = { bg: `#ff8a00`, fg: `#2a1100`, glyph: `市` },
  y1 = [
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
  b1 = `
.tr-city{display:inline-flex;align-items:center;gap:.5em;padding:.24em .75em .26em .6em;border-radius:.35em;background:rgba(10,12,18,.74);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.22),0 .25em .9em rgba(0,0,0,.4);color:#fff;white-space:nowrap}
.tr-city::before{content:'';width:.62em;height:.62em;border-radius:50%;background:#d7000f;box-shadow:0 0 0 .14em #fff;flex:none}
.tr-city b{font-weight:900;letter-spacing:.14em}
.tr-city small{font-weight:700;font-size:.72em;letter-spacing:.22em;opacity:.75}
.ti-city{margin:.7em 0 0 .3em;font-size:1.15em;align-self:flex-start}
.pm-city{margin-left:.8em;font-size:.82em}
body.tr-compact .ti-city{margin-top:.4em;font-size:.95em}
.ti-photo{background:#07080c url(data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAAAQCACdASpAACQAPuVgpk2pJaOiN/VYASAciWUAyjxFYUwsLscoW2Ml2hCz+kKNikNDYmJHX7gIqDjNqE1kvB80wZuGljKWv6jAAP70JcGZMxyYTPuxRqalwdOegrFLdHGfzKHTO/DRG+Ev1hdxPmkyCLX0kRBwsPIDJNt6nwFCHlWE1jwZFe4Qk+yUhEcVSq8PhZlw7xINbMJu55a5idDMYFWTJJPvFOAcCbi8uIXmIe4eHivFAYwByu2aaKGZxVhYjL6DZL3OPsth7it0kIhZRNvV4K9XIAAAAA==) 63% 30%/cover no-repeat}
.ti-photo img{object-position:63% 30%}
@media (orientation:portrait) and (max-width:1024px){.ti-photo{background-position:50% 30%}.ti-photo img{object-position:50% 30%}}
@media (orientation:landscape) and (max-height:519px){.ti-photo img{object-position:100% 40%}}
.pm-card::after{content:'東京'}
`;
function x1() {
  let e = null,
    t = dU.map((e) => ({
      id: e.id,
      color: e.color,
      name: { zh: e.name.zh, en: e.name.en },
      badge: e.id,
    })),
    n = new Map(dU.map((e) => [e.id, e]));
  return {
    look: d1,
    photo: {
      portrait: `/tokyo/title/menu-portrait.webp 960w`,
      phone: `/tokyo/title/menu-phone.webp 1600w`,
      srcset: `/tokyo/title/menu-1600.webp 1600w, /tokyo/title/menu-2560.webp 2560w`,
      src: `/tokyo/title/menu-1600.webp`,
      label: {
        zh: `秋葉原 · 晴空塔`,
        en: `Akihabara · Skytree`,
        ja: `秋葉原・スカイツリー`,
      },
      sub: { zh: `千代田區`, en: `Chiyoda City`, ja: `千代田区` },
    },
    mapTitle: p1(`東京都`, `TOKYO`),
    city: p1(`東京都`, `Tokyo`),
    weatherTip: p1(
      `東京四季分明：六月梅雨、夏天悶熱，冬天乾冷晴朗。出門前看一下天氣 ☂`,
      `Tokyo has four real seasons: June rains, muggy summers, crisp clear winters. Check before you head out ☂`,
    ),
    storyDone: p1(
      `全部主線完成！東京是你的了。`,
      `Story complete — Tokyo is yours.`,
    ),
    noProgress: p1(
      `東京的任務與收集品即將登場。先到處逛逛吧！`,
      `Tokyo missions and collectibles are on the way. Go explore!`,
    ),
    legend: {
      mrt: p1(`JR・地鐵車站`, `Stations`),
      temple: p1(`神社・寺院`, `Shrines & temples`),
      market: p1(`市場・商店街`, `Markets`),
      service: p1(`醫院・警察署`, `Hospital · Police`),
    },
    taglines: {
      ueno: p1(
        `上野公園、博物館與不忍池`,
        `Ueno Park, museums & Shinobazu Pond`,
      ),
      ameyoko: p1(`高架橋下的阿美橫市場`, `The market under the tracks`),
      akihabara: p1(
        `電器街、動漫與女僕咖啡`,
        `Electric Town, anime & maid cafés`,
      ),
      kanda: p1(
        `高架橋下的居酒屋與神田明神`,
        `Izakaya under the tracks & Kanda Myojin`,
      ),
      marunouchi: p1(
        `紅磚東京車站與辦公大樓`,
        `Red-brick Tokyo Station & office towers`,
      ),
      nihonbashi: p1(
        `日本橋、老字號百貨與首都高`,
        `Nihonbashi, old department stores & the Shuto`,
      ),
      ginza: p1(
        `銀座四丁目、精品與步行者天國`,
        `Ginza 4-chome, flagship stores & car-free weekends`,
      ),
      shimbashi: p1(
        `上班族的居酒屋與築地場外市場`,
        `Salaryman izakaya & Tsukiji Outer Market`,
      ),
      "tokyo-east-generic": p1(
        `通往隅田川的下町街區`,
        `Old downtown blocks toward the Sumida`,
      ),
    },
    tips: [
      p1(
        `東京靠左行駛：右轉要等對向車先過。`,
        `Tokyo drives on the left: wait for oncoming traffic before turning right.`,
      ),
      p1(
        `在 JR 車站入口按互動鍵，就能搭山手線（目前開放新橋到上野）。`,
        `Ride the Yamanote Line from any JR entrance (Shimbashi to Ueno for now).`,
      ),
      p1(
        `地鐵站入口可以搭銀座線、日比谷線與丸之內線快速移動。`,
        `Metro entrances fast-travel you on the Ginza, Hibiya and Marunouchi lines.`,
      ),
      p1(
        `週末中午起，銀座的中央通變成步行者天國，車子進不去。`,
        `From noon on weekends, Ginza’s Chuo-dori is closed to cars — a pedestrian paradise.`,
      ),
      p1(
        `東京街角到處都是自動販賣機，一瓶飲料大約 ¥160。`,
        `Vending machines are on every corner — a drink is about ¥160.`,
      ),
      p1(
        r.on
          ? r.t(
              `錢包抵達時已自動換成日圓：${m1} = ¥5。`,
              `財布の中身は到着時に円へ自動両替済み：${m1} = ¥5。`,
            )
          : `錢包抵達時已自動換成日圓：${m1} = ¥5。`,
        `Your wallet converted to yen on arrival: ${m1} = ¥5.`,
      ),
      p1(
        `想回臺北？到東京車站八重洲口的機場巴士站。`,
        `Heading back to Taipei? Take the airport bus at Tokyo Station’s Yaesu side.`,
      ),
      p1(
        `按 {map} 開啟地圖；地圖上的「北」指向真正的北方，街道則順著山手線排列。`,
        `Press {map} for the map: its north marker points to true north; the streets follow the Yamanote Line.`,
      ),
      p1(
        `按 {phone} 打開手機，「電車」可以導航到最近的車站。`,
        `Press {phone} and open Trains to set GPS to a station.`,
      ),
      p1(
        `上野公園的櫻花在三月底到四月初盛開。`,
        `Ueno Park’s cherry blossoms peak from late March to early April.`,
      ),
      p1(
        `秋葉原的中央通兩旁都是電器行與動漫店。`,
        `Akihabara’s Chuo-dori is lined with electronics and anime shops.`,
      ),
      p1(
        `街角的「交番」就是派出所，警察就在裡面。`,
        `A koban on the corner is a police box — officers are inside.`,
      ),
    ],
    transit: {
      app: p1(`電車`, `Trains`),
      hint: p1(
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
          $r.missionsDone,
          `${r.completedMissions.filter((e) => e.startsWith(`tokyo:`)).length} / ${t}`,
        );
      let i = 0;
      try {
        i = e.missions.collectibles?.total ?? 0;
      } catch {}
      i &&
        n(
          $r.collectibles,
          `${r.collectibles.filter((e) => e.startsWith(`daruma-`)).length} / ${i}`,
        );
    },
    blessing: p1(
      `參拜保佑中：任務報酬 +10%`,
      `Shrine blessing: +10% mission pay`,
    ),
    statLabels: {
      mrt_rides: p1(`搭電車・捷運次數`, `Train and metro rides`),
      buy_shrine: p1(`香油錢・賽錢`, `Shrine offerings`),
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
      kbm: p1(
        `按 {phone} 打開手機：搭電車導航、切換電台、拍照。`,
        `Press {phone} for your phone: train directions, radio and the camera.`,
      ),
      touch: p1(
        `點左上的手機按鈕：搭電車導航、切換電台、拍照。`,
        `Tap the phone button (top left): train directions, radio and the camera.`,
      ),
      short: p1(
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
        (ei.range = () => y1[(t.time.date.m + 11) % 12]),
        Dn(`jr`, h1),
        Dn(`metro`, g1),
        Dn(`temple`, _1),
        Dn(`market`, v1));
      for (let e of Ba(`konbini`))
        On(e.ja, [e.colors[0], e.colors[1], e.colors[2]]);
      if (!document.getElementById(`tokyo-ui-css`)) {
        let e = document.createElement(`style`);
        ((e.id = `tokyo-ui-css`),
          (e.textContent = b1),
          document.head.appendChild(e));
      }
    },
  };
}
var S1 = Tt.length,
  C1 = S1 + 1,
  w1 = S1 + 2,
  T1 = !1;
