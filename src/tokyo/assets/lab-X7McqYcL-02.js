// tokyo/assets/lab-X7McqYcL 02 — params
// Lines 52-379 of readable/tokyo/assets/lab-X7McqYcL.pretty.js (statement-aligned).
async function M(t) {
  let r = t.params.get(`avatarlab`);
  if (!r) return null;
  let i = r === `1` ? `compare` : r,
    a = new n();
  ((a.name = `avatarlab`), t.scene.add(a));
  let o = [],
    s = performance.now();
  T(t.renderer.gl);
  let c = await E(),
    l = t.params.get(`avatarsel`)?.split(`,`).filter(Boolean),
    u = t.params.get(`avatarwalk`) !== `0`,
    d = (e, n) =>
      (t.groundAt ? t.groundAt(e, n, 1) : t.plan.groundHeight(e, n)) + 0.02,
    f = {
      mode: i,
      loadMs: 0,
      bytes: 0,
      tris: 0,
      drawCalls: 0,
      avatars: 0,
      updateMs: 0,
      frames: 0,
      texMode: D(),
      gpuMB: 0,
      heroGpuMB: 0,
      formats: [],
      uploadMs: 0,
    },
    _ = async (n, r, i, s, c = 0) => {
      let l = c === 1 ? g(n) : v(n),
        u = d(r, i);
      (l.root.position.set(r, u, i), a.add(l.root));
      let p = {
        id: `proc-${n.id}`,
        label: {
          zh: e.on
            ? e.t(
                `程序 ${n.name?.zh ?? n.id}`,
                `プロシージャル ${e.jz(n.name?.zh ?? n.id)}`,
              )
            : `程序 ${n.name?.zh ?? n.id}`,
          en: `procedural ${n.name?.en ?? n.id}`,
        },
        kind: `proc`,
        x: r,
        z: i,
        y: u,
        height: l.height,
        walk: s,
        proc: l,
        anim: new h(l, o.length),
        phase: 0,
      };
      return (o.push(p), (f.tris += l.triangles), await t.yieldFrame(), p);
    },
    x = async (e, n, r, i, s = 0) => {
      let l = c.avatars.find((t) => t.id === e),
        u = t.params.get(`avatarshadow`) !== `0`,
        p = await w(e, { castShadow: l.role === `hero` || u }),
        m = d(n, r);
      (p.root.position.set(n, m, r), (p.root.rotation.y = -s), a.add(p.root));
      let g = j(e, l.sex === `f`),
        _ = {
          id: e,
          label: l.label ?? { zh: e, en: e },
          kind: `rbx`,
          x: n,
          z: r,
          y: m,
          height: p.height,
          walk: i,
          rbx: p,
          anim: new h(p.asRiggedCharacter(g), o.length),
          phase: 0,
        };
      return (o.push(_), (f.tris += p.triangles), _);
    },
    A = c.avatars
      .filter((e) => e.role === `hero` && !e.id.includes(`lod`))
      .map((e) => e.id),
    M = c.avatars
      .filter((e) => e.role === `crowd` || e.role === `police`)
      .map((e) => e.id),
    F =
      i === `crowd`
        ? M
        : i === `faces`
          ? [...A, ...M]
          : i === `perf`
            ? [...A.slice(0, 1), ...M]
            : A,
    I = l ? F.filter((e) => l.includes(e)) : F,
    L = performance.now(),
    R = await Promise.all(I.map((e) => C(e)));
  ((f.loadMs = performance.now() - L),
    (f.texMode = D()),
    (f.bytes = R.reduce(
      (e, t) =>
        e +
        (t.textures.mode === `ktx2`
          ? t.entry.bytes
          : (t.entry.fallbackBytes ?? t.entry.bytes)),
      0,
    )),
    (f.gpuMB = +(
      R.reduce((e, t) => e + t.textures.gpuBytes, 0) / 1048576
    ).toFixed(2)),
    (f.heroGpuMB = +(
      Math.max(
        0,
        ...R.filter((e) => e.entry.role === `hero`).map(
          (e) => e.textures.gpuBytes,
        ),
      ) / 1048576
    ).toFixed(2)),
    (f.formats = [...new Set(R.flatMap((e) => e.textures.formats))]),
    (f.uploadMs = +R.reduce((e, t) => e + t.textures.uploadMs, 0).toFixed(1)));
  let z = [O.z + k * 1.2, O.z - k * 1.4];
  if (i === `compare` || i === `ref` || i === `walk` || i === `run`) {
    let e = [
        [m, `jie`],
        [b, `wen`],
      ],
      n = i === `walk` || i === `run`,
      r = 0;
    for (let [i, a] of e) {
      if (l && !l.includes(a)) continue;
      let e = O.x + (0.5 - r) * 2.4;
      (t.params.get(`avatarproc`) !== `0` && (await _(i, e + 0.42, z[0], n)),
        c.avatars.some((e) => e.id === a) && (await x(a, e - 0.42, z[0], n)),
        r++);
    }
  } else if (i === `crowd` || i === `faces`) {
    let e = I.length,
      t = i === `faces`,
      n = t ? e : Math.ceil(e / 2);
    for (let r = 0; r < e; r++) {
      let i = Math.floor(r / n),
        a = r - i * n,
        o = i === 0 ? Math.min(n, e) : e - n,
        s = t ? 0.52 : 1.05;
      await x(
        I[r],
        O.x + (a - (o - 1) / 2) * s + (i ? s / 2 : 0),
        z[i],
        i === 1 && u,
      );
    }
  } else if (i === `player`) {
    let e = 0;
    for (let t of A) {
      if (l && !l.includes(t)) continue;
      let n = await x(t, O.x + (e - 0.5) * 1.6, O.z, !1),
        r = n.rbx.toPlayerRig();
      ((n.player = new S(r)), (n.anim = void 0), e++);
    }
  } else if (i === `perf`) {
    let e = Number(t.params.get(`avatarcount`) ?? `20`),
      n = t.params.get(`avatarkind`) === `proc`,
      r = I.find((e) => A.includes(e));
    e > 0 &&
      (n
        ? await _(m, O.x, O.z + k * 2.2, !1)
        : r && (await x(r, O.x, O.z + k * 2.2, !1)));
    let i = I.filter((e) => !A.includes(e));
    for (let t = 0; t < e && (i.length || n); t++) {
      let r = n
        ? await _(y[t % y.length], O.x, O.z, !0, 1)
        : await x(i[t % i.length], O.x, O.z, !0);
      r.phase = t / e;
    }
  }
  P(t, a, o, t.params.get(`avatarlabels`) !== `0` && i !== `perf`);
  for (let e of o)
    f.drawCalls += e.rbx
      ? e.rbx.drawCalls
      : e.proc
        ? Array.isArray(e.proc.mesh.material)
          ? e.proc.mesh.material.length
          : 1
        : 0;
  f.avatars = o.filter((e) => e.rbx).length;
  try {
    t.peds.density = Number(t.params.get(`avatarpeds`) ?? `0.2`);
  } catch {}
  console.log(
    `[test] avatarlab ${i}: ${o.length} characters (${f.avatars} Rocketbox), ${(f.bytes / 1024).toFixed(0)} KB loaded in ${f.loadMs.toFixed(0)} ms, textures ${f.texMode} ${f.gpuMB} MB VRAM (hero ${f.heroGpuMB} MB; ${f.formats.join(`, `)}; upload ${f.uploadMs} ms), ${f.tris} tris, ${f.drawCalls} Rocketbox draw calls, built in ${(performance.now() - s).toFixed(0)} ms`,
  );
  let B = Number(t.params.get(`avatarfov`)),
    V = (e, t = `face`) => {
      let n = o.find((t) => t.id === e) ?? o[Number(e)] ?? o[0],
        r = n.height,
        i = n.y,
        a = i + r - (r / 1.72) * 0.1,
        s = (e) => e.map((e) => e.toFixed(3)).join(`,`);
      if (t.startsWith(`pair`)) {
        let e = o.find(
            (e) =>
              e !== n &&
              e.id.replace(/^proc-/, ``) === n.id.replace(/^proc-/, ``),
          ),
          r = e ? (n.x + e.x) / 2 : n.x,
          c = e ? Math.max(a, e.y + e.height - 0.1 * (e.height / 1.72)) : a;
        return s(
          t === `pairface`
            ? [r, c - 0.02, n.z + k * 1.45, r, c - 0.05, n.z]
            : t === `pairbust`
              ? [r, c - 0.2, n.z + k * 2.3, r, c - 0.3, n.z]
              : [r, i + 1.05, n.z + k * 4.6, r, i + 0.88, n.z],
        );
      }
      switch (t) {
        case `bust`:
          return s([n.x, a - 0.12, n.z + k * 1.25, n.x, a - 0.22, n.z]);
        case `body`:
          return s([n.x, i + 1.15, n.z + k * 3.3, n.x, i + 0.9, n.z]);
        case `back`:
          return s([n.x, i + 1.35, n.z - k * 2.6, n.x, i + 1, n.z]);
        case `backhead`:
          return s([n.x + 0.25, a + 0.08, n.z - k * 0.75, n.x, a - 0.02, n.z]);
        case `chase`:
          return s([n.x + 0.6, i + 2.2, n.z - k * 3.9, n.x, i + 1.45, n.z]);
        case `side`:
          return s([n.x + 2.6, i + 1.2, n.z + k * 0.3, n.x, i + 0.95, n.z]);
        default:
          return s([n.x, a, n.z + k * 0.6, n.x, a - 0.015, n.z]);
      }
    },
    H = t.params.get(`avatarcam`);
  if (H) {
    let [e, n] = H.split(`:`),
      r = (
        (e === `wide`
          ? `${O.x},1.5,${O.z + k * 5.6},${O.x},0.95,${O.z}`
          : e === `far`
            ? `${O.x},2.2,${O.z + -14},${O.x},1.0,${O.z + 2}`
            : null) ?? V(e, n ?? `face`)
      )
        .split(`,`)
        .map(Number),
      i = t.cameraRig;
    `fixed` in i && (i.fixed = r);
  }
  window.__avatarlab = {
    slots: o.map((e) => ({
      id: e.id,
      kind: e.kind,
      x: e.x,
      z: e.z,
      height: e.height,
      tris: e.rbx?.triangles ?? e.proc?.triangles,
      drawCalls: e.rbx?.drawCalls ?? 2,
    })),
    cam: V,
    wide: () => `${O.x},1.5,${O.z + k * 5.6},${O.x},0.95,${O.z}`,
    stats: f,
  };
  let U = 0,
    W = Number(t.params.get(`avatarlid`) ?? `-1`),
    G = Number(t.params.get(`avatarjaw`) ?? `0`);
  return {
    update(e) {
      ((U += e),
        Number.isFinite(B) &&
          B > 5 &&
          t.camera.fov !== B &&
          ((t.camera.fov = B), t.camera.updateProjectionMatrix()));
      let n = performance.now();
      for (let t of o) {
        let n = t.rbx?.root ?? t.proc?.root;
        if (i === `perf` && t.walk && n) {
          t.phase = (t.phase + (1.3 * e) / 28) % 1;
          let r = t.phase * 28,
            i,
            a,
            o;
          (r < 9
            ? ((i = -9 / 2 + r), (a = 0), (o = Math.PI / 2))
            : r < 14
              ? ((i = 9 / 2), (a = r - 9), (o = Math.PI))
              : r < 23
                ? ((i = 9 / 2 - (r - 9 - 5)), (a = 5), (o = -Math.PI / 2))
                : ((i = -9 / 2), (a = 5 - (r - 18 - 5)), (o = 0)),
            n.position.set(O.x + i, t.y, O.z + 0.6 + a),
            (n.rotation.y = -o));
        }
        (t.anim &&
          i !== `ref` &&
          t.anim.update(
            e,
            t.walk
              ? i === `run`
                ? { gait: 2, speed: 3.6 }
                : { gait: 1, speed: 1.3 }
              : { gait: 0, speed: 0 },
          ),
          t.player && N(t.player, U, e),
          W >= 0 &&
            t.rbx &&
            ((t.rbx.bones[p.lidL].scale.y = Math.max(0.001, W)),
            (t.rbx.bones[p.lidR].scale.y = Math.max(0.001, W)),
            (t.rbx.bones[p.jaw].rotation.x = G)),
          t.rbx?.update());
      }
      let r = performance.now() - n;
      ((f.updateMs = f.frames ? f.updateMs * 0.95 + r * 0.05 : r), f.frames++);
    },
  };
}
function N(e, t, n) {
  let r = e.inp,
    i = Math.floor(t / 4) % 5;
  ((r.grounded = !0),
    (r.aim = 0),
    (r.weapon = `fists`),
    (r.speed = 0),
    (r.dirX = 0),
    (r.dirZ = -1),
    i === 0
      ? (r.speed = 1.5)
      : i === 1
        ? (r.speed = 5.5)
        : i === 2
          ? ((r.weapon = `pistol`), (r.aim = 1))
          : i === 3 && (r.weapon = `bat`),
    e.update(n));
}
