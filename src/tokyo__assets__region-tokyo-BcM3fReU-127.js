// tokyo__assets__region-tokyo-BcM3fReU 127 — lx0
// Lines 57076-57411 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Ok(e) {
  for (let [t, n, r] of [
    [-16, -6, 12.5],
    [6, -4, 17.5],
    [-10, 2, 22.5],
    [10, 20, 27.5],
  ]) {
    let i = sk.cz + ck(t) - 2.2,
      a = sk.cz - ck(n) + 2.05,
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
function kk() {
  let e = sk.cz - ck(gk.lx0),
    t = sk.cz - ck(gk.lx1);
  return [
    [gk.lx1, gk.lz, gk.lx0, gk.lz],
    [gk.lx0, gk.lz, gk.lx0, e],
    [gk.lx1, t, gk.lx1, gk.lz],
  ];
}
function Ak(e, t) {
  for (let t = 0; t < 12; t++) {
    let n = gk.lx0 + ((gk.lx1 - gk.lx0) * t) / 12,
      r = gk.lx0 + ((gk.lx1 - gk.lx0) * (t + 1)) / 12,
      i = sk.cz - ck(n),
      a = sk.cz - ck(r);
    (e.col(13159115).mat(0.6, 0.3, 0, 0),
      e.quad(n, gk.top, gk.lz, r, gk.top, gk.lz, r, gk.top, a, n, gk.top, i));
  }
  if (e.coarse) {
    e.col(16777215).mat(0.15, 0.6, 0.16, Y);
    for (let [n, r, i, a] of kk())
      e.wall(n, r, i, a, 0, gk.top, t.c(`office`), 3.6, 5);
  } else {
    e.col(15000800).mat(0.6, 0.1, 0.12, 1);
    for (let t of [5, 7.5, 12.5, 17.5, 22.5, 27.5])
      for (let n = 0; n < 12; n++) {
        let r = gk.lx0 + ((gk.lx1 - gk.lx0) * n) / 12,
          i = gk.lx0 + ((gk.lx1 - gk.lx0) * (n + 1)) / 12;
        e.box(
          Math.min(r, i),
          t - 0.4,
          gk.lz,
          Math.max(r, i),
          t,
          sk.cz - Math.max(ck(r), ck(i)) - 0.3,
        );
      }
  }
  e.solid(gk.lx0, gk.lz, gk.lx1, sk.cz - ck(gk.lx0), 0, gk.top);
}
function jk(e, t) {
  let n = pk(22),
    r = t.c(`forumGlass`);
  e.col(16777215).mat(0.05, 0.3, 0.05, 1);
  for (let t = 0; t + 1 < n.length; t++) {
    let [i, a] = n[t],
      [o, s] = n[t + 1];
    if (Math.hypot(o - i, s - a) < 0.05) continue;
    let c = t < 22 && Ek(i, o) ? gk.top : 0.45;
    (e.wall(o, s, i, a, c, sk.H, r, 3, 3),
      e.wall(i, a, o, s, c, sk.H, r, 3, 3));
  }
  for (let [t, n, i, a] of kk())
    (e.wall(t, n, i, a, 0.45, gk.top, r, 3, 3),
      e.wall(i, a, t, n, 0.45, gk.top, r, 3, 3));
  let i = sk.H;
  for (let t = 0; t < 22; t++) {
    let a = n[t],
      o = n[t + 1],
      s = n[n.length - 1 - t],
      c = n[n.length - 2 - t],
      l = Math.max(
        1,
        Math.round(
          Math.max(
            Math.hypot(s[0] - a[0], s[1] - a[1]),
            Math.hypot(c[0] - o[0], c[1] - o[1]),
          ) / 3,
        ),
      );
    for (let t = 0; t < l; t++) {
      let n = t / l,
        u = (t + 1) / l,
        d = a[0] + (s[0] - a[0]) * n,
        f = a[1] + (s[1] - a[1]) * n,
        p = a[0] + (s[0] - a[0]) * u,
        m = a[1] + (s[1] - a[1]) * u,
        h = o[0] + (c[0] - o[0]) * n,
        g = o[1] + (c[1] - o[1]) * n,
        _ = o[0] + (c[0] - o[0]) * u,
        v = o[1] + (c[1] - o[1]) * u;
      (e.quad(p, i, m, _, i, v, h, i, g, d, i, f, r),
        e.quad(d, i, f, h, i, g, _, i, v, p, i, m, r));
    }
  }
}
function Mk(e) {
  let t = pk(22);
  for (let n = 0; n + 1 < t.length; n++) {
    let [r, i] = t[n],
      [a, o] = t[n + 1],
      s = (r + a) / 2,
      c = (i + o) / 2;
    if (
      c > sk.cz &&
      ((s > -6 && s < 6) || (s > 22 && s < 30) || (s > -32 && s < -24))
    )
      continue;
    let l = Math.hypot(a - r, o - i);
    if (l < 0.05) continue;
    let u = Math.atan2(o - i, a - r);
    e.solidRot(s, c, l / 2 + 0.05, 0.25, u, 0, sk.H);
  }
}
function Nk(e, t) {
  let n = t.c(`granite`);
  for (let r of uk) {
    let i = dk[0],
      a = dk[1];
    if (
      (e.col(14210252).mat(0.7, 0, 0.1, Y),
      e.box(r.lx0, 0, i, r.lx1, r.h, a, n, 2, 2, t.c(`white`)),
      !e.coarse)
    ) {
      e.col(5662062).mat(0.15, 0.6, 0.25, Y);
      for (let n = 5; n < r.h - 3; n += 6.5)
        (e.box(
          r.lx0 + 1.2,
          n,
          i - 0.08,
          r.lx1 - 1.2,
          n + 2.4,
          i + 0.02,
          t.c(`office`),
        ),
          e.box(r.lx0 - 0.08, n, i + 1.2, r.lx0 + 0.02, n + 2.4, a - 1.2),
          e.box(r.lx1 - 0.02, n, i + 1.2, r.lx1 + 0.08, n + 2.4, a - 1.2));
      (e.col(16777215).emis(0.25, Y),
        e.wall(
          r.lx1 - 2,
          i - 0.1,
          r.lx0 + 2,
          i - 0.1,
          0,
          4.2,
          t.c(`doors`),
          2.4,
          4.2,
        ),
        e
          .col(13684940)
          .mat(0.5, 0.3, 0, 0)
          .box(r.lx0 + 1, 4.2, i - 2.5, r.lx1 - 1, 4.6, i));
    }
    e.solid(r.lx0, i, r.lx1, a, 0, r.h);
  }
  if (!e.coarse) {
    e.col(15263974).mat(0.5, 0.2, 0.05, 1);
    for (let [t, n] of [
      [-10, 9.3],
      [20, 19.3],
    ])
      e.box(t - 1.6, n, sk.cz + ck(t) - 0.4, t + 1.6, n + 3.2, lk[1] + 0.5);
  }
}
function Pk(e, t) {
  (e.col(12762288).mat(0.7, 0, 0, 0),
    e.flat(-46, lk[0], 46, lk[1], 0.05, t.c(`granite`), 4, 4));
  let n = [];
  for (let e = -40; e <= 40; e += 8)
    for (let t of [-3.5, 3.2]) n.push([e + (t > 0 ? 4 : 0), t]);
  for (let [t, r] of n)
    (!e.coarse || ((t / 8) | 0) % 2 == 0) &&
      EO(e, t, r, 12 + ((t * 13) & 3), (t * 7 + r * 11) | 0);
  if (!e.coarse) {
    for (let t = -36; t <= 36; t += 16) OO(e, t, 0.05, 0, 4.5);
    e.col(9075300).mat(0.8, 0, 0, 0);
    for (let t = -34; t <= 34; t += 12)
      e.box(t - 1.2, 0.05, -0.4, t + 1.2, 0.48, 0.4);
  }
  (e.col(16777215).mat(0.7, 0, 0.15, Y),
    e.box(-46.2, 0, -3.2, -45.4, 1.2, 3.2, e.white),
    e.panel(-46.25, -3, -46.25, 3, 0.1, 1.15, t.c(`forumSign`)),
    e.solid(-46.2, -3.2, -45.4, 3.2, 0, 1.2, `prop`));
  for (let [t, r] of n) e.pole(t, r, 0.3, 0, 4);
}
function* Fk(e, t) {
  (yield* mk(e, t),
    Ak(e, t),
    e.coarse || Mk(e),
    yield,
    Nk(e, t),
    yield,
    Pk(e, t));
}
function Ik(e, t) {
  let n = pk(8);
  e.col(16777215).mat(0.15, 0.6, 0.2, Y);
  for (let r = 0; r + 1 < n.length; r++) {
    let [i, a] = n[r],
      [o, s] = n[r + 1];
    Math.hypot(o - i, s - a) > 0.05 &&
      e.wall(o, s, i, a, 0, sk.H, t.c(`glass`), 12, 12);
  }
  e.col(13685716).mat(0.6, 0.3, 0, 0);
  for (let t = 0; t < 8; t++) {
    let r = n[t],
      i = n[t + 1],
      a = n[n.length - 1 - t],
      o = n[n.length - 2 - t];
    e.quad(
      a[0],
      sk.H,
      a[1],
      o[0],
      sk.H,
      o[1],
      i[0],
      sk.H,
      i[1],
      r[0],
      sk.H,
      r[1],
    );
  }
  e.col(14210252).mat(0.7, 0, 0.1, Y);
  for (let n of uk)
    e.box(n.lx0, 0, dk[0], n.lx1, n.h, dk[1], t.c(`granite`), 8, 8);
  (e.col(16777215).mat(0.15, 0.6, 0.16, Y),
    e.box(
      gk.lx0,
      0,
      gk.lz,
      gk.lx1,
      gk.top,
      sk.cz - sk.W * 0.6,
      t.c(`office`),
      8,
      8,
    ));
}
function Lk(e) {
  return {
    x: ok.x,
    z: ok.z,
    gy: e.groundHeight(ok.x, ok.z),
    facing: Math.PI / 2,
  };
}
