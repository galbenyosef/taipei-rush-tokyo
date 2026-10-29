// tokyo/assets/region-tokyo-55J_WESF 423 — math
// Lines 151470-151796 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function CLe(e) {
  let t = Ho(),
    n = e.statics,
    r = Ro.half,
    i = r - Ro.edge,
    a = (e, t, r, i, a, o, s, c, l = 0.3, u = `wall`) => {
      let d = r - e,
        f = i - t,
        p = Math.hypot(d, f) || 1,
        m = d / p,
        h = -(f / p),
        g = m,
        _ = (a + o) / 2,
        v = (e + r) / 2 + h * _,
        y = (t + i) / 2 + g * _;
      n.addOBB(
        v,
        y,
        Math.abs(o - a) / 2,
        p / 2 + l,
        Math.atan2(d, -f),
        s,
        c,
        u,
      );
    };
  for (let o = 0; o < t.n - 1; o++) {
    let s = t.x[o],
      c = t.z[o],
      l = t.x[o + 1],
      u = t.z[o + 1],
      d = t.y[o],
      f = t.y[o + 1],
      p = l - s,
      m = u - c,
      h = Math.hypot(p, m) || 1,
      g = p / h,
      _ = m / h,
      v = Uo(t, o),
      y = 0.6,
      b = (f - d) / h;
    n.addFloor(
      (s + l) / 2,
      (c + u) / 2,
      r,
      h / 2 + y,
      d - b * y,
      f + b * y,
      Math.atan2(-g, _),
      `deck`,
    );
    let x = Math.min(d, f),
      S = Math.max(d, f),
      C =
        v === `deck`
          ? S + Ro.parapet + Ro.wall
          : v === `fill`
            ? S + Ro.parapet
            : v === `cut`
              ? C4 + Ro.coping
              : S + Ro.clear,
      w = v === `deck` ? x - 0.6 : v === `fill` ? -0.15 : x - 0.6;
    if (v === `cut`)
      for (let [n, d, f] of t$(e.plan, { x: s, z: c }, { x: l, z: u })) {
        let e = s + p * n,
          l = c + m * n,
          u = s + p * d,
          h = c + m * d,
          g = t.s[o] + (t.s[o + 1] - t.s[o]) * ((n + d) / 2);
        for (let t of [-1, 1])
          $o(g, t) || a(e, l, u, h, t * i, t * (r + qo), w, f ? -0.7 : C, 0.05);
      }
    else
      for (let e of [-1, 1]) {
        let t = e * (r - 0.2),
          n = -_,
          o = g;
        for (let [d, f] of cQ(sQ(s + n * t, c + o * t, l + n * t, u + o * t)))
          a(
            s + p * d,
            c + m * d,
            s + p * f,
            c + m * f,
            e * i,
            e * (r + 0.1),
            w,
            Math.max(C, w + 1),
            d === 0 && f === 1 ? 0.3 : 0.05,
          );
      }
    (a(s, c, l, u, -0.3, 0.3, x - 0.3, S + 0.85, 0.05, `barrier`),
      v === `tunnel` &&
        a(
          s,
          c,
          l,
          u,
          -r,
          r,
          x + Ro.clear,
          S + Ro.clear + Ro.roof,
          0.3,
          `ceiling`,
        ));
  }
  for (let t of YQ(e.plan))
    n.addCircle(t.x, t.z, 1.45, t.y0, t.top + 1.4, `pier`);
  for (let [t, r] of ZQ(e.plan))
    for (let e of r)
      for (let r of [e.a0 + 0.12, e.a1 - 0.12]) {
        let e = Ro.half + qo;
        t.axis === `z`
          ? n.addBox(
              (t.minX + t.maxX) / 2 - e,
              r - 0.1,
              (t.minX + t.maxX) / 2 + e,
              r + 0.1,
              -0.05000000000000002,
              1.25,
              `railing`,
            )
          : n.addBox(
              r - 0.1,
              (t.minZ + t.maxZ) / 2 - e,
              r + 0.1,
              (t.minZ + t.maxZ) / 2 + e,
              -0.05000000000000002,
              1.25,
              `railing`,
            );
      }
  for (let { L: e } of aQ())
    for (let t = 0; t < e.n - 1; t++) {
      let r = e.x[t],
        i = e.z[t],
        o = e.x[t + 1],
        s = e.z[t + 1],
        c = e.y[t],
        l = e.y[t + 1],
        u = o - r,
        d = s - i,
        f = Math.hypot(u, d) || 1,
        p = u / f,
        m = d / f,
        h = (l - c) / f;
      n.addFloor(
        (r + o) / 2,
        (i + s) / 2,
        rQ,
        f / 2 + 0.6,
        c - h * 0.6,
        l + h * 0.6,
        Math.atan2(-p, m),
        `deck`,
      );
      let g = -m,
        _ = p;
      for (let e of [-1, 1]) {
        let t = e * (rQ - 0.2),
          n = Math.max(1, Math.ceil(f / 2)),
          o = -1;
        for (let s = 0; s <= n; s++) {
          let f = s / n,
            p = s < n && !oQ(r + u * f + g * t, i + d * f + _ * t, -0.5);
          if ((p && o < 0 && (o = f), (!p || s === n) && o >= 0)) {
            let t = p ? 1 : f;
            (t - o > 0.001 &&
              a(
                r + u * o,
                i + d * o,
                r + u * t,
                i + d * t,
                e * (rQ - Ro.edge),
                e * (rQ + 0.1),
                Math.min(c, l) - 0.6,
                Math.max(c, l) + Ro.parapet + Ro.wall,
                0.2,
              ),
              (o = -1));
          }
        }
      }
    }
  for (let t of e$(e.plan))
    n.addCircle(t.x, t.z, 1.45, t.y0, t.top + 1.4, `pier`);
  for (let e of Zo()) {
    let t = n$(e),
      r = Math.sign(e.end - e.street),
      i =
        e.axis === `z`
          ? t[0].rx * e.side > 0
            ? 1
            : -1
          : t[0].rz * e.side > 0
            ? 1
            : -1;
    for (let o = 0; o + 1 < t.length; o++) {
      let s = t[o],
        c = t[o + 1],
        l = Math.hypot(c.x - s.x, c.z - s.z) || 1;
      n.addFloor(
        (s.x + c.x) / 2,
        (s.z + c.z) / 2,
        Yo.half + 0.2,
        l / 2 + 0.3,
        s.y,
        c.y,
        Math.atan2(-s.ux, s.uz),
        `deck`,
      );
      let u = (((s.s ?? 0) + (c.s ?? 0)) / 2 - e.grade) * r < 0,
        d = (((s.s ?? 0) + (c.s ?? 0)) / 2 - e.street) * r < e.walk;
      if (u && !d)
        for (let e of [-1, 1])
          a(
            s.x,
            s.z,
            c.x,
            c.z,
            e * Yo.half,
            e * (Yo.half + 0.45),
            0,
            1,
            0.05,
            `barrier`,
          );
      else
        a(
          s.x,
          s.z,
          c.x,
          c.z,
          i * Yo.half,
          i * (Yo.half + Yo.wall),
          Math.min(s.y, c.y) - 0.6,
          C4 + Ro.coping,
          0.05,
        );
    }
    let o = t[t.length - 1];
    a(
      o.x - o.ux * 0.3,
      o.z - o.uz * 0.3,
      o.x + o.ux * 0.3,
      o.z + o.uz * 0.3,
      -i * (Yo.half + 0.1),
      i * (Yo.half + Yo.wall),
      o.y - 0.6,
      C4 + Ro.coping,
      0.05,
    );
  }
  for (let e of es)
    (n.addFloorRect(e.minX, e.minZ, e.maxX, e.maxZ, e.y, `bridge`),
      e.maxZ - e.minZ > e.maxX - e.minX
        ? (n.addBox(
            e.minX - 0.1,
            e.minZ,
            e.minX + 0.1,
            e.maxZ,
            e.y - 0.3,
            e.y + 1.1,
            `railing`,
          ),
          n.addBox(
            e.maxX - 0.1,
            e.minZ,
            e.maxX + 0.1,
            e.maxZ,
            e.y - 0.3,
            e.y + 1.1,
            `railing`,
          ))
        : (n.addBox(
            e.minX,
            e.minZ - 0.1,
            e.maxX,
            e.minZ + 0.1,
            e.y - 0.3,
            e.y + 1.1,
            `railing`,
          ),
          n.addBox(
            e.minX,
            e.maxZ - 0.1,
            e.maxX,
            e.maxZ + 0.1,
            e.y - 0.3,
            e.y + 1.1,
            `railing`,
          )));
  TLe(e, t, wLe(e, t));
}
function wLe(e, t) {
  let n = e.plan.bounds,
    r = n.minX - 64,
    i = n.minZ - 64,
    a = Math.ceil((n.maxX - n.minX + 128) / w4),
    o = Math.ceil((n.maxZ - n.minZ + 128) / w4),
    s = new Uint8Array(a * o),
    c = (e, t, n) => {
      let c = Math.floor((e - r) / w4),
        l = Math.floor((t - i) / w4);
      c < 0 ||
        l < 0 ||
        c >= a ||
        l >= o ||
        (s[l * a + c] = Math.max(s[l * a + c], n));
    },
    l = Ro.half + 2;
  for (let e = 0; e < t.n - 1; e++) {
    if (Uo(t, e) !== `tunnel`) continue;
    let n = t.s[e + 1] - t.s[e];
    for (let r = 0; r <= n; r += 3) {
      let i = r / n,
        a = t.x[e] + (t.x[e + 1] - t.x[e]) * i,
        o = t.z[e] + (t.z[e + 1] - t.z[e]) * i,
        s = -(t.dz[e] + (t.dz[e + 1] - t.dz[e]) * i),
        u = t.dx[e] + (t.dx[e + 1] - t.dx[e]) * i;
      for (let e = -l; e <= l; e += 3) c(a + s * e, o + u * e, 2);
    }
  }
  for (let e of Jo())
    for (let t = e.minX - w4; t <= e.maxX + w4; t += w4 / 2)
      for (let n = e.minZ - w4; n <= e.maxZ + w4; n += w4 / 2) c(t, n, 1);
  return { minX: r, minZ: i, nx: a, nz: o, m: s };
}
