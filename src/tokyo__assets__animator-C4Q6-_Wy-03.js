// tokyo__assets__animator-C4Q6-_Wy 03 — copy
// Lines 1409-1556 of readable/tokyo__assets__animator-C4Q6-_Wy.pretty.js (statement-aligned).
for (let e of [5, 6, 7, 8, 9, 10, 17, 18]) U[e] = 1;
((U[2] = 0.35), (U[3] = 0.3));
var W = new n(),
  G = new n(),
  K = new n(),
  q = new n(),
  J = new n(),
  Y = new e(),
  X = new e(),
  Ce = new e(),
  we = new r(),
  Te = new r(),
  Ee = new n(0, 0, -1),
  De = 0.12;
function Z(e, t, n, r, i, a, o) {
  let s = n ? 8 : 5,
    c = n ? 9 : 6,
    l = n ? 10 : 7;
  z.copy(e.gq[l]);
  let u = e.off[c],
    d = e.off[l],
    f = u.length(),
    p = d.length();
  W.copy(u).cross(Ee).normalize();
  let m = f + p,
    h = m * 0.03,
    g = m - h,
    _ = G.copy(r).sub(e.gp[s]).length();
  (_ > g && (_ = g + h * (1 - Math.exp(-(_ - g) / h))),
    (_ = Math.max(Math.abs(f - p) + 0.001, _)));
  let v = O((_ * _ - f * f - p * p) / (2 * f * p), -1, 1);
  K.copy(d).multiplyScalar(1 / p);
  let y = K.dot(W);
  q.copy(K).addScaledVector(W, -y);
  let b = q.length();
  J.copy(u).multiplyScalar(1 / f);
  let x = Math.atan2(I.copy(J).cross(q).dot(W), J.dot(q)),
    S = Math.max(De, Math.acos(O(v / Math.max(1e-4, b), -1, 1))) - x;
  (Y.setFromAxisAngle(W, S), G.copy(d).applyQuaternion(Y).add(u));
  let C = G.length();
  if (
    (G.multiplyScalar(1 / C),
    K.copy(u).addScaledVector(G, -u.dot(G)).normalize(),
    J.copy(G).cross(K),
    we.makeBasis(G, K, J),
    G.copy(r).sub(e.gp[s]),
    G.lengthSq() < 1e-10)
  )
    return;
  if (
    (G.normalize(),
    q.copy(i).addScaledVector(G, -i.dot(G)),
    q.lengthSq() < 1e-8 && q.set(0, -1, 0).addScaledVector(G, -G.y),
    q.normalize(),
    J.copy(G).cross(q),
    Te.makeBasis(G, q, J),
    Te.multiply(we.transpose()),
    X.setFromRotationMatrix(Te),
    a < 1)
  ) {
    X.copy(Ce.copy(e.gq[s]).slerp(X, a));
    let n = c * 4;
    (Ce.set(t[n], t[n + 1], t[n + 2], t[n + 3]).slerp(Y, a), Y.copy(Ce));
  }
  e.setGlobal(t, s, X);
  let w = c * 4;
  ((t[w] = Y.x),
    (t[w + 1] = Y.y),
    (t[w + 2] = Y.z),
    (t[w + 3] = Y.w),
    e.fkFrom(t, s, o),
    e.setGlobal(t, l, z),
    Ae(e, t, l, o));
}
function Oe(e, t, n, r, i, a) {
  (R.copy(e.gq[n]).slerp(r, i), e.setGlobal(t, n, R), Ae(e, t, n, a));
}
var Q = new e(),
  ke = new e();
function Ae(e, t, n, r) {
  let i = u[n];
  (ke.copy(e.gq[n]), Q.copy(e.gq[i]).invert().multiply(ke));
  let a = I.copy(e.off[n]).normalize(),
    o = Q.x * a.x + Q.y * a.y + Q.z * a.z,
    s = Q.w,
    c = a.x * o,
    l = a.y * o,
    d = a.z * o,
    f = Math.sqrt(c * c + l * l + d * d + s * s);
  if (f < 1e-6 || Math.abs(o) < 1e-4) return;
  s < 0 && ((c = -c), (l = -l), (d = -d), (s = -s));
  let p = i * 4,
    m = t[p],
    h = t[p + 1],
    g = t[p + 2],
    _ = t[p + 3],
    v = c / f,
    y = l / f,
    b = d / f,
    x = s / f;
  ((t[p] = _ * v + m * x + h * b - g * y),
    (t[p + 1] = _ * y - m * b + h * x + g * v),
    (t[p + 2] = _ * b + m * y - h * v + g * x),
    (t[p + 3] = _ * x - m * v - h * y - g * b),
    e.fkBone(t, i, r),
    e.setGlobal(t, n, ke),
    e.fkBone(t, n, r));
}
function je(e, t, n, r, i, a) {
  let o = a * 0.5,
    s = Math.sin(o),
    c = n * s,
    l = r * s,
    u = i * s,
    d = Math.cos(o),
    f = t * 4,
    p = e[f],
    m = e[f + 1],
    h = e[f + 2],
    g = e[f + 3];
  ((e[f] = d * p + c * g + l * h - u * m),
    (e[f + 1] = d * m - c * h + l * g + u * p),
    (e[f + 2] = d * h + c * m - l * p + u * g),
    (e[f + 3] = d * g - c * p - l * m - u * h));
}
function $(e, t, n, r, i, a) {
  let o = a * 0.5,
    s = Math.sin(o),
    c = n * s,
    l = r * s,
    u = i * s,
    d = Math.cos(o),
    f = t * 4,
    p = e[f],
    m = e[f + 1],
    h = e[f + 2],
    g = e[f + 3];
  ((e[f] = g * c + p * d + m * u - h * l),
    (e[f + 1] = g * l - p * u + m * d + h * c),
    (e[f + 2] = g * u + p * l - m * c + h * d),
    (e[f + 3] = g * d - p * c - m * l - h * u));
}
var Me = new t();
function Ne(e, t, n, r, i) {
  (Me.set(n, r, i, `XYZ`), L.setFromEuler(Me));
  let a = t * 4;
  ((e[a] = L.x), (e[a + 1] = L.y), (e[a + 2] = L.z), (e[a + 3] = L.w));
}
