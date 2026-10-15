// tokyo/assets/region-tokyo-d-ginza-BY6oOEWu 08 — built
// Lines 2171-2515 of readable/tokyo/assets/region-tokyo-d-ginza-BY6oOEWu.pretty.js (statement-aligned).
async function jt(e) {
  if (!Ot) {
    Ot = !0;
    try {
      Dt ??= await t(
        () => import(`./actors-qKVitB-C.js`).then((e) => e.Kt),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23,
        ]),
      );
      let n = Object.create(e, { state: { value: At(e) } });
      Dt.openWardrobeShop(n, {
        title: Ct,
        subtitle: wt,
        accent: `#e60012`,
        logo: [`UNI`, `SHIRO`],
        money: kt,
        speaker: { name: Tt, line: Et },
      });
      try {
        e.events.emit(`shop:enter`, { id: `unishiro`, district: `ginza` });
      } catch {}
    } catch (e) {
      console.warn(`[ginza] UNISHIRO: the wardrobe panel could not open`, e);
    } finally {
      Ot = !1;
    }
  }
}
function Mt(e) {
  return e >= bt[0] && e < bt[1];
}
function Nt(e) {
  if (Dt?.wardrobeShopOpen() || Ot) return;
  let t = `foot`;
  try {
    t = e.player.mode;
  } catch {}
  if (t !== `foot`) return;
  let n = e.player.position;
  if (Math.hypot(n.x - yt.x, n.z - yt.z) > yt.r) return;
  let r = !e.params.has(`unishiro`) && !Mt(e.env?.hour ?? 12);
  try {
    e.ui.prompt(r ? St : xt);
  } catch {}
  !r && e.input.pressed(`interact`) && jt(e);
}
function Pt(e) {
  return jt(e);
}
var Ft = e({
    init: () => Ut,
    keepResident: () => Kt,
    start: () => Wt,
    unload: () => qt,
    update: () => Gt,
  }),
  It = 1.5,
  $ = {
    built: null,
    building: !1,
    gen: 0,
    atlasTex: null,
    canvas: null,
    mats: new Map(),
    offQuality: null,
    lifeT: 0,
    hokotenOn: !1,
    crowds: [],
  },
  Lt = (e) => e.quality.materials === `lambert` || e.quality.level === `low`;
