// tokyo/assets/region-tokyo-A7LxHjud 139 — push
// Lines 59604-59782 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Vfe() {
  let e = Gb.w,
    t = Gb.s,
    n = Gb.ne,
    r = 4e3,
    i = e.minX - qb,
    a = e.minZ - qb - 2,
    o = Wb.minZ - qb - 2,
    s = n.minZ - qb - 2,
    c = e.maxZ + qb + 2,
    l = Wb.maxZ + qb + 2,
    u = Jp.farX - Kb,
    d = Jp.upFarX - Kb,
    f = Wb.maxX + 15;
  return [
    [-4e3, -4e3, i, r],
    [-4e3, -4e3, Wb.minX - qb, a],
    [Wb.minX - qb, -4e3, n.minX - 5, o],
    [n.minX - 5, -4e3, r, s],
    [d, -4e3, r, n.maxZ + qb + 2],
    [f, n.maxZ + qb + 2, r, Jp.northZ],
    [u, Jp.northZ, r, r],
    [t.maxX + qb, l, r, r],
    [-4e3, c, t.maxX + qb, r],
  ];
}
function Hfe(e, t) {
  let [n, r, i, a] = e,
    [o, s, c, l] = t;
  if (o >= i || c <= n || s >= a || l <= r) return [e];
  let u = [];
  (s > r && u.push([n, r, i, s]), l < a && u.push([n, l, i, a]));
  let d = Math.max(r, s),
    f = Math.min(a, l);
  return (o > n && u.push([n, d, o, f]), c < i && u.push([c, d, i, f]), u);
}
function Jb() {
  let e = Vfe();
  for (let t of yc) {
    let n = [t.minX - qb, t.minZ - qb - 2, t.maxX + qb, t.maxZ + qb + 2];
    e = e.flatMap((e) => Hfe(e, n));
  }
  return e.filter(([e, t, n, r]) => n - e > 0.01 && r - t > 0.01);
}
function Yb() {
  let e = Jb(),
    t = 3800,
    n = (e) =>
      [...new Set(e.map((e) => Math.max(-3800, Math.min(t, e))))].sort(
        (e, t) => e - t,
      ),
    r = n([-3800, t, ...e.flatMap((e) => [e[0], e[2]])]),
    i = n([-3800, t, ...e.flatMap((e) => [e[1], e[3]])]),
    a = r.length - 1,
    o = i.length - 1,
    s = new Uint8Array(a * o);
  for (let t = 0; t < o; t++)
    for (let n = 0; n < a; n++) {
      let o = (r[n] + r[n + 1]) / 2,
        c = (i[t] + i[t + 1]) / 2;
      s[t * a + n] = +!e.some(
        ([e, t, n, r]) => o > e && o < n && c > t && c < r,
      );
    }
  let c = r.findIndex((e, t) => t < a && e <= 0 && r[t + 1] > 0),
    l = i.findIndex((e, t) => t < o && e <= 0 && i[t + 1] > 0),
    u = new Uint8Array(a * o),
    d = [l * a + c];
  for (; d.length;) {
    let e = d.pop();
    if (u[e] || !s[e]) continue;
    u[e] = 1;
    let t = e % a,
      n = (e - t) / a;
    (t > 0 && d.push(e - 1),
      t + 1 < a && d.push(e + 1),
      n > 0 && d.push(e - a),
      n + 1 < o && d.push(e + a));
  }
  let f = (e, t) => e >= 0 && t >= 0 && e < a && t < o && u[t * a + e] === 1,
    p = new Map(),
    m = (e, t) => `${e},${t}`;
  for (let e = 0; e < o; e++)
    for (let t = 0; t < a; t++)
      f(t, e) &&
        (f(t, e - 1) || p.set(m(t, e), [t + 1, e]),
        f(t + 1, e) || p.set(m(t + 1, e), [t + 1, e + 1]),
        f(t, e + 1) || p.set(m(t + 1, e + 1), [t, e + 1]),
        f(t - 1, e) || p.set(m(t, e + 1), [t, e]));
  let h = [],
    g = [...p.keys()]
      .map((e) => e.split(`,`).map(Number))
      .sort((e, t) => e[1] - t[1] || e[0] - t[0]);
  for (let e of g) {
    if (!p.has(m(e[0], e[1]))) continue;
    let t = [],
      n = e;
    for (let s = 0; s < 4 * a * o + 4; s++) {
      t.push([r[n[0]], i[n[1]]]);
      let a = m(n[0], n[1]),
        o = p.get(a);
      if ((p.delete(a), !o || ((n = o), n[0] === e[0] && n[1] === e[1]))) break;
    }
    let s = [];
    for (let e = 0; e < t.length; e++) {
      let n = t[(e + t.length - 1) % t.length],
        r = t[e],
        i = t[(e + 1) % t.length];
      (n[0] === r[0] && r[0] === i[0]) ||
        (n[1] === r[1] && r[1] === i[1]) ||
        s.push(r);
    }
    s.length >= 4 && h.push(s);
  }
  return h;
}
function Ufe() {
  let e = Ip.inner,
    t = 1.5,
    n = Ab;
  return [
    [e.minX + t, e.minZ + t, n.minX, e.maxZ - t],
    [e.minX + t, n.maxZ, e.maxX - 2 - t, e.maxZ - t],
  ];
}
var Wfe = class {
  ctx;
  slabs = Jb();
  inner = Ufe();
  warnT = 0;
  constructor(e) {
    this.ctx = e;
    for (let [t, n, r, i] of [...this.slabs, ...this.inner])
      e.statics.addBox(t, n, r, i, Rfe, zfe, `world-edge`);
  }
  distance(e, t, n = this.slabs) {
    let r = 1 / 0;
    for (let [i, a, o, s] of n) {
      let n = Math.max(i - e, 0, e - o),
        c = Math.max(a - t, 0, t - s),
        l =
          n === 0 && c === 0
            ? -Math.min(e - i, o - e, t - a, s - t)
            : Math.hypot(n, c);
      l < r && (r = l);
    }
    return r;
  }
  update(e) {
    if (((this.warnT -= e), this.warnT > 0)) return;
    let t = this.ctx.player?.position;
    if (t) {
      if (((this.warnT = 0.5), this.distance(t.x, t.z, this.inner) <= 6)) {
        ((this.warnT = 12),
          this.ctx.events.emit(`notify`, {
            text: {
              zh: `皇居內苑：非開放區域（東御苑由大手門入園）`,
              en: `Imperial Palace inner grounds — closed to the public (the East Gardens open at Ote-mon)`,
              ja: `皇居内：立入禁止（東御苑は大手門から）`,
            },
            duration: 4,
            kind: `info`,
          }));
        return;
      }
      this.distance(t.x, t.z) > Bfe ||
        t.y > this.ctx.plan.groundHeight(t.x, t.z) + 4 ||
        ((this.warnT = 9),
        this.ctx.events.emit(`notify`, {
          text: { zh: `前方無路，請迴轉`, en: `Edge of the map — turn back` },
          duration: 3.5,
          kind: `info`,
        }));
    }
  }
};
function Gfe(e) {
  return new Wfe(e);
}
