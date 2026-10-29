// tokyo/assets/region-tokyo-55J_WESF 197 — math
// Lines 78569-78877 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var R_e = {
  id: `ueno-station`,
  site: F_e,
  name: { ja: `上野駅`, zh: `上野車站`, en: `Ueno Station` },
  near: 230,
  build: N_e,
  far: P_e,
  farBoxes: I_e,
  bounds: L_e,
  blip: !1,
  anchors: [
    {
      key: `ueno-station-front`,
      lx: Sk,
      lz: -1186.5,
      turn: 0,
      name: { zh: `上野車站 正面玄關口`, en: `Ueno Station, Main Entrance` },
    },
    {
      key: `ueno-station-hirokoji`,
      lx: (jk.o0 + jk.o1) / 2,
      lz: -1196.5,
      turn: 0,
      name: { zh: `上野車站 廣小路口`, en: `Ueno Station, Hirokoji Exit` },
    },
    {
      key: `ueno-station-plaza`,
      lx: -110,
      lz: -1184,
      turn: Math.PI * 1.75,
      name: { zh: `上野車站 廣小路口廣場`, en: `Ueno Station, Hirokoji Plaza` },
    },
    {
      key: `ueno-station-taxi`,
      lx: -59.5,
      lz: Tk.z0 - 1.6,
      turn: Math.PI,
      name: { zh: `上野車站 計程車招呼站`, en: `Ueno Station, Taxi Stand` },
    },
    {
      key: `ueno-station-deck`,
      lx: kk.x1 + 1.2,
      lz: (kk.z0 + kk.z1) / 2,
      turn: -Math.PI / 2,
      name: { zh: `上野車站 行人天橋`, en: `Ueno Station, Pedestrian Deck` },
    },
  ],
  volumes: [
    {
      key: `ueno-central-hall`,
      lx: Sk,
      lz: (ZO.zb + wk) / 2,
      r: (ZO.x1 - ZO.x0) / 2 - 1,
      y0: 0,
      y1: mk,
      note: `中央改札 hall (30 × 20 × 13 m real; T2-Interiors: the concourse, the 猪熊弦一郎 mural 「自由」)`,
    },
  ],
  clock: {
    faces: [
      { lx: Sk, ly: __e, lz: ZO.zf + 0.08, turn: Math.PI },
      { lx: (jk.bay0 + jk.bay1) / 2, ly: 17, lz: YO.zf + 0.58, turn: Math.PI },
    ],
    r: 0.62,
    melody: `none`,
  },
};
function Lk(e, t, n, r, i, a = 4) {
  let [o, s, c, l] = typeof i == `number` ? [i, i, i, i] : i,
    u = [],
    d = (e, t, n, r) => {
      if (n <= 0.01) {
        u.push([e, t]);
        return;
      }
      for (let i = 0; i <= a; i++) {
        let o = r - (Math.PI / 2) * (i / a);
        u.push([e + n * Math.cos(o), t + n * Math.sin(o)]);
      }
    };
  return (
    d(o > 0.01 ? e + o : e, o > 0.01 ? t + o : t, o, (3 * Math.PI) / 2),
    d(s > 0.01 ? e + s : e, s > 0.01 ? r - s : r, s, Math.PI),
    d(c > 0.01 ? n - c : n, c > 0.01 ? r - c : r, c, Math.PI / 2),
    d(l > 0.01 ? n - l : n, l > 0.01 ? t + l : t, l, 0),
    u
  );
}
function Rk(e, t) {
  let n = e.length,
    r = [];
  for (let i = 0; i < n; i++) {
    let a = e[(i + n - 1) % n],
      o = e[i],
      s = e[(i + 1) % n],
      c = (e, t) => {
        let n = t[0] - e[0],
          r = t[1] - e[1],
          i = Math.hypot(n, r) || 1;
        return [-r / i, n / i];
      },
      l = c(a, o),
      u = c(o, s),
      d = l[0] + u[0],
      f = l[1] + u[1],
      p = Math.hypot(d, f) || 1;
    ((d /= p), (f /= p));
    let m = Math.max(0.35, d * l[0] + f * l[1]);
    r.push([o[0] + (d * t) / m, o[1] + (f * t) / m]);
  }
  return r;
}
function zk(e, t, n, r, i, a, o, s) {
  let c = 0,
    l = t.length;
  for (let u = 0; u < l; u++) {
    let d = t[u],
      f = t[(u + 1) % l],
      p = Math.hypot(f[0] - d[0], f[1] - d[1]);
    p < 0.001 ||
      (e.wall(d[0], d[1], f[0], f[1], n, r, i, a, o, s, c), (c += p));
  }
}
function Bk(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e)
    ((t = Math.min(t, a[0])),
      (r = Math.max(r, a[0])),
      (n = Math.min(n, a[1])),
      (i = Math.max(i, a[1])));
  return [(t + r) / 2, (n + i) / 2];
}
function Vk(e, t, n, r = !0) {
  let [i, a] = Bk(t),
    o = e.white,
    s = r ? 1 : -1,
    c = e.v(i, n, a, 0, s, 0, o.u0, o.v0),
    l = t.map((t) => e.v(t[0], n, t[1], 0, s, 0, o.u0, o.v0)),
    u = l.length;
  for (let t = 0; t < u; t++)
    r ? e.tri(c, l[t], l[(t + 1) % u]) : e.tri(c, l[(t + 1) % u], l[t]);
}
function Hk(e, t, n, r, i) {
  let a = Rk(t, n),
    o = a.length;
  for (let t = 0; t < o; t++) {
    let n = a[t],
      s = a[(t + 1) % o];
    Math.hypot(s[0] - n[0], s[1] - n[1]) < 0.001 ||
      e.panel(n[0], n[1], s[0], s[1], r, i);
  }
  (Vk(e, a, i, !0), Vk(e, a, r, !1));
}
function Uk(e, t, n, r, i, a, o, s = 1.6, c) {
  let l = t.length,
    u = 0;
  for (let c = 0; c < l; c++) {
    let d = t[c],
      f = t[(c + 1) % l],
      p = Math.hypot(f[0] - d[0], f[1] - d[1]);
    if (p < 0.001) continue;
    let m = Math.max(1, Math.ceil(p / s));
    for (let t = 0; t < m; t++) {
      let s = t / m,
        c = (t + 1) / m,
        l = d[0] + (f[0] - d[0]) * s,
        h = d[1] + (f[1] - d[1]) * s,
        g = d[0] + (f[0] - d[0]) * c,
        _ = d[1] + (f[1] - d[1]) * c,
        v = r(l, h),
        y = r(g, _),
        b = n + Math.floor((Math.min(v, y) - n) / o) * o;
      b > n + 0.001 && e.wall(l, h, g, _, n, b, i, a, o, void 0, u + p * s);
      let x = ((((u + p * s) % a) + a) % a) / a,
        S = x + (p * (c - s)) / a;
      e.quad(
        l,
        b,
        h,
        g,
        b,
        _,
        g,
        y,
        _,
        l,
        v,
        h,
        i,
        x,
        0,
        Math.min(1, S),
        ((e) => Math.min(1, (e - b) / o))(Math.max(v, y)),
      );
    }
    u += p;
  }
  c !== void 0 && e.push().col(c);
  let [d, f] = Bk(t),
    p = e.white,
    m = e.v(d, r(d, f), f, 0, 1, 0, p.u0, p.v0),
    h = t.map((t) => e.v(t[0], r(t[0], t[1]), t[1], 0, 1, 0, p.u0, p.v0));
  for (let t = 0; t < l; t++) e.tri(m, h[t], h[(t + 1) % l]);
  c !== void 0 && e.pop();
}
function Wk(e, t, n, r, i = 0.45) {
  (e.push().col(16722450).mat(0.5, 0, 0.95, 1),
    e.obox(t, n + i, r, i, i, i),
    e.pop());
}
function Gk(e, t, n, r, i, a, o, s) {
  return e.A.sub(t, n / o, 1 - (r + a) / s, (n + i) / o, 1 - r / s);
}
function Kk(e, t, n, r, i, a, o, s) {
  let c = Math.sin(a),
    l = -Math.cos(a),
    u = n + i;
  if ((e.push(), e.col(15263972).mat(0.5, 0.5, 0.05, 1), e.coarse))
    e.obox(t, n + i / 2, r, 1, i / 2, 1);
  else {
    for (let [i, a] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ])
      e.rod(t + i, n, r + a, t + i, u, r + a, 0.12, 4);
    for (let i = n + 1.5, a = 0; i < u; i += 3, a++)
      (e.col(a % 4 == 0 ? 13120030 : 15263972),
        e.obox(t, i, r - 1, 1, 0.07, 0.07),
        e.obox(t, i, r + 1, 1, 0.07, 0.07),
        e.obox(t - 1, i, r, 0.07, 0.07, 1),
        e.obox(t + 1, i, r, 0.07, 0.07, 1),
        e.rod(t - 1, i, r - 1, t + 1, i + 3, r - 1, 0.06, 3),
        e.rod(t - 1, i, r + 1, t - 1, i + 3, r - 1, 0.06, 3));
  }
  (e.col(14211284).mat(0.5, 0.4, 0, 0),
    e.obox(t, u + 0.6, r, 1.6, 0.6, 1.6, a),
    e.col(13120030).mat(0.4, 0.2, 0.08, 1),
    e.obox(t + c * 1.4 + l * 1.6, u + 2, r + l * 1.4 - c * 1.6, 0.8, 1, 0.9, a),
    e.col(15263972).mat(0.5, 0.5, 0, 0));
  let d = t - c * 7,
    f = r - l * 7;
  (e.rod(t, u + 1.3, r, d, u + 1.3, f, 0.35, 4),
    e.col(9079950).mat(0.8, 0, 0, 0),
    e.obox(d + c * 1.2, u + 0.6, f + l * 1.2, 1, 1, 1.4, a));
  let p = t - c * 1,
    m = r - l * 1,
    h = u + 6;
  (e.col(13120030).mat(0.5, 0.4, 0.05, 1),
    e.rod(t - c * 2.2, u + 1.2, r - l * 2.2, p, h, m, 0.18, 4),
    e.rod(t + c * 0.6, u + 1.2, r + l * 0.6, p, h, m, 0.18, 4));
  let g = t + c * Math.cos(s) * o,
    _ = r + l * Math.cos(s) * o,
    v = u + 1.4 + Math.sin(s) * o,
    y = e.coarse ? 2 : 6;
  for (let n = 0; n < y; n++) {
    let i = n / y,
      a = (n + 1) / y;
    (e.col(n % 2 ? 15263972 : 13120030),
      e.rod(
        t + (g - t) * i,
        u + 1.4 + (v - u - 1.4) * i,
        r + (_ - r) * i,
        t + (g - t) * a,
        u + 1.4 + (v - u - 1.4) * a,
        r + (_ - r) * a,
        0.42 - 0.2 * a,
        4,
        0.42 - 0.2 * a,
      ));
  }
  (e.coarse ||
    (e.col(3158062).mat(0.6, 0.6, 0, 0),
    e.rod(p, h, m, g, v, _, 0.04, 3),
    e.rod(g, v, _, g, v - 18, _, 0.02, 3),
    e.col(15909376).obox(g, v - 18.6, _, 0.35, 0.5, 0.35)),
    Wk(e, t, u + 6.2, r, 0.3),
    Wk(e, g, v + 0.2, _, 0.3),
    e.pop());
}
var qk = { x: 277, z: -140 },
  Jk = (e) => e - qk.x,
  Yk = (e) => e - qk.z,
  Xk = (e, t) => [Jk(e), Yk(t)],
  Zk = { x0: 268.3, x1: 279.4, z0: -144.5, z1: -126.7, h: 31 },
  Qk = { x0: 268.5, x1: 279.2, z0: -144.4, z1: -126.9 },
  $k = 284,
  eA = (e, t) => $k - 3.5 * (Jk(Qk.x1) - e) - 0.7 * (t - Yk(Qk.z0)),
  tA = 214,
  z_e = [
    [112, 116.2],
    [176, 180.2],
  ],
  nA = [Xk(287.4, -158.4), Xk(280, -158.4), Xk(280, -148.8), Xk(282.4, -148.8)],
  rA = 26;
function B_e(e) {
  return Lk(
    Jk(Qk.x0),
    Yk(Qk.z0),
    Jk(Qk.x1),
    Yk(Qk.z1),
    [2.5, 2.5, 4, 4],
    e ? 2 : 4,
  );
}
