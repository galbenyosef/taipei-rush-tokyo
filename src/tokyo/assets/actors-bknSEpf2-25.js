// tokyo/assets/actors-bknSEpf2 25 — data
// Lines 8145-8483 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Gc(e) {
  let t = { v: 1, owned: [], worn: {} };
  if (!e || typeof e != `object`) return t;
  let n = e;
  if (
    (Array.isArray(n.owned) &&
      (t.owned = [
        ...new Set(n.owned.filter((e) => typeof e == `string` && Hc.has(e))),
      ]),
    n.worn && typeof n.worn == `object`)
  )
    for (let [e, r] of Object.entries(n.worn)) {
      if (!/^[a-z0-9_-]{1,24}$/.test(e) || !r || typeof r != `object`) continue;
      let n = {};
      for (let e of Pc) {
        let t = r[e];
        typeof t == `string` && Hc.get(t)?.slot === e && (n[e] = t);
      }
      t.worn[e] = n;
    }
  return t;
}
function Kc() {
  let e = At(Wc);
  return e ? Gc(e) : null;
}
function qc() {
  try {
    let e = new URLSearchParams(location.search).get(`outfit`);
    if (!e) return null;
    let t = {};
    for (let n of e.split(`,`)) {
      let [e, r] = n.split(`:`);
      if (!Pc.includes(e) || !r) continue;
      let i = `${e}:${r}`;
      Hc.has(i) && (t[e] = i);
    }
    return t;
  } catch {
    return null;
  }
}
var Jc = new (class {
    ctx = null;
    data = Kc() ?? { v: 1, owned: [], worn: {} };
    override = qc();
    listeners = new Set();
    attach(e) {
      if (this.ctx === e) return;
      this.ctx = e;
      let t = e.state?.data?.wardrobe;
      (t && (this.data = Gc(t)), this.persist(!1));
    }
    get owned() {
      return this.data.owned;
    }
    owns(e) {
      return this.data.owned.includes(e);
    }
    outfit(e) {
      return this.override ?? this.data.worn[e] ?? {};
    }
    wear(e, t, n) {
      if (n && Uc(n)?.slot !== t) return;
      this.override = null;
      let r = { ...(this.data.worn[e] ?? {}) };
      (n ? (r[t] = n) : delete r[t], (this.data.worn[e] = r), this.persist(!0));
    }
    give(e) {
      Hc.has(e) && !this.owns(e) && (this.data.owned.push(e), this.persist(!0));
    }
    onChange(e) {
      return (this.listeners.add(e), () => this.listeners.delete(e));
    }
    snapshot() {
      return JSON.parse(JSON.stringify(this.data));
    }
    persist(e) {
      Kt(Wc, this.data);
      let t = this.ctx?.state;
      if (
        (t && ((t.data.wardrobe = this.snapshot()), e && t.scheduleSave?.(0.5)),
        e)
      )
        for (let e of this.listeners) e();
    }
  })(),
  Yc = 0,
  Xc = 1,
  Zc = 2,
  Qc = 3;
