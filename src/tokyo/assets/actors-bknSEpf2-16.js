// tokyo/assets/actors-bknSEpf2 16 — push
// Lines 4805-5133 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Ko = class {
  pos = [];
  nrm = [];
  col = [];
  si = [];
  sw = [];
  idx = [[], []];
  count = 0;
  add(e, t, n, r = 0, i = !0) {
    let a = e.getAttribute(`position`),
      o = e.getAttribute(`normal`),
      s = e.getAttribute(`aT`),
      c = this.count;
    for (let e = 0; e < a.count; e++) {
      (Ho.fromBufferAttribute(a, e), Uo.fromBufferAttribute(o, e));
      let r = s ? s.getX(e) : 0;
      (this.pos.push(Ho.x, Ho.y, Ho.z), this.nrm.push(Uo.x, Uo.y, Uo.z));
      let c = t(Ho, Uo, r),
        l = i
          ? 0.93 +
            0.06 * Wo(Ho.x * 60, Ho.y * 23, Ho.z * 60) +
            0.04 * Math.sin(Ho.z * 90 + Ho.y * 40)
          : 1;
      this.col.push(c.r * l, c.g * l, c.b * l);
      let u = n(Ho, r);
      (this.si.push(u[0], u[1], 0, 0), this.sw.push(u[2], u[3], 0, 0));
    }
    let l = e.getIndex(),
      u = this.idx[r];
    if (l) for (let e = 0; e < l.count; e++) u.push(c + l.getX(e));
    else for (let e = 0; e < a.count; e++) u.push(c + e);
    ((this.count += a.count), e.dispose());
  }
  build() {
    let e = new le();
    (e.setAttribute(`position`, new I(this.pos, 3)),
      e.setAttribute(`normal`, new I(this.nrm, 3)),
      e.setAttribute(`color`, new I(this.col, 3)),
      e.setAttribute(`skinIndex`, new xe(this.si, 4)),
      e.setAttribute(`skinWeight`, new I(this.sw, 4)));
    let t = this.idx[0],
      n = this.idx[1];
    return (
      e.setIndex([...t, ...n]),
      e.addGroup(0, t.length, 0),
      e.addGroup(t.length, n.length, 1),
      e.computeBoundingSphere(),
      e
    );
  }
};
function qo(e) {
  (e.deleteAttribute(`uv`), e.deleteAttribute(`normal`));
  let t = Pn(e, 1e-5);
  return (e.dispose(), t);
}
function Jo(e, t, n = [18, 12], r, i) {
  let a = qo(new k(1, n[0], n[1])),
    o = a.getAttribute(`position`),
    s = r ? (r instanceof v ? r : new v().setFromEuler(r)) : null;
  for (let n = 0; n < o.count; n++)
    (Ho.fromBufferAttribute(o, n),
      i && i(Ho),
      Ho.set(Ho.x * t[0], Ho.y * t[1], Ho.z * t[2]),
      s && Ho.applyQuaternion(s),
      Ho.add(e),
      o.setXYZ(n, Ho.x, Ho.y, Ho.z));
  return (a.computeVertexNormals(), a);
}
function Yo(e, t, n = 12, r = 20, i = [!0, !0]) {
  let a = new Me(e, !1, `centripetal`),
    o = new y(a, r, 1, n, !1),
    s = o.getAttribute(`position`),
    c = new Float32Array(s.count),
    l = new V();
  for (let e = 0; e <= r; e++) {
    let i = e / r;
    a.getPointAt(i, l);
    let o = t(i);
    for (let t = 0; t <= n; t++) {
      let r = e * (n + 1) + t;
      (Ho.fromBufferAttribute(s, r).sub(l).multiplyScalar(o).add(l),
        s.setXYZ(r, Ho.x, Ho.y, Ho.z),
        (c[r] = i));
    }
  }
  o.setAttribute(`aT`, new z(c, 1));
  let u = qo(o);
  u.computeVertexNormals();
  let d = [];
  for (let e of [0, 1]) {
    if (!i[e]) continue;
    let r = Jo(
      a.getPointAt(e, new V()),
      [t(e), t(e), t(e)],
      [n, Math.max(6, n >> 1)],
    );
    (r.setAttribute(
      `aT`,
      new z(new Float32Array(r.getAttribute(`position`).count).fill(e), 1),
    ),
      d.push(r));
  }
  return { body: u, caps: d, curve: a };
}
function Xo(e, t, n, r, i = [14, 12]) {
  let a = qo(new k(1, i[0], i[1])),
    o = a.getAttribute(`position`),
    s = new Float32Array(o.count);
  for (let i = 0; i < o.count; i++) {
    Ho.fromBufferAttribute(o, i);
    let a = (Ho.y + 1) * 0.5,
      c = 1 - (1 - r * 0.55) * a ** (1.15 - r * 0.4),
      l = Ho.z < 0 ? 0.35 : 1;
    (Ho.set(Ho.x * t * c, a * e, Ho.z * n * (1 - 0.5 * a) * l),
      o.setXYZ(i, Ho.x, Ho.y, Ho.z),
      (s[i] = a));
  }
  return (a.setAttribute(`aT`, new z(s, 1)), a.computeVertexNormals(), a);
}
function Zo(e, t = 26) {
  let n = [],
    r = [],
    i = [],
    a = e.length;
  for (let i = 0; i < a; i++) {
    let o = e[i],
      s = o.p ?? 2.3;
    for (let e = 0; e < t; e++) {
      let c = (e / t) * Math.PI * 2,
        l = Math.cos(c),
        u = Math.sin(c),
        d = Math.sign(l) * Math.abs(l) ** (2 / s) * o.hw,
        f = Math.sign(u) * Math.abs(u) ** (2 / s) * (u >= 0 ? o.up : o.down);
      (n.push(o.c.x + d, o.c.y + f, o.c.z), r.push(i / (a - 1)));
    }
  }
  let o = (e) => new V(n[e * 3], n[e * 3 + 1], n[e * 3 + 2]),
    s = (e, t, n, r) => {
      let a = o(e),
        s = o(t),
        c = o(n),
        l = new V().subVectors(s, a).cross(new V().subVectors(c, a)),
        u = a
          .add(s)
          .add(c)
          .multiplyScalar(1 / 3);
      l.dot(u.sub(r)) < 0 ? i.push(e, n, t) : i.push(e, t, n);
    };
  for (let n = 0; n + 1 < a; n++) {
    let r = new V().addVectors(e[n].c, e[n + 1].c).multiplyScalar(0.5);
    for (let e = 0; e < t; e++) {
      let i = n * t + e,
        a = n * t + ((e + 1) % t),
        o = (n + 1) * t + e,
        c = (n + 1) * t + ((e + 1) % t);
      (s(i, o, c, r), s(i, c, a, r));
    }
  }
  for (let [i, o] of [
    [0, 1],
    [a - 1, -1],
  ]) {
    let c = e[i],
      l = n.length / 3;
    (n.push(c.c.x, c.c.y + (c.up - c.down) * 0.25, c.c.z), r.push(i / (a - 1)));
    let u = c.c.clone().lerp(e[i + o].c, 1);
    for (let e = 0; e < t; e++) s(l, i * t + e, i * t + ((e + 1) % t), u);
  }
  let c = new le();
  return (
    c.setAttribute(`position`, new I(n, 3)),
    c.setAttribute(`aT`, new I(r, 1)),
    c.setIndex(i),
    c.computeVertexNormals(),
    c
  );
}
function Qo(e, t) {
  return (e.applyMatrix4(t), e);
}
function $o(e, t, n) {
  let r = new Ne(t, n.clone().sub(t).normalize()),
    i = r.intersectObject(e, !1)[0];
  if (!i || !i.face) return null;
  let a = i.face.normal.clone();
  return (
    a.dot(r.ray.direction) > 0 && a.negate(),
    { p: i.point.clone(), n: a }
  );
}
var es = `
varying vec3 vDogP;`,
  ts = `
varying vec3 vDogP;
float dogHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float dogNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dogHash(i), dogHash(i + vec3(1, 0, 0)), f.x), mix(dogHash(i + vec3(0, 1, 0)), dogHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(dogHash(i + vec3(0, 0, 1)), dogHash(i + vec3(1, 0, 1)), f.x), mix(dogHash(i + vec3(0, 1, 1)), dogHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}`,
  ns = `
#include <normal_fragment_maps>
{
  vec3 fp = vDogP * vec3(260.0, 140.0, 260.0);
  vec3 g = vec3(dogNoise(fp), dogNoise(fp * 1.7 + 7.1), dogNoise(fp * 0.8 + 3.3)) - 0.5;
  normal = normalize(normal + g * 0.42);
}`,
  rs = `
#include <color_fragment>
diffuseColor.rgb *= 0.9 + 0.2 * dogNoise(vDogP * vec3(320.0, 120.0, 320.0));`,
  is = `
  // fur: light catches the silhouette (fuzz) and the shadow side never goes plastic-black
  {
    float fz = 1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    outgoingLight += diffuseColor.rgb * (0.2 * pow(fz, 2.4) + 0.05);
  }
  #include <opaque_fragment>`;
