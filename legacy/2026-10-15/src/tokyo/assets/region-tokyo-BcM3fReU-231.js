// tokyo/assets/region-tokyo-BcM3fReU 231 — desc
// Lines 93985-94326 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function BZ(e, t) {
  return e === `mamachari` && (DZ(t), !0);
}
var VZ = [
    { kind: `sedan`, day: 18, night: 14, profile: `sedan` },
    { kind: `suv`, day: 8, night: 6, profile: `suv` },
    { kind: `kei`, day: 14, night: 8, profile: `sedan` },
    { kind: `taxi`, day: 14, night: 30, profile: `taxi` },
    { kind: `cab`, day: 4, night: 8, profile: `taxi` },
    { kind: `van`, day: 12, night: 4, profile: `van` },
    { kind: `truck`, day: 5, night: 1.5, profile: `truck` },
    { kind: `bus`, day: 2, night: 1, profile: `bus`, majorOnly: !0 },
    { kind: `police`, day: 1, night: 2, profile: `police` },
    {
      kind: `scooter`,
      day: 3.5,
      night: 2.5,
      profile: `scooter`,
      twoWheeler: !0,
    },
    {
      kind: `motorcycle`,
      day: 1,
      night: 0.8,
      profile: `motorcycle`,
      twoWheeler: !0,
    },
    {
      kind: `superbike`,
      day: 0.5,
      night: 1,
      profile: `superbike`,
      majorOnly: !0,
    },
    {
      kind: `mamachari`,
      day: 5,
      night: 1.5,
      profile: `bicycle`,
      twoWheeler: !0,
    },
  ],
  HZ = {
    ginza: {
      taxi: 2.2,
      cab: 2,
      kei: 0.6,
      truck: 0.5,
      mamachari: 0.6,
      sedan: 1.1,
      superbike: 1.3,
    },
    marunouchi: {
      taxi: 2.4,
      cab: 1.6,
      kei: 0.5,
      truck: 0.3,
      mamachari: 0.5,
      van: 0.8,
      bus: 1.5,
    },
    nihonbashi: { taxi: 1.5, cab: 1.3, van: 1.2, kei: 0.8 },
    shimbashi: { taxi: 1.6, cab: 1.5, mamachari: 0.8 },
    kanda: { van: 1.3, truck: 1.4, kei: 1.2, taxi: 0.9 },
    akihabara: { van: 1.3, truck: 1.2, mamachari: 1.2, taxi: 0.8 },
    ameyoko: { truck: 1.6, kei: 1.4, mamachari: 1.5, scooter: 1.3, taxi: 0.7 },
    ueno: { truck: 1.3, kei: 1.3, mamachari: 1.4, taxi: 0.9, bus: 1.3 },
    "tokyo-east-generic": { kei: 1.3, mamachari: 1.3, truck: 1.2 },
  };
function UZ(e, t, n) {
  let r;
  for (let t = 0; t < VZ.length; t++) VZ[t].kind === e && (r = VZ[t]);
  if (!r) return 0;
  let i = (t && HZ[t]?.[e]) ?? 1;
  return (n ? r.night : r.day) * i;
}
var WZ = {
    car: [
      [`kei`, 22],
      [`sedan`, 14],
      [`van`, 18],
      [`truck`, 12],
      [`suv`, 8],
      [`taxi`, 8],
      [`cab`, 3],
      [`sports`, 2],
    ],
    two: [
      [`mamachari`, 50],
      [`scooter`, 35],
      [`motorcycle`, 10],
      [`superbike`, 5],
    ],
    twoMinor: 0.7,
    twoMajor: 0.65,
    narrowClear: 16,
    carNodeClear: 15,
    start: [
      [`scooter`, 3.5, 11],
      [`mamachari`, 3.5, 12],
      [`superbike`, 8, 26],
    ],
  },
  GZ = Math.PI / 2,
  KZ = 1.45 + 0.35,
  qZ = [-1052, -1050, -1048, -1046, -1044].map((e, t) => ({
    kind: `swan`,
    x: mg.minX + KZ,
    z: e,
    heading: GZ,
    seed: (t + 1) / 7,
  })),
  JZ = [`kei`, `cab`, `mamachari`, `swan`, `kart`],
  YZ = [
    { zh: `外送城`, en: `Demae-jo`, colors: [`#e60012`, `#ffffff`, `#000000`] },
    { zh: `熊愛送`, en: `BearEats`, colors: [`#161616`, `#06c167`, `#ffffff`] },
  ];
