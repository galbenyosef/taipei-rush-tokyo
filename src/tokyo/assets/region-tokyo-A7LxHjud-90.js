// tokyo/assets/region-tokyo-A7LxHjud 90 — setattribute
// Lines 39693-39956 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ple(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = sh.get(t);
  if (n) return n;
  oh ||
    ((oh = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (oh.needsUpdate = !0),
    (oh.name = `shimbashi-proto`));
  let r = new S();
  (r.setAttribute(
    `position`,
    new w(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new w(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new w(new Float32Array(6), 2)),
    r.setAttribute(`color`, new w(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new w(new Uint8Array(12), 4, !0)),
    r.setIndex(new w(new Uint32Array([0, 1, 2]), 1)));
  let i = ke(`opaque`, {
      policy: e.quality.materials,
      map: oh,
      batched: !0,
      name: `shimbashi`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `shimbashi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    sh.set(t, n),
    n
  );
}
var Fle = {
    id: `shimbashi`,
    name: { zh: `新橋・築地`, en: `Shimbashi & Tsukiji` },
    residencyBounds: Ele.map((e) => ({ ...e })),
    claims: ih ? [] : Tle,
    missionAnchors: Dle,
    load: () =>
      ih
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-shimbashi-C-2ZyiI6.js`)
                .then((e) => e.t)
                .then((e) => (ah = e)),
            __vite__mapDeps([22, 1, 3, 2, 5, 4, 6, 7]),
          ),
    registerMissions() {},
    keepResident() {
      return !!ah?.keepResident();
    },
    unload(e) {
      ah?.unload(e);
    },
    prewarm(e) {
      if (!ih) return Ple(e);
    },
  },
  ch =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`maru`) === `0`,
  lh = null,
  uh = null,
  dh = new Map();
function Ile(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = dh.get(t);
  if (n) return n;
  uh ||
    ((uh = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (uh.needsUpdate = !0),
    (uh.name = `marunouchi-proto`));
  let r = new S();
  (r.setAttribute(
    `position`,
    new w(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new w(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new w(new Float32Array(6), 2)),
    r.setAttribute(`color`, new w(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new w(new Uint8Array(12), 4, !0)),
    r.setIndex(new w(new Uint32Array([0, 1, 2]), 1)));
  let i = ke(`opaque`, {
      policy: e.quality.materials,
      map: uh,
      batched: !0,
      name: `marunouchi`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `marunouchi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    dh.set(t, n),
    n
  );
}
var Lle = {
    id: `marunouchi`,
    name: { zh: `丸之內・大手町`, en: `Marunouchi & Otemachi` },
    residencyBounds: { ...nle },
    claims: ch ? [] : tle.map((e) => ({ ...e })),
    streetNames: rle.map((e) => ({ ...e })),
    missionAnchors: ule,
    load: () =>
      ch
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-marunouchi-CRDZjS6B.js`)
                .then((e) => e.t)
                .then((e) => (lh = e)),
            __vite__mapDeps([23, 1, 5, 2, 3, 4, 6, 7]),
          ),
    registerMissions() {},
    unload(e) {
      lh?.unload(e);
    },
    prewarm(e) {
      if (!ch) return Ile(e);
    },
    keepResident() {
      return !1;
    },
  },
  fh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ueno`) === `0`,
  ph = null,
  Rle = {
    id: `ueno`,
    name: { zh: `上野`, en: `Ueno` },
    residencyBounds: jte.map((e) => ({ ...e })),
    claims: fh
      ? []
      : [
          ...Ote.map((e) => ({ ...e.box, scope: `props`, label: e.label })),
          ...Ate.map((e) => ({ ...e.box, scope: `all`, label: e.label })),
        ],
    missionAnchors: kte,
    load: () =>
      fh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ueno-DfmWW0p_.js`)
                .then((e) => e.r)
                .then((e) => (ph = e)),
            __vite__mapDeps([24, 1, 4, 5, 2, 3, 6, 7]),
          ),
    registerMissions() {},
    unload(e) {
      ph?.unload(e);
    },
    prewarm(e) {
      if (!fh) return Vn(e, `ueno`);
    },
    keepResident() {
      return !1;
    },
  },
  mh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ameyoko`) === `0`,
  hh = null,
  zle = {
    id: `ameyoko`,
    name: { zh: `阿美橫・御徒町`, en: `Ameyoko & Okachimachi` },
    residencyBounds: Mte.map((e) => ({ ...e })),
    claims: mh
      ? []
      : [
          {
            minX: Hn.x0,
            minZ: Hn.z0,
            maxX: Hn.x1,
            maxZ: Hn.z1,
            scope: `buildings`,
            label: `ameyoko-takezakaya (竹坂屋 上野店, 上野広小路 SE corner)`,
          },
        ],
    missionAnchors: Nte,
    load: () =>
      mh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ameyoko-CVt_89lm.js`)
                .then((e) => e.n)
                .then((e) => (hh = e)),
            __vite__mapDeps([25, 1, 5, 2, 3, 4, 6, 7, 24]),
          ),
    registerMissions() {},
    unload(e) {
      hh?.unload(e);
    },
    prewarm(e) {
      if (!mh) return Vn(e, `ameyoko`);
    },
    keepResident() {
      return !1;
    },
  },
  gh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`kanda`) === `0`,
  _h = null,
  vh = new Map();
function Ble(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = vh.get(t);
  if (n) return n;
  _h ||
    ((_h = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (_h.needsUpdate = !0),
    (_h.name = `kanda-proto`));
  let r = new S();
  (r.setAttribute(
    `position`,
    new w(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new w(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new w(new Float32Array(6), 2)),
    r.setAttribute(`color`, new w(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new w(new Uint8Array(12), 4, !0)),
    r.setIndex(new w(new Uint32Array([0, 1, 2]), 1)));
  let i = ke(`opaque`, {
      policy: e.quality.materials,
      map: _h,
      batched: !0,
      name: `kanda`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `kanda:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    vh.set(t, n),
    n
  );
}
