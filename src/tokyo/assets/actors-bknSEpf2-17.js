// tokyo/assets/actors-bknSEpf2 17 — add
// Lines 5134-5951 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function hs(e) {
  let t = new Ko(),
    n = (e) => new j(e),
    r = n(e.coat),
    i = n(e.dark),
    a = n(e.light),
    o = n(e.earIn),
    s = n(e.iris),
    c = n(1446417),
    l = n(394244),
    f = n(16777215),
    p = n(1840145),
    h = n(14970752),
    g = n(2759962),
    _ = n(13119550),
    y = n(14922561),
    b = n(3878957),
    x = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
    S = new V(),
    C = new j(),
    w = new j(),
    T = (e, t, n) => Vo.copy(e).lerp(t, x(n)),
    E = (e) => () => Vo.copy(e),
    D = (e) => () => [e, e, 1, 0],
    O = e.H,
    k = e.len * O,
    A = e.width * O,
    M = e.brisket * O,
    ee = (O + M) / 2,
    P = e.pattern,
    F = (e) =>
      O *
      Go(
        [-1, -0.72, -0.3, 0.3, 0.75, 1],
        [0.9, 1, 0.985, 0.975, 0.97, 0.86],
        e,
      ),
    I = (t) => {
      let n = e.brisket,
        r = e.tuck;
      return (
        O *
        Go(
          [-1, -0.75, -0.45, -0.1, 0.3, 0.62, 0.88, 1],
          [
            n + 0.32 * (1 - n),
            n + 0.05,
            n,
            n + 0.02,
            n + r,
            n + r + 0.03,
            n + r + 0.12,
            0.5 * (n + r + 0.86) + 0.05,
          ],
          t,
        )
      );
    },
    te = (e) =>
      A *
      Go([-1, -0.5, 0, 0.35, 0.65, 1], [0.62, 1, 0.94, 0.86, 0.95, 0.62], e),
    ne = [];
  for (let e of [
    -1, -0.985, -0.95, -0.88, -0.78, -0.62, -0.45, -0.25, 0, 0.25, 0.45, 0.62,
    0.76, 0.86, 0.93, 0.975, 1,
  ]) {
    let t =
        Math.abs(e) > 0.68
          ? Math.sqrt(Math.max(0.04, 1 - ((Math.abs(e) - 0.68) / 0.32) ** 2))
          : 1,
      n = F(e),
      r = I(e);
    ne.push({
      c: new V(0, (n + r) / 2, e * k),
      up: ((n - r) / 2) * t,
      down: ((n - r) / 2) * t,
      hw: te(e) * t,
      p: 2.35,
    });
  }
  let re = (e, t) => {
    let n = Math.max(-1, Math.min(1, e.z / k)),
      o = F(n),
      s = I(n),
      c = (e.y - s) / Math.max(0.001, o - s);
    if (P === `husky`) {
      let e = Y(0.48, 0.74, c) * (1 - Y(-0.86, -0.98, n)),
        t = Math.max(Y(0.42, 0.18, c), Y(-0.68, -0.88, n) * Y(0.95, 0.5, c));
      return T(T(r, i, e), a, t);
    }
    if (P === `corgi`) {
      let e = Math.max(
        Y(0.42, 0.22, c),
        Y(-0.76, -0.92, n),
        Y(0.86, 1, n) * 0.45,
      );
      return T(T(r, i, Y(0.7, 1, c) * 0.35), a, e);
    }
    if (P === `urajiro`) {
      let e = Math.max(Y(0.44, 0.2, c), Y(-0.72, -0.9, n) * Y(0.85, 0.5, c));
      return T(T(r, i, Y(0.7, 1, c) * 0.45), a, e);
    }
    let l = Math.max(
      Y(0.4, 0.15, c) * 0.85,
      Y(-0.74, -0.92, n) * Y(0.8, 0.4, c) * 0.7,
    );
    return T(T(r, i, Y(0.72, 1, c) * 0.35), a, l);
  };
  if (
    (t.add(Zo(ne, 28), re, (e) => {
      let t = Y(k * 0.3, -k * 0.35, e.z);
      return [J.hips, J.chest, 1 - t, t];
    }),
    P === `corgi`)
  )
    for (let e of [-1, 1])
      t.add(
        Jo(
          new V(e * A * 0.34, ee - (O - M) * 0.04, k * 0.8),
          [A * 0.5, (O - M) * 0.36, k * 0.17],
          [16, 12],
        ),
        (e) => T(r, a, 0.7 * Y(ee - (O - M) * 0.05, M + (O - M) * 0.1, e.y)),
        D(J.hips),
      );
  let ie = e.headLen * O,
    ae = e.muzzle,
    L = 1 - ae,
    R = e.skullH * O,
    oe = e.skullW * O,
    se = e.skullTop * O - R,
    ce = -k * 0.92,
    le = (e) => ce - e * ie,
    ue = (e) => se - (e > L ? ((e - L) / ae) * R * 0.3 : 0),
    z = 0.62 - 0.28 * e.stop,
    de = e.muzzleW,
    fe = [
      [0, 0.42, 0.38, 0.45],
      [0.05, 0.82, 0.72, 0.82],
      [L * 0.32, 1, 0.92, 1],
      [L * 0.68, 0.97, 0.98 + 0.08 * e.cheeks, 1 + 0.1 * e.cheeks],
      [L * 0.9, 0.88 - 0.1 * e.stop, 0.84, 0.9],
      [L, z + 0.12, 0.66, de * 1.25],
      [L + ae * 0.4, z, 0.58, de],
      [L + ae * 0.8, z * 0.92, 0.5, de * 0.85],
      [L + ae * 0.94, z * 0.8, 0.42, de * 0.62],
      [1, z * 0.55, 0.28, de * 0.36],
    ],
    pe = (e, t) =>
      Go(
        fe.map((e) => e[0]),
        fe.map((t) => t[e]),
        t,
      ),
    he = Zo(
      [
        ...new Set([
          0,
          0.025,
          0.05,
          0.1,
          L * 0.2,
          L * 0.32,
          L * 0.5,
          L * 0.68,
          L * 0.8,
          L * 0.9,
          L,
          L + ae * 0.2,
          L + ae * 0.4,
          L + ae * 0.6,
          L + ae * 0.8,
          L + ae * 0.9,
          L + ae * 0.94,
          L + ae * 0.975,
          1,
        ]),
      ]
        .sort((e, t) => e - t)
        .map((e) => ({
          c: new V(0, ue(e) + ((pe(1, e) - pe(2, e)) / 2) * R, le(e)),
          up: ((pe(1, e) + pe(2, e)) / 2) * R,
          down: ((pe(1, e) + pe(2, e)) / 2) * R,
          hw: pe(3, e) * oe,
          p: e > L ? 2.5 : 2.15,
        })),
      28,
    ),
    B = new d(he, new u({ side: 2 }));
  B.updateMatrixWorld(!0);
  let ge = (e) => (ce - e) / ie,
    _e = (e) => {
      let t = ge(e.z),
        n = Math.abs(e.x) / oe,
        o = (e.y - ue(Math.min(1, Math.max(0, t)))) / R;
      if (P === `husky`) {
        let e =
          Y(
            -0.04,
            0.08,
            o -
              (0.02 +
                0.3 * n -
                0.45 *
                  Math.exp(-(n * n) / 0.03) *
                  Y(L * 0.45, L * 0.85, t) *
                  (1 - Y(L, L + 0.06, t))),
          ) *
            (1 - Y(L * 0.98, L + 0.1, t)) +
          Y(0.3, 0.08, t) * Y(-0.7, -0.1, o);
        return T(a, i, e);
      }
      if (P === `corgi`) {
        let e =
            Y(0.2 + 0.25 * Y(L * 0.7, 1, t), 0.1 + 0.2 * Y(L * 0.7, 1, t), n) *
            Y(L * 0.3, L * 0.55, t),
          i = Y(-0.2, -0.45, o) * Y(L * 0.4, L * 0.75, t),
          s = Y(L * 0.95, L + 0.04, t);
        return T(r, a, Math.max(e, i, s));
      }
      if (P === `urajiro`) {
        let e =
            Y(0, -0.22, o + 0.3 * (L - Math.min(t, L))) *
            Y(L * 0.3, L * 0.6, t),
          s =
            Y(L * 0.92, L + 0.03, t) *
            Y(z * 0.55, z * 0.15, o + 0.25 * (1 - n)),
          c = Y(-0.55, -0.85, o);
        return T(T(r, i, Y(0.6, 1, o) * 0.3), a, Math.max(e, s, c));
      }
      let s = Y(0.1, -0.25, o) * Y(L * 0.45, L * 0.85, t);
      return T(r, a, s * 0.85);
    },
    ve = L - 0.07,
    ye = (e) =>
      ue(e) + ((pe(1, e) - pe(2, e)) / 2) * R - ((pe(1, e) + pe(2, e)) / 2) * R,
    be = [];
  for (let e of [
    ve,
    ve + 0.02,
    L,
    L + ae * 0.3,
    L + ae * 0.6,
    L + ae * 0.82,
    L + ae * 0.92,
    L + ae * 0.95,
  ]) {
    let t = Y(L + ae * 0.95, L + ae * 0.6, e) * Y(ve, ve + 0.04, e),
      n = ye(e) + R * 0.08,
      r = ye(e) - R * (0.3 * (0.35 + 0.65 * t));
    be.push({
      c: new V(0, (n + r) / 2, le(e)),
      up: (n - r) / 2,
      down: (n - r) / 2,
      hw: pe(3, e) * oe * 0.78 * (0.4 + 0.6 * t),
      p: 2.3,
    });
  }
  (t.add(
    Zo(be, 20),
    (e) => {
      let t = ge(e.z),
        n = ye(Math.min(1, t)) + R * 0.08;
      return e.y > n - R * 0.07
        ? Vo.copy(g)
        : P === `fawn`
          ? T(r, a, 0.6)
          : Vo.copy(a);
    },
    D(J.jaw),
  ),
    t.add(
      Jo(
        new V(0, ye(L + ae * 0.5) + R * 0.04, le(L + ae * 0.55)),
        [pe(3, L + ae * 0.5) * oe * 0.55, R * 0.06, ae * ie * 0.42],
        [14, 8],
      ),
      E(h),
      D(J.jaw),
      1,
      !1,
    ));
  let xe = e.eye * O,
    Se = L * 0.88,
    Ce = ue(Se) + R * ((z + 0.12) * 0.9 + 0.06),
    we = oe * 0.43,
    Te = [];
  for (let r of [-1, 1]) {
    let i = r < 0 ? J.eyeL : J.eyeR,
      o = $o(
        B,
        new V(r * we * 1.25, Ce, le(Se) - ie * 1.2),
        new V(r * we * 0.95, Ce, le(Se) + oe * 0.5),
      ),
      c = o ? o.p : new V(r * we, Ce, le(Se) - oe * 0.8),
      u = (o ? o.n : new V(r * 0.4, 0, -1).normalize())
        .clone()
        .multiplyScalar(0.55)
        .add(new V(0, 0, -0.45))
        .normalize(),
      d = new v().setFromUnitVectors(new V(0, 0, -1), u);
    d.premultiply(new v().setFromAxisAngle(u, r * 0.24 * e.almond));
    let m = c.clone().addScaledVector(u, -xe * 0.04);
    Te.push(m.clone());
    let h = (e, t, n) => new V(e, t, n).applyQuaternion(d).add(m),
      g = xe * (1 + 0.18 * e.almond),
      _ = xe * (1 - 0.12 * e.almond),
      y = new V(0, 1, 0).applyQuaternion(d),
      b = s.clone().multiplyScalar(0.5),
      x = s.clone().lerp(n(P === `husky` ? 14217727 : 12945998), 0.45);
    if (
      (t.add(
        Jo(h(0, 0, xe * 0.16), [g * 1.06, _ * 1.08, xe * 0.45], [18, 10], d),
        E(p),
        D(i),
        0,
        !1,
      ),
      t.add(
        Jo(m, [g, _, xe * 0.5], [18, 12], d),
        (e) => T(b, x, 0.5 - (S.copy(e).sub(m).dot(y) / _) * 0.7),
        D(i),
        1,
        !1,
      ),
      P === `husky`
        ? t.add(
            Jo(
              h(0, xe * 0.04, -xe * 0.28),
              [xe * 0.42, xe * 0.46, xe * 0.3],
              [14, 8],
              d,
            ),
            E(l),
            D(i),
            1,
            !1,
          )
        : t.add(
            Jo(
              h(0, xe * 0.04, -xe * 0.28),
              [g * 0.6, _ * 0.64, xe * 0.3],
              [14, 8],
              d,
            ),
            E(l),
            D(i),
            1,
            !1,
          ),
      t.add(
        Jo(
          h(xe * 0.3, xe * 0.32, -xe * 0.6),
          [xe * 0.27, xe * 0.27, xe * 0.08],
          [10, 6],
          d,
        ),
        E(f),
        D(i),
        1,
        !1,
      ),
      t.add(
        Jo(
          h(-xe * 0.3, -xe * 0.24, -xe * 0.58),
          [xe * 0.12, xe * 0.12, xe * 0.04],
          [8, 4],
          d,
        ),
        E(f),
        D(i),
        1,
        !1,
      ),
      t.add(
        Jo(
          h(0, -_ * 0.66, -xe * 0.47),
          [g * 0.46, xe * 0.055, xe * 0.035],
          [12, 4],
          d,
        ),
        (e) => Vo.setRGB(0.7, 0.76, 0.84),
        D(i),
        1,
        !1,
      ),
      P === `urajiro` || P === `husky`)
    ) {
      let e = $o(
        B,
        new V(r * we * 1, Ce + R * 0.32, le(Se) - ie * 1.2),
        new V(r * we * 0.8, Ce + R * 0.3, le(Se) + oe * 0.5),
      );
      if (e) {
        let n = new v().setFromUnitVectors(new V(0, 0, -1), e.n);
        t.add(
          Jo(
            e.p.clone().addScaledVector(e.n, -R * 0.02),
            [oe * 0.15, R * 0.09, R * 0.05],
            [12, 8],
            n,
          ),
          E(a),
          D(J.head),
          0,
          !1,
        );
      }
    }
  }
  {
    let e = $o(
        B,
        new V(0, ue(1) + R * 0.1, le(1) - ie),
        new V(0, ue(1) + R * 0.05, le(1) + ie * 0.3),
      ),
      n = e ? e.p : new V(0, ue(1), le(1)),
      r = [oe * de * 0.46, R * 0.22, R * 0.18],
      i = n.clone().add(new V(0, R * 0.04, R * 0.06));
    t.add(
      Jo(i, r, [16, 10], void 0, (e) => {
        e.x *= 1 - 0.28 * Y(0.3, -1, e.y);
      }),
      E(c),
      D(J.head),
      1,
      !1,
    );
    for (let e of [-1, 1])
      t.add(
        Jo(
          i.clone().add(new V(e * r[0] * 0.42, -r[1] * 0.12, -r[2] * 0.82)),
          [r[0] * 0.22, r[1] * 0.2, r[2] * 0.2],
          [8, 6],
        ),
        E(l),
        D(J.head),
        1,
        !1,
      );
    t.add(
      Jo(
        i.clone().add(new V(-r[0] * 0.3, r[1] * 0.55, -r[2] * 0.6)),
        [r[0] * 0.25, r[1] * 0.12, r[2] * 0.1],
        [8, 6],
      ),
      E(f),
      D(J.head),
      1,
      !1,
    );
  }
  let Ee = e.earH * O,
    De = (e.earW * O) / 2,
    Oe = oe * 0.2,
    ke = [],
    Ae = [];
  for (let t of [-1, 1]) {
    let n = le(L * 0.42),
      r = $o(
        B,
        new V(t * oe * 0.62, se + R * 3, n),
        new V(t * oe * 0.52, se, n),
      ),
      i = (r ? r.p : new V(t * oe * 0.55, se + R * 0.8, n)).add(
        new V(0, -R * 0.12, 0),
      );
    (Ae.push(i),
      ke.push(
        new N().compose(
          i,
          new v().setFromEuler(
            new Pe(-e.earTilt, -t * 0.28, -t * e.earSplay, `YXZ`),
          ),
          new V(1, 1, 1),
        ),
      ));
  }
  t.add(he, _e, D(J.head));
  let je = Array(zo),
    Ne = Array(zo).fill(-1),
    Fe = (e, t, n) => {
      ((je[e] = n), (Ne[e] = t));
    },
    Ie = new V(0, F(-0.6) - (O - M) * 0.32, -k * 0.62),
    Le = new V(0, se - R * 0.55, ce - ie * 0.16),
    Re = Ie.clone()
      .lerp(Le, 0.5)
      .add(new V(0, R * 0.12, R * 0.18));
  (Fe(J.root, -1, new V(0, 0, 0)),
    Fe(J.hips, J.root, new V(0, ee, k * 0.45)),
    Fe(J.chest, J.hips, new V(0, ee, -k * 0.45)),
    Fe(J.neck, J.chest, Ie.clone()),
    Fe(J.head, J.neck, new V(0, se - R * 0.45, ce - ie * 0.12)),
    Fe(J.jaw, J.head, new V(0, ye(ve + 0.02), le(ve + 0.02))));
  let ze = (e, t) => new V(0, Ee * t, 0).applyMatrix4(ke[e]);
  (Fe(J.earL0, J.head, ze(0, 0)),
    Fe(J.earL1, J.earL0, ze(0, 0.5)),
    Fe(J.earR0, J.head, ze(1, 0)),
    Fe(J.earR1, J.earR0, ze(1, 0.5)),
    Fe(J.eyeL, J.head, Te[0].clone()),
    Fe(J.eyeR, J.head, Te[1].clone()));
  {
    let n = Yo(
        [Ie, Re, Le],
        (t) => A * (0.84 + 0.14 * e.ruff) * (1 - t) + oe * 0.82 * t,
        16,
        10,
      ),
      o = (e, t) =>
        t < 0.5
          ? [J.chest, J.neck, 1 - Y(0, 0.5, t), Y(0, 0.5, t)]
          : [J.neck, J.head, 1 - Y(0.62, 1, t), Y(0.62, 1, t)],
      s = (e, t) => {
        let n = Y(-0.05, -0.6, t.y) + Y(0.2, 0.7, -t.z) * Y(0.3, -0.2, t.y);
        return P === `husky`
          ? T(T(r, i, Y(-0.2, 0.45, t.y)), a, Y(0.15, 0.85, n))
          : P === `corgi`
            ? T(r, a, Math.max(n, 0.9 * (1 - Y(0.25, 0.75, t.y))))
            : P === `urajiro`
              ? T(r, a, n)
              : T(r, a, n * 0.7);
      };
    t.add(n.body, s, o);
    for (let e of n.caps) t.add(e, s, o);
    if (e.ruff > 0) {
      let n = Ie.clone()
        .lerp(Le, 0.4)
        .add(new V(0, -A * 0.3, -A * 0.3));
      t.add(
        Jo(
          n,
          [
            A * 0.78 * Math.sqrt(e.ruff),
            A * 0.92 * Math.sqrt(e.ruff),
            A * 0.62 * Math.sqrt(e.ruff),
          ],
          [16, 12],
        ),
        P === `fawn` ? re : s,
        (e) => [J.chest, J.neck, 0.5, 0.5],
      );
    }
    let c = n.curve.getPointAt(0.42),
      l = n.curve.getTangentAt(0.42),
      u = A * (0.84 + 0.14 * e.ruff) * 0.58 + oe * 0.82 * 0.42 + O * 0.004,
      d = new v().setFromUnitVectors(new V(0, 0, 1), l),
      f = qo(new m(u, O * 0.012, 8, 30));
    (f.computeVertexNormals(),
      t.add(
        Qo(f, new N().compose(c, d, new V(1, 1, 1))),
        E(_),
        D(J.neck),
        0,
        !1,
      ));
    let p = new V(0, u * 0.95, 0).applyQuaternion(d).add(c),
      h = qo(new me(O * 0.022, O * 0.022, O * 0.006, 14));
    (h.computeVertexNormals(),
      t.add(
        Qo(
          h,
          new N().compose(
            p.add(new V(0, -O * 0.025, -O * 0.012)),
            new v().setFromEuler(new Pe(Math.PI / 2 - 0.3, 0, 0)),
            new V(1, 1, 1),
          ),
        ),
        E(y),
        D(J.neck),
        1,
        !1,
      ));
  }
  for (let n = 0; n < 2; n++) {
    let s = ke[n],
      c = n === 0 ? J.earL0 : J.earR0,
      l = n === 0 ? J.earL1 : J.earR1,
      u = (e, t) => [c, l, 1 - Y(0.25, 0.7, t), Y(0.25, 0.7, t)],
      d =
        P === `husky`
          ? (e, t, n) => T(i, r, n * 0.15)
          : (e, t, n) => T(r, i, Y(0.6, 1, n) * (P === `fawn` ? 0.5 : 0.35));
    t.add(Qo(Xo(Ee, De, Oe, e.earRound), s), d, u);
    let f = Xo(Ee * 0.8, De * 0.64, Oe * 0.5, e.earRound);
    t.add(
      Qo(f, new N().makeTranslation(0, Ee * 0.05, -Oe * 0.22).premultiply(s)),
      (e, t, n) => T(o, a, Y(0, 0.35, 0.35 - n) * (P === `fawn` ? 0.2 : 0.8)),
      u,
      0,
      !1,
    );
  }
  let Be = new V(0, F(0.95) - 0.02 * O, k * 0.97),
    Ve = (e, t, n) => new V(e * O, t * O, n * O).add(Be),
    He,
    Ue;
  e.tail === `curl`
    ? ((He = [
        Ve(0, -0.02, -0.02),
        Ve(0, 0.16, 0.1),
        Ve(0.015, 0.32, 0.05),
        Ve(0.04, 0.35, -0.11),
        Ve(0.07, 0.25, -0.2),
        Ve(0.085, 0.15, -0.13),
      ]),
      (Ue = (e) => O * (0.095 - 0.035 * e + 0.025 * Math.sin(Math.PI * e))))
    : e.tail === `brush`
      ? ((He = [
          Ve(0, -0.02, -0.02),
          Ve(0, 0.06, 0.15),
          Ve(0, 0.18, 0.27),
          Ve(0.02, 0.33, 0.26),
          Ve(0.04, 0.42, 0.12),
        ]),
        (Ue = (e) =>
          O *
          (0.06 +
            0.045 * Math.sin(Math.PI * Math.min(1, e * 1.15)) -
            0.015 * e)))
      : e.tail === `sickle`
        ? ((He = [
            Ve(0, -0.02, -0.02),
            Ve(0, 0.15, 0.07),
            Ve(0, 0.32, 0.05),
            Ve(0.01, 0.41, -0.06),
            Ve(0.02, 0.37, -0.16),
          ]),
          (Ue = (e) => O * (0.038 - 0.022 * e)))
        : ((He = [Ve(0, -0.04, -0.03), Ve(0, -0.02, 0), Ve(0, 0, 0.02)]),
          (Ue = (e) => O * (0.05 - 0.01 * e)));
  let We = new Me(He, !1, `centripetal`);
  (Fe(J.tail0, J.hips, We.getPointAt(0)),
    Fe(J.tail1, J.tail0, We.getPointAt(1 / 3)),
    Fe(J.tail2, J.tail1, We.getPointAt(2 / 3)),
    Fe(J.tail3, J.tail2, We.getPointAt(1)));
  {
    let n = Yo(He, Ue, 14, 24),
      o = He.reduce((e, t) => e.add(t), new V()).multiplyScalar(1 / He.length),
      s = (e, t) => {
        let n = Math.min(2.999, t * 3),
          r = Math.floor(n),
          i = n - r;
        return [J.tail0 + r, J.tail0 + Math.min(3, r + 1), 1 - i, i];
      },
      c = (e, t, n) => {
        let s = t.dot(S.copy(o).sub(e).normalize());
        return P === `husky`
          ? T(
              T(r, i, Y(0.15, 0.7, t.y) * Y(0.85, 0.5, n)),
              a,
              Math.max(Y(0.05, -0.6, t.y), Y(0.8, 0.98, n)),
            )
          : P === `urajiro`
            ? T(r, a, Math.max(Y(-0.1, 0.5, s), Y(0.85, 1, n) * 0.6))
            : P === `corgi`
              ? T(r, a, 0.4)
              : T(r, i, n * 0.25);
      };
    if (e.tail !== `none`) {
      t.add(n.body, c, s);
      for (let e of n.caps) t.add(e, c, s);
    } else {
      n.body.dispose();
      for (let e of n.caps) e.dispose();
    }
  }
  let Ge = e.paw * O,
    Ke = e.legThick,
    qe = { uF: 0, lF: 0, uH: 0, lH: 0 };
  for (let e = 0; e < 4; e++) {
    let n = e >= 2,
      i = e % 2 == 0 ? -1 : 1,
      [o, s, c] = Bo[e],
      l = n ? J.hips : J.chest,
      u,
      d,
      f,
      p,
      m;
    (n
      ? ((u = new V(i * A * 0.62, ee + (O - M) * 0.12, k * 0.6)),
        (d = new V(i * A * 0.68, M + (O - M) * 0.06, k * 0.42)),
        (f = new V(i * A * 0.64, M * 0.33 + Ge * 0.3, k * 0.78)),
        (p = new V(i * A * 0.62, Ge * 0.55, k * 0.72)),
        (m = [A * 0.62, O * 0.1 * Ke, O * 0.066 * Ke, O * 0.052 * Ke]))
      : ((u = new V(i * A * 0.6, ee + (O - M) * 0.06, -k * 0.56)),
        (d = new V(i * A * 0.66, M * 0.96, -k * 0.5)),
        (f = new V(i * A * 0.64, M * 0.2 + Ge * 0.5, -k * 0.535)),
        (p = new V(i * A * 0.64, Ge * 0.55, f.z - Ge * 0.45)),
        (m = [A * 0.44, O * 0.085 * Ke, O * 0.064 * Ke, O * 0.056 * Ke])),
      Fe(o, l, u.clone()),
      Fe(s, o, d.clone()),
      Fe(c, s, f.clone()),
      n
        ? ((qe.uH = u.distanceTo(d)), (qe.lH = d.distanceTo(f)))
        : ((qe.uF = u.distanceTo(d)), (qe.lF = d.distanceTo(f))));
    let h = new V(p.x, Ge * 1.05, p.z + Ge * 0.25),
      g = u.distanceTo(d),
      _ = d.distanceTo(f),
      y = f.distanceTo(h),
      x = g + _ + y,
      S = g / x,
      j = (g + _) / x,
      N = (e) =>
        e < S
          ? m[0] + (m[1] - m[0]) * Y(0, S, e)
          : e < j
            ? m[1] + (m[2] - m[1]) * ((e - S) / (j - S))
            : m[2] + (m[3] - m[2]) * ((e - j) / (1 - j)),
      F = (e, t) =>
        t < S - 0.06
          ? [l, o, 1 - Y(0, S * 0.55, t), Y(0, S * 0.55, t)]
          : t < j - 0.05
            ? [o, s, 1 - Y(S - 0.06, S + 0.06, t), Y(S - 0.06, S + 0.06, t)]
            : [s, c, 1 - Y(j - 0.05, j + 0.05, t), Y(j - 0.05, j + 0.05, t)],
      I = (e, t) => {
        let o = Y(0, 0.6, -i * t.x);
        return P === `husky`
          ? T(
              T(a, r, 0.1),
              r,
              Y(M * 0.95, M * 1.4, e.y) * Y(0.1, 0.6, i * t.x) * 0.8,
            )
          : P === `corgi`
            ? T(
                r,
                a,
                Math.max(
                  Y(n ? M * 0.8 : M * 1.15, n ? M * 0.5 : M * 0.75, e.y),
                  o * 0.7,
                ),
              )
            : P === `urajiro`
              ? T(r, a, Math.max(o * 0.85, Y(M * 0.45, M * 0.18, e.y)))
              : T(r, a, Math.max(o * 0.45, Y(M * 0.5, M * 0.2, e.y) * 0.6));
      },
      te = Yo([u, d, f, h], N, 14, 22, [!0, !0]);
    t.add(te.body, I, F);
    for (let e of te.caps) t.add(e, I, F);
    {
      let e = n ? u.clone().lerp(d, 0.42) : u.clone().lerp(d, 0.4),
        r = d.clone().sub(u).normalize(),
        a = new v().setFromUnitVectors(new V(0, 1, 0), r),
        s = u.distanceTo(d);
      ((e.x += i * A * (n ? 0.12 : 0.06)),
        t.add(
          Jo(
            e,
            n ? [A * 0.46, s * 0.62, k * 0.2] : [A * 0.36, s * 0.58, k * 0.15],
            [16, 12],
            a,
          ),
          (e, t) => {
            let r = C.copy(re(e, t, 0)),
              i = w.copy(I(e, t, 0));
            return Vo.copy(r).lerp(i, n ? 0.25 : 0.45);
          },
          (e) => [l, o, 0.45, 0.55],
        ));
    }
    let ne = I;
    t.add(Jo(p, [Ge * 0.95, Ge * 0.6, Ge * 1.15], [14, 10]), ne, D(c));
    for (let e of [-1.5, -0.5, 0.5, 1.5])
      t.add(
        Jo(
          new V(
            p.x + e * Ge * 0.36,
            Ge * 0.38,
            p.z - Ge * (0.95 - Math.abs(e) * 0.12),
          ),
          [Ge * 0.3, Ge * 0.32, Ge * 0.34],
          [8, 6],
        ),
        ne,
        D(c),
        0,
        !1,
      );
    t.add(
      Jo(new V(p.x, Ge * 0.06, p.z), [Ge * 0.55, Ge * 0.06, Ge * 0.6], [10, 6]),
      E(b),
      D(c),
      0,
      !1,
    );
  }
  let H = new V(0, se, le(L * 0.5)),
    Je = {
      cy: ee,
      legLen: M,
      bodyL: k,
      bodyH: (O - M) / 2,
      bodyW: A,
      head: oe,
      headC: H.clone(),
      upperF: qe.uF,
      lowerF: qe.lF,
      upperH: qe.uH,
      lowerH: qe.lH,
      pawR: Ge,
      height: e.skullTop * O,
    },
    Ye = ke.map((e) => new V(0, 1, 0).transformDirection(e)),
    Xe = {
      headC: H.clone(),
      skull: new V(oe * 1.08, R * 1.05, Math.max(ie * L * 0.55, oe)),
      eyes: Te,
      eyeR: xe,
      earBases: Ae,
      earDirs: Ye,
      earR: De,
    };
  return (
    B.material.dispose(),
    { geo: t.build(), rest: { pos: je, parent: Ne, dims: Je, headAcc: Xe } }
  );
}
