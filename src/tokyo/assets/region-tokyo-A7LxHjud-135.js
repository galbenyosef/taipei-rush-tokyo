// tokyo/assets/region-tokyo-A7LxHjud 135 — forest
// Lines 58408-58570 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Uv = [
  {
    id: `arakawa`,
    hw: 72,
    pts: [
      [-5646, -3032],
      [-4434, -3053],
      [-3828, -3063],
      [-3030, -2949],
      [-2094, -2880],
      [-1350, -2935],
      [-327, -2866],
      [598, -2707],
      [1273, -2531],
      [1713, -1927],
      [2097, -1305],
      [2482, -684],
      [2812, -44],
      [3196, 578],
      [3290, 900],
    ],
  },
  {
    id: `edogawa`,
    hw: 40,
    pts: [
      [2047, -5022],
      [2899, -3806],
      [3366, -2838],
      [3833, -1869],
      [4024, -811],
      [4161, 77],
      [4200, 500],
    ],
  },
  {
    id: `tama`,
    hw: 62,
    pts: [
      [-6094, 3086],
      [-4828, 3235],
      [-3677, 3496],
      [-2570, 3808],
      [-1855, 4136],
      [-1062, 4513],
      [-141, 4856],
      [905, 5055],
      [1648, 5e3],
      [2420, 4563],
    ],
  },
  {
    id: `sumida-n`,
    hw: 38,
    pts: [
      [862, -2195],
      [396, -2300],
      [96, -2591],
      [-443, -2839],
      [-1074, -3024],
      [-1851, -3071],
    ],
  },
  {
    id: `kanda-w`,
    hw: 9,
    gapOnly: !0,
    pts: [
      [-2441, -34],
      [-2841, -24],
      [-3888, 503],
      [-4605, 1109],
    ],
  },
  {
    id: `meguro`,
    hw: 9,
    gapOnly: !0,
    pts: [
      [-1802, 1766],
      [-1417, 2015],
      [-756, 2173],
      [-152, 2395],
    ],
  },
];
function Vde(e, t, n) {
  let r = 1 / 0;
  for (let i = 0; i + 1 < e.length; i++) {
    let [a, o] = e[i],
      [s, c] = e[i + 1],
      l = s - a,
      u = c - o,
      d = l * l + u * u,
      f = d ? Math.max(0, Math.min(1, ((t - a) * l + (n - o) * u) / d)) : 0,
      p = a + l * f - t,
      m = o + u * f - n;
    r = Math.min(r, p * p + m * m);
  }
  return Math.sqrt(r);
}
var Hde = Uv.map((e) => {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let [a, o] of e.pts)
    ((t = Math.min(t, a)),
      (n = Math.min(n, o)),
      (r = Math.max(r, a)),
      (i = Math.max(i, o)));
  return [t - e.hw, n - e.hw, r + e.hw, i + e.hw];
});
function Wv(e, t, n = 0, r = !1) {
  for (let i = 0; i < Uv.length; i++) {
    let a = Uv[i],
      o = Hde[i];
    if (
      !(r && a.gapOnly) &&
      !(e < o[0] - n || t < o[1] - n || e > o[2] + n || t > o[3] + n) &&
      Vde(a.pts, e, t) < a.hw + n
    )
      return a;
  }
  return null;
}
var Gv = [
  { id: `komazawa`, x: -2503, z: 2797, r: 151, forest: !0 },
  { id: `kinuta`, x: -3605, z: 2875, r: 162, forest: !0 },
  { id: `rikugien`, x: -1316, z: -1565, r: 86, forest: !0 },
  { id: `inokashira`, x: -5715, z: 1115, r: 137, forest: !0 },
  { id: `kasai-rinkai`, x: 3257, z: 483, r: 216, forest: !0 },
  { id: `yumenoshima`, x: 2222, z: 484, r: 137, forest: !0 },
  { id: `kiba`, x: 1457, z: -89, r: 79, forest: !0 },
  { id: `hikarigaoka`, x: -4871, z: -1492, r: 151, forest: !0 },
  { id: `zenpukuji`, x: -5234, z: 343, r: 90, forest: !0 },
  { id: `shakujii`, x: -5374, z: -321, r: 108, forest: !0 },
  { id: `mizumoto`, x: 1909, z: -4604, r: 180, forest: !0 },
  { id: `toneri`, x: -1030, z: -3263, r: 108, forest: !0 },
  { id: `jindai`, x: -6038, z: 2322, r: 180, forest: !0 },
  { id: `haneda`, x: 2036, z: 4337, r: 504 },
  { id: `aoyama-cem`, x: -1264, z: 938, r: 90, forest: !0 },
  { id: `todoroki`, x: -2658, z: 3538, r: 72, forest: !0 },
  { id: `rinshi`, x: -1362, z: 2370, r: 90, forest: !0 },
  { id: `oi-futo`, x: 1122, z: 3193, r: 144, forest: !0 },
  { id: `port-wild`, x: 1254, z: 3411, r: 108, forest: !0 },
  { id: `odaiba-seaside`, x: 992, z: 1667, r: 65, forest: !0 },
  { id: `ukima`, x: -3498, z: -2984, r: 108, forest: !0 },
  { id: `oizumi`, x: -6007, z: -862, r: 162, forest: !0 },
  { id: `koganei`, x: -7436, z: 1021, r: 252, forest: !0 },
  { id: `tama-cem`, x: -7338, z: 2072, r: 216, forest: !0 },
  { id: `zoshigaya`, x: -2052, z: -878, r: 72, forest: !0 },
  { id: `somei`, x: -1655, z: -1529, r: 90, forest: !0 },
];
function Ude(e, t, n = 0) {
  for (let r of Gv) {
    let i = e - r.x,
      a = t - r.z,
      o = r.r + n;
    if (i * i + a * a < o * o) return r;
  }
  return null;
}
