// tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ 11 — built
// Lines 4176-4323 of readable/tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ.pretty.js (statement-aligned).
function Tn(e) {
  let t = e.time.date;
  return !!t && t.m === 10 && (t.d === 19 || t.d === 20);
}
function En() {
  $.crowds.length = 0;
  let e = Ft[0],
    t = Ft[1];
  ($.crowds.push({
    on: !1,
    release: null,
    x: (e.x + t.x) / 2 + 1.6,
    z: (e.z + t.z) / 2,
    r: 2.4,
    n: 4,
    kinds: [`office`, `tourist`, `auntie`],
    lookX: 250,
    lookZ: (e.z + t.z) / 2,
    mode: `watch`,
    when: (e) => e >= 10 && e < 20,
  }),
    $.crowds.push({
      on: !1,
      release: null,
      x: 290.5,
      z: -200.2,
      r: 0.4,
      n: 1,
      kinds: [`office`],
      lookX: 290.5,
      lookZ: -195,
      mode: `watch`,
      when: (e) => e >= 8 && e < 18,
    }),
    $.crowds.push({
      on: !1,
      release: null,
      x: 294,
      z: -307,
      r: 5,
      n: 10,
      kinds: [`auntie`, `elder`, `office`, `tourist`, `uncle`],
      lookX: 294,
      lookZ: -313,
      mode: `watch`,
      when: (e, t) => t && e >= 10 && e < 21,
    }));
}
function Dn(e, t) {
  let n = e.player.position,
    r = Tn(e);
  for (let i of $.crowds) {
    let a = i.when(t, r) && Math.hypot(n.x - i.x, n.z - i.z) < 140;
    if (a && !i.on) {
      try {
        let t = e.peds.crowd(i.x, i.z, i.r, i.n, i.kinds, {
          mode: i.mode,
          lookX: i.lookX,
          lookZ: i.lookZ,
          poses: [`idle`, `phone`],
        });
        i.release = typeof t == `function` ? t : null;
      } catch {
        i.release = null;
      }
      i.on = !0;
    } else if (!a && i.on) {
      try {
        i.release?.();
      } catch {}
      ((i.release = null), (i.on = !1));
    }
  }
}
async function On(e) {
  if (e.params.get(`nihonbashi`) !== `0` && !($.built || $.building)) {
    $.building = !0;
    try {
      await wn(e);
    } catch (e) {
      console.error(`[nihonbashi] build failed`, e);
    } finally {
      $.building = !1;
    }
  }
}
function kn(e) {
  if ($.built) {
    En();
    try {
      $.offQuality = e.events.on(`quality:changed`, () => {
        let t = Sn(e);
        if (t && $.built) {
          for (let n of $.built.meshes)
            ((n.material = t), (n.receiveShadow = e.quality.shadows));
          $.built.fair && ($.built.fair.material = t);
        }
      });
    } catch {}
    (e.params.has(`debug`) || e.params.has(`nihonbashitest`)) &&
      (window.__nihonbashi = {
        stats: () => ({
          cols: $.built?.cols,
          tris: $.built?.tris,
          ms: $.built?.ms,
          atlas: $.built?.atlas,
          meshes: $.built?.meshes.length ?? 0,
        }),
        state: $,
      });
  }
}
function An(e, t) {
  let n = $.built;
  if (!n || (($.lifeT -= e), $.lifeT > 0)) return;
  $.lifeT = 1;
  let r = t.env?.hour ?? 12,
    i = r >= 9.75 && r < 18.5,
    a = r >= 17.25 || r < 5.5;
  for (let e of n.parts) e.set(i, a);
  let o = Tn(t) && r >= 9.5 && r < 21.5;
  (n.fair && n.fair.visible !== o && (n.fair.visible = o), Dn(t, r));
}
function jn() {
  return !1;
}
function Mn(e) {
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
    Object.assign($, { built: null, atlasTex: null, canvas: null, lifeT: 0 }));
}
