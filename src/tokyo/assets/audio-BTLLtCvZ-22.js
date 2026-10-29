// tokyo/assets/audio-BTLLtCvZ 22 — test
// Lines 10615-10923 of readable/tokyo/assets/audio-BTLLtCvZ.pretty.js (statement-aligned).
function Vr(e) {
  let t = e.positional
    ? e.meta.ref / (e.meta.ref + Math.max(0, e.dist - e.meta.ref))
    : 1;
  return (e.meta.pri - (e.internal ? 1.5 : 0)) * Math.min(1, e.state.vol) * t;
}
function Hr(e) {
  return 2e4 * (600 / 2e4) ** Math.min(1, e);
}
function Ur(e) {
  return Math.max(900, Math.min(2e4, 22e3 / (1 + e / 45)));
}
function Wr(e = 4096) {
  let t = new Float32Array(e),
    n = 0.14;
  for (let r = 0; r < e; r++) {
    let i = ((2 * r) / (e - 1) - 1) * Tr,
      a = Math.abs(i);
    t[r] = Math.sign(i) * (a <= Er ? a : Er + n * Math.tanh((a - Er) / n));
  }
  return t;
}
function Gr(e, t, n) {
  (e.cancelScheduledValues(n), e.setValueAtTime(t, n));
}
function Kr(e) {
  let t = !0;
  for (let n of e)
    try {
      !n || !(`automationRate` in n)
        ? (t = !1)
        : ((n.automationRate = `k-rate`),
          n.automationRate !== `k-rate` && (t = !1));
    } catch {
      t = !1;
    }
  return t;
}
function qr(e, t, n, r) {
  let i = n?.get(`ir/${e}/${t.sampleRate}`);
  if (i && i.sampleRate === t.sampleRate) return i;
  let [a, o, s] = ge(e, r),
    c = se(t.sampleRate, a, o, s),
    l = t.createBuffer(2, c.ch[0].length, t.sampleRate);
  return (
    l.getChannelData(0).set(c.ch[0]),
    l.getChannelData(1).set(c.ch[1]),
    l
  );
}
var Jr = {};
function Yr(e, t) {
  let n = Jr[e];
  if (n) return n(t);
  switch (e) {
    case `engine_car`:
      return new $n(t, `car`);
    case `engine_scooter`:
      return new $n(t, `scooter`);
    case `engine_bus`:
      return new $n(t, `bus`);
    case `engine_sports`:
      return new $n(t, `sports`);
    case `siren_police`:
      return new er(t, !1);
    case `siren_ambulance`:
      return new er(t, !0);
    case `garbage_truck`:
      return new tr(t, [`tune/elise`, `tune/maiden`], 0.95, !1, `tune`);
    case `rain`:
      return new nr(t);
    case `wind`:
      return new tr(t, [`amb/amb_wind`], 0.7, !0);
    case `ambient_city`:
      return new tr(t, [`amb/amb_city`], 0.6, !0);
    case `ambient_market`:
      return new tr(t, [`amb/amb_market`], 0.85, !0);
    case `ambient_temple`:
      return new tr(t, [`amb/amb_temple`], 0.75, !0);
    case `ambient_park`:
      return new rr(t);
    case `ambient_river`:
      return new tr(t, [`amb/amb_river`], 0.7, !0);
    case `mrt_train`:
      return new ir(t);
    case `crosswalk_signal`:
      return new or(t);
    case `engine_motorcycle`:
      return new $n(t, `moto`);
    case `engine_ev`:
      return new sr(t);
    case `helicopter`:
      return new cr(t);
    case `jet`:
      return new lr(t);
    case `tire_screech`:
      return new ur(t);
    case `ambient_store`:
      return new tr(t, [`amb/amb_store`], 0.8, !0);
    case `ambient_hall`:
      return new tr(t, [`amb/amb_hall`], 0.85, !0);
  }
  return new tr(t, [`amb/amb_city`], 0.5, !0);
}
var Xr = /^(zh[-_](HK|MO)|yue)|[-_]yue\b|Hant[-_]HK/i,
  Zr =
    /粵|粤|廣東|广东|Cantonese|Sin-?ji|Tracy|Danny|HiuGaai|HiuMaan|WanLung|Hong ?Kong|香港/i,
  Qr =
    /臺灣|台灣|Taiwan|Meijia|Mei-Jia|Hanhan|Yating|Zhiwei|HsiaoChen|HsiaoYu|YunJhe/i,
  $r =
    /Natural|Neural|Enhanced|Premium|Meijia|Mei-Jia|HsiaoChen|HsiaoYu|YunJhe|Xiaoxiao|Yunxi/i,
  ei = /\b(Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley)\b/i,
  ti =
    /\b(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Junior|Ralph|Fred|Kathy|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley)\b/i;
