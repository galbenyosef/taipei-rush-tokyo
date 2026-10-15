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
function A(e, t, n, r, i) {
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
        n.id === `car-golden-101` || a === 1372415 ? D : a,
        -0.12,
      );
      for (let t of [-1, 1])
        (r.box(t * 0.5, c + 0.17, e, 0.04, 0.36, 0.16, D),
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
      r.box(0, 0.215, t.front + 0.04, t.W * 1.8, 0.025, 0.2, D);
      for (let e of [-1, 1])
        r.box(e * t.W * 0.86, 0.25, t.front - 0.02, 0.025, 0.06, 0.1, D);
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
          a === 1372415 ? D : a,
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
      let e = t.deck[1];
      for (let t of [0.15, 1.95]) {
        for (let n of [-1, 1]) r.box(n * 0.8, e + 0.5, t, 0.06, 1, 0.06, O);
        let n = e + 1,
          a = 0.8;
        for (let e = 0; e < 14; e++) {
          let r = (e / 14) * Math.PI,
            o = Math.PI * ((e + 1) / 14);
          i.bar(
            [Math.cos(r) * a, n + Math.sin(r) * a * 0.7, t],
            [Math.cos(o) * a, n + Math.sin(o) * a * 0.7, t],
            0.07,
            E[e % E.length],
          );
        }
      }
      for (let e = 0; e < 7; e++)
        i.box(-0.72 + e * 0.24, t.roof[1] + 0.05, -1.25, 0.2, 0.05, 0.08, E[e]);
      r.box(0, e + 0.5, -0.47, 0.6, 0.3, 0.02, n.trim);
      break;
    }
    case `speakers`:
      for (let e of [-1, 1]) {
        r.box(e * 0.42, 1.04, 1.05, 0.62, 0.8, 0.5, 1184534);
        for (let [t, n] of [
          [0.18, 0.2],
          [-0.18, 0.13],
        ])
          (r.cyl(e * 0.42, 1.04 + t, 1.31, n, 0.03, 3816772, `z`, 16),
            r.cyl(e * 0.42, 1.04 + t, 1.33, n * 0.35, 0.02, 9080729, `z`, 10));
        i.box(e * 0.42, 1.46, 1.05, 0.62, 0.025, 0.5, n.glow);
      }
      break;
    case `roofRack`: {
      let e = t.roof[3] + 0.13;
      for (let t of [-1, 1])
        r.box(t * 0.62, e, 1.2000000000000002 / 2, 0.05, 0.05, 2, D);
      for (let t = 0; t < 5; t++)
        r.box(0, e, -0.4 + (t * 2) / 4, 1.28, 0.04, 0.05, D);
      (r.box(0.32, e + 0.17, 1.2, 0.3, 0.3, 0.18, 4147748),
        r.cyl(-0.25, e + 0.1, 0.9, 0.36, 0.16, 1381653, `y`, 16));
      break;
    }
    case `lightBar`: {
      let e = t.roof[3] + 0.24;
      (r.box(0, e, -0.39, 1.36, 0.12, 0.08, D),
        i.box(0, e, -0.44, 1.28, 0.08, 0.02, 16774872));
      for (let e of [-1, 1])
        i.cyl(e * 0.5, 0.82, t.front - 0.2, 0.08, 0.02, 16774872, `z`, 12);
      break;
    }
    case `bullBar`: {
      let e = t.front - 0.16;
      for (let t of [-1, 1])
        (r.bar([t * 0.55, 0.3, e + 0.08], [t * 0.55, 0.98, e], 0.06, D),
          r.bar([t * 0.55, 0.98, e], [t * 0.2, 1, e - 0.02], 0.06, D));
      (r.box(0, 0.98, e - 0.01, 0.46, 0.06, 0.06, D),
        r.box(0, 0.6, e + 0.04, 1.16, 0.06, 0.06, D),
        r.box(0, 0.38, e + 0.1, 1.5, 0.08, 0.08, D));
      break;
    }
    case `snorkel`: {
      let e = t.W + 0.06;
      (r.bar([e, 0.9, -1.3], [e, 1.14, -1.3], 0.1, D),
        r.bar([e, 1.14, -1.3], [e - 0.06, 1.62, -0.74], 0.1, D),
        r.box(e - 0.06, 1.69, -0.78, 0.14, 0.12, 0.18, D));
      break;
    }
  }
}
var j = new Map(),
  M = null,
  N = null,
  P = new Map(),
  F = null;
