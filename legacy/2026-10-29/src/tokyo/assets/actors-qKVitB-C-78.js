// tokyo/assets/actors-qKVitB-C 78 — push
// Lines 36777-37084 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function vb(e) {
  ((e.uniforms.uTime = bt.uTime),
    (e.uniforms.uNight = bt.uNight),
    (e.uniforms.uWet = bt.uWet),
    (e.uniforms.uSunDir = bt.uSunDir),
    (e.uniforms.uPedData = ob.uPedData),
    (e.uniforms.uFaces = ob.uFaces),
    (e.uniforms.uFaceA = ob.uFaceA),
    (e.uniforms.uFaceB = ob.uFaceB));
}
function yb(e) {
  ((e.uLampMap = ob.uLampMap),
    (e.uLampXf = ob.uLampXf),
    (e.uLampOn = ob.uLampOn));
  let t = sb();
  t && (e.uCharFill = t);
}
function bb(e) {
  (vb(e),
    (e.vertexShader = e.vertexShader
      .replace(
        `#include <batching_pars_vertex>`,
        `#include <batching_pars_vertex>
` +
          ub +
          `
varying vec2 vPedLamp;`,
      )
      .replace(
        `#include <project_vertex>`,
        `#include <project_vertex>
` + cb,
      )
      .replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
  pedFetch();`,
      )
      .replace(
        `#include <color_vertex>`,
        `#include <color_vertex>
  vColor.rgb *= pedSlotColor();`,
      )
      .replace(
        `#include <beginnormal_vertex>`,
        `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif
  vec3 pedP = position;
  pedAnimate(pedP, objectNormal);`,
      )
      .replace(`#include <begin_vertex>`, `vec3 transformed = pedP;`)));
}
function xb(e) {
  let t = e
    ? new ye({ vertexColors: !0, roughness: 0.8, metalness: 0 })
    : new E({ vertexColors: !0 });
  ((t.name = e ? `peds-std` : `peds-lambert`),
    (t.onBeforeCompile = (t) => {
      (bb(t), yb(t.uniforms));
      let n = sb()
          ? `#define PED_CHARFILL
`
          : ``,
        r = t.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
` +
              n +
              db +
              lb,
          )
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
` + pb,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
` + mb,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            _b +
              `
  totalEmissiveRadiance += pedLampLight(diffuseColor.rgb, normal, uNight);`,
          );
      (e &&
        (r = r
          .replace(`#include <roughnessmap_fragment>`, hb)
          .replace(`#include <metalnessmap_fragment>`, gb)),
        (t.fragmentShader = r));
    }),
    (t.customProgramCacheKey = () =>
      (e ? `taipei-peds-std-v4` : `taipei-peds-lambert-v4`) +
      (sb() ? `-cf` : ``)));
  let n = new u();
  return (
    (n.name = `peds-depth`),
    (n.onBeforeCompile = (e) => {
      (vb(e),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <batching_pars_vertex>`,
            `#include <batching_pars_vertex>
` + ub,
          )
          .replace(
            `#include <uv_vertex>`,
            `#include <uv_vertex>
  pedFetch();`,
          )
          .replace(
            `#include <begin_vertex>`,
            `vec3 pedP = position;
  vec3 pedN = vec3(0.0, 1.0, 0.0);
  pedAnimate(pedP, pedN);
  vec3 transformed = pedP;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
` + fb,
          )
          .replace(
            `#include <clipping_planes_fragment>`,
            `#include <clipping_planes_fragment>
` + pb,
          )));
    }),
    (n.customProgramCacheKey = () => `taipei-peds-depth-v3`),
    { mat: t, depth: n }
  );
}
var Sb = new R(),
  Cb = new I(),
  wb = new O(),
  Tb = new L(),
  Eb = new L(),
  Db = new L(),
  Ob = new Me(),
  kb = new L(0, 1, 0),
  Ab = class {
    pos = [];
    nor = [];
    col = [];
    part = [];
    slot = [];
    acc = [];
    glow = [];
    idx = [];
    add(e, t, n) {
      (n && e.applyMatrix4(n), e.attributes.normal || e.computeVertexNormals());
      let r = e.attributes.position,
        i = e.attributes.normal,
        a = this.pos.length / 3,
        o = 1 / 0,
        s = -1 / 0;
      for (let e = 0; e < r.count; e++) {
        let t = r.getY(e);
        (t < o && (o = t), t > s && (s = t));
      }
      Ob.setHex(t.color ?? 16777215);
      let c = t.shade ?? 0.1,
        l = t.flip ? -1 : 1;
      for (let e = 0; e < r.count; e++) {
        (this.pos.push(r.getX(e), r.getY(e), r.getZ(e)),
          this.nor.push(i.getX(e) * l, i.getY(e) * l, i.getZ(e) * l));
        let n = 1 - c * (1 - (s > o ? (r.getY(e) - o) / (s - o) : 1));
        (this.col.push(Ob.r * n, Ob.g * n, Ob.b * n),
          this.part.push(t.part),
          this.slot.push(t.slot),
          this.acc.push(t.acc === void 0 ? 0 : t.acc + 1),
          this.glow.push(t.sub ?? t.glow ?? 0));
      }
      if (e.index) {
        let n = e.index.array;
        for (let e = 0; e < n.length; e += 3)
          t.flip
            ? this.idx.push(a + n[e], a + n[e + 2], a + n[e + 1])
            : this.idx.push(a + n[e], a + n[e + 1], a + n[e + 2]);
      } else
        for (let e = 0; e < r.count; e += 3)
          t.flip
            ? this.idx.push(a + e, a + e + 2, a + e + 1)
            : this.idx.push(a + e, a + e + 1, a + e + 2);
      e.dispose();
    }
    build() {
      let e = new pe();
      (e.setAttribute(`position`, new j(this.pos, 3)),
        e.setAttribute(`normal`, new j(this.nor, 3)),
        e.setAttribute(`color`, new j(this.col, 3)));
      let t = this.part.length,
        n = new Float32Array(t * 4);
      for (let e = 0; e < t; e++)
        ((n[e * 4] = this.part[e]),
          (n[e * 4 + 1] = this.slot[e]),
          (n[e * 4 + 2] = this.acc[e]),
          (n[e * 4 + 3] = this.glow[e]));
      e.setAttribute(`aInfo`, new P(n, 4));
      let r = new Float32Array(t * 4);
      for (let e = 0; e < t; e++)
        ((r[e * 4 + 1] = -10), (r[e * 4 + 2] = -10), (r[e * 4 + 3] = -1));
      e.setAttribute(`aExt`, new P(r, 4));
      let i = this.pos.length / 3;
      return (
        e.setIndex(i > 65535 ? new h(this.idx, 1) : new N(this.idx, 1)),
        e.computeBoundingSphere(),
        (e.boundingSphere.radius = Math.max(e.boundingSphere.radius, 2.2)),
        e
      );
    }
  };
