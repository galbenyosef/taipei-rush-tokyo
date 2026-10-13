// tokyo__assets__world-Bo9wkXrT 70 — math
// Lines 22520-22589 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
var rh = class {
  mesh;
  variants = [];
  strokes = [];
  t = 99;
  flash = 0;
  dir = new U(1, 0.3, 0).normalize();
  pendingThunder = [];
  mat;
  constructor() {
    for (let e = 0; e < 4; e++) this.variants.push(nh(1234 + e * 7777));
    ((this.mat = new u({
      color: new W(6, 6.5, 9),
      transparent: !0,
      blending: 2,
      depthWrite: !1,
      side: 2,
      fog: !1,
    })),
      (this.mat.name = `env-lightning`),
      (this.mat.forceSinglePass = !0),
      (this.mesh = new P(this.variants[0], this.mat)),
      (this.mesh.visible = !1),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 2e4),
      (this.mesh.name = `env-lightning`));
  }
  strike(e, t, n, r, i = !0) {
    let a = n() * Math.PI * 2,
      o = 650 + n() * 2300,
      s = e.x + Math.cos(a) * o,
      c = e.z + Math.sin(a) * o,
      l = Math.max(-1, t(s, c)),
      u = 420 + n() * 260;
    (this.dir.set(s - e.x, u * 0.6, c - e.z).normalize(),
      (this.mesh.geometry =
        this.variants[Math.floor(n() * this.variants.length)]),
      this.mesh.position.set(s, l, c),
      this.mesh.scale.set(u * 0.9, u - l + 20, 1),
      this.mesh.rotation.set(0, Math.atan2(e.x - s, e.z - c), 0),
      (this.mesh.visible = !1),
      (this.withBolt = i),
      (this.t = 0),
      (this.strokes.length = 0));
    let d = 2 + Math.floor(n() * 3),
      f = 0;
    for (let e = 0; e < d; e++)
      (this.strokes.push(f), (f += 0.05 + n() * 0.18));
    let p = o / 343 + n() * 0.4,
      m = Math.max(0.25, Math.min(1, 1.35 - o / 2600));
    return (this.pendingThunder.push({ at: r + p, volume: m }), o);
  }
  withBolt = !0;
  update(e, t, n) {
    this.t += e;
    let r = 0;
    for (let e of this.strokes) {
      let t = this.t - e;
      t >= 0 && (r += Math.exp(-t * 22) * (t < 0.03 ? t / 0.03 : 1));
    }
    ((this.flash = Math.min(1.6, r)),
      (this.mesh.visible = this.withBolt && this.flash > 0.12),
      (this.mat.opacity = Math.min(1, this.flash)));
    for (let e = this.pendingThunder.length - 1; e >= 0; e--) {
      let r = this.pendingThunder[e];
      t >= r.at && (n(r.volume), this.pendingThunder.splice(e, 1));
    }
    return this.flash > 0.001;
  }
};
