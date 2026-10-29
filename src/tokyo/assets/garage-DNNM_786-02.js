// tokyo/assets/garage-DNNM_786 02 — box
// Lines 277-619 of readable/tokyo/assets/garage-DNNM_786.pretty.js (statement-aligned).
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