function X(e, t, n, r, i) {
  let a = new F(n[0], n[1], n[2]);
  (wb.set(i?.[0] ?? 0, i?.[1] ?? 0, i?.[2] ?? 0),
    Cb.setFromEuler(wb),
    Sb.compose(Tb.set(t[0], t[1], t[2]), Cb, Db.set(1, 1, 1)),
    e.add(a, r, Sb));
}
function jb(e, t, n, r, i, a, o = 0, s = Math.PI * 2, c = 0, l = Math.PI, u) {
  let d = new _(1, r, i, o, s, c, l);
  (d.scale(n[0], n[1], n[2]),
    d.deleteAttribute(`normal`),
    d.computeVertexNormals(),
    wb.set(u?.[0] ?? 0, u?.[1] ?? 0, u?.[2] ?? 0),
    Cb.setFromEuler(wb),
    Sb.compose(Tb.set(t[0], t[1], t[2]), Cb, Db.set(1, 1, 1)),
    e.add(d, a, Sb));
}
function Mb(e, t, n, r, i, a, o, s = !1, c = 1) {
  Tb.set(n[0] - t[0], n[1] - t[1], n[2] - t[2]);
  let l = Tb.length(),
    u = new w(i, r, l, a, 1, s);
  (c !== 1 &&
    (u.scale(1, 1, c), u.deleteAttribute(`normal`), u.computeVertexNormals()),
    Cb.setFromUnitVectors(kb, Tb.normalize()),
    Sb.compose(
      Eb.set((t[0] + n[0]) / 2, (t[1] + n[1]) / 2, (t[2] + n[2]) / 2),
      Cb,
      Db.set(1, 1, 1),
    ),
    e.add(u, o, Sb));
}
function Nb(e, t, n, r, i, a, o = 0) {
  let s = [],
    c = [];
  for (let [e, r, i, a] of t)
    for (let t = 0; t < n; t++) {
      let c = (t / n) * Math.PI * 2;
      s.push(o + Math.cos(c) * r, e, a + Math.sin(c) * i);
    }
  let l = t.length;
  for (let e = 0; e + 1 < l; e++)
    for (let t = 0; t < n; t++) {
      let r = e * n + t,
        i = e * n + ((t + 1) % n),
        a = (e + 1) * n + t,
        o = (e + 1) * n + ((t + 1) % n);
      c.push(r, a, i, i, a, o);
    }
  if (i) {
    let e = s.length / 3;
    s.push(o, t[0][0] - 0.01, t[0][3]);
    for (let t = 0; t < n; t++) c.push(e, t, (t + 1) % n);
  }
  if (a) {
    let e = s.length / 3,
      r = t[l - 1];
    s.push(o, r[0] + 0.01, r[3]);
    let i = (l - 1) * n;
    for (let t = 0; t < n; t++) c.push(e, i + ((t + 1) % n), i + t);
  }
  let u = new pe();
  (u.setAttribute(`position`, new j(s, 3)),
    u.setIndex(c),
    u.computeVertexNormals(),
    e.add(u, r));
}
function Pb(e, t, n, r, i, a, o) {
  let s = (n * n + r * r) / (2 * r),
    c = Math.asin(Math.min(1, n / s)),
    l = (e) => {
      let a = new _(s * e, i, 3, 0, Math.PI * 2, 0, c),
        o = a.attributes.position;
      for (let t = 0; t < o.count; t++) {
        let r = o.getX(t),
          a = o.getY(t),
          s = o.getZ(t);
        if (Math.hypot(r, s) > n * 0.9 * e) {
          let e = Math.atan2(s, r);
          o.setY(t, a - 0.035 * Math.abs(Math.sin(e * i * 0.5)));
        }
      }
      return (
        a.deleteAttribute(`normal`),
        a.computeVertexNormals(),
        a.translate(t[0], t[1] - s * e + r * 0.5, t[2]),
        a
      );
    };
  (e.add(l(1), a), e.add(l(0.985), o));
}
