// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 08 — path
// Lines 1912-2140 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
function Pe(e) {
  let t = o(e)?.byId.get(`jr-main`);
  if (!t) return null;
  let n = t.path.project(J.x, J.z).s,
    r = [],
    a = [],
    s = [],
    c = { x: 0, z: 0 },
    l = { x: 0, z: 0 },
    u = { x: 0, z: 0 },
    d = 0,
    f = 1 / 0,
    p = -1 / 0;
  for (let e = n - Ae; e + Y <= n + Ae + 0.01; e += Y) {
    let n = !0;
    for (let r = Math.floor(e); r <= Math.ceil(e + Y); r++)
      t.kinds[r] !== i.Frame && (n = !1);
    if (!n) continue;
    ((f = Math.min(f, e)), (p = Math.max(p, e + Y)));
    let a = t.deck.at(e + Y / 2) - 1.95;
    (t.path.pos(e, 0, c),
      t.path.pos(e + Y, 0, l),
      s.push({
        cx: (c.x + l.x) / 2,
        cz: (c.z + l.z) / 2,
        hx: Y / 2,
        hz: (t.edge1.at(e) - t.edge0.at(e)) / 2 - 0.4,
        heading: Math.atan2(l.z - c.z, l.x - c.x),
        top: a,
      }));
    for (let n of [-1, 1]) {
      let i = n < 0 ? t.edge0.at(e) + 0.35 : t.edge1.at(e) - 0.35;
      (t.path.pos(e, i, c),
        t.path.pos(e + Y, i, l),
        t.path.pos(e + Y / 2, 0, u));
      let o = c.x,
        s = c.z,
        f = l.x,
        p = l.z,
        m = (o + f) / 2 - u.x,
        h = (s + p) / 2 - u.z;
      -(p - s) * m + (f - o) * h < 0 && ([o, s, f, p] = [f, p, o, s]);
      let g = Math.hypot(m, h) || 1;
      r.push({
        ax: o,
        az: s,
        bx: f,
        bz: p,
        nx: m / g,
        nz: h / g,
        top: a,
        craft: X[d++ % X.length],
      });
    }
  }
  if (!r.length) return null;
  for (let [e, n] of [
    [f, -1],
    [p, 1],
  ]) {
    (t.path.pos(e, t.edge0.at(e) + 0.35, c),
      t.path.pos(e, t.edge1.at(e) - 0.35, l),
      t.path.pos(e - n * 2, 0, u));
    let r = c.x,
      i = c.z,
      o = l.x,
      s = l.z,
      d = (r + o) / 2 - u.x,
      f = (i + s) / 2 - u.z;
    (-(s - i) * d + (o - r) * f < 0 && ([r, i, o, s] = [o, s, r, i]),
      a.push({ ax: r, az: i, bx: o, bz: s, top: t.deck.at(e) - 1.95 }));
  }
  return { bays: r, ends: a, cores: s };
}
function Fe(e, t, n) {
  let r = t.white();
  for (let i of n.bays) {
    let n = i.bx - i.ax,
      a = i.bz - i.az,
      o = (e) => [i.ax + n * e, i.az + a * e];
    (e.setMaterial(0.7, 0, 0, 0), w(e, 16777215));
    let [s, c] = o(0.06),
      [u, d] = o(0.94);
    (l(e, i.ax, i.az, s, c, 0.15, i.top, t.uv(`ar-wall`)),
      l(e, u, d, i.bx, i.bz, 0.15, i.top, t.uv(`ar-wall`)),
      l(e, s, c, u, d, 3.3, i.top, t.uv(`ar-fascia`)),
      e.setMaterial(0.5, 0, 0.45, q | 16));
    let [f, p] = o(0.3),
      [m, h] = o(0.7);
    (l(
      e,
      f + i.nx * 0.03,
      p + i.nz * 0.03,
      m + i.nx * 0.03,
      h + i.nz * 0.03,
      3.45,
      3.95,
      t.uv(`ar-plate-${i.craft}`),
    ),
      e.setMaterial(0.5, 0.6, 0, 0),
      w(e, 2763306));
    for (let t of [0.06, 0.37, 0.63, 0.94]) {
      let [n, a] = o(t);
      e.box(
        n + i.nx * 0.05,
        1.725,
        a + i.nz * 0.05,
        0.05,
        1.575,
        0.05,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      );
    }
    let [g, _] = o(0.06),
      [v, y] = o(0.94);
    l(
      e,
      g + i.nx * 0.06,
      _ + i.nz * 0.06,
      v + i.nx * 0.06,
      y + i.nz * 0.06,
      3.22,
      3.3,
      r,
    );
  }
  for (let r of n.ends) {
    (e.setMaterial(0.7, 0, 0, 0),
      w(e, 16777215),
      l(e, r.ax, r.az, r.bx, r.bz, 0.15, r.top, t.uv(`ar-wall`)),
      e.setMaterial(0.5, 0, 0.45, 2));
    let n = (r.ax + r.bx) / 2,
      i = (r.az + r.bz) / 2,
      a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1,
      c = a / s,
      u = o / s,
      d = -u,
      f = c;
    l(
      e,
      n - c * 2.4 + d * 0.04,
      i - u * 2.4 + f * 0.04,
      n + c * 2.4 + d * 0.04,
      i + u * 2.4 + f * 0.04,
      1.4,
      5,
      t.uv(`ar-sign`),
    );
  }
}
var Ie = (e) => [
  ...X.map((t) => ({
    name: `ar-open-${t}`,
    write: (n) => {
      (n.setMaterial(0.3, 0.1, 0.45, q | 16),
        w(n, 16777215),
        l(n, -1.98, -0.1, Y * 0.44, -0.1, 0.02, 3.05, e.uv(`ar-in-${t}`)));
    },
  })),
  ...[`ar-closed`, `ar-closed-wed`].map((t) => ({
    name: t === `ar-closed` ? `ar-shut` : `ar-shut-wed`,
    write: (n) => {
      (n.setMaterial(0.3, 0.1, 0, 16),
        w(n, 16777215),
        l(n, -1.98, -0.1, Y * 0.44, -0.1, 0.02, 3.05, e.uv(t)));
    },
  })),
];
function Le(e, t, n) {
  let r = Pe(e);
  if (!r) return;
  n.uniques.push({
    name: `artisan-arcade`,
    write: (e) => Fe(e, t, r),
    cx: J.x,
    cz: J.z,
    range: 420,
  });
  let i = (e) => e.wd !== 3 && e.h >= 11 && e.h < 19;
  for (let e of r.cores)
    n.obbs.push({
      cx: e.cx,
      cz: e.cz,
      hx: e.hx,
      hz: e.hz,
      heading: e.heading,
      y0: 0,
      y1: e.top,
    });
  for (let e of r.bays) {
    let t = (e.ax + e.bx) / 2,
      r = (e.az + e.bz) / 2;
    (n.instances.push({
      model: `ar-open-${e.craft}`,
      x: t,
      y: 0.15,
      z: r,
      fx: e.nx,
      fz: e.nz,
      range: 200,
      when: i,
    }),
      n.instances.push({
        model: `ar-shut`,
        x: t,
        y: 0.15,
        z: r,
        fx: e.nx,
        fz: e.nz,
        range: 200,
        when: (e) => e.wd !== 3 && !i(e),
      }),
      n.instances.push({
        model: `ar-shut-wed`,
        x: t,
        y: 0.15,
        z: r,
        fx: e.nx,
        fz: e.nz,
        range: 200,
        when: (e) => e.wd === 3,
      }));
  }
}
