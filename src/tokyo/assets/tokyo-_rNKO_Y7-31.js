// tokyo/assets/tokyo-_rNKO_Y7 31 — math
// Lines 12778-13001 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
var so = [
  `engine_car`,
  `engine_scooter`,
  `engine_bus`,
  `engine_sports`,
  `siren_police`,
  `siren_ambulance`,
  `garbage_truck`,
  `rain`,
  `wind`,
  `ambient_city`,
  `ambient_market`,
  `ambient_temple`,
  `ambient_park`,
  `ambient_river`,
  `mrt_train`,
  `crosswalk_signal`,
  `engine_motorcycle`,
  `engine_ev`,
  `helicopter`,
  `jet`,
  `tire_screech`,
  `ambient_store`,
  `ambient_hall`,
];
function co(e, t = 0) {
  let n = e.length - Math.floor(t * e.sampleRate),
    r = new Float32Array(Math.max(0, n)),
    i = e.length - n;
  for (let t = 0; t < e.numberOfChannels; t++) {
    let a = e.getChannelData(t);
    for (let t = 0; t < n; t++) r[t] += a[i + t] / e.numberOfChannels;
  }
  return r;
}
function lo(e, t) {
  let n = e.length;
  for (let r = 1, i = 0; r < n; r++) {
    let a = n >> 1;
    for (; i & a; a >>= 1) i ^= a;
    ((i ^= a),
      r < i && (([e[r], e[i]] = [e[i], e[r]]), ([t[r], t[i]] = [t[i], t[r]])));
  }
  for (let r = 2; r <= n; r <<= 1) {
    let i = (-2 * Math.PI) / r,
      a = Math.cos(i),
      o = Math.sin(i);
    for (let i = 0; i < n; i += r) {
      let n = 1,
        s = 0;
      for (let c = 0; c < r / 2; c++) {
        let l = e[i + c],
          u = t[i + c],
          d = e[i + c + r / 2] * n - t[i + c + r / 2] * s,
          f = e[i + c + r / 2] * s + t[i + c + r / 2] * n;
        ((e[i + c] = l + d),
          (t[i + c] = u + f),
          (e[i + c + r / 2] = l - d),
          (t[i + c + r / 2] = u - f));
        let p = n * a - s * o;
        ((s = n * o + s * a), (n = p));
      }
    }
  }
}
function uo(e, t = 0) {
  let n = 0,
    r = 0,
    i = 0,
    a = 0,
    o = 0;
  for (let s = 0; s < e.numberOfChannels; s++) {
    let c = e.getChannelData(s);
    for (let s = Math.floor(t * e.sampleRate); s < c.length; s++) {
      let e = c[s];
      ((n += e * e), (a += e), o++);
      let t = Math.abs(e);
      (t > r && (r = t), t >= 0.999 && i++);
    }
  }
  let s = co(e, t),
    c = 2048,
    l = 0,
    u = 0,
    d = new Float32Array(c),
    f = new Float32Array(c),
    p = Math.min(24, Math.floor(s.length / c));
  for (let t = 0; t < p; t++) {
    let n = Math.floor(((s.length - c) * t) / Math.max(1, p - 1));
    for (let e = 0; e < c; e++)
      ((d[e] = s[n + e] * (0.5 - 0.5 * Math.cos((2 * Math.PI * e) / c))),
        (f[e] = 0));
    lo(d, f);
    for (let t = 1; t < c / 2; t++) {
      let n = Math.hypot(d[t], f[t]);
      ((l += n * ((t * e.sampleRate) / c)), (u += n));
    }
  }
  let m = (e, t = 3) => +e.toFixed(t);
  return {
    sec: m(e.duration, 2),
    rms: m(Math.sqrt(n / Math.max(1, o))),
    peak: m(r),
    clip: i,
    centroid: Math.round(u ? l / u : 0),
    dc: m(a / Math.max(1, o), 4),
  };
}
var fo = (() => {
  let e = [
      [0, 5, 4, 18],
      [0.25, 60, 15, 110],
      [0.5, 180, 45, 110],
      [0.75, 250, 140, 60],
      [1, 252, 250, 190],
    ],
    t = [];
  for (let n = 0; n < 64; n++) {
    let r = n / 63,
      i = 0;
    for (; i < e.length - 2 && r > e[i + 1][0];) i++;
    let [a, o, s, c] = e[i],
      [l, u, d, f] = e[i + 1],
      p = (r - a) / (l - a);
    t.push(
      `rgb(${Math.round(o + (u - o) * p)},${Math.round(s + (d - s) * p)},${Math.round(c + (f - c) * p)})`,
    );
  }
  return t;
})();
function po(e, t, n, r, i, a) {
  let o = co(t),
    s = t.sampleRate,
    c = 1024,
    l = new Float32Array(c),
    u = new Float32Array(c),
    d = s / 2,
    f = Math.floor(a / 2),
    p = Math.floor(i / 2),
    m = (e) => {
      let t = 40 * (d / 40) ** (1 - e / f);
      return Math.min(c / 2 - 1, Math.max(1, Math.round((t * c) / s)));
    };
  ((e.fillStyle = fo[0]), e.fillRect(n, r, i, a));
  for (let t = 0; t < p; t++) {
    let i = Math.floor((t / p) * Math.max(0, o.length - c));
    for (let e = 0; e < c; e++)
      ((l[e] = (o[i + e] ?? 0) * (0.5 - 0.5 * Math.cos((2 * Math.PI * e) / c))),
        (u[e] = 0));
    lo(l, u);
    for (let i = 0; i < f; i++) {
      let a = m(i + 1),
        o = Math.max(a, m(i)),
        s = 0;
      for (let e = a; e <= o; e++) s = Math.max(s, Math.hypot(l[e], u[e]));
      let d = 20 * Math.log10(s / (c / 4) + 1e-9),
        f = Math.max(0, Math.min(1, (d + 84) / 84));
      ((e.fillStyle = fo[Math.round(f * 63)]),
        e.fillRect(n + t * 2, r + i * 2, 2, 2));
    }
  }
  ((e.strokeStyle = `rgba(120,220,255,0.9)`), e.beginPath());
  for (let t = 0; t < p; t++) {
    let i = Math.floor((t / p) * o.length),
      s = Math.floor(((t + 1) / p) * o.length),
      c = 0;
    for (let e = i; e < s; e++) c = Math.max(c, Math.abs(o[e]));
    let l = r + a - 1 - c * 14;
    t === 0 ? e.moveTo(n, l) : e.lineTo(n + t * 2, l);
  }
  e.stroke();
}
function mo(e) {
  return e === `engine_ev`
    ? { speed: 0, throttle: 0.2 }
    : e.startsWith(`engine_`)
      ? { rpm: 0.1, throttle: 0.2, speed: 0 }
      : e === `helicopter`
        ? { rpm: 1, thrust: 0.6 }
        : e === `tire_screech`
          ? { slip: 0.8, speed: 15 }
          : e === `crosswalk_signal`
            ? { state: 1 }
            : e === `mrt_train`
              ? { speed: 4 }
              : {};
}
function ho(e, t, n) {
  e === `engine_ev`
    ? ((t.params.speed =
        n < 0.15
          ? 0
          : n < 0.7
            ? ((n - 0.15) / 0.55) * 16
            : 16 - (n - 0.7) * 20),
      (t.params.throttle = n < 0.15 ? 0 : +(n < 0.7)))
    : e === `helicopter`
      ? ((t.params.rpm = Math.min(1, 0.3 + n * 2)),
        (t.params.thrust = n < 0.5 ? 0.4 : 0.95))
      : e === `jet`
        ? (t.params.thrust = n < 0.5 ? 0.5 : 0.9)
        : e === `tire_screech`
          ? ((t.params.slip = n < 0.5 ? 0.5 + n : 1 - (n - 0.5) * 1.6),
            (t.params.speed = 25 - n * 20))
          : e.startsWith(`engine_`)
            ? ((t.params.rpm =
                n < 0.2
                  ? 0.02
                  : n < 0.75
                    ? 0.05 + ((n - 0.2) / 0.55) * 0.9
                    : 0.9 - (n - 0.75) * 2.5),
              (t.params.throttle = n < 0.2 ? 0.05 : n < 0.75 ? 1 : 0.05),
              (t.params.speed = Math.max(0, (n - 0.2) * 30)))
            : e === `crosswalk_signal`
              ? (t.params.state = n < 0.4 ? 1 : n < 0.8 ? 2 : 0)
              : e === `mrt_train`
                ? (t.params.speed = n < 0.6 ? 2 + n * 35 : 23 - (n - 0.6) * 55)
                : e === `siren_police`
                  ? (t.params.mode = n < 0.65 ? 0 : 1)
                  : e === `rain`
                    ? (t.vol = 0.15 + n * 0.85)
                    : e === `ambient_park` &&
                      (t.params.night = n < 0.5 ? 0 : 1);
}