function oe(e) {
  let t = j.get(e.id);
  if (t) return t;
  let r = k[e.base],
    i = new T(),
    a = new T();
  if (r) for (let t of e.kit) A(t, r, e, i, a);
  let o = null;
  return (
    e.glow &&
      r &&
      ((o = new n(r.W * 2 + 1.3, r.rear - r.front + 1.3)),
      o.rotateX(-Math.PI / 2),
      o.translate(0, f.GROUND + 0.04, (r.rear + r.front) / 2)),
    (t = { solid: i.build(), glow: a.build(), under: o }),
    j.set(e.id, t),
    t
  );
}
function se() {
  if (F) return F;
  let t = document.createElement(`canvas`);
  t.width = t.height = 64;
  let n = t.getContext(`2d`),
    r = n.createRadialGradient(32, 32, 4, 32, 32, 32);
  return (
    r.addColorStop(0, `rgba(255,255,255,0.95)`),
    r.addColorStop(0.55, `rgba(255,255,255,0.55)`),
    r.addColorStop(1, `rgba(255,255,255,0)`),
    (n.fillStyle = r),
    n.fillRect(0, 0, 64, 64),
    (F = new l(t)),
    (F.colorSpace = e),
    F
  );
}
function ce(e, n) {
  let r = oe(n),
    a = [];
  if (r.solid) {
    M ??= new o({ vertexColors: !0, roughness: 0.42, metalness: 0.35 });
    let e = new i(r.solid, M);
    ((e.castShadow = !0),
      (e.receiveShadow = !0),
      (e.name = `garage-kit`),
      a.push(e));
  }
  if (r.glow) {
    N ??= new t({ vertexColors: !0, toneMapped: !1 });
    let e = new i(r.glow, N);
    ((e.name = `garage-neon`), a.push(e));
  }
  if (r.under) {
    let e = P.get(n.glow);
    e ||
      ((e = new t({
        color: n.glow,
        map: se(),
        transparent: !0,
        opacity: 0.85,
        blending: 2,
        depthWrite: !1,
        toneMapped: !1,
      })),
      P.set(n.glow, e));
    let o = new i(r.under, e);
    if (
      ((o.name = `garage-underglow`),
      (o.renderOrder = 2),
      n.kit.includes(`speakers`))
    ) {
      let t = e;
      o.onBeforeRender = () => {
        let e = performance.now() / 1e3;
        t.opacity =
          0.45 + 0.5 * Math.max(0, Math.cos(e * Math.PI * (128 / 60))) ** 4;
      };
    }
    a.push(o);
  }
  for (let t of a) e.add(t);
  return () => {
    for (let e of a) e.removeFromParent();
  };
}
var I = (e) => `wreck-${e}`,
  L = (e, t) => (x(e)[I(t)] ?? 0) > 0;
function le(e, t) {
  L(e, t) || ne(e, I(t));
}
function R(e, t) {
  L(e, t) && re(e, I(t));
}
function z(e) {
  if (_ === `tokyo`) {
    let t = h(e, _);
    return { v: t, label: `¥ ${t.toLocaleString()}` };
  }
  let t = Math.ceil(e / g[_]);
  return { v: t, label: `${p[m[_].currency].symbol} ${t.toLocaleString()}` };
}
var B = (e, t) => !!w[t] && (x(e)[t] ?? 0) > 0,
  V = (e, t, n = `good`, r = 3.5) =>
    e.events.emit(`notify`, { text: t, kind: n, duration: r }),
  H = (e, t) => {
    try {
      e.audio.play(t, { ui: !0, volume: 0.8 });
    } catch {}
  };
