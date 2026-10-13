// tokyo__assets__charWorker-DPNUr-Eu 45 — buffer
// Lines 15488-15591 of readable/tokyo__assets__charWorker-DPNUr-Eu.pretty.js (statement-aligned).
self.onmessage = (e) => {
  let t = e.data;
  try {
    let e = performance.now();
    if (t.textured && !cs()) {
      os({ id: t.id, noPaint: !0 });
      return;
    }
    let n = as(t.desc, {
        lod: t.lod,
        textured: t.textured,
        conform: t.conform,
        faceRes: t.faceRes,
        skip: t.skip,
      }),
      r = n.m,
      i = /* @__PURE__ */ new Float32Array(81);
    n.b.joints.p.forEach((e, t) => {
      ((i[t * 3] = e.x), (i[t * 3 + 1] = e.y), (i[t * 3 + 2] = e.z));
    });
    let a = {
      id: t.id,
      joints: i,
      height: n.b.H,
      triangles: r.triangleCount,
      breakdown: n.breakdown,
      trim: n.trim,
    };
    if (t.kind === `crowd`) {
      let t = r.vertexCount,
        n = r.part.slice(),
        o = new Float32Array(t * 4),
        s = r.glow;
      for (let e = 0; e < t; e++)
        ((o[e * 4] = n[e]), (o[e * 4 + 1] = 7), (o[e * 4 + 3] = s[e]));
      let c = r.idx,
        l =
          t > 65535
            ? new Uint32Array(c[0].length + c[1].length)
            : new Uint16Array(c[0].length + c[1].length);
      (l.set(c[0]), l.set(c[1], c[0].length));
      let u = r.pos.slice(),
        d = r.nor.slice(),
        f = r.col.slice();
      os(
        {
          ...a,
          pos: u,
          nor: d,
          col: f,
          part: n,
          info: o,
          idx: l,
          ms: performance.now() - e,
        },
        [u.buffer, d.buffer, f.buffer, n.buffer, o.buffer, l.buffer, i.buffer],
      );
      return;
    }
    let o = r.heroArrays();
    o.bounds = Dn(o.pos);
    let s,
      c,
      l = null,
      u = n.tiles?.reqs ?? [];
    if (u.length) {
      let e = 1024;
      for (let t of u) e = Math.max(e, t.w + t.gutter * 2);
      let t = ci(u, e);
      c = t.xy;
      let [n, r] = ti(e, Math.max(1, t.height));
      for (let e = 0; e < u.length; e++) si(r, c[e * 2], c[e * 2 + 1], u[e]);
      ((l = n.transferToImageBitmap()),
        (s = u.map((e) => ({
          key: e.key,
          w: e.w,
          h: e.h,
          repeat: e.repeat,
          gutter: e.gutter,
        }))));
    }
    let d = [
      o.pos.buffer,
      o.nor.buffer,
      o.col.buffer,
      o.uv.buffer,
      o.rect.buffer,
      o.surf.buffer,
      o.si.buffer,
      o.sw.buffer,
      o.idx.buffer,
      i.buffer,
      o.bounds.buffer,
    ];
    (c && d.push(c.buffer),
      l && d.push(l),
      os(
        { ...a, ...o, tiles: s, xy: c, sheet: l, ms: performance.now() - e },
        d,
      ));
  } catch (e) {
    os({ id: t.id, error: String(e?.stack ?? e) });
  }
};
