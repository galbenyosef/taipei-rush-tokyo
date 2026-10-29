// tokyo/assets/actors-bknSEpf2 78 — math
// Lines 32324-33587 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Zb(e) {
  Wv(e.region?.signage?.brands?.delivery);
  let t = new Set([`motorcycle`, ...(zd().spokeWheels ?? [])]),
    n = [],
    r = new Map(),
    i = new Map(),
    a = [],
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = new Map(),
    u = null,
    f = !0,
    p = new Fd((t, n, r) =>
      e.groundAt ? e.groundAt(t, n, r, 0.3) : e.plan.groundHeight(t, n),
    ),
    m = null,
    h = null,
    g = null,
    _ = null,
    y = null,
    b = new Map(),
    x = { ms: 0, active: 0, parked: 0, particles: 0, total: 0 },
    S = e.params,
    C = S.has(`vnight`) ? H(Number(S.get(`vnight`) || 1), 0, 1) : -1,
    w = S.has(`vwet`) ? H(Number(S.get(`vwet`) || 1), 0, 1) : -1,
    T = S.has(`vdebug`),
    E = Number(S.get(`vauto`) || 0),
    D = tr[S.get(`drive`) ?? ``] ? S.get(`drive`) : null,
    k = Number(S.get(`vsteer`) || 0),
    A = S.has(`vlm`) ? Math.max(0, Number(S.get(`vlm`)) || 0) : Kb,
    M = null,
    ee = !1,
    P = [],
    F = !1,
    I = () => {
      for (let e of P) de(e);
      ((P.length = 0), (F = !1));
    },
    ne = !1,
    ie = new Map(),
    ae = [],
    L = [],
    R = new V(),
    oe = new V(),
    se = () => (f ? ((u ||= vf(e.renderer.gl)), u) : null),
    ce = [],
    ue = () => {
      let e = mf({ instanced: !1 });
      return ((e.name = `vehicle-physical`), { mat: e, depth: hf(e.vu, !1) });
    },
    z = (e) => {
      let t = ce.pop() ?? ue(),
        n = t.mat.vu,
        r = Uv[e] ?? ef;
      return (
        n.uVarA.value.set(r.a[0], r.a[1], r.a[2], r.a[3]),
        n.uVarB.value.set(r.b[0], r.b[1], r.b[2], r.b[3]),
        n.uState.value.set(0, 0, 0, 0),
        (t.mat.envMap = se()),
        (t.mat.envMapIntensity = 1),
        t
      );
    },
    de = (e) => {
      ce.length < qb ? ce.push(e) : (e.mat.dispose(), e.depth.dispose());
    },
    fe = (e) => ((e.userData.keepCpu = !0), e),
    pe = null,
    me = () => {
      if (!y) {
        let e = mf({ instanced: !1, batched: !0 }),
          t = se();
        (t && (e.envMap = t), (e.name = `vehicle-batch`), (y = e));
      }
      return ((pe ??= hf(y.vu, !1, !0)), { mat: y, depth: pe });
    },
    he = new Map(),
    B = (e) => {
      let t = he.get(e)?.pop();
      if (t) return t;
      let n = _e(e),
        r = new le();
      for (let e in n.attributes) {
        let t = n.attributes[e];
        r.setAttribute(
          e,
          e === `position` || e === `normal` ? t.clone().setUsage(O) : t,
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
    ge = (e, t) => {
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
      let n = he.get(e.kind);
      if ((n || he.set(e.kind, (n = [])), n.length < Jb)) {
        n.push(e);
        return;
      }
      for (let t of Object.keys(e.geo.attributes))
        t !== `position` && t !== `normal` && e.geo.deleteAttribute(t);
      e.geo.dispose();
    },
    _e = (t) => {
      let n = r.get(t);
      return (
        n ||
          r.set(
            t,
            (n = fe(Bv(t, { wheels: !1, side: e.plan.side }).buildGeometry())),
          ),
        n
      );
    },
    ve = new Map(),
    ye = (e) => {
      let t = ve.get(e);
      return (t || ve.set(e, (t = fe(Kf(_e(e))))), t);
    },
    be = () => e.time.elapsed,
    xe = (t) => {
      let n = c.get(t);
      return (
        n ||
          c.set(
            t,
            (n = fe(
              Bv(t, {
                wheels: !1,
                steer: !0,
                side: e.plan.side,
              }).buildGeometry(),
            )),
          ),
        n
      );
    },
    Se = {
      ctx: e,
      fx: p,
      bodyGeo: _e,
      bodyLod: ye,
      steerGeo: (e) => {
        let t = o.get(e);
        return (t || o.set(e, (t = fe(Rv(e)))), t);
      },
      riderGeo: (e) => {
        let t = s.get(e);
        return (t || s.set(e, (t = fe(Iv(e)))), t);
      },
      parkedGeo: (e) => xe(e),
      get envMap() {
        return se();
      },
      onCollision: (e, t, n, r, i, a, o) => Fe(e, t, n, r, i, a, o),
      onDestroyed: (e) => Je(e),
      onSplash: (t) => {
        let n = e.plan.waterLevelAt(t.x, t.z);
        Te(() =>
          e.audio.play(`splash`, {
            x: t.x,
            y: n,
            z: t.z,
            volume: t.spec.twoWheeler ? 0.6 : 1,
          }),
        );
        let r = Math.ceil(16 * p.density);
        for (let e = 0; e < r; e++) {
          let e = Math.random() * 6.28,
            r = 1 + Math.random() * 3;
          p.smokePuff(
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
        p.glowParticle(
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
        Ee(t.x, t.z) < 60 &&
          Te(() =>
            e.audio.play(`backfire`, {
              x: t.x,
              y: t.y + 0.4,
              z: t.z,
              volume: t.kind === `sports` ? 0.9 : 0.6,
            }),
          );
      },
      wet: () => Math.max(Gt.uWet.value, e.env?.rain ?? 0),
      onSunk: (t) => {
        Te(() =>
          e.events.emit(`vehicle:destroyed`, {
            pos: new V(t.x, t.y, t.z),
            vehicleId: t.id,
          }),
        );
      },
      onIgnite: (e) => Qe.onIgnite(e),
      onLowside: (e) => Qe.lowside(e),
      now: be,
      takeMaterial: z,
      releaseMaterial: de,
      takeDeform: B,
      releaseDeform: ge,
    },
    we = {
      ctx: e,
      onVehicleImpact: (e, t, n, r, i, a, o, s) => Re(e, t, n, r, i, a, o, s),
      onPedHit: (e, t, n, r, i) => Be(e, t, n, r, i),
      immune: (e, t) => Qe.isImmune(e, t),
    },
    Te = (e) => {
      try {
        e();
      } catch {}
    },
    Ee = (t, n) => Math.hypot(e.camera.position.x - t, e.camera.position.z - n);
  function De(e, t, n) {
    if (t <= n) return 0;
    let r = H(1500 / e.spec.mass, 0.35, 1.25);
    return 0.8 * (t * t - n * n) * r;
  }
  let Oe = new Map(),
    ke = 0,
    Ae = (e, t) => {
      be() - e.t > 1.5 && Oe.delete(t);
    };
  function je(e, t) {
    let n = be(),
      r = e.id * 16777216 + (t & 16777215),
      i = Oe.get(r);
    return (
      i || Oe.set(r, (i = { t: -10, dv: 0, crime: !1 })),
      n - i.t > Wb && ((i.dv = 0), (i.crime = !1)),
      (i.t = n),
      i
    );
  }
  function Me(t, n, r, i, a, o, s, c, l, u = 1) {
    if (t.destroyed) return null;
    let d = je(t, c),
      f = d.dv;
    if (n <= f) return d;
    d.dv = n;
    let m = De(t, n, l) - De(t, f, l);
    if (m > 0) {
      let e = H(1500 / t.spec.mass, 0.35, 1.25);
      t.hurt(m * u * (t.driver === `ai` ? 0.5 : 1) * (t.kart ? 0.15 : 1));
      let a = r - t.x,
        o = i - t.z,
        s = t.heading,
        c = a * Math.cos(s) + o * Math.sin(s),
        l = -a * Math.sin(s) + o * Math.cos(s);
      (n > 6 && !t.kart && t.crumple(c, 0.7, l, H((n - 6) * 0.02, 0, 0.22) * e),
        t.driver === `none` &&
          t.parked &&
          ((t.hazardT = 8), n > 4.5 && !t.spec.twoWheeler && (t.alarmT = 9)));
    }
    let h = be(),
      g = ie.get(t.id) ?? -10;
    if (n > 2.5 && (f <= 2.5 || n > f + 3) && h - g > 0.12) {
      ie.set(t.id, h);
      let c = t.y + 0.6;
      if (
        Ee(r, i) < 80 &&
        (n > 4 &&
          p.sparks(r, c, i, a, o, Math.min(18, Math.round(n)), 3 + n * 0.3),
        n > 12)
      ) {
        let e = 0.55;
        for (let t = 0; t < 4; t++)
          p.smokePuff(
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
        (Te(() => e.cameraRig.shake(H(n * 0.045, 0.08, 1))),
        Te(() => e.input.rumble(H(n / 20, 0.2, 1), 150))),
        Ge({
          pos: new V(r, c, i),
          impulse: Math.round(n * 100) / 100,
          vehicleId: t.id,
          other: s,
        }));
    }
    return d;
  }
  function Ne(e, t, n, r, i, a, o, s, c = 0) {
    let l = e.preVx,
      u = e.preVz,
      d = Math.hypot(l, u),
      f = d > 0.5 ? Math.abs(l * n + u * r) / d : 1,
      p = c || (f < 0.5 ? Hb : Vb);
    (!i && !c && Pe(e, a, o) && (p = Math.max(p, Hb)),
      t > p
        ? Qe.eject(e, t, n, r, i, a, o, s)
        : t > 2.5 && e.wobble((t - 2.5) / (p - 2.5)));
  }
  function Pe(t, n, r) {
    let i = e.statics.query(n - 0.35, r - 0.35, n + 0.35, r + 0.35, L),
      a = -1 / 0;
    for (let e = 0; e < i; e++) {
      let n = L[e];
      n.minY > t.y + 1.1 || n.maxY < t.y + 0.25 || (n.maxY > a && (a = n.maxY));
    }
    return Number.isFinite(a) && a - t.y <= 0.5;
  }
  function Fe(e, t, n, r, i, a, o) {
    (Me(e, t, n, r, i, a, o, Gb, Lb),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        Ne(e, t, i, a, null, n, r, o));
  }
  let Ie = (t, n) => {
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
    Le = (e) => !!e && e.spec.twoWheeler && e.driver === `none` && !e.destroyed;
  function Re(e, t, n, r, i, a, o, s) {
    let c = e.spec.mass,
      l = t
        ? t.spec.mass
        : n.owner === `culture`
          ? 8e3
          : Math.max(80, n.mass || 1200),
      u = Math.min(1, (1.25 * l) / (c + l)),
      d = Math.min(1, (1.25 * c) / (c + l)),
      f = e.driver === `player` && Ie(t, n),
      p = !!t && t.driver === `player` && Ie(e, e.body),
      m = Me(
        e,
        r * u,
        i,
        a,
        o,
        s,
        t ? `vehicle` : n.owner,
        n.id,
        f ? zb : Rb,
        f ? Bb : 1,
      ),
      h = t
        ? Me(
            t,
            r * d,
            i,
            a,
            -o,
            -s,
            `vehicle`,
            e.body.id,
            p ? zb : Rb,
            p ? Bb : 1,
          )
        : null;
    (Le(t) && r > 3 && t.knockOver(-o, -s, r),
      Le(e) && r > 3 && t && e.knockOver(o, s, r));
    let g = e.driver === `player` ? e : t && t.driver === `player` ? t : null;
    if (g && r > 6) {
      let t = g === e ? m : h,
        o = g === e ? n : e.body;
      if (t && !t.crime && !o.userData?.noCrime) {
        t.crime = !0;
        let n = o.owner === `traffic` && o.userData?.kind === `police`;
        We({
          type: n ? `assault_police` : `vehicle_damage`,
          pos: new V(i, e.y, a),
          severity: r > 14 ? 2 : 1,
        });
      }
    }
    (ze(e, t, r, o, s, t ? (t.kart ? `kart` : t.kind) : n.owner),
      t && ze(t, e, r, -o, -s, e.kart ? `kart` : e.kind),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        Ne(
          e,
          Math.min(r, e.preSpeed * 1.4 + 2),
          o,
          s,
          n,
          i,
          a,
          `vehicle`,
          Le(t) ? Ub : 0,
        ),
      t &&
        t.driver === `player` &&
        t.spec.twoWheeler &&
        Ne(
          t,
          Math.min(r, t.preSpeed * 1.4 + 2),
          -o,
          -s,
          e.body,
          i,
          a,
          `vehicle`,
          Le(e) ? Ub : 0,
        ));
  }
  function ze(t, n, r, i, a, o) {
    if (!t.kart || t.destroyed || r < (n?.kart ? 8 : 3.2)) return;
    t.kart.lastSpin = `${o} ${r.toFixed(1)}`;
    let s = Math.sin(t.heading),
      c = -Math.cos(t.heading);
    (t.kart.spin(s * a - c * i >= 0 ? 1 : -1, H(0.8 + r * 0.05, 0.9, 1.5)),
      t.driver === `player` && Te(() => e.input.rumble(0.6, 220)));
  }
  function Be(t, n, r, i, a) {
    let o = t.y + 1;
    (Te(() =>
      e.audio.play(`punch`, {
        x: n.x,
        y: o,
        z: n.z,
        volume: H(r / 12, 0.4, 1),
      }),
    ),
      t.driver === `player` &&
        (n.kind !== `player` &&
          !n.userData?.noCrime &&
          We({
            type: n.kind === `police` ? `assault_police` : `hit_ped`,
            pos: new V(n.x, n.y, n.z),
            severity: r > 13 ? 3 : r > 7 ? 2 : 1,
          }),
        Te(() => e.cameraRig.shake(H(r * 0.015, 0.05, 0.3))),
        Te(() => e.peds.panic(n.x, n.z, 18))));
  }
  let Ve = [],
    He = [],
    Ue = [],
    We = (e) => void (Ve.length < 16 && Ve.push(e)),
    Ge = (e) => void (Ue.length < 16 && Ue.push(e)),
    Ke = (t) => Te(() => e.events.emit(`crime`, t));
  function qe() {
    for (let e = 0; e < He.length; e++) Ke(He[e]);
    He.length = 0;
    for (let t = 0; t < Ue.length; t++) {
      let n = Ue[t];
      Te(() => e.events.emit(`vehicle:collision`, n));
    }
    for (let e = 0; e < Ve.length; e++) He.push(Ve[e]);
    ((Ue.length = 0), (Ve.length = 0));
  }
  function Je(t) {
    let n = t.x,
      r = t.y,
      i = t.z;
    (Te(() => e.audio.play(`explosion`, { x: n, y: r + 1, z: i })),
      Te(() =>
        e.events.emit(`vehicle:destroyed`, {
          pos: new V(n, r, i),
          vehicleId: t.id,
        }),
      ),
      Te(() => e.peds.panic(n, i, 40)),
      Te(() => e.traffic.panic(n, i, 40)));
    let a = Ee(n, i);
    (a < 70 && Te(() => e.cameraRig.shake(H(1.2 - a / 60, 0.1, 1))),
      Te(() => e.input.rumble(H(1 - a / 50, 0, 1), 400)),
      Qe.current === t && Qe.blastEject(t),
      (t.driver = `none`),
      (t.sirenOn = !1));
    let o = t.spec.twoWheeler ? 6 : 10,
      s = e.dynamics.query(n, i, o, ae),
      c = ae.slice(0, s);
    for (let e of c) {
      if (e === t.body || !e.active || Qe.isImmune(t.body, e)) continue;
      let r = e.x - n,
        a = e.z - i,
        s = Math.hypot(r, a),
        c = 1 - H(s / o, 0, 1);
      if (c <= 0) continue;
      (oe.set(r / (s || 1), 0.35, a / (s || 1)).normalize(),
        R.set(e.x, e.y + 1, e.z));
      let l = 40 + 260 * c * c;
      (Te(() =>
        e.onDamage?.({ amount: l, source: `explosion`, point: R, dir: oe }),
      ),
        e.owner !== `vehicles` &&
          Te(() =>
            e.onImpact?.(
              oe.x * 900 * c * Math.min(4, e.mass / 80),
              oe.z * 900 * c * Math.min(4, e.mass / 80),
              t.body,
            ),
          ));
    }
    Ye && (Ye.position.set(n, r + 2, i), (Xe = 0.6));
  }
  let Ye = null,
    Xe = 0,
    Ze = () => {
      let t = (e.quality.dynamicLights ?? 0) >= 3;
      t && !Ye
        ? ((Ye = new te(16752720, 0, 40, 1.6)), e.scene.add(Ye))
        : !t && Ye && (Ye.removeFromParent(), Ye.dispose(), (Ye = null));
    },
    Qe = new cb(e, {
      list: n,
      spawn: (e, t, n, r, i) => et(e, t, n, r, i),
      putPlayerIn: (e) => rt.putPlayerIn(e),
    }),
    $e = new bb(e, {
      list: n,
      spawn: (e, t, n, r, i) => et(e, t, n, r, i),
      despawn: (e) => rt.despawn(e),
      physicalBudget: () => 12 - n.length,
    });
  (S.get(`vparked`) === `0` && ($e.enabled = !1),
    S.get(`vriders`) === `box` && D_(!1));
  function et(t, r, i, a, o = {}) {
    let s = tr[t] ?? tr.sedan;
    if (((t = s.kind), n.length >= Pb)) {
      let t = null,
        r = -1,
        i = e.player.position;
      for (let e of n) {
        if (e.driver !== `none` || (!e.parked && !e.destroyed)) continue;
        let n = Math.hypot(e.x - i.x, e.z - i.z);
        n > r && ((r = n), (t = e));
      }
      t && rt.despawn(t);
    }
    let c = o.seed ?? Math.random(),
      l = o.color ?? s.colors[Math.floor(c * 7919) % s.colors.length],
      u = new Ay(Se, t, r, i, a, l, c);
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
      o.health !== void 0 && (u.health = H(o.health, 1, 1e3)),
      o.y !== void 0 && u.placeOnFloor(o.y),
      u.driver === `ai` && !u.spec.twoWheeler && u.prepareDeform(),
      o.speed &&
        ((u.vx = Math.sin(a) * o.speed),
        (u.vz = -Math.cos(a) * o.speed),
        (u.vF = o.speed),
        (u.coasting = u.driver === `none`)),
      (u.driver !== `none` || o.speed) && u.wake(),
      u.updateVisual(0, Gt.uNight.value),
      n.push(u),
      u
    );
  }
  let tt = null;
  function nt() {
    let t = rt.createTrafficBatch?.(Qn, Qn.length * 2, { castShadow: !0 });
    if (!t) return;
    e.scene.add(t.mesh);
    let n = e.player.position,
      r = e.plan.nearestLink(n.x, n.z),
      i = r ? r.link.heading : Math.PI / 2,
      a = Math.sin(i),
      o = -Math.cos(i),
      s = Math.cos(i),
      c = Math.sin(i),
      l = new v().setFromAxisAngle(new V(0, 1, 0), -i),
      u = new V(1, 1, 1),
      d = [],
      f = [],
      p = [1, 2, 4, 8, 16, 64, 256, 0, 32, 33, 48, 0, 128];
    (Qn.forEach((t, r) => {
      for (let t of [0, 1]) {
        let i = (r - Qn.length / 2) * 3.6,
          f = 12 + t * 60,
          p = n.x + a * f + s * i,
          m = n.z + o * f + c * i;
        d.push(new N().compose(new V(p, e.groundAt(p, m, n.y + 1), m), l, u));
      }
      f.push(new j().setHSL(r / Qn.length, 0.6, 0.45).convertSRGBToLinear());
    }),
      (tt = () => {
        t.begin();
        for (let e = 0; e < Qn.length; e++) {
          let n = ((e * 0.618) % 1) * 0.999,
            r = f[e];
          (t.push(Qn[e], d[e * 2], r.r, r.g, r.b, n, p[e % p.length], !1),
            t.push(
              Qn[e],
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
      (rt._tb = t));
  }
  let rt = {
    name: `vehicles`,
    specs: tr,
    list: n,
    get playerVehicle() {
      return Qe.current;
    },
    get enteringVehicle() {
      return Qe.enteringVehicle;
    },
    get enterTarget() {
      return Qe.enterTarget;
    },
    get stats() {
      return x;
    },
    spawn(e, t, n, r, i = {}) {
      return et(e, t, n, r, i);
    },
    despawn(e) {
      let t = e,
        r = n.indexOf(t);
      r < 0 ||
        (Qe.current === t && Qe.forceExit(t, !1),
        _?.remove(t),
        n.splice(r, 1),
        ie.delete(t.id),
        t.dispose());
    },
    get: (e) => n.find((t) => t.id === e),
    putPlayerIn(t) {
      let r = t;
      if (!n.includes(r)) return;
      (Qe.current && Qe.current !== r && Qe.forceExit(Qe.current, !0),
        (r.driver = `player`),
        (r.used = !0),
        (r.parked = !1),
        (r.coasting = !1),
        (r.fallen = 0),
        (r.locked = !1),
        r.wake(),
        r.prepareDeform());
      let i = r.spec.twoWheeler || r.kind === `kart`;
      (Te(() =>
        e.player.enterVehicle(r.id, r.seat, i ? `ride` : `drive`, r.h.camera),
      ),
        Te(() => e.player.setSeatVisible?.(i || !!r.spec.boat)),
        Te(() =>
          e.events.emit(`player:enterVehicle`, {
            vehicleId: r.id,
            kind: r.kind,
          }),
        ),
        Qe.onEntered(r));
    },
    getInstancedAsset(t) {
      let n = i.get(t);
      if (!n) {
        let r = tr[t].twoWheeler,
          o = Bv(t, {
            wheels: !0,
            rider: r,
            side: e.plan.side,
          }).buildGeometry(),
          s = cr[t];
        ((o.userData.hasRider = r),
          (o.userData.seat = { y: s.seat[1], z: s.seat[2] }),
          (o.userData.lamps = { head: [...s.headAt], tail: [...s.tailAt] }),
          (o.userData.kind = t));
        let c = Kf(o, r ? 0.12 : void 0);
        ((o.userData.lod = c),
          (o.userData.triangles = o.attributes.position.count / 3));
        let l = mf({ instanced: !0, variants: Uv[t] }),
          u = se();
        (u && (l.envMap = u),
          (l.userData.depthMaterial = hf(l.vu, !0)),
          (l.name = `vehicle-instanced-${t}`),
          (n = { geometry: o, material: l }),
          i.set(t, n),
          a.push(l));
      }
      return n;
    },
    createFleet(e, t, n) {
      return kb(e, t, rt.getInstancedAsset(e), n);
    },
    getParkedAsset(t) {
      let n = l.get(t);
      if (!n) {
        let r = Bv(t, { wheels: !0, side: e.plan.side }),
          i = r.steer ? [r.steer[0], r.steer[1]] : null,
          a = fe(r.buildGeometry()),
          o = Lv[t];
        (Object.assign(a.userData, {
          kind: t,
          triangles: a.attributes.position.count / 3,
          steer: i,
          steerPivot: o && i ? { y: o.y, z: o.z, rake: o.rake } : null,
        }),
          (n = { geometry: a, material: rt.getInstancedAsset(t).material }),
          l.set(t, n));
      }
      return n;
    },
    getBatchMaterial() {
      let e = me();
      return { material: e.mat, depthMaterial: e.depth, kinds: Qn };
    },
    createTrafficBatch(t, n, r = {}) {
      try {
        if (!e.renderer.gl.extensions.has(`WEBGL_multi_draw`)) return null;
      } catch {
        return null;
      }
      let i = me(),
        a = r.far ?? {},
        o;
      try {
        o = new Nb(
          t.map((e) => {
            let t = rt.getInstancedAsset(e).geometry;
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
      return ((o.mesh.castShadow = !!r.castShadow), yt(o.mesh.geometry), o);
    },
    explode(e) {
      e.explode?.();
    },
    repair(e) {
      e.repair?.();
    },
    ejectPlayer() {
      Qe.current && Qe.exit(Qe.current, !0);
    },
    addParkingSpots(e) {
      return $e.addSpots(e);
    },
    teleport(t, r, i, a) {
      let o = t;
      n.includes(o) &&
        (o.teleport(r, i, a),
        Qe.current === o && Te(() => e.player.teleport(r, i, a)));
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
        Qn.forEach((e, t) => {
          let n = tr[e];
          u += n.halfW + 0.9;
          let i = et(e, a + c * u, o + l * u, r, { seed: 0.1 + t * 0.07 });
          ((i.locked = !1), s.push(i), (u += n.halfW + 0.9));
        }),
        s
      );
    },
    async init() {
      e.scene.environment && (f = !1);
      try {
        let t = e.streets?.lightMap;
        t && cf(t.texture, t.xf);
      } catch {}
      se();
      let t = performance.now(),
        n = Object.values(zd().riderPose ?? {}),
        l = n.length ? [...Fv, ...n] : Fv,
        u = S.get(`vriders`) === `box` ? Promise.resolve() : Hg(l);
      await e.yieldFrame();
      let d = performance.now(),
        g = async () => {
          performance.now() - d > 4 &&
            (await e.yieldFrame(), (d = performance.now()));
        };
      for (let e of Qn)
        (_e(e),
          tr[e].twoWheeler || ye(e),
          await g(),
          tr[e].twoWheeler ? xe(e) : (rt.getInstancedAsset(e), await g()),
          Pv[e] && Se.steerGeo(e),
          await g());
      let v = performance.now();
      await Promise.race([u, new Promise((e) => setTimeout(e, 1500))]);
      let y = performance.now() - v;
      d = performance.now();
      for (let e of Qn)
        tr[e].twoWheeler &&
          (rt.getInstancedAsset(e), Pv[e] && Se.riderGeo(e), await g());
      console.info(
        `[init] vehicles: models ${Math.round(performance.now() - t)}ms, riders worker wait ${Math.round(y)}ms`,
      );
      let b = se(),
        x = mf({ instanced: !0 });
      (b && (x.envMap = b),
        (x.name = `vehicle-instanced-debris`),
        a.push(x),
        p.useDebrisMaterial(x),
        e.scene.add(p.group));
      let C = !1;
      try {
        C = e.renderer.gl.extensions.has(`WEBGL_multi_draw`);
      } catch {}
      if (
        (Qn.forEach((e, t) => {
          if (t >= 18) return;
          let n = Uv[e];
          (tf[t].set(...(n?.a ?? [0, 0, 0, 0])),
            nf[t].set(...(n?.b ?? [0, 0, 0, 0])));
        }),
        S.get(`vbatch`) !== `0`)
      ) {
        let t = me();
        ((_ = new qv(
          Qn.slice(0, 18),
          (t) =>
            tr[t].twoWheeler
              ? Bv(t, { wheels: !0, side: e.plan.side }).buildGeometry()
              : rt.getInstancedAsset(t).geometry,
          t.mat,
          t.depth,
          24,
          (e) => tr[e].twoWheeler,
          C && S.get(`vbwheels`) !== `0`
            ? { plain: lv(), spoke: uv(), plainCap: Fb, spokeCap: Ib }
            : null,
        )),
          yt(_.mesh.geometry),
          e.scene.add(_.mesh),
          await e.yieldFrame());
      }
      if (!_?.wheels) {
        let t = mf({ instanced: !0 });
        (b && (t.envMap = b), (t.name = `vehicle-instanced-wheels`), a.push(t));
        let n = new j(16777215);
        ((m = new Ce(fe(lv()), t, Fb)), m.instanceMatrix.setUsage(O));
        for (let e = 0; e < Fb; e++) m.setColorAt(e, n);
        ((m.frustumCulled = !1),
          (m.castShadow = !0),
          (m.count = 0),
          (m.name = `vehicle-wheels`),
          (h = new Ce(fe(uv()), t, Ib)),
          h.instanceMatrix.setUsage(O));
        for (let e = 0; e < Ib; e++) h.setColorAt(e, n);
        ((h.frustumCulled = !1),
          (h.castShadow = !0),
          (h.count = 0),
          (h.visible = !1),
          (h.name = `vehicle-wheels-spoked`),
          e.scene.add(m, h));
      }
      ((Qe.fx = p), Qe.init(), Ze());
      for (let e = 0; e < Pb; e++) ce.push(ue());
      (Df(),
        Wf(),
        Ug(),
        p.warmup(!0),
        (p.density =
          e.quality.level === `low`
            ? 0.5
            : e.quality.level === `medium`
              ? 0.75
              : 1),
        e.events.on(`quality:changed`, () => {
          (Qe.setupSpot(),
            Ze(),
            (p.density =
              e.quality.level === `low`
                ? 0.5
                : e.quality.level === `medium`
                  ? 0.75
                  : 1));
        }),
        e.events.on(`player:died`, () => {
          Qe.current && Qe.release(Qe.current);
        }),
        e.events.on(`player:busted`, () => {
          Qe.current && Qe.release(Qe.current);
        }),
        T &&
          ((M = document.createElement(`div`)),
          Object.assign(M.style, {
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
          document.body.appendChild(M)),
        (window.__vehicles = rt),
        (rt._fx = p),
        (rt._parked = $e),
        (rt._batch = _),
        (rt._driver = Qe),
        (rt._mem = () => {
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
          for (let e of he.values()) for (let t of e) a.push(t.geo);
          return {
            body: t(r.values()),
            bodyLod: t(ve.values()),
            parked: t(c.values()),
            steer: t(o.values()),
            rider: t(s.values()),
            asset: t([...i.values()].map((e) => e.geometry)),
            assetLod: t(n),
            deformPool: t(a),
            wheels: t([m?.geometry, h?.geometry]),
          };
        }));
    },
    prewarm() {
      I();
      let e = [];
      return (
        Qn.forEach((t, n) => {
          let r = z(t);
          P.push(r);
          let i = new re();
          ((i.name = `vehicle-prewarm-${t}`), (i.position.x = n * 6));
          let a = (e) => {
            let t = new d(e, r.mat);
            ((t.castShadow = !0),
              (t.receiveShadow = !0),
              (t.customDepthMaterial = r.depth),
              (t.frustumCulled = !1),
              i.add(t));
          };
          (a(_e(t)),
            tr[t].twoWheeler ? a(xe(t)) : a(ye(t)),
            Pv[t] && (a(Se.steerGeo(t)), a(Se.riderGeo(t))),
            e.push(i));
        }),
        m &&
          ((g ??= (() => {
            let e = new Ce(m.geometry, m.material, 1);
            return (
              e.setMatrixAt(0, new N()),
              e.setColorAt(0, new j(16777215)),
              (e.castShadow = !0),
              (e.frustumCulled = !1),
              (e.name = `vehicle-prewarm-wheels`),
              e
            );
          })()),
          e.push(g)),
        (F = !0),
        e
      );
    },
    start() {
      ((ee = !0), p.warmup(!1));
      let t = S.get(`vcam`);
      if (t) {
        let r = new V(),
          i = new V(),
          a = !1,
          o = e.scene.onBeforeRender;
        e.scene.onBeforeRender = (...s) => {
          o?.apply(e.scene, s);
          let c = Qe.current ?? n[0];
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
        f = !1;
        for (let e of n) e.mat.envMap = null;
        for (let e of ce) e.mat.envMap = null;
        for (let e of i.values()) e.material.envMap = null;
        for (let e of a) e.envMap = null;
        y && (y.envMap = null);
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
          rt.debugLineup(t.x - r.rx * 16, t.z - r.rz * 16, r.heading);
        } else rt.debugLineup();
      }
      S.has(`vtbatch`) && nt();
    },
    update(r) {
      let i = performance.now();
      (F && I(),
        C >= 0 && (Gt.uNight.value = C),
        w >= 0 && (Gt.uWet.value = w));
      let o = Gt.uNight.value,
        s = H((o - 0.25) / 0.5, 0, 1);
      if (
        ((sf.uLmK.value = A * s * s * (3 - 2 * s)),
        D && !ne && e.time.frame > 3)
      ) {
        let t = D;
        ne = !0;
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
          rt.putPlayerIn(et(t, i.x, i.z, r.link.heading, {}));
        }
      }
      (tt && tt(), (Qe.night = o), Qe.update(r));
      let c = E;
      if (c > 0 && Qe.current && e.time.elapsed * 1e3 < c + 1500) {
        let e = Qe.current.controls;
        ((e.throttle = Math.max(e.throttle, 1)), (e.steer = e.steer || k));
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
            (a = i.coasting ? Xb : Yb));
        let o =
          Math.abs(i.vx) + Math.abs(i.vz) > 0.04 ||
          Math.abs(i.yawRate) > 0.02 ||
          i.airborne ||
          i.sinking > 0;
        if (
          (i.driver === `none` &&
          !o &&
          !i.onFire &&
          !(i.destroyed && be() - i.destroyedAt < 30)
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
      let d = be();
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || zy(t, we, d, b);
      }
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || t.guardPose();
      }
      if (b.size > 64) for (let [e, t] of b) d - t > 3 && b.delete(e);
      _?.sync(n, e.camera.position.x, e.camera.position.z);
      let g = e.camera.position,
        v = 0,
        S = 0,
        T = _?.wheels ?? m,
        O = _?.spokes ?? h;
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
              Ee(a.x, a.z) < 70 &&
                Te(() =>
                  e.audio.play(`horn_car`, {
                    x: a.x,
                    y: a.y + 1,
                    z: a.z,
                    volume: 0.55,
                  }),
                )),
            (a.driver !== `none` || a.destroyed) && (a.alarmT = 0)),
          a.emitFx(r, o, g.x, g.y, g.z, p.density),
          t.has(a.kind)
            ? O && S < 14 && (S = a.writeWheels(O, S))
            : T && v < 68 && (v = a.writeWheels(T, v)));
      }
      (_?.wheels?.end(v),
        _?.spokes?.end(S),
        h &&
          ((h.count = S),
          (h.visible = S > 0),
          S > 0 && (h.instanceMatrix.needsUpdate = !0)),
        m &&
          ((m.count = v),
          (m.instanceMatrix.needsUpdate = !0),
          (m.material.envMapIntensity = 1 - 0.8 * o)));
      for (let e = 0; e < a.length; e++)
        a[e].envMapIntensity = f ? 1 - 0.8 * o : 1;
      (y && (y.envMapIntensity = f ? 1 - 0.8 * o : 1),
        p.update(r, e.time.elapsed),
        Ye &&
          ((Xe = Math.max(0, Xe - r)),
          (Ye.intensity = Xe > 0 ? 900 * Xe * Xe : 0)),
        qe(),
        (ke -= r) <= 0 && ((ke = 2), Oe.forEach(Ae)),
        ee && $e.update(r));
      let j = performance.now() - i;
      if (
        ((x.ms += (j - x.ms) * 0.05),
        (x.active = l),
        (x.parked = u),
        (x.particles = p.particleCount),
        (x.total = n.length),
        M && e.time.frame % 6 == 0)
      ) {
        let e = Qe.current;
        M.textContent = e
          ? `${e.spec.name.en}  ${e.kmh.toFixed(0)} km/h  gear ${e.gear}  rpm ${(e.rpm * 100).toFixed(0)}%\nslip ${(e.slip * 57.3).toFixed(0)}°  ${e.drifting ? `DRIFT` : ``} ${e.handbrake ? `HB` : ``} grip ${e.gripK.toFixed(1)}\nhp ${e.health.toFixed(0)}  vehicles ${n.length} awake ${l}  fx ${p.particleCount}\njs ${x.ms.toFixed(3)} ms`
          : `vehicles ${n.length} awake ${l} parked ${u}  fx ${p.particleCount}\njs ${x.ms.toFixed(3)} ms`;
      }
    },
  };
  return rt;
}
