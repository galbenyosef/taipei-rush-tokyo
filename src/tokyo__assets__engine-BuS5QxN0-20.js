// tokyo__assets__engine-BuS5QxN0 20 — math
// Lines 7298-7630 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Ss(e, t, n) {
  if (!xs) return null;
  let r = t.getContext();
  if (typeof r.COPY_WRITE_BUFFER != `number`) return null;
  let i = e.geometry,
    a = i.index;
  if (!a) return null;
  let o = Object.keys(i.attributes),
    s = new Map();
  for (let e of o)
    i.attributes[e].onUploadCallback = () =>
      void s.set(e, r.getParameter(r.ARRAY_BUFFER_BINDING));
  a.onUploadCallback = () =>
    void s.set(`#index`, r.getParameter(r.ELEMENT_ARRAY_BUFFER_BINDING));
  try {
    n([e]);
  } catch {}
  for (let e of o) i.attributes[e].onUploadCallback = () => {};
  if (
    ((a.onUploadCallback = () => {}),
    !s.has(`#index`) || o.some((e) => !s.get(e)))
  )
    return null;
  let c = a.array.BYTES_PER_ELEMENT === 4 ? 4 : 2;
  for (let e of [...o.map((e) => i.attributes[e]), a]) {
    let t = e.array.constructor;
    e.array = new t(0);
  }
  let l = {};
  for (let e of o) l[e] = s.get(e);
  return { gl: r, buf: l, index: s.get(`#index`), ib: c };
}
function Cs(e, t, n, r, i) {
  let a = e.gl;
  (a.bindBuffer(a.COPY_WRITE_BUFFER, t),
    a.bufferSubData(a.COPY_WRITE_BUFFER, n, r, 0, i),
    a.bindBuffer(a.COPY_WRITE_BUFFER, null));
}
var G = {
  col: new Uint8Array(),
  city: new Uint8Array(),
  i16: new Uint16Array(),
  i32: new Uint32Array(),
  uv8: new Float32Array(8),
};
function ws(e, t, n, r) {
  let i = t.n,
    a = t.ni;
  G.col.length < i * 4 &&
    ((G.col = new Uint8Array(i * 4 + 8192)),
    (G.city = new Uint8Array(i * 4 + 8192)));
  let o = G.col,
    s = G.city,
    c = t.ca;
  for (let e = 0, t = 0, n = 0; e < i; e++, t += 4, n += 8)
    ((o[t] = c[n]),
      (o[t + 1] = c[n + 1]),
      (o[t + 2] = c[n + 2]),
      (o[t + 3] = 255),
      (s[t] = c[n + 4]),
      (s[t + 1] = c[n + 5]),
      (s[t + 2] = c[n + 6]),
      (s[t + 3] = c[n + 7]));
  let l;
  e.ib === 4
    ? (G.i32.length < a && (G.i32 = new Uint32Array(a + 12288)), (l = G.i32))
    : (G.i16.length < a && (G.i16 = new Uint16Array(a + 12288)), (l = G.i16));
  let u = t.idx;
  for (let e = 0; e < a; e++) l[e] = n + u[e];
  let d = e.buf;
  (Cs(e, d.position, n * 12, t.pos, i * 3),
    Cs(e, d.normal, n * 12, t.nor, i * 3),
    d.uv && t.uv && Cs(e, d.uv, n * 8, t.uv, i * 2),
    Cs(e, d.color, n * 4, o, i * 4),
    Cs(e, d.aCity, n * 4, s, i * 4),
    Cs(e, e.index, r * e.ib, l, a));
}
function Ts(e, t, n, r, i, a) {
  let o = G.uv8;
  ((o[0] = n),
    (o[1] = r),
    (o[2] = i),
    (o[3] = r),
    (o[4] = i),
    (o[5] = a),
    (o[6] = n),
    (o[7] = a),
    e.buf.uv && Cs(e, e.buf.uv, t * 8, o, 8));
}
var Es = new Oe(),
  K = new Me(),
  Ds = 0.002,
  Os = class {
    move;
    turn;
    maxAge;
    fovTol;
    frustum = new f();
    pose = new Float64Array(27).fill(NaN);
    cosTurn = 1;
    age = 0;
    rebuilds = 0;
    constructor(e = 3, t = S.degToRad(3), n = 120, r = S.degToRad(1)) {
      ((this.move = e), (this.turn = t), (this.maxAge = n), (this.fovTol = r));
    }
    stale(e, t = !1) {
      if (t || ++this.age >= this.maxAge) return !0;
      let n = e.matrixWorld.elements,
        r = this.pose,
        i = e.projectionMatrix.elements,
        a = n[12] - r[0],
        o = n[13] - r[1],
        s = n[14] - r[2];
      if (
        !(a * a + o * o + s * s <= this.move * this.move) ||
        !(-n[8] * r[3] - n[9] * r[4] - n[10] * r[5] >= this.cosTurn) ||
        !(n[4] * r[6] + n[5] * r[7] + n[6] * r[8] >= this.cosTurn)
      )
        return !0;
      if (e.isPerspectiveCamera)
        return (
          i[8] !== r[17] ||
          i[9] !== r[18] ||
          i[10] !== r[19] ||
          i[14] !== r[23] ||
          !(
            Math.atan(1 / i[5]) <= r[25] + this.fovTol &&
            Math.atan(1 / i[0]) <= r[26] + this.fovTol
          )
        );
      for (let e = 0; e < 16; e++) if (i[e] !== r[9 + e]) return !0;
      return !1;
    }
    set(e) {
      let t = e.matrixWorld.elements,
        n = this.pose,
        r = e.projectionMatrix.elements;
      ((n[0] = t[12]),
        (n[1] = t[13]),
        (n[2] = t[14]),
        (n[3] = -t[8]),
        (n[4] = -t[9]),
        (n[5] = -t[10]),
        (n[6] = t[4]),
        (n[7] = t[5]),
        (n[8] = t[6]));
      for (let e = 0; e < 16; e++) n[9 + e] = r[e];
      ((n[25] = Math.atan(1 / r[5])),
        (n[26] = Math.atan(1 / r[0])),
        (this.age = 0),
        this.rebuilds++);
      let i = e,
        a = this.move;
      if (i.isPerspectiveCamera) {
        this.cosTurn = Math.cos(this.turn);
        let t = this.turn * 1.45 + this.fovTol,
          r = n[25],
          a = n[26],
          o = Math.min(Math.PI / 2 - 0.01, r + t),
          s = Math.min(Math.PI / 2 - 0.01, a + t);
        ((K.near = i.near),
          (K.far = i.far),
          (K.fov = S.radToDeg(o * 2)),
          (K.aspect = Math.tan(s) / Math.tan(o)),
          (K.zoom = 1),
          K.updateProjectionMatrix(),
          Es.multiplyMatrices(K.projectionMatrix, e.matrixWorldInverse));
      } else {
        let t = e;
        this.cosTurn = Math.cos(Ds);
        let n = t.zoom || 1,
          r =
            Math.max(
              Math.abs(t.left),
              Math.abs(t.right),
              Math.abs(t.top),
              Math.abs(t.bottom),
            ) /
              n +
            Math.max(Math.abs(t.near), Math.abs(t.far));
        ((a += r * Ds * 1.45),
          Es.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse));
      }
      let o = i.isPerspectiveCamera ? K.reversedDepth : e.reversedDepth;
      this.frustum.setFromProjectionMatrix(Es, e.coordinateSystem, o);
      for (let e of this.frustum.planes) e.constant += a;
      return this.frustum;
    }
  },
  ks = 3.3,
  As = 0.15,
  js = { minX: -900, maxX: 900, minZ: -960, maxZ: 560 },
  Ms = -960,
  Ns = -1030,
  Ps = [
    {
      id: `riverside`,
      name: { zh: `河濱公園`, en: `Riverside Park` },
      minX: -1200,
      maxX: -900,
      minZ: -1400,
      maxZ: 1e3,
      style: { floors: [0, 0], towers: 0, neon: 0, old: 0, shops: 0 },
    },
    {
      id: `shilin`,
      name: { zh: `士林`, en: `Shilin` },
      minX: -900,
      maxX: 900,
      minZ: -1400,
      maxZ: -790,
      style: { floors: [3, 8], towers: 0.05, neon: 0.7, old: 0.6, shops: 0.95 },
    },
    {
      id: `ximending`,
      name: { zh: `西門町`, en: `Ximending` },
      minX: -900,
      maxX: -560,
      minZ: -330,
      maxZ: 70,
      style: { floors: [4, 12], towers: 0.1, neon: 1, old: 0.4, shops: 1 },
    },
    {
      id: `wanhua`,
      name: { zh: `萬華`, en: `Wanhua` },
      minX: -900,
      maxX: -560,
      minZ: 70,
      maxZ: 1e3,
      style: { floors: [2, 6], towers: 0, neon: 0.4, old: 1, shops: 0.85 },
    },
    {
      id: `zhongzheng`,
      name: { zh: `中正`, en: `Zhongzheng` },
      minX: -560,
      maxX: -130,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [4, 14],
        towers: 0.25,
        neon: 0.2,
        old: 0.35,
        shops: 0.6,
      },
    },
    {
      id: `zhongshan`,
      name: { zh: `中山`, en: `Zhongshan` },
      minX: -900,
      maxX: 230,
      minZ: -790,
      maxZ: -330,
      style: { floors: [5, 16], towers: 0.3, neon: 0.6, old: 0.45, shops: 0.8 },
    },
    {
      id: `songshan`,
      name: { zh: `松山`, en: `Songshan` },
      minX: 230,
      maxX: 900,
      minZ: -790,
      maxZ: -330,
      style: {
        floors: [5, 14],
        towers: 0.25,
        neon: 0.5,
        old: 0.5,
        shops: 0.75,
      },
    },
    {
      id: `xinyi`,
      name: { zh: `信義`, en: `Xinyi` },
      minX: 480,
      maxX: 1200,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [10, 40],
        towers: 0.8,
        neon: 0.35,
        old: 0.05,
        shops: 0.5,
      },
    },
    {
      id: `daan`,
      name: { zh: `大安`, en: `Da'an` },
      minX: -130,
      maxX: 480,
      minZ: -330,
      maxZ: 1e3,
      style: { floors: [5, 14], towers: 0.3, neon: 0.35, old: 0.4, shops: 0.8 },
    },
  ],
  Fs = [
    { id: `daan`, minX: -212, maxX: -130, minZ: 280, maxZ: 1e3 },
    { id: `zhongzheng`, minX: -700, maxX: -560, minZ: -330, maxZ: 70, gen: !1 },
    { id: `daan`, minX: -202, maxX: -62, minZ: 140, maxZ: 266, gen: !1 },
    { id: `shilin`, minX: -202, maxX: -62, minZ: -883, maxZ: -743, gen: !1 },
    { id: `songshan`, minX: 344, maxX: 464, minZ: -330, maxZ: -300, gen: !1 },
  ],
  Is = js;
function q(e, t, n, r, i, a, o, s = {}) {
  let c = {
    boulevard: { median: 8, sidewalk: 6, speed: 50 },
    arterial: { median: 2, sidewalk: 5, speed: 50 },
    street: { median: 0, sidewalk: 4, speed: 40 },
    lane: { median: 0, sidewalk: 2.5, speed: 30 },
  }[a];
  return {
    id: e,
    name: { zh: t, en: n },
    axis: r,
    at: i,
    kind: a,
    lanesPerDir: o,
    from: r === `x` ? Is.minX : Is.minZ,
    to: r === `x` ? Is.maxX : Is.maxZ,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...s,
  };
}
var Ls = -400,
  Rs = -160,
  J = 1e5;
function Y(...e) {
  let t = [];
  for (let n = 0; n + 1 < e.length; n += 2) t.push([e[n], e[n + 1]]);
  return t;
}
