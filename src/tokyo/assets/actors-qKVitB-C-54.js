// tokyo/assets/actors-qKVitB-C 54 — math
// Lines 23447-23651 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Oh(e, t, n, r, i, a, o, s, c, l, u) {
  let d = Math.cos(n),
    f = Math.sin(n),
    p = Math.cos(s),
    m = Math.sin(s),
    h = d,
    g = f,
    _ = -f,
    v = d,
    y = p,
    b = m,
    x = -m,
    S = p,
    C = e - a,
    w = t - o,
    T = 1 / 0,
    E = 0,
    D = 0;
  for (let e = 0; e < 4; e++) {
    let t = e === 0 ? h : e === 1 ? _ : e === 2 ? y : x,
      n = e === 0 ? g : e === 1 ? v : e === 2 ? b : S,
      a = r * Math.abs(h * t + g * n) + i * Math.abs(_ * t + v * n),
      o = c * Math.abs(y * t + b * n) + l * Math.abs(x * t + S * n),
      s = C * t + w * n,
      u = a + o - Math.abs(s);
    if (u <= 0) return 0;
    if (u < T) {
      T = u;
      let e = s >= 0 ? 1 : -1;
      ((E = t * e), (D = n * e));
    }
  }
  return ((u.nx = E), (u.nz = D), T);
}
function kh(e, t, n, r, i, a, o, s) {
  let c = Math.cos(n),
    l = Math.sin(n),
    u = -Math.sin(n),
    d = Math.cos(n),
    f = c * a + l * o,
    p = u * a + d * o,
    m = Math.abs(f) < 0.3 ? 0 : Math.sign(f),
    h = Math.abs(p) < 0.3 ? 0 : Math.sign(p);
  ((s.x = e + c * m * r + u * h * i), (s.z = t + l * m * r + d * h * i));
}
var Ah = { nx: 0, nz: 0 },
  jh = { x: 0, z: 0 },
  Mh = { x: 0, z: 0 };
