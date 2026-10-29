// tokyo/assets/tokyo-CqLdAwml 07 — math
// Lines 1675-3412 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function pr(e) {
  sr = e.plan.districts;
  let t = new Map(),
    n = (e, n, r) => {
      let i = (t.get(e) ?? 0) + 1;
      (t.set(e, i),
        i <= 3 && console.error(`[districts] ${e.id} ${n} failed`, r));
    },
    r = e.params.has(`debug`),
    s = new Set(),
    c = new Set(),
    d = new Set(),
    m = new Set(),
    h = new Set(),
    g = new Set(),
    _ = (e) => h.has(e) || g.has(e),
    v = (e) => s.has(e) && !d.has(e) && !m.has(e),
    y = new Map();
  typeof window < `u` &&
    (window.__packTimes = (e) => {
      let t = {};
      for (let [e, n] of [...y.entries()].sort((e, t) => t[1].max - e[1].max))
        t[e] = { avg: +n.avg.toFixed(3), max: +n.max.toFixed(1) };
      if (e) for (let e of y.values()) e.max = 0;
      return t;
    });
  let b = [],
    x = !1,
    S = [],
    C = [],
    w = [],
    ee = [],
    T = null,
    E = !1,
    D = null,
    O = new Promise((e) => (D = e)),
    ne = null,
    re = new Promise((e) => (ne = e)),
    k = e.params,
    A = k.get(`residency`),
    ie = k.get(`districts`) === `all` || k.has(`cam`) || k.has(`far`),
    ae = () => A !== `0` && !ie,
    se = te(),
    le = A === `all` || (A !== `0` && !!e.quality.mobile && se >= 1),
    ue = (e) =>
      ae() && !!lr(e) && (le || typeof e.registerMissions == `function`),
    de = (e) =>
      ue(e) &&
      typeof e.unload == `function` &&
      typeof e.registerMissions == `function`,
    fe = Number(k.get(`resr`) ?? 0) || 0,
    pe = () => {
      if (!ae()) return 1 / 0;
      if (fe > 0) return fe;
      let t = e.quality.drawDistance + 180;
      return e.quality.mobile ? Math.max(se >= 2 ? 450 : 600, t) : t;
    },
    me = () => Math.min(pe(), e.quality.drawDistance + 180),
    he = () => Math.min(e.quality.drawDistance * 0.5, 350) + 50,
    ve = () => pe() + 300,
    ye = e.quality.mobile
      ? 0
      : Math.max(0, Number(k.get(`resbudget`) ?? 0) || 0),
    j = () => {
      let t = k.get(`spawn`);
      if (t) {
        let [e, n] = t.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(n)) return { x: e, z: n };
      }
      let n = e.state.data.pos;
      return n && Number.isFinite(n.x) && Number.isFinite(n.z)
        ? n
        : e.plan.spawns.start;
    },
    be = !1;
  e.events.on(`player:spawned`, () => {
    ((be = !0),
      queueMicrotask(() => {
        let t = e.player?.position;
        t && Nt.ensureResident?.(t.x, t.z);
      }));
  });
  let xe = () => {
      let t = e.player?.position ?? j();
      return { x: t.x, z: t.z };
    },
    M = { x: NaN, z: NaN, vx: 0, vz: 0 },
    N = null,
    P = -1e9,
    F = [],
    I = new Set(),
    Se = new Map(),
    Ce = new Map(),
    L = new f(),
    we = (t) => {
      let { x: n, z: r } = xe(),
        i = pe(),
        a = fr(t, n, r),
        o = a,
        s = a,
        c = Math.hypot(M.vx, M.vz);
      if (c > 2.5) {
        let e = Math.min(c, 90) * er,
          i = Math.max(1, Math.ceil(e / 60)),
          a = M.vx / c,
          l = M.vz / c;
        for (let c = 1; c <= i; c++) {
          let u = (e * c) / i,
            d = fr(t, n + a * u, r + l * u);
          d < o && (o = d);
          let f = d + u * 0.5;
          f < s && (s = f);
        }
      }
      if (
        (L.setFromMatrixPosition(e.camera.matrixWorld),
        Math.abs(L.x - n) + Math.abs(L.z - r) > 40)
      ) {
        let e = fr(t, L.x, L.z);
        (e < o && (o = e), e < s && (s = e));
      }
      if (!be) {
        let e = j(),
          n = fr(t, e.x, e.z);
        (n < o && (o = n), n < s && (s = n));
      }
      let l = !1;
      for (let e of F) {
        let n = fr(t, e.x, e.z);
        n <= e.r && !e.doneAt && (l = !0);
        let r = Number.isFinite(i) ? n - e.r + i : n;
        r < o && (o = r);
      }
      return { d: o, urgent: s, req: l };
    },
    Te = new Map(),
    Ee = new Map(),
    De = (e) => {
      let t = Te.get(e);
      if (t) return t;
      let n = Ee.get(e);
      return (n || Ee.set(e, (n = lr(e) ? dr(e) : [])), n);
    },
    Oe = new p();
  function* ke(e) {
    let t = lr(e),
      n = Re.get(e);
    if (!t || !n?.size) return;
    let i = e.residencyBounds ? dr(e) : null,
      a = i
        ? {
            minX: Math.min(...i.map((e) => e.minX)) - 50,
            minZ: Math.min(...i.map((e) => e.minZ)) - 50,
            maxX: Math.max(...i.map((e) => e.maxX)) + 50,
            maxZ: Math.max(...i.map((e) => e.maxZ)) + 50,
          }
        : {
            minX: t.minX - 300,
            minZ: t.minZ - 300,
            maxX: t.maxX + 300,
            maxZ: t.maxZ + 300,
          },
      o = new Set(),
      s = (e) => {
        let t = e,
          n = t.geometry;
        if (!n || !(t.isMesh || e.isPoints || e.isLine)) return;
        let r = e;
        if (r.isInstancedMesh) {
          if (!r.count) return;
          if (!r.boundingBox) {
            if (!n.boundingBox && !(n.attributes.position?.array?.length > 0))
              return;
            r.computeBoundingBox();
          }
          Oe.copy(r.boundingBox);
        } else {
          if (!n.boundingBox) {
            let e = n.attributes.position;
            if (!e || !(e.array?.length > 0)) return;
            n.computeBoundingBox();
          }
          Oe.copy(n.boundingBox);
        }
        if (Oe.isEmpty()) return;
        Oe.applyMatrix4(e.matrixWorld);
        let i = Math.max(Oe.min.x, a.minX),
          s = Math.min(Oe.max.x, a.maxX),
          c = Math.max(Oe.min.z, a.minZ),
          l = Math.min(Oe.max.z, a.maxZ);
        if (i <= s && c <= l)
          for (let e = Math.floor(i / 100); e <= Math.floor(s / 100); e++)
            for (let t = Math.floor(c / 100); t <= Math.floor(l / 100); t++)
              o.add((e + 512) * 1024 + (t + 512));
      },
      c = [],
      l = 0,
      u = function* (e) {
        for (c.push(e); c.length;) {
          let e = c.pop();
          for (let t = 0; t < e.children.length; t++) c.push(e.children[t]);
          (s(e), ++l % 150 == 0 && (yield));
        }
      };
    for (let e of [...n]) (e.updateWorldMatrix(!0, !0), yield* u(e));
    for (let [t, n] of [...(ze.get(e) ?? [])])
      Ie.get(n) === e.id && (t.updateWorldMatrix(!0, !0), yield* u(t));
    if (!o.size) return;
    let d = [];
    for (let e of o) {
      let t = Math.floor(e / 1024) - 512,
        n = (e % 1024) - 512,
        r = {
          minX: t * 100,
          minZ: n * 100,
          maxX: (t + 1) * 100,
          maxZ: (n + 1) * 100,
        };
      (i &&
        i.length > 1 &&
        !i.some(
          (e) =>
            r.maxX > e.minX - 50 &&
            r.minX < e.maxX + 50 &&
            r.maxZ > e.minZ - 50 &&
            r.minZ < e.maxZ + 50,
        )) ||
        d.push(r);
    }
    d.length &&
      (Te.set(e, d),
      r &&
        console.info(
          `[districts] ${e.id}: ${d.length} content cells (${Math.round((d.length * 100 * 100) / 1e4) / 100} km², bounds ${Math.round(((t.maxX - t.minX) * (t.maxZ - t.minZ)) / 1e4) / 100} km²)`,
        ));
  }
  let Ae = !1,
    je = async (t) => {
      if (!(Ae || Te.has(t))) {
        Ae = !0;
        try {
          let n = ke(t);
          if (e.work) await e.work.run(n);
          else for (; !n.next().done;);
        } catch (e) {
          console.warn(`[districts] ${t.id} content cells failed`, e);
        } finally {
          (Te.has(t) || Te.set(t, De(t)), (Ae = !1));
        }
      }
    },
    Me = (e) => {
      let t = De(e);
      return t.length ? we(t).d : 0;
    },
    Ne = (e) => !ue(e) || I.has(e) || Me(e) <= pe(),
    Pe = (e, t) => {
      (h.add(e),
        b.includes(e) || b.push(e),
        console.warn(
          `[districts] ${e.id} code chunk unavailable — the district stays unbuilt until the page reloads`,
          t,
        ),
        ce(`district ${e.id}`));
    },
    Fe = async (t, r = e, i) => {
      let a = performance.now();
      try {
        if (t.load) {
          let e;
          try {
            e = await _e(t.load(), Qn, `districts: ${t.id} code chunk`);
          } catch (e) {
            return (Pe(t, e), !1);
          }
          (e.init && (t.init = e.init),
            e.start && (t.start = e.start),
            e.update && (t.update = e.update));
        }
        (i?.(), await t.init?.(r));
      } catch (e) {
        n(t, `init`, e);
      }
      s.add(t);
      let o = performance.now() - a;
      return (
        o > 50 && console.info(`[init] districts:${t.id} ${o.toFixed(0)}ms`),
        !0
      );
    },
    Ie = new WeakMap(),
    Le = new Map();
  for (let e of X) Le.set(e.id, e);
  let Re = new Map(),
    ze = new Map(),
    Be = (e, t) => {
      if ((Ie.has(t) || Ie.set(t, e.id), Ie.get(t) !== e.id)) return;
      let n = Re.get(e);
      (n || Re.set(e, (n = new Set())), n.add(t));
    },
    Ve = (e) => !!lr(e),
    He = null,
    Ue = new Map(),
    We = null,
    Ge = null,
    Ke = !1,
    qe = !1,
    R = typeof MessageChannel < `u` ? new MessageChannel() : null,
    Je = !1,
    Ye = 0,
    Xe = 0,
    Ze = 0,
    Qe = ``,
    $e = `init start`,
    et = 0,
    tt = !1,
    nt = (e) => {
      if (Ke) {
        let t = performance.now();
        !e && et > Ye && et < t && (t = et);
        let n = t - Ye;
        n > Xe && ((Xe = n), r && (Qe = `${$e} → ${e ?? `end of task`}`));
      }
      Ke = !1;
    };
  R &&
    (R.port1.onmessage = () => {
      ((Je = !1), nt());
    });
  let rt = () => {
      We &&
        (Ke || (Ye = performance.now()),
        (Ke = !0),
        !tt &&
          typeof requestAnimationFrame == `function` &&
          ((tt = !0),
          requestAnimationFrame((e) => {
            ((tt = !1), (et = e));
          })),
        R && !Je && ((Je = !0), R.port2.postMessage(0)));
    },
    it = (e) => {
      let t = !0;
      return (
        e.traverse((e) => {
          (e.isLight || e.isSkinnedMesh || e.isCamera) && (t = !1);
        }),
        t
      );
    },
    at = new Map(),
    ot = (t) => {
      let n = at.get(t);
      if (n) return n;
      let r = e.scene,
        i = (n) => {
          for (let i of n) {
            if (
              !i ||
              i.parent !== r ||
              !it(i) ||
              (Be(t, i), Ie.get(i) !== t.id)
            )
              continue;
            let n = Ue.get(t);
            n && !n.has(i) && (n.add(i), e.renderer.hold?.([i]));
          }
        },
        a = new Map(),
        o = new Proxy(r, {
          get(e, t) {
            if (t === `add`) return (...t) => (e.add(...t), i(t), o);
            if (t === `attach`) return (t) => (e.attach(t), i([t]), o);
            let n = Reflect.get(e, t, e);
            if (typeof n != `function`) return n;
            let r = a.get(t);
            return (
              (!r || r.src !== n) && a.set(t, (r = { src: n, fn: n.bind(e) })),
              r.fn
            );
          },
          set(e, t, n) {
            return Reflect.set(e, t, n, e);
          },
        });
      return (at.set(t, (n = o)), n);
    },
    st = () => {
      if (qe) return;
      qe = !0;
      let t = e.scene,
        n = a.prototype;
      if (n.__tgtaPackRemove) return;
      n.__tgtaPackRemove = 1;
      let r = n.remove;
      n.remove = function (...n) {
        if (n.length) {
          if (this === t) {
            let e = He;
            if (e && !Ve(e.p))
              for (let t of n)
                t &&
                  t.parent === this &&
                  !e.before.has(t) &&
                  !Ie.has(t) &&
                  Be(e.p, t);
          } else {
            let r = this;
            for (; r.parent && r.parent !== t;) r = r.parent;
            let i = !!We && Ke && !e.work?.inFrame && r.parent !== t,
              a =
                Ie.get(r) ??
                (i ? Ge?.id : He && r.parent !== t ? He.p.id : void 0),
              o = a === void 0 ? void 0 : Le.get(a);
            if (o && de(o) && !m.has(o)) {
              let e = ze.get(o);
              e || ze.set(o, (e = new Map()));
              for (let t of n) t && t.parent === this && e.set(t, r);
            }
          }
        }
        return r.apply(this, n);
      };
    },
    ct = () => {
      let e = (Error().stack ?? ``)
          .split(
            `
`,
          )
          .map((e) => e.trim())
          .filter(
            (e) => e.startsWith(`at `) && !/districts\/index\.ts/.test(e),
          ),
        t = (e) =>
          (e ?? `?`)
            .replace(/^at /, ``)
            .replace(/https?:\/\/[^/]+\//, ``)
            .replace(/\?[^:)]*/, ``);
      return `${t(e[0])} ← ${t(e[1])}`.slice(0, 200);
    },
    lt = async () => {
      let t = r ? ct() : ``;
      (nt(r ? t : void 0), r && ($e = t), Ze++);
      try {
        await (e.work ? e.work.yield() : e.yieldFrame());
      } finally {
        rt();
      }
    },
    ut = null,
    dt = () => {
      let t = e.work;
      if (!t) return t;
      if (ut) return ut;
      let n = (e) =>
        e.finally(() => {
          rt();
        });
      return (
        (ut = new Proxy(t, {
          get(e, t) {
            if (t === `nextFrame`)
              return () => (nt(r ? ct() : void 0), n(e.nextFrame()));
            if (t === `yield`)
              return () =>
                e.remaining() > 0
                  ? e.yield()
                  : (nt(r ? ct() : void 0), n(e.yield()));
            if (t === `run`)
              return (t) => (
                nt(r ? ct() : void 0),
                n(
                  e.run({
                    next: () => {
                      let e = performance.now(),
                        n = t.next(),
                        i = performance.now() - e;
                      return (
                        We &&
                          i > Xe &&
                          ((Xe = i), r && (Qe = `a ctx.work.run() step`)),
                        n
                      );
                    },
                  }),
                )
              );
            let i = Reflect.get(e, t, e);
            return typeof i == `function` ? i.bind(e) : i;
          },
        })),
        ut
      );
    },
    ft = null,
    z = () =>
      (ft ??= Object.create(e.plan, {
        pois: { value: e.plan.allPois, enumerable: !0 },
      })),
    pt = new Set([`addBox`, `addOBB`, `addCircle`, `addFloor`, `addFloorRect`]),
    mt = new Map(),
    ht = new Map(),
    B = (t) => {
      if (!ue(t)) return e.statics;
      let n = ht.get(t);
      if (!n) {
        let r = mt.get(t);
        r || mt.set(t, (r = { c: [], f: [] }));
        let i = r;
        ((n = new Proxy(e.statics, {
          get(e, t) {
            let n = Reflect.get(e, t, e);
            return typeof n == `function`
              ? pt.has(t)
                ? (...r) => {
                    let a = n.apply(e, r);
                    return (
                      a &&
                        (t === `addFloor` || t === `addFloorRect`
                          ? i.f
                          : i.c
                        ).push(a),
                      a
                    );
                  }
                : n.bind(e)
              : n;
          },
        })),
          ht.set(t, n));
      }
      return n;
    },
    gt = new Map(),
    _t = null,
    V = (e, t) => {
      if (!_t) {
        let t = [];
        try {
          t = e.list?.() ?? [];
        } catch {}
        ((_t = new Set(t.map((e) => e.id))), queueMicrotask(() => (_t = null)));
      }
      return _t.has(t);
    },
    vt = (t) => {
      let n = e.missions;
      if (!n || !ue(t)) return n;
      let r = gt.get(t);
      return (
        r ||
          ((r = new Proxy(n, {
            get(e, n) {
              let r = Reflect.get(e, n, e);
              return n !== `registerMission` || typeof r != `function`
                ? typeof r == `function`
                  ? r.bind(e)
                  : r
                : (n) => {
                    let i = n && typeof n.id == `string` ? n.id : null;
                    if (i && Se.get(i) === t && V(e, i)) return !0;
                    let a = r.call(e, n);
                    return (i && !Se.has(i) && Se.set(i, t), a);
                  };
            },
          })),
          gt.set(t, r)),
        r
      );
    },
    H = new Map(),
    U = (t) => {
      if (!Ve(t) && !ue(t)) return e;
      let n = H.get(t);
      return (
        n ||
          H.set(
            t,
            (n = new Proxy(e, {
              get(e, n) {
                return n === `scene`
                  ? Ve(t)
                    ? ot(t)
                    : e.scene
                  : n === `statics`
                    ? B(t)
                    : n === `missions`
                      ? vt(t)
                      : Reflect.get(e, n, e);
              },
            })),
          ),
        n
      );
    },
    W = new Map(),
    yt = (t) => {
      let n = W.get(t);
      return (
        n ||
          W.set(
            t,
            (n = new Proxy(e, {
              get(e, n) {
                return n === `yieldFrame`
                  ? lt
                  : n === `work`
                    ? dt()
                    : n === `plan`
                      ? z()
                      : n === `scene`
                        ? Ve(t)
                          ? ot(t)
                          : e.scene
                        : n === `statics`
                          ? B(t)
                          : n === `missions`
                            ? vt(t)
                            : Reflect.get(e, n, e);
              },
            })),
          ),
        n
      );
    },
    bt = (e, t) => {
      if (!e.storefront || !s.has(e)) return !1;
      try {
        return !!e.storefront(t);
      } catch {
        return !1;
      }
    },
    xt = (t) => {
      let { x: n, z: r } = xe(),
        i = e.camera.matrixWorld.elements,
        a = -i[8],
        o = -i[10],
        s = Math.hypot(a, o) || 1;
      ((a /= s), (o /= s));
      let c = e.quality.drawDistance,
        l = null;
      for (let e of t) {
        let t = lr(e),
          i = De(e),
          s = i.length ? we(i) : { d: 0, urgent: 0, req: !1 },
          u = 0;
        if (t && s.urgent > 1) {
          let e = (t.minX + t.maxX) / 2 - n,
            i = (t.minZ + t.maxZ) / 2 - r,
            s = Math.hypot(e, i) || 1;
          u = (e * a + i * o) / s;
        }
        let d = (s.req || I.has(e) ? -1e6 : 0) + s.urgent * (1 - 0.35 * u),
          f = s.req || I.has(e) || s.urgent <= c + 150;
        (!l || d < l.s) && (l = { p: e, d: s.urgent, s: d, urgent: f });
      }
      return l;
    },
    G = (t, n) => {
      if (!Ve(t))
        for (let r of e.scene.children) !n.has(r) && !Ie.has(r) && Be(t, r);
    },
    St = (t, n) => {
      if (!r || !Ve(t)) return;
      let i = e.scene.children
        .filter((e) => !n.has(e) && !Ie.has(e) && it(e))
        .map((e) => e.name || e.type);
      i.length &&
        console.info(
          `[districts] ${t.id}: ${i.length} new scene roots during its build not added through its ctx.scene (not its content): ${i.slice(0, 8).join(`, `)}`,
        );
    },
    Ct = (t) => {
      if (c.has(t)) return;
      c.add(t);
      let r = new Set(e.scene.children);
      try {
        t.start?.(U(t));
      } catch (e) {
        n(t, `start`, e);
      }
      G(t, r);
    },
    wt = (t) =>
      document.hidden
        ? e.yieldFrame()
        : new Promise((e) => {
            let n = 0,
              r = () =>
                ++n >= t || document.hidden ? e() : requestAnimationFrame(r);
            requestAnimationFrame(r);
          }),
    Tt = (e, t, n) => {
      for (let r of X) {
        let i = De(r);
        if (!(!i.length || fr(i, e, t) > n) && !v(r) && !_(r)) return !1;
      }
      return !0;
    },
    Et = () => {
      let e = performance.now();
      for (let t = F.length - 1; t >= 0; t--) {
        let n = F[t];
        if (n.doneAt) e - n.doneAt > rr && F.splice(t, 1);
        else {
          let t = e - n.t0 > nr;
          (t || Tt(n.x, n.z, n.r)) &&
            (t &&
              console.warn(
                `[districts] ensureResident(${Math.round(n.x)}, ${Math.round(n.z)}) still building after ${nr / 1e3} s — continuing`,
              ),
            (n.doneAt = e),
            n.resolve());
        }
      }
    },
    Dt = (e, t, n) =>
      new Promise((i) => {
        let a = {
          x: e,
          z: t,
          r: n,
          t0: performance.now(),
          doneAt: 0,
          resolve: i,
        };
        (F.push(a),
          r &&
            console.info(
              `[districts] ensureResident(${Math.round(e)}, ${Math.round(t)}, ${Math.round(n)})`,
            ),
          K(),
          setTimeout(() => {
            a.doneAt || ((a.doneAt = performance.now()), i());
          }, 31e3));
      }),
    Ot = (t, n, i) => {
      let a = [],
        o = (e) => {
          try {
            let t = e();
            t &&
              typeof t.then == `function` &&
              a.push(
                _e(Promise.resolve(t), nr, `ensureResident part`).catch((e) => {
                  r &&
                    console.warn(`[districts] ensureResident part failed`, e);
                }),
              );
          } catch (e) {
            r && console.warn(`[districts] ensureResident part failed`, e);
          }
        };
      return (
        o(() => e.buildings?.ensureResident?.(t, n)),
        o(() => e.transit?.ensureResident?.(t, n)),
        o(() => e.culture?.ensureResident?.(t, n)),
        o(() => e.sites?.ensureResident(t, n)),
        i &&
          o(() =>
            e.interiors?.ensure?.(
              { x: t, z: n, radius: 15 },
              { holdS: 30, timeoutS: 10 },
            ),
          ),
        a
      );
    },
    kt = (t, n) => {
      try {
        return !!e.sites?.unbuiltAt(t, n);
      } catch {
        return !1;
      }
    },
    At = null,
    K = () => {
      let e = At;
      ((At = null), e?.());
    },
    q = (e) =>
      new Promise((t) => {
        let n = () => {
            (clearTimeout(r), At === n && (At = null), t());
          },
          r = setTimeout(n, e);
        At = n;
      }),
    jt = null,
    Mt = (e) =>
      m.has(e)
        ? `dropping`
        : d.has(e) || jt === e || g.has(e)
          ? `building`
          : s.has(e)
            ? `built`
            : _(e)
              ? `skipped`
              : `dormant`,
    Nt = {
      name: `districts`,
      get packs() {
        return X;
      },
      get pending() {
        let e = 0;
        for (let t of b) (!s.has(t) || d.has(t)) && !_(t) && Ne(t) && e++;
        return e;
      },
      get dormant() {
        let e = 0;
        for (let t of b) !s.has(t) && !_(t) && !Ne(t) && e++;
        return e;
      },
      claimed(e, t, n, r, i) {
        for (let a = 0; a < X.length; a++) {
          let o = X[a].claims;
          if (o)
            for (let a = 0; a < o.length; a++) {
              let s = o[a];
              if (
                (s.scope === `all` || s.scope === i) &&
                n > s.minX &&
                e < s.maxX &&
                r > s.minZ &&
                t < s.maxZ
              )
                return !0;
            }
        }
        return !1;
      },
      packAt(t, n) {
        return ur(X, e.plan, t, n, lr);
      },
      shopTradesAt(e, t) {
        let n = Nt.packAt(e, t);
        return n?.shopTrades?.length ? n.shopTrades : null;
      },
      storefront(e) {
        for (let t of X)
          if (t.storefront && s.has(t))
            try {
              let n = t.storefront(e);
              if (n) return n;
            } catch {}
        return null;
      },
      ensureResident(e, t, n, r) {
        if (!Number.isFinite(e) || !Number.isFinite(t))
          return Promise.resolve();
        let i = n !== void 0 && n >= 0 ? n : me(),
          a = Ot(e, t, r?.interiors !== !1),
          o = Tt(e, t, i) ? null : Dt(e, t, i);
        return (
          o && a.push(o),
          a.length ? Promise.all(a).then(() => void 0) : Promise.resolve()
        );
      },
      residencyOn() {
        return ae();
      },
      residency() {
        let e = {};
        for (let t of X) e[t.id] = Mt(t);
        return e;
      },
      unbuiltNear(e, t, n) {
        return !Tt(e, t, n ?? me()) || kt(e, t);
      },
      isBuilt(e) {
        return s.has(e);
      },
      packOf(e) {
        return Ie.get(e);
      },
      onPackBuilt(e) {
        S.push(e);
      },
      onPackDropped(e) {
        C.push(e);
      },
      onArrival(e) {
        w.push(e);
      },
      whenAllBuilt() {
        return O;
      },
      whenResidentBuilt() {
        return re;
      },
      onPackStart(e) {
        ee.push(e);
      },
      async init() {
        st();
        let t = j(),
          n = he(),
          r = [],
          i = [];
        for (let e of X) {
          let a = lr(e),
            o = a ? fr(dr(e), t.x, t.z) : 0;
          ie || !a || o <= n ? r.push(e) : i.push({ p: e, d: o });
        }
        (i.sort((e, t) => e.d - t.d),
          (b = i.map((e) => e.p)),
          r.sort((e, t) => +!lr(e) - !lr(t)));
        let a = !1,
          o = () => {
            if (a) return;
            a = !0;
            let t = e.plan.settleClaimedPois?.((e) =>
              X.some((t) => bt(t, e.id)),
            );
            t &&
              console.info(
                `[init] districts: ${t} POIs in pack-claimed lots dropped (plan.claimedPois)`,
              );
          };
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          (lr(n) || o(), e.loading(`districts: ${n.id}`, t / r.length));
          let i = new Set(e.scene.children);
          He = { p: n, before: i };
          try {
            await Fe(n, U(n));
          } finally {
            He = null;
          }
          (G(n, i),
            St(n, i),
            e.loading(`districts: ${n.id}`, (t + 1) / r.length),
            await e.yieldFrame());
        }
        (o(),
          b.length &&
            console.info(
              `[init] districts: ${r.length} built, deferred ${b.map((e) => e.id).join(`, `)}${ae() ? ` (residency on: R ${Math.round(pe())} m)` : ``}`,
            ),
          b.length || (D?.(), ne?.()));
      },
      start() {
        x = !0;
        for (let e of X) s.has(e) && Ct(e);
      },
      buildDeferred() {
        return (
          T ||
          ((T = (async () => {
            ((E = !0), st());
            let t = e.quality.mobile ? performance.now() : 0;
            for (;;) {
              (qt(), Et());
              let n = b.filter((e) => !s.has(e) && !_(e) && !m.has(e));
              if (!n.length && !ae()) break;
              let r = n.filter(Ne);
              if (!r.length) {
                (n.length || D?.(), ne?.(), await q(500));
                continue;
              }
              e.work ? await e.work.nextFrame() : await wt(2);
              let i = xt(r.filter(Ne));
              if (!i) continue;
              ae() && performance.now() - P < 4e3 && (await un());
              let a = i.p;
              jt = a;
              try {
                await Xt(i.d, t, i.urgent);
              } finally {
                jt = null;
              }
              s.has(a) ||
                m.has(a) ||
                ((await Wt(en(a), $n)) ||
                  (g.add(a),
                  d.delete(a),
                  console.warn(
                    `[districts] ${a.id} deferred build still running after ${$n / 1e3} s — moving on (it finishes in the background)`,
                  )),
                (t = performance.now()));
            }
            ((E = !1), ne?.(), D?.());
          })()),
          T)
        );
      },
      update(t) {
        let { x: r, z: i } = xe();
        if (Number.isFinite(M.x) && t > 0) {
          let e = r - M.x,
            n = i - M.z;
          if (Math.abs(e) + Math.abs(n) > 60)
            ((M.vx = M.vz = 0),
              (P = performance.now()),
              be &&
                (Nt.ensureResident?.(r, i),
                (N =
                  Tt(r, i, he()) && !kt(r, i) ? null : { x: r, z: i, t: 0 })));
          else {
            let r = Math.min(1, t * 2.5);
            ((M.vx += (e / t - M.vx) * r), (M.vz += (n / t - M.vz) * r));
          }
        }
        if (((M.x = r), (M.z = i), N)) {
          N.t += t;
          let n = he();
          if (
            (L.setFromMatrixPosition(e.camera.matrixWorld),
            N.t > 15 || (Tt(N.x, N.z, n) && !kt(N.x, N.z)))
          )
            N = null;
          else if (Math.hypot(L.x - r, L.z - i) < 60) {
            let e = N;
            N = null;
            for (let t of w)
              try {
                t(e.x, e.z, n);
              } catch (e) {
                console.warn(`[districts] arrival hook failed`, e);
              }
          }
        }
        for (let r = 0; r < X.length; r++) {
          let i = X[r];
          if (!i.update || !c.has(i)) continue;
          let a = performance.now();
          try {
            i.update(t, e);
          } catch (e) {
            n(i, `update`, e);
          }
          let o = performance.now() - a,
            s = y.get(i.id);
          (s || y.set(i.id, (s = { avg: 0, max: 0, n: 0 })),
            (s.avg += (o - s.avg) * 0.05),
            o > s.max && (s.max = o),
            s.n++);
        }
        ((Y -= t), Y <= 0 && ((Y = 1), sn(1)));
      },
      prewarm() {
        let t = [];
        for (let r of X)
          if (r.prewarm && !h.has(r))
            try {
              let n = r.prewarm(e);
              if (n) for (let e of n) e && e.isObject3D && t.push(e);
            } catch (e) {
              n(r, `prewarm`, e);
            }
        let r = t.filter((e) => e.castShadow);
        return (
          r.length &&
            (!Pt && e.quality.mobile && e.params.get(`lateprewarm`) !== `0`
              ? It.push(...r)
              : (Vt(r), Ft(r, () => e.yieldFrame()))),
          t
        );
      },
    },
    Pt = !1;
  e.events.on(`game:ready`, () => {
    if (((Pt = !0), !It.length)) return;
    let t = It.splice(0),
      n = () => (e.work ? e.work.nextFrame() : e.yieldFrame());
    (async () => {
      for (let e of t) (await n(), Vt([e]));
      Ft(t, n);
    })().catch((e) =>
      console.warn(`[districts] late shadow-depth prewarm failed`, e),
    );
  });
  let Ft = (t, n) => {
      e.quality.shadows &&
        e.renderer.warmShadowCasters &&
        e.renderer.warmShadowCasters(t, n).catch((e) => {
          r && console.warn(`[districts] shadow warm failed`, e);
        });
    },
    It = [],
    Lt = { 0: 1, 1: 0, 2: 2 },
    Rt = null,
    zt = new WeakMap(),
    J = null,
    Bt = (e, t) => {
      let n = e.customDepthMaterial;
      if (!n) {
        if (
          (t.displacementMap && t.displacementScale !== 0) ||
          (t.alphaMap && t.alphaTest > 0) ||
          (t.map && t.alphaTest > 0) ||
          t.alphaToCoverage === !0
        ) {
          let e = zt.get(t);
          (e || zt.set(t, (e = new i())), (n = e));
        } else n = J ??= new i();
      }
      return (
        (n.visible = t.visible),
        (n.wireframe = t.wireframe),
        (n.side =
          t.shadowSide !== null && t.shadowSide !== void 0
            ? t.shadowSide
            : Lt[t.side]),
        (n.alphaMap = t.alphaMap ?? null),
        (n.alphaTest = t.alphaToCoverage === !0 ? 0.5 : t.alphaTest),
        (n.map = t.map ?? null),
        (n.clipShadows = t.clipShadows),
        (n.clippingPlanes = t.clippingPlanes),
        (n.clipIntersection = t.clipIntersection),
        (n.displacementMap = t.displacementMap ?? null),
        (n.displacementScale = t.displacementScale ?? 1),
        (n.displacementBias = t.displacementBias ?? 0),
        n
      );
    },
    Vt = (t) => {
      let n = e.renderer.gl;
      if (!n.shadowMap.enabled || !e.quality.shadows) return 0;
      let i = [];
      e.scene.traverseVisible((e) => {
        e.isLight && i.push(e);
      });
      let a = new l();
      a.children = i;
      let s = new o(),
        c = s,
        d = n.getRenderTarget(),
        f = 0;
      try {
        n.setRenderTarget((Rt ??= new u(1, 1, { depthBuffer: !0 })));
        for (let i of t) {
          let t = i;
          if (
            !i.castShadow ||
            !(t.isMesh || i.isPoints || i.isLine) ||
            !t.material
          )
            continue;
          let o = Array.isArray(t.material) ? t.material : [t.material];
          for (let l of new Set(o)) {
            if (!l || !l.visible) continue;
            let o = Bt(i, l);
            try {
              i.onBeforeShadow(n, i, e.camera, e.camera, t.geometry, o, null);
            } catch {}
            let u = Object.create(i);
            ((u.children = []), (u.material = o), (c.children = [u]));
            try {
              (n.compile(s, e.camera, a), f++);
            } catch (e) {
              r && console.warn(`[districts] shadow-depth prewarm failed`, e);
            }
          }
        }
      } finally {
        (n.setRenderTarget(d), (c.children = []), (a.children = []));
      }
      return f;
    },
    Ht = ({ id: e }) => {
      let t = Se.get(e);
      t && Ce.get(t) === e && (Ce.delete(t), I.delete(t));
    };
  (e.events.on(`mission:started`, ({ id: e }) => {
    let t = Se.get(e);
    t &&
      (Ce.set(t, e),
      v(t) ||
        (I.add(t),
        r &&
          console.info(
            `[districts] mission '${e}' started: building ${t.id} now`,
          ),
        K()));
  }),
    e.events.on(`mission:completed`, Ht),
    e.events.on(`mission:failed`, Ht),
    e.events.on(`mission:aborted`, Ht));
  let Ut = (e) => new Promise((t) => setTimeout(t, e)),
    Wt = (e, t) =>
      new Promise((n) => {
        let r = !1;
        e.then(
          () => ((r = !0), n(!0)),
          (e) => {
            ((r = !0),
              console.warn(`[districts] deferred build failed`, e),
              n(!0));
          },
        );
        let i = 0,
          a = () => {
            r ||
              (document.hidden || (i += 1e3),
              i >= t ? n(!1) : setTimeout(a, 1e3));
          };
        setTimeout(a, 1e3);
      }),
    Gt = new Set(),
    Kt = (e, t = !1) => {
      if (!(!e.registerMissions || (Gt.has(e) && !t))) {
        Gt.add(e);
        try {
          e.registerMissions(U(e));
        } catch (t) {
          n(e, `registerMissions`, t);
        }
      }
    },
    qt = () => {
      if (ae()) for (let e of b) s.has(e) || _(e) || !ue(e) || Ne(e) || Kt(e);
    },
    Jt = () => {
      let e = performance.memory;
      return e ? e.usedJSHeapSize / 1048576 : -1;
    },
    Yt = ge() < 12e4,
    Xt = async (t, n, i) => {
      if (document.hidden) return;
      let a = !!e.quality.mobile,
        o = i
          ? Yt
            ? 1200
            : a
              ? 600
              : 0
          : Yt
            ? 2500
            : a
              ? 600 + (t > e.quality.drawDistance ? 1e3 : 0)
              : 0;
      if (o > 0) {
        let e = n + o - performance.now();
        e > 0 && (await Ut(e));
      }
      if (Jt() < 0) return;
      let s = i ? 300 : 1500,
        c = performance.now(),
        l = Jt(),
        u = c;
      for (;;) {
        await Ut(150);
        let e = Jt(),
          t = performance.now(),
          n = ((e - l) * 1e3) / Math.max(1, t - u);
        if (((l = e), (u = t), n < 60 || t - c > s || document.hidden)) {
          t - c > 300 &&
            r &&
            console.info(
              `[districts] heap gate ${Math.round(t - c)}ms (heap ${Math.round(e)} MB, ${Math.round(n)} MB/s)`,
            );
          return;
        }
      }
    },
    Zt = [],
    Qt = (e) => {
      (Zt.push(`${(performance.now() / 1e3).toFixed(1)}s ${e}`),
        Zt.length > 60 && Zt.shift());
    },
    $t = new Map(),
    en = async (t) => {
      let n = new Set(e.scene.children),
        i = new Set();
      (Ue.set(t, i),
        (We = i),
        (Ge = t),
        (Ke = !1),
        (Xe = 0),
        (Qe = ``),
        ($e = `init start`),
        (Ze = 0),
        d.add(t));
      let a = ($t.get(t) ?? 0) + 1;
      $t.set(t, a);
      let o = performance.now();
      for (let e of ee)
        try {
          e(t);
        } catch (e) {
          console.warn(`[districts] onPackStart hook failed`, e);
        }
      let s = !1;
      try {
        ((s = await Fe(t, yt(t), rt)), rt(), s && x && Ct(t));
      } finally {
        (nt(`the end of init + start()`),
          Ue.get(t) === i && Ue.delete(t),
          We === i && ((We = null), (Ge = null)));
      }
      g.delete(t);
      let c = Math.round(performance.now() - o);
      if (
        ((Xe > 50 || r) &&
          console.info(
            `[init] districts:${t.id} deferred build ${c}ms, ${Ze} yields, longest slice ${Xe.toFixed(0)}ms${a > 1 ? ` (rebuild ${a - 1})` : ``}${r && Qe ? ` — ended at ${Qe}` : ``}`,
          ),
        t.storefront)
      )
        for (let n of [...e.plan.claimedPois])
          bt(t, n.id) && e.plan.honorPoi(n.id);
      let l = s
        ? [...i].filter((n) => n.parent === e.scene && Ie.get(n) === t.id)
        : [];
      St(t, n);
      let u = [...i].filter((t) => t.parent !== e.scene);
      u.length && e.renderer.unhold?.(u);
      let f = performance.now();
      if (S.length)
        for (let e of S)
          try {
            await e(t, l);
          } catch (e) {
            console.warn(`[districts] onPackBuilt hook failed`, e);
          }
      (e.renderer.unhold?.(i),
        d.delete(t),
        de(t) && !Te.has(t) && je(t),
        Qt(
          `built ${t.id}${a > 1 ? ` (rebuild ${a - 1})` : ``}: init ${c} ms (longest slice ${Xe.toFixed(0)} ms), pipeline ${Math.round(performance.now() - f)} ms, ${Math.round(Me(t))} m`,
        ),
        Et());
    },
    Y = 2,
    tn = new Map(),
    nn = new Map(),
    rn = new Map(),
    an = (e) => {
      let t = rn.get(e);
      if (t !== void 0) return t;
      let n = new Set(),
        r = new Set(),
        i = 0;
      for (let t of Re.get(e) ?? [])
        t.traverse((e) => {
          let t = e;
          if (t.geometry && !r.has(t.geometry)) {
            r.add(t.geometry);
            for (let e in t.geometry.attributes) {
              let n = t.geometry.attributes[e];
              i +=
                (n.count || 0) *
                (n.itemSize || 0) *
                (n.array?.BYTES_PER_ELEMENT ?? 4);
            }
          }
          for (let e of Array.isArray(t.material)
            ? t.material
            : t.material
              ? [t.material]
              : [])
            for (let t in e) {
              let r = e[t];
              if (r && r.isTexture && !n.has(r)) {
                n.add(r);
                let e = r.userData?.gpuBytes,
                  t = r.image;
                i += e ?? (t?.width ?? 0) * (t?.height ?? 0) * 4 * 1.33;
              }
            }
        });
      return ((t = i / 1048576), rn.set(e, t), t);
    },
    on = (t) => {
      if (Ce.has(t)) return !0;
      try {
        return !!t.keepResident?.(e);
      } catch (e) {
        return (n(t, `keepResident`, e), !0);
      }
    },
    sn = (t) => {
      if (!ae() || m.size) return;
      if (!Ae) {
        for (let e of X)
          if (de(e) && v(e) && c.has(e) && !Te.has(e)) {
            je(e);
            break;
          }
      }
      let n = performance.now(),
        r = ve(),
        i = [];
      for (let e of X) {
        if (!de(e) || !v(e) || !c.has(e)) {
          tn.delete(e);
          continue;
        }
        if (Me(e) <= r || on(e) || I.has(e)) {
          (tn.delete(e), nn.set(e, n));
          continue;
        }
        let a = (tn.get(e) ?? 0) + t;
        (tn.set(e, a), a >= tr && i.push(e));
      }
      if (!i.length) return;
      if (ye > 0 && !e.renderer.gpuOom) {
        let e = 0;
        for (let t of X) de(t) && s.has(t) && (e += an(t));
        if (e <= ye) return;
      }
      i.sort((e, t) => (nn.get(e) ?? 0) - (nn.get(t) ?? 0));
      let a = i[0];
      (tn.delete(a), pn(a));
    },
    cn = e.renderer.gl.properties,
    ln = (e) => mr(e, e.isShaderMaterial ? void 0 : cn.get(e).uniforms),
    un = async () => {
      let e = ve();
      for (;;) {
        if (m.size) {
          await Ut(50);
          continue;
        }
        let t = X.find(
          (t) => de(t) && v(t) && c.has(t) && !I.has(t) && Me(t) > e && !on(t),
        );
        if (!t) return;
        await pn(t, `jump`);
      }
    },
    dn = new Map(),
    fn = (t) => {
      let n = 0;
      for (let i of t) {
        let t = i,
          a = Array.isArray(t.material)
            ? t.material
            : t.material
              ? [t.material]
              : [];
        for (let t of a) {
          let a = t;
          if (!a || !a.isShaderMaterial) continue;
          let o = `${a.vertexShader}\u0000${a.fragmentShader}`;
          if (!dn.has(o) && cn.get(a).programs?.size)
            try {
              let t = a.clone();
              ((t.name = `${a.name || `shader`}:keeper`),
                Object.prototype.hasOwnProperty.call(a, `onBeforeCompile`) &&
                  (t.onBeforeCompile = a.onBeforeCompile),
                Object.prototype.hasOwnProperty.call(
                  a,
                  `customProgramCacheKey`,
                ) && (t.customProgramCacheKey = a.customProgramCacheKey));
              for (let e in t.uniforms) {
                let n = t.uniforms[e]?.value;
                n &&
                  (n.isTexture || Array.isArray(n)) &&
                  (t.uniforms[e].value = null);
              }
              let s = e.renderer.gl.info.programs?.length ?? 0;
              if (!e.renderer.compileAs?.(i, t)) continue;
              ((e.renderer.gl.info.programs?.length ?? 0) > s &&
                r &&
                console.info(
                  `[districts] shader keeper '${t.name}' compiled a new program (its key differs from the pack's)`,
                ),
                dn.set(o, t),
                n++);
            } catch (e) {
              console.warn(`[districts] shader keeper failed`, e);
            }
        }
      }
      return n;
    },
    pn = async (t, r = `far`) => {
      if (m.has(t) || !s.has(t)) return;
      m.add(t);
      let i = performance.now(),
        a = i,
        o = 0,
        l = async () => {
          ((o = Math.max(o, performance.now() - a)),
            e.work ? await e.work.yield() : await e.yieldFrame(),
            (a = performance.now()));
        },
        u = () => (e.work ? e.work.shouldYield() : performance.now() - a > 4),
        d = Math.round(Me(t)),
        f = 0,
        p = new Set(),
        h = new Set(),
        g = new Set(),
        _ = 0,
        v = 0,
        y = 0,
        x = 0;
      try {
        let r = new Set(Re.get(t) ?? []);
        for (let n of e.scene.children)
          (Ie.get(n) === t.id || n.userData?.owner === t.id) && r.add(n);
        let i = [],
          a = new Set(),
          o = (e) => {
            if (a.has(e)) return;
            (a.add(e), i.push(e));
            let t = e;
            t.geometry && p.add(t.geometry);
            let n = Array.isArray(t.material)
                ? t.material
                : t.material
                  ? [t.material]
                  : [],
              r = [e.customDepthMaterial, e.customDistanceMaterial];
            for (let e of [...n, ...r]) e && h.add(e);
          };
        for (let e of r) e.traverse(o);
        for (let [n, r] of ze.get(t) ?? []) {
          if (Ie.get(r) !== t.id) continue;
          let i = n;
          for (; i.parent && i.parent !== e.scene;) i = i.parent;
          (i.parent !== e.scene || Ie.get(i) === t.id) && n.traverse(o);
        }
        (Re.delete(t), ze.delete(t));
        for (let e of h) for (let t of ln(e)) g.add(t);
        x = fn(i);
        let s = performance.now();
        c.delete(t);
        try {
          t.unload?.(e);
        } catch (e) {
          n(t, `unload`, e);
        }
        ((f = performance.now() - s), await l());
        let d = [];
        for (let e of r) {
          let t = !1;
          if (
            (e.traverse((e) => {
              e.isLight && (t = !0);
            }),
            t)
          ) {
            (d.push(e), r.delete(e));
            continue;
          }
          e.parent && e.parent.remove(e);
        }
        (d.length &&
          console.warn(
            `[districts] ${t.id}: ${d.length} roots with lights stay in the scene (hide them in unload())`,
          ),
          e.renderer.unhold?.(r),
          (_ = r.size));
        let m = new Set(),
          b = e.scene.children.slice();
        for (let e of b)
          (e.traverse((e) => {
            let t = e;
            t.geometry && p.delete(t.geometry);
            let n = Array.isArray(t.material)
              ? t.material
              : t.material
                ? [t.material]
                : [];
            for (let e of n)
              if (e) {
                h.delete(e);
                for (let t of ln(e)) (g.delete(t), t.image && m.add(t.image));
              }
          }),
            u() && (await l()));
        e.renderer.pinPrograms?.();
        let S = 0;
        for (let e of i) {
          let t = e;
          try {
            t.isInstancedMesh || t.isBatchedMesh
              ? t.dispose()
              : e.isSkinnedMesh && e.skeleton?.dispose?.();
          } catch {}
          ++S % 64 == 0 && u() && (await l());
        }
        for (let e of p)
          (e.dispose(),
            (e.userData.__tgtaDropped = t.id),
            y++,
            ++S % 32 == 0 && u() && (await l()));
        for (let e of g)
          (e.dispose(),
            m.has(e.image) || oe(e, t.id),
            v++,
            ++S % 16 == 0 && u() && (await l()));
        for (let e of h) e.dispose();
        let C = mt.get(t);
        if (C) {
          for (let t of C.c) e.statics.remove(t);
          for (let t of C.f) e.statics.removeFloor?.(t);
          ((C.c.length = 0), (C.f.length = 0));
        }
      } catch (e) {
        console.warn(`[districts] ${t.id} drop failed`, e);
      } finally {
        (s.delete(t),
          c.delete(t),
          rn.delete(t),
          tn.delete(t),
          ze.delete(t),
          Kt(t, !0));
        for (let e of C)
          try {
            e(t, { geometries: p, textures: g, materials: h });
          } catch (e) {
            console.warn(`[districts] onPackDropped hook failed`, e);
          }
        (m.delete(t),
          b.includes(t) || b.push(t),
          (o = Math.max(o, performance.now() - a)));
        let e = Math.round(performance.now() - i),
          n = `dropped ${t.id} (${r}, ${d} m): ${_} roots, ${y} geometries, ${v} textures${x ? `, ${x} shader keepers` : ``} in ${e} ms (unload ${f.toFixed(0)} ms, longest slice ${o.toFixed(0)} ms)`;
        (Qt(n),
          console.info(`[districts] ${n}`),
          E || ((T = null), Nt.buildDeferred()),
          K());
      }
    },
    mn = (e) => {
      try {
        return e() ?? null;
      } catch {
        return null;
      }
    },
    hn = () => {
      let t = {},
        n = mn(() => e.buildings?.residency?.());
      n &&
        (t[`@buildings`] = n.on
          ? `${n.building ? `building` : `built`} (${n.built} built, ${n.building} building, ${n.dormant} dormant chunks, ${n.geoMB.toFixed(1)} MB)`
          : `off`);
      let r = mn(() => e.transit?.residency?.());
      if (r) {
        let e = Object.values(r),
          n = (t) => e.filter((e) => String(e).startsWith(t)).length;
        t[`@transit`] =
          `resident (${n(`signs+interior`)} signs+interior, ${n(`interior`)} interior, ${n(`signs`) - n(`signs+interior`)} signs, ${n(`far`)} far stations)`;
      }
      let i = mn(() => e.culture?.residency?.());
      if (i) {
        let e = Object.values(i),
          n = e.filter((e) => e === `building`).length,
          r = e.filter((e) => e === `built`).length;
        t[`@culture`] =
          `${n ? `building` : `built`} (${r} built, ${n} building, ${e.length - r - n} dormant areas)`;
      }
      let a = mn(() => e.interiors?.residency?.());
      a &&
        (t[`@interiors`] = a.dormant
          ? `dormant`
          : `${a.counts.building ? `building` : `built`} (${a.counts.built} built, ${a.counts.building} building, ${a.counts.warm} warm, ${a.counts.cold} cold)`);
      let o = mn(() => e.sites?.residency());
      return (
        o &&
          (t[`@sites`] = o.off
            ? `off`
            : `${o.counts.busy ? `building` : `built`} (${o.counts.visible} tiers shown, ${o.counts.cached} parked, ${o.counts.busy} building, ${o.sites} far proxies, ${o.geoMB.toFixed(1)} MB geometry, atlas ${o.atlasMB} MB ${o.slots})`),
        t
      );
    };
  return (
    (window.__residency = {
      drop: (e) => {
        let t = X.find((t) => t.id === e);
        return !t || !v(t) || !c.has(t)
          ? `not built`
          : !t.unload || !t.registerMissions
            ? `no unload/registerMissions`
            : m.size
              ? `busy`
              : (pn(t, `debug`), !0);
      },
      state: () => ({ ...Nt.residency(), ...hn() }),
      systems: () => ({
        buildings: mn(() => e.buildings?.residency?.()),
        transit: mn(() => e.transit?.residency?.()),
        culture: mn(() => e.culture?.residency?.()),
        interiors: mn(() => e.interiors?.residency?.()),
        sites: mn(() => e.sites?.residency()),
      }),
      content: () =>
        Object.fromEntries(
          X.filter((e) => lr(e)).map((e) => {
            let t = Te.get(e),
              n = t?.length
                ? [
                    Math.min(...t.map((e) => e.minX)),
                    Math.min(...t.map((e) => e.minZ)),
                    Math.max(...t.map((e) => e.maxX)),
                    Math.max(...t.map((e) => e.maxZ)),
                  ]
                : null;
            return [
              e.id,
              {
                bounds: lr(e),
                residencyBounds: e.residencyBounds ?? null,
                cells: t?.length ?? 0,
                cellsExtent: n,
              },
            ];
          }),
        ),
      anchors: () => {
        let { x: e, z: t } = xe();
        return {
          player: [Math.round(e), Math.round(t)],
          velocity: [+M.vx.toFixed(1), +M.vz.toFixed(1)],
          R: Math.round(pe()),
          dropR: Math.round(ve()),
          requests: F.map((e) => ({
            x: Math.round(e.x),
            z: Math.round(e.z),
            r: Math.round(e.r),
            done: !!e.doneAt,
          })),
          forced: [...I].map((e) => e.id),
          dist: Object.fromEntries(
            X.filter((e) => lr(e)).map((e) => [e.id, Math.round(Me(e))]),
          ),
          now: Object.fromEntries(
            X.filter((e) => lr(e)).map((n) => [
              n.id,
              Math.round(fr(De(n), e, t)),
            ]),
          ),
          cells: Object.fromEntries([...Te].map(([e, t]) => [e.id, t.length])),
        };
      },
      log: Zt,
    }),
    Nt
  );
}
