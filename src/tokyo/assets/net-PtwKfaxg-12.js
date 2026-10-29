// tokyo/assets/net-PtwKfaxg 12 — math
// Lines 6103-6207 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var or = 90,
  sr = 400,
  cr = `
.net-say { position: absolute; left: 0; top: 0; display: none; max-width: min(240px, 62vw); padding: 0.45em 0.8em;
  border-radius: 12px; background: #fffdf7; color: #2a1a12; border: 2px solid #3a2a20; box-shadow: 0 3px 0 rgba(0,0,0,0.25);
  font: 700 14px/1.35 var(--tr-font, system-ui); white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-word;
  text-align: center; pointer-events: none; will-change: transform, opacity; z-index: 6; }
.net-say::after { content: ''; position: absolute; left: 50%; bottom: -9px; transform: translateX(-50%);
  border: 8px solid transparent; border-top-color: #3a2a20; border-bottom: 0; }
.net-say::before { content: ''; position: absolute; left: 50%; bottom: -5px; transform: translateX(-50%); z-index: 1;
  border: 6px solid transparent; border-top-color: #fffdf7; border-bottom: 0; }
@media (max-width: 480px) { .net-say { font-size: 13px; } }
`,
  lr = !1,
  ur = class e {
    el;
    until = 0;
    shown = !1;
    x = -1e9;
    y = -1e9;
    opacity = 1;
    static _v = new l();
    constructor(e) {
      if (!lr) {
        lr = !0;
        let e = document.createElement(`style`);
        ((e.id = `net-say-style`),
          (e.textContent = cr),
          document.head.appendChild(e));
      }
      ((this.el = document.createElement(`div`)),
        (this.el.className = `net-say`),
        this.el.setAttribute(`aria-hidden`, `true`),
        e.appendChild(this.el));
    }
    get active() {
      return performance.now() < this.until;
    }
    get needsFrame() {
      return this.shown || this.active;
    }
    show(e) {
      ((this.el.textContent = e),
        (this.until = performance.now() + rr),
        (this.x = this.y = -1e9));
    }
    clear() {
      ((this.until = 0), this.hide());
    }
    place(t, n, r, i, a, o, s) {
      let c = performance.now();
      if (c >= this.until) return (this.hide(), !1);
      let l = e._v.set(i, a, o),
        u = l.distanceTo(t.position);
      l.applyMatrix4(t.matrixWorldInverse);
      let d = l.z < -0.2;
      if (
        (l.applyMatrix4(t.projectionMatrix),
        !(d && u < or && Math.abs(l.x) < 1.1 && Math.abs(l.y) < 1.1))
      )
        return (this.hide(), !1);
      this.shown || ((this.shown = !0), (this.el.style.display = `block`));
      let f = Math.min(1, (this.until - c) / sr);
      Math.abs(f - this.opacity) > 0.02 &&
        ((this.opacity = f), (this.el.style.opacity = f.toFixed(2)));
      let p = Math.round((l.x * 0.5 + 0.5) * n),
        m = Math.round((-l.y * 0.5 + 0.5) * r) - (s ? 30 : 8);
      return (
        Math.abs(p - this.x) + Math.abs(m - this.y) >= 1 &&
          ((this.x = p),
          (this.y = m),
          (this.el.style.transform = `translate(${p}px, ${m}px) translate(-50%, -100%)`)),
        !0
      );
    }
    hide() {
      this.shown && ((this.shown = !1), (this.el.style.display = `none`));
    }
    dispose() {
      this.el.remove();
    }
  },
  dr = {
    uCharFill: { value: new u(1, 1, 1, 0) },
    uCharLm: { value: 1 },
    uHeroWet: v.uWet,
  },
  fr = Object.fromEntries(Te.map((e, t) => [e, t])),
  pr = 0,
  mr = 1,
  hr = 2,
  gr = 250,
  _r = 2.4;
function vr(e, t, n, r) {
  let i = ge[e]?.seat ?? (t ? [0, 0.78, 0.18] : [-0.36, 0.42, 0.05]);
  if (((r.x = i[0]), (r.y = i[1] + 0.06), (r.z = i[2]), t))
    ((r.z += n > 0 || e === `scooter` ? 0.05 : 0.02),
      n > 0 && ((r.z += 0.37), (r.y += 0.06)));
  else {
    let e = Math.abs(i[0]) || 0.36;
    ((r.x = n === 0 ? i[0] : n === 1 ? (i[0] < 0 ? e : -e) : n === 2 ? -e : e),
      n >= 2 && (r.z += 0.85));
  }
  return r;
}
