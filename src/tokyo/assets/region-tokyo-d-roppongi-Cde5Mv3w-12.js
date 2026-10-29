// tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w 12 — next
// Lines 3337-3561 of readable/tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w.pretty.js (statement-aligned).
function Ct(e) {
  return (t, i, a, o, s) => {
    let c = new n(r(`rop-ishigaki`, e)),
      l = [
        [158, 154, 144],
        [148, 146, 138],
        [166, 160, 148],
      ][e % 3];
    O(t, i, a, o, s, `#5a5852`);
    let u = s / 5;
    for (let e = 0; e < 5; e++) {
      let n = i - c.next() * o * 0.3;
      for (; n < i + o;) {
        let r = o * (0.22 + c.next() * 0.22),
          i = 0.86 + c.next() * 0.22;
        ((t.globalAlpha = 1),
          (t.fillStyle = `rgb(${(l[0] * i) | 0},${(l[1] * i) | 0},${(l[2] * i) | 0})`),
          t.fillRect(n + 1.5, a + e * u + 1.5, r - 3, u - 3),
          (t.fillStyle = `rgba(255,255,255,0.12)`),
          t.fillRect(n + 1.5, a + e * u + 1.5, r - 3, 2),
          (t.fillStyle = `rgba(0,0,0,0.14)`),
          t.fillRect(n + 1.5, a + e * u + u - 4, r - 3, 2.5),
          (n += r));
      }
    }
    for (let e = 0; e < 7; e++)
      ((t.globalAlpha = 0.08 + c.next() * 0.1),
        (t.fillStyle = `#2a2820`),
        t.fillRect(
          i + c.next() * o,
          a,
          o * (0.02 + c.next() * 0.03),
          s * (0.4 + c.next() * 0.6),
        ));
    for (let e = 0; e < 10; e++)
      ((t.globalAlpha = 0.18 + c.next() * 0.2),
        (t.fillStyle = `#4a6a34`),
        t.beginPath(),
        t.ellipse(
          i + c.next() * o,
          a + s * (0.7 + c.next() * 0.3),
          o * (0.04 + c.next() * 0.08),
          s * (0.03 + c.next() * 0.05),
          0,
          0,
          Math.PI * 2,
        ),
        t.fill());
    t.globalAlpha = 1;
  };
}
function wt(e, t, i, a, o) {
  let s = new n(r(`rop-gravel`, 1));
  O(e, t, i, a, o, `#cdc8ba`);
  for (let n = 0; n < 900; n++) {
    let n = s.next();
    ((e.fillStyle = n < 0.4 ? `#b6b0a2` : n < 0.75 ? `#e2ddd0` : `#a29c8e`),
      e.fillRect(
        t + s.next() * a,
        i + s.next() * o,
        1.5 + s.next() * 1.5,
        1.5 + s.next(),
      ));
  }
}
function Tt(e, t, n, r, i) {
  (O(e, t, n, r, i, `#b4b0a6`),
    _(
      e,
      P(`roppongi.hie.name`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.94,
      r * 0.7,
      `#1a1a1a`,
      y(),
      `900`,
    ));
}
function Et(e, t, n, r, i) {
  (O(e, t, n, r, i, `#d8452a`),
    _(
      e,
      P(`roppongi.hie.hono`),
      t + r / 2,
      n + i * 0.1,
      n + i * 0.6,
      r * 0.7,
      `#141414`,
      y(),
      `900`,
    ));
}
function Dt(e, t, n, r, i, a) {
  let o = t[1][0] - t[0][0],
    s = t[1][1] - t[0][1],
    c = t[1][2] - t[0][2],
    l = t[3][0] - t[0][0],
    u = t[3][1] - t[0][1],
    d = t[3][2] - t[0][2],
    f =
      (s * d - c * u) * n + (c * l - o * d) * r + (o * u - s * l) * i >= 0
        ? t
        : [t[0], t[3], t[2], t[1]];
  e.quad(
    f[0][0],
    f[0][1],
    f[0][2],
    f[1][0],
    f[1][1],
    f[1][2],
    f[2][0],
    f[2][1],
    f[2][2],
    f[3][0],
    f[3][1],
    f[3][2],
    a.u0,
    a.v0,
    a.u1,
    a.v1,
  );
}
function Ot(e, t, n, r, i, a, o, s, c, l) {
  let u = t.white(),
    d = Math.max(2, Math.round((s - o) / 0.17)),
    f = (r - n) / d,
    p = (s - o) / d,
    m = Math.sign(r - n);
  e.setMaterial(0.9, 0, 0, 0);
  for (let t = 0; t < d; t++) {
    let r = n + t * f,
      s = o + t * p;
    (A(e, 12104358),
      Dt(
        e,
        [
          [r, s, i],
          [r, s, a],
          [r, s + p, a],
          [r, s + p, i],
        ],
        -m,
        0,
        0,
        u,
      ),
      A(e, 13288632),
      Dt(
        e,
        [
          [r, s + p, i],
          [r + f, s + p, i],
          [r + f, s + p, a],
          [r, s + p, a],
        ],
        0,
        1,
        0,
        u,
      ));
  }
  let h = t.uv(`wall:ishigaki`),
    g = o + ((s - o) * (l - n)) / (r - n);
  for (let [t, d, f] of [
    [i, i - 0.4, 1],
    [a, a + 0.4, -1],
  ])
    (A(e, 11052186),
      Dt(
        e,
        [
          [n, o, t],
          [r, s, t],
          [r, s + c, t],
          [n, o + c, t],
        ],
        0,
        0,
        f,
        u,
      ),
      A(e, 9341568),
      Dt(
        e,
        [
          [n, o + c, t],
          [r, s + c, t],
          [r, s + c, d],
          [n, o + c, d],
        ],
        0,
        1,
        0,
        u,
      ),
      A(e, 16777215),
      Dt(
        e,
        [
          [n, G - 0.05, d],
          [l, G - 0.05, d],
          [l, g + c, d],
          [n, o + c, d],
        ],
        0,
        0,
        -f,
        h,
      ),
      A(e, 10131084),
      Dt(
        e,
        [
          [n, G - 0.05, Math.min(t, d)],
          [n, G - 0.05, Math.max(t, d)],
          [n, o + c, Math.max(t, d)],
          [n, o + c, Math.min(t, d)],
        ],
        -m,
        0,
        0,
        u,
      ));
}
