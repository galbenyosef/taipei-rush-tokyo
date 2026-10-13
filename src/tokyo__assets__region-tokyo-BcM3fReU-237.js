// tokyo__assets__region-tokyo-BcM3fReU 237 — math
// Lines 95389-95789 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var a$ = {
    tk_piyo: 2,
    tk_kakko: 2,
    tk_door: 1,
    tk_pa: 1,
    tk_konbini: 2,
    tk_bell: 2,
    tk_bikestart: 1,
    tk_kankan: 1,
    tk_suzu: 2,
    tk_crow: 3,
    tk_siren_far: 2,
    tk_atc: 1,
    tk_atcb: 1,
    tk_buzz: 1,
    tk_yuyake: 1,
    tk_hotaru: 1,
    tk_hyoshigi: 1,
    tk_mel0: 2,
    tk_mel1: 2,
    tk_mel2: 2,
    tk_mel3: 2,
    tk_mel4: 2,
    tk_mel5: 2,
    tk_mel6: 2,
    tk_mel7: 2,
  },
  o$ = [
    `tk_mel0`,
    `tk_mel1`,
    `tk_mel2`,
    `tk_mel3`,
    `tk_mel4`,
    `tk_mel5`,
    `tk_mel6`,
    `tk_mel7`,
  ],
  s$ = [`tk_shrine`, `tk_packer`, `tk_crossing`, `tk_mushi`, `tk_park_day`],
  c$ = {
    tk_koto: {
      roots: [55, 67, 79],
      dur: 2.4,
      sr: 32e3,
      release: 0.2,
      sustain: !1,
    },
    tk_shaku: {
      roots: [62, 69, 76],
      dur: 2.4,
      sr: 22050,
      release: 0.15,
      sustain: !0,
    },
    tk_brass: {
      roots: [55, 62, 69, 76],
      dur: 1.4,
      sr: 32e3,
      release: 0.08,
      sustain: !0,
    },
    tk_slap: {
      roots: [28, 40, 52],
      dur: 1.3,
      sr: 22050,
      release: 0.05,
      sustain: !1,
    },
    tk_glock: {
      roots: [72, 84, 96],
      dur: 1.6,
      sr: 32e3,
      release: 0.2,
      sustain: !1,
    },
  },
  l$ = (e) => e.indexOf(`/tk_`) > 0,
  u$ = [2e4, 8e3],
  d$ = class {
    bank;
    mobile;
    low;
    worker = null;
    failed = !1;
    outstanding = 0;
    idle = null;
    stats = { spawns: 0, rendered: 0, errors: 0, needs: 0, ms: 0 };
    t0 = new Map();
    constructor(e, t, n) {
      ((this.bank = e), (this.mobile = t), (this.low = n));
    }
    take = (e) => {
      let t = null,
        n = null;
      for (let r of e) l$(r) ? (t ??= []).push(r) : (n ??= []).push(r);
      return (
        t &&
          this.send(
            { type: `render`, ids: t, mobile: this.mobile, low: this.low },
            t.length,
          ),
        n ?? []
      );
    };
    needs = (e, t) => {
      (this.stats.needs++, this.send({ type: `needs`, station: e, ks: t }, 1));
    };
    ensure() {
      if (this.worker || this.failed) return this.worker;
      try {
        let e = new Worker(
          new URL(
            `/tokyo/assets/region-tokyo-audioWorker-GAP5c6S0.js`,
            `` + import.meta.url,
          ),
          { type: `module`, name: `tokyo-audio` },
        );
        ((e.onmessage = (e) => this.onMsg(e.data)),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              console.warn(`[audio:tokyo] synth worker failed`),
              (this.failed = !0),
              this.worker?.terminate(),
              (this.worker = null));
          }),
          (this.worker = e),
          this.stats.spawns++);
      } catch {
        this.failed = !0;
      }
      return this.worker;
    }
    send(e, t) {
      let n = this.ensure();
      if (!n) {
        if (e.type === `render`) for (let t of e.ids) this.bank.put(t, 0);
        return;
      }
      if (
        (this.idle && clearTimeout(this.idle),
        (this.idle = null),
        (this.outstanding += t),
        e.type === `render`)
      )
        for (let t of e.ids) this.t0.set(t, performance.now());
      n.postMessage(e);
    }
    onMsg(e) {
      if (e.type === `buf` && e.id && e.ch && e.sr) {
        this.stats.rendered++;
        let t = this.t0.get(e.id) ?? this.t0.get(e.id.replace(/\/\d+$/, `/*`));
        (t !== void 0 &&
          (this.stats.ms = Math.max(this.stats.ms, performance.now() - t)),
          this.bank.put(e.id, e.sr, e.ch),
          !e.id.endsWith(`/*`) && this.t0.delete(e.id) && this.done());
      } else
        e.type === `done` && e.id
          ? (this.bank.put(e.id, 0), this.t0.delete(e.id) && this.done())
          : e.type === `needs` && e.ids && e.station !== void 0
            ? (this.bank.onNeeds?.(e.station, e.ks ?? [], e.ids),
              this.bank.request(e.ids),
              this.done())
            : e.type === `err` &&
              (this.stats.errors++,
              console.warn(`[audio:tokyo] synth error`, e.id, e.msg));
    }
    done() {
      ((this.outstanding = Math.max(0, this.outstanding - 1)),
        !(this.outstanding > 0 || !this.worker) &&
          (this.idle && clearTimeout(this.idle),
          (this.idle = setTimeout(() => {
            ((this.idle = null),
              !(this.outstanding > 0 || !this.worker) &&
                (this.worker.terminate(), (this.worker = null)));
          }, u$[+!!this.mobile]))));
    }
  },
  f$ = { quiet: !1 },
  p$ = class extends Pr {
    next = 0;
    sub = !1;
    gSub = null;
    lastVol = NaN;
    poolable = !0;
    constructor(e) {
      (super(e), (this.bufIds = [`tk_piyo`, `tk_kakko`]));
    }
    onUnpark(e) {
      ((this.next = e + 0.05), (this.sub = !1), (this.lastVol = NaN));
    }
    start(e) {
      let t = this.host.bank;
      return !t.get(`sfx/tk_piyo/0`) || !t.get(`sfx/tk_kakko/0`)
        ? (t.wantSfx(`tk_piyo`), t.wantSfx(`tk_kakko`), !1)
        : ((this.gSub = this.gain(0.55, this.out)),
          (this.started = !0),
          (this.next = this.host.ac.currentTime + 0.05),
          (this.out.gain.value = 0),
          this.apply(e, 0),
          !0);
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac,
        r = n.currentTime,
        i = f$.quiet ? 0 : e.vol;
      (Math.abs(i - this.lastVol) > 0.01 || Number.isNaN(this.lastVol)) &&
        ((this.lastVol = i), this.out.gain.setTargetAtTime(i, r, 0.05));
      let a = e.params.state !== void 0;
      if (
        Math.round(a ? e.params.state : (e.params.rate ?? 0)) !== 1 ||
        i <= 0
      ) {
        ((this.next = r + 0.06), (this.sub = !1));
        return;
      }
      let o = Math.round(e.params.variant ?? 0) === 1,
        s = o ? `tk_kakko` : `tk_piyo`,
        c = o ? 0.9 : 0.75;
      for (; this.next < r + 0.15;) {
        let e = Math.max(this.next, r),
          t = this.host.bank.get(`sfx/${s}/${+!!this.sub}`);
        if (t) {
          let r = n.createBufferSource();
          ((r.buffer = t),
            r.connect(this.sub ? this.gSub : this.out),
            r.start(e));
        }
        ((this.sub = !this.sub), (this.next = e + c));
      }
    }
  },
  m$ = (e, t, n) => (e < t ? t : e > n ? n : e),
  h$ = (e, t, n, r, i = 0.06) => {
    Math.abs(t - n.v) <= Math.abs(n.v) * 0.02 + 1e-4 ||
      ((n.v = t), e.setTargetAtTime(t, r, i));
  },
  g$ = () => ({ v: NaN }),
  _$ = class extends Pr {
    tyre;
    tyreG;
    chain;
    chainG;
    tick;
    tickG;
    l = {
      tyreF: g$(),
      tyre: g$(),
      chainF: g$(),
      chain: g$(),
      tickF: g$(),
      tick: g$(),
      vol: g$(),
    };
    poolable = !0;
    start(e) {
      let t = this.host.bank.get(`noise/pink`);
      if (!t) return !1;
      ((this.tyreG = this.gain(0, this.out)),
        (this.tyre = this.filt(`bandpass`, 500, 0.7, this.tyreG)),
        this.src(t, !0, Math.random() * 1.5).connect(this.tyre),
        (this.chainG = this.gain(0, this.out)),
        (this.chain = this.filt(`bandpass`, 900, 4, this.chainG)),
        this.src(t, !0, Math.random() * 1.5).connect(this.chain));
      let n = this.gain(0, this.out);
      this.tickG = n;
      let r = this.gain(0, this.filt(`highpass`, 3200, 0.7, n));
      this.src(t, !0, Math.random() * 1.5).connect(r.gain);
      let i = new Float32Array(24),
        a = new Float32Array(24);
      for (let e = 1; e < 24; e++) i[e] = 1 / 24;
      return (
        (this.tick = this.osc(
          this.host.ac.createPeriodicWave(i, a, { disableNormalization: !0 }),
          20,
          r,
        )),
        (this.started = !0),
        this.apply(e, 0),
        (this.out.gain.value = e.vol),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      let n = this.host.ac.currentTime,
        r = this.l,
        i = e.params,
        a = m$(
          i.speed ??
            (i.rpm === void 0
              ? e.vel !== void 0 && e.vel >= 0
                ? e.vel
                : 0
              : i.rpm * 22),
          0,
          15,
        ),
        o = m$(i.throttle ?? 0, 0, 1),
        s = m$(a / 1.5, 0, 1),
        c = m$(this.host.wet ?? 0, 0, 1);
      (h$(
        this.tyre.frequency,
        this.hz((350 + a * 70) * (1 + 2.5 * c)),
        r.tyreF,
        n,
      ),
        h$(
          this.tyreG.gain,
          s * m$(0.08 + a / 25, 0, 0.45) * (1 + 0.8 * c),
          r.tyre,
          n,
          0.1,
        ));
      let l = a / 2.1 / 1.8;
      (h$(this.chain.frequency, this.hz(400 + l * 33 * 6), r.chainF, n),
        h$(this.chainG.gain, o > 0.1 ? s * 0.06 : 0, r.chain, n, 0.12),
        h$(
          this.tick.frequency,
          this.hz(m$((a / 2.1) * 18, 6, 70)),
          r.tickF,
          n,
          0.08,
        ),
        h$(
          this.tickG.gain,
          o <= 0.1 && a > 0.6 ? 0.22 * m$(a / 4, 0.4, 1) : 0,
          r.tick,
          n,
          0.08,
        ),
        h$(this.out.gain, e.vol, r.vol, n, 0.05));
    }
  },
  v$ = { day: `amb/tk_park_day`, night: `amb/tk_mushi` },
  y$ = class extends Pr {
    gd;
    gn;
    sd = null;
    sn = null;
    idD = ``;
    idN = ``;
    lastD = NaN;
    lastN = NaN;
    lastV = NaN;
    start(e) {
      let t = this.need(v$.day),
        n = this.need(v$.night);
      return !t || !n
        ? !1
        : ((this.idD = v$.day),
          (this.idN = v$.night),
          (this.bufIds = [this.idD, this.idN]),
          (this.gd = this.gain(0, this.out)),
          (this.gn = this.gain(0, this.out)),
          (this.sd = this.src(t, !0, Math.random() * t.duration)),
          this.sd.connect(this.gd),
          (this.sn = this.src(n, !0, Math.random() * n.duration)),
          this.sn.connect(this.gn),
          (this.started = !0),
          this.apply(e, 0),
          this.fadeTo(e.vol, 0.5),
          !0);
    }
    swap(e, t) {
      let n = this.need(t);
      if (!n) return !1;
      let r = this.host.ac.currentTime,
        i = e ? this.sn : this.sd;
      ((e ? this.gn : this.gd).gain.setTargetAtTime(0, r, 0.3),
        i?.stop(r + 1.5));
      let a = this.gain(0, this.out),
        o = this.src(n, !0, Math.random() * n.duration);
      return (
        o.connect(a),
        e
          ? ((this.gn = a), (this.sn = o), (this.idN = t), (this.lastN = NaN))
          : ((this.gd = a), (this.sd = o), (this.idD = t), (this.lastD = NaN)),
        (this.bufIds = [this.idD, this.idN]),
        !0
      );
    }
    apply(e, t) {
      if (!this.started) return;
      (v$.day !== this.idD && this.swap(!1, v$.day),
        v$.night !== this.idN && this.swap(!0, v$.night));
      let n = this.host.ac.currentTime,
        r = Math.min(1, Math.max(0, e.params.night ?? this.host.night)),
        i = Math.sqrt(1 - r),
        a = Math.sqrt(r);
      (Math.abs(i - this.lastD) < 0.02 ||
        ((this.lastD = i), this.gd.gain.setTargetAtTime(i, n, 0.5)),
        Math.abs(a - this.lastN) < 0.02 ||
          ((this.lastN = a), this.gn.gain.setTargetAtTime(a, n, 0.5)),
        Math.abs(e.vol - this.lastV) < 0.005 ||
          ((this.lastV = e.vol), this.out.gain.setTargetAtTime(e.vol, n, 0.2)));
    }
  },
  b$ =
    /Natural|Neural|Enhanced|Premium|Siri|Kyoko|Otoya|O-?ren|Hattori|Nanami|Keita|Mayu|Naoki|Shiori|Aoi|Daichi|Google/i,
  x$ =
    /\b(Bells|Bubbles|Whisper|Zarvox|Trinoids|Bad News|Good News|Jester|Organ|Superstar|Wobble|Bahh|Boing|Cellos)\b/i;