function as() {
  let e = new C({ vertexColors: !0, roughness: 0.95, metalness: 0 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.vertexShader = e.vertexShader
        .replace(`#include <common>`, `#include <common>${es}`)
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
vDogP = position;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(`#include <common>`, `#include <common>${ts}`)
          .replace(`#include <normal_fragment_maps>`, ns)
          .replace(`#include <color_fragment>`, rs)
          .replace(`#include <opaque_fragment>`, is)));
    }),
    (e.customProgramCacheKey = () => `dog-fur-v3`),
    jo(e),
    e
  );
}
function os() {
  let e = new C({ vertexColors: !0, roughness: 0.12, metalness: 0 });
  return ((e.customProgramCacheKey = () => `dog-gloss-v1`), jo(e), e);
}
var ss = null;
function cs() {
  if (!ss) {
    ss = {
      helmet: new C({ color: 16764730, roughness: 0.32, metalness: 0 }),
      dark: new C({ color: 2301994, roughness: 0.45, metalness: 0 }),
      lens: new C({ color: 1119e3, roughness: 0.08, metalness: 0.2 }),
      strap: new C({ color: 5981750, roughness: 0.8, metalness: 0 }),
    };
    for (let e of Object.values(ss)) jo(e);
  }
  return ss;
}
var ls = {},
  us = {},
  ds = null;
