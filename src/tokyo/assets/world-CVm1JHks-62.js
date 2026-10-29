// tokyo/assets/world-CVm1JHks 62 — uniforms
// Lines 20246-20492 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Qm(e, t) {
  let n = new H({ vertexColors: !0, map: e });
  n.name = `env-props-${t}`;
  let r = { value: +(t === `lod`) };
  return (
    (n.defines = { FOG_NO_CLIP: `` }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = q.uNight),
        (e.uniforms.uTime = q.uTime),
        (e.uniforms.uWet = q.uWet),
        (e.uniforms.uWheelCenter = Zm.uWheelCenter),
        (e.uniforms.uLitFrac = Zm.uLitFrac),
        (e.uniforms.uWheelAngle = Zm.uWheelAngle),
        (e.uniforms.uLodNear = Zm.uLodNear),
        (e.uniforms.uLodCull = r),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;
varying vec3 vPWorld;
varying vec3 vPNrm;
uniform vec3 uWheelCenter;
uniform float uWheelAngle;
attribute vec3 aBoxC;
attribute vec3 aBoxH;
uniform float uLodNear;
uniform float uLodCull;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
        if (uLodCull > 0.5) {
          // city LOD: drop the whole owner box while any part of it is nearer than uLodNear (view depth): the real
          // city still covers that range, and a box crossing the far camera's near plane would be sliced
          vec3 lr2 = vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
          float lDepth = -(dot(lr2, aBoxC) + viewMatrix[3][2]);
          if (aBoxH.x >= 0.0 && lDepth - dot(abs(lr2), aBoxH) < uLodNear) gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
        }`,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
        if (aEmit.z < -0.5) {
          float wc = cos(uWheelAngle), ws = sin(uWheelAngle);
          objectNormal = vec3(wc * objectNormal.x - ws * objectNormal.y, ws * objectNormal.x + wc * objectNormal.y, objectNormal.z);
        }`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        if (aEmit.z < -0.5) {
          // ferris wheel parts spin around the hub (props mesh is in world space)
          float wc = cos(uWheelAngle), ws = sin(uWheelAngle);
          vec3 wd = transformed - uWheelCenter;
          transformed = uWheelCenter + vec3(wc * wd.x - ws * wd.y, ws * wd.x + wc * wd.y, wd.z);
        }
        vEmit = aEmit;
        vPWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vPNrm = normalize(mat3(modelMatrix) * objectNormal);`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
        uniform float uNight;
        uniform float uTime;
        uniform float uWet;
        uniform vec3 uWheelCenter;
        uniform float uLitFrac;
        varying vec3 vEmit;
        varying vec3 vPWorld;
        varying vec3 vPNrm;
        ${Ep}
        vec3 eHue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
        // one family of lattice lines at integer t, half-width w (in cells), anti-aliased; its mean coverage once a cell
        // shrinks under ~2 px (no moiré on a 2 km tower)
        float tkLatLine(float t, float w) {
          float fw = max(fwidth(t), 1e-4);
          float d = abs(fract(t + 0.5) - 0.5);
          return mix(clamp((w - d) / fw + 0.5, 0.0, 1.0), 2.0 * w, smoothstep(0.3, 0.75, fw));
        }`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        float pWinLit = 0.0;
        float pWinCage = 0.0;
        vec3 pWinTint = vec3(1.0);
        vec3 pWinCol = vec3(0.0);
        if (vEmit.z > 1003.5 && vEmit.z < 1005.5) {
          // 《東京狂飆》 the Skytree's steel truss (regions/tokyo/environment/skytree.ts): the UV is a lattice coordinate
          // (u × 64 = diamonds round, v × 256 = diamond rows), not an atlas texel — diagonals both ways, a ring every second
          // row, a column at every diamond vertex; between them the shadowed inner structure. 1005 = the night skin
          // (environment/lights.ts): lit lines, dim gaps.
          vec2 lq = vec2(vMapUv.x * 64.0, vMapUv.y * 256.0);
          bool lDay = vEmit.z < 1004.5;
          float lw = 0.08;
          float lm = 1.0 - (1.0 - tkLatLine(lq.x + lq.y, lw)) * (1.0 - tkLatLine(lq.x - lq.y, lw))
            * (1.0 - tkLatLine(lq.y * 0.5, lDay ? lw * 0.7 : lw * 0.4)) * (1.0 - tkLatLine(lq.x, lw * 0.5));
          vec3 lgap = lDay ? vec3(0.42, 0.47, 0.54) : vec3(0.1);
          diffuseColor.rgb = diffuse * vColor.rgb * mix(lgap, vec3(1.0), lm);
        } else if (vEmit.z > 999.5 && vPNrm.y > 0.5) {
          // procedural ground surfaces near the camera (edge districts): 1001 = sidewalk tiles, 1002 = asphalt
          float nearP = 1.0 - smoothstep(35.0, 150.0, distance(vPWorld, cameraPosition));
          if (nearP > 0.001) {
            vec2 gp = vPWorld.xz;
            if (vEmit.z < 1001.5) {
              vec2 q = gp / 0.3;
              q.x += step(1.0, mod(floor(q.y), 2.0)) * 0.5;
              vec2 cid = floor(q), fq = fract(q);
              float t = eHash12(cid);
              float joint = 1.0 - smoothstep(0.025, 0.07, min(min(fq.x, 1.0 - fq.x), min(fq.y, 1.0 - fq.y)));
              vec3 tc = diffuseColor.rgb * (0.9 + 0.2 * t);
              if (t > 0.86) tc *= vec3(1.1, 0.93, 0.86);
              tc *= (1.0 - 0.28 * joint) * (0.9 + 0.12 * eNoise(gp * 1.3));
              diffuseColor.rgb = mix(diffuseColor.rgb, tc, nearP);
            } else {
              float n = eNoise(gp * 3.1) * 0.45 + eNoise(gp * 13.0) * 0.3 + eNoise(gp * 0.31) * 0.25;
              diffuseColor.rgb *= mix(1.0, 0.82 + 0.34 * n, nearP);
            }
          }
        } else if (vEmit.z > 1002.5 && vEmit.z < 1003.5) {
          // 1003 = lit shop interior seen through the glazing (edge-district walk-ups): shelves of goods on a
          // bright back wall, a ceiling light band — instead of a flat white lightbox
          float su = abs(vPNrm.x) > 0.5 ? vPWorld.z : vPWorld.x;
          float sy = vPWorld.y;
          float sf = fract(sy / 0.46);
          float board = smoothstep(0.0, 0.05, sf) * (1.0 - smoothstep(0.1, 0.16, sf));
          vec2 pc = floor(vec2(su / 0.16, sy / 0.46));
          float h1 = eHash12(pc + vEmit.x), h2 = eHash12(pc + 7.1);
          vec3 goods = mix(vec3(0.95, 0.9, 0.8), vec3(0.35 + 0.65 * h1, 0.35 + 0.65 * h2, 0.35 + 0.65 * eHash12(pc + 3.3)), 0.55);
          goods *= 0.75 + 0.25 * step(0.25, fract(su / 0.16));
          vec3 wall = mix(goods, vec3(0.92, 0.9, 0.86), board * 0.85);
          // aisle gaps (whole shelf units missing) and a darker counter zone
          wall *= mix(1.0, 0.55, step(0.82, eHash12(vec2(floor(su / 1.3), 2.0))));
          diffuseColor.rgb *= wall;
        } else if (vEmit.z > 0.5 && vEmit.z < 999.5 && abs(vPNrm.y) < 0.5) {
          float wu = abs(vPNrm.x) > 0.5 ? vPWorld.z : vPWorld.x;
          float wv = vPWorld.y;
          vec2 wc = vec2(wu / 3.2, wv / 3.3);
          vec2 cell = floor(wc);
          vec2 f = fract(wc);
          float inWinS = step(0.14, f.x) * step(f.x, 0.86) * step(0.26, f.y) * step(f.y, 0.88);
          // procedural LOD: fwp = window cells per pixel
          float fwp = max(fwidth(wc.x), fwidth(wc.y));
          float aa = smoothstep(0.22, 0.55, fwp);
          float inWin = mix(inWinS, 0.45, aa);
          float bh = eHash12(vec2(vEmit.z, 1.3));
          float lf = uLitFrac * (0.15 + 0.85 * bh * bh);
          vec3 glass = diffuseColor.rgb * 0.32 + vec3(0.025, 0.035, 0.05);
          // close range (edge walk-ups, riverside blocks): Taipei 公寓 facade detail — mosaic-tile grout, grime
          // streaks under the sills, AC boxes, aluminium frames + centre mullion, sky-reflecting glass, curtains
          // and iron window cages (鐵窗). Fades out by ~0.09 window cells per pixel.
          float nearW = 1.0 - smoothstep(0.02, 0.09, fwp);
          if (nearW > 0.001) {
            float r1 = eHash12(cell + vEmit.z * 3.1), r2 = eHash12(cell * 1.7 + 9.2 + bh), r3 = eHash12(cell * 2.3 + 4.1 + vEmit.z);
            vec2 tq = abs(fract(vec2(wu, wv) / 0.21) - 0.5);
            float grout = smoothstep(0.43, 0.49, max(tq.x, tq.y));
            float streak = (1.0 - step(0.26, f.y)) * (1.0 - smoothstep(0.2, 0.36, abs(f.x - 0.5))) * (0.45 + 0.55 * eNoise(vec2(wu * 7.0, wv * 0.6)));
            vec3 wallC = diffuseColor.rgb * (1.0 - nearW * (0.08 * grout + 0.2 * streak));
            if (r3 < 0.32) {
              vec2 ac = (f - vec2(0.72, 0.13)) / vec2(0.12, 0.085);
              if (max(abs(ac.x), abs(ac.y)) < 1.0) {
                wallC = mix(wallC, vec3(0.66, 0.66, 0.64), nearW);
                wallC *= 1.0 - 0.45 * nearW * (1.0 - smoothstep(0.42, 0.55, length((ac - vec2(0.35, 0.0)) * vec2(1.0, 0.72))));
              }
            }
            diffuseColor.rgb = wallC;
            if (inWinS > 0.5) {
              float gy = (f.y - 0.26) / 0.62;
              vec3 g2 = mix(vec3(0.02, 0.024, 0.03), vec3(0.14, 0.16, 0.19), 0.25 + 0.55 * gy + 0.2 * eHash12(cell + 0.7));
              if (r1 < 0.42) {
                float side = step(0.5, f.x);
                vec3 cc = r2 < 0.33 ? vec3(0.55, 0.5, 0.4) : (r2 < 0.66 ? vec3(0.48, 0.38, 0.36) : vec3(0.36, 0.42, 0.46));
                float cm = (r1 < 0.2 ? side : 1.0 - side) * 0.85;
                g2 = mix(g2, cc * 0.55, cm);
                // lit at night: the curtain glows in its own colour, a little dimmer than the open pane
                pWinTint = mix(vec3(1.0), cc * 1.35, cm * nearW);
              }
              float fr = max(max(step(f.x, 0.165), step(0.835, f.x)), max(step(f.y, 0.285), step(0.855, f.y)));
              fr = max(fr, step(abs(f.x - 0.5), 0.012));
              g2 = mix(g2, vec3(0.5, 0.51, 0.52), fr);
              // interior depth: the lit room is brighter at the top (ceiling light), frames never glow
              pWinTint *= (1.0 - fr * nearW) * mix(1.0, 0.75 + 0.35 * gy, nearW);
              if (r2 > 0.52) {
                float bars = step(0.8, fract(f.x * 15.0 + 0.3)) + step(abs(f.y - 0.58), 0.012) + step(abs(f.y - 0.3), 0.012);
                pWinCage = clamp(bars, 0.0, 1.0) * nearW;
                g2 = mix(g2, vec3(0.15, 0.13, 0.11), pWinCage * 0.95);
              }
              glass = mix(glass, g2, nearW);
            }
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, inWin * 0.9);
          // lit windows: near = exact rectangles; far = grouped cells rendered as ~2px light points
          float lvl = max(0.0, ceil(log2(fwp * 3.5)));
          float scl = exp2(min(lvl, 5.0));
          vec2 gc = wc / scl;
          vec2 gcell = floor(gc);
          vec2 gf = fract(gc) - 0.5;
          float r = eHash12((lvl < 0.5 ? cell : gcell * 7.31 + lvl) + vEmit.z * 13.7);
          float pLit = lvl < 0.5 ? lf : 1.0 - pow(1.0 - lf, scl * 0.9);
          // (《東京狂飆》 whole floors lit or dark, as offices and flats read at night — not single sparkling cells)
          if (lvl < 0.5) pLit = step(eHash12(vec2(cell.y, vEmit.z * 1.7 + 0.3)), lf) > 0.5 ? 0.85 : 0.1;
          float shape = lvl < 0.5 ? inWinS : smoothstep(0.42, 0.18, length(gf));
          pWinLit = shape * step(r, pLit) * (lvl < 0.5 ? 1.0 : 0.9);
          // (《東京狂飆》 one light colour per building, a fifth of the windows another: a tower reads as one lit grid,
          // not confetti)
          float wch = eHash12(vec2(vEmit.z, 2.7));
          if (eHash12((lvl < 0.5 ? cell : gcell) + 5.3) < 0.2) wch = fract(wch + 0.5);
          pWinCol = wch < 0.5 ? vec3(1.0, 0.68, 0.36) : (wch < 0.8 ? vec3(0.8, 0.9, 1.0) : vec3(0.85, 1.0, 0.82));
        }
        diffuseColor.rgb *= 1.0 - 0.22 * uWet * step(0.5, vPNrm.y);`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        {
          float mode = vEmit.y;
          float on = uNight;
          if (mode > 0.5 && mode < 1.5) on = 1.0;
          else if (mode > 1.5 && mode < 2.5) on = mix(0.3, 1.0, uNight) * step(0.55, fract(uTime * 0.7 + vEmit.z * 0.37));
          else if (mode > 2.5 && mode < 3.5) on = step(0.9, fract(uTime * 1.05)) + step(0.9, fract(uTime * 1.05 + 0.18));
          else if (mode > 3.5 && mode < 4.5) on = uNight;
          else if (mode > 4.5) on = 1.0;
          vec3 ec = diffuseColor.rgb;
          if (mode > 3.5 && mode < 4.5) {
            vec3 d = vPWorld - uWheelCenter;
            float ang = atan(d.y, d.x) / 6.2831853;
            float rad = length(d.xy) / 36.0;
            float phase = floor(mod(uTime / 12.0, 3.0));
            float h = phase < 0.5 ? ang + uTime * 0.05 : (phase < 1.5 ? rad * 0.8 - uTime * 0.25 : ang * 3.0 - uTime * 0.12);
            ec = eHue(fract(h)) * 0.9 + 0.1;
          }
          totalEmissiveRadiance += ec * vEmit.x * on;
          // lit windows: full strength on distant skylines, softer up close (walk-ups beside the player)
          totalEmissiveRadiance += pWinCol * pWinTint * pWinLit * (1.0 - 0.85 * pWinCage) * 1.25 * mix(0.08, 1.0, uNight) * mix(0.5, 1.0, smoothstep(40.0, 320.0, distance(vPWorld, cameraPosition)));
        }`,
          )));
    }),
    (n.customProgramCacheKey = () => `env-props-tk6`),
    n
  );
}
var $m = 4.5,
  eh = 2.2;
