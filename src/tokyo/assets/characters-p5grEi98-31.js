// tokyo/assets/characters-p5grEi98 31 — math
// Lines 9258-9606 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function co() {
  let e = new w({ vertexColors: !0 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = ne.uTime),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + so,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `vec3 objectNormal = vec3(normal);
  vec3 cP = position;
  crowdAnimate(cP, objectNormal);`,
          )
          .replace(`#include <begin_vertex>`, `vec3 transformed = cP;`)));
    }),
    (e.customProgramCacheKey = () => `charlib-crowd-preview-v1`),
    e
  );
}
var lo = Math.PI * 2;
function uo(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = e.arms[r],
      a = e.legs[r];
    (i.a.set(n * 0.205, 1.4, 0),
      i.b.set(n * 0.215, 1.115, 0.012),
      i.c.set(n * 0.222, 0.865, -0.01),
      a.a.set(n * 0.095, 0.92, 0),
      a.b.set(n * 0.095, 0.5, -0.006),
      a.c.set(n * 0.095, 0.086, 0.012),
      t[n < 0 ? L.armL : L.armR].copy(i.a),
      t[n < 0 ? L.thighL : L.thighR].copy(a.a));
  }
}
function fo(e) {
  let t = { ...e, height: 1.72 },
    n = Bt(t);
  uo(n);
  let r = $t(t, n),
    i = Or(t, n),
    a = new bt();
  ((a.blank = it), (a.textured = !1));
  let o = n.H,
    s = t.skin,
    c = i.outer ? i.outer.color : i.top ? i.top.color : s,
    l = i.top ? i.top.color : s,
    u = i.bottom.color,
    d = t.shoes.color,
    f = t.hair.style === `bald` ? s : t.hair.color,
    p = t.acc.find(
      (e) =>
        e.kind === `cap` ||
        e.kind === `helmet` ||
        e.kind === `visor` ||
        e.kind === `policeCap` ||
        e.kind === `bucket`,
    ),
    m = i.bottom.skirt,
    h = [0.47, 0.575, 0.74, 0.815, 0.868].map((e) => e * o),
    g = i.outer ? i.outer.hemY : i.top ? i.top.hemY : i.bottom.waistY;
  a.grid(
    {
      nu: 6,
      nv: h.length - 1,
      closed: !0,
      cap1: !0,
      point: (e, t, r) => {
        let i = Math.round(t * (h.length - 1)),
          a = h[i],
          o = e * lo - Math.PI + Math.PI / 6,
          s = i === h.length - 1 ? n.neckR + 0.004 : Vt(n, o, a, !0) + 0.012;
        return (
          i === h.length - 2 && (s += 0.03 * Math.abs(Math.sin(o))),
          i === 0 && m && (s += 0.03 + m.flare * 0.25),
          r.set(
            Math.sin(o) * s,
            i === 0 && m ? Math.max(m.hemY + 0.02, a - 0.12) : a,
            H(n, a) - Math.cos(o) * s,
          )
        );
      },
    },
    {
      color: (e, t, n, r, a, d) => {
        let f = Math.cos(r * lo - Math.PI + Math.PI / 6);
        return (
          t > 0.86 * o
            ? d.setHex(s)
            : t < g - 0.01
              ? d.setHex(u)
              : i.outer && i.outer.gap > 0 && f > 0.85
                ? d.setHex(l)
                : d.setHex(c),
          d
        );
      },
      skin: (e, t, n, r, i, a) => mo(a, t < 0.6 * o ? L.hips : L.chest),
      kind: z.cloth,
      rough: 0.85,
      shade: 0.15,
    },
  );
  let _ = [0, 0.3, 0.6, 0.9];
  a.grid(
    {
      nu: 5,
      nv: _.length - 1,
      closed: !0,
      cap1: !0,
      point: (e, t, n) => {
        let i = _[Math.round(t * (_.length - 1))],
          a = e * lo - Math.PI;
        return (
          W(r, a, i, i < 0.01 ? 0 : i < 0.4 ? 0.01 : 0.003, n, !1),
          i < 0.01 && (n.y += 0.01),
          n
        );
      },
    },
    {
      color: (e, n, r, i, a, o) => {
        let c = _[Math.round(a * (_.length - 1))],
          l = -Math.cos(i * lo - Math.PI);
        return (
          c <
          (p
            ? 0.34
            : t.hair.style === `bald`
              ? -1
              : 0.36 +
                0.3 * Math.max(0, l) +
                (t.hair.style === `long` ||
                t.hair.style === `wavy` ||
                t.hair.style === `bangs` ||
                t.hair.style === `bob`
                  ? 0.4 * Math.max(0, l + 0.3)
                  : 0))
            ? o.setHex(p ? (p.color ?? 2763310) : f)
            : o.setHex(s),
          o
        );
      },
      skin: L.head,
      kind: z.skin,
      rough: 0.6,
    },
  );
  for (let e of n.arms) ho(a, e, !0, i, c, u, d, s, !!m, o);
  for (let e of n.legs) ho(a, e, !1, i, c, u, d, s, !!m, o);
  let v = a.buildCrowd();
  return (
    (v.userData = {
      triangles: a.triangleCount,
      height: e.height,
      scale: e.height / 1.72,
      id: e.id,
      lod: 2,
    }),
    v
  );
}
var po = new D();
function mo(e, t) {
  ((e.i[0] = t),
    (e.i[1] = e.i[2] = e.i[3] = 0),
    (e.w[0] = 1),
    (e.w[1] = e.w[2] = e.w[3] = 0));
}
function ho(e, t, n, r, i, a, o, s, c, l) {
  let u = n ? [-0.05, 1, 2, 2.4] : [-0.05, 1, 2, 2.14],
    d = n ? (r.outer?.sleeveT ?? r.top?.sleeveT ?? 0) : c ? -1 : r.bottom.legT,
    f = n ? i : a,
    p = n ? (t.side < 0 ? L.armL : L.armR) : t.side < 0 ? L.thighL : L.thighR,
    m = n ? (t.side < 0 ? L.foreL : L.foreR) : t.side < 0 ? L.shinL : L.shinR,
    h = u.length - 1,
    g = r.bottom.skirt ? r.bottom.skirt.hemY : 0;
  e.grid(
    {
      nu: 3,
      nv: h,
      closed: !0,
      cap1: !0,
      point: (e, r, i) => {
        let a = u[Math.round(r * h)];
        return (
          zt(
            t,
            e * lo + (t.side < 0 ? Math.PI / 3 : 0),
            Math.min(a, 2),
            n
              ? a > 2.05
                ? -0.012
                : d > a
                  ? 0.012
                  : 0.002
              : a > 2.05
                ? 0.018
                : d > a
                  ? 0.01
                  : 0.002,
            i,
          ),
          a > 2 &&
            (po.subVectors(t.c, t.b).normalize(),
            i.addScaledVector(po, (a - 2) * (n ? 0.19 : 0.1)),
            n || (i.z -= 0.05)),
          i
        );
      },
    },
    {
      color: (e, t, r, i, l, p) => {
        let m = u[Math.round(l * h)];
        return !n && m > 2.05
          ? p.setHex(o)
          : n && m > 2.05
            ? p.setHex(s)
            : !n && c
              ? p.setHex(t > g ? a : s)
              : p.setHex(d >= m - 0.02 ? f : s);
      },
      skin: (e, t, n, r, i, a) => mo(a, u[Math.round(i * h)] >= 0.99 ? m : p),
      kind: z.cloth,
      rough: 0.8,
    },
  );
}
function go(e, t, r) {
  let a = xt(r.arrays),
    o = Ze({ p: r.joints }),
    s = o.map((e) => e.position.clone()),
    [c, l] = oo(r.page ? r.page.tex : null),
    u = new i(a, [c, l]);
  ((u.name = `char-${e.id}`),
    (u.castShadow = !0),
    (u.receiveShadow = !0),
    (u.frustumCulled = !0),
    (u.boundingSphere = a.boundingSphere.clone()),
    (u.boundingSphere.radius *= 1.35));
  let d = new m();
  ((d.name = `character-${e.id}`),
    d.add(o[L.hips]),
    d.add(u),
    d.updateMatrixWorld(!0));
  let f = new n(o);
  (u.bind(f),
    o[L.lidL].scale.set(1, 0.001, 1),
    o[L.lidR].scale.set(1, 0.001, 1));
  let p = r.joints;
  return {
    desc: e,
    lod: t,
    root: d,
    mesh: u,
    bones: o,
    skeleton: f,
    rest: s,
    joints: p.map((e) => e.clone()),
    triangles: r.triangles,
    breakdown: r.breakdown,
    trim: r.trim,
    height: r.height,
    thighLen: p[L.thighL].distanceTo(p[L.shinL]),
    shinLen: p[L.shinL].distanceTo(p[L.footL]),
    dispose() {
      (a.dispose(), f.dispose());
    },
  };
}
function _o(e, t, n) {
  let r = e.m.heroArrays();
  return (
    n && ie(r.rect, n),
    {
      arrays: r,
      page: t,
      joints: e.b.joints.p,
      height: e.b.H,
      triangles: e.m.triangleCount,
      breakdown: e.breakdown,
      trim: e.trim,
    }
  );
}
function vo(e) {
  return e.atlas === void 0 ? je() : e.atlas;
}
var yo = new WeakMap(),
  bo = 1,
  xo = new Map(),
  So = 8,
  Co = 3e4,
  wo = null;
