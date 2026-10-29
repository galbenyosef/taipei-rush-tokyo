// tokyo/assets/region-tokyo-55J_WESF 446 — math
// Lines 158059-158552 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function w6(e, t) {
  let n = e.ctx,
    i = n.plan,
    a = n.params.has(`autosolve`),
    o = Ge(n),
    s = (e) => ze(o, t.lines?.[e] ?? zRe[e]),
    c = t.lostGap ?? 120,
    l = t.lostSecs ?? 11,
    u = VRe(i, t.route, t.corner ?? b6),
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
    await r6(e, f, 14),
    !e.alive)
  )
    return m;
  let h = HRe(e, f);
  f = h.path;
  let g = f.length;
  e.vars.kartLineMoved = h.moved;
  let _ = URe(e, f, d),
    v = 6 + 7 * p,
    y = v + 9;
  (_.update(0, 0, y, !0), _.clearAhead(y + 420));
  let b = e.playerVehicle,
    x = a6(f, v, 0);
  if (b?.kind === `kart` && b.kart) {
    try {
      n.vehicles.teleport?.(b, x.x, x.z, x.heading);
    } catch {}
    u6(e, b);
  } else {
    if (
      ((b = l6(e, x.x, x.z, x.heading, t.playerColor ?? 15216682)),
      !b || !b.kart)
    )
      return (
        _.release(),
        e.hud.fade(0, 0.4),
        e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
        m
      );
    u6(e, b);
  }
  let S = b,
    C = S.kart;
  ((C.racing = !0), (S.scripted = { ...Y3 }));
  let w = S.spec.maxSpeed,
    T = Math.min(1, Math.max(0.7, t.pace ?? 0.97)),
    E = (t, r, i, a, o) => {
      let s = a6(f, r, 0),
        c = (ge(`kart-run`, i, Math.round(s.x), Math.round(s.z)) % 1e5) / 1e5,
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
            pilot: new C6(
              l,
              new wt(n, l, f, {
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
          pilot: new C6(
            S,
            new wt(n, S, f, {
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
    ee = (t.stops ?? []).map(
      (e) => (
        f.project(e.x, e.z, Q3),
        { ...e, s: Math.min(g - 1, Q3.s), done: !1, final: Q3.s > g - 60 }
      ),
    ),
    M = new U3(n, `run`),
    te = !1,
    ne = () => {
      if (!te) {
        ((te = !0), M.remove(), _.release());
        for (let e of j) e.v.kart && (e.v.kart.racing = !1);
        ((C.racing = !1), (C.draft = 0), (S.scripted &&= null));
      }
    };
  (e.onCleanup(ne), e.hud.fade(0, 0.6));
  let re = d6(e, t.guide.name);
  (e.queueLine(re, s(`go`)),
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
  let ie = { kind: `kart`, x: D.v.body.x, z: D.v.body.z },
    ae = 0,
    oe = 0,
    se = -1;
  if (
    (await e.until((t) => {
      ((ae += t), (e.waitFor = ie), M.tick(t), _.update(t, 0, y));
      let r = a ? +(ae > 2.55) : n.input.axis(`throttle`);
      r > 0.5 && se < 0 ? (se = ae) : r <= 0.5 && (se = -1);
      let i = 3 - Math.floor(ae);
      return (
        i !== oe &&
          i >= 1 &&
          ((oe = i),
          M.count(String(i)),
          e.sfx(`ui_confirm`, { ui: !0, volume: 0.8 })),
        ae >= 3 || !e.alive
      );
    }),
    !e.alive)
  )
    return m;
  (M.count(n.t({ zh: `出發！`, en: `GO!` }), !0),
    e.sfx(`checkpoint`, { ui: !0, volume: 0.9 }),
    se >= 2.4 &&
      (C.boost(0.9, 0.85),
      M.flash(n.t({ zh: `起步加速！`, en: `Rocket start!` }))),
    D.v.kart?.boost(0.6, 0.6));
  for (let e of j) e.v.controls.hold = !1;
  (A && (S.controls.hold = !1),
    (S.scripted = A ? S.controls : null),
    (e.step = `kart-run`));
  let ce = [],
    le = (t) => {
      (ce.push(`${ae.toFixed(1)} ${t}`),
        ce.length > 40 && ce.shift(),
        (e.vars.kartLog = ce));
    };
  ae = 0;
  let ue = 0.9,
    de = 0,
    fe = 0,
    pe = 0,
    me = 0,
    he = 6,
    _e = 0,
    ve = 0,
    ye = 0,
    be = 0,
    xe = 0,
    Se = -1,
    Ce = 0,
    we = !1,
    Te = -1,
    Ee = 8,
    De = !1,
    Oe = 0,
    ke = 0,
    Ae = !1,
    je = !1,
    Me = 0,
    Ne = { s: v, seg: 0, lat: 0 },
    Pe = D.pilot.s,
    Fe = (e) => {
      for (let t = 0; t <= 600; t += 200) {
        f.pointAt(Math.min(g, e + t), X3);
        try {
          Promise.resolve(n.districts?.ensureResident?.(X3.x, X3.z)).catch(
            () => {},
          );
        } catch {}
      }
    },
    Ie = (e, t) => {
      ((e.pilot.drv.opts.avoid = t), t || (e.pilot.drv.dodge = 0));
    },
    Le = (t, n, r, i = !1) => {
      let a = Math.abs(n.v.speed),
        o = n.passT > 0 && !i ? 1 / 0 : g6(e, n.v, i ? 45 : 8 + a * 1.4, !0);
      i &&
        o < 1 / 0 &&
        _6 === `vehicle` &&
        !n.pilot.drifting &&
        !n.pilot.exiting &&
        (n.passT <= 0 && Ie(n, !0),
        (n.passT = Math.max(n.passT, 1.2)),
        (o = 1 / 0));
      let s = o === 1 / 0 ? -1 : n.pilot.s + Math.max(0, o - 2.2);
      return (
        (n.blockT = s >= 0 && o < 4 && a < 0.6 && !r ? n.blockT + t : 0),
        n.blockT > 2.5 &&
          ((n.blockT = 0),
          (n.passT = 3),
          Ie(n, !0),
          le(
            `pass ${n === D ? `leader` : n.v === S ? `me` : `rider`} at ${Math.round(n.pilot.s)}`,
          )),
        n.passT > 0 && (n.passT -= t) <= 0 && Ie(n, !1),
        s
      );
    },
    Re = (e, t, n, r, i) => {
      let a = n - t.pilot.s,
        o = Math.max(0, r) + (a - t.gap) * 0.8,
        s = Math.max(
          0,
          Math.min(1.15, o / Math.max(1, t.pilot.drv.opts.maxSpeed)),
        ),
        c = r < 4 && a < 40 ? n - t.gap + 1.5 : -1,
        l = Le(e, t, a <= t.gap + 3);
      t.pilot.update(e, s, y6(v6(v6(i, c), l), t.pilot.s));
    },
    N = Array.from({ length: O.length + 2 }, () => ({ s: 0, v: 0 })),
    Be = 0,
    Ve = (e, t) => {
      ((N[Be].s = e), (N[Be++].v = t));
    };
  (e.every((t) => {
    if (te || je) return;
    ((ae += t),
      M.tick(t),
      ue > 0 && (ue -= t) <= 0 && M.count(``),
      f.project(S.body.x, S.body.z, Q3, Ne.seg, 8),
      Q3.dist > 25 && f.project(S.body.x, S.body.z, Q3),
      (Ne.s = Q3.s),
      (Ne.seg = Q3.seg),
      (Ne.lat = Q3.dist));
    let i = D.pilot.s;
    ((be += Math.max(0, Math.min(5, i - Pe))), (Pe = i));
    let a = i - Ne.s,
      o = Math.abs(S.speed),
      u = e.playerVehicle === S,
      d = Ne.s;
    for (let e of O) d = Math.min(d, e.pilot.s);
    (_.update(t, d, i), (Ee -= t) <= 0 && ((Ee = 10), Fe(i)));
    let p = -1,
      m = ee[xe];
    (m &&
      !m.done &&
      (m.s - i < 140 && (p = m.s),
      Se < 0 &&
        Math.abs(m.s - i) < 4 &&
        Math.abs(D.v.speed) < 0.6 &&
        ((Ce += t),
        ((a < 30 && o < 2.5) || Ce > 25) &&
          ((Se = 0),
          (we = !!m.onStop),
          e.queueLine(re, s(`stop`)),
          le(`stop at ${Math.round(m.s)} gap ${a.toFixed(1)}`),
          m.onStop &&
            e.branch(async () => {
              (await m.onStop(), (we = !1));
            }))),
      Se >= 0 &&
        ((Se += t),
        Se >= m.hold &&
          !we &&
          ((m.done = !0), xe++, (Se = -1), (Ce = 0), m.final && (je = !0)))),
      i > g - 8 && (p = g - 2));
    let h =
        a < -4 ? 1.04 : a <= 25 ? 1 : Math.max(0.8, 1 - (0.2 * (a - 25)) / 85),
      v = Le(t, D, p >= 0 && p - i < 4, !0);
    (D.pilot.update(t, h, y6(v6(p, v), i)),
      D.pilot.drifting && !De && ((De = !0), e.queueLine(re, s(`drift`))),
      (Be = 0),
      Ve(i, Math.abs(D.v.speed)),
      u && Ne.lat < 12 && Ve(Ne.s, o));
    for (let e = 0; e < O.length; e++) {
      let n = O[e],
        r = N[0];
      for (let e = 1; e < Be; e++)
        N[e].s > n.pilot.s + 2 && N[e].s < r.s && (r = N[e]);
      (Re(t, n, r.s, r.v, i > g - 8 ? g - 2 - 8 * (e + 2) : -1),
        Ve(n.pilot.s, Math.abs(n.v.speed)));
    }
    if (A) {
      if (
        (Re(t, A, i, Math.abs(D.v.speed), i > g - 8 ? g - 11 : -1),
        (S.scripted = S.controls),
        o < 1.5 && i < g - 30)
      ) {
        if ((Me += t) > 2 && Me - t <= 2) {
          let e = n.dynamics.query(
              S.body.x + Math.sin(S.heading) * 5,
              S.body.z - Math.cos(S.heading) * 5,
              6,
              h6,
            ),
            t = [];
          for (let n = 0; n < e; n++)
            h6[n] !== S.body &&
              t.push(
                `${h6[n].kind}@${Math.round(h6[n].x)},${Math.round(h6[n].z)}`,
              );
          le(
            `me held at ${Math.round(Ne.s)} (${Math.round(S.body.x)},${Math.round(S.body.z)}) lat ${Ne.lat.toFixed(1)} obstacle ${A.pilot.drv.obstacle.toFixed(1)} gap ${a.toFixed(0)}: ${t.join(` `)}`,
          );
        }
      } else Me = 0;
    }
    ke -= t;
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
      ? ((Oe += t),
        (C.draft = Math.min(1, Oe / 0.5)),
        Oe > 1.8 &&
          ke <= 0 &&
          (C.boost(0.8, 0.55),
          (ke = 2.5),
          (Oe = 0),
          M.flash(n.t({ zh: `尾流加速！`, en: `Slingshot!` }))))
      : ((Oe = Math.max(0, Oe - t * 2)),
        (C.draft = Math.max(0, C.draft - t * 2.5)));
    for (let e of j)
      if (e.v.health < 450)
        try {
          n.vehicles.repair?.(e.v);
        } catch {}
    let b = Se >= 0 || Te >= 0,
      x = a > c || (Ne.lat > 40 && a > 0) || !u;
    (b || ((_e += t), a <= 40 && u && (ve += t), u && (ye = Math.max(ye, a))),
      u
        ? (pe = 0)
        : ((pe += t),
          e.hud.prompt({ zh: `回到卡丁車上！`, en: `Get back in your kart!` })),
      x && !b && Ce <= 0 ? (fe += t) : (fe = Math.max(0, fe - t * 2)));
    let w = a > c * 0.6 || fe > 0;
    if (((me -= t), (he -= t), w && !b && Ce <= 0 && me <= 0)) {
      me = 4;
      let t = Math.max(0, Math.ceil(l - fe));
      (M.flash(
        n.t(
          fe > 0
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
        he <= 0 && ((he = 12), e.queueLine(re, s(`warn`))));
    }
    ((fe > l || pe > 20) &&
      !Ae &&
      ((Ae = !0),
      (je = !0),
      le(`lost gap ${a.toFixed(0)} lat ${Ne.lat.toFixed(0)} inKart ${u}`),
      e.queueLine(re, s(`lost`))),
      !je &&
        Te < 0 &&
        xe >= ee.length &&
        i > g - 9 &&
        Math.abs(D.v.speed) < 0.8 &&
        ((Te = 0), e.queueLine(re, s(`end`))),
      Te >= 0 && ((Te += t), ((a < 30 && o < 2) || Te > 15) && (je = !0)),
      (de -= t) <= 0 &&
        ((de = 0.1),
        M.run({
          gap: a,
          warn: w,
          time: ae,
          left: g - Ne.s,
          charge: C.charge,
          level: C.level,
          boost: C.boostT > 0,
          draft: C.draft,
        })),
      (e.vars.kartRun = {
        t: Math.round(ae * 10) / 10,
        gap: Math.round(a),
        s: Math.round(Ne.s),
        L: Math.round(g),
        gS: Math.round(i),
        gKmh: Math.round(Math.abs(D.v.speed) * 3.6),
        gDrift: D.pilot.drifting,
        gDrifts: D.pilot.drifts,
        gTurbos: D.v.kart?.turbos ?? 0,
        gLat: Math.round(D.pilot.drv.lateral * 10) / 10,
        gObstacle: v < 0 ? -1 : Math.round(v - i),
        lostT: Math.round(fe * 10) / 10,
        spins: C.spins,
        gSpins: D.v.kart?.spins ?? 0,
        lastSpin: C.lastSpin ?? ``,
        gBeta:
          Math.round(
            x6(D.v.heading - Math.atan2(D.v.body.vx, -D.v.body.vz)) * 100,
          ) / 100,
        gSlide: !!D.v.drifting,
      }),
      f.pointAt(Math.min(g, Ne.s + 20), X3),
      (ie.x = X3.x),
      (ie.z = X3.z),
      Se < 0 && (e.waitFor = ie));
  }),
    await e.until(() => je || te || !e.alive),
    (e.waitFor = null));
  let He = {
    time: Math.round(ae * 10) / 10,
    lost: Ae,
    score: Math.round((100 * ve) / Math.max(1, _e)),
    maxGap: Math.round(ye),
    leaderKmh: Math.round((be / Math.max(1, ae)) * 3.6),
    drifts: D.pilot.drifts,
    turbos: C.turbos,
    spins: C.spins,
  };
  return (
    (He.log = ce.slice()),
    (e.vars.kartRunResult = { ...He, log: void 0 }),
    ne(),
    A && (S.controls.hold = !0),
    He
  );
}
