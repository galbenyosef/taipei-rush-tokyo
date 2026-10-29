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
function fe(e, t, n, r, i) {
  let a = n.trim,
    o = n.paint,
    s = (e, t) => e[1] + (e[3] - e[1]) * t;
  switch (e) {
    case `gtWing`: {
      let e = t.deck[0] + (t.deck[2] - t.deck[0]) * 0.55,
        c = s(t.deck, 0.55) + f.PANEL,
        l = c + 0.36;
      r.box(
        0,
        l,
        e + 0.02,
        1.92,
        0.04,
        0.4,
        n.id === `car-golden-101` || a === 1372415 ? O : a,
        -0.12,
      );
      for (let t of [-1, 1])
        (r.box(t * 0.5, c + 0.17, e, 0.04, 0.36, 0.16, O),
          r.box(
            t * 0.97,
            l + 0.02,
            e + 0.02,
            0.025,
            0.2,
            0.46,
            n.id === `car-golden-101` ? o : a,
          ));
      n.glow &&
        i.box(
          0,
          l + 0.024,
          e - 0.17,
          1.86,
          0.012,
          0.02,
          n.id === `car-neon-gt` ? a : n.glow,
        );
      break;
    }
    case `ducktail`:
      r.box(
        0,
        t.deck[3] + 0.05 + f.PANEL,
        t.deck[2] - 0.08,
        t.W * 1.7,
        0.05,
        0.2,
        a,
        0.32,
      );
      break;
    case `splitter`:
      r.box(0, 0.215, t.front + 0.04, t.W * 1.8, 0.025, 0.2, O);
      for (let e of [-1, 1])
        r.box(e * t.W * 0.86, 0.25, t.front - 0.02, 0.025, 0.06, 0.1, O);
      break;
    case `sideSkirts`:
      for (let e of [-1, 1])
        r.box(
          e * (t.W + 0.025),
          t.sillY - 0.02,
          (t.sill[0] + t.sill[1]) / 2,
          0.06,
          0.1,
          t.sill[1] - t.sill[0],
          a === 1372415 ? O : a,
        );
      break;
    case `neonStrip`:
      for (let e of [-1, 1])
        i.box(
          e * (t.W + 0.03),
          t.sillY - 0.085,
          (t.sill[0] + t.sill[1]) / 2,
          0.02,
          0.02,
          t.sill[1] - t.sill[0] - 0.05,
          n.base === `sports` ? a : n.glow,
        );
      break;
    case `hoodStripes`:
      for (let e of [-1, 1])
        for (let n of [t.hood, t.roof, t.deck]) {
          let [t, i, o, s] = n,
            c = Math.hypot(o - t, s - i);
          c < 0.05 ||
            r.box(
              e * 0.17,
              (i + s) / 2 + f.PANEL + 0.012,
              (t + o) / 2,
              0.18,
              0.012,
              c,
              a,
              -Math.atan2(s - i, o - t),
            );
        }
      break;
    case `ledArch`: {
      let e = t.deck[1],
        a = t.bed ?? ce;
      for (let t of a.arches) {
        for (let n of [-1, 1]) r.box(n * a.half, e + 0.5, t, 0.06, 1, 0.06, se);
        let n = e + 1,
          o = a.half;
        for (let e = 0; e < 14; e++) {
          let r = (e / 14) * Math.PI,
            a = Math.PI * ((e + 1) / 14);
          i.bar(
            [Math.cos(r) * o, n + Math.sin(r) * o * 0.7, t],
            [Math.cos(a) * o, n + Math.sin(a) * o * 0.7, t],
            0.07,
            D[e % D.length],
          );
        }
      }
      for (let e = 0; e < 7; e++)
        i.box(
          -0.72 + e * 0.24,
          t.roof[1] + 0.05,
          a.chaserZ,
          0.2,
          0.05,
          0.08,
          D[e],
        );
      r.box(0, e + 0.5, a.badgeZ, 0.6, 0.3, 0.02, n.trim);
      break;
    }
    case `speakers`: {
      let e = t.bed ?? ce,
        a = e.floor,
        o = e.speakerZ;
      for (let e of [-1, 1]) {
        r.box(e * 0.42, a + 0.4, o, 0.62, 0.8, 0.5, 1184534);
        for (let [t, n] of [
          [0.18, 0.2],
          [-0.18, 0.13],
        ])
          (r.cyl(e * 0.42, a + 0.4 + t, o + 0.26, n, 0.03, 3816772, `z`, 16),
            r.cyl(
              e * 0.42,
              a + 0.4 + t,
              o + 0.28,
              n * 0.35,
              0.02,
              9080729,
              `z`,
              10,
            ));
        i.box(e * 0.42, a + 0.82, o, 0.62, 0.025, 0.5, n.glow);
      }
      break;
    }
    case `roofRack`: {
      let e = t.roof[3] + 0.13;
      for (let t of [-1, 1])
        r.box(t * 0.62, e, 1.2000000000000002 / 2, 0.05, 0.05, 2, O);
      for (let t = 0; t < 5; t++)
        r.box(0, e, -0.4 + (t * 2) / 4, 1.28, 0.04, 0.05, O);
      (r.box(0.32, e + 0.17, 1.2, 0.3, 0.3, 0.18, 4147748),
        r.cyl(-0.25, e + 0.1, 0.9, 0.36, 0.16, 1381653, `y`, 16));
      break;
    }
    case `lightBar`: {
      let e = t.roof[3] + 0.24;
      (r.box(0, e, -0.39, 1.36, 0.12, 0.08, O),
        i.box(0, e, -0.44, 1.28, 0.08, 0.02, 16774872));
      for (let e of [-1, 1])
        i.cyl(e * 0.5, 0.82, t.front - 0.2, 0.08, 0.02, 16774872, `z`, 12);
      break;
    }
    case `bullBar`: {
      let e = t.front - 0.16;
      for (let t of [-1, 1])
        (r.bar([t * 0.55, 0.3, e + 0.08], [t * 0.55, 0.98, e], 0.06, O),
          r.bar([t * 0.55, 0.98, e], [t * 0.2, 1, e - 0.02], 0.06, O));
      (r.box(0, 0.98, e - 0.01, 0.46, 0.06, 0.06, O),
        r.box(0, 0.6, e + 0.04, 1.16, 0.06, 0.06, O),
        r.box(0, 0.38, e + 0.1, 1.5, 0.08, 0.08, O));
      break;
    }
    case `snorkel`: {
      let e = t.W + 0.06;
      (r.bar([e, 0.9, -1.3], [e, 1.14, -1.3], 0.1, O),
        r.bar([e, 1.14, -1.3], [e - 0.06, 1.62, -0.74], 0.1, O),
        r.box(e - 0.06, 1.69, -0.78, 0.14, 0.12, 0.18, O));
      break;
    }
  }
}
var pe = new Map(),
  k = null,
  A = null,
  j = new Map(),
  M = null;
