// tokyo/assets/world-CAmHK742 49 — console
// Lines 16331-16721 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function If(e, t) {
  let n = t.catalog,
    r = e.params?.get(`sites`) !== `0`,
    i = new Set((e.params?.get(`sitesoff`) ?? ``).split(`,`).filter(Boolean)),
    a = [],
    o = [],
    s = [],
    c = null,
    l = null,
    u = null,
    d = null,
    f = null,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    v = [],
    y = !1,
    b = 0,
    x = 0,
    S = 0,
    C = 0,
    w = -1,
    T = -1,
    E = !1,
    D = 0,
    O = Of(),
    k = [],
    A = (e) => k.push(`${e} ${(Of() - O).toFixed(1)}`);
  if (r) {
    try {
      ((o = n.metas().filter((e) => !i.has(e.id))), A(`metas`));
      for (let e of n.errors) a.push(e);
      if (o.length) {
        let t;
        try {
          t = e.transit?.entrances;
        } catch {
          t = void 0;
        }
        A(`entrances`);
        let r = Of(),
          i = null;
        try {
          i = ml(e.districts?.packs);
        } catch {
          i = null;
        }
        (A(`claimIdx`),
          (s = (n.resolve ?? so)(o, {
            plan: e.plan,
            scale: io(),
            entrances: t,
            obstacles: [],
            claimed: i
              ? (e, t, n, r, a) =>
                  i.claimed(e, t, n, r, a === `props` ? `props` : `buildings`)
              : (t, n, r, i, a) =>
                  !!e.districts?.claimed(
                    t,
                    n,
                    r,
                    i,
                    a === `props` ? `props` : `buildings`,
                  ),
          })),
          (b = Of() - r),
          A(`resolve`),
          ro(e.plan));
        let c = Pf(e) ? pt.resolveMs.mobile : pt.resolveMs.desktop;
        b > c &&
          console.warn(
            `[sites] resolve slow: ${b.toFixed(1)}ms for ${o.length} metas (budget ${c.toFixed(0)}ms)`,
          );
        let l = !!e.params?.has(`debug`);
        for (let e of s) {
          for (let t of e.errors) a.push(`${e.id}: ${t}`);
          if (l)
            for (let t of e.warnings)
              console.info(
                `[sites] ${t.startsWith(`[`) ? t : `${e.id}: ${t}`}`,
              );
        }
      }
    } catch (e) {
      ((s = []),
        a.push(`resolve failed: ${e?.message ?? String(e)}`),
        console.error(`[sites] resolve failed`, e));
    }
    A(`errors`);
    let r = sl(s);
    (t.registerPack?.(Yc), A(`claims`));
    try {
      let t = Yc.claims.filter(
        (e) => e.scope === `buildings` || e.scope === `all`,
      );
      D = e.plan?.claimPois?.(t) ?? 0;
    } catch (e) {
      console.warn(`[sites] POI claims failed`, e);
    }
    A(`pois`);
    let d = 0;
    for (let e of s) e.ok && d++;
    let f = nl(),
      p = [];
    for (let e of s) e.ok || p.push(e.id);
    if (
      (console.log(
        `[init] sites ${d}/${o.length} resolved in ${b.toFixed(1)} ms · ${r} claims` +
          (f.raw > f.merged ? ` (merged from ${f.raw})` : ``) +
          (D ? ` · ${D} POIs in site lots` : ``) +
          (p.length
            ? ` · ${p.length} failed: ${p.slice(0, 6).join(`, `)}${p.length > 6 ? `…` : ``}`
            : ``),
      ),
      d > 0)
    ) {
      let t = Pf(e),
        r = 4;
      try {
        r = Math.min(4, e.renderer.gl.capabilities.getMaxAnisotropy());
      } catch {
        r = 4;
      }
      ((c = new Tc(e.renderer?.gl, t, r)),
        A(`atlas`),
        (l = Vc(
          null,
          c,
          Bc(e),
          n.look
            ? { look: n.look, policy: e.quality?.materials ?? `pbr` }
            : void 0,
        )),
        (u = qc(l)),
        A(`mats`));
      try {
        v = ou(j());
      } catch (e) {
        console.warn(`[sites] interior lot claims failed`, e);
      }
      A(`lotClaims`);
    }
    (typeof window < `u` &&
      ((_ = vl({
        ctx: e,
        metas: o,
        resolved: s,
        errors: a,
        streamer: () => g,
        atlas: () => c,
      })),
      (_.resolve = Ff(o, s, a, b, r, f.raw, D)),
      (window.__sites = _)),
      (e.params?.has(`debug`) || e.params?.has(`sitesprof`)) &&
        (A(`debug`),
        console.log(
          `[init] sites constructor ${(Of() - O).toFixed(1)} ms (resolve ${b.toFixed(1)}) · ${k.join(` · `)}`,
        )));
  }
  function j() {
    let e = new Map();
    for (let t of o) e.set(t.id, t);
    let t = [];
    for (let n of s) {
      let r = e.get(n.id);
      n.ok && r && t.push({ meta: r, site: n });
    }
    return t;
  }
  let M = (t) => {
      let n = new Ac({ ox: 0, oz: 0, y0: 0, facing: 0 });
      for (let { meta: e, site: r } of t) {
        let t = new Ac({ ox: r.x, oz: r.z, y0: r.y, facing: r.facing }),
          i = e.lot.w > 0 ? r.w / e.lot.w : 1,
          a = e.lot.d > 0 ? r.d / e.lot.d : 1;
        if (e.solids && e.solids.length)
          for (let n of e.solids)
            t.box(n.x0 * i, n.z0 * a, n.x1 * i, n.z1 * a, n.y0 ?? 0, n.y1);
        else {
          let n = Math.min(i, a);
          for (let r of e.proxy) {
            let e = r.rot ? n : i,
              o = r.rot ? n : a;
            t.obb(
              r.x * i,
              r.z * a,
              (r.w * e) / 2,
              (r.d * o) / 2,
              r.rot ?? 0,
              r.y ?? 0,
              Yu(r),
            );
          }
        }
        for (let e of t.list) n.list.push(e);
      }
      n.list.length && e.statics && (d = n.commit(e.statics, `sites:shells`));
    },
    N = {
      ensureResident(e, t, n) {
        return y || !g || !Number.isFinite(e) || !Number.isFinite(t)
          ? Promise.resolve()
          : g.prepareAt(e, t, void 0, n?.timeoutMs ?? kf).catch((e) => {
              console.warn(`[sites] ensureResident failed`, e);
            });
      },
      unbuiltAt(e, t) {
        return !y && !!g && g.unbuiltAt(e, t);
      },
      residency: () => {
        let e = g,
          t = c;
        return {
          off: !e,
          sites: e?.recs.length ?? 0,
          tiers: e?.tierMap() ?? {},
          counts: e?.counts() ?? {
            visible: 0,
            cached: 0,
            busy: 0,
            failed: 0,
            quarantined: 0,
            active: 0,
          },
          geoMB: Math.round((e?.geoMB() ?? 0) * 10) / 10,
          atlasMB:
            t && t.created
              ? Math.round(((t.size * t.size * 4 * 4) / 3 / 1048576) * 10) / 10
              : 0,
          slots: t ? `${t.slotsUsed}/${t.slotCount}` : `0/0`,
          tel: {
            builds: e?.tel.builds ?? 0,
            rebuilds: e?.tel.rebuilds ?? 0,
            cancels: e?.tel.cancels ?? 0,
            evicts: e?.tel.evicts ?? 0,
          },
        };
      },
    };
  return {
    name: `sites`,
    get sites() {
      return s;
    },
    get resolveMs() {
      return b;
    },
    get updateMs() {
      return Math.round(S * 1e3) / 1e3;
    },
    prepareAt(e, t, n, r) {
      return y || !g
        ? Promise.resolve()
        : g.prepareAt(e, t, n, r).catch((e) => {
            console.warn(`[sites] prepareAt failed`, e);
          });
    },
    prewarm(e) {
      if (l && u) return (Hc(e, l), u.protos());
    },
    init(e) {
      if (!r || y || !c || !l) {
        _ && (_.ready = !0);
        return;
      }
      let t = j(),
        i = !!(e.params?.has(`debug`) || e.params?.has(`sitesprof`)),
        u = Of();
      Hc(e, l);
      try {
        M(t);
      } catch (e) {
        (a.push(`shells failed: ${e?.message ?? String(e)}`),
          console.error(`[sites] shells failed`, e));
      }
      try {
        p = n.gaps === null ? null : Ql(e, s);
      } catch (e) {
        ((p = null),
          console.warn(`[sites] computeGaps failed (no gap fillers)`, e));
      }
      _ && ((_.gaps = p?.items ?? []), (_.gapStats = p?.stats));
      try {
        f = od(e, s, o, l, p);
      } catch (e) {
        ((f = null),
          a.push(`proxy layer failed: ${e?.message ?? String(e)}`),
          console.error(`[sites] proxy layer failed`, e));
      }
      try {
        m = Df(e, s, o);
      } catch (e) {
        ((m = null), console.warn(`[sites] UI failed`, e));
      }
      if (
        (i &&
          console.log(
            `[init] sites shells+gaps+proxy+ui ${(Of() - u).toFixed(1)} ms`,
          ),
        (h = Nf(e)),
        (g = new cf(
          {
            ctx: e,
            atlas: c,
            mats: l,
            q: Bc(e),
            mobile: Pf(e),
            interactions: h,
            errors: a,
            catalog: n,
            proxy: () => f,
            onJump: () => m?.resetArrivals(),
          },
          t,
        )),
        f)
      ) {
        let t = f;
        t.ready.then(() => {
          (!y && f === t && g?.syncAllProxies(), ro(e.plan));
        });
      } else ro(e.plan);
      ((e.sites = N),
        e.events?.once?.(`game:ready`, () => {
          ((w = Of()), c?.gameReady());
        }),
        _ && (_.ready = !0),
        i && console.log(`[init] sites init ${(Of() - u).toFixed(1)} ms`));
    },
    update(e, t) {
      if (!g || !l) return;
      if (c && !E && w >= 0) {
        let e = Of();
        (t.districts?.pending ?? 0) > 0
          ? (T = -1)
          : T < 0
            ? (T = e)
            : e - T >= jf && ((E = !0), c.allowWorker());
      }
      let n = !(x++ & 15),
        r = n ? Of() : 0;
      if ((Uc(t, l), g.update(e), h?.update(t, e), m)) {
        let n = t.player?.position;
        n && m.update(e, n.x, n.z);
      }
      (c &&
        c.created &&
        (c.slotsInUse() === 0
          ? ((C += e), C > Af && ((C = 0), Kc(l), c.releaseGpu()))
          : (C = 0)),
        n && (S += (Of() - r - S) / 20));
    },
    dispose() {
      if (!y) {
        y = !0;
        try {
          g?.dispose();
        } catch (e) {
          console.warn(`[sites] streamer dispose failed`, e);
        }
        ((g = null),
          h?.dispose(),
          (h = null),
          m?.dispose(),
          (m = null),
          f?.dispose(),
          (f = null),
          (p = null),
          d?.dispose(),
          (d = null),
          u?.dispose(),
          (u = null));
        for (let e of v) e.dispose();
        ((v = []),
          c?.dispose(),
          l && Wc(l),
          (c = null),
          (l = null),
          il(),
          e.sites === N && delete e.sites,
          typeof window < `u` &&
            _ &&
            window.__sites === _ &&
            delete window.__sites,
          (_ = null));
      }
    },
  };
}
