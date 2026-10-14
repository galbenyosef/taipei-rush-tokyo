// tokyo/assets/actors-Bnj6Q1ad 38 — math
// Lines 16061-16387 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function _d(e, t) {
  let n = new ic(),
    r = t.side ?? 1,
    i = uc().build;
  if (i && i(e, n, t)) return n;
  switch (e) {
    case `sedan`:
    case `police`:
    case `taxi`:
      ed(n, e, r);
      break;
    case `sports`:
      rd(n, r);
      break;
    case `suv`:
      id(n, r);
      break;
    case `van`:
      ad(n, !1);
      break;
    case `ambulance`:
      ad(n, !0);
      break;
    case `bus`:
      od(n, r);
      break;
    case `garbage`:
      sd(n);
      break;
    case `truck`:
      cd(n);
      break;
    case `scooter`:
      if ((ld(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (ud(n, 0), (n.steer = [e, n.vertexCount]));
      }
      t.rider && (au(n, su, 0, 6), au(n, cu, 5, 5));
      break;
    case `motorcycle`:
      if ((yu(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (bu(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && Du(n, `motorcycle`);
      break;
    case `superbike`:
      if ((xu(n, !1), t.wheels || t.steer)) {
        let e = n.vertexCount;
        (Su(n), (n.steer = [e, n.vertexCount]));
      }
      t.rider && Du(n, `superbike`);
  }
  return (
    t.wheels &&
      (e === `scooter`
        ? gd(n)
        : e === `motorcycle` || e === `superbike`
          ? Ou(n, e)
          : vd(n, e)),
    n
  );
}
function vd(e, t) {
  Hu(e, t);
  let n = yd[t];
  (e.style({ color: 328965, rough: 1 }),
    e.quad(
      [-n.w, 0.03, -n.l],
      [n.w, 0.03, -n.l],
      [n.w, 0.03, n.l],
      [-n.w, 0.03, n.l],
      [0, 1, 0],
    ));
}
var yd = {
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
  bd = {
    scooter: { a: [0.3, 0.4, 0.45, 0.45], b: [0.16, 0.45, 0, 0.3] },
    motorcycle: { a: [0.25, 0.25, 0.25, 0.25], b: [0.12, 0, 0, 0] },
    superbike: { a: [0, 0, 0, 0], b: [0.08, 0, 0.55, 0] },
    sports: { a: [0, 0, 0, 0], b: [0.6, 0.45, 0, 0] },
    suv: { a: [0, 0, 0, 0], b: [0.3, 0, 0, 0] },
    van: { a: [0.35, 0.35, 0.35, 0.35], b: [0.25, 0, 0, 0] },
    truck: { a: [0.3, 0.6, 0.75, 0.75], b: [0, 0, 0, 0] },
  };
function xd(e) {
  let t = uc();
  if ((!t.delivery && e?.length && (t.delivery = e), dc())) {
    (Object.assign(zs, t.specs),
      Object.assign(Ks, t.handling),
      Object.assign(bd, t.variants),
      Object.assign(yd, t.shadow),
      Object.assign(dd, t.riderPose),
      Object.assign(md, t.steerPivot));
    for (let e of t.kinds ?? []) Is.includes(e) || Is.push(e);
    for (let e of Object.keys({ ...t.specs, ...t.handling }))
      zs[e] && Ks[e] && qs(e);
  }
}
var Sd = new Int32Array(),
  Cd = new Float64Array(),
  wd = new Int32Array(),
  Td = new Float64Array(),
  Ed = new Int32Array(),
  Dd = new Uint8Array(),
  Od = new Float32Array(1),
  kd = new Int32Array(Od.buffer),
  Ad = (e) => ((Od[0] = e), kd[0]),
  jd = !0,
  Md = (e) => {
    let t = 16;
    for (; t < e;) t *= 2;
    return t;
  };
function Nd() {
  ((jd = !1),
    (Sd = new Int32Array()),
    (Cd = new Float64Array()),
    (wd = new Int32Array()),
    (Td = new Float64Array()),
    (Ed = new Int32Array()),
    (Dd = new Uint8Array()));
}
function Pd(e) {
  e.boundingBox || e.computeBoundingBox();
  let t = e.boundingBox;
  return Math.max(t.max.x - t.min.x, t.max.y - t.min.y, t.max.z - t.min.z) / 24;
}
function Fd(e, t) {
  let n = e.attributes.position.array,
    r = e.attributes.color.array,
    i = e.attributes.uv.array,
    a = e.attributes.vdata.array,
    o = e.attributes.vvar.array,
    s = t ?? Math.max(0.045, Pd(e)),
    c = n.length / 9,
    l = c * 3,
    u = (e) => a[e * 12 + 1] > 0.5;
  Sd.length < l && (Sd = new Int32Array(l));
  let d = Md(l * 2),
    f = d - 1;
  (Cd.length < d && ((Cd = new Float64Array(d)), (wd = new Int32Array(d))),
    Cd.fill(-1, 0, d),
    Td.length < l * 4 && (Td = new Float64Array(l * 4)));
  let p = 0;
  for (let e = 0; e < c; e++) {
    if (u(e)) {
      Sd[e * 3] = Sd[e * 3 + 1] = Sd[e * 3 + 2] = -1;
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
        let e = Cd[h];
        if (e === m) {
          g = wd[h];
          break;
        }
        if (e === -1) {
          ((g = p++), (Cd[h] = m), (wd[h] = g));
          let e = g * 4;
          Td[e] = Td[e + 1] = Td[e + 2] = Td[e + 3] = 0;
          break;
        }
        h = (h + 1) & f;
      }
      Sd[r] = g;
      let _ = g * 4;
      ((Td[_] += a), (Td[_ + 1] += o), (Td[_ + 2] += c), Td[_ + 3]++);
    }
  }
  Dd.length < c && (Dd = new Uint8Array(c));
  let m = Md(c * 2),
    h = m - 1;
  Ed.length < m * 5 && (Ed = new Int32Array(m * 5));
  for (let e = 0; e < m; e++) Ed[e * 5] = -1;
  let g = 0;
  for (let e = 0; e < c; e++) {
    Dd[e] = 0;
    let t = e * 3,
      r = Sd[t],
      i = Sd[t + 1],
      s = Sd[t + 2];
    if (r >= 0) {
      if (r === i || i === s || r === s) continue;
      (r > i && ((r ^= i), (i ^= r), (r ^= i)),
        i > s && ((i ^= s), (s ^= i), (i ^= s)),
        r > i && ((r ^= i), (i ^= r), (r ^= i)));
      let e = Ad(o[t]),
        n = Ad(a[t * 4]),
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
        if (Ed[t] === -1) {
          ((Ed[t] = r),
            (Ed[t + 1] = i),
            (Ed[t + 2] = s),
            (Ed[t + 3] = e),
            (Ed[t + 4] = n));
          break;
        }
        if (
          Ed[t] === r &&
          Ed[t + 1] === i &&
          Ed[t + 2] === s &&
          Ed[t + 3] === e &&
          Ed[t + 4] === n
        ) {
          l = !0;
          break;
        }
        c = (c + 1) & h;
      }
      if (l) continue;
    }
    Ud(n, t) && ((Dd[e] = 1), g++);
  }
  let _ = new Float32Array(g * 9),
    v = new Float32Array(g * 9),
    y = new Float32Array(g * 9),
    b = new Float32Array(g * 6),
    x = new Float32Array(g * 12),
    S = new Float32Array(g * 3),
    C = 0;
  for (let e = 0; e < c; e++) {
    if (!Dd[e]) continue;
    let t = e * 3;
    Ud(n, t);
    for (let e = 0; e < 3; e++) {
      let n = t + e,
        s = C + e;
      ((_[s * 3] = Id[e * 3]),
        (_[s * 3 + 1] = Id[e * 3 + 1]),
        (_[s * 3 + 2] = Id[e * 3 + 2]),
        (v[s * 3] = Bd.x),
        (v[s * 3 + 1] = Bd.y),
        (v[s * 3 + 2] = Bd.z),
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
  let w = new fe();
  return (
    w.setAttribute(`position`, new I(_, 3)),
    w.setAttribute(`normal`, new I(v, 3)),
    w.setAttribute(`color`, new I(y, 3)),
    w.setAttribute(`uv`, new I(b, 2)),
    w.setAttribute(`vdata`, new I(x, 4)),
    w.setAttribute(`vvar`, new I(S, 1)),
    w.computeBoundingBox(),
    w.computeBoundingSphere(),
    (w.userData = { ...e.userData, isLod: !0, triangles: g, cell: s }),
    delete w.userData.lod,
    jd || Nd(),
    w
  );
}
var Id = new Float64Array(9),
  Ld = new R(),
  Rd = new R(),
  zd = new R(),
  Bd = new R(),
  Vd = new R(),
  Hd = [Ld, Rd, zd];
function Ud(e, t) {
  let n = Hd;
  for (let r = 0; r < 3; r++) {
    let i = Sd[t + r],
      a = n[r];
    if (i < 0) {
      let n = (t + r) * 3;
      a.set(e[n], e[n + 1], e[n + 2]);
    } else {
      let e = i * 4;
      a.set(Td[e] / Td[e + 3], Td[e + 1] / Td[e + 3], Td[e + 2] / Td[e + 3]);
    }
    ((Id[r * 3] = a.x), (Id[r * 3 + 1] = a.y), (Id[r * 3 + 2] = a.z));
  }
  Bd.subVectors(Rd, Ld).cross(Vd.subVectors(zd, Ld));
  let r = Bd.length();
  return r < 1e-7 ? !1 : (Bd.multiplyScalar(1 / r), !0);
}
