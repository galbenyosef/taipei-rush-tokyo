// tokyo/assets/actors-qKVitB-C 107 — attributes
// Lines 48727-49034 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var qT = class {
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
    let u = zT[t],
      d = n.decal,
      f = n.color,
      p = n.kind ?? $w.gloss,
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
      n = new Me();
    for (let e of this.jobs) e(t, n);
    this.jobs.length = 0;
    let r = new pe();
    return (
      r.setAttribute(`position`, new P(t.pos, 3)),
      r.setAttribute(`normal`, new P(t.nor, 3)),
      r.setAttribute(`color`, new P(t.col, 3)),
      r.setAttribute(`uv`, new P(t.uv, 2)),
      r.setAttribute(`uvRect`, new P(t.rect, 4)),
      r.setAttribute(`surf`, new P(t.surf, 4)),
      r.setAttribute(`skinIndex`, new P(t.si, 4)),
      r.setAttribute(`skinWeight`, new P(t.sw, 4)),
      r.setIndex(new P(t.idx, 1)),
      r.computeBoundingSphere(),
      r
    );
  }
};
function JT(e, t, n) {
  let r = e.getX(n),
    i = t.getX(n);
  return (
    t.getY(n) > i && ((r = e.getY(n)), (i = t.getY(n))),
    t.getZ(n) > i && ((r = e.getZ(n)), (i = t.getZ(n))),
    t.getW(n) > i && (r = e.getW(n)),
    r
  );
}
function YT(e) {
  let t = e.mesh.geometry,
    n = t.attributes.color,
    r = t.attributes.surf,
    i = t.attributes.uvRect,
    a = t.attributes.skinIndex,
    o = t.attributes.skinWeight,
    s = new Me().setHex(Z.swatMolle),
    c = new Me().setHex(Z.glove),
    l = new Set([H.handL, H.handR, H.fingersL, H.fingersR]);
  for (let e = 0; e < n.count; e++)
    Math.round(r.getX(e)) === $w.reflect
      ? (n.setXYZ(e, s.r, s.g, s.b), r.setXYZW(e, $w.cloth, 0.9, 0, 0))
      : l.has(JT(a, o, e)) &&
        Math.round(r.getX(e)) === $w.skin &&
        (n.setXYZ(e, c.r, c.g, c.b),
        r.setXYZW(e, $w.cloth, 0.7, 0, 0),
        i.setXYZW(e, 0, 0, 0, 0));
  n.needsUpdate = r.needsUpdate = i.needsUpdate = !0;
}
function XT(e, t, n, r, i) {
  let a = e.mesh.geometry,
    o = a.attributes.position,
    s = a.attributes.surf,
    c = a.attributes.color,
    l = e.height,
    u = 0;
  for (let e = 0; e < o.count; e++) {
    if (Math.round(s.getX(e)) !== $w.reflect || !n.has(JT(r, i, e))) continue;
    let t = o.getY(e);
    t > u && t < 0.8 * l && (u = t);
  }
  if (u <= 0) return null;
  let d = u + 0.012,
    f = Math.min(d + 0.078, 0.83 * l),
    p = t.point(Math.PI, (d + f) / 2, 0, new L()),
    m = -1,
    h = 1 / 0;
  for (let e = 0; e < o.count; e++) {
    if (Math.round(s.getX(e)) === $w.reflect || !n.has(JT(r, i, e))) continue;
    let t =
      (o.getX(e) - p.x) ** 2 + (o.getY(e) - p.y) ** 2 + (o.getZ(e) - p.z) ** 2;
    t < h && ((h = t), (m = e));
  }
  return m < 0
    ? null
    : {
        rect: UT,
        arm: GT,
        color: new Me().setRGB(c.getX(m), c.getY(m), c.getZ(m), ae).getHex(),
        y0: d,
        y1: f,
        kind: Math.round(s.getX(m)),
        rough: s.getY(m),
      };
}
function ZT(e, t) {
  let n = Yw[e],
    r = n.variant === 3;
  r && YT(t);
  let i = t.joints,
    a = t.mesh.geometry,
    o = a.attributes.skinIndex,
    s = a.attributes.skinWeight,
    c = new Set([H.hips, H.spine, H.chest]),
    l = t.height,
    u = new eT(
      a.attributes.position.array,
      a.index?.array ?? null,
      (e) => c.has(JT(o, s, e)),
      0.45 * l,
      0.86 * l,
      26,
    ),
    d = i[H.handR].clone().lerp(i[H.fingersR], 0.6),
    f = a.attributes.position,
    p = -1 / 0;
  for (let e = 0; e < f.count; e++)
    JT(o, s, e) === H.head && f.getY(e) > p && (p = f.getY(e));
  let m = new Te(),
    h = new L();
  for (let e = 0; e < f.count; e++)
    JT(o, s, e) === H.head &&
      f.getY(e) > p - (l / 1.72) * 0.12 &&
      m.expandByPoint(h.fromBufferAttribute(f, e));
  let g = i[H.handL].clone().lerp(i[H.fingersL], 0.6),
    _ = (e, t) => {
      let n = i[e].y - 0.14,
        r = i[e].y - 0.07,
        a = -1 / 0;
      for (let i = 0; i < f.count; i++) {
        if (JT(o, s, i) !== e) continue;
        let c = f.getY(i);
        c >= n && c <= r && (a = Math.max(a, t * f.getX(i)));
      }
      if (!Number.isFinite(a))
        return new L(i[e].x + t * 0.055, (n + r) / 2, i[e].z);
      let c = 0,
        l = 0;
      for (let i = 0; i < f.count; i++) {
        if (JT(o, s, i) !== e) continue;
        let u = f.getY(i);
        u >= n &&
          u <= r &&
          t * f.getX(i) > a - 0.012 &&
          ((c += f.getZ(i)), l++);
      }
      return new L(t * a, (n + r) / 2, l ? c / l : i[e].z);
    },
    v = {
      H: l,
      prof: u,
      palmR: d,
      foreDirR: i[H.handR].clone().sub(i[H.foreR]).normalize(),
      palmL: g,
      foreDirL: i[H.handL].clone().sub(i[H.foreL]).normalize(),
      sleeve: r ? null : [_(H.armL, -1), _(H.armR, 1)],
      hipR: i[H.thighR].clone(),
      kneeL: i[H.shinL].clone(),
      kneeR: i[H.shinR].clone(),
      skull: m,
      lod: 0,
    },
    y = (e, n, r) => {
      let a = new fe();
      return ((a.name = r), a.position.copy(n).sub(i[e]), t.bones[e].add(a), a);
    },
    b = 0.575 * l,
    x = u.point(1.9, b + 0.05, 0.05, new L()),
    S = u.point(0, 0.64 * l, 0.085, new L()),
    w = {
      pistol: y(H.handR, d, `police-pistol`),
      rifle: y(H.handR, d, `police-rifle`),
      holster: y(H.hips, x, `police-holster`),
      sling: y(H.chest, S, `police-sling`),
      cuffs: y(H.handL, g, `police-cuffs`),
    },
    T = new qT();
  r
    ? ET(v, T, { back: VT, front: HT })
    : yT(v, T, XT(t, u, c, o, s), n.variant === 2 ? { decal: WT } : null);
  let E = T.build();
  t.root.updateMatrixWorld(!0);
  let O = [
      t.bones[H.hips],
      t.bones[H.chest],
      t.bones[H.head],
      t.bones[H.foreL],
      t.bones[H.foreR],
      t.bones[H.thighR],
      t.bones[H.shinL],
      t.bones[H.shinR],
      w.pistol,
      w.rifle,
      w.holster,
      w.sling,
      t.bones[H.armL],
      t.bones[H.armR],
      w.cuffs,
    ],
    k = new C(O),
    A = new D(E, Zt(KT())[0]);
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
    (t.bones[H.foreL].rotation.order = `YXZ`),
    (t.bones[H.foreR].rotation.order = `YXZ`),
    t.root.traverse((e) => {
      e.isMesh && Ct(e.geometry);
    }),
    {
      persona: e,
      rc: t,
      gear: A,
      sock: w,
      officer: null,
      k: l / 1.72,
      blinkT: 1 + Math.random() * 3,
      blinkP: -1,
      t: Math.random() * 10,
    }
  );
}
function QT(e, t, n) {
  let r = e.rc.root;
  ((r.visible = t),
    t && ((e.rc.mesh.frustumCulled = !0), (e.gear.frustumCulled = !0)),
    t && r.parent !== n ? n.add(r) : !t && r.parent && r.parent.remove(r));
}
function $T(e) {
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
