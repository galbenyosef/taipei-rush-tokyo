// tokyo/assets/world-CVm1JHks 71 — math
// Lines 22999-23184 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var yh = class {
  active = !1;
  t = 0;
  duration = 1;
  pos = new U();
  start = new U();
  end = new U();
  heading = Math.PI / 2;
  pitch = 0.05;
  roll = 0;
  cooldown = 40;
  landing = !1;
  ld = {
    x0: -3600,
    xTd: 150,
    xEnd: 1080,
    h0: 320,
    z: -1013,
    y: 2.95,
    tTd: 1,
    tStop: 1,
  };
  begin(e) {
    this.landing = !1;
    let t = -640 + (e() - 0.5) * 60;
    (this.start.set(-3600, 300, t - 40), this.end.set(1500, 20, t + 10));
    let n = this.start.distanceTo(this.end);
    ((this.duration = n / 78), (this.t = 0), (this.active = !0));
  }
  update(e, t) {
    if (!this.active)
      return (
        (this.cooldown -= e),
        this.cooldown <= 0 &&
          (this.begin(t), (this.cooldown = 130 + t() * 140)),
        !1
      );
    if (this.landing) return this.updateLanding(e);
    if (((this.t += e / this.duration), this.t >= 1))
      return ((this.active = !1), !1);
    let n = this.t;
    (this.pos.lerpVectors(this.start, this.end, n),
      (this.pos.y =
        this.start.y + (this.end.y - this.start.y) * (n * 0.92 + 0.08 * n * n)),
      (this.pos.z += Math.sin(n * Math.PI * 2) * 45 * (1 - n)));
    let r = Math.cos(n * Math.PI * 2) * 45 * Math.PI * 2 * (1 - n),
      i = this.end.x - this.start.x;
    return (
      (this.heading = Math.atan2(i, -r)),
      (this.roll = -Math.sin(n * Math.PI * 2) * 0.18 * (1 - n)),
      (this.pitch = 0.05 + (n > 0.9 ? (n - 0.9) * 0.6 : 0)),
      !0
    );
  }
  updateLanding(e) {
    let t = this.ld;
    this.t += e;
    let n = this.t;
    if (n >= this.duration)
      return ((this.active = !1), (this.landing = !1), !1);
    if (n < t.tTd) {
      let e = n / t.tTd;
      this.pos.x = t.x0 + (t.xTd - t.x0) * e;
      let r = Math.max(0, (n - (t.tTd - 6)) / 6),
        i = (t.h0 - t.y) * (1 - e) * (1 - 0.4 * r * r) + t.y;
      ((this.pos.y = i),
        (this.pos.z = t.z + Math.sin(e * Math.PI) * 30 * (1 - e)),
        (this.pitch = 0.04 + 0.06 * r),
        (this.roll = -Math.sin(e * Math.PI * 2) * 0.06 * (1 - e)));
    } else {
      let e = n - t.tTd,
        r = Math.min(e, 16),
        i = t.xTd + 76 * r - 2 * r * r;
      (e > 16 && (i += 11 * (e - 16)),
        this.pos.set(Math.min(i, t.xEnd), t.y, t.z),
        (this.pitch = Math.max(0, 0.08 - e * 0.03)),
        (this.roll = 0));
    }
    return ((this.heading = Math.PI / 2), !0);
  }
};
function bh() {
  let e = new Nm();
  (e.setColor(0.93, 0.93, 0.9),
    e.boxMinMax(-2.6, -0.6, -8, 2.6, 1.1, 9),
    e.tri(-2.6, 1.1, -8, 2.6, 1.1, -8, 0, 1.1, -12),
    e.quad(0, -0.6, -12, -2.6, -0.6, -8, -2.6, 1.1, -8, 0, 1.1, -12),
    e.quad(2.6, -0.6, -8, 0, -0.6, -12, 0, 1.1, -12, 2.6, 1.1, -8),
    e.setColor(0.1, 0.33, 0.62),
    e.boxMinMax(-2.62, 0.1, -8, 2.62, 0.55, 9, 51),
    e.setColor(0.95, 0.95, 0.92).setEmit(0, 0, 0),
    e.boxMinMax(-2.1, 1.1, -5, 2.1, 3.4, 6.5),
    e.setColor(1, 0.82, 0.55).setEmit(1.6, 0),
    e.boxMinMax(-2.12, 2, -4.6, 2.12, 2.9, 6.1, 51),
    e.noEmit(),
    e.setColor(0.1, 0.33, 0.62),
    e.boxMinMax(-2.4, 3.4, -5.4, 2.4, 3.65, 6.9),
    e.setColor(0.85, 0.85, 0.82),
    e.boxMinMax(-2.3, 3.65, 6.5, 2.3, 4.5, 6.6),
    e.boxMinMax(-0.1, 3.65, -3.2, 0.1, 6.5, -3),
    e.setColor(1, 0.1, 0.08).setEmit(8, 5),
    e.boxMinMax(-2.5, 3.5, -5.3, -2.2, 3.8, -5),
    e.setColor(0.1, 1, 0.3).setEmit(8, 5),
    e.boxMinMax(2.2, 3.5, -5.3, 2.5, 3.8, -5),
    e.setColor(1, 1, 0.95).setEmit(9, 0),
    e.boxMinMax(-0.18, 6.5, -3.28, 0.18, 6.85, -2.92),
    e.noEmit(),
    e.setColor(0.8, 0.83, 0.84));
  let t = -0.55;
  for (let n of [-1, 1])
    (e.quad(n * 2.4, t, 8, n * 2.9, t, 8, n * 11, t, 42, n * 9, t, 42),
      e.quad(n * 2.9, t, 8, n * 2.4, t, 8, n * 9, t, 42, n * 11, t, 42));
  return (
    e.quad(-1.8, t, 9, 1.8, t, 9, 1.2, t, 26, -1.2, t, 26),
    e.doubleSided().build()
  );
}
var xh = class {
    path;
    length;
    speed;
    pos = new U();
    heading = 0;
    s = 0.3;
    dir = 1;
    constructor(e, t, n = 5.5) {
      ((this.path = e), (this.length = t), (this.speed = n));
    }
    update(e) {
      ((this.s += (this.dir * e * this.speed) / this.length),
        this.s > 1
          ? ((this.s = 1), (this.dir = -1))
          : this.s < 0 && ((this.s = 0), (this.dir = 1)),
        this.path(this.s, this.pos));
      let t = this.pos.x,
        n = this.pos.z,
        r = Math.min(1, Math.max(0, this.s + this.dir * 0.002));
      this.path(r, this.pos);
      let i = this.pos.x - t,
        a = this.pos.z - n;
      (i * i + a * a > 1e-8 && (this.heading = Math.atan2(i, -a)),
        this.path(this.s, this.pos));
    }
  },
  Sh = 9;