function U(e, t = !1, n = !1) {
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
var W = null,
  ue = new WeakMap(),
  de = { zh: `💥 車爆掉了，回家牽車`, en: `💥 Wrecked: pick it up at home` };
function fe(e, t, n, r = !1) {
  let i = w[t];
  if (!i || !B(e, t))
    return {
      ok: !1,
      text: { zh: `你還沒有這台車`, en: `You don't own this car yet` },
    };
  if (!r && L(e, t)) return { ok: !1, text: de };
  let a = U(e, r, r);
  if (!a.ok) return a;
  (he(e), r && R(e, t));
  let o = e.player,
    s = e.vehicles.spawn(
      i.base,
      n?.x ?? o.position.x,
      n?.z ?? o.position.z,
      n?.heading ?? o.heading,
      { color: i.paint, seed: 0.5, y: o.position.y },
    );
  return (
    (W = { v: s, car: i, undress: me(s, i) }),
    pe(e),
    e.vehicles.putPlayerIn(s),
    e.state.stat(`garageSummons`),
    H(e, `ui_confirm`),
    V(
      e,
      { zh: `🚗 ${i.name.zh} 到了！`, en: `🚗 Your ${i.name.en} is here!` },
      `good`,
      3,
    ),
    { ok: !0, text: { zh: `${i.name.zh} 到了`, en: `${i.name.en} is here` } }
  );
}
var G = !1;
function pe(e) {
  G ||
    ((G = !0),
    e.events.on(`vehicle:destroyed`, (t) => {
      let n = W;
      n &&
        t.vehicleId === n.v.id &&
        !L(e, n.car.id) &&
        (le(e, n.car.id),
        V(
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
function me(e, t) {
  return (_e(e, t), ue.set(e, t), ce(ge(e), t));
}
function he(e) {
  let t = W;
  t &&
    ((W = null),
    t.undress(),
    e.vehicles.list.includes(t.v) && e.vehicles.despawn(t.v));
}
function ge(e) {
  return e.tilt ?? e.object;
}
function _e(e, t) {
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
        a = i.accel * (1 - (1.02 / te) ** ee);
      ((e.drag = Math.max(5e-5, (a - v) / (t * t))),
        (n.h = e),
        typeof n.gripK == `number` && (n.gripK = e.grip));
    }
    Object.defineProperty(e, "batchable", { get: () => !1, configurable: !0 });
  } catch (e) {
    console.warn(`[garage] tune`, e);
  }
}
var K = {
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
  q = {
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
  J = {
    sports: [-1.38, 1.3, 0.34],
    sedan: [-1.36, 1.34, 0.33],
    suv: [-1.4, 1.38, 0.4],
    truck: [-1.3, 1.15, 0.31],
  },
  Y = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  X = `#0c0e13`;
function ve(e) {
  let t = (e) => (e + 2.6) * 36 + 6,
    n = (e) => 74 - e * 36,
    r = (e) =>
      e.map(([e, r]) => `${t(e).toFixed(1)},${n(r).toFixed(1)}`).join(` `),
    i = K[e.base] ?? K.sedan,
    [a, o, s] = J[e.base] ?? J.sedan,
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
    (u += `<polygon points="${r(q[e.base] ?? q.sedan)}" fill="#1d2a3a" stroke="${X}" stroke-width="1.2"/>`),
    (u += `<polygon points="${r(q[e.base] ?? q.sedan)}" fill="#9fd6ff" opacity=".18"/>`),
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
var Z = `garage-dealer`,
  ye = `player-home`,
  be = (e) => C.some((t) => !B(e, t.id) && e.state.money >= z(t.price).v),
  Q = (e, t, n) => Math.max(0.08, Math.min(1, (e - t) / (n - t)));
function xe(e, t, n) {
  let r = t.ctx,
    i = (e, n) => t.t({ zh: e, en: n }),
    a = (e) => t.t(e),
    o = $,
    s = b(`div`, `bg-head`, e);
  (b(`strong`, ``, s, i(`我的車庫`, `My Garage`)),
    b(
      `span`,
      ``,
      s,
      i(
        `擁有 ${C.filter((e) => B(r, e.id)).length}/${C.length}`,
        `Owned ${C.filter((e) => B(r, e.id)).length}/${C.length}`,
      ),
    ));
  let c = `${z(0).label.replace(/[\d,]+$/, ``)}${Math.floor(r.state.money).toLocaleString()}`;
  b(
    `p`,
    `bg-foot`,
    e,
    i(
      `到長安東路汽車街的狂飆改裝車行看車、買車。買下的車放在背包裡，下了車隨時叫出來。錢包：${c}`,
      `See and buy the cars at Rush Custom Garage on Chang'an E. Rd's car street. A car you buy lives in your bag: summon it any time you're on foot. Wallet: ${c}`,
    ),
  );
  let l = y(ye);
  (l &&
    d(
      b(`div`, `bg-sheet-row`, e),
      `bg-use gr-home-go`,
      () => {
        (r.ui.setWaypoint(
          { x: l.x, z: l.z },
          { zh: `我的家`, en: `My Home` },
          !0,
        ),
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
      b(`div`, `bg-notice ${o.notice.kind}`, e, o.notice.text).setAttribute(
        `role`,
        `status`,
      ));
  let u = b(`div`, `gr-list`, e);
  for (let e of C) {
    let t = B(r, e.id),
      s = b(`div`, `gr-card${t ? ` owned` : ``}`, u);
    ((s.dataset.car = e.id),
      s.style.setProperty(
        `--gr-glow`,
        `#${(e.glow || e.trim).toString(16).padStart(6, `0`)}`,
      ));
    let c = b(`div`, `gr-art`, s);
    ((c.innerHTML = ve(e)), c.setAttribute(`aria-hidden`, `true`));
    let p = t && L(r, e.id);
    p
      ? b(`span`, `gr-badge`, s, i(`💥 爆掉了`, `💥 Wrecked`))
      : e.badge
        ? b(`span`, `gr-badge`, s, t ? i(`✓ 已擁有`, `✓ Owned`) : a(e.badge))
        : t && b(`span`, `gr-badge`, s, i(`✓ 已擁有`, `✓ Owned`));
    let m = b(`div`, `gr-words`, s);
    (b(`strong`, ``, m, a(e.name)), b(`p`, `gr-tag`, m, a(e.tagline)));
    let h = b(`div`, `gr-stats`, s);
    for (let [t, n, r] of [
      [
        i(`極速`, `Top speed`),
        Q(e.tune.maxKmh, 120, 340),
        `${e.tune.maxKmh} km/h`,
      ],
      [i(`加速`, `Accel`), Q(e.tune.accel, 4, 14.5), `0–100 ${ae(e)} s`],
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
      let e = b(`div`, `gr-stat`, h);
      b(`span`, ``, e, t);
      let i = b(`i`, ``, e);
      ((b(`b`, ``, i).style.width = `${Math.round(n * 100)}%`),
        b(`em`, ``, e, r));
    }
    o.open === e.id && b(`p`, `bg-blurb`, s, a(e.blurb));
    let g = b(`div`, `bg-sheet-row`, s);
    if (p) {
      let e = d(
        g,
        `bg-use gr-home`,
        () => {
          l &&
            (r.ui.setWaypoint(
              { x: l.x, z: l.z },
              { zh: `我的家`, en: `My Home` },
              !0,
            ),
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
      let t = U(r),
        o = d(
          g,
          `bg-use gr-go`,
          () => {
            let t = fe(r, e.id);
            if (t.ok) {
              let e = document.querySelector(`.ph-close`);
              e ? e.click() : f(a(t.text), `good`);
            } else f(a(t.text), `bad`);
            n();
          },
          t.ok ? i(`🚗 叫車`, `🚗 Summon`) : a(t.text),
        );
      o.disabled = !t.ok;
    } else {
      let t = z(e.price),
        n = y(Z),
        a = b(`div`, `gr-price`, s);
      (b(`span`, ``, a, i(`售價`, `Price`)),
        b(`strong`, ``, a, t.label),
        s.insertBefore(a, g));
      let o = d(
        g,
        `bg-use gr-buy`,
        () => {
          n &&
            (r.ui.setWaypoint(
              { x: n.x, z: n.z },
              { zh: `狂飆改裝車行`, en: `Rush Custom Garage` },
              !0,
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
    d(
      g,
      `bg-close`,
      () => {
        ((o.open = o.open === e.id ? null : e.id), n());
      },
      o.open === e.id ? i(`收起`, `Less`) : i(`介紹`, `More`),
    );
  }
  function d(e, n, r, i) {
    let a = b(`button`, `bg-btn ${n}`, e, i);
    return (
      (a.type = `button`),
      (a.dataset.nav = `1`),
      a.addEventListener(`click`, (e) => {
        (e.stopPropagation(), t.sfx(`ui_click`, 0.6), r());
      }),
      a
    );
  }
  function f(e, t) {
    ((o.notice = { text: e, kind: t }),
      clearTimeout(o.noticeT),
      (o.noticeT = setTimeout(() => {
        ((o.notice = null), n());
      }, 4200)));
  }
}
var $ = { open: null, notice: null };
function Se() {
  (clearTimeout($.noticeT), ($.open = null), ($.notice = null));
}
export { xe as mountGarage, Se as resetGarage, be as tempting };
