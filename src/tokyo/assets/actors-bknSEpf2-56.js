// tokyo/assets/actors-bknSEpf2 56 — cur
// Lines 20903-20965 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Jh = class {
  ctx;
  holds = new Map();
  prev = new Set();
  cur = new Set();
  moveX = 0;
  moveY = 0;
  dbgMove = { x: 0, y: 0, t: 0 };
  constructor(e) {
    this.ctx = e;
  }
  hold(e, t) {
    this.holds.set(e, Math.max(this.holds.get(e) ?? 0, t));
  }
  move(e, t, n) {
    ((this.dbgMove.x = e), (this.dbgMove.y = t), (this.dbgMove.t = n));
  }
  update(e, t) {
    let n = this.prev;
    if (
      ((this.prev = this.cur),
      (this.cur = n),
      this.cur.clear(),
      this.holds.size)
    )
      for (let [t, n] of this.holds) {
        n > 0 && this.cur.add(t);
        let r = n - e;
        r <= -0.001 ? this.holds.delete(t) : this.holds.set(t, r);
      }
    let r = this.ctx.input;
    ((this.moveX = t ? r.axis(`moveX`) : 0),
      (this.moveY = t ? r.axis(`moveY`) : 0),
      this.dbgMove.t > 0 &&
        ((this.dbgMove.t -= e),
        (this.moveX = this.dbgMove.x),
        (this.moveY = this.dbgMove.y)),
      t || this.cur.clear(),
      (this.enabled = t));
  }
  enabled = !0;
  camDown(e) {
    return this.ctx.input.down(e) || this.cur.has(e);
  }
  camPressed(e) {
    return this.ctx.input.pressed(e) || (this.cur.has(e) && !this.prev.has(e));
  }
  down(e) {
    return this.enabled && (this.ctx.input.down(e) || this.cur.has(e));
  }
  pressed(e) {
    return (
      this.enabled &&
      (this.ctx.input.pressed(e) || (this.cur.has(e) && !this.prev.has(e)))
    );
  }
};
function Yh(e) {
  let t = e?.split(`,`)[3];
  if (t === void 0 || t.trim() === ``) return;
  let n = Number(t);
  return Number.isFinite(n) ? n : void 0;
}
