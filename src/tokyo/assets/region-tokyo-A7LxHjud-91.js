// tokyo/assets/region-tokyo-A7LxHjud 91 — map
// Lines 39957-40239 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var yh = null,
  Vle = {
    id: `kanda`,
    name: { zh: `神田・御茶之水`, en: `Kanda & Ochanomizu` },
    residencyBounds: Bte.map((e) => ({ ...e })),
    claims: gh
      ? []
      : Vte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    missionAnchors: Hte,
    load: () =>
      gh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-kanda-DcnnktoK.js`)
                .then((e) => e.n)
                .then((e) => (yh = e)),
            __vite__mapDeps([26, 1, 4, 5, 2, 3, 6, 7]),
          ),
    registerMissions() {},
    unload(e) {
      yh?.unload(e);
    },
    prewarm(e) {
      if (!gh) return Ble(e);
    },
    keepResident() {
      return !1;
    },
  },
  bh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`suidobashi`) === `0`,
  xh = null,
  Hle = {
    id: `suidobashi`,
    name: { zh: `水道橋・神保町`, en: `Suidobashi & Jimbocho` },
    residencyBounds: Pte.map((e) => ({ ...e })),
    claims: bh
      ? []
      : Fte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
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
    honorPois: bh ? [] : [`convenience-435`],
    missionAnchors: Ite,
    load: () =>
      bh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-suidobashi-CZ63KPtp.js`)
                .then((e) => e.r)
                .then((e) => (xh = e)),
            __vite__mapDeps([27, 1, 3, 2, 4, 5, 6, 7]),
          ),
    registerMissions() {},
    unload(e) {
      xh?.unload(e);
    },
    prewarm(e) {
      if (!bh) return Un(e, `suidobashi`);
    },
    keepResident() {
      return !1;
    },
  },
  Sh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`hongo`) === `0`,
  Ch = null,
  Ule = {
    id: `hongo`,
    name: { zh: `本鄉・東大`, en: `Hongo & Todai` },
    residencyBounds: Lte.map((e) => ({ ...e })),
    claims: Sh
      ? []
      : Rte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
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
    streetNames: Sh
      ? []
      : [
          {
            axis: `x`,
            at: Wn.at,
            from: Wn.from,
            to: Wn.to,
            zh: `菊坂`,
            en: `Kikuzaka`,
            ja: `菊坂`,
          },
        ],
    missionAnchors: zte,
    load: () =>
      Sh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-hongo-D07gR5X4.js`)
                .then((e) => e.n)
                .then((e) => (Ch = e)),
            __vite__mapDeps([28, 1, 3, 2, 5, 4, 6, 7, 27]),
          ),
    registerMissions() {},
    unload(e) {
      Ch?.unload(e);
    },
    prewarm(e) {
      if (!Sh) return Un(e, `hongo`);
    },
    keepResident() {
      return !1;
    },
  },
  wh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`roppongi`) === `0`,
  Th = null,
  Eh = null,
  Dh = new Map();
function Wle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = Dh.get(t);
  if (n) return n;
  Eh ||
    ((Eh = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Eh.needsUpdate = !0),
    (Eh.name = `roppongi-proto`));
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
      map: Eh,
      batched: !0,
      name: `roppongi`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `roppongi:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    Dh.set(t, n),
    n
  );
}
var Gle = {
    id: `roppongi`,
    name: { zh: `六本木・赤坂`, en: `Roppongi & Akasaka` },
    residencyBounds: Ute.map((e) => ({ ...e })),
    claims: wh
      ? []
      : Wte.map((e) => ({ ...e.box, scope: `buildings`, label: e.label })),
    honorPois: wh
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
    missionAnchors: Gte,
    load: () =>
      wh
        ? Promise.resolve({})
        : t(
            () =>
              import(`./region-tokyo-d-roppongi-Cde5Mv3w.js`)
                .then((e) => e.n)
                .then((e) => (Th = e)),
            __vite__mapDeps([29, 1, 3, 2, 5, 4, 6, 7]),
          ),
    storefront: (e) => Th?.storefront(e) ?? null,
    registerMissions() {},
    unload(e) {
      Th?.unload(e);
    },
    prewarm(e) {
      if (!wh) return Wle(e);
    },
    keepResident() {
      return !1;
    },
  },
  Oh =
    typeof location < `u` &&
    new URLSearchParams(location.search).get(`asakusa`) === `0`,
  kh = null,
  Ah = null,
  jh = new Map();
function Kle(e) {
  let t = `${e.quality.materials}|${e.quality.shadows ? `s` : ``}`,
    n = jh.get(t);
  if (n) return n;
  Ah ||
    ((Ah = new c(new Uint8Array([255, 255, 255, 255]), 1, 1)),
    (Ah.needsUpdate = !0),
    (Ah.name = `asakusa-proto`));
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
      map: Ah,
      batched: !0,
      name: `asakusa`,
    }),
    a = new b(2, 3, 3, i);
  a.name = `asakusa:prewarm`;
  let o = a.addGeometry(r);
  return (
    a.addInstance(o),
    (a.castShadow = !!e.quality.shadows),
    (a.receiveShadow = !0),
    (a.frustumCulled = !1),
    (n = [a]),
    jh.set(t, n),
    n
  );
}
