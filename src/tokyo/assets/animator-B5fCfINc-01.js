// tokyo/assets/animator-B5fCfINc 01 — copy
// Lines 1-139 of readable/tokyo/assets/animator-B5fCfINc.pretty.js (statement-aligned).
import { R as e, qt as t, rr as n, wt as r } from "./three-x0mFGRTI.js";
import { mr as i } from "./engine-wUBYs8Z3.js";
import {
  a,
  c as o,
  i as POSE_LEN,
  l as c,
  n as l,
  o as u,
  r as d,
  s as f,
  t as p,
  u as m,
} from "./pose-hAXyTQQR.js";
import { applyPose as applyPose } from "./rig-BjRdQXtM.js";
var g = new t(),
  _ = new t(),
  v = new n(),
  y = new n(),
  b = new n(),
  x = new n(),
  S = new n(),
  C = new t(),
  w = class {
    off = [];
    gq = [];
    gp = [];
    constructor(e) {
      for (let r = 0; r < 19; r++)
        (this.off.push(e.rest[r].clone()),
          this.gq.push(new t()),
          this.gp.push(new n()));
    }
    fk(e, t) {
      for (let n = 0; n < 19; n++) this.fkBone(e, n, t);
    }
    fkBone(e, t, n) {
      let r = t * 4,
        i = d[t];
      i < 0
        ? (this.gq[t].set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gp[t].set(e[76] * n, e[77] * n, e[78] * n))
        : (g.set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gq[t].copy(this.gq[i]).multiply(g),
          this.gp[t]
            .copy(this.off[t])
            .applyQuaternion(this.gq[i])
            .add(this.gp[i]));
    }
    fkFrom(e, t, n) {
      this.fkBone(e, t, n);
      for (let r = 0; r < 19; r++) {
        if (r === t) continue;
        let i = d[r];
        for (; i >= 0 && i !== t;) i = d[i];
        i === t && this.fkBone(e, r, n);
      }
    }
    setGlobal(e, t, n) {
      let r = d[t];
      r < 0 ? g.copy(n) : g.copy(this.gq[r]).invert().multiply(n);
      let i = t * 4;
      ((e[i] = g.x),
        (e[i + 1] = g.y),
        (e[i + 2] = g.z),
        (e[i + 3] = g.w),
        this.gq[t].copy(n));
    }
    rotateGlobal(e, t, n) {
      (_.copy(n).multiply(this.gq[t]), this.setGlobal(e, t, _));
    }
  };
function ee(e, t, n, r, i, a, o, s = 1, c = 0.03) {
  let l = e.gp[n],
    u = e.gp[r],
    d = e.gp[i],
    f = v.copy(u).sub(l).length(),
    p = v.copy(u).sub(d).length(),
    m = b.copy(a);
  s < 1 && m.sub(d).multiplyScalar(s).add(d);
  let h = v.copy(m).sub(l).length(),
    w = f + p,
    ee = w * c,
    T = w - ee,
    E = h / w;
  if (h > T) {
    let e = h - T;
    h = T + ee * (1 - Math.exp(-e / ee));
  }
  h = Math.max(0.01, Math.min(w * 0.9999, h));
  let D = (e) => (e < -1 ? -1 : e > 1 ? 1 : e),
    O = v.copy(d).sub(l),
    k = y.copy(u).sub(l),
    A = O.length(),
    j = Math.acos(D(O.dot(k) / (A * f + 1e-9))),
    M = y.copy(l).sub(u),
    N = b.copy(d).sub(u),
    P = Math.acos(D(M.dot(N) / (f * p + 1e-9))),
    F = Math.acos(D((p * p - f * f - h * h) / (-2 * f * h))),
    I = Math.acos(D((h * h - f * f - p * p) / (-2 * f * p)));
  (x.copy(O).cross(y.copy(u).sub(l)),
    x.lengthSq() < 1e-8 && x.copy(o),
    x.normalize());
  let L = b.copy(a);
  (s < 1 && L.sub(d).multiplyScalar(s).add(d), L.sub(l), S.copy(O).cross(L));
  let R = Math.acos(D(O.dot(L) / (A * L.length() + 1e-9))),
    z = S.lengthSq() > 1e-10;
  z && S.normalize();
  let B = e.gq[n];
  (g.setFromAxisAngle(x, F - j),
    z ? _.setFromAxisAngle(S, R).multiply(g) : _.copy(g),
    C.copy(_).multiply(B),
    e.setGlobal(t, n, C));
  let V = e.gq[r];
  return (
    g.setFromAxisAngle(x, I - P),
    C.copy(_).multiply(g).multiply(V),
    e.setGlobal(t, r, C),
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
