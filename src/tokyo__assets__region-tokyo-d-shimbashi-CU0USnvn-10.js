// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 10 — floors
// Lines 2936-3257 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function J(e, t, n, r, i, a, o, s, c = {}) {
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
      let d = Pt(o, s),
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
          h: Nt(m),
          fac: Math.floor(o.next() * Mt),
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
function Ft() {
  let e = [],
    t = g;
  {
    let r = t.west,
      a = t.monzeki,
      o = new n(i(`shim-mkt`, `west`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      J(`w-harumi`, `N`, r.x0 + 9.8, r.x1, r.z0, c, o, s, {
        floors: [3, 6],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(
          `w-shinohashi`,
          `W`,
          r.z0 + c,
          r.z1 - l,
          r.x0,
          a.x0 - r.x0 - 8,
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        J(`w-monzeki-w`, `E`, r.z0 + c, r.z1 - l, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`w-monzeki-e`, `W`, r.z0 + c, r.z1 - l, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`w-naka`, `E`, r.z0 + c, r.z1 - l, r.x1, r.x1 - (a.x1 + 10), o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        J(`w-namiyoke`, `S`, r.x0, r.x1, r.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let r = t.east,
      a = t.higashi,
      o = new n(i(`shim-mkt`, `east`)),
      s = [],
      c = 11.5,
      l = 9.5;
    (e.push(
      J(`e-harumi`, `N`, r.x0, r.x1, r.z0, c, o, s, {
        floors: [3, 5],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(`e-naka`, `W`, r.z0 + c, r.z1 - l, r.x0, a.x0 - r.x0 - 11.5, o, s, {
          floors: [1, 3],
        }),
      ),
      e.push(
        J(`e-higashi-w`, `E`, r.z0 + c, r.z1 - l, a.x0, 11.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`e-higashi-e`, `W`, r.z0 + c, r.z1 - l, a.x1, 12.5, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(
          `e-shijo`,
          `E`,
          r.z0 + c,
          r.z1 - l,
          r.x1,
          r.x1 - (a.x1 + 12.5),
          o,
          s,
          { floors: [2, 4] },
        ),
      ),
      e.push(
        J(`e-namiyoke`, `S`, r.x0, r.x1, r.z1, l, o, s, {
          floors: [1, 3],
          gaps: [[a.x0, a.x1]],
        }),
      ));
  }
  {
    let r = t.south,
      a = t.monzeki,
      o = new n(i(`shim-mkt`, `south`)),
      s = [];
    (e.push(
      J(`s-namiyoke`, `N`, r.x0, r.x1 - 10, r.z0, 8, o, s, {
        floors: [1, 3],
        gaps: [[a.x0, a.x1]],
      }),
    ),
      e.push(
        J(`s-shinohashi`, `W`, r.z0 + 8, r.z1, r.x0, a.x0 - r.x0 - 8, o, s, {
          floors: [2, 3],
        }),
      ),
      e.push(
        J(`s-monzeki-w`, `E`, r.z0 + 8, r.z1, a.x0, 8, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ),
      e.push(
        J(`s-monzeki-e`, `W`, r.z0 + 8, r.z1, a.x1, 10, o, s, {
          lane: !0,
          floors: [1, 2],
        }),
      ));
    let c = J(`s-naka`, `E`, r.z0, r.z1, r.x1, r.x1 - (a.x1 + 10), o, s, {
      floors: [1, 3],
    });
    e.push(c);
    let l = c.units[0];
    ((l.trade = Ge(`don`)),
      (l.name = `shim.mkt.horumon`),
      (l.special = `horumon`),
      (l.vacant = !1),
      (l.floors = 2),
      (l.h = Nt(2)));
  }
  {
    let r = t.strip,
      a = new n(i(`shim-mkt`, `strip`));
    e.push(
      J(`strip-naka`, `W`, r.z0, r.z1, r.x0, r.x1 - r.x0, a, [], {
        floors: [1, 3],
      }),
    );
  }
  let r = e[0],
    a = r.units;
  (a.length > 2 && a[0].x1 - a[0].x0 < 8 && (a[0].x1 = a.splice(1, 1)[0].x1),
    a.length > 2 &&
      a[a.length - 1].x1 - a[a.length - 1].x0 < 8 &&
      (a[a.length - 1].x0 = a.splice(a.length - 2, 1)[0].x0),
    (a[a.length - 1].endMax = !0));
  let o = r.units[r.units.length - 1];
  ((o.trade = Ge(`sushi`)),
    (o.name = `shim.mkt.sushi`),
    (o.special = `sushi`),
    (o.vacant = !1),
    (o.floors = Math.max(o.floors, 4)),
    (o.h = Nt(o.floors)));
  let s = r.units[0];
  return ((s.special = `gate`), (s.vacant = !1), e);
}
function It(e, t) {
  let n = new Set();
  for (let r of t)
    for (let t of r.units) {
      if (t.special === `sushi` || t.special === `horumon`) continue;
      let r = `mkt:board:${t.name}`;
      n.has(r) ||
        (n.add(r),
        e.need(r, 320, 64, Ke(t.trade, t.name)),
        e.need(`mkt:val:${t.name}`, 256, 32, Je(t.trade, t.name)));
    }
  for (let t of We)
    (e.need(`mkt:goods:${t.id}`, 256, 128, Ye(t.id)),
      e.need(`mkt:int:${t.id}`, 256, 144, Xe(t)),
      e.need(`mkt:awn:${t.id}:s`, 64, 64, qe(t.awn[0], t.awn[1], !0)),
      e.need(`mkt:awn:${t.id}:p`, 32, 32, qe(t.awn[0], t.awn[1], !1)),
      e.need(`mkt:nobori:${t.id}`, 48, 160, ut(t)));
  for (let t = 0; t < Mt; t++) e.need(`mkt:fac:${t}`, 224, 160, Ze(t));
  for (let t = 0; t < 3; t++) e.need(`mkt:shut:${t}`, 160, 128, Qe(t));
  (e.need(`mkt:sign`, 512, 128, $e),
    e.need(`mkt:flag`, 64, 192, et),
    e.need(`mkt:manners`, 96, 128, tt),
    e.need(`mkt:cal`, 128, 96, nt),
    e.need(`sushi:board`, 512, 112, rt),
    e.need(`sushi:man`, 128, 192, it),
    e.need(`horumon:board`, 320, 72, at),
    e.need(`uogashi:sign`, 512, 80, ot),
    e.need(`uogashi:fac`, 256, 192, st),
    e.need(`uogashi:note`, 192, 96, ct));
}
function Lt(e) {
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
var Y = (e, t, n) => [
  e.lx + (e.rx - e.lx) * t + e.nx * n,
  e.lz + (e.rz - e.lz) * t + e.nz * n,
];
function X(e, t, n, r, i, a, o, s) {
  let [c, l] = Y(t, n, i),
    [u, d] = Y(t, r, i);
  F(e, c, l, u, d, a, o, s);
}
function Z(e, t, n, r, i, a, o, s, c, l = !1) {
  let [u, d] = Y(t, n, i),
    [f, p] = Y(t, r, i),
    [m, h] = Y(t, r, o),
    [g, _] = Y(t, n, o);
  l
    ? e.quad(u, a, d, f, a, p, m, s, h, g, s, _, c.u0, c.v0, c.u1, c.v1)
    : e.quad(g, s, _, m, s, h, f, a, p, u, a, d, c.u0, c.v0, c.u1, c.v1);
}
var Rt = [
  14209732, 13222578, 12171440, 14077368, 11052186, 13617340, 14736591,
  11576976, 10133664, 11050122,
];
