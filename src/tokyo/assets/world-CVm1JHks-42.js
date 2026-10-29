// tokyo/assets/world-CVm1JHks 42 — math
// Lines 13264-13609 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Pu(e, t, n, r) {
  let i = e.ctx ?? null,
    a = e.q,
    o = n.facing,
    s = Math.cos(o),
    c = Math.sin(o),
    l = n.x,
    u = n.z,
    d = n.y,
    f = `sites:${t.id}:${r}`,
    p = new Lc({ ox: l, oz: u, y0: d, facing: o }),
    m = e.atlasView,
    h = new ut(r === `mid` ? 2048 : 8192),
    g = a === `low` || r === `interior` ? null : new ut(1024),
    _ = new Gr(m.white, r === `mid` ? 1024 : 4096),
    v = r === `interior` ? new Gr(m.white, 4096) : null,
    y = a === `high` && e.mats?.glass ? new Gr(m.white, 512) : null,
    b = [],
    x = [],
    S = [],
    C = (e, t, n, r, i) => {
      let a = 0,
        o = 0,
        s = Math.max(1e-6, (n - e) * (r - t));
      for (let [c, l, u, d, f] of S) {
        let p = Math.min(n, u) - Math.max(e, c),
          m = Math.min(r, d) - Math.max(t, l);
        if (p <= 0.05 || m <= 0.05 || f > i - 1.2) continue;
        let h = (p * m) / s;
        (h > o + 0.02 || (Math.abs(h - o) <= 0.02 && f > a)) &&
          ((a = f), (o = Math.max(h, o)));
      }
      return a;
    },
    w = [],
    T = [],
    E = n.frontage?.label ?? { zh: ``, en: `` },
    D = {
      w: n.w,
      d: n.d,
      sx: (t.lot?.w ?? 0) > 0 ? n.w / t.lot.w : 1,
      sz: (t.lot?.d ?? 0) > 0 ? n.d / t.lot.d : 1,
      y0: d,
      facing: o,
      sidewalk: e.sidewalk ?? n.frontage?.sidewalk ?? 3,
      road: E,
      wx: (e, t) => l + e * s - t * c,
      wz: (e, t) => u + e * c + t * s,
    },
    O = {
      meta: t,
      site: n,
      tier: r,
      q: a,
      rng: new ke(je(t.id, r)),
      state: 0,
      frame: D,
      lm: h,
      leaves: g,
      art: _,
      room: v,
      glass: y,
      atlas: m,
      box: (e, t, n, r, i = 0, a = i + 3) => p.box(e, t, n, r, i, a),
      obb: (e, t, n, r, i, a = 0, o = a + 3) => p.obb(e, t, n, r, i, a, o),
      circle: (e, t, n, r = 0, i = r + 3) => p.circle(e, t, n, r, i),
      floor: (e, t, n, r, i) => {
        (S.push([
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
        b.push(e);
      },
      indoor: (e, t, n, i, a, o = 2.5, s) => {
        r === `interior`
          ? x.push({
              x0: Math.min(e, n),
              z0: Math.min(t, i),
              x1: Math.max(e, n),
              z1: Math.max(t, i),
              ceilY: a,
              floorY: 0,
              maxCamDist: o,
              openFront: s,
            })
          : T.push(`indoor() outside the interior tier ignored`);
      },
      live: (e, t, n, r) => {
        if (w.length >= mu) {
          T.push(`live() over ${mu} per tier ignored`);
          return;
        }
        w.push({ x: e, z: t, rot: n, pose: r });
      },
      glow: (e, t) => st(e, t, X.LIT),
    },
    k = null;
  function* A(n = !0) {
    if (k) return k;
    let s = Eu(),
      c = 0,
      S = () => {
        let e = Eu();
        ((c += e - s), (s = e));
      };
    bu.finishes++;
    try {
      m.sinceUpload() < yu && bu.afterUpload++;
    } catch {}
    let E = e.mats,
      O = new ne();
    ((O.name = f),
      (O.userData.owner = `sites`),
      O.position.set(l, d, u),
      (O.rotation.y = -o),
      (O.matrixAutoUpdate = !1),
      O.updateMatrix());
    let A = m.white;
    h.empty || Du(h);
    let j = (E?.cityLook && E.city) || null,
      M = !!E && E.lm === E.ext,
      ee = !!E && E.leaf === E.ext,
      te = !!E && !M && !j,
      N =
        te &&
        r === `near` &&
        a === `high` &&
        (e.camDist ?? 0) <= gu &&
        i?.quality?.shadows !== !1,
      P = !!g && !g.empty && !j;
    P && !ee && g.cutout();
    let F = te && P && !ee && E.leaf === E.lm;
    if (j) {
      let n = E.cityLook.geometry(h, g, _, A);
      if ((S(), yield, (s = Eu()), n)) {
        let o = Nu(n, j, `${f}:city`);
        o.receiveShadow = !0;
        let s = 0;
        for (let e of t.proxy) s = Math.max(s, (e.y ?? 0) + e.h);
        ((o.castShadow =
          r === `near` &&
          a === `high` &&
          s >= _u &&
          (e.camDist ?? 0) <= vu &&
          i?.quality?.shadows !== !1),
          O.add(o));
      }
    } else if (te) {
      let e = [];
      if ((h.empty || e.push(h.view()), F && e.push(g.view()), e.length)) {
        S();
        let t = yield* Uc(
          e,
          E.lm,
          `${f}:lm`,
          N && e.length === 2 ? hu : void 0,
        );
        ((s = Eu()),
          (t.receiveShadow = !0),
          (t.castShadow = N && !h.empty),
          (t.matrixAutoUpdate = !1),
          t.updateMatrix(),
          O.add(t));
      }
      if (P && !F) {
        let e = g.build();
        Ou(e, A);
        let t = Nu(e, E?.leaf, `${f}:leaves`);
        ((t.matrixAutoUpdate = !1), t.updateMatrix(), O.add(t));
      }
    } else {
      let e = h.empty ? null : h.build(),
        t = P ? g.build() : null;
      if (e) {
        M && Ou(e, A);
        let t = Nu(e, E?.lm, `${f}:lm`);
        ((t.receiveShadow = !M), O.add(t));
      }
      if (t) {
        ee && Ou(t, A);
        let e = Nu(t, E?.leaf, `${f}:leaves`);
        ((e.receiveShadow = !ee), O.add(e));
      }
    }
    (S(), yield, (s = Eu()));
    let I = !!y && y.icount > 0 && !!E?.glass && ku.has(r),
      re = I ? Au(y.toGeometry(), l, d, u, o) : null;
    if (
      (_.icount > 0 &&
        !j &&
        (O.add(Nu(_.toGeometry(), E?.ext, `${f}:art`)), S(), yield, (s = Eu())),
      v && v.icount > 0)
    ) {
      let e = Nu(v.toGeometry(), E?.room, `${f}:room`);
      ((e.renderOrder = -30), O.add(e), S(), yield, (s = Eu()));
    }
    (y &&
      y.icount > 0 &&
      E?.glass &&
      !I &&
      O.add(Nu(y.toGeometry(), E.glass, `${f}:glass`)),
      h.release(),
      g?.release(),
      _.release(!1),
      v?.release(!1),
      y?.release(!1));
    let L = Ko(O);
    globalThis.__SITE_MESH_DEBUG &&
      console.warn(
        `[meshdbg] ${t.id} ${r}/${a} ` +
          O.children
            .map(
              (e) =>
                `${e.name.split(`:`).pop()}=${(e.geometry?.getIndex()?.count ?? 0) / 3}t`,
            )
            .join(` `),
      );
    let ie = Jo(r, a, L);
    if (ie) {
      if (a === `low`) {
        for (let e of [...O.children])
          (e.name.endsWith(`:leaves`) || e.name.endsWith(`:glass`)) &&
            (O.remove(e), e.geometry.dispose());
        (Ko(O, L), (ie = Jo(r, a, L)));
      }
      ie && console.warn(`[test] sites over-budget ${t.id} ${ie}`);
    }
    for (let e of [...T, ...p.warnings])
      console.warn(`[test] sites ${t.id}:${r} ${e}`);
    for (let e of x) e.floorY = C(e.x0, e.z0, e.x1, e.z1, e.ceilY);
    let R = n ? p.commit(i?.statics, f) : null,
      ae = [];
    if (i && w.length) {
      let e = i.peds?.spawnScripted?.bind(i.peds);
      if (e)
        for (let n of w)
          try {
            let t = e(D.wx(n.x, n.z), D.wz(n.x, n.z), {
              heading: o + n.rot,
              pose: n.pose ?? `idle`,
              y: d,
            });
            t && (t.stop(n.pose ?? `idle`, o + n.rot), ae.push(t));
          } catch (e) {
            console.warn(`[test] sites ${t.id} live() failed`, e);
          }
    }
    let z = !1,
      oe = {
        root: O,
        calls: L.calls,
        tris: L.tris,
        scope: R,
        spots: b,
        indoor: x,
        over: ie,
        colliderCount: p.colliders,
        floorCount: p.floors,
        glass: re,
        dispose() {
          if (!z) {
            ((z = !0),
              re?.dispose(),
              O.parent?.remove(O),
              O.traverse((e) => {
                if (Gc(e)) return e.dispose();
                let t = e.geometry;
                t?.isBufferGeometry && t.dispose();
              }),
              O.clear(),
              R?.dispose());
            for (let e of ae)
              try {
                e.release();
              } catch {}
            ((ae.length = 0), (b.length = 0), (x.length = 0));
          }
        },
      };
    return (
      (k = oe),
      S(),
      c > bu.finishMaxMs && (bu.finishMaxMs = Math.round(c * 100) / 100),
      oe
    );
  }
  return {
    b: O,
    colliders: p,
    finish: () => {
      let e = A(!0);
      for (;;) {
        let t = e.next();
        if (t.done) return t.value;
      }
    },
    finishSteps: A,
  };
}
function Fu(e, t, n, r, i) {
  let a = Math.cos(e.facing),
    o = Math.sin(e.facing);
  return (
    (i.x = e.x + t * a - r * o),
    (i.y = e.y + n),
    (i.z = e.z + t * o + r * a),
    i
  );
}
var Iu = bt.proxyCalls,
  Lu = 0.35,
  Ru = 0.15,
  zu = bt.proxyTris,
  Bu = 0.8,
  Vu = 1.5,
  Hu = new Map();
function Uu(e, t) {
  let n = Hu.get(e);
  return (n || Hu.set(e, (n = t())), n);
}
var Wu = (e, t, n, r) => ({
  flags: at.WINDOWS,
  er: e,
  eg: t,
  eb: n,
  ei: 1.4,
  ex: r,
});
