// tokyo/assets/recovery-CHWBNwD3 01 — buy
// Lines 1-152 of readable/tokyo/assets/recovery-CHWBNwD3.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/client-NeGl0SRK.js",
      "assets/engine-BuS5QxN0.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/three-CC5Mkdpe.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DcD5mkpI.js",
      "assets/session-CLv8PYlR.js",
      "assets/controllers-mah1C7rD.js",
      "assets/game-y-FF2uWA.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, t } from "./ja-Ci9Qv_M-.js";
import { Sn as n, zn as r } from "./engine-BuS5QxN0.js";
import { f as i, i as a } from "./session-CLv8PYlR.js";
var o = `taipei-rush-market-ticket-v3:`,
  s = new Set();
function c() {
  let e = a();
  if (!e) return null;
  let t = e.anonymous === !1 ? e.user_id : `guest`;
  if (n() !== t) return null;
  try {
    return r(o + e.user_id)?.ticket ?? null;
  } catch {
    return `unreadable`;
  }
}
function hasPendingMarketTicket() {
  return c() !== null;
}
function notifyMarketTicketChange() {
  for (let e of s)
    try {
      e();
    } catch {}
}
function d(e) {
  let t = !1,
    n = () => {
      let n = hasPendingMarketTicket();
      (n && !t && e(), (t = n));
    },
    r = (e) => {
      (!e.key || e.key.startsWith(o)) && n();
    };
  (s.add(n), window.addEventListener(`storage`, r));
  let a = i(n);
  return (
    n(),
    () => {
      (s.delete(n), window.removeEventListener(`storage`, r), a());
    }
  );
}
var f = [8, 20, 45, 90, 180, 300];
function resolveInBackground(n, r) {
  let i,
    a = 0,
    o = !1,
    s = !1,
    u = (e) => {
      (clearTimeout(i), s || (i = setTimeout(() => void m(), e * 1e3)));
    },
    p = () => u(f[Math.min(a++, f.length - 1)]);
  async function m() {
    if (o || s) return;
    let i = c();
    if (!i) {
      a = 0;
      return;
    }
    if (i !== `unreadable`) {
      o = !0;
      try {
        let { createMarketClient: o } = await e(
            async () => {
              let { createMarketClient: e } = await import(
                `./client-NeGl0SRK.js`
              );
              return { createMarketClient: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          ),
          s = await (await o(n)).account();
        if (c() !== null) {
          p();
          return;
        }
        let l = s.orders.find((e) => e.requestId === i.requestId),
          u = i.quantity.toLocaleString(`en-US`);
        (l &&
          r(
            {
              zh: t.on
                ? t.t(
                    `股票已成交：${i.side === `buy` ? `買入` : `賣出`} ${i.symbol} × ${u}`,
                    `注文が約定しました：${i.side === `buy` ? `買い` : `売り`} ${i.symbol} × ${u}`,
                  )
                : `股票已成交：${i.side === `buy` ? `買入` : `賣出`} ${i.symbol} × ${u}`,
              en: `Order filled: ${i.side === `buy` ? `bought` : `sold`} ${i.symbol} × ${u}`,
            },
            `good`,
          ),
          (a = 0));
      } catch {
        if (c() !== null) {
          p();
          return;
        }
        (r(
          {
            zh: t.on
              ? t.t(
                  `股票委託未成交（${i.symbol}），錢包沒有變動`,
                  `注文は約定しませんでした（${i.symbol}）。財布はそのままです`,
                )
              : `股票委託未成交（${i.symbol}），錢包沒有變動`,
            en: `Order not filled (${i.symbol}); your wallet is unchanged`,
          },
          `bad`,
        ),
          (a = 0));
      } finally {
        o = !1;
      }
    }
  }
  let h = d(() => u(2)),
    g = () => {
      hasPendingMarketTicket() && ((a = 0), u(1));
    };
  return (
    window.addEventListener(`online`, g),
    hasPendingMarketTicket() &&
      r(
        {
          zh: `上一筆股票委託確認中…`,
          en: `Confirming your last stock order…`,
        },
        `info`,
      ),
    () => {
      ((s = !0), clearTimeout(i), h(), window.removeEventListener(`online`, g));
    }
  );
}
