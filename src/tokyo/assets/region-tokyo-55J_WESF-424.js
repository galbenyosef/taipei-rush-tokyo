// tokyo/assets/region-tokyo-55J_WESF 424 — math
// Lines 151797-152049 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function TLe(e, t, n) {
  let r = e.groundAt.bind(e),
    i = e.statics,
    a = e.plan;
  e.groundAt = (e, t, o = 1 / 0, s = 0.45) => {
    let c = Math.floor((e - n.minX) / w4),
      l = Math.floor((t - n.minZ) / w4),
      u = c >= 0 && l >= 0 && c < n.nx && l < n.nz ? n.m[l * n.nx + c] : 0;
    if (u === 0) return r(e, t, o, s);
    let d = u === 1 ? ts(e, t) : null;
    if (d) {
      let n = a.surfaceAt(e, t);
      if (n !== `road` && n !== `crosswalk` && (n !== `sidewalk` || d.walk)) {
        let n = i.floorAt(e, t, o, s);
        return n > -1 / 0 ? n : r(e, t, o, s);
      }
    } else if (u === 1) return r(e, t, o, s);
    if (o < a.groundHeight(e, t) - 1.2) {
      let n = i.floorAt(e, t, o, s);
      if (n > -1 / 0) return n;
    }
    return r(e, t, o, s);
  };
}
function ELe(e) {
  (nLe(),
    e.params.get(`shuto`) !== `0` && pLe(e),
    e.params.get(`c1`) !== `0` && CLe(e));
}
var DLe = { sim: (e, t, n) => new SLe(e, t, n), pop: (e, t) => new sLe(e, t) },
  T4 = { paused: !1 },
  E4 = [
    [-6.6, 1],
    [-3, 1],
    [6.6, -1],
    [3, -1],
  ],
  D4 = [`sedan`, `taxi`, `van`, `kei`, `truck`, `cab`, `taxi`, `sedan`],
  O4 = null;
function OLe() {
  if (O4) return O4;
  let e = Ho().length;
  return (
    (O4 = E4.map(([t, n]) => {
      let r = [];
      for (let n = 0; n < e - 2; n += 5) {
        let e = Wo(n);
        r.push({ x: e.x - e.dz * t, z: e.z + e.dx * t });
      }
      return (n < 0 && r.reverse(), new rt(r, !0));
    })),
    O4
  );
}
function kLe(e) {
  let t = [],
    n = new ie(ge(`c1-traffic`)),
    r = -1,
    i = 0,
    a = 0,
    o = 0,
    s = e.params.get(`c1traffic`) === `0` || e.params.get(`c1`) === `0`,
    c = (t) => {
      try {
        e.vehicles.despawn(t.v);
      } catch {}
    };
  return {
    name: `c1-traffic`,
    update(l) {
      if (s) return;
      let u = T4.paused ? 0 : e.quality?.level === `low` ? 4 : 6,
        d = e.vehicles.playerVehicle,
        f = e.player.position.x,
        p = e.player.position.z,
        m = e.player.position.y;
      if ((a -= l) <= 0) {
        a = 0.25;
        let e = Go(f, p, 14, r),
          t = !!d && !!e && Math.abs(m - e.y) < 5;
        (e && (r = e.k), (i = t ? Math.min(i + 0.25, 10) : 0));
      }
      let h = Ho().length,
        g = Go(f, p, 40, r);
      for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (r.v.destroyed || !g || t.length > u) {
          (c(r), t.splice(n, 1));
          continue;
        }
        let i = Go(r.v.body.x, r.v.body.z, 40, r.hint),
          a = i ? Math.abs(i.s - g.s) : 1 / 0;
        if (
          (a > h / 2 && (a = h - a),
          i && (r.hint = i.k),
          a > 320 || r.v.driver === `player`)
        ) {
          (r.v.driver !== `player` && c(r), t.splice(n, 1));
          continue;
        }
        if (
          (r.drv.update(l),
          (r.stuckT = Math.abs(r.v.speed) < 1.5 ? r.stuckT + l : 0),
          r.stuckT > 5 && a > 90 && i)
        ) {
          r.stuckT = 0;
          let [t, n] = E4[r.lane],
            a = Wo(i.s + n * 20);
          try {
            e.vehicles.teleport?.(
              r.v,
              a.x - a.dz * t,
              a.z + a.dx * t,
              Math.atan2(a.dx * n, -a.dz * n),
            );
          } catch {}
          r.v.placeOnFloor?.(a.y);
        }
      }
      if (!g || i < 1 || t.length >= u || (o -= l) > 0) return;
      o = 1.2;
      let _ = Math.floor(n.next() * E4.length) % E4.length,
        [v, y] = E4[_],
        b = n.next() < 0.65,
        x = Wo(g.s + (b ? 1 : -1) * n.range(170, 300)),
        S = x.x - x.dz * v,
        C = x.z + x.dx * v;
      for (let e of t)
        if (Math.hypot(e.v.body.x - S, e.v.body.z - C) < 25) return;
      let w = D4[Math.floor(n.next() * D4.length) % D4.length],
        T = null;
      try {
        T = e.vehicles.spawn(w, S, C, Math.atan2(x.dx * y, -x.dz * y), {
          driver: `ai`,
          y: x.y,
          locked: !1,
        });
      } catch {}
      if (!T) return;
      ((T.driver = `ai`), (T.controls.hold = !1));
      let E = new wt(e, T, OLe()[_], {
        maxSpeed: n.range(15, 22),
        latAccel: 4,
        decel: 5,
        canReset: !1,
        avoid: !0,
      });
      t.push({ v: T, drv: E, lane: _, stuckT: 0, hint: -1 });
    },
  };
}
var ALe = 7,
  jLe = 16,
  MLe = 5,
  NLe = 26,
  PLe = 6,
  k4 = 2.8;
