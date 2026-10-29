// tokyo/assets/tokyo-CqLdAwml 32 — bank
// Lines 13199-13581 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function ss(t, n, r, i, a, o, s) {
  let c = null,
    l = (e) => Mt(`radio`, e, n.bank, n.quality),
    u = {
      get engine() {
        return n;
      },
      get director() {
        return i;
      },
      stats() {
        let e = n.bank.stats;
        return {
          state: n.created ? n.ac.state : `none`,
          sampleRate: n.created ? n.ac.sampleRate : 0,
          baseLatency: n.created ? +(n.ac.baseLatency ?? 0).toFixed(4) : 0,
          session: s?.() ?? null,
          mobile: n.mobile,
          bank: {
            buffers: n.bank.size,
            mb: +(e.bytes / 1048576).toFixed(1),
            mode: e.mode,
            errors: e.errors,
            workerMs: Math.round(e.workerMs),
            readyAfterMs: e.doneAt ? Math.round(e.doneAt - e.startedAt) : null,
            ...n.bank.memStats(),
          },
          indoor: {
            amount: +n.indoorS.toFixed(2),
            room: n.room,
            reverb: n.roomReverb,
            releases: n.roomReleases,
          },
          unlockedAt: Math.round(n.runningAt),
          revives: { ...n.revives, stalled: n.stalled },
          sustains: n.sustainCount,
          deferred: n.deferredCount,
          pooled: n.pooled,
          prebuildPending: n.prebuildPending,
          engine: {
            ...n.prof,
            builtBy: { ...n.builtBy },
            slowRealize: n.slowRealize,
            realizeMaxMs: +n.prof.realizeMaxMs.toFixed(2),
            loopsMaxMs: +n.prof.loopsMaxMs.toFixed(2),
            nyq: Math.round(n.nyq),
          },
          speech: o ? { ...o.stats, voices: o.chosen } : null,
          oneShots: { active: n.activeOneShots(), ...n.counters },
          loops: {
            total: n.loops.length,
            realized: n.realizedLoops(),
            external: n.loops.filter((e) => !e.internal).length,
            names: n.loops
              .filter((e) => e.voice)
              .map(
                (e) =>
                  `${e.name}${e.internal ? `*` : ``}@${e.dist.toFixed(0)}m`,
              ),
          },
          radio: { ...r.stats(), now: r.nowPlaying },
          director: {
            ...i.stats,
            hour: +i.hour.toFixed(2),
            night: +i.night.toFixed(2),
            stepMaxMs: Array.from(i.stepMax, (e) => +e.toFixed(2)),
          },
          cabin: +n.cabin.toFixed(2),
          jsMs: {
            avg: +a.avgMs.toFixed(3),
            max: +a.maxMs.toFixed(3),
            avgDirector: +a.avgDirector.toFixed(3),
            avgRadio: +a.avgRadio.toFixed(3),
            avgLate: +a.avgLate.toFixed(3),
            maxDirector: +a.maxDirector.toFixed(2),
            maxRadio: +a.maxRadio.toFixed(2),
            maxLate: +a.maxLate.toFixed(2),
            maxListener: +a.maxListener.toFixed(2),
            frames: a.frames,
            over1ms: a.over1,
            over2ms: a.over2,
          },
        };
      },
      bankGc(e = 0) {
        let t = new Set(n.bank.ids());
        return (
          n.bank.gc(performance.now() + e),
          [...t].filter((e) => !n.bank.has(e))
        );
      },
      resetPerf() {
        ((a.maxMs = a.maxDirector = a.maxRadio = a.maxLate = a.maxListener = 0),
          (a.over1 = a.over2 = a.frames = 0));
        for (let e of Object.keys(n.prof)) n.prof[e] = 0;
        for (let e of Object.keys(n.builtBy)) delete n.builtBy[e];
        ((n.slowRealize = ``), i.stepMax.fill(0));
      },
      bankBreakdown(e = 12) {
        let t = {},
          r = [];
        for (let e of n.bank.ids()) {
          let i = n.bank.get(e),
            a = i.length * i.numberOfChannels * 4,
            o = e.slice(0, e.indexOf(`/`)),
            s = (t[o] ??= { n: 0, kb: 0 });
          (s.n++,
            (s.kb += a / 1024),
            r.push([
              e,
              Math.round(a / 1024),
              i.sampleRate,
              i.numberOfChannels,
              +i.duration.toFixed(2),
            ]));
        }
        for (let e in t) t[e].kb = Math.round(t[e].kb);
        return (
          r.sort((e, t) => t[1] - e[1]),
          {
            totalMB: +(
              Object.values(t).reduce((e, t) => e + t.kb, 0) / 1024
            ).toFixed(1),
            cats: t,
            top: r.slice(0, e),
            bank: n.bank.memStats?.(),
          }
        );
      },
      async loadAllStems(t = 6e4) {
        ((r.pinStems = !0), (n.bank.pinned = !0));
        let { allRadioIds: i, allLazyWorldIds: a } = await e(
            async () => {
              let { allRadioIds: e, allLazyWorldIds: t } = await import(
                `./audio-BTLLtCvZ.js`
              ).then((e) => e.x);
              return { allRadioIds: e, allLazyWorldIds: t };
            },
            __vite__mapDeps([33, 4, 6, 7, 3, 5, 8, 9]),
          ),
          o = [...i(), ...a(n.quality)];
        n.bank.request(o);
        let s = performance.now();
        for (; o.some((e) => !n.bank.has(e)) && performance.now() - s < t;)
          await new Promise((e) => setTimeout(e, 100));
        return {
          missing: o.filter((e) => !n.bank.has(e)).length,
          ms: Math.round(performance.now() - s),
        };
      },
      speech() {
        return o
          ? { available: o.available, voices: o.chosen, ...o.stats }
          : null;
      },
      async waitBank(e = 2e4) {
        let t = performance.now();
        for (; !n.bank.ready && performance.now() - t < e;)
          await new Promise((e) => setTimeout(e, 100));
        return n.bank.ready;
      },
      async renderTest(e = {}) {
        (await u.waitBank(), await u.loadAllStems());
        let t = e.sr ?? 32e3,
          i = e.loopSec ?? 4,
          a = e.stationSec ?? 10,
          o = {},
          s = {};
        for (let e of $o) {
          let r = new OfflineAudioContext(2, Math.round(i * t), t),
            a = { ac: r, bank: n.bank, cabin: 0, night: 0, quality: n.quality },
            o = Lt(e, a),
            c = { vol: 1, rate: 1, params: as(e), doppler: 1 };
          if (!o.start(c)) {
            s[e] = `not-ready`;
            continue;
          }
          o.out.connect(r.destination);
          for (let t = 0.1; t < i - 0.05; t += 0.1) {
            let n = t;
            r.suspend(n).then(() => {
              (os(e, c, n / i), o.apply(c, 0.1), r.resume());
            });
          }
          s[e] = { ...ns(await r.startRendering(), 0.3), nodes: o.nodeCount };
        }
        o.loops = s;
        let c = {},
          d = [16, 12, 16, 20, 4];
        for (let e = 0; e < r.defs.length; e++) {
          let i = await It.renderOffline(n.bank, e, a, 0, l, t, d[e] ?? 0);
          c[r.defs[e].id] = { ...ns(i.buf, 0.2), notes: i.notes, song: i.song };
        }
        o.stations = c;
        let f = {};
        for (let e of n.bank.ids()) {
          if (!e.startsWith(`sfx/`)) continue;
          let t = ns(n.bank.get(e));
          f[e] = [t.sec, t.peak, t.rms, t.centroid];
        }
        return ((o.sfx = f), (o.bank = u.stats().bank), o);
      },
      async spectrograms(e = `sfx`, t = 0, i = {}) {
        (await u.waitBank(), e !== `sfx` && (await u.loadAllStems()));
        let a = [],
          o = 32e3;
        if (e === `idents`)
          for (let e of r.defs) {
            let t = new OfflineAudioContext(2, 76800, o),
              r = new Ft(t, t.destination, null, e.fx, n.bank, e.trim, e.mix),
              i = new Pt(t, n.bank, r, e, 0, 0, 99);
            for (let n of Nt(e.id))
              i.playEv(n, 0.02 + n.t * 0.5, 0.5, t.destination);
            a.push({ label: `ident ${e.id}`, buf: await t.startRendering() });
          }
        else if (e === `loops` || e === `stations`) {
          if (e === `loops`)
            for (let e of $o) {
              if (i.filter && !new RegExp(i.filter).test(e)) continue;
              let t = new OfflineAudioContext(2, 128e3, o),
                r = {
                  ac: t,
                  bank: n.bank,
                  cabin: 0,
                  night: 0,
                  quality: n.quality,
                },
                s = Lt(e, r),
                c = { vol: 1, rate: 1, params: as(e), doppler: 1 };
              if (s.start(c)) {
                s.out.connect(t.destination);
                for (let n = 0.1; n < 3.95; n += 0.1) {
                  let r = n;
                  t.suspend(r).then(() => {
                    (os(e, c, r / 4), s.apply(c, 0.1), t.resume());
                  });
                }
                a.push({ label: e, buf: await t.startRendering() });
              }
            }
          else {
            let e = [16, 12, 16, 20, 4];
            for (let t = 0; t < r.defs.length; t++) {
              let i = await It.renderOffline(n.bank, t, 12, 0, l, o, e[t]);
              a.push({ label: `${r.defs[t].id}: ${i.song}`, buf: i.buf });
            }
          }
        } else
          for (let t of n.bank.ids())
            (e === `all` || t.startsWith(e + `/`)) &&
              (!i.filter || t.includes(i.filter)) &&
              (!t.startsWith(`sfx/`) || t.endsWith(`/0`) || i.filter) &&
              a.push({ label: t, buf: n.bank.get(t) });
        let s = i.cols ?? (e === `stations` ? 1 : e === `loops` ? 4 : 6),
          d = innerWidth,
          f = innerHeight,
          p = Math.floor(d / s) - 6,
          m = i.tileH ?? (e === `stations` ? Math.floor(f / 5) - 8 : 104),
          h = s * Math.floor(f / (m + 18)),
          g = a.slice(t * h, (t + 1) * h);
        (c ||
          ((c = document.createElement(`canvas`)),
          Object.assign(c.style, {
            position: `fixed`,
            inset: `0`,
            zIndex: `99999`,
            pointerEvents: `none`,
          }),
          document.body.appendChild(c)),
          (c.width = d),
          (c.height = f));
        let _ = c.getContext(`2d`);
        return (
          (_.fillStyle = `#07080c`),
          _.fillRect(0, 0, d, f),
          (_.font = `11px ui-monospace,Menlo,monospace`),
          g.forEach((e, t) => {
            let n = (t % s) * (p + 6) + 3,
              r = Math.floor(t / s) * (m + 18) + 3;
            is(_, e.buf, n, r + 14, p, m);
            let i = ns(e.buf);
            ((_.fillStyle = `#e8e2d0`),
              _.fillText(
                `${e.label}  ${i.sec}s pk${i.peak} rms${i.rms}`,
                n,
                r + 10,
              ));
          }),
          { total: a.length, page: t, perPage: h, shown: g.map((e) => e.label) }
        );
      },
      async stems(e = 8) {
        (await u.waitBank(), await u.loadAllStems());
        let t = [`drums`, `perc`, `bass`, `keys`, `pad`, `lead`, `fx`],
          i = [16, 12, 16, 20, 4],
          a = {};
        for (let o = 0; o < r.defs.length; o++) {
          let s = {};
          for (let r of t) {
            let t = ns(
              (await It.renderOffline(n.bank, o, e, 0, l, 22050, i[o], r)).buf,
              0.2,
            );
            s[r] = +(20 * Math.log10(t.rms + 1e-6)).toFixed(1);
          }
          a[r.defs[o].id] = s;
        }
        return a;
      },
      meter(e = 1e3) {
        return n.meter(e);
      },
      profileRadio() {
        let e = {};
        return (
          r.defs.forEach((t, n) => {
            let i = performance.now(),
              a = r.locate(n),
              o = performance.now(),
              s = t.item(a.k + 7),
              c = performance.now(),
              l = 0;
            for (let e = 0; e < Math.min(16, s.bars); e++) l += s.bar(e).length;
            let u = performance.now();
            e[t.id] = {
              locateMs: +(o - i).toFixed(2),
              k: a.k,
              newSongMs: +(c - o).toFixed(2),
              bar16Ms: +(u - c).toFixed(2),
              evs: l,
            };
          }),
          e
        );
      },
      hideSpectrograms() {
        (c?.remove(), (c = null));
      },
      play(e, t = 6) {
        return n.play(e, { x: n.lx + t, y: n.ly, z: n.lz }, void 0, !1);
      },
      loopTest(e, t = {}, r = 8) {
        let i = n.loop(e, { x: n.lx + r, y: n.ly, z: n.lz }, !1);
        for (let e in t) i.setParam(e, t[e]);
        return i;
      },
      overlay(e) {
        if (e) {
          setTimeout(
            () =>
              u.spectrograms(
                t.params.get(`audiokind`) ?? `sfx`,
                Number(t.params.get(`audiopage`) ?? 0),
              ),
            500,
          );
          return;
        }
        let n = document.createElement(`div`);
        (Object.assign(n.style, {
          position: `fixed`,
          right: `8px`,
          top: `8px`,
          zIndex: `9999`,
          font: `11px/1.35 ui-monospace,Menlo,monospace`,
          color: `#fc9`,
          background: `rgba(0,0,0,.6)`,
          padding: `6px 8px`,
          borderRadius: `6px`,
          pointerEvents: `none`,
          whiteSpace: `pre-wrap`,
          overflowWrap: `anywhere`,
          maxWidth: `440px`,
        }),
          document.body.appendChild(n),
          setInterval(() => {
            let e = u.stats();
            n.textContent = `audio ${e.state} ${e.sampleRate}Hz  js ${e.jsMs.avg}ms (max ${e.jsMs.max})\nbank ${e.bank.buffers} bufs ${e.bank.mb}MB ${e.bank.mode} ready ${e.bank.readyAfterMs}ms\none-shots ${e.oneShots.active} (played ${e.oneShots.oneShots} culled ${e.oneShots.culled} stolen ${e.oneShots.stolen} dup ${e.oneShots.deduped})\nloops ${e.loops.realized}/${e.loops.total}: ${e.loops.names.join(` `)}\nradio ${e.radio.station} ${e.radio.active ? `on` : `off`} ${e.radio.song ?? ``} bar ${e.radio.bar}\ndir traffic ${e.director.traffic} sirens ${e.director.sirens} h ${e.director.hour} night ${e.director.night} cabin ${e.cabin}`;
          }, 500));
      },
    };
  return u;
}
