// tokyo/assets/world-Bo9wkXrT 51 — math
// Lines 16718-16951 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Ff = {
  clear: {
    cloud: 0.32,
    overcast: 0,
    sunOcc: 1,
    haze: 1,
    rain: 0,
    storm: 0,
    wind: 0.25,
    mist: 0,
  },
  cloudy: {
    cloud: 0.74,
    overcast: 0.55,
    sunOcc: 0.4,
    haze: 1.35,
    rain: 0,
    storm: 0,
    wind: 0.45,
    mist: 0,
  },
  rain: {
    cloud: 0.96,
    overcast: 0.88,
    sunOcc: 0.14,
    haze: 2.1,
    rain: 0.72,
    storm: 0.15,
    wind: 0.6,
    mist: 0.15,
  },
  storm: {
    cloud: 1,
    overcast: 1,
    sunOcc: 0.07,
    haze: 2.7,
    rain: 1,
    storm: 1,
    wind: 1,
    mist: 0.1,
  },
  fog: {
    cloud: 0.62,
    overcast: 0.72,
    sunOcc: 0.32,
    haze: 5.2,
    rain: 0,
    storm: 0,
    wind: 0.1,
    mist: 1,
  },
};
function If(e, t) {
  ((e.cloud = t.cloud),
    (e.overcast = t.overcast),
    (e.sunOcc = t.sunOcc),
    (e.haze = t.haze),
    (e.rain = t.rain),
    (e.storm = t.storm),
    (e.wind = t.wind),
    (e.mist = t.mist));
}
function Lf(e, t, n, r) {
  ((e.cloud = t.cloud + (n.cloud - t.cloud) * r),
    (e.overcast = t.overcast + (n.overcast - t.overcast) * r),
    (e.sunOcc = t.sunOcc + (n.sunOcc - t.sunOcc) * r),
    (e.haze = t.haze + (n.haze - t.haze) * r),
    (e.rain = t.rain + (n.rain - t.rain) * r),
    (e.storm = t.storm + (n.storm - t.storm) * r),
    (e.wind = t.wind + (n.wind - t.wind) * r),
    (e.mist = t.mist + (n.mist - t.mist) * r));
}
var Rf = [
    [-90, 0.008, 0.011, 0.026],
    [-13, 0.008, 0.011, 0.026],
    [-8, 0.016, 0.022, 0.055],
    [-3, 0.045, 0.06, 0.15],
    [0, 0.1, 0.14, 0.3],
    [5, 0.14, 0.24, 0.5],
    [12, 0.15, 0.3, 0.62],
    [30, 0.13, 0.3, 0.68],
    [90, 0.11, 0.28, 0.68],
  ],
  zf = [
    [-90, 0.052, 0.038, 0.036],
    [-13, 0.052, 0.038, 0.036],
    [-8, 0.065, 0.05, 0.068],
    [-3, 0.19, 0.14, 0.2],
    [0, 0.58, 0.38, 0.32],
    [5, 0.76, 0.58, 0.46],
    [12, 0.7, 0.68, 0.66],
    [30, 0.6, 0.67, 0.76],
    [90, 0.58, 0.66, 0.77],
  ],
  Bf = [
    [-90, 0, 0, 0],
    [-12, 0, 0, 0],
    [-6, 0.07, 0.025, 0.03],
    [-2, 0.42, 0.14, 0.05],
    [1, 0.75, 0.28, 0.07],
    [5, 0.45, 0.2, 0.05],
    [12, 0.1, 0.05, 0.015],
    [25, 0, 0, 0],
    [90, 0, 0, 0],
  ],
  Vf = [
    [-90, 0, 0, 0],
    [-6, 0, 0, 0],
    [-1, 0.55, 0.22, 0.07],
    [3, 1.3, 0.62, 0.26],
    [10, 1.15, 0.86, 0.56],
    [40, 0.8, 0.76, 0.68],
    [90, 0.75, 0.72, 0.66],
  ],
  Hf = [
    [-90, 1, 0.35, 0.12],
    [-3, 1, 0.35, 0.12],
    [0, 1, 0.45, 0.2],
    [4, 1, 0.62, 0.36],
    [10, 1, 0.8, 0.6],
    [25, 1, 0.93, 0.84],
    [60, 1, 0.97, 0.93],
    [90, 1, 0.97, 0.93],
  ],
  Uf = [
    [-90, 0.19, 0.18, 0.182],
    [-13, 0.19, 0.18, 0.182],
    [-6, 0.2, 0.21, 0.29],
    [-2, 0.28, 0.28, 0.42],
    [2, 0.52, 0.48, 0.54],
    [8, 0.58, 0.6, 0.7],
    [20, 0.56, 0.66, 0.84],
    [90, 0.56, 0.67, 0.86],
  ],
  Wf = [
    [-90, 0.2, 0.14, 0.1],
    [-13, 0.2, 0.14, 0.1],
    [-6, 0.18, 0.135, 0.11],
    [-2, 0.21, 0.16, 0.13],
    [4, 0.34, 0.28, 0.23],
    [20, 0.37, 0.34, 0.3],
    [90, 0.37, 0.34, 0.3],
  ],
  Gf = [
    [-90, 0.05, 0.036, 0.03],
    [-13, 0.05, 0.036, 0.03],
    [-6, 0.08, 0.055, 0.065],
    [-2, 0.5, 0.27, 0.26],
    [2, 1.05, 0.58, 0.38],
    [8, 1.05, 0.92, 0.82],
    [25, 1.02, 1.02, 1.04],
    [90, 1.02, 1.02, 1.04],
  ],
  Kf = [
    [-90, 0.02, 0.016, 0.018],
    [-13, 0.02, 0.016, 0.018],
    [-6, 0.035, 0.032, 0.048],
    [-2, 0.18, 0.14, 0.2],
    [2, 0.36, 0.3, 0.36],
    [8, 0.48, 0.51, 0.58],
    [25, 0.55, 0.6, 0.7],
    [90, 0.55, 0.6, 0.7],
  ];