function XZ(e) {
  (VX(e.sans),
    qX(e.sans),
    Ke({
      kinds: JZ,
      specs: eZ,
      handling: nZ,
      variants: iZ,
      shadow: rZ,
      riderPose: { mamachari: tZ },
      steerPivot: { mamachari: TZ },
      spokeWheels: [`mamachari`],
      centreStand: [`mamachari`],
      build: RZ,
      buildSteer: BZ,
      paintAtlas: JX,
      parked: WZ,
      delivery: YZ,
    }),
    typeof location < `u` &&
      /[?&]kart=/.test(location.search) &&
      !globalThis.__kartQaArmed &&
      ((globalThis.__kartQaArmed = !0),
      t(
        () =>
          Promise.resolve()
            .then(() => aie)
            .then((e) => e.armKartQa()),
        void 0,
      ).catch((e) => console.warn(`[karts] QA mission unavailable`, e))));
}
var ZZ = 9679574,
  QZ = 1712435,
  $Z = 1910328,
  eQ = 1975084;
function tQ(e) {
  return {
    ...e,
    top: { style: `shirt`, color: ZZ, sleeve: `long`, tucked: !0 },
    outer: { style: `vest`, color: $Z, color2: $Z, closed: !0 },
    bottom: { style: `slacks`, color: QZ, belt: 921104 },
    shoes: { style: `dress`, color: 986897 },
    acc: e.acc?.some((e) => e.kind === `policeCap`)
      ? [{ kind: `policeCap`, color: QZ, color2: 921362 }, { kind: `watch` }]
      : e.acc,
  };
}
function nQ() {
  let e = Cn;
  ((e[0].desc = tQ(e[0].desc)),
    (e[0].desc.name = { zh: `日本巡邏警察`, en: `Patrol officer` }),
    (e[0].desc.skin = He.light),
    (e[1].desc = tQ(e[1].desc)),
    (e[1].desc.name = { zh: `日本巡邏警察`, en: `Patrol officer` }),
    (e[1].desc.skin = He.fair),
    (e[1].desc.hair = { style: `sidepart`, color: Ve.black }),
    (e[1].desc.face = ze({
      jaw: 0.55,
      length: 0.55,
      cheek: 0.5,
      eyeSize: 0.95,
      eyeTilt: 0.05,
      lid: 0.3,
      noseW: 0.5,
      bridge: 0.4,
      lips: 0.45,
      brow: 0.6,
      browArch: 0.25,
      smile: 0.08,
    })),
    (e[2].desc = tQ(e[2].desc)),
    (e[2].desc.name = { zh: `日本女警`, en: `Policewoman` }),
    (e[3].desc = tQ(e[3].desc)),
    (e[3].desc.name = { zh: `日本機車警察`, en: `Police scooter officer` }),
    (e[3].desc.skin = He.light));
  for (let t of [4, 5]) {
    let n = e[t].desc;
    ((n.name = { zh: `特殊急襲部隊（SAT）`, en: `SAT tactical officer` }),
      (n.top = { ...n.top, color: eQ }),
      (n.outer = {
        style: `vest`,
        color: 2501686,
        color2: 2501686,
        closed: !0,
      }),
      (n.bottom = { ...n.bottom, color: 2040876 }));
  }
  ((e[1].tone = rQ(e[1].desc.skin) / rQ(e[0].desc.skin)),
    (e[5].tone = rQ(e[5].desc.skin) / rQ(e[4].desc.skin)),
    (_n.badge = 13159634),
    (_n.sleeve = ZZ),
    (_n.trouser = QZ),
    (_n.swatSleeve = eQ),
    (_n.swatTrouser = 2040876),
    (_n.swatPanel = 2764858),
    (_n.swatPouch = 3159615),
    (_n.patchNavy = 2042703),
    (_n.motoTrim = 2047370));
}
function rQ(e) {
  let t = ((e >> 16) & 255) / 255,
    n = ((e >> 8) & 255) / 255,
    r = (e & 255) / 255,
    i = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
  return 0.2126 * i(t) + 0.7152 * i(n) + 0.0722 * i(r);
}
var iQ = (e) => rc(e).ja;
function aQ(e, t) {
  let n = (n, r, i) => {
    ((e.fillStyle = `#23272e`),
      e.fillRect(0, n, 512, r),
      (e.strokeStyle = `rgba(255,255,255,0.14)`),
      (e.lineWidth = 3),
      e.setLineDash([7, 5]),
      e.strokeRect(10, n + 8, 492, r - 16),
      e.setLineDash([]),
      (e.fillStyle = `#eef0f2`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      i
        ? ((e.font = `900 62px ${t}`),
          e.fillText(iQ(`police.word`), 256, n + r * 0.36),
          (e.font = `900 40px ${t}`),
          e.fillText(iQ(`police.org`), 256, n + r * 0.77))
        : ((e.font = `900 78px ${t}`),
          e.fillText(iQ(`police.word`), 256, n + r * 0.52)));
  };
  (n(0, 128, !0),
    n(128, 128, !1),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.fillStyle = `#eef1f4`),
    (e.font = `900 66px ${t}`),
    e.fillText(iQ(`police.vest.back`), 128, 302),
    (e.font = `800 32px ${t}`),
    e.fillText(`P O L I C E`, 128, 357),
    (e.fillStyle = `#1f2d4f`),
    (e.font = `900 74px ${t}`),
    e.fillText(iQ(`police.helmet`), 384, 318),
    e.fillRect(292, 364, 184, 7),
    e.save(),
    e.beginPath(),
    e.moveTo(14, 392),
    e.lineTo(114, 392),
    e.lineTo(114, 462),
    e.quadraticCurveTo(112, 492, 64, 508),
    e.quadraticCurveTo(16, 492, 14, 462),
    e.closePath(),
    (e.fillStyle = `#18223f`),
    e.fill(),
    (e.lineWidth = 6),
    (e.strokeStyle = `#c9ced6`),
    e.stroke(),
    (e.fillStyle = `#d9b44a`),
    e.beginPath());
  for (let t = 0; t < 10; t++) {
    let n = (t / 10) * Math.PI * 2 - Math.PI / 2,
      r = t % 2 ? 9 : 24;
    e.lineTo(64 + Math.cos(n) * r, 436 + Math.sin(n) * r);
  }
  (e.closePath(),
    e.fill(),
    (e.fillStyle = `#f2f0e8`),
    e.beginPath(),
    e.arc(64, 436, 6, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#e8ebef`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `900 22px ${t}`),
    e.fillText(iQ(`police.patch.arm`), 64, 478),
    e.restore());
}
function oQ(e, t) {
  ((e.fillStyle = `#ffffff`),
    (e.font = `900 38px ${t}`),
    e.fillText(`${iQ(`police.org`)}  ${iQ(`police.word`)}`, 192, 33),
    (e.fillStyle = `#1b3a7a`),
    (e.font = `800 44px ${t}`),
    e.fillText(iQ(`police.air.reg`), 128, 96),
    (e.font = `800 34px ${t}`),
    e.fillText(iQ(`police.air.unit`), 384, 96));
}
function sQ(e, t) {
  ((e.shadowColor = `#ff2a1a`),
    (e.shadowBlur = 10),
    (e.fillStyle = `#ff3b24`),
    (e.font = `900 58px ${t}`),
    e.fillText(iQ(`police.roadblock.title`), 128, 50),
    (e.shadowColor = `#ffb21a`),
    (e.shadowBlur = 6),
    (e.fillStyle = `#ffc23a`),
    (e.font = `900 34px ${t}`),
    e.fillText(iQ(`police.roadblock.stop`), 128, 104),
    (e.shadowBlur = 0),
    (e.fillStyle = `#e8e8e8`),
    (e.font = `700 17px ${t}`),
    e.fillText(iQ(`police.word`), 128, 138));
}
function cQ(e) {
  return (t, n) => (
    Wi(n.canvas, n),
    t === `gear` ? aQ(n, e) : t === `heli` ? oQ(n, e) : sQ(n, e),
    !0
  );
}
var lQ = (e) => e.ja ?? e.zh;
function uQ(e, t, n, r) {
  let i = rc(e);
  return {
    zh: t ? oa(i.zh ?? i.ja, t) : (i.zh ?? i.ja),
    en: n ? oa(i.en ?? i.ja, n) : (i.en ?? i.ja),
    ja: r ? oa(i.ja, r) : i.ja,
  };
}
function dQ(e) {
  let t = rc(e);
  return {
    ja: t.ja,
    zh: `「${t.ja}」${t.zh ?? ``}`,
    en: `「${t.ja}」 ${t.en ?? ``}`,
  };
}
var fQ = (e, t) =>
  Array.from({ length: t }, (t, n) => dQ(`police.bark.${e}.${n + 1}`));
