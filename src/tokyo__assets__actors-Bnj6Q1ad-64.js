// tokyo__assets__actors-Bnj6Q1ad 64 — math
// Lines 32017-32263 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function b_(e, t) {
  let { desc: n, lod: r, A: i } = e,
    a = r === 0,
    o = i.m,
    s = o.vertexCount,
    c = null;
  t && ((c = p_(m_(n), r, !1).m), c.vertexCount !== s && (c = null));
  let l = new Float32Array(o.pos),
    u = new Float32Array(o.nor),
    d = new Float32Array(s * 3),
    f = new Float32Array(s * 4),
    p = new Float32Array(s * 4),
    m = [0, 0, 0],
    h = i.b.joints.p[H.lidL].y,
    g = i.b.joints.p[H.lidR].y;
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
    if (v === H.lidL || v === H.lidR) y = 30 + ((v === H.lidL ? h : g) - 1);
    else if (Nt[v] === u) {
      h_.fill(0);
      for (let e = 0; e < 4; e++) {
        let t = o.sw[n + e];
        t > 0 && (h_[Nt[o.si[n + e]]] += t);
      }
      let e = -1,
        t = 0,
        r = -1,
        i = 0;
      for (let n = 0; n < 14; n++) {
        if (n === u) continue;
        let a = h_[n];
        a > t
          ? ((r = e), (i = t), (e = n), (t = a))
          : a > i && ((r = n), (i = a));
      }
      let a = h_[u];
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
    (g_.setRGB(o.col[t * 3], o.col[t * 3 + 1], o.col[t * 3 + 2]),
      g_.r * 0.3 + g_.g * 0.59 + g_.b * 0.11 < 0.12 &&
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
var x_ = class {
    size;
    canvas;
    tex;
    cols;
    rows;
    cell;
    gutter = 8;
    g;
    tmp;
    tg;
    dirty = !1;
    constructor(e, t, n = 8) {
      ((this.size = e),
        (this.cols = n),
        (this.rows = Math.max(1, Math.ceil(t / n))),
        (this.cell = e + this.gutter * 2));
      let r = document.createElement(`canvas`);
      ((r.width = n * this.cell),
        (r.height = this.rows * this.cell),
        (this.canvas = r),
        (this.g = r.getContext(`2d`)));
      let i = document.createElement(`canvas`);
      ((i.width = i.height = e * 2),
        (this.tmp = i),
        (this.tg = i.getContext(`2d`)));
      let a = new Oe(r);
      ((a.colorSpace = j),
        (a.premultiplyAlpha = !0),
        (a.generateMipmaps = !0),
        (a.minFilter = pe),
        (a.magFilter = be),
        (a.anisotropy = 4),
        (a.name = `peds-faces`),
        (this.tex = a));
    }
    gridInfo(e, t) {
      let n = this.cols * this.cell,
        r = this.rows * this.cell;
      (e.set(this.cols, this.cell / n, this.cell / r, 0),
        t.set(this.gutter / n, this.gutter / r, this.size / n, this.size / r));
    }
    paint(e, t) {
      let n = { ...t, height: 1.72 },
        r = qt(n);
      f_(r);
      let i = kt(n, r),
        a = this.size * 2,
        o = this.tg;
      (o.setTransform(1, 0, 0, 1, 0, 0),
        o.clearRect(0, 0, a, a),
        o.save(),
        rn(n, i.lay, Lt(n.hair.style, r.female))(o, 0, 0, a),
        o.restore());
      let s = e % this.cols,
        c = Math.floor(e / this.cols),
        l = s * this.cell,
        u = c * this.cell,
        d = this.g;
      (d.clearRect(l, u, this.cell, this.cell),
        (d.imageSmoothingEnabled = !0),
        (d.imageSmoothingQuality = `high`),
        d.drawImage(
          this.tmp,
          0,
          0,
          a,
          a,
          l + this.gutter,
          u + this.gutter,
          this.size,
          this.size,
        ),
        (this.dirty = !0));
    }
    flush() {
      this.dirty && ((this.dirty = !1), (this.tex.needsUpdate = !0));
    }
    release() {
      this.tmp.width = this.tmp.height = 1;
    }
  },
  S_ = {
    uPedData: { value: null },
    uFaces: { value: null },
    uFaceA: { value: new xe(1, 1, 1, 0) },
    uFaceB: { value: new xe(0, 0, 1, 1) },
    uLampMap: { value: null },
    uLampXf: { value: new xe(0, 0, 0, 0) },
    uLampOn: { value: 0 },
  };
function C_() {
  let e = Qe.uCharFill;
  return e && e.value?.isVector4 ? e : null;
}
