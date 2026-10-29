// tokyo/assets/audio-BTLLtCvZ 20 — host
// Lines 7715-7983 of readable/tokyo/assets/audio-BTLLtCvZ.pretty.js (statement-aligned).
function Vn(e, t = 0) {
  let n = e.params.speed;
  return n === void 0 ? (e.vel !== void 0 && e.vel >= 0 ? e.vel : t) : n;
}
var J = (e, t, n) => (e < t ? t : e > n ? n : e),
  Hn = 0.035,
  Un = 17,
  Wn = 0.01;
function Y(e, t) {
  let n = e.cancelAndHoldAtTime;
  if (n) n.call(e, t);
  else {
    let n = e.value;
    (e.cancelScheduledValues(t), e.setValueAtTime(n, t));
  }
}
var Gn = class {
  host;
  out;
  started = !1;
  nodes = [];
  deadAt = 0;
  nodeCount = 1;
  nyq;
  bufIds = null;
  routing = null;
  poolable = !1;
  loopName = ``;
  poolKey = ``;
  keepPooled = !1;
  parkedAt = 0;
  detachAt = 0;
  detached = !1;
  constructor(e) {
    ((this.host = e),
      (this.out = e.ac.createGain()),
      (this.out.gain.value = 0),
      (this.nyq = Math.min(2e4, e.ac.sampleRate * 0.45)));
  }
  hz(e) {
    return e < this.nyq ? e : this.nyq;
  }
  need(e) {
    let t = this.host.bank.get(e);
    return (t || this.host.bank.want(e), t);
  }
  touch(e) {
    let t = this.bufIds;
    if (t) for (let n = 0; n < t.length; n++) this.host.bank.touch(t[n], e);
  }
  get isStarted() {
    return this.started;
  }
  fadeTo(e, t = 0.06) {
    this.out.gain.setTargetAtTime(e, this.host.ac.currentTime, t);
  }
  park(e = 0.2) {
    let t = this.host.ac.currentTime;
    (Y(this.out.gain, t),
      this.out.gain.setTargetAtTime(0, t, Math.max(0.01, e / 3)),
      (this.parkedAt = t),
      (this.detachAt = t + e + 0.05),
      (this.detached = !1));
  }
  unpark(e) {
    let t = this.host.ac.currentTime;
    Y(this.out.gain, t);
    let n = this.l;
    if (n) for (let e in n) n[e].v = NaN;
    (this.onUnpark(t), this.apply(e, 0));
  }
  onUnpark(e) {}
  stop(e = 0.12) {
    let t = this.host.ac.currentTime;
    (Y(this.out.gain, t), this.out.gain.setTargetAtTime(0, t, e / 3));
    let n = t + e + 0.05;
    for (let e of this.nodes)
      try {
        e.stop(n);
      } catch {}
    this.deadAt = n + 0.05;
  }
  dispose() {
    try {
      this.out.disconnect();
    } catch {}
    for (let e of this.nodes)
      try {
        e.disconnect();
      } catch {}
    this.nodes.length = 0;
  }
  src(e, t, n = 0) {
    let r = this.host.ac.createBufferSource();
    return (
      (r.buffer = e),
      (r.loop = t),
      this.nodes.push(r),
      r.start(this.host.ac.currentTime, n % e.duration),
      this.nodeCount++,
      r
    );
  }
  gain(e, t) {
    let n = this.host.ac.createGain();
    return ((n.gain.value = e), n.connect(t), this.nodeCount++, n);
  }
  filt(e, t, n, r, i = 0) {
    let a = this.host.ac.createBiquadFilter();
    return (
      (a.type = e),
      (a.frequency.value = this.hz(t)),
      (a.Q.value = n),
      (a.gain.value = i),
      a.connect(r),
      this.nodeCount++,
      a
    );
  }
  osc(e, t, n) {
    let r = this.host.ac.createOscillator();
    return (
      typeof e == `string` ? (r.type = e) : r.setPeriodicWave(e),
      (r.frequency.value = this.hz(t)),
      r.connect(n),
      r.start(this.host.ac.currentTime),
      this.nodes.push(r),
      this.nodeCount++,
      r
    );
  }
};
function X(e, t, n, r, i = Hn, a = Wn, o = 1e-4) {
  let s = t - n.v;
  (s < 0 ? -s : s) <= (n.v < 0 ? -n.v : n.v) * a + o ||
    ((n.v = t), e.setTargetAtTime(t, r, i));
}
var Z = (e = NaN) => ({ v: e }),
  Kn = {
    scooter: {
      idle: 1700,
      max: 8800,
      cyl: 1,
      duty: 0.1,
      res: [
        [430, 1.3, 9],
        [1500, 2, 6],
      ],
      lp0: 1300,
      lpT: 4200,
      noise: 0.5,
      noiseF: 1800,
      sub: 0.55,
      drive: 3,
      vol: 0.62,
      lope: 18,
      whine: 0.025,
    },
    car: {
      idle: 850,
      max: 6400,
      cyl: 4,
      duty: 0.28,
      res: [
        [150, 1, 6],
        [540, 1.4, 4],
      ],
      lp0: 650,
      lpT: 2600,
      noise: 0.22,
      noiseF: 900,
      sub: 0.2,
      drive: 1.7,
      vol: 0.62,
      lope: 6,
    },
    sports: {
      idle: 950,
      max: 7800,
      cyl: 8,
      duty: 0.18,
      res: [
        [210, 1.1, 7],
        [880, 1.6, 5],
      ],
      lp0: 1e3,
      lpT: 5200,
      noise: 0.3,
      noiseF: 1200,
      sub: 0.42,
      drive: 3.4,
      vol: 0.72,
      lope: 22,
    },
    moto: {
      idle: 1300,
      max: 12500,
      cyl: 4,
      duty: 0.14,
      res: [
        [320, 1.2, 7],
        [1350, 1.8, 6],
      ],
      lp0: 1200,
      lpT: 6800,
      noise: 0.38,
      noiseF: 1700,
      sub: 0.28,
      drive: 3.3,
      vol: 0.72,
      lope: 9,
    },
    bus: {
      idle: 620,
      max: 2300,
      cyl: 6,
      duty: 0.07,
      res: [
        [105, 1, 6],
        [390, 1.2, 5],
      ],
      lp0: 520,
      lpT: 1900,
      noise: 0.55,
      noiseF: 1400,
      sub: 0.3,
      drive: 2.2,
      vol: 0.8,
      lope: 8,
      turbo: 0.035,
    },
  },
  qn = new WeakMap();
