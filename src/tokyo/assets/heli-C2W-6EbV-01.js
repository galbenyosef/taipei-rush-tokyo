// tokyo/assets/heli-C2W-6EbV 01 — fillrect
// Lines 1-146 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { t } from "./ja-anaGONx4.js";
import {
  Ct as n,
  Dt as r,
  Et as i,
  Ln as a,
  Nn as o,
  On as s,
  Rt as c,
  Tt as l,
  Y as u,
  ar as d,
  b as f,
  gt as p,
  ht as m,
  or as h,
  q as g,
  v as _,
  yn as v,
} from "./three-C4coU-vx.js";
import {
  $ as y,
  F as b,
  Fr as x,
  J as S,
  Nr as C,
  Q as w,
  Y as T,
  _n as ee,
  et as te,
  pn as ne,
  yn as re,
} from "./engine-14d5lda2.js";
import {
  At as ie,
  Dt as E,
  Et as D,
  Lt as ae,
  Ot as O,
  jt as oe,
  kt as se,
} from "./actors-bknSEpf2.js";
var ce = {
    private: {
      id: `private`,
      name: { zh: `燕鷗直升機`, en: `Tern helicopter` },
      paint: 15987957,
      reg: `B-31058`,
      varB: [0, 0, 1, 0],
    },
    news: {
      id: `news`,
      name: { zh: `狂飆新聞直升機`, en: `RUSH NEWS chopper` },
      paint: 1585258,
      reg: `B-31726`,
      varB: [1, 0, 0, 0],
    },
    ambulance: {
      id: `ambulance`,
      name: { zh: `空中救護直升機`, en: `Air ambulance` },
      paint: 16053490,
      reg: `B-77011`,
      varB: [0, 1, 0, 0],
    },
  },
  k = [`臺北飛行俱樂部`, `TAIPEI FLYING CLUB`];
function le(e) {
  if (e) {
    e.club && (k = e.club);
    for (let t of Object.keys(ce)) {
      let n = e.reg?.[t],
        r = e.names?.[t];
      (n && (ce[t].reg = n), r && (ce[t].name = r));
    }
  }
}
var ue = 1024,
  de = (e, t, n, r) => ({
    u0: e / ue,
    u1: (e + n) / ue,
    v1: 1 - t / 512,
    v0: 1 - (t + r) / 512,
  }),
  A = { z0: -4, z1: 3, y0: 0.5, y1: 2.35, ...de(0, 32, 1024, 272) },
  j = { x: 0, y: 32, w: 1024, h: 272 },
  M = { z0: 2.7, z1: 7, ...de(0, 320, 1024, 96) },
  fe = { x: 0, y: 320, w: 1024, h: 96 },
  N = { z0: 6.25, z1: 7.35, y0: 1.95, y1: 3.15, ...de(0, 424, 256, 80) },
  pe = { x: 0, y: 424, w: 256, h: 80 },
  P = (e) => j.x + ((e - A.z0) / (A.z1 - A.z0)) * j.w,
  F = (e) => j.y + ((A.y1 - e) / (A.y1 - A.y0)) * j.h,
  me = new Map();
function I(e, t, n, r, i, a, o, s = 800, c = ne, l = `center`) {
  (e.save(), (e.fillStyle = o), (e.textAlign = l), (e.textBaseline = `middle`));
  let u = a;
  e.font = `${s} ${u}px ${c}`;
  let d = e.measureText(t).width;
  (d > i && ((u *= i / d), (e.font = `${s} ${u}px ${c}`)),
    e.fillText(
      t,
      l === `center` ? n + i / 2 : l === `left` ? n : n + i,
      r + a / 2 + u * 0.04,
    ),
    e.restore());
}
function he(e, t) {
  (e.save(), (e.strokeStyle = t), (e.lineWidth = 2), (e.globalAlpha = 0.55));
  for (let [t, n] of [
    [-2.38, -1.22],
    [-1.14, 0.32],
  ]) {
    let r = P(t),
      i = P(n),
      a = F(2.04),
      o = F(0.66);
    (e.beginPath(),
      typeof e.roundRect == `function`
        ? e.roundRect(r, a, i - r, o - a, 10)
        : e.rect(r, a, i - r, o - a),
      e.stroke());
  }
  ((e.globalAlpha = 0.8),
    (e.fillStyle = t),
    e.fillRect(P(-1.42), F(1.07), 20, 5),
    e.fillRect(P(0.1), F(1.07), 20, 5),
    (e.globalAlpha = 0.45),
    e.fillRect(P(-1.1), F(0.68), P(0.9) - P(-1.1), 3),
    (e.globalAlpha = 0.4),
    e.strokeRect(P(0.55), F(1.95), P(1.5) - P(0.55), F(1) - F(1.95)),
    e.restore());
}
function ge(e, t, n, r) {
  (e.save(), e.translate(t, n), (e.fillStyle = `#1d5fbf`));
  for (let t = 0; t < 3; t++)
    (e.save(),
      e.rotate((t * Math.PI) / 3),
      e.fillRect(-r * 0.22, -r, r * 0.44, r * 2),
      e.restore());
  ((e.fillStyle = `#ffffff`),
    e.fillRect(-r * 0.05, -r * 0.7, r * 0.1, r * 1.4),
    e.beginPath(),
    e.arc(0, -r * 0.45, r * 0.12, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
