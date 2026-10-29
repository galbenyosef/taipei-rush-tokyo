// tokyo/assets/cities-tfcRdmsJ 01 — code
// Lines 1-241 of readable/tokyo/assets/cities-tfcRdmsJ.pretty.js (statement-aligned).
import "./engine-14d5lda2.js";
var e = [`tokyo`, `taipei`, `hong-kong`, `kaohsiung`];
(e.push(`london`),
  e.push(`taichung`),
  e.push(`tainan`),
  e.push(`mumbai`),
  e.push(`seoul`));
var t = (t) => e.includes(t),
  n = {
    TWD: {
      code: `TWD`,
      symbol: `NT$`,
      name: { zh: `新臺幣`, en: `New Taiwan dollar` },
    },
    HKD: {
      code: `HKD`,
      symbol: `HK$`,
      name: { zh: `港幣`, en: `Hong Kong dollar` },
    },
  };
((n.JPY = {
  code: `JPY`,
  symbol: `¥`,
  name: { zh: `日圓`, en: `Japanese yen` },
}),
  (n.GBP = {
    code: `GBP`,
    symbol: `£`,
    name: { zh: `英鎊`, en: `Pound sterling` },
  }),
  (n.KRW = {
    code: `KRW`,
    symbol: `₩`,
    name: { zh: `韓元`, en: `Korean won` },
  }),
  (n.INR = {
    code: `INR`,
    symbol: `₹`,
    name: { zh: `印度盧比`, en: `Indian rupee` },
  }));
