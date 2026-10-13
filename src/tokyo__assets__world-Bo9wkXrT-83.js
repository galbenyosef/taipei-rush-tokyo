// tokyo__assets__world-Bo9wkXrT 83 — math
// Lines 27342-29074 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Kg(e, t) {
  let n = e.plan.dataset.water,
    i = n.westX,
    o = n.northZ,
    c = e.plan.sidewalkHeight,
    u = Number.isFinite(i) && Number.isFinite(o),
    d = { westX: i, northZ: o, banks: u },
    f = e.params,
    m = f.get(`hour`),
    h =
      m !== null && m !== `` && isFinite(Number(m))
        ? ((Number(m) % 24) + 24) % 24
        : 16,
    g = f.get(`timescale`),
    v = f.get(`weather`),
    y = v && Ig.includes(v) ? v : null,
    b = (Date.now() ^ 2654435769) >>> 0 || 1,
    S = () => (
      (b ^= b << 13),
      (b ^= b >>> 17),
      (b ^= b << 5),
      (b >>> 0) / 4294967296
    );
  (e.quality.bloom || e.quality.postFx) &&
    f.get(`postfx`) !== `0` &&
    _h().catch(() => {});
  let C = new ap();
  C.region = t?.atmos ?? null;
  let w = new _(16777215, 3);
  w.name = `env-sun`;
  let T = new L(12571903, 5918792, 1.2);
  T.name = `env-hemi`;
  let E = new p(12109526, 170, e.quality.drawDistance),
    D = E.color,
    O = new p(12109526, 170, 1e7);
  O.color = D;
  let k = y ?? `clear`,
    A = { ...Ff[k] },
    j = { ...A },
    N = { ...A },
    F = 1,
    ee = 1,
    I = 2 + S() * 2,
    R = y === `rain` || y === `storm` ? 0.85 : 0,
    ne = Math.floor(h),
    re = 4,
    z = +(f.get(`rainbow`) === `1`),
    ae = f.get(`rainbow`) === `1` ? 1e9 : 0,
    oe = !1,
    se = 0,
    B = new fp(),
    V = gp(),
    H,
    le,
    ue,
    de = new ah(),
    fe = [],
    pe = [],
    me = null,
    he = null,
    ge,
    _e = null,
    ve = !1,
    xe = () => {
      if (((e.renderer.gl.toneMappingExposure = 1), !_e)) return;
      let t = _e.grade;
      ((t.u(`uExposure`).value = 1),
        t.u(`uLift`).value.set(0, 0.004, 0.01),
        t.u(`uGain`).value.set(1, 1, 1),
        t.u(`uShadowTint`).value.set(1, 1, 1),
        t.u(`uHighTint`).value.set(1, 1, 1),
        (t.u(`uSat`).value = 1.1),
        (t.u(`uContrast`).value = 1.07),
        (t.u(`uToe`).value = 0),
        _e.ao && (t.u(`uAOAmount`).value = 0.85),
        _e.bloom && ((_e.bloomActive = !1), (_e.bloom.intensity = 0)));
    },
    Ce = null,
    Te = null,
    Ee = new l(),
    De = new dp(null, null);
  (Ee.add(De.group), (Ee.fog = new p(0, 1e7, 1e8)));
  let Oe = 0,
    ke = 0,
    Ae = null,
    je = -99,
    Me = -1,
    Ne = { rain: null, wind: null, river: null },
    Pe = 1 / 60,
    Fe = 0,
    Ie = !0,
    Le = 0,
    Re = new U(),
    ze = !1,
    Be = [],
    Ve = [],
    He = [],
    q = [],
    We = new U(),
    Ge = (e) => e.distanceToPoint(We) < 115 && et.test(e),
    qe = (e) => et.test(e) && e.distanceToPoint(We) >= 115,
    Je = null,
    Ye = null,
    J = { m: [], c: [] },
    Xe = (e) => e.distanceToPoint(We) < 95 && et.test(e),
    Ze = [],
    Qe = 0,
    Y = [],
    $e = [],
    et = new ng(),
    tt = new ng(),
    nt = e.params.get(`envgate`) !== `0`,
    rt = new cg(3, M.degToRad(3), nt),
    it = new cg(3, M.degToRad(3), nt),
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
      if (!u)
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
        x1: Math.max(t.maxX, Fh) + 60,
        z1: Math.max(t.maxZ, Ih) + 60,
      };
    },
    ft = (e, t) => {
      Q.viewCap[e] = [t.capacity, t.total, t.grown];
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
    Z = null,
    yt = null,
    bt = null,
    xt = null,
    St = new be(),
    Ct = new ce(),
    wt = f.get(`lightning`) === `1`,
    Tt = !1,
    Et = 0,
    Dt = [],
    Ot = [],
    kt = null,
    At = f.get(`aodebug`) === `1`,
    Q = {
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
    jt = new U(),
    Mt = new U(),
    Nt = new W(),
    Pt = new U(),
    Ft = new U(),
    It = new U(),
    Lt = new U(0, 1, 0),
    Rt = null,
    zt = null,
    Bt = new Set([`taipei101`]),
    Vt = [],
    Ht = () => {
      let n = new ym(Ug[0], Ug[1]);
      ((Q.lodBoxes = Dh(
        n,
        e.plan,
        Bt,
        Vt,
        H ? (e, t) => H.height(e, t) : void 0,
        t?.cityLod,
      )),
        (Q.builderFill.lod = [n.vertexCount, n.indexCount]));
      let r = n.build(),
        i = new ig(r, 400).view(r, !1);
      if ((Vg(r), Rt)) {
        let e = $e.findIndex((e) => e.mesh === Rt);
        (e >= 0 && $e.splice(e, 1),
          Rt.geometry.dispose(),
          (Rt.geometry = i.geometry));
      } else
        ((Rt = new P(i.geometry, Rm(zt, `lod`))),
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
      (If(j, A),
        If(N, Ff[t]),
        (F = +(n <= 0)),
        (ee = Math.max(0.001, n)),
        n <= 0 && If(A, N),
        t !== k && ((k = t), e.events.emit(`weather:changed`, { weather: t })));
    },
    Gt = (t) => {
      if (
        (e.events.emit(`time:hour`, { hour: t }),
        y || (--I, I > 0) || S() > 0.34)
      )
        return;
      let n = t >= 13 && t <= 17,
        r = t >= 4 && t <= 8,
        i = k,
        a = [
          [`clear`, i === `storm` ? 0.5 : 4],
          [`cloudy`, 3],
          [`rain`, 2.2],
          [`storm`, i === `clear` ? 0.6 + (n ? 2.4 : 0) : n ? 3 : 0.7],
          [`fog`, r ? 2 : 0.15],
        ],
        o = 0;
      for (let [e, t] of a) e !== i && (o += t);
      let s = S() * o,
        c = `clear`;
      for (let [e, t] of a)
        if (e !== i && ((s -= t), s <= 0)) {
          c = e;
          break;
        }
      (Wt(c, 60 + S() * 70), (I = c === `storm` ? 1 + S() * 1.5 : 2 + S() * 3));
    },
    Kt = (t) => {
      try {
        e.audio.play(`thunder`, { volume: t, ui: !0, rate: 0.85 + S() * 0.3 });
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
      if (((_e &&= (e.renderer.setPostFx(null), null)), t))
        try {
          let r = await wh(e.renderer.gl, e.scene, e.camera, t);
          if (n !== Jt) {
            r.fx.dispose();
            return;
          }
          ((_e = r), e.renderer.setPostFx(r.fx), (Et = 3));
        } catch (e) {
          n === Jt &&
            console.warn(`[environment] post-processing unavailable`, e);
        }
    },
    Xt = () => {
      let t = e.quality,
        n = t.bloom && f.get(`bloom`) !== `0`;
      if (f.get(`postfx`) === `0` || (!n && !t.postFx)) return Yt(null);
      let r = Math.min(window.devicePixelRatio || 1, t.maxPixelRatio),
        i = t.postFx && t.antialias && r < 1.5 && f.get(`smaa`) !== `0`;
      return Yt({
        bloom: n,
        smaa: i,
        smaaPreset: t.level === `ultra` ? `medium` : `low`,
        vignette: t.postFx,
        aoSamples:
          f.get(`ao`) === `0`
            ? 0
            : t.level === `ultra`
              ? 12
              : t.level === `high`
                ? 8
                : 0,
        bloomLevels: t.level === `ultra` ? 4 : t.level === `high` ? 3 : 2,
        frameFormat: f.get(`rtfmt`) === `16f` ? `16f` : `r11`,
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
      (t.getWorldDirection(jt),
        (jt.y = 0),
        jt.lengthSq() < 1e-6 && jt.set(0, 0, -1),
        jt.normalize(),
        It.set(r.x + jt.x * n * 0.35, r.y, r.z + jt.z * n * 0.35));
      let i = C.lightDir;
      (Pt.crossVectors(Lt, i),
        Pt.lengthSq() < 1e-6 && Pt.set(1, 0, 0),
        Pt.normalize(),
        Ft.crossVectors(i, Pt).normalize());
      let a = (2 * n) / w.shadow.mapSize.x,
        o = It.dot(Pt),
        s = It.dot(Ft);
      (It.addScaledVector(Pt, Math.round(o / a) * a - o),
        It.addScaledVector(Ft, Math.round(s / a) * a - s),
        w.target.position.copy(It),
        w.position.copy(It).addScaledVector(i, zg),
        w.target.updateMatrixWorld(),
        w.updateMatrixWorld());
      let c = w.shadow.camera,
        l = Ke(i.y, 0.02, 1),
        u = Math.sqrt(1 - l * l),
        d = Math.max(0, It.y - e.plan.groundHeight(It.x, It.z)),
        f = n * 2.2 * u + 560 * l,
        p = n * 1.6 * u + (40 + d) * l + 10,
        m = Math.max(1, zg - f),
        h = zg + p;
      (Math.abs(c.near - m) > 2 || Math.abs(c.far - h) > 2) &&
        ((c.near = m), (c.far = h), c.updateProjectionMatrix());
    },
    $t = null,
    en = null,
    tn = !1,
    nn = null,
    rn = () =>
      e.quality.level !== `low` &&
      f.get(`envmap`) !== `0` &&
      (nn ??= Sh(e.renderer.gl).half),
    an = (t = !0) => {
      if (!Ce) return;
      if (!rn()) {
        (e.scene.environment &&
          ((e.scene.environment = null),
          (B.scene.environment = null),
          Te?.dispose(),
          (Te = null),
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
          Te?.dispose(),
          (Te = null),
          (tn = !1),
          ($t = new ie(n, { type: te, generateMipmaps: !1 })),
          (en = new s(0.1, 100, $t)),
          !Ch(e.renderer.gl, [$t]))
        )
          throw Error(`env cube target is not renderable`);
        if (!Te) {
          let e = Ce;
          (e._setSize &&
            e._allocateTargets &&
            (e._setSize(n), (Te = e._allocateTargets())),
            (tn = !1));
        }
        if (!tn) {
          tn = !0;
          let e = Ce._ggxMaterial;
          e?.defines &&
            `GGX_SAMPLES` in e.defines &&
            e.defines.GGX_SAMPLES !== 16 &&
            ((e.defines.GGX_SAMPLES = 16), (e.needsUpdate = !0));
        }
        if (!t && Te) {
          ((e.scene.environment = Te.texture),
            (B.scene.environment = Te.texture),
            (je = -99));
          return;
        }
        en.update(e.renderer.gl, Ee);
        let r = Ce.fromCubemap($t.texture, Te);
        ((Te = r),
          (e.scene.environment = r.texture),
          (B.scene.environment = r.texture));
      } catch (t) {
        (console.warn(`[environment] env map failed`, t),
          (Ce = null),
          $t?.dispose(),
          ($t = null),
          (e.scene.environment = null),
          (B.scene.environment = null));
      }
      ((je = h),
        (Me = A.cloud * 3 + A.overcast * 5 + A.mist * 7 + A.storm * 11),
        (Q.envMs = performance.now() - n));
    },
    on = (t) => {
      C.compute(h, A);
      let n = ue ? ue.flash : 0;
      (w.color.copy(C.lightColor), (w.intensity = C.lightIntensity));
      let r = e.quality.level,
        i = C.moonLit ? (r === `ultra` ? 0.25 : 9) : 0.02,
        a = w.castShadow && C.shadowStrength > i && C.lightIntensity > 0.01;
      ((w.shadow.intensity = a
        ? C.shadowStrength * G(i, i + 0.08, C.shadowStrength)
        : 0),
        (w.shadow.autoUpdate = !1));
      let o =
          r === `medium` || (r === `high` && Le < 7)
            ? 1 / 30
            : r === `ultra`
              ? 1 / 60
              : 0,
        s = performance.now() / 1e3;
      if (
        ((Ie = a && (!o || s + 1e-6 >= Fe)),
        w.castShadow && !w.shadow.map && (Ie = !0),
        Ie && o)
      ) {
        let e = Math.max(0, s - Fe);
        Fe = s + o - (e % o);
      }
      w.shadow.needsUpdate = Ie;
      let c = !!Te;
      (T.color.copy(C.hemiSky),
        T.groundColor.copy(C.hemiGround),
        (T.intensity = C.hemiIntensity * (c ? 0.6 : 0.9) + n * 2.2),
        n > 0 && T.color.lerp(Nt.setRGB(0.75, 0.8, 1), Math.min(1, n)),
        B.sun.color.copy(w.color),
        (B.sun.intensity = w.intensity),
        B.sun.position.copy(C.lightDir).multiplyScalar(1e3),
        B.hemi.color.copy(T.color),
        B.hemi.groundColor.copy(T.groundColor),
        (B.hemi.intensity = T.intensity),
        (e.scene.environmentIntensity = C.envIntensity),
        (B.scene.environmentIntensity = C.envIntensity),
        (K.uNight.value = C.night),
        K.uSunDir.value.copy(C.lightDir),
        (K.uWet.value = R),
        V.uSkySun.value.copy(C.sunDir),
        V.uMoonDir.value.copy(C.moonDir),
        V.uZenith.value.copy(C.zenith),
        V.uHorizon.value.copy(C.horizon),
        V.uSunset.value.copy(C.sunset),
        V.uSunGlow.value.copy(C.sunGlow),
        V.uSunDisk.value.copy(C.sunDisk),
        V.uMoonCol.value.copy(C.moonCol),
        V.uCloudLit.value.copy(C.cloudLit),
        V.uCloudAmb.value.copy(C.cloudAmb),
        (V.uCloudCover.value = A.cloud),
        (V.uShafts.value = Ke(A.rain * 0.7 + A.storm * 0.5 - 0.15, 0, 1)),
        (V.uStars.value = C.stars),
        (V.uFlash.value = n),
        ue && V.uFlashDir.value.copy(ue.dir),
        (se += t * (0.004 + A.wind * 0.012)),
        V.uWindOff.value.set(se, se * 0.35),
        (V.uSkyTime.value = e.time.real % 1e3),
        V.uGround.value.copy(C.hemiGround).multiplyScalar(0.3),
        ge &&
          (ge.uLightDir.value.copy(C.lightDir),
          ge.uLightCol.value
            .copy(C.lightColor)
            .multiplyScalar(C.lightIntensity * (0.25 + 0.75 * A.sunOcc)),
          ge.uAmbient.value
            .copy(C.hemiSky)
            .lerp(C.hemiGround, 0.35)
            .multiplyScalar(C.hemiIntensity * 0.5),
          (ge.uWTime.value = e.time.real % 3600),
          (ge.uWNight.value = C.night),
          (ge.uWRain.value = A.rain),
          (ge.uCloudShade.value = A.overcast),
          ge.uDeep.value
            .setRGB(0.028, 0.042, 0.034)
            .lerp(Nt.setRGB(0.05, 0.043, 0.032), A.rain * 0.8)));
      let l = C.exposure;
      if (((e.renderer.gl.toneMappingExposure = l), _e)) {
        let t = _e.grade;
        ((t.u(`uExposure`).value = l * (1 + n * 0.25)),
          (t.u(`uGTime`).value = e.time.real % 100));
        let r = C.sunEl,
          i = G(-2, 3, r) * (1 - G(9, 18, r)) * (1 - A.overcast),
          a = C.night,
          o = h < 12 ? G(-3, 4, r) * (1 - G(14, 30, r)) : 0,
          s = h >= 12 ? G(-9, -1, r) * (1 - G(-1, 6, r)) : 0,
          c = G(25, 55, r) * (1 - A.overcast),
          u = Math.max(A.overcast, A.rain),
          d = t.u(`uLift`).value,
          f = t.u(`uGain`).value,
          p = 1 - a,
          m = C.golden * p;
        (d.set(
          0.004 * i + 0.002 * s + 0.0025 * a + 0.012 * m,
          (0.004 + 0.004 * o) * p + 0.002 * a + 0.008 * m,
          (0.01 + 0.01 * A.rain + 0.008 * o + 0.01 * s) * p + 0.0025 * a,
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
            (1 - 0.2 * A.overcast * (1 - a)) *
            (1 - 0.2 * A.mist)),
          (t.u(`uContrast`).value =
            1.07 +
            0.03 * a +
            0.02 * c -
            0.03 * o -
            0.07 * A.mist -
            0.02 * A.rain -
            0.06 * m),
          (t.u(`uToe`).value = G(0.3, 0.9, a)),
          _e.ao &&
            (t.u(`uAOAmount`).value = (0.85 + 0.15 * u) * (1 - 0.35 * a)),
          _e.ao && At && (t.u(`uAODebug`).value = 1),
          _e.bloom)
        ) {
          let e = C.bloomNight,
            t = Math.max(e, Math.min(1, n * 2));
          ((_e.bloomActive = t > Lg || Et > 0),
            Et > 0 && Et--,
            (_e.bloom.intensity = _e.bloomActive
              ? (0.4 + 0.3 * e) * G(Lg, 0.6, t)
              : 0),
            (_e.bloom.luminanceMaterial.threshold = 1.45 - 0.15 * e));
        }
      }
      ve && xe();
      let u = e.camera.far,
        d = 90 + 170 * Ke(A.overcast * 0.4 + A.rain * 0.8 + A.mist * 0.9, 0, 1);
      ((E.near = cp(C.hazeScale * Ke(u / 900, 0.55, 1.25), d)),
        (E.far = u),
        (O.near = E.near),
        (B.scene.fog = e.scene.fog ? O : null),
        Yp.uTreeFade.value.set(u * 0.66, u * 0.82),
        (Yp.uWindAmt.value = 0.25 + A.wind * 1.1),
        (Lm.uLitFrac.value =
          0.55 -
          0.1 * Ke(h >= 0 && h < 5 ? 1 - Math.abs(h - 2.5) / 2.5 : 0, 0, 1)));
    },
    sn = (e) => {
      e.getWorldDirection(Mt);
      let t = Math.hypot(Mt.x, Mt.z);
      t < 0.001 && (Mt.set(0, 0, -1), (t = 1));
      let n = 1 / Math.hypot(1, 0.03);
      (C.skyBase((Mt.x / t) * n, 0.03 * n, (Mt.z / t) * n, D, 0.3),
        C.mist > 0 && D.lerp(C.mistColor, C.mist * 0.6));
      let r = ue ? ue.flash : 0;
      (r > 0 && D.lerp(Nt.setRGB(0.6, 0.64, 0.8), Math.min(0.5, r * 0.4)),
        w.castShadow && Ie && Qt(e),
        le?.preRender(e, Pe));
      let i = performance.now(),
        a = e;
      if (
        ((Lm.uLodNear.value = a.far * 0.9),
        (Gh.uSplit.value = a.far * 0.85),
        et.set(e),
        lt &&
          X &&
          (pt.setFromMatrixPosition(a.matrixWorld),
          (lt.visible = C.night > Rg && X.update(mt) > 0)),
        yt && xt)
      ) {
        let e = C.night > Rg && St.distanceToPoint(a.position) < a.far * 0.85;
        yt.visible = e && xt.update(et.test) > 0;
      }
      if (
        ((et.detailDist = Math.min(a.far * 0.8, 380)),
        rt.stale(e, at(Y, ot)) &&
          (rt.set(e), (rt.detailDist = et.detailDist), Ut(Y, rt, Q.drawn.main)),
        ht && (ht.visible = vt(et)),
        Ve.length)
      ) {
        ((et.maxDist = a.far * 0.84), We.setFromMatrixPosition(a.matrixWorld));
        let e = 0,
          t = 0;
        for (let n = 0; n < Ve.length; n++) {
          let r = q[n],
            i = Ve[n].update(r ? qe : et.test);
          if (((Be[n].visible = i > 0), (e += i), r)) {
            let e = r.update(Ge);
            ((He[n].visible = e > 0), (t += e));
          }
        }
        if (((Q.drawn.trees = e), (Q.drawn.treesNear = t), Ye && Je)) {
          let e = Ye.update(Xe);
          ((Je.visible = e > 0), (Q.drawn.shrubs = e));
        }
      }
      Q.cullMs = Q.cullMs * 0.9 + (performance.now() - i) * 0.1;
    },
    cn = (t) => {
      let n = performance.now();
      if ((tt.set(t), Z && bt)) {
        let n = C.night > Rg;
        ((Z.visible = n && bt.update(tt.test) > 0),
          n &&
            (e.renderer.gl.getDrawingBufferSize(Ct),
            (Gh.uPx.value =
              (2 * Math.tan(M.degToRad(t.fov) / 2)) /
              Math.max(1, Ct.y * (t.zoom || 1)))));
      }
      (it.stale(t, at($e, st)) && Ut($e, it.set(t), Q.drawn.far),
        gt && (gt.visible = vt(tt)),
        (Q.cullMs += (performance.now() - n) * 0.1));
    },
    ln = (t) => {
      if (!Be.length || !Ze.length) return;
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
      let f = new x(),
        p = new U(),
        m = new U(),
        h = 0;
      for (let n = 1; n + 1 < t.length && u.length < Qe; n += 3) {
        let r = t[n - 1],
          i = t[n + 1],
          a = i.x - r.x,
          o = i.z - r.z,
          c = Math.hypot(a, o) || 1,
          l = Gg(n * 1.7 + 0.3),
          g = Gg(n * 3.1 + 7.7),
          _ = Gg(n * 5.3 + 2.1),
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
          u.push(new we().compose(m, f, p)),
          d.push(Qp(_, g, l).multiplyScalar(0.85)),
          h++);
      }
      if (Je && J.m.length) {
        let e = [],
          t = [];
        for (let n = 0; n < J.m.length; n++) {
          let r = J.m[n].elements;
          s(r[12], r[14], 2.6, 11) || (e.push(J.m[n]), t.push(J.c[n]));
        }
        Ye = new og(Je, e, t, 100, 2.5);
      }
      for (let e = 0; e < Be.length; e++)
        ((Ve[e] = new og(Be[e], c[e].m, c[e].c, 100, e === 1 ? 10 : 7)),
          He[e] && (q[e] = new og(He[e], Ve[e], null, 100, 0)));
      ((Q.trailTreesRemoved = l), (Q.trailShrubs = h));
    },
    un = () => {
      let t = up(e.scene),
        n = e.renderer.gl,
        r = B.rig.sync(t, n),
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
      t && B.rig.sig && !lp(t, B.rig.sig) && (un() || (ke = 10));
    },
    pn = (t) => {
      let n = H;
      me = new sh(
        (t, r) => {
          let a = -1450 + 2400 * t,
            o = (i + n.westBank(a)) / 2 + Math.sin(a * 0.004) * 25;
          return r.set(o, e.plan.waterLevel, a);
        },
        2400,
        5.5,
      );
      let r = oh();
      for (let [n, i] of [
        [e.scene, `boat`],
        [B.scene, `boat-far`],
      ]) {
        let e = Rm(t, i),
          a = new P(r, e);
        ((a.name = `env-boat`), n.add(a), pe.push(a));
      }
    },
    mn = () => {
      (e.events.on(`quality:changed`, () => {
        (Zt(), le.allocate(e.quality.rainParticles), Xt(), (je = -99));
      }),
        e.events.on(`player:spawned`, () => {
          try {
            (Ne.rain?.stop(),
              Ne.wind?.stop(),
              Ne.river?.stop(),
              (Ne = {
                rain: e.audio.loop(`rain`, { volume: 0, ui: !0 }),
                wind: e.audio.loop(`wind`, { volume: 0, ui: !0 }),
                river: u
                  ? e.audio.loop(`ambient_river`, {
                      volume: 0,
                      x: i,
                      y: 0,
                      z: 0,
                    })
                  : null,
              }));
          } catch {
            Ne = { rain: null, wind: null, river: null };
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
        return k;
      },
      setWeather(e, t = 45) {
        Ig.includes(e) && (Wt(e, t), (I = 2 + S() * 2));
      },
      get rain() {
        return A.rain;
      },
      get night() {
        return K.uNight.value;
      },
      sun: w,
      fogColor: D,
      lightning() {
        ue &&
          ue.strike(
            e.camera.position,
            (e, t) => H.height(e, t),
            S,
            e.time.real,
            !0,
          );
      },
      get wet() {
        return R;
      },
      get sunDirection() {
        return C.sunDir;
      },
      get flash() {
        return ue ? ue.flash : 0;
      },
      get wind() {
        return A.wind;
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
        return H ? H.height(t, n) : e.plan.groundHeight(t, n);
      },
      spawnPlane() {
        de.begin(S);
      },
      get farLayer() {
        return B;
      },
      get gloom() {
        return C.dim;
      },
      setSheltered(e) {
        ((Tt = !!e), le && (le.sheltered = Tt));
      },
      holdLook(e) {
        ve = !!e;
      },
      addRainOccluder(e, t) {
        if (le) return le.addOccluder(e, t);
        let n = -(Dt.length + 1);
        return (Dt.push({ id: n, rect: e, y: t, real: 0 }), n);
      },
      removeRainOccluder(e) {
        if (e < 0) {
          let t = Dt.find((t) => t.id === e);
          t && (t.real && le && le.removeOccluder(t.real), (t.real = -1));
          return;
        }
        le?.removeOccluder(e);
      },
      isSheltered(t, n, r) {
        if (Tt) return !0;
        let i = r ?? e.plan.groundHeight(t, n) + 0.5;
        if (le) return le.covered(t, n, i);
        for (let e of Dt) {
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
        return Ot;
      },
      _debug: {
        atmos: C,
        wCur: A,
        far: B,
        stats: Q,
        get gates() {
          return { main: rt.rebuilds, far: it.rebuilds };
        },
        get post() {
          return _e;
        },
        get envRT() {
          return Te;
        },
        regenEnv: () => an(),
        get pmrem() {
          return Ce;
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
          r = e.quality;
        (sp(),
          (e.scene.background = null),
          (e.scene.fog = E),
          (B.scene.fog = O),
          e.scene.add(w, w.target, T),
          Zt(),
          B.install(e.scene, e.camera),
          (B.onPre = sn),
          (B.onFarCamera = cn),
          (B.enabled = f.get(`envfar`) !== `0`));
        let a = performance.now(),
          s = (e) => {
            let t = performance.now();
            ((Q.phaseMs[e] = (Q.phaseMs[e] ?? 0) + (t - a)), (a = t));
          },
          l = async (t) => {
            (s(t), await e.yieldFrame(), (a = performance.now()));
          },
          p = r.level === `low`,
          m = yp(V, !1, p, t?.sky);
        (B.scene.add(bp(m)),
          Ee.add(bp(yp(V, !0, !1, t?.sky))),
          (H = new Fp(e.plan, t?.terrain)));
        let h = Up(H, r.level === `low`, u ? void 0 : []);
        await l(`terrain`);
        let g = Up(H, r.level === `low`, [], 2.1);
        ((Q.terrainTris = h.tris), (Q.terrainFarTris = g.tris));
        let _ = new ig(h.geometry, 320).view(h.geometry, !0, {
            area: dt(),
            dist: ut * r.drawDistance,
            detailDist: 0,
          }),
          v = new ig(g.geometry, 400).view(g.geometry, !1);
        (ft(`env-terrain`, _), ft(`env-terrain-far`, v));
        let y = new P(_.geometry, Wp(!1, p));
        ((y.receiveShadow = !0),
          (y.frustumCulled = !1),
          (y.name = `env-terrain`),
          (Ae = y.material));
        let b = new P(v.geometry, Wp(!0, p));
        if (
          ((b.frustumCulled = !1),
          (b.name = `env-terrain-far`),
          Y.push({ view: _, mesh: y }),
          $e.push({ view: v, mesh: b }),
          e.scene.add(y),
          B.scene.add(b),
          await l(`terrainFar`),
          u)
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
                  Op - 4,
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
            a = -1700,
            s = 1300,
            c = 2400;
          (r(a, s, 30, (e) => [H.westBank(e) + 5, e]),
            r(i - 4, c, 30, (e) => [e, H.northBank(e) + 5]),
            r(a, H.northBank(i) + 5, 30, (e) => [i - 8, e]),
            n(H.westBank(a) + 5, a, i - 8, a),
            n(H.westBank(s) + 5, s, i, s),
            n(c, o, c, H.northBank(c) + 5));
        }
        ge = em(V, $p(256));
        let D = e.plan.dataset.water.levels,
          j = am(e.plan.waterLevel, d, u ? null : H.water, u ? void 0 : D);
        if (
          ((ht = new P(j, rm(ge, !1, d, t?.water))),
          (ht.frustumCulled = !1),
          (ht.name = `env-water`),
          (gt = new P(j, rm(ge, !0, d, t?.water))),
          (gt.frustumCulled = !1),
          (gt.name = `env-water-far`),
          e.scene.add(ht),
          B.scene.add(gt),
          u)
        ) {
          let t = 5200,
            n = e.plan.waterLevel,
            r = Op - 2,
            a = n + 2;
          for (let e = -5200; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, H.westBank(e + (300 * n) / 6));
            _t.push(new be(new U(t - 30, r, e), new U(i + 1, a, e + 300)));
          }
          for (let e = i - 320; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, H.northBank(e + (300 * n) / 6));
            _t.push(new be(new U(e, r, t - 30), new U(e + 300, a, o + 1)));
          }
        } else {
          let t = e.plan.waterLevel;
          for (let e of im(H.water, D)) {
            let n = Number.isFinite(e.y) ? e.y : t;
            _t.push(
              new be(
                new U(e.x0, Math.min(Op, n - 1.7) - 2, e.z0),
                new U(e.x1, n + 2, e.z1),
              ),
            );
          }
        }
        await l(`water`);
        let M = Fm();
        (f.get(`keepcanvas`) !== `1` &&
          (M.onUpdate = () => {
            M.onUpdate = null;
            let e = M.image;
            e &&
              typeof e.getContext == `function` &&
              ((e.width = 1), (e.height = 1));
          }),
          (zt = M));
        let N = new ym(Hg[0], Hg[1]),
          ee = new Qm(),
          I = N.triangleCount,
          L = u
            ? Vm(N, H, e.plan, e.statics, ee)
            : {
                trees: [],
                blocked: () => !1,
                gates: [],
                wharf: { x: 0, z: 0 },
                lampCount: 0,
                paths: [],
              },
          R = N.triangleCount;
        await l(`riverside`);
        let te = u
          ? Jm(N, H, e.plan)
          : {
              wheelCenter: new U(0, -2e3, 0),
              buildings: 0,
              parkLamps: [],
              decks: [],
            };
        for (let t of te.decks) {
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
        let ne = N.triangleCount;
        await l(`farbank`);
        let re = performance.now(),
          z = u
            ? await Hh(N, H, e.plan, e.statics, ee, () => l(`edges`))
            : {
                lodBoxes: [],
                lightRoads: [],
                lightNodes: [],
                buildings: 0,
                blocked: () => !1,
                bounds: new be(),
              };
        Q.edgesMs = performance.now() - re;
        let ie = N.triangleCount;
        ((Q.hillLights = u ? Zm(N, H) : 0),
          !u && t?.props && (t.props(N, H), t.statics?.()),
          (Q.propsBreakdown = {
            riverside: R - I,
            farbank: ne - R,
            edges: ie - ne,
            hillLights: N.triangleCount - ie,
          }),
          (Q.edgeBuildings = z.buildings));
        let ae = z.blocked;
        Vt = z.lodBoxes;
        let oe = dt(),
          se = (e, t = 0) => ({ area: oe, dist: e, detailDist: t });
        if (ee.count > 0) {
          lt = ee.build();
          let t = lt.geometry;
          ((X = new ig(t, 200).view(t, !0, se(420))),
            ft(`env-light-pools`, X),
            (lt.geometry = X.geometry),
            (lt.frustumCulled = !1),
            e.scene.add(lt));
        }
        Q.buildings = te.buildings;
        let ce = e.plan.bounds.maxZ + 190;
        if (
          ((Ot = L.paths
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
          Lm.uWheelCenter.value.copy(te.wheelCenter),
          u && Ym(N, te.wheelCenter),
          (Q.propsTris = N.triangleCount),
          (Q.builderFill.props = [N.vertexCount, N.indexCount]),
          await l(`edges`),
          N.triangleCount > 0)
        ) {
          let t = N.build(),
            n = Wg(t, N.tierTable(), te.wheelCenter);
          for (let e of n.tiles) e.detail && (Q.detailTris += e.count / 3);
          await l(`propsTiles`);
          let r = n.view(t, !0, se(ut * e.quality.drawDistance, 380)),
            i = n.view(t, !1);
          (ft(`env-props`, r), ft(`env-props-far`, i), Vg(t));
          let a = new P(r.geometry, Rm(M, `main`));
          ((a.frustumCulled = !1),
            (a.receiveShadow = u),
            u || (a.userData.noWarm = !0),
            (a.name = `env-props`));
          let o = new P(i.geometry, Rm(M, `far`));
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
          for (let e of z.lightRoads) t.push(e);
          for (let e of z.lightNodes) n.push(e);
          let i =
              Number(e.params.get(`lightsthin`) ?? 0) ||
              (r.level === `low` ? 2 : 1),
            a = Zh(t, n, te.parkLamps, {
              laneWidth: e.plan.laneWidth,
              side: e.plan.side,
              thin: i,
            }),
            o = e.plan.bounds,
            s = (e, t) => {
              let n = e.attributes.aP;
              return new ig(
                e,
                400,
                (e) => (n.getW(e) > 1.5 ? `streaks` : null),
                (e, t) => {
                  e === `streaks`
                    ? t.set(
                        jt.set(o.minX - 1200, -20, o.minZ - 200),
                        Mt.set(o.maxX + 1200, 160, o.maxZ + 1e3),
                      )
                    : t.expandByScalar(18);
                },
              ).view(e, !0, t);
            };
          ((bt = s(a.mesh.geometry)),
            (xt = s(a.main.geometry, se(ut * r.drawDistance))),
            ft(`env-city-lights`, bt),
            ft(`env-city-lights-main`, xt),
            Vg(a.mesh.geometry),
            Vg(a.main.geometry),
            (Z = a.mesh),
            (Z.geometry = bt.geometry),
            (Z.visible = !1),
            B.scene.add(Z),
            (yt = a.main),
            (yt.geometry = xt.geometry),
            (yt.visible = !1),
            e.scene.add(yt),
            St.copy(z.bounds));
          for (let e of te.parkLamps) St.expandByPoint(jt.set(e.x, e.y, e.z));
          Q.cityLights = a.counts;
        }
        (await l(`lod+lights`),
          t?.ready?.({
            scene: e.scene,
            farScene: B.scene,
            propsMaterial: (e) => Rm(M, e),
            atmos: C,
            weather: A,
            field: H,
          }));
        let pe = u
            ? Zp(H, r.propDensity, (e, t) => L.blocked(e, t) || ae(e, t))
            : { matrices: [], colors: [], species: [], colliders: [] },
          me = L.trees,
          ve = pe.matrices.length + me.length,
          xe = Array.from({ length: 3 }, () => ({ m: [], c: [] }));
        for (let e = 0; e < pe.matrices.length; e++)
          (xe[pe.species[e]].m.push(pe.matrices[e]),
            xe[pe.species[e]].c.push(pe.colors[e]));
        let W = xe[0].m,
          Te = xe[0].c,
          De = new x(),
          Oe = new U(),
          ke = new U();
        for (let t of me) {
          let n = (((t.x * 7.13 + t.z * 3.7) % 1) + 1) % 1;
          (De.setFromAxisAngle(Lt, n * Math.PI * 2),
            ke.set(t.x, t.y - 0.2, t.z),
            Oe.set(t.s, t.s * (0.9 + n * 0.3), t.s),
            W.push(new we().compose(ke, De, Oe)),
            Te.push(Qp(n, 0.5, (n * 3.3) % 1).multiplyScalar(1.1)),
            e.statics.addCircle(
              t.x,
              t.z,
              0.35 * Math.max(0.6, t.s),
              t.y,
              t.y + 4,
              `tree`,
            ));
        }
        let G = Jp(),
          je = Xp();
        Qe = xe[0].m.length + 400;
        for (let t = 0; t < 3; t++) {
          let n = Math.max(1, t === 0 ? Qe : xe[t].m.length),
            r = new ye(G[t], je, n);
          ((r.name = t === 0 ? `env-trees` : `env-trees-${t}`),
            Be.push(r),
            Ve.push(new og(r, xe[t].m, xe[t].c, 100, t === 1 ? 10 : 7)),
            e.scene.add(r));
        }
        if (!p && u) {
          let t = Mg(),
            n = Fg(gg(e.renderer.gl.capabilities.getMaxAnisotropy()));
          for (let r = 0; r < t.length; r++) {
            let i = Ve[r],
              a = Math.max(
                1,
                Math.min(
                  i.count + (r === 0 ? 400 : 0),
                  i.maxWithin(115, oe) + (r === 0 ? 400 : 16),
                ),
              ),
              o = new ye(t[r], n, a);
            ((o.name = `env-trees-near-${r}`),
              He.push(o),
              q.push(new og(o, i, null, 100, 0)),
              e.scene.add(o));
          }
          let i = e.plan.bounds,
            a = (e, t) => L.blocked(e, t) || ae(e, t);
          J = Pg(
            (e, t) => H.height(e, t),
            (e, t, n) => {
              if (H.kind(e, t) !== `land`) return !1;
              let r = H.outside(e, t);
              if (r < 12 || r > 330) return !1;
              let i = n - c;
              return i < 2.5 || (H.edgeUrban(e, t) > 0.3 && i < 9)
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
          let o = new og(null, J.m, J.c, 100, 2.5);
          ((Je = new ye(
            Ng(),
            n,
            Math.max(1, Math.min(o.count, o.maxWithin(95, oe) + 16)),
          )),
            (Je.name = `env-shrubs`),
            (Ye = new og(Je, o, null, 100, 0)),
            e.scene.add(Je),
            (Q.shrubs = J.m.length));
        }
        ((Ze = xe),
          (ct = pe.colliders.map((t) => ({
            x: t.x,
            z: t.z,
            c: e.statics.addCircle(t.x, t.z, 0.5, t.y - 1, t.y + 6, `tree`),
          }))),
          (Q.trees = ve),
          await l(`trees`));
        let K = ih();
        for (let [t, n] of u
          ? [
              [e.scene, `plane`],
              [B.scene, `plane-far`],
            ]
          : []) {
          let e = Rm(M, n),
            r = new P(K, e);
          ((r.visible = !1),
            (r.rotation.order = `YXZ`),
            (r.name = `env-plane`),
            t.add(r),
            fe.push(r));
        }
        if (f.get(`plane`) === `1`) {
          de.begin(S);
          for (let e = 0; e < 660; e++) de.update(1 / 30, S);
        } else de.cooldown = 35 + S() * 50;
        (u &&
          (pn(M),
          (he = new uh(
            { x: (i + H.westBank(-250)) / 2 - 10, z: -250 },
            60,
            430,
          )),
          e.scene.add(he.mesh)),
          (le = new th(r.rainParticles)),
          (le.sheltered = Tt));
        for (let e of Dt)
          e.real === 0 && (e.real = le.addOccluder(e.rect, e.y));
        if (u) for (let e of Bg) le.addOccluder(e.rect, e.y);
        (e.scene.add(le.mesh),
          (ue = new rh()),
          B.scene.add(ue.mesh),
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
          Ce = new Se(e.renderer.gl);
        } catch {
          Ce = null;
        }
        (F >= 1 && If(A, Ff[k]), on(0), an(!1), on(0), mn());
        for (let e of [
          Z,
          yt,
          lt,
          le.mesh,
          ue.mesh,
          he?.mesh,
          ...fe,
          ...Be,
          ...He,
          Je,
        ])
          e && (e.visible = !0);
        (_e?.bloom && (_e.bloomActive = !0),
          un(),
          s(`rest`),
          (Q.initMs = performance.now() - n),
          console.info(
            `[init] environment ${Q.initMs.toFixed(0)}ms · terrain ${Q.terrainTris} tris · props ${Q.propsTris} tris · ${Q.buildings} far buildings · ${Q.trees} trees · gates ${L.gates.length} · lamps ${L.lampCount}`,
          ));
      },
      prewarm() {
        try {
          (un(), rn() && Ce && an());
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
            } else i = new P(t.geometry, t.material);
            ((i.castShadow = t.castShadow),
              (i.receiveShadow = t.receiveShadow),
              (i.renderOrder = t.renderOrder),
              (i.frustumCulled = !1),
              (i.name = t.name + `-prewarm`),
              e.push(i));
          };
        (t(le?.mesh), t(lt), t(yt), t(he?.mesh));
        for (let e of He) t(e);
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
          f.get(`envstub`) !== `hide`)
        )
          return;
        let t = new be(),
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
                    new a(new U(1, 0, 0), -n.minX),
                    new a(new U(-1, 0, 0), n.maxX),
                    new a(new U(0, 0, 1), -n.minZ),
                    new a(new U(0, 0, -1), n.maxZ),
                  ]),
                  (e.renderer.gl.localClippingEnabled = !0))));
        }
      },
      update(n) {
        let r = performance.now();
        ((Pe = n),
          B.ensureInstalled(),
          hn.timeScale !== 0 &&
            ((h += (n * hn.timeScale) / 60),
            h >= 24 && (h -= 24),
            h < 0 && (h += 24)));
        let a = Math.floor(h);
        if ((a !== ne && ((ne = a), Gt(a)), F < 1)) {
          F = Math.min(1, F + n / ee);
          let e = F * F * (3 - 2 * F);
          Lf(A, j, N, e);
        }
        ((R =
          A.rain > 0.05
            ? Math.min(1, R + n * (0.03 + 0.1 * A.rain))
            : Math.max(0, R - n * (0.0035 + 0.006 * A.sunOcc * (1 - C.dim)))),
          A.rain > 0.4 && (oe = !0),
          oe && A.rain < 0.15 && ((oe = !1), (ae = 150)),
          (ae -= n));
        let s = +(ae > 0 && C.sunEl > 2 && C.sunEl < 42 && A.sunOcc > 0.3);
        if (
          ((z += (s - z) * Math.min(1, n * 0.25)),
          (V.uRainbow.value = z * Ke((A.sunOcc - 0.3) * 2, 0, 1)),
          ue)
        ) {
          let t = A.storm > 0.55 || wt,
            r = A.storm > 0.1 && A.rain > 0.5;
          if ((t || r) && ((re -= n), re <= 0)) {
            let n = t ? S() < 0.7 : S() < 0.15;
            (ue.strike(
              e.camera.position,
              (e, t) => H.height(e, t),
              S,
              e.time.real,
              n,
            ),
              (re = t ? 3 + S() * (wt ? 3 : 11) : 25 + S() * 40));
          }
          ue.update(n, e.time.real, Kt);
        }
        let c = e.player?.position;
        if (c && n > 0) {
          if (ze) {
            let e = Math.min(
              60,
              Math.hypot(c.x - Re.x, c.y - Re.y, c.z - Re.z) / n,
            );
            Le += (e - Le) * Math.min(1, n * 8);
          }
          (Re.copy(c), (ze = !0));
        }
        if ((on(n), t?.update?.(n), fn(n), le)) {
          let t = C.dim;
          (Nt.copy(C.hemiSky).multiplyScalar(C.hemiIntensity * 0.34),
            (Nt.r += 0.1 * t),
            (Nt.g += 0.08 * t),
            (Nt.b += 0.07 * t));
          let n = ue ? ue.flash : 0;
          ((Nt.r += n * 0.8),
            (Nt.g += n * 0.85),
            (Nt.b += n),
            le.update(
              A.rain,
              e.time.real % 3600,
              A.wind,
              e.player?.position.y ?? 0,
              Nt,
            ));
        }
        let l = u && de.update(n, S);
        for (let e of fe)
          ((e.visible = l),
            l &&
              (e.position.copy(de.pos),
              e.rotation.set(de.pitch, -de.heading, de.roll)));
        if (l) {
          if (!kt)
            try {
              kt = e.audio.loop(`jet`, {
                volume: 1,
                x: de.pos.x,
                y: de.pos.y,
                z: de.pos.z,
              });
            } catch {
              kt = null;
            }
          kt &&
            (kt.setPosition(de.pos.x, de.pos.y, de.pos.z),
            kt.setParam?.(
              `thrust`,
              de.pos.y > 120 ? 0.55 : 0.4 + 0.15 * (de.pos.y / 120),
            ));
        } else if (kt) {
          try {
            kt.stop();
          } catch {}
          kt = null;
        }
        if (
          ((Lm.uWheelAngle.value =
            (Lm.uWheelAngle.value - n * 0.012) % (Math.PI * 2)),
          he &&
            he.update(
              n,
              (1 - C.dim) * (A.rain < 0.3) * (A.storm < 0.3),
              e.camera.position,
              e.camera.far * 0.8,
            ),
          me)
        ) {
          me.update(n);
          for (let e of pe)
            (e.position.copy(me.pos), (e.rotation.y = -me.heading));
        }
        if (((Oe -= n), Oe <= 0)) {
          Oe = 0.5;
          let t = A.cloud * 3 + A.overcast * 5 + A.mist * 7 + A.storm * 11,
            n = Math.abs(h - je);
          n > 12 && (n = 24 - n);
          let r = ue ? ue.flash : 0,
            i = e.quality.level === `medium` ? 1 : 0.5;
          rn() && (n > i || Math.abs(t - Me) > 0.3) && r < 0.01 && an();
        }
        if (
          (Ne.rain && Ne.rain.setVolume(Math.min(1, A.rain * 1.1)),
          Ne.wind &&
            Ne.wind.setVolume(Ke((A.wind - 0.3) * 0.8 + A.storm * 0.3, 0, 0.8)),
          Ne.river)
        ) {
          let t = e.camera.position,
            n = t.x - i,
            r = t.z - o;
          (n < r
            ? Ne.river.setPosition(i - 5, e.plan.waterLevel, t.z)
            : Ne.river.setPosition(t.x, e.plan.waterLevel, o - 5),
            Ne.river.setVolume(Ke(1 - Math.min(n, r) / 160, 0, 1) * 0.55));
        }
        Q.updateMs = Q.updateMs * 0.95 + (performance.now() - r) * 0.05;
      },
    };
  return hn;
}