function qf(e, t, n) {
  if (t <= e[0][0]) return n.setRGB(e[0][1], e[0][2], e[0][3]);
  for (let r = 1; r < e.length; r++) {
    let i = e[r];
    if (t <= i[0]) {
      let a = e[r - 1],
        o = (t - a[0]) / (i[0] - a[0]);
      return (
        (o = o * o * (3 - 2 * o)),
        n.setRGB(
          a[1] + (i[1] - a[1]) * o,
          a[2] + (i[2] - a[2]) * o,
          a[3] + (i[3] - a[3]) * o,
        )
      );
    }
  }
  let r = e[e.length - 1];
  return n.setRGB(r[1], r[2], r[3]);
}
function Jf(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0]) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = (t - r) / (a - r);
      return ((s = s * s * (3 - 2 * s)), i + (o - i) * s);
    }
  return e[e.length - 1][1];
}
var Yf = new W(0.46, 0.4, 0.33),
  Xf = 1.35,
  Zf = 0.3,
  Qf = [
    [-90, 0],
    [-2.5, 0],
    [0, 0.9],
    [5, 1.6],
    [15, 2.5],
    [40, 3.1],
    [90, 3.2],
  ],
  $f = [
    [-90, 1.5],
    [-12, 1.5],
    [-6, 1.45],
    [-2, 1.25],
    [3, 1.06],
    [10, 1],
    [90, 1],
  ],
  ep = (25.03 * Math.PI) / 180,
  tp = (10 * Math.PI) / 180,
  np = (-4 * Math.PI) / 180;
function rp(e, t, n) {
  let r = Math.sin(ep) * Math.sin(t) + Math.cos(ep) * Math.cos(t) * Math.cos(e),
    i = -Math.cos(t) * Math.sin(e),
    a = Math.cos(ep) * Math.sin(t) - Math.sin(ep) * Math.cos(t) * Math.cos(e);
  return n.set(i, r, -a).normalize();
}
function ip(e) {
  let t = ((e % 24) + 24) % 24;
  return t >= 6.5 && t <= 17.5
    ? 0
    : t > 17.5 && t < 19
      ? G(17.5, 19, t)
      : t > 5.5 && t < 6.5
        ? 1 - G(5.5, 6.5, t)
        : 1;
}