function r(e, t) {
  return `${n[t].symbol}${Math.round(e).toLocaleString(`en-US`)}`;
}
var i = {
  taipei: {
    id: `taipei`,
    name: { zh: `臺北`, en: `Taipei` },
    game: { zh: `臺北狂飆`, en: `Taipei Rush` },
    page: `/`,
    saveKey: `taipei-rush-save-v1`,
    prefsKey: `taipei-rush-ui`,
    currency: `TWD`,
    airport: {
      code: `TSA`,
      name: { zh: `臺北松山機場`, en: `Taipei Songshan Airport` },
    },
    checkIn: {
      zh: `松山機場 第一航廈 國際線`,
      en: `Songshan Airport · Terminal 1 · International`,
    },
    utc: 8,
  },
  "hong-kong": {
    id: `hong-kong`,
    name: { zh: `香港`, en: `Hong Kong` },
    game: { zh: `香港狂飆`, en: `Hong Kong Rush` },
    page: `/hong-kong/`,
    saveKey: `hong-kong-gta-save-v1`,
    prefsKey: `hong-kong-gta-ui`,
    currency: `HKD`,
    airport: {
      code: `HKG`,
      name: { zh: `香港國際機場`, en: `Hong Kong International Airport` },
    },
    checkIn: {
      zh: `機場快綫 香港站 · 市區預辦登機`,
      en: `Airport Express · Hong Kong Station · In-Town Check-in`,
    },
    utc: 8,
  },
};
((i.taipei.hsr = {
  code: `TPE`,
  name: { zh: `高鐵臺北站`, en: `HSR Taipei Station` },
}),
  (i.kaohsiung = {
    id: `kaohsiung`,
    name: { zh: `高雄`, en: `Kaohsiung` },
    game: { zh: `高雄狂飆`, en: `Kaohsiung Rush` },
    page: `/kaohsiung/`,
    saveKey: `kaohsiung-rush-save-v1`,
    prefsKey: `kaohsiung-rush-ui`,
    currency: `TWD`,
    airport: {
      code: `KHH`,
      name: { zh: `高雄國際機場`, en: `Kaohsiung International Airport` },
    },
    hsr: { code: `ZUY`, name: { zh: `高鐵左營站`, en: `HSR Zuoying Station` } },
    checkIn: { zh: `高鐵左營站 · 售票處`, en: `HSR Zuoying Station · Tickets` },
    utc: 8,
  }),
  (i.tokyo = {
    id: `tokyo`,
    name: { zh: `東京`, en: `Tokyo` },
    game: { zh: `東京狂飆`, en: `Tokyo Rush` },
    page: `/tokyo/`,
    saveKey: `tokyo-rush-save-v1`,
    prefsKey: `tokyo-rush-ui`,
    currency: `JPY`,
    airport: {
      code: `HND`,
      name: { zh: `東京羽田機場`, en: `Tokyo Haneda Airport` },
    },
    checkIn: {
      zh: `東京車站 八重洲口 · 機場巴士`,
      en: `Tokyo Station Yaesu · Airport Limousine`,
    },
    utc: 9,
  }),
  (i.london = {
    id: `london`,
    name: { zh: `倫敦`, en: `London` },
    game: { zh: `倫敦狂飆`, en: `London Rush` },
    page: `/london/`,
    saveKey: `london-rush-save-v1`,
    prefsKey: `london-rush-ui`,
    currency: `GBP`,
    airport: {
      code: `LHR`,
      name: { zh: `倫敦希斯洛機場`, en: `London Heathrow` },
    },
    checkIn: {
      zh: `伊莉莎白線 托特納姆法院路站 · 前往希斯洛`,
      en: `Elizabeth line · Tottenham Court Road · to Heathrow`,
    },
    utc: 0,
  }),
  (i.taichung = {
    id: `taichung`,
    name: { zh: `臺中`, en: `Taichung` },
    game: { zh: `臺中狂飆`, en: `Taichung Rush` },
    page: `/taichung/`,
    saveKey: `taichung-rush-save-v1`,
    prefsKey: `taichung-rush-ui`,
    currency: `TWD`,
    airport: {
      code: `RMQ`,
      name: { zh: `臺中國際機場`, en: `Taichung International Airport` },
    },
    hsr: {
      code: `TAC`,
      name: { zh: `高鐵臺中站`, en: `HSR Taichung Station` },
    },
    checkIn: { zh: `臺中車站`, en: `Taichung Station` },
    utc: 8,
  }),
  (i.tainan = {
    id: `tainan`,
    name: { zh: `臺南`, en: `Tainan` },
    game: { zh: `臺南狂飆`, en: `Tainan Rush` },
    page: `/tainan/`,
    saveKey: `tainan-rush-save-v1`,
    prefsKey: `tainan-rush-ui`,
    currency: `TWD`,
    airport: { code: `TNN`, name: { zh: `臺南機場`, en: `Tainan Airport` } },
    hsr: { code: `TNN`, name: { zh: `高鐵臺南站`, en: `HSR Tainan Station` } },
    checkIn: { zh: `臺南車站`, en: `Tainan Station` },
    utc: 8,
  }),
  (i.seoul = {
    id: `seoul`,
    name: { zh: `首爾`, en: `Seoul` },
    game: { zh: `首爾狂飆`, en: `Seoul Rush` },
    page: `/seoul/`,
    saveKey: `seoul-rush-save-v1`,
    prefsKey: `seoul-rush-ui`,
    currency: `KRW`,
    airport: {
      code: `ICN`,
      name: { zh: `仁川國際機場`, en: `Incheon International Airport` },
    },
    checkIn: { zh: `首爾站`, en: `Seoul Station` },
    utc: 9,
  }),
  (i.mumbai = {
    id: `mumbai`,
    name: { zh: `孟買`, en: `Mumbai` },
    game: { zh: `孟買狂飆`, en: `Mumbai Rush` },
    page: `/mumbai/`,
    saveKey: `mumbai-rush-save-v1`,
    prefsKey: `mumbai-rush-ui`,
    currency: `INR`,
    airport: {
      code: `BOM`,
      name: {
        zh: `孟買賈特拉帕蒂·希瓦吉國際機場`,
        en: `Chhatrapati Shivaji Maharaj Intl, Mumbai`,
      },
    },
    checkIn: {
      zh: `教堂門車站 · 狂飆航空市區登機`,
      en: `Churchgate Station · RUSH AIR city check-in`,
    },
    utc: 5.5,
  }));
var a = (e) => !0,
  o = (e) => e === `seoul` || e === `jakarta`,
  s = { zh: `高鐵`, en: `HSR`, code: `HSR` },
  c = (e) => (e?.mode === `hsr` ? `hsr` : `flight`),
  l = (e) => (c(e) === `hsr` ? s : d);
function u(e, t = `flight`) {
  let n = i[e];
  return t === `hsr` && n.hsr ? n.hsr : n.airport;
}
var d = { zh: `狂飆航空`, en: `RUSH AIR`, code: `RX` },
  f = [
    {
      from: `taipei`,
      to: `hong-kong`,
      flightNo: 801,
      fare: 2e3,
      hours: 1.9,
      gate: `5`,
      close: 40,
      first: 430,
      every: 90,
      last: 1330,
    },
    {
      from: `hong-kong`,
      to: `taipei`,
      flightNo: 802,
      fare: 500,
      hours: 1.8,
      gate: `23`,
      close: 90,
      first: 460,
      every: 90,
      last: 1270,
    },
  ];
