// tokyo/assets/region-tokyo-A7LxHjud 443 — math
// Lines 157604-158091 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function v6(e, t) {
  let n = e.ctx,
    i = n.plan,
    a = n.params.has(`autosolve`),
    o = a && n.params.get(`kartbot`) === `human`,
    s = t.circuit,
    c = Math.max(1, Math.round(t.laps ?? s.laps)),
    l = Math.min(1, Math.max(0, t.rubber ?? 0.5)),
    u = eze(i, s),
    d = u.main,
    f = d.length;
  d.project(s.start.x, s.start.z, n6);
  let p = n6.s,
    m = new le(de(`kart-race`, s.id, t.rivals.length, c));
  if (
    ((e.vars.kartCircuit = s.id),
    (e.vars.kartLap = Math.round(f)),
    (e.step = `kart-grid`),
    await e.hud.fade(1, 0.45),
    await p6(e, d, () => s6(e, d)),
    !e.alive)
  )
    return { place: 0, time: 0, finished: !1 };
  let h = tze(e, u),
    g = h.release,
    _ = t.rivals.length + 1,
    v = a && !o ? 0 : Math.min(_ - 1, Math.floor(_ / 2)),
    y = (e) => {
      let t = Math.floor(e / 2),
        n = e % 2;
      return l6(d, p - 3 - t * 3.8 - n * 1.2, n ? -3.1 : 0);
    },
    b = [],
    x = (e, t, r, i) => {
      d.project(e.body.x, e.body.z, n6);
      let o = n6.s - p;
      (o > f / 2 && (o -= f), o < -f / 2 && (o += f));
      let s = aze(e);
      return (
        (s.racing = !0),
        {
          racer: t,
          v: e,
          K: s,
          player: r,
          prog: o,
          lastS: n6.s,
          seg: n6.seg,
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
              : new Tt(n, e, i ? u.alt : d, {
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
    S = 0,
    C = null;
  for (let n = 0; n < _; n++) {
    let r = y(n);
    if (n === v) {
      let n = m6(e, r.x, r.z, r.heading, t.playerColor ?? 15216682);
      if (!n || !n.kart)
        return (
          g(),
          e.hud.fade(0, 0.4),
          e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
          { place: 0, time: 0, finished: !1 }
        );
      (h6(e, n), (n.scripted = { ...$3 }), (C = x(n, null, !0, !1)), b.push(C));
      continue;
    }
    let i = t.rivals[S++],
      a = (de(`kart-rival`, s.id, S) % 1e5) / 1e5,
      o = e.vehicle(`kart`, r.x, r.z, r.heading, {
        driver: `ai`,
        locked: !0,
        color: i.color,
        seed: a,
      });
    if (!o || !o.kart) continue;
    ((o.driver = `ai`),
      (o.kart.costume = i.costume ?? 1 + ((S - 1) % 4)),
      (o.controls.hold = !0));
    let c = x(o, i, !1, n % 2 == 1);
    (c.drv &&
      (c.drv.opts.maxSpeed =
        o.spec.maxSpeed * (0.86 + 0.12 * Math.min(1, Math.max(0, i.skill)))),
      (c.drv.opts.latAccel = 9.5 + 3.5 * i.skill),
      b.push(c));
  }
  let w = C,
    T = w.v.spec.maxSpeed;
  w.drv &&
    ((w.drv.opts.maxSpeed = o ? T : T * 1.1),
    (w.drv.opts.latAccel = o ? 10.5 : 13));
  try {
    let t = l6(d, p + 2, -14),
      n = rt(i, t.x, t.z);
    Math.hypot(n.x - t.x, n.z - t.z) < 12 &&
      e.crowd(n.x, n.z, 6, 10, void 0, {
        mode: `watch`,
        lookX: s.start.x,
        lookZ: s.start.z,
      });
  } catch {}
  let E = new W3(n, `race`),
    D = new J3(e, {
      path: d,
      s0: p,
      laps: c,
      gates: Math.max(5, Math.round(f / 120)),
      gateRadius: 5.5,
    }),
    O = !1,
    k = () => {
      if (!O) {
        ((O = !0), D.dispose(), E.remove(), g());
        for (let e of b) ((e.K.racing = !1), (e.K.draft = 0));
        w.v.scripted && (w.v.scripted = null);
      }
    };
  (e.onCleanup(k), e.hud.fade(0, 0.6));
  let A = Ge(n),
    j = 0,
    M = (t, n, r = !1) => {
      if (!t || t.player || !t.racer || (!r && j > 0)) return;
      j = 7;
      let i = t.racer.lines?.[n] ?? $Re[n];
      i?.length && e.queueLine(g6(e, t.racer.name), Ye(A, oze(m, i)));
    };
  (e.objective({
    zh: r.on
      ? r.t(
          `卡丁車賽：${s.name.zh}（${c} 圈）`,
          `カートレース：${r.jz(s.name.zh)}（${c} 周）`,
        )
      : `卡丁車賽：${s.name.zh}（${c} 圈）`,
    en: `Kart race: ${s.name.en} (${c} laps)`,
  }),
    M(
      b.find((e) => !e.player && e.racer),
      `start`,
      !0,
    ),
    (e.step = `kart-countdown`));
  let ee = 0,
    te = -1,
    ne = 0,
    re = { kind: `kart`, x: s.start.x, z: s.start.z };
  (await e.until((t) => {
    ((ee += t), (e.waitFor = re));
    let r = o ? 0 : a ? +(ee > 2.55) : n.input.axis(`throttle`);
    r > 0.5 && te < 0 ? (te = ee) : r <= 0.5 && (te = -1);
    let i = 3 - Math.floor(ee);
    return (
      i !== ne &&
        i >= 1 &&
        ((ne = i),
        E.count(String(i)),
        e.sfx(`ui_confirm`, { ui: !0, volume: 0.8 })),
      E.tick(t),
      D.update(t, w.prog, !1),
      ee >= 3
    );
  }),
    E.count(n.t({ zh: `出發！`, en: `GO!` }), !0),
    e.sfx(`checkpoint`, { ui: !0, volume: 0.9 }));
  for (let e of b) {
    if (e.player) {
      te >= 2.4
        ? (e.K.boost(0.9, 0.85),
          E.flash(n.t({ zh: `起步加速！`, en: `Rocket start!` })))
        : te >= 0 &&
          ((e.holdT = 0.6),
          E.flash(n.t({ zh: `起步太早了……`, en: `Jumped the start…` })));
      continue;
    }
    let t = e.racer?.skill ?? 0.5;
    m.chance(0.25 + 0.6 * t)
      ? e.K.boost(0.7, 0.7)
      : (e.holdT = 0.1 + m.next() * 0.35);
  }
  e.step = `kart-race`;
  let ie = 0,
    ae = 0.9,
    oe = 0,
    se = 0,
    ce = 0,
    ue = -1,
    fe = 0,
    pe = [],
    me = [],
    he = b.slice(),
    ge = 0,
    _e = (e, t) =>
      e.finished === t.finished
        ? e.finished
          ? e.finishT - t.finishT
          : t.prog - e.prog
        : e.finished
          ? -1
          : 1,
    ve = { place: 0, time: 0, finished: !1 },
    ye = (t) => {
      ve.place ||
        (he.sort(_e),
        (ve.finished = t),
        (ve.place = t ? fe : b.length),
        (ve.time = t ? w.finishT : ie),
        (ve.bestLap = w.best || void 0),
        (ve.turbos = w.K.turbos),
        (ve.spins = w.K.spins),
        (ve.log = Se.slice()),
        (e.vars.kartResult = { ...ve }));
    },
    be = -1,
    xe = 0,
    Se = [];
  return (
    e.every((i) => {
      if (O) return;
      ((ie += i),
        (j -= i),
        h.sweep(i),
        ae > 0 && (ae -= i) <= 0 && E.count(``),
        E.tick(i));
      for (let i of b) {
        let a = i.v;
        (d.project(a.body.x, a.body.z, n6, i.seg, 8),
          n6.dist > 30 && d.project(a.body.x, a.body.z, n6),
          (i.seg = n6.seg),
          (i.lat = n6.dist));
        let o = n6.s - i.lastS;
        if (
          (o > f / 2 ? (o -= f) : o < -f / 2 && (o += f),
          (i.lastS = n6.s),
          (i.prog += o),
          i.finished)
        )
          continue;
        let s = Math.max(0, Math.floor(i.prog / f));
        if (s > i.lapsDone) {
          let a = ie - i.lapStart;
          if (
            ((i.lapStart = ie),
            (i.lapsDone = s),
            (!i.best || a < i.best) && (i.best = a),
            i.prog >= c * f)
          ) {
            if (((i.finished = !0), (i.finishT = ie), pe.push(i), i.player)) {
              ((fe = pe.length),
                E.count(
                  n.t(
                    fe === 1
                      ? { zh: `冠軍！`, en: `1st!` }
                      : {
                          zh: r.on
                            ? r.t(`第 ${fe} 名`, `${fe} 位`)
                            : `第 ${fe} 名`,
                          en: `${sze(fe)} place`,
                        },
                  ),
                  fe === 1,
                ),
                e.sfx(fe === 1 ? `mission_pass` : `checkpoint`, { ui: !0 }));
              let t = he.find((e) => !e.player && !e.finished);
              (M(t, `lose`, !0), ye(!0), (be = 2.6));
            } else pe.length === 1 && M(i, `win`, !0);
          } else
            i.player &&
              (e.sfx(`checkpoint`, { ui: !0, volume: 0.7 }),
              t.onLap?.(s, oe || 1),
              o6(e, d),
              s === c - 1
                ? (E.flash(n.t({ zh: `最後一圈！`, en: `Final lap!` }), 2),
                  M(
                    he.find((e) => !e.player),
                    `final`,
                  ))
                : E.flash(
                    n.t({
                      zh: r.on
                        ? r.t(
                            `第 ${s + 1} 圈 · 上一圈 ${G3(a)}`,
                            `${s + 1} 周目 · 前の周 ${G3(a)}`,
                          )
                        : `第 ${s + 1} 圈 · 上一圈 ${G3(a)}`,
                      en: `Lap ${s + 1} · last ${G3(a)}`,
                    }),
                    2,
                  ));
        }
      }
      he.sort(_e);
      let s = he.indexOf(w) + 1;
      (oe &&
        s !== oe &&
        !w.finished &&
        ie > 3 &&
        (s < oe ? M(he[s], `passed`) : M(he[s - 2], `pass`)),
        (oe = s));
      for (let e of b) {
        let t = e.v,
          r = Math.abs(t.speed);
        e.draftCd -= i;
        let a = !1;
        if (r > 9 && e.K.spinT <= 0 && !e.finished) {
          let n = Math.sin(t.heading),
            r = -Math.cos(t.heading);
          for (let i of b) {
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
              e.player && E.flash(n.t({ zh: `尾流加速！`, en: `Slingshot!` }))))
          : ((e.draftT = Math.max(0, e.draftT - i * 2)),
            (e.K.draft = Math.max(0, e.K.draft - i * 2.5)));
      }
      a && !o && !w.finished && (w.K.draft = Math.max(w.K.draft, 0.7));
      for (let e of b) {
        let t = e.v;
        if (t.health < 450 && !(e.player && t.destroyed))
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
        let s = 1;
        if (!e.player) {
          let t = w.prog - e.prog;
          ((s =
            t > 0
              ? a && !o
                ? 1
                : 1 + l * Math.min(0.3, t / 120)
              : 1 - l * Math.min(0.18, -t / 160)),
            w.finished && (s = Math.max(s, 1)));
        }
        e.drv.update(i, s);
        let c = e.player ? 1 : (e.racer?.skill ?? 0.8);
        if (Math.abs(r.steer) > 0.45 && Math.abs(t.speed) > 7) e.cornerT += i;
        else if (Math.abs(r.steer) < 0.2) {
          if (e.cornerT > 0.5) {
            let t = !e.player && w.prog > e.prog;
            (e.player ? !o : m.chance(0.2 + 0.55 * c + (t ? 0.25 * l : 0))) &&
              e.K.boost(0.5 + 0.4 * c, 0.55 + 0.3 * c);
          }
          e.cornerT = 0;
        }
        e.player && (t.scripted = r);
      }
      w.holdT > 0 && !w.drv
        ? ((w.holdT -= i), w.holdT <= 0 && (w.v.scripted = null))
        : !w.drv && w.v.scripted && !w.finished && (w.v.scripted = null);
      let u = e.playerVehicle === w.v;
      if (!w.finished) {
        if (
          (u
            ? (ce = 0)
            : ((ce += i),
              e.hud.prompt({
                zh: `回到卡丁車上！`,
                en: `Get back in your kart!`,
              }),
              ce > 25 && ye(!1)),
          u && !w.drv && w.lat > 26)
        ) {
          if (((se += i), se > 4)) {
            se = 0;
            let e = l6(d, w.lastS, 0);
            try {
              n.vehicles.teleport?.(w.v, e.x, e.z, e.heading);
            } catch {}
            E.flash(n.t({ zh: `回到賽道`, en: `Back on the track` }));
          }
        } else se = 0;
        ((w.v.destroyed || w.v.health <= 0) &&
          !ve.place &&
          ((ve.wrecked = !0), ye(!1)),
          pe.length >= b.length - 1 && ue < 0 && (ue = ie),
          ((ue >= 0 && ie - ue > 40) || ie > (f / 4) * c + 120) && ye(!1));
      }
      if ((ge -= i) <= 0) {
        ((ge = 0.1), (me.length = 0));
        for (let t of he)
          me.push({
            name: t.player
              ? n.t({ zh: `你`, en: `You` })
              : n.t(g6(e, t.racer.name)),
            color: t.v.color,
            me: t.player,
          });
        E.race({
          place: w.finished ? fe : s,
          of: b.length,
          lap: w.lapsDone + 1,
          laps: c,
          time: w.finished ? w.finishT : ie,
          best: w.best,
          rows: me,
          charge: w.K.charge,
          level: w.K.level,
          boost: w.K.boostT > 0,
          draft: w.K.draft,
        });
      }
      if (
        (D.update(i, w.prog, ae <= 0 && !w.finished),
        (e.vars.kartPlace = s),
        w.K.spins !== xe)
      ) {
        xe = w.K.spins;
        let t = w.K.lastSpin ?? ``;
        (Se.push(`${ie.toFixed(1)} spin ${t} at prog ${Math.round(w.prog)}`),
          Se.length > 30 && Se.shift(),
          (e.vars.kartLog = Se));
      }
      ((e.vars.kartLapNow = w.lapsDone + 1),
        (e.vars.kartLeadGap = Math.round(
          he[0] === w
            ? -(w.prog - (he[1]?.prog ?? w.prog))
            : he[0].prog - w.prog,
        )),
        (e.vars.kartT = Math.round(ie * 10) / 10),
        d.pointAt(w.lastS + 25, e6),
        (re.x = e6.x),
        (re.z = e6.z),
        (e.waitFor = re),
        ve.place && be < 0 && (be = 1.2),
        be > 0 &&
          ((be -= i),
          w.finished &&
            (w.v.scripted = {
              throttle: 0,
              brake: 0.5,
              steer: 0,
              handbrake: !1,
            })));
    }),
    await e.until(() => be !== -1 && be <= 0),
    (e.waitFor = null),
    k(),
    ve
  );
}
