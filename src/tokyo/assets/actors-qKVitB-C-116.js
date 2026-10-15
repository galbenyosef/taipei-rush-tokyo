// tokyo/assets/actors-qKVitB-C 116 — math
// Lines 54025-55505 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function gO(e) {
  let n = {
      x: 0,
      y: 0,
      z: 0,
      vx: 0,
      vz: 0,
      speed: 0,
      heading: 0,
      onFoot: !0,
      inVehicle: !1,
      vehicle: null,
      twoWheeler: !1,
      alive: !0,
      armed: !1,
      sinceShot: 1 / 0,
      body: null,
      stillT: 0,
      teleported: !1,
    },
    r = {
      level: 0,
      heat: 0,
      evading: !1,
      unseenT: 0,
      evadeT: 0,
      lastX: 0,
      lastZ: 0,
      searchR: aw.base,
      minorOnly: !1,
      frozen: !1,
      frozenT: 0,
    },
    i = e.params.has(`nopolice`),
    a = e.params.has(`policeDebug`),
    o = cw(e.quality),
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m = !1,
    h = !1,
    g = !1,
    _ = !1,
    v = -1 / 0,
    y = NaN,
    x = NaN,
    S = 0,
    C = 0,
    w = !1,
    T = 0,
    E = 0,
    D = 0,
    O = 5,
    k = 0,
    j = 0,
    M = 0,
    ee = 0,
    te = 0,
    ne = 0,
    N = 0,
    re = {},
    ie = {},
    ae = [],
    oe = !1,
    se = 0,
    ce = -99,
    ue = { x: 0, z: 0, r: 0 },
    de = [],
    fe = 0,
    me = 0,
    he = 0,
    ge = [0, 0, 0, 0, 0, 0],
    _e = 0,
    ve = new L(),
    ye = null,
    be,
    xe = () => e.time.elapsed,
    F = (e) => {
      let t = `${xe().toFixed(1)}s ${e}`;
      (de.push(t),
        de.length > 60 && de.shift(),
        a && console.info(`[test] police: ${t}`));
    },
    Se = (t, n, r) => {
      ((M = xe() + r * 0.8),
        e.events.emit(`subtitle`, { text: t, duration: r, speaker: e.t(n) }),
        a && console.info(`[test] police-sub: ${e.t(n)}: ${t.zh} / ${t.en}`));
    },
    Ce = (t, n, r, i = !1) => {
      let a = xe();
      if (!i && (a < ee || a < M)) return;
      let o = QE[t] ?? QE[(t = `getOut`)],
        s = (Math.random() * o.length) | 0;
      (o.length > 1 && s === re[t] && (s = (s + 1) % o.length),
        (re[t] = s),
        (ee = a + 3.5),
        (ye?.say(o[s], n, r) ?? !1) || ye?.available
          ? e.audio.play(`police_squelch`, { x: n, y: 1.6, z: r, volume: 0.8 })
          : e.audio.play(`police_megaphone`, {
              x: n,
              y: 1.6,
              z: r,
              volume: 0.5,
            }),
        Se(o[s], pD.police, 2.6));
    },
    we = (t, n = !1) => {
      let r = xe();
      (!n && (r < te || r < M)) ||
        ((te = r + 7),
        e.audio.play(`police_squelch`, { ui: !0, volume: 0.35 }),
        Se(t, pD.dispatch, 4.2),
        ye?.radio(t));
    },
    Te = (e) => {
      let t = 0;
      for (let n = 1; n < YC.length; n++) e >= YC[n] && (t = n);
      return t;
    },
    De = (t, n, i = !1) => {
      t = Math.max(0, Math.min(5, Math.round(t)));
      let a = r.level;
      t !== a &&
        ((r.level = t),
        (se = xe()),
        (r.searchR = aw.base + aw.perStar * t),
        t > a &&
          ((ce = xe()),
          a === 0 && (ne = xe() + 8),
          (r.evading = !1),
          (r.unseenT = 0),
          (r.evadeT = 0),
          i || e.audio.play(`wanted_up`, { ui: !0 })),
        t === 0 &&
          ((_ = !1),
          (r.heat = 0),
          (r.evading = !1),
          (r.evadeT = 0),
          (r.minorOnly = !1),
          (D = 0)),
        F(`level ${a}→${t} (${n}) heat=${r.heat.toFixed(2)}`),
        e.events.emit(`wanted:changed`, { level: t, prev: a }));
    },
    I = (t, n) => {
      if (!m) return !1;
      let r = 1 - c.night * (1 - ow.nightMul);
      for (let e of d.list)
        if (
          !(
            !e.alive ||
            e.role === `abandoned` ||
            (e.crew === 0 && e.officers.length === 0 && e.role !== `roadblock`)
          ) &&
          d.seesPoint(e, t, n, ow.car * 0.75 * r)
        )
          return !0;
      for (let e of u.list)
        if (
          e.active &&
          e.state !== `dead` &&
          e.state !== `down` &&
          u.sees(e, t, n, ow.officer * r)
        )
          return !0;
      if (f.seesPoint(t, n) || JC.sees?.(t, n)) return !0;
      try {
        let i = e.traffic;
        if (i.patrolSees) return i.patrolSees(t, n, ow.car * 0.6);
        let a = i.nearestPolice?.(t, n, ow.car * 0.6 * r);
        if (
          a &&
          (a.dist < ow.hear ||
            (nO.set(a.x, 1.3, a.z),
            iO.set(t - a.x, -0.3, n - a.z).normalize(),
            !e.statics.raycast(nO, iO, a.dist - 0.5)))
        )
          return !0;
      } catch {}
      return !1;
    },
    Oe = (e, t, n, i, a, o = YC[5] + 20) => {
      let s = r.level,
        c = r.heat;
      ((r.heat = Math.min(YC[5] + 20, c + e, Math.max(c, o))),
        (i || s === 0) &&
          ((r.lastX = t),
          (r.lastZ = n),
          (r.unseenT = 0),
          r.evading && ((r.evading = !1), (r.evadeT = 0))));
      let l = Te(r.heat);
      return (l > r.level && De(l, a), r.heat - c);
    },
    ke = (e, t, n, r, i, a, o) => {
      for (let s = ae.length - 1; s >= 0; s--) {
        let c = ae[s];
        if (
          !(i - c.t > a) &&
          (c.type === e || (t !== 0 && c.fam === t)) &&
          !(Math.hypot(c.x - n, c.z - r) > o)
        )
          return c;
      }
      return null;
    },
    Ae = (t, n, i, a, o, s) => {
      let c = xe(),
        l = mO(t),
        u = l === 1,
        d = hO(t),
        f = null;
      if (o && !s) {
        let e = ke(t, l, n, i, c, 14, 32);
        if (e && e.type !== t && (XC[t] ?? 1) > (XC[e.type] ?? 1) + 0.01) f = e;
        else if (e) {
          if (e.seen || e.mult >= 1) {
            F(`110 call ${t} → already known`);
            return;
          }
          let n = Oe(e.raw * (1 - e.mult), e.x, e.z, !0, `${t} (110)`, d);
          ((e.mult = 1),
            F(
              `110 call confirms ${t} +${n.toFixed(2)} → heat ${r.heat.toFixed(2)} ★${r.level}`,
            ));
          return;
        }
      }
      let p = u || I(n, i);
      if (QC.has(t) && !p) {
        F(`crime ${t} unseen → ignored`);
        return;
      }
      let m = 1;
      if (t !== `shooting` && !QC.has(t) && Number.isFinite(a)) {
        let [e, t] = u ? nw : tw;
        m = Math.max(e, Math.min(t, a));
      }
      let h = u ? 1 : p ? rw : o ? 1 : iw,
        g = (XC[t] ?? 1) * m,
        _ = f ?? ke(t, l, n, i, c, 0.4, 9);
      if (_) {
        let e = Math.max(_.raw, g * _.rep),
          a = e * Math.max(h, _.mult) - _.raw * _.mult;
        if (((_.seen = _.seen || p), a > 0.01)) {
          let s = Oe(a, n, i, p || o, t, Math.max(d, hO(_.type)));
          (g > _.raw && (_.type = t),
            (_.raw = e),
            (_.mult = Math.max(h, _.mult)),
            F(
              `crime ${t} (same incident) +${s.toFixed(2)} → heat ${r.heat.toFixed(2)} ★${r.level}`,
            ));
        } else F(`crime ${t} (duplicate report) ignored`);
        return;
      }
      let v = 1,
        y = $C[t];
      y !== void 0 &&
        (c - (ie[t] ?? -99) < y ? (v = ew[t] ?? 0.25) : (ie[t] = c));
      let b = g * v,
        x = r.level;
      x === 0 ? (r.minorOnly = QC.has(t)) : QC.has(t) || (r.minorOnly = !1);
      let S = p || o || t === `shooting` || t === `kill`,
        C = Oe(b * h, n, i, S, t, d),
        w = ae.length >= 16 ? ae.shift() : {};
      ((w.type = t),
        (w.fam = l),
        (w.x = n),
        (w.z = i),
        (w.t = c),
        (w.raw = b),
        (w.mult = h),
        (w.rep = v),
        (w.seen = p),
        ae.push(w),
        F(
          `crime ${t} sev=${m.toFixed(2)}${v < 1 ? ` rep×${v}` : ``} seen=${p} wit=${o}${s ? ` own` : ``} +${C.toFixed(2)} → heat ${r.heat.toFixed(2)} ★${r.level}`,
        ),
        r.level > x &&
          x === 0 &&
          (p ||
            e.events.emit(`notify`, {
              text: dD.reported,
              kind: `bad`,
              duration: 3,
            }),
          we((JC.crimeLine ?? cD)(e.plan, t, n, i), !0),
          (T = xe() + (p ? 0.2 : 1.5))));
    },
    je = (e) => {
      oe ||
        i ||
        r.frozen ||
        !n.alive ||
        Ae(
          e.type,
          e.pos?.x ?? n.x,
          e.pos?.z ?? n.z,
          e.severity,
          !!e.witnessed,
          !1,
        );
    },
    R = (e) => {
      if (!m) return;
      (d.despawnAll(),
        u.despawnAll(),
        f.despawn(),
        p.removeAll(),
        (d.ticketOfficer = null));
      let t = r.level;
      ((r.frozen = !1),
        (r.evading = !1),
        (r.unseenT = r.evadeT = 0),
        (r.heat = 0),
        (r.minorOnly = !1),
        (S = C = 0),
        (w = !1),
        (ae.length = 0));
      for (let e in ie) delete ie[e];
      (t !== 0 && De(0, e, !0), F(`reset (${e})`));
    },
    Ne = (e) => {
      r.frozen ||=
        ((r.frozen = !0),
        (r.frozenT = xe()),
        m && (d.silence(), f.leave()),
        De(0, e, !0),
        !0);
    },
    Pe = () => {
      if (w || r.frozen) return;
      ((w = !0),
        F(`BUSTED`),
        e.audio.play(`police_whistle`, { x: n.x, y: 1.6, z: n.z }),
        Ce(`arrest`, n.x, n.z, !0));
      let t = !1,
        i = e.events.once(`player:busted`, () => (t = !0));
      try {
        e.player.busted();
      } catch (e) {
        console.warn(`[police] player.busted threw`, e);
      }
      (i(),
        !t &&
          e.player.mode !== `busted` &&
          (e.events.emit(`ui:bigMessage`, {
            title: { zh: `被捕`, en: `BUSTED` },
            subtitle: { zh: `臺北市政府警察局`, en: `Taipei City Police` },
            color: `#4aa3ff`,
            duration: 4,
          }),
          e.audio.play(`busted`, { ui: !0 })),
        Ne(`busted`));
    },
    Fe = () => {
      let t = n.twoWheeler ? hw.scooter : hw.car;
      try {
        e.state.addMoney(-t, `traffic ticket`);
      } catch {}
      (e.events.emit(`notify`, {
        text: (JC.ticketLine ?? mD)(t),
        kind: `bad`,
        duration: 4,
      }),
        e.audio.play(`money`, { ui: !0, rate: 0.8 }),
        F(`ticket ${pt(t, ft)}`),
        (d.ticketOfficer = null),
        (r.minorOnly = !1),
        De(0, `ticket`, !0));
    },
    z = (t) => {
      let r = e.player,
        i = null;
      try {
        i = e.vehicles.playerVehicle;
      } catch {
        i = null;
      }
      let a = r.mode,
        o = a === `vehicle` || !!i,
        s,
        c,
        l;
      if (
        (o && i
          ? ((s = i.body.x), (l = i.body.z), (c = i.object.position.y))
          : ((s = r.position.x), (c = r.position.y), (l = r.position.z)),
        (n.teleported = !1),
        Number.isNaN(y) || Math.hypot(s - y, l - x) > 45)
      )
        ((n.teleported = !Number.isNaN(y)), (n.vx = n.vz = 0));
      else if (t > 0) {
        let e = Math.min(1, t * 10);
        ((n.vx += ((s - y) / t - n.vx) * e),
          (n.vz += ((l - x) / t - n.vz) * e));
      }
      ((y = s),
        (x = l),
        (n.x = s),
        (n.y = c),
        (n.z = l),
        ve.set(s, c, l),
        (n.speed = Math.hypot(n.vx, n.vz)),
        (n.inVehicle = o),
        (n.vehicle = o ? i : null),
        (n.twoWheeler = !!i?.spec.twoWheeler),
        (n.onFoot = !o && (a === `foot` || a === `cutscene`)),
        (n.alive = a !== `dead` && r.health > 0),
        (n.heading = o && i ? i.heading : r.heading),
        (n.armed =
          (r.weapon === `pistol` || r.weapon === `smg`) &&
          (r.ammo?.[r.weapon] ?? 1) > 0),
        (n.sinceShot = xe() - v),
        (n.body = o && i ? i.body : r.body),
        (n.stillT = n.speed < 0.9 ? n.stillT + t : 0));
    },
    Ie = () => {
      let t = null;
      for (let n of e.vehicles.list)
        if (
          (n.object.traverse((e) => {
            let n = e;
            !t &&
              n.isMesh &&
              n.castShadow &&
              n.customDepthMaterial &&
              !Array.isArray(n.material) &&
              (t = n);
          }),
          t)
        )
          return t;
      return null;
    },
    Le = { active: !1, x: 0, z: 0, h: 0 },
    Re = 0,
    ze = () => {
      if (s.now < Re) return;
      if (
        ((Re = s.now + 0.4),
        !(
          r.level > 0 &&
          n.onFoot &&
          n.alive &&
          n.y - e.plan.groundHeight(n.x, n.z) > 2.5
        ))
      ) {
        Le.active = !1;
        return;
      }
      ((Le.active = !0), (Le.x = n.x), (Le.z = n.z), (Le.h = 0));
      let t = e.transit,
        i = null;
      for (let e of t?.mapStations ?? [])
        if (
          e.elevated &&
          Math.abs(n.x - e.x) < e.hw + 4 &&
          Math.abs(n.z - e.z) < e.hl + 4
        ) {
          i = e;
          break;
        }
      if (!i) return;
      let a = 1 / 0;
      for (let e of t?.entrances ?? []) {
        if (e.stationId !== i.id) continue;
        let t = Math.hypot(e.x - n.x, e.z - n.z);
        t < a &&
          t < 120 &&
          ((a = t), (Le.x = e.x), (Le.z = e.z), (Le.h = e.heading));
      }
    },
    Be = (e) => {
      for (let t of u.list) {
        if (!t.active) continue;
        let r = t.state;
        if (
          (r === `chase` || r === `search` || r === `aim` || r === `arrest`) &&
          Math.hypot(t.x - n.x, t.z - n.z) < e
        )
          return !0;
      }
      return !1;
    },
    Ve = (e) => {
      for (let t of u.list)
        if (
          t.active &&
          t.state !== `dead` &&
          Math.hypot(t.x - n.x, t.z - n.z) < e
        )
          return !0;
      for (let t of d.list)
        if (t.alive && Math.hypot(t.v.body.x - n.x, t.v.body.z - n.z) < e)
          return !0;
      return !1;
    },
    He = (t) => {
      let i = h;
      ((g = i), (h = !1), n.teleported && (ce = -99));
      let a = !i && r.level > 0 && !r.frozen && ce > 0 && xe() - ce < 6;
      if (r.level === 0) {
        r.heat = Math.max(0, r.heat - t * 0.05);
        return;
      }
      if (
        !r.frozen &&
        (i
          ? ((_ = !0),
            r.evading &&
              (F(`reacquired after ${r.evadeT.toFixed(1)}s evading`),
              we(dD.reacquired)),
            (r.evading = !1),
            (r.unseenT = 0),
            (r.evadeT = 0),
            (r.lastX = n.x),
            (r.lastZ = n.z))
          : a || (Le.active && Ve(60))
            ? ((r.evading = !1),
              (r.unseenT = 0),
              (r.evadeT = 0),
              (r.lastX = n.x),
              (r.lastZ = n.z))
            : n.onFoot && n.speed < 2.2 && Be(60)
              ? ((r.lastX = n.x), (r.lastZ = n.z))
              : ((r.unseenT += t),
                r.unseenT > 2.5 &&
                  (r.evading ||
                    ((r.evading = !0),
                    F(`evading (need ${10 * r.level}s)`),
                    _ && we((JC.lostLine ?? uD)(e.plan, r.lastX, r.lastZ))),
                  (r.evadeT += t),
                  r.evadeT >= 10 * r.level &&
                    (F(`lost the cops after ${r.evadeT.toFixed(1)}s`),
                    e.audio.play(`wanted_lost`, { ui: !0 }),
                    we(dD.lost, !0),
                    e.events.emit(`notify`, {
                      text: sO,
                      kind: `good`,
                      duration: 3,
                    }),
                    De(0, `evaded`, !0)))),
        !r.evading && i && xe() > ne && n.speed > 7)
      ) {
        ne = xe() + 22 + Math.random() * 10;
        let t = null;
        if (n.inVehicle && n.vehicle) {
          let e = nD(n.vehicle.color),
            r = n.vehicle.spec.name;
          t =
            n.vehicle.kind === `taxi`
              ? { zh: `小黃計程車`, en: `yellow taxi` }
              : { zh: `${e.zh}${r.zh}`, en: `${e.en} ${r.en.toLowerCase()}` };
        }
        we(
          JC.fleeLine
            ? JC.fleeLine(e.plan, n.x, n.z, n.vx, n.vz, n.vehicle)
            : lD(e.plan, n.x, n.z, n.vx, n.vz, t),
        );
      }
    },
    Ue = (t) => {
      if (r.frozen || r.level === 0 || r.minorOnly || !n.alive || w) {
        ((S = Math.max(0, S - t)), (C = Math.max(0, C - t)));
        return;
      }
      let i = !1;
      if (n.onFoot && e.player.mode === `foot`) {
        for (let e of u.list) {
          if (!e.active) continue;
          let t = e.state;
          if (
            t !== `dead` &&
            t !== `down` &&
            t !== `return` &&
            t !== `leave` &&
            t !== `ticket` &&
            Math.hypot(e.x - n.x, e.z - n.z) < 1.6 &&
            Math.abs(e.y - n.y) < 1.6
          ) {
            i = !0;
            break;
          }
        }
        (i && n.speed < 1.4 ? (S += t) : (S = Math.max(0, S - t * 1.5)),
          (C = 0),
          S > 0.15 && e.ui.prompt(aO),
          S >= 1.5 && Pe());
      } else if (n.inVehicle && n.vehicle) {
        let r = n.vehicle.body;
        for (let e of u.list)
          if (
            e.active &&
            e.state === `arrest` &&
            Math.hypot(e.x - r.x, e.z - r.z) < n.vehicle.spec.halfW + 2.175
          ) {
            i = !0;
            break;
          }
        (i && n.speed < 1 ? (C += t) : (C = Math.max(0, C - t * 1.5)),
          C > 0.2 && e.ui.prompt(oO),
          C >= 2.6 && Pe());
      } else ((S = Math.max(0, S - t)), (C = Math.max(0, C - t)));
    },
    We = () => {
      let t = e.plan.surfaceAt(n.x, n.z);
      return t === `plaza` || t === `park`;
    },
    Ge = (e) => {
      let t = xe();
      if (r.frozen) {
        (t - r.frozenT > 8 || n.teleported) && R(`stand-down timeout`);
        return;
      }
      if (r.level > 0) {
        let i = sw[r.level],
          a = d.count(),
          s = d.count(fO),
          c = i.roadblocks > 0 && o.maxCars >= 5,
          m = c && t - se > (r.level >= 4 ? 8 : 22),
          h = c && n.inVehicle ? Math.max(0, 2 - s) : 0,
          g = i.swat,
          _ = Math.max(1, Math.min(i.cars, o.maxCars - g - (c ? 2 : 0))),
          v = o.maxCars - a - h,
          y = r.evading && Math.hypot(r.lastX - n.x, r.lastZ - n.z) > 170;
        if (t >= T && !y) {
          let e = n.onFoot && We(),
            i = d.count(cO),
            a = d.count(lO),
            o = d.count(uO),
            s = null;
          if (i + a < _ && v > 0) {
            let t = e ? a < 2 : r.level <= 2 && a < 1 && Math.random() < 0.45;
            (t || !e || i < 1) &&
              ((s = d.spawnPursuit(!1, t)),
              s &&
                F(
                  `spawn pursuit ${t ? `scooter` : `car`} (${i + a + 1}/${_})`,
                ));
          } else
            o < g &&
              v > 0 &&
              ((s = d.spawnPursuit(!0)),
              s && (F(`spawn SWAT van`), we(dD.swat, !0)));
          T = t + (s ? 2.4 + Math.random() : 0.9);
        }
        (i.heli
          ? ((D += e),
            !f.active && D > 3 && (f.spawn(), F(`helicopter dispatched`)))
          : f.active && f.leave(),
          m &&
            i.roadblocks > p.count &&
            n.inVehicle &&
            !r.evading &&
            a + 2 <= o.maxCars &&
            p.tryCreate() &&
            F(`roadblock set up`));
        let b = (n.onFoot && We()) || !d.vehiclesAvailable ? i.foot : 0;
        if (t >= E && !y && u.countRole(`foot`) < b) {
          E = t + 2.2;
          let e = { x: 0, z: 0 },
            i = r.evading ? r.lastX : n.x,
            a = r.evading ? r.lastZ : n.z;
          l.footPoint(i, a, 40, 80, e) &&
            u.spawn(e.x, e.z, Math.atan2(n.x - e.x, -(n.z - e.z)), {
              role: `foot`,
              state: r.evading ? `search` : `chase`,
              variant: +(r.level >= 5 && Math.random() < 0.5),
            }) &&
            F(`spawn foot officer`);
        }
      } else f.active && f.leave();
      for (let e of u.list)
        e.active &&
          e.role !== `roadblock` &&
          Math.hypot(e.x - n.x, e.z - n.z) >
            (e.role === `guard` || e.role === `patrol` ? 230 : 180) &&
          u.isHidden(e) &&
          u.despawn(e);
    },
    Ke = [`ximen-walk`, `raohe-market`, `shilin-market`],
    qe = () => {
      let t = xe();
      if (t < k) return;
      ((k = t + 1.1),
        r.level === 0 &&
          !r.frozen &&
          o.patrolCar &&
          t > O &&
          !(d.count(dO) > 0) &&
          t - d.lastPatrolDespawn > 20 &&
          (d.spawnPatrol() && F(`patrol car on duty`), (O = t + 6)));
      let i = e.plan.landmark(`police-hq`);
      if (i) {
        let e = Math.hypot(i.x - n.x, i.z - n.z);
        if (e < 150 && u.countRole(`guard`) === 0 && !r.frozen) {
          let t = Math.sin(i.facing),
            n = -Math.cos(i.facing),
            r = Math.cos(i.facing),
            a = Math.sin(i.facing),
            o = i.x + t * (i.d / 2 + 1.4),
            s = i.z + n * (i.d / 2 + 1.4);
          for (let t of [-1, 1]) {
            let n = o + r * t * 3.2,
              c = s + a * t * 3.2;
            if (l.visible(n, 1, c, 1) && e < 80) continue;
            let d = u.spawn(n, c, i.facing, { role: `guard`, state: `guard` });
            d && ((d.guardX = n), (d.guardZ = c), (d.guardH = i.facing));
          }
        }
      }
      let a = e.env?.hour ?? 12,
        s = (a >= 7 && a < 9.5) || (a >= 17 && a < 19.5);
      if (
        r.level === 0 &&
        !r.frozen &&
        s &&
        u.countRole(`traffic`) === 0 &&
        t > j
      ) {
        j = t + 20;
        let r = null,
          i = 1 / 0;
        for (let t of e.plan.nodes) {
          if (!t.signal || t.kind !== `cross` || !t.roads.every((e) => e.major))
            continue;
          let e = Math.hypot(t.x - n.x, t.z - n.z);
          e > 50 && e < 170 && e < i && ((i = e), (r = t));
        }
        if (r) {
          let e = n.x > r.x ? 1 : -1,
            t = n.z > r.z ? 1 : -1,
            i = r.x + e * (r.halfX + 1.4),
            a = r.z + t * (r.halfZ + 1.4);
          if (!l.visible(i, 1, a, 1)) {
            let e = u.spawn(i, a, 0, { role: `traffic`, state: `guard` });
            e &&
              ((e.guardX = i),
              (e.guardZ = a),
              (e.guardH = Math.atan2(r.x - i, -(r.z - a))),
              F(`rush-hour traffic officer on duty`));
          }
        }
      } else if (!s)
        for (let e of u.list)
          e.active &&
            e.role === `traffic` &&
            e.state === `guard` &&
            u.isHidden(e) &&
            u.despawn(e);
      if (!r.frozen && u.countRole(`patrol`) < 2)
        for (let t of Ke) {
          let r = e.plan.landmark(t);
          if (!r || Math.hypot(r.x - n.x, r.z - n.z) > 170) continue;
          let i = { x: 0, z: 0 };
          if (l.footPoint(r.x, r.z, 0, Math.max(r.w, r.d) * 0.5, i))
            for (let e = 0; e < 2; e++) {
              let t = u.spawn(
                i.x + e * 0.9,
                i.z + e * 0.4,
                Math.random() * 6.28,
                { role: `patrol`, state: `patrol` },
              );
              t && ((t.guardX = r.x), (t.guardZ = r.z));
            }
          break;
        }
      JC.ambient && JC.ambient(be);
    },
    Je = () => {
      let e = d.ticketOfficer;
      e &&
        r.minorOnly &&
        (n.onFoot || (n.inVehicle && n.speed > 4)) &&
        ((r.minorOnly = !1),
        F(`fled the traffic stop`),
        Ce(`dontRun`, e.x, e.z, !0),
        Oe(0.8, n.x, n.z, !0, `fled traffic stop`),
        u.setState(e, n.onFoot ? `chase` : `return`),
        (d.ticketOfficer = null));
    },
    Ye = null,
    Xe = () => {
      if (!a) return;
      if (!Ye) {
        let t = new pe();
        (t.setAttribute(
          `position`,
          new P(new Float32Array(12e3), 3).setUsage(b),
        ),
          (Ye = new Ee(
            t,
            new le({ color: 3399167, depthTest: !1, transparent: !0 }),
          )),
          (Ye.frustumCulled = !1),
          (Ye.renderOrder = 99),
          e.scene.add(Ye));
      }
      let t = Ye.geometry.attributes.position,
        n = t.array,
        r = 0,
        i = (e, t, i, a) => {
          r >= 3990 ||
            ((n[r * 3] = e),
            (n[r * 3 + 1] = 0.6),
            (n[r * 3 + 2] = t),
            r++,
            (n[r * 3] = i),
            (n[r * 3 + 1] = 0.6),
            (n[r * 3 + 2] = a),
            r++);
        };
      for (let e of d.list) {
        let t = e.route;
        for (let e = Math.max(0, t.seg); e + 1 < t.n; e++)
          i(t.pts[e * 2], t.pts[e * 2 + 1], t.pts[e * 2 + 2], t.pts[e * 2 + 3]);
        let n = e.v.body;
        i(
          n.x,
          n.z,
          n.x + Math.sin(n.heading) * 6,
          n.z - Math.cos(n.heading) * 6,
        );
      }
      for (let e of u.list) {
        if (!e.active || !e.routing) continue;
        let t = e.route;
        for (let e = Math.max(0, t.seg); e + 1 < t.n; e++)
          i(t.pts[e * 2], t.pts[e * 2 + 1], t.pts[e * 2 + 2], t.pts[e * 2 + 3]);
      }
      (Ye.geometry.setDrawRange(0, r), (t.needsUpdate = !0));
    },
    Ze = null,
    Qe = 0,
    $e = () => {
      if (
        !a ||
        (Ze ||
          ((Ze = document.createElement(`div`)),
          Object.assign(Ze.style, {
            position: `fixed`,
            right: `8px`,
            top: `8px`,
            zIndex: `9998`,
            font: `12px/1.4 ui-monospace,Menlo,monospace`,
            color: `#cfe3ff`,
            background: `rgba(8,14,30,.72)`,
            padding: `6px 9px`,
            borderRadius: `6px`,
            pointerEvents: `none`,
            whiteSpace: `pre`,
          }),
          document.body.appendChild(Ze)),
        xe() < Qe)
      )
        return;
      Qe = xe() + 0.25;
      let e = `★`.repeat(r.level) + `☆`.repeat(5 - r.level),
        t = r.evading
          ? ` EVADING ${r.evadeT.toFixed(1)}/${10 * r.level}s`
          : g
            ? ` SEEN`
            : ``,
        n = {};
      for (let e of d.list)
        n[e.role + (e.state === `deployed` ? `*` : ``)] =
          (n[e.role + (e.state === `deployed` ? `*` : ``)] ?? 0) + 1;
      let i = {};
      for (let e of u.list) e.active && (i[e.state] = (i[e.state] ?? 0) + 1);
      Ze.textContent = `警察 ${e}${t}${r.minorOnly ? ` (traffic)` : ``}${r.frozen ? ` FROZEN` : ``}\nheat ${r.heat.toFixed(2)}  arrest ${S.toFixed(1)}/${C.toFixed(1)}\ncars ${JSON.stringify(n)}\nofficers ${JSON.stringify(i)}\nheli ${f.active ? f.state : `-`}  roadblocks ${p.count}  glare ${c.glareCount}\njs ${fe.toFixed(3)}ms (max ${me.toFixed(2)})\nprof c${ge[0].toFixed(2)} o${ge[1].toFixed(2)} h${ge[2].toFixed(2)} r${ge[3].toFixed(2)} d${ge[4].toFixed(2)} a${ge[5].toFixed(2)}`;
    },
    et = e.params.get(`policeCam`),
    tt = new L(),
    nt = new L(),
    rt = () => {
      if (!et) return;
      let t = NaN,
        r = 0,
        i = 0,
        a = 0,
        o = 7,
        s = 2.2;
      if (et === `heli` && f.active)
        ((t = f.pos.x),
          (r = f.pos.y),
          (i = f.pos.z),
          (a = f.heading + 2.4),
          (o = 18),
          (s = -2));
      else if (et === `officer`) {
        let e = 1 / 0;
        for (let o of u.list) {
          if (!o.active) continue;
          let s = Math.hypot(o.x - n.x, o.z - n.z);
          s < e &&
            ((e = s),
            (t = o.x),
            (r = o.y + 1),
            (i = o.z),
            (a = o.heading + 2.6));
        }
        ((o = 4.2), (s = 0.6));
      } else if (et === `sign` && p.blocks.length) {
        let e = p.blocks[0].props.find((e) => e.kind === 2);
        e &&
          ((t = e.x),
          (r = e.y + 1.15),
          (i = e.z),
          (a = e.h + 0.35),
          (o = 4.2),
          (s = 0.25));
      } else if (et === `roadblock` && p.blocks.length) {
        let e = p.blocks[0];
        ((t = e.x),
          (r = 1.2),
          (i = e.z),
          (a = e.heading + Math.PI + 0.12),
          (o = 34),
          (s = 0.9));
      } else {
        let e = 1 / 0;
        for (let o of d.list) {
          let s = o.v.body,
            c = Math.hypot(s.x - n.x, s.z - n.z);
          c < e &&
            ((e = c), (t = s.x), (r = 0.8), (i = s.z), (a = s.heading + 2.5));
        }
        ((o = 9), (s = 2.4));
      }
      if (!Number.isNaN(t)) {
        (nt.set(t, r, i),
          tt.set(t + Math.sin(a) * o, r + s, i - Math.cos(a) * o));
        try {
          e.cameraRig.override(tt, nt);
        } catch {}
      }
    },
    it = 0,
    B = (e) => {
      let t = performance.now(),
        n = t - it;
      ((it = t),
        (n > ge[e] || s.now > _e) &&
          (ge[e] = Math.max(n, s.now > _e ? 0 : ge[e])));
    },
    at = {
      name: `police`,
      get level() {
        return r.level;
      },
      get evading() {
        return r.evading;
      },
      get units() {
        return m ? d.count(pO) + u.aliveCount + +!!f.active : 0;
      },
      get searchArea() {
        return !r.evading || r.level === 0
          ? null
          : ((ue.x = r.lastX), (ue.z = r.lastZ), (ue.r = r.searchR), ue);
      },
      get evadeProgress() {
        return r.evading && r.level > 0
          ? Math.min(1, r.evadeT / (10 * r.level))
          : 0;
      },
      get heatProgress() {
        if (r.level >= 5) return 1;
        let e = YC[r.level],
          t = YC[r.level + 1];
        return Math.max(0, Math.min(1, (r.heat - e) / (t - e)));
      },
      get spotted() {
        return g;
      },
      isPoliceVehicle(e) {
        return m && d.isPoliceVehicle(e);
      },
      get enabled() {
        return !i;
      },
      setEnabled(e) {
        e !== !i &&
          ((i = !e),
          i && R(`disabled`),
          F(`police ${e ? `enabled` : `disabled`}`));
      },
      addHeat(e, t, n) {
        i ||
          r.frozen ||
          !(e > 0) ||
          (r.level === 0 && (r.minorOnly = !1), Oe(e, t, n, !0, `addHeat`));
      },
      setLevel(e) {
        if (i) return;
        let t = Math.max(0, Math.min(5, Math.round(e)));
        (r.frozen && t > 0 && R(`setLevel`),
          (r.minorOnly = !1),
          (r.heat = t > 0 ? YC[t] + 0.01 : 0),
          (r.lastX = n.x),
          (r.lastZ = n.z),
          (r.unseenT = 0),
          (r.evading = !1),
          (r.evadeT = 0),
          t > r.level && (T = 0),
          De(t, `setLevel`));
      },
      clear() {
        R(`clear`);
      },
      spawnOfficer(e, t, n) {
        if (!m || i) return !1;
        let r = u.spawn(e, t, n, { state: `chase`, variant: 0, role: `foot` });
        return r ? (u.knockDown(r, Math.sin(n), -Math.cos(n), 2.2), !0) : !1;
      },
      _debug: {
        get log() {
          return de.slice();
        },
        stats() {
          return {
            level: r.level,
            heat: +r.heat.toFixed(2),
            evading: r.evading,
            evadeT: +r.evadeT.toFixed(2),
            unseenT: +r.unseenT.toFixed(2),
            minorOnly: r.minorOnly,
            frozen: r.frozen,
            last: [Math.round(r.lastX), Math.round(r.lastZ)],
            seen: g,
            cars: d.list.map((e) => ({
              id: e.v.id,
              role: e.role,
              state: e.state,
              crew: e.crew,
              out: e.officers.length,
              d: Math.round(Math.hypot(e.v.body.x - n.x, e.v.body.z - n.z)),
              speed: +e.v.speed.toFixed(1),
              los: e.los,
              at: [Math.round(e.v.body.x), Math.round(e.v.body.z)],
              want: +e.dbgWant.toFixed(1),
              to: [Math.round(e.dbgTx), Math.round(e.dbgTz)],
              stuck: e.driver.stuckCount,
              rev: e.driver.reversals,
              fwd: +e.driver.fwdHit.toFixed(1),
              lr: [+e.driver.leftHit.toFixed(1), +e.driver.rightHit.toFixed(1)],
              h: +e.v.heading.toFixed(2),
              rt: +e.driver.reverseT.toFixed(2),
              et: +e.driver.escapeT.toFixed(2),
              dyn: e.driver.dynBody
                ? `${e.driver.dynBody.kind}@${e.driver.dynDist.toFixed(1)}`
                : ``,
            })),
            officers: u.list
              .filter((e) => e.active)
              .map((e) => ({
                state: e.state,
                role: e.role,
                hp: Math.round(e.hp),
                d: Math.round(Math.hypot(e.x - n.x, e.z - n.z)),
                los: e.los,
                v: e.variant,
                at: [+e.x.toFixed(1), +e.z.toFixed(1)],
                persona: e.persona,
                hero: !!e.hero,
                nav: e.navDirect,
                lod: e.lodFar ? 2 : 1,
              })),
            heli: f.active
              ? {
                  state: f.state,
                  alt: Math.round(f.pos.y),
                  d: Math.round(Math.hypot(f.pos.x - n.x, f.pos.z - n.z)),
                  los: f.los,
                }
              : null,
            roadblocks: p.count,
            units: at.units,
            jsMs: +fe.toFixed(3),
            jsMaxMs: +me.toFixed(3),
            arrestT: +S.toFixed(2),
            prof: ge.map((e) => +e.toFixed(2)),
            shots: { ...u.stats },
            player: {
              x: Math.round(n.x),
              z: Math.round(n.z),
              speed: +n.speed.toFixed(1),
              inVehicle: n.inVehicle,
            },
          };
        },
        spawnOfficer(e = 3, t = 0, r = `chase`, i = 0, a = `foot`) {
          let o = u.spawn(n.x + e, n.z + t, Math.atan2(-e, t), {
            state: r,
            variant: i,
            role: a,
          });
          return (
            o &&
              ((o.guardX = o.x),
              (o.guardZ = o.z),
              (o.guardH = Math.atan2(-e, t))),
            !!o
          );
        },
        spawnCar(e = !1, t = !1) {
          return !!d.spawnPursuit(e, t);
        },
        heli() {
          return (f.spawn(), f.active);
        },
        roadblock() {
          return p.tryCreate(!0);
        },
        busted() {
          Pe();
        },
        async run(n, r = {}) {
          let { runScenario: i } = await t(
            async () => {
              let { runScenario: e } = await Promise.resolve().then(() => ms);
              return { runScenario: e };
            },
            void 0,
          );
          return i(e, at, at._debug, n, r);
        },
        showcase(t, r, i, a = `poses`) {
          let o = e.cameraRig.yaw,
            s = i ?? o + Math.PI,
            c = t ?? n.x + Math.sin(o) * 7,
            l = r ?? n.z - Math.cos(o) * 7,
            d = Math.cos(s),
            f = Math.sin(s),
            p =
              a === `looks`
                ? [
                    [0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 3, 0],
                    [0, 0, 0, 0, 0, 1, 0, 4, 0],
                    [0, 0, 0, 0, 2, 1, 0, 5, 0],
                  ]
                : a === `swat`
                  ? [
                      [0, 0, 0, 0, 0, 1, 0, 4, 0],
                      [0, 1, 0, 0, 2, 1, 0, 5, 0],
                      [0.6, 0, 0, 0, 2, 1, 0, 4, 0],
                      [0, 0.4, 1, 0, 2, 1, 0, 5, 0],
                    ]
                  : [
                      [0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [0, 1, 0, 0, 1, 0, 0, 2, 0],
                      [0.95, 0, 0, 0, 0, 0, 0, 1, 0],
                      [0, 0, 0, 1, 0, 0, 0, 0, 0],
                      [0, 1, 0, 0, 2, 1, 0, 4, 0],
                      [0, 0.3, 1, 0, 1, 0, 0, 1, 0],
                      [0, 0, 0, 0, 0, 0, 1, 2, 0],
                      [0.6, 0, 0, 0, 2, 1, 0, 5, 0],
                    ],
            m = a === `looks` ? 1.15 : 1.3;
          return (
            p.forEach((e, t) => {
              let n = (t - (p.length - 1) / 2) * m,
                r = u.spawn(c + d * n, l + f * n, s, {
                  state: `idle`,
                  variant: e[5],
                  role: `guard`,
                  persona: e[7],
                });
              r &&
                ((r.posed = !0),
                (r.stride = e[0]),
                (r.aim = e[1]),
                (r.crouch = e[2]),
                (r.reach = e[3]),
                (r.gun = e[4]),
                (r.talk = e[6]),
                (r.rest = e[8]),
                (r.phase = 1.2 + t * 0.7));
            }),
            !0
          );
        },
        crowd(e) {
          typeof e == `number` && (u.nearDist = e);
          let t = u.render;
          return {
            nearDist: u.nearDist,
            near: t.near.mesh.visible ? t.near.mesh.count : 0,
            far: t.far.mesh.visible ? t.far.mesh.count : 0,
            farShadow: t.far.mesh.castShadow,
            trisNear: t.near.tris,
            trisFar: t.far.tris,
          };
        },
        mem(t = !1) {
          let n = [],
            r = {
              heroes: u.heroes.roots(),
              crowd: [
                u.render.near.mesh,
                u.render.far.mesh,
                ...u.render.prototypes(),
              ],
              heli: [f.group, ...f.prototypes()],
              roadblock: [p.group],
              fx: [c.group],
            },
            i = e.renderer.gl.properties,
            a = new Set(),
            o = new Set(),
            s = new Map(),
            l = {},
            d = (e) => Math.round(e / 10485.76) / 100;
          for (let e in r) {
            let c = 0,
              u = 0;
            for (let l of r[e])
              l.traverse((r) => {
                let l = r;
                if (!l.geometry) return;
                let d = l.geometry,
                  f = [];
                for (let e in d.attributes) {
                  let t = d.attributes[e];
                  f.push(t.array ?? t.data.array);
                }
                if (
                  (d.index && f.push(d.index.array),
                  l.isInstancedMesh && f.push(l.instanceMatrix.array),
                  t)
                )
                  for (let t in d.attributes) {
                    let r = d.attributes[t];
                    r.array?.byteLength > 1024 &&
                      n.push(
                        `${e}:${l.name}.${t} ${(r.array.byteLength / 1024).toFixed(0)} KB`,
                      );
                  }
                t &&
                  d.index &&
                  d.index.array.byteLength > 1024 &&
                  n.push(
                    `${e}:${l.name}.index ${(d.index.array.byteLength / 1024).toFixed(0)} KB`,
                  );
                for (let e of f)
                  e &&
                    !a.has(e.buffer) &&
                    (a.add(e.buffer), (c += e.byteLength));
                for (let r of Array.isArray(l.material)
                  ? l.material
                  : [l.material]) {
                  if (!r) continue;
                  s.has(r) ||
                    s.set(r, `${e}:${r.name || `(unnamed)`}:${r.type}`);
                  let a = [];
                  for (let e in r) a.push(r[e]);
                  let c = i.get(r).uniforms;
                  if (c) for (let e in c) a.push(c[e]?.value);
                  for (let r of a) {
                    let i = r;
                    if (!i || !i.isTexture || o.has(i.image)) continue;
                    o.add(i.image);
                    let a = i.image,
                      s = a?.data
                        ? a.data.byteLength
                        : (a?.width ?? 0) * (a?.height ?? 0) * 4;
                    ((u += s),
                      t &&
                        s > 4096 &&
                        n.push(
                          `${e}:texture '${i.name}' ${(s / 1024).toFixed(0)} KB`,
                        ));
                  }
                }
              });
            l[e] = { geoMB: d(c), texMB: d(u) };
          }
          let m = new Set(),
            h = [...s].map(([e, t]) => {
              let n = i.get(e).programs,
                r = n ? [...n.values()].map((e) => e.id) : [];
              for (let e of r) m.add(e);
              return `${t} [${r.join(`,`)}]`;
            });
          return {
            parts: l,
            programs: m.size,
            materials: h,
            kept: t ? n : void 0,
          };
        },
        heroes() {
          let e = u.heroes;
          return {
            built: e.built,
            budget: e.budget,
            assigned: u.list.filter((e) => e.active && e.hero).length,
          };
        },
        get fx() {
          return c;
        },
        get roadblocks() {
          return p;
        },
        night(t = 1) {
          ((bt.uNight.value = t),
            e.scene.traverse((e) => {
              let n = e;
              n.isLight &&
                (n.userData.baseI === void 0 &&
                  (n.userData.baseI = n.intensity),
                (n.intensity = n.userData.baseI * (1 - 0.88 * t)));
            }));
          let n = new Me(12109526).lerp(new Me(725024), t);
          return (
            e.scene.background instanceof Me && e.scene.background.copy(n),
            e.scene.fog && e.scene.fog.color.copy(n),
            t
          );
        },
      },
      async init() {
        ((o = cw(e.quality)),
          (ye = new tO(e)),
          (l = new eO(e)),
          (c = new Ew(e)),
          (s = {
            ctx: e,
            fx: c,
            P: n,
            W: r,
            budget: o,
            spawn: l,
            now: 0,
            frame: 0,
            bark: Ce,
            dispatch: we,
            spotted: () => {
              ((h = !0),
                r.evading &&
                  xe() > N &&
                  ((N = xe() + 8), Ce(`spotted`, n.x, n.z)));
            },
            crimeAgainstPolice: (t, a, o, s) => {
              (!i && !r.frozen && n.alive && Ae(t, a, o, s, !0, !0), (oe = !0));
              try {
                e.events.emit(`crime`, {
                  type: t,
                  pos: new L(a, 0, o),
                  severity: s,
                  witnessed: !0,
                });
              } finally {
                oe = !1;
              }
            },
            requestBusted: Pe,
            issueTicket: Fe,
            isPoliceBody: (e) =>
              e.kind === `police` ||
              (e.kind === `vehicle` && m && d.list.some((t) => t.v.body === e)),
            playerPos: ve,
            stake: Le,
          }),
          (u = new kE(s)),
          (d = new GE(s, u)),
          (u.cars = d),
          (f = new LD(s)),
          (p = new ZD(s, d, u)),
          (be = { S: s, officers: u, cars: d, log: F }),
          (c.group.name = `police-fx`),
          (p.group.name = `police-roadblocks`),
          (f.group.name = `police-heli`),
          e.scene.add(
            c.group,
            u.render.near.mesh,
            u.render.far.mesh,
            u.heroes.group,
            p.group,
          ),
          f.addTo(e.scene),
          (m = !0),
          e.loading(`police officers`, 0.2),
          await u.heroes.build(() => e.yieldFrame()),
          e.loading(`police officers`, 1));
        try {
          let t = [
            u.render.near.mesh,
            u.render.far.mesh,
            ...f.meshes,
            ...p.meshes,
          ];
          e.renderer.uploadDraw(t);
          for (let n of t) {
            let t = ZE(n.material);
            t && e.renderer.preupload(t);
          }
        } catch {}
        c.prewarm();
      },
      prewarm() {
        if (!m) return [];
        let e = [...u.render.prototypes(), ...f.prototypes()];
        e.push(...u.heroes.prototypes());
        try {
          let t = Ie();
          t &&
            ((rO ||= new A()),
            (rO.geometry = t.geometry),
            (rO.material = t.material),
            (rO.customDepthMaterial = t.customDepthMaterial),
            (rO.castShadow = !0),
            (rO.name = `police-vehicle-prewarm`),
            (rO.frustumCulled = !1),
            rO.parent || e.push(rO));
        } catch {}
        return e;
      },
      start() {
        let t = e.events;
        (t.on(`crime`, je),
          t.on(`player:died`, () => Ne(`died`)),
          t.on(`player:busted`, () => {
            r.frozen || Ne(`busted`);
          }),
          t.on(`player:respawned`, () => R(`respawned`)),
          t.on(`player:attack`, (e) => {
            e.weapon !== `fists` && e.weapon !== `bat` && (v = xe());
          }),
          t.on(`player:exitVehicle`, () => {
            r.minorOnly &&
              r.level > 0 &&
              ((r.minorOnly = !1), F(`left the vehicle during a traffic stop`));
          }),
          t.on(`quality:changed`, () => {
            ((o = cw(e.quality)),
              (s.budget = o),
              u.render.setPbr(e.quality.materials !== `lambert`),
              u.setQuality(e.quality),
              u.heroes.onQuality(e.quality));
          }));
        let n = Number(e.params.get(`wanted`));
        n > 0 && setTimeout(() => at.setLevel(n), 1e3);
      },
      update(t) {
        if (!m) return;
        let n = performance.now();
        ((s.now = xe()),
          (s.frame = e.time.frame),
          z(t),
          ze(),
          c.begin(),
          (it = performance.now()),
          d.update(t),
          B(0),
          u.update(t),
          B(1),
          f.update(t),
          B(2),
          p.update(t),
          B(3),
          i || (Ue(t), He(t), Je(), Ge(t), B(4), qe(), B(5)),
          s.now > _e && (_e = s.now + 4),
          c.end(t),
          rt());
        let r = performance.now() - n;
        ((fe += (r - fe) * 0.05),
          (r > me || s.now > he) && ((me = r), (he = s.now + 3)),
          $e(),
          Xe());
      },
    };
  return at;
}
