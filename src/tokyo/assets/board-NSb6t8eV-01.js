// tokyo/assets/board-NSb6t8eV 01 — time
// Lines 1-345 of readable/tokyo/assets/board-NSb6t8eV.pretty.js (statement-aligned).
import { pn as e } from "./engine-14d5lda2.js";
import {
  i as t,
  l as n,
  m as r,
  n as i,
  o as a,
  p as o,
  s,
  t as c,
  u as l,
} from "./cities-tfcRdmsJ.js";
var u = {
    departures: { zh: `出境航班`, en: `DEPARTURES` },
    time: { zh: `時間`, en: `Time` },
    flight: { zh: `航班`, en: `Flight` },
    dest: { zh: `目的地`, en: `Destination` },
    gate: { zh: `登機門`, en: `Gate` },
    remark: { zh: `備註`, en: `Remarks` },
    checkin: { zh: `報到中`, en: `CHECK-IN` },
    onTime: { zh: `準時`, en: `ON TIME` },
    tomorrow: { zh: `明日`, en: `TOMORROW` },
    fare: { zh: `機票`, en: `Fare` },
    free: { zh: `首航優惠 免費`, en: `Inaugural flight: FREE` },
    rate: { zh: `匯率`, en: `Rate` },
    oneWallet: { zh: `兩地同一個錢包`, en: `one wallet in both cities` },
    after: { zh: `付款後`, en: `after the fare` },
    arrive: { zh: `抵達`, en: `Arrives` },
    leaves: { zh: `起飛`, en: `Departs` },
    wallet: { zh: `錢包`, en: `Wallet` },
    there: { zh: `在`, en: `In ` },
    firstVisit: {
      zh: `首次前往 · 抵達後故事從頭開始`,
      en: `First visit · your story there starts on arrival`,
    },
    checkIn: { zh: `辦理登機`, en: `Check in` },
    leave: { zh: `離開`, en: `Leave` },
    board: { zh: `登機`, en: `Board` },
    back: { zh: `返回`, en: `Back` },
    boarding: { zh: `登機證`, en: `BOARDING PASS` },
    passenger: { zh: `旅客`, en: `Passenger` },
    seat: { zh: `座位`, en: `Seat` },
    boardTime: { zh: `登機時間`, en: `Boarding` },
    short: { zh: `現金不足以支付機票`, en: `Not enough cash for the fare` },
    economy: { zh: `經濟艙`, en: `ECONOMY` },
    hint: { zh: `Enter 確認 · Esc 離開`, en: `Enter confirm · Esc leave` },
  },
  d = {
    departures: { zh: `高鐵 發車時刻`, en: `HSR DEPARTURES` },
    flight: { zh: `車次`, en: `Train` },
    gate: { zh: `月台`, en: `Platform` },
    checkin: { zh: `售票中`, en: `ON SALE` },
    fare: { zh: `車票`, en: `Fare` },
    free: { zh: `首次搭乘優惠 免費`, en: `First ride: FREE` },
    oneWallet: { zh: `各城市同一個錢包`, en: `one wallet in every city` },
    leaves: { zh: `發車`, en: `Departs` },
    checkIn: { zh: `購票`, en: `Buy ticket` },
    board: { zh: `上車`, en: `Board` },
    boarding: { zh: `高鐵車票`, en: `HSR TICKET` },
    boardTime: { zh: `進站時間`, en: `Gates open` },
    short: { zh: `現金不足以支付車票`, en: `Not enough cash for the fare` },
    economy: { zh: `標準車廂`, en: `STANDARD` },
  },
  f = { zh: `同為新臺幣`, en: `same currency` },
  p = { zh: `各城市同一個錢包`, en: `one wallet in every city` },
  m = { zh: `↑ ↓ 選擇目的地`, en: `↑ ↓ destination` },
  h = (e) => (e.tz ?? 0) * 60,
  g = `"Avenir Next Condensed","Bahnschrift","DIN Condensed","Roboto Condensed","Arial Narrow",sans-serif`,
  _ = `"SF Mono","Menlo","Consolas","DejaVu Sans Mono",monospace`,
  v = `
.trb-root.hsr .trb-head{border-bottom-color:#f26a21}.trb-root.hsr .trb-head .ic{background:#f26a21;color:#fff;font-size:17px}
.trb-root.hsr .bp-plane:after{content:'▶';color:#f26a21}.trb-root.hsr .bp-top{background:#f26a21}
.hst-wrap{width:min(700px,92vw);display:flex;flex-direction:column;align-items:center}
.hst-slot{position:relative;z-index:1;width:104%;height:30px;border-radius:9px;background:linear-gradient(180deg,#3a3e45,#24272c);box-shadow:inset 0 -2px 0 #0007,0 6px 14px #0006;
  display:flex;justify-content:center;padding-top:4px;box-sizing:border-box;font:800 10px ${e};letter-spacing:.3em;color:#aeb2b8}
.hst-slot:after{content:'';position:absolute;left:4%;right:4%;bottom:6px;height:3px;border-radius:2px;background:#07080a}
.hst-clip{width:100%;overflow:hidden;padding:0 10px 20px;margin-top:-6px}
.hst{position:relative;border-radius:7px;overflow:hidden;background:#fdfdfb;color:#1b1c1f;box-shadow:0 14px 30px rgba(0,0,0,.5);font-family:${e};
  animation:hst-issue .9s cubic-bezier(.25,.8,.3,1) both}
@keyframes hst-issue{from{transform:translateY(-104%)}62%{transform:translateY(2%)}to{transform:none}}
.hst:before{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(90deg,#0000 0 3px,#00000005 3px 4px)}
.hst-hd{display:flex;align-items:baseline;gap:.7em;padding:9px 16px 0;font-size:11px;color:#5d6066;letter-spacing:.08em}
.hst-hd b{font-size:15px;font-weight:900;color:#f26a21;letter-spacing:.14em}
.hst-hd span{font:800 10px ${g};letter-spacing:.24em;color:#f26a21}
.hst-hd em{font-style:normal;margin-left:auto}.hst-hd em+em{margin-left:0;padding:1px 7px;border:1px solid #c9cbcf;border-radius:3px;font-weight:800;color:#1b1c1f}
.hst-main{display:flex;align-items:center;gap:16px;padding:8px 16px 12px}
.hst-qr{width:88px;height:88px;flex:none;padding:5px;background:#fff;border:1px solid #e1e2e4;border-radius:4px}
.hst-route{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:10px}
.hst-st{text-align:center;min-width:0}
.hst-st b{display:block;font-size:40px;font-weight:900;line-height:1.05;letter-spacing:.06em}
.hst-st small{display:block;font:700 12px ${g};letter-spacing:.16em;color:#62656b;text-transform:uppercase}
.hst-st i{display:block;font:800 25px ${_};font-style:normal;margin-top:4px;letter-spacing:.02em}
.hst-st i small{display:inline;font:700 10px ${e};letter-spacing:.04em;margin-right:.3em}
.hst-arw{flex:none;color:#f26a21;font-size:20px;letter-spacing:-.18em;padding-bottom:30px}
.hst-seat{flex:none;display:flex;flex-direction:column;gap:5px;padding-left:14px;border-left:1px dashed #c9cbcf}
.hst-seat div{display:flex;align-items:baseline;justify-content:space-between;gap:12px;font-size:10.5px;color:#62656b;white-space:nowrap}
.hst-seat b{font:900 24px ${_};color:#1b1c1f;letter-spacing:.02em}
.hst-low{display:grid;grid-template-columns:auto auto auto 1fr;align-items:end;gap:6px 18px;padding:9px 16px 10px;background:#fbe4d3;border-top:3px solid #f26a21}
.hst-low div{font-size:10.5px;color:#7a5b48;white-space:nowrap}
.hst-low b{display:block;font:900 16px ${e};color:#1b1c1f;margin-top:1px}
.hst-low b.m{font-family:${_}}
.hst-low s{font:700 12px ${_};color:#9a7f6e;margin-right:.4em}
.hst-low .free{color:#d4541a}
.hst-low .note{text-align:right;line-height:1.45}
.hst-low code{font:700 11px ${_};color:#4b3a30;letter-spacing:.06em}
@media (max-width:820px),(max-height:560px){
  .hst-wrap{width:min(640px,94vw)} .hst-qr{width:62px;height:62px;padding:3px} .hst-st b{font-size:28px} .hst-st i{font-size:19px}
  .hst-seat b{font-size:18px} .hst-main{gap:10px;padding:5px 12px 8px} .hst-hd{padding:7px 12px 0}
  .hst-low{grid-template-columns:auto auto auto;padding:6px 12px 7px} .hst-low .note{display:none} .hst-low b{font-size:14px}
}
@media (max-width:480px){.hst-qr{display:none}.hst-st b{font-size:24px}}
@media (prefers-reduced-motion:reduce){.hst{animation:none}}
`,
  y = `
.trb-dests{display:flex;gap:6px;margin:0 0 8px}.trb-dests button{appearance:none;flex:1;border:1px solid #ffffff2a;background:#ffffff0d;color:#e8e8e2;border-radius:8px;
padding:6px 8px;font:800 14px inherit;font-family:inherit;cursor:pointer}.trb-dests button.on{background:#f5c400;color:#14161b;border-color:#f5c400}
.trb-dests small{display:block;font-size:10px;font-weight:700;opacity:.75;letter-spacing:.08em}.trb-row.alt{cursor:pointer;color:#ffd23a;opacity:.75}.trb-row.alt:hover{opacity:1}
`,
  b = !1;