function $c(e) {
  let t = e.geometry,
    n = t.getAttribute(`rbxGarment`);
  if (n) return n;
  let r = e.skeleton.bones.map((e) => {
      let t = e.name;
      return /Toe|Foot/.test(t)
        ? [0, 0, 1, 0]
        : /Thigh|Calf|Knee|Leg/.test(t)
          ? [0, 1, 0, 0]
          : /Pelvis/.test(t)
            ? [0.5, 0.5, 0, 0]
            : /Hand|Finger|Head|Eye|Jaw|Lip|Mouth|Brow|Tongue|Cheek|Nose/.test(
                  t,
                )
              ? [0, 0, 0, 1]
              : [1, 0, 0, 0];
    }),
    i = t.getAttribute(`skinIndex`),
    a = t.getAttribute(`skinWeight`),
    o = i.count,
    s = new Float32Array(o * 4);
  for (let e = 0; e < o; e++)
    for (let t = 0; t < 4; t++) {
      let n = a.getComponent(e, t);
      if (!(n > 0)) continue;
      let o = r[i.getComponent(e, t)] ?? [1, 0, 0, 0];
      for (let t = 0; t < 4; t++) s[e * 4 + t] += n * o[t];
    }
  let c = new Int32Array(o);
  for (let e = 0; e < o; e++) c[e] = e;
  let l = (e) => {
      for (; c[e] !== e;) e = c[e] = c[c[e]];
      return e;
    },
    u = t.index,
    d = u ? u.count : o,
    f = (e) => (u ? u.getX(e) : e);
  for (let e = 0; e < d; e += 3) {
    let t = l(f(e)),
      n = l(f(e + 1)),
      r = l(f(e + 2));
    t !== n && (c[t] = n);
    let i = l(n);
    l(r) !== i && (c[l(r)] = i);
  }
  let p = new Map();
  for (let e = 0; e < o; e++) {
    let t = l(e),
      n = p.get(t);
    n || p.set(t, (n = new Float32Array(4)));
    for (let t = 0; t < 4; t++) n[t] += s[e * 4 + t];
  }
  let m = (e, t) => {
      let n = 3,
        r = -1;
      for (let i = 0; i < 4; i++) e[t + i] > r && ((r = e[t + i]), (n = i));
      return n === 0 ? Xc : n === 1 ? Zc : n === 2 ? Qc : Yc;
    },
    h = new Float32Array(o);
  for (let e = 0; e < o; e++) {
    let t = p.get(l(e)),
      n = t[0] + t[1] + t[2] + t[3],
      r = Math.max(t[0], t[1], t[2], t[3]) / Math.max(1e-6, n);
    h[e] = r >= 0.6 ? m(t, 0) : m(s, e * 4);
  }
  let g = new z(h, 1);
  return (t.setAttribute(`rbxGarment`, g), g);
}
var el = `
attribute float rbxGarment;
varying float vRbxGarment;
`,
  tl = `
uniform vec4 uRbxTop;
uniform vec4 uRbxBottom;
uniform vec4 uRbxShoes;
varying float vRbxGarment;
`,
  nl = `
  {
    float gk = vRbxGarment;
    vec4 tg = gk < 0.5 ? vec4(0.0) : gk < 1.5 ? uRbxTop : gk < 2.5 ? uRbxBottom : uRbxShoes;
    float amt = tg.a * (1.0 - smoothstep(0.22, 0.55, gSkin));
    if (amt > 0.001) {
      const vec3 LW = vec3(0.2126, 0.7152, 0.0722);
      float l = dot(diffuseColor.rgb, LW);
      // the garment's local mean (a coarse mip): l / mean keeps folds, seams, stitching and baked shading
      float m = dot(texture2D(map, vMapUv, 4.5).rgb, LW);
      float d = clamp(l / max(m, 0.015), 0.3, 1.9);
      d = mix(1.0, d, 0.85);
      diffuseColor.rgb = mix(diffuseColor.rgb, tg.rgb * d, amt);
    }
  }
`;
function rl(e) {
  let t = e.userData;
  e.userData = {};
  let n = e.clone();
  ((e.userData = t),
    (n.name = `${e.name}-outfit`),
    (n.userData = { heroLit: t.heroLit }));
  let r = {
      uRbxTop: { value: new we() },
      uRbxBottom: { value: new we() },
      uRbxShoes: { value: new we() },
    },
    i = e.onBeforeCompile;
  n.onBeforeCompile = (t, n) => {
    (i.call(e, t, n),
      Object.assign(t.uniforms, r),
      (t.vertexShader = t.vertexShader
        .replace(`#include <common>`, `#include <common>\n${el}`)
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
  vRbxGarment = rbxGarment;`,
        )),
      (t.fragmentShader = t.fragmentShader
        .replace(`#include <common>`, `#include <common>\n${tl}`)
        .replace(
          `diffuseColor.rgb *= 1.0 - uWet`,
          `${nl}\n  diffuseColor.rgb *= 1.0 - uWet`,
        )));
  };
  let a = e.customProgramCacheKey.bind(e);
  return (
    (n.customProgramCacheKey = () => `${a()}|outfit-v1`),
    { mat: n, u: r }
  );
}
function il(e, t) {
  let n = e.userData;
  e.userData = {};
  let r = e.clone();
  ((e.userData = n),
    (r.name = `${e.name}-kit`),
    (r.userData = { heroLit: n.heroLit }),
    (r.map = t));
  let i = e.onBeforeCompile;
  return (
    (r.onBeforeCompile = (t, n) => i.call(e, t, n)),
    (r.customProgramCacheKey = e.customProgramCacheKey.bind(e)),
    r
  );
}
var al = {
    jie: { bottom: 4014150 },
    wen: { bottom: 2898517 },
    mei: { bottom: 3822194 },
  },
  ol = new j();
