// tokyo/assets/actors-bknSEpf2 153 — math
// Lines 69274-70870 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function wL(e, t) {
  let { chain: n, districtGate: a, earlyJobs: o, afterTutorial: s } = t,
    c = t.prologue?.id ?? `tutorial`,
    l = new wu(e),
    u = [],
    d = new Map(),
    f = new Set(),
    p = new Map(),
    m = new Map(),
    h = new Map(),
    g = [],
    _ = null,
    v = null,
    y = null,
    b = null,
    x = null,
    S = null,
    C = null,
    w = null,
    T = null,
    E = null,
    D = null,
    O = null,
    k = !1,
    A = !1,
    j = !1,
    M = !1,
    N = null,
    ee = -10,
    P = new Set(),
    F = 0,
    I = null,
    te = null,
    ne = null,
    re = !1,
    ie = 0,
    ae = 0,
    L = -1,
    R = [],
    oe = [],
    se = [],
    ce = null,
    le = null,
    ue = new Map(),
    z = new Map(),
    de = (e) => {
      Math.random() < 0.7 &&
        We(`firecracker`, { x: e.x, y: e.y, z: e.z, volume: 0.7 });
    },
    fe = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    pe = (t) => e.state.data.completedMissions.includes(t),
    me = new Map(),
    he = e.params.has(`unlockall`),
    B = (e) => e.requires ?? (he ? void 0 : me.get(e.id)),
    ge = (e) => (pe(e.id) ? null : (B(e)?.find((e) => !pe(e)) ?? null));
  function _e(t) {
    if (
      (me.delete(t.id),
      t.requires !== void 0 || t.id === c || t.category === `story`)
    )
      return;
    let r = (e) => e !== t.id && d.has(e),
      i = (n[t.id] ?? []).filter(r);
    if (!i.length) {
      if (f.has(t.id) && o.has(t.id)) i = [c];
      else {
        let n = m.get(t.id),
          o = ``;
        try {
          n && (o = e.plan.districtAt(n.x, n.z).id);
        } catch {}
        i = (a[o] ?? [c]).filter(r);
      }
    }
    (!i.length && r(c) && (i = [c]), i.length && me.set(t.id, i));
  }
  let ve = (t, n) => {
      try {
        return e.plan.districtAt(t, n).name;
      } catch {
        return;
      }
    },
    ye = (t) => {
      try {
        return !!t.hidden?.(e);
      } catch {
        return !1;
      }
    },
    be = (e) =>
      e.category === `story` && !e.repeatable && pe(e.id) && D?.id !== e.id,
    xe = (e) => !ge(e) && !ye(e) && !be(e),
    Se = {
      zh: `先甩掉警察才能開始任務`,
      en: `Lose the cops to start a mission`,
    },
    Ce = [],
    we = { found: 0, total: t.collectibles.length },
    Te = [],
    Ee = () => (!!E && E.elapsed < 8) || e.ui.hudVisible === !1,
    De = (t, n) => Te.push({ at: e.time.elapsed + t, fn: n, toast: !0 }),
    Oe = -99,
    ke = (t, n) => Te.push({ at: e.time.elapsed + t, fn: n }),
    Ae = null,
    je = (t) => {
      let n = m.get(t);
      if (n) {
        Ae = null;
        try {
          e.player.teleport(
            n.x + Math.sin(n.heading) * 1.5,
            n.z - Math.cos(n.heading) * 1.5,
            n.heading + Math.PI,
          );
        } catch {}
        ke(0.6, () => et.startMission(t, { here: !0 }));
      }
    };
  function Me(t, n, r, i) {
    let a = !1;
    try {
      a = e.events.listenerCount(`fireworks`) > 0;
    } catch {}
    if ((e.events.emit(`fireworks`, { x: t, y: n, z: r, duration: i }), a))
      return;
    let o = new FP(t, Math.min(n, 330), r, Math.min(i, 40));
    (e.scene.add(o.points), Ce.push(o));
  }
  let Ne = 1,
    Pe = !1,
    Fe = (e) =>
      (window.requestIdleCallback ?? ((e) => setTimeout(e, 200)))(e, {
        timeout: 1500,
      }),
    Ie = [];
  function Le(t, n) {
    let r = t.x - e.player.position.x,
      i = t.z - e.player.position.z,
      a = Math.hypot(r, i) || 1,
      o = vu(e.plan, t.x + (r / a) * 35, t.z + (i / a) * 35);
    ((t.anim = `talk`), Ie.push({ a: t, t: 0, go: n, tx: o.x, tz: o.z }));
  }
  function Re(t) {
    let n = e.camera.position;
    for (let e = Ie.length - 1; e >= 0; e--) {
      let r = Ie[e];
      ((r.t += t),
        r.t >= r.go &&
          !r.a.moving &&
          r.t < r.go + 0.1 &&
          ((r.a.anim = `idle`),
          (r.a.look = null),
          r.a.moveTo(r.tx, r.tz, 1.35)),
        r.a.update(t));
      let i = Math.hypot(n.x - r.a.x, n.z - r.a.z) > 60;
      (r.t > r.go + 18 || (r.t > r.go + 2 && i)) &&
        (r.a.dispose(), Ie.splice(e, 1));
    }
  }
  function ze(t) {
    if ((Ie.length && Re(t), E)) {
      if (ue.size) {
        for (let e of ue.values()) e.dispose();
        ue.clear();
      }
      return;
    }
    let n = e.player.position;
    if (((Ne += t), Ne > 0.5)) {
      Ne = 0;
      let t = !1;
      for (let r of u) {
        if (!r.giver) continue;
        let i = m.get(r.id),
          a = ue.get(r.id);
        if (!i || !xe(r)) {
          a && (a.dispose(), ue.delete(r.id));
          continue;
        }
        let o = Math.hypot(n.x - i.x, n.z - i.z);
        if (!a && o < 160 && o >= 70 && !Pe) {
          let t = iI(r.giver.outfit) ?? nI.uncle;
          OF(e, t) ||
            ((Pe = !0),
            Fe(() => {
              Pe = !1;
              try {
                EF(e, [t]);
              } catch {}
            }));
        }
        if (!a && o < 70 && ue.size < 3 && !t) {
          let a = tL(e, r.giver, i),
            o = !1;
          for (let e of ue.values()) e.distTo(a.x, a.z) < 1.6 && (o = !0);
          if (o) continue;
          t = !0;
          let s = new ZF(e, iI(r.giver.outfit) ?? nI.uncle, a.x, a.z, 0);
          (s.faceTo(n.x, n.z),
            (s.look = n),
            (s.anim = r.giver.anim ?? `idle`),
            ue.set(r.id, s));
        } else a && o > 90 && (a.dispose(), ue.delete(r.id));
      }
    }
    for (let [e, r] of ue) {
      let i = r.distTo(n.x, n.z);
      i < 16 &&
        (r.heading = ft(r.heading, Math.atan2(n.x - r.x, -(n.z - r.z)), 3, t));
      let a = d.get(e)?.giver?.anim ?? `idle`;
      ((r.anim =
        a === `wave`
          ? i < 30 && i > 3.5
            ? `wave`
            : i <= 3.5
              ? `talk`
              : `idle`
          : a),
        r.update(t));
    }
  }
  function Be(e) {
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      x: 0,
      z: 0,
      reward: e.reward,
      category: e.category,
      completed: !1,
      available: !0,
      glyph: e.glyph ?? Vj(e.iconCell ?? Rj[e.icon]),
      color: yL(e.color),
      repeatable: !!e.repeatable,
      status: `idle`,
      hours:
        e.hours && (e.hours[1] - e.hours[0] + 24) % 24 >= 1
          ? `${bL(e.hours[0])}–${bL(e.hours[1])}`
          : void 0,
      chapter: e.chapter,
      giver: e.giverName,
      source: e.source ?? `missions`,
    };
  }
  function He(t) {
    try {
      let n = t.start(e);
      m.set(t.id, { x: n.x, z: n.z, heading: n.heading ?? 0 });
      let r = p.get(t.id);
      ((r.x = n.x), (r.z = n.z), (r.district = ve(n.x, n.z)));
    } catch (e) {
      console.error(`[missions] start point for ${t.id} failed`, e);
    }
  }
  function Ue(e, t) {
    if ((u.push(e), d.set(e.id, e), t && f.add(e.id), p.set(e.id, Be(e)), A)) {
      He(e);
      for (let e of u) _e(e);
      ((M = !0), Ae === e.id && je(e.id));
    }
  }
  for (let e of t.builtins) Ue(e, !0);
  let We = (t, n) => {
    try {
      e.audio.play(t, n ?? { ui: !0 });
    } catch {}
  };
  function Ge(t) {
    if (!_ || (t === j && !M)) return;
    ((j = t), (M = !1));
    for (let e of h.values()) e.remove();
    h.clear();
    for (let e of u) l.removeBlip(`mission:${e.id}`);
    if (!t) return;
    let n = e.player.position,
      r = [];
    for (let e of u) {
      let t = m.get(e.id);
      t && xe(e) && (!pe(e.id) || e.repeatable) && r.push(t);
    }
    for (let t of u) {
      let i = m.get(t.id);
      if (!i || !xe(t)) continue;
      let a = pe(t.id) && !t.repeatable;
      if (a) {
        if (r.some((e) => Math.abs(e.x - i.x) < SL && Math.abs(e.z - i.z) < SL))
          continue;
        r.push(i);
      }
      let o = e.plan.groundHeight(i.x, i.z) + 0.01,
        s = _.add({
          x: i.x,
          z: i.z,
          y: o,
          color: t.color,
          style: `start`,
          icon: t.icon,
          iconCell: t.iconCell,
          radius: 1.7,
          intensity: a ? 0.55 : 1,
          pillar: !a,
        });
      (s.setVisible(Math.hypot(n.x - i.x, n.z - i.z) < xL), h.set(t.id, s));
      let c = {
        x: i.x,
        z: i.z,
        icon: t.blip,
        color: yL(t.color),
        label: t.title,
        clampToEdge: ne === t.id,
        pulse: ne === t.id,
        glyph: p.get(t.id)?.glyph,
        category: t.category,
      };
      l.addBlip(`mission:${t.id}`, c);
    }
  }
  let Ke = () => {
    ((M = !0), E || Ge(!0));
  };
  function qe(t, n = {}) {
    if (!T) return !1;
    (P.add(t.id),
      (D = null),
      (O = null),
      (re = !1),
      ne === t.id && (ne = null),
      (te = null),
      l.setObjective(null),
      l.setWaypoint(null),
      Ge(!1));
    let r = new gI(T, t, H);
    ((r.blessedAtStart = !!S && S.blessing > 0),
      n.resumeStep !== void 0 &&
        n.resumeStep > 0 &&
        (r.resumeStep = n.resumeStep));
    let i = m.get(t.id);
    i && (r.origin = { ...i });
    let a = ue.get(t.id);
    a &&
      (ue.delete(t.id),
      t.giver?.standIn
        ? t.giver.leaveAtStart
          ? a.dispose()
          : Le(a, 5)
        : (r.giver = a));
    for (let e of ue.values()) e.dispose();
    return (
      ue.clear(),
      (E = r),
      (l.missionTitle = t.title),
      (N = null),
      e.state.stat(`missionsStarted`),
      We(`mission_start`),
      t.noPolice && r.suspendPolice(),
      e.events.emit(`mission:started`, { id: t.id, title: t.title }),
      (async () => {
        let n = 12;
        try {
          n = e.env.hour;
        } catch {}
        (t.hours &&
          t.skipTo !== void 0 &&
          !eL(n, t.hours) &&
          (await r.skipTo(t.skipTo, t.skipCaption)),
          r.alive && (await t.run(r), r.alive && r.pass()));
      })().catch((e) => {
        (console.error(`[missions] ${t.id} script error`, e),
          r.alive && r.fail({ zh: `任務發生錯誤`, en: `Mission error` }));
      }),
      !0
    );
  }
  function H(t, n, a) {
    (E === t && (E = null), (l.missionTitle = null), (ee = e.time.real));
    let o = t.def;
    if (n === `passed`) {
      let m = a.pass ?? {},
        h = pe(o.id),
        g = new Set(u.filter((e) => ge(e)).map((e) => e.id)),
        _ = !o.repeatable && (h || e.state.hasClaimed(`mission:${o.id}`)),
        v =
          (m.reward ?? o.reward) +
          (m.bonus ?? 0) +
          (Number.isFinite(t.bonus) ? t.bonus : 0),
        y = t.blessedAtStart && !!S && S.blessing > 0,
        { pay: b, share: x } = Et(e.state.data, o.id, v, {
          replay: _,
          blessed: y,
        });
      (e.state.addMoney(b, `mission:${o.id}`),
        e.state.completeMission(o.id),
        e.state.stat(`missionsPassed`),
        e.state.stat(`pass_${o.id}`));
      let C = Ve(x),
        w =
          m.note && C
            ? {
                zh: `${m.note.zh}　${C.zh}`,
                en: `${m.note.en}   ${C.en}`,
                ja: `${r(m.note)}　${r(C)}`,
              }
            : (m.note ?? C);
      (l.bigMessage(
        { zh: `任務完成`, en: `MISSION PASSED` },
        {
          zh: `${Tu(b)}${w ? `　` + w.zh : ``}`,
          en: `${Tu(b)}${w ? `   ` + w.en : ``}`,
          ja: `${Tu(b)}${w ? `　` + r(w) : ``}`,
        },
        { color: `#ffc83d`, duration: 5 },
      ),
        We(`mission_pass`));
      try {
        e.audio.duck(0.55, 3);
      } catch {}
      try {
        e.player.mode === `foot` && e.player.emote?.(`cheer`);
      } catch {}
      (e.events.emit(`mission:completed`, { id: o.id, reward: b }),
        (I = { id: o.id, result: n, reward: b }));
      let T = u.filter((e) => g.has(e.id) && !ge(e));
      T.length && (M = !0);
      let E = T.filter((e) => e.category !== `story`);
      if (E.length <= 2)
        E.forEach((e, t) => {
          De(6 + t * 1.8, () =>
            l.notify(
              {
                zh: i.on
                  ? i.t(
                      `新任務解鎖：「${e.title.zh}」`,
                      `新ミッション解放：「${i.jz(e.title.zh)}」`,
                    )
                  : `新任務解鎖：「${e.title.zh}」`,
                en: `New mission unlocked: ${e.title.en}`,
              },
              `mission`,
              5,
            ),
          );
        });
      else {
        let e = [];
        for (let t of E) {
          let n = p.get(t.id)?.district;
          n && !e.some((e) => e.zh === n.zh) && e.push(n);
        }
        let t = e.map((e) => e.zh).join(`・`),
          n = e.map((e) => e.en).join(`, `);
        De(6, () =>
          l.notify(
            {
              zh: i.on
                ? i.t(
                    `新地區開放：${t || `臺北`}（${E.length} 個新任務，地圖上的新標誌）`,
                    `新エリア開放：${i.jz(t || `臺北`)}（新ミッション ${E.length} 件、地図に新しいマーク）`,
                  )
                : `新地區開放：${t || `臺北`}（${E.length} 個新任務，地圖上的新標誌）`,
              en: `New area open: ${n || `Taipei`} (${E.length} new missions on your map)`,
            },
            `mission`,
            6,
          ),
        );
      }
      let D = null;
      ((o.category === `story` || o.id === c) &&
        (D = T.find((e) => e.category === `story`) ?? null),
        !D &&
          o.id === c &&
          (D =
            u
              .filter(
                (e) =>
                  e.category === `story` && e.id !== c && !pe(e.id) && xe(e),
              )
              .sort((e, t) => (e.order ?? 0) - (t.order ?? 0))[0] ??
            d.get(s) ??
            null));
      let O = o.id === c && !!D && !f.has(D.id);
      if (D && D.id !== o.id)
        te = { id: D.id, at: e.time.elapsed + (O ? 12 : 6.5), soft: !1 };
      else {
        let t = Ze(o.id);
        t && (te = { id: t.id, at: e.time.elapsed + 7.5, soft: !0 });
      }
    } else {
      let r =
        n === `aborted`
          ? { zh: `任務已放棄`, en: `Mission abandoned` }
          : (a.reason ?? { zh: `任務失敗`, en: `Mission failed` });
      e.state.stat(n === `aborted` ? `missionsAborted` : `missionsFailed`);
      let i = e.player.mode;
      if (n === `failed`) {
        let e = t.checkpoint;
        O = {
          def: o,
          from: -1,
          until: -1,
          step: e ? e.step : -1,
          pos: e?.pos ?? null,
        };
      }
      n === `failed` && (i === `dead` || i === `busted` || N)
        ? (N = { reason: r, at: e.time.real })
        : n === `failed`
          ? (l.bigMessage({ zh: `任務失敗`, en: `MISSION FAILED` }, r, {
              color: `#ff4d5e`,
              duration: 4,
            }),
            We(`mission_fail`),
            Je(1.2))
          : l.notify(r, `info`, 3);
      let s = { id: o.id, reason: r, aborted: n === `aborted` };
      (e.events.emit(`mission:failed`, s),
        (I = { id: o.id, result: n, reason: r }));
    }
    Ge(!0);
  }
  function Je(t) {
    O && ((O.from = e.time.real + t), (O.until = O.from + CL));
  }
  function Ye() {
    let t = O;
    if (!t || E) return;
    O = null;
    let n = m.get(t.def.id),
      r =
        t.pos ??
        (n
          ? {
              x: n.x + Math.sin(n.heading) * 1.5,
              z: n.z - Math.cos(n.heading) * 1.5,
              heading: n.heading + Math.PI,
            }
          : null);
    ((k = !0),
      We(`ui_confirm`),
      l.fade(1, 0.35).then(async () => {
        if (
          (r &&
            (await Promise.resolve(
              e.districts?.ensureResident?.(r.x, r.z),
            ).catch(() => {})),
          (k = !1),
          E)
        )
          return void l.fade(0, 0.4);
        try {
          e.player.mode === `vehicle` && e.vehicles?.ejectPlayer?.();
        } catch {}
        if (r)
          try {
            (e.player.teleport(r.x, r.z, r.heading),
              e.cameraRig?.snapBehind?.());
          } catch {}
        (e.state.stat(`missionsRetried`),
          qe(t.def, { resumeStep: t.step > 0 ? t.step : void 0 }),
          l.fade(0, 0.6));
      }));
  }
  function Xe(e, t) {
    let n = m.get(e.id);
    return n
      ? ((D = e),
        (O = null),
        (re = !1),
        (M = !0),
        (l.missionTitle = e.title),
        l.setObjective({
          zh: i.on
            ? i.t(
                `前往任務地點：「${e.title.zh}」`,
                `ミッション開始地点へ：「${i.jz(e.title.zh)}」`,
              )
            : `前往任務地點：「${e.title.zh}」`,
          en: `Go to the mission start: *${e.title.en}*`,
        }),
        l.setWaypoint(n, e.title),
        l.notify(t, `mission`, 4),
        We(`ui_confirm`),
        !0)
      : !1;
  }
  function Ze(t) {
    let n = e.player.position,
      r = null,
      i = 1600;
    for (let e of u) {
      if (e.id === t || pe(e.id) || !xe(e)) continue;
      let a = m.get(e.id);
      if (!a) continue;
      let o = Math.hypot(a.x - n.x, a.z - n.z) * (e.repeatable ? 1.6 : 1);
      o < i && ((i = o), (r = e));
    }
    return r;
  }
  function Qe() {
    let e = m.get(c);
    if (!e) return;
    let n = t.prologue;
    (l.setObjective(
      n?.objective ?? {
        zh: `去找表哥阿明（跟著地圖上的金色「明」字標誌）`,
        en: `Meet Cousin Ming — follow the gold 「明」 marker`,
      },
    ),
      l.setWaypoint(e, n?.contact ?? { zh: `表哥阿明`, en: `Cousin Ming` }));
  }
  function $e() {
    if (pe(c) || E || D) return;
    let n = e.params;
    if (
      t.prologue &&
      (n.has(`autoplay`) || n.has(`spawn`) || n.has(`cam`)) &&
      !n.has(`onboard`)
    )
      return;
    let r = d.get(c),
      i = m.get(c);
    (r?.autoStart?.(e) &&
      i &&
      Math.hypot(e.player.position.x - i.x, e.player.position.z - i.z) < 20) ||
      ((re = !0), Qe());
  }
  let et = {
    name: `missions`,
    get claimsInteract() {
      return !!E?.claimsInteract;
    },
    get active() {
      let e = E?.def.id ?? D?.id;
      if (!e) return null;
      let t = p.get(e),
        n = d.get(e);
      return (
        n && ((t.title = n.title), (t.description = n.description)),
        (t.status = E ? `running` : `travel`),
        (t.available = !0),
        t
      );
    },
    get objective() {
      return l.objective;
    },
    get collectibles() {
      return ((we.found = y?.found ?? 0), we);
    },
    get blessing() {
      return S?.blessing ?? 0;
    },
    list() {
      let t = E?.def.id ?? D?.id ?? null,
        n = e.state.data.stats,
        r = [],
        a = e.player.position,
        o = u
          .map((e, t) => {
            let n = m.get(e.id),
              r = n ? Math.hypot(n.x - a.x, n.z - a.z) : 1e7;
            return {
              d: e,
              dist: r,
              k: e.category === `story` ? (e.order ?? t) : 1e6 + r,
            };
          })
          .sort((e, t) => e.k - t.k),
        s = e.time.real;
      for (let { d: e, dist: a } of o) {
        let o = p.get(e.id);
        if (
          !o ||
          ((o.title = e.title),
          (o.description = e.description),
          e.id !== t && ye(e))
        )
          continue;
        let c = ge(e);
        ((o.locked = !!c),
          (o.completed = pe(e.id) && !e.repeatable),
          (o.available = !c && (!t || t === e.id)),
          (o.status =
            E?.def.id === e.id
              ? `running`
              : D?.id === e.id
                ? `travel`
                : `idle`),
          (o.suggested = ne === e.id),
          (o.dist = Math.round(a)),
          (o.retry = !!O && O.def === e && s >= O.from && s <= O.until));
        let l = n[`pass_${e.id}`] ?? 0;
        if (c) {
          let e = d.get(c);
          o.note = {
            zh: i.on
              ? i.t(
                  `完成「${e?.title.zh ?? c}」後解鎖`,
                  `「${i.jz(e?.title.zh ?? c)}」クリア後に解放`,
                )
              : `完成「${e?.title.zh ?? c}」後解鎖`,
            en: `Unlocks after "${e?.title.en ?? c}"`,
          };
        } else if (e.id === `race` && n.raceBestMs) {
          let e = n.raceBestMs / 1e3,
            t = Math.floor(e / 60),
            r = (e - t * 60).toFixed(2).padStart(5, `0`);
          o.note = {
            zh: i.on
              ? i.t(`最佳 ${t}:${r}`, `ベスト ${t}:${r}`)
              : `最佳 ${t}:${r}`,
            en: `Best ${t}:${r}`,
          };
        } else
          o.note =
            l > 0
              ? {
                  zh: i.on
                    ? i.t(`完成 ${l} 次`, `クリア ${l} 回`)
                    : `完成 ${l} 次`,
                  en: `Completed ${l}×`,
                }
              : void 0;
        r.push(o);
      }
      return r;
    },
    startMission(t, n) {
      let r = d.get(t);
      if (!r || !A) return !1;
      if (E)
        return (
          E.def.id === t ||
          (l.notify(
            {
              zh: `請先完成或放棄目前的任務`,
              en: `Finish or abort your current mission first`,
            },
            `bad`,
            3,
          ),
          !1)
        );
      if (ye(r) && !n?.here)
        return (
          l.notify(
            {
              zh: i.on
                ? i.t(
                    `「${r.title.zh}」今天沒有`,
                    `「${i.jz(r.title.zh)}」は今日はやっていない`,
                  )
                : `「${r.title.zh}」今天沒有`,
              en: `"${r.title.en}" isn't on today`,
            },
            `bad`,
            3,
          ),
          !1
        );
      let a = ge(r);
      if (a && !n?.here) {
        let e = d.get(a);
        return (
          l.notify(
            {
              zh: i.on
                ? i.t(
                    `要先完成「${e?.title.zh ?? a}」`,
                    `先に「${i.jz(e?.title.zh ?? a)}」をクリアしよう`,
                  )
                : `要先完成「${e?.title.zh ?? a}」`,
              en: `Complete "${e?.title.en ?? a}" first`,
            },
            `bad`,
            3,
          ),
          !1
        );
      }
      if (fe() > 0 && !n?.here)
        return (
          l.notify(
            {
              zh: `先甩掉警察才能開始任務！`,
              en: `Lose the cops before starting a mission!`,
            },
            `bad`,
            3,
          ),
          !1
        );
      let o = m.get(t);
      if (!o) return !1;
      let s = Math.hypot(e.player.position.x - o.x, e.player.position.z - o.z);
      return n?.here || s < 30
        ? qe(r)
        : Xe(r, {
            zh: i.on
              ? i.t(
                  `已標記「${r.title.zh}」的任務地點`,
                  `「${i.jz(r.title.zh)}」の開始地点をマークしました`,
                )
              : `已標記「${r.title.zh}」的任務地點`,
            en: `Marked the start of "${r.title.en}"`,
          });
    },
    abort() {
      E
        ? E.abort()
        : D &&
          ((D = null),
          Ke(),
          (l.missionTitle = null),
          l.setObjective(null),
          l.setWaypoint(null));
    },
    spawnCash(e, t, n) {
      x?.dropCash(e, t, n);
    },
    registerMission(e) {
      let t = dL(e);
      if (t)
        return (
          console.warn(`[missions] registerMission rejected '${e?.id}': ${t}`),
          !1
        );
      if (d.has(e.id) || g.some((t) => t.id === e.id))
        return (
          console.warn(
            `[missions] registerMission: id '${e.id}' already exists`,
          ),
          !1
        );
      if (!A) return (g.push(e), !0);
      try {
        Ue(pL(e), !1);
      } catch (t) {
        return (
          console.error(`[missions] registerMission '${e.id}' failed`, t),
          !1
        );
      }
      return !0;
    },
    unregisterMission(e) {
      let t = d.get(e);
      return !t || f.has(e)
        ? !1
        : (E?.def.id === e && E.abort(),
          D?.id === e && et.abort(),
          d.delete(e),
          p.delete(e),
          m.delete(e),
          u.splice(u.indexOf(t), 1),
          ue.get(e)?.dispose(),
          ue.delete(e),
          h.get(e)?.remove(),
          h.delete(e),
          l.removeBlip(`mission:${e}`),
          !0);
    },
    isCompleted: (e) => pe(e),
    marker(t) {
      let n = t.style ?? `goto`;
      return (
        _?.add({
          x: t.x,
          z: t.z,
          y:
            t.y ??
            e.plan.groundHeight(t.x, t.z) + (n === `target` ? 0.2 : 0.01),
          color: t.color ?? 16765517,
          style: n,
          radius: t.radius,
          heading: t.heading,
          pillar: t.pillar,
          intensity: t.intensity,
        }) ?? { setPos() {}, setVisible() {}, setColor() {}, remove() {} }
      );
    },
    spawnActor(t) {
      let n = new ZF(e, t.who ?? `uncle`, t.x, t.z, t.heading ?? 0, _L(t));
      return (
        vL(e, n, t),
        (n.onRemove = () => {
          let e = se.indexOf(n);
          e >= 0 && se.splice(e, 1);
        }),
        se.push(n),
        n
      );
    },
    preloadActors(t) {
      try {
        EF(e, t);
      } catch {}
    },
    setMarkersVisible(e) {
      _ && (_.group.visible = e);
    },
    async init() {
      (pM(e.quality, e.renderer.gl),
        e.events.on(`quality:changed`, () => pM(e.quality, e.renderer.gl)),
        (_ = new PM()),
        (v = new jP()),
        Ft(v.mesh),
        e.scene.add(_.group),
        e.scene.add(v.mesh),
        (y = new Ou(e, l, _, v, t.collectibles, t.collectibleStyle)),
        (b = new SI(e, l, _, v, () => y?.remaining() ?? [])),
        (x = new jI(e, l, _, v, t.pickups)),
        (S = new XI(e, l, t.shops)),
        (C = new $I(e, l, _, t.dealers)));
      let n = performance.now();
      le ??= $F(e, [`ming`, `grandma`]);
      let r = await Promise.race([
        le,
        new Promise((e) => setTimeout(() => e(!1), 4e3)),
      ]);
      (console.info(
        `[init] missions: actors ${r ? `Rocketbox` : `library`} ready in ${Math.round(performance.now() - n)}ms`,
      ),
        r ||
          le.then((t) => {
            if (!t) return;
            let n = QF(e);
            e.renderer.compileRoots(n.roots).finally(() => n.dispose());
          }),
        e.events.on(`game:ready`, () => {
          (setTimeout(() => {
            (ce?.(), (ce = null));
          }, 500),
            !e.quality.mobile &&
              e.quality.level !== `low` &&
              setTimeout(() => Fe(() => iF(LP)), 3e3));
        }));
    },
    prewarm() {
      ce?.();
      let t = QF(e);
      return (
        (ce = t.dispose),
        A &&
          setTimeout(() => {
            ce === t.dispose && (t.dispose(), (ce = null));
          }, 8e3),
        t.roots
      );
    },
    start() {
      if (!_ || !v || !y || !x || !S) return;
      let t = performance.now();
      A = !0;
      for (let e of g.splice(0))
        try {
          Ue(pL(e), !1);
        } catch (t) {
          console.error(`[missions] registerMission '${e.id}' failed`, t);
        }
      for (let e of u) He(e);
      for (let e of u) _e(e);
      for (let e of u)
        for (let t of e.requires ?? [])
          d.has(t) ||
            console.warn(
              `[missions] '${e.id}' requires unknown mission '${t}' (stays locked)`,
            );
      let n = S;
      ((T = {
        ctx: e,
        hud: l,
        markers: _,
        props: v,
        sidewalks: () => (w ??= new xu(e.plan)),
        onBuy: (e) => n.onBuy(e),
        blessing: () => (n.blessing > 0 ? 1.1 : 1),
        bless: (e) => {
          n.blessing = Math.max(n.blessing, e);
        },
        fireworks: Me,
        muteShops: (e) => n.mute(e),
      }),
        y.start(),
        b?.start(),
        Rn(e),
        x.start(),
        S.start(),
        C?.start(),
        Ge(!0),
        e.events.on(`player:died`, () =>
          E?.fail({ zh: `你送醫了`, en: `You were hospitalized` }),
        ),
        e.events.on(`player:busted`, () =>
          E?.fail({ zh: `你被警察逮捕了`, en: `You got busted` }),
        ),
        e.events.on(`player:respawned`, () => {
          N && (N.at = e.time.real - 4);
        }),
        e.events.on(`wanted:changed`, (e) => {
          D &&
            e.level > 0 &&
            e.prev === 0 &&
            l.notify(
              {
                zh: `你被通緝了！甩掉警察才能開始任務`,
                en: `You're wanted! Lose the cops before starting the mission`,
              },
              `bad`,
              3.5,
            );
        }));
      let r = !1;
      e.events.on(`player:spawned`, () => {
        ((L = e.time.real), !r && ((r = !0), setTimeout($e, 1800)));
      });
      let i = e.params.get(`mission`);
      if (
        (i && ((Ae = i), d.has(i) && je(i)),
        e.events.on(`time:day`, () => Ke()),
        ((e) => (window.requestIdleCallback ?? ((e) => setTimeout(e, 3e3)))(e))(
          () => {
            w ||= new xu(e.plan);
          },
        ),
        e.params.has(`fwtest`) && setTimeout(() => Me(745, 330, 200, 40), 500),
        e.params.has(`finds`) && b)
      )
        for (let e of b.remaining())
          l.addBlip(`find:${e.id}`, {
            x: e.x,
            z: e.z,
            icon: `collectible`,
            color: `#6fd8ff`,
            label: e.id,
            mapOnly: !0,
          });
      if (e.params.has(`cats`))
        for (let e of y.remaining())
          l.addBlip(`cat:${e.id}`, {
            x: e.x,
            z: e.z,
            icon: `collectible`,
            color: `#ffc640`,
            label: e.id,
            mapOnly: !0,
          });
      let a = performance.now() - t;
      a > 30 && console.info(`[missions] start ${a.toFixed(0)}ms`);
    },
    update(t) {
      if (!A || !_ || !v) return;
      let n = performance.now();
      ((XF.animated = 0), (XF.ms = 0));
      let r = e.player.position;
      if ((M && !E && Ge(!0), Te.length)) {
        let t = e.time.elapsed,
          n = -1;
        if (t - Oe >= 1.8 && !Ee())
          for (let e = 0; e < Te.length && n < 0; e++)
            Te[e].toast && t >= Te[e].at && (n = e);
        for (let e = Te.length - 1; e >= 0; e--) {
          if (t < Te[e].at) continue;
          if (Te[e].toast) {
            if (e !== n) continue;
            Oe = t;
          }
          let r = Te[e].fn;
          Te.splice(e, 1);
          try {
            r();
          } catch (e) {
            console.warn(`[missions] delayed call failed`, e);
          }
        }
      }
      if (E) E.update(t);
      else {
        if (te && e.time.elapsed >= te.at && !Ee()) {
          let e = d.get(te.id),
            t = te.soft;
          if (((te = null), e && t && !D && xe(e))) {
            ((ne = e.id), (M = !0));
            let t = m.get(e.id),
              n = t ? Math.hypot(t.x - r.x, t.z - r.z) : 0;
            l.notify(
              {
                zh: i.on
                  ? i.t(
                      `附近的新任務：「${e.title.zh}」（${Math.round(n)} 公尺，地圖上閃爍的標誌）`,
                      `近くに新ミッション：「${i.jz(e.title.zh)}」（${Math.round(n)} m、地図上で点滅中のマーク）`,
                    )
                  : `附近的新任務：「${e.title.zh}」（${Math.round(n)} 公尺，地圖上閃爍的標誌）`,
                en: `New mission nearby: "${e.title.en}" (${Math.round(n)} m — the flashing marker on your map)`,
              },
              `mission`,
              6,
            );
          } else
            e &&
              !D &&
              xe(e) &&
              ((ne = e.id),
              (M = !0),
              Xe(e, {
                zh: i.on
                  ? i.t(
                      `下一個任務：「${e.title.zh}」已標記在地圖上`,
                      `次のミッション：「${i.jz(e.title.zh)}」を地図にマークしました`,
                    )
                  : `下一個任務：「${e.title.zh}」已標記在地圖上`,
                en: `Next mission: "${e.title.en}" — marked on your map`,
              }));
        }
        let n = e.player.mode,
          a = !E && !k && (n === `foot` || n === `vehicle`),
          o = !1;
        if (D && a) {
          let t = m.get(D.id),
            i = n === `vehicle` ? 7 : 4;
          t &&
            Math.abs(r.x - t.x) < i &&
            Math.abs(r.z - t.z) < i &&
            Math.hypot(r.x - t.x, r.z - t.z) < i &&
            ((o = !0),
            fe() > 0
              ? l.prompt(Se)
              : l.promptIfFree(it(D)) &&
                e.input.pressed(`interact`) &&
                !tt() &&
                qe(D));
        }
        if (O && a && !o && !D) {
          let t = e.time.real;
          O.until > 0 && t > O.until
            ? (O = null)
            : O.from > 0 &&
              t >= O.from &&
              ((o = !0),
              fe() > 0
                ? l.prompt(Se)
                : l.promptIfFree(rt(O.def, O.step > 0)) &&
                  e.input.pressed(`interact`) &&
                  !tt() &&
                  Ye());
        }
        re &&
          ((ie += t),
          ie > 1 &&
            ((ie = 0),
            pe(c) || D
              ? ((re = !1), D || (l.setObjective(null), l.setWaypoint(null)))
              : l.objective || Qe()));
        let s = !!e.interiors?.playerInside;
        if (a && !o && e.time.real - ee > 2.5) {
          let t = n === `vehicle`,
            i = null,
            a = 1 / 0;
          for (let n of u) {
            let o = m.get(n.id),
              c = !P.has(n.id) && !!n.autoStart?.(e),
              u = c ? 16 : t ? 5 : s ? 1.2 : 2.4;
            if (!o || Math.abs(r.x - o.x) > u || Math.abs(r.z - o.z) > u)
              continue;
            let d = Math.hypot(r.x - o.x, r.z - o.z);
            if (d > u || !xe(n)) continue;
            if (fe() > 0) {
              (l.prompt(Se), (i = null));
              break;
            }
            if (c) {
              if (L >= 0 && e.time.real - L > 1.5) {
                (qe(n), (i = null));
                break;
              }
              if (d > 2.4) continue;
            }
            let f = d + (pe(n.id) && !n.repeatable ? 1e3 : 0);
            f < a && ((a = f), (i = n));
          }
          i &&
            l.promptIfFree(it(i)) &&
            e.input.pressed(`interact`) &&
            !tt() &&
            qe(i);
        }
      }
      if (((ae += t), ae > 0.5 && h.size)) {
        ae = 0;
        for (let [e, t] of h) {
          let n = m.get(e);
          n &&
            t.setVisible(
              Math.abs(r.x - n.x) + Math.abs(r.z - n.z) < xL * 1.3 &&
                Math.hypot(r.x - n.x, r.z - n.z) < xL,
            );
        }
      }
      (y.update(t),
        b?.update(t),
        x.update(t),
        S.update(t, !!(l.lastBig && l.lastBig.until > e.time.real)),
        C?.update(t, !!E || !!D),
        N &&
          e.time.real - N.at > 5.5 &&
          e.player.mode !== `dead` &&
          e.player.mode !== `busted` &&
          (l.bigMessage({ zh: `任務失敗`, en: `MISSION FAILED` }, N.reason, {
            color: `#ff4d5e`,
            duration: 4,
          }),
          We(`mission_fail`),
          (N = null),
          Je(1.2)));
      for (let n = Ce.length - 1; n >= 0; n--) {
        let r = Ce[n];
        (r.update(t, e.renderer.height * e.renderer.pixelRatio, de),
          r.t > 45 && (r.dispose(), Ce.splice(n, 1)));
      }
      for (let e of R) e.update(t);
      for (let e = se.length - 1; e >= 0; e--) se[e]?.update(t);
      (ze(t),
        _.flush(e.camera),
        (l.log.length || E) && l.update(t, E ? `step: ${E.step}` : ``),
        (F += (performance.now() - n - F) * 0.05));
    },
    debug: {
      start(t) {
        let n = m.get(t);
        return n
          ? (E && E.abort(),
            e.player.teleport(
              n.x + Math.sin(n.heading) * 1.5,
              n.z - Math.cos(n.heading) * 1.5,
              n.heading + Math.PI,
            ),
            et.startMission(t, { here: !0 }))
          : !1;
      },
      state() {
        return {
          active: E?.snapshot() ?? (D ? { id: D.id, step: `travel` } : null),
          lastResult: I,
          money: e.state.money,
          waypoint: l.waypoint,
          blessing: S?.blessing ?? 0,
          cats: y ? `${y.found}/${y.total}` : ``,
          suggested: ne,
          onboarding: re,
        };
      },
      target() {
        return l.waypoint;
      },
      teleport(t, n) {
        let r = e.vehicles?.playerVehicle;
        if (r) {
          let i = e.vehicles;
          (typeof i.teleport == `function`
            ? i.teleport(r, t, n, r.heading)
            : ((r.body.x = t),
              (r.body.z = n),
              r.object.position.set(t, e.plan.groundHeight(t, n), n)),
            e.player.position.set(t, e.plan.groundHeight(t, n), n));
        } else e.player.teleport(t, n);
      },
      starts() {
        return Object.fromEntries(
          [...m.entries()].map(([e, t]) => [
            e,
            { x: +t.x.toFixed(1), z: +t.z.toFixed(1) },
          ]),
        );
      },
      ids: () => u.map((e) => e.id),
      complete(t) {
        return (e.state.completeMission(t), Ke(), !0);
      },
      cats: () => y?.remaining() ?? [],
      finds: () => b?.remaining() ?? [],
      findsGallery: (e, t = 0) => b?.gallery(e, t) ?? 0,
      pickups: () => x?.debug() ?? [],
      nearShop: () => S?.nearPoi ?? null,
      dealers: () => C?.debug() ?? [],
      shopListeners: () => S?.listeners.size ?? 0,
      buy: () => (S?.nearPoi ? S.buy(S.nearPoi) : !1),
      perf: () => ({
        ms: +F.toFixed(3),
        drawCalls: (_?.drawCalls ?? 0) + (v && v.count > 0 ? 1 : 0),
        markers: _?.count ?? 0,
        props: v?.count ?? 0,
        actors: ue.size + R.length + se.length + (E?.actorCount ?? 0),
        actorDrawCalls: [
          ...ue.values(),
          ...R,
          ...se,
          ...(E?.actorList ?? []),
        ].reduce(
          (e, t) =>
            e + (t.root.parent ? t.meshes.filter((e) => e.visible).length : 0),
          0,
        ),
        actorsAnimated: XF.animated,
        actorMs: +XF.ms.toFixed(3),
        actorBuildMs: +kF().toFixed(1),
        avatarFiles: aF(),
      }),
      log: () => l.log.slice(-30),
      actors() {
        return [...ue.values(), ...(E?.actorList ?? []), ...se, ...R].map(
          (e) => ({
            who: e.roleKey,
            avatar: e.avatarId,
            kind: e.kind,
            x: +e.x.toFixed(1),
            z: +e.z.toFixed(1),
            anim: e.anim,
            action: e.action,
            speaking: e.speaking,
            shown: !!e.root.parent,
            names: e.names,
          }),
        );
      },
      frame(t = `bust`, n = -1, r = 0.35) {
        let i = [...ue.values(), ...(E?.actorList ?? []), ...se, ...R];
        if (!i.length) return !1;
        let a = e.player.position,
          o = n >= 0 ? i[n] : i.find((e) => e.speaking);
        if (
          ((o ||= i
            .slice()
            .sort((e, t) => e.distTo(a.x, a.z) - t.distTo(a.x, a.z))[0]),
          !o)
        )
          return !1;
        let s = o.y + o.height * 0.93,
          c = Math.sin(o.heading),
          l = -Math.cos(o.heading),
          u = Math.cos(o.heading),
          d = Math.sin(o.heading),
          f = t === `face` ? 0.75 : t === `bust` ? 1.35 : 3.2,
          p =
            t === `body`
              ? o.y + o.height * 0.55
              : t === `bust`
                ? s - 0.18
                : s - 0.03,
          m,
          h;
        if (t === `two`) {
          let e = o.x - a.x,
            t = o.z - a.z,
            n = Math.hypot(e, t) || 1;
          ((m = new V(
            a.x - (e / n) * 1.1 + (t / n) * 0.55,
            a.y + 1.62,
            a.z - (t / n) * 1.1 - (e / n) * 0.55,
          )),
            (h = new V(o.x, s - 0.15, o.z)));
        } else
          ((m = new V(
            o.x + c * f + u * r * f,
            t === `body` ? o.y + 1.3 : s,
            o.z + l * f + d * r * f,
          )),
            (h = new V(o.x, p, o.z)));
        try {
          e.cameraRig.override(m, h);
        } catch {
          return !1;
        }
        return {
          who: o.roleKey,
          avatar: o.avatarId,
          pos: m.toArray().map((e) => +e.toFixed(2)),
        };
      },
      unframe() {
        try {
          e.cameraRig.override(null);
        } catch {}
        return !0;
      },
      iconGallery(t, n, r = 12, i = 1.25, a = 0) {
        for (let e of oe.splice(0)) e.remove();
        if (!_) return null;
        let o = yM(),
          s = e.plan.groundHeight(t, n),
          c = Math.ceil(o.length / r);
        (o.forEach((e, o) => {
          let l = t + ((o % r) - (r - 1) / 2) * i,
            u = a + 1.2 + (c - 1 - Math.floor(o / r)) * i;
          oe.push(
            _.add({
              x: l,
              z: n,
              y: s + u - 2.4,
              color: 16777215,
              style: `target`,
              iconCell: e,
              iconSize: i * 0.85,
            }),
          );
        }),
          [
            `start`,
            `goto`,
            `drive`,
            `checkpoint`,
            `finish`,
            `pickup`,
            `glow`,
          ].forEach((e, r) => {
            let i = [
              16765786, 5100287, 16734810, 10215773, 16777215, 16747224,
              16764749,
            ][r];
            oe.push(
              _.add({
                x: t + (r - 3) * 6,
                z: n - 10,
                y: s,
                color: i,
                style: e,
                icon: e === `start` ? `delivery` : void 0,
                radius: e === `checkpoint` || e === `finish` ? 2.2 : 1.4,
                heading: 0,
              }),
            );
          }));
        let l = s + a + 1.2 + (c * i) / 2;
        return {
          cells: o.length,
          cam: { x: t, y: l, z: n + 12 },
          look: { x: t, y: l - 0.5, z: n },
          styleCam: { x: t, y: s + 9, z: n + 4 },
          styleLook: { x: t, y: s, z: n - 10 },
        };
      },
      clearIconGallery() {
        for (let e of oe.splice(0)) e.remove();
        return !0;
      },
      clearGallery() {
        for (let e of R) e.dispose();
        return ((R.length = 0), !0);
      },
      gallery(t, n, r = `mixed`, i = 64, a = Math.PI, o = !0, s = 0, c = 999) {
        let l = [
            `cat`,
            `cash`,
            `vest`,
            `pistol`,
            `bat`,
            `foodbox`,
            `tea`,
            `teaCarrier`,
            `trashbag`,
            `wallet`,
            `cone`,
            `altar`,
            `firecracker`,
            `palanquin`,
            `passport`,
            `handbag`,
            `camera`,
            `blocks`,
            `block`,
            `bento`,
            `bouquet`,
            `incense`,
            `stick`,
          ],
          u = e.plan.groundHeight(t, n);
        return (
          o &&
            l.forEach((e, r) =>
              v?.add(
                e,
                t + r * 1.3,
                u +
                  (e === `palanquin` ||
                  e === `altar` ||
                  e === `cone` ||
                  e === `firecracker`
                    ? 0
                    : 0.3),
                n,
                0,
                e === `pistol`
                  ? 2
                  : e === `cash`
                    ? 1.6
                    : e === `passport` ||
                        e === `blocks` ||
                        e === `block` ||
                        e === `stick` ||
                        e === `incense`
                      ? 2.5
                      : 1,
              ),
            ),
          Object.keys(nI)
            .slice(s, s + c)
            .forEach((o, s) => {
              let c = new ZF(
                e,
                nI[o],
                t + (s % i) * 1.1,
                n - 3 - Math.floor(s / i) * 3,
                a,
              );
              ((c.anim =
                r === `mixed`
                  ? s % 4 == 1
                    ? `wave`
                    : s % 4 == 3
                      ? `talk`
                      : `idle`
                  : r),
                R.push(c));
            }),
          { props: l.length, actors: R.length }
        );
      },
    },
  };
  function tt() {
    return e.player.controlEnabled === !1 || !!e.interiors?.busy || !!e.paused;
  }
  let nt = new Map();
  function rt(e, t) {
    let n = `${e.id}|${+!!t}`,
      r = nt.get(n);
    return (
      r ||
        ((r = t
          ? {
              zh: i.on
                ? i.t(
                    `按 {interact} 從檢查點重試「${e.title.zh}」`,
                    `{interact} でチェックポイントから「${i.jz(e.title.zh)}」をリトライ`,
                  )
                : `按 {interact} 從檢查點重試「${e.title.zh}」`,
              en: `Press {interact} to retry "${e.title.en}" from the checkpoint`,
            }
          : {
              zh: i.on
                ? i.t(
                    `按 {interact} 重試「${e.title.zh}」`,
                    `{interact} で「${i.jz(e.title.zh)}」をリトライ`,
                  )
                : `按 {interact} 重試「${e.title.zh}」`,
              en: `Press {interact} to retry "${e.title.en}"`,
            }),
        nt.set(n, r)),
      r
    );
  }
  function it(t) {
    let n = pe(t.id) && !t.repeatable,
      i = 12;
    try {
      i = e.env.hour;
    } catch {}
    let a = t.hours && t.skipTo !== void 0 && !eL(i, t.hours),
      o = `${t.id}|${+!!n}|${+!!a}`,
      s = z.get(o);
    if (!s) {
      let e = n ? Math.round(t.reward * 0.25) : t.reward,
        i = a
          ? {
              zh: `（等到 ${bL(t.skipTo)}）`,
              en: ` (wait until ${bL(t.skipTo)})`,
              ja: `（${bL(t.skipTo)}まで待つ）`,
            }
          : { zh: ``, en: ``, ja: `` };
      ((s = {
        zh: `按 {interact} 開始「${t.title.zh}」${n ? `（重玩）` : ``}${i.zh}　${Tu(e)}${t.repeatable ? `＋獎金` : ``}`,
        en: `Press {interact}: ${t.title.en}${n ? ` (replay)` : ``}${i.en}   ${Tu(e)}${t.repeatable ? ` + bonus` : ``}`,
        ja: `{interact} で「${r(t.title)}」を開始${n ? `（リプレイ）` : ``}${i.ja}　${Tu(e)}${t.repeatable ? `＋ボーナス` : ``}`,
      }),
        z.set(o, s));
    }
    return s;
  }
  return et;
}
