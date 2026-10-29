// tokyo/assets/net-PtwKfaxg 11 — math
// Lines 5781-6102 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function Un(e, t, n) {
  let r = (t - e) % Rn;
  r > Math.PI ? (r -= Rn) : r < -Math.PI && (r += Rn);
  let i = e + r * n;
  return ((i %= Rn), i < 0 ? i + Rn : i);
}
var Wn = class {
    ring;
    n = 0;
    head = 0;
    lastSeq = -1;
    lastT = 0;
    st = 0;
    offset = NaN;
    renderOffset = NaN;
    lastSample = NaN;
    accepted = 0;
    dropped = 0;
    interval = NaN;
    delay;
    delayMs;
    maxExtrapMs;
    snapM;
    size;
    constructor(e = 100, t = 200, n = 30, r = 16) {
      ((this.delayMs = e),
        (this.delay = e),
        (this.maxExtrapMs = t),
        (this.snapM = n),
        (this.size = r),
        (this.ring = Array.from({ length: r }, () => ({ ...Ln(), st: 0 }))));
    }
    get count() {
      return this.n;
    }
    reset() {
      ((this.n = 0),
        (this.head = 0),
        (this.lastSeq = -1),
        (this.offset = NaN),
        (this.renderOffset = NaN),
        (this.lastSample = NaN),
        (this.interval = NaN),
        (this.delay = this.delayMs));
    }
    targetDelay() {
      let e = this.interval;
      return e === e
        ? Math.max(this.delayMs, Math.min(Hn, e * 1.5 + 20))
        : this.delayMs;
    }
    snapDist(e, t) {
      return (
        this.snapM + Math.max(e.speed, t.speed) * Math.abs(t.st - e.st) * 0.0015
      );
    }
    push(e, t) {
      if (this.lastSeq >= 0 && !Fn(e.seq, this.lastSeq))
        return (this.dropped++, !1);
      if (this.lastSeq < 0) this.st = e.t;
      else {
        let t = In(e.t, this.lastT);
        ((this.st += t),
          t > 0 &&
            t < 5e3 &&
            (this.interval =
              this.interval === this.interval
                ? this.interval + (t - this.interval) * 0.3
                : t));
      }
      ((this.lastT = e.t), (this.lastSeq = e.seq));
      let n = this.st,
        r = t - n;
      this.offset !== this.offset || r < this.offset
        ? (this.offset = r)
        : (this.offset += (r - this.offset) * 0.005);
      let i = this.size;
      this.n === i && ((this.head = (this.head + 1) % i), this.n--);
      let a = this.n;
      for (; a > 0 && this.at(a - 1).st > n;) a--;
      for (let e = this.n; e > a; e--)
        Object.assign(this.at(e), this.at(e - 1));
      let o = this.at(a);
      return (
        Object.assign(o, e),
        (o.pitch = e.pitch ?? 0),
        (o.roll = e.roll ?? 0),
        (o.heave = e.heave ?? 0),
        (o.surge = e.surge ?? 0),
        (o.st = n),
        this.n++,
        this.accepted++,
        !0
      );
    }
    at(e) {
      return this.ring[(this.head + e) % this.size];
    }
    latest() {
      return this.n ? this.at(this.n - 1) : null;
    }
    sample(e, t) {
      let n = this.n;
      if (!n) return !1;
      let r = this.offset,
        i = this.renderOffset;
      if (
        i !== i ||
        Math.abs(r - i) > Bn ||
        this.lastSample !== this.lastSample
      )
        this.renderOffset = r;
      else {
        let t = Math.max(0, e - this.lastSample) * zn,
          n = r - i;
        this.renderOffset = i + (n > t ? t : n < -t ? -t : n);
      }
      let a =
        this.lastSample === this.lastSample
          ? Math.max(0, e - this.lastSample)
          : 0;
      this.lastSample = e;
      let o = this.targetDelay(),
        s = a * Vn;
      this.delay +=
        o > this.delay
          ? Math.min(s, o - this.delay)
          : -Math.min(s, this.delay - o);
      let c = e - this.renderOffset - this.delay,
        l = this.at(0);
      if (n === 1 || c <= l.st) return (Object.assign(t, l), !0);
      let u = this.at(n - 1);
      if (c >= u.st) {
        let e = this.at(n - 2);
        Object.assign(t, u);
        let r = u.st - e.st,
          i = this.interval,
          a = Math.min(
            c - u.st,
            i === i
              ? Math.max(this.maxExtrapMs, Math.min(Hn, i * 1.2))
              : this.maxExtrapMs,
          );
        if (
          r > 0 &&
          a > 0 &&
          e.mode === u.mode &&
          e.vehicle === u.vehicle &&
          Math.hypot(u.x - e.x, u.z - e.z) < this.snapDist(e, u)
        ) {
          let n = a / r;
          ((t.x = u.x + (u.x - e.x) * n),
            (t.y = u.y + (u.y - e.y) * n),
            (t.z = u.z + (u.z - e.z) * n));
        }
        return !0;
      }
      let d = n - 2;
      for (; d > 0 && this.at(d).st > c;) d--;
      let f = this.at(d),
        p = this.at(d + 1);
      Object.assign(t, f);
      let m = p.st - f.st;
      if (
        m <= 0 ||
        f.mode !== p.mode ||
        f.vehicle !== p.vehicle ||
        Math.hypot(p.x - f.x, p.z - f.z) > this.snapDist(f, p)
      )
        return !0;
      let h = (c - f.st) / m;
      return (
        (t.x = f.x + (p.x - f.x) * h),
        (t.y = f.y + (p.y - f.y) * h),
        (t.z = f.z + (p.z - f.z) * h),
        (t.heading = Un(f.heading, p.heading, h)),
        (t.speed = f.speed + (p.speed - f.speed) * h),
        (t.pitch = (f.pitch ?? 0) + ((p.pitch ?? 0) - (f.pitch ?? 0)) * h),
        (t.roll = (f.roll ?? 0) + ((p.roll ?? 0) - (f.roll ?? 0)) * h),
        (t.heave = (f.heave ?? 0) + ((p.heave ?? 0) - (f.heave ?? 0)) * h),
        (t.surge = (f.surge ?? 0) + ((p.surge ?? 0) - (f.surge ?? 0)) * h),
        !0
      );
    }
  },
  Gn = new Set([
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
    `kick`,
    `batFore`,
    `batBack`,
  ]),
  Kn = new Set([`fists`, `bat`, `pistol`, `smg`]),
  qn = new s(0.035, 0.015, 0.8, 10)
    .rotateX(-Math.PI / 2)
    .translate(0, 0, -0.36),
  Jn = new c(0.055, 0.22, 0.065).translate(0, -0.07, -0.05),
  Yn = new c(0.075, 0.38, 0.09).translate(0, -0.11, -0.06),
  Xn = new c(0.045, 0.06, 0.13).translate(0, 0.005, 0.025),
  Zn = new r({ color: 13211994, roughness: 0.55 }),
  Qn = new r({ color: 2500909, roughness: 0.45, metalness: 0.4 }),
  $n = [0, 11, 12, 13, 14, 15, 16];
