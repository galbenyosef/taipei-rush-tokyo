// tokyo/assets/region-tokyo-d-ueno-DfmWW0p_ 02 — batch
// Lines 351-697 of readable/tokyo/assets/region-tokyo-d-ueno-DfmWW0p_.pretty.js (statement-aligned).
function ie(e, t, n, r, i, a, o = 1) {
  return (
    (e[0] = a * o),
    (e[1] = 0),
    (e[2] = -i * o),
    (e[3] = 0),
    (e[4] = 0),
    (e[5] = o),
    (e[6] = 0),
    (e[7] = 0),
    (e[8] = i * o),
    (e[9] = 0),
    (e[10] = a * o),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = r),
    (e[15] = 1),
    e
  );
}
var ae = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  oe = Error(`pack: dropped while building`);
function se(e) {
  return e.quality.mobile || e.quality.level === `low`
    ? 0
    : e.quality.level === `medium`
      ? 1
      : 2;
}
function ce(e, t) {
  let n = e.time.date ?? { y: 2026, m: 10, d: 5 };
  ((t.h = e.env?.hour ?? 12),
    (t.wd = e.time.weekday ?? 1),
    (t.m = n.m),
    (t.d = n.d));
  let r = e.params?.get(`season`) ?? null,
    i = h({ y: n.y, m: n.m, d: n.d }, r);
  return (
    (t.sakura =
      i.sakura > 0.05 ||
      i.sakuraFall > 0.05 ||
      r === `sakura` ||
      r === `hanafubuki`),
    (t.lotus = i.lotus),
    (t.lotusDead = i.lotusDead),
    (t.yearEnd = (n.m === 12 && n.d >= 26) || e.params?.get(`yearend`) === `1`),
    t
  );
}
function le(e) {
  let t = null,
    n = !1,
    r = !1,
    i = -1,
    a = {
      h: 12,
      wd: 1,
      m: 10,
      d: 5,
      sakura: !1,
      lotus: 0,
      lotusDead: 0,
      yearEnd: !1,
    };
  async function o(i) {
    if (n || t) return;
    ((n = !0), (r = !1));
    let o = performance.now(),
      c = 0,
      f = ``,
      h = performance.now(),
      g = async (e = !1, t = ``) => {
        let n = performance.now() - h;
        if (e || n > 1.2) {
          if ((n > c && ((c = n), (f = t)), await i.yieldFrame(), r)) throw oe;
          h = performance.now();
        }
      };
    try {
      let n = se(i),
        _ = new T(e.id, e.pageH);
      if (
        (e.cells(_, n),
        await g(!0, `cells`),
        await i.region.signage.fontsReady?.catch(() => !1),
        r)
      )
        throw oe;
      h = performance.now();
      let v = s(2048, i.quality),
        y = _.paint(v),
        b = y.next();
      for (; !b.done;) (await g(!1, `paint`), (b = y.next()));
      let x = b.value,
        S = e.content(i, _, n);
      await g(!1, `content`);
      let C = [],
        w = new d(8192, 12288),
        ee = 0;
      for (let t of S.uniques)
        (w.reset(),
          t.write(w),
          w.n &&
            (C.push({ name: `u:${t.name}`, geo: m(w, `${e.id}-${t.name}`) }),
            (ee += w.ni / 3),
            await g(!1, `unique ${t.name}`)));
      let te = new Set(S.instances.map((e) => e.model));
      for (let t of S.models)
        te.has(t.name) &&
          (w.reset(),
          t.write(w),
          w.n &&
            (C.push({ name: t.name, geo: m(w, `${e.id}-kit-${t.name}`) }),
            await g(!1, `model ${t.name}`)));
      let E = u(`opaque`, {
          policy: i.quality.materials,
          map: x,
          batched: !0,
          name: e.id,
        }),
        D = new p(
          e.id,
          E,
          C,
          S.uniques.length + S.instances.length + 16,
          !!i.quality.shadows,
        );
      ((D.mesh.userData.owner = e.id), D.enableCulling(i.camera));
      let ne = [];
      ce(i, a);
      for (let e of S.uniques) {
        let t = D.models.get(`u:${e.name}`);
        if (t === void 0) continue;
        let n = !e.when || e.when(a),
          r = D.add(t, ae, e.cx, e.cz, e.range, n);
        e.when && ne.push({ id: r, on: e.when, state: n });
      }
      let O = new Float32Array(16),
        k = 0;
      for (let e of S.instances) {
        let t = D.models.get(e.model);
        if (t === void 0) continue;
        ie(O, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1);
        let n = !e.when || e.when(a),
          r = D.add(t, O, e.x, e.z, e.range, n);
        (e.when && ne.push({ id: r, on: e.when, state: n }), k++);
      }
      await g(!1, `batch`);
      let A = 0;
      for (let e of S.circles)
        (i.statics.addCircle(e.x, e.z, e.r, e.y0, e.y1, `pole`), A++);
      for (let e of S.boxes)
        (i.statics.addBox(
          e.minX,
          e.minZ,
          e.maxX,
          e.maxZ,
          e.y0,
          e.y1,
          e.tag ?? `building`,
        ),
          A++);
      for (let e of S.obbs ?? [])
        (i.statics.addOBB(
          e.cx,
          e.cz,
          e.hx,
          e.hz,
          e.heading,
          e.y0,
          e.y1,
          e.tag ?? `building`,
        ),
          A++);
      for (let t of S.floors ?? [])
        i.statics.addFloor(
          t.cx,
          t.cz,
          t.hx,
          t.hz,
          t.y0,
          t.y1,
          t.heading,
          `${e.id}-floor`,
        );
      if (r) throw oe;
      i.scene.add(D.mesh);
      let re = i.params.has(`${e.id}atlas`);
      (re || l(x),
        (t = {
          batch: D,
          tex: x,
          timed: ne,
          stats: {
            uniques: S.uniques.length,
            instances: k,
            tris: Math.round(ee),
            models: C.length,
            atlas: v,
            atlasUsed: _.used,
            overflow: _.overflow,
            colliders: A,
            floors: S.floors?.length ?? 0,
            buildMs: Math.round(performance.now() - o),
            maxSliceMs: +c.toFixed(1),
            maxSliceAt: f,
            slowCell: `${_.slowKey} ${_.slowMs.toFixed(1)}`,
          },
        }));
      for (let e of C) e.geo.dispose();
      if (i.params.has(`debug`) || i.params.has(`${e.id}test`)) {
        let n = window;
        n[`__${e.id}`] = {
          stats: () => t?.stats,
          batch: () =>
            t && {
              count: t.batch.count,
              shown: t.batch.shown,
              tris: t.batch.shownTris,
            },
          clock: () => ({ ...a }),
          placed: (e) =>
            S.instances
              .filter((t) => t.model.startsWith(e))
              .map((e) => [+e.x.toFixed(1), +e.y.toFixed(2), +e.z.toFixed(1)]),
          atlas: () => (re ? x.image.toDataURL(`image/png`) : null),
        };
      }
      console.info(
        `[init] districts:${e.id} ${S.uniques.length} pieces + ${k} kit instances, ${t.stats.tris} unique tris, atlas ${v} (${_.used}/${e.pageH} used, ${_.overflow} overflow), ${A} colliders, ${t.stats.buildMs} ms (slice max ${t.stats.maxSliceMs} ms at ${f})`,
      );
    } catch (e) {
      if (e !== oe) throw e;
    } finally {
      n = !1;
    }
  }
  function c(e) {
    i = -1;
  }
  function f(e, n) {
    let r = t;
    if (!r) return;
    let o = n.camera.position;
    r.batch.regather(o.x, o.z, 1, 8);
    let s = n.time.elapsed;
    if (!(s - i < 1)) {
      ((i = s), ce(n, a));
      for (let e of r.timed) {
        let t = e.on(a);
        t !== e.state && ((e.state = t), r.batch.setOn(e.id, t));
      }
    }
  }
  function h(e) {
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
    init: o,
    start: c,
    update: f,
    unload: h,
    stats: () => t?.stats ?? null,
  };
}
var N = (e) => (b(e) ? v(e) : e);
function ue(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function P(e, t, n, r, i, a, o, s = `900`, c = g()) {
  let l = ue(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function de(e, t, n, r, i, a, o, s = `800`, c = g()) {
  let l = ue(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `left`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function fe(e, t, n, r, i, a, o, s, c = `900`, l = g()) {
  let u = ue(e, t, i, a, l, c);
  ((e.font = `${c} ${Math.min(u, a)}px ${l}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    (e.lineJoin = `round`),
    (e.lineWidth = Math.max(2, u * 0.14)),
    (e.strokeStyle = s),
    e.strokeText(t, n, r + a * 0.04),
    (e.fillStyle = o),
    e.fillText(t, n, r + a * 0.04));
}
function F(e, t, n, r, i, a, o = 0.55, s) {
  ((e.fillStyle = a),
    (e.globalAlpha = o),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1),
    s &&
      ((e.strokeStyle = s),
      (e.lineWidth = Math.max(2, Math.min(r, i) * 0.05)),
      e.strokeRect(
        t + e.lineWidth,
        n + e.lineWidth,
        r - e.lineWidth * 2,
        i - e.lineWidth * 2,
      )));
}
function I(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function pe(e, t, n, r, i, a, o = 0.5) {
  (e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.globalAlpha = o),
    (e.fillStyle = a),
    e.beginPath(),
    e.rect(t, n, r, i),
    e.clip(),
    e.fillRect(t, n, r, i),
    e.restore());
}
function L(e, t, n, r, i, a = r) {
  ((e.globalAlpha = 1),
    (e.fillStyle = i),
    e.beginPath(),
    e.ellipse(t, n, r, a, 0, 0, Math.PI * 2),
    e.fill());
}
