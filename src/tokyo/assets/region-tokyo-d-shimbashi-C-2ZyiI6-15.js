// tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6 15 — ribz
// Lines 4280-4590 of readable/tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6.pretty.js (statement-aligned).
function tn(e, t, n, r) {
  let i = f,
    a = t.white(),
    o = n.plan.groundHeight(i.x0 - 6, i.z),
    s = e.begin(),
    c = i.x0,
    l = c + i.arch,
    u = l,
    d = u + i.pier,
    p = d + 2 * i.leaf,
    m = p + i.pier,
    h = m + i.arch;
  (en(s, a, c, l, o, r),
    en(s, a, m, h, o, r),
    s.setMaterial(0.9, 0, 0, 0),
    N(s, 4868942),
    I(
      s,
      650,
      o - 0.25,
      i.z - i.ribZ + 0.45,
      h,
      o + 0.02,
      i.z + i.ribZ - 0.45,
      a,
    ),
    N(s, 10131600));
  for (let e of [-1, 1])
    I(
      s,
      650,
      o - 0.25,
      e < 0 ? i.z - i.ribZ - 3.6 : i.z + i.ribZ + 0.45,
      h,
      o + 0.18,
      e < 0 ? i.z - i.ribZ - 0.45 : i.z + i.ribZ + 3.6,
      a,
    );
  N(s, Z, 0.8);
  for (let e of [-1, 1])
    I(
      s,
      c,
      o - 2.2,
      i.z + e * (i.ribZ + 3.6) - 0.2,
      h,
      o - 0.25,
      i.z + e * (i.ribZ + 3.6) + 0.2,
      a,
    );
  (N(s, Z, 0.75),
    I(s, d, o - 2.6, i.z - i.ribZ - 0.4, p, o - 0.25, i.z + i.ribZ + 0.4, a),
    s.setMaterial(0.6, 0, 0, 0),
    N(s, 2236962),
    I(
      s,
      d + i.leaf - 0.06,
      o - 0.01,
      i.z - i.ribZ,
      d + i.leaf + 0.06,
      o + 0.03,
      i.z + i.ribZ,
      a,
    ));
  for (let [e, t] of [
    [u, d],
    [p, m],
  ]) {
    (s.setMaterial(0.85, 0, 0, 0),
      N(s, 11840928),
      I(s, e, o - 6, i.z - i.ribZ - 5.2, t, o - 0.25, i.z + i.ribZ + 5.2, a));
    for (let n of [-1, 1]) {
      let r = i.z + n * (i.ribZ + 5.6);
      (N(s, 12893616),
        I(s, e + 0.4, o - 0.25, r - 2, t - 0.4, o + 4.4, r + 2, a),
        N(s, 2765368));
      for (let i of [e + 1.4, t - 2.4])
        P(
          s,
          n < 0 ? i + 1 : i,
          r + n * 2.01,
          n < 0 ? i : i + 1,
          r + n * 2.01,
          o + 1.6,
          o + 3.4,
          a,
        );
      (s.setMaterial(0.7, 0.2, 0, 0),
        N(s, 5922916),
        I(s, e + 0.1, o + 4.4, r - 2.3, t - 0.1, o + 4.75, r + 2.3, a),
        s.setMaterial(0.85, 0, 0, 0));
    }
  }
  (s.setMaterial(0.5, 0.5, 0, 0), N(s, Z, 0.9));
  for (let e of [-1, 1]) {
    let t = i.z + e * (i.ribZ + 3.55);
    (z(s, c, o + 1.15, t, h, o + 1.15, t, 0.05, a),
      z(s, c, o + 0.55, t, h, o + 0.55, t, 0.03, a));
    for (let e = c; e <= h; e += r >= 1 ? 2.5 : 5)
      z(s, e, o + 0.18, t, e, o + 1.15, t, 0.03, a);
  }
  for (let e of [-1, 1]) {
    let n = i.z + e * (i.ribZ + 4.2);
    (s.setMaterial(0.8, 0, 0, 0),
      N(s, 11840928),
      I(s, c - 2.2, o, n - 0.6, c - 1, o + 2.2, n + 0.6, a),
      N(s, 16777215),
      P(
        s,
        c - 2.21,
        n - 0.5,
        c - 2.21,
        n + 0.5,
        o + 1.25,
        o + 1.6,
        t.uv(e < 0 ? `kachi:plate` : `kachi:kana`),
      ));
  }
  (e.end(`kachidoki`, (c + h) / 2, i.z, 1200),
    e.box(c - 2.2, i.z - i.ribZ - 4.8, c - 1, i.z - i.ribZ - 3.6, o, o + 2.2),
    e.box(c - 2.2, i.z + i.ribZ + 3.6, c - 1, i.z + i.ribZ + 4.8, o, o + 2.2));
  for (let t of [-1, 1])
    e.box(c, i.z + t * i.ribZ - 0.45, 640, i.z + t * i.ribZ + 0.45, o, o + 3);
}
var nn = e({
    init: () => un,
    keepResident: () => gn,
    start: () => pn,
    unload: () => hn,
    update: () => mn,
  }),
  Q = null,
  rn = !1,
  an = !1,
  on = -1,
  sn = -1,
  cn = Error(`shimbashi: dropped while building`),
  ln = [];
