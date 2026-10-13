// tokyo__assets__region-tokyo-BcM3fReU 87 — vite__mapdeps
// Lines 43148-43497 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function ete(e, t, n, r) {
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
          (p[s + 3] = (e & tr.ALWAYS ? 0 : 1) | (e & tr.WINDOWS ? 32 : 0)));
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
  let y = new b();
  return (
    y.setAttribute(`position`, new x(l, 3)),
    y.setAttribute(`normal`, new x(u, 3)),
    y.setAttribute(`uv`, new x(d, 2)),
    y.setAttribute(`color`, new x(f, 3)),
    y.setAttribute(`aCity`, new x(p, 4, !0)),
    y.setIndex(new x(m, 1)),
    y.computeBoundingSphere(),
    y.computeBoundingBox(),
    y
  );
}
function _x(e, t) {
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
        (c[t + 3] = (e & tr.ALWAYS ? 0 : 1) | (e & tr.WINDOWS ? 32 : 0)));
    }
    ((l[e * 2] = u), (l[e * 2 + 1] = d));
  }
  (e.setAttribute(`color`, new x(s, 3)),
    e.setAttribute(`aCity`, new x(c, 4, !0)),
    e.setAttribute(`uv`, new x(l, 2)),
    e.deleteAttribute(`aCol`),
    e.deleteAttribute(`aMat`),
    e.deleteAttribute(`aLight`),
    e.deleteAttribute(`aInfo`));
}
var vx = { kind: `city`, geometry: ete, convert: _x };
function yx(e, t) {
  try {
    return e() ?? t;
  } catch {
    return t;
  }
}
var bx = yx(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.ts": Ib,
        "./defs/ameyoko-chuo-bldg.ts": Lb,
        "./defs/denpa-kaikan.ts": Rb,
        "./defs/enrai-yu.ts": zb,
        "./defs/espark-ueno.ts": Bb,
        "./defs/kanda-gado.ts": Xee,
        "./defs/karasumori-jinja.ts": Vb,
        "./defs/namiyoke-jinja.ts": Zee,
        "./defs/new-karasumori-bldg.ts": Qee,
        "./defs/nishiginza-lucky.ts": Hb,
        "./defs/okachimachi-hoseki.ts": Ub,
        "./defs/shimizu-shoten.ts": Wb,
        "./defs/tsukiji-yamatatsu.ts": Gb,
        "./defs/yamashitaya-ueno.ts": Kb,
        "./defs/yurakucho-gado.ts": qb,
      }),
    {},
  ),
  xx = yx(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-akiba-denshi-center-AnKWMTRu.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              24, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/ameyoko-chuo-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-ameyoko-chuo-bldg-BZiDEQwf.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              27, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/denpa-kaikan.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-denpa-kaikan-CfqObs2p.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              28, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/enrai-yu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-enrai-yu-CbrURW05.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              29, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 26, 25,
            ]),
          ),
        "./defs/espark-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-espark-ueno-WLKqmaWy.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              30, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/kanda-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-kanda-gado-B73p26Wi.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              31, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 26, 25,
            ]),
          ),
        "./defs/karasumori-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-karasumori-jinja-ug8EhSbJ.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              32, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/namiyoke-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-namiyoke-jinja-u3VcLqDU.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              33, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 26, 25,
            ]),
          ),
        "./defs/new-karasumori-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-new-karasumori-bldg-YocW0Jbw.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              34, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/nishiginza-lucky.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-nishiginza-lucky-CBTbuSQh.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              35, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/okachimachi-hoseki.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-okachimachi-hoseki-BNQtKGe4.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              36, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/shimizu-shoten.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-shimizu-shoten-CjSOYUYc.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              37, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/tsukiji-yamatatsu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-tsukiji-yamatatsu-COiN77rV.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              38, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/yamashitaya-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yamashitaya-ueno-wZAufeba.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              39, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
        "./defs/yurakucho-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yurakucho-gado-Bh7OarCf.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              40, 1, 7, 4, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 25, 26,
            ]),
          ),
      }),
    {},
  ),
  Sx = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  Cx = [],
  wx = null,
  Tx = null,
  Ex = {
    "denpa-kaikan": `built by T2-LB (世界のテレビ会館, landmarks/akiba.ts)`,
  };
function Dx() {
  if (wx) return wx;
  let e = [],
    t = new Set();
  for (let n of Object.keys(bx).sort()) {
    let r = n.slice(n.lastIndexOf(`/`) + 1).replace(/\.ts$/, ``),
      i = bx[n],
      a = `regions/tokyo/sites/defs/${r}.ts`;
    if (!i || typeof i != `object`) {
      Cx.push(`${a}: no default export`);
      continue;
    }
    if (i.id !== r || !Sx.test(i.id)) {
      Cx.push(
        `${a}: id '${String(i.id)}' must be the kebab-case file basename`,
      );
      continue;
    }
    if (t.has(i.id)) {
      Cx.push(`${a}: duplicate id`);
      continue;
    }
    if (!i.name?.ja || !i.name?.zh || !i.name?.en) {
      Cx.push(`${a}: name needs ja / zh / en`);
      continue;
    }
    i.id in Ex || (t.add(i.id), e.push(i));
  }
  return (
    e.sort(
      (e, t) => (t.priority ?? 0) - (e.priority ?? 0) || (e.id < t.id ? -1 : 1),
    ),
    (wx = e)
  );
}
function Ox() {
  return (Tx ||= Dx().map((e) => gx(e, e.lot.w, e.lot.d)));
}
