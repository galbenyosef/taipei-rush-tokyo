// tokyo__assets__region-tokyo-BcM3fReU 235 — math
// Lines 94935-95365 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function r$(e) {
  let t = e.plan,
    n = N(t.side),
    r = [];
  for (let e of EC) {
    let [t, n, i] = WQ[e.id] ?? [e.x, e.z, (e.facing * 180) / Math.PI],
      a = (i * Math.PI) / 180,
      o = Math.sin(a),
      s = -Math.cos(a);
    r.push({
      id: e.id,
      name: { zh: e.name.zh, en: e.name.en, ja: e.name.ja ?? e.name.zh },
      x: t,
      z: n,
      h: a,
      fx: o,
      fz: s,
      gx: t + s * EQ.x + o * EQ.z,
      gz: n - o * EQ.x + s * EQ.z,
      dx: t + o * (TQ.d / 2 + 1.6),
      dz: n + s * (TQ.d / 2 + 1.6),
      guard: null,
      standId: -1,
      standOn: !1,
      respondT: 0,
    });
  }
  let i = null,
    a = null,
    o = null,
    s = () =>
      ge(`opaque`, {
        policy: e.quality.materials,
        map: a,
        batched: !0,
        name: `tokyo-koban`,
      }),
    c = [],
    l = [],
    u = 12,
    d = 6,
    f = null,
    p = (e) => {
      let t = e.guard;
      return (
        !!t &&
        t.active &&
        t.role === `guard` &&
        t.state === `guard` &&
        Math.hypot(t.x - e.gx, t.z - e.gz) < 3
      );
    },
    m = () => {
      let n = e.region.signage.fonts.sans;
      a = NQ(
        r.map((e) => EC.find((t) => t.id === e.id)?.name.ja ?? ``),
        n,
      );
      let o = r.map((e, t) => BQ(`koban-${e.id}`, t));
      (o.push(VQ(), HQ()),
        (i = new Ii(
          `tokyo-koban`,
          s(),
          o,
          r.length * 2 + 4,
          e.quality.shadows,
        )),
        (i.mesh.userData.owner = `police`));
      let c = i.models.get(`koban-stand`);
      r.forEach((n) => {
        let r = t.groundHeight(n.x, n.z) - 0.02;
        (n_(t$, n.x, r, n.z, n.fx, n.fz),
          i.add(i.models.get(`koban-${n.id}`), t$, n.x, n.z, GQ));
        let a = n.x - n.fz * 0.35 + n.fx * (TQ.d / 2 + 0.75),
          o = n.z + n.fx * 0.35 + n.fz * (TQ.d / 2 + 0.75);
        (n_(t$, a, t.groundHeight(a, o), o, n.fx, n.fz),
          (n.standId = i.add(c, t$, a, o, 120, !1)),
          e.statics.addOBB(
            n.x,
            n.z,
            TQ.w / 2 + 0.05,
            TQ.d / 2 + 0.05,
            n.h,
            0,
            TQ.h + 0.6,
            `building`,
          ));
      });
      let u = i.models.get(`bike-box`);
      n_(t$, 0, -60, 0, 0, 1);
      for (let e = 0; e < 2; e++) l.push(i.add(u, t$, 0, 0, 1e9, !1));
      for (let e of o) e.geo.dispose();
      (e.scene.add(i.mesh),
        e.renderer.uploadDraw?.([i.mesh]),
        e.renderer.preupload?.(a));
    },
    h = (e, t) => {
      e.standOn !== t && i && ((e.standOn = t), i.setOn(e.standId, t));
    },
    g = (e) => {
      f = e;
      let { S: t, officers: n } = e,
        i = t.P,
        a = t.W;
      if (a.frozen) return;
      let o = t.now,
        s = null,
        l = 1 / 0;
      for (let c of r) {
        let r = Math.hypot(c.x - i.x, c.z - i.z);
        if (
          (r < l && ((l = r), (s = c)),
          c.guard &&
            (!c.guard.active || c.guard.role !== `guard`) &&
            (c.guard = null),
          a.level === 0 &&
            !c.guard &&
            r < KQ &&
            !(r < 90 && t.spawn.visible(c.gx, 1, c.gz, 1.2)))
        ) {
          let t = n.spawn(c.gx, c.gz, c.h, { role: `guard`, state: `guard` });
          t &&
            ((t.guardX = c.gx),
            (t.guardZ = c.gz),
            (t.guardH = c.h),
            (t.rest = 1),
            (c.guard = t),
            e.log(`koban ${c.id}: officer on the door`));
        }
        (a.level > 0 &&
          !a.minorOnly &&
          c.guard &&
          c.guard.state === `guard` &&
          r < qQ &&
          o > c.respondT &&
          ((c.respondT = o + 45),
          n.setState(c.guard, `chase`),
          t.dispatch(
            uQ(
              `police.radio.koban`,
              { area: c.name.zh.replace(/派出所$/, ``) },
              { area: c.name.en.replace(/ Koban$/, ``) },
              { area: c.name.ja.replace(/交番$/, ``) },
            ),
          ),
          e.log(`koban ${c.id}: responding`)),
          h(c, r < 140 && !p(c)));
      }
      if (
        a.level === 0 &&
        t.budget.patrolCar &&
        s &&
        l < 150 &&
        o > d &&
        n.countRole(`patrol`) < 2
      ) {
        d = o + 40;
        let r = s;
        if (!t.spawn.visible(r.dx, 1, r.dz, 1.5) || l > 90) {
          for (let e = 0; e < 2; e++) {
            let t = Math.cos(r.h),
              i = Math.sin(r.h),
              a = n.spawn(
                r.dx + t * (e - 0.5) * 0.9,
                r.dz + i * (e - 0.5) * 0.9,
                r.h,
                { role: `patrol`, state: `patrol` },
              );
            a && ((a.guardX = r.dx), (a.guardZ = r.dz));
          }
          e.log(`koban ${r.id}: beat patrol out`);
        }
      }
      a.level === 0 &&
        t.budget.patrolCar &&
        s &&
        l < 200 &&
        o > u &&
        !c.some((e) => e.riding) &&
        ((u = o + 25), v(e, s));
    },
    _ = (e, t) => {
      for (let n of r)
        if (
          Math.abs(n.x - e) < JQ &&
          Math.abs(n.z - t) < JQ &&
          Math.hypot(n.x - e, n.z - t) < JQ &&
          p(n)
        )
          return !0;
      return !1;
    },
    v = (r, a) => {
      let { S: o, officers: s } = r;
      if (!o.spawn.roadPoint(a.x, a.z, 8, 70, ZQ, { hidden: !0, clear: 5 }))
        return;
      let u = ZQ.link;
      t.lanePoint(u, u.lanes - 1, ZQ.s, QQ);
      let d = Math.cos(u.heading),
        f = Math.sin(u.heading),
        p = QQ.x + d * n * 0.9,
        m = QQ.z + f * n * 0.9,
        h;
      try {
        h = e.vehicles.spawn(`mamachari`, p, m, u.heading, {
          driver: `ai`,
          speed: 3,
          color: 15659250,
          rider: !1,
          locked: !0,
        });
      } catch {
        return;
      }
      if (!h) return;
      let g = s.spawn(p, m, u.heading, { role: `patrol`, state: `ride` });
      if (!g) {
        try {
          e.vehicles.despawn(h);
        } catch {}
        return;
      }
      ((g.pedal = XQ),
        (g.guardX = a.dx),
        (g.guardZ = a.dz),
        (g.body.active = !1));
      let _ = l.pop() ?? -1;
      (_ >= 0 && i?.setOn(_, !0),
        c.push({
          v: h,
          rider: g,
          route: new xn(),
          driver: new Ft(),
          site: a,
          riding: !0,
          box: _,
          born: o.now,
          hidT: 0,
          hidden: !0,
        }),
        r.log(`koban ${a.id}: bicycle patrol out`));
    },
    y = (e) => {
      e.box < 0 || (i?.setOn(e.box, !1), l.push(e.box), (e.box = -1));
    },
    b = (e) => {
      if (e.box < 0 || !i) return;
      let t = e.v,
        n = t.heading,
        r = Math.sin(n),
        a = -Math.cos(n);
      (n_(
        t$,
        t.body.x - r * 0.6,
        t.object.position.y + 0.96,
        t.body.z - a * 0.6,
        -r,
        -a,
      ),
        n$.fromArray(t$),
        i.mesh.setMatrixAt(e.box, n$));
    },
    x = (t) => {
      let n = c.indexOf(t);
      (n >= 0 && c.splice(n, 1),
        y(t),
        t.rider &&
          t.rider.active &&
          t.rider.state === `ride` &&
          f?.officers.despawn(t.rider));
      try {
        e.vehicles.despawn(t.v);
      } catch {}
    },
    S = (t) => {
      let r = f;
      if (!r || !c.length) return;
      let i = r.S,
        a = i.P,
        o = i.W;
      for (let s = c.length - 1; s >= 0; s--) {
        let l = c[s],
          u = l.v,
          d = u.body;
        if (u.destroyed || !e.vehicles.get(u.id)) {
          (c.splice(s, 1),
            y(l),
            l.rider?.active &&
              l.rider.state === `ride` &&
              r.officers.despawn(l.rider));
          continue;
        }
        let f = Math.hypot(d.x - a.x, d.z - a.z);
        (b(l),
          i.now > l.hidT &&
            ((l.hidT = i.now + 0.5),
            (l.hidden = !i.spawn.visible(d.x, 1, d.z, 1.5))));
        let p = l.rider;
        if (
          (l.riding &&
            (!p || !p.active || p.state !== `ride`) &&
            ((l.riding = !1), (l.rider = null)),
          !l.riding)
        ) {
          let e = u.controls;
          (e && ((e.throttle = 0), (e.brake = 1), (e.handbrake = !0)),
            ((f > 120 && l.hidden) || f > 300) && x(l));
          continue;
        }
        if ((f > 260 && l.hidden) || i.now - l.born > 600) {
          x(l);
          continue;
        }
        if (o.level > 0 && !o.frozen && !o.minorOnly && f < 140) {
          l.riding = !1;
          let e = Math.sin(u.heading),
            t = -Math.cos(u.heading);
          ((p.pedal = 0),
            (p.x = d.x - Math.cos(u.heading) * n * 0.7 - e * 0.2),
            (p.z = d.z - Math.sin(u.heading) * n * 0.7 - t * 0.2),
            (p.body.active = !0),
            r.officers.setState(p, `chase`),
            (l.rider = null),
            r.log(`bicycle officer dismounts`));
          continue;
        }
        (C(l, t, i.now), w(l, p, t));
      }
    },
    C = (r, i, a) => {
      let o = f.S,
        s = r.v,
        c = s.body,
        l = r.route;
      ((!l.valid ||
        l.remaining(c.x, c.z) < 12 ||
        a - l.builtAt > 90 ||
        (r.driver.stuckCount >= 2 && a - l.builtAt > 3)) &&
        o.spawn.roadPoint(r.site.x, r.site.z, 90, 230, ZQ, {
          hidden: !1,
          clear: 0,
        }) &&
        (l.build(t, a, c.x, c.z, s.heading, ZQ.x, ZQ.z, `lane`, 99, 8),
        (r.driver.stuckCount = 0)),
        l.track(c.x, c.z, 6, $Q, 25, !0));
      let u = YQ;
      if (($Q.turn > 0.4 && (u = Math.min(u, 3.2)), l.nextStop(e$))) {
        let t = Math.hypot(e$.x - c.x, e$.z - c.z);
        if (t < 20) {
          let n = e.signals.state(e$.node, e$.axis);
          (n === `red` || (n === `yellow` && t > 6)) &&
            (u = Math.min(u, Math.sqrt(5 * Math.max(0, t - 2))));
        }
      }
      let d = Math.cos(s.heading),
        p = Math.sin(s.heading);
      r.driver.drive(
        e,
        s,
        $Q.x + d * n * 0.9,
        $Q.z + p * n * 0.9,
        u,
        i,
        null,
        0,
      );
    },
    w = (e, t, n) => {
      let r = e.v,
        i = r.body,
        a = r.heading;
      ((t.x = i.x - Math.sin(a) * 0.2),
        (t.z = i.z + Math.cos(a) * 0.2),
        (t.y = r.object.position.y + 0.08),
        (t.heading = a),
        (t.vx = i.vx),
        (t.vz = i.vz),
        (t.roll += (r.object.rotation.z - t.roll) * Math.min(1, n * 6)),
        (t.pedal =
          Math.abs(r.speed) > 0.6
            ? XQ * Math.min(1.2, Math.abs(r.speed) / YQ)
            : 0.001));
    };
  return (
    e.events.on(`quality:changed`, () => {
      i &&
        ((i.mesh.material = s()),
        (i.mesh.castShadow = e.quality.shadows),
        (o = null));
    }),
    typeof window < `u` &&
      (window.__koban = {
        sites: r,
        bikes: c,
        info: () => ({
          shown: i?.shown ?? 0,
          bikes: c.length,
          guards: r.filter(p).map((e) => e.id),
        }),
      }),
    {
      system: {
        name: `tokyo-koban`,
        async init() {
          m();
        },
        update(t) {
          if (i) {
            let t = e.camera.position;
            (i.regather(t.x, t.z, 1, 8), (i.mesh.visible = i.shown > 0));
          }
          S(t);
        },
        prewarm() {
          if (!a) return [];
          if (!o) {
            let e = new Ii(`tokyo-koban-proto`, s(), [VQ()], 2, !0);
            (n_(t$, 0, -50, 0, 0, 1),
              e.add(0, t$, 0, 0, 1e9),
              e.regather(0, 0, 1, 0, !0),
              (e.mesh.frustumCulled = !1),
              (o = [e.mesh]));
          }
          return o;
        },
      },
      sees: _,
      ambient: g,
    }
  );
}
