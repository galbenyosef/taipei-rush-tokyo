// tokyo/assets/region-tokyo-A7LxHjud 385 — dir
// Lines 140076-140328 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function _Pe() {
  let e = {
      uLotus: { value: 0 },
      uLotusBloom: { value: 0 },
      uLotusDead: { value: 0 },
    },
    t = (e) => e.toFixed(1);
  return {
    uniforms: e,
    pars: `
uniform float uLotus;
uniform float uLotusBloom;
uniform float uLotusDead;
float tkIn(vec2 p, vec4 r) { return step(r.x, p.x) * step(p.x, r.z) * step(r.y, p.y) * step(p.y, r.w); }
`,
    main: `
  {
    float canal = max(tkIn(p, vec4(${t(Np.west)}, ${t(Np.top - 1)}, ${t(Np.mouth)}, ${t(Np.bottom + 1)})),
                      tkIn(p, vec4(${t(Fp.west)}, ${t(Fp.top - 1)}, ${t(Fp.mouth)}, ${t(Fp.bottom + 1)})));
    float moat = max(tkIn(p, vec4(${t(Hp.minX - 1)}, ${t(Hp.minZ - 1)}, ${t(Hp.maxX + 1)}, ${t(Hp.maxZ + 1)})), step(p.x, ${t(gPe)}) * step(-700.0, p.y) * step(p.y, 700.0));
    float pond = tkIn(p, vec4(${t(Up.minX - 1)}, ${t(Up.minZ - 1)}, ${t(Up.maxX + 1)}, ${t(Up.maxZ + 1)}));
    vec3 lightK = uAmbient + uLightCol * max(uLightDir.y, 0.0) * 0.3;
    vec3 tint = uDeep * vec3(1.0, 1.08, 1.12);
    tint = mix(tint, vec3(0.03, 0.052, 0.038), canal);
    tint = mix(tint, vec3(0.018, 0.04, 0.028), moat);
    tint = mix(tint, vec3(0.045, 0.05, 0.03), pond);
    col += (tint * lightK - body) * (1.0 - F * 0.9);
    // the お茶の水 gorge: 8.5 m down between green walls — the banks fill most of the reflection, the sky only straight up
    float gorge = tkIn(p, vec4(${t(Np.west)}, ${t(Pp.top - 1)}, ${t(Pp.east)}, ${t(Pp.bottom + 1)}));
    if (gorge > 0.0) {
      float open = smoothstep(0.55, 0.95, abs(R.y));
      vec3 bank = vec3(0.022, 0.036, 0.018) * (uAmbient * 2.2 + uLightCol * max(uLightDir.y, 0.0) * 0.5);
      col = mix(col, bank + tint * lightK * 0.6, (1.0 - open) * 0.85);
    }
    // the moats (and the pond) lie still: a calmer normal for the sky reflection
    float still = max(moat * 0.75, pond * 0.45);
    if (still > 0.0) {
      vec3 Ns = normalize(mix(N, vec3(0.0, 1.0, 0.0), still));
      vec3 Rs = reflect(-V, Ns);
      Rs.y = abs(Rs.y) + 0.002;
      vec3 rs2 = skyBase(Rs);
      rs2 = mix(rs2, vec3(dot(rs2, vec3(0.2126, 0.7152, 0.0722))), uCloudShade * 0.5);
      col += (rs2 - refl) * 0.85 * F * 0.9 * still;
    }
    // 不忍池's lotus field (east of the south causeway)
    float lotusZone = pond * step(-350.0, p.x);
    float cover = max(uLotus, uLotusDead * 0.8) * lotusZone;
    if (cover > 0.01 && dist < 900.0) {
      vec2 q = p / 0.85;
      vec2 ci = floor(q);
      vec2 cf = fract(q);
      float h1 = eHash12(ci), h2 = eHash12(ci + 17.3), h3 = eHash12(ci + 5.1);
      vec2 c0 = vec2(0.25 + 0.5 * h2, 0.25 + 0.5 * h3);
      float r = length(cf - c0);
      float rad = 0.28 + 0.2 * h1;
      // patchy edges of the field (open water lanes)
      float patchK = smoothstep(0.25, 0.55, eNoise(p * 0.045) * 0.7 + eNoise(p * 0.13) * 0.3 + cover * 0.45 - 0.2);
      float aaL = fwidth(r) * 1.5 + 0.02;
      float leaf = smoothstep(rad + aaL, rad - aaL, r) * step(h1 * 0.6, cover) * patchK;
      // far: the leaves merge into a green carpet
      leaf = mix(leaf, cover * patchK * 0.85, smoothstep(60.0, 260.0, dist));
      vec3 green = mix(vec3(0.05, 0.11, 0.03), vec3(0.09, 0.16, 0.05), h2) * (0.85 + 0.3 * eNoise(p * 3.1));
      vec3 dead = mix(vec3(0.07, 0.05, 0.03), vec3(0.11, 0.08, 0.045), h3);
      vec3 lc = mix(green, dead, uLotusDead * (1.0 - uLotus));
      // the leaves are matte: lit like the ground (sun + sky), a faint wet sheen
      vec3 lit = lc * (uAmbient * 1.6 + uLightCol * max(uLightDir.y, 0.0) * 0.9);
      // withered stalks: thin dark strokes across the cells in winter
      float stalk = uLotusDead * (1.0 - uLotus) * smoothstep(0.035, 0.0, abs(dot(cf - c0, normalize(vec2(h2 - 0.5, h3 - 0.5) + 0.01)))) * step(r, 0.5) * (1.0 - smoothstep(40.0, 120.0, dist));
      lit = mix(lit, vec3(0.03, 0.025, 0.02), stalk);
      col = mix(col, lit, leaf * (1.0 - 0.25 * F));
      // flowers: pink buds / blooms on some leaves (summer)
      if (uLotusBloom > 0.01) {
        float fl = step(0.82, h3) * step(h2, uLotusBloom) * smoothstep(0.09, 0.05, length(cf - c0 - vec2(0.1, 0.06))) * patchK;
        fl = mix(fl, 0.12 * uLotusBloom * patchK, smoothstep(50.0, 200.0, dist));
        col = mix(col, vec3(0.95, 0.42, 0.55) * (uAmbient * 1.4 + uLightCol * 0.8), fl);
      }
    }
  }`,
    update(t) {
      ((e.uLotus.value = t.lotus),
        (e.uLotusBloom.value = t.lotusBloom),
        (e.uLotusDead.value = t.lotusDead));
    },
  };
}
var o1 = 1.1,
  s1 = 0.15,
  c1 = -1,
  l1 = 2.45;
