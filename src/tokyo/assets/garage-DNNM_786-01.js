// tokyo/assets/garage-DNNM_786 01 — paint
// Lines 1-276 of readable/tokyo/assets/garage-DNNM_786.pretty.js (statement-aligned).
import {
  Dt as e,
  Et as t,
  Mt as n,
  On as r,
  S as i,
  Tt as a,
  Ut as o,
  h as s,
  k as c,
  m as l,
  or as u,
  v as d,
} from "./three-C4coU-vx.js";
import { P as f } from "./engine-14d5lda2.js";
import { i as p, n as m } from "./cities-tfcRdmsJ.js";
import { S as h, g, n as _ } from "./shared-BaQwRjes.js";
import { cn as ee, ln as te, un as ne } from "./actors-bknSEpf2.js";
import { l as v } from "./dom-BCt0vy2n.js";
import { Z as y } from "./world-CVm1JHks.js";
import { D as b, F as re, I as ie, z as ae } from "./tokyo-CqLdAwml.js";
var x = [
    {
      id: `bike-scooter`,
      kind: `scooter`,
      name: { zh: `我的速克達`, en: `My scooter` },
      paint: 9426628,
      glyph: `🛵`,
    },
    {
      id: `bike-motorcycle`,
      kind: `motorcycle`,
      name: { zh: `我的檔車`, en: `My motorcycle` },
      paint: 1908257,
      glyph: `🏍️`,
    },
    {
      id: `bike-superbike`,
      kind: `superbike`,
      name: { zh: `我的重機`, en: `My superbike` },
      paint: 13112863,
      glyph: `🏍️`,
    },
  ],
  S = Object.fromEntries(x.map((e) => [e.id, e])),
  C = (e, t) => ({ zh: e, en: t }),
  w = [
    {
      id: `car-santaizi`,
      base: `truck`,
      name: C(`電音三太子花車`, `Techno Prince Float`),
      tagline: C(
        `廟會開到哪，派對就到哪。`,
        `Wherever the temple fair goes, the party follows.`,
      ),
      blurb: C(
        `發財車改的電子花車：彩虹 LED 拱門、一整排喇叭、底盤燈閃不停。開進夜市，所有人都會回頭。`,
        `A pickup turned into a temple-fair float: a rainbow LED arch, a wall of speakers and underglow that never stops. Every head in the night market turns.`,
      ),
      price: 12800,
      paint: 16727972,
      trim: 16765503,
      glow: 16728016,
      kit: [`ledArch`, `speakers`, `neonStrip`],
      tune: { maxKmh: 165, accel: 6.2, grip: 1.05, drifty: 1.2, brake: 1.1 },
      badge: C(`入門`, `Starter`),
    },
    {
      id: `car-tofu86`,
      base: `sedan`,
      name: C(`陽明山豆花 86`, `Yangmingshan Tofu 86`),
      tagline: C(
        `送豆花上山，順便甩尾。`,
        `Delivers tofu pudding uphill. Drifts on the way.`,
      ),
      blurb: C(
        `黑白熊貓配色，調成甩尾專用：輕輕一拉手煞車，車尾就滑出去。山路之王。`,
        `Panda black-and-white, tuned to slide: a touch of handbrake and the tail swings out. King of the mountain roads.`,
      ),
      price: 28800,
      paint: 16053488,
      trim: 1381913,
      glow: 0,
      kit: [`ducktail`, `splitter`, `sideSkirts`],
      tune: { maxKmh: 215, accel: 8.6, grip: 1.08, drifty: 1.9, brake: 1.15 },
      badge: C(`甩尾`, `Drift`),
    },
    {
      id: `car-hehuan`,
      base: `suv`,
      name: C(`合歡山越野怪獸`, `Hehuan Mountain Beast`),
      tagline: C(`哪裡沒有路，就往哪裡開。`, `No road? Good.`),
      blurb: C(
        `消光軍綠、防撞桿、涉水呼吸管、車頂行李架加一整排探照燈。撞車不怕，撞牆也不太怕。`,
        `Matte army green, a bull bar, a snorkel, a roof rack and a full LED light bar. Not afraid of crashes. Barely afraid of walls.`,
      ),
      price: 46800,
      paint: 4872748,
      trim: 1776670,
      glow: 0,
      kit: [`bullBar`, `snorkel`, `roofRack`, `lightBar`],
      tune: { maxKmh: 200, accel: 7.6, grip: 1.15, drifty: 0.9, brake: 1.15 },
      badge: C(`越野`, `Off-road`),
    },
    {
      id: `car-neon-gt`,
      base: `sports`,
      name: C(`霓虹夜市 GT`, `Night Market Neon GT`),
      tagline: C(
        `西門町的霓虹，開在你的車上。`,
        `Ximending's neon, on your car.`,
      ),
      blurb: C(
        `深紫烤漆、賽道尾翼、粉紅底盤燈加青色側燈。晚上開出來，整條街都是你的。`,
        `Deep purple paint, a track wing, pink underglow and cyan sill lights. Take it out at night and the whole street is yours.`,
      ),
      price: 88e3,
      paint: 3870584,
      trim: 1372415,
      glow: 16723926,
      kit: [`gtWing`, `splitter`, `sideSkirts`, `neonStrip`],
      tune: { maxKmh: 300, accel: 12.2, grip: 1.12, drifty: 1.2, brake: 1.1 },
      badge: C(`人氣`, `Popular`),
    },
    {
      id: `car-golden-101`,
      base: `sports`,
      name: C(`101 黃金閃電`, `Golden Bolt 101`),
      tagline: C(
        `全臺北最貴的一台，也最快。`,
        `The priciest car in Taipei. Also the fastest.`,
      ),
      blurb: C(
        `鍍金車身、碳纖維尾翼、雙條黑色賽車紋，底盤燈是金色的。極速 340，跑得比捷運還快。`,
        `A gold body, a carbon wing, twin black racing stripes and gold underglow. 340 km/h: faster than the MRT.`,
      ),
      price: 168e3,
      paint: 13144602,
      trim: 1184276,
      glow: 16761370,
      kit: [`gtWing`, `hoodStripes`, `splitter`, `sideSkirts`],
      tune: { maxKmh: 340, accel: 14.5, grip: 1.2, drifty: 1.1, brake: 1.2 },
      badge: C(`旗艦`, `Flagship`),
    },
  ],
  T = Object.fromEntries(w.map((e) => [e.id, e])),
  oe = (e) => Math.round((27.8 / (e.tune.accel * 0.92)) * 10) / 10,
  E = class {
    list = [];
    c = new i();
    box(e, t, n, r, i, a, o, s = 0, c = 0) {
      let u = new l(r, i, a);
      return (
        s && u.rotateX(s),
        c && u.rotateY(c),
        u.translate(e, t, n),
        this.add(u, o)
      );
    }
    bar(e, t, n, r) {
      let i = new u(...e),
        o = new u(...t),
        s = i.distanceTo(o),
        c = new l(n, n, s),
        d = new a().lookAt(i, o, new u(0, 1, 0));
      return (
        Math.abs(o.x - i.x) < 1e-6 &&
          Math.abs(o.z - i.z) < 1e-6 &&
          d.lookAt(i, o, new u(0, 0, 1)),
        c.applyMatrix4(d),
        c.translate((i.x + o.x) / 2, (i.y + o.y) / 2, (i.z + o.z) / 2),
        this.add(c, r)
      );
    }
    cyl(e, t, n, r, i, a, o = `y`, s = 12) {
      let l = new c(r, r, i, s);
      return (
        o === `x`
          ? l.rotateZ(Math.PI / 2)
          : o === `z` && l.rotateX(Math.PI / 2),
        l.translate(e, t, n),
        this.add(l, a)
      );
    }
    add(e, t) {
      let n = e.index ? e.toNonIndexed() : e;
      (n !== e && e.dispose(), n.deleteAttribute(`uv`));
      let r = n.attributes.position.count,
        i = new Float32Array(r * 3);
      this.c.setHex(t).convertSRGBToLinear();
      for (let e = 0; e < r; e++) i.set([this.c.r, this.c.g, this.c.b], e * 3);
      return (n.setAttribute(`color`, new s(i, 3)), this.list.push(n), this);
    }
    get empty() {
      return !this.list.length;
    }
    build() {
      if (!this.list.length) return null;
      let e = ae(this.list, !1);
      for (let e of this.list) e.dispose();
      return ((this.list = []), e.computeBoundingSphere(), e);
    }
  },
  D = [16723285, 16749824, 16769280, 3465306, 2017535, 5922047, 13778175],
  O = 1579292,
  se = 12041410,
  ce = {
    floor: 0.64,
    arches: [0.15, 1.95],
    half: 0.8,
    speakerZ: 1.05,
    chaserZ: -1.25,
    badgeZ: -0.47,
  },
  le = {
    sports: {
      W: 0.97,
      front: -2.27,
      rear: 2.28,
      sill: [-0.92, 0.84],
      sillY: 0.3,
      hood: [-2.08, 0.72, -1.08, 0.875],
      roof: [-0.16, 1.185, 0.4, 1.2],
      deck: [1.75, 0.895, 2.18, 0.86],
    },
    sedan: {
      W: 0.9,
      front: -2.35,
      rear: 2.36,
      sill: [-0.88, 0.86],
      sillY: 0.34,
      hood: [-2.2, 0.77, -1.32, 0.925],
      roof: [-0.38, 1.42, 0.56, 1.45],
      deck: [1.45, 1.015, 2.18, 0.975],
    },
    suv: {
      W: 0.95,
      front: -2.36,
      rear: 2.36,
      sill: [-0.9, 0.88],
      sillY: 0.4,
      hood: [-2.18, 0.99, -1.32, 1.1],
      roof: [-0.58, 1.68, 1.9, 1.7],
      deck: [2.3, 1.08, 2.3, 1.08],
    },
    truck: {
      W: 0.84,
      front: -2.22,
      rear: 2.2,
      sill: [-0.95, -0.6],
      sillY: 0.4,
      hood: [-2.2, 0.95, -2.2, 0.95],
      roof: [-1.85, 1.9, -0.62, 1.9],
      deck: [-0.5, 1.02, 2.19, 1.02],
    },
  },
  ue = {
    W: 1,
    front: -3.05,
    rear: 3,
    sill: [-1.45, 2.9],
    sillY: 0.86,
    hood: [-3, 1.18, -3, 1.18],
    roof: [-2.76, 2.34, -1.64, 2.34],
    deck: [-1.48, 0.87, 2.97, 0.87],
    bed: {
      floor: 0.87,
      arches: [-0.6, 2.4],
      half: 0.95,
      speakerZ: 1,
      chaserZ: -2.2,
      badgeZ: -1.45,
    },
  },
  de = (e) =>
    e === `truck` && (_ === `hong-kong` || _ === `london`) ? ue : le[e];
