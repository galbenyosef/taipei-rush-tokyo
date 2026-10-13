// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 45 — math
// Lines 15375-15544 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function is(e, t) {
  let { desc: n, lod: r, A: i } = e,
    a = r === 0,
    o = i.m,
    s = o.vertexCount,
    c = null;
  t && ((c = Qo($o(n), r, !1).m), c.vertexCount !== s && (c = null));
  let l = new Float32Array(o.pos),
    u = new Float32Array(o.nor),
    d = new Float32Array(s * 3),
    f = new Float32Array(s * 4),
    p = new Float32Array(s * 4),
    m = [0, 0, 0],
    h = i.b.joints.p[z.lidL].y,
    g = i.b.joints.p[z.lidR].y;
  for (let e = 0; e < s; e++) {
    let t = e * 3,
      n = e * 4,
      r = 7,
      i = o.col[t],
      s = o.col[t + 1],
      l = o.col[t + 2];
    if (c) {
      let e = c.col[t],
        n = c.col[t + 1],
        a = c.col[t + 2];
      if (Math.abs(e - i) + Math.abs(n - s) + Math.abs(a - l) > 2e-4) {
        let t = Math.max(e, n, a);
        t > 1e-4 &&
          ((r = e >= n && e >= a ? 2 : n >= a ? 3 : 4),
          (i = s = l = Math.min(1.2, t)),
          m[r === 2 ? 0 : r === 3 ? 1 : 2]++);
      }
    }
    ((d[t] = i), (d[t + 1] = s), (d[t + 2] = l));
    let u = o.part[e],
      _ = 0;
    for (let e = 1; e < 4; e++) o.sw[n + e] > o.sw[n + _] && (_ = e);
    let v = o.si[n + _],
      y = 0,
      b = 0;
    if (v === z.lidL || v === z.lidR) y = 30 + ((v === z.lidL ? h : g) - 1);
    else if (on[v] === u) {
      es.fill(0);
      for (let e = 0; e < 4; e++) {
        let t = o.sw[n + e];
        t > 0 && (es[on[o.si[n + e]]] += t);
      }
      let e = -1,
        t = 0,
        r = -1,
        i = 0;
      for (let n = 0; n < 14; n++) {
        if (n === u) continue;
        let a = es[n];
        a > t
          ? ((r = e), (i = t), (e = n), (t = a))
          : a > i && ((r = n), (i = a));
      }
      let a = es[u];
      if (r >= 0 && i > 0.03) {
        let n = a + t + i;
        ((y = e + 1 + Math.min(0.999, t / n)),
          (b = r + 1 + Math.min(0.999, i / n)));
      } else if (e >= 0 && t > 0.02) {
        let n = Math.min(0.999, t / (a + t));
        y = e + 1 + n;
      }
    }
    ((f[n] = u), (f[n + 1] = r), (f[n + 2] = b), (f[n + 3] = o.glow[e]));
    let x = a && o.rect[n + 2] > 0;
    ((p[n] = y),
      (p[n + 1] = x ? o.uv[e * 2] : -10),
      (p[n + 2] = x ? o.uv[e * 2 + 1] : -10),
      (p[n + 3] = o.surf[n] + Math.min(0.99, Math.max(0, o.surf[n + 1]))));
  }
  if (c && !n.top.tucked) {
    let e = 9;
    for (let t = 0; t < s; t++) {
      let n = f[t * 4 + 1],
        r = f[t * 4];
      (n === 2 || n === 4) && r <= 1 && (e = Math.min(e, l[t * 3 + 1]));
    }
    if (e < 1.2)
      for (let t = 0; t < s; t++) {
        let n = t * 3,
          r = f[t * 4];
        if (f[t * 4 + 1] !== 3 || !(r <= 1 || r === 7 || r === 9)) continue;
        let i = l[n + 1];
        if (i < e - 0.015) continue;
        let a = l[n],
          o = l[n + 2],
          s = Math.sqrt(a * a + o * o);
        if (s < 0.05) continue;
        let c = Math.min(0.016, s * 0.1) * Math.min(1, (i - e + 0.015) / 0.02);
        ((l[n] -= (a / s) * c), (l[n + 2] -= (o / s) * c));
      }
  }
  if (c)
    for (let e = 0; e < s; e++) {
      let t = e * 3,
        n = f[e * 4],
        r = f[e * 4 + 1];
      if ((n !== 3 && n !== 5) || (r !== 2 && r !== 4)) continue;
      let i = l[t + 1];
      if (i < 1.35) continue;
      let a = Math.min(1, (i - 1.35) / 0.1),
        o = a * a * (3 - 2 * a);
      l[t + 1] = i - o * 0.03;
      let s = l[t];
      l[t] = s - Math.sign(s) * o * 0.018;
    }
  let _ = null;
  if (
    c &&
    (n.bottom.style === `skirt` ||
      n.bottom.style === `pencil` ||
      n.bottom.style === `longskirt`)
  ) {
    _ = new Uint8Array(s);
    for (let e = 0; e < s; e++)
      f[e * 4 + 1] === 3 &&
        Math.abs(d[e * 3] - 0.45) < 0.02 &&
        l[e * 3 + 1] < 0.95 &&
        (_[e] = 1);
  }
  let v = [],
    y = o.idx[0];
  for (let e = 0; e < y.length; e += 3) {
    let t = y[e],
      n = y[e + 1],
      r = y[e + 2];
    (_ && _[t] && _[n] && _[r]) || v.push(t, n, r);
  }
  let b = o.idx[1];
  for (let e = 0; e < b.length; e += 3) {
    let t = b[e];
    (ts.setRGB(o.col[t * 3], o.col[t * 3 + 1], o.col[t * 3 + 2]),
      ts.r * 0.3 + ts.g * 0.59 + ts.b * 0.11 < 0.12 &&
        v.push(b[e], b[e + 1], b[e + 2]));
  }
  return {
    pos: l,
    nor: u,
    col: d,
    info: f,
    ext: p,
    idx: s > 65535 ? new Uint32Array(v) : new Uint16Array(v),
    triangles: v.length / 3,
    recolour: m,
  };
}
const as = (e, t = []) => self.postMessage(e, t);
self.onmessage = (e) => {
  let { id: t, desc: n, lod: r, recolour: i } = e.data;
  try {
    let e = performance.now(),
      a = ns(n, r, i);
    as({ id: t, data: a, ms: performance.now() - e }, [
      a.pos.buffer,
      a.nor.buffer,
      a.col.buffer,
      a.info.buffer,
      a.ext.buffer,
      a.idx.buffer,
    ]);
  } catch (e) {
    as({ id: t, error: String(e?.stack ?? e) });
  }
};
