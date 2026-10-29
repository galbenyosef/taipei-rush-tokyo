// tokyo/assets/region-tokyo-55J_WESF 351 — ids
// Lines 127281-127518 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function uje(e) {
  return lje.map(([t, n, r, i, a, o, s]) =>
    e(t)
      ? { key: t, x: n, y: r, ids: [t], side: s }
      : {
          key: t,
          x: n,
          y: r,
          ids: [],
          ghost: { zh: i, en: a, code: o },
          side: s,
        },
  );
}
var dje = {
  "g-ueno": [5, 0, `t`],
  "h-ueno": [5, 0, `t`],
  "g-ueno-hirokoji": [3.4, 1.1, `l`],
  "h-naka-okachimachi": [6.1, 1.3, `r`],
  "g-suehirocho": [3, 2.5, `l`],
  "h-akihabara": [6.6, 2.7, `r`],
  "g-kanda": [3, 3.9, `l`],
  "h-kodemmacho": [7.3, 4, `r`],
  "g-mitsukoshimae": [4.5, 4.8, `r`],
  "h-ningyocho": [8, 5, `r`],
  "g-nihombashi": [4.5, 5.9, `r`],
  "h-kayabacho": [8, 6.1, `r`],
  "g-kyobashi": [4.5, 7.1, `r`],
  "h-hatchobori": [8, 7.3, `r`],
  "g-ginza": [3.9, 8.4, `b`],
  "h-ginza": [3.9, 8.4, `b`],
  "m-ginza": [3.9, 8.4, `b`],
  "h-higashi-ginza": [5.5, 8.6, `b`],
  "h-tsukiji": [7, 8.6, `b`],
  "h-hibiya": [2.5, 8.4, `b`],
  "g-shimbashi": [3.1, 9.8, `l`],
  "m-tokyo": [2.7, 6.3, `l`],
  "m-otemachi": [1.8, 5.2, `l`],
  "m-awajicho": [1.8, 3.6, `l`],
  "m-ochanomizu": [0.8, 2.7, `l`],
  "g-inaricho": [6.5, -0.1, `t`],
  "g-tawaramachi": [8, -0.3, `t`],
  "g-asakusa": [9.5, -0.5, `t`],
  "g-toranomon": [2, 10.4, `b`],
  "g-tameike-sanno": [0.5, 10.1, `l`],
  "g-akasaka-mitsuke": [-0.9, 8.8, `l`],
  "m-akasaka-mitsuke": [-0.9, 8.8, `l`],
  "h-kasumigaseki": [1.5, 7.8, `t`],
  "m-kasumigaseki": [1.5, 7.8, `t`],
  "m-kokkai-gijidomae": [0.3, 7.8, `l`],
  "h-toranomon-hills": [1.3, 11.5, `l`],
  "h-kamiyacho": [1, 12.4, `r`],
  "h-roppongi": [-0.4, 13, `l`],
  "m-hongo-sanchome": [0, 1.6, `l`],
  "m-korakuen": [-1.2, 0.5, `t`],
  "g-aoyama-itchome": [-2.2, 9.6, `b`],
  "g-gaiemmae": [-3.4, 10.2, `b`],
  "g-omotesando": [-4.6, 10.8, `b`],
  "g-shibuya": [-6, 11.6, `b`],
  "m-yotsuya": [-1.9, 7.6, `t`],
  "m-yotsuya-sanchome": [-3, 7, `t`],
  "m-shinjuku-gyoemmae": [-4.1, 6.4, `t`],
  "m-shinjuku-sanchome": [-5.1, 5.8, `t`],
  "m-shinjuku": [-6.2, 5.2, `t`],
};
function fje(e, t) {
  let n = new Map();
  for (let r of e) {
    let e = dje[r];
    if (!e) continue;
    let i = t(r),
      a = n.get(i);
    a
      ? a.ids.push(r)
      : n.set(i, { key: i, x: e[0], y: e[1], ids: [r], side: e[2] });
  }
  return [...n.values()];
}
var mX = { currency: `JPY`, style: `tight` },
  pje = `http://www.w3.org/2000/svg`,
  hX = !1;
