// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 13 — math
// Lines 3486-3818 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
async function $t(e) {
  if (Gt || Q) return;
  ((Gt = !0), (Kt = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    c = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), Kt)) throw Jt;
        i = performance.now();
      }
    };
  try {
    let l =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      u = Qt(e);
    await c(!0, `check`);
    let d = new ve(),
      f = vt();
    if (
      (ct(d, f),
      bt(d),
      Tt(d),
      Nt(d),
      Bt(d),
      await c(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Kt)
    )
      throw Jt;
    i = performance.now();
    let h = s(2048, e.quality),
      g = d.paint(h),
      _ = g.next();
    for (; !_.done;) (await c(!1, `paint`), (_ = g.next()));
    let v = _.value,
      y = new Ae(),
      b = e.plan,
      x = await gt(y, d, b, f, l, () => c(!1, `rows`));
    (St(y, d, b.groundHeight((k.x0 + k.x1) / 2, k.z0 + 1)),
      await c(!1, `bunka`),
      Dt(y, d, b.groundHeight((O.x0 + O.x1) / 2, (O.zn + O.zs) / 2)),
      kt(y, d, b.groundHeight(610, -1277.6)),
      await c(!1, `arcade`));
    let S = Lt(y, d, b.groundHeight((m.x0 + m.x1) / 2, (m.z0 + m.z1) / 2), l);
    ((Zt = S.seats), await c(!1, `hoppy`), Vt(y, d));
    let C = Ut(e);
    await c(!1, `kit`);
    let w = y.pieces.map((e) => ({ name: e.name, geo: e.geo })),
      ee = o(`opaque`, {
        policy: e.quality.materials,
        map: v,
        batched: !0,
        name: `asakusa`,
      }),
      T = new p(
        `asakusa`,
        ee,
        w,
        y.pieces.length + C.length + 16,
        !!e.quality.shadows,
      );
    ((T.mesh.userData.owner = `asakusa`), T.enableCulling(e.camera));
    let E = new Map(),
      D = (e, t) => {
        let n = E.get(e);
        (n || E.set(e, (n = [])), n.push(t));
      },
      A = 0;
    for (let e of y.pieces) {
      if (
        ((A += e.geo.getAttribute(`position`).count), e.name.startsWith(`kit:`))
      )
        continue;
      let t = T.add(
        T.models.get(e.name),
        e.matrix ?? Te,
        e.x,
        e.z,
        e.range,
        e.group === `always`,
      );
      e.group !== `always` && D(e.group, t);
    }
    let te = new Float32Array(16);
    for (let e of C) {
      we(te, e.x, e.y, e.z, e.fx, e.fz);
      let t = T.add(
        T.models.get(`kit:${e.model}`),
        te,
        e.x,
        e.z,
        e.range,
        !e.group,
      );
      e.group && D(e.group, t);
    }
    await c(!1, `batch`);
    let j = 0;
    for (let t of y.obbs)
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, t.rot, t.y0, t.y1, `building`),
        j++);
    for (let t of y.circles)
      (e.statics.addCircle(t.x, t.z, t.r, t.y0, t.y1, `pole`), j++);
    if (Kt) throw Jt;
    e.scene.add(T.mesh);
    let ne = e.params.has(`asaatlas`);
    (ne || a(v),
      (Q = {
        batch: T,
        tex: v,
        groups: E,
        state: new Map(),
        stats: {
          pieces: y.pieces.length,
          instances: T.count,
          tris: Math.round(y.tris),
          verts: A,
          units: x,
          izakaya: S.units,
          atlas: h,
          atlasUsed: d.used,
          overflow: d.overflow,
          colliders: j,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${d.slowKey} ${d.slowMs.toFixed(1)}`,
          lotMismatch: u,
        },
      }));
    for (let e of w) e.geo.dispose();
    (tn(S.tables),
      (e.params.has(`debug`) || e.params.has(`asatest`)) &&
        (window.__asakusa = {
          stats: () => Q?.stats,
          batch: () =>
            Q && {
              count: Q.batch.count,
              shown: Q.batch.shown,
              tris: Q.batch.shownTris,
            },
          state: () => Q && Object.fromEntries(Q.state),
          atlas: () => (ne ? v.image.toDataURL(`image/png`) : null),
        }),
      console.info(
        `[init] districts:asakusa ${y.pieces.length} pieces, ${x} shops, ${S.units} izakaya, ${Q.stats.tris} tris / ${A} verts, atlas ${h} (${d.used}/2816 used, ${d.overflow} overflow), ${j} colliders, ${Q.stats.buildMs} ms (slice max ${Q.stats.maxSliceMs} ms at ${r})${u ? `, ${u} lot mismatches` : ``}`,
      ));
  } catch (e) {
    if (e !== Jt) throw e;
  } finally {
    Gt = !1;
  }
}
function en(e, t, n, r, i, a, o) {
  try {
    let s = e.peds.crowd(t, n, r, i, a, o);
    return typeof s == `function` ? s : null;
  } catch {
    return null;
  }
}
function tn(e) {
  Xt = [];
  let t = (e, t, n, r, i) =>
      Xt.push({ x: e, z: t, r: n, on: !1, release: null, want: r, spawn: i }),
    n = (e) => $(e, Yt.day),
    r = (e) => $(e, Yt.shop),
    i = (e) => $(e, Yt.bar);
  for (let [e, r, i] of u)
    t(e, r, 140, n, (t) =>
      en(t, e, r, 0.35, 1, [`vendor`], {
        mode: `watch`,
        lookX: e + Math.sin(i) * 5,
        lookZ: r - Math.cos(i) * 5,
        poses: [`idle`, `wave`, `chat`],
        dress: `festival`,
        sheltered: !1,
      }),
    );
  let a = (b.x0 + b.x1) / 2;
  (t(
    a + 3.5,
    -1254,
    130,
    (e) => $(e, [10, 18.5]),
    (e) =>
      en(
        e,
        a + 3.4,
        -1254,
        1.2,
        9,
        [`tourist`, `auntie`, `tourist`, `elder`, `student`],
        { mode: `queue`, lookX: a, lookZ: b.door - 0.4 },
      ),
  ),
    t(700, -1256.5, 140, r, (e) =>
      en(e, 700, -1256.5, 6, 6, [`tourist`], {
        mode: `mill`,
        dress: `festival`,
      }),
    ),
    t(650, -1256, 140, r, (e) =>
      en(e, 650, -1256, 5, 4, [`tourist`], { mode: `mill`, dress: `festival` }),
    ),
    t(600, -1310, 140, r, (e) =>
      en(e, 600, -1310, 7, 5, [`tourist`], {
        mode: `mill`,
        dress: `festival`,
        sheltered: !0,
      }),
    ));
  for (let e of [568, 588, 626])
    t(e, -1310, 140, r, (t) =>
      en(
        t,
        e,
        -1310,
        8,
        7,
        [`tourist`, `tourist`, `auntie`, `elder`, `student`],
        { mode: `mill`, sheltered: !0 },
      ),
    );
  for (let e of [-1405, -1370, -1335])
    t(500.3, e, 120, i, (t) =>
      en(t, 500.3, e, 5, 5, [`uncle`, `office`, `tourist`, `elder`, `uncle`], {
        mode: `mill`,
      }),
    );
}
var nn = [];
function rn(e, t) {
  let n = e.player.position,
    r =
      t &&
      Math.hypot(
        n.x - 500.3,
        Math.max(0, Math.abs(n.z - (m.z0 + m.z1) / 2) - (m.z1 - m.z0) / 2),
      ) < 70,
    i = e.peds.spawnScripted;
  if (!r || !i) {
    for (let e of nn)
      try {
        e.p?.release();
      } catch {}
    nn = [];
    return;
  }
  let a = Zt.map((e, t) => ({ i: t, d: Math.hypot(e.x - n.x, e.z - n.z) }))
      .filter((e) => e.i % 2 == 0 || e.i % 7 == 3)
      .sort((e, t) => e.d - t.d)
      .slice(0, 14)
      .map((e) => e.i),
    o = new Set(a);
  nn = nn.filter((e) => {
    if (o.has(e.i)) return !0;
    try {
      e.p?.release();
    } catch {}
    return !1;
  });
  let s = new Set(nn.map((e) => e.i)),
    c = [`uncle`, `office`, `uncle`, `elder`, `tourist`, `office`];
  for (let t of a) {
    if (s.has(t)) continue;
    let n = Zt[t],
      r = null;
    try {
      r = i.call(e.peds, n.x, n.z, {
        kind: c[t % c.length],
        pose: `sit`,
        seat: 0.42,
        heading: n.h,
      });
    } catch {
      r = null;
    }
    nn.push({ i: t, p: r });
  }
}
function an(e) {
  qt = -1;
}
function on(e, t) {
  let n = Q;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, 1, 8);
  let i = t.time.elapsed;
  if (i - qt < 1) return;
  qt = i;
  let a = t.env?.hour ?? 12,
    o = {
      shop: $(a, Yt.shop),
      eat: $(a, Yt.eat),
      bar: $(a, Yt.bar),
      day: $(a, Yt.day),
    },
    s = [
      [`shopOpen`, o.shop],
      [`shopShut`, !o.shop],
      [`eatOpen`, o.eat],
      [`eatShut`, !o.eat],
      [`barOpen`, o.bar],
      [`barShut`, !o.bar],
      [`day`, o.day],
    ];
  for (let [e, t] of s)
    if (n.state.get(e) !== t) {
      n.state.set(e, t);
      for (let r of n.groups.get(e) ?? []) n.batch.setOn(r, t);
    }
  let c = t.player.position;
  for (let e of Xt) {
    let n = Math.hypot(c.x - e.x, c.z - e.z) < e.r && e.want(a);
    if (n && !e.on) ((e.release = e.spawn(t)), (e.on = !0));
    else if (!n && e.on) {
      try {
        e.release?.();
      } catch {}
      ((e.release = null), (e.on = !1));
    }
  }
  rn(t, o.bar);
}
