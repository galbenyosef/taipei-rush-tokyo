// tokyo/assets/lab-CQYp1Cs9 02 — drv
// Lines 342-626 of readable/tokyo/assets/lab-CQYp1Cs9.pretty.js (statement-aligned).
async function N(e) {
  let n = e.params.get(`animlab`);
  if (!n) return null;
  let r = n in T ? n : `showcase`,
    i = T[r],
    a = await m(),
    o = new t();
  ((o.name = `animlab`), e.scene.add(o));
  try {
    let t = Number(e.params.get(`animpeds`) ?? `0`);
    Number.isFinite(t) && (e.peds.density = t);
  } catch {}
  e.params.get(`animstairs`) !== `0` && F(e, o);
  let s = (t, n) =>
      e.groundAt ? e.groundAt(t, n, 2) : e.plan.groundHeight(t, n),
    c = (e.params.get(`animlanes`) ?? `jie,wen`).split(`,`).filter(Boolean),
    u = [];
  c.forEach((n, r) => {
    let l = n === `proc` ? `proc` : `mocap`,
      d = g(n === `wen` ? v : h),
      m = new t();
    (m.add(d.root), o.add(m));
    let b = k + (r - (c.length - 1) / 2) * j,
      x,
      S,
      C;
    if (l === `mocap`)
      ((S = new p(f(d), a, {
        groundAt: (t, n, r) =>
          e.groundAt ? e.groundAt(t, n, r) : e.plan.groundHeight(t, n),
        seed: 11 + r,
      })),
        (x = D(S)));
    else {
      let e = new y(_(d));
      ((C = e), (x = P(e)));
    }
    let w = new E(x, i, s, !0);
    (w.root.add(m), o.add(w.root));
    let T = A - (r - (c.length - 1) / 2) * M;
    w.reset(T, b, Math.PI / 2);
    let O = I(
      l === `proc`
        ? `舊版程序動畫`
        : n === `wen`
          ? `小雯 · 動作捕捉`
          : `阿傑 · 動作捕捉`,
      l === `proc` ? `PROCEDURAL (current)` : `MOCAP (new)`,
      l === `proc` ? `#9ab` : `#ffd98a`,
    );
    (o.add(O),
      u.push({
        id: n,
        kind: l,
        rc: d,
        holder: m,
        drv: w,
        mocap: S,
        proc: C,
        label: O,
        z: b,
        x0: T,
      }));
  });
  let d = !1,
    b = e.params.get(`animcam`) ?? `side`,
    x = 0,
    S = Number(e.params.get(`animspeed`) ?? `1`) || 1,
    C = new l(),
    w = new l(),
    O = new l(),
    N = 0,
    L = 0,
    R = (e) => {
      for (let t of u) {
        (t.drv.update(e),
          t.drv.looped &&
            ((t.drv.looped = !1), t.drv.reset(t.x0, t.z, Math.PI / 2)));
        let n = performance.now();
        (t.mocap && t.mocap.update(e, t.drv.root),
          t.mocap && ((N += performance.now() - n), L++),
          t.proc && t.proc.update(e),
          t.label.position.set(t.drv.pos.x, t.drv.pos.y + 2.12, t.drv.pos.z));
      }
    },
    z = Number(e.params.get(`animfov`) ?? `34`),
    B = () => {
      Number.isFinite(z) &&
        z > 5 &&
        e.camera.fov !== z &&
        ((e.camera.fov = z), e.camera.updateProjectionMatrix());
      let t = u[Math.min(x, u.length - 1)],
        n = 0,
        r = 0;
      for (let e of u) ((n += e.drv.pos.x), (r += e.drv.pos.z));
      ((n /= u.length), (r /= u.length));
      let i = s(n, r);
      switch (b) {
        case `close`:
          (O.set(Math.sin(t.drv.heading), 0, -Math.cos(t.drv.heading)),
            C.set(
              t.drv.pos.x + O.z * 3.2 - O.x * 1.2,
              t.drv.pos.y + 1.35,
              t.drv.pos.z - O.x * 3.2 - O.z * 1.2,
            ),
            w.set(t.drv.pos.x, t.drv.pos.y + 0.95, t.drv.pos.z));
          break;
        case `34`:
          (C.set(n + 5, i + 2.4, r - 7.2), w.set(n, i + 0.9, r));
          break;
        case `front`:
          (C.set(n + 9, i + 1.5, r), w.set(n, i + 0.9, r));
          break;
        case `back`:
          (C.set(n - 7, i + 2.2, r), w.set(n, i + 1, r));
          break;
        case `wide`:
          (C.set(n, i + 5, r - 7.9), w.set(n, i + 0.8, r));
          break;
        default:
          (C.set(n, i + 1.15, r - 7.9), w.set(n, i + 0.9, r));
      }
      try {
        e.cameraRig.override(C, w);
      } catch {
        (e.camera.position.copy(C), e.camera.lookAt(w));
      }
    },
    V = () => {
      for (let e of u) e.drv.reset(e.x0, e.z, Math.PI / 2);
    },
    H = {
      scenarios: Object.keys(T),
      get duration() {
        return u[0]?.drv.duration ?? 0;
      },
      get t() {
        return u[0]?.drv.t ?? 0;
      },
      at(e) {
        V();
        let t = 1 / 60,
          n = Math.round(e / t);
        for (let e = 0; e < n; e++) R(t);
        return (
          (d = !0),
          B(),
          u.map((e) => ({
            id: e.id,
            x: +e.drv.pos.x.toFixed(2),
            z: +e.drv.pos.z.toFixed(2),
            speed: +e.drv.speed.toFixed(2),
            action: e.mocap?.action ?? null,
          }))
        );
      },
      play() {
        d = !1;
      },
      cam(e, t = 0) {
        ((b = e), (x = t), B());
      },
      stats() {
        let e = {
          msPerCharacter: L ? N / L : 0,
          clips: a.clips.size,
          packKB: Math.round(a.bytes / 1024),
        };
        return ((N = 0), (L = 0), e);
      },
    };
  return (
    (window.__animlab = H),
    console.log(
      `[test] animlab: scenario ${r}, ${u.length} lanes, ${a.clips.size} clips (${Math.round(a.bytes / 1024)} KB)`,
    ),
    B(),
    {
      update(e) {
        (d || R(Math.min(e, 0.05) * S), B());
      },
    }
  );
}
function P(e) {
  return {
    input(t) {
      let n = e.inp;
      ((n.speed = t.speed),
        (n.dirX = 0),
        (n.dirZ = -1),
        (n.turnRate = t.turnRate),
        (n.accel = t.accel),
        (n.grounded = t.grounded),
        (n.vy = t.vy),
        (n.airTime = t.grounded ? 0 : n.airTime + 1 / 60),
        (n.aim = t.aim),
        (n.lookYaw = t.look[0]),
        (n.lookPitch = t.look[1]));
    },
    land(t) {
      e.landImpact(Math.min(1.2, t / 12));
    },
    play(t) {
      let n = {
        jab: `jab`,
        cross: `cross`,
        hook: `cross`,
        uppercut: `uppercut`,
        kick: `kick`,
        wave: `wave`,
        cheer: `cheer`,
        pray: `pray`,
      }[t];
      n && e.play(n);
    },
    hit() {
      e.play(`hit`);
    },
    die() {
      e.setState(`dead`, 0.2);
    },
    rootMotion: () => null,
    busy: () => !1,
  };
}
function F(e, t) {
  let n = -806.4,
    r = 0.32,
    l = 0.15,
    u = 2.2,
    d = e.plan.groundHeight(n, k),
    f = [],
    p = (t, n, r) => {
      let i = new c(n - t, r, 5.199999999999989);
      (i.translate((t + n) / 2, d + r / 2, -501.2 / 2), f.push(i));
      try {
        e.statics.addFloorRect(t, -253.2, n, -248, d + r, `animlab-stairs`);
      } catch {}
    },
    m = n;
  for (let e = 1; e <= 3; e++, m += r) p(m, m + r, l * e);
  (p(m, m + u, l * 3), (m += u));
  for (let e = 3; e >= 1; e--, m += r) p(m, m + r, l * e);
  let h = 0;
  for (let e of f) h += e.attributes.position.count;
  let g = new Float32Array(h * 3),
    _ = new Float32Array(h * 3),
    v = [],
    y = 0;
  for (let e of f) {
    (g.set(e.attributes.position.array, y * 3),
      _.set(e.attributes.normal.array, y * 3));
    let t = e.index.array;
    for (let e = 0; e < t.length; e++) v.push(t[e] + y);
    ((y += e.attributes.position.count), e.dispose());
  }
  let b = new a();
  (b.setAttribute(`position`, new o(g, 3)),
    b.setAttribute(`normal`, new o(_, 3)),
    b.setIndex(v));
  let x = new i(b, new s({ color: 10131086, roughness: 0.85 }));
  ((x.castShadow = !0), (x.receiveShadow = !0), t.add(x));
}
function I(t, i, a) {
  let o = document.createElement(`canvas`);
  ((o.width = 320), (o.height = 80));
  let s = o.getContext(`2d`);
  ((s.fillStyle = `rgba(10,12,16,0.72)`),
    s.beginPath(),
    s.roundRect(4, 4, 312, 72, 16),
    s.fill(),
    (s.textAlign = `center`),
    (s.textBaseline = `middle`),
    (s.fillStyle = a),
    (s.font = `800 28px ${d}`),
    s.fillText(t, 160, 32),
    (s.fillStyle = `#d8dde6`),
    (s.font = `600 15px ${d}`),
    s.fillText(i, 160, 60));
  let c = new u(o);
  c.colorSpace = r;
  let l = new e(new n({ map: c, depthWrite: !1, transparent: !0 }));
  return (l.scale.set(1, 0.25, 1), l);
}
