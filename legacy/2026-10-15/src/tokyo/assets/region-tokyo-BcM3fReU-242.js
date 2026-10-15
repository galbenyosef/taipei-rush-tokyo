// tokyo/assets/region-tokyo-BcM3fReU 242 — math
// Lines 96891-97699 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function t1(e) {
  let t = e.params.get(`audio`) === `0`,
    n = !!e.quality?.mobile,
    r = e.quality?.level === `low`,
    i = null,
    a = null,
    o = null,
    s = null,
    c = {
      spoken: 0,
      skipped: 0,
      melodies: 0,
      pa: 0,
      passes: 0,
      ms: 0,
      maxMs: 0,
      frames: 0,
      avgMs: 0,
    },
    l = Ed(e.time, e.params),
    u = ``,
    d = 0,
    f = 0,
    p = (n, r = {}) => {
      let a = i,
        s = o;
      if (!a || !s || !n || t || !s.ja) return (c.skipped++, !1);
      if (e.paused || (typeof document < `u` && document.hidden)) return !1;
      let l = e.state?.settings,
        u = (r.volume ?? 1) * (l ? l.masterVolume * l.sfxVolume : 0.7);
      if (r.x !== void 0 && r.z !== void 0 && Number.isFinite(r.x + r.z)) {
        let e = Math.hypot(r.x - a.lx, (r.y ?? a.ly) - a.ly, r.z - a.lz),
          t = r.maxDist ?? 60;
        if (e > t) return !1;
        u *= Math.min(1, 1.15 * (1 - e / t));
      }
      if (u < 0.04) return !1;
      let d = r.priority ?? 5,
        f = s.speak(
          n.replace(/（.*?）|\(.*?\)/g, ``).trim(),
          {
            lang: `ja`,
            priority: d,
            volume: Math.min(1, u),
            rate: r.rate ?? 1,
            pitch: r.pitch ?? 1,
            channel: r.channel ?? `game`,
            minGap: r.minGap ?? 0,
          },
          r.duck ?? (d >= 7 ? 0.35 : 0),
        );
      return (f ? c.spoken++ : c.skipped++, f);
    },
    m = (t, n) => {
      let r = o,
        i = e.state?.settings;
      return !r || !t || e.paused
        ? !1
        : r.speak(
            t,
            {
              lang: `en`,
              priority: n.priority,
              volume: Math.min(
                1,
                n.volume * (i ? i.masterVolume * i.sfxVolume : 0.7),
              ),
              rate: 1,
              pitch: 1,
              channel: n.channel,
              minGap: 0,
            },
            0.3,
          );
    },
    h = (e, t) => a?.schedule(e, t),
    g = (e) => e.length / 7.5 + 0.6,
    _ = Math.random,
    v = 0,
    y = (e, t) => {
      let n = a?.hour ?? 12;
      switch (e) {
        case `passby_scooter`:
          return _() < 0.12
            ? e
            : ((t.volume = (t.volume ?? 1) * 0.75), `passby_car`);
        case `passby_car`:
          return ((t.volume = (t.volume ?? 1) * 0.8), e);
        case `horn_scooter`:
        case `horn_car`:
          return _() < 0.18 ? e : null;
        case `bird_chirp`:
          return _() < (n < 8 || (n > 15.5 && n < 19) ? 0.45 : 0.12)
            ? ((t.y = (t.y ?? 1) + 10), (t.volume = 0.7 + 0.3 * _()), `tk_crow`)
            : e;
        case `distant_siren`:
          return `tk_siren_far`;
        case `temple_bell`:
        case `temple_drum`:
          return `tk_suzu`;
        case `vendor_call`:
          return o?.ja
            ? ((v = (v + 1 + Math.floor(_() * 3)) % 6),
              p(rc(`audio.town.market.${v + 1}`).ja, {
                x: t.x,
                y: t.y,
                z: t.z,
                maxDist: 32,
                priority: 2,
                volume: 0.7,
                rate: 1.12,
                pitch: _() < 0.5 ? 0.8 : 1.1,
                channel: `market`,
                minGap: 5,
              }),
              null)
            : e;
        case `wood_fish`:
        case `firecracker`:
        case `mahjong`:
        case `loudspeaker_vendor`:
          return null;
      }
      return e;
    },
    b = e.plan.dataset.water.at,
    x = [
      [25, 1],
      [60, 0.75],
      [110, 0.45],
    ],
    S = (e, t) => {
      if (!b) return 0;
      if (b(e, t)) return 1;
      let n = 0;
      for (let [r, i] of x) {
        let a = 0;
        for (let n = 0; n < 8; n++)
          b(
            e + Math.cos((n * Math.PI) / 4) * r,
            t + Math.sin((n * Math.PI) / 4) * r,
          ) && a++;
        n = Math.max(n, Math.min(1, (a / 3) * i));
      }
      return n;
    },
    C = null,
    w = () => {
      let e = i;
      e &&
        (e.play(`tk_yuyake`, { volume: 1 }, void 0, !1),
        c.melodies++,
        h(30, () =>
          p(rc(`audio.town.five`).ja, {
            priority: 3,
            volume: 0.45,
            rate: 0.9,
            pitch: 1.05,
            channel: `town`,
            minGap: 60,
          }),
        ));
    },
    T = (e) => {
      if ((e === 17 && w(), (e === 6 || e === 12 || e === 18) && C && i)) {
        let e = C;
        if (Math.hypot(e.x - i.lx, e.z - i.lz) > 900) return;
        for (let t = 0; t < 3; t++)
          h(t * 6, () =>
            i?.play(
              `temple_bell`,
              { x: e.x, y: 14, z: e.z, volume: 0.9 },
              void 0,
              !1,
            ),
          );
      }
    },
    E = () => e.transit,
    D = [],
    O = (e) => {
      let t = parseInt(String(e.code ?? ``).replace(/\D/g, ``), 10) || 0;
      return t >= 20 ? t - 31 : t;
    },
    k = new Map(),
    A = (e) => {
      let t = i;
      if (!t) return;
      let n = X$(e.stationId, e.track);
      if (e.ride) {
        let t = (e) => {
          i?.running
            ? i.play(`dept_melody`, { ui: !0, volume: 0.3 }, n, !1, 0, 1)
            : e > 0 && h(0.25, () => t(e - 1));
        };
        (t(8),
          h(Math.max(0.2, e.lead) + 0.4, () =>
            p(rc(`audio.ann.doors-train`).ja, {
              priority: 6,
              volume: 0.7,
              channel: `train`,
            }),
          ));
        return;
      }
      if (!t.running) return;
      let r = Math.hypot(e.x - t.lx, e.z - t.lz);
      r > 220 ||
        (c.melodies++,
        t.play(
          `dept_melody`,
          { x: e.x, y: e.y + 3.5, z: e.z, volume: 0.95 },
          n,
          !1,
        ),
        t.play(
          `mrt_door_chime`,
          { x: e.x, y: e.y + 3, z: e.z, volume: 0.9 },
          void 0,
          !1,
          Math.max(0, e.lead),
        ),
        r < 90 &&
          h(Math.max(0, e.lead) + 1.6, () =>
            p(ic(`audio.ann.doors`, { n: e.track }), {
              x: e.x,
              y: e.y + 3,
              z: e.z,
              maxDist: 100,
              priority: 4,
              volume: 0.6,
              channel: `station`,
              minGap: 8,
            }),
          ));
    },
    j = { on: !1, from: ``, to: ``, seq: [], idx: 0, moving: !1, done: !1 },
    ee = () => {
      let e = E()?.ride ?? null;
      if (!e) {
        j.on &&= !1;
        return;
      }
      if (!j.on || j.from !== e.from || j.to !== e.to) {
        let t = D.find((t) => t.id === e.from),
          n = D.find((t) => t.id === e.to);
        if (
          ((j.on = !0),
          (j.from = e.from),
          (j.to = e.to),
          (j.idx = 0),
          (j.moving = !1),
          (j.done = !1),
          (j.seq = []),
          t && n)
        ) {
          let e = O(t),
            r = O(n),
            i = r > e ? 1 : -1;
          j.seq = D.filter(
            (t) => (O(t) - e) * i >= 0 && (r - O(t)) * i >= 0,
          ).sort((e, t) => (O(e) - O(t)) * i);
        }
      }
      if (j.seq.length && !j.done) {
        if (!j.moving && e.v > 3) {
          j.moving = !0;
          let e = j.seq[j.idx + 1];
          if (!e) return;
          let t = ic(`transit.ann.next`, { name: e.name.ja ?? e.name.zh });
          p(t, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 });
          let n = ac(`transit.ann.next`, { name: e.name.en }).en;
          h(g(t), () => m(n, { priority: 6, volume: 0.75, channel: `train` }));
        } else if (
          j.moving &&
          e.v < 0.3 &&
          e.atStation !== null &&
          ((j.moving = !1), j.idx++, j.idx >= j.seq.length - 1)
        ) {
          j.done = !0;
          let e = j.seq[j.seq.length - 1],
            t = ic(`transit.ann.arrive`, { name: e.name.ja ?? e.name.zh });
          (p(t, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 }),
            h(g(t), () =>
              m(ac(`transit.ann.arrive`, { name: e.name.en }).en, {
                priority: 6,
                volume: 0.75,
                channel: `train`,
              }),
            ));
        }
      }
    },
    te = { to: ``, at: -1e9 },
    ne = ({ to: t }) => {
      if (j.to === t && e.time.real - te.at < 30) return;
      let n =
        E()?.stations?.find((e) => e.id === t) ??
        e.plan.mrtStations.find((e) => e.id === t);
      n &&
        h(0.4, () => {
          let e = ic(`transit.ann.arrive`, { name: n.name.ja ?? n.name.zh });
          (p(e, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 }),
            h(g(e), () =>
              m(ac(`transit.ann.arrive`, { name: n.name.en }).en, {
                priority: 6,
                volume: 0.75,
                channel: `train`,
              }),
            ));
        });
    },
    N = null,
    re = new M(),
    ie = [0, 1].map(() => ({
      loop: null,
      x: 0,
      y: 0,
      z: 0,
      inst: -1,
      cx: 0,
      cz: 0,
      speed: 0,
      on: !1,
    })),
    ae = 0,
    oe = (e) => {
      let t = i,
        n = N;
      if (!n || E()?.ride) {
        for (let e of ie) e.on = !1;
        return;
      }
      let r = t.lx,
        a = t.lz,
        o = re.elements,
        s = n.instanceCount,
        c = -1,
        l = 25600;
      for (let e = 0; e < s; e++) {
        try {
          if (!n.getVisibleAt(e)) continue;
          n.getMatrixAt(e, re);
        } catch {
          continue;
        }
        let t = (o[12] - r) ** 2 + (o[14] - a) ** 2;
        t < l && ((c = e), (l = t));
      }
      let u = -1;
      if (c >= 0) {
        n.getMatrixAt(c, re);
        let e = o[12],
          t = o[14],
          i = Math.hypot(o[8], o[10]) || 1,
          l = o[8] / i,
          d = o[10] / i,
          f = 25600;
        for (let i = 0; i < s; i++) {
          if (i === c) continue;
          try {
            if (!n.getVisibleAt(i)) continue;
            n.getMatrixAt(i, re);
          } catch {
            continue;
          }
          let s = o[12],
            p = o[14],
            m = (s - r) ** 2 + (p - a) ** 2;
          m >= f ||
            (Math.abs((s - e) * d - (p - t) * l) > 3 && ((u = i), (f = m)));
        }
      }
      (se(ie[0], c, e), se(ie[1], u, e));
    },
    se = (e, t, n) => {
      let r = N,
        a = i;
      if (t < 0) {
        e.on = !1;
        return;
      }
      r.getMatrixAt(t, re);
      let o = re.elements,
        s = o[12],
        l = o[13],
        u = o[14],
        d = o[8],
        f = o[10],
        p = Math.hypot(d, f) || 1;
      ((d /= p), (f /= p));
      let m = J$((a.lx - s) * d + (a.lz - u) * f, -9.5, 9.5),
        h = s + d * m,
        g = u + f * m;
      (e.inst === t &&
        n > 0 &&
        (e.speed +=
          (Math.min(40, Math.hypot(s - e.cx, u - e.cz) / n) - e.speed) * 0.5),
        (e.inst = t),
        (e.cx = s),
        (e.cz = u),
        (e.x = h),
        (e.y = l + 1.2),
        (e.z = g),
        e.on || c.passes++,
        (e.on = !0));
    },
    ce = (e) => {
      for (let t of ie) {
        if (!t.on) {
          t.loop &&
            (t.loop.setVolume(Math.max(0, t.loop.state.vol - e * 1.2)),
            t.loop.state.vol <= 0 && (t.loop.stop(), (t.loop = null)));
          continue;
        }
        (t.loop ||
          ((t.loop = i.loop(`mrt_train`, { x: t.x, y: t.y, z: t.z }, !0)),
          t.loop.setVolume(0)),
          t.loop.setPosition(t.x, t.y, t.z),
          t.loop.setParam(`speed`, t.speed),
          t.loop.setVolume(
            Math.min(0.85, t.loop.state.vol + e * 1.5) *
              (t.speed < 0.5 ? 0.35 : 1),
          ));
      }
    },
    P = 0,
    le = 0,
    ue = [],
    de = -1e9,
    fe = new Map(),
    pe = (t) => {
      let n = i,
        r = e.time.real,
        s = a?.hour ?? 12;
      if (t === 0) {
        f$.quiet = s >= 21 || s < 7;
        let t = l();
        ((v$.day = t.cicadas ? `amb/amb_park_day` : `amb/tk_park_day`),
          (v$.night = t.mushi
            ? `amb/tk_mushi`
            : t.frogs
              ? `amb/amb_park_night`
              : `amb/tk_shrine`),
          s >= 16.75 && s < 17.1 && n.bank.wantSfx(`tk_yuyake`),
          C &&
            (s % 6 > 5.85 || s % 6 < 0.05) &&
            Math.hypot(C.x - n.lx, C.z - n.lz) < 900 &&
            n.bank.wantSfx(`temple_bell`),
          e.player?.mode === `foot` &&
            (n.bank.wantSfx(`tk_piyo`), n.bank.wantSfx(`tk_kakko`)));
      } else if (t === 1) {
        let e = E();
        for (let t of D) {
          let i = Math.hypot(t.x - n.lx, t.z - n.lz);
          if (
            i > 320 ||
            (n.bank.wantSfx(X$(t.id, `1`)),
            n.bank.wantSfx(X$(t.id, `2`)),
            n.bank.wantSfx(`tk_door`),
            n.bank.wantSfx(`tk_pa`),
            i > 110 || e?.ride || !e?.nextTrain)
          )
            continue;
          let a = e.nextArrival?.(t.id) ?? null,
            o = a ? a.t : e.nextTrain(t.id);
          if (o > 22 || o < 6 || r - (k.get(t.id) ?? -1e9) < 75) continue;
          (k.set(t.id, r), c.pa++);
          let s =
            a && oc(a.dirKey)
              ? ic(`transit.ann.mamonaku`, { n: a.track, to: rc(a.dirKey).ja })
              : rc(`audio.ann.mamonaku`).ja;
          ((u = s),
            n.play(`tk_pa`, { x: t.x, y: 10, z: t.z, volume: 0.8 }, void 0, !1),
            h(1.7, () =>
              p(s, {
                x: t.x,
                y: 10,
                z: t.z,
                maxDist: 120,
                priority: 4,
                volume: 0.55,
                channel: `station`,
                minGap: 20,
              }),
            ));
        }
      } else if (t === 2) (ee(), j.on && (te = { to: j.to, at: r }));
      else if (t === 3) {
        let t = e.player;
        if (!t || t.mode !== `foot` || !o?.ja) return;
        r - de > 10 &&
          ((de = r),
          (ue = e.plan.pois.filter((e) => e.kind === `convenience`)));
        let n = t.position.x,
          i = t.position.z;
        for (let e of ue)
          (e.x - n) ** 2 + (e.z - i) ** 2 > 12 ||
            r < (fe.get(e.id) ?? 0) ||
            (fe.set(e.id, r + 45),
            h(0.6, () =>
              p(rc(`audio.town.irasshai`).ja, {
                x: e.x,
                y: 1.6,
                z: e.z,
                maxDist: 14,
                priority: 2,
                volume: 0.55,
                pitch: 1.15,
                rate: 1.1,
                channel: `shop`,
                minGap: 6,
              }),
            ));
      } else t === 4 && be(r, s);
    },
    me = null,
    he = 30,
    ge = new Set([`ginza`, `marunouchi`]),
    _e = new Set([`ginza`, `nihonbashi`, `ueno`, `ameyoko`]),
    ve = new Set(),
    ye = (t, n) => {
      try {
        return e.plan.districtAt(t, n).id;
      } catch {
        return ``;
      }
    },
    be = (t, n) => {
      let r = i,
        a = l(),
        s =
          e.player?.mode === `foot` ||
          e.vehicles?.playerVehicle?.kind === `mamachari`,
        c = ye(r.lx, r.lz);
      a.hinoyojin && n > 19.2 && n < 22 && r.bank.wantSfx(`tk_hyoshigi`);
      let u = me;
      if (u) {
        let e = Math.min(1, t - u.last);
        u.last = t;
        let n = t - u.t0;
        if (u.kind === `watch` || n % 40 < 28) {
          let t = u.kind === `yakiimo` ? 2.2 : 1.1;
          ((u.x += u.dx * t * e), (u.z += u.dz * t * e));
        }
        if (t >= u.next) {
          let e = (u.line++ % 2) + 1,
            n = u.x,
            i = u.z;
          u.kind === `yakiimo`
            ? (p(rc(`audio.town.yakiimo.${e}`).ja, {
                x: n,
                y: 2.4,
                z: i,
                maxDist: 170,
                priority: 3,
                volume: 0.85,
                rate: 0.62,
                pitch: 0.8,
                channel: `seller`,
                minGap: 6,
              }),
              (u.next = t + 9 + 4 * _()))
            : (r.play(
                `tk_hyoshigi`,
                { x: n, y: 1.4, z: i, volume: 1 },
                void 0,
                !1,
              ),
              h(1.3, () =>
                p(rc(`audio.town.hinoyojin.${e}`).ja, {
                  x: n,
                  y: 1.6,
                  z: i,
                  maxDist: 90,
                  priority: 2,
                  volume: 0.75,
                  rate: 0.75,
                  pitch: 0.9,
                  channel: `seller`,
                  minGap: 4,
                }),
              ),
              (u.next = t + 7 + 3 * _()));
        }
        (n > 120 || Math.hypot(u.x - r.lx, u.z - r.lz) > 260) &&
          ((me = null), (he = t + 180 + 240 * _()));
      } else if (
        t >= he &&
        s &&
        o?.ja &&
        !ge.has(c) &&
        (Number(e.env?.rain) || 0) < 0.4
      ) {
        let i =
          a.yakiimo && n >= 15 && n < 20.5
            ? `yakiimo`
            : a.hinoyojin && n >= 19.5 && n < 22
              ? `watch`
              : null;
        if (((he = t + 30), i)) {
          let n = _() * Math.PI * 2,
            a = e.plan.nearestLink(
              r.lx + Math.cos(n) * 110,
              r.lz + Math.sin(n) * 110,
            );
          if (a) {
            let e = _() < 0.5 ? 1 : -1;
            me = {
              kind: i,
              x: a.link.sx + a.link.dx * a.s,
              z: a.link.sz + a.link.dz * a.s,
              dx: a.link.dx * e,
              dz: a.link.dz * e,
              t0: t,
              last: t,
              next: t + 1,
              line: 0,
            };
          }
        }
      }
      if (!_e.has(c) || n < 19.6 || n >= 20) return;
      r.bank.wantSfx(`tk_hotaru`);
      let d = `${e.time.date.m}/${e.time.date.d}:${c}`;
      if (n < 19.8 || !s || ve.has(d)) return;
      ve.add(d);
      let f = _() * Math.PI * 2,
        m = r.lx + Math.cos(f) * 22,
        g = r.lz + Math.sin(f) * 22;
      (r.play(`tk_hotaru`, { x: m, y: 3, z: g, volume: 0.9 }, void 0, !1),
        h(25, () =>
          p(rc(`audio.town.closing`).ja, {
            x: m,
            y: 3,
            z: g,
            maxDist: 50,
            priority: 3,
            volume: 0.6,
            rate: 0.95,
            pitch: 1.15,
            channel: `store`,
            minGap: 60,
          }),
        ));
    },
    xe = {
      name: `audio-tokyo`,
      alwaysUpdate: !0,
      stations: q$(Z$),
      attach(t) {
        ((i = t.eng),
          (a = t.director),
          (o = t.speech),
          $$(),
          (s = new d$(t.eng.bank, n, r)),
          (t.eng.bank.ext = s.take),
          (t.eng.bank.requestRadio = s.needs),
          C$(t.speech));
        let c = t.director;
        ((c.remap = y), (c.riverAt = S), (c.busyD = e1));
        let l = c.timers;
        ((l.mahjong = l.cracker = l.vendorTruck = l.truckCool = 1 / 0),
          (c.marketsOpen = () => c.hour >= 9.5 && c.hour < 20),
          (c.onHour = T),
          (C =
            e.plan.landmarks.find((e) => e.id === `bentendo`) ??
            e.plan.landmarks.find((e) => e.kind === `temple`) ??
            null));
      },
      wrap(e) {
        if (t) return e;
        let n = e.play.bind(e);
        e.play = (e, t) => {
          (e === `horn_scooter` &&
            t &&
            t.x !== void 0 &&
            t.z !== void 0 &&
            we(t.x, t.z) &&
            (e = `bike_bell`),
            n(e, t));
        };
        let r = e.say?.bind(e);
        return (
          (e.say = (e, t) => {
            if (t?.lang === `ja`) {
              let n = typeof e == `string` ? e : e.ja;
              return n ? p(n, t) : !1;
            }
            return t?.lang === `zh` ? !1 : r ? r(e, t) : !1;
          }),
          (e.canSay = (e) => (e === `ja` ? !!o?.ja : e !== `zh` && !!r)),
          e
        );
      },
      start() {
        if (t) return;
        let n = E();
        ((D = (n?.stations ?? [])
          .filter((e) => e.line === `JY`)
          .slice()
          .sort((e, t) => O(e) - O(t))),
          n?.onMelody ? n.onMelody(A) : e.events.on(`transit:melody`, A),
          e.events.on(`mrt:travel`, ne),
          (N = e.scene.getObjectByName(`transit-trains`) ?? null),
          Te(),
          typeof window < `u` &&
            (window.__audioTokyo = {
              stats: () => ({
                ...c,
                lastPa: u,
                synth: s?.stats,
                ja: o?.ja ? `${o.ja.name} (${o.ja.lang})` : null,
                passes: ie.map((e) =>
                  e.on ? `${e.speed.toFixed(1)} m/s` : `-`,
                ),
                quiet: f$.quiet,
                park: { ...v$ },
                rover: me
                  ? { kind: me.kind, x: Math.round(me.x), z: Math.round(me.z) }
                  : null,
                closed: [...ve],
              }),
              say: (e) => p(e, { priority: 8 }),
              play: (e, t = 0) => i?.play(e, { ui: !0 }, void 0, !1, 0, t),
              melody: (e, t = 0) =>
                i?.play(`dept_melody`, { ui: !0 }, o$[e] ?? o$[0], !1, 0, t),
              chime: w,
              voices: () =>
                typeof speechSynthesis < `u`
                  ? speechSynthesis
                      .getVoices()
                      .filter((e) => /^ja/i.test(e.lang))
                      .map((e) => `${e.name} (${e.lang})`)
                  : [],
            }));
      },
      update(e) {
        let n = i;
        if (t || !n || !n.created) return;
        if (!n.running) {
          if (((le += e), le >= 0.25)) {
            le = 0;
            try {
              ee();
            } catch (e) {
              Ce(e);
            }
          }
          return;
        }
        let r = performance.now();
        if (((le += e), le >= 0.05)) {
          le = 0;
          try {
            pe(P);
          } catch (e) {
            Ce(e);
          }
          P = (P + 1) % 5;
        }
        if (((ae += e), ae >= 0.25)) {
          try {
            oe(ae);
          } catch (e) {
            Ce(e);
          }
          ae = 0;
        }
        n.tickB && ce(n.tickDtB);
        let a = performance.now() - r;
        (a > c.maxMs && (c.maxMs = a),
          (d += a),
          ++f >= 120 && ((c.avgMs = +(d / f).toFixed(4)), (d = 0), (f = 0)),
          c.frames++);
      },
    },
    Se = !1,
    Ce = (e) => {
      Se || ((Se = !0), console.warn(`[audio:tokyo]`, e));
    },
    we = (t, n) => {
      let r = e.vehicles?.playerVehicle;
      return r && Math.hypot(r.body.x - t, r.body.z - n) < 4
        ? r.kind === `mamachari`
        : i?.findBody?.(t, n)?.userData?.kind === `mamachari`;
    },
    Te = () => {
      e.events.on(`ped:line`, (e) => {
        if (!o?.ja || !oc(`peds.bubble.${e.id}`)) return;
        let t = rc(`peds.bubble.${e.id}`),
          n = t.ja.includes(`！`),
          r = e.seed;
        p(t.ja, {
          x: e.x,
          y: e.y,
          z: e.z,
          maxDist: n ? 26 : 16,
          priority: n ? 3 : 2,
          volume: n ? 0.8 : 0.55,
          pitch: e.female ? 1.25 + r * 0.15 : 0.8 + r * 0.15,
          rate: n ? 1.2 : 1.05,
          channel: `peds`,
          minGap: 3.5,
        });
      });
    };
  return xe;
}
