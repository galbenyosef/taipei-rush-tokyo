// tokyo/assets/market-l-6OeMtj 01 — date
// Lines 1-197 of readable/tokyo/assets/market-l-6OeMtj.pretty.js (statement-aligned).
import { t as e } from "./ja-Ci9Qv_M-.js";
import { Sn as t, ct as n } from "./engine-BuS5QxN0.js";
import { C as r, S as i, n as a } from "./shared-DcD5mkpI.js";
import { f as o, i as s, o as c } from "./session-CLv8PYlR.js";
import { hasPendingMarketTicket as hasPendingMarketTicket } from "./recovery-CHWBNwD3.js";
import { createMarketClient as createMarketClient } from "./client-NeGl0SRK.js";
import { l as d } from "./dom-BCt0vy2n.js";
function ee(e, t, n, r) {
  let i = BigInt(Math.round(e * 100)) * BigInt(t),
    a = BigInt(Math.round(r.minCommission * 100)),
    o = ((i * BigInt(Math.round(r.commissionRate * 1e6))) / 100000000n) * 100n,
    s = o > a ? o : a,
    c =
      n === `sell`
        ? ((i * BigInt(Math.round(r.sellTaxRate * 1e6))) / 100000000n) * 100n
        : 0n,
    l = n === `buy` ? i + s : i - s - c;
  return {
    gross: Number(i) / 100,
    fee: Number(s) / 100,
    tax: Number(c) / 100,
    total: Number(l) / 100,
  };
}
var f = a === `hong-kong`,
  p = 1e3,
  m = (e, t = 0) =>
    Number.isFinite(e)
      ? e.toLocaleString(`en-US`, {
          minimumFractionDigits: t,
          maximumFractionDigits: t,
        })
      : `—`,
  h = (e) => m(e, e >= 1e3 ? 0 : 2),
  g = (e) =>
    `NT$ ${m(Math.round(e * 100) / 100, Number.isInteger(Math.round(e * 100) / 100) ? 0 : 2)}`,
  _ = (e) => (e == null ? `—` : `${e > 0 ? `+` : ``}${m(e, 2)}%`),
  v = (e) => (e != null && e > 0 ? `up` : e != null && e < 0 ? `down` : `flat`),
  y = (e) =>
    e
      ? new Intl.DateTimeFormat(`en-GB`, {
          timeZone: `Asia/Taipei`,
          hour: `2-digit`,
          minute: `2-digit`,
          hourCycle: `h23`,
        }).format(new Date(e))
      : ``,
  b = (e) => e.slice(5).replace(`-`, `/`),
  x = (e) =>
    new Intl.DateTimeFormat(`en-CA`, { timeZone: `Asia/Taipei` }).format(e),
  S = [
    [`日`, `Sun`],
    [`一`, `Mon`],
    [`二`, `Tue`],
    [`三`, `Wed`],
    [`四`, `Thu`],
    [`五`, `Fri`],
    [`六`, `Sat`],
  ].map(([e, t]) => ({ zh: e, en: t })),
  C = (t) => {
    let n = y(t),
      r = x(new Date(t)),
      i = Math.round((Date.parse(r) - Date.parse(x(new Date()))) / 864e5);
    if (i <= 0)
      return {
        zh: e.on ? e.t(`今天 ${n}`, `今日 ${n}`) : `今天 ${n}`,
        en: `today ${n}`,
      };
    if (i === 1)
      return {
        zh: e.on ? e.t(`明天 ${n}`, `明日 ${n}`) : `明天 ${n}`,
        en: `tomorrow ${n}`,
      };
    if (i > 6) return { zh: `${b(r)} ${n}`, en: `${b(r)} ${n}` };
    let a = S[new Date(`${r}T00:00:00Z`).getUTCDay()];
    return {
      zh: e.on
        ? e.t(`週${a.zh} ${n}`, `${e.jz(`週` + a.zh)} ${n}`)
        : `週${a.zh} ${n}`,
      en: `${a.en} ${n}`,
    };
  },
  w = [
    {
      zh: `用最新一天的收盤價成交，不是即時股價。`,
      en: `Every order fills at the latest closing price, not a live price.`,
    },
    {
      zh: `真實台股開盤的日子，遊戲從 09:00 起暫停下單，等當天收盤價公布後（約 16:30）重新開放。`,
      en: `On days the real exchange trades, the game stops taking orders at 09:00 and reopens once that day's close is out (about 16:30).`,
    },
    {
      zh: `所以平日 16:30 後到隔天 09:00，還有真實台股休市的週末和國定假日，整天都能下單。`,
      en: `So you can trade weekdays from 16:30 to 09:00 the next morning, and all day on weekends and holidays when the real exchange is closed.`,
    },
    {
      zh: `為什麼？真實台股盤中股價一直在變，若還能用昨天的收盤價買賣，就能穩賺不賠。`,
      en: `Why: while the real exchange trades, buying at yesterday's close would be a free win.`,
    },
  ],
  T = {
    market_closed: {
      zh: `真實台股開盤中，遊戲暫停下單，收盤價公布後開放`,
      en: `The real exchange is trading; orders reopen after its close`,
    },
    market_paused: {
      zh: `行情更新中，稍後再試`,
      en: `Prices are updating — try again shortly`,
    },
    market_outdated: {
      zh: `行情過舊，暫停交易`,
      en: `Prices are out of date; trading is paused`,
    },
    market_unavailable: {
      zh: `行情暫時無法使用`,
      en: `Prices are unavailable right now`,
    },
    stale_snapshot: {
      zh: `行情剛更新，請再按一次`,
      en: `Prices just updated — tap again`,
    },
    insufficient_cash: { zh: `錢包餘額不足`, en: `Not enough in your wallet` },
    insufficient_shares: { zh: `持股不足`, en: `Not enough shares` },
    sell_below_fees: {
      zh: `金額不夠付手續費和稅`,
      en: `Too small to cover fees and tax`,
    },
    position_limit: { zh: `已達持股上限`, en: `Holding limit reached` },
    account_limit: { zh: `已達帳戶上限`, en: `Account limit reached` },
    corporate_action_required: {
      zh: `除權息處理中，暫停交易`,
      en: `Paused for a corporate action`,
    },
    symbol_suspended: { zh: `這檔今天停止交易`, en: `Suspended today` },
    sell_only_symbol: {
      zh: `已移出台灣50，只能賣出`,
      en: `Left the Taiwan 50 — sell only`,
    },
    trade_rate_limited: {
      zh: `交易太頻繁，休息一下再試`,
      en: `Too many trades — wait a moment`,
    },
    rate_limited: {
      zh: `操作太頻繁，稍等一下`,
      en: `Too many requests — wait a moment`,
    },
    wallet_rate_limited: {
      zh: `存檔太頻繁，稍等一下再試`,
      en: `Saving too often — wait a moment`,
    },
    wallet_conflict: {
      zh: `錢包剛更新，請再按一次`,
      en: `Your wallet just changed — tap again`,
    },
    wallet_unavailable: {
      zh: `錢包同步中，稍等一下`,
      en: `Your wallet is syncing — wait a moment`,
    },
    cloud_not_ready: {
      zh: `錢包同步中，稍等一下`,
      en: `Your wallet is syncing — wait a moment`,
    },
    order_pending: {
      zh: `上一筆委託確認中`,
      en: `Your last order is still confirming`,
    },
    market_in_use: { zh: `另一個分頁正在交易`, en: `Another tab is trading` },
    wallet_recovery_required: {
      zh: `請先在帳戶頁恢復原本的登入`,
      en: `Restore your original sign-in in Account`,
    },
    storage_unavailable: {
      zh: `瀏覽器無法存檔，請允許網站資料`,
      en: `This browser cannot save — allow site data`,
    },
    unsupported_browser: {
      zh: `這個瀏覽器無法交易，請更新`,
      en: `This browser cannot trade — please update it`,
    },
    not_configured: {
      zh: `交易服務尚未開放`,
      en: `Trading is not available yet`,
    },
    unavailable: { zh: `交易服務尚未開放`, en: `Trading is not available yet` },
    network_error: {
      zh: `連線不穩，稍後再試`,
      en: `Connection problem — try again`,
    },
    service_unavailable: {
      zh: `交易服務忙碌，稍後再試`,
      en: `The service is busy — try again`,
    },
    invalid_response: {
      zh: `連線不穩，稍後再試`,
      en: `Connection problem — try again`,
    },
  };