function er(e) {
  let t = new o();
  return (
    (t.name = `net-weapon-${e}`),
    t.add(
      new n(e === `bat` ? qn : e === `pistol` ? Jn : Yn, e === `bat` ? Zn : Qn),
    ),
    e !== `bat` && t.add(new n(Xn, Qn)),
    t
  );
}
function tr() {
  return [er(`bat`), er(`pistol`), er(`smg`)];
}
var nr = class {
    rig;
    animator;
    remaining = 0;
    weapon = `fists`;
    held = `fists`;
    aiming = !1;
    props = new Map();
    legs = new Float32Array($n.length * 3 + 3);
    constructor(e) {
      ((this.rig = e), (this.animator = new pe(e)));
      for (let [t, n] of [
        [`bat`, 18],
        [`pistol`, 19],
        [`smg`, 20],
      ]) {
        let r = er(t);
        ((r.visible = !1), e.bones[n].add(r), this.props.set(t, r));
      }
    }
    get active() {
      return this.remaining > 0;
    }
    get posing() {
      return this.active || this.held !== `fists` || this.aiming;
    }
    stance(e, t) {
      ((this.held = Kn.has(e) ? e : `fists`), (this.aiming = t));
    }
    play(e, t) {
      if (!Kn.has(e)) return;
      ((this.weapon = e),
        (this.animator.inp.weapon = this.weapon),
        (this.animator.inp.guard = +(e === `fists`)));
      let n = e === `pistol` || e === `smg`;
      if (((this.animator.inp.aim = +!!n), n))
        ((this.animator.action = null),
          (this.animator.actionT = 0),
          (this.remaining = 0.35),
          this.animator.kickRecoil(e === `smg` ? 0.28 : 0.55));
      else {
        let n = e === `bat` ? `batFore` : `jab`,
          r = t && Gn.has(t) ? t : n;
        (this.animator.play(r), (this.remaining = de(r).dur + 0.08));
      }
      this.showProp();
    }
    tick(e, t) {
      if (
        ((this.remaining = t ? 0 : Math.max(0, this.remaining - e)),
        t && ((this.held = `fists`), (this.aiming = !1)),
        !this.active)
      ) {
        let e = this.animator.inp;
        ((e.weapon = this.held),
          (e.aim = +!!this.aiming),
          (e.guard = +(this.held === `fists`)));
      }
      this.showProp();
    }
    render(e, t) {
      if (!this.posing) return;
      this.animator.inp.speed = t;
      let n = !this.animator.action;
      (n && this.saveLegs(), this.animator.update(e), n && this.restoreLegs());
    }
    dispose() {
      for (let e of this.props.values()) e.removeFromParent();
      this.props.clear();
    }
    showProp() {
      let e = this.active ? this.weapon : this.held;
      for (let [t, n] of this.props) n.visible = t === e;
    }
    saveLegs() {
      let e = this.rig.bones,
        t = this.legs;
      for (let n = 0; n < $n.length; n++) {
        let r = e[$n[n]].rotation;
        ((t[n * 3] = r.x), (t[n * 3 + 1] = r.y), (t[n * 3 + 2] = r.z));
      }
      let n = e[0].position,
        r = $n.length * 3;
      ((t[r] = n.x), (t[r + 1] = n.y), (t[r + 2] = n.z));
    }
    restoreLegs() {
      let e = this.rig.bones,
        t = this.legs;
      for (let n = 0; n < $n.length; n++)
        e[$n[n]].rotation.set(t[n * 3], t[n * 3 + 1], t[n * 3 + 2]);
      let n = $n.length * 3;
      e[0].position.set(t[n], t[n + 1], t[n + 2]);
    }
  },
  rr = 1e4,
  ir = RegExp(
    `[\\u0000-\\u001f\\u007f-\\u009f\\u200b-\\u200f\\u202a-\\u202e\\u2060-\\u2069\\ufeff]`,
    `g`,
  );
function ar(e) {
  if (typeof e != `string`) return ``;
  let t = e.replace(ir, ` `).replace(/\s+/g, ` `).trim();
  return Array.from(t).slice(0, 80).join(``).trim();
}
