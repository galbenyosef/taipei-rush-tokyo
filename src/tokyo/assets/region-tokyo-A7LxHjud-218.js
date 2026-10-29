// tokyo/assets/region-tokyo-A7LxHjud 218 — math
// Lines 85030-85369 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function yN(e, t, n, r, i, a) {
  if (e.coarse) return vN(e, t, n, a * 1.6, 3);
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
    vN(e, [t[0] + p, t[1] + m, t[2] + h], [n[0] + p, n[1] + m, n[2] + h], a, 4),
    vN(
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
    vN(
      e,
      v(t / _, t % 2 ? 1 : -1),
      v((t + 1) / _, t % 2 ? -1 : 1),
      a * 0.55,
      3,
    );
}
function bN(e, t, n, r, i) {
  let [a, o, s] = t,
    [c, l, u] = n;
  (e.quad(a + r, o, s - r, a - r, o, s - r, c - i, l, u - i, c + i, l, u - i),
    e.quad(a - r, o, s + r, a + r, o, s + r, c + i, l, u + i, c - i, l, u + i),
    e.quad(a - r, o, s - r, a - r, o, s + r, c - i, l, u + i, c - i, l, u - i),
    e.quad(a + r, o, s + r, a + r, o, s - r, c + i, l, u - i, c + i, l, u + i));
}
function xN(e, t) {
  return zk(-e, -e, e, e, t, 1);
}
function SN(e, t, n, r, i, a = e.white, o = 0) {
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
function tbe(e, t, n, r, i) {
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
var CN = (e, t) => e.map(([e, n]) => [e * t, n * t]);
function wN(e, t, n, r, i = 0.45) {
  (e.push().col(16722450).mat(0.4, 0, 0.95, 1),
    e.box(t - i, n, r - i, t + i, n + i * 1.6, r + i),
    e.pop());
}
function TN(e, t, n, r, i, a, o, s, c, l = e.white, u = 0, d = 0) {
  let f = r - t;
  (-(i - n) * a + f * o < 0 && ([t, n, r, i] = [r, i, t, n]),
    u > 0 ? e.wall(t, n, r, i, s, c, l, u, d) : e.panel(t, n, r, i, s, c, l));
}
function EN(e, t, n) {
  let r = e.site;
  return e.plan.groundHeight(r.x - n, r.z + t) - r.gy;
}
var nbe = (e) => pN.some((t) => e > t.z0 - 0.01 && e < t.z1 + 0.01);
function* rbe(e, t) {
  let n = t.c(`ishigaki`),
    r = t.c(`granite`),
    i = e.coarse ? 6 : 2,
    a = [
      { fixed: `x`, at: dN.x0, a0: dN.z0, a1: dN.z1, o: [-1, 0] },
      { fixed: `x`, at: dN.x1, a0: dN.z0, a1: dN.z1, o: [1, 0] },
      { fixed: `z`, at: dN.z0, a0: dN.x0, a1: dN.x1, o: [0, -1] },
      { fixed: `z`, at: dN.z1, a0: dN.x0, a1: dN.x1, o: [0, 1] },
    ];
  for (let o of a) {
    for (let a = o.a0; a < o.a1 - 0.001; a += i) {
      let s = Math.min(o.a1, a + i),
        c = (a + s) / 2,
        l = (e) => (o.fixed === `x` ? [o.at, e] : [e, o.at]),
        [u, d] = l(c);
      if (o.fixed === `x` && nbe(c)) continue;
      let f = Math.min(
        EN(t, u + o.o[0] * 0.3, d + o.o[1] * 0.3),
        EN(t, l(a)[0] + o.o[0] * 0.3, l(a)[1] + o.o[1] * 0.3),
        EN(t, l(s)[0] + o.o[0] * 0.3, l(s)[1] + o.o[1] * 0.3),
      );
      if (f > -0.08) continue;
      let [p, m] = l(a),
        [h, g] = l(s);
      (e.col(14735560).mat(0.9, 0, 0.04, 1),
        TN(e, p, m, h, g, o.o[0], o.o[1], f - 0.6, -0.15, n, 2.4, 2.4),
        e.col(13223098).mat(0.8, 0, 0.05, 1));
      let _ = o.o[0] * 0.25,
        v = o.o[1] * 0.25;
      if (
        (TN(e, p + _, m + v, h + _, g + v, o.o[0], o.o[1], -0.15, 0.45, r),
        TN(
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
  for (let t of pN) {
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
          TN(e, s, t.z0, s, t.z1, -i, 0, l - 0.17 - (10 / a) * o, l, r));
      }
    }
    e.col(14735560).mat(0.9, 0, 0.04, 1);
    for (let r = 0; r < (e.coarse ? 2 : 6); r++) {
      let o = r / (e.coarse ? 2 : 6),
        s = (r + 1) / (e.coarse ? 2 : 6),
        c = t.foot + i * o * a,
        l = t.foot + i * s * a,
        u = -10 + 10 * o - 0.5;
      (TN(e, c, t.z1, l, t.z1, 0, -1, u, 0, n, 2.4, 2.4),
        TN(e, c, t.z0, l, t.z0, 0, 1, u, 0, n, 2.4, 2.4));
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
function* ibe(e) {
  for (let [t, n] of hN) {
    let r = (e) => [t * YM(e), e, n * YM(e)];
    e.col(10262931).mat(0.85, 0, 0.12, 1);
    let i = r(ZM);
    if ((e.cylY(i[0], i[2], -0.3, ZM, 4.6, 13, 3.4, !0), e.coarse))
      (_N(e, 20), bN(e, r(ZM), r($M), XM(ZM) / 2, XM($M) / 2));
    else {
      let t = hN;
      for (let n = 0; n + 1 < eN.length; n++) {
        let i = eN[n],
          a = eN[n + 1];
        _N(e, (i + a) / 2);
        let o = r(i),
          s = r(a),
          c = (XM(i) / 2) * 0.92,
          l = (XM(a) / 2) * 0.92,
          u = (e, t, n, r) => [e[0] + n * t, e[1], e[2] + r * t];
        for (let [n, r] of t) vN(e, u(o, c, n, r), u(s, l, n, r), 0.34, 4);
        for (let r = 0; r < 4; r++) {
          let [i, a] = t[r],
            [d, f] = t[(r + 1) % 4],
            p = (n + r) % 2 == 0;
          (vN(
            e,
            u(o, c, p ? i : d, p ? a : f),
            u(s, l, p ? d : i, p ? f : a),
            0.17,
            3,
          ),
            vN(e, u(s, l, i, a), u(s, l, d, f), 0.15, 3));
        }
      }
    }
    let a = [...tN, ...nN.slice(0, -1), HM.under, ...rN];
    for (let t = 0; t + 1 < a.length; t++) {
      let n = a[t],
        i = a[t + 1];
      if (
        i <= n + 0.001 ||
        (n >= VM.under - 0.001 && i <= VM.roof + 0.001) ||
        (n >= HM.under - 0.001 && i <= HM.roof + 0.001)
      )
        continue;
      let o = [n];
      for (let e = 1; e < 7; e++) {
        let t = VM.roof + e * KM;
        t > n + 0.001 && t < i - 0.001 && o.push(t);
      }
      o.push(i);
      for (let t = 0; t + 1 < o.length; t++)
        (_N(e, (o[t] + o[t + 1]) / 2),
          bN(e, r(o[t]), r(o[t + 1]), XM(o[t]) / 2, XM(o[t + 1]) / 2));
    }
    e.solid(i[0] - 4.2, i[2] - 4.2, i[0] + 4.2, i[2] + 4.2, 0, ZM, `tower-leg`);
    for (let [t, n] of [
      [ZM, 24],
      [24, $M],
    ]) {
      let i = r((t + n) / 2),
        a = XM((t + n) / 2) / 2 + 0.3;
      e.solid(i[0] - a, i[2] - a, i[0] + a, i[2] + a, t, n, `tower-leg`);
    }
    yield;
  }
}
function* abe(e) {
  let t = e.seg(18);
  for (let n = 0; n < 4; n++) {
    let r = [mN[n][0], mN[n][1]],
      i = YM(QM) - XM(QM) / 2,
      a = (e, t) => {
        let r =
          QM + 31 * Math.sqrt(Math.max(0, 1 - e * e)) + t * (2.2 + 2.4 * e * e);
        return gN(n, (e * i) / YM(r), r);
      };
    _N(e, 25);
    for (let n = 0; n < t; n++) {
      let r = -1 + (2 * n) / t,
        i = -1 + (2 * (n + 1)) / t;
      (vN(e, a(r, 0), a(i, 0), 0.46, 4),
        vN(e, a(r, 1), a(i, 1), 0.4, 4),
        e.coarse || vN(e, a(r, n % 2 ? 1 : 0), a(i, n % 2 ? 0 : 1), 0.2, 3));
    }
    if (!e.coarse) {
      for (let t of [-0.78, -0.52, -0.26, 0, 0.26, 0.52, 0.78])
        vN(e, a(t, 1), gN(n, (t * i) / YM($M), 51.8), 0.22, 3);
      for (let t of [-1, 1]) vN(e, a(t * 0.96, 1), gN(n, t, 28), 0.26, 3);
      vN(e, gN(n, -1, 46), gN(n, 1, 46), 0.24, 3);
    }
    (yN(e, gN(n, -1, 51.7), gN(n, 1, 51.7), r, 2.6, 0.4), yield);
  }
}
