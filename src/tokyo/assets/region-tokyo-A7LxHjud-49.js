// tokyo/assets/region-tokyo-A7LxHjud 49 — setmaterial
// Lines 23818-24068 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function iae(e, t, n) {
  let r = n.white,
    i = Math.sin(t.heading),
    a = -Math.cos(t.heading),
    o = Math.cos(t.heading),
    s = Math.sin(t.heading),
    c = (e, n) => t.cx + o * e + i * n,
    l = (e, n) => t.cz + s * e + a * n,
    u = (t, n, r, i, a, o, s) => {
      e.quad(
        c(t, n),
        a,
        l(t, n),
        c(r, i),
        a,
        l(r, i),
        c(r, i),
        o,
        l(r, i),
        c(t, n),
        o,
        l(t, n),
        s.u0,
        s.v0,
        s.u1,
        s.v1,
      );
    },
    d = (t, n, i, a, o) =>
      e.quad(
        c(t, n),
        o,
        l(t, n),
        c(i, n),
        o,
        l(i, n),
        c(i, a),
        o,
        l(i, a),
        c(t, a),
        o,
        l(t, a),
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
    f = (e, t, n, i, a, o) => {
      (u(e - n, t - i, e + n, t - i, a, o, r),
        u(e + n, t + i, e - n, t + i, a, o, r),
        u(e + n, t - i, e + n, t + i, a, o, r),
        u(e - n, t + i, e - n, t - i, a, o, r),
        d(e - n, t - i, e + n, t + i, o));
    };
  if (t.kind === `metro` && t.hl < 1) {
    if (
      (e.setMaterial(0.5, 0.6, 0, 0),
      Yc(e, [70, 78, 86]),
      f(0, 0, 0.06, 0.06, 0.15, 2.9),
      n.has(t.sign))
    ) {
      let r = n.uv(t.sign),
        i = 1.3;
      (e.setMaterial(0.4, 0, 0.26, 1),
        e.setColor(R(255), R(255), R(255)),
        u(-1.3 / 2, -0.05, i / 2, -0.05, 2.3921875, 2.9, r),
        u(i / 2, 0.05, -1.3 / 2, 0.05, 2.3921875, 2.9, r));
    }
    return;
  }
  if (t.kind === `metro`) {
    let i = t.hw,
      a = t.hl,
      o = 0.15;
    (e.setMaterial(1, 0, 0, 0),
      e.setColor(R(26), R(26), R(28)),
      d(-i + 0.15, -a + 0.6, i - 0.15, a - 0.1, 0.16999999999999998),
      Yc(e, [120, 118, 112]));
    for (let e = 0; e < 4; e++) {
      let t = -a + 0.6 + e * 0.32;
      d(-i + 0.15, t + 0.02, i - 0.15, t + 0.3, 0.175);
    }
    (e.setMaterial(0.8, 0.1, 0, 0),
      Yc(e, [150, 148, 144]),
      f(-i + 0.08, 0.3, 0.08, a - 0.3, o, 1),
      f(i - 0.08, 0.3, 0.08, a - 0.3, o, 1),
      f(0, a - 0.08, i, 0.08, o, 1),
      e.setMaterial(0.5, 0.6, 0, 0),
      Yc(e, [80, 88, 96]));
    for (let [e, t] of [
      [-i + 0.1, -a + 0.15],
      [i - 0.1, -a + 0.15],
      [-i + 0.1, a - 0.15],
      [i - 0.1, a - 0.15],
    ])
      f(e, t, 0.06, 0.06, o, 2.7);
    if (
      (Yc(e, [196, 200, 204]),
      f(0, 0, i + 0.15, a + 0.2, 2.7, 2.86),
      n.has(t.sign))
    ) {
      let o = n.uv(t.sign);
      (e.setMaterial(0.4, 0, 0.45, 1), e.setColor(R(255), R(255), R(255)));
      let s = Math.min(2 * i + 0.3, 2.5),
        c = (100 / 256) * s;
      (u(-s / 2, -a - 0.23, s / 2, -a - 0.23, 2.88 - c, 2.88, o),
        e.setMaterial(0.6, 0.4, 0, 0),
        Yc(e, [80, 88, 96]),
        u(s / 2, -a - 0.2, -s / 2, -a - 0.2, 2.88 - c, 2.88, r));
    }
    return;
  }
  let p = t.hw;
  if (
    (e.setMaterial(0.2, 0.3, 0.16, 1),
    e.setColor(R(168), R(176), R(180)),
    u(
      -p,
      -0.05,
      p,
      -0.05,
      0.15,
      2.55,
      n.has(`concGates`) ? n.uv(`concGates`) : r,
    ),
    t.tickets)
  ) {
    let r = Rc,
      i = t.tickets,
      a = n.uv(`tkt`);
    for (let t = 0; t < r.n; t++) {
      let n = i * (p + r.gap + r.w * (t + 0.5));
      (e.setMaterial(0.5, 0.3, 0, 0),
        Yc(e, [196, 200, 200]),
        f(n, -r.d / 2 - 0.05, r.w / 2 - 0.02, r.d / 2, 0.15, 0.15 + r.h),
        e.setMaterial(0.35, 0.1, 0.18, 1),
        e.setColor(R(255), R(255), R(255)),
        u(
          n - r.w / 2 + 0.03,
          -r.d - 0.06,
          n + r.w / 2 - 0.03,
          -r.d - 0.06,
          0.2,
          0.15 + r.h - 0.04,
          a,
        ));
    }
    let o = i * (p + r.gap),
      s = i * (p + r.gap + r.w * r.n),
      c = Math.abs(s - o),
      l = (96 / 320) * c;
    (e.setMaterial(0.35, 0, 0.3, 1),
      e.setColor(R(255), R(255), R(255)),
      u(Math.min(o, s), -0.07, Math.max(o, s), -0.07, 2, 2 + l, n.uv(`fare`)),
      e.setMaterial(0.5, 0.4, 0, 0),
      Yc(e, [86, 90, 94]),
      f((o + s) / 2, -0.035, c / 2 + 0.06, 0.03, 1.95, 2.05 + l));
  }
  (e.setMaterial(0.5, 0.6, 0, 0), Yc(e, [70, 74, 78]));
  for (let e of [-p, -p / 3, p / 3, p]) f(e, -0.07, 0.05, 0.03, 0.15, 2.55);
  if (
    (Yc(e, [182, 186, 190]),
    f(0, -0.7, p + 0.9, 0.65, 2.75, 2.92),
    e.setMaterial(0.5, 0, 0.8, 1),
    e.setColor(R(250), R(248), R(236)),
    e.quad(
      c(-p - 0.6, -1.2),
      2.74,
      l(-p - 0.6, -1.2),
      c(-p - 0.6, -1),
      2.74,
      l(-p - 0.6, -1),
      c(p + 0.6, -1),
      2.74,
      l(p + 0.6, -1),
      c(p + 0.6, -1.2),
      2.74,
      l(p + 0.6, -1.2),
      r.u0,
      r.v0,
      r.u1,
      r.v1,
    ),
    n.has(t.sign))
  ) {
    let r = 2 * p + 2.8,
      i = (80 / 320) * r;
    (e.setMaterial(0.5, 0.4, 0, 0),
      Yc(e, [90, 94, 98]),
      f(0, -0.2, r / 2 + 0.08, 0.18, 2.95, 3.05 + i),
      e.setMaterial(0.35, 0, 0.26, 1),
      e.setColor(R(255), R(255), R(255)),
      u(-r / 2, -0.39, r / 2, -0.39, 3, 3 + i, n.uv(t.sign)));
  }
}
function aae(e, t, n) {
  let r = de(e, `conc`, t, n) % 10;
  return r < 3
    ? `concGates`
    : r < 5
      ? `concTickets`
      : r < 7
        ? `concShop`
        : `concPassage`;
}
var El = 8,
  Dl = new WeakMap();
