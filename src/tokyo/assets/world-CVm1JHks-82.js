// tokyo/assets/world-CVm1JHks 82 — math
// Lines 27470-29183 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function o_(e, t) {
  let n = e.plan.dataset.water,
    r = n.westX,
    a = n.northZ,
    s = e.plan.sidewalkHeight,
    l = Number.isFinite(r) && Number.isFinite(a),
    p = { westX: r, northZ: a, banks: l },
    m = e.params,
    h = m.get(`hour`),
    g =
      h !== null && h !== `` && isFinite(Number(h))
        ? ((Number(h) % 24) + 24) % 24
        : 16,
    _ = m.get(`timescale`),
    y = m.get(`weather`),
    b = y && Xg.includes(y) ? y : null,
    x = (Date.now() ^ 2654435769) >>> 0 || 1,
    S = () => (
      (x ^= x << 13),
      (x ^= x >>> 17),
      (x ^= x << 5),
      (x >>> 0) / 4294967296
    );
  (e.quality.bloom || e.quality.postFx) &&
    m.get(`postfx`) !== `0` &&
    jh().catch(() => {});
  let C = new mp();
  C.region = t?.atmos ?? null;
  let w = new f(16777215, 3);
  w.name = `env-sun`;
  let T = new F(12571903, 5918792, 1.2);
  T.name = `env-hemi`;
  let D = new d(12109526, 170, e.quality.drawDistance),
    k = D.color,
    A = new d(12109526, 170, 1e7);
  A.color = k;
  let j = b ?? `clear`,
    M = { ...Wf[j] },
    ee = { ...M },
    N = { ...M },
    ne = 1,
    P = 1,
    I = 2 + S() * 2,
    ie = b === `rain` || b === `storm` ? 0.85 : 0,
    R = Math.floor(g),
    z = 4,
    oe = +(m.get(`rainbow`) === `1`),
    se = m.get(`rainbow`) === `1` ? 1e9 : 0,
    B = !1,
    ce = 0,
    V = new Tp(),
    le = kp(),
    H,
    de,
    fe,
    me = new yh(),
    ge = [],
    ve = [],
    ye = null,
    be = null,
    xe,
    W = null,
    Se = !1,
    Ce = () => {
      if (((e.renderer.gl.toneMappingExposure = 1), !W)) return;
      let t = W.grade;
      ((t.u(`uExposure`).value = 1),
        t.u(`uLift`).value.set(0, 0.004, 0.01),
        t.u(`uGain`).value.set(1, 1, 1),
        t.u(`uShadowTint`).value.set(1, 1, 1),
        t.u(`uHighTint`).value.set(1, 1, 1),
        (t.u(`uSat`).value = 1.1),
        (t.u(`uContrast`).value = 1.07),
        (t.u(`uToe`).value = 0),
        W.ao && (t.u(`uAOAmount`).value = 0.85),
        W.bloom && ((W.bloomActive = !1), (W.bloom.intensity = 0)));
    },
    we = null,
    Te = null,
    Ee = new ue(),
    De = new wp(null, null);
  (Ee.add(De.group), (Ee.fog = new d(0, 1e7, 1e8)));
  let Oe = 0,
    ke = 0,
    Ae = null,
    je = -99,
    Ne = -1,
    Pe = { rain: null, wind: null, river: null },
    Fe = 1 / 60,
    Ie = 0,
    Le = !0,
    Re = 0,
    ze = new U(),
    Be = !1,
    Ve = [],
    He = [],
    Ue = [],
    We = [],
    Ge = new U(),
    Ke = (e) => e.distanceToPoint(Ge) < 115 && tt.test(e),
    qe = (e) => tt.test(e) && e.distanceToPoint(Ge) >= 115,
    K = null,
    Ye = null,
    J = { m: [], c: [] },
    Xe = (e) => e.distanceToPoint(Ge) < 95 && tt.test(e),
    Ze = [],
    Qe = 0,
    $e = [],
    et = [],
    tt = new gg(),
    nt = new gg(),
    rt = e.params.get(`envgate`) !== `0`,
    it = new Sg(3, i.degToRad(3), rt),
    at = new Sg(3, i.degToRad(3), rt),
    Y = (e, t) => {
      let n = e[e.length - 1];
      return t.n === e.length && t.e === n
        ? !1
        : ((t.n = e.length), (t.e = n), !0);
    },
    ot = { n: -1, e: null },
    st = { n: -1, e: null },
    ct = [],
    lt = null,
    ut = null,
    dt = 2.5,
    ft = () => {
      let t = e.plan.bounds;
      if (!l)
        return {
          x0: t.minX - 760,
          z0: t.minZ - 760,
          x1: t.maxX + 760,
          z1: t.maxZ + 760,
        };
      let n = t.minX - 700,
        r = t.minZ - 700;
      if (H) {
        n = 1 / 0;
        for (let e = t.minZ - 200; e <= t.maxZ + 200; e += 50)
          n = Math.min(n, H.westBank(e));
        r = 1 / 0;
        for (let e = t.minX - 200; e <= t.maxX + 200; e += 50)
          r = Math.min(r, H.northBank(e));
      }
      return {
        x0: n - 60,
        z0: r - 60,
        x1: Math.max(t.maxX, Yh) + 60,
        z1: Math.max(t.maxZ, Xh) + 60,
      };
    },
    pt = (e, t) => {
      Z.viewCap[e] = [t.capacity, t.total, t.grown];
    },
    mt = new U(),
    ht = (e) => e.distanceToPoint(mt) < 420 && tt.test(e),
    gt = null,
    X = null,
    _t = [],
    vt = (e) => {
      for (let t = 0; t < _t.length; t++) if (e.test(_t[t])) return !0;
      return !1;
    },
    yt = null,
    bt = null,
    xt = null,
    St = null,
    Ct = new pe(),
    wt = new L(),
    Tt = m.get(`lightning`) === `1`,
    Et = !1,
    Dt = 0,
    Ot = [],
    kt = [],
    At = null,
    jt = m.get(`aodebug`) === `1`,
    Z = {
      initMs: 0,
      terrainTris: 0,
      terrainFarTris: 0,
      propsTris: 0,
      trees: 0,
      shrubs: 0,
      buildings: 0,
      lodBoxes: 0,
      hillLights: 0,
      updateMs: 0,
      envMs: 0,
      propsBreakdown: {},
      drawn: { main: {}, far: {}, trees: 0, treesNear: 0, shrubs: 0 },
      cullMs: 0,
      trailTreesRemoved: 0,
      trailShrubs: 0,
      cityLights: { lamps: 0, wash: 0, streaks: 0, nodes: 0 },
      edgeBuildings: 0,
      edgesMs: 0,
      detailTris: 0,
      phaseMs: {},
      builderFill: {},
      viewCap: {},
    },
    Mt = new U(),
    Nt = new U(),
    Pt = new E(),
    Ft = new U(),
    It = new U(),
    Lt = new U(),
    Rt = new U(0, 1, 0),
    zt = null,
    Bt = null,
    Vt = new Set([`taipei101`]),
    Ht = [],
    Q = () => {
      let n = new Nm(r_[0], r_[1]);
      ((Z.lodBoxes = Vh(
        n,
        e.plan,
        Vt,
        Ht,
        H ? (e, t) => H.height(e, t) : void 0,
        t?.cityLod,
      )),
        (Z.builderFill.lod = [n.vertexCount, n.indexCount]));
      let r = n.build(),
        i = new vg(r, 400).view(r, !1);
      if ((t_(r), zt)) {
        let e = et.findIndex((e) => e.mesh === zt);
        (e >= 0 && et.splice(e, 1),
          zt.geometry.dispose(),
          (zt.geometry = i.geometry));
      } else
        ((zt = new o(i.geometry, Qm(Bt, `lod`))),
          (zt.frustumCulled = !1),
          (zt.name = `env-city-lod`),
          V.scene.add(zt));
      et.push({ view: i, mesh: zt });
    },
    Ut = (e, t, n) => {
      for (let r of e) {
        let e = r.view.update(t.test, t.testDetail);
        ((r.mesh.visible = e > 0), (n[r.mesh.name] = r.view.tris));
      }
    },
    Wt = (t, n) => {
      (Gf(ee, M),
        Gf(N, Wf[t]),
        (ne = +(n <= 0)),
        (P = Math.max(0.001, n)),
        n <= 0 && Gf(M, N),
        t !== j && ((j = t), e.events.emit(`weather:changed`, { weather: t })));
    },
    Gt = (t) => {
      if ((e.events.emit(`time:hour`, { hour: t }), b || (--I, I > 0))) return;
      let n = j;
      if (!hp(n, S)) return;
      let r = gp(n, t, S);
      (Wt(r, 60 + S() * 70), (I = _p(r, S)));
    },
    Kt = (t) => {
      try {
        e.audio.play(`thunder`, { volume: t, ui: !0, rate: 0.85 + S() * 0.3 });
      } catch {}
    },
    qt = () => {
      let e = Math.floor(g),
        t = Math.floor((g - e) * 60);
      return `${e < 10 ? `0` : ``}${e}:${t < 10 ? `0` : ``}${t}`;
    },
    Jt = 0,
    Yt = async (t) => {
      let n = ++Jt;
      if (((W &&= (e.renderer.setPostFx(null), null)), t))
        try {
          let r = await Rh(e.renderer.gl, e.scene, e.camera, t);
          if (n !== Jt) {
            r.fx.dispose();
            return;
          }
          ((W = r), e.renderer.setPostFx(r.fx), (Dt = 3));
        } catch (e) {
          n === Jt &&
            console.warn(`[environment] post-processing unavailable`, e);
        }
    },
    Xt = () => {
      let t = e.quality,
        n = t.bloom && m.get(`bloom`) !== `0`;
      if (m.get(`postfx`) === `0` || (!n && !t.postFx)) return Yt(null);
      let r = Math.min(window.devicePixelRatio || 1, t.maxPixelRatio),
        i = t.postFx && t.antialias && r < 1.5 && m.get(`smaa`) !== `0`;
      return Yt({
        bloom: n,
        smaa: i,
        smaaPreset: t.level === `ultra` ? `medium` : `low`,
        vignette: t.postFx,
        aoSamples:
          m.get(`ao`) === `0`
            ? 0
            : t.level === `ultra`
              ? 12
              : t.level === `high`
                ? 8
                : 0,
        bloomLevels: t.level === `ultra` ? 4 : t.level === `high` ? 3 : 2,
        frameFormat: m.get(`rtfmt`) === `16f` ? `16f` : `r11`,
      });
    },
    Zt = () => {
      let t = e.quality;
      w.castShadow = t.shadows;
      let n = t.level === `ultra` ? 90 : t.level === `high` ? 70 : 55,
        r = w.shadow.camera;
      ((r.left = -n),
        (r.right = n),
        (r.top = n),
        (r.bottom = -n),
        (r.near = 1),
        (r.far = 1500),
        r.updateProjectionMatrix(),
        w.shadow.mapSize.x !== t.shadowMapSize &&
          (w.shadow.mapSize.set(t.shadowMapSize, t.shadowMapSize),
          w.shadow.map?.dispose(),
          (w.shadow.map = null)),
        (w.shadow.bias = -35e-5),
        (w.shadow.normalBias = 0.045),
        (w.shadow.radius =
          t.level === `ultra` ? 2.6 : t.level === `high` ? 2.2 : 1.6));
    },
    Qt = (t) => {
      let n = w.shadow.camera.right,
        r = e.player?.position ?? t.position;
      (t.getWorldDirection(Mt),
        (Mt.y = 0),
        Mt.lengthSq() < 1e-6 && Mt.set(0, 0, -1),
        Mt.normalize(),
        Lt.set(r.x + Mt.x * n * 0.35, r.y, r.z + Mt.z * n * 0.35));
      let i = C.lightDir;
      (Ft.crossVectors(Rt, i),
        Ft.lengthSq() < 1e-6 && Ft.set(1, 0, 0),
        Ft.normalize(),
        It.crossVectors(i, Ft).normalize());
      let a = (2 * n) / w.shadow.mapSize.x,
        o = Lt.dot(Ft),
        s = Lt.dot(It);
      (Lt.addScaledVector(Ft, Math.round(o / a) * a - o),
        Lt.addScaledVector(It, Math.round(s / a) * a - s),
        w.target.position.copy(Lt),
        w.position.copy(Lt).addScaledVector(i, $g),
        w.target.updateMatrixWorld(),
        w.updateMatrixWorld());
      let c = w.shadow.camera,
        l = Me(i.y, 0.02, 1),
        u = Math.sqrt(1 - l * l),
        d = Math.max(0, Lt.y - e.plan.groundHeight(Lt.x, Lt.z)),
        f = n * 2.2 * u + 560 * l,
        p = n * 1.6 * u + (40 + d) * l + 10,
        m = Math.max(1, $g - f),
        h = $g + p;
      (Math.abs(c.near - m) > 2 || Math.abs(c.far - h) > 2) &&
        ((c.near = m), (c.far = h), c.updateProjectionMatrix());
    },
    $t = null,
    en = null,
    tn = !1,
    nn = null,
    rn = () =>
      e.quality.level !== `low` &&
      m.get(`envmap`) !== `0` &&
      (nn ??= Ih(e.renderer.gl).half),
    an = (t = !0) => {
      if (!we) return;
      if (!rn()) {
        (e.scene.environment &&
          ((e.scene.environment = null),
          (V.scene.environment = null),
          Te?.dispose(),
          (Te = null),
          $t?.dispose(),
          ($t = null)),
          (je = g));
        return;
      }
      let n = performance.now();
      try {
        let n =
          e.quality.level === `low`
            ? 32
            : e.quality.level === `medium`
              ? 64
              : 128;
        if (
          (!$t || $t.width !== n) &&
          ($t?.dispose(),
          Te?.dispose(),
          (Te = null),
          (tn = !1),
          ($t = new re(n, { type: te, generateMipmaps: !1 })),
          (en = new v(0.1, 100, $t)),
          !Lh(e.renderer.gl, [$t]))
        )
          throw Error(`env cube target is not renderable`);
        if (!Te) {
          let e = we;
          (e._setSize &&
            e._allocateTargets &&
            (e._setSize(n), (Te = e._allocateTargets())),
            (tn = !1));
        }
        if (!tn) {
          tn = !0;
          let e = we._ggxMaterial;
          e?.defines &&
            `GGX_SAMPLES` in e.defines &&
            e.defines.GGX_SAMPLES !== 16 &&
            ((e.defines.GGX_SAMPLES = 16), (e.needsUpdate = !0));
        }
        if (!t && Te) {
          ((e.scene.environment = Te.texture),
            (V.scene.environment = Te.texture),
            (je = -99));
          return;
        }
        en.update(e.renderer.gl, Ee);
        let r = we.fromCubemap($t.texture, Te);
        ((Te = r),
          (e.scene.environment = r.texture),
          (V.scene.environment = r.texture));
      } catch (t) {
        (console.warn(`[environment] env map failed`, t),
          (we = null),
          $t?.dispose(),
          ($t = null),
          (e.scene.environment = null),
          (V.scene.environment = null));
      }
      ((je = g),
        (Ne = M.cloud * 3 + M.overcast * 5 + M.mist * 7 + M.storm * 11),
        (Z.envMs = performance.now() - n));
    },
    on = (t) => {
      C.compute(g, M);
      let n = fe ? fe.flash : 0;
      (w.color.copy(C.lightColor), (w.intensity = C.lightIntensity));
      let r = e.quality.level,
        i = C.moonLit ? (r === `ultra` ? 0.25 : 9) : 0.02,
        a = w.castShadow && C.shadowStrength > i && C.lightIntensity > 0.01;
      ((w.shadow.intensity = a
        ? C.shadowStrength * G(i, i + 0.08, C.shadowStrength)
        : 0),
        (w.shadow.autoUpdate = !1));
      let o =
          r === `medium` || (r === `high` && Re < 7)
            ? 1 / 30
            : r === `ultra`
              ? 1 / 60
              : 0,
        s = performance.now() / 1e3;
      if (
        ((Le = a && (!o || s + 1e-6 >= Ie)),
        w.castShadow && !w.shadow.map && (Le = !0),
        Le && o)
      ) {
        let e = Math.max(0, s - Ie);
        Ie = s + o - (e % o);
      }
      w.shadow.needsUpdate = Le;
      let c = !!Te;
      (T.color.copy(C.hemiSky),
        T.groundColor.copy(C.hemiGround),
        (T.intensity = C.hemiIntensity * (c ? 0.6 : 0.9) + n * 2.2),
        n > 0 && T.color.lerp(Pt.setRGB(0.75, 0.8, 1), Math.min(1, n)),
        V.sun.color.copy(w.color),
        (V.sun.intensity = w.intensity),
        V.sun.position.copy(C.lightDir).multiplyScalar(1e3),
        V.hemi.color.copy(T.color),
        V.hemi.groundColor.copy(T.groundColor),
        (V.hemi.intensity = T.intensity),
        (e.scene.environmentIntensity = C.envIntensity),
        (V.scene.environmentIntensity = C.envIntensity),
        (q.uNight.value = C.night),
        q.uSunDir.value.copy(C.lightDir),
        (q.uWet.value = ie),
        le.uSkySun.value.copy(C.sunDir),
        le.uMoonDir.value.copy(C.moonDir),
        le.uZenith.value.copy(C.zenith),
        le.uHorizon.value.copy(C.horizon),
        le.uSunset.value.copy(C.sunset),
        le.uSunGlow.value.copy(C.sunGlow),
        le.uSunDisk.value.copy(C.sunDisk),
        le.uMoonCol.value.copy(C.moonCol),
        le.uCloudLit.value.copy(C.cloudLit),
        le.uCloudAmb.value.copy(C.cloudAmb),
        (le.uCloudCover.value = M.cloud),
        (le.uShafts.value = Me(M.rain * 0.7 + M.storm * 0.5 - 0.15, 0, 1)),
        (le.uStars.value = C.stars),
        (le.uFlash.value = n),
        fe && le.uFlashDir.value.copy(fe.dir),
        (ce += t * (0.004 + M.wind * 0.012)),
        le.uWindOff.value.set(ce, ce * 0.35),
        (le.uSkyTime.value = e.time.real % 1e3),
        le.uGround.value.copy(C.hemiGround).multiplyScalar(0.3),
        xe &&
          (xe.uLightDir.value.copy(C.lightDir),
          xe.uLightCol.value
            .copy(C.lightColor)
            .multiplyScalar(C.lightIntensity * (0.25 + 0.75 * M.sunOcc)),
          xe.uAmbient.value
            .copy(C.hemiSky)
            .lerp(C.hemiGround, 0.35)
            .multiplyScalar(C.hemiIntensity * 0.5),
          (xe.uWTime.value = e.time.real % 3600),
          (xe.uWNight.value = C.night),
          (xe.uWRain.value = M.rain),
          (xe.uCloudShade.value = M.overcast),
          xe.uDeep.value
            .setRGB(0.028, 0.042, 0.034)
            .lerp(Pt.setRGB(0.05, 0.043, 0.032), M.rain * 0.8)));
      let l = C.exposure;
      if (((e.renderer.gl.toneMappingExposure = l), W)) {
        let t = W.grade;
        ((t.u(`uExposure`).value = l * (1 + n * 0.25)),
          (t.u(`uGTime`).value = e.time.real % 100));
        let r = C.sunEl,
          i = G(-2, 3, r) * (1 - G(9, 18, r)) * (1 - M.overcast),
          a = C.night,
          o = g < 12 ? G(-3, 4, r) * (1 - G(14, 30, r)) : 0,
          s = g >= 12 ? G(-9, -1, r) * (1 - G(-1, 6, r)) : 0,
          c = G(25, 55, r) * (1 - M.overcast),
          u = Math.max(M.overcast, M.rain),
          d = t.u(`uLift`).value,
          f = t.u(`uGain`).value,
          p = 1 - a,
          m = C.golden * p;
        (d.set(
          0.004 * i + 0.002 * s + 0.0025 * a + 0.012 * m,
          (0.004 + 0.004 * o) * p + 0.002 * a + 0.008 * m,
          (0.01 + 0.01 * M.rain + 0.008 * o + 0.01 * s) * p + 0.0025 * a,
        ),
          f.set(
            1 + 0.05 * i + 0.03 * a + 0.012 * c - 0.01 * o,
            1 - 0.005 * i - 0.008 * a + 0.004 * c,
            1 - 0.07 * i - 0.02 * a - 0.01 * c + 0.02 * o,
          ));
        let h = t.u(`uShadowTint`).value,
          _ = t.u(`uHighTint`).value;
        if (
          (h.set(
            1 - 0.035 * i - 0.02 * s - 0.012 * a - 0.015 * c - 0.01 * u,
            1 - 0.01 * i - 0.02 * s + 0.003 * a + 0.004 * u,
            1 + 0.05 * i + 0.05 * s * p + 0.01 * a + 0.03 * c + 0.004 * u,
          ),
          _.set(
            1 + 0.05 * i + 0.065 * a + 0.02 * c + 0.015 * o - 0.01 * u,
            1 + 0.012 * i + 0.018 * a + 0.008 * c + 0.01 * o,
            1 - 0.05 * i - 0.045 * a - 0.015 * c - 0.01 * o + 0.01 * u,
          ),
          (t.u(`uSat`).value =
            (1.1 + 0.05 * a + 0.05 * i - 0.03 * o) *
            (1 - 0.2 * M.overcast * (1 - a)) *
            (1 - 0.2 * M.mist)),
          (t.u(`uContrast`).value =
            1.07 +
            0.03 * a +
            0.02 * c -
            0.03 * o -
            0.07 * M.mist -
            0.02 * M.rain -
            0.06 * m),
          (t.u(`uToe`).value = G(0.3, 0.9, a)),
          W.ao && (t.u(`uAOAmount`).value = (0.85 + 0.15 * u) * (1 - 0.35 * a)),
          W.ao && jt && (t.u(`uAODebug`).value = 1),
          W.bloom)
        ) {
          let e = C.bloomNight,
            t = Math.max(e, Math.min(1, n * 2));
          ((W.bloomActive = t > Zg || Dt > 0),
            Dt > 0 && Dt--,
            (W.bloom.intensity = W.bloomActive
              ? (0.4 + 0.3 * e) * G(Zg, 0.6, t)
              : 0),
            (W.bloom.luminanceMaterial.threshold = 1.45 - 0.15 * e));
        }
      }
      Se && Ce();
      let u = e.camera.far,
        d = 90 + 170 * Me(M.overcast * 0.4 + M.rain * 0.8 + M.mist * 0.9, 0, 1);
      ((D.near = bp(C.hazeScale * Me(u / 900, 0.55, 1.25), d)),
        (D.far = u),
        (A.near = D.near),
        (V.scene.fog = e.scene.fog ? A : null),
        lm.uTreeFade.value.set(u * 0.66, u * 0.82),
        (lm.uWindAmt.value = 0.25 + M.wind * 1.1),
        (Zm.uLitFrac.value =
          0.55 -
          0.1 * Me(g >= 0 && g < 5 ? 1 - Math.abs(g - 2.5) / 2.5 : 0, 0, 1)));
    },
    sn = (e) => {
      e.getWorldDirection(Nt);
      let t = Math.hypot(Nt.x, Nt.z);
      t < 0.001 && (Nt.set(0, 0, -1), (t = 1));
      let n = 1 / Math.hypot(1, 0.03);
      (C.skyBase((Nt.x / t) * n, 0.03 * n, (Nt.z / t) * n, k, 0.3),
        C.mist > 0 && k.lerp(C.mistColor, C.mist * 0.6));
      let r = fe ? fe.flash : 0;
      (r > 0 && k.lerp(Pt.setRGB(0.6, 0.64, 0.8), Math.min(0.5, r * 0.4)),
        w.castShadow && Le && Qt(e),
        de?.preRender(e, Fe));
      let i = performance.now(),
        a = e;
      if (
        ((Zm.uLodNear.value = a.far * 0.9),
        (ag.uSplit.value = a.far * 0.85),
        tt.set(e),
        lt &&
          ut &&
          (mt.setFromMatrixPosition(a.matrixWorld),
          (lt.visible = C.night > Qg && ut.update(ht) > 0)),
        bt && St)
      ) {
        let e = C.night > Qg && Ct.distanceToPoint(a.position) < a.far * 0.85;
        bt.visible = e && St.update(tt.test) > 0;
      }
      if (
        ((tt.detailDist = Math.min(a.far * 0.8, 380)),
        it.stale(e, Y($e, ot)) &&
          (it.set(e),
          (it.detailDist = tt.detailDist),
          Ut($e, it, Z.drawn.main)),
        gt && (gt.visible = vt(tt)),
        He.length)
      ) {
        ((tt.maxDist = a.far * 0.84), Ge.setFromMatrixPosition(a.matrixWorld));
        let e = 0,
          t = 0;
        for (let n = 0; n < He.length; n++) {
          let r = We[n],
            i = He[n].update(r ? qe : tt.test);
          if (((Ve[n].visible = i > 0), (e += i), r)) {
            let e = r.update(Ke);
            ((Ue[n].visible = e > 0), (t += e));
          }
        }
        if (((Z.drawn.trees = e), (Z.drawn.treesNear = t), Ye && K)) {
          let e = Ye.update(Xe);
          ((K.visible = e > 0), (Z.drawn.shrubs = e));
        }
      }
      Z.cullMs = Z.cullMs * 0.9 + (performance.now() - i) * 0.1;
    },
    cn = (t) => {
      let n = performance.now();
      if ((nt.set(t), yt && xt)) {
        let n = C.night > Qg;
        ((yt.visible = n && xt.update(nt.test) > 0),
          n &&
            (e.renderer.gl.getDrawingBufferSize(wt),
            (ag.uPx.value =
              (2 * Math.tan(i.degToRad(t.fov) / 2)) /
              Math.max(1, wt.y * (t.zoom || 1)))));
      }
      (at.stale(t, Y(et, st)) && Ut(et, at.set(t), Z.drawn.far),
        X && (X.visible = vt(nt)),
        (Z.cullMs += (performance.now() - n) * 0.1));
    },
    ln = (t) => {
      if (!Ve.length || !Ze.length) return;
      let n = 1 / 0,
        r = -1 / 0,
        i = 1 / 0,
        a = -1 / 0;
      for (let e of t)
        ((n = Math.min(n, e.x)),
          (r = Math.max(r, e.x)),
          (i = Math.min(i, e.z)),
          (a = Math.max(a, e.z)));
      let o = t[t.length - 1],
        s = (e, s, c, l) => {
          if (e < n - 14 || e > r + 14 || s < i - 14 || s > a + 14) return !1;
          if (Math.hypot(e - o.x, s - o.z) < l) return !0;
          for (let n = 0; n < t.length; n++) {
            let r = e - t[n].x,
              i = s - t[n].z;
            if (r * r + i * i < c * c) return !0;
          }
          return !1;
        },
        c = Ze.map(() => ({ m: [], c: [] })),
        l = 0;
      for (let e = 0; e < Ze.length; e++) {
        let t = Ze[e];
        for (let n = 0; n < t.m.length; n++) {
          let r = t.m[n].elements;
          if (s(r[12], r[14], 4.5, 13)) {
            l++;
            continue;
          }
          (c[e].m.push(t.m[n]), c[e].c.push(t.c[n]));
        }
      }
      let d = c[0].m,
        f = c[0].c;
      for (let e of ct) s(e.x, e.z, 4.5, 13) && (e.c.disabled = !0);
      let p = new u(),
        m = new U(),
        h = new U(),
        g = 0;
      for (let n = 1; n + 1 < t.length && d.length < Qe; n += 3) {
        let r = t[n - 1],
          i = t[n + 1],
          a = i.x - r.x,
          o = i.z - r.z,
          c = Math.hypot(a, o) || 1,
          l = a_(n * 1.7 + 0.3),
          u = a_(n * 3.1 + 7.7),
          _ = a_(n * 5.3 + 2.1),
          v = (n / 3) % 2 < 1 ? 1 : -1,
          y = 2.4 + l * 4.6,
          b = t[n].x + (-o / c) * y * v,
          x = t[n].z + (a / c) * y * v;
        if (s(b, x, 2.2, 9)) continue;
        let S = e.plan.groundHeight(b, x),
          C = 0.2 + u * 0.22;
        (p.setFromAxisAngle(Rt, _ * Math.PI * 2),
          h.set(b, S - 0.35 - C * 1.2, x),
          m.set(C * (1 + l * 0.3), C * (0.8 + _ * 0.35), C),
          d.push(new O().compose(h, p, m)),
          f.push(fm(_, u, l).multiplyScalar(0.85)),
          g++);
      }
      if (K && J.m.length) {
        let e = [],
          t = [];
        for (let n = 0; n < J.m.length; n++) {
          let r = J.m[n].elements;
          s(r[12], r[14], 2.6, 11) || (e.push(J.m[n]), t.push(J.c[n]));
        }
        Ye = new bg(K, e, t, 100, 2.5);
      }
      for (let e = 0; e < Ve.length; e++)
        ((He[e] = new bg(Ve[e], c[e].m, c[e].c, 100, e === 1 ? 10 : 7)),
          Ue[e] && (We[e] = new bg(Ue[e], He[e], null, 100, 0)));
      ((Z.trailTreesRemoved = l), (Z.trailShrubs = g));
    },
    un = () => {
      let t = Cp(e.scene),
        n = e.renderer.gl,
        r = V.rig.sync(t, n),
        i = De.sync(t, n);
      return r || i;
    },
    dn = () => {
      if (!Ae) return null;
      let t = e.renderer.gl.properties.get(Ae).uniforms;
      if (!t) return null;
      let n = (e) => {
          let n = t[e]?.value;
          return Array.isArray(n) ? n.length : -1;
        },
        r = n(`directionalLights`);
      if (r < 0) return null;
      let i = Math.max(0, n(`directionalLightShadows`));
      return {
        dir: r - i,
        dirShadow: i,
        point: Math.max(0, n(`pointLights`)),
        spot: Math.max(0, n(`spotLights`)),
        hemi: Math.max(0, n(`hemisphereLights`)),
        unsupported:
          n(`pointLightShadows`) > 0 ||
          n(`spotLightShadows`) > 0 ||
          n(`rectAreaLights`) > 0 ||
          n(`spotLightMap`) > 0,
      };
    },
    fn = (e) => {
      if (((ke -= e), ke > 0)) return;
      ke = 0.5;
      let t = dn();
      t && V.rig.sig && !Sp(t, V.rig.sig) && (un() || (ke = 10));
    },
    pn = (t) => {
      let n = H;
      ye = new xh(
        (t, i) => {
          let a = -1450 + 2400 * t,
            o = (r + n.westBank(a)) / 2 + Math.sin(a * 0.004) * 25;
          return i.set(o, e.plan.waterLevel, a);
        },
        2400,
        5.5,
      );
      let i = bh();
      for (let [n, r] of [
        [e.scene, `boat`],
        [V.scene, `boat-far`],
      ]) {
        let e = Qm(t, r),
          a = new o(i, e);
        ((a.name = `env-boat`), n.add(a), ve.push(a));
      }
    },
    mn = () => {
      (e.events.on(`quality:changed`, () => {
        (Zt(), de.allocate(e.quality.rainParticles), Xt(), (je = -99));
      }),
        e.events.on(`player:spawned`, () => {
          try {
            (Pe.rain?.stop(),
              Pe.wind?.stop(),
              Pe.river?.stop(),
              (Pe = {
                rain: e.audio.loop(`rain`, { volume: 0, ui: !0 }),
                wind: e.audio.loop(`wind`, { volume: 0, ui: !0 }),
                river: l
                  ? e.audio.loop(`ambient_river`, {
                      volume: 0,
                      x: r,
                      y: 0,
                      z: 0,
                    })
                  : null,
              }));
          } catch {
            Pe = { rain: null, wind: null, river: null };
          }
        }));
    },
    hn = {
      name: `environment`,
      get hour() {
        return g;
      },
      setHour(t) {
        g = ((t % 24) + 24) % 24;
        let n = Math.floor(g);
        (n !== R && ((R = n), e.events.emit(`time:hour`, { hour: n })),
          (je = -99));
      },
      timeScale: _ !== null && isFinite(Number(_)) ? Number(_) : 1,
      get weather() {
        return j;
      },
      setWeather(e, t = 45) {
        Xg.includes(e) && (Wt(e, t), (I = 2 + S() * 2));
      },
      get rain() {
        return M.rain;
      },
      get night() {
        return q.uNight.value;
      },
      sun: w,
      fogColor: k,
      lightning() {
        fe &&
          fe.strike(
            e.camera.position,
            (e, t) => H.height(e, t),
            S,
            e.time.real,
            !0,
          );
      },
      get wet() {
        return ie;
      },
      get sunDirection() {
        return C.sunDir;
      },
      get flash() {
        return fe ? fe.flash : 0;
      },
      get wind() {
        return M.wind;
      },
      timeString: qt,
      addFar(e) {
        V.scene.add(e);
        let t = e.userData?.landmark;
        typeof t == `string` && !Vt.has(t) && (Vt.add(t), zt && Q());
      },
      removeFar(e) {
        V.scene.remove(e);
      },
      terrainHeight(t, n) {
        return H ? H.height(t, n) : e.plan.groundHeight(t, n);
      },
      spawnPlane() {
        me.begin(S);
      },
      get farLayer() {
        return V;
      },
      get gloom() {
        return C.dim;
      },
      setSheltered(e) {
        ((Et = !!e), de && (de.sheltered = Et));
      },
      holdLook(e) {
        Se = !!e;
      },
      addRainOccluder(e, t) {
        if (de) return de.addOccluder(e, t);
        let n = -(Ot.length + 1);
        return (Ot.push({ id: n, rect: e, y: t, real: 0 }), n);
      },
      removeRainOccluder(e) {
        if (e < 0) {
          let t = Ot.find((t) => t.id === e);
          t && (t.real && de && de.removeOccluder(t.real), (t.real = -1));
          return;
        }
        de?.removeOccluder(e);
      },
      isSheltered(t, n, r) {
        if (Et) return !0;
        let i = r ?? e.plan.groundHeight(t, n) + 0.5;
        if (de) return de.covered(t, n, i);
        for (let e of Ot) {
          if (e.real === -1) continue;
          let r = e.rect;
          if (
            t > Math.min(r.minX, r.maxX) &&
            t < Math.max(r.minX, r.maxX) &&
            n > Math.min(r.minZ, r.maxZ) &&
            n < Math.max(r.minZ, r.maxZ) &&
            i < e.y
          )
            return !0;
        }
        return !1;
      },
      get paths() {
        return kt;
      },
      _debug: {
        atmos: C,
        wCur: M,
        far: V,
        stats: Z,
        get gates() {
          return { main: it.rebuilds, far: at.rebuilds };
        },
        get post() {
          return W;
        },
        get envRT() {
          return Te;
        },
        regenEnv: () => an(),
        get pmrem() {
          return we;
        },
        get cubeCam() {
          return en;
        },
        get cubeRT() {
          return $t;
        },
        envScene: Ee,
        setPost(e) {
          return Yt(e);
        },
      },
      async init() {
        let n = performance.now(),
          i = e.quality;
        (yp(),
          (e.scene.background = null),
          (e.scene.fog = D),
          (V.scene.fog = A),
          e.scene.add(w, w.target, T),
          Zt(),
          V.install(e.scene, e.camera),
          (V.onPre = sn),
          (V.onFarCamera = cn),
          (V.enabled = m.get(`envfar`) !== `0`));
        let c = performance.now(),
          d = (e) => {
            let t = performance.now();
            ((Z.phaseMs[e] = (Z.phaseMs[e] ?? 0) + (t - c)), (c = t));
          },
          f = async (t) => {
            (d(t), await e.yieldFrame(), (c = performance.now()));
          },
          h = i.level === `low`,
          g = Mp(le, !1, h, t?.sky);
        (V.scene.add(Np(g)),
          Ee.add(Np(Mp(le, !0, !1, t?.sky))),
          (H = new Yp(e.plan, t?.terrain)));
        let _ = rm(H, i.level === `low`, l ? void 0 : []);
        await f(`terrain`);
        let v = rm(H, i.level === `low`, [], 2.1);
        ((Z.terrainTris = _.tris), (Z.terrainFarTris = v.tris));
        let y = new vg(_.geometry, 320).view(_.geometry, !0, {
            area: ft(),
            dist: dt * i.drawDistance,
            detailDist: 0,
          }),
          b = new vg(v.geometry, 400).view(v.geometry, !1);
        (pt(`env-terrain`, y), pt(`env-terrain-far`, b));
        let x = new o(y.geometry, im(!1, h));
        ((x.receiveShadow = !0),
          (x.frustumCulled = !1),
          (x.name = `env-terrain`),
          (Ae = x.material));
        let E = new o(b.geometry, im(!0, h));
        if (
          ((E.frustumCulled = !1),
          (E.name = `env-terrain-far`),
          $e.push({ view: y, mesh: x }),
          et.push({ view: b, mesh: E }),
          e.scene.add(x),
          V.scene.add(E),
          await f(`terrainFar`),
          l)
        ) {
          let t = e.plan.waterLevel,
            n = (n, r, i, a) => {
              let o = Math.hypot(i - n, a - r);
              o < 0.5 ||
                e.statics.addOBB(
                  (n + i) / 2,
                  (r + a) / 2,
                  0.6,
                  o / 2 + 0.3,
                  Math.atan2(i - n, -(a - r)),
                  Hp - 4,
                  t + 4,
                  `wall`,
                );
            },
            i = (e, t, r, i) => {
              let a = Math.max(1, Math.ceil((t - e) / r));
              for (let r = 0; r < a; r++) {
                let o = i(e + ((t - e) * r) / a),
                  s = i(e + ((t - e) * (r + 1)) / a);
                n(o[0], o[1], s[0], s[1]);
              }
            },
            o = -1700,
            s = 1300,
            c = 2400;
          (i(o, s, 30, (e) => [H.westBank(e) + 5, e]),
            i(r - 4, c, 30, (e) => [e, H.northBank(e) + 5]),
            i(o, H.northBank(r) + 5, 30, (e) => [r - 8, e]),
            n(H.westBank(o) + 5, o, r - 8, o),
            n(H.westBank(s) + 5, s, r, s),
            n(c, a, c, H.northBank(c) + 5));
        }
        xe = mm(le, pm(256));
        let k = e.plan.dataset.water.levels,
          ee = ym(e.plan.waterLevel, p, l ? null : H.water, l ? void 0 : k);
        if (
          ((gt = new o(ee, _m(xe, !1, p, t?.water))),
          (gt.frustumCulled = !1),
          (gt.name = `env-water`),
          (X = new o(ee, _m(xe, !0, p, t?.water))),
          (X.frustumCulled = !1),
          (X.name = `env-water-far`),
          e.scene.add(gt),
          V.scene.add(X),
          l)
        ) {
          let t = 5200,
            n = e.plan.waterLevel,
            i = Hp - 2,
            o = n + 2;
          for (let e = -5200; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, H.westBank(e + (300 * n) / 6));
            _t.push(new pe(new U(t - 30, i, e), new U(r + 1, o, e + 300)));
          }
          for (let e = r - 320; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, H.northBank(e + (300 * n) / 6));
            _t.push(new pe(new U(e, i, t - 30), new U(e + 300, o, a + 1)));
          }
        } else {
          let t = e.plan.waterLevel;
          for (let e of vm(H.water, k)) {
            let n = Number.isFinite(e.y) ? e.y : t;
            _t.push(
              new pe(
                new U(e.x0, Math.min(Hp, n - 1.7) - 2, e.z0),
                new U(e.x1, n + 2, e.z1),
              ),
            );
          }
        }
        await f(`water`);
        let te = Ym();
        (m.get(`keepcanvas`) !== `1` &&
          (te.onUpdate = () => {
            te.onUpdate = null;
            let e = te.image;
            e &&
              typeof e.getContext == `function` &&
              ((e.width = 1), (e.height = 1));
          }),
          (Bt = te));
        let N = new Nm(n_[0], n_[1]),
          P = new fh(),
          F = N.triangleCount,
          I = l
            ? th(N, H, e.plan, e.statics, P)
            : {
                trees: [],
                blocked: () => !1,
                gates: [],
                wharf: { x: 0, z: 0 },
                lampCount: 0,
                paths: [],
              },
          re = N.triangleCount;
        await f(`riverside`);
        let L = l
          ? ch(N, H, e.plan)
          : {
              wheelCenter: new U(0, -2e3, 0),
              buildings: 0,
              parkLamps: [],
              decks: [],
            };
        for (let t of L.decks) {
          e.statics.addFloorRect(
            t.minX,
            t.minZ,
            t.maxX,
            t.maxZ,
            t.y,
            `env-bridge`,
          );
          let n = t.y - 2,
            r = t.y + 1;
          if (t.axis === `x`) {
            let i = t.maxX - 3.4;
            (e.statics.addBox(
              t.minX,
              t.minZ - 0.1,
              i,
              t.minZ + 0.35,
              n,
              r,
              `env-bridge`,
            ),
              e.statics.addBox(
                t.minX,
                t.maxZ - 0.35,
                i,
                t.maxZ + 0.1,
                n,
                r,
                `env-bridge`,
              ));
          } else {
            let i = t.maxZ - 3.4;
            (e.statics.addBox(
              t.minX - 0.1,
              t.minZ,
              t.minX + 0.35,
              i,
              n,
              r,
              `env-bridge`,
            ),
              e.statics.addBox(
                t.maxX - 0.35,
                t.minZ,
                t.maxX + 0.1,
                i,
                n,
                r,
                `env-bridge`,
              ));
          }
        }
        let ie = N.triangleCount;
        await f(`farbank`);
        let R = performance.now(),
          ae = l
            ? await ng(N, H, e.plan, e.statics, P, () => f(`edges`))
            : {
                lodBoxes: [],
                lightRoads: [],
                lightNodes: [],
                buildings: 0,
                blocked: () => !1,
                bounds: new pe(),
              };
        Z.edgesMs = performance.now() - R;
        let z = N.triangleCount;
        ((Z.hillLights = l ? dh(N, H) : 0),
          !l && t?.props && (t.props(N, H), t.statics?.()),
          (Z.propsBreakdown = {
            riverside: re - F,
            farbank: ie - re,
            edges: z - ie,
            hillLights: N.triangleCount - z,
          }),
          (Z.edgeBuildings = ae.buildings));
        let oe = ae.blocked;
        Ht = ae.lodBoxes;
        let se = ft(),
          B = (e, t = 0) => ({ area: se, dist: e, detailDist: t });
        if (P.count > 0) {
          lt = P.build();
          let t = lt.geometry;
          ((ut = new vg(t, 200).view(t, !0, B(420))),
            pt(`env-light-pools`, ut),
            (lt.geometry = ut.geometry),
            (lt.frustumCulled = !1),
            e.scene.add(lt));
        }
        Z.buildings = L.buildings;
        let ce = e.plan.bounds.maxZ + 190;
        if (
          ((kt = I.paths
            .map((e) => ({
              ...e,
              points: e.points.map((e) => ({ x: e.x, z: Math.min(e.z, ce) })),
            }))
            .filter(
              (e) =>
                Math.hypot(
                  e.points[1].x - e.points[0].x,
                  e.points[1].z - e.points[0].z,
                ) > 11,
            )),
          Zm.uWheelCenter.value.copy(L.wheelCenter),
          l && lh(N, L.wheelCenter),
          (Z.propsTris = N.triangleCount),
          (Z.builderFill.props = [N.vertexCount, N.indexCount]),
          await f(`edges`),
          N.triangleCount > 0)
        ) {
          let t = N.build(),
            n = i_(t, N.tierTable(), L.wheelCenter);
          for (let e of n.tiles) e.detail && (Z.detailTris += e.count / 3);
          await f(`propsTiles`);
          let r = n.view(t, !0, B(dt * e.quality.drawDistance, 380)),
            i = n.view(t, !1);
          (pt(`env-props`, r), pt(`env-props-far`, i), t_(t));
          let a = new o(r.geometry, Qm(te, `main`));
          ((a.frustumCulled = !1),
            (a.receiveShadow = l),
            l || (a.userData.noWarm = !0),
            (a.name = `env-props`));
          let s = new o(i.geometry, Qm(te, `far`));
          ((s.frustumCulled = !1),
            (s.name = `env-props-far`),
            $e.push({ view: r, mesh: a }),
            et.push({ view: i, mesh: s }),
            e.scene.add(a),
            V.scene.add(s));
        }
        Q();
        {
          let t = e.plan.roads.map((e) => ({
              axis: e.axis,
              at: e.at,
              from: e.from,
              to: e.to,
              halfWidth: e.halfWidth,
              lanesPerDir: e.lanesPerDir,
              median: e.median,
              major: e.major,
              pedestrian: e.pedestrian,
            })),
            n = e.plan.nodes
              .filter((e) => e.kind !== `end`)
              .map((e) => ({
                x: e.x,
                z: e.z,
                halfX: e.halfX,
                halfZ: e.halfZ,
                signal: e.signal,
              }));
          for (let e of ae.lightRoads) t.push(e);
          for (let e of ae.lightNodes) n.push(e);
          let r =
              Number(e.params.get(`lightsthin`) ?? 0) ||
              (i.level === `low` ? 2 : 1),
            a = dg(t, n, L.parkLamps, {
              laneWidth: e.plan.laneWidth,
              side: e.plan.side,
              thin: r,
            }),
            o = e.plan.bounds,
            s = (e, t) => {
              let n = e.attributes.aP;
              return new vg(
                e,
                400,
                (e) => (n.getW(e) > 1.5 ? `streaks` : null),
                (e, t) => {
                  e === `streaks`
                    ? t.set(
                        Mt.set(o.minX - 1200, -20, o.minZ - 200),
                        Nt.set(o.maxX + 1200, 160, o.maxZ + 1e3),
                      )
                    : t.expandByScalar(18);
                },
              ).view(e, !0, t);
            };
          ((xt = s(a.mesh.geometry)),
            (St = s(a.main.geometry, B(dt * i.drawDistance))),
            pt(`env-city-lights`, xt),
            pt(`env-city-lights-main`, St),
            t_(a.mesh.geometry),
            t_(a.main.geometry),
            (yt = a.mesh),
            (yt.geometry = xt.geometry),
            (yt.visible = !1),
            V.scene.add(yt),
            (bt = a.main),
            (bt.geometry = St.geometry),
            (bt.visible = !1),
            e.scene.add(bt),
            Ct.copy(ae.bounds));
          for (let e of L.parkLamps) Ct.expandByPoint(Mt.set(e.x, e.y, e.z));
          Z.cityLights = a.counts;
        }
        (await f(`lod+lights`),
          t?.ready?.({
            scene: e.scene,
            farScene: V.scene,
            propsMaterial: (e) => Qm(te, e),
            atmos: C,
            weather: M,
            field: H,
          }));
        let ue = l
            ? dm(H, i.propDensity, (e, t) => I.blocked(e, t) || oe(e, t))
            : { matrices: [], colors: [], species: [], colliders: [] },
          ve = I.trees,
          ye = ue.matrices.length + ve.length,
          Se = Array.from({ length: 3 }, () => ({ m: [], c: [] }));
        for (let e = 0; e < ue.matrices.length; e++)
          (Se[ue.species[e]].m.push(ue.matrices[e]),
            Se[ue.species[e]].c.push(ue.colors[e]));
        let Ce = Se[0].m,
          Te = Se[0].c,
          De = new u(),
          G = new U(),
          Oe = new U();
        for (let t of ve) {
          let n = (((t.x * 7.13 + t.z * 3.7) % 1) + 1) % 1;
          (De.setFromAxisAngle(Rt, n * Math.PI * 2),
            Oe.set(t.x, t.y - 0.2, t.z),
            G.set(t.s, t.s * (0.9 + n * 0.3), t.s),
            Ce.push(new O().compose(Oe, De, G)),
            Te.push(fm(n, 0.5, (n * 3.3) % 1).multiplyScalar(1.1)),
            e.statics.addCircle(
              t.x,
              t.z,
              0.35 * Math.max(0.6, t.s),
              t.y,
              t.y + 4,
              `tree`,
            ));
        }
        let ke = cm(),
          je = um();
        Qe = Se[0].m.length + 400;
        for (let t = 0; t < 3; t++) {
          let n = Math.max(1, t === 0 ? Qe : Se[t].m.length),
            r = new he(ke[t], je, n);
          ((r.name = t === 0 ? `env-trees` : `env-trees-${t}`),
            Ve.push(r),
            He.push(new bg(r, Se[t].m, Se[t].c, 100, t === 1 ? 10 : 7)),
            e.scene.add(r));
        }
        if (!h && l) {
          let t = Kg(),
            n = Yg(Ag(e.renderer.gl.capabilities.getMaxAnisotropy()));
          for (let r = 0; r < t.length; r++) {
            let i = He[r],
              a = Math.max(
                1,
                Math.min(
                  i.count + (r === 0 ? 400 : 0),
                  i.maxWithin(115, se) + (r === 0 ? 400 : 16),
                ),
              ),
              o = new he(t[r], n, a);
            ((o.name = `env-trees-near-${r}`),
              Ue.push(o),
              We.push(new bg(o, i, null, 100, 0)),
              e.scene.add(o));
          }
          let r = e.plan.bounds,
            a = (e, t) => I.blocked(e, t) || oe(e, t);
          J = Jg(
            (e, t) => H.height(e, t),
            (e, t, n) => {
              if (H.kind(e, t) !== `land`) return !1;
              let r = H.outside(e, t);
              if (r < 12 || r > 330) return !1;
              let i = n - s;
              return i < 2.5 || (H.edgeUrban(e, t) > 0.3 && i < 9)
                ? !1
                : !a(e, t);
            },
            {
              x0: r.minX - 340,
              x1: r.maxX + 340,
              z0: r.minZ - 340,
              z1: r.maxZ + 340,
            },
            7.5 / Math.sqrt(Math.max(0.3, i.propDensity)),
          );
          let o = new bg(null, J.m, J.c, 100, 2.5);
          ((K = new he(
            qg(),
            n,
            Math.max(1, Math.min(o.count, o.maxWithin(95, se) + 16)),
          )),
            (K.name = `env-shrubs`),
            (Ye = new bg(K, o, null, 100, 0)),
            e.scene.add(K),
            (Z.shrubs = J.m.length));
        }
        ((Ze = Se),
          (ct = ue.colliders.map((t) => ({
            x: t.x,
            z: t.z,
            c: e.statics.addCircle(t.x, t.z, 0.5, t.y - 1, t.y + 6, `tree`),
          }))),
          (Z.trees = ye),
          await f(`trees`));
        let Me = vh();
        for (let [t, n] of l
          ? [
              [e.scene, `plane`],
              [V.scene, `plane-far`],
            ]
          : []) {
          let e = Qm(te, n),
            r = new o(Me, e);
          ((r.visible = !1),
            (r.rotation.order = `YXZ`),
            (r.name = `env-plane`),
            t.add(r),
            ge.push(r));
        }
        if (m.get(`plane`) === `1`) {
          me.begin(S);
          for (let e = 0; e < 660; e++) me.update(1 / 30, S);
        } else me.cooldown = 35 + S() * 50;
        (l &&
          (pn(te),
          (be = new wh(
            { x: (r + H.westBank(-250)) / 2 - 10, z: -250 },
            60,
            430,
          )),
          e.scene.add(be.mesh)),
          (de = new hh(i.rainParticles)),
          (de.sheltered = Et));
        for (let e of Ot)
          e.real === 0 && (e.real = de.addOccluder(e.rect, e.y));
        if (l) for (let e of e_) de.addOccluder(e.rect, e.y);
        (e.scene.add(de.mesh),
          (fe = new _h()),
          V.scene.add(fe.mesh),
          (await Je(
            Xt().then(() => !0),
            8e3,
            `postfx`,
            () => !1,
          )) ||
            (Jt++,
            console.warn(
              `[environment] post-processing chunk not loaded after 8 s — rendering without post-processing`,
            )));
        try {
          we = new _e(e.renderer.gl);
        } catch {
          we = null;
        }
        (ne >= 1 && Gf(M, Wf[j]), on(0), an(!1), on(0), mn());
        for (let e of [
          yt,
          bt,
          lt,
          de.mesh,
          fe.mesh,
          be?.mesh,
          ...ge,
          ...Ve,
          ...Ue,
          K,
        ])
          e && (e.visible = !0);
        (W?.bloom && (W.bloomActive = !0),
          un(),
          d(`rest`),
          (Z.initMs = performance.now() - n),
          console.info(
            `[init] environment ${Z.initMs.toFixed(0)}ms · terrain ${Z.terrainTris} tris · props ${Z.propsTris} tris · ${Z.buildings} far buildings · ${Z.trees} trees · gates ${I.gates.length} · lamps ${I.lampCount}`,
          ));
      },
      prewarm() {
        try {
          (un(), rn() && we && an());
        } catch (e) {
          console.warn(`[environment] light rig sync failed`, e);
        }
        let e = [],
          t = (t) => {
            if (!t) return;
            let n = t,
              r;
            if (n.isInstancedMesh) {
              let e = new he(n.geometry, n.material, 1);
              (n.instanceColor &&
                (e.instanceColor = new ae(new Float32Array(3).fill(1), 3)),
                (r = e));
            } else r = new o(t.geometry, t.material);
            ((r.castShadow = t.castShadow),
              (r.receiveShadow = t.receiveShadow),
              (r.renderOrder = t.renderOrder),
              (r.frustumCulled = !1),
              (r.name = t.name + `-prewarm`),
              e.push(r));
          };
        (t(de?.mesh), t(lt), t(bt), t(be?.mesh));
        for (let e of Ue) t(e);
        return (t(K), e);
      },
      start() {
        try {
          let t = e.landmarks?.trail;
          t && t.length > 1 && ln(t);
        } catch (e) {
          console.warn(`[environment] trail clearing failed`, e);
        }
        if (
          ((Ze = []),
          (J = { m: [], c: [] }),
          (ct = []),
          m.get(`envstub`) !== `hide`)
        )
          return;
        let t = new pe(),
          n = e.plan.bounds;
        for (let r of [...e.scene.children]) {
          let i = r;
          i.isMesh &&
            !i.name.startsWith(`env-`) &&
            (i.geometry.boundingBox || i.geometry.computeBoundingBox(),
            t.copy(i.geometry.boundingBox),
            !(t.min.x > -1500) &&
              (t.min.x <= -2500
                ? (i.visible = !1)
                : ((i.material.clippingPlanes = [
                    new c(new U(1, 0, 0), -n.minX),
                    new c(new U(-1, 0, 0), n.maxX),
                    new c(new U(0, 0, 1), -n.minZ),
                    new c(new U(0, 0, -1), n.maxZ),
                  ]),
                  (e.renderer.gl.localClippingEnabled = !0))));
        }
      },
      update(n) {
        let i = performance.now();
        ((Fe = n),
          V.ensureInstalled(),
          hn.timeScale !== 0 &&
            ((g += (n * hn.timeScale) / 60),
            g >= 24 && (g -= 24),
            g < 0 && (g += 24)));
        let o = Math.floor(g);
        if ((o !== R && ((R = o), Gt(o)), ne < 1)) {
          ne = Math.min(1, ne + n / P);
          let e = ne * ne * (3 - 2 * ne);
          Kf(M, ee, N, e);
        }
        ((ie =
          M.rain > 0.05
            ? Math.min(1, ie + n * (0.03 + 0.1 * M.rain))
            : Math.max(0, ie - n * (0.0035 + 0.006 * M.sunOcc * (1 - C.dim)))),
          M.rain > 0.4 && (B = !0),
          B && M.rain < 0.15 && ((B = !1), (se = 150)),
          (se -= n));
        let s = +(se > 0 && C.sunEl > 2 && C.sunEl < 42 && M.sunOcc > 0.3);
        if (
          ((oe += (s - oe) * Math.min(1, n * 0.25)),
          (le.uRainbow.value = oe * Me((M.sunOcc - 0.3) * 2, 0, 1)),
          fe)
        ) {
          let t = M.storm > 0.55 || Tt,
            r = M.storm > 0.1 && M.rain > 0.5;
          if ((t || r) && ((z -= n), z <= 0)) {
            let n = t ? S() < 0.7 : S() < 0.15;
            (fe.strike(
              e.camera.position,
              (e, t) => H.height(e, t),
              S,
              e.time.real,
              n,
            ),
              (z = t ? 3 + S() * (Tt ? 3 : 11) : 25 + S() * 40));
          }
          fe.update(n, e.time.real, Kt);
        }
        let c = e.player?.position;
        if (c && n > 0) {
          if (Be) {
            let e = Math.min(
              60,
              Math.hypot(c.x - ze.x, c.y - ze.y, c.z - ze.z) / n,
            );
            Re += (e - Re) * Math.min(1, n * 8);
          }
          (ze.copy(c), (Be = !0));
        }
        if ((on(n), t?.update?.(n), fn(n), de)) {
          let t = C.dim;
          (Pt.copy(C.hemiSky).multiplyScalar(C.hemiIntensity * 0.34),
            (Pt.r += 0.1 * t),
            (Pt.g += 0.08 * t),
            (Pt.b += 0.07 * t));
          let n = fe ? fe.flash : 0;
          ((Pt.r += n * 0.8),
            (Pt.g += n * 0.85),
            (Pt.b += n),
            de.update(
              M.rain,
              e.time.real % 3600,
              M.wind,
              e.player?.position.y ?? 0,
              Pt,
            ));
        }
        let u = l && me.update(n, S);
        for (let e of ge)
          ((e.visible = u),
            u &&
              (e.position.copy(me.pos),
              e.rotation.set(me.pitch, -me.heading, me.roll)));
        if (u) {
          if (!At)
            try {
              At = e.audio.loop(`jet`, {
                volume: 1,
                x: me.pos.x,
                y: me.pos.y,
                z: me.pos.z,
              });
            } catch {
              At = null;
            }
          At &&
            (At.setPosition(me.pos.x, me.pos.y, me.pos.z),
            At.setParam?.(
              `thrust`,
              me.pos.y > 120 ? 0.55 : 0.4 + 0.15 * (me.pos.y / 120),
            ));
        } else if (At) {
          try {
            At.stop();
          } catch {}
          At = null;
        }
        if (
          ((Zm.uWheelAngle.value =
            (Zm.uWheelAngle.value - n * 0.012) % (Math.PI * 2)),
          be &&
            be.update(
              n,
              (1 - C.dim) * (M.rain < 0.3) * (M.storm < 0.3),
              e.camera.position,
              e.camera.far * 0.8,
            ),
          ye)
        ) {
          ye.update(n);
          for (let e of ve)
            (e.position.copy(ye.pos), (e.rotation.y = -ye.heading));
        }
        if (((Oe -= n), Oe <= 0)) {
          Oe = 0.5;
          let t = M.cloud * 3 + M.overcast * 5 + M.mist * 7 + M.storm * 11,
            n = Math.abs(g - je);
          n > 12 && (n = 24 - n);
          let r = fe ? fe.flash : 0,
            i = e.quality.level === `medium` ? 1 : 0.5;
          rn() && (n > i || Math.abs(t - Ne) > 0.3) && r < 0.01 && an();
        }
        if (
          (Pe.rain && Pe.rain.setVolume(Math.min(1, M.rain * 1.1)),
          Pe.wind &&
            Pe.wind.setVolume(Me((M.wind - 0.3) * 0.8 + M.storm * 0.3, 0, 0.8)),
          Pe.river)
        ) {
          let t = e.camera.position,
            n = t.x - r,
            i = t.z - a;
          (n < i
            ? Pe.river.setPosition(r - 5, e.plan.waterLevel, t.z)
            : Pe.river.setPosition(t.x, e.plan.waterLevel, a - 5),
            Pe.river.setVolume(Me(1 - Math.min(n, i) / 160, 0, 1) * 0.55));
        }
        Z.updateMs = Z.updateMs * 0.95 + (performance.now() - i) * 0.05;
      },
    };
  return hn;
}
