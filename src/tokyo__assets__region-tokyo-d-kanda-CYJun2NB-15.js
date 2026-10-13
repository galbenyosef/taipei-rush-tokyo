// tokyo__assets__region-tokyo-d-kanda-CYJun2NB 15 — quad
// Lines 4510-4842 of readable/tokyo__assets__region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function vn(e, t, r, a, o) {
  let s = new n(i(`gorge-stone`));
  B(e, t, r, a, o, `#5c5850`);
  let c = o / 2.2;
  for (let n = -2; n < a / c + 2; n++)
    for (let i = -2; i < o / c + 2; i++) {
      let a = t + (n + (i % 2) * 0.5) * c,
        o = r + i * c * 0.5,
        l = s.next();
      ((e.fillStyle = `rgb(${(118 + l * 40) | 0},${(114 + l * 34) | 0},${(104 + l * 30) | 0})`),
        e.beginPath(),
        e.moveTo(a, o - c * 0.46),
        e.lineTo(a + c * 0.46, o),
        e.lineTo(a, o + c * 0.46),
        e.lineTo(a - c * 0.46, o),
        e.closePath(),
        e.fill(),
        s.chance(0.25) &&
          ((e.fillStyle = `rgba(70,96,58,0.35)`),
          e.fillRect(a - c * 0.2, o - c * 0.1, c * 0.3, c * 0.2)));
    }
  let l = e.createLinearGradient(0, r + o * 0.6, 0, r + o);
  (l.addColorStop(0, `rgba(30,36,28,0)`),
    l.addColorStop(1, `rgba(30,36,28,0.45)`),
    (e.fillStyle = l),
    e.fillRect(t, r, a, o));
}
function yn(e, t, r, a, o) {
  let s = new n(i(`gorge-conc`));
  B(e, t, r, a, o, `#b4b0a6`);
  for (let n = 0; n < 8; n++)
    ((e.fillStyle = `rgba(${s.chance(0.5) ? `90,88,80` : `220,216,206`},0.12)`),
      e.fillRect(t, r + (n * o) / 8, a, o / 8));
  e.fillStyle = `rgba(80,78,72,0.25)`;
  for (let n = 1; n < 4; n++) e.fillRect(t + (n * a) / 4, r, 1, o);
}
function bn(e) {
  (e.need(`gorge:side`, 576, 112, hn(!1)),
    e.need(`gorge:side-cab`, 576, 112, hn(!0)),
    e.need(`gorge:front`, 128, 112, _n(!1)),
    e.need(`gorge:tail`, 128, 112, _n(!0)),
    e.need(`gorge:stone`, 256, 64, vn),
    e.need(`gorge:conc`, 64, 64, yn),
    e.need(`leaves:0`, 128, 128, ze(0)),
    e.need(`leaves:1`, 128, 128, ze(1, `#4a7040`)));
}
var xn = [-5.75, 0, 5.75],
  Sn = 18,
  Cn = 110.5;
