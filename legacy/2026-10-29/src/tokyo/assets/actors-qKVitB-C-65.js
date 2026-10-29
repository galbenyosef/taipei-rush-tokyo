// tokyo/assets/actors-qKVitB-C 65 — push
// Lines 29650-29997 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function ev(e, t) {
  let n = e,
    r = n._tr;
  (r ||
    ((r = n._tr = { start: 0, count: 0 }),
    (e.updateRanges = [r]),
    (e.clearUpdateRanges = $_)),
    (r.count = t),
    (e.needsUpdate = !0));
}
function tv(e, t) {
  let n = e.index ? e.toNonIndexed() : e;
  n.deleteAttribute(`uv`);
  let r = n.attributes.position.count;
  return (n.setAttribute(`part`, new P(new Float32Array(r).fill(t), 1)), n);
}
function nv(e, t, n, r, i, a, o, s = 0, c = 0) {
  let l = new F(e, t, n);
  return (s && l.rotateX(s), c && l.rotateY(c), l.translate(r, i, a), tv(l, o));
}
function rv(e, t, n, r, i, a, o, s) {
  let c = r - e,
    l = i - t,
    u = a - n,
    d = Math.hypot(c, l, u),
    f = new F(o, d, o * 1.1),
    p = new I().setFromUnitVectors(new L(0, 1, 0), new L(c / d, l / d, u / d));
  return (
    f.applyQuaternion(p),
    f.translate((e + r) / 2, (t + i) / 2, (n + a) / 2),
    tv(f, s)
  );
}
function iv(e, t, n, r, i, a = 1, o = 1) {
  let s = new _(e, 10, 7, 0, Math.PI * 2, 0, Math.PI * 0.7);
  return (s.scale(1, a, o), s.translate(t, n, r), tv(s, i));
}
function av(e, t, n, r, i) {
  let [a, o, s, c] = t,
    [l, u, d, f] = r,
    p = [
      [a - s, e, o - c],
      [a + s, e, o - c],
      [a + s, e, o + c],
      [a - s, e, o + c],
      [l - d, n, u - f],
      [l + d, n, u - f],
      [l + d, n, u + f],
      [l - d, n, u + f],
    ],
    m = [
      [0, 1, 2, 3],
      [4, 7, 6, 5],
      [0, 4, 5, 1],
      [1, 5, 6, 2],
      [2, 6, 7, 3],
      [3, 7, 4, 0],
    ],
    h = [];
  for (let e of m) {
    let [t, n, r, i] = e.map((e) => p[e]);
    h.push(...t, ...r, ...n, ...t, ...i, ...r);
  }
  let g = new pe();
  return (
    g.setAttribute(`position`, new j(h, 3)),
    g.computeVertexNormals(),
    tv(g, i)
  );
}
function ov(e = 0.78, t = 0.1) {
  let n = e,
    r = t,
    i = [];
  i.push(nv(0.34, 0.18, 0.3, 0, n + 0.07, r + 0.02, 2));
  for (let e of [-1, 1]) {
    let t = e < 0;
    (i.push(
      rv(
        e * 0.1,
        n + 0.08,
        r + 0.02,
        e * 0.12,
        n + 0.02,
        r - 0.4,
        0.14,
        t ? 19 : 2,
      ),
    ),
      i.push(
        rv(
          e * 0.12,
          n + 0.02,
          r - 0.42,
          e * 0.13,
          0.4,
          r - 0.46,
          0.12,
          t ? 15 : 2,
        ),
      ),
      i.push(nv(0.11, 0.08, 0.24, e * 0.13, 0.37, r - 0.52, t ? 16 : 5)),
      t &&
        (i.push(
          rv(-0.1, n + 0.08, r + 0.02, -0.25, n - 0.02, r - 0.3, 0.14, 20),
        ),
        i.push(rv(-0.25, n - 0.02, r - 0.3, -0.43, 0.09, r - 0.26, 0.12, 17)),
        i.push(nv(0.12, 0.08, 0.25, -0.45, 0.04, r - 0.33, 18))));
    let a = e * 0.2,
      o = n + 0.6,
      s = r - 0.1,
      c = e * 0.27,
      l = n + 0.4,
      u = r - 0.38,
      d = e * 0.29,
      f = n + 0.26,
      p = r - 0.66;
    (i.push(rv(a, o, s, c, l, u, 0.1, 1)),
      i.push(rv(c, l, u, d, f, p, 0.09, 1)),
      i.push(nv(0.08, 0.08, 0.1, d, f, p - 0.03, 0)));
  }
  (i.push(nv(0.4, 0.52, 0.25, 0, n + 0.4, r - 0.03, 1, -0.22)),
    i.push(nv(0.11, 0.08, 0.11, 0, n + 0.69, r - 0.1, 0)),
    i.push(nv(0.17, 0.2, 0.19, 0, n + 0.83, r - 0.13, 0)),
    i.push(iv(0.168, 0, n + 0.845, r - 0.125, 3, 1.04, 1.12)),
    i.push(nv(0.2, 0.022, 0.06, 0, n + 0.915, r - 0.305, 4, -0.18)),
    i.push(nv(0.15, 0.085, 0.03, 0, n + 0.78, r - 0.225, 6)));
  let a = r + 0.42;
  i.push(nv(0.32, 0.16, 0.28, 0, n + 0.13, a, 10));
  for (let e of [-1, 1])
    (i.push(rv(e * 0.1, n + 0.14, a, e * 0.15, n + 0.08, a - 0.32, 0.13, 10)),
      i.push(
        rv(e * 0.15, n + 0.08, a - 0.32, e * 0.17, 0.5, a - 0.28, 0.11, 10),
      ),
      i.push(
        rv(e * 0.18, n + 0.6, a - 0.02, e * 0.2, n + 0.34, a - 0.2, 0.09, 7),
      ),
      i.push(
        rv(e * 0.2, n + 0.34, a - 0.2, e * 0.17, n + 0.3, a - 0.36, 0.085, 7),
      ));
  (i.push(nv(0.36, 0.48, 0.23, 0, n + 0.43, a + 0.02, 7, -0.08)),
    i.push(nv(0.16, 0.19, 0.18, 0, n + 0.84, a - 0.02, 8)),
    i.push(iv(0.16, 0, n + 0.855, a - 0.02, 9, 1.04, 1.1)),
    i.push(nv(0.46, 0.42, 0.42, 0, n + 0.44, r + 0.66, 11)),
    i.push(nv(0.47, 0.05, 0.43, 0, n + 0.62, r + 0.66, 13)),
    i.push(
      av(
        n + 0.66,
        [0, r - 0.06, 0.24, 0.16],
        n - 0.12,
        [0, r - 0.28, 0.36, 0.56],
        12,
      ),
    ),
    i.push(
      av(
        n + 0.64,
        [0, a + 0.02, 0.22, 0.14],
        n - 0.02,
        [0, a + 0.18, 0.33, 0.34],
        14,
      ),
    ));
  let o = An(i, !1),
    s = o.attributes.position.count;
  return (
    o.setAttribute(`color`, new P(new Float32Array(s * 3).fill(1), 3)),
    o.computeBoundingSphere(),
    o
  );
}
function sv() {
  let e = new E({ vertexColors: !0 });
  return (
    (e.name = `traffic-riders`),
    (e.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute float part;
attribute vec3 iJacket;
attribute vec3 iHelmet;
attribute vec3 iAlt;
attribute vec4 iMisc;`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
float hide = 0.0;
float maskOn = mod(iMisc.w, 2.0);
float stopped = step(1.5, iMisc.w);
if (part > 6.5 && part < 10.5 && iMisc.x < 0.5) hide = 1.0;
if (part > 13.5 && part < 14.5 && (iMisc.x < 0.5 || iMisc.z < 0.5)) hide = 1.0;
if (((part > 10.5 && part < 11.5) || (part > 12.5 && part < 13.5)) && iMisc.y < 0.5) hide = 1.0;
if (part > 11.5 && part < 12.5 && iMisc.z < 0.5) hide = 1.0;
if (part > 5.5 && part < 6.5 && maskOn < 0.5) hide = 1.0;
bool legUp = (part > 14.5 && part < 16.5) || (part > 18.5 && part < 19.5);
bool legDn = (part > 16.5 && part < 18.5) || part > 19.5;
if (legUp && stopped > 0.5) hide = 1.0;
if (legDn && stopped < 0.5) hide = 1.0;
if (hide > 0.5) transformed = vec3(0.0);`,
        )
        .replace(
          `#include <color_vertex>`,
          `#include <color_vertex>
vec3 pc = vec3(1.0);
if (part < 0.5) pc = vec3(0.58, 0.32, 0.19);
else if (part < 1.5) pc = iJacket;
else if (part < 2.5) pc = vec3(0.012, 0.014, 0.022);
else if (part < 3.5) pc = iHelmet;
else if (part < 4.5) pc = vec3(0.006, 0.007, 0.009);
else if (part < 5.5) pc = vec3(0.008, 0.008, 0.01);
else if (part < 6.5) pc = vec3(0.36, 0.6, 0.8);
else if (part < 7.5) pc = iAlt;
else if (part < 8.5) pc = vec3(0.62, 0.35, 0.21);
else if (part < 9.5) pc = clamp(vec3(0.9) - iHelmet * 0.8, 0.02, 1.0);
else if (part < 10.5) pc = vec3(0.022, 0.025, 0.04);
else if (part < 11.5) pc = iMisc.y < 1.5 ? vec3(0.7, 0.006, 0.16) : vec3(0.002, 0.3, 0.07);
else if (part < 12.5) pc = iAlt;
else if (part < 13.5) pc = vec3(0.8);
else if (part < 14.5) pc = iAlt;
else if (part < 15.5 || (part > 16.5 && part < 17.5) || part > 18.5) pc = vec3(0.012, 0.014, 0.022);
else pc = vec3(0.008, 0.008, 0.01);
vColor.rgb *= pc;`,
        );
    }),
    (e.customProgramCacheKey = () => `traffic-riders-v2`),
    e
  );
}
function cv(e, t, n) {
  let r = e.index ? e.toNonIndexed() : e;
  r.deleteAttribute(`uv`);
  let i = r.attributes.position.count,
    a = new Me(t),
    o = new Float32Array(i * 3);
  for (let e = 0; e < i; e++) o.set([a.r, a.g, a.b], e * 3);
  return (
    r.setAttribute(`color`, new P(o, 3)),
    r.setAttribute(`paint`, new P(new Float32Array(i).fill(n), 1)),
    r
  );
}
function lv(e, t, n, r, i, a, o, s = 0, c = 0) {
  let l = new F(e, t, n);
  return (c && l.rotateX(c), l.translate(r, i, a), cv(l, o, s));
}
function uv(e, t, n, r) {
  let i = new w(e, e, t, 10);
  return (i.rotateZ(Math.PI / 2), i.translate(n, e, r), cv(i, 1381653, 0));
}
function dv(e, t, n, r, i, a, o, s, c) {
  let l = new F(1, 1, 1),
    u = l.attributes.position;
  for (let c = 0; c < u.count; c++) {
    let l = u.getY(c) > 0,
      d = u.getX(c) * (l ? n : e),
      f = u.getZ(c) * (l ? r : t) + (l ? s : o);
    u.setXYZ(c, d, i + (l ? a : 0), f);
  }
  return (l.computeVertexNormals(), cv(l, c, 0));
}
var fv = 1778476,
  pv = 2105892,
  mv = 10133670,
  hv = 16774360,
  gv = 9048080;