function FLe(e, t) {
  let n = [];
  for (let e of t)
    n.push(
      e.curbX,
      e.curbZ,
      Math.sin(e.busHeading),
      -Math.cos(e.busHeading),
      jLe,
      MLe,
      k4,
    );
  let r = d4(e, e.links.length);
  for (let t of e.links) {
    let i = r[t.id];
    if (!(i >= 0)) continue;
    let a = t.road.halfWidth - 1.3,
      o = t.sx + t.dx * i + t.rx * a * e.side,
      s = t.sz + t.dz * i + t.rz * a * e.side;
    n.push(o, s, t.dx, t.dz, NLe, PLe, k4);
  }
  for (let t of Ao(e)) {
    let [e, r] = No(t),
      [i, a] = Mo(t, (e + r) / 2, Oo.lat);
    n.push(
      i,
      a,
      +(t.axis === `x`),
      +(t.axis === `z`),
      (r - e) / 2,
      (r - e) / 2,
      Oo.half + 0.6,
    );
  }
  return new Float32Array(n);
}
function ILe(e, t, n, r) {
  for (let i = 0; i < e.length; i += ALe) {
    let a = t - e[i],
      o = n - e[i + 1],
      s = e[i + 2],
      c = e[i + 3],
      l = a * s + o * c;
    if (l < -e[i + 4] - r || l > e[i + 5] + r) continue;
    let u = a * -c + o * s;
    if (!(u < -e[i + 6] - r * 0.5 || u > e[i + 6] + r * 0.5)) return !0;
  }
  return !1;
}
var LLe = 0.75;
function RLe(e) {
  let t = [];
  for (let n of e.dataset.closures ?? []) {
    let r = ef(e, n);
    if (!r.length) continue;
    let i = r[0].road,
      a = 1 / 0,
      o = -1 / 0;
    for (let e of r) {
      let t = i.axis === `x` ? e.sx : e.sz,
        n = i.axis === `x` ? e.ex : e.ez;
      ((a = Math.min(a, t, n)), (o = Math.max(o, t, n)));
    }
    let s = i.at - i.halfWidth,
      c = i.at + i.halfWidth;
    t.push(
      i.axis === `x`
        ? { def: n, x0: a, z0: s, x1: o, z1: c }
        : { def: n, x0: s, z0: a, x1: c, z1: o },
    );
  }
  return t;
}
function zLe(e) {
  let t = null,
    n = RLe(e.plan);
  return (r, i, a) => {
    let o = e.time;
    if (n.length && o?.date) {
      let t = e.env?.hour ?? 12;
      for (let e of n)
        if (
          !(r + a < e.x0 || r - a > e.x1 || i + a < e.z0 || i - a > e.z1) &&
          (Qd(e.def, o.date, o.weekday, t) ||
            Qd(e.def, o.date, o.weekday, t + LLe))
        )
          return !0;
    }
    if (!t) {
      let n = e.streets?.busStops;
      if (!n || !n.length) return !1;
      t = FLe(e.plan, n);
    }
    return ILe(t, r, i, a);
  };
}