async function un(e) {
  if (rn || Q) return;
  ((rn = !0), (an = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    a = performance.now(),
    c = async (t = !1, i = ``) => {
      let o = performance.now() - a;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = i)), await e.yieldFrame(), an)) throw cn;
        a = performance.now();
      }
    };
  try {
    let l =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      u = new le(),
      d = It();
    if (
      (mt(u),
      Dt(u),
      Lt(u, d),
      Xt(u),
      $t(u),
      await c(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      an)
    )
      throw cn;
    a = performance.now();
    let f = i(2048, e.quality),
      p = u.paint(f),
      h = p.next();
    for (; !h.done;) (await c(!1, `paint`), (h = p.next()));
    let g = h.value,
      _ = new ge();
    (Tt(_, u, e, l), await c(!1, `sl`));
    let v = kt(_, u, e, l);
    await c(!1, `gado`);
    let y = await Yt(_, u, e, d, l, () => c(!1, `market`));
    await c(!1, `market`);
    let b = Qt(_, u, e);
    (await c(!1, `kyu`), tn(_, u, e, l), await c(!1, `kachidoki`), qt(_, u));
    let x = Jt(e);
    await c(!1, `kit`);
    let S = _.pieces.map((e) => ({ name: e.name, geo: e.geo })),
      C = s(`opaque`, {
        policy: e.quality.materials,
        map: g,
        batched: !0,
        name: `shimbashi`,
      }),
      w = new m(
        `shimbashi`,
        C,
        S,
        _.pieces.length + x.length + 16,
        !!e.quality.shadows,
      );
    ((w.mesh.userData.owner = `shimbashi`), w.enableCulling(e.camera));
    let T = new Map(),
      E = (e, t) => {
        let n = T.get(e);
        (n || T.set(e, (n = [])), n.push(t));
      };
    for (let e of _.pieces) {
      if (e.name.startsWith(`kit:`)) continue;
      let t = w.add(
        w.models.get(e.name),
        e.matrix ?? he,
        e.x,
        e.z,
        e.range,
        e.group === `always`,
      );
      e.group !== `always` && E(e.group, t);
    }
    let ee = new Float32Array(16);
    for (let e of x) {
      me(ee, e.x, e.y, e.z, e.fx, e.fz);
      let t = w.add(
        w.models.get(`kit:${e.model}`),
        ee,
        e.x,
        e.z,
        e.range,
        !e.group,
      );
      e.group && E(e.group, t);
    }
    await c(!1, `batch`);
    let D = 0;
    for (let t of _.obbs)
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, t.rot, t.y0, t.y1, `building`),
        D++);
    for (let t of _.circles)
      (e.statics.addCircle(t.x, t.z, t.r, t.y0, t.y1, `pole`), D++);
    for (let t of [...x.filter((e) => e.model.startsWith(`tare`) && !e.group)])
      (e.statics.addOBB(t.x, t.z, 0.6, 1.2, 0, t.y, t.y + 1.3, `prop`), D++);
    for (let t of b.floors)
      `ramp` in t && t.ramp
        ? e.statics.addFloor(
            t.cx,
            t.cz,
            t.hz,
            t.hx,
            t.y0,
            t.y1,
            -Math.PI / 2,
            `floor`,
          )
        : e.statics.addFloor(t.cx, t.cz, t.hx, t.hz, t.y0, t.y1, 0, `floor`);
    if (an) throw cn;
    e.scene.add(w.mesh);
    let O = e.params.has(`shimatlas`);
    (O || o(g),
      (Q = {
        batch: w,
        tex: g,
        groups: T,
        state: new Map(),
        stats: {
          pieces: _.pieces.length,
          instances: w.count,
          tris: Math.round(_.tris),
          units: y,
          bays: v,
          atlas: f,
          atlasUsed: u.used,
          overflow: u.overflow,
          colliders: D,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${u.slowKey} ${u.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of S) e.geo.dispose();
    (dn(e, d),
      (e.params.has(`debug`) || e.params.has(`shimtest`)) &&
        (window.__shim = {
          stats: () => Q?.stats,
          batch: () =>
            Q && {
              count: Q.batch.count,
              shown: Q.batch.shown,
              tris: Q.batch.shownTris,
            },
          state: () => Q && Object.fromEntries(Q.state),
          atlas: () => (O ? g.image.toDataURL(`image/png`) : null),
        }),
      console.info(
        `[init] districts:shimbashi ${_.pieces.length} pieces, ${y} market shops, ${v} ガード下 bays, ${Q.stats.tris} tris, atlas ${f} (${u.used}/3072 used, ${u.overflow} overflow), ${D} colliders, ${Q.stats.buildMs} ms (slice max ${Q.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== cn) throw e;
  } finally {
    rn = !1;
  }
}
function $(e, t, n, r, i, a, o) {
  try {
    let s = e.peds.crowd(t, n, r, i, a, o);
    return typeof s == `function` ? s : null;
  } catch {
    return null;
  }
}