function me(e) {
  let t = pe.get(e.id);
  if (t) return t;
  let n = de(e.base),
    r = new E(),
    i = new E();
  if (n) for (let t of e.kit) fe(t, n, e, r, i);
  let a = null;
  return (
    e.glow &&
      n &&
      ((a = new o(n.W * 2 + 1.3, n.rear - n.front + 1.3)),
      a.rotateX(-Math.PI / 2),
      a.translate(0, f.GROUND + 0.04, (n.rear + n.front) / 2)),
    (t = { solid: r.build(), glow: i.build(), under: a }),
    pe.set(e.id, t),
    t
  );
}
function he() {
  if (M) return M;
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 4, 32, 32, 32);
  return (
    n.addColorStop(0, `rgba(255,255,255,0.95)`),
    n.addColorStop(0.55, `rgba(255,255,255,0.55)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64),
    (M = new d(e)),
    (M.colorSpace = r),
    M
  );
}
function ge(r, i) {
  let a = me(i),
    o = [];
  if (a.solid) {
    k ??= new n({ vertexColors: !0, roughness: 0.42, metalness: 0.35 });
    let e = new t(a.solid, k);
    ((e.castShadow = !0),
      (e.receiveShadow = !0),
      (e.name = `garage-kit`),
      o.push(e));
  }
  if (a.glow) {
    A ??= new e({ vertexColors: !0, toneMapped: !1 });
    let n = new t(a.glow, A);
    ((n.name = `garage-neon`), o.push(n));
  }
  if (a.under) {
    let n = j.get(i.glow);
    n ||
      ((n = new e({
        color: i.glow,
        map: he(),
        transparent: !0,
        opacity: 0.85,
        blending: 2,
        depthWrite: !1,
        toneMapped: !1,
      })),
      j.set(i.glow, n));
    let r = new t(a.under, n);
    if (
      ((r.name = `garage-underglow`),
      (r.renderOrder = 2),
      i.kit.includes(`speakers`))
    ) {
      let e = n;
      r.onBeforeRender = () => {
        let t = performance.now() / 1e3;
        e.opacity =
          0.45 + 0.5 * Math.max(0, Math.cos(t * Math.PI * (128 / 60))) ** 4;
      };
    }
    o.push(r);
  }
  for (let e of o) r.add(e);
  return () => {
    for (let e of o) e.removeFromParent();
  };
}
var N = (e) => `wreck-${e}`,
  P = (e, t) => (b(e)[N(t)] ?? 0) > 0;
function _e(e, t) {
  P(e, t) || re(e, N(t));
}
function ve(e, t) {
  P(e, t) && ie(e, N(t));
}
function F(e) {
  if (_ === `tokyo`) {
    let t = h(e, _);
    return { v: t, label: `¥ ${t.toLocaleString()}` };
  }
  let t = Math.ceil(e / g[_]);
  return { v: t, label: `${p[m[_].currency].symbol} ${t.toLocaleString()}` };
}
var I = (e, t) => !!T[t] && (b(e)[t] ?? 0) > 0,
  L = (e, t, n = `good`, r = 3.5) =>
    e.events.emit(`notify`, { text: t, kind: n, duration: r }),
  R = (e, t) => {
    try {
      e.audio.play(t, { ui: !0, volume: 0.8 });
    } catch {}
  };
function z(e, t = !1, n = !1) {
  if (e.net?.roundActive)
    return {
      ok: !1,
      text: {
        zh: `對局中請使用街上的車輛`,
        en: `Use street vehicles during this round`,
      },
    };
  let r = e.player;
  if (r.mode === `vehicle`)
    return {
      ok: !1,
      text: { zh: `先下車再叫車`, en: `Get out of your vehicle first` },
    };
  if (r.mode !== `foot` && !(t && r.mode === `cutscene`))
    return { ok: !1, text: { zh: `現在不能叫車`, en: `Not now` } };
  if (!n && e.interiors?.playerInside)
    return { ok: !1, text: { zh: `到室外再叫車`, en: `Go outside first` } };
  let { x: i, z: a } = r.position;
  try {
    if (
      e.plan.surfaceAt(i, a) === `water` &&
      r.position.y < e.plan.groundHeight(i, a) + 1
    )
      return {
        ok: !1,
        text: { zh: `這裡不能停車`, en: `No room for a car here` },
      };
  } catch {}
  return { ok: !0, text: { zh: `叫車`, en: `Summon` } };
}
var B = null,
  ye = new WeakMap(),
  be = { zh: `💥 車爆掉了，回家牽車`, en: `💥 Wrecked: pick it up at home` };
function xe(e, t, n, r = !1) {
  let i = T[t];
  if (!i || !I(e, t))
    return {
      ok: !1,
      text: { zh: `你還沒有這台車`, en: `You don't own this car yet` },
    };
  if (!r && P(e, t)) return { ok: !1, text: be };
  let a = z(e, r, r);
  if (!a.ok) return a;
  (H(e), r && ve(e, t));
  let o = e.player,
    s = e.vehicles.spawn(
      i.base,
      n?.x ?? o.position.x,
      n?.z ?? o.position.z,
      n?.heading ?? o.heading,
      { color: i.paint, seed: 0.5, y: o.position.y, altBody: -1 },
    );
  return (
    (B = { v: s, car: i, bike: null, undress: Ce(s, i) }),
    Se(e),
    e.vehicles.putPlayerIn(s),
    e.state.stat(`garageSummons`),
    R(e, `ui_confirm`),
    L(
      e,
      { zh: `🚗 ${i.name.zh} 到了！`, en: `🚗 Your ${i.name.en} is here!` },
      `good`,
      3,
    ),
    { ok: !0, text: { zh: `${i.name.zh} 到了`, en: `${i.name.en} is here` } }
  );
}
var V = !1;
function Se(e) {
  V ||
    ((V = !0),
    e.events.on(`vehicle:destroyed`, (t) => {
      let n = B;
      n?.car &&
        t.vehicleId === n.v.id &&
        !P(e, n.car.id) &&
        (_e(e, n.car.id),
        L(
          e,
          {
            zh: `💥 ${n.car.name.zh} 爆掉了！要回家才能把它牽出來。`,
            en: `💥 Your ${n.car.name.en} was wrecked! Pick it up again at home.`,
          },
          `bad`,
          5,
        ));
    }));
}
function Ce(e, t) {
  return (De(e), Te(e, t), ye.set(e, t), ge(we(e), t));
}
function H(e) {
  let t = B;
  t &&
    ((B = null),
    t.undress(),
    e.vehicles.list.includes(t.v) && e.vehicles.despawn(t.v));
}
function we(e) {
  return e.tilt ?? e.object;
}
function Te(e, t) {
  let n = e,
    r = t.tune,
    i = {
      ...e.spec,
      name: t.name,
      maxSpeed: r.maxKmh / 3.6,
      accel: r.accel,
      colors: [t.paint],
    };
  try {
    if (((n.spec = i), n.h)) {
      let e = { ...n.h };
      ((e.grip *= r.grip),
        typeof e.latAccel == `number` && (e.latAccel *= r.grip),
        typeof e.drifty == `number` && (e.drifty *= r.drifty),
        typeof e.driftGrip == `number` &&
          r.drifty > 1 &&
          (e.driftGrip /= Math.sqrt(r.drifty)),
        typeof e.brake == `number` && (e.brake *= r.brake));
      let t = i.maxSpeed * 1.02,
        a = i.accel * (1 - (1.02 / ne) ** te);
      ((e.drag = Math.max(5e-5, (a - ee) / (t * t))),
        (n.h = e),
        typeof n.gripK == `number` && (n.gripK = e.grip));
    }
    Object.defineProperty(e, "batchable", { get: () => !1, configurable: !0 });
  } catch (e) {
    console.warn(`[garage] tune`, e);
  }
}
var U = { a: [0, 0, 0, 1.01], b: [0, 0, 0, 0] },
  W = { a: [0, 0, 0, 0], b: [0, 0, 0, 0] },
  Ee = {
    "hong-kong": { truck: U },
    london: {
      truck: U,
      sedan: W,
      suv: W,
      sports: { a: [0, 0, 0, 0], b: [1.01, 0, 0, 0] },
    },
  };
