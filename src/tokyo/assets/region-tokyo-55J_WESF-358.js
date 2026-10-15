// tokyo/assets/region-tokyo-55J_WESF 358 — math
// Lines 130206-131083 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Uje(e) {
  let t = e.plan,
    n = Rl(t),
    i = e.params.get(`trains`) !== `0`,
    a = null,
    o = () => {
      let n = e.params.get(`spawn`);
      if (n) {
        let [e, t] = n.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(t)) return { x: e, z: t };
      }
      let r = e.state.data.pos;
      return r && Number.isFinite(r.x) && Number.isFinite(r.z)
        ? { x: r.x, z: r.z }
        : t.spawns.start;
    },
    s = n ? new XAe(e, n, () => a, o) : null,
    c = null,
    l = e.region.signage.fonts.sans,
    u = (t) => e.t(t),
    d = new Set(
      n?.m.platforms
        .filter((e) => e.rideable && e.line === `JY`)
        .map((e) => e.id) ?? [],
    ),
    f = new cje(t.mrtStations),
    p = (e) => [`JY`, `G`, `H`, `M`].indexOf(String(e.line)),
    m = t.mrtStations
      .filter((e) =>
        e.line === `JY`
          ? d.has(e.id) && f.opOf(e.id) === `jr`
          : f.opOf(e.id) === `metro`,
      )
      .slice()
      .sort(
        (e, t) => p(e) - p(t) || String(e.code).localeCompare(String(t.code)),
      ),
    h = (n?.entrances.list ?? []).filter((e) =>
      m.some((t) => t.id === e.stationId),
    );
  for (let e = 0; e < m.length; e++) {
    let t = h.find((t) => t.stationId === m[e].id);
    t && (m[e] = { ...m[e], ex: t.x, ez: t.z, eh: t.heading + Math.PI });
  }
  let g = new Map(m.map((e) => [e.id, e])),
    _ = n?.entrances.obstacles ?? [],
    v = (e) => n?.m.platforms.find((t) => t.id === e),
    y = { track: null },
    b = { t: 0, track: ``, dir: `in`, dirKey: `` },
    x = [],
    S = [];
  n && Wje(n, t.mrtStations, x, S);
  let C = [],
    w = { x: 0, z: 0 },
    T = (t, n, r, i) => {
      let a = e.player?.position;
      if (
        (t.corridor.path.pos(t.sc, (t.o0 + t.o1) / 2, w),
        !i && (!a || (a.x - w.x) ** 2 + (a.z - w.z) ** 2 > QX * QX))
      )
        return;
      let o = UY(t),
        s = {
          stationId: t.id,
          line: t.line,
          track: o[t.tracks[0] === n ? 0 : 1],
          x: w.x,
          y: t.y,
          z: w.z,
          lead: r,
          ride: i,
        };
      i &&
        setTimeout(
          () => E(`mrt_door_chime`, { ui: !0, volume: 0.45 }),
          Math.max(0, r * 1e3),
        );
      for (let e of C)
        try {
          e(s);
        } catch (e) {
          console.warn(`[transit] melody hook failed`, e);
        }
      try {
        e.events.emit(`transit:melody`, s);
      } catch {}
    },
    E = (t, n) => {
      try {
        e.audio.play(t, n ?? { ui: !0 });
      } catch {}
    },
    D = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    O = (e) => new Promise((t) => setTimeout(t, e * 1e3)),
    k = (t) => e.money.format(t, { currency: `JPY`, style: `tight` }),
    A = (e, t = 18e4) =>
      new Promise((n) => {
        let r = performance.now(),
          i = () =>
            e() || performance.now() - r > t ? n() : setTimeout(i, 50);
        i();
      }),
    ee = (e) => {
      let n = g.get(e) ?? t.mrtStations.find((t) => t.id === e);
      return {
        zh: n?.name.zh ?? e,
        en: n?.name.en ?? e,
        ja: n?.name.ja ?? n?.name.zh ?? e,
        code: n?.code ?? ``,
      };
    },
    M = new Map(),
    te = (e) => {
      let n = M.get(e);
      if (!n) {
        let r = g.get(e) ?? t.mrtStations.find((t) => t.id === e);
        M.set(
          e,
          (n = {
            ja: r?.name.ja ?? r?.name.zh ?? e,
            en: r?.name.en ?? e,
            code: r?.code ?? ``,
          }),
        );
      }
      return n;
    },
    ne = null,
    re = () =>
      (ne ??= {
        next: HY(`transit.lcd.next`, `次は`),
        soon: HY(`transit.lcd.soon`, `まもなく`),
        stop: HY(`transit.lcd.stopping`, `ただいま`),
      }),
    ie = !1,
    ae = (t) => {
      if (t !== ie) {
        ie = t;
        try {
          e.ui.setExternalMenu?.(t);
        } catch {}
      }
    },
    oe = !1,
    se = 1,
    ce = (t) => {
      if (t !== oe) {
        oe = t;
        try {
          t
            ? ((se = e.env.timeScale), (e.env.timeScale = 0))
            : e.env.timeScale === 0 && (e.env.timeScale = se);
        } catch {}
      }
    },
    le = (t) => {
      try {
        e.player.setControlEnabled(t);
      } catch {}
    },
    ue = null,
    de = !1,
    fe = ``,
    pe = 0,
    me = !1,
    he = new Map(),
    ge = { zh: `通緝中 · 無法搭車`, en: `Wanted — can't ride` },
    _e = (e) => {
      if (D() > 0) return ge;
      let t = he.get(e.stationId);
      if (!t) {
        let n = ee(e.stationId);
        ((t =
          e.op === `jr`
            ? {
                zh: r.on
                  ? r.t(
                      `按 {interact} 搭乘 JR 山手線 · ${n.zh}`,
                      `{interact} で JR山手線に乗る · ${r.jz(n.zh)}`,
                    )
                  : `按 {interact} 搭乘 JR 山手線 · ${n.zh}`,
                en: `Press {interact} to ride the JR Yamanote Line · ${n.en}`,
              }
            : {
                zh: r.on
                  ? r.t(
                      `按 {interact} 搭乘 東京地下鐵 · ${n.zh}`,
                      `{interact} で 東京メトロに乗る · ${r.jz(n.zh)}`,
                    )
                  : `按 {interact} 搭乘 東京地下鐵 · ${n.zh}`,
                en: `Press {interact} to ride the Tokyo Metro · ${n.en}`,
              }),
          he.set(e.stationId, t));
      }
      return t;
    },
    ve = (e, t, n) => {
      let r = ``,
        i = 1 / 0;
      for (let a of m) {
        if (n && f.opOf(a.id) !== n) continue;
        for (let n of h) {
          if (n.stationId !== a.id) continue;
          let o = (n.x - e) ** 2 + (n.z - t) ** 2;
          o < i && ((i = o), (r = a.id));
        }
        let o = (a.x - e) ** 2 + (a.z - t) ** 2;
        o < i && ((i = o), (r = a.id));
      }
      return r;
    },
    ye = (e) => h.find((t) => t.stationId === e) ?? null,
    be = (t, n) => {
      if (!g.has(n)) return { zh: `沒有這個車站`, en: `Unknown station` };
      if (t === n) return { zh: `您已在此站`, en: `You're already here` };
      if (D() > 0)
        return {
          zh: `通緝中，車站有警察盯著！先甩掉警察。`,
          en: `You're wanted — cops are watching the station. Lose them first.`,
        };
      let r = f.plan(t, n);
      return r
        ? e.money.canAfford(r.fare, `JPY`)
          ? null
          : { zh: `IC卡餘額不足`, en: `Not enough money for the fare` }
        : { zh: `無法規劃路線`, en: `No route` };
    },
    xe = new mje(
      {
        t: u,
        lang: () => e.state.lang,
        money: () => e.money.balance(`JPY`),
        sfx: (e) => E(e),
        device: () => e.input.device,
        wanted: D,
        name: ee,
        ride: (t) =>
          be(fe, t) ||
          (e.input.isTouch || e.input.lockPointer(), Be(fe, t), null),
        close: () => De(!0),
      },
      f,
      l,
    ),
    Se = new hje(l),
    Ce = new gje(l),
    we = ``,
    Te = new zje({
      ctx: e,
      fleet: () => c,
      platform: (e) => v(e),
      exit: (e) => ye(e),
      begin: () =>
        !de &&
        ((de = !0),
        xe.isOpen && De(!1),
        ae(!0),
        ce(!0),
        le(!1),
        (Oe = ye(we)),
        !0),
      end: () => {
        ((Oe = null),
          N(!1),
          ce(!1),
          (de = !1),
          ae(!1),
          le(!0),
          e.input.isTouch || e.input.lockPointer());
      },
      hidePlayer: (e) => N(e),
      lcd: Se,
      nameLcd: (e) => te(e),
      lcdLabels: () => re(),
      lcdLoop: (e) => HY(e ? `transit.lcd.loop.in` : `transit.lcd.loop.out`),
      lcdDoors: () => HY(`transit.lcd.doors.right`, `右側のドアが開きます`),
      lineColor: IY.JY,
      melody: (e, t, n) => T(e, t, n, !0),
      ahead: (t, n) => {
        (e.buildings?.ensureResident?.(t, n),
          s?.residency.ensureResident(t, n));
      },
      ensureResident: (t, n) =>
        Promise.all([
          Promise.resolve(e.districts?.ensureResident?.(t, n)),
          s ? s.residency.ensureResident(t, n) : null,
        ]),
      t: u,
      refuse: () => {
        if (de || xe.isOpen)
          return { zh: `正在搭車中`, en: `Already on a trip` };
        if (D() > 0)
          return {
            zh: `通緝中，車站有警察盯著！先甩掉警察。`,
            en: `You're wanted — cops are watching the station. Lose them first.`,
          };
        let t = `foot`;
        try {
          t = e.player.mode;
        } catch {}
        return t === `vehicle`
          ? { zh: `請先下車`, en: `Get out of the vehicle first` }
          : null;
      },
      jpFont: l,
    });
  function Ee(t) {
    if (de || xe.isOpen) return;
    let n = e.player.position,
      r = t ?? ue?.stationId ?? ve(n.x, n.z, null);
    r &&
      f.opOf(r) &&
      ((fe = r),
      le(!1),
      ae(!0),
      ce(!0),
      e.input.unlockPointer(),
      E(`ui_confirm`),
      xe.open(r),
      (pe = 0.3),
      (me = !0));
  }
  function De(t) {
    xe.isOpen &&
      (xe.close(),
      de ||
        (ce(!1),
        le(!0),
        t && !e.input.isTouch && e.input.lockPointer(),
        ae(!1)));
  }
  let Oe = null,
    ke = null,
    Ae = !1,
    je = null,
    Me = 0,
    Ne = [],
    Pe = new j(),
    Fe = new j(),
    Ie = new j(),
    Le = new j(),
    Re = -1,
    ze = !1,
    N = (t) => {
      if (t !== ze) {
        ze = t;
        try {
          e.player.object.visible = !t;
        } catch {}
      }
    };
  async function Be(t, n) {
    if (de) return;
    let i = f.plan(t, n);
    if (!i) return;
    ((de = !0), ae(!0), ce(!0), De(!1), le(!1));
    let a = 12;
    try {
      a = e.env.hour;
    } catch {}
    let o = ye(n);
    Oe = o;
    try {
      if (
        (E(`coin`, { ui: !0, volume: 0.8 }),
        !e.money.spend(i.fare, `JPY`, `transit`))
      )
        throw Error(`fare refused`);
      try {
        e.state.stat(`mrt_rides`);
      } catch {}
      let s = o
        ? Promise.resolve(e.districts?.ensureResident?.(o.x, o.z)).catch(
            () => {},
          )
        : Promise.resolve();
      if (!(
        i.op === `jr` &&
        c &&
        !e.params.has(`noride`) &&
        (await Ve(t, n))
      )) {
        await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {});
        let t = i.legs.reduce((e, t) => e + t.stops.length - 1, 0),
          n = { next: HY(`transit.lcd.next`, `次は`) },
          a = u({
            zh: r.on
              ? r.t(
                  `${i.legs.map((e) => e.line.name.zh).join(` → `)} · 車資 ${k(i.fare)}`,
                  `${i.legs.map((e) => r.jz(e.line.name.zh)).join(` → `)} · 運賃 ${k(i.fare)}`,
                )
              : `${i.legs.map((e) => e.line.name.zh).join(` → `)} · 車資 ${k(i.fare)}`,
            en: `${i.legs.map((e) => e.line.name.en).join(` → `)} · Fare ${k(i.fare)}`,
          });
        (E(`mrt_door_chime`, { ui: !0, volume: 0.6 }),
          await Ce.play(i, te, Math.max(3, Math.min(7, 1.5 + t * 0.8)), a, n));
      }
      try {
        let t = a + i.minutes / 60;
        e.env.setHour(((t % 24) + 24) % 24);
      } catch {}
      (o &&
        (await Promise.race([s, O(8)]),
        e.player.teleport(o.x, o.z, o.heading + Math.PI, 0.15)),
        Ce.close(),
        N(!1));
      try {
        (e.cameraRig.override(null),
          e.cameraRig.snapBehind?.(o ? o.heading + Math.PI : void 0));
      } catch {}
      try {
        e.ui.setHudVisible(!0);
      } catch {}
      (await O(0.15), Promise.resolve(e.ui.fade(0, 0.7)).catch(() => {}));
      let l = ee(n);
      try {
        e.ui.notify(
          {
            zh: r.on
              ? r.t(
                  `抵達 ${l.zh} · 車資 ${k(i.fare)}`,
                  `${r.jz(l.zh)}に到着 · 運賃 ${k(i.fare)}`,
                )
              : `抵達 ${l.zh} · 車資 ${k(i.fare)}`,
            en: `Arrived at ${l.en} · Fare ${k(i.fare)}`,
          },
          { kind: `info`, duration: 3 },
        );
      } catch {}
      e.events.emit(`mrt:travel`, { from: t, to: n });
    } catch (t) {
      console.error(`[transit] travel failed`, t);
      try {
        (e.cameraRig.override(null), e.ui.setHudVisible(!0));
      } catch {}
      Promise.resolve(e.ui.fade(0, 0.3)).catch(() => {});
    } finally {
      ((Oe = null), He(), Ce.close(), N(!1), ce(!1), (de = !1), ae(!1), le(!0));
    }
  }
  async function Ve(t, n) {
    let r = v(t),
      i = v(n);
    if (!c || !r || !i) return !1;
    await Promise.resolve(e.ui.fade(1, 0.35)).catch(() => {});
    let a = f.jyDir(t, n),
      o = c.startRide(r, i, a);
    if (!o) return !1;
    ((ke = { from: t, to: n }), (Ae = !1), (Re = -1), (Me = 0), N(!0));
    try {
      e.ui.setHudVisible(!1);
    } catch {}
    let s = c.route(r, i, a),
      l = s ? s.track.dir > 0 : i.sc > r.sc,
      d = [r, ...(s?.stops ?? [i])];
    Ne = d.map((e) => e.id);
    let p =
      e.input.device === `gamepad`
        ? `A`
        : e.input.device === `touch`
          ? u({ zh: `點擊`, en: `Tap` })
          : `E`;
    Se.open(
      IY.JY,
      `JY`,
      d.map((e) => te(e.id)),
      `<kbd>${p}</kbd>${u({ zh: `跳過`, en: `Skip` })}`,
      HY(`transit.lcd.doors.right`, `右側のドアが開きます`),
      HY(l ? `transit.lcd.loop.in` : `transit.lcd.loop.out`),
      () => {
        c?.rideState.active && c.rideState.t > 1.5 && (Ae = !0);
      },
    );
    try {
      ((je = e.audio.loop(`mrt_train`, { volume: 0.55 }) ?? null),
        e.audio.duck(0.5, 1.5));
    } catch {}
    return (
      qe(0),
      Promise.resolve(e.ui.fade(0, 0.6)).catch(() => {}),
      await A(() => Ae || !c.rideState.active || c.rideDone, (o + 20) * 1e3),
      await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {}),
      Se.close(!0),
      He(),
      !0
    );
  }
  function He() {
    if (ke || c?.rideState.active) {
      ((ke = null), c?.endRide(), Se.close(!0));
      try {
        je?.stop();
      } catch {}
      je = null;
    }
  }
  let Ue = null,
    We = () =>
      (Ue ??=
        typeof matchMedia == `function`
          ? matchMedia(`(max-height:560px)`)
          : null)?.matches ?? !1,
    Ge = { d: 0, v: 0, phase: 0 },
    Ke = { x: 0, z: 0 };
  function qe(t) {
    if (!c || !ke) return;
    let n = c.rideState,
      r = c.rideProfile;
    if (!n.active || !r) return;
    try {
      e.player.teleport(n.x, n.z, n.heading, n.deck + 0.05);
    } catch {}
    r.at(n.t, Ge);
    let i = r.track,
      a = r.dir;
    if (((Me -= t), Me <= 0)) {
      Me = 1;
      for (let t of Hje) {
        let n = r.s(Math.min(r.D, Ge.d + t));
        (i.corridor.path.pos(n, 0, Ke),
          e.buildings?.ensureResident?.(Ke.x, Ke.z),
          s?.residency.ensureResident(Ke.x, Ke.z));
      }
    }
    let o = r.s(Ge.d),
      l = n.t < Vje,
      u = +!l;
    if (l && n.stopped) {
      let e = n.stopped,
        t = (e.o0 + e.o1) / 2,
        r = i.off.at(o);
      (i.corridor.path.pos(o - a * 36, t + (r < t ? -0.35 : 0.35), Ke),
        Pe.set(Ke.x, e.y + 1.62, Ke.z),
        i.corridor.path.pos(o - a * 6, r, Ke),
        Fe.set(Ke.x, i.y.at(o) + 2.1, Ke.z));
    } else {
      (i.corridor.path.pos(o - a * 0.7, i.off.at(o), Ke),
        Pe.set(Ke.x, i.y.at(o) + 2.55, Ke.z));
      let e = r.s(Ge.d + 45);
      (i.corridor.path.pos(e, i.off.at(e), Ke),
        Fe.set(Ke.x, i.y.at(e) + (We() ? 0.8 : 1.9), Ke.z));
    }
    u === Re
      ? (Ie.copy(Pe), Le.lerp(Fe, Math.min(1, t * 6)))
      : (Ie.copy(Pe), Le.copy(Fe), (Re = u));
    try {
      e.cameraRig.override(Ie, Le);
    } catch {}
    let d = re();
    if (n.stopped) {
      let e = Ne.indexOf(n.stopped.id);
      e === 0
        ? Se.set(`next`, te(Ne[1] ?? n.stopped.id), 1, d)
        : Se.set(`stop`, te(n.stopped.id), Math.max(0, e), d);
    } else if (n.next) {
      let e = Ne.indexOf(n.next.id),
        t = i.dir > 0 ? n.next.s1 - 2 : n.next.s0 + 2;
      Se.set(
        Math.abs(t - o) < 150 ? `soon` : `next`,
        te(n.next.id),
        Math.max(0, e),
        d,
      );
    }
    try {
      (je?.setPosition(n.x, n.y + 1.5, n.z), je?.setParam(`speed`, n.v));
    } catch {}
    n.t > 1.5 &&
      (e.input.pressed(`interact`) || e.input.pressed(`jump`)) &&
      !document.getElementById(`tk-choice`) &&
      (Ae = !0);
  }
  function Je() {
    let t = e.params.get(`drive`);
    if (!t) return;
    let [n, r] = t.split(`:`),
      i = e.params.get(`timetable`) ?? `tutorial`,
      a = !1,
      o = () => {
        if (!a) {
          if (((a = !0), !e.params.has(`hour`)))
            try {
              e.env.setHour(
                { tutorial: 14, rush: 8.08, late: 22.67, shuden: 0.25 }[i] ??
                  14,
              );
            } catch {}
          Ye.drive({
            from: n,
            to: r,
            timetable: i,
            coach: e.params.get(`coach`) === `1` || i === `tutorial`,
          }).then((e) => console.info(`[drive] result`, JSON.stringify(e)));
        }
      };
    (e.events.on(`player:spawned`, () => setTimeout(o, 1500)),
      e.events.on(`game:ready`, () => setTimeout(o, 6e3)));
  }
  let Ye = {
    name: `transit`,
    stations: m,
    entrances: h,
    obstacles: _,
    mapLines: x,
    mapStations: S,
    get traveling() {
      return de;
    },
    get pickerOpen() {
      return xe.isOpen;
    },
    get nearStation() {
      return ue ? (g.get(ue.stationId) ?? null) : null;
    },
    get ride() {
      if (Te.driving) return Te.view();
      let e = c?.rideState;
      return ke && e?.active
        ? { from: ke.from, to: ke.to, x: e.x, z: e.z, v: e.v }
        : null;
    },
    drive(e) {
      return ((we = e.to), Te.drive(e));
    },
    async travelTo(t) {
      if (de) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n === `vehicle`) {
        try {
          e.ui.notify(
            {
              zh: `請先下車再搭車`,
              en: `Get out of the vehicle to ride the train`,
            },
            { kind: `bad` },
          );
        } catch {}
        return;
      }
      let r = f.opOf(t),
        i = e.player.position,
        a = ue && f.opOf(ue.stationId) === r ? ue.stationId : ve(i.x, i.z, r),
        o = be(a, t);
      if (o) {
        try {
          e.ui.notify(o, { kind: `bad` });
        } catch {}
        return;
      }
      await Be(a, t);
    },
    openPicker(e) {
      Ee(e);
    },
    closePicker() {
      De(!0);
    },
    fare(e, t) {
      return f.plan(e, t)?.fare ?? 0;
    },
    nextTrain(e) {
      let t = v(e);
      return t && c ? c.nextTrain(t) : 1 / 0;
    },
    nextArrival(e) {
      let t = v(e);
      if (!t || !c || t.line !== `JY`) return null;
      let n = c.nextTrain(t, y);
      if (!(n < 1 / 0) || !y.track) return null;
      let r = t.tracks[0] === y.track ? 0 : 1,
        i = b;
      return (
        (i.t = n),
        (i.track = UY(t)[r]),
        (i.dir = r === 0 ? `in` : `out`),
        (i.dirKey = `transit.dir.${i.dir}.${t.id}`),
        i
      );
    },
    onMelody(e) {
      C.push(e);
    },
    onPackBuilt(e) {
      s?.onPackBuilt(e);
    },
    onPackDropped(e) {
      s?.onPackDropped(e);
    },
    unbuiltNear(e, t, n) {
      return !!s && s.residency.unbuiltNear(e, t, n);
    },
    onArrival(e) {
      s?.residency.onArrival(e);
    },
    ensureResident(e, t, n) {
      return s ? s.residency.ensureResident(e, t, n) : Promise.resolve();
    },
    residency() {
      let e = {};
      if (!s) return e;
      for (let [t, n] of Object.entries(s.residency.state())) e[t] = n;
      return e;
    },
    async init() {
      if (!n || !s) return;
      let r = performance.now(),
        l = Math.max(0.5, Math.min(1, e.quality.textureScale ?? 0.75)),
        u = e.region.signage.fontsReady;
      u && (await Promise.race([u.catch(() => !1), O(4)]));
      let d = e.quality.maxSignTextureSize ?? e.quality.maxTextureSize ?? 4096,
        f = Math.min(
          l < 0.75 ? 4 : 8,
          e.renderer.gl?.capabilities?.getMaxAnisotropy?.() ?? 4,
        ),
        p = () => {
          try {
            a = new SAe(UAe(t, n), e.region.signage.fonts, l, d, f);
          } catch (e) {
            console.warn(`[transit] atlas failed`, e);
          }
        };
      p();
      try {
        document.fonts?.addEventListener?.(`loadingdone`, (e) => {
          if (!(e.fontfaces ?? []).some((e) => /Tokyo Sans JP/i.test(e.family)))
            return;
          let t = a;
          (p(), s.refreshMaterials(), t?.tex.dispose());
        });
      } catch {}
      (e.loading(`transit: atlas`, 0.15),
        await e.yieldFrame(),
        i && ((c = new aje(e, n.m, T)), e.scene.add(c.mesh)));
      let m = { x: 0, z: 0 },
        g = { x: 0, z: 0, tx: 0, tz: 1 };
      e.statics.beginGroup();
      for (let t of n.m.corridors)
        if (t.id === `jr-main`)
          for (let n = t.path.s0 - 30; n <= t.path.s1 + 30; n += 12)
            (t.path.at(n, g),
              t.path.pos(n, (t.edge0.at(n) + t.edge1.at(n)) / 2, m),
              e.statics.addFloor(
                m.x,
                m.z,
                12,
                12,
                t.deck.at(n),
                t.deck.at(n),
                Math.atan2(g.tx, -g.tz),
                `viaduct`,
              ));
      (e.statics.endGroup(),
        e.loading(`transit: trains`, 0.25),
        await s.init((t) => e.loading(`transit: viaduct`, 0.25 + t * 0.35)));
      let _ = o();
      await s.buildNow(_.x, _.z, (t) =>
        e.loading(`transit: near`, 0.6 + t * 0.4),
      );
      let v = s.stats();
      console.info(
        `[init] transit ${Math.round(performance.now() - r)}ms (atlas ${a?.px.join(`×`) ?? `-`}; ${s.keys.length} rail tiles; far ${v[`rail-far`]?.resident ?? 0} / near ${v[`rail-near`]?.resident ?? 0} resident; ${h.length} entrances; ${c ? c.snapshot().services.length : 0} train services)`,
      );
    },
    start() {
      (e.events.on(`game:ready`, () => s?.residency.start()),
        e.state.onBeforeSave(() => {
          Oe &&
            (e.state.data.pos = {
              x: Oe.x,
              z: Oe.z,
              heading: Math.round((Oe.heading + Math.PI) * 100) / 100,
              y: 0.15,
            });
        }));
      let t = () => {
        xe.isOpen && De(!1);
      };
      (e.events.on(`player:died`, t),
        e.events.on(`player:busted`, t),
        Je(),
        typeof window < `u` &&
          (window.__transitTokyo = {
            stats: () => ({ structure: s?.stats(), trains: c?.snapshot() }),
            trains: () => c?.snapshot(),
            seek: (e, t, n) => c?.seek(e, t, n),
            state: () => s?.residency.state(),
            anchors: () => s?.residency.anchors(),
            log: s?.residency.log,
            ride: (e, t) => Be(e, t),
            rideHold: (e) => (
              c && (c.rideHold = e),
              c?.rideProfile ? { T: c.rideProfile.T, D: c.rideProfile.D } : null
            ),
            rideAt: () =>
              c?.rideState.active
                ? {
                    x: c.rideState.x,
                    z: c.rideState.z,
                    y: c.rideState.y,
                    t: c.rideState.t,
                  }
                : null,
            drive: (e) => Ye.drive(e),
            entrances: () =>
              h.map((e) => ({
                id: e.stationId,
                op: e.op,
                x: +e.x.toFixed(1),
                z: +e.z.toFixed(1),
                h: +e.heading.toFixed(2),
              })),
            scene: n,
          }));
    },
    update(t) {
      if (
        (s?.residency.update(t),
        Te.driving && Te.update(t),
        c && c.update(t, e.camera.position, e.camera.far),
        ke && qe(t),
        xe.isOpen)
      ) {
        let n = e.input;
        pe -= t;
        let r = n.axis(`moveX`),
          i = n.axis(`moveY`),
          a = Math.abs(r) < 0.4 && Math.abs(i) < 0.4;
        (a && (me = !1),
          a
            ? (pe = Math.min(pe, 0))
            : pe <= 0 &&
              !me &&
              (Math.abs(r) > Math.abs(i)
                ? xe.nav(Math.sign(r), 0)
                : xe.nav(0, -Math.sign(i)),
              (pe = 0.24)),
          e.input.device === `gamepad` &&
          (n.pressed(`jump`) || n.pressed(`interact`))
            ? xe.confirm()
            : (n.pressed(`sprint`) || n.pressed(`pause`)) && xe.cancel());
      }
      if (((ue = null), de || xe.isOpen)) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n !== `foot`) return;
      let r = e.player.position,
        i = 16;
      for (let e = 0; e < h.length; e++) {
        let t = h[e],
          n = t.x - r.x,
          a = t.z - r.z,
          o = n * n + a * a;
        o < i && Math.abs(r.y - 0.15) < 3 && ((i = o), (ue = t));
      }
      if (ue) {
        try {
          e.ui.prompt(_e(ue));
        } catch {}
        e.input.pressed(`interact`) && D() === 0 && Ee(ue.stationId);
      }
    },
    prewarm() {
      return s ? s.prewarm() : [];
    },
  };
  return Ye;
}
