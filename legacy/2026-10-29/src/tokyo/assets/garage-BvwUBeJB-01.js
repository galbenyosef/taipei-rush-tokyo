// tokyo/assets/garage-BvwUBeJB 01 — list
// Lines 1-224 of readable/tokyo/assets/garage-BvwUBeJB.pretty.js (statement-aligned).
import {
  En as e,
  Et as t,
  Ht as n,
  O as r,
  Tt as i,
  h as a,
  jt as o,
  m as s,
  rr as c,
  v as l,
  wt as u,
  x as d,
} from "./three-x0mFGRTI.js";
import { z as f } from "./engine-wUBYs8Z3.js";
import { i as p, n as m } from "./cities-8-O8IWPJ.js";
import { S as h, g, n as _ } from "./shared-DC9fKqx_.js";
import { Ht as v, Ut as ee, Wt as te } from "./actors-qKVitB-C.js";
import { tt as y } from "./world-CAmHK742.js";
import { l as b } from "./dom-BCt0vy2n.js";
import { N as ne, P as re, T as x, w as ie } from "./tokyo-_rNKO_Y7.js";
var S = (e, t) => ({ zh: e, en: t }),
  C = [
    {
      id: `car-santaizi`,
      base: `truck`,
      name: S(`電音三太子花車`, `Techno Prince Float`),
      tagline: S(
        `廟會開到哪，派對就到哪。`,
        `Wherever the temple fair goes, the party follows.`,
      ),
      blurb: S(
        `發財車改的電子花車：彩虹 LED 拱門、一整排喇叭、底盤燈閃不停。開進夜市，所有人都會回頭。`,
        `A pickup turned into a temple-fair float: a rainbow LED arch, a wall of speakers and underglow that never stops. Every head in the night market turns.`,
      ),
      price: 12800,
      paint: 16727972,
      trim: 16765503,
      glow: 16728016,
      kit: [`ledArch`, `speakers`, `neonStrip`],
      tune: { maxKmh: 165, accel: 6.2, grip: 1.05, drifty: 1.2, brake: 1.1 },
      badge: S(`入門`, `Starter`),
    },
    {
      id: `car-tofu86`,
      base: `sedan`,
      name: S(`陽明山豆花 86`, `Yangmingshan Tofu 86`),
      tagline: S(
        `送豆花上山，順便甩尾。`,
        `Delivers tofu pudding uphill. Drifts on the way.`,
      ),
      blurb: S(
        `黑白熊貓配色，調成甩尾專用：輕輕一拉手煞車，車尾就滑出去。山路之王。`,
        `Panda black-and-white, tuned to slide: a touch of handbrake and the tail swings out. King of the mountain roads.`,
      ),
      price: 28800,
      paint: 16053488,
      trim: 1381913,
      glow: 0,
      kit: [`ducktail`, `splitter`, `sideSkirts`],
      tune: { maxKmh: 215, accel: 8.6, grip: 1.08, drifty: 1.9, brake: 1.15 },
      badge: S(`甩尾`, `Drift`),
    },
    {
      id: `car-hehuan`,
      base: `suv`,
      name: S(`合歡山越野怪獸`, `Hehuan Mountain Beast`),
      tagline: S(`哪裡沒有路，就往哪裡開。`, `No road? Good.`),
      blurb: S(
        `消光軍綠、防撞桿、涉水呼吸管、車頂行李架加一整排探照燈。撞車不怕，撞牆也不太怕。`,
        `Matte army green, a bull bar, a snorkel, a roof rack and a full LED light bar. Not afraid of crashes. Barely afraid of walls.`,
      ),
      price: 46800,
      paint: 4872748,
      trim: 1776670,
      glow: 0,
      kit: [`bullBar`, `snorkel`, `roofRack`, `lightBar`],
      tune: { maxKmh: 200, accel: 7.6, grip: 1.15, drifty: 0.9, brake: 1.15 },
      badge: S(`越野`, `Off-road`),
    },
    {
      id: `car-neon-gt`,
      base: `sports`,
      name: S(`霓虹夜市 GT`, `Night Market Neon GT`),
      tagline: S(
        `西門町的霓虹，開在你的車上。`,
        `Ximending's neon, on your car.`,
      ),
      blurb: S(
        `深紫烤漆、賽道尾翼、粉紅底盤燈加青色側燈。晚上開出來，整條街都是你的。`,
        `Deep purple paint, a track wing, pink underglow and cyan sill lights. Take it out at night and the whole street is yours.`,
      ),
      price: 88e3,
      paint: 3870584,
      trim: 1372415,
      glow: 16723926,
      kit: [`gtWing`, `splitter`, `sideSkirts`, `neonStrip`],
      tune: { maxKmh: 300, accel: 12.2, grip: 1.12, drifty: 1.2, brake: 1.1 },
      badge: S(`人氣`, `Popular`),
    },
    {
      id: `car-golden-101`,
      base: `sports`,
      name: S(`101 黃金閃電`, `Golden Bolt 101`),
      tagline: S(
        `全臺北最貴的一台，也最快。`,
        `The priciest car in Taipei. Also the fastest.`,
      ),
      blurb: S(
        `鍍金車身、碳纖維尾翼、雙條黑色賽車紋，底盤燈是金色的。極速 340，跑得比捷運還快。`,
        `A gold body, a carbon wing, twin black racing stripes and gold underglow. 340 km/h: faster than the MRT.`,
      ),
      price: 168e3,
      paint: 13144602,
      trim: 1184276,
      glow: 16761370,
      kit: [`gtWing`, `hoodStripes`, `splitter`, `sideSkirts`],
      tune: { maxKmh: 340, accel: 14.5, grip: 1.2, drifty: 1.1, brake: 1.2 },
      badge: S(`旗艦`, `Flagship`),
    },
  ],
  w = Object.fromEntries(C.map((e) => [e.id, e])),
  ae = (e) => Math.round((27.8 / (e.tune.accel * 0.92)) * 10) / 10,
  T = class {
    list = [];
    c = new d();
    box(e, t, n, r, i, a, o, c = 0, l = 0) {
      let u = new s(r, i, a);
      return (
        c && u.rotateX(c),
        l && u.rotateY(l),
        u.translate(e, t, n),
        this.add(u, o)
      );
    }
    bar(e, t, n, r) {
      let i = new c(...e),
        a = new c(...t),
        o = i.distanceTo(a),
        l = new s(n, n, o),
        d = new u().lookAt(i, a, new c(0, 1, 0));
      return (
        Math.abs(a.x - i.x) < 1e-6 &&
          Math.abs(a.z - i.z) < 1e-6 &&
          d.lookAt(i, a, new c(0, 0, 1)),
        l.applyMatrix4(d),
        l.translate((i.x + a.x) / 2, (i.y + a.y) / 2, (i.z + a.z) / 2),
        this.add(l, r)
      );
    }
    cyl(e, t, n, i, a, o, s = `y`, c = 12) {
      let l = new r(i, i, a, c);
      return (
        s === `x`
          ? l.rotateZ(Math.PI / 2)
          : s === `z` && l.rotateX(Math.PI / 2),
        l.translate(e, t, n),
        this.add(l, o)
      );
    }
    add(e, t) {
      let n = e.index ? e.toNonIndexed() : e;
      (n !== e && e.dispose(), n.deleteAttribute(`uv`));
      let r = n.attributes.position.count,
        i = new Float32Array(r * 3);
      this.c.setHex(t).convertSRGBToLinear();
      for (let e = 0; e < r; e++) i.set([this.c.r, this.c.g, this.c.b], e * 3);
      return (n.setAttribute(`color`, new a(i, 3)), this.list.push(n), this);
    }
    get empty() {
      return !this.list.length;
    }
    build() {
      if (!this.list.length) return null;
      let e = ie(this.list, !1);
      for (let e of this.list) e.dispose();
      return ((this.list = []), e.computeBoundingSphere(), e);
    }
  },
  E = [16723285, 16749824, 16769280, 3465306, 2017535, 5922047, 13778175],
  D = 1579292,
  O = 12041410,
  k = {
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
  };
