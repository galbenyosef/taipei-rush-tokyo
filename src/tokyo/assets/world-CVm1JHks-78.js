// tokyo/assets/world-CVm1JHks 78 — math
// Lines 26424-26614 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function fg(e, t, n, r, i, a) {
  let o = [1, 0.87, 0.68],
    s = [1, 0.6, 0.26];
  for (let n of t) {
    let t = n.to - n.from;
    if (t < 8 || (i && !n.always)) continue;
    let r = n.axis === `z`,
      c = n.y ?? 0,
      l = lg(n.at, n.from),
      u = !n.major && l < 0.45 ? s : o,
      d = n.halfWidth > 9,
      f = n.pedestrian ? 24 : (n.major ? 31 : 42) * (a.thin ?? 1),
      p = n.major ? 2.6 : n.pedestrian ? 2.2 : 1.8,
      m = d ? 3.6 : n.major ? 3.1 : 2.3,
      h = d ? 1.9 : n.major ? 1.6 : 1.25,
      g = n.halfWidth + 0.8,
      _ = 0,
      v = n.major || n.halfWidth > 5.5;
    for (let t = n.from + f * 0.5 + l * 6; t < n.to - 4; t += f, _++) {
      let i = v || _ % 2 == 0 ? -1 : 1,
        a = v ? 1 : i;
      for (let o = i; o <= a; o += 2) {
        let i = t + (o > 0 && n.major ? f * 0.5 : 0);
        if (i > n.to - 4) continue;
        let a = n.at + o * g,
          s = p * (0.85 + 0.3 * lg(i, a));
        e.lamp(
          r ? a : i,
          c + 7.5,
          r ? i : a,
          m,
          h,
          u[0] * s,
          u[1] * s,
          u[2] * s,
          n.always,
        );
      }
      if (n.median >= 3 && _ % 2 == 0) {
        let i = p * 0.9;
        e.lamp(
          r ? n.at : t,
          c + 9,
          r ? t : n.at,
          m,
          h,
          o[0] * i,
          o[1] * i,
          o[2] * i,
          n.always,
        );
      }
    }
    let y = Math.max(1, Math.round(t / 64)),
      b = t / y,
      x = n.major ? 0.16 : 0.11;
    for (let t = 0; t < y; t++) {
      let i = n.from + b * (t + 0.5);
      e.wash(
        r ? n.at : i,
        c + 0.35,
        r ? i : n.at,
        r,
        b * 0.5,
        n.halfWidth + 2.2,
        u[0] * x,
        u[1] * x * 0.95,
        u[2] * x * 0.9,
        n.always,
      );
    }
    if (!n.pedestrian && n.lanesPerDir >= 2 && t > 120)
      for (let i = 0; i < 2; i++) {
        let o = i === 0 ? 1 : -1;
        for (let i = 0; i < Math.min(3, n.lanesPerDir); i++) {
          let s = Ie(n.median * 0.5, i, a.laneWidth, a.side) * (r ? -o : o),
            l = Math.max(
              1,
              Math.floor(t / ((n.major ? 62 : 90) * (a.thin ?? 1))),
            );
          for (let a = 0; a < l; a++) {
            let l = lg(a * 3.1 + i, n.at + o * 17) * t,
              u = (11 + 6 * lg(a, i + o * 5 + n.at)) * o;
            e.streak(
              r,
              n.at + s,
              c + 0.9,
              n.from,
              n.to,
              l,
              u,
              5 + 3 * lg(a + 9, i),
              0.9,
              n.always,
            );
          }
        }
      }
  }
  for (let t of r) e.lamp(t.x, t.y, t.z, 2.4, 1.3, 2, 1.62, 1.1, !0);
  for (let t of n) {
    if (i && !t.always) continue;
    let n = t.y ?? 0,
      r = Math.max(t.halfX, t.halfZ),
      a = t.signal ? 0.55 : 0.32;
    if (
      (e.lamp(
        t.x,
        n + 2,
        t.z,
        r * 1.25,
        2.2,
        1 * a,
        0.8 * a,
        0.58 * a,
        t.always,
      ),
      t.signal)
    )
      for (let [r, i] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        e.lamp(
          t.x + r * (t.halfX + 1.5),
          n + 8,
          t.z + i * (t.halfZ + 1.5),
          3.2,
          1.7,
          2.6,
          2.3,
          1.85,
          t.always,
        );
    e.counts.nodes++;
  }
  return e;
}
var pg = new me(),
  mg = new O(),
  hg = new U(),
  gg = class {
    cam = new U();
    maxDist = 1 / 0;
    detailDist = 0;
    test = (e) =>
      this.maxDist < 1 / 0 && e.distanceToPoint(this.cam) > this.maxDist
        ? !1
        : pg.intersectsBox(e);
    testDetail = (e) =>
      this.detailDist <= 0 || e.distanceToPoint(this.cam) > this.detailDist
        ? !1
        : pg.intersectsBox(e);
    set(e, t = 1 / 0) {
      return (
        mg.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        pg.setFromProjectionMatrix(mg, e.coordinateSystem, e.reversedDepth),
        this.cam.setFromMatrixPosition(e.matrixWorld),
        (this.maxDist = t),
        this
      );
    }
  };
function _g(e, t, n, r) {
  let i = Math.max(1, Math.ceil((t.x1 - t.x0) / n)),
    a = Math.max(1, Math.ceil((t.z1 - t.z0) / n)),
    o = new Float64Array(i * a);
  for (let s of e) {
    let e = r(s);
    if (e <= 0 || s.count <= 0) continue;
    let c = s.box,
      l = Math.max(0, Math.ceil((c.min.x - e - t.x0) / n) - 1),
      u = Math.min(i - 1, Math.floor((c.max.x + e - t.x0) / n)),
      d = Math.max(0, Math.ceil((c.min.z - e - t.z0) / n) - 1),
      f = Math.min(a - 1, Math.floor((c.max.z + e - t.z0) / n));
    for (let r = l; r <= u; r++) {
      let i = t.x0 + r * n,
        l = Math.max(0, c.min.x - (i + n), i - c.max.x);
      for (let i = d; i <= f; i++) {
        let u = t.z0 + i * n,
          d = Math.max(0, c.min.z - (u + n), u - c.max.z);
        l * l + d * d <= e * e && (o[r * a + i] += s.count);
      }
    }
  }
  let s = 0;
  for (let e = 0; e < o.length; e++) o[e] > s && (s = o[e]);
  return s;
}
