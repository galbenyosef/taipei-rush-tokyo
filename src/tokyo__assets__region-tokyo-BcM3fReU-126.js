// tokyo__assets__region-tokyo-BcM3fReU 126 — col
// Lines 56734-57075 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* mk(e, t) {
  let n = e.coarse ? 10 : 22,
    r = pk(n),
    i = t.c(`glass`),
    a = e.coarse ? 9 : 3;
  if (e.coarse) {
    for (let t = 0; t + 1 < r.length; t++) {
      let [n, o] = r[t],
        [s, c] = r[t + 1];
      Math.hypot(s - n, c - o) < 0.05 ||
        (e.col(16777215).mat(0.12, 0.6, 0.18, Y),
        e.wall(s, c, n, o, 0, sk.H, i, a, a));
    }
    e.col(13685716).mat(0.6, 0.3, 0, 0);
    for (let t = 0; t < n; t++) {
      let n = r[t],
        i = r[t + 1],
        a = r[r.length - 1 - t],
        o = r[r.length - 2 - t];
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
        n[0],
        sk.H,
        n[1],
      );
    }
  } else
    (e.col(12104360).mat(0.6, 0, 0, 0),
      e.sweep(r.flat(), [0, 0, 0.3, 0, 0.3, 0.45, 0, 0.45], !0, t.c(`granite`)),
      e.col(fk).mat(0.4, 0.5, 0.05, 1),
      e.sweep(
        r.flat(),
        [
          -0.25,
          sk.H * 0.5 - 0.2,
          0.25,
          sk.H * 0.5 - 0.2,
          0.25,
          sk.H * 0.5 + 0.2,
          -0.25,
          sk.H * 0.5 + 0.2,
        ],
        !0,
      ));
  if (
    (e.col(fk).mat(0.4, 0.5, 0.05, 1),
    e.sweep(
      r.flat(),
      [0, sk.H - 0.6, 0.35, sk.H - 0.6, 0.35, sk.H + 0.5, 0, sk.H + 0.5],
      !0,
    ),
    !e.coarse)
  ) {
    (yield,
      yield* xk(e),
      yield,
      yield* Ck(e),
      yield,
      wk(e),
      Tk(e),
      Dk(e, t),
      Ok(e),
      e.col(13617598).mat(0.5, 0, 0, 0));
    for (let t = 0; t < n; t++) {
      let n = r[t],
        i = r[t + 1],
        a = r[r.length - 1 - t],
        o = r[r.length - 2 - t];
      e.quad(
        a[0],
        0.04,
        a[1],
        o[0],
        0.04,
        o[1],
        i[0],
        0.04,
        i[1],
        n[0],
        0.04,
        n[1],
      );
    }
  }
}
var hk = sk.L * 0.607,
  gk = { lx0: -28, lx1: 28, lz: -39.3, top: 32.5 },
  _k = sk.H - 0.8;
