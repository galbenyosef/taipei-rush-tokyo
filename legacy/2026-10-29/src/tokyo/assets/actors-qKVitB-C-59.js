// tokyo/assets/actors-qKVitB-C 59 — math
// Lines 25382-26645 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Yg(e) {
  rm(e.region?.signage?.brands?.delivery);
  let t = new Set([`motorcycle`, ...(Wu().spokeWheels ?? [])]),
    n = [],
    r = new Map(),
    i = new Map(),
    a = [],
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = new Map(),
    u = null,
    d = !0,
    f = new Um((t, n, r) =>
      e.groundAt ? e.groundAt(t, n, r, 0.3) : e.plan.groundHeight(t, n),
    ),
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    y = new Map(),
    x = { ms: 0, active: 0, parked: 0, particles: 0, total: 0 },
    S = e.params,
    C = S.has(`vnight`) ? V(Number(S.get(`vnight`) || 1), 0, 1) : -1,
    w = S.has(`vwet`) ? V(Number(S.get(`vwet`) || 1), 0, 1) : -1,
    T = S.has(`vdebug`),
    E = Number(S.get(`vauto`) || 0),
    D = Go[S.get(`drive`) ?? ``] ? S.get(`drive`) : null,
    O = Number(S.get(`vsteer`) || 0),
    k = S.has(`vlm`) ? Math.max(0, Number(S.get(`vlm`)) || 0) : Wg,
    j = null,
    M = !1,
    te = [],
    ne = !1,
    N = () => {
      for (let e of te) P(e);
      ((te.length = 0), (ne = !1));
    },
    re = !1,
    ie = new Map(),
    ae = [],
    oe = [],
    se = new L(),
    ce = new L(),
    le = () => (d ? ((u ||= Sd(e.renderer.gl)), u) : null),
    ue = [],
    de = () => {
      let e = vd({ instanced: !1 });
      return ((e.name = `vehicle-physical`), { mat: e, depth: yd(e.vu, !1) });
    },
    fe = (e) => {
      let t = ue.pop() ?? de(),
        n = t.mat.vu,
        r = nm[e] ?? ad;
      return (
        n.uVarA.value.set(r.a[0], r.a[1], r.a[2], r.a[3]),
        n.uVarB.value.set(r.b[0], r.b[1], r.b[2], r.b[3]),
        n.uState.value.set(0, 0, 0, 0),
        (t.mat.envMap = le()),
        (t.mat.envMapIntensity = 1),
        t
      );
    },
    P = (e) => {
      ue.length < Gg ? ue.push(e) : (e.mat.dispose(), e.depth.dispose());
    },
    me = (e) => ((e.userData.keepCpu = !0), e),
    he = null,
    ge = () => {
      if (!_) {
        let e = vd({ instanced: !1, batched: !0 }),
          t = le();
        (t && (e.envMap = t), (e.name = `vehicle-batch`), (_ = e));
      }
      return ((he ??= yd(_.vu, !1, !0)), { mat: _, depth: he });
    },
    _e = new Map(),
    ve = (e) => {
      let t = _e.get(e)?.pop();
      if (t) return t;
      let n = be(e),
        r = new pe();
      for (let e in n.attributes) {
        let t = n.attributes[e];
        r.setAttribute(
          e,
          e === `position` || e === `normal` ? t.clone().setUsage(b) : t,
        );
      }
      return (
        n.boundingSphere || n.computeBoundingSphere(),
        n.boundingBox || n.computeBoundingBox(),
        (r.boundingSphere = n.boundingSphere.clone()),
        (r.boundingBox = n.boundingBox.clone()),
        (r.userData = { keepCpu: !0, vehicleDeform: e }),
        {
          kind: e,
          geo: r,
          orig: n.attributes.position.array,
          origN: n.attributes.normal.array,
        }
      );
    },
    ye = (e, t) => {
      if (t) {
        let t = e.geo.attributes.position,
          n = e.geo.attributes.normal;
        (t.array.set(e.orig),
          n.array.set(e.origN),
          t.clearUpdateRanges(),
          n.clearUpdateRanges(),
          (t.needsUpdate = !0),
          (n.needsUpdate = !0));
      }
      let n = _e.get(e.kind);
      if ((n || _e.set(e.kind, (n = [])), n.length < Kg)) {
        n.push(e);
        return;
      }
      for (let t of Object.keys(e.geo.attributes))
        t !== `position` && t !== `normal` && e.geo.deleteAttribute(t);
      e.geo.dispose();
    },
    be = (t) => {
      let n = r.get(t);
      return (
        n ||
          r.set(
            t,
            (n = me($p(t, { wheels: !1, side: e.plan.side }).buildGeometry())),
          ),
        n
      );
    },
    xe = new Map(),
    F = (e) => {
      let t = xe.get(e);
      return (t || xe.set(e, (t = me(_m(be(e))))), t);
    },
    Se = () => e.time.elapsed,
    Ce = (t) => {
      let n = c.get(t);
      return (
        n ||
          c.set(
            t,
            (n = me(
              $p(t, {
                wheels: !1,
                steer: !0,
                side: e.plan.side,
              }).buildGeometry(),
            )),
          ),
        n
      );
    },
    Te = {
      ctx: e,
      fx: f,
      bodyGeo: be,
      bodyLod: F,
      steerGeo: (e) => {
        let t = o.get(e);
        return (t || o.set(e, (t = me(Zp(e)))), t);
      },
      riderGeo: (e) => {
        let t = s.get(e);
        return (t || s.set(e, (t = me(Yp(e)))), t);
      },
      parkedGeo: (e) => Ce(e),
      get envMap() {
        return le();
      },
      onCollision: (e, t, n, r, i, a, o) => Le(e, t, n, r, i, a, o),
      onDestroyed: (e) => Xe(e),
      onSplash: (t) => {
        let n = e.plan.waterLevelAt(t.x, t.z);
        De(() =>
          e.audio.play(`splash`, {
            x: t.x,
            y: n,
            z: t.z,
            volume: t.spec.twoWheeler ? 0.6 : 1,
          }),
        );
        let r = Math.ceil(16 * f.density);
        for (let e = 0; e < r; e++) {
          let e = Math.random() * 6.28,
            r = 1 + Math.random() * 3;
          f.smokePuff(
            t.x + Math.cos(e) * t.spec.halfW,
            n + 0.3,
            t.z + Math.sin(e) * t.spec.halfL,
            Math.cos(e) * r + t.vx * 0.3,
            3 + Math.random() * 4,
            Math.sin(e) * r + t.vz * 0.3,
            0.6,
            2.4 + Math.random() * 1.5,
            0.9 + Math.random() * 0.6,
            0.92,
            0.95,
            1,
            0.75,
            1.2,
            -6,
          );
        }
        f.glowParticle(
          3,
          t.x,
          n + 0.05,
          t.z,
          0,
          0,
          0,
          1,
          9,
          1.2,
          0.5,
          0.6,
          0.65,
          0.5,
        );
      },
      onBackfire: (t) => {
        Oe(t.x, t.z) < 60 &&
          De(() =>
            e.audio.play(`backfire`, {
              x: t.x,
              y: t.y + 0.4,
              z: t.z,
              volume: t.kind === `sports` ? 0.9 : 0.6,
            }),
          );
      },
      wet: () => Math.max(bt.uWet.value, e.env?.rain ?? 0),
      onSunk: (t) => {
        De(() =>
          e.events.emit(`vehicle:destroyed`, {
            pos: new L(t.x, t.y, t.z),
            vehicleId: t.id,
          }),
        );
      },
      onIgnite: (e) => et.onIgnite(e),
      onLowside: (e) => et.lowside(e),
      now: Se,
      takeMaterial: fe,
      releaseMaterial: P,
      takeDeform: ve,
      releaseDeform: ye,
    },
    Ee = {
      ctx: e,
      onVehicleImpact: (e, t, n, r, i, a, o, s) => Be(e, t, n, r, i, a, o, s),
      onPedHit: (e, t, n, r, i) => He(e, t, n, r, i),
      immune: (e, t) => et.isImmune(e, t),
    },
    De = (e) => {
      try {
        e();
      } catch {}
    },
    Oe = (t, n) => Math.hypot(e.camera.position.x - t, e.camera.position.z - n);
  function ke(e, t, n) {
    if (t <= n) return 0;
    let r = V(1500 / e.spec.mass, 0.35, 1.25);
    return 0.8 * (t * t - n * n) * r;
  }
  let Ae = new Map(),
    je = 0,
    Ne = (e, t) => {
      Se() - e.t > 1.5 && Ae.delete(t);
    };
  function Pe(e, t) {
    let n = Se(),
      r = e.id * 16777216 + (t & 16777215),
      i = Ae.get(r);
    return (
      i || Ae.set(r, (i = { t: -10, dv: 0, crime: !1 })),
      n - i.t > Hg && ((i.dv = 0), (i.crime = !1)),
      (i.t = n),
      i
    );
  }
  function Fe(t, n, r, i, a, o, s, c, l, u = 1) {
    if (t.destroyed) return null;
    let d = Pe(t, c),
      p = d.dv;
    if (n <= p) return d;
    d.dv = n;
    let m = ke(t, n, l) - ke(t, p, l);
    if (m > 0) {
      let e = V(1500 / t.spec.mass, 0.35, 1.25);
      t.hurt(m * u * (t.driver === `ai` ? 0.5 : 1) * (t.kart ? 0.15 : 1));
      let a = r - t.x,
        o = i - t.z,
        s = t.heading,
        c = a * Math.cos(s) + o * Math.sin(s),
        l = -a * Math.sin(s) + o * Math.cos(s);
      (n > 6 && !t.kart && t.crumple(c, 0.7, l, V((n - 6) * 0.02, 0, 0.22) * e),
        t.driver === `none` &&
          t.parked &&
          ((t.hazardT = 8), n > 4.5 && !t.spec.twoWheeler && (t.alarmT = 9)));
    }
    let h = Se(),
      g = ie.get(t.id) ?? -10;
    if (n > 2.5 && (p <= 2.5 || n > p + 3) && h - g > 0.12) {
      ie.set(t.id, h);
      let c = t.y + 0.6;
      if (
        Oe(r, i) < 80 &&
        (n > 4 &&
          f.sparks(r, c, i, a, o, Math.min(18, Math.round(n)), 3 + n * 0.3),
        n > 12)
      ) {
        let e = 0.55;
        for (let t = 0; t < 4; t++)
          f.smokePuff(
            r,
            c,
            i,
            a * 2,
            1,
            o * 2,
            0.5,
            2.2,
            1.2,
            e,
            e,
            e,
            0.35,
            2,
            0.4,
          );
      }
      (t.driver === `player` &&
        (De(() => e.cameraRig.shake(V(n * 0.045, 0.08, 1))),
        De(() => e.input.rumble(V(n / 20, 0.2, 1), 150))),
        qe({
          pos: new L(r, c, i),
          impulse: Math.round(n * 100) / 100,
          vehicleId: t.id,
          other: s,
        }));
    }
    return d;
  }
  function z(e, t, n, r, i, a, o, s, c = 0) {
    let l = e.preVx,
      u = e.preVz,
      d = Math.hypot(l, u),
      f = d > 0.5 ? Math.abs(l * n + u * r) / d : 1,
      p = c || (f < 0.5 ? Bg : zg);
    (!i && !c && Ie(e, a, o) && (p = Math.max(p, Bg)),
      t > p
        ? et.eject(e, t, n, r, i, a, o, s)
        : t > 2.5 && e.wobble((t - 2.5) / (p - 2.5)));
  }
  function Ie(t, n, r) {
    let i = e.statics.query(n - 0.35, r - 0.35, n + 0.35, r + 0.35, oe),
      a = -1 / 0;
    for (let e = 0; e < i; e++) {
      let n = oe[e];
      n.minY > t.y + 1.1 || n.maxY < t.y + 0.25 || (n.maxY > a && (a = n.maxY));
    }
    return Number.isFinite(a) && a - t.y <= 0.5;
  }
  function Le(e, t, n, r, i, a, o) {
    (Fe(e, t, n, r, i, a, o, Ug, Fg),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        z(e, t, i, a, null, n, r, o));
  }
  let Re = (t, n) => {
      if (t) {
        if (t.driver !== `ai`) return !1;
        try {
          if (e.police?.isPoliceVehicle?.(t.id)) return !0;
        } catch {}
        return t.kind === `police` || t.livery === `police`;
      }
      return (
        n.owner === `police` ||
        (n.owner === `traffic` && n.userData?.kind === `police`)
      );
    },
    ze = (e) => !!e && e.spec.twoWheeler && e.driver === `none` && !e.destroyed;
  function Be(e, t, n, r, i, a, o, s) {
    let c = e.spec.mass,
      l = t
        ? t.spec.mass
        : n.owner === `culture`
          ? 8e3
          : Math.max(80, n.mass || 1200),
      u = Math.min(1, (1.25 * l) / (c + l)),
      d = Math.min(1, (1.25 * c) / (c + l)),
      f = e.driver === `player` && Re(t, n),
      p = !!t && t.driver === `player` && Re(e, e.body),
      m = Fe(
        e,
        r * u,
        i,
        a,
        o,
        s,
        t ? `vehicle` : n.owner,
        n.id,
        f ? Lg : Ig,
        f ? Rg : 1,
      ),
      h = t
        ? Fe(
            t,
            r * d,
            i,
            a,
            -o,
            -s,
            `vehicle`,
            e.body.id,
            p ? Lg : Ig,
            p ? Rg : 1,
          )
        : null;
    (ze(t) && r > 3 && t.knockOver(-o, -s, r),
      ze(e) && r > 3 && t && e.knockOver(o, s, r));
    let g = e.driver === `player` ? e : t && t.driver === `player` ? t : null;
    if (g && r > 6) {
      let t = g === e ? m : h,
        o = g === e ? n : e.body;
      if (t && !t.crime && !o.userData?.noCrime) {
        t.crime = !0;
        let n = o.owner === `traffic` && o.userData?.kind === `police`;
        Ke({
          type: n ? `assault_police` : `vehicle_damage`,
          pos: new L(i, e.y, a),
          severity: r > 14 ? 2 : 1,
        });
      }
    }
    (Ve(e, t, r, o, s, t ? (t.kart ? `kart` : t.kind) : n.owner),
      t && Ve(t, e, r, -o, -s, e.kart ? `kart` : e.kind),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        z(
          e,
          Math.min(r, e.preSpeed * 1.4 + 2),
          o,
          s,
          n,
          i,
          a,
          `vehicle`,
          ze(t) ? Vg : 0,
        ),
      t &&
        t.driver === `player` &&
        t.spec.twoWheeler &&
        z(
          t,
          Math.min(r, t.preSpeed * 1.4 + 2),
          -o,
          -s,
          e.body,
          i,
          a,
          `vehicle`,
          ze(e) ? Vg : 0,
        ));
  }
  function Ve(t, n, r, i, a, o) {
    if (!t.kart || t.destroyed || r < (n?.kart ? 8 : 3.2)) return;
    t.kart.lastSpin = `${o} ${r.toFixed(1)}`;
    let s = Math.sin(t.heading),
      c = -Math.cos(t.heading);
    (t.kart.spin(s * a - c * i >= 0 ? 1 : -1, V(0.8 + r * 0.05, 0.9, 1.5)),
      t.driver === `player` && De(() => e.input.rumble(0.6, 220)));
  }
  function He(t, n, r, i, a) {
    let o = t.y + 1;
    (De(() =>
      e.audio.play(`punch`, {
        x: n.x,
        y: o,
        z: n.z,
        volume: V(r / 12, 0.4, 1),
      }),
    ),
      t.driver === `player` &&
        (n.kind !== `player` &&
          !n.userData?.noCrime &&
          Ke({
            type: n.kind === `police` ? `assault_police` : `hit_ped`,
            pos: new L(n.x, n.y, n.z),
            severity: r > 13 ? 3 : r > 7 ? 2 : 1,
          }),
        De(() => e.cameraRig.shake(V(r * 0.015, 0.05, 0.3))),
        De(() => e.peds.panic(n.x, n.z, 18))));
  }
  let Ue = [],
    We = [],
    Ge = [],
    Ke = (e) => void (Ue.length < 16 && Ue.push(e)),
    qe = (e) => void (Ge.length < 16 && Ge.push(e)),
    Je = (t) => De(() => e.events.emit(`crime`, t));
  function Ye() {
    for (let e = 0; e < We.length; e++) Je(We[e]);
    We.length = 0;
    for (let t = 0; t < Ge.length; t++) {
      let n = Ge[t];
      De(() => e.events.emit(`vehicle:collision`, n));
    }
    for (let e = 0; e < Ue.length; e++) We.push(Ue[e]);
    ((Ge.length = 0), (Ue.length = 0));
  }
  function Xe(t) {
    let n = t.x,
      r = t.y,
      i = t.z;
    (De(() => e.audio.play(`explosion`, { x: n, y: r + 1, z: i })),
      De(() =>
        e.events.emit(`vehicle:destroyed`, {
          pos: new L(n, r, i),
          vehicleId: t.id,
        }),
      ),
      De(() => e.peds.panic(n, i, 40)),
      De(() => e.traffic.panic(n, i, 40)));
    let a = Oe(n, i);
    (a < 70 && De(() => e.cameraRig.shake(V(1.2 - a / 60, 0.1, 1))),
      De(() => e.input.rumble(V(1 - a / 50, 0, 1), 400)),
      et.current === t && et.blastEject(t),
      (t.driver = `none`),
      (t.sirenOn = !1));
    let o = t.spec.twoWheeler ? 6 : 10,
      s = e.dynamics.query(n, i, o, ae),
      c = ae.slice(0, s);
    for (let e of c) {
      if (e === t.body || !e.active || et.isImmune(t.body, e)) continue;
      let r = e.x - n,
        a = e.z - i,
        s = Math.hypot(r, a),
        c = 1 - V(s / o, 0, 1);
      if (c <= 0) continue;
      (ce.set(r / (s || 1), 0.35, a / (s || 1)).normalize(),
        se.set(e.x, e.y + 1, e.z));
      let l = 40 + 260 * c * c;
      (De(() =>
        e.onDamage?.({ amount: l, source: `explosion`, point: se, dir: ce }),
      ),
        e.owner !== `vehicles` &&
          De(() =>
            e.onImpact?.(
              ce.x * 900 * c * Math.min(4, e.mass / 80),
              ce.z * 900 * c * Math.min(4, e.mass / 80),
              t.body,
            ),
          ));
    }
    Ze && (Ze.position.set(n, r + 2, i), (Qe = 0.6));
  }
  let Ze = null,
    Qe = 0,
    $e = () => {
      let t = (e.quality.dynamicLights ?? 0) >= 3;
      t && !Ze
        ? ((Ze = new ee(16752720, 0, 40, 1.6)), e.scene.add(Ze))
        : !t && Ze && (Ze.removeFromParent(), Ze.dispose(), (Ze = null));
    },
    et = new ng(e, {
      list: n,
      spawn: (e, t, n, r, i) => nt(e, t, n, r, i),
      putPlayerIn: (e) => B.putPlayerIn(e),
    }),
    tt = new mg(e, {
      list: n,
      spawn: (e, t, n, r, i) => nt(e, t, n, r, i),
      despawn: (e) => B.despawn(e),
      physicalBudget: () => 12 - n.length,
    });
  (S.get(`vparked`) === `0` && (tt.enabled = !1),
    S.get(`vriders`) === `box` && Bf(!1));
  function nt(t, r, i, a, o = {}) {
    let s = Go[t] ?? Go.sedan;
    if (((t = s.kind), n.length >= Mg)) {
      let t = null,
        r = -1,
        i = e.player.position;
      for (let e of n) {
        if (e.driver !== `none` || (!e.parked && !e.destroyed)) continue;
        let n = Math.hypot(e.x - i.x, e.z - i.z);
        n > r && ((r = n), (t = e));
      }
      t && B.despawn(t);
    }
    let c = o.seed ?? Math.random(),
      l = o.color ?? s.colors[Math.floor(c * 7919) % s.colors.length],
      u = new wh(Te, t, r, i, a, l, c);
    ((u.driver = o.driver ?? `none`),
      (u.locked = !!o.locked),
      (u.parked = !!o.parked));
    let d =
      (t === `scooter` && l === 16053751) || (t === `van` && l === 1843760);
    return (
      d
        ? u.setLivery(`police`)
        : (o.cargo || typeof o.electric == `boolean`) &&
          u.setLook(o.cargo, o.electric),
      (u.showRider = o.rider ?? !(t === `scooter` && d)),
      o.health !== void 0 && (u.health = V(o.health, 1, 1e3)),
      o.y !== void 0 && u.placeOnFloor(o.y),
      u.driver === `ai` && !u.spec.twoWheeler && u.prepareDeform(),
      o.speed &&
        ((u.vx = Math.sin(a) * o.speed),
        (u.vz = -Math.cos(a) * o.speed),
        (u.vF = o.speed),
        (u.coasting = u.driver === `none`)),
      (u.driver !== `none` || o.speed) && u.wake(),
      u.updateVisual(0, bt.uNight.value),
      n.push(u),
      u
    );
  }
  let rt = null;
  function it() {
    let t = B.createTrafficBatch?.(Ho, Ho.length * 2, { castShadow: !0 });
    if (!t) return;
    e.scene.add(t.mesh);
    let n = e.player.position,
      r = e.plan.nearestLink(n.x, n.z),
      i = r ? r.link.heading : Math.PI / 2,
      a = Math.sin(i),
      o = -Math.cos(i),
      s = Math.cos(i),
      c = Math.sin(i),
      l = new I().setFromAxisAngle(new L(0, 1, 0), -i),
      u = new L(1, 1, 1),
      d = [],
      f = [],
      p = [1, 2, 4, 8, 16, 64, 256, 0, 32, 33, 48, 0, 128];
    (Ho.forEach((t, r) => {
      for (let t of [0, 1]) {
        let i = (r - Ho.length / 2) * 3.6,
          f = 12 + t * 60,
          p = n.x + a * f + s * i,
          m = n.z + o * f + c * i;
        d.push(new R().compose(new L(p, e.groundAt(p, m, n.y + 1), m), l, u));
      }
      f.push(new Me().setHSL(r / Ho.length, 0.6, 0.45).convertSRGBToLinear());
    }),
      (rt = () => {
        t.begin();
        for (let e = 0; e < Ho.length; e++) {
          let n = ((e * 0.618) % 1) * 0.999,
            r = f[e];
          (t.push(Ho[e], d[e * 2], r.r, r.g, r.b, n, p[e % p.length], !1),
            t.push(
              Ho[e],
              d[e * 2 + 1].elements,
              r.r,
              r.g,
              r.b,
              n,
              p[e % p.length],
              !0,
            ));
        }
        t.end();
      }),
      (B._tb = t));
  }
  let B = {
    name: `vehicles`,
    specs: Go,
    list: n,
    get playerVehicle() {
      return et.current;
    },
    get enteringVehicle() {
      return et.enteringVehicle;
    },
    get enterTarget() {
      return et.enterTarget;
    },
    get stats() {
      return x;
    },
    spawn(e, t, n, r, i = {}) {
      return nt(e, t, n, r, i);
    },
    despawn(e) {
      let t = e,
        r = n.indexOf(t);
      r < 0 ||
        (et.current === t && et.forceExit(t, !1),
        g?.remove(t),
        n.splice(r, 1),
        ie.delete(t.id),
        t.dispose());
    },
    get: (e) => n.find((t) => t.id === e),
    putPlayerIn(t) {
      let r = t;
      if (!n.includes(r)) return;
      (et.current && et.current !== r && et.forceExit(et.current, !0),
        (r.driver = `player`),
        (r.used = !0),
        (r.parked = !1),
        (r.coasting = !1),
        (r.fallen = 0),
        (r.locked = !1),
        r.wake(),
        r.prepareDeform());
      let i = r.spec.twoWheeler || r.kind === `kart`;
      (De(() =>
        e.player.enterVehicle(r.id, r.seat, i ? `ride` : `drive`, r.h.camera),
      ),
        De(() => e.player.setSeatVisible?.(i || !!r.spec.boat)),
        De(() =>
          e.events.emit(`player:enterVehicle`, {
            vehicleId: r.id,
            kind: r.kind,
          }),
        ),
        et.onEntered(r));
    },
    getInstancedAsset(t) {
      let n = i.get(t);
      if (!n) {
        let r = Go[t].twoWheeler,
          o = $p(t, {
            wheels: !0,
            rider: r,
            side: e.plan.side,
          }).buildGeometry(),
          s = Qo[t];
        ((o.userData.hasRider = r),
          (o.userData.seat = { y: s.seat[1], z: s.seat[2] }),
          (o.userData.lamps = { head: [...s.headAt], tail: [...s.tailAt] }),
          (o.userData.kind = t));
        let c = _m(o, r ? 0.12 : void 0);
        ((o.userData.lod = c),
          (o.userData.triangles = o.attributes.position.count / 3));
        let l = vd({ instanced: !0, variants: nm[t] }),
          u = le();
        (u && (l.envMap = u),
          (l.userData.depthMaterial = yd(l.vu, !0)),
          (l.name = `vehicle-instanced-${t}`),
          (n = { geometry: o, material: l }),
          i.set(t, n),
          a.push(l));
      }
      return n;
    },
    createFleet(e, t, n) {
      return Dg(e, t, B.getInstancedAsset(e), n);
    },
    getParkedAsset(t) {
      let n = l.get(t);
      if (!n) {
        let r = $p(t, { wheels: !0, side: e.plan.side }),
          i = r.steer ? [r.steer[0], r.steer[1]] : null,
          a = me(r.buildGeometry()),
          o = Xp[t];
        (Object.assign(a.userData, {
          kind: t,
          triangles: a.attributes.position.count / 3,
          steer: i,
          steerPivot: o && i ? { y: o.y, z: o.z, rake: o.rake } : null,
        }),
          (n = { geometry: a, material: B.getInstancedAsset(t).material }),
          l.set(t, n));
      }
      return n;
    },
    getBatchMaterial() {
      let e = ge();
      return { material: e.mat, depthMaterial: e.depth, kinds: Ho };
    },
    createTrafficBatch(t, n, r = {}) {
      try {
        if (!e.renderer.gl.extensions.has(`WEBGL_multi_draw`)) return null;
      } catch {
        return null;
      }
      let i = ge(),
        a = r.far ?? {},
        o;
      try {
        o = new jg(
          t.map((e) => {
            let t = B.getInstancedAsset(e).geometry;
            return {
              kind: e,
              near: t,
              far: e in a ? (a[e] ?? null) : (t.userData.lod ?? null),
            };
          }),
          i.mat,
          i.depth,
          Math.max(1, Math.floor(n)),
        );
      } catch (e) {
        return (console.warn(`[vehicles] createTrafficBatch:`, e), null);
      }
      return ((o.mesh.castShadow = !!r.castShadow), Ct(o.mesh.geometry), o);
    },
    explode(e) {
      e.explode?.();
    },
    repair(e) {
      e.repair?.();
    },
    ejectPlayer() {
      et.current && et.exit(et.current, !0);
    },
    addParkingSpots(e) {
      return tt.addSpots(e);
    },
    teleport(t, r, i, a) {
      let o = t;
      n.includes(o) &&
        (o.teleport(r, i, a),
        et.current === o && De(() => e.player.teleport(r, i, a)));
    },
    debugLineup(t, n, r = Math.PI / 2) {
      let i = e.player.position,
        a = t ?? i.x,
        o = n ?? i.z,
        s = [];
      -Math.cos(r);
      let c = Math.cos(r),
        l = Math.sin(r),
        u = 0;
      return (
        Ho.forEach((e, t) => {
          let n = Go[e];
          u += n.halfW + 0.9;
          let i = nt(e, a + c * u, o + l * u, r, { seed: 0.1 + t * 0.07 });
          ((i.locked = !1), s.push(i), (u += n.halfW + 0.9));
        }),
        s
      );
    },
    async init() {
      e.scene.environment && (d = !1);
      try {
        let t = e.streets?.lightMap;
        t && fd(t.texture, t.xf);
      } catch {}
      le();
      let t = performance.now(),
        n = Object.values(Wu().riderPose ?? {}),
        l = n.length ? [...Jp, ...n] : Jp,
        u = S.get(`vriders`) === `box` ? Promise.resolve() : ef(l);
      await e.yieldFrame();
      let h = performance.now(),
        _ = async () => {
          performance.now() - h > 4 &&
            (await e.yieldFrame(), (h = performance.now()));
        };
      for (let e of Ho)
        (be(e),
          Go[e].twoWheeler || F(e),
          await _(),
          Go[e].twoWheeler ? Ce(e) : (B.getInstancedAsset(e), await _()),
          qp[e] && Te.steerGeo(e),
          await _());
      let v = performance.now();
      await Promise.race([u, new Promise((e) => setTimeout(e, 1500))]);
      let y = performance.now() - v;
      h = performance.now();
      for (let e of Ho)
        Go[e].twoWheeler &&
          (B.getInstancedAsset(e), qp[e] && Te.riderGeo(e), await _());
      console.info(
        `[init] vehicles: models ${Math.round(performance.now() - t)}ms, riders worker wait ${Math.round(y)}ms`,
      );
      let x = le(),
        C = vd({ instanced: !0 });
      (x && (C.envMap = x),
        (C.name = `vehicle-instanced-debris`),
        a.push(C),
        f.useDebrisMaterial(C),
        e.scene.add(f.group));
      let w = !1;
      try {
        w = e.renderer.gl.extensions.has(`WEBGL_multi_draw`);
      } catch {}
      if (
        (Ho.forEach((e, t) => {
          if (t >= 18) return;
          let n = nm[e];
          (od[t].set(...(n?.a ?? [0, 0, 0, 0])),
            sd[t].set(...(n?.b ?? [0, 0, 0, 0])));
        }),
        S.get(`vbatch`) !== `0`)
      ) {
        let t = ge();
        ((g = new Om(
          Ho.slice(0, 18),
          (t) =>
            Go[t].twoWheeler
              ? $p(t, { wheels: !0, side: e.plan.side }).buildGeometry()
              : B.getInstancedAsset(t).geometry,
          t.mat,
          t.depth,
          24,
          (e) => Go[e].twoWheeler,
          w && S.get(`vbwheels`) !== `0`
            ? { plain: Sp(), spoke: Cp(), plainCap: Ng, spokeCap: Pg }
            : null,
        )),
          Ct(g.mesh.geometry),
          e.scene.add(g.mesh),
          await e.yieldFrame());
      }
      if (!g?.wheels) {
        let t = vd({ instanced: !0 });
        (x && (t.envMap = x), (t.name = `vehicle-instanced-wheels`), a.push(t));
        let n = new Me(16777215);
        ((p = new we(me(Sp()), t, Ng)), p.instanceMatrix.setUsage(b));
        for (let e = 0; e < Ng; e++) p.setColorAt(e, n);
        ((p.frustumCulled = !1),
          (p.castShadow = !0),
          (p.count = 0),
          (p.name = `vehicle-wheels`),
          (m = new we(me(Cp()), t, Pg)),
          m.instanceMatrix.setUsage(b));
        for (let e = 0; e < Pg; e++) m.setColorAt(e, n);
        ((m.frustumCulled = !1),
          (m.castShadow = !0),
          (m.count = 0),
          (m.visible = !1),
          (m.name = `vehicle-wheels-spoked`),
          e.scene.add(p, m));
      }
      ((et.fx = f), et.init(), $e());
      for (let e = 0; e < Mg; e++) ue.push(de());
      (Fu(),
        hm(),
        tf(),
        f.warmup(!0),
        (f.density =
          e.quality.level === `low`
            ? 0.5
            : e.quality.level === `medium`
              ? 0.75
              : 1),
        e.events.on(`quality:changed`, () => {
          (et.setupSpot(),
            $e(),
            (f.density =
              e.quality.level === `low`
                ? 0.5
                : e.quality.level === `medium`
                  ? 0.75
                  : 1));
        }),
        e.events.on(`player:died`, () => {
          et.current && et.release(et.current);
        }),
        e.events.on(`player:busted`, () => {
          et.current && et.release(et.current);
        }),
        T &&
          ((j = document.createElement(`div`)),
          Object.assign(j.style, {
            position: `fixed`,
            right: `8px`,
            top: `8px`,
            zIndex: `9999`,
            font: `11px/1.35 ui-monospace,Menlo,monospace`,
            color: `#ffd27f`,
            background: `rgba(0,0,0,.55)`,
            padding: `6px 8px`,
            borderRadius: `6px`,
            pointerEvents: `none`,
            whiteSpace: `pre`,
          }),
          document.body.appendChild(j)),
        (window.__vehicles = B),
        (B._fx = f),
        (B._parked = tt),
        (B._batch = g),
        (B._driver = et),
        (B._mem = () => {
          let e = new Set(),
            t = (t) => {
              let n = 0;
              for (let r of t)
                if (r)
                  for (let t in r.attributes) {
                    let i = r.attributes[t].array;
                    i &&
                      !e.has(i.buffer) &&
                      (e.add(i.buffer), (n += i.byteLength));
                  }
              return Math.round(n / 10485.76) / 100;
            },
            n = [...i.values()].map((e) => e.geometry.userData.lod),
            a = [];
          for (let e of _e.values()) for (let t of e) a.push(t.geo);
          return {
            body: t(r.values()),
            bodyLod: t(xe.values()),
            parked: t(c.values()),
            steer: t(o.values()),
            rider: t(s.values()),
            asset: t([...i.values()].map((e) => e.geometry)),
            assetLod: t(n),
            deformPool: t(a),
            wheels: t([p?.geometry, m?.geometry]),
          };
        }));
    },
    prewarm() {
      N();
      let e = [];
      return (
        Ho.forEach((t, n) => {
          let r = fe(t);
          te.push(r);
          let i = new v();
          ((i.name = `vehicle-prewarm-${t}`), (i.position.x = n * 6));
          let a = (e) => {
            let t = new A(e, r.mat);
            ((t.castShadow = !0),
              (t.receiveShadow = !0),
              (t.customDepthMaterial = r.depth),
              (t.frustumCulled = !1),
              i.add(t));
          };
          (a(be(t)),
            Go[t].twoWheeler ? a(Ce(t)) : a(F(t)),
            qp[t] && (a(Te.steerGeo(t)), a(Te.riderGeo(t))),
            e.push(i));
        }),
        p &&
          ((h ??= (() => {
            let e = new we(p.geometry, p.material, 1);
            return (
              e.setMatrixAt(0, new R()),
              e.setColorAt(0, new Me(16777215)),
              (e.castShadow = !0),
              (e.frustumCulled = !1),
              (e.name = `vehicle-prewarm-wheels`),
              e
            );
          })()),
          e.push(h)),
        (ne = !0),
        e
      );
    },
    start() {
      ((M = !0), f.warmup(!1));
      let t = S.get(`vcam`);
      if (t) {
        let r = new L(),
          i = new L(),
          a = !1,
          o = e.scene.onBeforeRender;
        e.scene.onBeforeRender = (...s) => {
          o?.apply(e.scene, s);
          let c = et.current ?? n[0];
          if (!c) return;
          let l = c.heading,
            u = Math.hypot(c.vx, c.vz) > 3 ? Math.atan2(c.vx, -c.vz) : l,
            d =
              t === `side`
                ? l + Math.PI / 2
                : t === `front`
                  ? l + Math.PI * 0.85
                  : u,
            f =
              c.kind === `bus` || c.kind === `garbage`
                ? 15
                : c.spec.twoWheeler
                  ? 5.2
                  : 7.5,
            p = c.x - Math.sin(d) * f,
            m = c.z + Math.cos(d) * f,
            h = c.y + (c.kind === `bus` || c.kind === `garbage` ? 5 : 2.4);
          ((a ||= (r.set(p, h, m), !0)),
            (r.x += (p - r.x) * 0.12),
            (r.y += (h - r.y) * 0.12),
            (r.z += (m - r.z) * 0.12),
            i.set(c.x, c.y + 1.1, c.z),
            e.camera.position.copy(r),
            e.camera.lookAt(i),
            e.camera.updateMatrixWorld());
        };
      }
      if (e.scene.environment) {
        d = !1;
        for (let e of n) e.mat.envMap = null;
        for (let e of ue) e.mat.envMap = null;
        for (let e of i.values()) e.material.envMap = null;
        for (let e of a) e.envMap = null;
        _ && (_.envMap = null);
      }
      if (S.has(`vlineup`)) {
        let t = e.player.position,
          n = e.plan.nearestLink(t.x, t.z);
        if (n) {
          let t = e.plan.lanePoint(
              n.link,
              0,
              Math.min(n.link.length - 30, n.s + 5),
              { x: 0, z: 0 },
            ),
            r = n.link;
          B.debugLineup(t.x - r.rx * 16, t.z - r.rz * 16, r.heading);
        } else B.debugLineup();
      }
      S.has(`vtbatch`) && it();
    },
    update(r) {
      let i = performance.now();
      (ne && N(),
        C >= 0 && (bt.uNight.value = C),
        w >= 0 && (bt.uWet.value = w));
      let o = bt.uNight.value,
        s = V((o - 0.25) / 0.5, 0, 1);
      if (
        ((dd.uLmK.value = k * s * s * (3 - 2 * s)),
        D && !re && e.time.frame > 3)
      ) {
        let t = D;
        re = !0;
        let n = e.player.position,
          r = e.plan.nearestLink(n.x, n.z);
        if (r) {
          let n = Math.max(0, Math.min(r.link.lanes - 2, r.lane)),
            i = e.plan.lanePoint(
              r.link,
              n,
              Math.max(0, Math.min(r.link.length - 5, r.s + 2)),
              { x: 0, z: 0 },
            );
          B.putPlayerIn(nt(t, i.x, i.z, r.link.heading, {}));
        }
      }
      (rt && rt(), (et.night = o), et.update(r));
      let c = E;
      if (c > 0 && et.current && e.time.elapsed * 1e3 < c + 1500) {
        let e = et.current.controls;
        ((e.throttle = Math.max(e.throttle, 1)), (e.steer = e.steer || O));
      }
      let l = 0,
        u = 0;
      for (let t = 0; t < n.length; t++) {
        let i = n[t];
        i.parked && u++;
        let a;
        i.driver === `player` || i.driver === `ai`
          ? (a = i.controls)
          : (i.coasting && Math.hypot(i.vx, i.vz) < 0.4 && (i.coasting = !1),
            (a = i.coasting ? Jg : qg));
        let o =
          Math.abs(i.vx) + Math.abs(i.vz) > 0.04 ||
          Math.abs(i.yawRate) > 0.02 ||
          i.airborne ||
          i.sinking > 0;
        if (
          (i.driver === `none` &&
          !o &&
          !i.onFire &&
          !(i.destroyed && Se() - i.destroyedAt < 30)
            ? ((i.idleT += r), i.idleT > 0.6 && (i.sleeping = !0))
            : ((i.idleT = 0), (i.sleeping = !1)),
          i.health <= 150 && !i.destroyed && i.tickFire(r),
          i.sleeping)
        )
          continue;
        l++;
        let s = i.driver === `player` && e.input.device === `gamepad`,
          c = s ? 12 : i.spec.twoWheeler ? 6 : 4.6;
        i.simulate(r, a, c, i.driver === `player` && !s);
      }
      let h = Se();
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || Nh(t, Ee, h, y);
      }
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || t.guardPose();
      }
      if (y.size > 64) for (let [e, t] of y) h - t > 3 && y.delete(e);
      g?.sync(n, e.camera.position.x, e.camera.position.z);
      let v = e.camera.position,
        b = 0,
        S = 0,
        T = g?.wheels ?? p,
        A = g?.spokes ?? m;
      for (let i = 0; i < n.length; i++) {
        let a = n[i];
        (a.updateVisual(r, o),
          a.alarmT > 0 &&
            ((a.alarmT -= r),
            (a.hazardT = Math.max(a.hazardT, 0.5)),
            (a.alarmBeat -= r),
            a.alarmBeat <= 0 &&
              !a.destroyed &&
              a.driver === `none` &&
              ((a.alarmBeat = 0.55),
              Oe(a.x, a.z) < 70 &&
                De(() =>
                  e.audio.play(`horn_car`, {
                    x: a.x,
                    y: a.y + 1,
                    z: a.z,
                    volume: 0.55,
                  }),
                )),
            (a.driver !== `none` || a.destroyed) && (a.alarmT = 0)),
          a.emitFx(r, o, v.x, v.y, v.z, f.density),
          t.has(a.kind)
            ? A && S < 14 && (S = a.writeWheels(A, S))
            : T && b < 68 && (b = a.writeWheels(T, b)));
      }
      (g?.wheels?.end(b),
        g?.spokes?.end(S),
        m &&
          ((m.count = S),
          (m.visible = S > 0),
          S > 0 && (m.instanceMatrix.needsUpdate = !0)),
        p &&
          ((p.count = b),
          (p.instanceMatrix.needsUpdate = !0),
          (p.material.envMapIntensity = 1 - 0.8 * o)));
      for (let e = 0; e < a.length; e++)
        a[e].envMapIntensity = d ? 1 - 0.8 * o : 1;
      (_ && (_.envMapIntensity = d ? 1 - 0.8 * o : 1),
        f.update(r, e.time.elapsed),
        Ze &&
          ((Qe = Math.max(0, Qe - r)),
          (Ze.intensity = Qe > 0 ? 900 * Qe * Qe : 0)),
        Ye(),
        (je -= r) <= 0 && ((je = 2), Ae.forEach(Ne)),
        M && tt.update(r));
      let ee = performance.now() - i;
      if (
        ((x.ms += (ee - x.ms) * 0.05),
        (x.active = l),
        (x.parked = u),
        (x.particles = f.particleCount),
        (x.total = n.length),
        j && e.time.frame % 6 == 0)
      ) {
        let e = et.current;
        j.textContent = e
          ? `${e.spec.name.en}  ${e.kmh.toFixed(0)} km/h  gear ${e.gear}  rpm ${(e.rpm * 100).toFixed(0)}%\nslip ${(e.slip * 57.3).toFixed(0)}°  ${e.drifting ? `DRIFT` : ``} ${e.handbrake ? `HB` : ``} grip ${e.gripK.toFixed(1)}\nhp ${e.health.toFixed(0)}  vehicles ${n.length} awake ${l}  fx ${f.particleCount}\njs ${x.ms.toFixed(3)} ms`
          : `vehicles ${n.length} awake ${l} parked ${u}  fx ${f.particleCount}\njs ${x.ms.toFixed(3)} ms`;
      }
    },
  };
  return B;
}