function ni(e) {
  let t = e.lang || ``,
    n = e.name || ``;
  if (Xr.test(t) || Zr.test(n)) return -1;
  let r =
    ($r.test(n) ? 3 : 0) - (ei.test(n) ? 2 : 0) + (e.localService ? 0.5 : 0);
  return /^zh[-_]TW/i.test(t) || /^cmn[-_](Hant[-_])?TW/i.test(t) || Qr.test(n)
    ? 30 + r
    : /^zh[-_](CN|SG)/i.test(t) || /^cmn/i.test(t) || /Hans/i.test(t)
      ? 20 + r
      : /^zh$/i.test(t)
        ? 10 + r
        : -1;
}
var ri = class {
    ok = !1;
    voices = [];
    zh = null;
    en = null;
    ja = null;
    curPri = -1;
    curUntil = 0;
    seq = 0;
    lastBy = new Map();
    stats = { spoken: 0, skipped: 0, interrupted: 0 };
    onStart = null;
    onEnd = null;
    constructor() {
      try {
        if (
          typeof speechSynthesis > `u` ||
          (navigator.webdriver &&
            new URLSearchParams(location.search).get(`speech`) !== `1`)
        )
          return;
        this.ok = !0;
        let e = () => {
          try {
            ((this.voices = speechSynthesis.getVoices()), this.pickVoices());
          } catch {}
        };
        (e(), speechSynthesis.addEventListener?.(`voiceschanged`, e));
      } catch {
        this.ok = !1;
      }
    }
    pickVoices() {
      let e = null,
        t = -1;
      for (let n of this.voices) {
        let r = ni(n);
        r > t && ((t = r), (e = n));
      }
      this.zh = t >= 0 ? e : null;
      let n = null,
        r = -1;
      for (let e of this.voices) {
        if (!/^en/i.test(e.lang)) continue;
        let t =
          (/^en[-_](US|GB)/i.test(e.lang) ? 2 : 1) +
          ($r.test(e.name) ? 3 : 0) -
          (ti.test(e.name) ? 5 : 0) +
          (e.localService ? 0.5 : 0);
        t > r && ((r = t), (n = e));
      }
      this.en = n;
    }
    get available() {
      return this.ok && (!!this.zh || !!this.en);
    }
    has(e) {
      return (
        this.ok && !!(e === `zh` ? this.zh : e === `en` ? this.en : this.ja)
      );
    }
    get chosen() {
      return {
        zh: this.zh ? `${this.zh.name} (${this.zh.lang})` : null,
        en: this.en ? `${this.en.name} (${this.en.lang})` : null,
      };
    }
    get speaking() {
      return this.ok && performance.now() < this.curUntil;
    }
    speak(e, t, n = 0) {
      if (!this.ok || !e) return !1;
      let r = performance.now(),
        i = t.channel;
      if (t.minGap > 0 && r - (this.lastBy.get(i) ?? -1e9) < t.minGap * 1e3)
        return this.skip();
      let a = t.lang === `zh` ? this.zh : t.lang === `en` ? this.en : this.ja;
      if (!a) return this.skip();
      try {
        let o = speechSynthesis,
          s = o.speaking || o.pending,
          c = s ? (r < this.curUntil + 500 ? this.curPri : 5) : -1;
        if (s && t.priority <= c) return this.skip();
        s && (o.cancel(), this.stats.interrupted++);
        let l = new SpeechSynthesisUtterance(e);
        ((l.voice = a),
          (l.lang = a.lang),
          (l.rate = t.rate),
          (l.pitch = t.pitch),
          (l.volume = Math.max(0, Math.min(1, t.volume))));
        let u = (e.match(/[぀-ヿ㐀-鿿]/g) ?? []).length,
          d = (u / 4.2 + (e.length - u) / 13) / Math.max(0.5, t.rate) + 0.4;
        ((this.curPri = t.priority), (this.curUntil = r + d * 1e3));
        let f = ++this.seq;
        return (
          (l.onend = l.onerror =
            () => {
              try {
                this.onEnd?.();
              } catch {}
              this.seq === f &&
                ((this.curUntil = Math.min(this.curUntil, performance.now())),
                (this.curPri = -1));
            }),
          o.speak(l),
          this.lastBy.set(i, r),
          this.stats.spoken++,
          n > 0 && this.onStart?.(n, d),
          !0
        );
      } catch {
        return this.skip();
      }
    }
    skip() {
      return (this.stats.skipped++, !1);
    }
    cancel(e = 10) {
      if (!(!this.ok || this.curPri > e))
        try {
          (speechSynthesis.cancel(), (this.curUntil = 0), (this.curPri = -1));
        } catch {}
    }
  },
  ii = 3,
  ai = class {
    speech;
    constructor(e) {
      this.speech = e;
    }
    get available() {
      return this.speech.available;
    }
    say(e, t, n, r = 12) {
      let i = e.ja;
      return this.speech.speak(
        i ?? (t === `zh` ? e.zh : e.en),
        {
          lang: i ? `ja` : t,
          priority: ii,
          volume: n,
          rate: 1.08,
          pitch: 1.05,
          channel: `dj`,
          minGap: r,
        },
        0,
      );
    }
    cancel() {
      this.speech.cancel(ii);
    }
  },
  oi = [18e4, 9e4],
  si = [6e4, 3e4],
  ci = 2500,
  li = [12e4, 45e3],
  ui = {
    drums: { gain: 0.8, pan: 0, send: 0.05, sc: !1 },
    perc: { gain: 0.62, pan: 0.2, send: 0.14, sc: !1 },
    bass: { gain: 0.72, pan: 0, send: 0, sc: !0 },
    keys: { gain: 0.5, pan: -0.18, send: 0.16, sc: !0 },
    pad: { gain: 0.36, pan: 0.05, send: 0.28, sc: !0 },
    lead: { gain: 0.56, pan: 0.12, send: 0.2, sc: !0 },
    fx: { gain: 0.5, pan: 0, send: 0.22, sc: !1 },
  },
  di = new Set([`drum:kick`, `drum:kick808`, `drum:kick_lofi`]),
  fi = 24,
  pi = 256,
  mi = new Map(),
  hi = new Map();
function gi(e, t) {
  let n = mi.get(e);
  n || mi.set(e, (n = new Map()));
  let r = n.get(t);
  return (r === void 0 && n.set(t, (r = `inst/${e}/${t}`)), r);
}
function _i(e) {
  let t = hi.get(e);
  return (t === void 0 && hi.set(e, (t = `drum/` + e.slice(5))), t);
}
