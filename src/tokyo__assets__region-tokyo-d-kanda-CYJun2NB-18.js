// tokyo__assets__region-tokyo-d-kanda-CYJun2NB 18 — add
// Lines 5453-5718 of readable/tokyo__assets__region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
async function $n(e) {
  if (qn || $) return;
  ((qn = !0), (Jn = !1));
  let t = performance.now(),
    n = 0,
    i = ``,
    s = performance.now(),
    c = async (t = !1, r = ``) => {
      let a = performance.now() - s;
      if (t || a > 1.2) {
        if ((a > n && ((n = a), (i = r)), await e.yieldFrame(), Jn)) throw Xn;
        s = performance.now();
      }
    };
  try {
    Qn(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      d = ht(),
      f = new ie();
    (Ze(f, d), Ct(f), Ft(f), Gt(f), Zt(f));
    let h = !e.params.has(`gorge`) || e.params.get(`gorge`) !== `0`;
    if (
      (h && bn(f),
      await c(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Jn)
    )
      throw Xn;
    s = performance.now();
    let g = l(2048, e.quality),
      _ = f.paint(g),
      v = _.next();
    for (; !v.done;) (await c(!1, `paint`), (v = _.next()));
    let y = v.value,
      b = [],
      x = new r(8192, 12288),
      S = 0,
      C = (e) =>
        x.n
          ? (b.push({ name: e, geo: m(x, `kanda-${e}`) }), (S += x.ni / 3), !0)
          : !1,
      ee = new Map();
    for (let e of d)
      (x.reset(),
        ee.set(e.id, et(x, e, f, u)),
        C(`shop:${e.id}`),
        x.reset(),
        nt(x, e, f) && C(`shut:${e.id}`),
        x.reset(),
        rt(x, e, f) && C(`open:${e.id}`),
        await c(!1, `shop`));
    for (let e of vt)
      (x.reset(),
        ee.set(`old:${e.id}`, Tt(x, e, f, u)),
        C(`old:${e.id}`),
        x.reset(),
        Et(x, e, f),
        C(`oldopen:${e.id}`),
        x.reset(),
        Dt(x, e, f),
        C(`oldshut:${e.id}`),
        await c(!1, `old`));
    x.reset();
    let te = Rt(x, f, u);
    (C(`nikolai`), await c(!1, `nikolai`), x.reset());
    let ne = qt(x, f, u);
    (C(`seido`), await c(!1, `seido`));
    let w = sn(on(f));
    for (let e of w.models) b.push(e);
    await c(!1, `kit`);
    let re = h ? In(f, e.plan, u) : { pieces: [], tris: 0 };
    for (let e of re.pieces) b.push({ name: e.name, geo: e.geo });
    if (h) for (let e of Ln(f)) b.push(e);
    ((S += re.tris), await c(!1, `gorge`));
    let ae = o(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `kanda`,
      }),
      se =
        d.length * 3 +
        vt.length * 3 +
        4 +
        w.instances.length +
        re.pieces.length +
        12 +
        16,
      T = new p(`kanda`, ae, b, se, !!e.quality.shadows);
    ((T.mesh.userData.owner = `kanda`), T.enableCulling(e.camera));
    let ce = [],
      E = (e) => T.models.get(e),
      le = (e) => [(e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2];
    for (let e of d) {
      let [t, n] = le(e),
        r = (ee.get(e.id) ?? 20) > 22 ? 520 : 420;
      T.add(E(`shop:${e.id}`), R, t, n, r);
      let i = e.hours;
      (i &&
        E(`shut:${e.id}`) !== void 0 &&
        ce.push({
          id: T.add(E(`shut:${e.id}`), R, t, n, 300, !1),
          on: (e) => !Zn(e, i),
          state: !1,
        }),
        E(`open:${e.id}`) !== void 0 &&
          ce.push({
            id: T.add(E(`open:${e.id}`), R, t, n, 220, !1),
            on: (e) => !i || Zn(e, i),
            state: !1,
          }));
    }
    for (let e of vt) {
      let t = (gt + _t) / 2,
        n = (e.z0 + e.z1) / 2;
      (T.add(E(`old:${e.id}`), R, t, n, 420),
        ce.push({
          id: T.add(E(`oldopen:${e.id}`), R, t, n, 220, !1),
          on: (t) => Zn(t, e.hours),
          state: !1,
        }),
        ce.push({
          id: T.add(E(`oldshut:${e.id}`), R, t, n, 260, !1),
          on: (t) => !Zn(t, e.hours),
          state: !1,
        }));
    }
    (E(`nikolai`) !== void 0 && T.add(E(`nikolai`), R, Ot.x, Ot.z, 900),
      E(`seido`) !== void 0 &&
        T.add(
          E(`seido`),
          R,
          (oe.minX + oe.maxX) / 2,
          (oe.minZ + oe.maxZ) / 2,
          600,
        ));
    let ue = new Float32Array(16);
    for (let e of w.instances) {
      let t = e.world ? R : ge(ue, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1),
        n = T.add(E(e.model), t, e.x, e.z, e.range, !e.when);
      e.when && ce.push({ id: n, on: e.when, state: !1 });
    }
    for (let e of re.pieces) T.add(E(e.name), R, e.x, e.z, e.range);
    let D = h ? new Wn(T) : null;
    await c(!1, `batch`);
    let O = 0;
    for (let t of d) {
      let [n, r] = le(t);
      (e.statics.addOBB(
        n,
        r,
        (t.x1 - t.x0) / 2,
        (t.z1 - t.z0) / 2,
        0,
        0,
        ee.get(t.id) ?? 10,
        `building`,
      ),
        O++);
    }
    for (let t of vt)
      (e.statics.addOBB(
        (gt + _t) / 2,
        (t.z0 + t.z1) / 2,
        (_t - gt) / 2,
        (t.z1 - t.z0) / 2,
        0,
        0,
        ee.get(`old:${t.id}`) ?? 8,
        `building`,
      ),
        O++);
    for (let t of [...te, ...ne])
      (e.statics.addOBB(t.cx, t.cz, t.hx, t.hz, 0, 0, t.h, `building`), O++);
    for (let t of w.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), O++);
    if (Jn) throw Xn;
    e.scene.add(T.mesh);
    let de = e.params.has(`kandaatlas`);
    (de || a(y),
      ($ = {
        batch: T,
        tex: y,
        timed: ce,
        train: D,
        stats: {
          shops: d.length + vt.length,
          tris: Math.round(S + w.tris),
          models: b.length,
          instances: T.count,
          atlas: g,
          atlasUsed: f.used,
          overflow: f.overflow,
          colliders: O,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: i,
          slowCell: `${f.slowKey} ${f.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`kandatest`)) &&
      (window.__kanda = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        atlas: () => (de ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:kanda ${$.stats.shops} buildings + ニコライ堂 + 湯島聖堂, ${$.stats.tris} tris, atlas ${g} (${f.used}/2816 used, ${f.overflow} overflow), ${O} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${i})`,
      ));
  } catch (e) {
    if (e !== Xn) throw e;
  } finally {
    qn = !1;
  }
}
function er(e) {
  Yn = -1;
}
function tr(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  if ((n.batch.regather(r.x, r.z, t.quality.mobile ? 0.8 : 1, 8), n.train)) {
    n.train.update(t);
    let e = window;
    if (!e.__kandaGorge) {
      let r = n.train;
      e.__kandaGorge = {
        seek: (e, n) => r.seek(t, e, n),
        cars: () => r.visibleCars,
      };
    }
  }
  let i = t.time.elapsed;
  if (i - Yn < 1) return;
  Yn = i;
  let a = t.env?.hour ?? 12,
    o = t.time.weekday ?? 1;
  for (let e of n.timed) {
    let t = e.on(a, o);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function nr(e) {
  Jn = !0;
  let t = $;
  (($ = null),
    (Yn = -1),
    t &&
      (typeof window < `u` && delete window.__kandaGorge,
      t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
