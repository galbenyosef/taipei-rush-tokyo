// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 57 — pending
// Lines 22949-23240 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function nl(e, t, n) {
  let r = e.m.heroArrays();
  return (
    n && Ca(r.rect, n),
    {
      arrays: r,
      page: t,
      joints: e.b.joints.p,
      height: e.b.H,
      triangles: e.m.triangleCount,
      breakdown: e.breakdown,
      trim: e.trim,
    }
  );
}
function rl(e) {
  return e.atlas === void 0 ? Ra() : e.atlas;
}
const il = /* @__PURE__ */ new WeakMap();
let al = 1;
const ol = /* @__PURE__ */ new Map();
let sl = null;
function cl() {
  (sl !== null && clearTimeout(sl), (sl = null), ol.clear(), ja(), Ba());
}
function ll() {
  (sl !== null && clearTimeout(sl),
    (sl = setTimeout(() => {
      ((sl = null), vl.size || _l.length ? ll() : cl());
    }, 3e4)));
}
function ul(e, t, n, r) {
  let i = 0;
  return (
    n && ((i = il.get(n) ?? 0), i || il.set(n, (i = al++))),
    `${i}|${t}|${r.faceRes ?? ``}|${r.skip?.join(`,`) ?? ``}|${JSON.stringify(e)}`
  );
}
function dl(e) {
  let t = e.arrays;
  return {
    ...e,
    arrays: {
      pos: t.pos.slice(),
      nor: t.nor.slice(),
      col: t.col.slice(),
      uv: t.uv.slice(),
      rect: t.rect.slice(),
      surf: t.surf.slice(),
      si: t.si.slice(),
      sw: t.sw.slice(),
      idx: t.idx.slice(),
      n0: t.n0,
      bounds: t.bounds ?? Jr(t.pos),
    },
    joints: e.joints.map((e) => e.clone()),
  };
}
function fl(e) {
  let t = ol.get(e);
  return t ? (ol.delete(e), ol.set(e, t), ll(), dl(t)) : null;
}
function pl(e, t) {
  for (ol.set(e, dl(t)); ol.size > 8;) ol.delete(ol.keys().next().value);
  ll();
}
function ml(e, t = {}) {
  return Jc(hl(e, t));
}
function* hl(e, t = {}) {
  return tl(e, t.lod ?? 0, yield* gl(e, t));
}
function* gl(e, t) {
  let n = t.lod ?? 0,
    r = rl(t),
    i = ul(e, n, r, t),
    a = fl(i);
  if (a) return a;
  let o = yield* qc(e, {
      lod: n,
      textured: n === 0 && !!r,
      conform: !1,
      faceRes: t.faceRes,
      skip: t.skip,
    }),
    s = null,
    c = null;
  if (o.tiles && r) {
    yield;
    let e = yield* r.resolveSteps(o.tiles.reqs);
    ((s = e.page), (c = e.rects), r.flush());
  }
  let l = nl(o, s, c);
  return (pl(i, l), l);
}
new (class {
  w = null;
  seq = 1;
  pending = /* @__PURE__ */ new Map();
  broken = !1;
  noPaint = !1;
  built = 0;
  workerMs = 0;
  applyMs = 0;
  applyMax = 0;
  noteApply(e) {
    ((this.applyMs += e), (this.applyMax = Math.max(this.applyMax, e)));
  }
  start() {
    if (this.w || this.broken) return this.w;
    if (typeof Worker > `u`) return ((this.broken = !0), null);
    try {
      let e = new Worker(
        new URL(
          /* @vite-ignore */
          `/tokyo/assets/charWorker-DPNUr-Eu.js`,
          `` + import.meta.url,
        ),
        { type: `module` },
      );
      ((e.onmessage = (e) => {
        this.lastReply = performance.now();
        let t = e.data,
          n = this.pending.get(t.id);
        n &&
          (this.pending.delete(t.id),
          t.error
            ? n.reject(Error(t.error))
            : (this.built++, (this.workerMs += t.ms ?? 0), n.resolve(t)));
      }),
        (e.onerror = (e) => {
          (e.preventDefault?.(),
            console.warn(
              `[characters] build worker unavailable — building on the main thread (sliced)`,
            ),
            this.fail());
        }),
        (this.w = e));
    } catch {
      this.broken = !0;
    }
    return this.w;
  }
  lastReply = 0;
  watchT = 0;
  watch() {
    if (this.watchT || this.broken) return;
    let e = this.lastReply + el - performance.now();
    this.watchT = setTimeout(
      () => {
        if (((this.watchT = 0), this.pending.size && !this.broken)) {
          if (performance.now() - this.lastReply < 15e3) return this.watch();
          (console.warn(
            `[characters] build worker silent for ${el / 1e3} s — building on the main thread (sliced)`,
          ),
            this.fail());
        }
      },
      Math.max(250, e),
    );
  }
  fail() {
    ((this.broken = !0), this.w?.terminate(), (this.w = null));
    let e = [...this.pending.values()];
    this.pending.clear();
    for (let t of e) t.reject(/* @__PURE__ */ Error(`worker failed`));
  }
  run(e) {
    let t = this.start();
    if (!t) return null;
    let n = this.seq++,
      r = { ...e, id: n };
    return new Promise((e, i) => {
      (this.pending.size || (this.lastReply = performance.now()),
        this.pending.set(n, { resolve: e, reject: i, job: r }),
        this.watch());
      try {
        t.postMessage(r);
      } catch (e) {
        (this.pending.delete(n), i(e));
      }
    });
  }
  get inFlight() {
    return this.pending.size;
  }
})();
const _l = [],
  vl = /* @__PURE__ */ new Map(),
  yl = {
    porcelain: 15980224,
    fair: 15518125,
    light: 14990748,
    medium: 14199428,
    tan: 13211248,
    deep: 11566682,
  },
  bl = {
    black: 1709073,
    softBlack: 2431766,
    darkBrown: 3022873,
    brown: 4862498,
    ash: 6970450,
    auburn: 5909022,
    grey: 9407108,
    white: 13223359,
  };
