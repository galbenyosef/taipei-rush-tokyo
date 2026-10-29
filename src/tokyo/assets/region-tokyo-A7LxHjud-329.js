// tokyo/assets/region-tokyo-A7LxHjud 329 — math
// Lines 118649-118996 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function kke(e, t, n, r) {
  ((e.fillStyle = `#6a6458`), e.fillRect(0, 0, t, n));
  let i = FJ(r);
  for (let r = 0; r < 70; r++) {
    let r = i() * t,
      a = i() * n,
      o = 3 + i() * 3.5,
      s = i() * Math.PI * 2;
    (e.save(),
      e.translate(r, a),
      e.rotate(s),
      (e.fillStyle =
        i() < 0.75
          ? `hsl(${46 + i() * 8}, ${80 + i() * 15}%, ${52 + i() * 12}%)`
          : `hsl(${38 + i() * 6}, 70%, ${40 + i() * 8}%)`),
      e.beginPath(),
      e.moveTo(0, 0),
      e.arc(0, 0, o, -0.9, 0.9),
      e.closePath(),
      e.fill(),
      e.restore());
  }
}
function Ake(e, t, n, r, i, a, o, s) {
  ((e.fillStyle = `#5a3a1c`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = a),
    e.fillRect(4, 4, t - 8, n - 8),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = MJ(s, 13, 900)),
    NJ(e, r, t / 2, 16, t - 12),
    e.fillRect(10, 26, t - 20, 1.5),
    (e.font = MJ(s, 11, 700)),
    i.forEach((n, r) => NJ(e, n, t / 2, 40 + r * 16, t - 12)));
}
function jke(e, t, n, r, i, a) {
  ((e.fillStyle = i),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `rgba(255,255,255,0.08)`),
    e.fillRect(0, 0, t, 7),
    (e.fillStyle = `rgba(0,0,0,0.55)`));
  for (let r = 1; r < 3; r++) e.fillRect((r * t) / 3 - 1, 12, 2, n);
  if (((e.fillStyle = `#f4f0e6`), !r)) {
    ((e.strokeStyle = `#f4f0e6`),
      (e.lineWidth = 4),
      e.beginPath(),
      e.arc(t / 2, n * 0.52, n * 0.24, 0, Math.PI * 2),
      e.stroke(),
      e.fillRect(t / 2 - n * 0.2, n * 0.52 - 3, n * 0.4, 6));
    return;
  }
  let o = [...r];
  ((e.font = MJ(
    a,
    Math.round(Math.min(n * 0.55, (t / Math.max(1, o.length)) * 0.9)),
    900,
    !0,
  )),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    o.forEach((r, i) => e.fillText(r, ((i + 0.5) * t) / o.length, n * 0.56)));
}
var YJ = new Uint8Array(256);
for (let e = 0; e < 256; e++) YJ[e] = Math.round(255 * (e / 255) ** 2.2);
var XJ = (e) => YJ[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function Z(e, t, n = 1) {
  return (
    e.setColor(
      XJ(((t >> 16) & 255) * n),
      XJ(((t >> 8) & 255) * n),
      XJ((t & 255) * n),
    ),
    e
  );
}
var ZJ = { u0: AJ.u, v0: AJ.v, u1: AJ.u, v1: AJ.v };
function QJ(e, t, n, r, i, a, o, s, c, l, u, d, f, p = ZJ) {
  e.quad(t, n, r, i, a, o, s, c, l, u, d, f, p.u0, p.v0, p.u1, p.v1);
}
function $J(e, t, n, r, i, a, o, s = {}) {
  let c = s.front ?? ZJ,
    l = s.back ?? ZJ,
    u = s.top ?? ZJ,
    d = s.sides ?? ZJ;
  (QJ(e, t, n, o, i, n, o, i, a, o, t, a, o, c),
    s.noBack || QJ(e, i, n, r, t, n, r, t, a, r, i, a, r, l),
    QJ(e, i, n, o, i, n, r, i, a, r, i, a, o, d),
    QJ(e, t, n, r, t, n, o, t, a, o, t, a, r, d),
    QJ(e, t, a, o, i, a, o, i, a, r, t, a, r, u),
    s.bottom && QJ(e, t, n, r, i, n, r, i, n, o, t, n, o, ZJ));
}
function eY(e, t, n, r, i, a, o, s = {}) {
  $J(e, t - i, n - a, r - o, t + i, n + a, r + o, s);
}
function tY(e, t, n, r, i, a, o, s, c = 6, l = s, u = !1, d = !1, f) {
  let p = i - t,
    m = a - n,
    h = o - r,
    g = Math.hypot(p, m, h) || 1,
    _ = p / g,
    v = m / g,
    y = h / g,
    b,
    x,
    S;
  Math.abs(v) < 0.9
    ? ((b = -y), (x = 0), (S = _))
    : ((b = 0), (x = y), (S = -v));
  let C = Math.hypot(b, x, S) || 1;
  ((b /= C), (x /= C), (S /= C));
  let w = v * S - y * x,
    T = y * b - _ * S,
    E = _ * x - v * b,
    D = f ?? ZJ,
    O = e.n;
  for (let u = 0; u <= c; u++) {
    let d = (u / c) * Math.PI * 2,
      f = Math.cos(d),
      p = Math.sin(d),
      m = b * f + w * p,
      h = x * f + T * p,
      g = S * f + E * p,
      _ = D.u0 + (D.u1 - D.u0) * (u / c);
    (e.vertex(t + m * s, n + h * s, r + g * s, m, h, g, _, D.v0),
      e.vertex(i + m * l, a + h * l, o + g * l, m, h, g, _, D.v1));
  }
  for (let t = 0; t < c; t++) {
    let n = O + t * 2;
    e.tri(n, n + 2, n + 1).tri(n + 1, n + 2, n + 3);
  }
  let k = (t, n, r, i, a) => {
    let o = e.vertex(t, n, r, _ * a, v * a, y * a, ZJ.u0, ZJ.v0),
      s = e.n;
    for (let o = 0; o < c; o++) {
      let s = (o / c) * Math.PI * 2,
        l = Math.cos(s),
        u = Math.sin(s);
      e.vertex(
        t + (b * l + w * u) * i,
        n + (x * l + T * u) * i,
        r + (S * l + E * u) * i,
        _ * a,
        v * a,
        y * a,
        ZJ.u0,
        ZJ.v0,
      );
    }
    for (let t = 0; t < c; t++)
      a > 0
        ? e.tri(o, s + t, s + ((t + 1) % c))
        : e.tri(o, s + ((t + 1) % c), s + t);
  };
  (u && k(i, a, o, l, 1), d && k(t, n, r, s, -1));
}
function nY(e, t, n, r, i, a, o = 6, s = a, c = !0, l) {
  tY(e, t, r, n, t, i, n, a, o, s, c, !1, l);
}
function rY(e, t, n, r, i, a, o = 0) {
  let s = a ?? ZJ,
    c = e.n,
    l = r.length,
    u = r[0][1],
    d = r[l - 1][1];
  for (let a = 0; a <= i; a++) {
    let c = o + (a / i) * Math.PI * 2,
      f = Math.cos(c),
      p = Math.sin(c);
    for (let o = 0; o < l; o++) {
      let [c, m] = r[o],
        h = Math.min(l - 1, o + 1),
        g = Math.max(0, o - 1),
        _ = r[h][0] - r[g][0],
        v = r[h][1] - r[g][1],
        y = Math.hypot(_, v) || 1,
        b = v / y,
        x = -_ / y;
      e.vertex(
        t + p * c,
        m,
        n + f * c,
        p * b,
        x,
        f * b,
        s.u0 + (s.u1 - s.u0) * (a / i),
        s.v0 + (s.v1 - s.v0) * ((m - u) / (d - u || 1)),
      );
    }
  }
  for (let t = 0; t < i; t++)
    for (let n = 0; n < l - 1; n++) {
      let r = c + t * l + n,
        i = r + l;
      e.tri(r, i, r + 1).tri(r + 1, i, i + 1);
    }
}
function iY(e, t, n, r, i, a, o, s = 0, c = 0) {
  let l = Math.cos(s),
    u = Math.sin(s),
    d = (i / 2) * l,
    f = -u * (i / 2),
    p = u * Math.sin(c) * (a / 2),
    m = (a / 2) * Math.cos(c),
    h = l * Math.sin(c) * -(a / 2);
  e.quad(
    t - d - p,
    n - m,
    r - f - h,
    t + d - p,
    n - m,
    r + f - h,
    t + d + p,
    n + m,
    r + f + h,
    t - d + p,
    n + m,
    r - f + h,
    o.u0,
    o.v0,
    o.u1,
    o.v1,
  );
}
function aY(e, t, n, r, i, a, o, s) {
  e.quad(t, o, a, n, o, a, n, i, r, t, i, r, s.u0, s.v0, s.u1, s.v1);
}
function oY(e, t, n, r, i, a, o, s = 0, c = ZJ) {
  let l = (r + i) / 2,
    u = t - s,
    d = n + s,
    f = r - s,
    p = i + s,
    m = a - ((o - a) / ((i - r) / 2)) * s;
  (QJ(e, u, m, p, d, m, p, d, o, l, u, o, l, c),
    QJ(e, d, m, f, u, m, f, u, o, l, d, o, l, c),
    QJ(e, d, m - 0.02, p, u, m - 0.02, p, u, o - 0.03, l, d, o - 0.03, l),
    QJ(e, u, m - 0.02, f, d, m - 0.02, f, d, o - 0.03, l, u, o - 0.03, l));
  let h = (t, n) => {
    let s = e.vertex(t, a, r, n, 0, 0, AJ.u, AJ.v);
    (e.vertex(t, a, i, n, 0, 0, AJ.u, AJ.v),
      e.vertex(t, o, l, n, 0, 0, AJ.u, AJ.v),
      n > 0 ? e.tri(s, s + 2, s + 1) : e.tri(s, s + 1, s + 2));
  };
  (h(n, 1), h(t, -1));
}
var sY = (e) => kJ(SJ[e]);
function cY(e, t, n = 1024) {
  let r = new je(n, n * 2);
  return (
    r.setMaterial(0.8, 0, 0, 0),
    t(r),
    { name: e, geo: ar(r, `tokyo-culture:${e}`) }
  );
}
var lY = [
    {
      name: `st-fish1`,
      goods: [`fishA`, `fishB`],
      awn: 0,
      pops: [6, 1],
      big: 0,
      kind: `tray`,
    },
    {
      name: `st-fish2`,
      goods: [`fishC`, `fishD`],
      awn: 2,
      pops: [7, 8],
      big: 1,
      kind: `tray`,
    },
    {
      name: `st-fish3`,
      goods: [`fishB`, `fishA`],
      awn: 1,
      pops: [8, 6],
      big: 0,
      kind: `tray`,
    },
    {
      name: `st-dried1`,
      goods: [`driedA`, `driedB`],
      awn: 1,
      pops: [9, 10],
      big: 15,
      kind: `tiers`,
    },
    {
      name: `st-dried2`,
      goods: [`driedB`, `driedA`],
      awn: 0,
      pops: [10, 9],
      big: 0,
      kind: `tiers`,
    },
    {
      name: `st-sweets1`,
      goods: [`sweetsA`, `sweetsB`],
      awn: 0,
      pops: [2, 3],
      big: 3,
      kind: `tiers`,
    },
    {
      name: `st-sweets2`,
      goods: [`sweetsB`, `sweetsA`],
      awn: 2,
      pops: [11, 2],
      big: 2,
      kind: `tiers`,
    },
    {
      name: `st-fruit`,
      goods: [`fruitA`, `produce`],
      awn: 1,
      pops: [4, 12],
      big: 4,
      kind: `case`,
    },
    {
      name: `st-produce`,
      goods: [`produce`, `fruitA`],
      awn: 0,
      pops: [12, 0],
      big: 0,
      kind: `tiers`,
    },
    {
      name: `st-clothes1`,
      goods: [`clothesA`, `clothesB`],
      awn: 2,
      pops: [14, 5],
      big: 5,
      kind: `rail`,
    },
    {
      name: `st-clothes2`,
      goods: [`clothesB`, `clothesA`],
      awn: 1,
      pops: [13, 5],
      big: 5,
      kind: `rail`,
    },
  ],
  uY = 0.12,
  dY = 1.8;
