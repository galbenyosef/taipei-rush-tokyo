// tokyo__assets__region-tokyo-BcM3fReU 286 — caught
// Lines 113727-113772 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function D5(e) {
  let t = e.ctx,
    n = null,
    r = null;
  typeof document < `u` &&
    ((n = document.createElement(`div`)),
    (n.style.cssText = `position:fixed;left:50%;bottom:26vh;transform:translateX(-50%);z-index:20;width:min(380px,90vw);padding:10px 14px;border-radius:12px;background:rgba(6,8,12,.8);color:#fff;font:700 14px "PingFang TC","Hiragino Sans",system-ui,sans-serif;text-align:center;pointer-events:none`),
    (n.innerHTML = `<div></div><div style="height:6px;border-radius:3px;background:rgba(255,255,255,.15);margin-top:7px;overflow:hidden"><i style="display:block;height:100%;width:0;background:#ff4d5e"></i></div>`),
    (n.firstElementChild.textContent =
      t.state.lang === `en`
        ? `Hold your breath — don’t move a thing`
        : t.state.lang === `ja`
          ? `息を止めて——ピクリとも動くな`
          : `屏住呼吸——一動也不要動`),
    (r = n.querySelector(`i`)),
    document.body.appendChild(n));
  let i = t.input.keys,
    a = [
      `KeyW`,
      `KeyA`,
      `KeyS`,
      `KeyD`,
      `ArrowUp`,
      `ArrowDown`,
      `ArrowLeft`,
      `ArrowRight`,
      `Space`,
      `KeyE`,
    ],
    o = 0,
    s = {
      caught: !1,
      tick(t, n) {
        let c = !1;
        if (i) for (let e of a) i.has(e) && (c = !0);
        ((o = Math.max(0, o + (c ? (n ? 0.9 : 0.35) : -0.12) * t)),
          r && (r.style.width = `${Math.min(1, o) * 100}%`),
          o >= 1 && (s.caught = !0),
          (e.waitFor = { kind: `hold`, x: e.px, z: e.pz }));
      },
      end() {
        (n?.remove(), (n = null), (e.waitFor = null));
      },
    };
  return (e.onCleanup(() => s.end()), s);
}
