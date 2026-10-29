// tokyo/assets/region-tokyo-A7LxHjud 377 — setmaterial
// Lines 136777-137067 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function j$(e, t, n, r, i, a, o, s, c, l, u, d, f, p = P$) {
  let m = k$(o),
    h = e.n,
    g = ((a >> 16) & 255) * p[0],
    _ = ((a >> 8) & 255) * p[1],
    v = (a & 255) * p[2],
    y = 0.9 + m() * 0.2;
  for (let a of RNe) {
    let o = Math.hypot(a[0], a[1], a[2]),
      p = 0.78 + m() * 0.36,
      h = a[0] / o,
      b = a[1] / o,
      x = a[2] / o,
      S = t + h * i * p,
      C = n + b * i * p * 0.85,
      w = r + x * i * p,
      T = (S - s) / (u * u),
      E = (C - c) / (d * d),
      D = (w - l) / (f * f),
      O = Math.hypot(T, E, D) || 1;
    ((T = (T / O) * 0.7 + h * 0.3),
      (E = (E / O) * 0.7 + b * 0.3),
      (D = (D / O) * 0.7 + x * 0.3));
    let k = Math.hypot(T, E, D) || 1,
      A =
        y *
          (0.8 +
            0.2 * (Math.max(-1, Math.min(1, (C - c) / d)) * 0.5 + 0.5) +
            (E / k) * 0.08) +
        (m() - 0.5) * 0.1,
      j = (e) =>
        Math.min(255, Math.round(255 * Math.min(1, (e * A) / 255) ** 2.2));
    (e.setColor(j(g), j(_), j(v)),
      e.vertex(S, C, w, T / k, E / k, D / k, um.u, um.v));
  }
  for (let t of zNe) e.tri(h + t[0], h + t[2], h + t[1]);
}
function M$(e, t, n, r, i, a, o, s, c, l, u, d = 1, f = P$) {
  let p = k$(u),
    m = Math.PI * (3 - Math.sqrt(5));
  for (let h = 0; h < s; h++) {
    let g = 1 - (2 * (h + 0.5)) / s,
      _ = Math.sqrt(Math.max(0, 1 - g * g)),
      v = h * m + p() * 0.6,
      y = 0.62 + p() * 0.3,
      b = d < 1 ? 1 - (1 - d) * (g * 0.5 + 0.5) : 1,
      x = t + Math.cos(v) * _ * i * y * b,
      S = n + g * a * y,
      C = r + Math.sin(v) * _ * o * y * b,
      w = d < 1 ? 0.85 + 0.3 * (1 - (g * 0.5 + 0.5)) : 1;
    j$(
      e,
      x,
      S,
      C,
      c * (0.8 + p() * 0.4) * w,
      l[h % l.length],
      u * 31 + h,
      t,
      n,
      r,
      i,
      a,
      o,
      f,
    );
  }
  j$(e, t, n, r, Math.min(i, a, o) * 0.8, l[0], u + 7, t, n, r, i, a, o, f);
}
function N$(e, t, n, r = 5917244) {
  (e.setMaterial(0.95, 0, 0, 0),
    pm(e, r),
    vm(e, 0, 0, 0, t, n, 6, n * 0.6, !1));
}
function BNe(e) {
  (e.setMaterial(0.7, 0.4, 0, 0),
    pm(e, 3815734),
    mm(
      e,
      -0.65,
      0.012,
      0.65,
      0.65,
      0.012,
      0.65,
      0.65,
      0.012,
      -0.65,
      -0.65,
      0.012,
      -0.65,
    ));
}
var VNe = {
    ginkgo: {
      green: [7117380, 8235856, 6261820, 7643464],
      autumn: [15254058, 15913532, 14265628, 14727204],
      bloom: [9420374, 10472034, 8564814],
      bare: [],
    },
    zelkova: {
      green: [6130240, 7182922, 5537338, 6591045],
      autumn: [12084268, 13206319, 11098666, 12546096],
      bloom: [8170576, 9091162, 7381576],
      bare: [],
    },
    sakura: {
      green: [5933122, 6723146, 5275708, 6196292],
      autumn: [11818542, 12876340, 10242602, 11427376],
      bloom: [16040656, 16373472, 15578052, 16239832],
      bare: [],
    },
  },
  P$ = [1, 1, 1],
  F$ = [P$, [1.1, 1.07, 0.9], [0.9, 0.97, 1.04]],
  I$ = (e, t, n) => `${e}-${t}${n > 0 ? `~${n}` : ``}`;
