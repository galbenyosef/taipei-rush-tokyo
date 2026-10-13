// tokyo__assets__game-y-FF2uWA 06 — min
// Lines 2561-2908 of readable/tokyo__assets__game-y-FF2uWA.pretty.js (statement-aligned).
typeof window < `u` && (window.__loadTimeline = ut);
function U(e) {
  ut.push([e, Math.round(performance.now())]);
}
var dt = (e) =>
  (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
  (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas);
function W(e) {
  let t = e.attributes.position;
  if (!t || !(t.count > 0)) return !1;
  let n = t.__gpu || t.data?.__gpu,
    r = e.index;
  return !n || (!!r && !r.__gpu && r.count > 0);
}
function G(e) {
  let t = e.index ? e.index.array.byteLength : 0;
  for (let n in e.attributes) t += e.attributes[n].array?.byteLength ?? 0;
  return t;
}
function ft(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`;
}
function pt() {
  return new Promise((e) =>
    requestAnimationFrame(() => requestAnimationFrame(() => e())),
  );
}
var K = typeof MessageChannel < `u` ? new MessageChannel() : null,
  mt = [];
K &&
  (K.port1.onmessage = () => {
    mt.shift()?.();
  });
function q() {
  return K
    ? new Promise((e) => {
        (mt.push(e), K.port2.postMessage(0));
      })
    : new Promise((e) => setTimeout(e, 0));
}
function ht(e) {
  return {
    identity: e.identity,
    name: e.name,
    currency: e.currency,
    drivingSide: e.drivingSide,
    signage: e.signage,
    utcOffsetHours: e.utcOffsetHours,
    env: e.env,
  };
}
var gt = `tokyo`,
  J = { x: 66, z: 40 };
function _t(e) {
  e.ui.addBlip(`haneda-limousine`, {
    x: J.x,
    z: J.z,
    icon: `landmark`,
    glyph: `✈`,
    color: `#c8102e`,
    label: {
      zh: `八重洲 機場巴士 · 搭機回臺北`,
      en: `Yaesu airport bus · fly back to Taipei`,
    },
  });
}
function vt() {
  return [
    {
      x0: 62.5,
      x1: 71,
      z0: J.z - 9,
      z1: J.z + 9,
      name: Ct.name,
      marks: [{ x: J.x, z: J.z }],
    },
  ];
}
function yt() {
  return null;
}
function bt() {
  return { x: J.x, z: J.z + 3, heading: -Math.PI / 2 };
}
function xt() {
  return [];
}
function St() {
  return null;
}
var Ct = {
    name: {
      zh: `東京車站 八重洲口 機場巴士 · 狂飆航空市區預辦登機`,
      en: `Tokyo Station Yaesu airport bus · RUSH AIR in-town check-in`,
    },
    prompt: {
      zh: `按 {interact} 市區預辦登機 · 狂飆航空`,
      en: `Press {interact} for in-town check-in · RUSH AIR`,
    },
    where: { zh: `東京車站 八重洲口`, en: `Tokyo Station, Yaesu side` },
  },
  wt = {
    zh: `羽田的機場巴士停在東京車站八重洲口：你的東京從這裡開始。`,
    en: `The airport bus from Haneda stops at Tokyo Station, Yaesu side — your Tokyo starts here.`,
  },
  Tt = {
    zh: `通緝中，巴士站有警察盯著！先甩掉警察再來登機。`,
    en: `You're wanted — police are watching the bus stop. Lose them first.`,
  },
  Et = [
    {
      min: 450,
      flight: `YM 101`,
      to: { zh: `大阪伊丹`, en: `Osaka Itami` },
      gate: `12`,
      airline: { zh: `大和航空`, en: `YAMATO AIR` },
    },
    {
      min: 545,
      flight: `SW 503`,
      to: { zh: `札幌新千歲`, en: `Sapporo New Chitose` },
      gate: `64`,
      airline: { zh: `櫻花航空`, en: `SAKURA WINGS` },
    },
    {
      min: 645,
      flight: `YM 873`,
      to: { zh: `首爾金浦`, en: `Seoul Gimpo` },
      gate: `110`,
      airline: { zh: `大和航空`, en: `YAMATO AIR` },
    },
    {
      min: 740,
      flight: `SW 251`,
      to: { zh: `福岡`, en: `Fukuoka` },
      gate: `58`,
      airline: { zh: `櫻花航空`, en: `SAKURA WINGS` },
    },
    {
      min: 840,
      flight: `YM 855`,
      to: { zh: `香港`, en: `Hong Kong` },
      gate: `112`,
      airline: { zh: `大和航空`, en: `YAMATO AIR` },
    },
    {
      min: 940,
      flight: `SW 993`,
      to: { zh: `那霸`, en: `Naha` },
      gate: `61`,
      airline: { zh: `櫻花航空`, en: `SAKURA WINGS` },
    },
    {
      min: 1035,
      flight: `YM 891`,
      to: { zh: `上海虹橋`, en: `Shanghai Hongqiao` },
      gate: `107`,
      airline: { zh: `大和航空`, en: `YAMATO AIR` },
    },
    {
      min: 1170,
      flight: `SW 127`,
      to: { zh: `大阪伊丹`, en: `Osaka Itami` },
      gate: `14`,
      airline: { zh: `櫻花航空`, en: `SAKURA WINGS` },
    },
    {
      min: 1310,
      flight: `YM 523`,
      to: { zh: `札幌新千歲`, en: `Sapporo New Chitose` },
      gate: `66`,
      airline: { zh: `大和航空`, en: `YAMATO AIR` },
    },
  ],
  Y = {
    departed: { zh: `已起飛`, en: `DEPARTED` },
    boarding: { zh: `登機中`, en: `BOARDING` },
    closed: { zh: `停止辦理`, en: `CLOSED` },
    onTime: { zh: `準時`, en: `ON TIME` },
  };
