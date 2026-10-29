// tokyo/assets/world-CVm1JHks 66 — setcolor
// Lines 21408-22148 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function ch(e, t, n) {
  let r = new ke(64123),
    i = 0,
    a = n.bounds,
    o = [],
    s = (t, n, a, o, s, c, u, d, f = !0) => {
      let p = u ? sh[4 + r.int(0, 1) * 3] : sh[r.int(0, sh.length - 1)],
        m = 0.9 + r.next() * 0.2;
      e.setColor(p[0] * m, p[1] * m, p[2] * m).setEmit(0, 0, 1 + r.int(0, 998));
      let h = r.chance(0.15) ? r.range(-0.25, 0.25) : 0;
      if (
        (e.box(t, c, n, a, s, o, h, 55),
        e.noEmit(),
        e.setColor(0.35, 0.35, 0.34),
        f &&
          (s < 45 && r.chance(0.6)
            ? (e.box(
                t + r.range(-a / 4, a / 4),
                c + s,
                n + r.range(-o / 4, o / 4),
                2.4,
                1.8,
                2.4,
                0,
              ),
              e.setColor(0.55, 0.62, 0.72),
              e.cyl(
                t + r.range(-a / 4, a / 4),
                c + s,
                n + r.range(-o / 4, o / 4),
                0.9,
                1.6,
                6,
              ))
            : s >= 45 && e.box(t, c + s, n, a * 0.55, 3.5, o * 0.55, h)),
        s > 70 &&
          (e.setColor(1, 0.12, 0.08).setEmit(6, 2, r.int(1, 99)),
          e.box(t - a * 0.25, c + s + 3.5, n, 0.5, 0.5, 0.5),
          e.box(t + a * 0.25, c + s + 3.5, n, 0.5, 0.5, 0.5),
          e.noEmit()),
        d)
      ) {
        let i = [
          [0.3, 0.9, 1],
          [1, 0.35, 0.7],
          [0.95, 0.95, 1],
          [0.5, 1, 0.55],
        ][r.int(0, 3)];
        (e.setColor(i[0], i[1], i[2]).setEmit(2.2, 0),
          e.box(t, c + s - 2.2, n, a + 0.3, 1.1, o + 0.3, h, 51),
          e.noEmit());
      }
      if (s < 70 && r.chance(0.2)) {
        let i = Math.min(a * 0.85, r.range(9, 16)),
          u = r.range(3, 5.5),
          d = l,
          f = t + d[0] * (a / 2 - 1),
          p = n + d[1] * (o / 2 - 1),
          m = c + s;
        e.setColor(0.2, 0.2, 0.22);
        for (let t of [-0.4, 0.4]) {
          let n = f + (d[1] === 0 ? 0 : t * i),
            r = p + (d[0] === 0 ? 0 : t * i);
          e.boxMinMax(n - 0.15, m, r - 0.15, n + 0.15, m + 2.2, r + 0.15);
        }
        let h = oh[r.int(0, oh.length - 1)];
        (e.setColor(h[0], h[1], h[2]).setEmit(r.range(1.6, 3.2), 0),
          d[0] === 0
            ? e.boxMinMax(
                f - i / 2,
                m + 2.2,
                p - 0.25,
                f + i / 2,
                m + 2.2 + u,
                p + 0.25,
              )
            : e.boxMinMax(
                f - 0.25,
                m + 2.2,
                p - i / 2,
                f + 0.25,
                m + 2.2 + u,
                p + i / 2,
              ),
          e.noEmit());
      }
      i++;
    },
    c = (e, t) => o.some(([n, r, i, a]) => e > n && e < i && t > r && t < a),
    l = [1, 0],
    u = n.roads.find((e) => e.id === `civic`)?.at ?? -300,
    d = n.roads.find((e) => e.id === `heping`)?.at ?? 280,
    f = n.roads.find((e) => e.id === `jianguo`)?.at ?? -40,
    p = a.minX - 2.4,
    m = a.minZ - 2.4,
    h = [];
  {
    let n = u,
      r = t.westBank(n) - 70,
      i = 11.5;
    (o.push([r - 260, n - 30, p, n + 30]),
      h.push({
        minX: t.westBank(n) - 4,
        minZ: n - i,
        maxX: p + 3.4,
        maxZ: n + i,
        y: ah,
        axis: `x`,
      }));
    for (let t = p; t > r - 220; t -= 20) {
      let a = t,
        o = t - 20,
        s = t > r ? ah : ah - ((r - a) / 220) * 9.700000000000001,
        c = o > r ? ah : ah - ((r - o) / 220) * 9.700000000000001;
      (e.setColor(0.2, 0.2, 0.21),
        e.quad(a, s, n - i, o, c, n - i, o, c, n + i, a, s, n + i),
        e.setColor(0.3, 0.3, 0.29),
        e.quad(
          a,
          s - 1.9,
          n + i,
          o,
          c - 1.9,
          n + i,
          o,
          c - 1.9,
          n - i,
          a,
          s - 1.9,
          n - i,
        ),
        e.setColor(0.55, 0.54, 0.51),
        e.quad(
          o,
          c - 1.9,
          n + i,
          a,
          s - 1.9,
          n + i,
          a,
          s + 1,
          n + i,
          o,
          c + 1,
          n + i,
        ),
        e.quad(
          a,
          s - 1.9,
          n - i,
          o,
          c - 1.9,
          n - i,
          o,
          c + 1,
          n - i,
          a,
          s + 1,
          n - i,
        ),
        e.setColor(0.75, 0.75, 0.7));
      for (let t of [-3.3, 3.3])
        e.quad(
          a - 2,
          s + 0.02,
          n + t - 0.08,
          a - 6,
          (s + c) / 2 + 0.02,
          n + t - 0.08,
          a - 6,
          (s + c) / 2 + 0.02,
          n + t + 0.08,
          a - 2,
          s + 0.02,
          n + t + 0.08,
        );
      (e.setColor(0.8, 0.65, 0.1),
        e.quad(
          a,
          s + 0.02,
          n - 0.1,
          o,
          c + 0.02,
          n - 0.1,
          o,
          c + 0.02,
          n + 0.1,
          a,
          s + 0.02,
          n + 0.1,
        ));
    }
    for (let a = p - 30; a > r; a -= 46) {
      let r = Math.max(Hp, t.height(a, n) - 0.5);
      (e.setColor(0.52, 0.51, 0.48),
        e.cyl(a, r, n - 5, 1.5, 8.8 - r, 10, !1),
        e.cyl(a, r, n + 5, 1.5, 8.8 - r, 10, !1),
        e.boxMinMax(a - 1.7, 10.4 - 1.7, n - i + 1, a + 1.7, 10.4, n + i - 1));
    }
    for (let t = p - 12; t > r - 150; t -= 34) {
      let i = t > r ? ah : ah - ((r - t) / 220) * 9.700000000000001;
      for (let r of [-1, 1]) {
        let a = n + r * 11.1;
        (e.setColor(0.35, 0.36, 0.36),
          e.boxMinMax(t - 0.12, i, a - 0.12, t + 0.12, i + 8, a + 0.12),
          e.beam(t, i + 7.9, a, t, i + 8.1, a - r * 2.2, 0.12, 0.12),
          e.setColor(1, 0.55, 0.2).setEmit(7, 0),
          e.boxMinMax(
            t - 0.3,
            i + 7.75,
            a - r * 2.2 - 0.35,
            t + 0.3,
            i + 7.95,
            a - r * 2.2 + 0.35,
          ),
          e.noEmit());
      }
    }
  }
  {
    let n = d + 40,
      r = Fe + 1,
      i = t.westBank(n) - 25,
      a = r - i;
    o.push([i - 40, n - 20, r, n + 20]);
    let s = (e) => 0.3 + (2.6 - 0.3) * e + 7.5 * Math.sin(Math.PI * e),
      c = 3.2;
    for (let t = 0; t < 40; t++) {
      let i = t / 40,
        o = (t + 1) / 40,
        l = r - a * i,
        u = r - a * o,
        d = s(i),
        f = s(o);
      (e.setColor(0.5, 0.48, 0.45),
        e.quad(l, d, n - c, u, f, n - c, u, f, n + c, l, d, n + c),
        e.setColor(0.35, 0.34, 0.32),
        e.quad(
          l,
          d - 0.9,
          n + c,
          u,
          f - 0.9,
          n + c,
          u,
          f - 0.9,
          n - c,
          l,
          d - 0.9,
          n - c,
        ),
        e.quad(
          u,
          f - 0.9,
          n + c,
          l,
          d - 0.9,
          n + c,
          l,
          d + 0.2,
          n + c,
          u,
          f + 0.2,
          n + c,
        ),
        e.quad(
          l,
          d - 0.9,
          n - c,
          u,
          f - 0.9,
          n - c,
          u,
          f + 0.2,
          n - c,
          l,
          d + 0.2,
          n - c,
        ),
        e.setColor(0.8, 0.8, 0.78),
        e.beam(l, d + 1.1, n - c + 0.1, u, f + 1.1, n - c + 0.1, 0.08, 0.08),
        e.beam(l, d + 1.1, n + c - 0.1, u, f + 1.1, n + c - 0.1, 0.08, 0.08));
      let p = d + 30 * Math.sin(Math.PI * i),
        m = f + 30 * Math.sin(Math.PI * o);
      for (let r of [-1, 1])
        (e.setColor(0.62, 0.07, 0.05),
          e.beam(l, p, n + r * 3.6, u, m, n + r * 3.6, 0.9, 1.1),
          e.setColor(0.75, 0.9, 1).setEmit(2.6, 0),
          e.beam(
            l,
            p + 0.62,
            n + r * 3.6,
            u,
            m + 0.62,
            n + r * 3.6,
            0.25,
            0.14,
          ),
          e.noEmit(),
          t % 2 == 0 &&
            t > 0 &&
            (e.setColor(0.85, 0.85, 0.85),
            e.beam(l, d, n + r * 3.6, l, p, n + r * 3.6, 0.12, 0.12)));
      t % 5 == 0 &&
        t > 0 &&
        (e.setColor(0.62, 0.07, 0.05),
        e.beam(
          l,
          (p + d) / 2 + 12,
          n - c - 0.4,
          l,
          (p + d) / 2 + 12,
          n + c + 0.4,
          0.5,
          0.5,
        ));
    }
    for (let i of [0.25, 0.5, 0.75]) {
      let o = r - a * i,
        c = Math.max(Hp, t.height(o, n) - 0.5);
      (e.setColor(0.55, 0.54, 0.5), e.cyl(o, c, n, 1.3, s(i) - 0.9 - c, 8, !1));
    }
  }
  {
    let n = f,
      r = 11.5,
      i = m - 30,
      a = !1;
    for (let e = m - 4; e > -1700; e -= 2)
      if (t.height(n, e) > 19.3) {
        ((i = e), (a = !0));
        break;
      }
    let s = a ? i : t.northBank(n) - 70,
      c = s - 150;
    h.push({
      minX: n - r,
      minZ: Math.max(s, t.northBank(n) - 4),
      maxX: n + r,
      maxZ: m + 3.4,
      y: ah,
      axis: `z`,
    });
    let l = a ? i : -2e3,
      u = (e) => {
        if (a || e >= s) return ah;
        let r = t.height(n, e) + 0.15;
        if (e <= c) return r;
        let i = (s - e) / (s - c);
        return ah + (r - ah) * (i * i * (3 - 2 * i));
      };
    o.push([n - 40, l - 20, n + 40, m]);
    for (let i = m; i > l + 0.5; i -= 16) {
      let o = i,
        d = Math.max(l, i - 16),
        f = u(o),
        p = u(d),
        h = !a && o <= c;
      if (
        (e.setColor(0.2, 0.2, 0.21),
        e.quad(n - r, f, o, n + r, f, o, n + r, p, d, n - r, p, d),
        h ||
          (e.setColor(0.3, 0.3, 0.29),
          e.quad(
            n - r,
            p - 1.9,
            d,
            n + r,
            p - 1.9,
            d,
            n + r,
            f - 1.9,
            o,
            n - r,
            f - 1.9,
            o,
          ),
          e.setColor(0.55, 0.54, 0.51),
          e.quad(
            n + r,
            f - 1.9,
            o,
            n + r,
            p - 1.9,
            d,
            n + r,
            p + 1,
            d,
            n + r,
            f + 1,
            o,
          ),
          e.quad(
            n - r,
            p - 1.9,
            d,
            n - r,
            f - 1.9,
            o,
            n - r,
            f + 1,
            o,
            n - r,
            p + 1,
            d,
          )),
        e.setColor(0.8, 0.65, 0.1),
        e.quad(
          n - 0.1,
          f + 0.02,
          o,
          n + 0.1,
          f + 0.02,
          o,
          n + 0.1,
          p + 0.02,
          d,
          n - 0.1,
          p + 0.02,
          d,
        ),
        !h && o < m - 20 && Math.round(o) % 48 < 16)
      ) {
        let i = Math.max(Hp, t.height(n, o) - 0.5);
        i < f - 4 &&
          (e.setColor(0.52, 0.51, 0.48),
          e.cyl(n - 5, i, o, 1.5, f - 3.5 - i, 10, !1),
          e.cyl(n + 5, i, o, 1.5, f - 3.5 - i, 10, !1),
          e.boxMinMax(
            n - r + 1,
            f - 3.6,
            o - 1.7,
            n + r - 1,
            f - 1.9,
            o + 1.7,
          ));
      }
      if (!a && o < s && Math.round(o / 16) % 2 == 0)
        for (let t of [-1, 1])
          (e.setColor(0.3, 0.3, 0.3),
            e.boxMinMax(
              n + t * 12 - 0.12,
              f,
              o - 0.12,
              n + t * 12 + 0.12,
              f + 8,
              o + 0.12,
            ),
            e.setColor(1, 0.62, 0.28).setEmit(6, 0),
            e.boxMinMax(
              n + t * 10 - 0.3,
              f + 7.8,
              o - 0.3,
              n + t * 10 + 0.3,
              f + 8.1,
              o + 0.3,
            ),
            e.noEmit());
    }
    if (a) {
      let t = i;
      (e.setColor(0.58, 0.57, 0.54),
        e.boxMinMax(n - r - 8, 8.3, t - 3, n + r + 8, 26.3, t),
        e.setColor(0.02, 0.02, 0.02),
        e.quad(
          n - r + 1,
          ah,
          t + 0.02,
          n + r - 1,
          ah,
          t + 0.02,
          n + r - 1,
          20.3,
          t + 0.02,
          n - r + 1,
          20.3,
          t + 0.02,
        ),
        e.setColor(1, 0.55, 0.2).setEmit(5, 0));
      for (let r = 0; r < 6; r++)
        e.boxMinMax(
          n - 6 + r * 2.4,
          19.5,
          t - 0.3 - r * 0.02,
          n - 5 + r * 2.4,
          19.8,
          t + 0.05,
        );
      (e.noEmit(),
        e.setColor(0.3, 0.42, 0.3),
        e.boxMinMax(n - r - 8.5, 25.8, t - 3.3, n + r + 8.5, 26.6, t + 0.3));
    }
  }
  {
    let n = 8.5;
    for (let r = -2600; r < 2600; r += 24) {
      let i = t.westBank(r) - 38,
        a = t.westBank(r + 24) - 38;
      if (!(Math.abs(r - u) < 20)) {
        if (
          (e.setColor(0.24, 0.24, 0.25),
          e.quad(a - 7, n, r + 24, a + 7, n, r + 24, i + 7, n, r, i - 7, n, r),
          e.setColor(0.5, 0.49, 0.47),
          e.quad(
            a + 7,
            7.1,
            r + 24,
            i + 7,
            7.1,
            r,
            i + 7,
            9.4,
            r,
            a + 7,
            9.4,
            r + 24,
          ),
          e.quad(
            i - 7,
            7.1,
            r,
            a - 7,
            7.1,
            r + 24,
            a - 7,
            9.4,
            r + 24,
            i - 7,
            9.4,
            r,
          ),
          Math.round(r / 24) % 2 == 0)
        ) {
          let n = t.height(i, r) - 0.3;
          (e.setColor(0.45, 0.44, 0.42),
            e.boxMinMax(i - 1.2, n, r - 1, i + 1.2, 7.1, r + 1));
        }
        Math.round(r / 24) % 2 == 1 &&
          (e.setColor(1, 0.55, 0.2).setEmit(6, 0),
          e.boxMinMax(i + 6.2, 15, r - 0.3, i + 6.8, 15.3, r + 0.3),
          e.boxMinMax(i - 6.8, 15, r + 11.7, i - 6.2, 15.3, r + 12.3),
          e.noEmit(),
          e.setColor(0.3, 0.3, 0.3),
          e.boxMinMax(i + 6.9, n, r - 0.1, i + 7.1, 15.3, r + 0.1),
          e.boxMinMax(i - 7.1, n, r + 11.9, i - 6.9, 15.3, r + 12.1));
      }
    }
  }
  {
    for (let e = -2500; e < 2500;) {
      let n = r.range(30, 44),
        i = t.westBank(e) - 58,
        a = 0;
      for (; i > -2350;) {
        let o = r.range(14, 26),
          l = Math.min(n - 6, r.range(14, 24)),
          u = i - o / 2,
          d = e + n / 2 + r.range(-3, 3);
        if (((i -= o + r.range(6, 16)), a++, c(u, d))) continue;
        let f = t.height(u, d);
        if (f > 9 || t.kind(u, d) !== `farbank`) continue;
        let p = t.westBank(d) - u,
          m = Math.hypot(u + 1850, d - 650) < 380,
          h = Math.hypot(u + 1500, d + 700) < 320,
          g;
        ((g =
          a <= 1
            ? r.chance(0.75)
              ? r.range(45, 110)
              : r.range(25, 50)
            : m
              ? r.chance(0.5)
                ? r.range(70, 170)
                : r.range(25, 60)
              : h
                ? r.chance(0.35)
                  ? r.range(55, 100)
                  : r.range(18, 45)
                : r.chance(0.08)
                  ? r.range(50, 90)
                  : r.range(12, 40)),
          !(p > 900 && r.chance(0.5)) &&
            s(
              u,
              d,
              o,
              l,
              g,
              f - 0.5,
              g > 80 && r.chance(0.5),
              g > 60 && r.chance(0.18),
              p < 220,
            ));
      }
      e += n;
    }
    let n = -1860,
      a = t.height(n, 640);
    (e.setColor(0.42, 0.5, 0.56).setEmit(0, 0, 777),
      e.box(n, a - 0.5, 640, 32, 150, 32),
      e.box(n, a + 149.5, 640, 24, 30, 24),
      e.box(n, a + 179.5, 640, 14, 12, 14),
      e.noEmit(),
      e.setColor(0.9, 0.95, 1).setEmit(3, 0),
      e.box(n, a + 186, 640, 14.4, 1.2, 14.4, 0, 51),
      e.setColor(1, 0.12, 0.08).setEmit(8, 2, 3),
      e.box(n, a + 192, 640, 0.8, 0.8, 0.8),
      e.noEmit(),
      i++);
  }
  l = [0, 1];
  let g = t.northBank(430) - 105;
  for (let e = Fe + 20; e < 2300;) {
    let n = r.range(34, 52),
      i = t.northBank(e) - 62,
      a = 0,
      o = e < -150;
    for (; i > -2100;) {
      let l = r.range(16, 30),
        u = Math.min(n - 8, r.range(16, 34)),
        d = e + n / 2,
        f = i - l / 2;
      if (
        ((i -= l + r.range(10, 22)),
        a++,
        t.dazhiPlain(d, f) < 0.6 || Math.hypot(d - 430, f - g) < 95 || c(d, f))
      )
        continue;
      let p = t.northBank(d) - f;
      if (d > -760 && d < -420 && p < 300) continue;
      let m = t.height(d, f);
      if (m > 9) continue;
      let h;
      ((h = o
        ? r.chance(0.12)
          ? r.range(40, 70)
          : r.range(12, 36)
        : a <= 1
          ? r.range(30, 85)
          : r.range(18, 70)),
        s(
          d,
          f,
          u,
          l,
          h,
          m - 0.5,
          !o && r.chance(0.55),
          h > 55 && r.chance(0.25),
          a <= 2,
        ));
    }
    e += n;
  }
  let _ = [];
  for (let n = Fe + 24; n < 2350; n += 34) {
    let r = t.northBank(n) - 24,
      i = t.height(n, r);
    if (i < 1.2 || i > 5 || Math.hypot(n - 430, r - g) < 110 || c(n, r))
      continue;
    let a = n + 34,
      o = t.northBank(a) - 24;
    (t.height(a, o) < 5 &&
      t.height(a, o) > 1.2 &&
      (e.setColor(0.3, 0.1, 0.075),
      e.quad(
        n,
        i + 0.05,
        r + 1.7,
        a,
        i + 0.05,
        o + 1.7,
        a,
        i + 0.05,
        o - 1.7,
        n,
        i + 0.05,
        r - 1.7,
      ),
      e.setColor(0.42, 0.41, 0.38),
      e.quad(
        n,
        i + 0.05,
        r - 6,
        a,
        i + 0.05,
        o - 6,
        a,
        i + 0.05,
        o - 8.6,
        n,
        i + 0.05,
        r - 8.6,
      )),
      e.setColor(0.2, 0.24, 0.22),
      e.boxMinMax(n - 0.1, i, r - 3.4, n + 0.1, i + 5.2, r - 3.2),
      e.setColor(1, 0.84, 0.6).setEmit(5, 0),
      e.boxMinMax(n - 0.25, i + 5, r - 3.55, n + 0.25, i + 5.25, r - 3.05),
      e.noEmit(),
      _.push({ x: n, y: i + 5.1, z: r - 3.3 }));
  }
  let v = t.height(430, g);
  {
    (e.setColor(0.86, 0.85, 0.82).setEmit(0, 0, 321),
      e.box(430, v - 0.5, g + 4, 120, 24.5, 62),
      e.noEmit(),
      e.setColor(0.72, 0.1, 0.12),
      e.box(430, v + 24, g + 4, 121, 1.6, 63, 0, 55));
    let t = 11.2,
      n = v + 8;
    (e.setColor(1, 1, 1).setEmit(1.5, 0),
      e.quad(
        415,
        n,
        g + 35.1,
        445,
        n,
        g + 35.1,
        445,
        n + t,
        g + 35.1,
        415,
        n + t,
        g + 35.1,
        zm,
      ),
      e.noEmit());
    let r = v + 24 + 44;
    e.setColor(0.92, 0.92, 0.9);
    for (let t of [-1, 1])
      (e.beam(414, v + 24, g + t * 5, 430, r, g + t * 3.2, 1.3, 1.3),
        e.beam(446, v + 24, g + t * 5, 430, r, g + t * 3.2, 1.3, 1.3));
    i++;
  }
  return {
    wheelCenter: new U(430, v + 24 + 44, g),
    buildings: i,
    parkLamps: _,
    decks: h,
  };
}