function u1() {
  let e = [
      { axis: `x`, at: Qy, from: rb, to: $y, dir: 1, stone: !0 },
      { axis: `z`, at: rb, from: d1(rb), to: Qy, dir: -1, stone: !1 },
      { axis: `z`, at: $y, from: tb, to: Qy, dir: 1, stone: !0 },
      { axis: `x`, at: tb, from: eb, to: $y, dir: -1, stone: !0 },
      { axis: `z`, at: eb, from: nb, to: tb, dir: 1, stone: !0 },
      { axis: `x`, at: nb, from: eb, to: eb + 46, dir: 1, stone: !1 },
      {
        axis: `z`,
        at: Ip.inner.minZ,
        from: Ip.inner.minX,
        to: Jv.faceX,
        dir: -1,
        stone: !0,
        bei: !0,
      },
      {
        axis: `z`,
        at: Ip.inner.maxZ,
        from: Ip.inner.minX,
        to: Jv.faceX,
        dir: 1,
        stone: !0,
        bei: !0,
      },
      {
        axis: `x`,
        at: Ip.inner.minX,
        from: Ip.inner.minZ,
        to: Ip.inner.maxZ,
        dir: -1,
        stone: !0,
        bei: !0,
      },
      {
        axis: `x`,
        at: Jv.faceX,
        from: Ip.inner.minZ,
        to: jb.minZ,
        dir: 1,
        stone: !0,
        bei: !0,
        hidden: !0,
      },
      {
        axis: `x`,
        at: Jv.faceX,
        from: jb.maxZ,
        to: Ip.inner.maxZ,
        dir: 1,
        stone: !0,
        bei: !0,
        hidden: !0,
      },
      {
        axis: `z`,
        at: jb.minZ,
        from: jb.minX,
        to: jb.maxX,
        dir: 1,
        stone: !0,
        hidden: !0,
      },
      {
        axis: `z`,
        at: jb.maxZ,
        from: jb.minX,
        to: jb.maxX,
        dir: -1,
        stone: !0,
        hidden: !0,
      },
      {
        axis: `x`,
        at: jb.minX,
        from: jb.minZ,
        to: Mb.minZ,
        dir: 1,
        stone: !0,
        hidden: !0,
      },
      {
        axis: `x`,
        at: jb.minX,
        from: Mb.maxZ,
        to: jb.maxZ,
        dir: 1,
        stone: !0,
        hidden: !0,
      },
      {
        axis: `z`,
        at: Mb.minZ,
        from: Mb.x1,
        to: Mb.x0,
        dir: -1,
        stone: !0,
        hidden: !0,
      },
      {
        axis: `z`,
        at: Mb.maxZ,
        from: Mb.x1,
        to: Mb.x0,
        dir: 1,
        stone: !0,
        hidden: !0,
      },
    ],
    t = [];
  for (let n of e) {
    let e = [[n.from, n.to]];
    for (let t of Tb) {
      let r = Math.min(
          t.x - t.half * Math.abs(t.dz) - 0.01,
          t.x + t.dx * t.len,
        ),
        i = Math.max(t.x + t.half * Math.abs(t.dz) + 0.01, t.x + t.dx * -6),
        a = Math.min(t.z - t.half * Math.abs(t.dx) - 0.01, t.z + t.dz * t.len),
        o = Math.max(t.z + t.half * Math.abs(t.dx) + 0.01, t.z + t.dz * -6),
        [s, c, l, u] = n.axis === `x` ? [a, o, r, i] : [r, i, a, o];
      if (n.at < l || n.at > u) continue;
      let d = [];
      for (let [t, n] of e)
        c <= t || s >= n
          ? d.push([t, n])
          : (s > t && d.push([t, s]), c < n && d.push([c, n]));
      e = d;
    }
    for (let [r, i] of e) i - r > 0.3 && t.push({ ...n, from: r, to: i });
  }
  return t;
}
var d1 = (e) => _b(e);
function f1(e) {
  for (let t = -6; t < 0; t += 0.5)
    for (let n of [-1, 1]) {
      let r = n * (e.half + 0.8);
      if (zb(e.x + e.dx * t - e.dz * r, e.z + e.dz * t + e.dx * r) > 0.5)
        return t;
    }
  return -0.5;
}
function p1(e, t) {
  let n = 0.6,
    [r, i, a, o] =
      e.axis === `x`
        ? [e.at - e.dir * n, t, e.at + e.dir * n, t]
        : [t, e.at - e.dir * n, t, e.at + e.dir * n];
  return [zb(r, i), zb(a, o)];
}
var m1 = 11,
  h1 = () => (m1 = (Math.imul(m1, 1103515245) + 12345) >>> 0) / 4294967296;
function g1(e, t, n, r, i, a, o = 0) {
  let s = t.at + t.dir * o;
  t.axis === `x`
    ? t.dir > 0
      ? e.quad(s, i, r, s, i, n, s, a, n, s, a, r)
      : e.quad(s, i, n, s, i, r, s, a, r, s, a, n)
    : t.dir > 0
      ? e.quad(n, i, s, r, i, s, r, a, s, n, a, s)
      : e.quad(r, i, s, n, i, s, n, a, s, r, a, s);
}
