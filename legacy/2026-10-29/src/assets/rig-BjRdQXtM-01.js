// assets/rig-BjRdQXtM 01 — bones
// Lines 1-31 of readable/assets/rig-BjRdQXtM.pretty.js (statement-aligned).
import "./pose-hAXyTQQR.js";
var CANON_HIP_Y = 0.977;
function bindRig(t) {
  let n = t.joints,
    r = n[0].y;
  return {
    bones: t.bones,
    joints: n,
    rest: t.bones.map((e) => e.position.clone()),
    scale: r / CANON_HIP_Y,
    hipY: r,
    thighLen: n[11].distanceTo(n[12]),
    shinLen: n[12].distanceTo(n[13]),
    ankleY: n[13].y,
    fingersL: t.bones[19] ?? null,
    fingersR: t.bones[20] ?? null,
    hair: t.bones[21] ?? null,
    lidL: t.bones[22] ?? null,
    lidR: t.bones[23] ?? null,
    jaw: t.bones[24] ?? null,
  };
}
function applyPose(e, t, n = 0) {
  let r = e.bones;
  for (let e = 0; e < 19; e++) {
    let n = e * 4;
    r[e].quaternion.set(t[n], t[n + 1], t[n + 2], t[n + 3]);
  }
  let i = e.scale;
  r[0].position.set(t[76] * i, t[77] * i + n, t[78] * i);
}
