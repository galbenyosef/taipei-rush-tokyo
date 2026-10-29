// tokyo/assets/region-tokyo-A7LxHjud 53 — half
// Lines 25053-25244 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function _ae(e, t, n) {
  for (let r of t.pieces) {
    if (!ql(n, (r.ax + r.bx) / 2, (r.az + r.bz) / 2) || r.kind === `expressway`)
      continue;
    let t = r.kind === `rail`;
    (e
      .setMaterial(0.85, 0, 0, 0)
      .setColor(R(t ? 158 : 168), R(t ? 152 : 168), R(t ? 144 : 162)),
      Jl(
        e,
        r.ax,
        r.az,
        r.bx,
        r.bz,
        r.half,
        r.ya,
        r.yb,
        r.solid ? Math.min(r.ya, r.yb) : 1.5,
      ));
    let i = t ? 0.9 : 1.3;
    e.setColor(R(t ? 130 : 186), R(t ? 124 : 186), R(t ? 118 : 180));
    let a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1;
    for (let t of [-1, 1]) {
      let n = (-o / s) * (r.half - 0.25) * t,
        c = (a / s) * (r.half - 0.25) * t;
      Jl(
        e,
        r.ax + n,
        r.az + c,
        r.bx + n,
        r.bz + c,
        0.25,
        r.ya + i,
        r.yb + i,
        i,
      );
    }
    if (r.pier) {
      e.setColor(R(146), R(146), R(140));
      let t = r.ya - 1.5,
        n = r.foot ?? 0;
      if (r.half > 8)
        for (let i of [-1, 1]) {
          let c = (-o / s) * (r.half - 4) * i,
            l = (a / s) * (r.half - 4) * i;
          e.box(r.ax + c, (t + n) / 2, r.az + l, 1.2, (t - n) / 2, 1.2);
        }
      else e.box(r.ax, (t + n) / 2, r.az, 1.1, (t - n) / 2, 1.1);
    }
  }
}
function vae(e, t, n) {
  for (let r of e.pieces) {
    let e = (r.ax + r.bx) / 2,
      i = (r.az + r.bz) / 2;
    if (!ql(t, e, i)) continue;
    let a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1;
    if (r.solid) {
      n.obb(e, i, r.half, s / 2, Math.atan2(a, -o), Math.max(r.ya, r.yb));
      continue;
    }
    if (!r.pier) continue;
    let c = r.ya - 1.5;
    if (r.kind === `expressway`) n.circle(r.ax, r.az, 1.45, c);
    else if (r.half > 8)
      for (let e of [-1, 1]) {
        let t = (-o / s) * (r.half - 4) * e,
          i = (a / s) * (r.half - 4) * e;
        n.circle(r.ax + t, r.az + i, 1.4, c);
      }
    else n.circle(r.ax, r.az, 1.3, c);
  }
  for (let r of e.portals)
    ql(t, r.x, r.z) &&
      n.obb(
        r.x + (r.ux * zl.len) / 2,
        r.z + (r.uz * zl.len) / 2,
        r.half + zl.wall,
        zl.len / 2,
        Math.atan2(r.ux, -r.uz),
        zl.h,
      );
  e.railColliders?.(t, n);
}
var Yl = null;
function yae() {
  return (
    Yl ||
    ((Yl = Cre.map((e) => ({
      s: Go(e.at[0], e.at[1], 80)?.s ?? 0,
      ja: e.ja,
      en: e.en,
    })).sort((e, t) => e.s - t.s)),
    Yl)
  );
}
function Xl(e, t, n = 120) {
  let r = yae(),
    i = Ho().length,
    a = r[0],
    o = 1 / 0;
  for (let s of r) {
    let r = ((((s.s - e) * t) % i) + i) % i;
    r >= n && r < o && ((o = r), (a = s));
  }
  return a;
}
var Zl = { ja: `都心環状線`, en: `Inner Circular Route` };
function bae(e, t) {
  let n = Ho(),
    r = { x: 0, z: 0, y: 0, dx: 0, dz: 0, k: 0 };
  for (let t = 24; t < n.length; t += 48) {
    Wo(t, r);
    let i = Uo(n, r.k);
    i === `tunnel` ||
      (i === `deck` && r.y < 5) ||
      e.push({ x: r.x, z: r.z, y: r.y, ux: r.dx, uz: r.dz });
  }
  let i = {
      kasumigaseki: { ja: `霞が関トンネル`, en: `Kasumigaseki Tunnel` },
      kitanomaru: { ja: `北の丸トンネル`, en: `Kitanomaru Tunnel` },
    },
    a = [];
  for (let e = 0; e + 1 < n.n - 1; e++) {
    let t = Uo(n, e),
      r = Uo(n, e + 1);
    ((t === `cut` && r === `tunnel`) || (t === `tunnel` && r === `cut`)) &&
      a.push(e + 1);
  }
  for (let e of a) {
    let a = Uo(n, e) === `tunnel`,
      o = n.x[e] < -790,
      s = n.s[e] + (a ? -1 : 1) * (o ? 46 : 26);
    Wo(s, r);
    let c = { top: o ? i.kitanomaru : i.kasumigaseki, route: `C1` },
      l = {
        top: Zl,
        sub: { ja: Xl(s, a ? -1 : 1).ja, en: Xl(s, a ? -1 : 1).en },
        route: `C1`,
      };
    t.push({
      x: r.x,
      z: r.z,
      y: r.y,
      ux: r.dx,
      uz: r.dz,
      half: Ro.half,
      fwd: a ? c : l,
      back: a ? l : c,
    });
  }
  let o = 0;
  for (let e = 150; e < n.length - 100; e += 420) {
    let i = !1;
    for (let t of [0, 40, -40, 80, -80]) {
      Wo(e + t, r);
      let a = Uo(n, r.k),
        o = Wo(e + t + 20, { x: 0, z: 0, y: 0, dx: 0, dz: 0, k: 0 });
      if (
        a !== `tunnel` &&
        !(a === `deck` && r.y < 6) &&
        r.dx * o.dx + r.dz * o.dz > 0.995
      ) {
        ((i = !0), (e += t));
        break;
      }
    }
    if (!i) continue;
    Wo(e, r);
    let a = Xl(e, 1),
      s = Xl(e, -1),
      c = (e, t) =>
        (o + t) % 2 == 0
          ? { top: { ja: e.ja, en: e.en }, exit: !0 }
          : { top: Zl, sub: { ja: e.ja, en: e.en }, route: `C1` };
    (t.push({
      x: r.x,
      z: r.z,
      y: r.y,
      ux: r.dx,
      uz: r.dz,
      half: Ro.half,
      fwd: c(a, 0),
      back: c(s, 1),
    }),
      o++);
  }
}
