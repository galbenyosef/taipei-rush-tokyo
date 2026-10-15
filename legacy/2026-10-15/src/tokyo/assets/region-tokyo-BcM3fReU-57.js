// tokyo/assets/region-tokyo-BcM3fReU 57 — setattribute
// Lines 29711-29974 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function wv(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Cv.get(t);
  if (n) return n;
  Sv ||
    ((Sv = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Sv.needsUpdate = !0),
    (Sv.name = `shimbashi-proto`));
  let r = new b();
  (r.setAttribute(
    `position`,
    new x(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new x(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new x(new Float32Array(6), 2)),
    r.setAttribute(`color`, new x(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new x(new Uint8Array(12), 4, !0)),
    r.setIndex(new x(new Uint32Array([0, 1, 2]), 1)));
  let i = ge(`opaque`, {
      policy: e.quality.materials,
      map: Sv,
      batched: !0,
      name: `shimbashi`,
    }),
    a = new v(2, 3, 3, i);
  a.name = `shimbashi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Cv.set(t, n),
    n
  );
}
var Tv = {
    id: `shimbashi`,
    name: { zh: `新橋・築地`, en: `Shimbashi & Tsukiji` },
    residencyBounds: tv.map((e) => ({ ...e })),
    claims: bv ? [] : ev,
    missionAnchors: rv,
    load: () =>
      bv
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-shimbashi-CU0USnvn.js`)
                .then((e) => e.t)
                .then((e) => (xv = e)),
            __vite__mapDeps([19, 1, 4, 3, 2, 5, 6]),
          ),
    registerMissions() {},
    keepResident() {
      return !!xv?.keepResident();
    },
    unload(e) {
      xv?.unload(e);
    },
    prewarm(e) {
      if (!bv) return wv(e);
    },
  },
  Ev =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`maru`) === `0`,
  Dv = null,
  Ov = null,
  kv = new Map();
function Av(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = kv.get(t);
  if (n) return n;
  Ov ||
    ((Ov = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Ov.needsUpdate = !0),
    (Ov.name = `marunouchi-proto`));
  let r = new b();
  (r.setAttribute(
    `position`,
    new x(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new x(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new x(new Float32Array(6), 2)),
    r.setAttribute(`color`, new x(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new x(new Uint8Array(12), 4, !0)),
    r.setIndex(new x(new Uint32Array([0, 1, 2]), 1)));
  let i = ge(`opaque`, {
      policy: e.quality.materials,
      map: Ov,
      batched: !0,
      name: `marunouchi`,
    }),
    a = new v(2, 3, 3, i);
  a.name = `marunouchi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    kv.set(t, n),
    n
  );
}
var jv = {
    id: `marunouchi`,
    name: { zh: `丸之內・大手町`, en: `Marunouchi & Otemachi` },
    residencyBounds: { ...g_ },
    claims: Ev ? [] : h_.map((e) => ({ ...e })),
    streetNames: __.map((e) => ({ ...e })),
    missionAnchors: E_,
    load: () =>
      Ev
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-marunouchi-BoijeA75.js`)
                .then((e) => e.t)
                .then((e) => (Dv = e)),
            __vite__mapDeps([20, 1, 3, 4, 2, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      Dv?.unload(e);
    },
    prewarm(e) {
      if (!Ev) return Av(e);
    },
    keepResident() {
      return !1;
    },
  },
  Mv =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ueno`) === `0`,
  Nv = null,
  Pv = {
    id: `ueno`,
    name: { zh: `上野`, en: `Ueno` },
    residencyBounds: Hr.map((e) => ({ ...e })),
    claims: Mv
      ? []
      : [
          ...zr.map((e) => ({ ...e.box, scope: `props`, label: e.label })),
          ...Vr.map((e) => ({ ...e.box, scope: `all`, label: e.label })),
        ],
    missionAnchors: Br,
    load: () =>
      Mv
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ueno-CEorO8m2.js`)
                .then((e) => e.r)
                .then((e) => (Nv = e)),
            __vite__mapDeps([21, 1, 2, 3, 4, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      Nv?.unload(e);
    },
    prewarm(e) {
      if (!Mv) return Ur(e, `ueno`);
    },
    keepResident() {
      return !1;
    },
  },
  Fv =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ameyoko`) === `0`,
  Iv = null,
  Lv = {
    id: `ameyoko`,
    name: { zh: `阿美橫・御徒町`, en: `Ameyoko & Okachimachi` },
    residencyBounds: Gr.map((e) => ({ ...e })),
    claims: Fv
      ? []
      : [
          {
            minX: Wr.x0,
            minZ: Wr.z0,
            maxX: Wr.x1,
            maxZ: Wr.z1,
            scope: `buildings`,
            label: `ameyoko-takezakaya (竹坂屋 上野店, 上野広小路 SE corner)`,
          },
        ],
    missionAnchors: Kr,
    load: () =>
      Fv
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ameyoko-MDbcAvKx.js`)
                .then((e) => e.n)
                .then((e) => (Iv = e)),
            __vite__mapDeps([22, 1, 3, 4, 2, 5, 6, 21]),
          ),
    registerMissions() {},
    unload(e) {
      Iv?.unload(e);
    },
    prewarm(e) {
      if (!Fv) return Ur(e, `ameyoko`);
    },
    keepResident() {
      return !1;
    },
  },
  Rv =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`kanda`) === `0`,
  zv = null,
  Bv = new Map();
function Vv(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Bv.get(t);
  if (n) return n;
  zv ||
    ((zv = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (zv.needsUpdate = !0),
    (zv.name = `kanda-proto`));
  let r = new b();
  (r.setAttribute(
    `position`,
    new x(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new x(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new x(new Float32Array(6), 2)),
    r.setAttribute(`color`, new x(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new x(new Uint8Array(12), 4, !0)),
    r.setIndex(new x(new Uint32Array([0, 1, 2]), 1)));
  let i = ge(`opaque`, {
      policy: e.quality.materials,
      map: zv,
      batched: !0,
      name: `kanda`,
    }),
    a = new v(2, 3, 3, i);
  a.name = `kanda:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Bv.set(t, n),
    n
  );
}
