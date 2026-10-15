// tokyo/assets/actors-qKVitB-C 24 — blenddst
// Lines 8810-8826 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function mc(e, t) {
  let n = new T({
    uniforms: e,
    vertexShader: fc,
    fragmentShader: pc,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
    side: 2,
    blending: 5,
    blendSrc: 201,
    blendDst: 205,
    blendSrcAlpha: 201,
    blendDstAlpha: 205,
  });
  return ((n.forceSinglePass = !0), (n.name = t), n);
}
