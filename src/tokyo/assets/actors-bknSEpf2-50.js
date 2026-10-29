// tokyo/assets/actors-bknSEpf2 50 — blenddst
// Lines 18806-18822 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function rm(e, t) {
  let n = new a({
    uniforms: e,
    vertexShader: tm,
    fragmentShader: nm,
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