function L$(e, t, n, r, i = P$) {
  BNe(e);
  let a = VNe[t][n];
  if (t === `ginkgo`) {
    (N$(e, 7.2, 0.17, 6181962), e.setMaterial(0.95, 0, 0, 0), pm(e, 6181962));
    for (let t = 0; t < (n === `bare` ? 9 : 5); t++) {
      let n = t * 2.3,
        r = 2.6 + t * 0.55;
      _m(
        e,
        0,
        r,
        0,
        Math.cos(n) * (1.3 - t * 0.08),
        r + 1,
        Math.sin(n) * (1.3 - t * 0.08),
        0.045,
        3,
      );
    }
    if (n === `bare`) return;
    (e.setMaterial(0.9, 0, 0, 0),
      M$(e, 0, 6, 0, 1.7, 3.5, 1.7, r ? 16 : 5, r ? 0.8 : 1.3, a, 11, 0.32, i));
  } else if (t === `zelkova`) {
    (N$(e, 3.6, 0.21, 6970962), e.setMaterial(0.95, 0, 0, 0), pm(e, 6970962));
    for (let [t, n] of [
      [1, 0.3],
      [-0.8, 0.6],
      [0.2, -1],
      [-0.3, -0.7],
    ])
      _m(e, 0, 3, 0, t * 1.7, 5.8, n * 1.7, 0.08, 4);
    if (n === `bare`) return;
    (e.setMaterial(0.9, 0, 0, 0),
      M$(e, 0, 6.6, 0, 3, 1.9, 3, r ? 16 : 5, r ? 1 : 1.6, a, 5, 1, i));
  } else {
    (N$(e, 2.2, 0.22, 4865076), e.setMaterial(0.95, 0, 0, 0), pm(e, 4865076));
    for (let [t, n] of [
      [1, 0.2],
      [-1, 0.5],
      [0.3, -1],
      [-0.4, -0.8],
    ])
      _m(e, 0, 1.9, 0, t * 2.2, 3.3, n * 2.2, 0.09, 4);
    if (n === `bare`) return;
    (e.setMaterial(0.9, 0, 0, 0),
      M$(e, 0, 4.1, 0, 3.3, 1.35, 3.3, r ? 16 : 5, r ? 0.95 : 1.5, a, 3, 1, i));
  }
}
function R$(e, t, n, r, i = 10) {
  let a = e.n;
  for (let a = 0; a < i; a++) {
    let o = (a / i) * Math.PI * 2,
      s = Math.cos(o),
      c = Math.sin(o);
    (e.vertex(t + s * r, n + c * r, 0, s, c, 0, um.u, um.v),
      e.vertex(t + s * (r - 0.04), n + c * (r - 0.04), 0, s, c, 0, um.u, um.v));
  }
  for (let t = 0; t < i; t++) {
    let n = a + t * 2,
      r = a + ((t + 1) % i) * 2;
    (e.tri(n, r, n + 1).tri(n + 1, r, r + 1),
      e.tri(n, n + 1, r).tri(n + 1, r + 1, r));
  }
}
function z$(e, t, n = !0) {
  (e.setMaterial(0.6, 0, 0, 0),
    pm(e, 1842204),
    R$(e, -0.52, 0.33, 0.33, n ? 24 : 8),
    R$(e, 0.52, 0.33, 0.33, n ? 24 : 8),
    e.setMaterial(0.45, 0.4, 0, 0),
    pm(e, t),
    _m(e, -0.52, 0.33, 0, -0.05, 0.45, 0, 0.022, 4),
    _m(e, -0.05, 0.45, 0, 0.38, 0.85, 0, 0.022, 4),
    _m(e, -0.1, 0.78, 0, -0.05, 0.45, 0, 0.022, 4),
    _m(e, 0.38, 0.85, 0, 0.52, 0.33, 0, 0.02, 4),
    pm(e, 9079434),
    _m(e, 0.36, 0.95, -0.28, 0.36, 0.95, 0.28, 0.015, 4),
    e.setMaterial(0.7, 0.3, 0, 0),
    pm(e, 10132896),
    hm(e, 0.58, 0.88, 0, 0.13, 0.11, 0.17),
    pm(e, 2500134),
    hm(e, -0.12, 0.84, 0, 0.12, 0.03, 0.06),
    pm(e, t, 0.8),
    hm(e, -0.25, 0.36, 0.05, 0.25, 0.06, 0.015));
}
function HNe(e) {
  (e.setMaterial(0.5, 0.5, 0, 0),
    pm(e, 10199461),
    hm(e, 3, 0.03, 0, 3, 0.03, 0.08));
  for (let t = 0; t < 12; t++) {
    let n = 0.25 + t * 0.5;
    (_m(e, n, 0.06, -0.05, n, 0.32, -0.05, 0.012, 3),
      _m(e, n, 0.06, 0.05, n, 0.32, 0.05, 0.012, 3));
  }
}
function UNe(e) {
  (e.setMaterial(0.9, 0, 0, 0),
    pm(e, 10131600),
    vm(e, 0, 0, 0, 0.18, 0.32, 10, 0.3),
    e.setMaterial(0.5, 0.4, 0, 0),
    pm(e, 14212056),
    vm(e, 0, 0, 0.18, 2.55, 0.045, 6));
  let t = FZ(`busPlate`);
  (e.setMaterial(0.5, 0, 0.04, 0),
    e.setColor(255, 255, 255),
    ym(e, 0, 2.62, 0.03, [1, 0, 0], [0, 1, 0], 0.32, 18, t),
    ym(e, 0, 2.62, -0.03, [-1, 0, 0], [0, 1, 0], 0.32, 18, t),
    pm(e, 1739334),
    _m(e, 0, 2.62, -0.025, 0, 2.62, 0.025, 0.325, 18));
  let n = FZ(`timetable`);
  (e.setMaterial(0.6, 0.2, 0, 0),
    pm(e, 14738143),
    hm(e, 0, 1.45, 0, 0.27, 0.42, 0.06),
    e.setColor(255, 255, 255),
    bm(e, 0, 1.45, 0.062, 0, 1, 0.46, 0.62, n),
    bm(e, 0, 1.45, -0.062, 0, -1, 0.46, 0.62, n));
}
function WNe(e) {
  (e.setMaterial(0.4, 0.5, 0, 0), pm(e, 9212567));
  for (let t of [-1.6, 1.6]) vm(e, t, -0.55, 0, 2.5, 0.05, 6);
  (pm(e, 12041407),
    hm(e, 0, 2.55, -0.05, 1.85, 0.06, 0.8, !0),
    e.setMaterial(0.15, 0.1, 0, 0),
    pm(e, 10465980, 0.9),
    hm(e, 0, 1.3, -0.6, 1.6, 1, 0.015),
    e.setMaterial(0.6, 0.2, 0, 0),
    pm(e, 7304570),
    hm(e, 0, 0.45, -0.35, 1.1, 0.03, 0.2));
  for (let t of [-0.9, 0.9]) hm(e, t, 0.22, -0.35, 0.03, 0.22, 0.15);
  (e.setMaterial(0.3, 0, 0.35, 1),
    pm(e, 15789280),
    hm(e, 1.75, 1.2, -0.25, 0.03, 0.75, 0.4));
}
function B$(e, t) {
  (e.setMaterial(0.5, 0.5, 0, 0), pm(e, 10133669), vm(e, 0, 0, 0, t, 0.03, 6));
}
function V$(e, t, n, r, i = r, a = r) {
  if (
    (e.setMaterial(0.45, 0.2, 0.05, 0),
    e.setColor(255, 255, 255),
    t === `round`)
  )
    ym(e, 0, 0, 0.012, [1, 0, 0], [0, 1, 0], r, 20, n);
  else if (t === `tri`) {
    let t = r * 0.58,
      i = -r * 1.15,
      a = e.vertex(-r, t, 0.012, 0, 0, 1, n.u0, n.v1);
    (e.vertex(r, t, 0.012, 0, 0, 1, n.u1, n.v1),
      e.vertex(0, i, 0.012, 0, 0, 1, (n.u0 + n.u1) / 2, n.v0),
      e.tri(a, a + 2, a + 1));
  } else bm(e, 0, 0, 0.012, 0, 1, i * 2, a * 2, n);
  if ((e.setMaterial(0.5, 0.4, 0, 0), pm(e, 10265254), t === `round`))
    ym(e, 0, 0, -0.012, [-1, 0, 0], [0, 1, 0], r, 20);
  else if (t === `tri`) {
    let t = r * 0.58,
      n = -r * 1.15,
      i = e.vertex(-r, t, -0.012, 0, 0, -1, um.u, um.v);
    (e.vertex(r, t, -0.012, 0, 0, -1, um.u, um.v),
      e.vertex(0, n, -0.012, 0, 0, -1, um.u, um.v),
      e.tri(i, i + 1, i + 2));
  } else mm(e, i, -a, -0.012, -i, -a, -0.012, -i, a, -0.012, i, a, -0.012);
}
function GNe(e) {
  (e.setMaterial(0.5, 0.5, 0, 0),
    pm(e, 9146774),
    vm(e, 0, 0, 0, 7.6, 0.2, 10, 0.16),
    pm(e, 7106934),
    vm(e, 0, 0, 0, 0.8, 0.3, 10, 0.27));
}
function H$(e, t) {
  (e.setMaterial(0.5, 0.5, 0, 0),
    pm(e, _$),
    _m(e, 0, 0, 0, 1, 0, 0, t, 6, t, !1, !0));
}
