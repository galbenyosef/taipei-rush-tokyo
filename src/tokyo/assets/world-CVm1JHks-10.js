// tokyo/assets/world-CVm1JHks 10 — push
// Lines 3029-3317 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Sn() {
  let e = [],
    t = [],
    n = [];
  for (let r = 0; r < 88; r++) {
    let i = Ut[r],
      a = i ? Bt[i] : null;
    (e.push(
      a
        ? `vec4(${a.floor.toFixed(1)}, ${a.ceil.toFixed(1)}, ${a.counter.toFixed(1)}, ${a.people.toFixed(2)})`
        : `vec4(-1.0)`,
    ),
      t.push(
        a
          ? `vec4(${a.shelves.toFixed(1)}, ${a.depth[0].toFixed(2)}, ${a.depth[1].toFixed(2)}, ${a.warm.toFixed(2)})`
          : `vec4(0.0)`,
      ),
      n.push(
        a
          ? `vec4(${xn(a.counterCol)}, ${a.staff ? `1.0` : `0.0`})`
          : `vec4(0.0)`,
      ));
  }
  let r = Vt.flatMap(([e, t]) => [xn(e), xn(t)]),
    i = Ft.x1 - Ft.x0,
    a = Ft.y1 - Ft.y0;
  return `
#define B_NT 88
const vec4 B_RA[B_NT] = vec4[B_NT](${e.join(`, `)});
const vec4 B_RB[B_NT] = vec4[B_NT](${t.join(`, `)});
const vec4 B_RC[B_NT] = vec4[B_NT](${n.join(`, `)});
const vec3 B_FLOORC[${r.length}] = vec3[${r.length}](${r.join(`, `)});
const vec3 B_SHIRT[${Ht.length}] = vec3[${Ht.length}](${Ht.map(xn).join(`, `)});
const float B_PAD = 3.0 / 256.0;
const float B_SPAN = 1.0 - 2.0 * B_PAD;
vec2 bWallUv(vec2 tOrg, vec2 bw) {
  vec2 lt = vec2(${Ft.x0.toFixed(1)} + clamp(bw.x, 0.0, 1.0) * ${i.toFixed(1)}, ${Ft.y1.toFixed(1)} - clamp(bw.y, 0.0, 1.0) * ${a.toFixed(1)}) / 256.0;
  return (tOrg + vec2(B_PAD) + lt * B_SPAN) * vec2(1.0 / BLD_COLS, 1.0 / BLD_ROWS);
}
vec3 bWall(vec2 tOrg, vec2 bw, vec2 g1, vec2 g2) { return textureGrad(uAtlas, bWallUv(tOrg, bw), g1, g2).rgb; }
float bSdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
/** a standing person (plane parallel to the glass, zp metres deep, xp across the cell): blends into col, may take t */
void bPerson(vec3 p, vec3 d, float kU, float mU, float mV, float xp, float zp, float s, vec3 shirt, float sd, vec3 lightC, float fpx, inout float t, inout vec3 col) {
  float tp = zp * kU / d.z;
  if (tp >= t) return;
  vec3 q = p + d * tp;
  vec2 l = vec2((q.x - xp) * mU, q.y * mV) / s;
  float head = length(vec2(l.x * 1.1, l.y - 1.56)) - 0.105;
  float torso = bSdBox(l - vec2(0.0, 1.18), vec2(0.15, 0.23)) - 0.055;
  float legs = bSdBox(vec2(abs(l.x) - 0.075, l.y - 0.47), vec2(0.062, 0.47));
  float dd = min(head, min(torso, legs));
  float fp = fpx * (1.0 + tp) / s;
  float cov = 1.0 - smoothstep(-fp, fp, dd);
  if (cov <= 0.001) return;
  vec3 skin = vec3(0.5, 0.33, 0.23), hair = vec3(0.016, 0.014, 0.012);
  vec3 pants = mix(vec3(0.03, 0.035, 0.05), vec3(0.28, 0.24, 0.18), step(0.7, fract(sd * 7.7)));
  float faceAway = step(0.62, fract(sd * 3.1));
  vec3 pc = head < 0.0 ? mix(skin, hair, clamp(step(1.585, l.y) + faceAway, 0.0, 1.0)) : (torso < 0.01 ? shirt : pants);
  // lit from the ceiling: brighter shoulders, a soft rim on the silhouette edge
  pc = (pc + 0.02) * lightC * (0.5 + 0.6 * smoothstep(0.1, 1.7, l.y)) * (1.0 + 0.35 * smoothstep(-2.0 * fp, 0.0, dd));
  col = mix(col, pc, cov);
  if (cov > 0.5) t = tp;
}
/**
 * Interior mapping: the view ray enters the storefront glass at (fr, 0) and travels through a box room (cell width ×
 * cell height × depth). Cell size in metres comes from the screen-space derivatives of the flat quad (udx/udy uv,
 * pdx/pdy world position), so wide shopfronts, narrow bays and tall ground floors all get correct perspective.
 */
vec3 bRoom(int ti, vec2 fr, vec2 tOrg, vec2 udx, vec2 udy, vec2 gdx, vec2 gdy, vec3 pdx, vec3 pdy, float uh) {
  vec4 A = B_RA[ti], Bq = B_RB[ti], Cq = B_RC[ti];
  vec3 N = normalize(vWN);
  vec3 Tt = vec3(N.z, 0.0, -N.x);
  vec3 V = vCRel;
  float sx = dot(pdx, Tt), sy = dot(pdy, Tt);
  float kUs = (udx.x * sx + udy.x * sy) / max(sx * sx + sy * sy, 1e-12);
  float kVs = (udx.y * pdx.y + udy.y * pdy.y) / max(pdx.y * pdx.y + pdy.y * pdy.y, 1e-12);
  float kU = clamp(abs(kUs), 0.05, 3.0), kV = clamp(abs(kVs), 0.05, 3.0);
  vec3 d = vec3(dot(V, Tt) * (kUs < 0.0 ? -kU : kU), V.y * (kVs < 0.0 ? -kV : kV), -dot(V, N) * kU);
  if (d.z < 1e-4) return vec3(0.0);
  if (abs(d.x) < 1e-5) d.x = 1e-5;
  if (abs(d.y) < 1e-5) d.y = 1e-5;
  float mU = 1.0 / kU, mV = 1.0 / kV;
  vec3 p = vec3(fr, 0.0);
  float r1 = fract(uh * 17.13), r2 = fract(uh * 61.7 + 0.21), r3 = fract(uh * 137.9 + 0.57), r4 = fract(uh * 311.3 + 0.83), r5 = fract(uh * 733.1 + 0.37);
  float Dm = mix(Bq.y, Bq.z, r1);
  vec3 tb = (vec3(step(0.0, d.x), step(0.0, d.y), Dm * kU) - p) / d;
  float t = min(tb.x, min(tb.y, tb.z));
  vec3 h = p + d * t;
  float hz = h.z * mU;
  // (no mirroring: back walls carry menus and signs) — per-shop crop of the back wall instead
  float mir = 0.0;
  float crop = 0.16 * r2;
  // texture footprint grows with the distance behind the glass; clamp the mip so tiles never bleed
  float texN = float(textureSize(uAtlas, 0).x);
  vec2 g1 = gdx * (1.0 + t), g2 = gdy * (1.0 + t);
  float gg = max(dot(g1, g1), dot(g2, g2)) * texN * texN;
  float lk = exp2(min(0.0, 4.0 - 0.5 * log2(max(gg, 1e-8))));
  g1 *= lk;
  g2 *= lk;
  float ceilT = A.y;
  vec3 lightC = mix(vec3(0.9, 0.96, 1.0), vec3(1.0, 0.84, 0.64), clamp(Bq.w + (r5 - 0.5) * 0.35, 0.0, 1.0));
  // some tube-lit shops have LED panels instead, some panel-lit ones tubes
  if (ceilT < 0.5 && r3 > 0.7) ceilT = 4.0; else if (ceilT > 3.5 && r3 > 0.75) ceilT = 0.0;
  if (abs(ceilT - 3.0) < 0.5) lightC = vec3(1.0, 0.72, 0.95);
  float fpx = length(pdx) * 1.2;
  vec3 col;
  if (t == tb.z) {
    col = bWall(tOrg, vec2(crop * r4 + h.x * (1.0 - crop), h.y), g1 * (1.0 - crop), g2 * (1.0 - crop));
  } else if (t == tb.x) {
    // side wall: the back wall's edge strip repeats along the depth (shelving), or its plain wall colour
    float su = fract(hz / 1.35 + r3) * 0.2;
    float ex = d.x > 0.0 ? 1.0 - su : su;
    float lodS = min(4.0 + log2(texN / 2048.0), 0.5 * log2(max(max(dot(gdx, gdx), dot(gdy, gdy)) * texN * texN, 1e-8)) + log2(1.0 + t) + 0.6);
    vec3 shelf = textureLod(uAtlas, bWallUv(tOrg, vec2(mix(ex, 1.0 - ex, mir), h.y)), lodS).rgb;
    // plain side wall: the back wall's own upper-wall colour above a wainscot sampled from its bottom edge
    float lbS = 2.6 + log2(texN / 2048.0);
    vec3 plain = mix(textureLod(uAtlas, bWallUv(tOrg, vec2(0.05, 0.1)), lbS).rgb, textureLod(uAtlas, bWallUv(tOrg, vec2(0.05, 0.86)), lbS).rgb, smoothstep(1.0, 1.1, h.y * mV));
    // shelving reaches ~2.4 m; above it the side wall is plain (no repeated posters / header strips)
    col = mix(plain, shelf, Bq.x * (1.0 - smoothstep(2.3, 2.45, h.y * mV))) * 0.74;
    col *= 0.72 + 0.28 * smoothstep(0.0, 0.8, Dm - hz);
  } else if (d.y < 0.0) {
    // floor tiles / planks, darker along the walls
    int fi = int(A.x + 0.5) * 2;
    vec3 fa = B_FLOORC[fi], fb = B_FLOORC[fi + 1];
    vec2 fm = vec2(h.x * mU, hz);
    bool wood = abs(A.x - 2.0) < 0.5;
    vec2 tsz = wood ? vec2(1.2, 0.16) : vec2(0.6);
    float row = floor(fm.y / tsz.y);
    vec2 tc = vec2(floor(fm.x / tsz.x + (wood ? row * 0.37 : 0.0)), row);
    float chk = wood ? fract(sin(dot(tc, vec2(12.9898, 78.233))) * 43758.5453) : mod(tc.x + tc.y, 2.0);
    float aa = 1.0 - smoothstep(0.08, 0.35, fpx * (1.0 + t) * 3.0 / tsz.y);
    vec2 gf = abs(fract(fm / tsz + vec2(wood ? row * 0.37 : 0.0, 0.0)) - 0.5);
    float grout = smoothstep(0.46, 0.5, max(gf.x, gf.y)) * aa;
    col = mix((fa + fb) * 0.5, mix(fa, fb, chk), aa) * (1.0 - 0.3 * grout);
    float wd = min(h.x, 1.0 - h.x) * mU;
    col *= (0.66 + 0.34 * smoothstep(0.0, 0.9, wd)) * (0.72 + 0.28 * smoothstep(0.0, 0.9, Dm - hz)) * 0.9;
  } else {
    // ceiling: fluorescent tubes / LED panels / downlights / old warm tubes / dark lounge with an LED cove
    float xm = h.x * mU;
    col = ceilT > 2.5 && ceilT < 3.5 ? vec3(0.012, 0.01, 0.014) : (ceilT > 1.5 && ceilT < 2.5 ? vec3(0.36, 0.32, 0.26) : vec3(0.56, 0.56, 0.54));
    float lamp = 0.0;
    if (ceilT < 0.5 || ceilT > 3.5) {
      float lanes = ceilT > 3.5 ? 1.4 : 1.7;
      float lane = abs(fract(xm / lanes + 0.5 * r4) - 0.5) * lanes;
      float seg = step(fract(hz / 1.8 + r5), 0.72);
      float w = ceilT > 3.5 ? 0.14 : 0.05;
      lamp = (1.0 - smoothstep(w, w + 0.04, lane)) * seg;
      col += 0.14 * (1.0 - smoothstep(w, w + 0.6, lane));
    } else if (ceilT < 1.5) {
      vec2 c = (fract(vec2(xm, hz) / 1.3 + vec2(r4, r5)) - 0.5) * 1.3;
      float rr = length(c);
      lamp = 1.0 - smoothstep(0.07, 0.1, rr);
      col += 0.22 * (1.0 - smoothstep(0.1, 0.5, rr));
    } else if (ceilT < 2.5) {
      float lane = abs(fract(xm / 2.4 + 0.5) - 0.5) * 2.4;
      float seg = step(fract(hz / 2.8 + r5), 0.45);
      lamp = (1.0 - smoothstep(0.045, 0.08, lane)) * seg;
    } else {
      float e = min(h.x, 1.0 - h.x) * mU;
      col += vec3(0.5, 0.06, 0.4) * (1.0 - smoothstep(0.0, 0.3, e)) + vec3(0.05, 0.3, 0.45) * (1.0 - smoothstep(0.0, 0.3, Dm - hz));
    }
    col = mix(col, vec3(1.2), lamp);
  }
  col *= lightC;
  // ---- mid-ground: counter / display cases / gondolas, clerk, shoppers
  float ct = A.z, cx0 = 0.0, cx1 = 0.0, zc = 0.0;
  if (ct > 0.5) {
    float hc = 1.0;
    if (ct < 1.5) { float sd = step(0.5, r3); cx0 = mix(0.06, 0.56, sd); cx1 = cx0 + 0.38; zc = mix(1.3, 2.2, r4); }
    else if (ct < 2.5) { cx0 = 0.03; cx1 = 0.97; zc = mix(0.7, 1.05, r4); hc = 1.02; }
    else if (ct < 3.5) { cx0 = 0.07; cx1 = 0.93; zc = mix(1.1, 1.8, r4); hc = 0.95; }
    else if (ct < 4.5) { cx0 = 0.04; cx1 = 0.96; zc = max(1.4, Dm - 1.3); hc = 1.05; }
    else { cx0 = 0.1; cx1 = 0.9; zc = mix(2.2, 3.4, r4); hc = 1.45; }
    zc = min(zc, Dm - 0.5);
    float tcz = zc * kU / d.z;
    if (tcz < t) {
      vec3 q = p + d * tcz;
      float qy = q.y * mV;
      bool gap = (ct > 2.5 && ct < 3.5 && abs(q.x - 0.5) < 0.035) || (ct > 4.5 && abs(q.x - 0.5) < 0.09);
      if (q.x > cx0 && q.x < cx1 && qy < hc && !gap) {
        t = tcz;
        hz = zc;
        vec3 cc = Cq.rgb;
        if (ct > 4.5) cc = bWall(tOrg, vec2(fract(q.x * 1.3 + r2), 0.05 + qy / hc * 0.28), g1, g2);
        else if (ct > 2.5 && ct < 3.5) {
          float inside = step(0.32, qy) * step(qy, hc - 0.07);
          vec3 goods = bWall(tOrg, vec2(fract(q.x * 2.1 + r2), 0.42 + (qy - 0.32) * 0.3), g1, g2);
          cc = mix(cc * 0.55, mix(vec3(0.95), goods, 0.55) * 1.1, inside);
        }
        col = cc * lightC * (0.6 + 0.4 * smoothstep(0.0, hc, qy));
        col = mix(col, lightC * 0.95, step(hc - 0.03, qy) * 0.55);
      } else if (d.y < 0.0 && p.y * mV > hc) {
        float tt = (hc * kV - p.y) / d.y;
        if (tt < t) {
          vec3 qt = p + d * tt;
          float zz = qt.z * mU;
          if (qt.x > cx0 && qt.x < cx1 && zz > zc && zz < zc + 0.6) {
            t = tt;
            hz = zz;
            col = mix(Cq.rgb, vec3(0.75), 0.4) * lightC;
          }
        }
      }
    }
    if (Cq.w > 0.5) bPerson(p, d, kU, mU, mV, mix(cx0 + 0.1, cx1 - 0.1, r5), min(zc + 0.55, Dm - 0.2), 0.97 + 0.08 * r3, B_SHIRT[int(r2 * 7.99)], r4, lightC, fpx, t, col);
  }
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    float pr = fract(uh * (23.7 + fi * 41.3) + fi * 0.5);
    if (pr * 2.0 >= A.w) continue;
    float zp = mix(1.0, max(1.2, Dm - 1.0), fract(pr * 7.13 + fi * 0.37));
    if (ct > 0.5 && abs(zp - zc) < 0.45) zp = max(0.8, zc - 0.5);
    float xp = mix(0.15, 0.85, fract(pr * 13.37 + fi * 0.61));
    bPerson(p, d, kU, mU, mV, xp, zp, 0.92 + 0.14 * fract(pr * 5.3), B_SHIRT[int(fract(pr * 3.7) * 7.99)], pr, lightC, fpx, t, col);
  }
  col *= 1.0 - 0.35 * smoothstep(2.0, 12.0, hz);
  return col * vTint;
}
`;
}
var Cn = `
const float B_OPH[${mn.length}] = ${yn(mn)};
const float B_CLH[${hn.length}] = ${yn(hn)};
float bShopOpen(float code, float hour) {
  float oi = floor(code / ${hn.length.toFixed(1)} + 0.001);
  float ci = code - oi * ${hn.length.toFixed(1)};
  float oh = B_OPH[int(clamp(oi, 0.0, ${(mn.length - 1).toFixed(1)}))];
  float ch = B_CLH[int(clamp(ci, 0.0, ${(hn.length - 1).toFixed(1)}))];
  float h = hour < 5.0 ? hour + 24.0 : hour;
  return oh < 0.0 ? 1.0 : step(oh, h) * step(h, ch);
}
`,
  wn = {
    RES: 0,
    SHOP: 1,
    CEIL: 2,
    OFFICE: 3,
    NONE: 4,
    LIT: 5,
    SIGN: 6,
    SCREEN: 7,
    TICKER: 8,
  },
  Tn = {
    uLitRes: { value: 0.55 },
    uLitOff: { value: 0.25 },
    uFakeRefl: { value: 1 },
    uSkyCol: { value: new E(12109526) },
    uRooms: { value: 1 },
    uHour: { value: 12 },
  },
  En = [
    [0, 0.3],
    [2, 0.12],
    [5, 0.08],
    [6.5, 0.3],
    [8, 0.16],
    [17, 0.2],
    [19, 0.5],
    [21, 0.55],
    [22, 0.5],
    [24, 0.3],
  ],
  Dn = [
    [0, 0.06],
    [2, 0.035],
    [5, 0.04],
    [7, 0.2],
    [9, 0.6],
    [17, 0.6],
    [19, 0.4],
    [21, 0.25],
    [23, 0.08],
    [24, 0.06],
  ];
function On(e, t) {
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0])
      return (
        e[n - 1][1] +
        ((t - e[n - 1][0]) / (e[n][0] - e[n - 1][0])) * (e[n][1] - e[n - 1][1])
      );
  return e[e.length - 1][1];
}
function kn(e) {
  ((Tn.uLitRes.value = On(En, e)),
    (Tn.uLitOff.value = On(Dn, e)),
    (Tn.uHour.value = e));
}