function G(e, t) {
  let n = e.mat?.vu;
  n?.uVarA && n.uVarB && (n.uVarA.value.set(...t.a), n.uVarB.value.set(...t.b));
}
function De(e) {
  let t = Ee[_]?.[e.kind];
  t && G(e, t);
}
var K = (e, t) => !!S[t] && (b(e)[t] ?? 0) > 0,
  Oe = (e) => x.filter((t) => K(e, t.id));
function ke(e) {
  for (let t of q(e)) re(e, t.id);
}
function q(e) {
  let t = e.state.data.stats ?? {};
  return x.filter((n) => (t[`own_${n.kind}`] ?? 0) > 0 && !K(e, n.id));
}
function Ae(e, t) {
  let n = S[t];
  if (!n || !K(e, t))
    return {
      ok: !1,
      text: { zh: `你還沒有這台機車`, en: `You don't own this bike yet` },
    };
  let r = z(e);
  if (!r.ok) return r;
  H(e);
  let i = e.player,
    a = e.vehicles.spawn(n.kind, i.position.x, i.position.z, i.heading, {
      color: n.paint,
      seed: 0.5,
      y: i.position.y,
      cargo: `none`,
      electric: !1,
      rider: !1,
    });
  G(a, W);
  try {
    Object.defineProperty(a, "batchable", { get: () => !1, configurable: !0 });
  } catch (e) {
    console.warn(`[garage] bike`, e);
  }
  return (
    (B = { v: a, car: null, bike: n, undress: () => {} }),
    e.vehicles.putPlayerIn(a),
    e.state.stat(`garageSummons`),
    R(e, `ui_confirm`),
    L(
      e,
      {
        zh: `${n.glyph} ${n.name.zh}牽出來了！`,
        en: `${n.glyph} ${n.name.en} is here!`,
      },
      `good`,
      3,
    ),
    { ok: !0, text: { zh: `${n.name.zh}到了`, en: `${n.name.en} is here` } }
  );
}
var je = {
    sports: [
      [-2.18, 0.26],
      [-2.27, 0.4],
      [-2.27, 0.58],
      [-2.12, 0.7],
      [-1.05, 0.88],
      [-0.2, 1.18],
      [0.42, 1.2],
      [1.72, 0.9],
      [2.2, 0.86],
      [2.28, 0.66],
      [2.26, 0.4],
      [2.18, 0.26],
    ],
    sedan: [
      [-2.24, 0.3],
      [-2.33, 0.43],
      [-2.35, 0.6],
      [-2.24, 0.76],
      [-1.3, 0.93],
      [-0.42, 1.42],
      [0.58, 1.45],
      [1.42, 1.02],
      [2.2, 0.97],
      [2.34, 0.82],
      [2.36, 0.52],
      [2.27, 0.3],
    ],
    suv: [
      [-2.28, 0.36],
      [-2.36, 0.52],
      [-2.36, 0.78],
      [-2.2, 0.98],
      [-1.3, 1.1],
      [-0.62, 1.68],
      [1.95, 1.7],
      [2.3, 1.08],
      [2.36, 0.82],
      [2.36, 0.52],
      [2.28, 0.36],
    ],
    truck: [
      [-2.15, 0.36],
      [-2.22, 0.5],
      [-2.22, 0.95],
      [-2.02, 1.72],
      [-1.85, 1.9],
      [-0.62, 1.9],
      [-0.55, 1.05],
      [2.19, 1.05],
      [2.2, 0.36],
    ],
  },
  J = {
    sports: [
      [-1, 0.9],
      [-0.22, 1.13],
      [0.4, 1.15],
      [1.5, 0.92],
    ],
    sedan: [
      [-1.22, 0.96],
      [-0.42, 1.37],
      [0.58, 1.4],
      [1.32, 1.03],
    ],
    suv: [
      [-1.22, 1.13],
      [-0.6, 1.62],
      [1.88, 1.64],
      [2.18, 1.12],
    ],
    truck: [
      [-2.12, 1],
      [-1.98, 1.66],
      [-0.7, 1.82],
      [-0.7, 1.02],
    ],
  },
  Me = {
    sports: [-1.38, 1.3, 0.34],
    sedan: [-1.36, 1.34, 0.33],
    suv: [-1.4, 1.38, 0.4],
    truck: [-1.3, 1.15, 0.31],
  },
  Y = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  X = `#0c0e13`;
