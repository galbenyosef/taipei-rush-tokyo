// tokyo/assets/region-tokyo-A7LxHjud 141 — math
// Lines 60441-60693 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function jx(e) {
  if (Ax?.plan === e) return Ax.park;
  let t =
      e.landmark?.(`ueno-park`) ??
      e.landmarks.find((e) => e.id === `ueno-park`),
    n = (t, n) => e.groundHeight(t, n),
    r = {
      ...gpe,
      paths: [],
      trees: [],
      items: [],
      beds: [],
      lanes: [],
      mills: [],
      top: 0,
    };
  if (t && n(-185, -1300) > 8) {
    let t = n(-185, -1300) - 0.6;
    r.top = t + 0.6;
    let { paths: i, trees: a, items: o } = r;
    for (let e of wx) i.push(e);
    let s = (r, i) => n(r, i) > t && e.surfaceAt(r, i) === `park`,
      c = i.slice(0, Tx),
      l = (e, t, r) => {
        if (!s(e, t) || c.some((n) => kx(n, e, t, 2.5))) return;
        let i = de(
          `tokyo-ueno-sakura`,
          Math.round(e * 10),
          Math.round(t * 10),
          r,
        );
        a.push({
          x: e,
          z: t,
          y: n(e, t),
          s: 0.95 + ((i & 255) / 255) * 0.35,
          h: (((i >> 8) & 1023) / 1023) * Math.PI * 2,
        });
      };
    for (let e = -1212; e > -1320; e -= 8)
      for (let t of [-15.5, -9.5, 9.5, 15.5])
        l(-185 + t, e + (Math.abs(t) > 12 ? 4 : 0), 1);
    for (let e = -200; e > -330; e -= 9)
      for (let t of [-7, 7]) l(e, -1270 + t, 2);
    for (let e = -255; e < -175; e += 10) l(e, -1318, 3);
    for (let e = 0; e < 260 && a.length < 160; e++) {
      let t = de(`tokyo-ueno-lawn`, e),
        n = -470 + ((t & 65535) / 65535) * 290,
        r = -1425 + (((t >>> 16) & 65535) / 65535) * 220;
      hpe.some((e) => kx(e, n, r)) ||
        a.some((e) => (e.x - n) ** 2 + (e.z - r) ** 2 < 49) ||
        l(n, r, 4);
    }
    for (let e = a.length - 1; e >= 0; e--)
      i.slice(Tx).some((t) => kx(t, a[e].x, a[e].z, 2.5)) && a.splice(e, 1);
    for (let e = a.length - 1; e >= 0; e--)
      Lc(a[e].x, a[e].z, 1.5) && a.splice(e, 1);
    let u = (e, t, n, r) =>
        !s(e, t) ||
        Lc(e, t, n) ||
        a.some((r) => (r.x - e) ** 2 + (r.z - t) ** 2 < (n + 1.2) ** 2) ||
        i.some((i) => i !== r && kx(i, e, t, n * 0.6)) ||
        Ox.some((r) => kx(r, e, t, n + 0.4)) ||
        (e - Ex.x) ** 2 + (t - Ex.z) ** 2 < (Ex.r + n + 1.5) ** 2 ||
        (e - Dx.x) ** 2 + (t - Dx.z) ** 2 < (n + 5) ** 2
          ? !1
          : !o.some(
              (r) =>
                r.kind !== `fence` &&
                r.kind !== `shrub` &&
                (r.x - e) ** 2 + (r.z - t) ** 2 < (n + 1) ** 2,
            ),
      d = (e, t, r, i, a, s = 0, c = 1, l = null) =>
        u(t, r, c, l)
          ? (o.push({ kind: e, x: t, z: r, y: n(t, r), fx: i, fz: a, k: s }),
            !0)
          : !1,
      [f, p, m, h, g, _] = wx;
    o.push({
      kind: `fountain`,
      x: Ex.x,
      z: Ex.z,
      y: n(Ex.x, Ex.z),
      fx: 0,
      fz: 1,
      k: 0,
    });
    for (let e of Ox) {
      if (!s((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2)) continue;
      r.beds.push(e);
      let t = (e, t, r, i) => {
        let a = Math.hypot(r - e, i - t),
          s = Math.max(1, Math.round(a / 2)),
          c = (r - e) / a,
          l = (i - t) / a;
        for (let r = 0; r < s; r++) {
          let i = ((r + 0.5) * a) / s;
          o.push({
            kind: `fence`,
            x: e + c * i,
            z: t + l * i,
            y: n(e + c * i, t + l * i),
            fx: l,
            fz: -c,
            k: Math.round((a / s) * 100),
          });
        }
      };
      (t(e.x0, e.z0, e.x1, e.z0),
        t(e.x1, e.z0, e.x1, e.z1),
        t(e.x1, e.z1, e.x0, e.z1),
        t(e.x0, e.z1, e.x0, e.z0));
      for (let t = e.x0 + 1.2; t < e.x1 - 0.8; t += 2.2)
        for (let r = e.z0 + 1.2; r < e.z1 - 0.8; r += 2.4)
          o.push({
            kind: `shrub`,
            x: t,
            z: r,
            y: n(t, r),
            fx: 0,
            fz: 1,
            k: de(`tokyo-ueno-shrub`, Math.round(t), Math.round(r)) & 3,
          });
      let i = (e.x0 + e.x1) / 2,
        a = e.z1 + 0.35;
      o.push({ kind: `bed-sign`, x: i, z: a, y: n(i, a), fx: 0, fz: 1, k: 0 });
    }
    for (let e = -1222; e > f.z0 + 4; e -= 16)
      (d(`bench`, f.x0 - 0.8, e, 1, 0, 0, 1, f),
        d(`bench`, f.x1 + 0.8, e - 8, -1, 0, 0, 1, f));
    for (let e = -204.5; e > m.x0 + 4; e -= 18)
      (d(`bench`, e, m.z0 - 0.8, 0, 1, 0, 1, m),
        d(`bench`, e - 9, m.z1 + 0.8, 0, -1, 0, 1, m));
    for (let e = p.x0 + 6; e < p.x1 - 3; e += 9)
      d(`bench`, e, p.z1 - 0.9, 0, -1, 0, 1, p);
    for (let e = g.z1 - 10; e > g.z0 + 6; e -= 20)
      d(`bench`, g.x0 - 0.8, e, 1, 0, 0, 1, g);
    for (let e = h.x0 + 8; e < h.x1 - 8; e += 12)
      d(`bench`, e, h.z1 + 0.2, 0, -1, 0, 1, h);
    for (let e = -1226; e > f.z0 + 4; e -= 32)
      (d(`lamp`, f.x0 - 0.45, e, 1, 0, 0, 0.4, f),
        d(`lamp`, f.x1 + 0.45, e, -1, 0, 0, 0.4, f));
    for (let e = m.x1 - 14, t = 0; e > m.x0; e -= 24, t++)
      d(
        `lamp`,
        e,
        t & 1 ? m.z1 + 0.45 : m.z0 - 0.45,
        0,
        t & 1 ? -1 : 1,
        0,
        0.4,
        m,
      );
    for (let e = g.z1 - 4, t = 0; e > g.z0; e -= 24, t++)
      d(`lamp`, g.x1 + 0.45, e, -1, 0, 0, 0.4, g);
    for (let [e, t] of [
      [p.x0 + 1, p.z1 - 1],
      [p.x0 + 1, p.z0 + 11],
      [-214, p.z1 - 1],
    ])
      d(`lamp`, e, t, 0, 1, 0, 0.4, p);
    for (let [e, t] of [
      [h.x0 + 4, h.z0 + 1],
      [h.x1 - 3, h.z0 + 2],
      [-186, h.z1 - 3],
    ])
      d(`lamp`, e, t, 0, 1, 0, 0.4, h);
    (d(`bins`, f.x1 + 1, -1251, -1, 0, 0, 1.2, f),
      d(`bins`, p.x0 + 18.5, p.z1 - 1.2, 0, -1, 0, 1.2, p),
      d(`bins`, -240.5, m.z1 + 1, 0, -1, 0, 1.2, m),
      d(`bins`, h.x1 - 9, h.z0 + 1, 0, 1, 0, 1.2, h),
      d(`drink`, f.x1 + 0.9, -1238, -1, 0, 0, 0.6, f),
      d(`drink`, -205, p.z1 - 1, 0, -1, 0, 0.6, p),
      d(`drink`, -296, m.z1 + 0.9, 0, -1, 0, 0.6, m),
      d(`map`, f.x0 - 1.4, f.z1 - 14, 0, 1, 0, 1.2, f),
      d(`map`, p.x0 + 3, p.z0 + 22, 1, 0, 0, 1.2, p),
      d(`map`, g.x0 - 1.4, g.z1 - 6, 0, 1, 0, 1.2, g),
      d(`map`, m.x0 + 4, m.z1 + 1.4, 0, -1, 0, 1.2, m));
    for (let [e, t, r, i, a] of [
      [h.x0 + 1.4, -1208.5, 1, 0, 0],
      [h.x0 + 1.4, -1207.4, 1, 0, 2],
      [g.x0 - 1, g.z0 + 8, 1, 0, 1],
      [g.x0 - 1, g.z0 + 9.1, 1, 0, 3],
    ])
      s(e, t) &&
        o.push({ kind: `vend`, x: e, z: t, y: n(e, t), fx: r, fz: i, k: a });
    let v = (e, t) => n(e, t),
      y = (e, t, n, i = 0) => {
        let a = e.x1 - e.x0 > e.z1 - e.z0,
          o = (e.x0 + e.x1) / 2,
          c = (e.z0 + e.z1) / 2,
          l = a
            ? {
                ax: e.x0 + 2,
                az: c + i,
                bx: e.x1 - 2,
                bz: c + i,
                hw: Math.max(0.6, (e.z1 - e.z0) / 2 - 1 - Math.abs(i)),
                y: v(o, c),
                w: n,
                kind: t,
              }
            : {
                ax: o + i,
                az: e.z0 + 2,
                bx: o + i,
                bz: e.z1 - 2,
                hw: Math.max(0.6, (e.x1 - e.x0) / 2 - 1 - Math.abs(i)),
                y: v(o, c),
                w: n,
                kind: t,
              },
          u = Math.sign(l.bx - l.ax),
          d = Math.sign(l.bz - l.az);
        for (; !s(l.ax, l.az) && (l.bx - l.ax) * u + (l.bz - l.az) * d > 4;)
          ((l.ax += u), (l.az += d));
        for (; !s(l.bx, l.bz) && (l.bx - l.ax) * u + (l.bz - l.az) * d > 4;)
          ((l.bx -= u), (l.bz -= d));
        (l.bx - l.ax) * u + (l.bz - l.az) * d > 6 && r.lanes.push(l);
      };
    (y(f, `walk`, 1),
      y(m, `walk`, 0.55),
      y(g, `walk`, 0.45),
      y(_, `walk`, 0.3),
      y(p, `plaza`, 0.7, 5),
      y(p, `plaza`, 0.5, -6),
      y(h, `plaza`, 0.8),
      r.mills.push(
        { x: -185, z: -1225, r: 7, y: v(-185, -1225) },
        { x: -185, z: -1290, r: 7, y: v(-185, -1290) },
        { x: -200, z: -1330, r: 9, y: v(-200, -1330) },
        { x: -250, z: -1330, r: 8, y: v(-250, -1330) },
        { x: -250, z: -1270, r: 6, y: v(-250, -1270) },
        { x: -172, z: -1205, r: 8, y: v(-172, -1205) },
        { x: -160, z: -1270, r: 6, y: v(-160, -1270) },
      ));
  }
  return ((Ax = { plan: e, park: r }), r);
}
var Mx = {
    sitFloor: 19,
    idle: 0,
    phone: 5,
    chat: 7,
    sit: 1,
    squat: 15,
    film: 12,
    look_up: 17,
    wave: 6,
    pray: 4,
  },
  Nx = (e) => [Math.sin(e), -Math.cos(e)],
  Px = (e) => [Math.cos(e), Math.sin(e)];
