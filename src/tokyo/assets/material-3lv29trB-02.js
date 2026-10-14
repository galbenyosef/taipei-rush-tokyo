// tokyo/assets/material-3lv29trB 02 — setattribute
// Lines 341-438 of readable/tokyo/assets/material-3lv29trB.pretty.js (statement-aligned).
function E(e) {
  let t = e.landmarks?.material;
  if (!t) return null;
  let n = null;
  try {
    n = e.renderer.gl.properties.get(t)?.uniforms?.uAtlas?.value ?? null;
  } catch {
    n = null;
  }
  if (!n)
    try {
      let r = {
        uniforms: {},
        vertexShader: ``,
        fragmentShader: ``,
        defines: {},
      };
      (t.onBeforeCompile(r, e.renderer.gl),
        (n = r.uniforms.uAtlas?.value ?? null));
    } catch {
      n = null;
    }
  return n?.isDataArrayTexture ? n : null;
}
var D = null;
function O() {
  if (D) return D;
  let n = new e(new Uint8Array([255, 255, 255, 0]), 1, 1, 1);
  return (
    (n.name = `pack-layers-placeholder`),
    (n.colorSpace = t),
    (n.wrapS = n.wrapT = u),
    (n.needsUpdate = !0),
    (D = n),
    n
  );
}
function k(e, t, n) {
  let r = E(e),
    i = { value: r ?? O() },
    a = !!r,
    o = T(i.value, t);
  o.name = `landmark:${n}`;
  let s = o.onBeforeCompile;
  return (
    (o.onBeforeCompile = (e, t) => {
      (s.call(o, e, t), (e.uniforms.uAtlas = i));
    }),
    {
      mat: o,
      get ready() {
        return a;
      },
      resolve() {
        if (a) return !0;
        let t = E(e);
        return t ? ((i.value = t), (a = !0), !0) : !1;
      },
    }
  );
}
var A = null,
  j = null;
function M(e) {
  let t = e.landmarks?.material;
  if (!t) return [];
  if (A && j === t) return [A];
  A?.dispose();
  let a = new r();
  (a.setAttribute(
    `position`,
    new i(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    a.setAttribute(
      `normal`,
      new i(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    a.setAttribute(`uv`, new i(new Float32Array(6), 2)),
    a.setAttribute(`aCol`, new i(new Uint8Array(12).fill(255), 4, !0)),
    a.setAttribute(`aMat`, new i(new Uint8Array(12), 4, !0)),
    a.setAttribute(`aLight`, new i(new Uint8Array(12), 4, !0)),
    a.setAttribute(`aInfo`, new i(new Uint8Array(12), 4, !1)),
    a.setIndex(new i(new Uint16Array([0, 1, 2]), 1)));
  let o = new n(1, 3, 3, t);
  return (
    o.addInstance(o.addGeometry(a)),
    a.dispose(),
    (o.name = `pack-prewarm-lm`),
    (o.frustumCulled = !1),
    (o.perObjectFrustumCulled = !1),
    (o.sortObjects = !1),
    (o.castShadow = !0),
    (o.receiveShadow = !0),
    (A = o),
    (j = t),
    [o]
  );
}