function vk(e) {
  let t = Math.abs(e);
  return t <= hk
    ? 6 + 6.2 * (1 - (e / hk) * (e / hk))
    : 6 * Math.max(0, 1 - (t - hk) / (sk.L - hk)) ** 0.8;
}
function yk(e, t) {
  let n = ck(e) * 0.95;
  return [sk.cz + t * n, _k - vk(e) * Math.sqrt(Math.max(0, 1 - t * t))];
}
var bk = (e) => _k - vk(e);
function* xk(e) {
  e.col(15921902).mat(0.45, 0.3, 0.05, 1);
  for (let t = 1; t < 52; t++) {
    let n = -sk.L + (2 * sk.L * t) / 52;
    if (ck(n) < 0.8) continue;
    let r = 0,
      i = 0;
    for (let t = 0; t <= 10; t++) {
      let [a, o] = yk(n, Math.sin(-Math.PI / 2 + (Math.PI * t) / 10));
      (t > 0 && e.rod(n, i, r, n, o, a, 0.13, 4), (r = a), (i = o));
    }
  }
  yield;
  let t = (t, n, r, i = -sk.L * 0.985, a = sk.L * 0.985) => {
    let o = null;
    for (let s = 0; s <= r; s++) {
      let c = t(i + ((a - i) * s) / r);
      (c && o && e.rod(o[0], o[1], o[2], c[0], c[1], c[2], n, 6), (o = c));
    }
  };
  e.col(15263972).mat(0.4, 0.5, 0.05, 1);
  for (let e of [-1, 1]) t((t) => [t, _k, sk.cz + e * ck(t) * 0.97], 0.5, 30);
  e.col(16053488).mat(0.4, 0.4, 0.05, 1);
  for (let e of [-1, 1]) {
    t(
      (t) => {
        let n = (t + hk) / (2 * hk),
          [r, i] = yk(t, e * 0.62 * Math.sin(2 * Math.PI * n));
        return [t, i + 0.7, r];
      },
      0.6,
      28,
      -hk,
      hk,
    );
    for (let n of [-1, 1])
      t(
        (t) => {
          let n = (Math.abs(t) - hk) / (sk.L * 0.97 - hk),
            [r, i] = yk(t, e * 0.6 * Math.sin(Math.PI * Math.min(1, n)));
          return [t, i + 0.7, r];
        },
        0.5,
        8,
        n * hk,
        n * sk.L * 0.97,
      );
  }
  e.col(12106942).mat(0.35, 0.7, 0.03, 1);
  for (let e of [-0.45, 0, 0.45])
    t((t) => [t, bk(t) - 0.5, sk.cz + e], 0.09, 24, -hk, hk);
  for (let e of [-0.9, 0.9])
    t((t) => [t, bk(t) + 0.4, sk.cz + e], 0.07, 24, -sk.L * 0.9, sk.L * 0.9);
}
function Sk(e, t, n, r, i) {
  let a = sk.cz + n * ck(t),
    o = (e) => a - n * e,
    s = Math.max(4, Math.round((i - r) / 3)),
    c = null;
  e.rod(t, r, o(0.25), t, i, o(0.25), 0.07, 4);
  for (let n = 0; n <= s; n++) {
    let a = n / s,
      l = r + (i - r) * a,
      u = 0.25 + 1.8 * Math.sin(Math.PI * a);
    (c &&
      (e.rod(t, c[1], o(c[0]), t, l, o(u), 0.06, 4),
      e.rod(
        t,
        n % 2 ? c[1] : l,
        o(0.25),
        t,
        n % 2 ? l : c[1],
        o(n % 2 ? u : c[0]),
        0.035,
        3,
      )),
      (c = [u, l]));
  }
}
function* Ck(e) {
  e.col(14474975).mat(0.4, 0.6, 0.03, 1);
  for (let t = -sk.L + 7; t <= sk.L - 6.9; t += 7) {
    if (ck(t) < 2.5) continue;
    Sk(e, t, 1, 0.45, _k - 0.6);
    let n = t > gk.lx0 && t < gk.lx1;
    Sk(e, t, -1, n ? gk.top : 0.45, _k - 0.6);
  }
  (yield, e.col(14474975).mat(0.4, 0.6, 0.03, 1));
  for (let t of [12.5, 22.5, 32.5, 42.5]) {
    let n = null;
    for (let r = 0; r <= 24; r++) {
      let i = -sk.L * 0.82 + (sk.L * 1.64 * r) / 24,
        a = sk.cz + ck(i) - 0.3;
      (n && e.rod(n[0], t, n[1], i, t, a, 0.1, 4), (n = [i, a]));
    }
  }
}
function wk(e) {
  for (let t of [-hk, hk]) {
    let n = bk(t) - 0.6;
    (e.col(14606300).mat(0.45, 0.35, 0.06, 1),
      e.lathe(
        t,
        sk.cz,
        [
          0.65,
          0,
          0.9,
          2,
          1.55,
          8,
          2.15,
          16,
          2.25,
          20,
          2.15,
          26,
          1.5,
          34,
          0.9,
          n - 4,
          0.65,
          n - 1.6,
        ],
        16,
        0,
        e.white,
        !1,
        !0,
      ),
      e.lathe(
        t,
        sk.cz,
        [0.65, n - 1.6, 1.3, n - 0.5, 1.7, n + 0.4],
        12,
        0,
        e.white,
        !1,
        !0,
      ),
      e.obox(t, n + 0.4, sk.cz, 4.2, 0.45, 1.4),
      e.pole(t, sk.cz, 1.1, 0, 4, `building`),
      e.pole(t, sk.cz, 2.3, 4, 30, `building`),
      e.col(15132386).mat(0.5, 0.3, 0.05, 1));
    for (let n of [12.5, 27.5])
      e.box(
        t - 0.6,
        n - 0.7,
        sk.cz - ck(t) + 0.3,
        t + 0.6,
        n + 0.5,
        sk.cz - 1.6,
      );
  }
}
function Tk(e) {
  let t = [
      [-22, 22, 5, 12.5],
      [22, -22, 12.5, 17.5],
      [-22, 22, 17.5, 22.5],
      [22, -22, 22.5, 27.5],
    ],
    n = (e) => sk.cz + ck(e) - 2.2,
    r = 1.4,
    i = (t, i, a, o) => {
      let s = n(t),
        c = n(a);
      (e.col(15724523).mat(0.5, 0.2, 0.08, 1),
        e.quad(t, i, s - r, a, o, c - r, a, o, c + r, t, i, s + r),
        e.quad(
          t,
          i - 0.6,
          s + r,
          a,
          o - 0.6,
          c + r,
          a,
          o - 0.6,
          c - r,
          t,
          i - 0.6,
          s - r,
        ),
        e.quad(t, i - 0.6, s - r, a, o - 0.6, c - r, a, o, c - r, t, i, s - r),
        e.quad(a, o - 0.6, c - r, t, i - 0.6, s - r, t, i, s - r, a, o, c - r),
        e.col(13161690).mat(0.15, 0.4, 0.06, 1),
        e.quad(t, i, s - r, a, o, c - r, a, o + 1.1, c - r, t, i + 1.1, s - r),
        e.quad(a, o, c - r, t, i, s - r, t, i + 1.1, s - r, a, o + 1.1, c - r),
        e.col(12106940).mat(0.4, 0.6, 0.04, 1),
        e.rod(t, i + 1.1, s - r, a, o + 1.1, c - r, 0.05, 4));
    };
  for (let [e, n, r, a] of t) {
    for (let t = 0; t < 4; t++) {
      let o = e + ((n - e) * t) / 4,
        s = e + ((n - e) * (t + 1)) / 4;
      i(o, r + ((a - r) * t) / 4, s, r + ((a - r) * (t + 1)) / 4);
    }
    i(n, a, n + Math.sign(n - e) * 3, a);
  }
}
var Ek = (e, t) =>
  Math.min(e, t) >= gk.lx0 - 0.01 && Math.max(e, t) <= gk.lx1 + 0.01;
function Dk(e, t) {
  let n = pk(22),
    r = t.c(`forumWood`);
  for (let t = 0; t < 22; t++) {
    let [i, a] = n[t],
      [o, s] = n[t + 1];
    if (!Ek(i, o)) continue;
    let c = a + 0.25,
      l = s + 0.25;
    (e.col(16777215).mat(0.7, 0, 0.12, 1),
      e.wall(i, c, o, l, 0.04, 12.6, r, 3, 3),
      e.col(5593437).mat(0.8, 0.1, 0.05, 1),
      e.wall(i, c, o, l, 12.6, gk.top, e.white, 4, 4),
      e.col(9079948).mat(0.8, 0, 0.1, 1),
      e.wall(o, l - 0.05, i, c - 0.05, 0.04, gk.top, e.white, 4, 4));
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
    let n = sk.cz - ck(t) + 0.3;
    e.box(t - 1.6, 0.04, n - 0.05, t + 1.6, 3.4, n + 0.04);
  }
}
