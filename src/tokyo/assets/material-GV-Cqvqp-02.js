// tokyo/assets/material-GV-Cqvqp 02 — setattribute
// Lines 341-438 of readable/tokyo/assets/material-GV-Cqvqp.pretty.js (statement-aligned).
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
  let r = new e(new Uint8Array([255, 255, 255, 0]), 1, 1, 1);
  return (
    (r.name = `pack-layers-placeholder`),
    (r.colorSpace = t),
    (r.wrapS = r.wrapT = n),
    (r.needsUpdate = !0),
    (D = r),
    r
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
  let n = new i();
  (n.setAttribute(
    `position`,
    new a(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new a(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new a(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new a(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new a(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new a(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new a(new Uint8Array(12), 4, !1)),
    n.setIndex(new a(new Uint16Array([0, 1, 2]), 1)));
  let o = new r(1, 3, 3, t);
  return (
    o.addInstance(o.addGeometry(n)),
    n.dispose(),
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
