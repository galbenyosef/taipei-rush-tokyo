// tokyo/assets/actors-bknSEpf2 36 — math
// Lines 11482-12548 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Vu = class {
    p;
    a;
    b;
    iz;
    bTyre;
    cTyre;
    slideK;
    steerIn = 0;
    delta = 0;
    throttle = 0;
    brake = 0;
    gear = 1;
    rpm = 800;
    shiftT = 0;
    cvtRatio = 0;
    reversing = !1;
    wFront = 0;
    wRear = 0;
    axEff = 0;
    axV = 0;
    ayEff = 0;
    ayV = 0;
    beta = 0;
    slide = [0, 0, 0, 0];
    fz = [0, 0, 0, 0];
    ax = 0;
    ay = 0;
    spin = 0;
    abs = !1;
    esc = !1;
    escCut = 0;
    powerRpm;
    braking = 0;
    burnout = 0;
    drift;
    hbDrift = !1;
    guardT = 0;
    constructor(e) {
      ((this.p = e),
        (this.drift = e.assists.drift ?? null),
        (this.a = e.wheelbase * (1 - e.frontWeight)),
        (this.b = e.wheelbase * e.frontWeight),
        (this.iz =
          (e.inertiaK * e.mass * (e.length * e.length + e.width * e.width)) /
          12),
        (this.cTyre = e.tyre.shape),
        (this.bTyre = Math.tan(Math.PI / (2 * this.cTyre)) / e.tyre.peakSlip),
        (this.slideK = Math.sin((this.cTyre * Math.PI) / 2)),
        (this.rpm = e.engine.idle),
        (this.cvtRatio = e.gearbox.ratios[0]));
      let t = 0,
        n = e.engine.redline * 0.8;
      for (let r = e.engine.idle + 100; r <= e.engine.redline; r += 50) {
        let e = this.engineTorque(r) * r;
        e > t && ((t = e), (n = r));
      }
      this.powerRpm = n;
      let r = Nu * e.mass;
      ((this.fz[0] = this.fz[1] = (r * e.frontWeight) / 2),
        (this.fz[2] = this.fz[3] = (r * (1 - e.frontWeight)) / 2));
    }
    reset() {
      ((this.steerIn = this.delta = this.throttle = this.brake = 0),
        (this.axEff = this.axV = this.ayEff = this.ayV = 0),
        (this.gear = 1),
        (this.shiftT = 0),
        (this.rpm = this.p.engine.idle),
        (this.reversing = !1),
        (this.beta = 0),
        (this.hbDrift = !1),
        (this.guardT = 0));
    }
    lat(e) {
      return Math.sin(this.cTyre * Math.atan(this.bTyre * e));
    }
    mu(e, t, n, r) {
      let i = this.p.tyre,
        a = 1 - i.loadSens * (e / t - 1);
      return i.mu * n * Lu(a, 0.6, 1.25) * (r ? i.rearK : 1);
    }
    engineTorque(e) {
      let t = this.p.engine,
        n = Math.max(1, e / Iu);
      if (t.kind === `ev`) return Math.min(t.torque, (t.power * 1e3) / n);
      let r = t.curve ?? zu[t.kind],
        i = t.torque * Bu(r, e / t.redline);
      return Math.min(i, (t.power * 1e3) / n);
    }
    ratio() {
      let e = this.p.gearbox;
      return this.reversing
        ? e.reverse * e.final
        : e.kind === `cvt`
          ? this.cvtRatio * e.final
          : e.ratios[Math.min(e.ratios.length, Math.max(1, this.gear)) - 1] *
            e.final;
    }
    get gears() {
      let e = this.p.gearbox;
      return e.kind === `cvt` || e.kind === `single` ? 1 : e.ratios.length;
    }
    step(e, t, n, r) {
      let i = this.p,
        a = i.mass,
        o = i.wheelbase,
        s = this.a,
        c = this.b,
        l = e.vx,
        u = e.vy,
        d = e.r,
        f = Math.hypot(l, u),
        p = Math.abs(l),
        m = n.dead,
        h = m || t.hold ? 0 : Lu(t.throttle, 0, 1),
        g = m ? 0 : t.hold ? 1 : Lu(t.brake, 0, 1),
        _ = t.digital,
        v = Ru(40, h > this.throttle ? 4 : 8, _);
      ((this.throttle += Lu(h - this.throttle, -v * r, v * r)),
        !t.hold && !m
          ? this.reversing
            ? h > 0.05 && l > -0.8 && (this.reversing = !1)
            : g > 0.3 &&
              h < 0.05 &&
              l < 0.5 &&
              l > -0.5 &&
              !t.handbrake &&
              (this.reversing = !0)
          : (this.reversing = !1));
      let y = this.reversing ? g : h,
        b = this.reversing ? h : g,
        x = Ru(60, b > this.brake ? 11 : 16, _);
      this.brake += Lu(b - this.brake, -x * r, x * r);
      let S = this.reversing ? Lu(y, 0, 1) : this.throttle,
        C = this.brake,
        w = Lu(t.steer, -1, 1);
      if (_ > 0) {
        let e = Lu(p / 33, 0, 1),
          t =
            Ru(i.steer.rateLow, i.steer.rateHigh, e) *
            (Math.abs(w) < Math.abs(this.steerIn) || w * this.steerIn < 0
              ? 1.7
              : 1);
        this.steerIn += Lu(w - this.steerIn, -t * r, t * r);
      } else this.steerIn += (w - this.steerIn) * Math.min(1, r * 40);
      let T = i.tyre.mu * n.mu,
        E = (o * T * i.tyre.latK * Nu) / Math.max(1, p * p),
        D = Math.atan(E) + i.tyre.peakSlip * i.steer.limitK,
        O = Math.min(i.steer.lock, D),
        k = this.steerIn * O,
        A =
          f > 1.5
            ? Math.atan2(u, Math.max(Math.abs(l), 0.5)) * Math.sign(l || 1)
            : 0;
      this.beta = A;
      let j = t.ai ? 1 : i.assists.countersteer * _;
      if (j > 0 && l > 3 && !n.airborne) {
        let e = Math.abs(A) - 0.06;
        if (e > 0) {
          let t = Lu(A * 0.85, -i.steer.lock * 0.7, i.steer.lock * 0.7),
            n = j * Lu(e / 0.12, 0, 1);
          (Math.sign(t) !== Math.sign(k) || Math.abs(t) > Math.abs(k)) &&
            (k = Ru(k, t + k * 0.35, n));
        }
      }
      this.delta = k;
      let M = i.aero.downforce * l * l,
        N = a * Nu * i.frontWeight + M * i.frontWeight,
        ee = a * Nu * (1 - i.frontWeight) + M * (1 - i.frontWeight),
        P = Math.cos(n.slope),
        F = (a * this.axEff * i.cgH) / o,
        I = (a * this.ayEff * i.cgH * i.susp.rollFront) / i.trackF,
        te = (a * this.ayEff * i.cgH * (1 - i.susp.rollFront)) / i.trackR,
        ne = this.fz,
        re = 0.02 * a * Nu;
      ((ne[0] = Math.max(re, (N * P - F) / 2 + I / 2)),
        (ne[1] = Math.max(re, (N * P - F) / 2 - I / 2)),
        (ne[2] = Math.max(re, (ee * P + F) / 2 + te / 2)),
        (ne[3] = Math.max(re, (ee * P + F) / 2 - te / 2)),
        n.airborne && (ne[0] = ne[1] = ne[2] = ne[3] = 0));
      let ie = (a * Nu * i.frontWeight) / 2,
        ae = (a * Nu * (1 - i.frontWeight)) / 2,
        L = n.mu,
        R = this.mu(ne[0], ie, L, !1),
        oe = this.mu(ne[1], ie, L, !1),
        se = this.mu(ne[2], ae, L, !0),
        ce = this.mu(ne[3], ae, L, !0),
        le = R * ne[0] + oe * ne[1],
        ue = se * ne[2] + ce * ne[3],
        z = i.gearbox,
        de = i.engine,
        fe = l / i.wheelR,
        pe = 0,
        me = 0;
      if (((this.burnout = 0), m))
        this.rpm += (0 - this.rpm) * Math.min(1, r * 3);
      else {
        if (!this.reversing && (z.kind === `auto` || z.kind === `dct`))
          this.autoShift(Math.abs(fe), S, r);
        else if (z.kind === `cvt` && !this.reversing) {
          let e = Lu(
            Ru(de.idle * 1.35, this.powerRpm, S ** 0.75) /
              (Math.max(0.5, Math.abs(fe)) * Iu * z.final),
            z.ratios[1],
            z.ratios[0],
          );
          ((this.cvtRatio += (e - this.cvtRatio) * Math.min(1, r * 6)),
            (this.gear = 1));
        } else this.gear = 1;
        this.shiftT > 0 && (this.shiftT -= r);
        let e = this.ratio(),
          n = Math.abs(fe) * Iu,
          o =
            de.kind === `ev`
              ? 0
              : z.kind === `auto`
                ? Ru(de.idle, Math.min(de.redline * 0.42, 2600), S)
                : z.kind === `cvt`
                  ? Ru(de.idle, this.powerRpm * 0.8, S)
                  : Ru(de.idle, de.redline * 0.36, S),
          s = n * e,
          c = Math.max(
            s,
            de.kind === `ev` ? 0 : o,
            de.kind === `ev` ? 0 : de.idle,
          );
        this.burnoutWanted(S, C, t, p) && (c = de.redline * 0.88);
        let u =
          c >= de.redline * 1.02 ||
          (i.limiter > 0 && l > i.limiter && !this.reversing);
        ((this.rpm +=
          (c - this.rpm) * Math.min(1, r * (this.shiftT > 0 ? 18 : 12))),
          de.kind === `ev` && (this.rpm = s));
        let d = this.engineTorque(
            Math.max(this.rpm, de.kind === `ev` ? 1 : de.idle),
          ),
          f =
            z.kind === `auto` && c > s + 50
              ? 1 + 0.9 * Lu(1 - s / Math.max(1, c), 0, 1)
              : 1,
          m = this.shiftT > 0 ? (z.kind === `dct` ? 0.8 : 0.5) : 1,
          h = S * d * e * 0.9 * f * m * (1 - this.escCut);
        ((u || this.burnout > 0) && (h = 0),
          this.reversing && l < -i.reverseMax && (h = 0),
          (pe = (h / i.wheelR) * (this.reversing ? -1 : 1)),
          S < 0.05 &&
            p > 0.5 &&
            (me =
              ((i.regenG > 0 ? i.regenG * a * Nu * Lu(p / 5, 0, 1) : 0) +
                (de.kind === `ev`
                  ? 0
                  : (de.torque *
                      (0.05 + 0.1 * Lu(this.rpm / de.redline, 0, 1)) *
                      e *
                      0.9) /
                    i.wheelR)) *
              (1 - S / 0.05) *
              Math.sign(l)));
      }
      let he = C;
      this.braking = l > 0.3 || this.reversing ? he : 0;
      let B = 0,
        ge = 0;
      if (((this.abs = !1), he > 0.001 && p > 0.05)) {
        let e = he * i.brake.maxG * a * Nu,
          t = le / Math.max(1, le + ue);
        ((B = e * Math.max(Math.min(i.brake.bias, t + 0.04), t)), (ge = e - B));
        let n =
          Ru(
            0.97,
            0.72,
            Math.abs(this.steerIn) > 0.2 && p > 4
              ? Lu((Math.abs(this.steerIn) - 0.2) / 0.5, 0, 1)
              : 0,
          ) * i.brake.gripK;
        (B > n * le && ((B = n * le), (this.abs = !0)),
          ge > n * ue && ((ge = n * ue), (this.abs = !0)));
      }
      let _e = t.handbrake && !m,
        V = Math.cos(k),
        ve = Math.sin(k),
        ye = u + s * d,
        be = u - c * d,
        xe = l * V + ye * ve,
        Se = -l * ve + ye * V,
        Ce = 3.5,
        we = Math.atan2(Se, Math.max(Math.abs(xe), Ce)),
        Te = Math.atan2(be, Math.max(p, Ce)),
        Ee = 0,
        De = 0,
        Oe = i.drive === `fwd` ? 1 : i.drive === `rwd` ? 0 : i.awdFront,
        ke = Math.sign(xe || l || 1);
      ((Ee = pe * Oe - ke * B - me * Oe),
        (De = pe * (1 - Oe) - Math.sign(l || 1) * ge - me * (1 - Oe)),
        (this.spin = 0));
      let Ae = i.assists.tc,
        je = this.drivenSpin(Ee, le, Oe, Ae, pe),
        Me = this.drivenSpin(De, ue, 1 - Oe, Ae, pe);
      if (Ae <= 1) {
        let e = Math.abs(this.lat(we)) * 0.85,
          t = Math.abs(this.lat(Te)) * 0.85;
        (Oe > 0 &&
          pe * Ee > 0 &&
          (Ee =
            Math.sign(Ee) *
            Math.min(Math.abs(Ee), le * Math.sqrt(Math.max(0.12, 1 - e * e)))),
          Oe < 1 &&
            pe * De > 0 &&
            (De =
              Math.sign(De) *
              Math.min(
                Math.abs(De),
                ue * Math.sqrt(Math.max(0.12, 1 - t * t)),
              )));
      }
      (je > 0 &&
        (Ee =
          Math.sign(Ee) * Math.min(Math.abs(Ee), le * Ru(1, this.slideK, je))),
        Me > 0 &&
          (De =
            Math.sign(De) *
            Math.min(Math.abs(De), ue * Ru(1, this.slideK, Me))),
        (this.spin = Math.max(je, Me)),
        this.burnout > 0 && (this.spin = 1));
      let Ne = B > 0 || ge > 0 ? i.brake.gripK : 1,
        Pe = le * Ne,
        Fe = ue * Ne;
      ((Ee = Lu(Ee, -Pe, Pe)), (De = Lu(De, -Fe, Fe)));
      let Ie = Pe > 1 ? Lu(Math.abs(Ee) / Pe, 0, 1) : 1,
        Le = Fe > 1 ? Lu(Math.abs(De) / Fe, 0, 1) : 1,
        Re = i.tyre.latK,
        ze =
          -le *
          Re *
          this.lat(we) *
          Math.sqrt(Math.max(0, 1 - Ie * Ie)) *
          Ru(1, 0.55, je),
        Be =
          -ue *
          Re *
          i.tyre.rearLat *
          this.lat(Te) *
          Math.sqrt(Math.max(0, 1 - Le * Le)) *
          Ru(1, 0.4, Me);
      if (_e && !n.airborne) {
        let e = Math.hypot(l, be);
        if (e > 0.3) {
          let t = (se * ne[2] + ce * ne[3]) * this.slideK;
          ((De = (-t * l) / e), (Be = (-t * be) / e));
        } else ((De = 0), (Be = 0));
        i.drive !== `fwd` && (pe *= 0);
      }
      let Ve = (a * c) / o,
        He = (a * s) / o,
        Ue = (Math.abs(Se) * Ve) / r,
        We = (Math.abs(be) * He) / r;
      (Math.abs(ze) > Ue && (ze = Math.sign(ze) * Ue),
        Math.abs(Be) > We && (Be = Math.sign(Be) * We),
        n.airborne && (Ee = De = ze = Be = 0));
      let Ge = Lu(
          (Math.abs(we) - i.tyre.peakSlip * 0.8) / (i.tyre.peakSlip * 1.5),
          0,
          1,
        ),
        Ke = Lu(
          (Math.abs(Te) - i.tyre.peakSlip * 0.8) / (i.tyre.peakSlip * 1.5),
          0,
          1,
        ),
        qe = _e && p > 1 ? 1 : 0;
      ((this.slide[0] = this.slide[1] =
        Math.max(Ge, je, this.abs && Ie > 0.9 ? 0.35 : 0)),
        (this.slide[2] = this.slide[3] =
          Math.max(Ke, Me, qe, this.abs && Le > 0.9 ? 0.35 : 0)));
      let H = Ee * V - ze * ve + De,
        Je = Ee * ve + ze * V + Be,
        Ye = s * (Ee * ve + ze * V) - c * Be;
      this.esc = !1;
      let Xe = 0,
        Ze = t.ai ? Math.min(i.assists.escMargin, 0.1) : i.assists.escMargin,
        Qe = t.ai ? Math.min(i.assists.escBeta, 0.09) : i.assists.escBeta,
        $e = 0;
      if (l > 4 && !n.airborne && !_e && !this.hbDrift) {
        let e = (l * Math.tan(k)) / o,
          t = (T * i.tyre.latK * Nu) / l,
          n = Lu(e, -t, t),
          r = d - n,
          a = Math.abs(r) - Ze;
        isFinite(Ze) &&
          a > 0 &&
          Math.sign(r) === Math.sign(d || r) &&
          ((Xe = Lu(a / 0.25, 0, 1)), ($e = Math.sign(r)));
        let s = A * d < 0 ? Math.abs(A) - Qe : 0;
        if (isFinite(Qe) && s > 0) {
          let e = Lu(s / 0.12, 0, 1);
          e > Xe && ((Xe = e), ($e = Math.sign(d)));
        }
      }
      if (Xe > 0) {
        let e = (t.ai ? 1 : i.assists.escGain) * Xe,
          n = 0.55 * a * Nu * ((i.trackF + i.trackR) / 4);
        ((Ye -= $e * n * e),
          (l -= Math.sign(l) * 0.25 * Nu * e * r),
          (this.esc = !0));
      }
      this.escCut +=
        (Lu(Xe * 1.4, 0, 0.85) - this.escCut) *
        Math.min(1, r * (Xe > this.escCut ? 30 : 4));
      let et = this.drift,
        tt = Math.min(1.25, i.assists.drifty ?? 1),
        nt = !1;
      if (et && tt > 0.2 && !n.airborne && !m) {
        this.hbDrift
          ? ((!_e &&
              (et.bHold <= 0 ||
                (Math.abs(A) < 0.09 && Math.abs(this.steerIn) < 0.15))) ||
              f < 4 ||
              l < 1) &&
            ((this.hbDrift = !1), (this.guardT = Mu))
          : _e &&
            l > 8.5 &&
            Math.abs(this.steerIn) > 0.25 &&
            (this.hbDrift = !0);
        let e = NaN;
        if (this.hbDrift) {
          let t = this.steerIn * A > 0;
          e = -this.steerIn * (_e ? et.bHb : et.bHold) * tt * (t ? 0.3 : 1);
        }
        if (
          ((this.hbDrift || this.guardT > 0) &&
            Math.abs(A) > et.cap &&
            (e = Math.sign(A) * et.cap * 0.85),
          e === e)
        ) {
          let t = Math.max(1, l * l + u * u),
            n = (l * Je - u * H) / (a * t);
          this.hbDrift && (n -= ((et.pull + et.pullThr * S) * (l * u)) / t);
          let r = n - et.gain * (e - A);
          ((Ye = Ru(Ye, this.iz * ju * (r - d), this.hbDrift ? et.w : 1)),
            (nt = this.hbDrift));
        }
      } else this.hbDrift = !1;
      this.guardT > 0 && (this.guardT -= r);
      let rt = 0.5 * Pu * i.aero.cdA * l * Math.abs(l),
        it = (i.crr * Nu + n.roll) * Math.sign(l) * +(p > 0.05) * a,
        U = -9.81 * Math.sin(n.slope) * a,
        at = (H - rt - (n.airborne ? 0 : it) + (n.airborne ? 0 : U)) / a,
        ot = Je / a,
        st = l;
      if (
        ((l += (at + u * d) * r),
        (u += (ot - l * d) * r),
        (d += (Ye / this.iz) * r),
        n.airborne && (d *= 1 - Math.min(1, 0.4 * r)),
        nt)
      ) {
        u -= u * (1 - Math.exp(-(et.pull + et.pullThr * S) * r));
        let e = f - Math.hypot(l, u);
        e > 0 &&
          he < 0.05 &&
          (l += Math.sign(l || 1) * e * (et.carry + et.thrK * S));
      }
      (!(Math.abs(pe) > 1 && Math.sign(pe) === Math.sign(l)) &&
        st !== 0 &&
        Math.sign(l) !== Math.sign(st) &&
        !n.airborne &&
        (l = 0),
        Math.abs(l) < 0.15 &&
          Math.abs(u) < 0.15 &&
          !n.airborne &&
          S < 0.05 &&
          (he > 0.1 || _e || t.hold) &&
          !this.reversing &&
          ((l = 0), (u *= 0.5), (d *= 0.5)),
        f < 0.3 && Math.abs(pe) < 1 && (d *= 1 - Math.min(1, 10 * r)),
        l < -i.reverseMax * 1.1 && (l = -i.reverseMax * 1.1),
        (this.ax = (H - rt) / a),
        (this.ay = ot + 0));
      let ct = Fu * i.susp.freq,
        lt = i.susp.damping,
        ut = n.airborne ? 0 : this.ax,
        dt = n.airborne ? 0 : this.ay;
      ((this.axV += (ct * ct * (ut - this.axEff) - 2 * lt * ct * this.axV) * r),
        (this.axEff += this.axV * r),
        (this.ayV +=
          (ct * ct * (dt - this.ayEff) - 2 * lt * ct * this.ayV) * r),
        (this.ayEff += this.ayV * r),
        (this.wFront = (xe / i.wheelR) * (je > 0 && Oe > 0 ? 1 + je : 1)),
        (this.wRear = _e
          ? 0
          : (l / i.wheelR) *
            (this.burnout > 0 ? 6 : Me > 0 && Oe < 1 ? 1 + 2 * Me : 1)),
        this.burnout > 0 &&
          ((this.wRear = i.drive === `fwd` ? this.wRear : 40),
          i.drive !== `rwd` && (this.wFront = 40)),
        (e.vx = l),
        (e.vy = u),
        (e.r = d));
    }
    burnoutWanted(e, t, n, r) {
      let i = e > 0.3 && (t > 0.3 || n.handbrake) && r < 2.5 && !this.reversing;
      return ((this.burnout = i ? e : 0), i);
    }
    drivenSpin(e, t, n, r, i) {
      if (n <= 0 || i === 0 || t <= 1) return 0;
      let a = Math.abs(i * n);
      if (this.burnout > 0) return 1;
      let o = t * r;
      return a <= t || r <= 1
        ? 0
        : Lu((Math.min(a, o * 1.6) - t) / (t * 0.6), 0, 1);
    }
    autoShift(e, t, n) {
      if (this.shiftT > 0) return;
      let r = this.p.gearbox,
        i = this.p.engine,
        a = r.ratios.length,
        o = (t) => e * Iu * r.ratios[t - 1] * r.final,
        s = Ru(
          Math.max(i.idle * 2.4, i.redline * 0.32),
          i.redline * 0.94,
          t * t,
        ),
        c = Ru(i.idle * 1.45, i.redline * 0.55, t * t * t),
        l = this.gear;
      l < a && o(l) > s
        ? ((this.gear = l + 1), (this.shiftT = r.shiftTime))
        : l > 1 &&
          o(l) < c &&
          o(l - 1) < i.redline * 0.9 &&
          ((this.gear = l - 1), (this.shiftT = r.shiftTime * 0.6));
    }
    get pitch() {
      return (this.axEff / Nu) * this.p.susp.pitchPerG;
    }
    get roll() {
      return -(this.ayEff / Nu) * this.p.susp.rollPerG;
    }
  },
  Hu = Math.PI / 180,
  Uu = { latK: 1.2, lockK: 1.15, lockMax: 45 * Hu },
  Wu = {
    kwPerT: {
      eco: 82,
      family: 82,
      crossover: 82,
      premium: 82,
      ev: 82,
      sport: 82,
      super: 82,
      van: 70,
      truck: 70,
      bus: 30,
    },
    topKmh: {
      eco: 160,
      family: 160,
      crossover: 160,
      premium: 160,
      ev: 160,
      sport: 160,
      super: 160,
      van: 140,
      truck: 130,
      bus: 105,
    },
  },
  Gu = {
    eco: {
      tyre: { mu: 1.02, peakSlip: 7.5 * Hu, shape: 1.35, loadSens: 0.12 },
      rearLat: 1.15,
      cg: 0.37,
      inertiaK: 1,
      freq: 1.3,
      damping: 0.42,
      pitchPerG: 3.2 * Hu,
      rollPerG: 4.8 * Hu,
      rollFront: 0.62,
      steerLow: 5.2,
      steerHigh: 2.3,
      limitK: 1.08,
      tc: 1,
      escMargin: 0.08,
      escGain: 0.9,
      escBeta: 5,
      countersteer: 0.85,
      crr: 0.011,
      brakeG: 1.3,
      bias: 0.66,
      shiftTime: 0.32,
    },
    family: {
      tyre: { mu: 1.06, peakSlip: 7 * Hu, shape: 1.38, loadSens: 0.11 },
      rearLat: 1.15,
      cg: 0.37,
      inertiaK: 1,
      freq: 1.35,
      damping: 0.45,
      pitchPerG: 2.8 * Hu,
      rollPerG: 4.2 * Hu,
      rollFront: 0.6,
      steerLow: 5.4,
      steerHigh: 2.4,
      limitK: 1.1,
      tc: 1,
      escMargin: 0.08,
      escGain: 0.9,
      escBeta: 5,
      countersteer: 0.85,
      crr: 0.011,
      brakeG: 1.35,
      bias: 0.66,
      shiftTime: 0.3,
    },
    crossover: {
      tyre: { mu: 1.04, peakSlip: 7.5 * Hu, shape: 1.36, loadSens: 0.12 },
      rearLat: 1.15,
      cg: 0.385,
      inertiaK: 1.05,
      freq: 1.25,
      damping: 0.42,
      pitchPerG: 3.4 * Hu,
      rollPerG: 5.2 * Hu,
      rollFront: 0.62,
      steerLow: 5,
      steerHigh: 2.2,
      limitK: 1.08,
      tc: 1,
      escMargin: 0.07,
      escGain: 0.95,
      escBeta: 5,
      countersteer: 0.9,
      crr: 0.012,
      brakeG: 1.3,
      bias: 0.67,
      shiftTime: 0.32,
    },
    premium: {
      tyre: { mu: 1.1, peakSlip: 6.5 * Hu, shape: 1.4, loadSens: 0.1 },
      rearLat: 1.12,
      cg: 0.36,
      inertiaK: 1,
      freq: 1.45,
      damping: 0.5,
      pitchPerG: 2.3 * Hu,
      rollPerG: 3.4 * Hu,
      rollFront: 0.56,
      steerLow: 5.8,
      steerHigh: 2.6,
      limitK: 1.12,
      tc: 1,
      escMargin: 0.12,
      escGain: 0.85,
      escBeta: 8,
      countersteer: 0.75,
      crr: 0.01,
      brakeG: 1.4,
      bias: 0.64,
      shiftTime: 0.22,
    },
    ev: {
      tyre: { mu: 1.08, peakSlip: 6.8 * Hu, shape: 1.4, loadSens: 0.1 },
      rearLat: 1.12,
      cg: 0.31,
      inertiaK: 0.95,
      freq: 1.5,
      damping: 0.5,
      pitchPerG: 2 * Hu,
      rollPerG: 3 * Hu,
      rollFront: 0.55,
      steerLow: 5.8,
      steerHigh: 2.6,
      limitK: 1.1,
      tc: 1,
      escMargin: 0.1,
      escGain: 0.9,
      escBeta: 7,
      countersteer: 0.8,
      crr: 0.009,
      brakeG: 1.4,
      bias: 0.62,
      shiftTime: 0,
    },
    sport: {
      tyre: { mu: 1.16, peakSlip: 6 * Hu, shape: 1.45, loadSens: 0.09 },
      rearLat: 1.06,
      cg: 0.34,
      inertiaK: 0.95,
      freq: 1.8,
      damping: 0.55,
      pitchPerG: 1.6 * Hu,
      rollPerG: 2.2 * Hu,
      rollFront: 0.52,
      steerLow: 6.6,
      steerHigh: 3,
      limitK: 1.16,
      tc: 1.25,
      escMargin: 0.35,
      escGain: 0.7,
      escBeta: 20,
      countersteer: 0.6,
      crr: 0.011,
      brakeG: 1.5,
      bias: 0.6,
      shiftTime: 0.15,
    },
    super: {
      tyre: { mu: 1.26, peakSlip: 5.5 * Hu, shape: 1.5, loadSens: 0.08 },
      rearLat: 1.08,
      cg: 0.34,
      inertiaK: 0.92,
      freq: 2,
      damping: 0.6,
      pitchPerG: 1.2 * Hu,
      rollPerG: 1.7 * Hu,
      rollFront: 0.52,
      steerLow: 6.8,
      steerHigh: 3.2,
      limitK: 1.15,
      tc: 1.12,
      escMargin: 0.22,
      escGain: 0.8,
      escBeta: 14,
      countersteer: 0.6,
      crr: 0.012,
      brakeG: 1.6,
      bias: 0.58,
      shiftTime: 0.08,
    },
    van: {
      tyre: { mu: 0.95, peakSlip: 8 * Hu, shape: 1.3, loadSens: 0.14 },
      rearLat: 1.18,
      cg: 0.4,
      inertiaK: 1.1,
      freq: 1.2,
      damping: 0.38,
      pitchPerG: 3.8 * Hu,
      rollPerG: 6 * Hu,
      rollFront: 0.62,
      steerLow: 4.4,
      steerHigh: 1.9,
      limitK: 1.05,
      tc: 1,
      escMargin: 0.06,
      escGain: 1,
      escBeta: 4.5,
      countersteer: 0.9,
      crr: 0.013,
      brakeG: 1.2,
      bias: 0.68,
      shiftTime: 0.38,
    },
    truck: {
      tyre: { mu: 0.92, peakSlip: 8.5 * Hu, shape: 1.28, loadSens: 0.15 },
      rearLat: 1.18,
      cg: 0.38,
      inertiaK: 1.1,
      freq: 1.15,
      damping: 0.35,
      pitchPerG: 4.2 * Hu,
      rollPerG: 6.5 * Hu,
      rollFront: 0.62,
      steerLow: 4.2,
      steerHigh: 1.8,
      limitK: 1.05,
      tc: 1,
      escMargin: 0.1,
      escGain: 0.9,
      escBeta: 4.5,
      countersteer: 0.85,
      crr: 0.014,
      brakeG: 1.15,
      bias: 0.62,
      shiftTime: 0.4,
    },
    bus: {
      tyre: { mu: 0.82, peakSlip: 8.5 * Hu, shape: 1.25, loadSens: 0.15 },
      rearLat: 1.15,
      cg: 0.36,
      inertiaK: 1.15,
      freq: 1,
      damping: 0.35,
      pitchPerG: 3 * Hu,
      rollPerG: 5 * Hu,
      rollFront: 0.58,
      steerLow: 2.8,
      steerHigh: 1.4,
      limitK: 1.05,
      tc: 1,
      escMargin: 0.05,
      escGain: 1,
      escBeta: 4,
      countersteer: 0.9,
      crr: 0.009,
      brakeG: 0.95,
      bias: 0.6,
      shiftTime: 0.45,
    },
  },
  Ku = {
    sedan: {
      id: `toyoba-altas`,
      real: `Toyota Corolla Altis 1.8 (E210, 2019–)`,
      cls: `family`,
      specs: {
        length: 4.63,
        width: 1.78,
        height: 1.435,
        wheelbase: 2.7,
        trackF: 1.531,
        trackR: 1.544,
        overhangF: 0.935,
        tyre: `205/55R16`,
        mass: 1300,
        drive: `fwd`,
        engine: { kind: `na`, kw: 103, nm: 173, redline: 6400 },
        gearbox: { kind: `cvt`, ratios: [2.48, 0.4], final: 5.2 },
        turningCircle: 10.4,
        cdA: 0.6,
        limiterKmh: 190,
        ref0to100: 10.5,
        ref100to0: 39,
      },
    },
    taxi: {
      id: `toyoba-altas-taxi`,
      real: `Toyota Corolla Altis — taxi`,
      cls: `family`,
      specs: {
        length: 4.63,
        width: 1.78,
        height: 1.435,
        wheelbase: 2.7,
        trackF: 1.531,
        trackR: 1.544,
        overhangF: 0.935,
        tyre: `205/55R16`,
        mass: 1300,
        drive: `fwd`,
        engine: { kind: `na`, kw: 103, nm: 173, redline: 6400 },
        gearbox: { kind: `cvt`, ratios: [2.48, 0.4], final: 5.2 },
        turningCircle: 10.4,
        cdA: 0.6,
        limiterKmh: 190,
        ref0to100: 10.5,
        ref100to0: 39,
      },
    },
    police: {
      id: `toyoba-altas-police`,
      real: `Toyota Corolla Altis — patrol car (pursuit tune)`,
      cls: `premium`,
      specs: {
        length: 4.63,
        width: 1.78,
        height: 1.435,
        wheelbase: 2.7,
        trackF: 1.531,
        trackR: 1.544,
        overhangF: 0.935,
        tyre: `225/45R17`,
        mass: 1340,
        drive: `fwd`,
        engine: { kind: `turbo`, kw: 165, nm: 330, redline: 6500 },
        gearbox: {
          kind: `dct`,
          ratios: [3.54, 2.13, 1.43, 1.07, 0.84, 0.67, 0.56],
          final: 3.9,
        },
        turningCircle: 10.4,
        cdA: 0.62,
        limiterKmh: 220,
        ref0to100: 6.8,
        ref100to0: 35,
      },
      tune: { mu: 1.14 },
    },
    suv: {
      id: `toyoba-rav5`,
      real: `Toyota RAV4 Hybrid AWD (XA50, 2019–)`,
      cls: `crossover`,
      specs: {
        length: 4.6,
        width: 1.855,
        height: 1.685,
        wheelbase: 2.69,
        trackF: 1.605,
        trackR: 1.625,
        overhangF: 0.925,
        tyre: `225/60R18`,
        mass: 1690,
        drive: `awd`,
        awdFront: 0.7,
        engine: { kind: `hybrid`, kw: 163, nm: 300, redline: 5700 },
        gearbox: { kind: `cvt`, ratios: [3.3, 0.5], final: 3.6 },
        turningCircle: 11,
        cdA: 0.86,
        limiterKmh: 180,
        ref0to100: 8.1,
        ref100to0: 39,
      },
    },
    van: {
      id: `toyoba-high-space`,
      real: `Toyota Hiace (H200) — delivery van`,
      cls: `van`,
      specs: {
        length: 4.695,
        width: 1.695,
        height: 1.98,
        wheelbase: 2.57,
        trackF: 1.475,
        trackR: 1.46,
        overhangF: 0.95,
        tyre: `195/80R15`,
        mass: 1900,
        drive: `rwd`,
        frontWeight: 0.55,
        engine: { kind: `na`, kw: 111, nm: 241, redline: 5200 },
        gearbox: {
          kind: `auto`,
          ratios: [3.6, 2.09, 1.49, 1, 0.69, 0.58],
          final: 4.3,
        },
        turningCircle: 10,
        cdA: 1.18,
        limiterKmh: 160,
        ref0to100: 14,
        ref100to0: 44,
      },
    },
    ambulance: {
      id: `toyoba-high-space-ambulance`,
      real: `Toyota Hiace (H300 high roof) — ambulance`,
      cls: `van`,
      specs: {
        length: 5.915,
        width: 1.95,
        height: 2.54,
        wheelbase: 3.86,
        trackF: 1.67,
        trackR: 1.67,
        overhangF: 0.91,
        tyre: `215/70R16`,
        mass: 3e3,
        drive: `rwd`,
        frontWeight: 0.5,
        engine: { kind: `diesel`, kw: 130, nm: 420, redline: 4e3 },
        gearbox: {
          kind: `auto`,
          ratios: [3.6, 2.09, 1.49, 1, 0.69, 0.58],
          final: 3.9,
        },
        turningCircle: 13,
        cdA: 1.7,
        limiterKmh: 150,
        ref0to100: 15,
        ref100to0: 46,
      },
    },
    bus: {
      id: `chengyun-ecity-12`,
      real: `12 m low-floor electric city bus`,
      cls: `bus`,
      specs: {
        length: 12,
        width: 2.5,
        height: 3.3,
        wheelbase: 6.1,
        trackF: 2.1,
        trackR: 1.85,
        overhangF: 2.6,
        tyre: `275/70R22.5`,
        mass: 13500,
        drive: `rwd`,
        frontWeight: 0.35,
        engine: { kind: `ev`, kw: 250, nm: 2600, redline: 6e3 },
        gearbox: { kind: `single`, ratios: [6.2], final: 1 },
        turningCircle: 23,
        cdA: 4.9,
        limiterKmh: 70,
      },
    },
    garbage: {
      id: `fino-compactor`,
      real: `Hino 500-class rear-loader compactor`,
      cls: `bus`,
      specs: {
        length: 7.6,
        width: 2.29,
        height: 3.05,
        wheelbase: 4.2,
        trackF: 1.8,
        trackR: 1.65,
        overhangF: 1.25,
        tyre: `245/70R19.5`,
        mass: 10500,
        drive: `rwd`,
        frontWeight: 0.42,
        engine: { kind: `diesel`, kw: 140, nm: 600, redline: 2800 },
        gearbox: {
          kind: `auto`,
          ratios: [6.1, 3.5, 2.2, 1.4, 1, 0.75],
          final: 4.9,
        },
        turningCircle: 15.5,
        cdA: 5.25,
        limiterKmh: 90,
      },
    },
    sports: {
      id: `stuttga-9x1`,
      real: `Porsche 911 Carrera (992, 2019–)`,
      cls: `super`,
      specs: {
        length: 4.519,
        width: 1.852,
        height: 1.298,
        wheelbase: 2.45,
        trackF: 1.589,
        trackR: 1.557,
        overhangF: 1.03,
        tyre: `235/40R19`,
        tyreR: `295/35R20`,
        mass: 1505,
        drive: `rwd`,
        frontWeight: 0.39,
        engine: { kind: `turbo`, kw: 283, nm: 450, redline: 7500 },
        gearbox: {
          kind: `dct`,
          ratios: [4.89, 3.17, 2.15, 1.56, 1.18, 0.94, 0.76, 0.61],
          final: 3.59,
        },
        turningCircle: 11.2,
        cdA: 0.6,
        ref0to100: 4.2,
        ref100to0: 31,
      },
      tune: { downforce: 0.18 },
    },
    truck: {
      id: `toyoba-tone-ace-truck`,
      real: `Toyota Town Ace Truck (S402, 2022 Taiwan) — the 發財車`,
      cls: `truck`,
      specs: {
        length: 4.295,
        width: 1.675,
        height: 1.89,
        wheelbase: 2.65,
        trackF: 1.44,
        trackR: 1.425,
        overhangF: 0.62,
        tyre: `185R14C`,
        mass: 1180,
        drive: `rwd`,
        frontWeight: 0.58,
        engine: { kind: `na`, kw: 71, nm: 134, redline: 6e3 },
        gearbox: { kind: `auto`, ratios: [2.73, 1.53, 1, 0.7], final: 5.12 },
        turningCircle: 9.4,
        cdA: 1.25,
        limiterKmh: 140,
        ref0to100: 16.5,
        ref100to0: 46,
      },
    },
  },
  qu = 9.81;
