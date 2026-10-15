// tokyo/assets/garage-BvwUBeJB 02 — box
// Lines 225-572 of readable/tokyo/assets/garage-BvwUBeJB.pretty.js (statement-aligned).
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