function Rt(e) {
  let t = m();
  if (!t || !$.atlasTex) return null;
  let n = Lt(e) ? `L` : `P`,
    r = $.mats.get(n);
  return (
    r ||
      ((r = t({ signs: $.atlasTex }, n === `L`)),
      (r.name = `ginza-hero${n === `L` ? `-l` : ``}`),
      $.mats.set(n, r)),
    r
  );
}
async function zt(e) {
  let t = performance.now(),
    n = $.gen,
    i = performance.now(),
    a = async () => {
      performance.now() - i < It ||
        (await e.yieldFrame(), (i = performance.now()));
    };
  if (!m()) return;
  let o = e.quality.level === `low` || !!e.quality.mobile,
    l = o ? 0.5 : 1;
  if (
    (await Promise.race([re, new Promise((e) => setTimeout(e, 2500))]),
    n !== $.gen)
  )
    return;
  let u = document.createElement(`canvas`);
  ((u.width = Math.round(P * l)), (u.height = Math.round(F * l)));
  let h = u.getContext(`2d`);
  for (let e of tt(u, h, l)) await a();
  if (n !== $.gen) return;
  let g = s(u, { anisotropy: o ? 2 : 4 });
  ((g.name = `ginza-signs`),
    ($.atlasTex = g),
    p === `pending`
      ? (($.canvas = u),
        f(() => {
          let e = $.canvas;
          if (!e || $.atlasTex !== g) return;
          let t = tt(e, e.getContext(`2d`), l);
          for (; !t.next().done;);
          ((g.needsUpdate = !0), ($.canvas = null), c(g));
        }))
      : c(g),
    await a());
  let v = Rt(e);
  if (!v) return;
  await a();
  let y = e.plan.sidewalkHeight ?? 0.15,
    b = ee.map(() => rt(4096)),
    S = [],
    C = 11;
  for (let e of _)
    (ot(b[x(e.x0, e.z0, e.x1, e.z1)], e, y, (C += 37) & 255, S), await a());
  for (let e of te)
    (lt(
      b[x(e.cx - e.r, e.cz - e.r, e.cx + e.r, e.cz + e.r)],
      e,
      y,
      (C += 37) & 255,
      S,
    ),
      await a());
  if ((ft(b, y, S), ht(b, y, S), gt(b, y, S), await a(), n !== $.gen)) return;
  let w = new r();
  w.name = `ginza`;
  let T = [],
    E = 0,
    D = rt(8192);
  (vt(D, y), pt(D, y));
  let O = rt(2048);
  (mt(O), await a());
  let k = e.params.get(`ginzachunks`),
    A = k === `1` || (k !== `0` && e.quality.level === `low`),
    ne = A ? [...b].reverse() : b,
    j = ne.flatMap((e) => [e.body, e.sign, e.screen]),
    M = d.concat([D.body, D.sign, ...j, O.body, O.sign]),
    N = null;
  if (M) {
    if (
      ((N = new ae(
        M.geo,
        v,
        `ginza-hero`,
        M.starts[2],
        M.starts[2 + j.length],
        { castShadow: !0, receiveShadow: e.quality.shadows, postCasts: !0 },
      )),
      A)
    ) {
      let e = [];
      if (
        (ne.forEach((t, n) => {
          let r = null;
          for (let e of [t.body, t.sign, t.screen]) {
            let t = e.bounds();
            t && (r = r ? r.union(t) : t);
          }
          let i = M.starts[2 + n * 3],
            a = M.starts[2 + n * 3 + 3];
          a > i && r && e.push({ s: i, e: a, box: r.expandByScalar(1) });
        }),
        e.length)
      ) {
        e[0].s = M.starts[2];
        for (let t = 1; t < e.length; t++) e[t].s = e[t - 1].e;
        ((e[e.length - 1].e = M.starts[2 + j.length]), N.setChunks(e));
      }
    }
    (c(N.mesh), w.add(N.mesh), T.push(N.mesh), (E += M.geo.index.count / 3));
  }
  (e.scene.add(w), w.updateMatrixWorld(!0), (w.matrixAutoUpdate = !1));
  for (let t of S) e.statics.addBox(t.x0, t.z0, t.x1, t.z1, 0, t.h, `building`);
  (($.built = {
    root: w,
    meshes: T,
    parts: N,
    dark: !1,
    cols: S.length,
    tris: Math.round(E),
    ms: Math.round(performance.now() - t),
    atlas: `${u.width}x${u.height}`,
  }),
    console.log(
      `[test] ginza built`,
      JSON.stringify({
        cols: S.length,
        tris: Math.round(E),
        ms: $.built.ms,
        atlas: $.built.atlas,
        meshes: T.length,
        parts: N?.tris,
      }),
    ));
}
function Bt(e) {
  let t = e.time.date;
  return {
    y: t?.y ?? 2026,
    m: t?.m ?? 10,
    d: t?.d ?? 1,
    wd: e.time.weekday ?? 4,
  };
}
function Vt() {
  $.crowds.length = 0;
  for (let e of h)
    $.crowds.push({
      on: !1,
      release: null,
      x: e.x,
      z: e.z,
      r: 0.5,
      n: e.n,
      kinds: [`office`],
      lookX: e.x + e.fx * 6,
      lookZ: e.z + e.fz * 6,
      when: `night`,
      mode: `watch`,
    });
}
function Ht(e, t) {
  let n = e.player.position,
    r = t >= 19.5 || t < 1.5,
    i = t >= 9 && t < 19;
  for (let t of $.crowds) {
    let a =
      (t.when === `night` ? r : i) && Math.hypot(n.x - t.x, n.z - t.z) < 140;
    if (a && !t.on) {
      try {
        let n = e.peds.crowd(t.x, t.z, t.r, t.n, t.kinds, {
          mode: t.mode,
          lookX: t.lookX,
          lookZ: t.lookZ,
          poses: t.mode === `watch` ? [`idle`] : [`idle`, `phone`],
        });
        t.release = typeof n == `function` ? n : null;
      } catch {
        t.release = null;
      }
      t.on = !0;
    } else if (!a && t.on) {
      try {
        t.release?.();
      } catch {}
      ((t.release = null), (t.on = !1));
    }
  }
}
async function Ut(e) {
  if (e.params.get(`ginza`) !== `0` && !($.built || $.building)) {
    $.building = !0;
    try {
      await zt(e);
    } catch (e) {
      console.error(`[ginza] build failed`, e);
    } finally {
      $.building = !1;
    }
  }
}
function Wt(e) {
  if ($.built) {
    Vt();
    try {
      $.offQuality = e.events.on(`quality:changed`, () => {
        let t = Rt(e);
        if (t && $.built)
          for (let n of $.built.meshes)
            ((n.material = t), (n.receiveShadow = e.quality.shadows));
      });
    } catch {}
    (e.params.has(`debug`) || e.params.has(`ginzatest`)) &&
      (window.__ginza = {
        stats: () => ({
          cols: $.built?.cols,
          tris: $.built?.tris,
          ms: $.built?.ms,
          atlas: $.built?.atlas,
          meshes: $.built?.meshes.length ?? 0,
          hokotenOn: $.hokotenOn,
        }),
        state: $,
        unishiro: () => Pt(e),
      });
  }
}
function Gt(e, t) {
  let n = $.built;
  if (!n || (Nt(t), ($.lifeT -= e), $.lifeT > 0)) return;
  $.lifeT = 1;
  let r = t.env?.hour ?? 12,
    i = (t.plan.dataset.closures ?? []).find((e) => /hokoten/.test(e.id)),
    a = !!i && M(i, Bt(t), r) > 0,
    o = r >= 17.25 || r < 5.5;
  ((a !== $.hokotenOn || o !== n.dark) &&
    (($.hokotenOn = a), (n.dark = o), n.parts?.set(o, a)),
    Ht(t, r));
}
function Kt() {
  return !1;
}
function qt(e) {
  $.gen++;
  for (let e of $.crowds)
    if (e.on)
      try {
        e.release?.();
      } catch {}
  $.crowds.length = 0;
  try {
    $.offQuality?.();
  } catch {}
  $.offQuality = null;
  let t = $.built;
  (t &&
    ((t.root.parent ?? e.scene).remove(t.root),
    t.root.traverse((e) => e.geometry?.dispose()),
    t.root.clear()),
    $.atlasTex?.dispose());
  for (let e of $.mats.values()) e.dispose();
  ($.mats.clear(),
    Object.assign($, {
      built: null,
      atlasTex: null,
      canvas: null,
      lifeT: 0,
      hokotenOn: !1,
    }));
}
