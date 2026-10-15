// tokyo/assets/actors-qKVitB-C 50 — math
// Lines 19891-20217 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function $p(e, t) {
  let n = new Lu(),
    r = t.side ?? 1,
    i = Wu().build;
  if (i && i(e, n, t)) return n;
  switch (e) {
    case `sedan`:
    case `police`:
    case `taxi`:
      Ip(n, e, r);
      break;
    case `sports`:
      zp(n, r);
      break;
    case `suv`:
      Bp(n, r);
      break;
    case `van`:
      Vp(n, !1);
      break;
    case `ambulance`:
      Vp(n, !0);
      break;
    case `bus`:
      Hp(n, r);
      break;
    case `garbage`:
      Up(n);
      break;
    case `truck`:
      Wp(n);
      break;
    case `scooter`:
      if ((Gp(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (Kp(n, 0), (n.steer = [e, n.vertexCount]));
      }
      t.rider && (Vf(n, Uf, 0, 6), Vf(n, Wf, 5, 5));
      break;
    case `motorcycle`:
      if ((tp(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (np(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && lp(n, `motorcycle`);
      break;
    case `superbike`:
      if ((rp(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (ip(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && lp(n, `superbike`);
  }
  return (
    t.wheels &&
      (e === `scooter`
        ? Qp(n)
        : e === `motorcycle` || e === `superbike`
          ? up(n, e)
          : em(n, e)),
    n
  );
}
function em(e, t) {
  wp(e, t);
  let n = tm[t];
  (e.style({ color: 328965, rough: 1 }),
    e.quad(
      [-n.w, 0.03, -n.l],
      [n.w, 0.03, -n.l],
      [n.w, 0.03, n.l],
      [-n.w, 0.03, n.l],
      [0, 1, 0],
    ));
}
var tm = {
    scooter: { w: 0.2, l: 0.8 },
    motorcycle: { w: 0.2, l: 0.9 },
    superbike: { w: 0.2, l: 0.95 },
    sedan: { w: 0.88, l: 2.15 },
    taxi: { w: 0.88, l: 2.15 },
    suv: { w: 0.92, l: 2.2 },
    van: { w: 0.94, l: 2.3 },
    bus: { w: 1.22, l: 5.4 },
    police: { w: 0.9, l: 2.2 },
    ambulance: { w: 0.98, l: 2.6 },
    garbage: { w: 1.1, l: 3.45 },
    sports: { w: 0.94, l: 2.1 },
    truck: { w: 0.82, l: 2.05 },
  },
  nm = {
    scooter: { a: [0.3, 0.4, 0.45, 0.45], b: [0.16, 0.45, 0, 0.3] },
    motorcycle: { a: [0.25, 0.25, 0.25, 0.25], b: [0.12, 0, 0, 0] },
    superbike: { a: [0, 0, 0, 0], b: [0.08, 0, 0.55, 0] },
    sports: { a: [0, 0, 0, 0], b: [0.6, 0.45, 0, 0] },
    suv: { a: [0, 0, 0, 0], b: [0.3, 0, 0, 0] },
    van: { a: [0.35, 0.35, 0.35, 0.35], b: [0.25, 0, 0, 0] },
    truck: { a: [0.3, 0.6, 0.75, 0.75], b: [0, 0, 0, 0] },
  };
function rm(e) {
  let t = Wu();
  if ((!t.delivery && e?.length && (t.delivery = e), Gu())) {
    (Object.assign(Go, t.specs),
      Object.assign(Qo, t.handling),
      Object.assign(nm, t.variants),
      Object.assign(tm, t.shadow),
      Object.assign(qp, t.riderPose),
      Object.assign(Xp, t.steerPivot));
    for (let e of t.kinds ?? []) Ho.includes(e) || Ho.push(e);
    for (let e of Object.keys({ ...t.specs, ...t.handling }))
      Go[e] && Qo[e] && $o(e);
  }
}
var im = new Int32Array(),
  am = new Float64Array(),
  om = new Int32Array(),
  sm = new Float64Array(),
  cm = new Int32Array(),
  lm = new Uint8Array(),
  um = new Float32Array(1),
  dm = new Int32Array(um.buffer),
  fm = (e) => ((um[0] = e), dm[0]),
  pm = !0,
  mm = (e) => {
    let t = 16;
    for (; t < e;) t *= 2;
    return t;
  };
function hm() {
  ((pm = !1),
    (im = new Int32Array()),
    (am = new Float64Array()),
    (om = new Int32Array()),
    (sm = new Float64Array()),
    (cm = new Int32Array()),
    (lm = new Uint8Array()));
}
function gm(e) {
  e.boundingBox || e.computeBoundingBox();
  let t = e.boundingBox;
  return Math.max(t.max.x - t.min.x, t.max.y - t.min.y, t.max.z - t.min.z) / 24;
}
function _m(e, t) {
  let n = e.attributes.position.array,
    r = e.attributes.color.array,
    i = e.attributes.uv.array,
    a = e.attributes.vdata.array,
    o = e.attributes.vvar.array,
    s = t ?? Math.max(0.045, gm(e)),
    c = n.length / 9,
    l = c * 3,
    u = (e) => a[e * 12 + 1] > 0.5;
  im.length < l && (im = new Int32Array(l));
  let d = mm(l * 2),
    f = d - 1;
  (am.length < d && ((am = new Float64Array(d)), (om = new Int32Array(d))),
    am.fill(-1, 0, d),
    sm.length < l * 4 && (sm = new Float64Array(l * 4)));
  let p = 0;
  for (let e = 0; e < c; e++) {
    if (u(e)) {
      im[e * 3] = im[e * 3 + 1] = im[e * 3 + 2] = -1;
      continue;
    }
    for (let t = 0; t < 3; t++) {
      let r = e * 3 + t,
        i = r * 3,
        a = n[i],
        o = n[i + 1],
        c = n[i + 2],
        l = Math.round(a / s) + 1024,
        u = Math.round(o / s) + 1024,
        d = Math.round(c / s) + 1024,
        m = (l * 2048 + u) * 2048 + d,
        h =
          (Math.imul(l, 73856093) ^
            Math.imul(u, 19349663) ^
            Math.imul(d, 83492791)) &
          f,
        g = -1;
      for (;;) {
        let e = am[h];
        if (e === m) {
          g = om[h];
          break;
        }
        if (e === -1) {
          ((g = p++), (am[h] = m), (om[h] = g));
          let e = g * 4;
          sm[e] = sm[e + 1] = sm[e + 2] = sm[e + 3] = 0;
          break;
        }
        h = (h + 1) & f;
      }
      im[r] = g;
      let _ = g * 4;
      ((sm[_] += a), (sm[_ + 1] += o), (sm[_ + 2] += c), sm[_ + 3]++);
    }
  }
  lm.length < c && (lm = new Uint8Array(c));
  let m = mm(c * 2),
    h = m - 1;
  cm.length < m * 5 && (cm = new Int32Array(m * 5));
  for (let e = 0; e < m; e++) cm[e * 5] = -1;
  let g = 0;
  for (let e = 0; e < c; e++) {
    lm[e] = 0;
    let t = e * 3,
      r = im[t],
      i = im[t + 1],
      s = im[t + 2];
    if (r >= 0) {
      if (r === i || i === s || r === s) continue;
      (r > i && ((r ^= i), (i ^= r), (r ^= i)),
        i > s && ((i ^= s), (s ^= i), (i ^= s)),
        r > i && ((r ^= i), (i ^= r), (r ^= i)));
      let e = fm(o[t]),
        n = fm(a[t * 4]),
        c =
          (Math.imul(r, 2654435761) ^
            Math.imul(i, 2246822519) ^
            Math.imul(s, 3266489917) ^
            Math.imul(e, 668265263) ^
            n) >>>
          0;
      c = (c ^ (c >>> 15)) & h;
      let l = !1;
      for (;;) {
        let t = c * 5;
        if (cm[t] === -1) {
          ((cm[t] = r),
            (cm[t + 1] = i),
            (cm[t + 2] = s),
            (cm[t + 3] = e),
            (cm[t + 4] = n));
          break;
        }
        if (
          cm[t] === r &&
          cm[t + 1] === i &&
          cm[t + 2] === s &&
          cm[t + 3] === e &&
          cm[t + 4] === n
        ) {
          l = !0;
          break;
        }
        c = (c + 1) & h;
      }
      if (l) continue;
    }
    Tm(n, t) && ((lm[e] = 1), g++);
  }
  let _ = new Float32Array(g * 9),
    v = new Float32Array(g * 9),
    y = new Float32Array(g * 9),
    b = new Float32Array(g * 6),
    x = new Float32Array(g * 12),
    S = new Float32Array(g * 3),
    C = 0;
  for (let e = 0; e < c; e++) {
    if (!lm[e]) continue;
    let t = e * 3;
    Tm(n, t);
    for (let e = 0; e < 3; e++) {
      let n = t + e,
        s = C + e;
      ((_[s * 3] = vm[e * 3]),
        (_[s * 3 + 1] = vm[e * 3 + 1]),
        (_[s * 3 + 2] = vm[e * 3 + 2]),
        (v[s * 3] = Sm.x),
        (v[s * 3 + 1] = Sm.y),
        (v[s * 3 + 2] = Sm.z),
        (y[s * 3] = r[n * 3]),
        (y[s * 3 + 1] = r[n * 3 + 1]),
        (y[s * 3 + 2] = r[n * 3 + 2]),
        (b[s * 2] = i[n * 2]),
        (b[s * 2 + 1] = i[n * 2 + 1]),
        (x[s * 4] = a[n * 4]),
        (x[s * 4 + 1] = a[n * 4 + 1]),
        (x[s * 4 + 2] = a[n * 4 + 2]),
        (x[s * 4 + 3] = a[n * 4 + 3]),
        (S[s] = o[n]));
    }
    C += 3;
  }
  let w = new pe();
  return (
    w.setAttribute(`position`, new P(_, 3)),
    w.setAttribute(`normal`, new P(v, 3)),
    w.setAttribute(`color`, new P(y, 3)),
    w.setAttribute(`uv`, new P(b, 2)),
    w.setAttribute(`vdata`, new P(x, 4)),
    w.setAttribute(`vvar`, new P(S, 1)),
    w.computeBoundingBox(),
    w.computeBoundingSphere(),
    (w.userData = { ...e.userData, isLod: !0, triangles: g, cell: s }),
    delete w.userData.lod,
    pm || hm(),
    w
  );
}
var vm = new Float64Array(9),
  ym = new L(),
  bm = new L(),
  xm = new L(),
  Sm = new L(),
  Cm = new L(),
  wm = [ym, bm, xm];
function Tm(e, t) {
  let n = wm;
  for (let r = 0; r < 3; r++) {
    let i = im[t + r],
      a = n[r];
    if (i < 0) {
      let n = (t + r) * 3;
      a.set(e[n], e[n + 1], e[n + 2]);
    } else {
      let e = i * 4;
      a.set(sm[e] / sm[e + 3], sm[e + 1] / sm[e + 3], sm[e + 2] / sm[e + 3]);
    }
    ((vm[r * 3] = a.x), (vm[r * 3 + 1] = a.y), (vm[r * 3 + 2] = a.z));
  }
  Sm.subVectors(bm, ym).cross(Cm.subVectors(xm, ym));
  let r = Sm.length();
  return r < 1e-7 ? !1 : (Sm.multiplyScalar(1 / r), !0);
}
