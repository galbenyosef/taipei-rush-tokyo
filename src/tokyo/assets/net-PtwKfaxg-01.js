// tokyo/assets/net-PtwKfaxg 01 — math
// Lines 1-306 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/api-CqQ1pZ52.js",
      "assets/avatar-Cm3dja-U.js",
      "assets/three-C4coU-vx.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/engine-14d5lda2.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/ja-anaGONx4.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/shared-BaQwRjes.js",
      "assets/characters-p5grEi98.js",
      "assets/tokyo-CqLdAwml.js",
      "assets/game-DQ7TeBJx.js",
      "assets/actors-bknSEpf2.js",
      "assets/prefs-zGhi31Iu.js",
      "assets/world-CVm1JHks.js",
      "assets/icons-Md4jzY0j.js",
      "assets/dom-BCt0vy2n.js",
      "assets/strings-nmBOf9Pn.js",
      "assets/audio-BTLLtCvZ.js",
      "assets/region-tokyo-A7LxHjud.js",
      "assets/region-tokyo-d-akihabara-UGh9Bzey.js",
      "assets/region-tokyo-d-ueno-DfmWW0p_.js",
      "assets/region-tokyo-d-ameyoko-CVt_89lm.js",
      "assets/region-tokyo-d-suidobashi-CZ63KPtp.js",
      "assets/region-tokyo-d-hongo-D07gR5X4.js",
      "assets/region-tokyo-d-kanda-DcnnktoK.js",
      "assets/region-tokyo-d-roppongi-Cde5Mv3w.js",
      "assets/tokyo-CAUNbJt2.css",
      "assets/stats-CnSkeCaG.js",
      "assets/session-DVEw0yxj.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./preload-helper-DZce6yc-.js";
import {
  Et as n,
  Mt as r,
  Rt as i,
  Tt as a,
  Y as o,
  k as s,
  m as c,
  or as l,
  sr as u,
} from "./three-C4coU-vx.js";
import {
  Fr as d,
  Mn as f,
  Nn as p,
  Pn as m,
  Rn as h,
  kr as g,
  rt as _,
  yn as v,
} from "./engine-14d5lda2.js";
import {
  a as ee,
  c as te,
  i as y,
  n as ne,
  o as re,
  r as ie,
  s as ae,
  t as oe,
} from "./game-DQ7TeBJx.js";
import { P as b, a as se, d as ce, s as x } from "./characters-p5grEi98.js";
import {
  $t as le,
  Qt as S,
  Zt as ue,
  an as de,
  en as fe,
  in as pe,
  on as me,
  rn as he,
  sn as ge,
} from "./actors-bknSEpf2.js";
import { i as _e } from "./session-DVEw0yxj.js";
import { t as ve } from "./icons-Md4jzY0j.js";
import { r as ye } from "./prefs-zGhi31Iu.js";
import { G as be, U as xe, V as Se, W as Ce } from "./tokyo-CqLdAwml.js";
var we = [`foot`, `vehicle`, `dead`, `busted`, `cutscene`],
  Te = [
    `idle`,
    `walk`,
    `run`,
    `sprint`,
    `jump`,
    `swim`,
    `drive`,
    `ride`,
    `knockdown`,
    `aim`,
    `dead`,
  ],
  Ee = [`fists`, `bat`, `pistol`, `smg`];
function De(e) {
  let t = Ee.indexOf(e);
  return t <= 0 ? 0 : (t & 1 ? 1 : 0) | (t & 2 ? 128 : 0);
}
function Oe(e) {
  return Ee[(e & 1 ? 1 : 0) | (e & 128 ? 2 : 0)];
}
function ke() {
  return {
    slot: 0,
    seq: 0,
    t: 0,
    x: 0,
    y: 0,
    z: 0,
    heading: 0,
    speed: 0,
    mode: 0,
    anim: 0,
    flags: 0,
    vehicle: 0,
    pitch: 0,
    roll: 0,
    heave: 0,
    surge: 0,
  };
}
var C = Math.PI * 2;
function w(e) {
  let t = e % C;
  return (t < 0 && (t += C), Math.round((t / C) * 65536) & 65535);
}
function Ae(e) {
  return ((e & 65535) / 65536) * C;
}
var je = (e) => (e < 0 ? 0 : e > 255 ? 255 : e | 0),
  Me = (e) =>
    Math.round(Math.max(-4, Math.min(4, Number.isFinite(e) ? e : 0)) * 4096);
