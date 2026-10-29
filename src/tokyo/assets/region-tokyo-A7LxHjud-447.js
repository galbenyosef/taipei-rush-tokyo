// tokyo/assets/region-tokyo-A7LxHjud 447 — math
// Lines 158800-159308 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function A6(e, t) {
  let n = e.ctx,
    i = n.plan,
    a = n.params.has(`autosolve`),
    o = Ge(n),
    s = (e) => Ye(o, t.lines?.[e] ?? lze[e]),
    c = t.lostGap ?? 120,
    l = t.lostSecs ?? 11,
    u = dze(i, t.route, t.corner ?? E6),
    d = u.nodes,
    f = u.path,
    p = t.riders?.length ?? 0,
    m = {
      time: 0,
      lost: !0,
      score: 0,
      maxGap: 0,
      leaderKmh: 0,
      drifts: 0,
      turbos: 0,
      spins: 0,
    };
  if (
    ((e.vars.kartRunL = Math.round(f.length)),
    (e.step = `kart-run-start`),
    await e.hud.fade(1, 0.45),
    await p6(e, f, () => s6(e, f, 14)),
    !e.alive)
  )
    return m;
  let h = fze(e, f);
  f = h.path;
  let g = f.length;
  e.vars.kartLineMoved = h.moved;
  let _ = pze(e, f, d),
    v = 6 + 7 * p,
    y = v + 9;
  (_.update(0, 0, y, !0), _.clearAhead(y + 420));
  let b = e.playerVehicle,
    x = l6(f, v, 0);
  if (b?.kind === `kart` && b.kart) {
    try {
      n.vehicles.teleport?.(b, x.x, x.z, x.heading);
    } catch {}
    h6(e, b);
  } else {
    if (
      ((b = m6(e, x.x, x.z, x.heading, t.playerColor ?? 15216682)),
      !b || !b.kart)
    )
      return (
        _.release(),
        e.hud.fade(0, 0.4),
        e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
        m
      );
    h6(e, b);
  }
  let S = b,
    C = S.kart;
  ((C.racing = !0), (S.scripted = { ...$3 }));
  let w = S.spec.maxSpeed,
    T = Math.min(1, Math.max(0.7, t.pace ?? 0.97)),
    E = (t, r, i, a, o) => {
      let s = l6(f, r, 0),
        c = (de(`kart-run`, i, Math.round(s.x), Math.round(s.z)) % 1e5) / 1e5,
        l = e.vehicle(`kart`, s.x, s.z, s.heading, {
          driver: `ai`,
          locked: !0,
          color: t.color,
          seed: c,
        });
      return !l || !l.kart
        ? null
        : ((l.driver = `ai`),
          (l.kart.costume = t.costume ?? 1 + (i % 4)),
          (l.kart.racing = !0),
          (l.controls.hold = !0),
          {
            v: l,
            pilot: new k6(
              l,
              new Tt(n, l, f, {
                maxSpeed: a,
                latAccel: o,
                decel: 8,
                canReset: !0,
                avoid: !1,
                swerve: 2.4,
              }),
              f,
            ),
            gap: 8,
            blockT: 0,
            passT: 0,
          });
    },
    D = E(t.guide, y, 0, w * T, 26);
  if (!D)
    return (
      _.release(),
      e.hud.fade(0, 0.4),
      e.fail({
        zh: `領頭的卡丁車無法生成`,
        en: `The leader's kart could not be spawned`,
      }),
      m
    );
  let O = [];
  for (let e = 0; e < p; e++) {
    let n = E(t.riders[e], v - 7 * (e + 1), e + 1, w * 0.97, 24);
    n && O.push(n);
  }
  let k = n.params.get(`kartbot`) === `grip`,
    A = a
      ? {
          v: S,
          gap: 9,
          blockT: 0,
          passT: 0,
          pilot: new k6(
            S,
            new Tt(n, S, f, {
              maxSpeed: w * 1.02,
              latAccel: k ? 11 : 26,
              decel: 8,
              canReset: !0,
              avoid: !1,
              swerve: 2.4,
            }),
            f,
            !k,
          ),
        }
      : null,
    j = [D, ...O],
    M = (t.stops ?? []).map(
      (e) => (
        f.project(e.x, e.z, n6),
        { ...e, s: Math.min(g - 1, n6.s), done: !1, final: n6.s > g - 60 }
      ),
    ),
    ee = new W3(n, `run`),
    te = M.length ? M[M.length - 1] : null,
    ne = new J3(e, {
      path: f,
      gates: Math.max(3, Math.round(g / 150)),
      finishS: te?.final ? te.s : g - 4,
      gateRadius: 5.5,
    }),
    re = !1,
    ie = () => {
      if (!re) {
        ((re = !0), ne.dispose(), ee.remove(), _.release());
        for (let e of j) e.v.kart && (e.v.kart.racing = !1);
        ((C.racing = !1), (C.draft = 0), (S.scripted &&= null));
      }
    };
  (e.onCleanup(ie), e.hud.fade(0, 0.6));
  let ae = g6(e, t.guide.name);
  (e.queueLine(ae, s(`go`)),
    e.objective({
      zh: r.on
        ? r.t(
            `跟上${t.guide.name.zh}的卡丁車：別被甩掉！`,
            `${r.jz(t.guide.name.zh)}のカートを追え：振り切られるな！`,
          )
        : `跟上${t.guide.name.zh}的卡丁車：別被甩掉！`,
      en: `Keep up with ${t.guide.name.en}'s kart — don't lose him!`,
    }),
    (e.step = `kart-run-countdown`));
  let oe = { kind: `kart`, x: D.v.body.x, z: D.v.body.z },
    se = 0,
    ce = 0,
    le = -1;
  if (
    (await e.until((t) => {
      ((se += t), (e.waitFor = oe), ee.tick(t), _.update(t, 0, y));
      let r = a ? +(se > 2.55) : n.input.axis(`throttle`);
      r > 0.5 && le < 0 ? (le = se) : r <= 0.5 && (le = -1);
      let i = 3 - Math.floor(se);
      return (
        i !== ce &&
          i >= 1 &&
          ((ce = i),
          ee.count(String(i)),
          e.sfx(`ui_confirm`, { ui: !0, volume: 0.8 })),
        ne.update(t, void 0, !1),
        se >= 3 || !e.alive
      );
    }),
    !e.alive)
  )
    return m;
  (ee.count(n.t({ zh: `出發！`, en: `GO!` }), !0),
    e.sfx(`checkpoint`, { ui: !0, volume: 0.9 }),
    le >= 2.4 &&
      (C.boost(0.9, 0.85),
      ee.flash(n.t({ zh: `起步加速！`, en: `Rocket start!` }))),
    D.v.kart?.boost(0.6, 0.6));
  for (let e of j) e.v.controls.hold = !1;
  (A && (S.controls.hold = !1),
    (S.scripted = A ? S.controls : null),
    (e.step = `kart-run`));
  let ue = [],
    fe = (t) => {
      (ue.push(`${se.toFixed(1)} ${t}`),
        ue.length > 40 && ue.shift(),
        (e.vars.kartLog = ue));
    };
  se = 0;
  let pe = 0.9,
    me = 0,
    he = 0,
    ge = 0,
    _e = 0,
    ve = 6,
    ye = 0,
    be = 0,
    xe = 0,
    Se = 0,
    Ce = 0,
    we = -1,
    Te = 0,
    Ee = !1,
    De = -1,
    Oe = 8,
    ke = !1,
    Ae = 0,
    je = 0,
    Me = !1,
    Ne = !1,
    Pe = 0,
    Fe = !1,
    Ie = { s: v, seg: 0, lat: 0 },
    Le = D.pilot.s,
    Re = (e) => {
      for (let t = 0; t <= 600; t += 200) {
        f.pointAt(Math.min(g, e + t), e6);
        try {
          Promise.resolve(n.districts?.ensureResident?.(e6.x, e6.z)).catch(
            () => {},
          );
        } catch {}
      }
    },
    ze = (e, t) => {
      ((e.pilot.drv.opts.avoid = t), t || (e.pilot.drv.dodge = 0));
    },
    Be = (t, n, r, i = !1) => {
      let a = Math.abs(n.v.speed),
        o = n.passT > 0 && !i ? 1 / 0 : S6(e, n.v, i ? 45 : 8 + a * 1.4, !0);
      i &&
        o < 1 / 0 &&
        C6 === `vehicle` &&
        !n.pilot.drifting &&
        !n.pilot.exiting &&
        (n.passT <= 0 && ze(n, !0),
        (n.passT = Math.max(n.passT, 1.2)),
        (o = 1 / 0));
      let s = o === 1 / 0 ? -1 : n.pilot.s + Math.max(0, o - 2.2);
      return (
        (n.blockT = s >= 0 && o < 4 && a < 0.6 && !r ? n.blockT + t : 0),
        n.blockT > 2.5 &&
          ((n.blockT = 0),
          (n.passT = 3),
          ze(n, !0),
          fe(
            `pass ${n === D ? `leader` : n.v === S ? `me` : `rider`} at ${Math.round(n.pilot.s)}`,
          )),
        n.passT > 0 && (n.passT -= t) <= 0 && ze(n, !1),
        s
      );
    },
    Ve = (e, t, n, r, i) => {
      let a = n - t.pilot.s,
        o = Math.max(0, r) + (a - t.gap) * 0.8,
        s = Math.max(
          0,
          Math.min(1.15, o / Math.max(1, t.pilot.drv.opts.maxSpeed)),
        ),
        c = r < 4 && a < 40 ? n - t.gap + 1.5 : -1,
        l = Be(e, t, a <= t.gap + 3);
      t.pilot.update(e, s, T6(w6(w6(i, c), l), t.pilot.s));
    },
    He = Array.from({ length: O.length + 2 }, () => ({ s: 0, v: 0 })),
    N = 0,
    Ue = (e, t) => {
      ((He[N].s = e), (He[N++].v = t));
    };
  (e.every((t) => {
    if (re || Ne) return;
    ((se += t),
      ee.tick(t),
      pe > 0 && (pe -= t) <= 0 && ee.count(``),
      f.project(S.body.x, S.body.z, n6, Ie.seg, 8),
      n6.dist > 25 && f.project(S.body.x, S.body.z, n6),
      (Ie.s = n6.s),
      (Ie.seg = n6.seg),
      (Ie.lat = n6.dist),
      ne.update(t, Ie.s, pe <= 0));
    let i = D.pilot.s;
    ((Se += Math.max(0, Math.min(5, i - Le))), (Le = i));
    let a = i - Ie.s,
      o = Math.abs(S.speed),
      u = e.playerVehicle === S,
      d = Ie.s;
    for (let e of O) d = Math.min(d, e.pilot.s);
    (_.update(t, d, i), (Oe -= t) <= 0 && ((Oe = 10), Re(i)));
    let p = -1,
      m = M[Ce];
    (m &&
      !m.done &&
      (m.s - i < 140 && (p = m.s),
      we < 0 &&
        Math.abs(m.s - i) < 4 &&
        Math.abs(D.v.speed) < 0.6 &&
        ((Te += t),
        ((a < 30 && o < 2.5) || Te > 25) &&
          ((we = 0),
          (Ee = !!m.onStop),
          e.queueLine(ae, s(`stop`)),
          fe(`stop at ${Math.round(m.s)} gap ${a.toFixed(1)}`),
          m.onStop &&
            e.branch(async () => {
              (await m.onStop(), (Ee = !1));
            }))),
      we >= 0 &&
        ((we += t),
        we >= m.hold &&
          !Ee &&
          ((m.done = !0), Ce++, (we = -1), (Te = 0), m.final && (Ne = !0)))),
      i > g - 8 && (p = g - 2));
    let h =
        a < -4 ? 1.04 : a <= 25 ? 1 : Math.max(0.8, 1 - (0.2 * (a - 25)) / 85),
      v = Be(t, D, p >= 0 && p - i < 4, !0);
    (D.pilot.update(t, h, T6(w6(p, v), i)),
      D.pilot.drifting && !ke && ((ke = !0), e.queueLine(ae, s(`drift`))),
      (N = 0),
      Ue(i, Math.abs(D.v.speed)),
      u && Ie.lat < 12 && Ue(Ie.s, o));
    for (let e = 0; e < O.length; e++) {
      let n = O[e],
        r = He[0];
      for (let e = 1; e < N; e++)
        He[e].s > n.pilot.s + 2 && He[e].s < r.s && (r = He[e]);
      (Ve(t, n, r.s, r.v, i > g - 8 ? g - 2 - 8 * (e + 2) : -1),
        Ue(n.pilot.s, Math.abs(n.v.speed)));
    }
    if (A) {
      if (
        (Ve(t, A, i, Math.abs(D.v.speed), i > g - 8 ? g - 11 : -1),
        (S.scripted = S.controls),
        o < 1.5 && i < g - 30)
      ) {
        if ((Pe += t) > 2 && Pe - t <= 2) {
          let e = n.dynamics.query(
              S.body.x + Math.sin(S.heading) * 5,
              S.body.z - Math.cos(S.heading) * 5,
              6,
              x6,
            ),
            t = [];
          for (let n = 0; n < e; n++)
            x6[n] !== S.body &&
              t.push(
                `${x6[n].kind}@${Math.round(x6[n].x)},${Math.round(x6[n].z)}`,
              );
          fe(
            `me held at ${Math.round(Ie.s)} (${Math.round(S.body.x)},${Math.round(S.body.z)}) lat ${Ie.lat.toFixed(1)} obstacle ${A.pilot.drv.obstacle.toFixed(1)} gap ${a.toFixed(0)}: ${t.join(` `)}`,
          );
        }
      } else Pe = 0;
    }
    je -= t;
    let y = !1;
    if (o > 9 && C.spinT <= 0) {
      let e = Math.sin(S.heading),
        t = -Math.cos(S.heading);
      for (let n of j) {
        let r = n.v.body.x - S.body.x,
          i = n.v.body.z - S.body.z,
          a = r * e + i * t;
        if (a >= 2.5 && a <= 14 && Math.abs(r * -t + i * e) < 1.5) {
          y = !0;
          break;
        }
      }
    }
    y
      ? ((Ae += t),
        (C.draft = Math.min(1, Ae / 0.5)),
        Ae > 1.8 &&
          je <= 0 &&
          (C.boost(0.8, 0.55),
          (je = 2.5),
          (Ae = 0),
          ee.flash(n.t({ zh: `尾流加速！`, en: `Slingshot!` }))))
      : ((Ae = Math.max(0, Ae - t * 2)),
        (C.draft = Math.max(0, C.draft - t * 2.5)));
    for (let e of j)
      if (e.v.health < 450 && !(e.v === S && e.v.destroyed))
        try {
          n.vehicles.repair?.(e.v);
        } catch {}
    let b = we >= 0 || De >= 0,
      x = a > c || (Ie.lat > 40 && a > 0) || !u;
    (b || ((ye += t), a <= 40 && u && (be += t), u && (xe = Math.max(xe, a))),
      u
        ? (ge = 0)
        : ((ge += t),
          e.hud.prompt({ zh: `回到卡丁車上！`, en: `Get back in your kart!` })),
      x && !b && Te <= 0 ? (he += t) : (he = Math.max(0, he - t * 2)));
    let w = a > c * 0.6 || he > 0;
    if (((_e -= t), (ve -= t), w && !b && Te <= 0 && _e <= 0)) {
      _e = 4;
      let t = Math.max(0, Math.ceil(l - he));
      (ee.flash(
        n.t(
          he > 0
            ? {
                zh: r.on
                  ? r.t(`快跟丟了！${t} 秒`, `見失いそう！${t} 秒`)
                  : `快跟丟了！${t} 秒`,
                en: `Losing him! ${t} s`,
              }
            : { zh: `被甩開了——追上去！`, en: `He's pulling away — catch up!` },
        ),
        2,
      ),
        ve <= 0 && ((ve = 12), e.queueLine(ae, s(`warn`))));
    }
    (!Me &&
      !Ne &&
      (S.destroyed || S.health <= 0) &&
      ((Me = Fe = !0), (Ne = !0), fe(`wrecked`)),
      (he > l || ge > 20) &&
        !Me &&
        ((Me = !0),
        (Ne = !0),
        fe(`lost gap ${a.toFixed(0)} lat ${Ie.lat.toFixed(0)} inKart ${u}`),
        e.queueLine(ae, s(`lost`))),
      !Ne &&
        De < 0 &&
        Ce >= M.length &&
        i > g - 9 &&
        Math.abs(D.v.speed) < 0.8 &&
        ((De = 0), e.queueLine(ae, s(`end`))),
      De >= 0 && ((De += t), ((a < 30 && o < 2) || De > 15) && (Ne = !0)),
      (me -= t) <= 0 &&
        ((me = 0.1),
        ee.run({
          gap: a,
          warn: w,
          time: se,
          left: g - Ie.s,
          charge: C.charge,
          level: C.level,
          boost: C.boostT > 0,
          draft: C.draft,
        })),
      (e.vars.kartRun = {
        t: Math.round(se * 10) / 10,
        gap: Math.round(a),
        s: Math.round(Ie.s),
        L: Math.round(g),
        gS: Math.round(i),
        gKmh: Math.round(Math.abs(D.v.speed) * 3.6),
        gDrift: D.pilot.drifting,
        gDrifts: D.pilot.drifts,
        gTurbos: D.v.kart?.turbos ?? 0,
        gLat: Math.round(D.pilot.drv.lateral * 10) / 10,
        gObstacle: v < 0 ? -1 : Math.round(v - i),
        lostT: Math.round(he * 10) / 10,
        spins: C.spins,
        gSpins: D.v.kart?.spins ?? 0,
        lastSpin: C.lastSpin ?? ``,
        gBeta:
          Math.round(
            D6(D.v.heading - Math.atan2(D.v.body.vx, -D.v.body.vz)) * 100,
          ) / 100,
        gSlide: !!D.v.drifting,
      }),
      f.pointAt(Math.min(g, Ie.s + 20), e6),
      (oe.x = e6.x),
      (oe.z = e6.z),
      we < 0 && (e.waitFor = oe));
  }),
    await e.until(() => Ne || re || !e.alive),
    (e.waitFor = null));
  let We = {
    time: Math.round(se * 10) / 10,
    lost: Me,
    wrecked: Fe || void 0,
    score: Math.round((100 * be) / Math.max(1, ye)),
    maxGap: Math.round(xe),
    leaderKmh: Math.round((Se / Math.max(1, se)) * 3.6),
    drifts: D.pilot.drifts,
    turbos: C.turbos,
    spins: C.spins,
  };
  return (
    (We.log = ue.slice()),
    (e.vars.kartRunResult = { ...We, log: void 0 }),
    ie(),
    A && (S.controls.hold = !0),
    We
  );
}
