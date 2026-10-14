// tokyo/assets/cities-8-O8IWPJ 01 — code
// Lines 1-217 of readable/tokyo/assets/cities-8-O8IWPJ.pretty.js (statement-aligned).
var e = [`tokyo`, `taipei`, `hong-kong`, `kaohsiung`],
  t = (e) =>
    e === `taipei` || e === `hong-kong` || e === `tokyo` || e === `kaohsiung`,
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
n.JPY = { code: `JPY`, symbol: `¥`, name: { zh: `日圓`, en: `Japanese yen` } };
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
  }));
var a = { zh: `高鐵`, en: `HSR`, code: `HSR` },
  o = (e) => (e?.mode === `hsr` ? `hsr` : `flight`),
  s = (e) => (o(e) === `hsr` ? a : l);
function c(e, t = `flight`) {
  let n = i[e];
  return t === `hsr` && n.hsr ? n.hsr : n.airport;
}
var l = { zh: `狂飆航空`, en: `RUSH AIR`, code: `RX` },
  u = [
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
(u.push(
  {
    from: `taipei`,
    to: `kaohsiung`,
    mode: `hsr`,
    flightNo: 603,
    fare: 1490,
    hours: 1.6,
    gate: `1A`,
    close: 5,
    first: 390,
    every: 30,
    last: 1350,
  },
  {
    from: `kaohsiung`,
    to: `taipei`,
    mode: `hsr`,
    flightNo: 602,
    fare: 1490,
    hours: 1.6,
    gate: `4`,
    close: 5,
    first: 360,
    every: 30,
    last: 1350,
  },
),
  u.push(
    {
      from: `taipei`,
      to: `tokyo`,
      flightNo: 851,
      fare: 3e3,
      hours: 3,
      gate: `3`,
      close: 40,
      first: 460,
      every: 120,
      last: 1180,
    },
    {
      from: `tokyo`,
      to: `taipei`,
      flightNo: 852,
      fare: 15e3,
      hours: 3 + 40 / 60,
      gate: `108`,
      close: 75,
      first: 495,
      every: 120,
      last: 1095,
    },
  ));
function d(e, t) {
  let r = { JPY: 1, TWD: 5, HKD: 20 },
    [i, a] = r[e] >= r[t] ? [e, t] : [t, e];
  return `${n[i].symbol}1 = ${n[a].symbol}${r[i] / r[a]}`;
}
var f = (e) => (i[e]?.utc ?? 8) - 8;
function p(e, t) {
  return u.find((n) => n.from === e && n.to === t) ?? null;
}
var m = (e) => (e === `taipei` ? `hong-kong` : `taipei`),
  h = (t) => e.filter((e) => e !== t);
function g(e, t, n = 1, r = e.close) {
  let i = Math.floor((((t % 24) + 24) % 24) * 60) + r,
    s = [],
    c = Math.floor((e.last - e.first) / e.every) + 1,
    u = i <= e.first ? 0 : Math.ceil((i - e.first) / e.every),
    d = !1;
  for (; s.length < n;)
    (u >= c && ((u = 0), (d = !0)),
      s.push({
        min: e.first + u * e.every,
        nextDay: d,
        flight:
          o(e) === `hsr`
            ? `${a.code} ${String(e.flightNo + 2 * u).padStart(4, `0`)}`
            : `${l.code} ${e.flightNo + 2 * u}`,
      }),
      u++);
  return s;
}
function _(e) {
  let t = ((Math.round(e) % 1440) + 1440) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, `0`)}:${String(t % 60).padStart(2, `0`)}`;
}