function fs(e) {
  for (let t of Object.keys(ls))
    t === e ||
      t === ds ||
      (us[t] ?? 0) > 0 ||
      (ls[t].dispose(), delete ls[t], delete ps[t]);
}
var ps = {};
function ms(e) {
  let t = Ro[e];
  if ((fs(e), !ls[e])) {
    let n = hs(t);
    ((ls[e] = n.geo), (ps[e] = n.rest));
  }
  let n = ls[e],
    r = ps[e];
  ((us[e] = (us[e] ?? 0) + 1), ds === e && (ds = null));
  let i = as(),
    a = os(),
    o = new g(n, [i, a]);
  ((o.castShadow = !0),
    (o.receiveShadow = !0),
    (o.frustumCulled = !1),
    (o.name = `dog-${e}`));
  let s = [];
  for (let e = 0; e < zo; e++) {
    let t = new se();
    ((t.name = `dog-b${e}`), s.push(t));
  }
  for (let e = 0; e < zo; e++) {
    let t = r.parent[e],
      n = r.pos[e];
    t < 0
      ? s[e].position.copy(n)
      : (s[e].position.copy(n).sub(r.pos[t]), s[t].add(s[e]));
  }
  (o.add(s[0]), o.updateMatrixWorld(!0), o.bind(new f(s)));
  let c = new re();
  ((c.name = `dog`), c.add(o), c.scale.setScalar(t.scale));
  let l = s.map((e) => e.position.clone()),
    u = s.map((e) => e.quaternion.clone()),
    d = gs(r.headAcc, r.pos[J.head], t),
    p = _s(r.headAcc, r.pos[J.head]);
  return (
    (d.visible = !1),
    (p.visible = !1),
    s[J.head].add(d, p),
    {
      id: e,
      spec: t,
      root: c,
      mesh: o,
      bones: s,
      restPos: l,
      restQuat: u,
      dims: r.dims,
      helmet: d,
      shades: p,
      dispose() {
        (i.dispose(), a.dispose());
        for (let e of [d, p]) e.traverse((e) => e.geometry?.dispose());
        (c.removeFromParent(),
          (us[e] = Math.max(0, (us[e] ?? 1) - 1)),
          us[e] || ((ds = e), fs(e)));
      },
    }
  );
}
