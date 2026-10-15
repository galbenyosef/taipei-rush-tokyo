// tokyo/assets/world-CAmHK742 82 — math
// Lines 27403-29115 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function $g(e, t) {
  let n = e.plan.dataset.water,
    i = n.westX,
    a = n.northZ,
    c = e.plan.sidewalkHeight,
    l = Number.isFinite(i) && Number.isFinite(a),
    u = { westX: i, northZ: a, banks: l },
    d = e.params,
    p = d.get(`hour`),
    h =
      p !== null && p !== `` && isFinite(Number(p))
        ? ((Number(p) % 24) + 24) % 24
        : 16,
    g = d.get(`timescale`),
    _ = d.get(`weather`),
    v = _ && Ug.includes(_) ? _ : null,
    y = (Date.now() ^ 2654435769) >>> 0 || 1,
    b = () => (
      (y ^= y << 13),
      (y ^= y >>> 17),
      (y ^= y << 5),
      (y >>> 0) / 4294967296
    );
  (e.quality.bloom || e.quality.postFx) &&
    d.get(`postfx`) !== `0` &&
    wh().catch(() => {});
  let x = new sp();
  x.region = t?.atmos ?? null;
  let S = new m(16777215, 3);
  S.name = `env-sun`;
  let C = new I(12571903, 5918792, 1.2);
  C.name = `env-hemi`;
  let w = new f(12109526, 170, e.quality.drawDistance),
    T = w.color,
    E = new f(12109526, 170, 1e7);
  E.color = T;
  let D = v ?? `clear`,
    O = { ...Lf[D] },
    k = { ...O },
    A = { ...O },
    N = 1,
    P = 1,
    ee = 2 + b() * 2,
    F = v === `rain` || v === `storm` ? 0.85 : 0,
    ne = Math.floor(h),
    re = 4,
    R = +(d.get(`rainbow`) === `1`),
    ie = d.get(`rainbow`) === `1` ? 1e9 : 0,
    ae = !1,
    oe = 0,
    B = new vp(),
    se = Sp(),
    V,
    H,
    ce,
    le = new fh(),
    ue = [],
    de = [],
    fe = null,
    pe = null,
    me,
    he = null,
    ge = !1,
    _e = () => {
      if (((e.renderer.gl.toneMappingExposure = 1), !he)) return;
      let t = he.grade;
      ((t.u(`uExposure`).value = 1),
        t.u(`uLift`).value.set(0, 0.004, 0.01),
        t.u(`uGain`).value.set(1, 1, 1),
        t.u(`uShadowTint`).value.set(1, 1, 1),
        t.u(`uHighTint`).value.set(1, 1, 1),
        (t.u(`uSat`).value = 1.1),
        (t.u(`uContrast`).value = 1.07),
        (t.u(`uToe`).value = 0),
        he.ao && (t.u(`uAOAmount`).value = 0.85),
        he.bloom && ((he.bloomActive = !1), (he.bloom.intensity = 0)));
    },
    be = null,
    Se = null,
    Te = new s(),
    Ee = new _p(null, null);
  (Te.add(Ee.group), (Te.fog = new f(0, 1e7, 1e8)));
  let Oe = 0,
    ke = 0,
    Ae = null,
    je = -99,
    Me = -1,
    K = { rain: null, wind: null, river: null },
    Ne = 1 / 60,
    Pe = 0,
    Fe = !0,
    Ie = 0,
    Le = new U(),
    Re = !1,
    ze = [],
    Be = [],
    Ve = [],
    He = [],
    We = new U(),
    Ke = (e) => e.distanceToPoint(We) < 115 && et.test(e),
    qe = (e) => et.test(e) && e.distanceToPoint(We) >= 115,
    Je = null,
    Ye = null,
    J = { m: [], c: [] },
    Xe = (e) => e.distanceToPoint(We) < 95 && et.test(e),
    Ze = [],
    Qe = 0,
    Y = [],
    $e = [],
    et = new lg(),
    tt = new lg(),
    nt = e.params.get(`envgate`) !== `0`,
    rt = new hg(3, j.degToRad(3), nt),
    it = new hg(3, j.degToRad(3), nt),
    at = (e, t) => {
      let n = e[e.length - 1];
      return t.n === e.length && t.e === n
        ? !1
        : ((t.n = e.length), (t.e = n), !0);
    },
    ot = { n: -1, e: null },
    st = { n: -1, e: null },
    ct = [],
    lt = null,
    X = null,
    ut = 2.5,
    dt = () => {
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
      if (V) {
        n = 1 / 0;
        for (let e = t.minZ - 200; e <= t.maxZ + 200; e += 50)
          n = Math.min(n, V.westBank(e));
        r = 1 / 0;
        for (let e = t.minX - 200; e <= t.maxX + 200; e += 50)
          r = Math.min(r, V.northBank(e));
      }
      return {
        x0: n - 60,
        z0: r - 60,
        x1: Math.max(t.maxX, Hh) + 60,
        z1: Math.max(t.maxZ, Uh) + 60,
      };
    },
    ft = (e, t) => {
      Z.viewCap[e] = [t.capacity, t.total, t.grown];
    },
    pt = new U(),
    mt = (e) => e.distanceToPoint(pt) < 420 && et.test(e),
    ht = null,
    gt = null,
    _t = [],
    vt = (e) => {
      for (let t = 0; t < _t.length; t++) if (e.test(_t[t])) return !0;
      return !1;
    },
    yt = null,
    bt = null,
    xt = null,
    St = null,
    Ct = new xe(),
    wt = new ve(),
    Tt = d.get(`lightning`) === `1`,
    Et = !1,
    Dt = 0,
    Ot = [],
    kt = [],
    At = null,
    jt = d.get(`aodebug`) === `1`,
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
    Pt = new W(),
    Ft = new U(),
    Q = new U(),
    It = new U(),
    Lt = new U(0, 1, 0),
    Rt = null,
    zt = null,
    Bt = new Set([`taipei101`]),
    Vt = [],
    Ht = () => {
      let n = new Em(Xg[0], Xg[1]);
      ((Z.lodBoxes = Ph(
        n,
        e.plan,
        Bt,
        Vt,
        V ? (e, t) => V.height(e, t) : void 0,
        t?.cityLod,
      )),
        (Z.builderFill.lod = [n.vertexCount, n.indexCount]));
      let r = n.build(),
        i = new dg(r, 400).view(r, !1);
      if ((Jg(r), Rt)) {
        let e = $e.findIndex((e) => e.mesh === Rt);
        (e >= 0 && $e.splice(e, 1),
          Rt.geometry.dispose(),
          (Rt.geometry = i.geometry));
      } else
        ((Rt = new M(i.geometry, Gm(zt, `lod`))),
          (Rt.frustumCulled = !1),
          (Rt.name = `env-city-lod`),
          B.scene.add(Rt));
      $e.push({ view: i, mesh: Rt });
    },
    Ut = (e, t, n) => {
      for (let r of e) {
        let e = r.view.update(t.test, t.testDetail);
        ((r.mesh.visible = e > 0), (n[r.mesh.name] = r.view.tris));
      }
    },
    Wt = (t, n) => {
      (Rf(k, O),
        Rf(A, Lf[t]),
        (N = +(n <= 0)),
        (P = Math.max(0.001, n)),
        n <= 0 && Rf(O, A),
        t !== D && ((D = t), e.events.emit(`weather:changed`, { weather: t })));
    },
    Gt = (t) => {
      if ((e.events.emit(`time:hour`, { hour: t }), v || (--ee, ee > 0)))
        return;
      let n = D;
      if (!cp(n, b)) return;
      let r = lp(n, t, b);
      (Wt(r, 60 + b() * 70), (ee = up(r, b)));
    },
    Kt = (t) => {
      try {
        e.audio.play(`thunder`, { volume: t, ui: !0, rate: 0.85 + b() * 0.3 });
      } catch {}
    },
    qt = () => {
      let e = Math.floor(h),
        t = Math.floor((h - e) * 60);
      return `${e < 10 ? `0` : ``}${e}:${t < 10 ? `0` : ``}${t}`;
    },
    Jt = 0,
    Yt = async (t) => {
      let n = ++Jt;
      if (((he &&= (e.renderer.setPostFx(null), null)), t))
        try {
          let r = await jh(e.renderer.gl, e.scene, e.camera, t);
          if (n !== Jt) {
            r.fx.dispose();
            return;
          }
          ((he = r), e.renderer.setPostFx(r.fx), (Dt = 3));
        } catch (e) {
          n === Jt &&
            console.warn(`[environment] post-processing unavailable`, e);
        }
    },
    Xt = () => {
      let t = e.quality,
        n = t.bloom && d.get(`bloom`) !== `0`;
      if (d.get(`postfx`) === `0` || (!n && !t.postFx)) return Yt(null);
      let r = Math.min(window.devicePixelRatio || 1, t.maxPixelRatio),
        i = t.postFx && t.antialias && r < 1.5 && d.get(`smaa`) !== `0`;
      return Yt({
        bloom: n,
        smaa: i,
        smaaPreset: t.level === `ultra` ? `medium` : `low`,
        vignette: t.postFx,
        aoSamples:
          d.get(`ao`) === `0`
            ? 0
            : t.level === `ultra`
              ? 12
              : t.level === `high`
                ? 8
                : 0,
        bloomLevels: t.level === `ultra` ? 4 : t.level === `high` ? 3 : 2,
        frameFormat: d.get(`rtfmt`) === `16f` ? `16f` : `r11`,
      });
    },
    Zt = () => {
      let t = e.quality;
      S.castShadow = t.shadows;
      let n = t.level === `ultra` ? 90 : t.level === `high` ? 70 : 55,
        r = S.shadow.camera;
      ((r.left = -n),
        (r.right = n),
        (r.top = n),
        (r.bottom = -n),
        (r.near = 1),
        (r.far = 1500),
        r.updateProjectionMatrix(),
        S.shadow.mapSize.x !== t.shadowMapSize &&
          (S.shadow.mapSize.set(t.shadowMapSize, t.shadowMapSize),
          S.shadow.map?.dispose(),
          (S.shadow.map = null)),
        (S.shadow.bias = -35e-5),
        (S.shadow.normalBias = 0.045),
        (S.shadow.radius =
          t.level === `ultra` ? 2.6 : t.level === `high` ? 2.2 : 1.6));
    },
    Qt = (t) => {
      let n = S.shadow.camera.right,
        r = e.player?.position ?? t.position;
      (t.getWorldDirection(Mt),
        (Mt.y = 0),
        Mt.lengthSq() < 1e-6 && Mt.set(0, 0, -1),
        Mt.normalize(),
        It.set(r.x + Mt.x * n * 0.35, r.y, r.z + Mt.z * n * 0.35));
      let i = x.lightDir;
      (Ft.crossVectors(Lt, i),
        Ft.lengthSq() < 1e-6 && Ft.set(1, 0, 0),
        Ft.normalize(),
        Q.crossVectors(i, Ft).normalize());
      let a = (2 * n) / S.shadow.mapSize.x,
        o = It.dot(Ft),
        s = It.dot(Q);
      (It.addScaledVector(Ft, Math.round(o / a) * a - o),
        It.addScaledVector(Q, Math.round(s / a) * a - s),
        S.target.position.copy(It),
        S.position.copy(It).addScaledVector(i, Kg),
        S.target.updateMatrixWorld(),
        S.updateMatrixWorld());
      let c = S.shadow.camera,
        l = Ge(i.y, 0.02, 1),
        u = Math.sqrt(1 - l * l),
        d = Math.max(0, It.y - e.plan.groundHeight(It.x, It.z)),
        f = n * 2.2 * u + 560 * l,
        p = n * 1.6 * u + (40 + d) * l + 10,
        m = Math.max(1, Kg - f),
        h = Kg + p;
      (Math.abs(c.near - m) > 2 || Math.abs(c.far - h) > 2) &&
        ((c.near = m), (c.far = h), c.updateProjectionMatrix());
    },
    $t = null,
    en = null,
    tn = !1,
    nn = null,
    rn = () =>
      e.quality.level !== `low` &&
      d.get(`envmap`) !== `0` &&
      (nn ??= kh(e.renderer.gl).half),
    an = (t = !0) => {
      if (!be) return;
      if (!rn()) {
        (e.scene.environment &&
          ((e.scene.environment = null),
          (B.scene.environment = null),
          Se?.dispose(),
          (Se = null),
          $t?.dispose(),
          ($t = null)),
          (je = h));
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
          Se?.dispose(),
          (Se = null),
          (tn = !1),
          ($t = new z(n, { type: L, generateMipmaps: !1 })),
          (en = new o(0.1, 100, $t)),
          !Ah(e.renderer.gl, [$t]))
        )
          throw Error(`env cube target is not renderable`);
        if (!Se) {
          let e = be;
          (e._setSize &&
            e._allocateTargets &&
            (e._setSize(n), (Se = e._allocateTargets())),
            (tn = !1));
        }
        if (!tn) {
          tn = !0;
          let e = be._ggxMaterial;
          e?.defines &&
            `GGX_SAMPLES` in e.defines &&
            e.defines.GGX_SAMPLES !== 16 &&
            ((e.defines.GGX_SAMPLES = 16), (e.needsUpdate = !0));
        }
        if (!t && Se) {
          ((e.scene.environment = Se.texture),
            (B.scene.environment = Se.texture),
            (je = -99));
          return;
        }
        en.update(e.renderer.gl, Te);
        let r = be.fromCubemap($t.texture, Se);
        ((Se = r),
          (e.scene.environment = r.texture),
          (B.scene.environment = r.texture));
      } catch (t) {
        (console.warn(`[environment] env map failed`, t),
          (be = null),
          $t?.dispose(),
          ($t = null),
          (e.scene.environment = null),
          (B.scene.environment = null));
      }
      ((je = h),
        (Me = O.cloud * 3 + O.overcast * 5 + O.mist * 7 + O.storm * 11),
        (Z.envMs = performance.now() - n));
    },
    on = (t) => {
      x.compute(h, O);
      let n = ce ? ce.flash : 0;
      (S.color.copy(x.lightColor), (S.intensity = x.lightIntensity));
      let r = e.quality.level,
        i = x.moonLit ? (r === `ultra` ? 0.25 : 9) : 0.02,
        a = S.castShadow && x.shadowStrength > i && x.lightIntensity > 0.01;
      ((S.shadow.intensity = a
        ? x.shadowStrength * G(i, i + 0.08, x.shadowStrength)
        : 0),
        (S.shadow.autoUpdate = !1));
      let o =
          r === `medium` || (r === `high` && Ie < 7)
            ? 1 / 30
            : r === `ultra`
              ? 1 / 60
              : 0,
        s = performance.now() / 1e3;
      if (
        ((Fe = a && (!o || s + 1e-6 >= Pe)),
        S.castShadow && !S.shadow.map && (Fe = !0),
        Fe && o)
      ) {
        let e = Math.max(0, s - Pe);
        Pe = s + o - (e % o);
      }
      S.shadow.needsUpdate = Fe;
      let c = !!Se;
      (C.color.copy(x.hemiSky),
        C.groundColor.copy(x.hemiGround),
        (C.intensity = x.hemiIntensity * (c ? 0.6 : 0.9) + n * 2.2),
        n > 0 && C.color.lerp(Pt.setRGB(0.75, 0.8, 1), Math.min(1, n)),
        B.sun.color.copy(S.color),
        (B.sun.intensity = S.intensity),
        B.sun.position.copy(x.lightDir).multiplyScalar(1e3),
        B.hemi.color.copy(C.color),
        B.hemi.groundColor.copy(C.groundColor),
        (B.hemi.intensity = C.intensity),
        (e.scene.environmentIntensity = x.envIntensity),
        (B.scene.environmentIntensity = x.envIntensity),
        (q.uNight.value = x.night),
        q.uSunDir.value.copy(x.lightDir),
        (q.uWet.value = F),
        se.uSkySun.value.copy(x.sunDir),
        se.uMoonDir.value.copy(x.moonDir),
        se.uZenith.value.copy(x.zenith),
        se.uHorizon.value.copy(x.horizon),
        se.uSunset.value.copy(x.sunset),
        se.uSunGlow.value.copy(x.sunGlow),
        se.uSunDisk.value.copy(x.sunDisk),
        se.uMoonCol.value.copy(x.moonCol),
        se.uCloudLit.value.copy(x.cloudLit),
        se.uCloudAmb.value.copy(x.cloudAmb),
        (se.uCloudCover.value = O.cloud),
        (se.uShafts.value = Ge(O.rain * 0.7 + O.storm * 0.5 - 0.15, 0, 1)),
        (se.uStars.value = x.stars),
        (se.uFlash.value = n),
        ce && se.uFlashDir.value.copy(ce.dir),
        (oe += t * (0.004 + O.wind * 0.012)),
        se.uWindOff.value.set(oe, oe * 0.35),
        (se.uSkyTime.value = e.time.real % 1e3),
        se.uGround.value.copy(x.hemiGround).multiplyScalar(0.3),
        me &&
          (me.uLightDir.value.copy(x.lightDir),
          me.uLightCol.value
            .copy(x.lightColor)
            .multiplyScalar(x.lightIntensity * (0.25 + 0.75 * O.sunOcc)),
          me.uAmbient.value
            .copy(x.hemiSky)
            .lerp(x.hemiGround, 0.35)
            .multiplyScalar(x.hemiIntensity * 0.5),
          (me.uWTime.value = e.time.real % 3600),
          (me.uWNight.value = x.night),
          (me.uWRain.value = O.rain),
          (me.uCloudShade.value = O.overcast),
          me.uDeep.value
            .setRGB(0.028, 0.042, 0.034)
            .lerp(Pt.setRGB(0.05, 0.043, 0.032), O.rain * 0.8)));
      let l = x.exposure;
      if (((e.renderer.gl.toneMappingExposure = l), he)) {
        let t = he.grade;
        ((t.u(`uExposure`).value = l * (1 + n * 0.25)),
          (t.u(`uGTime`).value = e.time.real % 100));
        let r = x.sunEl,
          i = G(-2, 3, r) * (1 - G(9, 18, r)) * (1 - O.overcast),
          a = x.night,
          o = h < 12 ? G(-3, 4, r) * (1 - G(14, 30, r)) : 0,
          s = h >= 12 ? G(-9, -1, r) * (1 - G(-1, 6, r)) : 0,
          c = G(25, 55, r) * (1 - O.overcast),
          u = Math.max(O.overcast, O.rain),
          d = t.u(`uLift`).value,
          f = t.u(`uGain`).value,
          p = 1 - a,
          m = x.golden * p;
        (d.set(
          0.004 * i + 0.002 * s + 0.0025 * a + 0.012 * m,
          (0.004 + 0.004 * o) * p + 0.002 * a + 0.008 * m,
          (0.01 + 0.01 * O.rain + 0.008 * o + 0.01 * s) * p + 0.0025 * a,
        ),
          f.set(
            1 + 0.05 * i + 0.03 * a + 0.012 * c - 0.01 * o,
            1 - 0.005 * i - 0.008 * a + 0.004 * c,
            1 - 0.07 * i - 0.02 * a - 0.01 * c + 0.02 * o,
          ));
        let g = t.u(`uShadowTint`).value,
          _ = t.u(`uHighTint`).value;
        if (
          (g.set(
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
            (1 - 0.2 * O.overcast * (1 - a)) *
            (1 - 0.2 * O.mist)),
          (t.u(`uContrast`).value =
            1.07 +
            0.03 * a +
            0.02 * c -
            0.03 * o -
            0.07 * O.mist -
            0.02 * O.rain -
            0.06 * m),
          (t.u(`uToe`).value = G(0.3, 0.9, a)),
          he.ao &&
            (t.u(`uAOAmount`).value = (0.85 + 0.15 * u) * (1 - 0.35 * a)),
          he.ao && jt && (t.u(`uAODebug`).value = 1),
          he.bloom)
        ) {
          let e = x.bloomNight,
            t = Math.max(e, Math.min(1, n * 2));
          ((he.bloomActive = t > Wg || Dt > 0),
            Dt > 0 && Dt--,
            (he.bloom.intensity = he.bloomActive
              ? (0.4 + 0.3 * e) * G(Wg, 0.6, t)
              : 0),
            (he.bloom.luminanceMaterial.threshold = 1.45 - 0.15 * e));
        }
      }
      ge && _e();
      let u = e.camera.far,
        d = 90 + 170 * Ge(O.overcast * 0.4 + O.rain * 0.8 + O.mist * 0.9, 0, 1);
      ((w.near = pp(x.hazeScale * Ge(u / 900, 0.55, 1.25), d)),
        (w.far = u),
        (E.near = w.near),
        (B.scene.fog = e.scene.fog ? E : null),
        nm.uTreeFade.value.set(u * 0.66, u * 0.82),
        (nm.uWindAmt.value = 0.25 + O.wind * 1.1),
        (Wm.uLitFrac.value =
          0.55 -
          0.1 * Ge(h >= 0 && h < 5 ? 1 - Math.abs(h - 2.5) / 2.5 : 0, 0, 1)));
    },
    sn = (e) => {
      e.getWorldDirection(Nt);
      let t = Math.hypot(Nt.x, Nt.z);
      t < 0.001 && (Nt.set(0, 0, -1), (t = 1));
      let n = 1 / Math.hypot(1, 0.03);
      (x.skyBase((Nt.x / t) * n, 0.03 * n, (Nt.z / t) * n, T, 0.3),
        x.mist > 0 && T.lerp(x.mistColor, x.mist * 0.6));
      let r = ce ? ce.flash : 0;
      (r > 0 && T.lerp(Pt.setRGB(0.6, 0.64, 0.8), Math.min(0.5, r * 0.4)),
        S.castShadow && Fe && Qt(e),
        H?.preRender(e, Ne));
      let i = performance.now(),
        a = e;
      if (
        ((Wm.uLodNear.value = a.far * 0.9),
        (Qh.uSplit.value = a.far * 0.85),
        et.set(e),
        lt &&
          X &&
          (pt.setFromMatrixPosition(a.matrixWorld),
          (lt.visible = x.night > Gg && X.update(mt) > 0)),
        bt && St)
      ) {
        let e = x.night > Gg && Ct.distanceToPoint(a.position) < a.far * 0.85;
        bt.visible = e && St.update(et.test) > 0;
      }
      if (
        ((et.detailDist = Math.min(a.far * 0.8, 380)),
        rt.stale(e, at(Y, ot)) &&
          (rt.set(e), (rt.detailDist = et.detailDist), Ut(Y, rt, Z.drawn.main)),
        ht && (ht.visible = vt(et)),
        Be.length)
      ) {
        ((et.maxDist = a.far * 0.84), We.setFromMatrixPosition(a.matrixWorld));
        let e = 0,
          t = 0;
        for (let n = 0; n < Be.length; n++) {
          let r = He[n],
            i = Be[n].update(r ? qe : et.test);
          if (((ze[n].visible = i > 0), (e += i), r)) {
            let e = r.update(Ke);
            ((Ve[n].visible = e > 0), (t += e));
          }
        }
        if (((Z.drawn.trees = e), (Z.drawn.treesNear = t), Ye && Je)) {
          let e = Ye.update(Xe);
          ((Je.visible = e > 0), (Z.drawn.shrubs = e));
        }
      }
      Z.cullMs = Z.cullMs * 0.9 + (performance.now() - i) * 0.1;
    },
    cn = (t) => {
      let n = performance.now();
      if ((tt.set(t), yt && xt)) {
        let n = x.night > Gg;
        ((yt.visible = n && xt.update(tt.test) > 0),
          n &&
            (e.renderer.gl.getDrawingBufferSize(wt),
            (Qh.uPx.value =
              (2 * Math.tan(j.degToRad(t.fov) / 2)) /
              Math.max(1, wt.y * (t.zoom || 1)))));
      }
      (it.stale(t, at($e, st)) && Ut($e, it.set(t), Z.drawn.far),
        gt && (gt.visible = vt(tt)),
        (Z.cullMs += (performance.now() - n) * 0.1));
    },
    ln = (t) => {
      if (!ze.length || !Ze.length) return;
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
      let u = c[0].m,
        d = c[0].c;
      for (let e of ct) s(e.x, e.z, 4.5, 13) && (e.c.disabled = !0);
      let f = new Ce(),
        p = new U(),
        m = new U(),
        h = 0;
      for (let n = 1; n + 1 < t.length && u.length < Qe; n += 3) {
        let r = t[n - 1],
          i = t[n + 1],
          a = i.x - r.x,
          o = i.z - r.z,
          c = Math.hypot(a, o) || 1,
          l = Qg(n * 1.7 + 0.3),
          g = Qg(n * 3.1 + 7.7),
          _ = Qg(n * 5.3 + 2.1),
          v = (n / 3) % 2 < 1 ? 1 : -1,
          y = 2.4 + l * 4.6,
          b = t[n].x + (-o / c) * y * v,
          x = t[n].z + (a / c) * y * v;
        if (s(b, x, 2.2, 9)) continue;
        let S = e.plan.groundHeight(b, x),
          C = 0.2 + g * 0.22;
        (f.setFromAxisAngle(Lt, _ * Math.PI * 2),
          m.set(b, S - 0.35 - C * 1.2, x),
          p.set(C * (1 + l * 0.3), C * (0.8 + _ * 0.35), C),
          u.push(new De().compose(m, f, p)),
          d.push(am(_, g, l).multiplyScalar(0.85)),
          h++);
      }
      if (Je && J.m.length) {
        let e = [],
          t = [];
        for (let n = 0; n < J.m.length; n++) {
          let r = J.m[n].elements;
          s(r[12], r[14], 2.6, 11) || (e.push(J.m[n]), t.push(J.c[n]));
        }
        Ye = new pg(Je, e, t, 100, 2.5);
      }
      for (let e = 0; e < ze.length; e++)
        ((Be[e] = new pg(ze[e], c[e].m, c[e].c, 100, e === 1 ? 10 : 7)),
          Ve[e] && (He[e] = new pg(Ve[e], Be[e], null, 100, 0)));
      ((Z.trailTreesRemoved = l), (Z.trailShrubs = h));
    },
    un = () => {
      let t = gp(e.scene),
        n = e.renderer.gl,
        r = B.rig.sync(t, n),
        i = Ee.sync(t, n);
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
      t && B.rig.sig && !hp(t, B.rig.sig) && (un() || (ke = 10));
    },
    pn = (t) => {
      let n = V;
      fe = new mh(
        (t, r) => {
          let a = -1450 + 2400 * t,
            o = (i + n.westBank(a)) / 2 + Math.sin(a * 0.004) * 25;
          return r.set(o, e.plan.waterLevel, a);
        },
        2400,
        5.5,
      );
      let r = ph();
      for (let [n, i] of [
        [e.scene, `boat`],
        [B.scene, `boat-far`],
      ]) {
        let e = Gm(t, i),
          a = new M(r, e);
        ((a.name = `env-boat`), n.add(a), de.push(a));
      }
    },
    mn = () => {
      (e.events.on(`quality:changed`, () => {
        (Zt(), H.allocate(e.quality.rainParticles), Xt(), (je = -99));
      }),
        e.events.on(`player:spawned`, () => {
          try {
            (K.rain?.stop(),
              K.wind?.stop(),
              K.river?.stop(),
              (K = {
                rain: e.audio.loop(`rain`, { volume: 0, ui: !0 }),
                wind: e.audio.loop(`wind`, { volume: 0, ui: !0 }),
                river: l
                  ? e.audio.loop(`ambient_river`, {
                      volume: 0,
                      x: i,
                      y: 0,
                      z: 0,
                    })
                  : null,
              }));
          } catch {
            K = { rain: null, wind: null, river: null };
          }
        }));
    },
    hn = {
      name: `environment`,
      get hour() {
        return h;
      },
      setHour(t) {
        h = ((t % 24) + 24) % 24;
        let n = Math.floor(h);
        (n !== ne && ((ne = n), e.events.emit(`time:hour`, { hour: n })),
          (je = -99));
      },
      timeScale: g !== null && isFinite(Number(g)) ? Number(g) : 1,
      get weather() {
        return D;
      },
      setWeather(e, t = 45) {
        Ug.includes(e) && (Wt(e, t), (ee = 2 + b() * 2));
      },
      get rain() {
        return O.rain;
      },
      get night() {
        return q.uNight.value;
      },
      sun: S,
      fogColor: T,
      lightning() {
        ce &&
          ce.strike(
            e.camera.position,
            (e, t) => V.height(e, t),
            b,
            e.time.real,
            !0,
          );
      },
      get wet() {
        return F;
      },
      get sunDirection() {
        return x.sunDir;
      },
      get flash() {
        return ce ? ce.flash : 0;
      },
      get wind() {
        return O.wind;
      },
      timeString: qt,
      addFar(e) {
        B.scene.add(e);
        let t = e.userData?.landmark;
        typeof t == `string` && !Bt.has(t) && (Bt.add(t), Rt && Ht());
      },
      removeFar(e) {
        B.scene.remove(e);
      },
      terrainHeight(t, n) {
        return V ? V.height(t, n) : e.plan.groundHeight(t, n);
      },
      spawnPlane() {
        le.begin(b);
      },
      get farLayer() {
        return B;
      },
      get gloom() {
        return x.dim;
      },
      setSheltered(e) {
        ((Et = !!e), H && (H.sheltered = Et));
      },
      holdLook(e) {
        ge = !!e;
      },
      addRainOccluder(e, t) {
        if (H) return H.addOccluder(e, t);
        let n = -(Ot.length + 1);
        return (Ot.push({ id: n, rect: e, y: t, real: 0 }), n);
      },
      removeRainOccluder(e) {
        if (e < 0) {
          let t = Ot.find((t) => t.id === e);
          t && (t.real && H && H.removeOccluder(t.real), (t.real = -1));
          return;
        }
        H?.removeOccluder(e);
      },
      isSheltered(t, n, r) {
        if (Et) return !0;
        let i = r ?? e.plan.groundHeight(t, n) + 0.5;
        if (H) return H.covered(t, n, i);
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
        atmos: x,
        wCur: O,
        far: B,
        stats: Z,
        get gates() {
          return { main: rt.rebuilds, far: it.rebuilds };
        },
        get post() {
          return he;
        },
        get envRT() {
          return Se;
        },
        regenEnv: () => an(),
        get pmrem() {
          return be;
        },
        get cubeCam() {
          return en;
        },
        get cubeRT() {
          return $t;
        },
        envScene: Te,
        setPost(e) {
          return Yt(e);
        },
      },
      async init() {
        let n = performance.now(),
          r = e.quality;
        (fp(),
          (e.scene.background = null),
          (e.scene.fog = w),
          (B.scene.fog = E),
          e.scene.add(S, S.target, C),
          Zt(),
          B.install(e.scene, e.camera),
          (B.onPre = sn),
          (B.onFarCamera = cn),
          (B.enabled = d.get(`envfar`) !== `0`));
        let o = performance.now(),
          s = (e) => {
            let t = performance.now();
            ((Z.phaseMs[e] = (Z.phaseMs[e] ?? 0) + (t - o)), (o = t));
          },
          f = async (t) => {
            (s(t), await e.yieldFrame(), (o = performance.now()));
          },
          p = r.level === `low`,
          m = Tp(se, !1, p, t?.sky);
        (B.scene.add(Ep(m)),
          Te.add(Ep(Tp(se, !0, !1, t?.sky))),
          (V = new Hp(e.plan, t?.terrain)));
        let h = Xp(V, r.level === `low`, l ? void 0 : []);
        await f(`terrain`);
        let g = Xp(V, r.level === `low`, [], 2.1);
        ((Z.terrainTris = h.tris), (Z.terrainFarTris = g.tris));
        let _ = new dg(h.geometry, 320).view(h.geometry, !0, {
            area: dt(),
            dist: ut * r.drawDistance,
            detailDist: 0,
          }),
          v = new dg(g.geometry, 400).view(g.geometry, !1);
        (ft(`env-terrain`, _), ft(`env-terrain-far`, v));
        let y = new M(_.geometry, Zp(!1, p));
        ((y.receiveShadow = !0),
          (y.frustumCulled = !1),
          (y.name = `env-terrain`),
          (Ae = y.material));
        let T = new M(v.geometry, Zp(!0, p));
        if (
          ((T.frustumCulled = !1),
          (T.name = `env-terrain-far`),
          Y.push({ view: _, mesh: y }),
          $e.push({ view: v, mesh: T }),
          e.scene.add(y),
          B.scene.add(T),
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
                  Fp - 4,
                  t + 4,
                  `wall`,
                );
            },
            r = (e, t, r, i) => {
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
          (r(o, s, 30, (e) => [V.westBank(e) + 5, e]),
            r(i - 4, c, 30, (e) => [e, V.northBank(e) + 5]),
            r(o, V.northBank(i) + 5, 30, (e) => [i - 8, e]),
            n(V.westBank(o) + 5, o, i - 8, o),
            n(V.westBank(s) + 5, s, i, s),
            n(c, a, c, V.northBank(c) + 5));
        }
        me = sm(se, om(256));
        let k = e.plan.dataset.water.levels,
          A = fm(e.plan.waterLevel, u, l ? null : V.water, l ? void 0 : k);
        if (
          ((ht = new M(A, um(me, !1, u, t?.water))),
          (ht.frustumCulled = !1),
          (ht.name = `env-water`),
          (gt = new M(A, um(me, !0, u, t?.water))),
          (gt.frustumCulled = !1),
          (gt.name = `env-water-far`),
          e.scene.add(ht),
          B.scene.add(gt),
          l)
        ) {
          let t = 5200,
            n = e.plan.waterLevel,
            r = Fp - 2,
            o = n + 2;
          for (let e = -5200; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, V.westBank(e + (300 * n) / 6));
            _t.push(new xe(new U(t - 30, r, e), new U(i + 1, o, e + 300)));
          }
          for (let e = i - 320; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, V.northBank(e + (300 * n) / 6));
            _t.push(new xe(new U(e, r, t - 30), new U(e + 300, o, a + 1)));
          }
        } else {
          let t = e.plan.waterLevel;
          for (let e of dm(V.water, k)) {
            let n = Number.isFinite(e.y) ? e.y : t;
            _t.push(
              new xe(
                new U(e.x0, Math.min(Fp, n - 1.7) - 2, e.z0),
                new U(e.x1, n + 2, e.z1),
              ),
            );
          }
        }
        await f(`water`);
        let j = Hm();
        (d.get(`keepcanvas`) !== `1` &&
          (j.onUpdate = () => {
            j.onUpdate = null;
            let e = j.image;
            e &&
              typeof e.getContext == `function` &&
              ((e.width = 1), (e.height = 1));
          }),
          (zt = j));
        let P = new Em(Yg[0], Yg[1]),
          ee = new ah(),
          te = P.triangleCount,
          F = l
            ? Jm(P, V, e.plan, e.statics, ee)
            : {
                trees: [],
                blocked: () => !1,
                gates: [],
                wharf: { x: 0, z: 0 },
                lampCount: 0,
                paths: [],
              },
          I = P.triangleCount;
        await f(`riverside`);
        let L = l
          ? th(P, V, e.plan)
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
        let ne = P.triangleCount;
        await f(`farbank`);
        let re = performance.now(),
          R = l
            ? await Yh(P, V, e.plan, e.statics, ee, () => f(`edges`))
            : {
                lodBoxes: [],
                lightRoads: [],
                lightNodes: [],
                buildings: 0,
                blocked: () => !1,
                bounds: new xe(),
              };
        Z.edgesMs = performance.now() - re;
        let z = P.triangleCount;
        ((Z.hillLights = l ? ih(P, V) : 0),
          !l && t?.props && (t.props(P, V), t.statics?.()),
          (Z.propsBreakdown = {
            riverside: I - te,
            farbank: ne - I,
            edges: z - ne,
            hillLights: P.triangleCount - z,
          }),
          (Z.edgeBuildings = R.buildings));
        let ie = R.blocked;
        Vt = R.lodBoxes;
        let ae = dt(),
          oe = (e, t = 0) => ({ area: ae, dist: e, detailDist: t });
        if (ee.count > 0) {
          lt = ee.build();
          let t = lt.geometry;
          ((X = new dg(t, 200).view(t, !0, oe(420))),
            ft(`env-light-pools`, X),
            (lt.geometry = X.geometry),
            (lt.frustumCulled = !1),
            e.scene.add(lt));
        }
        Z.buildings = L.buildings;
        let de = e.plan.bounds.maxZ + 190;
        if (
          ((kt = F.paths
            .map((e) => ({
              ...e,
              points: e.points.map((e) => ({ x: e.x, z: Math.min(e.z, de) })),
            }))
            .filter(
              (e) =>
                Math.hypot(
                  e.points[1].x - e.points[0].x,
                  e.points[1].z - e.points[0].z,
                ) > 11,
            )),
          Wm.uWheelCenter.value.copy(L.wheelCenter),
          l && nh(P, L.wheelCenter),
          (Z.propsTris = P.triangleCount),
          (Z.builderFill.props = [P.vertexCount, P.indexCount]),
          await f(`edges`),
          P.triangleCount > 0)
        ) {
          let t = P.build(),
            n = Zg(t, P.tierTable(), L.wheelCenter);
          for (let e of n.tiles) e.detail && (Z.detailTris += e.count / 3);
          await f(`propsTiles`);
          let r = n.view(t, !0, oe(ut * e.quality.drawDistance, 380)),
            i = n.view(t, !1);
          (ft(`env-props`, r), ft(`env-props-far`, i), Jg(t));
          let a = new M(r.geometry, Gm(j, `main`));
          ((a.frustumCulled = !1),
            (a.receiveShadow = l),
            l || (a.userData.noWarm = !0),
            (a.name = `env-props`));
          let o = new M(i.geometry, Gm(j, `far`));
          ((o.frustumCulled = !1),
            (o.name = `env-props-far`),
            Y.push({ view: r, mesh: a }),
            $e.push({ view: i, mesh: o }),
            e.scene.add(a),
            B.scene.add(o));
        }
        Ht();
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
          for (let e of R.lightRoads) t.push(e);
          for (let e of R.lightNodes) n.push(e);
          let i =
              Number(e.params.get(`lightsthin`) ?? 0) ||
              (r.level === `low` ? 2 : 1),
            a = ig(t, n, L.parkLamps, {
              laneWidth: e.plan.laneWidth,
              side: e.plan.side,
              thin: i,
            }),
            o = e.plan.bounds,
            s = (e, t) => {
              let n = e.attributes.aP;
              return new dg(
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
            (St = s(a.main.geometry, oe(ut * r.drawDistance))),
            ft(`env-city-lights`, xt),
            ft(`env-city-lights-main`, St),
            Jg(a.mesh.geometry),
            Jg(a.main.geometry),
            (yt = a.mesh),
            (yt.geometry = xt.geometry),
            (yt.visible = !1),
            B.scene.add(yt),
            (bt = a.main),
            (bt.geometry = St.geometry),
            (bt.visible = !1),
            e.scene.add(bt),
            Ct.copy(R.bounds));
          for (let e of L.parkLamps) Ct.expandByPoint(Mt.set(e.x, e.y, e.z));
          Z.cityLights = a.counts;
        }
        (await f(`lod+lights`),
          t?.ready?.({
            scene: e.scene,
            farScene: B.scene,
            propsMaterial: (e) => Gm(j, e),
            atmos: x,
            weather: O,
            field: V,
          }));
        let fe = l
            ? im(V, r.propDensity, (e, t) => F.blocked(e, t) || ie(e, t))
            : { matrices: [], colors: [], species: [], colliders: [] },
          ge = F.trees,
          _e = fe.matrices.length + ge.length,
          ve = Array.from({ length: 3 }, () => ({ m: [], c: [] }));
        for (let e = 0; e < fe.matrices.length; e++)
          (ve[fe.species[e]].m.push(fe.matrices[e]),
            ve[fe.species[e]].c.push(fe.colors[e]));
        let Se = ve[0].m,
          Ee = ve[0].c,
          W = new Ce(),
          Oe = new U(),
          ke = new U();
        for (let t of ge) {
          let n = (((t.x * 7.13 + t.z * 3.7) % 1) + 1) % 1;
          (W.setFromAxisAngle(Lt, n * Math.PI * 2),
            ke.set(t.x, t.y - 0.2, t.z),
            Oe.set(t.s, t.s * (0.9 + n * 0.3), t.s),
            Se.push(new De().compose(ke, W, Oe)),
            Ee.push(am(n, 0.5, (n * 3.3) % 1).multiplyScalar(1.1)),
            e.statics.addCircle(
              t.x,
              t.z,
              0.35 * Math.max(0.6, t.s),
              t.y,
              t.y + 4,
              `tree`,
            ));
        }
        let G = tm(),
          je = rm();
        Qe = ve[0].m.length + 400;
        for (let t = 0; t < 3; t++) {
          let n = Math.max(1, t === 0 ? Qe : ve[t].m.length),
            r = new ye(G[t], je, n);
          ((r.name = t === 0 ? `env-trees` : `env-trees-${t}`),
            ze.push(r),
            Be.push(new pg(r, ve[t].m, ve[t].c, 100, t === 1 ? 10 : 7)),
            e.scene.add(r));
        }
        if (!p && l) {
          let t = zg(),
            n = Hg(Cg(e.renderer.gl.capabilities.getMaxAnisotropy()));
          for (let r = 0; r < t.length; r++) {
            let i = Be[r],
              a = Math.max(
                1,
                Math.min(
                  i.count + (r === 0 ? 400 : 0),
                  i.maxWithin(115, ae) + (r === 0 ? 400 : 16),
                ),
              ),
              o = new ye(t[r], n, a);
            ((o.name = `env-trees-near-${r}`),
              Ve.push(o),
              He.push(new pg(o, i, null, 100, 0)),
              e.scene.add(o));
          }
          let i = e.plan.bounds,
            a = (e, t) => F.blocked(e, t) || ie(e, t);
          J = Vg(
            (e, t) => V.height(e, t),
            (e, t, n) => {
              if (V.kind(e, t) !== `land`) return !1;
              let r = V.outside(e, t);
              if (r < 12 || r > 330) return !1;
              let i = n - c;
              return i < 2.5 || (V.edgeUrban(e, t) > 0.3 && i < 9)
                ? !1
                : !a(e, t);
            },
            {
              x0: i.minX - 340,
              x1: i.maxX + 340,
              z0: i.minZ - 340,
              z1: i.maxZ + 340,
            },
            7.5 / Math.sqrt(Math.max(0.3, r.propDensity)),
          );
          let o = new pg(null, J.m, J.c, 100, 2.5);
          ((Je = new ye(
            Bg(),
            n,
            Math.max(1, Math.min(o.count, o.maxWithin(95, ae) + 16)),
          )),
            (Je.name = `env-shrubs`),
            (Ye = new pg(Je, o, null, 100, 0)),
            e.scene.add(Je),
            (Z.shrubs = J.m.length));
        }
        ((Ze = ve),
          (ct = fe.colliders.map((t) => ({
            x: t.x,
            z: t.z,
            c: e.statics.addCircle(t.x, t.z, 0.5, t.y - 1, t.y + 6, `tree`),
          }))),
          (Z.trees = _e),
          await f(`trees`));
        let Me = dh();
        for (let [t, n] of l
          ? [
              [e.scene, `plane`],
              [B.scene, `plane-far`],
            ]
          : []) {
          let e = Gm(j, n),
            r = new M(Me, e);
          ((r.visible = !1),
            (r.rotation.order = `YXZ`),
            (r.name = `env-plane`),
            t.add(r),
            ue.push(r));
        }
        if (d.get(`plane`) === `1`) {
          le.begin(b);
          for (let e = 0; e < 660; e++) le.update(1 / 30, b);
        } else le.cooldown = 35 + b() * 50;
        (l &&
          (pn(j),
          (pe = new _h(
            { x: (i + V.westBank(-250)) / 2 - 10, z: -250 },
            60,
            430,
          )),
          e.scene.add(pe.mesh)),
          (H = new ch(r.rainParticles)),
          (H.sheltered = Et));
        for (let e of Ot) e.real === 0 && (e.real = H.addOccluder(e.rect, e.y));
        if (l) for (let e of qg) H.addOccluder(e.rect, e.y);
        (e.scene.add(H.mesh),
          (ce = new uh()),
          B.scene.add(ce.mesh),
          (await Ue(
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
          be = new we(e.renderer.gl);
        } catch {
          be = null;
        }
        (N >= 1 && Rf(O, Lf[D]), on(0), an(!1), on(0), mn());
        for (let e of [
          yt,
          bt,
          lt,
          H.mesh,
          ce.mesh,
          pe?.mesh,
          ...ue,
          ...ze,
          ...Ve,
          Je,
        ])
          e && (e.visible = !0);
        (he?.bloom && (he.bloomActive = !0),
          un(),
          s(`rest`),
          (Z.initMs = performance.now() - n),
          console.info(
            `[init] environment ${Z.initMs.toFixed(0)}ms · terrain ${Z.terrainTris} tris · props ${Z.propsTris} tris · ${Z.buildings} far buildings · ${Z.trees} trees · gates ${F.gates.length} · lamps ${F.lampCount}`,
          ));
      },
      prewarm() {
        try {
          (un(), rn() && be && an());
        } catch (e) {
          console.warn(`[environment] light rig sync failed`, e);
        }
        let e = [],
          t = (t) => {
            if (!t) return;
            let n = t,
              i;
            if (n.isInstancedMesh) {
              let e = new ye(n.geometry, n.material, 1);
              (n.instanceColor &&
                (e.instanceColor = new r(new Float32Array(3).fill(1), 3)),
                (i = e));
            } else i = new M(t.geometry, t.material);
            ((i.castShadow = t.castShadow),
              (i.receiveShadow = t.receiveShadow),
              (i.renderOrder = t.renderOrder),
              (i.frustumCulled = !1),
              (i.name = t.name + `-prewarm`),
              e.push(i));
          };
        (t(H?.mesh), t(lt), t(bt), t(pe?.mesh));
        for (let e of Ve) t(e);
        return (t(Je), e);
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
          d.get(`envstub`) !== `hide`)
        )
          return;
        let t = new xe(),
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
                    new te(new U(1, 0, 0), -n.minX),
                    new te(new U(-1, 0, 0), n.maxX),
                    new te(new U(0, 0, 1), -n.minZ),
                    new te(new U(0, 0, -1), n.maxZ),
                  ]),
                  (e.renderer.gl.localClippingEnabled = !0))));
        }
      },
      update(n) {
        let r = performance.now();
        ((Ne = n),
          B.ensureInstalled(),
          hn.timeScale !== 0 &&
            ((h += (n * hn.timeScale) / 60),
            h >= 24 && (h -= 24),
            h < 0 && (h += 24)));
        let o = Math.floor(h);
        if ((o !== ne && ((ne = o), Gt(o)), N < 1)) {
          N = Math.min(1, N + n / P);
          let e = N * N * (3 - 2 * N);
          zf(O, k, A, e);
        }
        ((F =
          O.rain > 0.05
            ? Math.min(1, F + n * (0.03 + 0.1 * O.rain))
            : Math.max(0, F - n * (0.0035 + 0.006 * O.sunOcc * (1 - x.dim)))),
          O.rain > 0.4 && (ae = !0),
          ae && O.rain < 0.15 && ((ae = !1), (ie = 150)),
          (ie -= n));
        let s = +(ie > 0 && x.sunEl > 2 && x.sunEl < 42 && O.sunOcc > 0.3);
        if (
          ((R += (s - R) * Math.min(1, n * 0.25)),
          (se.uRainbow.value = R * Ge((O.sunOcc - 0.3) * 2, 0, 1)),
          ce)
        ) {
          let t = O.storm > 0.55 || Tt,
            r = O.storm > 0.1 && O.rain > 0.5;
          if ((t || r) && ((re -= n), re <= 0)) {
            let n = t ? b() < 0.7 : b() < 0.15;
            (ce.strike(
              e.camera.position,
              (e, t) => V.height(e, t),
              b,
              e.time.real,
              n,
            ),
              (re = t ? 3 + b() * (Tt ? 3 : 11) : 25 + b() * 40));
          }
          ce.update(n, e.time.real, Kt);
        }
        let c = e.player?.position;
        if (c && n > 0) {
          if (Re) {
            let e = Math.min(
              60,
              Math.hypot(c.x - Le.x, c.y - Le.y, c.z - Le.z) / n,
            );
            Ie += (e - Ie) * Math.min(1, n * 8);
          }
          (Le.copy(c), (Re = !0));
        }
        if ((on(n), t?.update?.(n), fn(n), H)) {
          let t = x.dim;
          (Pt.copy(x.hemiSky).multiplyScalar(x.hemiIntensity * 0.34),
            (Pt.r += 0.1 * t),
            (Pt.g += 0.08 * t),
            (Pt.b += 0.07 * t));
          let n = ce ? ce.flash : 0;
          ((Pt.r += n * 0.8),
            (Pt.g += n * 0.85),
            (Pt.b += n),
            H.update(
              O.rain,
              e.time.real % 3600,
              O.wind,
              e.player?.position.y ?? 0,
              Pt,
            ));
        }
        let u = l && le.update(n, b);
        for (let e of ue)
          ((e.visible = u),
            u &&
              (e.position.copy(le.pos),
              e.rotation.set(le.pitch, -le.heading, le.roll)));
        if (u) {
          if (!At)
            try {
              At = e.audio.loop(`jet`, {
                volume: 1,
                x: le.pos.x,
                y: le.pos.y,
                z: le.pos.z,
              });
            } catch {
              At = null;
            }
          At &&
            (At.setPosition(le.pos.x, le.pos.y, le.pos.z),
            At.setParam?.(
              `thrust`,
              le.pos.y > 120 ? 0.55 : 0.4 + 0.15 * (le.pos.y / 120),
            ));
        } else if (At) {
          try {
            At.stop();
          } catch {}
          At = null;
        }
        if (
          ((Wm.uWheelAngle.value =
            (Wm.uWheelAngle.value - n * 0.012) % (Math.PI * 2)),
          pe &&
            pe.update(
              n,
              (1 - x.dim) * (O.rain < 0.3) * (O.storm < 0.3),
              e.camera.position,
              e.camera.far * 0.8,
            ),
          fe)
        ) {
          fe.update(n);
          for (let e of de)
            (e.position.copy(fe.pos), (e.rotation.y = -fe.heading));
        }
        if (((Oe -= n), Oe <= 0)) {
          Oe = 0.5;
          let t = O.cloud * 3 + O.overcast * 5 + O.mist * 7 + O.storm * 11,
            n = Math.abs(h - je);
          n > 12 && (n = 24 - n);
          let r = ce ? ce.flash : 0,
            i = e.quality.level === `medium` ? 1 : 0.5;
          rn() && (n > i || Math.abs(t - Me) > 0.3) && r < 0.01 && an();
        }
        if (
          (K.rain && K.rain.setVolume(Math.min(1, O.rain * 1.1)),
          K.wind &&
            K.wind.setVolume(Ge((O.wind - 0.3) * 0.8 + O.storm * 0.3, 0, 0.8)),
          K.river)
        ) {
          let t = e.camera.position,
            n = t.x - i,
            r = t.z - a;
          (n < r
            ? K.river.setPosition(i - 5, e.plan.waterLevel, t.z)
            : K.river.setPosition(t.x, e.plan.waterLevel, a - 5),
            K.river.setVolume(Ge(1 - Math.min(n, r) / 160, 0, 1) * 0.55));
        }
        Z.updateMs = Z.updateMs * 0.95 + (performance.now() - r) * 0.05;
      },
    };
  return hn;
}
