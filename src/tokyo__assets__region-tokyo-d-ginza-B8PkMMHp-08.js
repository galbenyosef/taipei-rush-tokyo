// tokyo__assets__region-tokyo-d-ginza-B8PkMMHp 08 — built
// Lines 2126-2384 of readable/tokyo__assets__region-tokyo-d-ginza-B8PkMMHp.pretty.js (statement-aligned).
async function vt(e) {
  let n = performance.now(),
    o = $.gen,
    s = performance.now(),
    c = async () => {
      performance.now() - s < ht ||
        (await e.yieldFrame(), (s = performance.now()));
    };
  if (!_()) return;
  let l = e.quality.level === `low` || !!e.quality.mobile,
    u = l ? 0.5 : 1;
  if (
    (await Promise.race([h, new Promise((e) => setTimeout(e, 2500))]),
    o !== $.gen)
  )
    return;
  let f = document.createElement(`canvas`);
  ((f.width = Math.round(j * u)), (f.height = Math.round(M * u)));
  let p = f.getContext(`2d`);
  for (let e of Xe(f, p, u)) await c();
  if (o !== $.gen) return;
  let m = i(f, { anisotropy: l ? 2 : 4 });
  ((m.name = `ginza-signs`),
    ($.atlasTex = m),
    d === `pending`
      ? (($.canvas = f),
        g(() => {
          let e = $.canvas;
          if (!e || $.atlasTex !== m) return;
          let t = Xe(e, e.getContext(`2d`), u);
          for (; !t.next().done;);
          ((m.needsUpdate = !0), ($.canvas = null), r(m));
        }))
      : r(m),
    await c());
  let v = _t(e);
  if (!v) return;
  await c();
  let b = e.plan.sidewalkHeight ?? 0.15,
    S = ee.map(() => Qe(4096)),
    C = [],
    w = 11;
  for (let e of y)
    (tt(S[x(e.x0, e.z0, e.x1, e.z1)], e, b, (w += 37) & 255, C), await c());
  for (let e of te)
    (it(
      S[x(e.cx - e.r, e.cz - e.r, e.cx + e.r, e.cz + e.r)],
      e,
      b,
      (w += 37) & 255,
      C,
    ),
      await c());
  if ((st(S, b, C), ut(S, b, C), dt(S, b, C), await c(), o !== $.gen)) return;
  let T = new t();
  T.name = `ginza`;
  let E = [],
    D = 0,
    O = Qe(8192);
  (pt(O, b), ct(O, b));
  let k = Qe(2048);
  (lt(k), await c());
  let A = e.params.get(`ginzachunks`),
    ne = A === `1` || (A !== `0` && e.quality.level === `low`),
    N = ne ? [...S].reverse() : S,
    P = N.flatMap((e) => [e.body, e.sign, e.screen]),
    F = a.concat([O.body, O.sign, ...P, k.body, k.sign]),
    I = null;
  if (F) {
    if (
      ((I = new re(
        F.geo,
        v,
        `ginza-hero`,
        F.starts[2],
        F.starts[2 + P.length],
        { castShadow: !0, receiveShadow: e.quality.shadows, postCasts: !0 },
      )),
      ne)
    ) {
      let e = [];
      if (
        (N.forEach((t, n) => {
          let r = null;
          for (let e of [t.body, t.sign, t.screen]) {
            let t = e.bounds();
            t && (r = r ? r.union(t) : t);
          }
          let i = F.starts[2 + n * 3],
            a = F.starts[2 + n * 3 + 3];
          a > i && r && e.push({ s: i, e: a, box: r.expandByScalar(1) });
        }),
        e.length)
      ) {
        e[0].s = F.starts[2];
        for (let t = 1; t < e.length; t++) e[t].s = e[t - 1].e;
        ((e[e.length - 1].e = F.starts[2 + P.length]), I.setChunks(e));
      }
    }
    (r(I.mesh), T.add(I.mesh), E.push(I.mesh), (D += F.geo.index.count / 3));
  }
  (e.scene.add(T), T.updateMatrixWorld(!0), (T.matrixAutoUpdate = !1));
  for (let t of C) e.statics.addBox(t.x0, t.z0, t.x1, t.z1, 0, t.h, `building`);
  (($.built = {
    root: T,
    meshes: E,
    parts: I,
    dark: !1,
    cols: C.length,
    tris: Math.round(D),
    ms: Math.round(performance.now() - n),
    atlas: `${f.width}x${f.height}`,
  }),
    console.log(
      `[test] ginza built`,
      JSON.stringify({
        cols: C.length,
        tris: Math.round(D),
        ms: $.built.ms,
        atlas: $.built.atlas,
        meshes: E.length,
        parts: I?.tris,
      }),
    ));
}
function yt(e) {
  let t = e.time.date;
  return {
    y: t?.y ?? 2026,
    m: t?.m ?? 10,
    d: t?.d ?? 1,
    wd: e.time.weekday ?? 4,
  };
}
function bt() {
  $.crowds.length = 0;
  for (let e of v)
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
function xt(e, t) {
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
async function St(e) {
  if (e.params.get(`ginza`) !== `0` && !($.built || $.building)) {
    $.building = !0;
    try {
      await vt(e);
    } catch (e) {
      console.error(`[ginza] build failed`, e);
    } finally {
      $.building = !1;
    }
  }
}
function Ct(e) {
  if ($.built) {
    bt();
    try {
      $.offQuality = e.events.on(`quality:changed`, () => {
        let t = _t(e);
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
      });
  }
}
function wt(e, t) {
  let n = $.built;
  if (!n || (($.lifeT -= e), $.lifeT > 0)) return;
  $.lifeT = 1;
  let r = t.env?.hour ?? 12,
    i = (t.plan.dataset.closures ?? []).find((e) => /hokoten/.test(e.id)),
    a = !!i && O(i, yt(t), r) > 0,
    o = r >= 17.25 || r < 5.5;
  ((a !== $.hokotenOn || o !== n.dark) &&
    (($.hokotenOn = a), (n.dark = o), n.parts?.set(o, a)),
    xt(t, r));
}
function Tt() {
  return !1;
}
function Et(e) {
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
