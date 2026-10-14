// tokyo/assets/actors-Bnj6Q1ad 13 — add
// Lines 6144-6735 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Oo(e) {
  let { id: t, bones: n, joints: r } = e,
    i = t === `wen`;
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
    g = new ro(),
    _ = r[18];
  {
    let e = new ye(
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
      ].map(([e, t]) => new le(e, t)),
      14,
    );
    (g.add(
      e,
      co(_.x, _.y, _.z + 0.035, -Math.PI / 2, 0, 0),
      (e, t, n, r) => r.setHex(n > _.z - 0.25 ? 1907482 : 13211994),
      go,
      $a,
      0.42,
    ),
      g.add(
        uo(0.025, 0.022, 0.018, 12),
        co(_.x, _.y, _.z + 0.04, Math.PI / 2, 0, 0),
        1184274,
        go,
        $a,
        0.5,
      ),
      g.add(
        uo(0.0368, 0.0368, 0.05, 14, !0),
        co(_.x, _.y, _.z - 0.62, Math.PI / 2, 0, 0),
        2763312,
        go,
        $a,
        0.4,
      ));
  }
  {
    let e = 1710877;
    (g.add(
      lo(0.026, 0.032, 0.105),
      co(_.x, _.y + 0.004, _.z + 0.03, 0.26, 0, 0),
      e,
      _o,
      $a,
      0.7,
    ),
      g.add(
        lo(0.024, 0.012, 0.03),
        co(_.x, _.y + 0.012, _.z + 0.084, 0.26, 0, 0),
        921104,
        _o,
        $a,
        0.6,
      ),
      g.add(
        lo(0.029, 0.19, 0.03),
        co(_.x, _.y - 0.055, _.z - 0.05),
        2829617,
        _o,
        eo,
        0.32,
      ),
      g.add(
        lo(0.024, 0.15, 0.018),
        co(_.x, _.y - 0.035, _.z - 0.026),
        e,
        _o,
        $a,
        0.6,
      ));
    for (let e = 0; e < 5; e++)
      g.add(
        new L(0.0305, 0.003, 0.02),
        co(_.x, _.y + 0.025 - e * 0.007, _.z - 0.05),
        1381912,
        _o,
        eo,
        0.5,
      );
    (g.add(
      new L(0.006, 0.008, 0.007),
      co(_.x, _.y - 0.144, _.z - 0.068),
      1118481,
      _o,
      eo,
      0.4,
    ),
      g.add(
        new L(0.018, 0.008, 0.007),
        co(_.x, _.y + 0.03, _.z - 0.068),
        1118481,
        _o,
        eo,
        0.4,
      ),
      g.add(
        uo(0.0055, 0.0055, 0.012, 8, !0),
        co(_.x, _.y - 0.152, _.z - 0.05, 0, 0, 0),
        328965,
        _o,
        eo,
        0.5,
      ),
      g.add(
        new ee(0.017, 0.0032, 4, 10, Math.PI),
        co(_.x, _.y - 0.03, _.z - 0.012, 0, Math.PI / 2, Math.PI / 2),
        e,
        _o,
        $a,
        0.6,
      ),
      g.add(
        new L(0.005, 0.006, 0.018),
        co(_.x, _.y - 0.026, _.z - 0.004, 0.3, 0, 0),
        3158582,
        _o,
        eo,
        0.4,
      ));
  }
  let v = new R(0, -0.16, -0.05);
  {
    let e = 1447706;
    (g.add(
      lo(0.04, 0.27, 0.058),
      co(_.x, _.y - 0.07, _.z - 0.055),
      2434859,
      vo,
      eo,
      0.38,
    ),
      g.add(
        lo(0.036, 0.1, 0.03),
        co(_.x, _.y - 0.15, _.z - 0.02),
        e,
        vo,
        $a,
        0.65,
      ),
      g.add(
        uo(0.0105, 0.0105, 0.09, 10),
        co(_.x, _.y - 0.245, _.z - 0.06),
        1118740,
        vo,
        eo,
        0.35,
      ),
      g.add(
        uo(0.017, 0.017, 0.05, 10),
        co(_.x, _.y - 0.3, _.z - 0.06),
        987154,
        vo,
        eo,
        0.4,
      ),
      g.add(
        lo(0.026, 0.034, 0.1),
        co(_.x, _.y + 0.004, _.z + 0.026, 0.22, 0, 0),
        e,
        vo,
        $a,
        0.7,
      ),
      g.add(
        lo(0.024, 0.036, 0.15),
        co(_.x, _.y - 0.1, _.z + 0.05, 0.14, 0, 0),
        1776671,
        vo,
        eo,
        0.5,
      ),
      g.add(
        lo(0.024, 0.024, 0.07),
        co(_.x, _.y - 0.18, _.z + 0.02, 0.05, 0, 0),
        e,
        vo,
        $a,
        0.7,
      ),
      g.add(
        lo(0.016, 0.17, 0.018),
        co(_.x, _.y + 0.14, _.z - 0.04),
        1842464,
        vo,
        eo,
        0.45,
      ),
      g.add(
        lo(0.03, 0.02, 0.07),
        co(_.x, _.y + 0.225, _.z - 0.012),
        e,
        vo,
        $a,
        0.7,
      ),
      g.add(
        lo(0.018, 0.06, 0.022),
        co(_.x, _.y - 0.05, _.z - 0.094),
        3093046,
        vo,
        eo,
        0.4,
      ),
      g.add(
        new L(0.014, 0.004, 0.016),
        co(_.x, _.y - 0.081, _.z - 0.094),
        16726831,
        vo,
        to,
        0.3,
        0.35,
      ));
  }
  let b = new R(0, -0.33, -0.06);
  {
    let e = r[21],
      t = e.x + 0.017,
      n = e.y - 0.03,
      a = e.z,
      o = i ? 15778509 : 1974308;
    (g.add(lo(0.0095, 0.148, 0.072, 0.0045), co(t, n, a), o, yo, $a, 0.35),
      g.add(
        new te(0.062, 0.134, 1, 12),
        co(t + 0.0049, n, a, 0, Math.PI / 2, 0),
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
        yo,
        to,
        0.2,
        0.6,
      ),
      g.add(
        uo(0.008, 0.008, 0.004, 10),
        co(t - 0.005, n - 0.054, a + 0.02, 0, 0, Math.PI / 2),
        789518,
        yo,
        $a,
        0.2,
      ));
  }
  {
    let e = r[26];
    (g.add(
      uo(0.043, 0.035, 0.15, 16),
      co(e.x, e.y, e.z, -Math.PI / 2, 0, 0),
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
      xo,
      $a,
      0.25,
    ),
      g.add(
        uo(0.0455, 0.0455, 0.008, 16),
        co(e.x, e.y, e.z - 0.077, -Math.PI / 2, 0, 0),
        15722975,
        xo,
        $a,
        0.3,
      ),
      g.add(
        uo(0.0068, 0.0068, 0.13, 8, !0),
        co(e.x + 0.012, e.y, e.z - 0.125, -Math.PI / 2 + 0.12, 0, 0),
        i ? 16740193 : 3126182,
        xo,
        $a,
        0.3,
      ));
  }
  {
    let e = r[27];
    (g.add(
      uo(0.0075, 0.0075, 0.82, 6),
      co(e.x, e.y, e.z - 0.36, -Math.PI / 2, 0, 0),
      2763310,
      So,
      eo,
      0.35,
    ),
      g.add(
        new ee(0.034, 0.01, 6, 12, Math.PI),
        co(e.x, e.y - 0.034, e.z + 0.05, 0, Math.PI / 2, 0),
        7031342,
        So,
        $a,
        0.4,
      ),
      g.add(
        uo(0.013, 0.012, 0.11, 8),
        co(e.x, e.y, e.z + 0, -Math.PI / 2, 0, 0),
        7031342,
        So,
        $a,
        0.4,
      ));
    let t = i ? 16743790 : 1911364,
      n = i ? 16773866 : 3360362,
      a = (e) => {
        let t = new D(1, 24, 5, 0, Math.PI * 2, 0, Math.PI * 0.36),
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
      o = new R(e.x, e.y, e.z - 0.47),
      s = (e, r, i, a) => {
        let s = Math.atan2(e - o.x, r - o.y);
        a.setHex(
          Math.floor(((s + Math.PI) / (Math.PI * 2)) * 8 + 0.001) % 2 ? t : n,
        );
      };
    for (let e of [!1, !0])
      g.add(
        a(e),
        co(o.x, o.y, o.z, -Math.PI / 2, 0, 0),
        s,
        So,
        no,
        e ? 0.75 : 0.45,
      );
    g.add(
      new d(0.011, 0.05, 6),
      co(e.x, e.y, e.z - 0.8, -Math.PI / 2, 0, 0),
      2763310,
      So,
      eo,
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
      _ = Math.PI * 0.44;
    g.add(
      fo(s, d, c, 26, 10, 0, Math.PI * 2, 0, _),
      co(r, l, u),
      f,
      bo,
      $a,
      0.22,
    );
    let v = fo(
      s,
      d,
      c,
      20,
      5,
      Math.PI * 1.5 + 0.95,
      Math.PI * 2 - 1.9,
      _,
      Math.PI * 0.16,
    );
    (g.add(v, co(r, l, u), f, bo, $a, 0.22),
      g.add(
        fo(s * 0.22, d * 1.012, c * 1.012, 6, 10, 0, Math.PI * 2, 0, _),
        co(r, l, u),
        p,
        bo,
        $a,
        0.25,
      ));
    let b = l + d * Math.cos(_);
    g.add(
      new ee(1, 0.03, 5, 32),
      co(
        r,
        b - 0.002,
        u,
        Math.PI / 2,
        0,
        0,
        s * Math.sin(_),
        c * Math.sin(_),
        0.3,
      ),
      m,
      bo,
      $a,
      0.6,
    );
    for (let e of [-1, 1])
      g.add(
        new L(0.004, 0.012, 0.04),
        co(r + e * s * 0.42, l + d * 0.9, u - c * 0.2, 0, 0, e * 0.45),
        921361,
        bo,
        $a,
        0.5,
      );
    let x = new w(s * 0.95, s * 0.95, 0.007, 20, 1, !1, Math.PI * 0.5, Math.PI);
    {
      let e = x.attributes.position;
      for (let t = 0; t < e.count; t++)
        e.setXYZ(
          t,
          e.getX(t),
          e.getY(t) - e.getX(t) * e.getX(t) * 1.2,
          e.getZ(t) * 0.6,
        );
      x.computeVertexNormals();
    }
    g.add(
      x,
      co(r, l + d * 0.24, u - c * 0.9, -0.22, 0, 0),
      i ? 7322024 : 987155,
      bo,
      $a,
      0.15,
    );
    let S = o[H.jaw].y,
      C = (e, t, n) => {
        let r = e.distanceTo(t),
          i = new ke().compose(
            e.clone().add(t).multiplyScalar(0.5),
            new y().setFromUnitVectors(
              new R(0, 1, 0),
              t.clone().sub(e).normalize(),
            ),
            new R(1, 1, 1),
          );
        g.add(new L(n, r, 0.004), i, 1447446, bo, Qa, 0.9);
      };
    for (let e of [-1, 1])
      C(
        new R(r + e * (s - 0.03), l + 0.005, u - c * 0.08),
        new R(r + e * 0.03, S - 0.1, u - c * 0.42),
        0.011,
      );
    (g.add(
      new L(0.03, 0.008, 0.014),
      co(r, S - 0.104, u - c * 0.42),
      2236962,
      bo,
      $a,
      0.5,
    ),
      g.add(
        new L(0.004, 0.028, 0.05),
        co(
          r + (i ? -1 : 1) * s * 0.985,
          l + d * 0.3,
          u + 0.02,
          0,
          0,
          (i ? 1 : -1) * 0.25,
        ),
        i ? 16765514 : 16118246,
        bo,
        $a,
        0.4,
      ));
  }
  let x = g.build(),
    C = new S(x, e.propMaterial);
  ((C.name = `player-props-${t}`),
    (C.castShadow = !0),
    (C.receiveShadow = !0),
    (C.frustumCulled = !1),
    f.add(C),
    f.updateMatrixWorld(!0),
    C.bind(new ge(ho.map((e) => n[e]))));
  let T = new Uint8Array(33),
    E = (e, t) => {
      T[e] !== (t ? 1 : 2) &&
        ((T[e] = t ? 1 : 2), n[e].scale.setScalar(t ? 1 : 1e-4));
    },
    O = e.meshes,
    k = {
      id: t,
      kind: e.kind,
      root: f,
      mesh: p,
      meshes: O,
      props: C,
      rig: c,
      rc: e.rc,
      height: m,
      eyeHeight: m * 0.8925,
      shoulderY: o[H.armR].y,
      muzzle: { pistol: v, smg: b },
      setProps(e, t, n, r, i, a, o) {
        (E(18, e),
          E(19, t),
          E(20, n),
          E(21, r),
          E(26, i),
          E(27, a),
          E(24, o),
          (C.visible = A && (e || t || n || r || i || a || o)),
          (j = e || t || n || r || i || a || o));
      },
      setVisible(e) {
        A = e;
        for (let t = 0; t < O.length; t++) O[t].visible = e;
        C.visible = e && j;
      },
      update: e.update,
      dispose() {
        (f.removeFromParent(), x.dispose(), e.dispose());
      },
    },
    A = !0,
    j = !1;
  return (k.setProps(!1, !1, !1, !1, !1, !1, !1), E(25, !1), k);
}