function Ne(e, t, n = 0) {
  return (
    e.setUint8(n, 1),
    e.setUint8(n + 1, je(t.slot)),
    e.setUint16(n + 2, t.seq & 65535, !0),
    e.setUint32(n + 4, t.t >>> 0, !0),
    e.setFloat32(n + 8, t.x, !0),
    e.setFloat32(n + 12, t.y, !0),
    e.setFloat32(n + 16, t.z, !0),
    e.setUint16(n + 20, w(t.heading), !0),
    e.setUint8(n + 22, je(Math.round(Math.abs(t.speed) * 2))),
    e.setUint8(n + 23, je(t.mode)),
    e.setUint8(n + 24, je(t.anim)),
    e.setUint8(n + 25, je(t.flags) | 64),
    e.setUint16(n + 26, t.vehicle & 65535, !0),
    e.setInt16(n + 28, Me(t.pitch), !0),
    e.setInt16(n + 30, Me(t.roll), !0),
    e.setInt16(n + 32, Me(t.heave), !0),
    e.setInt16(n + 34, Me(t.surge), !0),
    36
  );
}
function Pe(e, t, n = 0) {
  if (n < 0 || e.byteLength - n < 28 || e.getUint8(n) !== 1) return !1;
  let r = e.getFloat32(n + 8, !0),
    i = e.getFloat32(n + 12, !0),
    a = e.getFloat32(n + 16, !0);
  if (!Number.isFinite(r) || !Number.isFinite(i) || !Number.isFinite(a))
    return !1;
  ((t.slot = e.getUint8(n + 1)),
    (t.seq = e.getUint16(n + 2, !0)),
    (t.t = e.getUint32(n + 4, !0)),
    (t.x = r),
    (t.y = i),
    (t.z = a),
    (t.heading = Ae(e.getUint16(n + 20, !0))),
    (t.speed = e.getUint8(n + 22) / 2),
    (t.mode = e.getUint8(n + 23)),
    (t.anim = e.getUint8(n + 24)),
    (t.flags = e.getUint8(n + 25)),
    (t.vehicle = e.getUint16(n + 26, !0)));
  let o = e.byteLength - n >= 36 && !!(t.flags & 64);
  return (
    (t.pitch = o ? e.getInt16(n + 28, !0) / 4096 : 0),
    (t.roll = o ? e.getInt16(n + 30, !0) / 4096 : 0),
    (t.heave = o ? e.getInt16(n + 32, !0) / 4096 : 0),
    (t.surge = o ? e.getInt16(n + 34, !0) / 4096 : 0),
    !0
  );
}
function Fe(e, t) {
  e[1] = je(t);
}
function T(e, t) {
  return (e - t) | 0;
}
var Ie =
    `kind female height width belly stoop skin hair top bottom shoes accA accB accBase accMask cloth walkSpeed runSpeed brave umbrellaAt parasol umbColor headAccA seed variant vTop vBottom vOuter rightBusy x y z yTarget heading vx vz state stateT timer tx tz faceH idlePose pose poseW poseTarget phase gait headYaw headYawT fade fadeTarget dying pitch roll pitchV rollV vy cy air health maxHealth cashDropped limp bike brake seatY alive threatX threatZ fearT talkCd hitCd punchT punchCd daze a0 a1 ux uz fleeAfter phaseRate`.split(
      ` `,
    ),
  E =
    `kind halfW halfL height mass two heavy color cr cg cb T s0 a b vf latSpeed aLat reaction latPref seed mode link lane s lat latTarget latVel next nextLane nextLat turn two2 stage jEst jNode jFrom jAxis js jLen jOff jOffT jHoldS p0x p0z p1x p1z p2x p2z p3x p3z vTurn v acc x y z heading prevHeading yawRate lean pitch hOff committed blinker blinkT braking hazard panic stuck idle blocked ghost dwellS dwellT svx svz spin rest wrecked burnt abandoned health fireT burnT alert riderJ riderH riderAlt passenger box ponchoWearer mask`.split(
      ` `,
    ),
  Le =
    `x y z heading vx vz state stateT timer pose poseW poseTarget phase gait fade pitch roll cy health alive limp phaseRate accMask`.split(
      ` `,
    ),
  Re =
    `x y z heading v lean pitch health braking hazard abandoned wrecked mode s js svx svz spin fireT burnT alert`.split(
      ` `,
    ),
  D = (e, t) => `${Math.floor(e / 128)},${Math.floor(t / 128)}`;
