// tokyo/assets/audio-DzcbodvB 21 — gain
// Lines 7951-10468 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
var $n = class extends Gn {
    kind;
    cfg;
    main;
    am;
    sub;
    lope;
    lopeG;
    amDepth;
    noiseG;
    pre;
    lp;
    road;
    roadLp;
    turbo = null;
    turboG = null;
    whine = null;
    l = {
      f: Z(),
      det: Z(),
      pre: Z(),
      lp: Z(),
      noise: Z(),
      road: Z(),
      roadF: Z(),
      vol: Z(),
      lope: Z(),
      turbo: Z(),
      turboG: Z(),
      whine: Z(),
    };
    lastThr = 0;
    lastRpm = 0;
    extra = [];
    popCool = 0;
    popG = null;
    fParam = null;
    dParam = null;
    constructor(e, t) {
      (super(e), (this.kind = t), (this.cfg = Kn[t]));
    }
    onUnpark() {
      ((this.lastThr = 0), (this.popCool = 0.5));
    }
    start(e) {
      let t = this.host.bank.get(`noise/white`),
        n = this.host.bank.get(`noise/pink`);
      if (!t || !n) return !1;
      let r = this.host.ac,
        i = this.cfg;
      this.poolable = !0;
      let a = this.gain(0.3, this.out),
        o = this.filt(`highpass`, 28, 0.7, a);
      this.lp = this.filt(`lowpass`, i.lp0, 0.9, o);
      let s = this.filt(
          `peaking`,
          i.res[1][0],
          i.res[1][1],
          this.lp,
          i.res[1][2],
        ),
        c = this.filt(`peaking`, i.res[0][0], i.res[0][1], s, i.res[0][2]),
        l = r.createWaveShaper();
      ((l.curve = Xn(i.drive)),
        (l.oversample = this.host.quality === `low` ? `none` : `2x`),
        l.connect(c),
        this.nodeCount++,
        (this.pre = this.gain(0.7, l)));
      let u = this.firing(e.params.rpm ?? 0);
      if (
        ((this.main = this.osc(
          Jn(r, i.duty, this.kind),
          u,
          this.gain(0.9, this.pre),
        )),
        (this.sub = this.osc(`triangle`, u * 0.5, this.gain(i.sub, this.pre))),
        e.params.swarm)
      )
        for (let [e, t, n] of [
          [-38, 1.7, 30],
          [27, 3.9, 22],
          [61, 2.3, 35],
          [-70, 0.9, 40],
        ]) {
          let a = this.osc(
            Jn(r, i.duty, this.kind),
            u * (1 + e / 1731),
            this.gain(0.55, this.pre),
          );
          (this.osc(`sine`, t + Math.random(), this.gain(n, a.detune)),
            this.extra.push({ o: a, ratio: 1 + e / 1731 }));
        }
      this.noiseG = this.gain(0, this.pre);
      let d = this.gain(0.25, this.noiseG),
        f = this.filt(`bandpass`, i.noiseF, 0.8, d),
        p = this.src(t, !0, Math.random() * 1.5);
      if (
        (p.connect(f),
        (this.kind === `sports` ||
          this.kind === `scooter` ||
          this.kind === `moto`) &&
          ((this.popG = this.gain(0, this.out)),
          p.connect(
            this.filt(
              `bandpass`,
              this.kind === `sports` ? 700 : this.kind === `moto` ? 900 : 1100,
              1.2,
              this.popG,
            ),
          )),
        (this.am = this.osc(
          `sawtooth`,
          u,
          (this.amDepth = this.gain(0.3, d.gain)),
        )),
        (this.lope = this.osc(
          `sine`,
          2.7 + Math.random(),
          (this.lopeG = this.gain(i.lope, this.main.detune)),
        )),
        this.lopeG.connect(this.am.detune),
        this.lopeG.connect(this.sub.detune),
        typeof r.createConstantSource == `function`)
      ) {
        let e = r.createConstantSource();
        ((e.offset.value = u),
          e.connect(this.main.frequency),
          e.connect(this.am.frequency),
          e.connect(this.gain(0.5, this.sub.frequency)),
          (this.main.frequency.value = 0),
          (this.am.frequency.value = 0),
          (this.sub.frequency.value = 0));
        for (let t of this.extra)
          (e.connect(this.gain(t.ratio, t.o.frequency)),
            (t.o.frequency.value = 0));
        let t = r.createConstantSource();
        ((t.offset.value = 0),
          t.connect(this.main.detune),
          t.connect(this.am.detune),
          t.connect(this.sub.detune),
          e.start(),
          t.start(),
          this.nodes.push(e, t),
          (this.nodeCount += 2),
          (this.fParam = e.offset),
          (this.dParam = t.offset));
      }
      return (
        (this.road = this.gain(0, this.out)),
        (this.roadLp = this.filt(`lowpass`, 300, 0.7, this.road)),
        this.src(n, !0, Math.random() * 1.5).connect(this.roadLp),
        i.turbo &&
          ((this.turboG = this.gain(0, this.out)),
          (this.turbo = this.osc(`sine`, 2400, this.turboG))),
        i.whine &&
          (this.whine = this.osc(`sine`, 900, this.gain(i.whine, this.out))),
        (this.started = !0),
        this.apply(e, 0),
        this.fadeTo(e.vol * i.vol, 0.05),
        !0
      );
    }
    firing(e) {
      let t = this.cfg;
      return (((t.idle + (t.max - t.idle) * J(e, 0, 1.15)) / 60) * t.cyl) / 2;
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.cfg,
        i = this.l,
        a = J(e.params.rpm ?? (e.rate - 1) * 0.8, 0, 1.15),
        o = J(e.params.load ?? 0, 0, 1),
        s = J((e.params.throttle ?? 0.3) + o * 0.3, 0, 1),
        c = this.firing(a);
      if (this.fParam) X(this.fParam, c, i.f, n, 0.045);
      else {
        let e = i.f.v;
        if ((X(this.main.frequency, c, i.f, n, 0.045), i.f.v !== e)) {
          (this.am.frequency.setTargetAtTime(c, n, 0.045),
            this.sub.frequency.setTargetAtTime(c * 0.5, n, 0.045));
          for (let e of this.extra)
            e.o.frequency.setTargetAtTime(
              c * e.ratio,
              n,
              0.06 + e.ratio * 0.02,
            );
        }
      }
      let l = 1200 * Math.log2(J(e.doppler, 0.5, 2));
      ((Math.abs(l - i.det.v) > Un || Number.isNaN(i.det.v)) &&
        ((i.det.v = l),
        this.dParam
          ? this.dParam.setTargetAtTime(l, n, 0.05)
          : (this.main.detune.setTargetAtTime(l, n, 0.05),
            this.am.detune.setTargetAtTime(l, n, 0.05),
            this.sub.detune.setTargetAtTime(l, n, 0.05))),
        X(this.pre.gain, 0.45 + 1.3 * s, i.pre, n, 0.05, 0.03),
        X(
          this.lp.frequency,
          this.hz(r.lp0 + r.lpT * (0.35 * a + 0.65 * s)),
          i.lp,
          n,
          0.05,
          0.04,
        ),
        X(
          this.noiseG.gain,
          r.noise * (0.25 + 0.75 * s),
          i.noise,
          n,
          0.05,
          0.03,
        ),
        X(this.lopeG.gain, r.lope * (1 - 0.8 * a), i.lope, n, 0.2, 0.05));
      let u = Vn(e),
        d = J(this.host.wet ?? 0, 0, 1);
      (X(
        this.road.gain,
        J(u / 30, 0, 1) * (0.35 + 0.45 * d),
        i.road,
        n,
        0.1,
        0.04,
      ),
        X(
          this.roadLp.frequency,
          this.hz((180 + u * 28) * (1 + 5 * d)),
          i.roadF,
          n,
          0.1,
          0.05,
        ),
        this.turbo &&
          this.turboG &&
          (X(
            this.turbo.frequency,
            this.hz(1800 + 3800 * a),
            i.turbo,
            n,
            0.1,
            0.02,
          ),
          X(this.turboG.gain, (r.turbo ?? 0) * s * a, i.turboG, n, 0.15, 0.03)),
        this.whine &&
          X(this.whine.frequency, this.hz(500 + 55 * u), i.whine, n, 0.1, 0.02),
        X(
          this.out.gain,
          e.vol * r.vol * (0.75 + 0.25 * s),
          i.vol,
          n,
          0.05,
          0.02,
        ),
        (this.popCool -= t),
        this.popG &&
          this.lastThr > 0.7 &&
          s < 0.15 &&
          a > 0.5 &&
          this.popCool <= 0 &&
          (this.pops(3 + Math.floor(Math.random() * 4)), (this.popCool = 1.5)),
        (this.lastThr = s),
        (this.lastRpm = a));
    }
    pops(e) {
      let t = this.popG;
      if (!t) return;
      let n = this.host.ac.currentTime;
      Y(t.gain, n);
      let r = n + 0.05;
      for (let n = 0; n < e; n++)
        (t.gain.setValueAtTime(0, r),
          t.gain.linearRampToValueAtTime(
            1.6 * (0.5 + Math.random() * 0.5),
            r + 0.002,
          ),
          t.gain.setTargetAtTime(0, r + 0.003, 0.012),
          (r += 0.06 + Math.random() * 0.09));
    }
  },
  er = class extends Gn {
    ambulance;
    a;
    b;
    nextT = 0;
    phase = 0;
    mode = -1;
    l = { det: Z(), vol: Z() };
    constructor(e, t) {
      (super(e), (this.ambulance = t), (this.poolable = !0));
    }
    onUnpark() {
      this.mode = -1;
    }
    start(e) {
      let t = this.host.ac,
        n = this.filt(`highpass`, 380, 0.7, this.gain(0.34, this.out)),
        r = this.filt(`peaking`, 1350, 0.9, n, 6),
        i = this.filt(`lowpass`, 4200, 0.7, r),
        a = t.createWaveShaper();
      ((a.curve = Xn(2.2)), a.connect(i), this.nodeCount++);
      let o = this.gain(0.5, a);
      return (
        (this.a = this.osc(`square`, 800, o)),
        (this.b = this.osc(`sawtooth`, 800, this.gain(0.35, o))),
        (this.b.detune.value = 9),
        (this.started = !0),
        (this.nextT = t.currentTime),
        this.apply(e, 0),
        this.fadeTo(e.vol * 0.55, 0.08),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = Math.round(e.params.mode ?? (this.ambulance ? 2 : 0));
      for (
        r !== this.mode &&
        ((this.mode = r),
        Y(this.a.frequency, n),
        Y(this.b.frequency, n),
        (this.nextT = n),
        (this.phase = 0));
        this.nextT < n + 0.35;
      )
        this.segment();
      let i = 1200 * Math.log2(J(e.doppler, 0.5, 2));
      ((Math.abs(i - this.l.det.v) > Un || Number.isNaN(this.l.det.v)) &&
        ((this.l.det.v = i),
        this.a.detune.setTargetAtTime(i, n, 0.05),
        this.b.detune.setTargetAtTime(i + 9, n, 0.05)),
        X(this.out.gain, e.vol * 0.55, this.l.vol, n, 0.05));
    }
    set(e, t, n) {
      ((e = this.hz(e)),
        n === `exp`
          ? (this.a.frequency.exponentialRampToValueAtTime(e, t),
            this.b.frequency.exponentialRampToValueAtTime(e, t))
          : (this.a.frequency.setValueAtTime(e, t),
            this.b.frequency.setValueAtTime(e, t)));
    }
    segment() {
      let e = this.nextT;
      switch (this.mode) {
        case 1:
          (this.set(this.phase ? 720 : 1520, e + 0.16, `exp`),
            (this.nextT = e + 0.16));
          break;
        case 2:
          (this.set(this.phase ? 770 : 960, e, `set`), (this.nextT = e + 0.48));
          break;
        default: {
          let t = !this.phase;
          (this.set(t ? 1560 : 640, e + (t ? 2.3 : 1.7), `exp`),
            (this.nextT = e + (t ? 2.3 : 1.7)));
        }
      }
      this.phase ^= 1;
    }
  },
  tr = class extends Gn {
    ids;
    gainK;
    randomOffset;
    paramKey;
    s = null;
    g;
    curId = ``;
    l = { rate: Z(), vol: Z() };
    constructor(e, t, n, r, i = `tune`) {
      (super(e),
        (this.ids = t),
        (this.gainK = n),
        (this.randomOffset = r),
        (this.paramKey = i),
        (this.poolable = !0));
    }
    pickId(e) {
      return this.ids[
        Math.min(
          this.ids.length - 1,
          Math.max(0, Math.round(e.params[this.paramKey] ?? 0)),
        )
      ];
    }
    start(e) {
      let t = this.pickId(e),
        n = this.need(t);
      return n
        ? ((this.bufIds = [t]),
          (this.g = this.gain(1, this.out)),
          (this.s = this.src(
            n,
            !0,
            this.randomOffset ? Math.random() * n.duration : 0,
          )),
          this.s.connect(this.g),
          (this.curId = t),
          (this.started = !0),
          this.apply(e, 0),
          this.fadeTo(e.vol * this.gainK, this.randomOffset ? 0.4 : 0.05),
          !0)
        : !1;
    }
    apply(e, t) {
      if (!this.started || !this.s) return;
      let n = this.host.ac.currentTime,
        r = this.pickId(e);
      if (r !== this.curId) {
        let e = this.need(r);
        if (e) {
          this.bufIds = [r];
          let t = this.s;
          (this.g.gain.setTargetAtTime(0, n, 0.08),
            t.stop(n + 0.4),
            (this.g = this.gain(0, this.out)),
            this.g.gain.setTargetAtTime(1, n, 0.08),
            (this.s = this.src(e, !0, 0)),
            this.s.connect(this.g),
            (this.curId = r));
        }
      }
      (X(
        this.s.playbackRate,
        J(e.rate * e.doppler, 0.25, 4),
        this.l.rate,
        n,
        0.08,
      ),
        X(this.out.gain, e.vol * this.gainK, this.l.vol, n, 0.12));
    }
  },
  nr = class extends Gn {
    gl;
    gh;
    gr;
    l = { l: Z(), h: Z(), r: Z() };
    start(e) {
      let t = this.need(`amb/amb_rain_light`),
        n = this.need(`amb/amb_rain_heavy`),
        r = this.need(`amb/amb_rain_roof`);
      return !t || !n || !r
        ? !1
        : ((this.bufIds = [
            `amb/amb_rain_light`,
            `amb/amb_rain_heavy`,
            `amb/amb_rain_roof`,
          ]),
          (this.gl = this.gain(0, this.out)),
          (this.gh = this.gain(0, this.out)),
          (this.gr = this.gain(0, this.out)),
          this.src(t, !0, Math.random() * t.duration).connect(this.gl),
          this.src(n, !0, Math.random() * n.duration).connect(this.gh),
          this.src(r, !0, Math.random() * r.duration).connect(this.gr),
          (this.out.gain.value = 1),
          (this.started = !0),
          this.apply(e, 0),
          !0);
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = J(e.vol, 0, 1.5),
        i = J((r - 0.35) / 0.55, 0, 1),
        a = this.host.cabin,
        o = 0.55;
      (X(
        this.gl.gain,
        o * Math.min(1, r * 2.2) * (1 - 0.6 * i) * 0.8 * (1 - 0.4 * a),
        this.l.l,
        n,
        0.3,
        0.02,
      ),
        X(this.gh.gain, o * i * 0.85 * (1 - 0.4 * a), this.l.h, n, 0.3, 0.02),
        X(
          this.gr.gain,
          a * Math.min(1, r * 1.6) * 1.1,
          this.l.r,
          n,
          0.25,
          0.02,
        ));
    }
  },
  rr = class extends Gn {
    gd;
    gn;
    l = { d: Z(), n: Z(), vol: Z() };
    start(e) {
      let t = this.need(`amb/amb_park_day`),
        n = this.need(`amb/amb_park_night`);
      return !t || !n
        ? !1
        : ((this.bufIds = [`amb/amb_park_day`, `amb/amb_park_night`]),
          (this.gd = this.gain(0, this.out)),
          (this.gn = this.gain(0, this.out)),
          this.src(t, !0, Math.random() * t.duration).connect(this.gd),
          this.src(n, !0, Math.random() * n.duration).connect(this.gn),
          (this.started = !0),
          this.apply(e, 0),
          this.fadeTo(e.vol, 0.5),
          !0);
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = J(e.params.night ?? this.host.night, 0, 1);
      (X(this.gd.gain, Math.sqrt(1 - r), this.l.d, n, 0.5, 0.02),
        X(this.gn.gain, Math.sqrt(r), this.l.n, n, 0.5, 0.02),
        X(this.out.gain, e.vol, this.l.vol, n, 0.2));
    }
  },
  ir = class extends Gn {
    rum;
    wh;
    wh2;
    whG;
    clackG;
    nextClack = 0;
    lastSpeed = 0;
    accel = 0;
    l = { rum: Z(), wf: Z(), wf2: Z(), wg: Z(), vol: Z() };
    poolable = !0;
    onUnpark(e) {
      ((this.lastSpeed = NaN), (this.accel = 0), (this.nextClack = e + 0.2));
    }
    start(e) {
      let t = this.need(`amb/mrt_rumble`);
      if (!t) return !1;
      ((this.bufIds = [`amb/mrt_rumble`]), (this.rum = this.gain(0, this.out)));
      let n = this.filt(`lowpass`, 900, 0.7, this.rum);
      return (
        this.src(t, !0, Math.random() * t.duration).connect(n),
        (this.whG = this.gain(0, this.out)),
        (this.wh = this.osc(`sine`, 300, this.whG)),
        (this.wh2 = this.osc(`triangle`, 450, this.gain(0.3, this.whG))),
        (this.clackG = this.gain(0.7, this.out)),
        (this.started = !0),
        (this.nextClack = this.host.ac.currentTime + 0.2),
        this.apply(e, 0),
        (this.out.gain.value = e.vol),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = J(Vn(e, e.rate * 12), 0, 30);
      (t > 0 &&
        this.lastSpeed === this.lastSpeed &&
        (this.accel +=
          ((r - this.lastSpeed) / t - this.accel) * Math.min(1, t * 3)),
        (this.lastSpeed = r));
      let i = r / 25;
      X(
        this.rum.gain,
        0.15 + 0.85 * Math.min(1, i * 1.2),
        this.l.rum,
        n,
        0.2,
        0.02,
      );
      let a = (180 + r * 52) * e.doppler;
      (X(this.wh.frequency, this.hz(a), this.l.wf, n, 0.08),
        X(this.wh2.frequency, this.hz(a * 1.5), this.l.wf2, n, 0.08),
        X(
          this.whG.gain,
          J(Math.abs(this.accel) / 1.2, 0, 1) * 0.12 * (r > 0.5),
          this.l.wg,
          n,
          0.15,
          0.02,
        ),
        X(this.out.gain, e.vol, this.l.vol, n, 0.1));
      let o = this.host.bank.get(`drum/rim`);
      if (o && r > 2)
        for (; this.nextClack < n + 0.2;) {
          let e = Math.max(n, this.nextClack);
          (this.clack(o, e),
            this.clack(o, e + 2.5 / r),
            (this.nextClack = e + 18 / r));
        }
      else this.nextClack = n + 0.2;
    }
    clack(e, t) {
      let n = this.host.ac.createBufferSource();
      ((n.buffer = e),
        (n.playbackRate.value = 0.42 + Math.random() * 0.05),
        n.connect(this.clackG),
        n.start(t));
    }
  },
  ar = [`sfx/crosswalk_bird/0`, `sfx/crosswalk_bird/1`],
  or = class extends Gn {
    next = 0;
    g3 = null;
    g9 = null;
    lastState = -1;
    stateT = 0;
    l = { vol: Z() };
    poolable = !0;
    onUnpark(e) {
      ((this.lastState = -1), (this.next = e + 0.05));
    }
    start(e) {
      return this.host.bank.get(`sfx/crosswalk_tick/0`)
        ? ((this.g3 = this.gain(0.3, this.out)),
          (this.g9 = this.gain(0.9, this.out)),
          (this.started = !0),
          (this.next = this.host.ac.currentTime + 0.05),
          (this.out.gain.value = e.vol),
          !0)
        : !1;
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac,
        r = n.currentTime;
      X(this.out.gain, e.vol, this.l.vol, r, 0.05);
      let i = e.params.state !== void 0,
        a = J(Math.round(i ? e.params.state : (e.params.rate ?? 0)), 0, 2);
      a === this.lastState
        ? (this.stateT += t)
        : (this.lastState >= 0 && (this.next = Math.min(this.next, r + 0.08)),
          (this.lastState = a),
          (this.stateT = 0));
      let o = i ? e.params.rate : void 0,
        s = e.params.remaining,
        c = +(Math.round(e.params.variant ?? 0) === 1);
      for (; this.next < r + 0.15;) {
        let e = Math.max(this.next, r),
          t,
          i,
          l;
        a === 1
          ? ((t = ar[c]), (i = 1), (l = c ? 1.2 : 1.05))
          : a === 2
            ? ((t = `sfx/crosswalk_tick/0`),
              (i = 0.9),
              (l =
                1 /
                (o !== void 0 && o > 0
                  ? o
                  : s === void 0
                    ? J(3 + this.stateT * 0.6, 3, 8)
                    : J(10 / Math.max(1, s), 2.5, 8))))
            : ((t = `sfx/crosswalk_tick/0`), (i = 0.3), (l = 1.4));
        let u =
          this.host.bank.get(t) ?? this.host.bank.get(`sfx/crosswalk_bird/0`);
        if (u) {
          let t = n.createBufferSource();
          ((t.buffer = u),
            t.connect(i === 1 ? this.out : i > 0.5 ? this.g9 : this.g3),
            t.start(e));
        }
        this.next = e + Math.max(0.1, l);
      }
    }
  },
  sr = class extends Gn {
    m1;
    m2;
    pwm;
    m1G;
    pwmG;
    belt;
    beltG;
    road;
    roadLp;
    l = {
      f: Z(),
      f2: Z(),
      m1: Z(),
      pwm: Z(),
      pwmF: Z(),
      belt: Z(),
      beltG: Z(),
      road: Z(),
      roadF: Z(),
      vol: Z(),
      det: Z(),
    };
    poolable = !0;
    start(e) {
      let t = this.host.bank.get(`noise/pink`);
      if (!t) return !1;
      let n = this.gain(0.55, this.out);
      this.m1G = this.gain(0, n);
      let r = this.filt(`lowpass`, 2600, 0.8, this.m1G);
      ((this.m1 = this.osc(`sine`, 180, r)),
        (this.m2 = this.osc(`triangle`, 534.6, this.gain(0.28, r))),
        (this.pwmG = this.gain(0, n)));
      let i = this.filt(`bandpass`, 3200, 6, this.pwmG);
      return (
        (this.pwm = this.osc(`sawtooth`, 1600, i)),
        (this.beltG = this.gain(0, n)),
        (this.belt = this.filt(`bandpass`, 260, 5, this.beltG)),
        this.src(t, !0, Math.random() * 1.5).connect(this.belt),
        (this.road = this.gain(0, this.out)),
        (this.roadLp = this.filt(`lowpass`, 300, 0.7, this.road)),
        this.src(t, !0, Math.random() * 1.5).connect(this.roadLp),
        (this.started = !0),
        this.apply(e, 0),
        this.fadeTo(e.vol * 0.9, 0.08),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.l,
        i = J(
          e.params.speed ??
            (e.params.rpm === void 0 ? Vn(e) : e.params.rpm * 22),
          0,
          30,
        ),
        a = J(e.params.throttle ?? 0.3, 0, 1),
        o = 140 + i * 34;
      (X(this.m1.frequency, this.hz(o), r.f, n, 0.05),
        X(this.m2.frequency, this.hz(o * 2.97), r.f2, n, 0.05));
      let s = 1200 * Math.log2(J(e.doppler, 0.5, 2));
      (Math.abs(s - r.det.v) > Un || Number.isNaN(r.det.v)) &&
        ((r.det.v = s),
        this.m1.detune.setTargetAtTime(s, n, 0.05),
        this.m2.detune.setTargetAtTime(s, n, 0.05),
        this.pwm.detune.setTargetAtTime(s, n, 0.05));
      let c = J(i / 3, 0, 1);
      (X(this.m1G.gain, 0.02 + (0.12 + 0.22 * a) * c, r.m1, n, 0.06, 0.03),
        X(this.pwm.frequency, this.hz(1500 + i * 60), r.pwmF, n, 0.08, 0.02),
        X(this.pwmG.gain, 0.012 + 0.05 * a * c, r.pwm, n, 0.06, 0.03),
        X(this.belt.frequency, this.hz(160 + i * 16), r.belt, n, 0.08, 0.02),
        X(this.beltG.gain, 0.35 * c, r.beltG, n, 0.1, 0.03));
      let l = J(this.host.wet ?? 0, 0, 1);
      (X(
        this.road.gain,
        J(i / 25, 0, 1) * (0.3 + 0.45 * l),
        r.road,
        n,
        0.1,
        0.04,
      ),
        X(
          this.roadLp.frequency,
          this.hz((200 + i * 30) * (1 + 4 * l)),
          r.roadF,
          n,
          0.1,
          0.05,
        ),
        X(this.out.gain, e.vol * 0.9, r.vol, n, 0.05, 0.02));
    }
  },
  cr = class extends Gn {
    chop;
    chopDepth;
    slapBp;
    tail;
    turb;
    turb2;
    l = {
      f: Z(),
      tail: Z(),
      depth: Z(),
      turb: Z(),
      turb2: Z(),
      vol: Z(),
      det: Z(),
      slap: Z(),
    };
    poolable = !0;
    start(e) {
      let t = this.host.bank.get(`noise/white`),
        n = this.host.bank.get(`noise/pink`);
      if (!t || !n) return !1;
      let r = this.host.ac,
        i = this.filt(`highpass`, 30, 0.7, this.gain(0.8, this.out)),
        a = this.gain(0.04, i),
        o = this.filt(`lowpass`, 1800, 0.7, a);
      ((this.slapBp = this.filt(`bandpass`, 520, 0.9, o)),
        this.src(t, !0, Math.random() * 1.5).connect(this.slapBp),
        (this.chopDepth = this.gain(0.9, a.gain)),
        (this.chop = this.osc(Jn(r, 0.12, `heli`), 21, this.chopDepth)));
      let s = this.filt(`lowpass`, 140, 1.2, this.gain(0.5, i)),
        c = r.createWaveShaper();
      ((c.curve = Xn(2.5)),
        c.connect(s),
        this.nodeCount++,
        this.chop.connect(c),
        this.src(n, !0, Math.random() * 1.5).connect(
          this.filt(`lowpass`, 260, 0.7, this.gain(0.35, i)),
        ),
        (this.tail = this.osc(
          `sawtooth`,
          104,
          this.filt(`bandpass`, 420, 1.6, this.gain(0.05, i)),
        )));
      let l = this.gain(0.018, i);
      return (
        (this.turb = this.osc(`sine`, 5200, l)),
        (this.turb2 = this.osc(`sine`, 1310, this.gain(0.6, l))),
        (this.started = !0),
        this.apply(e, 0),
        this.fadeTo(e.vol, 0.3),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.l,
        i = J(e.params.rpm ?? 1, 0, 1.1),
        a = J(e.params.thrust ?? e.params.throttle ?? 0.6, 0, 1),
        o = 21 * (0.35 + 0.65 * i);
      (X(this.chop.frequency, o, r.f, n, 0.2),
        X(this.tail.frequency, 104 * (0.35 + 0.65 * i), r.tail, n, 0.2),
        X(this.chopDepth.gain, (0.45 + 0.9 * a) * i, r.depth, n, 0.15, 0.02),
        X(this.slapBp.frequency, this.hz(380 + 380 * a), r.slap, n, 0.2, 0.02),
        X(this.turb.frequency, this.hz(5200 * (0.6 + 0.4 * i)), r.turb, n, 0.3),
        X(
          this.turb2.frequency,
          this.hz(1310 * (0.6 + 0.4 * i)),
          r.turb2,
          n,
          0.3,
        ));
      let s = 1200 * Math.log2(J(e.doppler, 0.5, 2));
      ((Math.abs(s - r.det.v) > Un || Number.isNaN(r.det.v)) &&
        ((r.det.v = s),
        this.chop.detune.setTargetAtTime(s, n, 0.08),
        this.tail.detune.setTargetAtTime(s, n, 0.08),
        this.turb.detune.setTargetAtTime(s, n, 0.08),
        this.turb2.detune.setTargetAtTime(s, n, 0.08)),
        X(this.out.gain, e.vol * (0.4 + 0.6 * i), r.vol, n, 0.1));
    }
  },
  lr = class extends Gn {
    roar;
    roarLp;
    fan;
    fanG;
    whine;
    l = { roar: Z(), lp: Z(), fan: Z(), fg: Z(), vol: Z(), det: Z() };
    poolable = !0;
    start(e) {
      let t = this.host.bank.get(`noise/white`),
        n = this.host.bank.get(`noise/pink`);
      if (!t || !n) return !1;
      let r = this.filt(`highpass`, 28, 0.7, this.gain(0.9, this.out));
      ((this.roar = this.gain(0.6, r)),
        (this.roarLp = this.filt(`lowpass`, 900, 0.6, this.roar)),
        this.src(n, !0, Math.random() * 1.5).connect(this.roarLp));
      let i = this.filt(`bandpass`, 2600, 0.8, this.gain(0.12, r));
      return (
        this.src(t, !0, Math.random() * 1.5).connect(i),
        (this.fanG = this.gain(0.05, r)),
        (this.fan = this.osc(
          `sawtooth`,
          92,
          this.filt(`bandpass`, 700, 0.9, this.fanG),
        )),
        (this.whine = this.osc(`sine`, 3400, this.gain(0.012, r))),
        (this.started = !0),
        this.apply(e, 0),
        this.fadeTo(e.vol, 0.5),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.l,
        i = J(e.params.thrust ?? e.params.throttle ?? 0.55, 0, 1);
      (X(this.roar.gain, 0.35 + 0.5 * i, r.roar, n, 0.4, 0.02),
        X(this.roarLp.frequency, this.hz(600 + 900 * i), r.lp, n, 0.4, 0.02),
        X(this.fan.frequency, 70 + 50 * i, r.fan, n, 0.5),
        X(this.fanG.gain, 0.03 + 0.05 * i, r.fg, n, 0.4, 0.02));
      let a = 1200 * Math.log2(J(e.doppler, 0.5, 2));
      ((Math.abs(a - r.det.v) > Un || Number.isNaN(r.det.v)) &&
        ((r.det.v = a),
        this.fan.detune.setTargetAtTime(a, n, 0.1),
        this.whine.detune.setTargetAtTime(a, n, 0.1)),
        X(this.out.gain, e.vol, r.vol, n, 0.15));
    }
  },
  ur = class extends Gn {
    b1;
    b2;
    tone;
    toneG;
    body;
    l = { b1: Z(), b2: Z(), tone: Z(), tg: Z(), body: Z(), vol: Z() };
    poolable = !0;
    start(e) {
      let t = this.host.bank.get(`noise/white`);
      if (!t) return !1;
      let n = this.gain(2.4, this.out);
      this.body = this.gain(0.5, n);
      let r = this.filt(`lowpass`, 5200, 0.7, this.body);
      ((this.b1 = this.filt(`bandpass`, 1050, 12, r)),
        (this.b2 = this.filt(`bandpass`, 2150, 9, this.gain(0.55, r))));
      let i = this.src(t, !0, Math.random() * 1.5);
      return (
        i.connect(this.b1),
        i.connect(this.b2),
        (this.toneG = this.gain(0.06, n)),
        (this.tone = this.osc(
          `triangle`,
          1150,
          this.filt(`lowpass`, 3500, 0.7, this.toneG),
        )),
        this.osc(`sine`, 7.3, this.gain(35, this.tone.detune)),
        this.osc(
          `sine`,
          12.9 + Math.random() * 2,
          this.gain(22, this.tone.detune),
        ),
        this.osc(`sine`, 5.1, this.gain(120, this.b1.frequency)),
        (this.started = !0),
        this.apply(e, 0),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.l,
        i = J(e.params.slip ?? 1, 0, 1),
        a = (0.85 + J(Vn(e, 12), 0, 50) / 90) * J(e.doppler, 0.7, 1.4);
      (X(this.b1.frequency, this.hz(1e3 * a), r.b1, n, 0.08),
        X(this.b2.frequency, this.hz(2100 * a), r.b2, n, 0.08),
        X(this.tone.frequency, this.hz((1080 + 260 * i) * a), r.tone, n, 0.06),
        X(this.toneG.gain, 0.03 + 0.07 * i, r.tg, n, 0.05, 0.02),
        X(this.body.gain, 0.3 + 0.5 * i, r.body, n, 0.05, 0.02),
        X(this.out.gain, e.vol * (0.25 + 0.75 * i), r.vol, n, 0.03));
    }
  },
  dr = 2500,
  Q = (e) => ({
    bus: `sfx`,
    ref: 6,
    max: 120,
    pri: 5,
    send: 0.08,
    doppler: 0,
    ...e,
  }),
  fr = {
    engine_car: Q({ ref: 5, max: 95, pri: 6, send: 0.05, doppler: 1 }),
    engine_scooter: Q({ ref: 4, max: 80, pri: 6, send: 0.05, doppler: 1 }),
    engine_bus: Q({ ref: 8, max: 130, pri: 6, send: 0.06, doppler: 1 }),
    engine_sports: Q({ ref: 6, max: 140, pri: 7, send: 0.06, doppler: 1 }),
    siren_police: Q({ ref: 14, max: 420, pri: 9, send: 0.25, doppler: 1 }),
    siren_ambulance: Q({ ref: 14, max: 420, pri: 8, send: 0.25, doppler: 1 }),
    garbage_truck: Q({ ref: 11, max: 200, pri: 8, send: 0.25, doppler: 0.8 }),
    rain: Q({ bus: `amb`, ref: 30, max: 400, pri: 9, send: 0 }),
    wind: Q({ bus: `amb`, ref: 20, max: 300, pri: 4, send: 0 }),
    ambient_city: Q({ bus: `amb`, ref: 40, max: 400, pri: 9, send: 0 }),
    ambient_market: Q({ bus: `amb`, ref: 28, max: 170, pri: 6, send: 0.05 }),
    ambient_temple: Q({ bus: `amb`, ref: 22, max: 150, pri: 6, send: 0.08 }),
    ambient_park: Q({ bus: `amb`, ref: 45, max: 230, pri: 6, send: 0 }),
    ambient_river: Q({ bus: `amb`, ref: 45, max: 260, pri: 6, send: 0 }),
    mrt_train: Q({ ref: 14, max: 280, pri: 6, send: 0.2, doppler: 1 }),
    crosswalk_signal: Q({ bus: `amb`, ref: 3, max: 24, pri: 4, send: 0.06 }),
    engine_motorcycle: Q({ ref: 5, max: 150, pri: 7, send: 0.06, doppler: 1 }),
    engine_ev: Q({ ref: 3, max: 45, pri: 5, send: 0.04, doppler: 1 }),
    helicopter: Q({ ref: 30, max: 900, pri: 8, send: 0.2, doppler: 1 }),
    jet: Q({ ref: 140, max: 4e3, pri: 6, send: 0.08, doppler: 1 }),
    tire_screech: Q({ ref: 7, max: 130, pri: 6, send: 0.12, doppler: 1 }),
    ambient_store: Q({ bus: `room`, ref: 9, max: 60, pri: 8, send: 0 }),
    ambient_hall: Q({ bus: `room`, ref: 25, max: 140, pri: 8, send: 0 }),
  },
  pr = 0,
  mr = class {
    name;
    meta;
    eng;
    internal;
    x = 0;
    y = 0;
    z = 0;
    positional = !1;
    stopped = !1;
    voice = null;
    pending = !1;
    state = { vol: 1, rate: 1, params: {}, doppler: 1 };
    dist = 0;
    px = NaN;
    pz = NaN;
    svx = 0;
    svz = 0;
    panner = null;
    air = null;
    occ = null;
    send = null;
    lastAir = 0;
    lastOcc = -1;
    outOfRangeT = 0;
    wx = NaN;
    wy = NaN;
    wz = NaN;
    accDt = 0;
    retryAt = 0;
    occGain = 1;
    spare = null;
    phase = pr++ % 3;
    created = performance.now();
    constructor(e, t, n, r, i) {
      ((this.name = e),
        (this.meta = t),
        (this.eng = n),
        (this.internal = i),
        (this.flat = !!r?.ui),
        r &&
          (r.x !== void 0 &&
            r.z !== void 0 &&
            this.setPosition(r.x, r.y ?? 0, r.z),
          r.volume !== void 0 && this.setVolume(r.volume),
          r.rate !== void 0 && this.setRate(r.rate)));
    }
    flat;
    setPosition(e, t, n) {
      Number.isFinite(e) &&
        Number.isFinite(t) &&
        Number.isFinite(n) &&
        ((this.x = e),
        (this.y = t),
        (this.z = n),
        this.flat || (this.positional = !0));
    }
    setVolume(e) {
      this.state.vol = Number.isFinite(e) ? Math.max(0, e) : 0;
    }
    setRate(e) {
      this.state.rate = Number.isFinite(e) ? Math.max(0.05, e) : 1;
    }
    setParam(e, t) {
      Number.isFinite(t) && (this.state.params[e] = t);
    }
    stop() {
      this.stopped || ((this.stopped = !0), this.eng.onLoopStopped(this));
    }
  },
  hr = {
    room: [6, 0.35],
    store: [8, 0.3],
    hall: [20, 0.55],
    temple: [16, 0.6],
    station: [30, 0.5],
  },
  gr = [12e4, 45e3],
  _r = 1e3 / 30,
  vr = 60,
  yr = 20,
  br = 0.45,
  xr = 1,
  Sr = 4,
  Cr = 0.6,
  wr = 4,
  Tr = 6,
  Er = 24,
  Dr = 8,
  Or = (e, t) => Array(t).fill(e),
  kr = {
    low: [
      ...Or(`engine_car`, 2),
      ...Or(`engine_scooter`, 2),
      `engine_bus`,
      `engine_scooter#swarm`,
    ],
    medium: [
      ...Or(`engine_car`, 3),
      ...Or(`engine_scooter`, 3),
      `engine_bus`,
      `engine_sports`,
      `engine_scooter#swarm`,
      `siren_police`,
      `tire_screech`,
    ],
    high: [
      ...Or(`engine_car`, 5),
      ...Or(`engine_scooter`, 4),
      `engine_bus`,
      `engine_sports`,
      `engine_ev`,
      `engine_motorcycle`,
      `engine_scooter#swarm`,
      ...Or(`siren_police`, 2),
      `tire_screech`,
    ],
    ultra: [
      ...Or(`engine_car`, 5),
      ...Or(`engine_scooter`, 5),
      ...Or(`engine_bus`, 2),
      `engine_sports`,
      `engine_ev`,
      `engine_motorcycle`,
      `engine_scooter#swarm`,
      ...Or(`siren_police`, 2),
      `tire_screech`,
    ],
  },
  Ar = /^(engine_|siren_|tire_screech)/,
  jr = (e, t) => (t.swarm ? e + `#swarm` : e),
  Mr = class {
    ac;
    created = !1;
    bank;
    cabin = 0;
    night = 0;
    wet = 0;
    revRet = null;
    revAmt = 1;
    revSet = -1;
    setReverbAmount(e) {
      Number.isFinite(e) && ((this.revAmt = e), this.applyReverb());
    }
    applyReverb(e = 0.6) {
      if (!this.created || !this.revRet) return;
      let t = 0.55 * this.revAmt * (1 - this.indoorT);
      Math.abs(t - this.revSet) < 0.015 ||
        ((this.revSet = t),
        this.revRet.gain.setTargetAtTime(t, this.ac.currentTime, e));
    }
    indoorT = 0;
    indoorS = 0;
    room = `room`;
    indoorExplicitAt = 0;
    outLp;
    outGain;
    roomConv = null;
    roomRet = null;
    roomIRs = new Map();
    roomLoaded = null;
    setIndoor(e, t = `room`, n = !0) {
      let r = Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
      if (
        (n && (this.indoorExplicitAt = performance.now()),
        hr[t] && (this.room = t),
        (r === this.indoorT && (r === 0 || this.roomLoaded === this.room)) ||
          ((this.indoorT = r), !this.created))
      )
        return;
      let i = this.ac.currentTime;
      (this.outLp.frequency.setTargetAtTime(
        this.hz(2e4 * (650 / 2e4) ** r),
        i,
        0.14,
      ),
        this.outGain.gain.setTargetAtTime(1 - 0.6 * r, i, 0.14),
        r > 0 && this.ensureRoom(this.room),
        this.roomRet &&
          this.roomRet.gain.setTargetAtTime(hr[this.room][1] * r, i, 0.14),
        this.applyReverb(0.14));
    }
    ensureRoom(e) {
      let t = this.ac;
      if (
        (this.roomConv ||
          ((this.roomConv = t.createConvolver()),
          (this.roomConv.normalize = !0),
          (this.roomRet = t.createGain()),
          (this.roomRet.gain.value = 0),
          this.revSend
            .connect(this.roomConv)
            .connect(this.roomRet)
            .connect(this.worldIn)),
        this.roomLoaded === e || this.roomWanted === e)
      )
        return;
      this.roomWanted = e;
      let n = this.roomIRs.get(e),
        r = (t) => {
          if (
            (this.mobile || this.roomIRs.set(e, t),
            this.roomWanted === e && this.roomConv)
          )
            try {
              ((this.roomConv.buffer = t), (this.roomLoaded = e));
            } catch {}
        };
      n ? r(n) : this.loadIR(e, r);
    }
    roomWanted = null;
    get roomReverb() {
      if (!this.roomConv) return `none`;
      let e = this.roomConv.buffer;
      return e
        ? +e.duration.toFixed(2)
        : this.roomWanted
          ? `waiting`
          : `released`;
    }
    loadIR(e, t) {
      let n = this.ac.sampleRate,
        r = e === `world` && _e.includes(n) && !this.bank.irsReleased;
      this.bank.whenReady(`ir/${e}/${n}`, t, !r);
    }
    occlusion(e) {
      let t = this.indoorS;
      if (t < 0.01) return 0;
      let n = hr[this.room][0];
      return e <= n ? 0 : t * Math.min(1, (e - n) / 4);
    }
    quality;
    hrtf = !1;
    nyq = 2e4;
    hz(e) {
      return e < this.nyq ? e : this.nyq;
    }
    master;
    bus;
    worldIn;
    musicDuck;
    ambDuck;
    worldGain;
    cabinLp;
    revSend;
    conv;
    comp;
    limiter;
    analyser = null;
    meterBuf = null;
    async meter(e = 1e3) {
      if (!this.created) return { rms: 0, peak: 0, db: -120, frames: 0 };
      this.analyser ||
        ((this.analyser = this.ac.createAnalyser()),
        (this.analyser.fftSize = 2048),
        this.limiter.connect(this.analyser),
        (this.meterBuf = new Float32Array(this.analyser.fftSize)));
      let t = this.analyser,
        n = this.meterBuf,
        r = 0,
        i = 0,
        a = 0,
        o = 0,
        s = performance.now();
      for (; performance.now() - s < e;) {
        t.getFloatTimeDomainData(n);
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          ((r += t * t), Math.abs(t) > a && (a = Math.abs(t)));
        }
        ((i += n.length), o++, await new Promise((e) => setTimeout(e, 40)));
      }
      let c = Math.sqrt(r / Math.max(1, i));
      return {
        rms: +c.toFixed(4),
        peak: +a.toFixed(3),
        db: +(20 * Math.log10(c + 1e-9)).toFixed(1),
        frames: o,
      };
    }
    lx = 0;
    ly = 0;
    lz = 0;
    lvx = 0;
    lvz = 0;
    lpx = NaN;
    lpz = NaN;
    pools = {};
    loops = [];
    dying = [];
    lastPlay = new Map();
    lastVariant = new Map();
    frame = 0;
    loopBudget = 20;
    volumes = { master: 0.8, music: 0.6, sfx: 0.9 };
    counters = {
      oneShots: 0,
      culled: 0,
      stolen: 0,
      deduped: 0,
      notReady: 0,
      realized: 0,
      derealized: 0,
      evicted: 0,
      limited: 0,
    };
    externalLoops = new Map();
    externalPlays = new Map();
    mobile;
    constructor(e, t = !1) {
      ((this.quality = e),
        (this.mobile = t),
        (this.bank = new Bn(e, t)),
        (this.loopBudget =
          e === `low` ? 10 : e === `medium` ? 14 : e === `high` ? 20 : 28),
        (this.hrtf = e === `ultra`));
    }
    isRunning = !1;
    get running() {
      return this.isRunning;
    }
    create() {
      if (this.created) return !0;
      let e = window.AudioContext || window.webkitAudioContext;
      if (!e) return !1;
      let t;
      try {
        t = new e({ latencyHint: `interactive` });
      } catch {
        try {
          t = new e();
        } catch {
          return !1;
        }
      }
      if (
        ((this.ac = t),
        (this.nyq = Math.min(2e4, t.sampleRate * 0.45)),
        this.buildGraph(),
        this.bank.adopt(t),
        (this.created = !0),
        this.applyVolumes(),
        this.indoorT > 0)
      ) {
        let e = this.indoorT;
        ((this.indoorT = -1),
          (this.indoorS = e),
          this.setIndoor(e, this.room, !1));
      }
      let n = () => {
        if (
          ((this.isRunning = t.state === `running`),
          this.isRunning && !this.announcedRunning)
        ) {
          ((this.announcedRunning = !0), (this.runningAt = performance.now()));
          try {
            this.onRunning?.();
          } catch {}
        }
      };
      try {
        t.addEventListener(`statechange`, n);
      } catch {}
      return (n(), !0);
    }
    announcedRunning = !1;
    runningAt = 0;
    onRunning = null;
    buildGraph() {
      let e = this.ac,
        t = (t) => {
          let n = e.createGain();
          return ((n.gain.value = t), n);
        },
        n = e.createDynamicsCompressor();
      ((n.threshold.value = -1.5),
        (n.knee.value = 0),
        (n.ratio.value = 20),
        (n.attack.value = 0.001),
        (n.release.value = 0.08),
        n.connect(e.destination),
        (this.limiter = n));
      let r = e.createDynamicsCompressor();
      ((r.threshold.value = -16),
        (r.knee.value = 10),
        (r.ratio.value = 3.5),
        (r.attack.value = 0.004),
        (r.release.value = 0.22),
        r.connect(n),
        (this.comp = r),
        (this.master = t(1)),
        this.master.connect(r),
        (this.worldGain = t(1)),
        this.worldGain.connect(this.master),
        (this.cabinLp = e.createBiquadFilter()),
        (this.cabinLp.type = `lowpass`),
        (this.cabinLp.frequency.value = this.nyq),
        (this.cabinLp.Q.value = 0.5),
        this.cabinLp.connect(this.worldGain));
      let i = t(1);
      (i.connect(this.cabinLp), (this.worldIn = i));
      let a = t(1),
        o = t(1),
        s = t(1),
        c = t(1),
        l = t(1),
        u = t(1);
      (a.connect(i),
        (this.ambDuck = t(1)),
        (this.outLp = e.createBiquadFilter()),
        (this.outLp.type = `lowpass`),
        (this.outLp.frequency.value = this.nyq),
        (this.outLp.Q.value = 0.6),
        (this.outGain = t(1)),
        o
          .connect(this.outLp)
          .connect(this.outGain)
          .connect(this.ambDuck)
          .connect(i),
        u.connect(this.ambDuck),
        l.connect(i),
        s.connect(this.master),
        (this.musicDuck = t(1)),
        c.connect(this.musicDuck).connect(this.master),
        (this.bus = { sfx: a, amb: o, ui: s, music: c, room: l, ambPos: u }),
        (this.revSend = t(1)),
        (this.conv = e.createConvolver()),
        (this.conv.normalize = !0),
        this.loadIR(`world`, (e) => {
          try {
            this.conv.buffer = e;
          } catch {}
        }));
      let d = t(0.55);
      (this.revSend.connect(this.conv).connect(d).connect(i),
        (this.revRet = d));
      let f = {
        pos_sfx: [
          this.quality === `low` ? 14 : this.quality === `ultra` ? 32 : 24,
          !0,
          `sfx`,
        ],
        pos_amb: [this.quality === `low` ? 6 : 12, !0, `amb`],
        flat_sfx: [6, !1, `sfx`],
        flat_amb: [6, !1, `amb`],
        flat_ui: [10, !1, `ui`],
      };
      for (let [e, [t, n, r]] of Object.entries(f)) {
        let i = [];
        for (let e = 0; e < t; e++) i.push(this.makeOneShot(n, r));
        this.pools[e] = i;
      }
      this.applyVolumes();
    }
    makeOneShot(e, t) {
      let n = this.ac,
        r = n.createGain(),
        i = null,
        a = null,
        o = null;
      return (
        e
          ? ((a = n.createBiquadFilter()),
            (a.type = `lowpass`),
            (a.frequency.value = this.nyq),
            (i = this.makePanner()),
            r
              .connect(a)
              .connect(i)
              .connect(this.bus[t === `amb` ? `ambPos` : t]))
          : r.connect(this.bus[t]),
        t !== `ui` &&
          ((o = n.createGain()),
          (o.gain.value = 0),
          r.connect(o).connect(this.revSend)),
        {
          input: r,
          panner: i,
          air: a,
          send: o,
          src: null,
          until: 0,
          pri: 0,
          startedAt: 0,
          name: ``,
        }
      );
    }
    makePanner() {
      let e = this.ac.createPanner();
      return (
        (e.panningModel = this.hrtf ? `HRTF` : `equalpower`),
        (e.distanceModel = `inverse`),
        (e.rolloffFactor = 1),
        (e.maxDistance = 1e4),
        e
      );
    }
    kickBuf = null;
    resume(e = !1) {
      if (
        !this.created ||
        ((this.wantRun = !0), this.ac.state === `running` && !this.stalled)
      )
        return;
      let t = navigator.userActivation;
      if (e && (!t || t.isActive))
        try {
          let e = this.ac.createBufferSource();
          ((e.buffer = this.kickBuf ??=
            this.ac.createBuffer(1, 1, this.ac.sampleRate)),
            e.connect(this.ac.destination),
            e.start(0),
            (e.onended = () => e.disconnect()));
        } catch {}
      this.ac.resume().catch(() => {});
    }
    suspend() {
      ((this.wantRun = !1),
        (this.stalled = !1),
        this.created &&
          this.ac.state === `running` &&
          this.ac.suspend().catch(() => {}));
    }
    wantRun = !1;
    stalled = !1;
    watchAt = 0;
    lastCt = -1;
    stuckMs = 0;
    reviveAt = 0;
    revives = { tries: 0, stalls: 0 };
    get needsResume() {
      return !this.created || this.ac.state !== `running` || this.stalled;
    }
    watch(e) {
      if (!this.created || e - this.watchAt < 500) return;
      let t = e - this.watchAt;
      this.watchAt = e;
      let n = this.ac,
        r = n.state;
      this.isRunning = r === `running`;
      let i = typeof document < `u` && document.hidden;
      if (!this.wantRun || i) {
        ((this.lastCt = -1), (this.stalled = !1));
        return;
      }
      if (r === `running`) {
        let e = n.currentTime;
        if (this.lastCt < 0 || t >= 3e3 || e - this.lastCt > 0.001) {
          ((this.lastCt = e), (this.stuckMs = 0), (this.stalled = !1));
          return;
        }
        ((this.stuckMs += t),
          this.stuckMs >= dr &&
            !this.stalled &&
            ((this.stalled = !0),
            this.revives.stalls++,
            n.suspend().catch(() => {})));
        return;
      }
      ((this.lastCt = -1), (this.stuckMs = 0), this.revive(e));
    }
    revive(e = performance.now(), t = !1) {
      !this.created ||
        !this.wantRun ||
        this.ac.state === `running` ||
        (typeof document < `u` && document.hidden) ||
        (!t && e - this.reviveAt < 900) ||
        ((this.reviveAt = e),
        this.revives.tries++,
        (this.stalled = !1),
        this.ac.resume().catch(() => {}));
    }
    setVolumes(e, t, n) {
      let r = (e, t) => (Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : t);
      ((this.volumes.master = r(e, 0.8)),
        (this.volumes.music = r(t, 0.6)),
        (this.volumes.sfx = r(n, 0.9)),
        this.applyVolumes());
    }
    applyVolumes() {
      if (!this.created) return;
      let e = this.ac.currentTime,
        t = this.volumes,
        n = (e) => e * e;
      (this.master.gain.setTargetAtTime(n(t.master) * 1.1, e, 0.05),
        this.bus.music.gain.setTargetAtTime(n(t.music) * 1.35, e, 0.05),
        this.bus.sfx.gain.setTargetAtTime(n(t.sfx), e, 0.05),
        this.bus.amb.gain.setTargetAtTime(n(t.sfx) * 0.85, e, 0.05),
        this.bus.ui.gain.setTargetAtTime(
          n(t.sfx) * 0.9 + 0.1 * n(t.master),
          e,
          0.05,
        ));
    }
    duckUntil = 0;
    duck(e, t) {
      if (!this.created || !Number.isFinite(e)) return;
      (!Number.isFinite(t) || t < 0) && (t = 2);
      let n = this.ac.currentTime,
        r = Math.min(1, Math.max(0, e));
      for (let [e, i] of [
        [this.musicDuck, 0.9],
        [this.ambDuck, 0.55],
      ])
        (Y(e.gain, n),
          e.gain.setTargetAtTime(1 - r * i, n, 0.06),
          e.gain.setTargetAtTime(1, n + Math.max(0.05, t), 0.35));
      this.duckUntil = n + t;
    }
    pausedWorld = !1;
    setWorldPaused(e) {
      if (!this.created || e === this.pausedWorld) return;
      this.pausedWorld = e;
      let t = this.ac.currentTime;
      (this.worldGain.gain.setTargetAtTime(+!e, t, e ? 0.08 : 0.15),
        Y(this.bus.music.gain, t));
      let n = this.volumes.music * this.volumes.music * 1.35;
      this.bus.music.gain.setTargetAtTime(e ? n * 0.25 : n, t, 0.12);
    }
    lastCabin = -1;
    muffle = 0;
    muffleRate = 0.3;
    setCabin(e) {
      ((this.cabin = e), this.applyWorldFilter());
    }
    shock(e, t) {
      (e > this.muffle && (this.muffle = e),
        (this.muffleRate = this.muffle / Math.max(0.5, t)),
        this.applyWorldFilter());
    }
    applyWorldFilter() {
      let e = Math.max(this.cabin, this.muffle);
      if (!this.created || Math.abs(e - this.lastCabin) < 0.02) return;
      this.lastCabin = e;
      let t = this.ac.currentTime;
      (this.cabinLp.frequency.setTargetAtTime(
        this.hz(2e4 * (2800 / 2e4) ** e),
        t,
        0.08,
      ),
        this.cabinLp.Q.setTargetAtTime(0.5 + 0.4 * Math.min(1, e), t, 0.08));
    }
    setListener(e, t, n, r, i, a, o) {
      if (!Number.isFinite(e + t + n)) return;
      if (o > 0 && Number.isFinite(this.lpx)) {
        let t = Math.min(1, o * 8);
        ((this.lvx += ((e - this.lpx) / o - this.lvx) * t),
          (this.lvz += ((n - this.lpz) / o - this.lvz) * t));
      }
      if (
        ((this.lpx = e),
        (this.lpz = n),
        (this.lx = e),
        (this.ly = t),
        (this.lz = n),
        !this.created)
      )
        return;
      let s = this.lw,
        c = !(Math.abs(e - s.x) + Math.abs(t - s.y) + Math.abs(n - s.z) < 0.01),
        l = !(
          Math.abs(r - s.fx) + Math.abs(i - s.fy) + Math.abs(a - s.fz) <
          0.002
        );
      if (!c && !l && s.up) return;
      let u = this.ac.listener;
      (u.positionX
        ? (c &&
            ((u.positionX.value = e),
            (u.positionY.value = t),
            (u.positionZ.value = n)),
          l &&
            ((u.forwardX.value = r),
            (u.forwardY.value = i),
            (u.forwardZ.value = a)),
          s.up || ((u.upX.value = 0), (u.upY.value = 1), (u.upZ.value = 0)))
        : (c && u.setPosition?.(e, t, n),
          (l || !s.up) && u.setOrientation?.(r, i, a, 0, 1, 0)),
        (s.up = !0),
        c && ((s.x = e), (s.y = t), (s.z = n)),
        l && ((s.fx = r), (s.fy = i), (s.fz = a)),
        this.prof.listenerWrites++);
    }
    lw = { x: NaN, y: NaN, z: NaN, fx: NaN, fy: NaN, fz: NaN, up: !1 };
    slowRealize = ``;
    builtBy = {};
    prof = {
      reused: 0,
      built: 0,
      prebuilt: 0,
      listenerWrites: 0,
      pannerWrites: 0,
      applies: 0,
      farSkips: 0,
      realizeMaxMs: 0,
      realizeDeferred: 0,
      reapDeferred: 0,
      evictScans: 0,
      deferredPlays: 0,
      deferredLate: 0,
      loopsMaxMs: 0,
    };
    play(e, t, n, r = !0, i = 0, a = -1) {
      if ((r && this.externalPlays.set(e, this.frame), !this.isRunning))
        return !1;
      let o = ht[e];
      if (!o) return !1;
      let s = 0,
        c = t?.x ?? this.lx,
        l = t?.y ?? this.ly,
        u = t?.z ?? this.lz,
        d =
          !o.flat &&
          !t?.ui &&
          t !== void 0 &&
          t.x !== void 0 &&
          t.z !== void 0 &&
          Number.isFinite(c + l + u);
      if (d) {
        let e = c - this.lx,
          t = l - this.ly,
          n = u - this.lz;
        if (((s = Math.sqrt(e * e + t * t + n * n)), s > o.max))
          return (this.counters.culled++, !1);
      }
      let f = n ?? o.recipe ?? e,
        p = vt.has(f);
      p && this.bank.wantSfx(f);
      let m = this.bank.variants(f);
      if (!m || !m.length)
        return (
          this.counters.notReady++,
          p &&
            this.deferred.length < 8 &&
            this.deferred.push({
              name: e,
              recipe: n,
              opts: t ? { ...t } : void 0,
              delay: Number.isFinite(i) && i > 0 ? i : 0,
              variant: a,
              t: this.ac.currentTime,
            }),
          !1
        );
      e === `explosion` && this.bank.wantSfx(`tinnitus`);
      let h = this.ac.currentTime,
        g = o.sustain;
      if (g && r && d && i <= 0) {
        let n = this.sustainHit(e, c, u, g.radius);
        if (n) {
          if (((n.last = h), n.loop))
            return (
              n.loop.setPosition(c, l, u),
              this.sustainLoopLevel(n.loop, t?.volume),
              !0
            );
          if (n.voice && n.voice.src === n.src && n.voice.until - h > 0.35)
            return !0;
        }
        if (!n && g.loop && g.loop in fr) {
          let n = this.loop(g.loop, { x: c, y: l, z: u }, !0);
          return (
            this.sustainLoopLevel(n, t?.volume),
            this.sustains.push({
              name: e,
              x: c,
              z: u,
              last: h,
              started: h,
              voice: null,
              src: null,
              loop: n,
              body: this.findBody?.(c, u) ?? null,
            }),
            !0
          );
        }
      }
      let _ = this.lastPlay.get(e);
      if (_ && h - _.t < o.dedupe && Math.abs(_.x - c) + Math.abs(_.z - u) < 3)
        return (this.counters.deduped++, !1);
      let v = d ? (o.bus === `amb` ? `pos_amb` : `pos_sfx`) : `flat_${o.bus}`;
      o.maxVoices && this.limitVoices(v, e, o.maxVoices, h);
      let y = this.acquire(v, o.pri, h);
      if (!y) return !1;
      _
        ? ((_.t = h), (_.x = c), (_.z = u), (_.frame = this.frame))
        : this.lastPlay.set(e, { t: h, x: c, z: u, frame: this.frame });
      let b = 0;
      if (a >= 0) b = Math.min(a, m.length - 1);
      else if (m.length > 1) {
        let t = this.lastVariant.get(e) ?? -1;
        ((b = Math.floor(Math.random() * (m.length - 1))),
          b >= t && b++,
          b >= m.length && (b = 0),
          this.lastVariant.set(e, b));
      }
      let x = m[b],
        S = this.ac.createBufferSource();
      S.buffer = x;
      let C = t?.rate,
        w = t?.volume,
        T = Math.min(
          8,
          Math.max(
            0.1,
            (C !== void 0 && Number.isFinite(C) ? C : 1) *
              (1 + (Math.random() * 2 - 1) * o.jitter),
          ),
        );
      S.playbackRate.value = T;
      let E = d ? this.occlusion(s) : 0,
        D =
          Math.min(4, Math.max(0, w !== void 0 && Number.isFinite(w) ? w : 1)) *
          o.gain *
          (1 - 0.72 * E);
      if (
        (y.input.gain.cancelScheduledValues(h),
        y.input.gain.setValueAtTime(D, h),
        d && y.panner && y.air)
      ) {
        let e = y.panner;
        ((e.refDistance = o.ref),
          e.positionX
            ? ((e.positionX.value = c),
              (e.positionY.value = l),
              (e.positionZ.value = u))
            : e.setPosition(c, l, u),
          (y.air.frequency.value = this.hz(
            E > 0 ? Math.min(Fr(s), Pr(E)) : Fr(s),
          )));
      }
      (y.send &&
        (y.send.gain.value =
          o.send *
          (d ? 0.35 + 0.65 * Math.min(1, s / 60) : 0.5) *
          (1 - 0.8 * E)),
        S.connect(y.input));
      let ee = h + (Number.isFinite(i) && i > 0 ? i : 0);
      if (
        (S.start(ee),
        (y.src = S),
        (y.pri = o.pri),
        (y.startedAt = ee),
        (y.until = ee + x.duration / T + 0.05),
        (y.name = e),
        this.counters.oneShots++,
        g && r && d && i <= 0)
      ) {
        let t = this.sustainHit(e, c, u, g.radius);
        t
          ? ((t.voice = y), (t.src = S), (t.last = h))
          : this.sustains.push({
              name: e,
              x: c,
              z: u,
              last: h,
              started: h,
              voice: y,
              src: S,
              loop: null,
              body: null,
            });
      }
      if (
        (o.duck && this.duck(o.duck[0], o.duck[1]),
        e === `explosion` && d && s < 18)
      ) {
        let e = 1 - s / 18;
        (this.shock(0.55 + 0.75 * e, 2 + 2.5 * e),
          this.play(`tinnitus`, { volume: 0.3 + 0.7 * e }, void 0, !1, 0.06));
      }
      return !0;
    }
    acquire(e, t, n) {
      let r = this.pools[e];
      if (!r) return null;
      let i = null;
      for (let e = 0; e < r.length; e++) {
        let a = r[e];
        if (a.until <= n) {
          if (a.src) {
            try {
              a.src.disconnect();
            } catch {}
            a.src = null;
          }
          return a;
        }
        a.pri <= t &&
          (!i ||
            a.pri < i.pri ||
            (a.pri === i.pri && a.startedAt < i.startedAt)) &&
          (i = a);
      }
      if (!i) return null;
      if ((this.counters.stolen++, i.src)) {
        try {
          (i.src.stop(), i.src.disconnect());
        } catch {}
        i.src = null;
      }
      return i;
    }
    sustains = [];
    findBody = null;
    get sustainCount() {
      return this.sustains.length;
    }
    sustainHit(e, t, n, r) {
      let i = null,
        a = r * r;
      for (let r of this.sustains) {
        if (r.name !== e) continue;
        let o = (r.x - t) ** 2 + (r.z - n) ** 2;
        o <= a && ((a = o), (i = r));
      }
      return (i && ((i.x = t), (i.z = n)), i);
    }
    sustainLoopLevel(e, t) {
      let n =
        t !== void 0 && Number.isFinite(t)
          ? Math.min(1.5, Math.max(0, t))
          : 0.8;
      (e.setVolume(n),
        e.setParam(`slip`, Math.min(1, Math.max(0.35, (n - 0.35) / 0.65))));
    }
    updateSustains(e) {
      let t = this.sustains;
      for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n],
          i = ht[r.name]?.sustain,
          a = !i || e - r.last > i.gap,
          o = !1;
        if (r.loop) {
          if (a && e - r.started > (i?.min ?? 0)) (r.loop.stop(), (o = !0));
          else if (r.body) {
            let e = r.body;
            (r.loop.setPosition(e.x, e.y + 0.3, e.z),
              r.loop.setParam(`speed`, Math.sqrt(e.vx * e.vx + e.vz * e.vz)),
              (r.x = e.x),
              (r.z = e.z));
          }
        } else {
          let t = r.voice;
          if (!t || t.src !== r.src || t.until <= e) o = !0;
          else if (a && e - r.started > (i?.min ?? 0)) {
            (Y(t.input.gain, e),
              t.input.gain.setTargetAtTime(0, e, 0.09),
              (t.until = Math.min(t.until, e + 0.45)));
            try {
              t.src.stop(e + 0.45);
            } catch {}
            o = !0;
          }
        }
        o && ((t[n] = t[t.length - 1]), t.pop());
      }
    }
    limitVoices(e, t, n, r) {
      let i = this.pools[e];
      if (!i) return;
      let a = 0,
        o = null;
      for (let e of i)
        e.until <= r ||
          e.name !== t ||
          (a++, (!o || e.startedAt < o.startedAt) && (o = e));
      if (!(a < n || !o || !o.src)) {
        (Y(o.input.gain, r), o.input.gain.setTargetAtTime(0, r, 0.03));
        try {
          o.src.stop(r + 0.12);
        } catch {}
        ((o.until = r + 0.12), (o.name = ``), this.counters.limited++);
      }
    }
    activeOneShots() {
      if (!this.created) return 0;
      let e = this.ac.currentTime,
        t = 0;
      for (let n in this.pools) for (let r of this.pools[n]) r.until > e && t++;
      return t;
    }
    loop(e, t, n) {
      let r = new mr(e, fr[e] ?? fr.ambient_city, this, t, n);
      return (
        n || this.externalLoops.set(e, performance.now()),
        this.loops.push(r),
        r
      );
    }
    onLoopStopped(e) {
      (e.voice && this.derealize(e, 0.15),
        (e.spare &&= (e.spare.dispose(), null)));
    }
    makeVoice(e) {
      let t = Rr(e, this);
      return ((t.loopName = e), t);
    }
    tick = !0;
    tickDt = 0;
    tickN = 0;
    tickAcc = _r;
    dtAcc = 0;
    tickB = !1;
    tickDtB = 0;
    tickAccB = _r / 2;
    dtAccB = 0;
    beginFrame(e, t) {
      let n = e > 0 ? Math.min(250, e) : 0,
        r = t > 0 ? t : 0;
      if (
        ((this.dtAcc += r),
        (this.dtAccB += r),
        (this.tickAcc += n),
        (this.tickAccB += n),
        this.tickAccB >= 29.333333333333336
          ? ((this.tickB = !0),
            (this.tickDtB = this.dtAccB),
            (this.dtAccB = 0),
            (this.tickAccB = Math.min(this.tickAccB - _r, _r)))
          : (this.tickB = !1),
        this.tickAcc < 29.333333333333336)
      ) {
        this.tick = !1;
        return;
      }
      ((this.tick = !0),
        this.tickN++,
        (this.tickDt = this.dtAcc),
        (this.dtAcc = 0),
        (this.tickAcc = Math.min(this.tickAcc - _r, _r)));
    }
    pool = [];
    get pooled() {
      return this.pool.length;
    }
    poolCount(e) {
      let t = 0;
      for (let n = 0; n < this.pool.length; n++)
        this.pool[n].poolKey === e && t++;
      return t;
    }
    park(e, t, n) {
      if (!e.poolable || !t.panner || !t.air || !t.occ) return !1;
      let r = jr(t.name, t.state.params);
      if (this.poolCount(r) >= Tr) return !1;
      if (this.pool.length >= Er) {
        let e = 0;
        for (; e < this.pool.length - 1 && this.pool[e].keepPooled;) e++;
        this.retire(e);
      }
      return (
        (e.poolKey = r),
        (e.keepPooled = Ar.test(r)),
        (e.routing = [t.panner, t.air, t.send, t.occ]),
        e.park(n),
        this.pool.push(e),
        !0
      );
    }
    retire(e) {
      let t = this.pool[e];
      (this.pool.splice(e, 1), t.stop(0.02), this.dying.push(t));
    }
    unpool(e) {
      let t = jr(e.name, e.state.params),
        n = -1;
      for (let e = this.pool.length - 1; e >= 0; e--)
        if (this.pool[e].poolKey === t) {
          n = e;
          break;
        }
      if (n < 0) return !1;
      let r = this.pool[n];
      this.pool.splice(n, 1);
      let i = r.routing;
      r.routing = null;
      let a = i[0],
        o = i[1],
        s = i[2],
        c = i[3],
        l = e.meta;
      ((a.refDistance = l.ref),
        a.positionX
          ? ((a.positionX.value = e.x),
            (a.positionY.value = e.y),
            (a.positionZ.value = e.z))
          : a.setPosition(e.x, e.y, e.z),
        (e.wx = e.x),
        (e.wy = e.y),
        (e.wz = e.z));
      let u = l.bus === `room` ? 0 : this.occlusion(e.dist),
        d = this.ac.currentTime;
      return (
        Y(c.gain, d),
        c.gain.setValueAtTime(1 - 0.72 * u, d),
        Y(o.frequency, d),
        o.frequency.setValueAtTime(
          this.hz(u > 0 ? Math.min(Fr(e.dist), Pr(u)) : Fr(e.dist)),
          d,
        ),
        s && (Y(s.gain, d), s.gain.setValueAtTime(l.send, d)),
        (r.detached &&=
          (a.connect(this.bus[l.bus === `amb` ? `ambPos` : l.bus]),
          s?.connect(this.revSend),
          !1)),
        r.unpark(e.state),
        (e.voice = r),
        (e.panner = a),
        (e.air = o),
        (e.occ = c),
        (e.send = s),
        (e.lastAir = e.dist),
        (e.lastOcc = u),
        (e.occGain = 1 - 0.72 * u),
        this.counters.realized++,
        this.prof.reused++,
        !0
      );
    }
    tendPool(e) {
      for (let t = this.pool.length - 1; t >= 0; t--) {
        let n = this.pool[t];
        if (!n.keepPooled && e - n.parkedAt > Dr) {
          this.retire(t);
          continue;
        }
        if (!n.detached && e >= n.detachAt && n.routing) {
          try {
            (n.routing[0]?.disconnect(), n.routing[2]?.disconnect());
          } catch {}
          n.detached = !0;
        }
      }
    }
    prebuildList = null;
    get prebuildPending() {
      return this.prebuildList ? this.prebuildList.length : -1;
    }
    prebuildPool(e = 1 / 0) {
      if (!this.created) return !1;
      let t = (this.prebuildList ??= kr[this.quality].slice()),
        n = performance.now();
      for (; t.length;) {
        let r = t[0],
          i = r.indexOf(`#`);
        if (!this.prebuild(i < 0 ? r : r.slice(0, i), i >= 0)) return !1;
        if ((t.shift(), performance.now() - n > e)) return !t.length;
      }
      return !0;
    }
    prebuild(e, t) {
      let n = fr[e],
        r = {
          vol: 0,
          rate: 1,
          params: t
            ? { swarm: 1, rpm: 0, throttle: 0.1 }
            : { rpm: 0, throttle: 0.1 },
          doppler: 1,
        },
        i = this.makeVoice(e);
      if (!i.start(r)) return !1;
      let a = this.ac,
        o = a.createBiquadFilter();
      ((o.type = `lowpass`), (o.frequency.value = this.nyq));
      let s = a.createGain(),
        c = this.makePanner();
      ((c.refDistance = n.ref), i.out.connect(o).connect(s).connect(c));
      let l = null;
      (n.send > 0 &&
        ((l = a.createGain()), (l.gain.value = n.send), i.out.connect(l)),
        (i.routing = [c, o, l, s]),
        (i.poolKey = jr(e, r.params)),
        (i.keepPooled = Ar.test(i.poolKey)));
      let u = a.currentTime;
      return (
        (i.parkedAt = u),
        (i.detachAt = u),
        (i.detached = !0),
        this.pool.push(i),
        this.prof.prebuilt++,
        !0
      );
    }
    realize(e, t = !0, n = !0) {
      if (e.positional && this.pool.length) {
        if (n) {
          if (this.unpool(e)) return 1;
        } else if (this.poolCount(jr(e.name, e.state.params))) return 0;
      }
      if (!t) return 0;
      let r = e.spare ?? this.makeVoice(e.name);
      if (!r.start(e.state)) return ((e.spare = r), -1);
      e.spare = null;
      let i = e.meta;
      if (e.positional) {
        let t = this.ac.createBiquadFilter();
        ((t.type = `lowpass`), (t.frequency.value = this.hz(Fr(e.dist))));
        let n = this.makePanner();
        ((n.refDistance = i.ref),
          n.positionX
            ? ((n.positionX.value = e.x),
              (n.positionY.value = e.y),
              (n.positionZ.value = e.z))
            : n.setPosition(e.x, e.y, e.z),
          (e.wx = e.x),
          (e.wy = e.y),
          (e.wz = e.z));
        let a = this.ac.createGain(),
          o = i.bus === `room` ? 0 : this.occlusion(e.dist);
        ((a.gain.value = 1 - 0.72 * o),
          o > 0 && (t.frequency.value = this.hz(Math.min(Fr(e.dist), Pr(o)))),
          r.out
            .connect(t)
            .connect(a)
            .connect(n)
            .connect(this.bus[i.bus === `amb` ? `ambPos` : i.bus]),
          (e.air = t),
          (e.occ = a),
          (e.panner = n),
          (e.lastAir = e.dist),
          (e.lastOcc = o),
          (e.occGain = 1 - 0.72 * o));
      } else r.out.connect(this.bus[i.bus]);
      if (i.send > 0) {
        let t = this.ac.createGain();
        ((t.gain.value = i.send),
          r.out.connect(t).connect(this.revSend),
          (e.send = t));
      }
      return (
        (e.voice = r),
        this.counters.realized++,
        this.prof.built++,
        (this.builtBy[e.name] = (this.builtBy[e.name] ?? 0) + 1),
        2
      );
    }
    derealize(e, t = 0.2) {
      let n = e.voice;
      n &&
        (this.park(n, e, t) ||
          (n.stop(t),
          this.dying.push(n),
          (n.routing = [e.panner, e.air, e.send, e.occ])),
        (e.voice = null),
        (e.panner = null),
        (e.air = null),
        (e.occ = null),
        (e.send = null),
        this.counters.derealized++);
    }
    reap(e) {
      let t = 0;
      for (let n = this.dying.length - 1; n >= 0; n--) {
        let r = this.dying[n];
        if (e < r.deadAt) continue;
        if (t >= wr) {
          this.prof.reapDeferred++;
          break;
        }
        (t++, r.dispose());
        let i = r.routing;
        if (i)
          for (let e = 0; e < i.length; e++)
            try {
              i[e]?.disconnect();
            } catch {}
        ((r.routing = null),
          (this.dying[n] = this.dying[this.dying.length - 1]),
          this.dying.pop());
      }
    }
    updateLoops() {
      if (
        !this.isRunning ||
        (!this.tick && !this.deferred.length && !this.dying.length)
      )
        return;
      let e = this.ac.currentTime;
      (this.deferred.length && this.flushDeferred(e),
        this.dying.length && this.reap(e),
        this.tick && this.tickLoops(e));
    }
    rz = { realized: 0, built: 0, reused: 0, ms: 0, swapped: !1, t0: 0 };
    tickLoops(e) {
      let t = performance.now(),
        n = this.tickDt;
      this.tickHouse(e, n, t);
      let r = this.loops,
        i = this.rz,
        a = 0;
      for (let e = 0; e < r.length; e++) r[e].voice && a++;
      ((i.realized = a),
        (i.built = i.reused = 0),
        (i.ms = 0),
        (i.swapped = !1),
        (i.t0 = t));
      let o = this.tickN;
      for (let a = r.length - 1; a >= 0; a--) {
        let s = r[a];
        if (s.stopped) {
          this.dropLoop(a);
          continue;
        }
        if (!s.voice && s.state.vol <= 5e-4) {
          ((s.accDt = 0), (s.px = NaN));
          continue;
        }
        let c = s.positional
          ? s.dist > vr
            ? 3
            : s.dist > yr
              ? 2
              : 1
          : s.voice
            ? 3
            : 1;
        if (c > 1 && (o + s.phase) % c !== 0) {
          ((s.accDt += n), this.prof.farSkips++);
          continue;
        }
        let l = n + s.accDt;
        ((s.accDt = 0), s.positional ? this.spatial(s, l) : (s.dist = 0));
        let u = s.state.vol > 5e-4 && (!s.positional || s.dist < s.meta.max);
        if (!s.voice) {
          u && t >= s.retryAt && this.admit(s);
          continue;
        }
        if (u) s.outOfRangeT = 0;
        else if (
          ((s.outOfRangeT += l), s.outOfRangeT > 0.6 || s.state.vol <= 5e-4)
        ) {
          (this.derealize(s, 0.2), i.realized--);
          continue;
        }
        (s.panner && this.place(s, e),
          s.voice.apply(s.state, l),
          this.prof.applies++);
      }
      !i.built &&
        this.prebuildList !== null &&
        this.prebuildList.length &&
        i.ms < Cr &&
        this.prebuildPool(0);
      let s = performance.now() - t;
      s > this.prof.loopsMaxMs && (this.prof.loopsMaxMs = s);
    }
    tickHouse(e, t, n) {
      let r = this.indoorT > 0 ? this.indoorT : 0;
      (this.indoorS !== r &&
        ((this.indoorS += (r - this.indoorS) * Math.min(1, t / 0.13)),
        Math.abs(this.indoorS - r) < 0.01 && (this.indoorS = r)),
        this.sustains.length && this.updateSustains(e),
        this.muffle > 0 &&
          ((this.muffle = Math.max(0, this.muffle - this.muffleRate * t)),
          this.applyWorldFilter()),
        this.pool.length && this.tickN % 3 == 0 && this.tendPool(e),
        (this.houseT -= t),
        this.houseT <= 0 && this.house(n));
    }
    house(e) {
      ((this.houseT = 1), (this.isRunning = this.ac.state === `running`));
      for (let t = 0; t < this.loops.length; t++) this.loops[t].voice?.touch(e);
      let t = this.ac.currentTime;
      for (let e in this.pools) {
        let n = this.pools[e];
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if (!(!r.src || r.until > t)) {
            try {
              r.src.disconnect();
            } catch {}
            r.src = null;
          }
        }
      }
      if (
        this.roomConv &&
        this.roomLoaded &&
        this.indoorT <= 0 &&
        this.indoorS <= 0
      ) {
        if (!this.outdoorSince) this.outdoorSince = e;
        else if (e - this.outdoorSince > gr[+!!this.mobile]) {
          try {
            this.roomConv.buffer = null;
          } catch {}
          ((this.roomLoaded = this.roomWanted = null),
            (this.outdoorSince = 0),
            this.roomReleases++);
        }
      } else this.outdoorSince = 0;
      ++this.gcTick >= 5 && ((this.gcTick = 0), this.bank.gc(e));
    }
    dropLoop(e) {
      let t = this.loops,
        n = t[e];
      (n.voice && this.derealize(n, 0.15), (t[e] = t[t.length - 1]), t.pop());
    }
    spatial(e, t) {
      let n = e.x - this.lx,
        r = e.y - this.ly,
        i = e.z - this.lz,
        a = Math.sqrt(n * n + r * r + i * i);
      if (t > 0 && e.px === e.px) {
        let n = t * 6 < 1 ? t * 6 : 1,
          r = (e.x - e.px) / t,
          i = (e.z - e.pz) / t;
        (r * r + i * i > 8100 && (r = i = 0),
          (e.svx += (r - e.svx) * n),
          (e.svz += (i - e.svz) * n));
      }
      ((e.px = e.x), (e.pz = e.z));
      let o = e.state;
      o.vel = Math.sqrt(e.svx * e.svx + e.svz * e.svz);
      let s = e.meta.doppler;
      if (s > 0 && a > 0.5) {
        let t = n / a,
          r = i / a,
          c = e.svx * t + e.svz * r,
          l = (343 + (this.lvx * t + this.lvz * r) * 0.8) / (343 + c * 0.8);
        o.doppler = 1 + ((l < 0.8 ? 0.8 : l > 1.25 ? 1.25 : l) - 1) * s;
      } else o.doppler = 1;
      e.dist = a;
    }
    place(e, t) {
      let n = e.panner;
      Math.abs(e.x - e.wx) + Math.abs(e.y - e.wy) + Math.abs(e.z - e.wz) <
        0.02 ||
        (n.positionX
          ? ((n.positionX.value = e.x),
            (n.positionY.value = e.y),
            (n.positionZ.value = e.z))
          : n.setPosition(e.x, e.y, e.z),
        (e.wx = e.x),
        (e.wy = e.y),
        (e.wz = e.z),
        this.prof.pannerWrites++);
      let r = e.dist,
        i = e.meta.bus === `room` ? 0 : this.occlusion(r);
      e.air &&
        (Math.abs(r - e.lastAir) > 3 || Math.abs(i - e.lastOcc) > 0.03) &&
        this.filterLoop(e, r, i, t);
    }
    filterLoop(e, t, n, r) {
      ((e.lastAir = t), (e.lastOcc = n));
      let i = Fr(t);
      (e.air.frequency.setTargetAtTime(
        this.hz(n > 0 ? Math.min(i, Pr(n)) : i),
        r,
        0.1,
      ),
        (n > 0 || e.occGain !== 1) &&
          ((e.occGain = 1 - 0.72 * n),
          e.occ?.gain.setTargetAtTime(e.occGain, r, 0.1)),
        e.send &&
          e.send.gain.setTargetAtTime(
            e.meta.send * (0.35 + 0.65 * Math.min(1, t / 60)) * (1 - 0.8 * n),
            r,
            0.1,
          ));
    }
    admit(e) {
      let t = this.rz;
      if (t.ms > Cr) {
        this.prof.realizeDeferred++;
        return;
      }
      if (t.realized < this.loopBudget) {
        let n = performance.now(),
          r = this.realize(e, t.built < xr, t.reused < Sr),
          i = performance.now() - n;
        ((t.ms += i),
          i > this.prof.realizeMaxMs &&
            ((this.prof.realizeMaxMs = i),
            (this.slowRealize = `${e.name}:${r}`)),
          r === 0
            ? this.prof.realizeDeferred++
            : r < 0
              ? (e.retryAt = t.t0 + 120)
              : (t.realized++, r === 1 ? t.reused++ : t.built++));
        return;
      }
      if (t.swapped || this.tickN < this.evictTick) return;
      ((t.swapped = !0),
        (this.evictTick = this.tickN + 3),
        this.prof.evictScans++);
      let n = this.loops,
        r = null,
        i = 1 / 0;
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        if (!t.voice) continue;
        let a = Nr(t);
        a < i && ((i = a), (r = t));
      }
      r &&
        Nr(e) > i * 1.4 &&
        (this.derealize(r, 0.25),
        this.realize(e) > 0 && this.counters.evicted++);
    }
    houseT = 1;
    gcTick = 0;
    outdoorSince = 0;
    roomReleases = 0;
    evictTick = 0;
    deferred = [];
    flushDeferred(e) {
      let t = this.deferred;
      for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n],
          i = e - r.t,
          a = this.bank.variants(
            r.recipe ?? ht[r.name]?.recipe ?? r.name,
          )?.length;
        (!a && i <= br + r.delay) ||
          (t.splice(n, 1),
          a && i <= br + r.delay
            ? (this.play(
                r.name,
                r.opts,
                r.recipe,
                !1,
                Math.max(0, r.delay - i),
                r.variant,
              ),
              this.prof.deferredPlays++)
            : this.prof.deferredLate++);
      }
    }
    get deferredCount() {
      return this.deferred.length;
    }
    realizedLoops() {
      let e = 0;
      for (let t of this.loops) t.voice && e++;
      return e;
    }
  };
