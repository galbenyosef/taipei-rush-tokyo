// tokyo/assets/region-tokyo-55J_WESF 218 — math
// Lines 84939-85278 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function _N(e, t, n, r, i, a) {
  if (e.coarse) return gN(e, t, n, a * 1.6, 3);
  let o = n[0] - t[0],
    s = n[1] - t[1],
    c = n[2] - t[2],
    l = Math.hypot(o, s, c) || 1,
    u = o / l,
    d = s / l,
    f = c / l,
    p = d * r[1],
    m = f * r[0] - u * r[1],
    h = -d * r[0],
    g = Math.hypot(p, m, h) || 1;
  ((p *= i / 2 / g),
    (m *= i / 2 / g),
    (h *= i / 2 / g),
    gN(e, [t[0] + p, t[1] + m, t[2] + h], [n[0] + p, n[1] + m, n[2] + h], a, 4),
    gN(
      e,
      [t[0] - p, t[1] - m, t[2] - h],
      [n[0] - p, n[1] - m, n[2] - h],
      a,
      4,
    ));
  let _ = Math.max(2, Math.round(l / (i * 2.4))),
    v = (e, n) => [
      t[0] + o * e + n * p,
      t[1] + s * e + n * m,
      t[2] + c * e + n * h,
    ];
  for (let t = 0; t < _; t++)
    gN(
      e,
      v(t / _, t % 2 ? 1 : -1),
      v((t + 1) / _, t % 2 ? -1 : 1),
      a * 0.55,
      3,
    );
}
function vN(e, t, n, r, i) {
  let [a, o, s] = t,
    [c, l, u] = n;
  (e.quad(a + r, o, s - r, a - r, o, s - r, c - i, l, u - i, c + i, l, u - i),
    e.quad(a - r, o, s + r, a + r, o, s + r, c + i, l, u + i, c - i, l, u + i),
    e.quad(a - r, o, s - r, a - r, o, s + r, c - i, l, u + i, c - i, l, u - i),
    e.quad(a + r, o, s + r, a + r, o, s - r, c + i, l, u - i, c + i, l, u + i));
}
function yN(e, t) {
  return Lk(-e, -e, e, e, t, 1);
}
function bN(e, t, n, r, i, a = e.white, o = 0) {
  let s = t.length;
  for (let c = 0; c < s; c++) {
    let l = (c + 1) % s,
      u = Math.hypot(t[l][0] - t[c][0], t[l][1] - t[c][1]);
    u < 0.001 ||
      e.grid(
        t[c][0],
        r,
        t[c][1],
        t[l][0],
        r,
        t[l][1],
        n[l][0],
        i,
        n[l][1],
        n[c][0],
        i,
        n[c][1],
        a,
        o > 0 ? Math.max(1, Math.round(u / o)) : 1,
        1,
      );
  }
}
function Hye(e, t, n, r, i) {
  let a = t.length;
  for (let o = 0; o < a; o++) {
    let s = (o + 1) % a;
    e.quad(
      t[s][0],
      r,
      t[s][1],
      t[o][0],
      r,
      t[o][1],
      n[o][0],
      i,
      n[o][1],
      n[s][0],
      i,
      n[s][1],
    );
  }
}
var xN = (e, t) => e.map(([e, n]) => [e * t, n * t]);
function SN(e, t, n, r, i = 0.45) {
  (e.push().col(16722450).mat(0.4, 0, 0.95, 1),
    e.box(t - i, n, r - i, t + i, n + i * 1.6, r + i),
    e.pop());
}
function CN(e, t, n, r, i, a, o, s, c, l = e.white, u = 0, d = 0) {
  let f = r - t;
  (-(i - n) * a + f * o < 0 && ([t, n, r, i] = [r, i, t, n]),
    u > 0 ? e.wall(t, n, r, i, s, c, l, u, d) : e.panel(t, n, r, i, s, c, l));
}
function wN(e, t, n) {
  let r = e.site;
  return e.plan.groundHeight(r.x - n, r.z + t) - r.gy;
}
var Uye = (e) => dN.some((t) => e > t.z0 - 0.01 && e < t.z1 + 0.01);
function* Wye(e, t) {
  let n = t.c(`ishigaki`),
    r = t.c(`granite`),
    i = e.coarse ? 6 : 2,
    a = [
      { fixed: `x`, at: lN.x0, a0: lN.z0, a1: lN.z1, o: [-1, 0] },
      { fixed: `x`, at: lN.x1, a0: lN.z0, a1: lN.z1, o: [1, 0] },
      { fixed: `z`, at: lN.z0, a0: lN.x0, a1: lN.x1, o: [0, -1] },
      { fixed: `z`, at: lN.z1, a0: lN.x0, a1: lN.x1, o: [0, 1] },
    ];
  for (let o of a) {
    for (let a = o.a0; a < o.a1 - 0.001; a += i) {
      let s = Math.min(o.a1, a + i),
        c = (a + s) / 2,
        l = (e) => (o.fixed === `x` ? [o.at, e] : [e, o.at]),
        [u, d] = l(c);
      if (o.fixed === `x` && Uye(c)) continue;
      let f = Math.min(
        wN(t, u + o.o[0] * 0.3, d + o.o[1] * 0.3),
        wN(t, l(a)[0] + o.o[0] * 0.3, l(a)[1] + o.o[1] * 0.3),
        wN(t, l(s)[0] + o.o[0] * 0.3, l(s)[1] + o.o[1] * 0.3),
      );
      if (f > -0.08) continue;
      let [p, m] = l(a),
        [h, g] = l(s);
      (e.col(14735560).mat(0.9, 0, 0.04, 1),
        CN(e, p, m, h, g, o.o[0], o.o[1], f - 0.6, -0.15, n, 2.4, 2.4),
        e.col(13223098).mat(0.8, 0, 0.05, 1));
      let _ = o.o[0] * 0.25,
        v = o.o[1] * 0.25;
      if (
        (CN(e, p + _, m + v, h + _, g + v, o.o[0], o.o[1], -0.15, 0.45, r),
        CN(
          e,
          p - _ * 1.4,
          m - v * 1.4,
          h - _ * 1.4,
          g - v * 1.4,
          -o.o[0],
          -o.o[1],
          0,
          0.45,
          r,
        ),
        e.flat(
          Math.min(p, h + _, p - o.o[0] * 0.35),
          Math.min(m, g + v, m - o.o[1] * 0.35),
          Math.max(p, h + _, p - o.o[0] * 0.35),
          Math.max(m, g + v, m - o.o[1] * 0.35),
          0.45,
          r,
        ),
        !e.coarse && f < -1.2)
      ) {
        e.col(4014662).mat(0.5, 0.6, 0, 0);
        let t = -o.o[0] * 0.1,
          n = -o.o[1] * 0.1;
        (e.rod(p + t, 1.15, m + n, h + t, 1.15, g + n, 0.04, 4),
          e.rod(p + t, 0.45, m + n, p + t, 1.15, m + n, 0.03, 4));
      }
      let [y, b, x, S] =
        o.fixed === `x`
          ? [o.at - (o.o[0] > 0 ? 0.6 : 0), a, o.at + (o.o[0] > 0 ? 0 : 0.6), s]
          : [
              a,
              o.at - (o.o[1] > 0 ? 0.6 : 0),
              s,
              o.at + (o.o[1] > 0 ? 0 : 0.6),
            ];
      e.solid(y, b, x, S, f - 0.6, f < -1.2 ? 1.15 : 0.45, `wall`);
    }
    yield;
  }
  for (let t of dN) {
    let i = Math.sign(t.head - t.foot),
      a = Math.abs(t.head - t.foot),
      o = a / 59;
    if (!e.coarse) {
      e.col(12433324).mat(0.85, 0, 0.03, 1);
      for (let n = 0; n < 59; n++) {
        let s = t.foot + i * n * o,
          c = t.foot + i * (n + 1) * o,
          l = -10 + (10 * (n + 1)) / 59;
        (e.flat(Math.min(s, c), t.z0, Math.max(s, c), t.z1, l, r),
          CN(e, s, t.z0, s, t.z1, -i, 0, l - 0.17 - (10 / a) * o, l, r));
      }
    }
    e.col(14735560).mat(0.9, 0, 0.04, 1);
    for (let r = 0; r < (e.coarse ? 2 : 6); r++) {
      let o = r / (e.coarse ? 2 : 6),
        s = (r + 1) / (e.coarse ? 2 : 6),
        c = t.foot + i * o * a,
        l = t.foot + i * s * a,
        u = -10 + 10 * o - 0.5;
      (CN(e, c, t.z1, l, t.z1, 0, -1, u, 0, n, 2.4, 2.4),
        CN(e, c, t.z0, l, t.z0, 0, 1, u, 0, n, 2.4, 2.4));
    }
    if (
      (e.solid(
        Math.min(t.foot, t.head),
        t.z1,
        Math.max(t.foot, t.head),
        t.z1 + 0.5,
        -10.5,
        1.1,
        `wall`,
      ),
      e.solid(
        Math.min(t.foot, t.head),
        t.z0 - 0.5,
        Math.max(t.foot, t.head),
        t.z0,
        -10.5,
        1.1,
        `wall`,
      ),
      !e.coarse)
    ) {
      e.col(4014662).mat(0.5, 0.6, 0, 0);
      for (let n of [t.z0 + 0.15, t.z1 - 0.15])
        e.rod(t.foot, -9.05, n, t.head, 0.95, n, 0.035, 4);
      for (let n of [t.z0 - 0.05, t.z1 + 0.05])
        e.rod(
          t.head - i * 0.05,
          1.05,
          n,
          t.head - i * a * 0.5,
          1.05,
          n,
          0.035,
          4,
        );
    }
    yield;
  }
}
function* Gye(e) {
  for (let [t, n] of pN) {
    let r = (e) => [t * qM(e), e, n * qM(e)];
    e.col(10262931).mat(0.85, 0, 0.12, 1);
    let i = r(YM);
    if ((e.cylY(i[0], i[2], -0.3, YM, 4.6, 13, 3.4, !0), e.coarse))
      (hN(e, 20), vN(e, r(YM), r(ZM), JM(YM) / 2, JM(ZM) / 2));
    else {
      let t = pN;
      for (let n = 0; n + 1 < QM.length; n++) {
        let i = QM[n],
          a = QM[n + 1];
        hN(e, (i + a) / 2);
        let o = r(i),
          s = r(a),
          c = (JM(i) / 2) * 0.92,
          l = (JM(a) / 2) * 0.92,
          u = (e, t, n, r) => [e[0] + n * t, e[1], e[2] + r * t];
        for (let [n, r] of t) gN(e, u(o, c, n, r), u(s, l, n, r), 0.34, 4);
        for (let r = 0; r < 4; r++) {
          let [i, a] = t[r],
            [d, f] = t[(r + 1) % 4],
            p = (n + r) % 2 == 0;
          (gN(
            e,
            u(o, c, p ? i : d, p ? a : f),
            u(s, l, p ? d : i, p ? f : a),
            0.17,
            3,
          ),
            gN(e, u(s, l, i, a), u(s, l, d, f), 0.15, 3));
        }
      }
    }
    let a = [...$M, ...eN.slice(0, -1), BM.under, ...tN];
    for (let t = 0; t + 1 < a.length; t++) {
      let n = a[t],
        i = a[t + 1];
      if (
        i <= n + 0.001 ||
        (n >= zM.under - 0.001 && i <= zM.roof + 0.001) ||
        (n >= BM.under - 0.001 && i <= BM.roof + 0.001)
      )
        continue;
      let o = [n];
      for (let e = 1; e < 7; e++) {
        let t = zM.roof + e * WM;
        t > n + 0.001 && t < i - 0.001 && o.push(t);
      }
      o.push(i);
      for (let t = 0; t + 1 < o.length; t++)
        (hN(e, (o[t] + o[t + 1]) / 2),
          vN(e, r(o[t]), r(o[t + 1]), JM(o[t]) / 2, JM(o[t + 1]) / 2));
    }
    e.solid(i[0] - 4.2, i[2] - 4.2, i[0] + 4.2, i[2] + 4.2, 0, YM, `tower-leg`);
    for (let [t, n] of [
      [YM, 24],
      [24, ZM],
    ]) {
      let i = r((t + n) / 2),
        a = JM((t + n) / 2) / 2 + 0.3;
      e.solid(i[0] - a, i[2] - a, i[0] + a, i[2] + a, t, n, `tower-leg`);
    }
    yield;
  }
}
function* Kye(e) {
  let t = e.seg(18);
  for (let n = 0; n < 4; n++) {
    let r = [fN[n][0], fN[n][1]],
      i = qM(XM) - JM(XM) / 2,
      a = (e, t) => {
        let r =
          XM + 31 * Math.sqrt(Math.max(0, 1 - e * e)) + t * (2.2 + 2.4 * e * e);
        return mN(n, (e * i) / qM(r), r);
      };
    hN(e, 25);
    for (let n = 0; n < t; n++) {
      let r = -1 + (2 * n) / t,
        i = -1 + (2 * (n + 1)) / t;
      (gN(e, a(r, 0), a(i, 0), 0.46, 4),
        gN(e, a(r, 1), a(i, 1), 0.4, 4),
        e.coarse || gN(e, a(r, n % 2 ? 1 : 0), a(i, n % 2 ? 0 : 1), 0.2, 3));
    }
    if (!e.coarse) {
      for (let t of [-0.78, -0.52, -0.26, 0, 0.26, 0.52, 0.78])
        gN(e, a(t, 1), mN(n, (t * i) / qM(ZM), 51.8), 0.22, 3);
      for (let t of [-1, 1]) gN(e, a(t * 0.96, 1), mN(n, t, 28), 0.26, 3);
      gN(e, mN(n, -1, 46), mN(n, 1, 46), 0.24, 3);
    }
    (_N(e, mN(n, -1, 51.7), mN(n, 1, 51.7), r, 2.6, 0.4), yield);
  }
}
