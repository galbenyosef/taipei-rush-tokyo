// tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn 15 — ribz
// Lines 4280-4590 of readable/tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function en(e, t, n, r) {
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
  ($t(s, a, c, l, o, r),
    $t(s, a, m, h, o, r),
    s.setMaterial(0.9, 0, 0, 0),
    P(s, 4868942),
    L(
      s,
      650,
      o - 0.25,
      i.z - i.ribZ + 0.45,
      h,
      o + 0.02,
      i.z + i.ribZ - 0.45,
      a,
    ),
    P(s, 10131600));
  for (let e of [-1, 1])
    L(
      s,
      650,
      o - 0.25,
      e < 0 ? i.z - i.ribZ - 3.6 : i.z + i.ribZ + 0.45,
      h,
      o + 0.18,
      e < 0 ? i.z - i.ribZ - 0.45 : i.z + i.ribZ + 3.6,
      a,
    );
  P(s, Q, 0.8);
  for (let e of [-1, 1])
    L(
      s,
      c,
      o - 2.2,
      i.z + e * (i.ribZ + 3.6) - 0.2,
      h,
      o - 0.25,
      i.z + e * (i.ribZ + 3.6) + 0.2,
      a,
    );
  (P(s, Q, 0.75),
    L(s, d, o - 2.6, i.z - i.ribZ - 0.4, p, o - 0.25, i.z + i.ribZ + 0.4, a),
    s.setMaterial(0.6, 0, 0, 0),
    P(s, 2236962),
    L(
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
      P(s, 11840928),
      L(s, e, o - 6, i.z - i.ribZ - 5.2, t, o - 0.25, i.z + i.ribZ + 5.2, a));
    for (let n of [-1, 1]) {
      let r = i.z + n * (i.ribZ + 5.6);
      (P(s, 12893616),
        L(s, e + 0.4, o - 0.25, r - 2, t - 0.4, o + 4.4, r + 2, a),
        P(s, 2765368));
      for (let i of [e + 1.4, t - 2.4])
        F(
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
        P(s, 5922916),
        L(s, e + 0.1, o + 4.4, r - 2.3, t - 0.1, o + 4.75, r + 2.3, a),
        s.setMaterial(0.85, 0, 0, 0));
    }
  }
  (s.setMaterial(0.5, 0.5, 0, 0), P(s, Q, 0.9));
  for (let e of [-1, 1]) {
    let t = i.z + e * (i.ribZ + 3.55);
    (B(s, c, o + 1.15, t, h, o + 1.15, t, 0.05, a),
      B(s, c, o + 0.55, t, h, o + 0.55, t, 0.03, a));
    for (let e = c; e <= h; e += r >= 1 ? 2.5 : 5)
      B(s, e, o + 0.18, t, e, o + 1.15, t, 0.03, a);
  }
  for (let e of [-1, 1]) {
    let n = i.z + e * (i.ribZ + 4.2);
    (s.setMaterial(0.8, 0, 0, 0),
      P(s, 11840928),
      L(s, c - 2.2, o, n - 0.6, c - 1, o + 2.2, n + 0.6, a),
      P(s, 16777215),
      F(
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
var tn = e({
    init: () => ln,
    keepResident: () => gn,
    start: () => pn,
    unload: () => hn,
    update: () => mn,
  }),
  $ = null,
  nn = !1,
  rn = !1,
  an = -1,
  on = -1,
  sn = Error(`shimbashi: dropped while building`),
  cn = [];
async function ln(e) {
  if (nn || $) return;
  ((nn = !0), (rn = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    s = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), rn)) throw sn;
        i = performance.now();
      }
    };
  try {
    let c =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      u = new ce(),
      d = Ft();
    if (
      (pt(u),
      Et(u),
      It(u, d),
      Yt(u),
      Qt(u),
      await s(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      rn)
    )
      throw sn;
    i = performance.now();
    let f = l(2048, e.quality),
      p = u.paint(f),
      m = p.next();
    for (; !m.done;) (await s(!1, `paint`), (m = p.next()));
    let h = m.value,
      g = new he();
    (wt(g, u, e, c), await s(!1, `sl`));
    let _ = Ot(g, u, e, c);
    await s(!1, `gado`);
    let v = await Jt(g, u, e, d, c, () => s(!1, `market`));
    await s(!1, `market`);
    let y = Zt(g, u, e);
    (await s(!1, `kyu`), en(g, u, e, c), await s(!1, `kachidoki`), Kt(g, u));
    let b = qt(e);
    await s(!1, `kit`);
    let x = g.pieces.map((e) => ({ name: e.name, geo: e.geo })),
      S = o(`opaque`, {
        policy: e.quality.materials,
        map: h,
        batched: !0,
        name: `shimbashi`,
      }),
      C = new w(
        `shimbashi`,
        S,
        x,
        g.pieces.length + b.length + 16,
        !!e.quality.shadows,
      );
    ((C.mesh.userData.owner = `shimbashi`), C.enableCulling(e.camera));
    let T = new Map(),
      E = (e, t) => {
        let n = T.get(e);
        (n || T.set(e, (n = [])), n.push(t));
      };
    for (let e of g.pieces) {
      if (e.name.startsWith(`kit:`)) continue;
      let t = C.add(
        C.models.get(e.name),
        e.matrix ?? me,
        e.x,
        e.z,
        e.range,
        e.group === `always`,
      );
      e.group !== `always` && E(e.group, t);
    }
    let ee = new Float32Array(16);
    for (let e of b) {
      pe(ee, e.x, e.y, e.z, e.fx, e.fz);
      let t = C.add(
        C.models.get(`kit:${e.model}`),
        ee,
        e.x,
        e.z,
        e.range,
        !e.group,
      );
      e.group && E(e.group, t);
    }
    await s(!1, `batch`);
    let D = 0;
    for (let t of g.obbs)
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, t.rot, t.y0, t.y1, `building`),
        D++);
    for (let t of g.circles)
      (e.statics.addCircle(t.x, t.z, t.r, t.y0, t.y1, `pole`), D++);
    for (let t of [...b.filter((e) => e.model.startsWith(`tare`) && !e.group)])
      (e.statics.addOBB(t.x, t.z, 0.6, 1.2, 0, t.y, t.y + 1.3, `prop`), D++);
    for (let t of y.floors)
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
    if (rn) throw sn;
    e.scene.add(C.mesh);
    let O = e.params.has(`shimatlas`);
    (O || a(h),
      ($ = {
        batch: C,
        tex: h,
        groups: T,
        state: new Map(),
        stats: {
          pieces: g.pieces.length,
          instances: C.count,
          tris: Math.round(g.tris),
          units: v,
          bays: _,
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
    for (let e of x) e.geo.dispose();
    (dn(e, d),
      (e.params.has(`debug`) || e.params.has(`shimtest`)) &&
        (window.__shim = {
          stats: () => $?.stats,
          batch: () =>
            $ && {
              count: $.batch.count,
              shown: $.batch.shown,
              tris: $.batch.shownTris,
            },
          state: () => $ && Object.fromEntries($.state),
          atlas: () => (O ? h.image.toDataURL(`image/png`) : null),
        }),
      console.info(
        `[init] districts:shimbashi ${g.pieces.length} pieces, ${v} market shops, ${_} ガード下 bays, ${$.stats.tris} tris, atlas ${f} (${u.used}/3072 used, ${u.overflow} overflow), ${D} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== sn) throw e;
  } finally {
    nn = !1;
  }
}
function un(e, t, n, r, i, a, o) {
  try {
    let s = e.peds.crowd(t, n, r, i, a, o);
    return typeof s == `function` ? s : null;
  } catch {
    return null;
  }
}
