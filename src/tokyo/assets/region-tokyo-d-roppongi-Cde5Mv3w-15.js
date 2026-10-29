// tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w 15 — batch
// Lines 4512-4821 of readable/tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w.pretty.js (statement-aligned).
function Nt(e, t, n, r, i, a, o, s, c) {
  let l = t.white();
  (e.setMaterial(0.6, 0.3, 0, 0), A(e, xt));
  let u = n - s,
    d = i + s,
    f = r - s,
    p = a + s,
    m = a - r >= i - n,
    h = (m ? i - n : a - r) / 2 + s,
    g = m ? (u + d) / 2 : u + h,
    _ = m ? (u + d) / 2 : d - h,
    v = m ? f + h : (f + p) / 2,
    y = m ? p - h : (f + p) / 2,
    b = o + c,
    x = l;
  (e.quad(u, o, f, u, o, p, g, b, y, g, b, v, x.u0, x.v0, x.u1, x.v1),
    e.quad(d, o, p, d, o, f, _, b, v, _, b, y, x.u0, x.v0, x.u1, x.v1),
    e.quad(d, o, f, u, o, f, g, b, v, _, b, v, x.u0, x.v0, x.u1, x.v1),
    e.quad(u, o, p, d, o, p, _, b, y, g, b, y, x.u0, x.v0, x.u1, x.v1),
    e.setMaterial(0.9, 0, 0, 0),
    A(e, 4864554),
    M(e, u, f, d, p, o - 0.02, l, !0));
}
var Pt = e({
    init: () => Ht,
    start: () => Ut,
    storefront: () => Gt,
    unload: () => Kt,
    update: () => Wt,
  }),
  $ = null,
  Ft = !1,
  It = !1,
  Lt = -1,
  Rt = new Map(),
  zt = Error(`roppongi: dropped while building`);