function sl(e, t, n) {
  let r = Uc(t);
  return !r && n === void 0
    ? e.set(0, 0, 0, 0)
    : (ol.setHex(r ? Lc[r.color].hex : n), e.set(ol.r, ol.g, ol.b, 1));
}
var cl = 0,
  ll = 4,
  ul = 5,
  dl = 0,
  fl = 1,
  pl = 2,
  ml = class {
    pos = [];
    nor = [];
    col = [];
    surf = [];
    si = [];
    idx = [];
    v = new V();
    n = new V();
    nm = new je();
    c = new j();
    post = null;
    add(e, t, n, r, i = cl, a = 0.8) {
      this.post && (t = this.post.clone().multiply(t));
      let o = e.attributes.position;
      e.attributes.normal || e.computeVertexNormals();
      let s = e.attributes.normal,
        c = this.pos.length / 3;
      (this.nm.getNormalMatrix(t), this.c.setHex(n));
      for (let e = 0; e < o.count; e++)
        (this.v.fromBufferAttribute(o, e).applyMatrix4(t),
          this.n.fromBufferAttribute(s, e).applyMatrix3(this.nm).normalize(),
          this.pos.push(this.v.x, this.v.y, this.v.z),
          this.nor.push(this.n.x, this.n.y, this.n.z),
          this.col.push(this.c.r, this.c.g, this.c.b),
          this.surf.push(i, a, 0, 0),
          this.si.push(r, 0, 0, 0));
      if (e.index)
        for (let t = 0; t < e.index.count; t++)
          this.idx.push(c + e.index.getX(t));
      else for (let e = 0; e < o.count; e++) this.idx.push(c + e);
      e.dispose();
    }
    get empty() {
      return this.idx.length === 0;
    }
    build() {
      let e = this.pos.length / 3,
        t = new le();
      (t.setAttribute(`position`, new I(this.pos, 3)),
        t.setAttribute(`normal`, new I(this.nor, 3)),
        t.setAttribute(`color`, new I(this.col, 3)),
        t.setAttribute(`uv`, new I(new Float32Array(e * 2).fill(0.5), 2)),
        t.setAttribute(`uvRect`, new I(new Float32Array(e * 4), 4)),
        t.setAttribute(`surf`, new I(this.surf, 4)),
        t.setAttribute(`skinIndex`, new xe(this.si, 4)));
      let n = new Float32Array(e * 4);
      for (let t = 0; t < e; t++) n[t * 4] = 1;
      return (
        t.setAttribute(`skinWeight`, new I(n, 4)),
        t.setIndex(e > 65535 ? new _(this.idx, 1) : new xe(this.idx, 1)),
        t.computeBoundingSphere(),
        t
      );
    }
  },
  hl = new v(),
  gl = new Pe(),
  _l = new V(),
  vl = new V(),
  X = (e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) =>
    new N().compose(
      vl.set(e, t, n),
      hl.setFromEuler(gl.set(r, i, a)),
      _l.set(o, s, c),
    ),
  yl = (e, t, n, r, i, a = 24, o = 8, s = 0) => {
    let c = new k(1, a, o, 0, Math.PI * 2, r, i - r);
    if (s) {
      let e = c.attributes.position,
        t = 2 + s * 2;
      for (let n = 0; n < e.count; n++) {
        let r = e.getY(n),
          i = Math.sqrt(Math.max(0, 1 - r * r)),
          a = Math.max(0, 1 - Math.abs(r) ** +t) ** (1 / t),
          o = i > 1e-4 ? a / i : 1;
        e.setXYZ(n, e.getX(n) * o, r, e.getZ(n) * o);
      }
      c.computeVertexNormals();
    }
    return (c.scale(e, t, n), c);
  },
  bl = (e, t) => new j(e).multiplyScalar(t).getHex(),
  xl = (e, t, n) => new j(e).lerp(new j(t), n).getHex();
