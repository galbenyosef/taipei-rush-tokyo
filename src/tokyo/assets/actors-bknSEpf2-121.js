// tokyo/assets/actors-bknSEpf2 121 — math
// Lines 54226-54544 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var ek = new V(),
  tk = new V(),
  nk = it(),
  rk = [],
  ik = (e) => e.kind === `ped` || e.kind === `police` || e.kind === `player`,
  ak = class {
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
      this.feelLen = H(6 + a * 0.95, 7, 38);
      let u = this.feelLen,
        d = t.spec.halfL,
        f = t.spec.halfW,
        p = r.y + 0.42,
        m = 999,
        h = 0;
      for (let t = -1; t <= 1; t++) {
        (ek.set(
          r.x + o * d + c * f * 0.92 * t,
          p,
          r.z + s * d + l * f * 0.92 * t,
        ),
          tk.set(o, 0, s));
        let n = e.statics.raycast(ek, tk, u, nk) ? nk.distance : 999;
        n < m - 0.05 && ((m = n), (h = t));
      }
      ((this.fwdHit = m), (this.fwdSide = h));
      let g = u * 0.7;
      for (let t = -1; t <= 1; t += 2) {
        let n = i + t * 0.42;
        (ek.set(
          r.x + o * d * 0.8 + c * f * t,
          p,
          r.z + s * d * 0.8 + l * f * t,
        ),
          tk.set(Math.sin(n), 0, -Math.cos(n)));
        let a = e.statics.raycast(ek, tk, g, nk) ? nk.distance : 999;
        t < 0 ? (this.leftHit = a) : (this.rightHit = a);
      }
      ((this.dynBody = null), (this.dynDist = 999));
      let _ = d + u,
        v = e.dynamics.query(
          r.x + o * (d + u * 0.5),
          r.z + s * (d + u * 0.5),
          u * 0.5 + f + 1.2,
          rk,
        );
      for (let e = 0; e < v; e++) {
        let t = rk[e];
        if (t === r || t === n || !t.active || Math.abs(t.y - r.y) > 2.5)
          continue;
        let i = t.x - r.x,
          a = t.z - r.z,
          u = i * o + a * s;
        if (u < d - 0.6 || u > _ + t.radius) continue;
        let p = i * c + a * l,
          m = ik(t) ? 0.9 : 0.35,
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
        h = bt(Math.atan2(f, -p) - u),
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
        if (ik(t)) i = Math.min(i, Math.max(0, (this.dynDist - 2.2) * 0.9));
        else {
          let e = Math.sin(u),
            n = -Math.cos(u),
            r = Math.max(0, t.vx * e + t.vz * n);
          i = Math.min(i, Math.max(r + 1, this.dynDist * 0.7));
        }
      }
      g > 0.45 &&
        (i = Math.min(i, Math.max(5, i * (1 - H((g - 0.45) / 1.3, 0, 0.8)))));
      let b = H(h * 2.1, -1, 1) + _;
      (this.escapeT > 0 && ((this.escapeT -= a), (b = this.escapeSteer)),
        (b = H(b, -1, 1)),
        d < -0.3 && (b = -b),
        (this.steer += (b - this.steer) * Math.min(1, a * 9)),
        (c.steer = this.steer),
        i < 0.3 && Math.abs(d) < 0.6
          ? ((c.throttle = 0), (c.brake = 0.6), (c.handbrake = !0))
          : d < i - 0.4
            ? ((c.throttle = H((i - d) * 0.3 + 0.3, 0, 1)),
              (c.brake = 0),
              (c.handbrake = !1))
            : d > i + 1
              ? ((c.throttle = 0),
                (c.brake = H(
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
  ok = Object.fromEntries(
    [
      `hips`,
      `chest`,
      `head`,
      `foreL`,
      `foreR`,
      `thighR`,
      `shinL`,
      `shinR`,
      `pistol`,
      `rifle`,
      `holster`,
      `sling`,
      `armL`,
      `armR`,
      `cuffs`,
    ].map((e, t) => [e, t]),
  ),
  sk = null,
  ck = [0, 0.75, 1, 0.25],
  lk = [0, 0.5, 1, 0.25],
  uk = [0, 0.25, 0.5, 0.25],
  dk = [0.5, 0.25, 0.5, 0.25],
  fk = [0, 0, 0.25, 0.25];
function pk() {
  if (sk) return sk;
  let e = document.createElement(`canvas`);
  ((e.width = 512), (e.height = 512));
  let t = e.getContext(`2d`);
  if (!cO.paint?.(`gear`, t)) {
    let e = `"Noto Sans TC","PingFang TC","Microsoft JhengHei","Heiti TC",sans-serif`,
      n = (n, r, i) => {
        ((t.fillStyle = `#2a2d33`),
          t.fillRect(0, n, 512, r),
          (t.strokeStyle = `rgba(255,255,255,0.14)`),
          (t.lineWidth = 3),
          t.setLineDash([7, 5]),
          t.strokeRect(10, n + 8, 492, r - 16),
          t.setLineDash([]),
          (t.fillStyle = `#eef0f2`),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          i
            ? ((t.font = `900 64px ${e}`),
              t.fillText(`POLICE`, 256, n + r * 0.36),
              (t.font = `900 44px ${e}`),
              t.fillText(`警 察`, 256, n + r * 0.76))
            : ((t.font = `900 78px ${e}`),
              t.fillText(`POLICE`, 256, n + r * 0.52)));
      };
    (n(0, 128, !0),
      n(128, 128, !1),
      (t.fillStyle = `#16203a`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 70px ${e}`),
      t.fillText(`警 察`, 128, 302),
      (t.font = `800 34px ${e}`),
      t.fillText(`P O L I C E`, 128, 357),
      (t.fillStyle = `#1f2d4f`),
      (t.font = `900 84px ${e}`),
      t.fillText(`警察`, 384, 318),
      t.fillRect(292, 364, 184, 7),
      t.save(),
      t.beginPath(),
      t.moveTo(14, 392),
      t.lineTo(114, 392),
      t.lineTo(114, 462),
      t.quadraticCurveTo(112, 492, 64, 508),
      t.quadraticCurveTo(16, 492, 14, 462),
      t.closePath(),
      (t.fillStyle = `#1b2a4c`),
      t.fill(),
      (t.lineWidth = 7),
      (t.strokeStyle = `#d7b24a`),
      t.stroke(),
      (t.fillStyle = `#d7b24a`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 21px ${e}`),
      t.fillText(`臺北市`, 64, 410),
      (t.font = `900 17px ${e}`),
      t.fillText(`警察局`, 64, 480));
    for (let e = 0; e < 5; e++) {
      let n = (e / 5) * Math.PI * 2 - Math.PI / 2;
      (t.beginPath(),
        t.arc(64 + Math.cos(n) * 11, 444 + Math.sin(n) * 11, 9, 0, Math.PI * 2),
        t.fill());
    }
    ((t.fillStyle = `#f4f1e6`), t.beginPath());
    for (let e = 0; e < 10; e++) {
      let n = (e / 10) * Math.PI * 2 - Math.PI / 2,
        r = e % 2 ? 4 : 9;
      t.lineTo(64 + Math.cos(n) * r, 444 + Math.sin(n) * r);
    }
    (t.closePath(), t.fill(), t.restore());
  }
  return (
    (sk = new ke(e)),
    (sk.colorSpace = T),
    (sk.anisotropy = 4),
    (sk.name = `police-gear-decals`),
    yt(sk),
    sk
  );
}
