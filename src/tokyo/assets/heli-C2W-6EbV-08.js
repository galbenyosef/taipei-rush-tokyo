// tokyo/assets/heli-C2W-6EbV 08 — math
// Lines 2292-3354 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function St(e) {
  let t = e.params,
    n = e.plan.world ?? 1,
    o = null,
    d = new bt(e, Q),
    p = -10,
    m = 0,
    y = 0,
    x = [],
    C = [],
    w = null,
    T = -10,
    ee = -10,
    te = -1e9,
    ne = !1,
    E = null,
    D = null,
    O = new c();
  O.name = `heli-camera-anchor`;
  let k = 0,
    ue = 0,
    de = 0,
    A = 0,
    j = null,
    M = [],
    fe = null,
    N = null,
    pe = null,
    P = () => !e.scene.environment,
    F = (t) => {
      let n = oe({ instanced: !1 });
      return (
        (n.name = `vehicle-heli`),
        (n.map = t),
        (n.envMap = P() ? se(e.renderer.gl) : null),
        { mat: n, depth: ie(n.vu, !1) }
      );
    },
    me = (t) => {
      let n = M.findIndex((e) => e.mat.map === _e(t.id)),
        r = n >= 0 ? M.splice(n, 1)[0] : F(_e(t.id));
      return ((r.mat.envMap = P() ? se(e.renderer.gl) : null), r);
    },
    I = (e) => {
      M.length < 6 ? M.push(e) : (e.mat.dispose(), e.depth.dispose());
    },
    he = () => {
      if (!fe) {
        let e = document.createElement(`canvas`);
        e.width = e.height = 256;
        let t = e.getContext(`2d`),
          n = t.createRadialGradient(128, 128, 6, 128, 128, 128);
        (n.addColorStop(0, `rgba(255,255,255,0)`),
          n.addColorStop(0.1, `rgba(255,255,255,0.18)`),
          n.addColorStop(0.55, `rgba(255,255,255,0.32)`),
          n.addColorStop(0.9, `rgba(255,255,255,0.5)`),
          n.addColorStop(0.97, `rgba(255,255,255,0.62)`),
          n.addColorStop(1, `rgba(255,255,255,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, 256, 256),
          (t.globalCompositeOperation = `source-over`));
        for (let e = 0; e < 3; e++) {
          let n = (e * Math.PI * 2) / 3;
          (t.beginPath(),
            t.moveTo(128, 128),
            t.arc(128, 128, 124, n, n + 0.55),
            t.closePath(),
            (t.fillStyle = `rgba(255,255,255,0.16)`),
            t.fill());
        }
        ((t.strokeStyle = `rgba(255,214,60,0.35)`),
          (t.lineWidth = 4),
          t.beginPath(),
          t.arc(128, 128, 121, 0, Math.PI * 2),
          t.stroke());
        let r = new _(e);
        ((r.colorSpace = s), (r.name = `vehicle-heli-disc`), (fe = r));
      }
      let e = new r({
        color: 1316378,
        map: fe,
        transparent: !0,
        depthWrite: !1,
        opacity: 0.5,
        side: 2,
      });
      return ((e.forceSinglePass = !0), (e.name = `vehicle-heli-disc`), e);
    },
    ge = {
      ctx: e,
      get fx() {
        return o;
      },
      get geos() {
        return Qe();
      },
      material: me,
      releaseMaterial: I,
      discMaterial: he,
      ownEnv: P,
      onDestroyed: (e) => Ce(e),
      helis: () => x,
      ceiling: vt.ceiling,
    },
    L = (e) => {
      try {
        e();
      } catch {}
    };
  function ve() {
    for (let t of vt.pads) {
      if (t.world && t.world !== n) continue;
      let r = t.y ?? 0;
      t.y === void 0 && (r = e.groundAt(t.x, t.z, 100, 0.5) + ht);
      let a = {
        def: t,
        y: r,
        heli: null,
        takenAt: -1,
        spawns: 0,
        mesh: null,
        ready: t.kind !== `deck`,
        lift: null,
      };
      if (t.kind !== `slab`) {
        let e = t.size / 2 - 1;
        ((a.lift = {
          gx: 0,
          gz: 0,
          gy: 0,
          found: !1,
          tries: 0,
          rx: t.x - e,
          rz: t.z + e,
          ground: null,
          roof: null,
        }),
          t.lift &&
            Object.assign(a.lift, { gx: t.lift.x, gz: t.lift.z, found: !0 }));
      }
      let o = t.size / 2;
      if (t.kind !== `painted`) {
        j ??= F(ye());
        let n =
            t.kind === `deck` ? Math.max(0.2, r - _t - (t.roofY ?? r - 1)) : 0,
          o = $e(t.kind, t.size, t.kind === `deck` ? _t : gt, n),
          s = new i(o, j.mat);
        ((s.name = `vehicle-heli-pad-${t.id}`),
          s.position.set(t.x, r, t.z),
          (s.rotation.y = -t.heading),
          (s.receiveShadow = !0),
          (s.castShadow = t.kind === `deck`),
          (s.customDepthMaterial = j.depth),
          (s.matrixAutoUpdate = !1),
          s.updateMatrix(),
          (s.visible = !1),
          e.scene.add(s),
          (a.mesh = s));
      }
      (L(
        () =>
          void e.statics.addFloorRect(
            t.x - o,
            t.z - o,
            t.x + o,
            t.z + o,
            r,
            `helipad`,
          ),
      ),
        C.push(a));
    }
  }
  function be() {
    for (let t of C)
      L(() =>
        e.ui.addBlip(`helipad:${t.def.id}`, {
          x: t.def.x,
          z: t.def.z,
          icon: `vehicle`,
          glyph: `H`,
          color: `#ffd23f`,
          label: t.def.name,
        }),
      );
  }
  function xe(t) {
    let n = new b(wt(t.def.id) + t.spawns * 7919);
    t.spawns++;
    let r = n.pick(t.def.liveries),
      i = new dt(ge, r, t.def.x, t.y, t.def.z, t.def.heading);
    return (e.scene.add(i.object), x.push(i), (t.heli = i), i);
  }
  function Se(e) {
    let t = x.indexOf(e);
    if (!(t < 0)) {
      (w === e && Ee(), x.splice(t, 1));
      for (let t of C) t.heli === e && (t.heli = null);
      e.dispose();
    }
  }
  function Ce(t) {
    let n = t.x,
      r = t.y,
      i = t.z;
    (L(() => e.audio.play(`explosion`, { x: n, y: r + 1, z: i, volume: 1 })),
      L(() =>
        e.events.emit(`vehicle:destroyed`, {
          pos: new h(n, r, i),
          vehicleId: t.id,
        }),
      ),
      L(() => e.peds.panic(n, i, 45)),
      L(() => e.traffic.panic(n, i, 45)));
    let a = e.camera.position,
      o = Math.hypot(a.x - n, a.z - i);
    (o < 80 && L(() => e.cameraRig.shake(S(1.3 - o / 60, 0.1, 1))),
      w === t && K(t));
    let s = e.dynamics.query(n, i, 11, Te);
    for (let a = 0; a < s; a++) {
      let o = Te[a];
      if (
        o === t.body ||
        !o.active ||
        Math.abs((o.y ?? 0) - r) > 8 ||
        (o === e.player.body && e.time.elapsed - R < 0.2)
      )
        continue;
      let s = o.x - n,
        c = o.z - i,
        l = Math.hypot(s, c),
        u = 1 - S(l / 11, 0, 1);
      if (u <= 0) continue;
      let d = new h(s / (l || 1), 0.35, c / (l || 1)).normalize();
      (L(() =>
        o.onDamage?.({
          amount: 40 + 260 * u * u,
          source: `explosion`,
          point: new h(o.x, o.y + 1, o.z),
          dir: d,
        }),
      ),
        o.owner !== `vehicles` &&
          L(() =>
            o.onImpact?.(
              d.x * 900 * u * Math.min(4, o.mass / 80),
              d.z * 900 * u * Math.min(4, o.mass / 80),
              t.body,
            ),
          ));
    }
    for (let n of C)
      n.heli === t && ((n.heli = null), (n.takenAt = e.time.elapsed));
  }
  let Te = [],
    R = -10;
  function z(e, t, n) {
    if (E) return 0;
    D = null;
    let r = 3.4;
    for (let i of x) {
      if (
        i.destroyed ||
        i.sinking > 0 ||
        i.locked ||
        !i.grounded ||
        i.hSpeed > 1.5 ||
        w === i ||
        Math.abs(i.y - t) > 1.7
      )
        continue;
      let a = Tt(
        e,
        n,
        i.body.x,
        i.body.z,
        i.heading,
        i.body.halfW,
        i.body.halfL,
      );
      a < r && ((r = a), (D = i));
    }
    return D ? r : 1 / 0;
  }
  function B() {
    D = null;
    let t = e.player;
    E ||
      w ||
      t.mode !== `foot` ||
      t.controlEnabled === !1 ||
      (z(t.position.x, t.position.y, t.position.z) !== 1 / 0 &&
        e.input.pressed(`enter`) &&
        V());
  }
  function V() {
    let t = D;
    if (!t || E) return;
    let n = e.player.position,
      r = Math.sin(t.heading),
      i = -Math.cos(t.heading),
      a = Math.cos(t.heading),
      o = Math.sin(t.heading),
      s = Math.hypot(
        t.x - a * 1.6 + r * 1.8 - n.x,
        t.z - o * 1.6 + i * 1.8 - n.z,
      ),
      c = Math.hypot(
        t.x + a * 1.6 + r * 1.8 - n.x,
        t.z + o * 1.6 + i * 1.8 - n.z,
      ),
      l = c < s ? 1 : -1;
    ((E = {
      h: t,
      t: 0,
      dur: S(Math.min(s, c) / 4.5, 0.25, 0.8),
      fx: n.x,
      fz: n.z,
      side: l,
    }),
      L(() => e.player.setControlEnabled(!1)));
  }
  function H(t) {
    let n = E,
      r = n.h;
    if (r.destroyed || !x.includes(r)) {
      ((E = null), L(() => e.player.setControlEnabled(!0)));
      return;
    }
    let i = Math.sin(r.heading),
      a = -Math.cos(r.heading),
      o = Math.cos(r.heading),
      s = Math.sin(r.heading),
      c = r.x + o * n.side * 1.6 + i * 1.8,
      l = r.z + s * n.side * 1.6 + a * 1.8;
    n.t += t;
    let u = S(n.t / n.dur, 0, 1),
      d = u * u * (3 - 2 * u),
      f = n.fx + (c - n.fx) * d,
      p = n.fz + (l - n.fz) * d,
      m =
        u >= 1
          ? Math.atan2(r.x - f, -(r.z - p))
          : Math.atan2(c - n.fx, -(l - n.fz));
    (L(() => e.player.teleport(f, p, m, r.y + 0.3)),
      e.player.mode === `foot` &&
        (e.player.position.y = Math.max(
          e.player.position.y,
          st(e, f, p, r.y + 0.5, $).y,
        )),
      u >= 1 && ((E = null), L(() => e.player.setControlEnabled(!0)), U(r)));
  }
  function U(t) {
    if (
      (w && w !== t && W(w, !1),
      (w = t),
      (t.driver = `player`),
      (t.locked = !1),
      (T = e.time.elapsed),
      (ee = -10),
      (ne = t.rpm >= 1),
      (k = ue = de = 0),
      !t.used)
    ) {
      t.used = !0;
      for (let n of C)
        n.heli === t && ((n.heli = null), (n.takenAt = e.time.elapsed));
    }
    (Ae(t),
      L(() => e.player.enterVehicle(t.id, t.seat, `drive`, `bus`)),
      L(() => e.player.setSeatVisible?.(!1)),
      L(() => e.cameraRig.follow(O, `bus`)),
      L(() =>
        e.events.emit(`player:enterVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
    let n = e.time.elapsed;
    n - te > 120 &&
      ((te = n),
      L(() =>
        e.ui.notify(Q.hint(e.input.device), { duration: 7, kind: `info` }),
      ));
  }
  function W(t, n) {
    let r = Math.sin(t.heading),
      i = -Math.cos(t.heading),
      a = Math.cos(t.heading),
      o = Math.sin(t.heading),
      s = t.x - a * 1.6 + r * 1.8,
      c = t.z - o * 1.6 + i * 1.8,
      l = t.y;
    if (!n) {
      let n = [
          [-1, 1.8],
          [1, 1.8],
          [-1, 0.1],
          [1, 0.1],
          [-1, -3.5],
        ],
        u = !1;
      for (let [d, f] of n) {
        let n = t.x + a * d * 1.6 + r * f,
          p = t.z + o * d * 1.6 + i * f;
        if (
          (st(e, n, p, t.y + 0.4, $),
          !(Math.abs($.y - t.y) > 0.8 || $.water) &&
            !e.statics.overlapsRect(
              n - 0.3,
              p - 0.3,
              n + 0.3,
              p + 0.3,
              $.y + 0.6,
            ))
        ) {
          ((s = n), (c = p), (l = $.y), (u = !0));
          break;
        }
      }
      u || (st(e, s, c, t.y + 0.4, $), (l = $.y));
    }
    (G(t),
      L(() => e.player.exitVehicle(s, c, t.heading, { noTumbleDamage: !0 })));
    let u = e.player.position;
    (e.player.mode === `foot` &&
      (u.y = n ? t.y + 0.5 : Math.max(u.y, l + 0.02)),
      L(() =>
        e.events.emit(`player:exitVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
  }
  function G(t) {
    w === t &&
      ((w = null),
      (t.driver = `none`),
      (t.inPitch = t.inYaw = t.inColl = 0),
      L(() => e.audio.setRadioActive(!1)));
  }
  function Ee() {
    let t = w;
    t &&
      (G(t),
      L(() =>
        e.events.emit(`player:exitVehicle`, {
          vehicleId: t.id,
          kind: `helicopter`,
        }),
      ));
  }
  function K(t) {
    R = e.time.elapsed;
    let n = t.agl > 2;
    W(t, n);
    let r = e.player,
      i = t.heading - Math.PI / 2;
    (L(() => r.knockdown?.(Math.sin(i) * 7, -Math.cos(i) * 7, 4.5)),
      n &&
        r.mode !== `vehicle` &&
        (r.position.y = Math.max(r.position.y, t.y + 0.5)));
    let a = r.health ?? 100,
      o = Math.min(50, Math.max(0, a - 8));
    o > 0 && L(() => r.damage({ amount: o, source: `explosion` }));
  }
  function De(t, n) {
    let r = e.input,
      i = e.player.controlEnabled !== !1,
      a = 0,
      o = 0,
      s = 0;
    if (i) {
      let e = r.device;
      if (((o = r.axis(`steer`)), e === `gamepad`))
        ((a = r.axis(`moveY`)),
          (s =
            r.axis(`throttle`) -
            r.axis(`brake`) +
            +!!r.down(`handbrake`) -
            +!!r.down(`sprint`)));
      else if (e === `touch`) {
        let e = r.virtual;
        ((a = e.moveY), (s = e.throttle - e.brake + +!!r.down(`handbrake`)));
      } else
        ((a = r.axis(`throttle`) - r.axis(`brake`)),
          (s = +!!r.down(`handbrake`) - !!r.down(`sprint`)));
    }
    ((a = S(a, -1, 1)), (o = S(o, -1, 1)), (s = S(s, -1, 1)));
    let c = (e, t, r) => e + S(t - e, -r * n * 1.6, r * n);
    ((k = c(k, a, 3)),
      (ue = c(ue, o, 5)),
      (de = Math.abs(s) < 0.02 ? 0 : c(de, s, 4)),
      Math.abs(de) < 0.02 && s === 0 && (de = 0),
      a === 0 && Math.abs(k) < 0.03 && (k = 0),
      (t.inPitch = k),
      (t.inYaw = ue),
      (t.inColl = de),
      (t.controls.steer = ue),
      (t.controls.throttle = Math.max(0, k)),
      (t.controls.brake = Math.max(0, -k)));
  }
  function Oe(t, n) {
    let r = e.input,
      i = e.time.elapsed;
    if (e.player.mode !== `vehicle` || e.player.vehicleId !== t.id) {
      Ee();
      return;
    }
    if (t.sinking > 1.2) {
      W(t, !1);
      return;
    }
    if ((De(t, n), r.pressed(`enter`) && i - T > 0.5)) {
      t.grounded || (t.agl < 0.8 && t.hSpeed < 4)
        ? W(t, !1)
        : i - ee < 2.5
          ? W(t, !0)
          : ((ee = i),
            L(() =>
              e.ui.notify(Q.jumpWarn(Math.round(t.agl)), {
                duration: 2.5,
                kind: `bad`,
              }),
            ));
      return;
    }
    (r.pressed(`radio`) && L(() => e.audio.nextStation()),
      t.onFire
        ? L(() => e.ui.prompt(Q.fire(Math.max(0, t.fireFuse).toFixed(1))))
        : t.rpm < 1
          ? L(() => e.ui.prompt(Q.spool(Math.floor(t.rpm * 100))))
          : ne ||
            ((ne = !0),
            L(() => e.ui.notify(Q.ready, { duration: 2, kind: `good` }))),
      ke(t),
      e.player.position.set(t.x, t.y, t.z),
      (e.player.heading = t.heading));
  }
  function ke(t) {
    let n = e.plan,
      r = !0;
    try {
      r =
        typeof n.playable == `function`
          ? n.playable(t.x, t.z)
          : typeof n.inCity != `function` || n.inCity(t.x, t.z);
    } catch {}
    if (r) {
      ((m = t.x), (y = t.z));
      return;
    }
    let i = t.x - m,
      a = t.z - y,
      o = Math.hypot(i, a) || 1,
      s = (t.vx * i + t.vz * a) / o;
    (s > 0 && ((t.vx -= (i / o) * s * 1.4), (t.vz -= (a / o) * s * 1.4)),
      (t.object.position.x = m),
      (t.object.position.z = y));
    let c = e.time.elapsed;
    c - p > 3 &&
      ((p = c), L(() => e.ui.notify(Q.edge, { duration: 2.5, kind: `bad` })));
  }
  function Ae(e) {
    (O.position.set(e.x, e.y + 0.4, e.z),
      O.rotation.set(0, -e.heading, 0),
      O.updateMatrixWorld());
  }
  function je() {
    let t = e.player.position,
      n = e.time.elapsed;
    for (let e of C) {
      let r = Math.hypot(t.x - e.def.x, t.z - e.def.z);
      if (
        (!e.ready && r < 900 && (e.ready = Ue(e)),
        e.lift && Ie(e, r),
        e.mesh && (e.mesh.visible = r < 900 && e.ready),
        e.ready)
      ) {
        if (e.heli) !e.heli.used && r > 650 && Se(e.heli);
        else {
          let t = e.takenAt < 0,
            i = n < 10 || r > 140 || !Fe(e);
          if (w && r < 600) continue;
          r < 450 &&
            i &&
            (t || (n - e.takenAt > 60 && r > 180)) &&
            We(e) &&
            xe(e);
        }
      }
    }
    for (let e = x.length - 1; e >= 0; e--) {
      let r = x[e];
      if (r === w || !r.used || E?.h === r) continue;
      let i = Math.hypot(t.x - r.x, t.z - r.z);
      ((r.destroyed && n - r.destroyedAt > 40 && i > 120) ||
        (!r.destroyed && i > 650) ||
        (r.sinking > 6 && i > 40)) &&
        Se(r);
    }
    let r = x.filter((e) => e.used && e !== w);
    for (; r.length > 3;)
      (r.sort(
        (e, n) =>
          Math.hypot(t.x - n.x, t.z - n.z) - Math.hypot(t.x - e.x, t.z - e.z),
      ),
        Se(r.shift()));
  }
  let Me = new g(),
    Ne = new l(),
    Pe = new a();
  function Fe(t) {
    let n = e.camera;
    return (
      Ne.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      Me.setFromProjectionMatrix(Ne, n.coordinateSystem, n.reversedDepth),
      Pe.center.set(t.def.x, t.y + 2, t.def.z),
      (Pe.radius = 9),
      Me.intersectsSphere(Pe)
    );
  }
  function Ie(t, n) {
    let r = t.lift;
    if (!r.found && n < 320 && r.tries < 30) {
      r.tries++;
      let e = q(t, !0) ?? (r.tries > 6 ? q(t, !1) : null);
      e && ((r.gx = e.x), (r.gz = e.z), (r.found = !0));
    }
    (r.found &&
      !r.ground &&
      ((r.gy = e.groundAt(r.gx, r.gz, 2.5, 0.5)),
      (r.ground = Le(r.gx, r.gy, r.gz)),
      (r.roof = Le(r.rx, t.y, r.rz)),
      L(() =>
        e.ui.addBlip(`helipad-lift:${t.def.id}`, {
          x: r.gx,
          z: r.gz,
          icon: `vehicle`,
          glyph: `⇡`,
          color: `#7fd8ff`,
          label: Q.liftName,
        }),
      )),
      r.ground && (r.ground.visible = n < 260),
      r.roof && (r.roof.visible = n < 400 && t.ready));
  }
  function Le(t, n, r) {
    ((j ??= F(ye())), (Re ??= et()));
    let a = new i(Re, j.mat);
    return (
      (a.name = `vehicle-heli-lift-sign`),
      a.position.set(t, n, r),
      (a.castShadow = !0),
      (a.receiveShadow = !0),
      (a.customDepthMaterial = j.depth),
      (a.matrixAutoUpdate = !1),
      a.updateMatrix(),
      (a.visible = !1),
      e.scene.add(a),
      a
    );
  }
  let Re = null;
  function q(t, n) {
    let r = t.def,
      i = r.kind === `deck` ? (r.roofY ?? t.y - 1.4) : t.y - 2;
    for (let t = 6; t <= 90; t += 2) {
      let a = Math.max(12, Math.round(t * 1.2)),
        o = null;
      for (let s = 0; s < a; s++) {
        let c = (s / a) * Math.PI * 2,
          l = r.x + Math.sin(c) * t,
          u = r.z - Math.cos(c) * t,
          d = e.plan.surfaceAt(l, u);
        if (d === `water` || d === `road` || (n && d !== `sidewalk`)) continue;
        let f = e.groundAt(l, u, 2.5, 0.5);
        if (
          f > i - 3 ||
          f > 6 ||
          e.statics.overlapsRect(l - 0.6, u - 0.6, l + 0.6, u + 0.6, f + 0.4)
        )
          continue;
        let p = e.statics.query(l - 0.6, u - 0.6, l + 0.6, u + 0.6, J),
          m = !1;
        for (let e = 0; e < p && !m; e++)
          J[e].maxY > f + 2.2 && !Ct.has(J[e].tag) && (m = !0);
        if (m) continue;
        let h = Math.hypot(l - r.x, u - r.z);
        (!o || h < o.s) && (o = { x: l, z: u, s: h });
      }
      if (o) return o;
    }
    return null;
  }
  let ze = !1;
  function Be() {
    if (ze || E || w) return;
    let t = e.player;
    if (t.mode !== `foot` || t.controlEnabled === !1) return;
    let n = t.position;
    for (let r of C) {
      let i = r.lift;
      if (!i) continue;
      if (
        i.found &&
        Math.hypot(n.x - i.gx, n.z - i.gz) < 1.9 &&
        Math.abs(n.y - i.gy) < 2
      ) {
        (t.aiming || L(() => e.ui.prompt(Q.liftUp)),
          e.input.pressed(`interact`) && r.ready && Ve(r, !0));
        return;
      }
      if (D) continue;
      let a = r.def.kind === `deck` ? (r.def.roofY ?? r.y - 1.4) - 1 : r.y - 3;
      if (
        n.y > a &&
        n.y < r.y + 2.5 &&
        n.y > 4 &&
        Math.hypot(n.x - r.def.x, n.z - r.def.z) < r.def.size / 2 + 26
      ) {
        (t.aiming || L(() => e.ui.prompt(Q.liftDown)),
          e.input.pressed(`interact`) && Ve(r, !1));
        return;
      }
    }
  }
  async function Ve(t, n) {
    let r = t.lift;
    if (ze) return;
    if (!n && !r.found) {
      let n = q(t, !0) ?? q(t, !1);
      if (!n) return;
      Object.assign(r, {
        gx: n.x,
        gz: n.z,
        found: !0,
        gy: e.groundAt(n.x, n.z, 2.5, 0.5),
      });
    }
    ze = !0;
    let i = e.player;
    L(() => i.setControlEnabled(!1));
    try {
      (await Promise.race([e.ui.fade(1, 0.35), He(600)]).catch(() => {}),
        L(() => e.audio.play(`store_chime`, { ui: !0, volume: 0.5 })));
      let a = Math.atan2(
        t.def.x - (n ? r.rx : r.gx),
        -(t.def.z - (n ? r.rz : r.gz)),
      );
      (n
        ? (L(() => i.teleport(r.rx, r.rz, a, t.y + 0.05)),
          i.position.y < t.y - 0.5 && (i.position.y = t.y + 0.02))
        : L(() => i.teleport(r.gx, r.gz, a + Math.PI, r.gy)),
        await He(650));
    } finally {
      (L(() => i.setControlEnabled(!0)),
        i.mode === `foot` &&
          n &&
          i.position.y < t.y - 0.5 &&
          (i.position.y = t.y + 0.02),
        await Promise.race([e.ui.fade(0, 0.35), He(600)]).catch(() => {}),
        (ze = !1));
    }
  }
  let He = (e) => new Promise((t) => setTimeout(t, e));
  function Ue(t) {
    let n = t.def,
      r = n.roofY ?? t.y - 1,
      i = n.size + 8,
      a = e.statics.query(n.x - i, n.z - i, n.x + i, n.z + i, J);
    for (let e = 0; e < a; e++) if (Math.abs(J[e].maxY - r) < 1.2) return !0;
    return !1;
  }
  let J = [];
  function We(t) {
    for (let e of x)
      if (
        Math.hypot(e.x - t.def.x, e.z - t.def.z) < 10 &&
        Math.abs(e.y - t.y) < 6
      )
        return !1;
    return (
      e.dynamics.query(
        t.def.x,
        t.def.z,
        6,
        Te,
        (e) => e.kind === `vehicle` && Math.abs((e.y ?? 0) - t.y) < 3,
      ) === 0
    );
  }
  let Y = {
      id: -1,
      kind: `helicopter`,
      spec: { name: ce.private.name, maxSpeed: X.VMAX },
      speed: 0,
      health: 0,
      maxHealth: X.HP,
      onFire: !1,
      destroyed: !1,
      altitude: 0,
      heading: 0,
      kmh: 0,
    },
    Ge = {
      get target() {
        return E ? E.h.body : (D?.body ?? null);
      },
      get entering() {
        return !!E;
      },
      get aircraft() {
        let e = w;
        return e
          ? ((Y.id = e.id),
            (Y.spec.name = e.livery.name),
            (Y.speed = e.hSpeed),
            (Y.kmh = e.hSpeed * 3.6),
            (Y.health = e.health),
            (Y.onFire = e.onFire),
            (Y.destroyed = e.destroyed),
            (Y.altitude = e.agl),
            (Y.heading = e.heading),
            Y)
          : null;
      },
      async init() {
        ((o = new ae((t, n, r) =>
          e.groundAt ? e.groundAt(t, n, r, 0.3) : e.plan.groundHeight(t, n),
        )),
          (o.group.name = `vehicle-heli-fx`));
        let t = e.scene.getObjectByName(`vehicle-fx-debris`);
        (t &&
          t.material?.name === `vehicle-instanced-debris` &&
          o.useDebrisMaterial(t.material),
          (o.density =
            e.quality.level === `low`
              ? 0.5
              : e.quality.level === `medium`
                ? 0.75
                : 1),
          e.scene.add(o.group),
          le(vt.livery),
          Qe(),
          await e.yieldFrame());
        for (let e of Object.keys(ce)) _e(e);
        (ve(),
          e.scene.add(O),
          console.info(
            `[init] heli (${vt.city}): ${Qe().tris} tris, ${C.length} pads`,
          ),
          (window.__heli = Ke));
      },
      start() {
        if ((be(), !P())) {
          for (let e of [...M, ...(j ? [j] : []), ...(N ? [N] : [])])
            e.mat.envMap = null;
          for (let e of x) e.mats.mat.envMap = null;
        }
      },
      prewarm() {
        if (!pe) {
          let e = Qe();
          pe = [];
          for (let t of Object.keys(ce)) {
            let n = F(_e(t));
            t === `private` ? (N = n) : M.push(n);
            let r = new u();
            r.name = `vehicle-heli-prewarm-${t}`;
            let a =
              t === `private` ? [e.body, e.rotor, e.tail, e.far] : [e.rotor];
            for (let e of a) {
              let t = new i(e, n.mat);
              ((t.castShadow = !0),
                (t.receiveShadow = !0),
                (t.customDepthMaterial = n.depth),
                (t.frustumCulled = !1),
                r.add(t));
            }
            pe.push(r);
          }
          let t = new i(new f(1, 8), he());
          ((t.name = `vehicle-heli-prewarm-disc`),
            (t.frustumCulled = !1),
            pe.push(t));
        }
        return pe.filter((e) => !e.parent);
      },
      pre(e) {
        B();
      },
      post(t) {
        let n = e.camera.position,
          r = re.uNight?.value ?? 0;
        (E && H(t), w && Oe(w, t));
        for (let e = 0; e < x.length; e++) x[e].update(t, n.x, n.y, n.z, r);
        w && (Ae(w), w.destroyed && Ee());
        let i = D;
        (i &&
          !E &&
          !w &&
          e.player.mode === `foot` &&
          !e.player.aiming &&
          L(() => e.ui.prompt(Q.board(i.livery.name))),
          (A += t) > 0.5 && ((A = 0), je()),
          Be(),
          d.update(t, w ? Ge.aircraft : null),
          o?.update(t, e.time.elapsed));
      },
      get(e) {
        for (let t of x) if (t.id === e) return t;
      },
      owns(e) {
        return e instanceof dt && x.includes(e);
      },
      teleport(t, n, r, i, a) {
        if (!(t instanceof dt)) return !1;
        let o = a ?? st(e, n, r, 500, $).y;
        return (t.place(n, o, r, i), !0);
      },
      eject() {
        let e = w;
        return e ? (W(e, !1), !0) : !1;
      },
      release: Ee,
      repair(e) {
        return e instanceof dt && (e.repair(), !0);
      },
      explode(e) {
        return e instanceof dt && (e.explode(), !0);
      },
    },
    Ke = {
      pads: () =>
        C.map((e) => ({
          id: e.def.id,
          kind: e.def.kind,
          x: e.def.x,
          z: e.def.z,
          y: e.y,
          heli: e.heli?.id ?? null,
          takenAt: e.takenAt,
          lift: e.lift
            ? {
                found: e.lift.found,
                gx: +e.lift.gx.toFixed(1),
                gz: +e.lift.gz.toFixed(1),
                gy: +e.lift.gy.toFixed(2),
                rx: e.lift.rx,
                rz: e.lift.rz,
              }
            : null,
        })),
      get riding() {
        return ze;
      },
      list: () => x,
      get current() {
        return w;
      },
      tune: X,
      spawn(t, n, r = 0, i = `private`) {
        let a = st(e, t, n, 500, $).y,
          o = new dt(ge, i, t, a, n, r);
        return ((o.used = !0), e.scene.add(o.object), x.push(o), o);
      },
      board: (e) => U(e),
      exit: (e = !1) => w && W(w, e),
      seat: we,
      params: t,
      roof(t, n) {
        let r = new v(new h(t, 900, n), new h(0, -1, 0), 0, 1e3);
        r.camera = e.camera;
        let i = [];
        return (
          e.scene.traverseVisible((e) => {
            if (
              !e.isMesh ||
              /heli|sky|cloud|fx|traffic|ped|crowd/i.test(e.name)
            )
              return;
            let t = [];
            try {
              r.intersectObject(e, !1, t);
            } catch {}
            for (let e of t) e.point && Number.isFinite(e.point.y) && i.push(e);
          }),
          i.sort((e, t) => t.point.y - e.point.y),
          i.slice(0, 4).map((e) => ({
            y: +e.point.y.toFixed(2),
            name: e.object.name || e.object.type,
            ny: +(e.face?.normal.y ?? 0).toFixed(2),
          }))
        );
      },
      open(t, n, r = 120, i = 17) {
        let a = i / 2,
          o = null;
        for (let i = -r; i <= r; i += 4)
          for (let s = -r; s <= r; s += 4) {
            let c = Math.hypot(s, i);
            if (c > r || (o && c >= o.d)) continue;
            let l = t + s,
              u = n + i,
              d = (t, n) => {
                let r = e.plan.surfaceAt(t, n);
                return r === `water` || r === `road` || r === `sidewalk`;
              };
            if (d(l, u)) continue;
            let f = e.groundAt(l, u, 800, 0.5),
              p = !0;
            for (let [t, n] of [
              [-a, -a],
              [a, -a],
              [-a, a],
              [a, a],
              [0, -a],
              [0, a],
              [-a, 0],
              [a, 0],
            ])
              (Math.abs(e.groundAt(l + t, u + n, 800, 0.5) - f) > 0.4 ||
                d(l + t, u + n)) &&
                (p = !1);
            if (!p) continue;
            let m = e.statics.query(l - a, u - a, l + a, u + a, J),
              h = !0;
            for (let e = 0; e < m && h; e++)
              J[e].maxY > f + 0.3 &&
                !J[e].tag.startsWith(`invisible`) &&
                (h = !1);
            h && (o = { x: l, z: u, y: +f.toFixed(2), d: c });
          }
        return o;
      },
      probe(t, n, r = 4) {
        let i = e.statics.query(t - r, n - r, t + r, n + r, J),
          a = [];
        for (let e = 0; e < i; e++) {
          let t = J[e];
          a.push({
            tag: t.tag,
            top: +t.maxY.toFixed(2),
            cx: +t.cx.toFixed(1),
            cz: +t.cz.toFixed(1),
            hx: +t.hx.toFixed(1),
            hz: +(t.hz ?? 0).toFixed(1),
          });
        }
        return (
          a.sort((e, t) => t.top - e.top),
          {
            ground: +e.groundAt(t, n, 800, 0.5).toFixed(2),
            support: +st(e, t, n, 800, $).y.toFixed(2),
            water: $.water,
            cols: a.slice(0, 8),
          }
        );
      },
    };
  return Ge;
}
