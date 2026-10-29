// tokyo/assets/region-tokyo-A7LxHjud 128 — streamer
// Lines 55932-56188 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function mde(e) {
  let t = e.ctx;
  if (t.params.get(`intcull`) === `0`) return;
  let n = window.__gpuMemory;
  if (typeof n?.ownerOf != `function`) return;
  let r = t.scene,
    i = t.camera,
    a = [],
    o = new WeakMap(),
    s,
    c = !1,
    l = (e) => {
      let t = o.get(e);
      return (
        t === void 0 &&
          ((t = !1),
          e.traverse((e) => {
            e.isLight && (t = !0);
          }),
          o.set(e, t)),
        t
      );
    },
    u = () => {
      e.cull.active = !1;
      let o = e.cull.site,
        u = i.position;
      if (
        !o ||
        !o.viewInside(u.x, u.y, u.z) ||
        (i.updateMatrixWorld(),
        rv.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
        nv.setFromProjectionMatrix(rv, i.coordinateSystem, i.reversedDepth),
        nv.intersectsBox(o.portalBox()))
      )
        return;
      ((e.cull.active = !0), e.cull.frames++);
      let d = r.children;
      for (let e = 0; e < d.length; e++) {
        let t = d[e];
        if (!t.visible || t.isLight || t.name.startsWith(`interior`)) continue;
        let r = n.ownerOf(t);
        r && pde.has(r) && !l(t) && ((t.visible = !1), a.push(t));
      }
      ((e.cull.roots = a.length),
        s === void 0 && (s = t.env.farLayer ?? null),
        s && s.enabled === !0 && ((s.enabled = !1), (c = !0)));
    },
    d = () => {
      for (let e = 0; e < a.length; e++) a[e].visible = !0;
      ((a.length = 0), c && s && (s.enabled = !0), (c = !1));
    },
    f = t.renderer,
    p = f.render.bind(f);
  f.render = (e) => {
    try {
      u();
    } catch {}
    try {
      p(e);
    } finally {
      d();
    }
  };
}
function hde(e) {
  let t = e.ctx,
    n = (n) => {
      if (n === `near` || n.startsWith(`near:`)) {
        let r = n.startsWith(`near:`) ? n.slice(5) : ``,
          i = t.player.position,
          a = null,
          o = 1 / 0;
        for (let t of e.rooms) {
          if (r && t.kind !== r) continue;
          let e = Math.hypot(t.x - i.x, t.z - i.z);
          e < o && ((o = e), (a = t));
        }
        return a;
      }
      return e.rooms.find((e) => e.id === n) ?? null;
    };
  window.__interiors = {
    region: `tokyo`,
    get shared() {
      return e;
    },
    rooms: (t) =>
      e.rooms.filter((e) => !t || e.kind === t).map((e) => e.info()),
    stores: () => e.rooms.map((e) => e.info()),
    room: (e) => n(e),
    get perf() {
      return {
        avg: +e.perf.avg.toFixed(4),
        max: +e.perf.max.toFixed(3),
        built: e.streamer.builtCount,
        lastBuildMs: +e.streamer.lastBuildMs.toFixed(2),
        maxSliceMs: +e.streamer.maxSliceMs.toFixed(2),
        worstStep: {
          ...e.streamer.worstStep,
          ms: +e.streamer.worstStep.ms.toFixed(2),
        },
        pending: e.streamer.pending,
        pages: U_.map((t) => e.pages[t].info()),
        jobs: e.sh.jobs.stats,
        cull: { ...e.cull, site: e.cull.site?.id ?? null },
      };
    },
    resetPerf() {
      ((e.streamer.maxSliceMs = 0),
        (e.streamer.worstStep = { id: ``, step: 0, label: ``, ms: 0 }),
        (e.perf.max = 0));
      for (let t of U_)
        ((e.pages[t].maxStepMs = 0), (e.pages[t].maxUploadMs = 0));
    },
    residency: () => tv(e),
    mem() {
      let t = 0,
        n = 0,
        r = 0,
        i = 0;
      for (let a of e.rooms) {
        let o = e.streamer.tier(a);
        o === `built`
          ? ((t += a.gpuBytes()), r++)
          : o === `warm` && ((n += a.gpuBytes()), i++);
      }
      let a = {},
        o = 0;
      for (let t of U_) {
        let n = e.pages[t],
          r = n.started && n.height ? n.width * n.height * 4 * 1.333 : 0;
        ((a[t] = +(r / 1048576).toFixed(1)), (o += r));
      }
      let s = (e) => +(e / 1048576).toFixed(2);
      return {
        built: r,
        warm: i,
        builtGeoMB: s(t),
        warmGeoMB: s(n),
        pageMB: s(o),
        pages: a,
        released: e.streamer.released,
        pageReleases: e.pageReleases,
        lru: e.sh.lru.length,
      };
    },
    ensure: (t, n) => ev(e, t, n),
    async goto(r, i = `front`) {
      let a = n(r);
      if (!a) return null;
      if (!a.prepareNow()) {
        let e = a.anchor,
          n = Math.sin(e.facing),
          r = -Math.cos(e.facing);
        t.player.teleport(e.x + n * 2, e.z + r * 2, e.facing + Math.PI);
        try {
          await Promise.race([
            Promise.resolve(t.districts?.ensureResident?.(e.x, e.z)),
            new Promise((e) => setTimeout(e, 12e3)),
          ]);
        } catch {}
        for (let e = 0; e < 60 && !a.prepareNow(); e++)
          await new Promise((e) => setTimeout(e, 250));
        if (!a.prepareNow())
          return {
            error: `no room fits (or the tile never built)`,
            ...a.info(),
          };
      }
      let o = a.spot(i);
      return (
        t.player.teleport(o.x, o.z, o.h, a.fr.py),
        t.player.debug?.look?.(o.h, 0.25),
        Q_(e.pages[a.page], t),
        e.streamer.scan(o.x, t.player.position.y, o.z),
        e.streamer.flush(),
        a.info()
      );
    },
    cam(e, r, i, a, o, s, c) {
      let l = n(e);
      if (!l?.fr) return null;
      let u = l.fr;
      return (
        t.cameraRig.override(
          new E(u.wx(r, a), u.py + i, u.wz(r, a)),
          new E(u.wx(o, c), u.py + s, u.wz(o, c)),
        ),
        !0
      );
    },
    camOff: () => t.cameraRig.override(null),
    views: (e) => n(e)?.views() ?? null,
    pages: () => Object.fromEntries(U_.map((t) => [t, e.pages[t].info()])),
    releaseAll() {
      e.streamer.releaseAll();
      for (let t of U_) e.pages[t].started && Z_(e, t);
      return !0;
    },
  };
}
var iv = !1,
  av = [
    Ole,
    Ale,
    Nle,
    Fle,
    Lle,
    Rle,
    zle,
    Vle,
    Hle,
    Ule,
    Gle,
    qle,
    {
      id: `_interiors`,
      name: { zh: `室內空間（東京）`, en: `Walk-in Interiors (Tokyo)` },
      missionAnchors: mce(),
      init(e) {
        e.params.get(`interiors`) === `0` && (iv = !0);
      },
      start(e) {
        iv || ode(e);
      },
      update(e, t) {
        iv || sde(e, t);
      },
      prewarm(e) {
        return e.params.get(`interiors`) === `0` ? [] : ade(e);
      },
      keepResident() {
        return cde();
      },
    },
  ];
function gde(e = av) {
  return e.length
    ? {
        streetNames: e.flatMap((e) =>
          (e.streetNames ?? []).map((e) => ({ ...e })),
        ),
        poiClaims: {
          claims: e.flatMap((e) =>
            (e.claims ?? []).filter(
              (e) => e.scope === `buildings` || e.scope === `all`,
            ),
          ),
          honor: new Set(e.flatMap((e) => e.honorPois ?? [])),
        },
      }
    : {};
}
function _de() {
  Kte(av);
}
