// tokyo__assets__region-tokyo-d-marunouchi-BoijeA75 14 — batch
// Lines 4009-4263 of readable/tokyo__assets__region-tokyo-d-marunouchi-BoijeA75.pretty.js (statement-aligned).
function Yt(e, t, n) {
  let { y: r, m: i, d: a, wd: o } = qt(t),
    s = o === 0 || o === 6 || ne({ y: r, m: i, d: a });
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
      return !s && n >= D[0] && n < D[1];
  }
}
async function Xt(e) {
  if (Vt || Z) return;
  ((Vt = !0), (Q = !1));
  let t = performance.now(),
    r = 0,
    o = ``,
    s = performance.now(),
    l = async (t = !1, n = ``) => {
      let i = performance.now() - s;
      if (t || i > 1.2) {
        if ((i > r && ((r = i), (o = n)), await e.yieldFrame(), Q)) throw Wt;
        s = performance.now();
      }
    };
  try {
    Kt(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      d = new le();
    if (
      (ft(d),
      Pt(d),
      await l(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Q)
    )
      throw Wt;
    s = performance.now();
    let f = c(2048, e.quality),
      p = d.paint(f),
      m = p.next();
    for (; !m.done;) (await l(!1, `paint`), (m = p.next()));
    let h = m.value,
      g = [],
      _ = new n(16384, 24576),
      y = [],
      b = e.plan.sidewalkHeight ?? 0.15,
      x = 0;
    for (let e of Bt)
      (_.reset(),
        e.fn({ w: _, A: d, cols: y, base: b, detail: u }),
        (x += _.ni / 3),
        g.push({ name: `hero:${e.id}`, geo: te(_, `maru-${e.id}`) }),
        await l(!1, `hero ${e.id}`));
    for (let e of Ft(d, u)) (g.push(e()), await l(!1, `kit models`));
    let S = Lt(e, d, u);
    for (let e of S.strips) (g.push(e), (x += (e.geo.index?.count ?? 0) / 3));
    await l(!1, `kit`);
    let C = a(`opaque`, {
        policy: e.quality.materials,
        map: h,
        batched: !0,
        name: `marunouchi`,
      }),
      T = new ee(
        `marunouchi`,
        C,
        g,
        Bt.length + S.strips.length + S.instances.length + 64,
        !!e.quality.shadows,
      );
    ((T.mesh.userData.owner = `marunouchi`), T.enableCulling(e.camera));
    let E = (e) => T.models.get(e);
    for (let e of [`ginkgo`, `naka`, `katsura`])
      for (let t of [`green`, `autumn`, `bloom`, `bare`])
        T.setLod(E(Rt(e, t)), E(`${Rt(e, t)}-far`), 70);
    let D = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    for (let e of Bt) T.add(E(`hero:${e.id}`), D, e.cx, e.cz, e.range);
    for (let e of S.strips) {
      let t =
        e.geo.boundingBox ?? (e.geo.computeBoundingBox(), e.geo.boundingBox);
      T.add(
        E(e.name),
        D,
        (t.min.x + t.max.x) / 2,
        (t.min.z + t.max.z) / 2,
        260,
      );
    }
    let O = v(e),
      k = [],
      A = [];
    (S.instances.forEach((e, t) => {
      w(Gt, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1, e.s ?? 1, e.s ?? 1);
      let n = e.tree ? Rt(e.model, O) : e.model,
        r = T.add(E(n), Gt, e.x, e.z, e.range, !e.when);
      (e.when && k.push({ id: r, when: e.when, state: !1 }),
        e.tree && A.push({ id: r, i: t }));
    }),
      await l(!1, `batch`));
    let j = 0;
    for (let t of y)
      (e.statics.addBox(t.x0, t.z0, t.x1, t.z1, t.y0, t.y1, `building`), j++);
    for (let t of S.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), j++);
    if (Q) throw Wt;
    e.scene.add(T.mesh);
    let M = e.params.has(`maruatlas`);
    (M || i(h),
      (Z = {
        batch: T,
        tex: h,
        kit: S,
        timed: k,
        trees: A,
        season: O,
        stats: {
          heroes: Bt.length,
          tris: Math.round(x),
          models: g.length,
          instances: T.count,
          atlas: f,
          atlasUsed: d.used,
          overflow: d.overflow,
          colliders: j,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +r.toFixed(1),
          maxSliceAt: o,
          slowCell: `${d.slowKey} ${d.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of g) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`marutest`)) &&
      (window.__maru = {
        stats: () => Z?.stats,
        batch: () =>
          Z && {
            count: Z.batch.count,
            shown: Z.batch.shown,
            tris: Z.batch.shownTris,
          },
        timed: () =>
          Z?.timed
            .map((e) => ({ when: e.when, on: e.state }))
            .filter((e, t, n) => n.findIndex((t) => t.when === e.when) === t),
        atlas: () => (M ? h.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:marunouchi ${Z.stats.heroes} heroes, ${Z.stats.tris} tris, atlas ${f} (${d.used}/${oe} used, ${d.overflow} overflow), ${j} colliders, ${Z.stats.buildMs} ms (slice max ${Z.stats.maxSliceMs} ms at ${o})`,
      ));
  } catch (e) {
    if (e !== Wt) throw e;
  } finally {
    Vt = !1;
  }
}
function Zt(e) {
  ((Ht = -1), (Ut.length = 0));
  let t = k;
  for (let e = 0; e < 3; e++)
    Ut.push({
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
      w(Gt, r.x, r.y, r.z, r.fx, r.fz, r.s ?? 1, r.s ?? 1, r.s ?? 1),
      (t.id = e.batch.add(
        e.batch.models.get(Rt(r.model, n)),
        Gt,
        r.x,
        r.z,
        r.range,
      )));
  }
  e.season = n;
}
function $t(e, t) {
  let n = e.player.position;
  for (let r of Ut) {
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
  let n = Z;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, en.k, 8);
  let i = t.time.elapsed;
  if (i - Ht < 1) return;
  Ht = i;
  let a = t.env?.hour ?? 12,
    o = !1;
  for (let e of n.timed) {
    let r = Yt(e.when, t, a);
    (e.when === `trucks` && (o = r),
      r !== e.state && ((e.state = r), n.batch.setOn(e.id, r)));
  }
  let s = v(t);
  (s !== n.season && Qt(n, t, s), $t(t, o));
}
function nn(e) {
  Q = !0;
  for (let e of Ut)
    if (e.on)
      try {
        e.release?.();
      } catch {}
  Ut.length = 0;
  let t = Z;
  ((Z = null),
    (Ht = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
