// tokyo/assets/actors-Bnj6Q1ad 88 — math
// Lines 42921-43160 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var nS = new R(),
  rS = new R(),
  iS = st(),
  aS = [],
  oS = (e) => e.kind === `ped` || e.kind === `police` || e.kind === `player`,
  sS = class {
    steer = 0;
    stuckT = 0;
    reverseT = 0;
    revSteer = 0;
    escapeT = 0;
    escapeSteer = 0;
    feelT = Math.floor(Math.random() * 3);
    feelLen = 10;
    fwdHit = 999;
    fwdSide = 0;
    leftHit = 999;
    rightHit = 999;
    dynBody = null;
    dynDist = 999;
    dynSide = 0;
    stuckCount = 0;
    reversals = 0;
    goodT = 0;
    reset() {
      ((this.steer = 0),
        (this.stuckT = 0),
        (this.reverseT = 0),
        (this.escapeT = 0),
        (this.stuckCount = 0));
    }
    sense(e, t, n) {
      let r = t.body,
        i = t.heading,
        a = Math.abs(t.speed),
        o = Math.sin(i),
        s = -Math.cos(i),
        c = Math.cos(i),
        l = Math.sin(i);
      this.feelLen = V(6 + a * 0.95, 7, 38);
      let u = this.feelLen,
        d = t.spec.halfL,
        f = t.spec.halfW,
        p = r.y + 0.42,
        m = 999,
        h = 0;
      for (let t = -1; t <= 1; t++) {
        (nS.set(
          r.x + o * d + c * f * 0.92 * t,
          p,
          r.z + s * d + l * f * 0.92 * t,
        ),
          rS.set(o, 0, s));
        let n = e.statics.raycast(nS, rS, u, iS) ? iS.distance : 999;
        n < m - 0.05 && ((m = n), (h = t));
      }
      ((this.fwdHit = m), (this.fwdSide = h));
      let g = u * 0.7;
      for (let t = -1; t <= 1; t += 2) {
        let n = i + t * 0.42;
        (nS.set(
          r.x + o * d * 0.8 + c * f * t,
          p,
          r.z + s * d * 0.8 + l * f * t,
        ),
          rS.set(Math.sin(n), 0, -Math.cos(n)));
        let a = e.statics.raycast(nS, rS, g, iS) ? iS.distance : 999;
        t < 0 ? (this.leftHit = a) : (this.rightHit = a);
      }
      ((this.dynBody = null), (this.dynDist = 999));
      let _ = d + u,
        v = e.dynamics.query(
          r.x + o * (d + u * 0.5),
          r.z + s * (d + u * 0.5),
          u * 0.5 + f + 1.2,
          aS,
        );
      for (let e = 0; e < v; e++) {
        let t = aS[e];
        if (t === r || t === n || !t.active || Math.abs(t.y - r.y) > 2.5)
          continue;
        let i = t.x - r.x,
          a = t.z - r.z,
          u = i * o + a * s;
        if (u < d - 0.6 || u > _ + t.radius) continue;
        let p = i * c + a * l,
          m = oS(t) ? 0.9 : 0.35,
          h =
            t.kind === `vehicle` ? Math.max(t.halfW, t.radius * 0.5) : t.radius;
        if (Math.abs(p) > f + h + m) continue;
        let g = Math.max(0, u - d - h);
        g < this.dynDist &&
          ((this.dynDist = g),
          (this.dynBody = t),
          (this.dynSide = p >= 0 ? 1 : -1));
      }
    }
    startReverse(e, t) {
      ((this.reverseT = t),
        (this.revSteer = e >= 0 ? 1 : -1),
        this.reversals++);
    }
    drive(e, t, n, r, i, a, o, s = 0) {
      let c = t.controls;
      if (!c) return;
      let l = t.body,
        u = t.heading,
        d = t.speed;
      --this.feelT <= 0 && ((this.feelT = 3), this.sense(e, t, o));
      let f = n - l.x,
        p = r - l.z,
        m = Math.hypot(f, p),
        h = z(Math.atan2(f, -p) - u),
        g = Math.abs(h);
      if (this.reverseT > 0) {
        if (
          ((this.reverseT -= a),
          (c.throttle = 0),
          (c.brake = 1),
          (c.handbrake = !1),
          (c.steer = -this.revSteer),
          (this.steer = c.steer),
          this.reverseT <= 0)
        ) {
          this.escapeT = 0.9;
          let e =
            this.leftHit > this.rightHit + 1
              ? -1
              : +(this.rightHit > this.leftHit + 1);
          this.escapeSteer = this.fwdHit < 4 && e !== 0 ? e : this.revSteer;
        }
        return;
      }
      if (g > 2.1 && m < 32 && m > 4 && Math.abs(d) < 5 && i > 1) {
        this.startReverse(h, 0.9 + Math.random() * 0.3);
        return;
      }
      if (s > 0) {
        let e = Math.max(0, m - s);
        i = Math.min(i, Math.sqrt(12 * e));
      }
      let _ = 0,
        v = this.feelLen,
        y = v * 0.7;
      if (
        (this.leftHit < y && (_ += (1 - this.leftHit / y) * 0.85),
        this.rightHit < y && (_ -= (1 - this.rightHit / y) * 0.85),
        this.fwdHit < v)
      ) {
        let e = 1 - this.fwdHit / v,
          t =
            this.fwdSide === 0
              ? this.leftHit > this.rightHit
                ? -1
                : 1
              : -this.fwdSide;
        ((_ += t * e * 0.9),
          (i = Math.min(i, Math.max(2.5, this.fwdHit * 0.7))));
      }
      if (this.dynBody && this.dynDist < v * 0.85) {
        let e = 1 - this.dynDist / (v * 0.85);
        _ -= this.dynSide * e * 0.8;
        let t = this.dynBody;
        if (oS(t)) i = Math.min(i, Math.max(0, (this.dynDist - 2.2) * 0.9));
        else {
          let e = Math.sin(u),
            n = -Math.cos(u),
            r = Math.max(0, t.vx * e + t.vz * n);
          i = Math.min(i, Math.max(r + 1, this.dynDist * 0.7));
        }
      }
      g > 0.45 &&
        (i = Math.min(i, Math.max(5, i * (1 - V((g - 0.45) / 1.3, 0, 0.8)))));
      let b = V(h * 2.1, -1, 1) + _;
      (this.escapeT > 0 && ((this.escapeT -= a), (b = this.escapeSteer)),
        (b = V(b, -1, 1)),
        d < -0.3 && (b = -b),
        (this.steer += (b - this.steer) * Math.min(1, a * 9)),
        (c.steer = this.steer),
        i < 0.3 && Math.abs(d) < 0.6
          ? ((c.throttle = 0), (c.brake = 0.6), (c.handbrake = !0))
          : d < i - 0.4
            ? ((c.throttle = V((i - d) * 0.3 + 0.3, 0, 1)),
              (c.brake = 0),
              (c.handbrake = !1))
            : d > i + 1
              ? ((c.throttle = 0),
                (c.brake = V(
                  (d - i) * (s > 0 || i < 3 ? 0.35 : 0.16),
                  0.15,
                  1,
                )),
                (c.handbrake = !1))
              : ((c.throttle = 0.12), (c.brake = 0), (c.handbrake = !1)),
        g > 1.15 && d > 13 && (c.handbrake = !0),
        Math.abs(d) > 6
          ? ((this.goodT += a),
            this.goodT > 4 && ((this.stuckCount = 0), (this.goodT = 0)))
          : (this.goodT = 0),
        i > 0.8 && c.throttle > 0.3 && Math.abs(d) < 1.1
          ? (this.stuckT += a * (this.fwdHit < 1.2 ? 1.6 : 1))
          : (this.stuckT = Math.max(0, this.stuckT - a * 2)),
        this.stuckT > 1 &&
          ((this.stuckT = 0),
          this.stuckCount++,
          this.startReverse(h, 1 + Math.random() * 0.5)));
    }
    hold(e) {
      let t = e.controls;
      t && ((t.throttle = 0), (t.brake = 1), (t.steer = 0), (t.handbrake = !0));
    }
  },
  cS = (e) => JSON.parse(JSON.stringify(e));
function lS() {
  let e = Yt(`police`);
  return e
    ? cS(e)
    : {
        id: `police`,
        sex: `m`,
        age: `adult`,
        build: `avg`,
        height: 1.78,
        skin: Qt.light,
        seed: 7,
        face: Ht({
          jaw: 0.7,
          eyeSize: 0.95,
          lid: 0.35,
          brow: 0.7,
          smile: -0.1,
        }),
        hair: { style: `fade`, color: Kt.black },
        top: { style: `police`, color: 2240847, color2: 14267207 },
        outer: { style: `vest`, color: 12118076, color2: 14673642, closed: !0 },
        bottom: { style: `slacks`, color: 1581624, belt: 1052947 },
        shoes: { style: `dress`, color: 986897 },
        acc: [{ kind: `policeCap` }, { kind: `watch` }],
      };
}
