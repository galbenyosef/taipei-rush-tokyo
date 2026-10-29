// tokyo/assets/region-tokyo-A7LxHjud 120 — vite__mapdeps
// Lines 53109-53435 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function zue(e, t, n, r) {
  let i = [];
  (e && !e.empty && i.push(e), t && !t.empty && i.push(t));
  let a = n && n.icount > 0 ? n.toGeometry() : null,
    o = a ? a.getAttribute(`position`).count : 0,
    s = o,
    c = a ? a.index.count : 0;
  for (let e of i) ((s += e.vcount), (c += e.icount));
  if (!s || !c) return null;
  let l = new Float32Array(s * 3),
    u = new Float32Array(s * 3),
    d = new Float32Array(s * 2),
    f = new Float32Array(s * 3),
    p = new Uint8Array(s * 4),
    m = s > 65535 ? new Uint32Array(c) : new Uint16Array(c),
    h = r.u1 === void 0 ? r.u0 : (r.u0 + r.u1) / 2,
    g = r.v1 === void 0 ? r.v0 : (r.v0 + r.v1) / 2,
    _ = 0,
    v = 0;
  for (let e of i) {
    let t = e.vcount;
    (l.set(e.pos.subarray(0, t * 3), _ * 3),
      u.set(e.nrm.subarray(0, t * 3), _ * 3));
    let n = e.col,
      r = e.mat,
      i = e.lit,
      a = e.info;
    for (let e = 0; e < t; e++) {
      let t = e * 4,
        o = (_ + e) * 3,
        s = (_ + e) * 4,
        c = (_ + e) * 2,
        l = n[t + 3] / 255;
      ((f[o] = (n[t] / 255) * l),
        (f[o + 1] = (n[t + 1] / 255) * l),
        (f[o + 2] = (n[t + 2] / 255) * l),
        (p[s] = r[t]),
        (p[s + 1] = r[t + 1]));
      let u = (i[t + 3] / 255) * 8;
      if (u > 0) {
        let e = a[t + 1];
        ((p[s + 2] = Math.min(255, Math.round((u / 4) * 255))),
          (p[s + 3] = (e & _n.ALWAYS ? 0 : 1) | (e & _n.WINDOWS ? 32 : 0)));
      }
      ((d[c] = h), (d[c + 1] = g));
    }
    let o = e.idx;
    for (let t = 0; t < e.icount; t++) m[v + t] = o[t] + _;
    ((_ += t), (v += e.icount));
  }
  if (a) {
    (l.set(a.getAttribute(`position`).array, _ * 3),
      u.set(a.getAttribute(`normal`).array, _ * 3),
      d.set(a.getAttribute(`uv`).array, _ * 2));
    let e = a.getAttribute(`color`).array;
    for (let t = 0; t < o; t++) {
      let n = t * 4,
        r = (_ + t) * 3,
        i = (_ + t) * 4;
      ((f[r] = e[n]), (f[r + 1] = e[n + 1]), (f[r + 2] = e[n + 2]));
      let a = e[n + 3];
      ((p[i] = 217),
        a > 0 &&
          ((p[i + 2] = Math.round(Math.min(1, a) * 0.25 * 255)),
          (p[i + 3] = +(a >= 0.99))));
    }
    let t = a.index.array;
    for (let e = 0; e < t.length; e++) m[v + e] = t[e] + _;
    a.dispose();
  }
  let y = new S();
  return (
    y.setAttribute(`position`, new w(l, 3)),
    y.setAttribute(`normal`, new w(u, 3)),
    y.setAttribute(`uv`, new w(d, 2)),
    y.setAttribute(`color`, new w(f, 3)),
    y.setAttribute(`aCity`, new w(p, 4, !0)),
    y.setIndex(new w(m, 1)),
    y.computeBoundingSphere(),
    y.computeBoundingBox(),
    y
  );
}
function Bue(e, t) {
  let n = e.getAttribute(`aCol`)?.array,
    r = e.getAttribute(`aMat`)?.array,
    i = e.getAttribute(`aLight`)?.array,
    a = e.getAttribute(`aInfo`)?.array,
    o = e.getAttribute(`position`).count,
    s = new Float32Array(o * 3),
    c = new Uint8Array(o * 4),
    l = new Float32Array(o * 2),
    u = t.u1 === void 0 ? t.u0 : (t.u0 + t.u1) / 2,
    d = t.v1 === void 0 ? t.v0 : (t.v0 + t.v1) / 2;
  for (let e = 0; e < o; e++) {
    let t = e * 4,
      o = e * 3;
    if (n) {
      let e = n[t + 3] / 255;
      ((s[o] = (n[t] / 255) * e),
        (s[o + 1] = (n[t + 1] / 255) * e),
        (s[o + 2] = (n[t + 2] / 255) * e));
    } else s[o] = s[o + 1] = s[o + 2] = 0.6;
    ((c[t] = r ? r[t] : 217), (c[t + 1] = r ? r[t + 1] : 0));
    let f = i ? (i[t + 3] / 255) * 8 : 0;
    if (f > 0) {
      let e = a ? a[t + 1] : 0;
      ((c[t + 2] = Math.min(255, Math.round((f / 4) * 255))),
        (c[t + 3] = (e & _n.ALWAYS ? 0 : 1) | (e & _n.WINDOWS ? 32 : 0)));
    }
    ((l[e * 2] = u), (l[e * 2 + 1] = d));
  }
  (e.setAttribute(`color`, new w(s, 3)),
    e.setAttribute(`aCity`, new w(c, 4, !0)),
    e.setAttribute(`uv`, new w(l, 2)),
    e.deleteAttribute(`aCol`),
    e.deleteAttribute(`aMat`),
    e.deleteAttribute(`aLight`),
    e.deleteAttribute(`aInfo`));
}
var Vue = { kind: `city`, geometry: zue, convert: Bue };
function __(e, t) {
  try {
    return e() ?? t;
  } catch {
    return t;
  }
}
var v_ = __(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.ts": Zg,
        "./defs/ameyoko-chuo-bldg.ts": Qg,
        "./defs/denpa-kaikan.ts": $g,
        "./defs/enrai-yu.ts": e_,
        "./defs/espark-ueno.ts": t_,
        "./defs/kanda-gado.ts": kue,
        "./defs/karasumori-jinja.ts": n_,
        "./defs/namiyoke-jinja.ts": Aue,
        "./defs/new-karasumori-bldg.ts": jue,
        "./defs/nishiginza-lucky.ts": r_,
        "./defs/okachimachi-hoseki.ts": i_,
        "./defs/shimizu-shoten.ts": a_,
        "./defs/tsukiji-yamatatsu.ts": o_,
        "./defs/yamashitaya-ueno.ts": s_,
        "./defs/yurakucho-gado.ts": c_,
      }),
    {},
  ),
  y_ = __(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-akiba-denshi-center-DcmtKiii.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              31, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/ameyoko-chuo-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-ameyoko-chuo-bldg-M3D8N694.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              34, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/denpa-kaikan.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-denpa-kaikan-DMQJmbjv.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              35, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/enrai-yu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-enrai-yu-BQxURQPS.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              36, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              33, 32,
            ]),
          ),
        "./defs/espark-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-espark-ueno-DApz2q43.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              37, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/kanda-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-kanda-gado-zwnllouX.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              38, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              33, 32,
            ]),
          ),
        "./defs/karasumori-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-karasumori-jinja-BQYtOkT9.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              39, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/namiyoke-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-namiyoke-jinja-0jdfQVwQ.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              40, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              33, 32,
            ]),
          ),
        "./defs/new-karasumori-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-new-karasumori-bldg-CNrk19wB.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              41, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/nishiginza-lucky.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-nishiginza-lucky-C2jhmTQv.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              42, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/okachimachi-hoseki.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-okachimachi-hoseki-C2N1pC3a.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              43, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/shimizu-shoten.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-shimizu-shoten-BYZFhc3u.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              44, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/tsukiji-yamatatsu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-tsukiji-yamatatsu-C4LPAHTz.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              45, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/yamashitaya-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yamashitaya-ueno-BQbwgPOS.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              46, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
        "./defs/yurakucho-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yurakucho-gado-CKQM4gU8.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              47, 1, 8, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              32, 33,
            ]),
          ),
      }),
    {},
  ),
  Hue = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  b_ = [],
  x_ = null,
  Uue = null,
  Wue = {
    "denpa-kaikan": `built by T2-LB (世界のテレビ会館, landmarks/akiba.ts)`,
  };