function Ch() {
  let e = [],
    t = [],
    n = (n, r, i, a) => {
      (e.push(...n, ...r, ...i), t.push(...a));
    },
    r = [0, 0.02, -0.55],
    i = [0, 0, 0.45],
    a = [0, 0.09, 0],
    o = [0, -0.07, 0],
    s = [-0.08, 0, 0],
    c = [0.08, 0, 0];
  for (let [e, t] of [
    [a, s],
    [s, o],
    [o, c],
    [c, a],
  ])
    (n(r, e, t, [0, 0, 0]), n(i, t, e, [0, 0, 0]));
  (n([0, 0.02, -0.55], [0.03, 0.14, -0.72], [-0.03, 0.14, -0.72], [0, 0, 0]),
    n([0, 0.14, -0.72], [0.01, 0.12, -0.9], [-0.01, 0.12, -0.9], [0, 0, 0]));
  for (let e of [-1, 1]) {
    let t = [e * 0.06, 0.02, -0.18],
      r = [e * 0.06, 0.02, 0.2],
      i = [e * 0.5, 0.03, -0.12],
      a = [e * 0.5, 0.03, 0.22],
      o = [e * 0.95, 0, 0.12],
      s = (e) => Math.abs(e[0]) / 0.95,
      c = (e, t, r) => {
        (n(e, t, r, [s(e), s(t), s(r)]), n(e, r, t, [s(e), s(r), s(t)]));
      };
    (c(t, i, r), c(r, i, a), c(i, o, a));
  }
  let l = new z();
  return (
    l.setAttribute(`position`, new M(e, 3)),
    l.setAttribute(`aWing`, new M(t, 1)),
    l.computeVertexNormals(),
    l
  );
}
