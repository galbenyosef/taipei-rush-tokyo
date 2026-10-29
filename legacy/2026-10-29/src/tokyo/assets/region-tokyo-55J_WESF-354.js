// tokyo/assets/region-tokyo-55J_WESF 354 — floor
// Lines 128557-128654 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function FX(e) {
  let t = ((Math.floor(e) % 86400) + 86400) % 86400,
    n = Math.floor(t / 3600),
    r = Math.floor((t % 3600) / 60),
    i = t % 60;
  return `${String(n).padStart(2, `0`)}:${String(r).padStart(2, `0`)}:${String(i).padStart(2, `0`)}`;
}
var IX = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8],
  LX = (e) => (e === -8 ? `非常` : e > 0 ? `P${e}` : e < 0 ? `B${-e}` : `N`),
  Aje = LX,
  RX = !1;
function jje(e) {
  if (RX) return;
  RX = !0;
  let t = document.createElement(`style`);
  ((t.id = `tokyo-cab-css`),
    (t.textContent = `
.tkd{position:fixed;inset:0;z-index:2147481100;pointer-events:none;font-family:${e};color:#fff;-webkit-user-select:none;user-select:none;--s:1}
.tkd *{box-sizing:border-box}
.tkd-dial{position:absolute;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));width:calc(230px*var(--s));height:calc(250px*var(--s));
  background:radial-gradient(circle at 50% 46%,#1b1f24 0,#0b0d10 70%);border-radius:18px;box-shadow:0 6px 30px rgba(0,0,0,.55),inset 0 0 0 2px #2b3036}
.tkd-dial svg{position:absolute;left:0;top:0;width:100%;height:calc(230px*var(--s))}
.tkd-lamps{position:absolute;left:0;right:0;bottom:calc(8px*var(--s));display:flex;justify-content:center;gap:calc(5px*var(--s))}
.tkd-lamp{font-size:calc(11px*var(--s));font-weight:800;padding:calc(2px*var(--s)) calc(6px*var(--s));border-radius:4px;background:#22262b;color:#555b62;letter-spacing:.04em}
.tkd-lamp.on.pilot{background:#ff9d1f;color:#1a1000;box-shadow:0 0 10px #ff9d1f}
.tkd-lamp.on.atc{background:#e8382c;color:#fff;box-shadow:0 0 10px #e8382c}
.tkd-lamp.on.eb{background:#ff2020;color:#fff;box-shadow:0 0 12px #ff2020}
.tkd-lamp.on.door{background:#44c25a;color:#06200b;box-shadow:0 0 10px #44c25a}
.tkd-handle{position:absolute;right:max(10px,env(safe-area-inset-right));top:50%;transform:translateY(-50%);width:calc(74px*var(--s));
  display:flex;flex-direction:column;gap:2px;padding:6px;border-radius:14px;background:rgba(10,12,15,.78);box-shadow:0 6px 30px rgba(0,0,0,.5),inset 0 0 0 2px #2b3036;
  pointer-events:auto;touch-action:none}
.tkd-handle div{height:calc(26px*var(--s));border-radius:5px;display:flex;align-items:center;justify-content:center;font:800 calc(13px*var(--s)) Helvetica,Arial;color:#6d747c;background:#16191d}
.tkd-handle div.p.on{background:#2f7df6;color:#fff;box-shadow:0 0 12px #2f7df6}
.tkd-handle div.n.on{background:#e9ecef;color:#111}
.tkd-handle div.b.on{background:#ff9d1f;color:#1a1000;box-shadow:0 0 12px #ff9d1f}
.tkd-handle div.e{color:#c95050}
.tkd-handle div.e.on{background:#ff2020;color:#fff;box-shadow:0 0 14px #ff2020}
.tkd-handle small{font:600 calc(9px*var(--s)) Helvetica,Arial;color:#8a9097;text-align:center;margin-top:2px}
.tkd-staff{position:absolute;left:max(14px,env(safe-area-inset-left));top:max(14px,env(safe-area-inset-top));width:calc(250px*var(--s));
  background:#f4f1e6;color:#16181c;border-radius:8px;box-shadow:0 6px 24px rgba(0,0,0,.45);overflow:hidden;font-size:calc(13px*var(--s))}
.tkd-staff header{display:flex;align-items:center;justify-content:space-between;gap:6px;background:#2e3238;color:#fff;padding:calc(5px*var(--s)) calc(10px*var(--s))}
.tkd-staff header b{font-size:calc(11px*var(--s));line-height:1.25;font-weight:700}
.tkd-staff header span{font:800 calc(20px*var(--s)) 'SF Mono',Menlo,Consolas,monospace;color:#ffd84a;letter-spacing:.02em}
.tkd-staff table{width:100%;border-collapse:collapse}
.tkd-staff td{padding:calc(2px*var(--s)) calc(8px*var(--s));border-top:1px solid #d7d2c2;white-space:nowrap}
.tkd-staff td.t{font:700 calc(12px*var(--s)) 'SF Mono',Menlo,Consolas,monospace;text-align:right}
.tkd-staff td.t sup{font-size:.85em;vertical-align:baseline}
.tkd-staff td.a{font:700 calc(11px*var(--s)) 'SF Mono',Menlo,Consolas,monospace;text-align:right;color:#888}
.tkd-staff td.a.late{color:#c0392b}.tkd-staff td.a.ok{color:#1e8a3a}.tkd-staff td.a.early{color:#b07800}
.tkd-staff tr.now{background:#ffe38a}
.tkd-staff tr.past{color:#9a968a}
.tkd-staff footer{padding:calc(3px*var(--s)) calc(8px*var(--s));font-size:calc(10px*var(--s));color:#666;background:#e9e4d4}
.tkd-stop{position:absolute;left:50%;bottom:max(16px,env(safe-area-inset-bottom));transform:translateX(-50%);min-width:calc(300px*var(--s));
  background:rgba(10,12,15,.8);border-radius:12px;padding:calc(8px*var(--s)) calc(16px*var(--s));text-align:center;box-shadow:0 6px 30px rgba(0,0,0,.5);transition:opacity .3s}
.tkd-stop.hide{opacity:0}
.tkd-stop .k{font-size:calc(12px*var(--s));color:#cfd3d8}
.tkd-stop .k em{font:600 calc(10px*var(--s)) Helvetica,Arial;font-style:normal;color:#8a9097;margin-left:6px}
.tkd-stop .n{font:800 calc(34px*var(--s)) 'SF Mono',Menlo,Consolas,monospace;line-height:1.1}
.tkd-stop .n.over{color:#ff6b5b}.tkd-stop .n.close{color:#ffd84a}.tkd-stop .n.pitta{color:#5cf07a}
.tkd-ruler{position:relative;height:calc(14px*var(--s));margin-top:4px;background:linear-gradient(90deg,#2a2f35,#2a2f35);border-radius:3px}
.tkd-ruler i{position:absolute;top:0;bottom:0;width:2px;background:#ffd84a;left:83.33%}
.tkd-ruler u{position:absolute;top:-3px;bottom:-3px;width:6px;margin-left:-3px;background:#fff;border-radius:2px;box-shadow:0 0 6px #fff}
.tkd-coach{position:absolute;left:50%;bottom:calc(120px*var(--s) + max(16px,env(safe-area-inset-bottom)));transform:translateX(-50%);max-width:min(560px,70vw);
  background:rgba(20,60,110,.85);border-radius:999px;padding:6px 16px;font-size:calc(14px*var(--s));font-weight:700;text-align:center;transition:opacity .3s}
.tkd-coach.hide,.tkd-msg.hide,.tkd-call.hide{opacity:0}
.tkd-msg{position:absolute;left:50%;top:calc(118px*var(--s));transform:translateX(-50%);max-width:min(620px,80vw);background:rgba(0,0,0,.66);border-radius:10px;
  padding:6px 16px;font-size:calc(15px*var(--s));font-weight:700;text-align:center;transition:opacity .3s}
.tkd-call{position:absolute;left:50%;top:calc(168px*var(--s));transform:translateX(-50%);background:rgba(255,216,74,.94);color:#1b1500;border-radius:12px;padding:8px 18px;
  font-size:calc(22px*var(--s));font-weight:900;text-align:center;transition:opacity .25s;box-shadow:0 8px 30px rgba(0,0,0,.45)}
.tkd-call small{display:block;font:700 calc(12px*var(--s)) Helvetica,Arial;color:#4a3e00}
.tkd-call.done{background:#5cf07a}
.tkd-hint{position:absolute;right:max(14px,env(safe-area-inset-right));top:max(14px,env(safe-area-inset-top));max-width:46vw;font-size:calc(12px*var(--s));font-weight:600;
  background:rgba(0,0,0,.5);padding:6px 12px;border-radius:12px;line-height:1.55;text-align:right}
.tkd-hint kbd{font:800 calc(10px*var(--s)) Helvetica,Arial;background:#ffffff2e;border-radius:4px;padding:1px 5px;margin:0 2px}
.tkd-btns{position:absolute;right:calc(96px*var(--s) + max(10px,env(safe-area-inset-right)));bottom:max(16px,env(safe-area-inset-bottom));display:flex;gap:8px;pointer-events:auto}
.tkd-btns button{width:calc(54px*var(--s));height:calc(54px*var(--s));border-radius:50%;border:0;background:rgba(10,12,15,.8);color:#fff;font:800 calc(20px*var(--s)) Helvetica,Arial;
  box-shadow:inset 0 0 0 2px #3a4047;touch-action:manipulation}
.tkd-btns button.arm{background:#a82a20}
.tkd-res{position:fixed;inset:0;z-index:2147481200;display:flex;align-items:center;justify-content:center;background:rgba(3,5,8,.72);pointer-events:auto;font-family:${e};color:#16181c;animation:tkp-in .3s ease-out}
.tkd-res .p{width:min(720px,94vw);max-height:92vh;overflow:auto;background:#f6f6f3;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.tkd-res header{display:flex;align-items:center;gap:16px;padding:14px 20px;background:#2e3238;color:#fff}
.tkd-res header .g{font:900 64px Helvetica,Arial;line-height:1;color:#ffd84a;min-width:64px;text-align:center}
.tkd-res header .g.S{color:#ffd84a;text-shadow:0 0 18px #ffb300}.tkd-res header .g.A{color:#7fe08a}.tkd-res header .g.B{color:#8cc8ff}.tkd-res header .g.C{color:#c9c9c9}
.tkd-res header h2{margin:0;font-size:22px}.tkd-res header p{margin:2px 0 0;font:600 13px Helvetica,Arial;color:#c9ced4}
.tkd-res table{width:100%;border-collapse:collapse;font-size:14px}
.tkd-res th{font-size:11px;color:#666;font-weight:700;padding:6px 8px;text-align:right;background:#ecebe5}
.tkd-res th:first-child,.tkd-res td:first-child{text-align:left}
.tkd-res td{padding:6px 8px;text-align:right;border-top:1px solid #e0ddd2;font-variant-numeric:tabular-nums}
.tkd-res td.pitta{color:#1e8a3a;font-weight:800}
.tkd-res footer{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;background:#ecebe5;font-weight:700}
.tkd-res footer b{font-size:20px}
.tkd-res footer span{font-size:13px;color:#555}
@media (max-height:520px){.tkd{--s:.66}.tkd-hint{display:none}.tkd-staff tr{display:none}.tkd-staff tr.now,.tkd-staff tr.now+tr{display:table-row}.tkd-staff footer{display:none}
  .tkd-handle div{height:calc(24px*var(--s))}.tkd-handle small{display:none}}
@media (max-width:700px){.tkd{--s:.8}.tkd-hint{display:none}}
`),
    document.head.appendChild(t));
}
