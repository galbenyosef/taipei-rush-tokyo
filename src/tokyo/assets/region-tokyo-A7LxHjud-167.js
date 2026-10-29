// tokyo/assets/region-tokyo-A7LxHjud 167 — math
// Lines 69156-69482 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* Gme(e, t) {
  let n = e.coarse ? 10 : 22,
    r = yw(n),
    i = t.c(`glass`),
    a = e.coarse ? 9 : 3;
  if (e.coarse) {
    for (let t = 0; t + 1 < r.length; t++) {
      let [o, s] = r[t],
        [c, l] = r[t + 1];
      Math.hypot(c - o, l - s) < 0.05 ||
        (e.col(16777215).mat(0.12, 0.6, 0.18, G),
        e.wall(c, l, o, s, t < n ? Sw.top : 0, pw.H, i, a, a));
    }
    e.col(13685716).mat(0.6, 0.3, 0, 0);
    for (let t = 0; t < n; t++) {
      let n = r[t],
        i = r[t + 1],
        a = r[r.length - 1 - t],
        o = r[r.length - 2 - t];
      e.quad(
        a[0],
        pw.H,
        a[1],
        o[0],
        pw.H,
        o[1],
        i[0],
        pw.H,
        i[1],
        n[0],
        pw.H,
        n[1],
      );
    }
  } else
    (e.col(12104360).mat(0.6, 0, 0, 0),
      e.sweep(r.flat(), [0, 0, 0.3, 0, 0.3, 0.45, 0, 0.45], !0, t.c(`granite`)),
      e.col(vw).mat(0.4, 0.5, 0.05, 1),
      e.sweep(
        r.flat(),
        [
          -0.25,
          pw.H * 0.5 - 0.2,
          0.25,
          pw.H * 0.5 - 0.2,
          0.25,
          pw.H * 0.5 + 0.2,
          -0.25,
          pw.H * 0.5 + 0.2,
        ],
        !0,
      ));
  if (
    (e.col(vw).mat(0.4, 0.5, 0.05, 1),
    e.sweep(
      r.flat(),
      [0, pw.H - 0.6, 0.35, pw.H - 0.6, 0.35, pw.H + 0.5, 0, pw.H + 0.5],
      !0,
    ),
    !e.coarse)
  ) {
    (yield,
      yield* Kme(e),
      yield,
      yield* qme(e),
      yield,
      Jme(e),
      Yme(e),
      Zme(e, t),
      Qme(e),
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
var bw = pw.L * 0.607,
  xw = { lx0: -28, lx1: 28, top: 32.5 },
  Sw = {
    lx0: -46,
    lx1: 46,
    fz0: -39.6,
    bow: 9,
    top: 32.5,
    par: 33.6,
    band0: 5,
    band1: 19,
    rows: 13,
    proud: 0.32,
    gal0: 28,
    gal1: 31,
    depth: 1.8,
    endS: 38,
    gallery: [2, 34],
    bays: 6,
    plate: { lx0: 28, lx1: 35, y0: 14.8, y1: 15.6 },
  },
  Cw = (e) => Sw.fz0 + Sw.bow * (e / Sw.lx1) * (e / Sw.lx1),
  ww = (e) => pw.cz - mw(e),
  Tw = pw.H - 0.8;
function Ew(e) {
  let t = Math.abs(e);
  return t <= bw
    ? 6 + 6.2 * (1 - (e / bw) * (e / bw))
    : 6 * Math.max(0, 1 - (t - bw) / (pw.L - bw)) ** 0.8;
}
function Dw(e, t) {
  let n = mw(e) * 0.95;
  return [pw.cz + t * n, Tw - Ew(e) * Math.sqrt(Math.max(0, 1 - t * t))];
}
var Ow = (e) => Tw - Ew(e);
function* Kme(e) {
  e.col(15921902).mat(0.45, 0.3, 0.05, 1);
  for (let t = 1; t < 52; t++) {
    let n = -pw.L + (2 * pw.L * t) / 52;
    if (mw(n) < 0.8) continue;
    let r = 0,
      i = 0;
    for (let t = 0; t <= 10; t++) {
      let [a, o] = Dw(n, Math.sin(-Math.PI / 2 + (Math.PI * t) / 10));
      (t > 0 && e.rod(n, i, r, n, o, a, 0.13, 4), (r = a), (i = o));
    }
  }
  yield;
  let t = (t, n, r, i = -pw.L * 0.985, a = pw.L * 0.985) => {
    let o = null;
    for (let s = 0; s <= r; s++) {
      let c = t(i + ((a - i) * s) / r);
      (c && o && e.rod(o[0], o[1], o[2], c[0], c[1], c[2], n, 6), (o = c));
    }
  };
  e.col(15263972).mat(0.4, 0.5, 0.05, 1);
  for (let e of [-1, 1]) t((t) => [t, Tw, pw.cz + e * mw(t) * 0.97], 0.5, 30);
  e.col(16053488).mat(0.4, 0.4, 0.05, 1);
  for (let e of [-1, 1]) {
    t(
      (t) => {
        let n = (t + bw) / (2 * bw),
          [r, i] = Dw(t, e * 0.62 * Math.sin(2 * Math.PI * n));
        return [t, i + 0.7, r];
      },
      0.6,
      28,
      -bw,
      bw,
    );
    for (let n of [-1, 1])
      t(
        (t) => {
          let n = (Math.abs(t) - bw) / (pw.L * 0.97 - bw),
            [r, i] = Dw(t, e * 0.6 * Math.sin(Math.PI * Math.min(1, n)));
          return [t, i + 0.7, r];
        },
        0.5,
        8,
        n * bw,
        n * pw.L * 0.97,
      );
  }
  e.col(12106942).mat(0.35, 0.7, 0.03, 1);
  for (let e of [-0.45, 0, 0.45])
    t((t) => [t, Ow(t) - 0.5, pw.cz + e], 0.09, 24, -bw, bw);
  for (let e of [-0.9, 0.9])
    t((t) => [t, Ow(t) + 0.4, pw.cz + e], 0.07, 24, -pw.L * 0.9, pw.L * 0.9);
}
function kw(e, t, n, r, i) {
  let a = pw.cz + n * mw(t),
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
function* qme(e) {
  e.col(14474975).mat(0.4, 0.6, 0.03, 1);
  for (let t = -pw.L + 7; t <= pw.L - 6.9; t += 7)
    mw(t) < 2.5 ||
      (kw(e, t, 1, 0.45, Tw - 0.6), kw(e, t, -1, Sw.top, Tw - 0.6));
  (yield, e.col(14474975).mat(0.4, 0.6, 0.03, 1));
  for (let t of [12.5, 22.5, 32.5, 42.5]) {
    let n = null;
    for (let r = 0; r <= 24; r++) {
      let i = -pw.L * 0.82 + (pw.L * 1.64 * r) / 24,
        a = pw.cz + mw(i) - 0.3;
      (n && e.rod(n[0], t, n[1], i, t, a, 0.1, 4), (n = [i, a]));
    }
  }
}
function Jme(e) {
  for (let t of [-bw, bw]) {
    let n = Ow(t) - 0.6;
    (e.col(14606300).mat(0.45, 0.35, 0.06, 1),
      e.lathe(
        t,
        pw.cz,
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
        pw.cz,
        [0.65, n - 1.6, 1.3, n - 0.5, 1.7, n + 0.4],
        12,
        0,
        e.white,
        !1,
        !0,
      ),
      e.obox(t, n + 0.4, pw.cz, 4.2, 0.45, 1.4),
      e.pole(t, pw.cz, 1.1, 0, 4, `building`),
      e.pole(t, pw.cz, 2.3, 4, 30, `building`),
      e.col(15132386).mat(0.5, 0.3, 0.05, 1));
    for (let n of [12.5, 27.5])
      e.box(
        t - 0.6,
        n - 0.7,
        pw.cz - mw(t) + 0.3,
        t + 0.6,
        n + 0.5,
        pw.cz - 1.6,
      );
  }
}
function Yme(e) {
  let t = [
      [-22, 22, 5, 12.5],
      [22, -22, 12.5, 17.5],
      [-22, 22, 17.5, 22.5],
      [22, -22, 22.5, 27.5],
    ],
    n = (e) => pw.cz + mw(e) - 2.2,
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
var Xme = (e, t) =>
  Math.min(e, t) >= xw.lx0 - 0.01 && Math.max(e, t) <= xw.lx1 + 0.01;
