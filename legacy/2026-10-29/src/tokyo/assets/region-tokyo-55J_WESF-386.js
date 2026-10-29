// tokyo/assets/region-tokyo-55J_WESF 386 — math
// Lines 140238-140570 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function rPe(e) {
  for (let t of u1()) {
    if (t.hidden) continue;
    let n = Math.max(1, Math.round((t.to - t.from) / 8));
    for (let r = 0; r < n; r++) {
      let i = t.from + ((t.to - t.from) * r) / n,
        a = t.from + ((t.to - t.from) * (r + 1)) / n,
        [o, s] = p1(t, (i + a) / 2),
        c = Math.max(o, s) + s1,
        l = Math.min(o, s) - 0.3;
      if (!(c - l < 0.4)) {
        if (t.stone && t.bei) {
          let n = 0;
          for (let r = l; r < c - 0.05; r += 1.5, n++) {
            let o = Math.min(c, r + 1.5),
              s = i - (n % 2 ? 1.6 : 0);
            for (; s < a - 0.01;) {
              let n = Math.min(a, s + 2.6 + 2 * h1()),
                c = (r < 0.4 ? 0.55 : 0.72) + 0.4 * h1();
              (e.setColor(0.34 * c, 0.32 * c, 0.29 * c),
                g1(e, t, Math.max(i, s), n, r, o, 0.02),
                (s = n));
            }
          }
        } else if (t.stone)
          for (let n = l, r = 0; n < c - 0.05; n += 1.6, r++) {
            let o = (r % 2 ? 0.8 : 0.95) + 0.2 * h1();
            (e.setColor(0.47 * o, 0.45 * o, 0.4 * o),
              g1(e, t, i, a, n, Math.min(c, n + 1.6), 0.02));
          }
        else {
          let n = 0.9 + 0.12 * h1();
          (e.setColor(0.6 * n, 0.59 * n, 0.56 * n),
            g1(e, t, i, a, l, c, 0.02),
            e.setColor(0.42, 0.41, 0.39),
            g1(e, t, i, a, c - 1.6, c - 0.2, 0.03));
        }
        if (t.bei) {
          _1(e, t.axis, t.at - t.dir * 0.9, i, a, c);
          continue;
        }
        (e.setColor(0.68, 0.67, 0.64),
          t.axis === `x`
            ? e.boxMinMax(
                t.at - t.dir * 0.5 - 0.3,
                c,
                i,
                t.at - t.dir * 0.5 + 0.3,
                c + o1,
                a,
              )
            : e.boxMinMax(
                i,
                c,
                t.at - t.dir * 0.5 - 0.3,
                a,
                c + o1,
                t.at - t.dir * 0.5 + 0.3,
              ));
      }
    }
  }
  for (let t of Sb) {
    let n = Math.round(Jy / 0.17),
      r = t.len / n,
      i = Jy / n;
    e.detail(!0);
    for (let a = 0; a < n; a++) {
      let n = a * r,
        o = (a + 1) * r,
        s = (a + 1) * i + s1,
        c = (e, n) => [t.x + t.dx * e - t.dz * n, t.z + t.dz * e + t.dx * n],
        [l, u] = c(n, -t.half),
        [d, f] = c(n, t.half),
        [p, m] = c(o, t.half),
        [h, g] = c(o, -t.half),
        _ = 0.94 + (0.08 * ((a * 7) % 3)) / 2;
      (e.setColor(0.6 * _, 0.59 * _, 0.56 * _),
        e.quad(l, s, u, h, s, g, p, s, m, d, s, f),
        e.setColor(0.5, 0.49, 0.47),
        e.quad(d, s - i, f, l, s - i, u, l, s, u, d, s, f));
    }
    e.detail(!1);
    let a = f1(t);
    for (let n of [-1, 1]) {
      let r = n * (t.half + 0.25);
      for (let i = 0; i < 6; i++) {
        let o = a + ((t.len - a) * i) / 6,
          s = a + ((t.len - a) * (i + 1)) / 6,
          c = (o + s) / 2,
          l = Ib(
            t.x + t.dx * c - t.dz * (r + n * 0.6),
            t.z + t.dz * c + t.dx * (r + n * 0.6),
          ),
          u = Math.max(l, (Jy * Math.max(0, s)) / t.len) + s1 + o1,
          d = t.x + t.dx * c - t.dz * r,
          f = t.z + t.dz * c + t.dx * r;
        (e.setColor(0.56, 0.55, 0.52),
          e.box(
            d,
            -0.3,
            f,
            Math.abs(t.dx) > 0.5 ? s - o : 0.5,
            u + 0.3,
            Math.abs(t.dz) > 0.5 ? s - o : 0.5,
          ));
      }
    }
  }
  e.detail(!0);
  for (let t = eb - 2; t > -1560; t -= 4) {
    if (t < gb + _b + 1 && t > gb - _b - 1) continue;
    let n = d1(t),
      r = d1(t - 4),
      i = Ib(n - 1, t) + s1;
    (e.setColor(0.2, 0.24, 0.22),
      e.beam(n, i + 1.75, t, r, i + 1.75, t - 4, 0.08, 0.08),
      e.beam(n, i + 0.1, t, r, i + 0.1, t - 4, 0.06, 0.06),
      e.box(n, i, t, 0.12, 1.8, 0.12),
      e.setColor(0.26, 0.3, 0.28),
      e.quad(
        n,
        i + 0.1,
        t,
        r,
        i + 0.1,
        t - 4,
        r,
        i + 1.75,
        t - 4,
        n,
        i + 1.75,
        t,
      ));
  }
  e.detail(!1);
  let t = aPe();
  for (let n of [-1, 1]) {
    let r = gb + n * _b,
      i = n,
      a = r - n * 0.3;
    for (let a = yb; a < t; a += 3) {
      let o = Math.min(t, a + 3),
        s = Ib((a + o) / 2, r + n * 0.8);
      (e.setColor(0.6, 0.59, 0.56),
        g1(
          e,
          { axis: `z`, at: r, from: a, to: o, dir: i, stone: !1 },
          a,
          o,
          s - 0.3,
          Jy + s1,
        ));
    }
    (e.setColor(0.42, 0.44, 0.45),
      e.boxMinMax(t, Jy - 2.6, Math.min(r, a), vb, Jy + s1, Math.max(r, a)));
    for (let t = vb; t < -30; t += 3) {
      let i = Math.min(-30, t + 3),
        a = Jy * xb(i) + s1,
        o = Jy * xb(t) + s1,
        s = 0.92 + 0.1 * h1();
      (e.setColor(0.6 * s, 0.59 * s, 0.56 * s),
        e.quad(...iPe(t, i, r, n, -0.3, o, a)));
    }
    e.setColor(0.66, 0.65, 0.62);
    for (let t = yb; t < -31; t += 6) {
      let n = Math.min(-30, t + 6),
        i = Jy * xb(n) + s1;
      e.boxMinMax(
        t,
        i,
        Math.min(r, a),
        n,
        Jy * xb(t) + s1 + o1,
        Math.max(r, a),
      );
    }
  }
  (e.setColor(0.36, 0.38, 0.39),
    e.quad(
      t,
      Jy - 2.6,
      gb - _b,
      vb,
      Jy - 2.6,
      gb - _b,
      vb,
      Jy - 2.6,
      gb + _b,
      t,
      Jy - 2.6,
      gb + _b,
    ));
}
function _1(e, t, n, r, i, a) {
  let o = Math.min(r, i),
    s = Math.max(r, i),
    c = (r, i, a, o, s, c, l) => {
      t === `x`
        ? e.boxMinMax(n - a, i, r, n + c, s, o, l)
        : e.boxMinMax(r, i, n - a, o, s, n + c, l);
    };
  (e.setColor(0.5, 0.48, 0.44),
    c(o, a - 0.3, 0.4, s, a + 0.45, 0.4),
    e.setColor(0.84, 0.83, 0.78),
    c(o, a + 0.45, 0.24, s, a + l1 - 0.35, 0.24, 51),
    e.setColor(0.17, 0.18, 0.2),
    c(o, a + l1 - 0.35, 0.55, s, a + l1 - 0.12, 0.55, 63),
    c(o, a + l1 - 0.12, 0.2, s, a + l1, 0.2));
}
function iPe(e, t, n, r, i, a, o) {
  return r > 0
    ? [e, i, n, t, i, n, t, o, n, e, a, n]
    : [t, i, n, e, i, n, e, a, n, t, o, n];
}
function aPe() {
  let e = yb;
  for (; pb(e, gb) > 14.5 && e < vb;) e += 0.25;
  return e;
}
function oPe(e) {
  let t = 0.35,
    n = (t, n, r, i, a) => e.addBox(t, n, r, i, c1, a, `wall`);
  for (let e of u1()) {
    let r = Math.max(1, Math.ceil((e.to - e.from) / 6));
    for (let i = 0; i < r; i++) {
      let a = e.from + ((e.to - e.from) * i) / r,
        o = e.from + ((e.to - e.from) * (i + 1)) / r,
        [s] = p1(e, a),
        [c] = p1(e, o),
        [l] = p1(e, (a + o) / 2),
        u = Math.max(s, c, l) + s1 + (e.bei ? l1 : o1),
        d = e.at - e.dir * 0.5;
      e.axis === `x` ? n(d - t, a, d + t, o, u) : n(a, d - t, o, d + t, u);
    }
  }
  for (let e of Sb) {
    let r = f1(e);
    for (let i of [-1, 1]) {
      let a = i * (e.half + 0.25),
        o = e.x - e.dz * a + e.dx * r,
        s = e.z + e.dx * a + e.dz * r,
        c = e.x - e.dz * a + e.dx * e.len,
        l = e.z + e.dx * a + e.dz * e.len;
      n(
        Math.min(o, c) - t,
        Math.min(s, l) - t,
        Math.max(o, c) + t,
        Math.max(s, l) + t,
        Jy + s1 + o1,
      );
    }
  }
  for (let n = eb - 2; n > -1560; n -= 8) {
    if (n - 8 < gb + _b + 1 && n > gb - _b - 1) continue;
    let r = d1(n),
      i = d1(n - 8),
      a = Math.hypot(i - r, 8);
    e.addOBB(
      (r + i) / 2,
      n - 4,
      t,
      a / 2 + 0.2,
      Math.atan2(i - r, 8),
      Jy - 2,
      Jy + 2,
      `wall`,
    );
  }
  for (let n of [-1, 1]) {
    let r = gb + n * (_b - 0.15);
    for (let n = yb; n < -31; n += 6) {
      let i = Math.min(-30, n + 6),
        a = Jy * xb(n) + s1 + o1,
        o = n < vb ? Jy - 3 : c1;
      e.addBox(n, r - t, i, r + t, o, a, `wall`);
    }
  }
}
var v1 = [hv, ...bp, ...yc];
function y1(e, t, n) {
  return Math.hypot(
    Math.max(e.minX - t, 0, t - e.maxX),
    Math.max(e.minZ - n, 0, n - e.maxZ),
  );
}
function b1(e, t) {
  let n = 1 / 0;
  for (let r of v1) {
    let i = Math.max(r.minX - e, 0, e - r.maxX),
      a = Math.max(r.minZ - t, 0, t - r.maxZ),
      o = i * i + a * a;
    o < n && (n = o);
  }
  return Math.sqrt(n);
}
function sPe(e, t) {
  let n = v1[0],
    r = 1 / 0;
  for (let i of v1) {
    let a = Math.max(i.minX - e, 0, e - i.maxX),
      o = Math.max(i.minZ - t, 0, t - i.maxZ),
      s = a * a + o * o;
    s < r && ((r = s), (n = i));
  }
  return n;
}
var x1 = {
    tokyoTower: !1,
    sensoji: !1,
    toranomonHills: !1,
    toranomonStationTower: !1,
    azabudaiHills: !1,
    roppongiHills: !1,
    tokyoMidtown: !1,
    tokyoDome: !1,
    tocho: !1,
    parkTower: !1,
    cocoon: !1,
    keioPlaza: !1,
    kabukichoTower: !1,
    scrambleSquare: !1,
    hikarie: !1,
    sunshine60: !0,
  },
  S1 = { x: 1124, z: -1366, h: 634 },
  C1 = { x: -439.5, z: 987, h: 333 },
  w1 = { x: -2010, z: -1222 };
function T1(e, t, n, r, i = 1.6) {
  (e.setColor(1, 0.12, 0.06).setEmit(7, 2, 0),
    e.box(t, n, r, i, i, i),
    e.noEmit());
}
