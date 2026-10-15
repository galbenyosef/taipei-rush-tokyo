// tokyo/assets/region-tokyo-55J_WESF 442 — math
// Lines 156885-157350 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function f6(e, t) {
  let n = e.ctx,
    i = n.plan,
    a = n.params.has(`autosolve`),
    o = t.circuit,
    s = Math.max(1, Math.round(t.laps ?? o.laps)),
    c = Math.min(1, Math.max(0, t.rubber ?? 0.5)),
    l = NRe(i, o),
    u = l.main,
    d = u.length;
  u.project(o.start.x, o.start.z, Q3);
  let f = Q3.s,
    p = new ie(ge(`kart-race`, o.id, t.rivals.length, s));
  if (
    ((e.vars.kartCircuit = o.id),
    (e.vars.kartLap = Math.round(d)),
    (e.step = `kart-grid`),
    await e.hud.fade(1, 0.45),
    await r6(e, u),
    !e.alive)
  )
    return { place: 0, time: 0, finished: !1 };
  let m = PRe(e, l),
    h = m.release,
    g = t.rivals.length + 1,
    _ = a ? 0 : Math.min(g - 1, Math.floor(g / 2)),
    v = (e) => {
      let t = Math.floor(e / 2),
        n = e % 2;
      return a6(u, f - 3 - t * 3.8 - n * 1.2, n ? -3.1 : 0);
    },
    y = [],
    b = (e, t, r, i) => {
      u.project(e.body.x, e.body.z, Q3);
      let o = Q3.s - f;
      (o > d / 2 && (o -= d), o < -d / 2 && (o += d));
      let s = FRe(e);
      return (
        (s.racing = !0),
        {
          racer: t,
          v: e,
          K: s,
          player: r,
          prog: o,
          lastS: Q3.s,
          seg: Q3.seg,
          lat: 0,
          finished: !1,
          finishT: 0,
          lapsDone: 0,
          lapStart: 0,
          best: 0,
          draftT: 0,
          draftCd: 0,
          cornerT: 0,
          holdT: 0,
          coolT: 0,
          drv:
            r && !a
              ? null
              : new wt(n, e, i ? l.alt : u, {
                  maxSpeed: 0,
                  latAccel: 10,
                  decel: 9,
                  canReset: !0,
                  avoid: !0,
                  swerve: 1.6,
                }),
        }
      );
    },
    x = 0,
    S = null;
  for (let n = 0; n < g; n++) {
    let r = v(n);
    if (n === _) {
      let n = l6(e, r.x, r.z, r.heading, t.playerColor ?? 15216682);
      if (!n || !n.kart)
        return (
          h(),
          e.hud.fade(0, 0.4),
          e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
          { place: 0, time: 0, finished: !1 }
        );
      (u6(e, n), (n.scripted = { ...Y3 }), (S = b(n, null, !0, !1)), y.push(S));
      continue;
    }
    let i = t.rivals[x++],
      a = (ge(`kart-rival`, o.id, x) % 1e5) / 1e5,
      s = e.vehicle(`kart`, r.x, r.z, r.heading, {
        driver: `ai`,
        locked: !0,
        color: i.color,
        seed: a,
      });
    if (!s || !s.kart) continue;
    ((s.driver = `ai`),
      (s.kart.costume = i.costume ?? 1 + ((x - 1) % 4)),
      (s.controls.hold = !0));
    let c = b(s, i, !1, n % 2 == 1);
    (c.drv &&
      (c.drv.opts.maxSpeed =
        s.spec.maxSpeed * (0.86 + 0.12 * Math.min(1, Math.max(0, i.skill)))),
      (c.drv.opts.latAccel = 9.5 + 3.5 * i.skill),
      y.push(c));
  }
  let C = S,
    w = C.v.spec.maxSpeed;
  C.drv && ((C.drv.opts.maxSpeed = w * 1.1), (C.drv.opts.latAccel = 13));
  try {
    let t = a6(u, f + 2, -14),
      n = $e(i, t.x, t.z);
    Math.hypot(n.x - t.x, n.z - t.z) < 12 &&
      e.crowd(n.x, n.z, 6, 10, void 0, {
        mode: `watch`,
        lookX: o.start.x,
        lookZ: o.start.z,
      });
  } catch {}
  let T = new U3(n, `race`),
    E = !1,
    D = () => {
      if (!E) {
        ((E = !0), T.remove(), h());
        for (let e of y) ((e.K.racing = !1), (e.K.draft = 0));
        C.v.scripted && (C.v.scripted = null);
      }
    };
  (e.onCleanup(D), e.hud.fade(0, 0.6));
  let O = Ge(n),
    k = 0,
    A = (t, n, r = !1) => {
      if (!t || t.player || !t.racer || (!r && k > 0)) return;
      k = 7;
      let i = t.racer.lines?.[n] ?? MRe[n];
      i?.length && e.queueLine(d6(e, t.racer.name), ze(O, IRe(p, i)));
    };
  (e.objective({
    zh: r.on
      ? r.t(
          `卡丁車賽：${o.name.zh}（${s} 圈）`,
          `カートレース：${r.jz(o.name.zh)}（${s} 周）`,
        )
      : `卡丁車賽：${o.name.zh}（${s} 圈）`,
    en: `Kart race: ${o.name.en} (${s} laps)`,
  }),
    A(
      y.find((e) => !e.player && e.racer),
      `start`,
      !0,
    ),
    (e.step = `kart-countdown`));
  let j = 0,
    ee = -1,
    M = 0,
    te = { kind: `kart`, x: o.start.x, z: o.start.z };
  (await e.until((t) => {
    ((j += t), (e.waitFor = te));
    let r = a ? +(j > 2.55) : n.input.axis(`throttle`);
    r > 0.5 && ee < 0 ? (ee = j) : r <= 0.5 && (ee = -1);
    let i = 3 - Math.floor(j);
    return (
      i !== M &&
        i >= 1 &&
        ((M = i),
        T.count(String(i)),
        e.sfx(`ui_confirm`, { ui: !0, volume: 0.8 })),
      T.tick(t),
      j >= 3
    );
  }),
    T.count(n.t({ zh: `出發！`, en: `GO!` }), !0),
    e.sfx(`checkpoint`, { ui: !0, volume: 0.9 }));
  for (let e of y) {
    if (e.player) {
      ee >= 2.4
        ? (e.K.boost(0.9, 0.85),
          T.flash(n.t({ zh: `起步加速！`, en: `Rocket start!` })))
        : ee >= 0 &&
          ((e.holdT = 0.6),
          T.flash(n.t({ zh: `起步太早了……`, en: `Jumped the start…` })));
      continue;
    }
    let t = e.racer?.skill ?? 0.5;
    p.chance(0.25 + 0.6 * t)
      ? e.K.boost(0.7, 0.7)
      : (e.holdT = 0.1 + p.next() * 0.35);
  }
  e.step = `kart-race`;
  let ne = 0,
    re = 0.9,
    ae = 0,
    oe = 0,
    se = 0,
    ce = -1,
    le = 0,
    ue = [],
    de = [],
    fe = y.slice(),
    pe = 0,
    me = (e, t) =>
      e.finished === t.finished
        ? e.finished
          ? e.finishT - t.finishT
          : t.prog - e.prog
        : e.finished
          ? -1
          : 1,
    he = { place: 0, time: 0, finished: !1 },
    _e = (t) => {
      he.place ||
        (fe.sort(me),
        (he.finished = t),
        (he.place = t ? le : y.length),
        (he.time = t ? C.finishT : ne),
        (he.bestLap = C.best || void 0),
        (he.turbos = C.K.turbos),
        (he.spins = C.K.spins),
        (he.log = be.slice()),
        (e.vars.kartResult = { ...he }));
    },
    ve = -1,
    ye = 0,
    be = [];
  return (
    e.every((i) => {
      if (E) return;
      ((ne += i),
        (k -= i),
        m.sweep(i),
        re > 0 && (re -= i) <= 0 && T.count(``),
        T.tick(i));
      for (let i of y) {
        let a = i.v;
        (u.project(a.body.x, a.body.z, Q3, i.seg, 8),
          Q3.dist > 30 && u.project(a.body.x, a.body.z, Q3),
          (i.seg = Q3.seg),
          (i.lat = Q3.dist));
        let o = Q3.s - i.lastS;
        if (
          (o > d / 2 ? (o -= d) : o < -d / 2 && (o += d),
          (i.lastS = Q3.s),
          (i.prog += o),
          i.finished)
        )
          continue;
        let c = Math.max(0, Math.floor(i.prog / d));
        if (c > i.lapsDone) {
          let a = ne - i.lapStart;
          if (
            ((i.lapStart = ne),
            (i.lapsDone = c),
            (!i.best || a < i.best) && (i.best = a),
            i.prog >= s * d)
          ) {
            if (((i.finished = !0), (i.finishT = ne), ue.push(i), i.player)) {
              ((le = ue.length),
                T.count(
                  n.t(
                    le === 1
                      ? { zh: `冠軍！`, en: `1st!` }
                      : {
                          zh: r.on
                            ? r.t(`第 ${le} 名`, `${le} 位`)
                            : `第 ${le} 名`,
                          en: `${LRe(le)} place`,
                        },
                  ),
                  le === 1,
                ),
                e.sfx(le === 1 ? `mission_pass` : `checkpoint`, { ui: !0 }));
              let t = fe.find((e) => !e.player && !e.finished);
              (A(t, `lose`, !0), _e(!0), (ve = 2.6));
            } else ue.length === 1 && A(i, `win`, !0);
          } else
            i.player &&
              (e.sfx(`checkpoint`, { ui: !0, volume: 0.7 }),
              t.onLap?.(c, ae || 1),
              n6(e, u),
              c === s - 1
                ? (T.flash(n.t({ zh: `最後一圈！`, en: `Final lap!` }), 2),
                  A(
                    fe.find((e) => !e.player),
                    `final`,
                  ))
                : T.flash(
                    n.t({
                      zh: r.on
                        ? r.t(
                            `第 ${c + 1} 圈 · 上一圈 ${W3(a)}`,
                            `${c + 1} 周目 · 前の周 ${W3(a)}`,
                          )
                        : `第 ${c + 1} 圈 · 上一圈 ${W3(a)}`,
                      en: `Lap ${c + 1} · last ${W3(a)}`,
                    }),
                    2,
                  ));
        }
      }
      fe.sort(me);
      let o = fe.indexOf(C) + 1;
      (ae &&
        o !== ae &&
        !C.finished &&
        ne > 3 &&
        (o < ae ? A(fe[o], `passed`) : A(fe[o - 2], `pass`)),
        (ae = o));
      for (let e of y) {
        let t = e.v,
          r = Math.abs(t.speed);
        e.draftCd -= i;
        let a = !1;
        if (r > 9 && e.K.spinT <= 0 && !e.finished) {
          let n = Math.sin(t.heading),
            r = -Math.cos(t.heading);
          for (let i of y) {
            if (i === e) continue;
            let o = i.v.body.x - t.body.x,
              s = i.v.body.z - t.body.z,
              c = o * n + s * r;
            if (!(c < 2.5 || c > 14) && Math.abs(o * -r + s * n) < 1.5) {
              a = !0;
              break;
            }
          }
        }
        a
          ? ((e.draftT += i),
            (e.K.draft = Math.min(1, e.draftT / 0.5)),
            e.draftT > 1.8 &&
              e.draftCd <= 0 &&
              (e.K.boost(0.8, 0.55),
              (e.draftCd = 2.5),
              (e.draftT = 0),
              e.player && T.flash(n.t({ zh: `尾流加速！`, en: `Slingshot!` }))))
          : ((e.draftT = Math.max(0, e.draftT - i * 2)),
            (e.K.draft = Math.max(0, e.K.draft - i * 2.5)));
      }
      a && !C.finished && (C.K.draft = Math.max(C.K.draft, 0.7));
      for (let e of y) {
        let t = e.v;
        if (t.health < 450)
          try {
            n.vehicles.repair?.(t);
          } catch {}
        if (e.player && !e.drv) continue;
        let r = t.controls;
        if (e.holdT > 0) {
          ((e.holdT -= i),
            (r.hold = !0),
            (r.throttle = 0),
            e.player && (t.scripted = r));
          continue;
        }
        if (((r.hold = !1), e.finished && !e.player)) {
          ((e.coolT += i), e.drv.update(i, e.coolT > 6 ? 0 : 0.45));
          continue;
        }
        let o = 1;
        if (!e.player) {
          let t = C.prog - e.prog;
          ((o =
            t > 0
              ? a
                ? 1
                : 1 + c * Math.min(0.3, t / 120)
              : 1 - c * Math.min(0.18, -t / 160)),
            C.finished && (o = Math.max(o, 1)));
        }
        e.drv.update(i, o);
        let s = e.player ? 1 : (e.racer?.skill ?? 0.8);
        if (Math.abs(r.steer) > 0.45 && Math.abs(t.speed) > 7) e.cornerT += i;
        else if (Math.abs(r.steer) < 0.2) {
          if (e.cornerT > 0.5) {
            let t = !e.player && C.prog > e.prog;
            (e.player || p.chance(0.2 + 0.55 * s + (t ? 0.25 * c : 0))) &&
              e.K.boost(0.5 + 0.4 * s, 0.55 + 0.3 * s);
          }
          e.cornerT = 0;
        }
        e.player && (t.scripted = r);
      }
      C.holdT > 0 && !C.drv
        ? ((C.holdT -= i), C.holdT <= 0 && (C.v.scripted = null))
        : !C.drv && C.v.scripted && !C.finished && (C.v.scripted = null);
      let l = e.playerVehicle === C.v;
      if (!C.finished) {
        if (
          (l
            ? (se = 0)
            : ((se += i),
              e.hud.prompt({
                zh: `回到卡丁車上！`,
                en: `Get back in your kart!`,
              }),
              se > 25 && _e(!1)),
          l && !C.drv && C.lat > 26)
        ) {
          if (((oe += i), oe > 4)) {
            oe = 0;
            let e = a6(u, C.lastS, 0);
            try {
              n.vehicles.teleport?.(C.v, e.x, e.z, e.heading);
            } catch {}
            T.flash(n.t({ zh: `回到賽道`, en: `Back on the track` }));
          }
        } else oe = 0;
        (C.v.destroyed && _e(!1),
          ue.length >= y.length - 1 && ce < 0 && (ce = ne),
          ((ce >= 0 && ne - ce > 40) || ne > (d / 4) * s + 120) && _e(!1));
      }
      if ((pe -= i) <= 0) {
        ((pe = 0.1), (de.length = 0));
        for (let t of fe)
          de.push({
            name: t.player
              ? n.t({ zh: `你`, en: `You` })
              : n.t(d6(e, t.racer.name)),
            color: t.v.color,
            me: t.player,
          });
        T.race({
          place: C.finished ? le : o,
          of: y.length,
          lap: C.lapsDone + 1,
          laps: s,
          time: C.finished ? C.finishT : ne,
          best: C.best,
          rows: de,
          charge: C.K.charge,
          level: C.K.level,
          boost: C.K.boostT > 0,
          draft: C.K.draft,
        });
      }
      if (((e.vars.kartPlace = o), C.K.spins !== ye)) {
        ye = C.K.spins;
        let t = C.K.lastSpin ?? ``;
        (be.push(`${ne.toFixed(1)} spin ${t} at prog ${Math.round(C.prog)}`),
          be.length > 30 && be.shift(),
          (e.vars.kartLog = be));
      }
      ((e.vars.kartLapNow = C.lapsDone + 1),
        (e.vars.kartT = Math.round(ne * 10) / 10),
        u.pointAt(C.lastS + 25, X3),
        (te.x = X3.x),
        (te.z = X3.z),
        (e.waitFor = te),
        he.place && ve < 0 && (ve = 1.2),
        ve > 0 &&
          ((ve -= i),
          C.finished &&
            (C.v.scripted = {
              throttle: 0,
              brake: 0.5,
              steer: 0,
              handbrake: !1,
            })));
    }),
    await e.until(() => ve !== -1 && ve <= 0),
    (e.waitFor = null),
    D(),
    he
  );
}
