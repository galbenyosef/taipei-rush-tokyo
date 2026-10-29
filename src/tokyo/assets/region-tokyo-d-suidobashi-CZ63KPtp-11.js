// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 11 — batch
// Lines 3262-3598 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function St(e) {
  let t = null,
    n = !1,
    r = !1,
    i = -1,
    a = Error(`${e.name}: dropped while building`),
    o = `[${e.name}]`;
  function s(t) {
    for (let [n, r] of Object.entries(e.blocks))
      t.plan.blocks.find(
        (e) =>
          Math.abs(e.minX - r.minX) < 0.6 &&
          Math.abs(e.minZ - r.minZ) < 0.6 &&
          Math.abs(e.maxX - r.maxX) < 0.6 &&
          Math.abs(e.maxZ - r.maxZ) < 0.6,
      ) ||
        console.warn(
          `${o} block ${n} no longer matches the plan (layout.ts BLOCKS)`,
        );
  }
  async function l(i) {
    if (n || t) return;
    ((n = !0), (r = !1));
    let l = performance.now(),
      u = 0,
      m = ``,
      _ = performance.now(),
      v = async (e = !1, t = ``) => {
        let n = performance.now() - _;
        if (e || n > 1.2) {
          if ((n > u && ((u = n), (m = t)), await i.yieldFrame(), r)) throw a;
          _ = performance.now();
        }
      };
    try {
      s(i);
      let n =
          i.quality.mobile || i.quality.level === `low`
            ? 0
            : i.quality.level === `medium`
              ? 1
              : 2,
        y = e.shops(),
        b = e.old?.() ?? [],
        x = e.pieces?.() ?? [],
        S = new te(e.name, e.pageH ?? 2048);
      (Ke(S, y), it(S, b));
      for (let e of x) e.request(S);
      if (
        (ct(S, e.kit),
        await v(!0, `cells`),
        await i.region.signage.fontsReady?.catch(() => !1),
        r)
      )
        throw a;
      _ = performance.now();
      let w = c(C, i.quality),
        ee = S.paint(w),
        ne = ee.next();
      for (; !ne.done;) (await v(!1, `paint`), (ne = ee.next()));
      let T = ne.value,
        E = [],
        D = new p(8192, 12288),
        re = 0,
        O = 0,
        k = (t) => {
          if (!D.n) return !1;
          let n = g(D, `${e.name}-${t}`);
          (E.push({ name: t, geo: n }), (re += D.ni / 3));
          for (let e of Object.values(n.attributes)) O += e.array.byteLength;
          return ((O += n.index?.array.byteLength ?? 0), !0);
        },
        A = new Map();
      for (let e of y)
        (D.reset(),
          A.set(e.id, Je(D, e, S, n)),
          k(`shop:${e.id}`),
          D.reset(),
          Xe(D, e, S) && k(`shut:${e.id}`),
          D.reset(),
          Ze(D, e, S) && k(`open:${e.id}`),
          await v(!1, `shop`));
      for (let e of b)
        (D.reset(),
          A.set(`old:${e.id}`, at(D, e, S, n)),
          k(`old:${e.id}`),
          D.reset(),
          ot(D, e, S) && k(`oldopen:${e.id}`),
          D.reset(),
          st(D, e, S) && k(`oldshut:${e.id}`),
          await v(!1, `old`));
      let j = [],
        ie = [];
      for (let e of x)
        (D.reset(),
          j.push(...e.write(D, S, n)),
          k(`piece:${e.name}`) && ie.push(e),
          await v(!1, `piece:${e.name}`));
      let M = bt(S, e.kit, e.name);
      for (let e of M.models) {
        E.push(e);
        for (let t of Object.values(e.geo.attributes)) O += t.array.byteLength;
        O += e.geo.index?.array.byteLength ?? 0;
      }
      let ae = e.place(i);
      await v(!1, `kit`);
      let N = f(`opaque`, {
          policy: i.quality.materials,
          map: T,
          batched: !0,
          name: e.name,
        }),
        oe = y.length * 3 + b.length * 3 + ie.length + ae.instances.length + 16,
        P = new h(e.name, N, E, oe, !!i.quality.shadows);
      ((P.mesh.userData.owner = e.name), P.enableCulling(i.camera));
      let F = [],
        I = (e) => P.models.get(e),
        R = (e) => [(e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2];
      for (let e of y) {
        let [t, n] = R(e),
          r = (A.get(e.id) ?? 20) > 22 ? 520 : 420;
        P.add(I(`shop:${e.id}`), L, t, n, r);
        let i = e.hours;
        (i &&
          I(`shut:${e.id}`) !== void 0 &&
          F.push({
            id: P.add(I(`shut:${e.id}`), L, t, n, 300, !1),
            on: (e) => !xt(e, i),
            state: !1,
          }),
          I(`open:${e.id}`) !== void 0 &&
            F.push({
              id: P.add(I(`open:${e.id}`), L, t, n, 220, !1),
              on: (e) => !i || xt(e, i),
              state: !1,
            }));
      }
      for (let e of b) {
        let [t, n] = R(e);
        P.add(I(`old:${e.id}`), L, t, n, 420);
        let r = e.hours;
        (I(`oldopen:${e.id}`) !== void 0 &&
          F.push({
            id: P.add(I(`oldopen:${e.id}`), L, t, n, 220, !1),
            on: (e) => !r || xt(e, r),
            state: !1,
          }),
          r &&
            I(`oldshut:${e.id}`) !== void 0 &&
            F.push({
              id: P.add(I(`oldshut:${e.id}`), L, t, n, 260, !1),
              on: (e) => !xt(e, r),
              state: !1,
            }));
      }
      for (let e of ie) {
        let t = P.add(I(`piece:${e.name}`), L, e.x, e.z, e.range, !e.when);
        e.when && F.push({ id: t, on: e.when, state: !1 });
      }
      let ce = new Float32Array(16),
        z = 0;
      for (let e of ae.instances) {
        let t = I(e.model);
        if (t === void 0) {
          console.warn(`${o} kit model ${e.model} missing`);
          continue;
        }
        let n = e.y ?? i.plan.groundHeight(e.x, e.z),
          r = e.world ? L : se(ce, e.x, n, e.z, e.fx, e.fz, e.s ?? 1),
          a = P.add(t, r, e.x, e.z, e.range, !e.when);
        (e.when && F.push({ id: a, on: e.when, state: !1 }),
          (z += M.tris.get(e.model) ?? 0));
      }
      await v(!1, `batch`);
      let B = 0;
      for (let e of y) {
        let [t, n] = R(e);
        (i.statics.addOBB(
          t,
          n,
          (e.x1 - e.x0) / 2,
          (e.z1 - e.z0) / 2,
          0,
          0,
          A.get(e.id) ?? Ie(e),
          `building`,
        ),
          B++);
      }
      for (let e of b) {
        let [t, n] = R(e);
        (i.statics.addOBB(
          t,
          n,
          (e.x1 - e.x0) / 2,
          (e.z1 - e.z0) / 2,
          0,
          0,
          A.get(`old:${e.id}`) ?? et(e),
          `building`,
        ),
          B++);
      }
      for (let e of j)
        (i.statics.addOBB(e.cx, e.cz, e.hx, e.hz, 0, 0, e.h, `building`), B++);
      for (let e of ae.circles)
        (i.statics.addCircle(e.x, e.z, e.r, 0, e.h, `pole`), B++);
      if (r) throw a;
      i.scene.add(P.mesh);
      let le = i.params.has(`${e.name}atlas`);
      le || d(T);
      let V = Math.round((w * S.pageH) / C);
      t = {
        batch: P,
        tex: T,
        timed: F,
        stats: {
          shops: y.length,
          old: b.length,
          tris: Math.round(re + z),
          models: E.length,
          instances: P.count,
          atlas: w,
          atlasUsed: S.used,
          overflow: S.overflow,
          texMB: +((w * V * 4 * 4) / 3 / 1048576).toFixed(1),
          geoMB: +(O / 1048576).toFixed(2),
          colliders: B,
          buildMs: Math.round(performance.now() - l),
          maxSliceMs: +u.toFixed(1),
          maxSliceAt: m,
          slowCell: `${S.slowKey} ${S.slowMs.toFixed(1)}`,
        },
      };
      for (let e of E) e.geo.dispose();
      if (i.params.has(`debug`) || i.params.has(`${e.name}test`)) {
        let n = window;
        n[`__${e.name}`] = {
          stats: () => t?.stats,
          batch: () =>
            t && {
              count: t.batch.count,
              shown: t.batch.shown,
              tris: t.batch.shownTris,
            },
          atlas: () => (le ? T.image.toDataURL(`image/png`) : null),
        };
      }
      let H = t.stats;
      console.info(
        `[init] districts:${e.name} ${H.shops} buildings + ${H.old} wooden houses, ${H.tris} tris (${H.geoMB} MB geometry), atlas ${w} (${S.used}/${S.pageH} used, ${S.overflow} overflow, ${H.texMB} MB), ${B} colliders, ${H.buildMs} ms (slice max ${H.maxSliceMs} ms at ${m})`,
      );
    } catch (e) {
      if (e !== a) throw e;
    } finally {
      n = !1;
    }
  }
  function u(e) {
    i = -1;
  }
  function m(e, n) {
    let r = t;
    if (!r) return;
    let a = n.camera.position;
    r.batch.regather(a.x, a.z, n.quality.mobile ? 0.8 : 1, 8);
    let o = n.time.elapsed;
    if (o - i < 1) return;
    i = o;
    let s = n.env?.hour ?? 12,
      c = n.time.weekday ?? 1;
    for (let e of r.timed) {
      let t = e.on(s, c);
      t !== e.state && ((e.state = t), r.batch.setOn(e.id, t));
    }
  }
  function _(e) {
    r = !0;
    let n = t;
    ((t = null),
      (i = -1),
      n &&
        (n.batch.mesh.parent?.remove(n.batch.mesh),
        n.batch.mesh.dispose(),
        n.batch.mesh.material.dispose(),
        n.tex.dispose()));
  }
  return {
    init: l,
    start: u,
    update: m,
    unload: _,
    stats: () => t?.stats ?? null,
  };
}
var Ct = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8;
function K(e, t, n) {
  let r = n.map(({ a: n, b: r, ...i }) => {
    let a = e === `N` || e === `S`;
    return {
      ...i,
      dir: e,
      x0: a ? n : t[0],
      x1: a ? r : t[1],
      z0: a ? t[0] : n,
      z1: a ? t[1] : r,
    };
  });
  for (let t = 0; t < r.length; t++) {
    let n = r[t - 1],
      i = r[t + 1],
      a = e === `S` || e === `W`,
      o = n ? Ct(n) : 0,
      s = i ? Ct(i) : 0;
    ((r[t].coverL ??= a ? o : s), (r[t].coverR ??= a ? s : o));
  }
  return r;
}
var q = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, sub: i }),
  J = (e, t, n, r) => ({ main: e, floor: t, bg: n, fg: r }),
  Y = (e, t, n, r, i) => ({ main: e, bg: t, fg: n, acc: r, top: i }),
  X = (e, t = `#2a1a0e`, n = `#f0dca8`, r) => ({
    main: e,
    sub: r,
    bg: t,
    fg: n,
    style: `wood`,
    serif: !0,
  }),
  wt = (e, t, n, r) => ({
    main: e,
    sub: r,
    bg: t,
    fg: n,
    style: `enamel`,
    serif: !0,
  });