function wn(e) {
  let t = [
    [-4.85, -2.95],
    [-2.8, -0.9],
    [0.9, 2.8],
    [2.95, 4.85],
    [-8.55, -6.75],
  ];
  return (t.push(e ? [7.35, 7.95] : [6.75, 8.55]), t);
}
function Tn(e, t, n) {
  let r = t.white(),
    i = 1.39,
    a = Sn / 2,
    o = 0.95,
    s = 3.45,
    c = t.uv(n === `mid` ? `gorge:side` : `gorge:side-cab`);
  (e.setMaterial(0.42, 0.15, 0, 0),
    D(e, 16777215),
    O(e, i, a, i, -9, o, s, { u0: c.u1, v0: c.v0, u1: c.u0, v1: c.v1 }),
    O(e, -1.39, -9, -1.39, a, o, s, c),
    e.setMaterial(0.2, 0, 0.55, 1));
  let l = (e) => (e + 9) / 18,
    u = (e) => (e - 0.95) / 2.5,
    d = [
      ...wn(n !== `mid`),
      ...xn.flatMap((e) => [
        [e - 0.55, e - 0.11],
        [e + 0.11, e + 0.55],
      ]),
    ];
  for (let [t, n] of d) {
    let r = 1.74,
      i = 2.76;
    (de(e, 1.4, n, 1.4, t, r, i, c, l(n), l(t), u(r), u(i)),
      de(e, -1.4, t, -1.4, n, r, i, c, l(t), l(n), u(r), u(i)));
  }
  (e.setMaterial(0.6, 0.2, 0, 0),
    D(e, 11843772),
    e.quad(
      i,
      s,
      a,
      i,
      s,
      -9,
      0.97,
      3.6300000000000003,
      -9,
      0.97,
      3.6300000000000003,
      a,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    e.quad(
      -1.39,
      s,
      -9,
      -1.39,
      s,
      a,
      -0.97,
      3.6300000000000003,
      a,
      -0.97,
      3.6300000000000003,
      -9,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    e.quad(
      0.97,
      3.6300000000000003,
      a,
      0.97,
      3.6300000000000003,
      -9,
      -0.97,
      3.6300000000000003,
      -9,
      -0.97,
      3.6300000000000003,
      a,
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    D(e, 9212052));
  for (let t of [-4.5, 4.5])
    j(e, 0, t, 3.6300000000000003, 3.93, 0.8, 1.3, 0, 1, r);
  (e.setMaterial(0.8, 0.2, 0, 0),
    D(e, 2763822),
    j(e, 0, 0, 0.42, o, 1.15, 5.2, 0, 1, r, void 0, void 0, !1));
  for (let t of [-6.4, 6.4])
    j(e, 0, t, 0.12, 0.85, 1.25, 1.25, 0, 1, r, void 0, void 0, !1);
  (e.setMaterial(0.45, 0.15, 0, 0), D(e, 16777215));
  let f = (n, a, c) => {
    if (c) {
      let r = t.uv(c === `head` ? `gorge:front` : `gorge:tail`),
        l = 0.25;
      (a > 0
        ? O(e, -1.39, n + l, i, n + l, o, s, r)
        : O(e, i, n - l, -1.39, n - l, o, s, r),
        D(e, 14164012),
        e.quad(i, o, n, i, s, n, 1.27, s, n + a * l, 1.27, o, n + a * l),
        e.quad(
          -1.39,
          o,
          n,
          -1.27,
          o,
          n + a * l,
          -1.27,
          s,
          n + a * l,
          -1.39,
          s,
          n,
        ),
        D(e, 11843772),
        e.quad(-1.39, s, n, -1.27, s, n + a * l, 1.27, s, n + a * l, i, s, n),
        e.setMaterial(0.3, 0, 0.9, 0),
        D(e, c === `head` ? 16773840 : 16722458));
      for (let t of [-1, 1]) {
        let r = t * 1.22 - 0.16,
          i = t * 1.22 + 0.16;
        a > 0
          ? e.quad(
              r,
              1.36,
              n + l + 0.01,
              i,
              1.36,
              n + l + 0.01,
              i,
              1.5,
              n + l + 0.01,
              r,
              1.5,
              n + l + 0.01,
            )
          : e.quad(
              i,
              1.36,
              n - l - 0.01,
              r,
              1.36,
              n - l - 0.01,
              r,
              1.5,
              n - l - 0.01,
              i,
              1.5,
              n - l - 0.01,
            );
      }
      e.setMaterial(0.45, 0.15, 0, 0);
      return;
    }
    (D(e, 14164012),
      a > 0
        ? e.quad(
            -1.39,
            o,
            n,
            i,
            o,
            n,
            i,
            s,
            n,
            -1.39,
            s,
            n,
            r.u0,
            r.v0,
            r.u1,
            r.v1,
          )
        : e.quad(
            i,
            o,
            n,
            -1.39,
            o,
            n,
            -1.39,
            s,
            n,
            i,
            s,
            n,
            r.u0,
            r.v0,
            r.u1,
            r.v1,
          ),
      D(e, 2764338),
      a > 0
        ? e.quad(
            -0.4,
            1,
            n + 0.01,
            0.4,
            1,
            n + 0.01,
            0.4,
            2.9,
            n + 0.01,
            -0.4,
            2.9,
            n + 0.01,
          )
        : e.quad(
            0.4,
            1,
            n - 0.01,
            -0.4,
            1,
            n - 0.01,
            -0.4,
            2.9,
            n - 0.01,
            0.4,
            2.9,
            n - 0.01,
          ));
  };
  (f(a, 1, n === `mid` ? null : n), f(-9, -1, null));
  for (let t of [-40, 40]) {
    let n = e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0);
    (e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0),
      e.vertex(0, 2, t, 0, 1, 0, r.u0, r.v0),
      e.tri(n, n + 1, n + 2));
  }
}
function En(e, t, n, r, i, a, o, s, c = 7, l = 4, u = 0) {
  let d = e.n;
  for (let d = 0; d <= l; d++) {
    let f = d / l,
      p = -Math.PI / 2 + Math.PI * f,
      m = Math.cos(p),
      h = Math.sin(p);
    for (let p = 0; p <= c; p++) {
      let g = (p / c) * Math.PI * 2,
        _ = Math.cos(g),
        v = Math.sin(g),
        y = _ * m,
        b = h,
        x = v * m,
        S =
          Math.sin(((p % c) * 12.9898 + d * 78.233 + u * 37.719) * 1) *
          43758.5453,
        C = d === 0 || d === l ? 1 : 0.78 + 0.4 * (S - Math.floor(S));
      e.vertex(
        t + y * i * C,
        n + b * a * C,
        r + x * o * C,
        y,
        b,
        x,
        s.u0 + (s.u1 - s.u0) * (p / c),
        s.v0 + (s.v1 - s.v0) * f,
      );
    }
  }
  for (let t = 0; t < l; t++)
    for (let n = 0; n < c; n++) {
      let r = d + t * (c + 1) + n,
        i = r + c + 1;
      e.tri(r, i, r + 1).tri(r + 1, i, i + 1);
    }
}
function Dn(e, t, n, r, i, a, o, s, c = !0) {
  let [l, u] = fn((t + n) / 2, (r + i) / 2);
  j(e, l, u, a, o, (i - r) / 2, (n - t) / 2, Q.x, Q.z, s, void 0, void 0, c);
}
var On = (e, t) => (t - (Z.sz + Q.x * e)) / Q.z;
