// tokyo/assets/actors-bknSEpf2 30 — math
// Lines 9606-9904 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Wl(e, t, n, r) {
  let i = t.neck;
  if (n === `phones`) {
    let t = 0.08;
    e.add(
      new m(t, 0.0085, 6, 22, Math.PI),
      X(0, i.y + 0.03, i.z + 0.005, Math.PI / 2),
      r,
      pl,
      ll,
      0.4,
    );
    for (let n of [-1, 1]) {
      let a = X(n * t * 1.05, i.y + 0.022, i.z - 0.032, -0.75, 0, -n * 0.35);
      (e.add(new me(0.04, 0.042, 0.028, 20), a, r, pl, ll, 0.35),
        e.add(
          new m(0.031, 0.011, 6, 20),
          a.clone().multiply(X(0, 0.016, 0, Math.PI / 2)),
          xl(r, Nl, 0.75),
          pl,
          cl,
          0.9,
        ));
    }
  } else if (n === `chain`) {
    let n = i.y + 0.02,
      a = i.y - 0.1,
      o = i.z + 0.05,
      s = t.collarZ - 0.008,
      c = (o + s) / 2,
      l = (o - s) / 2,
      u = (e) => {
        let t = (1 + Math.cos(e)) / 2;
        return jl(
          0.07 * Math.sin(e),
          n + (a - n) * t ** 1.4,
          c - l * Math.cos(e),
        );
      },
      d = jl(1, 0, 0);
    for (let t = 0; t < 30; t++) {
      let n = (t / 30) * Math.PI * 2,
        i = u(n),
        a = u(n + 0.01)
          .sub(u(n - 0.01))
          .normalize(),
        o = new v().setFromUnitVectors(d, a);
      (o.premultiply(new v().setFromAxisAngle(a, t % 2 ? Math.PI / 2 : 0)),
        e.add(
          new m(0.0085, 0.0027, 5, 10),
          new N().compose(i, o, jl(1.25, 1, 1)),
          r,
          pl,
          ul,
          0.22,
        ));
    }
  }
}
function Gl(e, t, n, r) {
  let i = -t.torsoHalfW * 0.55,
    a = t.hipY + 0.02,
    o = t.frontZ - 0.035;
  switch (n) {
    case `monster`: {
      kl(e, t, `sling`, Nl);
      let n = jl(i - 0.085, a - 0.015, o - 0.02);
      return (
        e.add(
          new m(0.009, 0.0022, 4, 12),
          X(n.x, n.y, n.z, 0, Math.PI / 2, 0),
          12896460,
          pl,
          ul,
          0.3,
        ),
        zl(e, jl(n.x - 0.01, n.y - 0.085, n.z - 0.012), r),
        !0
      );
    }
    case `bobabag`: {
      let n = 0.12,
        s = a + 0.035;
      return (
        Rl(e, jl(i, s - n, o - 0.01), 0.042, 0.052, n, r, pl),
        Al(e, t, i, s - 0.01, o - 0.01, 0.05, 2763306),
        !0
      );
    }
    case `pcake`: {
      let n = 0.13,
        s = 0.085,
        c = 0.04,
        l = new B(n, s, c, 4, 3, 2),
        u = l.attributes.position;
      for (let e = 0; e < u.count; e++) {
        let t = u.getX(e) / (n / 2),
          r = u.getY(e) / (s / 2);
        u.setZ(e, u.getZ(e) * (1 - 0.18 * t * t) * (1 - 0.18 * r * r));
      }
      l.computeVertexNormals();
      let d = xl(r, 13011514, 0.45);
      return (
        e.add(l, X(i, a - 0.035, o), d, pl, cl, 0.8),
        e.add(
          new ae(0.017, 20),
          X(i, a - 0.035, o - c / 2 - 0.004, 0, Math.PI, 0),
          12592686,
          pl,
          ll,
          0.4,
        ),
        Al(e, t, i, a + 0.005, o, n * 0.42, bl(d, 0.6)),
        !0
      );
    }
    case `angelwings`:
    case `batwings`:
      for (let i of [-1, 1]) {
        let a = jl(i * 0.045, t.chestY + 0.035, t.backZ + 0.02);
        if (n === `angelwings`) {
          for (let [t, n, o] of [
            [72, 0.19, 0.034],
            [52, 0.26, 0.04],
            [32, 0.31, 0.042],
            [12, 0.34, 0.042],
            [-8, 0.32, 0.04],
            [-28, 0.27, 0.036],
            [-46, 0.21, 0.032],
          ]) {
            let s = (t * Math.PI) / 180,
              c = jl(
                i * Math.cos(s),
                Math.sin(s),
                0.5 * Math.cos(s),
              ).normalize();
            e.add(
              new k(1, 10, 6),
              wl(a, c, n, o, n / 2, 0.011),
              r,
              pl,
              cl,
              0.95,
            );
          }
          for (let t of [58, 34, 10, -14]) {
            let n = (t * Math.PI) / 180,
              o = jl(
                i * Math.cos(n),
                Math.sin(n),
                0.5 * Math.cos(n),
              ).normalize();
            e.add(
              new k(1, 10, 6),
              wl(a.clone().add(jl(0, 0, 0.008)), o, 0.14, 0.046, 0.07, 0.012),
              xl(r, 16777215, 0.18),
              pl,
              cl,
              0.95,
            );
          }
        } else {
          let t = [
              [0, 0.04],
              [0.1, 0.14],
              [0.22, 0.2],
              [0.33, 0.21],
              [0.29, 0.06],
              [0.25, 0.1],
              [0.2, -0.02],
              [0.16, 0.03],
              [0.1, -0.07],
              [0.06, -0.02],
              [0, -0.06],
            ],
            n = new pe();
          n.moveTo(0, t[0][1]);
          for (let e = 1; e < t.length; e++) {
            let [r, a] = t[e];
            if (e >= 4) {
              let [o, s] = t[e - 1];
              n.quadraticCurveTo(
                (i * (r + o)) / 2,
                (a + s) / 2 + 0.03,
                i * r,
                a,
              );
            } else n.lineTo(i * r, a);
          }
          n.closePath();
          let o = X(a.x, a.y, a.z, 0, -i * 0.5, 0);
          e.add(
            new F(n, { depth: 0.006, bevelEnabled: !1, curveSegments: 6 }),
            o,
            r,
            pl,
            cl,
            0.6,
          );
          let s = (e, t) => jl(i * e, t, 0.003).applyMatrix4(o),
            c = r === Nl ? 3815996 : bl(r, 0.55),
            l = s(0, 0);
          for (let [t, n] of [
            [0.33, 0.21],
            [0.25, 0.1],
            [0.16, 0.03],
            [0.06, -0.02],
          ])
            Fl(e, l, s(t, n), 0.004, c, pl);
          (Fl(e, s(0, 0.04), s(0.1, 0.14), 0.005, c, pl),
            Fl(e, s(0.1, 0.14), s(0.22, 0.2), 0.005, c, pl));
        }
      }
      return !0;
  }
  return !1;
}
var Kl = new Set(),
  ql = null;
