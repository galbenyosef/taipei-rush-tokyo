// tokyo/assets/actors-qKVitB-C 27 — add
// Lines 9806-10397 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function rl(e) {
  let { id: t, bones: n, joints: r } = e,
    i = ht(t);
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
      thighRest: s(o[H.thighL], o[H.shinL]),
      shinRest: s(o[H.shinL], o[H.footL]),
    },
    l = e.rc.bones[H.eyeL],
    u = e.rc.bones[H.eyeR];
  if ((l && u && (c.eyes = [l, u]), n.length !== 33 || n.some((e) => !e)))
    throw Error(`player rig: missing slots`);
  let f = e.root;
  f.name = `character-${t}`;
  for (let t of e.meshes) t.frustumCulled = !1;
  let p = e.meshes[0],
    m = e.height,
    h = (o[H.lidL].y + o[H.lidR].y) / 2,
    v = new Nc(),
    y = r[18];
  {
    let e = new xe(
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
      ].map(([e, t]) => new Ce(e, t)),
      14,
    );
    (v.add(
      e,
      Rc(y.x, y.y, y.z + 0.035, -Math.PI / 2, 0, 0),
      (e, t, n, r) => r.setHex(n > y.z - 0.25 ? 1907482 : 13211994),
      Gc,
      kc,
      0.42,
    ),
      v.add(
        Bc(0.025, 0.022, 0.018, 12),
        Rc(y.x, y.y, y.z + 0.04, Math.PI / 2, 0, 0),
        1184274,
        Gc,
        kc,
        0.5,
      ),
      v.add(
        Bc(0.0368, 0.0368, 0.05, 14, !0),
        Rc(y.x, y.y, y.z - 0.62, Math.PI / 2, 0, 0),
        2763312,
        Gc,
        kc,
        0.4,
      ));
  }
  {
    let e = 1710877;
    (v.add(
      zc(0.026, 0.032, 0.105),
      Rc(y.x, y.y + 0.004, y.z + 0.03, 0.26, 0, 0),
      e,
      Kc,
      kc,
      0.7,
    ),
      v.add(
        zc(0.024, 0.012, 0.03),
        Rc(y.x, y.y + 0.012, y.z + 0.084, 0.26, 0, 0),
        921104,
        Kc,
        kc,
        0.6,
      ),
      v.add(
        zc(0.029, 0.19, 0.03),
        Rc(y.x, y.y - 0.055, y.z - 0.05),
        2829617,
        Kc,
        Ac,
        0.32,
      ),
      v.add(
        zc(0.024, 0.15, 0.018),
        Rc(y.x, y.y - 0.035, y.z - 0.026),
        e,
        Kc,
        kc,
        0.6,
      ));
    for (let e = 0; e < 5; e++)
      v.add(
        new F(0.0305, 0.003, 0.02),
        Rc(y.x, y.y + 0.025 - e * 0.007, y.z - 0.05),
        1381912,
        Kc,
        Ac,
        0.5,
      );
    (v.add(
      new F(0.006, 0.008, 0.007),
      Rc(y.x, y.y - 0.144, y.z - 0.068),
      1118481,
      Kc,
      Ac,
      0.4,
    ),
      v.add(
        new F(0.018, 0.008, 0.007),
        Rc(y.x, y.y + 0.03, y.z - 0.068),
        1118481,
        Kc,
        Ac,
        0.4,
      ),
      v.add(
        Bc(0.0055, 0.0055, 0.012, 8, !0),
        Rc(y.x, y.y - 0.152, y.z - 0.05, 0, 0, 0),
        328965,
        Kc,
        Ac,
        0.5,
      ),
      v.add(
        new M(0.017, 0.0032, 4, 10, Math.PI),
        Rc(y.x, y.y - 0.03, y.z - 0.012, 0, Math.PI / 2, Math.PI / 2),
        e,
        Kc,
        kc,
        0.6,
      ),
      v.add(
        new F(0.005, 0.006, 0.018),
        Rc(y.x, y.y - 0.026, y.z - 0.004, 0.3, 0, 0),
        3158582,
        Kc,
        Ac,
        0.4,
      ));
  }
  let b = new L(0, -0.16, -0.05);
  {
    let e = 1447706;
    (v.add(
      zc(0.04, 0.27, 0.058),
      Rc(y.x, y.y - 0.07, y.z - 0.055),
      2434859,
      qc,
      Ac,
      0.38,
    ),
      v.add(
        zc(0.036, 0.1, 0.03),
        Rc(y.x, y.y - 0.15, y.z - 0.02),
        e,
        qc,
        kc,
        0.65,
      ),
      v.add(
        Bc(0.0105, 0.0105, 0.09, 10),
        Rc(y.x, y.y - 0.245, y.z - 0.06),
        1118740,
        qc,
        Ac,
        0.35,
      ),
      v.add(
        Bc(0.017, 0.017, 0.05, 10),
        Rc(y.x, y.y - 0.3, y.z - 0.06),
        987154,
        qc,
        Ac,
        0.4,
      ),
      v.add(
        zc(0.026, 0.034, 0.1),
        Rc(y.x, y.y + 0.004, y.z + 0.026, 0.22, 0, 0),
        e,
        qc,
        kc,
        0.7,
      ),
      v.add(
        zc(0.024, 0.036, 0.15),
        Rc(y.x, y.y - 0.1, y.z + 0.05, 0.14, 0, 0),
        1776671,
        qc,
        Ac,
        0.5,
      ),
      v.add(
        zc(0.024, 0.024, 0.07),
        Rc(y.x, y.y - 0.18, y.z + 0.02, 0.05, 0, 0),
        e,
        qc,
        kc,
        0.7,
      ),
      v.add(
        zc(0.016, 0.17, 0.018),
        Rc(y.x, y.y + 0.14, y.z - 0.04),
        1842464,
        qc,
        Ac,
        0.45,
      ),
      v.add(
        zc(0.03, 0.02, 0.07),
        Rc(y.x, y.y + 0.225, y.z - 0.012),
        e,
        qc,
        kc,
        0.7,
      ),
      v.add(
        zc(0.018, 0.06, 0.022),
        Rc(y.x, y.y - 0.05, y.z - 0.094),
        3093046,
        qc,
        Ac,
        0.4,
      ),
      v.add(
        new F(0.014, 0.004, 0.016),
        Rc(y.x, y.y - 0.081, y.z - 0.094),
        16726831,
        qc,
        jc,
        0.3,
        0.35,
      ));
  }
  let x = new L(0, -0.33, -0.06);
  {
    let e = r[21],
      t = e.x + 0.017,
      n = e.y - 0.03,
      a = e.z,
      o = i ? 15778509 : 1974308;
    (v.add(zc(0.0095, 0.148, 0.072, 0.0045), Rc(t, n, a), o, Jc, kc, 0.35),
      v.add(
        new g(0.062, 0.134, 1, 12),
        Rc(t + 0.0049, n, a, 0, Math.PI / 2, 0),
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
        Jc,
        jc,
        0.2,
        0.6,
      ),
      v.add(
        Bc(0.008, 0.008, 0.004, 10),
        Rc(t - 0.005, n - 0.054, a + 0.02, 0, 0, Math.PI / 2),
        789518,
        Jc,
        kc,
        0.2,
      ));
  }
  {
    let e = r[26];
    (v.add(
      Bc(0.043, 0.035, 0.15, 16),
      Rc(e.x, e.y, e.z, -Math.PI / 2, 0, 0),
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
      Xc,
      kc,
      0.25,
    ),
      v.add(
        Bc(0.0455, 0.0455, 0.008, 16),
        Rc(e.x, e.y, e.z - 0.077, -Math.PI / 2, 0, 0),
        15722975,
        Xc,
        kc,
        0.3,
      ),
      v.add(
        Bc(0.0068, 0.0068, 0.13, 8, !0),
        Rc(e.x + 0.012, e.y, e.z - 0.125, -Math.PI / 2 + 0.12, 0, 0),
        i ? 16740193 : 3126182,
        Xc,
        kc,
        0.3,
      ));
  }
  {
    let e = r[27];
    (v.add(
      Bc(0.0075, 0.0075, 0.82, 6),
      Rc(e.x, e.y, e.z - 0.36, -Math.PI / 2, 0, 0),
      2763310,
      Zc,
      Ac,
      0.35,
    ),
      v.add(
        new M(0.034, 0.01, 6, 12, Math.PI),
        Rc(e.x, e.y - 0.034, e.z + 0.05, 0, Math.PI / 2, 0),
        7031342,
        Zc,
        kc,
        0.4,
      ),
      v.add(
        Bc(0.013, 0.012, 0.11, 8),
        Rc(e.x, e.y, e.z + 0, -Math.PI / 2, 0, 0),
        7031342,
        Zc,
        kc,
        0.4,
      ));
    let t = i ? 16743790 : 1911364,
      n = i ? 16773866 : 3360362,
      a = (e) => {
        let t = new _(1, 24, 5, 0, Math.PI * 2, 0, Math.PI * 0.36),
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
      o = new L(e.x, e.y, e.z - 0.47),
      s = (e, r, i, a) => {
        let s = Math.atan2(e - o.x, r - o.y);
        a.setHex(
          Math.floor(((s + Math.PI) / (Math.PI * 2)) * 8 + 0.001) % 2 ? t : n,
        );
      };
    for (let e of [!1, !0])
      v.add(
        a(e),
        Rc(o.x, o.y, o.z, -Math.PI / 2, 0, 0),
        s,
        Zc,
        Mc,
        e ? 0.75 : 0.45,
      );
    v.add(
      new d(0.011, 0.05, 6),
      Rc(e.x, e.y, e.z - 0.8, -Math.PI / 2, 0, 0),
      2763310,
      Zc,
      Ac,
      0.4,
    );
  }
  {
    let { min: t, max: n } = e.head,
      r = (t.x + n.x) / 2,
      a = (t.z + n.z) / 2,
      s = (n.x - t.x) / 2 + 0.024,
      c = (n.z - t.z) / 2 + 0.022,
      l = h + 0.012,
      u = a,
      d = n.y + 0.018 - l,
      f = i ? 15331820 : 1776930,
      p = i ? 16740193 : 13115436,
      m = i ? 13621715 : 2895670,
      g = Math.PI * 0.44;
    v.add(
      Vc(s, d, c, 26, 10, 0, Math.PI * 2, 0, g),
      Rc(r, l, u),
      f,
      Yc,
      kc,
      0.22,
    );
    let _ = Vc(
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
    (v.add(_, Rc(r, l, u), f, Yc, kc, 0.22),
      v.add(
        Vc(s * 0.22, d * 1.012, c * 1.012, 6, 10, 0, Math.PI * 2, 0, g),
        Rc(r, l, u),
        p,
        Yc,
        kc,
        0.25,
      ));
    let y = l + d * Math.cos(g);
    v.add(
      new M(1, 0.03, 5, 32),
      Rc(
        r,
        y - 0.002,
        u,
        Math.PI / 2,
        0,
        0,
        s * Math.sin(g),
        c * Math.sin(g),
        0.3,
      ),
      m,
      Yc,
      kc,
      0.6,
    );
    for (let e of [-1, 1])
      v.add(
        new F(0.004, 0.012, 0.04),
        Rc(r + e * s * 0.42, l + d * 0.9, u - c * 0.2, 0, 0, e * 0.45),
        921361,
        Yc,
        kc,
        0.5,
      );
    let b = new w(s * 0.95, s * 0.95, 0.007, 20, 1, !1, Math.PI * 0.5, Math.PI);
    {
      let e = b.attributes.position;
      for (let t = 0; t < e.count; t++)
        e.setXYZ(
          t,
          e.getX(t),
          e.getY(t) - e.getX(t) * e.getX(t) * 1.2,
          e.getZ(t) * 0.6,
        );
      b.computeVertexNormals();
    }
    v.add(
      b,
      Rc(r, l + d * 0.24, u - c * 0.9, -0.22, 0, 0),
      i ? 7322024 : 987155,
      Yc,
      kc,
      0.15,
    );
    let x = o[H.jaw].y,
      S = (e, t, n) => {
        let r = e.distanceTo(t),
          i = new R().compose(
            e.clone().add(t).multiplyScalar(0.5),
            new I().setFromUnitVectors(
              new L(0, 1, 0),
              t.clone().sub(e).normalize(),
            ),
            new L(1, 1, 1),
          );
        v.add(new F(n, r, 0.004), i, 1447446, Yc, Oc, 0.9);
      };
    for (let e of [-1, 1])
      S(
        new L(r + e * (s - 0.03), l + 0.005, u - c * 0.08),
        new L(r + e * 0.03, x - 0.1, u - c * 0.42),
        0.011,
      );
    (v.add(
      new F(0.03, 0.008, 0.014),
      Rc(r, x - 0.104, u - c * 0.42),
      2236962,
      Yc,
      kc,
      0.5,
    ),
      v.add(
        new F(0.004, 0.028, 0.05),
        Rc(
          r + (i ? -1 : 1) * s * 0.985,
          l + d * 0.3,
          u + 0.02,
          0,
          0,
          (i ? 1 : -1) * 0.25,
        ),
        i ? 16765514 : 16118246,
        Yc,
        kc,
        0.4,
      ));
  }
  let S = v.build(),
    T = new D(S, e.propMaterial);
  ((T.name = `player-props-${t}`),
    (T.castShadow = !0),
    (T.receiveShadow = !0),
    (T.frustumCulled = !1),
    f.add(T),
    f.updateMatrixWorld(!0),
    T.bind(new C(Wc.map((e) => n[e]))));
  let E = new Uint8Array(33),
    O = (e, t) => {
      E[e] !== (t ? 1 : 2) &&
        ((E[e] = t ? 1 : 2), n[e].scale.setScalar(t ? 1 : 1e-4));
    },
    k = e.meshes,
    A = {
      id: t,
      kind: e.kind,
      root: f,
      mesh: p,
      meshes: k,
      props: T,
      rig: c,
      rc: e.rc,
      height: m,
      eyeHeight: m * 0.8925,
      shoulderY: o[H.armR].y,
      muzzle: { pistol: b, smg: x },
      setProps(e, t, n, r, i, a, o) {
        (O(18, e),
          O(19, t),
          O(20, n),
          O(21, r),
          O(26, i),
          O(27, a),
          O(24, o),
          (T.visible = j && (e || t || n || r || i || a || o)),
          (ee = e || t || n || r || i || a || o));
      },
      setVisible(e) {
        j = e;
        for (let t = 0; t < k.length; t++) k[t].visible = e;
        T.visible = e && ee;
      },
      update: e.update,
      dispose() {
        (f.removeFromParent(), S.dispose(), e.dispose());
      },
    },
    j = !0,
    ee = !1;
  return (A.setProps(!1, !1, !1, !1, !1, !1, !1), O(25, !1), A);
}