function x() {
  if (b) return;
  b = !0;
  let t = document.createElement(`style`);
  t.id = `trav-board-css`;
  let n = `"Avenir Next Condensed","Bahnschrift","DIN Condensed","Roboto Condensed","Arial Narrow",sans-serif`,
    r = `"SF Mono","Menlo","Consolas","DejaVu Sans Mono",monospace`;
  ((t.textContent = `
.trb-root{position:fixed;inset:0;z-index:2147482000;display:flex;align-items:center;justify-content:center;font-family:${e};color:#f2f2ee;
  -webkit-user-select:none;user-select:none;touch-action:manipulation;animation:trb-in .26s cubic-bezier(.2,.8,.2,1)}
.trb-root.out{animation:trb-out .2s ease-in forwards}
@keyframes trb-in{from{opacity:0}to{opacity:1}} @keyframes trb-out{to{opacity:0}}
.trb-back{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(8,12,20,.6),rgba(3,4,8,.9));-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.trb-panel{position:relative;width:min(1120px,96vw);max-height:94vh;max-height:94dvh;display:flex;flex-direction:column;border-radius:14px;overflow:hidden;background:#101318;
  box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.07);animation:trb-pop .3s cubic-bezier(.2,.9,.25,1.1)}
@keyframes trb-pop{from{transform:translateY(16px) scale(.975)}to{transform:none}}
.trb-head{display:flex;align-items:center;gap:16px;padding:12px 18px;background:#1a1e25;border-bottom:3px solid #f5c400}
.trb-head .ic{width:34px;height:34px;flex:none;border-radius:8px;background:#f5c400;color:#14161b;display:grid;place-items:center;font-size:20px;font-weight:900}
.trb-title{font-weight:900;font-size:20px;letter-spacing:.08em}
.trb-sub{font:700 11px ${n};letter-spacing:.2em;opacity:.65;text-transform:uppercase}
.trb-clock{margin-left:auto;text-align:right;font:800 26px ${r};color:#f5c400;letter-spacing:.04em}
.trb-clock small{display:block;font:600 11px ${e};color:#c8c8c0;letter-spacing:.06em}
.trb-close{appearance:none;border:0;background:#ffffff14;color:#fff;width:36px;height:36px;border-radius:50%;font-size:19px;cursor:pointer;flex:none}
.trb-body{display:flex;min-height:0;flex:1}
.trb-fids{flex:1.35;min-width:0;padding:10px 12px 12px;background:#0b0d11;overflow:auto}
.trb-row{display:grid;grid-template-columns:4.2em 5.6em 1fr 3.4em 7.4em;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;font:700 15px ${r};color:#ffd23a;letter-spacing:.04em}
.trb-row.h{font:700 11px ${e};color:#8d8f94;letter-spacing:.12em;padding-top:2px;padding-bottom:6px;border-bottom:1px solid #22262d;border-radius:0}
.trb-row .to{font:800 16px ${e};color:#f2f2ee;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.trb-row .to small{font:700 11px ${n};color:#9a9ca2;letter-spacing:.12em;margin-left:.6em}
.trb-row .rm{font:800 12px ${e};letter-spacing:.06em;color:#9a9ca2}
.trb-row .rm.go{color:#5fe08f}
.trb-row .al{display:block;font:700 10px ${n};letter-spacing:.14em;color:#8d8f94}
.trb-row.other{opacity:.62}
.trb-row.sel{background:linear-gradient(90deg,rgba(245,196,0,.16),rgba(245,196,0,.05));box-shadow:inset 3px 0 0 #f5c400;cursor:pointer}
.trb-card{width:360px;flex:none;padding:16px 18px 14px;display:flex;flex-direction:column;gap:9px;background:#14171d;border-left:1px solid #22262d}
.trb-lab{font:800 11px ${n};letter-spacing:.22em;color:#8d8f94;text-transform:uppercase}
.trb-dest{font-weight:900;font-size:34px;line-height:1.02;letter-spacing:.04em}
.trb-dest small{display:block;font:700 14px ${n};letter-spacing:.18em;color:#a9abb1;margin-top:3px}
.trb-times{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.trb-times div{background:#1b1f26;border-radius:8px;padding:7px 9px;font-size:11px;color:#9a9ca2}
.trb-times b{display:block;font:800 21px ${r};color:#f2f2ee;margin-top:2px}
.trb-fare{display:flex;align-items:baseline;justify-content:space-between;font-size:13px;color:#b9bbc0}
.trb-fare b{font:800 19px ${r};color:#f2f2ee}
.trb-fare s{color:#7a7c82;margin-right:.5em;font-family:${r}}
.trb-fare .promo{color:#5fe08f;font-weight:900}
.trb-xch{background:#1b1f26;border-radius:9px;padding:9px 10px;font-size:12.5px;line-height:1.55;color:#b9bbc0}
.trb-xch b{color:#f2f2ee;font-family:${r};font-size:15px}
.trb-xch .arrow{color:#f5c400;margin:0 .35em}
.trb-xch .dim{color:#7e8086}
.trb-warn{min-height:18px;font-size:13px;font-weight:800;color:#ff6b6b;text-align:center}
.trb-go{appearance:none;border:0;margin-top:auto;padding:13px 12px;border-radius:11px;cursor:pointer;color:#14161b;font-weight:900;font-size:19px;letter-spacing:.1em;
  background:linear-gradient(180deg,#ffd52e,#f0b400);box-shadow:0 6px 18px rgba(245,196,0,.3);display:flex;align-items:center;justify-content:center;gap:10px}
.trb-go:disabled{background:#3a3d44;color:#8d8f94;box-shadow:none;cursor:default}
.trb-go kbd,.trb-sec kbd{font:800 11px ${n};background:#0000001f;border-radius:5px;padding:2px 6px}
@media (pointer:coarse){.trb-go kbd{display:none}}
.trb-sec{appearance:none;border:1px solid #343841;background:transparent;color:#c9cbd0;border-radius:10px;padding:9px;font:800 14px ${e};cursor:pointer}
.trb-foot{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;padding:7px 12px;background:#0b0d11;font-size:12px;color:#7e8086;border-top:1px solid #1d2128}
/* the boarding pass */
.trb-pass{display:none;padding:22px 22px 18px;flex-direction:column;align-items:center;gap:16px;background:#101318}
.trb-root.pass .trb-body,.trb-root.pass .trb-foot{display:none}
.trb-root.pass .trb-pass{display:flex}
.bp{position:relative;width:min(760px,90vw);display:flex;border-radius:14px;overflow:hidden;background:#fbfaf6;color:#17191d;box-shadow:0 18px 50px rgba(0,0,0,.5);animation:bp-print .55s cubic-bezier(.2,.9,.25,1)}
@keyframes bp-print{from{transform:translateY(-30px);clip-path:inset(0 0 100% 0)}to{transform:none;clip-path:inset(0 0 0 0)}}
.bp-main{flex:1;min-width:0;padding:14px 18px 12px}
.bp-top{display:flex;align-items:center;gap:10px;margin:-14px -18px 10px;padding:9px 18px;background:#c8102e;color:#fff}
.bp-top b{font-weight:900;letter-spacing:.12em;font-size:15px}
.bp-top span{margin-left:auto;font:800 12px ${n};letter-spacing:.24em}
.bp-route{display:flex;align-items:center;gap:14px;margin:4px 0 8px}
.bp-code{font:900 44px ${n};letter-spacing:.02em;line-height:1}
.bp-city{font-size:13px;font-weight:800;color:#555}
.bp-plane{flex:1;height:2px;background:repeating-linear-gradient(90deg,#bbb 0 6px,transparent 6px 11px);position:relative}
.bp-plane:after{content:'✈';position:absolute;left:50%;top:50%;transform:translate(-50%,-56%);font-size:22px;color:#c8102e;background:#fbfaf6;padding:0 6px}
.bp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px 12px}
.bp-grid div{font-size:10.5px;color:#777;letter-spacing:.06em}
.bp-grid b{display:block;font:800 17px ${r};color:#17191d;letter-spacing:.02em;margin-top:1px}
.bp-stub{width:178px;flex:none;padding:12px 14px;border-left:2px dashed #c9c6bc;display:flex;flex-direction:column;gap:6px;background:#f3f1ea}
.bp-stub div{font-size:10px;color:#777}
.bp-stub b{display:block;font:800 15px ${r};color:#17191d}
.bp-bar{margin-top:auto;height:38px;background:repeating-linear-gradient(90deg,#17191d 0 2px,transparent 2px 4px,#17191d 4px 5px,transparent 5px 8px,#17191d 8px 11px,transparent 11px 12px)}
.trb-acts{display:flex;gap:10px;width:min(760px,90vw)}
.trb-acts .trb-go{flex:1;margin:0}
.trb-acts .trb-sec{width:9em}
@media (max-width:820px),(max-height:560px){
  .trb-panel{position:absolute;inset:0;width:auto;max-height:none;border-radius:0}
  .trb-head{padding:max(6px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) 6px max(10px,env(safe-area-inset-left));gap:10px}
  .trb-sub,.trb-foot{display:none}
  .trb-title{font-size:16px} .trb-clock{font-size:19px}
  .trb-fids{display:none}
  .trb-card{width:auto;flex:1;border-left:0;padding:8px max(14px,env(safe-area-inset-right)) 0 max(14px,env(safe-area-inset-left));overflow:auto;gap:6px}
  .trb-dest{font-size:22px;display:flex;align-items:baseline;gap:.6em}
  .trb-dest small{margin-top:0;font-size:12px}
  .trb-times b{font-size:16px}
  .trb-times div{padding:5px 8px}
    .trb-xch{padding:6px 9px;line-height:1.4}
  .trb-warn{min-height:0}
  /* the check-in button stays on screen: pinned to the bottom of the scrolling card */
  .trb-card .trb-go{position:sticky;bottom:0;margin-top:auto;padding:10px;font-size:17px;box-shadow:0 -8px 14px #14171d}
  .trb-card .trb-sec{display:none}
  .bp-code{font-size:32px} .bp-stub{display:none}
  .trb-pass{padding:10px;overflow:auto}
}
`),
    (t.textContent += v),
    (t.textContent += y),
    document.head.appendChild(t));
}
var S = (e) =>
  e.replace(
    /[&<>"]/g,
    (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e] ?? e,
  );
function C(e, c, g, _, v = 0) {
  let y = (e) => (c === `ja` && _ ? _(e) : c === `en` ? e.en : e.zh),
    b = (e) => (c === `zh` || c === `ja` ? e.en : DepartureBoard.enOnly ? `` : e.zh),
    x = c !== `en`,
    C = i[e.to],
    w = i[e.from],
    T = n(e.route),
    E = T === `hsr`,
    D = E ? { ...u, ...d } : u,
    O = l(e.route),
    A = o(e.to, T),
    j = s(e.dep.min),
    M = s(e.dep.min + e.route.hours * 60 + h(e)),
    N = !e.promo && e.wallet < e.fare,
    P = e.blocked ?? (N ? D.short : null),
    F = [
      `<div class="trb-row h"><span>${y(D.time)}</span><span>${y(D.flight)}</span><span>${y(D.dest)}</span><span>${y(D.gate)}</span><span>${y(D.remark)}</span></div>`,
    ],
    I = e.others.map((e) => ({
      time: e.time,
      html: `<div class="trb-row other"><span>${s(e.time)}</span><span>${S(e.flight)}<span class="al">${S(y(e.airline))}</span></span><span class="to">${S(y(e.to))}<small>${S(b(e.to))}</small></span><span>${S(e.gate)}</span><span class="rm">${S(y(e.remark))}</span></div>`,
    }));
  (I.push({
    time: e.dep.min + (e.dep.nextDay ? 1440 : 0),
    html: `<div class="trb-row sel" data-act="go"><span>${j}</span><span>${S(e.dep.flight)}<span class="al">${S(x ? O.zh : O.en)}</span></span><span class="to">${S(y(C.name))}<small>${S(b(C.name))} ${A.code}</small></span><span>${S(e.route.gate)}</span><span class="rm go">${S(y(e.dep.nextDay ? D.tomorrow : D.checkin))}</span></div>`,
  }),
    (e.__all ?? []).forEach((t, r) => {
      if (t === e) return;
      let a = o(t.to, n(t.route));
      I.push({
        time: t.dep.min + (t.dep.nextDay ? 1440 : 0),
        html: `<div class="trb-row alt" data-pick="${r}"><span>${s(t.dep.min)}</span><span>${S(t.dep.flight)}<span class="al">${S(x ? O.zh : O.en)}</span></span><span class="to">${S(y(i[t.to].name))}<small>${S(b(i[t.to].name))} ${a.code}</small></span><span>${S(t.route.gate)}</span><span class="rm go">${S(y(t.dep.nextDay ? D.tomorrow : D.checkin))}</span></div>`,
      });
    }),
    I.sort((e, t) => e.time - t.time));
  for (let e of I) F.push(e.html);
  let L =
      e.destWallet === null
        ? ``
        : `<div>${S(y(D.there))}${S(y(C.name))} <b>${a(e.destWallet, g.toC)}</b></div>`,
    R =
      t[w.currency].code === t[C.currency].code
        ? S(y(f))
        : `${S(y(D.rate))} ${r(w.currency, C.currency)}`,
    z =
      (e.__all?.length ?? 0) > 1
        ? `<div class="trb-dests">${e.__all.map((e, t) => `<button type="button" data-pick="${t}" class="${t === v ? `on` : ``}">${S(y(i[e.to].name))}<small>${o(e.to, n(e.route)).code}</small></button>`).join(``)}</div>`
        : ``;
  return `
      <div class="trb-head"><div class="ic">${E ? `高` : `✈`}</div><div><div class="trb-title">${S(y(D.departures))}</div><div class="trb-sub">${S(y(e.counter))}</div></div>
        <div class="trb-clock">${s(e.hour * 60)}<small>${S(y(w.name))}</small></div><button class="trb-close" type="button" data-act="cancel">✕</button></div>
      <div class="trb-body">
        <div class="trb-fids">${F.join(``)}</div>
        <div class="trb-card">${z}
          <div class="trb-lab">${S(e.dep.flight)} · ${S(x ? O.zh : O.en)}</div>
          <div class="trb-dest">${S(y(C.name))}<small>${S(b(C.name))} · ${S(y(A.name))} ${A.code}</small></div>
          <div class="trb-times"><div>${S(y(D.leaves))}${e.dep.nextDay ? ` · ${S(y(D.tomorrow))}` : ``}<b>${j}</b></div><div>${S(y(D.arrive))} (${S(y(C.name))})<b>${M}</b></div></div>
          <div class="trb-fare"><span>${S(y(D.fare))}</span>${e.promo ? `<span><s>${a(e.route.fare, g.fromC)}</s><span class="promo">${S(y(D.free))}</span></span>` : `<b>${a(e.fare, g.fromC)}</b>`}</div>
          <div class="trb-xch trb-wallet">${S(y(D.wallet))} <b>${a(e.wallet, g.fromC)}</b><span class="arrow">→</span><b>${a(g.left, g.fromC)}</b> <span class="dim">${S(y(D.after))}</span>
            ${L}<div class="dim">${S(y(p))} · ${R}</div>${e.firstVisit ? `<div class="dim">${S(y(D.firstVisit))}</div>` : ``}</div>
          <div class="trb-warn">${P ? S(y(P)) : ``}</div>
          <button class="trb-go" type="button" data-act="go" ${P ? `disabled` : ``}>${S(y(D.checkIn))} ▸ <kbd>Enter</kbd></button>
          <button class="trb-sec" type="button" data-act="cancel">${S(y(D.leave))}</button>
        </div>
      </div>
      <div class="trb-pass"></div>
      <div class="trb-foot">${(e.__all?.length ?? 0) > 1 ? `${S(y(D.hint))} · ${S(y(m))}` : S(y(D.hint))}</div>`;
}
function w(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  let n = () =>
      ((t =
        Math.imul(t ^ (t >>> 15), 2246822507) ^
        Math.imul(t ^ (t >>> 13), 3266489909)) >>>
        0) /
      4294967296,
    r = (e, t) => {
      for (let [n, r] of [
        [0, 0],
        [18, 0],
        [0, 18],
      ]) {
        let i = e - n,
          a = t - r;
        if (i >= -1 && i <= 7 && a >= -1 && a <= 7)
          return i < 0 ||
            a < 0 ||
            i > 6 ||
            a > 6 ||
            Math.max(Math.abs(i - 3), Math.abs(a - 3)) === 2
            ? 0
            : 1;
      }
      return -1;
    },
    i = ``;
  for (let e = 0; e < 25; e++)
    for (let t = 0; t < 25; t++) {
      let a = r(t, e);
      (a >= 0 ? a === 1 : t === 6 || e === 6 ? (t + e) % 2 == 0 : n() < 0.5) &&
        (i += `M${t} ${e}h1v1h-1z`);
    }
  return i;
}
var T = (e) => ({
  zh: e.zh.replace(/^高鐵/, ``).replace(/站$/, ``),
  en: e.en.replace(/^HSR\s+/, ``).replace(/\s+Station$/, ``),
});
function E(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = (t * 31 + e.charCodeAt(n)) >>> 0;
  return [3, 4, 5, 7, 8, 9, 10][t % 7];
}
