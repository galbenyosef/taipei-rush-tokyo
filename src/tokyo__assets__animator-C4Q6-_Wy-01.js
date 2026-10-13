// tokyo__assets__animator-C4Q6-_Wy 01 — copy
// Lines 1-138 of readable/tokyo__assets__animator-C4Q6-_Wy.pretty.js (statement-aligned).
import { Kt as e, R as t, tr as n, wt as r } from "./three-CC5Mkdpe.js";
import {
  a as i,
  c as a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
  u as p,
} from "./pose-hAXyTQQR.js";
import { applyPose as m } from "./rig-BjRdQXtM.js";
var h = new e(),
  g = new e(),
  _ = new n(),
  v = new n(),
  y = new n(),
  b = new n(),
  x = new n(),
  S = new e(),
  C = class {
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
        i = u[t];
      i < 0
        ? (this.gq[t].set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gp[t].set(e[76] * n, e[77] * n, e[78] * n))
        : (h.set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gq[t].copy(this.gq[i]).multiply(h),
          this.gp[t]
            .copy(this.off[t])
            .applyQuaternion(this.gq[i])
            .add(this.gp[i]));
    }
    fkFrom(e, t, n) {
      this.fkBone(e, t, n);
      for (let r = 0; r < 19; r++) {
        if (r === t) continue;
        let i = u[r];
        for (; i >= 0 && i !== t;) i = u[i];
        i === t && this.fkBone(e, r, n);
      }
    }
    setGlobal(e, t, n) {
      let r = u[t];
      r < 0 ? h.copy(n) : h.copy(this.gq[r]).invert().multiply(n);
      let i = t * 4;
      ((e[i] = h.x),
        (e[i + 1] = h.y),
        (e[i + 2] = h.z),
        (e[i + 3] = h.w),
        this.gq[t].copy(n));
    }
    rotateGlobal(e, t, n) {
      (g.copy(n).multiply(this.gq[t]), this.setGlobal(e, t, g));
    }
  };
function w(e, t, n, r, i, a, o, s = 1, c = 0.03) {
  let l = e.gp[n],
    u = e.gp[r],
    d = e.gp[i],
    f = _.copy(u).sub(l).length(),
    p = _.copy(u).sub(d).length(),
    m = y.copy(a);
  s < 1 && m.sub(d).multiplyScalar(s).add(d);
  let C = _.copy(m).sub(l).length(),
    w = f + p,
    T = w * c,
    E = w - T,
    ee = C / w;
  if (C > E) {
    let e = C - E;
    C = E + T * (1 - Math.exp(-e / T));
  }
  C = Math.max(0.01, Math.min(w * 0.9999, C));
  let D = (e) => (e < -1 ? -1 : e > 1 ? 1 : e),
    O = _.copy(d).sub(l),
    k = v.copy(u).sub(l),
    A = O.length(),
    j = Math.acos(D(O.dot(k) / (A * f + 1e-9))),
    M = v.copy(l).sub(u),
    N = y.copy(d).sub(u),
    P = Math.acos(D(M.dot(N) / (f * p + 1e-9))),
    F = Math.acos(D((p * p - f * f - C * C) / (-2 * f * C))),
    te = Math.acos(D((C * C - f * f - p * p) / (-2 * f * p)));
  (b.copy(O).cross(v.copy(u).sub(l)),
    b.lengthSq() < 1e-8 && b.copy(o),
    b.normalize());
  let I = y.copy(a);
  (s < 1 && I.sub(d).multiplyScalar(s).add(d), I.sub(l), x.copy(O).cross(I));
  let L = Math.acos(D(O.dot(I) / (A * I.length() + 1e-9))),
    R = x.lengthSq() > 1e-10;
  R && x.normalize();
  let z = e.gq[n];
  (h.setFromAxisAngle(b, F - j),
    R ? g.setFromAxisAngle(x, L).multiply(h) : g.copy(h),
    S.copy(g).multiply(z),
    e.setGlobal(t, n, S));
  let B = e.gq[r];
  return (
    h.setFromAxisAngle(b, te - P),
    S.copy(g).multiply(h).multiply(B),
    e.setGlobal(t, r, S),
    ee
  );
}
function T() {
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