function Nh(e, t, n, r) {
  let i = t.ctx,
    a = e.body,
    o = Math.hypot(e.vx, e.vz),
    s = i.dynamics.query(a.x, a.z, a.radius + 0.6, Th);
  for (let i = 0; i < s; i++) {
    let s = Th[i];
    if (s !== a && s.active) {
      if (s.kind === `vehicle`) {
        let n = s.userData?.vehicle ?? null;
        if (
          (n && !n.sleeping && n.id < e.id) ||
          Math.abs((s.y ?? 0) - e.y) > 2.5
        )
          continue;
        let r = Oh(
          a.x,
          a.z,
          e.heading,
          e.spec.halfW,
          e.spec.halfL,
          s.x,
          s.z,
          s.heading,
          s.halfW,
          s.halfL,
          Ah,
        );
        if (r <= 0) continue;
        let i = Ah.nx,
          o = Ah.nz;
        (kh(a.x, a.z, e.heading, e.spec.halfW, e.spec.halfL, -i, -o, jh),
          kh(s.x, s.z, s.heading, s.halfW, s.halfL, i, o, Mh));
        let c = (jh.x + Mh.x) / 2,
          l = (jh.z + Mh.z) / 2,
          u = c - a.x,
          d = l - a.z,
          f = e.spec.mass,
          p =
            ((f * ((e.spec.halfL * 2) ** 2 + (e.spec.halfW * 2) ** 2)) / 12) *
            1.25,
          m = !n && s.owner !== `traffic` && !s.onImpact,
          h = n ? n.spec.mass : m ? 1 / 0 : Math.max(80, s.mass || 1200),
          g = n
            ? ((h * ((n.spec.halfL * 2) ** 2 + (n.spec.halfW * 2) ** 2)) / 12) *
              1.25
            : 1 / 0,
          _ = c - s.x,
          v = l - s.z,
          y = e.vx - e.yawRate * d,
          b = e.vz + e.yawRate * u,
          x = n ? n.vx - n.yawRate * v : s.vx,
          S = n ? n.vz + n.yawRate * _ : s.vz,
          C = (y - x) * i + (b - S) * o,
          w = n ? h / (f + h) : m ? 1 : Math.max(0.55, h / (f + h));
        if (
          ((a.x += i * r * w),
          (a.z += o * r * w),
          n &&
            ((n.body.x -= i * r * (1 - w)),
            (n.body.z -= o * r * (1 - w)),
            n.wake()),
          C >= 0)
        )
          continue;
        let T = u * o - d * i,
          E = _ * o - v * i,
          D = 1 / f + (T * T) / p + (m ? 0 : 1 / h) + (n ? (E * E) / g : 0),
          O = (-1.25 * C) / D;
        if (
          ((e.vx += (O * i) / f),
          (e.vz += (O * o) / f),
          (e.yawRate += (T * O) / p),
          (e.yawRate = Math.max(-4, Math.min(4, e.yawRate))),
          n)
        )
          ((n.vx -= (O * i) / h),
            (n.vz -= (O * o) / h),
            (n.yawRate -= (E * O) / g),
            (n.yawRate = Math.max(-4, Math.min(4, n.yawRate))));
        else
          try {
            s.onImpact?.(-O * i, -O * o, a);
          } catch {}
        (e.wake(), t.onVehicleImpact(e, n, s, -C, c, l, i, o));
        continue;
      }
      if (
        !t.immune(a, s) &&
        (s.kind === `ped` ||
          s.kind === `player` ||
          s.kind === `police` ||
          s.kind === `prop`)
      ) {
        let i = s.x - a.x,
          c = s.z - a.z,
          l = Math.cos(e.heading),
          u = Math.sin(e.heading),
          d = i * l + c * u,
          f = -i * u + c * l,
          p = Math.max(-e.spec.halfW, Math.min(e.spec.halfW, d)),
          m = Math.max(-e.spec.halfL, Math.min(e.spec.halfL, f)),
          h = d - p,
          g = f - m,
          _ = Math.hypot(h, g);
        if (_ > (s.radius || 0.35) || Math.abs((s.y ?? 0) - e.y) > 1.6)
          continue;
        let v, y;
        if (_ > 1e-4) {
          let e = h / _,
            t = g / _;
          ((v = e * l - t * u), (y = e * u + t * l));
        } else {
          let e = Math.hypot(i, c) || 1;
          ((v = i / e), (y = c / e));
        }
        let b = (e.vx - s.vx) * v + (e.vz - s.vz) * y,
          x = r.get(s.id) ?? -10;
        if (b > 2.2 && o > 2.5 && n - x > 0.8) {
          (r.set(s.id, n), t.onPedHit(e, s, b, a.x + v * 0, a.z));
          let i = b * 80;
          try {
            s.onImpact?.(
              e.vx * 80 * 0.9 + v * i * 0.4,
              e.vz * 80 * 0.9 + y * i * 0.4,
              a,
            );
          } catch {}
          let c =
            s.kind === `player`
              ? b < 4.2
                ? 0
                : Math.min(70, (b - 4) * 3.5)
              : Math.min(220, Math.max(6, (b - 2) * 7.5));
          if (
            (Eh.set(s.x, s.y + 1, s.z),
            o > 0.5 ? Dh.set(e.vx / o, 0, e.vz / o) : Dh.set(v, 0, y),
            c > 0)
          )
            try {
              s.onDamage?.({
                amount: c,
                source: `vehicle`,
                point: Eh,
                dir: Dh,
              });
            } catch {}
          let l = 80 / (e.spec.mass + 80);
          ((e.vx -= v * b * l), (e.vz -= y * b * l));
        } else if (b > 0.2)
          try {
            s.onImpact?.(v * 60, y * 60, a);
          } catch {}
      }
    }
  }
}