function Jl(e) {
  let t = ql && ql.hero === e.model.id ? ql.outfit : Jc.outfit(e.model.id),
    n = e.kitMat ? Ac(e.model.id) : null;
  return n?.hat && !t.hat ? { ...t, hat: n.hat } : t;
}
function Yl(e) {
  let t = Jl(e);
  if (((e.outfit = t), e.kitMat && e.body)) e.body.material = e.kitMat;
  else if (e.u && e.body) {
    let n = Vt ? al[e.model.id] : void 0;
    (sl(e.u.uRbxTop.value, t.top, n?.top),
      sl(e.u.uRbxBottom.value, t.bottom, n?.bottom),
      sl(e.u.uRbxShoes.value, t.shoes, n?.shoes));
    let r = !!(Uc(t.top) || Uc(t.bottom) || Uc(t.shoes) || n);
    e.body.material = r ? e.outfitMat : e.baseMat;
  }
  let n = `${t.hat ?? ``}|${t.glasses ?? ``}|${t.neck ?? ``}|${t.bag ?? ``}`;
  if (n === e.accKey) return Xl(e);
  e.accKey = n;
  for (let t of e.acc) {
    (t.removeFromParent(), t.geometry.dispose());
    let n = e.model.meshes.indexOf(t);
    n >= 0 && e.model.meshes.splice(n, 1);
  }
  e.acc = [];
  let r = new ml(),
    i = new ml();
  for (let n of [`hat`, `glasses`, `neck`, `bag`]) {
    let a = Uc(t[n]);
    if (!a?.kind) continue;
    let o = Lc[a.color].hex;
    (n === `hat`
      ? El(r, e.fit, a.kind, o)
      : n === `glasses`
        ? Dl(r, e.fit, a.kind, o)
        : n === `neck`
          ? Wl(i, e.fit, a.kind, o)
          : kl(i, e.fit, a.kind, o),
      (r.post = i.post = null));
  }
  for (let [t, n] of [
    [r, `head`],
    [i, `body`],
  ]) {
    if (t.empty) continue;
    let r = new g(t.build(), e.model.props.material);
    ((r.name = `player-wear-${e.model.id}-${n}`),
      (r.castShadow = !0),
      (r.receiveShadow = !0),
      (r.frustumCulled = !1),
      (r.visible = e.model.meshes[0]?.visible ?? !0),
      e.model.root.add(r),
      r.bind(
        new f(
          e.bones,
          e.inverses.map((e) => e.clone()),
        ),
        e.bindMatrix,
      ),
      n === `head` && e.model.meshes.push(r),
      e.acc.push(r));
  }
  Xl(e);
}
function Xl(e) {
  let t = e.rig.bones[25],
    n = !!Uc(e.outfit.hat) && !e.helmet;
  t.scale.setScalar(n ? 1 : 1e-4);
}
function Zl() {
  for (let e of Kl) if (e.model.root.parent) return e.model.id;
  return null;
}
function Ql() {
  for (let e of Kl) Yl(e);
}
Jc.onChange(Ql);
function $l(e, t) {
  ((ql = t ? { hero: e, outfit: t } : null), Ql());
}
