// tokyo/assets/garage-DNNM_786 03 — includes
// Lines 620-950 of readable/tokyo/assets/garage-DNNM_786.pretty.js (statement-aligned).
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
  tempting = (e) => w.some((t) => !I(e, t.id) && e.state.money >= F(t.price).v),
  Q = (e, t, n) => Math.max(0.08, Math.min(1, (e - t) / (n - t)));
