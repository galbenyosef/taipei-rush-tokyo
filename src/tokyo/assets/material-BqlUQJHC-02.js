// tokyo/assets/material-BqlUQJHC 02 — setattribute
// Lines 341-438 of readable/tokyo/assets/material-BqlUQJHC.pretty.js (statement-aligned).
function landmarkLayers(e) {
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
  let e = new s(new Uint8Array([255, 255, 255, 0]), 1, 1, 1);
  return (
    (e.name = `pack-layers-placeholder`),
    (e.colorSpace = t),
    (e.wrapS = e.wrapT = r),
    (e.needsUpdate = !0),
    (D = e),
    e
  );
}
function packMaterial(e, t, n) {
  let r = landmarkLayers(e),
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
        let t = landmarkLayers(e);
        return t ? ((i.value = t), (a = !0), !0) : !1;
      },
    }
  );
}
var A = null,
  j = null;
function lmPrototype(e) {
  let t = e.landmarks?.material;
  if (!t) return [];
  if (A && j === t) return [A];
  A?.dispose();
  let n = new a();
  (n.setAttribute(
    `position`,
    new o(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new o(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new o(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new o(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new o(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new o(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new o(new Uint8Array(12), 4, !1)),
    n.setIndex(new o(new Uint16Array([0, 1, 2]), 1)));
  let r = new i(1, 3, 3, t);
  return (
    r.addInstance(r.addGeometry(n)),
    n.dispose(),
    (r.name = `pack-prewarm-lm`),
    (r.frustumCulled = !1),
    (r.perObjectFrustumCulled = !1),
    (r.sortObjects = !1),
    (r.castShadow = !0),
    (r.receiveShadow = !0),
    (A = r),
    (j = t),
    [r]
  );
}
