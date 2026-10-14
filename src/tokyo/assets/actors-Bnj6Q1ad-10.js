// tokyo/assets/actors-Bnj6Q1ad 10 — blenddst
// Lines 5187-5203 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Ha(e, t) {
  let n = new l({
    uniforms: e,
    vertexShader: Ba,
    fragmentShader: Va,
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