function Q(e = {}) {
  return {
    jaw: 0.5,
    length: 0.5,
    cheek: 0.5,
    eyeSize: 1,
    eyeTilt: 0.1,
    eyeGap: 1,
    lid: 0.5,
    noseW: 0.5,
    noseL: 0.5,
    bridge: 0.4,
    lips: 0.5,
    mouthW: 1,
    brow: 0.5,
    browArch: 0.4,
    iris: 3810328,
    lipColor: 0,
    blush: 0.1,
    liner: 0,
    facial: `none`,
    wrinkles: 0,
    mole: 0,
    smile: 0.1,
    ...e,
  };
}
const $ = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e));
(Q({
  jaw: 0.58,
  length: 0.45,
  cheek: 0.55,
  eyeSize: 1.02,
  eyeTilt: 0.14,
  lid: 0.42,
  noseW: 0.5,
  bridge: 0.55,
  lips: 0.42,
  mouthW: 1.02,
  brow: 0.8,
  browArch: 0.3,
  smile: 0.3,
  facial: `stubble`,
  iris: 3021842,
}),
  $(
    { kind: `watch`, color: 1118483, color2: 13685976 },
    { kind: `necklace`, color: 14278112 },
  ),
  Q({
    jaw: 0.3,
    length: 0.5,
    cheek: 0.55,
    eyeSize: 1.08,
    eyeTilt: 0.2,
    eyeGap: 1,
    lid: 0.62,
    noseW: 0.35,
    noseL: 0.45,
    bridge: 0.55,
    lips: 0.62,
    mouthW: 0.95,
    brow: 0.45,
    browArch: 0.6,
    lipColor: 12863311,
    blush: 0.25,
    liner: 0.75,
    mole: 1,
    smile: 0.05,
    iris: 3350543,
  }),
  $(
    { kind: `necklace`, color: 15257738 },
    { kind: `watch`, color: 15328474, color2: 13215850 },
    { kind: `earbuds` },
  ));
function xl(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? Sl(e), ...r };
}
function Sl(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