function Ol(e, t) {
  let n = Dl.get(e.entrances);
  n || Dl.set(e.entrances, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  r = [];
  for (let n of e.entrances) {
    if (n.kind !== `jr`) continue;
    let e = t.path.project(n.cx, n.cz);
    if (e.d > 30) continue;
    (t.path.at(e.s, Xc), t.path.pos(e.s, 0, B));
    let i = (n.cx - B.x) * -Xc.tz + (n.cz - B.z) * Xc.tx;
    r.push([e.s, i < 0 ? -1 : 1]);
  }
  return (n.set(t, r), r);
}
var oae = (e, t, n) => e.some(([e, r]) => r === n && Math.abs(e - t) <= El),
  sae = (e, t, n) =>
    e.reduce(
      (e, [r, i]) => (i === n ? Math.min(e, Math.abs(r - t)) : e),
      1 / 0,
    );
function kl(e, t, n, r, i) {
  for (let a of e.m.corridors) {
    if (a === t) continue;
    let e = a.path.project(n, r);
    if (e.d < Math.max(-a.edge0.at(e.s), a.edge1.at(e.s)) + i) return !0;
  }
  return !1;
}
var cae = (e, t, n) => (de(e, `front`, t, n) % 5 < 4 ? `concShop` : `shutter`);
function Al(e, t) {
  let n = [],
    r = -1,
    [i, a] = Fie(e, t);
  for (let t = i; t <= a; t += 1) {
    let i = cl(e, t) === Zs.Frame;
    if ((i && r < 0 && (r = t), (!i || t + 1 > a) && r >= 0)) {
      let e = i ? t + 1 : t;
      (e - r > 6 && n.push([r, e]), (r = -1));
    }
  }
  return n;
}
