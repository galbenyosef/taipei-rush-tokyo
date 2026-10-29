// tokyo/assets/region-tokyo-A7LxHjud 203 — math
// Lines 80349-80668 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function FA(e, t, n, r, i, a, o, s = {}) {
  let c = t(n),
    l = c.length,
    u = s.cols ?? Math.max(1, Math.round(wve(c) / a)),
    d = n;
  for (; d < r - 0.001;) {
    let n = Math.min(o, r - d),
      a = t(d),
      c = t(d + n),
      f = [0];
    for (let e = 0; e < l; e++) {
      let t = (e + 1) % l,
        n = (a[e][0] + c[e][0]) / 2,
        r = (a[e][1] + c[e][1]) / 2,
        i = (a[t][0] + c[t][0]) / 2,
        o = (a[t][1] + c[t][1]) / 2;
      f.push(f[e] + Math.hypot(i - n, o - r));
    }
    let p = f[l] || 1,
      m = n / o;
    for (let t = 0; t < l; t++) {
      let r = f[t] / p,
        o = f[t + 1] / p;
      if (o - r < 1e-7 || s.skip?.(t, d)) continue;
      let h = (t + 1) % l,
        g = r;
      for (; g < o - 1e-7;) {
        let s = Math.floor(g * u + 1e-6),
          l = Math.min(o, (s + 1) / u),
          f = (g - r) / (o - r),
          p = (l - r) / (o - r),
          _ = a[t][0] + (a[h][0] - a[t][0]) * f,
          v = a[t][1] + (a[h][1] - a[t][1]) * f,
          y = a[t][0] + (a[h][0] - a[t][0]) * p,
          b = a[t][1] + (a[h][1] - a[t][1]) * p,
          x = c[t][0] + (c[h][0] - c[t][0]) * p,
          S = c[t][1] + (c[h][1] - c[t][1]) * p,
          C = c[t][0] + (c[h][0] - c[t][0]) * f,
          w = c[t][1] + (c[h][1] - c[t][1]) * f;
        (e.quad(
          _,
          d,
          v,
          y,
          d,
          b,
          x,
          d + n,
          S,
          C,
          d + n,
          w,
          i,
          g * u - s,
          0,
          Math.min(1, l * u - s),
          m,
        ),
          (g = l));
      }
    }
    d += n;
  }
  return u;
}
function IA(e) {
  return [...e].reverse();
}
function Tve(e, t, n, r, i) {
  let [a, o, s, c] = i;
  return [
    [e + a, t],
    [e, t + a],
    [e, r - o],
    [e + o, r],
    [n - s, r],
    [n, r - s],
    [n, t + c],
    [n - c, t],
  ];
}
function Eve(e, t, n, r, i) {
  let a = [],
    o = (e, t, r) => {
      for (let o = 0; o <= i; o++) {
        let s = r - (Math.PI / 2) * (o / i);
        a.push([e + n * Math.cos(s), t + n * Math.sin(s)]);
      }
    };
  return (
    o(-e + n, -t + n, (3 * Math.PI) / 2),
    a.push([-e - r, 0]),
    o(-e + n, t - n, Math.PI),
    a.push([0, t + r]),
    o(e - n, t - n, Math.PI / 2),
    a.push([e + r, 0]),
    o(e - n, -t + n, 0),
    a.push([0, -t - r]),
    a
  );
}
function LA(e, t, n, r, i) {
  let a = [];
  for (let o = 0; o < i; o++) {
    let s = -Math.PI / 2 - (o / i) * Math.PI * 2;
    a.push([e + n * Math.cos(s), t + r * Math.sin(s)]);
  }
  return a;
}
function RA(e, t, n) {
  let r = 0,
    i = 0;
  for (let e of t) ((r += e[0]), (i += e[1]));
  ((r /= t.length), (i /= t.length));
  let a = e.white,
    o = e.v(r, n, i, 0, 1, 0, a.u0, a.v0),
    s = t.map((t) => e.v(t[0], n, t[1], 0, 1, 0, a.u0, a.v0));
  for (let t = 0; t < s.length; t++) e.tri(o, s[t], s[(t + 1) % s.length]);
}
function zA(e, t, n, r, i, a) {
  let o = e.sub(t, n, r, 0);
  (KC(e, 0, 0, i, a), e.leave(o), e.pole(t, r, 0.35, n, n + 3));
}
function BA(e, t, n, r, i, a = 4024885) {
  (e.push().col(a).mat(0.95, 0, 0, 0),
    e.lathe(
      t,
      r,
      [i * 0.6, n, i, n + i * 0.45, i * 0.75, n + i * 1.05, 0.02, n + i * 1.25],
      e.coarse ? 5 : 7,
      (t * 3 + r) % 1,
    ),
    e.pop());
}
function VA(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
  let h = Math.max(1, Math.round((i - n) / s));
  e.push();
  for (let a = 0; a < h; a++) {
    let s = n + ((i - n) * a) / h,
      d = n + ((i - n) * (a + 1)) / h;
    e.col(a % 2 ? u : l).mat(0.9, 0, 0, 0);
    for (let n = 0; n < c; n++) {
      let i = t + ((r - t) * n) / c,
        a = t + ((r - t) * (n + 1)) / c;
      e.quad(i, o(i, d), d, a, o(a, d), d, a, o(a, s), s, i, o(i, s), s);
    }
  }
  e.col(m).mat(0.75, 0.05, 0.12, 0);
  let g = (t, n, r, i, s) => {
    for (let c = 0; c < s; c++) {
      let l = c / s,
        u = (c + 1) / s,
        m = t + (r - t) * l,
        h = n + (i - n) * l,
        g = t + (r - t) * u,
        _ = n + (i - n) * u,
        v = o(m, h),
        y = o(g, _),
        b = Math.hypot(g - m, _ - h),
        x = Math.min(v, y);
      (e.wall(m, h, g, _, a, x, d, f, p, void 0, (c * b) % f),
        Math.abs(v - y) > 0.001 && e.quad(m, x, h, g, x, _, g, y, _, m, v, h));
    }
  };
  (g(r, n, t, n, c),
    g(t, i, r, i, c),
    g(t, n, t, i, h),
    g(r, i, r, n, h),
    e.pop());
}
r.add({ "虎之門之丘 車站大樓": `虎ノ門ヒルズ ステーションタワー` });
function HA(e, t, n, r, i = !0) {
  let a = n.length;
  for (let o = 0; o < a; o++) {
    let s = (o + 1) % a;
    i
      ? e.quad(
          t[o][0],
          r,
          t[o][1],
          n[o][0],
          r,
          n[o][1],
          n[s][0],
          r,
          n[s][1],
          t[s][0],
          r,
          t[s][1],
        )
      : e.quad(
          t[s][0],
          r,
          t[s][1],
          n[s][0],
          r,
          n[s][1],
          n[o][0],
          r,
          n[o][1],
          t[o][0],
          r,
          t[o][1],
        );
  }
}
function UA(e, t, n, r, i, a, o = 1.1) {
  (e.push().col(10468550).mat(0.1, 0.5, 0.04, 1),
    e.panel(t, n, r, i, a, a + o),
    e.panel(r, i, t, n, a, a + o),
    e.col(14212318).mat(0.4, 0.6, 0, 0),
    e.rod(t, a + o, n, r, a + o, i, 0.05, 4),
    e.pop());
}
var WA = { x: -548, z: 703 },
  GA = (e) => e - WA.x,
  KA = (e) => e - WA.z,
  qA = { top: 255.5, screen: 241, roof: 249 },
  JA = { x0: -12, x1: 32.5, z0: -10, z1: 10, h: 6.5 },
  Dve = { x0: 21.5, x1: 32.5, z0: -17, z1: 17, h: 8 },
  YA = { x0: -42, x1: 0, z0: -57, z1: -20, y: 6.5 },
  XA = { x0: -41.6, x1: -20.4, z0: -64.5, z1: -57 },
  ZA = { x0: -18, x1: -4, z0: KA(586), z1: YA.z0, y: 6.5, d: 1.4 },
  QA = {
    x0: GA(-541),
    x1: GA(-517),
    z0: KA(734),
    z1: KA(758),
    h: 185,
    pod: 32,
  },
  $A = { x0: GA(-591), x1: GA(-567), z0: KA(735), z1: KA(759), h: 220 },
  Ove = [
    [GA(-592), KA(684), GA(-571), KA(700), 5],
    [GA(-592), KA(700), GA(-571), KA(716), 3.4],
    [GA(-592), KA(716), GA(-571), KA(733), 1.8],
  ];