function Ne(e) {
  let t = (e) => (e + 2.6) * 36 + 6,
    n = (e) => 74 - e * 36,
    r = (e) =>
      e.map(([e, r]) => `${t(e).toFixed(1)},${n(r).toFixed(1)}`).join(` `),
    i = je[e.base] ?? je.sedan,
    [a, o, s] = Me[e.base] ?? Me.sedan,
    c = Y(e.paint),
    l = Y(e.trim),
    u = ``;
  if (
    (e.glow &&
      (u += `<ellipse cx="${t(0)}" cy="76" rx="97.2" ry="7" fill="${Y(e.glow)}" opacity=".55"/>`),
    (u += `<ellipse cx="${t(0)}" cy="77" rx="${2.4 * 36}" ry="3.5" fill="#000" opacity=".45"/>`),
    e.kit.includes(`ledArch`))
  ) {
    let e = [
      `#ff2d55`,
      `#ff9500`,
      `#ffe100`,
      `#34e05a`,
      `#1ec8ff`,
      `#5a5cff`,
      `#d23cff`,
    ];
    for (let r of [0.15, 1.95])
      ((u += `<path d="M${t(r)} ${n(1.05)} V${n(2)}" stroke="#b7bcc2" stroke-width="2.5"/>`),
        e.forEach(
          (e, i) =>
            (u += `<circle cx="${t(r)}" cy="${n(1.25 + i * 0.15)}" r="2.6" fill="${e}"/>`),
        ));
    u += `<path d="M${t(0.15)} ${n(2.05)} Q${t(1.05)} ${n(2.5)} ${t(1.95)} ${n(2.05)}" stroke="#ffe100" stroke-width="3" fill="none"/>`;
  }
  if (
    (e.kit.includes(`speakers`) &&
      (u += `<rect x="${t(0.8)}" y="${n(1.45)}" width="18" height="28.8" rx="2" fill="#121316"/><circle cx="${t(1.05)}" cy="${n(1.2)}" r="5" fill="#3a3d44"/><circle cx="${t(1.05)}" cy="${n(0.88)}" r="3.4" fill="#3a3d44"/>`),
    (u += `<polygon points="${r(i)}" fill="${c}" stroke="${X}" stroke-width="1.6" stroke-linejoin="round"/>`),
    (u += `<polygon points="${r(J[e.base] ?? J.sedan)}" fill="#1d2a3a" stroke="${X}" stroke-width="1.2"/>`),
    (u += `<polygon points="${r(J[e.base] ?? J.sedan)}" fill="#9fd6ff" opacity=".18"/>`),
    e.kit.includes(`hoodStripes`) &&
      (u += `<path d="M${t(-2.12)} ${n(0.76)} L${t(-1.05)} ${n(0.94)} M${t(-0.2)} ${n(1.24)} L${t(0.42)} ${n(1.26)} M${t(1.72)} ${n(0.96)} L${t(2.2)} ${n(0.92)}" stroke="${l}" stroke-width="4"/>`),
    e.kit.includes(`sideSkirts`) &&
      (u += `<rect x="${t(-0.95)}" y="${n(0.36)}" width="64.8" height="4" fill="${e.trim === 1372415 ? `#18191c` : l}"/>`),
    e.kit.includes(`neonStrip`) &&
      (u += `<rect x="${t(-0.95)}" y="${n(0.27)}" width="64.8" height="2" rx="1" fill="${Y(e.base === `sports` ? e.trim : e.glow)}"/>`),
    e.kit.includes(`splitter`) &&
      (u += `<path d="M${t(-2.36)} ${n(0.2)} H${t(-1.9)}" stroke="#18191c" stroke-width="2.5"/>`),
    e.kit.includes(`gtWing`))
  ) {
    let r = e.id === `car-golden-101` || e.trim === 1372415 ? `#18191c` : l;
    u += `<path d="M${t(1.92)} ${n(0.88)} L${t(1.98)} ${n(1.22)}" stroke="#18191c" stroke-width="2.5"/><path d="M${t(1.72)} ${n(1.26)} L${t(2.25)} ${n(1.2)}" stroke="${r}" stroke-width="4" stroke-linecap="round"/>`;
  }
  (e.kit.includes(`ducktail`) &&
    (u += `<path d="M${t(2.02)} ${n(1)} L${t(2.3)} ${n(1.1)}" stroke="${l}" stroke-width="3.5" stroke-linecap="round"/>`),
    e.kit.includes(`roofRack`) &&
      (u += `<path d="M${t(-0.4)} ${n(1.82)} H${t(1.6)}" stroke="#18191c" stroke-width="2.5"/><rect x="${t(0.2)}" y="${n(2.05)}" width="18" height="7" rx="2" fill="#151515"/>`),
    e.kit.includes(`lightBar`) &&
      (u += `<rect x="${t(-0.6)}" y="${n(1.98)}" width="18" height="5" rx="1.5" fill="#fff6d8" stroke="#18191c" stroke-width="1.2"/>`),
    e.kit.includes(`bullBar`) &&
      (u += `<path d="M${t(-2.36)} ${n(0.3)} L${t(-2.5)} ${n(0.95)} H${t(-2.3)}" stroke="#18191c" stroke-width="3" fill="none"/>`),
    e.kit.includes(`snorkel`) &&
      (u += `<path d="M${t(-1.3)} ${n(0.9)} V${n(1.14)} L${t(-0.74)} ${n(1.62)} L${t(-0.86)} ${n(1.75)}" stroke="#18191c" stroke-width="3" fill="none"/>`),
    (u += `<rect x="${t(i[2][0]) - 1}" y="${n(i[2][1]) - 3}" width="5" height="4" rx="1" fill="#fff8d0"/>`));
  for (let r of [a, o])
    ((u += `<circle cx="${t(r)}" cy="${n(s)}" r="${s * 36}" fill="#141518" stroke="${X}" stroke-width="1.4"/>`),
      (u += `<circle cx="${t(r)}" cy="${n(s)}" r="${s * 36 * 0.58}" fill="${e.id === `car-golden-101` ? `#e8c24a` : `#9aa1ab`}"/>`),
      (u += `<circle cx="${t(r)}" cy="${n(s)}" r="${s * 36 * 0.18}" fill="#2a2d33"/>`));
  return `<svg viewBox="0 0 200 84" xmlns="http://www.w3.org/2000/svg" fill="none">${u}</svg>`;
}
var Pe = `garage-dealer`,
  Fe = `player-home`,
  Z = (e, t, n) => e.ui.setWaypoint.call(e.ui, t, n, !0),
  Ie = (e) => w.some((t) => !I(e, t.id) && e.state.money >= F(t.price).v),
  Q = (e, t, n) => Math.max(0.08, Math.min(1, (e - t) / (n - t)));
function Le(e, t, n) {
  let r = t.ctx,
    i = (e, n) => t.t({ zh: e, en: n }),
    a = (e) => t.t(e),
    o = $,
    s = v(`div`, `bg-head`, e);
  (v(`strong`, ``, s, i(`我的車庫`, `My Garage`)),
    v(
      `span`,
      ``,
      s,
      i(
        `擁有 ${w.filter((e) => I(r, e.id)).length}/${w.length}`,
        `Owned ${w.filter((e) => I(r, e.id)).length}/${w.length}`,
      ),
    ));
  let c = `${F(0).label.replace(/[\d,]+$/, ``)}${Math.floor(r.state.money).toLocaleString()}`;
  v(
    `p`,
    `bg-foot`,
    e,
    i(
      `到長安東路汽車街的狂飆改裝車行看車、買車。買下的車放在背包裡，下了車隨時叫出來。錢包：${c}`,
      `See and buy the cars at Rush Custom Garage on Chang'an E. Rd's car street. A car you buy lives in your bag: summon it any time you're on foot. Wallet: ${c}`,
    ),
  );
  let l = y(Fe);
  (l &&
    m(
      v(`div`, `bg-sheet-row`, e),
      `bg-use gr-home-go`,
      () => {
        (Z(r, { x: l.x, z: l.z }, { zh: `我的家`, en: `My Home` }),
          r.events.emit(`notify`, {
            text: {
              zh: `📍 已導航回家（康定路）`,
              en: `📍 GPS set: home (Kangding Rd)`,
            },
            kind: `info`,
            duration: 3.5,
          }),
          document.querySelector(`.ph-close`)?.click());
      },
      i(`🏠 回家（車庫在家裡）`, `🏠 Go home (your garage)`),
    ),
    o.notice &&
      v(`div`, `bg-notice ${o.notice.kind}`, e, o.notice.text).setAttribute(
        `role`,
        `status`,
      ));
  let u = v(`div`, `gr-list`, e);
  for (let e of w) {
    let t = I(r, e.id),
      s = v(`div`, `gr-card${t ? ` owned` : ``}`, u);
    ((s.dataset.car = e.id),
      s.style.setProperty(
        `--gr-glow`,
        `#${(e.glow || e.trim).toString(16).padStart(6, `0`)}`,
      ));
    let c = v(`div`, `gr-art`, s);
    ((c.innerHTML = Ne(e)), c.setAttribute(`aria-hidden`, `true`));
    let d = t && P(r, e.id);
    d
      ? v(`span`, `gr-badge`, s, i(`💥 爆掉了`, `💥 Wrecked`))
      : e.badge
        ? v(`span`, `gr-badge`, s, t ? i(`✓ 已擁有`, `✓ Owned`) : a(e.badge))
        : t && v(`span`, `gr-badge`, s, i(`✓ 已擁有`, `✓ Owned`));
    let f = v(`div`, `gr-words`, s);
    (v(`strong`, ``, f, a(e.name)), v(`p`, `gr-tag`, f, a(e.tagline)));
    let p = v(`div`, `gr-stats`, s);
    for (let [t, n, r] of [
      [
        i(`極速`, `Top speed`),
        Q(e.tune.maxKmh, 120, 340),
        `${e.tune.maxKmh} km/h`,
      ],
      [i(`加速`, `Accel`), Q(e.tune.accel, 4, 14.5), `0–100 ${oe(e)} s`],
      [
        i(`操控`, `Handling`),
        Q(e.tune.grip * 10 + e.tune.drifty * 2, 11, 15),
        e.tune.drifty >= 1.5
          ? i(`甩尾`, `Drift`)
          : e.tune.grip >= 1.15
            ? i(`抓地`, `Grip`)
            : i(`平衡`, `Balanced`),
      ],
    ]) {
      let e = v(`div`, `gr-stat`, p);
      v(`span`, ``, e, t);
      let i = v(`i`, ``, e);
      ((v(`b`, ``, i).style.width = `${Math.round(n * 100)}%`),
        v(`em`, ``, e, r));
    }
    o.open === e.id && v(`p`, `bg-blurb`, s, a(e.blurb));
    let g = v(`div`, `bg-sheet-row`, s);
    if (d) {
      let e = m(
        g,
        `bg-use gr-home`,
        () => {
          l &&
            (Z(r, { x: l.x, z: l.z }, { zh: `我的家`, en: `My Home` }),
            r.events.emit(`notify`, {
              text: {
                zh: `📍 已導航回家（康定路），去車庫把車牽出來`,
                en: `📍 GPS set: home (Kangding Rd). Pick the car up in the garage.`,
              },
              kind: `info`,
              duration: 3.5,
            }),
            document.querySelector(`.ph-close`)?.click());
        },
        l
          ? i(`🏠 回家牽車`, `🏠 Pick it up at home`)
          : i(`家在臺北`, `Home is in Taipei`),
      );
      e.disabled = !l;
    } else if (t) {
      let t = z(r),
        o = m(
          g,
          `bg-use gr-go`,
          () => {
            let t = xe(r, e.id);
            if (t.ok) {
              let e = document.querySelector(`.ph-close`);
              e ? e.click() : h(a(t.text), `good`);
            } else h(a(t.text), `bad`);
            n();
          },
          t.ok ? i(`🚗 叫車`, `🚗 Summon`) : a(t.text),
        );
      o.disabled = !t.ok;
    } else {
      let t = F(e.price),
        n = y(Pe),
        a = v(`div`, `gr-price`, s);
      (v(`span`, ``, a, i(`售價`, `Price`)),
        v(`strong`, ``, a, t.label),
        s.insertBefore(a, g));
      let o = m(
        g,
        `bg-use gr-buy`,
        () => {
          n &&
            (Z(
              r,
              { x: n.x, z: n.z },
              { zh: `狂飆改裝車行`, en: `Rush Custom Garage` },
            ),
            r.events.emit(`notify`, {
              text: {
                zh: `📍 已導航到長安東路的狂飆改裝車行`,
                en: `📍 GPS set: Rush Custom Garage, Chang'an E. Rd`,
              },
              kind: `info`,
              duration: 3.5,
            }),
            document.querySelector(`.ph-close`)?.click());
        },
        n
          ? i(`📍 去車行看車`, `📍 Visit the showroom`)
          : i(`車行在臺北`, `Showroom in Taipei`),
      );
      o.disabled = !n;
    }
    m(
      g,
      `bg-close`,
      () => {
        ((o.open = o.open === e.id ? null : e.id), n());
      },
      o.open === e.id ? i(`收起`, `Less`) : i(`介紹`, `More`),
    );
  }
  let d = q(r);
  d.length && queueMicrotask(() => ke(r));
  let f = x.filter((e) => Oe(r).includes(e) || d.includes(e)),
    p = v(`div`, `bg-head`, e);
  if (
    (v(`strong`, ``, p, i(`我的機車`, `My Bikes`)),
    v(
      `span`,
      ``,
      p,
      i(`擁有 ${f.length}/${x.length}`, `Owned ${f.length}/${x.length}`),
    ),
    !f.length)
  )
    v(
      `p`,
      `bg-foot`,
      e,
      i(
        `在機車行買下的速克達、檔車和重機也會停在這裡，下了車隨時牽出來。`,
        `A scooter, motorcycle or superbike you buy at a motorbike shop waits here too: bring it out any time you are on foot.`,
      ),
    );
  else {
    let t = v(`div`, `gr-list`, e),
      o = z(r);
    for (let e of f) {
      let s = v(`div`, `gr-card owned bike`, t);
      ((s.dataset.bike = e.id),
        s.style.setProperty(
          `--gr-glow`,
          `#${e.paint.toString(16).padStart(6, `0`)}`,
        ),
        v(`div`, `gr-bike-art`, s, e.glyph).setAttribute(
          `aria-hidden`,
          `true`,
        ));
      let c = v(`div`, `gr-words`, s);
      (v(`strong`, ``, c, a(e.name)),
        v(
          `p`,
          `gr-tag`,
          c,
          i(`機車行買的，隨時牽出來`, `Bought at the bike shop: yours to ride`),
        ));
      let l = m(
        v(`div`, `bg-sheet-row`, s),
        `bg-use gr-go`,
        () => {
          let t = Ae(r, e.id);
          if (t.ok) {
            let e = document.querySelector(`.ph-close`);
            e ? e.click() : h(a(t.text), `good`);
          } else h(a(t.text), `bad`);
          n();
        },
        o.ok ? i(`${e.glyph} 牽車`, `${e.glyph} Ride it`) : a(o.text),
      );
      l.disabled = !o.ok;
    }
  }
  function m(e, n, r, i) {
    let a = v(`button`, `bg-btn ${n}`, e, i);
    return (
      (a.type = `button`),
      (a.dataset.nav = `1`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t.sfx(`ui_click`, 0.6), r());
      }),
      a
    );
  }
  function h(e, t) {
    ((o.notice = { text: e, kind: t }),
      clearTimeout(o.noticeT),
      (o.noticeT = setTimeout(() => {
        ((o.notice = null), n());
      }, 4200)));
  }
}
var $ = { open: null, notice: null };
function Re() {
  (clearTimeout($.noticeT), ($.open = null), ($.notice = null));
}
export { Le as mountGarage, Re as resetGarage, Ie as tempting };