function _v(e, t, n, r) {
  let i = [],
    a = t * 2,
    o = n * 2;
  if (e === `scooter` || e === `motorcycle` || e === `superbike`)
    (i.push(uv(0.27, 0.12, 0, -0.62), uv(0.27, 0.13, 0, 0.6)),
      i.push(lv(0.34, 0.07, 0.78, 0, 0.32, -0.02, 14540253, 1)),
      i.push(lv(0.4, 0.34, 0.86, 0, 0.52, 0.4, 16777215, 1)),
      i.push(lv(0.35, 0.09, 0.72, 0, 0.73, 0.28, pv, 0)),
      i.push(lv(0.42, 0.66, 0.14, 0, 0.62, -0.46, 16777215, 1, -0.22)),
      i.push(lv(0.2, 0.26, 0.5, 0, 0.42, -0.62, 16777215, 1)),
      i.push(lv(0.7, 0.05, 0.06, 0, 1, -0.55, pv, 0)),
      i.push(lv(0.26, 0.14, 0.12, 0, 0.98, -0.6, 16777215, 1)),
      i.push(lv(0.16, 0.09, 0.05, 0, 0.98, -0.67, hv, 0)),
      i.push(lv(0.2, 0.11, 0.03, 0, 0.62, 0.84, 15921906, 0)),
      i.push(lv(0.26, 0.06, 0.04, 0, 0.74, 0.83, gv, 0)),
      i.push(lv(0.06, 0.34, 0.06, 0, 0.3, -0.56, mv, 0, 0.25)));
  else if (e === `bus`)
    (i.push(
      uv(0.5, 0.3, -t + 0.2, -n + 1.6),
      uv(0.5, 0.3, t - 0.2, -n + 1.6),
      uv(0.5, 0.3, -t + 0.2, n - 1.7),
      uv(0.5, 0.3, t - 0.2, n - 1.7),
    ),
      i.push(lv(a, r - 0.45, o, 0, 0.35 + (r - 0.45) / 2, 0, 16777215, 1)),
      i.push(lv(a + 0.02, 0.95, o - 1.2, 0, 1.95, 0.25, fv, 0)),
      i.push(lv(a - 0.2, 1.3, 0.05, 0, 1.75, -n - 0.01, fv, 0)),
      i.push(lv(a - 0.5, 0.26, 0.05, 0, r - 0.3, -n - 0.02, 2233344, 0)),
      i.push(lv(a + 0.03, 0.22, o * 0.9, 0, 0.75, 0, 15921906, 0)));
  else {
    let s = e === `truck` || e === `van` ? 0.34 : 0.32,
      c = t - 0.12;
    if (
      (i.push(
        uv(s, 0.24, -c, -n + 0.75),
        uv(s, 0.24, c, -n + 0.75),
        uv(s, 0.24, -c, n - 0.75),
        uv(s, 0.24, c, n - 0.75),
      ),
      e === `truck`)
    )
      (i.push(lv(a, 0.55, o, 0, 0.62, 0, 16777215, 1)),
        i.push(lv(a - 0.05, 0.95, 1.35, 0, 1.35, -n + 0.68, 16777215, 1)),
        i.push(lv(a - 0.12, 0.5, 0.05, 0, 1.5, -n - 0.01, fv, 0)),
        i.push(lv(a, 0.3, o - 1.45, 0, 1.05, 0.72, mv, 0)));
    else if (e === `van`)
      (i.push(
        lv(a, r - 0.4, o - 0.3, 0, 0.3 + (r - 0.4) / 2, 0.15, 16777215, 1),
      ),
        i.push(lv(a - 0.02, 0.55, o - 0.9, 0, r - 0.55, 0.2, fv, 0)),
        i.push(lv(a - 0.15, 0.7, 0.05, 0, r - 0.6, -n + 0.16, fv, 0, 0.35)));
    else {
      let t = e === `suv` ? 0.72 : 0.58,
        n = 0.28;
      i.push(lv(a, t, o, 0, n + t / 2, 0, 16777215, 1));
      let s = r - n - t;
      (i.push(
        dv(a - 0.06, o * 0.27, a - 0.3, o * 0.18, n + t, s, 0.12, 0.2, fv),
      ),
        i.push(
          lv(a - 0.34, 0.04, o * 0.36, 0, n + t + s + 0.01, 0.2, 16777215, 1),
        ),
        e === `taxi` && i.push(lv(0.5, 0.2, 0.2, 0, r + 0.1, 0.2, 16774080, 0)),
        e === `police` &&
          (i.push(lv(1.1, 0.12, 0.28, 0, r + 0.06, 0.1, pv, 0)),
          i.push(lv(a + 0.02, 0.14, o * 0.8, 0, n + t * 0.55, 0, 1920936, 0))));
    }
    (i.push(
      lv(0.3, 0.1, 0.04, -t + 0.25, 0.72, -n - 0.01, hv, 0),
      lv(0.3, 0.1, 0.04, t - 0.25, 0.72, -n - 0.01, hv, 0),
    ),
      i.push(
        lv(0.3, 0.1, 0.04, -t + 0.2, 0.9, n + 0.01, gv, 0),
        lv(0.3, 0.1, 0.04, t - 0.2, 0.9, n + 0.01, gv, 0),
      ),
      i.push(lv(0.36, 0.12, 0.03, 0, 0.55, n + 0.02, 15921906, 0)));
  }
  let s = An(i, !1);
  return (s.computeBoundingSphere(), s);
}
