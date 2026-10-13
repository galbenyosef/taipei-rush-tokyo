// tokyo__assets__actors-Bnj6Q1ad 47 — math
// Lines 21512-22772 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function dm(e) {
  xd(e.region?.signage?.brands?.delivery);
  let t = new Set([`motorcycle`, ...(uc().spokeWheels ?? [])]),
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
    f = new cf((t, n, r) =>
      e.groundAt ? e.groundAt(t, n, r, 0.3) : e.plan.groundHeight(t, n),
    ),
    p = null,
    m = null,
    h = null,
    v = null,
    x = null,
    S = new Map(),
    C = { ms: 0, active: 0, parked: 0, particles: 0, total: 0 },
    w = e.params,
    T = w.has(`vnight`) ? V(Number(w.get(`vnight`) || 1), 0, 1) : -1,
    E = w.has(`vwet`) ? V(Number(w.get(`vwet`) || 1), 0, 1) : -1,
    D = w.has(`vdebug`),
    O = Number(w.get(`vauto`) || 0),
    k = zs[w.get(`drive`) ?? ``] ? w.get(`drive`) : null,
    A = Number(w.get(`vsteer`) || 0),
    j = w.has(`vlm`) ? Math.max(0, Number(w.get(`vlm`)) || 0) : om,
    N = null,
    P = !1,
    F = [],
    ee = !1,
    te = () => {
      for (let e of F) I(e);
      ((F.length = 0), (ee = !1));
    },
    ne = !1,
    re = new Map(),
    ie = [],
    ae = [],
    oe = new R(),
    se = new R(),
    ce = () => (d ? ((u ||= Hc(e.renderer.gl)), u) : null),
    le = [],
    ue = () => {
      let e = Rc({ instanced: !1 });
      return ((e.name = `vehicle-physical`), { mat: e, depth: zc(e.vu, !1) });
    },
    de = (e) => {
      let t = le.pop() ?? ue(),
        n = t.mat.vu,
        r = bd[e] ?? Tc;
      return (
        n.uVarA.value.set(r.a[0], r.a[1], r.a[2], r.a[3]),
        n.uVarB.value.set(r.b[0], r.b[1], r.b[2], r.b[3]),
        n.uState.value.set(0, 0, 0, 0),
        (t.mat.envMap = ce()),
        (t.mat.envMapIntensity = 1),
        t
      );
    },
    I = (e) => {
      le.length < sm ? le.push(e) : (e.mat.dispose(), e.depth.dispose());
    },
    pe = (e) => ((e.userData.keepCpu = !0), e),
    me = null,
    he = () => {
      if (!x) {
        let e = Rc({ instanced: !1, batched: !0 }),
          t = ce();
        (t && (e.envMap = t), (e.name = `vehicle-batch`), (x = e));
      }
      return ((me ??= zc(x.vu, !1, !0)), { mat: x, depth: me });
    },
    ge = new Map(),
    _e = (e) => {
      let t = ge.get(e)?.pop();
      if (t) return t;
      let n = ye(e),
        r = new fe();
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
    ve = (e, t) => {
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
      let n = ge.get(e.kind);
      if ((n || ge.set(e.kind, (n = [])), n.length < cm)) {
        n.push(e);
        return;
      }
      for (let t of Object.keys(e.geo.attributes))
        t !== `position` && t !== `normal` && e.geo.deleteAttribute(t);
      e.geo.dispose();
    },
    ye = (t) => {
      let n = r.get(t);
      return (
        n ||
          r.set(
            t,
            (n = pe(_d(t, { wheels: !1, side: e.plan.side }).buildGeometry())),
          ),
        n
      );
    },
    L = new Map(),
    be = (e) => {
      let t = L.get(e);
      return (t || L.set(e, (t = pe(Fd(ye(e))))), t);
    },
    xe = () => e.time.elapsed,
    Ce = (t) => {
      let n = c.get(t);
      return (
        n ||
          c.set(
            t,
            (n = pe(
              _d(t, {
                wheels: !1,
                steer: !0,
                side: e.plan.side,
              }).buildGeometry(),
            )),
          ),
        n
      );
    },
    we = {
      ctx: e,
      fx: f,
      bodyGeo: ye,
      bodyLod: be,
      steerGeo: (e) => {
        let t = o.get(e);
        return (t || o.set(e, (t = pe(hd(e)))), t);
      },
      riderGeo: (e) => {
        let t = s.get(e);
        return (t || s.set(e, (t = pe(pd(e)))), t);
      },
      parkedGeo: (e) => Ce(e),
      get envMap() {
        return ce();
      },
      onCollision: (e, t, n, r, i, a, o) => Le(e, t, n, r, i, a, o),
      onDestroyed: (e) => B(e),
      onSplash: (t) => {
        let n = e.plan.waterLevelAt(t.x, t.z);
        Ee(() =>
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
        De(t.x, t.z) < 60 &&
          Ee(() =>
            e.audio.play(`backfire`, {
              x: t.x,
              y: t.y + 0.4,
              z: t.z,
              volume: t.kind === `sports` ? 0.9 : 0.6,
            }),
          );
      },
      wet: () => Math.max(Qe.uWet.value, e.env?.rain ?? 0),
      onSunk: (t) => {
        Ee(() =>
          e.events.emit(`vehicle:destroyed`, {
            pos: new R(t.x, t.y, t.z),
            vehicleId: t.id,
          }),
        );
      },
      onIgnite: (e) => tt.onIgnite(e),
      onLowside: (e) => tt.lowside(e),
      now: xe,
      takeMaterial: de,
      releaseMaterial: I,
      takeDeform: _e,
      releaseDeform: ve,
    },
    Te = {
      ctx: e,
      onVehicleImpact: (e, t, n, r, i, a, o, s) => Be(e, t, n, r, i, a, o, s),
      onPedHit: (e, t, n, r, i) => He(e, t, n, r, i),
      immune: (e, t) => tt.isImmune(e, t),
    },
    Ee = (e) => {
      try {
        e();
      } catch {}
    },
    De = (t, n) => Math.hypot(e.camera.position.x - t, e.camera.position.z - n);
  function Oe(e, t, n) {
    if (t <= n) return 0;
    let r = V(1500 / e.spec.mass, 0.35, 1.25);
    return 0.8 * (t * t - n * n) * r;
  }
  let je = new Map(),
    Me = 0,
    z = (e, t) => {
      xe() - e.t > 1.5 && je.delete(t);
    };
  function Ne(e, t) {
    let n = xe(),
      r = e.id * 16777216 + (t & 16777215),
      i = je.get(r);
    return (
      i || je.set(r, (i = { t: -10, dv: 0, crime: !1 })),
      n - i.t > im && ((i.dv = 0), (i.crime = !1)),
      (i.t = n),
      i
    );
  }
  function Pe(t, n, r, i, a, o, s, c, l, u = 1) {
    if (t.destroyed) return null;
    let d = Ne(t, c),
      p = d.dv;
    if (n <= p) return d;
    d.dv = n;
    let m = Oe(t, n, l) - Oe(t, p, l);
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
    let h = xe(),
      g = re.get(t.id) ?? -10;
    if (n > 2.5 && (p <= 2.5 || n > p + 3) && h - g > 0.12) {
      re.set(t.id, h);
      let c = t.y + 0.6;
      if (
        De(r, i) < 80 &&
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
        (Ee(() => e.cameraRig.shake(V(n * 0.045, 0.08, 1))),
        Ee(() => e.input.rumble(V(n / 20, 0.2, 1), 150))),
        qe({
          pos: new R(r, c, i),
          impulse: Math.round(n * 100) / 100,
          vehicleId: t.id,
          other: s,
        }));
    }
    return d;
  }
  function Fe(e, t, n, r, i, a, o, s, c = 0) {
    let l = e.preVx,
      u = e.preVz,
      d = Math.hypot(l, u),
      f = d > 0.5 ? Math.abs(l * n + u * r) / d : 1,
      p = c || (f < 0.5 ? nm : tm);
    (!i && !c && Ie(e, a, o) && (p = Math.max(p, nm)),
      t > p
        ? tt.eject(e, t, n, r, i, a, o, s)
        : t > 2.5 && e.wobble((t - 2.5) / (p - 2.5)));
  }
  function Ie(t, n, r) {
    let i = e.statics.query(n - 0.35, r - 0.35, n + 0.35, r + 0.35, ae),
      a = -1 / 0;
    for (let e = 0; e < i; e++) {
      let n = ae[e];
      n.minY > t.y + 1.1 || n.maxY < t.y + 0.25 || (n.maxY > a && (a = n.maxY));
    }
    return Number.isFinite(a) && a - t.y <= 0.5;
  }
  function Le(e, t, n, r, i, a, o) {
    (Pe(e, t, n, r, i, a, o, am, Zp),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        Fe(e, t, i, a, null, n, r, o));
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
      m = Pe(
        e,
        r * u,
        i,
        a,
        o,
        s,
        t ? `vehicle` : n.owner,
        n.id,
        f ? $p : Qp,
        f ? em : 1,
      ),
      h = t
        ? Pe(
            t,
            r * d,
            i,
            a,
            -o,
            -s,
            `vehicle`,
            e.body.id,
            p ? $p : Qp,
            p ? em : 1,
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
          pos: new R(i, e.y, a),
          severity: r > 14 ? 2 : 1,
        });
      }
    }
    (Ve(e, t, r, o, s, t ? (t.kart ? `kart` : t.kind) : n.owner),
      t && Ve(t, e, r, -o, -s, e.kart ? `kart` : e.kind),
      e.driver === `player` &&
        e.spec.twoWheeler &&
        Fe(
          e,
          Math.min(r, e.preSpeed * 1.4 + 2),
          o,
          s,
          n,
          i,
          a,
          `vehicle`,
          ze(t) ? rm : 0,
        ),
      t &&
        t.driver === `player` &&
        t.spec.twoWheeler &&
        Fe(
          t,
          Math.min(r, t.preSpeed * 1.4 + 2),
          -o,
          -s,
          e.body,
          i,
          a,
          `vehicle`,
          ze(e) ? rm : 0,
        ));
  }
  function Ve(t, n, r, i, a, o) {
    if (!t.kart || t.destroyed || r < (n?.kart ? 8 : 3.2)) return;
    t.kart.lastSpin = `${o} ${r.toFixed(1)}`;
    let s = Math.sin(t.heading),
      c = -Math.cos(t.heading);
    (t.kart.spin(s * a - c * i >= 0 ? 1 : -1, V(0.8 + r * 0.05, 0.9, 1.5)),
      t.driver === `player` && Ee(() => e.input.rumble(0.6, 220)));
  }
  function He(t, n, r, i, a) {
    let o = t.y + 1;
    (Ee(() =>
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
            pos: new R(n.x, n.y, n.z),
            severity: r > 13 ? 3 : r > 7 ? 2 : 1,
          }),
        Ee(() => e.cameraRig.shake(V(r * 0.015, 0.05, 0.3))),
        Ee(() => e.peds.panic(n.x, n.z, 18))));
  }
  let Ue = [],
    We = [],
    Ge = [],
    Ke = (e) => void (Ue.length < 16 && Ue.push(e)),
    qe = (e) => void (Ge.length < 16 && Ge.push(e)),
    Je = (t) => Ee(() => e.events.emit(`crime`, t));
  function Ye() {
    for (let e = 0; e < We.length; e++) Je(We[e]);
    We.length = 0;
    for (let t = 0; t < Ge.length; t++) {
      let n = Ge[t];
      Ee(() => e.events.emit(`vehicle:collision`, n));
    }
    for (let e = 0; e < Ue.length; e++) We.push(Ue[e]);
    ((Ge.length = 0), (Ue.length = 0));
  }
  function B(t) {
    let n = t.x,
      r = t.y,
      i = t.z;
    (Ee(() => e.audio.play(`explosion`, { x: n, y: r + 1, z: i })),
      Ee(() =>
        e.events.emit(`vehicle:destroyed`, {
          pos: new R(n, r, i),
          vehicleId: t.id,
        }),
      ),
      Ee(() => e.peds.panic(n, i, 40)),
      Ee(() => e.traffic.panic(n, i, 40)));
    let a = De(n, i);
    (a < 70 && Ee(() => e.cameraRig.shake(V(1.2 - a / 60, 0.1, 1))),
      Ee(() => e.input.rumble(V(1 - a / 50, 0, 1), 400)),
      tt.current === t && tt.blastEject(t),
      (t.driver = `none`),
      (t.sirenOn = !1));
    let o = t.spec.twoWheeler ? 6 : 10,
      s = e.dynamics.query(n, i, o, ie),
      c = ie.slice(0, s);
    for (let e of c) {
      if (e === t.body || !e.active || tt.isImmune(t.body, e)) continue;
      let r = e.x - n,
        a = e.z - i,
        s = Math.hypot(r, a),
        c = 1 - V(s / o, 0, 1);
      if (c <= 0) continue;
      (se.set(r / (s || 1), 0.35, a / (s || 1)).normalize(),
        oe.set(e.x, e.y + 1, e.z));
      let l = 40 + 260 * c * c;
      (Ee(() =>
        e.onDamage?.({ amount: l, source: `explosion`, point: oe, dir: se }),
      ),
        e.owner !== `vehicles` &&
          Ee(() =>
            e.onImpact?.(
              se.x * 900 * c * Math.min(4, e.mass / 80),
              se.z * 900 * c * Math.min(4, e.mass / 80),
              t.body,
            ),
          ));
    }
    Xe && (Xe.position.set(n, r + 2, i), (Ze = 0.6));
  }
  let Xe = null,
    Ze = 0,
    $e = () => {
      let t = (e.quality.dynamicLights ?? 0) >= 3;
      t && !Xe
        ? ((Xe = new g(16752720, 0, 40, 1.6)), e.scene.add(Xe))
        : !t && Xe && (Xe.removeFromParent(), Xe.dispose(), (Xe = null));
    },
    tt = new vp(e, {
      list: n,
      spawn: (e, t, n, r, i) => rt(e, t, n, r, i),
      putPlayerIn: (e) => ot.putPlayerIn(e),
    }),
    nt = new Ap(e, {
      list: n,
      spawn: (e, t, n, r, i) => rt(e, t, n, r, i),
      despawn: (e) => ot.despawn(e),
      physicalBudget: () => 12 - n.length,
    });
  (w.get(`vparked`) === `0` && (nt.enabled = !1),
    w.get(`vriders`) === `box` && iu(!1));
  function rt(t, r, i, a, o = {}) {
    let s = zs[t] ?? zs.sedan;
    if (((t = s.kind), n.length >= Jp)) {
      let t = null,
        r = -1,
        i = e.player.position;
      for (let e of n) {
        if (e.driver !== `none` || (!e.parked && !e.destroyed)) continue;
        let n = Math.hypot(e.x - i.x, e.z - i.z);
        n > r && ((r = n), (t = e));
      }
      t && ot.despawn(t);
    }
    let c = o.seed ?? Math.random(),
      l = o.color ?? s.colors[Math.floor(c * 7919) % s.colors.length],
      u = new Uf(we, t, r, i, a, l, c);
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
      u.updateVisual(0, Qe.uNight.value),
      n.push(u),
      u
    );
  }
  let it = null;
  function at() {
    let t = ot.createTrafficBatch?.(Is, Is.length * 2, { castShadow: !0 });
    if (!t) return;
    e.scene.add(t.mesh);
    let n = e.player.position,
      r = e.plan.nearestLink(n.x, n.z),
      i = r ? r.link.heading : Math.PI / 2,
      a = Math.sin(i),
      o = -Math.cos(i),
      s = Math.cos(i),
      c = Math.sin(i),
      l = new y().setFromAxisAngle(new R(0, 1, 0), -i),
      u = new R(1, 1, 1),
      d = [],
      f = [],
      p = [1, 2, 4, 8, 16, 64, 256, 0, 32, 33, 48, 0, 128];
    (Is.forEach((t, r) => {
      for (let t of [0, 1]) {
        let i = (r - Is.length / 2) * 3.6,
          f = 12 + t * 60,
          p = n.x + a * f + s * i,
          m = n.z + o * f + c * i;
        d.push(new ke().compose(new R(p, e.groundAt(p, m, n.y + 1), m), l, u));
      }
      f.push(new Ae().setHSL(r / Is.length, 0.6, 0.45).convertSRGBToLinear());
    }),
      (it = () => {
        t.begin();
        for (let e = 0; e < Is.length; e++) {
          let n = ((e * 0.618) % 1) * 0.999,
            r = f[e];
          (t.push(Is[e], d[e * 2], r.r, r.g, r.b, n, p[e % p.length], !1),
            t.push(
              Is[e],
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
      (ot._tb = t));
  }
  let ot = {
    name: `vehicles`,
    specs: zs,
    list: n,
    get playerVehicle() {
      return tt.current;
    },
    get enteringVehicle() {
      return tt.enteringVehicle;
    },
    get stats() {
      return C;
    },
    spawn(e, t, n, r, i = {}) {
      return rt(e, t, n, r, i);
    },
    despawn(e) {
      let t = e,
        r = n.indexOf(t);
      r < 0 ||
        (tt.current === t && tt.forceExit(t, !1),
        v?.remove(t),
        n.splice(r, 1),
        re.delete(t.id),
        t.dispose());
    },
    get: (e) => n.find((t) => t.id === e),
    putPlayerIn(t) {
      let r = t;
      if (!n.includes(r)) return;
      (tt.current && tt.current !== r && tt.forceExit(tt.current, !0),
        (r.driver = `player`),
        (r.used = !0),
        (r.parked = !1),
        (r.coasting = !1),
        (r.fallen = 0),
        (r.locked = !1),
        r.wake(),
        r.prepareDeform());
      let i = r.spec.twoWheeler || r.kind === `kart`;
      (Ee(() =>
        e.player.enterVehicle(r.id, r.seat, i ? `ride` : `drive`, r.h.camera),
      ),
        Ee(() => e.player.setSeatVisible?.(i || !!r.spec.boat)),
        Ee(() =>
          e.events.emit(`player:enterVehicle`, {
            vehicleId: r.id,
            kind: r.kind,
          }),
        ),
        tt.onEntered(r));
    },
    getInstancedAsset(t) {
      let n = i.get(t);
      if (!n) {
        let r = zs[t].twoWheeler,
          o = _d(t, {
            wheels: !0,
            rider: r,
            side: e.plan.side,
          }).buildGeometry(),
          s = Ks[t];
        ((o.userData.hasRider = r),
          (o.userData.seat = { y: s.seat[1], z: s.seat[2] }),
          (o.userData.lamps = { head: [...s.headAt], tail: [...s.tailAt] }),
          (o.userData.kind = t));
        let c = Fd(o, r ? 0.12 : void 0);
        ((o.userData.lod = c),
          (o.userData.triangles = o.attributes.position.count / 3));
        let l = Rc({ instanced: !0, variants: bd[t] }),
          u = ce();
        (u && (l.envMap = u),
          (l.userData.depthMaterial = zc(l.vu, !0)),
          (l.name = `vehicle-instanced-${t}`),
          (n = { geometry: o, material: l }),
          i.set(t, n),
          a.push(l));
      }
      return n;
    },
    createFleet(e, t, n) {
      return Up(e, t, ot.getInstancedAsset(e), n);
    },
    getParkedAsset(t) {
      let n = l.get(t);
      if (!n) {
        let r = _d(t, { wheels: !0, side: e.plan.side }),
          i = r.steer ? [r.steer[0], r.steer[1]] : null,
          a = pe(r.buildGeometry()),
          o = md[t];
        (Object.assign(a.userData, {
          kind: t,
          triangles: a.attributes.position.count / 3,
          steer: i,
          steerPivot: o && i ? { y: o.y, z: o.z, rake: o.rake } : null,
        }),
          (n = { geometry: a, material: ot.getInstancedAsset(t).material }),
          l.set(t, n));
      }
      return n;
    },
    getBatchMaterial() {
      let e = he();
      return { material: e.mat, depthMaterial: e.depth, kinds: Is };
    },
    createTrafficBatch(t, n, r = {}) {
      try {
        if (!e.renderer.gl.extensions.has(`WEBGL_multi_draw`)) return null;
      } catch {
        return null;
      }
      let i = he(),
        a = r.far ?? {},
        o;
      try {
        o = new qp(
          t.map((e) => {
            let t = ot.getInstancedAsset(e).geometry;
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
      return ((o.mesh.castShadow = !!r.castShadow), et(o.mesh.geometry), o);
    },
    explode(e) {
      e.explode?.();
    },
    repair(e) {
      e.repair?.();
    },
    ejectPlayer() {
      tt.current && tt.exit(tt.current, !0);
    },
    addParkingSpots(e) {
      return nt.addSpots(e);
    },
    teleport(t, r, i, a) {
      let o = t;
      n.includes(o) &&
        (o.teleport(r, i, a),
        tt.current === o && Ee(() => e.player.teleport(r, i, a)));
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
        Is.forEach((e, t) => {
          let n = zs[e];
          u += n.halfW + 0.9;
          let i = rt(e, a + c * u, o + l * u, r, { seed: 0.1 + t * 0.07 });
          ((i.locked = !1), s.push(i), (u += n.halfW + 0.9));
        }),
        s
      );
    },
    async init() {
      e.scene.environment && (d = !1);
      try {
        let t = e.streets?.lightMap;
        t && Mc(t.texture, t.xf);
      } catch {}
      ce();
      let t = performance.now(),
        n = Object.values(uc().riderPose ?? {}),
        l = n.length ? [...fd, ...n] : fd,
        u = w.get(`vriders`) === `box` ? Promise.resolve() : bl(l);
      await e.yieldFrame();
      let h = performance.now(),
        g = async () => {
          performance.now() - h > 4 &&
            (await e.yieldFrame(), (h = performance.now()));
        };
      for (let e of Is)
        (ye(e),
          zs[e].twoWheeler || be(e),
          await g(),
          zs[e].twoWheeler ? Ce(e) : (ot.getInstancedAsset(e), await g()),
          dd[e] && we.steerGeo(e),
          await g());
      let _ = performance.now();
      await Promise.race([u, new Promise((e) => setTimeout(e, 1500))]);
      let y = performance.now() - _;
      h = performance.now();
      for (let e of Is)
        zs[e].twoWheeler &&
          (ot.getInstancedAsset(e), dd[e] && we.riderGeo(e), await g());
      console.info(
        `[init] vehicles: models ${Math.round(performance.now() - t)}ms, riders worker wait ${Math.round(y)}ms`,
      );
      let x = ce(),
        S = Rc({ instanced: !0 });
      (x && (S.envMap = x),
        (S.name = `vehicle-instanced-debris`),
        a.push(S),
        f.useDebrisMaterial(S),
        e.scene.add(f.group));
      let C = !1;
      try {
        C = e.renderer.gl.extensions.has(`WEBGL_multi_draw`);
      } catch {}
      if (
        (Is.forEach((e, t) => {
          if (t >= 18) return;
          let n = bd[e];
          (Ec[t].set(...(n?.a ?? [0, 0, 0, 0])),
            Dc[t].set(...(n?.b ?? [0, 0, 0, 0])));
        }),
        w.get(`vbatch`) !== `0`)
      ) {
        let t = he();
        ((v = new Kd(
          Is.slice(0, 18),
          (t) =>
            zs[t].twoWheeler
              ? _d(t, { wheels: !0, side: e.plan.side }).buildGeometry()
              : ot.getInstancedAsset(t).geometry,
          t.mat,
          t.depth,
          24,
          (e) => zs[e].twoWheeler,
          C && w.get(`vbwheels`) !== `0`
            ? { plain: Bu(), spoke: Vu(), plainCap: Yp, spokeCap: Xp }
            : null,
        )),
          et(v.mesh.geometry),
          e.scene.add(v.mesh),
          await e.yieldFrame());
      }
      if (!v?.wheels) {
        let t = Rc({ instanced: !0 });
        (x && (t.envMap = x), (t.name = `vehicle-instanced-wheels`), a.push(t));
        let n = new Ae(16777215);
        ((p = new Se(pe(Bu()), t, Yp)), p.instanceMatrix.setUsage(b));
        for (let e = 0; e < Yp; e++) p.setColorAt(e, n);
        ((p.frustumCulled = !1),
          (p.castShadow = !0),
          (p.count = 0),
          (p.name = `vehicle-wheels`),
          (m = new Se(pe(Vu()), t, Xp)),
          m.instanceMatrix.setUsage(b));
        for (let e = 0; e < Xp; e++) m.setColorAt(e, n);
        ((m.frustumCulled = !1),
          (m.castShadow = !0),
          (m.count = 0),
          (m.visible = !1),
          (m.name = `vehicle-wheels-spoked`),
          e.scene.add(p, m));
      }
      ((tt.fx = f), tt.init(), $e());
      for (let e = 0; e < Jp; e++) le.push(ue());
      (nc(),
        Nd(),
        xl(),
        f.warmup(!0),
        (f.density =
          e.quality.level === `low`
            ? 0.5
            : e.quality.level === `medium`
              ? 0.75
              : 1),
        e.events.on(`quality:changed`, () => {
          (tt.setupSpot(),
            $e(),
            (f.density =
              e.quality.level === `low`
                ? 0.5
                : e.quality.level === `medium`
                  ? 0.75
                  : 1));
        }),
        e.events.on(`player:died`, () => {
          tt.current && tt.release(tt.current);
        }),
        e.events.on(`player:busted`, () => {
          tt.current && tt.release(tt.current);
        }),
        D &&
          ((N = document.createElement(`div`)),
          Object.assign(N.style, {
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
          document.body.appendChild(N)),
        (window.__vehicles = ot),
        (ot._fx = f),
        (ot._parked = nt),
        (ot._batch = v),
        (ot._driver = tt),
        (ot._mem = () => {
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
          for (let e of ge.values()) for (let t of e) a.push(t.geo);
          return {
            body: t(r.values()),
            bodyLod: t(L.values()),
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
      te();
      let e = [];
      return (
        Is.forEach((t, n) => {
          let r = de(t);
          F.push(r);
          let i = new _();
          ((i.name = `vehicle-prewarm-${t}`), (i.position.x = n * 6));
          let a = (e) => {
            let t = new M(e, r.mat);
            ((t.castShadow = !0),
              (t.receiveShadow = !0),
              (t.customDepthMaterial = r.depth),
              (t.frustumCulled = !1),
              i.add(t));
          };
          (a(ye(t)),
            zs[t].twoWheeler ? a(Ce(t)) : a(be(t)),
            dd[t] && (a(we.steerGeo(t)), a(we.riderGeo(t))),
            e.push(i));
        }),
        p &&
          ((h ??= (() => {
            let e = new Se(p.geometry, p.material, 1);
            return (
              e.setMatrixAt(0, new ke()),
              e.setColorAt(0, new Ae(16777215)),
              (e.castShadow = !0),
              (e.frustumCulled = !1),
              (e.name = `vehicle-prewarm-wheels`),
              e
            );
          })()),
          e.push(h)),
        (ee = !0),
        e
      );
    },
    start() {
      ((P = !0), f.warmup(!1));
      let t = w.get(`vcam`);
      if (t) {
        let r = new R(),
          i = new R(),
          a = !1,
          o = e.scene.onBeforeRender;
        e.scene.onBeforeRender = (...s) => {
          o?.apply(e.scene, s);
          let c = tt.current ?? n[0];
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
        for (let e of le) e.mat.envMap = null;
        for (let e of i.values()) e.material.envMap = null;
        for (let e of a) e.envMap = null;
        x && (x.envMap = null);
      }
      if (w.has(`vlineup`)) {
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
          ot.debugLineup(t.x - r.rx * 16, t.z - r.rz * 16, r.heading);
        } else ot.debugLineup();
      }
      w.has(`vtbatch`) && at();
    },
    update(r) {
      let i = performance.now();
      (ee && te(),
        T >= 0 && (Qe.uNight.value = T),
        E >= 0 && (Qe.uWet.value = E));
      let o = Qe.uNight.value,
        s = V((o - 0.25) / 0.5, 0, 1);
      if (
        ((jc.uLmK.value = j * s * s * (3 - 2 * s)),
        k && !ne && e.time.frame > 3)
      ) {
        let t = k;
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
          ot.putPlayerIn(rt(t, i.x, i.z, r.link.heading, {}));
        }
      }
      (it && it(), (tt.night = o), tt.update(r));
      let c = O;
      if (c > 0 && tt.current && e.time.elapsed * 1e3 < c + 1500) {
        let e = tt.current.controls;
        ((e.throttle = Math.max(e.throttle, 1)), (e.steer = e.steer || A));
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
            (a = i.coasting ? um : lm));
        let o =
          Math.abs(i.vx) + Math.abs(i.vz) > 0.04 ||
          Math.abs(i.yawRate) > 0.02 ||
          i.airborne ||
          i.sinking > 0;
        if (
          (i.driver === `none` &&
          !o &&
          !i.onFire &&
          !(i.destroyed && xe() - i.destroyedAt < 30)
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
      let h = xe();
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || Qf(t, Te, h, S);
      }
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        t.sleeping || t.guardPose();
      }
      if (S.size > 64) for (let [e, t] of S) h - t > 3 && S.delete(e);
      v?.sync(n, e.camera.position.x, e.camera.position.z);
      let g = e.camera.position,
        _ = 0,
        y = 0,
        b = v?.wheels ?? p,
        w = v?.spokes ?? m;
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
              De(a.x, a.z) < 70 &&
                Ee(() =>
                  e.audio.play(`horn_car`, {
                    x: a.x,
                    y: a.y + 1,
                    z: a.z,
                    volume: 0.55,
                  }),
                )),
            (a.driver !== `none` || a.destroyed) && (a.alarmT = 0)),
          a.emitFx(r, o, g.x, g.y, g.z, f.density),
          t.has(a.kind)
            ? w && y < 14 && (y = a.writeWheels(w, y))
            : b && _ < 68 && (_ = a.writeWheels(b, _)));
      }
      (v?.wheels?.end(_),
        v?.spokes?.end(y),
        m &&
          ((m.count = y),
          (m.visible = y > 0),
          y > 0 && (m.instanceMatrix.needsUpdate = !0)),
        p &&
          ((p.count = _),
          (p.instanceMatrix.needsUpdate = !0),
          (p.material.envMapIntensity = 1 - 0.8 * o)));
      for (let e = 0; e < a.length; e++)
        a[e].envMapIntensity = d ? 1 - 0.8 * o : 1;
      (x && (x.envMapIntensity = d ? 1 - 0.8 * o : 1),
        f.update(r, e.time.elapsed),
        Xe &&
          ((Ze = Math.max(0, Ze - r)),
          (Xe.intensity = Ze > 0 ? 900 * Ze * Ze : 0)),
        Ye(),
        (Me -= r) <= 0 && ((Me = 2), je.forEach(z)),
        P && nt.update(r));
      let D = performance.now() - i;
      if (
        ((C.ms += (D - C.ms) * 0.05),
        (C.active = l),
        (C.parked = u),
        (C.particles = f.particleCount),
        (C.total = n.length),
        N && e.time.frame % 6 == 0)
      ) {
        let e = tt.current;
        N.textContent = e
          ? `${e.spec.name.en}  ${e.kmh.toFixed(0)} km/h  gear ${e.gear}  rpm ${(e.rpm * 100).toFixed(0)}%\nslip ${(e.slip * 57.3).toFixed(0)}°  ${e.drifting ? `DRIFT` : ``} ${e.handbrake ? `HB` : ``} grip ${e.gripK.toFixed(1)}\nhp ${e.health.toFixed(0)}  vehicles ${n.length} awake ${l}  fx ${f.particleCount}\njs ${C.ms.toFixed(3)} ms`
          : `vehicles ${n.length} awake ${l} parked ${u}  fx ${f.particleCount}\njs ${C.ms.toFixed(3)} ms`;
      }
    },
  };
  return ot;
}
