// tokyo/assets/region-tokyo-d-akihabara-BJsB2qLX 13 — batch
// Lines 3460-3694 of readable/tokyo/assets/region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
async function Ct(e) {
  if (yt || X) return;
  ((yt = !0), (Z = !1));
  let t = performance.now(),
    r = 0,
    o = ``,
    s = performance.now(),
    l = async (t = !1, n = ``) => {
      let i = performance.now() - s;
      if (t || i > 1.2) {
        if ((i > r && ((r = i), (o = n)), await e.yieldFrame(), Z)) throw xt;
        s = performance.now();
      }
    };
  try {
    St(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      d = me(),
      f = new te(),
      p = Be(f, d);
    if (
      (qe(f),
      ft(f),
      gt(f),
      await l(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Z)
    )
      throw xt;
    s = performance.now();
    let m = c(2048, e.quality),
      h = f.paint(m),
      v = h.next();
    for (; !v.done;) (await l(!1, `paint`), (v = h.next()));
    let y = v.value,
      b = [],
      x = new n(8192, 12288),
      S = [],
      C = 0;
    for (let e of d) {
      x.reset();
      let t = Ge(x, e, p.get(e.id), f, u),
        n = _(x, `akiba-${e.id}`);
      ((C += x.ni / 3),
        b.push({ name: `hero:${e.id}`, geo: n }),
        S.push({ hero: e, h: t.h, name: `hero:${e.id}` }),
        await l(!1, `hero`));
    }
    (x.reset(),
      pt(x, e.plan, f),
      x.n &&
        (b.push({ name: `maach`, geo: _(x, `akiba-maach`) }), (C += x.ni / 3)),
      await l(!1, `maach`),
      x.reset(),
      _t(x, e.plan, f),
      x.n &&
        (b.push({ name: `station`, geo: _(x, `akiba-station`) }),
        (C += x.ni / 3)),
      await l(!1, `station`));
    for (let e of it(f)) b.push(e);
    await l(!1, `kit`);
    let w = at(e, f, u),
      ee = a(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `akihabara`,
      }),
      T = new g(
        `akihabara`,
        ee,
        b,
        d.length + 8 + w.count + 32,
        !!e.quality.shadows,
      );
    ((T.mesh.userData.owner = `akihabara`), T.enableCulling(e.camera));
    for (let e of S) {
      let t = e.hero;
      T.add(
        T.models.get(e.name),
        Se,
        (t.x0 + t.x1) / 2,
        (t.z0 + t.z1) / 2,
        900,
      );
    }
    (T.models.has(`maach`) && T.add(T.models.get(`maach`), Se, -175, -566, 520),
      T.models.has(`station`) &&
        T.add(T.models.get(`station`), Se, -40, -644, 420));
    let E = [],
      D = new Float32Array(16);
    for (let e of w.instances) {
      xe(D, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1);
      let t = T.add(T.models.get(e.model), D, e.x, e.z, e.range, !e.when);
      e.when && E.push({ id: t, on: e.when, state: !1 });
    }
    await l(!1, `batch`);
    let O = 0;
    for (let t of S) {
      let n = t.hero;
      (e.statics.addOBB(
        (n.x0 + n.x1) / 2,
        (n.z0 + n.z1) / 2,
        (n.x1 - n.x0) / 2,
        (n.z1 - n.z0) / 2,
        0,
        0,
        t.h,
        `building`,
      ),
        O++);
    }
    for (let t of w.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), O++);
    Q.clear();
    for (let t of S) {
      let n = t.hero.poi;
      if (!n) continue;
      let r = [...e.plan.pois, ...(e.plan.claimedPois ?? [])].find(
          (e) => e.id === n.id,
        ),
        i = t.hero,
        [a, o] =
          n.dir === `E`
            ? [1, 0]
            : n.dir === `W`
              ? [-1, 0]
              : n.dir === `N`
                ? [0, -1]
                : [0, 1],
        s = o,
        c = -a,
        l = a ? (a > 0 ? i.x1 : i.x0) : s > 0 ? i.x0 : i.x1,
        u = o ? (o > 0 ? i.z1 : i.z0) : c > 0 ? i.z0 : i.z1,
        d = l + s * n.at + a * 0.6,
        f = u + c * n.at + o * 0.6;
      Q.set(n.id, {
        x: d,
        z: f,
        facing: Math.atan2(a, -o),
        width: n.width,
        height: 3.2,
        poiId: n.id,
        kind: r?.kind ?? n.kind,
        brand: r?.brand,
        name: n.name,
        category: n.category,
        hours: n.hours,
      });
    }
    if (Z) throw xt;
    e.scene.add(T.mesh);
    let k = e.params.has(`akibaatlas`);
    (k || i(y),
      (X = {
        batch: T,
        tex: y,
        kit: w,
        timed: E,
        stats: {
          heroes: d.length,
          tris: Math.round(C + w.tris),
          models: b.length,
          instances: T.count,
          atlas: m,
          atlasUsed: f.used,
          overflow: f.overflow,
          colliders: O,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +r.toFixed(1),
          maxSliceAt: o,
          slowCell: `${f.slowKey} ${f.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`akibatest`)) &&
      (window.__akiba = {
        stats: () => X?.stats,
        batch: () =>
          X && {
            count: X.batch.count,
            shown: X.batch.shown,
            tris: X.batch.shownTris,
          },
        storefronts: () => [...Q.values()],
        atlas: () => (k ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:akihabara ${X.stats.heroes} buildings, ${X.stats.tris} tris, atlas ${m} (${f.used}/2048 used, ${f.overflow} overflow), ${O} colliders, ${X.stats.buildMs} ms (slice max ${X.stats.maxSliceMs} ms)`,
      ));
  } catch (e) {
    if (e !== xt) throw e;
  } finally {
    yt = !1;
  }
}
function wt(e) {
  bt = -1;
}
var Tt = { k: 1 };
function Et(e, t) {
  let n = X;
  if (!n) return;
  let r = t.camera.position;
  ((Tt.k = 1), n.batch.regather(r.x, r.z, Tt.k, 8));
  let i = t.time.elapsed;
  if (i - bt < 1) return;
  bt = i;
  let a = t.env?.hour ?? 12,
    o = t.time.weekday === 0;
  for (let e of n.timed) {
    let t = e.on(a, o);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function Dt(e) {
  return Q.get(e) ?? null;
}
function Ot(e) {
  Z = !0;
  let t = X;
  ((X = null),
    Q.clear(),
    (bt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
