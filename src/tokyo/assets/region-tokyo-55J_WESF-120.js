// tokyo/assets/region-tokyo-55J_WESF 120 — vite__mapdeps
// Lines 53033-53382 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Due(e, t, n, r) {
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
          (p[s + 3] = (e & hn.ALWAYS ? 0 : 1) | (e & hn.WINDOWS ? 32 : 0)));
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
  let x = new y();
  return (
    x.setAttribute(`position`, new b(l, 3)),
    x.setAttribute(`normal`, new b(u, 3)),
    x.setAttribute(`uv`, new b(d, 2)),
    x.setAttribute(`color`, new b(f, 3)),
    x.setAttribute(`aCity`, new b(p, 4, !0)),
    x.setIndex(new b(m, 1)),
    x.computeBoundingSphere(),
    x.computeBoundingBox(),
    x
  );
}
function Oue(e, t) {
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
        (c[t + 3] = (e & hn.ALWAYS ? 0 : 1) | (e & hn.WINDOWS ? 32 : 0)));
    }
    ((l[e * 2] = u), (l[e * 2 + 1] = d));
  }
  (e.setAttribute(`color`, new b(s, 3)),
    e.setAttribute(`aCity`, new b(c, 4, !0)),
    e.setAttribute(`uv`, new b(l, 2)),
    e.deleteAttribute(`aCol`),
    e.deleteAttribute(`aMat`),
    e.deleteAttribute(`aLight`),
    e.deleteAttribute(`aInfo`));
}
var kue = { kind: `city`, geometry: Due, convert: Oue };
function m_(e, t) {
  try {
    return e() ?? t;
  } catch {
    return t;
  }
}
var h_ = m_(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.ts": Jg,
        "./defs/ameyoko-chuo-bldg.ts": Yg,
        "./defs/denpa-kaikan.ts": Xg,
        "./defs/enrai-yu.ts": Zg,
        "./defs/espark-ueno.ts": Qg,
        "./defs/kanda-gado.ts": _ue,
        "./defs/karasumori-jinja.ts": $g,
        "./defs/namiyoke-jinja.ts": vue,
        "./defs/new-karasumori-bldg.ts": yue,
        "./defs/nishiginza-lucky.ts": e_,
        "./defs/okachimachi-hoseki.ts": t_,
        "./defs/shimizu-shoten.ts": n_,
        "./defs/tsukiji-yamatatsu.ts": r_,
        "./defs/yamashitaya-ueno.ts": i_,
        "./defs/yurakucho-gado.ts": a_,
      }),
    {},
  ),
  g_ = m_(
    () =>
      Object.assign({
        "./defs/akiba-denshi-center.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-akiba-denshi-center-CO6nuQGb.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              28, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/ameyoko-chuo-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-ameyoko-chuo-bldg-B8Zblw6V.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              31, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/denpa-kaikan.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-denpa-kaikan-BEXsikmU.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              32, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/enrai-yu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-enrai-yu-D7iSxLF-.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              33, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 30, 29,
            ]),
          ),
        "./defs/espark-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-espark-ueno-Bq-ASOXf.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              34, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/kanda-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-kanda-gado-D32pmV_-.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              35, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 30, 29,
            ]),
          ),
        "./defs/karasumori-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-karasumori-jinja-WJyy2AM8.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              36, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/namiyoke-jinja.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-namiyoke-jinja-2Ax-sZ-a.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              37, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 30, 29,
            ]),
          ),
        "./defs/new-karasumori-bldg.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-new-karasumori-bldg-x2IE4ser.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              38, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/nishiginza-lucky.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-nishiginza-lucky-TaUGHKPC.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              39, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/okachimachi-hoseki.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-okachimachi-hoseki-Q79QXrW8.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              40, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/shimizu-shoten.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-shimizu-shoten-7pG0ntVu.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              41, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/tsukiji-yamatatsu.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-tsukiji-yamatatsu-C_DaNQrS.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              42, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/yamashitaya-ueno.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yamashitaya-ueno-ES3aaCOG.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              43, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
        "./defs/yurakucho-gado.scene.ts": () =>
          t(
            () =>
              import(`./region-tokyo-site-yurakucho-gado-Bel6HEeR.js`)
                .then((e) => e.t)
                .then((e) => e.default),
            __vite__mapDeps([
              44, 1, 7, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30,
            ]),
          ),
      }),
    {},
  ),
  Aue = /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  __ = [],
  v_ = null,
  jue = null,
  Mue = {
    "denpa-kaikan": `built by T2-LB (世界のテレビ会館, landmarks/akiba.ts)`,
  };
function y_() {
  if (v_) return v_;
  let e = [],
    t = new Set();
  for (let n of Object.keys(h_).sort()) {
    let r = n.slice(n.lastIndexOf(`/`) + 1).replace(/\.ts$/, ``),
      i = h_[n],
      a = `regions/tokyo/sites/defs/${r}.ts`;
    if (!i || typeof i != `object`) {
      __.push(`${a}: no default export`);
      continue;
    }
    if (i.id !== r || !Aue.test(i.id)) {
      __.push(
        `${a}: id '${String(i.id)}' must be the kebab-case file basename`,
      );
      continue;
    }
    if (t.has(i.id)) {
      __.push(`${a}: duplicate id`);
      continue;
    }
    if (!i.name?.ja || !i.name?.zh || !i.name?.en) {
      __.push(`${a}: name needs ja / zh / en`);
      continue;
    }
    i.id in Mue || (t.add(i.id), e.push(i));
  }
  return (
    e.sort(
      (e, t) => (t.priority ?? 0) - (e.priority ?? 0) || (e.id < t.id ? -1 : 1),
    ),
    (v_ = e)
  );
}
function Nue() {
  return (jue ||= y_().map((e) => p_(e, e.lot.w, e.lot.d)));
}
