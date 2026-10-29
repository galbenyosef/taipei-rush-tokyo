// tokyo/assets/region-tokyo-A7LxHjud 297 — col
// Lines 108400-108720 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* pEe(e, t) {
  let [n, r] = oW(t.plan, `omote-harakaku`),
    [, , , i] = cW(t, sW.harakakuBack),
    a = cW(t, sW.harakakuBack)[0],
    o = [-r, -r + 4.5, -r + 9, -r + 13.5, -r + 18, r],
    s = (e, t) => AW.y0 + AW.dy * Math.max(MW[e], t),
    c = (e, t) =>
      e === PW && t < 4
        ? [AW.y0 + AW.dy * t, AW.y0 + AW.dy * (t + 1)]
        : [s(e, t), s(e, t)],
    l = new le(7400),
    u = t.c(`glass`),
    d = () => e.col(13227737).mat(0.12, 0.4, 0.18, G),
    f = (t, n, r, i, a, o, s = 3.2, c = 4.6) => {
      if (o - a < 0.05) return;
      let u = Math.hypot(r - t, i - n),
        d = -(i - n) / u,
        f = (r - t) / u;
      if (e.coarse) {
        (e.col(9414318).mat(0.1, 0.6, 0.12, 1), e.panel(t, n, r, i, a, o));
        return;
      }
      let p = Math.max(1, Math.round(u / s)),
        m = Math.max(1, Math.round((o - a) / c)),
        h = (e, s, c) => [
          t + (r - t) * e + d * c,
          a + (o - a) * s,
          n + (i - n) * e + f * c,
        ],
        g = [9348783, 8822953, 10203834, 9677747, 8362403, 10664127];
      for (let t = 0; t < m; t++) {
        let n = t % 2 ? 0.5 : 0,
          r = l.chance(0.35);
        for (let i = -1; i < p; i++) {
          let a = Math.max(0, (i + n) / p),
            o = Math.min(1, (i + 1 + n) / p);
          if (o - a < 0.02) continue;
          let s = t / m,
            c = (t + 1) / m,
            u = h(a, s, 0),
            d = h(o, s, 0),
            f = h(o, c, 0),
            _ = h(a, c, 0);
          r && l.chance(0.8)
            ? e
                .col(g[l.int(0, g.length - 1)])
                .mat(0.08, 0.5, l.range(0.06, 0.1), 1)
            : e
                .col(g[l.int(0, g.length - 1)])
                .mat(0.08, 0.6, l.range(0.01, 0.03), 1);
          let v = l.next();
          if (v < 0.45) {
            (e.triFace(u[0], u[1], u[2], d[0], d[1], d[2], f[0], f[1], f[2]),
              e.triFace(u[0], u[1], u[2], f[0], f[1], f[2], _[0], _[1], _[2]));
            continue;
          }
          let y = h(
            (a + o) / 2,
            (s + c) / 2 + l.range(-0.12, 0.12) / m,
            v < 0.75 ? l.range(0.35, 0.6) : -l.range(0.25, 0.4),
          );
          (e.triFace(u[0], u[1], u[2], d[0], d[1], d[2], y[0], y[1], y[2]),
            e.triFace(d[0], d[1], d[2], f[0], f[1], f[2], y[0], y[1], y[2]),
            e.triFace(f[0], f[1], f[2], _[0], _[1], _[2], y[0], y[1], y[2]),
            e.triFace(_[0], _[1], _[2], u[0], u[1], u[2], y[0], y[1], y[2]));
        }
      }
    },
    p = (t, n, r, i, a, o, s, c) => {
      let l = (n, r, i, a, o, s) => {
          Math.max(o - i, s - a) > 0.01 && o >= i - 1e-6 && s >= a - 1e-6
            ? c
              ? f(t, n, t, r, Math.min(i, a), Math.max(o, s), 3, 4.5)
              : e.quad(t, i, n, t, a, r, t, s, r, t, o, n)
            : Math.max(i - o, a - s) > 0.01 &&
              (c
                ? f(t, r, t, n, Math.min(o, s), Math.max(i, a), 3, 4.5)
                : e.quad(t, s, r, t, o, n, t, i, n, t, a, r));
        },
        u = o - i,
        d = s - a;
      if (u * d < 0) {
        let e = u / (u - d),
          t = n + (r - n) * e,
          c = i + (a - i) * e;
        (l(n, t, i, c, o, c), l(t, r, c, a, c, s));
      } else l(n, r, i, a, o, s);
    };
  f(jW[0], -r, -n, -r, AW.shop, AW.top);
  for (let e = 0; e < MW.length; e++)
    f(jW[e + 1], -r, jW[e], -r, AW.shop, c(e, 0)[0]);
  f(n, -r, NW, -r, AW.shop, AW.top);
  let m = r + AW.step;
  (f(n, m, n, -r, AW.shop, AW.top, 3.6),
    f(n, i, n, m, AW.shop, AW.low, 3.6),
    f(a, m, n, m, AW.low, AW.top, 3.6),
    yield,
    e.col(8359315).mat(0.3, 0.4, 0.05, G),
    e.wall(-n, -r, -n, r, 0, AW.top, u, 6, 4.6),
    e.wall(a, r, a, m, 0, AW.top, u, 6, 4.6),
    e.wall(a, m, a, i, 0, AW.low, u, 6, 4.6),
    e.panel(a, i, n, i, 0, AW.low),
    e.panel(-n, r, jW[0], r, 0, AW.top),
    e.panel(jW[0], r, a, r, 0, s(0, 4)),
    e.col(9081494).mat(0.7, 0.2, 0, 0),
    e.flat(-n, -r, jW[0], r, AW.top),
    e.flat(NW, -r, n, r, AW.top),
    e.flat(a, r, n, m, AW.top),
    e.flat(a, m, n, i, AW.low));
  let h = () => [AW.top, AW.top];
  for (let t = 0; t < 5; t++) {
    let n = o[t],
      r = o[t + 1];
    for (let e = 0; e <= MW.length; e++) {
      let i = e === 0 ? h() : c(e - 1, t),
        a = e === MW.length ? h() : c(e, t);
      p(jW[e], n, r, i[0], i[1], a[0], a[1], e === 0 || e === MW.length);
    }
    for (let r = 0; r < MW.length; r++) {
      if (r === PW) continue;
      let i = t === 0 ? AW.shop : c(r, t - 1)[1],
        a = c(r, t)[0];
      t > 0 &&
        a - i > 0.01 &&
        (d(), e.wall(jW[r + 1], n, jW[r], n, i, a, u, 2.1, AW.dy));
    }
  }
  (f(NW, r, jW[3], r, s(3, 4), AW.top, 2.6, 4), yield);
  for (let t = 0; t < 5; t++)
    for (let n = 0; n < MW.length; n++) {
      let [r, i] = c(n, t),
        a = jW[n],
        s = jW[n + 1],
        l = o[t],
        u = o[t + 1];
      if (r !== i) {
        let t = e.coarse ? 3 : 9,
          n = (i - r) / t,
          o = (u - l) / t;
        e.col(15658730).mat(0.7, 0.05, 0.05, 1);
        for (let i = 0; i < t; i++) {
          let t = l + i * o;
          (e.panel(s, t, a, t, r + i * n, r + (i + 1) * n),
            e.flat(a, t, s, t + o, r + (i + 1) * n));
        }
        continue;
      }
      let d = (n + t) % 3 == 0;
      (e.col(d ? 13617597 : 6128709).mat(0.9, 0, 0, 0),
        e.flat(a, l, s, u, r),
        !e.coarse &&
          !d &&
          (n + t) % 2 == 0 &&
          (e.col(5010234).mat(0.95, 0, 0, 0),
          e.box(a + 0.3, r, l + 0.3, s - 0.3, r + 0.55, l + 1.3)));
    }
  if ((e.col(6128709).mat(0.9, 0, 0, 0), !e.coarse)) {
    e.col(13885925).mat(0.1, 0.5, 0.1, 1);
    for (let t = 0; t < 5; t++)
      for (let n = 0; n < MW.length; n++) {
        if (n === PW) continue;
        let r = c(n, t)[0];
        if (r - (t === 0 ? AW.shop : c(n, t - 1)[1]) < 0.5) continue;
        let i = o[t] + 0.12;
        (e.panel(jW[n + 1], i, jW[n], i, r, r + 1.1),
          e.panel(jW[n], i + 0.02, jW[n + 1], i + 0.02, r, r + 1.1));
      }
    let n = t.season ?? `green`;
    for (let [t, r, i, a, s] of [
      [1, 1, 5.5, `keyaki`, 7411],
      [0, 3, 6, `maple`, 7412],
      [5, 1, 6.5, `keyaki`, 7414],
      [1, 4, 7, `keyaki`, 7415],
      [4, 2, 5, `ever`, 7417],
    ])
      GV(
        e,
        a,
        (jW[t] + jW[t + 1]) / 2,
        (o[r] + o[r + 1]) / 2 + 0.6,
        i,
        s,
        n,
        c(t, r)[0],
        !1,
      );
  }
  yield;
  let g = n - AW.entW,
    _ = -r + AW.entD;
  if (
    (e.col(15855593).mat(0.6, 0, 0.05, 1),
    e.panel(g, -r, -n, -r, 0, AW.shop),
    e.panel(n, -r, g, -r, AW.entH, AW.shop),
    e.panel(n, _, n, -r, AW.entH, AW.shop),
    !e.coarse)
  ) {
    let t = [16177621, 14674162, 15985881];
    for (let i = 0; i < 3; i++) {
      let a = -n + 1.2 + i * 3.6 + 3,
        o = a - 3;
      (e.col(t[i]).mat(0.4, 0, 0.5, 1),
        e.panel(a, -r - 0.04, o, -r - 0.04, 1.4, 7.8));
    }
    e.col(16777215).mat(0.5, 0.1, 0.08, 1);
    for (let t = -n + 0.6; t < g - 0.3; t += 1.2)
      e.box(t - 0.06, 0, -r - 0.32, t + 0.06, AW.shop, -r);
  }
  (e.push().col(16777215).mat(0.3, 0.2, 0.45, G),
    e.wall(n, _, g, _, 0, AW.entH, t.c(`doors`), 2.4, AW.entH),
    e.pop(),
    e.col(14868698).mat(0.6, 0, 0.1, 1),
    e.panel(g, _, g, -r, 0, AW.entH),
    e.flat(g, -r, n, _, AW.entH, e.white, 0, 0, !1),
    e.col(14277854).mat(0.4, 0.5, 0, 0),
    e.box(n - 0.6, 0, -r, n, AW.entH, -r + 0.6),
    e.push().col(16777215).mat(0.3, 0.2, 0.4, G),
    e.wall(n, i, n, _, 0, 5, t.c(`doors`), 2.4, 5),
    e.pop(),
    d(),
    e.wall(n, i, n, _, 5, AW.shop, u, 4.2, AW.shop - 5),
    fW(
      e,
      `ハラカド`,
      (g + n) / 2,
      AW.entH + 0.5,
      -r - 0.05,
      RB,
      0.9,
      2964032,
      0.1,
    ),
    e.solid(-n, -r, g, r, 0, AW.y0),
    e.solid(g, _, n, r, 0, AW.y0),
    e.solid(g, -r, n, _, AW.entH, AW.y0),
    e.solid(-n, -r, jW[0], r, AW.y0, AW.top),
    e.solid(NW, -r, n, r, AW.y0, AW.top),
    e.solid(a, r, n, m, 0, AW.top),
    e.solid(a, m, n, i, 0, AW.low));
  for (let t = 0; t < 5; t++)
    for (let n = 0; n < MW.length; n++)
      e.solid(jW[n], o[t], jW[n + 1], o[t + 1], AW.y0, Math.max(...c(n, t)));
}
function mEe(e, t) {
  let [n, r] = oW(t.plan, `omote-harakaku`),
    [i, , , a] = cW(t, sW.harakakuBack);
  (e.col(9414318).mat(0.12, 0.6, 0.12, 1),
    e.box(-n, 0, -r, jW[0], AW.top, r),
    e.box(NW, 0, -r, n, AW.top, r),
    e.box(jW[0], 0, -r, NW, AW.y0 + AW.dy * 2, r),
    e.box(i, 0, r, n, AW.top, a));
}
var FW = { h: 20, shop: 5.2 };
function* hEe(e, t) {
  let [n, r] = oW(t.plan, `omote-kiddo`);
  if (
    (gW(e, -n, -r, n, r, _W(t, n, r)),
    e.col(15987180).mat(0.7, 0, 0, 0),
    e.box(-n, 0, -r, n, FW.h, r),
    e.coarse)
  )
    return;
  let i = -r - 0.03;
  (e.col(2895667).mat(0.4, 0.3, 0, 0),
    e.panel(n - 0.6, i, -n + 0.6, i, 0.4, FW.shop),
    e.col(16773848).mat(0.3, 0, 0.55, 1),
    e.panel(n - 0.9, i - 0.03, -n + 0.9, i - 0.03, 0.6, FW.shop - 0.3));
  let a = [16734815, 16763196, 4171765, 8115081, 16748484, 16777215],
    o = new le(7500);
  for (let [t, r] of [
    [6.4, 10.6],
    [11.8, 16],
  ]) {
    (e.col(2895667).mat(0.4, 0.3, 0, 0), e.panel(n - 1, i, -n + 1, i, t, r));
    let s = n - 1.2;
    for (let c = 0; c < 5 && s > -n + 1.4; c++) {
      let l = Math.min(s - (-n + 1.2), o.range(1.6, 3.4));
      (e.col(a[(c + (t > 7 ? 2 : 0)) % a.length]).mat(0.5, 0, 0.38, 1),
        e.panel(
          s,
          i - 0.03,
          s - l + 0.15,
          i - 0.03,
          t + o.range(0.2, 0.7),
          r - o.range(0.2, 0.6),
        ),
        (s -= l));
    }
  }
  (yield,
    e.col(16777215).mat(0.4, 0, 0.45, 1),
    e.box(-n + 0.3, 16.8, -r - 0.6, n - 0.3, 19.2, -r),
    fW(
      e,
      `KIDDY LAND`,
      0,
      17.15,
      -r - 0.63,
      RB,
      1.7,
      14689839,
      0.6,
      2 * n - 1.4,
    ),
    e.solid(-n, -r, n, r, 0, FW.h));
}
function gEe(e, t) {
  let [n, r] = oW(t.plan, `omote-kiddo`);
  (e.col(15987180).mat(0.7, 0, 0, 0), e.box(-n, 0, -r, n, FW.h, r));
}
var IW = { st: 6, n: 5, hx: 7.4, hz: 10.4, rot: [-0.1, -0.05, 0, 0.05, 0.1] };
function LW(e, t, n) {
  let r = Math.cos(n),
    i = Math.sin(n),
    a = (e, t) => [e * r - t * i, e * i + t * r],
    o = a(-IW.hx, -IW.hz),
    s = a(IW.hx, -IW.hz),
    c = a(IW.hx, IW.hz),
    l = a(-IW.hx, IW.hz);
  e.quad(o[0], t, o[1], s[0], t, s[1], c[0], t, c[1], l[0], t, l[1]);
}