function gX(e) {
  if (hX) return;
  hX = !0;
  let t = document.createElement(`style`);
  ((t.id = `tokyo-transit-css`),
    (t.textContent = `
.tkp-root{position:fixed;inset:0;z-index:2147482000;display:flex;align-items:center;justify-content:center;font-family:${ye};color:#16181c;
  -webkit-user-select:none;user-select:none;touch-action:manipulation;animation:tkp-in .26s cubic-bezier(.2,.8,.2,1)}
.tkp-root.out{animation:tkp-out .2s ease-in forwards}
@keyframes tkp-in{from{opacity:0}to{opacity:1}}
@keyframes tkp-out{to{opacity:0}}
.tkp-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(10,16,24,.55),rgba(3,5,8,.88));-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}
.tkp-panel{position:relative;width:min(1120px,96vw);max-height:94vh;max-height:94dvh;display:flex;flex-direction:column;border-radius:16px;overflow:hidden;background:#f6f6f3;
  box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08)}
.tkp-head{display:flex;align-items:center;gap:16px;padding:12px 18px;color:#fff;border-bottom:4px solid var(--acc)}
.tkp-head.jr{background:#1c2a1c}.tkp-head.metro{background:#0f2a44}
.tkp-mark{width:40px;height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;font:900 15px Helvetica,Arial,sans-serif;background:var(--acc);color:#fff;flex:none}
.tkp-title{font-weight:900;font-size:20px;letter-spacing:.05em}
.tkp-sub{font:600 11px Helvetica,Arial,sans-serif;letter-spacing:.16em;opacity:.7;text-transform:uppercase}
.tkp-here{margin-left:auto;text-align:right;font-size:13px;line-height:1.25}
.tkp-here b{font-size:18px;color:#ffe066}
.tkp-here small{display:block;font:500 11px Helvetica,Arial,sans-serif;opacity:.7}
.tkp-card{display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:10px;background:linear-gradient(135deg,#2e6b4f,#1d4e7a);font-weight:800;font-size:14px;white-space:nowrap}
.tkp-card i{font-style:normal;font:700 10px Helvetica,Arial;opacity:.8;letter-spacing:.1em}
.tkp-x{appearance:none;border:0;background:#ffffff1a;color:#fff;width:38px;height:38px;border-radius:50%;font-size:20px;cursor:pointer;flex:none}
.tkp-body{display:flex;min-height:0;flex:1}
.tkp-map{flex:1;min-width:0;position:relative;background:#fbfbf8;background-image:linear-gradient(#0000000a 1px,transparent 1px),linear-gradient(90deg,#0000000a 1px,transparent 1px);background-size:28px 28px}
.tkp-map svg{display:block;width:100%;height:100%;max-height:calc(94vh - 140px);max-height:calc(94dvh - 140px)}
.tkp-info{width:290px;flex:none;padding:16px;display:flex;flex-direction:column;gap:10px;background:#fff;border-left:1px solid #e2e1db}
.tkp-lab{font:800 11px Helvetica,Arial,sans-serif;letter-spacing:.2em;color:#888}
.tkp-dn{font-weight:900;font-size:30px;line-height:1.05}
.tkp-de{font:600 14px Helvetica,Arial,sans-serif;color:#555;margin-top:-4px}
.tkp-codes{display:flex;gap:6px;flex-wrap:wrap}
.tkp-code{display:inline-block;padding:2px 7px;border-radius:5px;color:#fff;font:800 12px Helvetica,Arial,sans-serif;background:var(--c)}
.tkp-legs{display:flex;flex-direction:column;gap:6px}
.tkp-leg{display:flex;align-items:center;gap:8px;font-size:13px;line-height:1.25}
.tkp-leg .bar{width:6px;align-self:stretch;min-height:28px;border-radius:3px;background:var(--c)}
.tkp-leg small{display:block;color:#6a6e75;font:500 11px Helvetica,Arial,sans-serif}
.tkp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.tkp-stat{background:#f1f0eb;border-radius:10px;padding:8px 6px 7px;text-align:center}
.tkp-stat span{display:block;font-size:11px;color:#777}
.tkp-stat b{display:block;font-size:18px;font-weight:900;margin-top:2px}
.tkp-go{appearance:none;border:0;margin-top:auto;padding:13px 12px;border-radius:12px;cursor:pointer;color:#fff;font-weight:900;font-size:18px;letter-spacing:.08em;
  background:linear-gradient(180deg,var(--acc),var(--acc2));box-shadow:0 6px 18px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;gap:10px}
.tkp-go:disabled{background:#b9bbbf;box-shadow:none;cursor:default}
.tkp-go kbd{font:800 12px Helvetica,Arial;background:#ffffff33;border-radius:5px;padding:2px 6px}
.tkp-warn{min-height:18px;font-size:13px;color:#c2002a;font-weight:700;text-align:center}
.tkp-foot{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;padding:8px 12px;background:#ecebe5;font-size:12px;color:#555}
.tkp-foot kbd{font:700 11px Helvetica,Arial;background:#fff;border:1px solid #ccc;border-bottom-width:2px;border-radius:5px;padding:1px 6px;margin:0 2px;color:#222}
.tkp-st{cursor:pointer}.tkp-st .hit{fill:transparent}
.tkp-st .sel{opacity:0;transition:opacity .15s}.tkp-st.on .sel{opacity:1}
.tkp-st.here .ring{animation:tkp-pulse 1.4s ease-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes tkp-pulse{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(2.3)}}
.tkp-dim .tkp-line{opacity:.25}
.tkp-route{fill:none;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}
.tkp-flow{stroke-dasharray:2 15;animation:tkp-flow .8s linear infinite}
@keyframes tkp-flow{to{stroke-dashoffset:-17}}
@media (max-width:820px),(max-height:560px){
  .tkp-panel{position:absolute;inset:0;width:auto;height:auto;max-height:none;border-radius:0}
  .tkp-body{padding:0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
  .tkp-head{padding:max(6px,env(safe-area-inset-top)) 10px 6px;gap:10px}
  .tkp-sub,.tkp-here,.tkp-foot,.tkp-lab{display:none}
  .tkp-card{margin-left:auto;font-size:12px;padding:4px 9px}
  .tkp-map svg{max-height:none}
  .tkp-dn{font-size:22px}.tkp-stat b{font-size:15px}.tkp-go{padding:10px;font-size:16px}
}
@media (max-width:820px) and (orientation:portrait){
  .tkp-body{flex-direction:column}
  .tkp-info{width:auto;border-left:0;border-top:1px solid #e2e1db;padding:10px 14px;gap:8px}
  .tkp-legs{display:none}
}
/* in-train LCD */
.tkl{position:fixed;left:50%;bottom:max(18px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:2147481000;width:min(780px,94vw);border-radius:10px;overflow:hidden;
  background:#0d0f12;box-shadow:0 10px 40px rgba(0,0,0,.6),0 0 0 3px #2a2d31;font-family:${e};color:#fff;animation:tkp-in .4s ease-out}
.tkl.out{animation:tkp-out .3s ease-in forwards}
.tkl.tkl-cab{top:max(8px,env(safe-area-inset-top));bottom:auto;transform:translateX(-50%) scale(.56);transform-origin:50% 0;opacity:.94}
@media (max-height:520px){.tkl.tkl-cab{transform:translateX(-50%) scale(.42)}}
.tkl-top{display:flex;align-items:stretch;min-height:96px}
.tkl-badge{flex:none;width:96px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:#16191d;border-right:3px solid var(--c)}
.tkl-badge .b{width:46px;height:46px;border-radius:6px;background:var(--c);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding-top:2px;box-sizing:border-box}
.tkl-badge .b i{font:800 12px Helvetica,Arial;font-style:normal;color:#fff}
.tkl-badge .b u{text-decoration:none;display:block;background:#fff;color:#111;width:38px;border-radius:3px;font:800 17px Helvetica,Arial;text-align:center}
.tkl-badge small{font:700 10px Helvetica,Arial;color:#aaa;letter-spacing:.08em}
.tkl-main{flex:1;padding:10px 16px;display:flex;flex-direction:column;justify-content:center}
.tkl-k{font-size:15px;color:#ffd400;font-weight:700}
.tkl-k em{font:700 12px Helvetica,Arial;font-style:normal;color:#ddd;margin-left:8px}
.tkl-n{font-size:40px;font-weight:800;line-height:1.05;letter-spacing:.04em}
.tkl-r{font:700 16px Helvetica,Arial;color:#cfd3d8}
.tkl-door{flex:none;width:170px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#16191d;font-size:13px;text-align:center;gap:3px;padding:6px}
.tkl-door b{color:#ffd400;font-size:22px}
.tkl-strip{display:flex;align-items:center;gap:0;padding:8px 14px 10px;background:#f2f3f4;color:#111;overflow:hidden}
.tkl-s{flex:1;display:flex;flex-direction:column;align-items:center;font-size:13px;font-weight:700;position:relative;min-width:0}
.tkl-s i{width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid var(--c);margin-bottom:3px;z-index:1}
.tkl-s.now i{background:var(--c)}
.tkl-s.past{opacity:.35}
.tkl-s small{font:600 9px Helvetica,Arial;color:#555}
.tkl-s:before{content:'';position:absolute;top:7px;left:0;right:0;height:5px;background:var(--c);z-index:0}
.tkl-s:first-child:before{left:50%}.tkl-s:last-child:before{right:50%}
.tkl-hint{position:fixed;right:max(16px,env(safe-area-inset-right));top:max(16px,env(safe-area-inset-top));z-index:2147481000;font:600 13px ${ye};color:#fff;
  background:rgba(0,0,0,.45);padding:6px 12px;border-radius:999px}
.tkl-hint kbd{font:800 11px Helvetica,Arial;background:#ffffff2e;border-radius:4px;padding:1px 6px;margin-right:6px}
/* phones: the LCD is a slim banner at the top (the cab view's sky), so the track ahead stays in view; the strip keeps
   its dots, the big name says which one. A tap on the banner does nothing (an answer card or a stray thumb must not
   skip the ride): the skip is the chip, in the thumb's corner. */
@media (max-width:820px),(max-height:560px){
  .tkl:not(.tkl-cab){top:max(6px,env(safe-area-inset-top));bottom:auto;width:min(500px,60vw);border-radius:8px;pointer-events:none;
    box-shadow:0 4px 16px rgba(0,0,0,.45),0 0 0 2px #2a2d31}
  .tkl:not(.tkl-cab) .tkl-top{min-height:0}
  .tkl:not(.tkl-cab) .tkl-badge{width:50px;gap:2px;border-right-width:2px}
  .tkl:not(.tkl-cab) .tkl-badge .b{width:30px;height:30px;border-radius:4px;padding-top:1px}
  .tkl:not(.tkl-cab) .tkl-badge .b i{font-size:8px;line-height:10px}
  .tkl:not(.tkl-cab) .tkl-badge .b u{width:24px;font-size:12px;line-height:15px;border-radius:2px}
  .tkl:not(.tkl-cab) .tkl-badge small{font-size:8px;letter-spacing:0}
  .tkl:not(.tkl-cab) .tkl-main{padding:4px 10px;min-width:0}
  .tkl:not(.tkl-cab) .tkl-k{font-size:10px;line-height:1.2}
  .tkl:not(.tkl-cab) .tkl-k em{font-size:9px;margin-left:5px}
  .tkl:not(.tkl-cab) .tkl-n{font-size:21px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .tkl:not(.tkl-cab) .tkl-r{font-size:10px;line-height:1.2}
  .tkl:not(.tkl-cab) .tkl-door{width:auto;max-width:92px;font-size:9px;line-height:1.25;padding:4px 8px;gap:1px}
  .tkl:not(.tkl-cab) .tkl-door b{font-size:13px}
  .tkl:not(.tkl-cab) .tkl-door small{font-size:8px!important;line-height:1.2}
  .tkl:not(.tkl-cab) .tkl-strip{padding:4px 10px 5px}
  .tkl:not(.tkl-cab) .tkl-s{font-size:0}
  .tkl:not(.tkl-cab) .tkl-s small{display:none}
  .tkl:not(.tkl-cab) .tkl-s i{width:8px;height:8px;border-width:2px;margin:0}
  .tkl:not(.tkl-cab) .tkl-s:before{top:4px;height:4px}
  .tkl-hint{top:auto;bottom:max(14px,env(safe-area-inset-bottom));right:max(14px,env(safe-area-inset-right));padding:9px 16px;font-size:14px;
    background:rgba(0,0,0,.55);box-shadow:0 0 0 1px #ffffff33;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
}
@media (max-width:820px) and (orientation:portrait){
  .tkl:not(.tkl-cab){width:calc(100vw - 16px)}
}
/* Metro card */
.tkm{position:fixed;inset:0;z-index:2147481500;display:flex;align-items:center;justify-content:center;background:#05070a;animation:tkp-in .35s ease-out;font-family:${e};color:#fff}
.tkm.out{animation:tkp-out .35s ease-in forwards}
.tkm-card{width:min(760px,92vw);border-radius:12px;overflow:hidden;background:#101317;box-shadow:0 0 0 3px #22262b}
.tkm-top{display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:4px solid var(--c)}
.tkm-sym{width:52px;height:52px;border-radius:50%;background:var(--c);display:flex;align-items:center;justify-content:center;flex:none}
.tkm-sym i{width:38px;height:38px;border-radius:50%;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;font:900 20px Helvetica,Arial;font-style:normal}
.tkm-k{font-size:14px;color:#ffd400;font-weight:700}
.tkm-n{font-size:34px;font-weight:800}
.tkm-r{font:700 15px Helvetica,Arial;color:#cfd3d8}
html[lang=ja] .tkl-k em,html[lang=ja] .tkl-r,html[lang=ja] .tkl-door small,html[lang=ja] .tkm-k span,html[lang=ja] .tkm-r{display:none}
.tkm-strip{display:flex;padding:14px 16px;background:#eef0f2;color:#111}
.tkm-ui{padding:8px 16px;font:600 12px ${ye};color:#aab;background:#0b0d10;text-align:right}
`),
    document.head.appendChild(t));
}
function _X(e, t, n) {
  let r = document.createElement(e);
  return (t && (r.className = t), n !== void 0 && (r.innerHTML = n), r);
}
function vX(e, t, n) {
  let r = document.createElementNS(pje, e);
  for (let e in t) r.setAttribute(e, String(t[e]));
  return (n?.appendChild(r), r);
}
