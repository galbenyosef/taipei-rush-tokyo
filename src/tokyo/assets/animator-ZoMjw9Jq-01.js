// tokyo/assets/animator-ZoMjw9Jq 01 — copy
// Lines 1-139 of readable/tokyo/assets/animator-ZoMjw9Jq.pretty.js (statement-aligned).
import { Jt as e, Tt as t, or as n, z as r } from "./three-C4coU-vx.js";
import { Er as i, Tr as a } from "./engine-14d5lda2.js";
import {
  a as o,
  c as s,
  i as POSE_LEN,
  l,
  n as u,
  o as d,
  r as f,
  s as p,
  t as m,
  u as h,
} from "./pose-hAXyTQQR.js";
import { applyPose as applyPose } from "./rig-BjRdQXtM.js";
var _ = new e(),
  v = new e(),
  y = new n(),
  b = new n(),
  x = new n(),
  S = new n(),
  C = new n(),
  w = new e(),
  T = class {
    off = [];
    gq = [];
    gp = [];
    constructor(t) {
      for (let r = 0; r < 19; r++)
        (this.off.push(t.rest[r].clone()),
          this.gq.push(new e()),
          this.gp.push(new n()));
    }
    fk(e, t) {
      for (let n = 0; n < 19; n++) this.fkBone(e, n, t);
    }
    fkBone(e, t, n) {
      let r = t * 4,
        i = f[t];
      i < 0
        ? (this.gq[t].set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gp[t].set(e[76] * n, e[77] * n, e[78] * n))
        : (_.set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gq[t].copy(this.gq[i]).multiply(_),
          this.gp[t]
            .copy(this.off[t])
            .applyQuaternion(this.gq[i])
            .add(this.gp[i]));
    }
    fkFrom(e, t, n) {
      this.fkBone(e, t, n);
      for (let r = 0; r < 19; r++) {
        if (r === t) continue;
        let i = f[r];
        for (; i >= 0 && i !== t;) i = f[i];
        i === t && this.fkBone(e, r, n);
      }
    }
    setGlobal(e, t, n) {
      let r = f[t];
      r < 0 ? _.copy(n) : _.copy(this.gq[r]).invert().multiply(n);
      let i = t * 4;
      ((e[i] = _.x),
        (e[i + 1] = _.y),
        (e[i + 2] = _.z),
        (e[i + 3] = _.w),
        this.gq[t].copy(n));
    }
    rotateGlobal(e, t, n) {
      (v.copy(n).multiply(this.gq[t]), this.setGlobal(e, t, v));
    }
  };
function ee(e, t, n, r, i, a, o, s = 1, c = 0.03) {
  let l = e.gp[n],
    u = e.gp[r],
    d = e.gp[i],
    f = y.copy(u).sub(l).length(),
    p = y.copy(u).sub(d).length(),
    m = x.copy(a);
  s < 1 && m.sub(d).multiplyScalar(s).add(d);
  let h = y.copy(m).sub(l).length(),
    g = f + p,
    T = g * c,
    ee = g - T,
    E = h / g;
  if (h > ee) {
    let e = h - ee;
    h = ee + T * (1 - Math.exp(-e / T));
  }
  h = Math.max(0.01, Math.min(g * 0.9999, h));
  let D = (e) => (e < -1 ? -1 : e > 1 ? 1 : e),
    O = y.copy(d).sub(l),
    k = b.copy(u).sub(l),
    A = O.length(),
    j = Math.acos(D(O.dot(k) / (A * f + 1e-9))),
    M = b.copy(l).sub(u),
    N = x.copy(d).sub(u),
    P = Math.acos(D(M.dot(N) / (f * p + 1e-9))),
    F = Math.acos(D((p * p - f * f - h * h) / (-2 * f * h))),
    I = Math.acos(D((h * h - f * f - p * p) / (-2 * f * p)));
  (S.copy(O).cross(b.copy(u).sub(l)),
    S.lengthSq() < 1e-8 && S.copy(o),
    S.normalize());
  let L = x.copy(a);
  (s < 1 && L.sub(d).multiplyScalar(s).add(d), L.sub(l), C.copy(O).cross(L));
  let te = Math.acos(D(O.dot(L) / (A * L.length() + 1e-9))),
    R = C.lengthSq() > 1e-10;
  R && C.normalize();
  let z = e.gq[n];
  (_.setFromAxisAngle(S, F - j),
    R ? v.setFromAxisAngle(C, te).multiply(_) : v.copy(_),
    w.copy(v).multiply(z),
    e.setGlobal(t, n, w));
  let B = e.gq[r];
  return (
    _.setFromAxisAngle(S, I - P),
    w.copy(v).multiply(_).multiply(B),
    e.setGlobal(t, r, w),
    E
  );
}
function makeAnimInput() {
  return {
    speed: 0,
    dirX: 0,
    dirZ: -1,
    turnRate: 0,
    accel: 0,
    grounded: !0,
    verticalSpeed: 0,
    aim: 0,
    aimYaw: 0,
    aimPitch: 0,
    lookYaw: 0,
    lookPitch: -0.05,
    lookWeight: 0.65,
    guard: 0,
  };
}
