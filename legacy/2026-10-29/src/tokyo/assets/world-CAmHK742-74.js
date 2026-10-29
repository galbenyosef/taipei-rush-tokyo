// tokyo/assets/world-CAmHK742 74 — math
// Lines 23689-24025 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Mh(e, t, n, r, i, a) {
  let {
      BloomEffect: o,
      EffectComposer: s,
      EffectPass: c,
      RenderPass: l,
      SMAAEffect: d,
      SMAAPreset: f,
    } = e,
    p = new s(t, { frameBufferType: L, multisampling: 0 });
  p.addPass(new l(n, r));
  let m = null;
  i.aoSamples &&
    r.isPerspectiveCamera &&
    ((m = Sh(e, r, i.aoSamples)),
    (m.divisor = () => (t.getPixelRatio() >= 1.5 ? 4 : 2)),
    (m.needsDepthTexture = !1),
    p.addPass(m));
  let h = [],
    g = null;
  if (i.smaa && i.aa === `fxaa`) h.push(new e.FXAAEffect());
  else if (i.smaa) {
    g = new d({
      preset:
        i.smaaPreset === `high`
          ? f.HIGH
          : i.smaaPreset === `medium`
            ? f.MEDIUM
            : f.LOW,
    });
    let e = g.renderTargetEdges;
    ((e.texture.format = ce), e.dispose(), h.push(g));
  }
  let _ = null,
    v = {};
  if (i.bloom) {
    ((_ = new o({
      mipmapBlur: !0,
      luminanceThreshold: 1,
      luminanceSmoothing: 0.3,
      intensity: 0.8,
      radius: 0.72,
      levels: Math.max(2, Math.min(5, i.bloomLevels ?? 3)),
    })),
      Dh(_));
    let e = _,
      t = e.setSize.bind(e);
    e.setSize = (e, n) => {
      t(Math.max(1, Math.ceil(e / 4)), Math.max(1, Math.ceil(n / 4)));
    };
    let n = e.update.bind(e),
      r = !0;
    ((e.update = (t, i, a) => {
      if (v.bloomActive) (n(t, i, a), (r = !0));
      else if (r) {
        r = !1;
        let n = e.mipmapBlurPass.upsamplingMipmaps[0],
          i = t.getRenderTarget();
        (t.setRenderTarget(n), t.clear(!0, !1, !1), t.setRenderTarget(i));
      }
    }),
      h.push(_));
  }
  let y = Oh(e);
  (m && y.setAO(m.texture),
    i.vignette || ((y.u(`uVignette`).value = 0), (y.u(`uGrain`).value = 0)),
    h.push(y));
  let b = new c(r, ...h);
  if ((p.addPass(b), a === `r11`))
    for (let e of [p.inputBuffer, p.outputBuffer])
      ((e.texture.type = ne), (e.texture.format = he), e.dispose());
  let x = p,
    S = t.state.buffers.depth.getReversed();
  if (m || x.depthRenderTarget || S) {
    x.deleteDepthTexture();
    let e = new u(1, 1);
    ((e.type = F),
      (e.name = `EffectComposer.InputDepth`),
      (p.inputBuffer.depthTexture = e),
      p.inputBuffer.dispose(),
      m?.setDepthTexture(e),
      b.setDepthTexture(e));
  }
  let C = t.getSize(new ve());
  p.setSize(C.x, C.y, !1);
  let w = [p.inputBuffer],
    T = _ ? _.mipmapBlurPass?.downsamplingMipmaps : void 0;
  return (
    T?.[0] && w.push(T[0]),
    g && w.push(g.renderTargetEdges),
    Object.assign(v, {
      fx: {
        render(e) {
          p.render(e);
        },
        setSize(e, t) {
          p.setSize(e, t, !1);
        },
        dispose() {
          p.dispose();
        },
      },
      bloom: _,
      grade: y,
      smaa: g,
      composer: p,
      ao: m,
      bloomActive: !0,
      frameFormat: a,
      targets: w,
    }),
    v
  );
}
var Nh = [
  [0.62, 0.25, 1],
  [1, 0.16, 0.14],
  [1, 0.5, 0.1],
  [1, 0.85, 0.15],
  [0.25, 1, 0.35],
  [0.2, 0.55, 1],
  [0.38, 0.28, 1],
];
function Ph(e, t, n, r = [], i = (e, n) => t.hillHeight(e, n), a) {
  for (let t = 0; t < r.length; t++) {
    let n = r[t],
      i = (n.x1 - n.x0) / 2,
      a = (n.y1 - n.y0) / 2,
      o = (n.z1 - n.z0) / 2;
    (e.setOwnerBox(
      (n.x0 + n.x1) / 2,
      (n.y0 + n.y1) / 2,
      (n.z0 + n.z1) / 2,
      i,
      a,
      o,
    ),
      e.setColor(n.r, n.g, n.b).setEmit(0, 0, n.seed));
    let s = Ap(t, 1);
    (e.boxMinMax(
      n.x0 + s.inset,
      n.y0,
      n.z0 + s.inset,
      n.x1 - s.inset,
      n.y1 + s.dh,
      n.z1 - s.inset,
      55,
    ),
      e.noEmit());
  }
  let o = [
      [0.66, 0.64, 0.6],
      [0.72, 0.7, 0.64],
      [0.58, 0.58, 0.57],
      [0.62, 0.6, 0.55],
      [0.5, 0.54, 0.56],
      [0.68, 0.62, 0.57],
    ],
    s = a ? a(e, i) : 0;
  for (let n of a ? [] : t.blocks) {
    let r = new Oe(je(t.dataset.seed, `lod`, n.id)),
      i = n.district.style;
    if (i.floors[1] <= 0) continue;
    let a = n.maxX - n.minX,
      c = n.maxZ - n.minZ,
      l = Math.max(1, Math.round(a / 24)),
      u = Math.max(1, Math.round(c / 24)),
      d = a / l,
      f = c / u;
    for (let a = 0; a < l; a++)
      for (let c = 0; c < u; c++) {
        let p = n.minX + d * (a + 0.5),
          m = n.minZ + f * (c + 0.5);
        if (
          n.reserved.some(
            (e) =>
              Math.abs(p - e.x) < e.w / 2 + 4 &&
              Math.abs(m - e.z) < e.d / 2 + 4,
          )
        )
          continue;
        let h = a > 0 && a < l - 1 && c > 0 && c < u - 1,
          g = r.int(i.floors[0], i.floors[1]);
        (r.chance(i.towers * 0.5) && (g = Math.round(g * r.range(1.4, 2.6))),
          h && (g = Math.max(2, Math.round(g * 0.6))));
        let _ = Math.max(7, g * 3.3),
          v = o[r.int(0, o.length - 1)],
          y = 0.9 + r.next() * 0.2,
          b = g > 18 && r.chance(0.6),
          x = d * r.range(0.78, 0.94),
          S = f * r.range(0.78, 0.94),
          C = t.terrainLift(p, m);
        (e.setOwnerBox(p, C + 0.1 + _ / 2, m, x / 2, _ / 2, S / 2),
          b
            ? e.setColor(0.36 * y, 0.43 * y, 0.47 * y)
            : e.setColor(v[0] * y, v[1] * y, v[2] * y),
          e.setEmit(0, 0, 1 + r.int(0, 998)));
        let w = Ap(s, 2);
        if (
          (e.box(
            p,
            C + 0.1,
            m,
            x - 2 * w.inset,
            _ + w.dh,
            S - 2 * w.inset,
            0,
            55,
          ),
          e.noEmit(),
          !h && r.chance(i.neon * 0.25))
        ) {
          let t = [
            [1, 0.25, 0.45],
            [0.3, 0.9, 1],
            [1, 0.75, 0.25],
            [0.5, 1, 0.4],
          ][r.int(0, 3)];
          (e.setColor(t[0], t[1], t[2]).setEmit(2.2, 0),
            e.box(
              p,
              C + _ * r.range(0.35, 0.8),
              m,
              d * 0.3,
              2.5,
              f * 0.3,
              0,
              51,
            ),
            e.noEmit());
        }
        s++;
      }
  }
  for (let r of t.landmarks) {
    if (n.has(r.id) || r.zone || r.kind === `park` || r.kind === `market`)
      continue;
    if (r.id === `taipei101`) {
      (e.setOwnerBox(r.x, 255, r.z - 8, 48, 256, 56), Lh(e, r.x, r.z));
      continue;
    }
    if (r.id === `grand-hotel`) {
      let t = i(r.x, r.z);
      (e.setOwnerBox(r.x, t + 26, r.z, 52, 32, 20), Rh(e, r.x, r.z, t));
      continue;
    }
    if (r.id === `sunyatsen`) {
      (e.setOwnerBox(r.x, 16, r.z, r.w * 0.4, 16.2, r.d * 0.4),
        Fh(e, r.x, r.z, r.w, r.d));
      continue;
    }
    if (r.id === `taipei-dome`) {
      (e.setOwnerBox(r.x, 17, r.z, r.w * 0.48, 17.2, r.d * 0.48),
        Ih(e, r.x, r.z, Math.min(r.w, r.d) * 0.46));
      continue;
    }
    let a =
        {
          cityhall: 45,
          "xinyi-mall": 55,
          presidential: 26,
          cks: 42,
          "main-station": 32,
          "ntu-hospital": 36,
          "police-hq": 30,
          sogo: 48,
          arena: 30,
          redhouse: 12,
          bopiliao: 9,
          longshan: 16,
          xingtian: 16,
          "ciyou-temple": 16,
          dihua: 12,
        }[r.id] ?? 20,
      o = r.kind === `temple`,
      s = r.id === `presidential` ? 60 : a + (r.id === `cks` ? 22 : 0),
      c = t.terrainLift(r.x, r.z);
    (e.setOwnerBox(r.x, c + s / 2, r.z, r.w * 0.31, s / 2 + 0.2, r.d * 0.31),
      e
        .setColor(o ? 0.62 : 0.7, o ? 0.2 : 0.68, o ? 0.14 : 0.64)
        .setEmit(0, 0, o ? 0 : 555),
      e.box(r.x, c + 0.1, r.z, r.w * 0.62, a, r.d * 0.62),
      e.noEmit(),
      r.id === `presidential` &&
        (e.setColor(0.62, 0.3, 0.22), e.box(r.x, 0.1, r.z, 12, 60, 12)),
      r.id === `cks` &&
        (e.setColor(0.18, 0.3, 0.62),
        e.frustum(r.x, a, r.z, r.w * 0.5, r.d * 0.5, 6, 6, 22)));
  }
  return s;
}
function Fh(e, t, n, r, i) {
  let a = r * 0.36,
    o = i * 0.36;
  (e.setColor(0.72, 0.7, 0.66),
    e.box(t, 0.1, n, a * 2 + 10, 1.6, o * 2 + 10),
    e.setColor(0.86, 0.82, 0.72).setEmit(0, 0, 0),
    e.box(t, 1.7, n, a * 2, 12, o * 2),
    e.setColor(0.35, 0.3, 0.26),
    e.box(t, 1.7, n + o + 0.2, a * 1.2, 9, 0.6, 0, 16),
    e.setColor(0.86, 0.62, 0.14).setEmit(0.18, 0),
    e.frustum(t, 13.7, n, a * 2 + 12, o * 2 + 12, a * 2 + 6, o * 2 + 6, 1.6),
    e.frustum(t, 15.3, n, a * 2 + 6, o * 2 + 6, a * 0.9, o * 0.35, 10),
    e.setColor(0.8, 0.54, 0.1),
    e.box(t, 25.3, n, a * 0.9, 2.2, 3),
    e.frustum(t - a * 0.45, 25.3, n, 3, 3, 1, 1, 5.5, !0),
    e.frustum(t + a * 0.45, 25.3, n, 3, 3, 1, 1, 5.5, !0),
    e.noEmit());
}
function Ih(e, t, n, r) {
  (e.setColor(0.55, 0.56, 0.57), e.cyl(t, 0.1, n, r * 1.02, 6, 20, !1));
  let i = [
    [0, 1],
    [0.28, 0.97],
    [0.52, 0.88],
    [0.72, 0.72],
    [0.87, 0.5],
    [0.97, 0.24],
  ];
  for (let a = 0; a + 1 < i.length; a++) {
    let [o, s] = i[a],
      [c, l] = i[a + 1],
      u = 0.84 + 0.04 * a;
    (e.setColor(u, u + 0.01, u + 0.02).setEmit(0.05 * a, 0),
      e.cyl(
        t,
        6 + o * 24,
        n,
        r * s,
        (c - o) * 24,
        20,
        a + 2 === i.length,
        r * l,
      ));
  }
  e.noEmit();
}
