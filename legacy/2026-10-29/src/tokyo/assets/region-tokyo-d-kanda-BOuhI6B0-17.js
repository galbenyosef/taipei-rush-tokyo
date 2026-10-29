// tokyo/assets/region-tokyo-d-kanda-BOuhI6B0 17 — range
// Lines 5147-5452 of readable/tokyo/assets/region-tokyo-d-kanda-BOuhI6B0.pretty.js (statement-aligned).
function Fn(e, t, i, a, o, s, c) {
  let l = t.uv(`gorge:stone`),
    u = i > 0 ? C.top : C.bottom,
    d = new n(r(`gorge-green`, i, Math.round(a)));
  if (c > 0) {
    (e.setMaterial(0.88, 0, 0, 0), D(e, 16777215));
    let t = X + 0.42,
      n = X + p,
      r = u + i * 0.012;
    for (let c = a; c < o - 0.1; c += 4) {
      let a = Math.min(o, c + 4);
      if (!s((c + a) / 2, t + 1)) continue;
      let u = (a - c) / 4;
      i > 0
        ? de(e, c, r, a, r, t, n, l, 0, u, 0, 1)
        : de(e, a, r, c, r, t, n, l, 0, u, 0, 1);
    }
  }
  e.setMaterial(0.92, 0, 0, 0);
  let f = [16777215, 14477516, 12899504, 15261888];
  for (
    let n = a + d.range(0.5, 2);
    n < o - 0.5;
    n += d.range(2, 3.4) * (c > 0 ? 1 : 1.6)
  ) {
    let r = d.range(X + p + 0.9, -0.9),
      a = d.range(0.7, 1.6),
      o = d.range(0.5, 1.15),
      l = d.range(0.3, 0.6),
      m = d.pick(f),
      h = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      g = d.next();
    s(n, r) &&
      (D(e, m),
      En(
        e,
        n,
        r,
        u + i * l * 0.35,
        a,
        o,
        l,
        t.uv(h),
        c > 0 ? 8 : 5,
        c > 0 ? 5 : 3,
        g * 100,
      ));
  }
  for (let n = a + d.range(0, 3); n < o - 1; n += d.range(3.5, 6.5)) {
    let r = d.range(1.8, 3.8),
      a = d.range(X + p + 0.4, -2.6),
      o = d.pick(f),
      c = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      l = Array.from({ length: 5 }, (e, t) =>
        t === 0 || t === 4
          ? S - 0.3 - d.range(0.6, 1.4)
          : a + d.range(-0.8, 0.8),
      );
    if (!s(n + r / 2, (a - 0.3) / 2)) continue;
    let m = t.uv(c);
    D(e, o);
    for (let t = 0; t < 4; t++) {
      let a = n + (r * t) / 4,
        o = n + (r * (t + 1)) / 4,
        s = Math.min(-0.6, l[t]),
        c = Math.min(-0.6, l[t + 1]),
        d = u + i * (0.06 + 0.06 * ((t * 7) % 3)),
        f = u + i * (0.06 + 0.06 * (((t + 1) * 7) % 3)),
        p = S - 0.3;
      i > 0
        ? e.quad(
            a,
            s,
            d,
            o,
            c,
            f,
            o,
            p,
            f,
            a,
            p,
            d,
            m.u0 + ((m.u1 - m.u0) * t) / 4,
            m.v0,
            m.u0 + ((m.u1 - m.u0) * (t + 1)) / 4,
            m.v1,
          )
        : e.quad(
            o,
            c,
            f,
            a,
            s,
            d,
            a,
            p,
            d,
            o,
            p,
            f,
            m.u0 + ((m.u1 - m.u0) * t) / 4,
            m.v0,
            m.u0 + ((m.u1 - m.u0) * (t + 1)) / 4,
            m.v1,
          );
    }
  }
  for (let n = a + d.range(1, 4); n < o - 1; n += d.range(5, 8.5)) {
    let r = d.range(1.7, 2.7),
      a = d.range(1, 1.4),
      o = d.range(1.1, 1.5),
      l = d.pick(f),
      p = d.chance(0.5) ? `leaves:0` : `leaves:1`,
      m = d.next();
    if (
      !s(n, -0.6) ||
      !s(n - r * 1.4 - 0.5, -0.6) ||
      !s(n + r * 1.4 + 0.5, -0.6)
    )
      continue;
    let h = Math.min(-0.45, S + 0.95 - a);
    D(e, l);
    let g = c > 0 ? 4 : 2;
    for (let s = 0; s < g; s++) {
      let l = g > 1 ? s / (g - 1) - 0.5 : 0,
        d = m * 6.28 + s * 2.1,
        f = Math.min(r, a) * (0.62 + 0.18 * Math.sin(d));
      En(
        e,
        n + r * 1.3 * l,
        h + 0.35 * Math.sin(d * 1.7),
        u + i * (o * 0.9 + 0.35 * Math.cos(d)),
        f * 1.15,
        f,
        f,
        t.uv(p),
        c > 0 ? 8 : 6,
        c > 0 ? 5 : 4,
        m * 100 + s,
      );
    }
  }
}
function In(e, t, n) {
  let r = [],
    i = new l(8192, 12288),
    a = 0,
    o = (e, t, n, o) => {
      i.n &&
        (r.push({ name: e, geo: d(i, `kanda-${e}`), x: t, z: n, range: o }),
        (a += i.ni / 3),
        i.reset());
    },
    s = b(t),
    c = s.find((e) => e.maxX <= C.east),
    u = s.find((e) => e.maxX > C.east),
    f = u ? u.minX : C.east,
    p = (C.top + C.bottom) / 2;
  (c && (jn(i, e, c), o(`gorge:hijiri`, (c.minX + c.maxX) / 2, p, 520)),
    kn(i, e),
    An(i, e, Z.sx, C.bottom, -1),
    An(i, e, Z.nx, C.top, 1),
    o(`gorge:maru`, (Z.sx + Z.nx) / 2, p, 520));
  let m = t.bounds.minX - 24,
    h = s.map((e) => [e.minX, e.maxX]),
    g = (e) => {
      let t = [...h, ...(e ? [e] : [])].sort((e, t) => e[0] - t[0]),
        n = [],
        r = m;
      for (let [e, i] of t)
        (e > r && n.push([r, Math.min(e, f)]), (r = Math.max(r, i)));
      return (r < f && n.push([r, f]), n);
    };
  for (let [t, n] of g([v.x1, v.x1 + 1.6])) Nn(i, e, C.top - 0.12, t, n);
  o(`gorge:fence-n`, (m + f) / 2, C.top, 300);
  for (let [t, n] of g(null)) Nn(i, e, C.bottom + 0.12, t, n);
  (o(`gorge:fence-s`, (m + f) / 2, C.bottom, 300),
    u &&
      (Mn(i, e, u.minX, -1, u.minZ, u.maxZ),
      Mn(i, e, u.maxX, 1, u.minZ, u.maxZ),
      o(`gorge:shohei`, (u.minX + u.maxX) / 2, p, 420)),
    Pn(i, e),
    o(`gorge:stair`, (v.x0 + v.x1) / 2, C.top, 300));
  let _ = (e) => (t, n) => Math.abs(t - e) > pn.half + 1.6 || n > pn.y1 + 1.4,
    y = (e) => s.some((t) => e > t.minX - 1 && e < t.maxX + 1);
  for (let r of [1, -1]) {
    let a = _(r > 0 ? Z.nx : Z.sx),
      s = (e, t) =>
        a(e, t) && !y(e) && !(r > 0 && e > v.x0 - 1.5 && e < v.x1 + 4.5);
    for (let a = t.bounds.minX - 30; a < f - 0.5; a += 64) {
      let t = Math.min(f, a + 64);
      (Fn(i, e, r, a, t, s, n),
        o(
          `gorge:wall-${r > 0 ? `n` : `s`}:${Math.round(a)}`,
          (a + t) / 2,
          r > 0 ? C.top : C.bottom,
          320,
        ));
    }
  }
  return { pieces: r, tris: a };
}
function Ln(e) {
  let t = new l(2048, 3072),
    n = [];
  for (let r of [`head`, `mid`, `tail`])
    (t.reset(),
      Tn(t, e, r),
      n.push({ name: `gorge:car-${r}`, geo: d(t, `kanda-gorge-car-${r}`) }));
  return n;
}
var Rn = 150,
  zn = 8.5,
  Bn = 18,
  Vn = 18.5,
  Hn = 12,
  Un = (2 * (Cn + Hn) + dn) / zn,
  Wn = class {
    batch;
    ids = [[], []];
    shown = [[], []];
    offset = [0, 64];
    m16 = new Float32Array(16);
    visibleCars = 0;
    constructor(e) {
      this.batch = e;
      let t = (t) => e.models.get(t),
        [n, r] = fn(dn / 2);
      for (let i = 0; i < 2; i++)
        for (let a = 0; a < 6; a++) {
          let o =
            a === 0
              ? `gorge:car-head`
              : a === 5
                ? `gorge:car-tail`
                : `gorge:car-mid`;
          (ge(this.m16, n, Z.rail, r, Q.x, Q.z),
            this.ids[i].push(e.add(t(o), this.m16, n, r, 520, !1)),
            this.shown[i].push(!1));
        }
    }
    nose(e, t) {
      return e === 0 ? -(Cn + Hn) + zn * t : dn + Cn + Hn - zn * t;
    }
    update(e) {
      let t = e.time.elapsed,
        n = e.env?.hour ?? 12,
        r = n >= 5 || n < 0.5,
        i = 0;
      for (let e = 0; e < 2; e++) {
        let n = (((t - this.offset[e]) % Rn) + Rn) % Rn,
          a = r && n < Un,
          o = this.nose(e, n),
          s = e === 0 ? 1 : -1;
        for (let t = 0; t < 6; t++) {
          let n = o - s * (t * Vn + Bn / 2),
            r = a && n + Bn / 2 > -0.4 && n - Bn / 2 < dn + 0.4,
            c = this.ids[e][t];
          if (r) {
            let [e, r] = fn(n),
              a = t === 5 ? -s : s;
            (ge(this.m16, e, Z.rail, r, Q.x * a, Q.z * a),
              this.batch.mesh.setMatrixAt(c, Gn.fromArray(this.m16)),
              i++);
          }
          r !== this.shown[e][t] &&
            ((this.shown[e][t] = r), this.batch.setOn(c, r));
        }
      }
      this.visibleCars = i;
    }
    seek(e, t, n) {
      let r = t >= 0 ? 0 : 1,
        i = n * dn,
        a = r === 0 ? i + Cn / 2 : i - Cn / 2,
        o = r === 0 ? (a + Cn + Hn) / zn : (dn + Cn + Hn - a) / zn;
      return ((this.offset[r] = e.time.elapsed - o), !0);
    }
  },
  Gn = new t(),
  Kn = e({
    init: () => $n,
    start: () => er,
    unload: () => nr,
    update: () => tr,
  }),
  $ = null,
  qn = !1,
  Jn = !1,
  Yn = -1,
  Xn = Error(`kanda: dropped while building`),
  Zn = (e, [t, n]) => (n > 24 ? e >= t || e < n - 24 : e >= t && e < n);
function Qn(e) {
  for (let [t, n] of Object.entries(ae))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[kanda] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
