// tokyo/assets/region-tokyo-55J_WESF 90 — setattribute
// Lines 39620-39883 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Sle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = ih.get(t);
  if (n) return n;
  rh ||
    ((rh = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (rh.needsUpdate = !0),
    (rh.name = `shimbashi-proto`));
  let r = new y();
  (r.setAttribute(
    `position`,
    new b(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new b(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new b(new Float32Array(6), 2)),
    r.setAttribute(`color`, new b(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new b(new Uint8Array(12), 4, !0)),
    r.setIndex(new b(new Uint32Array([0, 1, 2]), 1)));
  let i = Fe(`opaque`, {
      policy: e.quality.materials,
      map: rh,
      batched: !0,
      name: `shimbashi`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `shimbashi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    ih.set(t, n),
    n
  );
}
var Cle = {
    id: `shimbashi`,
    name: { zh: `新橋・築地`, en: `Shimbashi & Tsukiji` },
    residencyBounds: mle.map((e) => ({ ...e })),
    claims: th ? [] : ple,
    missionAnchors: hle,
    load: () =>
      th
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-shimbashi-DyBSAck1.js`)
                .then((e) => e.t)
                .then((e) => (nh = e)),
            __vite__mapDeps([19, 1, 2, 4, 3, 5, 6]),
          ),
    registerMissions() {},
    keepResident() {
      return !!nh?.keepResident();
    },
    unload(e) {
      nh?.unload(e);
    },
    prewarm(e) {
      if (!th) return Sle(e);
    },
  },
  ah =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`maru`) === `0`,
  oh = null,
  sh = null,
  ch = new Map();
function wle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = ch.get(t);
  if (n) return n;
  sh ||
    ((sh = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (sh.needsUpdate = !0),
    (sh.name = `marunouchi-proto`));
  let r = new y();
  (r.setAttribute(
    `position`,
    new b(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new b(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new b(new Float32Array(6), 2)),
    r.setAttribute(`color`, new b(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new b(new Uint8Array(12), 4, !0)),
    r.setIndex(new b(new Uint32Array([0, 1, 2]), 1)));
  let i = Fe(`opaque`, {
      policy: e.quality.materials,
      map: sh,
      batched: !0,
      name: `marunouchi`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `marunouchi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    ch.set(t, n),
    n
  );
}
var Tle = {
    id: `marunouchi`,
    name: { zh: `丸之內・大手町`, en: `Marunouchi & Otemachi` },
    residencyBounds: { ...Wce },
    claims: ah ? [] : Uce.map((e) => ({ ...e })),
    streetNames: Gce.map((e) => ({ ...e })),
    missionAnchors: Qce,
    load: () =>
      ah
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-marunouchi-I3NX4HcD.js`)
                .then((e) => e.t)
                .then((e) => (oh = e)),
            __vite__mapDeps([20, 1, 4, 2, 3, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      oh?.unload(e);
    },
    prewarm(e) {
      if (!ah) return wle(e);
    },
    keepResident() {
      return !1;
    },
  },
  lh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ueno`) === `0`,
  uh = null,
  Ele = {
    id: `ueno`,
    name: { zh: `上野`, en: `Ueno` },
    residencyBounds: Dte.map((e) => ({ ...e })),
    claims: lh
      ? []
      : [
          ...wte.map((e) => ({ ...e.box, scope: `props`, label: e.label })),
          ...Ete.map((e) => ({ ...e.box, scope: `all`, label: e.label })),
        ],
    missionAnchors: Tte,
    load: () =>
      lh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ueno-CufCWRy0.js`)
                .then((e) => e.r)
                .then((e) => (uh = e)),
            __vite__mapDeps([21, 1, 3, 4, 2, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      uh?.unload(e);
    },
    prewarm(e) {
      if (!lh) return zn(e, `ueno`);
    },
    keepResident() {
      return !1;
    },
  },
  dh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`ameyoko`) === `0`,
  fh = null,
  Dle = {
    id: `ameyoko`,
    name: { zh: `阿美橫・御徒町`, en: `Ameyoko & Okachimachi` },
    residencyBounds: Ote.map((e) => ({ ...e })),
    claims: dh
      ? []
      : [
          {
            minX: Bn.x0,
            minZ: Bn.z0,
            maxX: Bn.x1,
            maxZ: Bn.z1,
            scope: `buildings`,
            label: `ameyoko-takezakaya (竹坂屋 上野店, 上野広小路 SE corner)`,
          },
        ],
    missionAnchors: kte,
    load: () =>
      dh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-ameyoko-DgncIALb.js`)
                .then((e) => e.n)
                .then((e) => (fh = e)),
            __vite__mapDeps([22, 1, 4, 2, 3, 5, 6, 21]),
          ),
    registerMissions() {},
    unload(e) {
      fh?.unload(e);
    },
    prewarm(e) {
      if (!dh) return zn(e, `ameyoko`);
    },
    keepResident() {
      return !1;
    },
  },
  ph =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`kanda`) === `0`,
  mh = null,
  hh = new Map();
function Ole(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = hh.get(t);
  if (n) return n;
  mh ||
    ((mh = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (mh.needsUpdate = !0),
    (mh.name = `kanda-proto`));
  let r = new y();
  (r.setAttribute(
    `position`,
    new b(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), 3),
  ),
    r.setAttribute(
      `normal`,
      new b(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    r.setAttribute(`uv`, new b(new Float32Array(6), 2)),
    r.setAttribute(`color`, new b(new Uint8Array(12).fill(255), 4, !0)),
    r.setAttribute(`aCity`, new b(new Uint8Array(12), 4, !0)),
    r.setIndex(new b(new Uint32Array([0, 1, 2]), 1)));
  let i = Fe(`opaque`, {
      policy: e.quality.materials,
      map: mh,
      batched: !0,
      name: `kanda`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `kanda:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    hh.set(t, n),
    n
  );
}
