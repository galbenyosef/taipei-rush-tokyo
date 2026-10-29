// tokyo/assets/actors-bknSEpf2 92 — math
// Lines 41303-42178 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function _C(e, t) {
  let n = null,
    r = null,
    i = null,
    a = e.params,
    o = a.get(`traffic`),
    s = a.get(`trafficDebug`) === `1`,
    c = a.get(`trafficRiders`),
    l = a.get(`trafficAudio`) !== `0`,
    u = Number(a.get(`trafficDensity`) ?? 1);
  Number.isFinite(u) || (u = 1);
  let d = 0,
    f = 0,
    p = 0,
    m = 0,
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = null,
    b = 0,
    x = [
      { kind: `scooter`, h: null, car: null, vol: 0.5, sent: -1 },
      { kind: `scooter`, h: null, car: null, vol: 0.5, sent: -1 },
      { kind: `car`, h: null, car: null, vol: 0.5, sent: -1 },
      { kind: `bus`, h: null, car: null, vol: 0.5, sent: -1 },
    ];
  for (let e of x) e.vol = 0;
  let S = !1,
    C = !1,
    w = 0,
    T = 0,
    E = (e) => {
      let t = {
        id: Ue(),
        kind: `vehicle`,
        owner: `traffic`,
        x: 0,
        y: 0,
        z: 0,
        heading: 0,
        halfW: 0.9,
        halfL: 2.3,
        radius: 2.5,
        height: 1.5,
        vx: 0,
        vz: 0,
        mass: 1300,
        active: !1,
      };
      return (
        (t.onImpact = (t, n, r) => A(e, t, n, r)),
        (t.onDamage = (t) => te(e, t)),
        nx(t, [
          `x`,
          `y`,
          `z`,
          `heading`,
          `halfW`,
          `halfL`,
          `radius`,
          `height`,
          `vx`,
          `vz`,
        ]),
        t
      );
    };
  function D(e, t) {
    if (t <= fC) return 0;
    let n = Math.min(1.25, Math.max(0.35, 1500 / e.mass));
    return 0.08 * mC * (t * t - 25) * n;
  }
  function O(e, t, r, i) {
    if (!n) return;
    let a = Math.sin(e.heading) * e.v,
      o = -Math.cos(e.heading) * e.v;
    (n.releaseSlot(e),
      n.releaseWaitSlot(e),
      (e.mode = 2),
      (e.svx = a + t),
      (e.svz = o + r),
      (e.spin = i),
      (e.rest = 0),
      (e.stage = 0),
      (e.committed = !1),
      (e.blinker = 0),
      (e.dwellS = -1),
      (e.dirty = !0));
  }
  function k(t) {
    try {
      let n = t.heading + Math.PI / 2;
      e.peds.spawnFleeing(
        t.x + Math.sin(n) * 1.2,
        t.z - Math.cos(n) * 1.2,
        t.heading + Math.PI,
      );
    } catch {}
    ((t.abandoned = !0),
      (t.lean = t.seed < 0.5 ? 1.38 : -1.38),
      (t.y = t.halfW * Math.abs(Math.sin(t.lean)) * 0.92),
      (t.dirty = !0));
  }
  function A(e, t, r, i) {
    if (!n) return;
    let a = n.cars[e];
    if (!a.active) return;
    let o = Math.hypot(t, r) / a.mass;
    if (!Number.isFinite(o) || o < 0.05) return;
    let s = o;
    if (o > 16) {
      let e = 16 / o;
      ((t *= e), (r *= e), (o = 16));
    }
    let c = t / a.mass,
      l = r / a.mass;
    if (
      (i !== null &&
        (i === n.playerVehicleBody || i.kind === `player`) &&
        a.ud.police &&
        !a.abandoned &&
        !a.burnt &&
        s > 2 &&
        le(a),
      !a.burnt && a.fireT <= 0)
    ) {
      let e = n.now;
      if ((e - a.hitT > pC && (a.hitDv = 0), (a.hitT = e), s > a.hitDv)) {
        let e = D(a, s) - D(a, a.hitDv);
        if (
          ((a.hitDv = s),
          e > 0 && ((a.health = Math.max(0, a.health - e)), a.health <= hC))
        ) {
          (O(a, c, l, (n.rng.next() - 0.5) * o * 0.2),
            j(a, gC * (0.8 + n.rng.next() * 0.4)));
          return;
        }
      }
    }
    if (a.fireT > 0 || a.burnt) {
      a.mode === 2 ? ((a.svx += c), (a.svz += l)) : O(a, c, l, 0);
      return;
    }
    if (o < 0.6 && a.mode !== 2) {
      ((a.v *= 0.4), (a.blocked = 2.1), n.honk(a, !0));
      return;
    }
    let u = Math.sin(a.heading),
      d = -Math.cos(a.heading),
      f = 0;
    if (i) {
      let e = (i.x - a.x) * u + (i.z - a.z) * d;
      f = (t * -d + r * u) * Math.sign(e || 1);
    }
    (O(
      a,
      c,
      l,
      Math.max(
        -3,
        Math.min(3, (f / a.mass) * 0.25 + (n.rng.next() - 0.5) * o * 0.25),
      ),
    ),
      a.two && o > 3
        ? ((a.wrecked = !1), k(a))
        : o > 7.5
          ? ((a.wrecked = !0), (a.hazard = !1))
          : ((a.hazard = !0), n.honk(a, !0)));
  }
  function j(t, r) {
    if (!(!n || t.burnt || t.fireT > 0)) {
      if (
        (t.mode !== 2 && O(t, 0, 0, (n.rng.next() - 0.5) * 0.6),
        (t.health = 0),
        (t.wrecked = !0),
        (t.hazard = !1),
        (t.fireT = r),
        (t.dirty = !0),
        F++,
        t.two)
      )
        t.abandoned || k(t);
      else if (!t.abandoned) {
        t.abandoned = !0;
        try {
          let n = t.heading + (_t(e.plan.side) * Math.PI) / 2;
          e.peds.spawnFleeing(
            t.x + Math.sin(n) * (t.halfW + 0.9),
            t.z - Math.cos(n) * (t.halfW + 0.9),
            t.heading + Math.PI,
          );
        } catch {}
      }
      pe(t.x, t.z, 35);
    }
  }
  let M = [],
    N = new V(),
    ee = new V();
  function P(t) {
    if (!n) return;
    ((t.fireT = 0),
      (t.burnT = 0.001),
      (t.burnt = !0),
      (t.wrecked = !0),
      (t.hazard = !1),
      (t.dirty = !0),
      t.mode === 2 && (t.spin += (n.rng.next() - 0.5) * 1.6));
    let r = t.x,
      i = t.y,
      a = t.z;
    try {
      e.events.emit(`vehicle:destroyed`, {
        pos: new V(r, i, a),
        vehicleId: -1,
      });
    } catch {}
    let o = t.two ? 6 : 9,
      s = e.dynamics.query(r, a, o, M);
    for (let e = 0; e < s; e++) {
      let n = M[e];
      if (n === t.body || !n.active || n.owner === `peds`) continue;
      let i = n.x - r,
        s = n.z - a,
        c = Math.hypot(i, s),
        l = 1 - Math.min(1, c / o);
      if (l <= 0) continue;
      (ee.set(i / (c || 1), 0.35, s / (c || 1)).normalize(),
        N.set(n.x, n.y + 1, n.z));
      let u = n.owner === `traffic` ? 25 + 160 * l * l : 40 + 260 * l * l;
      try {
        (n.onDamage?.({ amount: u, source: `explosion`, point: N, dir: ee }),
          n.owner !== `vehicles` &&
            n.onImpact?.(
              ee.x * 900 * l * Math.min(4, n.mass / 80),
              ee.z * 900 * l * Math.min(4, n.mass / 80),
              t.body,
            ));
      } catch {}
    }
    let c = t.camDist;
    if (c < 70)
      try {
        (e.cameraRig.shake(Math.max(0.1, Math.min(1, 1.2 - c / 60))),
          e.input.rumble(Math.max(0, Math.min(1, 1 - c / 50)), 400));
      } catch {}
  }
  let F = 0;
  function I(e) {
    if (!n || F <= 0) return;
    let t = 0;
    for (let r of n.active)
      (r.fireT > 0 && ((r.fireT -= e), r.fireT <= 0 && P(r)),
        r.burnT > 0
          ? ((r.burnT += e), r.burnT < 40 && t++)
          : r.fireT > 0 && t++);
    F = t;
  }
  function te(t, r) {
    if (!n) return;
    let i = n.cars[t];
    if (i.active && !i.burnt) {
      if (
        ((i.health = Math.max(0, i.health - (r.amount ?? 0))),
        i.ud.police &&
          r.source === `player` &&
          !i.abandoned &&
          i.crimeCd <= 0 &&
          (se(`assault_police`, i.x, i.z, 0.9, !0), (i.crimeCd = 2.5), le(i)),
        i.health <= hC)
      ) {
        j(
          i,
          r.source === `explosion`
            ? 1.2 + n.rng.next() * 2
            : gC * (0.7 + n.rng.next() * 0.5),
        );
        return;
      }
      if (!(i.fireT > 0 || i.wrecked || i.abandoned)) {
        if (r.source === `explosion`) {
          ((i.panic = 9 + n.rng.next() * 5), n.honk(i, !0));
          return;
        }
        if (i.mode === 0 && i.v < 7 && n.rng.next() < 0.45 && !i.ud.police) {
          if (
            (O(i, 0, 0, 0),
            (i.svx = i.svz = 0),
            (i.abandoned = !0),
            (i.hazard = !i.two),
            i.two)
          )
            k(i);
          else
            try {
              let t = i.heading + (_t(e.plan.side) * Math.PI) / 2;
              e.peds.spawnFleeing(
                i.x + Math.sin(t) * (i.halfW + 0.9),
                i.z - Math.cos(t) * (i.halfW + 0.9),
                i.heading + Math.PI,
              );
            } catch {}
        } else ((i.panic = 9 + n.rng.next() * 5), n.honk(i, !0));
      }
    }
  }
  let ne = [, , , , , ,].fill(`assault_police`),
    re = new Float32Array(6),
    ie = new Float32Array(6),
    ae = new Float32Array(6),
    L = new Uint8Array(6),
    R = 0,
    oe = !1;
  function se(e, t, n, r, i) {
    R >= 6 ||
      ((ne[R] = e), (re[R] = t), (ie[R] = n), (ae[R] = r), (L[R] = +!!i), R++);
  }
  function ce() {
    if (!R) return;
    let t = R;
    ((R = 0), (oe = !0));
    for (let n = 0; n < t; n++)
      try {
        e.events.emit(`crime`, {
          type: ne[n],
          pos: new V(re[n], 0, ie[n]),
          severity: ae[n],
          witnessed: L[n] === 1,
        });
      } catch {}
    oe = !1;
  }
  function le(t) {
    let n = t.alert > 0;
    if (((t.alert = 25), t.hurry < 8 && (t.hurry = 8), !n && t.camDist < 70))
      try {
        e.audio.play(`police_squelch`, { x: t.x, y: 1.4, z: t.z, volume: 0.9 });
      } catch {}
  }
  let ue = new V(),
    z = new V(),
    de = { distance: 0, point: new V(), normal: new V(), tag: ``, body: null };
  function fe(t, r, i) {
    if (!n) return null;
    let a = i * (1 - 0.2 * Gt.uNight.value),
      o = null,
      s = a;
    for (let i of n.active) {
      if (!i.ud.police || i.abandoned || i.wrecked || i.burnt) continue;
      let n = t - i.x,
        a = r - i.z,
        c = Math.sqrt(n * n + a * a);
      if (
        !(c >= s) &&
        !(
          c > 12 &&
          (n * Math.sin(i.heading) - a * Math.cos(i.heading)) / c < -0.35
        )
      ) {
        if (
          c > 4 &&
          (ue.set(i.x, i.y + 1.3, i.z),
          z.set(n / c, -0.2 / c, a / c).normalize(),
          e.statics.raycast(ue, z, c - 1.5, de))
        ) {
          let e = de.tag;
          if (
            e !== `tree` &&
            e !== `pole` &&
            e !== `pillar` &&
            e !== `prop` &&
            e !== `sign` &&
            e !== `lamp` &&
            e !== `floor`
          )
            continue;
        }
        ((s = c), (o = i));
      }
    }
    return o;
  }
  function pe(e, t, r) {
    if (!n) return;
    let i = r * r;
    for (let r of n.active) {
      let a = r.x - e,
        o = r.z - t;
      a * a + o * o > i ||
        ((r.panic = 6 + n.rng.next() * 6),
        r.two && r.mode === 0 && (r.bypass = (n.rng.next() - 0.5) * 1.6),
        n.rng.next() < 0.35 && n.honk(r, !0));
    }
  }
  function me(e) {
    if (n && l && S) {
      if (((w -= e), r.camX, r.camZ, w <= 0)) {
        w = 0.3;
        for (let e of x) e.car = null;
        for (let e of x) {
          let t = null,
            r = 48;
          for (let i of n.active)
            i.camDist > r ||
              i.mode === 2 ||
              i.kind === ox ||
              ((i.two ? `scooter` : i.kind === 6 ? `bus` : `car`) === e.kind &&
                x[0].car !== i &&
                x[1].car !== i &&
                x[2].car !== i &&
                x[3].car !== i &&
                ((t = i), (r = i.camDist)));
          e.car = t;
        }
      }
      for (let t of x) {
        if (!t.h) continue;
        let n = t.car,
          r = 0;
        if (n && n.active) {
          let e = n.camDist,
            i = Math.max(0, 1 - e / 48);
          r =
            i *
            i *
            (t.kind === `scooter` ? 0.55 : t.kind === `bus` ? 0.7 : 0.45) *
            (0.35 + Math.min(1, n.v / 12) * 0.65);
          try {
            t.h.setPosition(n.x, n.y + 0.8, n.z);
            let e = t.kind === `scooter` ? 16 : 18;
            (t.h.setParam(`rpm`, Math.min(1, 0.15 + (n.v / e) * 0.85)),
              t.h.setParam(
                `throttle`,
                n.acc > 0.3 ? Math.min(1, n.acc / 2.5) : 0.1,
              ));
          } catch {}
        }
        t.vol += (r - t.vol) * Math.min(1, e * 4);
        let i = t.vol - t.sent;
        if (i > 0.002 || i < -0.002 || (t.vol < 0.002 && t.sent > 0)) {
          t.sent = t.vol < 0.002 ? 0 : t.vol;
          try {
            t.h.setVolume(t.sent);
          } catch {}
        }
      }
    }
  }
  function he() {
    if (!S && l) {
      S = !0;
      for (let t of x)
        try {
          ((t.h = e.audio.loop(
            t.kind === `scooter`
              ? `engine_scooter`
              : t.kind === `bus`
                ? `engine_bus`
                : `engine_car`,
            { volume: 0 },
          )),
            t.h.setVolume(0),
            (t.sent = 0));
        } catch {
          t.h = null;
        }
    }
  }
  function B() {
    if (!n) return;
    ((g = 0), (_ = 0));
    let e = n.active;
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      if ((n.mode === 1 && n.stuck > 10 && _++, n.mode !== 2))
        for (let r = t + 1; r < e.length; r++) {
          let t = e[r];
          if (t.mode === 2) continue;
          let i = t.x - n.x,
            a = t.z - n.z,
            o = Math.min(n.halfW, n.halfL) + Math.min(t.halfW, t.halfL);
          i * i + a * a < o * o * 0.8 && g++;
        }
    }
  }
  function ge() {
    let e = {},
      t = { link: 0, junction: 0, free: 0, wait2: 0 },
      a = 0,
      o = 0;
    if (n) {
      for (let r of n.active)
        ((e[rx[r.kind]] = (e[rx[r.kind]] ?? 0) + 1),
          r.mode === 0
            ? t.link++
            : r.mode === 1
              ? t.junction++
              : r.mode === 2
                ? t.free++
                : r.mode === 3 && t.wait2++,
          r.slot >= 0 && a++,
          r.visible && o++);
      B();
    }
    return {
      count: n?.active.length ?? 0,
      target: r?.target() ?? 0,
      visible: o,
      byKind: e,
      modes: t,
      inScooterBox: a,
      jsMsAvg: +d.toFixed(3),
      jsMsMax: +f.toFixed(3),
      drawCalls: i?.drawCalls ?? 0,
      overlaps: g,
      stuckInJunction: _,
      spawned: r?.spawned ?? 0,
      despawned: r?.despawned ?? 0,
      pedHits: n?.hits ?? 0,
      rush: +(r?.rk ?? 0).toFixed(2),
      queued: r?.queued ?? 0,
      tris: i?.tris ?? 0,
      fillMs: +v.toFixed(1),
      far: i?.farCount ?? 0,
      movingNear: r?.movingNear ?? 0,
      arterial: r?.arterial ?? 0,
      corridor: r?.corridor ?? 0,
      fires: F,
    };
  }
  function _e() {
    y ||
      ((y = document.createElement(`div`)),
      Object.assign(y.style, {
        position: `fixed`,
        left: `8px`,
        bottom: `8px`,
        zIndex: `9999`,
        font: `11px/1.35 ui-monospace,Menlo,monospace`,
        color: `#ffd76a`,
        background: `rgba(0,0,0,.6)`,
        padding: `6px 8px`,
        borderRadius: `6px`,
        pointerEvents: `none`,
        whiteSpace: `pre`,
      }),
      document.body.appendChild(y));
    let e = ge();
    y.textContent =
      `TRAFFIC ${e.count}/${e.target} vis ${e.visible} far ${e.far}  js ${e.jsMsAvg}ms (max ${e.jsMsMax})  calls ${e.drawCalls}  tris ${((e.tris ?? 0) / 1e3).toFixed(0)}k  rush ${e.rush} queued ${e.queued} moving ${e.movingNear}\n` +
      Object.entries(e.byKind)
        .map(([e, t]) => `${e}:${t}`)
        .join(` `) +
      `
link ${e.modes.link} junc ${e.modes.junction} free ${e.modes.free} 待轉 ${e.modes.wait2} box ${e.inScooterBox}  overlaps ${e.overlaps} stuckJ ${e.stuckInJunction}`;
  }
  return {
    name: `traffic`,
    get count() {
      return n ? n.active.length : 0;
    },
    get density() {
      return r ? r.density : u;
    },
    set density(e) {
      ((u = e), r && (r.density = e));
    },
    claimNearest(e, t, i, a) {
      if (!n || !r) return null;
      let o = a?.maxSpeed ?? 1 / 0,
        s = a?.y !== void 0 && Number.isFinite(a.y) ? a.y : void 0,
        c = null,
        l = i;
      for (let r of n.active) {
        if (
          r.wrecked ||
          (s === void 0 ? n.aboveGround(r) > 1.5 : Math.abs(r.y - s) > 2.5) ||
          (r.mode === 2 ? Math.hypot(r.svx, r.svz) : r.v) > o
        )
          continue;
        let i = e - r.x,
          a = t - r.z,
          u = Math.sin(r.heading),
          d = -Math.cos(r.heading),
          f = i * u + a * d,
          p = i * -d + a * u,
          m = Math.max(0, Math.abs(p) - r.halfW),
          h = Math.max(0, Math.abs(f) - r.halfL),
          g = Math.hypot(m, h);
        g < l && ((l = g), (c = r));
      }
      if (!c) return null;
      let u = c,
        d = u.ud.police && !u.abandoned,
        f = {
          kind: rx[u.kind],
          color: u.color,
          x: u.x,
          z: u.z,
          heading: u.heading,
          speed: u.mode === 2 ? Math.hypot(u.svx, u.svz) : u.v,
          abandoned: u.abandoned,
          health: u.health,
          seed: 0.001 + u.seed * 0.998,
          police: d,
          y: u.y,
        };
      return (r.despawn(u), f);
    },
    panic(e, t, n) {
      pe(e, t, n);
    },
    holdArea(e, t, r) {
      if (!n) return () => {};
      let i = { x: e, z: t, r, active: !0 };
      n.holds.push(i);
      let a = !1;
      return () => {
        if (a || !n) return;
        ((a = !0), (i.active = !1));
        let e = n.holds.indexOf(i);
        e >= 0 && n.holds.splice(e, 1);
      };
    },
    stats: ge,
    stopLine(e) {
      if (!n) return null;
      let t = n.net;
      return e < 0 || e >= t.nL
        ? null
        : { car: t.stopCar[e], scooter: t.stopScoot[e], box: t.box[e] === 1 };
    },
    writePositions(e) {
      if (!n) return 0;
      let t = Math.floor(e.length / 4),
        r = 0;
      for (let i = 0; i < n.active.length && r < t; i++) {
        let t = n.active[i],
          a = r * 4;
        ((e[a] = t.x),
          (e[a + 1] = t.z),
          (e[a + 2] = t.heading),
          (e[a + 3] = t.kind),
          r++);
      }
      return r;
    },
    turnBoxSpot(e) {
      if (!n) return null;
      let t = n.net;
      if (e < 0 || e >= t.nL || !t.twoStage[e]) return null;
      for (let r = t.turnStart[e], i = r + t.turnCount[e]; r < i; r++) {
        if (t.turnType[r] !== Mx) continue;
        let e = n.links[t.turnOut[r]],
          i = t.feeder[e.id];
        if (i < 0) return null;
        let a = n.links[i],
          o = a.length + 2.07,
          s = t.laneOff(i, a.lanes - 1);
        return {
          x: a.sx + a.dx * o + ct(a, s, t.side),
          z: a.sz + a.dz * o + Be(a, s, t.side),
          heading: e.heading,
        };
      }
      return null;
    },
    patrolSees(e, t, n) {
      return fe(e, t, n) !== null;
    },
    busesDwelling(e) {
      if (!n) return 0;
      let t = Math.floor(e.length / 3),
        r = 0;
      for (let i = 0; i < n.active.length && r < t; i++) {
        let t = n.active[i];
        t.kind !== 6 ||
          t.mode !== 0 ||
          t.dwellS < 0 ||
          t.dwellT <= 0 ||
          ((e[r * 3] = t.x),
          (e[r * 3 + 1] = t.z),
          (e[r * 3 + 2] = t.heading),
          r++);
      }
      return r;
    },
    nearestPolice(e, t, r) {
      if (!n) return null;
      let i = null,
        a = r;
      for (let r of n.active) {
        if (r.kind !== 7 || r.mode === 2 || r.abandoned || r.wrecked) continue;
        let n = Math.hypot(r.x - e, r.z - t);
        n < a && ((a = n), (i = r));
      }
      return i ? { x: i.x, z: i.z, heading: i.heading, dist: a } : null;
    },
    vehicles() {
      let e = [];
      if (n)
        for (let t of n.active)
          e.push({
            x: t.x,
            z: t.z,
            heading: t.heading,
            kind: rx[t.kind],
            speed: t.v,
          });
      return e;
    },
    init() {
      if (
        ((n = t ? t.sim(e, 180, E) : new uC(e, 180, E)),
        (r = t ? t.pop(e, n) : new Gx(e, n)),
        (r.density = u),
        o !== null)
      ) {
        let e = Number(o);
        o === `0`
          ? (r.enabled = !1)
          : Number.isFinite(e) && e > 0 && (r.override = Math.floor(e));
      }
      ((i = new $S(e, n, 180)),
        (i.patrolLights = a.get(`trafficPatrolLights`) !== `0`));
      let l = a.get(`trafficFarAt`);
      l !== null &&
        Number.isFinite(Number(l)) &&
        (dx.farScooter = dx.farCar = Math.max(0, Number(l)));
      let d = a.get(`trafficMidAt`);
      d !== null &&
        Number.isFinite(Number(d)) &&
        (dx.midCar = dx.midBus = Math.max(0, Number(d)));
      let f = a.get(`trafficProxy`),
        p = r.specs;
      i.build(
        c === `1` || (c !== `0` && null),
        f === `1` ? `on` : f === `0` ? `off` : `auto`,
        (e) => [p[e].halfW, p[e].halfL, p[e].height],
        a.get(`trafficLod`) !== `0`,
      );
      let m = i;
      ((n.onHorn = (t) => {
        if (!(t.camDist > 110))
          try {
            e.audio.play(lx[t.kind].horn, {
              x: t.x,
              y: 1,
              z: t.z,
              volume: 0.8,
            });
          } catch {}
      }),
        (n.onDespawn = () => {}),
        (r.onActivate = (e) => m.prepareCar(e)),
        s &&
          (window.__traffic = {
            sim: n,
            pop: r,
            render: i,
            stats: ge,
            restartVoices: () => {
              for (let e of x) {
                try {
                  e.h?.stop();
                } catch {}
                e.h = null;
              }
              return ((S = !1), he(), x);
            },
            TUNE: dx,
          }));
    },
    start() {
      n &&
        r &&
        (e.events.on(`crime`, (e) => {
          if (
            !e.pos ||
            ((e.type === `shooting` ||
              e.type === `kill` ||
              e.type === `kill_police`) &&
              pe(e.pos.x, e.pos.z, 45),
            oe || e.witnessed)
          )
            return;
          let t = fe(e.pos.x, e.pos.z, e.type === `shooting` ? 70 : 55);
          t && le(t);
        }),
        e.events.on(`vehicle:destroyed`, (e) => pe(e.pos.x, e.pos.z, 60)),
        e.events.on(`quality:changed`, () => i?.applyQuality()),
        e.events.on(`player:spawned`, () => he()),
        e.params.has(`autoplay`) && setTimeout(he, 500));
    },
    update(t) {
      if (!n || !r) return;
      let i = performance.now();
      try {
        n.playerVehicleBody = e.vehicles.playerVehicle?.body ?? null;
      } catch {
        n.playerVehicleBody = null;
      }
      try {
        n.rain = e.env?.rain ?? 0;
      } catch {
        n.rain = 0;
      }
      if ((T -= t) <= 0) {
        ((T = 0.5), (n.nSirens = 0));
        try {
          let t = 1;
          try {
            t = e.police?.level ?? 1;
          } catch {
            t = 1;
          }
          for (let r of e.vehicles.list) {
            if (
              !r.sirenOn ||
              r.destroyed ||
              n.nSirens >= 4 ||
              (r.driver !== `player` &&
                (Math.abs(r.speed) < 4 || (r.kind === `police` && t <= 0)))
            )
              continue;
            let e = n.nSirens * 3;
            ((n.sirens[e] = r.body.x),
              (n.sirens[e + 1] = r.body.z),
              (n.sirens[e + 2] = r.heading),
              n.nSirens++);
          }
        } catch {}
        for (let e of n.active) {
          if (n.nSirens >= 4) break;
          if (
            e.alert <= 0 ||
            !e.ud.police ||
            e.abandoned ||
            e.mode === 2 ||
            e.v < 3
          )
            continue;
          let t = n.nSirens * 3;
          ((n.sirens[t] = e.x),
            (n.sirens[t + 1] = e.z),
            (n.sirens[t + 2] = e.heading),
            n.nSirens++);
        }
      }
      try {
        let t = e.vehicles.playerVehicle;
        t &&
          e.input.pressed(`horn`) &&
          n.honkedAt(t.body.x, t.body.z, t.heading);
      } catch {}
      if ((r.updateView(), !C && e.time.frame >= 2)) {
        C = !0;
        let e = performance.now();
        (r.initialFill(), (v = performance.now() - e));
      }
      (n.update(t), I(t), r.update(t), me(t), ce());
      let a = performance.now() - i;
      ((p += a),
        m++,
        a > h && (h = a),
        m >= 60 && ((d = p / m), (f = h), (p = 0), (m = 0), (h = 0)),
        s && (b -= t) <= 0 && ((b = 0.5), _e()));
    },
    lateUpdate() {
      if (!i) return;
      let e = performance.now();
      (i.write(), (p += performance.now() - e));
    },
  };
}
