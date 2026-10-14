// tokyo/assets/world-Bo9wkXrT 15 — color
// Lines 4249-4415 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Dn = class {
    spots = [];
    active = null;
    timer = 0;
    blocked = !1;
    add(e) {
      return (
        this.spots.push(e),
        () => {
          let t = this.spots.indexOf(e);
          (t >= 0 && this.spots.splice(t, 1),
            this.active === e && (this.active = null));
        }
      );
    }
    clear() {
      ((this.spots.length = 0), (this.active = null));
    }
    update(e, t) {
      if (this.blocked || !this.spots.length) {
        this.active = null;
        return;
      }
      if (((this.timer -= t), this.timer <= 0)) {
        ((this.timer = 0.1), (this.active = null));
        let t = `foot`;
        try {
          t = e.player.mode;
        } catch {}
        if (t !== `foot`) return;
        let n = e.player.position,
          r = 1 / 0;
        for (let e of this.spots) {
          let t = Math.hypot(n.x - e.x, n.z - e.z);
          t > e.r ||
            Math.abs(n.y - e.y) > 2.5 ||
            t >= r ||
            ((r = t), (this.active = e));
        }
      }
      let n = this.active;
      if (!n) return;
      let r = n.label();
      if (r) {
        try {
          e.ui.prompt(r);
        } catch {}
        e.input.pressed(`interact`) && n.act();
      }
    }
  },
  On = class {
    ctx;
    useHemi;
    color = new W(1, 1, 1);
    intensity = 0;
    wantC = new W(1, 1, 1);
    wantK = 0;
    hemi = void 0;
    setK = -1;
    baseK = 0;
    setC = new W();
    baseC = new W();
    setG = new W();
    baseG = new W();
    constructor(e, t) {
      ((this.ctx = e), (this.useHemi = t));
    }
    want(e, t) {
      t <= this.wantK || ((this.wantK = t), this.wantC.setHex(e));
    }
    update(e) {
      let t = Math.min(1, e * 3.5);
      ((this.intensity += (this.wantK - this.intensity) * t),
        this.wantK > 0 && this.color.lerp(this.wantC, t),
        this.intensity < 0.004 && this.wantK === 0 && (this.intensity = 0),
        (this.wantK = 0));
      let n = K.uCharFill?.value;
      if (
        (n?.isVector4
          ? n.set(this.color.r, this.color.g, this.color.b, this.intensity)
          : n?.isColor &&
            n.set(
              this.color.r * this.intensity,
              this.color.g * this.intensity,
              this.color.b * this.intensity,
            ),
        !this.useHemi)
      )
        return;
      if (this.hemi === void 0) {
        this.hemi = null;
        for (let e of this.ctx.scene.children)
          e.isHemisphereLight && (this.hemi = e);
      }
      let r = this.hemi;
      if (!r) return;
      (r.intensity !== this.setK && (this.baseK = r.intensity),
        r.color.equals(this.setC) || this.baseC.copy(r.color),
        r.groundColor.equals(this.setG) || this.baseG.copy(r.groundColor));
      let i = this.intensity;
      if (i <= 0) {
        this.setK >= 0 &&
          ((r.intensity = this.baseK),
          r.color.copy(this.baseC),
          r.groundColor.copy(this.baseG),
          (this.setK = -1));
        return;
      }
      let a = Math.min(1, i);
      ((r.intensity =
        this.baseK + (Math.max(this.baseK, 1.6 * i) - this.baseK) * a),
        r.color.copy(this.baseC).lerp(this.color, 0.8 * a),
        r.groundColor.copy(this.baseG).lerp(this.color, 0.55 * a),
        (this.setK = r.intensity),
        this.setC.copy(r.color),
        this.setG.copy(r.groundColor));
    }
  },
  kn = class {
    ctx;
    saved = new Map();
    on = !1;
    constructor(e) {
      this.ctx = e;
    }
    set(e) {
      if (e === this.on) return;
      this.on = e;
      let t = null;
      try {
        t = this.ctx.player.object;
      } catch {}
      if (t) {
        if (e)
          (this.saved.clear(),
            t.traverse((e) => {
              e.isGroup &&
                (this.saved.set(e, e.renderOrder), (e.renderOrder = -29));
            }));
        else {
          for (let [e, t] of this.saved) e.renderOrder = t;
          this.saved.clear();
        }
      }
    }
  },
  An = [];
function jn(e) {
  An.push(e);
  let t = !0;
  return () => {
    if (!t) return;
    t = !1;
    let n = An.indexOf(e);
    n >= 0 && An.splice(n, 1);
  };
}
function Mn(e, t, n) {
  for (let r = 0; r < An.length; r++) {
    let i = An[r];
    try {
      if (i.contains(e, t, n)) return i;
    } catch {}
  }
  return null;
}
