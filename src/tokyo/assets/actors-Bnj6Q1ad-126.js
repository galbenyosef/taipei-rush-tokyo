// tokyo/assets/actors-Bnj6Q1ad 126 — math
// Lines 59418-61007 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function yj(e, t) {
  let { chain: n, districtGate: a, earlyJobs: o, afterTutorial: s } = t,
    c = t.prologue?.id ?? `tutorial`,
    l = new Wi(e),
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
    P = -10,
    F = new Set(),
    ee = 0,
    te = null,
    ne = null,
    re = null,
    ie = !1,
    ae = 0,
    oe = 0,
    se = -1,
    ce = [],
    le = [],
    ue = [],
    de = null,
    fe = null,
    I = new Map(),
    pe = new Map(),
    me = (e) => {
      Math.random() < 0.7 &&
        We(`firecracker`, { x: e.x, y: e.y, z: e.z, volume: 0.7 });
    },
    he = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    ge = (t) => e.state.data.completedMissions.includes(t),
    _e = new Map(),
    ve = e.params.has(`unlockall`),
    ye = (e) => e.requires ?? (ve ? void 0 : _e.get(e.id)),
    L = (e) => (ge(e.id) ? null : (ye(e)?.find((e) => !ge(e)) ?? null));
  function be(t) {
    if (
      (_e.delete(t.id),
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
    (!i.length && r(c) && (i = [c]), i.length && _e.set(t.id, i));
  }
  let xe = (t, n) => {
      try {
        return e.plan.districtAt(t, n).name;
      } catch {
        return;
      }
    },
    Se = (t) => {
      try {
        return !!t.hidden?.(e);
      } catch {
        return !1;
      }
    },
    Ce = (e) => !L(e) && !Se(e),
    we = {
      zh: `先甩掉警察才能開始任務`,
      en: `Lose the cops to start a mission`,
    },
    Te = [],
    Ee = { found: 0, total: t.collectibles.length },
    De = [],
    Oe = () => (!!E && E.elapsed < 8) || e.ui.hudVisible === !1,
    ke = (t, n) => De.push({ at: e.time.elapsed + t, fn: n, toast: !0 }),
    Ae = -99,
    je = (t, n) => De.push({ at: e.time.elapsed + t, fn: n }),
    Me = null,
    z = (t) => {
      let n = m.get(t);
      if (n) {
        Me = null;
        try {
          e.player.teleport(
            n.x + Math.sin(n.heading) * 1.5,
            n.z - Math.cos(n.heading) * 1.5,
            n.heading + Math.PI,
          );
        } catch {}
        je(0.6, () => tt.startMission(t, { here: !0 }));
      }
    };
  function Ne(t, n, r, i) {
    let a = !1;
    try {
      a = e.events.listenerCount(`fireworks`) > 0;
    } catch {}
    if ((e.events.emit(`fireworks`, { x: t, y: n, z: r, duration: i }), a))
      return;
    let o = new AO(t, Math.min(n, 330), r, Math.min(i, 40));
    (e.scene.add(o.points), Te.push(o));
  }
  let Pe = 1,
    Fe = !1,
    Ie = (e) =>
      (window.requestIdleCallback ?? ((e) => setTimeout(e, 200)))(e, {
        timeout: 1500,
      }),
    Le = [];
  function Re(t, n) {
    let r = t.x - e.player.position.x,
      i = t.z - e.player.position.z,
      a = Math.hypot(r, i) || 1,
      o = Ri(e.plan, t.x + (r / a) * 35, t.z + (i / a) * 35);
    ((t.anim = `talk`), Le.push({ a: t, t: 0, go: n, tx: o.x, tz: o.z }));
  }
  function ze(t) {
    let n = e.camera.position;
    for (let e = Le.length - 1; e >= 0; e--) {
      let r = Le[e];
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
        (r.a.dispose(), Le.splice(e, 1));
    }
  }
  function Be(t) {
    if ((Le.length && ze(t), E)) {
      if (I.size) {
        for (let e of I.values()) e.dispose();
        I.clear();
      }
      return;
    }
    let n = e.player.position;
    if (((Pe += t), Pe > 0.5)) {
      Pe = 0;
      let t = !1;
      for (let r of u) {
        if (!r.giver) continue;
        let i = m.get(r.id),
          a = I.get(r.id);
        if (!i || !Ce(r)) {
          a && (a.dispose(), I.delete(r.id));
          continue;
        }
        let o = Math.hypot(n.x - i.x, n.z - i.z);
        if (!a && o < 160 && o >= 70 && !Fe) {
          let t = $k(r.giver.outfit) ?? Zk.uncle;
          Ck(e, t) ||
            ((Fe = !0),
            Ie(() => {
              Fe = !1;
              try {
                xk(e, [t]);
              } catch {}
            }));
        }
        if (!a && o < 70 && I.size < 3 && !t) {
          let a = XA(e, r.giver, i),
            o = !1;
          for (let e of I.values()) e.distTo(a.x, a.z) < 1.6 && (o = !0);
          if (o) continue;
          t = !0;
          let s = new Kk(e, $k(r.giver.outfit) ?? Zk.uncle, a.x, a.z, 0);
          (s.faceTo(n.x, n.z),
            (s.look = n),
            (s.anim = r.giver.anim ?? `idle`),
            I.set(r.id, s));
        } else a && o > 90 && (a.dispose(), I.delete(r.id));
      }
    }
    for (let [e, r] of I) {
      let i = r.distTo(n.x, n.z);
      i < 16 &&
        (r.heading = Ye(r.heading, Math.atan2(n.x - r.x, -(n.z - r.z)), 3, t));
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
  function Ve(e) {
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
      glyph: e.glyph ?? IT(e.iconCell ?? NT[e.icon]),
      color: mj(e.color),
      repeatable: !!e.repeatable,
      status: `idle`,
      hours:
        e.hours && (e.hours[1] - e.hours[0] + 24) % 24 >= 1
          ? `${hj(e.hours[0])}–${hj(e.hours[1])}`
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
      ((r.x = n.x), (r.z = n.z), (r.district = xe(n.x, n.z)));
    } catch (e) {
      console.error(`[missions] start point for ${t.id} failed`, e);
    }
  }
  function Ue(e, t) {
    if ((u.push(e), d.set(e.id, e), t && f.add(e.id), p.set(e.id, Ve(e)), A)) {
      He(e);
      for (let e of u) be(e);
      ((M = !0), Me === e.id && z(e.id));
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
      t && Ce(e) && (!ge(e.id) || e.repeatable) && r.push(t);
    }
    for (let t of u) {
      let i = m.get(t.id);
      if (!i || !Ce(t)) continue;
      let a = ge(t.id) && !t.repeatable;
      if (a) {
        if (r.some((e) => Math.abs(e.x - i.x) < _j && Math.abs(e.z - i.z) < _j))
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
      (s.setVisible(Math.hypot(n.x - i.x, n.z - i.z) < gj), h.set(t.id, s));
      let c = {
        x: i.x,
        z: i.z,
        icon: t.blip,
        color: mj(t.color),
        label: t.title,
        clampToEdge: re === t.id,
        pulse: re === t.id,
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
    (F.add(t.id),
      (D = null),
      (O = null),
      (ie = !1),
      re === t.id && (re = null),
      (ne = null),
      l.setObjective(null),
      l.setWaypoint(null),
      Ge(!1));
    let r = new dA(T, t, Je);
    ((r.blessedAtStart = !!S && S.blessing > 0),
      n.resumeStep !== void 0 &&
        n.resumeStep > 0 &&
        (r.resumeStep = n.resumeStep));
    let i = m.get(t.id);
    i && (r.origin = { ...i });
    let a = I.get(t.id);
    a &&
      (I.delete(t.id),
      t.giver?.standIn
        ? t.giver.leaveAtStart
          ? a.dispose()
          : Re(a, 5)
        : (r.giver = a));
    for (let e of I.values()) e.dispose();
    return (
      I.clear(),
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
          !YA(n, t.hours) &&
          (await r.skipTo(t.skipTo, t.skipCaption)),
          r.alive && (await t.run(r), r.alive && r.pass()));
      })().catch((e) => {
        (console.error(`[missions] ${t.id} script error`, e),
          r.alive && r.fail({ zh: `任務發生錯誤`, en: `Mission error` }));
      }),
      !0
    );
  }
  function Je(t, n, a) {
    (E === t && (E = null), (l.missionTitle = null), (P = e.time.real));
    let o = t.def;
    if (n === `passed`) {
      let m = a.pass ?? {},
        h = ge(o.id),
        g = new Set(u.filter((e) => L(e)).map((e) => e.id)),
        _ = !o.repeatable && (h || e.state.hasClaimed(`mission:${o.id}`)),
        v =
          (m.reward ?? o.reward) +
          (m.bonus ?? 0) +
          (Number.isFinite(t.bonus) ? t.bonus : 0),
        y = t.blessedAtStart && !!S && S.blessing > 0,
        { pay: b, share: x } = it(e.state.data, o.id, v, {
          replay: _,
          blessed: y,
        });
      (e.state.addMoney(b, `mission:${o.id}`),
        e.state.completeMission(o.id),
        e.state.stat(`missionsPassed`),
        e.state.stat(`pass_${o.id}`));
      let C = gt(x),
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
          zh: `${G(b)}${w ? `　` + w.zh : ``}`,
          en: `${G(b)}${w ? `   ` + w.en : ``}`,
          ja: `${G(b)}${w ? `　` + r(w) : ``}`,
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
        (te = { id: o.id, result: n, reward: b }));
      let T = u.filter((e) => g.has(e.id) && !L(e));
      T.length && (M = !0);
      let E = T.filter((e) => e.category !== `story`);
      if (E.length <= 2)
        E.forEach((e, t) => {
          ke(6 + t * 1.8, () =>
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
        ke(6, () =>
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
                  e.category === `story` && e.id !== c && !ge(e.id) && Ce(e),
              )
              .sort((e, t) => (e.order ?? 0) - (t.order ?? 0))[0] ??
            d.get(s) ??
            null));
      let O = o.id === c && !!D && !f.has(D.id);
      if (D && D.id !== o.id)
        ne = { id: D.id, at: e.time.elapsed + (O ? 12 : 6.5), soft: !1 };
      else {
        let t = Qe(o.id);
        t && (ne = { id: t.id, at: e.time.elapsed + 7.5, soft: !0 });
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
            B(1.2))
          : l.notify(r, `info`, 3);
      let s = { id: o.id, reason: r, aborted: n === `aborted` };
      (e.events.emit(`mission:failed`, s),
        (te = { id: o.id, result: n, reason: r }));
    }
    Ge(!0);
  }
  function B(t) {
    O && ((O.from = e.time.real + t), (O.until = O.from + vj));
  }
  function Xe() {
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
  function Ze(e, t) {
    let n = m.get(e.id);
    return n
      ? ((D = e),
        (O = null),
        (ie = !1),
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
  function Qe(t) {
    let n = e.player.position,
      r = null,
      i = 1600;
    for (let e of u) {
      if (e.id === t || ge(e.id) || !Ce(e)) continue;
      let a = m.get(e.id);
      if (!a) continue;
      let o = Math.hypot(a.x - n.x, a.z - n.z) * (e.repeatable ? 1.6 : 1);
      o < i && ((i = o), (r = e));
    }
    return r;
  }
  function $e() {
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
  function et() {
    if (ge(c) || E || D) return;
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
      ((ie = !0), $e());
  }
  let tt = {
    name: `missions`,
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
      return ((Ee.found = y?.found ?? 0), Ee);
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
          e.id !== t && Se(e))
        )
          continue;
        let c = L(e);
        ((o.locked = !!c),
          (o.completed = ge(e.id) && !e.repeatable),
          (o.available = !c && (!t || t === e.id)),
          (o.status =
            E?.def.id === e.id
              ? `running`
              : D?.id === e.id
                ? `travel`
                : `idle`),
          (o.suggested = re === e.id),
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
      if (Se(r) && !n?.here)
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
      let a = L(r);
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
      if (he() > 0 && !n?.here)
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
        : Ze(r, {
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
          (l.missionTitle = null),
          l.setObjective(null),
          l.setWaypoint(null));
    },
    spawnCash(e, t, n) {
      x?.dropCash(e, t, n);
    },
    registerMission(e) {
      let t = oj(e);
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
        Ue(cj(e), !1);
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
          D?.id === e && tt.abort(),
          d.delete(e),
          p.delete(e),
          m.delete(e),
          u.splice(u.indexOf(t), 1),
          I.get(e)?.dispose(),
          I.delete(e),
          h.get(e)?.remove(),
          h.delete(e),
          l.removeBlip(`mission:${e}`),
          !0);
    },
    isCompleted: (e) => ge(e),
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
      let n = new Kk(e, t.who ?? `uncle`, t.x, t.z, t.heading ?? 0, fj(t));
      return (
        pj(e, n, t),
        (n.onRemove = () => {
          let e = ue.indexOf(n);
          e >= 0 && ue.splice(e, 1);
        }),
        ue.push(n),
        n
      );
    },
    preloadActors(t) {
      try {
        xk(e, t);
      } catch {}
    },
    setMarkersVisible(e) {
      _ && (_.group.visible = e);
    },
    async init() {
      (cE(e.quality, e.renderer.gl),
        e.events.on(`quality:changed`, () => cE(e.quality, e.renderer.gl)),
        (_ = new kE()),
        (v = new EO()),
        Ct(v.mesh),
        e.scene.add(_.group),
        e.scene.add(v.mesh),
        (y = new qi(e, l, _, v, t.collectibles, t.collectibleStyle)),
        (b = new _A(e, l, _, v, () => y?.remaining() ?? [])),
        (x = new EA(e, l, _, v, t.pickups)),
        (S = new GA(e, l, t.shops)),
        (C = new JA(e, l, _, t.dealers)));
      let n = performance.now();
      fe ??= Jk(e, [`ming`, `grandma`]);
      let r = await Promise.race([
        fe,
        new Promise((e) => setTimeout(() => e(!1), 4e3)),
      ]);
      (console.info(
        `[init] missions: actors ${r ? `Rocketbox` : `library`} ready in ${Math.round(performance.now() - n)}ms`,
      ),
        r ||
          fe.then((t) => {
            if (!t) return;
            let n = qk(e);
            e.renderer.compileRoots(n.roots).finally(() => n.dispose());
          }),
        e.events.on(`game:ready`, () => {
          (setTimeout(() => {
            (de?.(), (de = null));
          }, 500),
            !e.quality.mobile &&
              e.quality.level !== `low` &&
              setTimeout(() => Ie(() => $O(MO)), 3e3));
        }));
    },
    prewarm() {
      de?.();
      let t = qk(e);
      return (
        (de = t.dispose),
        A &&
          setTimeout(() => {
            de === t.dispose && (t.dispose(), (de = null));
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
          Ue(cj(e), !1);
        } catch (t) {
          console.error(`[missions] registerMission '${e.id}' failed`, t);
        }
      for (let e of u) He(e);
      for (let e of u) be(e);
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
        sidewalks: () => (w ??= new Vi(e.plan)),
        onBuy: (e) => n.onBuy(e),
        blessing: () => (n.blessing > 0 ? 1.1 : 1),
        bless: (e) => {
          n.blessing = Math.max(n.blessing, e);
        },
        fireworks: Ne,
        muteShops: (e) => n.mute(e),
      }),
        y.start(),
        b?.start(),
        gn(e),
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
        ((se = e.time.real), !r && ((r = !0), setTimeout(et, 1800)));
      });
      let i = e.params.get(`mission`);
      if (
        (i && ((Me = i), d.has(i) && z(i)),
        e.events.on(`time:day`, () => Ke()),
        ((e) => (window.requestIdleCallback ?? ((e) => setTimeout(e, 3e3)))(e))(
          () => {
            w ||= new Vi(e.plan);
          },
        ),
        e.params.has(`fwtest`) && setTimeout(() => Ne(745, 330, 200, 40), 500),
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
      ((Gk.animated = 0), (Gk.ms = 0));
      let r = e.player.position;
      if ((M && !E && Ge(!0), De.length)) {
        let t = e.time.elapsed,
          n = -1;
        if (t - Ae >= 1.8 && !Oe())
          for (let e = 0; e < De.length && n < 0; e++)
            De[e].toast && t >= De[e].at && (n = e);
        for (let e = De.length - 1; e >= 0; e--) {
          if (t < De[e].at) continue;
          if (De[e].toast) {
            if (e !== n) continue;
            Ae = t;
          }
          let r = De[e].fn;
          De.splice(e, 1);
          try {
            r();
          } catch (e) {
            console.warn(`[missions] delayed call failed`, e);
          }
        }
      }
      if (E) E.update(t);
      else {
        if (ne && e.time.elapsed >= ne.at && !Oe()) {
          let e = d.get(ne.id),
            t = ne.soft;
          if (((ne = null), e && t && !D && Ce(e))) {
            ((re = e.id), (M = !0));
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
              Ce(e) &&
              ((re = e.id),
              (M = !0),
              Ze(e, {
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
            he() > 0
              ? l.prompt(we)
              : l.promptIfFree(ot(D)) &&
                e.input.pressed(`interact`) &&
                !nt() &&
                qe(D));
        }
        if (O && a && !o && !D) {
          let t = e.time.real;
          O.until > 0 && t > O.until
            ? (O = null)
            : O.from > 0 &&
              t >= O.from &&
              ((o = !0),
              he() > 0
                ? l.prompt(we)
                : l.promptIfFree(at(O.def, O.step > 0)) &&
                  e.input.pressed(`interact`) &&
                  !nt() &&
                  Xe());
        }
        ie &&
          ((ae += t),
          ae > 1 &&
            ((ae = 0),
            ge(c) || D
              ? ((ie = !1), D || (l.setObjective(null), l.setWaypoint(null)))
              : l.objective || $e()));
        let s = !!e.interiors?.playerInside;
        if (a && !o && e.time.real - P > 2.5) {
          let t = n === `vehicle`,
            i = null,
            a = 1 / 0;
          for (let n of u) {
            let o = m.get(n.id),
              c = !F.has(n.id) && !!n.autoStart?.(e),
              u = c ? 16 : t ? 5 : s ? 1.2 : 2.4;
            if (!o || Math.abs(r.x - o.x) > u || Math.abs(r.z - o.z) > u)
              continue;
            let d = Math.hypot(r.x - o.x, r.z - o.z);
            if (d > u || !Ce(n)) continue;
            if (he() > 0) {
              (l.prompt(we), (i = null));
              break;
            }
            if (c) {
              if (se >= 0 && e.time.real - se > 1.5) {
                (qe(n), (i = null));
                break;
              }
              if (d > 2.4) continue;
            }
            let f = d + (ge(n.id) && !n.repeatable ? 1e3 : 0);
            f < a && ((a = f), (i = n));
          }
          i &&
            l.promptIfFree(ot(i)) &&
            e.input.pressed(`interact`) &&
            !nt() &&
            qe(i);
        }
      }
      if (((oe += t), oe > 0.5 && h.size)) {
        oe = 0;
        for (let [e, t] of h) {
          let n = m.get(e);
          n &&
            t.setVisible(
              Math.abs(r.x - n.x) + Math.abs(r.z - n.z) < gj * 1.3 &&
                Math.hypot(r.x - n.x, r.z - n.z) < gj,
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
          B(1.2)));
      for (let n = Te.length - 1; n >= 0; n--) {
        let r = Te[n];
        (r.update(t, e.renderer.height * e.renderer.pixelRatio, me),
          r.t > 45 && (r.dispose(), Te.splice(n, 1)));
      }
      for (let e of ce) e.update(t);
      for (let e = ue.length - 1; e >= 0; e--) ue[e]?.update(t);
      (Be(t),
        _.flush(e.camera),
        (l.log.length || E) && l.update(t, E ? `step: ${E.step}` : ``),
        (ee += (performance.now() - n - ee) * 0.05));
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
            tt.startMission(t, { here: !0 }))
          : !1;
      },
      state() {
        return {
          active: E?.snapshot() ?? (D ? { id: D.id, step: `travel` } : null),
          lastResult: te,
          money: e.state.money,
          waypoint: l.waypoint,
          blessing: S?.blessing ?? 0,
          cats: y ? `${y.found}/${y.total}` : ``,
          suggested: re,
          onboarding: ie,
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
        ms: +ee.toFixed(3),
        drawCalls: (_?.drawCalls ?? 0) + (v && v.count > 0 ? 1 : 0),
        markers: _?.count ?? 0,
        props: v?.count ?? 0,
        actors: I.size + ce.length + ue.length + (E?.actorCount ?? 0),
        actorDrawCalls: [
          ...I.values(),
          ...ce,
          ...ue,
          ...(E?.actorList ?? []),
        ].reduce(
          (e, t) =>
            e + (t.root.parent ? t.meshes.filter((e) => e.visible).length : 0),
          0,
        ),
        actorsAnimated: Gk.animated,
        actorMs: +Gk.ms.toFixed(3),
        actorBuildMs: +wk().toFixed(1),
        avatarFiles: ek(),
      }),
      log: () => l.log.slice(-30),
      actors() {
        return [...I.values(), ...(E?.actorList ?? []), ...ue, ...ce].map(
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
        let i = [...I.values(), ...(E?.actorList ?? []), ...ue, ...ce];
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
          ((m = new R(
            a.x - (e / n) * 1.1 + (t / n) * 0.55,
            a.y + 1.62,
            a.z - (t / n) * 1.1 - (e / n) * 0.55,
          )),
            (h = new R(o.x, s - 0.15, o.z)));
        } else
          ((m = new R(
            o.x + c * f + u * r * f,
            t === `body` ? o.y + 1.3 : s,
            o.z + l * f + d * r * f,
          )),
            (h = new R(o.x, p, o.z)));
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
        for (let e of le.splice(0)) e.remove();
        if (!_) return null;
        let o = mE(),
          s = e.plan.groundHeight(t, n),
          c = Math.ceil(o.length / r);
        (o.forEach((e, o) => {
          let l = t + ((o % r) - (r - 1) / 2) * i,
            u = a + 1.2 + (c - 1 - Math.floor(o / r)) * i;
          le.push(
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
            le.push(
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
        for (let e of le.splice(0)) e.remove();
        return !0;
      },
      clearGallery() {
        for (let e of ce) e.dispose();
        return ((ce.length = 0), !0);
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
          Object.keys(Zk)
            .slice(s, s + c)
            .forEach((o, s) => {
              let c = new Kk(
                e,
                Zk[o],
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
                ce.push(c));
            }),
          { props: l.length, actors: ce.length }
        );
      },
    },
  };
  function nt() {
    return e.player.controlEnabled === !1 || !!e.interiors?.busy || !!e.paused;
  }
  let rt = new Map();
  function at(e, t) {
    let n = `${e.id}|${+!!t}`,
      r = rt.get(n);
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
        rt.set(n, r)),
      r
    );
  }
  function ot(t) {
    let n = ge(t.id) && !t.repeatable,
      i = 12;
    try {
      i = e.env.hour;
    } catch {}
    let a = t.hours && t.skipTo !== void 0 && !YA(i, t.hours),
      o = `${t.id}|${+!!n}|${+!!a}`,
      s = pe.get(o);
    if (!s) {
      let e = n ? Math.round(t.reward * 0.25) : t.reward,
        i = a
          ? {
              zh: `（等到 ${hj(t.skipTo)}）`,
              en: ` (wait until ${hj(t.skipTo)})`,
              ja: `（${hj(t.skipTo)}まで待つ）`,
            }
          : { zh: ``, en: ``, ja: `` };
      ((s = {
        zh: `按 {interact} 開始「${t.title.zh}」${n ? `（重玩）` : ``}${i.zh}　${G(e)}${t.repeatable ? `＋獎金` : ``}`,
        en: `Press {interact}: ${t.title.en}${n ? ` (replay)` : ``}${i.en}   ${G(e)}${t.repeatable ? ` + bonus` : ``}`,
        ja: `{interact} で「${r(t.title)}」を開始${n ? `（リプレイ）` : ``}${i.ja}　${G(e)}${t.repeatable ? `＋ボーナス` : ``}`,
      }),
        pe.set(o, s));
    }
    return s;
  }
  return tt;
}
