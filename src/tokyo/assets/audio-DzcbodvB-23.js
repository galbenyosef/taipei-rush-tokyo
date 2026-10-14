// tokyo/assets/audio-DzcbodvB 23 — connect
// Lines 10752-11440 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
var si = class {
    ac;
    dest;
    reverbIn;
    fx;
    ch = {};
    sc;
    lp;
    out;
    nodes = [];
    srcs = [];
    ring = Array(ni).fill(null);
    ringI = 0;
    notePool = {};
    lastLp = 2e4;
    nyq = 2e4;
    deadAt = 0;
    attached = !0;
    makeup;
    rsend = null;
    vinylIn = null;
    constructor(e, t, n, r, i, a = 0.6, o = {}) {
      ((this.ac = e), (this.dest = t), (this.reverbIn = n), (this.fx = r));
      let s = (t) => {
          let n = e.createGain();
          return ((n.gain.value = t), this.nodes.push(n), n);
        },
        c = (this.makeup = s(0.95));
      c.connect(t);
      let l = e.createDynamicsCompressor();
      ((l.threshold.value = -18),
        (l.knee.value = 8),
        (l.ratio.value = 3.5),
        (l.attack.value = 0.006),
        (l.release.value = 0.2),
        l.connect(c));
      let u = e.createBiquadFilter();
      ((u.type = `highpass`),
        (u.frequency.value = 28),
        u.connect(l),
        this.nodes.push(l, u),
        (this.out = s(0)),
        this.out.connect(u));
      let d = this.out;
      if (r === `lofi`) {
        let t = e.createDelay(0.1);
        t.delayTime.value = 0.012;
        let n = e.createOscillator();
        n.frequency.value = 0.55;
        let r = s(0.0016);
        n.connect(r).connect(t.delayTime);
        let a = e.createOscillator();
        a.frequency.value = 5.8;
        let o = s(22e-5);
        (a.connect(o).connect(t.delayTime),
          n.start(),
          a.start(),
          this.srcs.push(n, a));
        let c = e.createBiquadFilter();
        ((c.type = `lowpass`),
          (c.frequency.value = Math.min(5200, e.sampleRate * 0.45)),
          (c.Q.value = 0.4),
          t.connect(c).connect(this.out),
          this.nodes.push(t, c, n, a),
          (d = t),
          (this.vinylIn = s(0.5)),
          this.vinylIn.connect(this.out),
          this.ensureVinyl(i));
      }
      ((this.lp = e.createBiquadFilter()),
        (this.lp.type = `lowpass`),
        (this.nyq = e.sampleRate * 0.45),
        (this.lp.frequency.value = Math.min(2e4, this.nyq)),
        (this.lp.Q.value = 0.8),
        this.lp.connect(d),
        this.nodes.push(this.lp));
      let f = s(a);
      (f.connect(this.lp), (this.sc = s(1)), this.sc.connect(f));
      let p = (this.rsend = n ? s(r === `hall` ? 1.8 : 1) : null);
      p && n && p.connect(n);
      for (let t of Object.keys($r)) {
        let n = $r[t],
          r = s(n.gain * (o[t] ?? 1)),
          i = r;
        if (typeof e.createStereoPanner == `function` && n.pan) {
          let t = e.createStereoPanner();
          ((t.pan.value = n.pan),
            r.connect(t),
            this.nodes.push(t),
            t.connect(n.sc ? this.sc : f));
        } else r.connect(n.sc ? this.sc : f);
        (p && n.send && r.connect(s(n.send)).connect(p),
          (this.ch[t] = i),
          (this.notePool[t] = { g: [], free: [] }));
      }
    }
    vinyl = !1;
    ensureVinyl(e) {
      if (this.vinyl || !this.vinylIn) return;
      let t = e.get(`amb/vinyl`);
      if (!t) return;
      this.vinyl = !0;
      let n = this.ac.createBufferSource();
      ((n.buffer = t),
        (n.loop = !0),
        n.connect(this.vinylIn),
        n.start(0, Math.random() * t.duration),
        this.srcs.push(n),
        this.nodes.push(n));
    }
    release(e = 0.12) {
      let t = this.ac.currentTime;
      (Y(this.out.gain, t), this.out.gain.setTargetAtTime(0, t, e / 3));
      let n = t + e + 0.05;
      for (let e = 0; e < this.ring.length; e++) {
        let t = this.ring[e];
        if (t) {
          try {
            t.stop(n);
          } catch {}
          this.ring[e] = null;
        }
      }
      for (let e in this.notePool) {
        let t = this.notePool[e].free;
        for (let e = 0; e < t.length; e++) t[e] > n && (t[e] = n);
      }
      this.deadAt = t + e + 0.15;
    }
    detach() {
      if (this.attached) {
        this.attached = !1;
        try {
          (this.makeup.disconnect(), this.rsend?.disconnect());
        } catch {}
      }
    }
    attach(e) {
      this.attached ||
        ((this.attached = !0),
        this.makeup.connect(this.dest),
        this.rsend && this.reverbIn && this.rsend.connect(this.reverbIn));
      let t = this.ac.currentTime;
      (Y(this.lp.frequency, t),
        Y(this.sc.gain, t),
        this.sc.gain.setValueAtTime(1, t),
        (this.lastLp = -1),
        this.fx === `lofi` && this.ensureVinyl(e));
    }
    track(e) {
      ((this.ring[this.ringI] = e), (this.ringI = (this.ringI + 1) % ni));
    }
    noteGain(e, t, n) {
      let r = this.notePool[e] ?? this.notePool.fx,
        i = r.g,
        a = r.free;
      for (let e = 0; e < i.length; e++)
        if (a[e] <= t)
          return ((a[e] = n), i[e].gain.cancelScheduledValues(t), i[e]);
      let o = this.ac.createGain();
      return (
        o.connect(this.ch[e] ?? this.ch.fx),
        i.length < ti && (i.push(o), a.push(n), this.nodes.push(o)),
        o
      );
    }
    setFilter(e, t, n, r) {
      let i = this.lp.frequency;
      ((e = Math.min(e, this.nyq)),
        (t = Math.min(t, this.nyq)),
        (e !== this.lastLp || t !== e) &&
          (i.setValueAtTime(e, n),
          t !== e && i.exponentialRampToValueAtTime(Math.max(60, t), r),
          (this.lastLp = t)));
    }
    duckAt(e, t, n) {
      (this.sc.gain.setValueAtTime(1 - t, e),
        this.sc.gain.setTargetAtTime(1, e + 0.015, n));
    }
    fadeIn(e, t) {
      (this.out.gain.cancelScheduledValues(e),
        this.out.gain.setValueAtTime(0, e),
        this.out.gain.linearRampToValueAtTime(t, e + 0.35));
    }
    stop(e = 0.12) {
      let t = this.ac.currentTime;
      (Y(this.out.gain, t), this.out.gain.setTargetAtTime(0, t, e / 3));
      let n = t + e + 0.05;
      for (let e of this.srcs)
        try {
          e.stop(n);
        } catch {}
      for (let e of this.ring)
        if (e)
          try {
            e.stop(n);
          } catch {}
      this.deadAt = t + e + 0.15;
    }
    dispose() {
      for (let e of this.nodes)
        try {
          e.disconnect();
        } catch {}
      ((this.nodes.length = 0), (this.srcs.length = 0), this.ring.fill(null));
    }
  },
  ci = class {
    ac;
    bank;
    mixer;
    st;
    pos;
    queue = [];
    qi = 0;
    sc = 0;
    notes = 0;
    dropped = 0;
    onSong = null;
    onDJ = null;
    constructor(e, t, n, r, i, a, o) {
      ((this.ac = e),
        (this.bank = t),
        (this.mixer = n),
        (this.st = r),
        (this.pos = { k: i, song: r.item(i), bar: a, barT: o }));
    }
    get song() {
      return this.pos.song;
    }
    pump(e, t = -1) {
      let n = 0;
      for (; this.pos.barT < e && n++ < 8;) this.genBar(t);
      let r = this.queue,
        i = this.ac.currentTime - 0.06;
      for (; this.qi < r.length && r[this.qi].t < e;) {
        let e = r[this.qi++];
        if (e.ev) {
          if (e.t < i && i > 0) {
            this.dropped++;
            continue;
          }
          this.playEv(e.ev, e.t, e.spb, void 0, e.off ?? 0);
        } else e.dj && this.onDJ?.(e.dj);
      }
      this.qi > 256 && (r.splice(0, this.qi), (this.qi = 0));
    }
    genBar(e) {
      let t = this.pos,
        n = t.song,
        r = 60 / n.bpm,
        i = n.beatsPerBar * r;
      t.bar === 0 &&
        n.dj &&
        t.barT >= e &&
        this.queue.push({ t: t.barT, ev: null, spb: r, dj: n.dj });
      let a = n.filter?.(t.bar) ?? [2e4, 2e4];
      (this.mixer.setFilter(
        a[0],
        a[1],
        Math.max(t.barT, this.ac.currentTime),
        t.barT + i,
      ),
        (this.sc = n.sidechain?.(t.bar) ?? 0));
      let o = n.bar(t.bar),
        s = this.queue.length;
      for (let i of o) {
        let a = i.t,
          o = a * 4,
          s = Math.round(o);
        n.swing !== 0.5 &&
          Math.abs(o - s) < 0.01 &&
          s % 2 == 1 &&
          (a += (n.swing - 0.5) * 0.5);
        let c = i.inst.startsWith(`drum:`) ? 0.003 : 0.007,
          l = t.barT + a * r + (Math.random() * 2 - 1) * c;
        if (l < e) {
          let t = l + Math.max(0.05, i.d * r);
          Me[i.inst]?.sustain &&
            t > e + 0.3 &&
            this.queue.push({ t: e + 0.02, ev: i, spb: r, off: e + 0.02 - l });
          continue;
        }
        this.queue.push({ t: l, ev: i, spb: r });
      }
      let c = this.queue.splice(s).sort((e, t) => e.t - t.t);
      for (let e of c) this.queue.push(e);
      ((t.barT += i),
        t.bar++,
        t.bar >= n.bars &&
          (t.k++,
          (t.song = this.st.item(t.k)),
          (t.bar = 0),
          this.onSong?.(t.song)));
    }
    playEv(e, t, n, r, i = 0) {
      let a = this.ac,
        o,
        s = 1,
        c = null;
      if (e.inst.startsWith(`drum:`)) o = this.bank.get(oi(e.inst));
      else if (e.inst.startsWith(`sfx:`))
        o = this.bank.variants(e.inst.slice(4))?.[0];
      else {
        if (((c = Me[e.inst]), !c)) return;
        let t = c.roots[0];
        for (let n of c.roots) Math.abs(n - e.m) < Math.abs(t - e.m) && (t = n);
        ((o = this.bank.get(ai(e.inst, t))), (s = 2 ** ((e.m - t) / 12)));
      }
      if (!o) return;
      let l = Math.max(t, a.currentTime),
        u = o.duration / s - i;
      if (i > 0 && (!c || u < 0.15)) return;
      let d = a.createBufferSource();
      ((d.buffer = o), s !== 1 && (d.playbackRate.value = s));
      let f = Math.max(0.05, e.d * n - i),
        p = 0,
        m = l + u;
      c &&
        ((p = c.sustain ? l + Math.min(f, u) : l + Math.min(u, f + 0.7)),
        (m = Math.min(l + u, p + c.release * 2 + 0.02)));
      let h = r ? a.createGain() : this.mixer.noteGain(e.ch, l, m + 0.02),
        g = Math.max(0, e.v) * (0.93 + Math.random() * 0.14);
      if (
        (i > 0
          ? (h.gain.setValueAtTime(0, l),
            h.gain.linearRampToValueAtTime(g, l + 0.08))
          : h.gain.setValueAtTime(g, l),
        c
          ? (h.gain.setTargetAtTime(0, p, c.release / 3),
            d.start(l, i * s),
            d.stop(m))
          : d.start(l),
        r)
      ) {
        d.connect(h).connect(r);
        return;
      }
      (d.connect(h),
        this.mixer.track(d),
        this.notes++,
        this.sc > 0 &&
          ei.has(e.inst) &&
          this.mixer.duckAt(l, this.sc, 60 / this.pos.song.bpm / 3.5));
    }
  },
  li = class {
    bank;
    getAc;
    dest;
    opts;
    defs;
    stations;
    station = -1;
    active = !1;
    sched = null;
    dying = [];
    mixers = [];
    epochs;
    durs = [];
    reverb = null;
    reverbRet = null;
    reverbLoading = !1;
    quietSince = 0;
    startAt = 0;
    lastStation = -1;
    ident = !1;
    identBus = null;
    pendingSay = null;
    needs = new Map();
    asked = new Set();
    lastUse = [];
    lastSweep = 0;
    waitFrom = 0;
    pinStems = !1;
    stemStats = {
      waits: 0,
      lastWaitMs: 0,
      released: 0,
      reverbLoads: 0,
      reverbReleases: 0,
    };
    dj;
    nowPlaying = null;
    onChange = null;
    constructor(e, t, n, r) {
      ((this.bank = e), (this.getAc = t), (this.dest = n), (this.opts = r));
      let i = (this.defs = r.defs ?? Mn);
      ((this.stations = i.map((e) => ({
        id: e.id,
        name: { zh: `${e.name.zh} ${e.freq}`, en: `${e.name.en} ${e.freq}` },
        genre: e.genre,
      }))),
        (this.dj = new Jr(r.speech)),
        (this.epochs = i.map(
          (e, t) => 60 + ((t * 7919 + Math.floor(Math.random() * 1e6)) % 900),
        )),
        (e.onNeeds = (e, t, n) => {
          for (let r of t) this.needs.set(`${e}:${r}`, { si: e, k: r, ids: n });
        }));
    }
    ask(e, t) {
      let n = `${e}:${t}`;
      this.asked.has(n) || (this.asked.add(n), this.bank.requestRadio(e, [t]));
    }
    stemsReady(e, t) {
      let n = this.needs.get(`${e}:${t}`);
      if (!n) return !1;
      for (let e of n.ids) if (!this.bank.has(e)) return !1;
      return !0;
    }
    sweep(e) {
      if (e - this.lastSweep < 5e3 || this.pinStems) return;
      this.lastSweep = e;
      let t = this.active && this.station >= 0 ? this.station : -1;
      t >= 0 && (this.lastUse[t] = e);
      let n = this.sched?.pos.k ?? -1,
        r = new Set();
      for (let [i, a] of this.needs) {
        let o = e - (this.lastUse[a.si] ?? e),
          s = +!!this.opts.mobile,
          c = a.si === this.lastStation ? Yr[s] : Xr[s];
        if (a.si === t ? a.k >= n - 1 : o < c) for (let e of a.ids) r.add(e);
        else (this.needs.delete(i), this.asked.delete(i));
      }
      let i = [];
      for (let e of this.bank.ids()) bt(e) && !r.has(e) && i.push(e);
      if (
        (i.length &&
          (this.bank.release(i), (this.stemStats.released += i.length)),
        t >= 0)
      )
        this.quietSince = 0;
      else if (!this.quietSince) this.quietSince = e;
      else if (
        this.reverb?.buffer &&
        !this.dying.length &&
        e - this.quietSince > Qr[+!!this.opts.mobile]
      )
        try {
          ((this.reverb.buffer = null), this.stemStats.reverbReleases++);
        } catch {}
    }
    setStation(e) {
      let t = this.defs.length,
        n = e < 0 || e >= t ? -1 : Math.floor(e);
      n !== this.station &&
        ((this.station = n),
        n >= 0 && (this.lastStation = n),
        this.restart(!0));
    }
    next() {
      let e = this.defs.length;
      this.setStation(
        this.station < 0 ? 0 : this.station + 1 >= e ? -1 : this.station + 1,
      );
    }
    setActive(e) {
      e !== this.active &&
        ((this.active = e),
        e &&
          this.station < 0 &&
          (this.station =
            this.lastStation >= 0
              ? this.lastStation
              : Math.floor(Math.random() * this.defs.length)),
        this.restart(!1));
    }
    restart(e) {
      ((this.sched &&=
        (this.sched.mixer.release(0.12),
        this.dying.push(this.sched.mixer),
        null)),
        this.dj.cancel(),
        (this.nowPlaying = null),
        (this.waitFrom = performance.now()),
        this.asked.clear());
      let t = this.active && this.station >= 0 && e;
      if (this.active && this.station >= 0) {
        let e = this.getAc(),
          t = this.dest();
        e && t && this.ensureReverb(e, t);
      }
      (t &&
        (this.opts.staticSfx(),
        (this.pendingSay = {
          station: this.station,
          at: performance.now() / 1e3 + 1.6,
        })),
        (this.ident = t),
        (this.startAt = t ? 1.05 : 0.05),
        this.emit());
    }
    ensureReverb(e, t) {
      if (!this.reverb)
        try {
          ((this.reverb = e.createConvolver()),
            (this.reverbRet = e.createGain()),
            (this.reverbRet.gain.value = 0.32),
            this.reverb.connect(this.reverbRet).connect(t));
        } catch {
          this.reverb = null;
          return;
        }
      if (this.reverb.buffer || this.reverbLoading) return;
      let n = this.reverb;
      ((this.reverbLoading = !0),
        this.stemStats.reverbLoads++,
        this.opts.loadIR((e) => {
          this.reverbLoading = !1;
          try {
            n.buffer = e;
          } catch {}
        }));
    }
    warmIdx = 0;
    prewarm() {
      if (this.warmIdx >= this.defs.length) return !0;
      let e = this.warmIdx++;
      try {
        let { k: t } = this.locate(e),
          n = this.defs[e].item(t);
        for (let e = 0; e < Math.min(4, n.bars); e++) n.bar(e);
      } catch {}
      return this.warmIdx >= this.defs.length;
    }
    locate(e) {
      let t = this.defs[e],
        n = performance.now() / 1e3 + this.epochs[e],
        r = (this.durs[e] ??= []);
      for (let e = 0; e < 2e3; e++) {
        let i = r[e];
        if (i === void 0) {
          let n = t.item(e);
          i = r[e] = (n.bars * n.beatsPerBar * 60) / n.bpm;
        }
        if (n < i) return { k: e, offset: n };
        n -= i;
      }
      return { k: 0, offset: 0 };
    }
    update() {
      let e = this.getAc();
      if (
        !e ||
        (this.opts.running ? !this.opts.running() : e.state !== `running`)
      )
        return;
      let t = e.currentTime;
      for (let e = this.dying.length - 1; e >= 0; e--)
        t > this.dying[e].deadAt &&
          (this.dying[e].detach(), this.dying.splice(e, 1));
      let n = performance.now();
      if ((this.sweep(n), !this.active || this.station < 0)) return;
      let r = this.dest();
      if (!r) return;
      let i = this.pendingSay;
      if (
        (i &&
          performance.now() / 1e3 >= i.at &&
          ((this.pendingSay = null),
          i.station === this.station &&
            this.dj.say(
              this.defs[this.station].ids[0],
              this.opts.lang(),
              this.opts.volume() * 0.9,
              15,
            )),
        !this.sched)
      ) {
        let { k: i, offset: a } = this.locate(this.station);
        if (
          (this.ask(this.station, i),
          this.ask(this.station, i + 1),
          (this.lastUse[this.station] = n),
          !this.stemsReady(this.station, i) && n - this.waitFrom < Zr)
        )
          return;
        (this.stemStats.waits++,
          (this.stemStats.lastWaitMs = Math.round(n - this.waitFrom)),
          this.ensureReverb(e, r));
        let o = this.defs[this.station],
          s = o.item(i),
          c = 60 / s.bpm,
          l = s.beatsPerBar * c,
          u = Math.min(s.bars - 1, Math.floor(a / l)),
          d = a - u * l,
          f = t + this.startAt,
          p = this.mixers[this.station];
        if (p) {
          let e = this.dying.indexOf(p);
          (e >= 0 && this.dying.splice(e, 1), p.attach(this.bank));
        } else
          p = this.mixers[this.station] = new si(
            e,
            r,
            this.reverb,
            o.fx,
            this.bank,
            o.trim,
            o.mix,
          );
        p.fadeIn(f, 1);
        let m = new ci(e, this.bank, p, o, i, u, f - d);
        if (this.ident) {
          ((this.ident = !1),
            this.identBus ||
              ((this.identBus = e.createGain()),
              (this.identBus.gain.value = 0.3),
              this.identBus.connect(r)));
          let n = t + 0.2;
          for (let e of o.ident ?? An(o.id))
            m.playEv(e, n + e.t * 0.5, 0.5, this.identBus);
        }
        ((m.onSong = () => {
          (this.setNow(), this.ask(this.station, m.pos.k + 1));
        }),
          (m.onDJ = (e) =>
            this.dj.say(e, this.opts.lang(), this.opts.volume() * 0.9)),
          (this.sched = m),
          this.setNow(),
          m.pump(t + 0.3, f));
        return;
      }
      this.sched.pump(t + 0.3);
    }
    setNow() {
      let e = this.sched;
      if (!e) return;
      let t = e.st;
      ((this.nowPlaying = {
        station: this.stations[this.station]?.name ?? t.name,
        title: e.song.title,
        artist: e.song.artist,
        jingle: !!e.song.jingle,
      }),
        this.emit());
    }
    emit() {
      try {
        this.onChange?.(this.nowPlaying);
      } catch {}
    }
    stats() {
      return {
        station: this.station,
        active: this.active,
        notes: this.sched?.notes ?? 0,
        bar: this.sched?.pos.bar ?? -1,
        song: this.sched?.song.title.en ?? null,
        dying: this.dying.length,
        stems: { ...this.stemStats, songsKnown: this.needs.size },
        reverb: this.reverb
          ? this.reverb.buffer
            ? +this.reverb.buffer.duration.toFixed(2)
            : this.reverbLoading
              ? `waiting`
              : `released`
          : `none`,
      };
    }
    static async renderOffline(e, t, n, r, i, a = 32e3, o = 0, s) {
      let c = new OfflineAudioContext(2, Math.round(n * a), a),
        l = Mn[t],
        u = c.createConvolver();
      u.buffer = i(c);
      let d = c.createGain();
      ((d.gain.value = 0.32), u.connect(d).connect(c.destination));
      let f = new si(c, c.destination, u, l.fx, e, l.trim, l.mix);
      if (((f.out.gain.value = 1), s))
        for (let e of Object.keys(f.ch)) e !== s && (f.ch[e].gain.value = 0);
      let p = new ci(c, e, f, l, r, Math.min(o, l.item(r).bars - 1), 0.02);
      for (let e = 0; e < 400 && p.pos.barT < n + 0.5; e++) p.pump(n + 0.5);
      return {
        buf: await c.startRendering(),
        notes: p.notes,
        song: p.song.title.en,
      };
    }
  },
  $ = (e, t, n) => (e < t ? t : e > n ? n : e),
  ui = (e, t, n) => {
    let r = $((n - e) / (t - e), 0, 1);
    return r * r * (3 - 2 * r);
  },
  di = Math.hypot,
  fi = 18,
  pi = 9,
  mi = new Map();
