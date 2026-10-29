// tokyo/assets/actors-bknSEpf2 53 — add
// Lines 19802-20402 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Km(e) {
  let { id: t, bones: n, joints: r } = e,
    i = at(t);
  for (let [t, i, a, o] of e.nudges)
    ((n[t].position.x += i),
      (n[t].position.y += a),
      (n[t].position.z += o),
      (r[t].x += i),
      (r[t].y += a),
      (r[t].z += o));
  let a = n.map((e) => e.position.clone()),
    o = e.lib,
    s = (e, t) => Math.atan2(-(t.z - e.z), -(t.y - e.y)),
    c = {
      bones: n,
      rest: a,
      joints: r,
      thighLen: e.thighLen,
      shinLen: e.shinLen,
      hipHeight: e.hipHeight,
      thighRest: s(o[W.thighL], o[W.shinL]),
      shinRest: s(o[W.shinL], o[W.footL]),
    },
    u = e.rc.bones[W.eyeL],
    d = e.rc.bones[W.eyeR];
  if ((u && d && (c.eyes = [u, d]), n.length !== 33 || n.some((e) => !e)))
    throw Error(`player rig: missing slots`);
  let p = e.root;
  p.name = `character-${t}`;
  for (let t of e.meshes) t.frustumCulled = !1;
  let h = e.meshes[0],
    _ = e.height,
    y = (o[W.lidL].y + o[W.lidR].y) / 2,
    b = new Sm(),
    x = r[18];
  {
    let e = new Oe(
      [
        [0, 0],
        [0.0165, 0],
        [0.0165, 0.28],
        [0.02, 0.36],
        [0.029, 0.46],
        [0.035, 0.56],
        [0.0365, 0.72],
        [0.034, 0.78],
        [0.02, 0.8],
        [0, 0.803],
      ].map(([e, t]) => new ie(e, t)),
      14,
    );
    (b.add(
      e,
      Dm(x.x, x.y, x.z + 0.035, -Math.PI / 2, 0, 0),
      (e, t, n, r) => r.setHex(n > x.z - 0.25 ? 1907482 : 13211994),
      Pm,
      vm,
      0.42,
    ),
      b.add(
        km(0.025, 0.022, 0.018, 12),
        Dm(x.x, x.y, x.z + 0.04, Math.PI / 2, 0, 0),
        1184274,
        Pm,
        vm,
        0.5,
      ),
      b.add(
        km(0.0368, 0.0368, 0.05, 14, !0),
        Dm(x.x, x.y, x.z - 0.62, Math.PI / 2, 0, 0),
        2763312,
        Pm,
        vm,
        0.4,
      ));
  }
  {
    let e = 1710877;
    (b.add(
      Om(0.026, 0.032, 0.105),
      Dm(x.x, x.y + 0.004, x.z + 0.03, 0.26, 0, 0),
      e,
      Fm,
      vm,
      0.7,
    ),
      b.add(
        Om(0.024, 0.012, 0.03),
        Dm(x.x, x.y + 0.012, x.z + 0.084, 0.26, 0, 0),
        921104,
        Fm,
        vm,
        0.6,
      ),
      b.add(
        Om(0.029, 0.19, 0.03),
        Dm(x.x, x.y - 0.055, x.z - 0.05),
        2829617,
        Fm,
        ym,
        0.32,
      ),
      b.add(
        Om(0.024, 0.15, 0.018),
        Dm(x.x, x.y - 0.035, x.z - 0.026),
        e,
        Fm,
        vm,
        0.6,
      ));
    for (let e = 0; e < 5; e++)
      b.add(
        new B(0.0305, 0.003, 0.02),
        Dm(x.x, x.y + 0.025 - e * 0.007, x.z - 0.05),
        1381912,
        Fm,
        ym,
        0.5,
      );
    (b.add(
      new B(0.006, 0.008, 0.007),
      Dm(x.x, x.y - 0.144, x.z - 0.068),
      1118481,
      Fm,
      ym,
      0.4,
    ),
      b.add(
        new B(0.018, 0.008, 0.007),
        Dm(x.x, x.y + 0.03, x.z - 0.068),
        1118481,
        Fm,
        ym,
        0.4,
      ),
      b.add(
        km(0.0055, 0.0055, 0.012, 8, !0),
        Dm(x.x, x.y - 0.152, x.z - 0.05, 0, 0, 0),
        328965,
        Fm,
        ym,
        0.5,
      ),
      b.add(
        new m(0.017, 0.0032, 4, 10, Math.PI),
        Dm(x.x, x.y - 0.03, x.z - 0.012, 0, Math.PI / 2, Math.PI / 2),
        e,
        Fm,
        vm,
        0.6,
      ),
      b.add(
        new B(0.005, 0.006, 0.018),
        Dm(x.x, x.y - 0.026, x.z - 0.004, 0.3, 0, 0),
        3158582,
        Fm,
        ym,
        0.4,
      ));
  }
  let S = new V(0, -0.16, -0.05);
  {
    let e = 1447706;
    (b.add(
      Om(0.04, 0.27, 0.058),
      Dm(x.x, x.y - 0.07, x.z - 0.055),
      2434859,
      Im,
      ym,
      0.38,
    ),
      b.add(
        Om(0.036, 0.1, 0.03),
        Dm(x.x, x.y - 0.15, x.z - 0.02),
        e,
        Im,
        vm,
        0.65,
      ),
      b.add(
        km(0.0105, 0.0105, 0.09, 10),
        Dm(x.x, x.y - 0.245, x.z - 0.06),
        1118740,
        Im,
        ym,
        0.35,
      ),
      b.add(
        km(0.017, 0.017, 0.05, 10),
        Dm(x.x, x.y - 0.3, x.z - 0.06),
        987154,
        Im,
        ym,
        0.4,
      ),
      b.add(
        Om(0.026, 0.034, 0.1),
        Dm(x.x, x.y + 0.004, x.z + 0.026, 0.22, 0, 0),
        e,
        Im,
        vm,
        0.7,
      ),
      b.add(
        Om(0.024, 0.036, 0.15),
        Dm(x.x, x.y - 0.1, x.z + 0.05, 0.14, 0, 0),
        1776671,
        Im,
        ym,
        0.5,
      ),
      b.add(
        Om(0.024, 0.024, 0.07),
        Dm(x.x, x.y - 0.18, x.z + 0.02, 0.05, 0, 0),
        e,
        Im,
        vm,
        0.7,
      ),
      b.add(
        Om(0.016, 0.17, 0.018),
        Dm(x.x, x.y + 0.14, x.z - 0.04),
        1842464,
        Im,
        ym,
        0.45,
      ),
      b.add(
        Om(0.03, 0.02, 0.07),
        Dm(x.x, x.y + 0.225, x.z - 0.012),
        e,
        Im,
        vm,
        0.7,
      ),
      b.add(
        Om(0.018, 0.06, 0.022),
        Dm(x.x, x.y - 0.05, x.z - 0.094),
        3093046,
        Im,
        ym,
        0.4,
      ),
      b.add(
        new B(0.014, 0.004, 0.016),
        Dm(x.x, x.y - 0.081, x.z - 0.094),
        16726831,
        Im,
        bm,
        0.3,
        0.35,
      ));
  }
  let C = new V(0, -0.33, -0.06);
  {
    let e = r[21],
      t = e.x + 0.017,
      n = e.y - 0.03,
      a = e.z,
      o = i ? 15778509 : 1974308;
    (b.add(Om(0.0095, 0.148, 0.072, 0.0045), Dm(t, n, a), o, Lm, vm, 0.35),
      b.add(
        new P(0.062, 0.134, 1, 12),
        Dm(t + 0.0049, n, a, 0, Math.PI / 2, 0),
        (e, t, r, i) => {
          let o = n - t;
          i.setHex(
            o > 0.05
              ? 6272255
              : o < -0.052
                ? 3392154
                : Math.round(o / 0.0112) % 2 && r < a + 0.01
                  ? 13228526
                  : 15923199,
          );
        },
        Lm,
        bm,
        0.2,
        0.6,
      ),
      b.add(
        km(0.008, 0.008, 0.004, 10),
        Dm(t - 0.005, n - 0.054, a + 0.02, 0, 0, Math.PI / 2),
        789518,
        Lm,
        vm,
        0.2,
      ));
  }
  {
    let e = r[26];
    (b.add(
      km(0.043, 0.035, 0.15, 16),
      Dm(e.x, e.y, e.z, -Math.PI / 2, 0, 0),
      (t, n, r, a) => {
        let o = e.z - r;
        a.setHex(
          o < -0.045
            ? 2758672
            : o > 0.064
              ? 15920612
              : Math.abs(o - 0.012) < 0.013
                ? i
                  ? 16740193
                  : 3126182
                : 13279866,
        );
      },
      zm,
      vm,
      0.25,
    ),
      b.add(
        km(0.0455, 0.0455, 0.008, 16),
        Dm(e.x, e.y, e.z - 0.077, -Math.PI / 2, 0, 0),
        15722975,
        zm,
        vm,
        0.3,
      ),
      b.add(
        km(0.0068, 0.0068, 0.13, 8, !0),
        Dm(e.x + 0.012, e.y, e.z - 0.125, -Math.PI / 2 + 0.12, 0, 0),
        i ? 16740193 : 3126182,
        zm,
        vm,
        0.3,
      ));
  }
  {
    let e = r[27];
    (b.add(
      km(0.0075, 0.0075, 0.82, 6),
      Dm(e.x, e.y, e.z - 0.36, -Math.PI / 2, 0, 0),
      2763310,
      Bm,
      ym,
      0.35,
    ),
      b.add(
        new m(0.034, 0.01, 6, 12, Math.PI),
        Dm(e.x, e.y - 0.034, e.z + 0.05, 0, Math.PI / 2, 0),
        7031342,
        Bm,
        vm,
        0.4,
      ),
      b.add(
        km(0.013, 0.012, 0.11, 8),
        Dm(e.x, e.y, e.z + 0, -Math.PI / 2, 0, 0),
        7031342,
        Bm,
        vm,
        0.4,
      ));
    let t = i ? 16743790 : 1911364,
      n = i ? 16773866 : 3360362,
      a = (e) => {
        let t = new k(1, 24, 5, 0, Math.PI * 2, 0, Math.PI * 0.36),
          n = t.attributes.position;
        for (let e = 0; e < n.count; e++) {
          let t = n.getX(e),
            r = n.getY(e),
            i = n.getZ(e),
            a =
              Math.abs(Math.sin(Math.atan2(i, t) * 4)) * ((1 - r) / 0.574) ** 2;
          n.setXYZ(e, t * (1 - 0.05 * a), r + 0.06 * a, i * (1 - 0.05 * a));
        }
        if ((t.computeVertexNormals(), t.scale(0.56, 0.3, 0.56), e)) {
          t.scale(0.985, 0.985, 0.985);
          let e = t.index;
          for (let t = 0; t < e.count; t += 3) {
            let n = e.getX(t + 1);
            (e.setX(t + 1, e.getX(t + 2)), e.setX(t + 2, n));
          }
          let n = t.attributes.normal;
          for (let e = 0; e < n.count; e++)
            n.setXYZ(e, -n.getX(e), -n.getY(e), -n.getZ(e));
        }
        return t;
      },
      o = new V(e.x, e.y, e.z - 0.47),
      s = (e, r, i, a) => {
        let s = Math.atan2(e - o.x, r - o.y);
        a.setHex(
          Math.floor(((s + Math.PI) / (Math.PI * 2)) * 8 + 0.001) % 2 ? t : n,
        );
      };
    for (let e of [!1, !0])
      b.add(
        a(e),
        Dm(o.x, o.y, o.z, -Math.PI / 2, 0, 0),
        s,
        Bm,
        xm,
        e ? 0.75 : 0.45,
      );
    b.add(
      new l(0.011, 0.05, 6),
      Dm(e.x, e.y, e.z - 0.8, -Math.PI / 2, 0, 0),
      2763310,
      Bm,
      ym,
      0.4,
    );
  }
  {
    let { min: t, max: n } = e.head,
      r = (t.x + n.x) / 2,
      a = (t.z + n.z) / 2,
      s = (n.x - t.x) / 2 + 0.024,
      c = (n.z - t.z) / 2 + 0.022,
      l = y + 0.012,
      u = a,
      d = n.y + 0.018 - l,
      f = i ? 15331820 : 1776930,
      p = i ? 16740193 : 13115436,
      h = i ? 13621715 : 2895670,
      g = Math.PI * 0.44;
    b.add(
      Am(s, d, c, 26, 10, 0, Math.PI * 2, 0, g),
      Dm(r, l, u),
      f,
      Rm,
      vm,
      0.22,
    );
    let _ = Am(
      s,
      d,
      c,
      20,
      5,
      Math.PI * 1.5 + 0.95,
      Math.PI * 2 - 1.9,
      g,
      Math.PI * 0.16,
    );
    (b.add(_, Dm(r, l, u), f, Rm, vm, 0.22),
      b.add(
        Am(s * 0.22, d * 1.012, c * 1.012, 6, 10, 0, Math.PI * 2, 0, g),
        Dm(r, l, u),
        p,
        Rm,
        vm,
        0.25,
      ));
    let x = l + d * Math.cos(g);
    b.add(
      new m(1, 0.03, 5, 32),
      Dm(
        r,
        x - 0.002,
        u,
        Math.PI / 2,
        0,
        0,
        s * Math.sin(g),
        c * Math.sin(g),
        0.3,
      ),
      h,
      Rm,
      vm,
      0.6,
    );
    for (let e of [-1, 1])
      b.add(
        new B(0.004, 0.012, 0.04),
        Dm(r + e * s * 0.42, l + d * 0.9, u - c * 0.2, 0, 0, e * 0.45),
        921361,
        Rm,
        vm,
        0.5,
      );
    let S = new me(
      s * 0.95,
      s * 0.95,
      0.007,
      20,
      1,
      !1,
      Math.PI * 0.5,
      Math.PI,
    );
    {
      let e = S.attributes.position;
      for (let t = 0; t < e.count; t++)
        e.setXYZ(
          t,
          e.getX(t),
          e.getY(t) - e.getX(t) * e.getX(t) * 1.2,
          e.getZ(t) * 0.6,
        );
      S.computeVertexNormals();
    }
    b.add(
      S,
      Dm(r, l + d * 0.24, u - c * 0.9, -0.22, 0, 0),
      i ? 7322024 : 987155,
      Rm,
      vm,
      0.15,
    );
    let C = o[W.jaw].y,
      w = (e, t, n) => {
        let r = e.distanceTo(t),
          i = new N().compose(
            e.clone().add(t).multiplyScalar(0.5),
            new v().setFromUnitVectors(
              new V(0, 1, 0),
              t.clone().sub(e).normalize(),
            ),
            new V(1, 1, 1),
          );
        b.add(new B(n, r, 0.004), i, 1447446, Rm, _m, 0.9);
      };
    for (let e of [-1, 1])
      w(
        new V(r + e * (s - 0.03), l + 0.005, u - c * 0.08),
        new V(r + e * 0.03, C - 0.1, u - c * 0.42),
        0.011,
      );
    (b.add(
      new B(0.03, 0.008, 0.014),
      Dm(r, C - 0.104, u - c * 0.42),
      2236962,
      Rm,
      vm,
      0.5,
    ),
      b.add(
        new B(0.004, 0.028, 0.05),
        Dm(
          r + (i ? -1 : 1) * s * 0.985,
          l + d * 0.3,
          u + 0.02,
          0,
          0,
          (i ? 1 : -1) * 0.25,
        ),
        i ? 16765514 : 16118246,
        Rm,
        vm,
        0.4,
      ));
  }
  let w = b.build(),
    T = new g(w, e.propMaterial);
  ((T.name = `player-props-${t}`),
    (T.castShadow = !0),
    (T.receiveShadow = !0),
    (T.frustumCulled = !1),
    p.add(T),
    p.updateMatrixWorld(!0),
    T.bind(new f(Nm.map((e) => n[e]))));
  let E = new Uint8Array(33),
    D = (e, t) => {
      E[e] !== (t ? 1 : 2) &&
        ((E[e] = t ? 1 : 2), n[e].scale.setScalar(t ? 1 : 1e-4));
    },
    O = e.meshes,
    A = {
      id: t,
      kind: e.kind,
      root: p,
      mesh: h,
      meshes: O,
      props: T,
      rig: c,
      rc: e.rc,
      height: _,
      eyeHeight: _ * 0.8925,
      shoulderY: o[W.armR].y,
      muzzle: { pistol: S, smg: C },
      setProps(e, t, n, r, i, a, o) {
        (D(18, e),
          D(19, t),
          D(20, n),
          D(21, r),
          D(26, i),
          D(27, a),
          D(24, o),
          (T.visible = j && (e || t || n || r || i || a || o)),
          (M = e || t || n || r || i || a || o));
      },
      setVisible(e) {
        j = e;
        for (let t = 0; t < O.length; t++) O[t].visible = e;
        T.visible = e && M;
      },
      update: e.update,
      dispose() {
        (p.removeFromParent(), w.dispose(), e.dispose());
      },
    },
    j = !0,
    M = !1;
  return (A.setProps(!1, !1, !1, !1, !1, !1, !1), D(25, !1), A);
}
