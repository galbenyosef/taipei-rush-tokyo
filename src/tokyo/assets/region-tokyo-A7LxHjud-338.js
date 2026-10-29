// tokyo/assets/region-tokyo-A7LxHjud 338 — pts
// Lines 122132-122321 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function bAe() {
  let e = new je(4096, 8192);
  (e.setMaterial(0.5, 0, 0, 0), Z(e, 13150328));
  for (let t of [-0.65, 0.65]) $J(e, t - 0.06, 1.42, -2.6, t + 0.06, 1.54, 2.6);
  for (let t of [-0.85, 0.85])
    $J(e, -1.25, 1.54, t - 0.06, 1.25, 1.64, t + 0.06);
  Z(e, 1710618);
  for (let t of [-0.65, 0.65])
    for (let n of [-2.4, 2.4])
      $J(e, t - 0.065, 1.41, n - 0.08, t + 0.065, 1.55, n + 0.08);
  (e.setMaterial(0.25, 0.1, 0, 0),
    Z(e, 1314832),
    $J(e, -0.62, 1.64, -0.62, 0.62, 1.82, 0.62),
    e.setMaterial(0.3, 0.9, 0, 0),
    Z(e, 13936698),
    $J(e, -0.65, 1.8, -0.65, 0.65, 1.86, 0.65),
    e.setMaterial(0.25, 0.1, 0, 0),
    Z(e, 1707530),
    $J(e, -0.42, 1.86, -0.42, 0.42, 2.48, 0.42),
    e.setMaterial(0.3, 0.9, 0, 0),
    Z(e, 14199870));
  for (let t of [-1, 1])
    for (let n of [-1, 1]) nY(e, t * 0.42, n * 0.42, 1.86, 2.5, 0.035, 6);
  for (let [t, n] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    let r = t * 0.425,
      i = n * 0.425;
    $J(
      e,
      r - (n ? 0.22 : 0.008),
      1.95,
      i - (t ? 0.22 : 0.008),
      r + (n ? 0.22 : 0.008),
      2.4,
      i + (t ? 0.22 : 0.008),
    );
  }
  (Z(e, 13146674),
    $J(e, -0.55, 1.86, -0.55, 0.55, 1.95, 0.55),
    e.setMaterial(0.2, 0.15, 0, 0),
    Z(e, 1051658),
    $J(e, -0.6, 2.48, -0.6, 0.6, 2.56, 0.6),
    oY(e, -0.68, 0.68, -0.68, 0.68, 2.56, 2.98, 0.12),
    e.setMaterial(0.3, 0.9, 0, 0),
    Z(e, 14726208),
    $J(e, -0.72, 2.95, -0.04, 0.72, 3.02, 0.04));
  for (let t of [-1, 1]) {
    (tY(e, t * 0.8, 2.52, -0.8, t * 0.8, 2.52, 0.8, 0.03, 5),
      tY(e, -0.8, 2.52, t * 0.8, 0.8, 2.52, t * 0.8, 0.03, 5));
    for (let n of [-1, 1])
      rY(
        e,
        t * 0.82,
        n * 0.82,
        [
          [0.01, 2.48],
          [0.06, 2.54],
          [0.05, 2.62],
          [0.01, 2.66],
        ],
        6,
      );
  }
  (rY(
    e,
    0,
    0,
    [
      [0.06, 3],
      [0.1, 3.08],
      [0.08, 3.2],
      [0.03, 3.3],
    ],
    6,
  ),
    $J(e, -0.03, 3.2, 0.04, 0.03, 3.42, 0.16));
  for (let t of [-1, 1]) $J(e, t * 0.05, 3.12, -0.08, t * 0.3, 3.32, 0.06);
  (e.setMaterial(0.8, 0, 0, 0), Z(e, 6957706));
  for (let t of [-1, 1])
    for (let n of [-1, 1])
      (tY(e, t * 0.62, 2.5, n * 0.62, t * 0.62, 2, n * 0.62, 0.035, 5),
        rY(
          e,
          t * 0.62,
          n * 0.62,
          [
            [0.02, 1.85],
            [0.07, 1.92],
            [0.03, 2],
          ],
          6,
        ));
  let t = e.n,
    n = new S();
  (n.setAttribute(`position`, new w(e.pos.slice(0, t * 3), 3)),
    n.setAttribute(`normal`, new w(e.nor.slice(0, t * 3), 3)));
  let r = new Uint8Array(t * 4),
    i = new Uint8Array(t * 4);
  for (let n = 0; n < t; n++)
    ((r[n * 4] = e.ca[n * 8]),
      (r[n * 4 + 1] = e.ca[n * 8 + 1]),
      (r[n * 4 + 2] = e.ca[n * 8 + 2]),
      (r[n * 4 + 3] = 255),
      (i[n * 4] = e.ca[n * 8 + 4]),
      (i[n * 4 + 1] = e.ca[n * 8 + 5]),
      (i[n * 4 + 2] = e.ca[n * 8 + 6]),
      (i[n * 4 + 3] = e.ca[n * 8 + 7]));
  return (
    n.setAttribute(`color`, new w(r, 4, !0)),
    n.setAttribute(`aCity`, new w(i, 4, !0)),
    n.setIndex(
      new w(
        t > 65535
          ? e.idx.slice(0, e.ni)
          : Uint16Array.from(e.idx.subarray(0, e.ni)),
        1,
      ),
    ),
    n.computeBoundingBox(),
    n.computeBoundingSphere(),
    n
  );
}
var xAe = class {
    closed;
    pts;
    cum;
    len;
    constructor(e, t) {
      ((this.closed = t),
        (this.pts = e.map((e) => ({ x: e.x, z: e.z }))),
        t && this.pts.length > 1 && this.pts.push({ ...this.pts[0] }),
        (this.cum = [0]));
      for (let e = 1; e < this.pts.length; e++)
        this.cum.push(
          this.cum[e - 1] +
            Math.hypot(
              this.pts[e].x - this.pts[e - 1].x,
              this.pts[e].z - this.pts[e - 1].z,
            ),
        );
      this.len = this.cum[this.cum.length - 1] || 1;
    }
    at(e, t) {
      let n = this.closed
          ? ((e % this.len) + this.len) % this.len
          : Math.max(0, Math.min(this.len, e)),
        r = 1;
      for (; r < this.pts.length - 1 && this.cum[r] < n;) r++;
      let i = this.pts[r - 1],
        a = this.pts[r],
        o = this.cum[r] - this.cum[r - 1] || 1,
        s = Math.max(0, Math.min(1, (n - this.cum[r - 1]) / o));
      return (
        (t.x = i.x + (a.x - i.x) * s),
        (t.z = i.z + (a.z - i.z) * s),
        (t.h = Math.atan2(a.x - i.x, -(a.z - i.z))),
        (n = 0),
        t
      );
    }
    project(e, t, n = -1) {
      let r = 0,
        i = 1 / 0;
      for (let a = 1; a < this.pts.length; a++) {
        let o = this.pts[a - 1],
          s = this.pts[a],
          c = s.x - o.x,
          l = s.z - o.z,
          u = c * c + l * l || 1,
          d = Math.max(0, Math.min(1, ((e - o.x) * c + (t - o.z) * l) / u)),
          f = o.x + c * d,
          p = o.z + l * d,
          m = this.cum[a - 1] + d * Math.sqrt(u),
          h = (f - e) ** 2 + (p - t) ** 2;
        (n >= 0 &&
          (h += Math.min(Math.abs(m - n), this.len - Math.abs(m - n)) * 0.05),
          h < i && ((i = h), (r = m)));
      }
      return r;
    }
  },
  OY = [];
for (let e of [-0.98, -0.32, 0.32, 0.98])
  for (let t of [-2.1, -1.2, 1.2, 2.1, -0.3])
    (Math.abs(e) < 0.5 && Math.abs(t) < 0.6) || OY.push([e, t]);
