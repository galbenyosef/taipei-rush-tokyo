// tokyo/assets/world-Bo9wkXrT 42 — math
// Lines 13137-13482 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function vu(e, t, n, r) {
  let i = e.ctx ?? null,
    a = e.q,
    o = n.facing,
    s = Math.cos(o),
    c = Math.sin(o),
    l = n.x,
    u = n.z,
    d = n.y,
    f = `sites:${t.id}:${r}`,
    p = new xc({ ox: l, oz: u, y0: d, facing: o }),
    m = e.atlasView,
    h = new rt(r === `mid` ? 2048 : 8192),
    g = a === `low` || r === `interior` ? null : new rt(1024),
    _ = new br(m.white, r === `mid` ? 1024 : 4096),
    y = r === `interior` ? new br(m.white, 4096) : null,
    b = a === `high` && e.mats?.glass ? new br(m.white, 512) : null,
    x = [],
    S = [],
    C = [],
    w = (e, t, n, r, i) => {
      let a = 0,
        o = 0,
        s = Math.max(1e-6, (n - e) * (r - t));
      for (let [c, l, u, d, f] of C) {
        let p = Math.min(n, u) - Math.max(e, c),
          m = Math.min(r, d) - Math.max(t, l);
        if (p <= 0.05 || m <= 0.05 || f > i - 1.2) continue;
        let h = (p * m) / s;
        (h > o + 0.02 || (Math.abs(h - o) <= 0.02 && f > a)) &&
          ((a = f), (o = Math.max(h, o)));
      }
      return a;
    },
    T = [],
    E = [],
    D = n.frontage?.label ?? { zh: ``, en: `` },
    O = {
      w: n.w,
      d: n.d,
      sx: (t.lot?.w ?? 0) > 0 ? n.w / t.lot.w : 1,
      sz: (t.lot?.d ?? 0) > 0 ? n.d / t.lot.d : 1,
      y0: d,
      facing: o,
      sidewalk: e.sidewalk ?? n.frontage?.sidewalk ?? 3,
      road: D,
      wx: (e, t) => l + e * s - t * c,
      wz: (e, t) => u + e * c + t * s,
    },
    k = {
      meta: t,
      site: n,
      tier: r,
      q: a,
      rng: new Oe(je(t.id, r)),
      state: 0,
      frame: O,
      lm: h,
      leaves: g,
      art: _,
      room: y,
      glass: b,
      atlas: m,
      box: (e, t, n, r, i = 0, a = i + 3) => p.box(e, t, n, r, i, a),
      obb: (e, t, n, r, i, a = 0, o = a + 3) => p.obb(e, t, n, r, i, a, o),
      circle: (e, t, n, r = 0, i = r + 3) => p.circle(e, t, n, r, i),
      floor: (e, t, n, r, i) => {
        (C.push([
          Math.min(e, n),
          Math.min(t, r),
          Math.max(e, n),
          Math.max(t, r),
          i,
        ]),
          p.floor(e, t, n, r, i));
      },
      stairs: (e, t, n, r, i, a, o) => {
        let s = Math.max(1, Math.round(i)),
          c = p.stairs(e, t, n, r, s, a, o),
          l = Math.abs(n) / 2,
          u = Math.abs(o);
        (h.push(), h.translate(e, 0, t), h.rotateY(-r));
        for (let e = 0; e < s; e++) {
          let t = 23 | (e === s - 1 ? 32 : 0);
          h.box(-l, 0, -(e + 1) * u, l, (e + 1) * c, -e * u, t);
        }
        h.pop();
      },
      interact: (e) => {
        x.push(e);
      },
      indoor: (e, t, n, i, a, o = 2.5, s) => {
        r === `interior`
          ? S.push({
              x0: Math.min(e, n),
              z0: Math.min(t, i),
              x1: Math.max(e, n),
              z1: Math.max(t, i),
              ceilY: a,
              floorY: 0,
              maxCamDist: o,
              openFront: s,
            })
          : E.push(`indoor() outside the interior tier ignored`);
      },
      live: (e, t, n, r) => {
        if (T.length >= Ql) {
          E.push(`live() over ${Ql} per tier ignored`);
          return;
        }
        T.push({ x: e, z: t, rot: n, pose: r });
      },
      glow: (e, t) => et(e, t, X.LIT),
    },
    A = null;
  function* j(n = !0) {
    if (A) return A;
    let s = uu(),
      c = 0,
      C = () => {
        let e = uu();
        ((c += e - s), (s = e));
      };
    iu.finishes++;
    try {
      m.sinceUpload() < ru && iu.afterUpload++;
    } catch {}
    let D = e.mats,
      k = new v();
    ((k.name = f),
      (k.userData.owner = `sites`),
      k.position.set(l, d, u),
      (k.rotation.y = -o),
      (k.matrixAutoUpdate = !1),
      k.updateMatrix());
    let j = m.white;
    h.empty || du(h);
    let M = (D?.cityLook && D.city) || null,
      N = !!D && D.lm === D.ext,
      P = !!D && D.leaf === D.ext,
      F = !!D && !N && !M,
      ee =
        F &&
        r === `near` &&
        a === `high` &&
        (e.camDist ?? 0) <= eu &&
        i?.quality?.shadows !== !1,
      I = !!g && !g.empty && !M;
    I && !P && g.cutout();
    let L = F && I && !P && D.leaf === D.lm;
    if (M) {
      let n = D.cityLook.geometry(h, g, _, j);
      if ((C(), yield, (s = uu()), n)) {
        let o = _u(n, M, `${f}:city`);
        o.receiveShadow = !0;
        let s = 0;
        for (let e of t.proxy) s = Math.max(s, (e.y ?? 0) + e.h);
        ((o.castShadow =
          r === `near` &&
          a === `high` &&
          s >= tu &&
          (e.camDist ?? 0) <= nu &&
          i?.quality?.shadows !== !1),
          k.add(o));
      }
    } else if (F) {
      let e = [];
      if ((h.empty || e.push(h.view()), L && e.push(g.view()), e.length)) {
        C();
        let t = yield* Dc(
          e,
          D.lm,
          `${f}:lm`,
          ee && e.length === 2 ? $l : void 0,
        );
        ((s = uu()),
          (t.receiveShadow = !0),
          (t.castShadow = ee && !h.empty),
          (t.matrixAutoUpdate = !1),
          t.updateMatrix(),
          k.add(t));
      }
      if (I && !L) {
        let e = g.build();
        fu(e, j);
        let t = _u(e, D?.leaf, `${f}:leaves`);
        ((t.matrixAutoUpdate = !1), t.updateMatrix(), k.add(t));
      }
    } else {
      let e = h.empty ? null : h.build(),
        t = I ? g.build() : null;
      if (e) {
        N && fu(e, j);
        let t = _u(e, D?.lm, `${f}:lm`);
        ((t.receiveShadow = !N), k.add(t));
      }
      if (t) {
        P && fu(t, j);
        let e = _u(t, D?.leaf, `${f}:leaves`);
        ((e.receiveShadow = !P), k.add(e));
      }
    }
    (C(), yield, (s = uu()));
    let R = !!b && b.icount > 0 && !!D?.glass && pu.has(r),
      te = R ? mu(b.toGeometry(), l, d, u, o) : null;
    if (
      (_.icount > 0 &&
        !M &&
        (k.add(_u(_.toGeometry(), D?.ext, `${f}:art`)), C(), yield, (s = uu())),
      y && y.icount > 0)
    ) {
      let e = _u(y.toGeometry(), D?.room, `${f}:room`);
      ((e.renderOrder = -30), k.add(e), C(), yield, (s = uu()));
    }
    (b &&
      b.icount > 0 &&
      D?.glass &&
      !R &&
      k.add(_u(b.toGeometry(), D.glass, `${f}:glass`)),
      h.release(),
      g?.release(),
      _.release(!1),
      y?.release(!1),
      b?.release(!1));
    let ne = Ao(k);
    globalThis.__SITE_MESH_DEBUG &&
      console.warn(
        `[meshdbg] ${t.id} ${r}/${a} ` +
          k.children
            .map(
              (e) =>
                `${e.name.split(`:`).pop()}=${(e.geometry?.getIndex()?.count ?? 0) / 3}t`,
            )
            .join(` `),
      );
    let re = Mo(r, a, ne);
    if (re) {
      if (a === `low`) {
        for (let e of [...k.children])
          (e.name.endsWith(`:leaves`) || e.name.endsWith(`:glass`)) &&
            (k.remove(e), e.geometry.dispose());
        (Ao(k, ne), (re = Mo(r, a, ne)));
      }
      re && console.warn(`[test] sites over-budget ${t.id} ${re}`);
    }
    for (let e of [...E, ...p.warnings])
      console.warn(`[test] sites ${t.id}:${r} ${e}`);
    for (let e of S) e.floorY = w(e.x0, e.z0, e.x1, e.z1, e.ceilY);
    let z = n ? p.commit(i?.statics, f) : null,
      ie = [];
    if (i && T.length) {
      let e = i.peds?.spawnScripted?.bind(i.peds);
      if (e)
        for (let n of T)
          try {
            let t = e(O.wx(n.x, n.z), O.wz(n.x, n.z), {
              heading: o + n.rot,
              pose: n.pose ?? `idle`,
              y: d,
            });
            t && (t.stop(n.pose ?? `idle`, o + n.rot), ie.push(t));
          } catch (e) {
            console.warn(`[test] sites ${t.id} live() failed`, e);
          }
    }
    let ae = !1,
      oe = {
        root: k,
        calls: ne.calls,
        tris: ne.tris,
        scope: z,
        spots: x,
        indoor: S,
        over: re,
        colliderCount: p.colliders,
        floorCount: p.floors,
        glass: te,
        dispose() {
          if (!ae) {
            ((ae = !0),
              te?.dispose(),
              k.parent?.remove(k),
              k.traverse((e) => {
                if (kc(e)) return e.dispose();
                let t = e.geometry;
                t?.isBufferGeometry && t.dispose();
              }),
              k.clear(),
              z?.dispose());
            for (let e of ie)
              try {
                e.release();
              } catch {}
            ((ie.length = 0), (x.length = 0), (S.length = 0));
          }
        },
      };
    return (
      (A = oe),
      C(),
      c > iu.finishMaxMs && (iu.finishMaxMs = Math.round(c * 100) / 100),
      oe
    );
  }
  return {
    b: k,
    colliders: p,
    finish: () => {
      let e = j(!0);
      for (;;) {
        let t = e.next();
        if (t.done) return t.value;
      }
    },
    finishSteps: j,
  };
}
function yu(e, t, n, r, i) {
  let a = Math.cos(e.facing),
    o = Math.sin(e.facing);
  return (
    (i.x = e.x + t * a - r * o),
    (i.y = e.y + n),
    (i.z = e.z + t * o + r * a),
    i
  );
}
var bu = Ur.proxyCalls,
  xu = 0.35,
  Su = 0.15,
  Cu = Ur.proxyTris,
  wu = 0.8,
  Tu = 1.5,
  Eu = new Map();
function Du(e, t) {
  let n = Eu.get(e);
  return (n || Eu.set(e, (n = t())), n);
}
var Ou = (e, t, n, r) => ({
  flags: Qe.WINDOWS,
  er: e,
  eg: t,
  eb: n,
  ei: 1.4,
  ex: r,
});
