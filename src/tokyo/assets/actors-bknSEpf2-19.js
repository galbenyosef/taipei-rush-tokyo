// tokyo/assets/actors-bknSEpf2 19 — add
// Lines 6066-6660 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Es = class {
    dog;
    cur = new Float32Array(84);
    tgt = new Float32Array(84);
    rootCur = new V();
    rootTgt = new V();
    phase = 0;
    t = 0;
    stillT = 0;
    sitW = 0;
    blinkT = 2;
    blink = 0;
    tiltT = 3;
    tilt = 0;
    tiltTgt = 0;
    twitchT = 1.5;
    twitch = 0;
    twitchSide = 1;
    barkT = 0;
    barkDur = 0.4;
    pant = 0;
    seed = 1;
    earX = 0;
    earV = 0;
    prevBob = 0;
    prevBobV = 0;
    act = 0;
    liftSide = 1;
    actT = 0;
    actDur = 1;
    fresh = !0;
    v = new V();
    m = new N();
    q = new v();
    e = new Pe();
    constructor(e) {
      this.dog = e;
    }
    rnd() {
      return (
        (this.seed = (this.seed * 16807) % 2147483647),
        this.seed / 2147483647
      );
    }
    bark() {
      ((this.barkDur = this.dog.spec.howl ? 1.25 : 0.42),
        (this.barkT = this.barkDur));
    }
    get barking() {
      return this.barkT > 0;
    }
    squat(e = 2.6) {
      return this.start(1, e);
    }
    eat(e = 1.8) {
      return this.start(2, e);
    }
    liftLeg(e, t = 3) {
      return this.start(3, t) ? ((this.liftSide = e < 0 ? -1 : 1), !0) : !1;
    }
    get legSide() {
      return this.liftSide;
    }
    start(e, t) {
      return !this.act && ((this.act = e), (this.actT = this.actDur = t), !0);
    }
    get action() {
      return this.act;
    }
    get actionProgress() {
      return this.act ? 1 - this.actT / this.actDur : 0;
    }
    cancelAction() {
      ((this.act = 0), (this.actT = 0));
    }
    set(e, t, n = 0, r = 0) {
      ((this.tgt[e * 3] = t),
        (this.tgt[e * 3 + 1] = n),
        (this.tgt[e * 3 + 2] = r));
    }
    add(e, t, n = 0, r = 0) {
      ((this.tgt[e * 3] += t),
        (this.tgt[e * 3 + 1] += n),
        (this.tgt[e * 3 + 2] += r));
    }
    update(e, t) {
      let n = this.dog.spec;
      this.t += e;
      let r = this.t;
      (this.tgt.fill(0), this.rootTgt.set(0, 0, 0));
      let i = Math.max(0, t.speed),
        a = t.state === `stand`;
      (a && i < 0.25 && !this.act ? (this.stillT += e) : (this.stillT = 0),
        (this.sitW = Ts(
          this.sitW + (a && this.stillT > 4.5 ? e * 2.2 : -e * 5),
          0,
          1,
        )),
        (this.pant = Ts(this.pant + (i > 1.8 ? e * 0.35 : -e * 0.07), 0, 1)),
        (this.blinkT -= e),
        this.blinkT <= 0 &&
          ((this.blink = 0.14), (this.blinkT = 2.2 + this.rnd() * 3.5)),
        (this.blink = Math.max(0, this.blink - e)),
        (this.tiltT -= e),
        this.tiltT <= 0 &&
          ((this.tiltTgt =
            this.rnd() < 0.45
              ? (this.rnd() < 0.5 ? -1 : 1) * (0.25 + this.rnd() * 0.2)
              : 0),
          (this.tiltT = 1.6 + this.rnd() * 3)),
        (this.tilt += (this.tiltTgt - this.tilt) * Math.min(1, e * 5)),
        (this.twitchT -= e),
        this.twitchT <= 0 &&
          ((this.twitch = 0.22),
          (this.twitchSide = this.rnd() < 0.5 ? -1 : 1),
          (this.twitchT = 1.2 + this.rnd() * 3)),
        (this.twitch = Math.max(0, this.twitch - e)));
      let o = 0;
      switch (t.state) {
        case `stand`:
          this.poseGround(e, t, i);
          break;
        case `air`:
          this.poseAir(t);
          break;
        case `swim`:
          this.poseSwim(e, i);
          break;
        case `ride`:
          o = this.poseSeated(t, i, !1);
          break;
        case `drive`:
          o = this.poseSeated(t, i, !0);
          break;
        case `down`:
          this.poseDown();
          break;
        case `busted`:
          this.poseBusted();
      }
      if (this.act) {
        if (t.state !== `stand`) this.cancelAction();
        else if (((this.actT -= e), this.actT <= 0)) this.cancelAction();
        else {
          let e = 1 - this.actT / this.actDur,
            t = Cs(0, 0.14, e) * Cs(1, 0.86, e);
          this.act === 1
            ? this.poseSquat(t)
            : (o =
                this.act === 3
                  ? Math.max(o, this.poseLegLift(t, e))
                  : Math.max(o, this.poseEat(t)));
        }
      }
      let s = 0;
      if (this.barkT > 0) {
        this.barkT = Math.max(0, this.barkT - e);
        let t = 1 - this.barkT / this.barkDur;
        n.howl
          ? ((s = Math.sin(Math.min(1, t * 1.15) * Math.PI)),
            this.add(J.neck, 0.35 * s),
            this.add(J.head, 0.55 * s),
            this.add(J.jaw, -0.42 * s),
            (o = Math.max(o, s)))
          : ((s = Math.sin(t * Math.PI)),
            this.add(J.head, 0.18 * s),
            this.add(J.jaw, -0.55 * s),
            this.add(J.earL0, -0.2 * s),
            this.add(J.earR0, -0.2 * s),
            (o = Math.max(o, s * 0.5)));
      }
      s < 0.05 &&
        t.state !== `down` &&
        this.add(J.jaw, -(0.06 + this.pant * (0.16 + 0.06 * Math.sin(r * 15))));
      let c = this.fresh;
      this.fresh = !1;
      let l = c ? 1 : 1 - Math.exp(-e * 22);
      for (let e = 0; e < 84; e++)
        this.cur[e] += (this.tgt[e] - this.cur[e]) * l;
      this.rootCur.lerp(this.rootTgt, c ? 1 : 1 - Math.exp(-e * 14));
      let u = this.dog,
        d = u.bones;
      for (let e = 0; e < vs; e++)
        d[e].rotation.set(
          this.cur[e * 3],
          this.cur[e * 3 + 1],
          this.cur[e * 3 + 2],
        );
      d[J.root].position.copy(u.restPos[J.root]).add(this.rootCur);
      let f =
        t.state === `down`
          ? 0.08
          : Math.max(0.08, 1 - (this.blink > 0 ? 0.92 : 0) - o * 0.6);
      (d[J.eyeL].scale.set(1, f, 1),
        d[J.eyeR].scale.set(1, f, 1),
        n.shiver > 0 &&
          (t.state === `stand` || t.state === `busted`) &&
          ((d[J.root].position.x += Math.sin(r * 63) * 0.0035 * n.shiver),
          (d[J.earL1].rotation.z += Math.sin(r * 47) * 0.05 * n.shiver),
          (d[J.earR1].rotation.z -= Math.sin(r * 51) * 0.05 * n.shiver)));
    }
    poseGround(e, t, n) {
      let r = this.dog,
        i = r.dims,
        a = this.t,
        o = Cs(1.5, 2.6, n),
        s = Cs(4.2, 5.6, n),
        c =
          (i.legLen + i.bodyL) * 1.55 * r.spec.scale * (1 + 0.6 * o + 1.6 * s),
        l = n > 0.05 ? Math.max(1.1, n / c) : 0;
      this.phase = ws(this.phase + l * e);
      let u = this.phase,
        d = Cs(0.08, 0.6, n),
        f = d * (1 - o),
        p = 0.64 - 0.14 * o - 0.18 * s;
      for (let e = 0; e < 4; e++) {
        let t = e >= 2,
          n = (t ? 0.3 + 0.08 * o + 0.45 * s : 0.32 + 0.12 * o + 0.42 * s) * d,
          r = bs[e] + (xs[e] - bs[e]) * o,
          i = ws(u + r + (Ss[e] - r) * s),
          a,
          c,
          l = 0;
        if (i < p) {
          let e = i / p;
          ((a = n * (1 - 2 * e)), (c = 0), (l = Cs(0.62, 1, e) * d));
        } else {
          let e = (i - p) / (1 - p);
          ((a = -n + 2 * n * (1 - (1 - e) ** 2.2)),
            (c = Math.sin(Math.min(1, e * 1.18) * Math.PI) * d));
        }
        let [f, m, h] = Bo[e];
        if ((this.set(f, a), t)) {
          let e = c * (0.75 + 0.35 * s);
          (this.set(m, e), this.set(h, -(a + e) + c * 0.45 - l * 0.3));
        } else {
          let e = -c * (0.85 + 0.35 * o + 0.45 * s);
          (this.set(m, e),
            this.set(h, -(a + e) - c * (0.75 + 0.55 * o) + l * 0.25));
        }
      }
      let m = Math.sin(u * ys),
        h = Math.sin(u * ys * 2),
        g = Math.cos(u * ys * 2),
        _ =
          i.legLen *
          (-0.02 * Math.abs(h) * f + 0.05 * g * o * (1 - s) + 0.09 * m * s);
      this.rootTgt.y += _;
      let v = m * 0.17 * s;
      (this.add(J.hips, v * 0.7, m * 0.07 * f, m * 0.04 * f),
        this.add(J.chest, -v * 1.2 - 0.03 * o * (1 - s), -m * 0.05 * f));
      let y = Ts(-t.turn * n * 0.03, -0.3, 0.3);
      (this.add(J.root, 0, 0, y),
        this.add(J.chest, Math.sin(a * 2.4) * 0.015 * (1 - d)));
      let b = 1 - d * 0.75;
      (this.add(
        J.neck,
        -0.1 * d +
          Ts(t.lookPitch, -0.35, 0.3) * 0.5 * b -
          v * 0.5 -
          h * 0.05 * f -
          g * 0.05 * o * (1 - s),
      ),
        this.add(
          J.head,
          -0.04 * d + Ts(t.lookPitch, -0.35, 0.3) * 0.5 * b,
          Ts(-t.lookYaw, -0.9, 0.9) * 0.6 * b - t.turn * 0.06,
          this.tilt * b,
        ),
        this.add(J.neck, 0, Ts(-t.lookYaw, -0.9, 0.9) * 0.3 * b),
        e > 0.08 && ((this.prevBob = _), (this.prevBobV = 0)));
      let x = 1 / Math.max(e, 0.001),
        S = (_ - this.prevBob) * x,
        C = Ts((S - this.prevBobV) * x, -40, 40);
      ((this.prevBob = _),
        (this.prevBobV = S),
        (this.earV +=
          (-70 * this.earX - 8 * this.earV - C * 0.9) * Math.min(e, 0.05)),
        (this.earX = Ts(
          this.earX + this.earV * Math.min(e, 0.05),
          -0.45,
          0.45,
        )));
      let w = Math.min(0.75, n * 0.09),
        T = this.earX * (0.6 + r.spec.earH * 1.5);
      (this.add(
        J.earL0,
        w + T + (this.twitchSide < 0 ? -this.twitch * 1.2 : 0),
        0,
        0,
      ),
        this.add(
          J.earR0,
          w + T + (this.twitchSide > 0 ? -this.twitch * 1.2 : 0),
          0,
          0,
        ),
        this.add(J.earL1, w * 0.5 + T * 0.8),
        this.add(J.earR1, w * 0.5 + T * 0.8),
        r.spec.tail !== `curl` && this.add(J.tail0, -0.22 * d * (1 - s)),
        this.tailWag(
          0.38 + 0.22 * o * (1 - s),
          d > 0.1 ? Ts(l * ys, 8, 20) : 7,
          s * 0.7,
        ));
      let E = this.sitW;
      if (E > 0) {
        let e = 0.62 * E,
          t = -0.12 * E;
        (this.add(J.hips, e), this.add(J.chest, t));
        for (let t of [2, 3])
          (this.add(Bo[t][0], 0.65 * E),
            this.add(Bo[t][1], -2 * E),
            this.add(Bo[t][2], 1.35 * E - e));
        for (let n of [0, 1]) this.add(Bo[n][0], -(e + t));
        (this.add(J.neck, -0.25 * E),
          this.add(J.head, -0.15 * E),
          (this.rootTgt.y -= i.legLen * 0.32 * E),
          (this.rootTgt.z -= i.bodyL * 0.2 * E));
      }
    }
    poseSquat(e) {
      let t = this.dog.dims,
        n = this.t,
        r = 0.42 * e,
        i = -0.2 * e;
      (this.add(J.hips, r), this.add(J.chest, i));
      for (let t of [2, 3])
        (this.add(Bo[t][0], 0.55 * e),
          this.add(Bo[t][1], -1.25 * e),
          this.add(Bo[t][2], 0.7 * e - r));
      for (let e of [0, 1]) this.add(Bo[e][0], -(r + i));
      (this.add(J.tail0, -0.9 * e),
        this.add(J.tail1, -0.3 * e),
        this.add(J.neck, -0.12 * e, Math.sin(n * 1.7) * 0.45 * e),
        this.add(J.head, 0.1 * e, Math.sin(n * 1.7) * 0.25 * e, 0.2 * e),
        this.add(J.earL0, 0.35 * e),
        this.add(J.earR0, 0.35 * e),
        (this.rootTgt.y -= t.legLen * 0.22 * e),
        (this.rootTgt.x += Math.sin(n * 40) * 0.0025 * e));
    }
    poseLegLift(e, t) {
      let n = this.dog.dims;
      this.t;
      let r = this.liftSide,
        [i, a, o] = Bo[r < 0 ? 2 : 3],
        [s, c] = Bo[r < 0 ? 3 : 2];
      return (
        this.add(i, 0.2 * e, 0, r * 1.2 * e),
        this.add(a, 0.55 * e),
        this.add(o, -0.35 * e),
        this.add(s, 0.12 * e, 0, -r * 0.06 * e),
        this.add(c, 0.18 * e),
        this.add(J.root, 0, 0, -r * 0.12 * e),
        this.add(J.hips, 0.06 * e, 0, r * 0.1 * e),
        this.add(J.tail0, -0.55 * e),
        this.tailWag(0.18 * e, 6, 0),
        this.add(J.neck, -0.05 * e, r * 0.35 * e),
        this.add(J.head, 0.08 * e, r * 0.2 * e, -r * 0.15 * e),
        (this.rootTgt.x -= r * n.legLen * 0.06 * e),
        (this.rootTgt.y -= n.legLen * 0.04 * e),
        e * Cs(0.3, 0.6, t) * 0.7
      );
    }
    poseEat(e) {
      let t = this.dog.dims,
        n = this.t;
      (this.add(J.chest, -0.12 * e),
        this.add(J.neck, -0.75 * e),
        this.add(J.head, -0.5 * e));
      for (let t of [0, 1])
        (this.add(Bo[t][0], 0.12 * e), this.add(Bo[t][1], -0.25 * e));
      return (
        this.add(J.jaw, -(0.12 + 0.2 * Math.max(0, Math.sin(n * 16))) * e),
        this.add(J.earL0, -0.15 * e),
        this.add(J.earR0, -0.15 * e),
        this.tailWag(0.7 * e, 18, 0),
        (this.rootTgt.y -= t.legLen * 0.05 * e),
        0.6 * e
      );
    }
    tailWag(e, t, n) {
      let r = this.t;
      for (let i = 0; i < 4; i++) {
        let a = Math.sin(r * t - i * 0.6) * e * (0.5 + i * 0.25);
        this.add(J.tail0 + i, n * (i === 0 ? 0.55 : 0.12), a, 0);
      }
    }
    poseAir(e) {
      let t = Ts(e.vy * 0.06, -0.35, 0.35);
      (this.set(Bo[0][0], 0.75),
        this.set(Bo[1][0], 0.65),
        this.set(Bo[0][1], -0.4),
        this.set(Bo[1][1], -0.5),
        this.set(Bo[2][0], -0.65),
        this.set(Bo[3][0], -0.55),
        this.set(Bo[2][1], 0.5),
        this.set(Bo[3][1], 0.6),
        this.add(J.hips, t * 0.6),
        this.add(J.head, -t * 0.4),
        this.add(J.earL0, 0.35),
        this.add(J.earR0, 0.35),
        this.tailWag(0.2, 9, 0.4));
    }
    poseSwim(e, t) {
      let n = this.dog.dims;
      this.phase = ws(this.phase + e * (1.3 + t * 0.4));
      let r = this.phase * ys;
      (this.add(J.hips, 0.42),
        this.add(J.neck, -0.12),
        this.add(J.head, -0.12));
      for (let e = 0; e < 2; e++) {
        let t = r + e * Math.PI;
        (this.set(Bo[e][0], 0.55 + Math.sin(t) * 0.65),
          this.set(Bo[e][1], -0.6 - Math.max(0, Math.cos(t)) * 0.8));
      }
      for (let e = 2; e < 4; e++) {
        let t = r * 0.8 + e * Math.PI;
        (this.set(Bo[e][0], -0.3 + Math.sin(t) * 0.4),
          this.set(Bo[e][1], 0.4 + Math.cos(t) * 0.3));
      }
      (this.add(J.earL0, 0.5),
        this.add(J.earR0, 0.5),
        this.tailWag(0.25, 4, 0.6),
        (this.rootTgt.y += Math.sin(r * 2) * 0.012 + n.legLen * 0.1));
    }
    poseSeated(e, t, n) {
      let r = this.dog.dims,
        i = this.t,
        a = Math.min(1, t / 12),
        o = n ? 1.12 : 0.98;
      (this.set(J.root, o, 0, 0),
        this.v.set(0, r.cy - r.bodyH * 0.75, r.bodyL * 0.78),
        this.e.set(o, 0, 0),
        this.v.applyEuler(this.e),
        this.rootTgt.set(0, -this.v.y, -this.v.z),
        this.add(J.chest, 0.12));
      let s = -(o + 0.12);
      (this.add(J.neck, s * 0.45),
        this.add(
          J.head,
          s * 0.55 + 0.08,
          n ? e.side * -0.38 : 0,
          n ? e.side * 0.54 : -e.turn * 0.05,
        ));
      for (let e of [2, 3])
        (this.set(Bo[e][0], n ? 0.1 : 0.3),
          this.set(Bo[e][1], -1.5),
          this.set(Bo[e][2], 0.3));
      let c = Math.sin(i * 31) * 0.22 * a;
      return (
        this.add(J.earL0, 1 * a + c, 0, 0),
        this.add(J.earR0, 1 * a - c, 0, 0),
        this.add(J.earL1, 0.55 * a + Math.sin(i * 37) * 0.3 * a),
        this.add(J.earR1, 0.55 * a + Math.sin(i * 41) * 0.3 * a),
        this.add(J.jaw, -0.12 * a, 0, Math.sin(i * 13) * 0.22 * a),
        this.tailWag(0.3 + 0.2 * a, 8 + 4 * a, 0.2),
        e.pawL && e.pawR
          ? this.reach(e.pawL, e.pawR)
          : (this.set(Bo[0][0], 1), this.set(Bo[1][0], 1)),
        0.35 * a
      );
    }
    reach(e, t) {
      let n = this.dog,
        r = n.bones,
        i = n.dims,
        a = [J.root, J.hips, J.chest];
      for (let e of a)
        r[e].rotation.set(
          this.tgt[e * 3],
          this.tgt[e * 3 + 1],
          this.tgt[e * 3 + 2],
        );
      (r[J.root].position.copy(n.restPos[J.root]).add(this.rootTgt),
        n.mesh.updateMatrix(),
        r[J.root].updateMatrixWorld(!0),
        this.m
          .copy(n.mesh.matrixWorld)
          .invert()
          .multiply(r[J.chest].matrixWorld)
          .invert());
      let o = i.upperF,
        s = i.lowerF;
      for (let r = 0; r < 2; r++) {
        let [i, a, c] = Bo[r];
        this.v
          .copy(r === 0 ? e : t)
          .applyMatrix4(this.m)
          .sub(n.restPos[i]);
        let l = Math.hypot(this.v.y, this.v.z),
          u = Math.atan2(this.v.x, Math.max(0.01, l)),
          d = Ts(
            Math.hypot(l, this.v.x),
            Math.abs(o - s) + 0.01,
            o + s - 0.002,
          ),
          f = Math.atan2(-this.v.z, -this.v.y),
          p = Math.acos(Ts((o * o + d * d - s * s) / (2 * o * d), -1, 1)),
          m = Math.acos(Ts((o * o + s * s - d * d) / (2 * o * s), -1, 1));
        (this.set(i, f + p, 0, u),
          this.set(a, -(Math.PI - m)),
          this.set(c, -0.6));
      }
    }
    poseDown() {
      let e = this.dog.dims,
        t = 1.45;
      (this.set(J.root, 0, 0, t),
        this.rootTgt.set(
          -e.cy * Math.sin(t) * 0.15,
          e.bodyW * 1.05 - e.cy * Math.cos(t),
          0,
        ));
      for (let e = 0; e < 4; e++)
        (this.set(Bo[e][0], e < 2 ? 0.35 : -0.3, 0, 0),
          this.set(Bo[e][1], e < 2 ? -0.3 : 0.25));
      (this.add(J.head, 0.1, 0, -0.2),
        this.add(J.earL0, 0.6),
        this.add(J.earR0, 0.6),
        this.add(J.jaw, -0.18));
    }
    poseBusted() {
      let e = this.dog.dims;
      (this.add(J.hips, 0.62), this.add(J.chest, -0.12));
      for (let e of [2, 3])
        (this.set(Bo[e][0], 0.65),
          this.set(Bo[e][1], -2),
          this.set(Bo[e][2], 0.73));
      for (let e of [0, 1]) this.set(Bo[e][0], -0.5);
      (this.add(J.neck, -0.3),
        this.add(J.head, -0.55),
        this.add(J.earL0, 1.1, 0, 0.3),
        this.add(J.earR0, 1.1, 0, -0.3),
        this.add(J.tail0, 0.6),
        (this.rootTgt.y -= e.legLen * 0.32),
        (this.rootTgt.z -= e.bodyL * 0.2));
    }
  },
  Ds = 6,
  Os = 4,
  ks = 12,
  As = 240,
  js = 45,
  Ms = 4,
  Ns = 30,
  Ps = 0.95,
  Fs = new Set([`sidewalk`, `plaza`, `park`]),
  Is = [
    { zh: `好吃！汪！`, en: `Yum! Woof!` },
    { zh: `飼料好香～`, en: `Crunchy kibble~` },
    { zh: `吃飽飽！`, en: `Full belly!` },
  ],
  Ls = { zh: `噗嚕～ 狗狗突然大便了`, en: `Oops — the dog had to go` },
  Rs = { zh: `狗飼料`, en: `Dog food` },
  zs = [
    {
      act: `poop`,
      key: `Z`,
      code: `KeyZ`,
      icon: `💩`,
      label: { zh: `大便`, en: `Poop` },
    },
    {
      act: `pee`,
      key: `X`,
      code: `KeyX`,
      icon: `💦`,
      label: { zh: `尿尿`, en: `Pee` },
    },
    {
      act: `bark`,
      key: `B`,
      code: `KeyB`,
      icon: `🐶`,
      label: { zh: `汪汪`, en: `Woof` },
    },
  ],
  Bs = `
.dogbar{position:absolute;left:calc(var(--pad) + var(--sal,0px));bottom:calc(var(--pad) + var(--mm) + 2.6em);display:flex;gap:.5em;opacity:0;visibility:hidden;transform:translateY(.4em);transition:opacity .25s,transform .25s,visibility 0s linear .25s;pointer-events:none;z-index:3}
.dogbar.show{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .25s}
.hud-off .dogbar,.photo .dogbar{opacity:0;visibility:hidden}
.dogbar button{position:relative;width:3.3em;height:3.3em;border-radius:50%;border:2px solid rgba(255,255,255,.45);background:rgba(12,14,20,.5);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.08em;padding:0;font:inherit;cursor:pointer;pointer-events:auto;touch-action:none;box-shadow:0 4px 14px rgba(0,0,0,.25);transition:transform .08s,background .08s,opacity .2s;-webkit-tap-highlight-color:transparent}
.dogbar button i{font-style:normal;font-size:1.35em;line-height:1}
.dogbar button b{font-size:.62em;font-weight:800;line-height:1;white-space:nowrap;text-shadow:0 1px 2px #000}
.dogbar button kbd{position:absolute;right:-.3em;top:-.3em;min-width:1.35em;height:1.35em;border-radius:.4em;background:#f2a33a;color:#1a1208;font:800 .62em/1.35em system-ui,sans-serif;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,.5)}
.dogbar button.off{opacity:.4}
.dogbar button.hit{background:rgba(242,163,58,.7);border-color:#fff;transform:scale(.92)}
body.tr-is-touch .dogbar{top:calc(var(--pad) + var(--sat,0px) + var(--mm) + 24px);bottom:auto;gap:calc(2 * var(--tu))}
body:not(.tr-is-touch):has(.dogbar.show) .hud-feed{bottom:calc(var(--pad) + var(--mm) + 2.6em + 4.2em)}
body.tr-is-touch.tr-portrait:has(.dogbar.show) .hud-feed{top:calc(var(--pad) + var(--sat,0px) + var(--mm) + 6em + calc(13 * var(--tu)))}
body.tr-is-touch .dogbar button{width:calc(11.5 * var(--tu));height:calc(11.5 * var(--tu));font-size:max(11px,calc(3.4 * var(--tu)))}
body.tr-is-touch .dogbar button kbd{display:none}
`,
  Vs = !1;