function ej(e, t) {
  let n = Math.min(1, Math.max(0, e) / qA.top) ** 1.5,
    r = 22 - 8 * n,
    i = 21 - 4 * n,
    a = 5 + 6 * n;
  return zk(-r, -i, r, i, a, t);
}
function* kve(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  if (
    (e.col(14867924).mat(0.85, 0, 0, 0),
    e.flat(GA(-592), KA(638), GA(-515), JA.z0, 0.04, n, r, r),
    e.flat(GA(-592), JA.z1, GA(-515), KA(760), 0.04, n, r, r),
    e.flat(GA(-592), JA.z0, JA.x0, JA.z1, 0.04, n, r, r),
    !e.coarse)
  ) {
    let t = 41;
    for (let n of [-534, -527, -520]) zA(e, GA(n), 0.04, KA(677), 9, t++);
    for (let n of [645, 657, 669]) zA(e, GA(-519), 0.04, KA(n), 9.5, t++);
  }
  yield;
}
function* Ave(e, t) {
  let n = e.coarse ? 2 : 5,
    r = (e) => ej(e, n),
    i = 3 * n + 2;
  (e.col(16777215).mat(0.3, 0.35, 0.3, G),
    FA(e, r, 0, 8, t.A.sub(`lcTkGrid`, 0.5, 0, 1, 1), 3.2, 8, {
      skip: (e) => e === i,
    }),
    e.col(13950694).mat(0.3, 0.2, 0.09, G | 32));
  let a = FA(
    e,
    r,
    8,
    qA.screen,
    t.A.sub(`lcMidGlass`, 0, 0, 0.5, 1),
    e.coarse ? 12.8 : 6.4,
    e.coarse ? 25.2 : 12.6,
  );
  yield;
  let o = t.A.sub(`lcMidGlass`, 0.5, 0, 1, 1);
  if (
    (e.col(15922422).mat(0.4, 0.5, 0.28, 1),
    FA(e, r, qA.screen, qA.top, o, 6.4, 14.5, {
      cols: Math.max(8, Math.round(a * 1.6)),
    }),
    e.col(13159632).mat(0.6, 0.4, 0.05, 0),
    FA(e, (e) => IA(Bk(r(e), -0.5)), qA.roof, qA.top, o, 6.4, 14.5, {
      cols: Math.max(8, Math.round(a * 1.6)),
    }),
    e.col(15264492).mat(0.5, 0.4, 0.2, 1),
    HA(e, Bk(r(qA.top), -0.5), r(qA.top), qA.top),
    e.col(8357e3).mat(0.85, 0, 0, 0),
    Uk(e, Bk(r(qA.roof), -0.5), qA.roof),
    !e.coarse)
  ) {
    (e.col(5593437).mat(0.8, 0, 0, 0),
      e.box(-8, qA.roof, -8, 8, qA.roof + 0.5, 8),
      e.col(16053488).mat(0.6, 0, 0.1, 1));
    let t = LA(0, 0, 6.6, 6.6, 20);
    (HA(e, LA(0, 0, 6, 6, 20), t, qA.roof + 0.52),
      e.flat(-2.6, -3, -1.6, 3, qA.roof + 0.52),
      e.flat(1.6, -3, 2.6, 3, qA.roof + 0.52),
      e.flat(-1.6, -0.45, 1.6, 0.45, qA.roof + 0.52),
      e.col(10133154).mat(0.8, 0.2, 0, 0),
      e.box(-12.5, qA.roof, -15, -9.5, qA.roof + 3.5, 15),
      e.box(9.5, qA.roof, -15, 12.5, qA.roof + 3.5, 15));
  }
  for (let t of [qA.top, 124]) {
    let i = Bk(r(t), 0.2);
    for (let r = 0; r < 4; r++) {
      let a = i[r * (n + 1) + Math.floor(n / 2)];
      Kk(e, a[0], t - (t === qA.top ? 0 : 0.5), a[1], t === qA.top ? 0.7 : 0.5);
    }
  }
  (e.solid(-22, -21, 22, JA.z0, 0, qA.top),
    e.solid(-22, JA.z1, 22, 21, 0, qA.top),
    e.solid(-22, JA.z0, JA.x0, JA.z1, 0, qA.top),
    e.solid(JA.x0, JA.z0, 22, JA.z1, JA.h, qA.top),
    yield);
}