function To() {
  (wo !== null && clearTimeout(wo), (wo = null), xo.clear(), me(), Ne(), ke());
}
function Eo() {
  (wo !== null && clearTimeout(wo),
    (wo = setTimeout(() => {
      ((wo = null), Go.size || Lo.length ? Eo() : To());
    }, Co)));
}
function Do(e, t, n, r) {
  let i = 0;
  return (
    n && ((i = yo.get(n) ?? 0), i || yo.set(n, (i = bo++))),
    `${i}|${t}|${r.faceRes ?? ``}|${r.skip?.join(`,`) ?? ``}|${JSON.stringify(e)}`
  );
}
function Oo(e) {
  let t = e.arrays;
  return {
    ...e,
    arrays: {
      pos: t.pos.slice(),
      nor: t.nor.slice(),
      col: t.col.slice(),
      uv: t.uv.slice(),
      rect: t.rect.slice(),
      surf: t.surf.slice(),
      si: t.si.slice(),
      sw: t.sw.slice(),
      idx: t.idx.slice(),
      n0: t.n0,
      bounds: t.bounds ?? yt(t.pos),
    },
    joints: e.joints.map((e) => e.clone()),
  };
}
function ko(e) {
  let t = xo.get(e);
  return t ? (xo.delete(e), xo.set(e, t), Eo(), Oo(t)) : null;
}
function Ao(e, t) {
  for (xo.set(e, Oo(t)); xo.size > So;) xo.delete(xo.keys().next().value);
  Eo();
}
function jo(e, t = {}) {
  return Ka(Mo(e, t));
}
function* Mo(e, t = {}) {
  return go(e, t.lod ?? 0, yield* No(e, t));
}