function Bt(e) {
  for (let [t, n] of Object.entries(z))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[roppongi] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
var Vt = (e) => {
  let t = 0;
  for (let n of Object.values(e.attributes)) t += n.array.byteLength;
  return t + (e.index?.array.byteLength ?? 0);
};
async function Ht(e) {
  if (Ft || $) return;
  ((Ft = !0), (It = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    a = performance.now(),
    o = async (t = !1, i = ``) => {
      let o = performance.now() - a;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = i)), await e.yieldFrame(), It)) throw zt;
        a = performance.now();
      }
    };
  try {
    Bt(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      p = ct(),
      m = new ee(),
      h = qe(m, p, (e) => st.has(e.id));
    if (
      ($e(m, p),
      pt(m),
      St(m),
      await o(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      It)
    )
      throw zt;
    a = performance.now();
    let g = i(2048, e.quality),
      _ = m.paint(g),
      v = _.next();
    for (; !v.done;) (await o(!1, `paint`), (v = _.next()));
    let y = v.value,
      b = [],
      x = new l(8192, 12288),
      S = [],
      C = 0,
      w = 0,
      T = (e) => {
        if (!x.n) return !1;
        let t = f(x, `rop-${e}`);
        return ((C += x.ni / 3), (w += Vt(t)), b.push({ name: e, geo: t }), !0);
      };
    for (let e of p) {
      x.reset();
      let t = Xe(x, e, h.get(e.id), m, u);
      (T(`hero:${e.id}`),
        S.push({ hero: e, h: t.h, name: `hero:${e.id}` }),
        await o(!1, `hero`));
    }
    (x.reset(),
      gt(x, m),
      _t(x, m),
      T(`street`),
      await o(!1, `street`),
      x.reset());
    let E = vt(x, m);
    (T(`embassy`), await o(!1, `embassy`), x.reset());
    let D = Mt(x, m, u);
    (T(`hie`), await o(!1, `hie`));
    for (let e of mt(m)) (b.push(e), (w += Vt(e.geo)));
    await o(!1, `kit`);
    let O = ht(e, p, u),
      te = [...O.instances, ...D.instances],
      ne = c(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `roppongi`,
      }),
      k = new d(
        `roppongi`,
        ne,
        b,
        p.length + 8 + te.length + 16,
        !!e.quality.shadows,
      );
    ((k.mesh.userData.owner = `roppongi`), k.enableCulling(e.camera));
    for (let e of S) {
      let t = e.hero;
      k.add(
        k.models.get(e.name),
        oe,
        (t.x0 + t.x1) / 2,
        (t.z0 + t.z1) / 2,
        900,
      );
    }
    (k.models.has(`street`) &&
      k.add(k.models.get(`street`), oe, -940, 990, 700),
      k.models.has(`embassy`) &&
        k.add(k.models.get(`embassy`), oe, -892, 1039, 500),
      k.models.has(`hie`) && k.add(k.models.get(`hie`), oe, -915, 551, 800));
    let A = [],
      j = new Float32Array(16);
    for (let e of te) {
      let t = k.models.get(`kit:${e.model}`);
      if (t === void 0) continue;
      ae(j, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1);
      let n = k.add(t, j, e.x, e.z, e.range, !e.when);
      e.when && A.push({ id: n, on: e.when, state: !1 });
    }
    await o(!1, `batch`);
    let re = 0;
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
        re++);
    }
    for (let t of [...O.circles, ...D.circles])
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), re++);
    for (let t of [...O.obbs, ...E, ...D.obbs])
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, 0, t.y0, t.y1, `building`), re++);
    for (let t of D.floors)
      e.statics.addFloor(
        t.cx,
        t.cz,
        t.hx,
        t.hz,
        t.y0,
        t.y1,
        t.heading,
        `floor`,
      );
    Rt.clear();
    let M = [...e.plan.pois, ...(e.plan.claimedPois ?? [])];
    for (let e of S) {
      let t = e.hero.poi;
      if (!t) continue;
      let n = M.find((e) => e.id === t.id),
        r = Ue(e.hero, t.dir),
        i = r.ox + r.tx * t.at + r.nx * 0.6,
        a = r.oz + r.tz * t.at + r.nz * 0.6;
      Rt.set(t.id, {
        x: i,
        z: a,
        facing: Math.atan2(r.nx, -r.nz),
        width: t.width,
        height: 3.1,
        poiId: t.id,
        kind: n?.kind ?? t.kind,
        brand: n?.brand,
        name: n?.brand ?? t.name,
        category: t.category,
        hours: t.hours,
      });
    }
    if (It) throw zt;
    e.scene.add(k.mesh);
    let N = e.params.has(`ropatlas`);
    (N || s(y),
      ($ = {
        batch: k,
        tex: y,
        timed: A,
        stats: {
          heroes: p.length,
          tris: Math.round(C),
          models: b.length,
          instances: k.count,
          atlas: g,
          atlasUsed: m.used,
          overflow: m.overflow,
          colliders: re,
          floors: D.floors.length,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${m.slowKey} ${m.slowMs.toFixed(1)}`,
          geoBytes: w,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`roptest`)) &&
      (window.__roppongi = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        storefronts: () => [...Rt.values()],
        atlas: () => (N ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:roppongi ${$.stats.heroes} buildings, ${$.stats.tris} tris, ${(w / 1048576).toFixed(2)} MB geometry, atlas ${g} (${m.used}/2816 used, ${m.overflow} overflow), ${re} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== zt) throw e;
  } finally {
    Ft = !1;
  }
}
function Ut(e) {
  Lt = -1;
}
function Wt(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, 1, 8);
  let i = t.time.elapsed;
  if (i - Lt < 1) return;
  Lt = i;
  let a = t.env?.hour ?? 12;
  for (let e of n.timed) {
    let t = e.on(a);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function Gt(e) {
  return Rt.get(e) ?? null;
}
function Kt(e) {
  It = !0;
  let t = $;
  (($ = null),
    Rt.clear(),
    (Lt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
t.add({
  六本木十字路口: `六本木交差点`,
  "外苑東通（六本木路口北側）": `外苑東通り（六本木交差点北）`,
  "唐吉郊狼 六本木店": `ドン・コヨーテ 六本木店`,
  "卡拉OK城 六本木總店": `カラオケ城 六本木本店`,
  "芋洗坂（坡頂）": `芋洗坂（坂上）`,
  "六本木通 計程車招呼站": `六本木通り タクシー乗り場`,
  "大使館前（警衛亭）": `大使館前（警備ボックス）`,
  六本木夜路: `六本木の夜道`,
  "赤坂三丁目（外堀通）": `赤坂三丁目（外堀通り）`,
  "ABA飯店 赤坂見附站前": `ABAホテル 赤坂見附駅前`,
  "日枝神社 山王橋（手扶梯）": `日枝神社 山王橋（エスカレーター）`,
  "日枝神社 拜殿": `日枝神社 拝殿`,
});
