// tokyo/assets/animator-B5fCfINc 03 — copy
// Lines 1638-1814 of readable/tokyo/assets/animator-B5fCfINc.pretty.js (statement-aligned).
for (let e of [5, 6, 7, 8, 9, 10, 17, 18]) G[e] = 1;
((G[2] = 0.35), (G[3] = 0.3));
var K = new n(),
  q = new n(),
  J = new n(),
  Y = new n(),
  X = new n(),
  Z = new t(),
  Ae = new t(),
  je = new t(),
  Me = new r(),
  Ne = new r(),
  Pe = new n(0, 0, -1),
  Fe = 0.12;
function Ie(e, t, n, r, i, a, o) {
  let s = n ? 8 : 5,
    c = n ? 9 : 6,
    l = n ? 10 : 7;
  V.copy(e.gq[l]);
  let u = e.off[c],
    d = e.off[l],
    f = u.length(),
    p = d.length();
  K.copy(u).cross(Pe).normalize();
  let m = f + p,
    h = m * 0.03,
    g = m - h,
    _ = q.copy(r).sub(e.gp[s]).length();
  (_ > g && (_ = g + h * (1 - Math.exp(-(_ - g) / h))),
    (_ = Math.max(Math.abs(f - p) + 0.001, _)));
  let v = k((_ * _ - f * f - p * p) / (2 * f * p), -1, 1);
  J.copy(d).multiplyScalar(1 / p);
  let y = J.dot(K);
  Y.copy(J).addScaledVector(K, -y);
  let b = Y.length();
  X.copy(u).multiplyScalar(1 / f);
  let x = Math.atan2(R.copy(X).cross(Y).dot(K), X.dot(Y)),
    S = Math.max(Fe, Math.acos(k(v / Math.max(1e-4, b), -1, 1))) - x;
  (Z.setFromAxisAngle(K, S), q.copy(d).applyQuaternion(Z).add(u));
  let C = q.length();
  if (
    (q.multiplyScalar(1 / C),
    J.copy(u).addScaledVector(q, -u.dot(q)).normalize(),
    X.copy(q).cross(J),
    Me.makeBasis(q, J, X),
    q.copy(r).sub(e.gp[s]),
    q.lengthSq() < 1e-10)
  )
    return;
  if (
    (q.normalize(),
    Y.copy(i).addScaledVector(q, -i.dot(q)),
    Y.lengthSq() < 1e-8 && Y.set(0, -1, 0).addScaledVector(q, -q.y),
    Y.normalize(),
    X.copy(q).cross(Y),
    Ne.makeBasis(q, Y, X),
    Ne.multiply(Me.transpose()),
    Ae.setFromRotationMatrix(Ne),
    a < 1)
  ) {
    Ae.copy(je.copy(e.gq[s]).slerp(Ae, a));
    let n = c * 4;
    (je.set(t[n], t[n + 1], t[n + 2], t[n + 3]).slerp(Z, a), Z.copy(je));
  }
  e.setGlobal(t, s, Ae);
  let w = c * 4;
  ((t[w] = Z.x),
    (t[w + 1] = Z.y),
    (t[w + 2] = Z.z),
    (t[w + 3] = Z.w),
    e.fkFrom(t, s, o),
    e.setGlobal(t, l, V),
    Be(e, t, l, o));
}
function Le(e, t, n, r, i, a) {
  (B.copy(e.gq[n]).slerp(r, i), e.setGlobal(t, n, B), Be(e, t, n, a));
}
var Re = new t(),
  ze = new t();
function Be(e, t, n, r) {
  let i = d[n];
  (ze.copy(e.gq[n]), Re.copy(e.gq[i]).invert().multiply(ze));
  let a = R.copy(e.off[n]).normalize(),
    o = Re.x * a.x + Re.y * a.y + Re.z * a.z,
    s = Re.w,
    c = a.x * o,
    l = a.y * o,
    u = a.z * o,
    f = Math.sqrt(c * c + l * l + u * u + s * s);
  if (f < 1e-6 || Math.abs(o) < 1e-4) return;
  s < 0 && ((c = -c), (l = -l), (u = -u), (s = -s));
  let p = i * 4,
    m = t[p],
    h = t[p + 1],
    g = t[p + 2],
    _ = t[p + 3],
    v = c / f,
    y = l / f,
    b = u / f,
    x = s / f;
  ((t[p] = _ * v + m * x + h * b - g * y),
    (t[p + 1] = _ * y - m * b + h * x + g * v),
    (t[p + 2] = _ * b + m * y - h * v + g * x),
    (t[p + 3] = _ * x - m * v - h * y - g * b),
    e.fkBone(t, i, r),
    e.setGlobal(t, n, ze),
    e.fkBone(t, n, r));
}
function Q(e, t, n, r, i, a) {
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
function Ve(e, t, n) {
  let r = t * 4,
    i = e[r + 3] < 0 ? -1 : 1,
    a = 1 - n,
    o = e[r] * a,
    s = e[r + 1] * a,
    c = e[r + 2] * a,
    l = e[r + 3] * a + i * n,
    u = 1 / Math.sqrt(o * o + s * s + c * c + l * l);
  ((e[r] = o * u), (e[r + 1] = s * u), (e[r + 2] = c * u), (e[r + 3] = l * u));
}
function He(e, t, n, r) {
  let i = t * 4,
    a = e[i],
    o = e[i + 1],
    s = e[i + 2],
    c = e[i + 3];
  c < 0 && ((a = -a), (o = -o), (s = -s), (c = -c));
  let l = Math.sqrt(a * a + o * o + s * s);
  if (l < 1e-5) return;
  let u = 2 * Math.atan2(l, c);
  if (u <= n) return;
  let d = (u + (n - u) * r) * 0.5,
    f = Math.sin(d) / l;
  ((e[i] = a * f),
    (e[i + 1] = o * f),
    (e[i + 2] = s * f),
    (e[i + 3] = Math.cos(d)));
}
var Ue = new e();
function We(e, t, n, r, i) {
  (Ue.set(n, r, i, `XYZ`), z.setFromEuler(Ue));
  let a = t * 4;
  ((e[a] = z.x), (e[a + 1] = z.y), (e[a + 2] = z.z), (e[a + 3] = z.w));
}
