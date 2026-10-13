// tokyo__assets__region-tokyo-BcM3fReU 77 — math
// Lines 38847-39079 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ub(e, t) {
  let n = wh(e),
    r = Math.sin(n.facing),
    i = -Math.cos(n.facing),
    a = t ? t.groundHeight(n.x - r * 0.8, n.z - i * 0.8) + 0.012 : 0.012;
  return new er(n.x, a, n.z, n.facing);
}
var db = 0.57;
function fb(e, t) {
  let n = Math.sin(e.facing),
    r = -Math.cos(e.facing),
    i = e.x - n * db,
    a = e.z - r * db,
    o = t ? t.groundHeight(i - n * 0.8, a - r * 0.8) + 0.012 : 0.162;
  return new er(i, o, a, e.facing);
}
var pb = [];
function mb(e, t, n) {
  let r = t.wx(0, 1.5),
    i = t.wz(0, 1.5);
  return (
    (pb.length = 0),
    e.statics.query(r - 0.05, i - 0.05, r + 0.05, i + 0.05, pb),
    pb.find(
      (e) =>
        e.tag === n &&
        e.kind === 0 &&
        e.minY < t.py + 0.5 &&
        e.minY > t.py - 1.5 &&
        !e.disabled,
    ) ?? null
  );
}
var hb = class extends Jv {
  front_;
  constructor(e, t, n) {
    (super(e, t.id, n, t.hours), (this.front_ = t));
  }
  get size() {
    return lb[this.id];
  }
  prepare() {
    let e = this.sh.ctx,
      t = e.buildings?.storefront?.(this.id);
    if (!t || !t.painted) return 0;
    let n = ub(this.front_, e.plan),
      r = mb(e, n, `building`);
    if (!r) return 0;
    let i = 1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let [e, t] of [
      [r.minX, r.minZ],
      [r.maxX, r.minZ],
      [r.maxX, r.maxZ],
      [r.minX, r.maxZ],
    ])
      ((i = Math.min(i, n.lx(e, t))),
        (a = Math.max(a, n.lx(e, t))),
        (o = Math.max(o, n.lz(e, t))));
    let { W: s, D: c } = this.size,
      l = Math.sin(n.facing),
      u = -Math.cos(n.facing),
      d = 1 / 0;
    for (let t of [1.2, 2])
      d = Math.min(d, e.plan.groundHeight(n.px + l * t, n.pz + u * t));
    if (
      Math.abs(d - (n.py - 0.012)) > 0.5 ||
      2 * Math.min(-i, a) < s + 0.1 ||
      o - 0.3 < c
    )
      return (
        console.warn(
          `[interiors:tokyo] ${this.id}: the lot no longer fits the ${s} × ${c} m room`,
        ),
        -1
      );
    let f = t.height ?? Math.max(3.4, r.maxY - n.py);
    return this.adopt(n, s, c, f, t.signY ?? f - 0.9);
  }
};
function gb(e, t, n, r, i, a, o) {
  let s = o.depth ?? 0.55,
    c = o.seatH ?? 0.42,
    l = o.backH ?? 0.98,
    u = i,
    d = i + a * s,
    f = Math.min(u, d),
    p = Math.max(u, d),
    m = Math.min(u, u + a * 0.16),
    h = Math.max(u, u + a * 0.16),
    g = (n, r, i, a, o, s, c = 63) =>
      t === `z` ? e.box(n, r, i, a, o, s, c) : e.box(i, r, n, s, o, a, c);
  (e.col(o.frame ?? 3810328),
    g(f + (a > 0 ? 0.02 : 0.04), 0, n, p - (a > 0 ? 0.04 : 0.02), 0.3, r, 55),
    o.reg ? e.tex(o.reg, o.seat, 0.02) : e.col(o.seat, 0.02),
    g(f, 0.3, n, p, c, r, 55),
    g(m, c, n, h, l, r, 55));
  let _ = o.tufts ?? Math.max(1, Math.round((r - n) / 0.45));
  e.col(yb(o.seat, 0.7), 0.02);
  for (let i = 1; i < _; i++) {
    let o = n + ((r - n) * i) / _,
      s = a > 0 ? h + 0.002 : m - 0.002;
    t === `z`
      ? e.box(
          Math.min(s, s + a * 0.004),
          c + 0.05,
          o - 0.008,
          Math.max(s, s + a * 0.004),
          l - 0.05,
          o + 0.008,
          a > 0 ? 1 : 2,
        )
      : e.box(
          o - 0.008,
          c + 0.05,
          Math.min(s, s + a * 0.004),
          o + 0.008,
          l - 0.05,
          Math.max(s, s + a * 0.004),
          a > 0 ? 16 : 32,
        );
  }
  return t === `z` ? [f, n, p, r] : [n, f, r, p];
}
function _b(e, t, n, r, i, a, o, s = 2763308, c) {
  (e.col(s),
    e.cyl(t, n, 0.22, 0.2, 0, 0.03, 12, !0),
    e.cyl(t, n, 0.03, 0.03, 0.03, a - 0.04, 6, !1),
    c ? e.tex(c, o, 0.02) : e.col(o, 0.02),
    e.box(t - r / 2, a - 0.04, n - i / 2, t + r / 2, a, n + i / 2, 55),
    e.col(yb(o, 0.75)),
    e.box(t - r / 2, a - 0.045, n - i / 2, t + r / 2, a - 0.04, n + i / 2, 8));
}
function Hee(e, t, n, r, i = 16052458) {
  let a = 0.55;
  e.push().translate(n, 0, r);
  for (let n of [-1, 1])
    (e
      .push()
      .translate(0, 0, n * 0.13)
      .rotateX(n * 0.13),
      e.col(i),
      e.box(-0.55 / 2, 0, -0.015, a / 2, 1.05, 0.015, 63),
      e.tex(t, 16777215, 0.25),
      e.rectZ(
        -0.55 / 2 + 0.035,
        0.06,
        a / 2 - 0.035,
        1.0150000000000001,
        n * 0.016,
        n,
      ),
      e.pop());
  e.pop();
}
function Uee(e, t, n, r, i, a, o, s, c = 15264492) {
  let l = 0.62,
    u = i - l;
  return (
    e.col(c),
    e.box(n, 0, u, r, a, i, 7),
    e.box(n, 0, u, r, 0.12, u + 0.02, 32),
    e.box(n, a - 0.24, u, r, a, u + 0.02, 32),
    e.box(n, 0.12, u, n + 0.04, a - 0.24, u + 0.02, 32),
    e.box(r - 0.04, 0.12, u, r, a - 0.24, u + 0.02, 32),
    e.tex(o, 16777215, 0.75, 1.15),
    e.rectZ(n + 0.04, 0.12, r - 0.04, a - 0.24, u + 0.12, -1),
    s &&
      (e.tex(s, 16777215, 0.9, 1.2),
      e.rectZ(n + 0.03, a - 0.22, r - 0.03, a - 0.03, u - 0.002, -1)),
    t.col(14676212, 0.16),
    t.rectZ(n + 0.04, 0.12, r - 0.04, a - 0.24, u + 0.005, -1),
    l
  );
}
function vb(e, t, n, r, i = 4869716) {
  (e.col(i),
    e.rectX(0.05, 0, n, r + 0.2, t / 2 + 0.01, 1),
    e.rectX(0.05, 0, n, r + 0.2, -t / 2 - 0.01, -1),
    e.rectZ(-t / 2 - 0.01, 0, t / 2 + 0.01, r + 0.2, n + 0.01, 1));
}
function yb(e, t) {
  let n = ((e >> 16) & 255) * t,
    r = ((e >> 8) & 255) * t,
    i = (e & 255) * t;
  return (Math.round(n) << 16) | (Math.round(r) << 8) | Math.round(i);
}
var bb = [
    [`walkin.maid.item.omurice`, 1650, 80, `蛋`],
    [`walkin.maid.item.drink`, 880, 20, `飲`],
    [`walkin.maid.item.parfait`, 1210, 40, `甜`],
    [`walkin.maid.item.cheki`, 880, 0, `照`],
  ],
  xb = 880,
  Sb = `#f7c6d6`,
  Cb = `#f29bb8`,
  wb = `#fff6ee`,
  Tb = `#bfe8dc`,
  Wee = `#d8c8f0`;
function Eb(e, t, n, r, i) {
  ((e.fillStyle = i),
    e.beginPath(),
    e.moveTo(t, n + r * 0.35),
    e.bezierCurveTo(t, n, t - r * 0.6, n - r * 0.1, t - r * 0.6, n + r * 0.3),
    e.bezierCurveTo(
      t - r * 0.6,
      n + r * 0.65,
      t - r * 0.1,
      n + r * 0.8,
      t,
      n + r,
    ),
    e.bezierCurveTo(
      t + r * 0.1,
      n + r * 0.8,
      t + r * 0.6,
      n + r * 0.65,
      t + r * 0.6,
      n + r * 0.3,
    ),
    e.bezierCurveTo(t + r * 0.6, n - r * 0.1, t, n, t, n + r * 0.35),
    e.fill());
}
function Db(e, t, n, r, i) {
  ((e.fillStyle = i), e.beginPath());
  for (let i = 0; i < 10; i++) {
    let a = -Math.PI / 2 + (i * Math.PI) / 5,
      o = i % 2 ? r * 0.45 : r;
    e.lineTo(t + Math.cos(a) * o, n + Math.sin(a) * o);
  }
  (e.closePath(), e.fill());
}