function ze(e) {
  if (typeof e != `string` || !/^-?\d{1,4},-?\d{1,4}$/.test(e)) return null;
  let t = e.split(`,`).map(Number);
  return t.every((e) => Math.abs(e) <= 800) ? [t[0], t[1]] : null;
}
function Be(e, t) {
  return t.map((t) => {
    let n = e[t];
    return typeof n == `number`
      ? Math.round(n * 1e3) / 1e3
      : typeof n == `boolean` || typeof n == `string`
        ? n
        : 0;
  });
}
var O = new Set(
    `parasol headAccA rightBusy dying air cashDropped bike alive fleeAfter two heavy two2 committed braking hazard wrecked burnt abandoned passenger ponchoWearer mask`.split(
      ` `,
    ),
  ),
  k = new Set(
    `office student auntie uncle elder tourist vendor delivery monk worshipper`.split(
      ` `,
    ),
  ),
  A = new Set(
    `variant state pose poseTarget idlePose kind mode link lane next nextLane stage jNode jFrom jAxis turn accMask accBase accA accB cloth skin hair top bottom shoes vTop vBottom vOuter color riderJ riderH riderAlt box`.split(
      ` `,
    ),
  );
function j(e, t) {
  if (!Array.isArray(e) || e.length !== t.length) return null;
  let n = {};
  for (let r = 0; r < t.length; r++) {
    let i = e[r];
    if (
      typeof i == `number`
        ? !Number.isFinite(i) || Math.abs(i) > 1e9
        : typeof i == `string`
          ? i.length > 24
          : typeof i != `boolean`
    )
      return null;
    let a = t[r];
    if (O.has(a)) {
      if (typeof i != `boolean`) return null;
    } else if (a === `kind` && typeof i == `string`) {
      if (!k.has(i)) return null;
    } else if (typeof i != `number`) return null;
    if (
      typeof i == `number` &&
      ((A.has(a) && !Number.isInteger(i)) ||
        (a === `state` && (i < 0 || i > 16)) ||
        (a === `mode` && (i < 0 || i > 3)) ||
        (a === `kind` && (i < 0 || i > 9)) ||
        ([`pose`, `poseTarget`, `idlePose`].includes(a) && (i < 0 || i > 24)) ||
        (a === `health` && (i < -1e3 || i > 100)) ||
        (a === `maxHealth` && (i <= 0 || i > 100)) ||
        ([`halfW`, `halfL`, `height`, `width`].includes(a) &&
          (i <= 0 || i > 12)) ||
        (a === `mass` && (i < 30 || i > 3e4)) ||
        (a === `variant` && (i < -1 || i > 512)) ||
        ([`vx`, `vz`, `svx`, `svz`, `v`].includes(a) && Math.abs(i) > 150) ||
        ([`link`, `next`, `jFrom`, `jNode`].includes(a) &&
          (i < -1 || i > 1e5)) ||
        ([`lane`, `nextLane`].includes(a) && (i < 0 || i > 16)))
    )
      return null;
    n[a] = i;
  }
  return typeof n.x != `number` ||
    typeof n.y != `number` ||
    typeof n.z != `number` ||
    Math.abs(n.x) > 1e5 ||
    Math.abs(n.z) > 1e5 ||
    Math.abs(n.y) > 1e4 ||
    typeof n.heading != `number` ||
    Math.abs(n.heading) > 1e5
    ? null
    : n;
}
function M(e, t) {
  let n = ze(e);
  if (!n) return -1;
  let r = -1,
    i = 1 / 0;
  for (let e of t) {
    let t = Math.floor(e.x / 128) - n[0],
      a = Math.floor(e.z / 128) - n[1],
      o = t * t + a * a;
    o > 8 || ((o < i || (o === i && e.slot < r)) && ((r = e.slot), (i = o)));
  }
  return r;
}
