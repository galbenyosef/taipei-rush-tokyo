// tokyo/assets/region-tokyo-55J_WESF 168 — col
// Lines 69392-69741 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function zme(e, t) {
  let n = gw(22),
    r = t.c(`forumWood`);
  for (let t = 0; t < 22; t++) {
    let [i, a] = n[t],
      [o, s] = n[t + 1];
    if (!Rme(i, o)) {
      (e.col(13223356).mat(0.8, 0, 0.1, 1),
        e.wall(i, a + 0.25, o, s + 0.25, 0.04, yw.top, e.white, 4, 4));
      continue;
    }
    let c = a + 0.25,
      l = s + 0.25;
    (e.col(16777215).mat(0.7, 0, 0.12, 1),
      e.wall(i, c, o, l, 0.04, 12.6, r, 3, 3),
      e.col(5593437).mat(0.8, 0.1, 0.05, 1),
      e.wall(i, c, o, l, 12.6, vw.top, e.white, 4, 4));
    let u = 1.8;
    for (let t of [12.5, 17.5, 22.5, 27.5, 32.5]) {
      let n = c + u,
        r = l + u;
      (e.col(11975098).mat(0.5, 0.4, 0.06, 1),
        e.wall(i, n, o, r, t - 1, t + 0.3, e.white, 4, 4),
        e.col(10132894).mat(0.6, 0.2, 0.08, 1),
        e.quad(i, t - 1, c, o, t - 1, l, o, t - 1, r, i, t - 1, n),
        e.col(13619147).mat(0.6, 0.1, 0.04, 0),
        e.quad(i, t + 0.3, n, o, t + 0.3, r, o, t + 0.3, l, i, t + 0.3, c));
    }
  }
  e.col(1842720).mat(0.8, 0, 0.1, 1);
  for (let t of [-20, -6, 8, 20]) {
    let n = uw.cz - dw(t) + 0.3;
    e.box(t - 1.6, 0.04, n - 0.05, t + 1.6, 3.4, n + 0.04);
  }
}
function Bme(e) {
  for (let [t, n, r] of [
    [-16, -6, 12.5],
    [6, -4, 17.5],
    [-10, 2, 22.5],
    [10, 20, 27.5],
  ]) {
    let i = uw.cz + dw(t) - 2.2,
      a = uw.cz - dw(n) + 2.05,
      o = n - t,
      s = a - i,
      c = Math.hypot(o, s),
      l = (-s / c) * 1.3,
      u = (o / c) * 1.3;
    (e.col(14211284).mat(0.6, 0.1, 0.06, 1),
      e.quad(
        t + l,
        r,
        i + u,
        n + l,
        r,
        a + u,
        n - l,
        r,
        a - u,
        t - l,
        r,
        i - u,
      ),
      e.quad(
        t - l,
        r - 0.6,
        i - u,
        n - l,
        r - 0.6,
        a - u,
        n + l,
        r - 0.6,
        a + u,
        t + l,
        r - 0.6,
        i + u,
      ),
      e.col(15263972).mat(0.4, 0.5, 0.05, 1));
    let d = Math.max(4, Math.round(c / 2.6));
    for (let c of [1, -1]) {
      let f = l * c,
        p = u * c,
        m = 2.3;
      (e.rod(t + f, r - 0.6, i + p, n + f, r - 0.6, a + p, 0.13, 4),
        e.rod(t + f, r + m, i + p, n + f, r + m, a + p, 0.11, 4));
      for (let n = 0; n <= d; n++) {
        let a = n / d,
          c = t + o * a + f,
          l = i + s * a + p;
        if ((e.rod(c, r - 0.6, l, c, r + m, l, 0.06, 4), n < d)) {
          let a = (n + 1) / d,
            u = t + o * a + f,
            h = i + s * a + p;
          n % 2
            ? e.rod(c, r - 0.6, l, u, r + m, h, 0.05, 3)
            : e.rod(c, r + m, l, u, r - 0.6, h, 0.05, 3);
        }
      }
      (e.col(13161690).mat(0.15, 0.4, 0.06, 1),
        e.quad(
          t + f * 0.95,
          r,
          i + p * 0.95,
          n + f * 0.95,
          r,
          a + p * 0.95,
          n + f * 0.95,
          r + 1.1,
          a + p * 0.95,
          t + f * 0.95,
          r + 1.1,
          i + p * 0.95,
        ),
        e.quad(
          n + f * 0.95,
          r,
          a + p * 0.95,
          t + f * 0.95,
          r,
          i + p * 0.95,
          t + f * 0.95,
          r + 1.1,
          i + p * 0.95,
          n + f * 0.95,
          r + 1.1,
          a + p * 0.95,
        ),
        e.col(15263972).mat(0.4, 0.5, 0.05, 1));
    }
  }
}
function Vme(e, t) {
  let n = yw,
    r = t.c(`forumStone`),
    i = e.coarse ? 8 : 23,
    a = Array.from(
      { length: i + 1 },
      (e, t) => n.lx0 + ((n.lx1 - n.lx0) * t) / i,
    ),
    o = () => e.col(16777215).mat(0.75, 0, 0.04, G),
    s = () => e.col(9213076).mat(0.6, 0.2, 0.04, G),
    [c, l] = n.gallery,
    u = n.proud;
  for (let t = 0; t < i; t++) {
    let i = a[t],
      d = a[t + 1],
      f = bw(i),
      p = bw(d),
      m = (t, n) => e.wall(d, p, i, f, t, n, r, 12, 1.5, void 0, -d);
    if (i >= n.endS - 0.01) {
      (o(), m(0, n.par));
      continue;
    }
    if (e.coarse) {
      (o(), m(0, n.band0), s(), m(n.band0, n.band1), o(), m(n.band1, n.par));
      continue;
    }
    (o(),
      m(0, n.band0),
      m(n.band1, n.gal0),
      m(n.gal1, n.par),
      e.col(8291201).mat(0.55, 0.35, 0.04, 1));
    let h = (n.band1 - n.band0) / n.rows,
      g = 0.12;
    for (let t = 0; t < n.rows; t++) {
      let r = n.band0 + t * h,
        a = r + h;
      (e.quad(d, r, p - u, i, r, f - u, i, a, f - g, d, a, p - g),
        e.quad(
          i,
          r,
          f - u,
          d,
          r,
          p - u,
          d,
          r,
          p - (t ? g : 0),
          i,
          r,
          f - (t ? g : 0),
        ));
    }
    e.quad(d, n.band1, p - g, i, n.band1, f - g, i, n.band1, f, d, n.band1, p);
    let _ = Math.max(i, c),
      v = Math.min(d, l),
      y = (e) => f + ((p - f) * (e - i)) / (d - i),
      b = (t, i) =>
        i > t + 0.001 &&
        e.wall(i, y(i), t, y(t), n.gal0, n.gal1, r, 12, 1.5, void 0, -i);
    if ((o(), v <= _)) b(i, d);
    else {
      (b(i, _), b(v, d));
      let t = n.depth;
      (e.col(3752778).mat(0.15, 0.6, 0.18, G),
        e.wall(v, y(v) + t, _, y(_) + t, n.gal0, n.gal1, e.white, 4, 4),
        e.col(10922150).mat(0.8, 0, 0.05, 1),
        e.quad(
          v,
          n.gal0,
          y(v),
          _,
          n.gal0,
          y(_),
          _,
          n.gal0,
          y(_) + t,
          v,
          n.gal0,
          y(v) + t,
        ),
        e.quad(
          _,
          n.gal1,
          y(_),
          v,
          n.gal1,
          y(v),
          v,
          n.gal1,
          y(v) + t,
          _,
          n.gal1,
          y(_) + t,
        ),
        _ === c && e.wall(_, y(_) + t, _, y(_), n.gal0, n.gal1, e.white, 4, 4),
        v === l && e.wall(v, y(v), v, y(v) + t, n.gal0, n.gal1, e.white, 4, 4),
        e.col(7307082).mat(0.9, 0, 0, 0),
        e.box(_, n.gal0, y(_) + t - 0.9, v, n.gal0 + 0.8, y(v) + t - 0.05));
    }
  }
  if (!e.coarse) {
    e.col(15790316).mat(0.5, 0.1, 0.05, 1);
    for (let t = 1; t < n.bays; t++) {
      let r = c + ((l - c) * t) / n.bays;
      e.cylY(r, bw(r) + 0.45, n.gal0, n.gal1, 0.3, 8, 0.3, !1);
    }
    (e.col(8291201).mat(0.55, 0.35, 0.04, 1),
      e.wall(
        n.lx0,
        bw(n.lx0) - u,
        n.lx0,
        bw(n.lx0),
        n.band0,
        n.band1,
        e.white,
        4,
        4,
      ),
      e.wall(
        n.endS,
        bw(n.endS),
        n.endS,
        bw(n.endS) - u,
        n.band0,
        n.band1,
        e.white,
        4,
        4,
      ));
  }
  if (!e.coarse) {
    let r = n.plate,
      o = n.proud + 0.05,
      s = t.c(`forumPlate`);
    e.col(16777215).mat(0.6, 0, 0.3, G);
    let c = [r.lx0, ...a.filter((e) => e > r.lx0 && e < r.lx1), r.lx1],
      l = r.lx1 - r.lx0;
    for (let t = 0; t + 1 < c.length; t++) {
      let u = c[t],
        d = c[t + 1],
        f = Math.floor((u - n.lx0) / ((n.lx1 - n.lx0) / i)),
        p = a[f],
        m = a[f + 1],
        h = (e) => bw(p) + ((bw(m) - bw(p)) * (e - p)) / (m - p) - o;
      e.panel(
        d,
        h(d),
        u,
        h(u),
        r.y0,
        r.y1,
        s,
        (r.lx1 - d) / l,
        0,
        (r.lx1 - u) / l,
        1,
      );
    }
  }
  (o(),
    e.wall(n.lx0, bw(n.lx0), n.lx0, uw.cz, 0, n.par, r, 12, 1.5),
    e.wall(n.lx1, uw.cz, n.lx1, bw(n.lx1), 0, n.par, r, 12, 1.5));
  let d = 0.4;
  for (let r = 0; r < i; r++) {
    let i = a[r],
      o = a[r + 1],
      s = bw(i),
      c = bw(o);
    (e.col(14210250).mat(0.8, 0, 0, 0),
      e.quad(o, n.par, c, i, n.par, s, i, n.par, s + d, o, n.par, c + d),
      e.coarse ||
        (e.col(12368046).mat(0.8, 0, 0.05, 1),
        e.wall(i, s + d, o, c + d, n.top, n.par, e.white, 4, 4)),
      e.col(10525824).mat(0.9, 0, 0, 0),
      e.quad(
        o,
        n.top,
        c + d,
        i,
        n.top,
        s + d,
        i,
        n.top,
        xw(i),
        o,
        n.top,
        xw(o),
        t.c(`lawn`),
      ));
  }
  if (!e.coarse) {
    e.col(11052186).mat(0.8, 0, 0, 0);
    for (let t = -40; t <= 40; t += 6.5) {
      let r = bw(t) + 1.4;
      e.box(t - 1.8, n.top, r - 0.5, t + 1.8, n.top + 0.7, r + 0.5);
    }
    e.col(12895940).mat(0.6, 0.3, 0, 0);
    for (let [t, r, i] of [
      [-37, -24, 3.4],
      [-21, -11, 2.8],
    ]) {
      let a = Math.min(xw(t), xw(r)) - 0.4;
      e.box(t, n.top, a - 3.4, r, n.top + i, a);
    }
    for (let t = 0; t < i; t++) {
      let r = a[t],
        i = a[t + 1];
      e.solid(
        r,
        (bw(r) + bw(i)) / 2,
        i,
        uw.cz - Math.max(dw(r), dw(i)),
        0,
        n.par,
      );
    }
  }
}
