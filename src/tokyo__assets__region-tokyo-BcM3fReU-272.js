// tokyo__assets__region-tokyo-BcM3fReU 272 — math
// Lines 105661-106154 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function g3(e, t) {
  let n = e.ctx,
    i = n.plan,
    a = n.params.has(`autosolve`),
    o = Ie(n),
    s = (e) => Ae(o, t.lines?.[e] ?? s3[e]),
    c = t.lostGap ?? 120,
    l = t.lostSecs ?? 11,
    u = d3(i, t.route, t.corner ?? l3),
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
    await z4(e, f, 14),
    !e.alive)
  )
    return m;
  let h = f3(e, f);
  f = h.path;
  let g = f.length;
  e.vars.kartLineMoved = h.moved;
  let _ = p3(e, f, d),
    v = 6 + 7 * p,
    y = v + 9;
  (_.update(0, 0, y, !0), _.clearAhead(y + 420));
  let b = e.playerVehicle,
    x = V4(f, v, 0);
  if (b?.kind === `kart` && b.kart) {
    try {
      n.vehicles.teleport?.(b, x.x, x.z, x.heading);
    } catch {}
    J4(e, b);
  } else {
    if (
      ((b = K4(e, x.x, x.z, x.heading, t.playerColor ?? 15216682)),
      !b || !b.kart)
    )
      return (
        _.release(),
        e.hud.fade(0, 0.4),
        e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
        m
      );
    J4(e, b);
  }
  let S = b,
    C = S.kart;
  ((C.racing = !0), (S.scripted = { ...A4 }));
  let w = S.spec.maxSpeed,
    T = Math.min(1, Math.max(0.7, t.pace ?? 0.97)),
    E = (t, r, i, a, o) => {
      let s = V4(f, r, 0),
        c = (P(`kart-run`, i, Math.round(s.x), Math.round(s.z)) % 1e5) / 1e5,
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
            pilot: new h3(
              l,
              new Nt(n, l, f, {
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
          pilot: new h3(
            S,
            new Nt(n, S, f, {
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
        f.project(e.x, e.z, N4),
        { ...e, s: Math.min(g - 1, N4.s), done: !1, final: N4.s > g - 60 }
      ),
    ),
    ee = new x4(n, `run`),
    te = !1,
    ne = () => {
      if (!te) {
        ((te = !0), ee.remove(), _.release());
        for (let e of j) e.v.kart && (e.v.kart.racing = !1);
        ((C.racing = !1), (C.draft = 0), (S.scripted &&= null));
      }
    };
  (e.onCleanup(ne), e.hud.fade(0, 0.6));
  let N = Y4(e, t.guide.name);
  (e.queueLine(N, s(`go`)),
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
  let re = { kind: `kart`, x: D.v.body.x, z: D.v.body.z },
    ie = 0,
    ae = 0,
    oe = -1;
  if (
    (await e.until((t) => {
      ((ie += t), (e.waitFor = re), ee.tick(t), _.update(t, 0, y));
      let r = a ? +(ie > 2.55) : n.input.axis(`throttle`);
      r > 0.5 && oe < 0 ? (oe = ie) : r <= 0.5 && (oe = -1);
      let i = 3 - Math.floor(ie);
      return (
        i !== ae &&
          i >= 1 &&
          ((ae = i),
          ee.count(String(i)),
          e.sfx(`ui_confirm`, { ui: !0, volume: 0.8 })),
        ie >= 3 || !e.alive
      );
    }),
    !e.alive)
  )
    return m;
  (ee.count(n.t({ zh: `出發！`, en: `GO!` }), !0),
    e.sfx(`checkpoint`, { ui: !0, volume: 0.9 }),
    oe >= 2.4 &&
      (C.boost(0.9, 0.85),
      ee.flash(n.t({ zh: `起步加速！`, en: `Rocket start!` }))),
    D.v.kart?.boost(0.6, 0.6));
  for (let e of j) e.v.controls.hold = !1;
  (A && (S.controls.hold = !1),
    (S.scripted = A ? S.controls : null),
    (e.step = `kart-run`));
  let se = [],
    ce = (t) => {
      (se.push(`${ie.toFixed(1)} ${t}`),
        se.length > 40 && se.shift(),
        (e.vars.kartLog = se));
    };
  ie = 0;
  let le = 0.9,
    ue = 0,
    de = 0,
    fe = 0,
    pe = 0,
    me = 6,
    he = 0,
    ge = 0,
    _e = 0,
    ve = 0,
    ye = 0,
    be = -1,
    xe = 0,
    Se = !1,
    Ce = -1,
    we = 8,
    Te = !1,
    Ee = 0,
    De = 0,
    Oe = !1,
    ke = !1,
    F = 0,
    je = { s: v, seg: 0, lat: 0 },
    Me = D.pilot.s,
    Ne = (e) => {
      for (let t = 0; t <= 600; t += 200) {
        f.pointAt(Math.min(g, e + t), j4);
        try {
          Promise.resolve(n.districts?.ensureResident?.(j4.x, j4.z)).catch(
            () => {},
          );
        } catch {}
      }
    },
    Pe = (e, t) => {
      ((e.pilot.drv.opts.avoid = t), t || (e.pilot.drv.dodge = 0));
    },
    Fe = (t, n, r, i = !1) => {
      let a = Math.abs(n.v.speed),
        o = n.passT > 0 && !i ? 1 / 0 : n3(e, n.v, i ? 45 : 8 + a * 1.4, !0);
      i &&
        o < 1 / 0 &&
        r3 === `vehicle` &&
        !n.pilot.drifting &&
        !n.pilot.exiting &&
        (n.passT <= 0 && Pe(n, !0),
        (n.passT = Math.max(n.passT, 1.2)),
        (o = 1 / 0));
      let s = o === 1 / 0 ? -1 : n.pilot.s + Math.max(0, o - 2.2);
      return (
        (n.blockT = s >= 0 && o < 4 && a < 0.6 && !r ? n.blockT + t : 0),
        n.blockT > 2.5 &&
          ((n.blockT = 0),
          (n.passT = 3),
          Pe(n, !0),
          ce(
            `pass ${n === D ? `leader` : n.v === S ? `me` : `rider`} at ${Math.round(n.pilot.s)}`,
          )),
        n.passT > 0 && (n.passT -= t) <= 0 && Pe(n, !1),
        s
      );
    },
    Le = (e, t, n, r, i) => {
      let a = n - t.pilot.s,
        o = Math.max(0, r) + (a - t.gap) * 0.8,
        s = Math.max(
          0,
          Math.min(1.15, o / Math.max(1, t.pilot.drv.opts.maxSpeed)),
        ),
        c = r < 4 && a < 40 ? n - t.gap + 1.5 : -1,
        l = Fe(e, t, a <= t.gap + 3);
      t.pilot.update(e, s, a3(i3(i3(i, c), l), t.pilot.s));
    },
    Re = Array.from({ length: O.length + 2 }, () => ({ s: 0, v: 0 })),
    ze = 0,
    Be = (e, t) => {
      ((Re[ze].s = e), (Re[ze++].v = t));
    };
  (e.every((t) => {
    if (te || ke) return;
    ((ie += t),
      ee.tick(t),
      le > 0 && (le -= t) <= 0 && ee.count(``),
      f.project(S.body.x, S.body.z, N4, je.seg, 8),
      N4.dist > 25 && f.project(S.body.x, S.body.z, N4),
      (je.s = N4.s),
      (je.seg = N4.seg),
      (je.lat = N4.dist));
    let i = D.pilot.s;
    ((ve += Math.max(0, Math.min(5, i - Me))), (Me = i));
    let a = i - je.s,
      o = Math.abs(S.speed),
      u = e.playerVehicle === S,
      d = je.s;
    for (let e of O) d = Math.min(d, e.pilot.s);
    (_.update(t, d, i), (we -= t) <= 0 && ((we = 10), Ne(i)));
    let p = -1,
      m = M[ye];
    (m &&
      !m.done &&
      (m.s - i < 140 && (p = m.s),
      be < 0 &&
        Math.abs(m.s - i) < 4 &&
        Math.abs(D.v.speed) < 0.6 &&
        ((xe += t),
        ((a < 30 && o < 2.5) || xe > 25) &&
          ((be = 0),
          (Se = !!m.onStop),
          e.queueLine(N, s(`stop`)),
          ce(`stop at ${Math.round(m.s)} gap ${a.toFixed(1)}`),
          m.onStop &&
            e.branch(async () => {
              (await m.onStop(), (Se = !1));
            }))),
      be >= 0 &&
        ((be += t),
        be >= m.hold &&
          !Se &&
          ((m.done = !0), ye++, (be = -1), (xe = 0), m.final && (ke = !0)))),
      i > g - 8 && (p = g - 2));
    let h =
        a < -4 ? 1.04 : a <= 25 ? 1 : Math.max(0.8, 1 - (0.2 * (a - 25)) / 85),
      v = Fe(t, D, p >= 0 && p - i < 4, !0);
    (D.pilot.update(t, h, a3(i3(p, v), i)),
      D.pilot.drifting && !Te && ((Te = !0), e.queueLine(N, s(`drift`))),
      (ze = 0),
      Be(i, Math.abs(D.v.speed)),
      u && je.lat < 12 && Be(je.s, o));
    for (let e = 0; e < O.length; e++) {
      let n = O[e],
        r = Re[0];
      for (let e = 1; e < ze; e++)
        Re[e].s > n.pilot.s + 2 && Re[e].s < r.s && (r = Re[e]);
      (Le(t, n, r.s, r.v, i > g - 8 ? g - 2 - 8 * (e + 2) : -1),
        Be(n.pilot.s, Math.abs(n.v.speed)));
    }
    if (A) {
      if (
        (Le(t, A, i, Math.abs(D.v.speed), i > g - 8 ? g - 11 : -1),
        (S.scripted = S.controls),
        o < 1.5 && i < g - 30)
      ) {
        if ((F += t) > 2 && F - t <= 2) {
          let e = n.dynamics.query(
              S.body.x + Math.sin(S.heading) * 5,
              S.body.z - Math.cos(S.heading) * 5,
              6,
              t3,
            ),
            t = [];
          for (let n = 0; n < e; n++)
            t3[n] !== S.body &&
              t.push(
                `${t3[n].kind}@${Math.round(t3[n].x)},${Math.round(t3[n].z)}`,
              );
          ce(
            `me held at ${Math.round(je.s)} (${Math.round(S.body.x)},${Math.round(S.body.z)}) lat ${je.lat.toFixed(1)} obstacle ${A.pilot.drv.obstacle.toFixed(1)} gap ${a.toFixed(0)}: ${t.join(` `)}`,
          );
        }
      } else F = 0;
    }
    De -= t;
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
      ? ((Ee += t),
        (C.draft = Math.min(1, Ee / 0.5)),
        Ee > 1.8 &&
          De <= 0 &&
          (C.boost(0.8, 0.55),
          (De = 2.5),
          (Ee = 0),
          ee.flash(n.t({ zh: `尾流加速！`, en: `Slingshot!` }))))
      : ((Ee = Math.max(0, Ee - t * 2)),
        (C.draft = Math.max(0, C.draft - t * 2.5)));
    for (let e of j)
      if (e.v.health < 450)
        try {
          n.vehicles.repair?.(e.v);
        } catch {}
    let b = be >= 0 || Ce >= 0,
      x = a > c || (je.lat > 40 && a > 0) || !u;
    (b || ((he += t), a <= 40 && u && (ge += t), u && (_e = Math.max(_e, a))),
      u
        ? (fe = 0)
        : ((fe += t),
          e.hud.prompt({ zh: `回到卡丁車上！`, en: `Get back in your kart!` })),
      x && !b && xe <= 0 ? (de += t) : (de = Math.max(0, de - t * 2)));
    let w = a > c * 0.6 || de > 0;
    if (((pe -= t), (me -= t), w && !b && xe <= 0 && pe <= 0)) {
      pe = 4;
      let t = Math.max(0, Math.ceil(l - de));
      (ee.flash(
        n.t(
          de > 0
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
        me <= 0 && ((me = 12), e.queueLine(N, s(`warn`))));
    }
    ((de > l || fe > 20) &&
      !Oe &&
      ((Oe = !0),
      (ke = !0),
      ce(`lost gap ${a.toFixed(0)} lat ${je.lat.toFixed(0)} inKart ${u}`),
      e.queueLine(N, s(`lost`))),
      !ke &&
        Ce < 0 &&
        ye >= M.length &&
        i > g - 9 &&
        Math.abs(D.v.speed) < 0.8 &&
        ((Ce = 0), e.queueLine(N, s(`end`))),
      Ce >= 0 && ((Ce += t), ((a < 30 && o < 2) || Ce > 15) && (ke = !0)),
      (ue -= t) <= 0 &&
        ((ue = 0.1),
        ee.run({
          gap: a,
          warn: w,
          time: ie,
          left: g - je.s,
          charge: C.charge,
          level: C.level,
          boost: C.boostT > 0,
          draft: C.draft,
        })),
      (e.vars.kartRun = {
        t: Math.round(ie * 10) / 10,
        gap: Math.round(a),
        s: Math.round(je.s),
        L: Math.round(g),
        gS: Math.round(i),
        gKmh: Math.round(Math.abs(D.v.speed) * 3.6),
        gDrift: D.pilot.drifting,
        gDrifts: D.pilot.drifts,
        gTurbos: D.v.kart?.turbos ?? 0,
        gLat: Math.round(D.pilot.drv.lateral * 10) / 10,
        gObstacle: v < 0 ? -1 : Math.round(v - i),
        lostT: Math.round(de * 10) / 10,
        spins: C.spins,
        gSpins: D.v.kart?.spins ?? 0,
        lastSpin: C.lastSpin ?? ``,
        gBeta:
          Math.round(
            u3(D.v.heading - Math.atan2(D.v.body.vx, -D.v.body.vz)) * 100,
          ) / 100,
        gSlide: !!D.v.drifting,
      }),
      f.pointAt(Math.min(g, je.s + 20), j4),
      (re.x = j4.x),
      (re.z = j4.z),
      be < 0 && (e.waitFor = re));
  }),
    await e.until(() => ke || te || !e.alive),
    (e.waitFor = null));
  let Ve = {
    time: Math.round(ie * 10) / 10,
    lost: Oe,
    score: Math.round((100 * ge) / Math.max(1, he)),
    maxGap: Math.round(_e),
    leaderKmh: Math.round((ve / Math.max(1, ie)) * 3.6),
    drifts: D.pilot.drifts,
    turbos: C.turbos,
    spins: C.spins,
  };
  return (
    (Ve.log = se.slice()),
    (e.vars.kartRunResult = { ...Ve, log: void 0 }),
    ne(),
    A && (S.controls.hold = !0),
    Ve
  );
}