function Dt(e) {
  let t = Math.floor(e * 60),
    n = Et.filter((e) => e.min < t).slice(-1),
    r = Et.filter((e) => e.min >= t).slice(0, 4);
  return [...n, ...r].map((e) => ({
    time: e.min,
    flight: e.flight,
    to: e.to,
    gate: e.gate,
    airline: e.airline,
    remark:
      e.min < t
        ? Y.departed
        : e.min - t < 30
          ? Y.boarding
          : e.min - t < 75
            ? Y.closed
            : Y.onTime,
  }));
}
async function Ot(e) {}
function kt(e) {}
var At = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e));
async function jt(e) {
  let t = null;
  try {
    t = await Mt(e);
  } catch (e) {
    console.warn(`[travel] the film jet could not be built`, e);
  }
  let n = new u(),
    r = new i(),
    a = new o(0, 0, 0, `YXZ`),
    c = new l(1, 1, 1),
    d = new l(),
    f = new s(),
    p = new l(60, 20, 60),
    m = 3.8,
    h = 5.6,
    g = new l(380, 230, 820),
    _ = new l(-320, 300, 760),
    v = new l(40, 70, 700),
    y = (e, t) => t.lerpVectors(g, _, Math.max(0, Math.min(1, e / h)));
  return {
    shots: [
      {
        dur: m,
        cam(e, t, n) {
          let r = At(e / m);
          return (
            t.set(70.5 - 0.6 * r, 1.5, 46 + 1.2 * r),
            n.set(18, 28 + 120 * r, 4),
            60
          );
        },
      },
      {
        dur: h,
        cam(e, t, n) {
          return (
            t.set(75, 38, 300 + 3 * e),
            y(e, d),
            n.lerpVectors(v, d, 0.42),
            54
          );
        },
      },
    ],
    tick(e) {
      if (!t) return;
      let i = t.batch;
      if (e < m) {
        i.enable(0, !1);
        return;
      }
      (y(e - m, d),
        a.set(0.12, Math.PI / 2 + 0.06, 0.06),
        r.setFromEuler(a),
        n.compose(d, r, c),
        f.setFromCenterAndSize(d, p),
        i.setFree(0, !0),
        i.enable(0, !0),
        i.setMatrix(0, n, f),
        i.refreshBounds(),
        (i.mesh.visible = !0));
    },
    sound() {
      return { x: d.x, y: d.y, z: d.z, thrust: 0.85 };
    },
    end() {
      (t?.dispose(), (t = null));
    },
  };
}
async function Mt(t) {
  let [
      { MeshBuilder: n },
      { PackSigns: r },
      { BatchPlan: i },
      { packMaterial: a },
      { AIRLINER_SIGNS: o, buildAirliner: s },
    ] = await Promise.all([
      e(
        () => import(`./world-Bo9wkXrT.js`).then((e) => e.tt),
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ]),
      ),
      e(
        () => import(`./signs-CcdyXn0R.js`),
        __vite__mapDeps([
          20, 3, 1, 4, 2, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19,
        ]),
      ),
      e(() => import(`./batch-CN-kL9Gb.js`), __vite__mapDeps([21, 3, 1])),
      e(
        () => import(`./material-3lv29trB.js`),
        __vite__mapDeps([22, 3, 1, 4, 2, 5, 6]),
      ),
      e(
        () => import(`./airliner-Bx-acqWB.js`),
        __vite__mapDeps([
          23, 4, 1, 2, 3, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19,
        ]),
      ),
    ]),
    c = await r.create(
      Object.fromEntries(
        [`rx-title`, `rx-logo`, `cabin-win`].map((e) => [e, o[e]]),
      ),
      t.quality.textureScale,
      4,
      () => t.yieldFrame(),
      `film-jet`,
    ),
    l = new n(4096);
  s(l, c, `rush`, !1);
  let u = new i();
  (u.instance(u.geometry(l.build()), {
    dist: 9e3,
    name: `film-jet`,
    hidden: !0,
  }),
    l.release());
  let d = a(t, c.texture, `film-jet`),
    f = await u.build(d.mat, `film-jet`);
  return (
    (f.mesh.frustumCulled = !1),
    t.scene.add(f.mesh),
    d.resolve(),
    {
      batch: f,
      dispose() {
        (t.scene.remove(f.mesh),
          f.dispose(),
          c.texture.dispose(),
          d.mat.dispose());
      },
    }
  );
}
var X = { arrival: null, cancelled: null },
  Nt = !1;
function Pt() {
  return X;
}
