// tokyo/assets/region-tokyo-d-marunouchi-I3NX4HcD 14 — batch
// Lines 4009-4263 of readable/tokyo/assets/region-tokyo-d-marunouchi-I3NX4HcD.pretty.js (statement-aligned).
function Yt(e, t, n) {
  let { y: r, m: i, d: a, wd: o } = qt(t),
    s = o === 0 || o === 6 || ee({ y: r, m: i, d: a });
  switch (e) {
    case `illum`:
    case `illum-gyoko`: {
      if (!Jt(i, a, e === `illum-gyoko`)) return !1;
      let t = i === 12 ? f.offDec : f.off;
      return n >= 6 && n < t;
    }
    case `terrace`: {
      let [e, t] = s ? m.weekend : m.weekday;
      return n >= e && n < t;
    }
    case `trucks`:
      return !s && n >= T[0] && n < T[1];
  }
}
async function Xt(e) {
  if (zt || $) return;
  ((zt = !0), (Bt = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    l = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), Bt)) throw Ut;
        i = performance.now();
      }
    };
  try {
    Gt(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      f = new oe();
    if (
      (ut(f),
      Mt(f),
      await l(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Bt)
    )
      throw Ut;
    i = performance.now();
    let p = s(2048, e.quality),
      m = f.paint(p),
      h = m.next();
    for (; !h.done;) (await l(!1, `paint`), (h = m.next()));
    let g = h.value,
      v = [],
      y = new c(16384, 24576),
      b = [],
      S = e.plan.sidewalkHeight ?? 0.15,
      w = 0;
    for (let e of Rt)
      (y.reset(),
        e.fn({ w: y, A: f, cols: b, base: S, detail: u }),
        (w += y.ni / 3),
        v.push({ name: `hero:${e.id}`, geo: x(y, `maru-${e.id}`) }),
        await l(!1, `hero ${e.id}`));
    for (let e of Nt(f, u)) (v.push(e()), await l(!1, `kit models`));
    let T = Ft(e, f, u);
    for (let e of T.strips) (v.push(e), (w += (e.geo.index?.count ?? 0) / 3));
    await l(!1, `kit`);
    let E = o(`opaque`, {
        policy: e.quality.materials,
        map: g,
        batched: !0,
        name: `marunouchi`,
      }),
      D = new d(
        `marunouchi`,
        E,
        v,
        Rt.length + T.strips.length + T.instances.length + 64,
        !!e.quality.shadows,
      );
    ((D.mesh.userData.owner = `marunouchi`), D.enableCulling(e.camera));
    let O = (e) => D.models.get(e);
    for (let e of [`ginkgo`, `naka`, `katsura`])
      for (let t of [`green`, `autumn`, `bloom`, `bare`])
        D.setLod(O(It(e, t)), O(`${It(e, t)}-far`), 70);
    let k = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    for (let e of Rt) D.add(O(`hero:${e.id}`), k, e.cx, e.cz, e.range);
    for (let e of T.strips) {
      let t =
        e.geo.boundingBox ?? (e.geo.computeBoundingBox(), e.geo.boundingBox);
      D.add(
        O(e.name),
        k,
        (t.min.x + t.max.x) / 2,
        (t.min.z + t.max.z) / 2,
        260,
      );
    }
    let A = _(e),
      ee = [],
      j = [];
    (T.instances.forEach((e, t) => {
      C(Wt, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1, e.s ?? 1, e.s ?? 1);
      let n = e.tree ? It(e.model, A) : e.model,
        r = D.add(O(n), Wt, e.x, e.z, e.range, !e.when);
      (e.when && ee.push({ id: r, when: e.when, state: !1 }),
        e.tree && j.push({ id: r, i: t }));
    }),
      await l(!1, `batch`));
    let M = 0;
    for (let t of b)
      (e.statics.addBox(t.x0, t.z0, t.x1, t.z1, t.y0, t.y1, `building`), M++);
    for (let t of T.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), M++);
    if (Bt) throw Ut;
    e.scene.add(D.mesh);
    let N = e.params.has(`maruatlas`);
    (N || a(g),
      ($ = {
        batch: D,
        tex: g,
        kit: T,
        timed: ee,
        trees: j,
        season: A,
        stats: {
          heroes: Rt.length,
          tris: Math.round(w),
          models: v.length,
          instances: D.count,
          atlas: p,
          atlasUsed: f.used,
          overflow: f.overflow,
          colliders: M,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${f.slowKey} ${f.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of v) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`marutest`)) &&
      (window.__maru = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        timed: () =>
          $?.timed
            .map((e) => ({ when: e.when, on: e.state }))
            .filter((e, t, n) => n.findIndex((t) => t.when === e.when) === t),
        atlas: () => (N ? g.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:marunouchi ${$.stats.heroes} heroes, ${$.stats.tris} tris, atlas ${p} (${f.used}/${re} used, ${f.overflow} overflow), ${M} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== Ut) throw e;
  } finally {
    zt = !1;
  }
}
function Zt(e) {
  ((Vt = -1), (Ht.length = 0));
  let t = D;
  for (let e = 0; e < 3; e++)
    Ht.push({
      on: !1,
      release: null,
      x: t.x0 + 4.5 + e * 8 + 0.4,
      z: t.z1 + 1.6,
    });
}
function Qt(e, t, n) {
  for (let t of e.trees) {
    let r = e.kit.instances[t.i];
    (e.batch.remove(t.id),
      C(Wt, r.x, r.y, r.z, r.fx, r.fz, r.s ?? 1, r.s ?? 1, r.s ?? 1),
      (t.id = e.batch.add(
        e.batch.models.get(It(r.model, n)),
        Wt,
        r.x,
        r.z,
        r.range,
      )));
  }
  e.season = n;
}
function $t(e, t) {
  let n = e.player.position;
  for (let r of Ht) {
    let i = t && Math.hypot(n.x - r.x, n.z - r.z) < 120;
    if (i && !r.on) {
      try {
        let t = e.peds.crowd(r.x, r.z + 1.2, 0.6, 4, [`office`], {
          mode: `queue`,
          lookX: r.x,
          lookZ: r.z - 2.5,
          poses: [`idle`, `phone`],
        });
        r.release = typeof t == `function` ? t : null;
      } catch {
        r.release = null;
      }
      r.on = !0;
    } else if (!i && r.on) {
      try {
        r.release?.();
      } catch {}
      ((r.release = null), (r.on = !1));
    }
  }
}
var en = { k: 1 };
function tn(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, en.k, 8);
  let i = t.time.elapsed;
  if (i - Vt < 1) return;
  Vt = i;
  let a = t.env?.hour ?? 12,
    o = !1;
  for (let e of n.timed) {
    let r = Yt(e.when, t, a);
    (e.when === `trucks` && (o = r),
      r !== e.state && ((e.state = r), n.batch.setOn(e.id, r)));
  }
  let s = _(t);
  (s !== n.season && Qt(n, t, s), $t(t, o));
}
function nn(e) {
  Bt = !0;
  for (let e of Ht)
    if (e.on)
      try {
        e.release?.();
      } catch {}
  Ht.length = 0;
  let t = $;
  (($ = null),
    (Vt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
