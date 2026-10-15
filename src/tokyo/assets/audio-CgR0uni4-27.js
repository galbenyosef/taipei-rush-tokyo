// tokyo/assets/audio-CgR0uni4 27 — math
// Lines 12748-13269 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function Ki(e, t) {
  let i = e.params.get(`audio`) === `0`,
    o = [`low`, `medium`, `high`, `ultra`].includes(e.quality?.level)
      ? e.quality.level
      : `high`,
    s = !!e.quality?.mobile,
    c = new Br(o, s),
    l = () => e.state?.settings,
    u = new ri(),
    d = () => (e.state?.lang === `en` ? `en` : `zh`);
  ((u.onStart = (e, t) => c.duck(e, t)),
    (u.onEnd = () =>
      setTimeout(() => Gi(() => c.revive(performance.now(), !0)), 120)));
  let f = new bi(
      c.bank,
      () => (c.created ? c.ac : null),
      () => (c.created ? c.bus.music : null),
      {
        lang: () => (e.state?.lang === `en` ? `en` : `zh`),
        volume: () => {
          let e = l();
          return e ? e.masterVolume * e.musicVolume : 0.5;
        },
        staticSfx: () => c.play(`radio_static`, void 0, void 0, !1),
        loadIR: (e) => c.loadIR(`radio`, e),
        speech: u,
        running: () => c.running,
        mobile: s,
        defs: t?.stations,
      },
    ),
    p = [];
  ((c.findBody = (t, n) => {
    let r = e.vehicles?.playerVehicle;
    if (r && Math.hypot(r.body.x - t, r.body.z - n) < 8) return r.body;
    let i = null,
      a = 64,
      o = e.dynamics?.query?.(t, n, 8, p, (e) => e.kind === `vehicle`) ?? 0;
    for (let e = 0; e < o; e++) {
      let r = p[e],
        o = (r.x - t) ** 2 + (r.z - n) ** 2;
      o < a && ((a = o), (i = r));
    }
    return i;
  }),
    (c.onRunning = () => {
      (c.bank.releaseIRs(), Gi(() => e.events.emit(`audio:unlocked`)));
    }));
  let m = () =>
      c.created
        ? !0
        : (ne(),
          _(),
          c.create()
            ? (Qn(c.ac),
              c.bank.whenReady(`noise/pink`, () => Gi(() => c.prebuildPool())),
              !0)
            : !1),
    h = typeof navigator < `u` ? navigator.audioSession : void 0,
    g = ``,
    _ = () => {
      if (!h) return;
      let e = l(),
        t =
          c.volumes.master > 0 &&
          e?.playInSilentMode !== !1 &&
          !(typeof document < `u` && document.hidden)
            ? `playback`
            : `auto`;
      if (t !== g || h.type !== t)
        try {
          ((h.type = t), (g = t));
        } catch {}
    },
    v = (t, r = {}) => {
      if (i || !t || e.paused || (typeof document < `u` && document.hidden))
        return !1;
      let a = l(),
        o = (r.volume ?? 1) * (a ? a.masterVolume * a.sfxVolume : 0.7);
      if (r.x !== void 0 && r.z !== void 0 && Number.isFinite(r.x + r.z)) {
        let e = Math.hypot(r.x - c.lx, (r.y ?? c.ly) - c.ly, r.z - c.lz),
          t = r.maxDist ?? 60;
        if (e > t) return !1;
        o *= Math.min(1, 1.15 * (1 - e / t));
      }
      if (o < 0.04) return !1;
      let s = r.priority ?? 5,
        f = r.duck ?? (s >= 7 ? 0.35 : 0);
      if (
        (r.lang === void 0 || r.lang === `ui`) &&
        e.state?.lang === `ja` &&
        u.has(`ja`)
      ) {
        let e = (typeof t == `string` ? n(t) : (t.ja ?? n(t.zh)))
          ?.replace(/（.*?）|\(.*?\)/g, ``)
          .trim();
        if (e)
          return u.speak(
            e,
            {
              lang: `ja`,
              priority: s,
              volume: Math.min(1, o),
              rate: r.rate ?? 1.05,
              pitch: r.pitch ?? 1,
              channel: r.channel ?? `game`,
              minGap: r.minGap ?? 0,
            },
            f,
          );
      }
      let p = r.lang === `en` ? `en` : r.lang === `zh` ? `zh` : d(),
        m = typeof t == `string` ? t : p === `en` && t.en ? t.en : t.zh;
      return (
        typeof t != `string` && p === `en` && !t.en && (p = `zh`),
        p === `en` &&
          typeof t != `string` &&
          !u.has(`en`) &&
          ((p = `zh`), (m = t.zh)),
        (m = m.replace(/（.*?）|\(.*?\)/g, ``).trim()),
        u.speak(
          m,
          {
            lang: p,
            priority: s,
            volume: Math.min(1, o),
            rate: r.rate ?? 1.05,
            pitch: r.pitch ?? 1,
            channel: r.channel ?? `game`,
            minGap: r.minGap ?? 0,
          },
          f,
        )
      );
    },
    y = new Fi(e, c, f, o);
  t?.attach?.({ eng: c, radio: f, director: y, speech: u });
  let b = new r(),
    x = 0,
    S = e.params.get(`radio`),
    C = 0,
    w = 0,
    T = 0,
    E = 0,
    D = 0,
    ee = 0,
    te = !1,
    O = {
      avgMs: 0,
      maxMs: 0,
      maxDirector: 0,
      maxRadio: 0,
      maxLate: 0,
      avgDirector: 0,
      avgRadio: 0,
      avgLate: 0,
      maxListener: 0,
      over1: 0,
      over2: 0,
      frames: 0,
    },
    ne = () => {
      let e = l();
      e && c.setVolumes(e.masterVolume, e.musicVolume, e.sfxVolume);
    },
    k = {
      name: `audio`,
      alwaysUpdate: !0,
      get stations() {
        return f.stations;
      },
      get station() {
        return f.station;
      },
      get nowPlaying() {
        return f.active ? f.nowPlaying : null;
      },
      get unlocked() {
        return c.running;
      },
      unlock() {
        if (!i)
          try {
            if (!m()) return;
            (_(), c.resume(!0));
          } catch (e) {
            console.warn(`[audio] unlock failed`, e);
          }
      },
      play(e, t) {
        if (!i)
          try {
            e === `footstep` && t && t.x !== void 0 && t.z !== void 0
              ? y.footstep(t.x, t.y ?? 0, t.z, t.volume ?? 1, !0)
              : e === `gunshot` && t?.rate !== void 0 && t.rate >= 1.7
                ? c.play(`backfire`, {
                    ...t,
                    rate: 1,
                    volume: Math.min(1, (t.volume ?? 1) * 4),
                  })
                : e === `explosion` &&
                    t &&
                    (t.y ?? 0) > 45 &&
                    (t.rate ?? 1) < 0.85
                  ? c.play(`firework_boom`, {
                      ...t,
                      rate: 0.9 + (t.rate ?? 0.65) * 0.2,
                      volume: Math.min(1.2, (t.volume ?? 1) * 1.6),
                    })
                  : e === `firecracker` && t && (t.y ?? 0) > 45
                    ? c.play(`firework_crackle`, t)
                    : c.play(e, t);
          } catch {}
      },
      loop(e, t) {
        if (i || e === `ambient_market`) return Vi;
        try {
          let n = e;
          return (
            n === `engine_bus` &&
              t?.rate !== void 0 &&
              t.rate < 0.7 &&
              (t.y ?? 0) > 12 &&
              (n = `helicopter`),
            c.loop(n, t, !1)
          );
        } catch {
          return Vi;
        }
      },
      say(e, t) {
        try {
          return v(e, t);
        } catch {
          return !1;
        }
      },
      setIndoor(e, t) {
        i || Gi(() => c.setIndoor(e, t ?? `room`, !0));
      },
      setStation(e) {
        Gi(() => f.setStation(Number.isFinite(e) ? e : -1));
      },
      nextStation() {
        ((y.radioNextFrame = e.time.frame), Gi(() => f.next()));
      },
      setRadioActive(e) {
        Gi(() => f.setActive(!!e || S !== null));
      },
      setVolumes(e, t, n) {
        Gi(() => {
          (c.setVolumes(e, t, n), _());
        });
      },
      duck(e, t = 2) {
        Gi(() => c.duck(e, t));
      },
      debug: null,
      async init() {
        if (!i) {
          c.bank.start();
          try {
            m();
          } catch (e) {
            console.warn(`[audio] context failed`, e);
          }
          for (let t = 0; t < 8 && !te; t++)
            ((te = f.prewarm()), await e.yieldFrame());
        }
      },
      start() {
        if (i) return;
        A();
        let t = (e) => {
          if (document.hidden || !c.needsResume) return;
          let t = e.pointerType;
          (e.type === `pointerdown`
            ? t !== `mouse`
            : e.type === `pointerup` && t === `mouse`) || k.unlock();
        };
        if (
          (window.addEventListener(`pointerdown`, t, !0),
          window.addEventListener(`pointerup`, t, !0),
          window.addEventListener(`keydown`, t, !0),
          window.addEventListener(`touchend`, t, !0),
          document.addEventListener(`visibilitychange`, () => {
            c.created &&
              (document.hidden ? (c.suspend(), _()) : (_(), c.resume()));
          }),
          e.params.has(`autoplay`) && k.unlock(),
          S !== null)
        ) {
          let e = Number(S);
          (f.setStation(Number.isFinite(e) ? e : 0), f.setActive(!0));
        }
      },
      update(t) {
        if (i) return;
        let n = performance.now();
        ((c.frame = e.time.frame),
          c.watch(n),
          c.beginFrame(x > 0 ? n - x : 33.333333333333336, t),
          (x = n),
          c.bank.stats.mode === `main` && c.bank.pump(e.paused ? 8 : 3),
          y.update(t));
        let r = performance.now();
        (!te &&
          c.bank.ready &&
          !f.active &&
          e.time.frame % 4 == 0 &&
          (te = f.prewarm()),
          f.update());
        let a = performance.now();
        (r - n > O.maxDirector && (O.maxDirector = r - n),
          a - r > O.maxRadio && (O.maxRadio = a - r),
          (T += r - n),
          (E += a - r),
          (ee = a - n));
      },
      lateUpdate() {
        if (i) return;
        let t = performance.now();
        if (c.tick) {
          let n = e.camera;
          n.getWorldDirection(b);
          let r = n.position.x,
            i = n.position.y,
            a = n.position.z,
            o = e.player?.position;
          if (o) {
            let e = o.x - r,
              t = o.y + 1.6 - i,
              n = o.z - a;
            e * e + t * t + n * n < 900 &&
              ((r += e * 0.55), (i += t * 0.55), (a += n * 0.55));
          }
          c.setListener(r, i, a, b.x, b.y, b.z, c.tickDt);
          let s = performance.now() - t;
          s > O.maxListener && (O.maxListener = s);
        }
        c.updateLoops();
        let n = performance.now() - t;
        (n > O.maxLate && (O.maxLate = n),
          (D += n),
          (ee += n),
          ee > O.maxMs && (O.maxMs = ee),
          O.frames++,
          ee > 1 && O.over1++,
          ee > 2 && O.over2++,
          (C += ee),
          (ee = 0),
          ++w >= 60 &&
            ((O.avgMs = C / w),
            (O.avgDirector = T / w),
            (O.avgRadio = E / w),
            (O.avgLate = D / w),
            (C = T = E = D = 0),
            (w = 0)));
      },
    };
  function A() {
    let n = e.events,
      r = {
        on(e, t) {
          n.on(e, (e) => Gi(() => t(e)));
        },
      },
      i = (e, t, n = 0) => c.play(e, t, void 0, !1, n),
      a = (e) => (e ? { x: e.x, y: e.y, z: e.z } : void 0);
    (r.on(`wanted:changed`, ({ level: e, prev: t }) => {
      (e > 0 &&
        (c.bank.wantSfx(`busted`),
        c.bank.wantSfx(`wanted_lost`),
        c.bank.wantSfx(`police_megaphone`),
        c.bank.wantSfx(`police_squelch`)),
        e > t ? i(`wanted_up`) : e === 0 && t > 0 && i(`wanted_lost`));
    }),
      r.on(`money:changed`, ({ delta: e }) => {
        e > 0 && i(e >= 50 ? `money` : `coin`);
      }),
      r.on(`mission:started`, () => i(`mission_start`)),
      r.on(`mission:completed`, () => i(`mission_pass`)),
      r.on(`mission:failed`, () => i(`mission_fail`)),
      r.on(`player:died`, () => {
        (i(`wasted`), c.shock(1.15, 4.5));
      }),
      r.on(`player:busted`, () => {
        (i(`busted`), c.shock(0.7, 3));
      }),
      r.on(`ui:bigMessage`, (e) =>
        c.duck(0.55, Math.min(6, e?.duration ?? 3)),
      ));
    let o = (t, n) => {
      let r;
      try {
        r =
          e.vehicles?.get?.(t) ??
          (e.vehicles?.playerVehicle?.id === t
            ? e.vehicles.playerVehicle
            : void 0);
      } catch {}
      return typeof r?.spec?.twoWheeler == `boolean`
        ? r.spec.twoWheeler
        : n === `scooter` || Hi(n) || Ui(n);
    };
    (r.on(`player:enterVehicle`, ({ vehicleId: t, kind: n }) => {
      let r = e.vehicles?.playerVehicle,
        s = r ? { x: r.body.x, y: 1, z: r.body.z } : a(e.player?.position),
        c = String(n ?? ``),
        l = o(t, c);
      l || i(`car_door`, s);
      let u =
        r?.electric === !0 || Ui(c)
          ? `ev_start`
          : l
            ? Hi(c)
              ? `motorcycle_start`
              : `scooter_start`
            : `car_start`;
      (i(u, s, l ? 0.1 : 0.45), f.setActive(!0));
    }),
      r.on(`player:exitVehicle`, ({ vehicleId: t, kind: n }) => {
        (o(t, String(n ?? ``)) || i(`car_door`, a(e.player?.position)),
          S === null && f.setActive(!1));
      }),
      r.on(`vehicle:collision`, ({ pos: e, impulse: t }) => {
        let n = c.externalPlays,
          r = c.frame;
        if (n.get(`crash_light`) === r || n.get(`crash_heavy`) === r) return;
        let o = Number.isFinite(t) ? t : 0,
          s = { ...a(e), volume: Math.min(1.2, 0.5 + o / 14) };
        o > 9
          ? (i(`crash_heavy`, s), o > 14 && i(`glass`, s))
          : o > 2.5 && i(`crash_light`, s);
      }),
      r.on(`vehicle:destroyed`, ({ pos: e }) => i(`explosion`, a(e))),
      r.on(`player:attack`, ({ weapon: t, pos: n }) => {
        let r = a(n) ?? a(e.player?.position);
        t === `pistol`
          ? i(`gunshot`, { ...r, rate: 1.04 })
          : t === `smg`
            ? i(`gunshot`, { ...r, rate: 1.22, volume: 0.85 })
            : i(`punch_whoosh`, r);
      }),
      r.on(`fireworks`, ({ x: t, y: n, z: r, duration: a }) => {
        if ((y.wantFireworks(), typeof e.landmarks?.fireworks == `function`))
          return;
        let o = Math.max(3, Math.round(a * 1.3));
        for (let s = 0; s < o; s++) {
          let l = (s / o) * a + Math.random() * 0.6,
            u = t + (Math.random() - 0.5) * 40,
            d = r + (Math.random() - 0.5) * 40,
            f = n + Math.random() * 60,
            p = Math.random() < 0.3;
          y.schedule(l, () =>
            i(p ? `firework_whistle` : `firework_launch`, {
              x: u,
              y: p ? 40 : 5,
              z: d,
            }),
          );
          let m = p ? 1.9 : 1.3 + Math.random() * 0.4;
          y.schedule(l + m, () => {
            let t = Math.hypot(u - c.lx, f - c.ly, d - c.lz);
            (c.externalPlays.get(`firework_boom`) ?? -1e9) >
              e.time.frame - 120 ||
              (i(`firework_boom`, { x: u, y: f, z: d }, t / 343),
              Math.random() < 0.45 &&
                i(
                  `firework_crackle`,
                  { x: u, y: f - 10, z: d },
                  t / 343 + 0.25,
                ));
          });
        }
      }),
      t ||
        r.on(`mrt:travel`, ({ to: t }) => {
          let n = e.plan?.mrtStations?.find((e) => e.id === t);
          if (!n) return;
          let r = `${n.name.zh.replace(/\s*[/／]\s*/g, `，`)}到了。`,
            i = `Arriving at ${n.name.en.replace(/\s*[/／]\s*/g, `, `)}.`;
          y.schedule(0.35, () =>
            v(r, {
              lang: `zh`,
              priority: 7,
              volume: 0.85,
              channel: `mrt`,
              duck: 0.3,
            }),
          );
          let a = [...n.name.zh].length / 4.4 + 1.1;
          y.schedule(0.35 + a, () =>
            v(i, {
              lang: `en`,
              priority: 6,
              volume: 0.8,
              channel: `mrt`,
              duck: 0.3,
            }),
          );
        }),
      r.on(`game:pause`, ({ paused: e }) => {
        (c.setWorldPaused(e), e && u.cancel());
      }),
      r.on(`settings:changed`, ({ key: e }) => {
        ((e === `masterVolume` || e === `musicVolume` || e === `sfxVolume`) &&
          ne(),
          (e === `masterVolume` || e === `playInSilentMode`) && _());
      }),
      r.on(`quality:changed`, ({ level: e }) => {
        c.hrtf = e === `ultra`;
      }));
  }
  return (
    (y.setRadioActive = (e) => k.setRadioActive(e)),
    (k.debug = a(e, c, f, y, O, u, () => h?.type ?? null)),
    e.params.get(`audiodebug`) &&
      k.debug.overlay(e.params.get(`audiodebug`) === `spectro`),
    k
  );
}
