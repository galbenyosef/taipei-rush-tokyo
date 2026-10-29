// tokyo/assets/region-tokyo-d-ueno-DfmWW0p_ 12 — setmaterial
// Lines 3571-3877 of readable/tokyo/assets/region-tokyo-d-ueno-DfmWW0p_.pretty.js (statement-aligned).
function Qt(e, t, n, r, i) {
  I(e, t, n, r, i, `#8d877c`);
  let a = r / 6;
  for (let i = 0; i < 6; i++)
    for (let o = 0; o < 6; o++) {
      let s = o % 2 ? a / 2 : 0,
        c = ((i * 37 + o * 91) % 13) / 13,
        l = Math.round(178 + c * 26);
      e.fillStyle = `rgb(${l},${l - 4},${l - 12})`;
      for (let c of [0, -r])
        e.fillRect(
          t + ((i * a + s) % r) + c + 1.5,
          n + o * a + 1.5,
          a - 3,
          a - 3,
        );
    }
  R(e, 17, t, n, r, i, 140, 1.2, [`#a49d90`, `#cfc8bb`, `#8f897d`], 0.25);
}
function $t(e, t, n, r, i) {
  (I(e, t, n, r, i, `#5d5b57`),
    R(e, 5, t, n, r, i, 220, 1.5, [`#6c6a65`, `#4d4b47`, `#7a7872`], 0.5),
    [`不`, `忍`, `池`].forEach((a, o) =>
      P(
        e,
        a,
        t + r / 2,
        n + i * (0.2 + o * 0.28),
        r * 0.72,
        i * 0.24,
        `#e2c46a`,
        `900`,
      ),
    ));
}
function en(e, t, n, r) {
  let i = t.white(),
    a = 0.25 * Math.sin(r),
    o = 1.8;
  (e.setMaterial(0.95, 0, 0, 0),
    E(e, 5918790),
    M(e, 0, 0, 0, a, n * 0.58, o, 0.17, i));
  for (let t of [1, -1])
    M(e, a, n * 0.55, o, a + t * 1.5, n * 0.8, 2.3, 0.07, i);
  let s = n * 0.32,
    c = [
      [0.2, n],
      [0.6, n * 0.95],
      [0.86, n * 0.8],
      [1, n * 0.5],
      [1.12, n * 0.14],
    ];
  e.setMaterial(0.9, 0, 0, 0);
  for (let t = 0; t < 12; t++) {
    let l = (t / 12) * Math.PI * 2 + r,
      u = ((t + 1) / 12) * Math.PI * 2 + r,
      d = ((t * 7919 + r * 104729) % 1e3) / 1e3,
      f = (t % 2 ? 1.06 : 0.9) + 0.12 * (d - 0.5),
      p = (u - l) * 0.2;
    c[4][1] = n * (0.1 + 0.16 * d);
    for (let n = 0; n + 1 < c.length; n++) {
      let [r, m] = c[n],
        [h, g] = c[n + 1],
        _ = n < 2 ? l : l + p * (0.6 + d),
        v = n < 2 ? u : u - p * (1.4 - d),
        y = (e, t) => a + Math.cos(e) * s * t * f,
        b = (e, t) => o + Math.sin(e) * s * t * f,
        x = (0.86 + 0.14 * d) * (1.12 - (0.3 * n) / (c.length - 1));
      (E(e, t % 2 ? 10270824 : 8955480, x),
        e.quad(
          y(v, h),
          g,
          b(v, h),
          y(_, h),
          g,
          b(_, h),
          y(_, r),
          m,
          b(_, r),
          y(v, r),
          m,
          b(v, r),
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n >= 1 &&
          (E(e, 6717246, x),
          e.quad(
            y(_, h),
            g,
            b(_, h),
            y(v, h),
            g,
            b(v, h),
            y(v, r),
            m,
            b(v, r),
            y(_, r),
            m,
            b(_, r),
            i.u0,
            i.v0,
            i.u1,
            i.v1,
          )));
    }
  }
}
function tn(e, t, n) {
  let r = t.white(),
    i = [8.5, 7, 10][n],
    a = [6258492, 7240250, 8227380][n];
  (e.setMaterial(0.95, 0, 0, 0),
    E(e, n === 1 ? 5128248 : 6181448),
    M(e, 0, 0, 0, 0.1, i * 0.45, 0.05, 0.2, r),
    M(e, 0.1, i * 0.42, 0.05, -1.2, i * 0.68, 0.4, 0.1, r),
    M(e, 0.1, i * 0.42, 0.05, 1.3, i * 0.66, -0.5, 0.1, r),
    e.setMaterial(0.88, 0, 0, 0),
    [
      [0, 0.78, 0, 0.36],
      [-1.4, 0.68, 0.5, 0.26],
      [1.4, 0.66, -0.4, 0.27],
      [0.3, 0.92, -0.6, 0.24],
      [-0.4, 0.62, -1.2, 0.22],
    ].forEach(([t, n, o, s], c) => {
      (E(e, a, 0.9 + ((c * 37) % 10) / 40),
        j(e, t, i * n, o, i * s, i * s * 0.72, i * s, r, 3, 7));
    }));
}
function nn(e, t) {
  let n = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 3882298),
    A(e, 0, 0, 0, 0.3, 0.12, n, 6, !0),
    A(e, 0, 0, 0.3, 3.5, 0.055, n, 6, !1),
    e.setMaterial(0.4, 0, 0.9, 1),
    E(e, 16773848),
    O(e, -0.17, 3.45, -0.17, 0.17, 3.9, 0.17, n),
    e.setMaterial(0.5, 0.5, 0, 0),
    E(e, 3026989),
    O(e, -0.24, 3.9, -0.24, 0.24, 3.98, 0.24, n),
    O(e, -0.1, 3.98, -0.1, 0.1, 4.08, 0.1, n));
}
function rn(e, t) {
  let n = t.white();
  (e.setMaterial(0.5, 0.5, 0, 0), E(e, 3092783));
  for (let t of [-0.72, 0.72])
    (O(e, t - 0.03, 0, -0.2, t + 0.03, 0.42, -0.14, n),
      O(e, t - 0.03, 0, 0.14, t + 0.03, 0.42, 0.2, n),
      O(e, t - 0.03, 0.42, -0.24, t + 0.03, 0.85, -0.18, n));
  (e.setMaterial(0.8, 0, 0, 0), E(e, 9071176));
  for (let t = 0; t < 4; t++)
    O(
      e,
      -0.85,
      0.42,
      -0.2 + t * 0.105,
      0.85,
      0.46,
      -0.2 + t * 0.105 + 0.085,
      n,
    );
  for (let t = 0; t < 3; t++)
    O(e, -0.85, 0.52 + t * 0.11, -0.25, 0.85, 0.6 + t * 0.11, -0.22, n);
}
var an = (e) => [
  { name: `pond-willow-0`, write: (t) => en(t, e, 8.5, 3) },
  { name: `pond-willow-1`, write: (t) => en(t, e, 9.5, 7) },
  { name: `pond-willow-2`, write: (t) => en(t, e, 7.5, 11) },
  { name: `pond-tree-0`, write: (t) => tn(t, e, 0) },
  { name: `pond-tree-1`, write: (t) => tn(t, e, 1) },
  { name: `pond-tree-2`, write: (t) => tn(t, e, 2) },
  { name: `pond-lamp`, write: (t) => nn(t, e) },
  { name: `pond-bench`, write: (t) => rn(t, e) },
  {
    name: `pond-stone`,
    write: (t) => {
      let n = e.white();
      (t.setMaterial(0.85, 0, 0, 0),
        E(t, 9407363),
        O(t, -0.7, 0, -0.35, 0.7, 0.3, 0.35, n),
        t.setMaterial(0.6, 0.1, 0.08, 2),
        E(t, 16777215),
        k(
          t,
          0,
          0,
          0.3,
          2.1,
          0.45,
          0.16,
          0,
          1,
          e.uv(`pond-stone`),
          e.uv(`pond-stone`),
          e.uv(`pond-stone`),
        ));
    },
  },
];
function on(e, t, n, r, i, a, o, s) {
  let c = t.white(),
    l = Math.ceil((i - n) / o - 0.01),
    u = Math.ceil((a - r) / o - 0.01),
    d = (e) => Math.min(i, n + e * o),
    f = (e) => Math.min(a, r + e * o);
  e.setMaterial(0.96, 0, 0, 0);
  let p = e.n;
  for (let t = 0; t <= u; t++)
    for (let n = 0; n <= l; n++) {
      let r = d(n),
        i = f(t),
        a = Xt(r, i, 1),
        o = Xt(r * 0.25, i * 0.25, 2),
        s = Jt(r, i, 1.2),
        l = 0.88 + 0.2 * a;
      (s && o > 0.4
        ? E(e, 9078370, l)
        : o > 0.82
          ? E(e, 9212240, l)
          : E(e, a > 0.5 ? 6982212 : 6258494, l),
        e.vertex(r, Ht, i, 0, 1, 0, c.u0, c.v0));
    }
  let m = l + 1;
  for (let t = 0; t < u; t++)
    for (let n = 0; n < l; n++) {
      let r = (d(n) + d(n + 1)) / 2,
        i = (f(t) + f(t + 1)) / 2;
      if (
        Yt(r, i) ||
        Jt(r, i, -0.6) ||
        (s &&
          !(
            s(d(n), f(t)) &&
            s(d(n + 1), f(t)) &&
            s(d(n), f(t + 1)) &&
            s(d(n + 1), f(t + 1))
          ))
      )
        continue;
      let a = p + t * m + n,
        o = a + m,
        c = a + m + 1,
        l = a + 1,
        u = a;
      e.tri(o, c, l).tri(o, l, u);
    }
}
function sn(e, t, n, r, i) {
  for (let a = t.minX; a < t.maxX - 0.01; a += i)
    for (let o = t.minZ; o < t.maxZ - 0.01; o += i)
      ne(e, a, o, Math.min(t.maxX, a + i), Math.min(t.maxZ, o + i), n, r);
}
function cn() {
  let e = 0.25;
  return [
    [`z`, J - e, X, W.z0 - 1],
    [`z`, J - e, W.z1 + 1, Z],
    [`z`, Y + e, X, Ee.z0],
    [`z`, Y + e, Ee.z1, $.z0 - 1],
    [`z`, Y + e, $.z1 + 1, Z],
    [`x`, X - e, J, De.x0],
    [`x`, X - e, De.x1, Y],
    [`x`, Z + e, J, Q.x0 - 1],
    [`x`, Z + e, Q.x1 + 1, Y],
  ];
}
function ln(e, t) {
  let n = t.white(),
    r = 0.27,
    i = 0.5;
  (e.setMaterial(0.85, 0, 0, 0), E(e, 11840928));
  let a = (t, i, a, o) => O(e, t, -0.15, i, a, r, o, n);
  (a(J - i, X - i, Y + i, X),
    a(J - i, Z, Q.x0, Z + i),
    a(Q.x1, Z, Y + i, Z + i),
    a(J - i, X, J, W.z0),
    a(J - i, W.z1, J, Z),
    a(Y, X, Y + i, $.z0),
    a(Y, $.z1, Y + i, Z),
    e.setMaterial(0.55, 0.4, 0, 0),
    E(e, 4147776));
  for (let [t, i, a, o] of cn()) {
    let s = Math.max(1, Math.round((o - a) / 2.4)),
      c = (e, n) => (t === `x` ? [e, n, i] : [i, n, e]);
    for (let t = 0; t <= s; t++) {
      let [i, , l] = c(a + ((o - a) * t) / s, 0);
      O(e, i - 0.045, r, l - 0.045, i + 0.045, 1.12, l + 0.045, n);
    }
    for (let t of [0.69, 1.07]) {
      let r = c(a, t),
        i = c(o, t);
      M(e, r[0], r[1], r[2], i[0], i[1], i[2], 0.025, n);
    }
  }
  e.setMaterial(0.9, 0, 0, 0);
  for (let t = 0; t < 4; t++) {
    let r = Vt - 0.36 * (t + 1) + 0.05,
      i = t * 0.6,
      a = i + 0.6;
    (E(e, 10130827, 1 - t * 0.07),
      O(e, De.x0, -1.9, X + i, De.x1, r, X + a, n),
      O(e, Y - a, -1.9, Ee.z0, Y - i, r, Ee.z1, n));
  }
}
