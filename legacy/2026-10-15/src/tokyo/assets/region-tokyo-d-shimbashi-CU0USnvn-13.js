// tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn 13 — math
// Lines 3785-4025 of readable/tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function Kt(e, t) {
  let n = t.white();
  for (let [t, r] of [
    [`tare-a`, 3108776],
    [`tare-b`, 4885066],
    [`tare-c`, 13157560],
  ]) {
    let i = e.begin();
    (i.setMaterial(0.6, 0.4, 0, 0),
      P(i, 9080466),
      L(i, -0.55, 0.3, -1.15, 0.55, 0.52, 0.55, n),
      P(i, 5922402),
      L(i, -0.57, 0.52, -1.15, 0.57, 0.62, -1.1, n),
      i.setMaterial(0.45, 0.3, 0, 0),
      P(i, r),
      z(i, 0, 0.95, 0.22, 1.12, 0.42, n, 12),
      P(i, 1710618),
      z(i, 0, 0.95, 1.12, 1.17, 0.3, n, 12),
      z(i, 0, 0.95, 1.17, 1.32, 0.04, n, 6),
      i.setMaterial(0.8, 0, 0, 0),
      P(i, 1315860),
      V(i, 0, 0.17, 1, 1, 0, 0.16, 0.17, n, 8, !0));
    for (let e of [-1, 1])
      V(i, e * 0.48, 0.17, -0.8, 1, 0, 0.12, 0.17, n, 8, !0);
    (i.setMaterial(0.85, 0, 0, 0),
      P(i, 16053490),
      L(i, -0.4, 0.52, -0.95, 0.1, 0.74, -0.55, n),
      L(i, -0.4, 0.74, -0.95, 0.1, 0.96, -0.55, n),
      e.w,
      e.end(`kit:${t}`, 0, 0, 0));
  }
  {
    let r = e.begin(),
      i = t.uv(`mkt:flag`);
    (r.setMaterial(0.6, 0.5, 0, 0), P(r, 9080466));
    for (let e of [1, -1])
      (B(r, 0, 6.05, 0, 0, 6.05, e * 0.85, 0.022, n),
        B(r, 0, 4.05, 0, 0, 4.05, e * 0.85, 0.022, n));
    (r.setMaterial(0.8, 0, 0.12, 1), P(r, 16777215));
    for (let e of [1, -1]) {
      let t = e > 0 ? 0.16 : -0.82,
        n = e > 0 ? 0.82 : -0.16;
      (F(r, 0.012, n, 0.012, t, 4, 6, i), F(r, -0.012, t, -0.012, n, 4, 6, i));
    }
    e.end(`kit:mkt-flag`, 0, 0, 0);
  }
  for (let r of [`manners`, `cal`]) {
    let i = e.begin();
    (i.setMaterial(0.6, 0.4, 0, 0),
      P(i, 9080466),
      z(i, 0, 0, 0, 1.9, 0.035, n, 6),
      i.setMaterial(0.7, 0, 0.05, 1),
      P(i, 16777215),
      R(
        i,
        0,
        0.05,
        1.1,
        1.9,
        0.32,
        0.02,
        0,
        1,
        n,
        t.uv(`mkt:${r}`),
        t.uv(`mkt:${r}`),
      ),
      e.end(`kit:poster-${r}`, 0, 0, 0));
  }
}
function qt(e) {
  let t = [],
    r = e.plan,
    a = g,
    o = new n(i(`shim-mkt-kit`, 1)),
    s = [
      [389.4, 400, 0, 1],
      [380.4, 452, 0, -1],
      [389.2, 530, 0, 1],
      [a.monzeki.x0 + 1.5, 420, 0, -1],
      [a.higashi.x0 + 1.5, 446, 0, 1],
      [360, 492.4, 1, 0],
      [420, 483.6, -1, 0],
    ];
  for (let [e, n, i, a] of s)
    t.push({
      model: `tare-${`abc`[Math.floor(o.next() * 3)]}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: i,
      fz: a,
      range: 140,
      group: `mktOpen`,
    });
  for (let [e, n] of [
    [431.5, 580.2],
    [435.6, 580.2],
    [439.7, 580.2],
  ])
    t.push({
      model: `tare-${`abc`[Math.floor(o.next() * 3)]}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: 0,
      fz: -1,
      range: 120,
    });
  let c = p(r);
  for (let [e, n, i, a] of [
    [`shin-ohashi-tsukiji`, 1, 372, 560],
    [`harumi`, 1, 332, 444],
  ]) {
    let o = r.roads.find((t) => t.id === e);
    if (!o) continue;
    let s = c.nodesOf(o);
    for (let e = 0; e + 1 < s.length; e++) {
      let l = c.primaryLights(o, s[e], s[e + 1], n);
      if (l && l.kind === `tall`)
        for (let e of l.ts) {
          if (e < i || e > a) continue;
          let s = n * (o.halfWidth + 0.55),
            c = o.axis === `z` ? o.at + s : e,
            l = o.axis === `z` ? e : o.at + s;
          t.push({
            model: `mkt-flag`,
            x: c,
            y: r.groundHeight(c, l),
            z: l,
            fx: o.axis === `z` ? -n : 0,
            fz: o.axis === `z` ? 0 : -n,
            range: 260,
          });
        }
    }
  }
  for (let [e, n, i, o] of [
    [a.monzeki.x0 - 0.3, a.west.z0 + 0.4, `manners`, -1],
    [a.higashi.x1 + 0.3, a.east.z0 + 0.4, `manners`, -1],
    [a.monzeki.x1 + 0.3, a.west.z1 - 0.4, `cal`, 1],
    [a.monzeki.x0 - 0.3, a.south.z0 + 0.4, `manners`, -1],
  ])
    t.push({
      model: `poster-${i}`,
      x: e,
      y: r.groundHeight(e, n),
      z: n,
      fx: 0,
      fz: o,
      range: 90,
    });
  return t;
}
async function Jt(e, t, n, r, i, a) {
  let o = 0;
  for (let s of r) {
    if (!s.units.length) continue;
    let r = 1 / 0,
      c = 1 / 0,
      l = -1 / 0,
      u = -1 / 0,
      d = 0;
    for (let e of s.units)
      ((r = Math.min(r, e.x0)),
        (c = Math.min(c, e.z0)),
        (l = Math.max(l, e.x1)),
        (u = Math.max(u, e.z1)),
        (d = Math.max(d, e.h)));
    let f = (r + l) / 2,
      p = (c + u) / 2,
      m = n.plan.groundHeight(f, p),
      h = e.begin();
    for (let e of s.units) zt(h, t, e, m);
    (e.end(`mkt-${s.id}`, f, p, 480), (h = e.begin()));
    for (let e of s.units) Ut(h, t, e, m, i);
    (e.end(`mkt-${s.id}-open`, f, p, 190, `mktOpen`), (h = e.begin()));
    for (let e of s.units) Wt(h, t, e, m);
    e.end(`mkt-${s.id}-shut`, f, p, 190, `mktClosed`);
    let g = null,
      _ = 0,
      v = 0,
      y = 0,
      b = 0,
      x = 0;
    for (let t of s.units)
      g && Math.min(Math.abs(t.x0 - y), Math.abs(t.z0 - b)) < 0.05
        ? ((y = Math.max(y, t.x1)),
          (b = Math.max(b, t.z1)),
          (x = Math.max(x, t.h)))
        : (g && e.box(_, v, y, b, m, m + x),
          (g = t),
          (_ = t.x0),
          (v = t.z0),
          (y = t.x1),
          (b = t.z1),
          (x = t.h));
    (g && e.box(_, v, y, b, m, m + x), (o += s.units.length), await a());
  }
  return (Gt(e, t, n), o);
}
function Yt(e) {
  (e.need(`kyu:pav`, 192, 240, Me),
    e.need(`kyu:arcade`, 256, 160, Ne),
    e.need(`kyu:sign`, 288, 48, Pe),
    e.need(`kyu:hours`, 192, 64, Fe),
    e.need(`kyu:zero`, 40, 128, Ie),
    e.need(`kyu:site`, 64, 160, Le));
}
function Xt(e, t, n, r, i, a, o, s) {
  (e.setMaterial(0.5, 0.5, 0, 0),
    P(e, 9418146),
    L(e, n - 0.35, o, r - 0.35, i + 0.35, o + 0.32, a + 0.35, t),
    e.setMaterial(0.75, 0.2, 0, 0),
    P(e, 4080198));
  let c = n - 0.3,
    l = r - 0.3,
    u = i + 0.3,
    d = a + 0.3,
    f = o + 0.32,
    p = f + s,
    m = u - c >= d - l,
    h = (m ? d - l : u - c) / 2;
  if (m) {
    let n = c + h,
      r = u - h,
      i = (l + d) / 2;
    (e.quad(c, f, l, n, p, i, r, p, i, u, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, d, r, p, i, n, p, i, c, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, l, r, p, i, r, p, i, u, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, d, n, p, i, n, p, i, c, f, l, t.u0, t.v0, t.u1, t.v1));
  } else {
    let n = l + h,
      r = d - h,
      i = (c + u) / 2;
    (e.quad(u, f, l, i, p, n, i, p, r, u, f, d, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, d, i, p, r, i, p, n, c, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(c, f, l, i, p, n, i, p, n, u, f, l, t.u0, t.v0, t.u1, t.v1),
      e.quad(u, f, d, i, p, r, i, p, r, c, f, d, t.u0, t.v0, t.u1, t.v1));
  }
}
