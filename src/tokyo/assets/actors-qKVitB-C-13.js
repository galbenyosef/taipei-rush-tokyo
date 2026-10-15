// tokyo/assets/actors-qKVitB-C 13 — math
// Lines 4068-4362 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function vo(e, t, n, r) {
  let i = t.neck;
  if (n === `phones`) {
    let t = 0.08;
    e.add(
      new M(t, 0.0085, 6, 22, Math.PI),
      G(0, i.y + 0.03, i.z + 0.005, Math.PI / 2),
      r,
      Ba,
      Ia,
      0.4,
    );
    for (let n of [-1, 1]) {
      let a = G(n * t * 1.05, i.y + 0.022, i.z - 0.032, -0.75, 0, -n * 0.35);
      (e.add(new w(0.04, 0.042, 0.028, 20), a, r, Ba, Ia, 0.35),
        e.add(
          new M(0.031, 0.011, 6, 20),
          a.clone().multiply(G(0, 0.016, 0, Math.PI / 2)),
          Ja(r, oo, 0.75),
          Ba,
          Fa,
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
        return io(
          0.07 * Math.sin(e),
          n + (a - n) * t ** 1.4,
          c - l * Math.cos(e),
        );
      },
      d = io(1, 0, 0);
    for (let t = 0; t < 30; t++) {
      let n = (t / 30) * Math.PI * 2,
        i = u(n),
        a = u(n + 0.01)
          .sub(u(n - 0.01))
          .normalize(),
        o = new I().setFromUnitVectors(d, a);
      (o.premultiply(new I().setFromAxisAngle(a, t % 2 ? Math.PI / 2 : 0)),
        e.add(
          new M(0.0085, 0.0027, 5, 10),
          new R().compose(i, o, io(1.25, 1, 1)),
          r,
          Ba,
          La,
          0.22,
        ));
    }
  }
}
function yo(e, t, n, r) {
  let i = -t.torsoHalfW * 0.55,
    a = t.hipY + 0.02,
    o = t.frontZ - 0.035;
  switch (n) {
    case `monster`: {
      no(e, t, `sling`, oo);
      let n = io(i - 0.085, a - 0.015, o - 0.02);
      return (
        e.add(
          new M(0.009, 0.0022, 4, 12),
          G(n.x, n.y, n.z, 0, Math.PI / 2, 0),
          12896460,
          Ba,
          La,
          0.3,
        ),
        po(e, io(n.x - 0.01, n.y - 0.085, n.z - 0.012), r),
        !0
      );
    }
    case `bobabag`: {
      let n = 0.12,
        s = a + 0.035;
      return (
        fo(e, io(i, s - n, o - 0.01), 0.042, 0.052, n, r, Ba),
        ro(e, t, i, s - 0.01, o - 0.01, 0.05, 2763306),
        !0
      );
    }
    case `pcake`: {
      let n = 0.13,
        s = 0.085,
        c = 0.04,
        l = new F(n, s, c, 4, 3, 2),
        u = l.attributes.position;
      for (let e = 0; e < u.count; e++) {
        let t = u.getX(e) / (n / 2),
          r = u.getY(e) / (s / 2);
        u.setZ(e, u.getZ(e) * (1 - 0.18 * t * t) * (1 - 0.18 * r * r));
      }
      l.computeVertexNormals();
      let d = Ja(r, 13011514, 0.45);
      return (
        e.add(l, G(i, a - 0.035, o), d, Ba, Fa, 0.8),
        e.add(
          new Pe(0.017, 20),
          G(i, a - 0.035, o - c / 2 - 0.004, 0, Math.PI, 0),
          12592686,
          Ba,
          Ia,
          0.4,
        ),
        ro(e, t, i, a + 0.005, o, n * 0.42, qa(d, 0.6)),
        !0
      );
    }
    case `angelwings`:
    case `batwings`:
      for (let i of [-1, 1]) {
        let a = io(i * 0.045, t.chestY + 0.035, t.backZ + 0.02);
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
              c = io(
                i * Math.cos(s),
                Math.sin(s),
                0.5 * Math.cos(s),
              ).normalize();
            e.add(
              new _(1, 10, 6),
              Za(a, c, n, o, n / 2, 0.011),
              r,
              Ba,
              Fa,
              0.95,
            );
          }
          for (let t of [58, 34, 10, -14]) {
            let n = (t * Math.PI) / 180,
              o = io(
                i * Math.cos(n),
                Math.sin(n),
                0.5 * Math.cos(n),
              ).normalize();
            e.add(
              new _(1, 10, 6),
              Za(a.clone().add(io(0, 0, 0.008)), o, 0.14, 0.046, 0.07, 0.012),
              Ja(r, 16777215, 0.18),
              Ba,
              Fa,
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
            n = new be();
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
          let o = G(a.x, a.y, a.z, 0, -i * 0.5, 0);
          e.add(
            new c(n, { depth: 0.006, bevelEnabled: !1, curveSegments: 6 }),
            o,
            r,
            Ba,
            Fa,
            0.6,
          );
          let s = (e, t) => io(i * e, t, 0.003).applyMatrix4(o),
            l = r === oo ? 3815996 : qa(r, 0.55),
            u = s(0, 0);
          for (let [t, n] of [
            [0.33, 0.21],
            [0.25, 0.1],
            [0.16, 0.03],
            [0.06, -0.02],
          ])
            co(e, u, s(t, n), 0.004, l, Ba);
          (co(e, s(0, 0.04), s(0.1, 0.14), 0.005, l, Ba),
            co(e, s(0.1, 0.14), s(0.22, 0.2), 0.005, l, Ba));
        }
      }
      return !0;
  }
  return !1;
}
var bo = new Set(),
  xo = null;
function So(e) {
  return xo && xo.hero === e.model.id ? xo.outfit : Ca.outfit(e.model.id);
}
function Co(e) {
  let t = So(e);
  if (((e.outfit = t), e.u && e.body)) {
    (Pa(e.u.uRbxTop.value, t.top),
      Pa(e.u.uRbxBottom.value, t.bottom),
      Pa(e.u.uRbxShoes.value, t.shoes));
    let n = !!(va(t.top) || va(t.bottom) || va(t.shoes));
    e.body.material = n ? e.outfitMat : e.baseMat;
  }
  let n = `${t.hat ?? ``}|${t.glasses ?? ``}|${t.neck ?? ``}|${t.bag ?? ``}`;
  if (n === e.accKey) return wo(e);
  e.accKey = n;
  for (let t of e.acc) {
    (t.removeFromParent(), t.geometry.dispose());
    let n = e.model.meshes.indexOf(t);
    n >= 0 && e.model.meshes.splice(n, 1);
  }
  e.acc = [];
  let r = new Va(),
    i = new Va();
  for (let n of [`hat`, `glasses`, `neck`, `bag`]) {
    let a = va(t[n]);
    if (!a?.kind) continue;
    let o = fa[a.color].hex;
    (n === `hat`
      ? $a(r, e.fit, a.kind, o)
      : n === `glasses`
        ? eo(r, e.fit, a.kind, o)
        : n === `neck`
          ? vo(i, e.fit, a.kind, o)
          : no(i, e.fit, a.kind, o),
      (r.post = i.post = null));
  }
  for (let [t, n] of [
    [r, `head`],
    [i, `body`],
  ]) {
    if (t.empty) continue;
    let r = new D(t.build(), e.model.props.material);
    ((r.name = `player-wear-${e.model.id}-${n}`),
      (r.castShadow = !0),
      (r.receiveShadow = !0),
      (r.frustumCulled = !1),
      (r.visible = e.model.meshes[0]?.visible ?? !0),
      e.model.root.add(r),
      r.bind(
        new C(
          e.bones,
          e.inverses.map((e) => e.clone()),
        ),
        e.bindMatrix,
      ),
      n === `head` && e.model.meshes.push(r),
      e.acc.push(r));
  }
  wo(e);
}
function wo(e) {
  let t = e.rig.bones[25],
    n = !!va(e.outfit.hat) && !e.helmet;
  t.scale.setScalar(n ? 1 : 1e-4);
}
function To() {
  for (let e of bo) if (e.model.root.parent) return e.model.id;
  return null;
}
function Eo() {
  for (let e of bo) Co(e);
}
Ca.onChange(Eo);
function Do(e, t) {
  ((xo = t ? { hero: e, outfit: t } : null), Eo());
}
