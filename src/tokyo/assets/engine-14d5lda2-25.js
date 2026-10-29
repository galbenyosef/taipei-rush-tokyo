// tokyo/assets/engine-14d5lda2 25 — math
// Lines 8868-9113 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function Jc(e, t, n) {
  if (!qc) return null;
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
function Yc(e, t, n, r, i) {
  let a = e.gl;
  (a.bindBuffer(a.COPY_WRITE_BUFFER, t),
    a.bufferSubData(a.COPY_WRITE_BUFFER, n, r, 0, i),
    a.bindBuffer(a.COPY_WRITE_BUFFER, null));
}
var X = {
  col: new Uint8Array(),
  city: new Uint8Array(),
  i16: new Uint16Array(),
  i32: new Uint32Array(),
  uv8: new Float32Array(8),
};
function Xc(e, t, n, r) {
  let i = t.n,
    a = t.ni;
  X.col.length < i * 4 &&
    ((X.col = new Uint8Array(i * 4 + 8192)),
    (X.city = new Uint8Array(i * 4 + 8192)));
  let o = X.col,
    s = X.city,
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
    ? (X.i32.length < a && (X.i32 = new Uint32Array(a + 12288)), (l = X.i32))
    : (X.i16.length < a && (X.i16 = new Uint16Array(a + 12288)), (l = X.i16));
  let u = t.idx;
  for (let e = 0; e < a; e++) l[e] = n + u[e];
  let d = e.buf;
  (Yc(e, d.position, n * 12, t.pos, i * 3),
    Yc(e, d.normal, n * 12, t.nor, i * 3),
    d.uv && t.uv && Yc(e, d.uv, n * 8, t.uv, i * 2),
    Yc(e, d.color, n * 4, o, i * 4),
    Yc(e, d.aCity, n * 4, s, i * 4),
    Yc(e, e.index, r * e.ib, l, a));
}
function Zc(e, t, n, r, i, a) {
  let o = X.uv8;
  ((o[0] = n),
    (o[1] = r),
    (o[2] = i),
    (o[3] = r),
    (o[4] = i),
    (o[5] = a),
    (o[6] = n),
    (o[7] = a),
    e.buf.uv && Yc(e, e.buf.uv, t * 8, o, 8));
}
var Qc = new S(),
  Z = new te(),
  $c = 0.002,
  el = class {
    move;
    turn;
    maxAge;
    fovTol;
    frustum = new we();
    pose = new Float64Array(27).fill(NaN);
    cosTurn = 1;
    age = 0;
    rebuilds = 0;
    constructor(e = 3, t = o.degToRad(3), n = 120, r = o.degToRad(1)) {
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
          s = Math.min(Math.PI / 2 - 0.01, r + t),
          c = Math.min(Math.PI / 2 - 0.01, a + t);
        ((Z.near = i.near),
          (Z.far = i.far),
          (Z.fov = o.radToDeg(s * 2)),
          (Z.aspect = Math.tan(c) / Math.tan(s)),
          (Z.zoom = 1),
          Z.updateProjectionMatrix(),
          Qc.multiplyMatrices(Z.projectionMatrix, e.matrixWorldInverse));
      } else {
        let t = e;
        this.cosTurn = Math.cos($c);
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
        ((a += r * $c * 1.45),
          Qc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse));
      }
      let s = i.isPerspectiveCamera ? Z.reversedDepth : e.reversedDepth;
      this.frustum.setFromProjectionMatrix(Qc, e.coordinateSystem, s);
      for (let e of this.frustum.planes) e.constant += a;
      return this.frustum;
    }
  },
  tl = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`],
  nl = 4.8;
function rl(e) {
  let t = e.name.zh;
  return t.endsWith(`東西路`) ? `ew` : t.endsWith(`南北路`) ? `ns` : null;
}
function il(e, t) {
  let n = 0,
    r = e.from,
    i = e.to,
    a = e.sections;
  if (a)
    for (let o = 0; o < a.length && !(t < a[o][0]); o++)
      ((n = a[o][1]),
        (r = a[o][0]),
        (i = o + 1 < a.length ? a[o + 1][0] : e.to));
  let o = rl(e);
  if (o) {
    let e = o === `ew` ? Js : Ys;
    t < e ? (i = Math.min(i, e)) : (r = Math.max(r, e));
  }
  return { n, lo: Math.max(r, e.from), hi: Math.min(i, e.to) };
}
function al(e, t, n) {
  let r = e.name.zh,
    i = e.name.en,
    a = rl(e);
  if (a === `ew`) {
    let e = t >= Js;
    ((r = r.slice(0, -3) + (e ? `東路` : `西路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` E. Rd.` : ` W. Rd.`)));
  } else if (a === `ns`) {
    let e = n < Ys;
    ((r = r.slice(0, -3) + (e ? `北路` : `南路`)),
      (i = i.replace(/ Rd\.?$/, e ? ` N. Rd.` : ` S. Rd.`)));
  }
  i = i.replace(/ (Rd|St|Blvd|Ave|Ln)$/, ` $1.`);
  let o = il(e, e.axis === `x` ? t : n).n,
    s = o > 0 ? `${tl[o] ?? o}段` : ``;
  return {
    zh: r,
    sec: s,
    en: o ? `${i}, Sec. ${o}` : i,
    n: o,
    full: { zh: r + s, en: o ? `Sec. ${o}, ${i}` : i },
  };
}
function ol(e, t, n) {
  let { lo: r, hi: i } = il(e, t),
    a = rl(e),
    o = Math.max(
      0,
      (a === `ew` ? t < -400 : a === `ns` && t < -160) ? i - t : t - r,
    ),
    s = nl * (0.65 + ((wc(e.name.zh) % 997) / 997) * 0.9);
  return 2 * Math.floor(o / s) + (n > 0 ? 2 : 1);
}