function Jn(e, t, n) {
  let r = qn.get(e);
  r || qn.set(e, (r = new Map()));
  let i = r.get(n);
  if (!i) {
    let a = new Float32Array(48),
      o = new Float32Array(48);
    for (let e = 1; e < 48; e++)
      ((a[e] = ((2 / (e * Math.PI)) * Math.sin(e * Math.PI * t)) / e ** 0.25),
        (o[e] = 0.25 * a[e] * Math.cos(e * 1.3)));
    ((i = e.createPeriodicWave(a, o, { disableNormalization: !1 })),
      r.set(n, i));
  }
  return i;
}
var Yn = new Map();
function Xn(e) {
  let t = Yn.get(e);
  if (t) return t;
  let n = Zn(e);
  return (Yn.set(e, n), n);
}
function Zn(e) {
  let t = 1024,
    n = new Float32Array(t),
    r = 1 / Math.tanh(e);
  for (let i = 0; i < t; i++) {
    let t = (i / 1023) * 2 - 1;
    n[i] = Math.tanh(t * e) * r;
  }
  return n;
}
function Qn(e) {
  for (let t of Object.keys(Kn)) (Jn(e, Kn[t].duty, t), Xn(Kn[t].drive));
  (Jn(e, 0.12, `heli`), Xn(2.2), Xn(2.5));
}
