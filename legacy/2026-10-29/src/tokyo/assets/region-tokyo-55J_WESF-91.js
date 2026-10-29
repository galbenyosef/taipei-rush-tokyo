// tokyo/assets/region-tokyo-55J_WESF 91 — map
// Lines 39884-40166 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var gh = null,
  kle = {
    id: `kanda`,
    name: { zh: `神田・御茶之水`, en: `Kanda & Ochanomizu` },
    residencyBounds: Ite.map((e) => ({ ...e })),
    claims: ph
      ? []
      : Lte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    missionAnchors: Rte,
    load: () =>
      ph
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-kanda-BOuhI6B0.js`)
                .then((e) => e.n)
                .then((e) => (gh = e)),
            __vite__mapDeps([23, 1, 3, 4, 2, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      gh?.unload(e);
    },
    prewarm(e) {
      if (!ph) return Ole(e);
    },
    keepResident() {
      return !1;
    },
  },
  _h =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`suidobashi`) === `0`,
  vh = null,
  Ale = {
    id: `suidobashi`,
    name: { zh: `水道橋・神保町`, en: `Suidobashi & Jimbocho` },
    residencyBounds: Ate.map((e) => ({ ...e })),
    claims: _h
      ? []
      : jte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    pedMix: {
      student: 6,
      office: 4,
      uncle: 4,
      elder: 3,
      tourist: 3,
      family: 2,
      auntie: 2,
      delivery: 1,
    },
    honorPois: _h ? [] : [`convenience-435`],
    missionAnchors: Mte,
    load: () =>
      _h
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-suidobashi-BBv4Djc2.js`)
                .then((e) => e.r)
                .then((e) => (vh = e)),
            __vite__mapDeps([24, 1, 2, 3, 4, 5, 6]),
          ),
    registerMissions() {},
    unload(e) {
      vh?.unload(e);
    },
    prewarm(e) {
      if (!_h) return Vn(e, `suidobashi`);
    },
    keepResident() {
      return !1;
    },
  },
  yh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`hongo`) === `0`,
  bh = null,
  jle = {
    id: `hongo`,
    name: { zh: `本鄉・東大`, en: `Hongo & Todai` },
    residencyBounds: Nte.map((e) => ({ ...e })),
    claims: yh
      ? []
      : Pte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    pedMix: {
      student: 9,
      office: 3,
      elder: 3,
      auntie: 2,
      uncle: 2,
      family: 1,
      delivery: 1,
      tourist: 1,
    },
    streetNames: yh
      ? []
      : [
          {
            axis: `x`,
            at: Hn.at,
            from: Hn.from,
            to: Hn.to,
            zh: `菊坂`,
            en: `Kikuzaka`,
            ja: `菊坂`,
          },
        ],
    missionAnchors: Fte,
    load: () =>
      yh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-hongo-B0kKsWK8.js`)
                .then((e) => e.n)
                .then((e) => (bh = e)),
            __vite__mapDeps([25, 1, 2, 4, 3, 5, 6, 24]),
          ),
    registerMissions() {},
    unload(e) {
      bh?.unload(e);
    },
    prewarm(e) {
      if (!yh) return Vn(e, `hongo`);
    },
    keepResident() {
      return !1;
    },
  },
  xh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`roppongi`) === `0`,
  Sh = null,
  Ch = null,
  wh = new Map();
function Mle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = wh.get(t);
  if (n) return n;
  Ch ||
    ((Ch = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Ch.needsUpdate = !0),
    (Ch.name = `roppongi-proto`));
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
      map: Ch,
      batched: !0,
      name: `roppongi`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `roppongi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    wh.set(t, n),
    n
  );
}
var Nle = {
    id: `roppongi`,
    name: { zh: `六本木・赤坂`, en: `Roppongi & Akasaka` },
    residencyBounds: zte.map((e) => ({ ...e })),
    claims: xh
      ? []
      : Bte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    honorPois: xh
      ? []
      : [
          `convenience-379`,
          `convenience-384`,
          `pharmacy-385`,
          `convenience-386`,
          `pharmacy-387`,
          `claw-388`,
        ],
    pedMix: {
      tourist: 26,
      office: 20,
      uncle: 8,
      student: 6,
      auntie: 4,
      delivery: 4,
      vendor: 2,
      family: 2,
      elder: 2,
    },
    streetNames: [
      {
        axis: `z`,
        at: -872,
        from: 940,
        to: 1065,
        zh: `鳥居坂`,
        en: `Toriizaka`,
      },
    ],
    missionAnchors: Vte,
    load: () =>
      xh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-roppongi-Cv6Rgbh_.js`)
                .then((e) => e.n)
                .then((e) => (Sh = e)),
            __vite__mapDeps([26, 1, 2, 4, 3, 5, 6]),
          ),
    storefront: (e) => Sh?.storefront(e) ?? null,
    registerMissions() {},
    unload(e) {
      Sh?.unload(e);
    },
    prewarm(e) {
      if (!xh) return Mle(e);
    },
    keepResident() {
      return !1;
    },
  },
  Th =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`asakusa`) === `0`,
  Eh = null,
  Dh = null,
  Oh = new Map();
function Ple(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Oh.get(t);
  if (n) return n;
  Dh ||
    ((Dh = new w(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Dh.needsUpdate = !0),
    (Dh.name = `asakusa-proto`));
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
      map: Dh,
      batched: !0,
      name: `asakusa`,
    }),
    a = new _(2, 3, 3, i);
  a.name = `asakusa:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Oh.set(t, n),
    n
  );
}
