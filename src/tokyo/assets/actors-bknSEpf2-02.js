// tokyo/assets/actors-bknSEpf2 02 — copy
// Lines 306-479 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Zn = class {
    rig;
    rq = [];
    rp = [];
    done = new Uint8Array(33);
    qA = new v();
    qB = new v();
    qC = new v();
    qD = new v();
    a = new V();
    b = new V();
    c = new V();
    d = new V();
    e = new V();
    f = new V();
    g = new V();
    m = new N();
    constructor(e) {
      this.rig = e;
      for (let e = 0; e < 33; e++)
        (this.rq.push(new v()), this.rp.push(new V()));
    }
    begin(e) {
      ((this.rig = e), this.done.fill(0));
    }
    fk(e) {
      if (this.done[e]) return;
      let t = this.rig.bones[e],
        n = Hn[e];
      (n < 0
        ? (this.rq[e].copy(t.quaternion), this.rp[e].copy(t.position))
        : (this.fk(n),
          this.rq[e].multiplyQuaternions(this.rq[n], t.quaternion),
          this.rp[e]
            .copy(t.position)
            .applyQuaternion(this.rq[n])
            .add(this.rp[n])),
        (this.done[e] = 1));
    }
    dirty(e) {
      for (let t = 0; t < 33; t++) {
        let n = t;
        for (; n >= 0;) {
          if (n === e) {
            this.done[t] = 0;
            break;
          }
          n = Hn[n];
        }
      }
    }
    rootPos(e, t) {
      return (this.fk(e), t.copy(this.rp[e]));
    }
    rootQuat(e, t) {
      return (this.fk(e), t.copy(this.rq[e]));
    }
    pointOn(e, t, n) {
      return (
        this.fk(e),
        n.copy(t).applyQuaternion(this.rq[e]).add(this.rp[e])
      );
    }
    aimGun(e, t, n) {
      if (n <= 0.001) return;
      let r = Hn[e];
      this.fk(r);
      let i = this.a.copy(t).normalize(),
        a = this.b.set(0, 1, 0).addScaledVector(i, -i.y);
      (a.lengthSq() < 1e-6 && a.set(0, 0, -1), a.normalize());
      let o = this.c.crossVectors(i, a);
      (this.m.set(
        o.x,
        -i.x,
        -a.x,
        0,
        o.y,
        -i.y,
        -a.y,
        0,
        o.z,
        -i.z,
        -a.z,
        0,
        0,
        0,
        0,
        1,
      ),
        this.qA.setFromRotationMatrix(this.m),
        this.qB.copy(this.rq[r]).invert().multiply(this.qA),
        this.rig.bones[e].quaternion.slerp(this.qB, Math.min(1, n)),
        this.dirty(e));
    }
    aimAxisZ(e, t, n) {
      if (n <= 0.001) return;
      let r = Hn[e];
      (this.fk(r),
        this.qA.copy(this.rq[r]).invert(),
        this.a.copy(t).normalize().applyQuaternion(this.qA),
        this.qB.setFromUnitVectors(this.b.set(0, 0, -1), this.a),
        this.rig.bones[e].quaternion.slerp(this.qB, Math.min(1, n)),
        this.dirty(e));
    }
    orient(e, t, n) {
      if (n <= 0.001) return;
      let r = Hn[e];
      (this.fk(r),
        this.qA.copy(this.rq[r]).invert().multiply(t),
        this.rig.bones[e].quaternion.slerp(this.qA, Math.min(1, n)),
        this.dirty(e));
    }
    arm(e, t, n, r, i, a) {
      if (a <= 0.001) return;
      let o = this.rig.joints,
        s = o[e].distanceTo(o[t]),
        c = o[t].distanceTo(o[n]),
        l = Hn[e];
      this.fk(e);
      let u = this.a.copy(this.rp[e]),
        d = this.b.subVectors(r, u),
        f = d.length();
      ((f = Math.min(Math.max(f, 0.06), (s + c) * 0.998)), d.normalize());
      let p = (s * s - c * c + f * f) / (2 * f),
        m = Math.sqrt(Math.max(0, s * s - p * p)),
        h = this.c.copy(i).addScaledVector(d, -i.dot(d));
      (h.lengthSq() < 1e-8 && h.set(0, -1, 0), h.normalize());
      let g = this.d.copy(u).addScaledVector(d, p).addScaledVector(h, m),
        _ = this.e.copy(u).addScaledVector(d, f),
        v = this.f.subVectors(o[t], o[e]).normalize(),
        y = this.g.subVectors(g, u).normalize(),
        b = this.qA.setFromUnitVectors(v, y),
        x = this.f.subVectors(o[n], o[t]).normalize(),
        S = this.g.subVectors(_, g).normalize(),
        C = this.qB.setFromUnitVectors(x, S);
      (this.fk(l),
        this.qC.copy(this.rq[l]).invert().multiply(b),
        this.rig.bones[e].quaternion.slerp(this.qC, Math.min(1, a)),
        this.qD.copy(b).invert().multiply(C),
        this.rig.bones[t].quaternion.slerp(this.qD, Math.min(1, a)),
        this.dirty(e));
    }
  },
  Qn = [
    `scooter`,
    `motorcycle`,
    `superbike`,
    `sedan`,
    `taxi`,
    `suv`,
    `van`,
    `bus`,
    `police`,
    `ambulance`,
    `garbage`,
    `sports`,
    `truck`,
  ],
  $n = (e) => e / 3.6;
function er(e, t, n, r, i, a, o, s, c, l, u = 4, d = !1) {
  return {
    kind: e,
    name: { zh: t, en: n },
    halfW: r,
    halfL: i,
    height: a,
    mass: o,
    maxSpeed: $n(s),
    accel: c,
    twoWheeler: d,
    seats: u,
    colors: l,
  };
}
