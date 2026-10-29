// tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6 10 — floors
// Lines 2936-3257 of readable/tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6.pretty.js (statement-aligned).
function q(e, t, n, r, i, a, o, s, c = {}) {
  let l = [],
    u = [],
    d = n;
  for (let [e, t] of (c.gaps ?? []).slice().sort((e, t) => e[0] - t[0]))
    (e > d && u.push([d, e]), (d = Math.max(d, t)));
  r > d && u.push([d, r]);
  let [f, p] = c.floors ?? [1, 3];
  for (let [e, n] of u) {
    let r = e;
    for (; r < n - 0.5;) {
      let u = o.range(3.8, 7.2);
      n - (r + u) < 3.2 && (u = n - r);
      let d = Ft(o, s),
        m = Math.max(
          f,
          Math.min(
            p,
            o.weighted([
              [1, 0.22],
              [2, 0.5],
              [3, 0.22],
              [4, 0.04],
              [5, 0.02],
            ]),
          ),
        ),
        h = t === `W` ? [i, i + a] : t === `E` ? [i - a, i] : null,
        g = t === `N` ? [i, i + a] : t === `S` ? [i - a, i] : null,
        _ = {
          x0: h ? h[0] : r,
          x1: h ? h[1] : r + u,
          z0: g ? g[0] : r,
          z1: g ? g[1] : r + u,
          face: t,
          trade: d.trade,
          name: d.name,
          floors: m,
          h: Pt(m),
          fac: Math.floor(o.next() * Nt),
          striped: o.next() < 0.45,
          shut: Math.floor(o.next() * 3),
          lane: !!c.lane,
          vacant: o.next() < 0.07,
          endMin: r === e,
          endMax: !1,
        };
      (l.push(_), (r += u));
    }
    l.length && (l[l.length - 1].endMax = !0);
  }
  return { id: e, units: l };
}
function It() {
  let e = [],
    t = h;
  {
    let i = t.west,
      a = t.monzeki,
      o = new n(r(`shim-mkt`, `west`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      q(`w-harumi`, `N`, i.x0 + 9.8, i.x1, i.z0, c, o, s, {
        floors: [3, 6],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        q(
          `w-shinohashi`,
          `W`,
          i.z0 + c,
          i.z1 - l,
          i.x0,
          a.x0 - i.x0 - 8,
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        q(`w-monzeki-w`, `E`, i.z0 + c, i.z1 - l, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        q(`w-monzeki-e`, `W`, i.z0 + c, i.z1 - l, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        q(`w-naka`, `E`, i.z0 + c, i.z1 - l, i.x1, i.x1 - (a.x1 + 10), o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        q(`w-namiyoke`, `S`, i.x0, i.x1, i.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let i = t.east,
      a = t.higashi,
      o = new n(r(`shim-mkt`, `east`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      q(`e-harumi`, `N`, i.x0, i.x1, i.z0, c, o, s, {
        floors: [3, 5],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        q(`e-naka`, `W`, i.z0 + c, i.z1 - l, i.x0, a.x0 - i.x0 - 11.5, o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        q(`e-higashi-w`, `E`, i.z0 + c, i.z1 - l, a.x0, 11.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        q(`e-higashi-e`, `W`, i.z0 + c, i.z1 - l, a.x1, 12.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        q(
          `e-shijo`,
          `E`,
          i.z0 + c,
          i.z1 - l,
          i.x1,
          i.x1 - (a.x1 + 12.5),
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        q(`e-namiyoke`, `S`, i.x0, i.x1, i.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let i = t.south,
      a = t.monzeki,
      o = new n(r(`shim-mkt`, `south`)),
      s = [];
    (e.push(
      q(`s-namiyoke`, `N`, i.x0, i.x1 - 10, i.z0, 8, o, s, {
        floors: [1, 3],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        q(`s-shinohashi`, `W`, i.z0 + 8, i.z1, i.x0, a.x0 - i.x0 - 8, o, s, {
          floors: [2, 3],
        }),
      ),
      e.push(
        q(`s-monzeki-w`, `E`, i.z0 + 8, i.z1, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        q(`s-monzeki-e`, `W`, i.z0 + 8, i.z1, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ));
    let c = q(`s-naka`, `E`, i.z0, i.z1, i.x1, i.x1 - (a.x1 + 10), o, s, {
      floors: [1, 3],
    });
    e.push(c);
    let l = c.units[0];
    ((l.trade = Ke(`don`)),
      (l.name = `shim.mkt.horumon`),
      (l.special = `horumon`),
      (l.vacant = !1),
      (l.floors = 2),
      (l.h = Pt(2)));
  }
  {
    let i = t.strip,
      a = new n(r(`shim-mkt`, `strip`));
    e.push(
      q(`strip-naka`, `W`, i.z0, i.z1, i.x0, i.x1 - i.x0, a, [], {
        floors: [1, 3],
      }),
    );
  }
  let i = e[0],
    a = i.units;
  (a.length > 2 && a[0].x1 - a[0].x0 < 8 && (a[0].x1 = a.splice(1, 1)[0].x1),
    a.length > 2 &&
      a[a.length - 1].x1 - a[a.length - 1].x0 < 8 &&
      (a[a.length - 1].x0 = a.splice(a.length - 2, 1)[0].x0),
    (a[a.length - 1].endMax = !0));
  let o = i.units[i.units.length - 1];
  ((o.trade = Ke(`sushi`)),
    (o.name = `shim.mkt.sushi`),
    (o.special = `sushi`),
    (o.vacant = !1),
    (o.floors = Math.max(o.floors, 4)),
    (o.h = Pt(o.floors)));
  let s = i.units[0];
  return ((s.special = `gate`), (s.vacant = !1), e);
}
function Lt(e, t) {
  let n = new Set();
  for (let r of t)
    for (let t of r.units) {
      if (t.special === `sushi` || t.special === `horumon`) continue;
      let r = `mkt:board:${t.name}`;
      n.has(r) ||
        (n.add(r),
        e.need(r, 320, 64, qe(t.trade, t.name)),
        e.need(`mkt:val:${t.name}`, 256, 32, Ye(t.trade, t.name)));
    }
  for (let t of Ge)
    (e.need(`mkt:goods:${t.id}`, 256, 128, Xe(t.id)),
      e.need(`mkt:int:${t.id}`, 256, 144, Ze(t)),
      e.need(`mkt:awn:${t.id}:s`, 64, 64, Je(t.awn[0], t.awn[1], !0)),
      e.need(`mkt:awn:${t.id}:p`, 32, 32, Je(t.awn[0], t.awn[1], !1)),
      e.need(`mkt:nobori:${t.id}`, 48, 160, dt(t)));
  for (let t = 0; t < Nt; t++) e.need(`mkt:fac:${t}`, 224, 160, Qe(t));
  for (let t = 0; t < 3; t++) e.need(`mkt:shut:${t}`, 160, 128, $e(t));
  (e.need(`mkt:sign`, 512, 128, et),
    e.need(`mkt:flag`, 64, 192, tt),
    e.need(`mkt:manners`, 96, 128, nt),
    e.need(`mkt:cal`, 128, 96, rt),
    e.need(`sushi:board`, 512, 112, it),
    e.need(`sushi:man`, 128, 192, at),
    e.need(`horumon:board`, 320, 72, ot),
    e.need(`uogashi:sign`, 512, 80, st),
    e.need(`uogashi:fac`, 256, 192, ct),
    e.need(`uogashi:note`, 192, 96, lt));
}
function Rt(e) {
  switch (e.face) {
    case `W`:
      return {
        lx: e.x0,
        lz: e.z0,
        rx: e.x0,
        rz: e.z1,
        nx: -1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `E`:
      return {
        lx: e.x1,
        lz: e.z1,
        rx: e.x1,
        rz: e.z0,
        nx: 1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `N`:
      return {
        lx: e.x1,
        lz: e.z0,
        rx: e.x0,
        rz: e.z0,
        nx: 0,
        nz: -1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
    default:
      return {
        lx: e.x0,
        lz: e.z1,
        rx: e.x1,
        rz: e.z1,
        nx: 0,
        nz: 1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
  }
}
var J = (e, t, n) => [
  e.lx + (e.rx - e.lx) * t + e.nx * n,
  e.lz + (e.rz - e.lz) * t + e.nz * n,
];
function Y(e, t, n, r, i, a, o, s) {
  let [c, l] = J(t, n, i),
    [u, d] = J(t, r, i);
  P(e, c, l, u, d, a, o, s);
}
function X(e, t, n, r, i, a, o, s, c, l = !1) {
  let [u, d] = J(t, n, i),
    [f, p] = J(t, r, i),
    [m, h] = J(t, r, o),
    [g, _] = J(t, n, o);
  l
    ? e.quad(u, a, d, f, a, p, m, s, h, g, s, _, c.u0, c.v0, c.u1, c.v1)
    : e.quad(g, s, _, m, s, h, f, a, p, u, a, d, c.u0, c.v0, c.u1, c.v1);
}
var zt = [
  14209732, 13222578, 12171440, 14077368, 11052186, 13617340, 14736591,
  11576976, 10133664, 11050122,
];
