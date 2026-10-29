// tokyo/assets/actors-bknSEpf2 122 — attributes
// Lines 54545-54852 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var mk = class {
  nv = 0;
  ni = 0;
  jobs = [];
  add(e, t, n) {
    e.attributes.normal || e.computeVertexNormals();
    let r = e.attributes.position,
      i = e.attributes.normal,
      a = e.attributes.uv,
      o = this.nv,
      s = this.ni,
      c = r.count,
      l = e.index ? e.index.count : c;
    ((this.nv += c), (this.ni += l));
    let u = ok[t],
      d = n.decal,
      f = n.color,
      p = n.kind ?? Oa.gloss,
      m = n.rough ?? 0.6,
      h = n.glow ?? 0;
    this.jobs.push((t, n) => {
      n.setHex(f);
      for (let e = 0; e < c; e++) {
        let s = o + e,
          c = s * 3,
          l = s * 4;
        ((t.pos[c] = r.getX(e)),
          (t.pos[c + 1] = r.getY(e)),
          (t.pos[c + 2] = r.getZ(e)));
        let f = i.getY(e);
        ((t.nor[c] = i.getX(e)),
          (t.nor[c + 1] = f),
          (t.nor[c + 2] = i.getZ(e)));
        let g = d ? 1 : 0.9 + 0.1 * Math.max(0, f * 0.5 + 0.5);
        ((t.col[c] = n.r * g),
          (t.col[c + 1] = n.g * g),
          (t.col[c + 2] = n.b * g),
          d && a
            ? ((t.uv[s * 2] = a.getX(e)),
              (t.uv[s * 2 + 1] = a.getY(e)),
              (t.rect[l] = d[0]),
              (t.rect[l + 1] = d[1]),
              (t.rect[l + 2] = d[2]),
              (t.rect[l + 3] = d[3]))
            : ((t.uv[s * 2] = 0.5), (t.uv[s * 2 + 1] = 0.5)),
          (t.surf[l] = p),
          (t.surf[l + 1] = m),
          (t.surf[l + 2] = 0),
          (t.surf[l + 3] = h),
          (t.si[l] = u),
          (t.sw[l] = 1));
      }
      if (e.index)
        for (let n = 0; n < l; n++) t.idx[s + n] = o + e.index.getX(n);
      else for (let e = 0; e < l; e++) t.idx[s + e] = o + e;
      e.dispose();
    });
  }
  build() {
    let e = this.nv,
      t = {
        pos: new Float32Array(e * 3),
        nor: new Float32Array(e * 3),
        col: new Float32Array(e * 3),
        uv: new Float32Array(e * 2),
        rect: new Float32Array(e * 4),
        surf: new Float32Array(e * 4),
        si: new Uint16Array(e * 4),
        sw: new Float32Array(e * 4),
        idx: e > 65535 ? new Uint32Array(this.ni) : new Uint16Array(this.ni),
      },
      n = new j();
    for (let e of this.jobs) e(t, n);
    this.jobs.length = 0;
    let r = new le();
    return (
      r.setAttribute(`position`, new z(t.pos, 3)),
      r.setAttribute(`normal`, new z(t.nor, 3)),
      r.setAttribute(`color`, new z(t.col, 3)),
      r.setAttribute(`uv`, new z(t.uv, 2)),
      r.setAttribute(`uvRect`, new z(t.rect, 4)),
      r.setAttribute(`surf`, new z(t.surf, 4)),
      r.setAttribute(`skinIndex`, new z(t.si, 4)),
      r.setAttribute(`skinWeight`, new z(t.sw, 4)),
      r.setIndex(new z(t.idx, 1)),
      r.computeBoundingSphere(),
      r
    );
  }
};
function hk(e, t, n) {
  let r = e.getX(n),
    i = t.getX(n);
  return (
    t.getY(n) > i && ((r = e.getY(n)), (i = t.getY(n))),
    t.getZ(n) > i && ((r = e.getZ(n)), (i = t.getZ(n))),
    t.getW(n) > i && (r = e.getW(n)),
    r
  );
}
function gk(e) {
  let t = e.mesh.geometry,
    n = t.attributes.color,
    r = t.attributes.surf,
    i = t.attributes.uvRect,
    a = t.attributes.skinIndex,
    o = t.attributes.skinWeight,
    s = new j().setHex(q.swatMolle),
    c = new j().setHex(q.glove),
    l = new Set([W.handL, W.handR, W.fingersL, W.fingersR]);
  for (let e = 0; e < n.count; e++)
    Math.round(r.getX(e)) === Oa.reflect
      ? (n.setXYZ(e, s.r, s.g, s.b), r.setXYZW(e, Oa.cloth, 0.9, 0, 0))
      : l.has(hk(a, o, e)) &&
        Math.round(r.getX(e)) === Oa.skin &&
        (n.setXYZ(e, c.r, c.g, c.b),
        r.setXYZW(e, Oa.cloth, 0.7, 0, 0),
        i.setXYZW(e, 0, 0, 0, 0));
  n.needsUpdate = r.needsUpdate = i.needsUpdate = !0;
}
function _k(e, t, n, r, i) {
  let a = e.mesh.geometry,
    o = a.attributes.position,
    s = a.attributes.surf,
    c = a.attributes.color,
    l = e.height,
    u = 0;
  for (let e = 0; e < o.count; e++) {
    if (Math.round(s.getX(e)) !== Oa.reflect || !n.has(hk(r, i, e))) continue;
    let t = o.getY(e);
    t > u && t < 0.8 * l && (u = t);
  }
  if (u <= 0) return null;
  let d = u + 0.012,
    f = Math.min(d + 0.078, 0.83 * l),
    p = t.point(Math.PI, (d + f) / 2, 0, new V()),
    m = -1,
    h = 1 / 0;
  for (let e = 0; e < o.count; e++) {
    if (Math.round(s.getX(e)) === Oa.reflect || !n.has(hk(r, i, e))) continue;
    let t =
      (o.getX(e) - p.x) ** 2 + (o.getY(e) - p.y) ** 2 + (o.getZ(e) - p.z) ** 2;
    t < h && ((h = t), (m = e));
  }
  return m < 0
    ? null
    : {
        rect: uk,
        arm: fk,
        color: new j().setRGB(c.getX(m), c.getY(m), c.getZ(m), Ae).getHex(),
        y0: d,
        y1: f,
        kind: Math.round(s.getX(m)),
        rough: s.getY(m),
      };
}
function vk(e, t) {
  let n = wa[e],
    r = n.variant === 3;
  r && gk(t);
  let i = t.joints,
    a = t.mesh.geometry,
    o = a.attributes.skinIndex,
    s = a.attributes.skinWeight,
    c = new Set([W.hips, W.spine, W.chest]),
    l = t.height,
    u = new ka(
      a.attributes.position.array,
      a.index?.array ?? null,
      (e) => c.has(hk(o, s, e)),
      0.45 * l,
      0.86 * l,
      26,
    ),
    d = i[W.handR].clone().lerp(i[W.fingersR], 0.6),
    p = a.attributes.position,
    m = -1 / 0;
  for (let e = 0; e < p.count; e++)
    hk(o, s, e) === W.head && p.getY(e) > m && (m = p.getY(e));
  let h = new ye(),
    _ = new V();
  for (let e = 0; e < p.count; e++)
    hk(o, s, e) === W.head &&
      p.getY(e) > m - (l / 1.72) * 0.12 &&
      h.expandByPoint(_.fromBufferAttribute(p, e));
  let v = i[W.handL].clone().lerp(i[W.fingersL], 0.6),
    y = (e, t) => {
      let n = i[e].y - 0.14,
        r = i[e].y - 0.07,
        a = -1 / 0;
      for (let i = 0; i < p.count; i++) {
        if (hk(o, s, i) !== e) continue;
        let c = p.getY(i);
        c >= n && c <= r && (a = Math.max(a, t * p.getX(i)));
      }
      if (!Number.isFinite(a))
        return new V(i[e].x + t * 0.055, (n + r) / 2, i[e].z);
      let c = 0,
        l = 0;
      for (let i = 0; i < p.count; i++) {
        if (hk(o, s, i) !== e) continue;
        let u = p.getY(i);
        u >= n &&
          u <= r &&
          t * p.getX(i) > a - 0.012 &&
          ((c += p.getZ(i)), l++);
      }
      return new V(t * a, (n + r) / 2, l ? c / l : i[e].z);
    },
    b = {
      H: l,
      prof: u,
      palmR: d,
      foreDirR: i[W.handR].clone().sub(i[W.foreR]).normalize(),
      palmL: v,
      foreDirL: i[W.handL].clone().sub(i[W.foreL]).normalize(),
      sleeve: r ? null : [y(W.armL, -1), y(W.armR, 1)],
      hipR: i[W.thighR].clone(),
      kneeL: i[W.shinL].clone(),
      kneeR: i[W.shinR].clone(),
      skull: h,
      lod: 0,
    },
    x = (e, n, r) => {
      let a = new se();
      return ((a.name = r), a.position.copy(n).sub(i[e]), t.bones[e].add(a), a);
    },
    S = 0.575 * l,
    C = u.point(1.9, S + 0.05, 0.05, new V()),
    w = u.point(0, 0.64 * l, 0.085, new V()),
    T = {
      pistol: x(W.handR, d, `police-pistol`),
      rifle: x(W.handR, d, `police-rifle`),
      holster: x(W.hips, C, `police-holster`),
      sling: x(W.chest, w, `police-sling`),
      cuffs: x(W.handL, v, `police-cuffs`),
    },
    E = new mk();
  r
    ? no(b, E, { back: ck, front: lk })
    : Ya(b, E, _k(t, u, c, o, s), n.variant === 2 ? { decal: dk } : null);
  let D = E.build();
  t.root.updateMatrixWorld(!0);
  let O = [
      t.bones[W.hips],
      t.bones[W.chest],
      t.bones[W.head],
      t.bones[W.foreL],
      t.bones[W.foreR],
      t.bones[W.thighR],
      t.bones[W.shinL],
      t.bones[W.shinR],
      T.pistol,
      T.rifle,
      T.holster,
      T.sling,
      t.bones[W.armL],
      t.bones[W.armR],
      T.cuffs,
    ],
    k = new f(O),
    A = new g(D, on(pk())[0]);
  return (
    (A.name = `police-gear-${n.desc.id}`),
    (A.castShadow = !1),
    (A.receiveShadow = !0),
    t.root.add(A),
    t.root.updateMatrixWorld(!0),
    A.bind(k),
    (A.boundingSphere = t.mesh.boundingSphere.clone()),
    (A.frustumCulled = !0),
    (t.root.name = `police-hero-${n.desc.id}`),
    (t.bones[W.foreL].rotation.order = `YXZ`),
    (t.bones[W.foreR].rotation.order = `YXZ`),
    t.root.traverse((e) => {
      e.isMesh && yt(e.geometry);
    }),
    {
      persona: e,
      rc: t,
      gear: A,
      sock: T,
      officer: null,
      k: l / 1.72,
      blinkT: 1 + Math.random() * 3,
      blinkP: -1,
      t: Math.random() * 10,
    }
  );
}
function yk(e, t, n) {
  let r = e.rc.root;
  ((r.visible = t),
    t && ((e.rc.mesh.frustumCulled = !0), (e.gear.frustumCulled = !0)),
    t && r.parent !== n ? n.add(r) : !t && r.parent && r.parent.remove(r));
}
function bk(e) {
  switch (e.level) {
    case `low`:
      return { max: 0, dist: 0, tier: 0 };
    case `medium`:
      return { max: 2, dist: 11, tier: 1 };
    case `ultra`:
      return { max: 4, dist: 18, tier: 2 };
    default:
      return { max: 3, dist: 14, tier: 2 };
  }
}
